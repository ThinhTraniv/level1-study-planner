// Bộ slide tự thiết kế cho FI-16 Credit Analysis for Corporate Issuers.
(function () {
  const L = window.LESSONS && window.LESSONS['FI-16'];
  if (!L) return;
  const { slide, addDeck } = window.CFAH;
  const K = 'FI-16 · Corporate Issuers';
  const S = (title, body, opt = {}) => slide(title, body, Object.assign({ kicker: K }, opt));

  const bars = (rows, max) => `<div class="sd-bars">${rows.map(([lab, v, note]) => `<div class="sd-bar"><span class="sd-bar-l">${lab}</span><span class="sd-bar-t"><i style="width:${(v / max) * 100}%"></i></span><b>${note}</b></div>`).join('')}</div>`;

  // Hàng chờ thứ tự ưu tiên.
  function ladder() {
    const rows = [['First lien', 'sv-node up'], ['Second lien', 'sv-node up'], ['Senior unsecured', 'sv-node'], ['Senior subordinated', 'sv-node'], ['Subordinated', 'sv-node'], ['Junior subordinated', 'sv-node down'], ['Cổ phiếu ưu đãi', 'sv-node down'], ['Cổ phiếu phổ thông', 'sv-node down']];
    const W = 600, H = 330, h = 34, g = 6, x = 150, w = 300;
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv" role="img" aria-label="Thứ tự ưu tiên khi phá sản">`;
    rows.forEach(([lab, cls], i) => {
      const y = 10 + i * (h + g);
      s += `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="8" class="${cls}"/><text x="${x + w / 2}" y="${y + 23}" class="sv-txt">${lab}</text>`;
    });
    s += `<line x1="100" y1="20" x2="100" y2="300" class="sv-axis"/><polygon points="92,290 108,290 100,306" class="sv-dot"/>`;
    s += `<text x="90" y="40" class="sv-txt sv-t-up" text-anchor="end">trả trước</text><text x="90" y="300" class="sv-txt sv-t-down" text-anchor="end">trả sau</text>`;
    s += `<text x="470" y="60" class="sv-muted" text-anchor="start">có bảo đảm</text><text x="470" y="160" class="sv-muted" text-anchor="start">không bảo đảm</text><text x="470" y="280" class="sv-muted" text-anchor="start">vốn chủ</text>`;
    return `${s}</svg>`;
  }

  // Cấu trúc công ty mẹ - công ty con.
  const holdco = `<svg viewBox="0 0 600 250" class="sv big" role="img" aria-label="Structural subordination">
    <rect x="200" y="15" width="200" height="60" rx="12" class="sv-node down"/><text x="300" y="42" class="sv-txt">Công ty mẹ</text><text x="300" y="64" class="sv-muted">trái phiếu "senior"</text>
    <rect x="60" y="160" width="200" height="60" rx="12" class="sv-node up"/><text x="160" y="187" class="sv-txt">Công ty con 1</text><text x="160" y="209" class="sv-muted">vay ngân hàng</text>
    <rect x="340" y="160" width="200" height="60" rx="12" class="sv-node up"/><text x="440" y="187" class="sv-txt">Công ty con 2</text><text x="440" y="209" class="sv-muted">tài sản, dòng tiền</text>
    <line x1="160" y1="155" x2="260" y2="80" class="sv-dash"/><line x1="440" y1="155" x2="340" y2="80" class="sv-dash"/>
    <text x="300" y="125" class="sv-muted">chỉ nhận phần còn lại (cổ tức)</text></svg>`;

  const slides = [
    S('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Fixed Income · FI-16</div>
      <h2>Credit Analysis for<br>Corporate Issuers</h2>
      <p>Có trả được không, và nếu không thì ai được trả trước</p>
      <div class="sd-chips"><span>LOS 1 · Định tính, định lượng</span><span>LOS 2 · Tỷ số tín dụng</span><span>LOS 3 · Seniority, notching</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Ba câu hỏi của chủ nợ', `<div class="sd-cols3">
      <div class="sd-card"><div class="sd-n">1</div><b>Có tạo đủ tiền không?</b><p>Định tính và tỷ số</p><small>→ POD</small></div>
      <div class="sd-card"><div class="sd-n">2</div><b>Đứng ở đâu trong hàng chờ?</b><p>Seniority, tài sản bảo đảm</p><small>→ LGD</small></div>
      <div class="sd-card acc"><div class="sd-n">3</div><b>Xếp hạng thế nào?</b><p>Issuer rating và notching</p><small>→ issue rating</small></div></div>`),

    S('4C và khung 2027', `<div class="sd-tbl grid"><div class="head"><span>4C truyền thống</span><span>Trong khung 2027</span></div>
      <div><span>Capacity (+ Character)</span><span>Định tính: mô hình, ngành, rủi ro, quản trị; tỷ số coverage</span></div>
      <div><span>Capital</span><span>Tỷ số đòn bẩy</span></div>
      <div><span>Collateral</span><span>Seniority, tài sản bảo đảm</span></div>
      <div><span>Covenants</span><span>Điều khoản bảo vệ chủ nợ (FI-01)</span></div></div>`),

    S('Bốn yếu tố định tính', `<div class="sd-grid4">
      <div class="sd-card"><b>Mô hình kinh doanh</b><p>Kiếm tiền thế nào, có bền vững không</p></div>
      <div class="sd-card"><b>Cạnh tranh ngành</b><p>Rào cản, sức mạnh mặc cả (Porter)</p></div>
      <div class="sd-card"><b>Rủi ro kinh doanh</b><p>Chu kỳ, doanh thu định kỳ, tập trung khách hàng</p></div>
      <div class="sd-card acc"><b>Quản trị</b><p>Ban lãnh đạo, kế toán thận trọng hay aggressive</p></div></div>
      <p class="sd-note">Chủ nợ chỉ nhận lãi và gốc: ưu tiên <b>ổn định</b> hơn tăng trưởng.</p>`),

    S('Ba nhóm tỷ số', `<div class="sd-cols3">
      <div class="sd-card"><b>Lợi nhuận</b><div class="sd-f sm">EBIT / doanh thu</div></div>
      <div class="sd-card"><b>Đòn bẩy</b><div class="sd-f sm">Debt / EBITDA</div><div class="sd-f sm">FFO / debt</div><div class="sd-f sm">Debt / capital</div></div>
      <div class="sd-card"><b>Coverage</b><div class="sd-f sm">EBIT / interest</div><div class="sd-f sm">EBITDA / interest</div></div></div>`),

    S('Chiều tốt xấu: bẫy hay gặp', `<div class="sd-cols2">
      <div><div class="sd-rule up">EBIT margin <b>cao là tốt</b></div><div class="sd-rule up">FFO / debt <b>cao là tốt</b></div><div class="sd-rule up">EBIT, EBITDA / interest <b>cao là tốt</b></div></div>
      <div><div class="sd-rule down">Debt / EBITDA <b>thấp là tốt</b></div><div class="sd-rule down">Net debt / EBITDA <b>thấp là tốt</b></div><div class="sd-rule down">Debt / capital <b>thấp là tốt</b></div></div></div>
      <p class="sd-note">So sánh với doanh nghiệp cùng ngành và với xu hướng của chính doanh nghiệp.</p>`),

    S('Ví dụ: công ty X và công ty Y', `<div class="sd-tbl grid"><div class="head"><span>Tỷ số</span><span>X</span><span>Y</span></div>
      <div><span>EBIT margin</span><span>15,0%</span><span>8,0%</span></div>
      <div><span>Debt / EBITDA</span><span>3,00x</span><span>5,00x</span></div>
      <div><span>Net debt / EBITDA</span><span>2,50x</span><span>4,72x</span></div>
      <div><span>FFO / debt</span><span>23,3%</span><span>12,9%</span></div>
      <div><span>Debt / capital</span><span>48,0%</span><span>60,0%</span></div>
      <div><span>EBIT / interest</span><span>5,00x</span><span>2,67x</span></div>
      <div><span>EBITDA / interest</span><span>6,67x</span><span>4,00x</span></div></div>`),

    S('X tốt hơn ở mọi chiều', `<div class="sd-cols2">
      <div><p class="sd-cap">Debt / EBITDA (thấp là tốt)</p>${bars([['X', 3.0, '3,00x'], ['Y', 5.0, '5,00x']], 5)}</div>
      <div><p class="sd-cap">EBIT / interest (cao là tốt)</p>${bars([['X', 5.0, '5,00x'], ['Y', 2.67, '2,67x']], 5)}</div></div>
      <p class="sd-note">X: FFO = 180 + 100 = 280 → FFO / debt = 280 / 1.200 = <b>23,3%</b>. Y mang đặc điểm doanh nghiệp high yield.</p>`),

    S('Hàng chờ khi phá sản', `<div class="sd-cols2 wide-left"><div>${ladder()}</div>
      <div><div class="sd-steps"><span><b>Absolute priority rule</b>: hạng trên trả đủ mới đến hạng dưới</span><span>Cùng hạng (pari passu): chia theo tỷ lệ</span></div>
      <p class="sd-note">Seniority cao → recovery cao → LGD thấp.</p></div></div>`),

    S('Ví dụ: chia 500 triệu', `<p class="sd-cap">Tài sản 500. Nợ: first lien 300, senior unsecured 400, subordinated 250. Tỷ lệ thu hồi:</p>
      ${bars([['First lien (300)', 100, '100%'], ['Senior unsecured (400)', 50, '50%'], ['Subordinated (250)', 0, '0%']], 100)}
      <p class="sd-note">Thực tế tái cơ cấu (Chapter 11) có thể lệch quy tắc: hạng dưới, cả cổ đông, đôi khi vẫn nhận một phần để đồng ý phương án.</p>`),

    S('Notching: từ issuer rating đến issue rating', `<div class="sd-tbl grid"><div class="head"><span>Issuer rating</span><span>Notching</span><span>Vì sao</span></div>
      <div><span>Investment grade</span><span>Ít (0 đến 1 bậc)</span><span>POD thấp, recovery ít ảnh hưởng EL</span></div>
      <div><span>High yield</span><span>Nhiều hơn (2 bậc trở lên)</span><span>POD cao, recovery quyết định EL</span></div></div>
      <div class="sd-cols2"><div class="sd-rule up">Secured → <b>nâng bậc</b></div><div class="sd-rule down">Subordinated → <b>hạ bậc</b></div></div>
      <p class="sd-note">CFR (issuer rating) gắn với nợ <b>senior unsecured</b>.</p>`),

    S('Structural subordination', `${holdco}
      <p class="sd-note">Chủ nợ công ty con được trả trước từ tài sản công ty con. Trái phiếu "senior" của công ty mẹ thực chất <b>đứng sau</b>, có thể bị hạ bậc.</p>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>4 yếu tố định tính</span><span>Kế toán aggressive = cảnh báo</span>
      <span>Debt/EBITDA, debt/capital: thấp là tốt</span><span>FFO/debt, coverage: cao là tốt</span>
      <span>First lien → ... → cổ phiếu phổ thông</span><span>Cùng công ty: cùng POD, khác LGD</span>
      <span>CFR = senior unsecured; HY notching nhiều hơn</span><span>Nợ công ty mẹ đứng sau công ty con</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 10 câu, rồi FI-17 Securitization.</p>`),
  ];

  addDeck('FI-16', 'Slide Corporate Issuers - bản thiết kế riêng (13 slide)', slides);
}());
