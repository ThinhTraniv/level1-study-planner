// Bộ slide tự thiết kế cho PC-05 The Behavioral Biases of Individuals.
(function () {
  const L = window.LESSONS && window.LESSONS['PC-05'];
  if (!L) return;
  const { frac, slide, addDeck } = window.CFAH;
  const K = 'PC-05 · Behavioral Biases';
  const S = (title, body, opt = {}) => slide(title, body, Object.assign({ kicker: K }, opt));
  const fmt = (x, d = 2) => x.toFixed(d).replace('.', ',');

  // Đường giá trị của prospect theory: v(x) = x^0,88 khi lãi, -2,25(-x)^0,88 khi lỗ.
  function valueFn() {
    const W = 600, H = 320, cx = 300, cy = 160, sx = 2.6, top = 140;
    const v = x => (x >= 0 ? x ** 0.88 : -2.25 * (-x) ** 0.88);
    const vmax = 2.25 * 100 ** 0.88;
    const Y = y => cy - (y / vmax) * top;
    let p = '';
    for (let x = -100; x <= 100.01; x += 2) p += `${(cx + x * sx).toFixed(1)},${Y(v(x)).toFixed(1)} `;
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv big" role="img" aria-label="Đường giá trị của prospect theory">`;
    s += `<line x1="30" y1="${cy}" x2="570" y2="${cy}" class="sv-axis"/><line x1="${cx}" y1="10" x2="${cx}" y2="310" class="sv-axis"/>`;
    s += `<polyline points="${p}" class="sv-curve"/>`;
    s += `<line x1="${cx + 100 * sx}" y1="${cy}" x2="${cx + 100 * sx}" y2="${Y(v(100))}" class="sv-up"/><line x1="${cx - 100 * sx}" y1="${cy}" x2="${cx - 100 * sx}" y2="${Y(v(-100))}" class="sv-down"/>`;
    s += `<text x="${cx + 100 * sx - 6}" y="${Y(v(100)) - 10}" class="sv-txt sv-t-up" text-anchor="end">lãi 100: +${fmt(v(100), 0)}</text>`;
    s += `<text x="${cx - 100 * sx + 8}" y="${cy + 30}" class="sv-txt sv-t-down" text-anchor="start">lỗ 100: ${fmt(v(-100), 0)}</text>`;
    s += `<text x="560" y="${cy + 24}" class="sv-muted" text-anchor="end">lãi</text><text x="40" y="${cy - 10}" class="sv-muted" text-anchor="start">lỗ</text><text x="${cx + 8}" y="24" class="sv-muted" text-anchor="start">giá trị cảm nhận</text>`;
    return `${s}</svg>`;
  }

  // Vòng đời bong bóng minh họa.
  function bubble() {
    const W = 600, H = 280, l = 30, r = 580, b = 240;
    const p = x => 20 + 80 * Math.exp(-(((x - 6) / (x < 6 ? 2.4 : 0.9)) ** 2));
    const X = x => l + (x / 10) * (r - l), Y = y => b - (y / 105) * (b - 20);
    let pts = '';
    for (let x = 0; x <= 10.001; x += 0.1) pts += `${X(x).toFixed(1)},${Y(p(x)).toFixed(1)} `;
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv big" role="img" aria-label="Vòng đời bong bóng">`;
    s += `<line x1="${l}" y1="${b}" x2="${r}" y2="${b}" class="sv-axis"/><line x1="${l}" y1="${Y(25)}" x2="${r}" y2="${Y(25)}" class="sv-dash"/><text x="${r}" y="${Y(25) - 8}" class="sv-muted" text-anchor="end">giá trị cơ bản</text>`;
    s += `<polyline points="${pts}" class="sv-curve"/>`;
    s += `<text x="${X(2.6)}" y="${Y(p(3.4)) - 10}" class="sv-txt sv-t-up" text-anchor="end">Overconfidence</text><text x="${X(2.6)}" y="${Y(p(3.4)) + 14}" class="sv-muted" text-anchor="end">confirmation</text>`;
    s += `<text x="${X(5.5)}" y="${Y(103)}" class="sv-txt" text-anchor="end">Herding, regret</text>`;
    s += `<text x="${X(7.2)}" y="${Y(70)}" class="sv-txt sv-t-down" text-anchor="start">Loss aversion</text>`;
    s += `<text x="${(l + r) / 2}" y="${H - 6}" class="sv-muted">Thời gian (minh họa)</text>`;
    return `${s}</svg>`;
  }

  const bar = (lab, v) => `<div class="sd-bar"><span class="sd-bar-l">${lab}</span><span class="sd-bar-t"><i style="width:${v}%"></i></span><b>${fmt(v)}%</b></div>`;
  const pg = (0.1 * 0.512) / (0.1 * 0.512 + 0.9 * 0.125) * 100;

  const slides = [
    S('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Portfolio Construction · PC-05</div>
      <h2>The Behavioral Biases<br>of Individuals</h2>
      <p>Vì sao nhà đầu tư nói một đằng, làm một nẻo</p>
      <div class="sd-chips"><span>LOS 1 · Nhận thức và cảm xúc</span><span>LOS 2 · 15 thiên lệch</span><span>LOS 3 · Tác động lên thị trường</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Hai cách nhìn nhà đầu tư', `<div class="sd-cols2">
      <div class="sd-card"><b>Tài chính truyền thống</b><p>Lý trí, cập nhật theo Bayes, ngại rủi ro nhất quán.</p><small>Thị trường hiệu quả</small></div>
      <div class="sd-card acc"><b>Tài chính hành vi</b><p>Con người thật: dùng lối tắt, bị cảm xúc chi phối.</p><small>Lệch có hệ thống, dự đoán được</small></div></div>
      <p class="sd-note">Thiên lệch không phải ngẫu nhiên. Nếu nhiều người cùng lệch một hướng, giá thị trường cũng lệch.</p>`),

    S('Bản đồ 15 thiên lệch', `<div class="sd-cols3">
      <div class="sd-card"><b>Nhận thức: bảo thủ niềm tin (5)</b><p>Conservatism · Confirmation · Representativeness · Illusion of control · Hindsight</p></div>
      <div class="sd-card"><b>Nhận thức: xử lý thông tin (4)</b><p>Anchoring · Mental accounting · Framing · Availability</p></div>
      <div class="sd-card acc"><b>Cảm xúc (6)</b><p>Loss aversion · Overconfidence · Self-control · Status quo · Endowment · Regret aversion</p></div></div>
      <p class="sd-note">9 lỗi nhận thức chia 2 nhóm con; 6 thiên lệch cảm xúc không chia nhóm.</p>`),

    S('Nhận thức hay cảm xúc?', `<div class="sd-tbl grid">
      <div class="head"><span></span><span>Nhận thức</span><span>Cảm xúc</span></div>
      <div><span>Gốc rễ</span><span>Suy nghĩ sai</span><span>Cảm giác</span></div>
      <div><span>Giải thích có sửa được?</span><span>Thường được</span><span>Khó</span></div>
      <div><span>Xử lý</span><span><b>Moderate</b></span><span><b>Adapt</b></span></div></div>
      <p class="sd-note">Câu hỏi thử: "Nếu được giải thích rõ, họ có tự sửa không?" Có → nhận thức.</p>`),

    S('Bảo thủ niềm tin: bám lấy điều mình tin', `<div class="sd-tbl grid">
      <div class="head"><span>Thiên lệch</span><span>Dấu hiệu</span></div>
      <div><span>Conservatism</span><span>Có tin mới, cập nhật quá chậm</span></div>
      <div><span>Confirmation</span><span>Chỉ đọc tin ủng hộ</span></div>
      <div><span>Representativeness</span><span>Khuôn mẫu, mẫu nhỏ, quên tỷ lệ nền</span></div>
      <div><span>Illusion of control</span><span>"Tôi tự làm thì kết quả tốt hơn"</span></div>
      <div><span>Hindsight</span><span>"Tôi biết từ trước rồi"</span></div></div>
      <p class="sd-note">Gốc chung: <b>cognitive dissonance</b> - khó chịu khi thông tin mâu thuẫn niềm tin.</p>`),

    S('Representativeness: quỹ thắng 3 năm liền', `<div class="sd-cols2">
      <div><p class="sd-cap">10% quỹ giỏi; giỏi thắng 80%/năm, không giỏi 50%/năm</p>
      ${bar('Tỷ lệ nền', 10)}${bar('P(thắng 3 | giỏi)', 51.2)}${bar('P(giỏi | thắng 3)', pg)}</div>
      <div><div class="sd-f sm">${frac('0,1 × 0,512', '0,1 × 0,512 + 0,9 × 0,125')} = <b>${fmt(pg)}%</b></div>
      <p class="sd-note">Gần 70% khả năng chỉ là may mắn. Bỏ qua tỷ lệ nền và cỡ mẫu nhỏ.</p></div></div>`),

    S('Xử lý thông tin: bộ não dùng lối tắt', `<div class="sd-grid4">
      <div class="sd-card"><b>Anchoring</b><p>Neo vào con số đầu tiên: EPS năm trước, giá mua.</p></div>
      <div class="sd-card"><b>Mental accounting</b><p>"Tiền thưởng" tiêu mạo hiểm hơn "tiền lương".</p></div>
      <div class="sd-card"><b>Framing</b><p>"90% thành công" khác "10% thất bại".</p></div>
      <div class="sd-card"><b>Availability</b><p>Tin nóng, dễ nhớ → bị đánh giá quá cao.</p></div></div>`),

    S('Dễ nhầm: ba kiểu "chậm cập nhật"', `<div class="sd-rule">Conservatism <b>có tin mới nhưng cập nhật quá chậm</b></div>
      <div class="sd-rule">Confirmation <b>chủ động lọc, chỉ tìm tin ủng hộ</b></div>
      <div class="sd-rule">Anchoring <b>bắt đầu từ một con số, điều chỉnh quá ít</b></div>
      <p class="sd-note">Đề có <b>con số khởi điểm</b> → anchoring. Đề có <b>tìm kiếm, đọc tin</b> → confirmation.</p>`),

    S('Prospect theory: lỗ đau gấp đôi', `<div class="sd-cols2 wide-left"><div>${valueFn()}</div>
      <div><div class="sd-steps"><span>Đánh giá theo <b>lãi, lỗ so với điểm tham chiếu</b></span><span>Đường dốc hơn ở phía lỗ</span><span>Lãi: ngại rủi ro. Lỗ: thích rủi ro để "gỡ"</span></div>
      <p class="sd-note">Đường minh họa theo Kahneman - Tversky.</p></div></div>`),

    S('Loss aversion trong thực tế', `<div class="sd-cols2">
      <div class="sd-card"><b>Tung đồng xu: +150 hoặc -100</b><p>Kỳ vọng: 0,5 × 150 - 0,5 × 100 = <b>+25</b></p><p>Cảm nhận (lỗ ×2): 0,5 × 150 - 0,5 × 200 = <b>-25</b></p><small>Từ chối một trò chơi có lợi</small></div>
      <div class="sd-card acc"><b>Disposition effect</b><p>Bán cổ phiếu lãi quá sớm.</p><p>Giữ cổ phiếu lỗ quá lâu, "chưa bán thì chưa lỗ".</p><small>Có khi mua bình quân giá xuống</small></div></div>`),

    S('Các thiên lệch cảm xúc còn lại', `<div class="sd-tbl grid">
      <div class="head"><span>Thiên lệch</span><span>Dấu hiệu</span><span>Hậu quả</span></div>
      <div><span>Overconfidence</span><span>Khoảng dự báo quá hẹp</span><span>Giao dịch nhiều</span></div>
      <div><span>Self-control</span><span>Tiêu trước, để dành sau</span><span>Thiếu tiền hưu</span></div>
      <div><span>Status quo</span><span>Quán tính, không đổi</span><span>Giữ mặc định</span></div>
      <div><span>Endowment</span><span>"Của tôi nên quý"</span><span>Không bán</span></div>
      <div><span>Regret aversion</span><span>Sợ sai rồi tiếc</span><span>Quá thận trọng, herding</span></div></div>`),

    S('Ba lý do khác nhau để "không bán"', `<div class="sd-cols3">
      <div class="sd-card"><b>Status quo</b><p>"Đổi phiền lắm, cứ để vậy."</p><small>Quán tính</small></div>
      <div class="sd-card"><b>Endowment</b><p>"Cổ phiếu bố để lại, quý lắm."</p><small>Gắn bó với tài sản</small></div>
      <div class="sd-card acc"><b>Regret aversion</b><p>"Lỡ bán xong nó tăng thì sao?"</p><small>Sợ hối tiếc</small></div></div>
      <p class="sd-note">Thêm loss aversion: "Bán là chốt lỗ, đau lắm." Đọc kỹ <b>lý do</b> trong đề.</p>`),

    S('Từ cá nhân đến thị trường', `<div class="sd-tbl grid">
      <div class="head"><span>Hiện tượng</span><span>Thiên lệch giải thích</span></div>
      <div><span>Momentum</span><span>Herding, availability, regret, hindsight</span></div>
      <div><span>Bong bóng và sụp đổ</span><span>Overconfidence, confirmation, loss aversion</span></div>
      <div><span>Value thắng growth</span><span>Halo effect: công ty tốt = cổ phiếu tốt</span></div>
      <div><span>Home bias</span><span>Quen thuộc, ảo tưởng kiểm soát</span></div></div>
      <p class="sd-note">Cẩn thận: nhiều "bất thường" là data mining hoặc phần bù rủi ro chưa đo.</p>`),

    S('Vòng đời một bong bóng', `<div class="sd-cols2 wide-left"><div>${bubble()}</div>
      <div><div class="sd-steps"><span>① Giá tăng → overconfidence, confirmation</span><span>② Đám đông kéo vào → herding, regret</span><span>③ Đảo chiều → loss aversion, hoảng loạn</span></div></div></div>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>Nhận thức: moderate. Cảm xúc: adapt</span><span>Overconfidence thuộc nhóm cảm xúc</span>
      <span>Bảo thủ niềm tin: 5 thiên lệch</span><span>Xử lý thông tin: 4 thiên lệch</span>
      <span>Representativeness: quên tỷ lệ nền</span><span>Loss aversion → disposition effect</span>
      <span>Đọc lý do để phân biệt "không bán"</span><span>Thiên lệch cộng dồn → bất thường</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 10 câu tình huống.</p>`),
  ];

  addDeck('PC-05', 'Slide Behavioral Biases - bản thiết kế riêng (15 slide)', slides);
}());
