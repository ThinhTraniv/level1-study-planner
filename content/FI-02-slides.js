// Bộ slide tự thiết kế cho FI-02 Fixed-Income Cash Flows and Types.
(function () {
  const L = window.LESSONS && window.LESSONS['FI-02'];
  if (!L) return;
  const { slide, addDeck, tl, frac } = window.CFAH;
  const K = 'FI-02 · Cash Flows and Types';
  const S = (title, body, opt = {}) => slide(title, body, Object.assign({ kicker: K }, opt));
  const fmt = (x, d = 2) => x.toFixed(d).replace('.', ',');

  // Khoản vay 1.000, 6%, 5 năm, trả dần toàn phần: cột chồng lãi (cam) và gốc (xanh).
  function amortBars() {
    const r = 0.06, n = 5, P = 1000, pmt = (P * r) / (1 - (1 + r) ** -n);
    const W = 600, H = 260, b = 210, top = 30, sc = (b - top) / 250;
    let bal = P, s = `<svg viewBox="0 0 ${W} ${H}" class="sv" role="img" aria-label="Lãi giảm dần, gốc tăng dần">`;
    s += `<line x1="40" y1="${b}" x2="580" y2="${b}" class="sv-axis"/>`;
    for (let k = 1; k <= n; k++) {
      const i = bal * r, pr = pmt - i; bal -= pr;
      const x = 40 + (k - 0.5) * 108 - 30;
      s += `<rect x="${x}" y="${b - pr * sc}" width="60" height="${pr * sc}" class="sv-key"/>`;
      s += `<rect x="${x}" y="${b - (pr + i) * sc}" width="60" height="${i * sc}" class="sv-dot"/>`;
      s += `<text x="${x + 30}" y="${b - (pr + i) * sc - 8}" class="sv-muted">${fmt(i)}</text>`;
      s += `<text x="${x + 30}" y="${b + 24}" class="sv-muted">Năm ${k}</text>`;
    }
    s += `<text x="40" y="20" class="sv-muted" text-anchor="start">Mỗi cột = 237,40 · phần tô đậm: lãi · phần viền: gốc</text>`;
    return `${s}</svg>`;
  }

  // Gốc PIK phình to: 100 với lãi 8% nhập gốc.
  function pikBars() {
    const rows = [0, 1, 2, 3].map(k => [`Năm ${k}`, 100 * 1.08 ** k]);
    return `<div class="sd-bars">${rows.map(([lab, v]) => `<div class="sd-bar"><span class="sd-bar-l">${lab}</span><span class="sd-bar-t"><i style="width:${(v / 130) * 100}%"></i></span><b>${fmt(v)}</b></div>`).join('')}</div>`;
  }

  const slides = [
    S('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Fixed Income · FI-02</div>
      <h2>Fixed-Income<br>Cash Flows and Types</h2>
      <p>Gốc trả khi nào - lãi tính thế nào - ai được thay đổi dòng tiền</p>
      <div class="sd-chips"><span>LOS 1 · Cấu trúc dòng tiền, quyền chọn</span><span>LOS 2 · Pháp lý, quy định, thuế</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Ba cách trả gốc: vay 1.000, 6%, 5 năm', `<div class="sd-stack">
      <div><span class="sd-lab">Bullet</span>${tl(5, [{ t: 1, label: '60' }, { t: 2, label: '60' }, { t: 3, label: '60' }, { t: 4, label: '60' }, { t: 5, label: '1.060' }], { h: 110, y: 34, mini: true })}</div>
      <div><span class="sd-lab">Toàn phần</span>${tl(5, [{ t: 1, label: '237' }, { t: 2, label: '237' }, { t: 3, label: '237' }, { t: 4, label: '237' }, { t: 5, label: '237' }], { h: 110, y: 34, mini: true })}</div>
      <div><span class="sd-lab acc">Balloon 400</span>${tl(5, [{ t: 1, label: '166' }, { t: 2, label: '166' }, { t: 3, label: '166' }, { t: 4, label: '166' }, { t: 5, label: '566' }], { h: 110, y: 34, mini: true })}</div></div>
      <p class="sd-note">Tổng lãi: bullet 300 · toàn phần 186,98 · balloon 232,19.</p>`),

    S('Amortizing: lãi giảm, gốc tăng', `${amortBars()}
      <div class="sd-keys"><span>5 <kbd>N</kbd> 6 <kbd>I/Y</kbd> 1000 <kbd>PV</kbd> 0 <kbd>FV</kbd></span><span><kbd>CPT</kbd> <kbd>PMT</kbd> = -237,40</span><span><kbd>2ND</kbd> <kbd>PV</kbd>: bảng AMORT</span></div>`),

    S('Trả gốc sớm: đánh đổi hai rủi ro', `<div class="sd-cols2">
      <div class="sd-card"><b>Sinking fund</b><p>200 triệu, 10 năm, mua lại 20 triệu/năm từ năm 6 → balloon cuối kỳ <b>100 triệu</b>.</p><small>Mua lại ngẫu nhiên ở mệnh giá hoặc mua trên thị trường</small></div>
      <div><div class="sd-rule up">Dư nợ giảm dần <b>rủi ro tín dụng thấp hơn</b></div><div class="sd-rule down">Nhận tiền sớm khi lãi suất giảm <b>rủi ro tái đầu tư</b></div><div class="sd-rule">Bullet <b>ngược lại</b></div></div></div>`),

    S('FRN: MRR đầu kỳ, trả lãi cuối kỳ', `<div class="sd-f">Coupon = MRR + biên cố định = 3,2% + 1,1% = <b>4,3%/năm</b></div>
      ${tl(1, [{ t: 0, label: 'Chốt MRR 3,2%', cls: 'pv' }, { t: 1, label: '1.000 × 4,3% / 4 = 10,75' }], { h: 130, ticks: ['Đầu quý', 'Cuối quý'] })}
      <p class="sd-note">Cap có lợi cho issuer · floor có lợi cho trái chủ · inverse floater: coupon giảm khi MRR tăng.</p>`),

    S('Các kiểu coupon có điều kiện', `<div class="sd-tbl grid"><div class="head"><span>Loại</span><span>Cách vận hành</span><span>Có lợi / bảo vệ</span></div>
      <div><span>Step-up</span><span>Tăng theo lịch</span><span>Trái chủ</span></div>
      <div><span>Credit-linked</span><span>Tăng khi bị hạ hạng</span><span>Trái chủ</span></div>
      <div><span>PIK</span><span>Trả lãi bằng trái phiếu</span><span>Issuer</span></div>
      <div><span>Deferred</span><span>Hoãn lãi vài năm đầu</span><span>Issuer</span></div>
      <div><span>Zero-coupon</span><span>Không lãi, mua dưới mệnh giá</span><span>Không rủi ro tái đầu tư</span></div></div>`),

    S('PIK và trái phiếu gắn lạm phát', `<div class="sd-cols2">
      <div><p class="sd-cap">PIK 100, lãi 8% nhập gốc:</p>${pikBars()}</div>
      <div class="sd-card acc"><b>Capital-indexed (TIPS)</b><p>Gốc 1.000, coupon thực 2%. Lạm phát 3% rồi 4%:</p><p>Gốc 1.030 → coupon <b>20,60</b><br>Gốc 1.071,20 → coupon <b>21,42</b></p><small>Interest-indexed: gốc cố định, rate theo lạm phát</small></div></div>`),

    S('Callable: quyền của issuer', `<div class="sd-tbl grid"><div class="head"><span>Thời điểm</span><span>Năm 1-3</span><span>Sau năm 3</span><span>Sau năm 4</span><span>Từ năm 5</span></div>
      <div><span>Giá call</span><span>Không call</span><span>102</span><span>101</span><span>100</span></div></div>
      <div class="sd-cols3">
      <div class="sd-card"><b>American</b><p>Bất kỳ lúc nào sau bảo vệ</p></div>
      <div class="sd-card"><b>European</b><p>Một ngày duy nhất</p></div>
      <div class="sd-card"><b>Bermudan</b><p>Các ngày định trước</p></div></div>
      <p class="sd-note">Issuer call khi lãi suất giảm → trái chủ chịu rủi ro tái đầu tư → <b>giá thấp hơn, lợi suất cao hơn</b>. Make-whole: issuer ít động cơ call.</p>`),

    S('Convertible: đổi trái phiếu lấy cổ phiếu', `<div class="sd-f sm">Tỷ lệ = ${frac('mệnh giá', 'giá chuyển đổi')} = ${frac('1.000', '40')} = <b>25 cổ phiếu</b></div>
      <div class="sd-tbl grid"><div class="head"><span>Giá cổ phiếu</span><span>36</span><span>48</span></div>
      <div><span>Giá trị chuyển đổi (25 × giá)</span><span>900</span><span>1.200</span></div>
      <div><span>Giá trái phiếu</span><span>980</span><span>quanh 1.200</span></div>
      <div><span>Phần bù chuyển đổi</span><span>80 (8,89%)</span><span>gần 0</span></div></div>
      <p class="sd-note">Warrant: quyền mua cổ phiếu tách rời được. CoCo: tự chuyển đổi khi vốn ngân hàng dưới ngưỡng.</p>`),

    S('Ai có lợi từ điều khoản?', `<div class="sd-cols2">
      <div class="sd-card"><b>Issuer</b><p>Call · make-whole call · CoCo · PIK · cap</p><small>→ trái chủ đòi lợi suất cao hơn</small></div>
      <div class="sd-card acc"><b>Trái chủ</b><p>Put · chuyển đổi · warrant · floor · step-up · credit-linked</p><small>→ trái chủ chấp nhận lợi suất thấp hơn</small></div></div>`),

    S('Phát hành ở đâu, chịu thuế ra sao?', `<div class="sd-grid4">
      <div class="sd-card"><b>Domestic</b><p>Issuer trong nước, thị trường trong nước</p></div>
      <div class="sd-card"><b>Foreign</b><p>Issuer ngoại, thị trường nội địa khác: Yankee, Samurai, Panda</p></div>
      <div class="sd-card"><b>Eurobond</b><p>Ngoài thẩm quyền mọi quốc gia; tên theo đồng tiền</p></div>
      <div class="sd-card acc"><b>Global</b><p>Eurobond + ít nhất một thị trường trong nước</p></div></div>
      <p class="sd-note">Bearer: ai cầm là chủ · registered: ghi tên. Thuế: lãi như thu nhập thường; miễn thuế 3%, thuế suất 35% ≈ chịu thuế <b>4,62%</b>; OID có thể bị đánh thuế dần.</p>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>Bullet: rủi ro tín dụng cao nhất</span><span>Trả dần: thêm rủi ro tái đầu tư</span>
      <span>FRN: MRR đầu kỳ, trả cuối kỳ</span><span>PIK: lãi nhập gốc, kép</span>
      <span>TIPS: gốc theo lạm phát</span><span>Call, CoCo: có lợi cho issuer</span>
      <span>Tỷ lệ chuyển đổi = mệnh giá / giá CĐ</span><span>Eurobond không phải "trái phiếu EUR"</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 8 câu, mục tiêu ≥ 6 câu đúng.</p>`),
  ];

  addDeck('FI-02', `Slide Cash Flows and Types - bản thiết kế riêng (${slides.length} slide)`, slides);
}());
