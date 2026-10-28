'use strict';
/* Phòng học cho mọi loại việc trong lịch: học mới (learn), ôn tập topic (review), thi thử (mock), chữa đề (mockreview).
   Mở được cả việc đã hoàn thành (chế độ xem lại). Dùng chung state S và các helper của app.js. */

const PHASES = [
  { key: 'warmup', label: 'Khởi động', pct: 6 },
  { key: 'learn', label: 'Học', pct: 67 },
  { key: 'practice', label: 'Luyện tập', pct: 22 },
  { key: 'wrap', label: 'Tổng kết', pct: 5 },
];
const REVIEW_SIZE = 30;
const PRACTICE_SIZE = 10; // questions drawn per attempt from a module's bank (bank may grow beyond 10)
// Question language: English by default (the exam is in English); remembered per browser.
let LANG = 'en';
try { LANG = localStorage.getItem('cfaLang') === 'vi' ? 'vi' : 'en'; } catch (e) { /* storage unavailable */ }
function setLang(l) { LANG = l; try { localStorage.setItem('cfaLang', l); } catch (e) { /* storage unavailable */ } }
const MOCK_SIZE = 90;
// Exam sessions follow the 2027 Level I layout (CFA Institute topic outline page).
const MOCK_SESSIONS = { 1: ['ET', 'QM', 'EC', 'FSA', 'CF'], 2: ['EQ', 'FI', 'DE', 'AI', 'PC'] };

let roomTaskId = null;
let roomTimer = null;
let ending = false;

const roomTask = () => S.tasks.find(t => t.id === roomTaskId);
const lessonById = id => (id && window.LESSONS ? window.LESSONS[id] : null);
const mockNo = t => Number(String(t.key).split(':')[1]);
const mockSession = t => Number(String(t.key).split(':')[2]);

/* ---------- Session ---------- */
function session(t) {
  if (!S.sessions[t.id]) {
    const base = { start: Date.now(), pausedTotal: 0, pauseStart: null, side: 'notes', sec: 0, seen: [0], page: 0, answers: {}, graded: false, phase: 'warmup', revisit: !!t.done };
    if (t.type === 'learn') Object.assign(base, { tab: 'lesson', mod: t.moduleId, qset: buildPracticeSet(t.moduleId) });
    if (t.type === 'review') Object.assign(base, { tab: 'practice', mod: topicModules(t.topic)[0], qset: buildReviewSet(t.topic) });
    if (t.type === 'mock') Object.assign(base, { tab: 'practice', qset: buildMockSet(mockSession(t)), qi: 0 });
    if (t.type === 'mockreview') Object.assign(base, { tab: 'results', mod: null, onlyWrong: true });
    S.sessions[t.id] = base;
  }
  const ss = S.sessions[t.id];
  if (t.type === 'learn' && !ss.mod) ss.mod = t.moduleId; // sessions saved before review/mock rooms existed
  if (t.type === 'learn' && !ss.qset && lessonById(t.moduleId)) ss.qset = lessonById(t.moduleId).practice.map((_, i) => ({ m: t.moduleId, i })); // saved before shuffling existed: keep original order
  return ss;
}
function elapsedMs(ss) {
  const now = Date.now();
  return now - ss.start - ss.pausedTotal - (ss.pauseStart ? now - ss.pauseStart : 0);
}
// Phases follow what the learner does (not the clock); the clock only tells how long each phase has taken against its share.
const phaseBudget = (t, p) => (t.minutes * 60000 * p.pct) / 100;
const phaseSpent = (ss, key, ms) => ((ss.phaseMs || {})[key] || 0) + (ss.phase === key ? ms - (ss.phaseSince || 0) : 0);
function goPhase(t, ss, key) {
  if (t.type !== 'learn' || ss.revisit || ss.phase === key) return;
  const ms = elapsedMs(ss);
  ss.phaseMs = ss.phaseMs || {};
  ss.phaseMs[ss.phase] = (ss.phaseMs[ss.phase] || 0) + ms - (ss.phaseSince || 0);
  ss.phase = key;
  ss.phaseSince = ms;
}
// Class and label of a phase box: "over N'" when it has run past its share, "fast N'" for a finished phase done early.
function stepView(t, ss, p, ms) {
  const spent = phaseSpent(ss, p.key, ms), diff = spent - phaseBudget(t, p), cur = ss.phase === p.key;
  const mins = Math.floor(Math.abs(diff) / 60000);
  const over = diff >= 60000, fast = !cur && spent >= 60000 && -diff >= 60000;
  const cls = `step ${cur ? 'on' : ''} ${!cur && spent > 0 ? 'past' : ''} ${over ? 'over' : ''} ${fast ? 'fast' : ''}`;
  return { cls, text: `${p.label} ${Math.round(t.minutes * p.pct / 100)}'${over ? ` (quá ${mins}')` : fast ? ` (nhanh ${mins}')` : ''}` };
}
const mmss = ms => { const s = Math.max(0, Math.floor(ms / 1000)); return `${pad(Math.floor(s / 60))}:${pad(s % 60)}`; };

