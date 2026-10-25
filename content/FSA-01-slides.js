// Bộ slide tự thiết kế cho FSA-01 Introduction to Financial Statement Analysis.
(function () {
  const L = window.LESSONS && window.LESSONS['FSA-01'];
  if (!L) return;
  const { slide, addDeck } = window.CFAH;
  const K = 'FSA-01 · Introduction to FSA';
  const S = (title, body, opt = {}) => slide(title, body, Object.assign({ kicker: K }, opt));

  // Cây quyết định ý kiến kiểm toán.
  const auditTree = (() => {
    const W = 600, H = 300;
    const box = (x, y, w, h, txt, cls) => `<rect x="${x - w / 2}" y="${y - h / 2}" width="${w}" height="${h}" rx="8" class="sv-node ${cls || ''}"/><text x="${x}" y="${y + 6}" class="sv-txt">${txt}</text>`;
    const ln = (x1, y1, x2, y2, lab, lx, ly) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="sv-axis"/>${lab ? `<text x="${lx}" y="${ly}" class="sv-muted">${lab}</text>` : ''}`;
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv" role="img" aria-label="Cây quyết định ý kiến kiểm toán">`;
    s += ln(300, 50, 110, 130, 'không', 185, 80) + ln(300, 50, 400, 130, 'có', 370, 80);
    s += ln(400, 150, 300, 230, 'không', 330, 195) + ln(400, 150, 500, 230, 'có', 470, 195);
    s += box(300, 36, 260, 40, 'Vấn đề có trọng yếu?');
    s += box(110, 150, 190, 44, 'Chấp nhận toàn phần', 'up');
    s += box(400, 150, 200, 40, 'Có lan tỏa?');
    s += box(300, 252, 170, 44, 'Ngoại trừ');
    s += box(500, 252, 190, 44, 'Trái ngược / Từ chối', 'down');
    s += `<text x="500" y="294" class="sv-muted">sai sót / thiếu bằng chứng</text>`;
    return `${s}</svg>`;
  })();

  // Vòng 6 bước của khung phân tích.
  const cycle = (() => {
    const W = 600, H = 300, cx = 300, cy = 150, R = 110;
    const steps = ['1 Mục tiêu', '2 Thu thập', '3 Xử lý', '4 Phân tích', '5 Báo cáo', '6 Cập nhật'];
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv" role="img" aria-label="Sáu bước của khung phân tích">`;
    s += `<circle cx="${cx}" cy="${cy}" r="${R}" class="sv-dash" fill="none"/>`;
    steps.forEach((lab, i) => {
      const a = -Math.PI / 2 + (i * 2 * Math.PI) / 6;
      const x = cx + 1.25 * R * Math.cos(a), y = cy + 1.1 * R * Math.sin(a);
      const cls = i === 2 ? 'up' : i === 3 ? 'down' : '';
      s += `<rect x="${x - 70}" y="${y - 18}" width="140" height="36" rx="8" class="sv-node ${cls}"/><text x="${x}" y="${y + 6}" class="sv-txt">${lab}</text>`;
    });
    s += `<text x="${cx}" y="${cy - 4}" class="sv-txt">Quyết định</text><text x="${cx}" y="${cy + 22}" class="sv-muted">kinh tế</text>`;
    return `${s}</svg>`;
  })();

  // Mốc chuẩn mực mới.
  const stdLine = (() => {
    const W = 600, H = 170, x0 = 50, x1 = 550, y = 80;
    const X = yr => x0 + ((yr - 2017) / (2028 - 2017)) * (x1 - x0);
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv" role="img" aria-label="Mốc chuẩn mực mới">`;
    s += `<line x1="${x0}" y1="${y}" x2="${x1}" y2="${y}" class="sv-axis"/>`;
    [[2018, 'IFRS 9, IFRS 15', 'Công cụ tài chính, doanh thu', true], [2019, 'IFRS 16', 'Thuê tài sản lên BCĐKT', false], [2027, 'IFRS 18', 'Trình bày BCKQKD mới', true]].forEach(([yr, a, b, up]) => {
      s += `<circle cx="${X(yr)}" cy="${y}" r="7" class="sv-dot"/><text x="${X(yr)}" y="${y + 26}" class="sv-muted">${yr}</text>`;
      s += `<text x="${X(yr)}" y="${up ? y - 40 : y + 54}" class="sv-txt sv-t-pv">${a}</text><text x="${X(yr)}" y="${up ? y - 18 : y + 76}" class="sv-muted">${b}</text>`;
    });
    return `${s}</svg>`;
  })();

  const slides = [
    S('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Financial Statement Analysis · FSA-01</div>
      <h2>Introduction to<br>Financial Statement Analysis</h2>
      <p>Tìm thông tin ở đâu, tin được đến đâu, làm theo quy trình nào</p>
      <div class="sd-chips"><span>LOS 1 · Khung 6 bước</span><span>LOS 2 · Vai trò</span><span>LOS 3 · Hồ sơ, thuyết minh, kiểm toán</span><span>LOS 4 · Chuẩn mực</span><span>LOS 5 · Nguồn khác</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Lập báo cáo khác phân tích báo cáo', `<div class="sd-cols2">
      <div class="sd-card"><b>Financial reporting</b><p>Doanh nghiệp ghi nhận và trình bày theo chuẩn mực</p><small>Người làm: ban điều hành</small></div>
      <div class="sd-card acc"><b>Financial statement analysis</b><p>Dùng BCTC và thông tin khác để <b>ra quyết định kinh tế</b></p><small>Người làm: nhà đầu tư, chủ nợ, đối tác</small></div></div>
      <p class="sd-note">Đánh giá: kết quả quá khứ · tình hình hiện tại · lợi nhuận và dòng tiền tương lai · rủi ro.</p>`),

    S('Cùng bộ báo cáo, khác câu hỏi', `<div class="sd-cols2">
      <div class="sd-card"><b>Nhà phân tích cổ phiếu</b><p>Tăng trưởng có bền không?</p><p>Giá đắt hay rẻ?</p><small>Hưởng phần tăng thêm không giới hạn</small></div>
      <div class="sd-card acc"><b>Nhà phân tích tín dụng</b><p>Đủ tiền trả lãi và gốc?</p><p>Kịch bản xấu nhất ra sao?</p><small>Chỉ nhận lãi và gốc cố định</small></div></div>
      <p class="sd-note">Ngoài ra: tổ chức xếp hạng, bên mua trong M&amp;A, nhà cung cấp, khách hàng lớn.</p>`),

    S('Bốn báo cáo chính', `<div class="sd-grid4">
      <div class="sd-card"><b>Cân đối kế toán</b><p>Tài sản = Nợ + Vốn chủ</p><small>Một thời điểm</small></div>
      <div class="sd-card"><b>Kết quả kinh doanh và OCI</b><p>Doanh thu, chi phí, lợi nhuận</p><small>Một thời kỳ</small></div>
      <div class="sd-card"><b>Thay đổi vốn chủ</b><p>Lợi nhuận, OCI, cổ tức, phát hành</p><small>Một thời kỳ</small></div>
      <div class="sd-card acc"><b>Lưu chuyển tiền tệ</b><p>Kinh doanh, đầu tư, tài chính</p><small>Tiền thật</small></div></div>
      <p class="sd-note">Lợi nhuận theo cơ sở dồn tích; tiền mới cho biết khả năng chi trả.</p>`),

    S('Hồ sơ nộp SEC cần nhận ra', `<div class="sd-tbl grid">
      <div class="head"><span>Mẫu</span><span>Nội dung</span></div>
      <div><span>10-K</span><span>Báo cáo năm, BCTC đã kiểm toán, MD&amp;A</span></div>
      <div><span>10-Q</span><span>Báo cáo quý, thường chưa kiểm toán</span></div>
      <div><span>8-K</span><span>Sự kiện trọng yếu bất thường</span></div>
      <div><span>DEF 14A</span><span>Proxy: HĐQT, thù lao, biểu quyết</span></div>
      <div><span>3, 4, 5, 144</span><span>Giao dịch của người nội bộ</span></div>
      <div><span>20-F, 6-K</span><span>Doanh nghiệp nước ngoài niêm yết tại Mỹ</span></div></div>`),

    S('Thuyết minh: không tách rời BCTC', `<div class="sd-cols2 wide-left">
      <div><div class="sd-rule up">Chính sách kế toán, cơ sở lập</div><div class="sd-rule up">Ước tính và xét đoán quan trọng</div><div class="sd-rule up">Chi tiết khoản mục, nợ vay theo kỳ hạn</div><div class="sd-rule up">Nghĩa vụ tiềm tàng, bên liên quan, sự kiện sau kỳ</div><div class="sd-rule up">Thông tin bộ phận</div></div>
      <div class="sd-card acc"><b>Được kiểm toán</b><p>Khấu hao máy bay 25 năm hay 15 năm? Chỉ thuyết minh mới cho biết.</p></div></div>`),

    S('MD&A: tiếng nói của ban điều hành', `<div class="sd-cols2">
      <div class="sd-card"><b>Nội dung</b><p>Kết quả và nguyên nhân thay đổi</p><p>Thanh khoản, nguồn vốn</p><p>Xu hướng, sự kiện đã biết</p><p>Ước tính kế toán quan trọng</p></div>
      <div class="sd-card acc"><b>Cần nhớ</b><p><b>Không được kiểm toán</b></p><p>Bắt buộc theo SEC; IFRS chỉ khuyến khích</p><p>Đọc để biết ban điều hành nghĩ gì, rồi kiểm chứng bằng số liệu</p></div></div>`),

    S('Bốn loại ý kiến kiểm toán', `<div class="sd-cols2 wide-left"><div>${auditTree}</div><div><div class="sd-rule up">Không trọng yếu: chấp nhận toàn phần</div><div class="sd-rule">Trọng yếu, không lan tỏa: ngoại trừ</div><div class="sd-rule down">Lan tỏa: trái ngược (sai sót) hoặc từ chối (thiếu bằng chứng)</div></div></div>
      <p class="sd-note">Kiểm toán cho <b>bảo đảm hợp lý</b>, không tuyệt đối. Ban điều hành chịu trách nhiệm lập BCTC.</p>`),

    S('Đọc gì thêm trong báo cáo kiểm toán', `<div class="sd-cols3">
      <div class="sd-card"><b>KAM / CAM</b><p>Vấn đề cần nhiều xét đoán nhất</p><small>Bản đồ rủi ro miễn phí</small></div>
      <div class="sd-card"><b>Going concern</b><p>Bất định về khả năng hoạt động liên tục</p><small>Có thể đi kèm ý kiến sạch</small></div>
      <div class="sd-card acc"><b>Kiểm soát nội bộ</b><p>Ý kiến riêng với công ty niêm yết lớn ở Mỹ</p><small>Sarbanes-Oxley</small></div></div>`),

    S('Người soạn luật chơi và người thổi còi', `<div class="sd-cols2">
      <div class="sd-card"><b>Lập chuẩn mực</b><p>IASB: IFRS</p><p>FASB: US GAAP</p><small>Tư nhân, độc lập, không cưỡng chế</small></div>
      <div class="sd-card acc"><b>Cơ quan quản lý</b><p>SEC, ESMA, FCA, UBCKNN</p><p>IOSCO: hiệp hội các cơ quan quản lý</p><small>Có quyền pháp lý, xử phạt</small></div></div>`),

    S('IFRS và US GAAP vẫn còn khác', `<div class="sd-tbl grid">
      <div class="head"><span>Vấn đề</span><span>IFRS</span><span>US GAAP</span></div>
      <div><span>Chi phí phát triển</span><span>Vốn hóa nếu đủ điều kiện</span><span>Thường ghi chi phí</span></div>
      <div><span>LIFO</span><span>Cấm</span><span>Được dùng</span></div>
      <div><span>Đánh giá lại TSCĐ</span><span>Được chọn</span><span>Không</span></div>
      <div><span>Lãi vay đã trả</span><span>CFO hoặc CFF</span><span>CFO</span></div></div>
      <p class="sd-note">So sánh hai công ty khác chuẩn mực: <b>nhận diện và điều chỉnh</b> trước khi so tỷ số.</p>`),

    S('Theo dõi chuẩn mực mới', `${stdLine}
      <div class="sd-cols2"><div class="sd-rule down">Con số đổi dù kinh tế thực chất không đổi</div><div class="sd-rule up">Đọc thuyết minh về chuẩn mực chưa hiệu lực, kiểm tra số liệu hồi tố</div></div>`),

    S('Nguồn thông tin ngoài báo cáo', `<div class="sd-grid4">
      <div class="sd-card"><b>Doanh nghiệp</b><p>Earnings call, thông cáo, trình bày nhà đầu tư</p></div>
      <div class="sd-card"><b>Ngành, vĩ mô</b><p>Hiệp hội ngành, thống kê, ngân hàng trung ương</p></div>
      <div class="sd-card"><b>Bên thứ ba</b><p>Công ty chứng khoán, xếp hạng tín nhiệm, báo chí</p></div>
      <div class="sd-card acc"><b>Dữ liệu thay thế</b><p>Vệ tinh, lượt truy cập web, giao dịch thẻ</p></div></div>
      <p class="sd-note">Cân nhắc độ tin cậy, tính kịp thời, chi phí. Không dùng thông tin trọng yếu chưa công bố.</p>`),

    S('Khung phân tích 6 bước', `<div class="sd-cols2 wide-left"><div>${cycle}</div>
      <div><div class="sd-rule up">Bước 3: điều chỉnh, tính tỷ số, common-size</div><div class="sd-rule down">Bước 4: trả lời câu hỏi, đi đến kết luận</div><p class="sd-note">Tính ra con số chưa phải là phân tích.</p></div></div>`),

    S('Đầu ra của từng bước', `<div class="sd-tbl grid">
      <div class="head"><span>Bước</span><span>Đầu ra điển hình</span></div>
      <div><span>1 Mục tiêu, bối cảnh</span><span>Câu hỏi cần trả lời, thời hạn, nguồn lực</span></div>
      <div><span>2 Thu thập</span><span>BCTC, dữ liệu ngành, ghi chú phỏng vấn</span></div>
      <div><span>3 Xử lý</span><span>BCTC điều chỉnh, tỷ số, biểu đồ, dự báo</span></div>
      <div><span>4 Phân tích</span><span>Kết luận, khuyến nghị</span></div>
      <div><span>5 Báo cáo</span><span>Báo cáo, bài trình bày đúng chuẩn mực nghề</span></div>
      <div><span>6 Cập nhật</span><span>Báo cáo cập nhật định kỳ</span></div></div>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>Vai trò: hỗ trợ quyết định kinh tế</span><span>Thuyết minh được kiểm toán, MD&amp;A thì không</span>
      <span>10-K năm, 10-Q quý, 8-K bất thường</span><span>Trọng yếu, không lan tỏa: ngoại trừ</span>
      <span>Lan tỏa: trái ngược hoặc từ chối</span><span>IASB, FASB soạn; SEC cưỡng chế</span>
      <span>Khác chuẩn mực: điều chỉnh trước khi so</span><span>Tính tỷ số là bước 3, kết luận là bước 4</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 10 câu, mục tiêu ≥ 7 câu đúng.</p>`),
  ];

  addDeck('FSA-01', `Slide Introduction to FSA - bản thiết kế riêng (${slides.length} slide)`, slides);
}());
