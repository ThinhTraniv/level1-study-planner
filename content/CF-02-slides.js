// Bộ slide tự thiết kế cho CF-02 Investors and Other Stakeholders.
(function () {
  const L = window.LESSONS && window.LESSONS['CF-02'];
  if (!L) return;
  const { slide, addDeck } = window.CFAH;
  const K = 'CF-02 · Investors and Stakeholders';
  const S = (title, body, opt = {}) => slide(title, body, Object.assign({ kicker: K }, opt));

  // Payoff của chủ nợ (D = 600) và cổ đông theo giá trị công ty.
  const payoff = (() => {
    const W = 600, H = 300, l = 60, r = 580, tp = 20, b = 250, vmax = 1200;
    const X = v => l + (v / vmax) * (r - l), Y = v => b - (v / vmax) * (b - tp);
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv" role="img" aria-label="Payoff của chủ nợ và cổ đông">`;
    [0, 600, 1200].forEach(v => { s += `<line x1="${l}" y1="${Y(v)}" x2="${r}" y2="${Y(v)}" class="sv-grid"/><text x="${l - 10}" y="${Y(v) + 5}" class="sv-muted" text-anchor="end">${v === 1200 ? '1.200' : v}</text>`; });
    [0, 400, 600, 800, 1200].forEach(v => { s += `<text x="${X(v)}" y="${b + 24}" class="sv-muted">${v === 1200 ? '1.200' : v}</text>`; });
    s += `<line x1="${l}" y1="${b}" x2="${r}" y2="${b}" class="sv-axis"/><line x1="${l}" y1="${tp}" x2="${l}" y2="${b}" class="sv-axis"/>`;
    s += `<polyline points="${X(0)},${Y(0)} ${X(600)},${Y(600)} ${X(1200)},${Y(600)}" class="sv-up" style="fill:none"/>`;
    s += `<polyline points="${X(0)},${Y(0) - 2} ${X(600)},${Y(0) - 2} ${X(1200)},${Y(600) + 4}" class="sv-down" style="fill:none"/>`;
    s += `<line x1="${X(600)}" y1="${tp}" x2="${X(600)}" y2="${b}" class="sv-dash"/>`;
    s += `<text x="${X(330)}" y="${Y(470)}" class="sv-txt sv-t-up">Chủ nợ</text><text x="${X(1080)}" y="${Y(300)}" class="sv-txt sv-t-down">Cổ đông</text>`;
    s += `<text x="${(l + r) / 2}" y="${H - 2}" class="sv-muted">Giá trị công ty khi nợ đáo hạn (nợ phải trả = 600)</text>`;
    return `${s}</svg>`;
  })();

  // So sánh dự án An toàn và Rủi ro: phần kỳ vọng của mỗi bên.
  const projBars = (() => {
    const rows = [['An toàn: chủ nợ', 600], ['An toàn: cổ đông', 200], ['Rủi ro: chủ nợ', 450], ['Rủi ro: cổ đông', 250]];
    return `<div class="sd-bars">${rows.map(([l, v]) => `<div class="sd-bar"><span class="sd-bar-l">${l}</span><span class="sd-bar-t"><i style="width:${(v / 600) * 100}%"></i></span><b>${v}</b></div>`).join('')}</div>`;
  })();

  // Bản đồ bên liên quan quanh công ty.
  const map = (() => {
    const g = [['Cổ đông', 300, 28], ['Chủ nợ', 510, 28], ['HĐQT', 90, 28], ['Ban điều hành', 90, 115], ['Nhân viên', 510, 115], ['Khách hàng', 140, 202], ['Nhà cung cấp', 460, 202], ['Chính phủ', 300, 202]];
    let s = '<svg viewBox="0 0 600 230" class="sv big" role="img" aria-label="Các bên liên quan của công ty">';
    g.forEach(([n, x, y]) => { s += `<line x1="300" y1="115" x2="${x}" y2="${y}" class="sv-dash"/>`; });
    s += '<circle cx="300" cy="115" r="42" class="sv-node"/><text x="300" y="121" class="sv-txt">Công ty</text>';
    g.forEach(([n, x, y], i) => { s += `<rect x="${x - 62}" y="${y - 18}" width="124" height="34" rx="10" class="sv-panel"/><text x="${x}" y="${y + 5}" class="sv-txt ${i < 2 ? 'sv-t-up' : ''}" style="font-size:15px">${n}</text>`; });
    return `${s}</svg>`;
  })();

  const slides = [
    S('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Corporate Issuers · CF-02</div>
      <h2>Investors and<br>Other Stakeholders</h2>
      <p>Ai đóng góp gì, đòi lại gì?</p>
      <div class="sd-chips"><span>LOS 1 · Chủ nợ và cổ đông</span><span>LOS 2 · Các bên liên quan</span><span>LOS 3 · Yếu tố ESG</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Hai người cấp vốn, hai hợp đồng khác nhau', `<div class="sd-cols2">
      <div class="sd-card"><b>Chủ nợ</b><p>Quyền đòi <b>theo hợp đồng</b>: lãi + gốc</p><p>Ưu tiên trước</p><p>Lợi nhuận <b>có trần</b></p><small>Rủi ro thấp → chi phí vốn thấp</small></div>
      <div class="sd-card acc"><b>Cổ đông</b><p>Quyền đòi <b>phần còn lại</b></p><p>Trả sau cùng</p><p>Lợi nhuận <b>không trần</b>, lỗ chặn ở 0</p><small>Rủi ro cao → chi phí vốn cao</small></div></div>`),

    S('Payoff: hình dạng quyết định động cơ', `<div class="sd-cols2 wide-left"><div>${payoff}</div>
      <div><div class="sd-rule up">Chủ nợ = min(V; 600)</div><div class="sd-rule down">Cổ đông = max(V - 600; 0)</div>
      <p class="sd-note">Payoff của cổ đông giống <b>quyền chọn mua</b> trên tài sản công ty, giá thực hiện = số nợ.</p></div></div>`),

    S('Ai nhận bao nhiêu?', `<div class="sd-tbl grid">
      <div class="head"><span>Giá trị công ty</span><span>400</span><span>600</span><span>800</span><span>1.200</span></div>
      <div><span>Chủ nợ</span><span>400</span><span>600</span><span>600</span><span>600</span></div>
      <div><span>Cổ đông</span><span>0</span><span>0</span><span>200</span><span>600</span></div></div>
      <p class="sd-note">Công ty tốt lên: cổ đông hưởng hết phần tăng. Công ty gặp khó: chủ nợ chịu lỗ (mất 33% khi V = 400).</p>`),

    S('Động cơ của mỗi bên', `<div class="sd-cols2">
      <div class="sd-card"><b>Chủ nợ muốn</b><p>Dòng tiền ổn định</p><p>Đòn bẩy thấp, tài sản bảo đảm</p><p>Ít cổ tức, ít nợ mới</p></div>
      <div class="sd-card acc"><b>Cổ đông muốn</b><p>Tăng trưởng, giá cổ phiếu</p><p>Chấp nhận rủi ro cao hơn</p><p>Nhiều đòn bẩy, nhiều cổ tức</p></div></div>
      <p class="sd-note">Chủ nợ tư (ngân hàng) có nhiều thông tin, giám sát sát hơn trái chủ niêm yết phân tán.</p>`),

    S('Dự án rủi ro: phá giá trị nhưng cổ đông vẫn thích', `<div class="sd-cols2 wide-left"><div>${projBars}<p class="sd-cap">Nợ 600. An toàn: V = 800. Rủi ro: V = 300 hoặc 1.100 (50/50), kỳ vọng 700.</p></div>
      <div><div class="sd-steps"><span>Giá trị công ty: 800 → 700 (<b>-100</b>)</span><span>Cổ đông: 200 → 250 (<b>+50</b>)</span><span>Chủ nợ: 600 → 450 (<b>-150</b>)</span></div></div></div>`),

    S('Các nhóm bên liên quan', `${map}<p class="sd-note">Người cấp vốn (xanh) · nội bộ: HĐQT, ban điều hành, nhân viên · bên ngoài: khách hàng, nhà cung cấp, chính phủ.</p>`),

    S('Mỗi nhóm muốn gì?', `<div class="sd-tbl grid">
      <div class="head"><span>Nhóm</span><span>Lợi ích chính</span></div>
      <div><span>HĐQT</span><span>Giám sát hiệu quả, bảo vệ cổ đông</span></div>
      <div><span>Ban điều hành</span><span>Thù lao, quyền lực, an toàn công việc</span></div>
      <div><span>Nhân viên</span><span>Lương, việc làm ổn định, phát triển</span></div>
      <div><span>Khách hàng</span><span>Chất lượng, an toàn, giá hợp lý</span></div>
      <div><span>Nhà cung cấp</span><span>Thanh toán đúng hạn, quan hệ lâu dài</span></div>
      <div><span>Chính phủ</span><span>Thuế, việc làm, tuân thủ</span></div></div>`),

    S('Công ty phục vụ ai?', `<div class="sd-cols2">
      <div class="sd-card"><div class="sd-n">1</div><b>Shareholder theory</b><p>Tối đa hóa giá trị cổ đông</p><small>Các bên khác được bảo vệ bằng hợp đồng và luật</small></div>
      <div class="sd-card acc"><div class="sd-n">2</div><b>Stakeholder theory</b><p>Cân bằng lợi ích mọi bên liên quan</p><small>Nhân viên, khách hàng, cộng đồng...</small></div></div>
      <p class="sd-note">Dài hạn hai quan điểm thường gặp nhau; xung đột thường xuất hiện trong <b>ngắn hạn</b>.</p>`),

    S('ESG: ba nhóm yếu tố', `<div class="sd-cols3">
      <div class="sd-card"><b>E · Môi trường</b><p>Phát thải, ô nhiễm, nước, chất thải, tài nguyên</p></div>
      <div class="sd-card"><b>S · Xã hội</b><p>Nhân viên, an toàn sản phẩm, dữ liệu khách hàng, chuỗi cung ứng, cộng đồng</p></div>
      <div class="sd-card"><b>G · Quản trị</b><p>HĐQT độc lập, thù lao, quyền cổ đông, kiểm toán, đạo đức</p></div></div>
      <p class="sd-note">ESG tác động đến <b>dòng tiền</b> (phạt, bồi thường) và <b>chi phí vốn</b> (rủi ro cao → lợi suất yêu cầu cao).</p>`),

    S('Ba loại rủi ro môi trường', `<div class="sd-cols3">
      <div class="sd-card"><div class="sd-n">1</div><b>Vật lý</b><p>Bão, lũ, hạn hán phá hủy tài sản</p></div>
      <div class="sd-card acc"><div class="sd-n">2</div><b>Chuyển đổi</b><p>Thuế carbon, công nghệ mới, người tiêu dùng đổi thói quen</p></div>
      <div class="sd-card"><div class="sd-n">3</div><b>Tài sản mắc kẹt</b><p>Mỏ than, nhà máy mất giá trị trước hạn</p></div></div>`),

    S('Trọng yếu: khác nhau theo ngành', `<div class="sd-tbl grid">
      <div class="head"><span>Ngành</span><span>Yếu tố trọng yếu</span></div>
      <div><span>Dầu khí, điện than</span><span>Phát thải, rủi ro chuyển đổi</span></div>
      <div><span>Ngân hàng</span><span>Bảo mật dữ liệu, quản trị rủi ro</span></div>
      <div><span>Dệt may</span><span>Lao động chuỗi cung ứng, nước</span></div>
      <div><span>Dược phẩm</span><span>An toàn sản phẩm, giá thuốc</span></div>
      <div><span>Công nghệ</span><span>Quyền riêng tư, nhân tài</span></div></div>
      <p class="sd-note">Chủ nợ chủ yếu lo <b>rủi ro giảm</b>; cổ đông xem cả rủi ro lẫn cơ hội.</p>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>Chủ nợ: hợp đồng, ưu tiên, có trần</span><span>Cổ đông: phần còn lại, không trần</span>
      <span>Cổ đông hấp thụ biến động giá trị</span><span>Cổ đông có thể thích rủi ro phá giá trị</span>
      <span>Cổ tức lớn, nợ mới: hại chủ nợ cũ</span><span>8 nhóm bên liên quan</span>
      <span>Vật lý, chuyển đổi, tài sản mắc kẹt</span><span>Trọng yếu phụ thuộc ngành</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 10 câu, mục tiêu ≥ 7 câu đúng.</p>`),
  ];

  addDeck('CF-02', `Slide Investors and Stakeholders - bản thiết kế riêng (${slides.length} slide)`, slides);
}());
