// Bộ slide tự thiết kế cho DE-10 Valuing a Derivative Using a One-Period Binomial Model.
(function () {
  const L = window.LESSONS && window.LESSONS['DE-10'];
  if (!L) return;
  const { slide, addDeck, frac } = window.CFAH;
  const K = 'DE-10 · One-Period Binomial Model';
  const S = (title, body, opt = {}) => slide(title, body, Object.assign({ kicker: K }, opt));
  const fmt = (x, d = 2) => { const neg = x < 0; const [a, b] = Math.abs(x).toFixed(d).split('.'); return (neg ? '-' : '') + a.replace(/\B(?=(\d{3})+(?!\d))/g, '.') + (b ? ',' + b : ''); };

  // Ví dụ xuyên suốt: S0 = 50, u = 1,20, d = 0,90, r = 5%, X = 50.
  const S0 = 50, u = 1.2, d = 0.9, r = 0.05, X = 50;
  const Su = S0 * u, Sd = S0 * d, cu = Math.max(0, Su - X), cd = Math.max(0, Sd - X), pu = Math.max(0, X - Su), pd = Math.max(0, X - Sd);
  const h = (cu - cd) / (Su - Sd), B = (h * Sd - cd) / (1 + r), c0 = h * S0 - B;
  const hp = (pu - pd) / (Su - Sd), Lend = (pd - hp * Sd) / (1 + r), p0 = hp * S0 + Lend;
  const pi = (1 + r - d) / (u - d);

  // Cây một kỳ: mỗi nút có nhãn chính và nhãn phụ.
  function tree(n0, nu, nd, mid) {
    const node = (x, y, cls, a, b) => `<circle cx="${x}" cy="${y}" r="12" class="sv-node ${cls}"/><text x="${x + 22}" y="${y - 4}" text-anchor="start" class="sv-txt">${a}</text><text x="${x + 22}" y="${y + 22}" text-anchor="start" class="sv-muted">${b}</text>`;
    const root = `<circle cx="130" cy="110" r="12" class="sv-node"/><text x="130" y="152" class="sv-txt">${n0[0]}</text><text x="130" y="176" class="sv-muted">${n0[1]}</text>`;
    return `<svg viewBox="0 0 600 240" class="sv big" role="img" aria-label="Cây nhị phân một kỳ">
      <line x1="130" y1="110" x2="340" y2="40" class="sv-up"/><line x1="130" y1="110" x2="340" y2="190" class="sv-down"/>
      ${mid ? `<text x="250" y="58" class="sv-muted" text-anchor="end">${mid[0]}</text><text x="250" y="186" class="sv-muted" text-anchor="end">${mid[1]}</text>` : ''}
      ${root}${node(340, 40, 'up', nu[0], nu[1])}${node(340, 190, 'down', nd[0], nd[1])}</svg>`;
  }

  const slides = [
    S('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Derivatives · DE-10</div>
      <h2>Valuing a Derivative Using<br>a One-Period Binomial Model</h2>
      <p>Sao chép hoặc trung lập rủi ro: hai đường, một giá</p>
      <div class="sd-chips"><span>LOS 1 · Định giá bằng mô hình nhị thức một kỳ</span><span>LOS 2 · Khái niệm trung lập rủi ro</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Cây một kỳ: hai trạng thái', `<div class="sd-cols2 wide-left"><div>${tree([`S₀ = ${S0}`, 'c₀ = ? · p₀ = ?'], [`uS₀ = ${Su}`, `call ${cu} · put ${pu}`], [`dS₀ = ${Sd}`, `call ${cd} · put ${pd}`], ['u = 1,20', 'd = 0,90'])}</div>
      <div><div class="sd-f sm">X = 50 · r = 5% một kỳ</div>
      <p class="sd-note">Payoff của call và put ở mỗi nút cuối tính được ngay. Việc cần làm: đưa chúng về <b>hôm nay</b>.</p></div></div>`),

    S('Điều kiện không chênh lệch giá', `<div class="sd-big">d &lt; 1 + r &lt; u</div>
      <div class="sd-rule down">1 + r ≥ u <b>bán khống cổ phiếu, cho vay</b></div>
      <div class="sd-rule down">1 + r ≤ d <b>vay tiền, mua cổ phiếu</b></div>
      <div class="sd-rule up">0,90 &lt; 1,05 &lt; 1,20 <b>mô hình hợp lệ</b></div>
      <p class="sd-note">Cổ phiếu phải có lúc tốt hơn, có lúc kém hơn trái phiếu phi rủi ro.</p>`),

    S('Sao chép call: hai phương trình, hai ẩn', `<div class="sd-steps">
      <span>Mua h cổ phiếu, vay B: &nbsp; 60h - 1,05B = 10 &nbsp;và&nbsp; 45h - 1,05B = 0</span>
      <span>Trừ hai vế: h = ${frac('c<sup>u</sup> - c<sup>d</sup>', 'S<sup>u</sup> - S<sup>d</sup>')} = 10/15 = <b>${fmt(h, 4)}</b></span>
      <span>Khoản vay: B = (45 × ${fmt(h, 4)} - 0)/1,05 = <b>${fmt(B)}</b></span>
      <span>c₀ = hS₀ - B = ${fmt(h * S0)} - ${fmt(B)} = <b>${fmt(c0)}</b></span></div>`),

    S('Kiểm tra: danh mục trả giống hệt call', `<div class="sd-tbl grid">
      <div class="head"><span></span><span>Giá lên (60)</span><span>Giá xuống (45)</span></div>
      <div><span>${fmt(h, 4)} cổ phiếu</span><span>${fmt(h * Su)}</span><span>${fmt(h * Sd)}</span></div>
      <div><span>Trả nợ ${fmt(B)} × 1,05</span><span>-${fmt(B * 1.05)}</span><span>-${fmt(B * 1.05)}</span></div>
      <div><span><b>Danh mục</b></span><span><b>${fmt(h * Su - B * 1.05)}</b></span><span><b>${fmt(h * Sd - B * 1.05)}</b></span></div>
      <div><span>Call</span><span>${fmt(cu)}</span><span>${fmt(cd)}</span></div></div>
      <p class="sd-note">Cùng payoff ở mọi trạng thái → cùng giá: c₀ = chi phí danh mục = <b>${fmt(c0)}</b>.</p>`),

    S('Góc phòng hộ: h cổ phiếu - 1 call là phi rủi ro', `<div class="sd-cols2 wide-left"><div>${tree([`Chi phí ${fmt(h * S0)} - c₀`, 'mua h cổ phiếu, bán 1 call'], [`${fmt(h * Su)} - ${fmt(cu)} = ${fmt(h * Su - cu)}`, 'giá lên'], [`${fmt(h * Sd)} - ${fmt(cd)} = ${fmt(h * Sd - cd)}`, 'giá xuống'])}</div>
      <div><div class="sd-f sm">(${fmt(h * S0)} - c₀) × 1,05 = ${fmt(h * Sd - cd)}</div>
      <p class="sd-note">Phi rủi ro → sinh lợi đúng r → c₀ = <b>${fmt(c0)}</b>.</p></div></div>`),

    S('Call và put: cùng công thức, khác dấu', `<div class="sd-cols2">
      <div class="sd-card acc"><b>Call X = 50</b><p>h = (10 - 0)/15 = <b>+${fmt(h, 4)}</b></p><p>Mua cổ phiếu, <b>vay</b> ${fmt(B)}</p><p>c₀ = ${fmt(h * S0)} - ${fmt(B)} = <b>${fmt(c0)}</b></p></div>
      <div class="sd-card"><b>Put X = 50</b><p>h = (0 - 5)/15 = <b>${fmt(hp, 4)}</b></p><p>Bán khống cổ phiếu, <b>cho vay</b> ${fmt(Lend)}</p><p>p₀ = ${fmt(hp * S0)} + ${fmt(Lend)} = <b>${fmt(p0)}</b></p></div></div>
      <p class="sd-note">h<sub>call</sub> - h<sub>put</sub> = 1: call trừ put tương đương một cổ phiếu (cộng trái phiếu), đúng như DE-09.</p>`),

    S('Kiểm tra lại put-call parity', `<div class="sd-f">S₀ + p₀ = c₀ + PV(X)</div>
      <div class="sd-cols2">
      <div class="sd-card"><b>Vế trái</b><p>50 + ${fmt(p0)} = <b>${fmt(S0 + p0)}</b></p></div>
      <div class="sd-card acc"><b>Vế phải</b><p>${fmt(c0)} + 50/1,05 = ${fmt(c0)} + ${fmt(X / 1.05)} = <b>${fmt(c0 + X / 1.05)}</b></p></div></div>
      <p class="sd-note">Mô hình nhị thức và parity cùng dựa trên không chênh lệch giá nên không bao giờ mâu thuẫn.</p>`),

    S('Đường tắt: xác suất trung lập rủi ro π', `<div class="sd-f">π = ${frac('1 + r - d', 'u - d')} = ${frac('1,05 - 0,90', '1,20 - 0,90')} = ${fmt(pi)}</div>
      <div class="sd-f">c₀ = ${frac('π c<sup>u</sup> + (1 - π) c<sup>d</sup>', '1 + r')} = ${frac(`${fmt(pi, 1)} × 10 + ${fmt(1 - pi, 1)} × 0`, '1,05')} = ${fmt(c0)}</div>
      <p class="sd-note">Put: (${fmt(pi, 1)} × 0 + ${fmt(1 - pi, 1)} × 5)/1,05 = <b>${fmt(p0)}</b>. Trùng với kết quả sao chép.</p>`),

    S('π không phải xác suất thực tế', `<div class="sd-bars">
      <div class="sd-bar"><span class="sd-bar-l">S₀ hôm nay</span><span class="sd-bar-t"><i style="width:${((50 - 45) / 10) * 100}%"></i></span><b>50</b></div>
      <div class="sd-bar"><span class="sd-bar-l">E(S₁) theo π = 0,5</span><span class="sd-bar-t"><i style="width:${((pi * Su + (1 - pi) * Sd - 45) / 10) * 100}%"></i></span><b>${fmt(pi * Su + (1 - pi) * Sd, 1)}</b></div>
      <div class="sd-bar"><span class="sd-bar-l">E(S₁) theo xác suất thực 0,6</span><span class="sd-bar-t"><i style="width:${((0.6 * Su + 0.4 * Sd - 45) / 10) * 100}%"></i></span><b>${fmt(0.6 * Su + 0.4 * Sd, 0)}</b></div></div>
      <p class="sd-note">Theo π, cổ phiếu chỉ sinh lợi đúng <b>r = 5%</b> (52,5 = 50 × 1,05). Theo xác suất thực, lợi suất kỳ vọng 8% đã gồm phần bù rủi ro.</p>`),

    S('Trung lập rủi ro: điều chỉnh xác suất, không điều chỉnh lãi suất', `<div class="sd-cols2">
      <div class="sd-card"><b>Dùng xác suất thực 0,6</b><p>Payoff kỳ vọng của call: 0,6 × 10 = 6</p><p>Chiết khấu ở r: 6/1,05 = <b>${fmt(6 / 1.05)}</b> - sai</p><p>Lãi suất đúng cho call: 6/${fmt(c0)} - 1 = <b>${fmt((6 / c0 - 1) * 100, 0)}%</b>, không ai biết trước</p></div>
      <div class="sd-card acc"><b>Dùng π = 0,5</b><p>Payoff "trung lập rủi ro": 0,5 × 10 = 5</p><p>Chiết khấu ở r: 5/1,05 = <b>${fmt(c0)}</b> - đúng</p><p>Không cần biết khẩu vị rủi ro của ai</p></div></div>
      <p class="sd-note">Định giá <b>như thể</b> nhà đầu tư trung lập rủi ro, vì phái sinh phòng hộ được hoàn toàn. Không phải giả định về con người.</p>`),

    S('Giá lệch mô hình → arbitrage', `<div class="sd-tbl grid">
      <div class="head"><span>Call thị trường 5,50 &gt; ${fmt(c0)}</span><span>t = 0</span><span>Giá lên</span><span>Giá xuống</span></div>
      <div><span>Bán 1 call</span><span>+5,50</span><span>-10</span><span>0</span></div>
      <div><span>Mua ${fmt(h, 4)} cổ phiếu</span><span>-${fmt(h * S0)}</span><span>+${fmt(h * Su)}</span><span>+${fmt(h * Sd)}</span></div>
      <div><span>Vay ở 5%</span><span>+${fmt(B)}</span><span>-${fmt(B * 1.05)}</span><span>-${fmt(B * 1.05)}</span></div>
      <div><span><b>Tổng</b></span><span><b>+${fmt(5.5 - h * S0 + B)}</b></span><span><b>0</b></span><span><b>0</b></span></div></div>
      <p class="sd-note">Đắt: bán quyền chọn, mua danh mục sao chép. Rẻ (4,00): mua call, bán khống h cổ phiếu, cho vay → +${fmt(-4 + h * S0 - B)}.</p>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>d &lt; 1 + r &lt; u</span><span>h = ΔV / ΔS giữa hai trạng thái</span>
      <span>Call: mua h tài sản + vay</span><span>Put: bán khống |h| + cho vay</span>
      <span>π = (1 + r - d)/(u - d)</span><span>Giá = E<sub>π</sub>(payoff)/(1 + r)</span>
      <span>Xác suất thực không ảnh hưởng giá</span><span>Đắt: bán quyền chọn, mua h tài sản bằng tiền vay</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 10 câu, mục tiêu ≥ 7 câu đúng.</p>`),
  ];

  addDeck('DE-10', `Slide One-Period Binomial Model - bản thiết kế riêng (${slides.length} slide)`, slides);
}());
