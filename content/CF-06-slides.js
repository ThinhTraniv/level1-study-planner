// Bộ slide tự thiết kế cho CF-06 Capital Structure.
(function () {
  const L = window.LESSONS && window.LESSONS['CF-06'];
  if (!L) return;
  const { frac, slide, addDeck } = window.CFAH;
  const K = 'CF-06 · Capital Structure';
  const S = (title, body, opt = {}) => slide(title, body, Object.assign({ kicker: K }, opt));
  const fmt = (x, d = 2) => x.toFixed(d).replace('.', ',');

  // Khung trục chung. o: {x0, x1, y0, y1, xt, yt, xf, yf, xl, label}
  function frame(o) {
    const W = 600, H = 300, l = 60, r = 560, t = 20, b = 250;
    const X = x => l + ((x - o.x0) / (o.x1 - o.x0)) * (r - l);
    const Y = y => b - ((y - o.y0) / (o.y1 - o.y0)) * (b - t);
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv" role="img" aria-label="${o.label}">`;
    o.yt.forEach(v => { s += `<line x1="${l}" y1="${Y(v)}" x2="${r}" y2="${Y(v)}" class="sv-grid"/><text x="${l - 8}" y="${Y(v) + 5}" class="sv-muted" text-anchor="end">${o.yf ? o.yf(v) : v}</text>`; });
    o.xt.forEach(v => { s += `<text x="${X(v)}" y="${b + 22}" class="sv-muted">${o.xf ? o.xf(v) : v}</text>`; });
    s += `<line x1="${l}" y1="${b}" x2="${r}" y2="${b}" class="sv-axis"/><line x1="${l}" y1="${t}" x2="${l}" y2="${b}" class="sv-axis"/>`;
    s += `<text x="${(l + r) / 2}" y="${H - 4}" class="sv-muted">${o.xl}</text>`;
    const path = (f, cls) => { let p = ''; for (let i = 0; i <= 60; i++) { const x = o.x0 + ((o.x1 - o.x0) * i) / 60; p += `${X(x).toFixed(1)},${Y(f(x)).toFixed(1)} `; } return `<polyline points="${p}" class="${cls}" fill="none"/>`; };
    return { X, Y, s, path };
  }

  // Chi phí vốn theo D/E, tx = thuế suất.
  function mmChart(tx) {
    const f = frame({ x0: 0, x1: 2, y0: 0, y1: 0.20, xt: [0, 0.5, 1, 1.5, 2], yt: [0, 0.05, 0.10, 0.15, 0.20], xf: v => fmt(v, 1), yf: v => `${Math.round(v * 100)}%`, xl: 'D/E', label: 'Chi phí vốn theo đòn bẩy' });
    const re = x => 0.10 + 0.04 * (1 - tx) * x;
    const wacc = x => (x / (1 + x)) * 0.06 * (1 - tx) + (1 / (1 + x)) * re(x);
    let s = f.s;
    s += f.path(re, 'sv-down') + f.path(wacc, 'sv-curve') + f.path(() => 0.06 * (1 - tx), 'sv-dash');
    s += `<text x="${f.X(1.95)}" y="${f.Y(re(1.95)) - 10}" class="sv-txt sv-t-down" text-anchor="end">r<tspan baseline-shift="sub">e</tspan></text>`;
    s += `<text x="${f.X(1.95)}" y="${f.Y(wacc(1.95)) - 10}" class="sv-txt" text-anchor="end">WACC</text>`;
    s += `<text x="${f.X(1.95)}" y="${f.Y(0.06 * (1 - tx)) - 10}" class="sv-muted" text-anchor="end">${tx ? 'r<tspan baseline-shift="sub">d</tspan>(1 - t)' : 'r<tspan baseline-shift="sub">d</tspan>'}</text>`;
    return `${s}</svg>`;
  }

  // Giá trị công ty theo nợ: MM có thuế và đánh đổi tĩnh.
  const tradeChart = (() => {
    const f = frame({ x0: 0, x1: 800, y0: 650, y1: 960, xt: [0, 200, 400, 600, 800], yt: [700, 750, 800, 850, 900, 950], xl: 'Nợ D', label: 'Giá trị công ty theo mức nợ' });
    const vt = d => 750 + 0.25 * d, vs = d => vt(d) - 0.0004 * d * d;
    let s = f.s;
    s += f.path(() => 750, 'sv-dash') + f.path(vt, 'sv-up') + f.path(vs, 'sv-curve');
    s += `<line x1="${f.X(312.5)}" y1="${f.Y(650)}" x2="${f.X(312.5)}" y2="${f.Y(vs(312.5))}" class="sv-dash"/><circle cx="${f.X(312.5)}" cy="${f.Y(vs(312.5))}" r="7" class="sv-dot"/>`;
    s += `<text x="${f.X(312.5)}" y="${f.Y(vs(312.5)) - 14}" class="sv-txt">Tối ưu: D = 312,5</text>`;
    s += `<text x="${f.X(790)}" y="${f.Y(vt(790)) + 22}" class="sv-txt sv-t-up" text-anchor="end">V<tspan baseline-shift="sub">U</tspan> + tD</text>`;
    s += `<text x="${f.X(790)}" y="${f.Y(750) - 8}" class="sv-muted" text-anchor="end">V<tspan baseline-shift="sub">U</tspan> = 750</text>`;
    s += `<text x="${f.X(790)}" y="${f.Y(vs(790)) - 10}" class="sv-txt" text-anchor="end">trừ PV kiệt quệ</text>`;
    return `${s}</svg>`;
  })();

  const slides = [
    S('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Corporate Issuers · CF-06</div>
      <h2>Capital Structure</h2>
      <p>Vay bao nhiêu thì vừa?</p>
      <div class="sd-chips"><span>LOS 1 · WACC</span><span>LOS 2 · Các yếu tố ảnh hưởng</span><span>LOS 3 · Modigliani-Miller</span><span>LOS 4 · Tối ưu và mục tiêu</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Hai lực giằng co', `<div class="sd-cols2">
      <div class="sd-card acc"><b>Nợ có lợi</b><p>Rẻ hơn vốn chủ (chủ nợ được trả trước)</p><p>Lãi vay được trừ thuế → lá chắn thuế</p><p>Kỷ luật ban quản lý</p></div>
      <div class="sd-card"><b>Nợ có hại</b><p>Vốn chủ rủi ro hơn → r<sub>e</sub> tăng</p><p>Nguy cơ kiệt quệ tài chính</p><p>Xung đột cổ đông và chủ nợ</p></div></div>
      <p class="sd-note">Câu hỏi của module: thay đổi tỷ lệ nợ có làm thay đổi <b>giá trị công ty</b> không?</p>`),

    S('WACC', `<div class="sd-f">WACC = w<sub>d</sub> r<sub>d</sub>(1 - t) + w<sub>p</sub> r<sub>p</sub> + w<sub>e</sub> r<sub>e</sub></div>
      <div class="sd-cols3">
      <div class="sd-card"><b>Nợ 40%</b><p>6% × (1 - 25%) = 4,5%</p></div>
      <div class="sd-card"><b>Vốn chủ 60%</b><p>r<sub>e</sub> = 12%</p></div>
      <div class="sd-card acc"><b>WACC = 9,00%</b><p>1,80% + 7,20%</p></div></div>
      <p class="sd-note">Quên (1 - t) → 9,60%: đáp án bẫy. Cổ tức ưu đãi không được trừ thuế, nên r<sub>p</sub> không nhân (1 - t).</p>`),

    S('Dùng tỷ trọng nào?', `<div class="sd-steps">
      <span>① Biết <b>cấu trúc vốn mục tiêu</b> → dùng mục tiêu</span>
      <span>② Không biết → cấu trúc hiện tại theo <b>giá trị thị trường</b></span>
      <span>③ Hoặc xu hướng, tuyên bố chính sách của công ty</span>
      <span>④ Hoặc trung bình các công ty cùng ngành</span></div>
      <p class="sd-note">Ví dụ: nợ thị trường 380, vốn chủ 50 × 12 = 600 → w<sub>d</sub> = <b>38,78%</b>. Không trộn nợ sổ sách với vốn chủ thị trường.</p>`),

    S('Ai gánh được nhiều nợ?', `<div class="sd-grid4">
      <div class="sd-card"><b>Doanh thu</b><p>Lớn, ổn định, tăng đều</p></div>
      <div class="sd-card"><b>Dòng tiền</b><p>Dương, dễ dự báo</p></div>
      <div class="sd-card"><b>Rủi ro kinh doanh</b><p>Thấp: nhu cầu và chi phí ổn định</p></div>
      <div class="sd-card acc"><b>Tài sản</b><p>Hữu hình, dễ bán → thế chấp tốt</p></div></div>
      <p class="sd-note">Thêm: chi phí và khả năng tiếp cận vốn vay; chính sách đòn bẩy, xếp hạng tín nhiệm mục tiêu.</p>`),

    S('Yếu tố bên ngoài và thước đo đòn bẩy', `<div class="sd-cols2">
      <div class="sd-card"><b>Bên ngoài</b><p>Điều kiện thị trường, chu kỳ kinh tế</p><p>Quy định pháp lý (ngân hàng, bảo hiểm)</p><p>Chuẩn mực ngành, đối thủ</p></div>
      <div class="sd-card acc"><b>Thước đo</b><p>D/E, D/V</p><p>Nợ / EBITDA</p><p>EBIT / lãi vay (khả năng trả lãi)</p></div></div>
      <p class="sd-note">Tổ chức xếp hạng và điều khoản vay (covenant) gắn với các tỷ lệ này.</p>`),

    S('Vòng đời doanh nghiệp', `<div class="sd-cols3">
      <div class="sd-card"><div class="sd-n">1</div><b>Khởi nghiệp</b><p>Dòng tiền âm, rủi ro cao</p><small>Gần như toàn vốn chủ (VC)</small></div>
      <div class="sd-card"><div class="sd-n">2</div><b>Tăng trưởng</b><p>Dòng tiền cải thiện</p><small>Vốn chủ chiếm ưu thế, nợ ít, có đảm bảo</small></div>
      <div class="sd-card acc"><div class="sd-n">3</div><b>Trưởng thành</b><p>Dòng tiền lớn, ổn định</p><small>Nợ rẻ, tỷ trọng lớn; vay để trả cổ đông</small></div></div>
      <p class="sd-note">Đi từ trái sang phải: rủi ro kinh doanh giảm → tỷ lệ nợ tăng → WACC thường giảm.</p>`),

    S('Thế giới hoàn hảo của Modigliani-Miller', `<div class="sd-check">
      <span>Kỳ vọng đồng nhất</span><span>Thị trường vốn hoàn hảo</span>
      <span>Không thuế, không chi phí giao dịch</span><span>Vay và cho vay ở lãi suất phi rủi ro</span>
      <span>Không chi phí đại diện, phá sản</span><span>Tài trợ độc lập với đầu tư</span></div>
      <p class="sd-note">MM không mô tả thực tế; nó chỉ ra <b>điều gì</b> làm cấu trúc vốn quan trọng: thuế, chi phí kiệt quệ, thông tin.</p>`),

    S('MM I không thuế: chiếc bánh không đổi', `<div class="sd-bars">
      <div class="sd-bar"><span class="sd-bar-l">Không vay</span><span class="sd-bar-t"><i style="width:100%"></i></span><b>V = 1.000</b></div>
      <div class="sd-bar"><span class="sd-bar-l">Vốn chủ (có vay)</span><span class="sd-bar-t"><i style="width:60%"></i></span><b>E = 600</b></div>
      <div class="sd-bar"><span class="sd-bar-l">Nợ (có vay)</span><span class="sd-bar-t"><i style="width:40%"></i></span><b>D = 400</b></div></div>
      <div class="sd-f">V<sub>L</sub> = V<sub>U</sub> = ${frac('EBIT', 'r<sub>0</sub>')} = ${frac('100', '10%')} = 1.000</div>
      <p class="sd-note">Giá trị chỉ phụ thuộc dòng tiền từ tài sản, không phụ thuộc cách chia.</p>`),

    S('MM II không thuế: r(e) tăng, WACC phẳng', `<div class="sd-cols2 wide-left"><div>${mmChart(0)}</div>
      <div><div class="sd-f sm">r<sub>e</sub> = r<sub>0</sub> + (r<sub>0</sub> - r<sub>d</sub>)${frac('D', 'E')}</div>
      <div class="sd-steps"><span>D = 400, E = 600</span><span>r<sub>e</sub> = 10% + 4% × 0,667 = <b>12,67%</b></span><span>WACC = 2,40% + 7,60% = <b>10%</b></span></div></div></div>`),

    S('MM có thuế: lá chắn thuế', `<div class="sd-cols2 wide-left"><div>${mmChart(0.25)}</div>
      <div><div class="sd-f sm">V<sub>L</sub> = V<sub>U</sub> + tD</div><div class="sd-f sm">r<sub>e</sub> = r<sub>0</sub> + (r<sub>0</sub> - r<sub>d</sub>)(1 - t)${frac('D', 'E')}</div>
      <div class="sd-rule up">WACC <b>giảm</b> khi vay thêm</div><div class="sd-rule down">Cực đoan: tối ưu ở <b>100% nợ</b></div></div></div>`),

    S('Ví dụ MM có thuế', `<div class="sd-tbl grid"><div class="head"><span>EBIT 100, t = 25%, r<sub>0</sub> = 10%, D = 300, r<sub>d</sub> = 6%</span><span>Kết quả</span></div>
      <div><span>V<sub>U</sub> = 100 × 0,75 / 10%</span><span>750</span></div>
      <div><span>V<sub>L</sub> = 750 + 0,25 × 300</span><span>825</span></div>
      <div><span>E = 825 - 300</span><span>525</span></div>
      <div><span>r<sub>e</sub> = 10% + 4% × 0,75 × 300/525</span><span>11,71%</span></div>
      <div><span>WACC = 1,64% + 7,45%</span><span>9,09%</span></div></div>
      <p class="sd-note">Kiểm tra: 75 / 9,09% = 825.</p>`),

    S('Chi phí kiệt quệ tài chính', `<div class="sd-cols2">
      <div class="sd-card"><b>Trực tiếp</b><p>Luật sư, tòa án, tư vấn tái cơ cấu</p><p>Thanh lý tài sản dưới giá</p></div>
      <div class="sd-card acc"><b>Gián tiếp</b><p>Mất khách hàng, nhà cung cấp, nhân sự</p><p>Bỏ lỡ cơ hội đầu tư</p><p>Xung đột cổ đông và chủ nợ</p></div></div>
      <p class="sd-note">Chi phí kỳ vọng = xác suất kiệt quệ × chi phí nếu xảy ra. Thấp hơn khi tài sản hữu hình, quản trị tốt, rủi ro kinh doanh thấp.</p>`),

    S('Đánh đổi tĩnh: có một điểm tối ưu', `<div class="sd-cols2 wide-left"><div>${tradeChart}</div>
      <div><div class="sd-f sm">V<sub>L</sub> = V<sub>U</sub> + tD - PV(kiệt quệ)</div>
      <div class="sd-steps"><span>Giả định PV kiệt quệ = 0,0004D²</span><span>Tối ưu khi 0,25 = 0,0008D → D = 312,5</span><span>V<sub>L</sub> lớn nhất = <b>789,06</b>, WACC nhỏ nhất</span></div></div></div>`),

    S('Tối ưu và mục tiêu', `<div class="sd-cols2">
      <div class="sd-card"><b>Optimal</b><p>Điểm lý thuyết: giá trị lớn nhất, WACC nhỏ nhất</p><p>Khó xác định chính xác</p><small>Thường đo bằng giá trị thị trường</small></div>
      <div class="sd-card acc"><b>Target</b><p>Tỷ lệ công ty hướng tới dài hạn</p><p>Lệch tạm thời do: giá thị trường biến động, tận dụng cơ hội tài trợ, chi phí phát hành</p><small>Thường đặt theo giá trị sổ sách</small></div></div>`),

    S('Thông tin bất cân xứng và pecking order', `<div class="sd-cols2">
      <div><div class="sd-steps"><span>① Lợi nhuận giữ lại</span><span>② Nợ</span><span>③ Cổ phiếu mới</span></div><p class="sd-note">Ưu tiên nguồn tiết lộ ít thông tin nhất.</p></div>
      <div><div class="sd-rule down">Phát hành cổ phiếu → "cổ phiếu đang đắt" <b>Giá giảm</b></div><div class="sd-rule up">Vay nợ → tự tin vào dòng tiền <b>Tín hiệu tốt</b></div></div></div>`),

    S('Bốn lý thuyết trong một bảng', `<div class="sd-tbl grid"><div class="head"><span>Lý thuyết</span><span>Ý chính</span><span>Hàm ý</span></div>
      <div><span>MM không thuế</span><span>Không quan trọng</span><span>WACC phẳng</span></div>
      <div><span>MM có thuế</span><span>Lá chắn thuế</span><span>100% nợ</span></div>
      <div><span>Static trade-off</span><span>Thuế đổi kiệt quệ</span><span>Có điểm tối ưu</span></div>
      <div><span>Pecking order</span><span>Thông tin bất cân xứng</span><span>Nội bộ → nợ → cổ phiếu</span></div></div>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>WACC: nợ nhân (1 - t)</span><span>Tỷ trọng: mục tiêu, rồi thị trường</span>
      <span>Dòng tiền ổn định, tài sản hữu hình → nợ nhiều</span><span>Khởi nghiệp vốn chủ; trưởng thành nhiều nợ</span>
      <span>MM không thuế: V<sub>L</sub> = V<sub>U</sub></span><span>MM có thuế: V<sub>L</sub> = V<sub>U</sub> + tD</span>
      <span>Trade-off: lợi ích biên = chi phí biên</span><span>Pecking: nội bộ → nợ → cổ phiếu</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 10 câu, mục tiêu ≥ 7 câu đúng.</p>`),
  ];

  addDeck('CF-06', `Slide Capital Structure - bản thiết kế riêng (${slides.length} slide)`, slides);
}());
