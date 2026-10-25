// Bộ slide tự thiết kế cho QM-04 The Time Value of Money in Finance.
// Gắn vào LESSONS['QM-04'].slides.
(function () {
  const L = window.LESSONS && window.LESSONS['QM-04'];
  if (!L) return;

  const frac = (a, b) => `<span class="frac"><span>${a}</span><span>${b}</span></span>`;
  const fmt = (x, d = 2) => x.toFixed(d).replace('.', ',');

  // Trục thời gian nhỏ dùng trong slide. flows: [{t, label, cls}] ; cls: up (tiền vào), down (tiền ra), pv
  function tl(n, flows, opt = {}) {
    const mini = !!opt.mini;
    const W = mini ? 420 : 600, H = opt.h || 120, x0 = mini ? 24 : 30, x1 = W - (mini ? 24 : 30), y = opt.y || 62;
    const fs = mini ? 'style="font-size:22px"' : '';
    const x = i => x0 + ((x1 - x0) * i) / n;
    // Keep labels at the two ends inside the picture.
    const anchor = t => (t === 0 ? `x="${x(t) - 4}" text-anchor="start"` : t === n ? `x="${x(t) + 4}" text-anchor="end"` : `x="${x(t)}"`);
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv ${mini ? 'mini' : ''}" role="img" aria-label="${opt.label || 'Trục thời gian'}">`;
    s += `<line x1="${x0}" y1="${y}" x2="${x1}" y2="${y}" class="sv-axis"/>`;
    for (let i = 0; i <= n; i++) s += `<line x1="${x(i)}" y1="${y - 5}" x2="${x(i)}" y2="${y + 5}" class="sv-axis"/><text x="${x(i)}" y="${y + 24}" class="sv-muted" ${mini ? 'style="font-size:17px"' : ''}>${opt.ticks ? opt.ticks[i] : i}</text>`;
    flows.forEach(f => {
      const top = f.cls === 'pv' || f.above;
      s += `<line x1="${x(f.t)}" y1="${top ? y - 10 : y + 32}" x2="${x(f.t)}" y2="${top ? y - 30 : y + 44}" class="sv-${f.cls || 'up'}"/>`;
      s += `<text ${anchor(f.t)} y="${top ? y - 38 : y + 66}" class="sv-txt sv-t-${f.cls || 'up'}" ${fs}>${f.label}</text>`;
    });
    return `${s}</svg>`;
  }

  // Đường giá - lợi suất của trái phiếu coupon 4%, 10 năm.
  function priceYield() {
    const price = r => { let p = 0; for (let k = 1; k <= 10; k++) p += 4 / (1 + r) ** k; return p + 100 / (1 + r) ** 10; };
    const W = 600, H = 300, l = 60, r = 580, t = 20, b = 250;
    const xs = y => l + ((y - 1) / 8) * (r - l);
    const ys = p => b - ((p - 60) / (130 - 60)) * (b - t);
    let pts = '';
    for (let y = 1; y <= 9.001; y += 0.1) pts += `${xs(y).toFixed(1)},${ys(price(y / 100)).toFixed(1)} `;
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv" role="img" aria-label="Giá trái phiếu giảm khi lợi suất tăng">`;
    s += `<line x1="${l}" y1="${b}" x2="${r}" y2="${b}" class="sv-axis"/><line x1="${l}" y1="${t}" x2="${l}" y2="${b}" class="sv-axis"/>`;
    [60, 80, 100, 120].forEach(p => { s += `<line x1="${l}" y1="${ys(p)}" x2="${r}" y2="${ys(p)}" class="sv-grid"/><text x="${l - 10}" y="${ys(p) + 5}" class="sv-muted" text-anchor="end">${p}</text>`; });
    [1, 3, 5, 7, 9].forEach(y => { s += `<text x="${xs(y)}" y="${b + 24}" class="sv-muted">${y}%</text>`; });
    s += `<line x1="${xs(4)}" y1="${t}" x2="${xs(4)}" y2="${b}" class="sv-dash"/>`;
    s += `<polyline points="${pts}" class="sv-curve"/>`;
    s += `<circle cx="${xs(4)}" cy="${ys(100)}" r="6" class="sv-dot"/>`;
    s += `<text x="${xs(2.3)}" y="${ys(118)}" class="sv-txt sv-t-up">Premium</text><text x="${xs(4)}" y="${ys(100) - 14}" class="sv-txt">Par</text><text x="${xs(7.2)}" y="${ys(86)}" class="sv-txt sv-t-down">Discount</text>`;
    s += `<text x="${(l + r) / 2}" y="${H - 2}" class="sv-muted">Lợi suất thị trường (coupon 4%, kỳ hạn 10 năm)</text>`;
    return `${s}</svg>`;
  }

  // EAR của 5% danh nghĩa theo tần suất ghép lãi.
  function earBars() {
    const rows = [['Năm (m=1)', 1], ['Nửa năm (m=2)', 2], ['Quý (m=4)', 4], ['Tháng (m=12)', 12], ['Ngày (m=365)', 365], ['Liên tục', 0]];
    const val = m => (m ? (1 + 0.05 / m) ** m - 1 : Math.exp(0.05) - 1) * 100;
    const lo = 4.98, hi = 5.14;
    return `<div class="sd-bars">${rows.map(([lab, m]) => {
      const v = val(m);
      return `<div class="sd-bar"><span class="sd-bar-l">${lab}</span><span class="sd-bar-t"><i style="width:${((v - lo) / (hi - lo)) * 100}%"></i></span><b>${fmt(v, 4)}%</b></div>`;
    }).join('')}</div>`;
  }

  // Hàng phím TVM của BA II Plus.
  const calc = `<svg viewBox="0 0 600 150" class="sv" role="img" aria-label="Hàng phím TVM">
    <rect x="10" y="10" width="580" height="130" rx="16" class="sv-panel"/>
    ${['N', 'I/Y', 'PV', 'PMT', 'FV'].map((k, i) => `<rect x="${40 + i * 108}" y="40" width="90" height="56" rx="10" class="sv-key"/><text x="${85 + i * 108}" y="76" class="sv-keyt">${k}</text>`).join('')}
    <text x="85" y="122" class="sv-muted">số kỳ</text><text x="193" y="122" class="sv-muted">lãi suất %</text><text x="301" y="122" class="sv-muted">hiện tại</text><text x="409" y="122" class="sv-muted">mỗi kỳ</text><text x="517" y="122" class="sv-muted">tương lai</text>
    <text x="300" y="30" class="sv-muted">Nhập 4 ô đã biết  →  CPT + ô cần tìm</text></svg>`;

  // Cây nhị phân 1 kỳ.
  const tree = `<svg viewBox="0 0 600 260" class="sv big" role="img" aria-label="Cây nhị phân một kỳ">
    <line x1="120" y1="130" x2="400" y2="55" class="sv-axis"/><line x1="120" y1="130" x2="400" y2="205" class="sv-axis"/>
    <circle cx="120" cy="130" r="40" class="sv-node"/><text x="120" y="126" class="sv-txt">S = 100</text><text x="120" y="148" class="sv-muted">C = ?</text>
    <circle cx="430" cy="55" r="40" class="sv-node up"/><text x="430" y="51" class="sv-txt">120</text><text x="430" y="73" class="sv-t-up sv-txt">C = 20</text>
    <circle cx="430" cy="205" r="40" class="sv-node down"/><text x="430" y="201" class="sv-txt">90</text><text x="430" y="223" class="sv-t-down sv-txt">C = 0</text>
    <text x="260" y="70" class="sv-muted">lên</text><text x="260" y="200" class="sv-muted">xuống</text>
    <text x="120" y="200" class="sv-muted">t = 0</text><text x="540" y="135" class="sv-muted">t = 1</text></svg>`;

  // Hai con đường đầu tư 2 năm.
  const fwdPaths = `<svg viewBox="0 0 600 220" class="sv big" role="img" aria-label="Hai cách đầu tư 2 năm cho cùng kết quả">
    <text x="20" y="40" class="sv-muted" text-anchor="start">Cách A</text>
    <line x1="90" y1="50" x2="560" y2="50" class="sv-curve"/><text x="325" y="38" class="sv-txt">spot 2 năm: (1 + 3%)²</text>
    <text x="20" y="150" class="sv-muted" text-anchor="start">Cách B</text>
    <line x1="90" y1="160" x2="320" y2="160" class="sv-up"/><line x1="330" y1="160" x2="560" y2="160" class="sv-down"/>
    <text x="205" y="148" class="sv-txt sv-t-up">spot 1 năm: 2%</text><text x="445" y="148" class="sv-txt sv-t-down">kỳ hạn f₁,₁ = ?</text>
    <text x="90" y="195" class="sv-muted">t = 0</text><text x="325" y="195" class="sv-muted">t = 1</text><text x="560" y="195" class="sv-muted">t = 2</text>
    <text x="325" y="105" class="sv-txt">=  cùng kết quả  =</text></svg>`;

  const S = (title, body, opt = {}) => ({ title, html: `<section class="sd ${opt.cls || ''}">
    ${opt.cover ? '' : `<header class="sd-h"><span class="sd-k">${opt.kicker || 'QM-04 · Time Value of Money'}</span><h3>${title}</h3></header>`}
    <div class="sd-b">${body}</div></section>` });

  const slides = [
    S('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Quantitative Methods · QM-04</div>
      <h2>The Time Value<br>of Money in Finance</h2>
      <p>Một ý tưởng - ba ứng dụng</p>
      <div class="sd-chips"><span>LOS 1 · Định giá</span><span>LOS 2 · Lợi suất ngầm định</span><span>LOS 3 · Không chênh lệch giá</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Ba câu hỏi của buổi học', `<div class="sd-cols3">
      <div class="sd-card"><div class="sd-n">1</div><b>Giá bao nhiêu?</b><p>Biết dòng tiền và lãi suất → tìm PV.</p><small>Trái phiếu, cổ phiếu</small></div>
      <div class="sd-card"><div class="sd-n">2</div><b>Thị trường đang kỳ vọng gì?</b><p>Biết giá và dòng tiền → tìm r hoặc g.</p><small>YTM, lợi suất yêu cầu, tăng trưởng ngầm định</small></div>
      <div class="sd-card"><div class="sd-n">3</div><b>Vì sao giá phải như vậy?</b><p>Cùng dòng tiền → cùng giá.</p><small>Lãi suất kỳ hạn, tỷ giá kỳ hạn, quyền chọn</small></div></div>`),

    S('Ý tưởng cốt lõi', `<div class="sd-big">Giá = Σ ${frac('CF<sub>t</sub>', '(1 + r)<sup>t</sup>')}</div>
      ${tl(4, [{ t: 0, label: 'Giá = ?', cls: 'pv' }, { t: 1, label: 'CF₁' }, { t: 2, label: 'CF₂' }, { t: 3, label: 'CF₃' }, { t: 4, label: 'CF₄' }], { h: 130 })}
      <p class="sd-note">Mọi tài sản tài chính = một chuỗi dòng tiền. Khác nhau chỉ ở <b>hình dạng dòng tiền</b> và <b>mức rủi ro</b> (quyết định r).</p>`),

    S('FV và PV: đi xuôi và đi ngược thời gian', `<div class="sd-cols2">
      <div><div class="sd-f">FV = PV × (1 + r)<sup>N</sup></div><p>Ghép lãi: đưa tiền <b>về tương lai</b>.</p>
      <div class="sd-f">PV = ${frac('FV', '(1 + r)<sup>N</sup>')}</div><p>Chiết khấu: đưa tiền <b>về hiện tại</b>.</p></div>
      <div><div class="sd-tbl"><div><span>Hằng năm</span><span>(1 + r)<sup>N</sup></span></div><div><span>m lần/năm</span><span>(1 + r/m)<sup>m·N</sup></span></div><div><span>Liên tục</span><span>e<sup>r·N</sup></span></div></div>
      <p class="sd-note">1.000 USD, 5%, 3 năm → <b>1.157,63</b> (năm) · <b>1.160,75</b> (quý) · <b>1.161,83</b> (liên tục)</p></div></div>`),

    S('EAR: so sánh lãi suất cho công bằng', `<div class="sd-cols2">
      <div><div class="sd-f">EAR = (1 + ${frac('r', 'm')})<sup>m</sup> - 1</div><div class="sd-f">EAR<sub>liên tục</sub> = e<sup>r</sup> - 1</div>
      <p class="sd-note">BA II Plus: <kbd>2ND</kbd> <kbd>2</kbd> (ICONV) → NOM, C/Y → <kbd>CPT</kbd> EFF</p></div>
      <div><p class="sd-cap">Lãi suất danh nghĩa 5% với các tần suất ghép lãi:</p>${earBars()}<p class="sd-note">Ghép lãi càng dày thì EAR càng cao, nhưng tăng chậm dần.</p></div></div>`),

    S('BA II Plus: 5 phím làm mọi bài TVM', `${calc}
      <div class="sd-cols3 sd-rules">
      <div class="sd-card"><b>1. Xóa trước mỗi bài</b><p><kbd>2ND</kbd> <kbd>FV</kbd> (CLR TVM)</p></div>
      <div class="sd-card"><b>2. P/Y = 1</b><p><kbd>2ND</kbd> <kbd>I/Y</kbd> 1 <kbd>ENTER</kbd>. Máy mới để 12!</p></div>
      <div class="sd-card"><b>3. I/Y nhập %</b><p>5% → nhập <kbd>5</kbd>, không nhập 0.05</p></div></div>`),

    S('Quy ước dấu: tiền ra âm, tiền vào dương', `${tl(5, [{ t: 0, label: '+100.000 (nhận khoản vay)', cls: 'up', above: true }, { t: 1, label: '-23.740', cls: 'down' }, { t: 2, label: '-23.740', cls: 'down' }, { t: 3, label: '-23.740', cls: 'down' }, { t: 4, label: '-23.740', cls: 'down' }, { t: 5, label: '-23.740', cls: 'down' }], { h: 140 })}
      <div class="sd-keys"><span>5 <kbd>N</kbd></span><span>6 <kbd>I/Y</kbd></span><span>100000 <kbd>PV</kbd></span><span>0 <kbd>FV</kbd></span><span><kbd>CPT</kbd> <kbd>PMT</kbd> = <b>-23.739,64</b></span></div>
      <p class="sd-note">PV và FV cùng dấu khi giải I/Y hoặc N → máy báo <b>Error 5</b>.</p>`),

    S('Bốn dạng dòng tiền nợ', `<div class="sd-grid4">
      <div><b>Zero-coupon</b>${tl(3, [{ t: 0, label: 'PV', cls: 'pv' }, { t: 3, label: 'FV' }], { h: 140, y: 64, mini: true })}<span class="sd-f sm">PV = FV / (1 + r)<sup>N</sup></span></div>
      <div><b>Coupon bond</b>${tl(3, [{ t: 0, label: 'PV', cls: 'pv' }, { t: 1, label: 'C' }, { t: 2, label: 'C' }, { t: 3, label: 'C + FV' }], { h: 140, y: 64, mini: true })}<span class="sd-f sm">Σ C/(1 + r)<sup>t</sup> + FV/(1 + r)<sup>N</sup></span></div>
      <div><b>Perpetual</b>${tl(3, [{ t: 0, label: 'PV', cls: 'pv' }, { t: 1, label: 'C' }, { t: 2, label: 'C' }, { t: 3, label: 'C ...' }], { h: 140, y: 64, mini: true })}<span class="sd-f sm">PV = C / r</span></div>
      <div><b>Amortizing</b>${tl(3, [{ t: 0, label: 'PV', cls: 'pv' }, { t: 1, label: 'A' }, { t: 2, label: 'A' }, { t: 3, label: 'A' }], { h: 140, y: 64, mini: true })}<span class="sd-f sm">FV = 0, mỗi kỳ trả lãi + gốc</span></div></div>`),

    S('Giá và lợi suất đi ngược chiều', `<div class="sd-cols2 wide-left"><div>${priceYield()}</div>
      <div><div class="sd-rule up">Coupon &gt; lợi suất → giá &gt; 100 <b>Premium</b></div><div class="sd-rule">Coupon = lợi suất → giá = 100 <b>Par</b></div><div class="sd-rule down">Coupon &lt; lợi suất → giá &lt; 100 <b>Discount</b></div>
      <p class="sd-note">Ví dụ: 3 năm, coupon 4%, lợi suất 5% → giá <b>97,28</b></p></div></div>`),

    S('Định giá cổ phiếu: ba giả định về cổ tức', `<div class="sd-cols3">
      <div class="sd-card"><b>Cổ tức không đổi</b><div class="sd-f sm">V₀ = ${frac('D', 'r')}</div><small>Cổ phiếu ưu đãi = perpetuity</small></div>
      <div class="sd-card acc"><b>Tăng đều g mãi mãi (Gordon)</b><div class="sd-f sm">V₀ = ${frac('D<sub>1</sub>', 'r - g')}</div><small>Điều kiện r &gt; g</small></div>
      <div class="sd-card"><b>Hai giai đoạn</b><div class="sd-f sm">V₀ = Σ ${frac('D<sub>t</sub>', '(1 + r)<sup>t</sup>')} + ${frac('V<sub>n</sub>', '(1 + r)<sup>n</sup>')}</div><small>V<sub>n</sub> tính bằng Gordon</small></div></div>`),

    S('Bẫy số 1: D₀ hay D₁?', `${tl(2, [{ t: 0, label: 'D₀ = 1,50 (vừa trả)', cls: 'down', above: true }, { t: 1, label: 'D₁ = 1,575' }, { t: 2, label: 'D₂ = 1,654' }], { h: 140, ticks: ['hôm nay', 'năm 1', 'năm 2'] })}
      <div class="sd-cols2"><div class="sd-rule up">Đúng: V₀ = 1,575 / (10% - 5%) = <b>31,50</b></div><div class="sd-rule down">Bẫy: V₀ = 1,50 / (10% - 5%) = 30,00</div></div>
      <p class="sd-note">Đề viết "just paid / most recent" → D₀, phải nhân (1 + g). Đề viết "expected next year" → đã là D₁.</p>`),

    S('Hai giai đoạn: chiết khấu từng mảnh', `${tl(3, [{ t: 0, label: 'V₀ = 22,70', cls: 'pv' }, { t: 1, label: '1,20' }, { t: 2, label: '1,44 + V₂' }, { t: 3, label: 'g = 5% mãi mãi' }], { h: 140 })}
      <div class="sd-steps"><span>① D₁ = 1,20; D₂ = 1,44 (tăng 20%)</span><span>② V₂ = D₃ / (r - g) = 1,512 / 6% = 25,20</span><span>③ V₀ = 1,20/1,11 + 26,64/1,11² = <b>22,70</b></span></div>
      <p class="sd-note">Giá trị cuối kỳ đặt ở <b>t = 2</b> (thời điểm trước dòng tiền đầu tiên của giai đoạn ổn định), không phải t = 3.</p>`),

    S('Lợi suất ngầm định: làm ngược bài toán', `<div class="sd-cols2">
      <div class="sd-card"><b>Công cụ nợ</b><div class="sd-f sm">r = (${frac('FV', 'PV')})<sup>1/N</sup> - 1</div><p>Zero-coupon: giá 90, 3 năm → <b>3,57%</b></p><p>Có coupon: <kbd>CPT</kbd> <kbd>I/Y</kbd> → YTM</p></div>
      <div class="sd-card acc"><b>Cổ phiếu (Gordon đảo ngược)</b><div class="sd-f sm">r = ${frac('D<sub>1</sub>', 'P<sub>0</sub>')} + g &nbsp; · &nbsp; g = r - ${frac('D<sub>1</sub>', 'P<sub>0</sub>')}</div><p>P₀ = 40, D₁ = 1,60, g = 5% → r = <b>9%</b></p><p>Nếu r = 10% → thị trường ngầm định g = <b>6%</b></p></div></div>`),

    S('Cộng dòng tiền (cash flow additivity)', `<div class="sd-stack">
      <div><span class="sd-lab">Dòng tiền X</span>${tl(3, [{ t: 1, label: '10' }, { t: 2, label: '10' }, { t: 3, label: '10' }], { h: 110, y: 34, mini: true })}</div>
      <div><span class="sd-lab">Dòng tiền Y</span>${tl(3, [{ t: 3, label: '100' }], { h: 110, y: 34, mini: true })}</div>
      <div><span class="sd-lab acc">X + Y</span>${tl(3, [{ t: 1, label: '10' }, { t: 2, label: '10' }, { t: 3, label: '110' }], { h: 110, y: 34, mini: true })}</div></div>
      <p class="sd-note"><b>PV(X + Y) = PV(X) + PV(Y)</b>. Trái phiếu coupon = một annuity + một zero-coupon. Nếu hai cách tạo cùng dòng tiền mà khác giá → có <b>arbitrage</b>.</p>`),

    S('Ứng dụng 1: lãi suất kỳ hạn ngầm định', `${fwdPaths}
      <div class="sd-f">(1 + r<sub>2</sub>)<sup>2</sup> = (1 + r<sub>1</sub>)(1 + f<sub>1,1</sub>) &nbsp;→&nbsp; f<sub>1,1</sub> = ${frac('1,03<sup>2</sup>', '1,02')} - 1 = <b>4,01%</b></div>
      <p class="sd-note">Không phải trung bình cộng! f phải đủ cao để "kéo" trung bình 2 năm lên 3%.</p>`),

    S('Ứng dụng 2: tỷ giá kỳ hạn', `<div class="sd-f">F<sub>P/B</sub> = S<sub>P/B</sub> × ${frac('1 + i<sub>P</sub>', '1 + i<sub>B</sub>')}</div>
      <div class="sd-cols2"><div class="sd-card"><b>Ví dụ</b><p>S = 1,2500 USD/GBP</p><p>i<sub>USD</sub> = 4% · i<sub>GBP</sub> = 5%</p><p>F = 1,25 × 1,04 / 1,05 = <b>1,2381</b></p></div>
      <div class="sd-card acc"><b>Trực giác</b><p>GBP có lãi suất cao hơn → GBP <b>giảm giá</b> kỳ hạn.</p><p>Nếu không: vay USD → đổi GBP → gửi lãi cao → bán GBP kỳ hạn → lời không rủi ro.</p></div></div>
      <p class="sd-note">USD/GBP = số USD cho 1 GBP. USD là đồng định giá (P), GBP là đồng cơ sở (B).</p>`),

    S('Ứng dụng 3: định giá quyền chọn bằng sao chép', `<div class="sd-cols2 wide-left"><div>${tree}</div>
      <div><div class="sd-steps"><span>① Hedge ratio h = (20 - 0) / (120 - 90) = <b>0,667</b></span><span>② Vay PV(0,667 × 90) = 60 / 1,04 = <b>57,69</b></span><span>③ C = 0,667 × 100 - 57,69 = <b>8,97</b></span></div>
      <p class="sd-note">Kiểm tra bằng xác suất trung lập rủi ro: q = (104 - 90)/30 = 0,467 → C = 0,467 × 20 / 1,04 = 8,97</p></div></div>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>Vẽ trục thời gian trước khi bấm máy</span><span>P/Y = 1, xóa TVM, nhớ END/BGN</span>
      <span>m lần/năm: chia r cho m, nhân N với m</span><span>EAR để so sánh lãi suất</span>
      <span>Coupon &lt; lợi suất → discount</span><span>Gordon dùng D₁, cần r &gt; g</span>
      <span>Perpetuity bắt đầu năm k → giá trị tại k - 1</span><span>Cùng dòng tiền → cùng giá (no arbitrage)</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 10 câu, mục tiêu ≥ 7 câu đúng.</p>`),
  ];

  L.slides.unshift({ label: 'Slide TVM - bản thiết kế riêng (18 slide)', html: slides.map(s => s.html), titles: slides.map(s => s.title) });
}());
