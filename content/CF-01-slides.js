// Bộ slide tự thiết kế cho CF-01 Organizational Forms, Corporate Issuer Features, and Ownership.
(function () {
  const L = window.LESSONS && window.LESSONS['CF-01'];
  if (!L) return;
  const { slide, addDeck } = window.CFAH;
  const K = 'CF-01 · Organizational Forms';
  const S = (title, body, opt = {}) => slide(title, body, Object.assign({ kicker: K }, opt));

  // Hành trình của một doanh nghiệp: từ một chủ đến công ty.
  const journey = (() => {
    const st = [['Một chủ', 'vô hạn'], ['Hợp danh', 'vô hạn'], ['Hợp danh HH', 'LP hữu hạn'], ['Công ty', 'hữu hạn']];
    let s = '<svg viewBox="0 0 600 200" class="sv big" role="img" aria-label="Các hình thức tổ chức theo quy mô vốn">';
    s += '<line x1="40" y1="170" x2="570" y2="170" class="sv-axis"/><text x="570" y="192" class="sv-muted" text-anchor="end">quy mô vốn và số chủ sở hữu tăng dần</text>';
    st.forEach(([n, l], i) => {
      const x = 95 + i * 137, h = 40 + i * 25;
      s += `<rect x="${x - 55}" y="${160 - h}" width="110" height="${h}" rx="10" class="sv-panel"/>`;
      s += `<text x="${x}" y="${160 - h - 26}" class="sv-txt">${n}</text><text x="${x}" y="${160 - h - 8}" class="sv-muted ${i === 3 ? 'sv-t-up' : i < 2 ? 'sv-t-down' : ''}" style="font-size:13px">${l}</text>`;
    });
    return `${s}</svg>`;
  })();

  // Chuỗi quyền lực trong công ty.
  const chain = `<svg viewBox="0 0 600 170" class="sv big" role="img" aria-label="Cổ đông bầu hội đồng quản trị, hội đồng quản trị thuê ban điều hành">
    <rect x="20" y="50" width="160" height="70" rx="12" class="sv-panel"/><text x="100" y="92" class="sv-txt">Cổ đông</text>
    <rect x="220" y="50" width="160" height="70" rx="12" class="sv-panel"/><text x="300" y="92" class="sv-txt">HĐQT</text>
    <rect x="420" y="50" width="160" height="70" rx="12" class="sv-panel"/><text x="500" y="92" class="sv-txt">Ban điều hành</text>
    <line x1="182" y1="85" x2="218" y2="85" class="sv-up"/><line x1="382" y1="85" x2="418" y2="85" class="sv-up"/>
    <text x="200" y="40" class="sv-muted">bầu</text><text x="400" y="40" class="sv-muted">thuê, giám sát</text>
    <text x="300" y="155" class="sv-t-down sv-txt">tách sở hữu và điều hành → xung đột đại diện (CF-03)</text></svg>`;

  // Thác thuế hai lần: 100 → 75 → 60.
  const taxBars = (() => {
    const rows = [['Lợi nhuận trước thuế', 100, ''], ['Sau thuế công ty 25%', 75, ''], ['Cổ đông nhận sau thuế cổ tức 20%', 60, 'acc']];
    return `<div class="sd-bars">${rows.map(([l, v]) => `<div class="sd-bar"><span class="sd-bar-l">${l}</span><span class="sd-bar-t"><i style="width:${v}%"></i></span><b>${v}</b></div>`).join('')}</div>`;
  })();

  // Bậc thang số lượng cổ phiếu.
  const shareBars = (() => {
    const rows = [['Được phép phát hành', 1500], ['Đã phát hành', 1050], ['Đang lưu hành', 1000], ['Free float', 450]];
    return `<div class="sd-bars">${rows.map(([l, v]) => `<div class="sd-bar"><span class="sd-bar-l">${l}</span><span class="sd-bar-t"><i style="width:${(v / 1500) * 100}%"></i></span><b>${String(v).replace(/\B(?=(\d{3})+$)/g, '.')}</b></div>`).join('')}</div>`;
  })();

  // Hai chiều chuyển đổi tư nhân - đại chúng.
  const flows = `<svg viewBox="0 0 600 230" class="sv big" role="img" aria-label="Các con đường giữa tư nhân và đại chúng">
    <rect x="20" y="70" width="170" height="90" rx="14" class="sv-panel"/><text x="105" y="122" class="sv-txt">Tư nhân</text>
    <rect x="410" y="70" width="170" height="90" rx="14" class="sv-panel"/><text x="495" y="122" class="sv-txt">Đại chúng</text>
    <line x1="195" y1="88" x2="405" y2="88" class="sv-up"/><text x="300" y="40" class="sv-t-up sv-txt">IPO · Direct listing</text><text x="300" y="70" class="sv-t-up sv-txt">Sáp nhập / SPAC</text>
    <line x1="195" y1="145" x2="405" y2="145" class="sv-down"/><text x="300" y="180" class="sv-t-down sv-txt">LBO · MBO</text><text x="300" y="208" class="sv-muted">mua lại bằng nợ, hủy niêm yết</text></svg>`;

  const slides = [
    S('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Corporate Issuers · CF-01</div>
      <h2>Organizational Forms,<br>Issuer Features, Ownership</h2>
      <p>Ai sở hữu, ai điều hành, ai chịu rủi ro?</p>
      <div class="sd-chips"><span>LOS 1 · Hình thức tổ chức</span><span>LOS 2 · Đặc điểm công ty</span><span>LOS 3 · Đại chúng và tư nhân</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Năm câu hỏi phân biệt mọi hình thức', `<div class="sd-check">
      <span>Có tư cách pháp lý riêng không?</span><span>Chủ sở hữu có trực tiếp điều hành không?</span>
      <span>Chủ chịu trách nhiệm đến đâu?</span><span>Huy động vốn dễ hay khó?</span>
      <span>Lợi nhuận bị đánh thuế mấy lần?</span></div>
      <p class="sd-note">Học module này bằng <b>bảng so sánh</b>: mỗi hình thức một cột, mỗi câu hỏi một dòng.</p>`),

    S('Từ quán nhỏ đến công ty lớn', `${journey}
      <p class="sd-note">Càng sang phải: nhiều chủ hơn, vốn lớn hơn, trách nhiệm của nhà đầu tư càng <b>hữu hạn</b>, nhưng sở hữu và điều hành càng <b>tách xa</b>.</p>`),

    S('Một chủ và hợp danh', `<div class="sd-cols2">
      <div class="sd-card"><b>Sole proprietorship</b><p>1 người sở hữu và điều hành</p><p>Không tách khỏi chủ, trách nhiệm <b>vô hạn</b></p><p>Thuế một lần ở cấp cá nhân</p><small>Vốn giới hạn ở túi tiền của chủ</small></div>
      <div class="sd-card"><b>General partnership</b><p>Nhiều thành viên cùng điều hành</p><p>Mỗi người chịu trách nhiệm <b>vô hạn</b>, kể cả nợ do người khác gây ra</p><p>Thuế pass-through</p><small>Công ty luật, kiểm toán, tư vấn</small></div></div>`),

    S('Hợp danh hữu hạn: GP và LP', `<div class="sd-cols2">
      <div class="sd-card"><div class="sd-n">GP</div><b>General partner</b><p>Điều hành, ra quyết định</p><p>Trách nhiệm <b>vô hạn</b></p><small>Ví dụ: công ty quản lý quỹ</small></div>
      <div class="sd-card acc"><div class="sd-n">LP</div><b>Limited partner</b><p>Chỉ góp vốn, thụ động</p><p>Trách nhiệm <b>hữu hạn</b> = số vốn góp</p><small>Ví dụ: quỹ hưu trí, quỹ đầu tư</small></div></div>
      <p class="sd-note">Cấu trúc chuẩn của quỹ <b>private equity, venture capital, hedge fund</b>. Luôn cần ít nhất một GP.</p>`),

    S('Công ty: năm đặc điểm chính', `<div class="sd-grid4">
      <div class="sd-card"><b>Pháp nhân riêng</b><p>Tự sở hữu tài sản, kiện và bị kiện, tồn tại lâu dài</p></div>
      <div class="sd-card"><b>Tách sở hữu - điều hành</b><p>Cổ đông bầu HĐQT, HĐQT thuê quản lý</p></div>
      <div class="sd-card"><b>Trách nhiệm hữu hạn</b><p>Mất tối đa số vốn đã đầu tư</p></div>
      <div class="sd-card acc"><b>Huy động vốn lớn</b><p>Cổ phiếu và nợ, từ đông đảo nhà đầu tư</p></div></div>
      <p class="sd-note">Đặc điểm thứ năm: <b>thuế</b> ở cấp công ty, rồi thêm thuế cổ tức ở cấp cổ đông.</p>`),

    S('Bảng so sánh tổng hợp', `<div class="sd-tbl grid">
      <div class="head"><span>Tiêu chí</span><span>Một chủ</span><span>Hợp danh</span><span>Hợp danh HH</span><span>Công ty</span></div>
      <div><span>Pháp nhân riêng</span><span>Không</span><span>Không</span><span>Không</span><span>Có</span></div>
      <div><span>Chủ điều hành</span><span>Có</span><span>Có</span><span>Chỉ GP</span><span>Tách biệt</span></div>
      <div><span>Trách nhiệm</span><span>Vô hạn</span><span>Vô hạn</span><span>GP vô hạn</span><span>Hữu hạn</span></div>
      <div><span>Huy động vốn</span><span>Thấp</span><span>TB</span><span>Khá</span><span>Cao</span></div>
      <div><span>Thuế</span><span>1 lần</span><span>Pass-through</span><span>Pass-through</span><span>2 lần</span></div></div>`),

    S('Ai nắm quyền trong công ty?', `${chain}
      <p class="sd-note">Ưu điểm: thuê được người quản lý giỏi, hàng triệu người cùng sở hữu. Cái giá: người điều hành có thể không hành động vì lợi ích của chủ.</p>`),

    S('Đánh thuế hai lần', `<div class="sd-cols2 wide-left"><div>${taxBars}</div>
      <div><div class="sd-f sm">1 - 0,75 × 0,80 = <b>40%</b></div><p class="sd-note">Việt Nam: 20% và 5% → 100 × 0,8 × 0,95 = 76, thuế tổng hợp <b>24%</b>.</p>
      <p class="sd-note">Hợp danh: chỉ chịu thuế một lần ở cấp thành viên. Công ty phi lợi nhuận: thường <b>miễn thuế</b>, không có cổ đông.</p></div></div>`),

    S('Đại chúng và tư nhân', `<div class="sd-tbl grid">
      <div class="head"><span>Tiêu chí</span><span>Đại chúng</span><span>Tư nhân</span></div>
      <div><span>Niêm yết, thanh khoản</span><span>Trên sàn, cao</span><span>Không, thấp</span></div>
      <div><span>Tăng vốn</span><span>Chào bán công chúng</span><span>Phát hành riêng lẻ</span></div>
      <div><span>Công bố thông tin</span><span>Bắt buộc, tốn kém</span><span>Hạn chế</span></div>
      <div><span>Sở hữu</span><span>Phân tán</span><span>Tập trung</span></div>
      <div><span>Tầm nhìn</span><span>Áp lực từng quý</span><span>Dễ dài hạn</span></div></div>`),

    S('Đếm cổ phiếu cho đúng', `<div class="sd-cols2 wide-left"><div>${shareBars}<p class="sd-cap">Đơn vị: triệu cổ phiếu</p></div>
      <div><div class="sd-steps"><span>Đang lưu hành = 1.050 - 50 (quỹ) = <b>1.000</b></span><span>Free float = (1.000 - 400 - 150) / 1.000 = <b>45%</b></span></div>
      <p class="sd-note">Cổ phiếu quỹ: không biểu quyết, không nhận cổ tức.</p></div></div>`),

    S('Các con đường lên sàn và rời sàn', `${flows}
      <p class="sd-note">Ở các thị trường phát triển, số công ty niêm yết giảm dần; vốn tư nhân (VC, PE, private debt) tăng mạnh.</p>`),

    S('IPO, direct listing hay SPAC?', `<div class="sd-cols3">
      <div class="sd-card"><b>IPO</b><p>Cổ phiếu <b>mới</b>, có underwriter</p><small>Huy động vốn; chi phí cao</small></div>
      <div class="sd-card acc"><b>Direct listing</b><p>Chỉ cổ phiếu <b>hiện có</b>, không underwriter</p><small>Không huy động vốn; rẻ hơn</small></div>
      <div class="sd-card"><b>SPAC</b><p>Công ty vỏ IPO trước, sáp nhập sau</p><small>Nhanh; nhà đầu tư chưa biết mục tiêu</small></div></div>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>Một chủ, hợp danh, GP: trách nhiệm vô hạn</span><span>LP: góp vốn, không điều hành</span>
      <span>Hợp danh: thuế pass-through</span><span>Công ty: pháp nhân riêng, thuế 2 lần</span>
      <span>Lưu hành = đã phát hành - quỹ</span><span>Free float trừ người nội bộ, chiến lược</span>
      <span>Direct listing: không vốn mới</span><span>LBO / MBO: đại chúng → tư nhân</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 10 câu, mục tiêu ≥ 7 câu đúng.</p>`),
  ];

  addDeck('CF-01', `Slide Organizational Forms - bản thiết kế riêng (${slides.length} slide)`, slides);
}());
