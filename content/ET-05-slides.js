// Bộ slide tự thiết kế cho ET-05 Guidance for Standard III: Duties to Clients.
(function () {
  const L = window.LESSONS && window.LESSONS['ET-05'];
  if (!L) return;
  const { slide, addDeck } = window.CFAH;
  const K = 'ET-05 · Duties to Clients';
  const S = (title, body, opt = {}) => slide(title, body, Object.assign({ kicker: K }, opt));
  const vn = x => String(x).replace('.', ',');

  // Thứ tự ưu tiên lợi ích.
  const priority = `<svg viewBox="0 0 600 200" class="sv big" role="img" aria-label="Khách hàng, rồi công ty, rồi bản thân">
    <rect x="20" y="60" width="170" height="80" rx="14" class="sv-node up"/><text x="105" y="95" class="sv-txt">Khách hàng</text><text x="105" y="122" class="sv-muted">1</text>
    <rect x="215" y="60" width="170" height="80" rx="14" class="sv-panel"/><text x="300" y="95" class="sv-txt">Công ty</text><text x="300" y="122" class="sv-muted">2</text>
    <rect x="410" y="60" width="170" height="80" rx="14" class="sv-panel"/><text x="495" y="95" class="sv-txt">Bản thân</text><text x="495" y="122" class="sv-muted">3</text>
    <line x1="192" y1="100" x2="212" y2="100" class="sv-axis"/><line x1="387" y1="100" x2="407" y2="100" class="sv-axis"/>
    <text x="300" y="180" class="sv-muted">khi lợi ích xung đột, đi từ trái sang phải</text></svg>`;

  // Phân bổ IPO theo tỷ lệ 50%.
  const ipo = (() => {
    const rows = [['A đặt 40.000', 40000, 20000], ['B đặt 15.000', 15000, 7500], ['C đặt 5.000', 5000, 2500]];
    const f = v => String(v).replace(/\B(?=(\d{3})+$)/g, '.');
    return `<div class="sd-bars">${rows.map(([l, o, a]) => `<div class="sd-bar"><span class="sd-bar-l">${l}</span><span class="sd-bar-t"><i style="width:${(a / 40000) * 100}%"></i></span><b>${f(a)}</b></div>`).join('')}</div>`;
  })();

  // Lệnh tự yêu cầu không phù hợp: cây quyết định.
  const tree = `<svg viewBox="0 0 600 250" class="sv big" role="img" aria-label="Xử lý lệnh khách hàng tự yêu cầu không phù hợp IPS">
    <rect x="190" y="5" width="220" height="50" rx="12" class="sv-key"/><text x="300" y="37" class="sv-txt">Trao đổi với khách</text>
    <line x1="260" y1="57" x2="150" y2="95" class="sv-axis"/><line x1="340" y1="57" x2="450" y2="95" class="sv-axis"/>
    <text x="150" y="88" class="sv-muted" text-anchor="end">ảnh hưởng nhỏ</text><text x="455" y="88" class="sv-muted" text-anchor="start">ảnh hưởng lớn</text>
    <rect x="15" y="100" width="270" height="70" rx="12" class="sv-node up"/><text x="150" y="130" class="sv-txt" style="font-size:17px">Giải thích, khách xác nhận</text><text x="150" y="155" class="sv-muted" style="font-size:15px">theo quy trình công ty → thực hiện</text>
    <rect x="315" y="100" width="270" height="70" rx="12" class="sv-panel"/><text x="450" y="130" class="sv-txt" style="font-size:17px">Đề nghị cập nhật IPS</text><text x="450" y="155" class="sv-muted" style="font-size:15px">khách không đồng ý thì sao?</text>
    <line x1="450" y1="172" x2="450" y2="188" class="sv-axis"/>
    <rect x="315" y="190" width="270" height="55" rx="12" class="sv-node down"/><text x="450" y="214" class="sv-txt" style="font-size:16px">Tài khoản client-directed</text><text x="450" y="236" class="sv-muted" style="font-size:14px">hoặc cân nhắc dừng quan hệ</text></svg>`;

  // 10 tài khoản cùng chiến lược, 3 tài khoản tốt nhất được tô màu.
  const perf = (() => {
    const r = [12.5, 9.8, 7.1, 15.2, -3.4, 6.0, 4.3, 10.9, -1.2, 8.6];
    const top = [...r].sort((a, b) => b - a).slice(0, 3);
    const W = 600, H = 220, y0 = 150, sc = 8, bw = 40;
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv big" role="img" aria-label="Lợi nhuận 10 tài khoản">`;
    s += `<line x1="20" y1="${y0}" x2="580" y2="${y0}" class="sv-axis"/>`;
    r.forEach((v, i) => {
      const x = 35 + i * 55, h = Math.abs(v) * sc, y = v >= 0 ? y0 - h : y0;
      const cls = top.includes(v) ? 'sv-node up' : v < 0 ? 'sv-node down' : 'sv-panel';
      s += `<rect x="${x}" y="${y}" width="${bw}" height="${h}" rx="4" class="${cls}"/>`;
      s += `<text x="${x + bw / 2}" y="${v >= 0 ? y - 6 : y + h + 18}" class="sv-muted" style="font-size:14px">${vn(v.toFixed(1))}</text>`;
    });
    s += `<text x="300" y="${H - 8}" class="sv-muted">viền xanh: 3 tài khoản được khoe · đơn vị: %</text></svg>`;
    return s;
  })();

  const slides = [
    S('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Ethical and Professional Standards · ET-05</div>
      <h2>Standard III:<br>Duties to Clients</h2>
      <p>Trung thành, công bằng, phù hợp, trung thực, bảo mật</p>
      <div class="sd-chips"><span>III(A) Loyalty, Prudence, Care</span><span>III(B) Fair Dealing</span><span>III(C) Suitability</span><span>III(D) Performance</span><span>III(E) Confidentiality</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Thứ tự ưu tiên', `${priority}
      <p class="sd-note">Câu hỏi đầu tiên của mọi tình huống Standard III: <b>ai là khách hàng</b>, và lợi ích của họ có bị đặt sau ai không?</p>`),

    S('III(A): ai là khách hàng?', `<div class="sd-cols3">
      <div class="sd-card"><b>Tài khoản cá nhân</b><p>Chính người đó</p></div>
      <div class="sd-card acc"><b>Quỹ hưu trí, tín thác</b><p><b>Người thụ hưởng</b>, không phải doanh nghiệp đã thuê</p></div>
      <div class="sd-card"><b>Quỹ chỉ số, quỹ chiến lược</b><p>Tuân thủ <b>mandate</b> đã công bố</p></div></div>
      <p class="sd-note">Quyết định trong bối cảnh <b>toàn bộ danh mục</b>; báo cho khách mọi giới hạn của quan hệ tư vấn.</p>`),

    S('Soft dollars: tiền của ai?', `<div class="sd-big">Hoa hồng = tài sản của khách hàng</div>
      <div class="sd-rule up"><span>Nghiên cứu giúp ra quyết định cho chính khách hàng đó</span><b>Được</b></div>
      <div class="sd-rule up"><span>Khách tự chỉ định môi giới (directed brokerage)</span><b>Được, vẫn best execution</b></div>
      <div class="sd-rule down"><span>Phí cao hơn để môi giới trả tiền thuê văn phòng</span><b>Vi phạm</b></div>`),

    S('Proxy voting và churning', `<div class="sd-cols2">
      <div class="sd-card"><b>Proxy voting</b><p>Bỏ phiếu có hiểu biết, vì khách hàng</p><p>Được cân nhắc chi phí - lợi ích, không bắt buộc bỏ mọi phiếu</p><small>Có chính sách bằng văn bản, công bố</small></div>
      <div class="sd-card acc"><b>Churning</b><p>Giao dịch vượt mức cần thiết để thu hoa hồng</p><p>Đặt bản thân trước khách hàng</p><small>Vi phạm III(A)</small></div></div>`),

    S('III(B): công bằng, không phải như nhau', `<div class="sd-cols2">
      <div class="sd-card"><b>Được phép</b><p>Email đến sớm muộn vài phút</p><p>Gói cao cấp được gọi điện thêm, <b>đã công bố</b></p></div>
      <div class="sd-card acc"><b>Không được</b><p>Khách VIP biết khuyến nghị <b>trước</b></p><p>Cấp dịch vụ làm hại khách khác</p></div></div>
      <p class="sd-note">Khuyến nghị mới gửi <b>đồng thời</b>. Khách chưa biết thay đổi thì báo trước khi nhận lệnh.</p>`),

    S('Chia cổ phiếu IPO', `<div class="sd-cols2 wide-left"><div>${ipo}<p class="sd-cap">Được phân bổ 30.000 cổ phiếu, khách đặt 60.000</p></div>
      <div><div class="sd-f sm">30.000 / 60.000 = <b>50%</b></div>
      <p class="sd-note">Mọi khách phù hợp nhận cùng tỷ lệ. Tài khoản người thân <b>trả phí</b>: đối xử như khách khác, không ưu tiên, không loại trừ.</p></div></div>`),

    S('Fair dealing: quy trình cho công ty', `<div class="sd-check">
      <span>Ít người biết trước thay đổi khuyến nghị</span><span>Rút ngắn thời gian quyết định → phát hành</span>
      <span>Cấm giao dịch trước khi phát hành</span><span>Phát hành đồng thời</span>
      <span>Quy trình phân bổ bằng văn bản, công bố</span><span>Rà soát tài khoản có hệ thống</span></div>`),

    S('III(C): hai phần của Suitability', `<div class="sd-cols2">
      <div class="sd-card"><div class="sd-n">1</div><b>Quan hệ tư vấn</b><p>Tìm hiểu khách <b>trước</b>, lập IPS, cập nhật định kỳ</p><p>Phù hợp với mục tiêu, ràng buộc, toàn bộ danh mục</p></div>
      <div class="sd-card acc"><div class="sd-n">2</div><b>Quản lý theo mandate</b><p>Chỉ đầu tư nhất quán với chiến lược, phong cách đã công bố</p><small>Quỹ thu nhập không mua cổ phiếu 0 cổ tức</small></div></div>`),

    S('IPS gồm những gì?', `<div class="sd-grid4">
      <div class="sd-card"><b>Loại khách hàng</b><p>Cá nhân, tổ chức, có người thụ hưởng riêng?</p></div>
      <div class="sd-card"><b>Mục tiêu</b><p>Lợi nhuận và rủi ro</p></div>
      <div class="sd-card"><b>Ràng buộc</b><p>Thanh khoản, thời gian, thuế, pháp lý, hoàn cảnh riêng</p></div>
      <div class="sd-card acc"><b>Chuẩn so sánh</b><p>Để đo kết quả</p></div></div>
      <p class="sd-note">Rà soát <b>ít nhất hằng năm</b> và khi hoàn cảnh khách thay đổi lớn.</p>`),

    S('Lệnh tự yêu cầu nhưng không phù hợp', tree),

    S('III(D): trình bày kết quả', `<div class="sd-cols2 wide-left"><div>${perf}</div>
      <div><div class="sd-rule down"><span>Khoe top 3</span><b>12,87%</b></div><div class="sd-rule up"><span>Cả 10 tài khoản</span><b>6,98%</b></div>
      <p class="sd-note">Công bằng, chính xác, <b>đầy đủ</b>: gồm cả tài khoản đã đóng; ghi rõ mô phỏng, trước/sau phí.</p></div></div>`),

    S('III(D): khuyến nghị tuân thủ', `<div class="sd-check">
      <span>Áp dụng GIPS (cách tốt nhất)</span><span>Composite có trọng số, không khoe 1 tài khoản</span>
      <span>Gồm tài khoản đã chấm dứt</span><span>Ghi rõ backtest, đòn bẩy, phí, thuế</span>
      <span>Bài ngắn: báo là có giới hạn</span><span>Chi tiết khi khách yêu cầu</span></div>
      <p class="sd-note">Không ngụ ý sẽ lặp lại kết quả quá khứ.</p>`),

    S('III(E): giữ bí mật, trừ 3 ngoại lệ', `<div class="sd-cols3">
      <div class="sd-card"><div class="sd-n">1</div><b>Hoạt động bất hợp pháp</b><p>Có thể phải báo cơ quan chức năng</p></div>
      <div class="sd-card"><div class="sd-n">2</div><b>Luật yêu cầu</b><p>Lệnh tòa, cơ quan quản lý</p></div>
      <div class="sd-card"><div class="sd-n">3</div><b>Khách cho phép</b><p>Đồng ý công bố</p></div></div>
      <p class="sd-note">Áp dụng cho khách <b>hiện tại, cũ, tiềm năng</b>. Hợp tác với điều tra của <b>PCP</b> không vi phạm.</p>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>Khách hàng → công ty → bản thân</span><span>Quỹ hưu trí: khách là người thụ hưởng</span>
      <span>Soft dollars phục vụ khách hàng</span><span>Fair không phải equal</span>
      <span>IPO thiếu: chia theo tỷ lệ</span><span>IPS trước, khuyến nghị sau</span>
      <span>Không bỏ tài khoản kém khỏi composite</span><span>Bảo mật cả khách cũ, tiềm năng</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 10 câu, mục tiêu ≥ 7 câu đúng.</p>`),
  ];

  addDeck('ET-05', `Slide Duties to Clients - bản thiết kế riêng (${slides.length} slide)`, slides);
}());