/* ---------- Question pools ---------- */
const topicModules = code => (TOPIC[code] ? TOPIC[code].modules.map(m => m.id).filter(id => lessonById(id)) : []);
function shuffle(a) { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
// A question reference: module, index in its bank, and p = display order of the choices (p[k] = original choice shown at position k).
function makeRef(m, i) {
  const q = lessonById(m).practice[i];
  const p = q.choices.map((_, k) => k);
  return { m, i, p: q.keepOrder ? p : shuffle(p) };
}
// Text in the chosen language (falls back to Vietnamese where no English version exists); answer always from the bank.
function qOf(ref) {
  const L = lessonById(ref.m);
  const base = L && L.practice[ref.i];
  if (!base) return null;
  const en = LANG === 'en' && window.PRACTICE_EN && window.PRACTICE_EN[ref.m] && window.PRACTICE_EN[ref.m][ref.i];
  const src = en || base;
  return { q: src.q, choices: src.choices, explain: src.explain, answer: base.answer, src: ref.m, p: ref.p || base.choices.map((_, k) => k), lang: en ? 'en' : 'vi' };
}
// A fresh attempt for a module: random questions from its bank, random order, shuffled choices.
function buildPracticeSet(m) {
  const L = lessonById(m);
  if (!L) return [];
  return shuffle(L.practice.map((_, i) => i)).slice(0, PRACTICE_SIZE).map(i => makeRef(m, i));
}

// Review: round-robin over the topic's modules so every module is represented.
function buildReviewSet(code) {
  const lists = topicModules(code).map(id => shuffle(lessonById(id).practice.map((_, i) => ({ m: id, i }))));
  const out = [];
  while (out.length < REVIEW_SIZE && lists.some(l => l.length)) lists.forEach(l => { if (l.length && out.length < REVIEW_SIZE) out.push(l.shift()); });
  return shuffle(out).map(r => makeRef(r.m, r.i));
}
// Mock: 90 questions split across the session's topics by 2027 weight midpoints; unused questions first.
function buildMockSet(sessionNo) {
  const codes = MOCK_SESSIONS[sessionNo] || MOCK_SESSIONS[1];
  const w = codes.map(c => (TOPIC[c].weightMin + TOPIC[c].weightMax) / 2);
  const tot = sum(w, x => x);
  const raw = w.map(x => (x / tot) * MOCK_SIZE);
  const n = raw.map(Math.floor);
  raw.map((x, i) => [x - n[i], i]).sort((a, b) => b[0] - a[0]).slice(0, MOCK_SIZE - sum(n, x => x)).forEach(([, i]) => { n[i]++; });
  const used = new Set();
  Object.values(S.mockResults || {}).forEach(r => Object.values(r).forEach(x => (x.qset || []).forEach(q => used.add(`${q.m}:${q.i}`))));
  const out = [];
  codes.forEach((c, k) => {
    const pool = shuffle(topicModules(c).flatMap(id => lessonById(id).practice.map((_, i) => ({ m: id, i }))));
    pool.sort((a, b) => used.has(`${a.m}:${a.i}`) - used.has(`${b.m}:${b.i}`));
    out.push(...pool.slice(0, n[k]).map(r => makeRef(r.m, r.i)));
  });
  return out;
}

/* ---------- Enter / leave ---------- */
function pauseRoom() {
  const t = roomTask();
  if (!t || !S.sessions[t.id]) return;
  const ss = S.sessions[t.id];
  if (!ss.pauseStart) { ss.pauseStart = Date.now(); save(); }
}
function resumeRoom() {
  const t = roomTask();
  if (!t) return;
  const ss = session(t);
  if (ss.pauseStart) { ss.pausedTotal += Date.now() - ss.pauseStart; ss.pauseStart = null; save(); }
}
function enterRoom(id) {
  if (!S.tasks.some(t => t.id === id)) return;
  roomTaskId = id;
  S.activeRoom = id;
  ending = false;
  termQ = ''; // a glossary search from another lesson must not filter this one
  const t = roomTask();
  if (S.sessions[t.id] && S.sessions[t.id].revisit !== !!t.done) delete S.sessions[t.id];
  session(t);
  resumeRoom();
  save();
  view = 'room';
  render();
  window.scrollTo(0, 0);
}
function leaveRoom() {
  pauseRoom();
  clearInterval(roomTimer);
  view = 'today';
  render();
}

/* ---------- Render ---------- */
const TYPE_TITLE = { learn: 'Học mới', review: 'Ôn tập', mock: 'Thi thử', mockreview: 'Chữa đề' };

window.renderRoom = function renderRoom() {
  const t = roomTask();
  if (!t) { S.activeRoom = null; save(); view = 'today'; return renderToday(); }
  const ss = session(t);
  const ms = elapsedMs(ss);
  const L = lessonById(ss.mod);
  if (ending) return renderEnd(t, L, ss, ms);

  const isMock = t.type === 'mock';
  const limit = t.minutes * 60000;
  const clockMs = isMock && !ss.graded ? Math.max(0, limit - ms) : ms;
  const stepper = t.type === 'learn' && !ss.revisit ? `<div class="steps">${PHASES.map(p => {
    const v = stepView(t, ss, p, ms);
    return `<button type="button" class="${v.cls}" data-r="phase" data-k="${p.key}" data-phase="${p.key}">${v.text}</button>`;
  }).join('')}</div>` : `<div class="steps"><span class="step on">${ss.revisit ? 'Xem lại' : TYPE_TITLE[t.type]}</span>${t.date !== todayStr() ? `<span class="step">Lịch: ${fmtDate(t.date)}</span>` : ''}</div>`;
  const title = t.moduleId ? `${esc(t.moduleId)} - ${esc(t.title)}` : esc(t.title);
  const head = `<div class="room-head card">
    <div class="rh-left"><button class="btn small" data-r="leave">← Quay lại</button>
      <div>${t.topic && TOPIC[t.topic] ? `<div class="rh-topic">${esc(TOPIC[t.topic].name)}</div>` : ''}<div class="rh-title">${title}${t.parts > 1 ? ` <span class="muted">(phần ${t.part}/${t.parts})</span>` : ''}</div>${stepper}</div></div>
    <div class="rh-right"><div class="clock ${ss.pauseStart ? 'paused' : ''} ${isMock && !ss.graded && clockMs < 600000 ? 'late' : ''}"><span id="room-clock">${mmss(clockMs)}</span><small>${isMock && !ss.graded ? ' còn lại' : ` / ${t.minutes}:00`}</small></div>
      <button class="btn small" data-r="${ss.pauseStart ? 'resume' : 'pause'}">${ss.pauseStart ? 'Tiếp tục' : 'Tạm dừng'}</button>
      <button class="btn small primary" data-r="end">${ss.revisit ? 'Kết thúc xem lại' : 'Kết thúc buổi học'}</button></div>
  </div>`;

  const tabs = roomTabs(t);
  if (!tabs.some(([k]) => k === ss.tab)) ss.tab = tabs[0][0];
  const body = ss.tab === 'lesson' ? renderLesson(t, L, ss)
    : ss.tab === 'slides' ? renderSlides(t, L, ss)
      : ss.tab === 'results' ? renderMockResults(t, ss)
        : renderPractice(t, ss);
  const left = `<div class="room-main card">
    <div class="rtabs">${tabs.map(([k, v]) => `<button class="${ss.tab === k ? 'on' : ''}" data-r="tab" data-k="${k}">${v}</button>`).join('')}</div>
    <div class="rbody">${modPicker(t, ss)}${body}</div></div>`;
  const sides = isMock ? [['nav', 'Bảng câu hỏi']] : [['terms', 'Thuật ngữ'], ['notes', 'Ghi chú'], ['ask', 'Hỏi đáp']];
  if (!sides.some(([k]) => k === ss.side)) ss.side = sides[0][0];
  const right = `<aside class="room-side card">
    <div class="rtabs">${sides.map(([k, v]) => `<button class="${ss.side === k ? 'on' : ''}" data-r="side" data-k="${k}">${v}</button>`).join('')}</div>
    <div class="rbody">${ss.side === 'nav' ? renderNav(t, ss) : ss.side === 'terms' ? renderTerms(L, ss) : ss.side === 'notes' ? renderNotes(t, ss) : renderAsk(t, L, ss)}</div></aside>`;
  return `${head}${renderPhaseCard(t, ss, L, clockMs)}<div class="room-grid">${left}${right}</div>`;
};

function roomTabs(t) {
  if (t.type === 'learn') return [['lesson', 'Bài giảng'], ['slides', 'Slide'], ['practice', 'Luyện tập']];
  if (t.type === 'review') return [['practice', `Bộ câu ôn (${REVIEW_SIZE})`], ['lesson', 'Xem lại bài giảng'], ['slides', 'Slide']];
  if (t.type === 'mock') return [['practice', `Đề thi (${MOCK_SIZE} câu)`]];
  return [['results', 'Kết quả và lời giải'], ['lesson', 'Xem lại bài giảng'], ['slides', 'Slide']];
}

// Module picker for review/mockreview rooms (lesson, slides, glossary follow the chosen module).
function modPicker(t, ss) {
  if (t.type === 'learn' || t.type === 'mock' || !['lesson', 'slides'].includes(ss.tab)) return '';
  const ids = t.type === 'review' ? topicModules(t.topic) : Object.keys(window.LESSONS || {});
  if (!ss.mod) ss.mod = ids[0];
  return `<div class="row" style="margin-bottom:10px"><label class="f">Chọn module<select data-r="mod">${ids.map(id => `<option value="${id}" ${id === ss.mod ? 'selected' : ''}>${id} - ${esc(MODULE[id].name)}</option>`).join('')}</select></label></div>`;
}

function renderPhaseCard(t, ss, L, clockMs) {
  if (ss.revisit) return '<div class="banner ok phase">Bạn đang <b>xem lại</b> một bài đã hoàn thành. Thời gian xem lại được ghi vào hôm nay, lộ trình giữ nguyên.</div>';
  if (t.type === 'mock') {
    if (ss.graded) return '<div class="banner ok phase">Đã nộp bài. Xem điểm theo topic ở bảng bên phải và lời giải từng câu bên dưới, rồi bấm <b>Kết thúc buổi học</b>.</div>';
    return `<div class="banner ${clockMs === 0 ? 'bad' : 'warn'} phase">${clockMs === 0 ? '<b>Hết giờ.</b> Bấm Nộp bài để xem kết quả.' : `<b>Thi thử như thật:</b> ${MOCK_SIZE} câu, 135 phút (khoảng 90 giây mỗi câu). Không xem bài giảng trong lúc làm.`}</div>`;
  }
  if (t.type === 'review') return `<div class="banner ok phase"><b>Ôn tập ${esc(TOPIC[t.topic].short)}:</b> làm bộ ${ss.qset.length} câu trộn từ các module, nộp bài, rồi dùng tab Xem lại bài giảng cho những module còn yếu.</div>`;
  if (t.type === 'mockreview') return '<div class="banner ok phase"><b>Chữa đề:</b> với mỗi câu sai, đọc lời giải rồi mở bài giảng của module đó (nút bên dưới câu) để học lại.</div>';
  if (ss.phase === 'warmup' && L && L.warmup) return `<div class="banner ok phase"><b>Khởi động (khoảng 5 phút):</b> trả lời nhanh trong đầu hoặc ghi vào Ghi chú, chưa cần xem tài liệu.<ol>${L.warmup.map(x => `<li>${esc(x)}</li>`).join('')}</ol></div>`;
  if (ss.phase === 'practice') return '<div class="banner warn phase"><b>Giai đoạn luyện tập:</b> mở tab Luyện tập, làm hết rồi bấm Nộp bài. Không xem lời giải trước.</div>';
  if (ss.phase === 'wrap' && L && L.wrapup) return `<div class="banner ok phase"><b>Tổng kết:</b> viết vào Ghi chú.<ol>${L.wrapup.map(x => `<li>${esc(x)}</li>`).join('')}</ol>Xong thì bấm <b>Kết thúc buổi học</b>.</div>`;
  return '';
}

function renderLesson(t, L, ss) {
  if (!L) return '<div class="empty">Module này chưa có bài giảng.</div>';
  const sec = L.sections[ss.sec] || L.sections[0];
  if (!L.sections[ss.sec]) ss.sec = 0;
  const nav = L.sections.map((s, i) => `<button class="pill ${i === ss.sec ? 'on' : ''} ${ss.seen.includes(i) ? 'seen' : ''}" data-r="sec" data-i="${i}" title="${esc(s.title)}">${i + 1}</button>`).join('');
  return `<div class="secnav">${nav}<span class="small muted">${ss.seen.length}/${L.sections.length} phần đã xem</span></div>
    <article class="lesson"><h2>${esc(sec.title)} <span class="small muted">~${sec.minutes} phút</span></h2>${sec.html}</article>
    <div class="actions pager"><button class="btn" data-r="sec" data-i="${ss.sec - 1}" ${ss.sec === 0 ? 'disabled' : ''}>← Phần trước</button>
    <button class="btn primary" data-r="sec" data-i="${ss.sec + 1}" ${ss.sec >= L.sections.length - 1 ? 'disabled' : ''}>Phần tiếp →</button></div>
    ${ss.sec === 0 ? renderLos(ss.mod) : ''}`;
}
function renderLos(id) {
  const m = MODULE[id];
  if (!m || !m.los.length) return '';
  return `<details class="los"><summary>LOS của module (${m.los.length})</summary><ul>${m.los.map(l => `<li>${esc(l)}</li>`).join('')}</ul></details>`;
}

function deckLen(d) { return (d.html || d.pages).length; }
function slideInner(d, p) { return d.html ? d.html[p] : `<img src="${esc(d.pages[p])}" alt="Slide trang ${p + 1}">`; }
// Only the self-designed deck is shown; original class slides stay in the data but are not listed.
const ownDeck = L => (L && L.slides ? L.slides.find(d => d.html) : null);

function renderSlides(t, L, ss) {
  const d = ownDeck(L);
  if (!d) return '<div class="empty">Chưa có slide cho module này.</div>';
  const n = deckLen(d);
  const p = Math.min(ss.page, n - 1);
  const jump = d.titles ? `<select data-r="jump">${d.titles.map((x, i) => `<option value="${i}" ${i === p ? 'selected' : ''}>${i + 1}. ${esc(x)}</option>`).join('')}</select>` : '';
  return `<div class="row" style="margin-bottom:8px">${jump}<span class="small muted">phím ← → để lật</span></div>
    <div class="slide-wrap" id="slide-wrap">
      <div class="slide ${d.html ? 'own' : ''}" id="slide-stage">${slideInner(d, p)}</div>
      <div class="slide-count" id="slide-count">${p + 1} / ${n}</div>
      <button class="fs-nav prev" data-r="page" data-i="-1" aria-label="Trang trước">‹</button>
      <button class="fs-nav next" data-r="page" data-i="+1" aria-label="Trang sau">›</button>
    </div>
    <div class="actions pager"><button class="btn" data-r="page" data-i="-1">← Trang trước</button>
    <button class="btn" data-r="fullscreen">⛶ Toàn màn hình</button>
    <button class="btn primary" data-r="page" data-i="+1">Trang sau →</button></div>`;
}

// Flip pages in place (no full re-render) so fullscreen presentation keeps working.
function showPage(delta, absolute) {
  const t = roomTask();
  const ss = t && S.sessions[t.id];
  const d = ss && ownDeck(lessonById(ss.mod));
  if (!d) return;
  const n = deckLen(d);
  const p = absolute != null ? absolute : ss.page + delta;
  if (p < 0 || p >= n) return;
  ss.page = p;
  save();
  const stage = document.getElementById('slide-stage');
  if (!stage) return;
  stage.innerHTML = slideInner(d, p);
  document.getElementById('slide-count').textContent = `${p + 1} / ${n}`;
  const j = app.querySelector('[data-r="jump"]');
  if (j) j.value = String(p);
}

// Questions shown in this room: the module's own set for learn, the stored set for review/mock.
function roomQuestions(t, ss) {
  return (ss.qset || []).map(qOf).filter(Boolean);
}
// Each graded attempt is stored per module (questions in review/mock sets carry their module in q.src);
// the Chương trình tab shows the latest attempt and the running total.
function recordPractice(qs, answers) {
  S.qstats = S.qstats || {};
  const by = {};
  qs.forEach((q, i) => {
    by[q.src] = by[q.src] || { c: 0, n: 0 };
    by[q.src].n++;
    if (answers[i] === q.answer) by[q.src].c++;
  });
  Object.entries(by).forEach(([m, v]) => {
    const x = S.qstats[m] || { c: 0, n: 0, tries: 0 };
    S.qstats[m] = { c: x.c + v.c, n: x.n + v.n, tries: x.tries + 1, last: { c: v.c, n: v.n, date: todayStr() } };
  });
}
function topicScores(qs, answers) {
  const by = {};
  qs.forEach((q, i) => {
    const c = MODULE[q.src].topic;
    by[c] = by[c] || { c: 0, n: 0 };
    by[c].n++;
    if (answers[i] === q.answer) by[c].c++;
  });
  return by;
}
function scoreTable(by) {
  return `<table><thead><tr><th>Topic</th><th class="num">Đúng</th><th class="num">%</th></tr></thead><tbody>${Object.entries(by).map(([c, v]) => {
    const p = v.c / v.n; const cls = p < 0.6 ? 'bad' : p < 0.7 ? 'warn' : 'ok';
    return `<tr><td>${esc(TOPIC[c].short)}</td><td class="num">${v.c}/${v.n}</td><td class="num"><span class="badge ${cls}">${Math.round(p * 100)}%</span></td></tr>`;
  }).join('')}</tbody></table>`;
}

function questionHtml(q, i, a, graded, opts = {}) {
  const right = a === q.answer;
  const verdict = graded ? (right ? '<span class="res-tag ok">✓ Đúng</span>' : `<span class="res-tag bad">✗ ${a == null ? 'Sai (chưa trả lời)' : 'Sai'}</span>`) : '';
  const posOfAnswer = q.p.indexOf(q.answer);
  return `<div class="q ${graded ? (right ? 'right' : 'wrong') : ''}" id="q-${i}"><div class="qh">${verdict}${q.lang === 'en' ? 'Question' : 'Câu'} ${i + 1}. ${esc(q.q)}${opts.showSrc ? ` <span class="badge">${esc(q.src)}</span>` : ''}${LANG === 'en' && q.lang !== 'en' ? ' <span class="badge">chưa có bản tiếng Anh</span>' : ''}</div>
    ${q.p.map((j, k) => `<label class="choice ${graded && j === q.answer ? 'ans' : ''} ${graded && j === a && !right ? 'picked-wrong' : ''}"><input type="radio" name="q${i}" value="${j}" ${a === j ? 'checked' : ''} ${graded || opts.readonly ? 'disabled' : ''} data-r="answer" data-i="${i}"> ${'ABC'[k]}. ${esc(q.choices[j])}</label>`).join('')}
    ${graded ? `<div class="explain">${right ? '<b class="txt-ok">Đúng.</b>' : `<b class="txt-bad">Sai</b> - đáp án đúng là <b>${'ABC'[posOfAnswer]}</b>.`} ${esc(q.explain)}</div>
      ${opts.openLesson ? `<div class="actions" style="margin-top:6px"><button class="btn small" data-r="open-mod" data-m="${esc(q.src)}">Mở bài giảng ${esc(q.src)}</button></div>` : ''}` : ''}</div>`;
}
// One coloured cell per question after grading; click to jump to it.
function resultStrip(qs, answers) {
  return `<div class="res-strip">${qs.map((q, i) => `<button class="qcell ${answers[i] === q.answer ? 'ok' : 'bad'}" data-r="goto" data-i="${i}" title="Câu ${i + 1}">${i + 1}</button>`).join('')}</div>`;
}
const langSwitch = () => `<div class="lang-switch" role="group" aria-label="Ngôn ngữ câu hỏi"><button class="${LANG === 'en' ? 'on' : ''}" data-r="lang" data-k="en">EN</button><button class="${LANG === 'vi' ? 'on' : ''}" data-r="lang" data-k="vi">VI</button></div>`;

function renderPractice(t, ss) {
  const qs = roomQuestions(t, ss);
  if (!qs.length) return '<div class="empty">Chưa có câu hỏi cho buổi này.</div>';
  const correct = qs.filter((q, i) => ss.answers[i] === q.answer).length;
  const isMock = t.type === 'mock';
  let h = `<div class="practice-bar">${langSwitch()}<span class="small muted">${ss.graded ? '' : `${qs.length} câu, mỗi câu 3 lựa chọn như đề thi thật. Mục tiêu khoảng 90 giây mỗi câu.`}</span></div>`;
  if (ss.graded) {
    h += `<div class="banner ${correct / qs.length >= 0.7 ? 'ok' : 'warn'}"><b>Kết quả: ${correct}/${qs.length} câu đúng (${Math.round((correct / qs.length) * 100)}%).</b> ${correct / qs.length >= 0.7 ? 'Đạt mức an toàn 70%.' : 'Dưới 70% - xem kỹ lời giải và học lại phần liên quan.'}
        ${resultStrip(qs, ss.answers)}
        ${isMock ? '' : `<div class="actions"><button class="btn small" data-r="retry">Làm lại (xáo câu và đáp án)</button>${t.type === 'review' ? ' <button class="btn small" data-r="newset">Bộ câu mới</button>' : ''}</div>`}</div>
        ${t.type !== 'learn' ? scoreTable(topicScores(qs, ss.answers)) : ''}`;
  }
  h += qs.map((q, i) => questionHtml(q, i, ss.answers[i], ss.graded, { showSrc: t.type !== 'learn' && ss.graded, openLesson: t.type === 'review' })).join('');
  if (!ss.graded) h += `<div class="actions pager"><button class="btn primary" data-r="grade">Nộp bài (${Object.keys(ss.answers).length}/${qs.length} đã chọn)</button></div>`;
  return h;
}

// Right panel of a mock: answer grid to jump between questions, plus topic scores after grading.
function renderNav(t, ss) {
  const qs = roomQuestions(t, ss);
  const cells = qs.map((q, i) => {
    const a = ss.answers[i];
    const cls = ss.graded ? (a === q.answer ? 'ok' : 'bad') : a != null ? 'on' : '';
    return `<button class="qcell ${cls}" data-r="goto" data-i="${i}">${i + 1}</button>`;
  }).join('');
  return `<p class="small muted">${Object.keys(ss.answers).length}/${qs.length} câu đã chọn. Bấm số để nhảy tới câu.</p><div class="qgrid">${cells}</div>
    ${ss.graded ? `<h3 style="margin-top:14px">Điểm theo topic</h3>${scoreTable(topicScores(qs, ss.answers))}` : ''}`;
}

// Mock review: answers of both sessions of mock #k, wrong ones first.
function renderMockResults(t, ss) {
  const res = (S.mockResults || {})[mockNo(t)];
  if (!res || !Object.keys(res).length) return `<div class="empty">Chưa có kết quả thi thử #${mockNo(t)}. Hãy làm 2 session của đề này trước, rồi quay lại chữa đề.</div>`;
  let h = '';
  Object.keys(res).sort().forEach(sn => {
    const r = res[sn];
    const qs = r.qset.map(qOf).filter(Boolean);
    const correct = qs.filter((q, i) => r.answers[i] === q.answer).length;
    h += `<h3>Session ${sn}: ${correct}/${qs.length} câu đúng (${Math.round((correct / qs.length) * 100)}%)</h3>${scoreTable(topicScores(qs, r.answers))}`;
    h += qs.map((q, i) => (ss.onlyWrong && r.answers[i] === q.answer ? '' : questionHtml(q, i, r.answers[i], true, { showSrc: true, openLesson: true }))).join('');
  });
  return `<div class="practice-bar">${langSwitch()}<label class="row small"><input type="checkbox" data-r="onlywrong" ${ss.onlyWrong ? 'checked' : ''}> Chỉ hiện câu sai</label></div>${h}`;
}

// Glossary panel: terms used in the section being read come first, the rest are collapsed below. Search ignores diacritics.
let termQ = '';
const termHtml = ([en, vi, d]) => `<div class="term-item"><b>${esc(en)}</b><div>${esc(vi)}</div><div class="small muted">${esc(d)}</div></div>`;
function sectionTermKeys(L, ss) {
  const sec = L.sections[ss.sec] || L.sections[0];
  const keys = [];
  String((sec && sec.html) || '').replace(/data-term="([^"]+)"/g, (m, k) => { if (L.glossary[k] && !keys.includes(k)) keys.push(k); });
  return keys;
}
function termResults(L, ss) {
  const here = sectionTermKeys(L, ss), hereSet = new Set(here);
  const words = fold(termQ).split(/\s+/).filter(Boolean);
  const hit = ([en, vi, d]) => words.every(w => fold(`${en} ${vi} ${d}`).includes(w));
  const mine = here.map(k => L.glossary[k]).filter(hit);
  const rest = Object.keys(L.glossary).filter(k => !hereSet.has(k)).map(k => L.glossary[k]).filter(hit);
  if (!mine.length && !rest.length) return `<p class="small muted">Không có thuật ngữ nào khớp "${esc(termQ)}".</p>`;
  let h = '';
  if (mine.length) h += `<div class="term-group small">Trong phần đang học (${mine.length})</div>${mine.map(termHtml).join('')}`;
  else if (!words.length) h += '<p class="small muted">Phần này chưa đánh dấu thuật ngữ nào.</p>';
  if (rest.length) {
    const body = `<summary class="term-group small">${mine.length || !words.length ? 'Các thuật ngữ khác' : 'Kết quả'} (${rest.length})</summary>${rest.map(termHtml).join('')}`;
    h += `<details class="term-rest" ${words.length ? 'open' : ''}>${body}</details>`;
  }
  return h;
}
function renderTerms(L, ss) {
  if (!L || !L.glossary) return '<div class="empty small">Chọn một module để xem thuật ngữ.</div>';
  return `<input type="search" id="term-q" class="term-q" value="${esc(termQ)}" placeholder="Tìm thuật ngữ (không dấu cũng được)..." autocomplete="off" aria-label="Tìm thuật ngữ">
    <div class="terms-scroll" id="term-results" tabindex="0">${termResults(L, ss)}</div>
    <p class="small muted">Rê chuột lên chữ có gạch chân chấm trong bài giảng để xem nhanh.</p>`;
}

