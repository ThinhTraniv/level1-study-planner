// Bộ slide tự thiết kế cho FSA-06 Analysis of Inventories.
(function () {
  const L = window.LESSONS && window.LESSONS['FSA-06'];
  if (!L) return;
  const { slide, addDeck } = window.CFAH;
  const K = 'FSA-06 · Inventories';
  const S = (title, body, opt = {}) => slide(title, body, Object.assign({ kicker: K }, opt));
  const n0 = v => String(v).replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  // Thanh chia hàng sẵn có 6.200 thành COGS và tồn kho cuối kỳ theo từng phương pháp.
  const splitBars = (() => {
    const rows = [['FIFO', 4100], ['Bình quân', 4340], ['LIFO', 4600]];
    const W = 600, H = 210, x0 = 130, x1 = 580, tot = 6200;
    const X = v => x0 + (v / tot) * (x1 - x0);
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv" role="img" aria-label="Chia hàng sẵn có thành COGS và tồn kho">`;
    rows.forEach(([n, c], i) => {
      const y = 20 + i * 60;
      s += `<text x="${x0 - 12}" y="${y + 24}" class="sv-txt" text-anchor="end">${n}</text>`;
      s += `<rect x="${x0}" y="${y}" width="${X(c) - x0}" height="36" rx="5" class="sv-panel"/><text x="${(x0 + X(c)) / 2}" y="${y + 24}" class="sv-txt">COGS ${n0(c)}</text>`;
      s += `<line x1="${X(c) + 2}" y1="${y + 18}" x2="${x1}" y2="${y + 18}" class="sv-pv" style="stroke-width:34"/><text x="${(X(c) + x1) / 2}" y="${y + 24}" class="sv-txt">${n0(tot - c)}</text>`;
    });
    s += `<text x="${(x0 + x1) / 2}" y="${H - 6}" class="sv-muted">Hàng sẵn có 6.200 = COGS + tồn kho cuối kỳ (cam)</text>`;
    return `${s}</svg>`;
  })();

  // Các lớp LIFO: lớp cũ giá rẻ nằm dưới cùng.
  const layers = `<svg viewBox="0 0 600 240" class="sv" role="img" aria-label="Các lớp tồn kho LIFO">
    <rect x="60" y="150" width="260" height="60" rx="6" class="sv-panel"/><text x="190" y="186" class="sv-txt">Lớp cũ: 2.000 × 30</text>
    <rect x="60" y="40" width="260" height="100" rx="6" class="sv-key"/><text x="190" y="96" class="sv-txt">Mua năm nay: 8.000 × 50</text>
    <line x1="330" y1="90" x2="420" y2="90" class="sv-down"/><text x="430" y="96" class="sv-txt sv-t-down" text-anchor="start">bán 8.000 trước</text>
    <line x1="330" y1="165" x2="420" y2="165" class="sv-down"/><text x="430" y="171" class="sv-txt sv-t-down" text-anchor="start">rồi 1.000 lớp cũ</text>
    <line x1="60" y1="180" x2="320" y2="180" class="sv-dash"/>
    <text x="190" y="232" class="sv-muted">Bán 9.000 &gt; mua 8.000 → lớp cũ giá rẻ chạy vào COGS</text></svg>`;

  // Trục số cho quy tắc "market = số ở giữa".
  const marketLine = (() => {
    const W = 600, H = 170, x0 = 40, x1 = 560, lo = 160, hi = 210;
    const X = v => x0 + ((v - lo) / (hi - lo)) * (x1 - x0);
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv" role="img" aria-label="Market là số ở giữa">`;
    s += `<line x1="${x0}" y1="80" x2="${x1}" y2="80" class="sv-axis"/>`;
    s += `<line x1="${X(175)}" y1="80" x2="${X(190)}" y2="80" class="sv-pv" style="stroke-width:10"/>`;
    [[170, 'thay thế 170', 'down', 1], [175, 'cận dưới 175', 'pv', 0], [190, 'NRV 190', 'pv', 1], [200, 'giá gốc 200', 'up', 0]].forEach(([v, l, c, top]) => {
      s += `<circle cx="${X(v)}" cy="80" r="7" class="sv-dot"/><text x="${X(v)}" y="${top ? 52 : 118}" class="sv-txt sv-t-${c}">${l}</text>`;
    });
    s += `<text x="${(x0 + x1) / 2}" y="${H - 8}" class="sv-muted">170 nằm ngoài khoảng [175; 190] → market = 175 → ghi sổ min(200; 175) = 175</text>`;
    return `${s}</svg>`;
  })();

  const slides = [
    S('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Financial Statement Analysis · FSA-06</div>
      <h2>Analysis of Inventories</h2>
      <p>Cùng một đống hàng, ba cách chia chi phí</p>
      <div class="sd-chips"><span>LOS 1 · Cost và NRV</span><span>LOS 2 · Lạm phát, FIFO, LIFO</span><span>LOS 3 · Thuyết minh</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Phương trình hàng tồn kho', `<div class="sd-big">Tồn đầu + Mua = COGS + Tồn cuối</div>
      <div class="sd-cols2"><div class="sd-card"><b>Phần đã bán → COGS</b><p>Báo cáo kết quả kinh doanh</p></div><div class="sd-card acc"><b>Phần chưa bán → Tồn kho</b><p>Bảng cân đối kế toán</p></div></div>
      <p class="sd-note">Tổng chi phí cố định. Phương pháp tính giá chỉ quyết định <b>chia</b> thế nào.</p>`),

    S('Bốn phương pháp tính giá', `<div class="sd-tbl grid"><div class="head"><span>Phương pháp</span><span>Vào COGS</span><span>Còn trong kho</span><span>IFRS</span><span>US GAAP</span></div>
      <div><span>Đích danh</span><span>đúng món đã bán</span><span>đúng món còn lại</span><span>có</span><span>có</span></div>
      <div><span>FIFO</span><span>hàng cũ</span><span>hàng mới</span><span>có</span><span>có</span></div>
      <div><span>Bình quân</span><span>giá bình quân</span><span>giá bình quân</span><span>có</span><span>có</span></div>
      <div><span>LIFO</span><span>hàng mới</span><span>hàng cũ</span><span><b>cấm</b></span><span>có</span></div></div>
      <p class="sd-note">Mỹ: dùng LIFO để tính thuế thì phải dùng LIFO trên báo cáo (LIFO conformity).</p>`),

    S('Ví dụ: 100 × 10, 200 × 12, 200 × 14, bán 350', `<div class="sd-cols2 wide-left"><div>${splitBars}</div>
      <div><div class="sd-tbl grid"><div class="head"><span></span><span>Lãi gộp</span><span>Biên</span></div><div><span>FIFO</span><span>2.900</span><span>41,43%</span></div><div><span>Bình quân</span><span>2.660</span><span>38,00%</span></div><div><span>LIFO</span><span>2.400</span><span>34,29%</span></div></div>
      <p class="sd-note">Doanh thu 7.000. Giá bình quân 6.200 / 500 = 12,40.</p></div></div>`),

    S('Lạm phát: LIFO so với FIFO', `<div class="sd-cols2">
      <div><div class="sd-rule up">Cao hơn: COGS · thuế tiết kiệm · CFO · vòng quay tồn kho · D/E</div><div class="sd-rule down">Thấp hơn: lợi nhuận · biên lợi nhuận · tồn kho · current ratio · vốn chủ</div></div>
      <div class="sd-card acc"><b>Vì sao?</b><p>LIFO đẩy giá <b>đắt</b> (mới) vào COGS, để lại giá <b>rẻ</b> (cũ) trong kho.</p><p>Giảm phát: mọi chiều <b>đảo ngược</b>.</p></div></div>
      <p class="sd-note">Bình quân luôn nằm giữa FIFO và LIFO.</p>`),

    S('Mỗi phương pháp đúng ở một báo cáo', `<div class="sd-cols2">
      <div class="sd-card"><div class="sd-n">FIFO</div><b>Bảng cân đối đúng hơn</b><p>Tồn kho ≈ chi phí thay thế hiện tại.</p><small>Nhưng COGS dùng giá cũ → lợi nhuận "đẹp" quá mức trong lạm phát</small></div>
      <div class="sd-card acc"><div class="sd-n">LIFO</div><b>Báo cáo KQKD đúng hơn</b><p>COGS ≈ chi phí hiện tại.</p><small>Nhưng tồn kho có thể là giá của hàng chục năm trước</small></div></div>`),

    S('Lợi ích dòng tiền của LIFO đến từ thuế', `<div class="sd-steps"><span>COGS LIFO - COGS FIFO = 4.600 - 4.100 = 500</span><span>Lợi nhuận trước thuế thấp hơn 500</span><span>Thuế 25% → nộp ít hơn <b>125</b></span><span>CFO LIFO cao hơn <b>125</b></span></div>
      <div class="sd-cols2"><div class="sd-rule up">Tiền mua hàng như nhau dưới mọi phương pháp</div><div class="sd-rule down">"Bỏ qua thuế" → CFO bằng nhau</div></div>`),

    S('LIFO reserve: cây cầu sang FIFO', `<div class="sd-tbl"><div><span>Tồn kho FIFO</span><span>Tồn kho LIFO + Reserve</span></div><div><span>COGS FIFO</span><span>COGS LIFO - ΔReserve</span></div><div><span>NI FIFO</span><span>NI LIFO + ΔReserve × (1 - t)</span></div><div><span>Vốn chủ FIFO</span><span>Vốn chủ LIFO + Reserve × (1 - t)</span></div><div><span>Nợ (thuế hoãn lại)</span><span>+ Reserve × t</span></div></div>
      <p class="sd-note">Dòng tiền kỳ (COGS, NI) dùng <b>Δ</b>Reserve. Số dư (tồn kho, vốn chủ) dùng <b>số dư</b> Reserve.</p>`),

    S('Bình Minh: LIFO và FIFO cạnh nhau', `<div class="sd-tbl grid"><div class="head"><span>Reserve 600 → 750, t = 25%</span><span>LIFO</span><span>FIFO</span></div>
      <div><span>Tồn kho cuối năm</span><span>3.400</span><span>4.150</span></div>
      <div><span>COGS</span><span>12.000</span><span>11.850</span></div>
      <div><span>Lợi nhuận ròng</span><span>1.800</span><span>1.912,5</span></div>
      <div><span>Current ratio</span><span>1,60</span><span>1,75</span></div>
      <div><span>Nợ / vốn chủ</span><span>1,50</span><span>1,42</span></div>
      <div><span>Vòng quay tồn kho</span><span>3,75</span><span>3,06</span></div></div>
      <p class="sd-note">Không có gì thay đổi về kinh tế, chỉ là cách chia chi phí.</p>`),

    S('LIFO liquidation', `<div class="sd-cols2 wide-left"><div>${layers}</div>
      <div><div class="sd-steps"><span>COGS = 8.000 × 50 + 1.000 × 30 = <b>430.000</b></span><span>Nếu mua đủ: 450.000</span><span>Lãi gộp thêm <b>20.000</b> = mức giảm LIFO reserve</span></div>
      <p class="sd-note">Lợi nhuận tăng <b>không bền vững</b>, thuế tăng. Dấu hiệu: số lượng tồn kho giảm, reserve giảm khi giá vẫn tăng.</p></div></div>`),

    S('Ghi giảm: IFRS và US GAAP', `<div class="sd-tbl grid"><div class="head"><span></span><span>IFRS</span><span>US GAAP: FIFO, bình quân</span><span>US GAAP: LIFO, bán lẻ</span></div>
      <div><span>Quy tắc</span><span>cost vs NRV</span><span>cost vs NRV</span><span>cost vs market</span></div>
      <div><span>Hoàn nhập</span><span><b>được</b> (≤ số đã giảm)</span><span>không</span><span>không</span></div></div>
      <div class="sd-f sm">NRV = giá bán ước tính - chi phí hoàn thành và bán</div>
      <p class="sd-note">Market = chi phí thay thế, kẹp trong [NRV - biên lợi nhuận bình thường; NRV].</p>`),

    S('Market = số ở giữa', `${marketLine}
      <div class="sd-cols2"><div class="sd-rule">IFRS: min(200; NRV 190) = <b>190</b>, giảm 10</div><div class="sd-rule down">US GAAP LIFO: <b>175</b>, giảm 25</div></div>
      <p class="sd-note">Năm sau NRV lên 205: IFRS hoàn nhập về 200 (không vượt giá gốc); US GAAP giữ 175.</p>`),

    S('Sau ghi giảm và khi đọc thuyết minh', `<div class="sd-cols2">
      <div class="sd-card"><b>Ảnh hưởng của ghi giảm</b><p>Kỳ này: tồn kho ↓, lợi nhuận ↓, current ratio ↓, vòng quay ↑</p><p>Kỳ sau: COGS thấp hơn → biên lợi nhuận ↑</p></div>
      <div class="sd-card acc"><b>Soi thuyết minh</b><p>Thành phẩm tăng nhanh hơn doanh thu → nhu cầu yếu</p><p>Nguyên liệu, dở dang tăng → chuẩn bị tăng trưởng</p><p>Đổi phương pháp: hồi tố, trừ chuyển sang LIFO (US GAAP)</p></div></div>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>LIFO chỉ có ở US GAAP</span><span>Lạm phát: LIFO COGS cao, tồn kho thấp</span>
      <span>LIFO tiết kiệm thuế → CFO cao hơn</span><span>Bình quân nằm giữa</span>
      <span>COGS FIFO = COGS LIFO - ΔReserve</span><span>Vốn chủ + Reserve × (1 - t)</span>
      <span>Liquidation: lãi tạm thời, thuế tăng</span><span>IFRS hoàn nhập, US GAAP không</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 10 câu, mục tiêu ≥ 7 câu đúng.</p>`),
  ];

  addDeck('FSA-06', `Slide Inventories - bản thiết kế riêng (${slides.length} slide)`, slides);
}());
