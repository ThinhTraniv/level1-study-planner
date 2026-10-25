// Bộ slide tự thiết kế cho ET-07 Guidance for Standard V: Investment Analysis, Recommendations, and Actions.
(function () {
  const L = window.LESSONS && window.LESSONS['ET-07'];
  if (!L) return;
  const { slide, addDeck } = window.CFAH;
  const K = 'ET-07 · Investment Analysis and Actions';
  const S = (title, body, opt = {}) => slide(title, body, Object.assign({ kicker: K }, opt));

  // Vòng đời một khuyến nghị: nghiên cứu → truyền đạt → lưu hồ sơ.
  const cycle = `<svg viewBox="0 0 600 210" class="sv big" role="img" aria-label="Nghiên cứu, truyền đạt, lưu hồ sơ">
    <rect x="15" y="50" width="170" height="90" rx="14" class="sv-node up"/><text x="100" y="88" class="sv-txt">V(A)</text><text x="100" y="115" class="sv-muted">nghiên cứu kỹ</text>
    <rect x="215" y="50" width="170" height="90" rx="14" class="sv-panel"/><text x="300" y="88" class="sv-txt">V(B)</text><text x="300" y="115" class="sv-muted">truyền đạt đúng</text>
    <rect x="415" y="50" width="170" height="90" rx="14" class="sv-panel"/><text x="500" y="88" class="sv-txt">V(C)</text><text x="500" y="115" class="sv-muted">lưu bằng chứng</text>
    <line x1="187" y1="95" x2="212" y2="95" class="sv-axis"/><line x1="387" y1="95" x2="412" y2="95" class="sv-axis"/>
    <text x="100" y="30" class="sv-muted">trước</text><text x="300" y="30" class="sv-muted">trong khi</text><text x="500" y="30" class="sv-muted">sau</text>
    <text x="300" y="185" class="sv-t-pv sv-txt">thiếu một khâu là có thể vi phạm</text></svg>`;

  // Quy trình hay kết quả: ma trận 2 x 2.
  const proc = `<svg viewBox="0 0 600 240" class="sv big" role="img" aria-label="V(A) đánh giá quy trình, không đánh giá kết quả">
    <text x="245" y="22" class="sv-muted">Kết quả tốt</text><text x="475" y="22" class="sv-muted">Kết quả xấu</text>
    <text x="15" y="85" class="sv-muted" text-anchor="start">Có cơ sở</text>
    <text x="15" y="190" class="sv-muted" text-anchor="start">Thiếu cơ sở</text>
    <rect x="150" y="35" width="190" height="95" rx="12" class="sv-node up"/><text x="245" y="90" class="sv-txt sv-t-up">Không vi phạm</text>
    <rect x="380" y="35" width="190" height="95" rx="12" class="sv-node up"/><text x="475" y="90" class="sv-txt sv-t-up">Không vi phạm</text>
    <rect x="150" y="140" width="190" height="95" rx="12" class="sv-node down"/><text x="245" y="185" class="sv-txt sv-t-down">Vi phạm</text><text x="245" y="210" class="sv-muted" style="font-size:14px">đúng nhờ may mắn</text>
    <rect x="380" y="140" width="190" height="95" rx="12" class="sv-node down"/><text x="475" y="195" class="sv-txt sv-t-down">Vi phạm</text></svg>`;

  const slides = [
    S('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Ethical and Professional Standards · ET-07</div>
      <h2>Standard V: Investment Analysis,<br>Recommendations, and Actions</h2>
      <p>Có cơ sở, nói rõ ràng, lưu bằng chứng</p>
      <div class="sd-chips"><span>V(A) Diligence and Reasonable Basis</span><span>V(B) Communication</span><span>V(C) Record Retention</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Vòng đời một khuyến nghị', cycle),

    S('V(A): hai yêu cầu', `<div class="sd-cols2">
      <div class="sd-card"><div class="sd-n">1</div><b>Cần mẫn, độc lập, kỹ lưỡng</b><p>Khi phân tích, khuyến nghị, hành động</p></div>
      <div class="sd-card acc"><div class="sd-n">2</div><b>Cơ sở hợp lý và đầy đủ</b><p>Có nghiên cứu, điều tra phù hợp hỗ trợ</p></div></div>
      <p class="sd-note">"Đủ" phụ thuộc triết lý đầu tư, vai trò, nguồn lực và loại sản phẩm. Không có con số cố định.</p>`),

    S('Quy trình, không phải kết quả', `${proc}
      <p class="sd-note">Khuyến nghị kỹ lưỡng mà gặp thiên tai bất ngờ: <b>không vi phạm</b>.</p>`),

    S('Trước khi khuyến nghị, xem gì?', `<div class="sd-check">
      <span>Kinh tế toàn cầu và trong nước</span><span>Kết quả tài chính, lịch sử hoạt động</span>
      <span>Giai đoạn chu kỳ kinh doanh</span><span>Phí, kết quả lịch sử của quỹ</span>
      <span>Giới hạn của mô hình định lượng</span><span>Nhóm so sánh có phù hợp không</span></div>`),

    S('Có cơ sở hay không?', `<div class="sd-rule down"><span>Viết báo cáo từ vài bài báo trước hạn nộp</span><b>Thiếu cơ sở</b></div>
      <div class="sd-rule down"><span>Nhóm giá trị kém 1 năm → bán mọi cổ phiếu giá trị</span><b>Thiếu cơ sở</b></div>
      <div class="sd-rule up"><span>Phân tích ngành, tài chính, phỏng vấn lãnh đạo</span><b>Có cơ sở</b></div>
      <div class="sd-rule up"><span>Báo cáo mua ngoài đã thẩm định, rà soát định kỳ</span><b>Có cơ sở</b></div>`),

    S('Nghiên cứu của bên thứ ba', `<div class="sd-grid4">
      <div class="sd-card"><b>Giả định</b><p>Có hợp lý không?</p></div>
      <div class="sd-card"><b>Độ chặt chẽ</b><p>Phân tích có kỹ không?</p></div>
      <div class="sd-card"><b>Tính cập nhật</b><p>Báo cáo có còn mới không?</p></div>
      <div class="sd-card acc"><b>Độc lập, khách quan</b><p>Có xung đột lợi ích không?</p></div></div>
      <p class="sd-note">Tên tuổi của hãng nghiên cứu <b>không thay thế</b> thẩm định.</p>`),

    S('Mô hình định lượng', `<div class="sd-cols2">
      <div class="sd-card"><b>Người dùng</b><p>Hiểu tham số, giả định, giới hạn, cách dùng kết quả</p><small>Không dùng hộp đen</small></div>
      <div class="sd-card acc"><b>Người xây dựng</b><p>Yêu cầu cao hơn: kiểm tra cả kịch bản cực đoan, ít khả năng xảy ra</p><small>Bài học 2008: giá nhà giảm toàn quốc</small></div></div>`),

    S('Người quản lý phụ và nghiên cứu nhóm', `<div class="sd-cols2">
      <div class="sd-card"><b>Chọn subadviser</b><p>Thẩm định tuân thủ, kiểm soát nội bộ, dữ liệu kết quả, bám chiến lược</p><small>Phí thấp nhất không phải tiêu chí duy nhất</small></div>
      <div class="sd-card acc"><b>Bất đồng với ủy ban</b><p>Ý kiến chung có cơ sở, khách quan → <b>không cần rút tên</b></p><small>Có thể ghi ý kiến riêng vào hồ sơ</small></div></div>`),

    S('V(B): bốn yêu cầu', `<div class="sd-grid4">
      <div class="sd-card"><b>1. Quy trình</b><p>Nguyên tắc chung, báo kịp thời khi thay đổi</p></div>
      <div class="sd-card"><b>2. Rủi ro, giới hạn</b><p>Thanh khoản, capacity, đòn bẩy, mô hình</p></div>
      <div class="sd-card"><b>3. Yếu tố quan trọng</b><p>Đưa vào báo cáo, phần còn lại lưu hồ sơ</p></div>
      <div class="sd-card acc"><b>4. Sự thật vs ý kiến</b><p>Tách bạch rõ ràng</p></div></div>`),

    S('Sự thật hay ý kiến?', `<div class="sd-tbl grid">
      <div class="head"><span>Câu trong báo cáo</span><span>Loại</span></div>
      <div><span>Doanh thu 2026 đã kiểm toán 1.200 tỷ đồng</span><span>Sự thật</span></div>
      <div><span>Doanh thu 2027 dự kiến 1.400 tỷ đồng</span><span>Ý kiến</span></div>
      <div><span>Mỏ có 500.000 ounce vàng (tính từ mẫu khoan)</span><span>Ý kiến</span></div>
      <div><span>Giá mục tiêu 52.340 đồng</span><span>Ý kiến</span></div>
      <div><span>Ban lãnh đạo nói họ lạc quan</span><span>Sự thật về lời nói</span></div></div>
      <p class="sd-note">Con số chi tiết từ mô hình <b>vẫn là ý kiến</b>.</p>`),

    S('V(B): tình huống', `<div class="sd-rule down"><span>"Dựa trên sự thật là có 500.000 ounce vàng, MUA mạnh"</span><b>Vi phạm</b></div>
      <div class="sd-rule down"><span>Thay một mô hình chọn cổ phiếu, không báo khách</span><b>Vi phạm</b></div>
      <div class="sd-rule down"><span>Quỹ nhỏ tăng gấp 5 lần, vẫn quảng cáo chiến lược cũ</span><b>Vi phạm</b></div>
      <div class="sd-rule down"><span>Biến sự lạc quan của lãnh đạo thành "chắc chắn thành công"</span><b>Vi phạm</b></div>`),

    S('V(C): lưu hồ sơ', `<div class="sd-cols3">
      <div class="sd-card"><b>Lưu gì</b><p>Mô hình, số liệu, ghi chú, mọi trao đổi với khách qua <b>mọi kênh</b></p></div>
      <div class="sd-card"><b>Của ai</b><p>Tài sản của <b>công ty</b>; chuyển việc phải tạo lại từ nguồn công khai</p></div>
      <div class="sd-card acc"><b>Bao lâu</b><p>Theo luật, chính sách công ty; không có thì tối thiểu <b>7 năm</b></p></div></div>`),

    S('V(C): tình huống', `<div class="sd-rule down"><span>Mang mô hình từ công ty cũ sang dùng tiếp</span><b>Vi phạm</b></div>
      <div class="sd-rule down"><span>Phát hành khuyến nghị dựa vào trí nhớ</span><b>Vi phạm</b></div>
      <div class="sd-rule down"><span>Tư vấn qua tin nhắn tự xóa sau 24 giờ</span><b>Vi phạm</b></div>
      <div class="sd-rule up"><span>Công ty không có hệ thống, tự lưu hồ sơ của mình</span><b>Đúng</b></div>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>V(A) chấm quy trình, không chấm kết quả</span><span>Bên thứ ba: được dùng sau thẩm định</span>
      <span>Hiểu giả định của mô hình</span><span>Subadviser: không chỉ xét phí</span>
      <span>Bất đồng với nhóm: không cần rút tên</span><span>Thay đổi quy trình: báo kịp thời</span>
      <span>Dự báo là ý kiến</span><span>Hồ sơ của công ty, 7 năm nếu không có quy định</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 10 câu, mục tiêu ≥ 7 câu đúng.</p>`),
  ];

  addDeck('ET-07', `Slide Investment Analysis and Actions - bản thiết kế riêng (${slides.length} slide)`, slides);
}());
