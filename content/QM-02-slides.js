// Bộ slide tự thiết kế cho QM-02 Types of Financial Returns.
// Gắn vào LESSONS['QM-02'].slides.
(function () {
  const { slide, addDeck, frac, tl } = window.CFAH;
  const K = { kicker: 'QM-02 · Types of Returns' };
  const S = (title, body) => slide(title, body, K);
  const fmt = (x, d = 2) => x.toFixed(d).replace('.', ',');

  // Dãy return có giá trị ngoại lai: vị trí các điểm và ba loại trung bình.
  function outlierPlot() {
    const d = [-2, 1, 3, 4, 5, 6, 7, 8, 9, 79];
    const mean = d.reduce((a, c) => a + c, 0) / d.length;
    const trim = d.slice(1, -1).reduce((a, c) => a + c, 0) / 8;
    const wins = (d.slice(1, -1).reduce((a, c) => a + c, 0) + 1 + 9) / 10;
    const l = 40, r = 570, lo = -5, hi = 80, y = 110;
    const xs = v => l + ((v - lo) / (hi - lo)) * (r - l);
    let s = `<svg viewBox="0 0 600 200" class="sv" role="img" aria-label="Giá trị ngoại lai kéo trung bình cộng lên">`;
    s += `<line x1="${l}" y1="${y}" x2="${r}" y2="${y}" class="sv-axis"/>`;
    [0, 20, 40, 60, 80].forEach(v => { s += `<text x="${xs(v)}" y="${y + 26}" class="sv-muted">${v}%</text>`; });
    d.forEach(v => { s += `<circle cx="${xs(v)}" cy="${y - 12}" r="6" class="sv-dot"/>`; });
    s += `<line x1="${xs(mean)}" y1="${y - 60}" x2="${xs(mean)}" y2="${y}" class="sv-down"/><text x="${xs(mean) + 6}" y="${y - 52}" class="sv-txt sv-t-down" text-anchor="start">Cộng ${fmt(mean, 1)}%</text>`;
    s += `<line x1="${xs(trim)}" y1="${y - 92}" x2="${xs(trim)}" y2="${y}" class="sv-up"/><text x="${xs(trim) + 6}" y="${y - 80}" class="sv-txt sv-t-up" text-anchor="start">Trimmed ${fmt(trim, 3)}% · Winsorized ${fmt(wins, 1)}%</text>`;
    s += `<text x="${xs(79)}" y="${y + 52}" class="sv-muted">ngoại lai</text>`;
    return `${s}</svg>`;
  }

  // Return trên vốn tự có theo return tài sản, V_B/V_E = 1,5, lãi vay 5%.
  function levChart() {
    const l = 70, r = 580, t = 20, b = 260, lo = -10, hi = 15, ylo = -35, yhi = 35;
    const xs = v => l + ((v - lo) / (hi - lo)) * (r - l);
    const ys = v => b - ((v - ylo) / (yhi - ylo)) * (b - t);
    const RL = R => R + 1.5 * (R - 5);
    let s = `<svg viewBox="0 0 600 300" class="sv" role="img" aria-label="Đòn bẩy khuếch đại return">`;
    [-30, -15, 0, 15, 30].forEach(v => { s += `<line x1="${l}" y1="${ys(v)}" x2="${r}" y2="${ys(v)}" class="sv-grid"/><text x="${l - 8}" y="${ys(v) + 5}" class="sv-muted" text-anchor="end">${v}%</text>`; });
    [-10, -5, 0, 5, 10, 15].forEach(v => { s += `<text x="${xs(v)}" y="${b + 22}" class="sv-muted">${v}%</text>`; });
    s += `<line x1="${xs(lo)}" y1="${ys(lo)}" x2="${xs(hi)}" y2="${ys(hi)}" class="sv-dash"/>`;
    s += `<line x1="${xs(lo)}" y1="${ys(RL(lo))}" x2="${xs(hi)}" y2="${ys(RL(hi))}" class="sv-curve"/>`;
    [[9, 'up'], [-4, 'down']].forEach(([R, c]) => { s += `<circle cx="${xs(R)}" cy="${ys(RL(R))}" r="6" class="sv-dot"/><text x="${xs(R) + (R > 0 ? -10 : 10)}" y="${ys(RL(R)) + (R > 0 ? -10 : 22)}" class="sv-txt sv-t-${c}" text-anchor="${R > 0 ? 'end' : 'start'}">${fmt(RL(R), 1)}%</text>`; });
    s += `<circle cx="${xs(5)}" cy="${ys(5)}" r="5" class="sv-node"/><text x="${xs(5) + 10}" y="${ys(5) + 24}" class="sv-muted" text-anchor="start">R = r<tspan baseline-shift="sub">D</tspan> = 5%</text>`;
    s += `<text x="${(l + r) / 2}" y="${298}" class="sv-muted">Return tài sản R (nét đứt: không vay · nét xanh: có đòn bẩy)</text>`;
    return `${s}</svg>`;
  }

  // Từ gross đến real: thanh ngang.
  const steps = [['Gross', 9.5], ['Net (- phí 1,2%)', 8.3], ['Sau thuế', 6.79], ['Thực sau thuế', 1.0679 / 1.03 * 100 - 100]];
  const waterfall = `<div class="sd-bars">${steps.map(([lab, v]) => `<div class="sd-bar"><span class="sd-bar-l">${lab}</span><span class="sd-bar-t"><i style="width:${(v / 10) * 100}%"></i></span><b>${fmt(v)}%</b></div>`).join('')}</div>`;

  const slides = [
    slide('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Quantitative Methods · QM-02</div>
      <h2>Types of<br>Financial Returns</h2>
      <p>Một khoản đầu tư, nhiều con số return</p>
      <div class="sd-chips"><span>HPR và trung bình</span><span>Annualized · liên tục</span><span>Phí · thuế · lạm phát · đòn bẩy</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Bản đồ các loại return', `<div class="sd-grid4">
      <div class="sd-card"><b>Cả kỳ và trung bình</b><p>HPR · cộng · nhân · điều hòa · trimmed · winsorized</p></div>
      <div class="sd-card"><b>Cùng thước đo thời gian</b><p>Annualized · continuously compounded</p></div>
      <div class="sd-card"><b>Thực sự giữ lại bao nhiêu</b><p>Gross/net · trước/sau thuế · danh nghĩa/thực</p></div>
      <div class="sd-card acc"><b>Vay để đầu tư</b><p>Leveraged return</p></div></div>
      <p class="sd-note">MWR và TWR (có nộp, rút tiền) để dành cho QM-03.</p>`),

    S('HPR: nối nhiều kỳ bằng phép nhân', `<div class="sd-f">HPR = ${frac('P<sub>1</sub> - P<sub>0</sub> + D<sub>1</sub>', 'P<sub>0</sub>')} &nbsp;·&nbsp; 1 + HPR<sub>cả kỳ</sub> = Π(1 + R<sub>t</sub>)</div>
      ${tl(3, [{ t: 0, label: '100', cls: 'pv' }, { t: 1, label: '108 (+8%)' }, { t: 2, label: '95,04 (-12%)', cls: 'down' }, { t: 3, label: '109,30 (+15%)' }], { h: 140 })}
      <div class="sd-rule up">1,08 × 0,88 × 1,15 - 1 <b>9,296%</b></div><div class="sd-rule down">8 - 12 + 15 (cộng thẳng) <b>11% - sai</b></div>`),

    S('Trung bình cộng và trung bình nhân', `<div class="sd-cols2">
      <div><div class="sd-f sm">R̄ = ΣR / N</div><div class="sd-f sm">R̄<sub>G</sub> = [Π(1 + R)]<sup>1/N</sup> - 1</div>
      <div class="sd-tbl"><div><span>8%, -12%, 15%: cộng</span><span>3,667%</span></div><div><span>8%, -12%, 15%: nhân</span><span>3,007%</span></div><div><span>+100%, -50%: cộng</span><span>25%</span></div><div><span>+100%, -50%: nhân</span><span>0%</span></div></div></div>
      <div><div class="sd-rule">Hiệu quả gộp quá khứ <b>Nhân</b></div><div class="sd-rule">Ước tính một kỳ tới <b>Cộng</b></div>
      <p class="sd-note">Nhân ≤ cộng. Biến động càng mạnh, khoảng cách càng lớn.</p></div></div>`),

    S('Trung bình điều hòa: mua đều tiền', `<div class="sd-cols2">
      <div><p class="sd-cap">Mỗi lần mua 1.000 USD - số cổ phiếu mua được:</p><div class="sd-bars">
      <div class="sd-bar"><span class="sd-bar-l">Giá 20</span><span class="sd-bar-t"><i style="width:100%"></i></span><b>50</b></div>
      <div class="sd-bar"><span class="sd-bar-l">Giá 25</span><span class="sd-bar-t"><i style="width:80%"></i></span><b>40</b></div>
      <div class="sd-bar"><span class="sd-bar-l">Giá 40</span><span class="sd-bar-t"><i style="width:50%"></i></span><b>25</b></div></div></div>
      <div><div class="sd-f sm">X̄<sub>H</sub> = ${frac('N', 'Σ 1/X<sub>i</sub>')} = ${frac('3.000', '115')} = <b>26,09</b></div>
      <p class="sd-note">Trung bình cộng giá: 28,33. Giá thấp mua được nhiều hơn → giá vốn thấp hơn.</p><p class="sd-note"><b>Điều hòa &lt; nhân &lt; cộng</b></p></div></div>`),

    S('Trimmed và winsorized: xử lý ngoại lai', `${outlierPlot()}
      <div class="sd-cols2"><div class="sd-card"><b>20% trimmed</b><p>Bỏ -2 và 79 → 43 / <b>8</b></p></div><div class="sd-card acc"><b>80% winsorized</b><p>-2 → 1, 79 → 9 → 53 / <b>10</b></p></div></div>`),

    S('Annualized return', `<div class="sd-f">R<sub>năm</sub> = (1 + HPR)<sup>c</sup> - 1</div>
      <div class="sd-cols3">
      <div class="sd-card"><b>120 ngày, 2,4%</b><p>1,024<sup>365/120</sup> - 1</p><p><b>7,48%</b></p></div>
      <div class="sd-card"><b>3 năm, 25%</b><p>1,25<sup>1/3</sup> - 1</p><p><b>7,72%</b> (không phải 8,33%)</p></div>
      <div class="sd-card"><b>0,4%/tuần</b><p>1,004<sup>52</sup> - 1</p><p><b>23,07%</b></p></div></div>
      <p class="sd-note">Giả định return lặp lại được. Quy kỳ rất ngắn lên năm dễ phóng đại.</p>`),

    S('Continuously compounded: cộng được', `<div class="sd-f">r<sub>cc</sub> = ln(1 + HPR) = ln(P<sub>1</sub>/P<sub>0</sub>)</div>
      ${tl(2, [{ t: 0, label: '50', cls: 'pv' }, { t: 1, label: '55 · +9,531%' }, { t: 2, label: '49,5 · -10,536%', cls: 'down' }], { h: 130 })}
      <div class="sd-rule">9,531% - 10,536% = ln(49,5/50) <b>-1,005%</b></div>
      <p class="sd-note">BA II Plus: 55 <kbd>÷</kbd> 50 <kbd>=</kbd> <kbd>LN</kbd> → 0.0953</p>`),

    S('Từ gross đến real: nhà đầu tư giữ lại bao nhiêu?', `<div class="sd-cols2 wide-left"><div>${waterfall}</div>
      <div><div class="sd-steps"><span>Net = 9,5% - 1,2%</span><span>Sau thuế = 3% × 0,85 + 5,3% × 0,80</span><span>Thực = 1,0679 / 1,03 - 1</span></div>
      <p class="sd-note">Gross: đã trừ chi phí giao dịch, <b>chưa</b> trừ phí quản lý.</p></div></div>`),

    S('Leveraged return: khuếch đại hai chiều', `<div class="sd-cols2 wide-left"><div>${levChart()}</div>
      <div><div class="sd-f sm">R<sub>L</sub> = R + ${frac('V<sub>B</sub>', 'V<sub>E</sub>')}(R - r<sub>D</sub>)</div>
      <p class="sd-note">Vốn 400.000, vay 600.000 lãi 5%</p>
      <div class="sd-rule up">R = 9% <b>15%</b></div><div class="sd-rule down">R = -4% <b>-17,5%</b></div></div></div>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>HPR: nhớ cộng cổ tức</span><span>Nhiều kỳ: nhân (1 + R)</span>
      <span>Nhân ≤ cộng; nhân cho quá khứ</span><span>Mua đều tiền → điều hòa</span>
      <span>Trimmed bỏ; winsorized thay</span><span>Annualize bằng số mũ</span>
      <span>ln(1 + HPR) cộng được</span><span>Đòn bẩy: R + (V<sub>B</sub>/V<sub>E</sub>)(R - r<sub>D</sub>)</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 8 câu, mục tiêu ≥ 6 câu đúng.</p>`),
  ];

  addDeck('QM-02', `Slide Types of Returns - bản thiết kế riêng (${slides.length} slide)`, slides);
}());
