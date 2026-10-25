// Bộ slide tự thiết kế cho FSA-12 Introduction to Financial Statement Modeling.
(function () {
  const L = window.LESSONS && window.LESSONS['FSA-12'];
  if (!L) return;
  const { frac, slide, addDeck } = window.CFAH;
  const K = 'FSA-12 · Financial Modeling';
  const S = (title, body, opt = {}) => slide(title, body, Object.assign({ kicker: K }, opt));
  const fmt = (x, d = 1) => x.toFixed(d).replace('.', ',');
  const th = x => String(Math.round(x)).replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  // Mô hình một năm (ví dụ 2.1).
  const rev = 2000 * 1.1, cogs = 0.6 * rev, sga = 200 + 0.1 * rev, ebit = rev - cogs - sga, ebt = ebit - 60, ni = ebt * 0.75, div = ni * 0.4;
  const ar = rev / 8, inv = cogs / 5, ap = cogs / 10, ppe = 1500 + 250 - 150, eq = 970 + ni - div;
  const cash = ap + 1000 + eq - (ar + inv + ppe);
  const cfo = ni + 150 - (ar - 250) - (inv - 240) + (ap - 120);

  // Cầu nối tiền: 100 → 143.
  const cashBridge = (() => {
    const steps = [['Tiền đầu kỳ', 100, 'b'], ['CFO', cfo], ['Capex', -250], ['Cổ tức', -div], ['Tiền cuối kỳ', cash, 'b']];
    const W = 600, H = 260, b = 210, top = 20, max = 520;
    const Y = v => b - (v / max) * (b - top);
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv" role="img" aria-label="Thay đổi tiền từ 100 lên 143">`;
    s += `<line x1="20" y1="${b}" x2="${W - 20}" y2="${b}" class="sv-axis"/>`;
    let cur = 0;
    steps.forEach(([lab, v, k], i) => {
      const x = 40 + i * 112;
      let lo, hi, cls;
      if (k === 'b') { lo = 0; hi = v; cur = v; cls = 'sv-node'; } else { lo = Math.min(cur, cur + v); hi = Math.max(cur, cur + v); cur += v; cls = v > 0 ? 'sv-node up' : 'sv-node down'; }
      s += `<rect x="${x}" y="${Y(hi)}" width="72" height="${Y(lo) - Y(hi)}" class="${cls}"/>`;
      s += `<text x="${x + 36}" y="${Y(hi) - 8}" class="sv-txt">${k === 'b' ? th(v) : (v > 0 ? '+' : '-') + th(Math.abs(v))}</text>`;
      s += `<text x="${x + 36}" y="${b + 24}" class="sv-muted">${lab}</text>`;
    });
    return `${s}</svg>`;
  })();

  // Năm lực lượng của Porter.
  const porter = `<svg viewBox="0 0 600 270" class="sv" role="img" aria-label="Năm lực lượng cạnh tranh của Porter">
    <rect x="200" y="105" width="200" height="60" rx="12" class="sv-node up"/><text x="300" y="132" class="sv-txt">Cạnh tranh</text><text x="300" y="154" class="sv-txt">trong ngành</text>
    <rect x="200" y="10" width="200" height="50" rx="12" class="sv-panel"/><text x="300" y="42" class="sv-txt">Đối thủ mới</text>
    <rect x="200" y="210" width="200" height="50" rx="12" class="sv-panel"/><text x="300" y="242" class="sv-txt">Sản phẩm thay thế</text>
    <rect x="10" y="110" width="150" height="50" rx="12" class="sv-panel"/><text x="85" y="142" class="sv-txt">Nhà cung cấp</text>
    <rect x="440" y="110" width="150" height="50" rx="12" class="sv-panel"/><text x="515" y="142" class="sv-txt">Khách hàng</text>
    <line x1="300" y1="62" x2="300" y2="103" class="sv-down"/><line x1="300" y1="208" x2="300" y2="167" class="sv-down"/>
    <line x1="162" y1="135" x2="198" y2="135" class="sv-down"/><line x1="438" y1="135" x2="402" y2="135" class="sv-down"/>
    <text x="85" y="185" class="sv-muted">→ chi phí</text><text x="515" y="185" class="sv-muted">→ giá bán</text></svg>`;

  // Lợi nhuận gộp theo mức chuyển chi phí sang giá (ví dụ 5.1).
  const passThrough = (() => {
    const c1 = 1.2 + 0.6 * 0.2;
    const rows = [['Trước khi chi phí tăng', 1000, 2.0, 1.2], ['Không tăng giá', 1000, 2.0, c1], ['Tăng giá 5%', 1000 * (1 - 0.8 * 0.05), 2.1, c1], ['Tăng giá 6%', 1000 * (1 - 0.8 * 0.06), 2.12, c1]];
    return `<div class="sd-bars">${rows.map(([l, u, p, c]) => { const g = u * (p - c); return `<div class="sd-bar"><span class="sd-bar-l">${l} (biên ${fmt((g / (u * p)) * 100)}%)</span><span class="sd-bar-t"><i style="width:${(g / 800) * 100}%"></i></span><b>${fmt(g)}</b></div>`; }).join('')}</div>`;
  })();

  // Giá trị cuối kỳ theo g.
  const tvBars = `<div class="sd-bars">${[0.02, 0.03, 0.04].map(g => { const v = (100 * (1 + g)) / (0.09 - g); return `<div class="sd-bar"><span class="sd-bar-l">g = ${fmt(g * 100, 0)}%</span><span class="sd-bar-t"><i style="width:${(v / 2200) * 100}%"></i></span><b>${th(v)}</b></div>`; }).join('')}</div>`;

  const slides = [
    S('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Financial Statement Analysis · FSA-12</div>
      <h2>Introduction to Financial Statement Modeling</h2>
      <p>Pro forma · Thiên lệch · Porter · Lạm phát · Giai đoạn dự báo</p>
      <div class="sd-chips"><span>LOS 1 · Mô hình theo doanh thu</span><span>LOS 2 · Thiên lệch hành vi</span><span>LOS 3 · Năm lực lượng</span><span>LOS 4 · Lạm phát</span><span>LOS 5 · Giai đoạn dự báo</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Mô hình dựa trên doanh thu', `<div class="sd-steps"><span>① <b>Doanh thu</b>: top-down, bottom-up hoặc kết hợp</span><span>② <b>Chi phí</b>: % doanh thu, tách cố định và biến đổi</span><span>③ <b>Bảng cân đối</b>: vòng quay vốn lưu động, capex, khấu hao, nợ</span><span>④ <b>Dòng tiền</b>: kiểm tra tiền khớp với bảng cân đối</span></div>
      <p class="sd-note">Mọi thứ "treo" vào doanh thu, nên sai doanh thu là sai cả mô hình.</p>`),

    S('Ba cách dự báo doanh thu', `<div class="sd-cols3">
      <div class="sd-card"><b>Top-down</b><p>Vĩ mô → ngành → thị phần</p><small>GDP danh nghĩa ± biên độ</small></div>
      <div class="sd-card"><b>Bottom-up</b><p>Sản phẩm, khu vực, cửa hàng</p><small>Sản lượng × giá, năng lực sản xuất</small></div>
      <div class="sd-card acc"><b>Hybrid</b><p>Dùng cả hai và đối chiếu</p><small>Phổ biến nhất trong thực tế</small></div></div>`),

    S('Báo cáo KQKD dự phóng', `<div class="sd-tbl grid">
      <div class="head"><span>Năm 1</span><span>Giả định</span><span>Kết quả</span></div>
      <div><span>Doanh thu</span><span>+10%</span><span>${th(rev)}</span></div>
      <div><span>Giá vốn</span><span>60% doanh thu</span><span>${th(cogs)}</span></div>
      <div><span>SG&amp;A</span><span>200 + 10% doanh thu</span><span>${th(sga)}</span></div>
      <div><span>EBIT</span><span></span><span>${th(ebit)}</span></div>
      <div><span>Lãi vay</span><span>6% × 1.000</span><span>60</span></div>
      <div><span>Lợi nhuận ròng</span><span>Thuế 25%</span><span><b>${th(ni)}</b></span></div></div>
      <p class="sd-note">Biên EBIT 20,0% → <b>20,9%</b> nhờ SG&amp;A cố định (đòn bẩy hoạt động).</p>`),

    S('Bảng cân đối dự phóng', `<div class="sd-tbl grid">
      <div class="head"><span>Khoản mục</span><span>Giả định</span><span>Cuối năm 1</span></div>
      <div><span>Phải thu</span><span>Doanh thu / 8</span><span>${th(ar)}</span></div>
      <div><span>Hàng tồn kho</span><span>Giá vốn / 5</span><span>${th(inv)}</span></div>
      <div><span>TSCĐ ròng</span><span>1.500 + 250 - 150</span><span>${th(ppe)}</span></div>
      <div><span>Phải trả</span><span>Giá vốn / 10</span><span>${th(ap)}</span></div>
      <div><span>Vốn chủ</span><span>970 + 300 - 120</span><span>${th(eq)}</span></div>
      <div><span><b>Tiền (plug)</b></span><span>Cân đối</span><span><b>${th(cash)}</b></span></div></div>`),

    S('Kiểm tra bằng dòng tiền', `<div class="sd-cols2 wide-left"><div>${cashBridge}</div><div>
      <p class="sd-note">CFO = 300 + 150 - 25 - 24 + 12 = <b>413</b></p>
      <p class="sd-note">100 + 413 - 250 - 120 = <b>143</b>, khớp với tiền trên bảng cân đối.</p>
      <p class="sd-note">Tiền âm → chuyển plug sang <b>nợ vay</b>.</p></div></div>`),

    S('Năm thiên lệch hành vi', `<div class="sd-tbl grid">
      <div class="head"><span>Thiên lệch</span><span>Biểu hiện</span><span>Khắc phục</span></div>
      <div><span>Quá tự tin</span><span>Khoảng dự báo quá hẹp</span><span>Chấm điểm dự báo cũ</span></div>
      <div><span>Ảo tưởng kiểm soát</span><span>Thêm chi tiết là chính xác hơn</span><span>Mô hình đơn giản</span></div>
      <div><span>Bảo thủ</span><span>Cập nhật quá chậm</span><span>Cập nhật kiểu Bayes</span></div>
      <div><span>Tính đại diện</span><span>Theo khuôn mẫu</span><span>Dùng tỷ lệ cơ sở</span></div>
      <div><span>Xác nhận</span><span>Chỉ tìm thông tin ủng hộ</span><span>Tìm phản biện</span></div></div>`),

    S('Dễ nhầm: quá tự tin hay ảo tưởng kiểm soát?', `<div class="sd-cols2">
      <div class="sd-card"><b>Quá tự tin</b><p>Tin vào <b>kỹ năng</b> dự báo của mình</p><small>"Doanh thu chắc chắn trong khoảng 98-102"</small></div>
      <div class="sd-card acc"><b>Ảo tưởng kiểm soát</b><p>Tin rằng <b>thêm thông tin</b> giúp kiểm soát kết quả</p><small>"Mô hình 300 dòng của tôi chính xác hơn"</small></div></div>
      <div class="sd-rule down">Mất khách hàng lớn mà chỉ hạ dự báo 12% → 11% <b>bảo thủ</b></div>`),

    S('Năm lực lượng của Porter', `<div class="sd-cols2 wide-left"><div>${porter}</div><div>
      <p class="sd-note">Lực lượng càng <b>mạnh</b>, lợi nhuận ngành càng bị ép.</p>
      <p class="sd-note">Khách hàng, thay thế, đối thủ: ép <b>giá bán</b>. Nhà cung cấp: đẩy <b>chi phí</b>.</p>
      <p class="sd-note">Đối thủ mới: biên lợi nhuận cao không kéo dài.</p></div></div>`),

    S('Lực lượng mạnh thì sao?', `<div class="sd-tbl grid">
      <div class="head"><span>Lực lượng mạnh</span><span>Giá bán</span><span>Chi phí</span></div>
      <div><span>Sản phẩm thay thế</span><span>Khó tăng</span><span></span></div>
      <div><span>Cạnh tranh trong ngành</span><span>Chiến tranh giá</span><span>Tăng (quảng cáo)</span></div>
      <div><span>Nhà cung cấp</span><span></span><span>Đầu vào tăng</span></div>
      <div><span>Khách hàng</span><span>Bị ép giảm</span><span>DSO cao</span></div>
      <div><span>Đối thủ mới</span><span>Biên về trung bình</span><span></span></div></div>`),

    S('Lạm phát: giá và sản lượng', `<div class="sd-f">g<sub>danh nghĩa</sub> = (1 + g<sub>sản lượng</sub>)(1 + g<sub>giá</sub>) - 1</div>
      <div class="sd-steps"><span>Ngành: sản lượng 3%, giá 4% → <b>7,12%</b></span><span>Công ty tăng giá 5%, sản lượng giảm 4% → doanh thu <b>+0,8%</b></span><span>Giảm phát: giá bán giảm, chi phí cố định khó giảm → biên bị ép</span></div>`),

    S('Chuyển chi phí sang giá bán', `${passThrough}
      <p class="sd-note">Nguyên liệu tăng 20% → giá vốn 1,20 → 1,32 mỗi sản phẩm. Co giãn -0,8. Kể cả chuyển toàn bộ, lợi nhuận gộp vẫn &lt; 800.</p>`),

    S('Giai đoạn dự báo chi tiết', `<div class="sd-cols3">
      <div class="sd-card"><b>Chiến lược đầu tư</b><p>Thời gian nắm giữ dự kiến</p></div>
      <div class="sd-card acc"><b>Tính chu kỳ</b><p>Bao trùm ít nhất một chu kỳ</p></div>
      <div class="sd-card"><b>Sự kiện riêng</b><p>Thâu tóm, tái cơ cấu: đến khi ổn định</p></div></div>
      <p class="sd-note">Sau đó: lợi nhuận <b>chuẩn hóa</b>, tăng trưởng và ROIC <b>hồi quy về trung bình</b>.</p>`),

    S('Giá trị cuối kỳ rất nhạy với g', `<div class="sd-f sm">TV<sub>5</sub> = ${frac('100 × (1 + g)', '9% - g')}</div>
      ${tvBars}
      <p class="sd-note">g tăng 1 điểm % → TV tăng từ 1.717 lên 2.080. Không dùng biên lợi nhuận đỉnh chu kỳ cho năm cuối.</p>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>Doanh thu trước, mọi thứ theo sau</span><span>SG&amp;A cố định → đòn bẩy hoạt động</span>
      <span>Tiền hoặc nợ là khoản cân đối</span><span>Quá tự tin ≠ ảo tưởng kiểm soát</span>
      <span>Bảo thủ: cập nhật chậm</span><span>Lực lượng mạnh → biên thấp</span>
      <span>Doanh thu = (1 + sản lượng)(1 + giá) - 1</span><span>Chuẩn hóa trước khi tính TV</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 10 câu.</p>`),
  ];

  addDeck('FSA-12', `Slide Financial Modeling - bản thiết kế riêng (${slides.length} slide)`, slides);
}());
