// Bộ slide tự thiết kế cho QM-09 Simulation of Financial Asset Prices and Returns.
(function () {
  const { frac, slide, addDeck } = window.CFAH;
  if (!window.LESSONS['QM-09']) return;
  const K = { kicker: 'QM-09 · Simulation' };
  const S = (title, body) => slide(title, body, K);

  // Bộ sinh số ngẫu nhiên có hạt giống cố định để slide luôn giống nhau mỗi lần mở.
  function rng(seed) {
    let a = seed >>> 0;
    const u = () => { a = (a + 0x6D2B79F5) >>> 0; let x = a; x = Math.imul(x ^ (x >>> 15), x | 1); x ^= x + Math.imul(x ^ (x >>> 7), x | 61); return ((x ^ (x >>> 14)) >>> 0) / 4294967296; };
    return () => { let p = 0, q = 0; while (p === 0) p = u(); while (q === 0) q = u(); return Math.sqrt(-2 * Math.log(p)) * Math.cos(2 * Math.PI * q); };
  }

  // Phân phối chuẩn của lợi suất và lognormal của giá.
  function pdfPair() {
    const W = 600, H = 230, b = 190;
    const npdf = x => Math.exp(-x * x / 2) / Math.sqrt(2 * Math.PI);
    const lpdf = x => (x <= 0 ? 0 : Math.exp(-Math.pow(Math.log(x), 2) / (2 * 0.25)) / (x * 0.5 * Math.sqrt(2 * Math.PI)));
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv" role="img" aria-label="Phân phối chuẩn và lognormal">`;
    // Trái: chuẩn trên [-3.5, 3.5]
    const xl = x => 30 + ((x + 3.5) / 7) * 250, yl = y => b - y * 380;
    let p1 = '';
    for (let x = -3.5; x <= 3.5001; x += 0.05) p1 += `${xl(x).toFixed(1)},${yl(npdf(x)).toFixed(1)} `;
    s += `<line x1="30" y1="${b}" x2="280" y2="${b}" class="sv-axis"/><polyline points="${p1}" class="sv-curve"/><line x1="${xl(0)}" y1="${b}" x2="${xl(0)}" y2="${yl(npdf(0))}" class="sv-dash"/>`;
    s += `<text x="155" y="${b + 22}" class="sv-muted">lợi suất ghép liên tục r</text><text x="155" y="20" class="sv-txt">Chuẩn: đối xứng</text>`;
    // Phải: lognormal trên (0, 4]
    const xr = x => 330 + (x / 4) * 250, yr = y => b - y * 170;
    let p2 = `${xr(0)},${b} `;
    for (let x = 0.02; x <= 4.0001; x += 0.02) p2 += `${xr(x).toFixed(1)},${yr(lpdf(x)).toFixed(1)} `;
    s += `<line x1="330" y1="${b}" x2="580" y2="${b}" class="sv-axis"/><line x1="330" y1="30" x2="330" y2="${b}" class="sv-axis"/><polyline points="${p2}" class="sv-pv" fill="none"/>`;
    s += `<text x="330" y="${b + 22}" class="sv-muted">0</text><text x="470" y="${b + 22}" class="sv-muted">giá P (chặn dưới bởi 0)</text><text x="455" y="20" class="sv-txt sv-t-pv">Lognormal: lệch phải</text>`;
    s += `<text x="300" y="110" class="sv-txt">→ e<tspan dy="-8" style="font-size:11px">r</tspan></text>`;
    return `${s}</svg>`;
  }

  // 20 đường giá Monte Carlo + histogram giá cuối kỳ của 2.000 đường.
  function mcPaths() {
    const z = rng(2027), steps = 52, mu = 0.08 / steps, sg = 0.25 / Math.sqrt(steps);
    const paths = [];
    for (let k = 0; k < 20; k++) { const p = [100]; for (let i = 1; i <= steps; i++) p.push(p[i - 1] * Math.exp(mu + sg * z())); paths.push(p); }
    const lo = 50, hi = 190, l = 40, r = 400, t = 15, b = 245;
    const xs = i => l + (i / steps) * (r - l), ys = v => b - ((Math.min(Math.max(v, lo), hi) - lo) / (hi - lo)) * (b - t);
    let s = `<svg viewBox="0 0 600 280" class="sv" role="img" aria-label="Đường giá mô phỏng và phân phối giá cuối kỳ">`;
    s += `<line x1="${l}" y1="${b}" x2="${r}" y2="${b}" class="sv-axis"/><line x1="${l}" y1="${t}" x2="${l}" y2="${b}" class="sv-axis"/>`;
    s += `<line x1="${l}" y1="${ys(100)}" x2="590" y2="${ys(100)}" class="sv-dash"/><text x="${l - 6}" y="${ys(100) + 5}" class="sv-muted" text-anchor="end">100</text>`;
    paths.forEach(p => { s += `<polyline points="${p.map((v, i) => `${xs(i).toFixed(1)},${ys(v).toFixed(1)}`).join(' ')}" fill="none" class="${p[steps] >= 100 ? 'sv-up' : 'sv-down'}" style="stroke-width:1.3;opacity:0.75"/>`; });
    // Histogram nằm ngang bên phải.
    const z2 = rng(75), bins = new Array(14).fill(0), bw = (hi - lo) / 14;
    for (let k = 0; k < 2000; k++) { let p = 100; for (let i = 0; i < steps; i++) p *= Math.exp(mu + sg * z2()); const j = Math.floor((Math.min(Math.max(p, lo), hi - 0.01) - lo) / bw); bins[j]++; }
    const mx = Math.max(...bins);
    bins.forEach((c, j) => { const y1 = ys(lo + (j + 1) * bw), y2 = ys(lo + j * bw); s += `<rect x="430" y="${(y1 + 1).toFixed(1)}" width="${((c / mx) * 150).toFixed(1)}" height="${(y2 - y1 - 2).toFixed(1)}" class="sv-panel" style="fill:var(--accent);opacity:0.55"/>`; });
    s += `<text x="${(l + r) / 2}" y="272" class="sv-muted">20 đường giá, 52 tuần</text><text x="510" y="272" class="sv-muted">2.000 giá cuối kỳ</text>`;
    return `${s}</svg>`;
  }

  // Sơ đồ bootstrap: mẫu gốc → các mẫu lặp có hoàn lại.
  function bootDiagram() {
    const orig = ['4', '-2', '6', '1', '3'], res = [['6', '6', '-2', '3', '1', '2,8'], ['4', '1', '1', '3', '-2', '1,4'], ['6', '3', '4', '6', '1', '4,0']];
    const box = (x, y, v, cls) => `<rect x="${x}" y="${y}" width="40" height="30" rx="6" class="${cls}"/><text x="${x + 20}" y="${y + 21}" class="sv-txt">${v}</text>`;
    let s = `<svg viewBox="0 0 600 250" class="sv" role="img" aria-label="Bootstrap rút có hoàn lại">`;
    s += `<text x="20" y="38" class="sv-muted" text-anchor="start">Mẫu gốc</text>`;
    orig.forEach((v, i) => { s += box(120 + i * 48, 15, v, 'sv-key'); });
    s += `<text x="480" y="36" class="sv-txt" text-anchor="start">x̄ = 2,4</text>`;
    s += `<line x1="240" y1="52" x2="240" y2="80" class="sv-pv"/><text x="252" y="72" class="sv-muted" text-anchor="start">rút có hoàn lại, n = 5</text>`;
    res.forEach((row, k) => {
      const y = 92 + k * 50;
      s += `<text x="20" y="${y + 21}" class="sv-muted" text-anchor="start">Mẫu lặp ${k + 1}</text>`;
      row.slice(0, 5).forEach((v, i) => { s += box(120 + i * 48, y, v, 'sv-panel'); });
      s += `<text x="480" y="${y + 21}" class="sv-txt sv-t-pv" text-anchor="start">x̄ = ${row[5]}</text>`;
    });
    return `${s}</svg>`;
  }

  // Sơ đồ chung: đầu vào ngẫu nhiên → mô hình → phân phối kết quả.
  const flow = `<svg viewBox="0 0 600 170" class="sv big" role="img" aria-label="Quy trình mô phỏng">
    <rect x="10" y="40" width="160" height="80" rx="12" class="sv-panel"/><text x="90" y="75" class="sv-txt">Kịch bản</text><text x="90" y="100" class="sv-muted">yếu tố rủi ro</text>
    <line x1="175" y1="80" x2="215" y2="80" class="sv-pv"/>
    <rect x="220" y="40" width="160" height="80" rx="12" class="sv-panel"/><text x="300" y="75" class="sv-txt">Mô hình</text><text x="300" y="100" class="sv-muted">định giá lại</text>
    <line x1="385" y1="80" x2="425" y2="80" class="sv-pv"/>
    <rect x="430" y="40" width="160" height="80" rx="12" class="sv-panel"/><text x="510" y="75" class="sv-txt">Phân phối</text><text x="510" y="100" class="sv-muted">mean, σ, phân vị</text>
    <text x="300" y="158" class="sv-muted">lặp lại hàng nghìn lần</text></svg>`;

  // Kết quả tệ nhất của historical simulation (ví dụ 4.1).
  function worstBars() {
    const v = [5.1, 4.4, 3.9, 3.6, 3.4, 3.2, 3.1, 3.0, 2.95, 2.9, 2.8, 2.7];
    return `<div class="sd-bars">${v.map((x, i) => `<div class="sd-bar"><span class="sd-bar-l">Tệ thứ ${i + 1}</span><span class="sd-bar-t"><i style="width:${(x / 5.2) * 100}%;${i === 9 ? '' : 'opacity:0.45'}"></i></span><b>${i === 9 ? '<u>' : ''}-${String(x).replace('.', ',')}%${i === 9 ? '</u>' : ''}</b></div>`).join('')}</div>`;
  }

  const slides = [
    slide('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Quantitative Methods · QM-09</div>
      <h2>Simulation of Financial<br>Asset Prices and Returns</h2>
      <p>Tạo hàng nghìn tương lai để đo một tương lai chưa biết</p>
      <div class="sd-chips"><span>LOS 1 · Historical simulation</span><span>LOS 2 · Bootstrap resampling</span><span>LOS 3 · Monte Carlo</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Mô phỏng là gì?', `${flow}
      <div class="sd-cols3"><div class="sd-card"><b>Historical</b><p>Kịch bản = đúng quá khứ</p></div><div class="sd-card"><b>Bootstrap</b><p>Rút lại quá khứ, có hoàn lại</p></div><div class="sd-card acc"><b>Monte Carlo</b><p>Sinh từ phân phối giả định</p></div></div>`),

    S('Lợi suất ghép liên tục', `<div class="sd-cols2"><div><div class="sd-f">r = ln(${frac('P<sub>1</sub>', 'P<sub>0</sub>')}) = ln(1 + HPR)</div><div class="sd-f sm">r<sub>0,T</sub> = r<sub>0,1</sub> + r<sub>1,2</sub> + ... (cộng được)</div>
      <p class="sd-note">BA II Plus: 1.1 <kbd>LN</kbd> = 0,0953 · e<sup>x</sup>: <kbd>2ND</kbd> <kbd>LN</kbd></p></div>
      <div><div class="sd-tbl"><div><span>50 → 55</span><span>ln(1,10) = 9,53%</span></div><div><span>55 → 52</span><span>ln(52/55) = -5,61%</span></div><div><span>Cả kỳ</span><span><b>3,92%</b> = ln(52/50)</span></div></div>
      <p class="sd-note">HPR: +10% và -5,45% cộng ra 4,55%, nhưng HPR thật chỉ 4,00%.</p></div></div>`),

    S('Chuẩn cho lợi suất, lognormal cho giá', `${pdfPair()}
      <p class="sd-note">r i.i.d. chuẩn → P<sub>T</sub> = P<sub>0</sub>e<sup>r<sub>0,T</sub></sup> có phân phối <b>lognormal</b>: luôn dương, đuôi dài về phía giá cao. Giá có phân phối chuẩn sẽ cho phép giá âm.</p>`),

    S('Quy đổi theo thời gian', `<div class="sd-cols2"><div><div class="sd-f">μ<sub>T</sub> = μ × T</div><div class="sd-f">σ<sub>T</sub> = σ × √T</div></div>
      <div><div class="sd-card acc"><b>Tháng → năm</b><p>μ = 0,8%/tháng → <b>9,6%</b>/năm</p><p>σ = 5%/tháng → 5% × √12 = <b>17,32%</b></p></div>
      <div class="sd-rule down">Bẫy: 5% × 12 = 60% <b>Sai</b></div></div></div>`),

    S('Bảy bước của mọi bài mô phỏng', `<div class="sd-cols2"><div class="sd-steps">
      <span>① Đại lượng cần đo</span><span>② Yếu tố rủi ro và mô hình</span><span>③ Khung thời gian (số kỳ con)</span><span>④ Nguồn kịch bản</span></div>
      <div class="sd-steps"><span>⑤ Tạo một lần thử, tính kết quả</span><span>⑥ Lặp lại hàng nghìn lần</span><span>⑦ Tổng hợp: mean, σ, phân vị (phái sinh: chiết khấu)</span></div></div>
      <p class="sd-note"><b>Garbage in, garbage out</b>: mô phỏng không loại bỏ rủi ro mô hình.</p>`),

    S('Historical simulation: VaR từ quá khứ', `<div class="sd-cols2"><div><p class="sd-cap">200 ngày lịch sử áp lên danh mục hiện tại (12 kết quả tệ nhất):</p>${worstBars()}</div>
      <div><div class="sd-steps"><span>5% × 200 = 10 kịch bản</span><span>Kết quả tệ thứ 10: <b>-2,9%</b></span><span>VaR 5% = 2,9% × 10 triệu = <b>290.000 USD</b></span></div>
      <p class="sd-note">5% số ngày lỗ <b>ít nhất</b> 290.000 USD. VaR không phải lỗ tối đa.</p></div></div>`),

    S('Historical simulation: ưu và nhược', `<div class="sd-cols2"><div>
      <div class="sd-rule up">Không giả định phân phối <b>+</b></div><div class="sd-rule up">Giữ đuôi dày và tương quan thực tế <b>+</b></div><div class="sd-rule up">Dễ giải thích, định giá lại toàn bộ <b>+</b></div></div>
      <div><div class="sd-rule down">Giả định quá khứ lặp lại <b>-</b></div><div class="sd-rule down">Không có kịch bản chưa từng xảy ra <b>-</b></div><div class="sd-rule down">Không làm được what-if <b>-</b></div></div></div>
      <p class="sd-note">Mỗi quan sát lịch sử dùng <b>đúng một lần</b>; số kịch bản = số ngày dữ liệu.</p>`),

    S('Monte Carlo: từ số ngẫu nhiên đến đường giá', `<div class="sd-cols2"><div><div class="sd-steps"><span>u ~ Đều(0; 1)</span><span>z = F<sup>-1</sup>(u) (biến đổi ngược)</span><span>r = μ + σz</span><span>P<sub>t+1</sub> = P<sub>t</sub> × e<sup>r</sup></span></div></div>
      <div><p class="sd-cap">P<sub>0</sub> = 100, μ = 1%, σ = 5%/tháng</p><div class="sd-tbl"><div><span>z = 0,8 → r = 5,0%</span><span>105,13</span></div><div><span>z = -1,2 → r = -5,0%</span><span>100,00</span></div><div><span>z = 0,3 → r = 2,5%</span><span><b>102,53</b></span></div></div>
      <p class="sd-note">Đây chỉ là <b>một</b> lần thử.</p></div></div>`),

    S('Lặp lại hàng nghìn lần', `${mcPaths()}
      <p class="sd-note">μ = 8%, σ = 25%/năm. Phân phối giá cuối kỳ <b>lệch phải</b>: trung bình &gt; trung vị. Sai số chuẩn ∝ 1/√n: giảm một nửa sai số cần <b>gấp 4</b> số lần thử.</p>`),

    S('Monte Carlo trong đầu tư', `<div class="sd-cols3">
      <div class="sd-card"><div class="sd-n">1</div><b>VaR, stress test</b><p>Mô phỏng yếu tố rủi ro, đọc phân vị lãi lỗ; đổi σ để thử kịch bản xấu.</p></div>
      <div class="sd-card acc"><div class="sd-n">2</div><b>Phái sinh phức tạp</b><p>Quyền chọn châu Á: payoff 8; 0; 12; 1; 0 → trung bình 4,20 → /1,04 = <b>4,04</b></p></div>
      <div class="sd-card"><div class="sd-n">3</div><b>Kế hoạch hưu trí</b><p>Mô phỏng lợi suất và dòng rút tiền; đếm tỷ lệ đường cạn tiền.</p></div></div>
      <p class="sd-note">Nhược điểm: phụ thuộc giả định, tốn tính toán, không cho hiểu biết nhân quả như lời giải giải tích.</p>`),

    S('Bootstrap resampling', `<div class="sd-cols2 wide-left"><div>${bootDiagram()}</div>
      <div><div class="sd-steps"><span>Rút <b>có hoàn lại</b>, cùng n</span><span>Tính thống kê trên mỗi mẫu lặp</span><span>σ của các thống kê = sai số chuẩn</span></div>
      <p class="sd-note">5 mẫu lặp: SE = <b>1,38%</b>; công thức s/√n = 1,36%.</p></div></div>`),

    S('Bootstrap trong mô phỏng đầu tư', `<div class="sd-cols2"><div class="sd-card acc"><b>Ưu điểm</b><p>Không giả định phân phối; giữ đuôi dày, độ lệch thực tế.</p><p>Tạo được rất nhiều đường mới từ một lịch sử.</p><p>Rút cả hàng (mọi tài sản cùng tháng) → giữ tương quan.</p></div>
      <div class="sd-card"><b>Nhược điểm</b><p>Chỉ rút được giá trị <b>đã quan sát</b>.</p><p>Rút độc lập → mất tự tương quan, mất cụm biến động.</p><p>Phụ thuộc mẫu gốc có đại diện không.</p></div></div>`),

    S('So sánh ba phương pháp', `<div class="sd-tbl grid">
      <div class="head"><span></span><span>Historical</span><span>Bootstrap</span><span>Monte Carlo</span></div>
      <div><span>Nguồn</span><span>Quá khứ 1 lần</span><span>Rút lại quá khứ</span><span>Phân phối giả định</span></div>
      <div><span>Giả định phân phối</span><span>Không</span><span>Không</span><span>Có</span></div>
      <div><span>Số kịch bản</span><span>= số quan sát</span><span>Tùy ý</span><span>Tùy ý</span></div>
      <div><span>Kịch bản mới (một kỳ)</span><span>Không</span><span>Không</span><span>Có</span></div>
      <div><span>Rủi ro chính</span><span>Quá khứ không lặp lại</span><span>Mẫu không đại diện</span><span>Sai mô hình</span></div></div>
      <p class="sd-note">Tin <b>dữ liệu</b> hơn → historical, bootstrap. Cần <b>linh hoạt</b>, kịch bản mới → Monte Carlo.</p>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>r = ln(1 + HPR), cộng được theo thời gian</span><span>μ × T, σ × √T</span>
      <span>Giá lognormal: &gt; 0, lệch phải</span><span>Historical: mỗi quan sát 1 lần</span>
      <span>Bootstrap: có hoàn lại, cùng n</span><span>Monte Carlo: phân phối giả định</span>
      <span>Sai số ∝ 1/√n</span><span>VaR = lỗ tối thiểu trong x% xấu nhất</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 10 câu, mục tiêu ≥ 7 câu đúng.</p>`),
  ];

  addDeck('QM-09', `Slide Simulation - bản thiết kế riêng (${slides.length} slide)`, slides);
}());
