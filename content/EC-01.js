// Bài giảng EC-01 - The Firm and Market Structures (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t, frac } = window.CFAH;

  // Đồ thị kinh tế vi mô bằng SVG. Tọa độ theo đơn vị dữ liệu: q (ngang), p (dọc).
  // o: {qmax, pmax, label, xl, yl, curves:[{f, a, b, cls, lab, lq}], hl:[{p, q0, q1, lab}], vl:[{q, p, lab}], dots:[[q, p]], txt:[{q, p, s, cls, anchor}]}
  function chart(o) {
    const W = 600, H = o.H || 320, l = 46, r = W - 70, tp = 16, b = H - 34;
    const X = q => l + (q / o.qmax) * (r - l), Y = p => b - (p / o.pmax) * (b - tp);
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv" style="max-height:${o.mh || 300}px" role="img" aria-label="${o.label}">`;
    s += `<line x1="${l}" y1="${b}" x2="${r + 30}" y2="${b}" class="sv-axis"/><line x1="${l}" y1="${tp - 6}" x2="${l}" y2="${b}" class="sv-axis"/>`;
    s += `<text x="${r + 30}" y="${b + 24}" class="sv-muted" text-anchor="end">${o.xl || 'Q'}</text><text x="${l + 8}" y="${tp + 4}" class="sv-muted" text-anchor="start">${o.yl || 'P'}</text>`;
    (o.hl || []).forEach(h => {
      s += `<line x1="${X(h.q0 || 0)}" y1="${Y(h.p)}" x2="${X(h.q1 === undefined ? o.qmax : h.q1)}" y2="${Y(h.p)}" class="${h.cls || 'sv-dash'}"/>`;
      if (h.lab) s += `<text x="${l - 6}" y="${Y(h.p) + 5}" class="sv-txt" text-anchor="end">${h.lab}</text>`;
      if (h.rl) s += `<text x="${X(h.q1 === undefined ? o.qmax : h.q1) + 6}" y="${Y(h.p) + 5}" class="sv-txt ${h.tc || ''}" text-anchor="start">${h.rl}</text>`;
    });
    (o.vl || []).forEach(v => {
      s += `<line x1="${X(v.q)}" y1="${Y(v.p)}" x2="${X(v.q)}" y2="${b}" class="sv-dash"/>`;
      if (v.lab) s += `<text x="${X(v.q)}" y="${b + 20}" class="sv-txt">${v.lab}</text>`;
    });
    (o.curves || []).forEach(c => {
      const pts = [];
      for (let i = 0; i <= 120; i++) {
        const q = c.a + ((c.b - c.a) * i) / 120, p = c.f(q);
        if (p >= 0 && p <= o.pmax) pts.push([q, p]);
      }
      s += `<polyline points="${pts.map(([q, p]) => `${X(q).toFixed(1)},${Y(p).toFixed(1)}`).join(' ')}" class="${c.cls || 'sv-curve'}" fill="none"/>`;
      if (c.lab) {
        const end = c.lq === undefined ? pts[pts.length - 1] : [c.lq, c.f(c.lq)];
        s += `<text x="${X(end[0]) + 6}" y="${Y(end[1]) + (c.dy || 0)}" class="sv-txt ${c.tc || ''}" text-anchor="start">${c.lab}</text>`;
      }
    });
    (o.dots || []).forEach(([q, p]) => { s += `<circle cx="${X(q)}" cy="${Y(p)}" r="6" class="sv-dot"/>`; });
    (o.txt || []).forEach(x => { s += `<text x="${X(x.q)}" y="${Y(x.p)}" class="${x.cls || 'sv-muted'}" text-anchor="${x.anchor || 'middle'}">${x.s}</text>`; });
    return `${s}</svg>`;
  }
  const fig = (svg, cap) => `<figure style="margin:12px 0">${svg}<figcaption style="text-align:center;font-size:13px">${cap}</figcaption></figure>`;

  // Hàm chi phí minh họa: TFC = 1.000, TVC = 0,01Q³ - 1,2Q² + 60Q.
  const AVC = q => 0.01 * q * q - 1.2 * q + 60;
  const ATC = q => 1000 / q + AVC(q);
  const MC = q => 0.03 * q * q - 2.4 * q + 60;
  const AFC = q => 1000 / q;
  const qATC = 70.16, pATC = ATC(70.16), qAVC = 60, pAVC = AVC(60);

  const costFig = fig(chart({
    qmax: 115, pmax: 100, label: 'Các đường chi phí ngắn hạn', yl: 'Chi phí',
    curves: [
      { f: MC, a: 5, b: 110, cls: 'sv-down', lab: 'MC', tc: 'sv-t-down' },
      { f: ATC, a: 12, b: 110, lab: 'ATC' },
      { f: AVC, a: 2, b: 110, cls: 'sv-pv', lab: 'AVC', tc: 'sv-t-pv' },
      { f: AFC, a: 11, b: 110, cls: 'sv-dash', lab: 'AFC' },
    ],
    dots: [[qATC, pATC], [qAVC, pAVC]],
  }), 'MC cắt AVC và ATC tại điểm thấp nhất của chúng. Khoảng cách ATC - AVC chính là AFC, thu hẹp dần khi Q tăng.');

  const shutFig = fig(chart({
    qmax: 115, pmax: 100, label: 'Điểm hòa vốn và điểm đóng cửa của hãng cạnh tranh hoàn hảo', yl: 'P, chi phí',
    hl: [{ p: pATC, lab: 'P₁', rl: 'Hòa vốn: P = min ATC', tc: 'sv-t-up', cls: 'sv-up' }, { p: pAVC, lab: 'P₂', rl: 'Đóng cửa: P = min AVC', tc: 'sv-t-down', cls: 'sv-down' }],
    curves: [
      { f: MC, a: 20, b: 110, cls: 'sv-down', lab: 'MC', tc: 'sv-t-down' },
      { f: ATC, a: 14, b: 110, lab: 'ATC', lq: 96, dy: -14 },
      { f: AVC, a: 5, b: 110, cls: 'sv-pv', lab: 'AVC', tc: 'sv-t-pv', dy: 18 },
    ],
    dots: [[qATC, pATC], [qAVC, pAVC]],
    txt: [{ q: 24, p: 32, s: 'Lỗ nhưng vẫn sản xuất (ngắn hạn)', cls: 'sv-muted', anchor: 'start' }],
  }), 'Giá trên P₁: có lãi kinh tế. Giữa P₂ và P₁: lỗ nhưng bù được một phần chi phí cố định. Dưới P₂: đóng cửa ngay.');

  // LRATC là đường bao của các SRATC (tiếp xúc tại mỗi điểm).
  const LR = q => 30 + 0.006 * (q - 55) ** 2, LRd = q => 0.012 * (q - 55);
  const sr = q0 => q => LR(q0) + LRd(q0) * (q - q0) + 0.03 * (q - q0) ** 2;
  const scaleFig = fig(chart({
    qmax: 115, pmax: 60, label: 'Đường chi phí bình quân dài hạn LRATC', yl: 'Chi phí',
    curves: [
      ...[18, 36, 55, 74, 92].map(q0 => ({ f: sr(q0), a: q0 - 22, b: q0 + 22, cls: 'sv-dash' })),
      { f: LR, a: 5, b: 108, lab: 'LRATC', dy: -6 },
    ],
    vl: [{ q: 55, p: 30, lab: 'MES' }],
    dots: [[55, 30]],
    txt: [{ q: 22, p: 52, s: 'Lợi thế theo quy mô', cls: 'sv-txt sv-t-up' }, { q: 92, p: 52, s: 'Bất lợi theo quy mô', cls: 'sv-txt sv-t-down' }],
  }), 'Bên trái MES: mở rộng quy mô làm giảm chi phí bình quân. Bên phải MES: quy mô quá lớn làm chi phí bình quân tăng.');

  // Cạnh tranh độc quyền: ATC = 30 + 0,01(Q - 60)², MC = ATC + 0,02Q(Q - 60).
  const mATC = q => 30 + 0.01 * (q - 60) ** 2, mMC = q => mATC(q) + 0.02 * q * (q - 60);
  const solve = (g, lo, hi) => { for (let i = 0; i < 60; i++) { const m = (lo + hi) / 2; if (g(lo) * g(m) <= 0) hi = m; else lo = m; } return (lo + hi) / 2; };
  const qs = solve(q => 70 - 0.8 * q - mMC(q), 5, 80);
  const mcFig = (long) => chart({
    qmax: 100, pmax: 80, H: 300, label: long ? 'Cạnh tranh độc quyền dài hạn' : 'Cạnh tranh độc quyền ngắn hạn', mh: 260,
    curves: [
      { f: mMC, a: 8, b: 80, cls: 'sv-down', lab: 'MC', tc: 'sv-t-down' },
      { f: mATC, a: 5, b: 98, lab: 'ATC' },
      { f: long ? (q => 50 - 0.4 * q) : (q => 70 - 0.4 * q), a: 0, b: long ? 100 : 100, cls: 'sv-up', lab: 'D', tc: 'sv-t-up' },
      { f: long ? (q => 50 - 0.8 * q) : (q => 70 - 0.8 * q), a: 0, b: 80, cls: 'sv-pv', lab: 'MR', tc: 'sv-t-pv' },
    ],
    vl: long ? [{ q: 40, p: 34, lab: 'Q*' }, { q: 60, p: 30, lab: 'min ATC' }] : [{ q: qs, p: 70 - 0.4 * qs, lab: 'Q*' }],
    hl: long ? [{ p: 34, q1: 40, lab: 'P*' }] : [{ p: 70 - 0.4 * qs, q1: qs, lab: 'P*' }, { p: mATC(qs), q1: qs, lab: 'ATC' }],
    dots: long ? [[40, 34]] : [[qs, 70 - 0.4 * qs]],
  });

  // Đường cầu gãy: gãy tại Q = 50, P = 60.
  const kinkD = q => (q <= 50 ? 75 - 0.3 * q : 110 - q);
  const kinkFig = fig(chart({
    qmax: 85, pmax: 85, label: 'Mô hình đường cầu gãy', mh: 280,
    curves: [
      { f: kinkD, a: 0, b: 80, cls: 'sv-up', lab: 'D (gãy tại P_K)', tc: 'sv-t-up' },
      { f: q => 75 - 0.6 * q, a: 0, b: 50, cls: 'sv-pv' },
      { f: q => 110 - 2 * q, a: 50, b: 55, cls: 'sv-pv', lab: 'MR', tc: 'sv-t-pv', lq: 53 },
      { f: q => 12 + 0.0052 * q * q, a: 5, b: 75, cls: 'sv-down', lab: 'MC₁', tc: 'sv-t-down' },
      { f: q => 28 + 0.0052 * q * q, a: 5, b: 70, cls: 'sv-down', lab: 'MC₂', tc: 'sv-t-down' },
    ],
    hl: [{ p: 60, q1: 50, lab: 'P_K' }],
    vl: [{ q: 50, p: 60, lab: 'Q_K' }],
    dots: [[50, 60]],
    txt: [{ q: 57, p: 4, s: 'MR đứt quãng tại Q_K', cls: 'sv-muted', anchor: 'start' }],
  }), 'Trên P_K cầu co giãn mạnh (đối thủ không theo tăng giá); dưới P_K cầu ít co giãn (đối thủ theo giảm giá). MR bị đứt quãng, nên MC dịch chuyển trong khoảng đó không làm giá thay đổi.');

  // Hãng chi phối: cầu thị trường P = 100 - Q; các hãng nhỏ cung Q = 0,5(P - 20); MC hãng chi phối = 10 + 0,2Q.
  const dfFig = fig(chart({
    qmax: 110, pmax: 100, label: 'Mô hình hãng chi phối', mh: 280,
    curves: [
      { f: q => 100 - q, a: 0, b: 85, cls: 'sv-dash', lab: 'Cầu thị trường', lq: 22, dy: -6 },
      { f: q => (110 - q) / 1.5, a: 0, b: 80, cls: 'sv-up', lab: 'D_DF', tc: 'sv-t-up', lq: 30, dy: 26 },
      { f: q => (110 - 2 * q) / 1.5, a: 0, b: 55, cls: 'sv-pv', lab: 'MR_DF', tc: 'sv-t-pv' },
      { f: q => 10 + 0.2 * q, a: 0, b: 90, cls: 'sv-down', lab: 'MC_DF', tc: 'sv-t-down' },
    ],
    hl: [{ p: (110 - 95 / 2.3) / 1.5, q1: 95 / 2.3, lab: 'P*' }],
    vl: [{ q: 95 / 2.3, p: (110 - 95 / 2.3) / 1.5, lab: 'Q_DF' }],
    dots: [[95 / 2.3, 10 + 0.2 * 95 / 2.3]],
  }), 'Cầu còn lại của hãng chi phối (D_DF) = cầu thị trường trừ phần các hãng nhỏ cung ứng. Hãng chi phối chọn Q tại MR_DF = MC_DF rồi đặt giá P*; các hãng nhỏ chấp nhận P*.');

  const sections = [
    {
      title: '1. Bức tranh lớn',
      minutes: 5,
      html: `
<p>Module mở đầu phần Kinh tế học này trả lời câu hỏi mà nhà phân tích cổ phiếu nào cũng phải hỏi: <b>công ty có quyền định giá (pricing power) đến đâu, và lợi nhuận kinh tế của nó có bền không?</b></p>
<div class="key">Mọi hãng đều chọn sản lượng tại ${t('mrmc', 'MR = MC')}. Khác nhau giữa các ${t('structure', 'cấu trúc thị trường')} nằm ở <b>hình dạng đường cầu</b> mà hãng đối mặt và <b>rào cản gia nhập</b>, hai thứ quyết định giá và lợi nhuận dài hạn.</div>
<p>Năm LOS của module đi theo trình tự:</p>
<ol>
  <li><b>Chi phí và quy mô</b>: điểm hòa vốn, điểm đóng cửa, lợi thế và bất lợi theo quy mô. Ứng với LOS 1 (phần 2, 3, 4).</li>
  <li><b>Bốn cấu trúc thị trường</b>: cạnh tranh hoàn hảo, cạnh tranh độc quyền, độc quyền nhóm, độc quyền thuần túy. Ứng với LOS 2 (phần 5).</li>
  <li><b>Định giá trong cạnh tranh độc quyền</b>. Ứng với LOS 3 (phần 6).</li>
  <li><b>Định giá trong độc quyền nhóm</b>: đường cầu gãy, Cournot, Nash, Stackelberg, hãng chi phối. Ứng với LOS 4 (phần 7).</li>
  <li><b>Nhận diện cấu trúc thị trường</b> và các thước đo tập trung (N-firm ratio, HHI). Ứng với LOS 5 (phần 8).</li>
</ol>
<p class="tip"><b>Vì sao nhà đầu tư quan tâm:</b> một hãng trong thị trường cạnh tranh hoàn hảo không thể giữ lợi nhuận kinh tế lâu dài; một hãng có rào cản gia nhập cao (thương hiệu, bằng sáng chế, quy mô) thì có thể. Đây là nền tảng của phân tích "lợi thế cạnh tranh" trong Equity (EQ).</p>`,
    },
    {
      title: '2. Nền tảng: chi phí, doanh thu và tối đa hóa lợi nhuận',
      minutes: 10,
      html: `
<h4>Chi phí</h4>
<table class="plain"><thead><tr><th>Khái niệm</th><th>Định nghĩa</th><th>Hình dạng</th></tr></thead><tbody>
<tr><td>${t('tfc', 'Chi phí cố định (TFC)')}</td><td>Không đổi theo sản lượng, phát sinh kể cả khi Q = 0</td><td>Đường nằm ngang</td></tr>
<tr><td>${t('tvc', 'Chi phí biến đổi (TVC)')}</td><td>Tăng khi Q tăng</td><td>Đi lên</td></tr>
<tr><td>TC = TFC + TVC</td><td>Tổng chi phí</td><td></td></tr>
<tr><td>AFC = TFC/Q</td><td>Chi phí cố định bình quân</td><td>Giảm dần liên tục</td></tr>
<tr><td>AVC = TVC/Q, ATC = TC/Q</td><td>Chi phí biến đổi bình quân, tổng chi phí bình quân</td><td>Hình chữ U</td></tr>
<tr><td>${t('mc', 'Chi phí biên (MC)')} = ΔTC/ΔQ</td><td>Chi phí làm thêm 1 đơn vị</td><td>Giảm rồi tăng (do ${t('dmr', 'năng suất biên giảm dần')})</td></tr>
</tbody></table>
${costFig}
<p class="tip"><b>Quy tắc trung bình - biên:</b> khi MC nằm dưới đường bình quân, nó kéo bình quân xuống; khi MC nằm trên, nó kéo bình quân lên. Vì vậy MC luôn cắt AVC và ATC tại <b>điểm thấp nhất</b> của chúng.</p>

<h4>Doanh thu</h4>
<p>TR = P × Q; AR = TR/Q = P; MR = ΔTR/ΔQ.</p>
<ul>
<li><b>Cạnh tranh hoàn hảo:</b> hãng là ${t('taker', 'người chấp nhận giá (price taker)')}, đường cầu của hãng nằm ngang tại giá thị trường, nên <b>P = AR = MR</b>.</li>
<li><b>Cạnh tranh không hoàn hảo:</b> đường cầu dốc xuống; muốn bán thêm phải giảm giá cho mọi đơn vị, nên <b>MR &lt; P</b>.</li>
</ul>
<p>${t('elastic', 'Độ co giãn của cầu theo giá')} E = %ΔQ / %ΔP. |E| &gt; 1 là cầu co giãn, |E| &lt; 1 là cầu ít co giãn. Liên hệ quan trọng: MR = P × (1 - 1/|E|), nên hãng có quyền định giá <b>không bao giờ sản xuất ở đoạn cầu ít co giãn</b> (ở đó MR &lt; 0).</p>

<h4>Tối đa hóa lợi nhuận</h4>
<div class="formula">Sản xuất tại MR = MC &nbsp;&nbsp; (MR &gt; MC: làm thêm; MR &lt; MC: làm bớt)</div>
<p>Lợi nhuận trong kinh tế học là ${t('econprofit', 'lợi nhuận kinh tế (economic profit)')} = doanh thu - chi phí kế toán - chi phí cơ hội của vốn chủ và công sức chủ sở hữu. Lợi nhuận kinh tế bằng 0 nghĩa là hãng chỉ kiếm được ${t('normalprofit', 'lợi nhuận thông thường (normal profit)')}, vẫn đủ để ở lại ngành.</p>
<div class="example"><div class="ex-h">Ví dụ 2.1</div>
<p>Một quán cà phê có doanh thu 500 triệu, chi phí kế toán 380 triệu. Chủ quán bỏ công việc lương 150 triệu/năm để tự quản lý. Lợi nhuận kế toán và lợi nhuận kinh tế?</p>
<details><summary>Xem lời giải</summary><p>Lợi nhuận kế toán = 500 - 380 = <b>120 triệu</b>. Lợi nhuận kinh tế = 120 - 150 = <b>-30 triệu</b>. Quán có lãi trên sổ sách nhưng chủ quán đang "lỗ" so với lựa chọn tốt nhất còn lại.</p></details></div>`,
    },
    {
      title: '3. Điểm hòa vốn và điểm đóng cửa',
      minutes: 14,
      html: `
<p>Câu hỏi: khi giá xuống thấp, hãng nên <b>tiếp tục sản xuất</b>, <b>tạm dừng</b> hay <b>rời ngành</b>? Chìa khóa là chi phí cố định: trong ${t('shortrun', 'ngắn hạn')} nó vẫn phải trả dù đóng cửa; trong ${t('longrun', 'dài hạn')} mọi chi phí đều biến đổi.</p>
${shutFig}
<ul>
<li>${t('breakeven', 'Điểm hòa vốn (breakeven)')}: TR = TC, tức P = ATC. Với hãng cạnh tranh hoàn hảo, đó là mức giá bằng <b>min ATC</b>.</li>
<li>${t('shutdown', 'Điểm đóng cửa (shutdown)')}: TR = TVC, tức P = AVC. Với hãng cạnh tranh hoàn hảo, đó là mức giá bằng <b>min AVC</b>.</li>
</ul>
<table class="plain"><thead><tr><th>Điều kiện</th><th>Ngắn hạn</th><th>Dài hạn</th></tr></thead><tbody>
<tr><td>TR ≥ TC (P ≥ ATC)</td><td>Sản xuất</td><td>Ở lại thị trường</td></tr>
<tr><td>TVC ≤ TR &lt; TC (AVC ≤ P &lt; ATC)</td><td>Vẫn sản xuất: phần dư TR - TVC bù được một phần TFC</td><td>Rời thị trường</td></tr>
<tr><td>TR &lt; TVC (P &lt; AVC)</td><td>Đóng cửa ngay: lỗ tối đa bằng TFC</td><td>Rời thị trường</td></tr>
</tbody></table>
<div class="example"><div class="ex-h">Ví dụ 3.1</div>
<p>Hãng cạnh tranh hoàn hảo bán với giá 20. Tại mức sản lượng tối ưu Q = 500 (MR = MC), ATC = 22 và AVC = 17. Hãng nên làm gì?</p>
<details><summary>Xem lời giải</summary>
<p>Nếu sản xuất: lỗ = (20 - 22) × 500 = <b>-1.000</b>. Nếu đóng cửa: vẫn phải trả TFC = (22 - 17) × 500 = 2.500, tức lỗ <b>-2.500</b>.</p>
<p>Vì AVC (17) &lt; P (20) &lt; ATC (22): <b>tiếp tục sản xuất trong ngắn hạn</b>, nhưng <b>rời ngành trong dài hạn</b> nếu giá không cải thiện.</p></details></div>
<div class="example"><div class="ex-h">Ví dụ 3.2 - So sánh bằng tổng</div>
<p>Một nhà máy sản xuất 1.000 sản phẩm, giá 12. TFC = 5.000, TVC = 9.000.</p>
<details><summary>Xem lời giải</summary><p>TR = 12.000, TC = 14.000, lỗ 2.000. Lỗ này nhỏ hơn TFC (5.000), tương đương TR (12.000) &gt; TVC (9.000), nên tiếp tục sản xuất trong ngắn hạn.</p></details></div>
<div class="example"><div class="ex-h">Ví dụ 3.3 - Sản lượng hòa vốn</div>
<p>Giá bán 50, chi phí biến đổi mỗi đơn vị không đổi là 30, TFC = 40.000. Cần bán bao nhiêu để hòa vốn?</p>
<details><summary>Xem lời giải</summary><p>Q hòa vốn = ${frac('TFC', 'P - AVC')} = 40.000 / 20 = <b>2.000 đơn vị</b>.</p></details></div>
<h4>Cạnh tranh không hoàn hảo</h4>
<p>Quy tắc hoàn toàn giống (so TR với TC và TVC), chỉ khác là giá không cố định mà thay đổi theo sản lượng trên đường cầu dốc xuống. Hòa vốn xảy ra khi đường cầu (AR) chạm hoặc cắt ATC; có thể có <b>một khoảng sản lượng</b> cho lợi nhuận dương thay vì một điểm duy nhất.</p>
<p class="warn"><b>Bẫy:</b> "Hãng đang lỗ nên phải đóng cửa" là sai. Trong ngắn hạn, chỉ đóng cửa khi doanh thu <b>không đủ trả chi phí biến đổi</b>. Đề hay cho P nằm giữa AVC và ATC để bẫy.</p>`,
    },
    {
      title: '4. Lợi thế và bất lợi theo quy mô',
      minutes: 8,
      html: `
<p>Trong dài hạn hãng chọn được quy mô nhà máy. Mỗi quy mô có một đường chi phí ngắn hạn (SRATC); ${t('lratc', 'đường chi phí bình quân dài hạn (LRATC)')} là đường bao phía dưới của tất cả các SRATC.</p>
${scaleFig}
<table class="plain"><thead><tr><th>Vùng</th><th>LRATC</th><th>Nguyên nhân</th></tr></thead><tbody>
<tr><td>${t('eos', 'Lợi thế theo quy mô (economies of scale)')}</td><td>Giảm khi Q tăng</td><td>Chuyên môn hóa lao động, sản xuất hàng loạt, máy móc hiệu quả hơn, sức mạnh đàm phán giá đầu vào, chi phí quảng cáo chia trên nhiều đơn vị</td></tr>
<tr><td>Lợi suất không đổi theo quy mô</td><td>Đi ngang</td><td>Mở rộng không làm chi phí bình quân đổi</td></tr>
<tr><td>${t('dos', 'Bất lợi theo quy mô (diseconomies of scale)')}</td><td>Tăng khi Q tăng</td><td>Bộ máy cồng kềnh, khó phối hợp và tạo động lực, trùng lặp chức năng, giá đầu vào tăng khi hãng mua quá nhiều</td></tr>
</tbody></table>
<p>${t('mes', 'Quy mô hiệu quả tối thiểu (MES)')} là mức sản lượng nhỏ nhất tại đó LRATC đạt cực tiểu.</p>
<div class="key"><b>Quy mô và cấu trúc thị trường:</b><br>Cạnh tranh hoàn hảo: cạnh tranh buộc hãng tiến về MES trong dài hạn; hãng nào chi phí cao hơn sẽ lỗ và rời ngành.<br>Cạnh tranh không hoàn hảo: hãng có thể tồn tại ở quy mô khác MES nhờ quyền định giá. Khi lợi thế theo quy mô rất lớn so với cầu thị trường (MES gần bằng toàn bộ cầu), ngành tự nhiên chỉ có một hoặc vài hãng: ${t('natmono', 'độc quyền tự nhiên')} hoặc độc quyền nhóm.</div>`,
    },
    {
      title: '5. Bốn cấu trúc thị trường',
      minutes: 10,
      html: `
<table class="plain"><thead><tr><th></th><th>${t('perfect', 'Cạnh tranh hoàn hảo')}</th><th>${t('monocomp', 'Cạnh tranh độc quyền')}</th><th>${t('oligopoly', 'Độc quyền nhóm')}</th><th>${t('monopoly', 'Độc quyền thuần túy')}</th></tr></thead><tbody>
<tr><td>Số người bán</td><td>Rất nhiều</td><td>Nhiều</td><td>Ít</td><td>Một</td></tr>
<tr><td>Rào cản gia nhập</td><td>Rất thấp</td><td>Thấp</td><td>Cao</td><td>Rất cao</td></tr>
<tr><td>Sản phẩm thay thế</td><td>Thay thế hoàn hảo (đồng nhất)</td><td>Thay thế tốt nhưng có khác biệt</td><td>Đồng nhất hoặc khác biệt</td><td>Không có thay thế tốt</td></tr>
<tr><td>Cạnh tranh bằng</td><td>Chỉ giá</td><td>Giá, quảng cáo, chất lượng, tính năng</td><td>Giá, quảng cáo, tính năng</td><td>Quảng cáo (quan hệ công chúng)</td></tr>
<tr><td>Quyền định giá</td><td>Không có</td><td>Có một ít</td><td>Một ít đến đáng kể</td><td>Đáng kể</td></tr>
<tr><td>Đường cầu của hãng</td><td>Nằm ngang</td><td>Dốc xuống, khá co giãn</td><td>Dốc xuống, phụ thuộc phản ứng đối thủ</td><td>Chính là cầu thị trường</td></tr>
<tr><td>Ví dụ</td><td>Lúa gạo, nông sản</td><td>Nhà hàng, kem đánh răng</td><td>Xi măng, thép, viễn thông</td><td>Điện, nước (theo vùng)</td></tr>
</tbody></table>
<h4>Cạnh tranh hoàn hảo</h4>
<p>Giá do cung cầu thị trường quyết định. Hãng sản xuất tại P = MC. Nếu có lợi nhuận kinh tế, hãng mới gia nhập làm giá giảm; dài hạn P = MC = <b>min ATC</b>, lợi nhuận kinh tế bằng 0.</p>
<h4>Độc quyền thuần túy</h4>
<p>Hãng chọn Q tại MR = MC, rồi đặt giá cao nhất mà đường cầu cho phép tại Q đó, nên <b>P &gt; MC</b>. Rào cản (bằng sáng chế, giấy phép, kiểm soát tài nguyên, lợi thế quy mô) giúp lợi nhuận kinh tế tồn tại cả trong dài hạn. Nhà độc quyền có thể ${t('pricedisc', 'phân biệt giá')} (bán cùng sản phẩm với giá khác nhau cho các nhóm khách có độ co giãn khác nhau) để tăng lợi nhuận. Độc quyền tự nhiên thường bị điều tiết giá (ví dụ đặt giá theo chi phí bình quân).</p>
<p class="tip"><b>Mẹo nhớ:</b> đi từ trái sang phải bảng, số hãng giảm, rào cản tăng, quyền định giá tăng. Câu hỏi nhận diện thường chỉ cần hai dấu hiệu: <b>số hãng</b> và <b>mức khác biệt sản phẩm</b>.</p>`,
    },
    {
      title: '6. Cạnh tranh độc quyền: giá, sản lượng và chiến lược',
      minutes: 12,
      html: `
<p>Nhiều hãng, mỗi hãng bán một sản phẩm hơi khác (thương hiệu, vị trí, chất lượng). Khác biệt hóa cho hãng một đường cầu <b>dốc xuống</b> nhưng khá co giãn, vì có nhiều sản phẩm thay thế gần.</p>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
${fig(mcFig(false), 'Ngắn hạn: P* &gt; ATC, có lợi nhuận kinh tế.')}
${fig(mcFig(true), 'Dài hạn: hãng mới vào, cầu dịch trái đến khi tiếp xúc ATC. P* = ATC, lợi nhuận kinh tế = 0.')}
</div>
<h4>Ngắn hạn</h4>
<p>Chọn Q* tại MR = MC, đọc giá P* trên đường cầu. Nếu P* &gt; ATC: lãi kinh tế; nếu P* &lt; ATC: lỗ kinh tế.</p>
<h4>Dài hạn</h4>
<p>Rào cản thấp nên lợi nhuận kinh tế thu hút hãng mới. Mỗi hãng cũ mất bớt khách, đường cầu dịch sang trái cho đến khi <b>tiếp xúc</b> với ATC: P = ATC, lợi nhuận kinh tế bằng 0. Nhưng khác cạnh tranh hoàn hảo:</p>
<ul>
<li><b>P &gt; MC</b>: vẫn có một phần quyền định giá.</li>
<li>Hãng sản xuất <b>bên trái điểm thấp nhất của ATC</b>: ${t('excesscap', 'công suất dư thừa (excess capacity)')}, chi phí bình quân cao hơn mức tối thiểu.</li>
</ul>
<p>Đổi lại, người tiêu dùng có <b>nhiều lựa chọn đa dạng</b>; đó là "cái giá" của sự đa dạng sản phẩm.</p>
<h4>Chiến lược định giá</h4>
<ul>
<li><b>Định giá cộng thêm (markup):</b> từ MR = MC và MR = P(1 - 1/|E|), suy ra P = ${frac('MC', '1 - 1/|E|')}. Cầu càng co giãn thì markup càng nhỏ.</li>
<li><b>Cạnh tranh phi giá:</b> quảng cáo, xây dựng thương hiệu, cải tiến sản phẩm nhằm làm cầu dịch phải <b>và</b> ít co giãn hơn. Quảng cáo làm tăng ATC, nên chỉ đáng làm khi doanh thu tăng thêm vượt chi phí.</li>
<li>Thương hiệu mạnh báo hiệu chất lượng, giúp hãng giữ giá cao hơn đối thủ mà ít mất khách.</li>
</ul>
<div class="example"><div class="ex-h">Ví dụ 6.1</div>
<p>Một chuỗi trà sữa có MC mỗi ly là 30 nghìn đồng, độ co giãn của cầu theo giá |E| = 3. Giá tối ưu?</p>
<details><summary>Xem lời giải</summary><p>P = 30 / (1 - 1/3) = 30 / 0,6667 = <b>45 nghìn đồng</b>. Kiểm tra: MR = 45 × (1 - 1/3) = 30 = MC.</p></details></div>`,
    },
    {
      title: '7. Độc quyền nhóm: giá, sản lượng và chiến lược',
      minutes: 18,
      html: `
<p>Đặc trưng của ${t('oligopoly', 'độc quyền nhóm')}: ít hãng và <b>phụ thuộc lẫn nhau</b>. Quyết định của một hãng làm thay đổi lợi nhuận của hãng khác, nên mỗi hãng phải đoán phản ứng của đối thủ. Không có một mô hình duy nhất; mỗi mô hình ứng với một giả định về phản ứng.</p>

<h4>a) Mô hình đường cầu gãy (kinked demand curve)</h4>
<p>Giả định: <b>nếu tôi tăng giá, đối thủ không theo</b> (tôi mất nhiều khách); <b>nếu tôi giảm giá, đối thủ theo</b> (tôi chỉ được thêm ít khách).</p>
${kinkFig}
<p>Kết quả: giá "cứng" tại P_K. Hạn chế: mô hình <b>không giải thích được P_K hình thành thế nào</b>.</p>

<h4>b) Mô hình Cournot</h4>
<p>Hai hãng giống nhau, cùng MC không đổi, mỗi hãng chọn <b>sản lượng</b> khi coi sản lượng của đối thủ là cho trước. Cân bằng khi không hãng nào muốn đổi sản lượng.</p>
<div class="example"><div class="ex-h">Ví dụ 7.1 - So sánh ba kết quả</div>
<p>Cầu thị trường P = 100 - Q, MC = 10 cho mọi hãng.</p>
<details><summary>Xem lời giải</summary>
<table class="plain"><thead><tr><th>Cấu trúc</th><th>Tổng Q</th><th>P</th></tr></thead><tbody>
<tr><td>Độc quyền (MR = 100 - 2Q = 10)</td><td>45</td><td>55</td></tr>
<tr><td>Cournot 2 hãng (mỗi hãng q = (100 - 10)/3 = 30)</td><td>60</td><td>40</td></tr>
<tr><td>Cạnh tranh hoàn hảo (P = MC)</td><td>90</td><td>10</td></tr>
</tbody></table>
<p>Cournot nằm giữa: <b>P<sub>cạnh tranh</sub> &lt; P<sub>Cournot</sub> &lt; P<sub>độc quyền</sub></b>. Khi số hãng tăng, giá Cournot tiến dần về MC.</p></details></div>

<h4>c) Lý thuyết trò chơi và cân bằng Nash</h4>
<p>${t('nash', 'Cân bằng Nash')}: tổ hợp chiến lược mà <b>không hãng nào có lợi khi đơn phương đổi chiến lược</b>, cho trước lựa chọn của hãng kia. Các hãng phụ thuộc nhau nhưng <b>không hợp tác</b>.</p>
<div class="example"><div class="ex-h">Ví dụ 7.2 - Thế lưỡng nan của hai hãng</div>
<p>Hai hãng X và Y chọn giá Cao hoặc Thấp. Lợi nhuận (X, Y):</p>
<table class="plain"><thead><tr><th></th><th>Y: Cao</th><th>Y: Thấp</th></tr></thead><tbody>
<tr><td>X: Cao</td><td>(120, 120)</td><td>(40, 160)</td></tr>
<tr><td>X: Thấp</td><td>(160, 40)</td><td>(70, 70)</td></tr>
</tbody></table>
<details><summary>Xem lời giải</summary><p>Nếu Y chọn Cao, X chọn Thấp (160 &gt; 120). Nếu Y chọn Thấp, X vẫn chọn Thấp (70 &gt; 40). Vậy Thấp là chiến lược tốt nhất của X bất kể Y làm gì; Y lập luận tương tự. Cân bằng Nash: <b>(Thấp, Thấp), mỗi hãng 70</b>, dù cả hai cùng chọn Cao thì được 120. Đây là lý do thỏa thuận cấu kết (collusion) hay bị phá vỡ.</p></details></div>
<p>${t('cartel', 'Cấu kết (collusion, cartel)')} dễ bền hơn khi: ít hãng, sản phẩm và chi phí tương tự nhau, dễ quan sát giá của nhau, đơn hàng nhỏ và thường xuyên, khó có hãng mới, luật chống độc quyền yếu.</p>

<h4>d) Mô hình Stackelberg (người dẫn đầu - người theo sau)</h4>
<p>Giống Cournot nhưng ra quyết định <b>tuần tự</b>: hãng dẫn đầu chọn sản lượng trước, biết hãng theo sau sẽ phản ứng thế nào. Với ví dụ 7.1: hãng dẫn đầu sản xuất 45, hãng theo sau 22,5, tổng Q = 67,5, P = 32,5. Hãng dẫn đầu <b>sản xuất nhiều hơn và lãi nhiều hơn</b> (1.012,5 so với 506,25) nhờ lợi thế đi trước.</p>

<h4>e) Mô hình hãng chi phối (dominant firm)</h4>
<p>Một hãng lớn (thường chiếm 40% đến 50% thị trường trở lên, chi phí thấp hơn nhờ quy mô) <b>đặt giá</b>; các hãng nhỏ là người chấp nhận giá.</p>
${dfFig}
<p>Hãng chi phối nhận phần lớn lợi nhuận ngành. Nếu một hãng nhỏ giảm giá để giành thị phần, hãng chi phối có thể giảm giá mạnh hơn (chiến tranh giá) để trừng phạt.</p>
<table class="plain"><thead><tr><th>Mô hình</th><th>Giả định về đối thủ</th><th>Kết quả chính</th></tr></thead><tbody>
<tr><td>Đường cầu gãy</td><td>Theo giảm giá, không theo tăng giá</td><td>Giá cứng tại điểm gãy</td></tr>
<tr><td>Cournot</td><td>Sản lượng đối thủ cố định, quyết định đồng thời</td><td>Chia đôi thị trường; giá giữa cạnh tranh và độc quyền</td></tr>
<tr><td>Nash</td><td>Mỗi hãng chọn phản ứng tốt nhất, không hợp tác</td><td>Thường cho kết quả kém hơn hợp tác</td></tr>
<tr><td>Stackelberg</td><td>Quyết định tuần tự</td><td>Hãng đi trước có thị phần và lợi nhuận lớn hơn</td></tr>
<tr><td>Hãng chi phối</td><td>Hãng nhỏ chấp nhận giá</td><td>Hãng lớn đặt giá tại MR = MC của mình</td></tr>
</tbody></table>
<p class="warn"><b>Bẫy:</b> trong mọi mô hình, mỗi hãng vẫn chọn sản lượng tại <b>MR = MC của chính nó</b>. Điều khác nhau chỉ là đường cầu (và do đó MR) mà hãng nghĩ mình đối mặt.</p>`,
    },
    {
      title: '8. Nhận diện cấu trúc thị trường và thước đo tập trung',
      minutes: 8,
      html: `
<p>Về lý thuyết, cách tốt nhất là ước lượng <b>độ co giãn của cầu</b> (bằng hồi quy theo chuỗi thời gian hoặc dữ liệu chéo), nhưng việc này tốn dữ liệu và dễ sai. Trên thực tế người ta dùng hai thước đo đơn giản:</p>
<div class="formula">${t('ncr', 'N-firm concentration ratio')} = tổng thị phần của N hãng lớn nhất<br>${t('hhi', 'HHI')} = tổng bình phương thị phần của các hãng (thường là N hãng lớn nhất)</div>
<p>HHI có thể viết dạng thập phân (0,30² = 0,09) hoặc dạng điểm (30² = 900, tối đa 10.000). Thị trường có N hãng bằng nhau thì HHI = 1/N.</p>
<div class="example"><div class="ex-h">Ví dụ 8.1 - Trước và sau sáp nhập</div>
<p>Thị phần của 7 hãng: A 30%, B 20%, C 15%, D 10%, E 10%, F 8%, G 7%. Tính 4-firm ratio và HHI 4 hãng trước và sau khi A mua lại B.</p>
<details><summary>Xem lời giải</summary>
<table class="plain"><thead><tr><th></th><th>Trước</th><th>Sau (A + B = 50%)</th></tr></thead><tbody>
<tr><td>4-firm ratio</td><td>30 + 20 + 15 + 10 = 75%</td><td>50 + 15 + 10 + 10 = 85%</td></tr>
<tr><td>HHI 4 hãng (điểm)</td><td>900 + 400 + 225 + 100 = 1.625</td><td>2.500 + 225 + 100 + 100 = 2.925</td></tr>
</tbody></table>
<p>Concentration ratio chỉ tăng 10 điểm phần trăm, nhưng HHI tăng gần gấp đôi. HHI nhạy hơn với thay đổi thị phần của các hãng lớn nhất, vì nó bình phương thị phần.</p></details></div>
<table class="plain"><thead><tr><th>Thước đo</th><th>Ưu điểm</th><th>Hạn chế</th></tr></thead><tbody>
<tr><td>N-firm ratio</td><td>Dễ tính, dễ hiểu</td><td>Không phản ánh sáp nhập giữa các hãng trong top N; không đo trực tiếp quyền định giá hay độ co giãn</td></tr>
<tr><td>HHI</td><td>Phản ánh tốt hơn sức mạnh của hãng lớn và tác động của sáp nhập</td><td>Vẫn không tính đến rào cản gia nhập và cạnh tranh tiềm năng</td></tr>
</tbody></table>
<p class="warn"><b>Hạn chế chung quan trọng nhất:</b> cả hai thước đo <b>bỏ qua rào cản gia nhập</b>. Một hãng chiếm thị phần lớn nhưng rào cản thấp thì vẫn ít quyền định giá, vì giá cao sẽ thu hút đối thủ mới (thị trường "có thể cạnh tranh", contestable). Ngoài ra, cách định nghĩa "thị trường" (sản phẩm nào, vùng địa lý nào) làm kết quả thay đổi rất nhiều.</p>`,
    },
    {
      title: '9. Tóm tắt và bẫy thường gặp',
      minutes: 5,
      html: `
<table class="plain"><thead><tr><th>Tình huống</th><th>Nhớ</th></tr></thead><tbody>
<tr><td>Hòa vốn / đóng cửa</td><td>Hòa vốn: P = ATC (TR = TC). Đóng cửa: P &lt; AVC (TR &lt; TVC)</td></tr>
<tr><td>AVC ≤ P &lt; ATC</td><td>Ngắn hạn vẫn sản xuất, dài hạn rời ngành</td></tr>
<tr><td>MC và đường bình quân</td><td>MC cắt AVC, ATC tại điểm thấp nhất</td></tr>
<tr><td>Quy mô</td><td>LRATC giảm: economies; tăng: diseconomies; MES là điểm thấp nhất đầu tiên</td></tr>
<tr><td>Tối đa hóa lợi nhuận</td><td>MR = MC ở mọi cấu trúc; chỉ cạnh tranh hoàn hảo mới có P = MR</td></tr>
<tr><td>Cạnh tranh độc quyền dài hạn</td><td>P = ATC nhưng P &gt; MC, công suất dư thừa</td></tr>
<tr><td>Đường cầu gãy</td><td>MR đứt quãng, giá cứng; không giải thích được giá ban đầu</td></tr>
<tr><td>Cournot</td><td>Giá giữa cạnh tranh và độc quyền; mỗi hãng (a - c)/3 khi cầu P = a - Q</td></tr>
<tr><td>Nash</td><td>Không ai muốn đơn phương đổi; thường là (giá thấp, giá thấp)</td></tr>
<tr><td>Stackelberg / hãng chi phối</td><td>Hãng đi trước hoặc hãng lớn nhận phần lợi nhuận lớn hơn</td></tr>
<tr><td>HHI và concentration ratio</td><td>HHI bình phương thị phần; cả hai bỏ qua rào cản gia nhập</td></tr>
</tbody></table>
<p>Tiếp theo: tab <b>Luyện tập</b> 10 câu. Module sau EC-02 chuyển từ một hãng sang cả nền kinh tế: chu kỳ kinh doanh.</p>`,
    },
  ];

  const glossary = {
    mrmc: ['MR = MC rule', 'Quy tắc MR = MC', 'Sản xuất đến khi doanh thu biên bằng chi phí biên thì lợi nhuận lớn nhất (hoặc lỗ nhỏ nhất).'],
    structure: ['Market structure', 'Cấu trúc thị trường', 'Cách phân loại thị trường theo số hãng, rào cản gia nhập, mức khác biệt sản phẩm và quyền định giá.'],
    tfc: ['Total fixed cost (TFC)', 'Tổng chi phí cố định', 'Chi phí không đổi theo sản lượng, vẫn phát sinh khi không sản xuất (trong ngắn hạn).'],
    tvc: ['Total variable cost (TVC)', 'Tổng chi phí biến đổi', 'Chi phí tăng giảm theo sản lượng, như nguyên liệu, lao động trực tiếp.'],
    mc: ['Marginal cost (MC)', 'Chi phí biên', 'Chi phí tăng thêm khi sản xuất thêm 1 đơn vị: ΔTC/ΔQ.'],
    dmr: ['Diminishing marginal returns', 'Năng suất biên giảm dần', 'Thêm đầu vào biến đổi vào một lượng vốn cố định thì sản lượng tăng thêm ngày càng ít.'],
    taker: ['Price taker', 'Người chấp nhận giá', 'Hãng quá nhỏ so với thị trường, không ảnh hưởng được giá; đường cầu của hãng nằm ngang.'],
    elastic: ['Price elasticity of demand', 'Độ co giãn của cầu theo giá', '%ΔQ / %ΔP. |E| > 1: co giãn; |E| < 1: ít co giãn.'],
    econprofit: ['Economic profit', 'Lợi nhuận kinh tế', 'Doanh thu trừ toàn bộ chi phí, kể cả chi phí cơ hội của nguồn lực chủ sở hữu.'],
    normalprofit: ['Normal profit', 'Lợi nhuận thông thường', 'Mức lợi nhuận kế toán vừa đủ bù chi phí cơ hội; tương ứng lợi nhuận kinh tế bằng 0.'],
    shortrun: ['Short run', 'Ngắn hạn', 'Khoảng thời gian mà ít nhất một yếu tố sản xuất (thường là nhà máy) còn cố định.'],
    longrun: ['Long run', 'Dài hạn', 'Khoảng thời gian đủ dài để mọi yếu tố sản xuất, mọi chi phí đều biến đổi được.'],
    breakeven: ['Breakeven point', 'Điểm hòa vốn', 'TR = TC, tức P = ATC; lợi nhuận kinh tế bằng 0.'],
    shutdown: ['Shutdown point', 'Điểm đóng cửa', 'TR = TVC, tức P = AVC; dưới mức này nên ngừng sản xuất ngay.'],
    lratc: ['Long-run average total cost (LRATC)', 'Chi phí bình quân dài hạn', 'Chi phí bình quân thấp nhất cho mỗi mức sản lượng khi hãng được chọn quy mô nhà máy; đường bao các SRATC.'],
    eos: ['Economies of scale', 'Lợi thế theo quy mô', 'Vùng LRATC giảm khi sản lượng tăng.'],
    dos: ['Diseconomies of scale', 'Bất lợi theo quy mô', 'Vùng LRATC tăng khi sản lượng tăng, do bộ máy quá lớn khó quản lý.'],
    mes: ['Minimum efficient scale (MES)', 'Quy mô hiệu quả tối thiểu', 'Mức sản lượng nhỏ nhất tại đó LRATC đạt cực tiểu.'],
    natmono: ['Natural monopoly', 'Độc quyền tự nhiên', 'Ngành có lợi thế quy mô lớn đến mức một hãng phục vụ cả thị trường rẻ hơn nhiều hãng (điện, nước).'],
    perfect: ['Perfect competition', 'Cạnh tranh hoàn hảo', 'Rất nhiều hãng, sản phẩm đồng nhất, rào cản rất thấp, không có quyền định giá.'],
    monocomp: ['Monopolistic competition', 'Cạnh tranh độc quyền', 'Nhiều hãng, sản phẩm khác biệt, rào cản thấp; có một ít quyền định giá.'],
    oligopoly: ['Oligopoly', 'Độc quyền nhóm', 'Ít hãng, phụ thuộc lẫn nhau, rào cản cao.'],
    monopoly: ['Monopoly', 'Độc quyền thuần túy', 'Một hãng duy nhất, sản phẩm không có thay thế tốt, rào cản rất cao.'],
    pricedisc: ['Price discrimination', 'Phân biệt giá', 'Bán cùng một sản phẩm với giá khác nhau cho các nhóm khách khác nhau, không do khác chi phí.'],
    excesscap: ['Excess capacity', 'Công suất dư thừa', 'Hãng sản xuất dưới mức sản lượng có ATC thấp nhất, đặc trưng của cạnh tranh độc quyền dài hạn.'],
    nash: ['Nash equilibrium', 'Cân bằng Nash', 'Tổ hợp chiến lược mà không người chơi nào có lợi khi đơn phương thay đổi.'],
    cartel: ['Collusion / cartel', 'Cấu kết / cartel', 'Thỏa thuận giữa các hãng để hạn chế sản lượng, nâng giá; thường không bền vì mỗi hãng có động cơ gian lận.'],
    ncr: ['N-firm concentration ratio', 'Tỷ lệ tập trung N hãng', 'Tổng thị phần của N hãng lớn nhất.'],
    hhi: ['Herfindahl-Hirschman Index (HHI)', 'Chỉ số HHI', 'Tổng bình phương thị phần các hãng; nhạy với thị phần của hãng lớn.'],
  };

  const practice = [
    { q: 'Một hãng cạnh tranh hoàn hảo bán với giá 18. Tại sản lượng MR = MC, AVC = 15 và ATC = 21. Hãng nên:', choices: ['Tiếp tục sản xuất trong ngắn hạn nhưng rời ngành trong dài hạn', 'Đóng cửa ngay vì đang lỗ kinh tế', 'Tiếp tục sản xuất cả ngắn hạn lẫn dài hạn vì giá cao hơn AVC'], answer: 0, explain: 'AVC (15) < P (18) < ATC (21): mỗi đơn vị lỗ 3 nhưng còn dư 3 để bù chi phí cố định, nên ngắn hạn vẫn sản xuất. Dài hạn mọi chi phí đều biến đổi, giá dưới ATC thì phải rời ngành. Lựa chọn "đóng cửa ngay" sai vì chỉ đóng cửa khi P < AVC. Lựa chọn "tiếp tục cả ngắn hạn lẫn dài hạn" quên rằng dài hạn cần P ≥ ATC.' },
    { q: 'Một hãng có tổng doanh thu 40.000, chi phí cố định 15.000 và chi phí biến đổi 45.000 ở mức sản lượng tối ưu. Trong ngắn hạn hãng nên:', choices: ['Tiếp tục sản xuất vì lỗ nhỏ hơn chi phí cố định', 'Ngừng sản xuất vì doanh thu không đủ trả chi phí biến đổi', 'Tiếp tục sản xuất vì đang ở điểm hòa vốn'], answer: 1, explain: 'Sản xuất: lỗ = 40.000 - 60.000 = -20.000. Đóng cửa: lỗ bằng chi phí cố định -15.000. TR < TVC nên đóng cửa lỗ ít hơn. Lựa chọn "lỗ nhỏ hơn chi phí cố định" tính sai lỗ (lỗ 20.000 lớn hơn TFC). Lựa chọn "đang ở điểm hòa vốn" sai vì TR < TC.' },
    { q: 'Ở trạng thái cân bằng dài hạn của cạnh tranh độc quyền, phát biểu nào đúng?', choices: ['P = MC và hãng sản xuất tại điểm thấp nhất của ATC', 'P > ATC nên hãng có lợi nhuận kinh tế dương bền vững', 'P = ATC nhưng P > MC, hãng sản xuất dưới mức sản lượng có ATC thấp nhất'], answer: 2, explain: 'Rào cản thấp nên hãng mới gia nhập đến khi đường cầu tiếp xúc ATC (lợi nhuận kinh tế bằng 0). Đường cầu dốc xuống nên điểm tiếp xúc nằm bên trái đáy ATC và P > MR = MC. Lựa chọn "P = MC tại điểm thấp nhất của ATC" là đặc điểm của cạnh tranh hoàn hảo. Lựa chọn "lợi nhuận kinh tế dương bền vững" mô tả ngắn hạn hoặc độc quyền có rào cản cao.' },
    { q: 'Theo mô hình đường cầu gãy, nếu chi phí biên của hãng tăng nhẹ nhưng đường MC vẫn đi qua khoảng gián đoạn của MR, hãng sẽ:', choices: ['Giữ nguyên giá và sản lượng', 'Tăng giá để chuyển chi phí cho khách hàng', 'Giảm sản lượng và tăng giá theo tỷ lệ tăng chi phí'], answer: 0, explain: 'MR có đoạn đứt quãng tại sản lượng gãy Q_K. Chừng nào MC còn cắt MR trong đoạn đứt đó, sản lượng tối ưu vẫn là Q_K và giá vẫn là P_K. Hai lựa chọn tăng giá áp dụng logic của đường cầu tuyến tính thông thường.' },
    { q: 'Hai hãng Cournot giống nhau đối mặt cầu thị trường P = 120 - Q, chi phí biên của mỗi hãng không đổi bằng 30. Giá cân bằng Cournot là:', choices: ['75', '30', '60'], answer: 2, explain: 'Mỗi hãng q = (120 - 30)/3 = 30, tổng Q = 60, P = 120 - 60 = 60. Lựa chọn 75 là giá độc quyền (Q = 45). Lựa chọn 30 là giá cạnh tranh hoàn hảo (P = MC). Giá Cournot luôn nằm giữa hai mức này.' },
    { q: 'Năm hãng trong ngành có thị phần 35%, 25%, 20%, 12% và 8%. HHI của ngành (dạng điểm, tối đa 10.000) là:', choices: ['2.250', '2.458', '6.400'], answer: 1, explain: 'HHI = 35² + 25² + 20² + 12² + 8² = 1.225 + 625 + 400 + 144 + 64 = 2.458. Lựa chọn 2.250 chỉ tính 3 hãng lớn nhất. Lựa chọn 6.400 bình phương tổng thị phần 3 hãng (80²) thay vì cộng bình phương từng hãng.' },
    { q: 'Hạn chế quan trọng nhất của cả N-firm concentration ratio và HHI khi đánh giá quyền định giá là:', choices: ['Không tính đến rào cản gia nhập và cạnh tranh tiềm năng', 'Quá phức tạp, cần ước lượng độ co giãn của cầu', 'Luôn cho kết quả trái ngược nhau'], answer: 0, explain: 'Hai thước đo chỉ dùng thị phần hiện tại. Một hãng thị phần lớn trong ngành rào cản thấp vẫn ít quyền định giá. Lựa chọn "quá phức tạp" sai: chính việc ước lượng co giãn mới phức tạp, còn hai thước đo này rất dễ tính. Lựa chọn "luôn cho kết quả trái ngược" sai: chúng thường cùng chiều, chỉ khác mức độ nhạy.' },
    { q: 'Trong mô hình hãng chi phối (dominant firm) của độc quyền nhóm:', choices: ['Mọi hãng chia đều thị trường như mô hình Cournot', 'Hãng chi phối đặt giá bằng chi phí biên của các hãng nhỏ', 'Hãng chi phối chọn sản lượng tại MR = MC của mình trên đường cầu còn lại, các hãng nhỏ chấp nhận giá đó'], answer: 2, explain: 'Cầu còn lại của hãng chi phối = cầu thị trường trừ cung của các hãng nhỏ. Hãng chi phối tối đa hóa lợi nhuận trên đường cầu này, các hãng nhỏ là người chấp nhận giá. Lựa chọn "chia đều thị trường" mô tả Cournot. Lựa chọn "đặt giá bằng chi phí biên của các hãng nhỏ" nhầm vai trò: chính các hãng nhỏ mới sản xuất đến khi MC của họ bằng giá.' },
    { q: 'Quy mô hiệu quả tối thiểu (minimum efficient scale) là:', choices: ['Mức sản lượng tại đó đường SRATC đầu tiên đạt cực tiểu', 'Mức sản lượng nhỏ nhất tại đó LRATC đạt cực tiểu', 'Mức sản lượng bắt đầu xuất hiện lợi thế theo quy mô'], answer: 1, explain: 'MES gắn với đường dài hạn LRATC: điểm thấp nhất đầu tiên của nó. Bên trái MES là vùng lợi thế theo quy mô (mức sản lượng bắt đầu xuất hiện lợi thế theo quy mô là điểm bắt đầu của vùng này, không phải MES). Lựa chọn dùng đường SRATC nhầm sang đường ngắn hạn.' },
    { q: 'Hai hãng chọn giá Cao hoặc Thấp. Lợi nhuận (X, Y): (Cao, Cao) = (120, 120); (Cao, Thấp) = (40, 160); (Thấp, Cao) = (160, 40); (Thấp, Thấp) = (70, 70). Cân bằng Nash là:', choices: ['Cả hai chọn giá Thấp, mỗi hãng lãi 70', 'Cả hai chọn giá Cao, mỗi hãng lãi 120', 'Một hãng chọn Cao, một hãng chọn Thấp'], answer: 0, explain: 'Dù đối thủ chọn gì, chọn Thấp luôn tốt hơn (160 > 120 và 70 > 40), nên cả hai chọn Thấp. Lựa chọn "cả hai chọn giá Cao" là kết quả hợp tác (cấu kết) nhưng không phải cân bằng vì mỗi hãng có động cơ gian lận. Lựa chọn "một hãng Cao, một hãng Thấp" không bền vì hãng chọn Cao sẽ muốn đổi sang Thấp (70 > 40).' },
  ];

  window.LESSONS['EC-01'] = {
    moduleId: 'EC-01',
    calculator: 'BA II Plus',
    warmup: [
      'Không xem tài liệu: chi phí cố định khác chi phí biến đổi thế nào? Cho một ví dụ mỗi loại ở một quán cà phê.',
      'Đoán trước: một hãng đang lỗ có nên đóng cửa ngay không? Viết lý do trong một câu.',
      'Kể tên một ngành ở Việt Nam mà bạn nghĩ chỉ có vài hãng lớn chi phối. Điều gì ngăn hãng mới gia nhập?',
    ],
    sections,
    glossary,
    practice,
    widgets: {},
    slides: [],
    wrapup: [
      'Vẽ lại từ trí nhớ đồ thị MC, ATC, AVC và đánh dấu điểm hòa vốn, điểm đóng cửa.',
      'Lập bảng 4 cấu trúc thị trường với 3 tiêu chí: số hãng, rào cản, quyền định giá.',
      'Giải thích bằng lời của bạn vì sao cân bằng Nash trong ví dụ hai hãng lại là (Thấp, Thấp).',
    ],
  };
}());
