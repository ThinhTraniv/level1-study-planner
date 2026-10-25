// Bộ slide tự thiết kế cho FSA-07 Analysis of Long-Term Assets.
(function () {
  const L = window.LESSONS && window.LESSONS['FSA-07'];
  if (!L) return;
  const { frac, slide, addDeck } = window.CFAH;
  const K = 'FSA-07 · Long-Term Assets';
  const S = (title, body, opt = {}) => slide(title, body, Object.assign({ kicker: K }, opt));
  const n0 = v => String(Math.round(v)).replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  // Lợi nhuận 3 năm: ghi chi phí (200, 500, 500) và vốn hóa (400, 400, 400).
  const niBars = (() => {
    const ex = [200, 500, 500], cap = [400, 400, 400];
    const W = 600, H = 260, b = 220, sc = 0.36;
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv" role="img" aria-label="Lợi nhuận theo hai cách">`;
    s += `<line x1="40" y1="${b}" x2="580" y2="${b}" class="sv-axis"/>`;
    ex.forEach((v, i) => {
      const x = 90 + i * 170;
      s += `<line x1="${x}" y1="${b}" x2="${x}" y2="${b - v * sc}" class="sv-down" style="stroke-width:40"/><text x="${x}" y="${b - v * sc - 8}" class="sv-txt sv-t-down">${v}</text>`;
      s += `<line x1="${x + 50}" y1="${b}" x2="${x + 50}" y2="${b - cap[i] * sc}" class="sv-up" style="stroke-width:40"/><text x="${x + 50}" y="${b - cap[i] * sc - 8}" class="sv-txt sv-t-up">${cap[i]}</text>`;
      s += `<text x="${x + 25}" y="${b + 24}" class="sv-muted">Năm ${i + 1}</text>`;
    });
    s += `<text x="580" y="20" class="sv-txt sv-t-down" text-anchor="end">đỏ: ghi chi phí</text><text x="580" y="40" class="sv-txt sv-t-up" text-anchor="end">xanh: vốn hóa</text>`;
    return `${s}</svg>`;
  })();

  // Giá trị còn lại: đường thẳng và DDB.
  const bvChart = (() => {
    const sl = [100000, 82000, 64000, 46000, 28000, 10000], dd = [100000, 60000, 36000, 21600, 12960, 10000];
    const W = 600, H = 280, l = 70, r = 570, tp = 20, b = 230;
    const X = i => l + (i / 5) * (r - l), Y = v => b - (v / 100000) * (b - tp);
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv" role="img" aria-label="Giá trị còn lại theo hai phương pháp khấu hao">`;
    [0, 25000, 50000, 75000, 100000].forEach(v => { s += `<line x1="${l}" y1="${Y(v)}" x2="${r}" y2="${Y(v)}" class="sv-grid"/><text x="${l - 8}" y="${Y(v) + 5}" class="sv-muted" text-anchor="end">${n0(v / 1000)}k</text>`; });
    for (let i = 0; i <= 5; i++) s += `<text x="${X(i)}" y="${b + 24}" class="sv-muted">${i}</text>`;
    s += `<line x1="${l}" y1="${b}" x2="${r}" y2="${b}" class="sv-axis"/>`;
    s += `<polyline points="${sl.map((v, i) => `${X(i)},${Y(v)}`).join(' ')}" class="sv-curve"/>`;
    s += `<polyline points="${dd.map((v, i) => `${X(i)},${Y(v)}`).join(' ')}" class="sv-down" fill="none"/>`;
    s += `<line x1="${l}" y1="${Y(10000)}" x2="${r}" y2="${Y(10000)}" class="sv-dash"/>`;
    s += `<text x="${X(2.6)}" y="${Y(64000)}" class="sv-txt" text-anchor="start">Đường thẳng</text><text x="${X(1.2)}" y="${Y(36000) + 26}" class="sv-txt sv-t-down" text-anchor="start">DDB</text><text x="${r}" y="${Y(10000) - 8}" class="sv-muted" text-anchor="end">giá trị thanh lý 10k</text>`;
    s += `<text x="${(l + r) / 2}" y="${H - 4}" class="sv-muted">Năm</text>`;
    return `${s}</svg>`;
  })();

  // Giá mua 1.000 = 550 + 150 + 100 + goodwill 200.
  const gwBar = (() => {
    const parts = [[550, 'Tài sản hữu hình 550', 'sv-panel'], [150, 'Thương hiệu 150', 'sv-key'], [100, 'KH 100', 'sv-key'], [200, 'Goodwill 200', 'sv-node up']];
    const W = 600, x0 = 20, x1 = 580;
    let x = x0, s = `<svg viewBox="0 0 ${W} 130" class="sv" role="img" aria-label="Phân bổ giá mua">`;
    parts.forEach(([v, l, c]) => { const w = (v / 1000) * (x1 - x0); s += `<rect x="${x}" y="30" width="${w - 3}" height="50" rx="6" class="${c}"/><text x="${x + w / 2}" y="61" class="sv-txt">${l}</text>`; x += w; });
    s += `<text x="300" y="112" class="sv-muted">Giá mua 1.000 = tài sản thuần xác định được theo giá trị hợp lý (800) + goodwill (200)</text>`;
    return `${s}</svg>`;
  })();

  // Trục số kiểm tra suy giảm của máy 500.000.
  const impLine = (() => {
    const W = 600, H = 190, x0 = 40, x1 = 560, lo = 420, hi = 570;
    const X = v => x0 + ((v - lo) / (hi - lo)) * (x1 - x0);
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv" role="img" aria-label="Kiểm tra suy giảm">`;
    s += `<line x1="${x0}" y1="95" x2="${x1}" y2="95" class="sv-axis"/>`;
    s += `<line x1="${X(460)}" y1="95" x2="${X(500)}" y2="95" class="sv-down" style="stroke-width:10"/>`;
    [[440, 'FV - CP bán 440', 0, 'muted'], [450, 'FV 450', 1, 'muted'], [460, 'VIU 460', 0, 'pv'], [500, 'Ghi sổ 500', 1, 'txt'], [550, 'Chưa CK 550', 0, 'up']].forEach(([v, l, top, c]) => {
      s += `<circle cx="${X(v)}" cy="95" r="7" class="sv-dot"/><text x="${X(v)}" y="${top ? 62 : 136}" class="sv-txt ${c === 'up' ? 'sv-t-up' : c === 'pv' ? 'sv-t-pv' : ''}">${l}</text>`;
    });
    s += `<text x="${(X(460) + X(500)) / 2}" y="30" class="sv-txt sv-t-down">IFRS lỗ 40</text>`;
    s += `<text x="300" y="${H - 8}" class="sv-muted">Đơn vị: nghìn. US GAAP: 500 &lt; 550 → không suy giảm</text>`;
    return `${s}</svg>`;
  })();

  const slides = [
    S('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Financial Statement Analysis · FSA-07</div>
      <h2>Analysis of<br>Long-Term Assets</h2>
      <p>Vốn hóa, khấu hao, đánh giá lại, suy giảm, dừng ghi nhận</p>
      <div class="sd-chips"><span>LOS 1 · Ba loại vô hình</span><span>LOS 2 · Suy giảm và dừng ghi nhận</span><span>LOS 3 · Thuyết minh</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Vòng đời của một tài sản dài hạn', `<div class="sd-steps"><span>① Ghi nhận: vốn hóa hay chi phí?</span><span>② Phân bổ: khấu hao, hao mòn</span><span>③ Đo lường lại: đánh giá lại, suy giảm</span><span>④ Dừng ghi nhận: bán, bỏ, đổi</span></div>
      <div class="sd-big">Tổng lợi nhuận cả vòng đời không đổi</div>
      <p class="sd-note">Lựa chọn kế toán chỉ <b>dịch chuyển</b> lợi nhuận giữa các kỳ và chuyển tiền giữa CFO và CFI.</p>`),

    S('Vốn hóa hay ghi chi phí: chi 300, dùng 3 năm', `<div class="sd-cols2 wide-left"><div>${niBars}</div>
      <div><div class="sd-steps"><span>Tổng lợi nhuận: <b>1.200</b> cả hai cách</span><span>Vốn hóa: lợi nhuận mượt hơn</span><span>Vốn hóa: CFO 1.500, CFI -300</span><span>Ghi chi phí: CFO 1.200</span></div></div></div>`),

    S('Vốn hóa so với ghi chi phí: tỷ số', `<div class="sd-cols2">
      <div><div class="sd-rule up">Cao hơn: tài sản · vốn chủ · lợi nhuận kỳ đầu · CFO</div><div class="sd-rule down">Thấp hơn: biến động lợi nhuận · D/E · CFI (âm hơn) · lợi nhuận kỳ sau</div></div>
      <div class="sd-card acc"><b>Khi so sánh</b><p>CFO của công ty hay vốn hóa trông đẹp hơn.</p><p>So sánh <b>FCFF</b> (đã trừ capex) để công bằng.</p></div></div>`),

    S('Khấu hao: đường thẳng và DDB', `<div class="sd-cols2 wide-left"><div>${bvChart}</div>
      <div><div class="sd-tbl"><div><span>Đường thẳng</span><span>90.000 / 5 = 18.000</span></div><div><span>DDB năm 1</span><span>40% × 100.000 = 40.000</span></div><div><span>DDB năm 2</span><span>40% × 60.000 = 24.000</span></div><div><span>Sản lượng năm 1</span><span>12.000 × 2 = 24.000</span></div></div>
      <p class="sd-note">IFRS: bắt buộc khấu hao theo cấu phần. Đổi ước tính: phi hồi tố.</p></div></div>`),

    S('Ba con đường có tài sản vô hình', `<div class="sd-cols3">
      <div class="sd-card"><div class="sd-n">1</div><b>Mua riêng</b><p>Vốn hóa theo giá mua.</p><small>Bằng sáng chế, giấy phép</small></div>
      <div class="sd-card"><div class="sd-n">2</div><b>Tự tạo</b><p>Phần lớn ghi chi phí.</p><small>IFRS: vốn hóa chi phí phát triển đủ điều kiện</small></div>
      <div class="sd-card acc"><div class="sd-n">3</div><b>Qua hợp nhất</b><p>Vô hình xác định được theo <b>giá trị hợp lý</b>; phần dư là goodwill.</p></div></div>
      <p class="sd-note">Có thời hạn: hao mòn. Không xác định thời hạn và goodwill: không hao mòn, kiểm tra suy giảm hằng năm.</p>`),

    S('Goodwill là phần dư', `${gwBar}
      <div class="sd-cols2"><div class="sd-rule up">Thương hiệu Q tự xây: không có trên sổ Q</div><div class="sd-rule">Nhưng có trên báo cáo hợp nhất của P: 150</div></div>
      <p class="sd-note">Goodwill = giá mua - giá trị hợp lý tài sản thuần xác định được = 1.000 - 800 = <b>200</b>.</p>`),

    S('R&D và phần mềm: IFRS và US GAAP', `<div class="sd-tbl grid"><div class="head"><span></span><span>IFRS</span><span>US GAAP</span></div>
      <div><span>Nghiên cứu</span><span>chi phí</span><span>chi phí</span></div>
      <div><span>Phát triển</span><span>vốn hóa khi đủ điều kiện</span><span>chi phí</span></div>
      <div><span>Phần mềm để bán</span><span>như chi phí phát triển</span><span>vốn hóa sau khả thi kỹ thuật</span></div>
      <div><span>Phần mềm nội bộ</span><span>như chi phí phát triển</span><span>vốn hóa ở giai đoạn phát triển ứng dụng</span></div></div>
      <p class="sd-note">Công ty IFRS vốn hóa nhiều hơn → tài sản cao hơn, lợi nhuận kỳ đầu cao hơn.</p>`),

    S('Đánh giá lại (chỉ IFRS)', `<div class="sd-cols2">
      <div><div class="sd-rule up">Tăng → OCI (thặng dư), trừ phần đảo ngược lỗ cũ → lãi lỗ</div><div class="sd-rule down">Giảm → lãi lỗ, trừ phần đảo ngược thặng dư → OCI</div></div>
      <div><div class="sd-tbl grid"><div class="head"><span>Đất 1.000</span><span>Năm 1</span><span>Năm 2</span></div><div><span>Lô A</span><span>1.200: OCI +200</span><span>900: OCI -200, lỗ 100</span></div><div><span>Lô B</span><span>900: lỗ 100</span><span>1.150: lãi 100, OCI +150</span></div></div></div></div>
      <p class="sd-note">US GAAP: chỉ mô hình giá gốc. Bất động sản đầu tư (IFRS, giá trị hợp lý): mọi thay đổi vào lãi lỗ.</p>`),

    S('Suy giảm: IFRS và US GAAP', `<div class="sd-tbl grid"><div class="head"><span></span><span>IFRS</span><span>US GAAP</span></div>
      <div><span>Kiểm tra</span><span>ghi sổ &gt; max(FV - CP bán; VIU)</span><span>ghi sổ &gt; dòng tiền chưa chiết khấu</span></div>
      <div><span>Mức lỗ</span><span>ghi sổ - giá trị thu hồi</span><span>ghi sổ - giá trị hợp lý</span></div>
      <div><span>Hoàn nhập</span><span>được (trừ goodwill)</span><span>không</span></div></div>
      <p class="sd-note">VIU = PV dòng tiền từ việc tiếp tục sử dụng. Nắm giữ để bán: cả hai cho hoàn nhập tối đa lỗ đã ghi.</p>`),

    S('Một máy, hai kết luận', `${impLine}
      <div class="sd-cols2"><div class="sd-rule down">IFRS: thu hồi = max(440; 460) = 460 → lỗ <b>40.000</b></div><div class="sd-rule">US GAAP: nếu chưa CK chỉ 480 → lỗ 500 - 450 = <b>50.000</b></div></div>`),

    S('Sau khi ghi suy giảm', `<div class="sd-cols2">
      <div class="sd-card"><b>Năm ghi suy giảm</b><p>Tài sản ↓ · vốn chủ ↓ · lợi nhuận ↓ · D/E ↑</p></div>
      <div class="sd-card acc"><b>Các năm sau</b><p>Khấu hao ↓ → lợi nhuận ↑ · ROA, vòng quay tài sản ↑</p></div></div>
      <div class="sd-rule up">CFO không đổi: bút toán không bằng tiền</div>
      <p class="sd-note">Goodwill: IFRS ở cấp CGU, US GAAP ở cấp reporting unit; không bao giờ hoàn nhập. Cảnh giác "big bath".</p>`),

    S('Dừng ghi nhận và tuổi tài sản', `<div class="sd-cols2">
      <div class="sd-card"><b>Bán máy: giá gốc 80.000, KH lũy kế 50.000, thu 36.000</b><p>Lãi = 36.000 - 30.000 = <b>6.000</b></p><p>CFI +36.000; CFO gián tiếp trừ 6.000</p><small>Bỏ đi: lỗ 30.000. Trao đổi: theo giá trị hợp lý. Spin-off: thường không lãi lỗ</small></div>
      <div class="sd-card acc"><b>PP&amp;E: nguyên giá 4.800, KH lũy kế 1.800, KH năm 600</b><p>Tuổi bình quân = ${frac('1.800', '600')} = <b>3</b></p><p>Tổng = ${frac('4.800', '600')} = <b>8</b> · Còn lại = ${frac('3.000', '600')} = <b>5</b></p></div></div>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>Vốn hóa: lợi nhuận kỳ đầu ↑, CFO ↑, CFI ↓</span><span>DDB: 2/N × giá trị còn lại</span>
      <span>Vô hình tự tạo: ghi chi phí</span><span>Hợp nhất: giá trị hợp lý, goodwill phần dư</span>
      <span>Đánh giá lại chỉ có ở IFRS</span><span>IFRS: max(FV - CP bán; VIU)</span>
      <span>US GAAP: bước chưa chiết khấu, không hoàn nhập</span><span>Tuổi bình quân = KH lũy kế / KH năm</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 10 câu, mục tiêu ≥ 7 câu đúng.</p>`),
  ];

  addDeck('FSA-07', `Slide Long-Term Assets - bản thiết kế riêng (${slides.length} slide)`, slides);
}());
