// Bộ slide tự thiết kế cho AI-06 Hedge Funds.
(function () {
  const L = window.LESSONS && window.LESSONS['AI-06'];
  if (!L) return;
  const { slide, addDeck } = window.CFAH;
  const K = 'AI-06 · Hedge Funds';
  const S = (title, body, opt = {}) => slide(title, body, Object.assign({ kicker: K }, opt));
  const fmt = (x, d = 2) => x.toFixed(d).replace('.', ',');

  const bars = (rows, lo, hi) => `<div class="sd-bars">${rows.map(([lab, v, txt]) => `<div class="sd-bar"><span class="sd-bar-l">${lab}</span><span class="sd-bar-t"><i style="width:${Math.min(100, Math.max(2, ((v - lo) / (hi - lo)) * 100))}%"></i></span><b>${txt}</b></div>`).join('')}</div>`;

  // Sơ đồ master-feeder.
  const mf = `<svg viewBox="0 0 600 270" class="sv big" role="img" aria-label="Cấu trúc master-feeder">
    <rect x="20" y="20" width="250" height="56" rx="10" class="sv-panel"/><text x="145" y="54" class="sv-txt">Nhà đầu tư trong nước</text>
    <rect x="330" y="20" width="250" height="56" rx="10" class="sv-panel"/><text x="455" y="54" class="sv-txt">NĐT nước ngoài, miễn thuế</text>
    <line x1="145" y1="76" x2="145" y2="106" class="sv-axis"/><line x1="455" y1="76" x2="455" y2="106" class="sv-axis"/>
    <rect x="40" y="106" width="210" height="52" rx="10" class="sv-key"/><text x="145" y="138" class="sv-keyt">Onshore feeder (LP)</text>
    <rect x="350" y="106" width="210" height="52" rx="10" class="sv-key"/><text x="455" y="138" class="sv-keyt">Offshore feeder</text>
    <line x1="145" y1="158" x2="270" y2="196" class="sv-up"/><line x1="455" y1="158" x2="330" y2="196" class="sv-up"/>
    <circle cx="300" cy="222" r="38" class="sv-node up"/><text x="300" y="218" class="sv-txt">Master</text><text x="300" y="238" class="sv-muted">giao dịch</text>
    <text x="470" y="236" class="sv-muted" text-anchor="start">một danh mục</text></svg>`;

  // Phân phối lệch âm: hỗn hợp 90% N(1; 1) và 10% N(-6; 2,5), so với phân phối chuẩn cùng trung bình, độ lệch chuẩn.
  function skew() {
    const n = (x, m, s) => Math.exp(-((x - m) ** 2) / (2 * s * s)) / (s * Math.sqrt(2 * Math.PI));
    const mix = x => 0.9 * n(x, 1, 1) + 0.1 * n(x, -6, 2.5);
    const mu = 0.9 * 1 + 0.1 * -6, v = 0.9 * (1 + 1) + 0.1 * (6.25 + 36) - mu * mu, sd = Math.sqrt(v);
    const W = 600, H = 260, l = 30, r = 580, b = 220, t = 20;
    const X = x => l + ((x + 14) / 20) * (r - l), Y = y => b - (y / 0.4) * (b - t);
    const pts = f => { let s = ''; for (let x = -14; x <= 6.001; x += 0.1) s += `${X(x).toFixed(1)},${Y(f(x)).toFixed(1)} `; return s; };
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv" role="img" aria-label="Phân phối lợi nhuận lệch âm so với phân phối chuẩn">`;
    s += `<line x1="${l}" y1="${b}" x2="${r}" y2="${b}" class="sv-axis"/>`;
    s += `<polyline points="${pts(x => n(x, mu, sd))}" class="sv-dash" fill="none"/><polyline points="${pts(mix)}" class="sv-curve"/>`;
    [-12, -8, -4, 0, 4].forEach(x => { s += `<text x="${X(x)}" y="${b + 22}" class="sv-muted">${x}%</text>`; });
    s += `<text x="${X(1) + 18}" y="${Y(0.36) + 4}" class="sv-txt sv-t-up" text-anchor="start">lãi nhỏ, thường xuyên</text>`;
    s += `<text x="${X(-6)}" y="${Y(0.05) - 16}" class="sv-txt sv-t-down">đuôi trái: lỗ lớn, hiếm</text>`;
    s += `<text x="${X(-12)}" y="${Y(0.2)}" class="sv-muted" text-anchor="start">nét đứt: phân phối chuẩn cùng σ</text>`;
    return `${s}</svg>`;
  }

  const slides = [
    S('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Alternative Investments · AI-06</div>
      <h2>Hedge Funds</h2>
      <p>Tự do chiến lược, đổi lại là ít minh bạch và khó rút vốn</p>
      <div class="sd-chips"><span>LOS 1 · Đặc điểm, so sánh</span><span>LOS 2 · Hình thức, phương tiện</span><span>LOS 3 · Rủi ro, lợi nhuận, đa dạng hóa</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Hedge fund là gì?', `<div class="sd-check">
      <span>Quỹ tư nhân góp vốn chung</span><span>Chỉ cho nhà đầu tư đủ điều kiện</span>
      <span>Ít quy định, minh bạch thấp</span><span>Đòn bẩy, bán khống, phái sinh tự do</span>
      <span>Mục tiêu lợi nhuận tuyệt đối</span><span>Phí quản lý + phí thưởng</span>
      <span>Lockup, notice, gate</span><span>Người quản lý góp vốn cùng</span></div>`),

    S('So với quỹ tương hỗ và private equity', `<div class="sd-tbl grid"><div class="head"><span></span><span>Quỹ tương hỗ</span><span>Hedge fund</span><span>PE fund</span></div>
      <div><span>Tài sản</span><span>Niêm yết, long-only</span><span>Có thị trường, long + short</span><span>Công ty tư nhân</span></div>
      <div><span>Cấu trúc</span><span>Mở, rút hằng ngày</span><span>Mở, có lockup</span><span>Đóng, ~10 năm</span></div>
      <div><span>Quy định</span><span>Chặt</span><span>Nhẹ</span><span>Nhẹ</span></div>
      <div><span>Mục tiêu</span><span>Vượt chỉ số</span><span>Tuyệt đối</span><span>Tạo giá trị, thoái vốn</span></div></div>`),

    S('Năm "cánh cửa" khi rút vốn', `<div class="sd-steps">
      <span>① <b>Lockup</b>: chưa được rút (hard) hoặc rút chịu phí (soft)</span>
      <span>② <b>Notice period</b>: báo trước 30 - 90 ngày</span>
      <span>③ <b>Tần suất</b>: chỉ rút vào ngày định sẵn (tháng, quý)</span>
      <span>④ <b>Gate</b>: cả quỹ chỉ cho rút tối đa một tỷ lệ mỗi kỳ</span>
      <span>⑤ <b>Side pocket</b>: tài sản kém thanh khoản trả sau</span></div>
      <p class="sd-note">Mục đích: tránh bán tháo gây hại cho nhà đầu tư ở lại.</p>`),

    S('Sáu nhóm chiến lược', `<div class="sd-tbl grid"><div class="head"><span>Nhóm</span><span>Ví dụ</span><span>Kiếm lời từ</span></div>
      <div><span>Equity hedge</span><span>Long/short, market neutral</span><span>Chọn cổ phiếu</span></div>
      <div><span>Event-driven</span><span>Merger arb, distressed, activist</span><span>Sự kiện doanh nghiệp</span></div>
      <div><span>Relative value</span><span>FI arb, convertible arb</span><span>Chênh lệch nhỏ + đòn bẩy</span></div>
      <div><span>Opportunistic</span><span>Global macro, managed futures</span><span>Xu hướng vĩ mô, xu hướng giá</span></div>
      <div><span>Specialist</span><span>Volatility, tái bảo hiểm</span><span>Thị trường ngách</span></div>
      <div><span>Multi-strategy</span><span>Nhiều nhóm giao dịch</span><span>Đa dạng, phân bổ linh hoạt</span></div></div>`),

    S('Gross và net exposure', `<div class="sd-cols2 wide-left"><div><p class="sd-cap">Vốn 100, long 120, short 80 (% vốn):</p>${bars([['Long', 120, '120%'], ['Short', 80, '80%'], ['Gross = long + short', 200, '200%'], ['Net = long - short', 40, '40%']], 0, 200)}</div>
      <div><div class="sd-rule">Gross đo <b>đòn bẩy</b></div><div class="sd-rule">Net đo <b>hướng thị trường</b></div><p class="sd-note">Market neutral: net (beta) ≈ 0. Short bias: net &lt; 0.</p></div></div>`),

    S('Merger arbitrage: bán bảo hiểm thương vụ', `<div class="sd-cols2">
      <div><p class="sd-cap">Giá chào mua 50 tiền mặt, B đang ở 46, thất bại về 38:</p>
      <div class="sd-rule up">Thành công: (50 - 46)/46 = <b>+${fmt(4 / 46 * 100)}%</b></div>
      <div class="sd-rule down">Thất bại: (38 - 46)/46 = <b>${fmt(-8 / 46 * 100)}%</b></div>
      <div class="sd-rule">Kỳ vọng (90% thành công) = <b>${fmt((0.9 * 4 / 46 - 0.1 * 8 / 46) * 100)}%</b></div></div>
      <div class="sd-card acc"><b>Trả bằng cổ phiếu?</b><p>Mua cổ phiếu mục tiêu, <b>bán khống</b> cổ phiếu bên mua theo tỷ lệ hoán đổi.</p><small>Lãi nhỏ thường xuyên, lỗ lớn hiếm khi → lệch âm</small></div></div>`),

    S('Relative value và opportunistic', `<div class="sd-cols2">
      <div class="sd-card"><b>Relative value</b><p>Convertible arb: mua trái phiếu chuyển đổi rẻ, bán khống cổ phiếu.</p><p>FI arb: chênh lệch giữa các trái phiếu liên quan.</p><small>Chênh lệch nhỏ → đòn bẩy cao → rủi ro thanh khoản</small></div>
      <div class="sd-card acc"><b>Opportunistic</b><p>Global macro: top-down về lãi suất, tiền tệ, chính sách.</p><p>Managed futures: hệ thống bám xu hướng trên futures.</p><small>"Crisis alpha" trong đợt giảm kéo dài</small></div></div>`),

    S('Master-feeder: một danh mục, hai cửa vào', `<div class="sd-cols2 wide-left"><div>${mf}</div>
      <div><div class="sd-rule up">Hiệu quả thuế cho từng nhóm nhà đầu tư</div><div class="sd-rule up">Một danh mục: tiết kiệm chi phí giao dịch, quản lý</div><div class="sd-rule">Mọi nhà đầu tư cùng vị thế</div></div></div>`),

    S('Bốn phương tiện đầu tư', `<div class="sd-tbl grid"><div class="head"><span></span><span>Quỹ chung</span><span>Fund of funds</span><span>SMA</span><span>Liquid alt</span></div>
      <div><span>Minh bạch</span><span>Thấp</span><span>Thấp nhất</span><span>Cao nhất</span><span>Cao</span></div>
      <div><span>Phí</span><span>Cao</span><span>Hai tầng</span><span>Thương lượng</span><span>Thấp hơn</span></div>
      <div><span>Vốn tối thiểu</span><span>Cao</span><span>Thấp hơn</span><span>Rất cao</span><span>Thấp</span></div>
      <div><span>Thanh khoản</span><span>Lockup</span><span>Theo quỹ con</span><span>Tốt</span><span>Tốt nhất</span></div></div>
      <p class="sd-note">Liquid alt (40 Act, UCITS) bị giới hạn đòn bẩy → lợi nhuận thường thấp hơn.</p>`),

    S('Ba lớp lợi nhuận', `<div class="sd-cols2 wide-left"><div><p class="sd-cap">Quỹ đạt 9%: beta 0,4 × thị trường 10%; 0,5 × yếu tố value 3%</p>${bars([['Market beta', 4, '4,0%'], ['Strategy beta', 1.5, '1,5%'], ['Alpha', 3.5, '3,5%'], ['Tổng', 9, '9,0%']], 0, 9)}</div>
      <div><div class="sd-rule">Market beta: mua rẻ qua ETF</div><div class="sd-rule">Strategy beta: risk premia, smart beta</div><div class="sd-rule up">Alpha: kỹ năng, đáng trả phí</div><p class="sd-note">Quên strategy beta → alpha "5%" (phóng đại).</p></div></div>`),

    S('Rủi ro đặc thù', `<div class="sd-check">
      <span>Đòn bẩy, gọi ký quỹ</span><span>Thanh khoản, gate</span>
      <span>Đối tác: prime broker, OTC</span><span>Vận hành, key person</span>
      <span>Bán khống: lỗ không giới hạn</span><span>Style drift</span>
      <span>Crowding: thoát cùng lúc</span><span>Mô hình, minh bạch thấp</span></div>`),

    S('Dữ liệu làm thành tích đẹp hơn', `<div class="sd-cols2 wide-left"><div><p class="sd-cap">10 quỹ: 7 sống sót (9%), 3 đóng cửa (-6%)</p>${bars([['Cơ sở dữ liệu (chỉ quỹ sống)', 9, '9,0%'], ['Trung bình thật cả 10 quỹ', 4.5, '4,5%']], 0, 10)}</div>
      <div><div class="sd-rule down">Survivorship: quỹ chết bị loại</div><div class="sd-rule down">Backfill: chỉ báo cáo khi đã tốt</div><div class="sd-rule down">Smoothing: tài sản kém thanh khoản</div><p class="sd-note">Cả ba: lợi nhuận <b>cao hơn</b>, rủi ro <b>thấp hơn</b> thực tế.</p></div></div>`),

    S('Lệch âm: độ lệch chuẩn đánh lừa', `<div class="sd-cols2 wide-left"><div>${skew()}</div>
      <div><div class="sd-rule">Merger arb, relative value, bán biến động, tín dụng</div><div class="sd-rule down">σ và Sharpe đánh giá thấp rủi ro đuôi</div><div class="sd-rule up">Xem thêm drawdown, độ lệch, độ nhọn</div></div></div>`),

    S('Đa dạng hóa phụ thuộc chiến lược', `<div class="sd-cols2">
      <div><p class="sd-cap"><b>Bình thường</b></p><div class="sd-rule up">Market neutral, relative value: tương quan thấp</div><div class="sd-rule down">Equity long-biased: tương quan khá cao</div></div>
      <div><p class="sd-cap"><b>Khủng hoảng</b></p><div class="sd-rule down">Event-driven, distressed, RV có đòn bẩy: tương quan tăng vọt</div><div class="sd-rule up">Global macro, managed futures: đa dạng hóa tốt nhất</div></div></div>
      <p class="sd-note">Phân tán lớn giữa quỹ giỏi và kém → thẩm định đầu tư và vận hành là then chốt.</p>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>Ít quy định, đòn bẩy, bán khống</span><span>Lockup, notice, gate, side pocket</span>
      <span>Gross = L + S; net = L - S</span><span>Merger arb: lệch âm</span>
      <span>Master-feeder: hiệu quả thuế</span><span>FoF: hai tầng phí; SMA: minh bạch</span>
      <span>Market beta + strategy beta + alpha</span><span>Survivorship, backfill phóng đại lợi nhuận</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 10 câu, mục tiêu ≥ 7 câu đúng.</p>`),
  ];

  addDeck('AI-06', `Slide Hedge Funds - bản thiết kế riêng (${slides.length} slide)`, slides);
}());
