// Bộ slide tự thiết kế cho ET-08 Guidance for Standard VI: Conflicts of Interest.
(function () {
  const L = window.LESSONS && window.LESSONS['ET-08'];
  if (!L) return;
  const { slide, addDeck } = window.CFAH;
  const K = 'ET-08 · Standard VI Conflicts of Interest';
  const S = (title, body, opt = {}) => slide(title, body, Object.assign({ kicker: K }, opt));

  // Thang ưu tiên giao dịch: ba bậc từ cao xuống thấp.
  const ladder = (() => {
    const steps = [['1', 'Khách hàng', 'kể cả tài khoản người thân là khách hàng', 'up'], ['2', 'Chủ lao động', 'tài khoản tự doanh của công ty', ''], ['3', 'Cá nhân', 'mọi tài khoản bạn là beneficial owner', 'down']];
    let s = '<svg viewBox="0 0 600 270" class="sv big" role="img" aria-label="Thứ tự ưu tiên giao dịch">';
    steps.forEach(([n, a, b, c], i) => {
      const x = 20 + i * 70, y = 15 + i * 85, w = 560 - i * 70;
      s += `<rect x="${x}" y="${y}" width="${w}" height="70" rx="12" class="sv-node ${c}"/>`;
      s += `<circle cx="${x + 38}" cy="${y + 35}" r="20" class="sv-key"/><text x="${x + 38}" y="${y + 42}" class="sv-keyt">${n}</text>`;
      s += `<text x="${x + 75}" y="${y + 30}" text-anchor="start" class="sv-txt ${c ? 'sv-t-' + c : ''}">${a}</text>`;
      s += `<text x="${x + 75}" y="${y + 56}" text-anchor="start" class="sv-muted">${b}</text>`;
    });
    return `${s}</svg>`;
  })();

  // Trình tự đặt lệnh với cổ phiếu ít thanh khoản.
  const orderFlow = (() => {
    const box = [['Lệnh khách hàng', 'đặt và khớp xong', 'up'], ['Giá đã phản ánh', 'lệnh lớn của khách', ''], ['Lệnh cá nhân', 'mới được đặt', 'down']];
    let s = '<svg viewBox="0 0 600 150" class="sv big" role="img" aria-label="Trình tự lệnh khách hàng trước, lệnh cá nhân sau">';
    box.forEach(([a, b, c], i) => {
      const x = 10 + i * 200;
      s += `<rect x="${x}" y="25" width="180" height="90" rx="12" class="sv-node ${c}"/>`;
      s += `<text x="${x + 90}" y="62" class="sv-txt ${c ? 'sv-t-' + c : ''}">${a}</text><text x="${x + 90}" y="92" class="sv-muted">${b}</text>`;
      if (i < 2) s += `<line x1="${x + 184}" y1="70" x2="${x + 206}" y2="70" class="sv-axis"/><polygon points="${x + 206},64 ${x + 206},76 ${x + 196},70" class="sv-dot"/>`;
    });
    return `${s}</svg>`;
  })();

  const slides = [
    S('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Ethical and Professional Standards · ET-08</div>
      <h2>Standard VI:<br>Conflicts of Interest</h2>
      <p>Có xung đột không sai. Giấu xung đột mới sai.</p>
      <div class="sd-chips"><span>VI(A) Avoid or Disclose</span><span>VI(B) Priority of Transactions</span><span>VI(C) Referral Fees</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Ba câu hỏi của Standard VI', `<div class="sd-cols3">
      <div class="sd-card acc"><div class="sd-n">A</div><b>Có xung đột?</b><p>Tránh nếu được; không thì <b>công bố</b> đầy đủ, công bằng</p></div>
      <div class="sd-card"><div class="sd-n">B</div><b>Ai làm trước?</b><p>Khách hàng → chủ lao động → bản thân</p></div>
      <div class="sd-card"><div class="sd-n">C</div><b>Có phí giới thiệu?</b><p>Công bố cho chủ lao động, khách hàng, khách hàng tiềm năng</p></div></div>
      <p class="sd-note">Hay đi kèm: I(B) Independence, III(A) Loyalty, IV(B) Additional Compensation.</p>`),

    S('VI(A): tránh trước, công bố sau', `<div class="sd-steps">
      <span><b>1. Nhận diện</b>: điều gì có thể làm giảm độc lập, khách quan hoặc cản trở nghĩa vụ?</span>
      <span><b>2. Tránh</b> nếu hợp lý: từ chối ghế, chuyển việc, bán khoản đầu tư</span>
      <span><b>3. Công bố</b> nếu không tránh được: cho khách hàng, khách hàng tiềm năng, chủ lao động</span>
      <span><b>4. Xung đột quá nặng</b>: công bố không đủ, vẫn phải tránh</span></div>`),

    S('Bản công bố đạt chuẩn', `<div class="sd-grid4">
      <div class="sd-card acc"><b>Đầy đủ, công bằng</b><p>Đủ để người nhận tự đánh giá ảnh hưởng</p></div>
      <div class="sd-card acc"><b>Nổi bật</b><p>Không chú thích chữ nhỏ, không phụ lục cuối</p></div>
      <div class="sd-card acc"><b>Ngôn ngữ dễ hiểu</b><p>Câu ngắn, từ thông dụng</p></div>
      <div class="sd-card acc"><b>Đúng người, đúng lúc</b><p>Khách hàng và chủ lao động, trước khi họ quyết định</p></div></div>`),

    S('Các nguồn xung đột điển hình', `<div class="sd-tbl grid">
      <div class="head"><span>Nguồn</span><span>Xử lý</span></div>
      <div><span>Sở hữu cổ phiếu được khuyến nghị</span><span>Công bố, tuân thủ chính sách giao dịch</span></div>
      <div><span>Quan hệ ngân hàng đầu tư</span><span>Công bố quan hệ đặc biệt trong báo cáo</span></div>
      <div><span>Ghế HĐQT (kể cả không lương)</span><span>Báo chủ lao động, mô tả trách nhiệm</span></div>
      <div><span>Thưởng, hoa hồng, phí thành công</span><span>Công bố cơ chế thù lao</span></div>
      <div><span>Quan hệ cá nhân, gia đình</span><span>Công bố hoặc chuyển việc</span></div></div>`),

    S('Tình huống: công ty là nhà tư vấn M&A lâu năm', `<p>Hà viết báo cáo về Sao Mai. Công ty của Hà tư vấn M&A cho Sao Mai 15 năm; hai lãnh đạo ngồi HĐQT công ty con của Sao Mai.</p>
      <div class="sd-rule down"><span>Từ chối viết báo cáo</span><b>Không cần</b></div>
      <div class="sd-rule down"><span>Viết nhưng không nêu ý kiến</span><b>Vô giá trị</b></div>
      <div class="sd-rule up"><span>Viết, kèm công bố rõ các quan hệ đặc biệt</span><b>Đúng</b></div>`),

    S('"Không lương" không có nghĩa là "không xung đột"', `<div class="sd-cols2">
      <div class="sd-card"><b>Ghế HĐQT quỹ từ thiện</b><p>Nhà phân tích ngành dược vào HĐQT quỹ nghiên cứu ung thư, không lương</p><small>→ Báo cấp trên <b>và</b> mô tả trách nhiệm</small></div>
      <div class="sd-card acc"><b>Chồng thừa kế cổ phiếu</b><p>Nhà phân tích đang khuyến nghị mua chính cổ phiếu đó</p><small>→ Công bố trong báo cáo và cho chủ lao động, hoặc chuyển việc. Không bắt buộc bán</small></div></div>`),

    S('VI(B): thang ưu tiên giao dịch', `<div class="sd-cols2 wide-left"><div>${ladder}</div>
      <div><p>Được giao dịch cá nhân nếu:</p><div class="sd-steps"><span>Khách hàng không bị bất lợi</span><span>Không hưởng lợi từ giao dịch của khách</span><span>Tuân thủ quy định pháp lý</span></div></div></div>`),

    S('Tài khoản này xếp ở đâu?', `<div class="sd-tbl grid">
      <div class="head"><span>Tài khoản</span><span>Loại</span><span>Xếp hạng</span></div>
      <div><span>Bố mẹ trả phí, bạn không có quyền lợi</span><span>Khách hàng</span><span>Như mọi khách hàng</span></div>
      <div><span>Vợ hoặc chồng</span><span>Beneficial owner</span><span>Sau khách hàng</span></div>
      <div><span>Quỹ tín thác cho con nhỏ</span><span>Beneficial owner</span><span>Sau khách hàng</span></div>
      <div><span>Tài khoản tự doanh công ty</span><span>Chủ lao động</span><span>Giữa</span></div></div>
      <p class="sd-note">Làm thiệt tài khoản người thân "để khỏi bị nghi thiên vị" cũng là <b>vi phạm</b>.</p>`),

    S('Cổ phiếu ít thanh khoản: thứ tự lệnh', `${orderFlow}
      <div class="sd-cols2"><div class="sd-rule down"><span>Mua trước khách hàng</span><b>Front-running</b></div><div class="sd-rule down"><span>Mua cùng lúc</span><b>Vẫn có thể làm khách thiệt</b></div></div>
      <p class="sd-note">Bán cổ phiếu cá nhân vì nhu cầu riêng (học phí, mua nhà) <b>được phép</b> nếu báo công ty và không chen lệnh khách.</p>`),

    S('Thủ tục phòng ngừa cho công ty', `<div class="sd-check">
      <span>Hạn chế nhân viên mua IPO</span><span>Giới hạn chặt private placement</span>
      <span>Blackout period trước lệnh khách</span><span>Bản sao xác nhận giao dịch</span>
      <span>Khai báo nắm giữ, tài khoản hưởng lợi</span><span>Preclearance mỗi giao dịch</span></div>
      <div class="sd-rule down"><span>Bắt khai tài sản của bạn bè, hàng xóm</span><b>Không khuyến nghị</b></div>`),

    S('VI(C) Referral Fees: công bố thế nào', `<div class="sd-cols3">
      <div class="sd-card acc"><b>Cho ai?</b><p>Chủ lao động, khách hàng, khách hàng tiềm năng</p></div>
      <div class="sd-card acc"><b>Khi nào?</b><p><b>Trước khi</b> ký thỏa thuận dịch vụ</p></div>
      <div class="sd-card acc"><b>Nội dung?</b><p>Bản chất lợi ích + <b>giá trị ước tính</b></p></div></div>
      <p class="sd-note">Gồm khoản nhận <b>và</b> khoản trả; tiền mặt <b>và</b> phi tiền mặt; bên ngoài <b>và</b> giữa các phòng ban. Cập nhật cho chủ lao động ít nhất hằng quý.</p>`),

    S('Hai tình huống phí giới thiệu', `<div class="sd-cols2">
      <div class="sd-card"><b>Đổi lệnh lấy khách hàng</b><p>Chuyển hoa hồng cho môi giới giá kém để được giới thiệu khách giàu; không công bố</p><div class="sd-rule down"><span>VI(C) và III(A)</span><b>Vi phạm</b></div></div>
      <div class="sd-card acc"><b>Quyên góp cho trường</b><p>Được công ty duyệt, công bố công khai, giải thích khi lập IPS</p><div class="sd-rule up"><span>Công bố đầy đủ</span><b>Tuân thủ</b></div></div></div>`),

    S('Bẫy hay gặp trong đề', `<div class="sd-rule down"><span>"Đã công bố ở chú thích" là đủ</span><b>Sai</b></div>
      <div class="sd-rule down"><span>Không lương thì không cần báo</span><b>Sai</b></div>
      <div class="sd-rule down"><span>Giao dịch nhỏ, cho con, không cần khai</span><b>Sai</b></div>
      <div class="sd-rule down"><span>Phí giới thiệu nội bộ không cần công bố</span><b>Sai</b></div>
      <div class="sd-rule up"><span>Có xung đột vẫn viết báo cáo, nếu công bố</span><b>Đúng</b></div>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>Tránh trước, công bố sau</span><span>Công bố: nổi bật, dễ hiểu, đầy đủ</span>
      <span>Ghế HĐQT không lương vẫn phải báo</span><span>Quan hệ IB: viết kèm công bố</span>
      <span>Khách hàng → chủ lao động → cá nhân</span><span>Người thân là khách: đối xử như nhau</span>
      <span>Ít thanh khoản: mua sau khi lệnh khách khớp</span><span>Phí giới thiệu: trước khi ký, kèm giá trị</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 10 câu, mục tiêu ≥ 7 câu đúng.</p>`),
  ];

  addDeck('ET-08', `Slide Standard VI Conflicts of Interest - bản thiết kế riêng (${slides.length} slide)`, slides);
}());