const notesKey = (t, ss) => ss.mod || (t.topic ? `T:${t.topic}` : `M:${mockNo(t)}`);
function renderNotes(t, ss) {
  const k = notesKey(t, ss);
  const v = S.notes[k] || '';
  const label = MODULE[k] ? `module ${k}` : 'buổi này';
  return `<p class="small muted">Ghi chú lưu theo ${esc(label)}, tự động lưu khi gõ.</p>
    <textarea class="notes" data-r="notes" placeholder="${ss.phase === 'wrap' ? '3 ý chính hôm nay...' : 'Ghi lại ý chính, công thức, chỗ chưa hiểu...'}">${esc(v)}</textarea>
    <div class="small muted" id="notes-state">${v ? `${v.length} ký tự` : ''}</div>`;
}

function renderAsk(t, L, ss) {
  const sec = L && L.sections[ss.sec] ? L.sections[ss.sec].title : '';
  return `<p class="small muted">Gõ câu hỏi rồi bấm <b>Hỏi Claude</b>. Website tự soạn câu hỏi kèm module, LOS và phần bạn đang đọc, chép vào bộ nhớ tạm và mở claude.ai. Bạn chỉ cần bấm <b>Cmd + V</b> rồi <b>Enter</b>.</p>
    <textarea class="ask" id="ask-q" placeholder="Ví dụ: Vì sao trong mô hình Gordon phải dùng D1 mà không phải D0?"></textarea>
    ${sec ? `<div class="small muted">Đang đọc: ${esc(sec)}</div>` : ''}
    <div class="actions" style="margin-top:8px"><button class="btn primary" data-r="ask">Hỏi Claude</button></div>
    ${ss.lastPrompt ? `<div style="margin-top:14px"><div class="small"><b>Câu hỏi đã soạn</b> (nếu chưa dán được, bấm vào ô dưới, Cmd + A rồi Cmd + C):</div>
      <textarea class="ask" readonly data-r="prompt">${esc(ss.lastPrompt)}</textarea>
      <div class="actions"><a class="btn small primary" href="https://claude.ai/new" target="_blank" rel="noopener">Mở claude.ai</a></div></div>` : ''}
    <p class="small muted" style="margin-top:12px">Câu hỏi được lưu vào Ghi chú (dòng bắt đầu bằng "Hỏi:") để bạn ghi câu trả lời ngay bên dưới.</p>`;
}

