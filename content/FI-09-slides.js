// Bộ slide tự thiết kế cho FI-09 The Term Structure of Interest Rates: Spot, Par, and Forward Curves.
(function () {
  const L = window.LESSONS && window.LESSONS['FI-09'];
  if (!L) return;
  const { slide, addDeck, tl, frac } = window.CFAH;
  const K = 'FI-09 · Spot, Par, Forward';
  const S = (title, body, opt = {}) => slide(title, body, Object.assign({ kicker: K }, opt));

  // Tính spot, par, forward 1 năm từ một đường spot trơn (kỳ hạn 1-10 năm), rồi vẽ ba đường.
  function curves(a, b, label) {
    const sp = [], pa = [], fw = [];
    let sum = 0, prev = 1;
    for (let n = 1; n <= 10; n++) {
      const g = (1 - Math.exp(-(n - 1) / 3)) / (1 - Math.exp(-3));
      const s = (a + (b - a) * g) / 100, df = 1 / (1 + s) ** n;
      sum += df;
      sp.push(s * 100); pa.push(((1 - df) / sum) * 100); fw.push((prev / df - 1) * 100);
      prev = df;
    }
    const all = sp.concat(pa, fw), lo = Math.floor(Math.min(...all)), hi = Math.ceil(Math.max(...all));
    const W = 600, H = 300, l = 56, r = 585, t = 16, bt = 250;
    const xs = n => l + ((n - 1) / 9) * (r - l), ys = v => bt - ((v - lo) / (hi - lo)) * (bt - t);
    const line = (arr, cls) => `<polyline points="${arr.map((v, i) => `${xs(i + 1).toFixed(1)},${ys(v).toFixed(1)}`).join(' ')}" class="${cls}" style="fill:none"/>`;
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv" role="img" aria-label="${label}">`;
    for (let v = lo; v <= hi; v++) s += `<line x1="${l}" y1="${ys(v)}" x2="${r}" y2="${ys(v)}" class="sv-grid"/><text x="${l - 8}" y="${ys(v) + 5}" class="sv-muted" text-anchor="end">${v}%</text>`;
    [1, 3, 5, 7, 10].forEach(n => { s += `<text x="${xs(n)}" y="${bt + 22}" class="sv-muted">${n}</text>`; });
    s += `<text x="${(l + r) / 2}" y="${H - 4}" class="sv-muted">Kỳ hạn (năm)</text>`;
    s += line(fw, 'sv-up') + line(sp, 'sv-curve') + line(pa, 'sv-pv');
    const end = (arr, cls, txt, dy) => `<text x="${xs(10) - 6}" y="${ys(arr[9]) + dy}" class="sv-txt ${cls}" text-anchor="end">${txt}</text>`;
    const up = b > a;
    s += end(fw, 'sv-t-up', 'forward', up ? -10 : 22) + end(sp, '', 'spot', up ? -10 : -10) + end(pa, 'sv-t-pv', 'par', up ? 22 : -10);
    return `${s}</svg>`;
  }

  // Hai con đường đầu tư từ 0 đến B.
  const paths = `<svg viewBox="0 0 600 210" class="sv big" role="img" aria-label="Hai cách đầu tư 3 năm">
    <text x="20" y="44" class="sv-muted" text-anchor="start">Spot</text>
    <line x1="90" y1="52" x2="570" y2="52" class="sv-curve"/><text x="330" y="38" class="sv-txt">(1 + S₃)³ = 1,04³</text>
    <text x="20" y="142" class="sv-muted" text-anchor="start">Nối</text>
    <line x1="90" y1="150" x2="245" y2="150" class="sv-up"/><line x1="252" y1="150" x2="408" y2="150" class="sv-pv"/><line x1="415" y1="150" x2="570" y2="150" class="sv-down"/>
    <text x="168" y="136" class="sv-txt sv-t-up">S₁ = 2%</text><text x="330" y="136" class="sv-txt sv-t-pv">f₁,₁ = 4,01%</text><text x="492" y="136" class="sv-txt sv-t-down">f₂,₁ = 6,03%</text>
    <text x="90" y="185" class="sv-muted">0</text><text x="248" y="185" class="sv-muted">1</text><text x="411" y="185" class="sv-muted">2</text><text x="570" y="185" class="sv-muted">3</text>
    <text x="330" y="98" class="sv-txt">= cùng kết quả =</text></svg>`;

  const slides = [
    S('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Fixed Income · FI-09</div>
      <h2>The Term Structure<br>of Interest Rates</h2>
      <p>Spot, par và forward: ba cách nhìn một đường cong</p>
      <div class="sd-chips"><span>LOS 1 · Spot và định giá</span><span>LOS 2 · Par, forward</span><span>LOS 3 · So sánh ba đường</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Ba cách mô tả cùng một đường cong', `<div class="sd-cols3">
      <div class="sd-card"><div class="sd-n">1</div><b>Spot S<sub>T</sub></b><p>Lợi suất zero-coupon kỳ hạn T, mua hôm nay.</p><small>"Giá" của tiền ở từng kỳ hạn</small></div>
      <div class="sd-card"><div class="sd-n">2</div><b>Par</b><p>Coupon làm giá = 100 khi chiết khấu bằng spot.</p><small>Thị trường quan sát trực tiếp</small></div>
      <div class="sd-card"><div class="sd-n">3</div><b>Forward f<sub>A,B-A</sub></b><p>Lãi suất cho giai đoạn tương lai, khóa từ hôm nay.</p><small>Lãi suất "cận biên"</small></div></div>
      <p class="sd-note">Biết một đường → suy ra hai đường còn lại.</p>`),

    S('Định giá bằng spot rate', `${tl(3, [{ t: 0, label: 'PV = 102,96', cls: 'pv' }, { t: 1, label: '5 ÷ 1,02' }, { t: 2, label: '5 ÷ 1,03²' }, { t: 3, label: '105 ÷ 1,04³' }], { h: 140 })}
      <div class="sd-f">PV = Σ ${frac('CF<sub>t</sub>', '(1 + S<sub>t</sub>)<sup>t</sup>')}</div>
      <p class="sd-note">Trái phiếu coupon = rổ zero-coupon. Mỗi dòng tiền dùng spot rate <b>của riêng nó</b>.</p>`),

    S('YTM là trung bình có trọng số của spot', `<div class="sd-cols2">
      <div><div class="sd-bars">
        <div class="sd-bar"><span class="sd-bar-l">S₁</span><span class="sd-bar-t"><i style="width:40%"></i></span><b>2,00%</b></div>
        <div class="sd-bar"><span class="sd-bar-l">S₂</span><span class="sd-bar-t"><i style="width:60%"></i></span><b>3,00%</b></div>
        <div class="sd-bar"><span class="sd-bar-l">S₃</span><span class="sd-bar-t"><i style="width:80%"></i></span><b>4,00%</b></div>
        <div class="sd-bar"><span class="sd-bar-l">YTM</span><span class="sd-bar-t"><i style="width:78.7%"></i></span><b>3,93%</b></div></div></div>
      <div><div class="sd-rule">91% giá trị nằm ở năm 3 <b>→ YTM sát S₃</b></div><div class="sd-rule down">Đường dốc lên <b>YTM &lt; S₃</b></div><div class="sd-rule up">Zero-coupon <b>YTM = spot</b></div></div></div>`),

    S('Par rate từ spot rate', `<div class="sd-cols2">
      <div><div class="sd-f">par<sub>N</sub> = ${frac('1 - DF<sub>N</sub>', 'DF<sub>1</sub> + ... + DF<sub>N</sub>')}</div><p class="sd-note">Đặt giá = 100, giải coupon.</p></div>
      <div><div class="sd-tbl grid"><div class="head"><span>N</span><span>Spot</span><span>DF</span><span>Par</span></div>
        <div><span>1</span><span>2,00%</span><span>0,9804</span><span>2,00%</span></div>
        <div><span>2</span><span>3,00%</span><span>0,9426</span><span>2,99%</span></div>
        <div><span>3</span><span>4,00%</span><span>0,8890</span><span>3,95%</span></div></div>
      <p class="sd-note">Spot dốc lên → par thấp hơn spot một chút.</p></div></div>`),

    S('Bootstrapping: từ par đi ngược ra spot', `<div class="sd-steps">
      <span>① Par 1 năm 2% → S₁ = <b>2,00%</b> (chỉ một dòng tiền)</span>
      <span>② 100 = 3/1,02 + 103/(1 + S₂)² → S₂ = <b>3,02%</b></span>
      <span>③ 100 = 4/1,02 + 4/1,0302² + 104/(1 + S₃)³ → S₃ = <b>4,05%</b></span></div>
      <p class="sd-note">Giải từ ngắn đến dài; mỗi bước dùng các spot đã tìm. Par 2%, 3%, 4% dốc lên → spot <b>cao hơn</b> par.</p>`),

    S('Forward rate: hai con đường, một kết quả', `${paths}
      <div class="sd-f">(1 + S<sub>B</sub>)<sup>B</sup> = (1 + S<sub>A</sub>)<sup>A</sup> × (1 + f<sub>A,B-A</sub>)<sup>B-A</sup></div>`),

    S('Tính forward từ spot', `<div class="sd-tbl grid"><div class="head"><span>Forward</span><span>Đọc là</span><span>Công thức</span><span>Kết quả</span></div>
      <div><span>f<sub>1,1</sub></span><span>1y1y</span><span>1,03² / 1,02 - 1</span><span>4,01%</span></div>
      <div><span>f<sub>2,1</sub></span><span>2y1y</span><span>1,04³ / 1,03² - 1</span><span>6,03%</span></div>
      <div><span>f<sub>1,2</sub></span><span>1y2y</span><span>(1,04³ / 1,02)<sup>1/2</sup> - 1</span><span>5,01%</span></div></div>
      <p class="sd-note">Kiểm tra nhanh: f<sub>2,1</sub> ≈ 3 × 4% - 2 × 3% = 6%. Khoảng dài 2 năm → nhớ lấy căn bậc 2.</p>`),

    S('Spot từ forward và giá bằng forward', `<div class="sd-cols2">
      <div><p class="sd-cap">Spot = trung bình <b>nhân</b> của forward</p><div class="sd-f sm">(1 + S₃)³ = 1,02 × 1,0401 × 1,0603</div><div class="sd-f sm">S₃ = 4,00%</div></div>
      <div><p class="sd-cap">Chiết khấu qua từng chặng</p><div class="sd-steps"><span>5 / 1,02 = 4,9020</span><span>5 / (1,02 × 1,0401) = 4,7130</span><span>105 / (1,02 × 1,0401 × 1,0603) = 93,3446</span><span>Tổng = <b>102,96</b> = giá theo spot</span></div></div></div>`),

    S('Đường dốc lên: forward > spot > par', `<div class="sd-cols2 wide-left"><div>${curves(2, 5, 'Đường dốc lên')}</div>
      <div><div class="sd-rule up">Forward <b>cao nhất</b></div><div class="sd-rule">Spot <b>ở giữa</b></div><div class="sd-rule">Par <b>thấp nhất</b></div>
      <p class="sd-note">Spot 1 năm 2%, 10 năm 5%. Ba đường gặp nhau ở kỳ hạn 1 năm.</p></div></div>`),

    S('Đường dốc xuống: forward < spot < par', `<div class="sd-cols2 wide-left"><div>${curves(6, 3, 'Đường dốc xuống')}</div>
      <div><div class="sd-rule">Par <b>cao nhất</b></div><div class="sd-rule">Spot <b>ở giữa</b></div><div class="sd-rule down">Forward <b>thấp nhất</b></div>
      <p class="sd-note">Ví dụ: par 5%, 4,5%, 4% → spot 3 năm 3,97%, f<sub>2,1</sub> = 2,95%.</p></div></div>`),

    S('Vì sao có thứ tự đó?', `<div class="sd-cols3">
      <div class="sd-card acc"><b>Forward = cận biên</b><p>Lãi suất của năm tăng thêm.</p></div>
      <div class="sd-card"><b>Spot = trung bình</b><p>Trung bình nhân của các forward.</p></div>
      <div class="sd-card"><b>Par = trung bình của trung bình</b><p>Bình quân có trọng số của các spot.</p></div></div>
      <p class="sd-note">Như điểm thi: muốn điểm trung bình tăng, điểm môn mới (forward) phải cao hơn trung bình (spot).</p>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>Mỗi dòng tiền → spot của riêng nó</span><span>Zero-coupon: YTM = spot</span>
      <span>Par 1 năm = spot 1 năm</span><span>Bootstrap: ngắn đến dài</span>
      <span>f<sub>A,B-A</sub>: chia rồi lấy căn bậc (B - A)</span><span>Spot từ forward: trung bình nhân</span>
      <span>Giá theo forward = giá theo spot</span><span>Dốc lên: forward &gt; spot &gt; par</span></div>`),
  ];

  addDeck('FI-09', `Slide Spot, Par, Forward - bản thiết kế riêng (${slides.length} slide)`, slides);
}());
