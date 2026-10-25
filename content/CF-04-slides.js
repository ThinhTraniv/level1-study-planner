// Bộ slide tự thiết kế cho CF-04 Working Capital and Liquidity.
(function () {
  const L = window.LESSONS && window.LESSONS['CF-04'];
  if (!L) return;
  const { frac, keys, slide, addDeck } = window.CFAH;
  const K = 'CF-04 · Working Capital and Liquidity';
  const S = (title, body, opt = {}) => slide(title, body, Object.assign({ kicker: K }, opt));
  const fmt = (x, d = 2) => x.toFixed(d).replace('.', ',');
  const tcCost = (d, a, n) => (1 + d / (1 - d)) ** (365 / (n - a)) - 1;

  // Thanh thời gian CCC. o: {dio, dso, dpo, label}
  function cccBar(o) {
    const W = 600, H = 170, x0 = 30, x1 = 570, dmax = 100;
    const X = d => x0 + (d / dmax) * (x1 - x0);
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv" role="img" aria-label="${o.label}">`;
    s += `<rect x="${X(0)}" y="20" width="${X(o.dio) - X(0)}" height="36" rx="6" class="sv-panel"/><text x="${(X(0) + X(o.dio)) / 2}" y="44" class="sv-txt">DIO ${o.dio}</text>`;
    s += `<rect x="${X(o.dio)}" y="20" width="${X(o.dio + o.dso) - X(o.dio)}" height="36" rx="6" class="sv-panel"/><text x="${(X(o.dio) + X(o.dio + o.dso)) / 2}" y="44" class="sv-txt">DSO ${o.dso}</text>`;
    s += `<line x1="${X(0)}" y1="80" x2="${X(o.dpo)}" y2="80" class="sv-down"/><text x="${X(o.dpo) + 8}" y="86" class="sv-txt sv-t-down" text-anchor="start">DPO ${o.dpo}</text>`;
    const c = o.dio + o.dso - o.dpo;
    s += `<line x1="${X(o.dpo)}" y1="118" x2="${X(o.dio + o.dso)}" y2="118" class="sv-pv"/><text x="${(X(o.dpo) + X(o.dio + o.dso)) / 2}" y="146" class="sv-txt sv-t-pv">CCC = ${c} ngày</text>`;
    s += `<line x1="${X(o.dpo)}" y1="70" x2="${X(o.dpo)}" y2="128" class="sv-dash"/><line x1="${X(o.dio + o.dso)}" y1="56" x2="${X(o.dio + o.dso)}" y2="128" class="sv-dash"/>`;
    return `${s}</svg>`;
  }

  // Nhà bán lẻ B: CCC âm.
  const negBar = (() => {
    const W = 600, H = 160, x0 = 30, x1 = 570, dmax = 50;
    const X = d => x0 + (d / dmax) * (x1 - x0);
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv" role="img" aria-label="CCC âm của nhà bán lẻ">`;
    s += `<rect x="${X(0)}" y="20" width="${X(25) - X(0)}" height="36" rx="6" class="sv-panel"/><text x="${(X(0) + X(25)) / 2}" y="44" class="sv-txt">DIO 25</text>`;
    s += `<rect x="${X(25)}" y="20" width="${X(30) - X(25)}" height="36" rx="6" class="sv-panel"/><text x="${X(30) + 6}" y="44" class="sv-txt" text-anchor="start">DSO 5</text>`;
    s += `<line x1="${X(0)}" y1="80" x2="${X(45)}" y2="80" class="sv-down"/><text x="${X(45)}" y="102" class="sv-txt sv-t-down" text-anchor="end">DPO 45</text>`;
    s += `<line x1="${X(30)}" y1="125" x2="${X(45)}" y2="125" class="sv-up"/><text x="${X(30) - 8}" y="131" class="sv-txt sv-t-up" text-anchor="end">thu tiền xong 15 ngày trước khi trả NCC</text>`;
    return `${s}</svg>`;
  })();

  // Chi phí bỏ chiết khấu 2/10 theo hạn thanh toán.
  const costCurve = (() => {
    const W = 600, H = 300, l = 60, r = 580, tp = 20, b = 250;
    const X = n => l + ((n - 20) / 70) * (r - l), Y = c => b - (c / 1.2) * (b - tp);
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv" role="img" aria-label="Chi phí bỏ chiết khấu 2/10 theo hạn thanh toán">`;
    [0, 0.4, 0.8, 1.2].forEach(c => { s += `<line x1="${l}" y1="${Y(c)}" x2="${r}" y2="${Y(c)}" class="sv-grid"/><text x="${l - 10}" y="${Y(c) + 5}" class="sv-muted" text-anchor="end">${Math.round(c * 100)}%</text>`; });
    [20, 30, 45, 60, 90].forEach(n => { s += `<text x="${X(n)}" y="${b + 24}" class="sv-muted">${n}</text>`; });
    s += `<line x1="${l}" y1="${b}" x2="${r}" y2="${b}" class="sv-axis"/><line x1="${l}" y1="${tp}" x2="${l}" y2="${b}" class="sv-axis"/>`;
    let pts = '';
    for (let n = 22; n <= 90.001; n += 1) pts += `${X(n).toFixed(1)},${Math.max(tp, Y(tcCost(0.02, 10, n))).toFixed(1)} `;
    s += `<polyline points="${pts}" class="sv-curve"/>`;
    s += `<line x1="${l}" y1="${Y(0.1)}" x2="${r}" y2="${Y(0.1)}" class="sv-dash"/><text x="${r}" y="${Y(0.1) - 8}" class="sv-muted" text-anchor="end">lãi vay ngân hàng 10%</text>`;
    [[30, 'net 30'], [45, 'net 45'], [60, 'net 60']].forEach(([n, lab]) => {
      const c = tcCost(0.02, 10, n);
      s += `<circle cx="${X(n)}" cy="${Y(c)}" r="6" class="sv-dot"/><text x="${X(n) + 10}" y="${Y(c) - 10}" class="sv-txt" text-anchor="start">${lab}: ${fmt(c * 100)}%</text>`;
    });
    s += `<text x="${(l + r) / 2}" y="${H - 2}" class="sv-muted">Hạn thanh toán (ngày), điều khoản 2/10</text>`;
    return `${s}</svg>`;
  })();

  // Ba chiến lược tài trợ: tài sản thường xuyên + biến động và mức vốn dài hạn.
  const fundChart = (() => {
    const W = 600, H = 280, l = 40, r = 580, tp = 20, b = 240;
    const X = m => l + (m / 24) * (r - l), Y = v => b - (v / 100) * (b - tp);
    const need = m => 55 + 15 * (1 + Math.sin((m / 12) * 2 * Math.PI - Math.PI / 2)) / 2 * 2;
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv" role="img" aria-label="Ba chiến lược tài trợ vốn lưu động">`;
    s += `<line x1="${l}" y1="${b}" x2="${r}" y2="${b}" class="sv-axis"/><line x1="${l}" y1="${tp}" x2="${l}" y2="${b}" class="sv-axis"/>`;
    s += `<line x1="${l}" y1="${Y(30)}" x2="${r}" y2="${Y(30)}" class="sv-grid"/><text x="${l + 8}" y="${Y(15)}" class="sv-muted" text-anchor="start">Tài sản dài hạn</text>`;
    s += `<line x1="${l}" y1="${Y(55)}" x2="${r}" y2="${Y(55)}" class="sv-grid"/><text x="${l + 8}" y="${Y(46)}" class="sv-muted" text-anchor="start">TSNH thường xuyên</text>`;
    let pts = '';
    for (let m = 0; m <= 24.001; m += 0.25) pts += `${X(m).toFixed(1)},${Y(need(m)).toFixed(1)} `;
    s += `<polyline points="${pts}" class="sv-curve"/><text x="${X(6)}" y="${Y(85) - 22}" class="sv-txt">TSNH biến động (mùa vụ)</text>`;
    [[92, 'Thận trọng', 'sv-t-up', -6], [55, 'Trung dung', '', -6], [42, 'Tích cực', 'sv-t-down', 18]].forEach(([v, lab, c, dy]) => {
      s += `<line x1="${l}" y1="${Y(v)}" x2="${r}" y2="${Y(v)}" class="sv-dash"/><text x="${r - 4}" y="${Y(v) + dy}" class="sv-txt ${c}" text-anchor="end" style="font-size:15px">${lab}</text>`;
    });
    s += `<text x="${(l + r) / 2}" y="${H - 6}" class="sv-muted">Thời gian · đường nét đứt = mức vốn dài hạn</text>`;
    return `${s}</svg>`;
  })();

  const slides = [
    S('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Corporate Issuers · CF-04</div>
      <h2>Working Capital<br>and Liquidity</h2>
      <p>Có lãi chưa đủ - phải có tiền đúng lúc</p>
      <div class="sd-chips"><span>LOS 1 · Cash conversion cycle</span><span>LOS 2 · Thanh khoản</span><span>LOS 3 · Quản lý vốn lưu động</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Hai cách đo vốn lưu động', `<div class="sd-cols2">
      <div><div class="sd-f sm">Tổng VLĐ = TSNH - NNH</div><div class="sd-f sm">VLĐ hoạt động = (TSNH - tiền, CK) - (NNH - nợ vay)</div>
      <p class="sd-note">Loại tiền và nợ vay vì chúng là quyết định <b>tài trợ</b>, không phải kinh doanh.</p></div>
      <div><div class="sd-tbl"><div><span>TSNH</span><span>1.000</span></div><div><span>Tiền + CK ngắn hạn</span><span>200</span></div><div><span>NNH</span><span>600</span></div><div><span>Vay ngắn hạn</span><span>250</span></div><div><span>Tổng VLĐ</span><span><b>400</b></span></div><div><span>VLĐ hoạt động</span><span><b>450</b></span></div></div></div></div>`),

    S('Ba con số đo thời gian', `<div class="sd-cols3">
      <div class="sd-card"><b>DIO</b><div class="sd-f sm">${frac('Tồn kho', 'Giá vốn / 365')}</div><small>Hàng nằm trong kho</small></div>
      <div class="sd-card"><b>DSO</b><div class="sd-f sm">${frac('Phải thu', 'Doanh thu / 365')}</div><small>Chờ khách trả tiền</small></div>
      <div class="sd-card acc"><b>DPO</b><div class="sd-f sm">${frac('Phải trả', 'Giá vốn / 365')}</div><small>Được nợ nhà cung cấp</small></div></div>
      <p class="sd-note">Bẫy mẫu số: chỉ DSO dùng <b>doanh thu</b>.</p>`),

    S('Chu kỳ chuyển đổi tiền mặt', `<div class="sd-f">CCC = DIO + DSO - DPO</div>
      ${cccBar({ dio: 50, dso: 40, dpo: 30, label: 'CCC của công ty A' })}
      <p class="sd-note">Công ty A: doanh thu 3.650, giá vốn 2.555 (7/ngày), tồn kho 350, phải thu 400, phải trả 210. Chu kỳ kinh doanh = 90 ngày.</p>`),

    S('CCC âm: nhà cung cấp tài trợ', `${negBar}
      <p class="sd-note">Nhà bán lẻ B: DIO 25 + DSO 5 - DPO 45 = <b>-15 ngày</b>. Siêu thị, thương mại điện tử có sức mạnh thương lượng lớn.</p>`),

    S('So sánh CCC cho đúng cách', `<div class="sd-cols2">
      <div><div class="sd-rule up">So với đối thủ cùng ngành</div><div class="sd-rule up">So với chính công ty qua các năm</div><div class="sd-rule down">Không so siêu thị với nhà sản xuất máy bay</div></div>
      <div class="sd-card acc"><b>Hỏi: thành phần nào đổi?</b><p>DPO tăng vì công ty <b>chậm trả</b>?</p><p>DPO tăng nhờ <b>reverse factoring</b> (thực chất là nợ)?</p><p>DIO giảm vì <b>thiếu hàng</b>?</p></div></div>
      <p class="sd-note">DSO giảm 5 ngày × doanh thu 10/ngày = giải phóng <b>50</b> tiền mặt.</p>`),

    S('Nguồn thanh khoản', `<div class="sd-cols2">
      <div class="sd-card"><b>Sơ cấp: hoạt động bình thường</b><p>Tiền, chứng khoán ngắn hạn</p><p>Hạn mức ngân hàng, thương phiếu, tín dụng thương mại</p><p>Dòng tiền kinh doanh</p></div>
      <div class="sd-card acc"><b>Thứ cấp: thay đổi hoạt động, cấu trúc vốn</b><p>Cắt cổ tức · hoãn đầu tư</p><p>Phát hành cổ phiếu · đàm phán lại hợp đồng</p><p>Bán tài sản · phá sản</p></div></div>
      <p class="sd-note">Dùng nguồn thứ cấp thường là <b>tín hiệu khó khăn</b>.</p>`),

    S('Drags và pulls', `<div class="sd-cols2">
      <div><p class="sd-cap">Drag: chậm tiền <b>vào</b></p><div class="sd-rule down">Phải thu khó đòi</div><div class="sd-rule down">Tồn kho lỗi thời</div><div class="sd-rule down">Tín dụng thắt chặt</div></div>
      <div><p class="sd-cap">Pull: tiền <b>ra</b> sớm</p><div class="sd-rule down">Trả sớm không được lợi</div><div class="sd-rule down">Nhà cung cấp giảm hạn mức</div><div class="sd-rule down">Ngân hàng giảm hạn mức vay</div></div></div>`),

    S('Ba tỷ số thanh khoản', `<div class="sd-cols2 wide-left">
      <div><div class="sd-f sm">Current = ${frac('TSNH', 'NNH')}</div><div class="sd-f sm">Quick = ${frac('Tiền + CK + phải thu', 'NNH')}</div><div class="sd-f sm">Cash = ${frac('Tiền + CK', 'NNH')}</div></div>
      <div><div class="sd-bars">
        <div class="sd-bar"><span class="sd-bar-l">Current</span><span class="sd-bar-t"><i style="width:${(1000 / 600 / 2) * 100}%"></i></span><b>1,67</b></div>
        <div class="sd-bar"><span class="sd-bar-l">Quick</span><span class="sd-bar-t"><i style="width:50%"></i></span><b>1,00</b></div>
        <div class="sd-bar"><span class="sd-bar-l">Cash</span><span class="sd-bar-t"><i style="width:${(200 / 600 / 2) * 100}%"></i></span><b>0,33</b></div></div><p class="sd-cap">Công ty A</p></div></div>`),

    S('Current ratio cao chưa chắc thanh khoản tốt', `<div class="sd-tbl grid">
      <div class="head"><span>Nợ ngắn hạn 200</span><span>Current</span><span>Quick</span><span>Cash</span></div>
      <div><span>X: tồn kho 350</span><span>2,50</span><span>0,75</span><span>0,25</span></div>
      <div><span>Y: tiền 150</span><span>1,30</span><span>1,15</span><span>0,75</span></div></div>
      <p class="sd-note">X "đẹp" nhờ tồn kho; <b>Y thanh khoản tốt hơn</b>. Luôn nhìn cơ cấu TSNH và so với ngành, lịch sử.</p>`),

    S('Mục tiêu quản lý vốn lưu động', `<div class="sd-big">Đủ tiền - không thừa tiền</div>
      <div class="sd-cols2"><div class="sd-card"><b>Rút ngắn CCC hợp lý</b><p>Quay kho nhanh, thu tiền nhanh, trả nhà cung cấp đúng thời điểm</p></div>
      <div class="sd-card acc"><b>Dự báo nhu cầu tiền</b><p>Tránh thiếu tiền và tránh tiền nhàn rỗi sinh lời thấp</p></div></div>`),

    S('Ba chiến lược tài trợ', `<div class="sd-cols2 wide-left"><div>${fundChart}</div>
      <div><div class="sd-rule up">Thận trọng: nhiều TSNH, vốn dài hạn · an toàn, đắt</div><div class="sd-rule">Trung dung: khớp kỳ hạn</div><div class="sd-rule down">Tích cực: ít TSNH, nợ ngắn hạn · rẻ, rủi ro tái cấp vốn</div></div></div>`),

    S('Nguồn vốn ngắn hạn', `<div class="sd-cols2">
      <div class="sd-card"><b>Ngân hàng</b><p>Hạn mức không cam kết · có cam kết</p><p>Revolver</p><p>Vay có bảo đảm bằng phải thu, tồn kho</p></div>
      <div class="sd-card"><b>Ngoài ngân hàng</b><p>Thương phiếu (công ty lớn)</p><p>Bao thanh toán (factoring)</p><p>Tín dụng thương mại</p></div></div>
      <p class="sd-note">Đa dạng nguồn · đủ cho cao điểm · tính cả <b>chi phí ngầm</b>. Phụ thuộc quy mô, tín nhiệm, pháp lý, tài sản thế chấp.</p>`),

    S('Chi phí tín dụng thương mại', `<div class="sd-f">Chi phí = (1 + ${frac('d', '1 - d')})<sup>365 / (net - kỳ chiết khấu)</sup> - 1</div>
      <div class="sd-cols2"><div class="sd-card"><b>2/10 net 30</b><p>(1 + 2/98)<sup>18,25</sup> - 1 = <b>${fmt(tcCost(0.02, 10, 30) * 100)}%</b></p><small>Tính đơn giản 2/98 × 365/20 = 37,24% (thiếu ghép lãi)</small></div>
      <div>${keys([['', '2 [÷] 98 [+] 1 [=] [yˣ] 18.25 [=] [-] 1 [=]', '0.4459']])}</div></div>`),

    S('Bỏ chiết khấu hay vay để trả sớm?', `<div class="sd-cols2 wide-left"><div>${costCurve}</div>
      <div><div class="sd-rule up">Chi phí &gt; lãi vay → vay, trả sớm, lấy chiết khấu</div><div class="sd-rule down">Chi phí &lt; lãi vay → trả vào ngày cuối</div>
      <p class="sd-note">Hạn thanh toán càng dài, chi phí bỏ chiết khấu càng thấp.</p></div></div>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>CCC = DIO + DSO - DPO</span><span>DSO chia doanh thu, DIO/DPO chia giá vốn</span>
      <span>CCC âm: nhà cung cấp tài trợ</span><span>Hỏi thành phần nào làm CCC đổi</span>
      <span>Sơ cấp vs thứ cấp</span><span>Drag: tiền vào chậm · Pull: tiền ra sớm</span>
      <span>Quick bỏ tồn kho, trả trước</span><span>Mẫu số 98, số ngày 30 - 10</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 10 câu, mục tiêu ≥ 7 câu đúng.</p>`),
  ];

  addDeck('CF-04', `Slide Working Capital - bản thiết kế riêng (${slides.length} slide)`, slides);
}());
