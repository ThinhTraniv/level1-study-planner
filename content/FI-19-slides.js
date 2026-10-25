// Bộ slide tự thiết kế cho FI-19 Mortgage-Backed Security (MBS) Instrument and Market Features.
(function () {
  const L = window.LESSONS && window.LESSONS['FI-19'];
  if (!L) return;
  const { frac, slide, addDeck } = window.CFAH;
  const K = 'FI-19 · MBS';
  const S = (title, body, opt = {}) => slide(title, body, Object.assign({ kicker: K }, opt));
  const fmt = (x, d = 2) => x.toFixed(d).replace('.', ',');

  // Dòng gốc hằng tháng của danh mục 400 triệu, 30 năm, lãi 6% theo tốc độ PSA.
  function principal(psa) {
    let bal = 400;
    const r = 0.06 / 12, out = [];
    for (let m = 1; m <= 360; m++) {
      const pmt = (bal * r) / (1 - Math.pow(1 + r, -(361 - m)));
      const sch = pmt - bal * r, cpr = (psa / 100) * Math.min(m, 30) * 0.002, smm = 1 - Math.pow(1 - cpr, 1 / 12);
      const p = sch + smm * (bal - sch);
      bal -= p; out.push(p);
    }
    return out;
  }
  const wal = pr => pr.reduce((a, p, i) => a + (i + 1) * p, 0) / pr.reduce((a, p) => a + p, 0) / 12;

  // Khoản vay 300.000, 6%, 30 năm: phần lãi và phần gốc trong khoản trả hằng tháng.
  function amortChart() {
    const W = 600, H = 260, l = 40, r = 580, b = 220, top = 30;
    const rate = 0.005, pmt = (300000 * rate) / (1 - Math.pow(1 + rate, -360));
    let bal = 300000, pi = '', pp = '';
    const X = m => l + ((m - 1) / 359) * (r - l), Y = v => b - (v / pmt) * (b - top);
    for (let m = 1; m <= 360; m++) {
      const it = bal * rate, pr = pmt - it;
      pi += `${X(m).toFixed(1)},${Y(it).toFixed(1)} `; pp += `${X(m).toFixed(1)},${Y(pr).toFixed(1)} `;
      bal -= pr;
    }
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv big" role="img" aria-label="Lãi và gốc trong khoản trả hằng tháng">`;
    s += `<line x1="${l}" y1="${b}" x2="${r}" y2="${b}" class="sv-axis"/><line x1="${l}" y1="${Y(pmt)}" x2="${r}" y2="${Y(pmt)}" class="sv-dash"/>`;
    s += `<polyline points="${pi}" class="sv-down" fill="none"/><polyline points="${pp}" class="sv-up" fill="none"/>`;
    s += `<text x="${l + 6}" y="${Y(pmt) - 8}" class="sv-muted" text-anchor="start">trả mỗi tháng 1.798,65</text>`;
    s += `<text x="${X(60)}" y="${Y(1450) - 12}" class="sv-txt sv-t-down" text-anchor="start">lãi</text><text x="${X(60)}" y="${Y(400) + 30}" class="sv-txt sv-t-up" text-anchor="start">gốc</text>`;
    s += `<text x="${l}" y="${b + 26}" class="sv-muted" text-anchor="start">tháng 1</text><text x="${r}" y="${b + 26}" class="sv-muted" text-anchor="end">tháng 360</text>`;
    return `${s}</svg>`;
  }

  // Đường CPR theo tháng của 100 PSA và 150 PSA.
  function psaChart() {
    const W = 600, H = 250, l = 50, r = 580, b = 210, top = 20, mx = 60, my = 10;
    const X = m => l + (m / mx) * (r - l), Y = c => b - (c / my) * (b - top);
    const line = k => { let p = ''; for (let m = 0; m <= mx; m++) p += `${X(m).toFixed(1)},${Y(k * Math.min(m, 30) * 0.2).toFixed(1)} `; return p; };
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv big" role="img" aria-label="Chuẩn PSA">`;
    s += `<line x1="${l}" y1="${b}" x2="${r}" y2="${b}" class="sv-axis"/><line x1="${l}" y1="${top}" x2="${l}" y2="${b}" class="sv-axis"/>`;
    s += `<line x1="${X(30)}" y1="${top}" x2="${X(30)}" y2="${b}" class="sv-dash"/><text x="${X(30)}" y="${b + 24}" class="sv-muted">tháng 30</text>`;
    s += `<polyline points="${line(1)}" class="sv-curve"/><polyline points="${line(1.5)}" class="sv-down" fill="none"/>`;
    s += `<text x="${r}" y="${Y(6) + 26}" class="sv-txt" text-anchor="end">100 PSA: 6%</text><text x="${r}" y="${Y(9) - 10}" class="sv-txt sv-t-down" text-anchor="end">150 PSA: 9%</text>`;
    s += `<text x="${l - 6}" y="${Y(10) + 5}" class="sv-muted" text-anchor="end">10%</text><text x="${l - 6}" y="${b + 5}" class="sv-muted" text-anchor="end">0</text>`;
    return `${s}</svg>`;
  }

  // Gốc hằng tháng theo 100 PSA và 300 PSA; lịch PAC = mức nhỏ hơn.
  const p100 = principal(100), p300 = principal(300), pac = p100.map((x, i) => Math.min(x, p300[i]));
  const pacSize = pac.reduce((a, x) => a + x, 0);
  function pacChart() {
    const W = 600, H = 260, l = 30, r = 580, b = 220, top = 20, n = 240;
    const mx = Math.max(...p300.slice(0, n));
    const X = m => l + (m / n) * (r - l), Y = v => b - (v / mx) * (b - top);
    const pl = arr => arr.slice(0, n).map((v, i) => `${X(i + 1).toFixed(1)},${Y(v).toFixed(1)}`).join(' ');
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv big" role="img" aria-label="Lịch trả gốc PAC">`;
    s += `<polygon points="${X(1)},${b} ${pl(pac)} ${X(n)},${b}" style="fill:var(--ok-soft);stroke:none"/>`;
    s += `<line x1="${l}" y1="${b}" x2="${r}" y2="${b}" class="sv-axis"/>`;
    s += `<polyline points="${pl(p100)}" class="sv-curve"/><polyline points="${pl(p300)}" class="sv-down" fill="none"/>`;
    s += `<text x="${X(60)}" y="${Y(p300[59]) - 10}" class="sv-txt sv-t-down" text-anchor="start">300 PSA</text><text x="${X(180)}" y="${Y(p100[179]) - 12}" class="sv-txt">100 PSA</text>`;
    s += `<text x="${l}" y="${b + 26}" class="sv-muted" text-anchor="start">tháng 1</text><text x="${r}" y="${b + 26}" class="sv-muted" text-anchor="end">tháng ${n}</text>`;
    return `${s}</svg>`;
  }

  const bar = (lab, v, max, txt) => `<div class="sd-bar"><span class="sd-bar-l">${lab}</span><span class="sd-bar-t"><i style="width:${(v / max) * 100}%"></i></span><b>${txt}</b></div>`;
  const walBars = [0, 100, 165, 300, 500].map(p => { const w = wal(principal(p)); return bar(`${p} PSA`, w, 20, `${fmt(w)} năm`); }).join('');

  const slides = [
    S('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Fixed Income · FI-19</div>
      <h2>Mortgage-Backed Securities:<br>Instrument and Market Features</h2>
      <p>Người vay có quyền trả trước, nhà đầu tư chịu rủi ro thời điểm</p>
      <div class="sd-chips"><span>LOS 1 · Prepayment, time tranching</span><span>LOS 2 · Khoản vay nhà ở</span><span>LOS 3 · Pass-through, CMO</span><span>LOS 4 · CMBS</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Nhà đầu tư MBS đã bán một quyền chọn', `<div class="sd-cols2">
      <div class="sd-card"><b>Người vay mua nhà</b><p>Được trả trước bất cứ lúc nào, thường khi lãi suất giảm.</p><small>Nắm quyền chọn mua</small></div>
      <div class="sd-card acc"><b>Nhà đầu tư MBS</b><p>Không biết chắc khi nào nhận lại gốc.</p><small>Rủi ro trả trước</small></div></div>
      <p class="sd-note">FI-18: phân tầng chia rủi ro <b>tín dụng</b>. FI-19: phân tầng chia rủi ro <b>trả trước</b>.</p>`),

    S('Đặc điểm khoản vay thế chấp', `<div class="sd-grid4">
      <div class="sd-card"><b>Lãi suất</b><p>Cố định · ARM · hybrid · convertible</p></div>
      <div class="sd-card"><b>Trả gốc</b><p>Trả dần · balloon · interest-only</p></div>
      <div class="sd-card"><b>Trả trước</b><p>Được phép; có thể bị phạt</p></div>
      <div class="sd-card acc"><b>Khi vỡ nợ</b><p>Recourse: đòi cả tài sản khác. Nonrecourse: chỉ căn nhà</p></div></div>
      <p class="sd-note">LTV thấp, DTI thấp, điểm tín dụng cao → khoản vay prime.</p>`),

    S('300.000 USD, 30 năm, 6%: lãi và gốc', `<div class="sd-cols2 wide-left"><div>${amortChart()}</div>
      <div><div class="sd-keys"><span>360 N</span><span>0.5 I/Y</span><span>300000 PV</span><span>CPT PMT</span></div>
      <p class="sd-note">Tháng 1: lãi <b>1.500,00</b>, gốc <b>298,65</b>. Tổng lãi cả đời: 347.514,57.</p></div></div>`),

    S('Agency và non-agency', `<div class="sd-tbl grid">
      <div class="head"><span></span><span>Agency</span><span>Non-agency</span></div>
      <div><span>Bảo lãnh</span><span>Ginnie Mae, Fannie Mae, Freddie Mac</span><span>Không</span></div>
      <div><span>Khoản vay</span><span>Conforming</span><span>Không đạt chuẩn</span></div>
      <div><span>Rủi ro tín dụng</span><span>Rất thấp</span><span>Cần credit enhancement</span></div></div>
      <p class="sd-note">Ginnie Mae có bảo lãnh đầy đủ của Chính phủ Mỹ; Fannie Mae và Freddie Mac là GSE.</p>`),

    S('Pass-through: chuyển nguyên dòng tiền', `<div class="sd-cols2"><div>
      <div class="sd-steps"><span>Lãi</span><span>Gốc theo lịch</span><span>Gốc trả trước</span><span>Trừ phí servicing, bảo lãnh</span></div></div>
      <div>${bar('Lãi khoản vay', 6, 6, '6,00%')}${bar('Phí servicing', 0.25, 6, '0,25%')}${bar('Phí bảo lãnh', 0.25, 6, '0,25%')}${bar('Pass-through rate', 5.5, 6, '5,50%')}</div></div>`),

    S('WAC và WAM: trọng số là dư nợ', `<div class="sd-tbl grid">
      <div class="head"><span>Dư nợ</span><span>Trọng số</span><span>Lãi suất</span><span>Tháng còn lại</span></div>
      <div><span>100.000</span><span>0,2</span><span>5,5%</span><span>240</span></div>
      <div><span>250.000</span><span>0,5</span><span>6,0%</span><span>300</span></div>
      <div><span>150.000</span><span>0,3</span><span>6,5%</span><span>180</span></div></div>
      <div class="sd-cols2"><div class="sd-rule up">WAC <b>6,05%</b></div><div class="sd-rule up">WAM <b>252 tháng</b></div></div>
      <p class="sd-note">Bình quân đơn giản cho 6,00% và 240 tháng: đáp án bẫy.</p>`),

    S('Co ngắn hay kéo dài: đều bất lợi', `<div class="sd-cols2">
      <div class="sd-card"><b>Contraction risk</b><p>Lãi suất <b>giảm</b> → tái cấp vốn → gốc về <b>sớm</b>.</p><small>Tái đầu tư ở lãi suất thấp</small></div>
      <div class="sd-card acc"><b>Extension risk</b><p>Lãi suất <b>tăng</b> → ít trả trước → gốc về <b>muộn</b>.</p><small>Vốn kẹt ở lãi suất thấp</small></div></div>
      <p class="sd-note">Hệ quả: MBS có độ lồi âm - giá tăng ít khi lãi giảm, giảm nhiều khi lãi tăng.</p>`),

    S('SMM và CPR', `<div class="sd-big">SMM = 1 - (1 - CPR)<sup>1/12</sup></div>
      <div class="sd-cols3">
      <div class="sd-card"><b>CPR 6%</b><p>SMM = <b>0,5143%</b></p><small>không phải 0,5%</small></div>
      <div class="sd-card"><b>Dư nợ 100, gốc lịch 0,2</b><p>Trả trước = 0,5143% × 99,8</p></div>
      <div class="sd-card acc"><b>Kết quả</b><p><b>0,513</b> triệu USD</p></div></div>`),

    S('Chuẩn PSA', `<div class="sd-cols2 wide-left"><div>${psaChart()}</div>
      <div><div class="sd-f sm">CPR<sub>t</sub> = ${frac('PSA', '100')} × 0,2% × min(t, 30)</div>
      <p class="sd-note">150 PSA tháng 10: <b>3%</b>. Tháng 40: <b>9%</b>, không phải 12%.</p></div></div>`),

    S('Trả trước nhanh → WAL ngắn', `<p class="sd-cap">Danh mục 30 năm, lãi 6% (mô phỏng)</p>${walBars}
      <p class="sd-note">WAM vẫn 360 tháng; WAL thay đổi theo tốc độ trả trước.</p>`),

    S('Sequential-pay: gốc trả lần lượt A → B → C', `<div class="sd-tbl grid">
      <div class="head"><span>Tầng</span><span>WAL cơ sở</span><span>WAL trả nhanh</span></div>
      <div><span>A (150)</span><span>1,93</span><span>1,33</span></div>
      <div><span>B (100)</span><span>4,10</span><span>2,60</span></div>
      <div><span>C (50)</span><span>5,80</span><span>4,50</span></div>
      <div><span>Danh mục (300)</span><span>3,30</span><span>2,28</span></div></div>
      <p class="sd-note">Tầng đầu: chống <b>kéo dài</b> tốt hơn. Tầng cuối: chống <b>co ngắn</b> tốt hơn. Rủi ro được chia lại, không biến mất.</p>`),

    S('PAC: lịch gốc trong biên 100-300 PSA', `<div class="sd-cols2 wide-left"><div>${pacChart()}</div>
      <div><p class="sd-note">Vùng xanh: lịch PAC = mức nhỏ hơn của hai đường mỗi tháng.</p><div class="sd-rule up">PAC <b>${fmt(pacSize)} triệu</b></div><div class="sd-rule">Support <b>${fmt(400 - pacSize)} triệu</b></div></div></div>`),

    S('Support hấp thụ, PAC đứng yên', `<div class="sd-tbl grid">
      <div class="head"><span>WAL (năm)</span><span>50</span><span>100</span><span>165</span><span>300</span><span>500 PSA</span></div>
      <div><span>PAC</span><span>9,43</span><span>7,09</span><span>7,09</span><span>7,09</span><span>4,92</span></div>
      <div><span>Support</span><span>24,11</span><span>19,39</span><span>11,68</span><span>3,20</span><span>1,90</span></div></div>
      <p class="sd-note">Ngoài biên, PAC cũng thay đổi. PAC ổn định → lợi suất thấp; support rủi ro cao → lợi suất cao.</p>`),

    S('CMBS: nhìn vào bất động sản', `<div class="sd-cols2">
      <div><div class="sd-f sm">DSCR = ${frac('900.000', '750.000')} = <b>1,20</b></div><div class="sd-f sm">LTV = ${frac('6', '8')} = <b>75%</b></div>
      <p class="sd-note">Khoản vay nonrecourse: chỉ trông vào NOI và giá trị tài sản.</p></div>
      <div class="sd-card acc"><b>Call protection</b><p>Khoản vay: lockout · defeasance · penalty points · yield maintenance</p><p>Cấu trúc: phân tầng tín dụng</p><small>Balloon risk = rủi ro kéo dài</small></div></div>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>Recourse đòi được tài sản khác</span><span>Pass-through rate &lt; lãi khoản vay</span>
      <span>WAC, WAM trọng số theo dư nợ</span><span>SMM = 1 - (1 - CPR)^(1/12)</span>
      <span>100 PSA: 6% từ tháng 30</span><span>Lãi giảm → co ngắn; lãi tăng → kéo dài</span>
      <span>CMO chia lại rủi ro, không xóa</span><span>CMBS: DSCR, LTV, balloon risk</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 10 câu.</p>`),
  ];

  addDeck('FI-19', 'Slide MBS - bản thiết kế riêng (16 slide)', slides);
}());
