// Bộ slide tự thiết kế cho PC-06 Introduction to Risk Management.
(function () {
  const L = window.LESSONS && window.LESSONS['PC-06'];
  if (!L) return;
  const { slide, addDeck } = window.CFAH;
  const K = 'PC-06 · Risk Management';
  const S = (title, body, opt = {}) => slide(title, body, Object.assign({ kicker: K }, opt));
  const fmt = (x, d = 2) => x.toFixed(d).replace('.', ',');
  const th = x => Math.round(x).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  // Vòng quản lý rủi ro.
  function cycle() {
    const items = ['Xác định risk tolerance', 'Nhận diện', 'Đo lường', 'Theo dõi', 'Điều chỉnh'];
    const cx = 300, cy = 150, R = 110;
    let s = `<svg viewBox="0 0 600 300" class="sv" role="img" aria-label="Vòng quản lý rủi ro">`;
    s += `<circle cx="${cx}" cy="${cy}" r="${R}" class="sv-dash" fill="none"/>`;
    s += `<text x="${cx}" y="${cy - 4}" class="sv-txt">Rủi ro thực tế</text><text x="${cx}" y="${cy + 18}" class="sv-muted">= rủi ro mong muốn</text>`;
    items.forEach((it, i) => {
      const a = -Math.PI / 2 + (i * 2 * Math.PI) / items.length;
      const x = cx + R * Math.cos(a), y = cy + R * Math.sin(a);
      s += `<rect x="${x - 85}" y="${y - 17}" width="170" height="34" rx="10" class="${i === 0 ? 'sv-node up' : 'sv-panel'}"/><text x="${x}" y="${y + 6}" class="sv-txt">${i + 1}. ${it}</text>`;
    });
    return `${s}</svg>`;
  }

  // Sơ đồ quản trị rủi ro từ trên xuống.
  const gov = `<svg viewBox="0 0 600 300" class="sv big" role="img" aria-label="Cơ cấu quản trị rủi ro">
    <rect x="170" y="10" width="260" height="50" rx="10" class="sv-node up"/><text x="300" y="42" class="sv-txt sv-t-up">Hội đồng quản trị</text>
    <line x1="300" y1="60" x2="300" y2="90" class="sv-axis"/>
    <rect x="30" y="90" width="250" height="50" rx="10" class="sv-panel"/><text x="155" y="122" class="sv-txt">Ủy ban rủi ro</text>
    <rect x="320" y="90" width="250" height="50" rx="10" class="sv-panel"/><text x="445" y="122" class="sv-txt">Ban điều hành</text>
    <line x1="155" y1="140" x2="155" y2="180" class="sv-axis"/><line x1="445" y1="140" x2="445" y2="180" class="sv-axis"/>
    <rect x="30" y="180" width="250" height="50" rx="10" class="sv-node"/><text x="155" y="212" class="sv-txt">CRO (độc lập)</text>
    <rect x="320" y="180" width="250" height="50" rx="10" class="sv-node"/><text x="445" y="212" class="sv-txt">Bộ phận kinh doanh</text>
    <line x1="280" y1="205" x2="320" y2="205" class="sv-dash"/>
    <text x="300" y="268" class="sv-muted">Board duyệt risk tolerance → các cấp thực hiện trong giới hạn</text>
    <text x="300" y="292" class="sv-muted">CRO giám sát kinh doanh nhưng không báo cáo cho kinh doanh</text></svg>`;

  // Chuỗi tương tác rủi ro.
  const chain = `<svg viewBox="0 0 600 220" class="sv big" role="img" aria-label="Tương tác giữa các rủi ro">
    <rect x="10" y="70" width="130" height="60" rx="10" class="sv-node down"/><text x="75" y="106" class="sv-txt">Thị trường</text>
    <rect x="160" y="70" width="130" height="60" rx="10" class="sv-panel"/><text x="225" y="106" class="sv-txt">Ký quỹ</text>
    <rect x="310" y="70" width="130" height="60" rx="10" class="sv-node down"/><text x="375" y="106" class="sv-txt">Thanh khoản</text>
    <rect x="460" y="70" width="130" height="60" rx="10" class="sv-node down"/><text x="525" y="106" class="sv-txt">Solvency</text>
    <line x1="140" y1="100" x2="160" y2="100" class="sv-down"/><line x1="290" y1="100" x2="310" y2="100" class="sv-down"/><line x1="440" y1="100" x2="460" y2="100" class="sv-down"/>
    <rect x="160" y="160" width="280" height="44" rx="10" class="sv-node down"/><text x="300" y="189" class="sv-txt">Tín dụng đối tác</text>
    <line x1="75" y1="130" x2="160" y2="182" class="sv-dash"/><line x1="440" y1="182" x2="525" y2="130" class="sv-dash"/>
    <text x="300" y="40" class="sv-muted">Giá giảm → bổ sung ký quỹ → bán tháo → cạn tiền</text></svg>`;

  // Phân phối lợi suất ngày và VaR 5%.
  function varPlot() {
    const W = 600, H = 300, l = 30, r = 585, t = 20, b = 240, sd = 1.5;
    const X = z => l + ((z + 4) / 8) * (r - l);
    const pdf = z => Math.exp(-0.5 * z * z);
    const Y = d => b - d * (b - t - 20);
    let pts = '', tail = `${X(-4).toFixed(1)},${b} `;
    for (let z = -4; z <= 4.001; z += 0.05) pts += `${X(z).toFixed(1)},${Y(pdf(z)).toFixed(1)} `;
    for (let z = -4; z <= -1.645; z += 0.05) tail += `${X(z).toFixed(1)},${Y(pdf(z)).toFixed(1)} `;
    tail += `${X(-1.645).toFixed(1)},${Y(pdf(-1.645)).toFixed(1)} ${X(-1.645).toFixed(1)},${b}`;
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv" role="img" aria-label="VaR 5% trên phân phối chuẩn">`;
    s += `<polygon points="${tail}" class="sv-node down"/>`;
    s += `<line x1="${l}" y1="${b}" x2="${r}" y2="${b}" class="sv-axis"/><polyline points="${pts}" class="sv-curve"/>`;
    [-3, -2, -1, 0, 1, 2, 3].forEach(z => { s += `<text x="${X(z)}" y="${b + 22}" class="sv-muted">${fmt(z * sd, 1)}%</text>`; });
    s += `<line x1="${X(-1.645)}" y1="${t}" x2="${X(-1.645)}" y2="${b}" class="sv-dash"/>`;
    s += `<text x="${X(-1.645) - 6}" y="${t + 14}" class="sv-txt sv-t-down" text-anchor="end">-${fmt(1.645 * sd)}%</text>`;
    s += `<text x="${X(-2.6)}" y="${b - 40}" class="sv-txt sv-t-down">5%</text><text x="${X(0.6)}" y="${t + 50}" class="sv-txt" text-anchor="start">95%</text>`;
    s += `<text x="${(l + r) / 2}" y="${H - 6}" class="sv-muted">Lợi suất 1 ngày (σ = 1,5%)</text>`;
    return `${s}</svg>`;
  }

  // Ma trận tần suất - mức độ nghiêm trọng.
  const fsMatrix = `<svg viewBox="0 0 600 300" class="sv big" role="img" aria-label="Chọn phương pháp theo tần suất và mức độ">
    <rect x="140" y="20" width="220" height="120" rx="10" class="sv-panel"/><rect x="370" y="20" width="220" height="120" rx="10" class="sv-node down"/>
    <rect x="140" y="150" width="220" height="120" rx="10" class="sv-node up"/><rect x="370" y="150" width="220" height="120" rx="10" class="sv-panel"/>
    <text x="250" y="86" class="sv-txt">Giảm thiểu, kiểm soát</text><text x="480" y="86" class="sv-txt sv-t-down">Tránh</text>
    <text x="250" y="216" class="sv-txt sv-t-up">Chấp nhận</text><text x="480" y="216" class="sv-txt">Chuyển giao</text>
    <text x="250" y="294" class="sv-muted">Mức độ nhẹ</text><text x="480" y="294" class="sv-muted">Nghiêm trọng</text>
    <text x="68" y="86" class="sv-muted">Tần suất cao</text><text x="68" y="216" class="sv-muted">Tần suất thấp</text></svg>`;

  const bar = (lab, v, max) => `<div class="sd-bar"><span class="sd-bar-l">${lab}</span><span class="sd-bar-t"><i style="width:${(v / max) * 100}%"></i></span><b>${fmt(v)}%</b></div>`;
  const teAB = Math.sqrt(2 ** 2 + 3 ** 2), teAC = Math.sqrt(2 ** 2 + 2 ** 2);

  const slides = [
    S('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Portfolio Construction · PC-06</div>
      <h2>Introduction to<br>Risk Management</h2>
      <p>Không phải né rủi ro - mà chọn đúng rủi ro</p>
      <div class="sd-chips"><span>Framework</span><span>Governance</span><span>Risk tolerance</span><span>Risk budgeting</span><span>Nguồn rủi ro</span><span>Đo lường · Điều chỉnh</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Quản lý rủi ro là gì?', `<div class="sd-rule down">Giảm rủi ro càng nhiều càng tốt <b>Sai</b></div>
      <div class="sd-rule up">Làm cho rủi ro thực tế khớp với risk tolerance <b>Đúng</b></div>
      <div class="sd-cols2"><div class="sd-card"><b>Quản lý tốt vẫn có thể lỗ</b><p>Lỗ từ rủi ro đã chủ động chấp nhận.</p></div>
      <div class="sd-card acc"><b>Lãi lớn chưa chắc tốt</b><p>Có thể chỉ là may khi đang vượt giới hạn.</p></div></div>`),

    S('Vòng quản lý rủi ro', `<div class="sd-cols2 wide-left"><div>${cycle()}</div>
      <div><div class="sd-card acc"><b>Bắt đầu từ tolerance</b><p>Board quyết định mức và loại rủi ro chấp nhận.</p></div>
      <div class="sd-card"><b>Lặp lại liên tục</b><p>Điều kiện đổi → đo lại → điều chỉnh.</p></div></div></div>`),

    S('Khung quản lý rủi ro: 7 yếu tố', `<div class="sd-check">
      <span>Risk governance</span><span>Nhận diện và đo lường</span>
      <span>Hạ tầng: người, dữ liệu, hệ thống</span><span>Chính sách và quy trình</span>
      <span>Theo dõi, giảm thiểu, quản lý</span><span>Truyền thông, báo cáo</span>
      <span>Tích hợp vào chiến lược</span><span>Áp dụng cả cho cá nhân</span></div>
      <p class="sd-note">Phần mềm rủi ro → hạ tầng. Hạn mức vị thế → chính sách. Báo cáo tuần → truyền thông.</p>`),

    S('Quản trị rủi ro: từ trên xuống', `<div class="sd-cols2 wide-left"><div>${gov}</div>
      <div><div class="sd-card acc"><b>ERM</b><p>Nhìn rủi ro của <b>toàn tổ chức</b>, không từng phòng riêng.</p></div>
      <div class="sd-card"><b>Bẫy</b><p>Người chấp nhận rủi ro tự đo rủi ro của mình → thiếu độc lập.</p></div></div></div>`),

    S('Quản trị rủi ro hiệu quả', `<div class="sd-grid4">
      <div class="sd-card"><b>Risk tolerance rõ ràng</b><p>Rủi ro nào nhận, rủi ro nào tránh, mức nào.</p></div>
      <div class="sd-card"><b>Board giám sát thực chất</b><p>Đủ hiểu biết, không chỉ ký duyệt.</p></div>
      <div class="sd-card"><b>Chức năng rủi ro độc lập</b><p>CRO có tiếng nói đủ mạnh.</p></div>
      <div class="sd-card"><b>Gắn với chiến lược và thưởng</b><p>Không thưởng cho rủi ro quá mức.</p></div></div>`),

    S('Risk tolerance: bên trong và bên ngoài', `<div class="sd-cols2">
      <div class="sd-card acc"><b>Bên trong</b><p>Mục tiêu, chiến lược</p><p>Chuyên môn với từng rủi ro</p><p>Vốn, thanh khoản để hấp thụ lỗ</p></div>
      <div class="sd-card"><b>Bên ngoài</b><p>Cạnh tranh</p><p>Quy định pháp luật</p><p>Kinh tế, thị trường</p></div></div>
      <p class="sd-note">Hãng bay giỏi vận hành, không giỏi dự báo giá dầu → tolerance thấp với giá dầu → hedge.</p>`),

    S('Từ tolerance đến ngân sách rủi ro', `<div class="sd-steps"><span>① Board duyệt <b>risk tolerance</b>: tổng rủi ro được phép</span><span>② <b>Risk budget</b>: chia cho bộ phận, tài sản, nhà quản lý</span><span>③ <b>Hạn mức</b>: VaR, beta, duration, tracking error</span><span>④ Theo dõi và điều chỉnh khi vượt</span></div>
      <p class="sd-note">Một chiều (beta, VaR) hay nhiều chiều (theo yếu tố). Đặt rủi ro vào nơi có lợi suất trên rủi ro cao nhất.</p>`),

    S('Ví dụ: ngân sách tracking error 3%', `<div class="sd-cols2">
      <div><p class="sd-cap">50% A (TE 4%) + 50% B (TE 6%), không tương quan</p>
      ${bar('Cộng thẳng', 5, 6)}${bar('A + B thực tế', teAB, 6)}${bar('Ngân sách', 3, 6)}${bar('A + C (TE 4%)', teAC, 6)}</div>
      <div><div class="sd-f sm">√(2² + 3²) = <b>${fmt(teAB)}%</b> &gt; 3%</div><div class="sd-f sm">√(2² + 2²) = <b>${fmt(teAC)}%</b> &lt; 3%</div>
      <p class="sd-note">Rủi ro không tương quan thì không cộng thẳng.</p></div></div>`),

    S('Rủi ro tài chính', `<div class="sd-cols3">
      <div class="sd-card acc"><b>Thị trường</b><p>Lãi suất, tỷ giá, cổ phiếu, hàng hóa.</p></div>
      <div class="sd-card"><b>Tín dụng</b><p>Đối tác không trả nợ; gồm rủi ro đối tác phái sinh.</p></div>
      <div class="sd-card"><b>Thanh khoản</b><p>Bán giá thấp hoặc không bán được khi cần.</p></div></div>
      <p class="sd-note">Đến từ thị trường tài chính. Mọi rủi ro khác là phi tài chính.</p>`),

    S('Rủi ro phi tài chính', `<div class="sd-tbl grid">
      <div class="head"><span>Rủi ro</span><span>Ví dụ</span></div>
      <div><span>Settlement</span><span>Đã trả tiền, chưa nhận hàng</span></div>
      <div><span>Legal · Compliance</span><span>Bị kiện; vi phạm quy định, thuế, kế toán</span></div>
      <div><span>Model · Tail</span><span>Mô hình sai; sự kiện cực đoan</span></div>
      <div><span>Operational</span><span>Gian lận, lỗi lệnh, tấn công mạng</span></div>
      <div><span>Solvency</span><span>Cạn tiền, không hoạt động tiếp</span></div>
      <div><span>Cá nhân</span><span>Mortality, longevity, sức khỏe</span></div></div>`),

    S('Rủi ro tương tác và khuếch đại nhau', `<div class="sd-cols2 wide-left"><div>${chain}</div>
      <div><div class="sd-card acc"><b>Lớn hơn tổng</b><p>Trong khủng hoảng, tác động kết hợp vượt tổng từng phần.</p></div>
      <div class="sd-card"><b>Hệ quả</b><p>Đo riêng lẻ sẽ đánh giá thấp rủi ro.</p></div></div></div>`),

    S('Đo lường: mỗi rủi ro một thước đo', `<div class="sd-tbl grid">
      <div class="head"><span>Thước đo</span><span>Đo</span><span>Ví dụ</span></div>
      <div><span>σ</span><span>Biến động tổng</span><span>15%/năm</span></div>
      <div><span>Beta</span><span>Cổ phiếu và thị trường</span><span>1,2 × -10% = -12%</span></div>
      <div><span>Duration</span><span>Trái phiếu và lãi suất</span><span>6 × +0,5% → -3%</span></div>
      <div><span>Delta</span><span>Quyền chọn và giá</span><span>0,6 × 2 = 1,2</span></div>
      <div><span>VaR, CVaR</span><span>Lỗ ở đuôi</span><span>Xem slide sau</span></div>
      <div><span>Stress, kịch bản</span><span>Tình huống cực đoan</span><span>Như năm 2008</span></div></div>`),

    S('Value at Risk', `<div class="sd-cols2 wide-left"><div>${varPlot()}</div>
      <div><div class="sd-steps"><span>20 triệu USD, σ ngày 1,5%</span><span>VaR 5% = 1,645 × 1,5% × 20 tr = <b>${th(1.645 * 0.015 * 20e6)}</b></span><span>VaR 1% = 2,326 × 1,5% × 20 tr = <b>${th(2.326 * 0.015 * 20e6)}</b></span></div>
      <p class="sd-note">5% khả năng lỗ <b>ít nhất</b> 493.500, không phải lỗ tối đa. CVaR: lỗ trung bình khi đã vượt VaR.</p></div></div>`),

    S('Bốn cách điều chỉnh rủi ro', `<div class="sd-grid4">
      <div class="sd-card"><b>Ngăn ngừa, tránh</b><p>Không tham gia; kiểm soát nội bộ.</p></div>
      <div class="sd-card"><b>Chấp nhận</b><p>Tự bảo hiểm, đa dạng hóa.</p></div>
      <div class="sd-card acc"><b>Chuyển giao</b><p>Bảo hiểm, bảo lãnh.</p></div>
      <div class="sd-card acc"><b>Dịch chuyển</b><p>Phái sinh: kỳ hạn, swap, quyền chọn.</p></div></div>
      <p class="sd-note">Bảo hiểm → transfer. Phái sinh → shifting.</p>`),

    S('Chọn phương pháp nào?', `<div class="sd-cols2 wide-left"><div>${fsMatrix}</div>
      <div><div class="sd-card"><b>Nguyên tắc</b><p>Lợi ích lớn nhất so với chi phí, trong giới hạn tolerance.</p></div>
      <div class="sd-card"><b>Cân nhắc thêm</b><p>Chi phí bảo hiểm, rủi ro đối tác, thuế, chuyên môn.</p></div></div></div>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>Khớp rủi ro với tolerance, không giảm tối đa</span><span>Board duyệt risk tolerance</span>
      <span>CRO độc lập với kinh doanh</span><span>Risk budget phân bổ tổng rủi ro</span>
      <span>Tài chính: thị trường, tín dụng, thanh khoản</span><span>Rủi ro tương tác, khuếch đại</span>
      <span>VaR là lỗ tối thiểu ở đuôi</span><span>Bảo hiểm: transfer; phái sinh: shifting</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 10 câu.</p>`),
  ];

  addDeck('PC-06', 'Slide Risk Management - bản thiết kế riêng (17 slide)', slides);
}());
