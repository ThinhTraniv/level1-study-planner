// Bộ slide tự thiết kế cho EC-08 Exchange Rate Calculations.
(function () {
  const L = window.LESSONS && window.LESSONS['EC-08'];
  if (!L) return;
  const { frac, slide, addDeck } = window.CFAH;
  const K = 'EC-08 · Exchange Rate Calculations';
  const S = (title, body, opt = {}) => slide(title, body, Object.assign({ kicker: K }, opt));

  // Hai con đường không rủi ro trong CIP.
  const paths = `<svg viewBox="0 0 600 250" class="sv big" role="img" aria-label="Hai cách đầu tư không rủi ro cho cùng kết quả">
    <text x="20" y="25" class="sv-muted" text-anchor="start">Cách 1</text>
    <line x1="100" y1="60" x2="540" y2="60" class="sv-curve"/><text x="320" y="46" class="sv-txt">gửi EUR: 1 × (1 + i<tspan font-size="14">EUR</tspan>)</text>
    <text x="20" y="140" class="sv-muted" text-anchor="start">Cách 2</text>
    <line x1="100" y1="180" x2="100" y2="215" class="sv-pv"/><line x1="100" y1="215" x2="540" y2="215" class="sv-up"/><line x1="540" y1="215" x2="540" y2="180" class="sv-pv"/>
    <text x="100" y="170" class="sv-txt sv-t-pv">đổi spot × S</text><text x="320" y="205" class="sv-txt sv-t-up">gửi USD: × (1 + i<tspan font-size="14">USD</tspan>)</text><text x="540" y="170" class="sv-txt sv-t-pv">÷ F (forward)</text>
    <text x="100" y="245" class="sv-muted">hôm nay</text><text x="540" y="245" class="sv-muted">đáo hạn</text>
    <text x="320" y="122" class="sv-txt">=  cùng số EUR  =</text></svg>`;

  // Premium/discount theo chênh lệch lãi suất USD - EUR (spot 1,0850, 1 năm).
  const diffBars = (() => {
    const rows = [[6.5, 2.5], [4.5, 2.5], [2.5, 2.5], [1.5, 2.5]];
    return `<div class="sd-bars">${rows.map(([p, b]) => {
      const pr = ((1 + p / 100) / (1 + b / 100) - 1) * 100;
      const w = Math.min(100, Math.abs(pr) * 25);
      return `<div class="sd-bar"><span class="sd-bar-l">${String(p).replace('.', ',')}% vs ${String(b).replace('.', ',')}%</span><span class="sd-bar-t"><i style="width:${w}%"></i></span><b>${pr >= 0 ? '+' : ''}${pr.toFixed(2).replace('.', ',')}%</b></div>`;
    }).join('')}</div>`;
  })();

  const slides = [
    S('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Economics · EC-08</div>
      <h2>Exchange Rate<br>Calculations</h2>
      <p>Tỷ giá chéo, điểm kỳ hạn và ngang giá lãi suất có phòng hộ</p>
      <div class="sd-chips"><span>LOS 1 · Cross rates</span><span>LOS 2 · Forward, CIP, premium và discount</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Một quy ước, một công thức', `<div class="sd-big">P/B = số P cho 1 B</div>
      <div class="sd-f">F<sub>P/B</sub> = S<sub>P/B</sub> × ${frac('1 + i<sub>P</sub> × ngày/360', '1 + i<sub>B</sub> × ngày/360')}</div>
      <p class="sd-note">Lãi suất P ở tử, lãi suất B ở mẫu: <b>khớp vị trí</b> P trên B. Luôn ghi rõ P và B trước khi bấm máy.</p>`),

    S('Tỷ giá chéo: triệt tiêu đồng tiền chung', `<div class="sd-big">${frac('MXN', '<s>USD</s>')} × ${frac('<s>USD</s>', 'AUD')} = ${frac('MXN', 'AUD')}</div>
      <div class="sd-f sm">18,40 × 0,6550 = <b>12,0520</b> MXN/AUD</div>
      <p class="sd-note">Bẫy: 18,40 / 0,6550 = 28,09, đơn vị không triệt tiêu được.</p>`),

    S('Ba dạng tỷ giá chéo', `<div class="sd-tbl grid"><div class="head"><span>Cho</span><span>Tìm</span><span>Phép tính</span><span>Kết quả</span></div>
      <div><span>MXN/USD 18,40 · USD/AUD 0,6550</span><span>MXN/AUD</span><span>nhân</span><span><b>12,0520</b></span></div>
      <div><span>JPY/USD 150,20 · USD/EUR 1,0850</span><span>JPY/EUR</span><span>nhân</span><span><b>162,97</b></span></div>
      <div><span>USD/EUR 1,0850 · USD/GBP 1,2700</span><span>EUR/GBP</span><span>1,2700 ÷ 1,0850</span><span><b>1,1705</b></span></div></div>
      <p class="sd-note">Đồng chung cùng nằm trên (hoặc cùng dưới) ở cả hai tỷ giá → đảo một tỷ giá, tức là <b>chia</b>.</p>`),

    S('Điểm kỳ hạn và phần trăm', `<div class="sd-tbl grid"><div class="head"><span>Spot</span><span>Yết kỳ hạn</span><span>Cách tính</span><span>Forward</span></div>
      <div><span>1,0850</span><span>+42,5 điểm</span><span>+ 42,5/10.000</span><span><b>1,08925</b></span></div>
      <div><span>1,0850</span><span>-0,35%</span><span>× (1 - 0,0035)</span><span><b>1,0812</b></span></div>
      <div><span>150,20 (JPY)</span><span>-310 điểm</span><span>- 310/100</span><span><b>147,10</b></span></div></div>
      <p class="sd-note">1 điểm = chữ số thập phân <b>cuối cùng</b> của tỷ giá. Điểm dương → đồng cơ sở có forward premium.</p>`),

    S('CIP: hai con đường không rủi ro', `<div class="sd-cols2 wide-left"><div>${paths}</div><div class="sd-card"><b>Không chênh lệch giá</b><p>1 + i<sub>B</sub> = S(1 + i<sub>P</sub>)/F</p><p>→ <b>F = S(1 + i<sub>P</sub>)/(1 + i<sub>B</sub>)</b></p><small>USD là P, EUR là B</small></div></div>`),

    S('Tính F theo CIP: USD/EUR 1,0850', `<div class="sd-tbl grid"><div class="head"><span>Kỳ hạn</span><span>Phép tính</span><span>F</span><span>Điểm</span></div>
      <div><span>180 ngày</span><span>1,0850 × 1,0225 / 1,0125</span><span><b>1,0957</b></span><span>+107,2</span></div>
      <div><span>1 năm</span><span>1,0850 × 1,045 / 1,025</span><span><b>1,1062</b></span><span>+211,7</span></div></div>
      <div class="sd-keys"><span>1.085 <kbd>×</kbd> <kbd>(</kbd> 1 <kbd>+</kbd> 0.045 <kbd>×</kbd> 180 <kbd>÷</kbd> 360 <kbd>)</kbd></span><span><kbd>÷</kbd> <kbd>(</kbd> 1 <kbd>+</kbd> 0.025 <kbd>×</kbd> 180 <kbd>÷</kbd> 360 <kbd>)</kbd></span><span><kbd>=</kbd> <b>1.0957</b></span></div>
      <p class="sd-note">i<sub>USD</sub> 4,5%, i<sub>EUR</sub> 2,5%. Kiểm tra nhanh: premium 1 năm 1,95% ≈ 4,5% - 2,5% = 2%.</p>`),

    S('Khi F thị trường lệch CIP: chênh lệch giá', `<div class="sd-cols2 wide-left"><div class="sd-steps">
      <span>① Vay 1.000.000 EUR ở 2,5% → nợ 1.025.000 EUR</span>
      <span>② Đổi spot → 1.085.000 USD</span>
      <span>③ Gửi 4,5% → 1.133.825 USD</span>
      <span>④ Mua EUR kỳ hạn ở 1,1000 → 1.030.750 EUR</span></div>
      <div><div class="sd-big"><b>+5.750 EUR</b></div><p>không rủi ro, không bỏ vốn</p></div></div>
      <p class="sd-note">F thị trường 1,1000 &lt; F CIP 1,1062: EUR kỳ hạn quá rẻ → <b>mua EUR kỳ hạn, vay EUR hôm nay</b>.</p>`),

    S('Lãi suất cao hơn → forward discount', `${diffBars}
      <p class="sd-note">Nhãn: i<sub>USD</sub> vs i<sub>EUR</sub>. Forward premium của EUR (đồng cơ sở) = F/S - 1, kỳ hạn 1 năm. i<sub>USD</sub> &lt; i<sub>EUR</sub> → EUR có <b>discount</b>. Forward <b>không phải dự báo</b> tỷ giá tương lai.</p>`),

    S('Năm bẫy hay gặp', `<div class="sd-rule down"><span>Đặt ngược lãi suất ở tử và mẫu</span><b>i<sub>P</sub> ở tử</b></div>
      <div class="sd-rule down"><span>Dùng lãi suất năm cho kỳ hạn 90 ngày</span><b>× ngày/360</b></div>
      <div class="sd-rule down"><span>Chia sai thang điểm kỳ hạn</span><b>/10.000, JPY /100</b></div>
      <div class="sd-rule down"><span>Nhân khi phải chia trong tỷ giá chéo</span><b>kiểm tra đơn vị</b></div>
      <div class="sd-rule down"><span>Gán premium cho nhầm đồng tiền</span><b>F/S - 1 là của B</b></div>`),

    S('Tổng kết: 6 điều mang vào phòng thi', `<div class="sd-check">
      <span>Viết rõ P và B trước khi tính</span><span>Cross rate: triệt tiêu đồng chung</span>
      <span>Điểm: chia 10.000 (JPY: 100)</span><span>F = S(1 + i<sub>P</sub>τ)/(1 + i<sub>B</sub>τ)</span>
      <span>Lãi suất cao → forward discount</span><span>F lệch CIP → vay rẻ, cho vay đắt, khóa forward</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 8 câu, mục tiêu ≥ 6 câu đúng.</p>`),
  ];

  addDeck('EC-08', `Slide Exchange Rate Calculations - bản thiết kế riêng (${slides.length} slide)`, slides);
}());
