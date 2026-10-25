// Bộ slide tự thiết kế cho EQ-06 Discounted Cash Flow (DCF) and Growth Models.
(function () {
  const L = window.LESSONS && window.LESSONS['EQ-06'];
  if (!L) return;
  const { frac, tl, slide, addDeck } = window.CFAH;
  const K = 'EQ-06 · DCF and Growth Models';
  const S = (title, body, opt = {}) => slide(title, body, Object.assign({ kicker: K }, opt));
  const fmt = (x, d = 2) => x.toFixed(d).replace('.', ',');

  // Đường giá trị Gordon theo r (D1 = 1,744; g = 9%).
  const sensCurve = (() => {
    const D1 = 1.744, g = 0.09;
    const W = 600, H = 300, l = 60, r = 580, tp = 20, b = 250, rlo = 10.5, rhi = 15, vmax = 120;
    const X = x => l + ((x - rlo) / (rhi - rlo)) * (r - l), Y = v => b - (Math.min(v, vmax) / vmax) * (b - tp);
    let pts = '';
    for (let x = rlo; x <= rhi + 1e-9; x += 0.05) pts += `${X(x).toFixed(1)},${Y(D1 / (x / 100 - g)).toFixed(1)} `;
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv" role="img" aria-label="Giá trị Gordon giảm mạnh khi r tăng">`;
    s += `<line x1="${l}" y1="${b}" x2="${r}" y2="${b}" class="sv-axis"/><line x1="${l}" y1="${tp}" x2="${l}" y2="${b}" class="sv-axis"/>`;
    [0, 40, 80, 120].forEach(v => { s += `<line x1="${l}" y1="${Y(v)}" x2="${r}" y2="${Y(v)}" class="sv-grid"/><text x="${l - 10}" y="${Y(v) + 5}" class="sv-muted" text-anchor="end">${v}</text>`; });
    [11, 12, 13, 14, 15].forEach(x => { s += `<text x="${X(x)}" y="${b + 24}" class="sv-muted">${x}%</text>`; });
    s += `<polyline points="${pts}" class="sv-curve"/>`;
    [11, 12, 13].forEach(x => { const v = D1 / (x / 100 - g); s += `<circle cx="${X(x)}" cy="${Y(v)}" r="6" class="sv-dot"/><text x="${X(x) + 12}" y="${Y(v) - 8}" class="sv-txt" text-anchor="start">${fmt(v)}</text>`; });
    s += `<text x="${(l + r) / 2}" y="${H - 2}" class="sv-muted">Lợi suất yêu cầu r (g = 9%, D₁ = 1,744)</text>`;
    return `${s}</svg>`;
  })();

  // Tỷ trọng giá trị: PV cổ tức giai đoạn đầu và PV giá trị cuối kỳ (ví dụ Phương Nam).
  const pvD = 2.3 / 1.11 + 2.645 / 1.11 ** 2 + 3.04175 / 1.11 ** 3, pvT = 53.230625 / 1.11 ** 3, tot = pvD + pvT;
  const shareBars = `<div class="sd-bars">
    <div class="sd-bar"><span class="sd-bar-l">PV cổ tức năm 1 - 3</span><span class="sd-bar-t"><i style="width:${(pvD / tot) * 100}%"></i></span><b>${fmt(pvD)}</b></div>
    <div class="sd-bar"><span class="sd-bar-l">PV giá trị cuối kỳ</span><span class="sd-bar-t"><i style="width:${(pvT / tot) * 100}%"></i></span><b>${fmt(pvT)}</b></div>
    <div class="sd-bar"><span class="sd-bar-l">Tổng V₀</span><span class="sd-bar-t"><i style="width:100%"></i></span><b>${fmt(tot)}</b></div></div>`;

  const slides = [
    S('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Equity Investments · EQ-06</div>
      <h2>Discounted Cash Flow<br>and Growth Models</h2>
      <p>Giá trị = PV của dòng tiền - chọn đúng dòng tiền, đúng tăng trưởng</p>
      <div class="sd-chips"><span>LOS 1 · DDM, FCFE, FCFF, RI</span><span>LOS 2 · Gordon, nhiều giai đoạn</span><span>LOS 3 · Hạn chế</span><span>LOS 4 · Cổ phiếu ưu đãi</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Bốn mô hình, bốn dòng tiền', `<div class="sd-tbl grid"><div class="head"><span>Mô hình</span><span>Dòng tiền</span><span>Chiết khấu ở</span><span>Ra</span></div>
      <div><span>DDM</span><span>Cổ tức</span><span>r<sub>e</sub></span><span>Vốn chủ</span></div>
      <div><span>FCFE</span><span>CFO - FCInv + vay ròng</span><span>r<sub>e</sub></span><span>Vốn chủ</span></div>
      <div><span>FCFF</span><span>CFO + Int(1 - t) - FCInv</span><span>WACC</span><span>Doanh nghiệp</span></div>
      <div><span>Residual income</span><span>E - r<sub>e</sub> × B</span><span>r<sub>e</sub></span><span>B₀ + PV(RI)</span></div></div>
      <p class="sd-note">Dòng tiền cho cổ đông → r<sub>e</sub> · Dòng tiền cho mọi người cấp vốn → WACC. <b>Không trộn.</b></p>`),

    S('Chọn mô hình nào?', `<div class="sd-grid4">
      <div class="sd-card"><b>DDM</b><p>Cổ tức ổn định, gắn với lợi nhuận; cổ đông thiểu số</p></div>
      <div class="sd-card"><b>FCFE</b><p>Ít cổ tức, FCF dương, đòn bẩy ổn định</p></div>
      <div class="sd-card"><b>FCFF</b><p>Đòn bẩy cao hoặc thay đổi; FCFE âm</p></div>
      <div class="sd-card"><b>Residual income</b><p>FCF âm nhiều năm, nhưng có book value đáng tin</p></div></div>`),

    S('Quy trình 5 bước', `<div class="sd-steps">
      <span>① Hiểu doanh nghiệp: ngành, chiến lược, cạnh tranh</span>
      <span>② Dự báo dòng tiền và giả định tăng trưởng</span>
      <span>③ Ước tính lợi suất yêu cầu: r<sub>e</sub> = r<sub>f</sub> + β(E(R<sub>m</sub>) - r<sub>f</sub>), hoặc WACC</span>
      <span>④ Chọn mô hình phù hợp, tính giá trị</span>
      <span>⑤ So với giá, kiểm tra độ nhạy, kết luận</span></div>`),

    S('Nắm giữ hữu hạn: cổ tức + giá bán', `${tl(1, [{ t: 0, label: 'V₀ = 36,38', cls: 'pv' }, { t: 1, label: 'D₁ + P₁ = 2,20 + 38' }], { h: 140 })}
      <div class="sd-steps"><span>① r<sub>e</sub> = 4% + 1,3 × 5% = 10,5%</span><span>② D₁ = 2,00 × 1,10 = 2,20</span><span>③ V₀ = (2,20 + 38) / 1,105 = <b>36,38</b></span></div>
      <p class="sd-note">Giá bán P<sub>n</sub> = giá trị của mọi cổ tức sau năm n → kéo dài vô hạn = DDM tổng quát.</p>`),

    S('Gordon: tăng đều mãi mãi', `<div class="sd-big">V₀ = ${frac('D<sub>1</sub>', 'r<sub>e</sub> - g')}</div>
      <div class="sd-cols3"><div class="sd-card"><b>D₁, không phải D₀</b><p>D₁ = D₀(1 + g)</p></div>
      <div class="sd-card"><b>Cần r<sub>e</sub> &gt; g</b><p>Không thì vô nghĩa</p></div>
      <div class="sd-card"><b>g dài hạn</b><p>Gần tăng trưởng GDP danh nghĩa</p></div></div>
      <p class="sd-note">Đảo ngược: r<sub>e</sub> = D₁/P₀ + g → P₀ = 50, D₁ = 2, g = 6% → r<sub>e</sub> = <b>10%</b></p>`),

    S('g lấy từ đâu: g = b × ROE', `<div class="sd-cols2">
      <div><div class="sd-f">g = (1 - tỷ lệ chi trả) × ROE</div>
      <div class="sd-steps"><span>EPS 4,00 · cổ tức 1,60 → chi trả 40%, b = 60%</span><span>g = 60% × 15% = <b>9%</b></span><span>V₀ = 1,744 / (12% - 9%) = <b>58,13</b></span></div></div>
      <div><div class="sd-rule down">Bẫy: 40% × 15% = 6% <b>sai</b></div><p class="sd-note">Tăng trưởng đến từ phần lợi nhuận <b>giữ lại</b> để tái đầu tư, không phải phần trả ra.</p></div></div>`),

    S('Độ nhạy: mẫu số (r - g) rất nhỏ', `<div class="sd-cols2 wide-left"><div>${sensCurve}</div>
      <div><div class="sd-rule">r = 11% → <b>87,20</b></div><div class="sd-rule up">r = 12% → <b>58,13</b></div><div class="sd-rule down">r = 13% → <b>43,60</b></div>
      <p class="sd-note">Đổi r chỉ 1 điểm %, giá trị thay đổi 25% - 50%. Tương tự với g.</p></div></div>`),

    S('Khi nào tăng trưởng tạo giá trị?', `<div class="sd-cols2">
      <div class="sd-card acc"><b>ROE &gt; r<sub>e</sub></b><p>Giữ lại và tái đầu tư → giá trị <b>tăng</b></p></div>
      <div class="sd-card"><b>ROE &lt; r<sub>e</sub></b><p>Giữ lại làm g tăng nhưng giá trị <b>giảm</b></p></div></div>
      <div class="sd-f">Giá trị = ${frac('E<sub>1</sub>', 'r<sub>e</sub>')} + giá trị cơ hội tăng trưởng</div>
      <p class="sd-note">E₁/r<sub>e</sub>: giá trị nếu trả hết lợi nhuận, không tăng trưởng.</p>`),

    S('Hai giai đoạn: Phương Nam', `${tl(4, [{ t: 0, label: 'V₀ = 45,36', cls: 'pv' }, { t: 1, label: '2,30' }, { t: 2, label: '2,645' }, { t: 3, label: '3,042 + V₃' }, { t: 4, label: '3,194 ...' }], { h: 140 })}
      <div class="sd-steps"><span>① 15% trong 3 năm: D₁, D₂, D₃; D₄ = D₃ × 1,05 = 3,1938</span><span>② V₃ = D₄ / (11% - 5%) = 53,23 đặt tại <b>t = 3</b></span><span>③ V₀ = PV(D₁, D₂, D₃ + V₃) = <b>45,36</b></span></div>`),

    S('Giá trị cuối kỳ chiếm phần lớn', `<p class="sd-cap">Ví dụ Phương Nam, cấu phần của V₀:</p>${shareBars}
      <p class="sd-note">Giá trị cuối kỳ chiếm <b>${fmt((pvT / tot) * 100, 0)}%</b> → mọi sai số của g<sub>L</sub> và r dồn vào đây.</p>`),

    S('BA II Plus: hàm CF cho nhiều giai đoạn', `<div class="sd-keys"><span><kbd>CF</kbd> <kbd>2ND</kbd> <kbd>CE/C</kbd></span><span>C01 = 2.3</span><span>C02 = 2.645</span><span>C03 = 56.272375</span><span><kbd>NPV</kbd> 11 <kbd>ENTER</kbd></span><span><kbd>↓</kbd> <kbd>CPT</kbd> = <b>45.3647</b></span></div>
      <div class="sd-cols3" style="margin-top:2cqw"><div class="sd-card"><b>CF0 = 0</b><p>Đang tìm giá trị, không có khoản chi ở t = 0</p></div>
      <div class="sd-card"><b>Năm cuối</b><p>Nhập D<sub>n</sub> + V<sub>n</sub> chung một ô</p></div>
      <div class="sd-card"><b>F = 1</b><p>Mỗi cổ tức khác nhau, tần suất 1</p></div></div>`),

    S('Ba giai đoạn', `${tl(5, [{ t: 0, label: 'V₀ = 39,83', cls: 'pv' }, { t: 1, label: '1,50' }, { t: 2, label: '1,875' }, { t: 3, label: '2,10' }, { t: 4, label: '2,352 + V₄' }, { t: 5, label: '2,47 ...' }], { h: 140 })}
      <div class="sd-steps"><span>D₀ = 1,20 · 25% × 2 năm · 12% × 2 năm · 5% mãi mãi · r = 10%</span><span>V₄ = 2,4696 / 5% = 49,392 → C04 = 51,744</span><span>NPV ở 10% = <b>39,83</b></span></div>`),

    S('Dòng tiền tự do', `<div class="sd-cols2">
      <div class="sd-card"><b>FCFE (Thái Sơn)</b><p>500 + 120 - 40 - 200 + 60 = <b>440</b></p><p>4,40 × 1,04 / (11% - 4%) = <b>65,37</b></p><small>Vốn lưu động tăng: trừ · vay ròng: cộng</small></div>
      <div class="sd-card acc"><b>FCFF</b><p>600 / (9% - 3%) = 10.000 (doanh nghiệp)</p><p>10.000 - 3.000 nợ = 7.000 → <b>35</b>/CP</p><small>Quên trừ nợ = lỗi kinh điển</small></div></div>`),

    S('Hạn chế của giả định tăng trưởng', `<div class="sd-cols2">
      <div class="sd-card"><b>Tăng trưởng không đổi</b><p>Chỉ khi r &gt; g</p><p>Rất nhạy với r và g</p><p>g mãi mãi không thể cao hơn nền kinh tế</p></div>
      <div class="sd-card"><b>Nhiều giai đoạn</b><p>TV chiếm phần lớn giá trị</p><p>Chuyển giai đoạn đột ngột</p><p>Khó đoán độ dài và tốc độ mỗi giai đoạn</p></div></div>
      <p class="sd-note">Giảm rủi ro: bảng độ nhạy, nhiều kịch bản, đối chiếu với bội số (EQ-07).</p>`),

    S('Cổ phiếu ưu đãi', `<div class="sd-cols2">
      <div><div class="sd-big">V₀ = ${frac('D<sub>p</sub>', 'r<sub>p</sub>')}</div><p class="sd-note">Không đáo hạn: 6 / 7,5% = <b>80,00</b></p></div>
      <div class="sd-card"><b>Có đáo hạn 10 năm</b><p>Định giá như trái phiếu</p><p>10 <kbd>N</kbd> 7.5 <kbd>I/Y</kbd> 6 <kbd>PMT</kbd> 100 <kbd>FV</kbd></p><p><kbd>CPT</kbd> <kbd>PV</kbd> = <b>-89.7039</b></p></div></div>`),

    S('Điều khoản và giá trị', `<div class="sd-tbl grid"><div class="head"><span>Điều khoản</span><span>Có lợi cho</span><span>Giá trị</span></div>
      <div><span>Callable</span><span>Công ty</span><span>Giảm</span></div>
      <div><span>Putable / retractable</span><span>Nhà đầu tư</span><span>Tăng</span></div>
      <div><span>Convertible</span><span>Nhà đầu tư</span><span>Tăng</span></div>
      <div><span>Cumulative</span><span>Nhà đầu tư</span><span>Tăng</span></div></div>
      <p class="sd-note">r<sub>p</sub> giảm còn 5%: không điều khoản = 120, nhưng callable ở 100 → giá bị chặn quanh 100.</p>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>Cổ đông → r<sub>e</sub>; doanh nghiệp → WACC</span><span>FCFF: nhớ trừ nợ</span>
      <span>Gordon dùng D₁, cần r &gt; g</span><span>g = b × ROE, b = 1 - chi trả</span>
      <span>V<sub>n</sub> = D<sub>n+1</sub>/(r - g<sub>L</sub>) tại t = n</span><span>CF0 = 0, năm cuối = D<sub>n</sub> + V<sub>n</sub></span>
      <span>TV chiếm phần lớn → nhạy</span><span>Call giảm; put, chuyển đổi, cộng dồn tăng</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 10 câu, mục tiêu ≥ 7 câu đúng.</p>`),
  ];

  addDeck('EQ-06', `Slide DCF and Growth Models - bản thiết kế riêng (${slides.length} slide)`, slides);
}());
