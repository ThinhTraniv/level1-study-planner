// Bộ slide tự thiết kế cho DE-07 Pricing and Valuation of Interest Rate and Other Swaps.
(function () {
  const L = window.LESSONS && window.LESSONS['DE-07'];
  if (!L) return;
  const { slide, addDeck, tl, frac } = window.CFAH;
  const K = 'DE-07 · Swap Pricing and Valuation';
  const S = (title, body, opt = {}) => slide(title, body, Object.assign({ kicker: K }, opt));
  const fmt = (x, d = 2) => { const neg = x < 0; const [a, b] = Math.abs(x).toFixed(d).split('.'); return (neg ? '-' : '') + a.replace(/\B(?=(\d{3})+(?!\d))/g, '.') + (b ? ',' + b : ''); };
  const pct = (x, d = 2) => `${fmt(x * 100, d)}%`;
  const sg = (x, d = 0) => (x > 0 ? '+' : '') + fmt(x, d);

  // Đường spot 2,0%; 2,5%; 3,0% và swap 3 năm notional 10 triệu.
  const z = [0.02, 0.025, 0.03], DF = z.map((r, i) => 1 / (1 + r) ** (i + 1)), sumDF = DF.reduce((a, b) => a + b, 0);
  const F = DF.map((d, i) => (i === 0 ? 1 / d - 1 : DF[i - 1] / d - 1)), s0 = (1 - DF[2]) / sumDF, NP = 1e7;
  const pvk = F.map((f, i) => (f - s0) * NP * DF[i]);
  // Một năm sau: z1 = 3,0%, z2 = 3,4%.
  const DFn = [1 / 1.03, 1 / 1.034 ** 2], sumN = DFn[0] + DFn[1], sN = (1 - DFn[1]) / sumN, Vp = (sN - s0) * sumN * NP;

  // Lãi suất kỳ hạn từng kỳ (cột) và swap rate (đường ngang).
  function fwdChart() {
    const W = 600, H = 300, l = 60, r = 585, t = 20, b = 240, y1 = 0.05;
    const ys = v => b - (v / y1) * (b - t), xs = i => l + 90 + i * 150;
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv big" role="img" aria-label="Lãi suất kỳ hạn và swap rate">`;
    [0.01, 0.02, 0.03, 0.04, 0.05].forEach(v => { s += `<line x1="${l}" y1="${ys(v)}" x2="${r}" y2="${ys(v)}" class="sv-grid"/><text x="${l - 8}" y="${ys(v) + 6}" class="sv-muted" text-anchor="end">${fmt(v * 100, 0)}%</text>`; });
    s += `<line x1="${l}" y1="${b}" x2="${r}" y2="${b}" class="sv-axis"/>`;
    F.forEach((f, i) => {
      s += `<rect x="${xs(i) - 40}" y="${ys(f)}" width="80" height="${b - ys(f)}" class="${f < s0 ? 'sv-down' : 'sv-up'}" style="fill-opacity:.35"/>`;
      s += `<text x="${xs(i)}" y="${ys(f) - 10}" class="sv-txt">${pct(f)}</text><text x="${xs(i)}" y="${b + 26}" class="sv-muted">Kỳ ${i + 1}</text>`;
    });
    s += `<line x1="${l}" y1="${ys(s0)}" x2="${r}" y2="${ys(s0)}" class="sv-pv sv-dash"/><text x="${l + 6}" y="${ys(s0) - 10}" class="sv-txt sv-t-pv" text-anchor="start">s = ${pct(s0)}</text>`;
    s += `<text x="${(l + r) / 2}" y="${H - 4}" class="sv-muted">Cột: lãi suất kỳ hạn 1 năm · nét đứt: swap rate</text>`;
    return `${s}</svg>`;
  }

  const slides = [
    S('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Derivatives · DE-07</div>
      <h2>Pricing and Valuation of<br>Interest Rate and Other Swaps</h2>
      <p>Một chuỗi FRA dùng chung một lãi suất</p>
      <div class="sd-chips"><span>LOS 1 · Swap so với chuỗi forward</span><span>LOS 2 · Giá và giá trị của swap</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Swap trả cố định = chuỗi long FRA', `${tl(3, [{ t: 1, label: 'MRR₁ - s' }, { t: 2, label: 'MRR₂ - s' }, { t: 3, label: 'MRR₃ - s' }, { t: 0, label: 'Ký: V = 0', cls: 'pv' }], { h: 140, ticks: ['0', '1', '2', '3'] })}
      <div class="sd-f">Swap 3 kỳ = FRA₁ + FRA₂ + FRA₃ &nbsp; cùng lãi suất chốt <b>s</b></div>
      <p class="sd-note">Mỗi kỳ bên trả cố định nhận (MRR - s) × notional, đúng payoff của long FRA (DE-05). NP = notional.</p>`),

    S('Giống và khác một chuỗi forward', `<div class="sd-cols2">
      <div class="sd-card"><b>Giống</b><p>Forward commitment, payoff tuyến tính</p><p>Giá chọn để giá trị lúc ký = 0</p><p>OTC, định giá không chênh lệch giá</p></div>
      <div class="sd-card acc"><b>Khác</b><p><b>Một</b> lãi suất s cho mọi kỳ → từng FRA lệch thị trường</p><p>Thanh toán định kỳ, netting</p><p>Rủi ro tín dụng giảm sau mỗi kỳ</p></div></div>
      <p class="sd-note">Bẫy: "mỗi forward ký ở giá kỳ hạn riêng" là <b>sai</b>; đúng là ở cùng swap rate.</p>`),

    S('Giá của swap: swap rate', `<div class="sd-f">s = ${frac('Σ F<sub>i-1,1</sub> × DF<sub>i</sub>', 'Σ DF<sub>i</sub>')} = ${frac('1 - DF<sub>N</sub>', 'DF<sub>1</sub> + ... + DF<sub>N</sub>')}</div>
      <div class="sd-cols2"><div class="sd-rule">Cách 1 <b>trung bình có trọng số các forward</b></div><div class="sd-rule">Cách 2 <b>coupon trái phiếu par</b></div></div>
      <p class="sd-note">Swap rate làm PV chân cố định = PV chân thả nổi, nên giá trị lúc ký = 0.</p>`),

    S('Ví dụ: swap 3 năm, z = 2,0%; 2,5%; 3,0%', `<div class="sd-tbl grid">
      <div class="head"><span>Kỳ</span><span>z</span><span>DF</span><span>Forward</span></div>
      ${DF.map((d, i) => `<div><span>${i + 1}</span><span>${pct(z[i], 1)}</span><span>${fmt(d, 6)}</span><span>${pct(F[i])}</span></div>`).join('')}
      <div><span><b>Tổng DF</b></span><span></span><span><b>${fmt(sumDF, 6)}</b></span><span></span></div></div>
      <div class="sd-f sm">s = (1 - ${fmt(DF[2], 6)}) / ${fmt(sumDF, 6)} = <b>${pct(s0)}</b></div>`),

    S('Swap rate là "trung bình" của các forward', `<div class="sd-cols2 wide-left"><div>${fwdChart()}</div>
      <div><div class="sd-rule down">Kỳ 1: F &lt; s <b>bên trả cố định chịu thiệt</b></div><div class="sd-rule up">Kỳ 3: F &gt; s <b>bên trả cố định được lợi</b></div>
      <p class="sd-note">Đường dốc lên: thiệt trước, lợi sau, tổng PV = 0.</p></div></div>`),

    S('Từng "FRA thành phần" lệch thị trường', `<div class="sd-tbl grid">
      <div class="head"><span>Kỳ (notional 10 triệu)</span><span>F - s</span><span>PV với bên trả cố định</span></div>
      ${pvk.map((v, i) => `<div><span>${i + 1}</span><span>${sg((F[i] - s0) * 100, 4)}%</span><span>${sg(v)}</span></div>`).join('')}
      <div><span><b>Tổng</b></span><span></span><span><b>${fmt(Math.abs(pvk.reduce((a, b) => a + b, 0)), 0)}</b></span></div></div>
      <p class="sd-note">Có kỳ âm, có kỳ dương; chỉ <b>tổng</b> bằng 0. Đó là khác biệt chính với các FRA ký riêng ở giá hợp lý.</p>`),

    S('Góc nhìn trái phiếu', `<div class="sd-big">Trả cố định = Long FRN + Short trái phiếu cố định</div>
      <div class="sd-cols2"><div class="sd-card"><b>FRN</b><p>Ở ngày điều chỉnh lãi suất, giá = <b>mệnh giá</b>.</p></div>
      <div class="sd-card acc"><b>Trái phiếu cố định coupon s</b><p>Σ s × DF<sub>i</sub> + DF<sub>N</sub> = 1 → cũng bằng mệnh giá lúc ký.</p></div></div>
      <p class="sd-note">Gốc hai bên triệt tiêu, nên swap lãi suất không trao đổi notional.</p>`),

    S('Giá chốt một lần, giá trị thay đổi', `<div class="sd-tbl grid">
      <div class="head"><span>Thời điểm</span><span>Giá (swap rate)</span><span>Giá trị bên trả cố định</span></div>
      <div><span>Lúc ký</span><span>s₀ từ đường spot</span><span>0</span></div>
      <div><span>Trong thời hạn</span><span>vẫn s₀</span><span>(s<sub>t</sub> - s₀) × Σ DF × NP</span></div>
      <div><span>Sau kỳ cuối</span><span>vẫn s₀</span><span>0</span></div></div>
      <p class="sd-note">s<sub>t</sub>: swap rate của swap <b>mới</b> cùng ngày đáo hạn; DF theo đường <b>hiện hành</b>. Bên nhận cố định = -V.</p>`),

    S('Một năm sau: z₁ = 3,0%, z₂ = 3,4%', `<div class="sd-steps">
      <span>① DF mới: ${fmt(DFn[0], 6)} và ${fmt(DFn[1], 6)}, tổng ${fmt(sumN, 6)}</span>
      <span>② Swap rate 2 năm mới: (1 - ${fmt(DFn[1], 6)}) / ${fmt(sumN, 6)} = ${pct(sN, 4)}</span>
      <span>③ V = (${pct(sN, 4)} - ${pct(s0, 4)}) × ${fmt(sumN, 6)} × 10 triệu = <b>${fmt(Vp, 0)} USD</b></span>
      <span>④ Kiểm tra: 10 triệu - PV trái phiếu cố định ${fmt((s0 * sumN + DFn[1]) * NP, 0)} = ${fmt(NP - (s0 * sumN + DFn[1]) * NP, 0)}</span></div>
      <p class="sd-note">Lãi suất tăng → bên <b>trả</b> cố định được lợi; bên nhận cố định -${fmt(Vp, 0)}.</p>`),

    S('Điều gì làm giá trị swap thay đổi', `<div class="sd-rule up">Lãi suất tăng <b>trả cố định +, nhận cố định -</b></div>
      <div class="sd-rule">Thời gian trôi qua <b>các kỳ đã thanh toán rời khỏi tổ hợp</b></div>
      <div class="sd-rule down">Giá trị dương <b>= tài sản, chịu rủi ro đối tác</b></div>
      <p class="sd-note">Vì vậy swap thường bù trừ qua CCP hoặc trao đổi collateral theo giá trị mark-to-market.</p>`),

    S('Các loại swap khác: cùng nguyên tắc', `<div class="sd-cols3">
      <div class="sd-card"><b>Swap tiền tệ</b><p>Lãi ở hai đồng tiền; thường <b>trao đổi gốc</b> đầu và cuối. Giá trị phụ thuộc lãi suất và tỷ giá.</p></div>
      <div class="sd-card"><b>Swap cổ phiếu</b><p>Lợi suất cổ phiếu/chỉ số đổi lấy lãi suất. Chân cổ phiếu có thể âm.</p></div>
      <div class="sd-card acc"><b>Swap hàng hóa</b><p>Giá cố định = trung bình có trọng số các giá kỳ hạn.</p></div></div>
      <p class="sd-note">Giá: làm giá trị lúc ký = 0. Giá trị: PV các dòng tiền ròng còn lại.</p>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>Swap = chuỗi FRA cùng một s</span><span>Từng FRA lệch thị trường, tổng = 0</span>
      <span>s = (1 - DF<sub>N</sub>) / Σ DF</span><span>s = trung bình có trọng số các forward</span>
      <span>Trả cố định = long FRN + short trái phiếu</span><span>Giá trị lúc ký = 0</span>
      <span>V = (s<sub>t</sub> - s₀) × Σ DF × NP</span><span>Lãi suất tăng: bên trả cố định lời</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 10 câu, mục tiêu ≥ 7 câu đúng.</p>`),
  ];

  addDeck('DE-07', `Slide Swap Pricing and Valuation - bản thiết kế riêng (${slides.length} slide)`, slides);
}());
