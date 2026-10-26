// Bài giảng FSA-12 - Introduction to Financial Statement Modeling (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t, frac } = window.CFAH;

  const sections = [
    {
      title: '1. Bức tranh lớn',
      minutes: 5,
      html: `
<p>FSA-11 dùng tỷ số để <b>nhìn lại</b> quá khứ. FSA-12 dùng chính các tỷ số đó để <b>nhìn về phía trước</b>: lập báo cáo tài chính dự phóng (pro forma) làm đầu vào cho định giá.</p>
<div class="key">Mô hình dựa trên doanh thu: dự báo <b>doanh thu</b> trước, rồi suy ra chi phí, tài sản và nguồn vốn qua các tỷ lệ so với doanh thu (biên lợi nhuận, vòng quay). Chất lượng mô hình phụ thuộc vào chất lượng giả định, và giả định chịu ảnh hưởng của cạnh tranh, lạm phát và chính tâm lý của nhà phân tích.</div>
<ol>
  <li>Xây dựng mô hình pro forma dựa trên doanh thu (LOS 1, phần 2).</li>
  <li>Thiên lệch hành vi trong dự báo và cách khắc phục (LOS 2, phần 3).</li>
  <li>Vị thế cạnh tranh theo năm lực lượng của Porter ảnh hưởng giá và chi phí (LOS 3, phần 4).</li>
  <li>Dự báo doanh thu và chi phí khi có lạm phát hoặc giảm phát (LOS 4, phần 5).</li>
  <li>Chọn độ dài giai đoạn dự báo chi tiết và cách xử lý giai đoạn sau đó (LOS 5, phần 6).</li>
</ol>`,
    },
    {
      title: '2. Mô hình pro forma dựa trên doanh thu',
      minutes: 25,
      html: `
<h4>Bước 1: dự báo doanh thu</h4>
<ul>
<li>${t('topdown', 'Từ trên xuống (top-down)')}: bắt đầu từ kinh tế vĩ mô (GDP, lạm phát) → quy mô ngành → thị phần của công ty. Ví dụ: tăng trưởng doanh thu = tăng trưởng GDP danh nghĩa cộng hoặc trừ một biên độ.</li>
<li>${t('bottomup', 'Từ dưới lên (bottom-up)')}: cộng từ từng sản phẩm, khu vực, cửa hàng; hoặc phân tích theo sản lượng và giá; hoặc theo năng lực sản xuất.</li>
<li>${t('hybrid', 'Kết hợp (hybrid)')}: dùng cả hai và đối chiếu, cách thường dùng nhất trong thực tế.</li>
</ul>
<h4>Bước 2: chi phí</h4>
<ul>
<li><b>Giá vốn</b>: thường dự báo theo % doanh thu (biên lợi nhuận gộp), hoặc tách theo từng loại đầu vào nếu biến động giá đầu vào lớn.</li>
<li><b>SG&amp;A</b>: tách phần <b>cố định</b> và phần <b>biến đổi</b>. Phần cố định tạo ${t('oplev', 'đòn bẩy hoạt động')}: doanh thu tăng thì biên lợi nhuận hoạt động mở rộng.</li>
<li><b>Chi phí lãi vay</b>: lãi suất × nợ vay (đầu kỳ hoặc bình quân). <b>Thuế</b>: dùng thuế suất hiệu dụng đã điều chỉnh các khoản một lần (xem FSA-09).</li>
</ul>
<h4>Bước 3: bảng cân đối và dòng tiền</h4>
<ul>
<li>Vốn lưu động theo vòng quay hoặc số ngày (DSO, DOH, DPO) so với doanh thu hoặc giá vốn.</li>
<li>TSCĐ: đầu kỳ + đầu tư (capex) - khấu hao. Capex thường dự báo theo % doanh thu hoặc tỷ lệ so với khấu hao (công ty tăng trưởng có capex lớn hơn khấu hao).</li>
<li>Nguồn vốn: nợ theo kế hoạch vay, vốn chủ = đầu kỳ + lợi nhuận - cổ tức. Khoản <b>tiền</b> (hoặc vay thêm) là ${t('plug', 'khoản cân đối (plug)')}.</li>
</ul>
<div class="example"><div class="ex-h">Ví dụ 2.1 - Dự phóng một năm</div>
<p>Năm 0: doanh thu 2.000; bảng cân đối: tiền 100, phải thu 250, hàng tồn kho 240, TSCĐ ròng 1.500 (tổng 2.090); phải trả 120, nợ vay 1.000, vốn chủ 970.</p>
<p>Giả định năm 1: doanh thu tăng 10%; giá vốn 60% doanh thu; SG&amp;A = 200 cố định + 10% doanh thu; khấu hao 150 đã nằm trong giá vốn và SG&amp;A; lãi suất 6% trên nợ đầu kỳ, nợ không đổi; thuế suất 25%; chi trả cổ tức 40%; vòng quay phải thu (doanh thu / phải thu cuối kỳ) 8; vòng quay tồn kho (giá vốn / tồn kho) 5; vòng quay phải trả (giá vốn / phải trả) 10; capex 250.</p>
<details><summary>Xem lời giải</summary>
<table class="plain"><thead><tr><th>Báo cáo KQKD năm 1</th><th>Cách tính</th><th>Kết quả</th></tr></thead><tbody>
<tr><td>Doanh thu</td><td>2.000 × 1,10</td><td>2.200</td></tr>
<tr><td>Giá vốn</td><td>60% × 2.200</td><td>1.320</td></tr>
<tr><td>Lợi nhuận gộp</td><td></td><td>880</td></tr>
<tr><td>SG&amp;A</td><td>200 + 10% × 2.200</td><td>420</td></tr>
<tr><td>EBIT</td><td></td><td>460</td></tr>
<tr><td>Lãi vay</td><td>6% × 1.000</td><td>60</td></tr>
<tr><td>Lợi nhuận trước thuế</td><td></td><td>400</td></tr>
<tr><td>Thuế</td><td>25%</td><td>100</td></tr>
<tr><td><b>Lợi nhuận ròng</b></td><td></td><td><b>300</b></td></tr>
<tr><td>Cổ tức / giữ lại</td><td>40% / 60%</td><td>120 / 180</td></tr>
</tbody></table>
<table class="plain"><thead><tr><th>Bảng cân đối cuối năm 1</th><th>Cách tính</th><th>Kết quả</th></tr></thead><tbody>
<tr><td>Phải thu</td><td>2.200 / 8</td><td>275</td></tr>
<tr><td>Hàng tồn kho</td><td>1.320 / 5</td><td>264</td></tr>
<tr><td>TSCĐ ròng</td><td>1.500 + 250 - 150</td><td>1.600</td></tr>
<tr><td>Phải trả</td><td>1.320 / 10</td><td>132</td></tr>
<tr><td>Nợ vay</td><td>Không đổi</td><td>1.000</td></tr>
<tr><td>Vốn chủ</td><td>970 + 180</td><td>1.150</td></tr>
<tr><td>Tổng nguồn vốn</td><td>132 + 1.000 + 1.150</td><td>2.282</td></tr>
<tr><td><b>Tiền (plug)</b></td><td>2.282 - (275 + 264 + 1.600)</td><td><b>143</b></td></tr>
</tbody></table>
<p><b>Kiểm tra bằng dòng tiền:</b> CFO = 300 + 150 - 25 (phải thu tăng) - 24 (tồn kho tăng) + 12 (phải trả tăng) = 413. Trừ capex 250 và cổ tức 120: tiền tăng 43, từ 100 lên <b>143</b>. Khớp.</p>
<p>Biên EBIT tăng từ 400/2.000 = 20,0% lên 460/2.200 = 20,9% nhờ phần SG&amp;A cố định: đó là đòn bẩy hoạt động.</p></details></div>
<p class="tip"><b>Mẹo kiểm tra mô hình:</b> bảng cân đối phải cân và dòng tiền phải khớp với thay đổi của tiền. Nếu khoản plug là tiền âm, công ty cần vay thêm: chuyển plug sang nợ vay (và nhớ lãi vay tăng theo).</p>`,
    },
    {
      title: '3. Thiên lệch hành vi trong dự báo',
      minutes: 15,
      html: `
<table class="plain"><thead><tr><th>Thiên lệch</th><th>Biểu hiện trong dự báo</th><th>Cách khắc phục</th></tr></thead><tbody>
<tr><td>${t('overconf', 'Quá tự tin (overconfidence)')}</td><td>Khoảng dự báo quá hẹp, đánh giá quá cao độ chính xác của mình</td><td>Ghi lại và chấm điểm dự báo quá khứ; dùng kịch bản và khoảng tin cậy rộng hơn; nhờ người khác phản biện</td></tr>
<tr><td>${t('illusion', 'Ảo tưởng kiểm soát (illusion of control)')}</td><td>Tin rằng thêm dữ liệu, mô hình phức tạp hơn, gặp ban lãnh đạo nhiều hơn thì dự báo chính xác hơn</td><td>Giữ mô hình đơn giản, chỉ dùng biến thật sự quan trọng; kiểm tra xem biến mới có cải thiện dự báo không</td></tr>
<tr><td>${t('conservatism', 'Bảo thủ (conservatism bias)')}</td><td>Bám vào dự báo cũ, cập nhật quá chậm khi có thông tin mới</td><td>Cập nhật có hệ thống theo bằng chứng mới (tư duy Bayes); định kỳ xây lại mô hình từ đầu</td></tr>
<tr><td>${t('represent', 'Tính đại diện (representativeness)')}</td><td>Xếp công ty vào khuôn mẫu ("đây là cổ phiếu tăng trưởng") và bỏ qua ${t('baserate', 'tỷ lệ cơ sở (base rate)')}, ví dụ ít công ty duy trì được tăng trưởng 30% nhiều năm</td><td>Dùng tỷ lệ cơ sở của nhóm tham chiếu; xem phân phối kết quả thực tế của các công ty tương tự</td></tr>
<tr><td>${t('confirm', 'Thiên lệch xác nhận (confirmation bias)')}</td><td>Chỉ tìm thông tin ủng hộ quan điểm sẵn có, xem nhẹ thông tin trái chiều</td><td>Chủ động tìm bằng chứng phản bác; giao một người đóng vai phản biện; nói chuyện với người có quan điểm ngược lại</td></tr>
</tbody></table>
<div class="example"><div class="ex-h">Ví dụ 3.1</div>
<p>Sau khi công ty công bố mất hợp đồng với khách hàng lớn nhất, chuyên gia chỉ hạ dự báo doanh thu năm tới từ 12% xuống 11%, với lý do "xu hướng dài hạn vẫn tốt". Đây là thiên lệch nào?</p>
<details><summary>Xem lời giải</summary><p><b>Bảo thủ (conservatism)</b>: điều chỉnh quá ít so với mức độ quan trọng của thông tin mới. Khắc phục: lượng hóa phần doanh thu từ khách hàng đó và cập nhật trực tiếp vào mô hình.</p></details></div>
<p class="warn"><b>Bẫy:</b> phân biệt quá tự tin (tin vào <b>kỹ năng dự báo</b> của mình, khoảng dự báo hẹp) với ảo tưởng kiểm soát (tin rằng <b>thêm thông tin, thêm chi tiết</b> làm mình kiểm soát kết quả tốt hơn).</p>`,
    },
    {
      title: '4. Năm lực lượng cạnh tranh của Porter: giá và chi phí',
      minutes: 12,
      html: `
<p>${t('porter', 'Mô hình năm lực lượng của Porter')} giúp đánh giá công ty có đặt được giá cao và kiểm soát được chi phí hay không. Lực lượng càng mạnh, lợi nhuận của ngành càng bị ép.</p>
<table class="plain"><thead><tr><th>Lực lượng</th><th>Khi lực lượng mạnh</th><th>Ảnh hưởng đến dự báo</th></tr></thead><tbody>
<tr><td>Đe dọa từ sản phẩm thay thế</td><td>Nhiều sản phẩm thay thế, chi phí chuyển đổi thấp</td><td>Khó tăng giá, biên lợi nhuận thấp</td></tr>
<tr><td>Cạnh tranh trong ngành</td><td>Nhiều đối thủ, sản phẩm đồng nhất, tăng trưởng chậm, chi phí cố định cao, rào cản rút lui cao</td><td>Chiến tranh giá, biên lợi nhuận thấp</td></tr>
<tr><td>Quyền lực nhà cung cấp</td><td>Ít nhà cung cấp, đầu vào đặc thù</td><td>Chi phí đầu vào tăng, khó kiểm soát giá vốn</td></tr>
<tr><td>Quyền lực khách hàng</td><td>Ít khách hàng lớn, mua khối lượng lớn, dễ đổi nhà cung cấp</td><td>Áp lực giảm giá, điều khoản thanh toán bất lợi (DSO cao)</td></tr>
<tr><td>Đe dọa từ đối thủ mới</td><td>Rào cản gia nhập thấp (vốn ít, không cần thương hiệu, không cần giấy phép)</td><td>Lợi nhuận cao không kéo dài, biên lợi nhuận hồi quy về mức trung bình</td></tr>
</tbody></table>
<div class="example"><div class="ex-h">Ví dụ 4.1</div>
<p>Một hãng hàng không giá rẻ: nhiều đối thủ, khách hàng so sánh giá dễ dàng trên mạng, hai nhà sản xuất máy bay chiếm gần hết thị trường, nhiên liệu là chi phí lớn. Dự báo biên lợi nhuận nên thế nào?</p>
<details><summary>Xem lời giải</summary><p>Cạnh tranh mạnh và khách hàng có quyền lực cao (nhạy cảm giá) → khó tăng giá. Nhà cung cấp máy bay có quyền lực cao → chi phí đầu tư lớn. Kết luận: dự báo biên lợi nhuận <b>thấp và biến động</b>, khó chuyển chi phí nhiên liệu tăng sang giá vé.</p></details></div>`,
    },
    {
      title: '5. Dự báo khi có lạm phát hoặc giảm phát',
      minutes: 13,
      html: `
<h4>Doanh thu</h4>
<div class="formula">Tăng trưởng doanh thu danh nghĩa = (1 + tăng trưởng sản lượng) × (1 + tăng giá) - 1</div>
<ul>
<li>Ở cấp <b>ngành</b>: sản lượng thường gắn với GDP thực; giá gắn với lạm phát của chính ngành (có thể khác lạm phát chung).</li>
<li>Ở cấp <b>công ty</b>: khả năng tăng giá phụ thuộc vào vị thế cạnh tranh (phần 4) và ${t('elastic', 'độ co giãn của cầu theo giá')}. Tăng giá làm sản lượng giảm nếu cầu co giãn.</li>
<li>Công ty hoạt động ở nhiều nước: dự báo theo lạm phát và tỷ giá của từng nước. Ở nước lạm phát cao, đồng tiền thường mất giá, làm giảm doanh thu khi quy đổi.</li>
</ul>
<h4>Chi phí</h4>
<ul>
<li>Tách chi phí theo đầu vào chính (nguyên liệu, năng lượng, lương) để áp tỷ lệ lạm phát riêng.</li>
<li>Hợp đồng phòng ngừa (hedging) và hợp đồng dài hạn làm chi phí tăng <b>chậm hơn</b> giá thị trường; khi hợp đồng hết hạn, chi phí "bắt kịp".</li>
<li>Phương pháp tồn kho ảnh hưởng thời điểm chi phí tăng vào giá vốn (FIFO chậm hơn, xem FSA-06).</li>
<li>Khi <b>giảm phát</b>: giá bán giảm nhưng nhiều chi phí cố định (lương, thuê) khó giảm, biên lợi nhuận bị ép.</li>
</ul>
<div class="example"><div class="ex-h">Ví dụ 5.1 - Chuyển chi phí sang giá bán</div>
<p>Công ty bán 1.000 sản phẩm, giá 2,00, giá vốn 1,20 mỗi sản phẩm (trong đó nguyên liệu 0,60). Giá nguyên liệu tăng 20%. Độ co giãn của cầu theo giá là -0,8. So sánh ba lựa chọn: không tăng giá, tăng giá 5%, tăng giá 6% (chuyển toàn bộ chi phí tăng 0,12).</p>
<details><summary>Xem lời giải</summary>
<p>Giá vốn mới mỗi sản phẩm = 1,20 + 0,60 × 20% = 1,32. Ban đầu: lợi nhuận gộp 800, biên 40,0%.</p>
<table class="plain"><thead><tr><th>Lựa chọn</th><th>Sản lượng</th><th>Doanh thu</th><th>Lợi nhuận gộp</th><th>Biên gộp</th></tr></thead><tbody>
<tr><td>Không tăng giá</td><td>1.000</td><td>2.000</td><td>680</td><td>34,0%</td></tr>
<tr><td>Tăng giá 5%</td><td>960</td><td>2.016</td><td>748,8</td><td>37,1%</td></tr>
<tr><td>Tăng giá 6%</td><td>952</td><td>2.018,2</td><td>761,6</td><td>37,7%</td></tr>
</tbody></table>
<p>Sản lượng giảm = 0,8 × % tăng giá. Ngay cả khi chuyển toàn bộ chi phí, lợi nhuận gộp vẫn thấp hơn 800 vì sản lượng giảm. Công ty có vị thế cạnh tranh mạnh (cầu ít co giãn) chịu thiệt ít hơn.</p></details></div>`,
    },
    {
      title: '6. Giai đoạn dự báo chi tiết và sau đó',
      minutes: 12,
      html: `
<h4>Chọn độ dài giai đoạn dự báo chi tiết (explicit forecast horizon)</h4>
<ul>
<li><b>Thời gian nắm giữ dự kiến</b> của chiến lược đầu tư, và yêu cầu của nơi làm việc.</li>
<li><b>Tính chu kỳ</b> của ngành: nên bao trùm ít nhất một chu kỳ kinh doanh đầy đủ để không lấy đỉnh hoặc đáy làm chuẩn.</li>
<li><b>Sự kiện riêng của công ty</b>: thâu tóm, tái cơ cấu, dự án lớn cần nhiều năm mới ổn định. Giai đoạn chi tiết nên kéo dài đến khi công ty ở trạng thái ổn định.</li>
</ul>
<h4>Sau giai đoạn chi tiết</h4>
<ul>
<li>${t('normalized', 'Lợi nhuận chuẩn hóa (normalized earnings)')}: lợi nhuận kỳ vọng ở giữa chu kỳ, loại bỏ các khoản một lần và yếu tố đỉnh, đáy chu kỳ.</li>
<li>${t('meanrev', 'Hồi quy về trung bình (mean reversion)')}: tăng trưởng cao và ROIC cao thường không kéo dài do cạnh tranh; giả định giai đoạn sau tiến dần về mức trung bình ngành hoặc tăng trưởng kinh tế.</li>
<li>${t('tv', 'Giá trị cuối kỳ (terminal value)')}: theo mô hình tăng trưởng bền vững (Gordon) hoặc theo bội số (P/E, EV/EBITDA) của công ty tương tự.</li>
</ul>
<div class="formula">TV<sub>N</sub> = ${frac('CF<sub>N</sub> × (1 + g)', 'r - g')}</div>
<div class="example"><div class="ex-h">Ví dụ 6.1</div>
<p>Dòng tiền năm 5 là 100, sau đó tăng 3% mãi mãi, tỷ suất chiết khấu 9%. Giá trị cuối kỳ tại năm 5?</p>
<details><summary>Xem lời giải</summary><p>TV<sub>5</sub> = 100 × 1,03 / (9% - 3%) = <b>1.716,7</b>. Độ nhạy: nếu g = 2% thì TV = 102 / 7% = 1.457,1; nếu g = 4% thì TV = 104 / 5% = 2.080. Giá trị cuối kỳ thường chiếm phần lớn tổng giá trị, nên giả định g phải thận trọng và nhất quán với tăng trưởng kinh tế dài hạn.</p></details></div>
<p class="warn"><b>Bẫy:</b> dùng biên lợi nhuận của năm đỉnh chu kỳ làm năm cuối của giai đoạn chi tiết sẽ thổi phồng giá trị cuối kỳ. Hãy chuẩn hóa trước khi tính TV.</p>`,
    },
    {
      title: '7. Tóm tắt và bẫy thường gặp',
      minutes: 8,
      html: `
<table class="plain"><thead><tr><th>Tình huống</th><th>Nhớ</th></tr></thead><tbody>
<tr><td>Dự báo doanh thu</td><td>Top-down (vĩ mô → ngành → thị phần), bottom-up (sản phẩm, giá × sản lượng), hybrid</td></tr>
<tr><td>Chi phí cố định trong SG&amp;A</td><td>Tạo đòn bẩy hoạt động: doanh thu tăng thì biên EBIT tăng</td></tr>
<tr><td>Vốn lưu động</td><td>Dùng vòng quay hoặc số ngày; tồn kho và phải trả theo giá vốn</td></tr>
<tr><td>Khoản cân đối</td><td>Tiền hoặc nợ vay; kiểm tra bằng dòng tiền</td></tr>
<tr><td>Quá tự tin và ảo tưởng kiểm soát</td><td>Khoảng dự báo hẹp so với tin rằng thêm chi tiết là chính xác hơn</td></tr>
<tr><td>Bảo thủ</td><td>Cập nhật quá chậm; sửa bằng cập nhật có hệ thống</td></tr>
<tr><td>Tính đại diện</td><td>Bỏ qua tỷ lệ cơ sở; sửa bằng nhóm tham chiếu</td></tr>
<tr><td>Porter</td><td>Lực lượng mạnh → giá khó tăng, chi phí khó giảm, biên thấp</td></tr>
<tr><td>Lạm phát</td><td>Doanh thu danh nghĩa = (1 + sản lượng)(1 + giá) - 1; co giãn làm sản lượng giảm khi tăng giá</td></tr>
<tr><td>Giai đoạn chi tiết</td><td>Bao trùm một chu kỳ, kéo đến khi ổn định; sau đó chuẩn hóa và hồi quy về trung bình</td></tr>
</tbody></table>
<p>Tiếp theo: bấm sang tab <b>Luyện tập</b> để làm 10 câu (rút ngẫu nhiên từ ngân hàng 30 câu, mỗi lần làm một bộ khác).</p>`,
    },
  ];

  const glossary = {
    topdown: ['Top-down approach', 'Cách tiếp cận từ trên xuống', 'Dự báo từ vĩ mô → ngành → thị phần của công ty.'],
    bottomup: ['Bottom-up approach', 'Cách tiếp cận từ dưới lên', 'Dự báo từ từng sản phẩm, khu vực, hoặc sản lượng và giá, rồi cộng lại.'],
    hybrid: ['Hybrid approach', 'Cách tiếp cận kết hợp', 'Dùng cả top-down và bottom-up rồi đối chiếu.'],
    oplev: ['Operating leverage', 'Đòn bẩy hoạt động', 'Chi phí cố định làm lợi nhuận hoạt động biến động mạnh hơn doanh thu.'],
    plug: ['Plug (balancing item)', 'Khoản cân đối', 'Khoản (thường là tiền hoặc nợ vay) điều chỉnh để bảng cân đối dự phóng cân.'],
    overconf: ['Overconfidence bias', 'Thiên lệch quá tự tin', 'Đánh giá quá cao độ chính xác dự báo của mình, khoảng dự báo quá hẹp.'],
    illusion: ['Illusion of control', 'Ảo tưởng kiểm soát', 'Tin rằng thêm thông tin, mô hình phức tạp hơn giúp kiểm soát kết quả tốt hơn.'],
    conservatism: ['Conservatism bias', 'Thiên lệch bảo thủ', 'Bám vào quan điểm cũ, cập nhật chậm khi có thông tin mới.'],
    represent: ['Representativeness bias', 'Thiên lệch tính đại diện', 'Phán đoán theo khuôn mẫu, bỏ qua tỷ lệ cơ sở.'],
    baserate: ['Base rate', 'Tỷ lệ cơ sở', 'Tần suất thực tế của một kết quả trong nhóm tham chiếu rộng.'],
    confirm: ['Confirmation bias', 'Thiên lệch xác nhận', 'Tìm và coi trọng thông tin ủng hộ quan điểm sẵn có.'],
    porter: ["Porter's five forces", 'Năm lực lượng cạnh tranh của Porter', 'Sản phẩm thay thế, cạnh tranh trong ngành, nhà cung cấp, khách hàng, đối thủ mới.'],
    elastic: ['Price elasticity of demand', 'Độ co giãn của cầu theo giá', '% thay đổi lượng cầu chia % thay đổi giá.'],
    normalized: ['Normalized earnings', 'Lợi nhuận chuẩn hóa', 'Lợi nhuận kỳ vọng ở giữa chu kỳ, đã loại khoản một lần.'],
    meanrev: ['Mean reversion', 'Hồi quy về trung bình', 'Xu hướng tăng trưởng và tỷ suất sinh lời cao hoặc thấp quay dần về mức trung bình.'],
    tv: ['Terminal value', 'Giá trị cuối kỳ', 'Giá trị của mọi dòng tiền sau giai đoạn dự báo chi tiết, quy về cuối giai đoạn đó.'],
  };

  const practice = [
    { q: 'Doanh thu năm nay 1.000, dự báo tăng 6%. Giá vốn dự báo bằng 62% doanh thu. Lợi nhuận gộp dự báo là:', choices: ['380,0', '657,2', '402,8'], answer: 2, explain: 'Doanh thu = 1.060; lợi nhuận gộp = 1.060 x 38% = 402,8. Lựa chọn 380,0 quên tăng trưởng doanh thu. Lựa chọn 657,2 là giá vốn dự báo.' },
    { q: 'Doanh thu dự báo 3.650, giả định số ngày thu tiền (DSO, tính trên phải thu cuối kỳ) là 40 ngày. Phải thu cuối kỳ dự báo là:', choices: ['400', '91,25', '146.000'], answer: 0, explain: 'Phải thu = 3.650 x 40/365 = 400. Lựa chọn 91,25 chia doanh thu cho số ngày. Lựa chọn 146.000 quên chia cho 365.' },
    { q: 'Một chuyên gia liên tục thêm biến vào mô hình và gặp ban lãnh đạo nhiều lần, tin rằng nhờ vậy dự báo của mình chính xác hơn hẳn đồng nghiệp. Thiên lệch chủ yếu là:', choices: ['Thiên lệch xác nhận', 'Ảo tưởng kiểm soát', 'Thiên lệch bảo thủ'], answer: 1, explain: 'Tin rằng thêm thông tin, thêm chi tiết giúp kiểm soát kết quả tốt hơn là ảo tưởng kiểm soát. Khắc phục: mô hình đơn giản, chỉ giữ biến thật sự cải thiện dự báo.' },
    { q: 'Công ty mất khách hàng lớn nhất nhưng chuyên gia chỉ hạ nhẹ dự báo với lý do "xu hướng dài hạn vẫn tốt". Thiên lệch và cách khắc phục phù hợp nhất:', choices: ['Quá tự tin; mở rộng khoảng dự báo', 'Tính đại diện; dùng tỷ lệ cơ sở', 'Bảo thủ; cập nhật có hệ thống theo thông tin mới'], answer: 2, explain: 'Cập nhật quá ít so với thông tin quan trọng là thiên lệch bảo thủ. Cách sửa là lượng hóa ảnh hưởng của thông tin mới và cập nhật theo bằng chứng (tư duy Bayes).' },
    { q: 'Một ngành chỉ có hai nhà cung cấp linh kiện chính, linh kiện không có sản phẩm thay thế. Theo Porter, ảnh hưởng hợp lý nhất đến dự báo của một công ty trong ngành:', choices: ['Giá bán tăng và biên lợi nhuận mở rộng', 'Chi phí đầu vào khó kiểm soát và biên lợi nhuận bị ép', 'Không ảnh hưởng vì nhà cung cấp chỉ tác động đến giá bán'], answer: 1, explain: 'Nhà cung cấp có quyền lực cao làm chi phí đầu vào tăng và khó đàm phán, biên lợi nhuận bị ép. Phương án "giá bán tăng và biên lợi nhuận mở rộng" ngược chiều. Phương án "không ảnh hưởng" sai vì quyền lực nhà cung cấp tác động trước hết đến chi phí.' },
    { q: 'Công ty tăng giá bán 5%, sản lượng giảm 4%. Doanh thu thay đổi:', choices: ['+0,8%', '+5,0%', '+1,0%'], answer: 0, explain: 'Doanh thu = 1,05 x 0,96 - 1 = +0,8%. Lựa chọn +5,0% bỏ qua sản lượng giảm. Lựa chọn +1,0% cộng trừ phần trăm thay vì nhân.' },
    { q: 'Sản lượng ngành dự báo tăng 3%, giá bán bình quân của ngành dự báo tăng 4%. Tăng trưởng doanh thu danh nghĩa của ngành là:', choices: ['7,00%', '1,00%', '7,12%'], answer: 2, explain: '(1,03 x 1,04) - 1 = 7,12%. Lựa chọn 7,00% cộng gần đúng, bỏ phần tích 3% x 4%. Lựa chọn 1,00% lấy hiệu.' },
    { q: 'Với một công ty trong ngành có tính chu kỳ cao, giai đoạn dự báo chi tiết nên:', choices: ['Luôn là 1 năm vì dự báo xa kém chính xác', 'Đủ dài để bao trùm ít nhất một chu kỳ kinh doanh', 'Kéo dài đến khi tăng trưởng doanh thu bằng 0'], answer: 1, explain: 'Bao trùm cả chu kỳ giúp tránh lấy đỉnh hoặc đáy làm chuẩn cho giá trị cuối kỳ. Phương án "luôn là 1 năm" quá ngắn với ngành chu kỳ. Phương án "đến khi tăng trưởng bằng 0" không phải tiêu chí; giai đoạn chi tiết nên kéo đến khi công ty ổn định, không phải khi tăng trưởng bằng 0.' },
    { q: 'Dòng tiền năm 5 là 100, tăng trưởng 3% mãi mãi sau đó, tỷ suất chiết khấu 9%. Giá trị cuối kỳ tại năm 5 gần nhất với:', choices: ['1.716,7', '1.666,7', '1.111,1'], answer: 0, explain: 'TV = 100 x 1,03 / (9% - 3%) = 1.716,7. Lựa chọn 1.666,7 quên nhân (1 + g). Lựa chọn 1.111,1 chia cho r, bỏ qua tăng trưởng.' },
    { q: 'Năm cuối của giai đoạn dự báo chi tiết rơi vào đỉnh chu kỳ, biên lợi nhuận cao bất thường. Khi tính giá trị cuối kỳ, nhà phân tích nên:', choices: ['Dùng biên lợi nhuận năm cuối vì là thông tin mới nhất', 'Dùng biên lợi nhuận chuẩn hóa (bình quân cả chu kỳ)', 'Dùng biên lợi nhuận thấp nhất trong chu kỳ để thận trọng'], answer: 1, explain: 'Giá trị cuối kỳ cần dựa trên lợi nhuận chuẩn hóa ở giữa chu kỳ. Dùng biên lợi nhuận năm cuối thổi phồng giá trị. Dùng biên lợi nhuận thấp nhất đánh giá thấp có hệ thống, cũng là thiên lệch.' },
    { q: "Doanh thu năm nay 3.000, dự báo tăng 10%. SG&A gồm phần cố định 250 và phần biến đổi bằng 8% doanh thu. SG&A dự báo năm sau là:", choices: ["539", "514", "490"], answer: 1, explain: "Doanh thu năm sau = 3.000 × 1,10 = 3.300; SG&A = 250 + 8% × 3.300 = 514. Lựa chọn 539 cho toàn bộ SG&A năm nay (490) tăng 10%, bỏ qua việc phần cố định không tăng theo doanh thu. Lựa chọn 490 là SG&A năm nay, quên tăng trưởng doanh thu." },
    { q: "Hai công ty có cùng doanh thu và cùng biên EBIT năm nay; công ty P có tỷ trọng chi phí cố định cao hơn công ty Q. Nếu doanh thu của cả hai cùng tăng 15% năm sau (giá đầu vào không đổi), so với Q, P nhiều khả năng có:", choices: ["Biên EBIT mở rộng nhiều hơn", "Biên EBIT mở rộng ít hơn", "Biên EBIT không đổi, giống Q"], answer: 0, explain: "Chi phí cố định không tăng theo doanh thu, nên công ty có tỷ trọng chi phí cố định cao hơn có đòn bẩy hoạt động lớn hơn: EBIT tăng nhanh hơn doanh thu và biên EBIT mở rộng nhiều hơn. Biên chỉ đứng yên nếu mọi chi phí đều biến đổi theo doanh thu, không đúng với P. Chiều ngược lại xảy ra khi doanh thu giảm." },
    { q: "Năm dự báo: doanh thu 4.380, giá vốn hàng bán 2.920. Giả định số ngày tồn kho (dựa trên tồn kho cuối kỳ, 365 ngày) là 45 ngày. Hàng tồn kho cuối kỳ dự báo là:", choices: ["540", "64,9", "360"], answer: 2, explain: "Tồn kho = giá vốn × DOH / 365 = 2.920 × 45 / 365 = 360. Lựa chọn 540 dùng doanh thu thay vì giá vốn (tồn kho ghi theo giá gốc nên phải gắn với giá vốn). Lựa chọn 64,9 chia giá vốn cho số ngày, nhầm DOH với vòng quay." },
    { q: "Nợ vay đầu năm dự báo 1.200, cuối năm 1.600 (vay thêm đều trong năm), lãi suất 5%. Chi phí lãi vay dự báo tính trên nợ bình quân là:", choices: ["70", "60", "80"], answer: 0, explain: "Nợ bình quân = (1.200 + 1.600) / 2 = 1.400; lãi vay = 5% × 1.400 = 70. Lựa chọn 60 dùng nợ đầu kỳ, bỏ qua khoản vay thêm. Lựa chọn 80 dùng nợ cuối kỳ như thể khoản vay thêm phát sinh từ đầu năm." },
    { q: "TSCĐ ròng đầu năm 2.000. Năm dự báo: capex 450, khấu hao 300, không thanh lý tài sản. TSCĐ ròng cuối năm dự báo là:", choices: ["2.450", "2.150", "2.750"], answer: 1, explain: "TSCĐ ròng cuối kỳ = đầu kỳ + capex - khấu hao = 2.000 + 450 - 300 = 2.150. Lựa chọn 2.450 quên trừ khấu hao. Lựa chọn 2.750 cộng khấu hao thay vì trừ." },
    { q: "Vốn chủ sở hữu đầu năm 1.500. Lợi nhuận ròng dự báo 400, tỷ lệ chi trả cổ tức 30%, không phát hành hay mua lại cổ phiếu. Vốn chủ cuối năm dự báo là:", choices: ["1.900", "1.620", "1.780"], answer: 2, explain: "Vốn chủ cuối kỳ = đầu kỳ + lợi nhuận - cổ tức = 1.500 + 400 - 30% × 400 = 1.780. Lựa chọn 1.900 quên trừ cổ tức. Lựa chọn 1.620 cộng phần cổ tức thay vì phần lợi nhuận giữ lại." },
    { q: "Trong bảng cân đối dự phóng, tổng nợ phải trả và vốn chủ (chưa có vay thêm) là 3.000, tổng tài sản không kể tiền là 3.150. Tiền được dùng làm khoản cân đối. Cách xử lý phù hợp nhất là:", choices: ["Tiền tính ra là -150, nên công ty cần vay thêm 150 và mô hình phải tính thêm lãi vay cho khoản này", "Ghi nhận tiền -150 trên bảng cân đối dự phóng", "Giảm tài sản không kể tiền đi 150 để bảng cân đối cân"], answer: 0, explain: "Tiền = 3.000 - 3.150 = -150. Tiền âm không có thật: công ty phải vay thêm 150 (chuyển khoản cân đối sang nợ vay), và lãi vay tăng theo, nên cần chạy lại mô hình. Ghi tiền âm là sai về kinh tế. Cắt tài sản tùy ý để cân bảng là làm sai giả định hoạt động." },
    { q: "Nhà phân tích dự báo doanh thu của một chuỗi cà phê bằng cách lấy số cửa hàng dự kiến nhân doanh thu bình quân mỗi cửa hàng, cộng doanh thu từ cửa hàng mới mở. Cách tiếp cận này là:", choices: ["Từ trên xuống (top-down)", "Từ dưới lên (bottom-up)", "Hồi quy về trung bình (mean reversion)"], answer: 1, explain: "Bottom-up xây dự báo từ các đơn vị nhỏ (cửa hàng, sản phẩm, khu vực, sản lượng × giá). Top-down bắt đầu từ vĩ mô (GDP), đến quy mô ngành, rồi thị phần. Hồi quy về trung bình là giả định cho giai đoạn dài hạn, không phải phương pháp dự báo doanh thu." },
    { q: "Một chuyên gia luôn đưa ra khoảng dự báo EPS rất hẹp, nhưng EPS thực tế thường xuyên nằm ngoài khoảng đó. Thiên lệch và cách khắc phục phù hợp nhất là:", choices: ["Thiên lệch bảo thủ; xây lại mô hình từ đầu định kỳ", "Thiên lệch xác nhận; tìm bằng chứng phản bác", "Quá tự tin; ghi lại và chấm điểm dự báo quá khứ, dùng khoảng dự báo rộng hơn"], answer: 2, explain: "Khoảng dự báo quá hẹp so với sai số thực tế là biểu hiện của quá tự tin (đánh giá quá cao độ chính xác của mình). Khắc phục: theo dõi và chấm điểm dự báo, dùng kịch bản và khoảng rộng hơn. Bảo thủ là cập nhật chậm khi có thông tin mới; thiên lệch xác nhận là chỉ tìm thông tin ủng hộ, không khớp với biểu hiện trong đề." },
    { q: "Một chuyên gia dự báo doanh thu của một công ty công nghệ tăng 30% mỗi năm trong 10 năm, vì \"đây là cổ phiếu tăng trưởng giống các công ty dẫn đầu ngành\", dù rất ít công ty thực tế duy trì được mức tăng đó. Thiên lệch và cách khắc phục là:", choices: ["Tính đại diện; dùng tỷ lệ cơ sở (base rate) từ nhóm công ty tương tự", "Ảo tưởng kiểm soát; giữ mô hình đơn giản", "Bảo thủ; cập nhật dự báo nhanh hơn"], answer: 0, explain: "Xếp công ty vào khuôn mẫu (\"cổ phiếu tăng trưởng\") và bỏ qua tỷ lệ cơ sở là thiên lệch tính đại diện; khắc phục bằng cách xem phân phối kết quả thực tế của nhóm tham chiếu. Ảo tưởng kiểm soát là tin rằng thêm dữ liệu, chi tiết giúp dự báo chính xác hơn. Bảo thủ là bám vào dự báo cũ, không khớp tình huống." },
    { q: "Sau khi khuyến nghị MUA một cổ phiếu, chuyên gia chủ yếu đọc báo cáo của các bên cũng khuyến nghị mua và xem nhẹ dữ liệu cho thấy thị phần đang giảm. Cách khắc phục phù hợp nhất là:", choices: ["Mở rộng khoảng dự báo", "Chủ động tìm bằng chứng phản bác, giao một người đóng vai phản biện", "Thêm nhiều biến vào mô hình để tăng độ chính xác"], answer: 1, explain: "Đây là thiên lệch xác nhận: chỉ tìm thông tin ủng hộ quan điểm sẵn có. Khắc phục bằng cách chủ động tìm bằng chứng trái chiều và có người phản biện. Mở rộng khoảng dự báo là cách sửa quá tự tin. Thêm biến vào mô hình là biểu hiện của ảo tưởng kiểm soát, không phải cách khắc phục." },
    { q: "Một ngành dịch vụ hiện có biên lợi nhuận rất cao; để gia nhập chỉ cần ít vốn, không cần giấy phép và không cần thương hiệu. Theo mô hình năm lực lượng của Porter, dự báo hợp lý nhất cho biên lợi nhuận dài hạn của các công ty trong ngành là:", choices: ["Duy trì ở mức cao vì ngành đang tăng trưởng", "Tăng thêm nhờ quy mô ngành mở rộng", "Giảm dần về mức trung bình khi đối thủ mới gia nhập"], answer: 2, explain: "Rào cản gia nhập thấp làm đe dọa từ đối thủ mới mạnh: lợi nhuận cao thu hút người gia nhập, cạnh tranh tăng và biên lợi nhuận hồi quy về mức trung bình. Hai dự báo còn lại bỏ qua lực lượng này; quy mô ngành lớn hơn không bảo vệ biên lợi nhuận khi ai cũng dễ dàng gia nhập." },
    { q: "Một nhà sản xuất hàng tiêu dùng bán 70% sản lượng cho ba chuỗi siêu thị lớn; các chuỗi này dễ dàng chuyển sang nhà cung cấp khác. Ảnh hưởng hợp lý nhất đến dự báo của nhà sản xuất là:", choices: ["Áp lực giảm giá bán và số ngày thu tiền (DSO) cao hơn", "Chi phí nguyên liệu đầu vào tăng mạnh", "Biên lợi nhuận mở rộng nhờ doanh số ổn định"], answer: 0, explain: "Ít khách hàng lớn, mua nhiều và dễ đổi nhà cung cấp nghĩa là quyền lực khách hàng mạnh: họ ép giá và đòi điều khoản thanh toán dài hơn (DSO cao). Chi phí đầu vào tăng là ảnh hưởng của quyền lực nhà cung cấp. Doanh số tập trung vào vài khách hàng lớn làm biên bị ép, không mở rộng." },
    { q: "Công ty tăng giá bán 8%; độ co giãn của cầu theo giá là -0,5. Doanh thu thay đổi gần nhất với:", choices: ["4,00%", "3,68%", "8,00%"], answer: 1, explain: "Sản lượng thay đổi = -0,5 × 8% = -4,00%. Doanh thu = (1 + 8%) × (1 -4,00%) - 1 = 3,68%. Lựa chọn 4,00% cộng thẳng hai tỷ lệ, bỏ qua tích chéo. Lựa chọn 8,00% bỏ qua việc sản lượng giảm khi tăng giá." },
    { q: "Công ty bán 2.000 sản phẩm, giá 50,00, giá vốn 30,00 mỗi sản phẩm (trong đó nguyên liệu 15,00). Giá nguyên liệu tăng 10%. Công ty tăng giá bán đúng bằng phần chi phí tăng thêm; độ co giãn của cầu theo giá là -1,0. Lợi nhuận gộp mới là:", choices: ["40.000", "37.000", "38.800"], answer: 2, explain: "Giá vốn mới = 30,00 + 10% × 15,00 = 31,50. Giá tăng 1,50, tức 3%, lên 51,50. Sản lượng giảm 3%: 2.000 × (1 - 3%) = 1.940. Lợi nhuận gộp = 1.940 × (51,50 - 31,50) = 38.800 (trước đây 40.000). Lựa chọn 40.000 bỏ qua sản lượng giảm. Lựa chọn 37.000 là kết quả nếu không tăng giá." },
    { q: "Doanh thu bằng nội tệ của công ty con ở một nước lạm phát cao dự báo tăng 25%, chủ yếu nhờ tăng giá. Đồng nội tệ dự kiến mất giá 20% so với đồng tiền báo cáo của công ty mẹ. Doanh thu của công ty con tính theo đồng tiền báo cáo thay đổi khoảng:", choices: ["0%", "5%", "25%"], answer: 0, explain: "Doanh thu quy đổi thay đổi = (1 + 25%) × (1 - 20%) - 1 = 0%: mất giá tiền tệ triệt tiêu tăng trưởng danh nghĩa do lạm phát. Lựa chọn 5% cộng thẳng hai tỷ lệ. Lựa chọn 25% bỏ qua tỷ giá." },
    { q: "Trong giai đoạn giảm phát, giá bán của một công ty giảm 5%, còn lương và tiền thuê mặt bằng (chiếm phần lớn chi phí) theo hợp đồng dài hạn không giảm. Dự báo hợp lý nhất cho biên lợi nhuận hoạt động là:", choices: ["Mở rộng vì chi phí nguyên liệu giảm", "Bị thu hẹp vì doanh thu giảm trong khi chi phí cố định khó giảm", "Không đổi vì giá và chi phí cùng giảm theo giảm phát"], answer: 1, explain: "Khi giảm phát, giá bán giảm nhưng nhiều chi phí cố định (lương, thuê) khó giảm, nên biên lợi nhuận bị ép. Đề không cho thấy chi phí nguyên liệu là phần lớn chi phí, nên lập luận \"mở rộng\" không phù hợp. Giả định giá và chi phí cùng giảm bỏ qua tính cứng nhắc của chi phí theo hợp đồng." },
    { q: "Một công ty đã ký hợp đồng mua nguyên liệu với giá cố định trong 2 năm. Giá nguyên liệu trên thị trường vừa tăng 30% và được dự báo giữ ở mức đó. Dự báo hợp lý nhất cho biên lợi nhuận gộp là:", choices: ["Giảm ngay trong năm nay vì giá thị trường đã tăng", "Không bao giờ bị ảnh hưởng vì công ty đã phòng ngừa", "Được bảo vệ trong thời hạn hợp đồng, rồi giảm khi hợp đồng hết hạn và chi phí bắt kịp giá thị trường"], answer: 2, explain: "Hợp đồng giá cố định làm chi phí tăng chậm hơn giá thị trường; khi hợp đồng hết hạn, chi phí \"bắt kịp\". Biên gộp chỉ giảm ngay nếu công ty mua theo giá thị trường. Phòng ngừa chỉ có tác dụng trong thời hạn hợp đồng, không vĩnh viễn." },
    { q: "Năm cuối của giai đoạn dự báo chi tiết rơi vào đỉnh chu kỳ với EBITDA 600; EBITDA chuẩn hóa (bình quân cả chu kỳ) ước tính 500. Bội số EV/EBITDA của các công ty tương tự là 8 lần. Giá trị cuối kỳ phù hợp nhất là:", choices: ["4.800", "4.400", "4.000"], answer: 2, explain: "Giá trị cuối kỳ nên dựa trên EBITDA chuẩn hóa: 500 × 8 = 4.000. Lựa chọn 4.800 dùng EBITDA năm đỉnh, thổi phồng giá trị cuối kỳ. Lựa chọn 4.400 lấy trung bình tùy ý giữa đỉnh và mức chuẩn hóa, vẫn còn thiên lệch đỉnh chu kỳ." },
    { q: "Một công ty hiện có ROIC 35% so với mức trung bình ngành 12%, doanh thu tăng 25%/năm. Với giai đoạn sau dự báo chi tiết, giả định phù hợp nhất là:", choices: ["ROIC và tăng trưởng giảm dần về gần mức trung bình ngành và tăng trưởng kinh tế dài hạn", "Giữ nguyên ROIC 35% và tăng trưởng 25% mãi mãi", "Tăng trưởng giảm ngay về mức không sau giai đoạn chi tiết"], answer: 0, explain: "Do cạnh tranh, ROIC và tăng trưởng cao thường không kéo dài: giả định hồi quy về trung bình, tiến dần về mức ngành và tăng trưởng kinh tế. Tăng trưởng 25% mãi mãi vượt xa tăng trưởng kinh tế, làm giá trị cuối kỳ vô lý. Giả định tăng trưởng về mức không ngay lập tức không nhất quán với một công ty vẫn có lợi thế cạnh tranh." },
  ];

  window.LESSONS['FSA-12'] = {
    moduleId: 'FSA-12',
    calculator: 'BA II Plus',
    warmup: [
      'Ôn FSA-11: viết công thức vòng quay hàng tồn kho và số ngày tồn kho.',
      'Nếu doanh thu tăng 10% mà chi phí bán hàng và quản lý gần như cố định, biên lợi nhuận hoạt động thay đổi thế nào?',
      'Bạn đã từng dự báo điều gì (thời gian hoàn thành một việc, chi tiêu tháng) và sai nhiều không? Vì sao?',
    ],
    sections,
    glossary,
    practice,
    widgets: {},
    slides: [],
    wrapup: [
      'Tự lập lại ví dụ 2.1 với doanh thu tăng 15% và kiểm tra tiền bằng dòng tiền.',
      'Kể tên 5 thiên lệch hành vi và một cách khắc phục cho mỗi thiên lệch.',
      'Còn câu hỏi nào chưa rõ? Ghi lại để hỏi.',
    ],
  };
}());
