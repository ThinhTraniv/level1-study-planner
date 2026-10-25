// Bộ slide tự thiết kế cho EQ-08 Financial Statement Forecasting in Equity Valuation.
(function () {
  const L = window.LESSONS && window.LESSONS['EQ-08'];
  if (!L) return;
  const { slide, addDeck } = window.CFAH;
  const K = 'EQ-08 · Financial Statement Forecasting';
  const S = (title, body, opt = {}) => slide(title, body, Object.assign({ kicker: K }, opt));
  const fmt = (x, d = 2) => { const [a, b] = x.toFixed(d).split('.'); return a.replace(/\B(?=(\d{3})+(?!\d))/g, '.') + (b ? ',' + b : ''); };

  // Mô hình An Phát tính trực tiếp trong file.
  const R = [1000]; [0.08, 0.07, 0.06, 0.03].forEach(g => R.push(R[R.length - 1] * (1 + g)));
  const fcff = i => 0.15 * R[i] * 0.8 + 0.04 * R[i] - 0.06 * R[i] - 0.1 * (R[i] - R[i - 1]);
  const w = 0.09, gL = 0.03, tv = fcff(4) / (w - gL);
  const pvF = [1, 2, 3].reduce((a, i) => a + fcff(i) / (1 + w) ** i, 0), pvT = tv / (1 + w) ** 3, ev = pvF + pvT, ps = (ev - 300) / 50;

  // Dòng chảy: yếu tố dẫn dắt → ba báo cáo → đầu ra → định giá.
  const flow = (() => {
    const box = [['Yếu tố dẫn dắt', 'tăng trưởng, biên, capex'], ['Ba báo cáo', 'KQKD · CĐKT · LCTT'], ['Đầu ra', 'FCFF, EPS, EBITDA'], ['Định giá', 'DCF · bội số']];
    let s = '<svg viewBox="0 0 600 150" class="sv" role="img" aria-label="Từ yếu tố dẫn dắt đến giá trị">';
    box.forEach(([a, b], i) => {
      const x = 10 + i * 150;
      s += `<rect x="${x}" y="30" width="130" height="80" rx="10" class="sv-panel"/><text x="${x + 65}" y="64" class="sv-txt ${i === 3 ? 'sv-t-pv' : ''}" style="font-size:16px">${a}</text><text x="${x + 65}" y="90" class="sv-muted" style="font-size:12px">${b}</text>`;
      if (i < 3) s += `<line x1="${x + 132}" y1="70" x2="${x + 148}" y2="70" class="sv-up"/>`;
    });
    return `${s}</svg>`;
  })();

  // Cấu phần EV.
  const evBars = `<div class="sd-bars">
    <div class="sd-bar"><span class="sd-bar-l">PV FCFF 2026 - 2028</span><span class="sd-bar-t"><i style="width:${(pvF / ev) * 100}%"></i></span><b>${fmt(pvF)}</b></div>
    <div class="sd-bar"><span class="sd-bar-l">PV giá trị cuối kỳ</span><span class="sd-bar-t"><i style="width:${(pvT / ev) * 100}%"></i></span><b>${fmt(pvT)}</b></div>
    <div class="sd-bar"><span class="sd-bar-l">EV</span><span class="sd-bar-t"><i style="width:100%"></i></span><b>${fmt(ev)}</b></div></div>`;

  const slides = [
    S('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Equity Investments · EQ-08</div>
      <h2>Financial Statement Forecasting<br>in Equity Valuation</h2>
      <p>Không ai cho sẵn FCFF năm tới - bạn phải tự dự phóng</p>
      <div class="sd-chips"><span>LOS 1 · Lý do, xây dựng, công dụng</span><span>LOS 2 · Cấu trúc theo công ty</span><span>LOS 3 · Từ đầu ra đến giá trị</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Mô hình nằm ở đâu trong định giá?', `${flow}
      <p class="sd-note">Đầu ra của mô hình dự phóng = <b>đầu vào</b> của DCF (EQ-06) và bội số forward (EQ-07).</p>`),

    S('Lý do: nhất quán nội tại', `<div class="sd-cols2">
      <div class="sd-card"><b>Đoán EPS bằng cảm giác</b><p>Doanh thu +20% nhưng quên tồn kho, phải thu, nhà xưởng, nguồn tài trợ</p></div>
      <div class="sd-card acc"><b>Mô hình ba báo cáo</b><p>Tăng trưởng cần tài sản → tài sản cần vốn → vốn tạo lãi vay, pha loãng</p></div></div>
      <div class="sd-rule down">Mô hình chỉ tốt bằng giả định: tập trung vào <b>vài driver quan trọng nhất</b></div>`),

    S('Công dụng', `<div class="sd-grid4">
      <div class="sd-card"><b>Đầu vào định giá</b><p>FCFF, FCFE, EPS, EBITDA dự phóng</p></div>
      <div class="sd-card"><b>Kịch bản và độ nhạy</b><p>Giá trị đổi bao nhiêu nếu g, biên đổi?</p></div>
      <div class="sd-card"><b>Kỳ vọng của thị trường</b><p>Giả định nào làm mô hình = giá?</p></div>
      <div class="sd-card"><b>Theo dõi, catalyst</b><p>So kết quả quý với dự phóng</p></div></div>`),

    S('Bảy bước xây dựng', `<div class="sd-steps">
      <span>① Phân tích lịch sử 3 - 5 năm</span><span>② Doanh thu (quan trọng nhất)</span><span>③ Chi phí, khấu hao</span>
      <span>④ Vốn lưu động, tài sản cố định</span><span>⑤ Tài trợ, lãi vay, thuế</span><span>⑥ Liên kết, cân bằng (tiền hoặc vay hạn mức)</span><span>⑦ Dòng tiền tự do → định giá</span></div>`),

    S('Ba cách dự báo doanh thu', `<div class="sd-cols3">
      <div class="sd-card"><b>Top-down</b><p>Thị trường × thị phần</p><small>Từ vĩ mô, ngành</small></div>
      <div class="sd-card"><b>Bottom-up</b><p>Sản lượng × giá</p><small>Từ hoạt động công ty</small></div>
      <div class="sd-card acc"><b>Hybrid</b><p>Từng mảng + kiểm tra thị phần</p><small>Đối chiếu chéo</small></div></div>
      <p class="sd-note">Sản lượng +5%, giá +3%: 1.000 × 1,05 × 1,03 = <b>1.081,5</b> (+8,15%, không phải +8%)</p>`),

    S('An Phát: giả định', `<div class="sd-tbl grid"><div class="head"><span>Yếu tố</span><span>Giả định</span></div>
      <div><span>Doanh thu 2025</span><span>1.000</span></div>
      <div><span>Tăng trưởng 2026 / 2027 / 2028</span><span>8% / 7% / 6%</span></div>
      <div><span>Tăng trưởng từ 2029</span><span>3% mãi mãi</span></div>
      <div><span>Biên EBIT</span><span>40% - 25% = 15%</span></div>
      <div><span>Khấu hao / capex</span><span>4% / 6% doanh thu</span></div>
      <div><span>Vốn lưu động</span><span>10% doanh thu</span></div>
      <div><span>Thuế suất</span><span>20%</span></div></div>`),

    S('An Phát: dự phóng FCFF', `<div class="sd-tbl grid"><div class="head"><span></span><span>2026</span><span>2027</span><span>2028</span><span>2029</span></div>
      <div><span>Doanh thu</span>${[1, 2, 3, 4].map(i => `<span>${fmt(R[i])}</span>`).join('')}</div>
      <div><span>EBIT × (1 - t)</span>${[1, 2, 3, 4].map(i => `<span>${fmt(0.12 * R[i])}</span>`).join('')}</div>
      <div><span>+ KH - capex</span>${[1, 2, 3, 4].map(i => `<span>${fmt(-0.02 * R[i])}</span>`).join('')}</div>
      <div><span>- Tăng VLĐ</span>${[1, 2, 3, 4].map(i => `<span>${fmt(0.1 * (R[i] - R[i - 1]))}</span>`).join('')}</div>
      <div><span><b>FCFF</b></span>${[1, 2, 3, 4].map(i => `<span><b>${fmt(fcff(i))}</b></span>`).join('')}</div></div>
      <p class="sd-note">FCFF = EBIT(1 - t) + khấu hao - capex - tăng vốn lưu động. VLĐ theo <b>phần tăng</b> doanh thu.</p>`),

    S('Liên kết ba báo cáo', `<div class="sd-cols3">
      <div class="sd-card"><b>KQKD → CĐKT</b><p>Lợi nhuận giữ lại = đầu kỳ + LN ròng - cổ tức</p></div>
      <div class="sd-card"><b>CĐKT → CĐKT</b><p>TSCĐ = đầu kỳ + capex - khấu hao</p></div>
      <div class="sd-card acc"><b>Biến cân bằng</b><p>Tiền hoặc vay hạn mức để Tài sản = Nợ + Vốn chủ</p></div></div>
      <p class="sd-note">Lãi vay theo dư nợ <b>đầu kỳ</b> để tránh vòng lặp. An Phát: lãi 6% × 400 = 24; LN ròng 2026 = 110,4; EPS = 2,21.</p>`),

    S('Cấu trúc theo đặc điểm công ty', `<div class="sd-tbl grid"><div class="head"><span>Loại</span><span>Driver chính</span><span>Cấu trúc</span></div>
      <div><span>Trưởng thành</span><span>GDP, giá, biên</span><span>Dự báo 3 - 5 năm</span></div>
      <div><span>Tăng trưởng cao</span><span>Người dùng, ARPU</span><span>10 năm+, nhiều kịch bản</span></div>
      <div><span>Chu kỳ</span><span>Giá hàng hóa, công suất</span><span>Trọn chu kỳ, biên giữa chu kỳ</span></div>
      <div><span>Ngân hàng</span><span>Cho vay, NIM, dự phòng</span><span>Định giá vốn chủ trực tiếp</span></div></div>`),

    S('Kiểm tra một mô hình', `<div class="sd-check">
      <span>Dự báo đến trạng thái ổn định?</span><span>g dài hạn ≤ GDP danh nghĩa?</span>
      <span>Tăng trưởng mà capex &lt; khấu hao?</span><span>Biên so với lịch sử, đối thủ?</span>
      <span>Bảng cân đối có cân?</span><span>Vòng lặp đã xử lý?</span></div>`),

    S('Từ FCFF đến giá mỗi cổ phiếu', `<div class="sd-steps">
      <span>① TV₂₀₂₈ = ${fmt(fcff(4), 4)} / (9% - 3%) = ${fmt(tv)}</span>
      <span>② CF: C01 = 100 · C02 = 108 · C03 = 115,56 + ${fmt(tv)} = ${fmt(fcff(3) + tv)}</span>
      <span>③ <kbd>NPV</kbd> 9 → EV = <b>${fmt(ev)}</b></span>
      <span>④ Vốn chủ = EV - nợ ròng 300 = ${fmt(ev - 300)} → <b>${fmt(ps)}</b> / CP so với giá 27</span></div>`),

    S('Đọc đầu ra: TV và bội số ngầm định', `<div class="sd-cols2"><div>${evBars}<p class="sd-note">Giá trị cuối kỳ chiếm <b>${fmt((pvT / ev) * 100, 0)}%</b> EV.</p></div>
      <div><div class="sd-rule">EV / EBITDA 2026 = <b>${fmt(ev / (0.19 * R[1]), 1)}</b></div><div class="sd-rule">P/E forward = <b>${fmt(ps / 2.208, 1)}</b></div>
      <p class="sd-note">So với nhóm so sánh: hợp lý hay phải xem lại giả định?</p></div></div>`),

    S('Bảng độ nhạy: giá trị mỗi cổ phiếu', `<div class="sd-tbl grid"><div class="head"><span>WACC \\ g</span><span>2%</span><span>3%</span><span>4%</span></div>
      <div><span>8%</span><span>31,95</span><span>38,43</span><span>48,16</span></div>
      <div><span>9%</span><span>26,46</span><span><b>30,97</b></span><span>37,27</span></div>
      <div><span>10%</span><span>22,35</span><span>25,63</span><span>30,02</span></div></div>
      <p class="sd-note">Giá 27 nằm trong khoảng 22,35 - 48,16 → kết luận là một <b>khoảng</b> và một lập luận.</p>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>Mô hình tạo đầu vào nhất quán</span><span>Top-down · bottom-up · hybrid</span>
      <span>Sản lượng × giá: nhân, không cộng</span><span>Tăng VLĐ = tỷ lệ × phần tăng doanh thu</span>
      <span>FCFF = EBIT(1 - t) + KH - capex - ΔVLĐ</span><span>Cấu trúc theo loại công ty</span>
      <span>Dự báo đến trạng thái ổn định</span><span>EV - nợ ròng → ÷ số CP</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 10 câu, mục tiêu ≥ 7 câu đúng.</p>`),
  ];

  addDeck('EQ-08', `Slide Financial Statement Forecasting - bản thiết kế riêng (${slides.length} slide)`, slides);
}());
