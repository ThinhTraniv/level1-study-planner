// Bộ slide tự thiết kế cho DE-02 Forward Commitment and Contingent Claim Features and Instruments.
(function () {
  const L = window.LESSONS && window.LESSONS['DE-02'];
  if (!L) return;
  const { slide, addDeck } = window.CFAH;
  const K = 'DE-02 · Forwards, Futures, Swaps, Options';
  const S = (title, body, opt = {}) => slide(title, body, Object.assign({ kicker: K }, opt));
  const fmt = (x, d = 0) => (Math.abs(x) < 1e-9 ? 0 : x).toFixed(d).replace('.', ',');

  const PAY = {
    lf: (s, X) => s - X, sf: (s, X) => X - s,
    lc: (s, X) => Math.max(0, s - X), sc: (s, X) => -Math.max(0, s - X),
    lp: (s, X) => Math.max(0, X - s), sp: (s, X) => -Math.max(0, X - s),
  };
  const SIGN = { lf: 0, sf: 0, lc: -1, sc: 1, lp: -1, sp: 1 };

  // Đồ thị payoff / lợi nhuận tính bằng JS. series: [{k, X, prem, cls, label, lx, dy}] ; trục S từ 0 đến 100.
  function pchart(series, o = {}) {
    const W = 600, H = o.h || 320, l = 56, r = 585, t = 18, b = H - 46, ylo = o.ylo ?? -50, yhi = o.yhi ?? 50;
    const xs = s => l + (s / 100) * (r - l);
    const ys = v => b - ((Math.max(ylo, Math.min(yhi, v)) - ylo) / (yhi - ylo)) * (b - t);
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv ${o.big ? 'big' : ''}" role="img" aria-label="${o.label || 'Đồ thị payoff'}">`;
    [ylo, ylo / 2, yhi / 2, yhi].forEach(v => { s += `<line x1="${l}" y1="${ys(v)}" x2="${r}" y2="${ys(v)}" class="sv-grid"/><text x="${l - 8}" y="${ys(v) + 5}" class="sv-muted" text-anchor="end">${v}</text>`; });
    s += `<line x1="${l}" y1="${ys(0)}" x2="${r}" y2="${ys(0)}" class="sv-axis"/><line x1="${l}" y1="${t}" x2="${l}" y2="${b}" class="sv-axis"/>`;
    s += `<text x="${l - 8}" y="${ys(0) + 5}" class="sv-muted" text-anchor="end">0</text>`;
    [0, 25, 50, 75, 100].forEach(v => { s += `<text x="${xs(v)}" y="${b + 22}" class="sv-muted">${v}</text>`; });
    s += `<text x="${(l + r) / 2}" y="${H - 4}" class="sv-muted">Giá khi đáo hạn S_T</text>`;
    series.forEach(z => {
      const f = v => PAY[z.k](v, z.X) + SIGN[z.k] * (z.prem || 0);
      const pts = [0, z.X, 100].map(v => `${xs(v).toFixed(1)},${ys(f(v)).toFixed(1)}`).join(' ');
      s += `<polyline points="${pts}" class="${z.cls || 'sv-curve'}" style="fill:none"/>`;
      if (z.label) s += `<text x="${xs(z.lx)}" y="${ys(f(z.lx)) + (z.dy || -12)}" class="sv-txt ${z.tc || ''}">${z.label}</text>`;
    });
    (o.dots || []).forEach(d => { s += `<circle cx="${xs(d[0])}" cy="${ys(d[1])}" r="7" class="sv-dot"/><text x="${xs(d[0]) + (d[3] || 0)}" y="${ys(d[1]) + (d[4] || -14)}" class="sv-txt">${d[2]}</text>`; });
    return `${s}</svg>`;
  }

  // Một vị thế quyền chọn: payoff nét đứt, lợi nhuận đường đậm, đánh dấu điểm hòa vốn.
  const opt1 = (k, X, prem, lx, dy, name) => {
    const be = k === 'lc' || k === 'sc' ? X + prem : X - prem;
    return pchart([{ k, X, prem: 0, cls: 'sv-dash' }, { k, X, prem, cls: 'sv-curve', label: name, lx, dy }], { dots: [[be, 0, `hòa vốn ${be}`, 0, k === 'lc' || k === 'sp' ? 26 : -14]], label: name, big: true });
  };

  // Sơ đồ swap lãi suất.
  const swapFlow = `<svg viewBox="0 0 600 200" class="sv big" role="img" aria-label="Dòng tiền swap lãi suất">
    <rect x="20" y="60" width="150" height="80" rx="14" class="sv-panel"/><text x="95" y="96" class="sv-txt">Công ty A</text><text x="95" y="122" class="sv-muted">trả cố định</text>
    <rect x="430" y="60" width="150" height="80" rx="14" class="sv-panel"/><text x="505" y="96" class="sv-txt">Dealer</text><text x="505" y="122" class="sv-muted">trả thả nổi</text>
    <line x1="180" y1="80" x2="420" y2="80" class="sv-down"/><polygon points="420,72 436,80 420,88" class="sv-dot"/>
    <text x="300" y="66" class="sv-txt sv-t-down">3,00% × 10 triệu</text>
    <line x1="420" y1="125" x2="180" y2="125" class="sv-up"/><polygon points="180,117 164,125 180,133" class="sv-dot"/>
    <text x="300" y="155" class="sv-txt sv-t-up">MRR × 10 triệu</text>
    <text x="300" y="190" class="sv-muted">Chỉ trả phần chênh lệch ròng · gốc 10 triệu không trao đổi</text></svg>`;

  // Sơ đồ CDS.
  const cdsFlow = `<svg viewBox="0 0 600 200" class="sv big" role="img" aria-label="Dòng tiền CDS">
    <rect x="20" y="55" width="170" height="80" rx="14" class="sv-panel"/><text x="105" y="90" class="sv-txt">Bên mua</text><text x="105" y="116" class="sv-muted">protection buyer</text>
    <rect x="410" y="55" width="170" height="80" rx="14" class="sv-panel"/><text x="495" y="90" class="sv-txt">Bên bán</text><text x="495" y="116" class="sv-muted">protection seller</text>
    <line x1="200" y1="75" x2="400" y2="75" class="sv-down"/><polygon points="400,67 416,75 400,83" class="sv-dot"/>
    <text x="300" y="62" class="sv-txt sv-t-down">phí định kỳ (spread)</text>
    <line x1="400" y1="118" x2="200" y2="118" class="sv-up" style="stroke-dasharray:8 6"/><polygon points="200,110 184,118 200,126" class="sv-dot"/>
    <text x="300" y="148" class="sv-txt sv-t-up">bồi thường CHỈ KHI có sự kiện tín dụng</text>
    <text x="300" y="185" class="sv-muted">Bồi thường = notional × (1 - tỷ lệ thu hồi)</text></svg>`;

  // Bảng tài khoản ký quỹ của ví dụ 3.1, tính bằng JS.
  function marginTable() {
    const P = [50, 48.8, 47.9, 49.1], IM = 600, MM = 450, size = 100;
    let bal = IM, rows = `<div><span>0</span><span>50,00</span><span></span><span>600</span><span></span></div>`;
    for (let i = 1; i < P.length; i++) {
      const ch = Math.round((P[i] - P[i - 1]) * size); bal += ch;
      const vm = bal < MM ? IM - bal : 0;
      rows += `<div><span>${i}</span><span>${fmt(P[i], 2)}</span><span>${ch > 0 ? '+' : ''}${ch}</span><span>${bal}</span><span>${vm ? `<b>${vm}</b>` : '0'}</span></div>`;
      bal += vm;
    }
    return `<div class="sd-tbl grid"><div class="head"><span>Ngày</span><span>Giá</span><span>Lời/lỗ</span><span>Số dư</span><span>Nộp thêm</span></div>${rows}</div>`;
  }

  const slides = [
    S('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Derivatives · DE-02</div>
      <h2>Forward Commitment and<br>Contingent Claim Instruments</h2>
      <p>Năm loại hợp đồng - một kỹ năng: tính payoff</p>
      <div class="sd-chips"><span>LOS 1 · Forward, futures, swap, option, CDS</span><span>LOS 2 · Payoff và lợi nhuận</span><span>LOS 3 · Commitment và contingent claim</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Hai họ phái sinh', `<div class="sd-cols2">
      <div class="sd-card"><b>Forward commitment</b><p>Cả hai bên <b>bắt buộc</b> thực hiện.</p><p>Forward · Futures · Swap</p><small>Thường không trả tiền khi ký, payoff đường thẳng</small></div>
      <div class="sd-card acc"><b>Contingent claim</b><p>Một bên có <b>quyền</b>; thanh toán khi điều kiện xảy ra.</p><p>Option · CDS</p><small>Người mua trả phí, payoff gãy khúc</small></div></div>`),

    S('Forward: chốt giá hôm nay, giao dịch ngày T', `<div class="sd-cols3">
      <div class="sd-card"><b>OTC, tùy chỉnh</b><p>Số lượng, ngày, chất lượng hàng do hai bên chọn.</p></div>
      <div class="sd-card"><b>Không trả tiền khi ký</b><p>Giá trị ban đầu = 0 nếu định giá đúng.</p></div>
      <div class="sd-card"><b>Một lần khi đáo hạn</b><p>Có rủi ro đối tác. Giao hàng hoặc trả tiền (NDF).</p></div></div>
      <div class="sd-f">Long: S<sub>T</sub> - F<sub>0</sub>(T) &nbsp;&nbsp;&nbsp; Short: F<sub>0</sub>(T) - S<sub>T</sub></div>`),

    S('Payoff forward: tuyến tính, đối xứng', `<div class="sd-cols2 wide-left"><div>${pchart([{ k: 'lf', X: 50, cls: 'sv-up', label: 'Long', lx: 88, dy: -14, tc: 'sv-t-up' }, { k: 'sf', X: 50, cls: 'sv-down', label: 'Short', lx: 88, dy: 28, tc: 'sv-t-down' }], { big: true, label: 'Long và short forward với F = 50' })}</div>
      <div><p class="sd-cap">Gà: F<sub>0</sub>(T) = 110</p><div class="sd-rule up"><span>S<sub>T</sub> = 125</span> <b>long +15</b></div><div class="sd-rule down"><span>S<sub>T</sub> = 95</span> <b>long -15</b></div>
      <p class="sd-note">Không có phí → <b>payoff = lợi nhuận</b>. Short luôn là số đối của long.</p></div></div>`),

    S('Futures = forward chuẩn hóa trên sàn', `<div class="sd-tbl grid">
      <div class="head"><span></span><span>Forward</span><span>Futures</span></div>
      <div><span>Nơi giao dịch</span><span>OTC, tùy chỉnh</span><span>Sàn, chuẩn hóa</span></div>
      <div><span>Lãi lỗ</span><span>Một lần khi đáo hạn</span><span>Hằng ngày (MTM)</span></div>
      <div><span>Rủi ro đối tác</span><span>Có</span><span>Gần như không (CCP)</span></div>
      <div><span>Ký quỹ</span><span>Thường không</span><span>Bắt buộc</span></div>
      <div><span>Thanh khoản</span><span>Thấp</span><span>Cao</span></div></div>
      <p class="sd-note">Vì sao giá futures và forward có thể khác nhau: học ở DE-06.</p>`),

    S('Tài khoản ký quỹ: long 100 đơn vị ở 50', `<div class="sd-cols2 wide-left"><div>${marginTable()}</div>
      <div><div class="sd-rule">Ký quỹ ban đầu <b>600</b></div><div class="sd-rule">Ký quỹ duy trì <b>450</b></div><div class="sd-rule down">Ngày 2: 390 &lt; 450 <b>nộp 210</b></div>
      <p class="sd-note">Nộp về mức <b>ban đầu</b> (600), không phải mức duy trì: 60 là đáp án bẫy.</p></div></div>`),

    S('Swap lãi suất: một chuỗi forward', `${swapFlow}
      <div class="sd-cols2"><div class="sd-rule up">MRR = 3,50% <b>A nhận 50.000</b></div><div class="sd-rule down">MRR = 2,40% <b>A trả 60.000</b></div></div>`),

    S('Option: quyền, không phải nghĩa vụ', `<div class="sd-tbl grid">
      <div class="head"><span></span><span>Call (quyền mua)</span><span>Put (quyền bán)</span></div>
      <div><span>Long (trả phí)</span><span>Quyền mua ở X</span><span>Quyền bán ở X</span></div>
      <div><span>Short (nhận phí)</span><span>Nghĩa vụ bán ở X</span><span>Nghĩa vụ mua ở X</span></div>
      <div><span>Long muốn giá</span><span>Tăng</span><span>Giảm</span></div></div>
      <div class="sd-cols2"><div class="sd-card"><b>European</b><p>Chỉ thực hiện vào ngày đáo hạn</p></div><div class="sd-card"><b>American</b><p>Bất kỳ lúc nào đến đáo hạn</p></div></div>`),

    S('Payoff trước, lợi nhuận sau', `<div class="sd-f">c<sub>T</sub> = max(0, S<sub>T</sub> - X) &nbsp;&nbsp;&nbsp;&nbsp; p<sub>T</sub> = max(0, X - S<sub>T</sub>)</div>
      <div class="sd-f">Lợi nhuận long = payoff - phí &nbsp;&nbsp;&nbsp;&nbsp; Lợi nhuận short = phí - payoff</div>
      <div class="sd-steps"><span>① Payoff (value at expiration): chỉ dùng max, <b>chưa trừ phí</b></span><span>② Lợi nhuận: trừ phí (long) hoặc cộng phí (short)</span><span>③ Short = số đối của long: tổng hai bên = 0</span></div>`),

    S('Call: long và short (X = 50, phí 10)', `<div class="sd-cols2">
      <div>${opt1('lc', 50, 10, 86, -14, 'Long call')}</div><div>${opt1('sc', 50, 10, 86, 30, 'Short call')}</div></div>
      <p class="sd-note">Nét đứt: payoff · Đường đậm: lợi nhuận. Long call lỗ tối đa = <b>phí</b>; short call lỗ <b>không giới hạn</b>.</p>`),

    S('Put: long và short (X = 50, phí 10)', `<div class="sd-cols2">
      <div>${opt1('lp', 50, 10, 16, -14, 'Long put')}</div><div>${opt1('sp', 50, 10, 16, 30, 'Short put')}</div></div>
      <p class="sd-note">Long put lời tối đa = X - phí = <b>40</b> (khi giá về 0). Short put lỗ tối đa cũng là <b>40</b>.</p>`),

    S('Bốn vị thế quyền chọn', `<div class="sd-tbl grid">
      <div class="head"><span>Vị thế</span><span>Lời tối đa</span><span>Lỗ tối đa</span><span>Hòa vốn</span></div>
      <div><span>Long call</span><span>Không giới hạn</span><span>c<sub>0</sub></span><span>X + c<sub>0</sub></span></div>
      <div><span>Short call</span><span>c<sub>0</sub></span><span>Không giới hạn</span><span>X + c<sub>0</sub></span></div>
      <div><span>Long put</span><span>X - p<sub>0</sub></span><span>p<sub>0</sub></span><span>X - p<sub>0</sub></span></div>
      <div><span>Short put</span><span>p<sub>0</sub></span><span>X - p<sub>0</sub></span><span>X - p<sub>0</sub></span></div></div>
      <p class="sd-note">Long put = <b>mua</b> quyền bán → kỳ vọng giá giảm.</p>`),

    S('Luyện nhanh', `<div class="sd-steps">
      <span>Call X = 50, phí 4, S<sub>T</sub> = 62 → payoff <b>12</b> · long <b>+8</b> · short <b>-8</b></span>
      <span>Put X = 80, phí 6, S<sub>T</sub> = 68 → payoff <b>12</b> · long <b>+6</b> · short <b>-6</b></span>
      <span>Call X = 100, phí 7 → hòa vốn <b>107</b> · lời 13 khi S<sub>T</sub> = <b>120</b></span>
      <span>Put X = 120, phí 5, lời 20 → payoff <b>25</b> · S<sub>T</sub> = <b>95</b></span>
      <span>Call + put X = 95 (phí 3 + 4): S<sub>T</sub> = 80 hoặc 110 → lời <b>8</b> · S<sub>T</sub> = 95 → lỗ <b>7</b></span></div>`),

    S('CDS: bảo hiểm rủi ro vỡ nợ', `${cdsFlow}
      <div class="sd-cols2"><div class="sd-rule">Notional 10 triệu, spread 1% <b>phí 100.000/năm</b></div><div class="sd-rule up">Vỡ nợ, thu hồi 40% <b>nhận 6 triệu</b></div></div>
      <p class="sd-note">Tên có chữ "swap" nhưng là <b>contingent claim</b>.</p>`),

    S('Commitment và contingent claim', `<div class="sd-cols2 wide-left"><div>${pchart([{ k: 'lf', X: 50, cls: 'sv-dash', label: 'Long forward', lx: 22, dy: 30 }, { k: 'lc', X: 50, cls: 'sv-curve', label: 'Long call (payoff)', lx: 76, dy: -16 }], { big: true, label: 'Long forward và long call' })}</div>
      <div class="sd-tbl"><div><span>Nghĩa vụ</span><span>hai bên / một bên</span></div><div><span>Tiền khi ký</span><span>0 / phí</span></div><div><span>Payoff</span><span>thẳng / gãy</span></div><div><span>Lỗ của long</span><span>lớn / ≤ phí</span></div></div></div>
      <p class="sd-note">Call giữ lại phần lời của forward và bỏ phần lỗ. Cái giá: <b>phí quyền chọn</b>.</p>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>Forward: S<sub>T</sub> - F<sub>0</sub>(T), payoff = lợi nhuận</span><span>Margin call: nộp về ký quỹ ban đầu</span>
      <span>Swap lãi suất: không đổi gốc, trả ròng</span><span>Payoff option dùng max, chưa trừ phí</span>
      <span>Hòa vốn: X + c<sub>0</sub> và X - p<sub>0</sub></span><span>Short call: lỗ không giới hạn</span>
      <span>CDS = notional × (1 - thu hồi)</span><span>Commitment: thẳng · Contingent: gãy</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 10 câu, mục tiêu ≥ 7 câu đúng.</p>`),
  ];

  addDeck('DE-02', `Slide Forwards, Futures, Swaps, Options - bản thiết kế riêng (${slides.length} slide)`, slides);
}());