function renderEnd(t, L, ss, ms) {
  const mins = Math.max(1, Math.round(ms / 60000));
  const qs = roomQuestions(t, ss);
  const correct = qs.filter((q, i) => ss.answers[i] === q.answer).length;
  if (ss.revisit) {
    return `<div class="card end"><h1>Kết thúc xem lại</h1><p class="sub">${t.topic && TOPIC[t.topic] ? `${esc(TOPIC[t.topic].name)} · ` : ''}${esc(t.title)}</p>
      <form id="end-form" class="done-form">
        <label class="f">Thời gian xem lại (phút) - ghi vào hôm nay ${fmtDateY(todayStr())}<input type="number" name="actual" min="0" value="${mins}"></label>
        <div class="actions"><button class="btn primary" type="submit">Lưu và rời phòng học</button><button class="btn" type="button" data-r="back">Quay lại</button></div>
      </form></div>`;
  }
  const partial = t.type === 'learn' && mins < t.minutes * 0.7;
  return `<div class="card end"><h1>Kết thúc buổi học</h1><p class="sub">${t.topic && TOPIC[t.topic] ? `${esc(TOPIC[t.topic].name)} · ` : ''}${esc(t.title)}${t.date !== todayStr() ? ` · lịch ngày ${fmtDateY(t.date)}, ghi nhận vào hôm nay ${fmtDateY(todayStr())}` : ''}</p>
    <div class="grid stats" style="margin-bottom:14px">
      <div class="stat"><div class="v">${mins}'</div><div class="l">thời gian học (kế hoạch ${t.minutes}')</div></div>
      <div class="stat ${ss.graded ? (correct / Math.max(1, qs.length) >= 0.7 ? 'ok' : 'warn') : ''}"><div class="v">${ss.graded ? `${correct}/${qs.length}` : '-'}</div><div class="l">câu đúng${ss.graded ? '' : ' (chưa nộp bài)'}</div></div>
      <div class="stat"><div class="v">${L ? `${ss.seen.length}/${L.sections.length}` : '-'}</div><div class="l">phần bài giảng đã xem</div></div>
      <div class="stat"><div class="v">${(S.notes[notesKey(t, ss)] || '').length}</div><div class="l">ký tự ghi chú</div></div>
    </div>
    <form id="end-form" class="done-form">
      <div class="row">
        <label class="f">Thời gian học thực tế (phút)<input type="number" name="actual" min="0" value="${mins}"></label>
        <label class="f">Số câu đúng<input type="number" name="qc" min="0" value="${ss.graded ? correct : ''}"></label>
        <label class="f">Tổng số câu<input type="number" name="qt" min="0" value="${ss.graded ? qs.length : ''}"></label>
      </div>
      <label class="f">Ghi chú ngắn cho buổi này<input type="text" name="note" placeholder="Ví dụ: chưa chắc phần forward rate"></label>
      ${t.nosplit ? '' : `<label class="row small"><input type="checkbox" name="partial" ${partial ? 'checked' : ''}> Chưa xong - phần còn lại để buổi sau</label>`}
      <div class="actions"><button class="btn primary" type="submit">Lưu check-in và rời phòng học</button><button class="btn" type="button" data-r="back">Quay lại học tiếp</button></div>
    </form></div>`;
}

