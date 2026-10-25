// Bộ slide tự thiết kế cho FI-17 Fixed-Income Securitization.
(function () {
  const L = window.LESSONS && window.LESSONS['FI-17'];
  if (!L) return;
  const { slide, addDeck } = window.CFAH;
  const K = 'FI-17 · Securitization';
  const S = (title, body, opt = {}) => slide(title, body, Object.assign({ kicker: K }, opt));
  const fmt = (x, d = 1) => x.toFixed(d).replace('.', ',');

  // Mũi tên đơn giản: đoạn thẳng + hai nét đầu mũi tên.
  function arrow(x1, y1, x2, y2, cls) {
    const a = Math.atan2(y2 - y1, x2 - x1), h = 10;
    const p = s => `${(x2 - h * Math.cos(a + s)).toFixed(1)},${(y2 - h * Math.sin(a + s)).toFixed(1)}`;
    return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="${cls}"/><polyline points="${p(0.5)} ${x2},${y2} ${p(-0.5)}" class="${cls}" fill="none"/>`;
  }
  const box = (x, y, w, h, label, sub, cls = '') => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" class="sv-node ${cls}"/><text x="${x + w / 2}" y="${y + (sub ? h / 2 - 4 : h / 2 + 6)}" class="sv-txt">${label}</text>${sub ? `<text x="${x + w / 2}" y="${y + h / 2 + 18}" class="sv-muted">${sub}</text>` : ''}`;

  // Sơ đồ giao dịch: người vay -> originator -> SPE -> nhà đầu tư; servicer, trustee.
  function flow() {
    let s = `<svg viewBox="0 0 600 300" class="sv" role="img" aria-label="Sơ đồ giao dịch chứng khoán hóa">`;
    s += box(10, 110, 110, 64, 'Người vay', '8.000 khoản');
    s += box(165, 110, 120, 64, 'Originator', 'Sao Mai');
    s += box(330, 110, 110, 64, 'SPE', 'Auto Trust', 'up');
    s += box(485, 110, 105, 64, 'Nhà đầu tư', 'mua ABS');
    s += box(165, 226, 120, 56, 'Servicer', 'thu nợ');
    s += box(330, 14, 110, 56, 'Trustee', 'giám sát');
    s += arrow(120, 130, 163, 130, 'sv-up') + arrow(285, 130, 328, 130, 'sv-pv') + arrow(440, 130, 483, 130, 'sv-pv');
    s += arrow(483, 156, 442, 156, 'sv-up') + arrow(328, 156, 287, 156, 'sv-up');
    s += arrow(65, 176, 165, 246, 'sv-dash') + arrow(285, 250, 380, 176, 'sv-dash');
    s += `<line x1="385" y1="70" x2="385" y2="108" class="sv-dash"/>`;
    s += `<text x="306" y="102" class="sv-muted">bán khoản vay</text><text x="462" y="102" class="sv-muted">ABS</text>`;
    s += `<text x="462" y="194" class="sv-muted">tiền mua</text><text x="306" y="194" class="sv-muted">tiền bán</text>`;
    s += `<text x="70" y="226" class="sv-muted" text-anchor="start">trả góp</text><text x="350" y="232" class="sv-muted" text-anchor="start">chuyển tiền thu</text>`;
    return `${s}</svg>`;
  }

  // Dòng tiền lãi một năm: 14,0 -> phí -> 12,8.
  const bar = (lab, v, max) => `<div class="sd-bar"><span class="sd-bar-l">${lab}</span><span class="sd-bar-t"><i style="width:${(v / max) * 100}%"></i></span><b>${fmt(v)}</b></div>`;

  const slides = [
    S('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Fixed Income · FI-17</div>
      <h2>Fixed-Income<br>Securitization</h2>
      <p>Biến khoản vay thành chứng khoán giao dịch được</p>
      <div class="sd-chips"><span>LOS 1 · Lợi ích</span><span>LOS 2 · Các bên và vai trò</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Hai cách làm ngân hàng', `<div class="sd-cols2">
      <div class="sd-card"><b>Cho vay rồi giữ</b><p>Khoản vay nằm trên bảng cân đối đến khi đáo hạn.</p><small>Vốn bị giam, rủi ro ở lại</small></div>
      <div class="sd-card acc"><b>Cho vay rồi chứng khoán hóa</b><p>Gom khoản vay, bán cho SPE, SPE phát hành ABS.</p><small>Vốn quay vòng, rủi ro chuyển đi</small></div></div>
      <p class="sd-note">Nhà đầu tư ABS có quyền với <b>dòng tiền danh mục</b>, không phải chủ nợ của ngân hàng.</p>`),

    S('Sơ đồ một giao dịch', `<div class="sd-cols2 wide-left"><div>${flow()}</div>
      <div><div class="sd-steps"><span>Khoản vay: trái → phải</span><span>Tiền mua: phải → trái</span><span>Trả góp → servicer → SPE</span></div><p class="sd-note">Trustee giám sát SPE thay mặt nhà đầu tư.</p></div></div>`),

    S('Năm bước', `<div class="sd-steps">
      <span>① Originator cho vay</span><span>② Gom và <b>bán thật</b> cho SPE</span><span>③ SPE phát hành ABS</span><span>④ Servicer thu nợ</span><span>⑤ Tiền chảy theo <b>waterfall</b></span></div>
      <p class="sd-note">Một danh mục, nhiều <b>tranche</b>: senior trả trước, subordinated chịu lỗ trước.</p>`),

    S('Ai làm gì?', `<div class="sd-tbl grid">
      <div class="head"><span>Bên</span><span>Vai trò</span></div>
      <div><span>Originator / seller</span><span>Khởi tạo, gom, bán danh mục</span></div>
      <div><span>SPE (issuer)</span><span>Mua danh mục, phát hành ABS</span></div>
      <div><span>Servicer</span><span>Thu nợ, xử lý quá hạn</span></div>
      <div><span>Trustee</span><span>Bảo vệ nhà đầu tư, giữ tài sản</span></div>
      <div><span>Underwriter</span><span>Thiết kế, bán ABS</span></div>
      <div><span>Rating agency</span><span>Xếp hạng từng tầng</span></div></div>`),

    S('SPE: bức tường cách ly phá sản', `<div class="sd-cols2">
      <div class="sd-card"><b>Bên khởi tạo phá sản</b><p>Chủ nợ của Sao Mai đòi tài sản của Sao Mai.</p><small>Khoản vay đã bán không còn là của Sao Mai</small></div>
      <div class="sd-card acc"><b>Nhà đầu tư ABS</b><p>Vẫn nhận dòng tiền từ người vay mua xe.</p><small>Chỉ lo chất lượng danh mục</small></div></div>
      <div class="sd-rule up">Điều kiện: true sale <b>quyền sở hữu chuyển hẳn sang SPE</b></div>`),

    S('Lợi ích cho bên khởi tạo', `<div class="sd-grid4">
      <div class="sd-card"><b>Giải phóng vốn</b><p>Vốn 8% × 200 = <b>16 triệu</b> không còn bị giữ.</p></div>
      <div class="sd-card"><b>Cho vay thêm</b><p>Tiền bán danh mục quay vòng thành khoản vay mới.</p></div>
      <div class="sd-card"><b>Vốn rẻ hơn</b><p>Tầng senior có thể AAA dù bên khởi tạo chỉ BBB.</p></div>
      <div class="sd-card"><b>Thu phí</b><p>Tiếp tục làm servicer, nhận phí.</p></div></div>`),

    S('Lợi ích cho nhà đầu tư', `<div class="sd-cols3">
      <div class="sd-card"><b>Tiếp cận tài sản</b><p>Vay mua xe, thẻ tín dụng, thế chấp nhà.</p></div>
      <div class="sd-card acc"><b>Rủi ro theo tầng</b><p>Chọn senior hay subordinated theo khẩu vị.</p></div>
      <div class="sd-card"><b>Thanh khoản, đa dạng</b><p>Chuẩn hóa, có xếp hạng; hàng nghìn người vay.</p></div></div>
      <div class="sd-rule down">Không bảo đảm hoàn vốn <b>vẫn còn rủi ro tín dụng và thanh khoản</b></div>`),

    S('Nền kinh tế và thị trường', `<div class="sd-steps">
      <span><b>Giảm trung gian</b>: nhà đầu tư nắm trực tiếp dòng tiền</span><span>Tín dụng sẵn có nhiều hơn, chi phí vay thấp hơn</span><span>Tài sản kém thanh khoản có giá thị trường</span><span>Rủi ro đến tay người chịu được</span></div>`),

    S('Mặt trái: bài học 2007-2009', `<div class="sd-cols2">
      <div class="sd-card"><b>Vấn đề</b><p>Cho vay để bán → thẩm định lỏng lẻo (moral hazard).</p><p>Cấu trúc phức tạp, tin quá vào xếp hạng.</p><small>Rủi ro hệ thống tăng</small></div>
      <div class="sd-card acc"><b>Phản ứng</b><p>Risk retention: bên khởi tạo giữ một phần rủi ro.</p><p>Công bố thông tin, giám sát xếp hạng.</p><small>"Skin in the game"</small></div></div>`),

    S('Ví dụ: tiền lãi đi đâu?', `<div class="sd-cols2"><div>
      <p class="sd-cap">Danh mục 200 triệu USD, lãi 7%, một năm (triệu USD)</p>
      ${bar('Lãi thu được', 14, 14)}${bar('Phí servicer 0,5%', 1, 14)}${bar('Trustee, khác 0,1%', 0.2, 14)}${bar('Cho nhà đầu tư', 12.8, 14)}</div>
      <div><div class="sd-big">14,0 - 1,0 - 0,2 = <b>12,8</b></div><p class="sd-note">Tương đương 6,4% dư nợ: thấp hơn lãi khoản vay vì phải trả công các bên vận hành.</p></div></div>`),

    S('Tổng kết: 6 điều mang vào phòng thi', `<div class="sd-check">
      <span>ABS trả bằng dòng tiền danh mục</span><span>SPE cách ly phá sản, cần true sale</span>
      <span>Servicer thu nợ; trustee bảo vệ nhà đầu tư</span><span>Originator: giải phóng vốn, cho vay thêm</span>
      <span>Nhà đầu tư: rủi ro - lợi suất theo tầng</span><span>Có thể tăng rủi ro hệ thống (2008)</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 8 câu.</p>`),
  ];

  addDeck('FI-17', 'Slide Securitization - bản thiết kế riêng (12 slide)', slides);
}());
