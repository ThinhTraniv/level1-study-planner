// Bộ slide tự thiết kế cho DE-08 Pricing and Valuation of Options.
(function () {
  const L = window.LESSONS && window.LESSONS['DE-08'];
  if (!L) return;
  const { slide, addDeck } = window.CFAH;
  const K = 'DE-08 · Pricing and Valuation of Options';
  const S = (title, body, opt = {}) => slide(title, body, Object.assign({ kicker: K }, opt));
  const fmt = (x, d = 2) => { const neg = x < 0; const [a, b] = Math.abs(x).toFixed(d).split('.'); return (neg ? '-' : '') + a.replace(/\B(?=(\d{3})+(?!\d))/g, '.') + (b ? ',' + b : ''); };

  // Black-Scholes-Merton chỉ để vẽ minh họa (r ghép lãi năm, quy đổi sang liên tục).
  const N = x => { const k = 1 / (1 + 0.2316419 * Math.abs(x)); const d = 0.3989423 * Math.exp(-x * x / 2); const p = d * k * (0.3193815 + k * (-0.3565638 + k * (1.781478 + k * (-1.821256 + k * 1.330274)))); return x > 0 ? 1 - p : p; };
  function bs(S0, X, T, v, r, q = 0) {
    const rc = Math.log(1 + r), d1 = (Math.log(S0 / X) + (rc - q + v * v / 2) * T) / (v * Math.sqrt(T)), d2 = d1 - v * Math.sqrt(T);
    return { c: S0 * Math.exp(-q * T) * N(d1) - X * Math.exp(-rc * T) * N(d2), p: X * Math.exp(-rc * T) * N(-d2) - S0 * Math.exp(-q * T) * N(-d1) };
  }

  // Khung biểu đồ chung: trục x là S, trục y là giá trị.
  function frame(xmin, xmax, ymin, ymax, xt, yt, label, xlab) {
    const W = 600, H = 300, l = 52, r = 585, t = 16, b = 250;
    const xs = x => l + ((x - xmin) / (xmax - xmin)) * (r - l), ys = y => b - ((y - ymin) / (ymax - ymin)) * (b - t);
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv big" role="img" aria-label="${label}">`;
    yt.forEach(v => { s += `<line x1="${l}" y1="${ys(v)}" x2="${r}" y2="${ys(v)}" class="sv-grid"/><text x="${l - 8}" y="${ys(v) + 6}" class="sv-muted" text-anchor="end">${v}</text>`; });
    s += `<line x1="${l}" y1="${b}" x2="${r}" y2="${b}" class="sv-axis"/><line x1="${l}" y1="${t}" x2="${l}" y2="${b}" class="sv-axis"/>`;
    xt.forEach(v => { s += `<text x="${xs(v)}" y="${b + 24}" class="sv-muted">${v}</text>`; });
    s += `<text x="${(l + r) / 2}" y="${H - 4}" class="sv-muted">${xlab}</text>`;
    return { s, xs, ys };
  }
  const poly = (xs, ys, f, a, b, cls) => { let p = ''; for (let x = a; x <= b + 1e-9; x += (b - a) / 60) p += `${xs(x).toFixed(1)},${ys(f(x)).toFixed(1)} `; return `<polyline points="${p}" class="${cls}" style="fill:none"/>`; };

  // Giá call theo S: T = 1 và T = 0,25, so với giá trị thực hiện.
  function callChart() {
    const X = 50, { s, xs, ys } = frame(30, 70, 0, 22, [30, 40, 50, 60, 70], [0, 10, 20], 'Giá call theo giá tài sản', 'Giá tài sản S · X = 50, σ = 30%, r = 4%');
    let o = s + poly(xs, ys, S0 => Math.max(0, S0 - X), 30, 70, 'sv-axis');
    o += poly(xs, ys, S0 => bs(S0, X, 1, 0.3, 0.04).c, 30, 70, 'sv-curve');
    o += poly(xs, ys, S0 => bs(S0, X, 0.25, 0.3, 0.04).c, 30, 70, 'sv-pv');
    const c50 = bs(50, X, 1, 0.3, 0.04).c;
    o += `<line x1="${xs(50)}" y1="${ys(0)}" x2="${xs(50)}" y2="${ys(c50)}" class="sv-dash"/><text x="${xs(50) + 8}" y="${ys(c50 / 2)}" class="sv-txt" text-anchor="start">giá trị thời gian ${fmt(c50)}</text>`;
    o += `<text x="${xs(40)}" y="${ys(15)}" class="sv-txt">T = 1 năm</text><text x="${xs(40)}" y="${ys(12)}" class="sv-txt sv-t-pv">T = 0,25 năm</text>`;
    o += `<text x="${xs(64)}" y="${ys(1.5)}" class="sv-muted">max(0, S - X)</text>`;
    return `${o}</svg>`;
  }

  // Put châu Âu sâu ITM nằm dưới giá trị thực hiện.
  function putChart() {
    const X = 50, { s, xs, ys } = frame(10, 60, 0, 40, [10, 20, 30, 40, 50, 60], [0, 10, 20, 30, 40], 'Giá put theo giá tài sản', 'Giá tài sản S · X = 50, T = 1, σ = 30%, r = 4%');
    let o = s + poly(xs, ys, S0 => Math.max(0, X - S0), 10, 60, 'sv-axis');
    o += poly(xs, ys, S0 => bs(S0, X, 1, 0.3, 0.04).p, 10, 60, 'sv-curve');
    const p20 = bs(20, X, 1, 0.3, 0.04).p;
    o += `<circle cx="${xs(20)}" cy="${ys(30)}" r="6" class="sv-dot"/><circle cx="${xs(20)}" cy="${ys(p20)}" r="6" class="sv-dot"/>`;
    o += `<text x="${xs(20) + 10}" y="${ys(30) - 14}" class="sv-txt" text-anchor="start">giá trị thực hiện 30</text><text x="${xs(11)}" y="${ys(16)}" class="sv-txt sv-t-down" text-anchor="start">giá put ${fmt(p20)}</text>`;
    return `${o}</svg>`;
  }

  // Vùng giá hợp lệ của call châu Âu: giữa max(0, S - PV(X)) và S.
  function boundChart() {
    const X = 45, pvx = X / 1.05, { s, xs, ys } = frame(0, 100, 0, 100, [0, 25, 50, 75, 100], [0, 25, 50, 75, 100], 'Cận giá call châu Âu', 'Giá tài sản S · X = 45, r = 5%, T = 1');
    let pts = `${xs(0)},${ys(0)} ${xs(100)},${ys(100)} ${xs(100)},${ys(100 - pvx)} ${xs(pvx)},${ys(0)}`;
    let o = s + `<polygon points="${pts}" class="sv-panel"/>`;
    o += `<line x1="${xs(0)}" y1="${ys(0)}" x2="${xs(100)}" y2="${ys(100)}" class="sv-down"/><line x1="${xs(pvx)}" y1="${ys(0)}" x2="${xs(100)}" y2="${ys(100 - pvx)}" class="sv-up"/>`;
    o += `<text x="${xs(40)}" y="${ys(52)}" class="sv-txt sv-t-down">cận trên: S</text><text x="${xs(86)}" y="${ys(30)}" class="sv-txt sv-t-up">cận dưới: S - PV(X)</text>`;
    o += `<text x="${xs(62)}" y="${ys(40)}" class="sv-muted">vùng giá hợp lệ</text><text x="${xs(pvx)}" y="${ys(0) - 10}" class="sv-muted">PV(X) = ${fmt(pvx)}</text>`;
    return `${o}</svg>`;
  }

  const base = bs(50, 50, 1, 0.3, 0.04);
  const cases = [['Gốc', base], ['S = 55', bs(55, 50, 1, 0.3, 0.04)], ['X = 55', bs(50, 55, 1, 0.3, 0.04)], ['T = 2', bs(50, 50, 2, 0.3, 0.04)], ['σ = 40%', bs(50, 50, 1, 0.4, 0.04)], ['r = 6%', bs(50, 50, 1, 0.3, 0.06)], ['Cổ tức 2%', bs(50, 50, 1, 0.3, 0.04, 0.02)]];
  const arrow = (v, b) => (Math.abs(v - b) < 1e-9 ? '' : v > b ? ' ↑' : ' ↓');
  const pvx = 45 / 1.05;

  const slides = [
    S('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Derivatives · DE-08</div>
      <h2>Pricing and Valuation<br>of Options</h2>
      <p>Giá quyền chọn = giá trị thực hiện + giá trị thời gian</p>
      <div class="sd-chips"><span>LOS 1 · Exercise value, moneyness, time value</span><span>LOS 2 · Arbitrage và sao chép</span><span>LOS 3 · Các yếu tố quyết định giá</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Hai phần của giá quyền chọn', `<div class="sd-f">Giá quyền chọn = max(0, S - X) hoặc max(0, X - S) + giá trị thời gian</div>
      <div class="sd-bars">
      <div class="sd-bar"><span class="sd-bar-l">Call: thực hiện</span><span class="sd-bar-t"><i style="width:${(2 / 4.1) * 100}%"></i></span><b>2,00</b></div>
      <div class="sd-bar"><span class="sd-bar-l">Call: thời gian</span><span class="sd-bar-t"><i style="width:${(2.1 / 4.1) * 100}%"></i></span><b>2,10</b></div>
      <div class="sd-bar"><span class="sd-bar-l">Put: thực hiện</span><span class="sd-bar-t"><i style="width:0%"></i></span><b>0</b></div>
      <div class="sd-bar"><span class="sd-bar-l">Put: thời gian</span><span class="sd-bar-t"><i style="width:${(1.13 / 4.1) * 100}%"></i></span><b>1,13</b></div></div>
      <p class="sd-note">S = 52, X = 50, còn 6 tháng: call 4,10, put 1,13. Put OTM nên <b>chỉ có</b> giá trị thời gian.</p>`),

    S('Moneyness: so S với X, không trừ phí', `<div class="sd-tbl grid">
      <div class="head"><span>Trạng thái</span><span>Call</span><span>Put</span><span>X = 50</span></div>
      <div><span>In the money</span><span>S &gt; X</span><span>S &lt; X</span><span>call ở S = 55</span></div>
      <div><span>At the money</span><span>S = X</span><span>S = X</span><span>S = 50</span></div>
      <div><span>Out of the money</span><span>S &lt; X</span><span>S &gt; X</span><span>call ở S = 45</span></div></div>
      <p class="sd-note">Call và put cùng X luôn ngược nhau: call ITM thì put OTM. Moneyness <b>không phải</b> lãi/lỗ của người mua.</p>`),

    S('Giá trị thời gian: lớn nhất quanh ATM, về 0 khi đáo hạn', `<div class="sd-cols2 wide-left"><div>${callChart()}</div>
      <div><div class="sd-rule up">Còn nhiều thời gian <b>đường cong cao hơn</b></div><div class="sd-rule">Gần đáo hạn <b>sát max(0, S - X)</b></div>
      <p class="sd-note">Khoảng cách giữa đường cong và đường gãy khúc chính là giá trị thời gian. Rõ nhất khi S ≈ X.</p></div></div>`),

    S('Ngoại lệ: put châu Âu sâu ITM', `<div class="sd-cols2 wide-left"><div>${putChart()}</div>
      <div><div class="sd-rule down">S = 20, X = 50 <b>giá trị thời gian ${fmt(bs(20, 50, 1, 0.3, 0.04).p - 30)}</b></div>
      <p class="sd-note">Người nắm put châu Âu phải <b>chờ đến T</b> mới nhận X. Giá đã gần 0, thời gian chỉ làm mất giá trị của tiền.</p>
      <p class="sd-note">Put kiểu Mỹ thực hiện ngay được nên không bao giờ thấp hơn giá trị thực hiện.</p></div></div>`),

    S('Forward và quyền chọn: cùng sao chép, khác mức độ', `<div class="sd-tbl grid">
      <div class="head"><span>Tiêu chí</span><span>Forward</span><span>Quyền chọn</span></div>
      <div><span>Payoff</span><span>Tuyến tính</span><span>Gãy khúc tại X</span></div>
      <div><span>Danh mục sao chép</span><span>Tĩnh: 1 tài sản + vay</span><span>Động: h tài sản, h đổi theo S</span></div>
      <div><span>Cần biết σ?</span><span>Không</span><span>Có</span></div>
      <div><span>Arbitrage cho</span><span>Một giá F₀(T)</span><span>Cận trên, cận dưới</span></div>
      <div><span>Giá trị khi ký</span><span>Thường 0</span><span>Dương (phí)</span></div></div>`),

    S('Danh mục sao chép call và put', `<div class="sd-cols2">
      <div class="sd-card acc"><b>Long call</b><p>Mua <b>một phần</b> tài sản (0 &lt; h &lt; 1)</p><p>Tài trợ bằng <b>vay</b> phi rủi ro</p><p>S tăng → cần nắm thêm tài sản</p></div>
      <div class="sd-card"><b>Long put</b><p><b>Bán khống</b> một phần tài sản</p><p><b>Cho vay</b> tiền thu được</p><p>S giảm → cần bán khống thêm</p></div></div>
      <p class="sd-note">Không cần lợi suất kỳ vọng hay khẩu vị rủi ro, nhưng <b>cần</b> biết giá biến động bao nhiêu. Cách tính h: DE-10.</p>`),

    S('Cận giá call châu Âu', `<div class="sd-cols2 wide-left"><div>${boundChart()}</div>
      <div><div class="sd-f sm">max(0, S₀ - PV(X)) ≤ c₀ ≤ S₀</div>
      <p class="sd-note">Cận trên: quyền mua không thể đắt hơn chính tài sản.</p>
      <p class="sd-note">Cận dưới: call + trái phiếu trả X luôn ≥ tài sản khi đáo hạn.</p></div></div>`),

    S('Cận giá put châu Âu', `<div class="sd-f">max(0, PV(X) - S₀) ≤ p₀ ≤ PV(X)</div>
      <div class="sd-cols2">
      <div class="sd-card"><b>Cận trên</b><p>Put trả tối đa X (khi S<sub>T</sub> = 0), nhận lúc T → tối đa PV(X).</p><p>Put kiểu Mỹ: tối đa X.</p></div>
      <div class="sd-card acc"><b>Cận dưới</b><p>Put + tài sản luôn ≥ trái phiếu trả X.</p><p>PV(X) - S₀ <b>thấp hơn</b> X - S₀ → giá trị thời gian có thể âm.</p></div></div>
      <p class="sd-note">Ví dụ S₀ = 50, X = 45, r = 5%, T = 1: 0 ≤ p₀ ≤ <b>${fmt(pvx)}</b>.</p>`),

    S('Call dưới cận dưới → arbitrage', `<div class="sd-tbl grid">
      <div class="head"><span>Bước</span><span>t = 0</span><span>S<sub>T</sub> &gt; 45</span><span>S<sub>T</sub> ≤ 45</span></div>
      <div><span>Mua call ở 6,50</span><span>-6,50</span><span>S<sub>T</sub> - 45</span><span>0</span></div>
      <div><span>Bán khống cổ phiếu</span><span>+50,00</span><span>-S<sub>T</sub></span><span>-S<sub>T</sub></span></div>
      <div><span>Mua trái phiếu trả 45</span><span>-${fmt(pvx)}</span><span>+45</span><span>+45</span></div>
      <div><span><b>Tổng</b></span><span><b>+${fmt(50 - 6.5 - pvx)}</b></span><span><b>0</b></span><span><b>≥ 0</b></span></div></div>
      <p class="sd-note">Cận dưới = 50 - ${fmt(pvx)} = <b>${fmt(50 - pvx)}</b> &gt; 6,50. Bẫy: so với S - X = 5 sẽ tưởng không có arbitrage.</p>`),

    S('Sáu yếu tố quyết định giá', `<div class="sd-cols2">
      <div class="sd-tbl grid">
      <div class="head"><span>Ngược chiều</span><span>Call</span><span>Put</span></div>
      <div><span>Giá tài sản S ↑</span><span>↑</span><span>↓</span></div>
      <div><span>Giá thực hiện X ↑</span><span>↓</span><span>↑</span></div>
      <div><span>Lãi suất r ↑</span><span>↑</span><span>↓</span></div>
      <div><span>Cổ tức, coupon ↑</span><span>↓</span><span>↑</span></div>
      <div><span>Chi phí nắm giữ ↑</span><span>↑</span><span>↓</span></div></div>
      <div class="sd-tbl grid">
      <div class="head"><span>Cùng chiều</span><span>Call</span><span>Put</span></div>
      <div><span>Biến động σ ↑</span><span>↑</span><span>↑</span></div>
      <div><span>Thời gian T ↑</span><span>↑</span><span>↑ (thường)</span></div></div></div>
      <p class="sd-note">Ngoại lệ: put châu Âu sâu ITM có thể <b>giảm giá</b> khi T dài hơn (S = 20, X = 50: T = 1 → ${fmt(bs(20, 50, 1, 0.3, 0.04).p)}, T = 2 → ${fmt(bs(20, 50, 2, 0.3, 0.04).p)}).</p>`),

    S('Thay từng yếu tố một', `<div class="sd-cols2">${[cases.slice(0, 4), [cases[0]].concat(cases.slice(4))].map(g => `<div class="sd-tbl grid">
      <div class="head"><span>Thay đổi</span><span>Call</span><span>Put</span></div>
      ${g.map(([n, v]) => `<div><span>${n}</span><span>${fmt(v.c)}${arrow(v.c, base.c)}</span><span>${fmt(v.p)}${arrow(v.p, base.p)}</span></div>`).join('')}</div>`).join('')}</div>
      <p class="sd-note">Gốc: S = X = 50, T = 1, σ = 30%, r = 4% (giá minh họa bằng Black-Scholes-Merton). Chỉ σ và T đẩy call, put <b>cùng tăng</b>.</p>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>Call max(0, S - X); put max(0, X - S)</span><span>Moneyness không trừ phí</span>
      <span>Giá trị thời gian về 0 khi đáo hạn</span><span>Put châu Âu sâu ITM: thời gian có thể âm</span>
      <span>Quyền chọn: sao chép động, cần σ</span><span>Cận dưới dùng PV(X), không dùng X</span>
      <span>c₀ ≤ S₀; p₀ ≤ PV(X)</span><span>σ tăng: call và put cùng tăng</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 10 câu, mục tiêu ≥ 7 câu đúng.</p>`),
  ];

  addDeck('DE-08', `Slide Pricing and Valuation of Options - bản thiết kế riêng (${slides.length} slide)`, slides);
}());