/* ---------- Behaviour ---------- */
function tickClock() {
  const t = roomTask();
  if (view !== 'room' || !t) { clearInterval(roomTimer); return; }
  const ss = S.sessions[t.id];
  if (!ss || ending) return;
  const ms = elapsedMs(ss);
  const el = document.getElementById('room-clock');
  if (t.type === 'mock' && !ss.graded) {
    const left = Math.max(0, t.minutes * 60000 - ms);
    if (el) el.textContent = mmss(left);
    if (left === 0 && !ss.timeUp) { ss.timeUp = true; save(); toast('Hết giờ thi. Bấm Nộp bài để xem kết quả.'); render(); }
    return;
  }
  if (el) el.textContent = mmss(ms);
  if (t.type !== 'learn' || ss.revisit) return;
  // Over its share: recolour the box in place and say so once. No re-render, no tab change.
  PHASES.forEach(p => {
    const box = document.querySelector(`.step[data-phase="${p.key}"]`), v = stepView(t, ss, p, ms);
    if (box) { box.className = v.cls; box.textContent = v.text; }
  });
  const cur = PHASES.find(p => p.key === ss.phase);
  ss.warned = ss.warned || {};
  if (cur && !ss.warned[cur.key] && phaseSpent(ss, cur.key, ms) > phaseBudget(t, cur)) {
    ss.warned[cur.key] = true; save();
    toast(`Giai đoạn ${cur.label} đã hết thời gian dự kiến (${Math.round(t.minutes * cur.pct / 100)}'). Bạn có thể tiếp tục hoặc chuyển giai đoạn.`);
  }
}

