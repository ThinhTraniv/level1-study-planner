// Bộ slide tự thiết kế cho FSA-09 Analysis of Income Taxes.
(function () {
  const L = window.LESSONS && window.LESSONS['FSA-09'];
  if (!L) return;
  const { frac, slide, addDeck } = window.CFAH;
  const K = 'FSA-09 · Income Taxes';
  const S = (title, body, opt = {}) => slide(title, body, Object.assign({ kicker: K }, opt));
  const fmt = (x, d = 1) => x.toFixed(d).replace('.', ',');
  const th = x => String(Math.round(x)).replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  // Ví dụ khấu hao: máy 120.000, kế toán 4 năm, thuế 3 năm, thuế suất 25%.
  const yrs = [1, 2, 3, 4].map(y => {
    const cv = 120000 - 30000 * y, tb = Math.max(0, 120000 - 40000 * y);
    const ti = 100000 - (y <= 3 ? 40000 : 0);
    return { y, cv, tb, dtl: (cv - tb) * 0.25, pay: ti * 0.25, exp: 70000 * 0.25 };
  });

  // Biểu đồ cột: thuế phải nộp và chi phí thuế mỗi năm, kèm số dư DTL.
  const taxBars = (() => {
    const W = 600, H = 290, l = 60, b = 230, top = 20, max = 26000;
    const Y = v => b - (v / max) * (b - top);
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv" role="img" aria-label="Thuế phải nộp, chi phí thuế và DTL qua 4 năm">`;
    [0, 10000, 20000].forEach(v => { s += `<line x1="${l}" y1="${Y(v)}" x2="${W - 20}" y2="${Y(v)}" class="sv-grid"/><text x="${l - 8}" y="${Y(v) + 5}" class="sv-muted" text-anchor="end">${th(v)}</text>`; });
    yrs.forEach((d, i) => {
      const x = l + 30 + i * 130;
      s += `<rect x="${x}" y="${Y(d.pay)}" width="40" height="${b - Y(d.pay)}" class="sv-node up"/>`;
      s += `<rect x="${x + 46}" y="${Y(d.exp)}" width="40" height="${b - Y(d.exp)}" class="sv-node"/>`;
      s += `<text x="${x + 43}" y="${b + 22}" class="sv-muted">Năm ${d.y}</text>`;
      s += `<text x="${x + 43}" y="${b + 46}" class="sv-txt sv-t-pv">DTL ${th(d.dtl)}</text>`;
    });
    s += `<rect x="${l + 10}" y="4" width="14" height="14" class="sv-node up"/><text x="${l + 30}" y="16" class="sv-muted" text-anchor="start">Thuế phải nộp</text>`;
    s += `<rect x="${l + 180}" y="4" width="14" height="14" class="sv-node"/><text x="${l + 200}" y="16" class="sv-muted" text-anchor="start">Chi phí thuế (17.500 mỗi năm)</text>`;
    return `${s}</svg>`;
  })();

  // Thác nước đối chiếu thuế suất hiệu dụng: 25% → 21%.
  const waterfall = (() => {
    const steps = [['Luật định', 25, 'base'], ['Miễn thuế', -1], ['Phạt', 0.5], ['Nước ngoài', -2], ['Tín dụng', -1.5]];
    const W = 600, H = 280, l = 40, b = 220, top = 20, lo = 15, hi = 26;
    const Y = v => b - ((v - lo) / (hi - lo)) * (b - top);
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv" role="img" aria-label="Đối chiếu từ thuế suất luật định 25% xuống ETR 21%">`;
    s += `<line x1="${l}" y1="${b}" x2="${W - 10}" y2="${b}" class="sv-axis"/>`;
    let cur = 0;
    steps.forEach(([lab, v, k], i) => {
      const x = l + 10 + i * 92;
      let y0, y1, cls;
      if (k === 'base') { y0 = lo; y1 = v; cur = v; cls = 'sv-node'; } else { y0 = cur; y1 = cur + v; cur += v; cls = v < 0 ? 'sv-node up' : 'sv-node down'; }
      const ya = Y(Math.max(y0, y1)), yb = Y(Math.min(y0, y1));
      s += `<rect x="${x}" y="${ya}" width="64" height="${yb - ya}" class="${cls}"/>`;
      s += `<text x="${x + 32}" y="${ya - 8}" class="sv-txt">${k === 'base' ? fmt(v) + '%' : (v > 0 ? '+' : '') + fmt(v)}</text>`;
      s += `<text x="${x + 32}" y="${b + 22}" class="sv-muted">${lab}</text>`;
    });
    const x = l + 10 + 5 * 92;
    s += `<rect x="${x}" y="${Y(cur)}" width="64" height="${b - Y(cur)}" class="sv-node"/><text x="${x + 32}" y="${Y(cur) - 8}" class="sv-txt sv-t-pv">${fmt(cur)}%</text><text x="${x + 32}" y="${b + 22}" class="sv-muted">ETR</text>`;
    s += `<text x="300" y="${H - 6}" class="sv-muted">Trục dọc bắt đầu từ 15% để thấy rõ từng bước</text>`;
    return `${s}</svg>`;
  })();

  const slides = [
    S('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Financial Statement Analysis · FSA-09</div>
      <h2>Analysis of Income Taxes</h2>
      <p>Hai bộ sổ · Thuế hoãn lại · Ba loại thuế suất</p>
      <div class="sd-chips"><span>LOS 1 · Lợi nhuận và thu nhập chịu thuế</span><span>LOS 2 · DTL và DTA</span><span>LOS 3 · ETR và cash tax rate</span><span>LOS 4 · Thuyết minh thuế</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Hai bộ sổ, hai con số lợi nhuận', `<div class="sd-cols2">
      <div class="sd-card"><b>Tờ khai thuế</b><p>Thu nhập chịu thuế</p><p>Thuế phải nộp</p><p>Thuế đã nộp bằng tiền</p><small>Theo luật thuế</small></div>
      <div class="sd-card acc"><b>Báo cáo tài chính</b><p>Lợi nhuận kế toán</p><p>Chi phí thuế thu nhập</p><p>DTL, DTA</p><small>Theo IFRS hoặc US GAAP</small></div></div>
      <p class="sd-note">Chênh lệch giữa hai bộ sổ: <b>tạm thời</b> (sẽ đảo ngược) hoặc <b>vĩnh viễn</b> (không bao giờ đảo ngược).</p>`),

    S('Công thức trung tâm', `<div class="sd-big">Chi phí thuế = Thuế phải nộp + ΔDTL - ΔDTA</div>
      <div class="sd-cols2"><div class="sd-rule down">DTL tăng <b>chi phí thuế &gt; thuế phải nộp</b></div><div class="sd-rule up">DTA tăng <b>chi phí thuế &lt; thuế phải nộp</b></div></div>
      <p class="sd-note">Ví dụ: thuế phải nộp 2.000, DTL tăng 300, DTA tăng 100 → chi phí thuế <b>2.200</b>.</p>`),

    S('Tax base là gì?', `<div class="sd-cols2">
      <div class="sd-card"><b>Tài sản</b><p>Số tiền <b>sẽ được trừ</b> khi tính thuế trong tương lai</p><small>Máy 120.000, thuế đã cho khấu hao 40.000 → tax base 80.000</small></div>
      <div class="sd-card acc"><b>Nợ phải trả</b><p>Giá trị ghi sổ <b>trừ</b> phần sẽ được trừ thuế sau này</p><small>Dự phòng bảo hành 3.000, trừ thuế khi chi → tax base 0</small></div></div>
      <div class="sd-f sm">(Giá trị ghi sổ - tax base) × thuế suất = DTL hoặc DTA</div>`),

    S('Ma trận DTL - DTA', `<div class="sd-tbl grid">
      <div class="head"><span></span><span>Ghi sổ &gt; tax base</span><span>Ghi sổ &lt; tax base</span></div>
      <div><span><b>Tài sản</b></span><span>DTL</span><span>DTA</span></div>
      <div><span><b>Nợ phải trả</b></span><span>DTA</span><span>DTL</span></div></div>
      <p class="sd-note">Mẹo: tài sản "to hơn" trên sổ kế toán = thuế đã cho trừ trước nhiều hơn → sau này <b>nộp thêm</b> → DTL. Nợ thì ngược lại.</p>`),

    S('Nguồn gốc thường gặp', `<div class="sd-cols2">
      <div class="sd-card"><b>DTL: nộp ít hôm nay, nộp nhiều sau</b><p>Khấu hao nhanh cho thuế</p><p>Doanh thu ghi sổ trước khi bị đánh thuế</p><p>Chi phí được trừ thuế trước khi ghi sổ</p></div>
      <div class="sd-card acc"><b>DTA: nộp nhiều hôm nay, nộp ít sau</b><p>Bảo hành, nợ xấu, phúc lợi hưu trí</p><p>Doanh thu nhận trước đã bị đánh thuế</p><p>Lỗ tính thuế chuyển sang kỳ sau</p></div></div>`),

    S('Ví dụ: DTL tích lũy rồi đảo ngược', `<div class="sd-cols2 wide-left"><div>${taxBars}</div><div>
      <p class="sd-note">Máy 120.000: kế toán khấu hao 4 năm, thuế 3 năm, thuế suất 25%.</p>
      <p class="sd-note">Năm 1-3: nộp 15.000, ghi chi phí 17.500 → DTL tích lũy đến <b>7.500</b>.</p>
      <p class="sd-note">Năm 4: nộp 25.000, DTL đảo ngược về 0. Tổng 4 năm hai bên đều là <b>70.000</b>.</p></div></div>`),

    S('Bảng tính từng năm', `<div class="sd-tbl grid">
      <div class="head"><span>Cuối năm</span><span>1</span><span>2</span><span>3</span><span>4</span></div>
      <div><span>Giá trị ghi sổ</span>${yrs.map(d => `<span>${th(d.cv)}</span>`).join('')}</div>
      <div><span>Tax base</span>${yrs.map(d => `<span>${th(d.tb)}</span>`).join('')}</div>
      <div><span><b>DTL</b></span>${yrs.map(d => `<span><b>${th(d.dtl)}</b></span>`).join('')}</div>
      <div><span>Thuế phải nộp</span>${yrs.map(d => `<span>${th(d.pay)}</span>`).join('')}</div>
      <div><span>Chi phí thuế</span>${yrs.map(d => `<span>${th(d.exp)}</span>`).join('')}</div></div>
      <p class="sd-note">Năm 4: thuế phải nộp 25.000 - DTL đảo ngược 7.500 = chi phí thuế 17.500.</p>`),

    S('Tạm thời hay vĩnh viễn?', `<div class="sd-tbl grid">
      <div class="head"><span></span><span>Tạm thời</span><span>Vĩnh viễn</span></div>
      <div><span>Đảo ngược?</span><span>Có</span><span>Không</span></div>
      <div><span>Tạo DTL/DTA?</span><span>Có</span><span>Không</span></div>
      <div><span>Làm ETR khác luật định?</span><span>Không</span><span>Có</span></div>
      <div><span>Ví dụ</span><span>Khấu hao, bảo hành</span><span>Miễn thuế, tiền phạt, tín dụng thuế</span></div></div>`),

    S('Thuế suất thay đổi', `<div class="sd-steps"><span>① Chênh lệch tạm thời cuối năm 2 = 20.000, DTL = 5.000 (25%)</span><span>② Luật mới: thuế suất 20% → DTL = 20.000 × 20% = <b>4.000</b></span><span>③ DTL giảm 1.000 → <b>chi phí thuế giảm 1.000</b>, lợi nhuận tăng</span></div>
      <div class="sd-cols2"><div class="sd-rule up">Thuế suất giảm <b>DTL lớn được lợi</b></div><div class="sd-rule down">Thuế suất giảm <b>DTA lớn bị thiệt</b></div></div>`),

    S('Valuation allowance', `<div class="sd-cols2">
      <div class="sd-card"><b>US GAAP</b><p>Ghi nhận DTA đầy đủ, trừ allowance nếu <b>more likely than not</b> (&gt; 50%) không dùng được</p></div>
      <div class="sd-card acc"><b>IFRS</b><p>Chỉ ghi nhận phần DTA <b>probable</b> dùng được, không có tài khoản riêng</p></div></div>
      <div class="sd-rule down">Allowance tăng <b>DTA ròng giảm, chi phí thuế tăng, lợi nhuận giảm</b></div>
      <p class="sd-note">Giảm allowance khi kinh doanh không khá hơn → nghi vấn làm đẹp lợi nhuận.</p>`),

    S('DTL: nợ hay vốn chủ?', `<div class="sd-cols3">
      <div class="sd-card"><b>Sẽ đảo ngược</b><p>Coi là <b>nợ</b></p><small>Lý tưởng: theo giá trị hiện tại</small></div>
      <div class="sd-card acc"><b>Không đảo ngược</b><p>Coi là <b>vốn chủ</b></p><small>Công ty tăng trưởng, đầu tư liên tục</small></div>
      <div class="sd-card"><b>Không chắc chắn</b><p><b>Loại</b> khỏi cả hai</p><small>Thiếu thông tin về thời điểm</small></div></div>
      <p class="sd-note">Chuyển DTL sang vốn chủ → D/E giảm. DTA khó thu hồi → loại trừ hoặc chiết khấu.</p>`),

    S('Ba loại thuế suất', `<div class="sd-f sm">ETR = ${frac('Chi phí thuế', 'LNTT')} &nbsp;&nbsp; Cash tax rate = ${frac('Thuế nộp bằng tiền', 'LNTT')}</div>
      <div class="sd-bars">
      <div class="sd-bar"><span class="sd-bar-l">Luật định</span><span class="sd-bar-t"><i style="width:${25 / 30 * 100}%"></i></span><b>25,0%</b></div>
      <div class="sd-bar"><span class="sd-bar-l">Hiệu dụng (42.000 / 200.000)</span><span class="sd-bar-t"><i style="width:${21 / 30 * 100}%"></i></span><b>21,0%</b></div>
      <div class="sd-bar"><span class="sd-bar-l">Tiền mặt (36.000 / 200.000)</span><span class="sd-bar-t"><i style="width:${18 / 30 * 100}%"></i></span><b>18,0%</b></div></div>
      <p class="sd-note">Cash rate &lt; ETR → công ty đang <b>hoãn</b> thuế (DTL ròng tăng).</p>`),

    S('Đối chiếu thuế suất hiệu dụng', `<div class="sd-cols2 wide-left"><div>${waterfall}</div><div>
      <p class="sd-note">LNTT 200.000, thuế suất luật định 25%: miễn thuế 8.000, phạt 4.000, lãi nước ngoài 40.000 chịu 15%, tín dụng thuế 3.000.</p>
      <p class="sd-note">Khoản lặp lại (thuế suất nước ngoài) <b>giữ</b> khi dự báo; khoản một lần (đổi thuế suất, hoàn nhập allowance) <b>loại</b> ra.</p></div></div>`),

    S('IFRS và US GAAP', `<div class="sd-tbl grid">
      <div class="head"><span>Vấn đề</span><span>IFRS</span><span>US GAAP</span></div>
      <div><span>Ghi nhận DTA</span><span>Probable</span><span>Đầy đủ - allowance</span></div>
      <div><span>Thuế suất</span><span>Substantively enacted</span><span>Enacted</span></div>
      <div><span>Đánh giá lại TSCĐ</span><span>Thuế hoãn lại vào OCI</span><span>Không áp dụng</span></div>
      <div><span>Trình bày</span><span>Dài hạn</span><span>Dài hạn</span></div></div>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>Chi phí thuế = phải nộp + ΔDTL - ΔDTA</span><span>Tài sản: ghi sổ &gt; tax base → DTL</span>
      <span>Nợ: ghi sổ &gt; tax base → DTA</span><span>Vĩnh viễn: không DTL/DTA, đổi ETR</span>
      <span>Thuế suất đổi: đánh giá lại ngay</span><span>Allowance tăng → lợi nhuận giảm</span>
      <span>DTL không đảo ngược → vốn chủ</span><span>Cash rate dùng thuế nộp bằng tiền</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 10 câu.</p>`),
  ];

  addDeck('FSA-09', `Slide Income Taxes - bản thiết kế riêng (${slides.length} slide)`, slides);
}());
