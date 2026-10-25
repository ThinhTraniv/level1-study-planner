// Công cụ dùng chung cho các file bài giảng và slide (content/QM-xx.js, content/QM-xx-slides.js).
window.LESSONS = window.LESSONS || {};
window.CFAH = (function () {
  // Thuật ngữ trong bài giảng: rê chuột để xem giải thích (key phải có trong glossary của module).
  const term = (key, text) => `<span class="term" data-term="${key}">${text}</span>`;
  const frac = (a, b) => `<span class="frac"><span>${a}</span><span>${b}</span></span>`;

  // Bảng hướng dẫn bấm máy. rows: [[mô tả, 'chuỗi phím', 'màn hình']]; phím viết trong ngoặc vuông, ví dụ '[2ND] [FV]'.
  const keys = rows => `<table class="keys"><thead><tr><th>Bước</th><th>Bấm</th><th>Màn hình</th></tr></thead><tbody>${
    rows.map(r => `<tr><td>${r[0]}</td><td>${r[1].split(' ').map(k => (k.startsWith('[') ? `<kbd>${k.slice(1, -1).replace(/_/g, ' ')}</kbd>` : k)).join(' ')}</td><td>${r[2]}</td></tr>`).join('')}</tbody></table>`;

  // Trục thời gian trong bài giảng. flows: [{t, label, up, cls}] ; cls 'pv' tô màu cam.
  const timeline = (n, flows, caption) => {
    const W = 560, x0 = 40, x1 = 520, y = 70;
    const x = i => x0 + ((x1 - x0) * i) / n;
    let s = `<figure class="tl"><svg viewBox="0 0 ${W} 130" role="img" aria-label="${caption}">`;
    s += `<line x1="${x0}" y1="${y}" x2="${x1}" y2="${y}" class="axis"/>`;
    for (let i = 0; i <= n; i++) s += `<line x1="${x(i)}" y1="${y - 5}" x2="${x(i)}" y2="${y + 5}" class="axis"/><text x="${x(i)}" y="${y + 22}" class="tick">t=${i}</text>`;
    flows.forEach(f => {
      const yy = f.up ? y - 42 : y + 50;
      s += `<line x1="${x(f.t)}" y1="${f.up ? y - 8 : y + 30}" x2="${x(f.t)}" y2="${f.up ? y - 30 : y + 34}" class="${f.cls || 'flow'}"/>`;
      s += `<text x="${x(f.t)}" y="${yy}" class="flabel ${f.cls || ''}">${f.label}</text>`;
    });
    return `${s}</svg><figcaption>${caption}</figcaption></figure>`;
  };

  // Trục thời gian trong slide. flows: [{t, label, cls: 'up'|'down'|'pv', above}] ; opt: {h, y, mini, ticks, label}
  function tl(n, flows, opt = {}) {
    const mini = !!opt.mini;
    const W = mini ? 420 : 600, H = opt.h || 120, x0 = mini ? 24 : 30, x1 = W - (mini ? 24 : 30), y = opt.y || 62;
    const fs = mini ? 'style="font-size:22px"' : '';
    const x = i => x0 + ((x1 - x0) * i) / n;
    const anchor = t => (t === 0 ? `x="${x(t) - 4}" text-anchor="start"` : t === n ? `x="${x(t) + 4}" text-anchor="end"` : `x="${x(t)}"`);
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv ${mini ? 'mini' : ''}" role="img" aria-label="${opt.label || 'Trục thời gian'}">`;
    s += `<line x1="${x0}" y1="${y}" x2="${x1}" y2="${y}" class="sv-axis"/>`;
    for (let i = 0; i <= n; i++) s += `<line x1="${x(i)}" y1="${y - 5}" x2="${x(i)}" y2="${y + 5}" class="sv-axis"/><text x="${x(i)}" y="${y + 24}" class="sv-muted" ${mini ? 'style="font-size:17px"' : ''}>${opt.ticks ? opt.ticks[i] : i}</text>`;
    flows.forEach(f => {
      const top = f.cls === 'pv' || f.above;
      s += `<line x1="${x(f.t)}" y1="${top ? y - 10 : y + 32}" x2="${x(f.t)}" y2="${top ? y - 30 : y + 44}" class="sv-${f.cls || 'up'}"/>`;
      s += `<text ${anchor(f.t)} y="${top ? y - 38 : y + 66}" class="sv-txt sv-t-${f.cls || 'up'}" ${fs}>${f.label}</text>`;
    });
    return `${s}</svg>`;
  }

  // Khung một slide. opt: {cover, cls, kicker}
  const slide = (title, body, opt = {}) => ({
    title,
    html: `<section class="sd ${opt.cls || ''}">
    ${opt.cover ? '' : `<header class="sd-h"><span class="sd-k">${opt.kicker || ''}</span><h3>${title}</h3></header>`}
    <div class="sd-b">${body}</div></section>`,
  });

  // Gắn một bộ slide tự thiết kế lên đầu danh sách slide của module.
  const addDeck = (moduleId, label, slides) => {
    const L = window.LESSONS[moduleId];
    if (!L) return;
    L.slides = L.slides || [];
    L.slides.unshift({ label, html: slides.map(s => s.html), titles: slides.map(s => s.title) });
  };

  // Bản công khai không kèm ảnh slide gốc; giữ hàm để các file bài giảng cũ không lỗi.
  const pages = () => [];

  return { term, frac, keys, timeline, tl, slide, addDeck, pages };
}());
