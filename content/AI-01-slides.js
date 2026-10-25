// Bộ slide tự thiết kế cho AI-01 Alternative Investment Features, Methods, and Structures.
(function () {
  const L = window.LESSONS && window.LESSONS['AI-01'];
  if (!L) return;
  const { slide, addDeck } = window.CFAH;
  const K = 'AI-01 · Features, Methods, Structures';
  const S = (title, body, opt = {}) => slide(title, body, Object.assign({ kicker: K }, opt));

  // Giá trị "thật" và giá trị thẩm định (làm mượt) của một tài sản: minh họa vì sao biến động báo cáo thấp hơn.
  function smoothing() {
    const W = 600, H = 250, l = 30, r = 585, t = 20, b = 210;
    let seed = 13;
    const rnd = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
    const tru = [100], app = [100];
    for (let i = 1; i <= 24; i++) {
      tru.push(tru[i - 1] * (1 + (rnd() - 0.47) * 0.16));
      app.push(0.3 * tru[i] + 0.7 * app[i - 1]);
    }
    const lo = Math.min(...tru, ...app) - 3, hi = Math.max(...tru, ...app) + 3;
    const X = i => l + (i / 24) * (r - l), Y = v => b - ((v - lo) / (hi - lo)) * (b - t);
    const pl = a => a.map((v, i) => `${X(i).toFixed(1)},${Y(v).toFixed(1)}`).join(' ');
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv" role="img" aria-label="Giá trị thật và giá trị thẩm định">`;
    s += `<line x1="${l}" y1="${b}" x2="${r}" y2="${b}" class="sv-axis"/><line x1="${l}" y1="${t}" x2="${l}" y2="${b}" class="sv-axis"/>`;
    s += `<polyline points="${pl(tru)}" class="sv-down" fill="none"/><polyline points="${pl(app)}" class="sv-curve"/>`;
    s += `<text x="${r}" y="${t + 4}" class="sv-txt sv-t-down" text-anchor="end">Giá trị thị trường thật</text>`;
    s += `<text x="${r}" y="${t + 30}" class="sv-txt" text-anchor="end">Giá trị thẩm định (mượt)</text>`;
    s += `<text x="${(l + r) / 2}" y="${H - 8}" class="sv-muted">Thời gian (quý)</text>`;
    return `${s}</svg>`;
  }

  // Phổ ba phương thức đầu tư.
  const spectrum = `<svg viewBox="0 0 600 230" class="sv big" role="img" aria-label="Ba phương thức đầu tư">
    <line x1="40" y1="110" x2="560" y2="110" class="sv-axis"/>
    ${[['Qua quỹ', 90], ['Đồng đầu tư', 300], ['Trực tiếp', 510]].map(([n, x], i) => `<circle cx="${x}" cy="110" r="34" class="sv-node ${i === 0 ? '' : i === 1 ? 'up' : 'down'}"/><text x="${x}" y="68" class="sv-txt">${n}</text>`).join('')}
    <line x1="60" y1="170" x2="540" y2="170" class="sv-up"/><text x="300" y="160" class="sv-txt sv-t-up">Kiểm soát, chuyên môn, vốn cần có: tăng dần</text>
    <line x1="540" y1="205" x2="60" y2="205" class="sv-down"/><text x="300" y="225" class="sv-txt sv-t-down">Phí trả cho bên ngoài, đa dạng hóa: giảm dần</text>
    <text x="90" y="116" class="sv-muted">LP</text><text x="300" y="116" class="sv-muted">LP+</text><text x="510" y="116" class="sv-muted">Tự làm</text></svg>`;

  // Sơ đồ quỹ hợp danh hữu hạn.
  const lpgp = `<svg viewBox="0 0 600 270" class="sv" role="img" aria-label="Cấu trúc quỹ hợp danh hữu hạn">
    <rect x="30" y="20" width="200" height="70" rx="12" class="sv-panel"/><text x="130" y="50" class="sv-txt">GP (nhà quản lý)</text><text x="130" y="74" class="sv-muted">điều hành · trách nhiệm vô hạn</text>
    <rect x="370" y="20" width="200" height="70" rx="12" class="sv-panel"/><text x="470" y="50" class="sv-txt">LPs (nhà đầu tư)</text><text x="470" y="74" class="sv-muted">thụ động · trách nhiệm hữu hạn</text>
    <rect x="200" y="130" width="200" height="56" rx="12" class="sv-key"/><text x="300" y="164" class="sv-keyt">Quỹ (LP)</text>
    <line x1="130" y1="90" x2="250" y2="130" class="sv-up"/><text x="150" y="122" class="sv-txt sv-t-up" text-anchor="end">quyết định, ~1-2% vốn</text>
    <line x1="470" y1="90" x2="350" y2="130" class="sv-pv"/><text x="455" y="122" class="sv-txt sv-t-pv" text-anchor="start">vốn cam kết</text>
    ${[120, 250, 380, 480].map((x, i) => `<rect x="${x - 40}" y="220" width="80" height="36" rx="8" class="sv-panel"/><text x="${x}" y="244" class="sv-muted">Công ty ${i + 1}</text><line x1="300" y1="186" x2="${x}" y2="220" class="sv-axis"/>`).join('')}</svg>`;

  // Thanh so sánh hard và soft hurdle (lợi suất 12%, hurdle 8%, carry 20%).
  const hurdleBars = `<div class="sd-bars">
    <div class="sd-bar"><span class="sd-bar-l">Hard hurdle</span><span class="sd-bar-t"><i style="width:${(0.8 / 2.4) * 100}%"></i></span><b>0,8%</b></div>
    <div class="sd-bar"><span class="sd-bar-l">Soft hurdle</span><span class="sd-bar-t"><i style="width:100%"></i></span><b>2,4%</b></div></div>`;

  const slides = [
    S('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Alternative Investments · AI-01</div>
      <h2>Alternative Investment<br>Features, Methods, and Structures</h2>
      <p>Tài sản thay thế là gì, tiếp cận thế nào, tổ chức ra sao</p>
      <div class="sd-chips"><span>LOS 1 · Đặc điểm và nhóm</span><span>LOS 2 · Ba phương thức</span><span>LOS 3 · Sở hữu và phí</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Ba câu hỏi của buổi học', `<div class="sd-cols3">
      <div class="sd-card"><div class="sd-n">1</div><b>Khác gì?</b><p>Đặc điểm và các nhóm tài sản thay thế.</p><small>Thanh khoản, phí, tương quan</small></div>
      <div class="sd-card"><div class="sd-n">2</div><b>Vào bằng cửa nào?</b><p>Qua quỹ, đồng đầu tư hay trực tiếp.</p><small>Phí, kiểm soát, chuyên môn</small></div>
      <div class="sd-card"><div class="sd-n">3</div><b>Ai làm, ai trả?</b><p>GP và LP, cấu trúc quỹ, cơ chế phí.</p><small>Hurdle, high-water mark, waterfall</small></div></div>`),

    S('Truyền thống và thay thế', `<div class="sd-tbl grid"><div class="head"><span>Tiêu chí</span><span>Truyền thống</span><span>Thay thế</span></div>
      <div><span>Thanh khoản</span><span>Cao, hằng ngày</span><span>Thấp, khóa nhiều năm</span></div>
      <div><span>Quản lý</span><span>Có thể thụ động</span><span>Chủ động, chuyên sâu</span></div>
      <div><span>Phí</span><span>Thấp</span><span>Cao (2 và 20)</span></div>
      <div><span>Minh bạch</span><span>Cao</span><span>Bất cân xứng thông tin</span></div>
      <div><span>Dữ liệu</span><span>Dài, giá thị trường</span><span>Ngắn, giá thẩm định</span></div>
      <div><span>Tương quan</span><span>-</span><span>Thường thấp</span></div></div>`),

    S('Vì sao vẫn muốn nắm giữ?', `<div class="sd-cols3">
      <div class="sd-card acc"><b>Đa dạng hóa</b><p>Tương quan thấp với cổ phiếu, trái phiếu.</p></div>
      <div class="sd-card"><b>Nâng lợi suất</b><p>Phần bù kém thanh khoản và kỹ năng nhà quản lý.</p></div>
      <div class="sd-card"><b>Thu nhập, chống lạm phát</b><p>Tiền thuê, phí hạ tầng, giá hàng hóa.</p></div></div>
      <p class="sd-note">Đổi lại: kém thanh khoản, phí cao, khó đánh giá thành quả.</p>`),

    S('Bẫy: tương quan thấp có thật không?', `${smoothing()}
      <p class="sd-note">Định giá bằng thẩm định định kỳ làm lợi suất báo cáo <b>mượt</b> → biến động và tương quan đo được <b>thấp hơn thực tế</b>.</p>`),

    S('Bốn nhóm tài sản thay thế', `<div class="sd-grid4">
      <div class="sd-card"><b>Private capital</b><p>Private equity, private debt</p><small>AI-03</small></div>
      <div class="sd-card"><b>Real assets</b><p>Bất động sản, hạ tầng, tài nguyên</p><small>AI-04, AI-05</small></div>
      <div class="sd-card"><b>Hedge funds</b><p>Chiến lược linh hoạt, đòn bẩy, bán khống</p><small>AI-06</small></div>
      <div class="sd-card"><b>Digital assets</b><p>Tiền mã hóa, stablecoin, token</p><small>AI-07</small></div></div>`),

    S('Tài sản thay thế hay chiến lược thay thế?', `<div class="sd-cols2">
      <div class="sd-card"><b>Khác ở tài sản</b><p>Bất động sản, hạ tầng, rừng, hàng hóa, công ty chưa niêm yết.</p></div>
      <div class="sd-card acc"><b>Khác ở chiến lược</b><p>Hedge fund: thường nắm cổ phiếu, trái phiếu niêm yết nhưng dùng bán khống, đòn bẩy, chênh lệch giá.</p></div></div>
      <p class="sd-note">Ví dụ: quỹ mua cổ phiếu ngân hàng, bán khống cổ phiếu bất động sản → hedge fund (long/short equity).</p>`),

    S('Ba cửa vào: qua quỹ, đồng đầu tư, trực tiếp', spectrum),

    S('So sánh ba phương thức', `<div class="sd-tbl grid"><div class="head"><span></span><span>Qua quỹ</span><span>Đồng đầu tư</span><span>Trực tiếp</span></div>
      <div><span>Phí bên ngoài</span><span>Cao nhất</span><span>Thấp hơn</span><span>Không có</span></div>
      <div><span>Kiểm soát</span><span>Thấp</span><span>Trung bình</span><span>Cao nhất</span></div>
      <div><span>Chuyên môn</span><span>Ít</span><span>Trung bình</span><span>Nhiều nhất</span></div>
      <div><span>Đa dạng hóa</span><span>Cao</span><span>Thấp hơn</span><span>Thấp</span></div>
      <div><span>Phù hợp</span><span>Nhà đầu tư nhỏ</span><span>Nhà đầu tư lớn</span><span>Rất lớn</span></div></div>`),

    S('Rủi ro riêng của từng cửa', `<div class="sd-rule down">Qua quỹ: phí cao, ít kiểm soát, phụ thuộc chất lượng GP</div>
      <div class="sd-rule down">Đồng đầu tư: <b>adverse selection</b> - GP mời vào thương vụ kém hơn</div>
      <div class="sd-rule down">Trực tiếp: tập trung rủi ro, tốn chi phí xây đội ngũ</div>
      <p class="sd-note">"Trực tiếp không tốn phí" là sai: không trả phí bên ngoài, nhưng tốn chi phí nội bộ lớn.</p>`),

    S('Thẩm định nhà quản lý quỹ', `<div class="sd-steps"><span>① Tổ chức: sở hữu, ổn định, kế nhiệm</span><span>② Con người: kinh nghiệm, key person risk</span><span>③ Quy trình đầu tư: lợi thế, tính nhất quán</span><span>④ Vận hành: định giá, kiểm toán, lưu ký</span><span>⑤ Điều khoản: phí, khóa vốn, alignment</span></div>
      <p class="sd-note">Thành tích quá khứ khó kiểm chứng → thẩm định <b>vận hành</b> quan trọng ngang chiến lược.</p>`),

    S('Quỹ hợp danh hữu hạn: GP và LP', `${lpgp}
      <p class="sd-note">Quy định trong <b>LPA</b>; điều khoản riêng cho một LP nằm trong <b>side letter</b>.</p>`),

    S('Các cấu trúc khác', `<div class="sd-grid4">
      <div class="sd-card"><b>Master-feeder</b><p>Feeder trong và ngoài nước đổ vốn vào một master: thuế, quy mô.</p></div>
      <div class="sd-card"><b>Fund of funds</b><p>Đa dạng hóa, thẩm định hộ; <b>hai tầng phí</b>.</p></div>
      <div class="sd-card"><b>SMA</b><p>Tài khoản riêng: minh bạch, tùy biến, tự sở hữu tài sản.</p></div>
      <div class="sd-card"><b>Joint venture</b><p>Cùng sở hữu, cùng kiểm soát: bất động sản, hạ tầng.</p></div></div>`),

    S('Cơ chế phí và điều khoản bảo vệ LP', `<div class="sd-tbl grid"><div class="head"><span>Điều khoản</span><span>Một câu để nhớ</span></div>
      <div><span>Management fee</span><span>PE: trên vốn cam kết · HF: trên AUM</span></div>
      <div><span>Incentive fee / carry</span><span>Thường 20% lợi nhuận</span></div>
      <div><span>Hurdle (hard/soft)</span><span>LP nhận đủ ngưỡng trước</span></div>
      <div><span>Catch-up</span><span>GP đuổi kịp tỷ lệ 20%</span></div>
      <div><span>High-water mark</span><span>Bù lỗ cũ rồi mới có phí</span></div>
      <div><span>Waterfall, clawback</span><span>European có lợi cho LP; clawback đòi lại carry</span></div></div>`),

    S('Hard hay soft hurdle?', `<p class="sd-cap">Lợi suất sau phí quản lý 12%, hurdle 8%, phí thành quả 20%:</p>${hurdleBars}
      <div class="sd-cols2"><div class="sd-rule up">Hard: 20% × (12% - 8%) = <b>0,8%</b></div><div class="sd-rule down">Soft: 20% × 12% = <b>2,4%</b></div></div>
      <p class="sd-note">Tính toán chi tiết và lợi suất sau phí: <b>AI-02</b>.</p>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>Kém thanh khoản, phí cao, chủ động</span><span>Tương quan thấp một phần do làm mượt</span>
      <span>Hedge fund: thay thế do chiến lược</span><span>Quỹ → đồng đầu tư → trực tiếp: phí giảm, kiểm soát tăng</span>
      <span>Đồng đầu tư: adverse selection</span><span>GP vô hạn, LP hữu hạn</span>
      <span>Phí PE trên vốn cam kết</span><span>American waterfall có lợi cho GP</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 10 câu.</p>`),
  ];

  addDeck('AI-01', `Slide Features, Methods, Structures - bản thiết kế riêng (${slides.length} slide)`, slides);
}());
