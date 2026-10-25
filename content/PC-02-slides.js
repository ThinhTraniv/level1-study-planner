// Bộ slide tự thiết kế cho PC-02 Portfolio Risk and Return: Part II.
(function () {
  const { frac, slide, addDeck } = window.CFAH;
  if (!window.LESSONS['PC-02']) return;
  const K = { kicker: 'PC-02 · Portfolio Risk & Return II' };
  const S = (title, body) => slide(title, body, K);
  const fmt = (x, d = 2) => x.toFixed(d).replace('.', ',');
  const poly = (pts, cls) => `<polyline points="${pts.map(p => `${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ')}" class="${cls}" fill="none"/>`;

  function axes(o) {
    const { W = 600, H = 300, l = 60, r = 580, t = 20, b = 250, sMax = 0.3, eMin = 0, eMax = 0.14, eTicks = [0.04, 0.08, 0.12], sTicks = [0, 0.10, 0.20, 0.30], xLab = 'Độ lệch chuẩn σ', pct = true } = o;
    const xs = s => l + (s / sMax) * (r - l);
    const ys = e => b - ((e - eMin) / (eMax - eMin)) * (b - t);
    let s = `<line x1="${l}" y1="${b}" x2="${r}" y2="${b}" class="sv-axis"/><line x1="${l}" y1="${t}" x2="${l}" y2="${b}" class="sv-axis"/>`;
    eTicks.forEach(e => { s += `<line x1="${l}" y1="${ys(e)}" x2="${r}" y2="${ys(e)}" class="sv-grid"/><text x="${l - 8}" y="${ys(e) + 5}" class="sv-muted" text-anchor="end">${Math.round(e * 100)}%</text>`; });
    sTicks.forEach(x => { s += `<text x="${xs(x)}" y="${b + 22}" class="sv-muted">${pct ? `${Math.round(x * 100)}%` : fmt(x, 1)}</text>`; });
    s += `<text x="${(l + r) / 2}" y="${H - 4}" class="sv-muted">${xLab}</text>`;
    return { xs, ys, s, W, H };
  }

  // Đường biên của hai quỹ ở PC-01 với Rf = 2%: CAL tốt nhất và một CAL kém hơn.
  function bestCal() {
    const vA = 0.01575, vB = 0.0036, c = 0.00155, rf = 0.02;
    const port = w => ({ E: w * 0.10 + (1 - w) * 0.05, s: Math.sqrt(w * w * vA + (1 - w) * (1 - w) * vB + 2 * w * (1 - w) * c) });
    const A = axes({ sMax: 0.16, eMin: 0.01, eMax: 0.12, eTicks: [0.02, 0.06, 0.10], sTicks: [0, 0.04, 0.08, 0.12, 0.16] });
    const pts = [];
    let T = null;
    for (let w = -0.2; w <= 1.2001; w += 0.01) { const p = port(w); if (p.s <= 0.155) pts.push([A.xs(p.s), A.ys(p.E)]); }
    for (let w = 0; w <= 1.0001; w += 0.001) { const p = port(w); const sh = (p.E - rf) / p.s; if (!T || sh > T.sh) T = { ...p, sh }; }
    const B = port(0), shB = (B.E - rf) / B.s;
    let s = `<svg viewBox="0 0 ${A.W} ${A.H}" class="sv" role="img" aria-label="CAL tốt nhất tiếp xúc đường biên">${A.s}${poly(pts, 'sv-curve')}`;
    s += `<line x1="${A.xs(0)}" y1="${A.ys(rf)}" x2="${A.xs(0.16)}" y2="${A.ys(rf + shB * 0.16)}" class="sv-dash"/>`;
    s += `<line x1="${A.xs(0)}" y1="${A.ys(rf)}" x2="${A.xs(0.16)}" y2="${A.ys(rf + T.sh * 0.16)}" class="sv-pv"/>`;
    s += `<circle cx="${A.xs(T.s)}" cy="${A.ys(T.E)}" r="7" class="sv-node up"/><text x="${A.xs(T.s) - 12}" y="${A.ys(T.E) - 10}" class="sv-txt sv-t-up" text-anchor="end">Tiếp tuyến</text>`;
    s += `<circle cx="${A.xs(B.s)}" cy="${A.ys(B.E)}" r="6" class="sv-dot"/><text x="${A.xs(0.155)}" y="${A.ys(rf + shB * 0.155) + 36}" class="sv-muted" text-anchor="end">CAL kém hơn</text>`;
    s += `<circle cx="${A.xs(0)}" cy="${A.ys(rf)}" r="6" class="sv-dot"/><text x="${A.xs(0) + 10}" y="${A.ys(rf) + 20}" class="sv-muted" text-anchor="start">Rf</text>`;
    return `${s}</svg>`;
  }

  // CAL gãy khúc: cho vay 3%, vay 5%, M: E 10%, σ 18%.
  function kinked() {
    const A = axes({ sMax: 0.3, eMin: 0, eMax: 0.16, eTicks: [0.04, 0.08, 0.12, 0.16] });
    let s = `<svg viewBox="0 0 ${A.W} ${A.H}" class="sv" role="img" aria-label="CAL gãy khúc">${A.s}`;
    s += `<line x1="${A.xs(0)}" y1="${A.ys(0.03)}" x2="${A.xs(0.18)}" y2="${A.ys(0.10)}" class="sv-up"/>`;
    s += `<line x1="${A.xs(0.18)}" y1="${A.ys(0.10)}" x2="${A.xs(0.3)}" y2="${A.ys(0.10 + (0.05 / 0.18) * 0.12)}" class="sv-down"/>`;
    s += `<line x1="${A.xs(0.18)}" y1="${A.ys(0.10)}" x2="${A.xs(0.3)}" y2="${A.ys(0.10 + (0.07 / 0.18) * 0.12)}" class="sv-dash"/>`;
    s += `<circle cx="${A.xs(0.18)}" cy="${A.ys(0.10)}" r="7" class="sv-node"/><text x="${A.xs(0.18) - 10}" y="${A.ys(0.10) - 12}" class="sv-txt" text-anchor="end">M</text>`;
    s += `<text x="${A.xs(0.08)}" y="${A.ys(0.075) - 10}" class="sv-txt sv-t-up">cho vay: dốc 0,389</text><text x="${A.xs(0.29)}" y="${A.ys(0.1278) + 46}" class="sv-txt sv-t-down" text-anchor="end">vay: dốc 0,278</text>`;
    s += `<circle cx="${A.xs(0.234)}" cy="${A.ys(0.115)}" r="6" class="sv-dot"/>`;
    return `${s}</svg>`;
  }

  // CML với vùng cho vay và vùng vay.
  function cml() {
    const A = axes({ sMax: 0.3, eMin: 0, eMax: 0.14, eTicks: [0.04, 0.08, 0.12] });
    const rf = 0.03, sl = 0.35;
    let s = `<svg viewBox="0 0 ${A.W} ${A.H}" class="sv" role="img" aria-label="CML">${A.s}`;
    s += `<line x1="${A.xs(0)}" y1="${A.ys(rf)}" x2="${A.xs(0.2)}" y2="${A.ys(0.10)}" class="sv-up"/><line x1="${A.xs(0.2)}" y1="${A.ys(0.10)}" x2="${A.xs(0.3)}" y2="${A.ys(rf + sl * 0.3)}" class="sv-down"/>`;
    [[0.12, 0.072, '60% M'], [0.25, 0.1175, '125% M']].forEach(([x, e, lab]) => { s += `<circle cx="${A.xs(x)}" cy="${A.ys(e)}" r="6" class="sv-dot"/><text x="${A.xs(x) + 10}" y="${A.ys(e) + 22}" class="sv-muted" text-anchor="start">${lab}</text>`; });
    s += `<circle cx="${A.xs(0.2)}" cy="${A.ys(0.10)}" r="7" class="sv-node up"/><text x="${A.xs(0.2) - 10}" y="${A.ys(0.10) - 12}" class="sv-txt" text-anchor="end">M</text>`;
    s += `<text x="${A.xs(0.08)}" y="${A.ys(0.09)}" class="sv-txt sv-t-up">cho vay</text><text x="${A.xs(0.26)}" y="${A.ys(0.135)}" class="sv-txt sv-t-down">vay (đòn bẩy)</text>`;
    s += `<circle cx="${A.xs(0)}" cy="${A.ys(rf)}" r="6" class="sv-dot"/><text x="${A.xs(0) + 10}" y="${A.ys(rf) + 20}" class="sv-muted" text-anchor="start">Rf = 3%</text>`;
    return `${s}</svg>`;
  }

  // Tổng rủi ro theo số cổ phiếu: phần phi hệ thống mất dần, phần hệ thống còn lại.
  function riskSplit() {
    const W = 600, H = 300, l = 60, r = 580, t = 20, b = 250;
    const xs = n => l + ((n - 1) / 39) * (r - l), ys = v => b - (v / 0.32) * (b - t);
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv" role="img" aria-label="Rủi ro hệ thống và phi hệ thống"><line x1="${l}" y1="${b}" x2="${r}" y2="${b}" class="sv-axis"/><line x1="${l}" y1="${t}" x2="${l}" y2="${b}" class="sv-axis"/>`;
    [0.1, 0.2, 0.3].forEach(v => { s += `<line x1="${l}" y1="${ys(v)}" x2="${r}" y2="${ys(v)}" class="sv-grid"/><text x="${l - 8}" y="${ys(v) + 5}" class="sv-muted" text-anchor="end">${Math.round(v * 100)}%</text>`; });
    [1, 10, 20, 30, 40].forEach(n => { s += `<text x="${xs(n)}" y="${b + 22}" class="sv-muted">${n}</text>`; });
    const pts = [];
    for (let n = 1; n <= 40; n++) pts.push([xs(n), ys(Math.sqrt(0.09 / n + ((n - 1) / n) * 0.027))]);
    const lim = Math.sqrt(0.027);
    s += `${poly(pts, 'sv-curve')}<line x1="${l}" y1="${ys(lim)}" x2="${r}" y2="${ys(lim)}" class="sv-dash"/>`;
    s += `<text x="${xs(22)}" y="${ys(lim) - 34}" class="sv-txt sv-t-down">phi hệ thống: đa dạng hóa được</text><text x="${xs(22)}" y="${ys(lim / 2)}" class="sv-txt sv-t-up">hệ thống: không đa dạng hóa được</text>`;
    s += `<text x="${(l + r) / 2}" y="${H - 4}" class="sv-muted">Số cổ phiếu trong danh mục (σ mỗi cổ phiếu 30%, ρ = 0,3)</text></svg>`;
    return s;
  }

  // SCL: dữ liệu ví dụ 6.2, đường hồi quy beta 1,25.
  function scl() {
    const m = [0.10, -0.06, 0.18, 0.04, 0.14], x = [0.24, -0.14, 0.14, 0.10, 0.16];
    const A = axes({ sMax: 0.28, eMin: -0.18, eMax: 0.3, eTicks: [-0.1, 0, 0.1, 0.2, 0.3], sTicks: [0, 0.1, 0.2], xLab: 'Lợi suất thị trường' });
    const xx = v => A.xs(v + 0.08);
    let s = `<svg viewBox="0 0 ${A.W} ${A.H}" class="sv" role="img" aria-label="Đường đặc trưng chứng khoán">${A.s.replace(/<text x="[^"]*" y="272" class="sv-muted">[^<]*<\/text>/g, '')}`;
    [-0.05, 0, 0.05, 0.1, 0.15].forEach(v => { s += `<text x="${xx(v)}" y="272" class="sv-muted">${Math.round(v * 100)}%</text>`; });
    s += `<line x1="${xx(-0.08)}" y1="${A.ys(1.25 * -0.08)}" x2="${xx(0.2)}" y2="${A.ys(1.25 * 0.2)}" class="sv-pv"/>`;
    m.forEach((v, i) => { s += `<circle cx="${xx(v)}" cy="${A.ys(x[i])}" r="7" class="sv-dot"/>`; });
    s += `<text x="${xx(0.19)}" y="${A.ys(0.25) - 12}" class="sv-txt sv-t-pv" text-anchor="end">SCL: độ dốc β = 1,25</text>`;
    return `${s}</svg>`;
  }

  // SML với ba cổ phiếu của ví dụ 8.1.
  function smlChart() {
    const A = axes({ sMax: 2, eMin: 0, eMax: 0.16, eTicks: [0.04, 0.08, 0.12, 0.16], sTicks: [0, 0.5, 1, 1.5, 2], xLab: 'Beta', pct: false });
    let s = `<svg viewBox="0 0 ${A.W} ${A.H}" class="sv" role="img" aria-label="SML và ba cổ phiếu">${A.s}`;
    s += `<line x1="${A.xs(0)}" y1="${A.ys(0.03)}" x2="${A.xs(2)}" y2="${A.ys(0.03 + 2 * 0.06)}" class="sv-pv"/><text x="${A.xs(1.95)}" y="${A.ys(0.147) + 26}" class="sv-txt sv-t-pv" text-anchor="end">SML</text>`;
    s += `<circle cx="${A.xs(1)}" cy="${A.ys(0.09)}" r="6" class="sv-dot"/><text x="${A.xs(1) + 10}" y="${A.ys(0.09) + 20}" class="sv-muted" text-anchor="start">M</text>`;
    [[0.8, 0.09, 'X +1,2%', 'up'], [1.2, 0.095, 'Y -0,7%', 'down'], [1.5, 0.12, 'Z: 0', '']].forEach(([bb, e, lab, c]) => {
      s += `<circle cx="${A.xs(bb)}" cy="${A.ys(e)}" r="7" class="sv-node ${c}"/><text x="${A.xs(bb) + (c === 'down' ? 12 : -12)}" y="${A.ys(e) + (c === 'down' ? 22 : -10)}" class="sv-txt ${c ? `sv-t-${c}` : ''}" text-anchor="${c === 'down' ? 'start' : 'end'}">${lab}</text>`;
    });
    s += `<circle cx="${A.xs(0)}" cy="${A.ys(0.03)}" r="6" class="sv-dot"/><text x="${A.xs(0) + 10}" y="${A.ys(0.03) + 20}" class="sv-muted" text-anchor="start">Rf = 3%</text>`;
    return `${s}</svg>`;
  }

  const varBars = () => {
    const rows = [['Tổng σ²', 0.16], ['Hệ thống β²σM²', 0.0576], ['Phi hệ thống σε²', 0.1024]];
    return `<div class="sd-bars">${rows.map(([lab, v]) => `<div class="sd-bar"><span class="sd-bar-l">${lab}</span><span class="sd-bar-t"><i style="width:${(v / 0.16) * 100}%"></i></span><b>${fmt(v, 4)}</b></div>`).join('')}</div>`;
  };

  const slides = [
    slide('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Portfolio Construction · PC-02</div>
      <h2>Portfolio Risk and Return<br>Part II</h2>
      <p>Thị trường chỉ trả công cho rủi ro hệ thống</p>
      <div class="sd-chips"><span>LOS 1-2 · CAL, CML</span><span>LOS 3-4 · Rủi ro hệ thống, mô hình thị trường</span><span>LOS 5-8 · Beta, CAPM, SML</span><span>LOS 9 · Sharpe, Treynor, M², alpha</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Bốn bước của buổi học', `<div class="sd-grid4">
      <div class="sd-card"><div class="sd-n">1</div><b>Thêm R<sub>f</sub></b><p>CAL, danh mục thị trường, CML.</p></div>
      <div class="sd-card"><div class="sd-n">2</div><b>Tách rủi ro</b><p>Hệ thống và phi hệ thống. Mô hình thị trường.</p></div>
      <div class="sd-card acc"><div class="sd-n">3</div><b>Beta và CAPM</b><p>Lợi suất yêu cầu chỉ theo β. SML.</p></div>
      <div class="sd-card"><div class="sd-n">4</div><b>Chấm điểm</b><p>Sharpe, M<sup>2</sup>, Treynor, Jensen's alpha.</p></div></div>
      <p class="sd-note">Cặp dễ nhầm nhất: <b>CML</b> (trục σ) và <b>SML</b> (trục β).</p>`),

    S('Thêm tài sản phi rủi ro', `<div class="sd-cols2 wide-left"><div>${bestCal()}</div>
      <div><div class="sd-f sm">σ<sub>P</sub> = (1 - w<sub>1</sub>)σ<sub>i</sub></div><p>Cov với R<sub>f</sub> = 0 → kết hợp là <b>đường thẳng</b>.</p>
      <div class="sd-steps"><span>Bước 1: chọn CAL dốc nhất (tiếp tuyến)</span><span>Bước 2: chọn điểm trên CAL theo A</span></div>
      <p class="sd-note">Minh họa: hai quỹ của PC-01, R<sub>f</sub> = 2%.</p></div></div>`),

    S('Vay đắt hơn gửi: CAL gãy khúc', `<div class="sd-cols2 wide-left"><div>${kinked()}</div>
      <div><p class="sd-cap">M: E 10%, σ 18% · gửi 3% · vay 5%</p>
      <div class="sd-rule up">Gửi 3% → dốc <b>0,389</b></div><div class="sd-rule down">Vay 5% → dốc <b>0,278</b></div>
      <p>130% M: 1,3 × 10% - 0,3 × 5% = <b>11,50%</b></p><p class="sd-note">Bẫy: 1,3 × 10% = 13% là quên trả lãi vay.</p></div></div>`),

    S('Danh mục thị trường và CML', `<div class="sd-cols2 wide-left"><div>${cml()}</div>
      <div><div class="sd-f sm">E(R<sub>P</sub>) = R<sub>f</sub> + ${frac('E(R<sub>M</sub>) - R<sub>f</sub>', 'σ<sub>M</sub>')}σ<sub>P</sub></div>
      <p class="sd-cap">R<sub>f</sub> 3% · E(R<sub>M</sub>) 10% · σ<sub>M</sub> 20% → dốc 0,35</p>
      <div class="sd-steps"><span>60% M: E 7,20%, σ 12%</span><span>125% M: E 11,75%, σ 25%</span></div></div></div>`),

    S('Thụ động hay chủ động?', `<div class="sd-cols2">
      <div class="sd-card"><b>Thụ động (passive)</b><p>R<sub>f</sub> + quỹ chỉ số thị trường → <b>nằm trên CML</b>.</p><p>Chi phí thấp, không cần dự báo.</p></div>
      <div class="sd-card acc"><b>Chủ động (active)</b><p>Tăng tỷ trọng chứng khoán cho là rẻ, giảm cái cho là đắt.</p><p>Lệch khỏi M → thường <b>không nằm trên CML</b>.</p></div></div>
      <p class="sd-note">Kỳ vọng đồng nhất → mọi người nắm cùng M. Thực tế: dùng chỉ số đại diện (S&amp;P 500, VN-Index).</p>`),

    S('Rủi ro hệ thống và phi hệ thống', `<div class="sd-cols2 wide-left"><div>${riskSplit()}</div>
      <div><div class="sd-rule up">Hệ thống: lãi suất, lạm phát <b>Được bù</b></div><div class="sd-rule down">Phi hệ thống: kiện tụng, CEO <b>Không bù</b></div>
      <p class="sd-note">Loại bỏ được miễn phí bằng đa dạng hóa → thị trường không trả công.</p></div></div>`),

    S('Phân tách phương sai', `<div class="sd-f">σ<sub>i</sub><sup>2</sup> = β<sub>i</sub><sup>2</sup>σ<sub>M</sub><sup>2</sup> + σ<sub>ε</sub><sup>2</sup></div>
      <div class="sd-cols2"><div><p class="sd-cap">β = 1,2 · σ<sub>i</sub> = 40% · σ<sub>M</sub> = 20%</p>${varBars()}</div>
      <div><p>Hệ thống = 0,0576 / 0,16 = <b>36%</b> = R<sup>2</sup></p><p>ρ<sub>i,M</sub> = √0,36 = <b>0,6</b></p><p class="sd-note">Chịu σ = 40% nhưng chỉ được trả công cho phần β = 1,2.</p></div></div>`),

    S('Mô hình tạo lợi suất', `<div class="sd-steps"><span>Nhiều yếu tố: E(R<sub>i</sub>) - R<sub>f</sub> = Σ β<sub>ij</sub>E(F<sub>j</sub>) · vĩ mô, cơ bản, thống kê · Fama-French 3 yếu tố</span><span>Chỉ số đơn: E(R<sub>i</sub>) - R<sub>f</sub> = β<sub>i</sub>[E(R<sub>M</sub>) - R<sub>f</sub>]</span><span>Mô hình thị trường: R<sub>i</sub> = α<sub>i</sub> + β<sub>i</sub>R<sub>M</sub> + ε<sub>i</sub></span></div>
      <div class="sd-cols3"><div class="sd-card"><b>Ước lượng β</b><p>Hồi quy R<sub>i</sub> theo R<sub>M</sub>.</p></div><div class="sd-card"><b>Dự báo</b><p>1% + 1,3 × 8% = <b>11,4%</b></p></div><div class="sd-card acc"><b>Cov đơn giản</b><p>β<sub>i</sub>β<sub>j</sub>σ<sub>M</sub><sup>2</sup> = 1,2 × 0,8 × 0,04 = <b>0,0384</b></p><small>100 cổ phiếu: 100 beta thay cho 4.950 Cov</small></div></div>`),

    S('Beta: đo rủi ro hệ thống', `<div class="sd-cols2"><div><div class="sd-f">β<sub>i</sub> = ${frac('Cov(R<sub>i</sub>, R<sub>M</sub>)', 'σ<sub>M</sub><sup>2</sup>')} = ${frac('ρ<sub>i,M</sub>σ<sub>i</sub>', 'σ<sub>M</sub>')}</div>
      <p>ρ 0,7 · σ<sub>i</sub> 35% · σ<sub>M</sub> 20% → β = <b>1,225</b></p><p class="sd-note">β<sub>P</sub> = Σw<sub>i</sub>β<sub>i</sub>: 0,5 × 1,4 + 0,3 × 0,9 + 0,2 × 0 = <b>0,97</b></p></div>
      <div><div class="sd-tbl"><div><span>β &gt; 1</span><span>tấn công</span></div><div><span>β = 1</span><span>như thị trường</span></div><div><span>0 &lt; β &lt; 1</span><span>phòng thủ</span></div><div><span>β = 0</span><span>R<sub>f</sub></span></div><div><span>β &lt; 0</span><span>ngược chiều</span></div></div></div></div>`),

    S('Beta từ dữ liệu: đường SCL', `<div class="sd-cols2 wide-left"><div>${scl()}</div>
      <div><p>Cov = 0,044/4 = <b>0,011</b></p><p>σ<sub>M</sub><sup>2</sup> = 0,0352/4 = <b>0,0088</b></p><p>β = 0,011/0,0088 = <b>1,25</b></p>
      <div class="sd-keys"><span>X = thị trường</span><span>Y = cổ phiếu</span><span>LIN → b = 1.25</span></div><p class="sd-note">r = 0,817 → R<sup>2</sup> = 0,667</p></div></div>`),

    S('CAPM: sáu giả định', `<div class="sd-check">
      <span>Ngại rủi ro, lý trí, tối đa hóa hữu dụng</span><span>Không thuế, không phí; vay, cho vay ở R<sub>f</sub></span>
      <span>Một kỳ đầu tư chung</span><span>Kỳ vọng đồng nhất</span>
      <span>Tài sản chia nhỏ vô hạn</span><span>Người chấp nhận giá</span></div>
      <div class="sd-f">E(R<sub>i</sub>) = R<sub>f</sub> + β<sub>i</sub>[E(R<sub>M</sub>) - R<sub>f</sub>]</div>
      <p class="sd-note">R<sub>f</sub> 4% · E(R<sub>M</sub>) 10% · β 1,3 → <b>11,8%</b>. Bẫy: 4% + 1,3 × 10% = 17%.</p>`),

    S('SML: trên rẻ, dưới đắt', `<div class="sd-cols2 wide-left"><div>${smlChart()}</div>
      <div><p class="sd-cap">R<sub>f</sub> 3% · E(R<sub>M</sub>) 9%</p><div class="sd-tbl grid"><div class="head"><span></span><span>Yêu cầu</span><span>Dự báo</span></div><div><span>X (0,8)</span><span>7,8%</span><span>9,0%</span></div><div><span>Y (1,2)</span><span>10,2%</span><span>9,5%</span></div><div><span>Z (1,5)</span><span>12,0%</span><span>12,0%</span></div></div>
      <div class="sd-rule up">X trên SML → <b>mua</b></div><div class="sd-rule down">Y dưới SML → <b>bán</b></div></div></div>`),

    S('Ứng dụng của CAPM', `<div class="sd-cols3">
      <div class="sd-card"><b>Chi phí vốn</b><p>Định giá cổ phiếu, ngân sách vốn.</p><p>Dự án β 1,4: 3% + 1,4 × 6% = <b>11,4%</b></p></div>
      <div class="sd-card acc"><b>Chọn chứng khoán</b><p>Dự báo từ giá: (54 + 1,5 - 50)/50 = <b>11%</b></p><p>Yêu cầu 10,2% → α = +0,8%</p></div>
      <div class="sd-card"><b>Danh mục và đánh giá</b><p>Thêm chứng khoán α dương vào M.</p><p>Chuẩn cho Treynor và Jensen's alpha.</p></div></div>`),

    S('Bốn thước đo hiệu quả', `<div class="sd-grid4">
      <div class="sd-card"><b>Sharpe</b><div class="sd-f sm">${frac('R<sub>P</sub> - R<sub>f</sub>', 'σ<sub>P</sub>')}</div><small>tổng rủi ro</small></div>
      <div class="sd-card"><b>M²</b><div class="sd-f sm">(R<sub>P</sub> - R<sub>f</sub>)${frac('σ<sub>M</sub>', 'σ<sub>P</sub>')} + R<sub>f</sub></div><small>tổng rủi ro, đơn vị %</small></div>
      <div class="sd-card acc"><b>Treynor</b><div class="sd-f sm">${frac('R<sub>P</sub> - R<sub>f</sub>', 'β<sub>P</sub>')}</div><small>rủi ro hệ thống</small></div>
      <div class="sd-card acc"><b>Jensen's α</b><div class="sd-f sm">R<sub>P</sub> - [R<sub>f</sub> + β<sub>P</sub>(R<sub>M</sub> - R<sub>f</sub>)]</div><small>khoảng cách tới SML</small></div></div>
      <p class="sd-note">Toàn bộ tài sản, kém đa dạng → <b>Sharpe, M²</b>. Đa dạng tốt, một phần danh mục lớn → <b>Treynor, α</b>.</p>`),

    S('Ba quỹ, bốn thước đo', `<p class="sd-cap">R<sub>f</sub> 3% · thị trường: R 10%, σ 18%</p>
      <div class="sd-tbl grid"><div class="head"><span>Quỹ (R, σ, β)</span><span>Sharpe</span><span>M²</span><span>Treynor</span><span>Jensen's α</span></div>
      <div><span>Thị trường</span><span>0,389</span><span>10,00%</span><span>7,00%</span><span>0</span></div>
      <div><span>P1 (13%, 25%, 1,1)</span><span>0,400</span><span>10,20%</span><span><b>9,09%</b></span><span><b>+2,30%</b></span></div>
      <div><span>P2 (9%, 12%, 0,7)</span><span><b>0,500</b></span><span><b>12,00%</b></span><span>8,57%</span><span>+1,10%</span></div>
      <div><span>P3 (15%, 32%, 1,6)</span><span>0,375</span><span>9,75%</span><span>7,50%</span><span>+0,80%</span></div></div>
      <p class="sd-note">P3: α dương nhưng Sharpe thấp hơn thị trường → nhiều <b>rủi ro phi hệ thống</b>.</p>`),

    S('CML và SML', `<div class="sd-tbl grid"><div class="head"><span></span><span>CML</span><span>SML</span></div>
      <div><span>Trục ngang</span><span>σ (tổng rủi ro)</span><span>β (rủi ro hệ thống)</span></div>
      <div><span>Độ dốc</span><span>Sharpe của M</span><span>E(R<sub>M</sub>) - R<sub>f</sub></span></div>
      <div><span>Áp dụng</span><span>Chỉ danh mục hiệu quả</span><span>Mọi tài sản</span></div>
      <div><span>Dùng để</span><span>Phân bổ R<sub>f</sub> và M</span><span>Lợi suất yêu cầu, định giá</span></div></div>
      <p class="sd-note">Cả hai cắt trục tung tại <b>R<sub>f</sub></b> và cùng đi qua <b>danh mục thị trường</b>.</p>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>Vay: tỷ trọng R<sub>f</sub> âm, trừ lãi vay</span><span>Phi hệ thống: không được bù</span>
      <span>σ<sub>i</sub><sup>2</sup> = β<sup>2</sup>σ<sub>M</sub><sup>2</sup> + σ<sub>ε</sub><sup>2</sup></span><span>β = Cov/σ<sub>M</sub><sup>2</sup> = ρσ<sub>i</sub>/σ<sub>M</sub></span>
      <span>CAPM: phân biệt E(R<sub>M</sub>) và phần bù</span><span>Trên SML: rẻ, mua</span>
      <span>Sharpe, M²: σ · Treynor, α: β</span><span>CML: σ · SML: β</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 10 câu, mục tiêu ≥ 7 câu đúng.</p>`),
  ];

  addDeck('PC-02', `Slide Portfolio Risk & Return II - bản thiết kế riêng (${slides.length} slide)`, slides);
}());
