// Bộ slide tự thiết kế cho PC-03 Portfolio Management: An Overview.
(function () {
  const { frac, slide, addDeck } = window.CFAH;
  if (!window.LESSONS['PC-03']) return;
  const K = { kicker: 'PC-03 · Portfolio Management Overview' };
  const S = (title, body) => slide(title, body, K);
  const fmt = (x, d = 2) => x.toFixed(d).replace('.', ',');

  // Tỷ số đa dạng hóa (σ mỗi cổ phiếu 30%, tỷ trọng đều).
  function drBars() {
    const dr = (n, r) => Math.sqrt(0.09 / n + ((n - 1) / n) * r * 0.09) / 0.3;
    const rows = [['1 cổ phiếu', 1], ['2 cổ phiếu, ρ 0,4', dr(2, 0.4)], ['10 cổ phiếu, ρ 0,4', dr(10, 0.4)], ['30 cổ phiếu, ρ 0,4', dr(30, 0.4)], ['10 cổ phiếu, ρ 0,8', dr(10, 0.8)]];
    return `<div class="sd-bars">${rows.map(([lab, v]) => `<div class="sd-bar"><span class="sd-bar-l">${lab}</span><span class="sd-bar-t"><i style="width:${v * 100}%"></i></span><b>${fmt(v)}</b></div>`).join('')}</div>`;
  }

  // Vòng quy trình 3 bước.
  const cycle = `<svg viewBox="0 0 600 300" class="sv big" role="img" aria-label="Quy trình quản lý danh mục ba bước">
    <line x1="130" y1="95" x2="470" y2="95" class="sv-up"/><line x1="470" y1="95" x2="300" y2="235" class="sv-up"/><line x1="300" y1="235" x2="130" y2="95" class="sv-down"/>
    <circle cx="130" cy="95" r="58" class="sv-node"/><text x="130" y="90" class="sv-txt">1. Lập</text><text x="130" y="114" class="sv-txt">kế hoạch</text>
    <circle cx="470" cy="95" r="58" class="sv-node up"/><text x="470" y="90" class="sv-txt">2. Thực</text><text x="470" y="114" class="sv-txt">hiện</text>
    <circle cx="300" cy="235" r="58" class="sv-node down"/><text x="300" y="230" class="sv-txt">3. Phản</text><text x="300" y="254" class="sv-txt">hồi</text>
    <text x="300" y="80" class="sv-muted">IPS dẫn đường</text><text x="470" y="200" class="sv-muted" text-anchor="start">giám sát</text><text x="130" y="200" class="sv-muted" text-anchor="end">cập nhật</text>
    <polygon points="398,87 412,95 398,103" class="sv-dot"/><polygon points="345,198 360.9,195.3 350.7,182.9" class="sv-dot"/><polygon points="175,132 190.9,134.7 180.7,147.1" class="sv-dot"/></svg>`;

  // Bản đồ nhà đầu tư tổ chức: kỳ hạn và mức chịu rủi ro (định tính).
  const investorMap = (() => {
    const l = 70, r = 580, t = 20, b = 240;
    let s = `<svg viewBox="0 0 600 300" class="sv big" role="img" aria-label="Kỳ hạn và mức chịu rủi ro của các nhà đầu tư tổ chức">`;
    s += `<line x1="${l}" y1="${b}" x2="${r}" y2="${b}" class="sv-axis"/><line x1="${l}" y1="${t}" x2="${l}" y2="${b}" class="sv-axis"/>`;
    s += `<text x="${(l + r) / 2}" y="${b + 30}" class="sv-muted">Kỳ hạn đầu tư: ngắn → dài</text><text x="${l - 12}" y="${t + 10}" class="sv-muted" text-anchor="end">cao</text><text x="${l - 12}" y="${b}" class="sv-muted" text-anchor="end">thấp</text>`;
    const pts = [['Ngân hàng', 0.08, 0.1, 'down', 0, 34, 'start'], ['BH phi nhân thọ', 0.3, 0.24, 'down', 0, -18, 'middle'], ['BH nhân thọ', 0.58, 0.4, '', 16, 6, 'start'], ['Quỹ hưu trí DB', 0.68, 0.72, 'up', -16, 6, 'end'], ['Endowment', 0.9, 0.88, 'up', 0, 34, 'middle']];
    pts.forEach(([lab, x, y, c, dx, dy, an]) => {
      const cx = l + x * (r - l), cy = b - y * (b - t);
      s += `<circle cx="${cx}" cy="${cy}" r="9" class="sv-node ${c}"/><text x="${cx + dx}" y="${cy + dy}" class="sv-txt" text-anchor="${an}">${lab}</text>`;
    });
    s += `<text x="${l + 6}" y="${t + 28}" class="sv-muted" text-anchor="start">Mức chịu rủi ro</text></svg>`;
    return s;
  })();

  const slides = [
    slide('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Portfolio Construction · PC-03</div>
      <h2>Portfolio Management<br>An Overview</h2>
      <p>Vì sao danh mục - quy trình - ai đầu tư - sản phẩm nào</p>
      <div class="sd-chips"><span>LOS 1-2 · Danh mục, quy trình</span><span>LOS 3-4 · Nhà đầu tư, DB và DC</span><span>LOS 5-6 · Ngành quản lý tài sản, quỹ</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Sáu câu hỏi của buổi học', `<div class="sd-check">
      <span>Vì sao đầu tư theo danh mục?</span><span>Quản lý danh mục gồm những bước nào?</span>
      <span>Mỗi loại nhà đầu tư cần gì?</span><span>DB và DC khác nhau ở đâu?</span>
      <span>Ngành quản lý tài sản vận hành ra sao?</span><span>Quỹ mở, quỹ đóng, ETF, hedge fund khác gì nhau?</span></div>
      <p class="sd-note">Hầu như không tính toán. Đề thi hỏi <b>phân biệt khái niệm</b> → học bằng bảng so sánh.</p>`),

    S('Từ "cổ phiếu tốt nhất" đến danh mục', `<div class="sd-cols2">
      <div class="sd-card"><b>Trước 1952</b><p>Chọn từng mã tốt nhất, đánh giá riêng lẻ.</p></div>
      <div class="sd-card acc"><b>Markowitz (1952, Nobel 1990)</b><p>Đánh giá tài sản theo <b>đóng góp vào danh mục</b>: tương quan quyết định rủi ro.</p></div></div>
      <div class="sd-rule up">Đa dạng hóa: giảm rủi ro, không nhất thiết giảm lợi suất <b>lợi ích cốt lõi</b></div>
      <div class="sd-rule down">Enron 2001: nhân viên mất cả việc làm lẫn tiền hưu trí <b>rủi ro tập trung</b></div>`),

    S('Tỷ số đa dạng hóa', `<div class="sd-cols2"><div><div class="sd-f">DR = ${frac('σ danh mục', 'σ một chứng khoán')}</div>
      <p>Ví dụ: 18% / 25% = <b>0,72</b></p><div class="sd-rule up">DR thấp → lợi ích lớn</div><div class="sd-rule">DR = 1 → không có lợi ích</div></div>
      <div><p class="sd-cap">σ mỗi cổ phiếu 30%, tỷ trọng đều:</p>${drBars()}<p class="sd-note">Khủng hoảng (ρ tăng) → DR tiến về 1.</p></div></div>`),

    S('Quy trình quản lý danh mục', `<div class="sd-cols2 wide-left"><div>${cycle}</div>
      <div><div class="sd-steps"><span><b>Lập kế hoạch</b>: hiểu khách hàng, soạn IPS</span><span><b>Thực hiện</b>: phân bổ tài sản, phân tích chứng khoán, xây danh mục</span><span><b>Phản hồi</b>: giám sát, tái cân bằng, đo lường và báo cáo</span></div></div></div>`),

    S('Hoạt động nào thuộc bước nào?', `<div class="sd-tbl grid"><div class="head"><span>Hoạt động</span><span>Bước</span></div>
      <div><span>Gặp khách hàng tìm hiểu kế hoạch nghỉ hưu</span><span>Lập kế hoạch</span></div>
      <div><span>Quyết định 60% cổ phiếu, 40% trái phiếu</span><span>Thực hiện</span></div>
      <div><span>Phân tích báo cáo tài chính, chọn 30 mã</span><span>Thực hiện</span></div>
      <div><span>Bán bớt cổ phiếu khi tỷ trọng lên 70%</span><span>Phản hồi</span></div>
      <div><span>Báo cáo quý so với chỉ số chuẩn</span><span>Phản hồi</span></div></div>
      <p class="sd-note">Bẫy: phân bổ tài sản là <b>thực hiện</b>; tái cân bằng là <b>phản hồi</b>.</p>`),

    S('Cá nhân và tổ chức', `<div class="sd-cols2">
      <div class="sd-card"><b>Cá nhân</b><p>Nghỉ hưu, học phí, mua nhà, thừa kế.</p><p>Mỗi người một khác: tuổi, thu nhập, thuế, nhu cầu dự phòng.</p></div>
      <div class="sd-card acc"><b>Tổ chức</b><p>Quỹ hưu trí DB · endowment, foundation · ngân hàng · bảo hiểm · công ty đầu tư · quỹ đầu tư quốc gia</p><p>Mục tiêu gắn với <b>nghĩa vụ</b> của tổ chức.</p></div></div>`),

    S('Đặc điểm từng loại nhà đầu tư', `<div class="sd-tbl grid"><div class="head"><span>Nhà đầu tư</span><span>Rủi ro</span><span>Kỳ hạn</span><span>Thanh khoản</span><span>Thu nhập</span></div>
      <div><span>Cá nhân</span><span>Tùy</span><span>Tùy</span><span>Tùy</span><span>Tùy</span></div>
      <div><span>Quỹ hưu trí DB</span><span>Cao</span><span>Dài</span><span>Thấp</span><span>Theo tuổi</span></div>
      <div><span>Endowment</span><span>Cao</span><span>Dài</span><span>Thấp</span><span>Cam kết chi</span></div>
      <div><span>Ngân hàng</span><span>Thấp</span><span>Ngắn</span><span>Cao</span><span>Trả lãi</span></div>
      <div><span>Bảo hiểm</span><span>Thấp</span><span>Ngắn / dài</span><span>Cao</span><span>Thấp</span></div>
      <div><span>Quỹ quốc gia</span><span>Thường cao</span><span>Thường dài</span><span>Tùy</span><span>Tùy</span></div></div>`),

    S('Trực giác: nghĩa vụ quyết định khẩu vị', `<div class="sd-cols2 wide-left"><div>${investorMap}</div>
      <div><div class="sd-rule down">Phải trả sớm, bất ngờ → rủi ro thấp, thanh khoản cao</div><div class="sd-rule up">Tồn tại lâu dài, chi đều → rủi ro cao, kỳ hạn dài</div>
      <p class="sd-note">BH phi nhân thọ: bồi thường đến sớm và khó dự đoán hơn nhân thọ.</p></div></div>`),

    S('Quỹ hưu trí DB và DC', `<div class="sd-tbl grid"><div class="head"><span></span><span>DC</span><span>DB</span></div>
      <div><span>Được xác định</span><span>Mức đóng góp</span><span>Mức lương hưu</span></div>
      <div><span>Tài khoản</span><span>Riêng từng người</span><span>Quỹ chung</span></div>
      <div><span>Quyết định đầu tư</span><span>Nhân viên</span><span>Doanh nghiệp</span></div>
      <div><span>Chịu rủi ro đầu tư</span><span><b>Nhân viên</b></span><span><b>Doanh nghiệp</b></span></div>
      <div><span>Chuyển việc</span><span>Mang theo được</span><span>Khó mang theo</span></div></div>
      <p class="sd-note">Ai không biết chắc kết quả cuối cùng → người đó chịu rủi ro.</p>`),

    S('DB và DC bằng con số', `<div class="sd-cols2">
      <div class="sd-card"><b>DB</b><p>1,5% × 30 năm × 40.000 USD</p><p>= <b>18.000 USD/năm</b> lương hưu</p><small>Nhân viên biết chắc; doanh nghiệp chịu rủi ro</small></div>
      <div class="sd-card acc"><b>DC</b><p>10% × 50.000 USD lương</p><p>= <b>5.000 USD/năm</b> đóng góp</p><small>Doanh nghiệp biết chắc chi phí; nhân viên chịu rủi ro</small></div></div>
      <p class="sd-note">DB: <b>funded status</b> = tài sản quỹ so với PV nghĩa vụ. Xu hướng: DB → DC.</p>`),

    S('Ngành quản lý tài sản', `<div class="sd-cols2">
      <div class="sd-card acc"><b>Bên mua (buy side)</b><p>Quản lý tiền của khách hàng: công ty quản lý tài sản, quỹ hưu trí, endowment.</p></div>
      <div class="sd-card"><b>Bên bán (sell side)</b><p>Bán dịch vụ cho bên mua: ngân hàng đầu tư, môi giới, tạo lập thị trường.</p></div></div>
      <div class="sd-cols3"><div class="sd-card"><b>Chủ động / thụ động</b><small>smart beta ở giữa</small></div><div class="sd-card"><b>Truyền thống / thay thế</b><small>phí AUM / "2 và 20"</small></div><div class="sd-card"><b>Sở hữu</b><small>niêm yết, tư nhân, tập đoàn, multi-boutique</small></div></div>`),

    S('Bốn xu hướng lớn', `<div class="sd-grid4">
      <div class="sd-card"><div class="sd-n">1</div><b>Thụ động tăng</b><p>Quỹ chỉ số, ETF; áp lực giảm phí.</p></div>
      <div class="sd-card"><div class="sd-n">2</div><b>Big data</b><p>Dữ liệu thay thế, máy học.</p></div>
      <div class="sd-card"><div class="sd-n">3</div><b>Robo-advisor</b><p>Thuật toán tư vấn, chi phí thấp.</p></div>
      <div class="sd-card"><div class="sd-n">4</div><b>Hợp nhất</b><p>Sáp nhập để có quy mô.</p></div></div>`),

    S('Quỹ mở, quỹ đóng, ETF', `<div class="sd-tbl grid"><div class="head"><span></span><span>Quỹ mở</span><span>Quỹ đóng</span><span>ETF</span></div>
      <div><span>Số chứng chỉ</span><span>Thay đổi</span><span>Cố định</span><span>Thay đổi (qua AP)</span></div>
      <div><span>Mua bán</span><span>Với quỹ</span><span>Trên sàn</span><span>Trên sàn</span></div>
      <div><span>Giá</span><span>NAV cuối ngày</span><span>Premium / discount</span><span>Suốt phiên, sát NAV</span></div>
      <div><span>Lo rút vốn?</span><span>Có</span><span>Không</span><span>Không (rổ hoán đổi)</span></div></div>
      <div class="sd-f sm">NAV = (tài sản - nợ) / số chứng chỉ quỹ</div>
      <p class="sd-note">Load fund: phí khi mua hoặc khi rút. No-load: không có phí bán.</p>`),

    S('Các sản phẩm tập thể khác', `<div class="sd-cols3">
      <div class="sd-card"><b>SMA</b><p>Sở hữu <b>trực tiếp</b> chứng khoán.</p><p>Tùy biến, quản lý thuế.</p><small>Vốn tối thiểu lớn</small></div>
      <div class="sd-card acc"><b>Hedge fund</b><p>Nhà đầu tư đủ điều kiện, ít bị quản lý.</p><p>Đòn bẩy, bán khống, phí thành quả, lockup.</p></div>
      <div class="sd-card"><b>Buyout, VC</b><p>Mua công ty trưởng thành / đầu tư khởi nghiệp.</p><p>Kỳ hạn dài, kém thanh khoản, tham gia điều hành.</p></div></div>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>Đa dạng hóa: giảm rủi ro, không chống sập toàn thị trường</span><span>DR thấp = tốt; khủng hoảng đẩy DR lên</span>
      <span>Kế hoạch → thực hiện → phản hồi</span><span>Phân bổ tài sản thuộc thực hiện</span>
      <span>Ngân hàng, bảo hiểm: rủi ro thấp, thanh khoản cao</span><span>DC: nhân viên chịu rủi ro</span>
      <span>Bên mua quản lý tiền khách hàng</span><span>Quỹ đóng: premium/discount; ETF: sát NAV</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 10 câu, mục tiêu ≥ 7 câu đúng.</p>`),
  ];

  addDeck('PC-03', `Slide Portfolio Management Overview - bản thiết kế riêng (${slides.length} slide)`, slides);
}());
