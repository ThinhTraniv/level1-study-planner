// Bộ slide tự thiết kế cho FI-10 Interest Rate Risk and Return.
(function () {
  const L = window.LESSONS && window.LESSONS['FI-10'];
  if (!L) return;
  const { slide, addDeck, frac } = window.CFAH;
  const K = 'FI-10 · Interest Rate Risk and Return';
  const S = (title, body, opt = {}) => slide(title, body, Object.assign({ kicker: K }, opt));

  // Trái phiếu ví dụ: 5 năm, coupon 6% hằng năm, mua ở YTM 7%.
  const CF = [6, 6, 6, 6, 106];
  const price = (r, from = 0) => CF.reduce((a, c, i) => (i + 1 > from ? a + c / (1 + r) ** (i + 1 - from) : a), 0);
  const P0 = price(0.07);
  // Giá trị tại thời điểm H nếu lãi suất chuyển sang r ngay sau khi mua.
  const valueAt = (r, H) => CF.reduce((a, c, i) => a + c * (1 + r) ** (H - (i + 1)), 0);
  const hy = (r, H) => ((valueAt(r, H) / P0) ** (1 / H) - 1) * 100;
  const macD = CF.reduce((a, c, i) => a + ((i + 1) * c) / 1.07 ** (i + 1), 0) / P0;

  // Đồ thị horizon yield theo thời hạn đầu tư với ba mức lãi suất mới.
  function hyChart() {
    const W = 600, H = 300, l = 60, r = 585, t = 16, b = 250, lo = 5.5, hi = 8.5;
    const xs = h => l + ((h - 2) / 3) * (r - l), ys = v => b - ((v - lo) / (hi - lo)) * (b - t);
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv" role="img" aria-label="Horizon yield theo thời hạn đầu tư">`;
    [6, 7, 8].forEach(v => { s += `<line x1="${l}" y1="${ys(v)}" x2="${r}" y2="${ys(v)}" class="sv-grid"/><text x="${l - 8}" y="${ys(v) + 5}" class="sv-muted" text-anchor="end">${v}%</text>`; });
    [2, 3, 4, 5].forEach(h => { s += `<text x="${xs(h)}" y="${b + 22}" class="sv-muted">${h}</text>`; });
    s += `<text x="${(l + r) / 2}" y="${H - 4}" class="sv-muted">Thời hạn đầu tư (năm)</text>`;
    s += `<line x1="${xs(macD)}" y1="${t}" x2="${xs(macD)}" y2="${b}" class="sv-dash"/><text x="${xs(macD) - 6}" y="${t + 14}" class="sv-txt" text-anchor="end">MacDur 4,45</text>`;
    [[0.08, 'sv-down', 'sv-t-down', 'lãi suất lên 8%'], [0.07, 'sv-curve', '', 'giữ 7%'], [0.06, 'sv-up', 'sv-t-up', 'lãi suất xuống 6%']].forEach(([rr, cls, tc, lab]) => {
      let pts = '';
      for (let h = 2; h <= 5.0001; h += 0.05) pts += `${xs(h).toFixed(1)},${ys(hy(rr, h)).toFixed(1)} `;
      s += `<polyline points="${pts}" class="${cls}" style="fill:none"/>`;
      s += `<text x="${xs(2) + 6}" y="${ys(hy(rr, 2)) + (rr === 0.07 ? -10 : rr > 0.07 ? 24 : -10)}" class="sv-txt ${tc}" text-anchor="start">${lab}</text>`;
    });
    return `${s}</svg>`;
  }

  // Đường giá trị ghi sổ (7%) và giá thị trường nếu lãi suất lên 8%, từ năm 0 đến 5.
  function pullToPar() {
    const W = 600, H = 280, l = 60, r = 585, t = 16, b = 230, lo = 91, hi = 101;
    const xs = h => l + (h / 5) * (r - l), ys = v => b - ((v - lo) / (hi - lo)) * (b - t);
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv" role="img" aria-label="Giá trị ghi sổ trôi về mệnh giá">`;
    [92, 94, 96, 98, 100].forEach(v => { s += `<line x1="${l}" y1="${ys(v)}" x2="${r}" y2="${ys(v)}" class="sv-grid"/><text x="${l - 8}" y="${ys(v) + 5}" class="sv-muted" text-anchor="end">${v}</text>`; });
    for (let h = 0; h <= 5; h++) s += `<text x="${xs(h)}" y="${b + 22}" class="sv-muted">${h}</text>`;
    s += `<text x="${(l + r) / 2}" y="${H - 4}" class="sv-muted">Năm (ngay sau khi trả coupon)</text>`;
    const line = (rr, cls) => `<polyline points="${[0, 1, 2, 3, 4, 5].map(h => `${xs(h)},${ys(h === 5 ? 100 : price(rr, h)).toFixed(1)}`).join(' ')}" class="${cls}" style="fill:none"/>`;
    s += line(0.07, 'sv-curve') + line(0.08, 'sv-down');
    s += `<circle cx="${xs(3)}" cy="${ys(price(0.07, 3))}" r="6" class="sv-dot"/><circle cx="${xs(3)}" cy="${ys(price(0.08, 3))}" r="6" class="sv-dot"/>`;
    s += `<text x="${xs(3) - 10}" y="${ys(price(0.07, 3)) - 12}" class="sv-txt" text-anchor="end">ghi sổ 98,19</text><text x="${xs(3) + 10}" y="${ys(price(0.08, 3)) + 22}" class="sv-txt sv-t-down" text-anchor="start">giá bán 96,43</text>`;
    s += `<text x="${xs(0) + 6}" y="${ys(P0) + 22}" class="sv-muted" text-anchor="start">mua 95,90</text>`;
    return `${s}</svg>`;
  }

  // Cái cân: trọng số PV của từng dòng tiền, điểm tựa ở Macaulay duration.
  function seesaw() {
    const W = 600, H = 250, l = 60, r = 560, base = 170;
    const xs = h => l + (h / 5) * (r - l);
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv big" role="img" aria-label="Macaulay duration là điểm cân bằng">`;
    s += `<line x1="${l}" y1="${base}" x2="${r}" y2="${base}" class="sv-axis"/>`;
    CF.forEach((c, i) => {
      const w = c / 1.07 ** (i + 1) / P0, h = Math.max(6, w * 140);
      s += `<rect x="${xs(i + 1) - 22}" y="${base - h}" width="44" height="${h}" rx="4" class="sv-dot"/>`;
      s += `<text x="${xs(i + 1)}" y="${base - h - 8}" class="sv-txt">${(w * 100).toFixed(1).replace('.', ',')}%</text><text x="${xs(i + 1)}" y="${base + 66}" class="sv-muted">t = ${i + 1}</text>`;
    });
    const fx = xs(macD);
    s += `<polygon points="${fx},${base + 4} ${fx - 22},${base + 40} ${fx + 22},${base + 40}" class="sv-node"/>`;
    s += `<text x="${fx - 30}" y="${base + 32}" class="sv-txt sv-t-pv" text-anchor="end">4,45</text>`;
    return `${s}</svg>`;
  }

  const slides = [
    S('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Fixed Income · FI-10</div>
      <h2>Interest Rate Risk<br>and Return</h2>
      <p>Lãi suất thay đổi: ai được, ai mất?</p>
      <div class="sd-chips"><span>LOS 1 · Nguồn lợi nhuận</span><span>LOS 2 · Thời hạn và duration</span><span>LOS 3 · Macaulay duration</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Hai hiệu ứng ngược chiều', `<div class="sd-cols2">
      <div class="sd-card"><b>Lãi suất tăng</b><div class="sd-rule down">Giá trái phiếu <b>giảm</b></div><div class="sd-rule up">Tái đầu tư coupon <b>lời hơn</b></div></div>
      <div class="sd-card"><b>Lãi suất giảm</b><div class="sd-rule up">Giá trái phiếu <b>tăng</b></div><div class="sd-rule down">Tái đầu tư coupon <b>kém đi</b></div></div></div>
      <p class="sd-note">Hiệu ứng nào thắng? Phụ thuộc vào <b>thời hạn đầu tư</b> so với <b>Macaulay duration</b>.</p>`),

    S('Ba nguồn lợi nhuận', `<div class="sd-cols3">
      <div class="sd-card"><div class="sd-n">1</div><b>Coupon và gốc</b><p>Nhận đúng hạn nếu không vỡ nợ.</p></div>
      <div class="sd-card"><div class="sd-n">2</div><b>Tái đầu tư</b><p>Lãi trên coupon đến hết thời hạn.</p><small>Rủi ro tái đầu tư</small></div>
      <div class="sd-card"><div class="sd-n">3</div><b>Lãi/lỗ vốn</b><p>Khi bán trước đáo hạn.</p><small>Rủi ro giá</small></div></div>
      <p class="sd-note">Ví dụ xuyên suốt: 5 năm, coupon 6% hằng năm, mua ở YTM 7%, giá <b>95,90</b>.</p>`),

    S('Lãi vốn so với giá trị ghi sổ, không so với giá mua', `<div class="sd-cols2 wide-left"><div>${pullToPar()}</div>
      <div><div class="sd-f sm">Lãi/lỗ vốn = Giá bán - Giá trị ghi sổ</div>
      <div class="sd-rule down">96,43 - 98,19 <b>= -1,76</b></div><p class="sd-note">Trôi từ 95,90 lên 98,19 là <b>thu nhập lãi</b> (accretion), không phải lãi vốn.</p></div></div>`),

    S('Tách lợi nhuận: lãi suất lên 8%, bán sau 3 năm', `<div class="sd-tbl grid"><div class="head"><span>Thành phần</span><span>Giá trị</span></div>
      <div><span>Giá mua</span><span>95,8998</span></div>
      <div><span>+ Coupon 3 × 6</span><span>18,0000</span></div>
      <div><span>+ Tái đầu tư ở 8%</span><span>1,4784</span></div>
      <div><span>+ Trôi về par (98,1920 - 95,8998)</span><span>2,2922</span></div>
      <div><span>+ Lỗ vốn (96,4335 - 98,1920)</span><span>-1,7585</span></div>
      <div><span><b>= Tổng tiền năm 3</b></span><span><b>115,9119</b></span></div></div>`),

    S('Horizon yield', `<div class="sd-big">Horizon yield = (${frac('Tổng tiền cuối thời hạn', 'Giá mua')})<sup>1/H</sup> - 1</div>
      <div class="sd-keys"><span>3 <kbd>N</kbd></span><span>95.8998 <kbd>+|-</kbd> <kbd>PV</kbd></span><span>0 <kbd>PMT</kbd></span><span>115.9119 <kbd>FV</kbd></span><span><kbd>CPT</kbd> <kbd>I/Y</kbd> = <b>6,52%</b></span></div>
      <p class="sd-note">Mua ở YTM 7% nhưng chỉ đạt 6,52%: lỗ giá lớn hơn phần lời tái đầu tư.</p>`),

    S('Sáu tình huống của cùng một trái phiếu', `<div class="sd-tbl grid"><div class="head"><span>Lãi suất mới</span><span>Bán sau 3 năm</span><span>Giữ 5 năm</span></div>
      <div><span>Giữ 7%</span><span>7,00%</span><span>7,00%</span></div>
      <div><span>Lên 8%</span><span>6,52% (thiệt)</span><span>7,11% (lợi)</span></div>
      <div><span>Xuống 6%</span><span>7,49% (lợi)</span><span>6,89% (thiệt)</span></div></div>
      <div class="sd-cols2"><div class="sd-rule down">Ngắn hạn: sợ lãi suất <b>tăng</b></div><div class="sd-rule down">Dài hạn: sợ lãi suất <b>giảm</b></div></div>`),

    S('Điểm cân bằng nằm ở Macaulay duration', `<div class="sd-cols2 wide-left"><div>${hyChart()}</div>
      <div><p class="sd-note">Ba đường cắt nhau tại thời hạn ≈ <b>4,45 năm</b>.</p><div class="sd-rule">H = 4,45 → horizon yield <b>≈ 7,00%</b></div><p class="sd-note">Dù lãi suất lên 8% hay xuống 6% ngay sau khi mua.</p></div></div>`),

    S('Macaulay duration = điểm tựa của cái cân', `${seesaw()}
      <div class="sd-f sm">MacDur = Σ t × ${frac('PV(CF<sub>t</sub>)', 'Giá')} = <b>4,4523</b> năm</div>`),

    S('Công thức đóng và trường hợp đặc biệt', `<div class="sd-cols2">
      <div><div class="sd-f sm">${frac('1 + r', 'r')} - ${frac('1 + r + N(c - r)', 'c[(1 + r)<sup>N</sup> - 1] + r')} - ${frac('t', 'T')}</div><p class="sd-note">r, c, N theo <b>kỳ</b>. Bán niên: chia 2. Giữa kỳ: trừ t/T.</p></div>
      <div><div class="sd-tbl grid"><div class="head"><span>Trái phiếu</span><span>MacDur</span></div>
        <div><span>Zero-coupon</span><span>= kỳ hạn</span></div>
        <div><span>Có coupon</span><span>&lt; kỳ hạn</span></div>
        <div><span>Vĩnh viễn</span><span>(1 + r)/r</span></div></div></div></div>`),

    S('Duration gap = MacDur - thời hạn đầu tư', `<div class="sd-rule down">Gap &gt; 0 (H ngắn) · rủi ro giá chi phối <b>sợ lãi suất tăng</b></div>
      <div class="sd-rule">Gap = 0 · hai rủi ro triệt tiêu <b>miễn nhiễm</b></div>
      <div class="sd-rule up">Gap &lt; 0 (H dài) · rủi ro tái đầu tư chi phối <b>sợ lãi suất giảm</b></div>
      <p class="sd-note">H = 3: gap = <b>1,45</b>. H = 5: gap = <b>-0,55</b>. Chỉ đúng cho <b>một lần</b> dịch chuyển song song ngay sau khi mua.</p>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>3 nguồn: coupon, tái đầu tư, lãi/lỗ vốn</span><span>Lãi vốn so với giá trị ghi sổ</span>
      <span>Lãi suất không đổi → horizon yield = YTM</span><span>Ngắn hạn sợ lãi suất tăng</span>
      <span>Dài hạn sợ lãi suất giảm</span><span>MacDur = bình quân trọng số PV</span>
      <span>Zero-coupon: MacDur = kỳ hạn</span><span>Gap = MacDur - H</span></div>`),
  ];

  addDeck('FI-10', `Slide Interest Rate Risk and Return - bản thiết kế riêng (${slides.length} slide)`, slides);
}());
