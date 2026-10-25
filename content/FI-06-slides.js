// Bộ slide tự thiết kế cho FI-06 Fixed-Income Bond Valuation: Prices and Yields.
(function () {
  const L = window.LESSONS && window.LESSONS['FI-06'];
  if (!L) return;
  const { slide, addDeck, frac, tl } = window.CFAH;
  const K = 'FI-06 · Prices and Yields';
  const S = (title, body, opt = {}) => slide(title, body, Object.assign({ kicker: K }, opt));
  const fmt = (x, d = 2) => x.toFixed(d).replace('.', ',');

  // Giá trái phiếu: coupon năm c (%), YTM năm y, n năm, m kỳ mỗi năm.
  const price = (c, y, n, m = 1) => { const r = y / m, C = c / m; let p = 0; for (let k = 1; k <= n * m; k++) p += C / (1 + r) ** k; return p + 100 / (1 + r) ** (n * m); };

  // Khung đồ thị chung. o: {xlo, xhi, ylo, yhi, xt, yt, xl, h}
  function frame(o) {
    const W = 600, H = o.h || 300, l = 62, r = 580, t = 20, b = H - 50;
    const xs = x => l + ((x - o.xlo) / (o.xhi - o.xlo)) * (r - l);
    const ys = y => b - ((y - o.ylo) / (o.yhi - o.ylo)) * (b - t);
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv" role="img" aria-label="${o.label}">`;
    o.yt.forEach(v => { s += `<line x1="${l}" y1="${ys(v)}" x2="${r}" y2="${ys(v)}" class="sv-grid"/><text x="${l - 8}" y="${ys(v) + 5}" class="sv-muted" text-anchor="end">${o.yf ? o.yf(v) : v}</text>`; });
    s += `<line x1="${l}" y1="${b}" x2="${r}" y2="${b}" class="sv-axis"/><line x1="${l}" y1="${t}" x2="${l}" y2="${b}" class="sv-axis"/>`;
    o.xt.forEach(v => { s += `<text x="${xs(v)}" y="${b + 22}" class="sv-muted">${o.xf ? o.xf(v) : v}</text>`; });
    s += `<text x="${(l + r) / 2}" y="${H - 4}" class="sv-muted">${o.xl}</text>`;
    return { s, xs, ys };
  }
  const poly = (pts, cls, style = '') => `<polyline points="${pts.map(p => `${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ')}" class="${cls}" style="fill:none;${style}"/>`;

  // Đường giá - YTM của trái phiếu 5 năm coupon 6% hằng năm.
  function priceYield() {
    const f = frame({ xlo: 2, xhi: 10, ylo: 80, yhi: 122, xt: [2, 4, 6, 8, 10], yt: [80, 90, 100, 110, 120], xf: v => `${v}%`, xl: 'YTM (coupon 6%, 5 năm, trả hằng năm)', label: 'Đường giá theo YTM' });
    const pts = []; for (let y = 2; y <= 10.001; y += 0.1) pts.push([f.xs(y), f.ys(price(6, y / 100, 5))]);
    let s = f.s + poly(pts, 'sv-curve');
    [[5, 'sv-t-up'], [6, ''], [7, 'sv-t-down']].forEach(([y, c]) => { const p = price(6, y / 100, 5); s += `<circle cx="${f.xs(y)}" cy="${f.ys(p)}" r="6" class="sv-dot"/><text x="${f.xs(y) + 10}" y="${f.ys(p) - 10}" class="sv-txt ${c}" text-anchor="start">${fmt(p)}</text>`; });
    return `${s}</svg>`;
  }

  // Full price và flat price trong 3 năm (coupon 6% nửa năm, YTM 5%).
  function sawtooth() {
    const f = frame({ xlo: 0, xhi: 3, ylo: 99, yhi: 106, xt: [0, 0.5, 1, 1.5, 2, 2.5, 3], yt: [99, 101, 103, 105], xf: v => fmt(v, 1).replace(',0', ''), xl: 'Thời gian (năm) - coupon 6% nửa năm, YTM 5%', label: 'Full price và flat price', h: 280 });
    const full = [], flat = [];
    for (let i = 0; i <= 600; i++) {
      const tau = (i / 600) * 3, j = Math.min(5, Math.floor(tau * 2)), fr = tau * 2 - j;
      if (i === 600) { full.push([f.xs(3), f.ys(103)]); flat.push([f.xs(3), f.ys(100)]); break; }
      const pv = price(6, 0.05, (6 - j) / 2, 2), fu = pv * 1.025 ** fr;
      if (fr === 0 && j > 0) full.push([f.xs(tau), f.ys(pv + 3)]);
      full.push([f.xs(tau), f.ys(fu)]); flat.push([f.xs(tau), f.ys(fu - 3 * fr)]);
    }
    let s = f.s + poly(full, 'sv-down', 'stroke-width:2.5') + poly(flat, 'sv-curve');
    s += `<text x="${f.xs(0.25)}" y="${f.ys(105.6)}" class="sv-txt sv-t-down">Full (dirty)</text><text x="${f.xs(2.2)}" y="${f.ys(100.2)}" class="sv-txt" style="fill:var(--accent)">Flat (clean)</text>`;
    return `${s}</svg>`;
  }

  // Giá kéo về mệnh giá với YTM 6%.
  function pullPar() {
    const f = frame({ xlo: 0, xhi: 5, ylo: 88, yhi: 112, xt: [0, 1, 2, 3, 4, 5], yt: [90, 100, 110], xl: 'Số năm đã trôi qua (5 năm, YTM giữ 6%)', label: 'Giá kéo về mệnh giá' });
    const line = c => [0, 1, 2, 3, 4, 5].map(t => [f.xs(t), f.ys(t === 5 ? 100 : price(c, 0.06, 5 - t))]);
    let s = f.s + `<line x1="${f.xs(0)}" y1="${f.ys(100)}" x2="${f.xs(5)}" y2="${f.ys(100)}" class="sv-dash"/>`;
    s += poly(line(8), 'sv-up') + poly(line(4), 'sv-down');
    [8, 4].forEach(c => [0, 1, 2, 3, 4].forEach(t => { const p = price(c, 0.06, 5 - t); s += `<circle cx="${f.xs(t)}" cy="${f.ys(p)}" r="4" class="sv-dot"/>`; }));
    s += `<text x="${f.xs(0.1)}" y="${f.ys(110.3)}" class="sv-txt sv-t-up" text-anchor="start">Coupon 8%: ${fmt(price(8, 0.06, 5))}</text><text x="${f.xs(0.1)}" y="${f.ys(89)}" class="sv-txt sv-t-down" text-anchor="start">Coupon 4%: ${fmt(price(4, 0.06, 5))}</text>`;
    return `${s}</svg>`;
  }

  // Nội suy YTM trong matrix pricing (ví dụ 6.1).
  function matrix() {
    const f = frame({ xlo: 0, xhi: 6, ylo: 3.8, yhi: 4.4, xt: [0, 1, 2, 3, 4, 5, 6], yt: [3.8, 4.0, 4.2, 4.4], yf: v => `${fmt(v, 1)}%`, xl: 'Kỳ hạn (năm)', label: 'Nội suy lợi suất' });
    const A = [2, 3.9405], B = [5, 4.2439], T = [4, 3.9405 + (4.2439 - 3.9405) * 2 / 3];
    let s = f.s + `<line x1="${f.xs(A[0])}" y1="${f.ys(A[1])}" x2="${f.xs(B[0])}" y2="${f.ys(B[1])}" class="sv-dash"/>`;
    s += `<line x1="${f.xs(4)}" y1="${f.ys(3.8)}" x2="${f.xs(4)}" y2="${f.ys(T[1])}" class="sv-pv"/>`;
    [[A, 'A: 3,94%'], [B, 'B: 4,24%']].forEach(([p, lab]) => { s += `<circle cx="${f.xs(p[0])}" cy="${f.ys(p[1])}" r="7" class="sv-dot"/><text x="${f.xs(p[0])}" y="${f.ys(p[1]) - 14}" class="sv-txt">${lab}</text>`; });
    s += `<circle cx="${f.xs(4)}" cy="${f.ys(T[1])}" r="7" class="sv-dot" style="fill:var(--t-mock)"/><text x="${f.xs(4) - 12}" y="${f.ys(T[1]) - 12}" class="sv-txt sv-t-pv" text-anchor="end">4 năm: ${fmt(T[1], 2)}%</text>`;
    return `${s}</svg>`;
  }

  // Phần trăm thay đổi giá khi YTM 5% → 6% (10 năm).
  function sensBars() {
    const rows = [['Zero-coupon', price(0, 0.06, 10) / price(0, 0.05, 10) - 1], ['Coupon 4%', price(4, 0.06, 10) / price(4, 0.05, 10) - 1], ['Coupon 8%', price(8, 0.06, 10) / price(8, 0.05, 10) - 1]];
    const mats = [['5 năm', 5], ['10 năm', 10], ['30 năm', 30]].map(([l, n]) => [l, price(5, 0.06, n) / 100 - 1]);
    const bar = ([lab, v]) => `<div class="sd-bar"><span class="sd-bar-l">${lab}</span><span class="sd-bar-t"><i style="width:${(-v / 0.14) * 100}%"></i></span><b>${fmt(v * 100)}%</b></div>`;
    return `<div class="sd-cols2"><div><p class="sd-cap">10 năm, YTM 5% → 6%: coupon càng thấp càng nhạy</p><div class="sd-bars">${rows.map(bar).join('')}</div></div>
      <div><p class="sd-cap">Coupon 5%, YTM 5% → 6%: kỳ hạn càng dài càng nhạy</p><div class="sd-bars">${mats.map(bar).join('')}</div></div></div>`;
  }

  const slides = [
    S('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Fixed Income · FI-06</div>
      <h2>Fixed-Income Bond Valuation:<br>Prices and Yields</h2>
      <p>Tính giá, đọc quan hệ giá - lợi suất, định giá khi không có giá</p>
      <div class="sd-chips"><span>LOS 1 · Giá trên và giữa ngày coupon</span><span>LOS 2 · Giá, coupon, kỳ hạn, YTM</span><span>LOS 3 · Matrix pricing</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Ba câu hỏi của buổi học', `<div class="sd-cols3">
      <div class="sd-card"><div class="sd-n">1</div><b>Giá bao nhiêu?</b><p>Vào ngày coupon và giữa hai kỳ coupon.</p><small>Full, flat, accrued interest</small></div>
      <div class="sd-card"><div class="sd-n">2</div><b>Giá phản ứng ra sao?</b><p>Với YTM, coupon, kỳ hạn, thời gian trôi.</p><small>5 tính chất + pull to par</small></div>
      <div class="sd-card"><div class="sd-n">3</div><b>Không có giá thì sao?</b><p>Mượn lợi suất của trái phiếu tương đương.</p><small>Matrix pricing</small></div></div>`),

    S('Công thức giá theo YTM', `<div class="sd-f">PV = ${frac('C', '(1 + r)')} + ${frac('C', '(1 + r)<sup>2</sup>')} + ... + ${frac('C + 100', '(1 + r)<sup>N</sup>')}</div>
      <div class="sd-tbl grid"><div class="head"><span>Coupon 6%, 5 năm</span><span>YTM 5%</span><span>YTM 6%</span><span>YTM 7%</span></div>
      <div><span>Hằng năm (N = 5, PMT = 6)</span><span>104,33</span><span>100,00</span><span>95,90</span></div>
      <div><span>Nửa năm (N = 10, PMT = 3, I/Y = YTM/2)</span><span>104,38</span><span>100,00</span><span>95,84</span></div></div>
      <p class="sd-note">Nửa năm: chia coupon và YTM cho 2, nhân số năm với 2.</p>`),

    S('Đường giá - YTM: dốc xuống và lồi', `<div class="sd-cols2 wide-left"><div>${priceYield()}</div>
      <div><div class="sd-rule up">YTM 6% → 5% <b>+4,33%</b></div><div class="sd-rule down">YTM 6% → 7% <b>-4,10%</b></div>
      <p class="sd-note">Cùng 100 bps, giá <b>tăng nhiều hơn giảm</b>: đó là độ lồi (convexity).</p>
      <p class="sd-note">Coupon &gt; YTM → premium · = → par · &lt; → discount.</p></div></div>`),

    S('Bấm máy: tìm YTM từ giá', `${tl(10, [{ t: 0, label: '-105', cls: 'down', above: true }, { t: 1, label: '5' }, { t: 2, label: '5' }, { t: 5, label: '5' }, { t: 9, label: '5' }, { t: 10, label: '105' }], { h: 140, label: 'Trái phiếu 5 năm coupon 10% nửa năm, giá 105' })}
      <div class="sd-keys"><span>10 <kbd>N</kbd></span><span>105 <kbd>+/-</kbd> <kbd>PV</kbd></span><span>5 <kbd>PMT</kbd></span><span>100 <kbd>FV</kbd></span><span><kbd>CPT</kbd> <kbd>I/Y</kbd> = 4,3721</span><span>× 2 = <b>8,74%</b></span></div>
      <p class="sd-note">Bẫy: chọn 4,37% vì quên nhân 2. Kiểm tra nhanh: giá &gt; 100 nên YTM &lt; coupon 10%.</p>`),

    S('Định giá bằng spot rates', `${tl(3, [{ t: 0, label: 'PV = 100,18', cls: 'pv' }, { t: 1, label: '5 / 1,03' }, { t: 2, label: '5 / 1,04²' }, { t: 3, label: '105 / 1,05³' }], { h: 140, label: 'Mỗi dòng tiền một spot rate' })}
      <div class="sd-keys"><span>4,8544</span><span>+ 4,6228</span><span>+ 90,7029</span><span>= <b>100,18</b></span><span>YTM tương ứng = <b>4,93%</b></span></div>
      <p class="sd-note">Mỗi dòng tiền là một zero-coupon riêng → chiết khấu bằng spot rate của kỳ hạn đó. Chi tiết ở FI-09.</p>`),

    S('Giữa hai kỳ coupon: full và flat', `<div class="sd-cols2 wide-left"><div>${sawtooth()}</div>
      <div><div class="sd-f sm">Full = PV × (1 + r)<sup>t/T</sup></div><div class="sd-f sm">AI = t/T × C</div><div class="sd-f sm">Flat = Full - AI</div>
      <p class="sd-note">Full nhảy xuống mỗi lần trả coupon; flat gần như phẳng → thị trường <b>yết flat price</b>.</p></div></div>`),

    S('Đếm ngày: actual/actual và 30/360', `<div class="sd-cols2">
      <div class="sd-card"><b>Actual/actual · chính phủ</b><p>Đếm ngày lịch thực tế.</p><p>1/3 → 18/6/2026: <b>109</b> ngày, cả kỳ 365</p><p>AI = 109/365 × 5 = <b>1,4932</b></p></div>
      <div class="sd-card acc"><b>30/360 · doanh nghiệp</b><p>Mỗi tháng 30 ngày.</p><p>(6 - 3) × 30 + (18 - 1) = <b>107</b> ngày</p><p>AI = 107/360 × 5 = <b>1,4861</b></p></div></div>
      <p class="sd-note">Coupon 5% trả hằng năm vào 1/3, mệnh giá 100.</p>`),

    S('Năm bước tính full, AI, flat', `<div class="sd-steps">
      <span>① Đếm ngày: t = 1/4 → 20/6 = 80; T = 1/4 → 1/10 = 183</span>
      <span>② PV tại 1/4: N = 6, I/Y = 2,5, PMT = 3, FV = 100 → <b>102,7541</b></span>
      <span>③ Full = 102,7541 × 1,025<sup>80/183</sup> = <b>103,8693</b></span>
      <span>④ AI = 80/183 × 3 = <b>1,3115</b></span>
      <span>⑤ Flat = 103,8693 - 1,3115 = <b>102,5578</b></span></div>
      <p class="sd-note">Coupon 6% nửa năm (1/4, 1/10), đáo hạn 1/4/2029, YTM 5%, actual/actual.</p>`),

    S('BA II Plus: BOND worksheet', `<div class="sd-keys"><span><kbd>2ND</kbd> <kbd>9</kbd> <kbd>2ND</kbd> <kbd>CE/C</kbd></span><span>SDT = 6.2026</span><span>CPN = 6</span><span>RDT = 4.0129</span><span>RV = 100</span><span>ACT</span><span>2/Y</span><span>YLD = 5</span></div>
      <div class="sd-cols2"><div class="sd-rule up">PRI <kbd>CPT</kbd> <b>102,5578</b></div><div class="sd-rule">AI <b>1,3115</b></div></div>
      <p class="sd-note">Ngày nhập dạng <b>MM.DDYY</b>, mỗi ô bấm <kbd>ENTER</kbd> rồi <kbd>↓</kbd>. Đổi ACT/360 hay 2/Y/1/Y bằng <kbd>2ND</kbd> <kbd>SET</kbd>. PRI là <b>flat</b> → full = PRI + AI = 103,8693.</p>`),

    S('Coupon và kỳ hạn quyết định độ nhạy', `${sensBars()}
      <p class="sd-note">Coupon thấp hơn, kỳ hạn dài hơn → giá biến động theo phần trăm nhiều hơn. Đo chính xác bằng duration (FI-10, FI-11).</p>`),

    S('YTM không đổi: giá kéo về 100', `<div class="sd-cols2 wide-left"><div>${pullPar()}</div>
      <div><div class="sd-rule up">Premium <b>giảm dần</b></div><div class="sd-rule down">Discount <b>tăng dần</b></div>
      <p class="sd-note">Ngày đáo hạn mọi trái phiếu đều trị giá 100 (pull to par).</p></div></div>`),

    S('Matrix pricing: nội suy lợi suất', `<div class="sd-cols2 wide-left"><div>${matrix()}</div>
      <div class="sd-steps"><span>① YTM từ giá: A (2 năm, 102) và B (5 năm, 94,50)</span><span>② Nội suy 4 năm: <b>4,1428%</b></span><span>③ Trái phiếu 4 năm coupon 4% → <b>99,48</b></span></div></div>
      <p class="sd-note">Nội suy <b>lợi suất</b> (hoặc spread), không nội suy giá. Đợt phát hành mới: spread 7 năm ≈ 1,20% + 2/5 × 0,40% = 1,36%.</p>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>Nửa năm: C/2, YTM/2, N × 2</span><span>Tìm YTM nửa năm: nhân I/Y với 2</span>
      <span>Spot rate riêng cho từng dòng tiền</span><span>Full = PV × (1 + r)<sup>t/T</sup></span>
      <span>AI dùng coupon mỗi kỳ; flat = full - AI</span><span>Chính phủ actual/actual, doanh nghiệp 30/360</span>
      <span>Coupon thấp, kỳ hạn dài → nhạy hơn</span><span>Matrix: nội suy YTM, không nội suy giá</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 10 câu, mục tiêu ≥ 7 câu đúng.</p>`),
  ];

  addDeck('FI-06', `Slide Prices and Yields - bản thiết kế riêng (${slides.length} slide)`, slides);
}());
