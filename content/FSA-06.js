// Bài giảng FSA-06 - Analysis of Inventories (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t, frac } = window.CFAH;

  const sections = [
    {
      title: '1. Bức tranh lớn',
      minutes: 4,
      html: `
<p>Hàng tồn kho nằm ở giao điểm của hai báo cáo: phần <b>đã bán</b> đi vào ${t('cogs', 'giá vốn hàng bán (COGS)')} trên báo cáo kết quả kinh doanh, phần <b>chưa bán</b> nằm lại trên bảng cân đối kế toán.</p>
<div class="formula">Hàng sẵn có để bán = Tồn kho đầu kỳ + Mua trong kỳ = COGS + Tồn kho cuối kỳ</div>
<div class="key">Tổng chi phí hàng sẵn có để bán là cố định. Phương pháp tính giá chỉ quyết định <b>chia</b> tổng đó cho COGS và tồn kho cuối kỳ như thế nào. Chia nhiều cho COGS thì lợi nhuận thấp, tồn kho thấp, và ngược lại.</div>
<ol>
  <li><b>Lower of cost and NRV / market</b>: khi nào phải ghi giảm tồn kho, khác biệt IFRS và US GAAP, ảnh hưởng lên tỷ số. Ứng với LOS 1 (phần 6).</li>
  <li><b>Lạm phát, giảm phát và các phương pháp tính giá</b>: FIFO, LIFO, bình quân gia quyền; LIFO reserve, chuyển LIFO sang FIFO, LIFO liquidation. Ứng với LOS 2 (phần 2, 3, 4, 5).</li>
  <li><b>Trình bày, thuyết minh và những điều nhà phân tích cần soi</b>. Ứng với LOS 3 (phần 7).</li>
</ol>`,
    },
    {
      title: '2. Giá gốc và các phương pháp tính giá',
      minutes: 10,
      html: `
<h4>Cái gì được tính vào giá gốc hàng tồn kho?</h4>
<table class="plain"><thead><tr><th>Được vốn hóa vào tồn kho</th><th>Ghi nhận ngay là chi phí</th></tr></thead><tbody>
<tr><td>Giá mua, thuế nhập khẩu, vận chuyển về kho</td><td>Hao hụt bất thường (nguyên vật liệu, nhân công)</td></tr>
<tr><td>Chi phí chuyển đổi: nhân công trực tiếp, sản xuất chung</td><td>Chi phí lưu kho (trừ khi cần cho quá trình sản xuất)</td></tr>
<tr><td>Chi phí khác để đưa hàng đến địa điểm và trạng thái sẵn sàng bán</td><td>Chi phí quản lý chung, chi phí bán hàng</td></tr>
</tbody></table>

<h4>Bốn phương pháp tính giá (cost flow)</h4>
<table class="plain"><thead><tr><th>Phương pháp</th><th>COGS gồm</th><th>Tồn kho cuối kỳ gồm</th><th>IFRS</th><th>US GAAP</th></tr></thead><tbody>
<tr><td>${t('specid', 'Thực tế đích danh (specific identification)')}</td><td>Đúng giá của từng món đã bán</td><td>Đúng giá của từng món còn lại</td><td>Có</td><td>Có</td></tr>
<tr><td>${t('fifo', 'FIFO')}</td><td>Hàng mua <b>sớm nhất</b></td><td>Hàng mua <b>gần nhất</b></td><td>Có</td><td>Có</td></tr>
<tr><td>${t('wac', 'Bình quân gia quyền (weighted average cost)')}</td><td>Giá bình quân</td><td>Giá bình quân</td><td>Có</td><td>Có</td></tr>
<tr><td>${t('lifo', 'LIFO')}</td><td>Hàng mua <b>gần nhất</b></td><td>Hàng mua <b>sớm nhất</b></td><td><b>Cấm</b></td><td>Có</td></tr>
</tbody></table>
<p>Thực tế đích danh dùng cho hàng có giá trị lớn, không thay thế được (ô tô, trang sức). FIFO và bình quân cho kết quả "trung tính" với dòng hàng thực tế. LIFO chỉ được phép theo US GAAP; công ty Mỹ dùng LIFO cho mục đích thuế thì cũng phải dùng LIFO trên báo cáo tài chính (quy định ${t('conformity', 'LIFO conformity')}).</p>

<div class="example"><div class="ex-h">Ví dụ 2.1 - So sánh ba phương pháp (kiểm kê định kỳ)</div>
<p>Tồn đầu kỳ 100 đơn vị giá 10. Mua lần 1: 200 đơn vị giá 12. Mua lần 2: 200 đơn vị giá 14. Bán 350 đơn vị, giá bán 20. Tính COGS, tồn kho cuối kỳ, lợi nhuận gộp.</p>
<details><summary>Xem lời giải</summary>
<p>Hàng sẵn có: 500 đơn vị, tổng giá 1.000 + 2.400 + 2.800 = <b>6.200</b>. Doanh thu = 350 × 20 = 7.000. Tồn cuối kỳ 150 đơn vị.</p>
<table class="plain"><thead><tr><th></th><th>COGS</th><th>Tồn kho cuối kỳ</th><th>Lợi nhuận gộp</th><th>Biên gộp</th></tr></thead><tbody>
<tr><td>FIFO</td><td>100 × 10 + 200 × 12 + 50 × 14 = 4.100</td><td>150 × 14 = 2.100</td><td>2.900</td><td>41,43%</td></tr>
<tr><td>LIFO</td><td>200 × 14 + 150 × 12 = 4.600</td><td>100 × 10 + 50 × 12 = 1.600</td><td>2.400</td><td>34,29%</td></tr>
<tr><td>Bình quân</td><td>350 × 12,40 = 4.340</td><td>150 × 12,40 = 1.860</td><td>2.660</td><td>38,00%</td></tr>
</tbody></table>
<p>Giá bình quân = 6.200 / 500 = 12,40. Kiểm tra: mỗi dòng COGS + tồn cuối kỳ = 6.200. Bình quân luôn nằm <b>giữa</b> FIFO và LIFO.</p></details></div>
<p class="tip"><b>Kiểm kê định kỳ hay kê khai thường xuyên (periodic / perpetual)?</b> Với FIFO và thực tế đích danh, kết quả như nhau. Với LIFO và bình quân, kết quả có thể khác vì kê khai thường xuyên tính giá tại từng lần bán. Đề thi thường dùng định kỳ nếu không nói gì thêm.</p>

<h4>Thử ngay: đổi tốc độ tăng giá và số lượng bán</h4>
<div class="widget" data-widget="inventoryMethods"></div>`,
    },
    {
      title: '3. Lạm phát và giảm phát: ảnh hưởng lên báo cáo và tỷ số',
      minutes: 10,
      html: `
<p>Khi giá mua <b>tăng</b> (lạm phát) và số lượng tồn kho ổn định hoặc tăng:</p>
<table class="plain"><thead><tr><th>Khoản mục</th><th>LIFO so với FIFO</th><th>Vì sao</th></tr></thead><tbody>
<tr><td>COGS</td><td>Cao hơn</td><td>LIFO bán hàng mua gần nhất, giá đắt</td></tr>
<tr><td>Lợi nhuận gộp, lợi nhuận ròng</td><td>Thấp hơn</td><td>COGS cao hơn</td></tr>
<tr><td>Thuế thu nhập</td><td>Thấp hơn</td><td>Lợi nhuận chịu thuế thấp hơn</td></tr>
<tr><td>CFO</td><td><b>Cao hơn</b></td><td>Nộp thuế ít hơn (tiền mua hàng như nhau)</td></tr>
<tr><td>Tồn kho cuối kỳ</td><td>Thấp hơn</td><td>Còn lại hàng cũ, giá rẻ</td></tr>
<tr><td>Vốn lưu động, current ratio</td><td>Thấp hơn</td><td>Tồn kho thấp hơn</td></tr>
<tr><td>Vòng quay tồn kho</td><td>Cao hơn</td><td>Tử số COGS lớn hơn, mẫu số tồn kho nhỏ hơn</td></tr>
<tr><td>Số ngày tồn kho (DOH)</td><td>Thấp hơn</td><td>Ngược với vòng quay</td></tr>
<tr><td>Nợ trên vốn chủ (D/E)</td><td>Cao hơn</td><td>Vốn chủ thấp hơn do lợi nhuận giữ lại thấp hơn</td></tr>
<tr><td>Biên lợi nhuận</td><td>Thấp hơn</td><td>Lợi nhuận thấp hơn trên cùng doanh thu</td></tr>
</tbody></table>
<p>Khi giá <b>giảm</b> (giảm phát), mọi chiều <b>đảo ngược</b>: LIFO cho COGS thấp hơn, lợi nhuận cao hơn, tồn kho cao hơn FIFO. Bình quân luôn nằm giữa.</p>
<div class="key"><b>Mỗi phương pháp "đúng" ở một báo cáo:</b> FIFO cho tồn kho trên bảng cân đối gần với ${t('replace', 'chi phí thay thế hiện tại (current replacement cost)')}; LIFO cho COGS trên báo cáo kết quả kinh doanh gần với chi phí hiện tại, tức là lợi nhuận phản ánh tốt hơn khả năng sinh lời bền vững.</div>
<p class="tip"><b>Mẹo nhớ:</b> trong lạm phát, LIFO "đẩy" giá đắt vào COGS. Mọi thứ liên quan đến lợi nhuận và tài sản đều thấp hơn; chỉ có COGS, vòng quay tồn kho, CFO (nhờ thuế) và D/E là cao hơn.</p>
<p class="warn"><b>Bẫy:</b> lợi ích về dòng tiền của LIFO đến <b>chỉ</b> từ thuế. Nếu đề nói "bỏ qua thuế" thì CFO dưới FIFO và LIFO bằng nhau, vì tiền chi mua hàng không phụ thuộc phương pháp tính giá.</p>`,
    },
    {
      title: '4. LIFO reserve và chuyển LIFO sang FIFO',
      minutes: 12,
      html: `
<p>Công ty theo US GAAP dùng LIFO phải thuyết minh ${t('reserve', 'LIFO reserve')}: chênh lệch giữa giá trị tồn kho theo FIFO (hoặc chi phí hiện tại) và theo LIFO. Nhờ con số này, nhà phân tích có thể đưa công ty LIFO về FIFO để so sánh với đối thủ dùng IFRS hoặc FIFO.</p>
<div class="formula">Tồn kho<sub>FIFO</sub> = Tồn kho<sub>LIFO</sub> + LIFO reserve</div>
<div class="formula">COGS<sub>FIFO</sub> = COGS<sub>LIFO</sub> - (LIFO reserve cuối kỳ - LIFO reserve đầu kỳ)</div>
<div class="formula">Lợi nhuận ròng<sub>FIFO</sub> = Lợi nhuận ròng<sub>LIFO</sub> + ΔLIFO reserve × (1 - t)</div>
<p>Trên bảng cân đối, khi tăng tồn kho thêm LIFO reserve, cần ghi tăng tương ứng ở phía nguồn vốn:</p>
<ul>
<li>Vốn chủ sở hữu (lợi nhuận giữ lại) tăng: LIFO reserve × (1 - t).</li>
<li>Nợ phải trả tăng: LIFO reserve × t (thuế hoãn lại phải trả, nếu giả định thuế chưa nộp; hoặc tiền giảm nếu giả định đã nộp).</li>
</ul>

<div class="example"><div class="ex-h">Ví dụ 4.1 - Đưa công ty LIFO về FIFO</div>
<p>Công ty Bình Minh (US GAAP, LIFO), năm 2026: doanh thu 20.000; COGS 12.000; lợi nhuận ròng 1.800; thuế suất 25%. Tồn kho LIFO đầu năm 3.000, cuối năm 3.400. LIFO reserve đầu năm 600, cuối năm 750. Cuối năm: tài sản ngắn hạn 8.000, nợ ngắn hạn 5.000, tổng tài sản 20.000, tổng nợ 12.000, vốn chủ 8.000. Giả định phần thuế tăng thêm ghi vào thuế hoãn lại phải trả.</p>
<details><summary>Xem lời giải</summary>
<p>ΔLIFO reserve = 750 - 600 = 150.</p>
<table class="plain"><thead><tr><th></th><th>LIFO</th><th>FIFO</th><th>Tính</th></tr></thead><tbody>
<tr><td>Tồn kho cuối năm</td><td>3.400</td><td>4.150</td><td>3.400 + 750</td></tr>
<tr><td>COGS</td><td>12.000</td><td>11.850</td><td>12.000 - 150</td></tr>
<tr><td>Biên lợi nhuận gộp</td><td>40,00%</td><td>40,75%</td><td>(20.000 - 11.850) / 20.000</td></tr>
<tr><td>Lợi nhuận ròng</td><td>1.800</td><td>1.912,5</td><td>1.800 + 150 × 0,75</td></tr>
<tr><td>Current ratio</td><td>1,60</td><td>1,75</td><td>(8.000 + 750) / 5.000</td></tr>
<tr><td>Vốn chủ</td><td>8.000</td><td>8.562,5</td><td>8.000 + 750 × 0,75</td></tr>
<tr><td>Tổng nợ</td><td>12.000</td><td>12.187,5</td><td>12.000 + 750 × 0,25</td></tr>
<tr><td>Nợ / vốn chủ</td><td>1,50</td><td>1,42</td><td>12.187,5 / 8.562,5</td></tr>
<tr><td>Vòng quay tồn kho</td><td>3,75</td><td>3,06</td><td>11.850 / bình quân (3.600; 4.150)</td></tr>
</tbody></table>
<p>Theo FIFO, Bình Minh trông có lãi hơn, thanh khoản tốt hơn, đòn bẩy thấp hơn, nhưng quản lý tồn kho "chậm" hơn (vòng quay thấp hơn). Không có gì thay đổi về kinh tế: chỉ là cách chia chi phí.</p></details></div>
<p class="warn"><b>Bẫy hay gặp:</b> (1) COGS dùng <b>mức thay đổi</b> của LIFO reserve, tồn kho dùng <b>số dư</b> LIFO reserve; (2) lợi nhuận ròng điều chỉnh <b>sau thuế</b>; (3) vốn chủ điều chỉnh bằng <b>số dư lũy kế</b> × (1 - t), không phải chỉ phần tăng trong năm.</p>
<p class="tip">Khi so sánh tỷ số sinh lời, nhiều nhà phân tích dùng COGS theo <b>LIFO</b> (gần chi phí hiện tại) nhưng tồn kho theo <b>FIFO</b> (gần giá trị hiện tại). Đây là cách lấy phần "đúng" của mỗi phương pháp.</p>`,
    },
    {
      title: '5. LIFO liquidation',
      minutes: 6,
      html: `
<p>Dưới LIFO, hàng tồn kho tích lũy thành nhiều ${t('layer', 'lớp (LIFO layers)')}, lớp càng cũ giá càng thấp (trong lạm phát). ${t('liquid', 'LIFO liquidation')} xảy ra khi công ty <b>bán nhiều hơn mua</b>, số lượng tồn kho giảm, buộc các lớp cũ giá rẻ chạy vào COGS.</p>
<div class="example"><div class="ex-h">Ví dụ 5.1</div>
<p>Đầu năm, công ty có lớp LIFO cũ 2.000 đơn vị giá 30. Trong năm mua 8.000 đơn vị giá 50 (giá hiện tại), bán 9.000 đơn vị giá 70.</p>
<details><summary>Xem lời giải</summary>
<p>COGS (LIFO) = 8.000 × 50 + 1.000 × 30 = <b>430.000</b>. Nếu công ty đã mua đủ 9.000 đơn vị ở giá 50, COGS sẽ là 450.000.</p>
<p>Lợi nhuận gộp tăng thêm 20.000 (biên gộp 31,75% thay vì 28,57%) chỉ vì "ăn" vào lớp hàng cũ. LIFO reserve giảm từ 2.000 × (50 - 30) = 40.000 xuống 1.000 × 20 = 20.000: mức giảm 20.000 đúng bằng phần lợi nhuận tăng thêm.</p></details></div>
<ul>
<li><b>Hệ quả:</b> COGS thấp hơn, lợi nhuận gộp và lợi nhuận ròng cao hơn, thuế phải nộp cao hơn (mất lợi thế thuế của LIFO).</li>
<li><b>Không bền vững:</b> phần lợi nhuận tăng thêm không đến từ hoạt động tốt hơn. Nó có thể do thiếu hàng, nhu cầu giảm, hay ban lãnh đạo <b>cố ý</b> giảm mua để đẩy lợi nhuận.</li>
<li><b>Dấu hiệu nhận biết:</b> LIFO reserve giảm trong khi giá vẫn tăng; biên gộp tăng bất thường; số lượng tồn kho giảm. Công ty Mỹ thường thuyết minh ảnh hưởng của LIFO liquidation.</li>
</ul>
<p class="warn"><b>Bẫy:</b> LIFO reserve giảm không phải lúc nào cũng là liquidation. Nó cũng giảm khi <b>giá giảm</b>. Liquidation đòi hỏi <b>số lượng</b> tồn kho giảm.</p>`,
    },
    {
      title: '6. Lower of cost and NRV / market',
      minutes: 10,
      html: `
<p>Nguyên tắc thận trọng: tồn kho không được ghi cao hơn số tiền công ty có thể thu về khi bán. Khi giá bán giảm, hàng lỗi thời hoặc hư hỏng, tồn kho phải được <b>ghi giảm (write-down)</b>.</p>
<div class="formula">${t('nrv', 'Giá trị thuần có thể thực hiện (NRV)')} = Giá bán ước tính - Chi phí ước tính để hoàn thành và bán</div>
<table class="plain"><thead><tr><th></th><th>IFRS (mọi phương pháp)</th><th>US GAAP: FIFO, bình quân</th><th>US GAAP: LIFO, phương pháp bán lẻ</th></tr></thead><tbody>
<tr><td>Quy tắc</td><td>Thấp hơn giữa giá gốc và NRV</td><td>Thấp hơn giữa giá gốc và NRV</td><td>${t('lcm', 'Thấp hơn giữa giá gốc và giá thị trường (lower of cost or market)')}</td></tr>
<tr><td>"Giá trị thay thế"</td><td>NRV</td><td>NRV</td><td>Market = chi phí thay thế, nhưng bị kẹp trong khoảng [NRV - lợi nhuận bình thường; NRV]</td></tr>
<tr><td>Hoàn nhập khi giá hồi phục</td><td><b>Được</b>, tối đa bằng số đã ghi giảm (không vượt giá gốc)</td><td><b>Không</b></td><td><b>Không</b></td></tr>
</tbody></table>
<p>Hoàn nhập theo IFRS được ghi giảm COGS (hoặc chi phí) của kỳ hoàn nhập. Theo US GAAP, giá trị sau khi ghi giảm trở thành <b>giá gốc mới</b>.</p>

<div class="example"><div class="ex-h">Ví dụ 6.1 - Cùng một món hàng, ba quy tắc</div>
<p>Giá gốc 200/đơn vị. Chi phí thay thế hiện tại 170. Giá bán ước tính 210, chi phí bán hàng 20, biên lợi nhuận bình thường 15. Tính giá trị ghi sổ mỗi đơn vị theo (a) IFRS; (b) US GAAP nếu công ty dùng LIFO.</p>
<details><summary>Xem lời giải</summary>
<p>NRV = 210 - 20 = <b>190</b>. Cận dưới = NRV - lợi nhuận bình thường = 190 - 15 = <b>175</b>.</p>
<p>(a) IFRS: min(200; 190) = <b>190</b>. Ghi giảm 10/đơn vị.<br>
(b) US GAAP, LIFO: chi phí thay thế 170 nằm dưới cận dưới 175, nên market = <b>175</b> (giá trị ở giữa của 170, 175, 190). Giá ghi sổ = min(200; 175) = <b>175</b>. Ghi giảm 25/đơn vị.</p>
<p>Năm sau, giá bán hồi phục và NRV lên 205. Theo IFRS, hoàn nhập 10 về đúng giá gốc 200 (không lên 205). Theo US GAAP, giữ nguyên 175.</p></details></div>
<p class="tip"><b>Mẹo "market":</b> viết ba số (cận trên NRV, chi phí thay thế, cận dưới NRV - biên lợi nhuận), lấy <b>số ở giữa</b>, rồi so với giá gốc lấy số nhỏ hơn.</p>

<h4>Ảnh hưởng của việc ghi giảm</h4>
<ul>
<li><b>Kỳ ghi giảm:</b> tồn kho giảm, COGS (hoặc chi phí khác) tăng, lợi nhuận và vốn chủ giảm. Current ratio giảm; vòng quay tồn kho tăng (mẫu số nhỏ hơn); D/E tăng; biên lợi nhuận và ROA kỳ này giảm.</li>
<li><b>Kỳ sau:</b> hàng đã ghi giảm khi bán sẽ có COGS thấp hơn, nên biên lợi nhuận kỳ sau <b>cao hơn</b>.</li>
<li>Không có ảnh hưởng tiền mặt trực tiếp (trừ hiệu ứng thuế nếu được khấu trừ).</li>
</ul>
<p class="warn"><b>Bẫy:</b> công ty dùng LIFO trong lạm phát ít khi phải ghi giảm, vì tồn kho của họ được ghi theo giá cũ, rất thấp. Ghi giảm là rủi ro lớn hơn với FIFO và bình quân. Ngoài ra, một số ngành (nông sản, khoáng sản, môi giới hàng hóa) được phép ghi tồn kho theo NRV hoặc giá trị hợp lý trừ chi phí bán, với thay đổi ghi vào lãi lỗ.</p>`,
    },
    {
      title: '7. Trình bày, thuyết minh và những điều cần soi',
      minutes: 5,
      html: `
<h4>Công ty phải thuyết minh</h4>
<ul>
<li>Chính sách kế toán và ${t('costformula', 'phương pháp tính giá (cost formula)')} áp dụng.</li>
<li>Giá trị ghi sổ theo nhóm: nguyên vật liệu, sản phẩm dở dang, thành phẩm (hoặc hàng hóa).</li>
<li>Giá trị tồn kho ghi theo NRV hoặc giá trị hợp lý trừ chi phí bán; số ghi giảm và (IFRS) số hoàn nhập trong kỳ cùng lý do hoàn nhập.</li>
<li>Giá trị tồn kho đem cầm cố, thế chấp cho khoản vay.</li>
<li>Tổng giá vốn ghi nhận là chi phí trong kỳ. Công ty LIFO (US GAAP): LIFO reserve và ảnh hưởng của LIFO liquidation.</li>
</ul>

<h4>Nhà phân tích cần soi</h4>
<table class="plain"><thead><tr><th>Dấu hiệu</th><th>Có thể có nghĩa là</th></tr></thead><tbody>
<tr><td>Nguyên vật liệu và dở dang tăng, thành phẩm ổn định</td><td>Công ty đang chuẩn bị cho nhu cầu tăng (tín hiệu tốt)</td></tr>
<tr><td>Thành phẩm tăng nhanh hơn doanh thu</td><td>Nhu cầu yếu, hàng chậm bán, nguy cơ lỗi thời và ghi giảm sau này</td></tr>
<tr><td>Vòng quay tồn kho giảm dần, DOH tăng</td><td>Quản lý tồn kho kém hoặc hàng lỗi thời</td></tr>
<tr><td>Vòng quay rất cao so với ngành, doanh thu tăng chậm</td><td>Có thể thiếu hàng, mất doanh thu</td></tr>
<tr><td>Ghi giảm lớn, sau đó biên lợi nhuận tăng vọt</td><td>Có thể "dọn dẹp" để làm đẹp lợi nhuận kỳ sau</td></tr>
<tr><td>Đổi phương pháp tính giá</td><td>Phải đọc lý do; so sánh giữa các kỳ bị ảnh hưởng</td></tr>
</tbody></table>
<p class="tip"><b>Đổi phương pháp:</b> IFRS yêu cầu áp dụng <b>hồi tố</b> (điều chỉnh lại số liệu các kỳ trước). US GAAP cũng hồi tố, trừ trường hợp chuyển <b>sang LIFO</b> thì áp dụng <b>phi hồi tố</b>: giá trị tồn kho hiện tại trở thành lớp LIFO đầu tiên. Nguồn thông tin khác ngoài báo cáo: báo cáo ngành, giá hàng hóa đầu vào, bình luận của ban lãnh đạo (MD&amp;A).</p>`,
    },
    {
      title: '8. Tóm tắt và bẫy thường gặp',
      minutes: 3,
      html: `
<table class="plain"><thead><tr><th>Tình huống</th><th>Nhớ</th></tr></thead><tbody>
<tr><td>LIFO</td><td>Chỉ US GAAP; IFRS cấm</td></tr>
<tr><td>Lạm phát, LIFO so với FIFO</td><td>COGS cao, lợi nhuận thấp, thuế thấp, CFO cao, tồn kho thấp, vòng quay cao</td></tr>
<tr><td>Giảm phát</td><td>Mọi chiều đảo ngược</td></tr>
<tr><td>Bình quân</td><td>Luôn nằm giữa FIFO và LIFO</td></tr>
<tr><td>LIFO sang FIFO</td><td>Tồn kho + reserve; COGS - ΔReserve; NI + ΔReserve × (1 - t); vốn chủ + reserve × (1 - t)</td></tr>
<tr><td>LIFO liquidation</td><td>Số lượng giảm, lớp cũ vào COGS, lợi nhuận tăng không bền vững</td></tr>
<tr><td>IFRS</td><td>Lower of cost and NRV; được hoàn nhập tối đa số đã ghi giảm</td></tr>
<tr><td>US GAAP</td><td>LIFO / bán lẻ: lower of cost or market (market = số giữa); không hoàn nhập</td></tr>
<tr><td>Ghi giảm</td><td>Kỳ này lợi nhuận giảm, kỳ sau biên lợi nhuận tăng</td></tr>
</tbody></table>
<p>Tiếp theo: tab <b>Luyện tập</b> - 10 câu (rút ngẫu nhiên từ ngân hàng 30 câu, mỗi lần làm một bộ khác). Module sau: FSA-07 Analysis of Long-Term Assets.</p>`,
    },
  ];

  const glossary = {
    cogs: ['Cost of goods sold (COGS)', 'Giá vốn hàng bán', 'Giá gốc của hàng đã bán trong kỳ, ghi nhận là chi phí.'],
    specid: ['Specific identification', 'Thực tế đích danh', 'Theo dõi giá gốc của từng món hàng; dùng cho hàng giá trị lớn, không thay thế được.'],
    fifo: ['First-in, first-out (FIFO)', 'Nhập trước, xuất trước', 'Hàng mua sớm nhất được coi là bán trước; tồn kho cuối kỳ là hàng mua gần nhất.'],
    lifo: ['Last-in, first-out (LIFO)', 'Nhập sau, xuất trước', 'Hàng mua gần nhất được coi là bán trước; chỉ được phép theo US GAAP.'],
    wac: ['Weighted average cost', 'Bình quân gia quyền', 'Giá gốc bình quân = tổng giá hàng sẵn có để bán / số đơn vị sẵn có.'],
    conformity: ['LIFO conformity rule', 'Quy định nhất quán LIFO', 'Ở Mỹ, công ty dùng LIFO để tính thuế phải dùng LIFO trên báo cáo tài chính.'],
    replace: ['Current replacement cost', 'Chi phí thay thế hiện tại', 'Số tiền phải trả hôm nay để mua lại hàng tồn kho.'],
    reserve: ['LIFO reserve', 'Dự phòng LIFO', 'Chênh lệch giữa tồn kho theo FIFO và theo LIFO; công ty LIFO phải thuyết minh.'],
    layer: ['LIFO layer', 'Lớp tồn kho LIFO', 'Phần tồn kho tăng thêm của mỗi năm, ghi theo giá của năm đó.'],
    liquid: ['LIFO liquidation', 'Thanh lý lớp LIFO', 'Số lượng tồn kho giảm khiến các lớp cũ giá thấp vào COGS, đẩy lợi nhuận lên tạm thời.'],
    nrv: ['Net realisable value (NRV)', 'Giá trị thuần có thể thực hiện', 'Giá bán ước tính trừ chi phí ước tính để hoàn thành và bán.'],
    lcm: ['Lower of cost or market (LCM)', 'Thấp hơn giữa giá gốc và giá thị trường', 'US GAAP cho LIFO và bán lẻ; market = chi phí thay thế, kẹp giữa NRV - biên lợi nhuận bình thường và NRV.'],
    costformula: ['Cost formula', 'Phương pháp tính giá xuất kho', 'FIFO, bình quân, thực tế đích danh (và LIFO theo US GAAP).'],
  };

  const practice = [
    { q: 'Tồn đầu kỳ 200 đơn vị giá 20; mua 300 đơn vị giá 22; mua tiếp 250 đơn vị giá 25; bán 600 đơn vị. Theo FIFO (kiểm kê định kỳ), COGS là:', choices: ['13.100', '13.480', '13.850'], answer: 0, explain: 'FIFO: 200 x 20 + 300 x 22 + 100 x 25 = 13.100. Con số 13.480 là bình quân (16.850 / 750 x 600 = 13.480). Con số 13.850 là LIFO (250 x 25 + 300 x 22 + 50 x 20).' },
    { q: 'Giá đầu vào tăng, số lượng tồn kho ổn định. So với công ty dùng LIFO, công ty giống hệt dùng FIFO sẽ báo cáo:', choices: ['COGS cao hơn và tồn kho thấp hơn', 'Biên lợi nhuận gộp cao hơn và current ratio cao hơn', 'CFO cao hơn vì lợi nhuận cao hơn'], answer: 1, explain: 'FIFO đẩy hàng cũ giá rẻ vào COGS: COGS thấp, lợi nhuận gộp cao; tồn kho là hàng mới giá đắt nên current ratio cao. COGS cao hơn và tồn kho thấp hơn là đặc điểm của LIFO. Phương án "CFO cao hơn" sai: FIFO nộp thuế nhiều hơn nên CFO thấp hơn.' },
    { q: 'Công ty dùng LIFO có COGS 30.000. LIFO reserve đầu năm 800, cuối năm 1.100. COGS theo FIFO là:', choices: ['30.300', '28.900', '29.700'], answer: 2, explain: 'COGS FIFO = COGS LIFO - ΔLIFO reserve = 30.000 - (1.100 - 800) = 29.700. Con số 30.300 cộng thay vì trừ. Con số 28.900 trừ số dư cuối kỳ thay vì mức thay đổi.' },
    { q: 'Công ty dùng LIFO có LIFO reserve đầu năm 800, cuối năm 1.100; lợi nhuận ròng theo LIFO 4.000, thuế suất 30%. Lợi nhuận ròng theo FIFO gần nhất với:', choices: ['4.210', '4.300', '4.770'], answer: 0, explain: 'NI FIFO = 4.000 + 300 x (1 - 0,30) = 4.210. Con số 4.300 quên tác động thuế. Con số 4.770 dùng số dư LIFO reserve (1.100 x 0,7): số dư dùng cho vốn chủ, không dùng cho lợi nhuận của một năm.' },
    { q: 'Một công ty theo US GAAP dùng LIFO. Giá gốc 88/đơn vị; chi phí thay thế 80; giá bán ước tính 95; chi phí bán 6; biên lợi nhuận bình thường 12. Giá trị ghi sổ mỗi đơn vị là:', choices: ['77', '80', '88'], answer: 1, explain: 'NRV = 95 - 6 = 89; cận dưới = 89 - 12 = 77. Market = số ở giữa của (89; 80; 77) = 80. Ghi sổ = min(88; 80) = 80. Con số 88 là kết quả theo lower of cost and NRV (88 < 89, không ghi giảm). Con số 77 lấy nhầm cận dưới.' },
    { q: 'Công ty theo IFRS ghi giảm tồn kho từ giá gốc 500 xuống NRV 420 vào năm 1. Năm 2, hàng chưa bán và NRV hồi phục lên 530. Giá trị ghi sổ cuối năm 2 là:', choices: ['420', '530', '500'], answer: 2, explain: 'IFRS cho phép hoàn nhập, nhưng tối đa bằng số đã ghi giảm (80), nên giá trị ghi sổ về lại giá gốc 500. Con số 420 là cách làm US GAAP (không hoàn nhập). Con số 530 vượt giá gốc - không được phép.' },
    { q: 'Trong giai đoạn giá tăng, công ty dùng LIFO giảm mạnh số lượng tồn kho. So với trường hợp duy trì tồn kho, năm đó công ty nhiều khả năng có:', choices: ['COGS cao hơn và thuế thấp hơn', 'Biên lợi nhuận gộp cao hơn nhưng không bền vững, và thuế cao hơn', 'LIFO reserve tăng'], answer: 1, explain: 'LIFO liquidation: lớp cũ giá rẻ vào COGS, COGS giảm, lợi nhuận và thuế tăng; lợi nhuận tăng thêm không lặp lại. LIFO reserve giảm (không tăng) vì lớp cũ bị dùng hết.' },
    { q: 'Trong lạm phát, vì sao vòng quay tồn kho của công ty dùng LIFO thường cao hơn công ty dùng FIFO?', choices: ['LIFO có COGS cao hơn và tồn kho thấp hơn', 'LIFO có doanh thu cao hơn', 'LIFO bán hàng nhanh hơn trên thực tế'], answer: 0, explain: 'Vòng quay = COGS / tồn kho bình quân. LIFO có tử số lớn hơn, mẫu số nhỏ hơn. Đây là khác biệt kế toán; doanh thu và tốc độ bán thực tế không đổi, nên hai phương án về doanh thu và tốc độ bán đều sai.' },
    { q: 'Thuyết minh cho thấy thành phẩm tăng 40% trong khi doanh thu chỉ tăng 5% và nguyên vật liệu giảm. Diễn giải hợp lý nhất:', choices: ['Công ty đang chuẩn bị cho nhu cầu tăng mạnh trong tương lai', 'Công ty chuyển từ FIFO sang LIFO', 'Nhu cầu có thể đang yếu đi, nguy cơ hàng chậm bán và phải ghi giảm'], answer: 2, explain: 'Thành phẩm tồn đọng tăng nhanh hơn nhiều so với doanh thu là dấu hiệu hàng khó bán. Nếu chuẩn bị cho nhu cầu tăng, thường thấy nguyên vật liệu và dở dang tăng. Việc chuyển từ FIFO sang LIFO không suy ra được từ dữ liệu này.' },
    { q: 'Phát biểu nào đúng theo IFRS?', choices: ['Công ty được chọn LIFO nếu giá đầu vào tăng ổn định', 'Tồn kho đo theo giá thấp hơn giữa giá gốc và NRV; LIFO bị cấm; được hoàn nhập ghi giảm tối đa bằng số đã ghi giảm', 'Không được hoàn nhập số đã ghi giảm tồn kho'], answer: 1, explain: 'IFRS cấm LIFO nên phương án được chọn LIFO sai; IFRS cho phép hoàn nhập nên phương án không được hoàn nhập cũng sai (đó là quy định US GAAP).' },
    { q: "Một công ty theo US GAAP dùng LIFO (kiểm kê định kỳ). Tồn đầu kỳ 100 đơn vị giá 8; mua 300 đơn vị giá 9; mua tiếp 200 đơn vị giá 11; bán 450 đơn vị. COGS gần nhất với:", choices: ["4.450", "4.050", "4.275"], answer: 0, explain: "LIFO đưa hàng mua gần nhất vào COGS: 200 × 11 + 250 × 9 = 4.450. Con số 4.050 là COGS theo FIFO (100 × 8 + 300 × 9 + 50 × 11). Con số 4.275 là COGS theo bình quân gia quyền (450 × 9,50)." },
    { q: "Tồn đầu kỳ 50 đơn vị giá 20; mua 150 đơn vị giá 24; mua tiếp 100 đơn vị giá 26; bán 220 đơn vị. Theo phương pháp bình quân gia quyền (kiểm kê định kỳ), giá trị tồn kho cuối kỳ là:", choices: ["2.080", "1.920", "1.720"], answer: 1, explain: "Tổng giá hàng sẵn có = 1.000 + 3.600 + 2.600 = 7.200 cho 300 đơn vị, giá bình quân 24; tồn cuối kỳ 80 đơn vị × 24 = 1.920. Con số 2.080 là tồn kho theo FIFO (80 × 26). Con số 1.720 là tồn kho theo LIFO (50 × 20 + 30 × 24)." },
    { q: "Khoản chi nào sau đây được vốn hóa vào giá gốc hàng tồn kho?", choices: ["Nguyên vật liệu hao hụt bất thường trong sản xuất", "Chi phí lưu kho thành phẩm chờ bán", "Chi phí vận chuyển nguyên vật liệu mua về đến kho"], answer: 2, explain: "Chi phí vận chuyển để đưa hàng đến địa điểm sẵn sàng sử dụng là một phần giá gốc. Hao hụt bất thường ghi chi phí ngay. Chi phí lưu kho thành phẩm ghi chi phí ngay, trừ khi việc lưu kho cần thiết cho quá trình sản xuất." },
    { q: "Một công ty Mỹ chọn dùng LIFO khi tính thuế thu nhập. Theo quy định LIFO conformity, công ty phải:", choices: ["Dùng LIFO cả trên báo cáo tài chính", "Dùng FIFO trên báo cáo tài chính để phản ánh giá hiện tại", "Trình bày báo cáo tài chính theo IFRS"], answer: 0, explain: "Quy định LIFO conformity ở Mỹ yêu cầu công ty dùng LIFO cho thuế thì cũng dùng LIFO trên BCTC. Dùng FIFO trên BCTC sẽ vi phạm quy định này. IFRS cấm LIFO, nên không thể vừa dùng LIFO vừa trình bày theo IFRS." },
    { q: "Trong giai đoạn giá đầu vào giảm liên tục và số lượng tồn kho ổn định, so với công ty dùng FIFO, công ty giống hệt dùng LIFO sẽ báo cáo:", choices: ["COGS cao hơn và lợi nhuận thấp hơn", "Tồn kho cuối kỳ thấp hơn", "Biên lợi nhuận gộp cao hơn và tồn kho cuối kỳ cao hơn"], answer: 2, explain: "Khi giá giảm, mọi chiều đảo ngược so với lạm phát: LIFO đưa hàng mua gần nhất (rẻ hơn) vào COGS, nên COGS thấp hơn, biên gộp cao hơn; tồn kho còn lại là hàng cũ giá cao hơn. \"COGS cao hơn\" và \"tồn kho thấp hơn\" là kết quả của LIFO trong lạm phát, không phải giảm phát." },
    { q: "Hai công ty giống hệt nhau, một dùng LIFO, một dùng FIFO, trong giai đoạn giá tăng. Đề bài yêu cầu bỏ qua thuế thu nhập. So sánh CFO của hai công ty:", choices: ["CFO của công ty LIFO cao hơn vì COGS cao hơn", "CFO của hai công ty bằng nhau", "CFO của công ty FIFO cao hơn vì lợi nhuận cao hơn"], answer: 1, explain: "Lợi thế dòng tiền của LIFO đến chỉ từ việc nộp thuế ít hơn. Khi bỏ qua thuế, tiền chi mua hàng như nhau bất kể phương pháp tính giá, nên CFO bằng nhau. Lợi nhuận cao hơn theo FIFO là khác biệt dồn tích, không phải tiền." },
    { q: "Trong giai đoạn giá tăng, phương pháp nào cho giá trị tồn kho trên bảng cân đối gần nhất với chi phí thay thế hiện tại?", choices: ["FIFO", "LIFO", "Bình quân gia quyền"], answer: 0, explain: "FIFO để lại trong kho hàng mua gần nhất, nên tồn kho gần với chi phí thay thế hiện tại. LIFO để lại hàng cũ giá thấp, nên tồn kho bị đánh giá thấp; LIFO \"đúng\" ở báo cáo kết quả kinh doanh vì COGS gần chi phí hiện tại. Bình quân luôn nằm giữa hai phương pháp." },
    { q: "Một công ty theo US GAAP dùng LIFO có tài sản ngắn hạn 12.000 (gồm tồn kho LIFO 5.200) và nợ ngắn hạn 8.000. LIFO reserve đầu năm 700, cuối năm 900. Current ratio sau khi chuyển tồn kho sang FIFO (bỏ qua ảnh hưởng thuế lên nợ ngắn hạn) gần nhất với:", choices: ["1,50", "1,53", "1,61"], answer: 2, explain: "Tồn kho FIFO = tồn kho LIFO + số dư LIFO reserve cuối kỳ, nên tài sản ngắn hạn = 12.000 + 900 = 12.900; current ratio = 12.900/8.000 = 1,61. Con số 1,50 là current ratio theo LIFO. Con số 1,53 cộng nhầm mức thay đổi của LIFO reserve (200) thay vì số dư." },
    { q: "Một công ty dùng LIFO có vốn chủ sở hữu 10.000. LIFO reserve đầu năm 900, cuối năm 1.200; thuế suất 25%. Vốn chủ sở hữu sau khi điều chỉnh sang FIFO gần nhất với:", choices: ["10.900", "11.200", "10.225"], answer: 0, explain: "Vốn chủ tăng bằng số dư LIFO reserve cuối kỳ sau thuế: 10.000 + 1.200 × 0,75 = 10.900; phần 1.200 × 0,25 = 300 ghi vào thuế hoãn lại phải trả. Con số 11.200 quên ảnh hưởng thuế. Con số 10.225 chỉ dùng phần tăng LIFO reserve trong năm (300 × 0,75), trong khi vốn chủ phản ánh chênh lệch lũy kế." },
    { q: "Một công ty dùng LIFO có doanh thu 50.000 và COGS 32.000. LIFO reserve đầu năm 2.000, cuối năm 2.600. Biên lợi nhuận gộp theo FIFO gần nhất với:", choices: ["36,00%", "37,20%", "41,20%"], answer: 1, explain: "COGS FIFO = COGS LIFO - thay đổi LIFO reserve = 32.000 - 600 = 31.400; biên gộp = (50.000 - 31.400)/50.000 = 37,20%. Con số 36,00% là biên gộp theo LIFO. Con số 41,20% trừ cả số dư LIFO reserve cuối kỳ thay vì mức thay đổi." },
    { q: "Một công ty dùng LIFO có lớp tồn kho cũ 1.500 đơn vị giá 40. Trong năm, giá hiện tại là 60; công ty mua 6.000 đơn vị và bán 7.000 đơn vị giá 90. So với trường hợp mua đủ số lượng bán ra ở giá hiện tại, phần lợi nhuận gộp tăng thêm do LIFO liquidation gần nhất với:", choices: ["0", "30.000", "20.000"], answer: 2, explain: "COGS LIFO = 6.000 × 60 + 1.000 × 40 = 400.000, so với 7.000 × 60 = 420.000 nếu mua đủ: lợi nhuận gộp tăng 1.000 × (60 - 40) = 20.000. Con số 30.000 giả định toàn bộ lớp cũ 1.500 đơn vị bị bán. Con số 0 bỏ qua việc lớp hàng cũ giá thấp đã chạy vào COGS." },
    { q: "LIFO reserve của một công ty giảm trong năm, trong khi số lượng tồn kho tăng. Giải thích hợp lý nhất là:", choices: ["Giá đầu vào đã giảm", "Đã xảy ra LIFO liquidation", "Công ty đã ghi giảm tồn kho theo NRV"], answer: 0, explain: "LIFO reserve là chênh lệch giữa giá trị FIFO và LIFO; nó giảm khi giá đầu vào giảm. LIFO liquidation đòi hỏi số lượng tồn kho giảm, mâu thuẫn với dữ kiện số lượng tăng. Ghi giảm theo NRV không phải lý do điển hình làm LIFO reserve giảm và không được nêu trong dữ kiện." },
    { q: "Theo IFRS, một sản phẩm dở dang có giá gốc 150. Giá bán ước tính 160, chi phí ước tính để hoàn thành 12 và chi phí bán hàng 8. Giá trị ghi sổ của sản phẩm là:", choices: ["150", "140", "148"], answer: 1, explain: "NRV = giá bán ước tính - chi phí để hoàn thành - chi phí bán = 160 - 12 - 8 = 140; theo IFRS ghi theo giá thấp hơn giữa giá gốc và NRV: min(150; 140) = 140. Con số 150 bỏ qua yêu cầu ghi giảm. Con số 148 quên trừ chi phí bán hàng khi tính NRV." },
    { q: "Một công ty theo US GAAP dùng FIFO. Giá gốc 60/đơn vị; chi phí thay thế 50; giá bán ước tính 70; chi phí bán 5; biên lợi nhuận bình thường 8. Giá trị ghi sổ mỗi đơn vị là:", choices: ["57", "50", "60"], answer: 2, explain: "Theo US GAAP, công ty dùng FIFO hoặc bình quân áp dụng giá thấp hơn giữa giá gốc và NRV: NRV = 70 - 5 = 65, min(60; 65) = 60, không phải ghi giảm. Con số 57 áp dụng nhầm quy tắc lower of cost or market (market = số giữa của 65, 50, 57), chỉ dành cho LIFO và phương pháp bán lẻ. Con số 50 dùng chi phí thay thế." },
    { q: "Một công ty theo US GAAP dùng LIFO. Giá gốc 100/đơn vị; chi phí thay thế 108; giá bán ước tính 105; chi phí bán 7; biên lợi nhuận bình thường 10. Giá trị ghi sổ mỗi đơn vị là:", choices: ["98", "100", "88"], answer: 0, explain: "Với LIFO, áp dụng lower of cost or market. NRV (cận trên) = 105 - 7 = 98; cận dưới = 98 - 10 = 88; chi phí thay thế 108 vượt cận trên nên market = 98 (số ở giữa của 98, 108, 88). Giá ghi sổ = min(100; 98) = 98. Con số 100 bỏ qua việc market thấp hơn giá gốc. Con số 88 lấy nhầm cận dưới." },
    { q: "Năm 1, một công ty ghi giảm mạnh tồn kho xuống NRV. Năm 2, số hàng đó được bán. So với trường hợp không ghi giảm, nhiều khả năng:", choices: ["Biên lợi nhuận gộp năm 1 cao hơn", "Vòng quay tồn kho năm 1 thấp hơn", "Biên lợi nhuận gộp năm 2 cao hơn"], answer: 2, explain: "Ghi giảm làm chi phí năm 1 tăng, nên biên lợi nhuận năm 1 thấp hơn. Năm 2, hàng đã ghi giảm khi bán có COGS thấp hơn, nên biên gộp năm 2 cao hơn. Tồn kho nhỏ hơn làm vòng quay tồn kho năm 1 cao hơn, không phải thấp hơn." },
    { q: "Theo IFRS, tồn kho giá gốc 80 được ghi giảm xuống NRV 65 trong năm 1. Cuối năm 2, hàng chưa bán và NRV hồi phục lên 75. Giá trị ghi sổ cuối năm 2 và cách ghi nhận là:", choices: ["75; hoàn nhập 10, ghi giảm giá vốn hàng bán năm 2", "65; không được hoàn nhập khoản đã ghi giảm", "80; hoàn nhập toàn bộ 15 về giá gốc"], answer: 0, explain: "IFRS cho hoàn nhập khi NRV hồi phục, tối đa bằng số đã ghi giảm: tồn kho lên min(80; 75) = 75, hoàn nhập 10 ghi giảm COGS của kỳ hoàn nhập. \"Không được hoàn nhập\" là quy định của US GAAP. Hoàn nhập về 80 sai vì NRV chỉ là 75." },
    { q: "Thuyết minh tồn kho của một công ty sản xuất cho thấy nguyên vật liệu và sản phẩm dở dang tăng mạnh, trong khi thành phẩm ổn định và doanh thu tăng đều. Diễn giải hợp lý nhất:", choices: ["Nhu cầu đang yếu, hàng chậm bán và có nguy cơ ghi giảm", "Công ty đang chuẩn bị sản xuất cho nhu cầu tăng", "Công ty vừa chuyển từ LIFO sang FIFO"], answer: 1, explain: "Nguyên vật liệu và dở dang tăng trong khi thành phẩm ổn định thường là dấu hiệu chuẩn bị cho nhu cầu tăng. Nhu cầu yếu thể hiện qua thành phẩm tăng nhanh hơn doanh thu, không phải trường hợp này. Thay đổi phương pháp tính giá không làm thay đổi cơ cấu nguyên vật liệu, dở dang, thành phẩm theo cách này." },
    { q: "Theo US GAAP, một công ty chuyển phương pháp tính giá tồn kho từ FIFO sang LIFO. Thay đổi này được áp dụng:", choices: ["Hồi tố, trình bày lại số liệu các kỳ trước theo LIFO", "Không được phép vì LIFO bị cấm", "Phi hồi tố: giá trị tồn kho hiện tại trở thành lớp LIFO đầu tiên"], answer: 2, explain: "US GAAP thường yêu cầu áp dụng hồi tố khi đổi phương pháp, trừ trường hợp chuyển sang LIFO thì áp dụng phi hồi tố, với giá trị tồn kho hiện tại là lớp LIFO cơ sở. LIFO chỉ bị cấm theo IFRS, không bị cấm theo US GAAP." },
    { q: "Một công ty có doanh thu 10.950, COGS 7.300, tồn kho đầu năm 800 và cuối năm 1.200. Số ngày tồn kho (DOH, 365 ngày) tính trên tồn kho bình quân gần nhất với:", choices: ["60,0", "50,0", "33,3"], answer: 1, explain: "Vòng quay tồn kho = COGS/tồn kho bình quân = 7.300/1.000 = 7,3; DOH = 365/7,3 = 50,0 ngày. Con số 60,0 dùng tồn kho cuối năm. Con số 33,3 dùng doanh thu thay vì COGS ở tử số của vòng quay." },
  ];

  // Widget: so sánh FIFO, LIFO, bình quân. Tồn đầu 100 đơn vị giá 10, mua 2 lần, mỗi lần 200 đơn vị.
  const widgets = {
    inventoryMethods(el) {
      el.innerHTML = `
        <div class="w-row"><label>Thay đổi giá mỗi lần mua: <b data-o="g">+20%</b><input type="range" min="-20" max="30" step="5" value="20" data-i="g"></label>
        <label>Số lượng bán: <b data-o="s">350</b><input type="range" min="100" max="500" step="25" value="350" data-i="s"></label></div>
        <div class="w-out"><div class="w-price" data-o="p"></div><div data-o="tbl"></div><div class="w-note" data-o="note"></div></div>`;
      const q = s => el.querySelector(s);
      const f = x => x.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.');
      const cogs = (lay, n) => { let c = 0, r = n; lay.forEach(([u, p]) => { const k = Math.min(u, r); c += k * p; r -= k; }); return c; };
      const upd = () => {
        const g = +q('[data-i="g"]').value / 100, s = +q('[data-i="s"]').value;
        const lay = [[100, 10], [200, 10 * (1 + g)], [200, 10 * (1 + g) ** 2]];
        const total = lay.reduce((a, [u, p]) => a + u * p, 0);
        const rows = [['FIFO', cogs(lay, s)], ['LIFO', cogs(lay.slice().reverse(), s)], ['Bình quân', (total / 500) * s]];
        q('[data-o="g"]').textContent = `${g >= 0 ? '+' : ''}${Math.round(g * 100)}%`;
        q('[data-o="s"]').textContent = s;
        q('[data-o="p"]').textContent = `Giá các lớp: 10 / ${f(lay[1][1])} / ${f(lay[2][1])} - hàng sẵn có ${f(total)}`;
        q('[data-o="tbl"]').innerHTML = `<table class="plain"><thead><tr><th></th><th>COGS</th><th>Tồn kho cuối kỳ</th></tr></thead><tbody>${rows.map(([n, c]) => `<tr><td>${n}</td><td>${f(c)}</td><td>${f(total - c)}</td></tr>`).join('')}</tbody></table>`;
        q('[data-o="note"]').textContent = g > 0 ? 'Giá tăng: LIFO có COGS cao nhất và tồn kho thấp nhất; bình quân nằm giữa.'
          : g < 0 ? 'Giá giảm: chiều đảo ngược, LIFO có COGS thấp nhất và tồn kho cao nhất.'
            : 'Giá không đổi: ba phương pháp cho cùng kết quả.';
      };
      el.addEventListener('input', upd);
      upd();
    },
  };

  window.LESSONS['FSA-06'] = {
    moduleId: 'FSA-06',
    calculator: 'BA II Plus',
    warmup: [
      'Ôn FSA-05: tồn kho tăng 100 làm CFO (phương pháp gián tiếp) thay đổi thế nào?',
      'Tồn đầu kỳ + mua trong kỳ = ? + ? (điền hai khoản mục).',
      'Theo bạn, khi giá đầu vào tăng, công ty muốn báo cáo lợi nhuận cao hay nộp thuế ít? Có thể có cả hai không?',
    ],
    sections,
    glossary,
    practice,
    widgets,
    slides: [],
    wrapup: [
      'Viết 4 công thức chuyển LIFO sang FIFO (tồn kho, COGS, lợi nhuận ròng, vốn chủ).',
      'Lập bảng so sánh IFRS và US GAAP về đo lường và hoàn nhập ghi giảm tồn kho.',
      'Giải thích bằng lời vì sao LIFO liquidation làm lợi nhuận tăng nhưng không bền vững.',
    ],
  };
}());
