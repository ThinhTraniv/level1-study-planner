// Bộ slide tự thiết kế cho FSA-08 Topics in Long-Term Liabilities and Equity.
(function () {
  const L = window.LESSONS && window.LESSONS['FSA-08'];
  if (!L) return;
  const { frac, tl, slide, addDeck } = window.CFAH;
  const K = 'FSA-08 · Long-Term Liabilities and Equity';
  const S = (title, body, opt = {}) => slide(title, body, Object.assign({ kicker: K }, opt));
  const fmt = (x, d = 2) => x.toFixed(d).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  // Bảng nợ thuê: 10.000 cuối mỗi năm, 4 năm, 5%.
  const sched = (() => {
    const r = 0.05, P = 10000;
    let pv = 0; for (let k = 1; k <= 4; k++) pv += P / (1 + r) ** k;
    const dep = pv / 4, rows = [];
    let Lb = pv;
    for (let y = 1; y <= 4; y++) { const i = Lb * r, e = Lb - (P - i); rows.push({ y, b: Lb, i, p: P - i, e: Math.max(0, e), tot: i + dep }); Lb = e; }
    return { pv, dep, rows };
  })();

  // Chi phí mỗi năm: finance (giảm dần) và operating (đều).
  const costBars = (() => {
    const W = 600, H = 250, b = 210, lo = 9000, sc = 0.09;
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv" role="img" aria-label="Chi phí thuê theo năm">`;
    s += `<line x1="40" y1="${b}" x2="580" y2="${b}" class="sv-axis"/>`;
    sched.rows.forEach((r, k) => {
      const x = 90 + k * 135, h1 = (r.tot - lo) * sc + 20, h2 = (10000 - lo) * sc + 20;
      s += `<line x1="${x}" y1="${b}" x2="${x}" y2="${b - h1}" class="sv-down" style="stroke-width:36"/><text x="${x}" y="${b - h1 - 8}" class="sv-txt sv-t-down" style="font-size:13px">${fmt(r.tot, 0)}</text>`;
      s += `<line x1="${x + 42}" y1="${b}" x2="${x + 42}" y2="${b - h2}" class="sv-up" style="stroke-width:36"/><text x="${x + 42}" y="${b - h2 - 8}" class="sv-txt sv-t-up" style="font-size:13px">10.000</text>`;
      s += `<text x="${x + 21}" y="${b + 24}" class="sv-muted">Năm ${r.y}</text>`;
    });
    s += `<text x="580" y="20" class="sv-txt sv-t-down" text-anchor="end">đỏ: IFRS 16 / US GAAP finance</text><text x="580" y="40" class="sv-txt sv-t-up" text-anchor="end">xanh: US GAAP operating</text>`;
    return `${s}</svg>`;
  })();

  const slides = [
    S('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Financial Statement Analysis · FSA-08</div>
      <h2>Topics in Long-Term<br>Liabilities and Equity</h2>
      <p>Thuê tài sản, lương hưu, thù lao bằng cổ phiếu</p>
      <div class="sd-chips"><span>LOS 1 · Leases</span><span>LOS 2 · DC, DB, share-based</span><span>LOS 3 · Trình bày, thuyết minh</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Ba nghĩa vụ "không giống khoản vay"', `<div class="sd-cols3">
      <div class="sd-card"><div class="sd-n">1</div><b>Thuê tài sản</b><p>Quyền sử dụng + nợ thuê</p><small>Bên đi thuê và bên cho thuê</small></div>
      <div class="sd-card"><div class="sd-n">2</div><b>Lương hưu</b><p>DC: đóng là xong. DB: hứa trả trong tương lai</p></div>
      <div class="sd-card acc"><div class="sd-n">3</div><b>Thù lao bằng cổ phiếu</b><p>Không tốn tiền ngay, nhưng là chi phí thật</p></div></div>
      <p class="sd-note">Câu hỏi chung: lớn bao nhiêu, đã lên bảng cân đối chưa, chi phí chảy vào đâu?</p>`),

    S('Thuê tài chính: chỉ cần 1 trong 5', `<div class="sd-check">
      <span>Chuyển quyền sở hữu khi hết hạn</span><span>Quyền mua chắc chắn hợp lý sẽ thực hiện</span>
      <span>Thời hạn = phần lớn thời gian sử dụng</span><span>PV thanh toán ≈ toàn bộ giá trị hợp lý</span>
      <span>Tài sản chuyên biệt cho bên đi thuê</span><span>Không thỏa tiêu chí nào → operating</span></div>
      <p class="sd-note">Vì sao thuê: ít tiền trả trước, chuyển rủi ro lỗi thời và giá trị thanh lý, linh hoạt.</p>`),

    S('IFRS 16 và US GAAP: bên đi thuê', `<div class="sd-tbl grid"><div class="head"><span></span><span>IFRS 16</span><span>US GAAP</span></div>
      <div><span>Mô hình</span><span>một: như thuê tài chính</span><span>hai: finance và operating</span></div>
      <div><span>Lên bảng cân đối?</span><span>có</span><span>có (cả hai loại)</span></div>
      <div><span>Miễn trừ</span><span>≤ 12 tháng, giá trị thấp</span><span>≤ 12 tháng</span></div>
      <div><span>Bên cho thuê</span><span>finance, operating</span><span>sales-type, direct financing, operating</span></div></div>
      <p class="sd-note">Hợp đồng miễn trừ: tiền thuê ghi thành chi phí, không có ROU và nợ thuê.</p>`),

    S('Ghi nhận ban đầu: ROU = nợ thuê = PV', `${tl(4, [{ t: 0, label: 'PV = 35.459,51', cls: 'pv' }, { t: 1, label: '10.000', cls: 'down' }, { t: 2, label: '10.000', cls: 'down' }, { t: 3, label: '10.000', cls: 'down' }, { t: 4, label: '10.000', cls: 'down' }], { h: 140 })}
      <div class="sd-keys"><span>4 <kbd>N</kbd></span><span>5 <kbd>I/Y</kbd></span><span>10000 <kbd>PMT</kbd></span><span>0 <kbd>FV</kbd></span><span><kbd>CPT</kbd> <kbd>PV</kbd> = <b>-35.459,51</b></span></div>
      <p class="sd-note">Chiết khấu bằng lãi suất ngầm định, hoặc lãi suất vay tăng thêm của bên đi thuê.</p>`),

    S('Bảng nợ thuê (IFRS 16)', `<div class="sd-tbl grid"><div class="head"><span>Năm</span><span>Nợ đầu</span><span>Lãi 5%</span><span>Gốc</span><span>Nợ cuối</span><span>Lãi + KH</span></div>
      ${sched.rows.map(r => `<div><span>${r.y}</span><span>${fmt(r.b)}</span><span>${fmt(r.i)}</span><span>${fmt(r.p)}</span><span>${fmt(r.e)}</span><span>${fmt(r.tot)}</span></div>`).join('')}</div>
      <p class="sd-note">Khấu hao ROU = 35.459,51 / 4 = <b>${fmt(sched.dep)}</b>. Gốc ở CFF; lãi ở CFO hoặc CFF (IFRS).</p>`),

    S('Chi phí giảm dần hay đều?', `<div class="sd-cols2 wide-left"><div>${costBars}</div>
      <div><div class="sd-rule down">Finance: khấu hao + lãi → <b>giảm dần</b></div><div class="sd-rule up">US GAAP operating: một chi phí <b>đều</b> 10.000</div>
      <p class="sd-note">Operating: hao mòn ROU = 10.000 - lãi. Năm 1: 8.227,02 → ROU = nợ thuê = 27.232,48. Tổng 4 năm như nhau: 40.000.</p></div></div>`),

    S('Ảnh hưởng lên báo cáo của bên đi thuê', `<div class="sd-tbl grid"><div class="head"><span></span><span>IFRS 16, US GAAP finance</span><span>US GAAP operating</span></div>
      <div><span>EBITDA, EBIT</span><span>cao hơn</span><span>thấp hơn</span></div>
      <div><span>Lợi nhuận ròng năm đầu</span><span>thấp hơn</span><span>cao hơn</span></div>
      <div><span>CFO</span><span>cao hơn</span><span>thấp hơn (toàn bộ ở CFO)</span></div>
      <div><span>CFF</span><span>trả gốc</span><span>không</span></div>
      <div><span>Tài sản, nợ</span><span>như nhau</span><span>như nhau</span></div></div>
      <p class="sd-note">Tổng tiền không đổi. So sánh công ty IFRS và US GAAP: điều chỉnh EBITDA và CFO.</p>`),

    S('Bên cho thuê: cùng hợp đồng, thanh lý 2.000, ghi sổ 30.000', `<div class="sd-cols2">
      <div class="sd-card acc"><b>Finance / sales-type</b><p>Doanh thu = PV thanh toán = 35.459,51</p><p>Giá vốn = 30.000 - ${frac('2.000', '1,05<sup>4</sup>')} = 28.354,60</p><p>Lợi nhuận ngay: <b>7.104,91</b></p><p>Đầu tư thuần 37.104,91 → lãi năm 1: 1.855,25</p></div>
      <div class="sd-card"><b>Operating</b><p>Giữ máy, khấu hao (30.000 - 2.000) / 4 = 7.000</p><p>Doanh thu thuê 10.000/năm</p><p>Lợi nhuận <b>3.000</b>/năm</p><small>Direct financing (chỉ US GAAP): không ghi lợi nhuận ngay</small></div></div>
      <p class="sd-note">Tổng 4 năm: 12.000 cả hai cách. Chỉ khác thời điểm.</p>`),

    S('DC và DB: ai chịu rủi ro?', `<div class="sd-cols2">
      <div class="sd-card"><b>Đóng góp xác định (DC)</b><p>Cam kết <b>đóng</b> bao nhiêu</p><p>Chi phí = số phải đóng</p><p>Nhân viên chịu rủi ro đầu tư</p></div>
      <div class="sd-card acc"><b>Phúc lợi xác định (DB)</b><p>Cam kết <b>trả</b> bao nhiêu</p><p>Funded status = tài sản quỹ - PBO</p><p>Công ty chịu rủi ro</p></div></div>
      <div class="sd-f sm">PBO cuối = PBO đầu + chi phí dịch vụ + chi phí lãi ± lãi lỗ actuarial - phúc lợi đã trả</div>`),

    S('Chi phí DB: IFRS và US GAAP', `<div class="sd-tbl grid"><div class="head"><span>Cấu phần</span><span>IFRS</span><span>US GAAP</span></div>
      <div><span>Dịch vụ hiện tại</span><span>lãi lỗ</span><span>lãi lỗ</span></div>
      <div><span>Dịch vụ quá khứ</span><span>lãi lỗ ngay</span><span>OCI, phân bổ dần</span></div>
      <div><span>Lãi</span><span>lãi thuần × nợ thuần</span><span>lãi PBO - lợi suất kỳ vọng</span></div>
      <div><span>Đánh giá lại</span><span>OCI, không chuyển</span><span>OCI, có thể phân bổ</span></div></div>
      <p class="sd-note">Lãi suất chiết khấu ↑ → PBO ↓. Tăng lương ↑ → PBO ↑. US GAAP: lợi suất kỳ vọng ↑ → chi phí ↓.</p>`),

    S('Ví dụ DB: PBO 10.000, tài sản 8.500', `<div class="sd-cols2">
      <div class="sd-card"><b>IFRS</b><p>Lãi lỗ = 600 + 5% × 1.500 = <b>675</b></p><p>OCI = -200 + (700 - 425) = <b>+75</b></p></div>
      <div class="sd-card acc"><b>US GAAP</b><p>Lãi lỗ = 600 + 500 - 595 = <b>505</b></p><p>OCI = -200 + (700 - 595) = <b>-95</b></p></div></div>
      <div class="sd-f sm">Tổng chi phí = đóng góp - Δfunded status = 900 - (-1.200 + 1.500) = <b>600</b></div>
      <p class="sd-note">Cuối năm: PBO 10.900, tài sản 9.700. Tổng như nhau; chỉ khác cách chia lãi lỗ và OCI.</p>`),

    S('Thù lao bằng cổ phiếu', `<div class="sd-big">Giá trị hợp lý ngày cấp ÷ thời gian hưởng quyền</div>
      <div class="sd-cols3"><div class="sd-card"><b>Cổ phiếu thưởng</b><p>Giá thị trường ngày cấp</p></div><div class="sd-card acc"><b>Quyền chọn</b><p>Mô hình quyền chọn; không định lại</p><small>100.000 × 6 / 4 = <b>150.000</b>/năm</small></div><div class="sd-card"><b>SARs, phantom</b><p>Trả tiền → nợ phải trả, định lại mỗi kỳ</p></div></div>
      <p class="sd-note">Biến động, thời gian, lãi suất phi rủi ro ↑ → chi phí ↑. Tỷ suất cổ tức ↑ → chi phí ↓.</p>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>ROU = nợ thuê = PV thanh toán</span><span>IFRS 16: một mô hình, gốc ở CFF</span>
      <span>US GAAP operating: chi phí đều, toàn bộ CFO</span><span>Sales-type: lợi nhuận ghi ngay</span>
      <span>DC: chi phí = đóng góp</span><span>Funded status = tài sản quỹ - PBO</span>
      <span>IFRS: lãi thuần; đánh giá lại vào OCI</span><span>Quyền chọn: giá trị ngày cấp / vesting</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 10 câu, mục tiêu ≥ 7 câu đúng.</p>`),
  ];

  addDeck('FSA-08', `Slide Long-Term Liabilities - bản thiết kế riêng (${slides.length} slide)`, slides);
}());
