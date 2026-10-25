// Bộ slide tự thiết kế cho EQ-02 Equity Jurisdictions, Classes, and the Voting Process.
(function () {
  const L = window.LESSONS && window.LESSONS['EQ-02'];
  if (!L) return;
  const { slide, addDeck, frac } = window.CFAH;
  const K = 'EQ-02 · Jurisdictions, Classes, Voting';
  const S = (title, body, opt = {}) => slide(title, body, Object.assign({ kicker: K }, opt));
  const fmt = (x, d = 2) => x.toFixed(d).replace('.', ',');

  // Vốn và phiếu bầu của nhà sáng lập với cổ phiếu B 10 phiếu.
  const dualBars = (() => {
    const rows = [0.10, 0.15, 0.20].map(e => [e, (e * 10) / (e * 10 + (1 - e))]);
    return `<div class="sd-bars">${rows.map(([e, v]) => `<div class="sd-bar"><span class="sd-bar-l">Vốn ${Math.round(e * 100)}%</span><span class="sd-bar-t"><i style="width:${e * 100}%"></i></span><b>${Math.round(e * 100)}%</b></div>
      <div class="sd-bar"><span class="sd-bar-l">→ phiếu bầu</span><span class="sd-bar-t"><i style="width:${v * 100}%"></i></span><b>${fmt(v * 100)}%</b></div>`).join('')}</div>`;
  })();

  // Chứng chỉ lưu ký: cổ phiếu gửi ngân hàng lưu ký, ngân hàng phát hành DR.
  const drFlow = `<svg viewBox="0 0 600 190" class="sv big" role="img" aria-label="Cơ chế chứng chỉ lưu ký">
    <rect x="10" y="50" width="150" height="70" rx="12" class="sv-panel"/><text x="85" y="82" class="sv-txt" style="font-size:15px">Cổ phiếu Nhật</text><text x="85" y="104" class="sv-muted" style="font-size:13px">giữ ở nước sở tại</text>
    <rect x="225" y="50" width="150" height="70" rx="12" class="sv-key"/><text x="300" y="82" class="sv-txt" style="font-size:15px">Ngân hàng</text><text x="300" y="104" class="sv-muted" style="font-size:13px">lưu ký</text>
    <rect x="440" y="50" width="150" height="70" rx="12" class="sv-panel"/><text x="515" y="82" class="sv-txt" style="font-size:15px">ADR ở Mỹ</text><text x="515" y="104" class="sv-muted" style="font-size:13px">bằng USD</text>
    <line x1="162" y1="85" x2="222" y2="85" class="sv-up"/><line x1="377" y1="85" x2="437" y2="85" class="sv-up"/>
    <text x="192" y="40" class="sv-muted" style="font-size:13px">gửi giữ</text><text x="407" y="40" class="sv-muted" style="font-size:13px">phát hành</text>
    <text x="300" y="160" class="sv-txt sv-t-pv">1 ADR = 2 CP × 3.000 JPY / 150 = 40 USD</text></svg>`;

  // Trình tự biểu quyết.
  const voteSteps = (() => {
    const st = ['Ấn định record date', 'Gửi proxy statement', 'Phân tích, đối thoại', 'Bỏ phiếu qua trung gian', 'Đại hội, kiểm phiếu'];
    let s = '<svg viewBox="0 0 600 170" class="sv" role="img" aria-label="Trình tự biểu quyết">';
    s += '<line x1="40" y1="80" x2="560" y2="80" class="sv-axis"/>';
    st.forEach((n, i) => {
      const x = 60 + i * 120;
      s += `<circle cx="${x}" cy="80" r="16" class="sv-node ${i === 0 ? 'up' : ''}"/><text x="${x}" y="86" class="sv-txt">${i + 1}</text>`;
      const words = n.split(' '), half = Math.ceil(words.length / 2);
      s += `<text x="${x}" y="${i % 2 ? 130 : 30}" class="sv-txt" style="font-size:14px">${words.slice(0, half).join(' ')}</text><text x="${x}" y="${i % 2 ? 150 : 50}" class="sv-muted" style="font-size:13px">${words.slice(half).join(' ')}</text>`;
    });
    return `${s}</svg>`;
  })();

  // Chuỗi các bên trong biểu quyết.
  const chain = (() => {
    const st = [['Asset owner', 'chủ vốn, đặt chính sách'], ['Asset manager', 'bỏ phiếu thay khách'], ['Proxy advisor', 'khuyến nghị'], ['HĐQT, ban điều hành', 'đề xuất, khuyến nghị']];
    let s = '<svg viewBox="0 0 600 180" class="sv big" role="img" aria-label="Chuỗi các bên trong quy trình biểu quyết">';
    st.forEach(([n, d], i) => {
      const x = 10 + i * 148;
      s += `<rect x="${x}" y="40" width="136" height="80" rx="12" class="${i === 2 ? 'sv-key' : 'sv-panel'}"/><text x="${x + 68}" y="74" class="sv-txt" style="font-size:14px">${n}</text><text x="${x + 68}" y="98" class="sv-muted" style="font-size:12px">${d}</text>`;
      if (i < 3) s += `<line x1="${x + 138}" y1="80" x2="${x + 146}" y2="80" class="sv-up"/>`;
    });
    s += '<text x="300" y="160" class="sv-txt sv-t-down">mỗi mắt xích là một quan hệ ủy quyền - đại diện</text></svg>';
    return s;
  })();

  const slides = [
    S('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Equities · EQ-02</div>
      <h2>Equity Jurisdictions, Classes,<br>and the Voting Process</h2>
      <p>Cùng là cổ phiếu, nhưng quyền không giống nhau</p>
      <div class="sd-chips"><span>LOS 1 · Quyền theo nơi và theo loại</span><span>LOS 2 · Quy trình và các bên</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Hai câu hỏi trước khi mua một cổ phiếu', `<div class="sd-cols2">
      <div class="sd-card"><div class="sd-n">1</div><b>Ở đâu?</b><p>Đăng ký thành lập ở đâu → <b>luật công ty</b> nào bảo vệ tôi</p><p>Niêm yết ở đâu → <b>quy định công bố</b> nào áp dụng</p></div>
      <div class="sd-card acc"><div class="sd-n">2</div><b>Loại nào?</b><p>Loại cổ phiếu này có bao nhiêu phiếu bầu?</p><p>Quyền kinh tế có giống loại khác không?</p></div></div>
      <p class="sd-note">Quyền biểu quyết chỉ có giá trị khi được <b>thực hiện</b> qua quy trình với nhiều bên trung gian.</p>`),

    S('Hai mô hình pháp lý', `<div class="sd-tbl grid"><div class="head"><span>Tiêu chí</span><span>Mỹ, Anh</span><span>Châu Âu lục địa, châu Á</span></div>
      <div><span>Sở hữu</span><span>Phân tán</span><span>Tập trung</span></div>
      <div><span>Xung đột chính</span><span>Cổ đông - ban điều hành</span><span>Kiểm soát - thiểu số</span></div>
      <div><span>Mục tiêu</span><span>Shareholder primacy</span><span>Stakeholder</span></div>
      <div><span>Preemptive right</span><span>Ít phổ biến (Mỹ)</span><span>Mặc định theo luật</span></div></div>
      <p class="sd-note">Anh, EU, Việt Nam: vượt ngưỡng sở hữu → <b>nghĩa vụ chào mua công khai</b>.</p>`),

    S('Giới hạn sở hữu nước ngoài', `<div class="sd-cols2">
      <div><div class="sd-f">Room = (30% - 28,5%) × 5.000 triệu = <b>75 triệu CP</b></div>
      <p class="sd-note">Việt Nam: ngân hàng giới hạn 30%; một số ngành kinh doanh có điều kiện 49%; nhiều ngành khác không giới hạn.</p></div>
      <div><div class="sd-rule down">Hết room: khối ngoại mua của nhau <b>giá cao hơn sàn</b></div>
      <div class="sd-rule">Thái Lan: quyền kinh tế, không biểu quyết <b>NVDR</b></div></div></div>
      <p class="sd-note">Bẫy: nơi niêm yết không quyết định luật công ty (ví dụ đăng ký ở Cayman, niêm yết ở New York).</p>`),

    S('Dual-class: ít vốn, nhiều phiếu', `<div class="sd-cols2 wide-left"><div>${dualBars}</div>
      <div><div class="sd-f sm">Phiếu B = ${frac('CP B × 10', 'CP A × 1 + CP B × 10')}</div>
      <p class="sd-note">15% vốn → 150 / 235 = <b>63,83%</b> phiếu bầu.</p><p class="sd-note">Class A: 1 phiếu (công chúng) · Class B: 10 phiếu (nhà sáng lập)</p></div></div>`),

    S('Dual-class: ủng hộ hay phản đối?', `<div class="sd-cols2">
      <div><div class="sd-rule up">Tầm nhìn dài hạn <b>ủng hộ</b></div><div class="sd-rule up">Chống thâu tóm, IPO mà giữ quyền <b>ủng hộ</b></div></div>
      <div><div class="sd-rule down">Ban điều hành khó bị thay <b>phản đối</b></div><div class="sd-rule down">Rủi ro không đi kèm tiếng nói <b>phản đối</b></div></div></div>
      <p class="sd-note">Giải pháp trung gian: <b>sunset clause</b> - cổ phiếu B tự chuyển thành A sau một thời gian hoặc khi nhà sáng lập rời đi.</p>`),

    S('Các cấu trúc lệch khỏi "một cổ phiếu, một phiếu"', `<div class="sd-grid4">
      <div class="sd-card"><b>Loyalty shares</b><p>Nắm lâu → thêm phiếu (Pháp, Ý, Hà Lan)</p></div>
      <div class="sd-card"><b>Golden share</b><p>Nhà nước giữ quyền phủ quyết</p></div>
      <div class="sd-card"><b>A / B / H (Trung Quốc)</b><p>Cùng quyền kinh tế, khác nơi và đồng tiền giao dịch; giá có thể chênh</p></div>
      <div class="sd-card acc"><b>VIE</b><p>Kiểm soát bằng <b>hợp đồng</b>, không sở hữu trực tiếp</p></div></div>`),

    S('Chứng chỉ lưu ký (DR)', `${drFlow}
      <div class="sd-cols2"><div class="sd-rule up">Sponsored: công ty tham gia, người nắm DR <b>được biểu quyết</b></div><div class="sd-rule down">Unsponsored: biểu quyết thuộc về <b>ngân hàng</b></div></div>`),

    S('Trình tự biểu quyết', `${voteSteps}
      <p class="sd-note">Có tên vào <b>record date</b> mới được bỏ phiếu, kể cả khi đã bán trước ngày họp.</p>
      <p class="sd-note">Nội dung: bầu HĐQT, kiểm toán viên, say on pay, sáp nhập (đa số đặc biệt), đề xuất của cổ đông.</p>`),

    S('Plurality hay majority?', `<div class="sd-cols2">
      <div class="sd-card"><b>Plurality</b><p>Nhiều phiếu nhất là trúng</p><p>Không có đối thủ → <b>luôn trúng</b>, dù đa số không ủng hộ</p></div>
      <div class="sd-card acc"><b>Majority</b><p>Cần <b>hơn 50%</b> phiếu bầu</p><p>Không đạt → từ nhiệm hoặc HĐQT xem xét lại</p></div></div>
      <p class="sd-note">Việt Nam: nghị quyết thường cần trên 50% phiếu dự họp; vấn đề quan trọng từ 65%.</p>`),

    S('Bầu thẳng và bầu dồn phiếu', `<div class="sd-f">k ghế cần &gt; ${frac('k × S', 'N + 1')} cổ phiếu</div>
      <div class="sd-tbl grid"><div class="head"><span>1.000.000 CP, 5 ghế</span><span>Bầu thẳng</span><span>Bầu dồn</span></div>
      <div><span>Nắm 100.000</span><span>0</span><span>0</span></div>
      <div><span>Nắm 300.000</span><span>0</span><span>1</span></div>
      <div><span>Nắm 400.000</span><span>0</span><span>2</span></div></div>
      <p class="sd-note">Một ghế cần hơn 166.667 CP; hai ghế cần hơn 333.333 CP.</p>`),

    S('Ai làm gì trong quy trình?', `${chain}
      <div class="sd-cols2"><p class="sd-note"><b>Proxy advisor</b>: khuyến nghị, không sở hữu cổ phiếu. Bị phê phán vì khuôn mẫu và làm theo máy móc.</p><p class="sd-note"><b>Asset manager</b>: nghĩa vụ ủy thác, có đội stewardship; xu hướng pass-through voting.</p></div>`),

    S('Vì sao nhiều phiếu bầu bị "thất lạc"?', `<div class="sd-check">
      <span>Cho vay chứng khoán: thu hồi trước record date</span><span>Empty voting: người vay biểu quyết không có lợi ích kinh tế</span>
      <span>Share blocking: khóa cổ phiếu trước đại hội</span><span>Xuyên biên giới: chuỗi lưu ký dài, hạn ngắn</span>
      <span>Nhà đầu tư cá nhân ít bỏ phiếu</span><span>Môi giới Mỹ không tự bầu HĐQT thay khách</span></div>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>Luật công ty theo nơi đăng ký</span><span>Sở hữu tập trung → xung đột thiểu số</span>
      <span>Dual-class: phiếu B / tổng phiếu</span><span>Loyalty, golden share, VIE, NVDR</span>
      <span>Unsponsored DR: ngân hàng biểu quyết</span><span>Record date quyết định ai bỏ phiếu</span>
      <span>Bầu dồn: k × S / (N + 1)</span><span>Proxy advisor chỉ khuyến nghị</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 10 câu, mục tiêu ≥ 7 câu đúng.</p>`),
  ];

  addDeck('EQ-02', `Slide Jurisdictions and Voting - bản thiết kế riêng (${slides.length} slide)`, slides);
}());
