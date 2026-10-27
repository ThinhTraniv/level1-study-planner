'use strict';

/* ---------- Syllabus ---------- */
const SY = window.SYLLABUS;
const TOPIC = Object.fromEntries(SY.topics.map(t => [t.code, t]));
const MODULE = {};
SY.topics.forEach(t => t.modules.forEach(m => { MODULE[m.id] = { ...m, topic: t.code }; }));

const KEY = 'cfaPlanner.v1';
const DOW = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];
const DOW_ORDER = [1, 2, 3, 4, 5, 6, 0];
const LEVELS = { yeu: { label: 'Yếu', mult: 1.3 }, tb: { label: 'Trung bình', mult: 1 }, manh: { label: 'Mạnh', mult: 0.75 } };
const TYPES = {
  learn: 'Học mới', review: 'Ôn tập', mock: 'Thi thử', mockreview: 'Chữa đề',
};
const MAT = { co: { label: 'Có tài liệu', cls: 'ok' }, 'mot-phan': { label: 'Tài liệu một phần', cls: 'warn' }, chua: { label: 'Chưa có tài liệu', cls: 'bad' } };
const TEMPLATES = {
  chuan: { label: 'Chuẩn - 300 giờ (65% học, 20% ôn, 15% thi thử)', targetHours: 300, pct: { learn: 65, review: 20, mock: 15 } },
  captoc: { label: 'Cấp tốc - 250 giờ (60% học, 20% ôn, 20% thi thử)', targetHours: 250, pct: { learn: 60, review: 20, mock: 20 } },
  kyluong: { label: 'Kỹ lưỡng - 350 giờ (60% học, 25% ôn, 15% thi thử)', targetHours: 350, pct: { learn: 60, review: 25, mock: 15 } },
  tuychinh: { label: 'Tự chỉnh', targetHours: null, pct: null },
};
const MOCK_SESSION = 135;
const MOCK_REVIEW = 120;
const MIN_PIECE = 30;
const SLACK = 0.92; // keep ~8% of free time unplanned as catch-up room

/* ---------- Dates ---------- */
const pad = n => String(n).padStart(2, '0');
const ds = d => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const pd = s => { const [y, m, d] = s.split('-').map(Number); return new Date(y, m - 1, d); };
const addDays = (s, n) => { const d = pd(s); d.setDate(d.getDate() + n); return ds(d); };
const todayStr = () => ds(new Date());
const diffDays = (a, b) => Math.round((pd(b) - pd(a)) / 86400000);
const fmtDate = s => { const d = pd(s); return `${DOW[d.getDay()]} ${pad(d.getDate())}/${pad(d.getMonth() + 1)}`; };
const fmtDateY = s => { const d = pd(s); return `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()}`; };
const mondayOf = s => { const d = pd(s); const k = (d.getDay() + 6) % 7; d.setDate(d.getDate() - k); return ds(d); };
const fmtH = min => `${(Math.round(min / 6) / 10).toLocaleString('vi-VN')} giờ`;
const fmtM = min => (min >= 60 ? `${Math.floor(min / 60)}g${min % 60 ? pad(min % 60) : ''}` : `${min} phút`);
const round15 = m => Math.max(15, Math.round(m / 15) * 15);
const sum = (arr, f) => arr.reduce((a, x) => a + f(x), 0);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

/* ---------- State ---------- */
function emptyState() {
  return { settings: null, tasks: [], materials: {}, baseline: {}, planInfo: null, nextId: 1, notes: {}, sessions: {}, activeRoom: null, log: [], mockResults: {} };
}
function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) return { ...emptyState(), ...JSON.parse(raw) };
  } catch (e) { /* storage unavailable */ }
  return emptyState();
}
let S = load();
function save() {
  try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { toast('Không lưu được vào trình duyệt - hãy dùng nút Sao lưu trong Cài đặt'); }
}
function defaultSettings() {
  return {
    examDate: '2027-05-15',
    startDate: todayStr(),
    template: 'chuan',
    targetHours: 300,
    pct: { learn: 65, review: 20, mock: 15 },
    minutesByDow: [240, 90, 90, 90, 90, 90, 240],
    offDays: [],
    topicOrder: SY.topics.map(t => t.code),
    level: Object.fromEntries(SY.topics.map(t => [t.code, 'tb'])),
    reason: '',
  };
}

/* ---------- Capacity ---------- */
const lastStudyDay = () => addDays(S.settings.examDate, -1);
function capacity(date, st = S.settings) {
  if (st.offDays.includes(date)) return 0;
  return Number(st.minutesByDow[pd(date).getDay()]) || 0;
}
function capacityBetween(from, to, st = S.settings) {
  let c = 0;
  for (let d = from; d <= to; d = addDays(d, 1)) c += capacity(d, st);
  return c;
}

/* ---------- Plan building ---------- */
function topicShares(st = S.settings) {
  const raw = {};
  let tot = 0;
  SY.topics.forEach(t => {
    raw[t.code] = ((t.weightMin + t.weightMax) / 2) * LEVELS[st.level[t.code] || 'tb'].mult;
    tot += raw[t.code];
  });
  Object.keys(raw).forEach(k => { raw[k] /= tot; });
  return raw;
}

// Full list of work units for the target, minus what is already done.
function buildUnits(st = S.settings) {
  const total = st.targetHours * 60;
  const sh = topicShares(st);
  const learnTot = total * st.pct.learn / 100;
  const revTot = total * st.pct.review / 100;
  const mockTot = total * st.pct.mock / 100;
  const doneBy = key => sum(S.tasks.filter(t => t.done && t.key === key), t => t.minutes);
  const units = [];
  let ord = 0;
  const push = u => units.push({ ...u, ord: ord++ });

  for (const code of st.topicOrder) {
    const t = TOPIC[code];
    const losN = m => (m.losCount != null ? m.losCount : m.los.length);
    const wsum = sum(t.modules, m => losN(m) + 1);
    for (const m of t.modules) {
      const planned = Math.max(MIN_PIECE, round15(learnTot * sh[code] * (losN(m) + 1) / wsum));
      const rem = planned - doneBy(`L:${m.id}`);
      if (rem >= 15) push({ type: 'learn', topic: code, moduleId: m.id, key: `L:${m.id}`, minutes: round15(rem), title: m.name });
    }
  }
  for (const code of st.topicOrder) {
    const rem = round15(revTot * sh[code]) - doneBy(`R:${code}`);
    if (rem >= 15) push({ type: 'review', topic: code, key: `R:${code}`, minutes: round15(rem), title: `Ôn tập ${TOPIC[code].short} - làm câu hỏi theo topic` });
  }
  const nMock = Math.max(2, Math.round(mockTot / (2 * MOCK_SESSION + MOCK_REVIEW)));
  for (let k = 1; k <= nMock; k++) {
    for (const s of [1, 2]) {
      const key = `M:${k}:${s}`;
      if (!S.tasks.some(t => t.done && t.key === key)) push({ type: 'mock', key, minutes: MOCK_SESSION, nosplit: true, title: `Thi thử #${k} - Session ${s} (90 câu, 135 phút)` });
    }
    const rem = MOCK_REVIEW - doneBy(`MR:${k}`);
    if (rem >= 15) push({ type: 'mockreview', key: `MR:${k}`, minutes: round15(rem), title: `Chữa đề thi thử #${k} - xem lại từng câu sai` });
  }
  return units;
}

// Place units day by day from `from`, around the minutes already taken by `fixed` tasks.
// Work that does not fit before the exam spills past it; the caller reports that.
// `fill` < 1 spreads the work so the plan ends near the exam instead of front-loading it.
function place(units, from, fixed, fill = 1, st = S.settings) {
  const used = {};
  fixed.forEach(t => { used[t.date] = (used[t.date] || 0) + t.minutes; });
  const free = d => Math.floor((capacity(d, st) * fill) / 15) * 15 - (used[d] || 0);
  const out = [];
  let d = from;
  const hasCapacity = st.minutesByDow.some(m => Number(m) > 0);
  if (!hasCapacity) return out;

  for (const u of units) {
    let rem = u.minutes;
    const pieces = [];
    while (rem > 0) {
      const need = u.nosplit ? rem : Math.min(rem, MIN_PIECE);
      let probe = d;
      let found = null;
      for (let i = 0; i < 400; i++) {
        if (free(probe) >= need) { found = probe; break; }
        probe = addDays(probe, 1);
      }
      if (!found) {
        // A session longer than any free day (e.g. a 135-minute mock on 90-minute days): use the next day with any time.
        probe = d;
        while (free(probe) <= 0) probe = addDays(probe, 1);
        found = probe;
      }
      d = found;
      let take = u.nosplit ? rem : Math.min(rem, free(d));
      if (!u.nosplit && take < rem && rem - take < MIN_PIECE) take = rem;
      if (!u.nosplit) take = Math.max(15, Math.floor(take / 15) * 15);
      if (take > rem) take = rem;
      pieces.push({ date: d, minutes: take });
      used[d] = (used[d] || 0) + take;
      rem -= take;
    }
    pieces.forEach((p, i) => out.push({
      id: S.nextId++, key: u.key, type: u.type, topic: u.topic || null, moduleId: u.moduleId || null,
      title: u.title, ord: u.ord, nosplit: !!u.nosplit, part: i + 1, parts: pieces.length,
      date: p.date, minutes: p.minutes, done: false, pinned: false,
    }));
  }
  return out;
}

function scaleUnits(units, factor, types) {
  return units.map(u => (types.includes(u.type) ? { ...u, minutes: round15(u.minutes * factor) } : u));
}

