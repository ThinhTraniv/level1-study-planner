// Bộ slide tự thiết kế cho EC-01 The Firm and Market Structures.
(function () {
  const L = window.LESSONS && window.LESSONS['EC-01'];
  if (!L) return;
  const { frac, slide, addDeck } = window.CFAH;
  const K = 'EC-01 · Firm and Market Structures';
  const S = (title, body, opt = {}) => slide(title, body, Object.assign({ kicker: K }, opt));

  // Đồ thị kinh tế vi mô (cùng cách vẽ với bài giảng). Tọa độ theo đơn vị dữ liệu.
  function chart(o) {
    const W = 600, H = o.H || 300, l = 50, r = W - 90, tp = 16, b = H - 34;
    const X = q => l + (q / o.qmax) * (r - l), Y = p => b - (p / o.pmax) * (b - tp);
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv big" role="img" aria-label="${o.label}">`;
    s += `<line x1="${l}" y1="${b}" x2="${r + 30}" y2="${b}" class="sv-axis"/><line x1="${l}" y1="${tp - 6}" x2="${l}" y2="${b}" class="sv-axis"/>`;
    s += `<text x="${r + 30}" y="${b + 26}" class="sv-muted" text-anchor="end">${o.xl || 'Q'}</text><text x="${l + 8}" y="${tp + 6}" class="sv-muted" text-anchor="start">${o.yl || 'P'}</text>`;
    (o.hl || []).forEach(h => {
      s += `<line x1="${X(h.q0 || 0)}" y1="${Y(h.p)}" x2="${X(h.q1 === undefined ? o.qmax : h.q1)}" y2="${Y(h.p)}" class="${h.cls || 'sv-dash'}"/>`;
      if (h.lab) s += `<text x="${l - 6}" y="${Y(h.p) + 6}" class="sv-txt ${h.tc || ''}" text-anchor="end">${h.lab}</text>`;
    });
    (o.vl || []).forEach(v => {
      s += `<line x1="${X(v.q)}" y1="${Y(v.p)}" x2="${X(v.q)}" y2="${b}" class="sv-dash"/>`;
      if (v.lab) s += `<text x="${X(v.q)}" y="${b + 24}" class="sv-txt">${v.lab}</text>`;
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
    (o.dots || []).forEach(([q, p]) => { s += `<circle cx="${X(q)}" cy="${Y(p)}" r="7" class="sv-dot"/>`; });
    (o.txt || []).forEach(x => { s += `<text x="${X(x.q)}" y="${Y(x.p)}" class="${x.cls || 'sv-muted'}" text-anchor="${x.anchor || 'middle'}">${x.s}</text>`; });
    return `${s}</svg>`;
  }

  // Hàm chi phí minh họa: TFC = 1.000, TVC = 0,01Q³ - 1,2Q² + 60Q.
  const AVC = q => 0.01 * q * q - 1.2 * q + 60;
  const ATC = q => 1000 / q + AVC(q);
  const MC = q => 0.03 * q * q - 2.4 * q + 60;
  const pATC = ATC(70.16), pAVC = AVC(60);
  const costCurves = (extra = {}) => chart(Object.assign({
    qmax: 115, pmax: 100, label: 'Đường chi phí ngắn hạn', yl: 'Chi phí',
    curves: [
      { f: MC, a: 18, b: 110, cls: 'sv-down', lab: 'MC', tc: 'sv-t-down' },
      { f: ATC, a: 14, b: 110, lab: 'ATC', lq: 96, dy: -14 },
      { f: AVC, a: 4, b: 110, cls: 'sv-pv', lab: 'AVC', tc: 'sv-t-pv', dy: 18 },
    ],
    dots: [[70.16, pATC], [60, pAVC]],
  }, extra));

  const LR = q => 30 + 0.006 * (q - 55) ** 2, LRd = q => 0.012 * (q - 55);
  const sr = q0 => q => LR(q0) + LRd(q0) * (q - q0) + 0.03 * (q - q0) ** 2;
  const scale = chart({
    qmax: 115, pmax: 60, label: 'LRATC là đường bao của các SRATC', yl: 'Chi phí',
    curves: [...[18, 36, 55, 74, 92].map(q0 => ({ f: sr(q0), a: q0 - 22, b: q0 + 22, cls: 'sv-dash' })), { f: LR, a: 5, b: 108, lab: 'LRATC', dy: -8 }],
    vl: [{ q: 55, p: 30, lab: 'MES' }], dots: [[55, 30]],
    txt: [{ q: 20, p: 54, s: 'economies', cls: 'sv-txt sv-t-up' }, { q: 92, p: 54, s: 'diseconomies', cls: 'sv-txt sv-t-down' }],
  });

  const mATC = q => 30 + 0.01 * (q - 60) ** 2, mMC = q => mATC(q) + 0.02 * q * (q - 60);
  const qs = 55.726; // nghiệm MR = MC của trường hợp ngắn hạn (D: P = 70 - 0,4Q)
  const mcomp = long => chart({
    qmax: 100, pmax: 80, H: 320, label: long ? 'Dài hạn' : 'Ngắn hạn',
    curves: [
      { f: mMC, a: 10, b: 78, cls: 'sv-down', lab: 'MC', tc: 'sv-t-down' },
      { f: mATC, a: 6, b: 96, lab: 'ATC', dy: 18 },
      { f: long ? (q => 50 - 0.4 * q) : (q => 70 - 0.4 * q), a: 0, b: 100, cls: 'sv-up', lab: 'D', tc: 'sv-t-up' },
      { f: long ? (q => 50 - 0.8 * q) : (q => 70 - 0.8 * q), a: 0, b: 80, cls: 'sv-pv', lab: 'MR', tc: 'sv-t-pv' },
    ],
    vl: long ? [{ q: 40, p: 34, lab: 'Q*' }] : [{ q: qs, p: 70 - 0.4 * qs, lab: 'Q*' }],
    hl: long ? [{ p: 34, q1: 40, lab: 'P*' }] : [{ p: 70 - 0.4 * qs, q1: qs, lab: 'P*' }, { p: mATC(qs), q1: qs, lab: 'ATC' }],
    dots: long ? [[40, 34]] : [[qs, 70 - 0.4 * qs]],
  });

  const kink = chart({
    qmax: 85, pmax: 85, label: 'Đường cầu gãy',
    curves: [
      { f: q => (q <= 50 ? 75 - 0.3 * q : 110 - q), a: 0, b: 80, cls: 'sv-up', lab: 'D', tc: 'sv-t-up' },
      { f: q => 75 - 0.6 * q, a: 0, b: 50, cls: 'sv-pv' },
      { f: q => 110 - 2 * q, a: 50, b: 55, cls: 'sv-pv', lab: 'MR', tc: 'sv-t-pv', lq: 53 },
      { f: q => 12 + 0.0052 * q * q, a: 5, b: 75, cls: 'sv-down', lab: 'MC₁', tc: 'sv-t-down' },
      { f: q => 28 + 0.0052 * q * q, a: 5, b: 70, cls: 'sv-down', lab: 'MC₂', tc: 'sv-t-down' },
    ],
    hl: [{ p: 60, q1: 50, lab: 'P_K' }], vl: [{ q: 50, p: 60, lab: 'Q_K' }], dots: [[50, 60]],
  });

  const qdf = 95 / 2.3, pdf = (110 - qdf) / 1.5;
  const dom = chart({
    qmax: 110, pmax: 100, label: 'Mô hình hãng chi phối',
    curves: [
      { f: q => 100 - q, a: 0, b: 85, cls: 'sv-dash', lab: 'Cầu TT', lq: 22, dy: -6 },
      { f: q => (110 - q) / 1.5, a: 0, b: 80, cls: 'sv-up', lab: 'D_DF', tc: 'sv-t-up', lq: 30, dy: 26 },
      { f: q => (110 - 2 * q) / 1.5, a: 0, b: 55, cls: 'sv-pv', lab: 'MR_DF', tc: 'sv-t-pv' },
      { f: q => 10 + 0.2 * q, a: 0, b: 90, cls: 'sv-down', lab: 'MC_DF', tc: 'sv-t-down' },
    ],
    hl: [{ p: pdf, q1: qdf, lab: 'P*' }], vl: [{ q: qdf, p: pdf, lab: 'Q_DF' }], dots: [[qdf, 10 + 0.2 * qdf]],
  });

  // Cầu của hãng: nằm ngang (cạnh tranh hoàn hảo) và dốc xuống.
  const demand = flat => chart({
    qmax: 100, pmax: 100, H: 260, label: flat ? 'Cầu nằm ngang' : 'Cầu dốc xuống',
    curves: flat ? [{ f: () => 50, a: 0, b: 95, cls: 'sv-up', lab: 'D = MR', tc: 'sv-t-up', lq: 70, dy: -12 }]
      : [{ f: q => 90 - 0.8 * q, a: 0, b: 100, cls: 'sv-up', lab: 'D = AR', tc: 'sv-t-up', lq: 78 }, { f: q => 90 - 1.6 * q, a: 0, b: 56, cls: 'sv-pv', lab: 'MR', tc: 'sv-t-pv' }],
  });

  const slides = [
    slide('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Economics · EC-01</div>
      <h2>The Firm and<br>Market Structures</h2>
      <p>Hãng có quyền định giá đến đâu?</p>
      <div class="sd-chips"><span>Hòa vốn và đóng cửa</span><span>Quy mô</span><span>4 cấu trúc thị trường</span><span>Độc quyền nhóm</span><span>HHI</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Ba câu hỏi của buổi học', `<div class="sd-cols3">
      <div class="sd-card"><div class="sd-n">1</div><b>Khi nào nên dừng?</b><p>So giá với ATC và AVC.</p><small>Hòa vốn, đóng cửa, quy mô (LOS 1)</small></div>
      <div class="sd-card"><div class="sd-n">2</div><b>Thị trường thuộc loại nào?</b><p>Số hãng, rào cản, khác biệt sản phẩm.</p><small>LOS 2, LOS 5</small></div>
      <div class="sd-card acc"><div class="sd-n">3</div><b>Giá và sản lượng ra sao?</b><p>Luôn MR = MC, nhưng đường cầu khác nhau.</p><small>Cạnh tranh độc quyền, độc quyền nhóm (LOS 3, 4)</small></div></div>`),

    S('Các đường chi phí ngắn hạn', `<div class="sd-cols2 wide-left"><div>${costCurves()}</div>
      <div><div class="sd-rule">MC dưới đường bình quân → kéo bình quân <b>xuống</b></div><div class="sd-rule">MC trên đường bình quân → kéo bình quân <b>lên</b></div>
      <p class="sd-note">MC cắt AVC và ATC tại <b>điểm thấp nhất</b>. ATC - AVC = AFC, thu hẹp khi Q tăng.</p></div></div>`),

    S('Đường cầu của hãng quyết định MR', `<div class="sd-cols2">
      <div class="sd-card"><b>Cạnh tranh hoàn hảo</b>${demand(true)}<p>Price taker: <b>P = AR = MR</b></p></div>
      <div class="sd-card acc"><b>Cạnh tranh không hoàn hảo</b>${demand(false)}<p>Bán thêm phải giảm giá: <b>MR &lt; P</b></p></div></div>
      <p class="sd-note">Mọi hãng chọn Q tại <b>MR = MC</b>. MR = P(1 - 1/|E|) → không sản xuất ở đoạn cầu ít co giãn.</p>`),

    S('Điểm hòa vốn và điểm đóng cửa', `<div class="sd-cols2 wide-left"><div>${costCurves({ hl: [{ p: pATC, lab: 'P₁', cls: 'sv-up', tc: 'sv-t-up' }, { p: pAVC, lab: 'P₂', cls: 'sv-down', tc: 'sv-t-down' }] })}</div>
      <div><div class="sd-rule up">P ≥ min ATC (P₁) <b>Có lãi / hòa vốn</b></div><div class="sd-rule">P₂ ≤ P &lt; P₁ <b>Lỗ, vẫn sản xuất</b></div><div class="sd-rule down">P &lt; min AVC (P₂) <b>Đóng cửa</b></div>
      <p class="sd-note">Hòa vốn: TR = TC. Đóng cửa: TR = TVC.</p></div></div>`),

    S('Ngắn hạn khác dài hạn ở chi phí cố định', `<div class="sd-tbl grid"><div class="head"><span>Điều kiện</span><span>Ngắn hạn</span><span>Dài hạn</span></div>
      <div><span>TR ≥ TC</span><span>Sản xuất</span><span>Ở lại</span></div>
      <div><span>TVC ≤ TR &lt; TC</span><span>Sản xuất</span><span>Rời ngành</span></div>
      <div><span>TR &lt; TVC</span><span>Đóng cửa</span><span>Rời ngành</span></div></div>
      <div class="sd-cols2"><div class="sd-card"><b>Ví dụ: P = 20, ATC = 22, AVC = 17, Q = 500</b><p>Sản xuất: lỗ 1.000 · Đóng cửa: lỗ TFC = 2.500</p></div>
      <div class="sd-card acc"><b>Kết luận</b><p>Ngắn hạn vẫn sản xuất, dài hạn rời ngành nếu giá không lên.</p></div></div>`),

    S('Lợi thế và bất lợi theo quy mô', `<div class="sd-cols2 wide-left"><div>${scale}</div>
      <div><div class="sd-rule up">LRATC giảm <b>Economies</b></div><div class="sd-rule down">LRATC tăng <b>Diseconomies</b></div>
      <p class="sd-note">Economies: chuyên môn hóa, máy móc hiệu quả, sức mạnh đàm phán. Diseconomies: bộ máy cồng kềnh, khó phối hợp.</p>
      <p class="sd-note">Cạnh tranh hoàn hảo bị đẩy về <b>MES</b> trong dài hạn.</p></div></div>`),

    S('Bốn cấu trúc thị trường', `<div class="sd-tbl grid"><div class="head"><span></span><span>Hoàn hảo</span><span>CT độc quyền</span><span>ĐQ nhóm</span><span>Độc quyền</span></div>
      <div><span>Số hãng</span><span>Rất nhiều</span><span>Nhiều</span><span>Ít</span><span>Một</span></div>
      <div><span>Rào cản</span><span>Rất thấp</span><span>Thấp</span><span>Cao</span><span>Rất cao</span></div>
      <div><span>Sản phẩm</span><span>Đồng nhất</span><span>Khác biệt</span><span>Cả hai</span><span>Không thay thế</span></div>
      <div><span>Quyền định giá</span><span>Không</span><span>Một ít</span><span>Đáng kể</span><span>Lớn</span></div>
      <div><span>Ví dụ</span><span>Lúa gạo</span><span>Nhà hàng</span><span>Xi măng, thép</span><span>Điện, nước</span></div></div>
      <p class="sd-note">Trái sang phải: ít hãng hơn, rào cản cao hơn, quyền định giá lớn hơn.</p>`),

    S('Hai thái cực: hoàn hảo và độc quyền', `<div class="sd-cols2">
      <div class="sd-card"><b>Cạnh tranh hoàn hảo</b><p>P = MR = MC</p><p>Dài hạn: P = min ATC, lợi nhuận kinh tế = 0</p><small>Lãi thu hút hãng mới → giá giảm</small></div>
      <div class="sd-card acc"><b>Độc quyền thuần túy</b><p>MR = MC, rồi đọc giá trên đường cầu → P &gt; MC</p><p>Rào cản giữ lợi nhuận kinh tế cả dài hạn</p><small>Phân biệt giá, điều tiết độc quyền tự nhiên</small></div></div>
      <div class="sd-rule">Cạnh tranh hoàn hảo dài hạn <b>P = MC = min ATC</b></div><div class="sd-rule down">Độc quyền <b>P &gt; MC, P &gt; ATC</b></div>`),

    S('Cạnh tranh độc quyền: ngắn hạn và dài hạn', `<div class="sd-cols2">
      <div><p class="sd-cap">Ngắn hạn: P* &gt; ATC → có lãi</p>${mcomp(false)}</div>
      <div><p class="sd-cap">Dài hạn: D tiếp xúc ATC → lãi = 0</p>${mcomp(true)}</div></div>
      <p class="sd-note">Dài hạn: P = ATC nhưng <b>P &gt; MC</b> và sản xuất trái đáy ATC (<b>công suất dư thừa</b>).</p>`),

    S('Chiến lược giá của cạnh tranh độc quyền', `<div class="sd-f">P = ${frac('MC', '1 - 1/|E|')}</div>
      <div class="sd-cols2"><div class="sd-card"><b>Ví dụ</b><p>MC = 30, |E| = 3</p><p>P = 30 / (2/3) = <b>45</b></p><small>Cầu càng co giãn, markup càng nhỏ</small></div>
      <div class="sd-card acc"><b>Cạnh tranh phi giá</b><p>Quảng cáo, thương hiệu, tính năng → cầu dịch phải và <b>ít co giãn hơn</b>.</p><small>Đổi lại ATC tăng</small></div></div>`),

    S('Độc quyền nhóm 1: đường cầu gãy', `<div class="sd-cols2 wide-left"><div>${kink}</div>
      <div><div class="sd-rule down">Tăng giá → đối thủ <b>không theo</b></div><div class="sd-rule up">Giảm giá → đối thủ <b>theo</b></div>
      <p class="sd-note">MR đứt quãng tại Q_K. MC₁ hay MC₂ đều cắt trong khoảng đứt → giá vẫn P_K.</p>
      <p class="sd-note">Hạn chế: không giải thích P_K từ đâu ra.</p></div></div>`),

    S('Độc quyền nhóm 2: Cournot và Stackelberg', `<p class="sd-cap">Cầu P = 100 - Q, MC = 10</p>
      <div class="sd-tbl grid"><div class="head"><span>Cấu trúc</span><span>Tổng Q</span><span>Giá</span><span>Ghi chú</span></div>
      <div><span>Độc quyền</span><span>45</span><span>55</span><span>MR = MC</span></div>
      <div><span>Stackelberg</span><span>67,5</span><span>32,5</span><span>Dẫn đầu 45, theo sau 22,5</span></div>
      <div><span>Cournot</span><span>60</span><span>40</span><span>Mỗi hãng 30</span></div>
      <div><span>Cạnh tranh hoàn hảo</span><span>90</span><span>10</span><span>P = MC</span></div></div>
      <p class="sd-note">Cournot: chọn sản lượng <b>đồng thời</b>. Stackelberg: <b>tuần tự</b>, người đi trước lãi hơn (1.012,5 so với 506,25).</p>`),

    S('Độc quyền nhóm 3: cân bằng Nash', `<div class="sd-cols2"><div><div class="sd-tbl grid"><div class="head"><span>(X, Y)</span><span>Y: Cao</span><span>Y: Thấp</span></div>
      <div><span>X: Cao</span><span>120, 120</span><span>40, 160</span></div>
      <div><span>X: Thấp</span><span>160, 40</span><span><b>70, 70</b></span></div></div></div>
      <div><div class="sd-steps"><span>① Y chọn Cao → X chọn Thấp (160 &gt; 120)</span><span>② Y chọn Thấp → X chọn Thấp (70 &gt; 40)</span><span>③ Nash: <b>(Thấp, Thấp)</b></span></div></div></div>
      <p class="sd-note">Cả hai chọn Cao sẽ tốt hơn, nhưng ai cũng có động cơ gian lận → cartel khó bền.</p>`),

    S('Độc quyền nhóm 4: hãng chi phối', `<div class="sd-cols2 wide-left"><div>${dom}</div>
      <div><div class="sd-steps"><span>① D_DF = cầu thị trường - cung hãng nhỏ</span><span>② Hãng lớn chọn Q tại MR_DF = MC_DF</span><span>③ Đặt P*, hãng nhỏ chấp nhận giá</span></div>
      <p class="sd-note">Hãng chi phối có chi phí thấp nhờ quy mô và nhận phần lớn lợi nhuận ngành.</p></div></div>`),

    S('Đo mức tập trung: CR và HHI', `<div class="sd-cols2"><div><p class="sd-cap">A mua lại B (thị phần A 30, B 20, C 15, D 10, E 10...)</p>
      <div class="sd-tbl grid"><div class="head"><span></span><span>Trước</span><span>Sau</span></div>
      <div><span>4-firm ratio</span><span>75%</span><span>85%</span></div>
      <div><span>HHI 4 hãng</span><span>1.625</span><span>2.925</span></div></div></div>
      <div><div class="sd-f sm">HHI = Σ (thị phần)²</div><div class="sd-rule up">HHI nhạy với hãng lớn <b>Ưu</b></div><div class="sd-rule down">Cả hai bỏ qua rào cản gia nhập <b>Hạn chế</b></div>
      <p class="sd-note">N hãng bằng nhau: HHI = 1/N.</p></div></div>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>Hòa vốn P = ATC, đóng cửa P &lt; AVC</span><span>AVC ≤ P &lt; ATC: ngắn hạn vẫn làm</span>
      <span>MC cắt AVC, ATC tại đáy</span><span>MES = đáy đầu tiên của LRATC</span>
      <span>Mọi hãng: MR = MC</span><span>CT độc quyền dài hạn: P = ATC &gt; MC</span>
      <span>Cournot: giá giữa cạnh tranh và độc quyền</span><span>HHI, CR bỏ qua rào cản gia nhập</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 10 câu, mục tiêu ≥ 7 câu đúng.</p>`),
  ];

  addDeck('EC-01', `Slide Firm and Market Structures - bản thiết kế riêng (${slides.length} slide)`, slides);
}());