window.bindRoom = function bindRoom() {
  clearInterval(roomTimer);
  roomTimer = setInterval(tickClock, 1000);
  const t = roomTask();
  const ss = t && S.sessions[t.id];
  const L = ss && lessonById(ss.mod);
  if (!L) return;
  app.querySelectorAll('.lesson .term').forEach(el => {
    const g = L.glossary && L.glossary[el.dataset.term];
    if (g) el.dataset.tip = `${g[1]}: ${g[2]}`;
  });
  app.querySelectorAll('.lesson [data-widget]').forEach(el => {
    const w = L.widgets && L.widgets[el.dataset.widget];
    if (w) w(el);
  });
};

// Copy synchronously inside the click (before a new tab takes focus); fall back to the async API.
function copyText(text) {
  if (fallbackCopy(text)) return Promise.resolve(true);
  if (navigator.clipboard) return navigator.clipboard.writeText(text).then(() => true, () => false);
  return Promise.resolve(false);
}
function fallbackCopy(text) {
  const ta = document.createElement('textarea');
  ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
  document.body.appendChild(ta); ta.select();
  let ok = false;
  try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
  ta.remove();
  return ok;
}

app.addEventListener('input', e => {
  if (view === 'room' && e.target.id === 'term-q') {
    termQ = e.target.value;
    const t = roomTask(), ss = t && session(t), L = ss && lessonById(ss.mod);
    const box = document.getElementById('term-results');
    if (box && L && L.glossary) box.innerHTML = termResults(L, ss);
  }
});