const fillFor = (need, cap) => (cap > 0 && need < cap * SLACK ? need / (cap * SLACK) : 1);

// Spread work as evenly as possible but still finish before the exam: raise the fill until it fits.
function placeFit(units, from, fixed) {
  const need = sum(units, u => u.minutes);
  const last = lastStudyDay();
  const cap = capacityBetween(from, last) - sum(fixed.filter(t => t.date >= from && t.date <= last), t => t.minutes);
  const startId = S.nextId;
  let fill = fillFor(need, cap);
  for (;;) {
    S.nextId = startId;
    const placed = place(units, from, fixed, fill);
    const end = placed.reduce((m, t) => (t.date > m ? t.date : m), from);
    if (end <= last || fill >= 1) return { placed, end, need, cap };
    fill = Math.min(1, fill + 0.04);
  }
}

function buildBaseline() {
  const b = {};
  S.tasks.forEach(t => { b[t.date] = (b[t.date] || 0) + t.minutes; });
  S.baseline = b;
}

function generatePlan() {
  const st = S.settings;
  const from = st.startDate > todayStr() ? st.startDate : todayStr();
  const keep = S.tasks.filter(t => t.done);
  let units = buildUnits(st);
  const need = sum(units, u => u.minutes);
  const cap = capacityBetween(from, lastStudyDay()) - sum(keep.filter(t => t.date >= from), t => t.minutes);
  let scale = 1;
  if (need > cap && cap > 0) {
    const fixedMock = sum(units.filter(u => u.type === 'mock'), u => u.minutes);
    scale = Math.max(0.3, (cap * 0.97 - fixedMock) / (need - fixedMock));
    units = scaleUnits(units, scale, ['learn', 'review', 'mockreview']);
  }
  S.tasks = keep.concat(placeFit(units, from, keep.filter(t => t.date >= from)).placed);
  S.planInfo = { createdAt: todayStr(), need, cap, scale };
  buildBaseline();
  save();
}

/* ---------- Re-planning ---------- */
// Re-planning starts today, or on the start date if that is still in the future.
const planStart = (st = S.settings) => (st.startDate > todayStr() ? st.startDate : todayStr());

function splitForReflow() {
  const t0 = planStart();
  const fixed = S.tasks.filter(t => t.done || (t.pinned && t.date >= t0));
  const movable = S.tasks.filter(t => !fixed.includes(t)).sort((a, b) => a.ord - b.ord || a.part - b.part);
  const byKey = new Map();
  movable.forEach(t => {
    const u = byKey.get(t.key);
    if (u) u.minutes += t.minutes;
    else byKey.set(t.key, { type: t.type, topic: t.topic, moduleId: t.moduleId, key: t.key, title: t.title, ord: t.ord, nosplit: t.nosplit, minutes: t.minutes });
  });
  return { t0, fixed, units: [...byKey.values()].sort((a, b) => a.ord - b.ord) };
}

// Preview the three options without changing anything.
function reflowPreview() {
  const { t0, fixed, units } = splitForReflow();
  const saveId = S.nextId;
  const { end, need, cap } = placeFit(units, t0, fixed);
  S.nextId = saveId;
  return { need, cap, end, overflow: Math.max(0, need - cap) };
}

// What the remaining plan would look like under `st` (draft settings), without changing anything.
function simulatePlan(st) {
  const keep = S.settings;
  const saveId = S.nextId;
  S.settings = st;
  try {
    const { t0, fixed, units } = splitForReflow();
    const { end, need } = placeFit(units, t0, fixed);
    return { start: t0, end, need, perWeek: need / Math.max(1, (diffDays(t0, end) + 1) / 7) };
  } finally { S.settings = keep; S.nextId = saveId; }
}
function currentPlanStats() {
  const left = S.tasks.filter(t => !t.done);
  if (!left.length) return null;
  const start = left.reduce((m, t) => (t.date < m ? t.date : m), left[0].date);
  const end = left.reduce((m, t) => (t.date > m ? t.date : m), start);
  const need = sum(left, t => t.minutes);
  return { start, end, need, perWeek: need / Math.max(1, (diffDays(start, end) + 1) / 7) };
}

function reflow(mode) {
  const { t0, fixed, units: u0 } = splitForReflow();
  let units = u0;
  const need = sum(units, u => u.minutes);
  const cap = capacityBetween(t0, lastStudyDay()) - sum(fixed.filter(t => t.date >= t0 && t.date <= lastStudyDay()), t => t.minutes);
  let msg = `Đã xếp lại lịch từ ${t0 === todayStr() ? 'hôm nay' : fmtDateY(t0)}.`;

  if (mode === 'cut' && need > cap) {
    const cuttable = units.filter(u => u.type === 'review' || u.type === 'mockreview');
    const cutTot = sum(cuttable, u => u.minutes);
    const over = need - cap;
    if (cutTot > 0) {
      const f = Math.max(0.25, (cutTot - over) / cutTot);
      units = scaleUnits(units, f, ['review', 'mockreview']);
      msg = `Đã giảm ${Math.round((1 - f) * 100)}% thời gian ôn tập và chữa đề để giữ ngày thi.`;
    }
    const still = sum(units, u => u.minutes) - cap;
    if (still > 0) msg += ` Vẫn thiếu khoảng ${fmtH(still)} - hãy tăng giờ học hoặc dời ngày thi.`;
  }
  if (mode === 'more' && need > cap && cap > 0) {
    const f = need / cap;
    S.settings.minutesByDow = S.settings.minutesByDow.map(m => (Number(m) > 0 ? Math.ceil((m * f) / 15) * 15 : 0));
    msg = `Đã tăng giờ học mỗi ngày lên khoảng ${Math.round((f - 1) * 100)}% để giữ ngày thi.`;
  }
  S.tasks = fixed.concat(placeFit(units, t0, fixed).placed);
  save();
  return msg;
}

/* ---------- Task actions ---------- */
function completeTask(id, { actual, qc, qt, note, partial }) {
  const t = S.tasks.find(x => x.id === id);
  if (!t) return;
  const today = todayStr();
  const stats = { actualMin: actual, qCorrect: qc, qTotal: qt, note, doneAt: today };
  if (partial && !t.nosplit && actual > 0 && actual < t.minutes) {
    const doneMin = Math.max(15, Math.min(t.minutes - 15, Math.round(actual / 15) * 15));
    S.tasks.push({ ...t, ...stats, id: S.nextId++, minutes: doneMin, done: true, partial: true });
    t.minutes -= doneMin;
  } else {
    Object.assign(t, stats, { done: true });
  }
  save();
}
function undoTask(id) {
  const t = S.tasks.find(x => x.id === id);
  if (!t) return;
  if (t.partial) {
    const rest = S.tasks.find(x => !x.done && x.key === t.key);
    if (rest) { rest.minutes += t.minutes; S.tasks = S.tasks.filter(x => x !== t); save(); return; }
  }
  Object.assign(t, { done: false, actualMin: null, qCorrect: null, qTotal: null, doneAt: null });
  save();
}
function pullNextTask() {
  const today = todayStr();
  const next = S.tasks.filter(t => !t.done && t.date > today).sort((a, b) => (a.date < b.date ? -1 : a.date > b.date ? 1 : a.ord - b.ord))[0];
  if (!next) return null;
  next.date = today;
  save();
  return next;
}

/* ---------- Metrics ---------- */
// Every recorded study session, dated by the day it actually happened (not the planned day):
// completed tasks plus extra entries in S.log (revisits of finished lessons, per-topic mock scores).
function studyEntries() {
  const out = S.tasks.filter(t => t.done).map(t => ({
    date: t.doneAt || t.date, minutes: Number(t.actualMin != null ? t.actualMin : t.minutes) || 0,
    topic: t.topic, qc: Number(t.qCorrect) || 0, qt: Number(t.qTotal) || 0,
  }));
  return out.concat((S.log || []).map(e => ({ date: e.date, minutes: Number(e.minutes) || 0, topic: e.topic || null, qc: Number(e.qc) || 0, qt: Number(e.qt) || 0 })));
}
function metrics() {
  const today = todayStr();
  const yest = addDays(today, -1);
  const doneTasks = S.tasks.filter(t => t.done);
  const doneMin = sum(doneTasks, t => t.minutes);
  const totalMin = sum(S.tasks, t => t.minutes);
  const plannedToYest = sum(Object.entries(S.baseline).filter(([d]) => d <= yest), ([, m]) => m);
  const doneBeforeToday = sum(doneTasks.filter(t => (t.doneAt || t.date) <= yest), t => t.minutes);
  const gap = plannedToYest - doneBeforeToday;
  const overdue = S.tasks.filter(t => !t.done && t.date < today);
  const days = new Set(studyEntries().filter(e => e.minutes > 0).map(e => e.date));
  let streak = 0;
  let d = days.has(today) ? today : yest;
  while (days.has(d)) { streak++; d = addDays(d, -1); }
  return { today, doneMin, totalMin, gap, overdue, streak, daysLeft: diffDays(today, S.settings.examDate) };
}

