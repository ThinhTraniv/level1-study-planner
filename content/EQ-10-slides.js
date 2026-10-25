// Bộ slide tự thiết kế cho EQ-10 Company Analysis: Past, Present, and Future.
(function () {
  const L = window.LESSONS && window.LESSONS['EQ-10'];
  if (!L) return;
  const { frac, slide, addDeck } = window.CFAH;
  const K = 'EQ-10 · Company Analysis';
  const S = (title, body, opt = {}) => slide(title, body, Object.assign({ kicker: K }, opt));
  const fmt = (x, d = 2) => x.toFixed(d).replace('.', ',');

  // EBIT theo doanh thu cho hai cấu trúc chi phí (ví dụ 4.1).
  function levChart() {
    const W = 600, H = 300, l = 60, r = 570, t = 20, b = 240;
    const X = R => l + ((R - 800) / 400) * (r - l), Y = e => b - (e / 250) * (b - t);
    const hi = R => R * 0.4 - 250, lo = R => R * 0.2 - 50;
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv big" role="img" aria-label="Đòn bẩy hoạt động cao và thấp">`;
    [0, 100, 200].forEach(v => { s += `<line x1="${l}" y1="${Y(v)}" x2="${r}" y2="${Y(v)}" class="sv-grid"/><text x="${l - 8}" y="${Y(v) + 6}" class="sv-muted" text-anchor="end">${v}</text>`; });
    [800, 1000, 1200].forEach(R => { s += `<text x="${X(R)}" y="${b + 26}" class="sv-muted">${R.toLocaleString('vi-VN')}</text>`; });
    s += `<line x1="${l}" y1="${b}" x2="${r}" y2="${b}" class="sv-axis"/><line x1="${l}" y1="${t}" x2="${l}" y2="${b}" class="sv-axis"/>`;
    s += `<line x1="${X(800)}" y1="${Y(hi(800))}" x2="${X(1200)}" y2="${Y(hi(1200))}" class="sv-down"/>`;
    s += `<line x1="${X(800)}" y1="${Y(lo(800))}" x2="${X(1200)}" y2="${Y(lo(1200))}" class="sv-up"/>`;
    s += `<circle cx="${X(1000)}" cy="${Y(150)}" r="7" class="sv-dot"/>`;
    s += `<text x="${X(1190)}" y="${Y(hi(1190)) - 12}" class="sv-txt sv-t-down" text-anchor="end">DOL 2,67</text><text x="${X(1190)}" y="${Y(lo(1190)) + 30}" class="sv-txt sv-t-up" text-anchor="end">DOL 1,33</text>`;
    s += `<text x="${(l + r) / 2}" y="${H - 4}" class="sv-muted">Doanh thu → EBIT</text>`;
    return `${s}</svg>`;
  }

  // Chu kỳ chuyển đổi tiền mặt dạng thanh thời gian (ví dụ 6.1).
  function cccChart() {
    const W = 600, H = 200, l = 30, sc = 5;
    const X = d => l + d * sc;
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv" role="img" aria-label="Chu kỳ chuyển đổi tiền mặt">`;
    s += `<rect x="${X(0)}" y="30" width="${50 * sc}" height="34" rx="6" class="sv-panel"/><text x="${X(25)}" y="53" class="sv-txt">DIO 50</text>`;
    s += `<rect x="${X(50)}" y="30" width="${40 * sc}" height="34" rx="6" class="sv-panel"/><text x="${X(70)}" y="53" class="sv-txt">DSO 40</text>`;
    s += `<rect x="${X(0)}" y="82" width="${30 * sc}" height="34" rx="6" class="sv-key"/><text x="${X(15)}" y="105" class="sv-txt sv-t-up">DPO 30</text>`;
    s += `<line x1="${X(30)}" y1="140" x2="${X(90)}" y2="140" class="sv-down"/><line x1="${X(30)}" y1="132" x2="${X(30)}" y2="148" class="sv-down"/><line x1="${X(90)}" y1="132" x2="${X(90)}" y2="148" class="sv-down"/>`;
    s += `<text x="${X(60)}" y="170" class="sv-txt sv-t-down">CCC = 60 ngày tự tài trợ</text>`;
    s += `<text x="${X(0)}" y="20" class="sv-muted" text-anchor="start">mua hàng</text><text x="${X(90)}" y="20" class="sv-muted" text-anchor="end">thu tiền</text>`;
    return `${s}</svg>`;
  }

  const bars = (rows, max, d = 1) => `<div class="sd-bars">${rows.map(([lab, v, txt]) => `<div class="sd-bar"><span class="sd-bar-l">${lab}</span><span class="sd-bar-t"><i style="width:${(v / max) * 100}%"></i></span><b>${txt || fmt(v, d)}</b></div>`).join('')}</div>`;

  const slides = [
    slide('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Equity Investments · EQ-10</div>
      <h2>Company Analysis:<br>Past, Present, and Future</h2>
      <p>Từ chiến lược đến từng giả định trong mô hình dự báo</p>
      <div class="sd-chips"><span>LOS 1 · Chiến lược, vị thế</span><span>LOS 2 · Doanh thu, lợi nhuận, định giá</span><span>LOS 3 · Vốn lưu động, capex, cấu trúc vốn</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Chuỗi phân tích công ty', `<div class="sd-steps">
      <span>① Chiến lược: cạnh tranh bằng gì?</span>
      <span>② Doanh thu: sản lượng × giá</span>
      <span>③ Lợi nhuận hoạt động: cấu trúc chi phí, sức mạnh định giá</span>
      <span>④ Vốn cần bỏ ra: vốn lưu động, capex</span>
      <span>⑤ Tài trợ: cấu trúc vốn</span></div>
      <p class="sd-note">Mỗi mắt xích = một giả định trong mô hình dự báo (EQ-08).</p>`),

    S('Ba chiến lược chung của Porter', `<div class="sd-cols3">
      <div class="sd-card acc"><b>Dẫn đầu chi phí</b><p>Chi phí thấp nhất ngành.</p><p>Phòng thủ hoặc tấn công thị phần.</p><small>Rủi ro: bị sao chép</small></div>
      <div class="sd-card acc"><b>Khác biệt hóa</b><p>Độc đáo: chất lượng, thương hiệu, dịch vụ.</p><p>Giá cao hơn &gt; chi phí khác biệt.</p><small>Rủi ro: khách hết coi trọng</small></div>
      <div class="sd-card"><b>Tập trung</b><p>Một trong hai cách trên, cho phân khúc hẹp.</p><small>Rủi ro: phân khúc thu hẹp</small></div></div>
      <div class="sd-rule down">Làm cả hai mà không giỏi cái nào <b>kẹt ở giữa</b></div>`),

    S('Lợi thế cạnh tranh bền vững', `<div class="sd-check">
      <span>Lợi thế quy mô</span><span>Hiệu ứng mạng lưới</span>
      <span>Chi phí chuyển đổi cao</span><span>Thương hiệu, bằng sáng chế, giấy phép</span>
      <span>Lợi thế chi phí riêng</span><span>Phù hợp với cấu trúc ngành</span></div>
      <p class="sd-note">Không có lợi thế bền vững → ROIC bị kéo về WACC.</p>`),

    S('Chiến lược để lại dấu vết', `<div class="sd-tbl grid"><div class="head"><span></span><span>C: chi phí thấp</span><span>D: khác biệt</span></div>
      <div><span>Biên gộp</span><span>22%</span><span>55%</span></div>
      <div><span>Biên hoạt động</span><span>6%</span><span>18%</span></div>
      <div><span>Vòng quay tài sản</span><span>2,5</span><span>0,8</span></div>
      <div><span>EBIT / tài sản</span><span><b>15,0%</b></span><span><b>14,4%</b></span></div></div>
      <p class="sd-note">Hai con đường khác nhau, mức sinh lời gần như nhau.</p>`),

    S('Doanh thu = sản lượng × giá', `<div class="sd-cols2"><div><p class="sd-cap">50 × 20 → 53 × 20,6</p>${bars([['Năm trước', 1000, '1.000'], ['+ sản lượng', 60, '+60'], ['+ giá', 31.8, '+31,8'], ['Năm nay', 1091.8, '1.091,8']], 1091.8)}</div>
      <div><p>Tăng <b>9,18%</b>: sản lượng +6%, giá +3%.</p><div class="sd-tbl"><div><span>Bán lẻ</span><span>cửa hàng × doanh thu/cửa hàng</span></div><div><span>Thuê bao</span><span>thuê bao × ARPU</span></div><div><span>Khách sạn</span><span>phòng × lấp đầy × giá</span></div></div></div></div>`),

    S('Tự thân, mua lại, tỷ giá', `<div class="sd-cols2">
      <div><div class="sd-card"><b>Tách tăng trưởng</b><p>Báo cáo 12% · mua lại +4 · tỷ giá -1</p><div class="sd-f sm">Tự thân = 12 - 4 - (-1) = <b>9%</b></div><small>Bẫy: 12 - 4 - 1 = 7%</small></div></div>
      <div><div class="sd-card acc"><b>Top-down</b><p>Thị trường 10.000 × 1,06 × thị phần 13%</p><div class="sd-f sm">= <b>1.378</b> (từ 1.200)</div><small>Thị phần phải có lý do cạnh tranh</small></div></div></div>
      <p class="sd-note">Đọc thuyết minh bộ phận: mảng nào, địa bàn nào kéo tăng trưởng?</p>`),

    S('Đòn bẩy hoạt động', `<div class="sd-cols2 wide-left"><div>${levChart()}</div>
      <div><div class="sd-f sm">DOL = ${frac('Lãi trên biến phí', 'EBIT')} = ${frac('400', '150')} = <b>2,67</b></div>
      <div class="sd-rule down">Biến phí 60%, cố định 250 <b>±10% → ±26,7%</b></div>
      <div class="sd-rule up">Biến phí 80%, cố định 50 <b>±10% → ±13,3%</b></div>
      <p class="sd-note">Không giả định biên lợi nhuận cố định khi chi phí chủ yếu là cố định.</p></div></div>`),

    S('Sức mạnh định giá', `<div class="sd-cols2"><div><p class="sd-cap">Giá vốn 600 → 660 (+10%)</p>${bars([['Trước', 40, '40,0%'], ['P: giá +10%', 40, '40,0%'], ['Giá +6%', 37.7, '37,7%'], ['Q: giữ giá', 34, '34,0%']], 40)}</div>
      <div><div class="sd-rule up">Giữ biên gộp <b>tăng giá theo % chi phí</b></div><div class="sd-rule">Giữ số tiền lãi gộp <b>tăng giá bằng số tiền chi phí</b></div>
      <p class="sd-note">Dấu hiệu: biên gộp ổn định khi đầu vào tăng; tăng giá mà sản lượng không giảm.</p></div></div>`),

    S('Vốn lưu động: tiền bị kẹt bao lâu?', `<div>${cccChart()}</div>
      <div class="sd-cols3"><div class="sd-card"><b>DSO</b><p>400 / (3.650/365) = 40</p></div><div class="sd-card"><b>DIO</b><p>350 / (2.555/365) = 50</p></div><div class="sd-card"><b>DPO</b><p>210 / (2.555/365) = 30</p></div></div>
      <p class="sd-note">DSO 40 → 30: giải phóng 10 × 10 = <b>100</b>. CCC tăng dần là tín hiệu cảnh báo.</p>`),

    S('Đầu tư vốn', `<div class="sd-cols2"><div><div class="sd-f sm">${frac('Capex', 'Khấu hao')} = ${frac('180', '120')} = <b>1,5</b></div>
      <div class="sd-rule up">&gt; 1 <b>mở rộng</b></div><div class="sd-rule down">&lt; 1 nhiều năm <b>đầu tư thiếu</b></div></div>
      <div><div class="sd-steps"><span>Duy trì ≈ khấu hao</span><span>Tăng trưởng = phần còn lại</span><span>Capex / doanh thu = 4,9%</span><span>Chỉ tạo giá trị khi ROIC &gt; WACC</span></div></div></div>
      <p class="sd-note">Công nghệ, dịch vụ: đầu tư có thể nằm trong R&amp;D, marketing, mua lại.</p>`),

    S('Cấu trúc vốn', `<div class="sd-cols3">
      <div class="sd-card"><b>Nợ / vốn</b><div class="sd-f sm">${frac('900', '900 + 1.100')}</div><p><b>45%</b></p></div>
      <div class="sd-card acc"><b>Nợ ròng / EBITDA</b><div class="sd-f sm">${frac('900 - 150', '300')}</div><p><b>2,5 lần</b></p><small>Quên trừ tiền: 3,0</small></div>
      <div class="sd-card"><b>Trả lãi</b><div class="sd-f sm">${frac('EBIT 200', 'lãi 50')}</div><p><b>4,0 lần</b></p></div></div>
      <p class="sd-note">Xem thêm lịch đáo hạn, lãi cố định hay thả nổi, đồng tiền vay, covenant.</p>`),

    S('Hai đòn bẩy nhân với nhau', `<div class="sd-cols2">
      <div class="sd-card"><b>Đòn bẩy hoạt động</b><p>Chi phí cố định cao → EBIT dao động mạnh.</p></div>
      <div class="sd-card"><b>Đòn bẩy tài chính</b><p>Lãi vay cố định → lợi nhuận cổ đông dao động mạnh hơn nữa.</p></div></div>
      <div class="sd-rule down">Ngành chu kỳ, chi phí cố định cao <b>nên ít nợ</b></div>
      <p class="sd-note">Hàng không, thép, bán dẫn: DOL cao, nợ vay cao → rủi ro phá sản trong suy thoái.</p>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>Chi phí thấp: biên thấp, quay nhanh</span><span>Khác biệt: biên gộp cao</span>
      <span>Doanh thu = sản lượng × giá</span><span>Tỷ giá âm: cộng ngược khi tính tự thân</span>
      <span>DOL = lãi trên biến phí / EBIT</span><span>Giữ biên: tăng giá theo % chi phí</span>
      <span>CCC = DSO + DIO - DPO</span><span>Nợ ròng/EBITDA: nhớ trừ tiền</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 10 câu, mục tiêu ≥ 7 câu đúng.</p>`),
  ];

  addDeck('EQ-10', `Slide Company Analysis - bản thiết kế riêng (${slides.length} slide)`, slides);
}());
