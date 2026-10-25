// Bộ slide tự thiết kế cho ET-09 Guidance for Standard VII: Responsibilities as a CFA Institute Member or CFA Candidate.
(function () {
  const L = window.LESSONS && window.LESSONS['ET-09'];
  if (!L) return;
  const { slide, addDeck } = window.CFAH;
  const K = 'ET-09 · Standard VII Member and Candidate';
  const S = (title, body, opt = {}) => slide(title, body, Object.assign({ kicker: K }, opt));

  // Điều kiện duy trì quyền dùng danh hiệu: PCS + hội phí hằng năm.
  const keep = (() => {
    let s = '<svg viewBox="0 0 600 230" class="sv big" role="img" aria-label="Điều kiện duy trì tư cách thành viên và quyền dùng danh hiệu">';
    [['Nộp PCS', 'hằng năm', 15], ['Đóng hội phí', 'hằng năm', 115]].forEach(([a, b, y]) => {
      s += `<rect x="20" y="${y}" width="200" height="70" rx="12" class="sv-node up"/><text x="120" y="${y + 32}" class="sv-txt sv-t-up">${a}</text><text x="120" y="${y + 56}" class="sv-muted">${b}</text>`;
      s += `<line x1="222" y1="${y + 35}" x2="345" y2="100" class="sv-axis"/>`;
    });
    s += '<rect x="350" y="50" width="230" height="100" rx="14" class="sv-key"/><text x="465" y="90" class="sv-keyt">Thành viên</text><text x="465" y="123" class="sv-txt">được dùng "CFA"</text>';
    s += '<text x="300" y="222" class="sv-muted">Thiếu một: mất tư cách, ngừng dùng danh hiệu</text>';
    return `${s}</svg>`;
  })();

  const slides = [
    S('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Ethical and Professional Standards · ET-09</div>
      <h2>Standard VII:<br>Member and Candidate</h2>
      <p>Bảo vệ kỳ thi, nói đúng về danh hiệu.</p>
      <div class="sd-chips"><span>VII(A) Conduct in CFA Programs</span><span>VII(B) Reference to CFA</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Hai chuẩn, hai loại hành vi', `<div class="sd-cols2">
      <div class="sd-card acc"><div class="sd-n">A</div><b>Hành vi</b><p>Thi cử, bảo mật đề, tuân thủ quy chế, khai PCS trung thực</p><small>Không làm tổn hại liêm chính, an ninh của chương trình</small></div>
      <div class="sd-card"><div class="sd-n">B</div><b>Lời nói, chữ viết</b><p>Danh thiếp, CV, quảng cáo, LinkedIn</p><small>Không xuyên tạc, phóng đại ý nghĩa của thành viên, danh hiệu, ứng viên</small></div></div>
      <p class="sd-note">Bạn đang là ứng viên: cả hai chuẩn áp dụng cho bạn <b>ngay bây giờ</b>.</p>`),

    S('VII(A): sáu nhóm hành vi bị cấm', `<div class="sd-tbl grid">
      <div class="head"><span>Nhóm</span><span>Ví dụ</span></div>
      <div><span>Gian lận</span><span>Tài liệu, thiết bị cấm, thi hộ</span></div>
      <div><span>Lộ thông tin đề</span><span>Câu hỏi, chủ đề có hoặc không có, công thức</span></div>
      <div><span>Không tuân thủ quy chế</span><span>Máy tính, đồ dùng, hết giờ, Pledge</span></div>
      <div><span>Lộ thông tin bảo mật</span><span>Thông tin chưa công khai của chương trình</span></div>
      <div><span>Lợi dụng danh hiệu</span><span>Vì mục tiêu cá nhân không chính đáng</span></div>
      <div><span>Khai sai</span><span>PCS, giờ học tập liên tục</span></div></div>`),

    S('Được phép và không được phép', `<div class="sd-cols2">
      <div><div class="sd-rule up"><span>Chỉ trích lệ phí, tỷ lệ đỗ</span><b>Được</b></div>
      <div class="sd-rule up"><span>Thảo luận curriculum, LOS đã công bố</span><b>Được</b></div>
      <div class="sd-rule up"><span>Lập nhóm học, chia sẻ ghi chú</span><b>Được</b></div></div>
      <div><div class="sd-rule down"><span>Kể câu hỏi trong đề</span><b>Cấm</b></div>
      <div class="sd-rule down"><span>Kể chủ đề không có trong đề</span><b>Cấm</b></div>
      <div class="sd-rule down"><span>Làm bài sau khi hết giờ</span><b>Cấm</b></div></div></div>`),

    S('Bẫy kinh điển: "tôi chỉ nói cái không có"', `<div class="sd-card"><p>"Đề quá hóc búa. Những phần quan trọng như FCF, DDM, Residual Income bị bỏ qua hoàn toàn."</p><small>Ứng viên Level II, blog nhóm học, ba ngày sau kỳ thi</small></div>
      <div class="sd-rule down"><span>Chỉ nói chủ đề không có trong đề</span><b>Vẫn vi phạm</b></div>
      <div class="sd-rule down"><span>Đăng sau khi thi xong</span><b>Vẫn vi phạm</b></div>
      <p class="sd-note">Người thi sau có thể dùng thông tin đó để thu hẹp phạm vi ôn tập.</p>`),

    S('Tình nguyện viên và PCS', `<div class="sd-cols2">
      <div class="sd-card"><b>Tình nguyện viên</b><p>Soạn đề, chấm bài, hội đồng</p><small>Không gợi hỏi, không tiết lộ câu hỏi, quy trình chấm, cách cho điểm</small></div>
      <div class="sd-card acc"><b>Professional Conduct Statement</b><p>Khai hằng năm về tuân thủ, khiếu nại, điều tra</p><small>Khai sai hoặc giấu điều tra: vi phạm VII(A)</small></div></div>`),

    S('VII(B): ba tư cách cần phân biệt', `<div class="sd-tbl grid">
      <div class="head"><span>Tư cách</span><span>Điều kiện</span><span>Mất khi</span></div>
      <div><span>Thành viên</span><span>PCS + hội phí hằng năm</span><span>Thiếu một trong hai</span></div>
      <div><span>CFA charterholder</span><span>Có charter + là thành viên</span><span>Tư cách thành viên mất</span></div>
      <div><span>Ứng viên</span><span>Đăng ký kỳ thi tới hoặc chờ kết quả</span><span>Không đăng ký kỳ tiếp</span></div></div>
      <p class="sd-note">Khôi phục tư cách thành viên thì được dùng lại danh hiệu.</p>`),

    S('Giữ quyền dùng danh hiệu', `<div class="sd-cols2 wide-left"><div>${keep}</div>
      <div><div class="sd-steps"><span>Charter được cấp một lần</span><span>Quyền <b>dùng</b> danh hiệu phải duy trì hằng năm</span><span>Hội phí quá hạn: bỏ "CFA" khỏi danh thiếp, email, CV</span></div></div></div>`),

    S('Không có danh hiệu "từng phần"', `<div class="sd-cols2">
      <div><div class="sd-rule down"><span>Lan, CFA Level II</span><b>Sai</b></div>
      <div class="sd-rule down"><span>Có danh hiệu CFA Level I</span><b>Sai</b></div>
      <div class="sd-rule down"><span>Lan, CFA (dự kiến 2028)</span><b>Sai</b></div></div>
      <div><div class="sd-rule up"><span>Đã đỗ Level II của CFA Program</span><b>Đúng</b></div>
      <div class="sd-rule up"><span>Ứng viên Level III của CFA Program</span><b>Đúng</b></div>
      <div class="sd-rule up"><span>Đã hoàn thành ba cấp độ liên tiếp</span><b>Đúng</b></div></div></div>`),

    S('Viết danh xưng: đúng và sai', `<div class="sd-tbl grid">
      <div class="head"><span>Đúng</span><span>Sai</span><span>Lý do</span></div>
      <div><span>Nguyễn Lan, CFA</span><span>Nguyễn Lan, C.F.A.</span><span>Viết hoa, không dấu chấm</span></div>
      <div><span>Lan là CFA charterholder</span><span>Lan là một CFA</span><span>CFA không là danh từ</span></div>
      <div><span>Danh hiệu Chartered Financial Analyst</span><span>Bằng CFA</span><span>Không phải văn bằng</span></div>
      <div><span>Thành viên CFA Institute</span><span>Thành viên (hội phí quá hạn)</span><span>Tư cách đã mất</span></div></div>`),

    S('Sự thật thì được, phóng đại thì không', `<div class="sd-cols2">
      <div class="sd-card acc"><b>Được nói</b><p>"Đỗ cả ba cấp độ ngay lần đầu"</p><p>"Chương trình rất khó, nhiều công ty yêu cầu"</p><p>"Charterholder cam kết tuân thủ đạo đức"</p></div>
      <div class="sd-card"><b>Không được nói</b><p>"Nhờ đỗ ngay lần đầu, quỹ của chúng tôi vượt chỉ số"</p><p>"Là CFA nên rủi ro danh mục thấp hơn"</p><p>Hứa hẹn năng lực, kết quả</p></div></div>`),

    S('Tình huống: một CV, hai chuẩn', `<div class="sd-card"><p>"Được CFA Institute cấp <b>bằng CFA</b> năm 2025. Tốt nghiệp <b>loại giỏi</b> ngành tài chính." (Thực tế: ngành quản trị, điểm dưới ngưỡng loại giỏi.)</p></div>
      <div class="sd-cols2"><div class="sd-rule down"><span>"Bằng CFA"</span><b>VII(B)</b></div><div class="sd-rule down"><span>Sai ngành, sai xếp loại</span><b>I(C)</b></div></div>
      <p class="sd-note">Kết luận: vi phạm <b>cả hai</b> chuẩn. Công ty nên rà soát CV, danh thiếp, quảng cáo trước khi phát hành.</p>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>Không kể gì về nội dung, phạm vi đề</span><span>Được chỉ trích CFA Institute</span>
      <span>Vi phạm quy chế thi là vi phạm VII(A)</span><span>Khai PCS trung thực</span>
      <span>Thành viên: PCS + hội phí hằng năm</span><span>Ứng viên: đang đăng ký kỳ thi tới</span>
      <span>Không có danh hiệu từng phần</span><span>CFA là tính từ, không phải bằng cấp</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 10 câu, mục tiêu ≥ 7 câu đúng.</p>`),
  ];

  addDeck('ET-09', `Slide Standard VII Member and Candidate - bản thiết kế riêng (${slides.length} slide)`, slides);
}());
