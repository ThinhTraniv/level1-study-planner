// Bộ slide tự thiết kế cho QM-11 Introduction to Financial Data Science.
// Gắn vào LESSONS['QM-11'].slides.
(function () {
  const L = window.LESSONS && window.LESSONS['QM-11'];
  if (!L) return;
  const { slide, addDeck } = window.CFAH;
  const K = 'QM-11 · Financial Data Science';
  const S = (title, body, opt = {}) => slide(title, body, Object.assign({ kicker: K }, opt));

  // Dữ liệu minh họa: quy luật thật là đường cong, cộng nhiễu cố định.
  let seed = 31;
  const rnd = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
  const truth = x => 5 + 2.6 * Math.sin(x / 1.6);
  const PX = Array.from({ length: 14 }, (_, i) => 0.4 + (9.2 * i) / 13);
  const PY = PX.map(x => truth(x) + (rnd() + rnd() + rnd() - 1.5) * 1.6);

  // Ba ô: underfit (đường thẳng OLS), vừa khớp (quy luật thật), overfit (nối qua mọi điểm).
  function fitPanel(kind, cap) {
    const W = 300, H = 230, l = 15, r = 290, t = 10, b = 190;
    const X = x => l + (x / 10) * (r - l), Y = y => b - (y / 10) * (b - t);
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv" role="img" aria-label="${cap}">`;
    s += `<line x1="${l}" y1="${b}" x2="${r}" y2="${b}" class="sv-axis"/><line x1="${l}" y1="${t}" x2="${l}" y2="${b}" class="sv-axis"/>`;
    let pts = '';
    if (kind === 'under') {
      const n = PX.length, xb = PX.reduce((a, v) => a + v, 0) / n, yb = PY.reduce((a, v) => a + v, 0) / n;
      let sxx = 0, sxy = 0; PX.forEach((x, i) => { sxx += (x - xb) ** 2; sxy += (x - xb) * (PY[i] - yb); });
      const b1 = sxy / sxx, b0 = yb - b1 * xb;
      pts = `${X(0.2)},${Y(b0 + b1 * 0.2)} ${X(9.8)},${Y(b0 + b1 * 9.8)}`;
    } else if (kind === 'good') {
      for (let x = 0.2; x <= 9.81; x += 0.2) pts += `${X(x).toFixed(1)},${Y(truth(x)).toFixed(1)} `;
    } else {
      pts = PX.map((x, i) => `${X(x).toFixed(1)},${Y(PY[i]).toFixed(1)}`).join(' ');
    }
    s += `<polyline points="${pts}" class="sv-curve"/>`;
    PX.forEach((x, i) => { s += `<circle cx="${X(x).toFixed(1)}" cy="${Y(PY[i]).toFixed(1)}" r="5" class="sv-dot" opacity="0.75"/>`; });
    return `${s}<text x="${(l + r) / 2}" y="${H - 8}" class="sv-txt ${kind === 'good' ? 'sv-t-up' : 'sv-t-down'}">${cap}</text></svg>`;
  }

  // Sai số theo độ phức tạp: training giảm mãi, validation hình chữ U.
  const errCurve = (() => {
    const W = 600, H = 300, l = 50, r = 580, t = 20, b = 250;
    const X = c => l + (c / 10) * (r - l), Y = e => b - (e / 10) * (b - t);
    const tr = c => 8.5 / (1 + 0.55 * c) + 0.3;
    const va = c => tr(c) + 0.06 * c * c + 0.4;
    let p1 = '', p2 = '', best = 0, bv = 1e9;
    for (let c = 0; c <= 10.001; c += 0.1) {
      p1 += `${X(c).toFixed(1)},${Y(tr(c)).toFixed(1)} `; p2 += `${X(c).toFixed(1)},${Y(Math.min(10, va(c))).toFixed(1)} `;
      if (va(c) < bv) { bv = va(c); best = c; }
    }
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv" role="img" aria-label="Sai số theo độ phức tạp mô hình">`;
    s += `<line x1="${l}" y1="${b}" x2="${r}" y2="${b}" class="sv-axis"/><line x1="${l}" y1="${t}" x2="${l}" y2="${b}" class="sv-axis"/>`;
    s += `<line x1="${X(best)}" y1="${t}" x2="${X(best)}" y2="${b}" class="sv-dash"/>`;
    s += `<polyline points="${p1}" class="sv-curve"/><polyline points="${p2}" class="sv-down" fill="none"/>`;
    s += `<text x="${X(9.5)}" y="${Y(tr(9.5)) - 12}" class="sv-txt" text-anchor="end">Sai số training</text>`;
    s += `<text x="${X(8.6)}" y="${Y(va(8.6)) - 4}" class="sv-txt sv-t-down" text-anchor="end">Sai số validation / test</text>`;
    s += `<text x="${X(best / 2)}" y="${b - 12}" class="sv-muted">underfit</text><text x="${X(best)}" y="${t + 14}" class="sv-txt sv-t-up">vừa đủ</text><text x="${X((best + 10) / 2)}" y="${b - 12}" class="sv-muted">overfit</text>`;
    s += `<text x="${(l + r) / 2}" y="${H - 14}" class="sv-muted">Độ phức tạp của mô hình →</text><text x="${l - 8}" y="${t + 10}" class="sv-muted" text-anchor="end">Lỗi</text>`;
    return `${s}</svg>`;
  })();

  // Chia dữ liệu: training / validation / test.
  const split = `<svg viewBox="0 0 600 120" class="sv big" role="img" aria-label="Chia dữ liệu thành ba phần">
    <rect x="10" y="20" width="350" height="56" rx="8" class="sv-key"/><text x="185" y="56" class="sv-keyt">Training 60%</text>
    <rect x="365" y="20" width="110" height="56" rx="8" class="sv-panel"/><text x="420" y="56" class="sv-txt">Validation</text>
    <rect x="480" y="20" width="110" height="56" rx="8" class="sv-node down"/><text x="535" y="56" class="sv-txt sv-t-down">Test</text>
    <text x="185" y="104" class="sv-muted">học tham số</text><text x="420" y="104" class="sv-muted">tinh chỉnh</text><text x="535" y="104" class="sv-muted">chấm điểm cuối</text></svg>`;

  // Chuỗi xử lý dữ liệu.
  const pipe = (() => {
    const st = ['Capture', 'Curation', 'Storage', 'Search', 'Transfer'];
    const vi = ['thu thập', 'làm sạch', 'lưu trữ', 'truy vấn', 'truyền tải'];
    let s = '<svg viewBox="0 0 600 130" class="sv" role="img" aria-label="Các bước xử lý dữ liệu">';
    st.forEach((k, i) => {
      const x = 10 + i * 118;
      s += `<rect x="${x}" y="20" width="104" height="54" rx="10" class="sv-key"/><text x="${x + 52}" y="53" class="sv-txt">${k}</text><text x="${x + 52}" y="100" class="sv-muted">${vi[i]}</text>`;
      if (i < st.length - 1) s += `<line x1="${x + 106}" y1="47" x2="${x + 116}" y2="47" class="sv-axis"/>`;
    });
    return `${s}</svg>`;
  })();

  const slides = [
    S('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Quantitative Methods · QM-11</div>
      <h2>Introduction to<br>Financial Data Science</h2>
      <p>Dữ liệu → xử lý → học từ dữ liệu → ứng dụng đầu tư</p>
      <div class="sd-chips"><span>Big data</span><span>Machine learning</span><span>AI và NLP</span><span>Fintech</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Fintech: công nghệ gặp dữ liệu tài chính', `<div class="sd-cols3">
      <div class="sd-card"><div class="sd-n">1</div><b>Dữ liệu bùng nổ</b><p>Nhiều nguồn, nhiều dạng, sinh ra liên tục.</p></div>
      <div class="sd-card"><div class="sd-n">2</div><b>Lưu trữ, tính toán rẻ</b><p>Xử lý được tập dữ liệu khổng lồ.</p></div>
      <div class="sd-card acc"><div class="sd-n">3</div><b>Thuật toán mạnh</b><p>AI, machine learning rút thông tin từ dữ liệu phức tạp.</p></div></div>
      <p class="sd-note">LOS duy nhất, mức <b>describe</b>: hiểu khái niệm, phân loại, nhận diện ứng dụng. Không có tính toán.</p>`),

    S('Bốn chữ V của big data', `<div class="sd-grid4">
      <div class="sd-card acc"><b>Volume</b><p>Khối lượng cực lớn (TB, PB...)</p></div>
      <div class="sd-card acc"><b>Velocity</b><p>Sinh ra và xử lý rất nhanh, thời gian thực</p></div>
      <div class="sd-card acc"><b>Variety</b><p>Có cấu trúc, bán cấu trúc, phi cấu trúc (chữ, ảnh, giọng nói)</p></div>
      <div class="sd-card acc"><b>Veracity</b><p>Độ tin cậy, chất lượng; nhiễu, tin giả, tài khoản ảo</p></div></div>
      <p class="sd-note">Bẫy: "chất lượng / độ tin cậy" → <b>veracity</b>, không phải variety.</p>`),

    S('Dữ liệu thay thế đến từ đâu?', `<div class="sd-cols3">
      <div class="sd-card"><b>Cá nhân</b><p>Mạng xã hội, đánh giá sản phẩm, lượt tìm kiếm</p><small>Do con người tạo ra</small></div>
      <div class="sd-card"><b>Quy trình kinh doanh</b><p>Quẹt thẻ, máy quét mã vạch, chuỗi cung ứng</p><small>Corporate exhaust</small></div>
      <div class="sd-card"><b>Cảm biến</b><p>Ảnh vệ tinh, GPS, thiết bị thông minh</p><small>Internet of Things</small></div></div>
      <p class="sd-note">Ưu điểm: tín hiệu <b>sớm hơn</b> số liệu chính thức. Nhược điểm: thường phi cấu trúc, nhiễu, có vấn đề quyền riêng tư.</p>`),

    S('Khoa học dữ liệu: biến dữ liệu thô thành thông tin', `${pipe}
      <div class="sd-cols2"><div class="sd-card"><b>Curation quan trọng nhất</b><p>Dữ liệu sai hoặc thiếu → mô hình sai ("garbage in, garbage out").</p></div>
      <div class="sd-card acc"><b>Rồi trực quan hóa</b><p>Biểu đồ, bản đồ nhiệt, đám mây từ để con người đọc kết quả.</p></div></div>`),

    S('AI và ba nhóm machine learning', `<div class="sd-cols3">
      <div class="sd-card acc"><b>Supervised</b><p>Dữ liệu <b>có nhãn</b> (biết input và output)</p><small>Dự báo vỡ nợ, dự báo lợi suất</small></div>
      <div class="sd-card acc"><b>Unsupervised</b><p>Dữ liệu <b>không nhãn</b>, tự tìm cấu trúc</p><small>Gom cụm cổ phiếu theo hành vi giá</small></div>
      <div class="sd-card acc"><b>Deep learning</b><p>Mạng nơ-ron <b>nhiều lớp</b>, mẫu phức tạp</p><small>Ảnh vệ tinh, giọng nói, văn bản</small></div></div>
      <p class="sd-note">AI mô phỏng nhận thức con người. ML là nhánh của AI: học quy luật từ dữ liệu, không cần giả định phân phối đặt sẵn.</p>`),

    S('Underfitting và overfitting', `<div class="sd-cols3">
      <div>${fitPanel('under', 'Underfit: quá đơn giản')}</div>
      <div>${fitPanel('good', 'Vừa khớp quy luật')}</div>
      <div>${fitPanel('over', 'Overfit: học cả nhiễu')}</div></div>
      <p class="sd-note">Overfit khớp hoàn hảo dữ liệu huấn luyện nhưng dự báo <b>kém trên dữ liệu mới</b>. Underfit kém ở cả hai.</p>`),

    S('Chia dữ liệu và chọn độ phức tạp', `${split}
      <div class="sd-cols2 wide-left"><div>${errCurve}</div>
      <div><div class="sd-rule up">Training tốt + test tốt <b>Vừa đủ</b></div><div class="sd-rule down">Training rất tốt + test kém <b>Overfit</b></div><div class="sd-rule">Cả hai đều kém <b>Underfit</b></div></div></div>`),

    S('Văn bản và ngôn ngữ: text analytics, NLP', `<div class="sd-cols2">
      <div class="sd-card"><b>Text analytics</b><p>Phân tích chữ và giọng nói phi cấu trúc, tự động đọc hồ sơ, tìm mẫu từ ngữ.</p></div>
      <div class="sd-card acc"><b>NLP</b><p>Máy hiểu và diễn giải ngôn ngữ con người, kể cả ngữ cảnh.</p></div></div>
      <div class="sd-steps"><span>Sentiment: chấm điểm tích cực / tiêu cực của biên bản họp kết quả kinh doanh</span><span>Tuân thủ: quét email, chat để phát hiện gian lận, nội gián</span><span>So sánh báo cáo giữa các kỳ: mục rủi ro dài thêm bất thường</span></div>`),

    S('Ứng dụng trong đầu tư và fintech', `<div class="sd-grid4">
      <div class="sd-card"><b>Quản trị rủi ro</b><p>Big data + mô phỏng + ML, giám sát theo thời gian thực</p></div>
      <div class="sd-card"><b>Giao dịch thuật toán / HFT</b><p>Quy tắc định sẵn tối ưu thực thi; HFT khai thác sai lệch rất ngắn</p></div>
      <div class="sd-card"><b>Robo-advisor</b><p>Phân bổ tài sản tự động, chi phí thấp</p></div>
      <div class="sd-card"><b>Phân tích và DLT</b><p>Dữ liệu thay thế để ước doanh thu; blockchain ghi nhận giao dịch không trung gian</p></div></div>
      <p class="sd-note">Hạn chế: mô hình <b>hộp đen</b> khó giải thích, chất lượng dữ liệu, quyền riêng tư.</p>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>Volume, velocity, variety, veracity</span><span>Veracity = độ tin cậy dữ liệu</span>
      <span>3 nguồn thay thế: cá nhân, corporate exhaust, cảm biến</span><span>Capture → curation → storage → search → transfer</span>
      <span>Có nhãn → supervised; không nhãn → unsupervised</span><span>Deep learning = mạng nơ-ron nhiều lớp</span>
      <span>Tốt trong mẫu, kém ngoài mẫu = overfit</span><span>NLP: sentiment, tuân thủ, đọc hồ sơ</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 8 câu.</p>`),
  ];

  addDeck('QM-11', `Slide Financial Data Science - bản thiết kế riêng (${slides.length} slide)`, slides);
}());
