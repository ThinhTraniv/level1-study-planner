// Bộ slide tự thiết kế cho AI-04 Real Estate and Infrastructure.
(function () {
  const L = window.LESSONS && window.LESSONS['AI-04'];
  if (!L) return;
  const { frac, slide, addDeck } = window.CFAH;
  const K = 'AI-04 · Real Estate & Infrastructure';
  const S = (title, body, opt = {}) => slide(title, body, Object.assign({ kicker: K }, opt));
  const fmt = (x, d = 2) => x.toFixed(d).replace('.', ',');

  // Giá trị "thật" và giá trị thẩm định (làm trơn: A_t = 0,35 T_t + 0,65 A_t-1).
  function smoothChart() {
    let seed = 13;
    const rnd = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
    const T = [100], A = [100];
    for (let i = 1; i <= 24; i++) {
      const shock = (rnd() + rnd() + rnd() - 1.5) * 9 + (i > 9 && i < 15 ? -5 : 1.2);
      T.push(T[i - 1] * (1 + shock / 100));
      A.push(0.35 * T[i] + 0.65 * A[i - 1]);
    }
    const lo = Math.min(...T, ...A) - 4, hi = Math.max(...T, ...A) + 4;
    const W = 600, H = 280, l = 40, r = 585, t = 15, b = 245;
    const X = i => l + (i / 24) * (r - l), Y = v => b - ((v - lo) / (hi - lo)) * (b - t);
    const line = arr => arr.map((v, i) => `${X(i).toFixed(1)},${Y(v).toFixed(1)}`).join(' ');
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv" role="img" aria-label="Giá trị thật và giá trị thẩm định bị làm trơn">`;
    s += `<line x1="${l}" y1="${b}" x2="${r}" y2="${b}" class="sv-axis"/><line x1="${l}" y1="${t}" x2="${l}" y2="${b}" class="sv-axis"/>`;
    s += `<polyline points="${line(T)}" class="sv-down" fill="none"/><polyline points="${line(A)}" class="sv-curve"/>`;
    s += `<text x="${X(3)}" y="${t + 14}" class="sv-txt sv-t-down" text-anchor="start">Giá trị thị trường thật</text>`;
    s += `<text x="${X(3)}" y="${t + 40}" class="sv-txt" text-anchor="start">Chỉ số thẩm định (trơn, trễ)</text>`;
    s += `<text x="${(l + r) / 2}" y="${H - 6}" class="sv-muted">Quý (minh họa)</text>`;
    return `${s}</svg>`;
  }

  // Đường rủi ro - lợi nhuận của bốn chiến lược.
  const strat = (() => {
    const pts = [['Core', 90, 200], ['Core-plus', 220, 160], ['Value-add', 350, 115], ['Opportunistic', 480, 60]];
    let s = `<svg viewBox="0 0 600 260" class="sv big" role="img" aria-label="Rủi ro và lợi nhuận kỳ vọng tăng dần từ core đến opportunistic">`;
    s += `<line x1="40" y1="230" x2="580" y2="230" class="sv-axis"/><line x1="40" y1="20" x2="40" y2="230" class="sv-axis"/>`;
    s += `<polyline points="${pts.map(p => `${p[1]},${p[2]}`).join(' ')}" class="sv-dash" fill="none"/>`;
    pts.forEach((p, i) => { s += `<circle cx="${p[1]}" cy="${p[2]}" r="9" class="sv-dot"/><text x="${p[1]}" y="${p[2] - 18}" class="sv-txt ${i === 3 ? 'sv-t-down' : i === 0 ? 'sv-t-up' : ''}">${p[0]}</text>`; });
    s += `<text x="310" y="254" class="sv-muted">Rủi ro, đòn bẩy, phần lợi nhuận từ tăng giá →</text>`;
    s += `<text x="52" y="34" class="sv-muted" text-anchor="start">Lợi nhuận kỳ vọng</text>`;
    return `${s}</svg>`;
  })();

  // rows: [nhãn, giá trị, chữ hiển thị (bỏ trống '' để ẩn số)]
  const bars = (rows, lo, hi, d = 2, unit = '') => `<div class="sd-bars">${rows.map(([lab, v, txt]) => `<div class="sd-bar"><span class="sd-bar-l">${lab}</span><span class="sd-bar-t"><i style="width:${Math.min(100, Math.max(2, ((v - lo) / (hi - lo)) * 100))}%"></i></span>${txt === '' ? '' : `<b>${txt === undefined ? fmt(v, d) + unit : txt}</b>`}</div>`).join('')}</div>`;

  const NOI = 2400000 * 0.95 - 700000;
  const val = c => NOI / c / 1e6;
  const lev = ch => (650000 - 300000 + 10000000 * ch) / 4000000 * 100;
  const unl = ch => (650000 + 10000000 * ch) / 10000000 * 100;

  const slides = [
    S('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Alternative Investments · AI-04</div>
      <h2>Real Estate<br>and Infrastructure</h2>
      <p>Tài sản thực: tiền thuê như coupon, giá trị như cổ phiếu</p>
      <div class="sd-chips"><span>LOS 1 · Đặc điểm BĐS</span><span>LOS 2 · Đầu tư BĐS</span><span>LOS 3 · Đặc điểm hạ tầng</span><span>LOS 4 · Đầu tư hạ tầng</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Bất động sản: lai giữa trái phiếu và cổ phiếu', `<div class="sd-cols2">
      <div class="sd-card"><b>Phần giống trái phiếu</b><p>Hợp đồng thuê dài hạn → thu nhập đều đặn, có thể tăng theo CPI.</p><small>Core, brownfield, availability payment</small></div>
      <div class="sd-card acc"><b>Phần giống cổ phiếu</b><p>Giá trị lên xuống theo kinh tế, cung cầu, lãi suất, đòn bẩy.</p><small>Value-add, opportunistic, greenfield</small></div></div>
      <div class="sd-f">Lợi nhuận = ${frac('NOI + (P<sub>1</sub> - P<sub>0</sub>)', 'P<sub>0</sub>')}</div>`),

    S('Bốn góc đầu tư bất động sản', `<div class="sd-tbl grid"><div class="head"><span></span><span>Equity</span><span>Debt</span></div>
      <div><span><b>Private</b></span><span>Sở hữu trực tiếp, liên doanh, quỹ BĐS tư nhân</span><span>Cho vay thế chấp, vay xây dựng</span></div>
      <div><span><b>Public</b></span><span>REIT, REOC, ETF bất động sản</span><span>RMBS, CMBS, covered bond</span></div></div>
      <p class="sd-note">Chủ nợ: lãi cố định, có tài sản bảo đảm → rủi ro thấp hơn. Chủ sở hữu: nhận phần còn lại + tăng giá.</p>`),

    S('Loại bất động sản và độ dài hợp đồng thuê', `<p class="sd-cap">Độ dài hợp đồng thuê điển hình (minh họa):</p>${bars([['Khách sạn', 1, 'theo đêm'], ['Căn hộ cho thuê', 3, '~1 năm'], ['Bán lẻ', 6, 'nhiều năm'], ['Văn phòng', 8, '5 - 10 năm'], ['Kho vận', 8.5, 'dài hạn']], 0, 10)}
      <p class="sd-note">Hợp đồng càng ngắn → dòng tiền càng nhạy với kinh tế. <b>Gross lease</b>: chủ nhà trả chi phí vận hành. <b>Net lease</b>: người thuê trả.</p>`),

    S('Tám đặc điểm riêng của bất động sản', `<div class="sd-check">
      <span>Không đồng nhất (vị trí là duy nhất)</span><span>Giá trị lớn, khó chia nhỏ</span>
      <span>Cần quản lý nhiều</span><span>Chi phí giao dịch cao</span>
      <span>Khấu hao, lỗi thời</span><span>Nhạy với tín dụng, lãi suất</span>
      <span>Kém thanh khoản</span><span>Khó định giá (dựa vào thẩm định)</span></div>`),

    S('Trực tiếp hay gián tiếp?', `<div class="sd-cols2">
      <div><p class="sd-cap"><b>Trực tiếp</b></p><div class="sd-rule up">Kiểm soát, lợi ích thuế</div><div class="sd-rule up">Tự chọn tài sản để đa dạng hóa</div><div class="sd-rule down">Kém thanh khoản, vốn lớn</div><div class="sd-rule down">Quản lý phức tạp, rủi ro tập trung</div></div>
      <div><p class="sd-cap"><b>Gián tiếp (REIT, quỹ)</b></p><div class="sd-rule up">Thanh khoản, vốn nhỏ</div><div class="sd-rule up">Quản lý chuyên nghiệp, đa dạng</div><div class="sd-rule down">Không kiểm soát, có phí</div><div class="sd-rule down">REIT biến động theo cổ phiếu</div></div></div>`),

    S('REIT và REOC', `<div class="sd-tbl grid"><div class="head"><span></span><span>REIT</span><span>REOC</span></div>
      <div><span>Thuế doanh nghiệp</span><span>Miễn (phần phân phối)</span><span>Có</span></div>
      <div><span>Phân phối thu nhập</span><span>Bắt buộc phần lớn (Mỹ ≥ 90%)</span><span>Tự do</span></div>
      <div><span>Giữ lại lợi nhuận</span><span>Ít → cần vốn mới để mở rộng</span><span>Được</span></div>
      <div><span>Phát triển dự án</span><span>Hạn chế</span><span>Tự do</span></div></div>
      <p class="sd-note"><b>Equity REIT</b> sở hữu tài sản cho thuê; <b>mortgage REIT</b> nắm khoản vay → nhạy lãi suất như trái phiếu.</p>`),

    S('Bốn chiến lược theo mức rủi ro', `<div class="sd-cols2 wide-left"><div>${strat}</div>
      <div><div class="sd-rule up">Core: ổn định, lấp đầy cao, thu nhập</div><div class="sd-rule">Value-add: cải tạo, cho thuê lại</div><div class="sd-rule down">Opportunistic: phát triển mới, tài sản trống, đòn bẩy cao</div></div></div>`),

    S('Ba phương pháp định giá', `<div class="sd-cols3">
      <div class="sd-card acc"><div class="sd-n">1</div><b>Income</b><p>PV thu nhập: direct cap hoặc DCF</p><small>Văn phòng, kho, căn hộ cho thuê</small></div>
      <div class="sd-card"><div class="sd-n">2</div><b>Cost</b><p>Đất + chi phí xây mới - hao mòn</p><small>Tài sản đặc thù, ít giao dịch</small></div>
      <div class="sd-card"><div class="sd-n">3</div><b>Sales comparison</b><p>Giá bán tài sản tương tự, có điều chỉnh</p><small>Nhà ở, thị trường nhiều giao dịch</small></div></div>`),

    S('Direct capitalization: từng bước', `<div class="sd-steps">
      <span>① EGI = 2.400.000 × (1 - 5%) = 2.280.000</span>
      <span>② NOI = 2.280.000 - 700.000 = <b>1.580.000</b></span>
      <span>③ Cap rate so sánh = 1.950.000 / 30.000.000 = <b>6,5%</b></span>
      <span>④ V = 1.580.000 / 6,5% = <b>24.307.692 USD</b></span></div>
      <p class="sd-note">NOI <b>không</b> trừ lãi vay, khấu hao, thuế thu nhập. Chia tiền thuê gộp cho cap rate → 36,9 triệu (sai).</p>`),

    S('Cap rate lên, giá trị xuống', `<div class="sd-cols2 wide-left"><div><p class="sd-cap">NOI 1.580.000 USD, giá trị (triệu USD) theo cap rate:</p>${bars([['Cap rate 6,0%', val(0.06)], ['Cap rate 6,5%', val(0.065)], ['Cap rate 7,0%', val(0.07)]], 18, 27)}</div>
      <div><div class="sd-f sm">V = ${frac('NOI<sub>1</sub>', 'r - g')}</div><div class="sd-rule">Cap rate = r - g = 9% - 2,5% = 6,5%</div><p class="sd-note">6,5% → 7,0%: giá trị <b>giảm 7,14%</b>. Cap rate thấp = rủi ro thấp hoặc kỳ vọng tăng trưởng cao.</p></div></div>`),

    S('Đòn bẩy phóng đại cả hai chiều', `<div class="sd-cols2 wide-left"><div><p class="sd-cap">Lợi nhuận trên vốn chủ (%), giá 10 triệu, NOI 650.000, vay 60% lãi 5%:</p>${bars([['Giá +4%, không vay', unl(0.04)], ['Giá +4%, có vay', lev(0.04)], ['Giá -4%, không vay', unl(-0.04)], ['Giá -4%, có vay', lev(-0.04)]], 0, 20, 2, '%')}</div>
      <div><div class="sd-f sm">R<sub>E</sub> = ${frac('NOI - Lãi vay + ΔV', 'Vốn chủ')}</div><p class="sd-note">Khoảng chênh hai kịch bản: 8 điểm % → <b>20 điểm %</b>. Đòn bẩy chỉ có lợi khi lợi nhuận tài sản &gt; chi phí vay.</p></div></div>`),

    S('Chỉ số thẩm định bị làm trơn', `<div class="sd-cols2 wide-left"><div>${smoothChart()}</div>
      <div><div class="sd-rule down">Biến động đo được thấp hơn thực tế</div><div class="sd-rule down">Tương quan đo được thấp hơn</div><div class="sd-rule">Thay thế: transaction-based (repeat sales, hedonic), REIT index</div>
      <p class="sd-note">Lợi ích đa dạng hóa trông đẹp hơn thực tế, nhưng vẫn có thật.</p></div></div>`),

    S('Hạ tầng: phân loại theo chức năng', `<div class="sd-grid4">
      <div><b>Giao thông</b><p>Cao tốc, cầu, sân bay, cảng, đường sắt</p></div>
      <div><b>Tiện ích</b><p>Điện, khí, nước, xử lý chất thải</p></div>
      <div><b>Thông tin, truyền thông</b><p>Trạm phát sóng, cáp quang, trung tâm dữ liệu</p></div>
      <div><b>Xã hội</b><p>Trường học, bệnh viện, nhà ở xã hội, trại giam</p></div></div>
      <p class="sd-note">Ba nhóm đầu là <b>hạ tầng kinh tế</b>. Đặc điểm chung: thâm dụng vốn, tuổi thọ dài, gần độc quyền, nhu cầu ít co giãn.</p>`),

    S('Greenfield và brownfield', `<div class="sd-tbl grid"><div class="head"><span></span><span>Greenfield</span><span>Brownfield</span></div>
      <div><span>Tài sản</span><span>Chưa xây</span><span>Đã hoạt động, tư nhân hóa, mở rộng</span></div>
      <div><span>Rủi ro đặc trưng</span><span>Xây dựng, nhu cầu chưa rõ</span><span>Vận hành, quy định</span></div>
      <div><span>Lợi nhuận chủ yếu</span><span>Tăng giá vốn</span><span>Thu nhập ổn định</span></div>
      <div><span>Rủi ro, lợi nhuận kỳ vọng</span><span>Cao</span><span>Thấp hơn</span></div></div>`),

    S('Ai trả tiền cho hạ tầng?', `${bars([['Availability payment', 1, 'thấp nhất'], ['Regulated', 2.2, 'thấp'], ['Contracted (PPA)', 3, 'trung bình'], ['User fee (phí cầu đường)', 5, 'cao nhất']], 0, 5)}
      <p class="sd-cap">Thanh dài = rủi ro nhu cầu cao hơn</p>
      <p class="sd-note">Regulated ít rủi ro nhu cầu nhưng nhiều <b>rủi ro quy định</b> (giá trần, lợi nhuận cho phép). PPP, concession: tư nhân khai thác có thời hạn rồi chuyển giao.</p>`),

    S('Đầu tư hạ tầng: hình thức và rủi ro', `<div class="sd-cols2">
      <div><div class="sd-rule">Trực tiếp: kiểm soát, vốn rất lớn</div><div class="sd-rule">Quỹ tư nhân: đa dạng, kém thanh khoản, phí cao</div><div class="sd-rule">Niêm yết (cổ phiếu, ETF, MLP): thanh khoản, tương quan cao hơn với cổ phiếu</div></div>
      <div><div class="sd-check"><span>Xây dựng</span><span>Nhu cầu</span><span>Quy định, chính trị</span><span>Lãi suất (dòng tiền dài)</span><span>Vận hành, đối tác</span><span>Thanh khoản, tỷ giá</span></div></div></div>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>Private/public × equity/debt</span><span>CMBS = public debt</span>
      <span>REIT miễn thuế, phải phân phối</span><span>NOI trước lãi vay, khấu hao</span>
      <span>V = NOI / cap rate; cap = r - g</span><span>Đòn bẩy: chia cho vốn chủ</span>
      <span>Thẩm định làm thấp biến động, tương quan</span><span>Greenfield: xây dựng, tăng giá; brownfield: thu nhập</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 10 câu, mục tiêu ≥ 7 câu đúng.</p>`),
  ];

  addDeck('AI-04', `Slide Real Estate & Infrastructure - bản thiết kế riêng (${slides.length} slide)`, slides);
}());
