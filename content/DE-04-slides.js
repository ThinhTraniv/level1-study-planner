// Bộ slide tự thiết kế cho DE-04 Arbitrage, Replication, and the Cost of Carry in Pricing Derivatives.
(function () {
  const L = window.LESSONS && window.LESSONS['DE-04'];
  if (!L) return;
  const { slide, addDeck, tl, frac } = window.CFAH;
  const K = 'DE-04 · Arbitrage and Cost of Carry';
  const S = (title, body, opt = {}) => slide(title, body, Object.assign({ kicker: K }, opt));
  const fmt = (x, d = 2) => { const [a, b] = x.toFixed(d).split('.'); return a.replace(/\B(?=(\d{3})+(?!\d))/g, '.') + (b ? ',' + b : ''); };
  const fwd = (S0, r, T, pvI = 0, pvC = 0) => (S0 - pvI + pvC) * (1 + r) ** T;

  // Lợi nhuận arbitrage tại T theo giá forward trên thị trường (gà: S0 = 100, r = 10%, T = 1).
  function arbChart() {
    const F0 = fwd(100, 0.10, 1), W = 600, H = 300, l = 50, r = 585, t = 20, b = 250, x0 = 100, x1 = 120, y1 = 10;
    const xs = f => l + ((f - x0) / (x1 - x0)) * (r - l), ys = v => b - (v / y1) * (b - t);
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv big" role="img" aria-label="Lợi nhuận arbitrage theo giá forward thị trường">`;
    [5, 10].forEach(v => { s += `<line x1="${l}" y1="${ys(v)}" x2="${r}" y2="${ys(v)}" class="sv-grid"/><text x="${l - 8}" y="${ys(v) + 6}" class="sv-muted" text-anchor="end">${v}</text>`; });
    s += `<line x1="${l}" y1="${b}" x2="${r}" y2="${b}" class="sv-axis"/><line x1="${l}" y1="${t}" x2="${l}" y2="${b}" class="sv-axis"/>`;
    [100, 105, 110, 115, 120].forEach(f => { s += `<text x="${xs(f)}" y="${b + 24}" class="sv-muted">${f}</text>`; });
    s += `<line x1="${xs(x0)}" y1="${ys(F0 - x0)}" x2="${xs(F0)}" y2="${ys(0)}" class="sv-up"/><line x1="${xs(F0)}" y1="${ys(0)}" x2="${xs(x1)}" y2="${ys(x1 - F0)}" class="sv-down"/>`;
    s += `<circle cx="${xs(F0)}" cy="${ys(0)}" r="7" class="sv-dot"/><text x="${xs(F0)}" y="${ys(0) - 16}" class="sv-txt">F₀ = ${fmt(F0, 0)}</text>`;
    [105, 115].forEach(f => { s += `<circle cx="${xs(f)}" cy="${ys(Math.abs(f - F0))}" r="6" class="sv-dot"/><text x="${xs(f)}" y="${ys(Math.abs(f - F0)) - 14}" class="sv-txt">+${fmt(Math.abs(f - F0), 0)}</text>`; });
    s += `<text x="${xs(102.5)}" y="${ys(2)}" class="sv-txt sv-t-up">reverse</text><text x="${xs(117.5)}" y="${ys(2)}" class="sv-txt sv-t-down">cash-and-carry</text>`;
    s += `<text x="${(l + r) / 2}" y="${H - 4}" class="sv-muted">Giá forward trên thị trường · trục dọc: lợi nhuận arbitrage tại T</text>`;
    return `${s}</svg>`;
  }

  // S0, F0 và E(ST) của cổ phiếu 100, r = 5%, phần bù rủi ro 4%.
  function threePrices() {
    const rows = [['S₀ hôm nay', 100], ['F₀(1) = S₀ × 1,05', fwd(100, 0.05, 1)], ['E(S₁) = S₀ × 1,09', 100 * 1.09]];
    return `<div class="sd-bars">${rows.map(([lab, v]) => `<div class="sd-bar"><span class="sd-bar-l">${lab}</span><span class="sd-bar-t"><i style="width:${((v - 90) / 20) * 100}%"></i></span><b>${fmt(v, 0)}</b></div>`).join('')}</div>`;
  }

  // Đường giá kỳ hạn theo kỳ hạn T (liên tục): không carry, chi phí lưu kho 2%, convenience yield 8%.
  function curveChart() {
    const W = 600, H = 300, l = 56, r = 585, t = 20, b = 250, y0 = 94, y1 = 116;
    const xs = T => l + (T / 2) * (r - l), ys = v => b - ((v - y0) / (y1 - y0)) * (b - t);
    const cases = [['sv-curve', 0.05, 'chỉ có r'], ['sv-down', 0.07, 'lưu kho'], ['sv-up', -0.03, 'convenience yield']];
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv big" role="img" aria-label="Giá kỳ hạn theo kỳ hạn">`;
    [95, 100, 105, 110, 115].forEach(v => { s += `<line x1="${l}" y1="${ys(v)}" x2="${r}" y2="${ys(v)}" class="sv-grid"/><text x="${l - 8}" y="${ys(v) + 5}" class="sv-muted" text-anchor="end">${v}</text>`; });
    s += `<line x1="${l}" y1="${b}" x2="${r}" y2="${b}" class="sv-axis"/><line x1="${l}" y1="${t}" x2="${l}" y2="${b}" class="sv-axis"/>`;
    [0, 0.5, 1, 1.5, 2].forEach(T => { s += `<text x="${xs(T)}" y="${b + 22}" class="sv-muted">${String(T).replace('.', ',')}</text>`; });
    cases.forEach(([cls, k, lab], i) => {
      let pts = '';
      for (let T = 0; T <= 2.0001; T += 0.1) pts += `${xs(T).toFixed(1)},${ys(100 * Math.exp(k * T)).toFixed(1)} `;
      s += `<polyline points="${pts}" class="${cls}" style="fill:none"/>`;
      const v2 = 100 * Math.exp(k * 2);
      s += `<text x="${xs(2) - 6}" y="${ys(v2) + -10}" class="sv-txt ${cls === 'sv-up' ? 'sv-t-up' : cls === 'sv-down' ? 'sv-t-down' : ''}" text-anchor="end">${lab}: ${fmt(v2, 2)}</text>`;
    });
    s += `<text x="${(l + r) / 2}" y="${H - 4}" class="sv-muted">Kỳ hạn T (năm)</text>`;
    return `${s}</svg>`;
  }

  const Fdiv = fwd(60, 0.04, 0.5, 1.5 / 1.04 ** 0.25), Fgold = fwd(2000, 0.05, 1, 0, 12);

  const slides = [
    S('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Derivatives · DE-04</div>
      <h2>Arbitrage, Replication,<br>and the Cost of Carry</h2>
      <p>Cùng dòng tiền → cùng giá</p>
      <div class="sd-chips"><span>LOS 1 · Arbitrage và sao chép</span><span>LOS 2 · Giá giao ngay, giá kỳ vọng, cost of carry</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Arbitrage: ba điều kiện cùng lúc', `<div class="sd-cols3">
      <div class="sd-card"><div class="sd-n">1</div><b>Không vốn ròng</b><p>Tổng dòng tiền tại t = 0 là 0 (hoặc dương).</p></div>
      <div class="sd-card"><div class="sd-n">2</div><b>Không rủi ro</b><p>Kết quả biết trước trong mọi kịch bản.</p></div>
      <div class="sd-card acc"><div class="sd-n">3</div><b>Lời dương</b><p>Chắc chắn có lời tại T.</p></div></div>
      <p class="sd-note">Thiếu điều kiện 2 là <b>đầu cơ</b>, không phải arbitrage. Hệ quả: danh mục phi rủi ro chỉ được sinh lợi bằng <b>r</b>.</p>`),

    S('Giới hạn của arbitrage', `<div class="sd-grid4">
      <div class="sd-card"><b>Chi phí giao dịch</b><p>Phí, thuế, chênh lệch mua - bán ăn mất lợi nhuận.</p></div>
      <div class="sd-card"><b>Thiếu vốn</b><p>Không vay đủ, hoặc không vay được ở lãi suất phi rủi ro.</p></div>
      <div class="sd-card"><b>Hạn chế bán khống</b><p>Tài sản khó vay, khó lưu kho (hàng dễ hỏng).</p></div>
      <div class="sd-card"><b>Rủi ro mô hình, đối tác</b><p>Giao dịch không thật sự "phi rủi ro".</p></div></div>`),

    S('Sao chép: tài sản = phái sinh + trái phiếu', `<div class="sd-big">Tài sản = Forward + Trái phiếu</div>
      <div class="sd-tbl grid">
      <div class="head"><span>Danh mục</span><span>Tương đương</span></div>
      <div><span>Long tài sản + short forward</span><span>Cho vay phi rủi ro</span></div>
      <div><span>Long tài sản + vay tiền</span><span>Long forward</span></div>
      <div><span>Long forward + cho vay PV(F₀)</span><span>Long tài sản</span></div></div>
      <p class="sd-note">Chuyển một thành phần sang vế kia thì <b>đổi dấu</b> long/short.</p>`),

    S('Danh mục phi rủi ro → công thức giá kỳ hạn', `${tl(1, [{ t: 0, label: 'Mua tài sản: trả S₀', cls: 'pv' }, { t: 1, label: 'Short forward: nhận F₀(T) chắc chắn' }], { h: 140, ticks: ['t = 0', 'T'] })}
      <div class="sd-f">S₀ × (1 + r)<sup>T</sup> = F₀(T)</div>
      <p class="sd-note">Gà: 100 × 1,10 = <b>${fmt(fwd(100, 0.1, 1), 0)}</b> · Cổ phiếu 50, r = 4%, 6 tháng: 50 × 1,04<sup>0,5</sup> = <b>${fmt(fwd(50, 0.04, 0.5))}</b></p>`),

    S('Forward đắt (115 > 110): cash-and-carry', `<div class="sd-tbl grid">
      <div class="head"><span>Bước</span><span>t = 0</span><span>T = 1</span></div>
      <div><span>Vay 100 ở 10%</span><span>+100</span><span>-110</span></div>
      <div><span>Mua gà</span><span>-100</span><span>giao gà</span></div>
      <div><span>Short forward ở 115</span><span>0</span><span>+115</span></div>
      <div><span><b>Tổng</b></span><span><b>0</b></span><span><b>+5</b></span></div></div>
      <p class="sd-note">Bán cái đắt (forward), mua cái rẻ (tài sản bằng tiền vay). Giá gà lúc T không ảnh hưởng kết quả.</p>`),

    S('Forward rẻ (81,00 < 81,79): reverse cash-and-carry', `<div class="sd-tbl grid">
      <div class="head"><span>Bước</span><span>t = 0</span><span>T = 0,75</span></div>
      <div><span>Bán khống cổ phiếu</span><span>+80</span><span>trả cổ phiếu</span></div>
      <div><span>Cho vay 80 ở 3%</span><span>-80</span><span>+${fmt(fwd(80, 0.03, 0.75))}</span></div>
      <div><span>Long forward ở 81,00</span><span>0</span><span>-81,00</span></div>
      <div><span><b>Tổng</b></span><span><b>0</b></span><span><b>+${fmt(fwd(80, 0.03, 0.75) - 81)}</b></span></div></div>
      <p class="sd-note">F₀ = 80 × 1,03<sup>0,75</sup> = ${fmt(fwd(80, 0.03, 0.75))}. Long cái rẻ (forward), bán cái đắt (tài sản).</p>`),

    S('Lệch về phía nào cũng có lời', `<div class="sd-cols2 wide-left"><div>${arbChart()}</div>
      <div><div class="sd-rule down">F thị trường &gt; F₀ <b>short forward, mua tài sản</b></div><div class="sd-rule up">F thị trường &lt; F₀ <b>long forward, bán khống</b></div>
      <p class="sd-note">Lợi nhuận tại T = |F<sub>thị trường</sub> - F₀|. Arbitrage kéo giá về F₀.</p></div></div>`),

    S('Ba con số khác nhau: S₀, F₀ và E(S_T)', `${threePrices()}
      <div class="sd-f">S₀ = ${frac('E(S<sub>T</sub>)', '(1 + r + λ)<sup>T</sup>')} &nbsp;&nbsp;&nbsp; F₀(T) = S₀(1 + r)<sup>T</sup></div>
      <p class="sd-note">r = 5%, phần bù rủi ro λ = 4%. Giá kỳ hạn <b>không</b> phải dự báo giá tương lai.</p>`),

    S('Vì sao F₀ không chứa phần bù rủi ro?', `<div class="sd-steps">
      <span>① Người short forward có thể phòng hộ hoàn toàn: vay tiền, mua tài sản</span>
      <span>② Rủi ro đã bị triệt tiêu → không ai được trả phần bù rủi ro λ</span>
      <span>③ Chi phí phòng hộ chỉ còn tiền lãi phi rủi ro → F₀ = S₀(1 + r)<sup>T</sup></span>
      <span>④ Phái sinh được định giá <b>như thể</b> mọi người trung lập rủi ro (DE-10)</span></div>
      <p class="sd-note">Bẫy: đề cho lợi suất kỳ vọng 9% và r = 5% → chỉ dùng <b>5%</b>.</p>`),

    S('Chi phí nắm giữ (cost of carry)', `<div class="sd-f">F₀(T) = (S₀ - PV(I) + PV(C)) × (1 + r)<sup>T</sup></div>
      <div class="sd-cols2"><div><div class="sd-rule up">Cổ tức, coupon <b>F₀ giảm</b></div><div class="sd-rule up">Convenience yield <b>F₀ giảm</b></div></div>
      <div><div class="sd-rule down">Lưu kho, bảo hiểm <b>F₀ tăng</b></div><div class="sd-rule">Liên tục <b>S₀e<sup>(r + c - i)T</sup></b></div></div></div>
      <p class="sd-note">Người long forward không giữ tài sản: <b>không nhận</b> lợi ích và <b>không chịu</b> chi phí.</p>`),

    S('Hai ví dụ có carry', `<div class="sd-cols2">
      <div class="sd-card"><b>Cổ phiếu có cổ tức</b><p>S₀ = 60, cổ tức 1,50 sau 3 tháng, r = 4%, T = 0,5</p><p>PV(I) = 1,50 / 1,04<sup>0,25</sup> = ${fmt(1.5 / 1.04 ** 0.25, 4)}</p><p>F₀ = <b>${fmt(Fdiv)}</b> (bỏ qua cổ tức: ${fmt(fwd(60, 0.04, 0.5))})</p></div>
      <div class="sd-card acc"><b>Vàng có chi phí lưu kho</b><p>S₀ = 2.000, PV(C) = 12, r = 5%, T = 1</p><p>F₀ = 2.012 × 1,05 = <b>${fmt(Fgold)}</b></p><p>Thị trường 2.130 → cash-and-carry lời <b>${fmt(2130 - Fgold)}</b></p></div></div>`),

    S('Đường giá kỳ hạn: contango và backwardation', `<div class="sd-cols2 wide-left"><div>${curveChart()}</div>
      <div><div class="sd-rule down">Lưu kho lớn <b>F₀ &gt; S₀: contango</b></div><div class="sd-rule up">Convenience yield &gt; r <b>F₀ &lt; S₀: backwardation</b></div>
      <p class="sd-note">S₀ = 100, r = 5%: lưu kho c = 2% hoặc convenience yield i = 8%.</p></div></div>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>Arbitrage: không vốn, không rủi ro, có lời</span><span>Tài sản = forward + trái phiếu</span>
      <span>F₀(T) = S₀(1 + r)<sup>T</sup></span><span>Forward đắt → vay, mua, short forward</span>
      <span>Forward rẻ → bán khống, cho vay, long forward</span><span>F₀ chỉ dùng r, không dùng λ</span>
      <span>Lợi ích trừ PV(I), chi phí cộng PV(C)</span><span>Giới hạn: phí, vốn, bán khống</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 10 câu, mục tiêu ≥ 7 câu đúng.</p>`),
  ];

  addDeck('DE-04', `Slide Arbitrage and Cost of Carry - bản thiết kế riêng (${slides.length} slide)`, slides);
}());
