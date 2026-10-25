// Bộ slide tự thiết kế cho ET-06 Guidance for Standard IV: Duties to Employers.
(function () {
  const L = window.LESSONS && window.LESSONS['ET-06'];
  if (!L) return;
  const { slide, addDeck } = window.CFAH;
  const K = 'ET-06 · Duties to Employers';
  const S = (title, body, opt = {}) => slide(title, body, Object.assign({ kicker: K }, opt));

  // Dòng thời gian rời công ty: trước và sau ngày thôi việc có hiệu lực.
  const leave = `<svg viewBox="0 0 600 230" class="sv big" role="img" aria-label="Trước và sau ngày thôi việc có hiệu lực">
    <line x1="20" y1="110" x2="580" y2="110" class="sv-axis"/>
    <line x1="330" y1="40" x2="330" y2="180" class="sv-down"/><text x="330" y="30" class="sv-txt sv-t-down">thôi việc có hiệu lực</text>
    <line x1="120" y1="104" x2="120" y2="116" class="sv-axis"/><text x="120" y="140" class="sv-muted">nộp đơn</text>
    <text x="175" y="80" class="sv-txt">Vẫn là nhân viên</text>
    <text x="175" y="170" class="sv-t-up" style="font-size:16px">được: chuẩn bị</text><text x="175" y="194" class="sv-t-down" style="font-size:16px">cấm: mời khách, lấy hồ sơ</text>
    <text x="460" y="80" class="sv-txt">Đã nghỉ</text>
    <text x="460" y="170" class="sv-t-up" style="font-size:16px">được: gọi khách cũ</text><text x="460" y="194" class="sv-muted" style="font-size:15px">bằng nguồn công khai</text><text x="460" y="216" class="sv-muted" style="font-size:15px">nếu không có noncompete</text></svg>`;

  // Thưởng tương lai và quà quá khứ.
  const giftArrow = `<svg viewBox="0 0 600 200" class="sv big" role="img" aria-label="Quà cho quá khứ và thưởng cho tương lai">
    <line x1="30" y1="100" x2="570" y2="100" class="sv-axis"/>
    <circle cx="300" cy="100" r="8" class="sv-dot"/><text x="300" y="135" class="sv-txt">hôm nay</text>
    <rect x="20" y="20" width="260" height="60" rx="12" class="sv-panel"/><text x="150" y="46" class="sv-txt" style="font-size:16px">Quà cảm ơn kết quả đã qua</text><text x="150" y="70" class="sv-muted" style="font-size:14px">thông báo công ty, I(B)</text>
    <rect x="320" y="20" width="260" height="60" rx="12" class="sv-node down"/><text x="450" y="46" class="sv-txt" style="font-size:16px">Thưởng nếu kết quả tốt</text><text x="450" y="70" class="sv-muted" style="font-size:14px">đồng ý bằng văn bản trước, IV(B)</text>
    <text x="150" y="175" class="sv-muted">quá khứ</text><text x="450" y="175" class="sv-muted">tương lai</text></svg>`;

  const slides = [
    S('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Ethical and Professional Standards · ET-06</div>
      <h2>Standard IV:<br>Duties to Employers</h2>
      <p>Trung thành có giới hạn, minh bạch thù lao, giám sát thực chất</p>
      <div class="sd-chips"><span>IV(A) Loyalty</span><span>IV(B) Additional Compensation</span><span>IV(C) Supervisors</span><span>Không cần máy tính</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Trung thành không phải vâng lời', `<div class="sd-big">Khách hàng, thị trường > Công ty</div>
      <div class="sd-cols2"><div class="sd-card"><b>IV(A) yêu cầu</b><p>Không tước kỹ năng, không lộ bí mật, không gây hại cho công ty</p></div>
      <div class="sd-card acc"><b>Nhưng</b><p>Không bao giờ được viện "công ty bảo thế" để vi phạm Code</p></div></div>`),

    S('Hoạt động độc lập', `<div class="sd-steps">
      <span>1. Có <b>cạnh tranh</b> hoặc xung đột với công ty không? Không → không phải independent practice</span>
      <span>2. Có → thông báo đầy đủ: dịch vụ, thù lao, thời gian, bản chất</span>
      <span>3. Được công ty <b>đồng ý trước khi bắt đầu</b></span></div>
      <p class="sd-note">Làm ngoài giờ hay cho người thân không thay đổi bản chất cạnh tranh.</p>`),

    S('Làm thêm: cần báo hay không?', `<div class="sd-rule down"><span>Quản lý danh mục có thu phí cho người quen</span><b>Cần đồng ý trước</b></div>
      <div class="sd-rule down"><span>Tư vấn đầu tư cho công ty khác khi đang nghỉ không lương</span><b>Cần đồng ý trước</b></div>
      <div class="sd-rule up"><span>Dạy đại học buổi tối, công ty không kinh doanh giáo dục</span><b>Không cạnh tranh</b></div>
      <p class="sd-note">Không cạnh tranh vẫn nên báo và theo chính sách công ty.</p>`),

    S('Rời công ty: ranh giới thời gian', leave),

    S('Chuẩn bị hay cạnh tranh?', `<div class="sd-cols2">
      <div class="sd-card"><b>Chuẩn bị: được</b><p>Thuê văn phòng, mua thiết bị</p><p>Vay vốn, đăng ký công ty</p><p>Phỏng vấn nơi khác</p></div>
      <div class="sd-card acc"><b>Gây hại: cấm</b><p>Mời khách hàng trước khi nghỉ</p><p>Mang danh sách khách, mô hình, hồ sơ</p><p>Lấy bí mật kinh doanh, self-dealing</p></div></div>
      <p class="sd-note">Hồ sơ công ty trên <b>mọi thiết bị</b> là tài sản công ty. Kiến thức, kinh nghiệm là của bạn.</p>`),

    S('Tình huống rời công ty', `<div class="sd-rule up"><span>Đăng ký công ty cạnh tranh, chưa tìm khách</span><b>Không vi phạm</b></div>
      <div class="sd-rule up"><span>Vay ngân hàng, mua thiết bị trong giờ ăn trưa</span><b>Không vi phạm</b></div>
      <div class="sd-rule up"><span>Đã nghỉ, gọi khách cũ qua danh bạ công khai</span><b>Không vi phạm</b></div>
      <div class="sd-rule down"><span>Chép mô hình định giá sang USB trước ngày nghỉ</span><b>Vi phạm</b></div>`),

    S('Tố giác', `<div class="sd-cols2">
      <div class="sd-card"><b>Được hành động trái lợi ích công ty khi</b><p>Công ty làm điều bất hợp pháp, phi đạo đức</p><p>Mục đích: bảo vệ khách hàng, thị trường</p></div>
      <div class="sd-card acc"><b>Không được</b><p>Tố giác để mưu lợi riêng</p><small>Im lặng khi biết sai phạm có thể vi phạm I(A), I(D)</small></div></div>`),

    S('IV(A): chính sách nên có', `<div class="sd-grid4">
      <div class="sd-card"><b>Competition policy</b><p>Hoạt động nào là cạnh tranh, noncompete</p></div>
      <div class="sd-card"><b>Termination policy</b><p>Báo trước, hồ sơ, mạng xã hội, khách hàng</p></div>
      <div class="sd-card"><b>Incident reporting</b><p>Kênh báo vi phạm, bảo vệ người báo</p></div>
      <div class="sd-card acc"><b>Employee classification</b><p>Nhân viên hay hợp đồng độc lập</p></div></div>`),

    S('IV(B): thù lao bổ sung', `<div class="sd-big">Có thể xung đột → đồng ý bằng văn bản</div>
      <div class="sd-cols3">
      <div class="sd-card"><b>Hiểu rộng</b><p>Tiền, cổ phiếu, du lịch, thẻ thành viên</p></div>
      <div class="sd-card"><b>Văn bản</b><p>Email cũng được; báo miệng chưa đủ</p></div>
      <div class="sd-card acc"><b>Nội dung</b><p>Bản chất, giá trị ước tính, thời hạn</p></div></div>`),

    S('Quà quá khứ hay thưởng tương lai?', `${giftArrow}
      <p class="sd-note">Thưởng gắn với kết quả <b>tương lai</b> tạo động cơ ưu tiên tài khoản đó hoặc chấp nhận rủi ro quá mức.</p>`),

    S('IV(C): người giám sát', `<div class="sd-cols2">
      <div class="sd-card"><div class="sd-n">1</div><b>Ngăn ngừa</b><p>Quy trình rõ ràng, đào tạo, cơ chế thưởng đúng</p></div>
      <div class="sd-card acc"><div class="sd-n">2</div><b>Phát hiện</b><p>Kiểm tra, giám sát thực chất</p></div></div>
      <p class="sd-note">Áp dụng với mọi người dưới quyền, kể cả không phải thành viên CFA. Ủy quyền được <b>việc</b>, không ủy quyền được <b>trách nhiệm</b>.</p>`),

    S('Không có quy trình thì sao?', `<div class="sd-rule down"><span>Nhận giám sát dù không có quy trình</span><b>Sai</b></div>
      <div class="sd-rule down"><span>Bắt nhân viên ký cam kết theo Code CFA</span><b>Không đủ</b></div>
      <div class="sd-rule up"><span>Báo ban lãnh đạo, đề xuất khắc phục</span><b>Đúng</b></div>
      <div class="sd-rule up"><span>Từ chối giám sát <b>bằng văn bản</b> đến khi có quy trình</span><b>Đúng</b></div>`),

    S('Khi phát hiện vi phạm', `<div class="sd-steps">
      <span>1. <b>Kịp thời</b> điều tra mức độ sai phạm</span>
      <span>2. Hạn chế hoạt động của nhân viên, <b>tăng giám sát</b></span>
      <span>3. Bảo đảm không tái phạm: lời hứa thôi là <b>không đủ</b></span></div>
      <p class="sd-note">Đã có quy trình hợp lý và thực thi, vi phạm vẫn lọt → người giám sát <b>không vi phạm</b>.</p>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>Cạnh tranh có thù lao: đồng ý trước</span><span>Chuẩn bị rời đi: được</span>
      <span>Mời khách trước khi nghỉ: cấm</span><span>Hồ sơ công ty: không mang theo</span>
      <span>Tố giác vì khách hàng: được</span><span>Thưởng tương lai: văn bản trước</span>
      <span>Không có quy trình: từ chối bằng văn bản</span><span>Lời hứa không tái phạm: không đủ</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 10 câu, mục tiêu ≥ 7 câu đúng.</p>`),
  ];

  addDeck('ET-06', `Slide Duties to Employers - bản thiết kế riêng (${slides.length} slide)`, slides);
}());
