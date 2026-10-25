// Bộ slide tự thiết kế cho ET-03 Guidance for Standard I: Professionalism.
(function () {
  const L = window.LESSONS && window.LESSONS['ET-03'];
  if (!L) return;
  const { slide, addDeck } = window.CFAH;
  const K = 'ET-03 · Standard I: Professionalism';
  const S = (title, body, opt = {}) => slide(title, body, Object.assign({ kicker: K }, opt));

  // Ba bộ quy tắc, chọn bộ chặt nhất.
  const strict = `<svg viewBox="0 0 600 200" class="sv big" role="img" aria-label="Ba bộ quy tắc, áp dụng bộ chặt nhất">
    ${[['Code and', 'Standards', 100], ['Luật nơi', 'cư trú', 300], ['Luật nơi', 'kinh doanh', 500]].map(([a, b, x]) => `<rect x="${x - 85}" y="14" width="170" height="70" rx="12" class="sv-node"/><text x="${x}" y="44" class="sv-txt">${a}</text><text x="${x}" y="68" class="sv-txt">${b}</text><line x1="${x}" y1="88" x2="${x < 300 ? 270 : x > 300 ? 330 : 300}" y2="124" class="sv-up"/>`).join('')}
    <rect x="160" y="128" width="280" height="58" rx="14" class="sv-key"/><text x="300" y="164" class="sv-keyt">Theo quy định chặt nhất</text></svg>`;

  // Áp lực vây quanh nhà phân tích.
  const pressure = (() => {
    const src = [['Investment banking', 110, 40], ['Công ty được phân tích', 490, 40], ['Quản lý danh mục', 110, 190], ['Quỹ bên ngoài', 490, 190]];
    let s = '<svg viewBox="0 0 600 230" class="sv big" role="img" aria-label="Các nguồn áp lực lên nhà phân tích">';
    src.forEach(([n, x, y]) => {
      s += `<rect x="${x - 100}" y="${y - 22}" width="200" height="44" rx="10" class="sv-node down"/><text x="${x}" y="${y + 6}" class="sv-txt" style="font-size:15px">${n}</text>`;
      s += `<line x1="${x < 300 ? x + 60 : x - 60}" y1="${y < 115 ? y + 24 : y - 24}" x2="${x < 300 ? 245 : 355}" y2="${y < 115 ? 92 : 138}" class="sv-down"/>`;
    });
    s += '<circle cx="300" cy="115" r="58" class="sv-key"/><text x="300" y="110" class="sv-keyt" style="font-size:17px">Nhà phân tích</text><text x="300" y="132" class="sv-muted" style="font-size:13px">độc lập, khách quan</text></svg>';
    return s;
  })();

  const slides = [
    S('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Ethical and Professional Standards · ET-03</div>
      <h2>Guidance for Standard I:<br>Professionalism</h2>
      <p>Hiểu luật, giữ độc lập, nói thật, không gian dối, đủ năng lực</p>
      <div class="sd-chips"><span>I(A) Knowledge of the Law</span><span>I(B) Independence</span><span>I(C) Misrepresentation</span><span>I(D) Misconduct</span><span>I(E) Competence</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Năm tiêu chuẩn, năm câu hỏi', `<div class="sd-tbl grid">
      <div class="head"><span>Tiêu chuẩn</span><span>Câu hỏi tự kiểm tra</span></div>
      <div><span>I(A) Law</span><span>Mình có theo quy định chặt nhất không?</span></div>
      <div><span>I(B) Independence</span><span>Có gì làm kết luận của mình bị lệch không?</span></div>
      <div><span>I(C) Misrepresentation</span><span>Điều mình nói có tạo ấn tượng sai không?</span></div>
      <div><span>I(D) Misconduct</span><span>Có gian dối hay làm tổn hại uy tín nghề không?</span></div>
      <div><span>I(E) Competence</span><span>Mình có đủ năng lực cho việc này không?</span></div></div>`),

    S('I(A): ba bộ quy tắc', `${strict}
      <p class="sd-note">Không cần là luật sư, nhưng phải đủ hiểu để nhận ra vi phạm. <b>Không vi phạm bộ nào</b> là cách nhớ đơn giản nhất.</p>`),

    S('I(A): theo bộ nào?', `<div class="sd-tbl grid">
      <div class="head"><span>Tình huống</span><span>Phải tuân theo</span></div>
      <div><span>Luật lỏng hơn Code</span><span>Code and Standards</span></div>
      <div><span>Không có luật chứng khoán</span><span>Code and Standards</span></div>
      <div><span>Luật chặt hơn Code</span><span>Luật địa phương</span></div>
      <div><span>Luật cấm bán khống, Code không cấm</span><span>Không bán khống</span></div></div>
      <p class="sd-note">Ví dụ kinh điển: cư trú nước A (lỏng), làm ăn ở B (không luật) và C (chặt) → Code ở A và B, luật ở C.</p>`),

    S('I(A): khi phát hiện vi phạm', `<div class="sd-steps">
      <span><b>1.</b> Báo cấp trên hoặc compliance</span>
      <span><b>2.</b> Không được xử lý → <b>dissociate</b>: rút khỏi hoạt động</span>
      <span><b>3.</b> Không tách được → cân nhắc <b>nghỉ việc</b></span></div>
      <div class="sd-cols2"><div class="sd-rule down">Im lặng và tiếp tục = có thể bị xem là tham gia</div><div class="sd-rule up">Báo cơ quan quản lý: không bắt buộc theo Code, nhưng được khuyến khích</div></div>`),

    S('I(B): ai gây áp lực?', `${pressure}
      <p class="sd-note">Cấm cả <b>mời</b>, <b>đòi</b> và <b>nhận</b> lợi ích làm tổn hại khách quan của mình hoặc người khác.</p>`),

    S('I(B): được nhận hay không?', `<div class="sd-tbl grid">
      <div class="head"><span>Hành vi</span><span>Đánh giá</span></div>
      <div><span>Bữa ăn thông thường, quà token</span><span>Được</span></div>
      <div><span>Quà của khách hàng</span><span>Được, công bố cho chủ lao động</span></div>
      <div><span>Vé máy bay thương mại do issuer trả</span><span>Nên tự trả</span></div>
      <div><span>Vé thể thao, nghỉ dưỡng xa hoa từ issuer</span><span>Vi phạm</span></div>
      <div><span>Issuer-paid research, phí cố định, có công bố</span><span>Được</span></div>
      <div><span>Thù lao gắn với kết luận</span><span>Vi phạm</span></div></div>`),

    S('I(B): áp lực từ investment banking', `<div class="sd-cols2">
      <div class="sd-card"><b>Không được</b><p>Nâng khuyến nghị "một bậc"</p><p>Đổi nhà phân tích để có kết luận khác</p><p>Đổi kết luận vì giữ quan hệ</p></div>
      <div class="sd-card acc"><b>Được</b><p>Đưa vào <b>restricted list</b></p><p>Chỉ cung cấp thông tin dữ kiện</p><p>Firewall giữa phân tích và IB</p></div></div>`),

    S('I(B): khuyến nghị cho công ty', `<div class="sd-check">
      <span>Chính sách độc lập bằng văn bản</span><span>Firewall phân tích - IB</span>
      <span>Thù lao nhà phân tích không gắn IB</span><span>Restricted list</span>
      <span>Giới hạn quà ở mức token</span><span>Duyệt trước khi tham gia IPO, phát hành riêng lẻ</span>
      <span>Tự trả chi phí đi lại khi có thể</span><span>Người phụ trách tuân thủ, kênh báo vi phạm</span></div>`),

    S('I(C): các dạng misrepresentation', `<div class="sd-grid4">
      <div class="sd-card"><b>Hứa lợi nhuận</b><p>"Chắc chắn lãi 10% mỗi năm"</p></div>
      <div class="sd-card"><b>Bỏ sót</b><p>Số liệu đúng nhưng thiếu bối cảnh trọng yếu</p></div>
      <div class="sd-card"><b>Phóng đại</b><p>Năng lực, kinh nghiệm, dịch vụ</p></div>
      <div class="sd-card acc"><b>Đạo văn</b><p>Dùng công trình người khác không ghi nguồn</p></div></div>
      <p class="sd-note">Từ khóa: <b>knowingly</b>. Áp dụng cho lời nói, quảng cáo, email, mạng xã hội.</p>`),

    S('I(C): dùng công trình của người khác', `<div class="sd-rule up">Nói đúng về bảo đảm có thật: trái phiếu chính phủ được nhà nước bảo đảm thanh toán</div>
      <div class="sd-rule up">Dùng mô hình của đồng nghiệp cũ trong công ty, không cần ghi tên họ</div>
      <div class="sd-rule down">Phát hành lại báo cáo cũ chỉ dưới tên mình</div>
      <div class="sd-rule down">Chép nghiên cứu bên ngoài không ghi nguồn</div>
      <div class="sd-rule down">Chọn benchmark hoặc dịch vụ định giá để kết quả trông đẹp hơn</div>`),

    S('I(D): đời tư hay nghề nghiệp?', `<div class="sd-cols2">
      <div class="sd-card"><b>Vi phạm</b><p>Gian lận chi phí, khai man hồ sơ</p><p>Nói dối khách hàng</p><p>Say rượu trong giờ làm</p></div>
      <div class="sd-card acc"><b>Thường không vi phạm</b><p>Biểu tình ôn hòa bị bắt</p><p>Phá sản cá nhân không gian lận</p><p>Uống rượu ngoài giờ, không ảnh hưởng công việc</p></div></div>
      <p class="sd-note">Không dùng tố cáo I(D) để giải quyết tranh chấp cá nhân, chính trị.</p>`),

    S('I(E): năng lực', `<div class="sd-big">Có và duy trì năng lực cho đúng trách nhiệm của mình</div>
      <div class="sd-cols3">
      <div class="sd-card"><b>Tùy vai trò</b><p>Năng lực cần có phụ thuộc trách nhiệm cụ thể</p></div>
      <div class="sd-card"><b>Vai trò mới</b><p>Tự phát triển năng lực tương xứng</p></div>
      <div class="sd-card acc"><b>Kết quả xấu</b><p>Không đồng nghĩa thiếu năng lực</p></div></div>`),

    S('Đọc từ khóa, đoán tiêu chuẩn', `<div class="sd-tbl grid">
      <div class="head"><span>Đề bài nhắc đến</span><span>Tiêu chuẩn</span></div>
      <div><span>Luật cấm, luật cho phép, nhiều nước</span><span>I(A)</span></div>
      <div><span>Quà, chuyến đi, áp lực đổi khuyến nghị</span><span>I(B)</span></div>
      <div><span>Quảng cáo, kết quả, sao chép báo cáo</span><span>I(C)</span></div>
      <div><span>Gian lận, nói dối, say xỉn khi làm việc</span><span>I(D)</span></div>
      <div><span>Vai trò mới, thiếu kiến thức</span><span>I(E)</span></div></div>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>Luật và Code: theo cái chặt hơn</span><span>Báo → tách mình → nghỉ việc</span>
      <span>Công bố không cứu được quà xa hoa</span><span>Quà khách hàng: công bố chủ lao động</span>
      <span>Restricted list, không nâng một bậc</span><span>Đúng số liệu vẫn có thể sai lệch</span>
      <span>Đời tư chỉ vi phạm khi dính gian dối hoặc công việc</span><span>Lỗ không có nghĩa là thiếu năng lực</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 10 câu, mục tiêu ≥ 7 câu đúng.</p>`),
  ];

  addDeck('ET-03', `Slide Standard I - bản thiết kế riêng (${slides.length} slide)`, slides);
}());
