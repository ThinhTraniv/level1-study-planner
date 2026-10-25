// Bộ slide tự thiết kế cho QM-05 Statistical Characteristics of Asset Returns.
(function () {
  const { frac, slide } = window.CFAH;
  const K = 'QM-05 · Asset Returns';
  const S = (title, body, opt = {}) => slide(title, body, { kicker: K, ...opt });

  // Trục số ngang dùng chung. lo/hi: khoảng giá trị; trả về hàm đổi giá trị sang tọa độ x.
  const scale = (lo, hi, l = 40, r = 560) => v => l + ((v - lo) / (hi - lo)) * (r - l);

  // Biểu đồ chấm cho dữ liệu ví dụ 2.1, đánh dấu mean và median.
  function dotPlot() {
    const data = [-2, 3, 4, 6, 6, 6, 7, 9, 11, 40];
    const x = scale(-5, 42), y0 = 150;
    const mean = data.reduce((a, b) => a + b, 0) / data.length;
    const cnt = {};
    let s = `<svg viewBox="0 0 600 230" class="sv big" role="img" aria-label="Biểu đồ chấm lợi suất 10 năm">`;
    s += `<line x1="30" y1="${y0}" x2="570" y2="${y0}" class="sv-axis"/>`;
    [0, 10, 20, 30, 40].forEach(v => { s += `<line x1="${x(v)}" y1="${y0}" x2="${x(v)}" y2="${y0 + 6}" class="sv-axis"/><text x="${x(v)}" y="${y0 + 28}" class="sv-muted">${v}%</text>`; });
    data.forEach(v => { cnt[v] = (cnt[v] || 0) + 1; s += `<circle cx="${x(v)}" cy="${y0 - 14 - (cnt[v] - 1) * 22}" r="9" class="sv-dot"/>`; });
    s += `<line x1="${x(6)}" y1="40" x2="${x(6)}" y2="${y0}" class="sv-up"/><text x="${x(6) - 8}" y="34" class="sv-txt sv-t-up" text-anchor="end">Median = Mode = 6</text>`;
    s += `<line x1="${x(mean)}" y1="60" x2="${x(mean)}" y2="${y0}" class="sv-down"/><text x="${x(mean) + 8}" y="56" class="sv-txt sv-t-down" text-anchor="start">Mean = 9</text>`;
    s += `<text x="${x(40)}" y="${y0 - 40}" class="sv-muted">outlier</text>`;
    s += `<text x="300" y="${y0 + 64}" class="sv-muted">Lợi suất 10 năm: -2, 3, 4, 6, 6, 6, 7, 9, 11, 40</text>`;
    return `${s}</svg>`;
  }

  // Box-and-whisker của cùng dữ liệu.
  function boxPlot() {
    const x = scale(-5, 42), y = 70;
    let s = `<svg viewBox="0 0 600 170" class="sv big" role="img" aria-label="Biểu đồ hộp">`;
    s += `<line x1="${x(-2)}" y1="${y}" x2="${x(3.75)}" y2="${y}" class="sv-axis"/><line x1="${x(9.5)}" y1="${y}" x2="${x(11)}" y2="${y}" class="sv-axis"/>`;
    s += `<line x1="${x(-2)}" y1="${y - 14}" x2="${x(-2)}" y2="${y + 14}" class="sv-axis"/><line x1="${x(11)}" y1="${y - 14}" x2="${x(11)}" y2="${y + 14}" class="sv-axis"/>`;
    s += `<rect x="${x(3.75)}" y="${y - 28}" width="${x(9.5) - x(3.75)}" height="56" class="sv-panel"/>`;
    s += `<line x1="${x(6)}" y1="${y - 28}" x2="${x(6)}" y2="${y + 28}" class="sv-up"/>`;
    s += `<circle cx="${x(40)}" cy="${y}" r="8" class="sv-dot"/>`;
    s += `<text x="${x(3.75)}" y="${y + 52}" class="sv-muted">Q1 = 3,75</text><text x="${x(9.5) + 6}" y="${y + 52}" class="sv-muted" text-anchor="start">Q3 = 9,5</text><text x="${x(6)}" y="${y - 38}" class="sv-txt sv-t-up">Median 6</text>`;
    s += `<text x="${x(40) + 10}" y="${y - 22}" class="sv-muted" text-anchor="end">40 &gt; Q3 + 1,5 × IQR</text>`;
    s += `<text x="${(x(3.75) + x(9.5)) / 2}" y="${y + 80}" class="sv-txt">IQR = 5,75</text>`;
    return `${s}</svg>`;
  }

  // Cột lợi suất cổ phiếu B với đường mục tiêu B = 5%.
  function downsideBars() {
    const data = [12, -5, 8, 20, -3, 10], target = 5;
    const t = 20, b = 230, ys = v => t + ((22 - v) / 30) * (b - t);
    let s = `<svg viewBox="0 0 600 270" class="sv big" role="img" aria-label="Lợi suất so với mục tiêu">`;
    s += `<line x1="50" y1="${ys(0)}" x2="580" y2="${ys(0)}" class="sv-axis"/>`;
    data.forEach((v, i) => {
      const cx = 95 + i * 85, below = v <= target;
      s += `<line x1="${cx}" y1="${ys(0)}" x2="${cx}" y2="${ys(v)}" class="${below ? 'sv-down' : 'sv-up'}" style="stroke-width:34"/>`;
      s += `<text x="${cx}" y="${v >= 0 ? ys(v) - 8 : ys(v) + 22}" class="sv-txt ${below ? 'sv-t-down' : ''}">${v}</text>`;
    });
    s += `<line x1="50" y1="${ys(target)}" x2="580" y2="${ys(target)}" class="sv-dash"/><text x="54" y="${ys(target) - 8}" class="sv-muted" text-anchor="start">B = 5%</text>`;
    s += `<text x="300" y="262" class="sv-muted">Chỉ 2 năm màu đỏ (≤ B) vào tử số; mẫu số vẫn là n - 1 = 5</text>`;
    return `${s}</svg>`;
  }

  // Ba phân phối: lệch trái, đối xứng, lệch phải (gamma k = 3 và ảnh đối xứng của nó).
  function skewCurves() {
    const g = x => (x <= 0 ? 0 : (x * x * Math.exp(-x)) / 2);
    const nrm = x => Math.exp(-((x - 3) ** 2) / 2 / 1.6) / Math.sqrt(2 * Math.PI * 1.6);
    const panel = (ox, f, lo, hi, marks, label) => {
      const w = 180, h = 150, top = 30;
      const xs = v => ox + ((v - lo) / (hi - lo)) * w, ys = p => top + h - (p / 0.32) * h;
      let pts = '';
      for (let v = lo; v <= hi + 1e-9; v += (hi - lo) / 120) pts += `${xs(v).toFixed(1)},${ys(f(v)).toFixed(1)} `;
      let s = `<line x1="${ox}" y1="${top + h}" x2="${ox + w}" y2="${top + h}" class="sv-axis"/><polyline points="${pts}" class="sv-curve"/>`;
      marks.forEach(([v, lab, cls], i) => { s += `<line x1="${xs(v)}" y1="${ys(f(v))}" x2="${xs(v)}" y2="${top + h}" class="sv-dash"/><text x="${xs(v)}" y="${top + h + 20 + i * 18}" class="sv-muted ${cls}">${lab}</text>`; });
      return `${s}<text x="${ox + w / 2}" y="20" class="sv-txt">${label}</text>`;
    };
    const med = 2.6741; // median của gamma(3, 1), tính sẵn
    let s = `<svg viewBox="0 0 600 260" class="sv" role="img" aria-label="Ba dạng phân phối">`;
    s += panel(10, x => g(10 - x), 0, 10, [[7, 'Mean', 'sv-t-down'], [10 - med, 'Median', ''], [8, 'Mode', 'sv-t-up']], 'Lệch trái (âm)');
    s += panel(210, nrm, -1, 7, [[3, 'Mean = Median = Mode', '']], 'Đối xứng');
    s += panel(410, g, 0, 10, [[2, 'Mode', 'sv-t-up'], [med, 'Median', ''], [3, 'Mean', 'sv-t-down']], 'Lệch phải (dương)');
    return `${s}</svg>`;
  }

  // Normal so với phân phối đuôi dày (Laplace) cùng phương sai 1.
  function kurtCurves() {
    const n = x => Math.exp(-x * x / 2) / Math.sqrt(2 * Math.PI);
    const bL = 1 / Math.SQRT2, lap = x => Math.exp(-Math.abs(x) / bL) / (2 * bL);
    const l = 40, r = 560, t = 20, b = 220, xs = v => l + ((v + 4) / 8) * (r - l), ys = p => b - (p / 0.75) * (b - t);
    const line = f => { let p = ''; for (let v = -4; v <= 4.0001; v += 0.05) p += `${xs(v).toFixed(1)},${ys(f(v)).toFixed(1)} `; return p; };
    let s = `<svg viewBox="0 0 600 270" class="sv big" role="img" aria-label="Phân phối đuôi dày so với phân phối chuẩn">`;
    s += `<line x1="${l}" y1="${b}" x2="${r}" y2="${b}" class="sv-axis"/>`;
    s += `<polyline points="${line(n)}" class="sv-dash" fill="none"/>`;
    s += `<polyline points="${line(lap)}" class="sv-curve"/>`;
    s += `<text x="${xs(0.35)}" y="${ys(0.68)}" class="sv-txt" text-anchor="start">Leptokurtic: đỉnh nhọn</text>`;
    s += `<text x="${xs(1.2)}" y="${ys(0.33)}" class="sv-muted" text-anchor="start">Normal (kurtosis = 3)</text>`;
    s += `<text x="${xs(-3.2)}" y="${ys(0.09)}" class="sv-txt sv-t-down">đuôi dày</text><text x="${xs(3.2)}" y="${ys(0.09)}" class="sv-txt sv-t-down">đuôi dày</text>`;
    s += `<text x="300" y="255" class="sv-muted">Cùng mean, cùng phương sai: khác nhau ở đỉnh và hai đuôi</text>`;
    return `${s}</svg>`;
  }

  // Bốn biểu đồ phân tán minh họa correlation.
  function scatters() {
    const e = [0.8, -0.6, 0.3, -0.9, 0.5, -0.2, 0.9, -0.7, 0.1, -0.4];
    const e2 = [0.3, -0.9, 0.8, 0.1, -0.6, 0.9, -0.4, -0.7, 0.5, 0];
    const xsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const sets = [
      ['r gần +1', xsArr.map((x, i) => x + 1.5 * e[i])],
      ['r gần 0', xsArr.map((x, i) => 5.5 + 3 * e2[i])],
      ['r gần -1', xsArr.map((x, i) => 11 - x + 1.5 * e[9 - i])],
      ['r = 0 nhưng có quan hệ!', xsArr.map(x => (x - 5.5) ** 2 / 2)],
    ];
    let s = `<svg viewBox="0 0 600 190" class="sv" role="img" aria-label="Bốn dạng tương quan">`;
    sets.forEach(([lab, ys], k) => {
      const ox = 8 + k * 148, w = 130, top = 30, h = 120;
      s += `<rect x="${ox}" y="${top}" width="${w}" height="${h}" class="sv-panel"/>`;
      xsArr.forEach((x, i) => { s += `<circle cx="${ox + 8 + ((x - 1) / 9) * (w - 16)}" cy="${top + h - 8 - ((ys[i] + 1) / 14) * (h - 16)}" r="4.5" class="sv-dot"/>`; });
      s += `<text x="${ox + w / 2}" y="${top + h + 24}" class="sv-txt ${k === 3 ? 'sv-t-down' : ''}">${lab}</text>`;
    });
    return `${s}</svg>`;
  }

  const slides = [
    S('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Quantitative Methods · QM-05</div>
      <h2>Statistical Characteristics<br>of Asset Returns</h2>
      <p>Tóm tắt một chuỗi lợi suất bằng vài con số</p>
      <div class="sd-chips"><span>Vị trí</span><span>Phân tán</span><span>Skewness · Kurtosis</span><span>Covariance · Correlation</span><span>Semi-deviation · CV</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Bốn câu hỏi về một chuỗi lợi suất', `<div class="sd-grid4">
      <div class="sd-card"><div class="sd-n">1</div><b>Ở đâu?</b><p>Mean, median, mode, quantile</p></div>
      <div class="sd-card"><div class="sd-n">2</div><b>Dao động bao nhiêu?</b><p>Range, MAD, s, downside deviation, CV</p></div>
      <div class="sd-card"><div class="sd-n">3</div><b>Hình dạng ra sao?</b><p>Skewness (lệch), kurtosis (đuôi)</p></div>
      <div class="sd-card acc"><div class="sd-n">4</div><b>Đi cùng tài sản khác thế nào?</b><p>Covariance, correlation</p></div></div>`),

    S('Mean bị outlier kéo đi', `${dotPlot()}
      <p class="sd-note">Một năm 40% kéo mean lên <b>9%</b>, cao hơn 8/10 năm. Median và mode vẫn ở <b>6%</b>.</p>`),

    S('Trimmed và winsorized mean', `<div class="sd-cols2">
      <div class="sd-card"><b>Trimmed 20%</b><p><s>-2</s>, 3, 4, 6, 6, 6, 7, 9, 11, <s>40</s></p><div class="sd-f sm">52 / <b>8</b> = 6,50%</div><small>Bỏ hẳn hai đầu → n giảm</small></div>
      <div class="sd-card acc"><b>Winsorized 20%</b><p><b>3</b>, 3, 4, 6, 6, 6, 7, 9, 11, <b>11</b></p><div class="sd-f sm">66 / <b>10</b> = 6,60%</div><small>Thay hai đầu bằng giá trị kề → n giữ nguyên</small></div></div>
      <p class="sd-note">"20%" là tổng hai đầu: mỗi đầu 10%.</p>`),

    S('Quantile: tìm vị trí rồi nội suy', `<div class="sd-f">L<sub>y</sub> = (n + 1) × ${frac('y', '100')}</div>
      ${boxPlot()}
      <p class="sd-note">Q3: L = 11 × 0,75 = 8,25 → 9 + 0,25 × (11 - 9) = <b>9,5</b>. Nhớ <b>sắp xếp</b> trước.</p>`),

    S('Đo độ phân tán: cổ phiếu B', `<div class="sd-cols2">
      <div><p class="sd-cap">Lợi suất: 12, -5, 8, 20, -3, 10 · X̄ = 7%</p>
      <div class="sd-tbl"><div><span>Range</span><span>20 - (-5) = 25%</span></div><div><span>MAD = Σ|X - X̄| / n</span><span>44 / 6 = 7,33%</span></div><div><span>s² = Σ(X - X̄)² / (n - 1)</span><span>448 / 5 = 89,6</span></div><div><span>s</span><span>9,47%</span></div></div></div>
      <div><div class="sd-rule">MAD ≤ s <b>luôn đúng</b></div><div class="sd-rule">Σ(X - X̄) = 0 <b>nên phải bình phương</b></div><div class="sd-rule">s cùng đơn vị %, <b>dễ diễn giải hơn s²</b></div></div></div>`),

    S('Mẫu hay tổng thể: chia n - 1 hay N?', `<div class="sd-cols2">
      <div class="sd-card"><b>Tổng thể (population)</b><div class="sd-f sm">σ² = ${frac('Σ(X - μ)²', 'N')}</div><p>Cổ phiếu B: σ = <b>8,64%</b></p><small>BA II Plus: σx</small></div>
      <div class="sd-card acc"><b>Mẫu (sample)</b><div class="sd-f sm">s² = ${frac('Σ(X - X̄)²', 'n - 1')}</div><p>Cổ phiếu B: s = <b>9,47%</b></p><small>BA II Plus: Sx</small></div></div>
      <p class="sd-note">Lợi suất lịch sử là <b>mẫu</b>. Chia n - 1 để bù việc X̄ được ước lượng từ chính dữ liệu đó.</p>`),

    S('BA II Plus: DATA → STAT', `<div class="sd-steps">
      <span>① <kbd>2ND</kbd> <kbd>7</kbd> (DATA) · <kbd>2ND</kbd> <kbd>CE/C</kbd> xóa dữ liệu cũ</span>
      <span>② 12 <kbd>ENTER</kbd> <kbd>↓</kbd> <kbd>↓</kbd> · 5 <kbd>+/-</kbd> <kbd>ENTER</kbd> <kbd>↓</kbd> <kbd>↓</kbd> · ... (Y = 1 tự động)</span>
      <span>③ <kbd>2ND</kbd> <kbd>8</kbd> (STAT) · <kbd>2ND</kbd> <kbd>ENTER</kbd> đến khi thấy <b>1-V</b></span>
      <span>④ <kbd>↓</kbd> n = 6 · x̄ = 7 · <b>Sx = 9.4657</b> · σx = 8.6410</span></div>
      <p class="sd-note">Hai biến: chọn <b>LIN</b>, đọc Sx, Sy, r. Covariance = r × Sx × Sy. Máy không tính median, MAD, skewness, kurtosis.</p>`),

    S('Downside deviation: chỉ phạt phần xấu', `<div class="sd-cols2 wide-left"><div>${downsideBars()}</div>
      <div><div class="sd-f sm">s<sub>Target</sub> = √[ ${frac('Σ<sub>X ≤ B</sub>(X - B)²', 'n - 1')} ]</div>
      <div class="sd-rule up">(100 + 64) / 5 → <b>5,73%</b></div><div class="sd-rule down">Chia cho 2 → 9,06% <b>sai</b></div>
      <p class="sd-note"><b>Semi-deviation</b>: B = X̄ = 7% → <b>6,99%</b></p></div></div>`),

    S('CV: rủi ro trên mỗi 1% lợi suất', `<div class="sd-f">CV = ${frac('s', 'X̄')} &nbsp; càng <b>thấp</b> càng tốt</div>
      <div class="sd-bars">
      <div class="sd-bar"><span class="sd-bar-l">Quỹ trái phiếu (4%, 3%)</span><span class="sd-bar-t"><i style="width:${(0.75 / 1.8) * 100}%"></i></span><b>0,75</b></div>
      <div class="sd-bar"><span class="sd-bar-l">Cổ phiếu B (7%, 9,47%)</span><span class="sd-bar-t"><i style="width:${(1.35 / 1.8) * 100}%"></i></span><b>1,35</b></div>
      <div class="sd-bar"><span class="sd-bar-l">Quỹ cổ phiếu (11%, 18%)</span><span class="sd-bar-t"><i style="width:${(1.64 / 1.8) * 100}%"></i></span><b>1,64</b></div></div>
      <p class="sd-note">CV không có đơn vị nên so sánh được tài sản có lợi suất khác nhau. Vô nghĩa khi X̄ gần 0 hoặc âm.</p>`),

    S('Skewness: mean luôn bị kéo về phía đuôi', `${skewCurves()}
      <div class="sd-f sm">Skewness ≈ ${frac('1', 'n')} Σ ${frac('(X - X̄)³', 's³')} &nbsp;·&nbsp; đối xứng = 0</div>`),

    S('Skewness trong đầu tư', `<div class="sd-cols2">
      <div class="sd-card"><b>Lệch phải (+)</b><p>Nhiều lỗ nhỏ, thỉnh thoảng lãi lớn</p><p>Mode &lt; Median &lt; Mean</p><small>Mua quyền chọn, cổ phiếu khởi nghiệp</small></div>
      <div class="sd-card acc"><b>Lệch trái (-)</b><p>Nhiều lãi nhỏ, thỉnh thoảng lỗ rất lớn</p><p>Mean &lt; Median &lt; Mode</p><small>Bán quyền chọn, trái phiếu rủi ro vỡ nợ</small></div></div>
      <p class="sd-note">Quỹ 3, 4, 2, 5, 3, 4, 3, -18: mean <b>0,75</b> &lt; median <b>3</b> = mode, skewness ≈ <b>-1,80</b>. Nhà đầu tư thích lệch phải, ngại lệch trái.</p>`),

    S('Kurtosis: chuyện của hai cái đuôi', `<div class="sd-cols2 wide-left"><div>${kurtCurves()}</div>
      <div><div class="sd-f sm">Excess kurtosis = Kurtosis - 3</div>
      <div class="sd-rule down">Excess &gt; 0 <b>Leptokurtic</b></div><div class="sd-rule">Excess = 0 <b>Mesokurtic</b></div><div class="sd-rule up">Excess &lt; 0 <b>Platykurtic</b></div>
      <p class="sd-note">Lợi suất thực tế thường đuôi dày: giả định normal sẽ <b>đánh giá thấp</b> rủi ro thua lỗ lớn.</p></div></div>`),

    S('Covariance → correlation', `<div class="sd-cols2">
      <div><div class="sd-f sm">s<sub>XY</sub> = ${frac('Σ(X - X̄)(Y - Ȳ)', 'n - 1')}</div><div class="sd-f sm">r = ${frac('s<sub>XY</sub>', 's<sub>X</sub> s<sub>Y</sub>')} ∈ [-1; +1]</div></div>
      <div class="sd-steps"><span>X: 10, 5, -2, 14, 8 · Y: 6, 3, 1, 9, 6</span><span>Σ tích độ lệch = 72 → s<sub>XY</sub> = 72/4 = <b>18</b></span><span>s<sub>X</sub> = 6 · s<sub>Y</sub> = 3,08</span><span>r = 18 / (6 × 3,08) = <b>0,97</b></span></div></div>
      <p class="sd-note">Covariance cho biết <b>chiều</b>; correlation cho biết cả chiều lẫn <b>độ mạnh</b>.</p>`),

    S('Correlation chỉ thấy quan hệ tuyến tính', `${scatters()}
      <div class="sd-cols3">
      <div class="sd-card"><b>Phi tuyến</b><p>Quan hệ hình chữ U vẫn có r = 0</p></div>
      <div class="sd-card"><b>Outlier</b><p>Một điểm có thể tạo ra hoặc xóa tương quan</p></div>
      <div class="sd-card acc"><b>Spurious</b><p>Do ngẫu nhiên hoặc biến thứ ba. Không phải nhân quả</p></div></div>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>Outlier → dùng median, trimmed, winsorized</span><span>Quantile: L = (n + 1) × y/100, nội suy</span>
      <span>Mẫu chia n - 1; máy đọc Sx</span><span>MAD chia n, luôn ≤ s</span>
      <span>Downside deviation: chỉ X ≤ B, chia n - 1</span><span>CV = s / X̄, thấp là tốt</span>
      <span>Lệch phải: mode &lt; median &lt; mean</span><span>Excess kurtosis &gt; 0: đuôi dày</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 10 câu, mục tiêu ≥ 7 câu đúng.</p>`),
  ];

  window.CFAH.addDeck('QM-05', `Slide Asset Returns - bản thiết kế riêng (${slides.length} slide)`, slides);
}());
