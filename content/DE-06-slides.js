// Bộ slide tự thiết kế cho DE-06 Pricing and Valuation of Futures Contracts.
(function () {
  const L = window.LESSONS && window.LESSONS['DE-06'];
  if (!L) return;
  const { slide, addDeck } = window.CFAH;
  const K = 'DE-06 · Futures Pricing and Valuation';
  const S = (title, body, opt = {}) => slide(title, body, Object.assign({ kicker: K }, opt));
  const fmt = (x, d = 2) => { const neg = x < 0; const [a, b] = Math.abs(x).toFixed(d).split('.'); return (neg ? '-' : '') + a.replace(/\B(?=(\d{3})+(?!\d))/g, '.') + (b ? ',' + b : ''); };
  const sg = (x, d = 0) => (x > 0 ? '+' : '') + fmt(x, d);

  // Ví dụ ký quỹ: long 100 cổ phiếu ở 85,42; IM 1.000, MM 750.
  const f0 = 85.42, px = [86.10, 84.90, 82.80, 84.60], IM = 1000, MM = 750;
  const rows = []; { let bal = IM, prev = f0; px.forEach((p, i) => { const g = Math.round((p - prev) * 100); bal += g; const call = bal < MM ? IM - bal : 0; rows.push({ d: i + 1, p, g, bal, call }); bal += call; prev = p; }); }

  // Lời/lỗ hằng ngày (cột) và lời/lỗ tích lũy (đường) của futures.
  function mtmChart() {
    const W = 600, H = 300, l = 60, r = 585, t = 20, b = 220, y0 = -300, y1 = 200;
    const xs = d => l + 40 + (d - 1) * ((r - l - 80) / 3), ys = v => t + ((y1 - v) / (y1 - y0)) * (b - t);
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv big" role="img" aria-label="Lời lỗ futures theo ngày">`;
    [-200, -100, 0, 100, 200].forEach(v => { s += `<line x1="${l}" y1="${ys(v)}" x2="${r}" y2="${ys(v)}" class="${v === 0 ? 'sv-axis' : 'sv-grid'}"/><text x="${l - 8}" y="${ys(v) + 6}" class="sv-muted" text-anchor="end">${v}</text>`; });
    let cum = 0, pts = `${l},${ys(0)} `;
    rows.forEach(rw => {
      const x = xs(rw.d), top = Math.min(ys(0), ys(rw.g)), h = Math.abs(ys(rw.g) - ys(0));
      s += `<rect x="${x - 26}" y="${top}" width="52" height="${h}" class="${rw.g >= 0 ? 'sv-up' : 'sv-down'}" style="fill-opacity:.35"/>`;
      s += `<text x="${x}" y="${rw.g >= 0 ? top - 8 : top + h + 22}" class="sv-txt ${rw.g >= 0 ? 'sv-t-up' : 'sv-t-down'}" style="font-size:18px">${sg(rw.g)}</text>`;
      s += `<text x="${x}" y="${b + 34}" class="sv-muted">Ngày ${rw.d}</text>`;
      cum += rw.g; pts += `${x},${ys(cum)} `;
    });
    s += `<polyline points="${pts}" class="sv-curve" style="fill:none"/><circle cx="${xs(4)}" cy="${ys(cum)}" r="6" class="sv-dot"/><text x="${xs(4) - 12}" y="${ys(cum) + 24}" class="sv-txt" text-anchor="end" style="font-size:18px">tích lũy ${sg(cum)}</text>`;
    s += `<text x="${(l + r) / 2}" y="${H - 4}" class="sv-muted">Cột: lời/lỗ ngày (ghi vào ký quỹ) · đường: tích lũy</text>`;
    return `${s}</svg>`;
  }

  const fNew = 100 * 1.01 ** 0.25, fut = (fNew - 85 * 1.01 ** 0.5) * 100, fwd = (100 - 85 * 1.01 ** 0.5 / 1.01 ** 0.25) * 100;

  const slides = [
    S('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Derivatives · DE-06</div>
      <h2>Pricing and Valuation of<br>Futures Contracts</h2>
      <p>Cùng tổng lời lỗ - khác thời điểm nhận tiền</p>
      <div class="sd-chips"><span>LOS 1 · Giá và giá trị: forward so với futures</span><span>LOS 2 · Vì sao giá forward và futures khác nhau</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Futures = forward + thanh toán mỗi ngày', `<div class="sd-cols2">
      <div class="sd-card"><b>Forward</b><p>OTC, tùy chỉnh. Lời/lỗ tích lũy, trả <b>một lần</b> tại T. Có rủi ro đối tác.</p></div>
      <div class="sd-card acc"><b>Futures</b><p>Sàn, CCP, ký quỹ. Lời/lỗ <b>mark-to-market</b> mỗi cuối ngày.</p></div></div>
      <p class="sd-note">Ký hiệu: f₀(T) là giá futures, F₀(T) là giá forward. Cơ chế ký quỹ: xem lại DE-02.</p>`),

    S('Giá futures lúc ký: vẫn là cost of carry', `<div class="sd-f">f₀(T) = F₀(T) = (S₀ - PV(I) + PV(C)) × (1 + r)<sup>T</sup> &nbsp; khi r không đổi</div>
      <div class="sd-big">85 × 1,01<sup>0,5</sup> = ${fmt(85 * 1.01 ** 0.5)}</div>
      <p class="sd-note">Giá trị lúc mở = <b>0</b>. Ký quỹ ban đầu là tài sản đảm bảo của bạn, không phải giá hay giá trị của hợp đồng.</p>`),

    S('Lời lỗ được chuyển vào ký quỹ mỗi ngày', `<div class="sd-cols2 wide-left"><div>${mtmChart()}</div>
      <div><div class="sd-rule">Trong ngày <b>giá trị = (f<sub>t</sub> - f<sub>t-1</sub>) × quy mô</b></div><div class="sd-rule up">Sau thanh toán <b>giá trị = 0</b></div>
      <p class="sd-note">Long 100 cổ phiếu ở 85,42. Tổng = (84,60 - 85,42) × 100 = ${sg((84.6 - 85.42) * 100)}.</p></div></div>`),

    S('Tài khoản ký quỹ: IM 1.000, MM 750', `<div class="sd-tbl grid">
      <div class="head"><span>Ngày</span><span>Giá</span><span>Lời/lỗ</span><span>Số dư</span><span>Nộp thêm</span></div>
      <div><span>0</span><span>85,42</span><span></span><span>1.000</span><span></span></div>
      ${rows.map(rw => `<div><span>${rw.d}</span><span>${fmt(rw.p)}</span><span>${sg(rw.g)}</span><span>${fmt(rw.bal, 0)}</span><span>${rw.call ? `<b>${fmt(rw.call, 0)}</b>` : ''}</span></div>`).join('')}</div>
      <p class="sd-note">Ngày 3: 738 &lt; 750 → nộp về <b>ký quỹ ban đầu</b>: 1.000 - 738 = 262 (không phải 12).</p>`),

    S('Tổng lời lỗ như nhau, thời điểm khác nhau', `<div class="sd-steps">
      <span>① Tổng lời/lỗ của cả forward và futures = (giá cuối - giá chốt) × quy mô</span>
      <span>② Futures nhận/trả <b>từng ngày</b>; forward nhận/trả <b>một lần</b> tại T</span>
      <span>③ Tiền nhận sớm được đầu tư, tiền trả sớm phải vay</span>
      <span>④ Nếu lãi suất biến động cùng chiều với giá → thời điểm trở nên quan trọng</span></div>`),

    S('Giá trị: forward tích lũy, futures quay về 0', `<div class="sd-tbl grid">
      <div class="head"><span></span><span>Forward</span><span>Futures</span></div>
      <div><span>Lúc ký</span><span>0</span><span>0</span></div>
      <div><span>Trong kỳ hạn</span><span>PV(F<sub>t</sub> - F₀)</span><span>f<sub>t</sub> - f<sub>t-1</sub></span></div>
      <div><span>Sau thanh toán ngày</span><span>vẫn tích lũy</span><span><b>0</b></span></div>
      <div><span>Lời được trả</span><span>tại T</span><span>mỗi ngày</span></div>
      <div><span>Rủi ro đối tác</span><span>có</span><span>gần như không</span></div></div>`),

    S('Giá nhảy lên 100 sau 3 tháng', `<div class="sd-bars">
      <div class="sd-bar"><span class="sd-bar-l">Futures: đã vào ký quỹ</span><span class="sd-bar-t"><i style="width:${fut / 16}%"></i></span><b>${fmt(fut)}</b></div>
      <div class="sd-bar"><span class="sd-bar-l">Forward: chưa thực hiện</span><span class="sd-bar-t"><i style="width:${fwd / 16}%"></i></span><b>${fmt(fwd)}</b></div></div>
      <div class="sd-f sm">Futures: (${fmt(fNew, 4)} - 85,4239) × 100 &nbsp;&nbsp; Forward: (100 - 85,4239 / 1,01<sup>0,25</sup>) × 100</div>
      <p class="sd-note">Forward = PV của cùng khoản lời, nhận sau 3 tháng nữa. Hợp đồng futures sau thanh toán có giá trị 0.</p>`),

    S('Futures lãi suất: giá = 100 - MRR', `<div class="sd-cols2">
      <div class="sd-card"><b>Yết giá</b><p>MRR 3,25% → giá <b>96,75</b></p><p>Lãi suất giảm → giá tăng → <b>long lời</b></p></div>
      <div class="sd-card acc"><b>BPV</b><p>1.000.000 × 0,01% × 3/12 = <b>${fmt(1e6 * 0.0001 * 0.25, 0)} USD</b></p><p>MRR 3,25% → 3,10%: lời 15 × 25 = <b>${fmt(15 * 25, 0)}</b></p></div></div>
      <p class="sd-note">Convexity bias: lãi suất ngầm định của futures thường cao hơn lãi suất FRA một chút.</p>`),

    S('Phòng hộ: FRA và futures ngược chiều', `<div class="sd-tbl grid">
      <div class="head"><span>Muốn phòng hộ</span><span>FRA</span><span>Futures lãi suất</span></div>
      <div><span>Sắp đi vay, sợ lãi suất tăng</span><span>Long</span><span><b>Short</b></span></div>
      <div><span>Sắp cho vay, sợ lãi suất giảm</span><span>Short</span><span><b>Long</b></span></div></div>
      <p class="sd-note">Lý do: FRA yết theo lãi suất, futures yết theo giá (100 - lãi suất).</p>`),

    S('Tương quan dương: futures có lợi hơn forward', `<div class="sd-tbl grid">
      <div class="head"><span>Sau 6 tháng, còn 6 tháng</span><span>Futures tại T</span><span>Forward tại T</span></div>
      <div><span>Giá +10, r lên 6%: đầu tư lời</span><span>${sg(10 * 1.06 ** 0.5, 2)}</span><span>+10,00</span></div>
      <div><span>Giá -10, r xuống 2%: vay bù lỗ</span><span>${sg(-10 * 1.02 ** 0.5, 2)}</span><span>-10,00</span></div>
      <div><span><b>Trung bình</b></span><span><b>${sg((10 * 1.06 ** 0.5 - 10 * 1.02 ** 0.5) / 2, 2)}</b></span><span><b>0,00</b></span></div></div>
      <p class="sd-note">Ai cũng muốn long futures → chấp nhận trả giá futures <b>cao hơn</b> giá forward.</p>`),

    S('Quy tắc: tương quan giá futures - lãi suất', `<div class="sd-rule up">Tương quan dương <b>f₀(T) &gt; F₀(T)</b></div>
      <div class="sd-rule down">Tương quan âm (futures lãi suất, trái phiếu) <b>f₀(T) &lt; F₀(T)</b></div>
      <div class="sd-rule">Không tương quan hoặc r không đổi <b>f₀(T) = F₀(T)</b></div>
      <p class="sd-note">Lý do khác: rủi ro đối tác, thanh khoản, chi phí ký quỹ. <b>Không phải</b> phần bù rủi ro hay kỳ vọng nhà đầu tư.</p>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>f₀(T) = F₀(T) khi r không đổi</span><span>Giá trị lúc mở = 0</span>
      <span>Futures sau thanh toán ngày = 0</span><span>Forward: giá trị tích lũy, chưa thực hiện</span>
      <span>Margin call: nộp về ký quỹ ban đầu</span><span>Futures lãi suất: giá = 100 - MRR</span>
      <span>Đi vay: long FRA, short futures</span><span>Tương quan dương → futures đắt hơn</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 10 câu, mục tiêu ≥ 7 câu đúng.</p>`),
  ];

  addDeck('DE-06', `Slide Futures Pricing and Valuation - bản thiết kế riêng (${slides.length} slide)`, slides);
}());
