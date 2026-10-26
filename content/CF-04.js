// Bài giảng CF-04 - Working Capital and Liquidity (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t, frac, keys } = window.CFAH;

  // Sơ đồ chu kỳ kinh doanh và CCC: DIO = 50, DSO = 40, DPO = 30.
  const cccChart = (() => {
    const W = 560, H = 210, x0 = 40, x1 = 520, dmax = 90;
    const X = d => x0 + (d / dmax) * (x1 - x0);
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv" style="max-height:260px" role="img" aria-label="Chu kỳ chuyển đổi tiền mặt">`;
    s += `<rect x="${X(0)}" y="30" width="${X(50) - X(0)}" height="34" rx="6" class="sv-panel"/><text x="${(X(0) + X(50)) / 2}" y="53" class="sv-txt">Tồn kho: DIO = 50</text>`;
    s += `<rect x="${X(50)}" y="30" width="${X(90) - X(50)}" height="34" rx="6" class="sv-panel"/><text x="${(X(50) + X(90)) / 2}" y="53" class="sv-txt">Phải thu: DSO = 40</text>`;
    s += `<line x1="${X(0)}" y1="88" x2="${X(30)}" y2="88" class="sv-down"/><text x="${X(15)}" y="108" class="sv-txt sv-t-down">Phải trả: DPO = 30</text>`;
    s += `<line x1="${X(30)}" y1="140" x2="${X(90)}" y2="140" class="sv-pv"/><text x="${X(60)}" y="132" class="sv-txt sv-t-pv">CCC = 50 + 40 - 30 = 60 ngày</text>`;
    s += `<line x1="${x0}" y1="170" x2="${x1}" y2="170" class="sv-axis"/>`;
    [[0, 'mua hàng'], [30, 'trả tiền NCC'], [50, 'bán hàng'], [90, 'thu tiền']].forEach(([d, l]) => { s += `<line x1="${X(d)}" y1="165" x2="${X(d)}" y2="175" class="sv-axis"/><text x="${X(d)}" y="192" class="sv-muted" style="font-size:13px">${l}</text><text x="${X(d)}" y="207" class="sv-muted" style="font-size:12px">ngày ${d}</text>`; });
    return `${s}</svg>`;
  })();

  const sections = [
    {
      title: '1. Bức tranh lớn',
      minutes: 5,
      html: `
<p>Một công ty có lãi vẫn có thể phá sản nếu <b>hết tiền</b> đúng lúc phải trả lương, trả nhà cung cấp hay trả nợ đến hạn. Module này nghiên cứu "mạch máu" ngắn hạn của doanh nghiệp:</p>
<div class="key">Tiền đi một vòng: công ty trả tiền mua hàng, giữ hàng trong kho, bán chịu cho khách, rồi mới thu tiền về. Vòng này càng dài, công ty càng cần nhiều vốn để "lấp chỗ trống". ${t('liquidity', 'Thanh khoản (liquidity)')} là khả năng có đủ tiền đúng lúc để trả nghĩa vụ ngắn hạn mà không phải chịu tổn thất lớn.</div>
<ol>
  <li><b>Chu kỳ chuyển đổi tiền mặt (CCC)</b>: đo, giải thích và so sánh giữa các công ty. Ứng với LOS 1 (phần 2, 3, 4).</li>
  <li><b>Thanh khoản</b>: nguồn thanh khoản sơ cấp, thứ cấp, các yếu tố kéo thanh khoản xuống, và các tỷ số đo lường. Ứng với LOS 2 (phần 5, 6).</li>
  <li><b>Quản lý vốn lưu động và thanh khoản</b>: mục tiêu, chiến lược thận trọng / tích cực, nguồn vốn ngắn hạn, chi phí tín dụng thương mại. Ứng với LOS 3 (phần 7, 8).</li>
</ol>
<p class="tip">Module này có tính toán. Các tỷ số vòng quay và số ngày bạn đã gặp (hoặc sẽ gặp) ở FSA; ở đây chúng được dùng để <b>ra quyết định</b> quản lý.</p>`,
    },
    {
      title: '2. Vốn lưu động',
      minutes: 8,
      html: `
<p>${t('wc', 'Vốn lưu động (working capital)')} là phần vốn gắn với hoạt động ngắn hạn. Có hai cách đo:</p>
<div class="formula">Tổng vốn lưu động = Tài sản ngắn hạn - Nợ ngắn hạn</div>
<div class="formula">Vốn lưu động hoạt động ròng = (TSNH - tiền và chứng khoán ngắn hạn) - (NNH - vay ngắn hạn và nợ dài hạn đến hạn)</div>
<p>Cách thứ hai (${t('nwc', 'net working capital')} theo nghĩa hoạt động) chỉ giữ lại các khoản sinh ra từ <b>kinh doanh</b>: phải thu, tồn kho, phải trả, chi phí phải trả. Tiền và nợ vay là quyết định <b>tài trợ</b>, nên bị loại ra.</p>
<div class="example"><div class="ex-h">Ví dụ 2.1</div>
<p>Công ty A: tiền 120, chứng khoán ngắn hạn 80, phải thu 400, tồn kho 350, chi phí trả trước 50; phải trả người bán 210, vay ngắn hạn 250, chi phí phải trả 140. Tính hai thước đo vốn lưu động.</p>
<details><summary>Xem lời giải</summary>
<p>TSNH = 120 + 80 + 400 + 350 + 50 = 1.000. NNH = 210 + 250 + 140 = 600.<br>Tổng vốn lưu động = 1.000 - 600 = <b>400</b>.<br>Vốn lưu động hoạt động ròng = (1.000 - 200) - (600 - 250) = 800 - 350 = <b>450</b>.</p></details></div>
<p>Vốn lưu động hoạt động là khoản tiền bị "kẹt" trong kinh doanh. Nó tăng khi doanh thu tăng, nên công ty tăng trưởng nhanh thường cần thêm vốn dù đang có lãi.</p>`,
    },
    {
      title: '3. Chu kỳ chuyển đổi tiền mặt (cash conversion cycle)',
      minutes: 15,
      html: `
<p>Ba con số đo thời gian tiền nằm trong từng khâu:</p>
<table class="plain"><thead><tr><th>Chỉ tiêu</th><th>Công thức</th><th>Ý nghĩa</th></tr></thead><tbody>
<tr><td>${t('dio', 'Số ngày tồn kho (DIO / DOH)')}</td><td>${frac('Tồn kho', 'Giá vốn / 365')} = ${frac('365', 'Vòng quay tồn kho')}</td><td>Hàng nằm trong kho bao lâu</td></tr>
<tr><td>${t('dso', 'Số ngày phải thu (DSO)')}</td><td>${frac('Phải thu', 'Doanh thu / 365')} = ${frac('365', 'Vòng quay phải thu')}</td><td>Bao lâu mới thu được tiền bán chịu</td></tr>
<tr><td>${t('dpo', 'Số ngày phải trả (DPO)')}</td><td>${frac('Phải trả', 'Giá vốn (mua hàng) / 365')}</td><td>Công ty được nợ nhà cung cấp bao lâu</td></tr>
</tbody></table>
<div class="formula">${t('ccc', 'CCC')} = DIO + DSO - DPO</div>
<p>DIO + DSO là ${t('opcycle', 'chu kỳ kinh doanh (operating cycle)')}: từ lúc nhận hàng đến lúc thu tiền. Trừ đi DPO (thời gian nhà cung cấp "cho mượn" tiền) được CCC: <b>số ngày công ty phải tự tài trợ</b> cho vòng kinh doanh.</p>
<p class="warn"><b>Bẫy mẫu số:</b> DSO chia cho <b>doanh thu</b>; DIO và DPO chia cho <b>giá vốn</b> (đúng ra DPO dùng giá trị mua hàng, đề thi thường cho giá vốn làm xấp xỉ). Dùng doanh thu cho DPO là đáp án bẫy hay gặp.</p>
<div class="example"><div class="ex-h">Ví dụ 3.1</div>
<p>Công ty A có doanh thu 3.650, giá vốn 2.555, tồn kho 350, phải thu 400, phải trả 210. Tính CCC.</p>
<details><summary>Xem lời giải</summary>
<p>Giá vốn mỗi ngày = 2.555 / 365 = 7; doanh thu mỗi ngày = 3.650 / 365 = 10.<br>DIO = 350 / 7 = <b>50</b> ngày (vòng quay tồn kho 7,3). DSO = 400 / 10 = <b>40</b> ngày. DPO = 210 / 7 = <b>30</b> ngày.<br>CCC = 50 + 40 - 30 = <b>60 ngày</b>. Chu kỳ kinh doanh = 90 ngày.</p></details></div>
${cccChart}
<p>Ý nghĩa: cứ mỗi đồng chi ra mua hàng, công ty phải chờ 60 ngày mới thu hồi. Trong 60 ngày đó, tiền phải đến từ vốn chủ sở hữu, vay nợ hoặc tiền mặt sẵn có.</p>`,
    },
    {
      title: '4. So sánh CCC giữa các công ty',
      minutes: 8,
      html: `
<ul>
<li><b>CCC ngắn hơn</b> thường tốt hơn: tồn kho quay nhanh, thu tiền nhanh, cần ít vốn lưu động hơn.</li>
<li>${t('negccc', 'CCC âm')}: công ty thu tiền từ khách <b>trước khi</b> phải trả nhà cung cấp, tức nhà cung cấp đang tài trợ cho hoạt động. Thường gặp ở chuỗi bán lẻ, siêu thị, thương mại điện tử có sức mạnh thương lượng lớn.</li>
<li>CCC <b>khác nhau rất nhiều theo ngành</b>: hãy so sánh với đối thủ cùng ngành và với chính công ty qua các năm, không so siêu thị với nhà sản xuất máy bay.</li>
</ul>
<div class="example"><div class="ex-h">Ví dụ 4.1 - Nhà bán lẻ B</div>
<p>B có doanh thu 7.300, giá vốn 5.475, tồn kho 375, phải thu 100, phải trả 675.</p>
<details><summary>Xem lời giải</summary><p>Giá vốn/ngày = 15, doanh thu/ngày = 20. DIO = 25, DSO = 5, DPO = 45. CCC = 25 + 5 - 45 = <b>-15 ngày</b>. B bán hàng và thu tiền xong 15 ngày trước khi phải trả nhà cung cấp.</p></details></div>
<p class="warn"><b>Đừng kết luận vội:</b> CCC giảm vì DPO tăng có thể là dấu hiệu công ty <b>đang chậm trả</b> do thiếu tiền, dẫn đến mất chiết khấu, bị giảm hạn mức tín dụng. CCC giảm vì DIO giảm có thể do thiếu hàng, mất doanh thu. Luôn hỏi: thành phần nào thay đổi và vì sao?</p>
<h4>Tài trợ chuỗi cung ứng (supplier / supply-chain financing)</h4>
<p>Trong ${t('reverse', 'reverse factoring')}, ngân hàng trả tiền sớm cho nhà cung cấp (trừ một khoản phí nhỏ dựa trên rủi ro tín dụng của <b>người mua</b>), còn người mua trả ngân hàng muộn hơn. DPO của người mua kéo dài, CCC giảm, nhưng bản chất là <b>một khoản nợ</b> có thể không hiện rõ là vay trên bảng cân đối. Nhà phân tích nên điều chỉnh khi so sánh.</p>
<div class="example"><div class="ex-h">Ví dụ 4.2 - Giải phóng tiền</div>
<p>Công ty A (doanh thu 10/ngày) giảm DSO từ 40 xuống 35 ngày. Lượng tiền được giải phóng?</p>
<details><summary>Xem lời giải</summary><p>5 ngày × 10 = <b>50</b>. Phải thu giảm từ 400 xuống 350, công ty có thêm 50 tiền mặt mà không cần vay.</p></details></div>`,
    },
    {
      title: '5. Nguồn thanh khoản và các yếu tố tác động',
      minutes: 12,
      html: `
<h4>Nguồn thanh khoản sơ cấp (primary)</h4>
<p>${t('primary', 'Nguồn sơ cấp')} là nguồn dùng trong hoạt động bình thường, <b>không làm thay đổi</b> hoạt động kinh doanh hay cấu trúc tài chính:</p>
<ul>
<li>Tiền và chứng khoán ngắn hạn sẵn có.</li>
<li>Nguồn vay ngắn hạn: hạn mức tín dụng ngân hàng, thương phiếu, tín dụng thương mại.</li>
<li>Dòng tiền từ hoạt động kinh doanh: thu tiền bán hàng, quản lý phải thu, phải trả, tồn kho hiệu quả.</li>
</ul>
<h4>Nguồn thanh khoản thứ cấp (secondary)</h4>
<p>${t('secondary', 'Nguồn thứ cấp')} giúp có tiền nhưng <b>thay đổi</b> hoạt động hoặc cấu trúc tài chính, thường phát tín hiệu công ty đang khó khăn:</p>
<table class="plain"><thead><tr><th>Nguồn</th><th>Cái giá phải trả</th></tr></thead><tbody>
<tr><td>Tạm ngừng hoặc cắt cổ tức</td><td>Tín hiệu xấu với thị trường</td></tr>
<tr><td>Hoãn đầu tư</td><td>Hy sinh tăng trưởng tương lai</td></tr>
<tr><td>Phát hành thêm cổ phiếu</td><td>Pha loãng sở hữu, có thể phải bán giá thấp</td></tr>
<tr><td>Đàm phán lại hợp đồng (nợ, thuê, cung cấp)</td><td>Phải nhượng bộ, mất uy tín</td></tr>
<tr><td>Bán tài sản</td><td>Có thể phải bán rẻ, mất năng lực sản xuất</td></tr>
<tr><td>Nộp đơn phá sản để tái cấu trúc</td><td>Biện pháp cuối cùng</td></tr>
</tbody></table>
<h4>Yếu tố kéo thanh khoản xuống: drags và pulls</h4>
<table class="plain"><thead><tr><th>${t('drag', 'Liquidity drags')}: làm chậm tiền vào</th><th>${t('pull', 'Liquidity pulls')}: làm tiền ra sớm hơn</th></tr></thead><tbody>
<tr><td>Phải thu khó đòi, quá hạn (càng lâu càng khó thu)</td><td>Thanh toán sớm cho nhà cung cấp mà không được lợi gì</td></tr>
<tr><td>Tồn kho lỗi thời, chậm bán, phải giảm giá</td><td>Nhà cung cấp giảm hạn mức tín dụng sau khi công ty trả chậm</td></tr>
<tr><td>Thị trường tín dụng thắt chặt, khó vay hoặc vay đắt</td><td>Ngân hàng giảm hạn mức vay ngắn hạn</td></tr>
<tr><td></td><td>Thanh khoản thấp khiến chủ nợ đòi điều kiện chặt hơn</td></tr>
</tbody></table>
<p class="tip"><b>Mẹo nhớ:</b> drag là "phanh" ở phía tiền <b>vào</b>; pull là "lực hút" ở phía tiền <b>ra</b>.</p>`,
    },
    {
      title: '6. Đo lường và so sánh thanh khoản',
      minutes: 9,
      html: `
<div class="formula">${t('current', 'Current ratio')} = ${frac('Tài sản ngắn hạn', 'Nợ ngắn hạn')}</div>
<div class="formula">${t('quick', 'Quick ratio')} = ${frac('Tiền + chứng khoán ngắn hạn + phải thu', 'Nợ ngắn hạn')}</div>
<div class="formula">${t('cashratio', 'Cash ratio')} = ${frac('Tiền + chứng khoán ngắn hạn', 'Nợ ngắn hạn')}</div>
<p>Ba tỷ số đi từ rộng đến chặt: quick ratio bỏ tồn kho và chi phí trả trước (khó đổi thành tiền nhanh), cash ratio chỉ giữ tài sản gần như tiền, phù hợp để đánh giá trong <b>khủng hoảng</b>. Tỷ số cao hơn thì thanh khoản mạnh hơn, nhưng quá cao có thể là tiền nhàn rỗi, sinh lời kém.</p>
<div class="example"><div class="ex-h">Ví dụ 6.1 - Công ty A (số liệu ví dụ 2.1)</div>
<details><summary>Xem lời giải</summary><p>Current = 1.000 / 600 = <b>1,67</b>. Quick = (120 + 80 + 400) / 600 = <b>1,00</b>. Cash = 200 / 600 = <b>0,33</b>.</p></details></div>
<div class="example"><div class="ex-h">Ví dụ 6.2 - So sánh hai công ty</div>
<p>Cả hai có nợ ngắn hạn 200. X: tiền 50, phải thu 100, tồn kho 350. Y: tiền 150, phải thu 80, tồn kho 30. Công ty nào thanh khoản tốt hơn?</p>
<details><summary>Xem lời giải</summary>
<table class="plain"><thead><tr><th></th><th>Current</th><th>Quick</th><th>Cash</th></tr></thead><tbody>
<tr><td>X</td><td>2,50</td><td>0,75</td><td>0,25</td></tr><tr><td>Y</td><td>1,30</td><td>1,15</td><td>0,75</td></tr></tbody></table>
<p>X có current ratio cao hơn nhưng chủ yếu nhờ tồn kho. Nếu không bán được hàng, X không đủ tài sản nhanh để trả nợ. <b>Y thanh khoản tốt hơn</b>. Bài học: nhìn cả cơ cấu tài sản ngắn hạn, kết hợp với DIO, DSO.</p></details></div>
<p>Khi so sánh: dùng ${t('benchmark', 'chuẩn so sánh')} là trung bình ngành và lịch sử của chính công ty; kết hợp tỷ số thanh khoản với CCC (tồn kho quay chậm làm current ratio "đẹp" giả tạo).</p>`,
    },
    {
      title: '7. Mục tiêu và chiến lược quản lý vốn lưu động',
      minutes: 10,
      html: `
<div class="key"><b>Mục tiêu:</b> giữ đủ thanh khoản để vận hành và trả nợ đúng hạn, đồng thời <b>không giữ thừa</b> tài sản ngắn hạn sinh lời thấp, để tối đa giá trị công ty. Cách làm: rút ngắn CCC hợp lý và dự báo nhu cầu tiền chính xác.</div>
<h4>Ba chiến lược tài trợ vốn lưu động</h4>
<p>Tài sản ngắn hạn gồm phần <b>thường xuyên</b> (mức tối thiểu luôn cần) và phần <b>biến động</b> (theo mùa vụ).</p>
<table class="plain"><thead><tr><th></th><th>${t('conservative', 'Thận trọng (conservative)')}</th><th>${t('moderate', 'Trung dung (moderate)')}</th><th>${t('aggressive', 'Tích cực (aggressive)')}</th></tr></thead><tbody>
<tr><td>Mức tài sản ngắn hạn</td><td>Cao</td><td>Vừa</td><td>Thấp</td></tr>
<tr><td>Nguồn tài trợ</td><td>Chủ yếu dài hạn, kể cả cho phần biến động</td><td>Dài hạn cho tài sản thường xuyên, ngắn hạn cho phần biến động</td><td>Nhiều ngắn hạn, kể cả cho phần thường xuyên</td></tr>
<tr><td>Chi phí</td><td>Cao (lãi dài hạn cao, tài sản nhàn rỗi)</td><td>Vừa</td><td>Thấp</td></tr>
<tr><td>Rủi ro</td><td>Thấp</td><td>Vừa</td><td>Cao (rủi ro tái cấp vốn, lãi suất tăng, thiếu hàng)</td></tr>
</tbody></table>
<p>Lựa chọn phụ thuộc: ngành, giai đoạn phát triển, biên lợi nhuận, mức độ ổn định và dự báo được của doanh thu, dòng tiền. Công ty mới, thị trường bất định thường chọn thận trọng; công ty có dòng tiền ổn định có thể tích cực hơn.</p>
<h4>Chính sách tín dụng cho khách hàng</h4>
<p>Cho khách nợ lâu hơn có thể tăng doanh thu, nhưng làm tăng phải thu, DSO, rủi ro nợ xấu và nhu cầu vốn.</p>
<h4>Nguồn vốn ngắn hạn</h4>
<ul>
<li><b>Ngân hàng</b>: hạn mức tín dụng không cam kết (rẻ nhưng ngân hàng có thể từ chối), hạn mức cam kết (trả phí cam kết), hợp đồng tín dụng quay vòng (revolver, dài hơn, chắc chắn hơn), vay có bảo đảm bằng phải thu, tồn kho.</li>
<li><b>Ngoài ngân hàng</b>: ${t('cp', 'thương phiếu (commercial paper)')} cho công ty lớn, tín nhiệm cao; ${t('factoring', 'bao thanh toán (factoring)')}: bán phải thu cho bên khác với giá chiết khấu; tín dụng thương mại từ nhà cung cấp.</li>
</ul>
<p>Mục tiêu khi chọn nguồn: đa dạng nguồn (không phụ thuộc một ngân hàng), đủ quy mô cho nhu cầu cao điểm, chi phí thấp, và tính <b>cả chi phí ngầm</b> (phí cam kết, số dư bù trừ, tài sản thế chấp). Nguồn tiếp cận được phụ thuộc vào quy mô, tín nhiệm, hệ thống pháp lý, quy định ngành và tài sản có thể thế chấp.</p>`,
    },
    {
      title: '8. Chi phí tín dụng thương mại',
      minutes: 8,
      html: `
<p>Điều khoản "<b>2/10 net 30</b>": được giảm 2% nếu trả trong 10 ngày, nếu không thì trả đủ trong 30 ngày. Bỏ qua chiết khấu nghĩa là "vay" nhà cung cấp 98 trong 20 ngày và trả 100. ${t('tccost', 'Chi phí tín dụng thương mại')} tính theo lãi suất hiệu dụng năm:</p>
<div class="formula">Chi phí = (1 + ${frac('chiết khấu', '1 - chiết khấu')})<sup>365 / (thời hạn thanh toán - thời hạn chiết khấu)</sup> - 1</div>
<div class="example"><div class="ex-h">Ví dụ 8.1</div>
<p>Tính chi phí của việc bỏ qua chiết khấu 2/10 net 30. Công ty có hạn mức ngân hàng lãi suất 10%. Nên làm gì?</p>
<details><summary>Xem lời giải</summary>
<p>Chi phí = (1 + 2/98)<sup>365/20</sup> - 1 = 1,020408<sup>18,25</sup> - 1 = <b>44,59%</b>.</p>
${keys([
  ['Tính 1 + 2/98', '2 [÷] 98 [+] 1 [=]', '1.0204'],
  ['Lũy thừa 365/20 = 18,25', '[yˣ] 18.25 [=]', '1.4459'],
  ['Trừ 1', '[-] 1 [=]', '0.4459'],
])}
<p>44,59% cao hơn nhiều so với 10%: nên <b>vay ngân hàng để trả trong 10 ngày</b> và nhận chiết khấu.</p></details></div>
<table class="plain"><thead><tr><th>Điều khoản</th><th>Chi phí hiệu dụng năm</th></tr></thead><tbody>
<tr><td>1/10 net 30</td><td>20,13%</td></tr><tr><td>2/10 net 30</td><td>44,59%</td></tr><tr><td>2/10 net 45</td><td>23,45%</td></tr><tr><td>2/10 net 60</td><td>15,89%</td></tr>
</tbody></table>
<p class="warn"><b>Bẫy:</b> (1) mẫu số là 98 (số tiền thực "vay"), không phải 100; (2) số ngày là phần chênh 30 - 10 = 20, không phải 30; (3) cách tính đơn giản 2/98 × 365/20 = 37,24% bỏ qua ghép lãi, thấp hơn đáp án chuẩn. Thời hạn trả càng dài thì chi phí càng thấp. Nếu đã bỏ chiết khấu, hãy trả vào <b>ngày cuối cùng</b>, trả sớm hơn chỉ làm chi phí tăng.</p>
<h4>Thử ngay</h4>
<div class="widget" data-widget="tradeCredit"></div>`,
    },
    {
      title: '9. Tóm tắt và bẫy thường gặp',
      minutes: 5,
      html: `
<table class="plain"><thead><tr><th>Tình huống</th><th>Nhớ</th></tr></thead><tbody>
<tr><td>CCC</td><td>DIO + DSO - DPO; chu kỳ kinh doanh = DIO + DSO</td></tr>
<tr><td>Mẫu số</td><td>DSO dùng doanh thu; DIO, DPO dùng giá vốn (mua hàng)</td></tr>
<tr><td>CCC âm</td><td>Thu tiền khách trước khi trả nhà cung cấp; nhà bán lẻ mạnh</td></tr>
<tr><td>CCC giảm</td><td>Kiểm tra thành phần nào thay đổi; DPO tăng có thể do thiếu tiền, reverse factoring</td></tr>
<tr><td>Nguồn sơ cấp và thứ cấp</td><td>Hoạt động bình thường và thay đổi hoạt động, cấu trúc vốn</td></tr>
<tr><td>Drag và pull</td><td>Chậm tiền vào và tiền ra sớm</td></tr>
<tr><td>Quick ratio</td><td>Bỏ tồn kho và chi phí trả trước</td></tr>
<tr><td>Chiến lược tích cực</td><td>Ít tài sản ngắn hạn, nhiều nợ ngắn hạn: rẻ nhưng rủi ro cao</td></tr>
<tr><td>Chi phí tín dụng thương mại</td><td>(1 + d/(1 - d))<sup>365/(net - kỳ chiết khấu)</sup> - 1; so với lãi vay ngân hàng</td></tr>
</tbody></table>
<p>Tiếp theo: tab <b>Luyện tập</b> 10 câu. CF-05 (Capital Investments) sẽ chuyển sang quyết định đầu tư dài hạn.</p>`,
    },
  ];

  const glossary = {
    liquidity: ['Liquidity', 'Thanh khoản', 'Khả năng có đủ tiền đúng lúc để trả nghĩa vụ ngắn hạn mà không chịu tổn thất lớn.'],
    wc: ['Working capital', 'Vốn lưu động', 'Tài sản ngắn hạn trừ nợ ngắn hạn.'],
    nwc: ['Net (operating) working capital', 'Vốn lưu động hoạt động ròng', 'TSNH không gồm tiền và chứng khoán trừ NNH không gồm nợ vay ngắn hạn và nợ dài hạn đến hạn.'],
    dio: ['Days of inventory on hand (DIO / DOH)', 'Số ngày tồn kho', 'Tồn kho / (giá vốn / 365); số ngày hàng nằm trong kho.'],
    dso: ['Days sales outstanding (DSO)', 'Số ngày phải thu', 'Phải thu / (doanh thu / 365); số ngày để thu tiền bán chịu.'],
    dpo: ['Days payables outstanding (DPO)', 'Số ngày phải trả', 'Phải trả / (mua hàng hoặc giá vốn / 365); số ngày công ty được nợ nhà cung cấp.'],
    ccc: ['Cash conversion cycle (CCC)', 'Chu kỳ chuyển đổi tiền mặt', 'DIO + DSO - DPO; số ngày công ty phải tự tài trợ cho vòng kinh doanh.'],
    opcycle: ['Operating cycle', 'Chu kỳ kinh doanh', 'DIO + DSO; từ khi nhận hàng đến khi thu được tiền.'],
    negccc: ['Negative cash conversion cycle', 'CCC âm', 'Công ty thu tiền từ khách trước khi phải trả nhà cung cấp.'],
    reverse: ['Reverse factoring (supplier finance)', 'Tài trợ cho nhà cung cấp', 'Ngân hàng trả sớm cho nhà cung cấp, người mua trả ngân hàng muộn hơn; kéo dài DPO của người mua.'],
    primary: ['Primary sources of liquidity', 'Nguồn thanh khoản sơ cấp', 'Tiền sẵn có, nguồn vay ngắn hạn, dòng tiền kinh doanh; không làm thay đổi hoạt động.'],
    secondary: ['Secondary sources of liquidity', 'Nguồn thanh khoản thứ cấp', 'Cắt cổ tức, hoãn đầu tư, phát hành cổ phiếu, đàm phán lại, bán tài sản, phá sản; thay đổi hoạt động hoặc cấu trúc tài chính.'],
    drag: ['Liquidity drag', 'Yếu tố làm chậm tiền vào', 'Phải thu khó đòi, tồn kho lỗi thời, tín dụng thắt chặt.'],
    pull: ['Liquidity pull', 'Yếu tố làm tiền ra sớm', 'Trả sớm cho nhà cung cấp, giảm hạn mức tín dụng thương mại hay ngân hàng.'],
    current: ['Current ratio', 'Hệ số thanh toán hiện hành', 'Tài sản ngắn hạn / nợ ngắn hạn.'],
    quick: ['Quick ratio', 'Hệ số thanh toán nhanh', '(Tiền + chứng khoán ngắn hạn + phải thu) / nợ ngắn hạn.'],
    cashratio: ['Cash ratio', 'Hệ số thanh toán bằng tiền', '(Tiền + chứng khoán ngắn hạn) / nợ ngắn hạn.'],
    benchmark: ['Benchmark', 'Chuẩn so sánh', 'Trung bình ngành hoặc lịch sử của chính công ty, dùng để đánh giá một tỷ số.'],
    conservative: ['Conservative approach', 'Chiến lược thận trọng', 'Nhiều tài sản ngắn hạn, tài trợ chủ yếu bằng vốn dài hạn; an toàn nhưng tốn kém.'],
    moderate: ['Moderate approach', 'Chiến lược trung dung', 'Tài sản thường xuyên tài trợ dài hạn, phần biến động tài trợ ngắn hạn.'],
    aggressive: ['Aggressive approach', 'Chiến lược tích cực', 'Ít tài sản ngắn hạn, dùng nhiều nợ ngắn hạn; rẻ nhưng rủi ro tái cấp vốn cao.'],
    cp: ['Commercial paper', 'Thương phiếu', 'Giấy nợ ngắn hạn không bảo đảm do công ty lớn, tín nhiệm cao phát hành.'],
    factoring: ['Factoring', 'Bao thanh toán', 'Bán khoản phải thu cho bên khác với giá chiết khấu để có tiền ngay.'],
    tccost: ['Cost of trade credit', 'Chi phí tín dụng thương mại', 'Lãi suất hiệu dụng năm ngầm định khi bỏ qua chiết khấu thanh toán sớm.'],
  };

  const practice = [
    { q: 'Công ty có doanh thu 5.475, giá vốn 4.380, tồn kho 480, phải thu 600, phải trả 360. Chu kỳ chuyển đổi tiền mặt gần nhất với:', choices: ['50 ngày', '56 ngày', '110 ngày'], answer: 0, explain: 'DIO = 480/(4.380/365) = 40; DSO = 600/(5.475/365) = 40; DPO = 360/(4.380/365) = 30. CCC = 40 + 40 - 30 = 50. Lựa chọn 56 ngày tính DPO bằng doanh thu (24 ngày). Lựa chọn 110 ngày cộng thay vì trừ DPO.' },
    { q: 'Hành động nào làm GIẢM chu kỳ chuyển đổi tiền mặt, các yếu tố khác không đổi?', choices: ['Nới thời hạn tín dụng cho khách hàng từ 30 lên 45 ngày', 'Đàm phán được thời hạn thanh toán dài hơn với nhà cung cấp', 'Tăng lượng tồn kho an toàn'], answer: 1, explain: 'DPO tăng thì CCC giảm. Nới thời hạn tín dụng cho khách hàng làm DSO tăng, tăng tồn kho an toàn làm DIO tăng, cả hai đều làm CCC dài hơn.' },
    { q: 'Nhà cung cấp đưa ra điều khoản 1/10 net 30. Chi phí hiệu dụng năm của việc bỏ qua chiết khấu gần nhất với:', choices: ['18,43%', '13,01%', '20,13%'], answer: 2, explain: '(1 + 1/99)^(365/20) - 1 = 20,13%. Lựa chọn 18,43% là cách tính đơn giản 1/99 x 365/20, bỏ qua ghép lãi. Lựa chọn 13,01% dùng 365/30 thay vì 365/(30 - 10).' },
    { q: 'Công ty được đề nghị điều khoản 2/10 net 45 và có thể vay ngân hàng ngắn hạn với lãi suất 9%. Quyết định hợp lý nhất là:', choices: ['Bỏ chiết khấu và trả vào ngày 45 vì vay ngân hàng tốn 9%', 'Vay ngân hàng để trả vào ngày 10 vì chi phí bỏ chiết khấu khoảng 23,45%', 'Trả vào ngày 10 hay ngày 45 đều như nhau vì chiết khấu chỉ 2%'], answer: 1, explain: 'Chi phí bỏ chiết khấu = (1 + 2/98)^(365/35) - 1 = 23,45%, cao hơn 9%, nên vay ngân hàng để nhận chiết khấu. Phương án bỏ chiết khấu so sánh sai: chỉ thấy 9% mà không tính chi phí ngầm của tín dụng thương mại. Phương án "đều như nhau" sai vì 2% cho 35 ngày tương đương lãi suất năm rất cao.' },
    { q: 'Công ty có tiền 50, chứng khoán ngắn hạn 30, phải thu 120, tồn kho 200, chi phí trả trước 20; nợ ngắn hạn 250. Quick ratio gần nhất với:', choices: ['1,68', '0,88', '0,80'], answer: 2, explain: 'Quick = (50 + 30 + 120)/250 = 0,80. Lựa chọn 1,68 là current ratio (420/250). Lựa chọn 0,88 cộng nhầm chi phí trả trước vào tài sản nhanh (220/250).' },
    { q: 'Nguồn nào là nguồn thanh khoản THỨ CẤP?', choices: ['Hạn mức tín dụng ngân hàng chưa sử dụng', 'Dòng tiền từ hoạt động kinh doanh', 'Đàm phán lại các hợp đồng nợ'], answer: 2, explain: 'Đàm phán lại hợp đồng thay đổi cấu trúc tài chính, là nguồn thứ cấp. Hạn mức tín dụng chưa sử dụng và dòng tiền từ hoạt động kinh doanh là nguồn sơ cấp, dùng trong hoạt động bình thường.' },
    { q: 'Yếu tố nào là liquidity DRAG (làm chậm dòng tiền vào)?', choices: ['Tồn kho lỗi thời phải bán giảm giá', 'Nhà cung cấp giảm hạn mức tín dụng sau khi công ty trả chậm', 'Công ty thanh toán sớm cho nhà cung cấp mà không được chiết khấu'], answer: 0, explain: 'Tồn kho lỗi thời làm chậm việc chuyển hàng thành tiền: drag. Nhà cung cấp giảm hạn mức và việc thanh toán sớm không được chiết khấu khiến tiền phải chi ra sớm hơn: liquidity pull.' },
    { q: 'Chiến lược tài trợ vốn lưu động nào có chi phí thấp nhất nhưng rủi ro tái cấp vốn cao nhất?', choices: ['Thận trọng (conservative)', 'Trung dung (moderate)', 'Tích cực (aggressive)'], answer: 2, explain: 'Chiến lược tích cực giữ ít tài sản ngắn hạn và dùng nhiều nợ ngắn hạn (thường rẻ hơn), kể cả cho phần tài sản thường xuyên, nên phải liên tục tái cấp vốn. Chiến lược thận trọng thì ngược lại: an toàn nhưng đắt.' },
    { q: 'Doanh thu năm 7.300 (bán chịu toàn bộ). Nếu DSO giảm từ 45 xuống 35 ngày, lượng tiền được giải phóng khỏi phải thu gần nhất với:', choices: ['200', '203', '730'], answer: 0, explain: 'Doanh thu mỗi ngày = 7.300/365 = 20; giảm 10 ngày giải phóng 200. Lựa chọn 203 dùng 360 ngày (202,78). Lựa chọn 730 lấy doanh thu chia 10, không có ý nghĩa.' },
    { q: 'X có current ratio 2,50 và quick ratio 0,75; Y có current ratio 1,30 và quick ratio 1,15. Nhận định nào đúng nhất?', choices: ['X thanh khoản tốt hơn vì current ratio cao hơn', 'Y có khả năng trả nợ ngắn hạn mà không phải bán tồn kho tốt hơn X', 'Hai công ty có thanh khoản như nhau vì cả hai đều có current ratio trên 1'], answer: 1, explain: 'Khoảng cách lớn giữa current và quick ratio của X cho thấy tài sản ngắn hạn chủ yếu là tồn kho. Y có quick ratio 1,15 > 1 nên trả được nợ ngắn hạn bằng tài sản nhanh. Phương án chọn X chỉ nhìn current ratio; phương án "thanh khoản như nhau" bỏ qua cơ cấu tài sản.' },
  ];

  const widgets = {
    tradeCredit(el) {
      el.innerHTML = `
        <div class="w-row"><label>Chiết khấu: <b data-o="d">2%</b><input type="range" min="0.5" max="5" step="0.5" value="2" data-i="d"></label>
        <label>Trả trong (ngày): <b data-o="a">10</b><input type="range" min="0" max="30" step="1" value="10" data-i="a"></label>
        <label>Hạn thanh toán (ngày): <b data-o="n">30</b><input type="range" min="15" max="90" step="5" value="30" data-i="n"></label>
        <label>Lãi vay ngân hàng: <b data-o="r">10%</b><input type="range" min="2" max="30" step="1" value="10" data-i="r"></label></div>
        <div class="w-out"><div class="w-price" data-o="p"></div><div class="w-bar"><span data-o="bar"></span><i></i></div><div class="w-note" data-o="note"></div></div>`;
      const q = s => el.querySelector(s);
      const f = x => x.toFixed(2).replace('.', ',');
      const upd = () => {
        const d = +q('[data-i="d"]').value / 100, a = +q('[data-i="a"]').value, n = +q('[data-i="n"]').value, r = +q('[data-i="r"]').value;
        q('[data-o="d"]').textContent = `${f(d * 100)}%`;
        q('[data-o="a"]').textContent = a;
        q('[data-o="n"]').textContent = n;
        q('[data-o="r"]').textContent = `${r}%`;
        if (n <= a) {
          q('[data-o="p"]').textContent = 'Hạn thanh toán phải dài hơn thời hạn chiết khấu';
          q('[data-o="bar"]').style.width = '0%';
          q('[data-o="note"]').textContent = '';
          return;
        }
        const cost = ((1 + d / (1 - d)) ** (365 / (n - a)) - 1) * 100;
        q('[data-o="p"]').textContent = `Chi phí bỏ chiết khấu = ${f(cost)}%/năm`;
        q('[data-o="bar"]').style.width = `${Math.min(100, cost)}%`;
        q('[data-o="note"]').textContent = cost > r
          ? `Cao hơn lãi vay ${r}%: nên vay để trả trong ${a} ngày và nhận chiết khấu.`
          : `Thấp hơn lãi vay ${r}%: bỏ chiết khấu, trả vào ngày ${n} (ngày cuối cùng).`;
      };
      el.addEventListener('input', upd);
      upd();
    },
  };

  window.LESSONS['CF-04'] = {
    moduleId: 'CF-04',
    calculator: 'BA II Plus',
    warmup: [
      'Ôn CF-02: nhà cung cấp quan tâm điều gì nhất ở công ty mua hàng của họ?',
      'Một công ty báo lãi lớn nhưng vẫn không trả được lương đúng hạn. Điều đó có thể xảy ra không? Vì sao?',
      'Kiểm tra máy: bạn tính được 1,02 mũ 18,25 bằng phím nào?',
    ],
    sections,
    glossary,
    practice,
    widgets,
    slides: [],
    wrapup: [
      'Viết công thức CCC và nêu mẫu số đúng cho từng thành phần.',
      'Phân biệt nguồn thanh khoản sơ cấp và thứ cấp, mỗi loại cho 2 ví dụ.',
      'Tự tính chi phí bỏ chiết khấu của điều khoản 3/15 net 60 rồi kiểm tra bằng widget.',
    ],
  };
}());
