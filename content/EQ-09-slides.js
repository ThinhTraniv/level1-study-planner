// Bộ slide tự thiết kế cho EQ-09 Industry and Competitive Analysis.
(function () {
  const L = window.LESSONS && window.LESSONS['EQ-09'];
  if (!L) return;
  const { frac, slide, addDeck } = window.CFAH;
  const K = 'EQ-09 · Industry & Competitive Analysis';
  const S = (title, body, opt = {}) => slide(title, body, Object.assign({ kicker: K }, opt));
  const fmt = (x, d = 2) => x.toFixed(d).replace('.', ',');

  // Đường cong vòng đời ngành (logistic rồi giảm), chia 5 giai đoạn.
  function lifeCycle() {
    const W = 600, H = 300, l = 40, r = 580, t = 30, b = 240;
    const f = x => (1 / (1 + Math.exp(-(x - 3.2) * 1.6))) - (x > 7.5 ? 0.09 * (x - 7.5) ** 2 : 0);
    const X = x => l + (x / 10) * (r - l), Y = v => b - v * (b - t);
    const pts = [];
    for (let x = 0; x <= 10.0001; x += 0.1) pts.push(`${X(x).toFixed(1)},${Y(f(x)).toFixed(1)}`);
    const cuts = [1.8, 4.2, 5.6, 7.8];
    const names = [['Phôi thai', 0.9], ['Tăng trưởng', 3.0], ['Sàng lọc', 4.9], ['Bão hòa', 6.7], ['Suy thoái', 8.9]];
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv big" role="img" aria-label="Vòng đời ngành">`;
    s += `<line x1="${l}" y1="${b}" x2="${r}" y2="${b}" class="sv-axis"/><line x1="${l}" y1="${t}" x2="${l}" y2="${b}" class="sv-axis"/>`;
    cuts.forEach(c => { s += `<line x1="${X(c)}" y1="${t}" x2="${X(c)}" y2="${b}" class="sv-dash"/>`; });
    s += `<polyline points="${pts.join(' ')}" class="sv-curve"/>`;
    names.forEach(([n, x], i) => { s += `<text x="${X(x)}" y="${b + 28}" class="sv-muted ${i === 2 ? 'sv-t-down' : ''}">${n}</text>`; });
    s += `<text x="${l + 8}" y="${t + 4}" class="sv-muted" text-anchor="start">Cầu của ngành</text>`;
    s += `<text x="${X(4.9)}" y="${Y(0.86) - 8}" class="sv-txt sv-t-down">cạnh tranh gắt nhất</text>`;
    return `${s}</svg>`;
  }

  // Sơ đồ năm lực.
  function fiveForces() {
    const W = 600, H = 300;
    const box = (x, y, w, h, txt, sub, cls = 'sv-node') => `<rect x="${x - w / 2}" y="${y - h / 2}" width="${w}" height="${h}" rx="12" class="${cls}"/><text x="${x}" y="${y - (sub ? 4 : -6)}" class="sv-txt">${txt}</text>${sub ? `<text x="${x}" y="${y + 18}" class="sv-muted">${sub}</text>` : ''}`;
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv" role="img" aria-label="Năm lực của Porter">`;
    s += `<line x1="300" y1="150" x2="300" y2="48" class="sv-dash"/><line x1="300" y1="150" x2="300" y2="252" class="sv-dash"/><line x1="300" y1="150" x2="95" y2="150" class="sv-dash"/><line x1="300" y1="150" x2="505" y2="150" class="sv-dash"/>`;
    s += box(300, 40, 230, 56, 'Người gia nhập mới', 'rào cản gia nhập');
    s += box(300, 260, 230, 56, 'Sản phẩm thay thế', 'từ ngành khác');
    s += box(95, 150, 170, 60, 'Nhà cung cấp', 'quyền thương lượng');
    s += box(505, 150, 170, 60, 'Người mua', 'quyền thương lượng');
    s += box(300, 150, 190, 70, 'Cạnh tranh', 'nội ngành', 'sv-key');
    return `${s}</svg>`;
  }

  // Doanh thu ngành và đường GDP 5%/năm (ví dụ 4.1).
  function growthChart() {
    const W = 600, H = 280, l = 50, r = 580, t = 20, b = 230;
    const g = (168 / 120) ** (1 / 5) - 1;
    const years = [0, 1, 2, 3, 4, 5];
    const X = i => l + 30 + i * ((r - l - 60) / 5), Y = v => b - ((v - 100) / 80) * (b - t);
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv" role="img" aria-label="Tăng trưởng ngành so với GDP">`;
    [100, 140, 180].forEach(v => { s += `<line x1="${l}" y1="${Y(v)}" x2="${r}" y2="${Y(v)}" class="sv-grid"/><text x="${l - 8}" y="${Y(v) + 5}" class="sv-muted" text-anchor="end">${v}</text>`; });
    s += `<line x1="${l}" y1="${b}" x2="${r}" y2="${b}" class="sv-axis"/>`;
    years.forEach(i => {
      const v = 120 * (1 + g) ** i;
      s += `<rect x="${X(i) - 22}" y="${Y(v)}" width="44" height="${b - Y(v)}" class="sv-panel"/><text x="${X(i)}" y="${Y(v) - 8}" class="sv-muted">${fmt(v, 0)}</text><text x="${X(i)}" y="${b + 22}" class="sv-muted">${2020 + i}</text>`;
    });
    s += `<polyline points="${years.map(i => `${X(i).toFixed(1)},${Y(120 * 1.05 ** i).toFixed(1)}`).join(' ')}" class="sv-pv" fill="none"/>`;
    s += `<text x="${l + 10}" y="${t + 6}" class="sv-txt sv-t-pv" text-anchor="start">đường cam: nếu tăng như GDP 5%</text>`;
    return `${s}</svg>`;
  }

  const bars = (rows, max, d = 0) => `<div class="sd-bars">${rows.map(([lab, v]) => `<div class="sd-bar"><span class="sd-bar-l">${lab}</span><span class="sd-bar-t"><i style="width:${(v / max) * 100}%"></i></span><b>${d ? fmt(v, d) : v.toLocaleString('vi-VN')}</b></div>`).join('')}</div>`;

  const slides = [
    slide('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Equity Investments · EQ-09</div>
      <h2>Industry and<br>Competitive Analysis</h2>
      <p>Công ty kiếm tiền trong sân chơi nào, và sân chơi đó dễ hay khó?</p>
      <div class="sd-chips"><span>LOS 1 · Quy trình</span><span>LOS 2 · Phân loại ngành</span><span>LOS 3 · Quy mô, tăng trưởng, thị phần</span><span>LOS 4 · Five Forces, PESTLE</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Phân tích ngành để làm gì?', `<div class="sd-grid4">
      <div class="sd-card"><div class="sd-n">1</div><b>Hiểu doanh nghiệp</b><p>Cơ hội, cạnh tranh, rủi ro. Tín dụng: khả năng trả nợ.</p></div>
      <div class="sd-card acc"><div class="sd-n">2</div><b>Dự báo, định giá</b><p>Doanh thu = quy mô thị trường × thị phần.</p></div>
      <div class="sd-card"><div class="sd-n">3</div><b>Đầu tư chủ động</b><p>Overweight, underweight ngành; luân chuyển theo chu kỳ.</p></div>
      <div class="sd-card"><div class="sd-n">4</div><b>Phân bổ kết quả</b><p>Lợi suất từ chọn ngành và từ chọn cổ phiếu.</p></div></div>`),

    S('Quy trình năm bước', `<div class="sd-steps">
      <span>① Xác định ngành và nhóm so sánh</span>
      <span>② Khảo sát: quy mô, tăng trưởng, lợi nhuận, thị phần</span>
      <span>③ Cấu trúc ngành: Porter's Five Forces</span>
      <span>④ Tác động bên ngoài: PESTLE</span>
      <span>⑤ Vị thế cạnh tranh của công ty → con số dự báo</span></div>
      <p class="sd-note">① đến ④: phân tích <b>ngành</b>. ⑤: phân tích <b>cạnh tranh</b> (EQ-10).</p>`),

    S('Ba cách nhóm công ty', `<div class="sd-cols3">
      <div class="sd-card acc"><b>Sản phẩm, dịch vụ</b><p>Theo doanh thu chính.</p><p>GICS, ICB, ISIC, NACE, NAICS.</p><small>Tập đoàn đa ngành chỉ vào một nhóm</small></div>
      <div class="sd-card"><b>Chu kỳ kinh tế</b><p>Chu kỳ hay phòng thủ.</p><p>Dùng cho luân chuyển ngành.</p><small>Quá rộng, có tính tương đối</small></div>
      <div class="sd-card"><b>Thống kê</b><p>Tương quan lợi suất quá khứ.</p><p>Tương quan thấp giữa nhóm.</p><small>Không ổn định, có thể vô nghĩa kinh tế</small></div></div>`),

    S('Chu kỳ, phòng thủ, tăng trưởng', `<div class="sd-tbl grid"><div class="head"><span></span><span>Chu kỳ</span><span>Phòng thủ</span><span>Tăng trưởng</span></div>
      <div><span>Cầu</span><span>Co giãn mạnh</span><span>Ổn định</span><span>Tăng bất chấp chu kỳ</span></div>
      <div><span>Sản phẩm</span><span>Đắt, hoãn mua được</span><span>Thiết yếu</span><span>Mới, bùng nổ</span></div>
      <div><span>Ví dụ</span><span>Ô tô, nhà ở, vật liệu</span><span>Thực phẩm, y tế, điện</span><span>Một số mảng công nghệ</span></div></div>
      <p class="sd-note">Phòng thủ = <b>lợi nhuận</b> ít nhạy chu kỳ, không phải "giá cổ phiếu luôn tăng".</p>`),

    S('Phân loại thương mại và chính phủ', `<div class="sd-tbl grid"><div class="head"><span></span><span>Thương mại</span><span>Chính phủ</span></div>
      <div><span>Ví dụ</span><span>GICS, ICB</span><span>ISIC, NACE, NAICS</span></div>
      <div><span>Cập nhật</span><span>Thường xuyên</span><span>Khoảng 5 năm</span></div>
      <div><span>Công bố tên công ty</span><span>Có</span><span>Không</span></div>
      <div><span>Phân biệt quy mô</span><span>Có thể</span><span>Không</span></div></div>
      <div class="sd-keys"><span>Sector</span><span>Industry group</span><span>Industry</span><span>Sub-industry</span></div>
      <p class="sd-note">GICS: 11 sector, xếp chủ yếu theo nguồn <b>doanh thu</b>.</p>`),

    S('Xây dựng nhóm so sánh', `<div class="sd-check">
      <span>Bắt đầu từ cùng mã GICS, ICB</span><span>Xem đối thủ công ty tự nêu</span>
      <span>Đọc thuyết minh bộ phận</span><span>Cùng động lực cầu, chi phí</span>
      <span>Loại mô hình kinh doanh khác</span><span>Tham khảo nhóm của analyst khác</span></div>
      <p class="sd-note">62% thép, 25% khu công nghiệp, 13% nông nghiệp → xếp <b>Materials</b>, nhưng nên định giá <b>từng mảng</b>.</p>`),

    S('Quy mô và tăng trưởng', `<div class="sd-cols2 wide-left"><div>${growthChart()}</div>
      <div><div class="sd-f sm">CAGR = (${frac('168', '120')})<sup>1/5</sup> - 1 = <b>6,96%</b></div>
      <p>Nhanh hơn GDP danh nghĩa 5% → tỷ trọng ngành tăng.</p>
      <div class="sd-keys"><span>N = 5</span><span>PV = -120</span><span>FV = 168</span><span>CPT I/Y</span></div>
      <p class="sd-note">Bẫy: 40%/5 = 8% (bỏ qua lãi kép).</p></div></div>`),

    S('Vòng đời ngành', `<div class="sd-cols2 wide-left"><div>${lifeCycle()}</div>
      <div><div class="sd-rule up">Tăng trưởng: cầu tăng nhanh <b>cạnh tranh nhẹ</b></div>
      <div class="sd-rule down">Sàng lọc: dư công suất <b>giảm giá, phá sản</b></div>
      <div class="sd-rule">Bão hòa: hợp nhất <b>giá ổn định, dòng tiền mạnh</b></div>
      <p class="sd-note">Hạn chế: công nghệ, quy định, xã hội có thể rút ngắn hoặc bỏ qua giai đoạn.</p></div></div>`),

    S('Lợi nhuận ngành: ROIC so với WACC', `<div class="sd-cols2"><div>${bars([['ROIC ngành', 14], ['WACC', 9], ['Chênh lệch', 5]], 14)}</div>
      <div><div class="sd-f sm">EP = (ROIC - WACC) × vốn</div><p>(14% - 9%) × 500 = <b>25 nghìn tỷ</b></p>
      <div class="sd-rule down">Rào cản thấp → người mới vào <b>ROIC → WACC</b></div></div></div>
      <p class="sd-note">Xem cả biên lợi nhuận và cách lợi nhuận <b>phân bổ</b> giữa các công ty.</p>`),

    S('Thị phần và mức độ tập trung', `<div class="sd-cols2"><div><p class="sd-cap">Ngành X: 35, 25, 20, 10, 10</p>${bars([['35%', 1225], ['25%', 625], ['20%', 400], ['10%', 100], ['10%', 100]], 1225)}</div>
      <div><div class="sd-f sm">HHI = Σ s<sup>2</sup> = <b>2.450</b></div><p>CR4 = <b>90%</b> · tương đương 4,1 công ty</p>
      <p>Ngành Y: 10 × 10% → HHI <b>1.000</b>, CR4 40%</p><p class="sd-note">N công ty bằng nhau: HHI = 10.000/N.</p></div></div>`),

    S('Bốn yếu tố của sức mạnh định giá', `<div class="sd-grid4">
      <div class="sd-card acc"><b>Rào cản gia nhập cao</b><p>Lợi nhuận không bị bào mòn.</p><small>Khác rào cản thành công</small></div>
      <div class="sd-card"><b>Ngành tập trung</b><p>Ít công ty lớn, kỷ luật giá.</p><small>Không tuyệt đối</small></div>
      <div class="sd-card"><b>Công suất chật</b><p>Cầu vượt cung.</p><small>Dư công suất → giảm giá</small></div>
      <div class="sd-card"><b>Thị phần ổn định</b><p>Ít cạnh tranh.</p><small>Biến động → cạnh tranh mạnh</small></div></div>`),

    S('Porter\'s Five Forces', `<div class="sd-cols2 wide-left"><div>${fiveForces()}</div>
      <div><p>Lực càng mạnh → ngành giữ lại càng ít giá trị.</p><div class="sd-rule down">Năm lực mạnh <b>ROIC ≈ WACC</b></div><div class="sd-rule up">Năm lực yếu <b>ROIC &gt; WACC</b></div>
      <p class="sd-note">Hỏi: câu mô tả nói về <b>ai</b>? Lực đó mạnh lên hay yếu đi?</p></div></div>`),

    S('Lực nào mạnh khi nào?', `<div class="sd-tbl grid"><div class="head"><span>Lực</span><span>Mạnh (xấu cho ngành) khi</span></div>
      <div><span>Gia nhập</span><span>Quy mô nhỏ đủ sống, vốn thấp, không cần phép</span></div>
      <div><span>Nhà cung cấp</span><span>Ít, đầu vào độc đáo, chuyển đổi tốn kém</span></div>
      <div><span>Người mua</span><span>Ít, mua lớn, hàng đồng nhất, nhạy giá</span></div>
      <div><span>Thay thế</span><span>Ngành khác, giá và chất lượng hấp dẫn</span></div>
      <div><span>Cạnh tranh</span><span>Ngang sức, tăng chậm, chi phí cố định cao, rút lui khó</span></div></div>`),

    S('PESTLE: môi trường bên ngoài', `<div class="sd-cols3">
      <div class="sd-card"><b>Political</b><p>Thuế quan, trợ cấp, thuế tiêu thụ.</p></div>
      <div class="sd-card"><b>Economic</b><p>GDP, lãi suất, lạm phát, tỷ giá.</p></div>
      <div class="sd-card"><b>Social</b><p>Già hóa, đô thị hóa, lối sống.</p></div>
      <div class="sd-card"><b>Technological</b><p>Sản phẩm thay thế, tự động hóa.</p></div>
      <div class="sd-card"><b>Legal</b><p>Cạnh tranh, bằng sáng chế, cấp phép.</p></div>
      <div class="sd-card acc"><b>Environmental</b><p>Khí hậu, thuế carbon, phát thải.</p></div></div>
      <p class="sd-note">Nói rõ yếu tố ngoài tác động <b>qua lực nào</b> trong năm lực.</p>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>5 bước: ngành → cạnh tranh → con số</span><span>3 cách nhóm và hạn chế mỗi cách</span>
      <span>Chính phủ: không công bố tên, 5 năm</span><span>CAGR: căn bậc N</span>
      <span>Sàng lọc: cạnh tranh gắt nhất</span><span>HHI = Σ s<sup>2</sup>, tối đa 10.000</span>
      <span>Thay thế đến từ ngành khác</span><span>Rào cản rút lui cao → cạnh tranh mạnh</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 10 câu, mục tiêu ≥ 7 câu đúng.</p>`),
  ];

  addDeck('EQ-09', `Slide Industry & Competitive Analysis - bản thiết kế riêng (${slides.length} slide)`, slides);
}());
