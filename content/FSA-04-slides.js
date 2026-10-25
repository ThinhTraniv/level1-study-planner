// Bộ slide tự thiết kế cho FSA-04 Analyzing Statements of Cash Flows I.
(function () {
  const L = window.LESSONS && window.LESSONS['FSA-04'];
  if (!L) return;
  const { slide, addDeck } = window.CFAH;
  const K = 'FSA-04 · Statements of Cash Flows I';
  const S = (title, body, opt = {}) => slide(title, body, Object.assign({ kicker: K }, opt));
  const vn = x => String(Math.abs(x)).replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  // Biểu đồ thác nước. items: [[nhãn, giá trị, 'total'|undefined]]
  function waterfall(items, opt) {
    const W = 600, H = opt.h || 270, tp = 30, b = H - 50, lo = opt.lo, hi = opt.hi;
    const Y = v => b - ((v - lo) / (hi - lo)) * (b - tp);
    const n = items.length, gap = 540 / n, bw = Math.min(64, gap - 10);
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv" role="img" aria-label="${opt.label}">`;
    s += `<line x1="30" y1="${Y(Math.max(lo, 0))}" x2="580" y2="${Y(Math.max(lo, 0))}" class="sv-axis"/>`;
    let run = 0;
    items.forEach(([lab, v, kind], i) => {
      const x = 40 + i * gap + (gap - bw) / 2;
      let a, c, cls, txt;
      if (kind === 'total') { a = Math.max(lo, 0); c = v; run = v; cls = 'sv-key'; txt = vn(v); }
      else { a = run; c = run + v; run = c; cls = v >= 0 ? 'sv-node up' : 'sv-node down'; txt = (v >= 0 ? '+' : '-') + vn(v); }
      const top = Math.min(Y(a), Y(c)), h = Math.max(2, Math.abs(Y(a) - Y(c)));
      s += `<rect x="${x}" y="${top}" width="${bw}" height="${h}" rx="3" class="${cls}"/>`;
      s += `<text x="${x + bw / 2}" y="${top - 8}" class="sv-txt ${kind === 'total' ? '' : v >= 0 ? 'sv-t-up' : 'sv-t-down'}" style="font-size:15px">${txt}</text>`;
      s += `<text x="${x + bw / 2}" y="${b + 20 + (n > 6 ? (i % 2) * 18 : 0)}" class="sv-muted" style="font-size:14px">${lab}</text>`;
    });
    return `${s}</svg>`;
  }

  const cashBridge = waterfall([['Tiền 20X6', 50, 'total'], ['CFO', 387], ['CFI', -180], ['CFF', -50], ['Tiền 20X7', 207, 'total']], { lo: 0, hi: 450, label: 'Cầu nối tiền đầu kỳ và cuối kỳ' });
  const indirectBridge = waterfall([['LN ròng', 300, 'total'], ['Khấu hao', 90], ['Lãi bán TS', -10], ['Phải thu', -50], ['Tồn kho', 30], ['Trả trước', -5], ['Phải trả', 20], ['Nợ khác', -8], ['DT chưa TH', 20], ['CFO', 387, 'total']], { lo: 250, hi: 410, h: 280, label: 'Từ lợi nhuận ròng đến CFO' });

  const bars = (rows, max) => `<div class="sd-bars">${rows.map(([lab, v]) => `<div class="sd-bar"><span class="sd-bar-l">${lab}</span><span class="sd-bar-t"><i style="width:${(Math.abs(v) / max) * 100}%"></i></span><b>${v < 0 ? '-' : ''}${vn(v)}</b></div>`).join('')}</div>`;

  const slides = [
    S('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Financial Statement Analysis · FSA-04</div>
      <h2>Analyzing Statements<br>of Cash Flows I</h2>
      <p>Lợi nhuận là ý kiến, tiền mặt là sự thật</p>
      <div class="sd-chips"><span>LOS 1 · Liên kết 3 báo cáo</span><span>LOS 2 · Trực tiếp và gián tiếp</span><span>LOS 3 · Gián tiếp sang trực tiếp</span><span>LOS 4 · IFRS và US GAAP</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Ba nhóm dòng tiền', `<div class="sd-cols3">
      <div class="sd-card"><b>CFO</b><p>Thu khách hàng, trả nhà cung cấp, nhân viên, thuế</p><small>Chứng khoán kinh doanh cũng ở đây</small></div>
      <div class="sd-card"><b>CFI</b><p>Mua bán TSCĐ, đầu tư, cho vay, mua công ty</p></div>
      <div class="sd-card acc"><b>CFF</b><p>Vay, trả nợ gốc, phát hành, mua lại cổ phiếu, cổ tức</p></div></div>
      <p class="sd-note">Mua tài sản bằng phát hành nợ: <b>không bằng tiền</b>, chỉ thuyết minh.</p>`),

    S('Cầu nối hai bảng cân đối', `<div class="sd-cols2 wide-left"><div>${cashBridge}</div><div><div class="sd-rule up">CFO + 387</div><div class="sd-rule down">CFI - 180 · CFF - 50</div><p class="sd-note">Công ty Minh An: 387 - 180 - 50 = <b>157</b> = 207 - 50.</p></div></div>`),

    S('Tài khoản chữ T', `<div class="sd-big">Đầu kỳ + Tăng - Giảm = Cuối kỳ</div>
      <div class="sd-cols2"><div class="sd-card"><b>Phải thu</b><p>180 + doanh thu 2.000 - tiền thu ? = 230</p><p>Tiền thu (trước DT chưa TH) = <b>1.950</b></p></div>
      <div class="sd-card acc"><b>Lợi nhuận giữ lại</b><p>80 + LN ròng 300 - cổ tức ? = 260</p><p>Cổ tức = <b>120</b></p></div></div>`),

    S('Phương pháp trực tiếp: công thức', `<div class="sd-tbl grid">
      <div class="head"><span>Dòng</span><span>Công thức</span></div>
      <div><span>Thu khách hàng</span><span>Doanh thu - Δ phải thu + Δ DT chưa thực hiện</span></div>
      <div><span>Trả nhà cung cấp</span><span>Giá vốn + Δ tồn kho - Δ phải trả</span></div>
      <div><span>Trả nhân viên</span><span>Chi phí lương - Δ lương phải trả</span></div>
      <div><span>Trả lãi</span><span>Chi phí lãi - Δ lãi phải trả</span></div>
      <div><span>Nộp thuế</span><span>Chi phí thuế - Δ thuế phải nộp - Δ thuế hoãn lại phải trả</span></div></div>
      <p class="sd-note">Không có khấu hao, không có lãi bán tài sản.</p>`),

    S('Minh An theo phương pháp trực tiếp', `<div class="sd-cols2 wide-left"><div>${bars([['Thu khách hàng', 1970], ['Trả NCC', -1150], ['Trả nhân viên', -225], ['Chi phí khác', -65], ['Trả lãi', -38], ['Nộp thuế', -105]], 2000)}</div>
      <div class="sd-card acc"><b>CFO = 387</b><p>Thấy rõ <b>nguồn thu chi</b> cụ thể</p><small>IFRS và US GAAP đều khuyến khích</small></div></div>`),

    S('Mẹo dấu vốn lưu động', `<div class="sd-cols2">
      <div><div class="sd-rule down">TS ngắn hạn tăng: tiền bị giữ lại</div><div class="sd-rule up">TS ngắn hạn giảm: tiền được giải phóng</div></div>
      <div><div class="sd-rule up">Nợ ngắn hạn tăng: chưa phải trả</div><div class="sd-rule down">Nợ ngắn hạn giảm: đã trả nhiều hơn chi phí</div></div></div>
      <p class="sd-note">Giá vốn 3.000, tồn kho +80, phải trả +60: trả NCC = 3.000 + 80 - 60 = <b>3.020</b>.</p>`),

    S('Phương pháp gián tiếp: từ 300 đến 387', `<div class="sd-cols2 wide-left"><div>${indirectBridge}</div><div><p class="sd-note">Nợ khác: lương phải trả -5, lãi phải trả +2, thuế phải nộp -5. </p><div class="sd-rule up">Kết quả luôn bằng phương pháp trực tiếp: 387</div></div></div>`),

    S('Bốn bẫy của phương pháp gián tiếp', `<div class="sd-grid4">
      <div class="sd-card"><b>Lãi bán tài sản</b><p>Trừ đi, không cộng</p></div>
      <div class="sd-card"><b>Dấu vốn lưu động</b><p>TS tăng trừ, nợ tăng cộng</p></div>
      <div class="sd-card"><b>Vay ngắn hạn, cổ tức phải trả</b><p>Thuộc CFF, không vào CFO</p></div>
      <div class="sd-card acc"><b>Không bằng tiền khác</b><p>Lãi CK kinh doanh chưa TH: trừ · thuế hoãn lại tăng: cộng</p></div></div>`),

    S('CFI: dựng lại tài sản cố định', `<div class="sd-steps"><span>① Nguyên giá: 1.000 + capex - 100 = 1.150 → capex 250</span><span>② KH lũy kế: 300 + 90 - 40 = 350 (khớp)</span><span>③ Giá trị còn lại TS bán: 100 - 40 = 60</span><span>④ Tiền bán = 60 + lãi 10 = 70</span></div>
      <p class="sd-note">CFI = -250 + 70 = <b>-180</b>.</p>`),

    S('CFF: chủ nợ và chủ sở hữu', `<div class="sd-cols2">
      <div class="sd-card"><b>Nợ vay</b><p>Vay mới +100</p><p>Trả gốc -50</p></div>
      <div class="sd-card acc"><b>Vốn chủ</b><p>Phát hành +20</p><p>Cổ tức -120</p><small>Đã trả = công bố - Δ cổ tức phải trả</small></div></div>
      <p class="sd-note">CFF = 100 - 50 + 20 - 120 = <b>-50</b>.</p>`),

    S('Gián tiếp sang trực tiếp', `<div class="sd-tbl grid">
      <div class="head"><span>Khoản BCKQKD</span><span>+ Dòng điều chỉnh</span><span>= Trực tiếp</span></div>
      <div><span>Doanh thu 2.000</span><span>-50, +20</span><span>1.970</span></div>
      <div><span>Giá vốn -1.200</span><span>+30, +20</span><span>-1.150</span></div>
      <div><span>Chi phí thuế -100</span><span>-5</span><span>-105</span></div>
      <div><span>Khấu hao -90, lãi +10</span><span>+90, -10</span><span>0</span></div></div>
      <p class="sd-note">Chi phí mang dấu âm, cộng <b>nguyên dấu</b> dòng điều chỉnh từ báo cáo gián tiếp.</p>`),

    S('IFRS và US GAAP', `<div class="sd-tbl grid">
      <div class="head"><span>Khoản</span><span>IFRS (IAS 7)</span><span>US GAAP</span></div>
      <div><span>Lãi, cổ tức nhận</span><span>CFO hoặc CFI</span><span>CFO</span></div>
      <div><span>Lãi vay trả</span><span>CFO hoặc CFF</span><span>CFO</span></div>
      <div><span>Cổ tức trả</span><span>CFO hoặc CFF</span><span>CFF</span></div>
      <div><span>Thuế</span><span>CFO, trừ khi gắn với CFI, CFF</span><span>CFO</span></div>
      <div><span>Thấu chi</span><span>Có thể là tiền</span><span>Khoản vay, CFF</span></div></div>
      <p class="sd-note">US GAAP dùng trực tiếp: phải kèm bảng đối chiếu lợi nhuận ròng với CFO.</p>`),

    S('Cùng công ty, bốn con số CFO', `<div class="sd-cols2 wide-left"><div>${bars([['US GAAP', 387], ['IFRS: lãi trả vào CFF', 425], ['IFRS: cổ tức vào CFO', 267], ['IFRS: cả hai', 305]], 450)}</div>
      <div><div class="sd-rule">Tổng thay đổi tiền vẫn là 157</div><div class="sd-rule down">So sánh CFO: đưa về cùng phân loại</div><p class="sd-note">IFRS 18 (từ 2027): nhận vào CFI, trả vào CFF, gián tiếp bắt đầu từ LN hoạt động.</p></div></div>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>CFO + CFI + CFF = Δ tiền</span><span>Thu KH = DT - Δ phải thu + Δ DT chưa TH</span>
      <span>Trả NCC = giá vốn + Δ tồn kho - Δ phải trả</span><span>Gián tiếp: + khấu hao, - lãi bán TS</span>
      <span>TS ngắn hạn tăng: trừ</span><span>Tiền bán TS = giá trị còn lại + lãi</span>
      <span>US GAAP: chỉ cổ tức trả ở CFF</span><span>IFRS: nhận CFO/CFI, trả CFO/CFF</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 10 câu, mục tiêu ≥ 7 câu đúng.</p>`),
  ];

  addDeck('FSA-04', `Slide Cash Flows I - bản thiết kế riêng (${slides.length} slide)`, slides);
}());