let notesTimer = null;
app.addEventListener('input', e => {
  if (view !== 'room' || e.target.dataset.r !== 'notes') return;
  const t = roomTask();
  S.notes[notesKey(t, session(t))] = e.target.value;
  clearTimeout(notesTimer);
  notesTimer = setTimeout(() => {
    save();
    const st = document.getElementById('notes-state');
    if (st) st.textContent = `Đã lưu · ${e.target.value.length} ký tự`;
  }, 400);
});

app.addEventListener('change', e => {
  if (view !== 'room') return;
  const t = roomTask();
  const ss = t && session(t);
  const r = e.target.dataset.r;
  if (r === 'answer') {
    ss.answers[Number(e.target.dataset.i)] = Number(e.target.value); save();
    // In a mock, re-rendering would jump the page; update the counters in place instead.
    if (t.type === 'mock') { const c = app.querySelector(`.qcell[data-i="${e.target.dataset.i}"]`); if (c) c.classList.add('on'); const g = app.querySelector('[data-r="grade"]'); if (g) g.textContent = `Nộp bài (${Object.keys(ss.answers).length}/${MOCK_SIZE} đã chọn)`; return; }
    render();
  }
  if (r === 'mod') { ss.mod = e.target.value; ss.sec = 0; ss.seen = [0]; ss.page = 0; termQ = ''; save(); render(); }
  if (r === 'onlywrong') { ss.onlyWrong = e.target.checked; save(); render(); }
  if (r === 'jump') showPage(0, Number(e.target.value));
});

