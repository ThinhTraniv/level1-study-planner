// Bộ slide tự thiết kế cho QM-08 The Return and Risk of a Financial Portfolio.
(function () {
  const { frac, slide, addDeck } = window.CFAH;
  if (!window.LESSONS['QM-08']) return;
  const K = { kicker: 'QM-08 · Portfolio Risk & Return' };
  const S = (title, body) => slide(title, body, K);
  const fmt = (x, d = 2) => x.toFixed(d).replace('.', ',');

  // Dữ liệu chung: cổ phiếu E 10%, σ 20%; trái phiếu E 4%, σ 8%; Rf 3%.
  const Es = 0.10, ss = 0.20, Eb = 0.04, sb = 0.08, rf = 0.03;
  const port = (w, rho) => {
    const v = w * w * ss * ss + (1 - w) * (1 - w) * sb * sb + 2 * w * (1 - w) * rho * ss * sb;
    return { E: w * Es + (1 - w) * Eb, s: Math.sqrt(Math.max(v, 0)) };
  };

  // Khung trục rủi ro - lợi suất dùng chung.
  function axes(o) {
    const { W = 600, H = 300, l = 60, r = 580, t = 20, b = 250, sMax = 0.22, eMin = 0.02, eMax = 0.12, eTicks = [0.04, 0.06, 0.08, 0.10], sTicks = [0, 0.05, 0.10, 0.15, 0.20] } = o;
    const xs = s => l + (s / sMax) * (r - l);
    const ys = e => b - ((e - eMin) / (eMax - eMin)) * (b - t);
    let s = `<line x1="${l}" y1="${b}" x2="${r}" y2="${b}" class="sv-axis"/><line x1="${l}" y1="${t}" x2="${l}" y2="${b}" class="sv-axis"/>`;
    eTicks.forEach(e => { s += `<line x1="${l}" y1="${ys(e)}" x2="${r}" y2="${ys(e)}" class="sv-grid"/><text x="${l - 8}" y="${ys(e) + 5}" class="sv-muted" text-anchor="end">${Math.round(e * 100)}%</text>`; });
    sTicks.forEach(x => { s += `<text x="${xs(x)}" y="${b + 22}" class="sv-muted">${Math.round(x * 100)}%</text>`; });
    s += `<text x="${(l + r) / 2}" y="${H - 4}" class="sv-muted">Độ lệch chuẩn σ</text>`;
    return { xs, ys, s, W, H };
  }
  const poly = (pts, cls) => `<polyline points="${pts.map(p => `${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ')}" class="${cls}" fill="none"/>`;

  // Đường cong 2 tài sản với 3 mức tương quan.
  function rhoCurves() {
    const A = axes({ eMin: 0.03, eMax: 0.11 });
    let s = `<svg viewBox="0 0 ${A.W} ${A.H}" class="sv" role="img" aria-label="Đường cong danh mục theo hệ số tương quan">${A.s}`;
    [[1, 'sv-dash', 'ρ = +1', 0.5], [0.2, 'sv-curve', 'ρ = 0,2', 0.35], [-1, 'sv-down', 'ρ = -1', 0.12]].forEach(([rho, cls, lab, wl]) => {
      const pts = [];
      for (let i = 0; i <= 100; i++) { const p = port(i / 100, rho); pts.push([A.xs(p.s), A.ys(p.E)]); }
      s += poly(pts, cls);
      const p = port(wl, rho);
      s += `<text x="${A.xs(p.s) + 10}" y="${A.ys(p.E) + 5}" class="sv-txt" text-anchor="start">${lab}</text>`;
    });
    s += `<circle cx="${A.xs(sb)}" cy="${A.ys(Eb)}" r="6" class="sv-dot"/><text x="${A.xs(sb) + 12}" y="${A.ys(Eb) + 18}" class="sv-muted" text-anchor="start">Trái phiếu</text>`;
    s += `<circle cx="${A.xs(ss)}" cy="${A.ys(Es)}" r="6" class="sv-dot"/><text x="${A.xs(ss)}" y="${A.ys(Es) - 12}" class="sv-muted">Cổ phiếu</text>`;
    return `${s}</svg>`;
  }

  // Đường biên (cho phép bán khống nhẹ): phần hiệu quả và không hiệu quả. Có thể thêm CAL và đường bàng quan.
  function frontier(opt = {}) {
    const A = axes({ eMin: 0.02, eMax: 0.12, eTicks: [0.04, 0.06, 0.08, 0.10, 0.12] });
    const rho = 0.2, c = rho * ss * sb;
    const wm = (sb * sb - c) / (ss * ss + sb * sb - 2 * c);
    const up = [], dn = [];
    for (let w = -0.3; w <= 1.3001; w += 0.01) { const p = port(w, rho); if (p.s <= 0.215) (w >= wm ? up : dn).push([A.xs(p.s), A.ys(p.E)]); }
    let s = `<svg viewBox="0 0 ${A.W} ${A.H}" class="sv" role="img" aria-label="Đường biên hiệu quả">${A.s}`;
    s += poly(dn, 'sv-dash') + poly(up, 'sv-curve');
    const m = port(wm, rho);
    s += `<circle cx="${A.xs(m.s)}" cy="${A.ys(m.E)}" r="7" class="sv-node down"/><text x="${A.xs(m.s) - 10}" y="${A.ys(m.E) + 5}" class="sv-txt sv-t-down" text-anchor="end">MVP</text>`;
    if (!opt.cal) {
      s += `<text x="${A.xs(0.19)}" y="${A.ys(0.108)}" class="sv-txt sv-t-up">Hiệu quả</text><text x="${A.xs(0.155)}" y="${A.ys(0.024)}" class="sv-muted">không hiệu quả</text>`;
      return `${s}</svg>`;
    }
    // Danh mục tiếp tuyến: Sharpe lớn nhất (tìm bằng lưới).
    let T = null;
    for (let w = 0; w <= 1.0001; w += 0.0005) { const p = port(w, rho); const sh = (p.E - rf) / p.s; if (!T || sh > T.sh) T = { ...p, sh }; }
    const sEnd = 0.22;
    s += `<line x1="${A.xs(0)}" y1="${A.ys(rf)}" x2="${A.xs(sEnd)}" y2="${A.ys(rf + T.sh * sEnd)}" class="sv-pv"/>`;
    s += `<circle cx="${A.xs(0)}" cy="${A.ys(rf)}" r="6" class="sv-dot"/><text x="${A.xs(0) + 10}" y="${A.ys(rf) + 20}" class="sv-muted" text-anchor="start">Rf = 3%</text>`;
    s += `<circle cx="${A.xs(T.s)}" cy="${A.ys(T.E)}" r="7" class="sv-node up"/><text x="${A.xs(T.s) + 12}" y="${A.ys(T.E) + 20}" class="sv-txt sv-t-up" text-anchor="start">T</text>`;
    s += `<text x="${A.xs(0.2)}" y="${A.ys(rf + T.sh * 0.2) - 12}" class="sv-txt sv-t-pv">CAL</text>`;
    if (opt.indiff) {
      // Nhà đầu tư A = 4: điểm tối ưu trên CAL, đường bàng quan đi qua điểm đó.
      const Aa = 4, y = (T.E - rf) / (Aa * T.s * T.s), sc = y * T.s, ec = rf + y * (T.E - rf);
      const U = ec - 0.5 * Aa * sc * sc, pts = [];
      for (let x = 0; x <= 0.2; x += 0.005) { const e = U + 0.5 * Aa * x * x; if (e <= 0.12) pts.push([A.xs(x), A.ys(e)]); }
      s += poly(pts, 'sv-up');
      s += `<circle cx="${A.xs(sc)}" cy="${A.ys(ec)}" r="7" class="sv-dot"/><text x="${A.xs(sc) - 10}" y="${A.ys(ec) - 12}" class="sv-txt" text-anchor="end">Tối ưu (A = 4)</text>`;
    }
    return `${s}</svg>`;
  }

  // Hai đường bàng quan cùng U = 4%: A = 2 (thoải) và A = 6 (dốc).
  function indiffCurves() {
    const A = axes({ eMin: 0.02, eMax: 0.14, eTicks: [0.04, 0.08, 0.12], sMax: 0.25, sTicks: [0, 0.05, 0.10, 0.15, 0.20, 0.25] });
    let s = `<svg viewBox="0 0 ${A.W} ${A.H}" class="sv" role="img" aria-label="Đường bàng quan">${A.s}`;
    [[2, 'sv-up', 'A = 2'], [6, 'sv-down', 'A = 6']].forEach(([a, cls, lab]) => {
      const pts = []; let last = null;
      for (let x = 0; x <= 0.25; x += 0.005) { const e = 0.04 + 0.5 * a * x * x; if (e <= 0.14) { pts.push([A.xs(x), A.ys(e)]); last = [x, e]; } }
      s += poly(pts, cls);
      s += `<text x="${A.xs(last[0]) - 8}" y="${A.ys(last[1]) + 4}" class="sv-txt sv-t-${cls === 'sv-up' ? 'up' : 'down'}" text-anchor="end">${lab}</text>`;
    });
    s += `<circle cx="${A.xs(0)}" cy="${A.ys(0.04)}" r="6" class="sv-dot"/><text x="${A.xs(0) + 10}" y="${A.ys(0.04) + 20}" class="sv-muted" text-anchor="start">U = 4% (tương đương chắc chắn)</text>`;
    return `${s}</svg>`;
  }

  // σ danh mục 60/40 theo ρ.
  function rhoBars() {
    const rows = [1, 0.5, 0.2, 0, -0.5, -1];
    return `<div class="sd-bars">${rows.map(rho => {
      const v = port(0.6, rho).s * 100;
      return `<div class="sd-bar"><span class="sd-bar-l">ρ = ${fmt(rho, 1)}</span><span class="sd-bar-t"><i style="width:${(v / 16) * 100}%"></i></span><b>${fmt(v)}%</b></div>`;
    }).join('')}</div>`;
  }

  // Đám điểm minh họa tương quan.
  function scatter(sign, label) {
    let s = `<svg viewBox="0 0 200 170" class="sv" role="img" aria-label="${label}"><line x1="15" y1="150" x2="190" y2="150" class="sv-axis"/><line x1="15" y1="10" x2="15" y2="150" class="sv-axis"/>`;
    for (let i = 0; i < 18; i++) {
      const x = 25 + i * 9, noise = ((i * 37) % 11 - 5) * 6;
      const y = sign === 0 ? 80 + (((i * 53) % 13) - 6) * 10 : 80 - sign * (x - 100) * 0.7 + noise * 0.6;
      s += `<circle cx="${x}" cy="${y.toFixed(1)}" r="4" class="sv-dot"/>`;
    }
    return `${s}<text x="105" y="168" class="sv-muted">${label}</text></svg>`;
  }

  const slides = [
    slide('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Quantitative Methods · QM-08</div>
      <h2>The Return and Risk<br>of a Financial Portfolio</h2>
      <p>Gộp tài sản - giảm rủi ro - chọn danh mục cho từng người</p>
      <div class="sd-chips"><span>LOS 1 · Đo lường danh mục</span><span>LOS 2 · MVP và đường biên hiệu quả</span><span>LOS 3 · CAL, CML</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Ba câu hỏi của buổi học', `<div class="sd-cols3">
      <div class="sd-card"><div class="sd-n">1</div><b>Danh mục rủi ro đến đâu?</b><p>E(R), σ, Cov, ρ của danh mục.</p><small>Ma trận hiệp phương sai</small></div>
      <div class="sd-card"><div class="sd-n">2</div><b>Đâu là các danh mục tốt?</b><p>Rủi ro thấp nhất cho mỗi mức lợi suất.</p><small>MVP, đường biên hiệu quả</small></div>
      <div class="sd-card"><div class="sd-n">3</div><b>Tôi nên chọn danh mục nào?</b><p>Tùy mức ngại rủi ro A.</p><small>Utility, CAL, danh mục thị trường, CML</small></div></div>`),

    S('Một tài sản: lợi suất kỳ vọng và độ lệch chuẩn', `<div class="sd-cols2">
      <div><div class="sd-f sm">E(R) = Σ P<sub>i</sub>R<sub>i</sub></div><div class="sd-f sm">σ<sup>2</sup> = Σ P<sub>i</sub>[R<sub>i</sub> - E(R)]<sup>2</sup></div>
      <p class="sd-note">Theo xác suất: <b>không</b> chia n - 1. Dùng số thập phân.</p></div>
      <div><div class="sd-tbl"><div><span>Tăng mạnh (25%)</span><span>+25%</span></div><div><span>Bình thường (50%)</span><span>+10%</span></div><div><span>Suy thoái (25%)</span><span>-10%</span></div></div>
      <p class="sd-note">E(R) = <b>8,75%</b> · σ<sup>2</sup> = 0,015469 · σ = <b>12,44%</b></p></div></div>`),

    S('Hiệp phương sai và hệ số tương quan', `<div class="sd-cols3">
      <div>${scatter(1, 'ρ > 0: cùng chiều')}</div><div>${scatter(0, 'ρ ≈ 0')}</div><div>${scatter(-1, 'ρ < 0: ngược chiều')}</div></div>
      <div class="sd-cols2"><div class="sd-f sm">Cov = Σ P<sub>i</sub>(R<sub>A,i</sub> - E<sub>A</sub>)(R<sub>B,i</sub> - E<sub>B</sub>)</div><div class="sd-f sm">ρ = ${frac('Cov', 'σ<sub>A</sub>σ<sub>B</sub>')} ∈ [-1; +1]</div></div>
      <p class="sd-note">Cov không bị chặn, khó đọc độ mạnh. ρ là Cov đã chuẩn hóa. Cov(A, A) = σ<sub>A</sub><sup>2</sup>.</p>`),

    S('Danh mục 2 tài sản', `<div class="sd-f">σ<sub>P</sub><sup>2</sup> = w<sub>A</sub><sup>2</sup>σ<sub>A</sub><sup>2</sup> + w<sub>B</sub><sup>2</sup>σ<sub>B</sub><sup>2</sup> + 2w<sub>A</sub>w<sub>B</sub>ρσ<sub>A</sub>σ<sub>B</sub></div>
      <div class="sd-cols2"><div class="sd-card"><b>60% cổ phiếu · 40% trái phiếu</b><p>σ = 20% và 8% · ρ = 0,2</p><p>E(R<sub>P</sub>) = 0,6 × 10% + 0,4 × 4% = <b>7,60%</b></p></div>
      <div class="sd-card acc"><b>Rủi ro</b><p>0,0144 + 0,001024 + 0,001536 = 0,01696</p><p>σ<sub>P</sub> = <b>13,02%</b> &lt; 15,20% (trung bình có trọng số)</p></div></div>
      <p class="sd-note">Ba lỗi: quên bình phương trọng số · quên số 2 · dùng ρ thay cho Cov.</p>`),

    S('ρ càng thấp, rủi ro càng giảm', `<div class="sd-cols2"><div><p class="sd-cap">σ của danh mục 60/40 theo ρ (E(R<sub>P</sub>) luôn = 7,60%):</p>${rhoBars()}</div>
      <div><div class="sd-rule">ρ = +1 → σ<sub>P</sub> = trung bình có trọng số <b>Không lợi ích</b></div><div class="sd-rule up">ρ &lt; +1 → σ<sub>P</sub> nhỏ hơn <b>Có lợi ích</b></div><div class="sd-rule up">ρ = -1 → có thể đưa σ<sub>P</sub> về 0 <b>Lớn nhất</b></div></div></div>`),

    S('Hình dạng đường cong 2 tài sản', `<div class="sd-cols2 wide-left"><div>${rhoCurves()}</div>
      <div><p>Mỗi điểm trên đường = một tỷ trọng từ 0% đến 100% cổ phiếu.</p><div class="sd-steps"><span>ρ = +1: đoạn thẳng</span><span>ρ giảm: cong dần về bên trái</span><span>ρ = -1: gãy khúc, chạm trục σ = 0</span></div>
      <p class="sd-note">Thử kéo ρ trong widget ở bài giảng phần 4.</p></div></div>`),

    S('Ba tài sản: ma trận hiệp phương sai', `<div class="sd-cols2"><div><div class="sd-f sm">σ<sub>P</sub><sup>2</sup> = Σ<sub>i</sub>Σ<sub>j</sub> w<sub>i</sub>w<sub>j</sub>Cov<sub>ij</sub></div>
      <div class="sd-tbl grid"><div class="head"><span></span><span>CP</span><span>TP</span><span>TG</span></div><div><span>w</span><span>50%</span><span>30%</span><span>20%</span></div><div><span>σ</span><span>18%</span><span>10%</span><span>5%</span></div><div><span>ρ</span><span>CP-TP 0,4</span><span>TP-TG 0,2</span><span>CP-TG 0</span></div></div></div>
      <div><p class="sd-cap">Đóng góp vào σ<sub>P</sub><sup>2</sup>:</p><div class="sd-tbl"><div><span>3 ô phương sai</span><span>0,0081 + 0,0009 + 0,0001</span></div><div><span>Các ô hiệp phương sai</span><span>0,00216 + 0,00012 + 0</span></div><div><span>Tổng</span><span>0,01138</span></div></div>
      <p class="sd-note">σ<sub>P</sub> = <b>10,67%</b> · E(R<sub>P</sub>) = <b>6,60%</b>. N tài sản: N phương sai, N(N - 1)/2 cặp hiệp phương sai.</p></div></div>`),

    S('Danh mục phương sai nhỏ nhất (MVP)', `<div class="sd-f">w<sub>A</sub><sup>*</sup> = ${frac('σ<sub>B</sub><sup>2</sup> - Cov', 'σ<sub>A</sub><sup>2</sup> + σ<sub>B</sub><sup>2</sup> - 2Cov')}</div>
      <div class="sd-cols3"><div class="sd-card"><b>Tỷ trọng</b><p>(0,0064 - 0,0032) / 0,04</p><p><b>8%</b> cổ phiếu · <b>92%</b> trái phiếu</p></div>
      <div class="sd-card acc"><b>Kết quả</b><p>E = 4,48%</p><p>σ = <b>7,84%</b> &lt; 8% của trái phiếu!</p></div>
      <div class="sd-card"><b>ρ = -1</b><p>w<sub>A</sub> = σ<sub>B</sub> / (σ<sub>A</sub> + σ<sub>B</sub>)</p><p>8/28 = 28,57% → σ = 0</p></div></div>
      <p class="sd-note">w<sup>*</sup> âm = phải bán khống. Không cho bán khống → dồn hết vào tài sản ít rủi ro.</p>`),

    S('Đường biên hiệu quả', `<div class="sd-cols2 wide-left"><div>${frontier()}</div>
      <div><div class="sd-rule up">Phía trên MVP <b>Hiệu quả</b></div><div class="sd-rule down">Phía dưới MVP <b>Bị lấn át</b></div>
      <p class="sd-note">Cùng σ, luôn có danh mục phía trên cho E(R) cao hơn. Nhà đầu tư hợp lý chỉ chọn trên đường liền.</p></div></div>`),

    S('Ngại rủi ro và hàm hữu dụng', `<div class="sd-f">U = E(R) - ½ × A × σ<sup>2</sup></div>
      <div class="sd-cols2"><div><div class="sd-tbl grid"><div class="head"><span></span><span>U với A = 4</span><span>U với A = 2</span></div><div><span>X: 6%, σ 10%</span><span><b>4,00%</b></span><span>5,00%</span></div><div><span>Y: 9%, σ 18%</span><span>2,52%</span><span><b>5,76%</b></span></div><div><span>Z: 12%, σ 28%</span><span>-3,68%</span><span>4,16%</span></div></div></div>
      <div><p>A &gt; 0 ngại rủi ro · A = 0 trung lập · A &lt; 0 ưa rủi ro</p><p class="sd-note">U = lợi suất tương đương chắc chắn. E và σ dùng <b>thập phân</b>.</p></div></div>`),

    S('Đường bàng quan', `<div class="sd-cols2 wide-left"><div>${indiffCurves()}</div>
      <div><p>Mỗi đường = các cặp (σ, E) cho <b>cùng U</b>.</p><div class="sd-steps"><span>Dốc lên, lồi: thêm rủi ro phải được bù</span><span>A lớn → đường dốc hơn</span><span>Đường càng cao → U càng lớn</span></div></div></div>`),

    S('Đường phân bổ vốn (CAL)', `<div class="sd-cols2 wide-left"><div>${frontier({ cal: true })}</div>
      <div><div class="sd-f sm">E(R<sub>C</sub>) = R<sub>f</sub> + ${frac('E(R<sub>P</sub>) - R<sub>f</sub>', 'σ<sub>P</sub>')}σ<sub>C</sub></div>
      <p>Độ dốc = <b>Sharpe ratio</b>. CAL tốt nhất tiếp xúc đường biên tại <b>T</b>.</p>
      <p class="sd-note">T: 70,27% cổ phiếu, E = 8,22%, σ = 14,72%, Sharpe = 0,354.</p></div></div>`),

    S('Danh mục tối ưu của từng người', `<div class="sd-cols2 wide-left"><div>${frontier({ cal: true, indiff: true })}</div>
      <div><div class="sd-f sm">y<sup>*</sup> = ${frac('E(R<sub>P</sub>) - R<sub>f</sub>', 'A σ<sub>P</sub><sup>2</sup>')}</div>
      <p class="sd-cap">Ví dụ bài giảng: R<sub>f</sub> 3%, E 10%, σ 18%</p>
      <div class="sd-rule">A = 4 → y<sup>*</sup> = <b>54%</b></div><div class="sd-rule down">A = 2 → y<sup>*</sup> = <b>108% (vay)</b></div></div></div>`),

    S('Danh mục thị trường và CML', `<div class="sd-f">CML: E(R<sub>P</sub>) = R<sub>f</sub> + ${frac('E(R<sub>M</sub>) - R<sub>f</sub>', 'σ<sub>M</sub>')} × σ<sub>P</sub></div>
      <div class="sd-cols2"><div class="sd-card acc"><b>Two-fund separation</b><p>Cùng kỳ vọng → mọi người nắm <b>cùng</b> danh mục thị trường M. A chỉ quyết định tỷ lệ R<sub>f</sub> và M.</p></div>
      <div class="sd-card"><b>R<sub>f</sub> 3% · E(R<sub>M</sub>) 9% · σ<sub>M</sub> 16%</b><p>σ = 12% → E = <b>7,50%</b> (75% M)</p><p>σ = 20% → E = <b>10,50%</b> (125% M, vay)</p></div></div>
      <p class="sd-note">CML dùng σ (tổng rủi ro). SML dùng beta - học ở Portfolio Management.</p>`),

    S('Bổ sung: Roy\'s safety-first', `<div class="sd-f">SFRatio = ${frac('E(R<sub>P</sub>) - R<sub>L</sub>', 'σ<sub>P</sub>')}</div>
      <div class="sd-cols3"><div class="sd-card"><b>A: 9%, σ 12%</b><p>6/12 = 0,50</p></div><div class="sd-card acc"><b>B: 6%, σ 5%</b><p>3/5 = <b>0,60</b> ✓</p></div><div class="sd-card"><b>C: 12%, σ 20%</b><p>9/20 = 0,45</p></div></div>
      <p class="sd-note">Ngưỡng R<sub>L</sub> = 3%. Chọn SFRatio lớn nhất = xác suất rơi dưới ngưỡng nhỏ nhất (giả định phân phối chuẩn).</p>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>Phương sai theo xác suất: không chia n - 1</span><span>Cov = ρσ<sub>A</sub>σ<sub>B</sub></span>
      <span>σ<sub>P</sub>: bình phương w, nhân 2 ở Cov</span><span>ρ giảm: σ<sub>P</sub> giảm, E(R<sub>P</sub>) không đổi</span>
      <span>Hiệu quả = phía trên MVP</span><span>U = E(R) - ½Aσ<sup>2</sup></span>
      <span>y<sup>*</sup> = (E - R<sub>f</sub>)/(Aσ<sup>2</sup>)</span><span>CML = CAL qua danh mục thị trường</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 10 câu, mục tiêu ≥ 7 câu đúng.</p>`),
  ];

  addDeck('QM-08', `Slide Portfolio Risk & Return - bản thiết kế riêng (${slides.length} slide)`, slides);
}());