/* ---------- UI helpers ---------- */
const app = document.getElementById('app');
let view = 'today';
let openForm = null;
let showAllWeeks = false;
function toast(text) {
  const el = document.getElementById('toast');
  el.textContent = text;
  el.classList.add('show');
  clearTimeout(toast.t);
  toast.t = setTimeout(() => el.classList.remove('show'), 3200);
}
function matBadge(moduleId) {
  if (!moduleId) return '';
  const m = S.materials[moduleId];
  if (!m) return '';
  const s = MAT[m.status];
  return s && m.status !== 'co' ? `<span class="badge ${s.cls}">${s.label}</span>` : '';
}
const ROOM_VERB = { learn: 'Vào học', review: 'Vào ôn', mock: 'Vào thi', mockreview: 'Chữa đề' };
function taskLabel(t) {
  const part = t.parts > 1 ? ` (phần ${t.part}/${t.parts})` : '';
  // Learn tasks show their subject in front of the module name; review titles already name the subject.
  const tag = t.type === 'learn' && t.topic && TOPIC[t.topic] ? `<span class="topic-tag">${esc(TOPIC[t.topic].short)}</span> ` : '';
  return `${tag}${esc(t.title)}${part}`;
}
function taskMeta(t) {
  const bits = [`<span class="c-${t.type}">${TYPES[t.type]}</span>`];
  if (t.topic) bits.push(esc(TOPIC[t.topic].short));
  if (t.moduleId) bits.push(esc(t.moduleId));
  bits.push(fmtM(t.minutes));
  return bits.join(' · ');
}

/* ---------- Views ---------- */
function render() {
  if (!S.settings) view = 'settings';
  document.querySelectorAll('#tabs button').forEach(b => b.classList.toggle('active', b.dataset.view === view));
  if (!S.settings) { app.innerHTML = renderSettings(true); bindSettings(true); return; }
  document.querySelector('main').classList.toggle('wide', view === 'room');
  if (view === 'room') { app.innerHTML = window.renderRoom(); window.bindRoom(); return; }
  if (view === 'today') app.innerHTML = renderToday();
  if (view === 'calendar') app.innerHTML = renderCalendar();
  if (view === 'progress') app.innerHTML = renderProgress();
  if (view === 'syllabus') app.innerHTML = renderSyllabus();
  if (view === 'glossary') app.innerHTML = renderGlossary();
  if (view === 'settings') { app.innerHTML = renderSettings(false); bindSettings(false); }
}

function renderTaskRow(t) {
  const m = t.moduleId && S.materials[t.moduleId];
  const note = m && m.note ? `<div class="small muted">Tài liệu: ${esc(m.note)}</div>` : '';
  const result = t.done ? `<div class="small muted">Đã học ${fmtM(t.actualMin || t.minutes)}${t.qTotal ? ` · đúng ${t.qCorrect}/${t.qTotal} câu` : ''}${t.note ? ` · ${esc(t.note)}` : ''}</div>` : '';
  const form = openForm === t.id ? `
    <form class="done-form" data-form="${t.id}">
      <div class="row">
        <label class="f">Thời gian học thực tế (phút)<input type="number" name="actual" min="0" step="5" value="${t.minutes}"></label>
        <label class="f">Số câu đúng<input type="number" name="qc" min="0"></label>
        <label class="f">Tổng số câu<input type="number" name="qt" min="0"></label>
      </div>
      <label class="f">Ghi chú (chỗ chưa hiểu, cần xem lại...)<input type="text" name="note"></label>
      ${t.nosplit ? '' : '<label class="row small"><input type="checkbox" name="partial"> Chưa xong - phần còn lại để sau</label>'}
      <div class="actions"><button class="btn primary" type="submit">Lưu check-in</button><button class="btn" type="button" data-action="cancel-form">Hủy</button></div>
    </form>` : '';
  const btn = t.done
    ? `<button class="btn small" data-action="enter-room" data-id="${t.id}">Xem lại</button> <button class="btn small" data-action="undo" data-id="${t.id}">Bỏ đánh dấu</button>`
    : (openForm === t.id ? '' : `<button class="btn small primary" data-action="enter-room" data-id="${t.id}">${ROOM_VERB[t.type]}</button> <button class="btn small" data-action="open-form" data-id="${t.id}">Hoàn thành</button>`);
  return `<div class="task ${t.done ? 'done' : ''}">
    <span class="bar t-${t.type}"></span>
    <div class="body">
      <div class="title">${taskLabel(t)}</div>
      <div class="meta">${taskMeta(t)} ${t.date < todayStr() && !t.done ? '<span class="badge bad">Trễ từ ' + fmtDate(t.date) + '</span>' : ''} ${matBadge(t.moduleId)}</div>
      ${note}${result}${form}
    </div>
    <div>${btn}</div>
  </div>`;
}

function renderToday() {
  const M = metrics();
  const st = S.settings;
  const todayTasks = S.tasks.filter(t => t.date === M.today).sort((a, b) => a.done - b.done || a.ord - b.ord);
  const gapCls = M.gap > 60 ? 'bad' : M.gap > 0 ? 'warn' : 'ok';
  const gapText = M.gap > 0 ? `Chậm ${fmtH(M.gap)}` : M.gap < 0 ? `Vượt ${fmtH(-M.gap)}` : 'Đúng lịch';
  let html = `<h1>Hôm nay - ${fmtDateY(M.today)}</h1>
    <p class="sub">Còn ${M.daysLeft} ngày đến ngày thi ${fmtDateY(st.examDate)}.</p>
    <div class="grid stats" style="margin-bottom:14px">
      <div class="stat"><div class="v">${M.daysLeft}</div><div class="l">ngày đến kỳ thi</div></div>
      <div class="stat ${gapCls}"><div class="v">${gapText}</div><div class="l">so với kế hoạch ban đầu</div></div>
      <div class="stat"><div class="v">${Math.round((M.doneMin / Math.max(1, M.totalMin)) * 100)}%</div><div class="l">${fmtH(M.doneMin)} / ${fmtH(M.totalMin)}</div></div>
      <div class="stat ${M.streak ? 'ok' : ''}"><div class="v">${M.streak} ngày</div><div class="l">chuỗi ngày học liên tục</div></div>
    </div>`;
  if (st.reason) html += `<div class="card reason"><div class="small muted">Lý do tôi thi CFA</div><p>${esc(st.reason)}</p></div>`;

  if (M.overdue.length) {
    const p = reflowPreview();
    const late = p.end > lastStudyDay();
    html += `<div class="banner ${late ? 'bad' : 'warn'}">
      <b>Bạn đang trễ ${M.overdue.length} việc (${fmtH(sum(M.overdue, t => t.minutes))}).</b> Không sao - chọn cách xếp lại lịch:
      <div class="small" style="margin-top:6px">${late
        ? `Nếu chỉ dời lịch, ngày học cuối sẽ là ${fmtDateY(p.end)} - sau ngày thi. Thiếu khoảng ${fmtH(p.overflow)}.`
        : `Dời lịch vẫn kịp: ngày học cuối là ${fmtDateY(p.end)}.`}</div>
      <div class="actions">
        <button class="btn primary" data-action="reflow" data-mode="shift">Dời các việc trễ ra phía sau</button>
        ${late ? '<button class="btn" data-action="reflow" data-mode="cut">Giữ ngày thi - giảm thời gian ôn tập</button><button class="btn" data-action="reflow" data-mode="more">Giữ ngày thi - tăng giờ học mỗi ngày</button>' : ''}
      </div></div>`;
  } else {
    const end = S.tasks.filter(t => !t.done).reduce((m, t) => (t.date > m ? t.date : m), M.today);
    if (end > lastStudyDay()) {
      const over = sum(S.tasks.filter(t => !t.done && t.date > lastStudyDay()), t => t.minutes);
      html += `<div class="banner bad"><b>Kế hoạch đang kéo dài đến ${fmtDateY(end)} - sau ngày thi.</b> Còn ${fmtH(over)} chưa xếp kịp trước ngày thi.
        <div class="actions">
          <button class="btn" data-action="reflow" data-mode="cut">Giảm thời gian ôn tập</button>
          <button class="btn" data-action="reflow" data-mode="more">Tăng giờ học mỗi ngày</button>
          <button class="btn" data-action="goto-settings">Đổi ngày thi</button>
        </div></div>`;
    }
  }

  const overdueRows = M.overdue.sort((a, b) => a.ord - b.ord).map(renderTaskRow).join('');
  html += `<div class="card"><div class="actions" style="justify-content:space-between"><h2 style="margin:0">Việc cần làm hôm nay</h2>
    <button class="btn small" data-action="pull">+ Học thêm việc tiếp theo</button></div>
    ${todayTasks.length || M.overdue.length ? overdueRows + todayTasks.map(renderTaskRow).join('') : `<div class="empty">Hôm nay là ngày nghỉ theo lịch. ${capacity(M.today) === 0 ? 'Muốn học thêm thì bấm "+ Học thêm".' : ''}</div>`}
  </div>`;

  const next = [];
  for (let i = 1; i <= 3; i++) {
    const d = addDays(M.today, i);
    const ts = S.tasks.filter(t => t.date === d && !t.done);
    next.push(`<div class="day"><div class="day-head"><b>${fmtDate(d)}</b><span>${fmtM(sum(ts, t => t.minutes))}</span></div>
      ${ts.map(t => `<div class="chip"><span class="dot t-${t.type}"></span><span class="name">${taskLabel(t)}</span><span class="small muted">${fmtM(t.minutes)}</span></div>`).join('') || '<div class="small muted">Nghỉ</div>'}</div>`);
  }
  html += `<div class="card" style="padding:0"><h2 style="padding:16px 16px 0">3 ngày tới</h2>${next.join('')}</div>`;
  return html;
}

