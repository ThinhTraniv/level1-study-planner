// Bộ slide tự thiết kế cho FSA-03 Analyzing Balance Sheets.
(function () {
  const L = window.LESSONS && window.LESSONS['FSA-03'];
  if (!L) return;
  const { frac, slide, addDeck } = window.CFAH;
  const K = 'FSA-03 · Analyzing Balance Sheets';
  const S = (title, body, opt = {}) => slide(title, body, Object.assign({ kicker: K }, opt));
  const fmt = (x, d = 2) => x.toFixed(d).replace('.', ',');

  // Cầu thang lợi thế thương mại: sổ sách 300 + 40 + 60 = 400, giá mua 500.
  const gwChart = (() => {
    const W = 600, H = 260, b = 215, tp = 20, max = 500;
    const Y = v => b - (v / max) * (b - tp);
    const steps = [['Sổ sách', 0, 300, ''], ['+ Nhà xưởng', 300, 340, 'up'], ['+ DS khách hàng', 340, 400, 'up'], ['Lợi thế TM', 400, 500, 'down'], ['Giá mua', 0, 500, '']];
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv" role="img" aria-label="Tính lợi thế thương mại">`;
    s += `<line x1="30" y1="${b}" x2="580" y2="${b}" class="sv-axis"/>`;
    steps.forEach(([lab, lo, hi, cls], i) => {
      const x = 45 + i * 108;
      s += `<rect x="${x}" y="${Y(hi)}" width="80" height="${Y(lo) - Y(hi)}" rx="4" class="${cls ? `sv-node ${cls}` : 'sv-panel'}"/>`;
      s += `<text x="${x + 40}" y="${Y(hi) - 8}" class="sv-txt">${hi - lo}</text><text x="${x + 40}" y="${b + 24}" class="sv-muted" style="font-size:15px">${lab}</text>`;
    });
    s += `<line x1="45" y1="${Y(400)}" x2="565" y2="${Y(400)}" class="sv-dash"/><text x="565" y="${Y(400) + 20}" class="sv-muted" text-anchor="end">TS thuần xác định được 400</text>`;
    return `${s}</svg>`;
  })();

  // Giá trị ghi sổ trái phiếu phát hành dưới mệnh giá: 5 năm, coupon 5%, thị trường 6%.
  const bondPath = (() => {
    const W = 600, H = 250, l = 70, r = 570, tp = 20, b = 200, lo = 950, hi = 1005;
    const X = i => l + (i / 5) * (r - l), Y = v => b - ((v - lo) / (hi - lo)) * (b - tp);
    let cv = 0; for (let k = 1; k <= 5; k++) cv += 50 / 1.06 ** k; cv += 1000 / 1.06 ** 5;
    const pts = [cv];
    for (let k = 1; k <= 5; k++) pts.push(pts[k - 1] * 1.06 - 50);
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv" role="img" aria-label="Giá trị ghi sổ trái phiếu tăng dần về mệnh giá">`;
    [960, 980, 1000].forEach(v => { s += `<line x1="${l}" y1="${Y(v)}" x2="${r}" y2="${Y(v)}" class="sv-grid"/><text x="${l - 10}" y="${Y(v) + 5}" class="sv-muted" text-anchor="end">${v === 1000 ? '1.000' : v}</text>`; });
    s += `<line x1="${l}" y1="${b}" x2="${r}" y2="${b}" class="sv-axis"/>`;
    s += `<polyline points="${pts.map((v, i) => `${X(i).toFixed(1)},${Y(v).toFixed(1)}`).join(' ')}" class="sv-curve"/>`;
    pts.forEach((v, i) => { s += `<circle cx="${X(i)}" cy="${Y(v)}" r="5" class="sv-dot"/><text x="${X(i)}" y="${b + 24}" class="sv-muted">${i}</text>`; });
    s += `<text x="${X(0) + 8}" y="${Y(pts[0]) + 22}" class="sv-txt sv-t-pv" text-anchor="start">${fmt(pts[0])}</text>`;
    s += `<text x="${X(1) + 8}" y="${Y(pts[1]) + 22}" class="sv-txt" text-anchor="start">${fmt(pts[1])}</text>`;
    s += `<text x="${(l + r) / 2}" y="${H - 4}" class="sv-muted">Năm · lãi vay = giá trị đầu kỳ × 6%, coupon 50</text>`;
    return `${s}</svg>`;
  })();

  const bars = (rows, max) => `<div class="sd-bars">${rows.map(([lab, v]) => `<div class="sd-bar"><span class="sd-bar-l">${lab}</span><span class="sd-bar-t"><i style="width:${(v / max) * 100}%"></i></span><b>${v}%</b></div>`).join('')}</div>`;

  const slides = [
    S('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Financial Statement Analysis · FSA-03</div>
      <h2>Analyzing<br>Balance Sheets</h2>
      <p>Đo bằng thước nào, điều gì không có trên bảng?</p>
      <div class="sd-chips"><span>LOS 1 · Vô hình</span><span>LOS 2 · Lợi thế thương mại</span><span>LOS 3 · Công cụ tài chính</span><span>LOS 4 · Nợ dài hạn</span><span>LOS 5 · Common-size, tỷ số</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Một bảng, nhiều thước đo', `<div class="sd-tbl grid">
      <div class="head"><span>Cơ sở</span><span>Ví dụ</span></div>
      <div><span>Giá gốc - khấu hao</span><span>Nhà xưởng, vô hình mua về</span></div>
      <div><span>Giá trị phân bổ</span><span>Trái phiếu giữ đến đáo hạn, nợ vay</span></div>
      <div><span>Giá trị hợp lý</span><span>Chứng khoán kinh doanh, phái sinh</span></div>
      <div><span>Không ghi nhận</span><span>Thương hiệu tự xây, đội ngũ</span></div></div>
      <p class="sd-note">Tổng tài sản <b>không phải</b> giá trị doanh nghiệp.</p>`),

    S('Tài sản vô hình: nguồn gốc quyết định', `<div class="sd-cols3">
      <div class="sd-card"><b>Mua riêng</b><p>Ghi theo giá mua</p></div>
      <div class="sd-card"><b>Qua hợp nhất</b><p>Giá trị hợp lý, tách khỏi lợi thế thương mại</p></div>
      <div class="sd-card acc"><b>Tự tạo</b><p>Phần lớn ghi chi phí</p><small>IFRS: vốn hóa phát triển đủ điều kiện</small></div></div>
      <p class="sd-note">Xác định được: tách riêng được hoặc từ quyền hợp đồng, pháp lý.</p>`),

    S('Hai dự án R&D theo IFRS', `<div class="sd-tbl grid">
      <div class="head"><span>Triệu EUR</span><span>DA 1: nghiên cứu</span><span>DA 2: phát triển</span></div>
      <div><span>Vật liệu + nhân công + SX chung</span><span>270 chi phí</span><span>210 vốn hóa</span></div>
      <div><span>Quản lý chung</span><span>30 chi phí</span><span>30 chi phí</span></div>
      <div><span>Tổng</span><span>300 chi phí</span><span>210 TS + 30 chi phí</span></div></div>
      <p class="sd-note">Theo US GAAP: ghi chi phí cả <b>540</b>.</p>`),

    S('Đo lường sau ghi nhận', `<div class="sd-cols2">
      <div class="sd-card"><b>Thời gian hữu hạn</b><p>Phân bổ, thường đường thẳng</p><p>Bằng sáng chế 120 / 10 năm = 12/năm</p></div>
      <div class="sd-card acc"><b>Không xác định</b><p>Không phân bổ</p><p>Kiểm tra suy giảm ít nhất hằng năm</p></div></div>
      <div class="sd-cols2"><div class="sd-rule up">IFRS: giá gốc hoặc đánh giá lại (cần thị trường hoạt động)</div><div class="sd-rule down">US GAAP: chỉ giá gốc</div></div>`),

    S('Lợi thế thương mại = giá mua - TS thuần xác định được', `<div class="sd-cols2 wide-left"><div>${gwChart}</div><div><div class="sd-rule down">Bẫy: 500 - 300 = 200 dùng giá trị sổ sách</div><div class="sd-rule">Tự tạo: không ghi nhận</div><div class="sd-rule up">Mua rẻ: ghi lãi ngay</div></div></div>`),

    S('Suy giảm lợi thế thương mại', `<div class="sd-tbl grid">
      <div class="head"><span></span><span>IFRS</span><span>US GAAP</span></div>
      <div><span>Cấp</span><span>CGU</span><span>Reporting unit</span></div>
      <div><span>So với</span><span>Giá trị thu hồi = max(FV - chi phí bán, giá trị sử dụng)</span><span>Giá trị hợp lý của đơn vị</span></div>
      <div><span>Lỗ</span><span>Trừ lợi thế TM trước, rồi TS khác</span><span>Tối đa bằng lợi thế TM</span></div>
      <div><span>Hoàn nhập</span><span>Không</span><span>Không</span></div></div>`),

    S('Ví dụ: cùng đơn vị, hai con số', `<div class="sd-cols2">
      <div class="sd-card"><b>US GAAP</b><p>Ghi sổ 900, giá trị hợp lý 840</p><p>Lỗ = <b>60</b></p></div>
      <div class="sd-card acc"><b>IFRS</b><p>max(820, 850) = 850</p><p>Lỗ = <b>50</b></p></div></div>
      <p class="sd-note">Lỗ suy giảm: giảm lợi nhuận và tài sản, <b>không</b> ảnh hưởng dòng tiền. Thường là dấu hiệu đã mua đắt.</p>`),

    S('Tài sản tài chính theo IFRS 9', `<div class="sd-tbl grid">
      <div class="head"><span>Nhóm</span><span>Khi nào</span><span>Chưa thực hiện</span></div>
      <div><span>Amortized cost</span><span>Nợ, giữ để thu dòng tiền</span><span>Không ghi</span></div>
      <div><span>FVOCI</span><span>Nợ, thu và bán; cổ phiếu chọn không hủy ngang</span><span>OCI</span></div>
      <div><span>FVPL</span><span>Còn lại: kinh doanh, phái sinh</span><span>Lợi nhuận</span></div></div>
      <p class="sd-note">Cổ phiếu ở FVOCI: khi bán <b>không</b> chuyển lãi lỗ sang lợi nhuận.</p>`),

    S('US GAAP: ba nhóm cho chứng khoán nợ', `<div class="sd-cols3">
      <div class="sd-card"><b>Held-to-maturity</b><p>Giá trị phân bổ</p><small>Bỏ qua giá thị trường</small></div>
      <div class="sd-card"><b>Available-for-sale</b><p>Giá trị hợp lý</p><small>Chưa thực hiện vào OCI</small></div>
      <div class="sd-card acc"><b>Trading</b><p>Giá trị hợp lý</p><small>Chưa thực hiện vào lợi nhuận</small></div></div>
      <p class="sd-note">Cổ phiếu (không ảnh hưởng đáng kể): giá trị hợp lý qua <b>lợi nhuận</b>. Lãi, cổ tức, lãi lỗ đã thực hiện: luôn vào lợi nhuận.</p>`),

    S('Một trái phiếu, ba kết quả', `<div class="sd-tbl grid">
      <div class="head"><span>Mua 1.000, coupon 5%, cuối năm 1.030</span><span>HTM</span><span>FVOCI</span><span>FVPL</span></div>
      <div><span>Trên bảng cân đối</span><span>1.000</span><span>1.030</span><span>1.030</span></div>
      <div><span>Lợi nhuận</span><span>+50</span><span>+50</span><span>+80</span></div>
      <div><span>OCI</span><span>0</span><span>+30</span><span>0</span></div>
      <div><span>Vốn chủ</span><span>+50</span><span>+80</span><span>+80</span></div></div>`),

    S('Thứ bậc giá trị hợp lý', `<div class="sd-steps"><span>Cấp 1: giá niêm yết trên thị trường hoạt động</span><span>Cấp 2: dữ liệu quan sát được khác (lãi suất, giá tương tự)</span><span>Cấp 3: dữ liệu không quan sát được, mô hình nội bộ</span></div>
      <p class="sd-note">Cấp 3 càng nhiều, xét đoán càng lớn. Phái sinh: FV qua lợi nhuận, trừ khi dùng hedge accounting.</p>`),

    S('Nợ dài hạn: trái phiếu dưới mệnh giá', `<div class="sd-cols2 wide-left"><div>${bondPath}</div>
      <div><div class="sd-rule">Giá phát hành 957,88</div><div class="sd-rule up">Lãi vay năm 1 = 57,47 &gt; coupon 50</div><div class="sd-rule">Thuê: nợ = TS quyền sử dụng = 272,32</div><p class="sd-note">Đọc thêm: lịch đáo hạn, covenant, giá trị hợp lý của nợ.</p></div></div>`),

    S('Common-size: bán lẻ A và phần mềm B', `<div class="sd-cols2">
      <div><p class="sd-cap">A (tổng tài sản 1.000)</p>${bars([['Tồn kho', 25], ['Nhà xưởng', 40], ['Vô hình, LTTM', 20], ['Vốn chủ', 40]], 60)}</div>
      <div><p class="sd-cap">B (tổng tài sản 2.000)</p>${bars([['Tồn kho', 1], ['Nhà xưởng', 4], ['Vô hình, LTTM', 60], ['Vốn chủ', 60]], 60)}</div></div>
      <p class="sd-note">A thâm dụng tài sản hữu hình và nợ; B lớn lên nhờ <b>mua lại</b>.</p>`),

    S('Tỷ số thanh khoản và khả năng thanh toán', `<div class="sd-tbl grid">
      <div class="head"><span>Tỷ số</span><span>A</span><span>B</span></div>
      <div><span>Current</span><span>1,60</span><span>1,80</span></div>
      <div><span>Quick</span><span>0,60</span><span>1,75</span></div>
      <div><span>Debt-to-capital</span><span>51,2%</span><span>25,0%</span></div>
      <div><span>Debt-to-equity</span><span>1,05</span><span>0,33</span></div>
      <div><span>Financial leverage</span><span>2,50</span><span>1,67</span></div></div>
      <p class="sd-note">Debt = nợ <b>chịu lãi</b>. Debt-to-capital = ${frac('Nợ vay', 'Nợ vay + Vốn chủ')}.</p>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>Vô hình tự tạo: phần lớn ghi chi phí</span><span>Đánh giá lại vô hình: chỉ IFRS</span>
      <span>Không xác định thời hạn: không phân bổ</span><span>LTTM: trừ giá trị <b>hợp lý</b> TS thuần</span>
      <span>Suy giảm LTTM: không hoàn nhập</span><span>FVOCI: chưa thực hiện vào OCI</span>
      <span>Dưới mệnh giá: lãi vay &gt; coupon</span><span>Tỷ số nợ: chỉ nợ chịu lãi</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 10 câu, mục tiêu ≥ 7 câu đúng.</p>`),
  ];

  addDeck('FSA-03', `Slide Balance Sheets - bản thiết kế riêng (${slides.length} slide)`, slides);
}());
