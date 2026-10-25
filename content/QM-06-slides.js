// Bộ slide tự thiết kế cho QM-06 Statistical Distributions for Financial Asset Prices and Returns.
(function () {
  const { frac, slide } = window.CFAH;
  const K = 'QM-06 · Distributions';
  const S = (title, body, opt = {}) => slide(title, body, { kicker: K, ...opt });

  // Vẽ đường cong mật độ. f: hàm mật độ; [lo, hi]: miền x; pmax: trục tung; box: {l, r, t, b}
  function curve(f, lo, hi, pmax, box, cls = 'sv-curve', extra = '') {
    const xs = v => box.l + ((v - lo) / (hi - lo)) * (box.r - box.l);
    const ys = p => box.b - (Math.min(p, pmax) / pmax) * (box.b - box.t);
    let pts = '';
    for (let i = 0; i <= 200; i++) { const v = lo + ((hi - lo) * i) / 200; pts += `${xs(v).toFixed(1)},${ys(f(v)).toFixed(1)} `; }
    return { svg: `<polyline points="${pts}" class="${cls}" ${extra}/>`, xs, ys };
  }
  const nrm = x => Math.exp(-x * x / 2) / Math.sqrt(2 * Math.PI);

  // Cây xác suất EPS (ví dụ 4.1).
  const tree = `<svg viewBox="0 0 600 300" class="sv big" role="img" aria-label="Cây xác suất EPS">
    <line x1="70" y1="150" x2="230" y2="75" class="sv-axis"/><line x1="70" y1="150" x2="230" y2="225" class="sv-axis"/>
    <line x1="290" y1="75" x2="420" y2="35" class="sv-axis"/><line x1="290" y1="75" x2="420" y2="110" class="sv-axis"/>
    <line x1="290" y1="225" x2="420" y2="190" class="sv-axis"/><line x1="290" y1="225" x2="420" y2="265" class="sv-axis"/>
    <circle cx="55" cy="150" r="30" class="sv-node"/><text x="55" y="146" class="sv-txt">E =</text><text x="55" y="168" class="sv-txt sv-t-pv">1,912</text>
    <circle cx="260" cy="75" r="30" class="sv-node up"/><text x="260" y="70" class="sv-muted">Tốt</text><text x="260" y="90" class="sv-txt">2,28</text>
    <circle cx="260" cy="225" r="30" class="sv-node down"/><text x="260" y="220" class="sv-muted">Xấu</text><text x="260" y="240" class="sv-txt">1,36</text>
    <text x="140" y="100" class="sv-muted">0,6</text><text x="140" y="212" class="sv-muted">0,4</text>
    <text x="350" y="45" class="sv-muted">0,7</text><text x="350" y="112" class="sv-muted">0,3</text><text x="350" y="195" class="sv-muted">0,4</text><text x="350" y="262" class="sv-muted">0,6</text>
    <text x="430" y="40" class="sv-txt" text-anchor="start">2,40 (P = 0,42)</text><text x="430" y="115" class="sv-txt" text-anchor="start">2,00 (P = 0,18)</text>
    <text x="430" y="195" class="sv-txt" text-anchor="start">1,60 (P = 0,16)</text><text x="430" y="270" class="sv-txt" text-anchor="start">1,20 (P = 0,24)</text></svg>`;

  // Phân phối chuẩn với các dải 68/95/99.
  function normalBands() {
    const box = { l: 30, r: 570, t: 20, b: 210 };
    const c = curve(nrm, -3.6, 3.6, 0.42, box);
    let s = `<svg viewBox="0 0 600 290" class="sv big" role="img" aria-label="Phân phối chuẩn và các khoảng tin cậy">`;
    s += `<line x1="${box.l}" y1="${box.b}" x2="${box.r}" y2="${box.b}" class="sv-axis"/>`;
    [[1, '68%', 235], [1.96, '95%', 258], [2.58, '99%', 281]].forEach(([z, lab, y]) => {
      s += `<line x1="${c.xs(-z)}" y1="${y - 5}" x2="${c.xs(z)}" y2="${y - 5}" class="sv-dash"/>`;
      s += `<line x1="${c.xs(-z)}" y1="${c.ys(nrm(z))}" x2="${c.xs(-z)}" y2="${box.b}" class="sv-grid"/><line x1="${c.xs(z)}" y1="${c.ys(nrm(z))}" x2="${c.xs(z)}" y2="${box.b}" class="sv-grid"/>`;
      s += `<text x="${c.xs(-z) - 8}" y="${y}" class="sv-muted" text-anchor="end">±${String(z).replace('.', ',')}σ: ${lab}</text>`;
    });
    s += c.svg + `<text x="${c.xs(0)}" y="${c.ys(0.4) - 6}" class="sv-txt">μ</text>`;
    return `${s}</svg>`;
  }

  // Xác suất lỗ: vùng bên trái 0 khi μ = 8%, σ = 15%.
  function lossArea() {
    const f = x => nrm((x - 8) / 15) / 15;
    const box = { l: 30, r: 570, t: 20, b: 200 };
    const c = curve(f, -40, 56, 0.028, box);
    let area = `${c.xs(-40)},${box.b} `;
    for (let v = -40; v <= 0.001; v += 0.5) area += `${c.xs(v).toFixed(1)},${c.ys(f(v)).toFixed(1)} `;
    area += `${c.xs(0)},${box.b}`;
    let s = `<svg viewBox="0 0 600 240" class="sv big" role="img" aria-label="Xác suất lợi suất âm">`;
    s += `<polygon points="${area}" class="sv-dot" style="opacity:0.35"/>`;
    s += `<line x1="${box.l}" y1="${box.b}" x2="${box.r}" y2="${box.b}" class="sv-axis"/>` + c.svg;
    [-30, -15, 0, 8, 23, 38, 53].forEach(v => { s += `<text x="${c.xs(v)}" y="${box.b + 24}" class="sv-muted">${v}%</text>`; });
    s += `<line x1="${c.xs(8)}" y1="${c.ys(f(8))}" x2="${c.xs(8)}" y2="${box.b}" class="sv-dash"/>`;
    s += `<text x="${c.xs(-14)}" y="${c.ys(f(-14)) - 30}" class="sv-txt sv-t-down">P(R &lt; 0) ≈ 29,7%</text>`;
    return `${s}</svg>`;
  }

  // Lognormal (μ = 0, σ = 0,5) so với normal.
  function lognormalCurve() {
    const sg = 0.5, ln = x => (x <= 0 ? 0 : Math.exp(-(Math.log(x) ** 2) / (2 * sg * sg)) / (x * sg * Math.sqrt(2 * Math.PI)));
    const box = { l: 40, r: 560, t: 20, b: 210 };
    const c = curve(ln, 0.001, 3.5, 0.95, box);
    const med = 1, mean = Math.exp(sg * sg / 2);
    let s = `<svg viewBox="0 0 600 260" class="sv big" role="img" aria-label="Phân phối lognormal">`;
    s += `<line x1="${box.l}" y1="${box.b}" x2="${box.r}" y2="${box.b}" class="sv-axis"/><line x1="${box.l}" y1="${box.t}" x2="${box.l}" y2="${box.b}" class="sv-axis"/>` + c.svg;
    s += `<line x1="${c.xs(med)}" y1="${c.ys(ln(med))}" x2="${c.xs(med)}" y2="${box.b}" class="sv-dash"/><text x="${c.xs(med) - 6}" y="${box.b + 24}" class="sv-muted" text-anchor="end">Median</text>`;
    s += `<line x1="${c.xs(mean)}" y1="${c.ys(ln(mean))}" x2="${c.xs(mean)}" y2="${box.b}" class="sv-down"/><text x="${c.xs(mean) + 6}" y="${box.b + 24}" class="sv-txt sv-t-down" text-anchor="start">Mean</text>`;
    s += `<text x="${box.l + 6}" y="${box.b - 8}" class="sv-txt sv-t-up" text-anchor="start">0</text><text x="${c.xs(2.5)}" y="${c.ys(ln(2.5)) - 18}" class="sv-muted">đuôi phải dài</text>`;
    s += `<text x="300" y="252" class="sv-muted">Giá = P₀ × e<tspan baseline-shift="super" font-size="11">r</tspan>: không bao giờ âm</text>`;
    return `${s}</svg>`;
  }

  // t (df = 3) so với normal; chi-square với k = 2, 4, 8.
  function tAndChi() {
    const t3 = x => (6 * Math.sqrt(3)) / (Math.PI * (3 + x * x) ** 2);
    const chi = k => x => (x <= 0 ? 0 : k === 2 ? Math.exp(-x / 2) / 2 : k === 4 ? (x * Math.exp(-x / 2)) / 4 : (x ** 3 * Math.exp(-x / 2)) / 96);
    const b1 = { l: 15, r: 285, t: 30, b: 190 }, b2 = { l: 315, r: 585, t: 30, b: 190 };
    const n = curve(nrm, -4, 4, 0.42, b1, 'sv-dash', 'fill="none"'), tt = curve(t3, -4, 4, 0.42, b1);
    let s = `<svg viewBox="0 0 600 240" class="sv" role="img" aria-label="Phân phối t và chi-square">`;
    s += `<line x1="${b1.l}" y1="${b1.b}" x2="${b1.r}" y2="${b1.b}" class="sv-axis"/>${n.svg}${tt.svg}`;
    s += `<text x="150" y="18" class="sv-txt">t (df = 3) so với normal</text><text x="${tt.xs(-3.1)}" y="${tt.ys(t3(3.1)) - 14}" class="sv-txt sv-t-down">đuôi dày</text>`;
    s += `<line x1="${b2.l}" y1="${b2.b}" x2="${b2.r}" y2="${b2.b}" class="sv-axis"/>`;
    [[2, 'sv-down'], [4, 'sv-pv'], [8, 'sv-up']].forEach(([k, cls]) => { s += curve(chi(k), 0.05, 20, 0.5, b2, cls, 'fill="none"').svg; });
    const c2 = curve(chi(4), 0.05, 20, 0.5, b2);
    s += `<text x="450" y="18" class="sv-txt">Chi-square: không âm, lệch phải</text>`;
    s += `<text x="${c2.xs(1)}" y="${c2.ys(0.3)}" class="sv-txt sv-t-down" text-anchor="start">k = 2</text><text x="${c2.xs(4.5)}" y="${c2.ys(0.2)}" class="sv-txt sv-t-pv" text-anchor="start">k = 4</text><text x="${c2.xs(11)}" y="${c2.ys(0.1)}" class="sv-txt sv-t-up" text-anchor="start">k = 8</text>`;
    s += `<text x="150" y="222" class="sv-muted">df tăng → tiến về normal</text><text x="450" y="222" class="sv-muted">mean = k, variance = 2k</text>`;
    return `${s}</svg>`;
  }

  // 1.000 nhà quản lý quỹ theo tần suất tự nhiên.
  function managers() {
    const W = 520, x0 = 60, k = W / 1000;
    let s = `<svg viewBox="0 0 600 210" class="sv big" role="img" aria-label="1000 nhà quản lý quỹ">`;
    s += `<rect x="${x0}" y="30" width="${200 * k}" height="50" class="sv-node up"/><rect x="${x0 + 200 * k}" y="30" width="${800 * k}" height="50" class="sv-node"/>`;
    s += `<text x="${x0 + 100 * k}" y="62" class="sv-txt">200 có tài</text><text x="${x0 + 600 * k}" y="62" class="sv-txt">800 không có tài</text>`;
    s += `<rect x="${x0}" y="120" width="${140 * k}" height="50" class="sv-dot"/><rect x="${x0 + 140 * k}" y="120" width="${360 * k}" height="50" class="sv-dot" style="opacity:0.45"/>`;
    s += `<text x="${x0 + 70 * k}" y="152" class="sv-txt">140</text><text x="${x0 + 320 * k}" y="152" class="sv-txt">360 (may mắn)</text>`;
    s += `<text x="${x0 + 250 * k}" y="196" class="sv-muted">500 người vượt chỉ số</text><text x="${x0 + 760 * k}" y="152" class="sv-muted">500 không vượt</text>`;
    s += `<text x="${x0 - 8}" y="62" class="sv-muted" text-anchor="end">Prior</text><text x="${x0 - 8}" y="152" class="sv-muted" text-anchor="end">Vượt</text>`;
    return `${s}</svg>`;
  }

  const slides = [
    S('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Quantitative Methods · QM-06</div>
      <h2>Statistical Distributions<br>for Asset Prices and Returns</h2>
      <p>Kỳ vọng, phân phối và cập nhật niềm tin</p>
      <div class="sd-chips"><span>LOS 1 · Kỳ vọng không điều kiện</span><span>LOS 2 · Các phân phối chính</span><span>LOS 3 · Kỳ vọng có điều kiện</span><span>LOS 4 · Bayes</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Từ quá khứ sang tương lai', `<div class="sd-cols2">
      <div class="sd-card"><b>QM-05: dữ liệu lịch sử</b><p>Mỗi quan sát có trọng số như nhau</p><div class="sd-f sm">X̄ = ΣX / n · s² = Σ(X - X̄)² / (n - 1)</div></div>
      <div class="sd-card acc"><b>QM-06: kịch bản tương lai</b><p>Mỗi kịch bản có một xác suất</p><div class="sd-f sm">E(X) = ΣP·X · σ² = ΣP·(X - E)²</div></div></div>
      <p class="sd-note">Có xác suất thì <b>gia quyền theo xác suất</b>, không chia n hay n - 1.</p>`),

    S('Kỳ vọng và độ lệch chuẩn từ bảng kịch bản', `<div class="sd-cols2">
      <div class="sd-tbl"><div><span><b>Kịch bản</b></span><span><b>P · R<sub>A</sub></b></span></div><div><span>Tăng trưởng</span><span>0,25 · 20%</span></div><div><span>Bình thường</span><span>0,50 · 10%</span></div><div><span>Suy thoái</span><span>0,25 · -8%</span></div></div>
      <div class="sd-steps"><span>E = 5 + 5 - 2 = <b>8%</b></span><span>σ² = 0,25 × 12² + 0,5 × 2² + 0,25 × 16² = <b>102</b></span><span>σ = √102 = <b>10,10%</b></span></div></div>
      <p class="sd-note">Bẫy: trung bình cộng (20 + 10 - 8)/3 = 7,33% bỏ qua xác suất.</p>`),

    S('BA II Plus: xác suất làm tần suất', `<div class="sd-keys"><span><kbd>2ND</kbd> <kbd>7</kbd> <kbd>2ND</kbd> <kbd>CE/C</kbd></span><span>X01 = 20 · Y01 = 25</span><span>X02 = 10 · Y02 = 50</span><span>X03 = -8 · Y03 = 25</span></div>
      <div class="sd-keys"><span><kbd>2ND</kbd> <kbd>8</kbd> → 1-V</span><span>n = 100</span><span>x̄ = 8.0000</span><span><b>σx = 10.0995</b></span></div>
      <div class="sd-cols2"><div class="sd-rule up">Đọc <b>σx</b> (chia cho tổng tần suất)</div><div class="sd-rule down">Sx = 10,15 <b>sai</b></div></div>`),

    S('Covariance từ bảng kịch bản', `<div class="sd-f">Cov = Σ P × (R<sub>A</sub> - E<sub>A</sub>)(R<sub>B</sub> - E<sub>B</sub>)</div>
      <div class="sd-cols2"><div class="sd-tbl"><div><span>0,25 × 12 × (-3,25)</span><span>-9,75</span></div><div><span>0,50 × 2 × 0,75</span><span>0,75</span></div><div><span>0,25 × (-16) × 1,75</span><span>-7,00</span></div><div><span><b>Cov</b></span><span><b>-16,00</b></span></div></div>
      <div><p>Cổ phiếu A: 20, 10, -8 · Trái phiếu B: 2, 6, 7</p><div class="sd-f sm">ρ = ${frac('-16', '10,10 × 1,92')} = <b>-0,82</b></div><p class="sd-note">B tốt khi A xấu → đa dạng hóa hiệu quả.</p></div></div>`),

    S('Ba quy tắc xác suất cần thuộc', `<div class="sd-cols3">
      <div class="sd-card"><div class="sd-n">1</div><b>Có điều kiện</b><div class="sd-f sm">P(A|B) = ${frac('P(AB)', 'P(B)')}</div></div>
      <div class="sd-card"><div class="sd-n">2</div><b>Nhân</b><div class="sd-f sm">P(AB) = P(A|B) × P(B)</div></div>
      <div class="sd-card acc"><div class="sd-n">3</div><b>Toàn phần</b><div class="sd-f sm">P(A) = Σ P(A|S<sub>i</sub>) P(S<sub>i</sub>)</div></div></div>
      <div class="sd-f">E(X) = Σ E(X | S<sub>i</sub>) × P(S<sub>i</sub>)</div>
      <p class="sd-note">Các kịch bản S<sub>i</sub> phải <b>loại trừ nhau</b> và <b>đầy đủ</b> (tổng xác suất = 1).</p>`),

    S('Cây xác suất: EPS kỳ vọng', `${tree}
      <p class="sd-note">Xác suất nhánh cuối = <b>tích</b> các xác suất trên đường đi. E(EPS) = 0,6 × 2,28 + 0,4 × 1,36 = <b>1,912</b>.</p>`),

    S('Phương sai có điều kiện và giá trị của thông tin', `<div class="sd-cols2">
      <div><div class="sd-tbl"><div><span>σ²(EPS | tốt)</span><span>0,0336</span></div><div><span>σ²(EPS | xấu)</span><span>0,0384</span></div><div><span>σ²(EPS) không điều kiện</span><span>0,2387</span></div></div>
      <div class="sd-f sm">σ² = E[σ²(X|S)] + σ²[E(X|S)]</div></div>
      <div><p class="sd-cap">Phân rã 0,2387:</p><div class="sd-bars">
      <div class="sd-bar"><span class="sd-bar-l">Trong kịch bản</span><span class="sd-bar-t"><i style="width:${(0.0355 / 0.2387) * 100}%"></i></span><b>0,0355</b></div>
      <div class="sd-bar"><span class="sd-bar-l">Giữa kịch bản</span><span class="sd-bar-t"><i style="width:${(0.2031 / 0.2387) * 100}%"></i></span><b>0,2031</b></div></div>
      <p class="sd-note">Biết nền kinh tế tốt hay xấu thì phần lớn rủi ro biến mất.</p></div></div>`),

    S('Phân phối chuẩn: hai tham số μ và σ', `<div class="sd-cols2 wide-left"><div>${normalBands()}</div>
      <div><div class="sd-rule">Đối xứng <b>skew = 0</b></div><div class="sd-rule">Đuôi chuẩn <b>kurtosis = 3</b></div><div class="sd-rule">Mean = median = mode</div><div class="sd-rule up">90% <b>±1,65σ</b></div></div></div>`),

    S('Chuẩn hóa z: xác suất lỗ', `${lossArea()}
      <div class="sd-cols2"><div class="sd-f sm">z = ${frac('X - μ', 'σ')} = ${frac('0 - 8', '15')} = -0,53</div><div class="sd-f sm">Khoảng 95%: 8 ± 1,96 × 15 → <b>-21,4% đến 37,4%</b></div></div>`),

    S('Lognormal: phân phối của giá', `<div class="sd-cols2 wide-left"><div>${lognormalCurve()}</div>
      <div><div class="sd-rule up">Bị chặn dưới bởi <b>0</b></div><div class="sd-rule">Lệch phải: <b>mean &gt; median</b></div>
      <div class="sd-f sm">E(X) = e<sup>μ + σ²/2</sup></div>
      <p class="sd-note">Lợi suất liên tục r ~ normal ⇔ giá ~ lognormal. P₀ = 100, μ = 8%, σ = 20% → E(P₁) = <b>110,52</b>, median <b>108,33</b>.</p></div></div>`),

    S('Bảng moments cần nhớ', `<div class="sd-tbl grid"><div class="head"><span>Phân phối</span><span>Mean</span><span>Variance</span></div>
      <div><span><b>Binomial (n, p)</b></span><span>np</span><span>np(1 - p)</span></div>
      <div><span><b>Uniform [a; b]</b></span><span>(a + b)/2</span><span>(b - a)²/12</span></div>
      <div><span><b>Student t (df)</b></span><span>0</span><span>df/(df - 2)</span></div>
      <div><span><b>Chi-square (k)</b></span><span>k</span><span>2k</span></div>
      <div><span><b>F (df₁, df₂)</b></span><span>df₂/(df₂ - 2)</span><span>-</span></div></div>
      <p class="sd-note">Ví dụ: 10 lệnh, xác suất thắng 60% → mean <b>6</b>, var <b>2,4</b>, P(đúng 8 lệnh thắng) = <b>12,09%</b>.</p>`),

    S('Student t và chi-square', `${tAndChi()}
      <div class="sd-cols3"><div class="sd-card"><b>t</b><p>Đối xứng, đuôi dày. df = 10 → var 1,25</p></div><div class="sd-card"><b>Chi-square</b><p>Kiểm định một phương sai</p></div><div class="sd-card acc"><b>F</b><p>Tỷ số hai phương sai; không âm, lệch phải</p></div></div>`),

    S('Công thức Bayes', `<div class="sd-big">P(E | I) = ${frac('P(I | E) × P(E)', 'P(I)')}</div>
      <div class="sd-cols3"><div class="sd-card"><b>Prior P(E)</b><p>Niềm tin ban đầu</p></div><div class="sd-card"><b>Likelihood P(I | E)</b><p>Khả năng thấy thông tin nếu E đúng</p></div><div class="sd-card acc"><b>Posterior P(E | I)</b><p>Niềm tin sau khi cập nhật</p></div></div>
      <p class="sd-note">Mẫu số P(I) = P(I | E)P(E) + P(I | không E)P(không E): <b>xác suất toàn phần</b>.</p>`),

    S('Nghĩ bằng 1.000 người', `${managers()}
      <div class="sd-cols2"><div class="sd-f sm">P(có tài | vượt) = ${frac('140', '140 + 360')} = <b>28%</b></div><div class="sd-rule down">Không phải 70% = P(vượt | có tài)</div></div>`),

    S('Cập nhật Bayes là một vòng lặp', `<div class="sd-steps">
      <span>Prior <b>20%</b> → vượt chỉ số năm 1 → posterior <b>28%</b></span>
      <span>Prior <b>28%</b> → vượt chỉ số năm 2 → posterior <b>37,69%</b></span>
      <span>Nếu năm 1 không vượt: 20% → <b>12%</b></span></div>
      <div class="sd-card acc"><b>Cảnh báo tín dụng</b><p>Prior vỡ nợ 5% · cảnh báo bắt 85% ca vỡ nợ, báo nhầm 15% → P(vỡ nợ | cảnh báo) = 0,0425 / 0,185 = <b>22,97%</b></p></div>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>E = ΣP·X; σ² = ΣP·(X - E)²</span><span>Máy: Y = xác suất × 100, đọc σx</span>
      <span>Nhánh cuối = tích xác suất trên đường</span><span>E(X) = Σ E(X|S) P(S)</span>
      <span>Normal: 1,65σ / 1,96σ / 2,58σ</span><span>Lognormal: không âm, lệch phải, cho giá</span>
      <span>t đuôi dày; chi-square, F không âm</span><span>Bayes: P(E|I) ≠ P(I|E)</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 10 câu, mục tiêu ≥ 7 câu đúng.</p>`),
  ];

  window.CFAH.addDeck('QM-06', `Slide Distributions - bản thiết kế riêng (${slides.length} slide)`, slides);
}());