/* ---------- Calendar search ---------- */
let calQuery = '';
// Case- and accent-insensitive: "on tap" finds "Ôn tập", "dao ham" finds "đạo hàm".
const fold = s => String(s || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D').toLowerCase();
function searchTasks(q) {
  const words = fold(q).split(/\s+/).filter(Boolean);
  if (!words.length) return [];
  return S.tasks.filter(t => {
    const tp = t.topic && TOPIC[t.topic];
    const hay = fold([t.title, t.moduleId, tp && tp.short, tp && tp.name, tp && tp.code, TYPES[t.type]].join(' '));
    return words.every(w => hay.includes(w));
  }).sort((x, y) => (x.date < y.date ? -1 : x.date > y.date ? 1 : x.ord - y.ord));
}
function renderCalResults(q) {
  if (fold(q).trim().length < 2) return '<p class="small muted">Gõ ít nhất 2 ký tự. Bấm vào kết quả để nhảy tới tuần đó trong lịch.</p>';
  const res = searchTasks(q);
  if (!res.length) return `<p class="small muted">Không tìm thấy bài nào khớp "${esc(q)}".</p>`;
  const today = todayStr();
  const shown = res.slice(0, 40);
  return `<p class="small muted">${res.length} kết quả${res.length > shown.length ? ` (hiện ${shown.length} đầu tiên, hãy gõ cụ thể hơn)` : ''}</p>
    <div class="cal-res">${shown.map(t => {
      const st = t.done ? '<span class="badge ok">Đã xong</span>' : t.date < today ? '<span class="badge bad">Trễ</span>' : t.date === today ? '<span class="badge warn">Hôm nay</span>' : '';
      return `<div class="cal-hit"><a href="#" class="cal-hit-link" data-action="cal-jump" data-id="${t.id}"><span class="cal-date">${fmtDate(t.date)}/${t.date.slice(2, 4)}</span><span class="dot t-${t.type}"></span><span class="cal-name">${taskLabel(t)}</span></a>${st}<button class="btn small" data-action="enter-room" data-id="${t.id}">${t.done ? 'Xem lại' : ROOM_VERB[t.type]}</button></div>`;
    }).join('')}</div>`;
}
// Show the task's week in the calendar, scroll to it and highlight it briefly.
function jumpToTask(id) {
  const t = S.tasks.find(x => x.id === id);
  if (!t) return;
  const today = todayStr();
  if (!showAllWeeks && (t.date < mondayOf(today) || t.date > addDays(mondayOf(today), 7 * 5 + 6))) { showAllWeeks = true; render(); }
  const chip = app.querySelector(`.chip[data-tid="${id}"]`);
  if (!chip) return;
  const wk = chip.closest('details');
  if (wk) wk.open = true;
  // Scroll after the layout settles (a full calendar re-render may have just happened).
  setTimeout(() => {
    const y = chip.getBoundingClientRect().top + window.scrollY - window.innerHeight / 2 + chip.offsetHeight / 2;
    window.scrollTo(0, Math.max(0, y));
    chip.classList.remove('flash');
    void chip.offsetWidth;
    chip.classList.add('flash');
  }, 30);
}

function renderCalendar() {
  const st = S.settings;
  const today = todayStr();
  const first = S.tasks.reduce((m, t) => (t.date < m ? t.date : m), st.startDate < today ? st.startDate : today);
  const lastTask = S.tasks.reduce((m, t) => (t.date > m ? t.date : m), st.examDate);
  const curWeek = mondayOf(today);
  let html = `<h1>Lịch học</h1><p class="sub">Bấm vào tên một bài để mở ngay, dù bài đó xếp ở ngày nào; thời gian học được ghi vào ngày bạn thực sự học. Dời bài bằng ô ngày bên cạnh; đánh dấu ngày nghỉ thì lịch tự xếp lại.</p>
    <div class="actions" style="margin-bottom:12px"><button class="btn small" data-action="toggle-weeks">${showAllWeeks ? 'Chỉ hiện các tuần sắp tới' : 'Hiện tất cả các tuần'}</button>
    <span class="legend">${Object.entries(TYPES).map(([k, v]) => `<span><i class="t-${k}"></i>${v}</span>`).join('')}</span></div>
    <div class="card cal-search"><label class="f" for="cal-q">Tìm bài trong lịch</label>
      <input type="search" id="cal-q" autocomplete="off" placeholder="Ví dụ: duration, FSA-03, Ethics, ôn tập, thi thử" value="${esc(calQuery)}">
      <div id="cal-results">${renderCalResults(calQuery)}</div></div>`;
  for (let w = mondayOf(first); w <= lastTask; w = addDays(w, 7)) {
    const wEnd = addDays(w, 6);
    const isPast = wEnd < today;
    if (!showAllWeeks && (isPast || w > addDays(curWeek, 7 * 5))) continue;
    const ts = S.tasks.filter(t => t.date >= w && t.date <= wEnd);
    const plan = sum(ts, t => t.minutes);
    const done = sum(ts.filter(t => t.done), t => t.minutes);
    const examWeek = st.examDate >= w && st.examDate <= wEnd;
    html += `<details class="week" ${w === curWeek || (!isPast && w <= addDays(curWeek, 7)) ? 'open' : ''}>
      <summary><b>Tuần ${fmtDateY(w).slice(0, 5)} - ${fmtDateY(wEnd).slice(0, 5)}${examWeek ? ' · NGÀY THI' : ''}</b><span class="small muted">Kế hoạch ${fmtH(plan)} · đã xong ${fmtH(done)}</span></summary>`;
    for (let d = w; d <= wEnd; d = addDays(d, 1)) {
      const dts = ts.filter(t => t.date === d).sort((a, b) => a.ord - b.ord);
      const off = st.offDays.includes(d);
      const cap = capacity(d);
      const isExam = d === st.examDate;
      html += `<div class="day ${d === today ? 'today' : ''} ${off ? 'off' : ''}" data-day="${d}">
        <div class="day-head"><b>${fmtDate(d)}${isExam ? ' - NGÀY THI' : ''}</b>
          <span>${off ? 'Ngày nghỉ' : `${fmtM(sum(dts, t => t.minutes))} / ${fmtM(cap)}`}
          ${d >= today && !isExam ? ` · <a href="#" data-action="toggle-off" data-date="${d}">${off ? 'Bỏ nghỉ' : 'Nghỉ ngày này'}</a>` : ''}</span></div>
        ${dts.map(t => `<div class="chip ${t.done ? 'done' : ''}" data-tid="${t.id}"><span class="dot t-${t.type}"></span><a href="#" class="name chip-link" data-action="enter-room" data-id="${t.id}" title="Mở bài này">${taskLabel(t)}</a> ${matBadge(t.moduleId)}
          <span class="small muted">${fmtM(t.minutes)}${t.pinned ? ' · cố định' : ''}</span>
          ${t.done ? '' : `<input type="date" value="${t.date}" min="${today}" data-action="move" data-id="${t.id}" aria-label="Dời sang ngày">`}</div>`).join('')}
      </div>`;
    }
    html += '</details>';
  }
  return html;
}

function renderProgress() {
  const M = metrics();
  let html = `<h1>Tiến độ</h1><p class="sub">Đã hoàn thành ${fmtH(M.doneMin)} trên tổng ${fmtH(M.totalMin)} của kế hoạch.</p>`;
  if (S.planInfo && S.planInfo.scale < 1) {
    html += `<div class="banner warn">Khi tạo kế hoạch, giờ rảnh của bạn (${fmtH(S.planInfo.cap)}) ít hơn mục tiêu (${fmtH(S.planInfo.need)}), nên thời gian học và ôn đã được rút còn ${Math.round(S.planInfo.scale * 100)}%. Nên tăng giờ học hoặc dời ngày thi.</div>`;
  }
  // weekly bars
  const weeks = [];
  const cur = mondayOf(M.today);
  for (let i = 7; i >= 0; i--) weeks.push(addDays(cur, -7 * i));
  const wk = weeks.map(w => {
    const e = addDays(w, 6);
    const plan = sum(Object.entries(S.baseline).filter(([d]) => d >= w && d <= e), ([, m]) => m);
    const act = sum(studyEntries().filter(x => x.date >= w && x.date <= e), x => x.minutes);
    return { w, plan, act };
  });
  const max = Math.max(60, ...wk.map(x => Math.max(x.plan, x.act)));
  html += `<div class="card"><h2>8 tuần gần nhất</h2><div class="legend"><span><i class="plan"></i>Kế hoạch</span><span><i class="act"></i>Thực tế</span></div>
    <div class="bars">${wk.map(x => `<div class="col" title="Kế hoạch ${fmtH(x.plan)} - thực tế ${fmtH(x.act)}"><div class="pair"><span class="plan" style="height:${(x.plan / max) * 100}%"></span><span class="act" style="height:${(x.act / max) * 100}%"></span></div><span class="lbl">${fmtDateY(x.w).slice(0, 5)}</span></div>`).join('')}</div></div>`;

  html += '<div class="card"><h2>Theo topic</h2><div class="table-wrap"><table><thead><tr><th>Topic</th><th class="num">Trọng số</th><th>Học mới</th><th class="num">Giờ đã học</th><th class="num">Tỷ lệ đúng</th></tr></thead><tbody>';
  for (const code of S.settings.topicOrder) {
    const t = TOPIC[code];
    const ts = S.tasks.filter(x => x.topic === code);
    const learn = ts.filter(x => x.type === 'learn');
    const lp = sum(learn.filter(x => x.done), x => x.minutes) / Math.max(1, sum(learn, x => x.minutes));
    const te = studyEntries().filter(x => x.topic === code);
    const qT = sum(te, x => x.qt);
    const qC = sum(te, x => x.qc);
    const acc = qT ? qC / qT : null;
    const accCls = acc == null ? '' : acc < 0.6 ? 'bad' : acc < 0.7 ? 'warn' : 'ok';
    html += `<tr><td>${esc(t.short)}</td><td class="num">${t.weightMin}-${t.weightMax}%</td>
      <td style="min-width:120px"><div class="progress"><span style="width:${Math.round(lp * 100)}%"></span></div><span class="small muted">${Math.round(lp * 100)}%</span></td>
      <td class="num">${fmtH(sum(te, x => x.minutes))}</td>
      <td class="num">${acc == null ? '<span class="muted">-</span>' : `<span class="badge ${accCls}">${Math.round(acc * 100)}% (${qC}/${qT})</span>`}</td></tr>`;
  }
  html += '</tbody></table></div><p class="small muted">Tỷ lệ đúng dưới 60% được tô đỏ, 60-70% tô vàng. Mức 70% thường được coi là an toàn khi luyện đề.</p></div>';
  return html;
}

// Chương trình tab: a study map. Each module shows whether it was learned, time spent and the latest practice score.
let synFilter = 'all';
let synMat = false;
const synOpen = new Set();
let synInit = false;
const SYN_ST = {
  none: { label: 'Chưa học', cls: '' }, learned: { label: 'Đã học', cls: '' },
  good: { label: 'Đã vững', cls: 'ok' }, mid: { label: 'Cần ôn', cls: 'warn' }, weak: { label: 'Đang yếu', cls: 'bad' },
};
function moduleInfo(m) {
  const lt = S.tasks.filter(x => x.key === `L:${m.id}`);
  const ids = new Set(S.tasks.filter(x => x.moduleId === m.id).map(x => x.id));
  const done = lt.filter(x => x.done);
  const minutes = sum(done, x => Number(x.actualMin != null ? x.actualMin : x.minutes) || 0)
    + sum((S.log || []).filter(e => e.kind === 'revisit' && ids.has(e.taskId)), e => Number(e.minutes) || 0);
  const qs = (S.qstats || {})[m.id];
  // Before per-module stats existed, the score typed in when finishing the lesson is the only record.
  const typed = done.filter(x => x.qTotal).sort((x, y) => (x.doneAt < y.doneAt ? -1 : 1)).pop();
  const last = qs ? qs.last : typed ? { c: Number(typed.qCorrect) || 0, n: Number(typed.qTotal) } : null;
  const tot = qs ? { c: qs.c, n: qs.n } : last;
  let st = done.length ? 'learned' : 'none';
  if (last && last.n) { const r = last.c / last.n; st = r >= 0.7 ? 'good' : r >= 0.6 ? 'mid' : 'weak'; }
  const next = lt.find(x => !x.done);
  const task = done.length ? done[done.length - 1] : next;
  return { st, minutes, last, tot, task, learned: done.length > 0 || !!qs };
}
function synMatch(st) {
  return synFilter === 'all' || (synFilter === 'none' && st === 'none') || (synFilter === 'weak' && (st === 'weak' || st === 'mid')) || (synFilter === 'good' && st === 'good');
}
/* ---------- Glossary (all lesson terms in one place) ---------- */
let glQuery = '', glTopic = 'all', glSort = 'en', glLimit = 100, glIndex = null;
const GL_PAGE = 100;
const GL_SORTS = [['en', 'A-Z tiếng Anh'], ['vi', 'A-Z tiếng Việt'], ['lesson', 'Theo bài học']];
const viCollator = new Intl.Collator('vi');
// Merge identical terms (same English name, case-insensitive) across modules into one entry.
function buildGlossary() {
  const map = new Map();
  SY.topics.forEach(t => t.modules.forEach(m => {
    const L = window.LESSONS && window.LESSONS[m.id];
    if (!L || !L.glossary) return;
    Object.values(L.glossary).forEach(([en, vi, d]) => {
      const k = fold(en).replace(/\s+/g, ' ').trim();
      let e = map.get(k);
      if (!e) { e = { en, vi, d, mods: [], viAlt: [], key: '' }; map.set(k, e); }
      else if (vi && fold(vi) !== fold(e.vi) && !e.viAlt.some(x => fold(x) === fold(vi))) e.viAlt.push(vi);
      if (!e.mods.some(x => x.id === m.id)) e.mods.push({ id: m.id, topic: t.code });
      e.key = fold(`${e.en} ${e.vi} ${e.viAlt.join(' ')} ${e.d}`);
    });
  }));
  return [...map.values()];
}
const modOrder = {};
SY.topics.forEach(t => t.modules.forEach(m => { modOrder[m.id] = Object.keys(modOrder).length; }));
// First module in syllabus order (within the chosen subject when one is filtered); used to group the by-lesson view.
const glFirst = e => e.mods.filter(x => glTopic === 'all' || x.topic === glTopic).reduce((a, x) => (modOrder[x.id] < modOrder[a.id] ? x : a));
function glFiltered() {
  if (!glIndex) glIndex = buildGlossary();
  const words = fold(glQuery).split(/\s+/).filter(Boolean);
  let list = glIndex.filter(e => (glTopic === 'all' || e.mods.some(x => x.topic === glTopic)) && words.every(w => e.key.includes(w)));
  // With a query: exact name first, then names starting with it, then the rest (A-Z sorts only; by-lesson keeps its grouping).
  const phrase = fold(glQuery).replace(/\s+/g, ' ').trim();
  const rank = e => {
    if (!phrase || glSort === 'lesson') return 0;
    const names = [fold(e.en), fold(e.vi)];
    return names.includes(phrase) ? 0 : names.some(n => n.startsWith(phrase)) ? 1 : 2;
  };
  if (glSort === 'en') list = list.sort((a, b) => rank(a) - rank(b) || a.en.localeCompare(b.en, 'en', { sensitivity: 'base' }));
  else if (glSort === 'vi') list = list.sort((a, b) => rank(a) - rank(b) || viCollator.compare(a.vi, b.vi));
  else list = list.sort((a, b) => modOrder[glFirst(a).id] - modOrder[glFirst(b).id] || a.en.localeCompare(b.en, 'en', { sensitivity: 'base' }));
  return list;
}
// Module label: opens the lesson room of that module's learn task (same action as the syllabus button).
function glModBtn(id) {
  const t = glTasks[id];
  return t ? `<button class="gl-mod" data-action="enter-room" data-id="${t.id}" title="Mở bài ${id}">${id}</button>` : `<span class="gl-mod off" title="Module chưa có trong lịch">${id}</span>`;
}
let glTasks = {};
function glTermHtml(e) {
  return `<div class="gl-item"><div class="gl-head"><b>${esc(e.en)}</b> <span class="gl-vi">${esc(e.vi)}${e.viAlt.length ? ` <span class="muted small">(cũng: ${esc(e.viAlt.join('; '))})</span>` : ''}</span></div>
    <div class="small muted">${esc(e.d)}</div>
    <div class="gl-mods">${e.mods.map(x => `${glModBtn(x.id)}`).join('')}</div></div>`;
}
function renderGlResults() {
  glTasks = {};
  Object.keys(MODULE).forEach(id => { glTasks[id] = moduleInfo(MODULE[id]).task; });
  const list = glFiltered();
  if (!list.length) return `<p class="small muted">Không tìm thấy thuật ngữ nào${glQuery ? ` khớp "${esc(glQuery)}"` : ''}.</p>`;
  const shown = list.slice(0, glLimit);
  let html = `<p class="small muted">${list.length} thuật ngữ${list.length > shown.length ? `, hiện ${shown.length} đầu tiên` : ''}</p><div class="card gl-list">`;
  let prev = null;
  shown.forEach(e => {
    if (glSort === 'lesson') {
      const f = glFirst(e).id;
      if (f !== prev) { prev = f; const mod = MODULE[f]; html += `<div class="gl-group">${f}${mod ? ` - ${esc(mod.name)}` : ''}</div>`; }
    }
    html += glTermHtml(e);
  });
  html += '</div>';
  if (list.length > shown.length) html += `<p><button class="btn" data-action="gl-more">Xem thêm (còn ${list.length - shown.length})</button></p>`;
  return html;
}
function renderGlossary() {
  if (!glIndex) glIndex = buildGlossary();
  const cnt = code => glIndex.filter(e => e.mods.some(x => x.topic === code)).length;
  return `<h1>Thuật ngữ</h1><p class="sub">${glIndex.length} thuật ngữ từ ${Object.keys(window.LESSONS || {}).length} bài học. Thuật ngữ trùng giữa các module được gộp thành một dòng; bấm nhãn module để mở bài.</p>
    <div class="card cal-search"><label class="f" for="gl-q">Tìm thuật ngữ</label>
      <input type="search" id="gl-q" value="${esc(glQuery)}" placeholder="Anh, Việt (không dấu cũng được)..." autocomplete="off"></div>
    <div class="actions syn-bar"><button class="btn small ${glTopic === 'all' ? 'on' : ''}" data-action="gl-topic" data-k="all">Tất cả (${glIndex.length})</button>${SY.topics.map(t => `<button class="btn small ${glTopic === t.code ? 'on' : ''}" data-action="gl-topic" data-k="${t.code}" title="${esc(t.name)}">${t.code} (${cnt(t.code)})</button>`).join('')}</div>
    <div class="actions syn-bar"><span class="small muted">Sắp xếp:</span>${GL_SORTS.map(([k, l]) => `<button class="btn small ${glSort === k ? 'on' : ''}" data-action="gl-sort" data-k="${k}">${l}</button>`).join('')}</div>
    <div id="gl-results">${renderGlResults()}</div>`;
}

function renderSyllabus() {
  if (!synInit) {
    // First visit: open the subject currently being studied.
    synInit = true;
    const nx = S.tasks.filter(x => x.type === 'learn' && !x.done).sort((x, y) => (x.date < y.date ? -1 : 1))[0];
    synOpen.add(nx ? nx.topic : S.settings.topicOrder[0]);
  }
  const info = {};
  Object.values(MODULE).forEach(m => { info[m.id] = moduleInfo(m); });
  const all = Object.values(info);
  const cnt = { all: all.length, none: all.filter(x => x.st === 'none').length, weak: all.filter(x => x.st === 'weak' || x.st === 'mid').length, good: all.filter(x => x.st === 'good').length };
  const FL = [['all', 'Tất cả'], ['none', 'Chưa học'], ['weak', 'Cần ôn và đang yếu'], ['good', 'Đã vững']];
  let html = `<h1>Chương trình Level I 2027</h1><p class="sub">${SY.topics.length} môn, ${all.length} module. Xem module nào đã học, đang yếu hay đã vững rồi vào học hoặc ôn lại ngay.</p>
    <div class="actions syn-bar">${FL.map(([k, l]) => `<button class="btn small ${synFilter === k ? 'on' : ''}" data-action="syn-filter" data-k="${k}">${l} (${cnt[k]})</button>`).join('')}
    <span style="flex:1"></span><button class="btn small ${synMat ? 'on' : ''}" data-action="syn-mat">Tài liệu riêng</button></div>`;
  for (const code of S.settings.topicOrder) {
    const t = TOPIC[code];
    const mods = t.modules.filter(m => synMatch(info[m.id].st));
    if (!mods.length && synFilter !== 'all') continue;
    const tc = t.modules.map(m => info[m.id]);
    const learned = tc.filter(x => x.learned).length;
    const c = sum(tc, x => (x.tot ? x.tot.c : 0)), n = sum(tc, x => (x.tot ? x.tot.n : 0));
    const scored = t.modules.filter(m => info[m.id].last && info[m.id].last.n);
    const worst = scored.sort((x, y) => info[x.id].last.c / info[x.id].last.n - info[y.id].last.c / info[y.id].last.n)[0];
    const open = synOpen.has(code) || synFilter !== 'all';
    const wst = worst ? SYN_ST[info[worst.id].st] : null;
    html += `<div class="card syn-topic"><button class="syn-head" data-action="syn-topic" data-k="${code}" aria-expanded="${open}">
      <span class="syn-title">${esc(t.name)} <span class="muted small">- trọng số ${t.weightMin}-${t.weightMax}%</span></span><span class="muted">${open ? '▴' : '▾'}</span></button>
      <div class="syn-stats small"><span><span class="muted">Đã học</span> ${learned}/${t.modules.length} module</span>
      ${n ? `<span><span class="muted">Luyện tập đúng</span> ${Math.round((c / n) * 100)}% số câu</span>` : ''}
      ${worst && info[worst.id].st !== 'good' ? `<span><span class="muted">Cần ôn nhất</span> <span class="txt-${wst.cls}">${worst.id}</span></span>` : ''}
      <span><span class="muted">Thời gian</span> ${fmtM(sum(tc, x => x.minutes))}</span></div>
      <div class="syn-bar-track"><div style="width:${Math.round((learned / t.modules.length) * 100)}%"></div></div>`;
    if (open) {
      html += `<div class="syn-rows"><div class="syn-row syn-th small muted"><span>Module</span><span>Tên</span><span>Trạng thái</span><span>Đã học</span><span>Luyện tập gần nhất</span><span></span></div>`;
      for (const m of mods) {
        const x = info[m.id], s = SYN_ST[x.st];
        const mat = S.materials[m.id] || { status: '', note: '' };
        const btn = x.task ? `<button class="btn small" data-action="enter-room" data-id="${x.task.id}">${x.task.done ? 'Ôn lại' : 'Vào học'}</button>` : '';
        html += `<div class="syn-row"><span class="small muted">${m.id}</span><span class="syn-name">${esc(m.name)}</span>
          <span><span class="badge ${s.cls}">${s.label}</span></span><span class="small">${x.minutes ? fmtM(x.minutes) : '<span class="muted">-</span>'}</span>
          <span class="small syn-res">${x.last && x.last.n ? `<span class="txt-${s.cls}">${x.last.c}/${x.last.n} câu đúng</span>` : '<span class="muted">Chưa làm</span>'}</span><span>${btn}</span></div>`;
        if (synMat) html += `<div class="syn-mat"><select data-action="mat-status" data-id="${m.id}"><option value="">- Tài liệu -</option>${Object.entries(MAT).map(([k, v]) => `<option value="${k}" ${mat.status === k ? 'selected' : ''}>${v.label}</option>`).join('')}</select>
          <input type="text" placeholder="Tài liệu riêng cho module này (sách, trang, link...)" value="${esc(mat.note)}" data-action="mat-note" data-id="${m.id}"></div>`;
      }
      html += '</div>';
    }
    html += '</div>';
  }
  html += '<p class="small muted">Đã vững: từ 70% số câu đúng ở lần luyện tập gần nhất (7/10). Cần ôn: 60-70%. Đang yếu: dưới 60%.</p>';
  return html;
}

function renderSettings(first) {
  const st = S.settings || defaultSettings();
  const tplOpts = Object.entries(TEMPLATES).map(([k, v]) => `<option value="${k}" ${st.template === k ? 'selected' : ''}>${v.label}</option>`).join('');
  const topicRows = st.topicOrder.map((c, i) => `<div class="topic-row" data-code="${c}"><span>${i + 1}. ${esc(TOPIC[c].short)} <span class="small muted">${TOPIC[c].weightMin}-${TOPIC[c].weightMax}%</span></span>
    <select name="level-${c}">${Object.entries(LEVELS).map(([k, v]) => `<option value="${k}" ${st.level[c] === k ? 'selected' : ''}>${v.label}</option>`).join('')}</select>
    <span class="small muted">${LEVELS[st.level[c]].mult === 1 ? 'giờ chuẩn' : LEVELS[st.level[c]].mult > 1 ? '+30% giờ' : '-25% giờ'}</span>
    <span class="actions"><button type="button" class="btn small" data-action="up" data-i="${i}" ${i === 0 ? 'disabled' : ''}>↑</button><button type="button" class="btn small" data-action="down" data-i="${i}" ${i === st.topicOrder.length - 1 ? 'disabled' : ''}>↓</button></span></div>`).join('');
  return `<h1>${first ? 'Tạo kế hoạch ôn thi' : 'Cài đặt kế hoạch'}</h1>
  <p class="sub">${first ? 'Mất khoảng 3 phút. Mọi thông số đều chỉnh lại được sau.' : 'Đổi giờ học hoặc ngày thi rồi bấm "Lưu và xếp lại lịch". Đổi mẫu, trình độ hay thứ tự topic thì bấm "Tạo lại kế hoạch" (giữ nguyên phần đã học).'}</p>
  <form id="settings">
    <div class="card"><h2>1. Thời gian</h2>
      <div class="row">
        <label class="f">Ngày bắt đầu<input type="date" name="startDate" value="${st.startDate}"></label>
        <label class="f">Ngày thi<input type="date" name="examDate" value="${st.examDate}"></label>
      </div>
      <p class="small muted">Level I thi 4 đợt mỗi năm (thường vào tháng 2, 5, 8, 11). Xem lịch chính xác trên trang Dates &amp; Fees của CFA Institute.</p>
      <h3 style="margin-top:12px">Số phút rảnh mỗi ngày trong tuần</h3>
      <div class="dow">${DOW_ORDER.map(i => `<label class="f">${DOW[i]}<input type="number" name="dow-${i}" min="0" step="15" value="${st.minutesByDow[i]}"></label>`).join('')}</div>
      <div class="actions" style="margin-top:8px"><button type="button" class="btn small" data-action="preset" data-p="work">Người đi làm (90 phút ngày thường, 4 giờ cuối tuần)</button><button type="button" class="btn small" data-action="preset" data-p="student">Sinh viên (2 giờ mỗi ngày, 3 giờ cuối tuần)</button></div>
      <p id="feas" class="small" style="margin-top:10px"></p>
    </div>
    <div class="card"><h2>2. Mẫu kế hoạch</h2>
      <label class="f">Mẫu<select name="template">${tplOpts}</select></label>
      <div class="row" style="margin-top:10px">
        <label class="f">Tổng giờ mục tiêu<input type="number" name="targetHours" min="50" step="10" value="${st.targetHours}"></label>
        <label class="f">% học mới<input type="number" name="pLearn" min="0" max="100" value="${st.pct.learn}"></label>
        <label class="f">% ôn tập<input type="number" name="pReview" min="0" max="100" value="${st.pct.review}"></label>
        <label class="f">% thi thử<input type="number" name="pMock" min="0" max="100" value="${st.pct.mock}"></label>
      </div>
      <p class="small muted">CFA Institute khuyến nghị khoảng 300 giờ cho mỗi Level. Mỗi đề thi thử gồm 2 session x 135 phút và 2 giờ chữa đề.</p>
    </div>
    <div class="card"><h2>3. Topic: thứ tự học và tự đánh giá</h2>
      <p class="small muted">Giờ học mỗi topic = trọng số đề thi x hệ số trình độ. Topic "Yếu" được thêm 30% giờ, "Mạnh" bớt 25%.</p>
      ${topicRows}
    </div>
    <div class="card"><h2>4. Cam kết với bản thân</h2>
      <label class="f">Vì sao bạn thi CFA? Câu này sẽ hiện ở trang Hôm nay.<textarea name="reason" placeholder="Ví dụ: Tôi muốn chuyển sang làm phân tích đầu tư trước năm 2028.">${esc(st.reason)}</textarea></label>
    </div>
    <div class="actions" style="margin-bottom:20px">
      ${first ? '<button class="btn primary" type="submit" data-mode="generate">Tạo kế hoạch</button>'
        : '<button class="btn primary" type="submit" data-mode="reflow">Lưu và xếp lại lịch</button><button class="btn" type="submit" data-mode="generate">Tạo lại kế hoạch</button>'}
    </div>
  </form>
  ${first ? '' : `<div class="card"><h2>Ngày nghỉ</h2>
    <p class="small muted">Ngày nghỉ không xếp việc học. Thêm ở đây hoặc bấm "Nghỉ ngày này" trong tab Lịch.</p>
    <div class="row"><input type="date" id="offDate" min="${todayStr()}"><button class="btn small" data-action="add-off">Thêm ngày nghỉ</button></div>
    <div class="actions" style="margin-top:8px">${st.offDays.filter(d => d >= todayStr()).sort().map(d => `<span class="badge">${fmtDateY(d)} <a href="#" data-action="toggle-off" data-date="${d}">x</a></span>`).join('') || '<span class="small muted">Chưa có ngày nghỉ nào.</span>'}</div></div>`}
  <div class="card"><h2>Dữ liệu</h2>
    <p class="small muted">Dữ liệu chỉ lưu trong trình duyệt này. Nên sao lưu mỗi tuần, nhất là trước khi xóa lịch sử trình duyệt.</p>
    <div class="actions">
      <button class="btn" data-action="export">Sao lưu (tải file .json)</button>
      <label class="btn">Khôi phục từ file sao lưu<input type="file" accept=".json,application/json" data-action="import-all" hidden></label>
      <button class="btn" data-action="paste-backup">Dán bản sao lưu</button>
      ${first ? '' : '<button class="btn danger" data-action="reset">Xóa toàn bộ và làm lại</button>'}
    </div></div>`;
}

function readSettingsForm(form, base) {
  const f = new FormData(form);
  const st = JSON.parse(JSON.stringify(base));
  st.startDate = f.get('startDate') || st.startDate;
  st.examDate = f.get('examDate') || st.examDate;
  st.minutesByDow = [0, 1, 2, 3, 4, 5, 6].map(i => Math.max(0, Number(f.get(`dow-${i}`)) || 0));
  st.template = f.get('template');
  st.targetHours = Math.max(50, Number(f.get('targetHours')) || 300);
  st.pct = { learn: Number(f.get('pLearn')) || 0, review: Number(f.get('pReview')) || 0, mock: Number(f.get('pMock')) || 0 };
  st.topicOrder.forEach(c => { st.level[c] = f.get(`level-${c}`) || 'tb'; });
  st.reason = (f.get('reason') || '').trim();
  return st;
}

function bindSettings(first) {
  const form = document.getElementById('settings');
  let draft = readSettingsForm(form, S.settings || defaultSettings());
  const feas = () => {
    const from = draft.startDate > todayStr() ? draft.startDate : todayStr();
    const cap = draft.examDate > from ? capacityBetween(from, addDays(draft.examDate, -1), draft) : 0;
    const el = document.getElementById('feas');
    const need = draft.targetHours * 60;
    const weeks = Math.max(0, diffDays(from, draft.examDate) / 7);
    el.innerHTML = `Từ ${fmtDateY(from)} đến trước ngày thi: <b>${Math.round(weeks)} tuần</b>, tổng giờ rảnh <b>${fmtH(cap)}</b> - mục tiêu ${fmtH(need)}. `
      + (cap >= need ? `<span class="badge ok">Khả thi, dư ${fmtH(cap - need)}</span>` : `<span class="badge bad">Thiếu ${fmtH(need - cap)} - tăng giờ mỗi ngày hoặc dời ngày thi</span>`);
    if (!first && S.tasks.length && draft.examDate > todayStr()) {
      const now = currentPlanStats();
      const sim = simulatePlan(draft);
      const late = sim.end >= draft.examDate;
      el.innerHTML += `<br><span class="small">Nếu bấm <b>Lưu và xếp lại lịch</b>: học từ <b>${fmtDateY(sim.start)}</b> đến <b>${fmtDateY(sim.end)}</b>, trung bình <b>${fmtH(sim.perWeek)}/tuần</b>`
        + (now ? ` (hiện tại: đến ${fmtDateY(now.end)}, ${fmtH(now.perWeek)}/tuần)` : '')
        + (late ? ' <span class="badge bad">kéo quá ngày thi</span>' : '') + '.</span>';
    }
  };
  feas();
  form.addEventListener('input', e => {
    draft = readSettingsForm(form, draft);
    if (e.target.name === 'template' && TEMPLATES[draft.template].pct) {
      const t = TEMPLATES[draft.template];
      form.targetHours.value = t.targetHours; form.pLearn.value = t.pct.learn; form.pReview.value = t.pct.review; form.pMock.value = t.pct.mock;
      draft = readSettingsForm(form, draft);
    } else if (['targetHours', 'pLearn', 'pReview', 'pMock'].includes(e.target.name)) {
      form.template.value = 'tuychinh'; draft.template = 'tuychinh';
    }
    feas();
  });
  form.addEventListener('click', e => {
    const b = e.target.closest('[data-action]');
    if (!b) return;
    const a = b.dataset.action;
    if (a === 'preset') {
      const v = b.dataset.p === 'work' ? [240, 90, 90, 90, 90, 90, 240] : [180, 120, 120, 120, 120, 120, 180];
      v.forEach((m, i) => { form[`dow-${i}`].value = m; });
      draft = readSettingsForm(form, draft); feas();
    }
    if (a === 'up' || a === 'down') {
      draft = readSettingsForm(form, draft);
      const i = Number(b.dataset.i); const j = a === 'up' ? i - 1 : i + 1;
      [draft.topicOrder[i], draft.topicOrder[j]] = [draft.topicOrder[j], draft.topicOrder[i]];
      const keep = S.settings; S.settings = draft;
      app.innerHTML = renderSettings(first); bindSettings(first);
      S.settings = keep;
      if (!keep) S.settings = null;
    }
  });
  form.addEventListener('submit', e => {
    e.preventDefault();
    const mode = e.submitter ? e.submitter.dataset.mode : 'generate';
    const st = readSettingsForm(form, draft);
    const p = st.pct.learn + st.pct.review + st.pct.mock;
    if (p !== 100) { toast(`Tổng % học mới, ôn tập, thi thử phải bằng 100 (hiện là ${p}).`); return; }
    if (st.examDate <= todayStr()) { toast('Ngày thi phải sau hôm nay.'); return; }
    if (!st.minutesByDow.some(m => m > 0)) { toast('Hãy nhập số phút rảnh cho ít nhất một ngày trong tuần.'); return; }
    const apply = () => {
    const isFirst = !S.settings;
    S.settings = st;
    if (mode === 'generate') { generatePlan(); toast('Đã tạo kế hoạch.'); }
    else {
      const msg = reflow('shift');
      // New dates mean a new plan: the "chậm/vượt" yardstick follows it.
      buildBaseline(); save();
      toast(msg);
    }
    if (isFirst) importDefaultMaterialsHint();
    view = 'today'; render();
    };
    if (mode === 'generate' && !first) askConfirm('Tạo lại kế hoạch? Các việc đã hoàn thành được giữ lại, các việc còn lại sẽ được xếp mới.', 'Tạo lại').then(ok => { if (ok) apply(); });
    else apply();
  });
}

function importDefaultMaterialsHint() {
  setTimeout(() => toast('Mẹo: vào tab Chương trình để nhập file tài liệu của bạn.'), 3400);
}

/* ---------- In-page dialogs (browser confirm() is blocked in some viewers) ---------- */
function openModal(html) {
  const wrap = document.createElement('div');
  wrap.className = 'modal-back';
  wrap.innerHTML = `<div class="modal card" role="dialog" aria-modal="true">${html}</div>`;
  document.body.appendChild(wrap);
  const close = () => wrap.remove();
  wrap.addEventListener('click', e => { if (e.target === wrap) close(); });
  return { el: wrap, close };
}
function askConfirm(message, okLabel = 'Đồng ý') {
  return new Promise(resolve => {
    const m = openModal(`<p>${esc(message)}</p><div class="actions" style="justify-content:flex-end"><button class="btn" data-m="no">Hủy</button><button class="btn primary" data-m="yes">${esc(okLabel)}</button></div>`);
    m.el.addEventListener('click', e => {
      const b = e.target.closest('[data-m]');
      if (!b) { if (e.target === m.el) resolve(false); return; }
      m.close(); resolve(b.dataset.m === 'yes');
    });
    m.el.querySelector('[data-m="yes"]').focus();
  });
}
// Backup as text: works even where file downloads are blocked.
function showBackup(text) {
  const m = openModal(`<h2>Sao lưu dữ liệu</h2><p class="small muted">Nếu file không tự tải về, bấm Chép rồi dán vào một file ghi chú (Notes) để giữ. Khôi phục bằng nút "Dán bản sao lưu" trong Cài đặt.</p>
    <textarea class="backup-text" readonly>${esc(text)}</textarea>
    <div class="actions" style="justify-content:flex-end"><button class="btn" data-m="close">Đóng</button><button class="btn primary" data-m="copy">Chép</button></div>`);
  const ta = m.el.querySelector('textarea');
  m.el.addEventListener('click', e => {
    const b = e.target.closest('[data-m]');
    if (!b) return;
    if (b.dataset.m === 'close') { m.close(); return; }
    const done = ok => toast(ok ? 'Đã chép bản sao lưu.' : 'Không chép được - bôi đen ô trên rồi Cmd + C.');
    if (navigator.clipboard) navigator.clipboard.writeText(text).then(() => done(true), () => { ta.select(); done(document.execCommand && document.execCommand('copy')); });
    else { ta.select(); done(document.execCommand('copy')); }
  });
}
function askPasteBackup() {
  const m = openModal(`<h2>Dán bản sao lưu</h2><p class="small muted">Dán toàn bộ nội dung sao lưu (bắt đầu bằng {"kind":"cfa-planner-backup" ...). Dữ liệu hiện tại sẽ bị thay thế.</p>
    <textarea class="backup-text" id="paste-backup"></textarea>
    <div class="actions" style="justify-content:flex-end"><button class="btn" data-m="close">Hủy</button><button class="btn primary" data-m="ok">Khôi phục</button></div>`);
  m.el.addEventListener('click', e => {
    const b = e.target.closest('[data-m]');
    if (!b) return;
    if (b.dataset.m === 'close') { m.close(); return; }
    if (restoreBackup(m.el.querySelector('#paste-backup').value)) m.close();
  });
}
function restoreBackup(txt) {
  let data;
  try { data = JSON.parse(txt); } catch (err) { toast('Nội dung không đúng định dạng sao lưu.'); return false; }
  if (data.kind !== 'cfa-planner-backup' || !data.state || !data.state.settings) { toast('Đây không phải bản sao lưu của website này.'); return false; }
  S = { ...emptyState(), ...data.state }; save(); view = 'today'; toast('Đã khôi phục dữ liệu.'); render();
  return true;
}

/* ---------- Theme ---------- */
const THEMES = [['light', '☀ Sáng'], ['dark', '☾ Tối'], ['auto', '◐ Theo máy']];
function applyTheme(t) {
  if (t === 'auto') document.documentElement.removeAttribute('data-theme'); else document.documentElement.setAttribute('data-theme', t);
  try { localStorage.setItem('cfaTheme', t); } catch (e) { /* storage unavailable */ }
  document.getElementById('theme-btn').textContent = THEMES.find(x => x[0] === t)[1];
}
let savedTheme = 'light';
try { savedTheme = localStorage.getItem('cfaTheme') || 'light'; } catch (e) { /* storage unavailable */ }
applyTheme(['light', 'dark', 'auto'].includes(savedTheme) ? savedTheme : 'light');
document.getElementById('theme-btn').addEventListener('click', () => {
  const cur = document.documentElement.getAttribute('data-theme') || 'auto';
  const i = THEMES.findIndex(x => x[0] === cur);
  applyTheme(THEMES[(i + 1) % THEMES.length][0]);
});

/* ---------- Global events ---------- */
document.getElementById('tabs').addEventListener('click', e => {
  const b = e.target.closest('button[data-view]');
  if (!b || !S.settings) return;
  view = b.dataset.view; openForm = null; render(); window.scrollTo(0, 0);
});

app.addEventListener('click', e => {
  const el = e.target.closest('[data-action]');
  if (!el || el.closest('#settings')) return;
  const a = el.dataset.action;
  const id = Number(el.dataset.id);
  if (el.tagName === 'A') e.preventDefault();
  if (a === 'open-form') { openForm = id; render(); }
  if (a === 'cancel-form') { openForm = null; render(); }
  if (a === 'undo') { undoTask(id); render(); }
  if (a === 'pull') { const t = pullNextTask(); toast(t ? `Đã kéo "${t.title}" về hôm nay.` : 'Không còn việc nào phía sau.'); render(); }
  if (a === 'reflow') { toast(reflow(el.dataset.mode)); render(); }
  if (a === 'goto-settings') { view = 'settings'; render(); window.scrollTo(0, 0); }
  if (a === 'toggle-weeks') { showAllWeeks = !showAllWeeks; render(); }
  if (a === 'cal-jump') jumpToTask(id);
  if (a === 'gl-topic') { glTopic = el.dataset.k; glLimit = GL_PAGE; render(); }
  if (a === 'gl-sort') { glSort = el.dataset.k; glLimit = GL_PAGE; render(); }
  if (a === 'gl-more') { glLimit += GL_PAGE; document.getElementById('gl-results').innerHTML = renderGlResults(); }
  if (a === 'syn-filter') { synFilter = el.dataset.k; render(); }
  if (a === 'syn-mat') { synMat = !synMat; render(); }
  if (a === 'syn-topic') { const k = el.dataset.k; if (synOpen.has(k)) synOpen.delete(k); else synOpen.add(k); render(); }
  if (a === 'toggle-off') {
    const d = el.dataset.date;
    const st = S.settings;
    st.offDays = st.offDays.includes(d) ? st.offDays.filter(x => x !== d) : st.offDays.concat(d);
    reflow('shift');
    toast(st.offDays.includes(d) ? `Đã nghỉ ${fmtDateY(d)} và xếp lại lịch.` : `Đã bỏ nghỉ ${fmtDateY(d)}.`);
    render();
  }
  if (a === 'add-off') {
    const d = document.getElementById('offDate').value;
    if (!d) return;
    if (!S.settings.offDays.includes(d)) S.settings.offDays.push(d);
    reflow('shift'); toast(`Đã thêm ngày nghỉ ${fmtDateY(d)}.`); render();
  }
  if (a === 'export') {
    const backupText = JSON.stringify({ kind: 'cfa-planner-backup', version: 1, exportedAt: new Date().toISOString(), state: S }, null, 1);
    const blob = new Blob([backupText], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `cfa-planner-saoluu-${todayStr()}.json`;
    link.click();
    setTimeout(() => URL.revokeObjectURL(link.href), 1000);
    showBackup(backupText);
  }
  if (a === 'reset') {
    askConfirm('Xóa toàn bộ kế hoạch và tiến độ? Nên sao lưu trước.', 'Xóa hết').then(ok => { if (ok) { S = emptyState(); save(); render(); } });
  }
  if (a === 'paste-backup') askPasteBackup();
});

app.addEventListener('submit', e => {
  const form = e.target.closest('form[data-form]');
  if (!form) return;
  e.preventDefault();
  const f = new FormData(form);
  const num = k => (f.get(k) === '' || f.get(k) == null ? null : Number(f.get(k)));
  const qc = num('qc');
  const qt = num('qt');
  if (qc != null && qt != null && qc > qt) { toast('Số câu đúng không thể lớn hơn tổng số câu.'); return; }
  completeTask(Number(form.dataset.form), { actual: num('actual') || 0, qc, qt, note: (f.get('note') || '').trim(), partial: f.get('partial') === 'on' });
  openForm = null;
  const M = metrics();
  toast(M.streak > 1 ? `Đã lưu. Chuỗi ${M.streak} ngày liên tục - tiếp tục nhé!` : 'Đã lưu check-in.');
  render();
});

app.addEventListener('input', e => {
  if (e.target.id === 'gl-q') {
    glQuery = e.target.value; glLimit = GL_PAGE;
    document.getElementById('gl-results').innerHTML = renderGlResults();
    return;
  }
  if (e.target.id !== 'cal-q') return;
  calQuery = e.target.value;
  const box = document.getElementById('cal-results');
  if (box) box.innerHTML = renderCalResults(calQuery);
});

app.addEventListener('change', e => {
  const el = e.target;
  const a = el.dataset.action;
  if (a === 'move') {
    const t = S.tasks.find(x => x.id === Number(el.dataset.id));
    if (t && el.value && el.value >= todayStr()) { t.date = el.value; t.pinned = true; save(); toast(`Đã dời sang ${fmtDateY(el.value)}.`); render(); }
  }
  if (a === 'mat-status' || a === 'mat-note') {
    const m = S.materials[el.dataset.id] || { status: '', note: '' };
    if (a === 'mat-status') m.status = el.value; else m.note = el.value.trim();
    S.materials[el.dataset.id] = m; save();
    if (a === 'mat-status') render();
  }
  if (a === 'import-mat' || a === 'import-all') {
    const file = el.files[0];
    if (!file) return;
    file.text().then(txt => {
      let data;
      try { data = JSON.parse(txt); } catch (err) { toast('File không đúng định dạng JSON.'); return; }
      if (a === 'import-mat') {
        if (data.kind !== 'cfa-planner-materials' || !data.materials) { toast('Đây không phải file tài liệu của CFA Planner.'); return; }
        let n = 0;
        Object.entries(data.materials).forEach(([id, v]) => { if (MODULE[id] && v && MAT[v.status]) { S.materials[id] = { status: v.status, note: String(v.note || '') }; n++; } });
        save(); toast(`Đã nhập tài liệu cho ${n} module.`); render();
      } else {
        askConfirm('Khôi phục sẽ thay toàn bộ dữ liệu hiện tại. Tiếp tục?', 'Khôi phục').then(ok => { if (ok) restoreBackup(txt); });
      }
    });
  }
});

render();
