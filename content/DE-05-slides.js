// Bộ slide tự thiết kế cho DE-05 Pricing and Valuation of Forward Contracts and for an Underlying with Varying Maturities.
(function () {
  const L = window.LESSONS && window.LESSONS['DE-05'];
  if (!L) return;
  const { slide, addDeck, tl, frac } = window.CFAH;
  const K = 'DE-05 · Forward Valuation and FRAs';
  const S = (title, body, opt = {}) => slide(title, body, Object.assign({ kicker: K }, opt));
  const fmt = (x, d = 2) => { const neg = x < 0; const [a, b] = Math.abs(x).toFixed(d).split('.'); return (neg ? '-' : '') + a.replace(/\B(?=(\d{3})+(?!\d))/g, '.') + (b ? ',' + b : ''); };
  const pct = (x, d = 2) => `${fmt(x * 100, d)}%`;

  // Giá trị long forward theo S_t (F0 = 105, r = 5%, T = 1) khi còn 12, 6 và 0 tháng.
  function valueChart() {
    const F0 = 105, r = 0.05, W = 600, H = 300, l = 56, rr = 585, t = 20, b = 250, x0 = 90, x1 = 120, y0 = -15, y1 = 20;
    const xs = s => l + ((s - x0) / (x1 - x0)) * (rr - l), ys = v => b - ((v - y0) / (y1 - y0)) * (b - t);
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv big" role="img" aria-label="Giá trị forward theo giá giao ngay">`;
    [-10, 0, 10, 20].forEach(v => { s += `<line x1="${l}" y1="${ys(v)}" x2="${rr}" y2="${ys(v)}" class="${v === 0 ? 'sv-axis' : 'sv-grid'}"/><text x="${l - 8}" y="${ys(v) + 6}" class="sv-muted" text-anchor="end">${v}</text>`; });
    [90, 100, 110, 120].forEach(x => { s += `<text x="${xs(x)}" y="${b + 24}" class="sv-muted">${x}</text>`; });
    [['sv-pv', 1, 'còn 12 tháng'], ['sv-curve', 0.5, 'còn 6 tháng'], ['sv-up', 0, 'đáo hạn']].forEach(([cls, left, lab], i) => {
      const pv = F0 / (1 + r) ** left, v = x => x - pv;
      s += `<line x1="${xs(x0)}" y1="${ys(v(x0))}" x2="${xs(x1)}" y2="${ys(v(x1))}" class="${cls}"/>`;
      const ly = t + 14 + i * 26;
      s += `<line x1="${l + 14}" y1="${ly - 6}" x2="${l + 44}" y2="${ly - 6}" class="${cls}"/><text x="${l + 52}" y="${ly}" class="sv-txt" text-anchor="start" style="font-size:17px">${lab}: V = 0 tại S = ${fmt(pv)}</text>`;
    });
    s += `<text x="${(l + rr) / 2}" y="${H - 4}" class="sv-muted">Giá giao ngay S<tspan dy="4" font-size="14">t</tspan><tspan dy="-4"> · trục dọc: giá trị long forward</tspan></text>`;
    return `${s}</svg>`;
  }

  const pvI = 1.5 / 1.04 ** (1 / 12), F0d = (60 - 1.5 / 1.04 ** 0.25) * 1.04 ** 0.5, pvF0d = F0d / 1.04 ** (4 / 12);
  const Ftd = (62 - pvI) * 1.04 ** (4 / 12);
  const z = [0.02, 0.025, 0.03], f11 = 1.025 ** 2 / 1.02 - 1, f21 = 1.03 ** 3 / 1.025 ** 2 - 1;
  const ex51 = 1.03 ** 3 / 1.02 ** 2 - 1, fra39 = ((1 + 0.012 * 0.75) / (1 + 0.01 * 0.25) - 1) / 0.5;
  const bars = (rows, lo, hi) => `<div class="sd-bars">${rows.map(([lab, v]) => `<div class="sd-bar"><span class="sd-bar-l">${lab}</span><span class="sd-bar-t"><i style="width:${((v - lo) / (hi - lo)) * 100}%"></i></span><b>${pct(v)}</b></div>`).join('')}</div>`;

  const slides = [
    S('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Derivatives · DE-05</div>
      <h2>Pricing and Valuation of<br>Forward Contracts</h2>
      <p>Giá chốt một lần - giá trị thay đổi mỗi ngày</p>
      <div class="sd-chips"><span>LOS 1 · Giá và giá trị: lúc ký, trong kỳ, đáo hạn</span><span>LOS 2 · Lãi suất kỳ hạn và FRA</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Giá (price) khác giá trị (value)', `<div class="sd-cols2">
      <div class="sd-card"><div class="sd-n">1</div><b>Giá kỳ hạn F₀(T)</b><p>Con số ghi trong hợp đồng. Chốt lúc ký, <b>không đổi</b> đến T.</p></div>
      <div class="sd-card acc"><div class="sd-n">2</div><b>Giá trị Vₜ(T)</b><p>Hợp đồng đáng giá bao nhiêu hôm nay. Bắt đầu từ <b>0</b>, đổi theo S<sub>t</sub>, r, thời gian.</p></div></div>
      <p class="sd-note">Giá kỳ hạn = mức giá làm cho giá trị lúc ký bằng 0. Short luôn có giá trị = <b>-V<sub>t</sub></b>.</p>`),

    S('Lúc ký: V₀ = 0', `<div class="sd-f">V₀ = S₀ - PV(I) + PV(C) - ${frac('F₀(T)', '(1 + r)<sup>T</sup>')} = 0</div>
      <div class="sd-cols2"><div class="sd-card"><b>Giá hợp lý</b><p>S₀ = 50, r = 4%, T = 1</p><p>F₀ = 50 × 1,04 = <b>52</b> → V₀ = 0</p></div>
      <div class="sd-card acc"><b>Giá lệch (off-market) F = 50</b><p>V₀ = 50 - 50/1,04 = <b>${fmt(50 - 50 / 1.04)}</b></p><p>Bên long phải trả bên short ${fmt(50 - 50 / 1.04)} lúc ký.</p></div></div>`),

    S('Trong kỳ hạn: so Sₜ với PV của F₀', `${tl(4, [{ t: 0, label: 'Ký: V = 0' }, { t: 3, label: 'Định giá tại t: Sₜ', cls: 'pv' }, { t: 4, label: 'Trả F₀(T)', cls: 'down' }], { h: 140, ticks: ['0', '', '', 't', 'T'] })}
      <div class="sd-f">V<sub>t</sub> = S<sub>t</sub> - PV<sub>t</sub>(I) + PV<sub>t</sub>(C) - ${frac('F₀(T)', '(1 + r)<sup>T - t</sup>')}</div>
      <p class="sd-note">Chiết khấu trong <b>T - t</b> năm còn lại, không phải cả T.</p>`),

    S('Ví dụ: long forward giá 35, sau 9 tháng', `<div class="sd-tbl grid">
      <div class="head"><span>Bước</span><span>Tính</span><span>Kết quả</span></div>
      <div><span>Thời gian còn lại</span><span>1 - 0,75</span><span>0,25 năm</span></div>
      <div><span>PV của F₀</span><span>35 / 1,03<sup>0,25</sup></span><span>${fmt(35 / 1.03 ** 0.25, 4)}</span></div>
      <div><span>Giá trị bên long</span><span>36 - ${fmt(35 / 1.03 ** 0.25, 4)}</span><span><b>${fmt(36 - 35 / 1.03 ** 0.25)}</b></span></div>
      <div><span>Giá trị bên short</span><span>-V</span><span><b>${fmt(-(36 - 35 / 1.03 ** 0.25))}</b></span></div></div>
      <p class="sd-note">Bẫy: 36 - 35 = 1 (quên chiết khấu) hoặc 36 - 35/1,03 = ${fmt(36 - 35 / 1.03)} (chiết khấu cả năm).</p>`),

    S('Giá trị thay đổi theo Sₜ và thời gian', `<div class="sd-cols2 wide-left"><div>${valueChart()}</div>
      <div><div class="sd-rule up">Sₜ tăng <b>long có lợi</b></div><div class="sd-rule down">Sₜ giảm <b>short có lợi</b></div>
      <p class="sd-note">F₀ = 105 (S₀ = 100, r = 5%, T = 1). Càng gần đáo hạn, PV(F₀) càng tiến về 105.</p></div></div>`),

    S('Cách 2: hợp đồng bù trừ', `<div class="sd-f">V<sub>t</sub> = ${frac('F<sub>t</sub>(T) - F₀(T)', '(1 + r)<sup>T - t</sup>')}</div>
      <div class="sd-tbl grid">
      <div class="head"><span>Cổ phiếu 62, cổ tức 1,50 sau 1 tháng, còn 4 tháng</span><span>Giá trị</span></div>
      <div><span>F₀ đã chốt (DE-04)</span><span>${fmt(F0d, 4)}</span></div>
      <div><span>F<sub>t</sub> = (62 - ${fmt(pvI, 4)}) × 1,04<sup>4/12</sup></span><span>${fmt(Ftd, 4)}</span></div>
      <div><span>V<sub>t</sub> = (${fmt(Ftd, 4)} - ${fmt(F0d, 4)}) / 1,04<sup>4/12</sup></span><span><b>${fmt((Ftd - F0d) / 1.04 ** (4 / 12))}</b></span></div></div>
      <p class="sd-note">Cách 1 cho cùng kết quả: 62 - ${fmt(pvI, 4)} - ${fmt(pvF0d, 4)} = ${fmt(62 - pvI - pvF0d)}.</p>`),

    S('Ba thời điểm của một hợp đồng', `<div class="sd-tbl grid">
      <div class="head"><span>Thời điểm</span><span>Giá F₀(T)</span><span>Giá trị bên long</span></div>
      <div><span>t = 0</span><span>cost of carry</span><span>0</span></div>
      <div><span>0 &lt; t &lt; T</span><span>không đổi</span><span>S<sub>t</sub> - PV(F₀)</span></div>
      <div><span>t = T</span><span>không đổi</span><span>S<sub>T</sub> - F₀(T)</span></div></div>
      <p class="sd-note">Đáo hạn với S<sub>T</sub> = 58: long = 58 - ${fmt(F0d, 4)} = <b>${fmt(58 - F0d)}</b>. Giá trị dương giữa kỳ chỉ là lời chưa thực hiện.</p>`),

    S('Lãi suất kỳ hạn ngầm định', `${tl(3, [{ t: 0, label: 'z₂ = 2% trong 2 năm', cls: 'pv' }, { t: 2, label: 'F₂,₁ = ?' }, { t: 3, label: 'z₃ = 3%', cls: 'down' }], { h: 140, ticks: ['0', '1', '2', '3'] })}
      <div class="sd-f">(1 + z<sub>B</sub>)<sup>B</sup> = (1 + z<sub>A</sub>)<sup>A</sup>(1 + F<sub>A,B-A</sub>)<sup>B - A</sup></div>
      <p class="sd-note">F₂,₁ = 1,03³ / 1,02² - 1 = <b>${pct(ex51)}</b>. Kỳ nhiều năm: nhớ lấy căn bậc B - A.</p>`),

    S('Spot rate và forward rate: hai cách nhìn một đường cong', `<div class="sd-cols2">
      <div><p class="sd-cap">Spot rate z</p>${bars([['z₁', z[0]], ['z₂', z[1]], ['z₃', z[2]]], 0, 0.045)}</div>
      <div><p class="sd-cap">Forward rate 1 năm</p>${bars([['F₀,₁', z[0]], ['F₁,₁', f11], ['F₂,₁', f21]], 0, 0.045)}</div></div>
      <p class="sd-note">Trái phiếu 3 năm coupon 4%: chiết khấu bằng spot hay bằng chuỗi forward đều ra <b>${fmt(4 / 1.02 + 4 / 1.025 ** 2 + 104 / 1.03 ** 3)}</b>. Dùng để chốt lãi suất, định giá FRA, futures, swap.</p>`),

    S('FRA: forward trên lãi suất', `<div class="sd-cols2">
      <div class="sd-card acc"><b>Long FRA</b><p>Trả cố định, nhận MRR. Lời khi MRR <b>tăng</b>.</p><p>Dùng cho người <b>sắp đi vay</b>.</p></div>
      <div class="sd-card"><b>Short FRA</b><p>Nhận cố định, trả MRR. Lời khi MRR <b>giảm</b>.</p><p>Dùng cho người <b>sắp cho vay</b>.</p></div></div>
      <p class="sd-note">FRA <b>3×9</b>: MRR 6 tháng bắt đầu sau 3 tháng. MRR 3 tháng 1,0%, 9 tháng 1,2% → lãi suất FRA = <b>${pct(fra39)}</b>.</p>`),

    S('Nam chốt lãi vay 6% bằng long FRA 3×9', `<div class="sd-tbl grid">
      <div class="head"><span>100 triệu đồng, 6 tháng</span><span>MRR = 8%</span><span>MRR = 5%</span></div>
      <div><span>Lãi vay thực tế</span><span>${fmt(0.08 * 0.5 * 100, 1)} triệu</span><span>${fmt(0.05 * 0.5 * 100, 1)} triệu</span></div>
      <div><span>FRA (MRR - 6%) × 0,5 × 100</span><span>nhận ${fmt(0.02 * 0.5 * 100, 1)}</span><span>trả ${fmt(0.01 * 0.5 * 100, 1)}</span></div>
      <div><span><b>Chi phí ròng</b></span><span><b>3,0 = 6%</b></span><span><b>3,0 = 6%</b></span></div></div>
      <div class="sd-f sm">Thanh toán đầu kỳ vay = ${frac('(MRR - FRA) × t × Notional', '1 + MRR × t')} → 1.000.000 / 1,04 = ${fmt(1e6 / 1.04, 0)} đồng</div>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>Giá chốt một lần, giá trị thay đổi</span><span>Lúc ký: V₀ = 0</span>
      <span>Trong kỳ: S<sub>t</sub> - PV<sub>t</sub>(I) + PV<sub>t</sub>(C) - PV(F₀)</span><span>Đáo hạn: S<sub>T</sub> - F₀(T)</span>
      <span>Short = -V của long</span><span>(1 + z<sub>B</sub>)<sup>B</sup> = (1 + z<sub>A</sub>)<sup>A</sup>(1 + F)<sup>B - A</sup></span>
      <span>Người đi vay long FRA</span><span>Thanh toán FRA nhớ nhân t</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 10 câu, mục tiêu ≥ 7 câu đúng.</p>`),
  ];

  addDeck('DE-05', `Slide Forward Valuation and FRAs - bản thiết kế riêng (${slides.length} slide)`, slides);
}());
