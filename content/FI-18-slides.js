// Bộ slide tự thiết kế cho FI-18 Asset-Backed Security (ABS) Instrument and Market Features.
(function () {
  const L = window.LESSONS && window.LESSONS['FI-18'];
  if (!L) return;
  const { slide, addDeck } = window.CFAH;
  const K = 'FI-18 · ABS';
  const S = (title, body, opt = {}) => slide(title, body, Object.assign({ kicker: K }, opt));
  const fmt = (x, d = 2) => x.toFixed(d).replace('.', ',');

  // Ba cột phân tầng A 75, B 15, C 10; phần lỗ tô đỏ từ dưới lên.
  function waterfall() {
    const tr = [['C', 10], ['B', 15], ['A', 75]], losses = [6, 18, 30];
    const W = 600, H = 300, base = 255, k = 2.2, w = 100;
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv big" role="img" aria-label="Phân bổ lỗ cho ba tầng">`;
    losses.forEach((Ls, i) => {
      const x = 70 + i * 170;
      let y = base, rem = Ls;
      tr.forEach(([n, sz]) => {
        const h = sz * k, lost = Math.min(sz, rem);
        rem -= lost;
        s += `<rect x="${x}" y="${y - h}" width="${w}" height="${h}" class="sv-node"/>`;
        if (lost > 0) s += `<rect x="${x}" y="${y - lost * k}" width="${w}" height="${lost * k}" style="fill:var(--bad-soft);stroke:var(--bad)"/>`;
        s += `<text x="${x + w / 2}" y="${y - h / 2 + 6}" class="sv-muted">${n}${lost > 0 ? ` -${lost}` : ''}</text>`;
        y -= h;
      });
      s += `<text x="${x + w / 2}" y="${base + 30}" class="sv-txt sv-t-down">Lỗ ${Ls}</text>`;
    });
    s += `<line x1="40" y1="${base - 25 * k}" x2="590" y2="${base - 25 * k}" class="sv-dash"/>`;
    return `${s}</svg>`;
  }

  // ABS thẻ tín dụng: lockout rồi trả gốc; rapid amortization rút ngắn.
  function cardTimeline() {
    const W = 600, H = 210;
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv big" role="img" aria-label="Vòng đời ABS thẻ tín dụng">`;
    s += `<rect x="30" y="40" width="360" height="56" rx="8" class="sv-node up"/><text x="210" y="75" class="sv-txt">Lockout: gốc → mua thẻ mới</text>`;
    s += `<rect x="390" y="40" width="180" height="56" rx="8" class="sv-node"/><text x="480" y="75" class="sv-txt">Trả gốc</text>`;
    s += `<line x1="30" y1="120" x2="570" y2="120" class="sv-axis"/><text x="30" y="146" class="sv-muted" text-anchor="start">phát hành</text><text x="570" y="146" class="sv-muted" text-anchor="end">đáo hạn</text>`;
    s += `<line x1="230" y1="104" x2="230" y2="200" class="sv-down"/><text x="238" y="186" class="sv-txt sv-t-down" text-anchor="start">sự kiện xấu → rapid amortization</text>`;
    s += `<text x="210" y="24" class="sv-muted">nhà đầu tư chỉ nhận lãi</text>`;
    return `${s}</svg>`;
  }

  const bar = (lab, v, max, txt) => `<div class="sd-bar"><span class="sd-bar-l">${lab}</span><span class="sd-bar-t"><i style="width:${(v / max) * 100}%"></i></span><b>${txt}</b></div>`;
  // CLO: lãi 18, senior 9,6, mezz 2, phí 1, equity 5,4 (triệu USD).
  const eq = 18 - 9.6 - 2 - 1;

  const slides = [
    S('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Fixed Income · FI-18</div>
      <h2>Asset-Backed Securities:<br>Instrument and Market Features</h2>
      <p>Ai chịu lỗ trước, ai được trả trước</p>
      <div class="sd-chips"><span>LOS 1 · Covered bond</span><span>LOS 2 · Credit enhancement</span><span>LOS 3 · ABS ngoài thế chấp</span><span>LOS 4 · CDO</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Covered bond khác ABS ở đâu?', `<div class="sd-tbl grid">
      <div class="head"><span></span><span>Covered bond</span><span>ABS</span></div>
      <div><span>Tài sản</span><span>Ở lại bảng cân đối</span><span>Bán sang SPE</span></div>
      <div><span>Quyền đòi</span><span><b>Dual recourse</b></span><span>Chỉ danh mục</span></div>
      <div><span>Danh mục</span><span>Động, phải thay tài sản xấu</span><span>Thường tĩnh</span></div>
      <div><span>Phân tầng</span><span>Thường một lớp</span><span>Nhiều tầng</span></div>
      <div><span>Lợi suất</span><span>Thấp hơn</span><span>Cao hơn</span></div></div>`),

    S('Khi ngân hàng không trả đúng hạn', `<div class="sd-rule up">Hard bullet <b>vỡ nợ ngay, đòi tăng tốc thanh toán</b></div>
      <div class="sd-rule">Soft bullet <b>gia hạn đáo hạn, thường tới khoảng 12 tháng</b></div>
      <div class="sd-rule down">Conditional pass-through <b>trả dần theo dòng tiền cover pool</b></div>
      <p class="sd-note">Từ trên xuống: bảo vệ trái chủ giảm dần, thời gian xử lý tài sản tăng dần.</p>`),

    S('Bản đồ tăng cường tín dụng', `<div class="sd-cols2">
      <div class="sd-card acc"><b>Nội bộ (internal)</b><p>Subordination · Overcollateralization · Excess spread · Reserve account</p><small>Nằm trong cấu trúc</small></div>
      <div class="sd-card"><b>Bên ngoài (external)</b><p>Financial guarantee · Surety bond · Letter of credit</p><small>Phụ thuộc bên thứ ba</small></div></div>
      <p class="sd-note">Bên bảo lãnh bị hạ hạng → ABS bị hạ hạng theo. Cấu trúc hiện đại dựa chủ yếu vào nội bộ.</p>`),

    S('Thác nước: tiền xuống, lỗ lên', `<div class="sd-cols2">
      <div class="sd-card"><b>Dòng tiền</b><p>Senior → Mezzanine → Subordinated</p><small>Trả từ trên xuống</small></div>
      <div class="sd-card acc"><b>Tổn thất</b><p>Subordinated → Mezzanine → Senior</p><small>Chịu từ dưới lên</small></div></div>
      <div class="sd-rule down">Lỗi hay gặp <b>chia lỗ tỷ lệ cho mọi tầng</b></div>`),

    S('Ví dụ: A 75 · B 15 · C 10', `<div class="sd-cols2 wide-left"><div>${waterfall()}</div>
      <div><div class="sd-tbl grid">
      <div class="head"><span>Lỗ</span><span>C</span><span>B</span><span>A</span></div>
      <div><span>6</span><span>60%</span><span>0</span><span>0</span></div>
      <div><span>18</span><span>100%</span><span>${fmt(8 / 15 * 100)}%</span><span>0</span></div>
      <div><span>30</span><span>100%</span><span>100%</span><span>${fmt(5 / 75 * 100)}%</span></div></div>
      <p class="sd-note">Đường đứt: mức thứ cấp 25% của tầng A.</p></div></div>`),

    S('Thế chấp vượt mức và excess spread', `<div class="sd-cols2"><div>
      <p class="sd-cap">Danh mục 105 lợi suất 8%; ABS 100 coupon 5%; phí 0,5% (triệu USD/năm)</p>
      ${bar('Lãi thu', 8.4, 8.4, '8,400')}${bar('Coupon', 5, 8.4, '5,000')}${bar('Phí', 0.525, 8.4, '0,525')}${bar('Excess spread', 2.875, 8.4, '2,875')}</div>
      <div><div class="sd-big">OC = 105 - 100 = <b>5</b></div>
      <p class="sd-note">Lỗ 12: OC hấp thụ 5, tầng C chịu 7 (70%). A, B nguyên vẹn.</p></div></div>`),

    S('Trả dần hay quay vòng?', `<div class="sd-cols2">
      <div class="sd-card"><b>Amortizing: vay mua ô tô</b><p>Lãi + gốc theo lịch + <b>gốc trả trước</b>.</p><small>Có rủi ro trả trước</small></div>
      <div class="sd-card acc"><b>Non-amortizing: thẻ tín dụng</b><p>Không lịch trả gốc; chủ thẻ trả, vay lại tùy ý.</p><small>Cần lockout để giữ danh mục</small></div></div>`),

    S('Một khoản vay ô tô trong danh mục', `<div class="sd-keys"><span>60 N</span><span>0.5 I/Y</span><span>30000 PV</span><span>0 FV</span><span>CPT PMT = -579.98</span></div>
      <div class="sd-cols3">
      <div class="sd-card"><b>Trả góp</b><p><b>579,98</b>/tháng</p></div>
      <div class="sd-card"><b>Lãi tháng 1</b><p>0,5% × 30.000 = <b>150,00</b></p></div>
      <div class="sd-card acc"><b>Gốc tháng 1</b><p><b>429,98</b></p></div></div>
      <p class="sd-note">Bán xe, xe mất cắp, tái cấp vốn → gốc trả trước chảy thẳng tới nhà đầu tư.</p>`),

    S('ABS thẻ tín dụng: lockout và rapid amortization', `${cardTimeline()}
      <p class="sd-note">Danh mục 500 triệu, chủ thẻ trả 20%/tháng → <b>100 triệu</b> gốc được mua lại thành khoản phải thu mới.</p>`),

    S('Solar ABS', `<div class="sd-cols2">
      <div class="sd-card"><b>Tài sản</b><p>Khoản vay, thuê hoặc mua điện của hộ gia đình lắp pin mặt trời.</p><small>Người vay thường có tín dụng tốt</small></div>
      <div class="sd-card acc"><b>Rủi ro</b><p>Tín dụng hộ gia đình · trả trước · chính sách hỗ trợ · hiệu suất thiết bị</p><small>Tiền điện tiết kiệm hỗ trợ khả năng trả</small></div></div>`),

    S('CDO: phân tầng một danh mục nợ', `<div class="sd-grid4">
      <div class="sd-card"><b>CBO</b><p>Trái phiếu doanh nghiệp, EM</p></div>
      <div class="sd-card acc"><b>CLO</b><p>Leveraged loans - phổ biến nhất</p></div>
      <div class="sd-card"><b>Structured finance CDO</b><p>Các tầng ABS, MBS</p></div>
      <div class="sd-card"><b>Synthetic CDO</b><p>Phơi nhiễm qua CDS</p></div></div>
      <p class="sd-note">Khác ABS: có <b>collateral manager</b> quản lý chủ động danh mục.</p>`),

    S('CLO: tầng equity hưởng chênh lệch', `<div class="sd-cols2"><div>
      <p class="sd-cap">200 triệu lợi suất 9% (triệu USD/năm)</p>
      ${bar('Lãi danh mục', 18, 18, '18,0')}${bar('Senior 160 × 6%', 9.6, 18, '9,6')}${bar('Mezz 20 × 10%', 2, 18, '2,0')}${bar('Phí 0,5%', 1, 18, '1,0')}${bar('Equity 20', eq, 18, fmt(eq, 1))}</div>
      <div><div class="sd-rule up">Lỗ 0 <b>${fmt(eq / 20 * 100, 0)}%</b></div><div class="sd-rule">Lỗ 4 <b>${fmt((eq - 4) / 20 * 100, 0)}%</b></div><div class="sd-rule down">Lỗ 8 <b>${fmt((eq - 8) / 20 * 100, 0)}%</b></div>
      <p class="sd-note">Đòn bẩy 10 lần: lỗ 2% danh mục làm equity mất 20 điểm %.</p></div></div>`),

    S('Bảo vệ tầng nợ và rủi ro CDO', `<div class="sd-cols2">
      <div class="sd-card acc"><b>Coverage tests</b><p>OC test: 200 / 160 = <b>${fmt(200 / 160)}</b> lần với senior. Interest coverage test.</p><small>Không đạt → tiền chuyển sang trả gốc senior</small></div>
      <div class="sd-card"><b>Rủi ro</b><p>Vỡ nợ · <b>tương quan vỡ nợ</b> · năng lực nhà quản lý · đòn bẩy · thanh khoản</p><small>2008: tương quan cao, senior cũng lỗ</small></div></div>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>Covered bond: trên bảng cân đối, dual recourse</span><span>Cover pool động; soft bullet = gia hạn</span>
      <span>Lỗ từ dưới lên, tiền từ trên xuống</span><span>OC, excess spread, reserve: nội bộ</span>
      <span>LOC, guarantee: bên ngoài</span><span>Auto ABS trả dần, có trả trước</span>
      <span>Card ABS: lockout, rapid amortization</span><span>CDO: manager, equity có đòn bẩy</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 10 câu.</p>`),
  ];

  addDeck('FI-18', 'Slide ABS - bản thiết kế riêng (15 slide)', slides);
}());
