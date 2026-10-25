// Bộ slide tự thiết kế cho EQ-12 CAPM, Market Model, and Other Factor-Based Equity Models.
(function () {
  const L = window.LESSONS && window.LESSONS['EQ-12'];
  if (!L) return;
  const { frac, slide, addDeck } = window.CFAH;
  const K = 'EQ-12 · CAPM, Market Model & Factor Models';
  const S = (title, body, opt = {}) => slide(title, body, Object.assign({ kicker: K }, opt));
  const fmt = (x, d = 2) => x.toFixed(d).replace('.', ',');

  // Dữ liệu ví dụ 3.1 và hồi quy OLS tính ngay trong file.
  const mk = [2.0, -1.5, 3.0, 0.5, -2.5, 1.5, 4.0, -1.0], st = [4.6, -1.5, 2.4, 2.4, -4.4, 0.0, 5.6, -0.3];
  const mean = a => a.reduce((x, y) => x + y, 0) / a.length;
  const mx = mean(mk), my = mean(st);
  const sxy = mk.reduce((acc, x, i) => acc + (x - mx) * (st[i] - my), 0), sxx = mk.reduce((acc, x) => acc + (x - mx) ** 2, 0), syy = st.reduce((acc, y) => acc + (y - my) ** 2, 0);
  const beta = sxy / sxx, alpha = my - beta * mx, r2 = (sxy * sxy) / (sxx * syy);

  function scatter() {
    const W = 600, H = 300, l = 60, r = 580, t = 20, b = 250;
    const X = v => l + ((v + 3) / 8) * (r - l), Y = v => b - ((v + 5) / 11) * (b - t);
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv big" role="img" aria-label="Hồi quy mô hình thị trường">`;
    [-4, 0, 4].forEach(v => { s += `<line x1="${l}" y1="${Y(v)}" x2="${r}" y2="${Y(v)}" class="sv-grid"/><text x="${l - 8}" y="${Y(v) + 6}" class="sv-muted" text-anchor="end">${v}%</text>`; });
    [-2, 0, 2, 4].forEach(v => { s += `<text x="${X(v)}" y="${b + 26}" class="sv-muted">${v}%</text>`; });
    s += `<line x1="${X(0)}" y1="${t}" x2="${X(0)}" y2="${b}" class="sv-grid"/><line x1="${l}" y1="${b}" x2="${r}" y2="${b}" class="sv-axis"/><line x1="${l}" y1="${t}" x2="${l}" y2="${b}" class="sv-axis"/>`;
    s += `<line x1="${X(-3)}" y1="${Y(alpha - 3 * beta)}" x2="${X(5)}" y2="${Y(alpha + 5 * beta)}" class="sv-pv"/>`;
    mk.forEach((x, i) => { s += `<circle cx="${X(x)}" cy="${Y(st[i])}" r="7" class="sv-dot"/>`; });
    s += `<text x="${X(4.6)}" y="${Y(alpha + 4.6 * beta) + 34}" class="sv-txt sv-t-pv" text-anchor="end">β = ${fmt(beta, 4)}</text>`;
    s += `<text x="${(l + r) / 2}" y="${H - 2}" class="sv-muted">Lợi suất thị trường (tháng)</text>`;
    return `${s}</svg>`;
  }

  // Một yếu tố: đường qua A và B, C nằm dưới đường.
  function aptLine() {
    const W = 600, H = 300, l = 60, r = 580, t = 20, b = 250;
    const X = v => l + (v / 2.5) * (r - l), Y = v => b - ((v - 0.04) / 0.14) * (b - t);
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv big" role="img" aria-label="Chênh lệch giá theo APT">`;
    [0.06, 0.10, 0.14].forEach(v => { s += `<line x1="${l}" y1="${Y(v)}" x2="${r}" y2="${Y(v)}" class="sv-grid"/><text x="${l - 8}" y="${Y(v) + 6}" class="sv-muted" text-anchor="end">${Math.round(v * 100)}%</text>`; });
    [0, 1, 2].forEach(v => { s += `<text x="${X(v)}" y="${b + 26}" class="sv-muted">β = ${v}</text>`; });
    s += `<line x1="${l}" y1="${b}" x2="${r}" y2="${b}" class="sv-axis"/><line x1="${l}" y1="${t}" x2="${l}" y2="${b}" class="sv-axis"/>`;
    s += `<line x1="${X(0)}" y1="${Y(0.06)}" x2="${X(2.4)}" y2="${Y(0.06 + 0.04 * 2.4)}" class="sv-pv"/>`;
    [[1, 0.10, 'A'], [2, 0.14, 'B']].forEach(([x, e, n]) => { s += `<circle cx="${X(x)}" cy="${Y(e)}" r="7" class="sv-dot"/><text x="${X(x) - 12}" y="${Y(e) - 12}" class="sv-txt" text-anchor="end">${n}</text>`; });
    s += `<circle cx="${X(1.5)}" cy="${Y(0.12)}" r="7" class="sv-node up"/><text x="${X(1.5) - 14}" y="${Y(0.12) - 30}" class="sv-txt sv-t-up" text-anchor="end">50A + 50B: 12%</text>`;
    s += `<circle cx="${X(1.5)}" cy="${Y(0.11)}" r="8" class="sv-node down"/><text x="${X(1.5) + 14}" y="${Y(0.11) + 24}" class="sv-txt sv-t-down" text-anchor="start">C: 11% → đắt</text>`;
    s += `<text x="${X(2.45)}" y="${Y(0.08)}" class="sv-txt sv-t-pv" text-anchor="end">đường: 6% + 4% × β</text>`;
    return `${s}</svg>`;
  }

  const ffBars = `<div class="sd-bars">${[['R<sub>f</sub>', 3], ['1,1 × MKT 5%', 5.5], ['0,4 × SMB 2%', 0.8], ['-0,3 × HML 3%', -0.9]].map(([lab, v]) => `<div class="sd-bar"><span class="sd-bar-l">${lab}</span><span class="sd-bar-t"><i style="width:${(Math.abs(v) / 5.5) * 100}%"></i></span><b>${v > 0 ? '+' : ''}${fmt(v, 1)}%</b></div>`).join('')}</div>`;

  const slides = [
    slide('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Equity Investments · EQ-12</div>
      <h2>CAPM, Market Model, and<br>Factor-Based Equity Models</h2>
      <p>Lấy chi phí vốn cổ phần ở đâu ra?</p>
      <div class="sd-chips"><span>LOS 1 · CAPM và mô hình thị trường</span><span>LOS 2 · APT và mô hình đa yếu tố</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Ba công cụ', `<div class="sd-cols3">
      <div class="sd-card acc"><div class="sd-n">1</div><b>CAPM</b><p>Một yếu tố: thị trường.</p><small>Lý thuyết ở PC-02</small></div>
      <div class="sd-card"><div class="sd-n">2</div><b>Mô hình thị trường</b><p>Hồi quy ra beta.</p><small>Hồi quy ở QM-10</small></div>
      <div class="sd-card"><div class="sd-n">3</div><b>APT, đa yếu tố</b><p>Nhiều rủi ro hệ thống.</p><small>Phần mới</small></div></div>
      <p class="sd-note">EQ-11: 1 điểm % chi phí vốn có thể đổi giá trị 14%.</p>`),

    S('CAPM: ba đầu vào, ba lựa chọn', `<div class="sd-f">r<sub>e</sub> = R<sub>f</sub> + β × [E(R<sub>M</sub>) - R<sub>f</sub>]</div>
      <div class="sd-cols3">
      <div class="sd-card"><b>R<sub>f</sub></b><p>Trái phiếu chính phủ, cùng đồng tiền, thường dài hạn.</p></div>
      <div class="sd-card acc"><b>ERP</b><p>Lịch sử, hướng tới tương lai, khảo sát.</p></div>
      <div class="sd-card"><b>β</b><p>Hồi quy, điều chỉnh, hoặc pure-play.</p></div></div>
      <p class="sd-note">4% + 1,2 × 5,5% = <b>10,6%</b>. Bẫy: nhân β với E(R<sub>M</sub>).</p>`),

    S('ERP: lịch sử hay tương lai?', `<div class="sd-cols2"><div>
      <div class="sd-rule">Lịch sử <b>phụ thuộc giai đoạn</b></div><div class="sd-rule"><span>Tương lai: D/P + g - R<sub>f</sub></span> <b>nhạy với g</b></div><div class="sd-rule">Khảo sát <b>chủ quan</b></div></div>
      <div><p class="sd-cap">D/P 2,0% · g 5,5% · R<sub>f</sub> 4%</p><div class="sd-f sm">ERP = 7,5% - 4% = <b>3,5%</b></div>
      <div class="sd-tbl"><div><span>ERP 5,5%</span><span>r<sub>e</sub> = 10,6%</span></div><div><span>ERP 3,5%</span><span>r<sub>e</sub> = 8,2%</span></div></div></div></div>`),

    S('CAPM và mô hình thị trường', `<div class="sd-f sm">R<sub>i</sub> = α<sub>i</sub> + β<sub>i</sub>R<sub>M</sub> + ε<sub>i</sub></div>
      <div class="sd-tbl grid"><div class="head"><span></span><span>CAPM</span><span>Mô hình thị trường</span></div>
      <div><span>Bản chất</span><span>Cân bằng, lợi suất kỳ vọng</span><span>Thống kê, lợi suất thực tế</span></div>
      <div><span>Hệ số chặn</span><span>Không có</span><span>α ước lượng</span></div>
      <div><span>Cho ra</span><span>Lợi suất yêu cầu</span><span>Beta</span></div></div>
      <p class="sd-note">CAPM đúng ⇒ α = R<sub>f</sub>(1 - β). Alpha quá khứ <b>không</b> cộng vào r<sub>e</sub>.</p>`),

    S('Ước lượng beta từ dữ liệu', `<div class="sd-cols2 wide-left"><div>${scatter()}</div>
      <div><div class="sd-keys"><span>[2ND] [7]</span><span>X = thị trường</span><span>Y = cổ phiếu</span><span>[2ND] [8] LIN</span></div>
      <p>a = <b>${fmt(alpha, 4)}%</b> · b = <b>${fmt(beta, 4)}</b></p><p>R<sup>2</sup> = <b>${fmt(r2, 3)}</b></p>
      <p class="sd-note">α theo CAPM: 0,3% × (1 - ${fmt(beta, 4)}) = ${fmt(0.3 * (1 - beta), 4)}%</p></div></div>`),

    S('Các lựa chọn khi ước lượng beta', `<div class="sd-cols3">
      <div class="sd-card"><b>Chỉ số</b><p>Rộng, hợp với nhà đầu tư cận biên.</p><small>Đổi chỉ số → đổi beta</small></div>
      <div class="sd-card"><b>Giai đoạn</b><p>Thường 2 đến 5 năm.</p><small>Dài: công ty có thể đã khác</small></div>
      <div class="sd-card acc"><b>Tần suất</b><p>Tuần hoặc tháng.</p><small>Giao dịch thưa: beta ngày bị kéo về 0</small></div></div>`),

    S('Beta điều chỉnh', `<div class="sd-f">β<sub>adj</sub> = ${frac('2', '3')}β + ${frac('1', '3')}</div>
      <div class="sd-cols2"><div><div class="sd-rule down">${fmt(beta, 4)} <b>→ ${fmt((2 / 3) * beta + 1 / 3, 4)}</b></div><div class="sd-rule up">0,70 <b>→ 0,80</b></div></div>
      <div><p>r<sub>e</sub>: 4% + ${fmt(beta, 4)} × 5,5% = <b>11,07%</b></p><p>Điều chỉnh: <b>10,55%</b></p></div></div>
      <p class="sd-note">Beta có xu hướng quay về 1 theo thời gian.</p>`),

    S('Không có giá: pure-play', `<div class="sd-steps">
      <span>① Beta vốn chủ của công ty so sánh: 1,3 (D/E 0,5)</span>
      <span>② Bỏ đòn bẩy: 1,3 / (1 + 0,75 × 0,5) = <b>0,9455</b></span>
      <span>③ Gắn đòn bẩy mục tiêu D/E 0,8: 0,9455 × (1 + 0,75 × 0,8) = <b>1,51</b></span></div>
      <p class="sd-note">Chi tiết ở phần chi phí vốn, Corporate Issuers.</p>`),

    S('APT: nhiều yếu tố rủi ro', `<div class="sd-f">E(R<sub>i</sub>) = R<sub>f</sub> + β<sub>i,1</sub>λ<sub>1</sub> + ... + β<sub>i,K</sub>λ<sub>K</sub></div>
      <div class="sd-cols2"><div><div class="sd-check"><span>Mô hình yếu tố</span><span>Đa dạng hóa hết ε</span><span>Không chênh lệch giá</span><span>Không cần danh mục thị trường</span></div></div>
      <div><p class="sd-cap">R<sub>f</sub> 3% · λ 4%, 2% · β 1,2 và -0,5</p><div class="sd-f sm">3% + 4,8% - 1,0% = <b>6,8%</b></div><p class="sd-note">Điểm yếu: không nói yếu tố nào.</p></div></div>`),

    S('Phát hiện chênh lệch giá', `<div class="sd-cols2 wide-left"><div>${aptLine()}</div>
      <div><div class="sd-rule up">Mua 50% A + 50% B <b>β 1,5 · 12%</b></div><div class="sd-rule down">Bán khống C <b>β 1,5 · 11%</b></div>
      <p>Vốn ròng 0, β ròng 0, lời <b>1%</b>.</p><p class="sd-note">Dưới đường: đắt, bán. Trên đường: rẻ, mua.</p></div></div>`),

    S('Ba loại mô hình đa yếu tố', `<div class="sd-cols3">
      <div class="sd-card"><b>Vĩ mô</b><p>Phần <b>bất ngờ</b> của GDP, lạm phát, lãi suất.</p><small>9% + 1,5 × 1% - 2 × 0,5% = 9,5%</small></div>
      <div class="sd-card acc"><b>Cơ bản</b><p>Quy mô, giá trị, quán tính, sinh lời, đầu tư.</p><small>Fama-French, Carhart</small></div>
      <div class="sd-card"><b>Thống kê</b><p>Tìm từ dữ liệu lợi suất.</p><small>Khó đặt tên kinh tế</small></div></div>`),

    S('Fama-French 3 yếu tố', `<div class="sd-cols2"><div>${ffBars}</div>
      <div><div class="sd-f sm">E(R) = <b>8,4%</b></div><p>CAPM với β 1,1: 8,5%</p>
      <div class="sd-rule"><span>β<sub>SMB</sub> &gt; 0</span> <b>giống cổ phiếu nhỏ</b></div><div class="sd-rule"><span>β<sub>HML</sub> &lt; 0</span> <b>giống cổ phiếu tăng trưởng</b></div>
      <p class="sd-note">Carhart thêm quán tính; FF5 thêm RMW, CMA.</p></div></div>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>ERP = E(R<sub>M</sub>) - R<sub>f</sub></span><span>R<sub>f</sub>: chính phủ, cùng đồng tiền</span>
      <span>Mô hình thị trường cho ra β</span><span>CAPM ⇒ α = R<sub>f</sub>(1 - β)</span>
      <span>β<sub>adj</sub> = 2/3 β + 1/3</span><span>APT: ít giả định, không nói yếu tố nào</span>
      <span>Vĩ mô dùng phần bất ngờ</span><span>Đa yếu tố: lợi suất, rủi ro, đánh giá, danh mục</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 10 câu, mục tiêu ≥ 7 câu đúng.</p>`),
  ];

  addDeck('EQ-12', `Slide CAPM & Factor Models - bản thiết kế riêng (${slides.length} slide)`, slides);
}());
