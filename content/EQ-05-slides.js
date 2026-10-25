// Bộ slide tự thiết kế cho EQ-05 Introduction to Equity Valuation.
(function () {
  const L = window.LESSONS && window.LESSONS['EQ-05'];
  if (!L) return;
  const { frac, slide, addDeck } = window.CFAH;
  const K = 'EQ-05 · Introduction to Equity Valuation';
  const S = (title, body, opt = {}) => slide(title, body, Object.assign({ kicker: K }, opt));
  const fmt = (x, d = 0) => { const [a, b] = x.toFixed(d).split('.'); return a.replace(/\B(?=(\d{3})+(?!\d))/g, '.') + (b ? ',' + b : ''); };

  // Trục giá: giá thị trường 36 so với giá trị nội tại 42.
  const valueLine = (() => {
    const W = 600, H = 150, l = 40, r = 560, y = 80, lo = 25, hi = 50;
    const X = v => l + ((v - lo) / (hi - lo)) * (r - l);
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv big" role="img" aria-label="Giá thị trường thấp hơn giá trị nội tại">`;
    s += `<line x1="${l}" y1="${y}" x2="${r}" y2="${y}" class="sv-axis"/>`;
    [25, 30, 35, 40, 45, 50].forEach(v => { s += `<line x1="${X(v)}" y1="${y - 5}" x2="${X(v)}" y2="${y + 5}" class="sv-axis"/><text x="${X(v)}" y="${y + 28}" class="sv-muted">${v}</text>`; });
    s += `<line x1="${X(36)}" y1="${y}" x2="${X(42)}" y2="${y}" class="sv-up" style="stroke-width:8"/>`;
    s += `<circle cx="${X(36)}" cy="${y}" r="8" class="sv-dot"/><text x="${X(36)}" y="${y - 22}" class="sv-txt">Giá 36</text>`;
    s += `<circle cx="${X(42)}" cy="${y}" r="8" class="sv-dot"/><text x="${X(42)}" y="${y - 22}" class="sv-txt sv-t-up">Giá trị 42</text>`;
    s += `<text x="${(X(36) + X(42)) / 2}" y="${y + 58}" class="sv-txt sv-t-up">+16,67% nếu giá về giá trị</text>`;
    return `${s}</svg>`;
  })();

  // Thác nước EV của Sao Mai.
  const evWaterfall = (() => {
    const steps = [['Vốn hóa', 6000, 'up'], ['+ Ưu đãi', 300, 'up'], ['+ Nợ', 1500, 'up'], ['+ NCI', 200, 'up'], ['- Tiền', -900, 'down']];
    const W = 600, H = 270, l = 20, b = 220, top = 20, max = 8500;
    const Y = v => b - (v / max) * (b - top);
    const bw = 80, gap = 18;
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv" role="img" aria-label="Từ vốn hóa đến EV">`;
    s += `<line x1="${l}" y1="${b}" x2="${W - 10}" y2="${b}" class="sv-axis"/>`;
    let run = 0;
    steps.forEach(([lab, v, c], i) => {
      const x = l + 10 + i * (bw + gap);
      const a = run, z = run + v; run = z;
      const y1 = Y(Math.max(a, z)), y2 = Y(Math.min(a, z));
      s += `<rect x="${x}" y="${y1}" width="${bw}" height="${Math.max(2, y2 - y1)}" rx="4" class="sv-panel" style="stroke-width:2" /><line x1="${x}" y1="${Y(z)}" x2="${x + bw}" y2="${Y(z)}" class="sv-${c}"/>`;
      s += `<text x="${x + bw / 2}" y="${y1 - 8}" class="sv-txt sv-t-${c}" style="font-size:15px">${fmt(Math.abs(v))}</text>`;
      s += `<text x="${x + bw / 2}" y="${b + 22}" class="sv-muted" style="font-size:14px">${lab}</text>`;
    });
    const x = l + 10 + 5 * (bw + gap);
    s += `<rect x="${x}" y="${Y(run)}" width="${bw}" height="${b - Y(run)}" rx="4" class="sv-panel"/><line x1="${x}" y1="${Y(run)}" x2="${x + bw}" y2="${Y(run)}" class="sv-pv"/>`;
    s += `<text x="${x + bw / 2}" y="${Y(run) - 8}" class="sv-txt sv-t-pv" style="font-size:15px">${fmt(run)}</text><text x="${x + bw / 2}" y="${b + 22}" class="sv-muted" style="font-size:14px">= EV</text>`;
    return `${s}</svg>`;
  })();

  // Ba nhóm mô hình.
  const tree = `<svg viewBox="0 0 600 230" class="sv" role="img" aria-label="Ba nhóm mô hình định giá">
    <rect x="200" y="10" width="200" height="44" rx="10" class="sv-panel"/><text x="300" y="38" class="sv-txt">Mô hình định giá</text>
    <line x1="300" y1="54" x2="100" y2="100" class="sv-axis"/><line x1="300" y1="54" x2="300" y2="100" class="sv-axis"/><line x1="300" y1="54" x2="500" y2="100" class="sv-axis"/>
    <rect x="15" y="100" width="170" height="44" rx="10" class="sv-panel"/><text x="100" y="128" class="sv-txt sv-t-up">Hiện tại hóa</text>
    <rect x="215" y="100" width="170" height="44" rx="10" class="sv-panel"/><text x="300" y="128" class="sv-txt sv-t-pv">Bội số</text>
    <rect x="415" y="100" width="170" height="44" rx="10" class="sv-panel"/><text x="500" y="128" class="sv-txt sv-t-down">Dựa trên tài sản</text>
    <text x="100" y="172" class="sv-muted">DDM · FCFE</text><text x="100" y="196" class="sv-muted">FCFF · RI</text>
    <text x="300" y="172" class="sv-muted">P/E · P/B · P/S</text><text x="300" y="196" class="sv-muted">EV/EBITDA</text>
    <text x="500" y="172" class="sv-muted">Book điều chỉnh</text><text x="500" y="196" class="sv-muted">Giá trị thanh lý</text>
    <text x="100" y="222" class="sv-muted" style="font-size:13px">tuyệt đối</text><text x="300" y="222" class="sv-muted" style="font-size:13px">tương đối</text><text x="500" y="222" class="sv-muted" style="font-size:13px">mức sàn</text></svg>`;

  // So sánh các thước đo vốn chủ của Sao Mai (mỗi cổ phiếu).
  const bars = [['Theo tài sản (giá trị hợp lý)', 10.5], ['Book value', 12], ['Giá thị trường', 30]];
  const perShare = `<div class="sd-bars">${bars.map(([lab, v]) => `<div class="sd-bar"><span class="sd-bar-l">${lab}</span><span class="sd-bar-t"><i style="width:${(v / 32) * 100}%"></i></span><b>${fmt(v, v % 1 ? 1 : 0)}</b></div>`).join('')}</div>`;

  const slides = [
    S('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Equity Investments · EQ-05</div>
      <h2>Introduction to<br>Equity Valuation</h2>
      <p>Giá là thứ bạn trả - giá trị là thứ bạn nhận</p>
      <div class="sd-chips"><span>LOS 1 · Giá và giá trị</span><span>LOS 2 · Book, market cap, EV</span><span>LOS 3 · Ba nhóm mô hình</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Bản đồ chuỗi định giá', `<div class="sd-grid4">
      <div class="sd-card acc"><b>EQ-05 · Khung tư duy</b><p>Giá vs giá trị, book / market cap / EV, ba nhóm mô hình</p></div>
      <div class="sd-card"><b>EQ-06 · Dòng tiền</b><p>DDM, Gordon, nhiều giai đoạn, FCFE, cổ phiếu ưu đãi</p></div>
      <div class="sd-card"><b>EQ-07 · Bội số</b><p>P/E, P/B, P/S, EV/EBITDA, chọn nhóm so sánh</p></div>
      <div class="sd-card"><b>EQ-08 · Mô hình dự phóng</b><p>Từ báo cáo tài chính dự phóng đến giá trị mỗi cổ phiếu</p></div></div>
      <p class="sd-note">Câu hỏi chung: <b>cổ phiếu này đáng giá bao nhiêu</b>, và so với giá thị trường thì đắt hay rẻ?</p>`),

    S('Giá và giá trị: hai con số khác nhau', `<div class="sd-tbl grid"><div class="head"><span></span><span>Giá thị trường</span><span>Giá trị nội tại</span></div>
      <div><span>Là gì</span><span>Mức giá vừa khớp lệnh</span><span>Giá trị "đúng" khi hiểu đủ</span></div>
      <div><span>Ai xác định</span><span>Cung và cầu</span><span>Nhà phân tích + mô hình</span></div>
      <div><span>Quan sát được?</span><span>Có</span><span>Không, chỉ ước tính</span></div>
      <div><span>Nhìn về</span><span>Kỳ vọng của đám đông</span><span>Kỳ vọng của bạn</span></div></div>`),

    S('So sánh để ra quyết định', `${valueLine}
      <div class="sd-cols3"><div class="sd-rule up">V &gt; P → <b>Undervalued</b></div><div class="sd-rule">V = P → <b>Fairly valued</b></div><div class="sd-rule down">V &lt; P → <b>Overvalued</b></div></div>
      <p class="sd-note">% tăng giá = (V - P) / <b>P</b> = 16,67% · Biên an toàn = (V - P) / <b>V</b> = 14,29%</p>`),

    S('Vì sao giá khác giá trị?', `<div class="sd-cols3">
      <div class="sd-card"><b>Thị trường</b><p>Chưa phản ánh hết thông tin, tâm lý, thanh khoản thấp</p></div>
      <div class="sd-card"><b>Nhà phân tích</b><p>Dự báo tăng trưởng, rủi ro khác số đông</p></div>
      <div class="sd-card"><b>Mô hình</b><p>Giả định có sai số; đổi r 1% có thể đổi giá trị 20% - 30%</p></div></div>
      <div class="sd-rule down">Chênh lệch rất lớn: không vội mua <b>Xem lại giả định</b></div>`),

    S('Đọc ngược kỳ vọng từ giá', `<div class="sd-big">g = r - ${frac('D<sub>1</sub>', 'P<sub>0</sub>')}</div>
      <div class="sd-cols2"><div class="sd-card"><b>Dữ liệu</b><p>P₀ = 30 · D₁ = 1,20 · r = 10%</p></div>
      <div class="sd-card acc"><b>Thị trường ngầm định</b><p>g = 10% - 4% = <b>6%</b> mỗi năm</p></div></div>
      <p class="sd-note">Bạn tin g chỉ 3% - 4%? → giá 30 chứa kỳ vọng quá lạc quan → có thể <b>overvalued</b>.</p>`),

    S('Ba con số có sẵn', `<div class="sd-cols3">
      <div class="sd-card"><b>Book value</b><div class="sd-f sm">Tài sản - Nợ</div><p>Kế toán, quá khứ</p><small>Thiếu tài sản vô hình tự tạo</small></div>
      <div class="sd-card"><b>Market cap</b><div class="sd-f sm">Giá × số CP</div><p>Thị trường, tương lai</p><small>Đem so với giá trị nội tại</small></div>
      <div class="sd-card acc"><b>EV</b><div class="sd-f sm">Toàn doanh nghiệp</div><p>Mọi người cấp vốn</p><small>So sánh khác đòn bẩy</small></div></div>`),

    S('Từ vốn hóa đến EV: Sao Mai', `<div class="sd-cols2 wide-left"><div>${evWaterfall}</div>
      <div><div class="sd-rule up">Cộng: ưu đãi, nợ, lợi ích không kiểm soát</div><div class="sd-rule down">Trừ: tiền và đầu tư ngắn hạn</div>
      <p class="sd-note">EV/EBITDA = 7.100 / 1.000 = <b>7,1</b>. Mua đứt công ty thì gánh nợ, nhưng giữ lại tiền.</p></div></div>`),

    S('Cùng một cổ phiếu, ba con số', `<p class="sd-cap">Sao Mai, giá trị vốn chủ mỗi cổ phiếu:</p>${perShare}
      <div class="sd-cols2"><div class="sd-card"><b>P/B = 30 / 12 = 2,5</b><p>Thị trường kỳ vọng sinh lời vượt mức</p></div>
      <div class="sd-card"><b>Phần chênh 30 - 12</b><p>Thương hiệu, tăng trưởng, thứ không nằm trên sổ</p></div></div>`),

    S('Ba nhóm mô hình định giá', `${tree}<p class="sd-note">Hiện tại hóa: giá trị từ chính dòng tiền · Bội số: so với công ty khác · Tài sản: tài sản trừ nợ theo giá thị trường</p>`),

    S('Hiện tại hóa: bốn loại dòng tiền', `<div class="sd-big">V₀ = Σ ${frac('CF<sub>t</sub>', '(1 + r)<sup>t</sup>')}</div>
      <div class="sd-grid4">
      <div><b>DDM</b><p>Cổ tức · chiết khấu ở r<sub>e</sub></p></div>
      <div><b>FCFE</b><p>Dòng tiền tự do cho cổ đông · r<sub>e</sub></p></div>
      <div><b>FCFF</b><p>Dòng tiền cho mọi người cấp vốn · WACC</p></div>
      <div><b>Residual income</b><p>Book value + PV lợi nhuận vượt chi phí vốn</p></div></div>`),

    S('Bội số: hai cách dùng', `<div class="sd-cols2">
      <div class="sd-card"><b>Method of comparables</b><p>So P/E, EV/EBITDA với công ty tương tự</p><p>Luật một giá · định giá <b>tương đối</b></p></div>
      <div class="sd-card acc"><b>Forecasted fundamentals</b><p>Tính bội số "đáng có" từ DCF</p><div class="sd-f sm">P₀/E₁ = ${frac('D<sub>1</sub>/E<sub>1</sub>', 'r - g')}</div></div></div>
      <p class="sd-note">Price multiples: mẫu số thuộc cổ đông · EV multiples: mẫu số trước lãi vay (EBITDA, EBIT, Sales)</p>`),

    S('Dựa trên tài sản: một mức sàn', `<div class="sd-f">Vốn chủ = Tài sản (giá hợp lý) - Nợ (giá hợp lý)</div>
      <div class="sd-cols2"><div class="sd-card"><b>Sao Mai</b><p>5.200 - 3.100 = 2.100</p><p>÷ 200 triệu CP = <b>10,5</b> so với giá 30</p></div>
      <div><div class="sd-rule up">Hợp: tài sản hữu hình, có giá thị trường, sắp thanh lý</div><div class="sd-rule down">Không hợp: công nghệ, dịch vụ, nhiều tài sản vô hình</div></div></div>`),

    S('Ưu và nhược điểm', `<div class="sd-tbl grid"><div class="head"><span>Nhóm</span><span>Ưu điểm</span><span>Nhược điểm</span></div>
      <div><span>Hiện tại hóa</span><span>Lý thuyết vững, được chấp nhận rộng</span><span>Nhiều đầu vào, rất nhạy với r và g</span></div>
      <div><span>Bội số so sánh</span><span>Dễ tính, dữ liệu sẵn</span><span>Cả nhóm định giá sai thì sai theo</span></div>
      <div><span>Bội số cơ bản</span><span>Có nền DCF</span><span>Nhạy với (r - g)</span></div>
      <div><span>Tài sản</span><span>Cho mức sàn</span><span>Khó định giá tài sản vô hình</span></div></div>`),

    S('Chọn mô hình theo đặc điểm công ty', `<div class="sd-tbl grid"><div class="head"><span>Đặc điểm</span><span>Mô hình hợp</span></div>
      <div><span>Trưởng thành, cổ tức đều</span><span>DDM (Gordon)</span></div>
      <div><span>Ít cổ tức, FCF dương, ổn định</span><span>FCFE / FCFF</span></div>
      <div><span>Nhiều công ty tương tự niêm yết</span><span>P/E, EV/EBITDA</span></div>
      <div><span>Đang lỗ, mới khởi nghiệp</span><span>P/S, EV/Sales, DCF nhiều kịch bản</span></div>
      <div><span>Tài sản hữu hình, sắp thanh lý</span><span>Dựa trên tài sản</span></div></div>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>V &gt; P → undervalued</span><span>Chênh lớn → xem lại giả định</span>
      <span>% tăng giá chia cho P</span><span>Book value: kế toán, quá khứ</span>
      <span>Market cap: đem so, không phải giá trị</span><span>EV cộng nợ, ưu đãi, NCI; trừ tiền</span>
      <span>Dòng tiền · bội số · tài sản</span><span>Asset-based = mức sàn</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 10 câu, mục tiêu ≥ 7 câu đúng.</p>`),
  ];

  addDeck('EQ-05', `Slide Equity Valuation - bản thiết kế riêng (${slides.length} slide)`, slides);
}());
