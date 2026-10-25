// Bộ slide tự thiết kế cho PC-01 Portfolio Risk and Return: Part I.
(function () {
  const { frac, slide, addDeck } = window.CFAH;
  if (!window.LESSONS['PC-01']) return;
  const K = { kicker: 'PC-01 · Portfolio Risk & Return I' };
  const S = (title, body) => slide(title, body, K);
  const fmt = (x, d = 2) => x.toFixed(d).replace('.', ',');
  const poly = (pts, cls) => `<polyline points="${pts.map(p => `${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ')}" class="${cls}" fill="none"/>`;

  // Khung trục rủi ro - lợi suất dùng chung.
  function axes(o) {
    const { W = 600, H = 300, l = 60, r = 580, t = 20, b = 250, sMax = 0.22, eMin = 0.02, eMax = 0.12, eTicks = [0.04, 0.08, 0.12], sTicks = [0, 0.05, 0.10, 0.15, 0.20], xLab = 'Độ lệch chuẩn σ' } = o;
    const xs = s => l + (s / sMax) * (r - l);
    const ys = e => b - ((e - eMin) / (eMax - eMin)) * (b - t);
    let s = `<line x1="${l}" y1="${b}" x2="${r}" y2="${b}" class="sv-axis"/><line x1="${l}" y1="${t}" x2="${l}" y2="${b}" class="sv-axis"/>`;
    eTicks.forEach(e => { s += `<line x1="${l}" y1="${ys(e)}" x2="${r}" y2="${ys(e)}" class="sv-grid"/><text x="${l - 8}" y="${ys(e) + 5}" class="sv-muted" text-anchor="end">${Math.round(e * 100)}%</text>`; });
    sTicks.forEach(x => { s += `<text x="${xs(x)}" y="${b + 22}" class="sv-muted">${Math.round(x * 100)}%</text>`; });
    s += `<text x="${(l + r) / 2}" y="${H - 4}" class="sv-muted">${xLab}</text>`;
    return { xs, ys, s, W, H };
  }

  // Các lớp tài sản trên mặt phẳng rủi ro - lợi suất (số làm tròn, minh họa).
  function assetMap() {
    const A = axes({ sMax: 0.34, eMin: 0, eMax: 0.14, eTicks: [0.04, 0.08, 0.12], sTicks: [0, 0.10, 0.20, 0.30] });
    const pts = [['T-bills', 0.03, 0.03], ['Trái phiếu dài hạn', 0.09, 0.055], ['Large-cap', 0.20, 0.10], ['Small-cap', 0.30, 0.12]];
    let s = `<svg viewBox="0 0 ${A.W} ${A.H}" class="sv" role="img" aria-label="Các lớp tài sản theo rủi ro và lợi suất">${A.s}`;
    s += poly(pts.map(p => [A.xs(p[1]), A.ys(p[2])]), 'sv-dash');
    pts.forEach(([lab, sd, e], i) => {
      s += `<circle cx="${A.xs(sd)}" cy="${A.ys(e)}" r="7" class="sv-node ${i > 1 ? 'up' : ''}"/>`;
      s += `<text x="${A.xs(sd) + (i === 3 ? -12 : 12)}" y="${A.ys(e) - 12}" class="sv-txt" text-anchor="${i === 3 ? 'end' : 'start'}">${lab}</text>`;
    });
    s += `<line x1="${A.xs(0)}" y1="${A.ys(0.03)}" x2="${A.xs(0.34)}" y2="${A.ys(0.03)}" class="sv-pv"/><text x="${A.xs(0.33)}" y="${A.ys(0.03) + 20}" class="sv-txt sv-t-pv" text-anchor="end">lạm phát ≈ 3%</text>`;
    return `${s}</svg>`;
  }

  // Ba dạng đường bàng quan.
  function icurve(kind) {
    const W = 200, H = 170, l = 20, r = 190, t = 12, b = 140;
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv" role="img" aria-label="Đường bàng quan ${kind}"><line x1="${l}" y1="${b}" x2="${r}" y2="${b}" class="sv-axis"/><line x1="${l}" y1="${t}" x2="${l}" y2="${b}" class="sv-axis"/>`;
    [0, 1].forEach(k => {
      const pts = [];
      for (let i = 0; i <= 40; i++) {
        const x = i / 40, base = 0.25 + k * 0.3;
        const y = kind === 'averse' ? base + 0.55 * x * x : kind === 'neutral' ? base : base + 0.25 - 0.35 * x * x;
        pts.push([l + x * (r - l - 10), b - y * (b - t)]);
      }
      s += poly(pts, k ? 'sv-up' : 'sv-curve');
    });
    s += `<text x="${l + 4}" y="${t + 4}" class="sv-muted" text-anchor="start" style="font-size:13px">E(R)</text><text x="${r}" y="${H - 8}" class="sv-muted" text-anchor="end" style="font-size:13px">σ</text></svg>`;
    return s;
  }

  // CAL của ví dụ 4.1 với hai đường bàng quan (Lan A = 2, Minh A = 5).
  function calTwo() {
    const A = axes({ sMax: 0.26, eMin: 0.02, eMax: 0.14, eTicks: [0.04, 0.08, 0.12], sTicks: [0, 0.05, 0.10, 0.15, 0.20, 0.25] });
    const rf = 0.04, sl = 0.35;
    let s = `<svg viewBox="0 0 ${A.W} ${A.H}" class="sv" role="img" aria-label="CAL và hai đường bàng quan">${A.s}`;
    s += `<line x1="${A.xs(0)}" y1="${A.ys(rf)}" x2="${A.xs(0.26)}" y2="${A.ys(rf + sl * 0.26)}" class="sv-pv"/>`;
    s += `<text x="${A.xs(0.25)}" y="${A.ys(rf + sl * 0.25) + 22}" class="sv-txt sv-t-pv" text-anchor="end">CAL</text>`;
    [[2, 'sv-up', 'Lan A = 2', 'up'], [5, 'sv-down', 'Minh A = 5', 'down']].forEach(([a, cls, lab, tc]) => {
      const y = (0.11 - rf) / (a * 0.04), sc = y * 0.2, ec = rf + y * 0.07, U = ec - 0.5 * a * sc * sc, pts = [];
      for (let x = 0; x <= 0.26; x += 0.005) { const e = U + 0.5 * a * x * x; if (e <= 0.14) pts.push([A.xs(x), A.ys(e)]); }
      s += poly(pts, cls);
      s += `<circle cx="${A.xs(sc)}" cy="${A.ys(ec)}" r="7" class="sv-node ${tc}"/><text x="${A.xs(sc) + 12}" y="${A.ys(ec) + 22}" class="sv-txt sv-t-${tc}" text-anchor="start">${lab}</text>`;
    });
    s += `<circle cx="${A.xs(0.2)}" cy="${A.ys(0.11)}" r="6" class="sv-dot"/><text x="${A.xs(0.2) + 10}" y="${A.ys(0.11) - 10}" class="sv-txt" text-anchor="end">P</text>`;
    s += `<circle cx="${A.xs(0)}" cy="${A.ys(rf)}" r="6" class="sv-dot"/><text x="${A.xs(0) + 10}" y="${A.ys(rf) + 20}" class="sv-muted" text-anchor="start">Rf = 4%</text>`;
    return `${s}</svg>`;
  }

  // Hai quỹ từ dữ liệu lịch sử: cổ phiếu (E 10%, s 12,55%), trái phiếu (E 5%, s 6%), Cov 0,00155.
  const vA = 0.01575, vB = 0.0036, cAB = 0.00155, EA = 0.10, EB = 0.05;
  const port = (w, c = cAB) => ({ E: w * EA + (1 - w) * EB, s: Math.sqrt(Math.max(w * w * vA + (1 - w) * (1 - w) * vB + 2 * w * (1 - w) * c, 0)) });

  function rhoBars() {
    const sa = Math.sqrt(vA), sb = Math.sqrt(vB);
    const rows = [[1, '+1'], [cAB / (sa * sb), '+0,21'], [0, '0'], [-0.5, '-0,5'], [-1, '-1']];
    return `<div class="sd-bars">${rows.map(([rho, lab]) => {
      const v = port(0.6, rho * sa * sb).s * 100;
      return `<div class="sd-bar"><span class="sd-bar-l">ρ = ${lab}</span><span class="sd-bar-t"><i style="width:${(v / 10.5) * 100}%"></i></span><b>${fmt(v)}%</b></div>`;
    }).join('')}</div>`;
  }

  function frontier() {
    const A = axes({ sMax: 0.16, eMin: 0.03, eMax: 0.12, eTicks: [0.04, 0.06, 0.08, 0.10], sTicks: [0, 0.04, 0.08, 0.12, 0.16] });
    const wm = (vB - cAB) / (vA + vB - 2 * cAB);
    const up = [], dn = [];
    for (let w = -0.35; w <= 1.15001; w += 0.01) { const p = port(w); if (p.s <= 0.155) (w >= wm ? up : dn).push([A.xs(p.s), A.ys(p.E)]); }
    let s = `<svg viewBox="0 0 ${A.W} ${A.H}" class="sv" role="img" aria-label="Đường biên của hai quỹ">${A.s}`;
    s += poly(dn, 'sv-dash') + poly(up, 'sv-curve');
    const m = port(wm), p6 = port(0.6);
    s += `<circle cx="${A.xs(m.s)}" cy="${A.ys(m.E)}" r="7" class="sv-node down"/><text x="${A.xs(m.s) - 12}" y="${A.ys(m.E) + 5}" class="sv-txt sv-t-down" text-anchor="end">GMV</text>`;
    s += `<circle cx="${A.xs(Math.sqrt(vB))}" cy="${A.ys(EB)}" r="6" class="sv-dot"/><text x="${A.xs(Math.sqrt(vB)) + 12}" y="${A.ys(EB) + 18}" class="sv-muted" text-anchor="start">100% trái phiếu</text>`;
    s += `<circle cx="${A.xs(Math.sqrt(vA))}" cy="${A.ys(EA)}" r="6" class="sv-dot"/><text x="${A.xs(Math.sqrt(vA)) + 8}" y="${A.ys(EA) + 22}" class="sv-muted" text-anchor="start">100% cổ phiếu</text>`;
    s += `<circle cx="${A.xs(p6.s)}" cy="${A.ys(p6.E)}" r="6" class="sv-node up"/><text x="${A.xs(p6.s) - 12}" y="${A.ys(p6.E) - 8}" class="sv-txt sv-t-up" text-anchor="end">60/40</text>`;
    s += `<text x="${A.xs(0.135)}" y="${A.ys(0.115)}" class="sv-txt sv-t-up">hiệu quả</text><text x="${A.xs(0.072)}" y="${A.ys(0.036)}" class="sv-muted" text-anchor="start">← không hiệu quả</text>`;
    return `${s}</svg>`;
  }

  // σ danh mục tỷ trọng đều theo N (σ = 30%).
  function nCurve() {
    const W = 600, H = 300, l = 60, r = 580, t = 20, b = 250;
    const xs = n => l + ((n - 1) / 49) * (r - l), ys = v => b - (v / 0.32) * (b - t);
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv" role="img" aria-label="Rủi ro danh mục giảm khi số tài sản tăng"><line x1="${l}" y1="${b}" x2="${r}" y2="${b}" class="sv-axis"/><line x1="${l}" y1="${t}" x2="${l}" y2="${b}" class="sv-axis"/>`;
    [0.1, 0.2, 0.3].forEach(v => { s += `<line x1="${l}" y1="${ys(v)}" x2="${r}" y2="${ys(v)}" class="sv-grid"/><text x="${l - 8}" y="${ys(v) + 5}" class="sv-muted" text-anchor="end">${Math.round(v * 100)}%</text>`; });
    [1, 10, 20, 30, 40, 50].forEach(n => { s += `<text x="${xs(n)}" y="${b + 22}" class="sv-muted">${n}</text>`; });
    [[0.3, 'sv-curve', 'ρ = 0,3'], [0, 'sv-up', 'ρ = 0']].forEach(([rho, cls, lab]) => {
      const pts = [];
      for (let n = 1; n <= 50; n++) pts.push([xs(n), ys(Math.sqrt(0.09 / n + ((n - 1) / n) * rho * 0.09))]);
      s += poly(pts, cls);
      s += `<text x="${xs(50)}" y="${ys(Math.sqrt(0.09 / 50 + (49 / 50) * rho * 0.09)) - 10}" class="sv-txt" text-anchor="end">${lab}</text>`;
    });
    const lim = Math.sqrt(0.027);
    s += `<line x1="${l}" y1="${ys(lim)}" x2="${r}" y2="${ys(lim)}" class="sv-dash"/><text x="${xs(28)}" y="${ys(lim) + 22}" class="sv-txt sv-t-down">giới hạn 16,43% = √(ρσ²)</text>`;
    s += `<text x="${(l + r) / 2}" y="${H - 4}" class="sv-muted">Số tài sản N (tỷ trọng đều, σ mỗi tài sản 30%)</text></svg>`;
    return s;
  }

  const slides = [
    slide('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Portfolio Construction · PC-01</div>
      <h2>Portfolio Risk and Return<br>Part I</h2>
      <p>Lớp tài sản - khẩu vị rủi ro - đa dạng hóa - đường biên hiệu quả</p>
      <div class="sd-chips"><span>LOS 1 · Lớp tài sản</span><span>LOS 2-3 · Ngại rủi ro, danh mục tối ưu</span><span>LOS 4-5 · Thống kê lịch sử, σ danh mục</span><span>LOS 6-7 · Đa dạng hóa, đường biên</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Bốn bước của buổi học', `<div class="sd-grid4">
      <div class="sd-card"><div class="sd-n">1</div><b>Nguyên liệu</b><p>Lớp tài sản: lợi suất, rủi ro, thanh khoản.</p></div>
      <div class="sd-card"><div class="sd-n">2</div><b>Khẩu vị</b><p>Ngại rủi ro, hữu dụng, chọn điểm trên CAL.</p></div>
      <div class="sd-card"><div class="sd-n">3</div><b>Đo lường</b><p>R̄, s, Cov, ρ từ dữ liệu lịch sử → σ<sub>P</sub>.</p></div>
      <div class="sd-card acc"><div class="sd-n">4</div><b>Đa dạng hóa</b><p>ρ thấp, N lớn, GMV, đường biên hiệu quả.</p></div></div>
      <p class="sd-note">Công thức gốc đã học ở <b>QM-08</b>. Hôm nay: ứng dụng cho danh mục thật và phần mới.</p>`),

    S('Lớp tài sản: lợi suất cao đi kèm rủi ro cao', `<div class="sd-cols2 wide-left"><div>${assetMap()}</div>
      <div><p>Số liệu dài hạn của Mỹ, làm tròn: chỉ cần nhớ <b>thứ tự</b>.</p><div class="sd-steps"><span>Small-cap ≈ 12%, σ ≈ 30%</span><span>Large-cap ≈ 10%, σ ≈ 20%</span><span>Trái phiếu dài hạn ≈ 5-6%, σ ≈ 8-10%</span><span>T-bills ≈ 3%, σ ≈ 3%</span></div>
      <p class="sd-note">Phần cao hơn T-bills = <b>phần bù rủi ro</b>.</p></div></div>`),

    S('Nhìn xa hơn E(R) và σ', `<div class="sd-cols3">
      <div class="sd-card"><b>Lợi suất thực</b><div class="sd-f sm">${frac('1 + r<sub>dn</sub>', '1 + π')} - 1</div><p>1,10/1,03 - 1 = <b>6,80%</b></p><small>T-bills: thực ≈ 0</small></div>
      <div class="sd-card"><b>Trung bình nhân</b><div class="sd-f sm">G ≈ A - σ<sup>2</sup>/2</div><p>12% - 0,04/2 = <b>10%</b></p><small>σ càng lớn càng "mất" lợi suất</small></div>
      <div class="sd-card acc"><b>Phân phối và thanh khoản</b><p>Cổ phiếu: <b>lệch âm, đuôi dày</b>.</p><p>Small-cap, BĐS, quỹ tư nhân: kém thanh khoản, σ bị làm mượt.</p></div></div>`),

    S('Ba thái độ với rủi ro', `<div class="sd-cols2"><div>
      <div class="sd-tbl grid"><div class="head"><span></span><span>Kịch bản 50/50</span><span>E</span><span>σ</span></div><div><span>Việc 1</span><span>25 hoặc 15</span><span>20</span><span>5</span></div><div><span>Việc 2</span><span>40 hoặc 0</span><span>20</span><span>20</span></div></div>
      <p class="sd-note">Đơn vị: triệu đồng/tháng. Cùng kỳ vọng, khác rủi ro.</p></div>
      <div><div class="sd-rule up">Ngại rủi ro (A &gt; 0), từ chối fair gamble → <b>Việc 1</b></div><div class="sd-rule">Trung lập (A = 0) → <b>bàng quan</b></div><div class="sd-rule down">Ưa rủi ro (A &lt; 0) → <b>Việc 2</b></div>
      <p class="sd-note">Ngại rủi ro ≠ tránh mọi rủi ro: vẫn đầu tư nếu được <b>bù đủ</b>.</p></div></div>`),

    S('Cùng một cơ hội, bốn quyết định', `<div class="sd-f">U = E(R) - ½ × A × σ<sup>2</sup> &nbsp; · &nbsp; E = 10%, σ = 15% &nbsp; so với &nbsp; R<sub>f</sub> = 7%</div>
      <div class="sd-tbl grid"><div class="head"><span>A</span><span>U khoản rủi ro</span><span>Quyết định</span></div>
      <div><span>4</span><span>5,50%</span><span>Gửi phi rủi ro</span></div><div><span>2</span><span>7,75%</span><span>Đầu tư</span></div><div><span>0</span><span>10,00%</span><span>Đầu tư</span></div><div><span>-2</span><span>12,25%</span><span>Đầu tư</span></div></div>
      <p class="sd-note">U = lợi suất tương đương chắc chắn. Chỉ so U của <b>cùng một người</b>.</p>`),

    S('Đường bàng quan theo thái độ', `<div class="sd-cols3">
      <div class="sd-card"><b>Ngại rủi ro</b>${icurve('averse')}<small>Dốc lên, lồi; A lớn → dốc hơn</small></div>
      <div class="sd-card"><b>Trung lập</b>${icurve('neutral')}<small>Nằm ngang: chỉ nhìn E(R)</small></div>
      <div class="sd-card"><b>Ưa rủi ro</b>${icurve('seeking')}<small>Dốc xuống: rủi ro làm tăng U</small></div></div>
      <p class="sd-note">Đường xanh lá (nằm cao hơn) → U lớn hơn. Hai đường của cùng một người không cắt nhau.</p>`),

    S('Danh mục tối ưu: tiếp xúc với CAL', `<div class="sd-cols2 wide-left"><div>${calTwo()}</div>
      <div><div class="sd-f sm">y<sup>*</sup> = ${frac('E(R<sub>P</sub>) - R<sub>f</sub>', 'A σ<sub>P</sub><sup>2</sup>')}</div>
      <p class="sd-cap">R<sub>f</sub> 4% · P: E 11%, σ 20%</p>
      <div class="sd-rule up">Lan A = 2 → <b>87,5% vào P</b></div><div class="sd-rule down">Minh A = 5 → <b>35% vào P</b></div>
      <p class="sd-note">Bước 1 chọn P (không cần A). Bước 2 chọn điểm trên CAL (theo A).</p></div></div>`),

    S('Thống kê từ dữ liệu lịch sử: chia T - 1', `<div class="sd-cols2"><div>
      <div class="sd-f sm">s<sup>2</sup> = ${frac('Σ(R<sub>t</sub> - R̄)<sup>2</sup>', 'T - 1')}</div><div class="sd-f sm">Cov = ${frac('Σ(R<sub>A,t</sub> - R̄<sub>A</sub>)(R<sub>B,t</sub> - R̄<sub>B</sub>)', 'T - 1')}</div></div>
      <div><div class="sd-tbl grid"><div class="head"><span>Năm</span><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span></div><div><span>Cổ phiếu</span><span>18%</span><span>-6%</span><span>12%</span><span>25%</span><span>1%</span></div><div><span>Trái phiếu</span><span>-4%</span><span>3%</span><span>8%</span><span>12%</span><span>6%</span></div></div>
      <p class="sd-note">R̄ = 10% và 5% · s = <b>12,55%</b> và <b>6,00%</b> · Cov = 0,0062/4 = <b>0,00155</b> · ρ = <b>0,21</b></p></div></div>`),

    S('BA II Plus: DATA và STAT', `<div class="sd-keys"><span><kbd>2ND</kbd> <kbd>7</kbd> DATA</span><span><kbd>2ND</kbd> <kbd>CE/C</kbd> xóa</span><span>X01 = 18, Y01 = -4 ...</span><span><kbd>2ND</kbd> <kbd>8</kbd> STAT → LIN</span></div>
      <div class="sd-cols2"><div class="sd-card acc"><b>Đọc bằng <kbd>↓</kbd></b><p>x̄ = 10 · <b>Sx = 12.5499</b></p><p>ȳ = 5 · <b>Sy = 6</b> · r = 0.2058</p><p>Cov = r × Sx × Sy = 15,5 %<sup>2</sup> = <b>0,00155</b></p></div>
      <div class="sd-card"><b>Bẫy</b><p>Dữ liệu lịch sử → <b>Sx</b> (n - 1)</p><p>σx = 11,22% (chia n) → đáp án nhiễu</p><p>Nhập % thì Cov ra %<sup>2</sup>: chia 10.000</p></div></div>`),

    S('σ danh mục 60/40: hai cách, một đáp số', `<div class="sd-cols2">
      <div class="sd-card"><b>Cách 1: công thức</b><p>0,36 × 0,01575 + 0,16 × 0,0036 + 2 × 0,6 × 0,4 × 0,00155</p><p>= 0,00699 → σ<sub>P</sub> = <b>8,36%</b></p></div>
      <div class="sd-card acc"><b>Cách 2: chuỗi R<sub>P</sub></b><p>9,2% · -2,4% · 10,4% · 19,8% · 3,0%</p><p>Sx (1-V) = <b>8,36%</b> · R̄<sub>P</sub> = 8,00%</p></div></div>
      <p class="sd-note">Trung bình có trọng số các σ = 9,93%. Phần chênh 1,57 điểm % là lợi ích đa dạng hóa.</p>`),

    S('ρ càng thấp, σ danh mục càng nhỏ', `<div class="sd-cols2"><div><p class="sd-cap">Danh mục 60/40, E(R<sub>P</sub>) luôn = 8,00%:</p>${rhoBars()}</div>
      <div><div class="sd-rule">ρ = +1 → trung bình có trọng số <b>Không lợi ích</b></div><div class="sd-rule up">ρ &lt; +1 → nhỏ hơn <b>Có lợi ích</b></div><div class="sd-rule up">ρ = -1 → |0,6 × 12,55% - 0,4 × 6%| <b>Lớn nhất</b></div>
      <p class="sd-note">Khủng hoảng: ρ tăng vọt, lợi ích co lại.</p></div></div>`),

    S('Nhiều tài sản: rủi ro không về 0', `<div class="sd-cols2 wide-left"><div>${nCurve()}</div>
      <div><div class="sd-f sm">σ<sub>P</sub><sup>2</sup> = ${frac('σ<sup>2</sup>', 'N')} + ${frac('N - 1', 'N')}ρσ<sup>2</sup></div>
      <div class="sd-steps"><span>N = 1 → 30,00%</span><span>N = 10 → 18,25%</span><span>N = 50 → 16,81%</span></div>
      <p class="sd-note">Phần mất đi: rủi ro riêng. Phần còn lại: rủi ro chung → <b>PC-02</b>.</p></div></div>`),

    S('Đường biên hiệu quả và GMV', `<div class="sd-cols2 wide-left"><div>${frontier()}</div>
      <div><div class="sd-f sm">w<sub>A</sub> = ${frac('s<sub>B</sub><sup>2</sup> - Cov', 's<sub>A</sub><sup>2</sup> + s<sub>B</sub><sup>2</sup> - 2Cov')} = <b>12,62%</b></div>
      <p>GMV: E = <b>5,63%</b>, σ = <b>5,78%</b></p><p class="sd-note">100% trái phiếu (5%, 6%) bị GMV lấn át: lợi suất thấp hơn, rủi ro cao hơn.</p></div></div>`),

    S('Đường biên thay đổi khi nào?', `<div class="sd-cols3">
      <div class="sd-card"><b>Thêm tài sản mới</b><p>Dịch sang <b>trái và lên</b>. Không bao giờ xấu đi (tỷ trọng 0 vẫn được).</p></div>
      <div class="sd-card"><b>Cho bán khống</b><p>Kéo dài đường biên ra ngoài hai đầu.</p></div>
      <div class="sd-card acc"><b>Thêm R<sub>f</sub></b><p>Biên hiệu quả thành <b>đường thẳng</b>: CAL tiếp xúc tại danh mục rủi ro tối ưu.</p><small>→ PC-02: CML, CAPM</small></div></div>
      <p class="sd-note">Không có R<sub>f</sub>: người cực kỳ ngại rủi ro chọn GMV.</p>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>Small-cap &gt; large-cap &gt; trái phiếu &gt; T-bills</span><span>Cổ phiếu lệch âm, đuôi dày</span>
      <span>Ngại rủi ro: từ chối fair gamble</span><span>Tối ưu = bàng quan tiếp xúc CAL</span>
      <span>Dữ liệu lịch sử: chia T - 1, đọc Sx</span><span>Cov = r × Sx × Sy</span>
      <span>N lớn: σ<sub>P</sub><sup>2</sup> → ρσ<sup>2</sup></span><span>Hiệu quả = phía trên GMV</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 10 câu, mục tiêu ≥ 7 câu đúng.</p>`),
  ];

  addDeck('PC-01', `Slide Portfolio Risk & Return I - bản thiết kế riêng (${slides.length} slide)`, slides);
}());
