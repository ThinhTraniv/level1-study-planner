// Bộ slide tự thiết kế cho AI-05 Natural Resources.
(function () {
  const L = window.LESSONS && window.LESSONS['AI-05'];
  if (!L) return;
  const { slide, addDeck } = window.CFAH;
  const K = 'AI-05 · Natural Resources';
  const S = (title, body, opt = {}) => slide(title, body, Object.assign({ kicker: K }, opt));
  const fmt = (x, d = 2) => x.toFixed(d).replace('.', ',');

  // Đường cong futures: giá theo kỳ hạn (tháng), spot = 80.
  function curves() {
    const W = 600, H = 280, l = 50, r = 580, t = 20, b = 240;
    const X = m => l + (m / 12) * (r - l), Y = p => b - ((p - 70) / 20) * (b - t);
    const pts = f => Array.from({ length: 13 }, (_, m) => `${X(m).toFixed(1)},${Y(f(m)).toFixed(1)}`).join(' ');
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv" role="img" aria-label="Đường cong futures ở trạng thái contango và backwardation">`;
    [70, 75, 80, 85, 90].forEach(p => { s += `<line x1="${l}" y1="${Y(p)}" x2="${r}" y2="${Y(p)}" class="sv-grid"/><text x="${l - 8}" y="${Y(p) + 5}" class="sv-muted" text-anchor="end">${p}</text>`; });
    [0, 3, 6, 9, 12].forEach(m => { s += `<text x="${X(m)}" y="${b + 22}" class="sv-muted">${m}</text>`; });
    s += `<line x1="${l}" y1="${b}" x2="${r}" y2="${b}" class="sv-axis"/><line x1="${l}" y1="${t}" x2="${l}" y2="${b}" class="sv-axis"/>`;
    s += `<polyline points="${pts(m => 80 + 8 * (1 - Math.exp(-m / 6)) / (1 - Math.exp(-2)))}" class="sv-down" fill="none"/>`;
    s += `<polyline points="${pts(m => 80 - 7 * (1 - Math.exp(-m / 5)) / (1 - Math.exp(-2.4)))}" class="sv-up" fill="none"/>`;
    s += `<circle cx="${X(0)}" cy="${Y(80)}" r="7" class="sv-dot"/><text x="${X(0) + 12}" y="${Y(80) + 5}" class="sv-txt" text-anchor="start">Spot 80</text>`;
    s += `<text x="${X(12) - 4}" y="${Y(88) - 10}" class="sv-txt sv-t-down" text-anchor="end">Contango: F &gt; S</text>`;
    s += `<text x="${X(12) - 4}" y="${Y(73) + 24}" class="sv-txt sv-t-up" text-anchor="end">Backwardation: F &lt; S</text>`;
    s += `<text x="${(l + r) / 2}" y="${H - 4}" class="sv-muted">Kỳ hạn hợp đồng (tháng)</text>`;
    return `${s}</svg>`;
  }

  // Futures hội tụ về spot khi đáo hạn, spot đứng yên ở 80.
  function converge() {
    const W = 600, H = 260, l = 50, r = 580, t = 20, b = 220;
    const X = d => l + (d / 3) * (r - l), Y = p => b - ((p - 76) / 8) * (b - t);
    const path = f0 => Array.from({ length: 31 }, (_, i) => { const d = i / 10; return `${X(d).toFixed(1)},${Y(80 + (f0 - 80) * (1 - d / 3)).toFixed(1)}`; }).join(' ');
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv" role="img" aria-label="Giá futures hội tụ về giá giao ngay khi đáo hạn">`;
    [78, 80, 82].forEach(p => { s += `<line x1="${l}" y1="${Y(p)}" x2="${r}" y2="${Y(p)}" class="sv-grid"/><text x="${l - 8}" y="${Y(p) + 5}" class="sv-muted" text-anchor="end">${p}</text>`; });
    s += `<line x1="${l}" y1="${b}" x2="${r}" y2="${b}" class="sv-axis"/><line x1="${l}" y1="${t}" x2="${l}" y2="${b}" class="sv-axis"/>`;
    s += `<line x1="${l}" y1="${Y(80)}" x2="${r}" y2="${Y(80)}" class="sv-dash"/>`;
    s += `<polyline points="${path(82)}" class="sv-down" fill="none"/><polyline points="${path(78)}" class="sv-up" fill="none"/>`;
    s += `<text x="${X(0.1)}" y="${Y(82) - 10}" class="sv-txt sv-t-down" text-anchor="start">Contango 82 → 80: ${fmt((80 - 82) / 82 * 100)}%</text>`;
    s += `<text x="${X(0.1)}" y="${Y(78) + 26}" class="sv-txt sv-t-up" text-anchor="start">Backwardation 78 → 80: +${fmt((80 - 78) / 78 * 100)}%</text>`;
    s += `<text x="${X(0)}" y="${b + 22}" class="sv-muted">hôm nay</text><text x="${X(3)}" y="${b + 22}" class="sv-muted" text-anchor="end">đáo hạn (3 tháng)</text>`;
    return `${s}</svg>`;
  }

  const bars = (rows, lo, hi) => `<div class="sd-bars">${rows.map(([lab, v, txt]) => `<div class="sd-bar"><span class="sd-bar-l">${lab}</span><span class="sd-bar-t"><i style="width:${Math.min(100, Math.max(2, ((v - lo) / (hi - lo)) * 100))}%"></i></span><b>${txt}</b></div>`).join('')}</div>`;

  const slides = [
    S('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Alternative Investments · AI-05</div>
      <h2>Natural Resources</h2>
      <p>Đất, cây và hàng hóa: ba cách kiếm lời rất khác nhau</p>
      <div class="sd-chips"><span>LOS 1 · Raw land, timberland, farmland</span><span>LOS 2 · Hàng hóa</span><span>LOS 3 · Rủi ro, lợi nhuận, đa dạng hóa</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Bản đồ tài nguyên thiên nhiên', `<div class="sd-grid4">
      <div><b>Raw land</b><p>Đất trống: tăng giá + quyền phát triển</p></div>
      <div><b>Timberland</b><p>Rừng trồng: cây tự lớn mỗi năm</p></div>
      <div><b>Farmland</b><p>Đất nông nghiệp: thu hoạch + giá đất</p></div>
      <div><b>Commodities</b><p>Năng lượng, kim loại, nông sản: qua futures</p></div></div>
      <p class="sd-note">Ba loại đất giống bất động sản (kém thanh khoản, thẩm định). Hàng hóa <b>không có dòng tiền</b>: giá theo cung cầu.</p>`),

    S('Raw land: trả tiền để chờ', `<div class="sd-cols2">
      <div><div class="sd-rule down">Gần như không thu nhập</div><div class="sd-rule down">Chi phí nắm giữ: thuế đất, bảo vệ</div><div class="sd-rule up">Tăng giá khi đô thị hóa, hạ tầng mới, quy hoạch</div></div>
      <div class="sd-card acc"><b>Quyền chọn phát triển</b><p>Quyền, không phải nghĩa vụ, xây dựng khi thuận lợi.</p><small>Bất định càng cao → quyền chọn càng có giá trị</small></div></div>`),

    S('Timberland: ba nguồn lợi nhuận', `<div class="sd-cols3">
      <div class="sd-card acc"><div class="sd-n">1</div><b>Tăng trưởng sinh học</b><p>Cây lớn bất kể thị trường</p></div>
      <div class="sd-card"><div class="sd-n">2</div><b>Giá gỗ</b><p>Giá giao ngay sản phẩm gỗ</p></div>
      <div class="sd-card"><div class="sd-n">3</div><b>Giá đất</b><p>Giá trị đất rừng</p></div></div>
      <p class="sd-note">Gỗ +6%, giá +2% → giá trị gỗ +<b>${fmt((1.06 * 1.02 - 1) * 100)}%</b>. Giá thấp? Để cây <b>"lưu kho trên gốc"</b>, chờ giá lên. Có thể bán tín chỉ carbon.</p>`),

    S('Farmland: hằng năm hay lâu năm', `<div class="sd-tbl grid"><div class="head"><span></span><span>Row crops</span><span>Permanent crops</span></div>
      <div><span>Ví dụ</span><span>Lúa mì, ngô, đậu tương</span><span>Cây ăn quả, nho, cà phê</span></div>
      <div><span>Chu kỳ</span><span>Một mùa</span><span>Nhiều năm mới cho trái</span></div>
      <div><span>Đổi cây theo giá</span><span>Dễ</span><span>Rất khó</span></div></div>
      <p class="sd-note">Lợi nhuận = thu hoạch (sản lượng × giá) hoặc tiền thuê + tăng giá đất. Phải thu hoạch <b>khi chín</b>: kém linh hoạt hơn rừng.</p>`),

    S('So sánh ba loại đất', `<div class="sd-tbl grid"><div class="head"><span></span><span>Raw land</span><span>Timberland</span><span>Farmland</span></div>
      <div><span>Thu nhập</span><span>Gần như không</span><span>Khai thác gỗ</span><span>Thu hoạch, cho thuê</span></div>
      <div><span>Linh hoạt thời điểm</span><span>Chọn lúc xây</span><span>Cao</span><span>Thấp</span></div>
      <div><span>Rủi ro đặc trưng</span><span>Quy hoạch, đầu cơ</span><span>Cháy, sâu bệnh</span><span>Thời tiết, nước</span></div></div>`),

    S('Hàng hóa: bốn nhóm', `<div class="sd-grid4">
      <div><b>Năng lượng</b><p>Dầu thô, khí, xăng</p><small>Kinh tế, địa chính trị</small></div>
      <div><b>Kim loại công nghiệp</b><p>Đồng, nhôm, kẽm, niken</p><small>Sản xuất, xây dựng</small></div>
      <div><b>Kim loại quý</b><p>Vàng, bạc, bạch kim</p><small>Trú ẩn, lãi suất thực</small></div>
      <div><b>Nông sản</b><p>Ngũ cốc, softs, gia súc</p><small>Thời tiết, mùa vụ</small></div></div>
      <p class="sd-note">Không dòng tiền, biến động cao, tương quan thấp với cổ phiếu, <b>tương quan dương với lạm phát</b>.</p>`),

    S('Năm cách tiếp cận hàng hóa', `<div class="sd-cols2">
      <div><div class="sd-rule">Hàng vật chất: chỉ thực tế với vàng</div><div class="sd-rule up">Futures, swaps: phổ biến nhất, phải roll</div><div class="sd-rule">ETF, ETN: bên trong vẫn là futures</div></div>
      <div><div class="sd-rule down">Cổ phiếu công ty khai thác: tương quan cao với cổ phiếu</div><div class="sd-rule">Quỹ managed futures (CTA): chủ động, có phí</div></div></div>`),

    S('Giá futures: cost of carry', `<div class="sd-f">F ≈ S × (1 + r) + Lưu kho - Convenience yield</div>
      <div class="sd-steps"><span>S = 80, r = 4%, lưu kho 3, convenience yield 5</span><span>F ≈ 80 × 1,04 + 3 - 5 = <b>81,2</b> → F &gt; S: contango</span></div>
      <p class="sd-note">Lưu kho <b>đẩy F lên</b>; convenience yield (lợi ích có hàng ngay khi khan hiếm) <b>kéo F xuống</b>.</p>`),

    S('Contango và backwardation', `<div class="sd-cols2 wide-left"><div>${curves()}</div>
      <div><div class="sd-rule down">Contango: tồn kho dồi dào, convenience yield thấp</div><div class="sd-rule up">Backwardation: khan hiếm, convenience yield cao</div>
      <p class="sd-note">"<b>Back</b>wardation": ai cũng muốn hàng <b>bây giờ</b>.</p></div></div>`),

    S('Ba lý thuyết về đường cong futures', `<div class="sd-cols3">
      <div class="sd-card"><b>Insurance theory</b><p>Người sản xuất bán futures phòng hộ, trả phần bù cho bên mua.</p><small>→ normal backwardation</small></div>
      <div class="sd-card"><b>Hedging pressure</b><p>Thêm người tiêu dùng mua futures. Bên nào áp đảo quyết định hình dạng.</p><small>Sản xuất áp đảo → backwardation</small></div>
      <div class="sd-card acc"><b>Theory of storage</b><p>Tồn kho cao → contango; tồn kho thấp → backwardation.</p><small>Chính là cost of carry</small></div></div>`),

    S('Roll return: futures hội tụ về spot', `<div class="sd-cols2 wide-left"><div>${converge()}</div>
      <div><div class="sd-rule down">Contango: futures trượt xuống → roll âm</div><div class="sd-rule up">Backwardation: futures trượt lên → roll dương</div><p class="sd-note">Giá giao ngay đứng yên mà vị thế mua vẫn lãi hoặc lỗ: đó là <b>roll return</b>.</p></div></div>`),

    S('Ba thành phần lợi nhuận futures', `<div class="sd-f">Tổng ≈ Spot return + Roll return + Collateral return</div>
      <div class="sd-cols2 wide-left"><div>${bars([['Spot return', 6, '+6%'], ['Roll return (contango)', 3, '-3%'], ['Collateral (tín phiếu)', 4, '+4%'], ['Tổng', 7, '7%']], 0, 8)}</div>
      <div><div class="sd-rule down">Quên roll → 10%</div><div class="sd-rule down">Sai dấu roll → 13%</div><div class="sd-rule up">Đúng: 6 - 3 + 4 = <b>7%</b></div></div></div>`),

    S('Rủi ro và đa dạng hóa', `<div class="sd-tbl grid"><div class="head"><span></span><span>Futures hàng hóa</span><span>Timber, farmland</span></div>
      <div><span>Biến động</span><span>Cao</span><span>Thấp - TB (thẩm định)</span></div>
      <div><span>Thanh khoản</span><span>Cao</span><span>Thấp</span></div>
      <div><span>Tương quan cổ phiếu</span><span>Thấp, tăng khi khủng hoảng</span><span>Thấp</span></div>
      <div><span>Lạm phát</span><span>Phòng hộ tốt</span><span>Phòng hộ khá</span></div></div>
      <p class="sd-note">Chỉ số thẩm định làm trơn số liệu; cổ phiếu khai thác, REIT rừng tương quan cao hơn với thị trường.</p>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>Raw land: tăng giá + quyền phát triển, có chi phí nắm giữ</span><span>Timberland: sinh học, giá gỗ, giá đất</span>
      <span>Rừng linh hoạt hơn trang trại</span><span>Hàng hóa không có dòng tiền</span>
      <span>F ≈ S(1 + r) + lưu kho - CY</span><span>Contango: roll âm; backwardation: roll dương</span>
      <span>Insurance, hedging pressure, storage</span><span>Tổng = spot + roll + collateral</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 10 câu, mục tiêu ≥ 7 câu đúng.</p>`),
  ];

  addDeck('AI-05', `Slide Natural Resources - bản thiết kế riêng (${slides.length} slide)`, slides);
}());
