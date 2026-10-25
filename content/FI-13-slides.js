// Bộ slide tự thiết kế cho FI-13 Curve-Based and Empirical Fixed-Income Risk Measures.
(function () {
  const L = window.LESSONS && window.LESSONS['FI-13'];
  if (!L) return;
  const { slide, addDeck, frac } = window.CFAH;
  const K = 'FI-13 · Effective, Key Rate, Empirical Duration';
  const S = (title, body, opt = {}) => slide(title, body, Object.assign({ kicker: K }, opt));

  // Giá trái phiếu thường 10 năm coupon 5% và hai phiên bản có quyền chọn (minh họa bằng soft-min / soft-max).
  const straight = y => { let p = 0; for (let k = 1; k <= 10; k++) p += 5 / (1 + y) ** k; return p + 100 / (1 + y) ** 10; };
  const softMin = (a, b, k) => -k * Math.log(Math.exp(-a / k) + Math.exp(-b / k));
  const softMax = (a, b, k) => k * Math.log(Math.exp(a / k) + Math.exp(b / k));
  const callable = y => softMin(straight(y), 104, 2.5);
  const putable = y => softMax(straight(y), 96, 2.5);

  function optCurve(which) {
    const W = 600, H = 300, l = 60, r = 585, tp = 20, b = 250;
    const xs = y => l + ((y - 1) / 9) * (r - l);
    const ys = p => b - ((p - 60) / (145 - 60)) * (b - tp);
    const line = (fn, cls) => { let pts = ''; for (let y = 1; y <= 10.001; y += 0.1) pts += `${xs(y).toFixed(1)},${ys(fn(y / 100)).toFixed(1)} `; return `<polyline points="${pts}" class="${cls}" style="fill:none"/>`; };
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv" role="img" aria-label="Đường giá - lợi suất có quyền chọn">`;
    [60, 80, 100, 120, 140].forEach(p => { s += `<line x1="${l}" y1="${ys(p)}" x2="${r}" y2="${ys(p)}" class="sv-grid"/><text x="${l - 8}" y="${ys(p) + 5}" class="sv-muted" text-anchor="end">${p}</text>`; });
    [1, 4, 7, 10].forEach(y => { s += `<text x="${xs(y)}" y="${b + 24}" class="sv-muted">${y}%</text>`; });
    s += `<line x1="${l}" y1="${b}" x2="${r}" y2="${b}" class="sv-axis"/><line x1="${l}" y1="${tp}" x2="${l}" y2="${b}" class="sv-axis"/>`;
    s += line(straight, 'sv-dash');
    if (which === 'call') {
      s += line(callable, 'sv-curve');
      s += `<line x1="${l}" y1="${ys(104)}" x2="${r}" y2="${ys(104)}" class="sv-down"/><text x="${r - 4}" y="${ys(104) - 8}" class="sv-txt sv-t-down" text-anchor="end">giá call 104</text>`;
      s += `<text x="${xs(1.6)}" y="${ys(138)}" class="sv-muted" text-anchor="start">trái phiếu thường</text><text x="${xs(2.2)}" y="${ys(96)}" class="sv-txt" text-anchor="start">callable: bị chặn trần</text>`;
    } else {
      s += line(putable, 'sv-curve');
      s += `<line x1="${l}" y1="${ys(96)}" x2="${r}" y2="${ys(96)}" class="sv-up"/><text x="${r - 4}" y="${ys(96) + 22}" class="sv-txt sv-t-up" text-anchor="end">giá put 96</text>`;
      s += `<text x="${xs(1.6)}" y="${ys(138)}" class="sv-muted" text-anchor="start">trái phiếu thường</text><text x="${xs(7.6)}" y="${ys(103)}" class="sv-txt">putable: được đỡ sàn</text>`;
    }
    s += `<text x="${(l + r) / 2}" y="${H - 2}" class="sv-muted">Lợi suất chuẩn (minh họa, coupon 5%, 10 năm)</text>`;
    return `${s}</svg>`;
  }

  // Ba kịch bản đường cong: giảm, hiện tại, tăng.
  const shocks = `<svg viewBox="0 0 600 240" class="sv big" role="img" aria-label="Sốc đường cong lên xuống">
    <line x1="50" y1="210" x2="570" y2="210" class="sv-axis"/><line x1="50" y1="20" x2="50" y2="210" class="sv-axis"/>
    <path d="M60 150 C 200 110, 380 90, 560 80" class="sv-up" style="fill:none"/>
    <path d="M60 120 C 200 80, 380 60, 560 50" class="sv-curve" style="fill:none"/>
    <path d="M60 90 C 200 50, 380 30, 560 20" class="sv-down" style="fill:none"/>
    <text x="566" y="88" class="sv-txt sv-t-up" text-anchor="end" dy="18">- ΔCurve → PV₋</text>
    <text x="566" y="58" class="sv-txt" text-anchor="end" dy="18">hiện tại → PV₀</text>
    <text x="566" y="28" class="sv-txt sv-t-down" text-anchor="end" dy="18">+ ΔCurve → PV₊</text>
    <text x="310" y="234" class="sv-muted">Kỳ hạn</text></svg>`;

  // Thanh key rate duration.
  const krdBars = (rows, max) => `<div class="sd-bars">${rows.map(([lab, v, note]) => `<div class="sd-bar"><span class="sd-bar-l">${lab}</span><span class="sd-bar-t"><i style="width:${(v / max) * 100}%"></i></span><b>${note}</b></div>`).join('')}</div>`;

  // Đồ thị phân tán hồi quy empirical duration.
  function scatter() {
    const dy = [0.20, -0.15, 0.30, -0.25, 0.10, -0.05], r = [-0.55, 0.50, -0.95, 0.70, -0.35, 0.10];
    const W = 600, H = 280, l = 60, rr = 580, tp = 20, b = 240;
    const xs = x => l + ((x + 0.35) / 0.7) * (rr - l), ys = y => b - ((y + 1.2) / 2.4) * (b - tp);
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv" role="img" aria-label="Hồi quy empirical duration">`;
    s += `<line x1="${l}" y1="${ys(0)}" x2="${rr}" y2="${ys(0)}" class="sv-axis"/><line x1="${xs(0)}" y1="${tp}" x2="${xs(0)}" y2="${b}" class="sv-axis"/>`;
    s += `<line x1="${xs(-0.33)}" y1="${ys(0.99 - 0.017)}" x2="${xs(0.33)}" y2="${ys(-0.99 - 0.017)}" class="sv-dash"/>`;
    s += `<line x1="${xs(-0.25)}" y1="${ys(-4.5 * -0.25)}" x2="${xs(0.25)}" y2="${ys(-4.5 * 0.25)}" class="sv-down"/>`;
    dy.forEach((x, i) => { s += `<circle cx="${xs(x)}" cy="${ys(r[i])}" r="7" class="sv-dot"/>`; });
    s += `<text x="${xs(0.33)}" y="${ys(-1.1) - 4}" class="sv-txt" text-anchor="end">dốc -3,0: empirical</text>`;
    s += `<text x="${xs(-0.24)}" y="${ys(1.15)}" class="sv-txt sv-t-down" text-anchor="start">dốc -4,5: analytical</text>`;
    s += `<text x="${rr}" y="${ys(0) - 8}" class="sv-muted" text-anchor="end">Δ lợi suất chuẩn</text><text x="${xs(0) + 8}" y="${tp + 10}" class="sv-muted" text-anchor="start">% thay đổi giá</text>`;
    return `${s}</svg>`;
  }

  const slides = [
    S('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Fixed Income · FI-13</div>
      <h2>Curve-Based and Empirical<br>Fixed-Income Risk Measures</h2>
      <p>Khi dòng tiền phản ứng theo lãi suất</p>
      <div class="sd-chips"><span>LOS 1 · Vì sao effective duration</span><span>LOS 2 · %ΔPV theo đường cong</span><span>LOS 3 · Key rate duration</span><span>LOS 4 · Empirical duration</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Giả định bị phá vỡ', `<div class="sd-cols2">
      <div class="sd-card"><b>Yield duration (FI-11, FI-12)</b><p>Sốc <b>YTM</b> của chính trái phiếu.</p><p>Dòng tiền <b>cố định</b>.</p><small>Đúng cho trái phiếu thường</small></div>
      <div class="sd-card acc"><b>Curve duration (FI-13)</b><p>Sốc <b>đường lợi suất chuẩn</b>.</p><p>Dòng tiền <b>thay đổi</b> theo mô hình.</p><small>Callable, putable, MBS</small></div></div>
      <p class="sd-note">Trái phiếu có quyền chọn không có "YTM" rõ ràng vì không biết nó sống đến bao giờ.</p>`),

    S('Cách tính: sốc đường cong lên và xuống', `${shocks}
      <p class="sd-note">Mô hình định giá lại trái phiếu ở cả 3 kịch bản, tự quyết định quyền chọn có được thực hiện hay không. Spread giữ nguyên.</p>`),

    S('Hai công thức cần thuộc', `<div class="sd-f">EffDur = ${frac('PV<sub>-</sub> - PV<sub>+</sub>', '2 × ΔCurve × PV<sub>0</sub>')}</div>
      <div class="sd-f">EffCon = ${frac('PV<sub>-</sub> + PV<sub>+</sub> - 2PV<sub>0</sub>', '(ΔCurve)<sup>2</sup> × PV<sub>0</sub>')}</div>
      <div class="sd-cols2"><div class="sd-rule down">Duration: mẫu có <b>2 × ΔCurve</b></div><div class="sd-rule down">Convexity: mẫu <b>không có số 2</b></div></div>
      <p class="sd-note">ΔCurve dạng thập phân: 30 bps = 0,003.</p>`),

    S('Trái phiếu thường: EffDur ≈ ModDur', `<div class="sd-cols2">
      <div class="sd-tbl"><div><span>Trái phiếu</span><span>6 năm, coupon 5%</span></div><div><span>Đường cong</span><span>phẳng 5% → PV₀ = 100</span></div><div><span>PV₋ (4,7%)</span><span>101,5374</span></div><div><span>PV₊ (5,3%)</span><span>98,4918</span></div></div>
      <div><div class="sd-big">EffDur = 5,08</div><div class="sd-f sm">EffCon = 32,47</div><p class="sd-note">Modified duration theo YTM cũng là 5,08: dòng tiền cố định thì hai thước đo trùng nhau.</p></div></div>`),

    S('Callable: chặn trần, convexity âm', `<div class="sd-cols2 wide-left"><div>${optCurve('call')}</div>
      <div><div class="sd-steps"><span>PV₀ = 101,50 · PV₋ = 102,60 · PV₊ = 100,35</span><span>EffDur = 2,25 / 0,609 = <b>3,69</b></span><span>EffCon = -0,05 / 0,0009135 = <b>-54,73</b></span></div>
      <p class="sd-note">Lãi suất giảm: giá chỉ +1,10. Lãi suất tăng: giá -1,15. Price compression.</p></div></div>`),

    S('Putable: đỡ sàn, convexity dương lớn hơn', `<div class="sd-cols2 wide-left"><div>${optCurve('put')}</div>
      <div><div class="sd-rule up">Lãi suất tăng → put có giá trị → <b>giảm ít</b></div><div class="sd-rule">Lãi suất thấp → gần như <b>trái phiếu thường</b></div>
      <p class="sd-note">Quyền chọn thuộc về ai thì có lợi cho người đó. Có quyền chọn → duration <b>không dài hơn</b> trái phiếu thường.</p></div></div>`),

    S('So sánh nhanh ba loại', `<div class="sd-tbl grid"><div class="head"><span></span><span>Thường</span><span>Callable</span><span>Putable</span></div>
      <div><span>Ai nắm quyền</span><span>Không có</span><span>Tổ chức phát hành</span><span>Nhà đầu tư</span></div>
      <div><span>Lãi suất thấp</span><span>Convexity dương</span><span>Bị chặn trần, convexity âm</span><span>Như trái phiếu thường</span></div>
      <div><span>Lãi suất cao</span><span>Convexity dương</span><span>Như trái phiếu thường</span><span>Được đỡ sàn, duration ngắn</span></div>
      <div><span>Giá</span><span>P<sub>thường</sub></span><span>P<sub>thường</sub> - call</span><span>P<sub>thường</sub> + put</span></div></div>`),

    S('Ước tính %ΔPV theo đường cong chuẩn', `<div class="sd-f">%ΔPV ≈ -EffDur × ΔCurve + ½ × EffCon × (ΔCurve)<sup>2</sup></div>
      <div class="sd-tbl grid"><div class="head"><span>Trái phiếu</span><span>ΔCurve</span><span>Duration</span><span>Convexity</span><span>Tổng</span></div>
      <div><span>EffDur 6,8 · EffCon 95</span><span>+75 bps</span><span>-5,10%</span><span>+0,27%</span><span><b>-4,83%</b></span></div>
      <div><span>EffDur 6,8 · EffCon 95</span><span>-75 bps</span><span>+5,10%</span><span>+0,27%</span><span><b>+5,37%</b></span></div>
      <div><span>Callable 3,69 · -54,73</span><span>+100 bps</span><span>-3,69%</span><span>-0,27%</span><span><b>-3,97%</b></span></div>
      <div><span>Callable 3,69 · -54,73</span><span>-100 bps</span><span>+3,69%</span><span>-0,27%</span><span><b>+3,42%</b></span></div></div>
      <p class="sd-note">Hiệu ứng convexity luôn cùng dấu với EffCon. Convexity âm: thiệt cả hai chiều.</p>`),

    S('Key rate duration: rủi ro theo từng điểm', `<div class="sd-cols2">
      <div><p class="sd-cap">Danh mục có EffDur = 5,50, chia theo kỳ hạn:</p>${krdBars([['2 năm', 0.40, '0,40'], ['5 năm', 1.50, '1,50'], ['10 năm', 2.60, '2,60'], ['30 năm', 1.00, '1,00']], 2.6)}</div>
      <div><div class="sd-f sm">Σ KRD<sub>k</sub> = EffDur</div><div class="sd-f sm">%ΔPV ≈ -Σ KRD<sub>k</sub> × Δr<sub>k</sub></div><p class="sd-note">Chỉ sốc <b>một</b> kỳ hạn, giữ nguyên các kỳ hạn khác. Đo <b>shaping risk</b>.</p></div></div>`),

    S('Ví dụ: hai zero-coupon, đường cong xoay', `<div class="sd-tbl grid"><div class="head"><span>Vị thế</span><span>ModDur</span><span>KRD (× 50%)</span><span>Δr</span><span>Đóng góp</span></div>
      <div><span>Zero 5 năm, 4%</span><span>4,808</span><span>2,404</span><span>+50 bps</span><span>-1,202%</span></div>
      <div><span>Zero 10 năm, 5%</span><span>9,524</span><span>4,762</span><span>-20 bps</span><span>+0,952%</span></div>
      <div><span>Danh mục</span><span></span><span>7,166</span><span></span><span><b>-0,25%</b></span></div></div>
      <div class="sd-cols2"><div class="sd-rule up">Key rate: <b>-0,25%</b> (định giá lại: -0,22%)</div><div class="sd-rule down">Giả định song song +50 bps: <b>-3,58%</b></div></div>`),

    S('Analytical và empirical duration', `<div class="sd-cols2">
      <div class="sd-card"><b>Analytical</b><p>Từ công thức hoặc mô hình.</p><p>Giả định <b>spread không đổi</b> khi lợi suất chuẩn đổi.</p><small>Macaulay, modified, effective, key rate</small></div>
      <div class="sd-card acc"><b>Empirical</b><p>Từ <b>hồi quy dữ liệu lịch sử</b>.</p><p>Bắt được tương quan giữa spread và lợi suất chuẩn.</p><small>%ΔP = a + b × ΔYield → D = -b</small></div></div>`),

    S('Vì sao high-yield có empirical duration thấp hơn', `<div class="sd-cols2 wide-left"><div>${scatter()}</div>
      <div><div class="sd-steps"><span>Kinh tế xấu: lợi suất chính phủ <b>giảm</b>, spread <b>nới rộng</b></span><span>Hai lực bù trừ nhau</span><span>Giá phản ứng yếu hơn mô hình dự báo</span></div>
      <p class="sd-note">Chính phủ: empirical ≈ analytical. High-yield: empirical thấp hơn rõ.</p></div></div>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>Có quyền chọn → effective duration</span><span>Sốc đường cong chuẩn, không sốc YTM</span>
      <span>EffDur: mẫu 2 × ΔCurve × PV₀</span><span>EffCon: mẫu (ΔCurve)² × PV₀</span>
      <span>Callable, lãi suất thấp: convexity âm</span><span>Putable, lãi suất cao: đỡ sàn</span>
      <span>Σ key rate duration = EffDur</span><span>High-yield: empirical &lt; analytical</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 10 câu, rồi sang FI-14 Credit Risk.</p>`),
  ];

  addDeck('FI-13', 'Slide Curve-Based Risk Measures - bản thiết kế riêng (14 slide)', slides);
}());
