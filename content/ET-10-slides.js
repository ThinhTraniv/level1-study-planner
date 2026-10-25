// Bộ slide tự thiết kế cho ET-10 Application of the Code and Standards: Level I.
(function () {
  const L = window.LESSONS && window.LESSONS['ET-10'];
  if (!L) return;
  const { slide, addDeck } = window.CFAH;
  const K = 'ET-10 · Application of the Code and Standards';
  const S = (title, body, opt = {}) => slide(title, body, Object.assign({ kicker: K }, opt));

  // Bảng nhiều cột: rows[0] là tiêu đề.
  const grid = rows => `<div class="sd-tbl grid">${rows.map((r, i) => `<div${i === 0 ? ' class="head"' : ''}>${r.map(c => `<span>${c}</span>`).join('')}</div>`).join('')}</div>`;

  // Số chuẩn con của từng Standard.
  const subBars = (() => {
    const rows = [['I Professionalism', 5], ['II Capital Markets', 2], ['III Duties to Clients', 5], ['IV Duties to Employers', 3], ['V Investment Analysis', 3], ['VI Conflicts', 3], ['VII CFA Member, Candidate', 2]];
    return `<div class="sd-bars">${rows.map(([l, v]) => `<div class="sd-bar"><span class="sd-bar-l">${l}</span><span class="sd-bar-t"><i style="width:${(v / 5) * 100}%"></i></span><b>${v}</b></div>`).join('')}</div>`;
  })();

  const slides = [
    S('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Ethical and Professional Standards · ET-10</div>
      <h2>Application of the<br>Code and Standards</h2>
      <p>Đọc tình huống, gọi đúng tên chuẩn, tránh đáp án bẫy.</p>
      <div class="sd-chips"><span>LOS 1 · Đánh giá hành vi</span><span>LOS 2 · Giải thích vì sao</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Ethics trong đề Level I', `<div class="sd-cols3">
      <div class="sd-card acc"><b>10-15%</b><p>tỷ trọng bài thi 2027</p></div>
      <div class="sd-card"><b>Mini-case</b><p>một đoạn ngắn, ba lựa chọn</p></div>
      <div class="sd-card"><b>1,5 phút</b><p>mỗi câu</p></div></div>
      <p class="sd-note">Một tình huống có thể chạm <b>hai, ba chuẩn</b>. Ba đáp án thường là ba cách hiểu sai khác nhau.</p>`),

    S('Quy trình 5 bước', `<div class="sd-steps">
      <span><b>1. Đọc câu hỏi trước</b>: hỏi gì? most likely, least likely, best?</span>
      <span><b>2. Xác định nhân vật</b>: thành viên, ứng viên? vai trò gì?</span>
      <span><b>3. Gạch chân sự kiện</b>: ai lợi, ai biết gì, đã công bố cho ai, khi nào?</span>
      <span><b>4. Đối chiếu chuẩn</b> bằng từ khóa</span>
      <span><b>5. Loại đáp án</b> dựa trên ngộ nhận</span></div>`),

    S('Năm nguyên tắc nền để loại đáp án', `<div class="sd-rule down"><span>"Luật địa phương cho phép"</span><b>Áp dụng chuẩn nghiêm hơn</b></div>
      <div class="sd-rule down"><span>"Công ty không có quy định"</span><b>Standards vẫn áp dụng</b></div>
      <div class="sd-rule down"><span>"Đã công bố rồi"</span><b>Công bố không chữa mọi thứ</b></div>
      <div class="sd-rule down"><span>"Khách hàng có lãi"</span><b>Xét hành vi, không xét kết quả</b></div>
      <div class="sd-rule down"><span>"Số tiền nhỏ, nhân viên cấp thấp"</span><b>Không miễn trừ</b></div>`),

    S('Bản đồ 7 Standards', `<div class="sd-cols2"><div>${subBars}<p class="sd-cap">Số chuẩn con: tổng cộng 23</p></div>
      <div><div class="sd-steps"><span>I-II: nghề nghiệp và thị trường</span><span>III-IV: khách hàng và chủ lao động</span><span>V-VI: phân tích và xung đột</span><span>VII: CFA Institute</span></div></div></div>`),

    S('Tra nhanh: I Professionalism', grid([
      ['Chuẩn', 'Ý chính', 'Dấu hiệu trong đề'],
      ['I(A) Knowledge of the Law', 'Theo luật nghiêm hơn', 'Hai nước, hai bộ luật'],
      ['I(B) Independence', 'Không nhận quà mất khách quan', 'Chuyến đi do issuer trả'],
      ['I(C) Misrepresentation', 'Không trình bày sai', 'Đạo văn, hứa "chắc chắn"'],
      ['I(D) Misconduct', 'Không gian dối, lừa đảo', 'Gian lận chi phí'],
      ['I(E) Competence', 'Duy trì năng lực', 'Vai trò mới, không học thêm'],
    ])),

    S('Tra nhanh: II Integrity of Capital Markets', grid([
      ['Chuẩn', 'Ý chính', 'Dấu hiệu trong đề'],
      ['II(A) MNPI', 'Không hành động trên MNPI', 'Tin chưa công bố'],
      ['II(B) Manipulation', 'Không làm méo giá, khối lượng', 'Tin đồn, giao dịch giả'],
    ]) + `<div class="sd-cols2"><div class="sd-rule up"><span>Mosaic: công khai + không trọng yếu</span><b>Được</b></div><div class="sd-rule down"><span>Hành động trên MNPI cho khách hàng</span><b>Vi phạm</b></div></div>`),

    S('Tra nhanh: III Duties to Clients', grid([
      ['Chuẩn', 'Ý chính', 'Dấu hiệu trong đề'],
      ['III(A) Loyalty, Prudence, Care', 'Khách hàng trước hết', 'Soft dollar, proxy voting'],
      ['III(B) Fair Dealing', 'Công bằng, không cần như nhau', 'Phân bổ IPO, báo khách lớn trước'],
      ['III(C) Suitability', 'Phù hợp IPS hoặc mandate', 'Khách thận trọng, tài sản rủi ro'],
      ['III(D) Performance', 'Công bằng, chính xác, đầy đủ', 'Chỉ khoe tài khoản tốt nhất'],
      ['III(E) Confidentiality', 'Bảo mật, trừ 3 ngoại lệ', 'Phát hiện rửa tiền'],
    ])),

    S('Tra nhanh: IV và V', grid([
      ['Chuẩn', 'Ý chính', 'Dấu hiệu trong đề'],
      ['IV(A) Loyalty to Employer', 'Không lấy tài liệu, không lôi kéo', 'Chuẩn bị nghỉ việc'],
      ['IV(B) Additional Compensation', 'Đồng ý bằng văn bản', 'Thưởng theo kết quả tương lai'],
      ['IV(C) Supervisors', 'Nỗ lực hợp lý ngăn vi phạm', 'Chỉ nhắc nhở miệng'],
      ['V(A) Reasonable Basis', 'Nghiên cứu kỹ, có cơ sở', 'Khuyến nghị theo tin đồn'],
      ['V(B) Communication', 'Quy trình, rủi ro; tách ý kiến', 'Dự báo như sự thật'],
      ['V(C) Record Retention', 'Lưu hồ sơ; thuộc công ty', 'Hủy ghi chú, mang về nhà'],
    ])),

    S('Tra nhanh: VI và VII', grid([
      ['Chuẩn', 'Ý chính', 'Dấu hiệu trong đề'],
      ['VI(A) Avoid or Disclose', 'Tránh hoặc công bố nổi bật', 'Ghế HĐQT, sở hữu cổ phiếu'],
      ['VI(B) Priority', 'Khách → công ty → cá nhân', 'Tài khoản vợ, con nhỏ'],
      ['VI(C) Referral Fees', 'Công bố trước khi ký', 'Dịch vụ miễn phí đổi khách'],
      ['VII(A) CFA Programs', 'Bảo mật đề, theo quy chế', 'Bài đăng sau kỳ thi'],
      ['VII(B) Reference to CFA', 'Không phóng đại danh hiệu', '"CFA Level II", "một CFA"'],
    ])),

    S('Các cặp chuẩn dễ nhầm', grid([
      ['Cặp', 'Chuẩn thứ nhất', 'Chuẩn thứ hai'],
      ['I(B) và VI(A)', 'Mất khách quan', 'Tránh hoặc công bố'],
      ['IV(B) và VI(C)', 'Đồng ý bằng văn bản', 'Công bố phí giới thiệu'],
      ['III(B) và VI(B)', 'Giữa các khách hàng', 'Khách hàng và bản thân'],
      ['I(C) và VII(B)', 'Trình bày sai nói chung', 'Riêng về CFA'],
      ['I(A) và IV(C)', 'Tách mình khỏi vi phạm', 'Chủ động ngăn chặn'],
    ])),

    S('Bài tập: một tuần của Hoàng, CFA', `<div class="sd-steps">
      <span><b>a.</b> Nhận chuyến du lịch miễn phí từ công ty phát hành mà danh mục đang nắm</span>
      <span><b>b.</b> Nghe tin lỗ chưa công bố, bán cổ phiếu cho khách hàng</span>
      <span><b>c.</b> Vài phút trước đó, bán trong tài khoản của vợ</span>
      <span><b>d.</b> Duyệt tờ rơi ghi "Mai, CFA Level II" (Mai là cấp dưới)</span>
      <span><b>e.</b> Công bố phí giới thiệu 0,5% cho khách trước khi ký</span></div>
      <p class="sd-note">Tự đánh giá từng hành vi trước khi sang slide sau.</p>`),

    S('Lời giải: một tuần của Hoàng', grid([
      ['Hành vi', 'Chuẩn', 'Kết luận'],
      ['a. Chuyến du lịch', 'I(B)', 'Vi phạm'],
      ['b. Bán cho khách trên MNPI', 'II(A)', 'Vi phạm'],
      ['c. Bán tài khoản vợ trước', 'VI(B) và II(A)', 'Vi phạm'],
      ['d. Tờ rơi "CFA Level II"', 'VII(B) và IV(C)', 'Vi phạm'],
      ['e. Phí giới thiệu đã công bố', 'VI(C)', 'Tuân thủ'],
    ]) + '<p class="sd-note">Hành động trên MNPI <b>cho khách hàng</b> cũng là vi phạm: phải báo bộ phận tuân thủ.</p>'),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>Đọc câu hỏi trước đoạn văn</span><span>Xác định nhân vật và vai trò</span>
      <span>Luật nghiêm hơn được áp dụng</span><span>Công bố không chữa mọi thứ</span>
      <span>Xét hành vi, không xét kết quả</span><span>Ứng viên chịu ràng buộc như thành viên</span>
      <span>Một tình huống, nhiều chuẩn</span><span>Thuộc dấu hiệu của 23 chuẩn con</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 10 câu, mục tiêu ≥ 7 câu đúng.</p>`),
  ];

  addDeck('ET-10', `Slide Application of the Code and Standards - bản thiết kế riêng (${slides.length} slide)`, slides);
}());
