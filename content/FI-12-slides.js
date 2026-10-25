// Bộ slide tự thiết kế cho FI-12 Yield-Based Bond Convexity and Portfolio Properties.
(function () {
  const L = window.LESSONS && window.LESSONS['FI-12'];
  if (!L) return;
  const { slide, addDeck, frac } = window.CFAH;
  const K = 'FI-12 · Convexity and Portfolios';
  const S = (title, body, opt = {}) => slide(title, body, Object.assign({ kicker: K }, opt));

  // Trái phiếu ví dụ: 20 năm, coupon 5% hằng năm, YTM 5%, giá 100.
  const price = y => { let p = 0; for (let k = 1; k <= 20; k++) p += 5 / (1 + y) ** k; return p + 100 / (1 + y) ** 20; };
  const MD = 12.4629, CV = 211.34;

  // Đường giá thực, tiếp tuyến (duration) và đường bậc hai (duration + convexity) theo Δy.
  function chart(withQuad) {
    const W = 600, H = 300, l = 60, r = 585, t = 16, b = 250, lo = 60, hi = 155;
    const xs = d => l + ((d + 0.03) / 0.06) * (r - l), ys = p => b - ((p - lo) / (hi - lo)) * (b - t);
    const pts = f => { let s = ''; for (let k = -300; k <= 300; k += 10) s += `${xs(k / 1e4).toFixed(1)},${ys(f(k / 1e4)).toFixed(1)} `; return s; };
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv" role="img" aria-label="Giá thực và ước lượng theo Δy">`;
    [80, 100, 120, 140].forEach(p => { s += `<line x1="${l}" y1="${ys(p)}" x2="${r}" y2="${ys(p)}" class="sv-grid"/><text x="${l - 8}" y="${ys(p) + 5}" class="sv-muted" text-anchor="end">${p}</text>`; });
    [-300, -150, 0, 150, 300].forEach(k => { s += `<text x="${xs(k / 1e4)}" y="${b + 22}" class="sv-muted">${k > 0 ? '+' : ''}${k}</text>`; });
    s += `<text x="${(l + r) / 2}" y="${H - 4}" class="sv-muted">Δy (bp), YTM gốc 5%</text>`;
    s += `<polyline points="${pts(d => 100 * (1 - MD * d))}" class="sv-down" style="fill:none"/>`;
    if (withQuad) s += `<polyline points="${pts(d => 100 * (1 - MD * d + 0.5 * CV * d * d))}" class="sv-pv" style="fill:none;stroke-dasharray:8 6"/>`;
    s += `<polyline points="${pts(d => price(0.05 + d))}" class="sv-curve"/>`;
    s += `<circle cx="${xs(0)}" cy="${ys(100)}" r="6" class="sv-dot"/>`;
    s += `<text x="${xs(-0.028)}" y="${ys(price(0.022)) - 10}" class="sv-txt" text-anchor="start">giá thực</text>`;
    s += `<text x="${xs(0.029)}" y="${ys(100 * (1 - MD * 0.029)) + 22}" class="sv-txt sv-t-down" text-anchor="end">chỉ duration</text>`;
    if (withQuad) s += `<text x="${xs(0.029)}" y="${ys(price(0.079)) - 14}" class="sv-txt sv-t-pv" text-anchor="end">+ convexity</text>`;
    return `${s}</svg>`;
  }

  const bars = (rows, max) => `<div class="sd-bars">${rows.map(([lab, v, txt]) => `<div class="sd-bar"><span class="sd-bar-l">${lab}</span><span class="sd-bar-t"><i style="width:${(v / max) * 100}%"></i></span><b>${txt}</b></div>`).join('')}</div>`;

  const slides = [
    S('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Fixed Income · FI-12</div>
      <h2>Yield-Based Bond Convexity<br>and Portfolio Properties</h2>
      <p>Duration là đường thẳng, giá là đường cong</p>
      <div class="sd-chips"><span>LOS 1 · Convexity</span><span>LOS 2 · %ΔP với duration và convexity</span><span>LOS 3 · Danh mục và giới hạn</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Duration bỏ sót độ cong', `<div class="sd-cols2 wide-left"><div>${chart(false)}</div>
      <div><div class="sd-rule down">Lợi suất tăng: duration <b>phóng đại mức giảm</b></div><div class="sd-rule down">Lợi suất giảm: duration <b>đánh giá thấp mức tăng</b></div><p class="sd-note">Giá thực luôn nằm <b>trên</b> tiếp tuyến. Δy càng lớn, sai lệch càng lớn.</p></div></div>`),

    S('Approximate convexity', `<div class="sd-f">ApproxCon = ${frac('PV<sub>-</sub> + PV<sub>+</sub> - 2 × PV<sub>0</sub>', '(Δy)<sup>2</sup> × PV<sub>0</sub>')}</div>
      <div class="sd-tbl grid"><div class="head"><span>YTM</span><span>4,9%</span><span>5,0%</span><span>5,1%</span></div>
        <div><span>Giá</span><span>101,256856</span><span>100,000000</span><span>98,764278</span></div></div>
      <p class="sd-note">(101,256856 + 98,764278 - 200) / (0,001² × 100) = <b>211,34</b>. Giữ 6 số lẻ: làm tròn 4 số lẻ ra 212,00.</p>`),

    S('Convexity từ dòng tiền và năm hóa', `<div class="sd-cols2">
      <div><div class="sd-f sm">Con = ${frac('1', 'PV')} Σ ${frac('t(t + 1) CF<sub>t</sub>', '(1 + r)<sup>t + 2</sup>')}</div><div class="sd-f sm">AnnCon = Con / m²</div></div>
      <div><div class="sd-rule">Bán niên <b>chia 4</b>, không chia 2</div><div class="sd-rule">Zero-coupon <b>T(T + 1)/(1 + r)²</b></div><div class="sd-rule">Money convexity <b>AnnCon × full price</b></div></div></div>`),

    S('Công thức ước lượng có convexity', `<div class="sd-big">%ΔP ≈ -ModDur × Δy + ½ × Con × (Δy)²</div>
      <div class="sd-cols2"><div class="sd-card"><b>Hiệu ứng duration</b><p>Tuyến tính, đổi dấu theo Δy.</p></div><div class="sd-card acc"><b>Convexity adjustment</b><p><b>Luôn cộng</b> (convexity dương), vì (Δy)² &gt; 0.</p></div></div>
      <p class="sd-note">+100 bp: -12,46% + 1,06% = <b>-11,41%</b> · giá thực -11,47%.</p>`),

    S('Thêm convexity: gần giá thực hơn hẳn', `<div class="sd-cols2 wide-left"><div>${chart(true)}</div>
      <div><p class="sd-cap">Trái phiếu 20 năm, coupon 5%, YTM 5%</p><div class="sd-tbl grid"><div class="head"><span>Δy</span><span>Thực</span><span>Dur</span><span>+Con</span></div>
        <div><span>-200</span><span>+29,75</span><span>+24,93</span><span>+29,15</span></div>
        <div><span>+200</span><span>-21,19</span><span>-24,93</span><span>-20,70</span></div></div><p class="sd-note">Đơn vị: % thay đổi giá.</p></div></div>`),

    S('Convexity dương: lên nhiều, xuống ít', `<div class="sd-cols2">
      <div><p class="sd-cap">Giá thực khi lợi suất đổi ±100 bp</p>${bars([['-100 bp', 13.59, '+13,59%'], ['+100 bp', 11.47, '-11,47%']], 15)}</div>
      <div><p class="sd-cap">Khi lợi suất đổi ±200 bp</p>${bars([['-200 bp', 29.75, '+29,75%'], ['+200 bp', 21.19, '-21,19%']], 30)}</div></div>
      <p class="sd-note">Cùng một Δy: mức <b>tăng</b> giá luôn lớn hơn mức <b>giảm</b> giá. Người nắm giữ thích convexity cao.</p>`),

    S('Điều gì làm convexity lớn hơn?', `<div class="sd-grid4">
      <div class="sd-card"><b>Kỳ hạn dài</b><p>5 năm: 22,41<br>20 năm: 211,34</p></div>
      <div class="sd-card"><b>Coupon thấp</b><p>Cùng chiều với duration</p></div>
      <div class="sd-card"><b>Lợi suất thấp</b><p>Đường cong cong hơn ở vùng lợi suất thấp</p></div>
      <div class="sd-card acc"><b>Dòng tiền phân tán</b><p>Cùng duration, barbell &gt; bullet</p></div></div>`),

    S('Cùng duration, khác convexity', `<div class="sd-cols2">
      <div>${bars([['Coupon 5%, 20 năm', 211.34, '211,34'], ['Zero 13,09 năm', 167.18, '167,18']], 220)}<p class="sd-note">Cả hai có MacDur 13,0853 năm ở YTM 5%.</p></div>
      <div><div class="sd-rule up">Dòng tiền trải rộng <b>convexity cao</b></div><div class="sd-rule">Dòng tiền dồn một điểm <b>convexity thấp</b></div><p class="sd-note">Zero: 13,0853 × 14,0853 / 1,05² = 167,18.</p></div></div>`),

    S('Duration và convexity của danh mục', `<div class="sd-tbl grid"><div class="head"><span>Trái phiếu</span><span>Trọng số</span><span>ModDur</span><span>Convexity</span></div>
      <div><span>A zero 3 năm</span><span>0,20</span><span>2,8846</span><span>11,0947</span></div>
      <div><span>B 10 năm 4%</span><span>0,30</span><span>7,9615</span><span>78,2942</span></div>
      <div><span>C 20 năm 5%</span><span>0,50</span><span>12,1826</span><span>204,2297</span></div>
      <div><span><b>Danh mục</b></span><span>1,00</span><span><b>9,0567</b></span><span><b>127,82</b></span></div></div>
      <p class="sd-note">+100 bp cho mọi lợi suất: -9,06% + 0,64% = <b>-8,42%</b> · định giá lại chính xác -8,45%.</p>`),

    S('Hai cách tính duration danh mục', `<div class="sd-cols2">
      <div class="sd-card acc"><b>Bình quân gia quyền</b><p>Σ w<sub>i</sub> × Dur<sub>i</sub> theo giá trị thị trường.</p><small>Dễ, phổ biến</small></div>
      <div class="sd-card"><b>Cash flow yield</b><p>Gộp dòng tiền, tìm IRR, tính duration như một trái phiếu.</p><small>Khó tính; IRR không phải bình quân YTM</small></div></div>`),

    S('Giới hạn của các thước đo', `<div class="sd-steps">
      <span>① Giả định <b>dịch chuyển song song</b>: mọi lợi suất đổi cùng một lượng</span>
      <span>② Giả định <b>dòng tiền không đổi</b>: không hợp với callable, putable, MBS (FI-13)</span>
      <span>③ Chỉ là <b>xấp xỉ bậc hai</b>: Δy rất lớn vẫn còn sai số</span>
      <span>④ Duration thay đổi theo thời gian và lợi suất: cần <b>tái cân bằng</b></span></div>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>ApproxCon: (PV<sub>-</sub> + PV<sub>+</sub> - 2PV<sub>0</sub>)/(Δy² PV<sub>0</sub>)</span><span>Giữ đủ số lẻ khi tính convexity</span>
      <span>%ΔP = -ModDur Δy + ½ Con Δy²</span><span>Convexity adjustment luôn cộng</span>
      <span>Bán niên: convexity chia 4</span><span>Dài, coupon thấp, phân tán → lồi hơn</span>
      <span>Danh mục: bình quân theo giá trị</span><span>Giả định dịch chuyển song song</span></div>`),
  ];

  addDeck('FI-12', `Slide Convexity and Portfolios - bản thiết kế riêng (${slides.length} slide)`, slides);
}());
