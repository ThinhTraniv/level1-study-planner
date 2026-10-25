// Bộ slide tự thiết kế cho CF-05 Capital Investments and Capital Allocation.
(function () {
  const L = window.LESSONS && window.LESSONS['CF-05'];
  if (!L) return;
  const { frac, tl, slide, addDeck } = window.CFAH;
  const K = 'CF-05 · Capital Allocation';
  const S = (title, body, opt = {}) => slide(title, body, Object.assign({ kicker: K }, opt));
  const fmt = (x, d = 2) => x.toFixed(d).replace('.', ',');
  const npv = (r, c) => c.reduce((a, x, i) => a + x / (1 + r) ** i, 0);

  // Đồ thị NPV theo lãi suất. series: [{c, cls, lab}] ; o: {r0, r1, v0, v1, xt, yt, marks}
  function profile(series, o) {
    const W = 600, H = 300, l = 60, r = 580, t = 20, b = 250;
    const X = x => l + ((x - o.r0) / (o.r1 - o.r0)) * (r - l);
    const Y = v => b - ((v - o.v0) / (o.v1 - o.v0)) * (b - t);
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv" role="img" aria-label="${o.label}">`;
    o.yt.forEach(v => { s += `<line x1="${l}" y1="${Y(v)}" x2="${r}" y2="${Y(v)}" class="${v === 0 ? 'sv-axis' : 'sv-grid'}"/><text x="${l - 8}" y="${Y(v) + 5}" class="sv-muted" text-anchor="end">${o.yf ? o.yf(v) : v}</text>`; });
    o.xt.forEach(x => { s += `<text x="${X(x)}" y="${b + 22}" class="sv-muted">${Math.round(x * 100)}%</text>`; });
    s += `<line x1="${l}" y1="${t}" x2="${l}" y2="${b}" class="sv-axis"/>`;
    series.forEach(z => {
      let p = '';
      for (let i = 0; i <= 80; i++) { const x = o.r0 + ((o.r1 - o.r0) * i) / 80; p += `${X(x).toFixed(1)},${Y(npv(x, z.c)).toFixed(1)} `; }
      s += `<polyline points="${p}" class="${z.cls}" fill="none"/>`;
      if (z.lab) s += `<text x="${X(z.lab[0])}" y="${Y(npv(z.lab[0], z.c)) + z.lab[1]}" class="sv-txt ${z.tc || ''}" text-anchor="start">${z.lab[2]}</text>`;
    });
    (o.marks || []).forEach(m => { s += `<circle cx="${X(m[0])}" cy="${Y(m[1])}" r="6" class="sv-dot"/><text x="${X(m[0]) + (m[3] || 0)}" y="${Y(m[1]) + (m[4] || -14)}" class="sv-txt" ${m[5] ? `text-anchor="${m[5]}"` : ''}>${m[2]}</text>`; });
    s += `<text x="${(l + r) / 2}" y="${H - 4}" class="sv-muted">${o.xl || 'Lãi suất chiết khấu'}</text></svg>`;
    return s;
  }

  const A = [-1000, 300, 400, 400, 300];
  const PS = [-1000, 800, 350, 100], PL = [-1000, 100, 300, 1100];
  const M = [-100, 230, -132];

  const profA = profile([{ c: A, cls: 'sv-curve' }], { r0: 0, r1: 0.25, v0: -300, v1: 450, xt: [0, 0.05, 0.10, 0.15, 0.20, 0.25], yt: [-200, 0, 200, 400], label: 'NPV profile dự án A',
    marks: [[0.10, npv(0.10, A), `NPV(10%) = ${fmt(npv(0.10, A))}`, 10, -14, 'start'], [0.148950, 0, 'IRR = 14,90%', 10, -14, 'start']] });

  const profSL = profile([{ c: PS, cls: 'sv-curve', lab: [0.005, 26, 'S'] }, { c: PL, cls: 'sv-down', tc: 'sv-t-down', lab: [0.005, -10, 'L'] }], { r0: 0, r1: 0.25, v0: -200, v1: 520, xt: [0, 0.05, 0.10, 0.15, 0.20, 0.25], yt: [-200, 0, 200, 400], label: 'NPV profile dự án S và L',
    marks: [[0.160048, npv(0.160048, PS), 'Crossover 16,00%', 0, -18, 'middle']] });

  const profM = profile([{ c: M, cls: 'sv-curve' }], { r0: 0, r1: 0.32, v0: -2.2, v1: 0.6, xt: [0, 0.10, 0.20, 0.30], yt: [-2, -1, 0, 0.5], yf: v => fmt(v, 1), label: 'Dòng tiền đổi dấu hai lần có hai IRR',
    marks: [[0.10, 0, 'IRR = 10%', 0, -16, 'end'], [0.20, 0, 'IRR = 20%', 0, -16, 'start']] });

  // Cây quyết định cho quyền từ bỏ.
  const tree = `<svg viewBox="0 0 600 260" class="sv big" role="img" aria-label="Cây quyết định quyền từ bỏ">
    <line x1="120" y1="130" x2="390" y2="55" class="sv-axis"/><line x1="120" y1="130" x2="390" y2="205" class="sv-axis"/>
    <circle cx="120" cy="130" r="44" class="sv-node"/><text x="120" y="126" class="sv-txt">-100</text><text x="120" y="150" class="sv-muted">t = 0</text>
    <circle cx="430" cy="55" r="40" class="sv-node up"/><text x="430" y="62" class="sv-txt sv-t-up">150</text>
    <circle cx="430" cy="205" r="40" class="sv-node down"/><text x="430" y="200" class="sv-txt sv-t-down">60</text><text x="430" y="224" class="sv-muted">bán: 90</text>
    <text x="255" y="78" class="sv-muted">50%</text><text x="255" y="196" class="sv-muted">50%</text>
    <text x="590" y="62" class="sv-txt" text-anchor="end">giữ</text><text x="590" y="210" class="sv-txt sv-t-down" text-anchor="end">từ bỏ</text></svg>`;

  const slides = [
    S('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Corporate Issuers · CF-05</div>
      <h2>Capital Investments<br>and Capital Allocation</h2>
      <p>Bỏ tiền dài hạn vào đâu để tạo giá trị?</p>
      <div class="sd-chips"><span>LOS 1 · Loại dự án</span><span>LOS 2 · NPV, IRR, ROIC</span><span>LOS 3 · Nguyên tắc và sai lầm</span><span>LOS 4 · Real options</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Một câu hỏi xuyên suốt', `<div class="sd-big">Lợi suất dự án &gt; chi phí cơ hội của vốn?</div>
      <div class="sd-cols3">
      <div class="sd-card"><div class="sd-n">1</div><b>Trước khi làm</b><p>NPV, IRR cho từng dự án</p></div>
      <div class="sd-card"><div class="sd-n">2</div><b>Sau khi làm</b><p>ROIC so với WACC cho cả công ty</p></div>
      <div class="sd-card acc"><div class="sd-n">3</div><b>Linh hoạt</b><p>Real options cộng thêm giá trị</p></div></div>`),

    S('Bốn loại dự án đầu tư vốn', `<div class="sd-grid4">
      <div class="sd-card"><b>Going concern</b><p>Thay máy, nâng cấp công nghệ</p><small>Dễ ước tính, dữ liệu có sẵn</small></div>
      <div class="sd-card"><b>Regulatory / compliance</b><p>Lọc khí thải theo luật mới</p><small>Bắt buộc, thường không tạo doanh thu</small></div>
      <div class="sd-card"><b>Expansion</b><p>Sản phẩm mới, thị trường mới, M&amp;A</p><small>Bất định hơn, cần nhiều vốn</small></div>
      <div class="sd-card acc"><b>Ngành mới</b><p>Công nghệ, ý tưởng ngoài lõi</p><small>Rủi ro cao nhất, khó phân tích</small></div></div>
      <p class="sd-note">Từ trái sang phải: <b>bất định tăng dần</b>, phân tích càng kỹ, đội ngũ quyết định càng đa dạng.</p>`),

    S('Quy trình phân bổ vốn 4 bước', `<div class="sd-steps">
      <span>① <b>Tạo ý tưởng</b>: từ mọi cấp, mọi phòng ban, cả bên ngoài</span>
      <span>② <b>Phân tích</b>: dự báo quy mô, thời điểm, độ dài, biến động dòng tiền; NPV, IRR</span>
      <span>③ <b>Lập kế hoạch và xếp ưu tiên</b>: lợi suất &gt; chi phí cơ hội; ngân sách có hạn</span>
      <span>④ <b>Hậu kiểm</b>: so thực tế với dự báo, rút vốn khỏi mảng kém</span></div>
      <p class="sd-note">Độc lập: nhận mọi NPV &gt; 0. Loại trừ: chọn NPV cao nhất. Giới hạn vốn: tối đa tổng NPV.</p>`),

    S('NPV: giá trị tạo thêm cho cổ đông', `<div class="sd-f">NPV = CF<sub>0</sub> + Σ ${frac('CF<sub>t</sub>', '(1 + r)<sup>t</sup>')}</div>
      ${tl(4, [{ t: 0, label: '-1.000', cls: 'down', above: true }, { t: 1, label: '300' }, { t: 2, label: '400' }, { t: 3, label: '400' }, { t: 4, label: '300' }], { h: 140 })}
      <div class="sd-cols2"><div class="sd-rule up">NPV &gt; 0 → <b>nhận</b></div><div class="sd-rule down">NPV &lt; 0 → <b>bỏ</b></div></div>
      <p class="sd-note">Dự án A, r = 10%: NPV = <b>108,74</b>. Tổng tiền thu 1.600 nhưng phải chiết khấu.</p>`),

    S('BA II Plus: hàm CF', `<div class="sd-keys"><span><kbd>CF</kbd> <kbd>2ND</kbd> <kbd>CE/C</kbd></span><span>1000 <kbd>+/-</kbd> <kbd>ENTER</kbd></span><span><kbd>↓</kbd> 300 <kbd>ENTER</kbd> <kbd>↓</kbd></span><span><kbd>↓</kbd> 400 <kbd>ENTER</kbd> <kbd>↓</kbd> 2 <kbd>ENTER</kbd></span><span><kbd>↓</kbd> 300 <kbd>ENTER</kbd></span></div>
      <div class="sd-cols2"><div class="sd-card"><b>NPV</b><p><kbd>NPV</kbd> 10 <kbd>ENTER</kbd> <kbd>↓</kbd> <kbd>CPT</kbd></p><p>= <b>108,7357</b></p></div>
      <div class="sd-card acc"><b>IRR</b><p><kbd>IRR</kbd> <kbd>CPT</kbd></p><p>= <b>14,8950%</b></p></div></div>
      <p class="sd-note">F02 = 2 vì 400 lặp ở năm 2 và 3 liền nhau. CF0 nhập số âm. I nhập 10, không nhập 0.10.</p>`),

    S('IRR: lãi suất làm NPV = 0', `<div class="sd-cols2 wide-left"><div>${profA}</div>
      <div><div class="sd-f sm">0 = CF<sub>0</sub> + Σ ${frac('CF<sub>t</sub>', '(1 + IRR)<sup>t</sup>')}</div>
      <div class="sd-rule up">IRR &gt; r → <b>nhận</b></div><div class="sd-rule down">IRR &lt; r → <b>bỏ</b></div>
      <p class="sd-note">Đường NPV profile cắt trục hoành tại IRR. Dự án độc lập: NPV và IRR cùng kết luận.</p></div></div>`),

    S('Dự án loại trừ: NPV và IRR mâu thuẫn', `<div class="sd-cols2 wide-left"><div>${profSL}</div>
      <div><div class="sd-tbl grid"><div class="head"><span></span><span>NPV 10%</span><span>IRR</span></div><div><span>S (thu sớm)</span><span>91,66</span><span><b>17,16%</b></span></div><div><span>L (thu muộn)</span><span><b>165,29</b></span><span>16,61%</span></div></div>
      <p class="sd-note">r &lt; 16,00% → L tốt hơn. Đề hỏi chọn gì: luôn chọn theo <b>NPV</b> → <b>L</b>.</p></div></div>`),

    S('Vì sao tin NPV hơn IRR?', `<div class="sd-cols2">
      <div class="sd-card acc"><b>NPV</b><p>Đo bằng tiền, cộng được giữa các dự án</p><p>Giả định tái đầu tư ở <b>r</b> (chi phí vốn)</p></div>
      <div class="sd-card"><b>IRR</b><p>Tỷ lệ %, không thấy quy mô</p><p>Giả định tái đầu tư ở <b>IRR</b>: thường quá lạc quan</p><p>Có thể nhiều IRR hoặc không có</p></div></div>
      <p class="sd-note">Crossover rate = IRR của dòng tiền chênh lệch L - S = (0; -700; -50; 1.000) = <b>16,00%</b>.</p>`),

    S('Dòng tiền đổi dấu hai lần: hai IRR', `<div class="sd-cols2 wide-left"><div>${profM}</div>
      <div><p class="sd-cap">Dòng tiền: -100; +230; -132</p>
      <div class="sd-steps"><span>NPV(10%) = 0 và NPV(20%) = 0</span><span>NPV(15%) = <b>0,19</b>; NPV(0%) = -2</span><span>Mỗi lần đổi dấu có thể thêm một IRR</span></div>
      <p class="sd-note">IRR không duy nhất thì vô nghĩa → dùng <b>NPV</b>.</p></div></div>`),

    S('ROIC: công ty có tạo giá trị không?', `<div class="sd-f">ROIC = ${frac('NOPAT', 'Vốn đầu tư bình quân')} = ${frac('NOPAT', 'Doanh thu')} × ${frac('Doanh thu', 'Vốn đầu tư')}</div>
      <div class="sd-cols3">
      <div class="sd-card"><b>NOPAT</b><p>150 × (1 - 20%) = 120</p></div>
      <div class="sd-card"><b>Vốn bình quân</b><p>(950 + 1.050)/2 = 1.000</p></div>
      <div class="sd-card acc"><b>ROIC = 12%</b><p>= 15% biên × 0,8 vòng quay</p></div></div>
      <div class="sd-rule up">ROIC 12% &gt; WACC 9% → <b>tạo giá trị</b></div>`),

    S('NPV / IRR và ROIC: dùng khi nào?', `<div class="sd-tbl grid"><div class="head"><span></span><span>NPV / IRR</span><span>ROIC</span></div>
      <div><span>Đối tượng</span><span>Từng dự án</span><span>Cả công ty</span></div>
      <div><span>Thời điểm</span><span>Trước đầu tư</span><span>Sau đầu tư</span></div>
      <div><span>Dữ liệu</span><span>Dòng tiền dự báo</span><span>Số liệu kế toán</span></div>
      <div><span>Người dùng</span><span>Ban quản lý</span><span>Nhà phân tích ngoài</span></div></div>
      <p class="sd-note">Hạn chế ROIC: dựa trên kế toán, nhìn về quá khứ, biến động, mỗi người tính một kiểu.</p>`),

    S('Dòng tiền nào được tính?', `<div class="sd-cols2">
      <div><div class="sd-rule up">Chi phí cơ hội <b>Tính</b></div><div class="sd-rule up">Ăn mòn doanh thu, cộng hưởng <b>Tính</b></div><div class="sd-rule up">Thuế, vốn lưu động <b>Tính</b></div></div>
      <div><div class="sd-rule down">Chi phí chìm <b>Bỏ</b></div><div class="sd-rule down">Lãi vay, cổ tức <b>Bỏ</b></div><div class="sd-rule down">Lợi nhuận kế toán <b>Bỏ</b></div></div></div>
      <p class="sd-note">Nguyên tắc: dòng tiền <b>tăng thêm, sau thuế</b>, của cả công ty, đúng thời điểm. Chi phí tài trợ đã nằm trong r.</p>`),

    S('Sai lầm thường gặp', `<div class="sd-cols2">
      <div class="sd-card"><b>Lỗi nhận thức</b><p>Dự báo sai, quên phản ứng của đối thủ</p><p>Coi vốn nội bộ là "miễn phí"</p><p>Lạm phát không nhất quán: thực 5% + lạm phát 3% → danh nghĩa <b>8,15%</b></p></div>
      <div class="sd-card acc"><b>Thiên lệch hành vi</b><p>Inertia: ngân sách như năm trước</p><p>Chạy theo EPS ngắn hạn</p><p>Pet project của lãnh đạo</p><p>Bỏ qua phương án và kịch bản khác</p></div></div>`),

    S('Năm loại quyền chọn thực', `<div class="sd-grid4">
      <div class="sd-card"><b>Timing</b><p>Trì hoãn để chờ thông tin</p></div>
      <div class="sd-card"><b>Sizing</b><p>Từ bỏ khi xấu; mở rộng khi tốt</p></div>
      <div class="sd-card"><b>Flexibility</b><p>Đổi giá bán; đổi cách sản xuất, đầu vào</p></div>
      <div class="sd-card acc"><b>Fundamental</b><p>Cả dự án là quyền chọn: khoan dầu khi giá dầu cao</p></div></div>
      <div class="sd-f sm">NPV có quyền chọn = NPV gốc - chi phí quyền chọn + giá trị quyền chọn</div>`),

    S('Ví dụ: quyền từ bỏ', `<div class="sd-cols2 wide-left"><div>${tree}</div>
      <div><div class="sd-steps"><span>Không quyền chọn: (75 + 30)/1,1 - 100 = <b>-4,55</b></span><span>Có quyền bán 90: (75 + 45)/1,1 - 100 = <b>9,09</b></span><span>Giá trị quyền chọn = <b>13,64</b></span></div>
      <p class="sd-note">Quyền chọn chỉ thực hiện khi có lợi → luôn làm <b>tăng</b> giá trị dự án.</p></div></div>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>4 loại dự án, bất định tăng dần</span><span>NPV &gt; 0; IRR &gt; r</span>
      <span>Loại trừ, mâu thuẫn → chọn NPV</span><span>Đổi dấu nhiều lần → nhiều IRR</span>
      <span>ROIC = NOPAT / vốn bình quân, so WACC</span><span>Bỏ chi phí chìm và chi phí tài trợ</span>
      <span>Danh nghĩa với danh nghĩa, thực với thực</span><span>Real options luôn cộng thêm giá trị</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 10 câu, mục tiêu ≥ 7 câu đúng.</p>`),
  ];

  addDeck('CF-05', `Slide Capital Allocation - bản thiết kế riêng (${slides.length} slide)`, slides);
}());
