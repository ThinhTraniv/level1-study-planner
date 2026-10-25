// Bộ slide tự thiết kế cho FI-01 Fixed-Income Instrument Features.
(function () {
  const L = window.LESSONS && window.LESSONS['FI-01'];
  if (!L) return;
  const { slide, addDeck, tl, frac } = window.CFAH;
  const K = 'FI-01 · Instrument Features';
  const S = (title, body, opt = {}) => slide(title, body, Object.assign({ kicker: K }, opt));
  const fmt = (x, d = 1) => x.toFixed(d).replace('.', ',');

  // Thác trả nợ khi phá sản: tài sản 60, secured 40, senior unsecured 30, sub 20.
  function waterfall() {
    let left = 60;
    const rows = [['Senior secured', 40], ['Senior unsecured', 30], ['Subordinated', 20]].map(([lab, claim]) => {
      const paid = Math.max(0, Math.min(left, claim)); left -= paid;
      return [lab, paid / claim];
    });
    return `<div class="sd-bars">${rows.map(([lab, v]) => `<div class="sd-bar"><span class="sd-bar-l">${lab}</span><span class="sd-bar-t"><i style="width:${v * 100}%"></i></span><b>${fmt(v * 100)}%</b></div>`).join('')}</div>`;
  }

  // Phổ kỳ hạn.
  const spectrum = `<svg viewBox="0 0 600 150" class="sv big" role="img" aria-label="Phân loại theo kỳ hạn gốc">
    <line x1="30" y1="75" x2="570" y2="75" class="sv-axis"/>
    <rect x="30" y="45" width="150" height="60" rx="10" class="sv-key"/><text x="105" y="82" class="sv-keyt">≤ 1 năm</text>
    <rect x="200" y="45" width="230" height="60" rx="10" class="sv-panel"/><text x="315" y="82" class="sv-txt">&gt; 1 năm</text>
    <rect x="450" y="45" width="120" height="60" rx="10" class="sv-panel"/><text x="510" y="82" class="sv-txt">Không có</text>
    <text x="105" y="132" class="sv-muted">Money market</text><text x="315" y="132" class="sv-muted">Capital market</text><text x="510" y="132" class="sv-muted">Perpetual</text></svg>`;

  const slides = [
    S('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Fixed Income · FI-01</div>
      <h2>Fixed-Income<br>Instrument Features</h2>
      <p>Một trái phiếu được mô tả bằng gì - hợp đồng đứng sau nó quy định gì</p>
      <div class="sd-chips"><span>LOS 1 · Đặc điểm của trái phiếu</span><span>LOS 2 · Indenture và covenants</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Trái phiếu là một lời hứa trả tiền', `${tl(4, [{ t: 0, label: '-Giá', cls: 'down', above: true }, { t: 1, label: '6' }, { t: 2, label: '6' }, { t: 3, label: '6' }, { t: 4, label: '6 + 100' }], { h: 140 })}
      <div class="sd-cols2"><div class="sd-card"><b>Issuer = người đi vay</b><p>Nhận tiền hôm nay, cam kết trả lãi và gốc.</p></div>
      <div class="sd-card acc"><b>Trái chủ = người cho vay</b><p>Có quyền đòi nợ, <b>không</b> sở hữu doanh nghiệp.</p></div></div>`),

    S('Ai phát hành?', `<div class="sd-grid4">
      <div class="sd-card"><b>Chính phủ trung ương</b><p>Trả bằng thuế, in được nội tệ</p></div>
      <div class="sd-card"><b>Địa phương, agency, supranational</b><p>Bang, thành phố, World Bank (FI-05)</p></div>
      <div class="sd-card"><b>Doanh nghiệp</b><p>Tài chính và phi tài chính; trả bằng dòng tiền hoạt động</p></div>
      <div class="sd-card acc"><b>SPE</b><p>Trả bằng dòng tiền của nhóm tài sản (chứng khoán hóa)</p></div></div>`),

    S('Kỳ hạn gốc', `${spectrum}
      <p class="sd-note">Perpetual chỉ trả lãi mãi mãi: PV = coupon / r (QM-04). Thời gian còn lại đến đáo hạn gọi là <b>tenor</b>.</p>`),

    S('Mệnh giá và giá yết', `<div class="sd-big">Giá 98,50 = 98,50% mệnh giá</div>
      <div class="sd-tbl grid"><div class="head"><span>Giá yết</span><span>&lt; 100</span><span>= 100</span><span>&gt; 100</span></div>
      <div><span>Tên gọi</span><span>Discount</span><span>Par</span><span>Premium</span></div>
      <div><span>Mệnh giá 2.000.000</span><span>1.970.000 (98,50)</span><span>2.000.000</span><span>2.030.000 (101,50)</span></div></div>
      <p class="sd-note">Coupon luôn tính trên <b>mệnh giá</b>, không tính trên giá mua.</p>`),

    S('Coupon: bao nhiêu, bao lâu một lần', `<div class="sd-cols3">
      <div class="sd-card"><b>Cố định</b><p>Không đổi suốt đời trái phiếu</p></div>
      <div class="sd-card"><b>Thả nổi (FRN)</b><p>MRR + biên cố định, điều chỉnh định kỳ</p></div>
      <div class="sd-card acc"><b>Zero-coupon</b><p>Không lãi, mua dưới mệnh giá, nhận đủ mệnh giá</p></div></div>
      <div class="sd-f sm">Coupon mỗi kỳ = ${frac('coupon rate × mệnh giá', 'số kỳ / năm')} = ${frac('5% × 1.000', '2')} = <b>25</b></div>`),

    S('Seniority: ai được trả trước?', `<p class="sd-cap">Tài sản thanh lý 60; nợ secured 40, senior unsecured 30, subordinated 20:</p>${waterfall()}
      <p class="sd-note">Ưu tiên càng thấp → thu hồi càng ít → <b>lợi suất đòi hỏi càng cao</b>.</p>`),

    S('Quyền chọn gắn kèm: ai nắm quyền?', `<div class="sd-cols3">
      <div class="sd-card"><b>Call</b><p>Issuer mua lại sớm</p><small>Có lợi cho issuer → giá thấp hơn</small></div>
      <div class="sd-card acc"><b>Put</b><p>Trái chủ bán lại cho issuer</p><small>Có lợi cho trái chủ → giá cao hơn</small></div>
      <div class="sd-card acc"><b>Chuyển đổi</b><p>Trái chủ đổi sang cổ phiếu</p><small>Có lợi cho trái chủ → giá cao hơn</small></div></div>
      <p class="sd-note">Ai nắm quyền thì người kia đòi được bù. Chi tiết ở FI-02.</p>`),

    S('Current yield và YTM', `<div class="sd-cols2">
      <div><div class="sd-f sm">CY = ${frac('6', '103,50')} = <b>5,80%</b></div>
      <div class="sd-keys"><span>N = 4</span><span>PV = -103,5</span><span>PMT = 6</span><span>FV = 100</span><span><kbd>CPT</kbd> <kbd>I/Y</kbd> = <b>5,01%</b></span></div></div>
      <div><div class="sd-rule up">Premium <b>coupon &gt; CY &gt; YTM</b></div><div class="sd-rule">Par <b>coupon = CY = YTM</b></div><div class="sd-rule down">Discount <b>coupon &lt; CY &lt; YTM</b></div></div></div>
      <p class="sd-note">Trái phiếu 4 năm, coupon 6%, giá 103,50. YTM = IRR khi giữ đến đáo hạn.</p>`),

    S('Bond indenture chứa gì?', `<div class="sd-steps">
      <span>① Đặc điểm: issuer, mệnh giá, coupon, kỳ hạn, đồng tiền, quyền chọn</span>
      <span>② Mục đích sử dụng vốn (use of proceeds)</span>
      <span>③ Nguồn trả nợ: thuế · doanh thu dự án · dòng tiền hoạt động · nhóm tài sản</span>
      <span>④ Tài sản đảm bảo, tăng cường tín dụng</span>
      <span>⑤ Covenants · <b>Trustee</b> giám sát thay trái chủ</span></div>`),

    S('Affirmative và negative covenants', `<div class="sd-cols2">
      <div class="sd-card"><b>Affirmative: phải làm</b><p>Trả nợ đúng hạn · nộp thuế · bảo hiểm tài sản · báo cáo tài chính · <b>cross-default</b> · <b>pari passu</b></p><small>Ít tốn kém cho issuer</small></div>
      <div class="sd-card acc"><b>Negative: không được làm</b><p>Vay thêm quá giới hạn · <b>negative pledge</b> · chia cổ tức, mua lại cổ phiếu · bán tài sản, sáp nhập</p><small>Hạn chế hoạt động kinh doanh</small></div></div>
      <p class="sd-note">Nợ / EBITDA ≤ 3,0x: EBITDA 200, nợ 500 → chỉ vay thêm tối đa <b>100</b>.</p>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>≤ 1 năm: money market</span><span>Giá yết = % mệnh giá</span>
      <span>Coupon tính trên mệnh giá</span><span>Secured → senior → subordinated</span>
      <span>Call có lợi cho issuer</span><span>Put, chuyển đổi có lợi cho trái chủ</span>
      <span>Premium: coupon &gt; CY &gt; YTM</span><span>Cross-default, pari passu: affirmative</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 8 câu, mục tiêu ≥ 6 câu đúng.</p>`),
  ];

  addDeck('FI-01', `Slide Instrument Features - bản thiết kế riêng (${slides.length} slide)`, slides);
}());
