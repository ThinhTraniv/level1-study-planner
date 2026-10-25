// Bộ slide tự thiết kế cho EC-03 Fiscal Policy.
(function () {
  const L = window.LESSONS && window.LESSONS['EC-03'];
  if (!L) return;
  const { frac, slide, addDeck } = window.CFAH;
  const K = 'EC-03 · Fiscal Policy';
  const S = (title, body, opt = {}) => slide(title, body, Object.assign({ kicker: K }, opt));
  const fmt = (x, d = 2) => x.toFixed(d).replace('.', ',');

  // Đường đi của tỷ lệ nợ/GDP trong 10 năm (cán cân sơ cấp = 0), xuất phát 60%.
  function debtPaths() {
    const W = 600, H = 300, l = 54, r = 500, t = 20, b = 250, lo = 50, hi = 80;
    const X = n => l + (n / 10) * (r - l), Y = v => b - ((v - lo) / (hi - lo)) * (b - t);
    const path = (rr, g) => Array.from({ length: 11 }, (_, n) => 60 * ((1 + rr) / (1 + g)) ** n);
    const up = path(0.04, 0.015), dn = path(0.02, 0.03);
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv big" role="img" aria-label="Tỷ lệ nợ/GDP khi r lớn hơn và nhỏ hơn g">`;
    [50, 60, 70, 80].forEach(v => { s += `<line x1="${l}" y1="${Y(v)}" x2="${r}" y2="${Y(v)}" class="sv-grid"/><text x="${l - 8}" y="${Y(v) + 6}" class="sv-muted" text-anchor="end">${v}%</text>`; });
    [0, 5, 10].forEach(n => { s += `<text x="${X(n)}" y="${b + 26}" class="sv-muted">năm ${n}</text>`; });
    s += `<line x1="${l}" y1="${b}" x2="${r}" y2="${b}" class="sv-axis"/><line x1="${l}" y1="${t}" x2="${l}" y2="${b}" class="sv-axis"/>`;
    s += `<polyline points="${up.map((v, n) => `${X(n).toFixed(1)},${Y(v).toFixed(1)}`).join(' ')}" class="sv-down" fill="none"/>`;
    s += `<polyline points="${dn.map((v, n) => `${X(n).toFixed(1)},${Y(v).toFixed(1)}`).join(' ')}" class="sv-up" fill="none"/>`;
    s += `<text x="${X(10) + 8}" y="${Y(up[10]) + 6}" class="sv-txt sv-t-down" text-anchor="start">${fmt(up[10], 1)}%</text><text x="${X(10) + 8}" y="${Y(dn[10]) + 6}" class="sv-txt sv-t-up" text-anchor="start">${fmt(dn[10], 1)}%</text>`;
    s += `<text x="${X(4)}" y="${Y(up[4]) - 14}" class="sv-txt sv-t-down">r = 4% &gt; g = 1,5%</text><text x="${X(4)}" y="${Y(dn[4]) + 28}" class="sv-txt sv-t-up">r = 2% &lt; g = 3%</text>`;
    return `${s}</svg>`;
  }

  // Các vòng chi tiêu của số nhân (MPC = 0,8, t = 20%).
  const rounds = Array.from({ length: 5 }, (_, i) => 100 * 0.64 ** i);
  const roundBars = `<div class="sd-bars">${rounds.map((v, i) => `<div class="sd-bar"><span class="sd-bar-l">Vòng ${i + 1}</span><span class="sd-bar-t"><i style="width:${v}%"></i></span><b>${fmt(v, 1)}</b></div>`).join('')}</div>`;

  // Thâm hụt thực tế và cơ cấu (ví dụ 7.1).
  const defBars = `<div class="sd-bars">
    <div class="sd-bar"><span class="sd-bar-l">Năm 1: thực tế = cơ cấu</span><span class="sd-bar-t"><i style="width:40%"></i></span><b>2%</b></div>
    <div class="sd-bar"><span class="sd-bar-l">Năm 2: thực tế</span><span class="sd-bar-t"><i style="width:100%"></i></span><b>5%</b></div>
    <div class="sd-bar"><span class="sd-bar-l">Năm 2: phần do chu kỳ</span><span class="sd-bar-t"><i style="width:60%"></i></span><b>3%</b></div>
    <div class="sd-bar"><span class="sd-bar-l">Năm 2: cơ cấu</span><span class="sd-bar-t"><i style="width:40%"></i></span><b>2%</b></div></div>`;

  const slides = [
    slide('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Economics · EC-03</div>
      <h2>Fiscal Policy</h2>
      <p>Chính phủ dùng chi tiêu và thuế để làm gì, và vì sao không dễ?</p>
      <div class="sd-chips"><span>Tài khóa và tiền tệ</span><span>Nợ công/GDP</span><span>Công cụ</span><span>Số nhân</span><span>Mở rộng hay thắt chặt?</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Tài khóa và tiền tệ', `<div class="sd-tbl grid"><div class="head"><span></span><span>Tài khóa</span><span>Tiền tệ</span></div>
      <div><span>Ai</span><span>Chính phủ, quốc hội</span><span>Ngân hàng trung ương</span></div>
      <div><span>Công cụ</span><span>Chi tiêu G, thuế T</span><span>Lãi suất, cung tiền</span></div>
      <div><span>Mở rộng</span><span>G ↑, T ↓ (thâm hụt ↑)</span><span>Lãi suất ↓</span></div>
      <div><span>Thế mạnh</span><span>Nhắm nhóm, phân phối lại</span><span>Quyết định nhanh</span></div>
      <div><span>Điểm yếu</span><span>Lập pháp chậm, chính trị</span><span>Công cụ thô</span></div></div>
      <div class="sd-f sm">(G - T) = (S - I) - (X - M)</div>`),

    S('Ba mục tiêu, hai cơ chế', `<div class="sd-cols2">
      <div><div class="sd-steps"><span>① Ổn định tổng cầu</span><span>② Phân phối lại thu nhập, của cải</span><span>③ Phân bổ nguồn lực giữa các ngành</span></div></div>
      <div><div class="sd-card"><b>Chủ động (discretionary)</b><p>Gói kích thích, giảm thuế tạm thời</p></div>
      <div class="sd-card acc"><b>Tự động (automatic stabilizers)</b><p>Thuế lũy tiến, trợ cấp thất nghiệp: suy thoái → thâm hụt tự tăng</p></div></div></div>
      <p class="sd-note">Thâm hụt tăng trong suy thoái <b>không</b> chứng tỏ chính phủ đang chủ động nới lỏng.</p>`),

    S('Động học nợ công: r so với g', `<div class="sd-cols2 wide-left"><div>${debtPaths()}</div>
      <div><div class="sd-f sm">d<sub>1</sub> = d<sub>0</sub> × ${frac('1 + r', '1 + g')} - cán cân sơ cấp</div>
      <div class="sd-rule down">r &gt; g <b>Nợ/GDP tăng</b></div><div class="sd-rule up">r &lt; g <b>Nợ/GDP giảm</b></div>
      <p class="sd-note">60% × 1,04/1,015 = <b>61,48%</b> sau 1 năm.</p></div></div>`),

    S('Nợ công cao: lo hay không lo?', `<div class="sd-cols2">
      <div class="sd-card"><b>Nên lo</b><div class="sd-steps"><span>Thuế tương lai cao → giảm động lực</span><span>Mất niềm tin → khó đảo nợ, vỡ nợ hoặc in tiền</span><span>Chèn lấn đầu tư tư nhân</span></div></div>
      <div class="sd-card acc"><b>Không quá lo</b><div class="sd-steps"><span>Nợ do dân trong nước nắm giữ</span><span>Vay để đầu tư sinh lời</span><span>Cải cách thuế, tiết kiệm tư nhân bù đắp</span><span>Kinh tế dưới toàn dụng</span></div></div></div>`),

    S('Công cụ chi và thu', `<div class="sd-cols2">
      <div class="sd-card"><b>Chi</b><div class="sd-steps"><span>Chuyển giao: lương hưu, trợ cấp (không vào G trong GDP)</span><span>Thường xuyên: lương, y tế, giáo dục</span><span>Đầu tư: hạ tầng, bệnh viện</span></div></div>
      <div class="sd-card acc"><b>Thu</b><div class="sd-steps"><span>Trực thu: thuế thu nhập cá nhân, doanh nghiệp, tài sản</span><span>Gián thu: VAT, tiêu thụ đặc biệt, nhập khẩu</span></div></div></div>
      <p class="sd-note">Thuế tốt: <b>đơn giản · hiệu quả · công bằng (ngang, dọc) · đủ thu</b></p>`),

    S('Ưu nhược điểm theo tốc độ tác động', `<div class="sd-tbl grid"><div class="head"><span>Công cụ</span><span>Tốc độ</span><span>Ưu điểm</span><span>Nhược điểm</span></div>
      <div><span>Thuế gián thu</span><span>Nhanh nhất</span><span>Thu rẻ, định hướng hành vi</span><span>Lũy thoái</span></div>
      <div><span>Thuế trực thu, chuyển giao</span><span>Trung bình</span><span>Phân phối lại</span><span>Ban hành lâu</span></div>
      <div><span>Chi đầu tư</span><span>Chậm nhất</span><span>Nâng năng lực dài hạn</span><span>Dễ sai thời điểm</span></div></div>`),

    S('Số nhân tài khóa', `<div class="sd-cols2"><div><div class="sd-f">Số nhân = ${frac('1', '1 - MPC(1 - t)')}</div>
      <p class="sd-note">MPC = 0,8; t = 20% → 1 / 0,36 = <b>${fmt(1 / 0.36)}</b>. Chi 100 → tổng cầu +<b>${fmt(100 / 0.36)}</b></p></div>
      <div><p class="sd-cap">Chi tiêu tạo ra ở mỗi vòng (mỗi vòng giữ lại 64%)</p>${roundBars}</div></div>`),

    S('Ngân sách cân bằng và Ricardian', `<div class="sd-cols2">
      <div class="sd-card"><b>Tăng G = 100 và T = 100</b><p>Chi: +100 × 2,78 = +277,78</p><p>Thuế: -0,8 × 100 × 2,78 = -222,22</p><p>Ròng: <b>+55,56</b> → vẫn kích cầu</p></div>
      <div class="sd-card acc"><b>Ricardian equivalence</b><p>Giảm thuế bằng vay nợ → dân đoán thuế tương lai tăng → <b>tiết kiệm hết</b> → tổng cầu không đổi</p><small>Thực tế chỉ đúng một phần</small></div></div>`),

    S('Mở rộng hay thắt chặt? Nhìn thâm hụt cơ cấu', `<div class="sd-cols2"><div>${defBars}</div>
      <div><div class="sd-rule up">Thâm hụt cơ cấu ↑ <b>Mở rộng</b></div><div class="sd-rule down">Thâm hụt cơ cấu ↓ <b>Thắt chặt</b></div>
      <p class="sd-note">Ví dụ: thâm hụt thực tế 2% → 5% nhưng cơ cấu vẫn 2% → lập trường <b>trung tính</b>.</p></div></div>`),

    S('Ba độ trễ của chính sách', `<div class="sd-cols3">
      <div class="sd-card"><div class="sd-n">1</div><b>Recognition lag</b><p>Nhận ra cần can thiệp; số liệu chậm, bị sửa</p></div>
      <div class="sd-card"><div class="sd-n">2</div><b>Action lag</b><p>Soạn, tranh luận, thông qua, triển khai</p></div>
      <div class="sd-card acc"><div class="sd-n">3</div><b>Impact lag</b><p>Biện pháp thực sự tác động lên nền kinh tế</p></div></div>
      <p class="sd-note">Tổng độ trễ dài → kích thích có thể đến khi kinh tế đã tự phục hồi.</p>`),

    S('Vì sao chính sách tài khóa khó thành công', `<div class="sd-grid4">
      <div class="sd-card"><b>Dự báo, số liệu sai</b><p>Nhầm thất nghiệp tự nhiên là chu kỳ</p></div>
      <div class="sd-card"><b>Chèn lấn</b><p>Lãi suất ↑ → đầu tư tư nhân ↓</p></div>
      <div class="sd-card"><b>Hạn chế phía cung</b><p>Thiếu lao động, vốn → kích cầu chỉ gây lạm phát</p></div>
      <div class="sd-card"><b>Giới hạn nợ, mục tiêu mâu thuẫn</b><p>Đình lạm: kích hay thắt đều có hại</p></div></div>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>Mở rộng = thâm hụt cơ cấu tăng</span><span>Ổn định tự động: thuế lũy tiến, trợ cấp</span>
      <span>r &gt; g → nợ/GDP tăng</span><span>Số nhân 1/[1 - MPC(1 - t)]</span>
      <span>G và T cùng tăng → tổng cầu vẫn tăng</span><span>Ricardian → số nhân nhỏ lại</span>
      <span>Thuế gián thu nhanh, chi đầu tư chậm</span><span>Recognition → action → impact lag</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 10 câu, mục tiêu ≥ 7 câu đúng.</p>`),
  ];

  addDeck('EC-03', `Slide Fiscal Policy - bản thiết kế riêng (${slides.length} slide)`, slides);
}());
