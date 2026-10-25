// Bộ slide tự thiết kế cho EC-04 Monetary Policy.
(function () {
  const L = window.LESSONS && window.LESSONS['EC-04'];
  if (!L) return;
  const { frac, slide, addDeck } = window.CFAH;
  const K = 'EC-04 · Monetary Policy';
  const S = (title, body, opt = {}) => slide(title, body, Object.assign({ kicker: K }, opt));
  const fmt = (x, d = 2) => x.toFixed(d).replace('.', ',');

  // Sơ đồ truyền dẫn.
  function transmission() {
    const W = 600, H = 300;
    const box = (x, y, w, h, txt, cls = '') => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" class="sv-panel"/><text x="${x + w / 2}" y="${y + h / 2 + 6}" class="sv-txt ${cls}">${txt}</text>`;
    const ln = (x1, y1, x2, y2) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="sv-axis"/>`;
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv" style="max-height:30cqw" role="img" aria-label="Cơ chế truyền dẫn">`;
    s += box(5, 125, 100, 50, 'Lãi suất CS', 'sv-t-pv');
    ['Lãi suất TT', 'Giá tài sản', 'Kỳ vọng', 'Tỷ giá'].forEach((c, i) => { const y = 15 + i * 72; s += ln(105, 150, 140, y + 22) + box(140, y, 130, 44, c) + ln(270, y + 22, 305, i < 3 ? 105 : 215); });
    s += box(305, 80, 140, 50, 'Cầu trong nước') + box(305, 190, 140, 50, 'Cầu nước ngoài');
    s += ln(445, 105, 470, 150) + ln(445, 215, 470, 150) + box(470, 125, 125, 50, 'Tổng cầu');
    s += `<text x="532" y="215" class="sv-muted">+ giá nhập khẩu</text><text x="532" y="250" class="sv-txt sv-t-pv">→ Lạm phát</text>`;
    return `${s}</svg>`;
  }

  // Trục so sánh lãi suất chính sách với lãi suất trung tính 4%.
  function neutralAxis() {
    const W = 600, H = 150, l = 40, r = 560, y = 80, lo = 0, hi = 8;
    const X = v => l + ((v - lo) / (hi - lo)) * (r - l);
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv big" role="img" aria-label="Lãi suất trung tính">`;
    s += `<line x1="${X(0)}" y1="${y}" x2="${X(4)}" y2="${y}" class="sv-up"/><line x1="${X(4)}" y1="${y}" x2="${X(8)}" y2="${y}" class="sv-down"/>`;
    for (let v = 0; v <= 8; v += 2) s += `<line x1="${X(v)}" y1="${y - 6}" x2="${X(v)}" y2="${y + 6}" class="sv-axis"/><text x="${X(v)}" y="${y + 30}" class="sv-muted">${v}%</text>`;
    s += `<circle cx="${X(4)}" cy="${y}" r="9" class="sv-dot"/><text x="${X(4)}" y="${y - 18}" class="sv-txt">Trung tính 4%</text>`;
    s += `<text x="${X(2)}" y="${y - 18}" class="sv-txt sv-t-up">Mở rộng</text><text x="${X(6)}" y="${y - 18}" class="sv-txt sv-t-down">Thắt chặt</text>`;
    s += `<circle cx="${X(3)}" cy="${y}" r="7" class="sv-node"/><text x="${X(3)}" y="${y + 56}" class="sv-txt">CS = 3%</text>`;
    return `${s}</svg>`;
  }

  // Các vòng tạo tiền gửi với tỷ lệ dự trữ 10%.
  const dep = Array.from({ length: 5 }, (_, i) => 1000 * 0.9 ** i);
  const depBars = `<div class="sd-bars">${dep.map((v, i) => `<div class="sd-bar"><span class="sd-bar-l">Ngân hàng ${i + 1}</span><span class="sd-bar-t"><i style="width:${v / 10}%"></i></span><b>${fmt(v, 0)}</b></div>`).join('')}</div>`;

  const slides = [
    slide('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Economics · EC-04</div>
      <h2>Monetary Policy</h2>
      <p>Từ lãi suất chính sách đến lạm phát</p>
      <div class="sd-chips"><span>Vai trò NHTW</span><span>Công cụ</span><span>Truyền dẫn</span><span>Chế độ mục tiêu</span><span>Hạn chế</span><span>Phối hợp tài khóa</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Ba câu hỏi của buổi học', `<div class="sd-cols3">
      <div class="sd-card"><div class="sd-n">1</div><b>NHTW làm gì?</b><p>6 vai trò, mục tiêu ổn định giá.</p></div>
      <div class="sd-card"><div class="sd-n">2</div><b>Bằng cách nào?</b><p>Lãi suất, OMO, dự trữ → 4 kênh truyền dẫn.</p></div>
      <div class="sd-card acc"><div class="sd-n">3</div><b>Khi nào không hiệu quả?</b><p>Bẫy thanh khoản, lãi suất 0, tín nhiệm thấp.</p></div></div>`),

    S('Ngân hàng tạo tiền', `<div class="sd-cols2"><div><div class="sd-f">Số nhân tiền = ${frac('1', 'tỷ lệ dự trữ')}</div>
      <p class="sd-note">Dự trữ 10% → số nhân 10. Dự trữ mới 1.000 → tiền gửi tối đa <b>10.000</b>.</p></div>
      <div><p class="sd-cap">Tiền gửi mới ở mỗi ngân hàng (mỗi vòng cho vay 90%)</p>${depBars}</div></div>`),

    S('Tiền và mức giá: MV = PY', `<div class="sd-big">M × V = P × Y</div>
      <div class="sd-cols2"><div class="sd-card"><b>Ví dụ</b><p>M +7%, Y +3%, V không đổi</p><p>Lạm phát ≈ 7% - 3% = <b>4%</b> (chính xác ${fmt((1.07 / 1.03 - 1) * 100)}%)</p></div>
      <div class="sd-card acc"><b>Fisher</b><p>Lãi suất danh nghĩa ≈ lãi suất thực + lạm phát kỳ vọng</p><p>2% + 3% ≈ <b>5%</b></p></div></div>`),

    S('Sáu vai trò và một mục tiêu chính', `<div class="sd-cols2"><div><div class="sd-steps"><span>① Phát hành tiền</span><span>② Ngân hàng của chính phủ và các ngân hàng</span><span>③ Giám sát hệ thống ngân hàng, thanh toán</span><span>④ Người cho vay cuối cùng</span><span>⑤ Quản lý dự trữ vàng, ngoại hối</span><span>⑥ Thực thi chính sách tiền tệ</span></div></div>
      <div><div class="sd-card acc"><b>Mục tiêu chính: ổn định giá</b><p>Lạm phát thấp, ổn định (khoảng 2%)</p><small>Thêm: việc làm, tăng trưởng, tỷ giá, lãi suất dài hạn vừa phải</small></div>
      <p class="sd-note">Lạm phát <b>không dự kiến</b> tốn kém hơn: phân phối lại của cải, nhiễu tín hiệu giá.</p></div></div>`),

    S('Ba công cụ', `<div class="sd-tbl grid"><div class="head"><span>Công cụ</span><span>Nới lỏng</span><span>Thắt chặt</span></div>
      <div><span>Lãi suất chính sách</span><span>Hạ</span><span>Tăng</span></div>
      <div><span>Nghiệp vụ thị trường mở</span><span><b>Mua</b> trái phiếu (bơm dự trữ)</span><span><b>Bán</b> trái phiếu (hút dự trữ)</span></div>
      <div><span>Dự trữ bắt buộc</span><span>Hạ tỷ lệ</span><span>Tăng tỷ lệ</span></div></div>
      <p class="sd-note">Lãi suất chính sách là công cụ chính; dự trữ bắt buộc ít dùng ở nước phát triển vì gây xáo trộn.</p>`),

    S('Cơ chế truyền dẫn', `${transmission()}
      <p class="sd-note">Tăng lãi suất: vay đắt hơn · giá tài sản giảm · kỳ vọng hạ nhiệt · nội tệ tăng giá → tổng cầu ↓ → lạm phát ↓</p>`),

    S('Mở rộng hay thắt chặt? So với lãi suất trung tính', `<div class="sd-f">Lãi suất trung tính = tăng trưởng xu hướng + mục tiêu lạm phát = 2% + 2% = 4%</div>
      ${neutralAxis()}
      <p class="sd-note">Lãi suất chính sách 3% &lt; 4% → <b>mở rộng</b>, kể cả khi vừa tăng từ 2% lên 3%.</p>`),

    S('NHTW hiệu quả: ba phẩm chất', `<div class="sd-cols3">
      <div class="sd-card"><b>Độc lập</b><p><b>Hoạt động:</b> tự quyết lãi suất.</p><p><b>Mục tiêu:</b> tự đặt cả mục tiêu lạm phát.</p></div>
      <div class="sd-card"><b>Tín nhiệm</b><p>Làm đúng cam kết → kỳ vọng lạm phát neo ở mục tiêu, mục tiêu tự hiện thực hóa.</p></div>
      <div class="sd-card acc"><b>Minh bạch</b><p>Báo cáo lạm phát, biên bản họp → thị trường dự đoán được, chính sách tác động nhanh hơn.</p></div></div>`),

    S('Ba chế độ mục tiêu', `<div class="sd-tbl grid"><div class="head"><span>Chế độ</span><span>Cách làm</span><span>Thắt chặt khi</span></div>
      <div><span>Lạm phát mục tiêu</span><span>Nhắm lạm phát dự báo khoảng 2 năm tới</span><span>Dự báo vượt mục tiêu</span></div>
      <div><span>Mục tiêu lãi suất</span><span>Giữ lãi suất trong khoảng bằng cung tiền</span><span>Lãi suất dưới khoảng</span></div>
      <div><span>Mục tiêu tỷ giá</span><span>Mua bán ngoại tệ giữ tỷ giá neo</span><span>Nội tệ mất giá: bán ngoại tệ, mua nội tệ</span></div></div>
      <p class="sd-note">Neo tỷ giá = "nhập khẩu" chính sách tiền tệ của nước được neo; mất chủ động lãi suất.</p>`),

    S('Hạn chế của chính sách tiền tệ', `<div class="sd-grid4">
      <div class="sd-card"><b>Bond vigilantes</b><p>Nới lỏng bị coi là gây lạm phát → lãi suất dài hạn <b>tăng</b></p></div>
      <div class="sd-card"><b>Bẫy thanh khoản</b><p>Bơm tiền nhưng mọi người chỉ giữ tiền</p></div>
      <div class="sd-card"><b>Giảm phát, lãi suất 0</b><p>Không hạ thêm được → dùng QE</p></div>
      <div class="sd-card"><b>Nước đang phát triển</b><p>Trái phiếu kém thanh khoản, khó ước lãi suất trung tính, tín nhiệm thấp</p></div></div>`),

    S('Phối hợp tài khóa và tiền tệ', `<div class="sd-tbl grid"><div class="head"><span></span><span>Tiền tệ nới lỏng</span><span>Tiền tệ thắt chặt</span></div>
      <div><span><b>Tài khóa nới lỏng</b></span><span>Rất mở rộng: tổng cầu ↑ mạnh, lãi suất thấp</span><span>Lãi suất cao, khu vực công lớn hơn</span></div>
      <div><span><b>Tài khóa thắt chặt</b></span><span>Lãi suất thấp, khu vực tư lớn hơn</span><span>Rất thu hẹp: tổng cầu ↓, lãi suất cao</span></div></div>
      <p class="sd-note">Hai chính sách ngược chiều có thể triệt tiêu tác động lên tổng cầu nhưng đổi <b>cơ cấu</b> công - tư của nền kinh tế.</p>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>Mục tiêu chính: ổn định giá</span><span>Mua trái phiếu = nới lỏng</span>
      <span>Số nhân tiền = 1 / tỷ lệ dự trữ</span><span>%ΔP ≈ %ΔM - %ΔY</span>
      <span>So với trung tính = g xu hướng + π mục tiêu</span><span>Tăng lãi suất → nội tệ tăng giá</span>
      <span>Độc lập hoạt động khác độc lập mục tiêu</span><span>Tài khóa lỏng + tiền tệ chặt → lãi suất cao</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 10 câu, mục tiêu ≥ 7 câu đúng.</p>`),
  ];

  addDeck('EC-04', `Slide Monetary Policy - bản thiết kế riêng (${slides.length} slide)`, slides);
}());
