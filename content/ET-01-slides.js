// Bộ slide tự thiết kế cho ET-01 Ethics and Trust in the Investment Profession.
(function () {
  const L = window.LESSONS && window.LESSONS['ET-01'];
  if (!L) return;
  const { slide, addDeck } = window.CFAH;
  const K = 'ET-01 · Ethics and Trust';
  const S = (title, body, opt = {}) => slide(title, body, Object.assign({ kicker: K }, opt));

  // Cán cân: lợi ích bản thân và tác động lên người khác.
  const balance = `<svg viewBox="0 0 600 210" class="sv big" role="img" aria-label="Cán cân giữa lợi ích bản thân và tác động lên người khác">
    <line x1="300" y1="60" x2="300" y2="180" class="sv-axis"/><line x1="240" y1="180" x2="360" y2="180" class="sv-axis"/>
    <line x1="120" y1="60" x2="480" y2="60" class="sv-axis"/><circle cx="300" cy="60" r="7" class="sv-dot"/>
    <line x1="120" y1="60" x2="120" y2="100" class="sv-dash"/><line x1="480" y1="60" x2="480" y2="100" class="sv-dash"/>
    <rect x="30" y="100" width="180" height="62" rx="12" class="sv-panel"/><text x="120" y="128" class="sv-txt">Lợi ích bản thân</text><text x="120" y="150" class="sv-muted">tiền, thưởng, thăng tiến</text>
    <rect x="390" y="100" width="180" height="62" rx="12" class="sv-panel"/><text x="480" y="128" class="sv-txt sv-t-up">Tác động lên người khác</text><text x="480" y="150" class="sv-muted">khách hàng, thị trường</text>
    <text x="300" y="30" class="sv-txt">Quyết định đạo đức = cân nhắc cả hai đĩa cân</text></svg>`;

  // Vòng lặp niềm tin của một nghề.
  const trustLoop = (() => {
    const items = ['Chuẩn mực cao', 'Hành xử tốt', 'Khách hàng tin', 'Nghề có uy tín', 'Thu hút người giỏi'];
    const cx = 300, cy = 118, rx = 220, ry = 82;
    let s = '<svg viewBox="0 0 600 240" class="sv big" role="img" aria-label="Vòng lặp xây dựng niềm tin của một nghề">';
    s += `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" class="sv-dash" fill="none"/>`;
    items.forEach((n, i) => {
      const a = -Math.PI / 2 + (2 * Math.PI * i) / items.length;
      const x = cx + rx * Math.cos(a), y = cy + ry * Math.sin(a);
      s += `<rect x="${x - 72}" y="${y - 18}" width="144" height="36" rx="10" class="${i === 0 ? 'sv-key' : 'sv-node'}"/><text x="${x}" y="${y + 6}" class="${i === 0 ? 'sv-keyt' : 'sv-txt'}" style="font-size:16px">${n}</text>`;
    });
    s += `<text x="${cx}" y="${cy + 6}" class="sv-muted">một vụ bê bối làm gãy cả vòng</text></svg>`;
    return s;
  })();

  // Khách hàng giao tiền, nhận lời hứa vô hình.
  const entrust = `<svg viewBox="0 0 600 200" class="sv big" role="img" aria-label="Khách hàng giao tiền, người làm nghề cung cấp dịch vụ vô hình">
    <rect x="20" y="60" width="170" height="80" rx="14" class="sv-panel"/><text x="105" y="106" class="sv-txt">Khách hàng</text>
    <rect x="410" y="60" width="170" height="80" rx="14" class="sv-panel"/><text x="495" y="98" class="sv-txt">Người làm</text><text x="495" y="120" class="sv-txt">đầu tư</text>
    <line x1="195" y1="80" x2="405" y2="80" class="sv-up"/><text x="300" y="66" class="sv-t-up sv-txt">giao tiền và quyền quyết định</text>
    <line x1="405" y1="122" x2="195" y2="122" class="sv-pv"/><text x="300" y="150" class="sv-t-pv sv-txt">lời hứa, dịch vụ vô hình</text>
    <text x="300" y="188" class="sv-muted">khách hàng biết ít hơn → phải dựa vào niềm tin</text></svg>`;

  // Ma trận đạo đức - pháp lý.
  const quad = `<svg viewBox="0 0 600 250" class="sv big" role="img" aria-label="Ma trận hợp pháp và đạo đức">
    <text x="245" y="22" class="sv-muted">Hợp pháp</text><text x="455" y="22" class="sv-muted">Bất hợp pháp</text>
    <text x="70" y="88" class="sv-muted">Có đạo đức</text><text x="70" y="192" class="sv-muted">Phi đạo đức</text>
    <rect x="140" y="34" width="210" height="100" rx="10" class="sv-node up"/><text x="245" y="80" class="sv-txt">Phần lớn hành vi</text><text x="245" y="104" class="sv-muted">tư vấn trung thực</text>
    <rect x="360" y="34" width="210" height="100" rx="10" class="sv-node"/><text x="465" y="80" class="sv-txt">Hiếm, gây tranh cãi</text><text x="465" y="104" class="sv-muted">tố giác, bất tuân ôn hòa</text>
    <rect x="140" y="142" width="210" height="100" rx="10" class="sv-key"/><text x="245" y="188" class="sv-keyt" style="font-size:18px">Vùng nguy hiểm</text><text x="245" y="212" class="sv-muted">lợi dụng kẽ hở luật</text>
    <rect x="360" y="142" width="210" height="100" rx="10" class="sv-node down"/><text x="465" y="188" class="sv-txt">Gian lận</text><text x="465" y="212" class="sv-muted">nội gián, thao túng</text></svg>`;

  // Vòng Identify - Consider - Act - Reflect.
  const icar = (() => {
    const st = [['Identify', 'sự thật'], ['Consider', 'phương án'], ['Act', 'hành động'], ['Reflect', 'đánh giá lại']];
    let s = '<svg viewBox="0 0 600 190" class="sv big" role="img" aria-label="Bốn bước Identify, Consider, Act, Reflect">';
    st.forEach(([n, d], i) => {
      const x = 80 + i * 147;
      s += `<circle cx="${x}" cy="80" r="52" class="${i === 0 ? 'sv-key' : 'sv-node'}"/><text x="${x}" y="78" class="${i === 0 ? 'sv-keyt' : 'sv-txt'}" style="font-size:17px">${n}</text><text x="${x}" y="98" class="sv-muted" style="font-size:12px">${i + 1}</text>`;
      s += `<text x="${x}" y="158" class="sv-muted" style="font-size:13px">${d}</text>`;
      if (i < 3) s += `<line x1="${x + 56}" y1="80" x2="${x + 90}" y2="80" class="sv-up"/>`;
    });
    s += '<path d="M521 132 Q300 200 80 132" class="sv-dash" fill="none"/><text x="300" y="186" class="sv-t-pv sv-txt" style="font-size:14px">quay lại khi cần</text></svg>';
    return s;
  })();

  const slides = [
    S('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Ethical and Professional Standards · ET-01</div>
      <h2>Ethics and Trust in the<br>Investment Profession</h2>
      <p>Vì sao một nghề bán "lời hứa" phải sống bằng niềm tin?</p>
      <div class="sd-chips"><span>Ethics và code of ethics</span><span>Nghề nghiệp và niềm tin</span><span>Thách thức đạo đức</span><span>Đạo đức và pháp luật</span><span>Khung ra quyết định</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Đạo đức là gì?', `<div class="sd-big">Niềm tin <b>chung</b> về hành vi tốt và xấu</div>
      <div class="sd-cols2"><div class="sd-card"><b>Ethical principles</b><p>Trung thực, công bằng, tôn trọng, giữ lời hứa</p></div>
      <div class="sd-card acc"><b>Ethical conduct</b><p>Hành vi theo nguyên tắc và hợp kỳ vọng xã hội</p></div></div>`),

    S('Cốt lõi: hai đĩa cân', `${balance}
      <p class="sd-note">Hiếm khi là "tốt hay ác". Thường là <b>lợi ích của mình</b> so với <b>lợi ích của bên liên quan</b>.</p>`),

    S('Code of ethics và standards of conduct', `<div class="sd-cols2">
      <div class="sd-card"><div class="sd-n">1</div><b>Code of ethics</b><p>Nguyên tắc đạo đức được viết ra</p><p>Nêu giá trị, cam kết với công chúng</p><small>CFA: 6 điều Code of Ethics</small></div>
      <div class="sd-card acc"><div class="sd-n">2</div><b>Standards of conduct</b><p>Quy tắc cụ thể</p><p>Mức hành vi <b>tối thiểu</b></p><small>CFA: 7 Standards</small></div></div>`),

    S('Code of ethics định nghĩa một nghề', `<div class="sd-grid4">
      <div class="sd-card"><b>Truyền thông</b><p>Cho công chúng biết được kỳ vọng gì</p></div>
      <div class="sd-card"><b>Hướng dẫn</b><p>Giúp thành viên xử lý tình huống khó</p></div>
      <div class="sd-card"><b>Chuẩn đánh giá</b><p>Căn cứ công khai để kỷ luật</p></div>
      <div class="sd-card acc"><b>Phân biệt</b><p>Cam kết vượt trên luật làm nên một nghề</p></div></div>`),

    S('Nghề nghiệp là gì?', `<div class="sd-big">Chuyên môn + phục vụ người khác + code of ethics</div>
      <div class="sd-check"><span>Chuẩn đầu vào cao: học vấn, kỳ thi, kinh nghiệm</span><span>Cập nhật kiến thức liên tục</span>
      <span>Đặt lợi ích khách hàng lên trước</span><span>Tổ chức nghề giám sát, kỷ luật</span><span>Kèm cặp người mới</span></div>`),

    S('Niềm tin được xây theo vòng lặp', `${trustLoop}
      <p class="sd-note">Thiệt hại của một vụ bê bối rơi lên <b>cả nghề</b>, không chỉ người vi phạm.</p>`),

    S('Vì sao đầu tư cần chuẩn mực cao?', `${entrust}
      <p class="sd-note">Thêm: kết quả khó đánh giá (may hay giỏi?) và tác động lan ra cả thị trường vốn.</p>`),

    S('Hành vi phi đạo đức gây hại cho ai?', `<div class="sd-rule down">Khách hàng: mất tiền, trả phí cao, rủi ro không phù hợp</div>
      <div class="sd-rule down">Công ty: mất uy tín, bị phạt, bị kiện</div>
      <div class="sd-rule down">Nghề: công chúng mất niềm tin, quy định siết chặt</div>
      <div class="sd-rule down">Thị trường: nhà đầu tư rút lui, chi phí vốn tăng, vốn phân bổ kém</div>`),

    S('Tính chuyên nghiệp: ba trụ cột', `<div class="sd-cols3">
      <div class="sd-card"><b>Năng lực</b><p>Đủ và liên tục cập nhật</p></div>
      <div class="sd-card"><b>Chính trực</b><p>Trung thực, khách quan, kể cả khi không ai thấy</p></div>
      <div class="sd-card acc"><b>Phục vụ</b><p>Khách hàng trước, rồi công ty, cuối cùng là bản thân</p></div></div>
      <p class="sd-note">Nghề đầu tư còn <b>trẻ</b>: niềm tin công chúng đang được xây, dễ tổn thương.</p>`),

    S('Thách thức 1: tự tin thái quá', `<div class="sd-big">"Tôi là người tốt, nên quyết định của tôi chắc chắn tốt"</div>
      <p class="sd-note"><b>Overconfidence bias</b>: đa số tin mình có đạo đức hơn mức trung bình → bỏ qua bước tự kiểm tra, đánh giá thấp sức ép của hoàn cảnh. Đây là yếu tố <b>bên trong</b>.</p>`),

    S('Thách thức 2: hoàn cảnh và ngắn hạn', `<div class="sd-grid4">
      <div class="sd-card"><b>Tiền, danh vọng</b><p>Thưởng doanh số, thăng tiến</p></div>
      <div class="sd-card"><b>Lòng trung thành</b><p>Với sếp, công ty, đồng nghiệp</p></div>
      <div class="sd-card"><b>Ngắn hạn</b><p>Lợi ích đến ngay, hậu quả đến muộn</p></div>
      <div class="sd-card acc"><b>Chỉ lo hợp pháp</b><p>Hỏi "có đúng luật?" thay vì "có đúng?"</p></div></div>
      <p class="sd-note"><b>Situational influences</b> là yếu tố <b>bên ngoài</b>, thường không được nhận ra.</p>`),

    S('Đạo đức và pháp luật', `${quad}`),

    S('Vì sao luật không đủ?', `<div class="sd-check">
      <span>Luật đi sau thực tế</span><span>Không bao quát mọi tình huống</span>
      <span>Khác nhau giữa các nước</span><span>Có thể bị nhóm lợi ích chi phối</span>
      <span>Chỉ là mức tối thiểu</span></div>
      <p class="sd-note">Bẫy: "hợp pháp = có đạo đức" và "bất hợp pháp = phi đạo đức" đều <b>sai</b>.</p>`),

    S('Khung ra quyết định đạo đức', `${icar}
      <p class="sd-note">Xung đột lợi ích → <b>Identify</b>. Tìm hướng dẫn, liệt kê phương án → <b>Consider</b>.</p>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>Ethics: niềm tin chung, không phải ý riêng</span><span>Standards: mức tối thiểu</span>
      <span>Nghề: chuyên môn, phục vụ, code được thực thi</span><span>Đầu tư: vô hình, bất cân xứng thông tin</span>
      <span>Đạo đức giảm chi phí vốn</span><span>Overconfidence bên trong, situational bên ngoài</span>
      <span>Hợp pháp chưa chắc đạo đức</span><span>Identify → Consider → Act → Reflect</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 10 câu, mục tiêu ≥ 7 câu đúng.</p>`),
  ];

  addDeck('ET-01', `Slide Ethics and Trust - bản thiết kế riêng (${slides.length} slide)`, slides);
}());
