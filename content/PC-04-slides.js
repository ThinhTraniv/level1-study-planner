// Bộ slide tự thiết kế cho PC-04 Basics of Portfolio Planning and Construction.
(function () {
  const L = window.LESSONS && window.LESSONS['PC-04'];
  if (!L) return;
  const { frac, tl, slide, addDeck } = window.CFAH;
  const K = 'PC-04 · Portfolio Planning';
  const S = (title, body, opt = {}) => slide(title, body, Object.assign({ kicker: K }, opt));
  const fmt = (x, d = 2) => x.toFixed(d).replace('.', ',');

  // Hai phân phối chuẩn và ngưỡng -10%: danh mục X (7%, 12%) và Y (5,5%, 8%).
  function shortfall() {
    const W = 600, H = 300, l = 30, r = 585, t = 20, b = 250, x0 = -35, x1 = 45;
    const X = x => l + ((x - x0) / (x1 - x0)) * (r - l);
    const pdf = (x, m, s) => Math.exp(-0.5 * ((x - m) / s) ** 2) / (s * Math.sqrt(2 * Math.PI));
    const top = pdf(5.5, 5.5, 8);
    const Y = d => b - (d / top) * (b - t - 20);
    const line = (m, s) => { let p = ''; for (let x = x0; x <= x1 + 0.01; x += 0.5) p += `${X(x).toFixed(1)},${Y(pdf(x, m, s)).toFixed(1)} `; return p; };
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv" role="img" aria-label="Hai phân phối lợi suất và ngưỡng lỗ 10%">`;
    s += `<line x1="${l}" y1="${b}" x2="${r}" y2="${b}" class="sv-axis"/>`;
    [-30, -20, -10, 0, 10, 20, 30, 40].forEach(v => { s += `<text x="${X(v)}" y="${b + 22}" class="sv-muted">${v}%</text>`; });
    s += `<polyline points="${line(7, 12)}" class="sv-down" fill="none"/>`;
    s += `<polyline points="${line(5.5, 8)}" class="sv-curve"/>`;
    s += `<line x1="${X(-10)}" y1="${t}" x2="${X(-10)}" y2="${b}" class="sv-dash"/><text x="${X(-10) - 6}" y="${t + 12}" class="sv-txt" text-anchor="end">ngưỡng -10%</text>`;
    s += `<line x1="${X(7 - 1.645 * 12)}" y1="${b - 40}" x2="${X(7 - 1.645 * 12)}" y2="${b}" class="sv-down"/><text x="${X(7 - 1.645 * 12) - 6}" y="${b - 12}" class="sv-txt sv-t-down" text-anchor="end">X: ${fmt(7 - 1.645 * 12)}%</text>`;
    s += `<line x1="${X(5.5 - 1.645 * 8)}" y1="${b - 70}" x2="${X(5.5 - 1.645 * 8)}" y2="${b}" class="sv-up"/><text x="${X(5.5 - 1.645 * 8) - 4}" y="${b - 78}" class="sv-txt sv-t-up" text-anchor="end">Y: ${fmt(5.5 - 1.645 * 8)}%</text>`;
    s += `<text x="${X(30)}" y="${Y(pdf(20, 7, 12)) - 10}" class="sv-txt sv-t-down">X (7%; 12%)</text><text x="${X(5.5)}" y="${t + 8}" class="sv-txt">Y (5,5%; 8%)</text>`;
    s += `<text x="${(l + r) / 2}" y="${H - 4}" class="sv-muted">Vạch đứng màu: mức lợi suất ở ngưỡng 5% phía dưới = E(R) - 1,645σ</text>`;
    return `${s}</svg>`;
  }

  // Ma trận willingness - ability.
  const matrix = `<svg viewBox="0 0 600 320" class="sv big" role="img" aria-label="Ma trận sẵn lòng và khả năng chịu rủi ro">
    <rect x="130" y="20" width="220" height="130" rx="10" class="sv-node up"/><rect x="360" y="20" width="220" height="130" rx="10" class="sv-panel"/>
    <rect x="130" y="160" width="220" height="130" rx="10" class="sv-panel"/><rect x="360" y="160" width="220" height="130" rx="10" class="sv-node down"/>
    <text x="240" y="75" class="sv-txt sv-t-up">Cả hai cao</text><text x="240" y="105" class="sv-muted">rủi ro trên trung bình</text>
    <text x="470" y="75" class="sv-txt">Ability cao, muốn ít</text><text x="470" y="105" class="sv-muted">thận trọng + giáo dục</text>
    <text x="240" y="215" class="sv-txt">Muốn nhiều, ability thấp</text><text x="240" y="245" class="sv-muted">ability thắng</text>
    <text x="470" y="215" class="sv-txt sv-t-down">Cả hai thấp</text><text x="470" y="245" class="sv-muted">rủi ro dưới trung bình</text>
    <text x="240" y="314" class="sv-muted">Willingness cao</text><text x="470" y="314" class="sv-muted">Willingness thấp</text>
    <text x="64" y="90" class="sv-muted">Ability cao</text><text x="64" y="230" class="sv-muted">Ability thấp</text></svg>`;

  // Ma trận tương quan minh họa: tương quan cao trong nhóm, thấp giữa các nhóm.
  function corr() {
    const n = ['CP Mỹ', 'CP Âu', 'TP CP', 'TP DN'];
    const m = [[1, 0.85, 0.1, 0.3], [0.85, 1, 0.05, 0.25], [0.1, 0.05, 1, 0.8], [0.3, 0.25, 0.8, 1]];
    let s = `<svg viewBox="0 0 600 300" class="sv big" role="img" aria-label="Ma trận tương quan minh họa">`;
    n.forEach((a, i) => { s += `<text x="${210 + i * 100}" y="28" class="sv-muted">${a}</text><text x="100" y="${78 + i * 64}" class="sv-muted" text-anchor="end">${a}</text>`; });
    m.forEach((row, i) => row.forEach((v, j) => {
      const same = (i < 2) === (j < 2);
      s += `<rect x="${162 + j * 100}" y="${44 + i * 64}" width="96" height="60" rx="8" class="${same ? 'sv-node up' : 'sv-panel'}"/><text x="${210 + j * 100}" y="${80 + i * 64}" class="sv-txt ${same ? 'sv-t-up' : ''}">${fmt(v)}</text>`;
    }));
    return `${s}</svg>`;
  }

  const bar = (lab, v, max) => `<div class="sd-bar"><span class="sd-bar-l">${lab}</span><span class="sd-bar-t"><i style="width:${(v / max) * 100}%"></i></span><b>${fmt(v)}%</b></div>`;
  const eq = 600 * 1.3, bd = 400 * 1.02, tot = eq + bd;

  const slides = [
    S('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Portfolio Construction · PC-04</div>
      <h2>Basics of Portfolio Planning<br>and Construction</h2>
      <p>Hiểu khách hàng → viết IPS → xây danh mục</p>
      <div class="sd-chips"><span>IPS</span><span>Return · Risk</span><span>Willingness · Ability</span><span>5 ràng buộc</span><span>Asset allocation</span><span>ESG</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('IPS nằm ở đâu trong quy trình?', `<div class="sd-cols3">
      <div class="sd-card acc"><div class="sd-n">1</div><b>Planning</b><p>Hiểu khách hàng, viết <b>IPS</b>, chọn SAA.</p><small>Module này</small></div>
      <div class="sd-card"><div class="sd-n">2</div><b>Execution</b><p>Phân bổ tài sản, chọn chứng khoán, giao dịch.</p></div>
      <div class="sd-card"><div class="sd-n">3</div><b>Feedback</b><p>Theo dõi, tái cân bằng, đánh giá kết quả.</p></div></div>
      <p class="sd-note">IPS → SAA → chọn chứng khoán. Sai từ IPS thì mọi bước sau đều sai.</p>`),

    S('Vì sao phải viết IPS ra giấy?', `<div class="sd-grid4">
      <div class="sd-card"><b>Hiểu nhau</b><p>Buộc nói rõ mục tiêu, khẩu vị rủi ro, nhu cầu tiền.</p></div>
      <div class="sd-card"><b>Kỷ luật</b><p>Cam kết lúc bình tĩnh, dùng khi thị trường hoảng loạn.</p></div>
      <div class="sd-card"><b>Liên tục</b><p>Đổi nhà quản lý vẫn biết phải làm gì.</p></div>
      <div class="sd-card"><b>Đánh giá</b><p>Benchmark và cách đo kết quả đã thống nhất trước.</p></div></div>
      <p class="sd-note">IPS <b>không bảo đảm</b> lợi suất. Xem lại hằng năm hoặc khi hoàn cảnh khách hàng thay đổi lớn.</p>`),

    S('Các phần của một IPS', `<div class="sd-tbl grid">
      <div class="head"><span>Phần</span><span>Trả lời câu hỏi</span></div>
      <div><span>Giới thiệu, mục đích</span><span>Khách hàng là ai, IPS để làm gì</span></div>
      <div><span>Trách nhiệm, thủ tục</span><span>Ai làm gì, cập nhật thế nào</span></div>
      <div><span><b>Mục tiêu đầu tư</b></span><span><b>Lợi suất và rủi ro</b></span></div>
      <div><span><b>Ràng buộc đầu tư</b></span><span><b>TTLLU</b></span></div>
      <div><span>Hướng dẫn đầu tư</span><span>Đòn bẩy, phái sinh, loại trừ</span></div>
      <div><span>Đánh giá, báo cáo</span><span>Benchmark, tần suất</span></div>
      <div><span>Phụ lục</span><span>SAA, chính sách tái cân bằng</span></div></div>`),

    S('Khung IPS: 2 mục tiêu + 5 ràng buộc', `<div class="sd-cols2">
      <div class="sd-card acc"><b>Mục tiêu (objectives)</b><p><b>R</b>eturn: cần đạt bao nhiêu?</p><p><b>R</b>isk: chịu được bao nhiêu?</p></div>
      <div class="sd-card"><b>Ràng buộc (constraints)</b><p><b>T</b>ime horizon · <b>T</b>ax</p><p><b>L</b>iquidity · <b>L</b>egal and regulatory</p><p><b>U</b>nique circumstances</p></div></div>
      <p class="sd-note">Câu hỏi thi điển hình: "Chi tiết này thuộc mục tiêu hay ràng buộc nào?"</p>`),

    S('Lợi suất cần thiết', `<div class="sd-f">r = (1 + ${frac('Chi tiêu', 'Danh mục')}) × (1 + lạm phát) - 1</div>
      <div class="sd-steps"><span>① Bà Lan: chi 90.000 / danh mục 2.000.000 = <b>4,5%</b></span><span>② Cộng: 4,5% + 3% = <b>7,5%</b></span><span>③ Nhân: 1,045 × 1,03 - 1 = <b>7,635%</b></span></div>
      <p class="sd-note">Phân biệt lợi suất <b>cần thiết</b> (phải đạt để chi tiêu) và <b>mong muốn</b> (thích đạt). Nêu dạng tuyệt đối hoặc tương đối so với benchmark.</p>`),

    S('Trước thuế hay sau thuế?', `<div class="sd-big">r<sub>trước thuế</sub> = ${frac('r<sub>sau thuế</sub>', '1 - t')}</div>
      <div class="sd-cols2"><div class="sd-rule up">Đúng: 6% / (1 - 30%) = <b>8,57%</b></div><div class="sd-rule down">Bẫy: 6% × 1,30 = <b>7,80%</b></div></div>
      <p class="sd-note">Sau khi nộp 30% thuế, 8,57% chỉ còn 8,57% × 0,7 = 6%.</p>`),

    S('Mục tiêu rủi ro: kiểm tra ngưỡng thua lỗ', `<div class="sd-cols2 wide-left"><div>${shortfall()}</div>
      <div><p class="sd-cap">IPS: P(R &lt; -10%) ≤ 5%</p><div class="sd-rule down">X: 7% - 1,645 × 12% <b>-12,74%</b></div><div class="sd-rule up">Y: 5,5% - 1,645 × 8% <b>-7,66%</b></div>
      <p class="sd-note">Chọn <b>Y</b>. Rủi ro còn đo bằng σ (tuyệt đối) hoặc tracking error (tương đối).</p></div></div>`),

    S('Willingness và ability', `<div class="sd-cols2 wide-left"><div>${matrix}</div>
      <div><div class="sd-card"><b>Willingness</b><p>Tâm lý, chủ quan. Đo bằng bảng hỏi và <b>hành vi thực tế</b>.</p></div>
      <div class="sd-card acc"><b>Ability</b><p>Tài chính, khách quan: thời hạn, tài sản so với nhu cầu, thu nhập ổn định.</p></div></div></div>`),

    S('Khi hai thành phần mâu thuẫn', `<div class="sd-rule down">Willingness cao, ability thấp <b>Ability thắng</b></div>
      <div class="sd-rule">Willingness thấp, ability cao <b>Thận trọng + giáo dục khách hàng</b></div>
      <div class="sd-card"><b>Anh Minh, 30 tuổi, bác sĩ</b><p>Thu nhập ổn định, 25 năm chưa cần tiền → ability <b>cao</b>.</p><p>"Mất 5% là mất ngủ", từng bán tháo → willingness <b>thấp</b>.</p></div>
      <p class="sd-note">Hành vi trong quá khứ là bằng chứng mạnh hơn lời nói.</p>`),

    S('Năm ràng buộc và tác động', `<div class="sd-tbl grid">
      <div class="head"><span>Ràng buộc</span><span>Ví dụ</span><span>Tác động</span></div>
      <div><span>Liquidity</span><span>Mua nhà sau 18 tháng</span><span>Giữ tiền mặt, TP ngắn</span></div>
      <div><span>Time horizon</span><span>15 năm + nghỉ hưu</span><span>Dài → nhiều rủi ro hơn</span></div>
      <div><span>Tax</span><span>Thuế lãi vốn 20%</span><span>Vị trí tài sản, miễn thuế</span></div>
      <div><span>Legal</span><span>Người nội bộ, quỹ hưu trí</span><span>Giới hạn tỷ trọng</span></div>
      <div><span>Unique</span><span>Không đầu tư thuốc lá</span><span>Loại trừ khỏi vũ trụ</span></div></div>`),

    S('Thời hạn nhiều giai đoạn', `${tl(4, [{ t: 0, label: 'Hôm nay: 50 tuổi', cls: 'pv' }, { t: 2, label: '65 tuổi: nghỉ hưu', cls: 'down' }, { t: 4, label: '85+ tuổi' }], { h: 140, ticks: ['50', '57', '65', '75', '85'] })}
      <div class="sd-cols2"><div class="sd-card acc"><b>Giai đoạn 1: tích lũy</b><p>15 năm, còn thu nhập, chịu rủi ro tốt hơn.</p></div>
      <div class="sd-card"><b>Giai đoạn 2: rút tiền</b><p>20 năm trở lên, cần dòng tiền đều.</p></div></div>
      <p class="sd-note">Thời hạn không phải "chỉ còn 15 năm".</p>`),

    S('Chia nhóm tài sản thế nào cho tốt?', `<div class="sd-cols2 wide-left"><div>${corr()}</div>
      <div><div class="sd-check"><span>Trong nhóm: tương quan cao</span><span>Giữa nhóm: tương quan thấp</span><span>Loại trừ lẫn nhau</span><span>Bao quát, đủ thanh khoản</span></div>
      <p class="sd-note">Số liệu minh họa. Xu hướng mới: chia theo <b>yếu tố rủi ro</b>.</p></div></div>`),

    S('Ba lớp quyết định xây dựng danh mục', `<div class="sd-cols3">
      <div class="sd-card acc"><div class="sd-n">1</div><b>SAA</b><p>Tỷ trọng dài hạn từ IPS.</p><small>60 / 35 / 5</small></div>
      <div class="sd-card"><div class="sd-n">2</div><b>TAA</b><p>Lệch ngắn hạn có chủ đích.</p><small>Cổ phiếu 65% vì đang rẻ</small></div>
      <div class="sd-card"><div class="sd-n">3</div><b>Chọn chứng khoán</b><p>Thụ động hoặc chủ động.</p><small>Core-satellite</small></div></div>
      <p class="sd-note">Mức chủ động được giới hạn bằng <b>risk budget</b>, ví dụ tracking error tối đa cho từng nhà quản lý.</p>`),

    S('Tái cân bằng: khi tỷ trọng trôi khỏi biên', `<div class="sd-cols2">
      <div><p class="sd-cap">SAA 60/40, biên ±5%. Cổ phiếu +30%, trái phiếu +2%</p>
      ${bar('Cổ phiếu mục tiêu', 60, 70)}${bar('Cổ phiếu thực tế', (eq / tot) * 100, 70)}${bar('Biên trên', 65, 70)}</div>
      <div><div class="sd-steps"><span>780.000 / 1.188.000 = <b>${fmt((eq / tot) * 100)}%</b></span><span>Mục tiêu: 60% × 1.188.000 = 712.800</span><span>Bán <b>${((eq - 0.6 * tot) * 1000).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.')} USD</b> cổ phiếu, mua trái phiếu</span></div></div></div>
      <p class="sd-note">Tái cân bằng giữ rủi ro đúng IPS, không phải dự báo thị trường.</p>`),

    S('Sáu cách đưa ESG vào danh mục', `<div class="sd-cols3">
      <div class="sd-card"><b>Loại trừ</b><p>Bỏ thuốc lá, vũ khí, than.</p></div>
      <div class="sd-card"><b>Best-in-class</b><p>Chọn điểm ESG cao nhất mỗi ngành.</p></div>
      <div class="sd-card acc"><b>ESG integration</b><p>Đưa ESG vào định giá.</p></div>
      <div class="sd-card"><b>Thematic</b><p>Chủ đề: năng lượng sạch.</p></div>
      <div class="sd-card"><b>Impact</b><p>Tác động đo lường được.</p></div>
      <div class="sd-card"><b>Engagement</b><p>Dùng quyền cổ đông.</p></div></div>
      <p class="sd-note">Sở thích ESG ghi vào IPS. Loại trừ làm hẹp vũ trụ, tăng tracking error.</p>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>IPS là khung, không bảo đảm lợi suất</span><span>2 mục tiêu + 5 ràng buộc</span>
      <span>Lợi suất cần thiết: nhân với lạm phát</span><span>Trước thuế: chia (1 - t)</span>
      <span>Ability cao, willing thấp → thận trọng</span><span>Willing cao, ability thấp → ability thắng</span>
      <span>Nhóm tài sản: trong cao, giữa thấp</span><span>SAA dài hạn, TAA lệch ngắn hạn</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 10 câu.</p>`),
  ];

  addDeck('PC-04', 'Slide Portfolio Planning - bản thiết kế riêng (17 slide)', slides);
}());
