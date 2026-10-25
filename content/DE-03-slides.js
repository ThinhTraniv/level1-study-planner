// Bộ slide tự thiết kế cho DE-03 Derivative Benefits, Risks, and Issuer and Investor Uses.
(function () {
  const L = window.LESSONS && window.LESSONS['DE-03'];
  if (!L) return;
  const { slide, addDeck, tl } = window.CFAH;
  const K = 'DE-03 · Benefits, Risks and Uses';
  const S = (title, body, opt = {}) => slide(title, body, Object.assign({ kicker: K }, opt));
  const fmt = (x, d = 0) => x.toFixed(d).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  // Rủi ro cơ sở: chi phí tăng thêm và phần futures bù được.
  function basisBars() {
    const q = 1000000, rows = [['Chi phí nhiên liệu bay tăng', q * 0.5], ['Lời futures dầu sưởi', q * 0.35], ['Phần hở (basis risk)', q * (0.5 - 0.35)]];
    return `<div class="sd-bars">${rows.map(([lab, v]) => `<div class="sd-bar"><span class="sd-bar-l">${lab}</span><span class="sd-bar-t"><i style="width:${(v / 500000) * 100}%"></i></span><b>${fmt(v)}</b></div>`).join('')}</div>`;
  }

  // Lợi nhuận khi đáo hạn của protective put và covered call, tính bằng JS.
  function stratChart(kind) {
    const W = 600, H = 300, l = 56, r = 585, t = 18, b = 254;
    const pp = s => Math.max(s, 75) - 80 - 2; // cổ phiếu 80 + put 75 phí 2
    const cc = s => Math.min(s, 45) - 40 + 1.5; // cổ phiếu 40 + bán call 45 phí 1,5
    const f = kind === 'pp' ? pp : cc;
    const x0 = kind === 'pp' ? 50 : 20, x1 = kind === 'pp' ? 110 : 60, y0 = -20, y1 = 30;
    const xs = s => l + ((s - x0) / (x1 - x0)) * (r - l), ys = v => b - ((v - y0) / (y1 - y0)) * (b - t);
    const stock = s => s - (kind === 'pp' ? 80 : 40);
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv big" role="img" aria-label="${kind === 'pp' ? 'Protective put' : 'Covered call'}">`;
    [-20, -10, 10, 20, 30].forEach(v => { s += `<line x1="${l}" y1="${ys(v)}" x2="${r}" y2="${ys(v)}" class="sv-grid"/><text x="${l - 8}" y="${ys(v) + 6}" class="sv-muted" text-anchor="end">${v}</text>`; });
    s += `<line x1="${l}" y1="${ys(0)}" x2="${r}" y2="${ys(0)}" class="sv-axis"/><text x="${l - 8}" y="${ys(0) + 6}" class="sv-muted" text-anchor="end">0</text>`;
    for (let v = x0; v <= x1; v += 10) s += `<text x="${xs(v)}" y="${b + 24}" class="sv-muted">${v}</text>`;
    const pts = g => [x0, kind === 'pp' ? 75 : 45, x1].map(v => `${xs(v).toFixed(1)},${ys(Math.max(y0, Math.min(y1, g(v)))).toFixed(1)}`).join(' ');
    s += `<polyline points="${pts(stock)}" class="sv-dash" style="fill:none"/><polyline points="${pts(f)}" class="sv-curve"/>`;
    if (kind === 'pp') s += `<text x="${xs(62)}" y="${ys(-7) + 26}" class="sv-txt sv-t-down">lỗ tối đa -7</text><text x="${xs(100)}" y="${ys(18) - 12}" class="sv-txt">cổ phiếu + put</text>`;
    else s += `<text x="${xs(52)}" y="${ys(6.5) - 14}" class="sv-txt sv-t-up">lời tối đa 6,5</text><text x="${xs(30)}" y="${ys(-8.5) + 30}" class="sv-txt">cổ phiếu + bán call</text>`;
    return `${s}</svg>`;
  }

  // Sơ đồ đổi nợ cố định thành thả nổi.
  const swapFix = `<svg viewBox="0 0 600 210" class="sv big" role="img" aria-label="Swap đổi nợ cố định thành thả nổi">
    <rect x="20" y="70" width="140" height="70" rx="12" class="sv-panel"/><text x="90" y="100" class="sv-txt">Trái chủ</text><text x="90" y="124" class="sv-muted">bondholders</text>
    <rect x="230" y="70" width="140" height="70" rx="12" class="sv-key"/><text x="300" y="112" class="sv-keyt">Công ty</text>
    <rect x="440" y="70" width="140" height="70" rx="12" class="sv-panel"/><text x="510" y="112" class="sv-txt">Dealer</text>
    <line x1="225" y1="105" x2="168" y2="105" class="sv-down"/><text x="195" y="60" class="sv-txt sv-t-down">5,00%</text>
    <line x1="435" y1="88" x2="378" y2="88" class="sv-up"/><text x="405" y="60" class="sv-txt sv-t-up">4,60%</text>
    <line x1="378" y1="124" x2="435" y2="124" class="sv-down"/><text x="405" y="162" class="sv-txt sv-t-down">MRR</text>
    <text x="300" y="198" class="sv-txt">Ròng: 5,00% - 4,60% + MRR = MRR + 0,40%</text></svg>`;

  const slides = [
    S('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Derivatives · DE-03</div>
      <h2>Derivative Benefits, Risks,<br>and Issuer and Investor Uses</h2>
      <p>Vì sao dùng phái sinh - và dùng thì nguy hiểm ở đâu</p>
      <div class="sd-chips"><span>LOS 1 · Lợi ích và rủi ro</span><span>LOS 2 · Issuer và investor</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Một đặc điểm, hai mặt', `<div class="sd-big">Đòn bẩy · Chi phí thấp · Linh hoạt</div>
      <div class="sd-cols2"><div><div class="sd-rule up">Tách và chuyển rủi ro <b>lợi ích</b></div><div class="sd-rule up">Ít vốn, giao dịch nhanh <b>lợi ích</b></div></div>
      <div><div class="sd-rule down">Lỗ nhanh, nhu cầu tiền mặt <b>rủi ro</b></div><div class="sd-rule down">Phức tạp, lan truyền <b>rủi ro</b></div></div></div>`),

    S('Lợi ích 1: chuyển giao rủi ro', `<div class="sd-cols3">
      <div class="sd-card"><b>Hãng hàng không</b><p>Khóa giá nhiên liệu mà không cần bồn chứa dầu.</p></div>
      <div class="sd-card"><b>Nhà xuất khẩu</b><p>Khóa tỷ giá cho doanh thu USD tháng sau.</p></div>
      <div class="sd-card"><b>Quỹ trái phiếu</b><p>Bán rủi ro vỡ nợ của một công ty bằng CDS.</p></div></div>
      <p class="sd-note">Tách <b>một rủi ro cụ thể</b> khỏi tài sản để giữ, giảm hoặc bán đi, không cần mua bán chính tài sản.</p>`),

    S('Lợi ích 2-4: thông tin, vận hành, hiệu quả', `<div class="sd-cols3">
      <div class="sd-card"><div class="sd-n">2</div><b>Phát hiện thông tin</b><p>Giá futures phản ánh tin mới sớm; giá option cho biến động ngầm định.</p></div>
      <div class="sd-card"><div class="sd-n">3</div><b>Vận hành</b><p>Chi phí thấp, thanh khoản cao, dễ bán khống, đòn bẩy.</p></div>
      <div class="sd-card"><div class="sd-n">4</div><b>Thị trường hiệu quả</b><p>Arbitrage rẻ và nhanh kéo giá về đúng giá trị.</p></div></div>
      <p class="sd-note">Bẫy: "payoff giống hệt tài sản cơ sở" <b>không</b> phải lợi ích; lợi ích là tạo payoff <b>mới</b>.</p>`),

    S('Năm rủi ro cần nhớ', `<div class="sd-tbl grid">
      <div class="head"><span>Rủi ro</span><span>Một câu</span></div>
      <div><span>Thiếu minh bạch</span><span>Hợp đồng phức tạp, khó định giá</span></div>
      <div><span>Basis risk</span><span>Công cụ phòng hộ không khớp tài sản</span></div>
      <div><span>Liquidity risk</span><span>Phải trả tiền mặt (ký quỹ) ngay</span></div>
      <div><span>Counterparty risk</span><span>Bên kia không trả (OTC)</span></div>
      <div><span>Systemic risk</span><span>Đòn bẩy, liên kết → lan truyền</span></div></div>`),

    S('Basis risk: phòng hộ "gần đúng"', `<p class="sd-cap">Hãng bay mua 1.000.000 gallon; nhiên liệu bay +0,50 USD, futures dầu sưởi chỉ +0,35 USD:</p>${basisBars()}
      <p class="sd-note">Phòng hộ bằng tài sản <b>khác</b> (hoặc khác ngày, khác nơi) luôn để lại phần hở.</p>`),

    S('Liquidity risk: đúng về kinh tế, thiếu về tiền', `${tl(2, [{ t: 0, label: 'Short futures vàng ở 2.000', cls: 'pv' }, { t: 1, label: 'Giá 2.150: nộp ký quỹ 1.500.000', cls: 'down' }, { t: 2, label: 'Bán vàng giá cao', cls: 'up' }], { h: 150, ticks: ['hôm nay', 'tháng 3', 'năm sau'] })}
      <p class="sd-note">100 hợp đồng × 100 ounce × 150 = <b>1.500.000 USD</b> phải trả <b>bằng tiền mặt ngay</b>, trong khi vàng chưa khai thác thì chưa thành tiền.</p>`),

    S('Doanh nghiệp: ba loại hedge accounting', `<div class="sd-cols3">
      <div class="sd-card"><b>Fair value hedge</b><p>Ổn định <b>giá trị</b> khoản mục cố định.</p><small>Nợ cố định + swap nhận cố định</small></div>
      <div class="sd-card acc"><b>Cash flow hedge</b><p>Ổn định <b>dòng tiền</b> tương lai.</p><small>Nợ thả nổi + swap trả cố định; forward cho doanh thu ngoại tệ dự kiến</small></div>
      <div class="sd-card"><b>Net investment hedge</b><p>Rủi ro tỷ giá của <b>vốn ở công ty con</b> nước ngoài.</p><small>Forward bán ngoại tệ, swap tiền tệ</small></div></div>`),

    S('Đổi nợ cố định thành thả nổi', `${swapFix}
      <p class="sd-note">Ngược lại: nợ MRR + 1,20% + swap <b>trả cố định 3,80%</b> → chi phí cố định <b>5,00%</b> (cash flow hedge).</p>`),

    S('Nhà đầu tư: bốn cách dùng', `<div class="sd-grid4">
      <div class="sd-card"><b>Sao chép rẻ</b><p>Futures chỉ số + tín phiếu thay cho mua cả rổ.</p></div>
      <div class="sd-card"><b>Chiến lược chủ động</b><p>Thể hiện quan điểm về giá, lãi suất, biến động.</p></div>
      <div class="sd-card"><b>Chỉnh rủi ro danh mục</b><p>Futures/swap lãi suất đổi duration; forward phòng hộ tỷ giá.</p></div>
      <div class="sd-card acc"><b>Bảo vệ, tạo thu nhập</b><p>Protective put, covered call.</p></div></div>`),

    S('Protective put và covered call', `<div class="sd-cols2">
      <div><p class="sd-cap">Cổ phiếu 80 + mua put 75 (phí 2)</p>${stratChart('pp')}</div>
      <div><p class="sd-cap">Cổ phiếu 40 + bán call 45 (phí 1,5)</p>${stratChart('cc')}</div></div>
      <p class="sd-note">Nét đứt: chỉ giữ cổ phiếu. Put <b>chặn dưới</b> mức lỗ (tốn phí); call bán <b>chặn trên</b> mức lời (nhận phí).</p>`),

    S('Issuer và investor', `<div class="sd-tbl grid">
      <div class="head"><span>Tiêu chí</span><span>Issuer</span><span>Investor</span></div>
      <div><span>Mục tiêu</span><span>Phòng hộ, ổn định lợi nhuận</span><span>Phòng hộ + tạo vị thế</span></div>
      <div><span>Rủi ro</span><span>Lãi suất, tỷ giá, hàng hóa</span><span>Rủi ro thị trường danh mục</span></div>
      <div><span>Thị trường</span><span>Chủ yếu OTC</span><span>Sàn và OTC</span></div>
      <div><span>Kế toán</span><span>Hedge accounting</span><span>Giá trị hợp lý</span></div>
      <div><span>Công cụ</span><span>Swap, forward</span><span>Futures, option, CDS</span></div></div>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>Lợi ích số 1: chuyển giao rủi ro</span><span>Chi phí thấp, thanh khoản, dễ short</span>
      <span>Basis risk: phòng hộ không khớp</span><span>Liquidity risk: cần tiền mặt ngay</span>
      <span>Systemic risk: đòn bẩy + liên kết</span><span>Fair value: khoản mục cố định</span>
      <span>Cash flow: thả nổi, giao dịch dự kiến</span><span>Investor: sàn + OTC, nhiều mục đích</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 10 câu, mục tiêu ≥ 7 câu đúng.</p>`),
  ];

  addDeck('DE-03', `Slide Benefits, Risks and Uses - bản thiết kế riêng (${slides.length} slide)`, slides);
}());
