// Bộ slide tự thiết kế cho EC-05 Introduction to Geopolitics.
(function () {
  const L = window.LESSONS && window.LESSONS['EC-05'];
  if (!L) return;
  const { slide, addDeck } = window.CFAH;
  const K = 'EC-05 · Geopolitics';
  const S = (title, body, opt = {}) => slide(title, body, Object.assign({ kicker: K }, opt));

  // Ma trận 4 archetype.
  const matrix = `<svg viewBox="0 0 600 330" class="sv big" role="img" aria-label="Ma trận bốn archetype">
    <rect x="90" y="10" width="245" height="135" rx="10" class="sv-panel"/><rect x="345" y="10" width="245" height="135" rx="10" class="sv-panel"/>
    <rect x="90" y="155" width="245" height="135" rx="10" class="sv-panel"/><rect x="345" y="155" width="245" height="135" rx="10" class="sv-panel"/>
    <text x="212" y="70" class="sv-txt">Bilateralism</text><text x="212" y="100" class="sv-muted">hợp tác theo cặp</text>
    <text x="467" y="70" class="sv-txt sv-t-up">Multilateralism</text><text x="467" y="100" class="sv-muted">hợp tác nhiều nước</text>
    <text x="212" y="215" class="sv-txt sv-t-down">Autarky</text><text x="212" y="245" class="sv-muted">tự cung tự cấp</text>
    <text x="467" y="215" class="sv-txt sv-t-pv">Hegemony</text><text x="467" y="245" class="sv-muted">đủ lớn để chi phối</text>
    <text x="212" y="318" class="sv-muted">Nationalism</text><text x="467" y="318" class="sv-muted">Globalization</text>
    <text x="45" y="80" class="sv-muted" transform="rotate(-90 45 80)">Hợp tác</text><text x="45" y="222" class="sv-muted" transform="rotate(-90 45 222)">Không hợp tác</text></svg>`;

  // Một nước có thể hợp tác ở vấn đề này, cạnh tranh ở vấn đề khác.
  const spectrum = (() => {
    const items = [['Khí hậu', 0.85], ['Tiêu chuẩn kế toán', 0.75], ['Thương mại nông sản', 0.55], ['Viễn thông 5G', 0.2], ['Chip tiên tiến', 0.08]];
    const l = 225, r = 580;
    let s = `<svg viewBox="0 0 600 260" class="sv" role="img" aria-label="Mức hợp tác theo từng vấn đề">`;
    s += `<text x="${l}" y="22" class="sv-muted" text-anchor="start">Cạnh tranh</text><text x="${r}" y="22" class="sv-muted" text-anchor="end">Hợp tác</text>`;
    items.forEach(([lab, v], i) => {
      const y = 55 + i * 44;
      s += `<text x="${l - 12}" y="${y + 5}" class="sv-txt" text-anchor="end">${lab}</text><line x1="${l}" y1="${y}" x2="${r}" y2="${y}" class="sv-grid"/>`;
      s += `<circle cx="${l + v * (r - l)}" cy="${y}" r="9" class="sv-node ${v > 0.5 ? 'up' : 'down'}"/>`;
    });
    return `${s}</svg>`;
  })();

  // Tác động lan tỏa của thuế quan song phương sang nước thứ ba.
  const spill = `<svg viewBox="0 0 600 240" class="sv big" role="img" aria-label="Thuế quan Mỹ - Trung và dịch chuyển sản xuất">
    <circle cx="100" cy="70" r="46" class="sv-node down"/><text x="100" y="76" class="sv-txt">Trung Quốc</text>
    <circle cx="500" cy="70" r="46" class="sv-node"/><text x="500" y="76" class="sv-txt">Mỹ</text>
    <circle cx="300" cy="190" r="46" class="sv-node up"/><text x="300" y="196" class="sv-txt">Việt Nam</text>
    <line x1="150" y1="70" x2="450" y2="70" class="sv-down"/><text x="300" y="56" class="sv-txt sv-t-down">thuế quan cao</text>
    <line x1="135" y1="105" x2="255" y2="170" class="sv-up"/><text x="160" y="160" class="sv-muted">dời nhà máy</text>
    <line x1="345" y1="170" x2="465" y2="105" class="sv-up"/><text x="445" y="160" class="sv-muted">xuất khẩu</text></svg>`;

  // Bản đồ rủi ro: likelihood (ngang), impact (dọc), cỡ chấm = velocity.
  const riskMap = (() => {
    const l = 70, r = 580, t = 15, b = 250;
    const X = v => l + v * (r - l), Y = v => b - v * (b - t);
    const pts = [['Bầu cử (event)', 0.8, 0.25, 9, 'end'], ['Biến đổi khí hậu (thematic)', 0.92, 0.5, 6, 'end'], ['Xung đột bất ngờ (exogenous)', 0.3, 0.72, 14, 'start'], ['Thiên nga đen', 0.06, 0.95, 16, 'start']];
    let s = `<svg viewBox="0 0 600 290" class="sv" role="img" aria-label="Bản đồ rủi ro địa chính trị">`;
    s += `<line x1="${l}" y1="${b}" x2="${r}" y2="${b}" class="sv-axis"/><line x1="${l}" y1="${t}" x2="${l}" y2="${b}" class="sv-axis"/>`;
    s += `<text x="${(l + r) / 2}" y="${b + 30}" class="sv-muted">Likelihood (xác suất) →</text><text x="30" y="${(t + b) / 2}" class="sv-muted" transform="rotate(-90 30 ${(t + b) / 2})">Impact →</text>`;
    pts.forEach(([lab, x, y, rad, an]) => {
      s += `<circle cx="${X(x)}" cy="${Y(y)}" r="${rad}" class="sv-dot" opacity="0.75"/>`;
      s += `<text x="${X(x) + (an === 'start' ? rad + 8 : -rad - 8)}" y="${Y(y) + 5}" class="sv-txt" text-anchor="${an}">${lab}</text>`;
    });
    s += `<text x="${r}" y="${t + 10}" class="sv-muted" text-anchor="end">cỡ chấm = velocity</text>`;
    return `${s}</svg>`;
  })();

  // Ba kịch bản của ví dụ 8.1.
  const scen = [['Giữ nguyên', 70, '8%'], ['Leo thang', 20, '-15%'], ['Hạ nhiệt', 10, '14%']];
  const scenBars = `<div class="sd-bars">${scen.map(([lab, p, r]) => `<div class="sd-bar"><span class="sd-bar-l">${lab} (${r})</span><span class="sd-bar-t"><i style="width:${p}%"></i></span><b>${p}%</b></div>`).join('')}</div>`;

  const slides = [
    S('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Economics · EC-05</div>
      <h2>Introduction to<br>Geopolitics</h2>
      <p>Ai chơi, chơi thế nào, và danh mục đầu tư bị ảnh hưởng ra sao</p>
      <div class="sd-chips"><span>Hợp tác - cạnh tranh</span><span>Toàn cầu hóa</span><span>IMF · WB · WTO</span><span>Công cụ</span><span>Rủi ro</span><span>Đầu tư</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Sáu câu hỏi của buổi học', `<div class="sd-cols3">
      <div class="sd-card"><div class="sd-n">1</div><b>Vì sao hợp tác?</b><p>State và non-state actors, lợi ích quốc gia</p></div>
      <div class="sd-card"><div class="sd-n">2</div><b>Kiểu quốc gia nào?</b><p>Toàn cầu hóa và 4 archetype</p></div>
      <div class="sd-card"><div class="sd-n">3</div><b>Ai giữ luật chơi?</b><p>IMF, World Bank, WTO</p></div>
      <div class="sd-card"><div class="sd-n">4</div><b>Dùng công cụ gì?</b><p>An ninh, kinh tế, tài chính</p></div>
      <div class="sd-card"><div class="sd-n">5</div><b>Rủi ro loại nào?</b><p>Event, exogenous, thematic</p></div>
      <div class="sd-card acc"><div class="sd-n">6</div><b>Đầu tư ra sao?</b><p>Kịch bản, signposts</p></div></div>`),

    S('Người chơi: state và non-state actors', `<div class="sd-cols2">
      <div class="sd-card"><b>State actors</b><p>Chính phủ, lãnh đạo, quân đội, bộ ngoại giao, ngân hàng trung ương</p><small>Đại diện cho quốc gia</small></div>
      <div class="sd-card acc"><b>Non-state actors</b><p>Tập đoàn đa quốc gia, NGO, cá nhân có ảnh hưởng, tổ chức quốc tế</p><small>Tác động xuyên biên giới nhưng không đại diện quốc gia</small></div></div>
      <div class="sd-steps"><span>① Tồn tại, an ninh</span><span>② Tăng trưởng kinh tế</span><span>③ Uy tín, giá trị</span></div>
      <p class="sd-note">Thứ tự ưu tiên của <b>lợi ích quốc gia</b>: an ninh luôn đứng đầu. Địa lý (vị trí, tài nguyên, láng giềng) định hình lựa chọn.</p>`),

    S('Vì sao các nước hợp tác?', `<div class="sd-big">Hợp tác khi nó <b>thúc đẩy lợi ích quốc gia</b></div>
      <div class="sd-grid4">
      <div class="sd-card"><b>Tài nguyên, thị trường</b><p>Thiếu gì thì cần hợp tác với nước có</p></div>
      <div class="sd-card"><b>Chuẩn hóa</b><p>IFRS, ISO: nguồn lực lưu chuyển dễ hơn</p></div>
      <div class="sd-card"><b>Văn hóa</b><p>Ngôn ngữ, di cư, kiều bào</p></div>
      <div class="sd-card"><b>Thể chế</b><p>Luật pháp (chính thức), phong tục (không chính thức)</p></div></div>`),

    S('Hard power và soft power', `<div class="sd-cols2">
      <div class="sd-rule down"><span>Hard power</span><b>ép buộc</b></div>
      <div class="sd-rule up"><span>Soft power</span><b>thu hút</b></div></div>
      <div class="sd-cols2"><div class="sd-card"><p>Quân sự, đe dọa, thuế quan trả đũa, cấm vận</p></div>
      <div class="sd-card acc"><p>Văn hóa, giáo dục, giá trị, hình ảnh quốc gia. <b>Không dùng hay đe dọa dùng vũ lực.</b></p><small>Ví dụ: phim, nhạc Hàn Quốc; học bổng du học</small></div></div>`),

    S('Hợp tác theo từng vấn đề, thay đổi theo thời gian', `<div class="sd-cols2 wide-left"><div>${spectrum}</div><div class="sd-card"><b>Không phải có hoặc không</b><p>Cùng một nước: hợp tác về khí hậu, cạnh tranh về công nghệ chiến lược.</p><p>Bầu cử trong nước có thể dịch chuyển cả dãy chấm.</p></div></div>`),

    S('Toàn cầu hóa: được và mất', `<div class="sd-cols2">
      <div><div class="sd-rule up"><span>Lợi nhuận, tăng trưởng</span><b>+</b></div><div class="sd-rule up"><span>Tiếp cận nguồn lực, thị trường</span><b>+</b></div><div class="sd-rule up"><span>Trao đổi văn hóa, tri thức</span><b>+</b></div></div>
      <div><div class="sd-rule down"><span>Lợi ích chia không đều</span><b>-</b></div><div class="sd-rule down"><span>Phụ thuộc, chuỗi cung ứng dễ đứt</span><b>-</b></div><div class="sd-rule down"><span>Vấn đề ESG, môi trường, lao động</span><b>-</b></div></div></div>
      <p class="sd-note">Đối lập với toàn cầu hóa là <b>nationalism</b>: theo đuổi lợi ích kinh tế riêng, độc lập hoặc cạnh tranh với nước khác.</p>`),

    S('Bốn archetype', `<div class="sd-cols2 wide-left"><div>${matrix}</div><div class="sd-card"><b>Mẹo nhớ</b><p><b>Auto</b>: tự mình</p><p><b>Hegemon</b>: bá chủ, không cần hợp tác</p><p><b>Multi</b>: nhiều bên</p><p><b>Bi</b>: hai bên</p></div></div>`),

    S('Nhận diện archetype qua hành vi', `<div class="sd-tbl grid"><div class="head"><span>Hành vi trong đề</span><span>Archetype</span></div>
      <div><span>Tự lực, nhà nước nắm ngành then chốt và truyền thông</span><span>Autarky</span></div>
      <div><span>Mở cửa nhưng đủ lớn để áp đặt, không cần hợp tác</span><span>Hegemony</span></div>
      <div><span>Thành viên WTO, nhiều FTA với nhiều nước</span><span>Multilateralism</span></div>
      <div><span>Chủ yếu ký thỏa thuận với từng nước riêng lẻ</span><span>Bilateralism</span></div></div>
      <p class="sd-note">Bẫy: hegemony nằm phía <b>toàn cầu hóa</b>, không phải phía dân tộc.</p>`),

    S('Ba tổ chức quốc tế', `<div class="sd-cols3">
      <div class="sd-card"><b>IMF</b><p>Hợp tác tiền tệ, ổn định tỷ giá</p><p>Giám sát, cho vay khi khó khăn <b>cán cân thanh toán</b></p><small>Ngắn hạn, khủng hoảng</small></div>
      <div class="sd-card"><b>World Bank</b><p>Vay lãi thấp, tín dụng không lãi, viện trợ</p><p>Mục tiêu <b>giảm nghèo</b>, phát triển</p><small>Dài hạn, dự án</small></div>
      <div class="sd-card acc"><b>WTO</b><p>Hiệp định thương mại đa phương</p><p><b>Giải quyết tranh chấp</b>, thương mại tự do</p><small>Không cho vay</small></div></div>`),

    S('Ba nhóm công cụ địa chính trị', `<div class="sd-tbl grid"><div class="head"><span>Nhóm</span><span>Hợp tác</span><span>Không hợp tác</span></div>
      <div><span>An ninh quốc gia</span><span>Liên minh, hiệp ước</span><span>Xung đột vũ trang, gián điệp</span></div>
      <div><span>Kinh tế</span><span>FTA, thị trường chung, liên minh</span><span>Nội địa hóa bắt buộc, VER, quốc hữu hóa</span></div>
      <div><span>Tài chính</span><span>Mở cửa đầu tư, tự do đổi tiền</span><span>Hạn chế đầu tư, trừng phạt, đóng băng tài sản</span></div></div>
      <p class="sd-note">Công cụ không hợp tác gây chi phí cho <b>cả hai bên</b> và lan tỏa sang nước thứ ba.</p>`),

    S('Tác động lan tỏa: ví dụ thuế quan Mỹ - Trung', `<div class="sd-cols2 wide-left"><div>${spill}</div><div class="sd-card"><b>Lan sang nước thứ ba</b><p>Từ 2018: doanh nghiệp dời một phần sản xuất sang nước thứ ba ("Trung Quốc + 1").</p><p>Trừng phạt Nga 2022: giá năng lượng châu Âu tăng vọt.</p></div></div>`),

    S('Ba loại rủi ro địa chính trị', `<div class="sd-cols3">
      <div class="sd-card"><b>Event risk</b><p>Biết <b>thời điểm</b>, chưa biết kết quả</p><small>Bầu cử, trưng cầu dân ý</small><p>Velocity: trung bình</p></div>
      <div class="sd-card acc"><b>Exogenous risk</b><p><b>Bất ngờ</b>, không lường trước</p><small>Chiến tranh, đảo chính</small><p>Velocity: cao</p></div>
      <div class="sd-card"><b>Thematic risk</b><p>Đã biết, tác động <b>kéo dài</b></p><small>Khí hậu, di cư, an ninh mạng</small><p>Velocity: thấp</p></div></div>
      <p class="sd-note"><b>Black swan</b>: exogenous, xác suất rất thấp, tác động ngắn hạn rất lớn.</p>`),

    S('Đánh giá: likelihood, impact, velocity', `<div class="sd-cols2 wide-left"><div>${riskMap}</div><div class="sd-card"><b>Ba câu hỏi</b><p><b>Likelihood</b>: xác suất bao nhiêu?</p><p><b>Impact</b>: lớn đến đâu, rộng hay hẹp?</p><p><b>Velocity</b>: giá phản ánh nhanh đến mức nào?</p><small>Impact rộng: xử lý ở cấp phân bổ tài sản</small></div></div>`),

    S('Đưa rủi ro vào dự báo: phân tích kịch bản', `<div class="sd-cols2"><div>${scenBars}</div>
      <div><div class="sd-f sm">E(R) = 0,7 × 8% + 0,2 × (-15%) + 0,1 × 14%</div><div class="sd-big"><b>4,0%</b></div><p>so với 8% nếu bỏ qua rủi ro</p></div></div>
      <p class="sd-note">Bổ sung: <b>mô phỏng</b> để thấy phân phối kết quả; <b>signposts</b> (đàm phán, tuyên bố, đơn hàng) để biết kịch bản nào đang tới.</p>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>Non-state: doanh nghiệp, NGO, cá nhân</span><span>Soft power: không dùng vũ lực</span>
      <span>Hợp tác khi lợi ích quốc gia được thúc đẩy</span><span>Hegemony ở phía toàn cầu hóa</span>
      <span>IMF: cán cân thanh toán; WB: giảm nghèo</span><span>WTO: luật chơi và tranh chấp thương mại</span>
      <span>Event = biết thời điểm; exogenous = bất ngờ</span><span>Likelihood, impact, velocity</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 10 câu, mục tiêu ≥ 7 câu đúng.</p>`),
  ];

  addDeck('EC-05', `Slide Geopolitics - bản thiết kế riêng (${slides.length} slide)`, slides);
}());
