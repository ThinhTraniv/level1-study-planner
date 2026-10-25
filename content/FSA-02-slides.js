// Bộ slide tự thiết kế cho FSA-02 Analyzing Income Statements.
(function () {
  const L = window.LESSONS && window.LESSONS['FSA-02'];
  if (!L) return;
  const { frac, slide, addDeck } = window.CFAH;
  const K = 'FSA-02 · Analyzing Income Statements';
  const S = (title, body, opt = {}) => slide(title, body, Object.assign({ kicker: K }, opt));
  const fmt = (x, d = 2) => x.toFixed(d).replace('.', ',');

  // Tiến độ hợp đồng dài hạn: doanh thu theo năm (giá 10, tổng chi phí 8, chi 4 rồi 2).
  const ltcChart = (() => {
    const W = 600, H = 200, x0 = 40, x1 = 560, price = 10;
    const X = v => x0 + (v / price) * (x1 - x0);
    const y1 = 5, y2 = 7.5;
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv" role="img" aria-label="Doanh thu theo tiến độ">`;
    s += `<rect x="${X(0)}" y="40" width="${X(price) - X(0)}" height="44" rx="6" class="sv-panel"/>`;
    s += `<rect x="${X(0)}" y="40" width="${X(y1) - X(0)}" height="44" rx="6" class="sv-key"/><text x="${(X(0) + X(y1)) / 2}" y="68" class="sv-txt">Năm 1: 5 (50%)</text>`;
    s += `<rect x="${X(y1)}" y="40" width="${X(y2) - X(y1)}" height="44" rx="6" class="sv-node up"/><text x="${(X(y1) + X(y2)) / 2}" y="68" class="sv-txt">Năm 2: 2,5</text>`;
    s += `<text x="${(X(y2) + X(price)) / 2}" y="68" class="sv-muted">còn 2,5</text>`;
    [0, 2.5, 5, 7.5, 10].forEach(v => { s += `<text x="${X(v)}" y="110" class="sv-muted">${fmt(v, v % 1 ? 1 : 0)}</text>`; });
    s += `<text x="${X(5)}" y="150" class="sv-txt">Tiến độ lũy kế: 4/8 = 50% → 6/8 = 75%</text>`;
    s += `<text x="${X(5)}" y="182" class="sv-muted">Giá hợp đồng 10 triệu · tổng chi phí ước tính 8 triệu</text>`;
    return `${s}</svg>`;
  })();

  // Lợi nhuận theo năm: ghi chi phí ngay vs vốn hóa.
  const capChart = (() => {
    const W = 600, H = 260, l = 60, r = 570, tp = 20, b = 210;
    const data = [[200, 400], [500, 400], [500, 400]];
    const Y = v => b - (v / 600) * (b - tp);
    const bw = 60;
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv" role="img" aria-label="Lợi nhuận ghi chi phí và vốn hóa">`;
    [0, 200, 400, 600].forEach(v => { s += `<line x1="${l}" y1="${Y(v)}" x2="${r}" y2="${Y(v)}" class="sv-grid"/><text x="${l - 10}" y="${Y(v) + 5}" class="sv-muted" text-anchor="end">${v}</text>`; });
    data.forEach((d, i) => {
      const cx = l + 90 + i * 170;
      s += `<rect x="${cx - bw - 4}" y="${Y(d[0])}" width="${bw}" height="${b - Y(d[0])}" class="sv-node down"/><text x="${cx - bw / 2 - 4}" y="${Y(d[0]) - 8}" class="sv-txt sv-t-down">${d[0]}</text>`;
      s += `<rect x="${cx + 4}" y="${Y(d[1])}" width="${bw}" height="${b - Y(d[1])}" class="sv-node up"/><text x="${cx + bw / 2 + 4}" y="${Y(d[1]) - 8}" class="sv-txt sv-t-up">${d[1]}</text>`;
      s += `<text x="${cx}" y="${b + 24}" class="sv-muted">Năm ${i + 1}</text>`;
    });
    s += `<line x1="${l}" y1="${b}" x2="${r}" y2="${b}" class="sv-axis"/>`;
    s += `<text x="${l + 4}" y="${H - 6}" class="sv-txt sv-t-down" text-anchor="start">Ghi chi phí ngay</text><text x="${r}" y="${H - 6}" class="sv-txt sv-t-up" text-anchor="end">Vốn hóa, khấu hao 100/năm</text>`;
    return `${s}</svg>`;
  })();

  const bars = (rows, max) => `<div class="sd-bars">${rows.map(([lab, v]) => `<div class="sd-bar"><span class="sd-bar-l">${lab}</span><span class="sd-bar-t"><i style="width:${(v / max) * 100}%"></i></span><b>${fmt(v, 1)}%</b></div>`).join('')}</div>`;

  const slides = [
    S('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Financial Statement Analysis · FSA-02</div>
      <h2>Analyzing<br>Income Statements</h2>
      <p>Lợi nhuận này có bền vững và có so sánh được không?</p>
      <div class="sd-chips"><span>LOS 1 · Doanh thu</span><span>LOS 2 · Chi phí</span><span>LOS 3 · Không thường xuyên</span><span>LOS 4 · EPS</span><span>LOS 5 · Common-size</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Dồn tích: doanh thu không chờ tiền', `<div class="sd-cols2">
      <div class="sd-card"><b>Bán 100, khách trả 80</b><p>Doanh thu +100</p><p>Tiền +80 · Phải thu +20</p></div>
      <div class="sd-card acc"><b>Nhận trước 100, làm xong 40%</b><p>Doanh thu +40</p><p>Tiền +100 · Doanh thu chưa thực hiện +60 (nợ phải trả)</p></div></div>
      <p class="sd-note">Ghi doanh thu khi <b>thực hiện nghĩa vụ</b>, không phải khi thu tiền.</p>`),

    S('Mô hình 5 bước (IFRS 15 = ASC 606)', `<div class="sd-steps"><span>① Hợp đồng: được chấp thuận, thu tiền có thể xảy ra</span><span>② Nghĩa vụ thực hiện: mỗi thứ riêng biệt</span><span>③ Giá giao dịch: kể cả phần biến đổi, có giới hạn</span><span>④ Phân bổ theo giá bán riêng lẻ</span><span>⑤ Ghi khi chuyển quyền kiểm soát</span></div>
      <p class="sd-note">Bán 1.000 SP giá 10, dự kiến trả lại 5%: doanh thu <b>9.500</b>, nợ hoàn tiền 500.</p>`),

    S('Bán kèm: chia phần giảm giá', `<div class="sd-cols2">
      <div class="sd-card"><b>Giá riêng lẻ</b><p>Điện thoại 1.000 · Bảo hành 2 năm 200</p><p>Khách trả cả gói <b>1.100</b></p></div>
      <div class="sd-card acc"><b>Phân bổ 1.000 : 200</b><p>Điện thoại 916,67 · ghi ngay</p><p>Bảo hành 183,33 · ghi 2 năm</p><p>Năm 1: <b>1.008,33</b></p></div></div>`),

    S('Bên chính hay đại lý?', `<div class="sd-tbl grid">
      <div class="head"><span>Vé 10.000, hoa hồng 1.000</span><span>Đại lý (thuần)</span><span>Bên chính (gộp)</span></div>
      <div><span>Doanh thu</span><span>1.000</span><span>10.000</span></div>
      <div><span>Chi phí</span><span>0</span><span>9.000</span></div>
      <div><span>Lợi nhuận gộp</span><span>1.000</span><span>1.000</span></div>
      <div><span>Biên gộp</span><span>100%</span><span>10%</span></div></div>
      <p class="sd-note">Câu hỏi: có <b>kiểm soát</b> dịch vụ trước khi giao không? Rủi ro tồn kho, quyền định giá.</p>`),

    S('Hợp đồng dài hạn: theo tiến độ', `${ltcChart}
      <p class="sd-note">Ước tính đổi: tính lại tiến độ lũy kế rồi trừ phần đã ghi. Dự kiến lỗ: ghi toàn bộ lỗ ngay.</p>`),

    S('Nhượng quyền, phần mềm, bill-and-hold', `<div class="sd-cols3">
      <div class="sd-card"><b>Nhượng quyền</b><p>Phí ban đầu: chưa thực hiện, phân bổ theo thời hạn</p><p>Phí bản quyền: khi doanh số phát sinh</p></div>
      <div class="sd-card"><b>Phần mềm</b><p>Kèm cập nhật liên tục, SaaS: theo thời gian</p><p>Bán nguyên trạng: tại thời điểm giao</p></div>
      <div class="sd-card acc"><b>Bill-and-hold</b><p>Khách yêu cầu, hàng tách riêng, sẵn sàng giao, không chuyển cho khách khác</p><small>Đã trả tiền: chưa đủ</small></div></div>`),

    S('Vốn hóa hay ghi chi phí?', `<div class="sd-cols2">
      <div class="sd-card"><b>Vốn hóa: 345.000</b><p>Giá máy 250.000 + lắp đặt 10.000</p><p>Thay động cơ kéo dài tuổi thọ 85.000</p></div>
      <div class="sd-card acc"><b>Ghi chi phí: 42.500</b><p>Đào tạo công nhân 7.500</p><p>Sửa chữa định kỳ 35.000</p></div></div>
      <p class="sd-note">Câu hỏi duy nhất: có tạo <b>lợi ích kinh tế tương lai</b> không?</p>`),

    S('Vốn hóa làm lợi nhuận mượt hơn', `<div class="sd-cols2 wide-left"><div>${capChart}</div>
      <div><div class="sd-rule up">Năm đầu: LN, tài sản, vốn chủ cao hơn</div><div class="sd-rule up">CFO cao hơn, CFI thấp hơn</div><div class="sd-rule">Tổng LN cả vòng đời: 1.200 như nhau</div></div></div>`),

    S('Lãi vay vốn hóa và R&D', `<div class="sd-cols2">
      <div class="sd-card"><b>Lãi vay vốn hóa</b><p>Xây tài sản đủ điều kiện: cộng vào nguyên giá</p><p>IFRS trừ thu nhập tạm đầu tư; US GAAP không</p><small>Nằm ở CFI · cộng lại khi tính khả năng trả lãi</small></div>
      <div class="sd-card acc"><b>R&amp;D</b><p>IFRS: nghiên cứu ghi chi phí, phát triển vốn hóa khi đủ điều kiện</p><p>US GAAP: ghi chi phí cả hai</p><small>Ngoại lệ: phần mềm</small></div></div>`),

    S('Khoản không thường xuyên', `<div class="sd-cols2">
      <div class="sd-card"><b>Bất thường / không thường xuyên</b><p>Tái cấu trúc, suy giảm giá trị, lãi bán nhà máy</p><small>Trong hoạt động liên tục · trước thuế</small></div>
      <div class="sd-card acc"><b>Hoạt động không tiếp tục</b><p>Mảng đã bán hoặc định bán</p><small>Dưới hoạt động liên tục · sau thuế · trình bày lại kỳ trước</small></div></div>
      <p class="sd-note">LN ròng 260 + lỗ HĐ không tiếp tục 40 + tái cấu trúc 50 × 0,75 = <b>337,5</b> cốt lõi. Extraordinary: không còn.</p>`),

    S('Thay đổi kế toán: nhìn trước hay nhìn sau?', `<div class="sd-tbl grid">
      <div class="head"><span>Thay đổi</span><span>Ví dụ</span><span>Áp dụng</span></div>
      <div><span>Chính sách</span><span>Đổi phương pháp tồn kho</span><span>Hồi tố</span></div>
      <div><span>Ước tính</span><span>Thời gian sử dụng tài sản</span><span>Phi hồi tố</span></div>
      <div><span>Sai sót</span><span>Lỗi trong BCTC đã công bố</span><span>Hồi tố, trình bày lại</span></div></div>`),

    S('EPS cơ bản', `<div class="sd-f">EPS = ${frac('LN ròng - Cổ tức ưu đãi', 'WASO')}</div>
      <div class="sd-tbl grid">
      <div class="head"><span>Sự kiện</span><span>Số CP</span><span>× 1,1</span><span>Thời gian</span><span>Bình quân</span></div>
      <div><span>Đầu năm</span><span>10.000</span><span>có</span><span>12/12</span><span>11.000</span></div>
      <div><span>Phát hành 1/4</span><span>4.000</span><span>có</span><span>9/12</span><span>3.300</span></div>
      <div><span>Mua lại 1/9</span><span>-3.000</span><span>không</span><span>4/12</span><span>-1.000</span></div></div>
      <p class="sd-note">Cổ tức CP 10% ngày 1/7 điều chỉnh hồi tố. (10.000 - 1.000)/13.300 = <b>0,68</b>. Không trừ cổ tức phổ thông.</p>`),

    S('EPS pha loãng: ba công cụ', `<div class="sd-cols3">
      <div class="sd-card"><b>Ưu đãi chuyển đổi</b><p>Tử: + cổ tức ưu đãi</p><p>Mẫu: + CP mới</p><small>2,00 → <b>1,71</b></small></div>
      <div class="sd-card"><b>Trái phiếu chuyển đổi</b><p>Tử: + lãi × (1 - t)</p><p>Mẫu: + CP mới</p><small>2,50 → <b>2,24</b></small></div>
      <div class="sd-card acc"><b>Quyền chọn (TSM)</b><p>Tử: không đổi</p><p>Mẫu: + n × (P - K)/P</p><small>2,40 → <b>2,29</b></small></div></div>
      <p class="sd-note">Quyền chọn: 100.000 × (20 - 15)/20 = 25.000 CP tăng ròng.</p>`),

    S('Chống pha loãng: loại ra', `<div class="sd-big">EPS pha loãng ≤ EPS cơ bản</div>
      <div class="sd-cols2"><div class="sd-rule down">Ưu đãi trả 600.000, đổi 200.000 CP: 3,00 mỗi CP mới &gt; EPS cơ bản 2,00 → loại</div><div class="sd-rule down">Quyền chọn có K &gt; giá bình quân → loại</div></div>`),

    S('Common-size: North và South', `<div class="sd-cols2">
      <div><p class="sd-cap">North (doanh thu 5.000)</p>${bars([['Biên gộp', 35], ['Biên HĐ', 15], ['Biên ròng', 9]], 50)}</div>
      <div><p class="sd-cap">South (doanh thu 800)</p>${bars([['Biên gộp', 50], ['Biên HĐ', 25], ['Biên ròng', 16.875]], 50)}</div></div>
      <p class="sd-note">Nhỏ hơn 6 lần nhưng South giữ lại <b>16,9</b> trên mỗi 100 doanh thu, North chỉ 9.</p>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>5 bước; phân bổ theo giá bán riêng lẻ</span><span>Đại lý ghi thuần</span>
      <span>Tiến độ lũy kế, trừ phần đã ghi</span><span>Vốn hóa: LN và CFO cao hơn</span>
      <span>Phát triển: IFRS vốn hóa, US GAAP không</span><span>HĐ không tiếp tục: sau thuế</span>
      <span>Chính sách hồi tố, ước tính phi hồi tố</span><span>Lãi trái phiếu cộng sau thuế; TSM dùng giá bình quân</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 10 câu, mục tiêu ≥ 7 câu đúng.</p>`),
  ];

  addDeck('FSA-02', `Slide Income Statements - bản thiết kế riêng (${slides.length} slide)`, slides);
}());
