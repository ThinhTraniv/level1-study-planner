// Bộ slide tự thiết kế cho FI-08 Yield and Yield Spread Measures for Floating-Rate Instruments.
(function () {
  const L = window.LESSONS && window.LESSONS['FI-08'];
  if (!L) return;
  const { slide, addDeck, frac, tl } = window.CFAH;
  const K = 'FI-08 · Floating-Rate and Money Market';
  const S = (title, body, opt = {}) => slide(title, body, Object.assign({ kicker: K }, opt));
  const fmt = (x, d = 2) => x.toFixed(d).replace('.', ',');

  // Giá FRN 3 năm trả quý, MRR 4%, QM 1%, theo discount margin.
  const frn = dm => { const c = (4 + 1) / 4, r = (4 + dm) / 400; let p = 0; for (let k = 1; k <= 12; k++) p += c / (1 + r) ** k; return p + 100 / (1 + r) ** 12; };
  function frnChart() {
    const W = 600, H = 300, l = 62, r = 580, t = 20, b = 250;
    const xs = x => l + (x / 2) * (r - l), ys = y => b - ((y - 97) / 6) * (b - t);
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv" role="img" aria-label="Giá FRN theo discount margin">`;
    [97, 99, 101, 103].forEach(v => { s += `<line x1="${l}" y1="${ys(v)}" x2="${r}" y2="${ys(v)}" class="sv-grid"/><text x="${l - 8}" y="${ys(v) + 5}" class="sv-muted" text-anchor="end">${v}</text>`; });
    s += `<line x1="${l}" y1="${b}" x2="${r}" y2="${b}" class="sv-axis"/><line x1="${l}" y1="${t}" x2="${l}" y2="${b}" class="sv-axis"/>`;
    [0, 0.5, 1, 1.5, 2].forEach(v => { s += `<text x="${xs(v)}" y="${b + 22}" class="sv-muted">${fmt(v, 1)}%</text>`; });
    s += `<text x="${(l + r) / 2}" y="${H - 4}" class="sv-muted">Discount margin (QM = 1,00%, FRN 3 năm trả quý)</text>`;
    s += `<line x1="${l}" y1="${ys(100)}" x2="${r}" y2="${ys(100)}" class="sv-dash"/><line x1="${xs(1)}" y1="${t}" x2="${xs(1)}" y2="${b}" class="sv-dash"/>`;
    const pts = []; for (let d = 0; d <= 2.0001; d += 0.05) pts.push(`${xs(d).toFixed(1)},${ys(frn(d)).toFixed(1)}`);
    s += `<polyline points="${pts.join(' ')}" class="sv-curve"/>`;
    s += `<circle cx="${xs(1)}" cy="${ys(100)}" r="6" class="sv-dot"/><text x="${xs(1) + 10}" y="${ys(100) - 12}" class="sv-txt" text-anchor="start">QM = DM → 100</text>`;
    s += `<text x="${xs(0.3)}" y="${ys(frn(0.3)) - 14}" class="sv-txt sv-t-up">Premium</text><text x="${xs(1.7)}" y="${ys(frn(1.7)) + 26}" class="sv-txt sv-t-down">Discount</text>`;
    s += `<circle cx="${xs(1.2)}" cy="${ys(frn(1.2))}" r="5" class="sv-dot"/><text x="${xs(1.2) + 8}" y="${ys(frn(1.2)) + 22}" class="sv-muted" text-anchor="start">DM 1,20% → ${fmt(frn(1.2))}</text>`;
    return `${s}</svg>`;
  }

  // Lãi suất yết và BEY của ba công cụ 120 ngày.
  function compare() {
    const pcp = 100 * (1 - (120 / 360) * 0.051);
    const rows = [['CP · DR 360', 5.10, (365 / 120) * ((100 - pcp) / pcp) * 100], ['CD · AOR 360', 5.20, 5.20 * 365 / 360], ['Tiền gửi · AOR 365', 5.25, 5.25]];
    const lo = 5.0, hi = 5.3;
    const bar = (v, op) => `<span class="sd-bar-t"><i style="width:${((v - lo) / (hi - lo)) * 100}%${op ? ';opacity:.45' : ''}"></i></span>`;
    return `<div class="sd-cols2"><div><p class="sd-cap">Lãi suất yết</p><div class="sd-bars">${rows.map(([n, q]) => `<div class="sd-bar"><span class="sd-bar-l">${n}</span>${bar(q, true)}<b>${fmt(q)}%</b></div>`).join('')}</div></div>
      <div><p class="sd-cap">Sau khi quy về BEY</p><div class="sd-bars">${rows.map(([n, , b]) => `<div class="sd-bar"><span class="sd-bar-l">${n}</span>${bar(b)}<b>${fmt(b, 4)}%</b></div>`).join('')}</div></div></div>`;
  }

  const slides = [
    S('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Fixed Income · FI-08</div>
      <h2>Yield and Yield Spread Measures<br>for Floating-Rate Instruments</h2>
      <p>FRN đo bằng spread, thị trường tiền tệ đo bằng quy ước</p>
      <div class="sd-chips"><span>LOS 1 · Quoted margin, discount margin</span><span>LOS 2 · Lợi suất thị trường tiền tệ</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Hai nhóm công cụ lãi suất ngắn hạn', `<div class="sd-cols2">
      <div class="sd-card acc"><div class="sd-n">1</div><b>FRN</b><p>Coupon = MRR + QM, đặt lại mỗi kỳ.</p><p>Rủi ro lãi suất thấp; câu hỏi chính: <b>spread</b> có đủ không?</p></div>
      <div class="sd-card"><div class="sd-n">2</div><b>Thị trường tiền tệ</b><p>T-bill, CP, CD, repo: kỳ hạn ≤ 1 năm.</p><p>Câu hỏi chính: yết theo <b>quy ước</b> nào?</p></div></div>`),

    S('Coupon FRN: đặt lãi đầu kỳ, trả cuối kỳ', `${tl(2, [{ t: 0, label: 'Reset: MRR = 2,30%', cls: 'pv' }, { t: 1, label: 'Trả 7,63 USD' }, { t: 2, label: 'Trả theo MRR mới' }], { h: 140, ticks: ['đầu quý', 'cuối quý', 'cuối quý sau'], label: 'Chu kỳ coupon FRN' })}
      <div class="sd-f">Coupon = (MRR + QM) / m × FV = (2,30% + 0,75%) / 4 × 1.000 = <b>7,63</b></div>`),

    S('QM và DM quyết định giá', `<div class="sd-cols2 wide-left"><div>${frnChart()}</div>
      <div><div class="sd-rule up">QM &gt; DM <b>premium</b></div><div class="sd-rule">QM = DM <b>par</b></div><div class="sd-rule down">QM &lt; DM <b>discount</b></div>
      <p class="sd-note"><b>QM</b>: cố định trong hợp đồng. <b>DM</b>: thị trường đòi hôm nay, đổi theo tín nhiệm.</p></div></div>`),

    S('Định giá FRN bằng 5 phím TVM', `<div class="sd-f">PMT = ${frac('MRR + QM', 'm')} &nbsp;&nbsp; I/Y = ${frac('MRR + DM', 'm')}</div>
      <div class="sd-keys"><span>12 <kbd>N</kbd></span><span>1.3 <kbd>I/Y</kbd></span><span>1.25 <kbd>PMT</kbd></span><span>100 <kbd>FV</kbd></span><span><kbd>CPT</kbd> <kbd>PV</kbd> = <b>-99,4478</b></span></div>
      <p class="sd-note">FRN 3 năm, quý, MRR 4%, QM 1,00%, DM 1,20%. Giả định MRR không đổi.</p>`),

    S('Làm ngược: tìm discount margin', `<div class="sd-keys"><span>12 <kbd>N</kbd></span><span>98.5 <kbd>+/-</kbd> <kbd>PV</kbd></span><span>1.25 <kbd>PMT</kbd></span><span>100 <kbd>FV</kbd></span><span><kbd>CPT</kbd> <kbd>I/Y</kbd> = 1,3865</span></div>
      <div class="sd-steps"><span>① Nhân 4: 5,5462% (lãi suất chiết khấu năm)</span><span>② Trừ MRR: 5,5462% - 4,00% = <b>1,5462% ≈ 155 bps</b></span></div>
      <p class="sd-note">Bẫy: quên nhân m, hoặc báo 5,55% là DM vì quên trừ MRR.</p>`),

    S('Discount rate và add-on rate', `<div class="sd-cols2">
      <div class="sd-card"><b>Discount rate</b><div class="sd-f sm">PV = FV × (1 - ${frac('Days', 'Year')} × DR)</div><div class="sd-f sm">DR = ${frac('Year', 'Days')} × ${frac('FV - PV', 'FV')}</div><small>T-bill, commercial paper</small></div>
      <div class="sd-card acc"><b>Add-on rate</b><div class="sd-f sm">PV = ${frac('FV', '1 + (Days/Year) × AOR')}</div><div class="sd-f sm">AOR = ${frac('Year', 'Days')} × ${frac('FV - PV', 'PV')}</div><small>CD, repo, vay liên ngân hàng</small></div></div>
      <p class="sd-note">Discount rate chia cho <b>FV</b> → đánh giá thấp lợi suất thực.</p>`),

    S('Ví dụ T-bill 90 ngày, DR 4,80%', `<div class="sd-steps">
      <span>① Giá: 100 × (1 - 90/360 × 4,80%) = <b>98,80</b></span>
      <span>② Add-on 360: 360/90 × 1,20 / 98,80 = <b>4,8583%</b></span>
      <span>③ BEY (add-on 365): 365/90 × 1,20 / 98,80 = <b>4,9258%</b></span>
      <span>④ Hiệu dụng năm: (100/98,80)<sup>365/90</sup> - 1 = <b>5,0179%</b></span></div>
      <p class="sd-note">Cùng một T-bill, bốn con số. Đổi nhanh: AOR = DR / (1 - Days/Year × DR).</p>`),

    S('Quy ước 360 và 365', `<div class="sd-tbl grid"><div class="head"><span>Công cụ</span><span>Kiểu yết</span><span>Năm</span></div>
      <div><span>T-bill Mỹ</span><span>Discount</span><span>360</span></div>
      <div><span>Commercial paper</span><span>Discount</span><span>360</span></div>
      <div><span>CD, repo, liên ngân hàng (USD, EUR)</span><span>Add-on</span><span>360</span></div>
      <div><span>Thị trường Anh, Úc, Canada</span><span>Add-on</span><span>365</span></div>
      <div><span>BEY (chuẩn so sánh)</span><span>Add-on</span><span>365</span></div></div>
      <p class="sd-note">AOR<sub>365</sub> = AOR<sub>360</sub> × 365/360.</p>`),

    S('So sánh ba lựa chọn 120 ngày', `${compare()}
      <p class="sd-note">Con số yết cao nhất (tiền gửi 5,25%) lại thấp nhất sau quy đổi. <b>CD thắng</b> với BEY 5,2722%.</p>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>Coupon FRN = (MRR + QM) / m</span><span>QM cố định, DM do thị trường</span>
      <span>QM &lt; DM → dưới par</span><span>I/Y = (MRR + DM) / m</span>
      <span>Tìm DM: × m rồi trừ MRR</span><span>DR chia FV, AOR chia PV</span>
      <span>BEY = add-on năm 365</span><span>Quy đổi trước khi so sánh</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 8 câu, mục tiêu ≥ 6 câu đúng.</p>`),
  ];

  addDeck('FI-08', `Slide Floating-Rate and Money Market - bản thiết kế riêng (${slides.length} slide)`, slides);
}());
