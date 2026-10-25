// Bộ slide tự thiết kế cho CF-03 Corporate Governance: Conflicts, Mechanisms, Risks, and Benefits.
(function () {
  const L = window.LESSONS && window.LESSONS['CF-03'];
  if (!L) return;
  const { slide, addDeck } = window.CFAH;
  const K = 'CF-03 · Corporate Governance';
  const S = (title, body, opt = {}) => slide(title, body, Object.assign({ kicker: K }, opt));

  // Chuỗi ủy quyền hai tầng và bất cân xứng thông tin.
  const chain = `<svg viewBox="0 0 600 210" class="sv big" role="img" aria-label="Chuỗi ủy quyền cổ đông - HĐQT - ban điều hành">
    <rect x="20" y="40" width="160" height="70" rx="12" class="sv-panel"/><text x="100" y="82" class="sv-txt">Cổ đông</text>
    <rect x="220" y="40" width="160" height="70" rx="12" class="sv-panel"/><text x="300" y="82" class="sv-txt">HĐQT</text>
    <rect x="420" y="40" width="160" height="70" rx="12" class="sv-panel"/><text x="500" y="82" class="sv-txt">Ban điều hành</text>
    <line x1="182" y1="75" x2="218" y2="75" class="sv-up"/><line x1="382" y1="75" x2="418" y2="75" class="sv-up"/>
    <text x="100" y="30" class="sv-muted">principal</text><text x="300" y="30" class="sv-muted">agent / principal</text><text x="500" y="30" class="sv-muted">agent</text>
    <line x1="500" y1="140" x2="100" y2="140" class="sv-down"/>
    <text x="300" y="168" class="sv-t-down sv-txt">thông tin giảm dần theo chiều này</text>
    <text x="300" y="198" class="sv-muted">bất cân xứng thông tin → khó giám sát</text></svg>`;

  // Quyền biểu quyết so với vốn trong cấu trúc hai loại cổ phiếu.
  const dual = `<div class="sd-bars">
    <div class="sd-bar"><span class="sd-bar-l">Vốn của nhà sáng lập</span><span class="sd-bar-t"><i style="width:20%"></i></span><b>20,0%</b></div>
    <div class="sd-bar"><span class="sd-bar-l">Phiếu bầu của nhà sáng lập</span><span class="sd-bar-t"><i style="width:71.4%"></i></span><b>71,4%</b></div></div>`;

  // Bầu thẳng và bầu dồn phiếu: 1.000 cổ phiếu, 5 ghế, thiểu số 300.
  const voteSeats = (() => {
    const W = 600, H = 190;
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv" role="img" aria-label="Số ghế của thiểu số theo cách bầu">`;
    [['Bầu thẳng', 0, 40], ['Bầu dồn phiếu', 1, 120]].forEach(([lab, k, y]) => {
      s += `<text x="20" y="${y + 30}" class="sv-txt" text-anchor="start">${lab}</text>`;
      for (let i = 0; i < 5; i++) s += `<rect x="${220 + i * 74}" y="${y}" width="60" height="48" rx="8" class="${i < k ? 'sv-node down' : 'sv-node'}"/>`;
    });
    s += `<text x="404" y="30" class="sv-muted">5 ghế HĐQT · ô đỏ = ghế của nhóm 300 cổ phiếu</text>`;
    return `${s}</svg>`;
  })();

  const slides = [
    S('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Corporate Issuers · CF-03</div>
      <h2>Corporate Governance</h2>
      <p>Xung đột · Cơ chế · Rủi ro và lợi ích</p>
      <div class="sd-chips"><span>LOS 1 · Principal - agent</span><span>LOS 2 · Cơ chế quản trị</span><span>LOS 3 · Rủi ro và lợi ích</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Quản trị công ty là gì?', `<div class="sd-big">Điều hành + kiểm soát</div>
      <p class="sd-note">Hệ thống nguyên tắc, quy trình, cơ chế giúp <b>giảm chi phí xung đột</b> giữa các bên liên quan. Không xóa bỏ xung đột, chỉ quản lý nó.</p>`),

    S('Hai tầng ủy quyền', `${chain}
      <p class="sd-note">Xung đột cần <b>hai điều kiện</b>: lợi ích lệch nhau và bất cân xứng thông tin.</p>`),

    S('Chi phí đại diện', `<div class="sd-cols2">
      <div class="sd-card"><b>Trực tiếp</b><p>Tiền chi ra để giám sát</p><small>Kiểm toán độc lập, thù lao HĐQT độc lập, hệ thống báo cáo</small></div>
      <div class="sd-card acc"><b>Gián tiếp</b><p>Giá trị mất đi do quyết định kém</p><small>Bỏ lỡ dự án NPV dương, thâu tóm trả giá quá cao</small></div></div>`),

    S('Cổ đông và ban điều hành', `<div class="sd-grid4">
      <div class="sd-card"><b>Thiếu nỗ lực</b><p>Thưởng không gắn với kết quả</p></div>
      <div class="sd-card acc"><b>Empire building</b><p>Thâu tóm để công ty to hơn</p></div>
      <div class="sd-card"><b>Cố thủ</b><p>Chống thâu tóm, chọn an toàn để giữ ghế</p></div>
      <div class="sd-card"><b>Tư lợi</b><p>Đặc quyền, giao dịch với người nhà</p></div></div>
      <p class="sd-note">HĐQT cũng là agent: thiếu độc lập, CEO kiêm chủ tịch, ngồi chéo HĐQT.</p>`),

    S('Cổ đông kiểm soát và thiểu số', `<div class="sd-cols2 wide-left"><div>${dual}<p class="sd-cap">Nhà sáng lập: 20 triệu cổ phiếu B × 10 phiếu; công chúng: 80 triệu cổ phiếu A × 1 phiếu → 200 / 280 = 71,4%.</p></div>
      <div><div class="sd-rule down">Giao dịch bên liên quan chuyển giá trị ra ngoài</div><div class="sd-rule down">Cổ phiếu hai loại: kiểm soát vượt vốn góp</div></div></div>`),

    S('Cổ đông, chủ nợ và các bên khác', `<div class="sd-cols2">
      <div class="sd-card"><b>Cổ đông và chủ nợ</b><p>Rủi ro, đòn bẩy, cổ tức: hai bên muốn ngược nhau</p><small>Nợ dài hạn → xung đột lớn hơn</small></div>
      <div class="sd-card"><b>Bên liên quan khác</b><p>Khách hàng: an toàn sản phẩm</p><p>Nhà cung cấp: thời hạn thanh toán</p><p>Nhân viên: lương, an toàn</p><p>Chính phủ: thuế, tuân thủ</p></div></div>`),

    S('Cơ chế của cổ đông', `<div class="sd-grid4">
      <div class="sd-card"><b>Minh bạch</b><p>Báo cáo, công bố thông tin</p></div>
      <div class="sd-card"><b>Đại hội</b><p>AGM, EGM, bỏ phiếu ủy quyền</p></div>
      <div class="sd-card acc"><b>Activism, kiện tụng</b><p>Đề xuất nghị quyết, kiện phái sinh</p></div>
      <div class="sd-card"><b>Thâu tóm</b><p>Proxy contest, tender offer, hostile takeover</p></div></div>
      <p class="sd-note">Staggered board, poison pill: chống thâu tóm nhưng có thể giúp ban điều hành <b>cố thủ</b>.</p>`),

    S('Bầu thẳng và bầu dồn phiếu', `${voteSeats}
      <div class="sd-steps"><span>Thiểu số: 300 × 5 = <b>1.500</b> phiếu dồn cho 1 người</span><span>Đa số: 700 × 5 = 3.500 phiếu, không đủ 5 người trên 1.500</span><span>Số ghế = phần nguyên(300 × 6 / 1.000) = <b>1</b></span></div>`),

    S('Cơ chế của chủ nợ', `<div class="sd-cols2">
      <div class="sd-card"><b>Trước khó khăn</b><p>Indenture: quyền trái chủ</p><p>Covenant khẳng định và hạn chế</p><p>Tài sản bảo đảm</p></div>
      <div class="sd-card acc"><b>Khi khó khăn</b><p>Ủy ban <b>ad hoc</b>: đàm phán tái cấu trúc</p><p>Ủy ban <b>chủ nợ</b>: đại diện trong phá sản</p></div></div>`),

    S('Các ủy ban của HĐQT', `<div class="sd-tbl grid">
      <div class="head"><span>Ủy ban</span><span>Nhiệm vụ</span></div>
      <div><span>Kiểm toán</span><span>Báo cáo, kiểm soát nội bộ, kiểm toán viên</span></div>
      <div><span>Quản trị</span><span>Chính sách quản trị, đạo đức</span></div>
      <div><span>Nhân sự</span><span>Đề cử HĐQT, kế nhiệm</span></div>
      <div><span>Lương thưởng</span><span>Thù lao gắn lợi ích dài hạn</span></div>
      <div><span>Rủi ro, đầu tư</span><span>Tùy ngành</span></div></div>
      <p class="sd-note">Kiểm toán và lương thưởng: thành viên <b>độc lập</b>.</p>`),

    S('Nhân viên, đối tác và Nhà nước', `<div class="sd-cols3">
      <div class="sd-card"><b>Nhân viên</b><p>Luật lao động, công đoàn, hợp đồng, ESOP</p></div>
      <div class="sd-card"><b>Khách hàng, nhà cung cấp</b><p>Hợp đồng, giải quyết tranh chấp, mạng xã hội</p></div>
      <div class="sd-card acc"><b>Nhà nước</b><p>Luật, quy định; bộ quy tắc quản trị <b>comply or explain</b></p></div></div>`),

    S('Quản trị kém và quản trị tốt', `<div class="sd-cols2">
      <div><div class="sd-rule down">Kiểm soát yếu → gian lận</div><div class="sd-rule down">Quyết định kém, cố thủ</div><div class="sd-rule down">Rủi ro pháp lý, uy tín</div><div class="sd-rule down">Vỡ nợ, chi phí vốn cao</div></div>
      <div><div class="sd-rule up">Kiểm soát, báo cáo đáng tin</div><div class="sd-rule up">Hiệu quả hoạt động</div><div class="sd-rule up">Giảm rủi ro pháp lý, uy tín</div><div class="sd-rule up">Chi phí vốn thấp, định giá cao</div></div></div>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>Lợi ích lệch + bất cân xứng thông tin</span><span>Chi phí trực tiếp và gián tiếp</span>
      <span>Empire building, cố thủ, tư lợi</span><span>Bên liên quan, cổ phiếu hai loại</span>
      <span>Bầu dồn phiếu giúp thiểu số</span><span>Ad hoc trước, ủy ban chủ nợ khi phá sản</span>
      <span>Ủy ban kiểm toán cần độc lập</span><span>Comply or explain</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 10 câu, mục tiêu ≥ 7 câu đúng.</p>`),
  ];

  addDeck('CF-03', `Slide Corporate Governance - bản thiết kế riêng (${slides.length} slide)`, slides);
}());
