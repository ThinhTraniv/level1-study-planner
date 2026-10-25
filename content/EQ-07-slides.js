// Bộ slide tự thiết kế cho EQ-07 Relative Value Equity Valuation Approaches.
(function () {
  const L = window.LESSONS && window.LESSONS['EQ-07'];
  if (!L) return;
  const { frac, slide, addDeck } = window.CFAH;
  const K = 'EQ-07 · Relative Value Approaches';
  const S = (title, body, opt = {}) => slide(title, body, Object.assign({ kicker: K }, opt));
  const fmt = (x, d = 2) => x.toFixed(d).replace('.', ',');

  // P/E hợp lý leading theo g (chi trả 40%, r = 11%).
  const peCurve = (() => {
    const p = 0.4, r = 0.11;
    const W = 600, H = 300, l = 60, rr = 580, tp = 20, b = 250, glo = 0, ghi = 9, vmax = 25;
    const X = g => l + ((g - glo) / (ghi - glo)) * (rr - l), Y = v => b - (Math.min(v, vmax) / vmax) * (b - tp);
    let pts = '';
    for (let g = glo; g <= ghi + 1e-9; g += 0.05) pts += `${X(g).toFixed(1)},${Y(p / (r - g / 100)).toFixed(1)} `;
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv" role="img" aria-label="P/E hợp lý tăng nhanh khi g tiến gần r">`;
    s += `<line x1="${l}" y1="${b}" x2="${rr}" y2="${b}" class="sv-axis"/><line x1="${l}" y1="${tp}" x2="${l}" y2="${b}" class="sv-axis"/>`;
    [0, 5, 10, 15, 20, 25].forEach(v => { s += `<line x1="${l}" y1="${Y(v)}" x2="${rr}" y2="${Y(v)}" class="sv-grid"/><text x="${l - 10}" y="${Y(v) + 5}" class="sv-muted" text-anchor="end">${v}</text>`; });
    [0, 3, 6, 9].forEach(g => { s += `<text x="${X(g)}" y="${b + 24}" class="sv-muted">${g}%</text>`; });
    s += `<polyline points="${pts}" class="sv-curve"/>`;
    [[3, 'up'], [6, 'pv'], [8, 'down']].forEach(([g]) => { const v = p / (r - g / 100); s += `<circle cx="${X(g)}" cy="${Y(v)}" r="6" class="sv-dot"/><text x="${X(g) - 10}" y="${Y(v) - 10}" class="sv-txt" text-anchor="end">${fmt(v, 1)}</text>`; });
    s += `<text x="${(l + rr) / 2}" y="${H - 2}" class="sv-muted">Tăng trưởng g (chi trả 40%, r = 11%)</text>`;
    return `${s}</svg>`;
  })();

  // P/E của nhóm so sánh với trung vị và trung bình.
  const peerChart = (() => {
    const peers = [['A', 14], ['B', 16], ['C', 18], ['D', 15], ['E', 40]];
    const med = 16, mean = 20.6;
    const W = 600, H = 260, l = 50, b = 220, tp = 20, vmax = 45;
    const Y = v => b - (v / vmax) * (b - tp), bw = 70, gap = 30;
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv" role="img" aria-label="P/E của nhóm so sánh">`;
    s += `<line x1="${l}" y1="${b}" x2="${W - 20}" y2="${b}" class="sv-axis"/>`;
    peers.forEach(([n, v], i) => {
      const x = l + 20 + i * (bw + gap);
      s += `<rect x="${x}" y="${Y(v)}" width="${bw}" height="${b - Y(v)}" rx="4" class="sv-panel"/><text x="${x + bw / 2}" y="${Y(v) - 8}" class="sv-txt ${v > 30 ? 'sv-t-down' : ''}">${v}</text><text x="${x + bw / 2}" y="${b + 24}" class="sv-muted">${n}</text>`;
    });
    s += `<line x1="${l}" y1="${Y(med)}" x2="${W - 20}" y2="${Y(med)}" class="sv-up"/><text x="${W - 22}" y="${Y(med) + 20}" class="sv-txt sv-t-up" text-anchor="end">trung vị 16</text>`;
    s += `<line x1="${l}" y1="${Y(mean)}" x2="${W - 20}" y2="${Y(mean)}" class="sv-dash"/><text x="${W - 22}" y="${Y(mean) - 8}" class="sv-txt" text-anchor="end">trung bình 20,6</text>`;
    return `${s}</svg>`;
  })();

  // EPS của công ty thép qua 5 năm.
  const epsBars = (() => {
    const eps = [3.0, 4.5, 1.0, -0.5, 2.5], avg = 2.1;
    const W = 600, H = 250, l = 50, z = 170, sc = 30, bw = 70, gap = 30;
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv" role="img" aria-label="EPS công ty chu kỳ qua 5 năm">`;
    s += `<line x1="${l}" y1="${z}" x2="${W - 20}" y2="${z}" class="sv-axis"/>`;
    eps.forEach((v, i) => {
      const x = l + 20 + i * (bw + gap), h = Math.abs(v) * sc;
      s += `<rect x="${x}" y="${v >= 0 ? z - h : z}" width="${bw}" height="${h}" rx="4" class="sv-panel"/>`;
      s += `<text x="${x + bw / 2}" y="${v >= 0 ? z - h - 8 : z + h + 20}" class="sv-txt ${v < 0 ? 'sv-t-down' : ''}">${fmt(v)}</text><text x="${x + bw / 2}" y="${H - 8}" class="sv-muted">Năm ${i + 1}</text>`;
    });
    s += `<line x1="${l}" y1="${z - avg * sc}" x2="${W - 20}" y2="${z - avg * sc}" class="sv-dash"/><text x="${l + 4}" y="${z - avg * sc - 8}" class="sv-txt sv-t-pv" text-anchor="start">bình quân 2,10</text>`;
    return `${s}</svg>`;
  })();

  const slides = [
    S('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Equity Investments · EQ-07</div>
      <h2>Relative Value Equity<br>Valuation Approaches</h2>
      <p>"Căn bên cạnh bán bao nhiêu một mét vuông?"</p>
      <div class="sd-chips"><span>LOS 1 · Comparables vs fundamentals</span><span>LOS 2 · Bội số giá và EV</span><span>LOS 3 · Nhóm so sánh</span><span>LOS 4 · Quá khứ vs dự phóng</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Bội số = giá / chỉ tiêu cơ bản', `<div class="sd-cols2">
      <div class="sd-card"><b>Bội số giá</b><p>Tử số: giá cổ phiếu</p><p>P/E · P/B · P/S · P/CF</p><small>Mẫu số thuộc về cổ đông</small></div>
      <div class="sd-card acc"><b>Bội số EV</b><p>Tử số: giá trị doanh nghiệp</p><p>EV/EBITDA · EV/EBIT · EV/Sales</p><small>Mẫu số trước lãi vay</small></div></div>
      <p class="sd-note">Bội số chuẩn hóa giá → so sánh được công ty khác quy mô.</p>`),

    S('Hai phương pháp', `<div class="sd-cols2">
      <div class="sd-card"><b>Method of comparables</b><p>Luật một giá: tương tự → giá tương tự</p><p>Chuẩn: nhóm cùng ngành, chỉ số, lịch sử</p><p>Kết luận: đắt/rẻ <b>tương đối</b></p></div>
      <div class="sd-card acc"><b>Forecasted fundamentals</b><p>Bội số hợp lý từ DCF</p><p>Chuẩn: chính công ty, theo g, r, chi trả</p><p>Kết luận: so với giá trị <b>nội tại</b></p></div></div>`),

    S('Quy trình so sánh 4 bước', `<div class="sd-steps">
      <span>① Chọn bội số hợp với loại công ty</span><span>② Chọn nhóm so sánh, tính chuẩn (trung vị)</span>
      <span>③ So bội số mục tiêu với chuẩn</span><span>④ <b>Giải thích chênh lệch</b> bằng tăng trưởng, rủi ro, ROE</span></div>
      <div class="sd-rule down">P/E thấp hơn ngành <b>chưa chắc rẻ</b></div>`),

    S('P/E trailing và forward', `<div class="sd-cols2">
      <div><div class="sd-f">Trailing = 48 / 4,00 = <b>12,0</b></div><div class="sd-f">Forward = 48 / 4,80 = <b>10,0</b></div></div>
      <div><div class="sd-rule">Trailing: EPS 12 tháng qua <b>khách quan</b></div><div class="sd-rule up">Forward: EPS dự báo <b>gắn với giá trị</b></div>
      <p class="sd-note">So sánh giữa các công ty: <b>cùng một loại</b> P/E.</p></div></div>`),

    S('Khi EPS có vấn đề', `<div class="sd-grid4">
      <div class="sd-card"><b>Khoản bất thường</b><p>Dùng EPS cốt lõi (underlying)</p></div>
      <div class="sd-card"><b>Công ty chu kỳ</b><p>Dùng EPS chuẩn hóa</p></div>
      <div class="sd-card"><b>EPS âm</b><p>Dùng E/P: -2 / 50 = -4%</p></div>
      <div class="sd-card"><b>Kế toán khác nhau</b><p>Điều chỉnh trước khi so</p></div></div>`),

    S('P/E hợp lý từ Gordon', `<div class="sd-cols2">
      <div><div class="sd-f">${frac('P<sub>0</sub>', 'E<sub>1</sub>')} = ${frac('D<sub>1</sub>/E<sub>1</sub>', 'r - g')}</div><div class="sd-f">${frac('P<sub>0</sub>', 'E<sub>0</sub>')} = ${frac('(D<sub>0</sub>/E<sub>0</sub>)(1 + g)', 'r - g')}</div></div>
      <div class="sd-card acc"><b>Chi trả 40%, r = 11%, g = 6%</b><p>Leading = 0,40 / 5% = <b>8,0</b></p><p>Trailing = 8,0 × 1,06 = <b>8,48</b></p><p>Giao dịch ở 10 → có vẻ <b>đắt</b>, hoặc thị trường kỳ vọng g = 7%</p></div></div>`),

    S('P/E hợp lý rất nhạy với g', `<div class="sd-cols2 wide-left"><div>${peCurve}</div>
      <div><div class="sd-rule up">g ↑ → P/E ↑</div><div class="sd-rule down">r ↑ → P/E ↓</div><div class="sd-rule">Chi trả ↑ (g giữ nguyên) → P/E ↑</div>
      <p class="sd-note">Từ g = 6% lên 8%: P/E hợp lý từ 8,0 lên 13,3.</p></div></div>`),

    S('P/B, P/S, P/CF', `<div class="sd-tbl grid"><div class="head"><span>Bội số</span><span>Hợp khi</span><span>Hạn chế</span></div>
      <div><span>P/B = 30/20 = 1,5</span><span>Ngân hàng, EPS âm</span><span>Thiếu tài sản vô hình</span></div>
      <div><span>P/S = 30/60 = 0,5</span><span>Đang lỗ, chu kỳ</span><span>Bỏ qua biên lợi nhuận</span></div>
      <div><span>P/CF = 30/5 = 6,0</span><span>Lợi nhuận bị "làm đẹp"</span><span>Nhiều định nghĩa CF</span></div></div>`),

    S('P/B và P/S hợp lý', `<div class="sd-cols2">
      <div><div class="sd-f">P/B = ${frac('ROE - g', 'r - g')}</div><p class="sd-note">ROE 14%, g 5%, r 10% → <b>1,8</b>. Giao dịch 1,5 → có vẻ <b>rẻ</b>.</p></div>
      <div><div class="sd-f">P/S = ${frac('Biên LN × Chi trả', 'r - g')}</div><p class="sd-note">8% × 40% / 5% = <b>0,64</b>. Biên lợi nhuận cao → P/S hợp lý cao.</p></div></div>
      <div class="sd-rule up">ROE &gt; r → P/B hợp lý &gt; 1 · ROE = r → P/B = 1</div>`),

    S('EV/EBITDA: tử và mẫu nhất quán', `<div class="sd-cols2">
      <div><div class="sd-rule up">EV ↔ EBITDA, EBIT, Sales <b>Đúng</b></div><div class="sd-rule up">Giá ↔ EPS, BVPS <b>Đúng</b></div><div class="sd-rule down">EV ↔ EPS, giá ↔ EBITDA <b>Sai</b></div></div>
      <div class="sd-card acc"><b>Vì sao dùng?</b><p>Khác đòn bẩy, khác khấu hao vẫn so được</p><p>Ngành thâm dụng vốn</p><small>Nhược: bỏ qua capex và vốn lưu động</small></div></div>`),

    S('Từ EV/EBITDA nhóm về giá: Đông Á', `<div class="sd-steps">
      <span>① EV Đông Á = 2.000 + 800 - 300 = 2.500 → EV/EBITDA = <b>6,25</b></span>
      <span>② EV suy ra = 7,0 (trung vị nhóm) × 400 = 2.800</span>
      <span>③ Vốn chủ = 2.800 - 800 nợ + 300 tiền = 2.300</span>
      <span>④ Mỗi cổ phiếu = 2.300 / 100 = <b>23,0</b> so với giá 20</span></div>
      <div class="sd-rule down">Bẫy: 2.800 / 100 = 28 <b>quên trừ nợ ròng</b></div>`),

    S('Chọn nhóm so sánh', `<div class="sd-cols2">
      <div class="sd-card"><b>Theo phân ngành</b><p>GICS, ICB: cùng ngành, phân ngành hẹp</p><small>Nhanh, khách quan · nhưng cùng mã ngành chưa chắc cùng mô hình</small></div>
      <div class="sd-card acc"><b>Theo yếu tố quyết định lợi suất</b><p>Tăng trưởng · rủi ro · ROE, biên lợi nhuận</p><small>Quy mô, quốc gia, giai đoạn vòng đời</small></div></div>`),

    S('Trung vị hay trung bình?', `<div class="sd-cols2 wide-left"><div>${peerChart}</div>
      <div><div class="sd-rule up">Trung vị: 16 × 3,50 = <b>56,00</b></div><div class="sd-rule down">Trung bình: 20,6 × 3,50 = <b>72,10</b></div>
      <p class="sd-note">Một ngoại lai (E = 40) kéo trung bình lên → dùng <b>trung vị</b>.</p></div></div>`),

    S('Quá khứ, hiện tại, dự phóng', `<div class="sd-tbl grid"><div class="head"><span>Mẫu số</span><span>Hợp khi</span></div>
      <div><span>Trailing (LTM)</span><span>Công ty ổn định, cần số đã kiểm toán</span></div>
      <div><span>Hiện tại</span><span>Chỉ tiêu bảng cân đối (P/B)</span></div>
      <div><span>Forward</span><span>Tăng trưởng nhanh, đang thay đổi</span></div>
      <div><span>Chuẩn hóa</span><span>Công ty chu kỳ, năm bất thường</span></div></div>
      <p class="sd-note">Nhất quán thời điểm và nguồn dự báo giữa mục tiêu và nhóm.</p>`),

    S('Công ty chu kỳ: P/E đánh lừa', `<div class="sd-cols2 wide-left"><div>${epsBars}</div>
      <div><div class="sd-rule">Trailing: 40 / 2,50 = <b>16,0</b></div><div class="sd-rule up">Chuẩn hóa: 40 / 2,10 = <b>19,05</b></div>
      <p class="sd-note">Đỉnh chu kỳ: EPS cao → P/E <b>thấp</b> giả tạo. Đáy: P/E cao.</p></div></div>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>Comparables: tương đối · fundamentals: nội tại</span><span>P/E leading = chi trả / (r - g)</span>
      <span>Trailing × (1 + g)</span><span>P/B = (ROE - g)/(r - g)</span>
      <span>EV đi với EBITDA, EBIT, Sales</span><span>EV suy ra: trừ nợ, cộng tiền</span>
      <span>Chuẩn nhóm = trung vị</span><span>Chu kỳ → EPS chuẩn hóa</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 10 câu, mục tiêu ≥ 7 câu đúng.</p>`),
  ];

  addDeck('EQ-07', `Slide Relative Valuation - bản thiết kế riêng (${slides.length} slide)`, slides);
}());
