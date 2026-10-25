// Bộ slide tự thiết kế cho FI-05 Fixed-Income Markets for Government Issuers.
(function () {
  const L = window.LESSONS && window.LESSONS['FI-05'];
  if (!L) return;
  const { slide, addDeck } = window.CFAH;
  const K = 'FI-05 · Government Issuers';
  const S = (title, body, opt = {}) => slide(title, body, Object.assign({ kicker: K }, opt));
  const fmt = (x, d = 2) => x.toFixed(d).replace('.', ',');

  // Phiên đấu thầu đơn giá ở ví dụ 3.1: phần trúng thầu tô đậm, phần trượt tô nhạt.
  function auction() {
    const offer = 10, nc = 1.5;
    const bids = [['3,80%', 2.0], ['3,82%', 3.5], ['3,84%', 4.0], ['3,86%', 2.5]];
    let left = offer - nc;
    const rows = [['Không cạnh tranh', nc, nc]].concat(bids.map(([y, a]) => { const f = Math.min(a, Math.max(left, 0)); left -= f; return [y, a, f]; }));
    const W = 600, x0 = 160, u = 80, h = 40, gap = 16, top = 10;
    let s = `<svg viewBox="0 0 ${W} ${top + rows.length * (h + gap) + 30}" class="sv" role="img" aria-label="Phân bổ đấu thầu đơn giá">`;
    rows.forEach(([lab, a, f], i) => {
      const y = top + i * (h + gap);
      s += `<text x="${x0 - 12}" y="${y + h / 2 + 5}" class="sv-txt" text-anchor="end">${lab}</text>`;
      s += `<rect x="${x0}" y="${y}" width="${a * u}" height="${h}" rx="6" class="sv-panel"/>`;
      if (f > 0) s += `<rect x="${x0}" y="${y}" width="${f * u}" height="${h}" rx="6" class="sv-dot"/>`;
      s += `<text x="${x0 + a * u + 8}" y="${y + h / 2 + 5}" class="sv-muted" text-anchor="start">${f > 0 ? `${fmt(f, 1)}/${fmt(a, 1)} tỷ` : `trượt (${fmt(a, 1)} tỷ)`}</text>`;
    });
    s += `<text x="${W / 2}" y="${top + rows.length * (h + gap) + 18}" class="sv-muted">màu đậm = trúng thầu · chào bán 10 tỷ</text>`;
    return `${s}</svg>`;
  }

  // Thang rủi ro tín dụng (minh họa thứ tự, không theo tỷ lệ).
  function ladder() {
    const items = [['US Treasury', 'thuế quốc gia, in tiền'], ['Agency', 'bảo lãnh ngầm'], ['GO bond (bang)', 'thuế địa phương'], ['Revenue bond', 'một dự án']];
    let s = '<svg viewBox="0 0 600 250" class="sv" role="img" aria-label="Thang rủi ro tín dụng khu vực công">';
    items.forEach(([a, b], i) => {
      const x = 20 + i * 140, y = 190 - i * 50;
      s += `<rect x="${x}" y="${y}" width="140" height="${240 - y}" rx="6" class="sv-panel"/>`;
      s += `<text x="${x + 70}" y="${y + 24}" class="sv-txt" style="font-size:14px">${a}</text><text x="${x + 70}" y="${y + 42}" class="sv-muted" style="font-size:13px">${b}</text>`;
    });
    s += '<line x1="20" y1="20" x2="560" y2="20" class="sv-dash"/><text x="560" y="14" class="sv-muted" text-anchor="end">rủi ro và lợi suất tăng dần →</text>';
    return `${s}</svg>`;
  }

  const slides = [
    S('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Fixed Income · FI-05</div>
      <h2>Fixed-Income Markets<br>for Government Issuers</h2>
      <p>Khu vực công vay tiền thế nào</p>
      <div class="sd-chips"><span>LOS 1 · Lựa chọn huy động vốn</span><span>LOS 2 · So với trái phiếu doanh nghiệp</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Bốn nhóm tổ chức phát hành', `<div class="sd-grid4">
      <div class="sd-card acc"><b>Sovereign</b><p>Chính phủ trung ương. Trả bằng thuế quốc gia.</p><small>US Treasury, Kho bạc Nhà nước</small></div>
      <div class="sd-card"><b>Non-sovereign</b><p>Bang, tỉnh, thành phố. Thuế địa phương hoặc dự án.</p><small>Municipal bonds</small></div>
      <div class="sd-card"><b>Quasi-government</b><p>Mục tiêu công, bảo lãnh ngầm của nhà nước.</p><small>Fannie Mae, KfW</small></div>
      <div class="sd-card"><b>Supranational</b><p>Nhiều nước cùng sở hữu, tín nhiệm rất cao.</p><small>World Bank, ADB, EIB</small></div></div>`),

    S('Vì sao chính phủ phải vay?', `<div class="sd-cols3">
      <div class="sd-card"><div class="sd-n">1</div><b>Thâm hụt</b><p>Chi lớn hơn thu, đầu tư hạ tầng.</p><small>→ nợ dài hạn</small></div>
      <div class="sd-card acc"><div class="sd-n">2</div><b>Lệch thời điểm</b><p>Thuế về theo mùa, chi trả đều.</p><small>→ T-bills</small></div>
      <div class="sd-card"><div class="sd-n">3</div><b>Tái cấp vốn</b><p>Nợ cũ đến hạn, phát hành nợ mới để trả.</p><small>→ rủi ro đảo nợ</small></div></div>
      <p class="sd-note">Tất cả được sắp xếp trong <b>debt management policy</b>: bao nhiêu, kỳ hạn nào, loại nào, khi nào.</p>`),

    S('Ba lựa chọn khi phát hành', `<div class="sd-tbl grid"><div class="head"><span>Lựa chọn</span><span>Phương án</span><span>Đánh đổi chính</span></div>
      <div><span>Kỳ hạn</span><span>Bills · notes · bonds</span><span>Nợ ngắn rẻ nhưng phải đảo nợ</span></div>
      <div><span>Loại lãi suất</span><span>Cố định · FRN · linker</span><span>Ổn định chi phí hay theo thị trường</span></div>
      <div><span>Đồng tiền</span><span>Nội tệ · ngoại tệ</span><span>Mở rộng nhà đầu tư nhưng rủi ro tỷ giá</span></div></div>
      <p class="sd-note">Bills ≤ 1 năm · notes 2-10 năm · bonds trên 10 năm (đến 30 năm).</p>`),

    S('Nội tệ hay ngoại tệ?', `<div class="sd-cols2">
      <div><div class="sd-rule up">Nợ nội tệ <b>rủi ro vỡ nợ thấp</b></div><p class="sd-note">Có thể tăng thuế hoặc in tiền. Đổi lại: rủi ro lạm phát.</p>
      <div class="sd-rule down">Nợ ngoại tệ <b>rủi ro cao hơn</b></div><p class="sd-note">Không in được USD. Nội tệ mất giá → nợ phình to.</p></div>
      <div class="sd-tbl grid"><div class="head"><span></span><span>Phát triển</span><span>Mới nổi</span></div>
      <div><span>Kinh tế</span><span>Ổn định</span><span>Nhanh, biến động</span></div>
      <div><span>Đồng tiền nợ</span><span>Nội tệ, dự trữ</span><span>Một phần ngoại tệ</span></div>
      <div><span>Minh bạch</span><span>Cao</span><span>Thấp hơn</span></div></div></div>`),

    S('Đấu thầu đơn giá: ai trúng?', `<div class="sd-cols2 wide-left"><div>${auction()}</div>
      <div class="sd-steps"><span>① Cạnh tranh = 10 - 1,5 = <b>8,5 tỷ</b></span><span>② Xếp lợi suất thấp → cao: 2,0 + 3,5 + <b>3,0</b> = 8,5</span><span>③ Lợi suất dừng <b>3,84%</b>, mức này nhận <b>75%</b></span></div></div>`),

    S('Đơn giá, đa giá và bid-to-cover', `<div class="sd-cols3">
      <div class="sd-card acc"><b>Đơn giá</b><p>Mọi người trúng thầu nhận <b>lợi suất dừng 3,84%</b>.</p><small>Mỹ dùng cách này</small></div>
      <div class="sd-card"><b>Đa giá</b><p>Mỗi người nhận đúng mức mình đặt.</p><small>Bình quân 3,8224%</small></div>
      <div class="sd-card"><b>Bid-to-cover</b><p>13,5 / 10 = <b>1,35</b></p><small>Càng cao, cầu càng mạnh</small></div></div>
      <p class="sd-note">Đặt thầu <b>không cạnh tranh</b>: chỉ ghi khối lượng, được phân bổ trước, nhận lợi suất của phiên.</p>`),

    S('Sau phiên đấu thầu', `<div class="sd-cols3">
      <div class="sd-card acc"><b>On-the-run</b><p>Mã mới nhất của mỗi kỳ hạn: thanh khoản nhất, lợi suất thấp hơn chút.</p><small>Tạo đường cong benchmark</small></div>
      <div class="sd-card"><b>Tap / reopening</b><p>Bán thêm mã cũ (cùng coupon, cùng đáo hạn) để mã lớn hơn.</p></div>
      <div class="sd-card"><b>Syndication</b><p>Nghiệp đoàn ngân hàng bảo lãnh.</p><small>Mã mới lạ, phát hành ngoại tệ</small></div></div>
      <p class="sd-note">Thứ cấp vẫn là <b>OTC</b> qua dealer, nhưng thanh khoản rất cao và chênh lệch mua bán rất hẹp.</p>`),

    S('Địa phương: GO và revenue bond', `<div class="sd-cols2">
      <div class="sd-card"><b>General obligation</b><p>Trả bằng <b>toàn bộ quyền thu thuế</b> của địa phương.</p><div class="sd-rule up">Rủi ro <b>thấp hơn</b></div></div>
      <div class="sd-card acc"><b>Revenue bond</b><p>Chỉ trả bằng <b>doanh thu một dự án</b>: phí cầu đường, sân bay, nhà máy nước.</p><div class="sd-rule down">Lợi suất <b>cao hơn</b></div></div></div>
      <p class="sd-note">Địa phương không in được tiền · munis Mỹ thường miễn thuế liên bang · hàng chục nghìn mã nhỏ, kém thanh khoản.</p>`),

    S('Agency và supranational', `<div class="sd-cols2 wide-left"><div>${ladder()}</div>
      <div><div class="sd-card"><b>Agency</b><p>Fannie Mae, Freddie Mac, KfW. Bảo lãnh <b>ngầm</b> → spread nhỏ.</p></div>
      <div class="sd-card acc"><b>Supranational</b><p>World Bank, ADB, EIB. Vốn cam kết của nước thành viên → thường <b>AAA</b>.</p></div></div></div>`),

    S('Chính phủ và doanh nghiệp', `<div class="sd-tbl grid"><div class="head"><span>Tiêu chí</span><span>Chính phủ</span><span>Doanh nghiệp</span></div>
      <div><span>Phát hành</span><span>Đấu thầu công khai</span><span>Bảo lãnh, shelf, riêng lẻ</span></div>
      <div><span>Thời điểm</span><span>Lịch định kỳ</span><span>Khi cần vốn</span></div>
      <div><span>Cấu trúc</span><span>Lớn, chuẩn hóa</span><span>Nhỏ, đa dạng</span></div>
      <div><span>Thứ cấp</span><span>OTC, rất thanh khoản</span><span>OTC, thưa thớt</span></div>
      <div><span>Vai trò</span><span>Benchmark, thế chấp repo</span><span>Vốn kinh doanh</span></div></div>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>4 nhóm: sovereign, địa phương, agency, supra</span><span>Lệch thời điểm thu thuế → T-bills</span>
      <span>Nội tệ: in được tiền, rủi ro vỡ nợ thấp</span><span>Đơn giá: ai cũng nhận lợi suất dừng</span>
      <span>Không cạnh tranh: phân bổ trước</span><span>On-the-run: thanh khoản nhất, làm benchmark</span>
      <span>Revenue bond rủi ro hơn GO bond</span><span>Chính phủ: định kỳ, lớn, chuẩn hóa</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 8 câu, mục tiêu ≥ 6 câu đúng.</p>`),
  ];

  addDeck('FI-05', `Slide Government Issuers - bản thiết kế riêng (${slides.length} slide)`, slides);
}());
