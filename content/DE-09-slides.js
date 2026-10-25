// Bộ slide tự thiết kế cho DE-09 Option Replication Using Put-Call Parity.
(function () {
  const L = window.LESSONS && window.LESSONS['DE-09'];
  if (!L) return;
  const { slide, addDeck, frac } = window.CFAH;
  const K = 'DE-09 · Put-Call Parity';
  const S = (title, body, opt = {}) => slide(title, body, Object.assign({ kicker: K }, opt));
  const fmt = (x, d = 2) => { const neg = x < 0; const [a, b] = Math.abs(x).toFixed(d).split('.'); return (neg ? '-' : '') + a.replace(/\B(?=(\d{3})+(?!\d))/g, '.') + (b ? ',' + b : ''); };

  // Ví dụ gốc: S0 = 50, X = 50, r = 4%, T = 1, c0 = 6.
  const S0 = 50, X = 50, r = 0.04, c0 = 6, pvX = X / (1 + r), p0 = c0 + pvX - S0;

  // Payoff tại T của fiduciary call và protective put: cả hai bằng max(ST, X).
  function payoffChart() {
    const W = 600, H = 300, l = 52, rr = 585, t = 16, b = 250, x0 = 0, x1 = 100, y1 = 100;
    const xs = v => l + ((v - x0) / (x1 - x0)) * (rr - l), ys = v => b - (v / y1) * (b - t);
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv big" role="img" aria-label="Payoff fiduciary call và protective put">`;
    [25, 50, 75, 100].forEach(v => { s += `<line x1="${l}" y1="${ys(v)}" x2="${rr}" y2="${ys(v)}" class="sv-grid"/><text x="${l - 8}" y="${ys(v) + 6}" class="sv-muted" text-anchor="end">${v}</text>`; });
    s += `<line x1="${l}" y1="${b}" x2="${rr}" y2="${b}" class="sv-axis"/><line x1="${l}" y1="${t}" x2="${l}" y2="${b}" class="sv-axis"/>`;
    [0, 25, 50, 75, 100].forEach(v => { s += `<text x="${xs(v)}" y="${b + 24}" class="sv-muted">${v}</text>`; });
    s += `<line x1="${xs(0)}" y1="${ys(0)}" x2="${xs(100)}" y2="${ys(50)}" class="sv-dash"/><text x="${xs(88)}" y="${ys(36)}" class="sv-muted">call</text>`;
    s += `<line x1="${xs(0)}" y1="${ys(X)}" x2="${xs(X)}" y2="${ys(X)}" class="sv-curve"/><line x1="${xs(X)}" y1="${ys(X)}" x2="${xs(100)}" y2="${ys(100)}" class="sv-curve"/>`;
    s += `<text x="${xs(22)}" y="${ys(X) - 14}" class="sv-txt">sàn X = 50</text><text x="${xs(70)}" y="${ys(86)}" class="sv-txt">max(S<tspan dy="5" font-size="13">T</tspan><tspan dy="-5">, X)</tspan></text>`;
    s += `<text x="${(l + rr) / 2}" y="${H - 4}" class="sv-muted">Giá tài sản khi đáo hạn</text>`;
    return `${s}</svg>`;
  }

  // Thanh so sánh nợ và vốn chủ trong ví dụ giá trị công ty.
  const debt = 80 / 1.05 - 3, eq = 100 - debt;

  const slides = [
    S('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Derivatives · DE-09</div>
      <h2>Option Replication Using<br>Put-Call Parity</h2>
      <p>Tài sản, call, put, trái phiếu: biết ba, khóa được cái thứ tư</p>
      <div class="sd-chips"><span>LOS 1 · Put-call parity</span><span>LOS 2 · Put-call forward parity</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Hai danh mục, một payoff', `<div class="sd-cols2">
      <div class="sd-card acc"><b>Fiduciary call</b><p>Long call + trái phiếu trả X</p><p>Chi phí: c₀ + PV(X)</p></div>
      <div class="sd-card acc"><b>Protective put</b><p>Long tài sản + long put</p><p>Chi phí: S₀ + p₀</p></div></div>
      <div class="sd-tbl grid">
      <div class="head"><span>Giá trị tại T</span><span>S<sub>T</sub> &lt; X</span><span>S<sub>T</sub> ≥ X</span></div>
      <div><span>Fiduciary call</span><span>0 + X = X</span><span>(S<sub>T</sub> - X) + X = S<sub>T</sub></span></div>
      <div><span>Protective put</span><span>S<sub>T</sub> + (X - S<sub>T</sub>) = X</span><span>S<sub>T</sub> + 0 = S<sub>T</sub></span></div></div>`),

    S('Cả hai đều trả max(S, X) khi đáo hạn', `<div class="sd-cols2 wide-left"><div>${payoffChart()}</div>
      <div><div class="sd-f sm">S₀ + p₀ = c₀ + PV(X)</div>
      <p class="sd-note">Cùng payoff trong <b>mọi</b> kịch bản → cùng giá hôm nay.</p>
      <p class="sd-note">Điều kiện: châu Âu, cùng tài sản, cùng X, cùng T.</p></div></div>`),

    S('Ví dụ: suy giá put từ giá call', `<div class="sd-steps">
      <span>S₀ = 50 · X = 50 · T = 1 · r = 4% · c₀ = 6,00</span>
      <span>PV(X) = 50 / 1,04 = <b>${fmt(pvX)}</b></span>
      <span>p₀ = c₀ + PV(X) - S₀ = 6,00 + ${fmt(pvX)} - 50 = <b>${fmt(p0)}</b></span>
      <span>Kiểm tra: 50 + ${fmt(p0)} = 6,00 + ${fmt(pvX)} = <b>${fmt(S0 + p0)}</b></span></div>
      <p class="sd-note">Bẫy: dùng X thay PV(X) sẽ ra p₀ = 6,00.</p>`),

    S('Chuyển vế, đổi dấu', `<div class="sd-big">+ S₀ + p₀ - c₀ - PV(X) = 0</div>
      <div class="sd-cols3">
      <div class="sd-card"><div class="sd-n">+</div><b>Long</b><p>Mua tài sản, call, put; trái phiếu dương là cho vay.</p></div>
      <div class="sd-card"><div class="sd-n">-</div><b>Short</b><p>Bán, bán khống; trái phiếu âm là đi vay.</p></div>
      <div class="sd-card acc"><div class="sd-n">⇄</div><b>Chuyển vế</b><p>Đưa công cụ muốn tạo sang một vế, các công cụ còn lại giữ dấu tương ứng.</p></div></div>`),

    S('Bảng vị thế tổng hợp', `<div class="sd-tbl grid">
      <div class="head"><span>Muốn tạo</span><span>Tài sản</span><span>Call</span><span>Put</span><span>Trái phiếu</span></div>
      <div><span>Synthetic call</span><span>Long</span><span>-</span><span>Long</span><span>Vay</span></div>
      <div><span>Synthetic put</span><span>Short</span><span>Long</span><span>-</span><span>Cho vay</span></div>
      <div><span>Synthetic tài sản</span><span>-</span><span>Long</span><span>Short</span><span>Cho vay</span></div>
      <div><span>Synthetic trái phiếu</span><span>Long</span><span>Short</span><span>Long</span><span>-</span></div>
      <div><span>Synthetic short call</span><span>Short</span><span>-</span><span>Short</span><span>Cho vay</span></div>
      <div><span>Synthetic short put</span><span>Long</span><span>Short</span><span>-</span><span>Vay</span></div></div>`),

    S('Danh mục phi rủi ro', `<div class="sd-f">Long tài sản + long put - call = trái phiếu trả X</div>
      <div class="sd-cols2">
      <div class="sd-rule up">Put <b>chặn dưới ở X</b></div><div class="sd-rule down">Short call <b>chặn trên ở X</b></div></div>
      <div class="sd-tbl grid">
      <div class="head"><span>S<sub>T</sub></span><span>30</span><span>50</span><span>70</span></div>
      <div><span>Tài sản + put - call</span><span>30 + 20 - 0 = 50</span><span>50 + 0 - 0 = 50</span><span>70 + 0 - 20 = 50</span></div></div>
      <p class="sd-note">Phi rủi ro → phải sinh lợi đúng bằng <b>r</b>. Long call + short put = long forward ở giá X.</p>`),

    S('Parity bị lệch → arbitrage', `<div class="sd-tbl grid">
      <div class="head"><span>Bước (put chỉ còn 3,50)</span><span>t = 0</span><span>S<sub>T</sub> &lt; 50</span><span>S<sub>T</sub> ≥ 50</span></div>
      <div><span>Mua cổ phiếu</span><span>-50,00</span><span>S<sub>T</sub></span><span>S<sub>T</sub></span></div>
      <div><span>Mua put</span><span>-3,50</span><span>50 - S<sub>T</sub></span><span>0</span></div>
      <div><span>Bán call</span><span>+6,00</span><span>0</span><span>50 - S<sub>T</sub></span></div>
      <div><span>Vay PV(X)</span><span>+${fmt(pvX)}</span><span>-50</span><span>-50</span></div>
      <div><span><b>Tổng</b></span><span><b>+${fmt(6 + pvX - 53.5)}</b></span><span><b>0</b></span><span><b>0</b></span></div></div>
      <p class="sd-note">Protective put 53,50 &lt; fiduciary call ${fmt(6 + pvX)}: <b>mua vế rẻ, bán vế đắt</b>.</p>`),

    S('Tài sản tổng hợp → put-call forward parity', `<div class="sd-steps">
      <span>① Long forward ở F₀(T) + trái phiếu trả F₀(T) = nắm tài sản tại T</span>
      <span>② Chi phí hôm nay: PV(F₀(T)) (forward không tốn tiền khi ký)</span>
      <span>③ Thay S₀ bằng PV(F₀(T)) trong put-call parity</span></div>
      <div class="sd-f">F₀(T)(1 + r)<sup>-T</sup> + p₀ = c₀ + X(1 + r)<sup>-T</sup></div>
      <div class="sd-f sm">c₀ - p₀ = ${frac('F₀(T) - X', '(1 + r)<sup>T</sup>')} &nbsp;&nbsp; X = F₀(T) → c₀ = p₀</div>`),

    S('Hai ví dụ dạng forward', `<div class="sd-cols2">
      <div class="sd-card acc"><b>Cho sẵn giá kỳ hạn</b><p>F = 81,20 · X = 80 · r = 3% · T = 0,5 · c₀ = 5,50</p><p>PV(F - X) = 1,20 / 1,03<sup>0,5</sup> = ${fmt(1.2 / 1.03 ** 0.5)}</p><p>p₀ = <b>${fmt(5.5 - 1.2 / 1.03 ** 0.5)}</b></p></div>
      <div class="sd-card"><b>Cổ phiếu có cổ tức</b><p>S₀ = 50 · PV(cổ tức) = 1 · X = 50 · r = 5% · c₀ = 4</p><p>F = 49 × 1,05 = ${fmt(49 * 1.05)} → PV(F) = 49</p><p>p₀ = 4 - 49 + ${fmt(50 / 1.05)} = <b>${fmt(4 - 49 + 50 / 1.05)}</b></p></div></div>
      <p class="sd-note">Dạng forward đã "trừ sẵn" lợi ích nắm giữ: không phải tự điều chỉnh S₀.</p>`),

    S('Ứng dụng: protective put và covered call', `<div class="sd-tbl grid">
      <div class="head"><span>Chiến lược</span><span>Tương đương</span><span>Ví dụ gốc</span></div>
      <div><span>Protective put: S + p</span><span>c + PV(X)</span><span>${fmt(S0 + p0)}</span></div>
      <div><span>Covered call: S - c</span><span>PV(X) - p</span><span>${fmt(S0 - c0)}</span></div></div>
      <div class="sd-cols2">
      <div class="sd-rule up">Protective put <b>có sàn, giữ phần tăng</b></div><div class="sd-rule down">Covered call <b>như bán put</b></div></div>
      <p class="sd-note">Covered call: thu phí đổi lấy trần lãi, vẫn chịu gần hết rủi ro giảm giá như người bán put.</p>`),

    S('Ứng dụng: giá trị công ty là một quyền chọn', `<div class="sd-cols2">
      <div><div class="sd-rule up">Vốn chủ <b>call trên tài sản, X = D</b></div><div class="sd-rule down">Nợ <b>PV(D) - put</b></div>
      <p class="sd-note">Cổ đông có trách nhiệm hữu hạn: tài sản &lt; nợ thì giao công ty cho chủ nợ.</p></div>
      <div class="sd-bars">
      <div class="sd-bar"><span class="sd-bar-l">Tài sản V₀</span><span class="sd-bar-t"><i style="width:100%"></i></span><b>100</b></div>
      <div class="sd-bar"><span class="sd-bar-l">PV(D) = 80/1,05</span><span class="sd-bar-t"><i style="width:${80 / 1.05}%"></i></span><b>${fmt(80 / 1.05)}</b></div>
      <div class="sd-bar"><span class="sd-bar-l">Nợ = PV(D) - 3</span><span class="sd-bar-t"><i style="width:${debt}%"></i></span><b>${fmt(debt)}</b></div>
      <div class="sd-bar"><span class="sd-bar-l">Vốn chủ</span><span class="sd-bar-t"><i style="width:${eq}%"></i></span><b>${fmt(eq)}</b></div></div></div>
      <p class="sd-note">Put trị giá 3 là "giá" của rủi ro vỡ nợ: lợi suất nợ ${fmt((80 / debt - 1) * 100)}% so với r = 5%.</p>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>S₀ + p₀ = c₀ + PV(X)</span><span>Châu Âu, cùng X, cùng T</span>
      <span>Chuyển vế đổi dấu</span><span>S + p - c = trái phiếu phi rủi ro</span>
      <span>Lệch parity: mua rẻ, bán đắt</span><span>PV(F) + p₀ = c₀ + PV(X)</span>
      <span>X = F₀(T) → c₀ = p₀</span><span>Vốn chủ = call; nợ = PV(D) - put</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 10 câu, mục tiêu ≥ 7 câu đúng.</p>`),
  ];

  addDeck('DE-09', `Slide Put-Call Parity - bản thiết kế riêng (${slides.length} slide)`, slides);
}());
