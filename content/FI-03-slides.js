// Bộ slide tự thiết kế cho FI-03 Fixed-Income Issuance and Trading.
(function () {
  const L = window.LESSONS && window.LESSONS['FI-03'];
  if (!L) return;
  const { slide, addDeck } = window.CFAH;
  const K = 'FI-03 · Issuance and Trading';
  const S = (title, body, opt = {}) => slide(title, body, Object.assign({ kicker: K }, opt));
  const fmt = (x, d = 1) => x.toFixed(d).replace('.', ',');

  // Thang xếp hạng S&P / Moody's với ranh giới IG - HY.
  function ladder() {
    const r = [['AAA', 'Aaa'], ['AA', 'Aa'], ['A', 'A'], ['BBB-', 'Baa3'], ['BB+', 'Ba1'], ['B', 'B'], ['CCC', 'Caa']];
    const W = 600, H = 200, x0 = 30, w = (W - 2 * x0) / r.length;
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv big" role="img" aria-label="Ranh giới investment grade và high yield">`;
    r.forEach(([sp, md], i) => {
      const x = x0 + i * w, ig = i < 4;
      s += `<rect x="${x + 4}" y="50" width="${w - 8}" height="70" rx="10" class="${ig ? 'sv-key' : 'sv-panel'}"/>`;
      s += `<text x="${x + w / 2}" y="82" class="${ig ? 'sv-keyt' : 'sv-txt'}">${sp}</text><text x="${x + w / 2}" y="106" class="sv-muted">${md}</text>`;
    });
    const xb = x0 + 4 * w;
    s += `<line x1="${xb}" y1="30" x2="${xb}" y2="150" class="sv-down"/>`;
    s += `<text x="${(x0 + xb) / 2}" y="34" class="sv-txt sv-t-up">Investment grade</text><text x="${(xb + W - x0) / 2}" y="34" class="sv-txt sv-t-down">High yield</text>`;
    s += `<text x="${xb}" y="180" class="sv-muted">IG → HY: "fallen angel"</text>`;
    return `${s}</svg>`;
  }

  // Tỷ trọng chỉ số trước và sau khi A vay thêm.
  function weightBars() {
    const rows = [['A trước (200 / 500)', 200 / 500], ['A sau (400 / 700)', 400 / 700], ['B sau (300 / 700)', 300 / 700]];
    return `<div class="sd-bars">${rows.map(([lab, v]) => `<div class="sd-bar"><span class="sd-bar-l">${lab}</span><span class="sd-bar-t"><i style="width:${v * 100}%"></i></span><b>${fmt(v * 100)}%</b></div>`).join('')}</div>`;
  }

  // Báo giá dealer: bid và ask.
  const quote = `<svg viewBox="0 0 600 170" class="sv big" role="img" aria-label="Dealer báo giá mua và bán">
    <circle cx="90" cy="85" r="44" class="sv-node"/><text x="90" y="92" class="sv-txt">Nhà ĐT</text>
    <rect x="410" y="45" width="160" height="80" rx="14" class="sv-key"/><text x="490" y="92" class="sv-keyt">Dealer</text>
    <line x1="140" y1="65" x2="405" y2="65" class="sv-down"/><text x="272" y="52" class="sv-txt sv-t-down">Mua ở ask 98,65</text>
    <line x1="140" y1="110" x2="405" y2="110" class="sv-up"/><text x="272" y="140" class="sv-txt sv-t-up">Bán ở bid 98,40</text></svg>`;

  const slides = [
    S('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Fixed Income · FI-03</div>
      <h2>Fixed-Income<br>Issuance and Trading</h2>
      <p>Bản đồ thị trường - chỉ số - sơ cấp và thứ cấp</p>
      <div class="sd-chips"><span>LOS 1 · Phân khúc, người tham gia</span><span>LOS 2 · Chỉ số trái phiếu</span><span>LOS 3 · So sánh với cổ phiếu</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Sáu cách chia thị trường', `<div class="sd-cols3">
      <div class="sd-card"><div class="sd-n">1</div><b>Issuer</b><p>Chính phủ · doanh nghiệp · chứng khoán hóa</p></div>
      <div class="sd-card"><div class="sd-n">2</div><b>Tín dụng</b><p>Investment grade · high yield</p></div>
      <div class="sd-card"><div class="sd-n">3</div><b>Kỳ hạn</b><p>≤ 1 năm · trung hạn · dài hạn</p></div>
      <div class="sd-card"><div class="sd-n">4</div><b>Đồng tiền</b><p>Chủ yếu USD, EUR</p></div>
      <div class="sd-card"><div class="sd-n">5</div><b>Địa lý</b><p>Phát triển · mới nổi</p></div>
      <div class="sd-card acc"><div class="sd-n">6</div><b>Khác</b><p>FRN, gắn lạm phát, xanh, ESG</p></div></div>`),

    S('Ranh giới IG - HY', `${ladder()}
      <p class="sd-note">Nhiều quỹ hưu trí, bảo hiểm chỉ được giữ IG → bị hạ xuống HY thường kéo theo <b>bán tháo</b>.</p>`),

    S('Ví dụ: xếp một trái phiếu vào ô', `<div class="sd-card acc"><b>Ngân hàng Việt Nam, Moody's Ba3, 5 năm, USD, lãi cố định</b></div>
      <div class="sd-tbl grid"><div class="head"><span>Tiêu chí</span><span>Ô</span></div>
      <div><span>Issuer</span><span>Doanh nghiệp tài chính</span></div>
      <div><span>Tín dụng</span><span>High yield (dưới Baa3)</span></div>
      <div><span>Kỳ hạn</span><span>Trung hạn</span></div>
      <div><span>Đồng tiền · địa lý</span><span>USD · mới nổi</span></div></div>`),

    S('Ai mua phân khúc nào?', `<div class="sd-tbl grid"><div class="head"><span>Nhà đầu tư</span><span>Mục tiêu</span><span>Phân khúc</span></div>
      <div><span>Ngân hàng trung ương</span><span>Chính sách tiền tệ</span><span>CP ngắn, trung hạn</span></div>
      <div><span>Hưu trí, bảo hiểm</span><span>Khớp nghĩa vụ dài</span><span>Dài hạn, IG</span></div>
      <div><span>Ngân hàng</span><span>Thanh khoản, lãi suất</span><span>CP mọi kỳ hạn</span></div>
      <div><span>Doanh nghiệp</span><span>Gửi tiền nhàn rỗi</span><span>Thương phiếu, repo</span></div>
      <div><span>Quỹ, hedge fund</span><span>Vượt chỉ số</span><span>Mọi loại, cả HY, EM</span></div></div>
      <p class="sd-note">CP = trái phiếu chính phủ. Cá nhân chủ yếu mua <b>gián tiếp</b> qua quỹ, ETF.</p>`),

    S('Các loại chỉ số trái phiếu', `<div class="sd-grid4">
      <div class="sd-card"><b>Thị trường rộng</b><p>Aggregate: chính phủ + doanh nghiệp + chứng khoán hóa</p></div>
      <div class="sd-card"><b>Theo phân khúc</b><p>Chính phủ, doanh nghiệp, MBS; IG, HY</p></div>
      <div class="sd-card"><b>Theo kỳ hạn, địa lý</b><p>1-3 năm, dài hạn; EM bằng USD hoặc nội tệ</p></div>
      <div class="sd-card acc"><b>Chuyên biệt</b><p>Gắn lạm phát, xanh, ESG, FRN</p></div></div>`),

    S('Chỉ số trái phiếu khác chỉ số cổ phiếu', `<div class="sd-cols2">
      <div><div class="sd-rule">Thành phần <b>nhiều hơn rất nhiều</b></div><div class="sd-rule">Thay đổi <b>liên tục</b> (đáo hạn, phát hành)</div></div>
      <div><div class="sd-rule down">Định giá <b>báo giá dealer, matrix</b></div><div class="sd-rule down">Sao chép <b>tốn kém → chọn mẫu</b></div></div></div>
      <p class="sd-note">Một công ty có một mã cổ phiếu nhưng có thể có hàng chục đợt trái phiếu khác kỳ hạn, coupon.</p>`),

    S('Tỷ trọng theo nợ: vay nhiều, tỷ trọng lớn', `<p class="sd-cap">Chỉ số chỉ gồm A (nợ 200) và B (nợ 300); A vay thêm 200:</p>${weightBars()}
      <p class="sd-note">Issuer vay nhiều hơn, có thể <b>rủi ro hơn</b>, lại chiếm tỷ trọng lớn hơn trong chỉ số.</p>`),

    S('Thị trường sơ cấp: các kênh phát hành', `<div class="sd-grid4">
      <div class="sd-card"><b>Underwritten</b><p>Ngân hàng mua hết rồi bán lại: <b>ngân hàng</b> gánh rủi ro</p></div>
      <div class="sd-card"><b>Best-efforts</b><p>Ngân hàng làm đại lý: <b>issuer</b> gánh rủi ro</p></div>
      <div class="sd-card"><b>Shelf registration</b><p>Đăng ký một lần, phát hành nhiều đợt</p></div>
      <div class="sd-card acc"><b>Private placement</b><p>Nhà đầu tư đủ điều kiện, thủ tục nhẹ, kém thanh khoản</p></div></div>
      <p class="sd-note">Book building chốt giá · grey market phát hiện giá trước ngày phát hành · chính phủ dùng đấu thầu (FI-05).</p>`),

    S('Ví dụ: phí bảo lãnh', `<div class="sd-steps">
      <span>① Tổ hợp mua 500 triệu mệnh giá ở <b>99,50</b> → issuer nhận <b>497,5 triệu</b></span>
      <span>② Bán lại cho nhà đầu tư ở <b>100</b></span>
      <span>③ Gross spread = 0,50% × 500 = <b>2,5 triệu</b></span>
      <span>④ Thị trường xấu, bán dưới 99,50 → <b>tổ hợp lỗ</b></span></div>`),

    S('Thị trường thứ cấp: hỏi giá dealer', `${quote}
      <div class="sd-keys"><span>Chênh lệch 0,25 / 100</span><span>5 triệu mệnh giá → <b>12.500 USD</b></span><span>≈ <b>25,4 bps</b> giá giữa</span></div>
      <p class="sd-note">Cổ phiếu lớn 50,00 / 50,02: khoảng 4 bps. Trái phiếu chính phủ on-the-run thanh khoản nhất; settlement thường T+1 đến T+2.</p>`),

    S('Trái phiếu và cổ phiếu', `<div class="sd-tbl grid"><div class="head"><span>Khía cạnh</span><span>Trái phiếu</span><span>Cổ phiếu</span></div>
      <div><span>Chứng khoán / issuer</span><span>Nhiều đợt</span><span>Thường một loại</span></div>
      <div><span>Tần suất phát hành</span><span>Thường xuyên</span><span>IPO một lần</span></div>
      <div><span>Nơi giao dịch</span><span>OTC, dealer</span><span>Sở giao dịch</span></div>
      <div><span>Cơ chế</span><span>Quote-driven</span><span>Order-driven</span></div>
      <div><span>Bid-ask</span><span>Rộng hơn</span><span>Hẹp</span></div>
      <div><span>Người mua chính</span><span>Định chế</span><span>Định chế và cá nhân</span></div></div>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>BBB- / Baa3 vẫn là IG</span><span>Fallen angel: IG → HY</span>
      <span>Hưu trí, bảo hiểm: dài hạn, IG</span><span>Chỉ số: nhiều thành phần, turnover cao</span>
      <span>Tỷ trọng theo nợ đang lưu hành</span><span>Underwritten: ngân hàng gánh rủi ro</span>
      <span>Private placement: kém thanh khoản</span><span>Thứ cấp: OTC, bid-ask rộng hơn</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 10 câu, mục tiêu ≥ 7 câu đúng.</p>`),
  ];

  addDeck('FI-03', `Slide Issuance and Trading - bản thiết kế riêng (${slides.length} slide)`, slides);
}());
