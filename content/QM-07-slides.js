// Bộ slide tự thiết kế cho QM-07 Estimation and Hypothesis Testing.
// Gắn vào LESSONS['QM-07'].slides.
(function () {
  const { slide, addDeck, frac } = window.CFAH;
  if (!window.LESSONS || !window.LESSONS['QM-07']) return;
  const K = 'QM-07 · Estimation & Hypothesis Testing';
  const S = (title, body, opt = {}) => slide(title, body, Object.assign({ kicker: K }, opt));

  // Đường chuẩn tắc với vùng bác bỏ. o: {tails, c, lab, mark, markLab, H, big, cap}
  function bell(o) {
    const W = 600, H = o.H || 240, x0 = 30, x1 = 570, base = H - 50, peak = H - 90;
    const X = z => x0 + ((z + 4) / 8) * (x1 - x0);
    const Y = z => base - peak * Math.exp(-z * z / 2);
    const curve = (a, b) => { let p = ''; for (let z = a; z <= b + 1e-9; z += 0.05) p += `${X(z).toFixed(1)},${Y(z).toFixed(1)} `; return p; };
    const region = (a, b) => `<polygon points="${X(a).toFixed(1)},${base} ${curve(a, b)}${X(b).toFixed(1)},${base}" style="fill:var(--bad-soft)"/>`;
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv ${o.big ? 'big' : ''}" role="img" aria-label="Vùng bác bỏ">`;
    if (o.tails === 'two' || o.tails === 'left') s += region(-4, -o.c);
    if (o.tails === 'two' || o.tails === 'right') s += region(o.c, 4);
    s += `<polyline points="${curve(-4, 4)}" class="sv-curve"/>`;
    s += `<line x1="${x0}" y1="${base}" x2="${x1}" y2="${base}" class="sv-axis"/>`;
    const cl = [];
    if (o.tails === 'two' || o.tails === 'left') cl.push(-o.c);
    if (o.tails === 'two' || o.tails === 'right') cl.push(o.c);
    cl.forEach(z => {
      s += `<line x1="${X(z)}" y1="${base - 6}" x2="${X(z)}" y2="${base + 6}" class="sv-axis"/>`;
      s += `<text x="${X(z)}" y="${base + 26}" class="sv-muted">${z < 0 ? '-' : ''}${o.lab}</text>`;
      if (o.tailLab) s += `<text x="${X(z < 0 ? -3.1 : 3.1)}" y="${base - 34}" class="sv-txt sv-t-down">${o.tailLab}</text>`;
    });
    if (o.center) s += `<text x="${X(0)}" y="${base - peak * 0.45}" class="sv-txt">${o.center}</text>`;
    if (o.mark !== undefined) s += `<line x1="${X(o.mark)}" y1="${base}" x2="${X(o.mark)}" y2="${base - peak * 0.75}" class="sv-pv"/><text x="${X(o.mark)}" y="${base - peak * 0.75 - 8}" class="sv-txt sv-t-pv">${o.markLab}</text>`;
    if (o.cap) s += `<text x="300" y="${H - 4}" class="sv-muted">${o.cap}</text>`;
    return `${s}</svg>`;
  }

  // CLT: tổng thể lệch phải (đường mờ) và phân phối của X̄ hẹp, chuẩn (đường đậm).
  function cltFig() {
    const W = 600, H = 260, x0 = 40, x1 = 570, base = 210;
    const X = v => x0 + (v / 10) * (x1 - x0);
    // Tổng thể: gamma(k=2, θ=1.5), trung bình 3; X̄ với n = 36: chuẩn(3, σ = 2,12/6).
    const pop = v => v * Math.exp(-v / 1.5) / 2.25;
    const sd = Math.sqrt(2) * 1.5 / 6;
    const xbar = v => Math.exp(-((v - 3) ** 2) / (2 * sd * sd)) / (sd * Math.sqrt(2 * Math.PI));
    const sc = 165 / xbar(3);
    let p1 = '', p2 = '';
    for (let v = 0; v <= 10.001; v += 0.05) {
      p1 += `${X(v).toFixed(1)},${(base - pop(v) * sc).toFixed(1)} `;
      p2 += `${X(v).toFixed(1)},${(base - xbar(v) * sc).toFixed(1)} `;
    }
    return `<svg viewBox="0 0 ${W} ${H}" class="sv big" role="img" aria-label="Định lý giới hạn trung tâm">
      <polyline points="${p1}" class="sv-dash" style="fill:none"/><polyline points="${p2}" class="sv-curve"/>
      <line x1="${x0}" y1="${base}" x2="${x1}" y2="${base}" class="sv-axis"/>
      <line x1="${X(3)}" y1="${base + 6}" x2="${X(3)}" y2="${base - 6}" class="sv-axis"/><text x="${X(3)}" y="${base + 28}" class="sv-muted">μ</text>
      <text x="${X(4.2)}" y="70" class="sv-txt" text-anchor="start">Phân phối của X̄ (n = 36)</text>
      <text x="${X(5.6)}" y="${base - 50}" class="sv-muted" text-anchor="start">Tổng thể lệch phải</text></svg>`;
  }

  // Ma trận sai lầm loại I/II.
  const matrix = `<svg viewBox="0 0 600 270" class="sv big" role="img" aria-label="Ma trận sai lầm loại I và II">
    <text x="330" y="24" class="sv-muted">H0 đúng</text><text x="500" y="24" class="sv-muted">H0 sai</text>
    <text x="10" y="100" class="sv-muted" text-anchor="start">Không</text><text x="10" y="122" class="sv-muted" text-anchor="start">bác bỏ</text>
    <text x="10" y="210" class="sv-muted" text-anchor="start">Bác bỏ H0</text>
    <rect x="245" y="40" width="170" height="105" rx="12" class="sv-panel"/><text x="330" y="88" class="sv-txt sv-t-up">Đúng</text><text x="330" y="114" class="sv-muted">1 - α</text>
    <rect x="420" y="40" width="170" height="105" rx="12" class="sv-panel"/><text x="505" y="88" class="sv-txt sv-t-down">Loại II</text><text x="505" y="114" class="sv-muted">β</text>
    <rect x="245" y="150" width="170" height="105" rx="12" class="sv-panel"/><text x="330" y="198" class="sv-txt sv-t-down">Loại I</text><text x="330" y="224" class="sv-muted">α</text>
    <rect x="420" y="150" width="170" height="105" rx="12" class="sv-panel"/><text x="505" y="198" class="sv-txt sv-t-up">Đúng</text><text x="505" y="224" class="sv-muted">power = 1 - β</text></svg>`;

  // Sai số chuẩn theo cỡ mẫu (σ = 20%).
  const seBars = `<div class="sd-bars">${[[25, 4], [100, 2], [400, 1], [1600, 0.5]].map(([n, v]) =>
    `<div class="sd-bar"><span class="sd-bar-l">n = ${n >= 1000 ? String(n).replace(/(\d)(\d{3})$/, '$1.$2') : n}</span><span class="sd-bar-t"><i style="width:${v * 25}%"></i></span><b>${String(v).replace('.', ',')}%</b></div>`).join('')}</div>`;

  const slides = [
    S('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Quantitative Methods · QM-07</div>
      <h2>Estimation and<br>Hypothesis Testing</h2>
      <p>Từ một mẫu, nói được gì về tổng thể?</p>
      <div class="sd-chips"><span>LOS 1 · Chọn mẫu, CLT, khoảng tin cậy</span><span>LOS 2 · Kiểm định giả thuyết</span><span>LOS 3 · Tham số và phi tham số</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Ba việc của buổi học', `<div class="sd-cols3">
      <div class="sd-card"><div class="sd-n">1</div><b>Ước lượng</b><p>Lấy mẫu đúng cách → X̄, s → sai số chuẩn.</p><small>CLT, z hay t</small></div>
      <div class="sd-card"><div class="sd-n">2</div><b>Khoảng tin cậy</b><p>X̄ ± hệ số tin cậy × SE.</p><small>90% · 95% · 99%</small></div>
      <div class="sd-card acc"><div class="sd-n">3</div><b>Kiểm định</b><p>Dữ liệu có đủ bằng chứng bác bỏ H0 không?</p><small>t, χ², F, Spearman</small></div></div>
      <div class="sd-f">Thống kê kiểm định = ${frac('giá trị mẫu - giá trị theo H0', 'sai số chuẩn')}</div>`),

    S('Chọn mẫu: xác suất và phi xác suất', `<div class="sd-grid4">
      <div class="sd-card"><b>Simple random</b><p>Mọi phần tử cùng cơ hội. Biến thể: systematic (mỗi phần tử thứ k).</p></div>
      <div class="sd-card acc"><b>Stratified</b><p>Chia nhóm theo đặc điểm → chọn ngẫu nhiên trong <b>mọi</b> nhóm.</p></div>
      <div class="sd-card"><b>Cluster</b><p>Chọn ngẫu nhiên <b>vài cụm</b>, mỗi cụm như tổng thể thu nhỏ. Rẻ, kém chính xác.</p></div>
      <div class="sd-card"><b>Phi xác suất</b><p>Convenience (dễ lấy) · Judgmental (theo kinh nghiệm). Dễ thiên lệch.</p></div></div>
      <p class="sd-note">Sampling error = X̄ - μ, giảm khi n tăng. Sampling <b>bias</b> thì không.</p>`),

    S('Định lý giới hạn trung tâm', `<div class="sd-cols2 wide-left"><div>${cltFig()}</div>
      <div><div class="sd-rule">n ≥ 30 → X̄ <b>xấp xỉ chuẩn</b></div><div class="sd-rule">E(X̄) = <b>μ</b></div><div class="sd-rule">Var(X̄) = <b>σ²/n</b></div>
      <p class="sd-note">Đúng với <b>mọi</b> tổng thể có phương sai hữu hạn, kể cả lệch.</p></div></div>`),

    S('Sai số chuẩn giảm theo √n', `<div class="sd-cols2">
      <div><div class="sd-f">SE = ${frac('σ', '√n')} &nbsp; hoặc &nbsp; ${frac('s', '√n')}</div>
      <p class="sd-note">Ví dụ: 36 tháng, s = 4,8% → SE = 4,8/6 = <b>0,8%</b></p></div>
      <div><p class="sd-cap">σ = 20%, sai số chuẩn theo cỡ mẫu:</p>${seBars}<p class="sd-note">n gấp 4 → SE giảm một nửa.</p></div></div>`),

    S('Khoảng tin cậy: z hay t?', `<div class="sd-f">X̄ ± (z<sub>α/2</sub> hoặc t<sub>α/2; n-1</sub>) × SE</div>
      <div class="sd-cols2"><div class="sd-tbl">
        <div><span>90%</span><span>z = 1,645</span></div><div><span>95%</span><span>z = 1,960</span></div><div><span>99%</span><span>z = 2,576</span></div><div><span>95%, df = 35</span><span>t = 2,030</span></div></div>
      <div><div class="sd-rule up">Biết σ (hoặc n lớn) <b>z</b></div><div class="sd-rule down">Không biết σ <b>t, df = n - 1</b></div>
      <p class="sd-note">n = 36, X̄ = 1,5%, SE = 0,8% → <b>-0,124% đến 3,124%</b> (chứa 0)</p></div></div>`),

    S('Sáu bước kiểm định giả thuyết', `<div class="sd-steps">
      <span>① Phát biểu H0 (chứa dấu =) và Ha (điều muốn chứng minh)</span>
      <span>② Chọn thống kê kiểm định: z, t, χ², F</span>
      <span>③ Chọn mức ý nghĩa α (1%, 5%, 10%)</span>
      <span>④ Quy tắc quyết định: giá trị tới hạn</span>
      <span>⑤ Thu thập dữ liệu, tính thống kê</span>
      <span>⑥ Bác bỏ hoặc không bác bỏ H0 → rồi mới quyết định đầu tư</span></div>`),

    S('Hai phía hay một phía?', `<div class="sd-cols2">
      <div>${bell({ tails: 'two', c: 1.96, lab: '1,96', tailLab: '2,5%', center: '95%', cap: 'Ha: μ ≠ μ0' })}</div>
      <div>${bell({ tails: 'right', c: 1.645, lab: '1,645', tailLab: '5%', center: '95%', cap: 'Ha: μ > μ0' })}</div></div>
      <div class="sd-tbl grid"><div class="head"><span></span><span>α = 10%</span><span>α = 5%</span><span>α = 1%</span></div><div><span>Một phía</span><span>1,282</span><span>1,645</span><span>2,326</span></div><div><span>Hai phía</span><span>1,645</span><span>1,960</span><span>2,576</span></div></div>
      <p class="sd-note">Vùng bác bỏ nằm theo chiều của Ha.</p>`),

    S('Ví dụ: alpha của quỹ có khác 0?', `<div class="sd-cols2 wide-left"><div>${bell({ tails: 'two', c: 2.011, lab: '2,011', mark: 2.4, markLab: 't = 2,40', big: true })}</div>
      <div><div class="sd-steps"><span>n = 49, X̄ = 0,6%, s = 1,75%</span><span>SE = 1,75/7 = 0,25%</span><span>t = 0,6/0,25 = <b>2,40</b></span><span>df = 48, tới hạn ±2,011</span></div>
      <div class="sd-rule down">2,40 &gt; 2,011 <b>Bác bỏ H0</b></div></div></div>`),

    S('Sai lầm loại I, loại II và power', `<div class="sd-cols2 wide-left"><div>${matrix}</div>
      <div><div class="sd-rule down">Loại I: bác bỏ H0 đúng <b>α</b></div><div class="sd-rule down">Loại II: giữ H0 sai <b>β</b></div><div class="sd-rule up">Power = 1 - β</div>
      <p class="sd-note">n cố định: giảm α → β tăng. Muốn giảm cả hai: <b>tăng n</b>.</p></div></div>`),

    S('p-value: mức ý nghĩa nhỏ nhất để bác bỏ H0', `<div class="sd-cols2 wide-left"><div>${bell({ tails: 'two', c: 2.10, lab: '2,10', tailLab: '1,79%', big: true })}</div>
      <div><div class="sd-f sm">z = 2,10, hai phía → p = 2 × 1,79% = <b>3,57%</b></div>
      <div class="sd-rule up">α = 5%: p &lt; α <b>Bác bỏ</b></div><div class="sd-rule down">α = 1%: p &gt; α <b>Không bác bỏ</b></div>
      <p class="sd-note">Một phía: p = 1,79%.</p></div></div>`),

    S('Ba kiểm định trung bình', `<div class="sd-cols3">
      <div class="sd-card"><b>Một mẫu</b><div class="sd-f sm">t = ${frac('X̄ - μ<sub>0</sub>', 's/√n')}</div><small>df = n - 1</small></div>
      <div class="sd-card"><b>Hai mẫu độc lập</b><div class="sd-f sm">t = ${frac('X̄<sub>1</sub> - X̄<sub>2</sub>', '√(s<sub>p</sub>²/n<sub>1</sub> + s<sub>p</sub>²/n<sub>2</sub>)')}</div><small>df = n<sub>1</sub> + n<sub>2</sub> - 2, phương sai gộp</small></div>
      <div class="sd-card acc"><b>Mẫu cặp</b><div class="sd-f sm">t = ${frac('d̄', 's<sub>d</sub>/√n')}</div><small>df = n - 1 (số cặp)</small></div></div>
      <p class="sd-note">Cùng đối tượng, cùng thời kỳ, hai chuỗi tương quan → <b>paired</b>. Ví dụ 16 tháng, d̄ = 0,75%, s<sub>d</sub> = 1,2% → t = <b>2,50</b> &gt; 2,131 → bác bỏ.</p>`),

    S('Kiểm định phương sai: χ² và F', `<div class="sd-cols2">
      <div class="sd-card"><b>Một phương sai</b><div class="sd-f sm">χ² = ${frac('(n - 1)s²', 'σ<sub>0</sub>²')} &nbsp; df = n - 1</div>
      <p>n = 25, s = 5,2%, H0: σ = 4% → χ² = <b>40,56</b></p><p>Tới hạn 5% hai phía: 12,401 và 39,364 → bác bỏ</p></div>
      <div class="sd-card acc"><b>Hai phương sai</b><div class="sd-f sm">F = ${frac('s<sub>1</sub>²', 's<sub>2</sub>²')} (lớn trên) &nbsp; df = (n<sub>1</sub> - 1, n<sub>2</sub> - 1)</div>
      <p>s = 6% (n = 31) và 4,5% (n = 41) → F = <b>1,778</b></p><p>Hai phía: 1,778 &lt; 1,943 → không bác bỏ. Một phía: &gt; 1,744 → bác bỏ</p></div></div>
      <p class="sd-note">χ² không âm, lệch phải: tới hạn hai đuôi <b>không đối xứng</b>.</p>`),

    S('Kiểm định tương quan', `<div class="sd-f">t = ${frac('r √(n - 2)', '√(1 - r²)')} &nbsp;&nbsp; df = n - 2</div>
      <div class="sd-cols2"><div class="sd-card"><b>Pearson (tham số)</b><p>r = 0,30, n = 50 → t = <b>2,179</b></p><p>Tới hạn ±2,011 → bác bỏ H0: ρ = 0</p></div>
      <div class="sd-card acc"><b>Spearman (phi tham số)</b><div class="sd-f sm">r<sub>S</sub> = 1 - ${frac('6Σd²', 'n(n² - 1)')}</div><p>Dùng thứ hạng. n &gt; 30: cùng công thức t, df = n - 2</p></div></div>`),

    S('Khi nào dùng phi tham số?', `<div class="sd-cols2">
      <div class="sd-check"><span>Dữ liệu là thứ hạng</span><span>Ngoại lai, lệch mạnh</span><span>Mẫu nhỏ, không chuẩn</span><span>Không kiểm định tham số</span></div>
      <div class="sd-tbl"><div><span>t một mẫu / cặp</span><span>Wilcoxon signed-rank</span></div><div><span>t hai mẫu độc lập</span><span>Mann-Whitney U</span></div><div><span>Pearson</span><span>Spearman</span></div><div><span>Tính độc lập</span><span>χ² bảng tương liên</span></div></div></div>
      <p class="sd-note">Đánh đổi: ít giả định hơn nhưng kém mạnh hơn khi giả định tham số đúng.</p>`),

    S('Kiểm định tính độc lập: bảng tương liên', `<div class="sd-cols2">
      <div><div class="sd-tbl grid"><div class="head"><span>O (E)</span><span>Thấp</span><span>TB</span><span>Cao</span></div><div><span>Growth</span><span>30 (42)</span><span>50 (45)</span><span>40 (33)</span></div><div><span>Value</span><span>40 (28)</span><span>25 (30)</span><span>15 (22)</span></div></div>
      <p class="sd-note">E = tổng hàng × tổng cột / 200</p></div>
      <div><div class="sd-f sm">χ² = Σ ${frac('(O - E)²', 'E')} = <b>13,67</b></div><div class="sd-f sm">df = (2 - 1)(3 - 1) = 2</div>
      <div class="sd-rule down">13,67 &gt; 5,991 <b>Không độc lập</b></div></div></div>`),

    S('Bảng tổng hợp: test - thống kê - bậc tự do', `<div class="sd-tbl grid">
      <div class="head"><span>Kiểm định</span><span>Thống kê</span><span>Bậc tự do</span></div>
      <div><span>Một trung bình</span><span>t = (X̄ - μ0)/(s/√n)</span><span>n - 1</span></div>
      <div><span>Hai trung bình độc lập</span><span>t, phương sai gộp</span><span>n1 + n2 - 2</span></div>
      <div><span>Mẫu cặp</span><span>t = d̄/(sd/√n)</span><span>n - 1</span></div>
      <div><span>Một phương sai</span><span>χ² = (n - 1)s²/σ0²</span><span>n - 1</span></div>
      <div><span>Hai phương sai</span><span>F = s1²/s2²</span><span>n1 - 1, n2 - 1</span></div>
      <div><span>Tương quan</span><span>t = r√(n - 2)/√(1 - r²)</span><span>n - 2</span></div>
      <div><span>Tính độc lập</span><span>χ² = Σ(O - E)²/E</span><span>(r - 1)(c - 1)</span></div></div>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>Stratified: mọi nhóm · Cluster: vài cụm</span><span>SE = s/√n, không phải s/n</span>
      <span>Không biết σ → t, df = n - 1</span><span>Hai phía: α/2 mỗi đuôi (1,96 ở 5%)</span>
      <span>H0 chứa dấu =, không "chấp nhận" H0</span><span>Loại I = α · Power = 1 - β</span>
      <span>p &lt; α → bác bỏ</span><span>Tương quan df = n - 2 · χ² độc lập (r-1)(c-1)</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 10 câu, mục tiêu ≥ 7 câu đúng.</p>`),
  ];

  addDeck('QM-07', `Slide Estimation & Hypothesis Testing - bản thiết kế riêng (${slides.length} slide)`, slides);
}());
