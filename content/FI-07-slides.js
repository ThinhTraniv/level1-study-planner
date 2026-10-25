// Bộ slide tự thiết kế cho FI-07 Yield and Yield Spread Measures for Fixed-Rate Bonds.
(function () {
  const L = window.LESSONS && window.LESSONS['FI-07'];
  if (!L) return;
  const { slide, addDeck, frac, tl } = window.CFAH;
  const K = 'FI-07 · Fixed-Rate Yields and Spreads';
  const S = (title, body, opt = {}) => slide(title, body, Object.assign({ kicker: K }, opt));
  const fmt = (x, d = 2) => x.toFixed(d).replace('.', ',');

  // APR tương đương của trái phiếu ví dụ 2.1 (lãi suất nửa năm 2,83257%) theo periodicity.
  function aprBars() {
    const r2 = 0.0283257247;
    const rows = [['m = 1 (năm)', 1], ['m = 2 (nửa năm)', 2], ['m = 4 (quý)', 4], ['m = 12 (tháng)', 12]];
    const val = m => ((1 + r2) ** (2 / m) - 1) * m * 100;
    const lo = 5.55, hi = 5.76;
    return `<div class="sd-bars">${rows.map(([lab, m]) => `<div class="sd-bar"><span class="sd-bar-l">${lab}</span><span class="sd-bar-t"><i style="width:${((val(m) - lo) / (hi - lo)) * 100}%"></i></span><b>${fmt(val(m), 4)}%</b></div>`).join('')}</div>`;
  }

  // Lợi suất theo từng kịch bản call (ví dụ 4.1).
  function ytcBars() {
    const rows = [['Call năm 2 ở 103', 5.7409], ['Call năm 3 ở 102', 5.7672], ['Call năm 4 ở 101', 5.7932], ['Call năm 5 ở 100', 5.8189], ['Đáo hạn năm 6', 5.9837]];
    const lo = 5.6, hi = 6.0;
    return `<div class="sd-bars">${rows.map(([lab, v], i) => `<div class="sd-bar"><span class="sd-bar-l">${i === 0 ? `<b>${lab}</b>` : lab}</span><span class="sd-bar-t"><i style="width:${((v - lo) / (hi - lo)) * 100}%${i === 0 ? '' : ';opacity:.45'}"></i></span><b>${fmt(v, 2)}%</b></div>`).join('')}</div>`;
  }

  // Đường lợi suất chính phủ, đường swap và một trái phiếu doanh nghiệp 6 năm.
  function spreads() {
    const W = 600, H = 300, l = 62, r = 580, t = 20, b = 250;
    const xs = x => l + (x / 10) * (r - l), ys = y => b - ((y - 2.5) / 2.5) * (b - t);
    const gov = [[1, 2.6], [3, 2.9], [5, 3.2], [7, 3.6], [10, 3.9]];
    const line = (pts, cls) => `<polyline points="${pts.map(p => `${xs(p[0])},${ys(p[1])}`).join(' ')}" class="${cls}" style="fill:none"/>`;
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv" role="img" aria-label="G-spread và I-spread">`;
    [2.5, 3, 3.5, 4, 4.5, 5].forEach(v => { s += `<line x1="${l}" y1="${ys(v)}" x2="${r}" y2="${ys(v)}" class="sv-grid"/><text x="${l - 8}" y="${ys(v) + 5}" class="sv-muted" text-anchor="end">${fmt(v, 1)}%</text>`; });
    s += `<line x1="${l}" y1="${b}" x2="${r}" y2="${b}" class="sv-axis"/><line x1="${l}" y1="${t}" x2="${l}" y2="${b}" class="sv-axis"/>`;
    [0, 2, 4, 6, 8, 10].forEach(v => { s += `<text x="${xs(v)}" y="${b + 22}" class="sv-muted">${v}</text>`; });
    s += `<text x="${(l + r) / 2}" y="${H - 4}" class="sv-muted">Kỳ hạn (năm)</text>`;
    s += line(gov, 'sv-curve') + line(gov.map(p => [p[0], p[1] + 0.15]), 'sv-dash');
    s += `<text x="${xs(9.8)}" y="${ys(3.9) + 22}" class="sv-txt" text-anchor="end" style="fill:var(--accent)">Chính phủ</text><text x="${xs(9.8)}" y="${ys(4.05) - 10}" class="sv-muted" text-anchor="end">Swap</text>`;
    s += `<line x1="${xs(6) - 12}" y1="${ys(4.65)}" x2="${xs(6) - 12}" y2="${ys(3.4)}" class="sv-down"/><text x="${xs(6) - 18}" y="${ys(4.0)}" class="sv-txt sv-t-down" text-anchor="end">G = 125 bps</text>`;
    s += `<line x1="${xs(6) + 12}" y1="${ys(4.65)}" x2="${xs(6) + 12}" y2="${ys(3.55)}" class="sv-pv"/><text x="${xs(6) + 18}" y="${ys(4.15)}" class="sv-txt sv-t-pv" text-anchor="start">I = 110 bps</text>`;
    s += `<circle cx="${xs(6)}" cy="${ys(4.65)}" r="7" class="sv-dot"/><text x="${xs(6)}" y="${ys(4.65) - 14}" class="sv-txt">Doanh nghiệp 6 năm: 4,65%</text>`;
    return `${s}</svg>`;
  }

  // Thanh xếp chồng: lợi suất = benchmark + spread.
  const stack = `<svg viewBox="0 0 600 150" class="sv" role="img" aria-label="Lợi suất bằng benchmark cộng spread">
    <rect x="30" y="30" width="330" height="60" rx="8" class="sv-panel"/><text x="195" y="66" class="sv-txt">Benchmark 3,40%</text>
    <rect x="360" y="30" width="210" height="60" rx="8" class="sv-key"/><text x="465" y="66" class="sv-txt" style="fill:var(--accent)">Spread 1,25%</text>
    <text x="195" y="120" class="sv-muted">vĩ mô: lạm phát, chính sách tiền tệ</text><text x="465" y="120" class="sv-muted">riêng: tín dụng, thanh khoản, thuế</text>
    <text x="300" y="20" class="sv-muted">Lợi suất trái phiếu 4,65%</text></svg>`;

  const slides = [
    S('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Fixed Income · FI-07</div>
      <h2>Yield and Yield Spread Measures<br>for Fixed-Rate Bonds</h2>
      <p>Đo lợi suất cho đúng, so với mốc nào</p>
      <div class="sd-chips"><span>LOS 1 · Quy đổi periodicity</span><span>LOS 2 · Thước đo lợi suất và spread</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Lợi suất = benchmark + spread', `${stack}
      <p class="sd-note">Benchmark thường là trái phiếu chính phủ on-the-run cùng kỳ hạn. Spread cho biết thị trường đòi thêm bao nhiêu vì rủi ro <b>riêng</b> của trái phiếu.</p>`),

    S('Periodicity: cùng khoản đầu tư, nhiều con số', `<div class="sd-cols2">
      <div><div class="sd-f">(1 + ${frac('APR<sub>m</sub>', 'm')})<sup>m</sup> = (1 + ${frac('APR<sub>n</sub>', 'n')})<sup>n</sup></div>
      <p class="sd-note">7 năm, coupon 5% nửa năm, giá 96,20 → lãi suất nửa năm 2,8326%.</p></div>
      <div><p class="sd-cap">APR tương đương theo periodicity:</p>${aprBars()}<p class="sd-note">Ghép lãi càng dày → APR càng <b>nhỏ</b>.</p></div></div>`),

    S('BA II Plus: ICONV và ví dụ quý → nửa năm', `<div class="sd-keys"><span><kbd>2ND</kbd> <kbd>2</kbd></span><span>NOM = 5.6651</span><span>C/Y = 2</span><span>EFF <kbd>CPT</kbd> = 5.7454</span><span>C/Y = 4</span><span>NOM <kbd>CPT</kbd> = 5.6259</span></div>
      <div class="sd-card acc"><b>Quý 6% → semiannual bond basis</b><div class="sd-f sm">APR<sub>2</sub> = 2 × (1,015<sup>2</sup> - 1) = <b>6,045%</b></div><p>Hiệu dụng năm: 1,015<sup>4</sup> - 1 = 6,1364%</p></div>
      <p class="sd-note">Mẹo: luôn đi qua EFF. Từ APR<sub>m</sub> tính EFF, rồi từ EFF tính APR<sub>n</sub>.</p>`),

    S('Ba quy ước cần nhận diện', `<div class="sd-cols3">
      <div class="sd-card"><b>Street convention</b><p>Coupon trả đúng ngày lịch, kể cả cuối tuần, ngày lễ.</p></div>
      <div class="sd-card acc"><b>True yield</b><p>Ngày trả thực tế, có khi muộn hơn.</p><small>True yield ≤ street</small></div>
      <div class="sd-card"><b>Government equivalent</b><p>Đổi YTM 30/360 sang actual/actual để so với trái phiếu chính phủ.</p></div></div>`),

    S('Current yield, simple yield, YTM', `<div class="sd-tbl grid"><div class="head"><span>Thước đo</span><span>Công thức</span><span>Ví dụ (giá 96)</span></div>
      <div><span>Current yield</span><span>5 / 96</span><span>5,21%</span></div>
      <div><span>Simple yield</span><span>(5 + 4/4) / 96</span><span>6,25%</span></div>
      <div><span>YTM</span><span>IRR: N = 4, PMT = 5</span><span>6,16%</span></div></div>
      <div class="sd-cols2"><div class="sd-rule down">Discount <b>coupon &lt; CY &lt; YTM</b></div><div class="sd-rule up">Premium <b>coupon &gt; CY &gt; YTM</b></div></div>
      <p class="sd-note">Trái phiếu 4 năm, coupon 5% hằng năm. YTM giả định: giữ đến hạn, không vỡ nợ, tái đầu tư ở YTM.</p>`),

    S('Callable bond: yield-to-worst', `<div class="sd-cols2 wide-left"><div>${ytcBars()}</div>
      <div><div class="sd-rule up">Yield-to-worst <b>5,74%</b></div><p class="sd-note">6 năm, coupon 7%, giá 105. Tính <b>mọi</b> kịch bản, lấy mức thấp nhất.</p>
      <p class="sd-note"><b>Option-adjusted yield</b>: tách giá trị quyền call → thấp hơn YTM.</p></div></div>`),

    S('G-spread và I-spread', `<div class="sd-cols2 wide-left"><div>${spreads()}</div>
      <div><div class="sd-f sm">Chính phủ 6 năm = 3,20% + ½ × 0,40% = 3,40%</div><div class="sd-rule down">G-spread <b>4,65 - 3,40 = 125 bps</b></div><div class="sd-rule">I-spread <b>4,65 - 3,55 = 110 bps</b></div>
      <p class="sd-note">Hạn chế: so hai YTM, bỏ qua hình dạng đường cong.</p></div></div>`),

    S('Z-spread: cộng đều vào mọi spot rate', `${tl(3, [{ t: 0, label: 'Giá 98,00', cls: 'pv' }, { t: 1, label: '6 / (1,030 + Z)' }, { t: 2, label: '6 / (1,035 + Z)²' }, { t: 3, label: '106 / (1,040 + Z)³' }], { h: 140, label: 'Z-spread cộng vào mọi spot rate' })}
      <div class="sd-keys"><span>Z ≈ <b>2,80%</b></span><span>5,6711 + 5,3099 + 87,0146 ≈ 98,00</span></div>
      <p class="sd-note">Thử - sai để tìm Z. Đề thi hay cho Z rồi hỏi giá: chỉ cần cộng Z vào từng spot rate.</p>`),

    S('OAS = Z-spread - chi phí quyền chọn', `<div class="sd-cols3">
      <div class="sd-card acc"><b>Callable</b><p>Nhà đầu tư <b>bán</b> quyền call.</p><div class="sd-f sm">OAS &lt; Z-spread</div><small>210 - 40 = 170 bps</small></div>
      <div class="sd-card"><b>Putable</b><p>Nhà đầu tư <b>mua</b> quyền put.</p><div class="sd-f sm">OAS &gt; Z-spread</div></div>
      <div class="sd-card"><b>Không quyền chọn</b><p>Không có gì để tách.</p><div class="sd-f sm">OAS = Z-spread</div></div></div>
      <p class="sd-note">So sánh hai callable bond: dùng <b>OAS</b>. Cách tính OAS (binomial tree) thuộc Level II.</p>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>Cùng periodicity mới so sánh được</span><span>Đổi qua EFF bằng ICONV</span>
      <span>True yield ≤ street convention</span><span>Current yield = coupon / flat price</span>
      <span>Yield-to-worst = thấp nhất mọi kịch bản</span><span>G-spread: chính phủ nội suy</span>
      <span>I-spread: lãi suất swap</span><span>Callable: OAS &lt; Z-spread</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 8 câu, mục tiêu ≥ 6 câu đúng.</p>`),
  ];

  addDeck('FI-07', `Slide Fixed-Rate Yields and Spreads - bản thiết kế riêng (${slides.length} slide)`, slides);
}());
