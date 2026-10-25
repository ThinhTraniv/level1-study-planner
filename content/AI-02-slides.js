// Bộ slide tự thiết kế cho AI-02 Alternative Investment Performance and Returns.
(function () {
  const L = window.LESSONS && window.LESSONS['AI-02'];
  if (!L) return;
  const { frac, slide, addDeck } = window.CFAH;
  const K = 'AI-02 · Performance and Returns';
  const S = (title, body, opt = {}) => slide(title, body, Object.assign({ kicker: K }, opt));
  const fmt = (x, d = 0) => x.toFixed(d).replace('.', ',');

  // Đường cong J: dòng tiền lũy kế của ví dụ 2.1.
  function jCurve() {
    const cum = [-40, -70, -100, -80, -30, 60];
    const W = 600, H = 270, l = 60, r = 580, t = 20, b = 230, lo = -110, hi = 80;
    const X = i => l + 30 + (i / 5) * (r - l - 60), Y = v => b - ((v - lo) / (hi - lo)) * (b - t);
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv" role="img" aria-label="Dòng tiền lũy kế hình chữ J">`;
    [-100, -50, 0, 50].forEach(v => { s += `<line x1="${l}" y1="${Y(v)}" x2="${r}" y2="${Y(v)}" class="${v === 0 ? 'sv-axis' : 'sv-grid'}"/><text x="${l - 8}" y="${Y(v) + 5}" class="sv-muted" text-anchor="end">${v}</text>`; });
    cum.forEach((v, i) => {
      const y0 = Y(0), y1 = Y(v);
      s += `<rect x="${X(i) - 22}" y="${Math.min(y0, y1)}" width="44" height="${Math.abs(y1 - y0)}" class="sv-panel"/>`;
      s += `<text x="${X(i)}" y="${v < 0 ? y1 + 22 : y1 - 8}" class="sv-txt ${v < 0 ? 'sv-t-down' : 'sv-t-up'}">${v > 0 ? '+' : ''}${v}</text>`;
      s += `<text x="${X(i)}" y="${H - 6}" class="sv-muted">t=${i}</text>`;
    });
    s += `<polyline points="${cum.map((v, i) => `${X(i)},${Y(v)}`).join(' ')}" class="sv-curve"/>`;
    cum.forEach((v, i) => { s += `<circle cx="${X(i)}" cy="${Y(v)}" r="5" class="sv-dot"/>`; });
    return `${s}</svg>`;
  }

  // NAV qua hai năm với high-water mark 100 (ví dụ 7.3).
  function hwmChart() {
    const pts = [[0, 100], [1, 88.2], [2, 108.045]];
    const W = 600, H = 260, l = 60, r = 560, t = 20, b = 220, lo = 80, hi = 115;
    const X = i => l + 40 + (i / 2) * (r - l - 80), Y = v => b - ((v - lo) / (hi - lo)) * (b - t);
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv" role="img" aria-label="NAV và high-water mark">`;
    s += `<line x1="${l}" y1="${b}" x2="${r}" y2="${b}" class="sv-axis"/><line x1="${l}" y1="${t}" x2="${l}" y2="${b}" class="sv-axis"/>`;
    s += `<line x1="${l}" y1="${Y(100)}" x2="${r}" y2="${Y(100)}" class="sv-dash"/><text x="${l + 6}" y="${Y(100) - 8}" class="sv-muted" text-anchor="start">High-water mark = 100</text>`;
    s += `<line x1="${X(2)}" y1="${Y(100)}" x2="${X(2)}" y2="${Y(108.045)}" class="sv-up"/>`;
    s += `<line x1="${X(2) + 14}" y1="${Y(88.2)}" x2="${X(2) + 14}" y2="${Y(100)}" class="sv-down"/>`;
    s += `<polyline points="${pts.map(([i, v]) => `${X(i)},${Y(v)}`).join(' ')}" class="sv-curve"/>`;
    pts.forEach(([i, v]) => { s += `<circle cx="${X(i)}" cy="${Y(v)}" r="6" class="sv-dot"/><text x="${X(i)}" y="${Y(v) + (i === 1 ? 26 : -12)}" class="sv-txt">${fmt(v, i === 2 ? 3 : 1)}</text>`; });
    s += `<text x="${X(2) - 12}" y="${Y(104)}" class="sv-txt sv-t-up" text-anchor="end">có phí: 8,045</text>`;
    s += `<text x="${X(2) + 22}" y="${Y(94)}" class="sv-txt sv-t-down" text-anchor="start">không phí</text>`;
    ['Đầu năm 1', 'Cuối năm 1', 'Cuối năm 2'].forEach((c, i) => { s += `<text x="${X(i)}" y="${H - 8}" class="sv-muted">${c}</text>`; });
    return `${s}</svg>`;
  }

  const bars = (rows, max) => `<div class="sd-bars">${rows.map(([lab, v]) => `<div class="sd-bar"><span class="sd-bar-l">${lab}</span><span class="sd-bar-t"><i style="width:${(Math.abs(v) / max) * 100}%"></i></span><b>${fmt(v, 2)}%</b></div>`).join('')}</div>`;

  const slides = [
    S('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Alternative Investments · AI-02</div>
      <h2>Alternative Investment<br>Performance and Returns</h2>
      <p>Đo thành quả và tính lợi suất sau phí</p>
      <div class="sd-chips"><span>LOS 1 · Đánh giá thành quả</span><span>LOS 2 · Lợi suất trước và sau phí</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Vì sao đo thành quả lại khó?', `<div class="sd-grid4">
      <div class="sd-card"><b>Dòng tiền không đều</b><p>Gọi vốn dần, trả về dần.</p></div>
      <div class="sd-card"><b>Đòn bẩy</b><p>Khuếch đại lời và lỗ.</p></div>
      <div class="sd-card"><b>Định giá</b><p>Không có giá thị trường, dùng mô hình.</p></div>
      <div class="sd-card acc"><b>Phí phức tạp</b><p>Trước phí và sau phí khác xa nhau.</p></div></div>`),

    S('Vòng đời quỹ: ba giai đoạn', `<div class="sd-cols3">
      <div class="sd-card"><div class="sd-n">1</div><b>Cam kết vốn</b><p>Tìm thương vụ, gọi vốn, trả phí.</p><small>Lợi suất âm</small></div>
      <div class="sd-card"><div class="sd-n">2</div><b>Triển khai vốn</b><p>Đầu tư, cải thiện hoạt động.</p><small>Âm hoặc gần 0</small></div>
      <div class="sd-card acc"><div class="sd-n">3</div><b>Phân phối</b><p>Thoái vốn, trả tiền về LP.</p><small>Dương, tăng nhanh</small></div></div>`),

    S('Đường cong J', `${jCurve()}
      <p class="sd-note">Góp 40, 30, 30; nhận 20, 50, 90. Lũy kế chạm đáy -100 ở t = 2, dương từ t = 5.</p>`),

    S('IRR và MOIC', `<div class="sd-cols2">
      <div class="sd-card acc"><b>IRR (money-weighted)</b><p>Tính đến thời điểm dòng tiền.</p><div class="sd-keys"><span>CF0 = -40</span><span>C01, C02 = -30</span><span>C03 = 20 · C04 = 50 · C05 = 90</span><span><kbd>IRR</kbd> <kbd>CPT</kbd> = <b>14,16%</b></span></div></div>
      <div class="sd-card"><b>MOIC</b><div class="sd-f sm">${frac('đã nhận + còn lại', 'vốn đã góp')} = ${frac('160', '100')} = <b>1,6x</b></div><p>Đơn giản nhưng <b>bỏ qua thời gian</b>.</p></div></div>
      <p class="sd-note">PE: GP kiểm soát thời điểm → IRR. Hedge fund: LP tự nạp, rút → time-weighted.</p>`),

    S('Sharpe dễ bị thổi phồng', `<div class="sd-cols2">
      <div class="sd-card"><b>Sharpe</b><div class="sd-f sm">${frac('R<sub>p</sub> - R<sub>f</sub>', 'σ<sub>p</sub>')}</div><p>σ bị đánh giá thấp do làm mượt; phân phối lệch, đuôi dày.</p></div>
      <div class="sd-card acc"><b>Sortino</b><div class="sd-f sm">${frac('R<sub>p</sub> - R<sub>f</sub>', 'σ<sub>downside</sub>')}</div><p>Chỉ phạt biến động xấu: hợp với lợi suất bất đối xứng.</p></div></div>`),

    S('Đòn bẩy: khuếch đại hai chiều', `<div class="sd-f">r<sub>L</sub> = ${frac('r(V<sub>c</sub> + V<sub>b</sub>) - V<sub>b</sub>r<sub>b</sub>', 'V<sub>c</sub>')}</div>
      <p class="sd-cap">Vốn tự có 100, vay 50 lãi 5%:</p>
      <div class="sd-cols2"><div class="sd-rule up">Tài sản +10% → r<sub>L</sub> = (15 - 2,5)/100 = <b>12,5%</b></div><div class="sd-rule down">Tài sản -10% → r<sub>L</sub> = (-15 - 2,5)/100 = <b>-17,5%</b></div></div>
      <p class="sd-note">Lãi vay phải trả dù lời hay lỗ.</p>`),

    S('Thứ bậc giá trị hợp lý', `<div class="sd-tbl grid"><div class="head"><span>Cấp</span><span>Đầu vào</span><span>Ví dụ</span></div>
      <div><span>Level 1</span><span>Giá niêm yết, tài sản giống hệt</span><span>Cổ phiếu niêm yết</span></div>
      <div><span>Level 2</span><span>Quan sát được, gián tiếp</span><span>Trái phiếu ít giao dịch, swap</span></div>
      <div><span>Level 3</span><span>Không quan sát được, mô hình</span><span>Công ty tư nhân, bất động sản</span></div></div>
      <p class="sd-note">Phần lớn private capital là <b>Level 3</b>: mark to model, chủ quan, cập nhật thưa.</p>`),

    S('Ba sai lệch làm alternatives "đẹp" hơn', `<div class="sd-cols3">
      <div class="sd-card"><b>Làm mượt</b><p>σ và tương quan thấp hơn thực tế → Sharpe cao giả.</p></div>
      <div class="sd-card"><b>Survivorship</b><p>Quỹ thua lỗ đóng cửa, biến mất khỏi chỉ số.</p></div>
      <div class="sd-card"><b>Backfill</b><p>Quỹ chỉ báo cáo khi đã có thành tích đẹp.</p></div></div>
      <p class="sd-note">Cả ba: lợi suất <b>cao hơn</b>, rủi ro <b>thấp hơn</b> thực tế.</p>`),

    S('Thanh khoản: điều kiện rút vốn', `<div class="sd-grid4">
      <div class="sd-card"><b>Lockup</b><p>Không được rút (hard) hoặc rút chịu phí cao (soft).</p></div>
      <div class="sd-card"><b>Notice period</b><p>Báo trước 30-90 ngày.</p></div>
      <div class="sd-card"><b>Redemption fee</b><p>Rút 5 triệu, phí 2% → nhận 4,9 triệu.</p></div>
      <div class="sd-card"><b>Gate</b><p>Giới hạn tổng tiền rút mỗi kỳ.</p></div></div>`),

    S('Tính phí: hỏi 3 câu trước', `<div class="sd-steps"><span>① Phí quản lý trên giá trị đầu năm hay cuối năm?</span><span>② Phí thành quả net of phí quản lý hay independent?</span><span>③ Có hurdle (hard/soft), high-water mark không?</span></div>
      <p class="sd-cap">100 → 115 gộp; phí quản lý 2% × 115 = 2,3; carry 20%:</p>
      ${bars([['Net of', 10.16], ['Independent', 9.70]], 12)}`),

    S('Hurdle 8%: hard và soft', `<p class="sd-cap">Lợi nhuận sau phí quản lý 12,7 trên vốn 100:</p>
      ${bars([['Soft hurdle', 10.16], ['Hard hurdle', 11.76]], 12)}
      <div class="sd-cols2"><div class="sd-rule down">Soft: 20% × 12,7 = 2,54</div><div class="sd-rule up">Hard: 20% × (12,7 - 8) = 0,94</div></div>
      <p class="sd-note">Gộp 9%: lợi nhuận 6,82 &lt; 8 → không có phí thành quả.</p>`),

    S('High-water mark: không trả phí cho việc gỡ lỗ', `<div class="sd-cols2 wide-left"><div>${hwmChart()}</div>
      <div><div class="sd-rule up">Có HWM: 20% × 8,045 = <b>1,609</b></div><div class="sd-rule down">Không HWM: 20% × 19,845 = 3,969</div>
      <p class="sd-note">Lợi suất ròng năm 2: <b>20,68%</b> (có HWM) so với 18,00%.</p></div></div>`),

    S('Waterfall European với full catch-up', `<div class="sd-steps"><span>① Trả vốn: LP 100</span><span>② Preferred return 8%/năm, 3 năm: LP 25,97</span><span>③ Catch-up 100% cho GP: 25,97 / 4 = 6,49</span><span>④ Còn 27,54 chia 80/20: LP 22,03 · GP 5,51</span></div>
      <p class="sd-note">Thu về 160, lợi nhuận 60. GP = 6,49 + 5,51 = <b>12</b> = đúng 20% × 60.</p>`),

    S('American hay European?', `<div class="sd-cols2">
      <div class="sd-card"><b>American (deal by deal)</b><p>Bán A lời 30 → GP nhận ngay <b>6</b>.</p><p>B lỗ 20 → cả quỹ lời 10, GP xứng đáng 2.</p><p>Clawback: LP đòi lại <b>4</b>.</p></div>
      <div class="sd-card acc"><b>European (whole of fund)</b><p>LP nhận đủ 100 vốn trước.</p><p>GP nhận carry trên tổng lợi nhuận 10: <b>2</b>.</p><p>Không cần clawback.</p></div></div>
      <p class="sd-note">American có lợi cho GP (nhận sớm); European có lợi cho LP.</p>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>J-curve: âm trước, dương sau</span><span>IRR tính thời điểm; MOIC thì không</span>
      <span>Đòn bẩy: nhớ trừ lãi vay</span><span>Level 3 = mark to model</span>
      <span>Làm mượt, survivorship, backfill: đẹp giả</span><span>Net of hay independent: đọc kỹ đề</span>
      <span>HWM: phí chỉ trên phần vượt đỉnh</span><span>Full catch-up → GP đúng 20%</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 10 câu.</p>`),
  ];

  addDeck('AI-02', `Slide Performance and Returns - bản thiết kế riêng (${slides.length} slide)`, slides);
}());
