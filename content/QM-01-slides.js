// Bộ slide tự thiết kế cho QM-01 Returns of Financial Assets and Instruments.
// Gắn vào LESSONS['QM-01'].slides.
(function () {
  const { slide, addDeck, frac } = window.CFAH;
  const K = { kicker: 'QM-01 · Returns' };
  const S = (title, body) => slide(title, body, K);
  const fmt = (x, d = 2) => x.toFixed(d).replace('.', ',');

  // Lãi đơn và lãi kép: 100, 10%/năm, 0-5 năm.
  function simpleVsCompound() {
    const W = 600, H = 260, l = 60, r = 580, top = 20, b = 210, n = 5;
    const ys = v => b - ((v - 100) / (170 - 100)) * (b - top);
    const xs = i => l + 40 + i * ((r - l - 80) / n);
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv" role="img" aria-label="Lãi đơn và lãi kép">`;
    s += `<line x1="${l}" y1="${b}" x2="${r}" y2="${b}" class="sv-axis"/>`;
    [100, 130, 160].forEach(v => { s += `<line x1="${l}" y1="${ys(v)}" x2="${r}" y2="${ys(v)}" class="sv-grid"/><text x="${l - 8}" y="${ys(v) + 5}" class="sv-muted" text-anchor="end">${v}</text>`; });
    for (let i = 0; i <= n; i++) {
      const sim = 100 * (1 + 0.1 * i), com = 100 * 1.1 ** i;
      s += `<line x1="${xs(i) - 9}" y1="${b}" x2="${xs(i) - 9}" y2="${ys(sim)}" class="sv-axis" style="stroke-width:16"/>`;
      s += `<line x1="${xs(i) + 9}" y1="${b}" x2="${xs(i) + 9}" y2="${ys(com)}" class="sv-curve" style="stroke-width:16"/>`;
      s += `<text x="${xs(i)}" y="${b + 22}" class="sv-muted">năm ${i}</text>`;
    }
    s += `<text x="${xs(5) + 9}" y="${ys(100 * 1.1 ** 5) - 8}" class="sv-txt">${fmt(100 * 1.1 ** 5)}</text><text x="${xs(5) - 30}" y="${ys(150) + 4}" class="sv-muted" text-anchor="end">150</text>`;
    s += `<text x="${l + 10}" y="${top + 10}" class="sv-muted" text-anchor="start">xám: lãi đơn · xanh: lãi kép (10%/năm)</text>`;
    return `${s}</svg>`;
  }

  // Các viên gạch lợi suất yêu cầu.
  function bricks() {
    const parts = [['Thực', 'sv-axis'], ['Lạm phát', 'sv-curve'], ['Kỳ hạn', 'sv-pv'], ['Vỡ nợ + TK', 'sv-down'], ['ERP', 'sv-up']];
    const rows = [['Tín phiếu', [1.5, 2.5, 0, 0, 0]], ['TPCP 10 năm', [1.5, 2.5, 0.8, 0, 0]], ['TPDN 10 năm', [1.5, 2.5, 0.8, 1.7, 0]], ['Cổ phiếu', [1.5, 2.5, 0, 0, 5]]];
    const W = 600, H = 250, l = 140, sc = 44;
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv" role="img" aria-label="Các viên gạch của lợi suất yêu cầu">`;
    rows.forEach(([lab, v], i) => {
      const y = 30 + i * 46;
      let x = l;
      s += `<text x="${l - 10}" y="${y + 5}" class="sv-txt" text-anchor="end">${lab}</text>`;
      v.forEach((w, k) => { if (w) { s += `<line x1="${x}" y1="${y}" x2="${x + w * sc - 2}" y2="${y}" class="${parts[k][1]}" style="stroke-width:26"/>`; x += w * sc; } });
      s += `<text x="${x + 8}" y="${y + 5}" class="sv-txt" text-anchor="start">${fmt(v.reduce((a, c) => a + c, 0), 1)}%</text>`;
    });
    parts.forEach(([lab, c], k) => { const x = 30 + k * 115; s += `<line x1="${x}" y1="225" x2="${x + 22}" y2="225" class="${c}" style="stroke-width:14"/><text x="${x + 28}" y="230" class="sv-muted" text-anchor="start">${lab}</text>`; });
    return `${s}</svg>`;
  }

  const slides = [
    slide('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Quantitative Methods · QM-01</div>
      <h2>Returns of Financial<br>Assets and Instruments</h2>
      <p>Return đến từ đâu, và nên đòi bao nhiêu?</p>
      <div class="sd-chips"><span>LOS 1 · Diễn giải return</span><span>LOS 2 · Lợi suất yêu cầu, phi rủi ro, phần bù, lạm phát</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Ba module, ba câu hỏi về return', `<div class="sd-cols3">
      <div class="sd-card acc"><div class="sd-n">1</div><b>Return từ đâu ra?</b><p>Thời gian, lạm phát, rủi ro.</p><small>QM-01 (hôm nay)</small></div>
      <div class="sd-card"><div class="sd-n">2</div><b>Tính thế nào?</b><p>HPR, trung bình, annualized, sau thuế, đòn bẩy.</p><small>QM-02</small></div>
      <div class="sd-card"><div class="sd-n">3</div><b>So với ai?</b><p>MWR, TWR và chỉ số thị trường.</p><small>QM-03</small></div></div>`),

    S('Nhà đầu tư đòi bù cho ba thứ', `<div class="sd-cols3">
      <div class="sd-card"><b>Thời gian</b><p>Hoãn tiêu dùng hôm nay.</p><div class="sd-f sm">r thực</div></div>
      <div class="sd-card"><b>Lạm phát</b><p>Tiền mất sức mua.</p><div class="sd-f sm">π kỳ vọng</div></div>
      <div class="sd-card acc"><b>Rủi ro</b><p>Vỡ nợ, khó bán, kỳ hạn dài, biến động giá.</p><div class="sd-f sm">phần bù rủi ro</div></div></div>
      <p class="sd-note">Ba cách hiểu cùng một lãi suất: <b>lợi suất yêu cầu</b> · <b>lãi suất chiết khấu</b> · <b>chi phí cơ hội</b>.</p>`),

    S('Lãi đơn và lãi kép', `<div class="sd-cols2 wide-left"><div>${simpleVsCompound()}</div>
      <div><div class="sd-f sm">Lãi đơn: PV × (1 + r × N)</div><div class="sd-f sm">Lãi kép: PV × (1 + r)<sup>N</sup></div>
      <p class="sd-note">10.000 USD, 6%, 5 năm: <b>13.000</b> (đơn) và <b>13.382,26</b> (kép).</p>
      <p class="sd-note">Đề ghi <b>simple interest</b> → tính tay, không bấm TVM.</p></div></div>`),

    S('Return = thu nhập + lãi vốn', `<div class="sd-big">${frac('D<sub>1</sub>', 'P<sub>0</sub>')} + ${frac('P<sub>1</sub> - P<sub>0</sub>', 'P<sub>0</sub>')}</div>
      <div class="sd-cols3">
      <div class="sd-card"><b>Thu nhập</b><p>1,2 / 40 = <b>3%</b></p><small>Cổ tức, coupon, tiền thuê. Không âm.</small></div>
      <div class="sd-card"><b>Lãi vốn</b><p>(43 - 40) / 40 = <b>7,5%</b></p><small>Thay đổi giá. Có thể âm.</small></div>
      <div class="sd-card acc"><b>Tổng return</b><p><b>10,5%</b></p><small>Mua 40, cổ tức 1,2, bán 43.</small></div></div>`),

    S('Đã thực hiện, kỳ vọng, yêu cầu', `<div class="sd-cols3">
      <div class="sd-card"><b>Realized (ex post)</b><p>Đã kiếm được bao nhiêu?</p><small>Quá khứ, đo chính xác</small></div>
      <div class="sd-card"><b>Expected (ex ante)</b><p>Dự báo sẽ kiếm bao nhiêu?</p><small>Tương lai, tùy người dự báo</small></div>
      <div class="sd-card acc"><b>Required</b><p>Cần ít nhất bao nhiêu?</p><small>Tùy rủi ro của tài sản</small></div></div>
      <div class="sd-rule up">Kỳ vọng &gt; yêu cầu <b>Rẻ - mua</b></div><div class="sd-rule down">Kỳ vọng &lt; yêu cầu <b>Đắt - tránh</b></div>`),

    S('Fisher: danh nghĩa, thực và lạm phát', `<div class="sd-big">(1 + r<sub>DN</sub>) = (1 + r<sub>thực</sub>)(1 + π)</div>
      <div class="sd-cols2">
      <div class="sd-card"><b>Xuôi</b><p>r<sub>thực</sub> 1,5%, π 3,2%</p><p>1,015 × 1,032 - 1 = <b>4,748%</b></p><small>Cộng gần đúng: 4,7%</small></div>
      <div class="sd-card acc"><b>Ngược</b><p>Tín phiếu 5%, π 3,5%</p><p>1,05 / 1,035 - 1 = <b>1,449%</b></p><small>Chia, không trừ</small></div></div>
      <p class="sd-note">π là lạm phát <b>kỳ vọng</b>. Lãi suất thực âm: tiền nhiều hơn nhưng mua được ít hàng hơn.</p>`),

    S('Dựng lợi suất từ các viên gạch', `${bricks()}
      <p class="sd-note">Ví dụ minh họa: thực 1,5% · lạm phát 2,5% · kỳ hạn 0,8% · vỡ nợ + thanh khoản 1,7% · ERP 5%.</p>`),

    S('Chênh lệch lợi suất: viên gạch nào khác nhau?', `<div class="sd-rule">Cùng kỳ hạn, khác nhà phát hành <b>Vỡ nợ + thanh khoản</b></div>
      <div class="sd-rule">Cùng nhà phát hành, khác kỳ hạn <b>Kỳ hạn</b></div>
      <div class="sd-rule">Cùng tín nhiệm và kỳ hạn, ít giao dịch hơn <b>Thanh khoản</b></div>
      <div class="sd-rule">Tín phiếu kho bạc ngắn hạn <b>Chỉ r thực + π</b></div>
      <p class="sd-note">TPDN 10 năm 6,5% - TPCP 10 năm 4,8% = <b>1,7%</b> = phần bù vỡ nợ 1,2% + thanh khoản 0,5%.</p>`),

    S('Cổ phiếu: phần bù rủi ro vốn cổ phần', `<div class="sd-f">Lợi suất yêu cầu ≈ r<sub>f danh nghĩa</sub> + ERP</div>
      <div class="sd-cols2"><div class="sd-card"><b>Ví dụ</b><p>r<sub>f</sub> = 4%, ERP = 6,5% → yêu cầu <b>10,5%</b></p><p>Kỳ vọng 9% &lt; 10,5% → <b>đắt</b></p></div>
      <div class="sd-card acc"><b>Vì sao ERP lớn?</b><p>Cổ đông nhận phần còn lại sau chủ nợ. Không có ngày đáo hạn, cổ tức không cam kết.</p></div></div>`),

    S('Bốn câu hỏi trước khi so sánh return', `<div class="sd-grid4">
      <div class="sd-card"><b>1. Cùng thời gian?</b><p>3% / 3 tháng khác 3% / năm → annualize.</p></div>
      <div class="sd-card"><b>2. Cùng loại?</b><p>Trước/sau phí, trước/sau thuế, danh nghĩa/thực.</p></div>
      <div class="sd-card"><b>3. Cùng rủi ro?</b><p>Return cao có thể chỉ là thưởng cho rủi ro cao.</p></div>
      <div class="sd-card"><b>4. Điểm chuẩn?</b><p>Quỹ lãi 12% khi chỉ số tăng 15% là kém.</p></div></div>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>Lãi suất = yêu cầu = chiết khấu = chi phí cơ hội</span><span>Simple interest: tính tay PV(1 + rN)</span>
      <span>Return = thu nhập + lãi/lỗ vốn</span><span>Kỳ vọng &gt; yêu cầu → rẻ</span>
      <span>Fisher chính xác: nhân/chia, không cộng/trừ</span><span>π là lạm phát kỳ vọng</span>
      <span>Cùng kỳ hạn → spread = vỡ nợ + thanh khoản</span><span>Return quá khứ cao ≠ kỳ vọng cao</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 8 câu, mục tiêu ≥ 6 câu đúng.</p>`),
  ];

  addDeck('QM-01', `Slide Returns - bản thiết kế riêng (${slides.length} slide)`, slides);
}());
