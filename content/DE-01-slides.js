// Bộ slide tự thiết kế cho DE-01 Derivative Instrument and Derivative Market Features.
(function () {
  const L = window.LESSONS && window.LESSONS['DE-01'];
  if (!L) return;
  const { slide, addDeck } = window.CFAH;
  const K = 'DE-01 · Derivative Features';
  const S = (title, body, opt = {}) => slide(title, body, Object.assign({ kicker: K }, opt));
  const fmt = (x, d = 0) => x.toFixed(d).replace('.', ',');

  // Sơ đồ: tài sản cơ sở quyết định giá trị phái sinh.
  const derivFlow = `<svg viewBox="0 0 600 170" class="sv big" role="img" aria-label="Giá trị phái sinh phụ thuộc vào tài sản cơ sở">
    <rect x="20" y="40" width="210" height="90" rx="14" class="sv-panel"/><text x="125" y="80" class="sv-txt">Tài sản cơ sở</text><text x="125" y="108" class="sv-muted">giá gà, chỉ số, lãi suất...</text>
    <line x1="240" y1="85" x2="360" y2="85" class="sv-up"/><polygon points="360,75 378,85 360,95" class="sv-dot"/>
    <text x="305" y="70" class="sv-muted">quyết định</text>
    <rect x="385" y="40" width="195" height="90" rx="14" class="sv-key"/><text x="482" y="80" class="sv-txt">Phái sinh</text><text x="482" y="108" class="sv-muted">hợp đồng, lời / lỗ</text></svg>`;

  // Lợi suất trên vốn: mua cổ phiếu và mua futures ký quỹ 10%.
  function levBars() {
    const cash = 1000 * 50, mg = 0.1 * cash, gain = 1000 * 3;
    const rows = [['Mua cổ phiếu (50.000)', gain / cash], ['Futures, ký quỹ 10% (5.000)', gain / mg]];
    return `<div class="sd-bars">${rows.map(([lab, v]) => `<div class="sd-bar"><span class="sd-bar-l">${lab}</span><span class="sd-bar-t"><i style="width:${v * 100 / 0.6 * 0.98}%"></i></span><b>+${fmt(v * 100)}%</b></div>`).join('')}</div>`;
  }

  // Novation: trước và sau khi CCP chen vào giữa.
  const novation = `<svg viewBox="0 0 600 230" class="sv big" role="img" aria-label="CCP đứng giữa người mua và người bán">
    <text x="20" y="34" class="sv-muted" text-anchor="start">Song phương (OTC)</text>
    <line x1="120" y1="70" x2="480" y2="70" class="sv-down"/>
    <circle cx="100" cy="70" r="30" class="sv-node"/><text x="100" y="77" class="sv-txt">A</text>
    <circle cx="500" cy="70" r="30" class="sv-node"/><text x="500" y="77" class="sv-txt">B</text>
    <text x="300" y="60" class="sv-t-down sv-txt">A chịu rủi ro B vỡ nợ</text>
    <text x="20" y="140" class="sv-muted" text-anchor="start">Qua CCP (novation)</text>
    <line x1="120" y1="180" x2="250" y2="180" class="sv-up"/><line x1="350" y1="180" x2="480" y2="180" class="sv-up"/>
    <circle cx="100" cy="180" r="30" class="sv-node"/><text x="100" y="187" class="sv-txt">A</text>
    <rect x="250" y="152" width="100" height="56" rx="12" class="sv-key"/><text x="300" y="187" class="sv-keyt">CCP</text>
    <circle cx="500" cy="180" r="30" class="sv-node"/><text x="500" y="187" class="sv-txt">B</text>
    <text x="185" y="168" class="sv-muted">mua từ CCP</text><text x="415" y="168" class="sv-muted">bán cho CCP</text></svg>`;

  const slides = [
    S('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Derivatives · DE-01</div>
      <h2>Derivative Instrument and<br>Derivative Market Features</h2>
      <p>Phái sinh là gì - giao dịch ở đâu - như thế nào</p>
      <div class="sd-chips"><span>LOS 1 · Định nghĩa, đặc điểm</span><span>LOS 2 · Thị trường, OTC và sàn</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Phái sinh là gì?', `${derivFlow}
      <div class="sd-f">Giá trị phái sinh = f(giá tài sản cơ sở)</div>
      <p class="sd-note">Hợp đồng bán gà 110 USD/con sau 1 năm không phải là con gà, nhưng lời lỗ của nó do <b>giá gà sau 1 năm</b> quyết định.</p>`),

    S('Sáu thứ mọi hợp đồng phải quy định', `<div class="sd-cols3">
      <div class="sd-card"><div class="sd-n">1</div><b>Tài sản cơ sở</b><p>Giá gà</p></div>
      <div class="sd-card"><div class="sd-n">2</div><b>Quy mô / notional</b><p>1.000 con</p></div>
      <div class="sd-card"><div class="sd-n">3</div><b>Đáo hạn</b><p>Sau 1 năm</p></div>
      <div class="sd-card"><div class="sd-n">4</div><b>Giá thỏa thuận</b><p>110 USD/con</p></div>
      <div class="sd-card"><div class="sd-n">5</div><b>Thanh toán</b><p>Giao hàng hay trả tiền chênh lệch</p></div>
      <div class="sd-card"><div class="sd-n">6</div><b>Các bên</b><p>Long: nhà hàng · Short: người nuôi gà</p></div></div>`),

    S('Long và short: tổng bằng không', `<div class="sd-tbl grid">
      <div class="head"><span>Giá gà khi đáo hạn</span><span>95</span><span>110</span><span>125</span></div>
      <div><span>Long (mua ở 110)</span><span>-15</span><span>0</span><span>+15</span></div>
      <div><span>Short (bán ở 110)</span><span>+15</span><span>0</span><span>-15</span></div>
      <div><span>Tổng hai bên</span><span>0</span><span>0</span><span>0</span></div></div>
      <p class="sd-note">Long lời khi giá <b>tăng</b>, short lời khi giá <b>giảm</b>. Lời của bên này = lỗ của bên kia (chưa tính phí).</p>`),

    S('Hai cách thanh toán', `<div class="sd-cols2">
      <div class="sd-card"><b>Giao nhận vật chất</b><p>Short giao tài sản thật, long trả giá thỏa thuận.</p><small>Hàng hóa, trái phiếu, ngoại tệ</small></div>
      <div class="sd-card acc"><b>Thanh toán bằng tiền</b><p>Không giao hàng, bên lỗ trả <b>chênh lệch</b>.</p><small>Chỉ số chứng khoán, lãi suất, thời tiết</small></div></div>
      <p class="sd-note">Ví dụ: giá gà đáo hạn 125. Giao hàng: nhà hàng trả 110 và nhận gà. Bằng tiền: người nuôi gà trả 15 USD/con, không giao gà.</p>`),

    S('Đòn bẩy: ít vốn, lời lỗ lớn', `<p class="sd-cap">1.000 cổ phiếu giá 50 tăng lên 53 (lời 3.000 USD):</p>${levBars()}
      <div class="sd-cols2"><div class="sd-rule up">Giá lên 53 <b>+60% trên ký quỹ</b></div><div class="sd-rule down">Giá xuống 47 <b>-60% trên ký quỹ</b></div></div>
      <p class="sd-note">Forward: vốn ban đầu 0 · Futures: chỉ ký quỹ · Option: chỉ trả phí. Đòn bẩy khuếch đại <b>cả hai chiều</b>.</p>`),

    S('Tài sản cơ sở: gần như mọi thứ đo được', `<div class="sd-cols3">
      <div class="sd-card"><b>Cổ phiếu</b><p>Một mã, rổ, chỉ số VN30</p></div>
      <div class="sd-card"><b>Lãi suất, trái phiếu</b><p>SOFR, trái phiếu chính phủ</p></div>
      <div class="sd-card"><b>Tiền tệ</b><p>EUR/USD, USD/VND</p></div>
      <div class="sd-card"><b>Hàng hóa</b><p>Dầu, vàng, cà phê</p></div>
      <div class="sd-card"><b>Tín dụng</b><p>Rủi ro vỡ nợ (CDS)</p></div>
      <div class="sd-card acc"><b>Khác</b><p>Thời tiết, tuổi thọ, một phái sinh khác</p></div></div>
      <p class="sd-note">Không cần mua bán được, chỉ cần <b>đo được khách quan</b>.</p>`),

    S('Ai tham gia thị trường?', `<div class="sd-cols3">
      <div class="sd-card"><div class="sd-n">1</div><b>Người dùng cuối</b><p>Doanh nghiệp, quỹ, ngân hàng, chính phủ.</p><small>Phòng hộ hoặc tạo vị thế</small></div>
      <div class="sd-card"><div class="sd-n">2</div><b>Dealer</b><p>Ngân hàng lớn làm bên đối ứng.</p><small>Kiếm chênh lệch giá mua - bán</small></div>
      <div class="sd-card acc"><div class="sd-n">3</div><b>CCP</b><p>Đứng giữa người mua và người bán.</p><small>Bảo đảm thực hiện hợp đồng</small></div></div>
      <p class="sd-note">Chức năng chung của thị trường: <b>chuyển rủi ro</b> sang người sẵn sàng gánh nó.</p>`),

    S('CCP và novation', `${novation}
      <p class="sd-note">CCP tự bảo vệ bằng <b>ký quỹ ban đầu</b>, <b>thanh toán lãi lỗ hằng ngày</b> và quỹ phòng ngừa của thành viên.</p>`),

    S('Sàn (ETD) và OTC', `<div class="sd-tbl grid">
      <div class="head"><span>Đặc điểm</span><span>Sàn (ETD)</span><span>OTC</span></div>
      <div><span>Điều khoản</span><span>Chuẩn hóa</span><span>Tùy chỉnh</span></div>
      <div><span>Đối tác</span><span>CCP ở giữa</span><span>Song phương</span></div>
      <div><span>Rủi ro đối tác</span><span>Rất thấp</span><span>Cao hơn</span></div>
      <div><span>Ký quỹ, MTM</span><span>Bắt buộc, hằng ngày</span><span>Thỏa thuận</span></div>
      <div><span>Thanh khoản</span><span>Cao</span><span>Thấp hơn</span></div>
      <div><span>Minh bạch</span><span>Cao</span><span>Thấp hơn</span></div>
      <div><span>Quy mô (notional)</span><span>Nhỏ hơn</span><span>Lớn hơn nhiều</span></div></div>`),

    S('Đánh đổi cốt lõi', `<div class="sd-cols2">
      <div><div class="sd-rule up">Sàn <b>thanh khoản, minh bạch</b></div><div class="sd-rule up">Sàn <b>ít rủi ro đối tác</b></div><div class="sd-rule down">Sàn <b>có thể không khớp nhu cầu</b></div></div>
      <div><div class="sd-rule up">OTC <b>may đo số tiền, ngày</b></div><div class="sd-rule down">OTC <b>khó thoát vị thế</b></div><div class="sd-rule down">OTC <b>rủi ro đối tác</b></div></div></div>
      <p class="sd-note">Chuẩn hóa mua được thanh khoản và an toàn; linh hoạt phải trả bằng rủi ro.</p>`),

    S('Ví dụ: nhận 1.370.000 EUR ngày 17/8', `<div class="sd-steps">
      <span>① Futures EUR: 125.000 EUR/hợp đồng → 1.370.000 / 125.000 = <b>10,96</b> hợp đồng, không chia lẻ</span>
      <span>② Futures chỉ đáo hạn tháng 3, 6, 9, 12 → <b>lệch ngày</b></span>
      <span>③ Forward OTC với ngân hàng: đúng số tiền, đúng ngày → <b>khớp hoàn toàn</b></span>
      <span>④ Cái giá: rủi ro đối tác ngân hàng, khó hủy sớm</span></div>`),

    S('Sau 2008: OTC chặt chẽ hơn', `<div class="sd-cols3">
      <div class="sd-card"><div class="sd-n">1</div><b>Bù trừ trung tâm</b><p>Swap chuẩn hóa phải qua CCP.</p></div>
      <div class="sd-card"><div class="sd-n">2</div><b>Báo cáo</b><p>Giao dịch gửi về kho dữ liệu (trade repository).</p></div>
      <div class="sd-card"><div class="sd-n">3</div><b>Ký quỹ nhiều hơn</b><p>Với hợp đồng không bù trừ trung tâm.</p></div></div>
      <p class="sd-note">Dodd-Frank (Mỹ), EMIR (châu Âu). OTC song phương thường ký theo <b>ISDA Master Agreement</b>. OTC vẫn kém minh bạch hơn sàn.</p>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>Giá trị phụ thuộc tài sản cơ sở</span><span>Ít vốn ban đầu → đòn bẩy</span>
      <span>Underlying chỉ cần đo được</span><span>Long + short = 0 (trước phí)</span>
      <span>Giao hàng hoặc trả tiền chênh lệch</span><span>Sàn: chuẩn hóa, CCP, MTM hằng ngày</span>
      <span>OTC: may đo, rủi ro đối tác, kém minh bạch</span><span>OTC lớn hơn sàn theo notional</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 10 câu, mục tiêu ≥ 7 câu đúng.</p>`),
  ];

  addDeck('DE-01', `Slide Derivative Features - bản thiết kế riêng (${slides.length} slide)`, slides);
}());
