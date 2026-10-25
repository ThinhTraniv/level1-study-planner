// Bộ slide tự thiết kế cho EQ-01 Equity Instrument Features.
(function () {
  const L = window.LESSONS && window.LESSONS['EQ-01'];
  if (!L) return;
  const { slide, addDeck } = window.CFAH;
  const K = 'EQ-01 · Equity Instrument Features';
  const S = (title, body, opt = {}) => slide(title, body, Object.assign({ kicker: K }, opt));

  // Thác thanh lý: hai kịch bản tài sản 500 và 400 (nợ 320, ưu đãi 100).
  function waterfall() {
    const W = 600, H = 290, b = 245, sc = 0.42;
    const cases = [[500, 'Tài sản 500'], [400, 'Tài sản 400']];
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv big" role="img" aria-label="Thứ tự chia tài sản khi thanh lý">`;
    s += `<line x1="10" y1="${b}" x2="590" y2="${b}" class="sv-axis"/>`;
    cases.forEach(([A, lab], k) => {
      const x = 20 + k * 300, debt = Math.min(A, 320), pref = Math.min(A - debt, 100), com = A - debt - pref;
      let y = b;
      [[debt, 'sv-panel', `Nợ ${debt}`, ''], [pref, 'sv-key', `Ưu đãi ${pref}`, ''], [com, 'sv-node up', `Phổ thông ${com}`, 'sv-t-up']].forEach(([v, cls, txt, tc]) => {
        if (v <= 0) { s += `<text x="${x + 112}" y="${y - 8}" class="sv-txt sv-t-down" text-anchor="start">Phổ thông 0</text>`; return; }
        const h = v * sc;
        s += `<rect x="${x}" y="${y - h}" width="100" height="${h}" class="${cls}"/>`;
        s += `<text x="${x + 112}" y="${y - h / 2 + 7}" class="sv-txt ${tc}" text-anchor="start">${txt}</text>`;
        y -= h;
      });
      s += `<text x="${x + 50}" y="${b + 30}" class="sv-muted">${lab}</text>`;
    });
    return `${s}</svg>`;
  }

  // Thang rủi ro từ thấp đến cao (với nhà đầu tư).
  const ladder = (() => {
    const st = [['Trái phiếu', 'ưu tiên nhất'], ['Ưu đãi', 'cumul., putable'], ['Ưu đãi', 'noncum., callable'], ['Phổ thông', 'phần còn lại']];
    let s = '<svg viewBox="0 0 600 190" class="sv big" role="img" aria-label="Thang rủi ro của các công cụ cùng một công ty">';
    st.forEach(([n, d], i) => {
      const x = 8 + i * 148, h = 70 + i * 25;
      s += `<rect x="${x}" y="${160 - h}" width="140" height="${h}" rx="10" class="${i === 3 ? 'sv-node down' : i === 0 ? 'sv-node up' : 'sv-panel'}"/>`;
      s += `<text x="${x + 70}" y="${160 - h + 32}" class="sv-txt">${n}</text><text x="${x + 70}" y="${160 - h + 56}" class="sv-muted" style="font-size:15px">${d}</text>`;
    });
    s += '<text x="8" y="184" class="sv-muted sv-t-up" text-anchor="start">ít rủi ro</text><text x="592" y="184" class="sv-muted sv-t-down" text-anchor="end">rủi ro nhất, tiềm năng cao nhất</text></svg>';
    return s;
  })();

  // Vòng đời vốn tư nhân.
  const peLife = (() => {
    const st = [['Venture capital', 'giai đoạn đầu'], ['Growth equity', 'mở rộng'], ['IPO / niêm yết', 'cổ phiếu niêm yết'], ['Buyout (LBO)', 'về lại tư nhân']];
    let s = '<svg viewBox="0 0 600 170" class="sv big" role="img" aria-label="Các dạng vốn cổ phần tư nhân theo vòng đời công ty">';
    st.forEach(([n, d], i) => {
      const x = 20 + i * 147;
      s += `<rect x="${x}" y="40" width="130" height="70" rx="12" class="${i === 2 ? 'sv-key' : 'sv-panel'}"/><text x="${x + 65}" y="72" class="sv-txt" style="font-size:15px">${n}</text><text x="${x + 65}" y="96" class="sv-muted" style="font-size:13px">${d}</text>`;
      if (i < 3) s += `<line x1="${x + 132}" y1="75" x2="${x + 145}" y2="75" class="sv-up"/>`;
    });
    s += '<text x="300" y="150" class="sv-txt sv-t-pv">PIPE: nhà đầu tư tư nhân mua khối lớn của công ty đang niêm yết</text></svg>';
    return s;
  })();

  const slides = [
    S('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Equities · EQ-01</div>
      <h2>Equity Instrument<br>Features</h2>
      <p>Mua cổ phiếu là mua quyền gì?</p>
      <div class="sd-chips"><span>LOS 1 · Đặc điểm và các loại</span><span>LOS 2 · Niêm yết và tư nhân</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Năm đặc điểm của vốn cổ phần', `<div class="sd-check">
      <span>Quyền đòi phần còn lại (residual claim)</span><span>Trách nhiệm hữu hạn</span>
      <span>Vĩnh viễn, không đáo hạn</span><span>Cổ tức tùy HĐQT, không trả không vỡ nợ</span>
      <span>Có quyền biểu quyết, kiểm soát</span><span>Lợi ích không giới hạn trên</span></div>
      <p class="sd-note">Đứng <b>cuối hàng</b> khi chia tiền → rủi ro cao nhất → được hưởng <b>phần dư</b> và <b>quyền kiểm soát</b>.</p>`),

    S('Nợ và vốn cổ phần', `<div class="sd-tbl grid"><div class="head"><span>Tiêu chí</span><span>Nợ</span><span>Vốn cổ phần</span></div>
      <div><span>Quyền đòi</span><span>Hợp đồng cố định</span><span>Phần còn lại</span></div>
      <div><span>Không trả</span><span>Vỡ nợ</span><span>Không sao</span></div>
      <div><span>Kỳ hạn</span><span>Có</span><span>Vĩnh viễn</span></div>
      <div><span>Thanh lý</span><span>Trước</span><span>Sau cùng</span></div>
      <div><span>Biểu quyết</span><span>Thường không</span><span>Có</span></div>
      <div><span>Lợi ích tối đa</span><span>Lãi + gốc</span><span>Không giới hạn</span></div></div>`),

    S('Thứ tự thanh lý: ai chịu lỗ trước?', `<div class="sd-cols2 wide-left"><div>${waterfall()}</div>
      <div><p class="sd-cap">Nợ 320, ưu đãi 100, 10 triệu cổ phiếu phổ thông</p>
      <div class="sd-rule up">Tài sản 500: phổ thông nhận <b>80 (8/CP)</b></div>
      <div class="sd-rule down">Tài sản 400: ưu đãi nhận <b>80</b></div><div class="sd-rule down">Tài sản 400: phổ thông nhận <b>0</b></div>
      <p class="sd-note">Tài sản giảm 100: cổ đông phổ thông mất 80, ưu đãi mất 20, chủ nợ không mất gì.</p></div></div>`),

    S('Ba nhóm quyền của cổ đông phổ thông', `<div class="sd-cols3">
      <div class="sd-card"><div class="sd-n">1</div><b>Kinh tế</b><p>Cổ tức khi công bố, phần dư khi thanh lý, quyền ưu tiên mua (preemptive)</p></div>
      <div class="sd-card acc"><div class="sd-n">2</div><b>Kiểm soát</b><p>Bầu HĐQT, duyệt sáp nhập, sửa điều lệ</p><small>Chi tiết ở EQ-02</small></div>
      <div class="sd-card"><div class="sd-n">3</div><b>Thông tin, pháp lý</b><p>Nhận báo cáo, xem sổ sách, khởi kiện</p></div></div>
      <p class="sd-note">Preemptive right: nắm 2%, công ty phát hành thêm 25% cho người khác → còn <b>1,6%</b> nếu không được mua trước.</p>`),

    S('Cổ phiếu ưu đãi: lai giữa nợ và vốn', `<div class="sd-cols2">
      <div class="sd-card"><b>Giống nợ</b><p>Cổ tức cố định (% mệnh giá)</p><p>Không hưởng tăng trưởng</p><p>Thường không biểu quyết</p></div>
      <div class="sd-card acc"><b>Giống vốn</b><p>Bỏ cổ tức không vỡ nợ</p><p>Thường không kỳ hạn</p><p>Sau mọi chủ nợ khi thanh lý</p></div></div>
      <p class="sd-note">Ưu tiên hơn cổ phiếu phổ thông: <b>cổ tức trước</b>, <b>mệnh giá trước</b> khi thanh lý.</p>`),

    S('Cumulative và noncumulative', `${window.CFAH.tl(3, [{ t: 1, label: 'bỏ qua 4', cls: 'down' }, { t: 2, label: 'bỏ qua 4', cls: 'down' }, { t: 3, label: 'phải trả 12', cls: 'pv' }], { h: 140, ticks: ['0', 'năm 1', 'năm 2', 'năm 3'] })}
      <div class="sd-cols2"><div class="sd-rule up">Cumulative: 2 năm nợ đọng + năm nay = <b>12</b></div><div class="sd-rule down">Noncumulative: chỉ năm nay = <b>4</b></div></div>
      <p class="sd-note">Mệnh giá 50, cổ tức 8% = 4/năm. Phải trả đủ trước khi trả cổ tức cho cổ đông phổ thông.</p>`),

    S('Participating và convertible', `<div class="sd-cols2">
      <div class="sd-card"><b>Participating</b><p>Cổ tức cố định <b>+</b> phần chia thêm khi lợi nhuận vượt ngưỡng</p><p>Có thể nhận thêm tài sản khi thanh lý</p><small>Hay gặp trong venture capital</small></div>
      <div class="sd-card acc"><b>Convertible</b><div class="sd-f sm">Giá trị chuyển đổi = tỷ lệ × giá CP phổ thông</div><p>Tỷ lệ 3, giá 30 → <b>90</b> &lt; 100: giữ</p><p>Tỷ lệ 3, giá 40 → <b>120</b> &gt; 100: đổi</p></div></div>`),

    S('Ai được lợi từ điều khoản?', `<div class="sd-cols2">
      <div><div class="sd-rule up">Cumulative <b>nhà đầu tư</b></div><div class="sd-rule up">Participating <b>nhà đầu tư</b></div><div class="sd-rule up">Convertible <b>nhà đầu tư</b></div><div class="sd-rule up">Putable <b>nhà đầu tư</b></div></div>
      <div><div class="sd-rule down">Callable <b>công ty</b></div>
      <p class="sd-note">Quyền thuộc về nhà đầu tư → rủi ro thấp hơn → <b>giá cao hơn</b>, lợi suất yêu cầu thấp hơn.</p>
      <p class="sd-note">Quyền thuộc về công ty → nhà đầu tư đòi <b>bù thêm</b>.</p></div></div>`),

    S('Thang rủi ro trong cùng một công ty', `${ladder}
      <p class="sd-note">Ưu đãi ít rủi ro hơn phổ thông, nhưng vẫn rủi ro hơn trái phiếu của cùng công ty.</p>`),

    S('Công cụ gắn với cổ phiếu', `<div class="sd-cols3">
      <div class="sd-card acc"><b>Warrant</b><p>Công ty phát hành; thực hiện → cổ phiếu <b>mới</b>, pha loãng</p><small>Covered warrant trên HOSE thì khác</small></div>
      <div class="sd-card"><b>Rights</b><p>Quyền ngắn hạn mua cổ phiếu mới giá rẻ cho cổ đông hiện hữu</p><small>Chi tiết ở EQ-03</small></div>
      <div class="sd-card"><b>Convertible bond</b><p>Là nợ cho đến khi đổi sang cổ phiếu</p><small>Học ở Fixed Income</small></div></div>`),

    S('Niêm yết và tư nhân', `<div class="sd-tbl grid"><div class="head"><span>Tiêu chí</span><span>Niêm yết</span><span>Tư nhân</span></div>
      <div><span>Thanh khoản</span><span>Cao</span><span>Thấp</span></div>
      <div><span>Giá</span><span>Liên tục</span><span>Thương lượng, định kỳ</span></div>
      <div><span>Công bố</span><span>Bắt buộc, công khai</span><span>Hạn chế</span></div>
      <div><span>Sở hữu</span><span>Phân tán</span><span>Tập trung, có ghế HĐQT</span></div>
      <div><span>Tầm nhìn</span><span>Áp lực quý</span><span>Dài hạn, có kế hoạch thoái vốn</span></div>
      <div><span>Lợi suất kỳ vọng</span><span>Thị trường</span><span>Cao hơn (bù kém thanh khoản)</span></div></div>`),

    S('Các dạng vốn cổ phần tư nhân', `${peLife}
      <p class="sd-note">Ví dụ chiết khấu kém thanh khoản: tương đương niêm yết 120, chiết khấu 25% → <b>90</b>.</p>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>Cổ đông: residual claim, trách nhiệm hữu hạn</span><span>Không trả cổ tức không phải vỡ nợ</span>
      <span>Thanh lý: nợ → ưu đãi → phổ thông</span><span>Cumulative: trả nợ đọng + kỳ này</span>
      <span>Convertible: tỷ lệ × giá phổ thông</span><span>Callable lợi công ty, putable lợi nhà đầu tư</span>
      <span>Warrant gây pha loãng</span><span>Tư nhân: kém thanh khoản, giá "mượt"</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 10 câu, mục tiêu ≥ 7 câu đúng.</p>`),
  ];

  addDeck('EQ-01', `Slide Equity Features - bản thiết kế riêng (${slides.length} slide)`, slides);
}());
