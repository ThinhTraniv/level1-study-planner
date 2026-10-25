// Bộ slide tự thiết kế cho EQ-03 Equity Issuance and Trading.
(function () {
  const L = window.LESSONS && window.LESSONS['EQ-03'];
  if (!L) return;
  const { slide, addDeck, frac } = window.CFAH;
  const K = 'EQ-03 · Issuance and Trading';
  const S = (title, body, opt = {}) => slide(title, body, Object.assign({ kicker: K }, opt));
  const fmt = (x, d = 2) => x.toFixed(d).replace('.', ',');

  // Hai cuộc đời của cổ phiếu: sơ cấp và thứ cấp.
  const twoMarkets = `<svg viewBox="0 0 600 220" class="sv big" role="img" aria-label="Thị trường sơ cấp và thứ cấp">
    <rect x="20" y="70" width="140" height="70" rx="12" class="sv-key"/><text x="90" y="111" class="sv-txt">Công ty</text>
    <rect x="240" y="70" width="140" height="70" rx="12" class="sv-panel"/><text x="310" y="111" class="sv-txt">Nhà đầu tư A</text>
    <rect x="440" y="70" width="140" height="70" rx="12" class="sv-panel"/><text x="510" y="111" class="sv-txt">Nhà đầu tư B</text>
    <line x1="162" y1="92" x2="238" y2="92" class="sv-down"/><line x1="238" y1="120" x2="162" y2="120" class="sv-up"/>
    <text x="200" y="84" class="sv-muted" style="font-size:13px">cổ phiếu</text><text x="200" y="138" class="sv-t-up sv-txt" style="font-size:13px">tiền</text>
    <line x1="382" y1="92" x2="438" y2="92" class="sv-down"/><line x1="438" y1="120" x2="382" y2="120" class="sv-up"/>
    <text x="200" y="40" class="sv-txt sv-t-pv">Sơ cấp</text><text x="410" y="40" class="sv-txt sv-t-pv">Thứ cấp</text>
    <text x="200" y="190" class="sv-muted" style="font-size:14px">tiền về công ty</text><text x="410" y="190" class="sv-muted" style="font-size:14px">công ty không nhận tiền</text></svg>`;

  // Lãi/lỗ của vị thế mua và bán khống ở giá vào 50.
  function payoff() {
    const W = 600, H = 260, l = 60, r = 580, t = 20, b = 220;
    const xs = p => l + ((p - 30) / 40) * (r - l), ys = v => (t + b) / 2 - (v / 20) * ((b - t) / 2);
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv" role="img" aria-label="Lãi lỗ của vị thế mua và bán khống">`;
    s += `<line x1="${l}" y1="${ys(0)}" x2="${r}" y2="${ys(0)}" class="sv-axis"/><line x1="${l}" y1="${t}" x2="${l}" y2="${b}" class="sv-axis"/>`;
    [-20, -10, 10, 20].forEach(v => { s += `<line x1="${l}" y1="${ys(v)}" x2="${r}" y2="${ys(v)}" class="sv-grid"/><text x="${l - 8}" y="${ys(v) + 5}" class="sv-muted" text-anchor="end">${v > 0 ? '+' : ''}${v}</text>`; });
    [30, 40, 50, 60, 70].forEach(p => { s += `<text x="${xs(p)}" y="${b + 24}" class="sv-muted">${p}</text>`; });
    s += `<line x1="${xs(30)}" y1="${ys(-20)}" x2="${xs(70)}" y2="${ys(20)}" class="sv-up"/><line x1="${xs(30)}" y1="${ys(20)}" x2="${xs(70)}" y2="${ys(-20)}" class="sv-down"/>`;
    s += `<text x="${xs(66)}" y="${ys(20) + 6}" class="sv-txt sv-t-up" text-anchor="end">Long</text><text x="${xs(66)}" y="${ys(-20) - 4}" class="sv-txt sv-t-down" text-anchor="end">Short</text>`;
    s += `<circle cx="${xs(50)}" cy="${ys(0)}" r="6" class="sv-dot"/><text x="${xs(50)}" y="${ys(0) - 12}" class="sv-muted">giá vào 50</text>`;
    return `${s}</svg>`;
  }

  // Đòn bẩy khuếch đại lãi và lỗ (ví dụ 6.1).
  const levBars = (() => {
    const rows = [['Giá 28, không vay', 14], ['Giá 28, ký quỹ 50%', 22.64], ['Giá 21, không vay', -14], ['Giá 21, ký quỹ 50%', -33.27]];
    return `<div class="sd-bars">${rows.map(([l, v]) => `<div class="sd-bar"><span class="sd-bar-l">${l}</span><span class="sd-bar-t"><i style="width:${(Math.abs(v) / 35) * 100}%"></i></span><b class="${v < 0 ? 'sv-t-down' : 'sv-t-up'}">${v > 0 ? '+' : ''}${fmt(v)}%</b></div>`).join('')}</div>`;
  })();

  // Giá gọi ký quỹ trên trục giá.
  function callLine() {
    const W = 600, H = 150, l = 40, r = 560, y = 70;
    const xs = p => l + ((p - 12) / 16) * (r - l);
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv" role="img" aria-label="Giá gọi ký quỹ">`;
    s += `<line x1="${l}" y1="${y}" x2="${r}" y2="${y}" class="sv-axis"/>`;
    s += `<rect x="${l}" y="${y - 12}" width="${xs(17.857) - l}" height="24" class="sv-node down"/>`;
    [[25, 'mua 25', 'sv-t-up'], [17.857, 'gọi ký quỹ 17,86', 'sv-t-down'], [16, 'giá 16: nộp 2.600', 'sv-t-down']].forEach(([p, lab, c], i) => {
      s += `<line x1="${xs(p)}" y1="${y - 18}" x2="${xs(p)}" y2="${y + 18}" class="sv-axis"/><text x="${xs(p)}" y="${i === 2 ? y + 44 : y - 26}" class="sv-txt ${c}" ${i === 2 ? 'text-anchor="start"' : ''}>${lab}</text>`;
    });
    s += `<text x="${(l + r) / 2 + 60}" y="${H - 8}" class="sv-muted">vùng dưới 17,86: vốn tự có &lt; 30% giá trị</text></svg>`;
    return s;
  }

  // Phổ địa điểm giao dịch: minh bạch và tác động giá.
  const venues = `<svg viewBox="0 0 600 170" class="sv big" role="img" aria-label="Đánh đổi giữa minh bạch và tác động giá">
    <line x1="40" y1="80" x2="560" y2="80" class="sv-axis"/>
    <circle cx="90" cy="80" r="14" class="sv-node up"/><text x="90" y="50" class="sv-txt">Sở giao dịch</text><text x="90" y="118" class="sv-muted" style="font-size:13px">sổ lệnh công khai</text>
    <circle cx="300" cy="80" r="14" class="sv-node"/><text x="300" y="50" class="sv-txt">ATS, dark pool</text><text x="300" y="118" class="sv-muted" style="font-size:13px">ẩn lệnh trước khớp</text>
    <circle cx="510" cy="80" r="14" class="sv-node down"/><text x="510" y="50" class="sv-txt">OTC</text><text x="510" y="118" class="sv-muted" style="font-size:13px">giá do dealer báo</text>
    <text x="40" y="155" class="sv-txt sv-t-up" text-anchor="start">minh bạch, khám phá giá tốt</text><text x="560" y="155" class="sv-txt sv-t-down" text-anchor="end">ít minh bạch, kém thanh khoản</text></svg>`;

  const slides = [
    S('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Equities · EQ-03</div>
      <h2>Equity Issuance<br>and Trading</h2>
      <p>Cổ phiếu ra đời và được mua bán thế nào?</p>
      <div class="sd-chips"><span>LOS 1 · Sơ cấp, thứ cấp</span><span>LOS 2 · Trên sở, ngoài sở, OTC</span><span>LOS 3 · Thanh khoản, float, ADV</span><span>LOS 4 · Loại chỉ số</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Hai cuộc đời của một cổ phiếu', `${twoMarkets}
      <p class="sd-note">Thứ cấp tốt (thanh khoản, giá minh bạch) → nhà đầu tư chấp nhận lợi suất thấp hơn → <b>chi phí vốn thấp hơn</b> ở sơ cấp.</p>`),

    S('IPO: ai chịu rủi ro bán không hết?', `<div class="sd-cols2">
      <div class="sd-card acc"><b>Firm commitment</b><p>Ngân hàng mua toàn bộ rồi bán lại</p><p>Bán không hết → <b>ngân hàng</b> chịu</p></div>
      <div class="sd-card"><b>Best efforts</b><p>Ngân hàng chỉ làm môi giới</p><p>Bán không hết → <b>công ty</b> chịu</p></div></div>
      <div class="sd-rule">Underpricing: giá IPO 20, đóng cửa ngày đầu 26 <b>+30%</b></div>
      <p class="sd-note">Giá IPO thường xác định qua book building. Direct listing và SPAC: xem CF-01.</p>`),

    S('Công ty đã niêm yết huy động thêm', `<div class="sd-grid4">
      <div class="sd-card"><b>Seasoned offering</b><p>Bán thêm ra công chúng; giá thường giảm khi công bố</p></div>
      <div class="sd-card acc"><b>Rights offering</b><p>Cổ đông hiện hữu mua trước, giá chiết khấu</p></div>
      <div class="sd-card"><b>Private placement</b><p>Nhóm nhỏ đủ điều kiện; rẻ, ít công bố, có chiết khấu</p></div>
      <div class="sd-card"><b>Shelf registration</b><p>Đăng ký một lần, bán dần khi thuận lợi</p></div></div>
      <p class="sd-note">DRIP: cổ đông dùng cổ tức mua cổ phiếu mới trực tiếp từ công ty.</p>`),

    S('Rights offering: giá sau quyền', `<div class="sd-f">Giá sau quyền = ${frac('4 × 50 + 1 × 40', '5')} = <b>48</b></div>
      <div class="sd-cols3">
      <div class="sd-card"><b>Thực hiện quyền</b><p>Trả 40 cho cổ phiếu trị giá 48</p><small>Không mất gì</small></div>
      <div class="sd-card"><b>Bán quyền</b><p>Nhận 2 mỗi cổ phiếu cũ</p><small>Không mất gì</small></div>
      <div class="sd-card acc"><b>Bỏ mặc</b><p>Giá 50 → 48</p><small>Mất 2 mỗi cổ phiếu</small></div></div>
      <p class="sd-note">Cứ 4 cổ phiếu cũ (giá 50) được mua 1 cổ phiếu mới giá 40.</p>`),

    S('Thứ cấp: chức năng và cơ chế', `<div class="sd-cols2">
      <div><div class="sd-check" style="grid-template-columns:1fr"><span>Thanh khoản</span><span>Khám phá giá</span><span>Kỷ luật ban điều hành</span><span>Đa dạng hóa, tái cân bằng</span></div></div>
      <div><div class="sd-tbl grid"><div class="head"><span>Cơ chế</span><span>Đối ứng là</span></div>
      <div><span>Order-driven</span><span>Nhà đầu tư khác</span></div>
      <div><span>Quote-driven</span><span>Dealer</span></div>
      <div><span>Brokered</span><span>Môi giới tìm đối tác</span></div></div>
      <p class="sd-note">Khớp lệnh: <b>giá</b> trước, rồi lệnh hiển thị, rồi <b>thời gian</b>. Call market: ATO, ATC.</p></div></div>`),

    S('Trên sở, ngoài sở và OTC', `<div class="sd-tbl grid"><div class="head"><span>Tiêu chí</span><span>Trên sở</span><span>Ngoài sở</span><span>OTC</span></div>
      <div><span>Chứng khoán</span><span>Niêm yết</span><span>Niêm yết</span><span>Không niêm yết</span></div>
      <div><span>Minh bạch trước</span><span>Cao</span><span>Thấp, dark</span><span>Thấp</span></div>
      <div><span>Minh bạch sau</span><span>Ngay</span><span>Báo cáo sau</span><span>Hạn chế</span></div>
      <div><span>Ưu điểm</span><span>Khám phá giá</span><span>Ít tác động giá</span><span>Tiếp cận CP nhỏ</span></div>
      <div><span>Nhược điểm</span><span>Lệnh lớn bị lộ</span><span>Phân mảnh</span><span>Spread rộng</span></div></div>
      <p class="sd-note">Ngoài sở: ATS / MTF / ECN, dark pool, internalization.</p>`),

    S('Đánh đổi: minh bạch và tác động giá', `${venues}
      <p class="sd-note">Càng nhiều lệnh rời sở → sổ lệnh công khai <b>mỏng đi</b>, giá tham chiếu kém tin cậy. Việt Nam: giao dịch <b>thỏa thuận</b> vẫn qua hệ thống sở; UPCoM cho công ty đại chúng chưa niêm yết.</p>`),

    S('Lệnh: thực hiện thế nào, khi nào?', `<div class="sd-cols2">
      <div class="sd-card"><b>How</b><p><b>Market</b>: chắc khớp, không chắc giá</p><p><b>Limit</b>: chắc giá, không chắc khớp; lệnh chờ cung cấp thanh khoản</p><p><b>Stop</b>: kích hoạt khi chạm giá dừng</p><p>Hidden, iceberg, all-or-nothing</p></div>
      <div class="sd-card acc"><b>When</b><p>Day · GTC</p><p>IOC · fill-or-kill</p><p>Good-on-open · good-on-close</p><p class="sd-note">Clearing: bán thường hay bán khống?</p></div></div>`),

    S('Long và short: rủi ro không đối xứng', `<div class="sd-cols2 wide-left"><div>${payoff()}</div>
      <div><div class="sd-rule up">Short 1.000 CP ở 50, mua lại 42 → <b>+6.750</b></div><div class="sd-rule down">Mua lại 65 → <b>-16.250</b></div>
      <p class="sd-note">Người bán khống trả <b>cổ tức</b> (1.000) và <b>phí mượn</b> (250). Lỗ không giới hạn.</p></div></div>`),

    S('Đòn bẩy khuếch đại cả hai chiều', `<div class="sd-cols2 wide-left"><div>${levBars}</div>
      <div><div class="sd-f sm">Đòn bẩy = ${frac('1', 'IM')} = ${frac('1', '50%')} = 2</div>
      <p class="sd-note">2.000 CP giá 25, vay 25.000 lãi 5%, cổ tức 0,50, phí 0,02/CP mỗi chiều.</p><p class="sd-note">Lãi vay làm lãi &lt; 2 × 14% và lỗ &gt; 2 × 14%.</p></div></div>`),

    S('Khi nào bị gọi ký quỹ?', `<div class="sd-f">P = P<sub>0</sub> × ${frac('1 - IM', '1 - MM')} = 25 × ${frac('0,5', '0,7')} = <b>17,86</b></div>
      ${callLine()}
      <p class="sd-note">Ở giá 16: giá trị 32.000, vốn tự có 7.000 &lt; 30% × 32.000 = 9.600 → nộp thêm <b>2.600</b>.</p>`),

    S('Đo thanh khoản bằng gì?', `<div class="sd-grid4">
      <div class="sd-card"><b>Spread</b><p>Ask - Bid; % theo giá giữa</p><small>Effective = 2 × |khớp - giữa|</small></div>
      <div class="sd-card"><b>Độ sâu</b><p>Khối lượng chờ quanh giá tốt nhất</p></div>
      <div class="sd-card"><b>ADV, vòng quay</b><p>Tổng khối lượng / số ngày; khối lượng / float</p></div>
      <div class="sd-card acc"><b>Free float</b><p>Lưu hành - nội bộ, chiến lược, Nhà nước, bị hạn chế</p></div></div>`),

    S('Ví dụ cổ phiếu ABC', `<div class="sd-steps">
      <span>① Bid 24,90, ask 25,10 → spread 0,20 = <b>0,80%</b>; khớp 25,06 → effective <b>0,12</b></span>
      <span>② Float = 500 - 200 - 100 = <b>200 triệu (40%)</b></span>
      <span>③ ADV = (1,10 + 0,95 + 1,40 + 1,25 + 1,30) / 5 = <b>1,20 triệu</b></span>
      <span>④ Bán 3 triệu, tối đa 20% ADV/ngày → 3 / 0,24 = <b>12,5 ngày</b></span></div>
      <p class="sd-note">Bẫy: float tính trên cổ phiếu <b>lưu hành</b>; ADV là trung bình, không phải tổng hay trung vị.</p>`),

    S('Các loại chỉ số cổ phiếu', `<div class="sd-tbl grid"><div class="head"><span>Loại</span><span>Phạm vi</span><span>Ví dụ</span></div>
      <div><span>Thị trường rộng</span><span>Phần lớn vốn hóa một nước</span><span>S&amp;P 500, VN-Index</span></div>
      <div><span>Đa thị trường</span><span>Khu vực, mức phát triển</span><span>MSCI World, EM</span></div>
      <div><span>Ngành</span><span>Cùng ngành</span><span>Ngân hàng</span></div>
      <div><span>Phong cách</span><span>Quy mô, value / growth</span><span>Russell 2000</span></div>
      <div><span>Chủ đề, ESG, nhân tố</span><span>Chủ đề, tiêu chí riêng</span><span>VNDiamond</span></div></div>
      <p class="sd-note">Cách tính và đặt trọng số: xem lại <b>QM-03</b>.</p>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>Thứ cấp hạ chi phí vốn cho sơ cấp</span><span>Firm commitment: ngân hàng chịu rủi ro</span>
      <span>Giá sau quyền = (n·P + giá mới) / (n + 1)</span><span>Ngoài sở: ít tác động giá, phân mảnh</span>
      <span>Short: trả cổ tức, lỗ không giới hạn</span><span>Gọi ký quỹ: P₀(1 - IM)/(1 - MM)</span>
      <span>Float tính từ cổ phiếu lưu hành</span><span>ADV = tổng khối lượng / số ngày</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 10 câu, mục tiêu ≥ 7 câu đúng.</p>`),
  ];

  addDeck('EQ-03', `Slide Issuance and Trading - bản thiết kế riêng (${slides.length} slide)`, slides);
}());
