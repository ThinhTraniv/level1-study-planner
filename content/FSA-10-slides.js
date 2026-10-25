// Bộ slide tự thiết kế cho FSA-10 Financial Reporting Quality.
(function () {
  const L = window.LESSONS && window.LESSONS['FSA-10'];
  if (!L) return;
  const { slide, addDeck } = window.CFAH;
  const K = 'FSA-10 · Reporting Quality';
  const S = (title, body, opt = {}) => slide(title, body, Object.assign({ kicker: K }, opt));
  const fmt = (x, d = 2) => x.toFixed(d).replace('.', ',');
  const th = x => String(Math.round(x)).replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  // Phổ chất lượng: 6 bậc từ cao xuống thấp.
  const ladder = (() => {
    const rows = ['GAAP, hữu ích, lợi nhuận bền vững', 'GAAP, hữu ích, lợi nhuận yếu', 'GAAP, lựa chọn thiên lệch', 'GAAP, quản trị lợi nhuận', 'Vi phạm GAAP', 'Giao dịch giả'];
    let s = `<svg viewBox="0 0 600 300" class="sv" role="img" aria-label="Phổ chất lượng báo cáo tài chính 6 mức">`;
    rows.forEach((r, i) => {
      const w = 560 - i * 60, y = 12 + i * 46;
      s += `<rect x="20" y="${y}" width="${w}" height="38" rx="8" class="${i >= 4 ? 'sv-node down' : i === 0 ? 'sv-node up' : 'sv-node'}"/>`;
      s += `<text x="34" y="${y + 25}" class="sv-txt" text-anchor="start">${i + 1}. ${r}</text>`;
    });
    s += `<line x1="590" y1="14" x2="590" y2="286" class="sv-dash"/><text x="584" y="110" class="sv-muted" text-anchor="end">trong GAAP</text><text x="584" y="250" class="sv-t-down sv-txt" text-anchor="end">ngoài GAAP</text>`;
    return `${s}</svg>`;
  })();

  // EBIT theo năm khi khấu hao máy 1.000.000 trong 5 năm (thận trọng) và 8 năm (tích cực).
  const ebitPaths = (() => {
    const W = 600, H = 270, l = 70, r = 580, top = 20, b = 220, lo = 250000, hi = 520000;
    const X = y => l + ((y - 1) / 7) * (r - l), Y = v => b - ((v - lo) / (hi - lo)) * (b - top);
    const c = y => 500000 - (y <= 5 ? 200000 : 0), a = () => 500000 - 125000;
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv" role="img" aria-label="EBIT theo năm với hai lựa chọn thời gian khấu hao">`;
    [300000, 400000, 500000].forEach(v => { s += `<line x1="${l}" y1="${Y(v)}" x2="${r}" y2="${Y(v)}" class="sv-grid"/><text x="${l - 8}" y="${Y(v) + 5}" class="sv-muted" text-anchor="end">${th(v / 1000)}k</text>`; });
    for (let y = 1; y <= 8; y++) s += `<text x="${X(y)}" y="${b + 24}" class="sv-muted">${y}</text>`;
    s += `<line x1="${l}" y1="${b}" x2="${r}" y2="${b}" class="sv-axis"/>`;
    s += `<polyline points="${[1, 2, 3, 4, 5, 6, 7, 8].map(y => `${X(y).toFixed(1)},${Y(c(Math.floor(y))).toFixed(1)}`).join(' ')}" class="sv-down" fill="none"/>`;
    s += `<polyline points="${[1, 8].map(y => `${X(y).toFixed(1)},${Y(a()).toFixed(1)}`).join(' ')}" class="sv-up" fill="none"/>`;
    s += `<text x="${X(1.2)}" y="${Y(c(1)) + 22}" class="sv-txt sv-t-down" text-anchor="start">5 năm: EBIT 300k rồi 500k</text>`;
    s += `<text x="${X(1.2)}" y="${Y(a()) - 10}" class="sv-txt sv-t-up" text-anchor="start">8 năm: EBIT 375k đều</text>`;
    s += `<text x="${(l + r) / 2}" y="${H - 4}" class="sv-muted">Năm (tổng EBIT 8 năm như nhau: 3.000k)</text>`;
    return `${s}</svg>`;
  })();

  // Tam giác gian lận.
  const triangle = `<svg viewBox="0 0 600 270" class="sv big" role="img" aria-label="Tam giác gian lận">
    <polygon points="300,30 90,230 510,230" class="sv-panel"/>
    <circle cx="300" cy="30" r="9" class="sv-dot"/><circle cx="90" cy="230" r="9" class="sv-dot"/><circle cx="510" cy="230" r="9" class="sv-dot"/>
    <text x="300" y="70" class="sv-txt">Cơ hội</text><text x="300" y="94" class="sv-muted">kiểm soát yếu</text>
    <text x="150" y="215" class="sv-txt" text-anchor="start">Động cơ</text><text x="150" y="190" class="sv-muted" text-anchor="start">áp lực, thưởng</text>
    <text x="450" y="215" class="sv-txt" text-anchor="end">Hợp lý hóa</text><text x="450" y="190" class="sv-muted" text-anchor="end">"chỉ tạm thời"</text>
    <text x="300" y="262" class="sv-muted">Thường cần đủ cả ba yếu tố</text></svg>`;

  // DSO và CFO/lợi nhuận ròng qua 3 năm.
  const rev = [1000, 1100, 1250], ar = [100, 130, 190], ni = [100, 120, 145], cfo = [95, 80, 60];
  const dso = ar.map((a, i) => (a / rev[i]) * 365), cr = cfo.map((c, i) => c / ni[i]);
  const warn = `<div class="sd-tbl grid">
    <div class="head"><span>Năm</span><span>1</span><span>2</span><span>3</span></div>
    <div><span>Doanh thu</span>${rev.map(v => `<span>${th(v)}</span>`).join('')}</div>
    <div><span>Lợi nhuận ròng</span>${ni.map(v => `<span>${v}</span>`).join('')}</div>
    <div><span>CFO</span>${cfo.map(v => `<span>${v}</span>`).join('')}</div>
    <div><span><b>DSO (ngày)</b></span>${dso.map(v => `<span><b>${fmt(v, 1)}</b></span>`).join('')}</div>
    <div><span><b>CFO / lợi nhuận ròng</b></span>${cr.map(v => `<span><b>${fmt(v)}</b></span>`).join('')}</div></div>`;

  // Cầu nối non-GAAP: 150 → 260.
  const bridge = (() => {
    const rows = [['GAAP operating income', 150], ['+ Tái cơ cấu (3 năm liền)', 30], ['+ Thù lao cổ phiếu', 25], ['+ Khấu hao vô hình', 15], ['+ Suy giảm giá trị', 40], ['= Adjusted', 260]];
    return `<div class="sd-bars">${rows.map(([lab, v]) => `<div class="sd-bar"><span class="sd-bar-l">${lab}</span><span class="sd-bar-t"><i style="width:${(v / 260) * 100}%"></i></span><b>${v}</b></div>`).join('')}</div>`;
  })();

  const slides = [
    S('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Financial Statement Analysis · FSA-10</div>
      <h2>Financial Reporting Quality</h2>
      <p>Trung thực hay đẹp? · Động cơ · Dấu hiệu cảnh báo</p>
      <div class="sd-chips"><span>LOS 1-3 · Chất lượng và phổ</span><span>LOS 4-5 · Động cơ và kỷ luật</span><span>LOS 6-7 · Trình bày và lựa chọn</span><span>LOS 8 · Phát hiện</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Hai câu hỏi khác nhau', `<div class="sd-cols2">
      <div class="sd-card"><b>Chất lượng báo cáo</b><p>Báo cáo có <b>phản ánh trung thực</b> thực tế không?</p><small>Thích hợp + trình bày trung thực (đầy đủ, trung lập, không sai sót)</small></div>
      <div class="sd-card acc"><b>Chất lượng kết quả</b><p>Thực tế đó có <b>tốt và bền vững</b> không?</p><small>Lợi nhuận lặp lại được và đủ lớn so với vốn</small></div></div>
      <p class="sd-note">Tuân thủ GAAP là cần, nhưng <b>chưa đủ</b> cho chất lượng báo cáo cao.</p>`),

    S('Ma trận chất lượng', `<div class="sd-tbl grid">
      <div class="head"><span></span><span>Kết quả tốt</span><span>Kết quả yếu</span></div>
      <div><span><b>Báo cáo tốt</b></span><span>Lý tưởng</span><span>Trung thực về một năm tệ</span></div>
      <div><span><b>Báo cáo kém</b></span><span>Không biết</span><span>Không biết</span></div></div>
      <p class="sd-note">Báo cáo kém chất lượng → <b>không đánh giá được</b> chất lượng kết quả, vì con số đã bị bóp méo.</p>`),

    S('Ba mặt của chất lượng kết quả', `<div class="sd-cols3">
      <div class="sd-card"><b>Lợi nhuận</b><p>Từ hoạt động cốt lõi, lặp lại được</p><small>Không phải lãi bán tài sản, hoàn nhập dự phòng</small></div>
      <div class="sd-card acc"><b>Dòng tiền</b><p>CFO từ kinh doanh thật</p><small>Không phải từ trì hoãn trả nợ, bán phải thu</small></div>
      <div class="sd-card"><b>Bảng cân đối</b><p>Đo lường hợp lý, đủ nợ</p><small>Không có nợ ngoài bảng, tài sản không thổi phồng</small></div></div>`),

    S('Phổ chất lượng: 6 mức', `<div class="sd-cols2 wide-left"><div>${ladder}</div><div>
      <p class="sd-note">Mức 1-2: báo cáo hữu ích, khác nhau ở <b>chất lượng lợi nhuận</b>.</p>
      <p class="sd-note">Mức 3-4 vẫn <b>tuân thủ GAAP</b> nhưng thiên lệch hoặc quản trị lợi nhuận.</p>
      <p class="sd-note">Mức 5-6 vi phạm GAAP. Đáy phổ là <b>giao dịch giả</b>.</p></div></div>`),

    S('Thận trọng và tích cực', `<div class="sd-cols2 wide-left"><div>${ebitPaths}</div><div>
      <div class="sd-rule down">Thận trọng <b>nay thấp, mai cao</b></div><div class="sd-rule up">Tích cực <b>nay cao, mai thấp</b></div>
      <p class="sd-note">Cùng máy 1.000.000: khấu hao 5 năm hay 8 năm chỉ đổi <b>thời điểm</b> ghi lợi nhuận.</p></div></div>`),

    S('Thận trọng hôm nay, đẹp ngày mai', `<div class="sd-cols2">
      <div class="sd-card"><b>Cookie jar</b><p>Năm tốt trích dự phòng thừa</p><p>Năm xấu hoàn nhập</p><small>→ lợi nhuận phẳng giả tạo</small></div>
      <div class="sd-card acc"><b>Big bath</b><p>Năm đã lỗ: ghi giảm thật lớn</p><p>Thường khi đổi CEO</p><small>→ các năm sau trông tốt hơn</small></div></div>
      <div class="sd-rule down">Thận trọng có chủ đích <b>vẫn là thiên lệch</b></div>`),

    S('Vì sao báo cáo kém chất lượng?', `<div class="sd-grid4">
      <div class="sd-card acc"><b>Đạt kỳ vọng</b><p>Dự báo của chuyên gia, kế hoạch, năm trước</p></div>
      <div class="sd-card"><b>Thù lao và sự nghiệp</b><p>Thưởng theo lợi nhuận, uy tín CEO</p></div>
      <div class="sd-card"><b>Điều khoản vay</b><p>Tránh vi phạm covenant khi đòn bẩy cao</p></div>
      <div class="sd-card"><b>Niềm tin</b><p>Nhà đầu tư, khách hàng, nhà cung cấp, cơ quan quản lý</p></div></div>`),

    S('Tam giác gian lận', `<div class="sd-cols2 wide-left"><div>${triangle}</div><div>
      <p class="sd-note"><b>Cơ hội</b>: kiểm soát nội bộ yếu, HĐQT giám sát kém, chuẩn mực linh hoạt, chế tài nhẹ.</p>
      <p class="sd-note"><b>Động cơ</b>: đạt dự báo, thưởng, covenant.</p>
      <p class="sd-note"><b>Hợp lý hóa</b>: "quý sau sẽ bù lại".</p></div></div>`),

    S('Cơ chế kỷ luật', `<div class="sd-grid4">
      <div class="sd-card"><b>Thị trường</b><p>Báo cáo kém → chi phí vốn tăng</p></div>
      <div class="sd-card"><b>Cơ quan quản lý</b><p>Đăng ký, công bố bắt buộc, rà soát, xử phạt</p></div>
      <div class="sd-card acc"><b>Kiểm toán độc lập</b><p>Ý kiến về tính trình bày hợp lý</p></div>
      <div class="sd-card"><b>Hợp đồng tư nhân</b><p>Chủ nợ, nhà đầu tư tự kiểm tra</p></div></div>
      <p class="sd-note">Hồ sơ SEC: 10-K, 10-Q, 8-K, proxy (DEF 14A), 20-F, Forms 3/4/5, 144.</p>`),

    S('Giới hạn của kiểm toán', `<div class="sd-big">Đảm bảo hợp lý ≠ đảm bảo tuyệt đối</div>
      <div class="sd-steps"><span>Kiểm toán dựa trên <b>chọn mẫu</b></span><span>Kiểm toán viên do <b>công ty trả phí</b></span><span>Không thiết kế để phát hiện <b>mọi gian lận</b></span></div>
      <div class="sd-rule down">Ý kiến "sạch" <b>không</b> chứng minh không có gian lận</div>`),

    S('Non-GAAP: 150 thành 260', `${bridge}
      <p class="sd-note">Adjusted gấp <b>1,73 lần</b> GAAP. Tái cơ cấu lặp lại và thù lao cổ phiếu là chi phí <b>thật</b>. SEC: GAAP nổi bật ngang bằng + bảng đối chiếu.</p>`),

    S('Lựa chọn làm đẹp lợi nhuận', `<div class="sd-tbl grid">
      <div class="head"><span>Lựa chọn</span><span>Cách làm tích cực</span></div>
      <div><span>Doanh thu</span><span>FOB shipping point, bill-and-hold, nhồi kênh</span></div>
      <div><span>Dự phòng nợ xấu</span><span>Trích thấp</span></div>
      <div><span>Khấu hao</span><span>Đời dài, giá trị thanh lý cao</span></div>
      <div><span>Hàng tồn kho</span><span>Hoãn ghi giảm giá trị</span></div>
      <div><span>Chi phí</span><span>Vốn hóa thay vì ghi chi phí</span></div>
      <div><span>Thuế hoãn lại</span><span>Giảm valuation allowance</span></div></div>`),

    S('Làm đẹp dòng tiền hoạt động', `<div class="sd-check">
      <span>Kéo dài trả nhà cung cấp qua ngày khóa sổ</span><span>Bán, chiết khấu khoản phải thu</span>
      <span>IFRS: lãi vay đã trả vào dòng tiền tài chính</span><span>Vốn hóa chi phí: chi từ CFO sang CFI</span></div>
      <p class="sd-note">Các thủ thuật này thường <b>không bền</b>: phải trả kéo dài rồi cũng phải trả, kỳ sau CFO giảm lại.</p>`),

    S('Dấu hiệu: lợi nhuận tăng, tiền giảm', `${warn}
      <p class="sd-note">Phải thu tăng 30% rồi 46% khi doanh thu chỉ tăng 10% rồi 14%. Nghi vấn: <b>ghi nhận doanh thu sớm</b>.</p>`),

    S('Danh sách cờ đỏ', `<div class="sd-check">
      <span>DSO tăng, phải thu tăng nhanh hơn doanh thu</span><span>Tồn kho tăng nhanh hơn doanh thu</span>
      <span>CFO &lt; lợi nhuận ròng nhiều năm</span><span>Doanh thu dồn vào quý 4</span>
      <span>Đời khấu hao dài hơn đối thủ</span><span>Chi phí thường xuyên gọi là "bất thường"</span>
      <span>Đổi kiểm toán viên, CFO nghỉ việc</span><span>Luôn vừa khít dự báo</span></div>
      <p class="sd-note">Công cụ: Beneish M-score (8 biến), cảnh báo khi M &gt; -1,78.</p>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>Báo cáo tốt ≠ kết quả tốt</span><span>Báo cáo kém → không đánh giá được kết quả</span>
      <span>Mức 1-4 trong GAAP, 5-6 ngoài GAAP</span><span>Thận trọng: nay thấp, mai cao</span>
      <span>Cơ hội, động cơ, hợp lý hóa</span><span>Kiểm toán: đảm bảo hợp lý</span>
      <span>Non-GAAP: đối chiếu, không nổi bật hơn</span><span>So lợi nhuận với CFO</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 10 câu tình huống.</p>`),
  ];

  addDeck('FSA-10', `Slide Reporting Quality - bản thiết kế riêng (${slides.length} slide)`, slides);
}());
