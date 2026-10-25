// Bộ slide tự thiết kế cho ET-04 Guidance for Standard II: Integrity of Capital Markets.
(function () {
  const L = window.LESSONS && window.LESSONS['ET-04'];
  if (!L) return;
  const { slide, addDeck } = window.CFAH;
  const K = 'ET-04 · Integrity of Capital Markets';
  const S = (title, body, opt = {}) => slide(title, body, Object.assign({ kicker: K }, opt));

  // Ma trận 2 x 2: trọng yếu x công khai.
  const matrix = `<svg viewBox="0 0 600 260" class="sv big" role="img" aria-label="Ma trận trọng yếu và công khai">
    <text x="230" y="22" class="sv-muted">Đã công bố</text><text x="470" y="22" class="sv-muted">Chưa công bố</text>
    <text x="15" y="95" class="sv-muted" text-anchor="start">Trọng yếu</text>
    <text x="15" y="200" class="sv-muted" text-anchor="start">Không</text><text x="15" y="220" class="sv-muted" text-anchor="start">trọng yếu</text>
    <rect x="140" y="35" width="180" height="105" rx="12" class="sv-panel"/><text x="230" y="85" class="sv-txt sv-t-up">Được dùng</text><text x="230" y="110" class="sv-muted" style="font-size:14px">thông cáo, BCTC</text>
    <rect x="380" y="35" width="180" height="105" rx="12" class="sv-node down"/><text x="470" y="85" class="sv-txt sv-t-down">MNPI: cấm</text><text x="470" y="110" class="sv-muted" style="font-size:14px">lợi nhuận sắp công bố</text>
    <rect x="140" y="150" width="180" height="105" rx="12" class="sv-panel"/><text x="230" y="200" class="sv-txt sv-t-up">Được dùng</text>
    <rect x="380" y="150" width="180" height="105" rx="12" class="sv-panel"/><text x="470" y="200" class="sv-txt sv-t-up">Được dùng</text><text x="470" y="225" class="sv-muted" style="font-size:14px">mảnh ghép mosaic</text></svg>`;

  // Mosaic: nhiều mảnh nhỏ ghép thành kết luận.
  const mosaic = (() => {
    const pieces = [['BCTC đã công bố', 'up'], ['Số liệu ngành', 'up'], ['Đếm xe ra vào', 'pv'], ['Hỏi nhà cung cấp', 'pv'], ['Giá bán lẻ', 'pv']];
    let s = '<svg viewBox="0 0 600 250" class="sv big" role="img" aria-label="Mosaic theory: các mảnh thông tin ghép thành kết luận">';
    pieces.forEach(([n, c], i) => {
      const y = 15 + i * 46;
      s += `<rect x="10" y="${y}" width="200" height="38" rx="8" class="sv-panel"/><text x="110" y="${y + 25}" class="sv-txt sv-t-${c}" style="font-size:16px">${n}</text>`;
      s += `<line x1="212" y1="${y + 19}" x2="368" y2="125" class="sv-dash"/>`;
    });
    s += '<rect x="370" y="80" width="220" height="90" rx="14" class="sv-node up"/><text x="480" y="118" class="sv-txt">Kết luận</text><text x="480" y="145" class="sv-muted" style="font-size:15px">có thể rất trọng yếu</text>';
    s += '<text x="110" y="248" class="sv-muted" style="font-size:13px">xanh: công khai · cam: chưa công bố, không trọng yếu</text></svg>';
    return s;
  })();

  // Tường lửa thông tin.
  const firewall = `<svg viewBox="0 0 600 230" class="sv big" role="img" aria-label="Tường lửa giữa bộ phận nắm MNPI và bộ phận giao dịch">
    <rect x="15" y="50" width="170" height="110" rx="14" class="sv-panel"/><text x="100" y="95" class="sv-txt" style="font-size:17px">Ngân hàng đầu tư</text><text x="100" y="122" class="sv-muted" style="font-size:15px">M&A, phát hành</text>
    <rect x="415" y="50" width="170" height="110" rx="14" class="sv-panel"/><text x="500" y="95" class="sv-txt" style="font-size:17px">Môi giới, phân tích</text><text x="500" y="122" class="sv-muted" style="font-size:15px">tự doanh</text>
    <rect x="270" y="20" width="60" height="170" rx="6" class="sv-node down"/><text x="300" y="215" class="sv-t-down sv-txt">tường lửa</text>
    <line x1="188" y1="80" x2="266" y2="80" class="sv-down"/><text x="228" y="70" class="sv-muted" style="font-size:14px">MNPI</text>
    <line x1="100" y1="165" x2="100" y2="200" class="sv-dash"/><line x1="100" y1="200" x2="250" y2="200" class="sv-dash"/>
    <text x="175" y="192" class="sv-muted" style="font-size:13px">qua bộ phận tuân thủ</text></svg>`;

  const slides = [
    S('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Ethical and Professional Standards · ET-04</div>
      <h2>Standard II:<br>Integrity of Capital Markets</h2>
      <p>Không lợi dụng thông tin nội bộ, không đánh lừa thị trường</p>
      <div class="sd-chips"><span>II(A) Material Nonpublic Information</span><span>II(B) Market Manipulation</span><span>Không cần máy tính</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Hai cách phá hoại niềm tin thị trường', `<div class="sd-cols2">
      <div class="sd-card"><div class="sd-n">A</div><b>Dùng thông tin thật mà người khác chưa có</b><p>Giao dịch, khuyến nghị dựa trên MNPI</p><small>Material Nonpublic Information</small></div>
      <div class="sd-card acc"><div class="sd-n">B</div><b>Tạo ra tín hiệu giả</b><p>Tin đồn sai, giao dịch giả để đánh lừa</p><small>Market Manipulation</small></div></div>
      <p class="sd-note">Cả hai làm nhà đầu tư thấy sân chơi <b>không công bằng</b> → rút khỏi thị trường → vốn đắt hơn cho mọi người.</p>`),

    S('II(A): yêu cầu cốt lõi', `<div class="sd-big">Trọng yếu + Chưa công bố → Không hành động</div>
      <div class="sd-cols2"><div class="sd-card"><b>Không được</b><p>Mua, bán, đổi khuyến nghị dựa trên MNPI</p></div>
      <div class="sd-card acc"><b>Cũng không được</b><p>Khiến người khác hành động: mách, gợi ý, nói bóng gió</p></div></div>`),

    S('Thế nào là trọng yếu?', `<div class="sd-cols3">
      <div class="sd-card"><b>Cụ thể</b><p>"Lợi nhuận giảm 30%" hơn "quý này khó"</p></div>
      <div class="sd-card"><b>Nguồn tin cậy</b><p>Giám đốc tài chính hơn tin đồn diễn đàn</p></div>
      <div class="sd-card acc"><b>Tác động lên giá</b><p>Đủ lớn so với quy mô công ty</p></div></div>
      <p class="sd-note">Ví dụ: kết quả kinh doanh, M&A, cổ tức, kiện tụng, đình công, lệnh lớn sắp đặt, báo cáo của chuyên gia nổi tiếng.</p>`),

    S('Thế nào là chưa công bố?', `<div class="sd-rule down"><span>Analyst conference call, chưa ra thông cáo</span><b>Chưa công bố</b></div>
      <div class="sd-rule down"><span>Gặp riêng 10 cổ đông lớn</span><b>Chưa công bố</b></div>
      <div class="sd-rule down"><span>Nhóm chat kín của lãnh đạo</span><b>Chưa công bố</b></div>
      <div class="sd-rule up"><span>Thông cáo báo chí, trang sở giao dịch</span><b>Công khai</b></div>
      <p class="sd-note">Công khai = phổ biến cho <b>thị trường nói chung</b>, không phải nhóm chọn lọc.</p>`),

    S('Bản đồ quyết định', `${matrix}
      <p class="sd-note">Chỉ <b>một ô</b> bị cấm. Ba ô còn lại là nguyên liệu hợp lệ của nhà phân tích.</p>`),

    S('Mosaic theory', `${mosaic}
      <p class="sd-note">Mỗi mảnh hợp lệ thì kết luận được dùng, dù kết luận đó trọng yếu. <b>Lưu hồ sơ</b> để chứng minh.</p>`),

    S('Các vùng xám', `<div class="sd-grid4">
      <div class="sd-card"><b>Expert network</b><p>Hỏi xu hướng ngành: được. Nghe kết quả thử nghiệm chưa công bố: dừng</p></div>
      <div class="sd-card"><b>Mạng xã hội</b><p>Chỉ công khai khi đến thị trường nói chung</p></div>
      <div class="sd-card"><b>Báo cáo chuyên gia nổi tiếng</b><p>Được gửi cho khách hàng trả phí, không phải người nội bộ</p></div>
      <div class="sd-card acc"><b>Tin đồn đã nghe trước</b><p>Không làm MNPI thành công khai</p></div></div>`),

    S('Tình huống II(A): bạn kết luận gì?', `<div class="sd-rule down"><span>Bạn cũ ở công ty Y nhắn: lợi nhuận sắp vượt kỳ vọng → mua</span><b>Vi phạm</b></div>
      <div class="sd-rule down"><span>Môi giới nghe lỏm cuộc gọi, bán cho khách</span><b>Vi phạm</b></div>
      <div class="sd-rule down"><span>Kể trước với MC việc hạ khuyến nghị, MC bán</span><b>Vi phạm</b></div>
      <div class="sd-rule down"><span>Đợi một ngày rồi mới giao dịch trên MNPI</span><b>Vi phạm</b></div>
      <div class="sd-rule up"><span>Đọc thông cáo trên sàn lúc 9h15, mua lúc 9h20</span><b>Không</b></div>`),

    S('Lỡ nắm MNPI: làm gì?', `<div class="sd-steps">
      <span>1. <b>Không</b> giao dịch, không khuyến nghị, không kể cho ai</span>
      <span>2. Báo ngay bộ phận tuân thủ hoặc pháp chế</span>
      <span>3. Đề nghị công ty phát hành <b>công bố rộng rãi</b></span>
      <span>4. Chờ thông tin công khai rồi mới hành động</span></div>`),

    S('Tường lửa thông tin', `${firewall}
      <div class="sd-keys"><span>Watch list</span><span>Restricted list</span><span>Rumor list</span><span>Rà soát giao dịch nhân viên</span></div>`),

    S('Bẫy về tự doanh', `<div class="sd-cols2">
      <div class="sd-card"><b>Cấm hẳn tự doanh một mã</b><p>Thị trường có thể đọc được tín hiệu: "công ty đang biết điều gì đó"</p></div>
      <div class="sd-card acc"><b>Cách hợp lý hơn</b><p>Giám sát, hạn chế; chỉ nhận vị thế đối ứng với lệnh khách hàng <b>tự đặt</b></p></div></div>
      <p class="sd-note">Mục tiêu: không lạm dụng MNPI mà cũng không làm lộ MNPI.</p>`),

    S('II(B): thao túng thị trường', `<div class="sd-big">Méo giá hoặc khối lượng + Ý định đánh lừa</div>
      <div class="sd-cols2">
      <div class="sd-card"><b>Bằng thông tin</b><p>Tung tin sai, pump and dump, báo cáo phóng đại</p></div>
      <div class="sd-card acc"><b>Bằng giao dịch</b><p>Wash trading, làm giá đóng cửa, thâu tóm vị thế để ép giá</p></div></div>`),

    S('Có ý định đánh lừa không?', `<div class="sd-rule down"><span>Mua trước, tung tin tốt bằng tài khoản ảo</span><b>Vi phạm</b></div>
      <div class="sd-rule down"><span>Sàn giảm phí đổi lấy khối lượng tối thiểu</span><b>Vi phạm</b></div>
      <div class="sd-rule down"><span>Mua gấp 4 lần khối lượng tuần để "làm đẹp" thương vụ</span><b>Vi phạm</b></div>
      <div class="sd-rule up"><span>Bán lỗ cuối năm để tối ưu thuế cho khách</span><b>Không</b></div>
      <div class="sd-rule up"><span>Quỹ lớn mua dần theo kế hoạch, giá tăng</span><b>Không</b></div>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>MNPI = trọng yếu + chưa công bố</span><span>Cấm cả hành động lẫn mách người khác</span>
      <span>Ai nắm MNPI cũng bị ràng buộc</span><span>Analyst call chưa phải công khai</span>
      <span>Thời gian không làm tin thành công khai</span><span>Mosaic: được dùng, lưu hồ sơ</span>
      <span>II(B): cần ý định, không cần thành công</span><span>Giao dịch thật vì lý do thật: không vi phạm</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 10 câu, mục tiêu ≥ 7 câu đúng.</p>`),
  ];

  addDeck('ET-04', `Slide Integrity of Capital Markets - bản thiết kế riêng (${slides.length} slide)`, slides);
}());
