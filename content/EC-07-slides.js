// Bộ slide tự thiết kế cho EC-07 Capital Flows and the FX Market.
(function () {
  const L = window.LESSONS && window.LESSONS['EC-07'];
  if (!L) return;
  const { frac, slide, addDeck } = window.CFAH;
  const K = 'EC-07 · Capital Flows and FX';
  const S = (title, body, opt = {}) => slide(title, body, Object.assign({ kicker: K }, opt));

  // Phổ chế độ tỷ giá từ cứng đến linh hoạt.
  const regimes = (() => {
    const items = ['Dollarization', 'Monetary union', 'Currency board', 'Fixed peg ±1%', 'Target zone ±2%', 'Crawling peg', 'Managed float', 'Free float'];
    const l = 40, r = 560;
    let s = `<svg viewBox="0 0 600 230" class="sv" role="img" aria-label="Các chế độ tỷ giá từ cứng đến linh hoạt">`;
    s += `<line x1="${l}" y1="120" x2="${r}" y2="120" class="sv-axis"/>`;
    items.forEach((lab, i) => {
      const x = l + (i * (r - l)) / (items.length - 1), up = i % 2 === 0;
      s += `<circle cx="${x}" cy="120" r="8" class="sv-node ${i < 4 ? 'down' : 'up'}"/>`;
      s += `<line x1="${x}" y1="${up ? 110 : 130}" x2="${x}" y2="${up ? 80 : 160}" class="sv-grid"/>`;
      s += `<text x="${x}" y="${up ? 70 : 180}" class="sv-txt" style="font-size:14px">${lab}</text>`;
    });
    s += `<text x="${l}" y="218" class="sv-muted" text-anchor="start">← cứng: tỷ giá ổn định, mất tự chủ tiền tệ</text><text x="${r}" y="20" class="sv-muted" text-anchor="end">linh hoạt: tự chủ tiền tệ, tỷ giá biến động →</text>`;
    return `${s}</svg>`;
  })();

  // Tam giác bộ ba bất khả thi.
  const trinity = `<svg viewBox="0 0 600 280" class="sv" role="img" aria-label="Bộ ba bất khả thi">
    <polygon points="300,30 90,240 510,240" class="sv-panel"/>
    <circle cx="300" cy="30" r="10" class="sv-dot"/><circle cx="90" cy="240" r="10" class="sv-dot"/><circle cx="510" cy="240" r="10" class="sv-dot"/>
    <text x="300" y="62" class="sv-txt">Tỷ giá cố định</text><text x="95" y="268" class="sv-txt" text-anchor="start">Vốn tự do</text><text x="505" y="268" class="sv-txt" text-anchor="end">Chính sách tiền tệ độc lập</text>
    <text x="300" y="170" class="sv-txt sv-t-pv">chỉ chọn được 2 trong 3</text><text x="300" y="198" class="sv-muted">hạn chế vốn = bỏ đỉnh "vốn tự do"</text></svg>`;

  // Đường J: cán cân thương mại sau khi mất giá (minh họa).
  const jCurve = (() => {
    const l = 50, r = 580, t = 20, b = 230, y0 = 165;
    const f = x => -38 * x * Math.exp(-x / 1.4) + 14 * (1 - Math.exp(-x / 3)) * x / 2.2;
    let pts = '';
    for (let x = 0; x <= 10.001; x += 0.1) pts += `${(l + (x / 10) * (r - l)).toFixed(1)},${(y0 - f(x) * 2.2).toFixed(1)} `;
    let s = `<svg viewBox="0 0 600 260" class="sv" role="img" aria-label="Hiệu ứng tuyến J">`;
    s += `<line x1="${l}" y1="${y0}" x2="${r}" y2="${y0}" class="sv-dash"/><line x1="${l}" y1="${t}" x2="${l}" y2="${b}" class="sv-axis"/>`;
    s += `<polyline points="${pts}" class="sv-curve"/>`;
    s += `<text x="${l + 8}" y="${t + 8}" class="sv-muted" text-anchor="start">Cán cân thương mại</text><text x="${r}" y="${b + 22}" class="sv-muted" text-anchor="end">thời gian sau khi mất giá →</text>`;
    s += `<text x="200" y="226" class="sv-txt sv-t-down">ngắn hạn: xấu đi</text><text x="330" y="50" class="sv-txt sv-t-up">dài hạn: cải thiện</text>`;
    return `${s}</svg>`;
  })();

  const slides = [
    S('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Economics · EC-07</div>
      <h2>Capital Flows and<br>the FX Market</h2>
      <p>Đọc tỷ giá, hiểu chế độ tỷ giá, và vì sao vốn bị kiểm soát</p>
      <div class="sd-chips"><span>LOS 1 · FX market, tỷ giá thực, % thay đổi</span><span>LOS 2 · Chế độ tỷ giá, thương mại, dòng vốn</span><span>LOS 3 · Hạn chế vốn</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Quy ước P/B', `<div class="sd-big">VND/USD = 25.400 &nbsp;⇔&nbsp; 1 USD = 25.400 VND</div>
      <div class="sd-cols2"><div class="sd-card"><b>P = đồng định giá</b><p>VND: đơn vị dùng để đo giá</p></div><div class="sd-card acc"><b>B = đồng cơ sở</b><p>USD: 1 đơn vị được định giá</p></div></div>
      <div class="sd-cols2"><div class="sd-rule up"><span>Direct quote</span><b>nội tệ là P</b></div><div class="sd-rule down"><span>Indirect quote</span><b>nội tệ là B</b></div></div>
      <p class="sd-note">P/B tăng → <b>B lên giá</b>, P mất giá.</p>`),

    S('Thị trường ngoại hối để làm gì?', `<div class="sd-cols3">
      <div class="sd-card"><div class="sd-n">1</div><b>Thương mại, đầu tư</b><p>Đổi tiền để mua hàng, tài sản, chứng khoán nước ngoài</p></div>
      <div class="sd-card"><div class="sd-n">2</div><b>Phòng hộ</b><p>Forward chốt tỷ giá cho khoản thu chi tương lai</p></div>
      <div class="sd-card"><div class="sd-n">3</div><b>Đầu cơ</b><p>Chủ động nắm vị thế để kiếm lời từ biến động</p></div></div>
      <p class="sd-note">Giao dịch: spot (T+2), forward, FX swap (spot + forward ngược chiều), futures, options.</p>`),

    S('Ai tham gia?', `<div class="sd-tbl grid"><div class="head"><span>Nhóm</span><span>Ví dụ</span><span>Đặc điểm</span></div>
      <div><span><b>Sell side</b></span><span>Ngân hàng lớn</span><span>Báo giá, tạo lập thị trường</span></div>
      <div><span>Doanh nghiệp</span><span>Xuất nhập khẩu, FDI</span><span>Nhu cầu thực, phòng hộ</span></div>
      <div><span>Real money</span><span>Quỹ hưu trí, bảo hiểm</span><span>Ít đòn bẩy</span></div>
      <div><span>Leveraged</span><span>Quỹ phòng hộ, tự doanh</span><span>Đòn bẩy, chủ động</span></div>
      <div><span>Nhỏ lẻ</span><span>Hộ gia đình, du khách</span><span>Giao dịch nhỏ</span></div>
      <div><span>Chính phủ</span><span>NHTW, quỹ quốc gia</span><span>Can thiệp, dự trữ</span></div></div>`),

    S('Phần trăm thay đổi: đặt đồng cần tính làm B', `<div class="sd-cols2">
      <div class="sd-card"><b>Đồng cơ sở B</b><div class="sd-f sm">${frac('S<sub>1</sub>', 'S<sub>0</sub>')} - 1</div></div>
      <div class="sd-card acc"><b>Đồng định giá P</b><div class="sd-f sm">${frac('S<sub>0</sub>', 'S<sub>1</sub>')} - 1</div></div></div>
      <div class="sd-cols2"><div class="sd-rule up"><span>VND/USD 24.500 → 25.480: USD</span><b>+4,00%</b></div><div class="sd-rule down"><span>VND</span><b>-3,85%</b></div></div>
      <p class="sd-note">Không đối xứng: USD +4% không có nghĩa VND -4%.</p>`),

    S('Luyện nhanh: JPY/USD 150 → 140', `<div class="sd-tbl grid"><div class="head"><span>Đồng tiền</span><span>Vai trò</span><span>Phép tính</span><span>Kết quả</span></div>
      <div><span>USD</span><span>cơ sở</span><span>140 / 150 - 1</span><span><b>-6,67%</b></span></div>
      <div><span>JPY</span><span>định giá</span><span>150 / 140 - 1</span><span><b>+7,14%</b></span></div></div>
      <p class="sd-note">Tỷ giá P/B <b>giảm</b> → đồng cơ sở mất giá, đồng định giá lên giá. Đáp án bẫy: +6,67%.</p>`),

    S('Tỷ giá thực', `<div class="sd-f">Thực<sub>P/B</sub> = S<sub>P/B</sub> × ${frac('CPI<sub>B</sub>', 'CPI<sub>P</sub>')}</div>
      <div class="sd-steps"><span>Gốc: VND/USD 24.000, CPI hai nước = 100</span><span>Sau 2 năm: 25.200, CPI VN 108, CPI Mỹ 103</span><span>Thực = 25.200 × 103 / 108 = <b>24.033,33</b></span></div>
      <p class="sd-note">Lạm phát nước P cao hơn → tỷ giá thực P/B <b>thấp hơn</b> danh nghĩa → hàng nước P kém cạnh tranh hơn.</p>`),

    S('Danh nghĩa tăng 5%, thực chỉ tăng 0,14%', `<div class="sd-bars">
      <div class="sd-bar"><span class="sd-bar-l">Danh nghĩa VND/USD</span><span class="sd-bar-t"><i style="width:100%"></i></span><b>+5,00%</b></div>
      <div class="sd-bar"><span class="sd-bar-l">Giá VN so với Mỹ (108/103)</span><span class="sd-bar-t"><i style="width:97%"></i></span><b>+4,85%</b></div>
      <div class="sd-bar"><span class="sd-bar-l">Thực VND/USD</span><span class="sd-bar-t"><i style="width:3%"></i></span><b>+0,14%</b></div></div>
      <p class="sd-note">VND mất giá danh nghĩa 5% nhưng lạm phát cao hơn Mỹ "ăn" gần hết: sức cạnh tranh về giá của hàng Việt Nam gần như không đổi.</p>`),

    S('Các chế độ tỷ giá', `<div class="sd-cols2 wide-left"><div>${regimes}</div><div class="sd-card"><b>Currency board</b><p>Nội tệ bảo đảm 100% bằng dự trữ (Hồng Kông).</p><b>Việt Nam</b><p>Tỷ giá trung tâm + biên độ: một dạng có quản lý.</p></div></div>`),

    S('Bộ ba bất khả thi', `<div class="sd-cols2 wide-left"><div>${trinity}</div><div class="sd-card"><b>Chọn 2 trong 3</b><p>Neo tỷ giá + vốn tự do → mất tự chủ lãi suất (Hồng Kông).</p><p>Thả nổi → giữ được vốn tự do và tự chủ tiền tệ.</p><p>Hạn chế vốn → vừa neo vừa tự chủ lãi suất.</p></div></div>`),

    S('Mất giá có cải thiện cán cân thương mại?', `<div class="sd-cols2"><div>${jCurve}</div>
      <div><div class="sd-f sm">Marshall-Lerner: ε<sub>X</sub> + ε<sub>M</sub> &gt; 1</div>
      <div class="sd-rule up"><span>0,6 + 0,5 = 1,1</span><b>cải thiện</b></div><div class="sd-rule down"><span>0,3 + 0,4 = 0,7</span><b>xấu đi</b></div></div></div>
      <p class="sd-note">J-curve: ngắn hạn độ co giãn thấp (hợp đồng cũ, thói quen) nên cán cân xấu đi trước.</p>`),

    S('Thương mại và dòng vốn là hai mặt', `<div class="sd-f">X - M = (S - I) + (T - G)</div>
      <div class="sd-steps"><span>S - I = -2% GDP, T - G = -3% GDP</span><span>X - M = <b>-5% GDP</b></span><span>→ cần <b>vốn ròng chảy vào 5% GDP</b> (thặng dư tài khoản tài chính)</span></div>
      <p class="sd-note">Vốn vào mạnh: nội tệ lên giá, giá tài sản tăng. Vốn đảo chiều: nội tệ mất giá, nợ ngoại tệ phình to.</p>`),

    S('Bốn mục tiêu của hạn chế vốn', `<div class="sd-grid4">
      <div class="sd-card"><b>Giảm biến động giá tài sản</b><p>Chặn vốn nóng vào ra ồ ạt</p></div>
      <div class="sd-card"><b>Giữ tỷ giá cố định</b><p>Tránh bị tấn công tỷ giá neo</p></div>
      <div class="sd-card"><b>Giữ lãi suất thấp</b><p>Tự chủ lãi suất dù neo tỷ giá</p></div>
      <div class="sd-card"><b>Bảo vệ ngành chiến lược</b><p>Ví dụ "room ngoại" ở ngân hàng</p></div></div>
      <p class="sd-note">Cái giá: phúc lợi giảm, vốn không chảy tới nơi hiệu quả nhất. Ngắn hạn có thể giúp tránh cú sốc.</p>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>P/B tăng → B lên giá</span><span>Direct quote: nội tệ là P</span>
      <span>% của B = S₁/S₀ - 1; của P = S₀/S₁ - 1</span><span>Thực = S × CPI<sub>B</sub> / CPI<sub>P</sub></span>
      <span>Hedge fund = leveraged account</span><span>Currency board: dự trữ 100%</span>
      <span>Marshall-Lerner: ε<sub>X</sub> + ε<sub>M</sub> &gt; 1</span><span>X - M = (S - I) + (T - G)</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 10 câu, mục tiêu ≥ 7 câu đúng.</p>`),
  ];

  addDeck('EC-07', `Slide Capital Flows and FX - bản thiết kế riêng (${slides.length} slide)`, slides);
}());
