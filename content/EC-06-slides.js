// Bộ slide tự thiết kế cho EC-06 International Trade.
(function () {
  const L = window.LESSONS && window.LESSONS['EC-06'];
  if (!L) return;
  const { slide, addDeck } = window.CFAH;
  const K = 'EC-06 · International Trade';
  const S = (title, body, opt = {}) => slide(title, body, Object.assign({ kicker: K }, opt));

  // Đồ thị thuế quan: Qd = 200 - 2P, Qs = P - 10, giá thế giới 50, thuế 10.
  const tariffChart = (() => {
    const QD = p => 200 - 2 * p, QS = p => p - 10, PW = 50, P1 = 60;
    const l = 60, r = 585, t = 15, b = 265;
    const X = q => l + (q / 120) * (r - l), Y = p => b - ((p - 20) / 70) * (b - t);
    let s = `<svg viewBox="0 0 600 300" class="sv" role="img" aria-label="Tác động của thuế quan lên thị trường nội địa">`;
    s += `<polygon points="${X(QS(PW))},${Y(PW)} ${X(QS(P1))},${Y(P1)} ${X(QS(P1))},${Y(PW)}" class="sv-dot" opacity="0.55"/>`;
    s += `<polygon points="${X(QD(P1))},${Y(P1)} ${X(QD(PW))},${Y(PW)} ${X(QD(P1))},${Y(PW)}" class="sv-dot" opacity="0.55"/>`;
    s += `<rect x="${X(QS(P1))}" y="${Y(P1)}" width="${X(QD(P1)) - X(QS(P1))}" height="${Y(PW) - Y(P1)}" class="sv-panel"/>`;
    s += `<line x1="${l}" y1="${b}" x2="${r}" y2="${b}" class="sv-axis"/><line x1="${l}" y1="${t}" x2="${l}" y2="${b}" class="sv-axis"/>`;
    s += `<line x1="${X(QD(85))}" y1="${Y(85)}" x2="${X(QD(40))}" y2="${Y(40)}" class="sv-down"/><text x="${X(QD(42))}" y="${Y(42) - 12}" class="sv-txt sv-t-down">D</text>`;
    s += `<line x1="${X(QS(22))}" y1="${Y(22)}" x2="${X(QS(88))}" y2="${Y(88)}" class="sv-up"/><text x="${X(QS(86)) + 14}" y="${Y(86)}" class="sv-txt sv-t-up">S</text>`;
    s += `<line x1="${l}" y1="${Y(PW)}" x2="${r}" y2="${Y(PW)}" class="sv-dash"/><text x="${l - 8}" y="${Y(PW) + 5}" class="sv-muted" text-anchor="end">50</text>`;
    s += `<line x1="${l}" y1="${Y(P1)}" x2="${r}" y2="${Y(P1)}" class="sv-dash"/><text x="${l - 8}" y="${Y(P1) + 5}" class="sv-muted" text-anchor="end">60</text>`;
    [40, 50, 80, 100].forEach(q => { s += `<line x1="${X(q)}" y1="${Y(PW)}" x2="${X(q)}" y2="${b}" class="sv-grid"/><text x="${X(q)}" y="${b + 22}" class="sv-muted">${q}</text>`; });
    s += `<text x="${(X(50) + X(80)) / 2}" y="${(Y(PW) + Y(P1)) / 2 + 6}" class="sv-txt sv-t-pv">thuế 300</text>`;
    s += `<text x="${r}" y="${Y(P1) - 10}" class="sv-muted" text-anchor="end">P sau thuế</text><text x="${r}" y="${Y(PW) + 20}" class="sv-muted" text-anchor="end">P thế giới</text>`;
    s += `<text x="${X(100) + 14}" y="${Y(54)}" class="sv-txt" text-anchor="start">DWL</text>`;
    return `${s}</svg>`;
  })();

  // Bậc thang hội nhập của các khối thương mại.
  const stairs = (() => {
    const steps = [['FTA', 'xóa thuế nội khối'], ['Customs union', '+ thuế chung với bên ngoài'], ['Common market', '+ lao động, vốn tự do'], ['Economic union', '+ thể chế chung'], ['Monetary union', '+ đồng tiền chung']];
    let s = `<svg viewBox="0 0 600 300" class="sv" role="img" aria-label="Bậc thang hội nhập của khối thương mại">`;
    steps.forEach(([a, b], i) => {
      const x = 10 + i * 117, h = 50 + i * 48, y = 290 - h;
      s += `<rect x="${x}" y="${y}" width="110" height="${h}" rx="8" class="${i === 4 ? 'sv-key' : 'sv-panel'}"/>`;
      s += `<text x="${x + 55}" y="${y + 24}" class="sv-txt" style="font-size:14px">${a}</text><text x="${x + 55}" y="${y + 44}" class="sv-muted" style="font-size:11px">${b}</text>`;
    });
    return `${s}</svg>`;
  })();

  const slides = [
    S('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Economics · EC-06</div>
      <h2>International Trade</h2>
      <p>Vì sao buôn bán, ai được ai mất, và cái giá của rào cản</p>
      <div class="sd-chips"><span>LOS 1 · Lợi ích và chi phí</span><span>LOS 2 · Hạn chế thương mại</span><span>LOS 3 · Khối thương mại</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Ba câu hỏi của buổi học', `<div class="sd-cols3">
      <div class="sd-card"><div class="sd-n">1</div><b>Vì sao buôn bán?</b><p>Lợi thế so sánh: chi phí cơ hội thấp hơn</p></div>
      <div class="sd-card"><div class="sd-n">2</div><b>Rào cản tốn bao nhiêu?</b><p>Thuế quan, hạn ngạch, trợ cấp, VER</p></div>
      <div class="sd-card"><div class="sd-n">3</div><b>Vì sao lập khối?</b><p>FTA đến liên minh tiền tệ</p></div></div>
      <p class="sd-note">Thông điệp: thương mại tự do làm <b>tổng</b> phúc lợi tăng nhưng chia <b>không đều</b>.</p>`),

    S('Lợi thế so sánh: so chi phí cơ hội', `<div class="sd-tbl grid"><div class="head"><span>1 lao động / tháng</span><span>Gạo (tấn)</span><span>Máy (chiếc)</span><span>Giá của 1 tấn gạo</span></div>
      <div><span>Việt Nam</span><span>10</span><span>5</span><span><b>0,5 máy</b></span></div>
      <div><span>Hàn Quốc</span><span>12</span><span>15</span><span>1,25 máy</span></div></div>
      <div class="sd-cols2"><div class="sd-rule up"><span>Việt Nam: lợi thế so sánh</span><b>gạo</b></div><div class="sd-rule up"><span>Hàn Quốc: lợi thế so sánh</span><b>máy</b></div></div>
      <p class="sd-note">Hàn Quốc có lợi thế <b>tuyệt đối</b> ở cả hai mặt hàng, nhưng thương mại vẫn có lợi cho cả hai.</p>`),

    S('Chuyên môn hóa: chiếc bánh lớn hơn', `<div class="sd-tbl grid"><div class="head"><span>Chuyển lao động</span><span>Gạo</span><span>Máy</span></div>
      <div><span>Việt Nam: 3 người sang gạo</span><span>+30</span><span>-15</span></div>
      <div><span>Hàn Quốc: 2 người sang máy</span><span>-24</span><span>+30</span></div>
      <div><span><b>Tổng</b></span><span><b>+6</b></span><span><b>+15</b></span></div></div>
      <p class="sd-note">Giá trao đổi có lợi cho cả hai: từ <b>0,8 đến 2</b> tấn gạo cho 1 máy (giữa hai chi phí cơ hội).</p>`),

    S('Ai được, ai mất khi mở cửa?', `<div class="sd-cols2">
      <div><div class="sd-rule up"><span>Người tiêu dùng: giá thấp, nhiều lựa chọn</span><b>+</b></div><div class="sd-rule up"><span>Doanh nghiệp xuất khẩu</span><b>+</b></div><div class="sd-rule up"><span>Giảm sức mạnh độc quyền</span><b>+</b></div></div>
      <div><div class="sd-rule down"><span>Lao động ngành cạnh tranh nhập khẩu</span><b>-</b></div><div class="sd-rule down"><span>Bất bình đẳng ngắn hạn</span><b>-</b></div></div></div>
      <p class="sd-note">Lợi ích <b>phân tán</b>, thiệt hại <b>tập trung</b> → nhóm bị thiệt vận động bảo hộ. Dài hạn: đào tạo lại giúp bù đắp phần lớn chi phí.</p>`),

    S('Năm công cụ hạn chế thương mại', `<div class="sd-tbl grid"><div class="head"><span>Công cụ</span><span>Cách làm</span></div>
      <div><span>Tariff</span><span>Thuế lên hàng nhập khẩu</span></div>
      <div><span>Quota</span><span>Giới hạn lượng nhập khẩu</span></div>
      <div><span>Export subsidy</span><span>Trả tiền cho hàng xuất khẩu</span></div>
      <div><span>Domestic content</span><span>Tỷ lệ tối thiểu sản xuất trong nước</span></div>
      <div><span>VER</span><span>Nước xuất khẩu tự giới hạn lượng xuất</span></div></div>`),

    S('Lý do bảo hộ: cái nào có cơ sở?', `<div class="sd-cols2">
      <div class="sd-card acc"><b>Được nhà kinh tế ủng hộ</b><p><b>Infant industry</b>: bảo hộ tạm thời ngành non trẻ</p><p><b>National security</b>: hàng thiết yếu cho quốc phòng</p></div>
      <div class="sd-card"><b>Ít được ủng hộ</b><p>Bảo vệ việc làm: việc làm mới xuất hiện ở ngành khác</p><p>Bảo vệ doanh nghiệp: người tiêu dùng trả giá cao hơn</p></div></div>`),

    S('Thuế quan ở nước nhỏ', `<div class="sd-cols2 wide-left"><div>${tariffChart}</div>
      <div><div class="sd-steps"><span>Giá trong nước: 50 → <b>60</b></span><span>Nhập khẩu: 60 → <b>30</b></span><span>Sản xuất nội: 40 → 50</span><span>Tiêu dùng: 100 → 80</span></div></div></div>
      <p class="sd-note">Q<sub>D</sub> = 200 - 2P, Q<sub>S</sub> = P - 10, thuế 10. Nước nhỏ: giá thế giới không đổi, giá trong nước tăng <b>đúng bằng thuế</b>.</p>`),

    S('Đếm phúc lợi', `<div class="sd-bars">
      <div class="sd-bar"><span class="sd-bar-l">Người tiêu dùng mất</span><span class="sd-bar-t"><i style="width:100%"></i></span><b>-900</b></div>
      <div class="sd-bar"><span class="sd-bar-l">Nhà sản xuất được</span><span class="sd-bar-t"><i style="width:50%"></i></span><b>+450</b></div>
      <div class="sd-bar"><span class="sd-bar-l">Chính phủ thu thuế</span><span class="sd-bar-t"><i style="width:33.3%"></i></span><b>+300</b></div>
      <div class="sd-bar"><span class="sd-bar-l">Deadweight loss</span><span class="sd-bar-t"><i style="width:16.7%"></i></span><b>-150</b></div></div>
      <p class="sd-note">DWL = 50 (sản xuất kém hiệu quả) + 100 (tiêu dùng bị cắt bớt). Nước lớn: giá thế giới giảm, có thể lợi ròng nhưng dễ bị trả đũa.</p>`),

    S('Hạn ngạch, VER: tô hạn ngạch về tay ai?', `<div class="sd-tbl grid"><div class="head"><span>Công cụ</span><span>Giá trong nước</span><span>Hình chữ nhật 300 thuộc về</span></div>
      <div><span>Thuế 10</span><span>60</span><span>Chính phủ</span></div>
      <div><span>Quota 30, đấu giá giấy phép</span><span>60</span><span>Chính phủ</span></div>
      <div><span>Quota 30, cấp cho nhà nhập khẩu</span><span>60</span><span>Nhà nhập khẩu trong nước</span></div>
      <div><span>VER</span><span>60</span><span><b>Nhà xuất khẩu nước ngoài</b></span></div></div>
      <p class="sd-note">VER = hạn ngạch không thu tiền giấy phép → nước nhập khẩu mất thêm cả phần tô hạn ngạch.</p>`),

    S('Trợ cấp xuất khẩu', `<div class="sd-cols2"><div><div class="sd-f sm">Nước nhỏ: P<sub>nội</sub> = P<sub>thế giới</sub> + trợ cấp</div>
      <div class="sd-steps"><span>Giá trong nước: 50 → <b>58</b></span><span>Xuất khẩu: 30 → <b>54</b></span></div></div>
      <div><div class="sd-rule down"><span>Người tiêu dùng</span><b>-368</b></div><div class="sd-rule up"><span>Nhà sản xuất</span><b>+704</b></div><div class="sd-rule down"><span>Ngân sách</span><b>-432</b></div><div class="sd-rule down"><span>Ròng</span><b>-96</b></div></div></div>
      <p class="sd-note">Q<sub>D</sub> = 100 - P, Q<sub>S</sub> = 2P - 20, trợ cấp 8. Nước lớn: giá thế giới giảm, người tiêu dùng nước ngoài hưởng lợi.</p>`),

    S('Bậc thang khối thương mại', `<div class="sd-cols2 wide-left"><div>${stairs}</div><div class="sd-card"><b>Mỗi bậc giữ mọi đặc điểm bậc dưới</b><p>FTA: USMCA, AFTA</p><p>Economic union: EU</p><p>Monetary union: khu vực euro</p></div></div>`),

    S('Lập khối: được gì, mất gì?', `<div class="sd-cols2">
      <div class="sd-card acc"><b>Động cơ, lợi ích</b><p>Thị trường lớn, lợi thế quy mô, cạnh tranh</p><p>Thu hút FDI</p><p>Giảm xung đột, dễ đàm phán hơn WTO</p><p><b>Trade creation</b></p></div>
      <div class="sd-card"><b>Mặt trái</b><p><b>Trade diversion</b>: mua của thành viên đắt hơn</p><p>Rào cản với ngoài khối tăng thì lợi ích giảm</p><p>Mất chủ quyền chính sách (chung tiền: không tự chỉnh lãi suất, tỷ giá)</p></div></div>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>Lợi thế so sánh = chi phí cơ hội thấp</span><span>Ngành cạnh tranh nhập khẩu chịu thiệt</span>
      <span>Thuế ở nước nhỏ: giá tăng bằng thuế</span><span>DWL = CS mất - PS được - thuế</span>
      <span>VER: tô hạn ngạch ra nước ngoài</span><span>Trợ cấp XK: người tiêu dùng nội thiệt</span>
      <span>Infant industry, national security</span><span>FTA → CU → CM → EU → MU</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 10 câu, mục tiêu ≥ 7 câu đúng.</p>`),
  ];

  addDeck('EC-06', `Slide International Trade - bản thiết kế riêng (${slides.length} slide)`, slides);
}());