app.addEventListener('click', e => {
  const el = e.target.closest('[data-action="enter-room"]');
  if (el) { e.preventDefault(); enterRoom(Number(el.dataset.id)); return; }
  if (view !== 'room') return;
  const b = e.target.closest('[data-r]');
  if (!b || b.tagName === 'INPUT' || b.tagName === 'SELECT' || b.tagName === 'TEXTAREA') return;
  const t = roomTask();
  const ss = session(t);
  const L = lessonById(ss.mod);
  const r = b.dataset.r;
  if (r === 'leave') { leaveRoom(); return; }
  if (r === 'pause') pauseRoom();
  if (r === 'resume') resumeRoom();
  if (r === 'end') { ending = true; pauseRoom(); }
  if (r === 'back') { ending = false; resumeRoom(); }
  if (r === 'tab') { ss.tab = b.dataset.k; if (ss.tab === 'lesson') goPhase(t, ss, 'learn'); if (ss.tab === 'practice') goPhase(t, ss, 'practice'); }
  if (r === 'phase') {
    goPhase(t, ss, b.dataset.k);
    if (b.dataset.k === 'learn' || b.dataset.k === 'warmup') ss.tab = 'lesson';
    if (b.dataset.k === 'practice') ss.tab = 'practice';
    if (b.dataset.k === 'wrap') ss.side = 'notes';
  }
  if (r === 'side') ss.side = b.dataset.k;
  if (r === 'goto') { const q = document.getElementById(`q-${b.dataset.i}`); if (q) q.scrollIntoView({ behavior: 'smooth', block: 'center' }); return; }
  if (r === 'open-mod') { ss.mod = b.dataset.m; ss.tab = 'lesson'; ss.sec = 0; ss.seen = [0]; ss.page = 0; window.scrollTo(0, 0); }
  if (r === 'sec') {
    const i = Number(b.dataset.i);
    if (L && i >= 0 && i < L.sections.length) { goPhase(t, ss, 'learn'); ss.sec = i; if (!ss.seen.includes(i)) ss.seen.push(i); app.querySelector('.room-main') && window.scrollTo({ top: app.querySelector('.room-main').offsetTop - 70, behavior: 'smooth' }); }
  }
  if (r === 'page') { showPage(Number(b.dataset.i)); return; }
  if (r === 'fullscreen') {
    const w = document.getElementById('slide-wrap');
    if (w && w.requestFullscreen) w.requestFullscreen().catch(() => toast('Trình duyệt không cho phép toàn màn hình.'));
    return;
  }
  if (r === 'grade') {
    const n = roomQuestions(t, ss).length;
    const picked = Object.keys(ss.answers).length;
    if (picked < n && !b.dataset.sure) {
      askConfirm(`Bạn mới chọn ${picked}/${n} câu. Vẫn nộp bài?`, 'Nộp bài').then(ok => { if (ok) { b.dataset.sure = '1'; b.click(); } });
      return;
    }
    ss.graded = true;
    goPhase(t, ss, 'wrap');
    recordPractice(roomQuestions(t, ss), ss.answers);
    if (t.type === 'mock') {
      S.mockResults = S.mockResults || {};
      S.mockResults[mockNo(t)] = S.mockResults[mockNo(t)] || {};
      S.mockResults[mockNo(t)][mockSession(t)] = { qset: ss.qset, answers: ss.answers, date: todayStr() };
      ss.side = 'nav';
    }
  }
  if (r === 'retry') {
    // New attempt: same module (or same review set), new question order and new choice order.
    ss.qset = t.type === 'learn' ? buildPracticeSet(t.moduleId) : shuffle((ss.qset || []).map(x => makeRef(x.m, x.i)));
    ss.answers = {}; ss.graded = false; window.scrollTo(0, 0);
  }
  if (r === 'newset') { ss.qset = buildReviewSet(t.topic); ss.answers = {}; ss.graded = false; }
  if (r === 'lang') setLang(b.dataset.k);
  if (r === 'ask') {
    const q = (document.getElementById('ask-q').value || '').trim();
    if (!q) { toast('Hãy gõ câu hỏi trước.'); return; }
    const m = MODULE[ss.mod];
    const sec = L && L.sections[ss.sec] ? L.sections[ss.sec].title : '';
    const where = m ? `module "${m.name}" (${ss.mod}), topic ${TOPIC[m.topic].name}` : `topic ${TOPIC[t.topic] ? TOPIC[t.topic].name : ''}`;
    const prompt = `Tôi đang tự học CFA Level I (chương trình 2027), ${where}.\n`
      + (sec ? `Tôi đang đọc phần: ${sec}.\n` : '')
      + (m && m.los.length ? `LOS của module:\n${m.los.map(l => `- ${l}`).join('\n')}\n\n` : '\n')
      + `Câu hỏi của tôi: ${q}\n\n`
      + 'Hãy trả lời bằng tiếng Việt, ngắn gọn, có một ví dụ bằng số nếu phù hợp, và chỉ ra bẫy thường gặp trong đề thi CFA liên quan đến câu hỏi này. Nếu cần bấm máy, hướng dẫn trên BA II Plus.';
    const k = notesKey(t, ss);
    S.notes[k] = `${(S.notes[k] || '').replace(/\s*$/, '')}${S.notes[k] ? '\n\n' : ''}Hỏi: ${q}\nTrả lời: `;
    ss.lastPrompt = prompt;
    save();
    copyText(prompt).then(ok => {
      window.open('https://claude.ai/new', '_blank', 'noopener');
      toast(ok ? 'Đã chép câu hỏi. Mở claude.ai (tab mới hoặc nút Mở claude.ai bên dưới), bấm Cmd + V rồi Enter.' : 'Chưa chép tự động được - dùng ô "Câu hỏi đã soạn" để chép tay.');
    });
  }
  save();
  render();
});

app.addEventListener('submit', e => {
  if (e.target.id !== 'end-form') return;
  e.preventDefault();
  e.stopImmediatePropagation();
  const t = roomTask();
  const ss = session(t);
  const f = new FormData(e.target);
  const num = k => (f.get(k) === '' || f.get(k) == null ? null : Number(f.get(k)));
  const today = todayStr();
  S.log = S.log || [];
  if (ss.revisit) {
    const m = num('actual') || 0;
    if (m > 0) S.log.push({ date: today, taskId: t.id, topic: t.topic || (MODULE[ss.mod] ? MODULE[ss.mod].topic : null), minutes: m, kind: 'revisit' });
  } else {
    const qc = num('qc');
    const qt = num('qt');
    if (qc != null && qt != null && qc > qt) { toast('Số câu đúng không thể lớn hơn tổng số câu.'); return; }
    // Mock questions span several topics: record per-topic scores in the log, keep the task itself topic-free.
    const isMock = t.type === 'mock' && ss.graded;
    completeTask(t.id, { actual: num('actual') || 0, qc: isMock ? null : qc, qt: isMock ? null : qt, note: (f.get('note') || '').trim(), partial: f.get('partial') === 'on' });
    if (isMock) Object.entries(topicScores(roomQuestions(t, ss), ss.answers)).forEach(([c, v]) => S.log.push({ date: today, taskId: t.id, topic: c, minutes: 0, qc: v.c, qt: v.n, kind: 'mock' }));
  }
  delete S.sessions[t.id];
  S.activeRoom = null;
  ending = false;
  save();
  clearInterval(roomTimer);
  view = 'today';
  toast(ss.revisit ? 'Đã ghi thời gian xem lại.' : 'Đã lưu buổi học. Làm tốt lắm!');
  render();
}, true);

document.addEventListener('keydown', e => {
  if (view !== 'room' || ending) return;
  if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) return;
  const t = roomTask();
  const ss = t && S.sessions[t.id];
  if (!ss || ss.tab !== 'slides') return;
  if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') { e.preventDefault(); showPage(1); }
  if (e.key === 'ArrowLeft' || e.key === 'PageUp') { e.preventDefault(); showPage(-1); }
});

// Leaving the room through the top tabs pauses the clock.
document.getElementById('tabs').addEventListener('click', () => { if (view === 'room') { pauseRoom(); clearInterval(roomTimer); } }, true);

// Opening or reloading the site always lands on "Hôm nay". An unfinished session stays saved (clock paused)
// and continues where it left off when the user opens that task again.
if (S.activeRoom) {
  const ss = S.sessions[S.activeRoom];
  if (ss && !ss.pauseStart) ss.pauseStart = Date.now();
  S.activeRoom = null;
  save();
}

// Closing or reloading the page pauses the clock, so time away is not counted.
window.addEventListener('pagehide', () => { if (view === 'room') pauseRoom(); });
