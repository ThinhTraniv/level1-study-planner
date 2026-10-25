// Bộ slide tự thiết kế cho EQ-11 Equity Analyst Research Reports.
(function () {
  const L = window.LESSONS && window.LESSONS['EQ-11'];
  if (!L) return;
  const { frac, slide, addDeck } = window.CFAH;
  const K = 'EQ-11 · Equity Research Reports';
  const S = (title, body, opt = {}) => slide(title, body, Object.assign({ kicker: K }, opt));
  const fmt = (x, d = 2) => x.toFixed(d).replace('.', ',');

  // Mô hình FCFF 5 năm + giá trị cuối kỳ (ví dụ 4.1), tính lại để vẽ.
  function val(gr, m, ri, w, g = 0.03) {
    let R = 1000, pv = 0, f = 0;
    for (let k = 1; k <= 5; k++) { R *= 1 + gr; f = R * m * 0.8 * (1 - ri); pv += f / (1 + w) ** k; }
    return (pv + (f * (1 + g)) / (w - g) / (1 + w) ** 5 - 400) / 50;
  }
  const A = [0.08, 0.15, 0.30, 0.09], B = [0.05, 0.13, 0.40, 0.10];

  // Thác nước: từ giá trị của A đến giá trị của B.
  function waterfall() {
    const labs = ['A', 'Doanh thu', 'Biên EBIT', 'Tái đầu tư', 'WACC', 'B'];
    const vals = [val(...A)];
    const cur = [...A];
    for (let i = 0; i < 4; i++) { cur[i] = B[i]; vals.push(val(...cur)); }
    const W = 600, H = 300, l = 50, r = 590, t = 20, b = 240;
    const X = i => l + 20 + i * ((r - l - 40) / 5), Y = v => b - (v / 30) * (b - t), bw = 60;
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv big" role="img" aria-label="Phân rã chênh lệch giá trị">`;
    [0, 10, 20, 30].forEach(v => { s += `<line x1="${l}" y1="${Y(v)}" x2="${r}" y2="${Y(v)}" class="sv-grid"/><text x="${l - 8}" y="${Y(v) + 6}" class="sv-muted" text-anchor="end">${v}</text>`; });
    s += `<rect x="${X(0) - bw / 2}" y="${Y(vals[0])}" width="${bw}" height="${b - Y(vals[0])}" class="sv-key"/><text x="${X(0)}" y="${Y(vals[0]) - 8}" class="sv-txt">${fmt(vals[0])}</text>`;
    for (let i = 1; i <= 4; i++) {
      const top = Y(vals[i - 1]), bot = Y(vals[i]);
      s += `<rect x="${X(i) - bw / 2}" y="${top}" width="${bw}" height="${bot - top}" class="sv-panel"/><line x1="${X(i) - bw / 2}" y1="${bot}" x2="${X(i) + bw / 2}" y2="${bot}" class="sv-down"/><text x="${X(i)}" y="${bot + 24}" class="sv-txt sv-t-down">${fmt(vals[i] - vals[i - 1])}</text>`;
    }
    s += `<rect x="${X(5) - bw / 2}" y="${Y(vals[4])}" width="${bw}" height="${b - Y(vals[4])}" class="sv-key"/><text x="${X(5)}" y="${Y(vals[4]) - 8}" class="sv-txt">${fmt(vals[4])}</text>`;
    labs.forEach((n, i) => { s += `<text x="${X(i)}" y="${b + 26}" class="sv-muted">${n}</text>`; });
    s += `<line x1="${l}" y1="${b}" x2="${r}" y2="${b}" class="sv-axis"/>`;
    return `${s}</svg>`;
  }

  // Giá trị của A, B so với giá thị trường 20.
  function vsPrice() {
    const W = 600, H = 260, l = 40, b = 220, t = 20;
    const Y = v => b - (v / 30) * (b - t);
    const a = val(...A), bb = val(...B);
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv big" role="img" aria-label="Giá trị so với giá">`;
    s += `<rect x="150" y="${Y(a)}" width="110" height="${b - Y(a)}" class="sv-panel"/><text x="205" y="${Y(a) - 10}" class="sv-txt sv-t-up">A: ${fmt(a)}</text>`;
    s += `<rect x="340" y="${Y(bb)}" width="110" height="${b - Y(bb)}" class="sv-panel"/><text x="395" y="${Y(bb) - 10}" class="sv-txt sv-t-down">B: ${fmt(bb)}</text>`;
    s += `<line x1="${l}" y1="${Y(20)}" x2="580" y2="${Y(20)}" class="sv-pv"/><text x="575" y="${Y(20) - 10}" class="sv-txt sv-t-pv" text-anchor="end">giá 20</text>`;
    s += `<line x1="${l}" y1="${b}" x2="580" y2="${b}" class="sv-axis"/>`;
    s += `<text x="205" y="${b + 28}" class="sv-muted">MUA +38,6%</text><text x="395" y="${b + 28}" class="sv-muted">BÁN -40,0%</text>`;
    return `${s}</svg>`;
  }

  const sens = [0.08, 0.09, 0.10].map(w => [0.02, 0.03, 0.04].map(g => val(0.08, 0.15, 0.30, w, g)));
  const sensTbl = `<div class="sd-tbl grid"><div class="head"><span>WACC \\ g</span><span>2%</span><span>3%</span><span>4%</span></div>${
    sens.map((row, i) => `<div><span>${8 + i}%</span>${row.map((v, j) => `<span>${i === 1 && j === 1 ? `<b>${fmt(v)}</b>` : fmt(v)}</span>`).join('')}</div>`).join('')}</div>`;

  const scen = [['Bull (25%)', 60], ['Base (50%)', 45], ['Bear (25%)', 28], ['Kỳ vọng', 44.5]];
  const scenBars = `<div class="sd-bars">${scen.map(([lab, v]) => `<div class="sd-bar"><span class="sd-bar-l">${lab}</span><span class="sd-bar-t"><i style="width:${(v / 60) * 100}%"></i></span><b>${fmt(v, 1)}</b></div>`).join('')}</div>`;

  const slides = [
    slide('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Equity Investments · EQ-11</div>
      <h2>Equity Analyst<br>Research Reports</h2>
      <p>Biến phân tích thành một quyết định người khác dùng được</p>
      <div class="sd-chips"><span>LOS 1 · Thành phần báo cáo</span><span>LOS 2 · Sell-side và buy-side</span><span>LOS 3 · Vì sao giá trị khác nhau</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Ba câu hỏi của mọi báo cáo', `<div class="sd-cols3">
      <div class="sd-card acc"><div class="sd-n">1</div><b>Nên làm gì?</b><p>Khuyến nghị, giá mục tiêu, thời hạn.</p></div>
      <div class="sd-card"><div class="sd-n">2</div><b>Vì sao?</b><p>Ngành, công ty, dự báo, định giá.</p></div>
      <div class="sd-card"><div class="sd-n">3</div><b>Điều gì có thể sai?</b><p>Rủi ro, kịch bản, độ nhạy.</p></div></div>
      <p class="sd-note">Người đọc phải nắm kết luận sau một phút đọc trang đầu.</p>`),

    S('Trang đầu: từ giá mục tiêu đến khuyến nghị', `<div class="sd-cols2"><div><div class="sd-tbl"><div><span>Giá hiện tại</span><span>40.000</span></div><div><span>Giá mục tiêu 12 tháng</span><span>48.000</span></div><div><span>Cổ tức dự kiến</span><span>1.200</span></div></div>
      <div class="sd-f sm">${frac('48.000 - 40.000 + 1.200', '40.000')} = <b>23%</b></div></div>
      <div><div class="sd-rule up">&gt; 15% <b>MUA</b></div><div class="sd-rule">-5% đến 15% <b>GIỮ</b></div><div class="sd-rule down">&lt; -5% <b>BÁN</b></div>
      <p class="sd-note">Định nghĩa mức khuyến nghị khác nhau giữa các công ty: đọc phần công bố.</p></div></div>`),

    S('Thân báo cáo', `<div class="sd-check">
      <span>Mô tả công ty, mô hình kinh doanh</span><span>Ngành và vị thế cạnh tranh</span>
      <span>Phân tích tài chính lịch sử</span><span>Dự báo và giả định chính</span>
      <span>Định giá và độ nhạy</span><span>Rủi ro, kịch bản, catalyst</span>
      <span>ESG và quản trị</span><span>Công bố xung đột lợi ích</span></div>`),

    S('Phẩm chất của một báo cáo tốt', `<div class="sd-grid4">
      <div class="sd-card"><b>Kịp thời, súc tích</b><p>Kết luận ở trang đầu.</p></div>
      <div class="sd-card acc"><b>Sự thật và ý kiến</b><p>"Doanh thu tăng 12%" khác "biên sẽ hồi phục".</p></div>
      <div class="sd-card"><b>Nhất quán</b><p>Khuyến nghị khớp định giá; tăng trưởng khớp đầu tư.</p></div>
      <div class="sd-card"><b>Có quan điểm riêng</b><p>Khác đồng thuận ở đâu, vì sao.</p></div></div>`),

    S('Sell-side và buy-side', `<div class="sd-tbl grid"><div class="head"><span></span><span>Sell-side</span><span>Buy-side</span></div>
      <div><span>Làm cho</span><span>Công ty chứng khoán</span><span>Quỹ, quản lý tài sản</span></div>
      <div><span>Người đọc</span><span>Khách hàng bên ngoài</span><span>Nội bộ, quản lý danh mục</span></div>
      <div><span>Hình thức</span><span>Chuẩn hóa, xuất bản</span><span>Ngắn gọn, linh hoạt</span></div>
      <div><span>Quy định</span><span>Chặt, công bố xung đột</span><span>Ít công bố ra ngoài</span></div>
      <div><span>Thiên lệch</span><span>Lạc quan, ít khuyến nghị bán</span><span>Bị chấm theo kết quả thật</span></div></div>`),

    S('Kết luận khác nhau thế nào?', `<div class="sd-cols2">
      <div class="sd-card"><b>Sell-side</b><p>Cổ phiếu đáng giá bao nhiêu?</p><div class="sd-keys"><span>MUA</span><span>GIỮ</span><span>BÁN</span><span>+ giá mục tiêu</span></div></div>
      <div class="sd-card acc"><b>Buy-side</b><p>Có xứng đáng chiếm chỗ trong danh mục của chúng ta?</p><div class="sd-keys"><span>Tỷ trọng</span><span>So với lựa chọn khác</span><span>Conviction</span><span>Rủi ro đóng góp</span></div></div></div>
      <p class="sd-note">Sell-side nói MUA, buy-side vẫn có thể bỏ qua.</p>`),

    S('Bốn nhóm giả định', `<div class="sd-grid4">
      <div class="sd-card"><div class="sd-n">1</div><b>Doanh thu</b><p>Thị trường, thị phần, giá.</p></div>
      <div class="sd-card"><div class="sd-n">2</div><b>Sinh lời</b><p>Biên EBIT, thuế.</p></div>
      <div class="sd-card"><div class="sd-n">3</div><b>Đầu tư</b><p>Capex, vốn lưu động.</p></div>
      <div class="sd-card acc"><div class="sd-n">4</div><b>Tài trợ</b><p>WACC, cấu trúc vốn, số cổ phiếu.</p></div></div>
      <p class="sd-note">Cộng thêm: tăng trưởng dài hạn; với bội số là nhóm so sánh.</p>`),

    S('Cùng mô hình, giá trị gấp đôi', `<div class="sd-cols2 wide-left"><div>${vsPrice()}</div>
      <div><div class="sd-tbl grid"><div class="head"><span></span><span>A</span><span>B</span></div><div><span>Tăng trưởng</span><span>8%</span><span>5%</span></div><div><span>Biên EBIT</span><span>15%</span><span>13%</span></div><div><span>Tái đầu tư</span><span>30%</span><span>40%</span></div><div><span>WACC</span><span>9%</span><span>10%</span></div></div>
      <p class="sd-note">Giá trị cuối kỳ chiếm 77% (A) và 73% (B) EV.</p></div></div>`),

    S('Chênh lệch đến từ đâu?', `<div class="sd-cols2 wide-left"><div>${waterfall()}</div>
      <div><p>Thay lần lượt giả định của A bằng của B.</p><div class="sd-rule down">Bốn khác biệt nhỏ cùng chiều <b>-15,72</b></div>
      <p class="sd-note">Thứ tự thay đổi làm đổi từng bước, không đổi tổng.</p></div></div>`),

    S('Độ nhạy: WACC và g dài hạn', `<div class="sd-cols2"><div><p class="sd-cap">Mô hình A, nghìn đồng mỗi cổ phiếu</p>${sensTbl}</div>
      <div><div class="sd-rule down">WACC - g hẹp <b>rất nhạy</b></div><p>WACC 8%, g 4%: <b>${fmt(sens[0][2])}</b></p><p>WACC 10%, g 2%: <b>${fmt(sens[2][0])}</b></p>
      <p class="sd-note">Kiểm tra: tăng trưởng ≈ tái đầu tư × ROIC.</p></div></div>`),

    S('Kịch bản thay vì một con số', `<div class="sd-cols2"><div>${scenBars}</div>
      <div><div class="sd-f sm">0,25 × 60 + 0,5 × 45 + 0,25 × 28 = <b>44,5</b></div>
      <p>Khoảng bull - bear cho thấy mức không chắc chắn.</p><p class="sd-note">So với đồng thuận: nói rõ mình khác ở giả định nào.</p></div></div>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>Trang đầu: khuyến nghị, giá mục tiêu, luận điểm</span><span>Tổng lợi suất: nhớ cộng cổ tức</span>
      <span>Phân biệt sự thật và ý kiến</span><span>Khuyến nghị nhất quán với định giá</span>
      <span>Sell-side: bên ngoài, lạc quan</span><span>Buy-side: tỷ trọng, danh mục</span>
      <span>Khác giá trị = khác giả định</span><span>WACC - g hẹp → rất nhạy</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 10 câu, mục tiêu ≥ 7 câu đúng.</p>`),
  ];

  addDeck('EQ-11', `Slide Equity Research Reports - bản thiết kế riêng (${slides.length} slide)`, slides);
}());
