// Bộ slide tự thiết kế cho QM-10 Applications of Simple Linear Regression in Finance.
// Gắn vào LESSONS['QM-10'].slides.
(function () {
  const L = window.LESSONS && window.LESSONS['QM-10'];
  if (!L) return;
  const { frac, slide, addDeck } = window.CFAH;
  const K = 'QM-10 · Simple Linear Regression';
  const S = (title, body, opt = {}) => slide(title, body, Object.assign({ kicker: K }, opt));
  const fmt = (x, d = 2) => x.toFixed(d).replace('.', ',');

  // Dữ liệu ví dụ: giờ ôn thi và điểm thi CFA.
  const HX = [120, 100, 90, 150, 50, 70, 110, 40, 30, 95];
  const HY = [8, 7.5, 7.2, 8.6, 6.5, 6.9, 7.1, 5.8, 5.3, 7.6];
  const ols = (xs, ys) => {
    const n = xs.length, xb = xs.reduce((a, v) => a + v, 0) / n, yb = ys.reduce((a, v) => a + v, 0) / n;
    let sxx = 0, sxy = 0, sst = 0;
    xs.forEach((x, i) => { sxx += (x - xb) ** 2; sxy += (x - xb) * (ys[i] - yb); sst += (ys[i] - yb) ** 2; });
    const b1 = sxy / sxx, b0 = yb - b1 * xb;
    const sse = xs.reduce((a, x, i) => a + (ys[i] - b0 - b1 * x) ** 2, 0);
    return { n, xb, yb, sxx, b0, b1, sse, sst, see: Math.sqrt(sse / (n - 2)) };
  };
  const H = ols(HX, HY);

  // Khung trục chung. o: {W, H, l, r, t, b, x0, x1, y0, y1, xt, yt, xl}
  function frame(o) {
    const X = x => o.l + ((x - o.x0) / (o.x1 - o.x0)) * (o.r - o.l);
    const Y = y => o.b - ((y - o.y0) / (o.y1 - o.y0)) * (o.b - o.t);
    let s = `<svg viewBox="0 0 ${o.W} ${o.H}" class="sv ${o.big ? 'big' : ''}" role="img" aria-label="${o.label}">`;
    (o.yt || []).forEach(v => { s += `<line x1="${o.l}" y1="${Y(v)}" x2="${o.r}" y2="${Y(v)}" class="sv-grid"/><text x="${o.l - 8}" y="${Y(v) + 5}" class="sv-muted" text-anchor="end">${o.yf ? o.yf(v) : v}</text>`; });
    (o.xt || []).forEach(v => { s += `<text x="${X(v)}" y="${o.b + 22}" class="sv-muted">${o.xf ? o.xf(v) : v}</text>`; });
    s += `<line x1="${o.l}" y1="${o.b}" x2="${o.r}" y2="${o.b}" class="sv-axis"/><line x1="${o.l}" y1="${o.t}" x2="${o.l}" y2="${o.b}" class="sv-axis"/>`;
    if (o.xl) s += `<text x="${(o.l + o.r) / 2}" y="${o.H - 4}" class="sv-muted">${o.xl}</text>`;
    return { X, Y, s };
  }

  // Biểu đồ phân tán giờ học - điểm, đường OLS, phần dư.
  function hoursScatter() {
    const f = frame({ W: 600, H: 330, l: 50, r: 585, t: 15, b: 290, x0: 0, x1: 160, y0: 4, y1: 9, xt: [0, 40, 80, 120, 160], yt: [4, 5, 6, 7, 8, 9], xl: 'Giờ ôn thi (X)', label: 'Điểm thi theo giờ ôn và đường hồi quy' });
    let s = f.s;
    s += `<line x1="${f.X(20)}" y1="${f.Y(H.b0 + H.b1 * 20)}" x2="${f.X(160)}" y2="${f.Y(H.b0 + H.b1 * 160)}" class="sv-curve"/>`;
    HX.forEach((x, i) => { s += `<line x1="${f.X(x)}" y1="${f.Y(HY[i])}" x2="${f.X(x)}" y2="${f.Y(H.b0 + H.b1 * x)}" class="sv-down"/>`; });
    HX.forEach((x, i) => { s += `<circle cx="${f.X(x)}" cy="${f.Y(HY[i])}" r="6" class="sv-dot"/>`; });
    s += `<circle cx="${f.X(H.xb)}" cy="${f.Y(H.yb)}" r="9" class="sv-node"/><text x="${f.X(H.xb) - 14}" y="${f.Y(H.yb) - 14}" class="sv-txt" text-anchor="end">(X̄, Ȳ) = (85,5; 7,05)</text>`;
    s += `<text x="${f.X(158)}" y="${f.Y(H.b0 + H.b1 * 158) + 34}" class="sv-txt" text-anchor="end">Ŷ = ${fmt(H.b0, 3)} + ${fmt(H.b1, 4)}X</text>`;
    return `${s}</svg>`;
  }

  // Biểu đồ phần dư: 'ok' | 'funnel' | 'curve'
  function resid(kind, cap) {
    let seed = kind === 'ok' ? 7 : kind === 'funnel' ? 11 : 5;
    const rnd = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
    const W = 300, Hh = 220, l = 20, r = 290, y0 = 100;
    let s = `<svg viewBox="0 0 ${W} ${Hh}" class="sv" role="img" aria-label="${cap}">`;
    s += `<line x1="${l}" y1="${y0}" x2="${r}" y2="${y0}" class="sv-dash"/><line x1="${l}" y1="15" x2="${l}" y2="185" class="sv-axis"/>`;
    for (let i = 0; i < 36; i++) {
      const x = i / 35, z = (rnd() + rnd() + rnd() - 1.5) * 2;
      const e = kind === 'ok' ? z * 22 : kind === 'funnel' ? z * (1 + 60 * x) : 260 * (x - 0.5) ** 2 - 30 + z * 7;
      s += `<circle cx="${(l + 10 + x * (r - l - 20)).toFixed(1)}" cy="${(y0 - Math.max(-80, Math.min(80, e))).toFixed(1)}" r="4.5" class="sv-dot"/>`;
    }
    return `${s}<text x="${(l + r) / 2}" y="${Hh - 6}" class="sv-txt ${kind === 'ok' ? 'sv-t-up' : 'sv-t-down'}">${cap}</text></svg>`;
  }

  // Sơ đồ tách biến động của một quan sát.
  const decomp = (() => {
    const f = frame({ W: 600, H: 320, l: 40, r: 580, t: 15, b: 290, x0: 0, x1: 10, y0: 0, y1: 10, label: 'Tách biến động một quan sát' });
    const b0 = 1, b1 = 0.8, xb = 5, yb = b0 + b1 * xb, xp = 6.5, yp = 8.6, yh = b0 + b1 * xp;
    let s = f.s;
    s += `<line x1="${f.X(0.3)}" y1="${f.Y(yb)}" x2="${f.X(9.8)}" y2="${f.Y(yb)}" class="sv-dash"/><text x="${f.X(0.4)}" y="${f.Y(yb) - 8}" class="sv-muted" text-anchor="start">Ȳ</text>`;
    s += `<line x1="${f.X(0.3)}" y1="${f.Y(b0 + b1 * 0.3)}" x2="${f.X(9.8)}" y2="${f.Y(b0 + b1 * 9.8)}" class="sv-curve"/><text x="${f.X(2)}" y="${f.Y(b0 + b1 * 2) - 12}" class="sv-txt">Ŷ</text>`;
    s += `<line x1="${f.X(xp) - 26}" y1="${f.Y(yb)}" x2="${f.X(xp) - 26}" y2="${f.Y(yp)}" class="sv-pv"/><text x="${f.X(xp) - 34}" y="${f.Y((yb + yp) / 2)}" class="sv-txt sv-t-pv" text-anchor="end">Y - Ȳ (tổng)</text>`;
    s += `<line x1="${f.X(xp)}" y1="${f.Y(yb)}" x2="${f.X(xp)}" y2="${f.Y(yh)}" class="sv-up"/><text x="${f.X(xp) + 10}" y="${f.Y((yb + yh) / 2) + 6}" class="sv-txt sv-t-up" text-anchor="start">Ŷ - Ȳ (giải thích)</text>`;
    s += `<line x1="${f.X(xp)}" y1="${f.Y(yh)}" x2="${f.X(xp)}" y2="${f.Y(yp)}" class="sv-down"/><text x="${f.X(xp) + 10}" y="${f.Y((yh + yp) / 2) + 6}" class="sv-txt sv-t-down" text-anchor="start">Y - Ŷ (phần dư)</text>`;
    s += `<circle cx="${f.X(xp)}" cy="${f.Y(yp)}" r="7" class="sv-dot"/>`;
    return `${s}</svg>`;
  })();

  // Phân phối t (df = 8) với vùng bác bỏ hai đuôi.
  const tDist = (() => {
    const df = 8, tc = 2.306;
    const pdf = x => (1 + (x * x) / df) ** (-(df + 1) / 2);
    let area = 0; for (let x = -30; x <= 30; x += 0.01) area += pdf(x) * 0.01;
    const f = frame({ W: 600, H: 260, l: 30, r: 570, t: 15, b: 220, x0: -4.5, x1: 4.5, y0: 0, y1: 0.42, xt: [-4, -2.306, 0, 2.306, 4], xf: v => fmt(v, v % 1 ? 3 : 0), label: 'Phân phối t với 8 bậc tự do' });
    let pts = '', lt = '', rt = '';
    for (let x = -4.5; x <= 4.501; x += 0.05) {
      const p = `${f.X(x).toFixed(1)},${f.Y(pdf(x) / area).toFixed(1)} `;
      pts += p; if (x <= -tc) lt += p; if (x >= tc) rt += p;
    }
    let s = f.s;
    s += `<polygon points="${f.X(-4.5)},${f.Y(0)} ${lt}${f.X(-tc)},${f.Y(0)}" class="sv-dot" opacity="0.35"/><polygon points="${f.X(tc)},${f.Y(0)} ${rt}${f.X(4.5)},${f.Y(0)}" class="sv-dot" opacity="0.35"/>`;
    s += `<polyline points="${pts}" class="sv-curve"/>`;
    s += `<text x="${f.X(-3.4)}" y="${f.Y(0.1)}" class="sv-txt sv-t-down">bác bỏ 2,5%</text><text x="${f.X(3.4)}" y="${f.Y(0.1)}" class="sv-txt sv-t-down">bác bỏ 2,5%</text>`;
    s += `<text x="${f.X(4.4)}" y="${f.Y(0.3)}" class="sv-txt sv-t-up" text-anchor="end">t = 9,26 → nằm rất xa bên phải</text>`;
    return `${s}</svg>`;
  })();

  // Đường hồi quy và khoảng dự báo 95% cho dữ liệu giờ học.
  const band = (() => {
    const tc = 2.306;
    const f = frame({ W: 600, H: 330, l: 50, r: 585, t: 15, b: 290, x0: 0, x1: 200, y0: 4, y1: 11, xt: [0, 50, 100, 150, 200], yt: [4, 6, 8, 10], xl: 'Giờ ôn thi (X)', label: 'Khoảng dự báo rộng dần khi X xa trung bình' });
    const sf = x => H.see * Math.sqrt(1 + 1 / H.n + (x - H.xb) ** 2 / H.sxx);
    let up = '', lo = '', mid = '';
    for (let x = 10; x <= 200.01; x += 5) {
      const y = H.b0 + H.b1 * x;
      up += `${f.X(x).toFixed(1)},${f.Y(y + tc * sf(x)).toFixed(1)} `; lo += `${f.X(x).toFixed(1)},${f.Y(y - tc * sf(x)).toFixed(1)} `; mid += `${f.X(x).toFixed(1)},${f.Y(y).toFixed(1)} `;
    }
    let s = f.s;
    s += `<rect x="${f.X(150)}" y="15" width="${f.X(200) - f.X(150)}" height="275" class="sv-panel" opacity="0.7"/><text x="${f.X(175)}" y="275" class="sv-muted">ngoại suy</text>`;
    s += `<polyline points="${up}" class="sv-dash" fill="none"/><polyline points="${lo}" class="sv-dash" fill="none"/><polyline points="${mid}" class="sv-curve"/>`;
    HX.forEach((x, i) => { s += `<circle cx="${f.X(x)}" cy="${f.Y(HY[i])}" r="5" class="sv-dot"/>`; });
    const y100 = H.b0 + H.b1 * 100;
    s += `<line x1="${f.X(100)}" y1="${f.Y(y100 - tc * sf(100))}" x2="${f.X(100)}" y2="${f.Y(y100 + tc * sf(100))}" class="sv-pv"/>`;
    s += `<text x="${f.X(100) + 10}" y="${f.Y(y100 - tc * sf(100)) + 22}" class="sv-txt sv-t-pv" text-anchor="start">X = 100: 6,67 đến 8,16</text>`;
    return `${s}</svg>`;
  })();

  // Ba dạng hàm: hình dạng quan hệ giữa X và Y ở thang gốc.
  function form(kind) {
    const fn = { loglin: x => Math.exp(0.35 * x) / Math.exp(3.5) * 10, linlog: x => 2.2 * Math.log(x) + 4.9, loglog: x => 3.2 * x ** 0.5 }[kind];
    const f = frame({ W: 300, H: 200, l: 20, r: 290, t: 10, b: 180, x0: 0, x1: 10, y0: 0, y1: 10.5, label: `Dạng ${kind}` });
    let pts = '';
    for (let x = 0.2; x <= 10.001; x += 0.2) pts += `${f.X(x).toFixed(1)},${f.Y(Math.max(0, fn(x))).toFixed(1)} `;
    return `${f.s}<polyline points="${pts}" class="sv-curve"/><text x="285" y="195" class="sv-muted" text-anchor="end">X</text><text x="28" y="24" class="sv-muted" text-anchor="start">Y</text></svg>`;
  }

  // Hồi quy CAPM: lợi suất vượt trội của cổ phiếu theo thị trường (dữ liệu minh họa).
  const capm = (() => {
    let seed = 4242;
    const rnd = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
    const nrm = () => Math.sqrt(-2 * Math.log(rnd())) * Math.cos(2 * Math.PI * rnd());
    const xs = [], ys = [];
    for (let i = 0; i < 48; i++) { const x = 0.7 + 4 * nrm(); xs.push(x); ys.push(0.15 + 1.5 * x + 3.2 * nrm()); }
    const R = ols(xs, ys);
    const f = frame({ W: 600, H: 330, l: 50, r: 585, t: 15, b: 290, x0: -12, x1: 12, y0: -20, y1: 20, xt: [-10, -5, 0, 5, 10], yt: [-20, -10, 0, 10, 20], xf: v => `${v}%`, yf: v => `${v}%`, xl: 'Lợi suất vượt trội thị trường Rm - Rf (tháng)', label: 'Hồi quy CAPM' });
    let s = f.s;
    s += `<line x1="${f.X(0)}" y1="15" x2="${f.X(0)}" y2="290" class="sv-dash"/>`;
    xs.forEach((x, i) => { if (Math.abs(x) < 12 && Math.abs(ys[i]) < 20) s += `<circle cx="${f.X(x).toFixed(1)}" cy="${f.Y(ys[i]).toFixed(1)}" r="4.5" class="sv-dot" opacity="0.7"/>`; });
    s += `<line x1="${f.X(-12)}" y1="${f.Y(R.b0 - 12 * R.b1)}" x2="${f.X(12)}" y2="${f.Y(R.b0 + 12 * R.b1)}" class="sv-down"/>`;
    s += `<circle cx="${f.X(0)}" cy="${f.Y(R.b0)}" r="7" class="sv-node up"/><text x="${f.X(0) + 14}" y="${f.Y(R.b0) + 26}" class="sv-txt sv-t-up" text-anchor="start">α = hệ số chặn</text>`;
    s += `<text x="${f.X(7)}" y="${f.Y(R.b0 + 7 * R.b1) - 18}" class="sv-txt sv-t-down" text-anchor="end">β = độ dốc</text>`;
    s += `<text x="${f.X(-11.5)}" y="35" class="sv-muted" text-anchor="start">Ri - Rf</text>`;
    return `${s}</svg>`;
  })();

  const slides = [
    S('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Quantitative Methods · QM-10</div>
      <h2>Applications of Simple<br>Linear Regression in Finance</h2>
      <p>Một đường thẳng - bốn câu hỏi: ước lượng, kiểm tra, dự báo, CAPM</p>
      <div class="sd-chips"><span>LOS 1 · OLS</span><span>LOS 2 · Giả định, ANOVA, kiểm định</span><span>LOS 3 · Dự báo, dạng hàm</span><span>LOS 4 · CAPM</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Hồi quy: dùng X để giải thích Y', `<div class="sd-big">Y<sub>i</sub> = b<sub>0</sub> + b<sub>1</sub>X<sub>i</sub> + ε<sub>i</sub></div>
      <div class="sd-cols3">
      <div class="sd-card acc"><b>Y - biến phụ thuộc</b><p>Biến cần giải thích</p><small>explained · endogenous · predicted</small></div>
      <div class="sd-card acc"><b>X - biến độc lập</b><p>Biến dùng để giải thích</p><small>explanatory · exogenous · predicting</small></div>
      <div class="sd-card"><b>b<sub>0</sub>, b<sub>1</sub>, ε</b><p>Hệ số chặn, độ dốc, sai số</p><small>Ước lượng: b̂<sub>0</sub>, b̂<sub>1</sub>, phần dư e = Y - Ŷ</small></div></div>`),

    S('Đường thẳng khớp nhất với dữ liệu', `<div class="sd-cols2 wide-left"><div>${hoursScatter()}</div>
      <div><div class="sd-rule up">Độ dốc 0,0249 <b>+1 giờ → +0,025 điểm</b></div><div class="sd-rule">Hệ số chặn 4,918 <b>X = 0: ngoài dữ liệu</b></div><div class="sd-rule down">Vạch đỏ = phần dư <b>OLS làm Σe² nhỏ nhất</b></div>
      <p class="sd-note">10 học viên: giờ ôn (30 đến 150) và điểm thi. Đường luôn đi qua điểm trung bình (X̄, Ȳ).</p></div></div>`),

    S('Công thức OLS', `<div class="sd-cols2">
      <div><div class="sd-f">b̂<sub>1</sub> = ${frac('Cov(X, Y)', 'Var(X)')} = r × ${frac('s<sub>Y</sub>', 's<sub>X</sub>')}</div><div class="sd-f">b̂<sub>0</sub> = Ȳ - b̂<sub>1</sub>X̄</div></div>
      <div class="sd-steps"><span>① X̄ = 85,5 · Ȳ = 7,05</span><span>② Σ(X - X̄)(Y - Ȳ) = 322,25 · Σ(X - X̄)² = 12.922,5</span><span>③ b̂<sub>1</sub> = 322,25 / 12.922,5 = <b>0,0249</b></span><span>④ b̂<sub>0</sub> = 7,05 - 0,0249 × 85,5 = <b>4,918</b></span></div></div>
      <p class="sd-note">Bẫy: b̂<sub>1</sub> là Cov chia Var(<b>X</b>), không phải Var(Y); và b̂<sub>0</sub> phải trừ b̂<sub>1</sub>X̄, không phải trừ X̄.</p>`),

    S('BA II Plus: DATA và STAT', `<div class="sd-steps"><span>① <kbd>2ND</kbd> <kbd>7</kbd> (DATA) → <kbd>2ND</kbd> <kbd>CE/C</kbd> xóa dữ liệu cũ</span>
      <span>② X01 = 120 <kbd>ENTER</kbd> <kbd>↓</kbd> Y01 = 8 <kbd>ENTER</kbd> <kbd>↓</kbd> ... đủ 10 cặp</span>
      <span>③ <kbd>2ND</kbd> <kbd>8</kbd> (STAT) → <kbd>2ND</kbd> <kbd>ENTER</kbd> đến khi hiện <b>LIN</b></span>
      <span>④ <kbd>↓</kbd> đọc: a = 4.9179 · b = 0.0249 · r = 0.9564</span>
      <span>⑤ X' = 100 <kbd>ENTER</kbd> <kbd>↓</kbd> Y' <kbd>CPT</kbd> → 7.4116 (giá trị dự báo)</span></div>
      <p class="sd-note">Trên máy: <b>a là hệ số chặn, b là độ dốc</b>. Đừng đọc nhầm thành b<sub>0</sub>, b<sub>1</sub> theo thứ tự chữ cái.</p>`),

    S('Bốn giả định của mô hình', `<div class="sd-grid4">
      <div class="sd-card acc"><b>1. Linearity</b><p>Quan hệ Y - X tuyến tính (theo tham số).</p><small>Vi phạm: quan hệ cong → đổi dạng hàm</small></div>
      <div class="sd-card acc"><b>2. Homoskedasticity</b><p>Phương sai sai số như nhau mọi quan sát.</p><small>Vi phạm: heteroskedasticity, phần dư hình phễu</small></div>
      <div class="sd-card acc"><b>3. Independence</b><p>Các cặp (X, Y) không tương quan với nhau.</p><small>Vi phạm: mùa vụ, quán tính trong chuỗi thời gian</small></div>
      <div class="sd-card acc"><b>4. Normality</b><p>Sai số phân phối chuẩn.</p><small>Bẫy: chuẩn là của <b>sai số</b>, không phải của X hay Y</small></div></div>`),

    S('Đọc biểu đồ phần dư', `<div class="sd-cols3">
      <div>${resid('ok', 'Dải đều quanh 0: ổn')}</div>
      <div>${resid('funnel', 'Hình phễu: heteroskedasticity')}</div>
      <div>${resid('curve', 'Hình cong: sai dạng hàm')}</div></div>
      <p class="sd-note">Heteroskedasticity: hệ số không chệch nhưng <b>sai số chuẩn sai</b> → t-test, F-test không tin được. Phần dư theo thời gian có chu kỳ → vi phạm <b>independence</b>.</p>`),

    S('SST = SSR + SSE', `<div class="sd-cols2 wide-left"><div>${decomp}</div>
      <div><div class="sd-tbl"><div><span>SST - tổng</span><span>Σ(Y - Ȳ)²</span></div><div><span>SSR - giải thích</span><span>Σ(Ŷ - Ȳ)²</span></div><div><span>SSE - phần dư</span><span>Σ(Y - Ŷ)²</span></div></div>
      <p class="sd-note">Một số tài liệu gọi SSR là <b>RSS</b> (regression sum of squares). Đừng nhầm với "residual".</p></div></div>`),

    S('Bảng ANOVA: dữ liệu giờ học', `<div class="sd-cols2">
      <div><div class="sd-tbl"><div><span>Hồi quy · df = 1</span><span>SSR = 8,0360</span></div><div><span>Phần dư · df = n - 2 = 8</span><span>SSE = 0,7490</span></div><div><span>Tổng · df = 9</span><span>SST = 8,7850</span></div><div><span>MSE = SSE / 8</span><span>0,0936</span></div></div></div>
      <div><div class="sd-f sm">R² = ${frac('SSR', 'SST')} = ${frac('8,036', '8,785')} = <b>91,47%</b></div><div class="sd-f sm">SEE = √MSE = √0,0936 = <b>0,306</b></div>
      <p class="sd-note">Hồi quy đơn: R² = r² (0,9564² = 0,9147). SEE đo bằng <b>đơn vị của Y</b> (điểm thi).</p></div></div>`),

    S('F-test: mô hình có ý nghĩa không?', `<div class="sd-f">F = ${frac('MSR', 'MSE')} = ${frac('SSR / k', 'SSE / (n - k - 1)')} = ${frac('8,036 / 1', '0,749 / 8')} = <b>85,83</b></div>
      <div class="sd-cols3">
      <div class="sd-card"><b>Giả thuyết</b><p>H<sub>0</sub>: b<sub>1</sub> = 0<br>H<sub>a</sub>: b<sub>1</sub> ≠ 0</p></div>
      <div class="sd-card"><b>Luôn một đuôi phải</b><p>df = (k, n - k - 1) = (1, 8)<br>F<sub>c</sub> 5% = 5,32</p></div>
      <div class="sd-card acc"><b>Kết luận</b><p>85,83 &gt; 5,32 → bác bỏ H<sub>0</sub></p><small>Hồi quy đơn: F = t² của b̂<sub>1</sub></small></div></div>`),

    S('t-test cho hệ số độ dốc', `<div class="sd-cols2 wide-left"><div>${tDist}</div>
      <div><div class="sd-f sm">t = ${frac('b̂<sub>1</sub> - B<sub>1</sub>', 's<sub>b̂1</sub>')} &nbsp; s<sub>b̂1</sub> = ${frac('SEE', '√Σ(X - X̄)²')}</div>
      <div class="sd-steps"><span>s<sub>b̂1</sub> = 0,306 / √12.922,5 = 0,00269</span><span>B<sub>1</sub> = 0: t = <b>9,26</b> &gt; 2,306 → bác bỏ</span><span>B<sub>1</sub> = 0,02: t = <b>1,83</b> → không bác bỏ</span></div>
      <p class="sd-note">df = n - 2 = 8. Kiểm tra: 9,26² = 85,83 = F.</p></div></div>`),

    S('Dự báo và khoảng dự báo', `<div class="sd-cols2 wide-left"><div>${band}</div>
      <div><div class="sd-f sm">Ŷ ± t<sub>c</sub> × s<sub>f</sub></div><div class="sd-f sm">s<sub>f</sub><sup>2</sup> = SEE<sup>2</sup>[1 + ${frac('1', 'n')} + ${frac('(X - X̄)<sup>2</sup>', '(n - 1)s<sub>X</sub><sup>2</sup>')}]</div>
      <p class="sd-note">X = 100: Ŷ = 7,41; s<sub>f</sub> = 0,323 &gt; SEE = 0,306; khoảng 95% = <b>6,67 đến 8,16</b>. Càng xa X̄ càng rộng; ngoài vùng dữ liệu là <b>ngoại suy</b>.</p></div></div>`),

    S('Ba dạng hàm log', `<div class="sd-cols3">
      <div class="sd-card"><b>Log-lin</b><div class="sd-f sm">ln Y = b<sub>0</sub> + b<sub>1</sub>X</div>${form('loglin')}<p>X +1 đơn vị → Y ≈ +b<sub>1</sub> × 100%</p></div>
      <div class="sd-card"><b>Lin-log</b><div class="sd-f sm">Y = b<sub>0</sub> + b<sub>1</sub>ln X</div>${form('linlog')}<p>X +1% → Y ≈ +b<sub>1</sub>/100 đơn vị</p></div>
      <div class="sd-card acc"><b>Log-log</b><div class="sd-f sm">ln Y = b<sub>0</sub> + b<sub>1</sub>ln X</div>${form('loglog')}<p>X +1% → Y ≈ +b<sub>1</sub>% (độ co giãn)</p></div></div>
      <p class="sd-note">ln Y = 1,8 + 0,06X, X = 10 → Ŷ = e<sup>2,4</sup> = <b>11,02</b> (nhớ lấy e mũ). Chỉ so R² giữa các mô hình có <b>cùng biến Y</b>.</p>`),

    S('CAPM ước lượng bằng hồi quy', `<div class="sd-cols2 wide-left"><div>${capm}</div>
      <div><div class="sd-f sm">R<sub>i</sub> - R<sub>f</sub> = α + β(R<sub>m</sub> - R<sub>f</sub>) + ε</div>
      <div class="sd-rule up">Độ dốc <b>β: rủi ro hệ thống</b></div><div class="sd-rule">Hệ số chặn <b>α: lợi suất bất thường</b></div>
      <div class="sd-f sm">β̂ = ${frac('Cov(R<sub>i</sub>, R<sub>m</sub>)', 'Var(R<sub>m</sub>)')} = ρ${frac('σ<sub>i</sub>', 'σ<sub>m</sub>')}</div></div></div>`),

    S('CAPM: kiểm định beta và alpha', `<div class="sd-cols2">
      <div class="sd-steps"><span>Cov = 0,0024 · Var(R<sub>m</sub> - R<sub>f</sub>) = 0,0016 → β̂ = <b>1,50</b></span><span>Trung bình vượt trội: cổ phiếu 1,2% · thị trường 0,7%</span><span>α̂ = 1,2% - 1,5 × 0,7% = <b>0,15%</b>/tháng</span></div>
      <div><div class="sd-rule up"><span>H<sub>0</sub>: β = 1 · t = (1,5 - 1)/0,20 = 2,5</span><b>Bác bỏ</b></div><div class="sd-rule"><span>H<sub>0</sub>: α = 0 · t = 0,15/0,25 = 0,6</span><b>Không bác bỏ</b></div>
      <p class="sd-note">n = 60, t<sub>c</sub> ≈ 2,00. "Rủi ro khác thị trường?" → kiểm định với <b>B<sub>1</sub> = 1</b>, không phải 0.</p></div></div>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>b̂<sub>1</sub> = Cov/Var(X); b̂<sub>0</sub> = Ȳ - b̂<sub>1</sub>X̄</span><span>BA II Plus LIN: a chặn, b dốc</span>
      <span>Giả định chuẩn là của sai số</span><span>Phễu = heteroskedasticity</span>
      <span>R² = SSR/SST; SEE = √(SSE/(n - 2))</span><span>F = MSR/MSE, một đuôi; F = t²</span>
      <span>Khoảng dự báo dùng s<sub>f</sub> và t<sub>c</sub></span><span>Log-lin: % thay đổi; log-log: độ co giãn</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 10 câu, mục tiêu ≥ 7 câu đúng.</p>`),
  ];

  addDeck('QM-10', `Slide Simple Linear Regression - bản thiết kế riêng (${slides.length} slide)`, slides);
}());
