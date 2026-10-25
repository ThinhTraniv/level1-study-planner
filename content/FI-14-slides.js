// Bộ slide tự thiết kế cho FI-14 Credit Risk.
(function () {
  const L = window.LESSONS && window.LESSONS['FI-14'];
  if (!L) return;
  const { slide, addDeck, frac } = window.CFAH;
  const K = 'FI-14 · Credit Risk';
  const S = (title, body, opt = {}) => slide(title, body, Object.assign({ kicker: K }, opt));
  const fmt = (x, d = 2) => x.toFixed(d).replace('.', ',');

  const bars = (rows, max) => `<div class="sd-bars">${rows.map(([lab, v, note]) => `<div class="sd-bar"><span class="sd-bar-l">${lab}</span><span class="sd-bar-t"><i style="width:${(Math.abs(v) / max) * 100}%"></i></span><b>${note}</b></div>`).join('')}</div>`;

  // Cột chồng: lợi suất = chuẩn + tín dụng + thanh khoản.
  function stackCol() {
    const parts = [['Lợi suất chuẩn', 4.0, 'sv-panel'], ['Phần tín dụng', 1.7313, 'sv-node down'], ['Phần thanh khoản', 0.2687, 'sv-node up']];
    const W = 600, H = 260, b = 230, sc = 33, x = 120, w = 140;
    let y = b, s = `<svg viewBox="0 0 ${W} ${H}" class="sv big" role="img" aria-label="Tách yield spread">`;
    parts.forEach(([lab, v, cls]) => {
      const h = v * sc; y -= h;
      s += `<rect x="${x}" y="${y}" width="${w}" height="${h}" class="${cls}"/>`;
      s += `<text x="${x + w + 20}" y="${y + h / 2 + 6}" class="sv-txt" text-anchor="start">${lab}: ${fmt(v)}%</text>`;
    });
    s += `<line x1="${x - 20}" y1="${b}" x2="${x + w + 20}" y2="${b}" class="sv-axis"/>`;
    s += `<text x="${x + w / 2}" y="${y - 10}" class="sv-txt">Lợi suất 6,00%</text>`;
    return `${s}</svg>`;
  }

  const slides = [
    S('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Fixed Income · FI-14</div>
      <h2>Credit Risk</h2>
      <p>Bao nhiêu khả năng mất, và mất bao nhiêu</p>
      <div class="sd-chips"><span>LOS 1 · POD và LGD</span><span>LOS 2 · Xếp hạng tín nhiệm</span><span>LOS 3 · Yếu tố của yield spread</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Hai thành phần của credit risk', `<div class="sd-big">Expected loss = POD × LGD</div>
      <div class="sd-cols2"><div class="sd-card"><b>POD</b><p>Khả năng <b>không trả</b> đủ, đúng hạn.</p><small>Gắn với người vay</small></div>
      <div class="sd-card acc"><b>LGD = EE × (1 - RR)</b><p>Số tiền <b>mất đi</b> nếu vỡ nợ.</p><small>Gắn với từng khoản nợ</small></div></div>`),

    S('Từ exposure đến expected loss', `<div class="sd-steps"><span>① Expected exposure: <b>1.000</b> USD</span><span>② Recovery rate 40% → LGD = 1.000 × 60% = <b>600</b></span><span>③ POD 2% → Expected loss = 2% × 600 = <b>12</b> (1,2%)</span></div>
      <div class="sd-cols2"><div class="sd-rule up">Đúng: dùng <b>1 - RR</b></div><div class="sd-rule down">Bẫy: 2% × 40% × 1.000 = <b>8</b></div></div>`),

    S('Cùng POD, khác LGD', `<p class="sd-cap">Cùng một công ty, POD 2%, expected loss trên 100 mệnh giá:</p>
      ${bars([['Senior secured (RR 70%)', 0.6, '0,60'], ['Subordinated (RR 20%)', 1.6, '1,60']], 1.6)}
      <p class="sd-note">Vỡ nợ chéo: một khoản vỡ thì các khoản khác cũng vỡ → POD như nhau. Khác nhau ở <b>tài sản bảo đảm</b> và <b>thứ tự ưu tiên</b> (FI-16). Suy thoái: POD tăng <b>và</b> RR giảm cùng lúc.</p>`),

    S('Credit spread ≈ POD × LGD', `<div class="sd-f">Spread ước tính = 2% × (1 - 40%) = <b>1,20%</b></div>
      <div class="sd-rule up">Spread thực tế 1,50% &gt; 1,20% → <b>được bù nhiều hơn mức hợp lý</b></div>
      <div class="sd-rule down">Spread thực tế 0,90% &lt; 1,20% → <b>không được bù đủ</b></div>
      <p class="sd-note">Chỉ là xấp xỉ: spread thực tế còn có phần bù thanh khoản và phần bù cho sự bất định của POD, RR.</p>`),

    S('Thang xếp hạng', `<div class="sd-tbl grid"><div class="head"><span>Nhóm</span><span>S&amp;P, Fitch</span><span>Moody's</span></div>
      <div><span>Investment grade cao</span><span>AAA ... A-</span><span>Aaa ... A3</span></div>
      <div><span>Investment grade thấp</span><span>BBB+, BBB, <b>BBB-</b></span><span>Baa1, Baa2, <b>Baa3</b></span></div>
      <div><span>High yield</span><span>BB+ ... B-</span><span>Ba1 ... B3</span></div>
      <div><span>Rất rủi ro</span><span>CCC+ ... C</span><span>Caa1 ... C</span></div>
      <div><span>Vỡ nợ</span><span>D</span><span>C</span></div></div>
      <p class="sd-note">Rơi từ BBB- xuống BB+: <b>fallen angel</b>, nhiều quỹ buộc phải bán.</p>`),

    S('Issuer rating và issue rating', `<div class="sd-cols2">
      <div class="sd-card"><b>Issuer rating (CFR)</b><p>Khả năng vỡ nợ chung của tổ chức.</p><small>Thường gắn với nợ senior unsecured</small></div>
      <div class="sd-card acc"><b>Issue rating</b><p>Từng trái phiếu cụ thể.</p><small>Notching lên (có bảo đảm) hoặc xuống (thứ cấp)</small></div></div>
      <p class="sd-note">Chi tiết về thứ tự ưu tiên và quy tắc notching: FI-16.</p>`),

    S('Công dụng và hạn chế', `<div class="sd-cols2">
      <div><p class="sd-cap">Công dụng</p><div class="sd-check"><span>So sánh rủi ro giữa các tổ chức</span><span>Theo dõi credit migration</span><span>Đáp ứng quy định, điều lệ quỹ, hợp đồng</span></div></div>
      <div><p class="sd-cap">Hạn chế</p><div class="sd-steps"><span>Chậm hơn giá thị trường</span><span>Rủi ro khó dự báo: LBO, kiện tụng, thiên tai</span><span>Split rating, có thể sai</span><span>Cùng hạng ≠ cùng lợi suất</span></div></div></div>`),

    S('Credit migration: kỳ vọng lệch về phía âm', `<p class="sd-cap">Trái phiếu BBB, spread duration 7,0. Đóng góp vào % thay đổi giá kỳ vọng:</p>
      ${bars([['Lên A (5%, -0,50%)', 0.175, '+0,175%'], ['Giữ BBB (90%)', 0, '0'], ['Xuống BB (4%, +1,20%)', 0.336, '-0,336%'], ['Xuống B (1%, +3,00%)', 0.21, '-0,210%']], 0.336)}
      <div class="sd-rule down">Tổng kỳ vọng <b>-0,37%</b>: lợi suất kỳ vọng thấp hơn YTM</div>`),

    S('Ba nhóm yếu tố của yield spread', `<div class="sd-cols3">
      <div class="sd-card"><div class="sd-n">1</div><b>Vĩ mô</b><p>Chu kỳ tín dụng, GDP, thất nghiệp</p><small>Suy thoái → spread nới rộng</small></div>
      <div class="sd-card"><div class="sd-n">2</div><b>Thị trường</b><p>Thanh khoản, cung cầu, tâm lý rủi ro</p><small>Phát hành ồ ạt → spread tăng</small></div>
      <div class="sd-card"><div class="sd-n">3</div><b>Riêng tổ chức</b><p>Kết quả kinh doanh, đòn bẩy, hạ bậc</p><small>Kết quả xấu → spread tăng</small></div></div>
      <p class="sd-note">Xếp hạng càng thấp: spread càng <b>cao</b> và càng <b>biến động</b>.</p>`),

    S('Tách spread: tín dụng và thanh khoản', `<div class="sd-cols2 wide-left"><div>${stackCol()}</div>
      <div><div class="sd-steps"><span>7 năm, coupon 6%, giá 99,25 / 100,75</span><span>Giá giữa 100 → lợi suất 6% → spread 2,00%</span><span>Bid 6,1350% - offer 5,8663% = <b>0,27%</b></span><span>Tín dụng = 2,00% - 0,27% = <b>1,73%</b></span></div></div></div>`),

    S('Spread đổi thì giá đổi bao nhiêu', `<div class="sd-f">%ΔPV ≈ -ModDur × ΔSpread + ½ × Convexity × (ΔSpread)<sup>2</sup></div>
      <div class="sd-cols2"><div class="sd-rule down">Spread +50 bps → <b>-3,18%</b></div><div class="sd-rule up">Spread -50 bps → <b>+3,32%</b></div></div>
      <p class="sd-note">ModDur 6,5; convexity 55: -6,5 × 0,005 = -3,25%, convexity +0,07%.</p>`),

    S('POD, LGD và spread theo xếp hạng', `<div class="sd-tbl grid"><div class="head"><span>Khi xếp hạng giảm</span><span>Hướng</span><span>Vì sao</span></div>
      <div><span>POD</span><span>Tăng</span><span>Khả năng trả nợ yếu hơn</span></div>
      <div><span>Mức spread</span><span>Tăng</span><span>Bù tổn thất kỳ vọng lớn hơn</span></div>
      <div><span>Độ biến động spread</span><span>Tăng</span><span>Nhạy hơn với chu kỳ và tin tức</span></div>
      <div><span>Thanh khoản</span><span>Thường giảm</span><span>Ít nhà đầu tư được phép nắm giữ</span></div></div>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>LGD = EE × (1 - RR)</span><span>EL = POD × LGD</span>
      <span>Spread ≈ POD × (1 - RR)</span><span>POD: người vay · LGD: khoản nợ</span>
      <span>BBB- / Baa3 là ranh giới</span><span>Xếp hạng chậm hơn thị trường</span>
      <span>Vĩ mô, thị trường, riêng tổ chức</span><span>Liquidity spread = y<sub>bid</sub> - y<sub>offer</sub></span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 10 câu, rồi FI-15 và FI-16.</p>`),
  ];

  addDeck('FI-14', 'Slide Credit Risk - bản thiết kế riêng (14 slide)', slides);
}());
