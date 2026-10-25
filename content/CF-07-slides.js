// Bộ slide tự thiết kế cho CF-07 Business Models.
(function () {
  const L = window.LESSONS && window.LESSONS['CF-07'];
  if (!L) return;
  const { frac, slide, addDeck } = window.CFAH;
  const K = 'CF-07 · Business Models';
  const S = (title, body, opt = {}) => slide(title, body, Object.assign({ kicker: K }, opt));

  // Biểu đồ hòa vốn: giá 50, chi phí biến đổi 30, chi phí cố định 200.000.
  const beChart = (() => {
    const W = 600, H = 300, l = 70, r = 570, t = 20, b = 250;
    const X = q => l + (q / 20000) * (r - l), Y = v => b - (v / 1000000) * (b - t);
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv" role="img" aria-label="Biểu đồ hòa vốn">`;
    [0, 250000, 500000, 750000, 1000000].forEach(v => { s += `<line x1="${l}" y1="${Y(v)}" x2="${r}" y2="${Y(v)}" class="sv-grid"/><text x="${l - 8}" y="${Y(v) + 5}" class="sv-muted" text-anchor="end">${v / 1000}k</text>`; });
    [0, 5000, 10000, 15000, 20000].forEach(q => { s += `<text x="${X(q)}" y="${b + 22}" class="sv-muted">${(q / 1000).toString()}k</text>`; });
    s += `<line x1="${l}" y1="${b}" x2="${r}" y2="${b}" class="sv-axis"/><line x1="${l}" y1="${t}" x2="${l}" y2="${b}" class="sv-axis"/>`;
    s += `<line x1="${X(0)}" y1="${Y(200000)}" x2="${X(20000)}" y2="${Y(200000)}" class="sv-dash"/>`;
    s += `<line x1="${X(0)}" y1="${Y(0)}" x2="${X(20000)}" y2="${Y(1000000)}" class="sv-up"/>`;
    s += `<line x1="${X(0)}" y1="${Y(200000)}" x2="${X(20000)}" y2="${Y(800000)}" class="sv-down"/>`;
    s += `<circle cx="${X(10000)}" cy="${Y(500000)}" r="7" class="sv-dot"/><text x="${X(10000) - 12}" y="${Y(500000) - 12}" class="sv-txt" text-anchor="end">Hòa vốn: 10.000</text>`;
    s += `<text x="${X(19500)}" y="${Y(975000) + 26}" class="sv-txt sv-t-up" text-anchor="end">Doanh thu</text><text x="${X(19500)}" y="${Y(785000) + 26}" class="sv-txt sv-t-down" text-anchor="end">Tổng chi phí</text>`;
    s += `<text x="${X(19500)}" y="${Y(200000) - 8}" class="sv-muted" text-anchor="end">Chi phí cố định</text>`;
    s += `<text x="${(l + r) / 2}" y="${H - 4}" class="sv-muted">Sản lượng</text></svg>`;
    return s;
  })();

  // Hiệu ứng mạng: số kết nối tiềm năng n(n - 1)/2.
  const netChart = (() => {
    const W = 600, H = 260, base = 220;
    const rows = [2, 4, 8, 16];
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv" role="img" aria-label="Số kết nối tăng nhanh hơn số người dùng">`;
    rows.forEach((n, i) => {
      const c = (n * (n - 1)) / 2, h = (c / 120) * 180, x = 70 + i * 140;
      s += `<rect x="${x}" y="${base - h}" width="80" height="${h}" class="sv-panel"/><text x="${x + 40}" y="${base - h - 10}" class="sv-txt">${c}</text><text x="${x + 40}" y="${base + 24}" class="sv-muted">${n} người</text>`;
    });
    s += `<line x1="40" y1="${base}" x2="580" y2="${base}" class="sv-axis"/></svg>`;
    return s;
  })();

  const slides = [
    S('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Corporate Issuers · CF-07</div>
      <h2>Business Models</h2>
      <p>Công ty này kiếm tiền bằng cách nào?</p>
      <div class="sd-chips"><span>LOS 1 · Đặc điểm chính</span><span>LOS 2 · Các loại mô hình</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Bốn câu hỏi cốt lõi', `<div class="sd-grid4">
      <div class="sd-card"><b>Who</b><p>Khách hàng: địa lý, phân khúc, B2B hay B2C</p></div>
      <div class="sd-card"><b>What</b><p>Sản phẩm, dịch vụ; khác biệt; nhu cầu giải quyết</p></div>
      <div class="sd-card"><b>Where</b><p>Kênh: trực tiếp, trung gian, số, đa kênh</p></div>
      <div class="sd-card acc"><b>How much</b><p>Chiến lược giá và cách thu tiền</p></div></div>
      <p class="sd-note">Gộp lại = <b>value proposition</b>: lý do khách chọn công ty thay vì đối thủ.</p>`),

    S('Kênh phân phối', `<div class="sd-cols2">
      <div class="sd-card"><b>Hai chức năng</b><p>Bán hàng</p><p>Giao hàng (sản phẩm, dịch vụ)</p></div>
      <div class="sd-card acc"><b>Ba yếu tố chiến lược kênh</b><p>Chức năng: bán, phân phối, nhận đơn, hậu mãi</p><p>Tài sản: kho, cửa hàng, đội bán, website</p><p>Đối tác: bán lẻ, bán buôn, đại lý, nhượng quyền</p></div></div>
      <p class="sd-note">Bán trực tiếp: biên gộp cao, tốn tài sản. Qua trung gian: nhẹ vốn, chia biên lợi nhuận.</p>`),

    S('Định vị và cách đặt giá', `<div class="sd-cols3">
      <div class="sd-card"><b>Premium</b><p>Cao hơn đối thủ</p><small>Cần khác biệt thật</small></div>
      <div class="sd-card"><b>Parity</b><p>Ngang đối thủ</p></div>
      <div class="sd-card"><b>Discount</b><p>Thấp hơn đối thủ</p><small>Cần lợi thế chi phí</small></div></div>
      <div class="sd-cols2"><div class="sd-rule up">Value-based <b>theo giá trị cảm nhận</b></div><div class="sd-rule">Cost-based <b>chi phí + lợi nhuận</b></div></div>`),

    S('Phân biệt giá và nhiều sản phẩm', `<div class="sd-cols2">
      <div class="sd-card"><b>Phân biệt giá</b><p>Tiered: theo khối lượng, gói</p><p>Dynamic: theo thời điểm, cung cầu</p><p>Auction: người mua trả giá</p></div>
      <div class="sd-card acc"><b>Nhiều sản phẩm</b><p>Bundling: gộp gói</p><p>Razors-and-blades: máy rẻ, lời từ hàng tiêu hao</p><p>Optional: giá cơ bản thấp, lời từ nâng cấp</p></div></div>`),

    S('Định giá để tăng trưởng nhanh', `<div class="sd-cols3">
      <div class="sd-card"><b>Penetration</b><p>Giá thấp để chiếm thị phần, lời khi đủ quy mô</p></div>
      <div class="sd-card"><b>Freemium</b><p>Cơ bản miễn phí, thu tiền bản cao cấp</p></div>
      <div class="sd-card acc"><b>Hidden revenue</b><p>Người dùng không trả; quảng cáo, dữ liệu trả</p></div></div>
      <p class="sd-note">Bẫy nhận diện: "miễn phí có bản trả phí" là freemium; "miễn phí hoàn toàn, sống nhờ quảng cáo" là hidden revenue.</p>`),

    S('Thay thế cho bán đứt', `<div class="sd-tbl grid"><div class="head"><span>Hình thức</span><span>Ý chính</span><span>Ví dụ</span></div>
      <div><span>Subscription</span><span>Phí định kỳ</span><span>Phần mềm, phim</span></div>
      <div><span>Fractionalization</span><span>Chia nhỏ tài sản, thời gian</span><span>Timeshare</span></div>
      <div><span>Leasing</span><span>Dùng, không sở hữu</span><span>Thuê xe</span></div>
      <div><span>Licensing</span><span>Phí bản quyền</span><span>Bằng sáng chế</span></div>
      <div><span>Franchising</span><span>Thương hiệu + quy trình, theo khu vực</span><span>Chuỗi cà phê</span></div></div>`),

    S('Chuỗi giá trị và chuỗi cung ứng', `<div class="sd-cols2">
      <div class="sd-card acc"><b>Value chain</b><p>Các hoạt động <b>công ty thực hiện</b> để tạo giá trị</p><small>R&amp;D, sản xuất, marketing, hậu mãi</small></div>
      <div class="sd-card"><b>Supply chain</b><p><b>Trình tự các bước</b> làm ra và đưa sản phẩm đến khách</p><small>Thường qua nhiều công ty</small></div></div>
      <p class="sd-note">Câu hỏi phân tích: công ty tạo giá trị ở khâu nào và có <b>giữ lại</b> được giá trị đó không?</p>`),

    S('Hòa vốn', `<div class="sd-cols2 wide-left"><div>${beChart}</div>
      <div><div class="sd-f sm">Q<sub>hòa vốn</sub> = ${frac('Chi phí cố định', 'Giá - chi phí biến đổi')}</div>
      <div class="sd-steps"><span>Giá 50, biến đổi 30 → lãi góp 20</span><span>200.000 / 20 = <b>10.000</b> sản phẩm</span><span>Doanh thu hòa vốn = 500.000</span></div></div></div>`),

    S('Unit economics của mô hình thuê bao', `<div class="sd-cols3">
      <div class="sd-card"><b>Lợi nhuận gộp/tháng</b><p>10 × 70% = 7</p></div>
      <div class="sd-card"><b>Thời gian giữ chân</b><p>1 / 5% = 20 tháng</p></div>
      <div class="sd-card acc"><b>LTV = 140</b><p>7 × 20</p></div></div>
      <div class="sd-cols2"><div class="sd-rule up">LTV / CAC = 140 / 70 = <b>2</b></div><div class="sd-rule">Hoàn vốn CAC = 70 / 7 = <b>10 tháng</b></div></div>
      <p class="sd-note">Dùng <b>lợi nhuận gộp</b>, không dùng doanh thu (200).</p>`),

    S('Mô hình theo ngành và các biến thể', `<div class="sd-cols2">
      <div class="sd-card"><b>Theo ngành</b><p>Tài nguyên, sản xuất, phân phối, bán lẻ</p><p>Ngân hàng, môi giới, dịch vụ, phần mềm</p></div>
      <div class="sd-card acc"><b>Biến thể</b><p>Private label: làm hàng cho nhãn khác</p><p>Licensing: dùng hoặc cho dùng thương hiệu</p><p>Value-added reseller: phân phối + lắp đặt, hỗ trợ</p><p>Nhượng quyền phân phối độc quyền</p></div></div>`),

    S('Thương mại điện tử và nền tảng', `<div class="sd-cols2 wide-left"><div>${netChart}<p class="sd-cap">Số kết nối tiềm năng n(n - 1)/2 tăng nhanh hơn số người dùng</p></div>
      <div><div class="sd-rule">Affiliate <b>hoa hồng giới thiệu</b></div><div class="sd-rule">Marketplace <b>kết nối, không giữ hàng</b></div><div class="sd-rule">Aggregator <b>bán dưới thương hiệu mình</b></div><div class="sd-rule up">Platform <b>hiệu ứng mạng</b></div>
      <p class="sd-note">Crowdsourcing: người dùng đóng góp vào sản phẩm.</p></div></div>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>Who, What, Where, How much</span><span>Value proposition so với đối thủ</span>
      <span>Razors-and-blades: lời từ hàng tiêu hao</span><span>Freemium khác hidden revenue</span>
      <span>Value chain khác supply chain</span><span>Hòa vốn = cố định / lãi góp</span>
      <span>LTV dùng lợi nhuận gộp</span><span>Platform = hiệu ứng mạng</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 8 câu, mục tiêu ≥ 6 câu đúng.</p>`),
  ];

  addDeck('CF-07', `Slide Business Models - bản thiết kế riêng (${slides.length} slide)`, slides);
}());
