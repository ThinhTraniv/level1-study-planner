// Bộ slide tự thiết kế cho EC-02 Understanding Business Cycles.
(function () {
  const L = window.LESSONS && window.LESSONS['EC-02'];
  if (!L) return;
  const { slide, addDeck } = window.CFAH;
  const K = 'EC-02 · Business Cycles';
  const S = (title, body, opt = {}) => slide(title, body, Object.assign({ kicker: K }, opt));
  const fmt = (x, d = 2) => x.toFixed(d).replace('.', ',');

  // Sóng chu kỳ (output gap) với bốn pha.
  function cycle() {
    const W = 600, H = 280, l = 30, r = 580, y0 = 130, A = 75;
    const X = u => l + u * (r - l), G = u => y0 + A * Math.cos(2 * Math.PI * u);
    let pts = '';
    for (let i = 0; i <= 200; i++) pts += `${X(i / 200).toFixed(1)},${G(i / 200).toFixed(1)} `;
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv big" style="max-height:30cqw" role="img" aria-label="Bốn pha của chu kỳ">`;
    s += `<line x1="${l}" y1="${y0}" x2="${r}" y2="${y0}" class="sv-dash"/>`;
    [0.25, 0.5, 0.75].forEach(u => { s += `<line x1="${X(u)}" y1="40" x2="${X(u)}" y2="${H - 50}" class="sv-grid"/>`; });
    s += `<polyline points="${pts}" class="sv-curve" fill="none"/>`;
    [0, 0.5, 1].forEach(u => { s += `<circle cx="${X(u)}" cy="${G(u)}" r="7" class="sv-dot"/>`; });
    s += `<text x="${X(0.5)}" y="${G(0.5) - 14}" class="sv-txt">Đỉnh</text><text x="${X(0) + 10}" y="${G(0) + 6}" class="sv-txt" text-anchor="start">Đáy</text><text x="${X(1) - 10}" y="${G(1) + 6}" class="sv-txt" text-anchor="end">Đáy</text>`;
    s += `<text x="${r}" y="${y0 + 22}" class="sv-muted" text-anchor="end">gap = 0</text>`;
    [['Phục hồi', 'gap âm, thu hẹp', 'sv-t-up'], ['Mở rộng', 'gap dương, tăng', 'sv-t-up'], ['Chậm lại', 'gap dương, giảm', 'sv-t-down'], ['Suy giảm', 'gap âm, sâu thêm', 'sv-t-down']]
      .forEach(([v, e, c], i) => { s += `<text x="${X(0.125 + i * 0.25)}" y="${H - 26}" class="sv-txt ${c}">${v}</text><text x="${X(0.125 + i * 0.25)}" y="${H - 4}" class="sv-muted">${e}</text>`; });
    return `${s}</svg>`;
  }

  // Ví dụ 2.1: GDP thực theo quý và ba cách đo.
  const GDP = [100, 101.2, 102.0, 102.3, 102.1, 101.6, 101.5, 101.9, 102.8];
  const growth = GDP.slice(1).map((g, i) => (g / GDP[i] - 1) * 100);
  const dev = GDP.map((g, i) => (g / (100 * 1.006 ** i) - 1) * 100);
  function mini(vals, x0, title, peakIdx, unit) {
    const W = 300, H = 220, l = 16, r = 284, t = 62, b = 180;
    const lo = Math.min(...vals), hi = Math.max(...vals), span = hi - lo || 1;
    const X = i => l + ((i - x0) / 8) * (r - l), Y = v => b - ((v - lo) / span) * (b - t);
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv" role="img" aria-label="${title}">`;
    s += `<text x="${W / 2}" y="20" class="sv-txt">${title}</text>`;
    if (lo < 0 && hi > 0) s += `<line x1="${l}" y1="${Y(0)}" x2="${r}" y2="${Y(0)}" class="sv-dash"/>`;
    s += `<polyline points="${vals.map((v, i) => `${X(i + x0).toFixed(1)},${Y(v).toFixed(1)}`).join(' ')}" class="sv-curve" fill="none"/>`;
    vals.forEach((v, i) => { s += `<circle cx="${X(i + x0)}" cy="${Y(v)}" r="${i + x0 === peakIdx ? 8 : 4}" class="sv-dot"/>`; });
    s += `<text x="${X(peakIdx)}" y="${Y(vals[peakIdx - x0]) - 14}" class="sv-txt sv-t-up">đỉnh Q${peakIdx}</text>`;
    s += `<text x="${W / 2}" y="${H - 8}" class="sv-muted">${unit}</text>`;
    return `${s}</svg>`;
  }

  // Độ nhạy chu kỳ của các loại chi tiêu (minh họa định tính, thang 0-100).
  const bars = rows => `<div class="sd-bars">${rows.map(([lab, w, v]) => `<div class="sd-bar"><span class="sd-bar-l">${lab}</span><span class="sd-bar-t"><i style="width:${w}%"></i></span><b>${v}</b></div>`).join('')}</div>`;

  const slides = [
    slide('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Economics · EC-02</div>
      <h2>Understanding<br>Business Cycles</h2>
      <p>Nền kinh tế đang ở đâu trong chu kỳ?</p>
      <div class="sd-chips"><span>LOS 1 · Các pha</span><span>LOS 2 · Chu kỳ tín dụng</span><span>LOS 3 · Khu vực và chỉ báo</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Ba câu hỏi của buổi học', `<div class="sd-cols3">
      <div class="sd-card"><div class="sd-n">1</div><b>Đang ở pha nào?</b><p>Đo chu kỳ, 4 pha, đỉnh và đáy.</p></div>
      <div class="sd-card"><div class="sd-n">2</div><b>Tín dụng khuếch đại ra sao?</b><p>Chu kỳ tín dụng dài hơn, sâu hơn.</p></div>
      <div class="sd-card acc"><div class="sd-n">3</div><b>Nhìn chỉ báo nào?</b><p>Tồn kho, lao động, tiêu dùng, nhà ở, ngoại thương.</p><small>Dẫn dắt, trùng, trễ</small></div></div>`),

    S('Bốn pha của chu kỳ', `${cycle()}<p class="sd-note">Đỉnh và đáy là <b>điểm chuyển</b>. Suy thoái: GDP thực giảm <b>hai quý liên tiếp</b>.</p>`),

    S('Ba cách đo, ba thời điểm đỉnh', `<div class="sd-cols3">
      <div>${mini(growth, 1, 'Growth rate cycle', 1, '% tăng so quý trước')}</div>
      <div>${mini(dev, 0, 'Growth cycle', 2, '% chênh lệch so xu hướng')}</div>
      <div>${mini(GDP, 0, 'Classical cycle', 3, 'Mức GDP thực')}</div></div>
      <p class="sd-note">Cùng một dữ liệu: đỉnh lần lượt ở Q1 (${fmt(growth[0])}%), Q2 (${fmt(dev[2])}%), Q3 (${fmt(GDP[3], 1)}). <b>Growth rate cycle báo sớm nhất.</b></p>`),

    S('Đặc điểm từng pha', `<div class="sd-tbl grid"><div class="head"><span>Pha</span><span>Hoạt động</span><span>Việc làm</span><span>Lạm phát</span></div>
      <div><span>Phục hồi</span><span>Tăng trưởng chuyển dương</span><span>Thất nghiệp còn cao, tăng giờ làm</span><span>Thấp</span></div>
      <div><span>Mở rộng</span><span>Trên xu hướng</span><span>Tuyển dụng mạnh</span><span>Bắt đầu tăng</span></div>
      <div><span>Chậm lại</span><span>Chậm dần</span><span>Tuyển dụng chậm</span><span>Còn tăng</span></div>
      <div><span>Suy giảm</span><span>Dưới xu hướng / âm</span><span>Sa thải</span><span>Giảm, có độ trễ</span></div></div>
      <p class="sd-note">Thất nghiệp và lạm phát <b>đi trễ</b> so với sản lượng.</p>`),

    S('Chu kỳ tín dụng', `<div class="sd-cols2">
      <div class="sd-card"><b>Mở rộng tín dụng</b><div class="sd-steps"><span>Tài sản tăng giá → thế chấp giá trị hơn</span><span>Người cho vay nới chuẩn, spread hẹp</span><span>Vay và chi tiêu tăng thêm</span></div></div>
      <div class="sd-card acc"><b>Thu hẹp tín dụng</b><div class="sd-steps"><span>Nợ xấu tăng, tài sản giảm giá</span><span>Siết chuẩn cho vay, spread rộng</span><span>Chi tiêu giảm, giảm nợ kéo dài</span></div></div></div>
      <p class="sd-note"><b>Thuận chu kỳ</b>, dài hơn và biên độ lớn hơn chu kỳ kinh doanh. Suy thoái kèm thu hẹp tín dụng (nhất là bất động sản) → sâu và lâu hơn.</p>`),

    S('Tồn kho: tín hiệu đầu tiên', `<div class="sd-tbl grid"><div class="head"><span>Giai đoạn</span><span>Doanh số</span><span>Tồn kho/doanh số</span></div>
      <div><span>Đầu phục hồi</span><span>Tăng bất ngờ</span><span>Dưới bình thường</span></div>
      <div><span>Mở rộng</span><span>Tăng đều</span><span>Bình thường</span></div>
      <div><span>Gần đỉnh</span><span>Chậm lại bất ngờ</span><span>Trên bình thường</span></div>
      <div><span>Suy giảm</span><span>Giảm, xả kho</span><span>Giảm về bình thường</span></div></div>
      <p class="sd-note">Ví dụ: tồn kho 1,5 / doanh số 1,0 = <b>1,50</b> → 1,6 / 0,9 = <b>1,78</b>: hàng tồn ngoài ý muốn, sắp cắt sản xuất.</p>`),

    S('Lao động và vốn: điều chỉnh theo hai bước', `<div class="sd-cols2">
      <div class="sd-card"><div class="sd-n">1</div><b>Ngắn hạn: dùng nhiều hay ít hơn</b><p>Giờ làm, làm thêm giờ, lao động tạm thời, hệ số sử dụng công suất.</p><small>→ Giờ làm bình quân là chỉ báo dẫn dắt</small></div>
      <div class="sd-card acc"><div class="sd-n">2</div><b>Khi xu hướng kéo dài</b><p>Tuyển / sa thải chính thức; đầu tư / thanh lý nhà xưởng, thiết bị.</p><small>Thiết bị vòng đời ngắn trước, nhà xưởng sau</small></div></div>
      <p class="sd-note">Lý do: thuê, sa thải, mua bán tài sản cố định đều tốn kém.</p>`),

    S('Tiêu dùng: hàng lâu bền dao động mạnh nhất', `<p class="sd-cap">Mức nhạy với chu kỳ (minh họa định tính)</p>
      ${bars([['Hàng lâu bền (ô tô, gia dụng)', 95, 'Cao nhất'], ['Dịch vụ tùy ý (du lịch, nhà hàng)', 65, 'Khá cao'], ['Hàng không lâu bền (thực phẩm)', 25, 'Thấp']])}
      <p class="sd-note">Chi tiêu phụ thuộc thu nhập hiện tại <b>và kỳ vọng thu nhập tương lai</b>. Đo bằng doanh số bán lẻ, đơn hàng hàng lâu bền, niềm tin người tiêu dùng, tỷ lệ tiết kiệm.</p>`),

    S('Nhà ở: nhạy với lãi suất', `<div class="sd-grid4">
      <div class="sd-card"><b>Lãi suất vay mua nhà</b><p>Thấp → mua và xây tăng</p></div>
      <div class="sd-card"><b>Giá nhà so với thu nhập</b><p>Giá tăng nhanh hơn thu nhập → cầu chững</p></div>
      <div class="sd-card"><b>Đầu cơ</b><p>Giá tăng → mua kỳ vọng → bong bóng → giảm mạnh</p></div>
      <div class="sd-card"><b>Nhân khẩu học</b><p>Người 25 đến 40 tuổi, đô thị hóa</p></div></div>
      <p class="sd-note">Đo bằng: giấy phép xây dựng, nhà khởi công, doanh số và giá nhà.</p>`),

    S('Ngoại thương', `<div class="sd-cols3">
      <div class="sd-card"><b>GDP trong nước ↑</b><p>Nhập khẩu ↑</p></div>
      <div class="sd-card"><b>GDP đối tác ↑</b><p>Xuất khẩu ↑</p></div>
      <div class="sd-card acc"><b>Nội tệ tăng giá</b><p>Xuất khẩu ↓, nhập khẩu ↑ (có độ trễ)</p></div></div>
      <p class="sd-note">Kinh tế trong nước tăng nhanh hơn đối tác → xuất khẩu ròng thường xấu đi.</p>`),

    S('Chỉ báo dẫn dắt, trùng và trễ', `<div class="sd-tbl grid"><div class="head"><span>Dẫn dắt (trước)</span><span>Trùng (cùng lúc)</span><span>Trễ (sau)</span></div>
      <div><span>Giờ làm bình quân sản xuất</span><span>Nonfarm payrolls</span><span>Thời gian thất nghiệp</span></div>
      <div><span>Đơn trợ cấp thất nghiệp lần đầu</span><span>Thu nhập cá nhân thực</span><span>Tồn kho/doanh số</span></div>
      <div><span>Đơn hàng mới, giấy phép xây dựng</span><span>Sản xuất công nghiệp</span><span>Chi phí lao động/đơn vị</span></div>
      <div><span>Chứng khoán, chênh lệch lãi suất</span><span>Doanh số sản xuất và thương mại</span><span>Prime rate, dư nợ vay, CPI dịch vụ</span></div></div>
      <p class="sd-note">Kỳ vọng, quyết định → dẫn dắt · Kết quả hiện tại → trùng · Hệ quả tích lũy → trễ</p>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>Growth rate cycle báo sớm nhất</span><span>4 pha theo dấu và hướng của output gap</span>
      <span>Suy thoái: 2 quý GDP giảm</span><span>Thất nghiệp, lạm phát đi trễ</span>
      <span>Tín dụng thuận chu kỳ, khuếch đại suy thoái</span><span>Tồn kho/doanh số cao gần đỉnh</span>
      <span>Giờ làm đổi trước số việc làm</span><span>Hàng lâu bền nhạy nhất</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 10 câu, mục tiêu ≥ 7 câu đúng.</p>`),
  ];

  addDeck('EC-02', `Slide Business Cycles - bản thiết kế riêng (${slides.length} slide)`, slides);
}());
