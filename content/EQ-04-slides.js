// Bộ slide tự thiết kế cho EQ-04 Sources of Equity Returns.
(function () {
  const L = window.LESSONS && window.LESSONS['EQ-04'];
  if (!L) return;
  const { slide, addDeck, frac, tl } = window.CFAH;
  const K = 'EQ-04 · Sources of Equity Returns';
  const S = (title, body, opt = {}) => slide(title, body, Object.assign({ kicker: K }, opt));
  const fmt = (x, d = 2) => x.toFixed(d).replace('.', ',').replace(/\B(?=(\d{3})+,)/g, '.');

  // Chia tách: cùng chiếc bánh, nhiều miếng hơn.
  const splitPic = (() => {
    let s = '<svg viewBox="0 0 600 210" class="sv big" role="img" aria-label="Chia tách và gộp cổ phiếu không đổi tổng giá trị">';
    s += '<rect x="30" y="40" width="160" height="120" rx="10" class="sv-panel"/><text x="110" y="95" class="sv-txt">1 CP × 90</text><text x="110" y="122" class="sv-muted">= 90</text>';
    s += '<line x1="200" y1="100" x2="240" y2="100" class="sv-up"/><text x="220" y="85" class="sv-muted" style="font-size:13px">2-for-1</text>';
    s += '<rect x="250" y="40" width="78" height="120" rx="10" class="sv-panel"/><rect x="332" y="40" width="78" height="120" rx="10" class="sv-panel"/>';
    s += '<text x="289" y="105" class="sv-txt">45</text><text x="371" y="105" class="sv-txt">45</text>';
    s += '<text x="330" y="190" class="sv-txt sv-t-up">2 CP × 45 = 90</text>';
    s += '<rect x="450" y="40" width="130" height="120" rx="10" class="sv-key"/><text x="515" y="88" class="sv-txt" style="font-size:15px">Gộp 1-for-10</text><text x="515" y="112" class="sv-muted" style="font-size:13px">10 × 0,80 → 1 × 8</text><text x="515" y="134" class="sv-muted" style="font-size:13px">tổng không đổi</text>';
    s += '<text x="110" y="190" class="sv-muted">trước</text></svg>';
    return s;
  })();

  // EPS sau mua lại theo chi phí nợ sau thuế (ví dụ 4.1).
  const epsBars = (() => {
    const rows = [[0.04, 'Chi phí 4%'], [0.05, 'Chi phí 5%'], [0.06, 'Chi phí 6%']].map(([k, l]) => [l, (10 - 20 * k) / 4.5]);
    return `<div class="sd-bars">${rows.map(([l, v]) => `<div class="sd-bar"><span class="sd-bar-l">${l}</span><span class="sd-bar-t"><i style="width:${((v - 1.9) / 0.16) * 100}%"></i></span><b class="${v > 2.0001 ? 'sv-t-up' : v < 1.9999 ? 'sv-t-down' : ''}">${fmt(v, 4)}</b></div>`).join('')}</div>`;
  })();

  // Tăng trưởng 10.000 USD: total return (tái đầu tư) và price return (ví dụ 6.3).
  function growth() {
    const P = [50, 54, 49, 58], D = [1.5, 1.6, 1.7];
    const trv = [10000], prv = [10000];
    for (let i = 0; i < 3; i++) { trv.push(trv[i] * (P[i + 1] + D[i]) / P[i]); prv.push(prv[i] * P[i + 1] / P[i]); }
    const W = 600, H = 270, l = 70, r = 560, t = 20, b = 220;
    const xs = i => l + (i / 3) * (r - l), ys = v => b - ((v - 9000) / 4000) * (b - t);
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv" role="img" aria-label="Giá trị 10.000 USD theo total return và price return">`;
    s += `<line x1="${l}" y1="${b}" x2="${r}" y2="${b}" class="sv-axis"/><line x1="${l}" y1="${t}" x2="${l}" y2="${b}" class="sv-axis"/>`;
    [10000, 11000, 12000, 13000].forEach(v => { s += `<line x1="${l}" y1="${ys(v)}" x2="${r}" y2="${ys(v)}" class="sv-grid"/><text x="${l - 8}" y="${ys(v) + 5}" class="sv-muted" text-anchor="end">${fmt(v / 1000, 0)}k</text>`; });
    [0, 1, 2, 3].forEach(i => { s += `<text x="${xs(i)}" y="${b + 24}" class="sv-muted">năm ${i}</text>`; });
    s += `<polyline points="${trv.map((v, i) => `${xs(i)},${ys(v).toFixed(1)}`).join(' ')}" class="sv-up" fill="none"/>`;
    s += `<polyline points="${prv.map((v, i) => `${xs(i)},${ys(v).toFixed(1)}`).join(' ')}" class="sv-dash" fill="none"/>`;
    trv.forEach((v, i) => { s += `<circle cx="${xs(i)}" cy="${ys(v)}" r="5" class="sv-dot"/>`; });
    s += `<text x="${xs(3) - 8}" y="${ys(trv[3]) - 12}" class="sv-txt sv-t-up" text-anchor="end">Total return ${fmt(trv[3])}</text>`;
    s += `<text x="${xs(3) - 8}" y="${ys(prv[3]) + 24}" class="sv-txt sv-muted" text-anchor="end">Price return ${fmt(prv[3])}</text>`;
    return `${s}</svg>`;
  }

  const slides = [
    S('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Equities · EQ-04</div>
      <h2>Sources of<br>Equity Returns</h2>
      <p>Cổ tức, mua lại cổ phiếu và thay đổi giá</p>
      <div class="sd-chips"><span>LOS 1 · Cổ tức, mua lại, chia tách</span><span>LOS 2 · Trình tự chi trả</span><span>LOS 3 · Price và total return</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Hai nguồn lợi suất', `<div class="sd-big">Total return = ${frac('P<sub>1</sub> - P<sub>0</sub>', 'P<sub>0</sub>')} + ${frac('D<sub>1</sub>', 'P<sub>0</sub>')}</div>
      <div class="sd-cols2"><div class="sd-card"><b>Trả tiền ra thật</b><p>Cổ tức tiền mặt · mua lại cổ phiếu</p></div><div class="sd-card acc"><b>Chỉ chia lại chiếc bánh</b><p>Cổ tức bằng cổ phiếu · chia tách · gộp</p></div></div>
      <p class="sd-note">Mua 50, cổ tức 1,50, bán 54 → 8% + 3% = <b>11%</b>.</p>`),

    S('Ba loại cổ tức tiền mặt', `<div class="sd-cols3">
      <div class="sd-card acc"><b>Thường kỳ</b><p>Đều đặn, "dính": công ty rất ngại cắt</p><small>Cắt cổ tức = tín hiệu xấu</small></div>
      <div class="sd-card"><b>Đặc biệt</b><p>Một lần, khi lợi nhuận bất thường hoặc tiền dư</p><small>Không tạo kỳ vọng lặp lại</small></div>
      <div class="sd-card"><b>Thanh lý</b><p>Trả lại vốn khi thu hẹp, bán mảng, giải thể</p><small>Vượt lợi nhuận giữ lại</small></div></div>`),

    S('Payout, dividend yield và bẫy "15%"', `<div class="sd-cols2">
      <div><div class="sd-f sm">Payout = ${frac('DPS', 'EPS')} = ${frac('1,60', '4')} = 40%</div><div class="sd-f sm">Dividend yield = ${frac('DPS', 'Giá')} = ${frac('1,60', '40')} = 4%</div></div>
      <div><div class="sd-rule down">"Cổ tức 15%" ở Việt Nam ≠ lợi suất 15%</div><div class="sd-rule up">15% × mệnh giá 10.000 <b>1.500 đồng</b></div>
      <p class="sd-note">Giá 30.000 → lợi suất cổ tức thật = <b>5%</b>.</p></div></div>`),

    S('Chia tách: cùng chiếc bánh, nhiều miếng hơn', `${splitPic}
      <p class="sd-note">Cổ tức cổ phiếu 10%: 1.000 CP × 33 = 1.100 CP × 30 = <b>33.000</b>. 3-for-2: giá chia 1,5.</p>`),

    S('Tác động lên các chỉ tiêu', `<div class="sd-tbl grid"><div class="head"><span>Chỉ tiêu</span><span>Split, CP thưởng</span><span>Gộp</span><span>Cổ tức tiền</span></div>
      <div><span>Số cổ phiếu</span><span>Tăng</span><span>Giảm</span><span>Không đổi</span></div>
      <div><span>Giá mỗi CP</span><span>Giảm</span><span>Tăng</span><span>Giảm ≈ D</span></div>
      <div><span>EPS, BVPS</span><span>Giảm</span><span>Tăng</span><span>BVPS giảm</span></div>
      <div><span>Tài sản cổ đông</span><span>Không đổi</span><span>Không đổi</span><span>Không đổi</span></div>
      <div><span>Tiền ra khỏi công ty</span><span>Không</span><span>Không</span><span>Có</span></div></div>
      <p class="sd-note">Gộp cổ phiếu: thường để giữ ngưỡng giá niêm yết, hay gặp ở công ty khó khăn.</p>`),

    S('Bốn cách mua lại cổ phiếu', `<div class="sd-grid4">
      <div class="sd-card acc"><b>Trên thị trường</b><p>Phổ biến nhất, linh hoạt, rẻ</p></div>
      <div class="sd-card"><b>Chào mua giá cố định</b><p>Số lượng và giá định trước, thường cao hơn thị trường</p></div>
      <div class="sd-card"><b>Dutch auction</b><p>Giá <b>thấp nhất</b> đủ mua số lượng mục tiêu, trả chung cho mọi người bán</p></div>
      <div class="sd-card"><b>Thỏa thuận trực tiếp</b><p>Mua khối lớn từ một cổ đông</p></div></div>
      <p class="sd-note">Cổ phiếu mua lại → cổ phiếu quỹ: không biểu quyết, không nhận cổ tức.</p>`),

    S('Mua lại làm EPS tăng hay giảm?', `<div class="sd-cols2 wide-left"><div>${epsBars}<p class="sd-cap">NI 10 triệu, 5 triệu CP, giá 40; vay 20 triệu mua 0,5 triệu CP</p></div>
      <div><div class="sd-rule up">Chi phí sau thuế &lt; earnings yield → EPS <b>tăng</b></div><div class="sd-rule">Bằng (5% = 2 / 40) → <b>không đổi</b></div><div class="sd-rule down">Lớn hơn → EPS <b>giảm</b></div></div></div>`),

    S('BVPS và sự tương đương với cổ tức', `<div class="sd-cols2">
      <div class="sd-card"><b>BVPS (vốn 100, 5 triệu CP, BVPS 20)</b><p>Dùng 20 mua ở giá 40 → <b>17,78</b> (giảm)</p><p>Dùng 20 mua ở giá 15 → <b>21,82</b> (tăng)</p></div>
      <div class="sd-card acc"><b>Tài sản của 100 cổ phiếu</b><p>Cổ tức 4: 100 × 36 + 400 = <b>4.000</b></p><p>Mua lại ở 40: 100 × 40 = <b>4.000</b></p><small>Bỏ qua thuế và tín hiệu</small></div></div>
      <p class="sd-note">Mua lại: linh hoạt, tín hiệu định giá thấp, bù pha loãng ESOP, lợi thế thuế. Không bắt buộc mua hết.</p>`),

    S('Trình tự chi trả cổ tức', `${tl(3, [{ t: 0, label: 'Công bố 2/3', cls: 'up', above: true }, { t: 1, label: 'Ex-date 19/3', cls: 'pv' }, { t: 2, label: 'Chốt 20/3', cls: 'up', above: true }, { t: 3, label: 'Trả tiền 10/4', cls: 'up' }], { h: 150, ticks: ['T2', 'T5', 'T6', 'T6'] })}
      <div class="sd-steps"><span>Công bố → cổ tức thành <b>nợ phải trả</b></span><span>Mua từ <b>ex-date</b> trở đi → không nhận cổ tức; giá giảm ≈ cổ tức</span><span>Có tên vào ngày chốt → được nhận</span></div>`),

    S('Ex-date phụ thuộc chu kỳ thanh toán', `<div class="sd-cols2">
      <div class="sd-card"><b>T + 2 (Việt Nam)</b><p>Ex-date = <b>1 ngày làm việc trước</b> ngày chốt</p><p>Chốt thứ Sáu 20/3 → ex-date thứ Năm 19/3</p><p>Muốn nhận: mua chậm nhất thứ Tư 18/3</p></div>
      <div class="sd-card acc"><b>T + 1 (Mỹ từ 5/2024)</b><p>Ex-date <b>trùng</b> ngày chốt</p></div></div>
      <div class="sd-rule">Giá tham chiếu ngày ex-date: 40.000 - 800 <b>39.200 đồng</b></div><p class="sd-note">"Ăn cổ tức" không phải bữa trưa miễn phí: giá giảm khoảng bằng cổ tức.</p>`),

    S('Total return: một kỳ và khi có chia tách', `<div class="sd-cols2">
      <div class="sd-card"><b>Một kỳ</b><p>Mua 50, cổ tức 1,50, giá cuối 54</p><p>Price 8% + yield 3% = <b>11%</b></p></div>
      <div class="sd-card acc"><b>Có chia tách 2-for-1</b><p>100 CP × 80 = 8.000 → 200 CP × 44 + 200 × 0,50 = 8.900</p><p>Total return = <b>11,25%</b></p></div></div>
      <div class="sd-rule down">Quên chia tách: (44 - 80 + 0,5) / 80 = -44,38% <b>sai</b></div>`),

    S('Nhiều kỳ: tái đầu tư cổ tức tạo khác biệt', `<div class="sd-cols2 wide-left"><div>${growth()}</div>
      <div><div class="sd-steps"><span>TR từng năm: 11,00% · -6,30% · 21,84%</span><span>Tích lũy: <b>26,72%</b>, bình quân năm <b>8,21%</b></span><span>Price return: 16,00%, năm <b>5,07%</b></span></div>
      <p class="sd-note">BA II Plus: N = 3, PV = -10000, PMT = 0, FV = 12672.37 → <kbd>CPT</kbd> <kbd>I/Y</kbd> = 8,21</p></div></div>`),

    S('Cổ phiếu nước ngoài: nhân, không cộng', `<div class="sd-f">1 + R<sub>USD</sub> = (1 + R<sub>EUR</sub>) × (1 + R<sub>tỷ giá</sub>)</div>
      <div class="sd-steps"><span>R<sub>EUR</sub> = (86 - 80 + 2) / 80 = 10%</span><span>R<sub>tỷ giá</sub> = 1,05 / 1,10 - 1 = -4,55%</span><span>R<sub>USD</sub> = 1,10 × 0,95455 - 1 = <b>5,00%</b></span></div>
      <p class="sd-note">Cộng 10% - 4,55% = 5,45% chỉ là xấp xỉ.</p>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>Cổ tức % ở Việt Nam tính trên mệnh giá</span><span>Split, CP thưởng: tài sản không đổi</span>
      <span>3-for-2: giá chia 1,5</span><span>Mua lại: EPS tăng nếu chi phí &lt; E/P</span>
      <span>Mua trên BVPS → BVPS giảm</span><span>Mua từ ex-date: không nhận cổ tức</span>
      <span>TR = (P₁ - P₀ + D) / P₀</span><span>Nhiều kỳ, tỷ giá: nhân các (1 + R)</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 10 câu, mục tiêu ≥ 7 câu đúng.</p>`),
  ];

  addDeck('EQ-04', `Slide Sources of Equity Returns - bản thiết kế riêng (${slides.length} slide)`, slides);
}());
