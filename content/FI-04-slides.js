// Bộ slide tự thiết kế cho FI-04 Fixed-Income Markets for Corporate Issuers.
(function () {
  const L = window.LESSONS && window.LESSONS['FI-04'];
  if (!L) return;
  const { slide, addDeck, frac } = window.CFAH;
  const K = 'FI-04 · Corporate Issuers';
  const S = (title, body, opt = {}) => slide(title, body, Object.assign({ kicker: K }, opt));
  const vn = (x, d = 0) => x.toFixed(d).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  // Chi phí hạn mức cam kết 10 triệu, rút 4 triệu.
  function lineBars() {
    const fee = 0.0025 * 6e6, int = 0.06 * 4e6, tot = fee + int;
    const rows = [['Phí cam kết (6 triệu chưa dùng)', fee], ['Lãi (4 triệu đã rút)', int], ['Tổng', tot]];
    return `<div class="sd-bars">${rows.map(([lab, v]) => `<div class="sd-bar"><span class="sd-bar-l">${lab}</span><span class="sd-bar-t"><i style="width:${(v / tot) * 100}%"></i></span><b>${vn(v)}</b></div>`).join('')}</div>`;
  }

  // Repo: hai chân giao dịch.
  const repoLegs = `<svg viewBox="0 0 600 240" class="sv big" role="img" aria-label="Hai chân của một giao dịch repo">
    <text x="300" y="24" class="sv-muted">Hôm nay</text>
    <rect x="20" y="40" width="150" height="70" rx="14" class="sv-key"/><text x="95" y="72" class="sv-keyt">Dealer</text><text x="95" y="96" class="sv-muted">vay tiền (repo)</text>
    <rect x="430" y="40" width="150" height="70" rx="14" class="sv-panel"/><text x="505" y="72" class="sv-txt">Quỹ MMF</text><text x="505" y="96" class="sv-muted">cho vay (reverse)</text>
    <line x1="175" y1="62" x2="425" y2="62" class="sv-down"/><text x="300" y="54" class="sv-txt sv-t-down">trái phiếu →</text>
    <line x1="175" y1="92" x2="425" y2="92" class="sv-up"/><text x="300" y="116" class="sv-txt sv-t-up">← 9.898.000</text>
    <text x="300" y="150" class="sv-muted">Sau 7 ngày</text>
    <line x1="175" y1="172" x2="425" y2="172" class="sv-up"/><text x="300" y="164" class="sv-txt sv-t-up">← trái phiếu</text>
    <line x1="175" y1="200" x2="425" y2="200" class="sv-down"/><text x="300" y="226" class="sv-txt sv-t-down">9.907.623 →</text></svg>`;

  const slides = [
    S('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Fixed Income · FI-04</div>
      <h2>Fixed-Income Markets<br>for Corporate Issuers</h2>
      <p>Vốn ngắn hạn - repo - vốn dài hạn của issuer IG và HY</p>
      <div class="sd-chips"><span>LOS 1 · Vốn ngắn hạn</span><span>LOS 2 · Repo</span><span>LOS 3 · IG và HY dài hạn</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Tài trợ khớp kỳ hạn', `<div class="sd-cols2">
      <div class="sd-card"><b>Ngắn hạn: vốn lưu động</b><p>Hạn mức ngân hàng · vay có bảo đảm · factoring · thương phiếu · repo</p></div>
      <div class="sd-card acc"><b>Dài hạn: đầu tư</b><p>Trái phiếu IG · trái phiếu HY · leveraged loan · nợ tư nhân</p></div></div>
      <div class="sd-cols2"><div class="sd-rule up">Tín dụng tốt <b>không bảo đảm, rẻ, linh hoạt</b></div><div class="sd-rule down">Tín dụng yếu <b>bảo đảm, covenant, ngắn</b></div></div>`),

    S('Ba loại hạn mức ngân hàng', `<div class="sd-cols3">
      <div class="sd-card"><div class="sd-n">1</div><b>Uncommitted</b><p>Ngân hàng có thể từ chối</p><small>Không phí · kém chắc chắn nhất</small></div>
      <div class="sd-card"><div class="sd-n">2</div><b>Committed</b><p>Cam kết, thường dưới 1 năm</p><small>Phí trên phần chưa dùng</small></div>
      <div class="sd-card acc"><div class="sd-n">3</div><b>Revolver</b><p>Nhiều năm, rút - trả - rút lại</p><small>Dự phòng cho thương phiếu</small></div></div>
      <p class="sd-note">Từ trái sang phải: <b>chắc chắn hơn</b>, và thường <b>tốn phí hơn</b>.</p>`),

    S('Ví dụ: chi phí hạn mức cam kết', `<p class="sd-cap">Hạn mức 10 triệu, phí 0,25% phần chưa dùng, lãi MRR 4,5% + 1,5%, rút 4 triệu:</p>${lineBars()}
      <div class="sd-f sm">${frac('255.000', '4.000.000')} = <b>6,375%</b> trên tiền đã dùng</div>`),

    S('Vay có bảo đảm và factoring', `<div class="sd-cols2">
      <div class="sd-card"><b>Asset-based loan</b><p>Cầm cố khoản phải thu, tồn kho. Vay một tỷ lệ trên giá trị tài sản.</p><small>Vẫn là khoản vay, doanh nghiệp giữ rủi ro thu nợ</small></div>
      <div class="sd-card acc"><b>Factoring</b><p><b>Bán</b> khoản phải thu cho factor. 2 triệu: ứng trước 85% = 1,7 triệu, phí 2% = 40.000.</p><small>Factor thu tiền, thường gánh rủi ro khách không trả</small></div></div>
      <p class="sd-note">Dành cho doanh nghiệp tín dụng thấp, dòng tiền bất ổn.</p>`),

    S('Thương phiếu (CP)', `<div class="sd-f sm">Giá = 50 × (1 - 4% × ${frac('90', '360')}) = <b>49,5 triệu</b></div>
      <div class="sd-cols2">
      <div><div class="sd-rule">Kỳ hạn <b>≤ 270 ngày (Mỹ)</b></div><div class="sd-rule">Bảo đảm <b>không có</b></div><div class="sd-rule">Issuer <b>tín dụng cao</b></div></div>
      <div><div class="sd-rule down">Rủi ro đảo nợ <b>không phát hành được CP mới</b></div><div class="sd-rule up">Phòng ngừa <b>backup line (revolver)</b></div></div></div>`),

    S('Định chế tài chính huy động ngắn hạn', `<div class="sd-tbl grid"><div class="head"><span></span><span>Tiền gửi bán lẻ</span><span>Vốn bán buôn</span></div>
      <div><span>Ví dụ</span><span>Không kỳ hạn, tiết kiệm, có kỳ hạn</span><span>Liên ngân hàng, CD, CP, repo</span></div>
      <div><span>Ổn định</span><span>Cao</span><span>Thấp, dễ rút khi có tin xấu</span></div>
      <div><span>Chi phí lãi</span><span>Thấp</span><span>Theo thị trường</span></div>
      <div><span>Ưu điểm</span><span>Nền vốn bền vững</span><span>Nhanh, khối lượng lớn</span></div></div>
      <p class="sd-note">Negotiable CD bán được trên thị trường thứ cấp; CD thường rút trước hạn bị phạt.</p>`),

    S('Repo: bán hôm nay, mua lại sau', `${repoLegs}
      <p class="sd-note">Về kinh tế: <b>khoản vay ngắn hạn có bảo đảm</b>. Bên vay tiền làm repo, bên cho vay làm reverse repo.</p>`),

    S('Ví dụ: repo 7 ngày', `<div class="sd-steps">
      <span>① Giá trị trái phiếu: 10 triệu mệnh giá × 101% = <b>10.100.000</b></span>
      <span>② Tiền vay = 10.100.000 × (1 - 2%) = <b>9.898.000</b></span>
      <span>③ Giá mua lại = 9.898.000 × (1 + 5% × 7/360) = <b>9.907.623,06</b></span>
      <span>④ Lãi repo = <b>9.623,06 USD</b></span></div>
      <p class="sd-note">Haircut 2% là đệm an toàn cho bên cho vay nếu giá trái phiếu giảm.</p>`),

    S('Điều gì làm repo rate và haircut thay đổi?', `<div class="sd-cols2">
      <div><p class="sd-cap">Repo rate thấp hơn khi:</p><div class="sd-rule up">Tài sản <b>an toàn, thanh khoản</b></div><div class="sd-rule up">Kỳ hạn <b>ngắn</b></div><div class="sd-rule up">Tài sản <b>được giao</b></div><div class="sd-rule up">Collateral <b>special</b></div></div>
      <div><p class="sd-cap">Haircut cao hơn khi:</p><div class="sd-rule down">Kỳ hạn repo <b>dài</b></div><div class="sd-rule down">Tài sản <b>biến động, kém thanh khoản</b></div><div class="sd-rule down">Người vay <b>tín dụng kém</b></div></div></div>`),

    S('Repo: ai dùng, rủi ro gì?', `<div class="sd-cols2">
      <div class="sd-card"><b>Công dụng, lợi ích</b><p>Dealer tài trợ vị thế · vay chứng khoán để bán khống · ngân hàng trung ương bơm, hút thanh khoản · quỹ gửi tiền có bảo đảm · chi phí thấp hơn vay không bảo đảm</p></div>
      <div class="sd-card acc"><b>Rủi ro</b><p>Vỡ nợ đối tác · tài sản đảm bảo mất giá · tranh chấp ký quỹ · pháp lý (thực thi khi phá sản) · thanh toán</p></div></div>
      <p class="sd-note">Có bảo đảm <b>không có nghĩa là không rủi ro</b>: khi căng thẳng, haircut bị nâng và nguồn vốn repo có thể biến mất.</p>`),

    S('Vốn dài hạn: IG và HY', `<div class="sd-tbl grid"><div class="head"><span>Đặc điểm</span><span>Investment grade</span><span>High yield</span></div>
      <div><span>Spread</span><span>Thấp</span><span>Cao, gần cổ phiếu</span></div>
      <div><span>Nguồn chính</span><span>Trái phiếu, MTN, shelf</span><span>Leveraged loan, trái phiếu HY</span></div>
      <div><span>Bảo đảm</span><span>Chủ yếu không</span><span>Thường có</span></div>
      <div><span>Covenant</span><span>Ít</span><span>Nhiều, chặt</span></div>
      <div><span>Kỳ hạn</span><span>Đến 30 năm+</span><span>Thường 5-10 năm</span></div>
      <div><span>Call</span><span>Make-whole</span><span>Khóa vài năm, phí giảm dần</span></div></div>
      <p class="sd-note">500 triệu: IG 4,5% = 22,5 triệu/năm; HY 8% = 40 triệu/năm → chênh <b>17,5 triệu</b>. IG trải đều kỳ hạn (laddering) để giảm rủi ro tái tài trợ.</p>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>Revolver: chắc chắn nhất, nhiều năm</span><span>Phí cam kết tính trên phần chưa dùng</span>
      <span>Factoring = bán khoản phải thu</span><span>CP: không bảo đảm, cần backup line</span>
      <span>Bán buôn: linh hoạt nhưng dễ rút</span><span>Repo = vay có bảo đảm</span>
      <span>Tiền vay = giá trị × (1 - haircut)</span><span>HY: bảo đảm, covenant, kỳ hạn ngắn</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 10 câu, mục tiêu ≥ 7 câu đúng.</p>`),
  ];

  addDeck('FI-04', `Slide Corporate Issuers - bản thiết kế riêng (${slides.length} slide)`, slides);
}());
