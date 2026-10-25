// Bộ slide tự thiết kế cho FSA-05 Analyzing Statements of Cash Flows II.
(function () {
  const L = window.LESSONS && window.LESSONS['FSA-05'];
  if (!L) return;
  const { frac, slide, addDeck } = window.CFAH;
  const K = 'FSA-05 · Cash Flows II';
  const S = (title, body, opt = {}) => slide(title, body, Object.assign({ kicker: K }, opt));
  const fmt = (x, d = 2) => x.toFixed(d).replace('.', ',');

  // Lợi nhuận ròng và CFO qua 3 năm: khoảng cách ngày càng lớn.
  const niVsCfo = (() => {
    const ni = [100, 120, 150], cfo = [110, 90, 60];
    const W = 600, H = 280, l = 60, r = 560, tp = 20, b = 230;
    const X = i => l + (i / 2) * (r - l), Y = v => b - (v / 160) * (b - tp);
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv" role="img" aria-label="Lợi nhuận ròng tăng, CFO giảm">`;
    [0, 40, 80, 120, 160].forEach(v => { s += `<line x1="${l}" y1="${Y(v)}" x2="${r}" y2="${Y(v)}" class="sv-grid"/><text x="${l - 10}" y="${Y(v) + 5}" class="sv-muted" text-anchor="end">${v}</text>`; });
    s += `<line x1="${l}" y1="${b}" x2="${r}" y2="${b}" class="sv-axis"/>`;
    ['Năm 1', 'Năm 2', 'Năm 3'].forEach((n, i) => { s += `<text x="${X(i)}" y="${b + 26}" class="sv-muted">${n}</text>`; });
    s += `<polyline points="${ni.map((v, i) => `${X(i)},${Y(v)}`).join(' ')}" class="sv-up" fill="none"/>`;
    s += `<polyline points="${cfo.map((v, i) => `${X(i)},${Y(v)}`).join(' ')}" class="sv-down" fill="none"/>`;
    ni.forEach((v, i) => { s += `<circle cx="${X(i)}" cy="${Y(v)}" r="5" class="sv-dot"/>`; });
    cfo.forEach((v, i) => { s += `<circle cx="${X(i)}" cy="${Y(v)}" r="5" class="sv-dot"/>`; });
    s += `<text x="${X(2) - 10}" y="${Y(150) - 12}" class="sv-txt sv-t-up" text-anchor="end">Lợi nhuận ròng 150</text>`;
    s += `<text x="${X(2) - 10}" y="${Y(60) + 26}" class="sv-txt sv-t-down" text-anchor="end">CFO 60</text>`;
    return `${s}</svg>`;
  })();

  // Ba phần dòng tiền của Minh An.
  const mabars = (() => {
    const rows = [['CFO', 610, 'up'], ['CFI', -330, 'down'], ['CFF', -70, 'down'], ['Tiền tăng ròng', 210, 'pv']];
    const W = 600, H = 250, mid = 300, sc = 0.4;
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv" role="img" aria-label="CFO, CFI, CFF của Minh An">`;
    s += `<line x1="${mid}" y1="10" x2="${mid}" y2="${H - 10}" class="sv-axis"/>`;
    rows.forEach(([n, v, c], i) => {
      const y = 22 + i * 56, w = Math.abs(v) * sc, x = v >= 0 ? mid : mid - w;
      s += `<line x1="${x}" y1="${y + 16}" x2="${x + w}" y2="${y + 16}" class="sv-${c}" style="stroke-width:26"/>`;
      s += `<text x="${v >= 0 ? mid - 12 : mid + 12}" y="${y + 23}" class="sv-txt" text-anchor="${v >= 0 ? 'end' : 'start'}">${n}</text>`;
      s += `<text x="${v >= 0 ? mid + w + 8 : mid - w - 8}" y="${y + 23}" class="sv-txt sv-t-${c}" text-anchor="${v >= 0 ? 'start' : 'end'}">${v}</text>`;
    });
    return `${s}</svg>`;
  })();

  const bars = (rows, total) => `<div class="sd-bars">${rows.map(([lab, v]) => `<div class="sd-bar"><span class="sd-bar-l">${lab}</span><span class="sd-bar-t"><i style="width:${(v / total) * 100}%"></i></span><b>${fmt((v / total) * 100)}%</b></div>`).join('')}</div>`;

  const slides = [
    S('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Financial Statement Analysis · FSA-05</div>
      <h2>Analyzing Statements<br>of Cash Flows II</h2>
      <p>Tiền đến từ đâu, đi về đâu, còn lại bao nhiêu?</p>
      <div class="sd-chips"><span>LOS 1 · Đọc báo cáo và common-size</span><span>LOS 2 · FCFF, FCFE và tỷ số dòng tiền</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Từ lập báo cáo đến phân tích', `<div class="sd-cols3">
      <div class="sd-card"><div class="sd-n">1</div><b>Nguồn và sử dụng tiền</b><p>Tiền chủ yếu đến từ CFO, vay, hay bán tài sản?</p></div>
      <div class="sd-card"><div class="sd-n">2</div><b>Soi từng phần</b><p>CFO so với lợi nhuận; capex thay thế hay mở rộng; vay để làm gì?</p></div>
      <div class="sd-card acc"><div class="sd-n">3</div><b>So sánh</b><p>Qua nhiều năm (xu hướng) và với đối thủ (common-size).</p></div></div>
      <p class="sd-note">Cách lập CFO, CFI, CFF: xem lại FSA-04. Ở đây ta <b>đọc</b> và <b>đo</b>.</p>`),

    S('Dấu hiệu theo giai đoạn vòng đời', `<div class="sd-tbl grid"><div class="head"><span>Giai đoạn</span><span>CFO</span><span>CFI</span><span>CFF</span></div>
      <div><span>Khởi nghiệp</span><span>âm</span><span>âm lớn</span><span>dương lớn</span></div>
      <div><span>Tăng trưởng</span><span>dương, tăng</span><span>âm lớn</span><span>dương hoặc 0</span></div>
      <div><span>Trưởng thành</span><span>dương lớn</span><span>âm vừa</span><span>âm</span></div>
      <div><span>Suy thoái</span><span>dương, giảm</span><span>có thể dương</span><span>âm</span></div></div>
      <p class="sd-note">Công ty trưởng thành khỏe mạnh: <b>CFO tự tài trợ đầu tư</b>, tiền thừa trả nợ và cổ tức.</p>`),

    S('CFO so với lợi nhuận ròng', `<div class="sd-cols2 wide-left"><div>${niVsCfo}</div>
      <div><div class="sd-rule down">Lợi nhuận tăng, CFO giảm → <b>cảnh báo</b></div><div class="sd-steps"><span>Phải thu tăng nhanh hơn doanh thu?</span><span>Tồn kho phình to?</span><span>CFO nhờ khoản bất thường?</span></div>
      <p class="sd-note">CFO ≥ lợi nhuận ròng một cách bền vững → chất lượng lợi nhuận cao.</p></div></div>`),

    S('Minh An: một công ty tự tài trợ', `<div class="sd-cols2 wide-left"><div>${mabars}</div>
      <div><div class="sd-steps"><span>CFO = 420 + 250 + 10 - 60 - 40 + 30 = <b>610</b></span><span>CFO / lợi nhuận ròng = <b>1,45</b></span><span>CFO đủ trả capex 350, nợ 100, cổ tức 120</span></div>
      <p class="sd-note">Tiền tăng ròng dương chưa đủ để kết luận: luôn hỏi tăng <b>nhờ phần nào</b>.</p></div></div>`),

    S('Common-size: hai cách nhìn', `<div class="sd-cols2">
      <div><p class="sd-cap">Tổng thu 780 = 100%</p>${bars([['CFO', 610], ['Bán thiết bị', 20], ['Vay mới', 150]], 780)}</div>
      <div><p class="sd-cap">Tổng chi 570 = 100%</p>${bars([['Capex', 350], ['Trả nợ', 100], ['Cổ tức', 120]], 570)}</div></div>
      <p class="sd-note">Cách (a): chia mọi dòng cho <b>doanh thu</b> → CFO = <b>12,2%</b> doanh thu, dùng để dự báo. Cách (b): thu chia tổng thu, chi chia tổng chi.</p>`),

    S('FCFF: tiền tự do cho mọi người cấp vốn', `<div class="sd-f">FCFF = CFO + Lãi vay × (1 - t) - FCInv</div>
      <div class="sd-cols2"><div class="sd-card"><b>Minh An</b><p>610 + 80 × 0,75 - (350 - 20)</p><p>= 610 + 60 - 330 = <b>340</b></p></div>
      <div class="sd-card acc"><b>Từ lợi nhuận ròng</b><p>NI + NCC + Lãi vay × (1 - t) - FCInv - WCInv</p><p>420 + 260 + 60 - 330 - 70 = <b>340</b></p></div></div>
      <p class="sd-note">Cộng lại lãi vay <b>sau thuế</b> vì chủ nợ cũng là người nhận FCFF.</p>`),

    S('FCFE: tiền tự do cho cổ đông', `<div class="sd-f">FCFE = CFO - FCInv + Vay ròng = FCFF - Lãi vay × (1 - t) + Vay ròng</div>
      <div class="sd-steps"><span>FCFF <b>340</b></span><span>- lãi vay sau thuế 60</span><span>+ vay ròng (150 - 100) = 50</span><span>= FCFE <b>330</b></span></div>
      <div class="sd-cols2"><div class="sd-rule up">Cổ tức 120 &lt; FCFE 330 → dư địa tăng cổ tức</div><div class="sd-rule down">Không trừ cổ tức khi tính FCFE</div></div>`),

    S('IFRS: điều chỉnh trước khi tính', `<div class="sd-tbl grid"><div class="head"><span>Khoản mục</span><span>US GAAP</span><span>IFRS</span><span>Điều chỉnh</span></div>
      <div><span>Lãi vay đã trả</span><span>CFO</span><span>CFO hoặc CFF</span><span>Ở CFF: không cộng lại</span></div>
      <div><span>Cổ tức đã trả</span><span>CFF</span><span>CFO hoặc CFF</span><span>Ở CFO: cộng lại</span></div></div>
      <p class="sd-note">Nguyên tắc: chỉ cộng lại khoản nào <b>đã bị trừ trong CFO</b>.</p>`),

    S('Tỷ số hiệu quả hoạt động', `<div class="sd-tbl grid"><div class="head"><span>Tỷ số</span><span>Công thức</span><span>Minh An</span></div>
      <div><span>Cash flow to revenue</span><span>CFO / doanh thu</span><span>12,2%</span></div>
      <div><span>Cash return on assets</span><span>CFO / TTS bình quân</span><span>15,25%</span></div>
      <div><span>Cash return on equity</span><span>CFO / VCSH bình quân</span><span>30,5%</span></div>
      <div><span>Cash to income</span><span>CFO / EBIT</span><span>0,95</span></div>
      <div><span>Cash flow per share</span><span>(CFO - cổ tức ưu đãi) / số CP</span><span>3,05</span></div></div>`),

    S('Tỷ số khả năng chi trả', `<div class="sd-tbl grid"><div class="head"><span>Tỷ số</span><span>CFO chia cho</span><span>Minh An</span></div>
      <div><span>Debt coverage</span><span>tổng nợ vay</span><span>0,50</span></div>
      <div><span>Interest coverage</span><span>lãi vay đã trả (tử số + lãi + thuế)</span><span>10,25</span></div>
      <div><span>Reinvestment</span><span>chi mua TS dài hạn</span><span>1,74</span></div>
      <div><span>Debt payment</span><span>trả nợ dài hạn</span><span>6,10</span></div>
      <div><span>Dividend payment</span><span>cổ tức đã trả</span><span>5,08</span></div>
      <div><span>Investing and financing</span><span>chi đầu tư + tài trợ</span><span>1,07</span></div></div>
      <p class="sd-note">Interest coverage = ${frac('CFO + lãi vay đã trả + thuế đã nộp', 'lãi vay đã trả')} = (610 + 80 + 130) / 80</p>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>Công ty trưởng thành: tiền chủ yếu từ CFO</span><span>Lợi nhuận tăng, CFO giảm → cảnh báo</span>
      <span>Common-size: doanh thu, hoặc tổng thu / tổng chi</span><span>FCFF = CFO + lãi vay × (1 - t) - FCInv</span>
      <span>FCFE = CFO - FCInv + vay ròng</span><span>FCFE không trừ cổ tức</span>
      <span>IFRS: chỉ cộng lại khoản đã trừ trong CFO</span><span>Coverage &gt; 1 → CFO đủ chi trả</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 8 câu, mục tiêu ≥ 6 câu đúng.</p>`),
  ];

  addDeck('FSA-05', `Slide Cash Flows II - bản thiết kế riêng (${slides.length} slide)`, slides);
}());
