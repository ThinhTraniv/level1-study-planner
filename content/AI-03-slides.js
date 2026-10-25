// Bộ slide tự thiết kế cho AI-03 Investments in Private Capital: Equity and Debt.
(function () {
  const L = window.LESSONS && window.LESSONS['AI-03'];
  if (!L) return;
  const { slide, addDeck } = window.CFAH;
  const K = 'AI-03 · Private Capital';
  const S = (title, body, opt = {}) => slide(title, body, Object.assign({ kicker: K }, opt));

  // Bậc thang các giai đoạn VC.
  const vcStairs = (() => {
    const st = ['Angel', 'Seed', 'Early', 'Later', 'Mezzanine'];
    const sub = ['ý tưởng', 'sản phẩm', 'bắt đầu bán', 'mở rộng', 'trước IPO'];
    let s = `<svg viewBox="0 0 600 260" class="sv" role="img" aria-label="Các giai đoạn venture capital">`;
    st.forEach((n, i) => {
      const x = 20 + i * 114, h = 50 + i * 36, y = 200 - h;
      s += `<rect x="${x}" y="${y}" width="104" height="${h}" rx="8" class="${i === 4 ? 'sv-key' : 'sv-panel'}"/><text x="${x + 52}" y="${y + 26}" class="sv-txt">${n}</text><text x="${x + 52}" y="${y + 48}" class="sv-muted">${sub[i]}</text>`;
    });
    s += `<line x1="580" y1="230" x2="30" y2="230" class="sv-down"/><text x="300" y="252" class="sv-txt sv-t-down">Rủi ro và lợi suất yêu cầu: cao nhất ở giai đoạn sớm</text>`;
    return `${s}</svg>`;
  })();

  // Thứ tự ưu tiên trong cấu trúc vốn (capital stack).
  const stack = `<svg viewBox="0 0 600 270" class="sv" role="img" aria-label="Thứ tự ưu tiên của các loại vốn">
    <rect x="40" y="10" width="300" height="60" rx="8" class="sv-panel"/><text x="190" y="46" class="sv-txt">Nợ cao cấp có bảo đảm</text>
    <rect x="40" y="76" width="300" height="56" rx="8" class="sv-panel"/><text x="190" y="110" class="sv-txt">Nợ thứ cấp, mezzanine</text>
    <rect x="40" y="138" width="300" height="56" rx="8" class="sv-key"/><text x="190" y="172" class="sv-keyt">Vốn chủ (PE)</text>
    <rect x="360" y="10" width="200" height="122" rx="8" class="sv-panel"/><text x="460" y="66" class="sv-txt">Unitranche</text><text x="460" y="90" class="sv-muted">một lãi suất pha trộn</text>
    <line x1="20" y1="190" x2="20" y2="14" class="sv-up"/><text x="40" y="230" class="sv-txt sv-t-up" text-anchor="start">Ưu tiên hoàn trả cao → rủi ro thấp → lợi suất thấp</text>
    <text x="40" y="256" class="sv-muted" text-anchor="start">Distressed: mua nợ (thường thứ cấp) của công ty sắp phá sản</text></svg>`;

  // Phổ rủi ro - lợi suất (thứ tự định tính, không phải số liệu).
  const spectrum = (() => {
    const pts = [['Direct lending', 1], ['Unitranche', 2], ['Mezzanine', 3], ['Venture/distressed debt', 4], ['LBO', 5], ['Venture capital', 6]];
    const X = i => 70 + (i - 1) * 96, Y = i => 230 - (i - 1) * 38;
    let s = `<svg viewBox="0 0 600 270" class="sv" role="img" aria-label="Phổ rủi ro và lợi suất của private capital">`;
    s += `<line x1="40" y1="250" x2="590" y2="250" class="sv-axis"/><line x1="40" y1="10" x2="40" y2="250" class="sv-axis"/>`;
    s += `<text x="580" y="268" class="sv-muted" text-anchor="end">Rủi ro →</text><text x="48" y="22" class="sv-muted" text-anchor="start">Lợi suất kỳ vọng ↑</text>`;
    s += `<polyline points="${pts.map(([, i]) => `${X(i)},${Y(i)}`).join(' ')}" class="sv-dash"/>`;
    pts.forEach(([n, i]) => { s += `<circle cx="${X(i)}" cy="${Y(i)}" r="8" class="${i <= 4 ? 'sv-dot' : 'sv-node up'}"/><text x="${X(i) + (i === 6 ? -12 : 12)}" y="${Y(i) - 12}" class="sv-txt" text-anchor="${i === 6 ? 'end' : 'start'}" style="font-size:15px">${n}</text>`; });
    return `${s}</svg>`;
  })();

  const slides = [
    S('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Alternative Investments · AI-03</div>
      <h2>Investments in Private Capital:<br>Equity and Debt</h2>
      <p>Mua doanh nghiệp, cho doanh nghiệp vay, ngoài sàn</p>
      <div class="sd-chips"><span>LOS 1 · Private equity</span><span>LOS 2 · Private debt</span><span>LOS 3 · Đa dạng hóa</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Hai phía của private capital', `<div class="sd-cols2">
      <div class="sd-card acc"><b>Private equity</b><p>Góp vốn chủ, hưởng phần tăng giá trị doanh nghiệp.</p><small>LBO, VC, growth equity</small></div>
      <div class="sd-card"><b>Private debt</b><p>Cho vay, hưởng lãi, ưu tiên hoàn trả trước chủ sở hữu.</p><small>Direct lending, mezzanine, distressed...</small></div></div>
      <p class="sd-note">Cấu trúc quỹ và phí: AI-01, AI-02. Ở đây: <b>tài sản bên trong quỹ</b>.</p>`),

    S('Các chiến lược private equity', `<div class="sd-grid4">
      <div class="sd-card"><b>LBO</b><p>Mua kiểm soát doanh nghiệp trưởng thành, phần lớn bằng nợ.</p></div>
      <div class="sd-card"><b>MBO / MBI</b><p>Dạng LBO, khác nhau ở đội quản lý.</p></div>
      <div class="sd-card"><b>Venture capital</b><p>Startup tăng trưởng cao, ít nợ, rủi ro rất cao.</p></div>
      <div class="sd-card"><b>Growth equity</b><p>Cổ phần thiểu số, doanh nghiệp cần vốn mở rộng.</p></div></div>`),

    S('MBO hay MBI?', `<div class="sd-cols2">
      <div class="sd-rule up">MBO: đội quản lý <b>hiện tại</b> cùng mua</div>
      <div class="sd-rule down">MBI: quỹ <b>thay</b> đội quản lý bằng người ngoài</div></div>
      <p class="sd-note">Quỹ LBO tạo giá trị: cải thiện hoạt động · đòn bẩy và lá chắn thuế · quản trị tốt hơn · mua rẻ bán đắt.</p>`),

    S('Các giai đoạn venture capital', vcStairs),

    S('Vì sao VC đòi lợi suất 40%?', `<div class="sd-steps"><span>① Kỳ vọng bán startup 100 sau 5 năm</span><span>② Post-money = 100 / 1,40<sup>5</sup> = <b>18,59</b></span><span>③ Đầu tư 5 → cần sở hữu 5 / 18,59 = <b>26,89%</b></span></div>
      <p class="sd-note">Phần lớn startup thất bại: số ít thương vụ thắng phải bù cho cả danh mục.</p>`),

    S('LBO bằng số', `<div class="sd-tbl grid"><div class="head"><span></span><span>Lúc mua</span><span>Sau 5 năm</span></div>
      <div><span>EBITDA</span><span>50</span><span>70</span></div>
      <div><span>Bội số</span><span>8x</span><span>9x</span></div>
      <div><span>EV</span><span>400</span><span>630</span></div>
      <div><span>Nợ</span><span>240</span><span>140</span></div>
      <div><span>Vốn chủ</span><span>160</span><span>490</span></div></div>
      <p class="sd-note">MOIC = <b>3,06x</b> · IRR = <b>25,09%</b> (5 <kbd>N</kbd>, -160 <kbd>PV</kbd>, 490 <kbd>FV</kbd>, <kbd>CPT</kbd> <kbd>I/Y</kbd>)</p>`),

    S('330 tăng thêm đến từ đâu?', `<div class="sd-bars">
      <div class="sd-bar"><span class="sd-bar-l">Tăng EBITDA</span><span class="sd-bar-t"><i style="width:100%"></i></span><b>160</b></div>
      <div class="sd-bar"><span class="sd-bar-l">Trả bớt nợ</span><span class="sd-bar-t"><i style="width:${(100 / 160) * 100}%"></i></span><b>100</b></div>
      <div class="sd-bar"><span class="sd-bar-l">Tăng bội số</span><span class="sd-bar-t"><i style="width:${(70 / 160) * 100}%"></i></span><b>70</b></div></div>
      <p class="sd-note">Không vay nợ: bỏ 400, thu 630 → MOIC chỉ 1,58x.</p>`),

    S('Năm cách thoái vốn', `<div class="sd-tbl grid"><div class="head"><span>Cách</span><span>Điểm chính</span></div>
      <div><span>Trade sale</span><span>Bán cho công ty cùng ngành, cộng hưởng</span></div>
      <div><span>Public listing</span><span>IPO, direct listing, SPAC; giá cao, tốn kém</span></div>
      <div><span>Recapitalization</span><span>Vay trả cổ tức, quỹ vẫn kiểm soát</span></div>
      <div><span>Secondary sale</span><span>Bán cho quỹ PE khác</span></div>
      <div><span>Write-off</span><span>Thất bại, thanh lý</span></div></div>`),

    S('Đặc tính đầu tư private equity', `<div class="sd-check">
      <span>Lợi suất kỳ vọng cao hơn cổ phiếu niêm yết</span><span>VC rủi ro nhất, LBO chịu rủi ro đòn bẩy</span>
      <span>Chênh lệch giữa GP tốt và kém rất lớn</span><span>Khóa vốn ~10 năm, J-curve</span>
      <span>Phụ thuộc vintage year</span><span>Định giá Level 3, làm mượt</span></div>`),

    S('Private debt: thứ tự ưu tiên', stack),

    S('Năm loại private debt', `<div class="sd-tbl grid"><div class="head"><span>Loại</span><span>Nhận diện nhanh</span></div>
      <div><span>Direct lending</span><span>Cao cấp, có bảo đảm, lãi thả nổi, covenants</span></div>
      <div><span>Venture debt</span><span>Startup có VC hậu thuẫn, kèm warrant</span></div>
      <div><span>Mezzanine</span><span>Thứ cấp, equity kicker, dùng trong LBO</span></div>
      <div><span>Distressed</span><span>Mua rẻ nợ công ty sắp phá sản, tái cấu trúc</span></div>
      <div><span>Unitranche</span><span>Một khoản, một lãi suất pha trộn</span></div></div>`),

    S('Hai phép tính nhanh', `<div class="sd-cols2">
      <div class="sd-card"><b>Unitranche</b><p>70% cao cấp lãi 6% + 30% thứ cấp lãi 11%</p><div class="sd-f sm">70% × 6% + 30% × 11% = <b>7,5%</b></div></div>
      <div class="sd-card acc"><b>Distressed debt</b><p>Mua 40, thu 65 sau 2 năm</p><div class="sd-f sm">(65/40)<sup>1/2</sup> - 1 = <b>27,48%</b></div></div></div>
      <p class="sd-note">Private debt thường lãi thả nổi → ít rủi ro lãi suất; rủi ro chính là tín dụng và thanh khoản.</p>`),

    S('Phổ rủi ro - lợi suất', `${spectrum}<p class="sd-note">Thứ tự định tính: nợ ưu tiên cao ít rủi ro nhất, VC rủi ro nhất.</p>`),

    S('Đa dạng hóa: thật nhưng nhỏ hơn báo cáo', `<div class="sd-cols2">
      <div><div class="sd-rule up">Tiếp cận doanh nghiệp, ngành không có trên sàn</div><div class="sd-rule up">Private debt: lãi cao, thả nổi</div><div class="sd-rule up">Rải vốn qua nhiều vintage</div></div>
      <div><div class="sd-rule down">Định giá Level 3 làm mượt lợi suất</div><div class="sd-rule down">Tương quan thật với cổ phiếu cao hơn</div><div class="sd-rule down">Cùng phụ thuộc chu kỳ kinh tế</div></div></div>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>MBO: quản lý cũ mua; MBI: thay quản lý</span><span>Growth equity: thiểu số, ít nợ</span>
      <span>Angel → seed → early → later → mezzanine</span><span>LBO: EBITDA, bội số, trả nợ</span>
      <span>Recap: rút tiền, giữ kiểm soát</span><span>Mezzanine debt khác mezzanine-stage</span>
      <span>Unitranche: một lãi suất pha trộn</span><span>Đa dạng hóa bị phóng đại do làm mượt</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 10 câu.</p>`),
  ];

  addDeck('AI-03', `Slide Private Capital - bản thiết kế riêng (${slides.length} slide)`, slides);
}());
