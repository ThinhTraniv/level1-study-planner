// Bộ slide tự thiết kế cho FSA-11 Financial Analysis Techniques.
(function () {
  const L = window.LESSONS && window.LESSONS['FSA-11'];
  if (!L) return;
  const { frac, slide, addDeck } = window.CFAH;
  const K = 'FSA-11 · Analysis Techniques';
  const S = (title, body, opt = {}) => slide(title, body, Object.assign({ kicker: K }, opt));
  const fmt = (x, d = 2) => x.toFixed(d).replace('.', ',');

  // Bộ số liệu chung (triệu).
  const D = { rev: 5000, cogs: 3000, gp: 2000, sga: 1200, ebit: 800, int: 100, ebt: 700, ni: 525, inv: [600, 650], ar: [500, 600], ap: [350, 400], ta: [4000, 4500], eq: [2200, 2500] };
  const avg = a => (a[0] + a[1]) / 2;
  const doh = 365 / (D.cogs / avg(D.inv));
  const dso = 365 / (D.rev / avg(D.ar));
  const dpo = 365 / ((D.cogs + D.inv[1] - D.inv[0]) / avg(D.ap));
  const ccc = doh + dso - dpo;
  const at = D.rev / avg(D.ta), lev = avg(D.ta) / avg(D.eq), npm = D.ni / D.rev;
  const tb = D.ni / D.ebt, ib = D.ebt / D.ebit, em = D.ebit / D.rev;
  const roe = npm * at * lev;

  // Trục thời gian chu kỳ chuyển đổi tiền.
  const cccLine = (() => {
    const W = 600, l = 30, r = 570, max = 120;
    const X = d => l + (d / max) * (r - l);
    let s = `<svg viewBox="0 0 ${W} 230" class="sv" role="img" aria-label="Chu kỳ chuyển đổi tiền">`;
    s += `<rect x="${X(0)}" y="40" width="${X(doh) - X(0)}" height="34" rx="6" class="sv-node"/><text x="${(X(0) + X(doh)) / 2}" y="63" class="sv-txt">DOH ${fmt(doh, 1)}</text>`;
    s += `<rect x="${X(doh)}" y="40" width="${X(doh + dso) - X(doh)}" height="34" rx="6" class="sv-node up"/><text x="${(X(doh) + X(doh + dso)) / 2}" y="63" class="sv-txt">DSO ${fmt(dso, 1)}</text>`;
    s += `<rect x="${X(0)}" y="96" width="${X(dpo) - X(0)}" height="34" rx="6" class="sv-node down"/><text x="${(X(0) + X(dpo)) / 2}" y="119" class="sv-txt">DPO ${fmt(dpo, 1)}</text>`;
    s += `<line x1="${X(dpo)}" y1="160" x2="${X(doh + dso)}" y2="160" class="sv-pv"/><line x1="${X(dpo)}" y1="150" x2="${X(dpo)}" y2="170" class="sv-pv"/><line x1="${X(doh + dso)}" y1="150" x2="${X(doh + dso)}" y2="170" class="sv-pv"/>`;
    s += `<text x="${(X(dpo) + X(doh + dso)) / 2}" y="190" class="sv-txt sv-t-pv">CCC = ${fmt(ccc, 1)} ngày</text>`;
    s += `<text x="${X(0)}" y="28" class="sv-muted" text-anchor="start">mua hàng</text><text x="${X(doh)}" y="28" class="sv-muted">bán hàng</text><text x="${X(doh + dso)}" y="28" class="sv-muted" text-anchor="end">thu tiền</text>`;
    s += `<text x="${X(dpo)}" y="146" class="sv-muted" text-anchor="start">trả nhà cung cấp</text>`;
    s += `<text x="300" y="222" class="sv-muted">Tiền bị "giam" từ lúc trả nhà cung cấp đến lúc thu tiền khách hàng</text>`;
    return `${s}</svg>`;
  })();

  // Cây DuPont 3 thành phần.
  const tree = `<svg viewBox="0 0 600 250" class="sv big" role="img" aria-label="Cây DuPont">
    <rect x="220" y="10" width="160" height="52" rx="10" class="sv-node up"/><text x="300" y="44" class="sv-txt">ROE ${fmt(roe * 100)}%</text>
    <rect x="70" y="100" width="200" height="52" rx="10" class="sv-node"/><text x="170" y="134" class="sv-txt">ROA ${fmt(npm * at * 100)}%</text>
    <rect x="370" y="100" width="180" height="52" rx="10" class="sv-node"/><text x="460" y="134" class="sv-txt">Đòn bẩy ${fmt(lev, 4)}</text>
    <rect x="10" y="190" width="170" height="52" rx="10" class="sv-panel"/><text x="95" y="224" class="sv-txt">Biên LN ${fmt(npm * 100, 1)}%</text>
    <rect x="200" y="190" width="170" height="52" rx="10" class="sv-panel"/><text x="285" y="224" class="sv-txt">Vòng quay ${fmt(at, 4)}</text>
    <line x1="300" y1="62" x2="170" y2="100" class="sv-axis"/><line x1="300" y1="62" x2="460" y2="100" class="sv-axis"/>
    <line x1="170" y1="152" x2="95" y2="190" class="sv-axis"/><line x1="170" y1="152" x2="285" y2="190" class="sv-axis"/></svg>`;

  // Biên lợi nhuận từ doanh thu xuống lợi nhuận ròng.
  const margins = `<div class="sd-bars">${[['Doanh thu', 100], ['Lợi nhuận gộp', 40], ['EBIT', 16], ['Lợi nhuận trước thuế', 14], ['Lợi nhuận ròng', 10.5]].map(([l, v]) => `<div class="sd-bar"><span class="sd-bar-l">${l}</span><span class="sd-bar-t"><i style="width:${v}%"></i></span><b>${fmt(v, 1)}%</b></div>`).join('')}</div>`;

  const slides = [
    S('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Financial Statement Analysis · FSA-11</div>
      <h2>Financial Analysis Techniques</h2>
      <p>Tỷ số · Common-size · DuPont · Dự báo</p>
      <div class="sd-chips"><span>LOS 1 · Công cụ và giới hạn</span><span>LOS 2-3 · Các nhóm tỷ số</span><span>LOS 4 · DuPont</span><span>LOS 5-6 · Ngành và dự báo</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Tỷ số chỉ có nghĩa khi so sánh', `<div class="sd-cols2">
      <div class="sd-card"><b>Time-series</b><p>Với chính công ty qua nhiều năm</p><small>Xu hướng tốt lên hay xấu đi?</small></div>
      <div class="sd-card acc"><b>Cross-sectional</b><p>Với đối thủ, trung bình ngành</p><small>Hơn hay kém đối thủ?</small></div></div>
      <div class="sd-steps"><span>Mục đích → dữ liệu → xử lý → <b>diễn giải</b> → kết luận → theo dõi</span></div>`),

    S('Common-size theo chiều dọc', `<div class="sd-tbl grid">
      <div class="head"><span>% tổng tài sản</span><span>Năm 1</span><span>Năm 2</span></div>
      <div><span>Tiền</span><span>5,0%</span><span>5,6%</span></div>
      <div><span>Phải thu</span><span>12,5%</span><span>13,3%</span></div>
      <div><span>Hàng tồn kho</span><span>15,0%</span><span>14,4%</span></div>
      <div><span>TSCĐ ròng</span><span>67,5%</span><span>66,7%</span></div>
      <div><span>Vay ngắn hạn</span><span>6,3%</span><span>4,4%</span></div>
      <div><span>Vốn chủ</span><span>55,0%</span><span>55,6%</span></div></div>
      <p class="sd-note">Báo cáo KQKD chia cho doanh thu: biên gộp 38,9% → <b>40,0%</b>. Theo chiều ngang: chia cho năm gốc.</p>`),

    S('Bốn nhóm tỷ số chính', `<div class="sd-grid4">
      <div class="sd-card"><b>Hoạt động</b><p>Dùng tài sản hiệu quả đến đâu?</p></div>
      <div class="sd-card"><b>Thanh khoản</b><p>Trả được nợ ngắn hạn không?</p></div>
      <div class="sd-card"><b>Solvency</b><p>Trả được nợ dài hạn không?</p></div>
      <div class="sd-card acc"><b>Sinh lời</b><p>Lãi bao nhiêu trên doanh thu, tài sản, vốn?</p></div></div>
      <p class="sd-note">Thêm: tỷ số <b>định giá</b> (P/E, P/B...) và tỷ số <b>đặc thù ngành</b>.</p>`),

    S('Tỷ số hoạt động', `<div class="sd-tbl grid">
      <div class="head"><span>Vòng quay</span><span>Tử số</span><span>Kết quả</span><span>Số ngày</span></div>
      <div><span>Hàng tồn kho</span><span>Giá vốn</span><span>4,80</span><span>${fmt(doh, 1)}</span></div>
      <div><span>Phải thu</span><span>Doanh thu</span><span>9,09</span><span>${fmt(dso, 1)}</span></div>
      <div><span>Phải trả</span><span>Mua hàng</span><span>8,13</span><span>${fmt(dpo, 1)}</span></div>
      <div><span>TSCĐ</span><span>Doanh thu</span><span>1,75</span><span></span></div>
      <div><span>Tổng tài sản</span><span>Doanh thu</span><span>1,18</span><span></span></div></div>
      <p class="sd-note">Mẫu số dùng số dư <b>bình quân</b>. Mua hàng = giá vốn + Δ tồn kho = 3.050.</p>`),

    S('Chu kỳ chuyển đổi tiền', `<div class="sd-cols2 wide-left"><div>${cccLine}</div><div>
      <div class="sd-f sm">CCC = DOH + DSO - DPO</div>
      <p class="sd-note">${fmt(doh, 1)} + ${fmt(dso, 1)} - ${fmt(dpo, 1)} = <b>${fmt(ccc, 1)} ngày</b>.</p>
      <p class="sd-note">CCC <b>ngắn</b> là tốt: ít vốn lưu động bị giam hơn.</p></div></div>`),

    S('Tỷ số thanh khoản', `<div class="sd-tbl grid">
      <div class="head"><span>Tỷ số</span><span>Tử số</span><span>Năm 2</span></div>
      <div><span>Current</span><span>Tài sản ngắn hạn</span><span>2,50</span></div>
      <div><span>Quick</span><span>Tiền + CK + phải thu</span><span>1,42</span></div>
      <div><span>Cash</span><span>Tiền + CK</span><span>0,42</span></div>
      <div><span>Defensive interval</span><span>Tiền + CK + phải thu</span><span>79,6 ngày</span></div></div>
      <p class="sd-note">Mẫu số: nợ ngắn hạn 600; defensive interval chia cho chi tiêu tiền mặt mỗi ngày (10,68). Quick <b>loại hàng tồn kho</b>.</p>`),

    S('Tỷ số solvency', `<div class="sd-tbl grid">
      <div class="head"><span>Tỷ số</span><span>Công thức</span><span>Năm 2</span></div>
      <div><span>Nợ / tài sản</span><span>1.600 / 4.500</span><span>35,6%</span></div>
      <div><span>Nợ / vốn</span><span>1.600 / 4.100</span><span>39,0%</span></div>
      <div><span>Nợ / vốn chủ</span><span>1.600 / 2.500</span><span>0,64</span></div>
      <div><span>Đòn bẩy tài chính</span><span>4.250 / 2.350</span><span>1,81</span></div>
      <div><span>Trả lãi</span><span>800 / 100</span><span>8,0 lần</span></div></div>
      <p class="sd-note">"Nợ" là <b>nợ chịu lãi</b> (vay + nợ thuê), không phải tổng nợ phải trả.</p>`),

    S('Biên lợi nhuận', `${margins}
      <p class="sd-note">Biên gộp: sức mạnh định giá và chi phí sản xuất. Biên EBIT: thêm kiểm soát chi phí bán hàng, quản lý.</p>`),

    S('Tỷ suất trên vốn đầu tư', `<div class="sd-tbl grid">
      <div class="head"><span>Tỷ số</span><span>Công thức</span><span>Kết quả</span></div>
      <div><span>ROA</span><span>525 / 4.250</span><span>12,4%</span></div>
      <div><span>ROA hoạt động</span><span>800 / 4.250</span><span>18,8%</span></div>
      <div><span>Trên tổng vốn</span><span>800 / 3.875</span><span>20,6%</span></div>
      <div><span>ROE</span><span>525 / 2.350</span><span>22,3%</span></div></div>
      <p class="sd-note">Mẫu số là số <b>bình quân</b>. ROE cổ đông thường: trừ cổ tức ưu đãi ở tử số.</p>`),

    S('DuPont 3 thành phần', `<div class="sd-cols2 wide-left"><div>${tree}</div><div>
      <div class="sd-f sm">ROE = ${frac('NI', 'DT')} × ${frac('DT', 'TS BQ')} × ${frac('TS BQ', 'VCSH BQ')}</div>
      <p class="sd-note">${fmt(npm * 100, 1)}% × ${fmt(at, 4)} × ${fmt(lev, 4)} = <b>${fmt(roe * 100)}%</b></p>
      <p class="sd-note">Lãi bao nhiêu × dùng tài sản ra sao × vay bao nhiêu.</p></div></div>`),

    S('DuPont 5 thành phần', `<div class="sd-f sm">ROE = ${frac('NI', 'EBT')} × ${frac('EBT', 'EBIT')} × ${frac('EBIT', 'Doanh thu')} × ${frac('Doanh thu', 'TS BQ')} × ${frac('TS BQ', 'VCSH BQ')}</div>
      <div class="sd-tbl grid">
      <div class="head"><span>Thuế</span><span>Lãi vay</span><span>Biên EBIT</span><span>Vòng quay</span><span>Đòn bẩy</span><span>ROE</span></div>
      <div><span>${fmt(tb)}</span><span>${fmt(ib, 3)}</span><span>${fmt(em * 100, 1)}%</span><span>${fmt(at, 4)}</span><span>${fmt(lev, 4)}</span><span><b>${fmt(tb * ib * em * at * lev * 100)}%</b></span></div></div>
      <p class="sd-note">Gánh nặng thuế và lãi vay: <b>gần 1 là tốt</b>. Thuế suất tăng → tax burden giảm.</p>`),

    S('Cùng ROE, khác chất lượng', `<div class="sd-tbl grid">
      <div class="head"><span></span><span>Biên LN</span><span>Vòng quay</span><span>ROA</span><span>Đòn bẩy</span><span>ROE</span></div>
      <div><span>Công ty A</span><span>10,5%</span><span>1,18</span><span>12,35%</span><span>1,81</span><span>22,34%</span></div>
      <div><span>Đối thủ B</span><span>6,0%</span><span>1,50</span><span>9,00%</span><span>2,50</span><span>22,50%</span></div></div>
      <div class="sd-cols2"><div class="sd-rule up">A: ROE từ <b>hoạt động</b></div><div class="sd-rule down">B: ROE từ <b>vay nợ</b></div></div>`),

    S('Đòn bẩy: con dao hai lưỡi', `<div class="sd-steps"><span>Vay thêm mua lại cổ phiếu: đòn bẩy 1,81 → <b>2,20</b></span><span>Lãi vay tăng: gánh nặng lãi vay 0,875 → <b>0,80</b></span><span>ROE = 0,75 × 0,80 × 16% × 1,1765 × 2,20 = <b>24,85%</b></span></div>
      <div class="sd-cols2"><div class="sd-rule up">ROA hoạt động &gt; lãi vay <b>ROE tăng</b></div><div class="sd-rule down">ROA hoạt động &lt; lãi vay <b>ROE giảm</b></div></div>`),

    S('Định giá và tăng trưởng bền vững', `<div class="sd-grid4">
      <div class="sd-card"><b>P/E = 12,0</b><p>Giá 63 / EPS 5,25</p></div>
      <div class="sd-card"><b>P/B = 2,52</b><p>Giá 63 / BVPS 25</p></div>
      <div class="sd-card"><b>Payout = 40%</b><p>Cổ tức 2,10 / EPS 5,25</p></div>
      <div class="sd-card acc"><b>g = 13,4%</b><p>b × ROE = 60% × 22,34%</p></div></div>
      <p class="sd-note">Thêm: P/CF = 9,0; P/S = 1,26.</p>`),

    S('Tỷ số ngành và phân tích bộ phận', `<div class="sd-cols2">
      <div class="sd-card"><b>Đặc thù ngành</b><p>Ngân hàng: an toàn vốn, biên lãi ròng</p><p>Bán lẻ: same-store sales, doanh thu / m²</p><p>Khách sạn: tỷ lệ lấp đầy, giá phòng</p><p>Dịch vụ: doanh thu / nhân viên</p></div>
      <div class="sd-card acc"><b>Bộ phận</b><p>X: biên 15,0%, LN / tài sản <b>22,5%</b></p><p>Y: biên 17,5%, LN / tài sản <b>14,0%</b></p><small>Y biên cao hơn nhưng dùng nhiều tài sản hơn</small></div></div>`),

    S('Dự báo: ba cách đo bất định', `<div class="sd-cols3">
      <div class="sd-card"><b>Độ nhạy</b><p>Đổi <b>một</b> biến</p><small>Biên 9,5% / 10,5% / 11,5% → LN 513 / 567 / 621</small></div>
      <div class="sd-card acc"><b>Kịch bản</b><p>Đổi <b>nhiều</b> biến cùng lúc</p><small>Tốt, cơ sở, xấu theo một câu chuyện nhất quán</small></div>
      <div class="sd-card"><b>Mô phỏng</b><p>Phân phối cho mỗi đầu vào</p><small>Chạy hàng nghìn lần → phân phối kết quả</small></div></div>
      <p class="sd-note">Doanh thu năm 3 = 5.000 × 1,08 = 5.400. Mô hình chi tiết: FSA-12.</p>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>Dòng chảy / số dư → dùng bình quân</span><span>Tồn kho: giá vốn; phải trả: mua hàng</span>
      <span>CCC = DOH + DSO - DPO</span><span>Quick loại hàng tồn kho</span>
      <span>Solvency dùng nợ chịu lãi</span><span>ROE = biên × vòng quay × đòn bẩy</span>
      <span>Tax, interest burden gần 1 là tốt</span><span>g = b × ROE</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 10 câu.</p>`),
  ];

  addDeck('FSA-11', `Slide Analysis Techniques - bản thiết kế riêng (${slides.length} slide)`, slides);
}());
