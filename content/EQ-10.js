// Bài giảng EQ-10 - Company Analysis: Past, Present, and Future (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t, frac } = window.CFAH;

  const sections = [
    {
      title: '1. Bức tranh lớn',
      minutes: 4,
      html: `
<p>EQ-09 cho biết sân chơi. Module này hỏi: <b>công ty</b> đang chơi thế nào trong sân đó, các con số trong quá khứ và hiện tại nói gì, và từ đó dự báo tương lai ra sao.</p>
<div class="key">Phân tích công ty đi theo một chuỗi: <b>chiến lược</b> (công ty chọn cách cạnh tranh nào) → <b>doanh thu</b> (bán bao nhiêu, giá bao nhiêu) → <b>lợi nhuận hoạt động</b> (giữ lại được bao nhiêu sau chi phí) → <b>vốn cần bỏ ra</b> (vốn lưu động, đầu tư tài sản) → <b>tài trợ</b> (cấu trúc vốn). Mỗi mắt xích là một giả định trong mô hình dự báo ở EQ-08.</div>
<ol>
  <li>Chiến lược cạnh tranh và vị thế trong ngành (LOS 1, phần 2).</li>
  <li>Động lực doanh thu, lợi nhuận hoạt động và sức mạnh định giá (LOS 2, phần 3 đến 5).</li>
  <li>Vốn lưu động, đầu tư vốn và cấu trúc vốn (LOS 3, phần 6 đến 8).</li>
</ol>
<p class="tip">"Past, Present, and Future": dữ liệu quá khứ (past) và vị thế hiện tại (present) chỉ có giá trị khi giúp trả lời câu hỏi về tương lai (future). Mỗi phần dưới đây đều kết thúc bằng câu hỏi: con số này nên được dự báo thế nào?</p>`,
    },
    {
      title: '2. Chiến lược cạnh tranh và vị thế trong ngành',
      minutes: 14,
      html: `
<h4>a) Ba chiến lược chung của Porter</h4>
<table class="plain"><thead><tr><th>Chiến lược</th><th>Cách thắng</th><th>Điều kiện thành công</th><th>Rủi ro</th></tr></thead><tbody>
<tr><td>${t('costlead', 'Dẫn đầu về chi phí (cost leadership)')}</td><td>Chi phí thấp nhất ngành; giá ngang hoặc thấp hơn mà vẫn có lời. Có thể dùng để phòng thủ (giữ thị phần) hoặc tấn công (giành thị phần)</td><td>Quy mô lớn, quy trình hiệu quả, kiểm soát chi phí chặt, sản phẩm chuẩn hóa</td><td>Đối thủ bắt chước công nghệ; định giá cướp đoạt (predatory pricing) có thể vi phạm luật cạnh tranh</td></tr>
<tr><td>${t('diff', 'Khác biệt hóa (differentiation)')}</td><td>Sản phẩm độc đáo về chất lượng, kiểu dáng, dịch vụ, giao hàng; khách trả thêm tiền</td><td>Phần giá cao hơn (price premium) phải lớn hơn chi phí tạo khác biệt; mạnh về nghiên cứu thị trường, sáng tạo, marketing</td><td>Khách hàng không còn coi trọng điểm khác biệt; đối thủ sao chép</td></tr>
<tr><td>${t('focus', 'Tập trung (focus)')}</td><td>Áp dụng chi phí thấp hoặc khác biệt cho một <b>phân khúc hẹp</b></td><td>Phân khúc đủ lớn và có nhu cầu riêng mà công ty lớn phục vụ kém</td><td>Phân khúc thu hẹp hoặc công ty lớn tấn công vào</td></tr>
</tbody></table>
<p class="warn">Công ty cố làm cả hai mà không giỏi cái nào sẽ bị ${t('stuck', '"kẹt ở giữa" (stuck in the middle)')}: chi phí không đủ thấp để thắng về giá, sản phẩm không đủ khác biệt để bán giá cao.</p>

<h4>b) Lợi thế cạnh tranh bền vững</h4>
<p>Chiến lược chỉ tạo ra lợi nhuận vượt trội lâu dài khi có ${t('moat', 'lợi thế cạnh tranh bền vững (sustainable competitive advantage)')} mà đối thủ khó sao chép. Các nguồn thường gặp:</p>
<ul>
  <li><b>Lợi thế quy mô</b>: chi phí cố định chia cho sản lượng lớn.</li>
  <li><b>Hiệu ứng mạng lưới</b>: càng nhiều người dùng thì sản phẩm càng có giá trị (sàn thương mại điện tử, ví điện tử).</li>
  <li><b>Chi phí chuyển đổi</b> cao cho khách hàng (phần mềm doanh nghiệp, ngân hàng lõi).</li>
  <li><b>Tài sản vô hình</b>: thương hiệu, bằng sáng chế, giấy phép.</li>
  <li><b>Lợi thế chi phí riêng</b>: vị trí, nguồn nguyên liệu, quy trình độc quyền.</li>
</ul>

<h4>c) Đánh giá vị thế: chiến lược để lại dấu vết trên báo cáo tài chính</h4>
<table class="plain"><thead><tr><th>Chỉ tiêu</th><th>Dẫn đầu chi phí</th><th>Khác biệt hóa</th></tr></thead><tbody>
<tr><td>Biên lợi nhuận gộp</td><td>Thấp</td><td>Cao</td></tr>
<tr><td>Chi phí bán hàng, marketing, R&amp;D / doanh thu</td><td>Thấp</td><td>Cao</td></tr>
<tr><td>Vòng quay tài sản</td><td>Cao</td><td>Thấp hơn</td></tr>
<tr><td>Thị phần</td><td>Thường lớn</td><td>Có thể nhỏ nhưng giá cao</td></tr>
</tbody></table>
<div class="example"><div class="ex-h">Ví dụ 2.1 - Hai con đường đến cùng một mức sinh lời</div>
<p>Công ty C có biên lợi nhuận gộp 22%, biên lợi nhuận hoạt động 6%, vòng quay tài sản 2,5 lần. Công ty D có biên gộp 55%, biên hoạt động 18%, vòng quay tài sản 0,8 lần. Mỗi công ty theo chiến lược nào? So sánh lợi nhuận hoạt động trên tài sản.</p>
<details><summary>Xem lời giải</summary>
<p>C: biên thấp, quay vòng nhanh → <b>dẫn đầu chi phí</b>. D: biên cao, quay vòng chậm → <b>khác biệt hóa</b>.<br>
Lợi nhuận hoạt động / tài sản = biên hoạt động × vòng quay: C = 6% × 2,5 = <b>15,0%</b>; D = 18% × 0,8 = <b>14,4%</b>. Hai chiến lược khác nhau có thể cho mức sinh lời gần như nhau.</p></details></div>
<p>Ngoài số liệu, vị thế còn thể hiện qua <b>thị phần và xu hướng thị phần</b> so với đối thủ, chất lượng ban lãnh đạo, và mức độ phù hợp giữa chiến lược với cấu trúc ngành (EQ-09): ngành sản phẩm đồng nhất, người mua nhạy giá thì dẫn đầu chi phí thường là con đường duy nhất.</p>`,
    },
    {
      title: '3. Động lực doanh thu',
      minutes: 14,
      html: `
<p>Mọi doanh thu đều tách được thành <b>sản lượng × giá</b>. Nhà phân tích chọn cách tách phù hợp với mô hình kinh doanh để thấy ${t('revdriver', 'động lực doanh thu (revenue drivers)')}:</p>
<table class="plain"><thead><tr><th>Mô hình</th><th>Doanh thu =</th></tr></thead><tbody>
<tr><td>Sản xuất</td><td>Số đơn vị bán × giá bán bình quân</td></tr>
<tr><td>Bán lẻ</td><td>Số cửa hàng × doanh thu mỗi cửa hàng (theo dõi ${t('sss', 'doanh thu cửa hàng hiện hữu (same-store sales)')})</td></tr>
<tr><td>Thuê bao, phần mềm</td><td>Số thuê bao × doanh thu bình quân mỗi thuê bao (ARPU)</td></tr>
<tr><td>Hàng không, khách sạn</td><td>Công suất × tỷ lệ lấp đầy × giá bình quân</td></tr>
</tbody></table>
<p>Hai cách dự báo bổ sung cho nhau: ${t('topdown', 'từ trên xuống (top-down)')}: quy mô thị trường × thị phần; ${t('bottomup', 'từ dưới lên (bottom-up)')}: cộng từ sản phẩm, cửa hàng, khách hàng, hoặc từng bộ phận và địa bàn.</p>

<div class="example"><div class="ex-h">Ví dụ 3.1 - Tách giá và sản lượng</div>
<p>Năm trước công ty bán 50 triệu đơn vị, giá 20 nghìn đồng (doanh thu 1.000 tỷ). Năm nay bán 53 triệu đơn vị, giá 20,6 nghìn đồng. Tăng trưởng doanh thu đến từ đâu?</p>
<details><summary>Xem lời giải</summary>
<p>Doanh thu mới = 53 × 20,6 = <b>1.091,8 tỷ</b>, tăng <b>9,18%</b>.<br>
Hiệu ứng sản lượng = (53 - 50) × 20 = <b>60 tỷ</b> (sản lượng tăng 6%).<br>
Hiệu ứng giá = (20,6 - 20) × 53 = <b>31,8 tỷ</b> (giá tăng 3%).<br>
Kiểm tra: 60 + 31,8 = 91,8. Phần lớn tăng trưởng đến từ sản lượng; công ty tăng được giá 3% mà sản lượng vẫn tăng là dấu hiệu tốt về sức mạnh định giá (phần 5).</p></details></div>

<h4>Tăng trưởng tự thân và không tự thân</h4>
<p>Tăng trưởng báo cáo gồm ba phần: ${t('organic', 'tăng trưởng tự thân (organic)')} từ hoạt động hiện có, phần đến từ <b>mua lại</b> công ty khác, và phần do <b>tỷ giá</b> khi quy đổi doanh thu nước ngoài. Chỉ phần tự thân phản ánh sức khỏe kinh doanh và thường lặp lại được.</p>
<div class="example"><div class="ex-h">Ví dụ 3.2</div>
<p>Doanh thu báo cáo tăng 12%. Công ty mua lại đóng góp 4 điểm phần trăm; tỷ giá làm doanh thu giảm 1 điểm phần trăm. Tăng trưởng tự thân xấp xỉ bao nhiêu?</p>
<details><summary>Xem lời giải</summary><p>Tự thân ≈ 12% - 4% - (-1%) = <b>9%</b>. Tỷ giá đang <b>kéo xuống</b> nên phải cộng ngược lại. Lỗi hay gặp: lấy 12% - 4% - 1% = 7%.</p></details></div>

<div class="example"><div class="ex-h">Ví dụ 3.3 - Dự báo từ trên xuống</div>
<p>Thị trường năm nay 10.000 tỷ đồng, dự báo tăng 6%. Thị phần của công ty dự kiến tăng từ 12% lên 13% nhờ mở thêm kênh phân phối. Dự báo doanh thu năm tới?</p>
<details><summary>Xem lời giải</summary><p>10.000 × 1,06 × 13% = <b>1.378 tỷ</b>, so với 1.200 tỷ năm nay (tăng 14,8%). Giả định thị phần phải có lý do từ phân tích cạnh tranh, không chỉ là mong muốn.</p></details></div>
<p class="tip">Đọc thuyết minh <b>bộ phận (segment)</b> để biết mảng nào, địa bàn nào đang kéo tăng trưởng. Một mảng tăng 30% nhưng chỉ chiếm 5% doanh thu không cứu được mảng chính đang giảm.</p>`,
    },
    {
      title: '4. Lợi nhuận hoạt động và đòn bẩy hoạt động',
      minutes: 14,
      html: `
<h4>a) Các tầng biên lợi nhuận</h4>
<ul>
  <li>${t('gm', 'Biên lợi nhuận gộp (gross margin)')} = (doanh thu - giá vốn) / doanh thu: phản ánh giá bán so với chi phí trực tiếp, tức sức mạnh định giá và hiệu quả sản xuất.</li>
  <li>${t('om', 'Biên lợi nhuận hoạt động (operating margin)')} = EBIT / doanh thu: trừ thêm chi phí bán hàng, quản lý, R&amp;D.</li>
  <li>Biên EBITDA: cộng lại khấu hao, hữu ích khi so sánh các công ty có chính sách khấu hao khác nhau.</li>
</ul>
<p>Khi phân tích quá khứ, hãy hỏi biên lợi nhuận thay đổi vì <b>giá</b>, vì <b>chi phí đầu vào</b>, vì <b>cơ cấu sản phẩm</b>, hay vì <b>quy mô</b>.</p>

<h4>b) Chi phí cố định, chi phí biến đổi và đòn bẩy hoạt động</h4>
<p>${t('cm', 'Lãi trên biến phí (contribution margin)')} = doanh thu - chi phí biến đổi. Khi chi phí cố định chiếm tỷ trọng lớn, một thay đổi nhỏ của doanh thu tạo ra thay đổi lớn của EBIT. Đó là ${t('dol', 'đòn bẩy hoạt động (operating leverage)')}:</p>
<div class="formula">DOL = ${frac('%ΔEBIT', '%ΔDoanh thu')} = ${frac('Lãi trên biến phí', 'EBIT')}</div>
<div class="example"><div class="ex-h">Ví dụ 4.1</div>
<p>Công ty có doanh thu 1.000, chi phí biến đổi 60% doanh thu, chi phí cố định 250. (a) Tính EBIT và DOL. (b) Doanh thu tăng 10% thì EBIT tăng bao nhiêu? (c) So sánh với một đối thủ có cùng EBIT 150 nhưng chi phí biến đổi 80%, cố định 50.</p>
<details><summary>Xem lời giải</summary>
<p>(a) Lãi trên biến phí = 400; EBIT = 400 - 250 = <b>150</b>; DOL = 400/150 = <b>2,67</b>.<br>
(b) Doanh thu 1.100: EBIT = 1.100 × 0,4 - 250 = 190, tăng <b>26,67%</b> = 2,67 × 10%.<br>
(c) Đối thủ: lãi trên biến phí 200, DOL = 200/150 = 1,33; doanh thu tăng 10% thì EBIT chỉ tăng 13,33%. Nhưng khi doanh thu <b>giảm</b> 10%, EBIT của công ty thứ nhất giảm 26,67%, của đối thủ chỉ giảm 13,33%.</p></details></div>
<p class="warn"><b>Ý nghĩa:</b> đòn bẩy hoạt động cao khuếch đại cả chiều lên lẫn chiều xuống. Công ty trong ngành chu kỳ có chi phí cố định lớn (hàng không, thép, bán dẫn) có lợi nhuận biến động rất mạnh. Khi dự báo, <b>không</b> được giả định biên lợi nhuận cố định nếu cấu trúc chi phí phần lớn là cố định.</p>
<p class="tip">DOL không phải hằng số: càng gần điểm hòa vốn (EBIT nhỏ) thì DOL càng lớn. Đòn bẩy hoạt động cũng là nền của ${t('scale', 'lợi thế quy mô')}: doanh thu tăng thì biên lợi nhuận hoạt động tự cải thiện.</p>`,
    },
    {
      title: '5. Sức mạnh định giá (pricing power)',
      minutes: 8,
      html: `
<p>${t('pp', 'Sức mạnh định giá (pricing power)')} là khả năng tăng giá (hoặc giữ giá khi chi phí giảm, khi đối thủ giảm giá) mà không mất nhiều khách hàng. Nó đến từ cấu trúc ngành (EQ-09: tập trung, rào cản cao, ít thay thế) và từ lợi thế riêng (thương hiệu, chi phí chuyển đổi).</p>
<h4>Dấu hiệu nhận biết</h4>
<ul>
  <li>Biên lợi nhuận gộp <b>ổn định hoặc tăng</b> trong giai đoạn chi phí đầu vào tăng (chuyển được chi phí sang khách hàng).</li>
  <li>Tăng giá nhưng sản lượng không giảm đáng kể (cầu ít co giãn theo giá).</li>
  <li>Giá bán cao hơn đối thủ một cách bền vững.</li>
  <li>Biên lợi nhuận cao hơn trung bình ngành qua nhiều chu kỳ.</li>
</ul>
<div class="example"><div class="ex-h">Ví dụ 5.1 - Chi phí đầu vào tăng 10%</div>
<p>Hai công ty cùng có doanh thu 1.000 và giá vốn 600 (biên gộp 40%). Giá vốn của cả hai tăng 10% lên 660. Công ty P tăng giá 10%; công ty Q không tăng được giá. Tính biên gộp mới. Nếu chỉ tăng giá 6% thì sao?</p>
<details><summary>Xem lời giải</summary>
<p>P: doanh thu 1.100, lợi nhuận gộp 440, biên gộp <b>40,0%</b> (giữ nguyên).<br>
Q: doanh thu 1.000, lợi nhuận gộp 340, biên gộp <b>34,0%</b>.<br>
Tăng giá 6%: doanh thu 1.060, lợi nhuận gộp 400 (giữ nguyên số tuyệt đối) nhưng biên gộp chỉ còn <b>37,7%</b>.</p>
<p>Muốn giữ nguyên <b>biên</b> thì phải tăng giá cùng tỷ lệ với chi phí (10%); muốn giữ nguyên <b>số tiền</b> lợi nhuận gộp chỉ cần tăng giá bằng số tiền chi phí tăng (60/1.000 = 6%).</p></details></div>
<p class="tip">Khi dự báo trong giai đoạn lạm phát, câu hỏi then chốt là: công ty chuyển được bao nhiêu phần trăm chi phí tăng sang giá bán, và với độ trễ bao lâu?</p>`,
    },
    {
      title: '6. Vốn lưu động',
      minutes: 10,
      html: `
<p>Để bán được hàng, công ty phải ứng tiền cho hàng tồn kho và cho khách nợ, đồng thời được nhà cung cấp cho nợ lại. Phần tiền "kẹt" trong vòng kinh doanh là ${t('nwc', 'vốn lưu động hoạt động (operating working capital)')} = phải thu + tồn kho - phải trả. Cách tính chi tiết các chỉ số ngày đã học ở CF-04; ở đây ta dùng chúng để <b>đánh giá và dự báo</b>.</p>
<div class="formula">DSO = ${frac('Phải thu', 'Doanh thu / 365')} &nbsp;&nbsp; DIO = ${frac('Tồn kho', 'Giá vốn / 365')} &nbsp;&nbsp; DPO = ${frac('Phải trả', 'Giá vốn / 365')}</div>
<div class="formula">${t('ccc', 'Chu kỳ chuyển đổi tiền mặt (CCC)')} = DSO + DIO - DPO</div>
<div class="example"><div class="ex-h">Ví dụ 6.1</div>
<p>Doanh thu 3.650, giá vốn 2.555, phải thu 400, tồn kho 350, phải trả 210. Tính CCC. Nếu công ty rút DSO xuống 30 ngày, giải phóng bao nhiêu tiền?</p>
<details><summary>Xem lời giải</summary>
<p>Doanh thu mỗi ngày = 10; giá vốn mỗi ngày = 7.<br>
DSO = 400/10 = <b>40</b>; DIO = 350/7 = <b>50</b>; DPO = 210/7 = <b>30</b>; CCC = 40 + 50 - 30 = <b>60 ngày</b>.<br>
DSO giảm 10 ngày → phải thu giảm 10 × 10 = <b>100</b>: dòng tiền hoạt động tăng 100 một lần.</p></details></div>
<h4>Đánh giá</h4>
<ul>
  <li>CCC <b>tăng</b> qua các năm (thu tiền chậm hơn, tồn kho phình ra) có thể là dấu hiệu sản phẩm khó bán, nới lỏng tín dụng để đẩy doanh số, hoặc chất lượng lợi nhuận kém.</li>
  <li>CCC rất ngắn hoặc âm (siêu thị, sàn thương mại điện tử) thường phản ánh <b>vị thế mạnh</b> với nhà cung cấp và khách hàng.</li>
  <li>Khi dự báo, vốn lưu động thường được mô hình hóa theo <b>số ngày</b> hoặc theo <b>% doanh thu</b>: doanh thu tăng thì phải đầu tư thêm vốn lưu động, làm giảm dòng tiền tự do.</li>
</ul>`,
    },
    {
      title: '7. Đầu tư vốn (capital investments)',
      minutes: 6,
      html: `
<p>${t('capex', 'Chi tiêu vốn (capex)')} gồm hai phần: ${t('maint', 'capex duy trì (maintenance)')} để giữ năng lực hiện có, và ${t('growthcapex', 'capex tăng trưởng (growth)')} để mở rộng. Báo cáo tài chính không tách riêng hai phần này, nên nhà phân tích dùng các chỉ tiêu xấp xỉ:</p>
<table class="plain"><thead><tr><th>Chỉ tiêu</th><th>Đọc thế nào</th></tr></thead><tbody>
<tr><td>Capex / khấu hao</td><td>&gt; 1: đang mở rộng (khấu hao xấp xỉ capex duy trì). &lt; 1 kéo dài: đầu tư chưa đủ, có thể "vắt sữa" tài sản cũ, năng lực sẽ giảm</td></tr>
<tr><td>Capex / doanh thu</td><td>Mức thâm dụng vốn của mô hình kinh doanh; so sánh với đối thủ</td></tr>
<tr><td>Vòng quay tài sản cố định</td><td>Mỗi đồng tài sản tạo bao nhiêu doanh thu; dùng để kiểm tra dự báo capex có khớp với dự báo doanh thu không</td></tr>
<tr><td>ROIC so với WACC</td><td>Đầu tư chỉ tạo giá trị khi ROIC của dự án mới &gt; WACC</td></tr>
</tbody></table>
<div class="example"><div class="ex-h">Ví dụ 7.1</div>
<p>Công ty có capex 180, khấu hao 120, doanh thu 3.650. Nhận xét?</p>
<details><summary>Xem lời giải</summary><p>Capex / khấu hao = <b>1,5</b>: công ty đang đầu tư mở rộng khoảng 60 ngoài phần duy trì. Capex / doanh thu = <b>4,9%</b>. Nhà phân tích cần kiểm tra: phần mở rộng này có đi kèm dự báo doanh thu tăng tương ứng không, và ROIC của nó có vượt WACC không.</p></details></div>
<p class="tip">Với công ty công nghệ, dịch vụ, "đầu tư" có thể nằm trong chi phí R&amp;D, marketing hoặc mua lại công ty, không nằm trong capex. Đừng kết luận công ty "ít thâm dụng vốn" chỉ nhìn capex.</p>`,
    },
    {
      title: '8. Cấu trúc vốn',
      minutes: 6,
      html: `
<p>${t('capstruct', 'Cấu trúc vốn (capital structure)')} là cách công ty tài trợ tài sản bằng nợ và vốn chủ. Nợ nhiều làm tăng ROE khi kinh doanh tốt nhưng tăng rủi ro tài chính, và cộng dồn với đòn bẩy hoạt động ở phần 4.</p>
<table class="plain"><thead><tr><th>Chỉ tiêu</th><th>Công thức</th><th>Ý nghĩa</th></tr></thead><tbody>
<tr><td>Nợ / vốn (debt-to-capital)</td><td>Nợ / (nợ + vốn chủ)</td><td>Tỷ trọng nợ trong nguồn vốn</td></tr>
<tr><td>${t('ndebitda', 'Nợ ròng / EBITDA')}</td><td>(Nợ - tiền) / EBITDA</td><td>Số năm EBITDA cần để trả hết nợ ròng; ngân hàng và chủ nợ rất hay dùng</td></tr>
<tr><td>${t('icr', 'Khả năng trả lãi (interest coverage)')}</td><td>EBIT / chi phí lãi vay</td><td>Lợi nhuận hoạt động gấp bao nhiêu lần lãi vay</td></tr>
</tbody></table>
<div class="example"><div class="ex-h">Ví dụ 8.1</div>
<p>Nợ vay 900 (gồm cả nợ thuê tài sản), tiền 150, vốn chủ sở hữu 1.100, EBITDA 300, EBIT 200, lãi vay 50. Tính ba chỉ tiêu.</p>
<details><summary>Xem lời giải</summary><p>Nợ / vốn = 900/2.000 = <b>45%</b>. Nợ ròng / EBITDA = 750/300 = <b>2,5 lần</b> (nếu quên trừ tiền: 3,0). Khả năng trả lãi = 200/50 = <b>4,0 lần</b>.</p></details></div>
<p>Khi đánh giá, xem thêm <b>lịch đáo hạn nợ</b>, lãi suất cố định hay thả nổi, đồng tiền vay so với đồng tiền doanh thu, và các cam kết (covenant). Khi dự báo, cấu trúc vốn quyết định chi phí lãi vay, số cổ phiếu (nếu phát hành thêm) và chi phí vốn dùng để chiết khấu.</p>
<p class="warn"><b>Kết nối:</b> công ty có đòn bẩy hoạt động cao (chi phí cố định lớn, ngành chu kỳ) thường nên dùng <b>ít</b> nợ, vì hai loại đòn bẩy nhân với nhau khiến lợi nhuận cổ đông dao động rất mạnh.</p>`,
    },
    {
      title: '9. Tóm tắt và bẫy thường gặp',
      minutes: 4,
      html: `
<table class="plain"><thead><tr><th>Chủ đề</th><th>Nhớ</th></tr></thead><tbody>
<tr><td>Chiến lược</td><td>Chi phí thấp: biên thấp, quay vòng nhanh. Khác biệt: biên gộp cao, chi phí marketing, R&amp;D cao. Đừng "kẹt ở giữa"</td></tr>
<tr><td>Doanh thu</td><td>Sản lượng × giá; top-down = thị trường × thị phần; tách tự thân, mua lại, tỷ giá (tỷ giá âm thì cộng ngược lại)</td></tr>
<tr><td>Đòn bẩy hoạt động</td><td>DOL = lãi trên biến phí / EBIT; khuếch đại cả hai chiều</td></tr>
<tr><td>Sức mạnh định giá</td><td>Giữ biên gộp khi chi phí tăng; giữ biên cần tăng giá theo % chi phí</td></tr>
<tr><td>Vốn lưu động</td><td>CCC = DSO + DIO - DPO; DIO, DPO dùng giá vốn; CCC tăng là tín hiệu cảnh báo</td></tr>
<tr><td>Đầu tư vốn</td><td>Capex/khấu hao &gt; 1: mở rộng; &lt; 1 kéo dài: đầu tư thiếu</td></tr>
<tr><td>Cấu trúc vốn</td><td>Nợ ròng/EBITDA trừ tiền; EBIT/lãi vay; đòn bẩy hoạt động cao thì nên ít nợ</td></tr>
</tbody></table>
<p>Tiếp theo: tab <b>Luyện tập</b> (10 câu). Module EQ-11 sẽ ghép toàn bộ phân tích này thành một báo cáo phân tích.</p>`,
    },
  ];

  const glossary = {
    costlead: ['Cost leadership', 'Dẫn đầu về chi phí', 'Chiến lược có chi phí thấp nhất ngành, cạnh tranh bằng giá.'],
    diff: ['Differentiation', 'Khác biệt hóa', 'Sản phẩm độc đáo, khách trả giá cao hơn chi phí tạo khác biệt.'],
    focus: ['Focus strategy', 'Chiến lược tập trung', 'Áp dụng chi phí thấp hoặc khác biệt hóa cho một phân khúc hẹp.'],
    stuck: ['Stuck in the middle', 'Kẹt ở giữa', 'Không đủ rẻ để thắng về giá, không đủ khác biệt để bán giá cao.'],
    moat: ['Sustainable competitive advantage', 'Lợi thế cạnh tranh bền vững', 'Lợi thế khó sao chép giúp duy trì ROIC trên WACC lâu dài.'],
    revdriver: ['Revenue drivers', 'Động lực doanh thu', 'Các thành phần tạo nên doanh thu, thường là sản lượng và giá.'],
    sss: ['Same-store sales', 'Doanh thu cửa hàng hiện hữu', 'Tăng trưởng doanh thu của các cửa hàng đã hoạt động ít nhất một năm, loại trừ cửa hàng mới.'],
    topdown: ['Top-down forecasting', 'Dự báo từ trên xuống', 'Bắt đầu từ quy mô thị trường hoặc kinh tế vĩ mô rồi nhân với thị phần.'],
    bottomup: ['Bottom-up forecasting', 'Dự báo từ dưới lên', 'Cộng dồn từ sản phẩm, cửa hàng, bộ phận hoặc khách hàng.'],
    organic: ['Organic growth', 'Tăng trưởng tự thân', 'Tăng trưởng từ hoạt động hiện có, loại trừ mua lại và tác động tỷ giá.'],
    gm: ['Gross margin', 'Biên lợi nhuận gộp', '(Doanh thu - giá vốn) / doanh thu.'],
    om: ['Operating margin', 'Biên lợi nhuận hoạt động', 'EBIT / doanh thu.'],
    cm: ['Contribution margin', 'Lãi trên biến phí', 'Doanh thu trừ chi phí biến đổi; phần đóng góp để bù chi phí cố định.'],
    dol: ['Degree of operating leverage (DOL)', 'Độ đòn bẩy hoạt động', '%ΔEBIT / %ΔDoanh thu = lãi trên biến phí / EBIT.'],
    scale: ['Economies of scale', 'Lợi thế quy mô', 'Chi phí bình quân giảm khi sản lượng tăng, nhờ chia nhỏ chi phí cố định.'],
    pp: ['Pricing power', 'Sức mạnh định giá', 'Khả năng tăng hoặc giữ giá mà không mất nhiều khách hàng.'],
    nwc: ['Operating working capital', 'Vốn lưu động hoạt động', 'Phải thu + tồn kho - phải trả.'],
    ccc: ['Cash conversion cycle (CCC)', 'Chu kỳ chuyển đổi tiền mặt', 'DSO + DIO - DPO; số ngày tiền bị kẹt trong vòng kinh doanh.'],
    capex: ['Capital expenditure (capex)', 'Chi tiêu vốn', 'Tiền chi mua sắm, xây dựng tài sản dài hạn.'],
    maint: ['Maintenance capex', 'Capex duy trì', 'Phần capex để thay thế tài sản hao mòn, giữ năng lực hiện có; thường xấp xỉ khấu hao.'],
    growthcapex: ['Growth capex', 'Capex tăng trưởng', 'Phần capex để mở rộng năng lực.'],
    capstruct: ['Capital structure', 'Cấu trúc vốn', 'Tỷ trọng nợ và vốn chủ trong nguồn tài trợ của công ty.'],
    ndebitda: ['Net debt to EBITDA', 'Nợ ròng trên EBITDA', '(Nợ - tiền) / EBITDA; số năm EBITDA để trả hết nợ ròng.'],
    icr: ['Interest coverage ratio', 'Khả năng trả lãi', 'EBIT / chi phí lãi vay.'],
  };

  const practice = [
    { q: 'Công ty X có biên lợi nhuận gộp thấp hơn trung bình ngành, chi phí marketing trên doanh thu thấp và vòng quay tài sản cao nhất ngành. Chiến lược của X nhiều khả năng là:', choices: ['dẫn đầu về chi phí.', 'khác biệt hóa.', 'tập trung vào phân khúc cao cấp.'], answer: 0, explain: 'Biên thấp, chi phí bán hàng thấp và quay vòng nhanh là dấu vết của chiến lược chi phí thấp. B có biên gộp cao và chi tiêu marketing lớn. C (phân khúc cao cấp) cũng dựa vào biên cao.' },
    { q: 'Năm trước công ty bán 200 nghìn sản phẩm giá 15 (doanh thu 3.000); năm nay bán 210 nghìn sản phẩm giá 14,4. Phát biểu nào đúng?', choices: ['Doanh thu tăng 5% nhờ sản lượng.', 'Doanh thu tăng 0,8%; hiệu ứng sản lượng +150 bị hiệu ứng giá -126 bù trừ gần hết.', 'Doanh thu giảm 4% do giá giảm.'], answer: 1, explain: 'Doanh thu mới = 210 × 14,4 = 3.024, tăng 0,8%. Sản lượng: (210 - 200) × 15 = +150; giá: (14,4 - 15) × 210 = -126. A chỉ nhìn sản lượng; C chỉ nhìn giá. Tăng sản lượng nhờ giảm giá gợi ý sức mạnh định giá yếu.' },
    { q: 'Doanh thu báo cáo tăng 15%. Các thương vụ mua lại đóng góp 6 điểm phần trăm và tỷ giá đóng góp thêm 2 điểm phần trăm. Tăng trưởng tự thân xấp xỉ:', choices: ['11%', '9%', '7%'], answer: 2, explain: 'Tự thân = 15% - 6% - 2% = 7%. A cộng tỷ giá sai chiều (15% - 6% + 2%); B chỉ trừ mua lại mà quên tỷ giá.' },
    { q: 'Công ty có doanh thu 500, tỷ lệ lãi trên biến phí 45% và chi phí cố định 135. Nếu doanh thu tăng 8%, EBIT sẽ tăng khoảng:', choices: ['8%', '20%', '45%'], answer: 1, explain: 'EBIT = 225 - 135 = 90; DOL = 225/90 = 2,5; %ΔEBIT = 2,5 × 8% = 20% (kiểm tra: 540 × 0,45 - 135 = 108). A bỏ qua đòn bẩy hoạt động; C nhầm tỷ lệ lãi trên biến phí với mức tăng EBIT.' },
    { q: 'Dấu hiệu nào sau đây là bằng chứng mạnh nhất cho thấy công ty có sức mạnh định giá?', choices: ['Doanh thu tăng nhanh nhờ mở rộng sang thị trường mới.', 'Thị phần tăng sau đợt giảm giá mạnh.', 'Biên lợi nhuận gộp giữ ổn định trong hai năm giá nguyên liệu tăng 20%.'], answer: 2, explain: 'Giữ biên gộp khi chi phí đầu vào tăng mạnh cho thấy công ty chuyển được chi phí sang khách hàng. A là tăng trưởng sản lượng, không nói gì về giá. B ngược lại: phải giảm giá để giành thị phần.' },
    { q: 'Doanh thu 200, giá vốn 120. Giá vốn tăng 15%. Để giữ nguyên biên lợi nhuận gộp, công ty phải tăng giá bán:', choices: ['15%', '9%', '6%'], answer: 0, explain: 'Giá vốn mới 138. Giữ biên 40% cần doanh thu 138/0,6 = 230, tức tăng 15% (bằng tỷ lệ tăng chi phí). B (9%) chỉ giữ nguyên số tiền lợi nhuận gộp 80: doanh thu 218. C là chênh lệch 15% - 9%, không có ý nghĩa.' },
    { q: 'Công ty có DSO 35 ngày, DIO 70 ngày, DPO 45 ngày. Chu kỳ chuyển đổi tiền mặt là:', choices: ['150 ngày', '60 ngày', '10 ngày'], answer: 1, explain: 'CCC = 35 + 70 - 45 = 60 ngày. A cộng cả DPO; C lấy 35 - 70 + 45 sai dấu.' },
    { q: 'Trong 5 năm liền, capex của một công ty sản xuất chỉ bằng khoảng 0,7 lần chi phí khấu hao, trong khi ban lãnh đạo dự báo sản lượng tăng 10%/năm. Nhận định phù hợp nhất:', choices: ['Công ty đang đầu tư mở rộng mạnh, dự báo đáng tin.', 'Công ty có thể đang đầu tư chưa đủ để duy trì năng lực; dự báo tăng sản lượng cần kiểm tra lại.', 'Tỷ lệ này không liên quan đến dự báo sản lượng.'], answer: 1, explain: 'Capex thấp hơn khấu hao kéo dài gợi ý chưa đủ đầu tư duy trì, khó tăng sản lượng 10%/năm nếu không bổ sung capex. A đảo ngược ý nghĩa. C sai vì năng lực sản xuất phụ thuộc vào đầu tư tài sản.' },
    { q: 'Công ty có nợ vay 1.200, tiền 200, EBITDA 400, EBIT 280, lãi vay 70. Nợ ròng/EBITDA và khả năng trả lãi lần lượt là:', choices: ['2,5 lần và 4,0 lần', '3,0 lần và 4,0 lần', '2,5 lần và 5,7 lần'], answer: 0, explain: 'Nợ ròng/EBITDA = (1.200 - 200)/400 = 2,5; EBIT/lãi vay = 280/70 = 4,0. B quên trừ tiền. C dùng EBITDA/lãi vay = 5,7 thay vì EBIT.' },
    { q: 'Thị trường năm nay 50.000 tỷ, dự báo tăng 4%. Doanh thu công ty năm nay 4.000 tỷ (thị phần 8%) và dự kiến thị phần năm tới 9%. Tăng trưởng doanh thu dự báo gần nhất với:', choices: ['5%', '12,5%', '17%'], answer: 2, explain: 'Doanh thu năm tới = 52.000 × 9% = 4.680, tăng 17% (= 1,04 × 1,125 - 1). A chỉ cộng 4% + 1 điểm thị phần; B chỉ tính phần thị phần tăng (9/8 - 1), quên tăng trưởng thị trường.' },
  ];

  window.LESSONS['EQ-10'] = {
    moduleId: 'EQ-10',
    calculator: 'BA II Plus',
    warmup: [
      'Ôn EQ-09: kể năm lực của Porter. Lực nào đặt "trần" cho giá bán của ngành?',
      'Ôn CF-04: viết công thức chu kỳ chuyển đổi tiền mặt. DIO và DPO chia cho doanh thu hay giá vốn?',
      'Đoán trước: hai công ty cùng ROA 15%, một là siêu thị giá rẻ, một là hãng thời trang cao cấp. Biên lợi nhuận và vòng quay tài sản của chúng khác nhau thế nào?',
    ],
    sections,
    glossary,
    practice,
    widgets: {},
    slides: [],
    wrapup: [
      'Chọn một công ty niêm yết và xác định chiến lược của nó bằng ba chỉ tiêu tài chính.',
      'Giải thích vì sao đòn bẩy hoạt động cao kết hợp với nợ vay lớn là nguy hiểm trong ngành chu kỳ.',
      'Nêu hai dấu hiệu sức mạnh định giá và một dấu hiệu cảnh báo từ vốn lưu động.',
    ],
  };
}());
