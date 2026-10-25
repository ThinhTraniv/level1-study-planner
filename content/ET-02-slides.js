// Bộ slide tự thiết kế cho ET-02 Code of Ethics and Standards of Professional Conduct.
(function () {
  const L = window.LESSONS && window.LESSONS['ET-02'];
  if (!L) return;
  const { slide, addDeck } = window.CFAH;
  const K = 'ET-02 · Code and Standards';
  const S = (title, body, opt = {}) => slide(title, body, Object.assign({ kicker: K }, opt));

  // Ba tầng: Code → Standards → Handbook.
  const tiers = (() => {
    const t = [['Code of Ethics', '6 nguyên tắc chung', 'sv-key', 'sv-keyt'], ['Standards of Professional Conduct', '7 Standards · 23 tiêu chuẩn con', 'sv-node', 'sv-txt'], ['Standards of Practice Handbook', 'hướng dẫn, khuyến nghị, tình huống', 'sv-node', 'sv-txt']];
    let s = '<svg viewBox="0 0 600 220" class="sv big" role="img" aria-label="Ba tầng của Code and Standards">';
    t.forEach(([n, d, c, tc], i) => {
      const w = 300 + i * 120, x = 300 - w / 2, y = 10 + i * 70;
      s += `<rect x="${x}" y="${y}" width="${w}" height="58" rx="12" class="${c}"/><text x="300" y="${y + 26}" class="${tc}" style="font-size:18px">${n}</text><text x="300" y="${y + 47}" class="sv-muted" style="font-size:13px">${d}</text>`;
    });
    return `${s}</svg>`;
  })();

  // Cơ cấu PCP.
  const org = `<svg viewBox="0 0 600 220" class="sv big" role="img" aria-label="Cơ cấu Professional Conduct Program">
    <rect x="20" y="20" width="250" height="56" rx="12" class="sv-panel"/><text x="145" y="45" class="sv-txt">Bylaws, Rules of</text><text x="145" y="66" class="sv-txt">Procedure</text>
    <text x="145" y="98" class="sv-muted">căn cứ vận hành</text>
    <rect x="330" y="20" width="250" height="56" rx="12" class="sv-node"/><text x="455" y="45" class="sv-txt">Board of Governors</text><text x="455" y="66" class="sv-muted">DRC: chịu trách nhiệm</text>
    <line x1="455" y1="80" x2="455" y2="124" class="sv-up"/>
    <rect x="330" y="128" width="250" height="56" rx="12" class="sv-key"/><text x="455" y="153" class="sv-keyt" style="font-size:18px">Professional</text><text x="455" y="175" class="sv-keyt" style="font-size:18px">Conduct staff</text>
    <line x1="325" y1="156" x2="275" y2="156" class="sv-pv"/>
    <rect x="20" y="128" width="250" height="56" rx="12" class="sv-panel"/><text x="145" y="153" class="sv-txt">Điều tra (inquiry)</text><text x="145" y="175" class="sv-muted">giải trình, phỏng vấn, hồ sơ</text></svg>`;

  const slides = [
    S('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Ethical and Professional Standards · ET-02</div>
      <h2>Code of Ethics and Standards<br>of Professional Conduct</h2>
      <p>Bộ luật chơi của nghề, và ai bảo đảm nó được thực thi</p>
      <div class="sd-chips"><span>LOS 1 · Professional Conduct Program</span><span>LOS 2 · 6 điều Code, 7 Standards</span><span>LOS 3 · Trách nhiệm đạo đức</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Ba tầng của Code and Standards', `${tiers}
      <p class="sd-note">Càng xuống dưới càng cụ thể. Tất cả là mức hành vi <b>tối thiểu</b>.</p>`),

    S('Ai phải tuân thủ?', `<div class="sd-cols2">
      <div class="sd-card acc"><b>Bị ràng buộc</b><p>Mọi member (kể cả charterholder)</p><p>Mọi candidate, từ lúc đăng ký Level I</p><small>Áp dụng cho hoạt động nghề nghiệp, ở mọi quốc gia</small></div>
      <div class="sd-card"><b>Không bắt buộc</b><p>Công ty nơi họ làm việc</p><p>Được khuyến khích áp dụng</p><small>Nghĩa vụ đặt lên cá nhân</small></div></div>
      <p class="sd-note">Hằng năm: ký <b>Professional Conduct Statement</b>, tự khai báo kiện tụng, điều tra, khiếu nại.</p>`),

    S('Cơ cấu Professional Conduct Program', `${org}
      <p class="sd-note">DRC <b>chịu trách nhiệm</b>; staff <b>điều tra</b>. Đừng đổi chỗ.</p>`),

    S('Điều gì khởi động một inquiry?', `<div class="sd-grid4">
      <div class="sd-card"><b>Tự khai báo</b><p>Trên Professional Conduct Statement</p></div>
      <div class="sd-card"><b>Khiếu nại văn bản</b><p>Gửi đến Professional Conduct staff</p></div>
      <div class="sd-card"><b>Nguồn công khai</b><p>Báo chí, truyền hình</p></div>
      <div class="sd-card acc"><b>Kỳ thi</b><p>Báo cáo giám thị, phân tích bài thi, mạng xã hội</p></div></div>`),

    S('Quy trình xử lý', `<div class="sd-steps">
      <span><b>1. Inquiry:</b> giải trình văn bản, phỏng vấn, thu thập hồ sơ</span>
      <span><b>2. Staff kết luận:</b> một trong ba hướng</span></div>
      <div class="sd-cols3">
      <div class="sd-card"><b>Không chế tài</b><p>Đóng inquiry</p></div>
      <div class="sd-card"><b>Cautionary letter</b><p>Nhắc nhở, không phải chế tài</p></div>
      <div class="sd-card acc"><b>Cáo buộc + chế tài</b><p>Chấp nhận → có hiệu lực</p><p>Từ chối → <b>hearing panel</b> (DRC)</p></div></div>`),

    S('Các chế tài', `<div class="sd-tbl grid">
      <div class="head"><span>Đối tượng</span><span>Chế tài</span><span>Mức độ</span></div>
      <div><span>Member</span><span>Public censure</span><span>Nhẹ nhất</span></div>
      <div><span>Member</span><span>Suspension thành viên và danh hiệu</span><span>Trung bình</span></div>
      <div><span>Member</span><span>Revocation charter</span><span>Nặng nhất</span></div>
      <div><span>Candidate</span><span>Đình chỉ, cấm thi tiếp</span><span>Theo vụ việc</span></div></div>
      <p class="sd-note">Cautionary letter <b>không</b> phải chế tài. CFA Institute <b>không</b> phạt tiền.</p>`),

    S('Code of Ethics: điều 1 - 3', `<div class="sd-cols3">
      <div class="sd-card"><div class="sd-n">1</div><b>Cách cư xử</b><p>Chính trực, năng lực, cần mẫn, tôn trọng, đạo đức với mọi bên</p></div>
      <div class="sd-card acc"><div class="sd-n">2</div><b>Ai đứng trước</b><p>Nghề và khách hàng trước lợi ích bản thân</p></div>
      <div class="sd-card"><div class="sd-n">3</div><b>Cách làm việc</b><p>Reasonable care và phán đoán độc lập</p></div></div>`),

    S('Code of Ethics: điều 4 - 6', `<div class="sd-cols3">
      <div class="sd-card"><div class="sd-n">4</div><b>Lan tỏa</b><p>Tự hành nghề và khuyến khích người khác hành nghề có đạo đức</p></div>
      <div class="sd-card"><div class="sd-n">5</div><b>Thị trường</b><p>Thúc đẩy tính toàn vẹn của thị trường vốn toàn cầu</p></div>
      <div class="sd-card acc"><div class="sd-n">6</div><b>Năng lực</b><p>Nâng cao năng lực của mình và của người khác</p></div></div>
      <p class="sd-note">Không có điều nào nói "lợi ích chủ lao động trước khách hàng".</p>`),

    S('Bảy Standards', `<div class="sd-cols2"><div class="sd-tbl grid">
      <div class="head"><span>Standard</span><span>Số</span></div>
      <div><span>I Professionalism</span><span>5</span></div>
      <div><span>II Integrity of Capital Markets</span><span>2</span></div>
      <div><span>III Duties to Clients</span><span>5</span></div>
      <div><span>IV Duties to Employers</span><span>3</span></div></div>
      <div class="sd-tbl grid">
      <div class="head"><span>Standard</span><span>Số</span></div>
      <div><span>V Investment Analysis, Recommendations, Actions</span><span>3</span></div>
      <div><span>VI Conflicts of Interest</span><span>3</span></div>
      <div><span>VII CFA Member or Candidate</span><span>2</span></div></div></div>
      <p class="sd-note">Thứ tự: Nghề → Thị trường → Khách hàng → Chủ lao động → Phân tích → Xung đột → CFA Institute.</p>`),

    S('Tiêu chuẩn con: I - III', `<div class="sd-cols3">
      <div class="sd-card"><b>I. Professionalism</b><p>A Knowledge of the Law · B Independence and Objectivity · C Misrepresentation · D Misconduct · E Competence</p></div>
      <div class="sd-card"><b>II. Capital Markets</b><p>A Material Nonpublic Information · B Market Manipulation</p></div>
      <div class="sd-card acc"><b>III. Clients</b><p>A Loyalty, Prudence, and Care · B Fair Dealing · C Suitability · D Performance Presentation · E Confidentiality</p></div></div>`),

    S('Tiêu chuẩn con: IV - VII', `<div class="sd-grid4">
      <div class="sd-card"><b>IV. Employers</b><p>A Loyalty · B Additional Compensation · C Supervisors</p></div>
      <div class="sd-card"><b>V. Analysis</b><p>A Diligence and Reasonable Basis · B Communication · C Record Retention</p></div>
      <div class="sd-card"><b>VI. Conflicts</b><p>A Avoid or Disclose · B Priority of Transactions · C Referral Fees</p></div>
      <div class="sd-card acc"><b>VII. CFA</b><p>A Conduct in CFA Programs · B Reference to CFA</p></div></div>
      <p class="sd-note">Tổng cộng 5 + 2 + 5 + 3 + 3 + 3 + 2 = <b>23</b>.</p>`),

    S('Bốn nguyên tắc xuyên suốt', `<div class="sd-steps">
      <span><b>Ưu tiên:</b> khách hàng → chủ lao động → bản thân</span>
      <span><b>Chặt hơn thì theo:</b> luật hay Code, cái nào chặt hơn</span>
      <span><b>Tránh hoặc công bố:</b> công bố phải nổi bật, dễ hiểu</span>
      <span><b>Nỗ lực hợp lý:</b> đánh giá theo quy trình, không theo kết quả lãi lỗ</span></div>`),

    S('Bẫy thường gặp', `<div class="sd-rule down">Nghĩ phải có khiếu nại mới mở inquiry</div>
      <div class="sd-rule down">Coi cautionary letter là chế tài</div>
      <div class="sd-rule down">Nghĩ thí sinh Level I chưa bị ràng buộc</div>
      <div class="sd-rule down">Nhầm III(A) Loyalty (khách hàng) với IV(A) Loyalty (chủ lao động)</div>
      <div class="sd-rule up">Từ chối chế tài → hearing panel gồm thành viên DRC</div>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>Members và Candidates đều bị ràng buộc</span><span>Công ty không bắt buộc áp dụng</span>
      <span>DRC chịu trách nhiệm, staff điều tra</span><span>5 nguồn khởi động inquiry</span>
      <span>Staff: không chế tài, cautionary letter, kỷ luật</span><span>Censure, suspension, revocation</span>
      <span>Code: 6 điều, khách hàng trước bản thân</span><span>7 Standards, 23 tiêu chuẩn con</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 10 câu, mục tiêu ≥ 7 câu đúng.</p>`),
  ];

  addDeck('ET-02', `Slide Code and Standards - bản thiết kế riêng (${slides.length} slide)`, slides);
}());
