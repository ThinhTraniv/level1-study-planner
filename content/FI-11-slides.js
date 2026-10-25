// Bộ slide tự thiết kế cho FI-11 Yield-Based Bond Duration Measures and Properties.
(function () {
  const L = window.LESSONS && window.LESSONS['FI-11'];
  if (!L) return;
  const { slide, addDeck, frac } = window.CFAH;
  const K = 'FI-11 · Duration Measures';
  const S = (title, body, opt = {}) => slide(title, body, Object.assign({ kicker: K }, opt));
  const fmt = (x, d = 2) => x.toFixed(d).replace('.', ',');

  // Giá và Macaulay duration của trái phiếu trả lãi năm (coupon c trên 100, N năm, YTM y).
  const price = (c, N, y) => { let p = 0; for (let k = 1; k <= N; k++) p += c / (1 + y) ** k; return p + 100 / (1 + y) ** N; };
  const macD = (c, N, y) => { let s = 0; for (let k = 1; k <= N; k++) s += (k * c) / (1 + y) ** k; return (s + (N * 100) / (1 + y) ** N) / price(c, N, y); };

  // Đường giá - lợi suất của trái phiếu 5 năm coupon 6% và tiếp tuyến tại YTM 7% (độ dốc = -ModDur × giá).
  function tangent() {
    const W = 600, H = 300, l = 60, r = 585, t = 16, b = 250, x0 = 2, x1 = 12, lo = 70, hi = 125;
    const xs = y => l + ((y - x0) / (x1 - x0)) * (r - l), ys = p => b - ((p - lo) / (hi - lo)) * (b - t);
    const P0 = price(6, 5, 0.07), md = macD(6, 5, 0.07) / 1.07;
    let pts = '';
    for (let y = x0; y <= x1 + 0.001; y += 0.1) pts += `${xs(y).toFixed(1)},${ys(price(6, 5, y / 100)).toFixed(1)} `;
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv" role="img" aria-label="Duration là độ dốc của tiếp tuyến">`;
    [80, 100, 120].forEach(p => { s += `<line x1="${l}" y1="${ys(p)}" x2="${r}" y2="${ys(p)}" class="sv-grid"/><text x="${l - 8}" y="${ys(p) + 5}" class="sv-muted" text-anchor="end">${p}</text>`; });
    [2, 4, 6, 8, 10, 12].forEach(y => { s += `<text x="${xs(y)}" y="${b + 22}" class="sv-muted">${y}%</text>`; });
    const tl = y => P0 * (1 - md * (y - 7) / 100);
    s += `<polyline points="${pts}" class="sv-curve"/>`;
    s += `<line x1="${xs(2.5)}" y1="${ys(tl(2.5))}" x2="${xs(11.5)}" y2="${ys(tl(11.5))}" class="sv-down"/>`;
    s += `<circle cx="${xs(7)}" cy="${ys(P0)}" r="6" class="sv-dot"/><text x="${xs(7) + 12}" y="${ys(P0) - 10}" class="sv-txt" text-anchor="start">95,90 tại 7%</text>`;
    s += `<text x="${xs(11.5)}" y="${ys(tl(11.5)) - 12}" class="sv-txt sv-t-down" text-anchor="end">tiếp tuyến (duration)</text>`;
    s += `<text x="${xs(3)}" y="${ys(price(6, 5, 0.03)) - 12}" class="sv-txt" text-anchor="start">giá thực</text>`;
    s += `<text x="${(l + r) / 2}" y="${H - 4}" class="sv-muted">YTM</text>`;
    return `${s}</svg>`;
  }

  // Duration theo kỳ hạn: zero-coupon, coupon 6% và coupon 3% chiết khấu sâu ở YTM 10%.
  function maturity() {
    const W = 600, H = 300, l = 56, r = 585, t = 16, b = 250, maxN = 50, hi = 20;
    const xs = n => l + (n / maxN) * (r - l), ys = d => b - (d / hi) * (b - t);
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv" role="img" aria-label="Duration theo kỳ hạn">`;
    [5, 10, 15, 20].forEach(d => { s += `<line x1="${l}" y1="${ys(d)}" x2="${r}" y2="${ys(d)}" class="sv-grid"/><text x="${l - 8}" y="${ys(d) + 5}" class="sv-muted" text-anchor="end">${d}</text>`; });
    [0, 10, 20, 30, 40, 50].forEach(n => { s += `<text x="${xs(n)}" y="${b + 22}" class="sv-muted">${n}</text>`; });
    s += `<text x="${(l + r) / 2}" y="${H - 4}" class="sv-muted">Kỳ hạn (năm)</text>`;
    s += `<line x1="${xs(0)}" y1="${ys(0)}" x2="${xs(hi)}" y2="${ys(hi)}" class="sv-pv"/><text x="${xs(hi) + 8}" y="${ys(hi) + 16}" class="sv-txt sv-t-pv" text-anchor="start">zero-coupon</text>`;
    const line = (c, y, cls) => { let p = ''; for (let n = 1; n <= maxN; n++) p += `${xs(n).toFixed(1)},${ys(macD(c, n, y)).toFixed(1)} `; return `<polyline points="${p}" class="${cls}" style="fill:none"/>`; };
    s += line(6, 0.07, 'sv-curve') + line(3, 0.10, 'sv-down');
    s += `<line x1="${l}" y1="${ys(1.07 / 0.07)}" x2="${r}" y2="${ys(1.07 / 0.07)}" class="sv-dash"/><text x="${r}" y="${ys(1.07 / 0.07) - 8}" class="sv-muted" text-anchor="end">trần vĩnh viễn 15,29</text>`;
    s += `<text x="${xs(40)}" y="${ys(macD(6, 40, 0.07)) + 24}" class="sv-txt" text-anchor="middle">coupon 6%, YTM 7%</text>`;
    s += `<text x="${r}" y="${ys(macD(3, 50, 0.10)) + 24}" class="sv-txt sv-t-down" text-anchor="end">coupon 3%, YTM 10%</text>`;
    return `${s}</svg>`;
  }

  // Thanh ngang duration theo coupon và theo lợi suất.
  const bars = (rows, max) => `<div class="sd-bars">${rows.map(([lab, v]) => `<div class="sd-bar"><span class="sd-bar-l">${lab}</span><span class="sd-bar-t"><i style="width:${(v / max) * 100}%"></i></span><b>${fmt(v)}</b></div>`).join('')}</div>`;

  const slides = [
    S('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Fixed Income · FI-11</div>
      <h2>Yield-Based Bond Duration<br>Measures and Properties</h2>
      <p>Lợi suất đổi 1% thì giá đổi bao nhiêu?</p>
      <div class="sd-chips"><span>LOS 1 · ModDur, money duration, PVBP</span><span>LOS 2 · Kỳ hạn, coupon, lợi suất</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Từ Macaulay sang Modified', `<div class="sd-cols2">
      <div><div class="sd-f">ModDur = ${frac('MacDur', '1 + r')}</div><div class="sd-f">%ΔP ≈ -ModDur × Δy</div></div>
      <div><div class="sd-steps"><span>MacDur = 4,4523</span><span>ModDur = 4,4523 / 1,07 = <b>4,1610</b></span><span>+50 bp → ước lượng <b>-2,08%</b></span><span>Giá thực ở 7,5%: <b>-2,05%</b></span></div></div></div>
      <p class="sd-note">Trái phiếu 5 năm, coupon 6%, YTM 7%, giá 95,90.</p>`),

    S('Duration = độ dốc của tiếp tuyến', `<div class="sd-cols2 wide-left"><div>${tangent()}</div>
      <div><div class="sd-rule">Tiếp tuyến là <b>đường thẳng</b></div><div class="sd-rule up">Δy nhỏ → <b>rất chính xác</b></div><div class="sd-rule down">Δy lớn → <b>sai lệch</b></div><p class="sd-note">Phần lệch do độ cong (convexity) - FI-12.</p></div></div>`),

    S('Approximate modified duration', `<div class="sd-f">ApproxModDur = ${frac('PV<sub>-</sub> - PV<sub>+</sub>', '2 × Δy × PV<sub>0</sub>')}</div>
      <div class="sd-tbl grid"><div class="head"><span>YTM</span><span>6,9%</span><span>7,0%</span><span>7,1%</span></div>
        <div><span>Giá</span><span>96,2999</span><span>95,8998</span><span>95,5018</span></div></div>
      <p class="sd-note">(96,2999 - 95,5018) / (2 × 0,001 × 95,8998) = <b>4,1610</b>. Nhân 1,07 → ApproxMacDur 4,4523.</p>`),

    S('Trái phiếu bán niên: nhớ đổi sang năm', `<div class="sd-steps">
      <span>① MacDur = 7,3352 <b>kỳ nửa năm</b> (4 năm, coupon 5%, YTM 6%)</span>
      <span>② MacDur năm = 7,3352 / 2 = 3,6676</span>
      <span>③ ModDur = 3,6676 / (1 + 0,06/2) = <b>3,5608</b></span></div>
      <div class="sd-cols2"><div class="sd-rule down">Chia 1,06 <b>3,46 sai</b></div><div class="sd-rule down">Quên chia 2 <b>7,12 sai</b></div></div>`),

    S('Money duration và PVBP', `<div class="sd-cols2">
      <div class="sd-card"><b>Money duration</b><div class="sd-f sm">ModDur × giá trị thị trường</div><p>4,1610 × 9.589.980 = <b>39,9 triệu</b></p><p>+50 bp → ΔV ≈ <b>-199.521</b></p></div>
      <div class="sd-card acc"><b>PVBP (DV01)</b><div class="sd-f sm">(PV<sub>-</sub> - PV<sub>+</sub>) / 2 với 1 bp</div><p>Mỗi 100: <b>0,0399</b></p><p>Vị thế 10 triệu mệnh giá: <b>3.990 USD/bp</b></p></div></div>
      <p class="sd-note">Dùng <b>full price</b>. PVBP ≈ Money duration × 0,0001.</p>`),

    S('Coupon cao hơn → duration thấp hơn', `<div class="sd-cols2">
      <div><p class="sd-cap">MacDur, 10 năm, YTM 7%</p>${bars([['Coupon 0%', macD(0, 10, 0.07)], ['Coupon 3%', macD(3, 10, 0.07)], ['Coupon 6%', macD(6, 10, 0.07)], ['Coupon 10%', macD(10, 10, 0.07)]], 10)}</div>
      <div><p class="sd-cap">MacDur, coupon 6%, 10 năm</p>${bars([['YTM 4%', macD(6, 10, 0.04)], ['YTM 7%', macD(6, 10, 0.07)], ['YTM 10%', macD(6, 10, 0.10)]], 10)}<p class="sd-note">Lợi suất cao hơn → duration <b>thấp hơn</b>.</p></div></div>`),

    S('Kỳ hạn dài hơn → duration thường cao hơn', `<div class="sd-cols2 wide-left"><div>${maturity()}</div>
      <div><div class="sd-rule up">Zero-coupon <b>= kỳ hạn</b></div><div class="sd-rule">Coupon bond <b>tiến về (1 + r)/r</b></div><div class="sd-rule down">Chiết khấu sâu <b>đỉnh rồi giảm</b></div><p class="sd-note">Coupon 3%, YTM 10%: đỉnh 12,69 ở 30 năm, về 11,00.</p></div></div>`),

    S('Ba trường hợp đặc biệt', `<div class="sd-cols3">
      <div class="sd-card"><b>Zero-coupon</b><div class="sd-f sm">MacDur = T</div><small>Cao nhất cùng kỳ hạn</small></div>
      <div class="sd-card"><b>Vĩnh viễn</b><div class="sd-f sm">MacDur = ${frac('1 + r', 'r')}</div><small>r = 7% → 15,29</small></div>
      <div class="sd-card acc"><b>FRN</b><div class="sd-f sm">≈ thời gian đến lần đặt lại</div><small>Coupon theo kịp lãi suất thị trường</small></div></div>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>ModDur = MacDur / (1 + r mỗi kỳ)</span><span>%ΔP ≈ -ModDur × Δy</span>
      <span>Approx: (PV<sub>-</sub> - PV<sub>+</sub>)/(2Δy PV<sub>0</sub>)</span><span>Bán niên: chia 2, chia (1 + y/2)</span>
      <span>Money duration dùng full price</span><span>PVBP: thay đổi giá cho 1 bp</span>
      <span>Kỳ hạn dài, coupon thấp → rủi ro cao</span><span>Lợi suất thấp → duration cao</span></div>`),
  ];

  addDeck('FI-11', `Slide Duration Measures - bản thiết kế riêng (${slides.length} slide)`, slides);
}());
