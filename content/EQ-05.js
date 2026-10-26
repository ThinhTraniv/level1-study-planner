// Bài giảng EQ-05 - Introduction to Equity Valuation (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t, frac } = window.CFAH;

  const sections = [
    {
      title: '1. Bức tranh lớn',
      minutes: 5,
      html: `
<p>Các module EQ-01 đến EQ-04 mô tả cổ phiếu <b>là gì</b> và được giao dịch <b>như thế nào</b>. Từ module này trở đi, câu hỏi đổi thành: <b>cổ phiếu này đáng giá bao nhiêu?</b></p>
<div class="key">Nhà phân tích ước tính ${t('iv', 'giá trị nội tại (intrinsic value)')} của cổ phiếu rồi so với ${t('price', 'giá thị trường (market price)')}. Nếu giá trị lớn hơn giá, cổ phiếu có thể đang rẻ; nếu nhỏ hơn, có thể đang đắt. Toàn bộ chuỗi EQ-05 đến EQ-08 là các cách khác nhau để ước tính con số giá trị đó.</div>
<ol>
  <li><b>Giá và giá trị</b>: vì sao hai con số này khác nhau và nên làm gì khi chúng khác nhau. Ứng với LOS 1 (phần 2).</li>
  <li><b>Giá trị sổ sách, vốn hóa và giá trị doanh nghiệp</b>: ba con số có sẵn trên báo cáo và bảng giá, mỗi con số nói gì (và không nói gì) về giá trị nội tại. Ứng với LOS 2 (phần 3).</li>
  <li><b>Ba nhóm mô hình định giá</b>: mô hình hiện tại hóa dòng tiền, mô hình bội số và mô hình dựa trên tài sản, kèm ưu và nhược điểm. Ứng với LOS 3 (phần 4, 5).</li>
</ol>
<p class="tip">Module này chủ yếu là khái niệm, ít tính toán. Nhưng đây là "bản đồ" cho ba module tiếp theo: EQ-06 đi sâu vào mô hình dòng tiền, EQ-07 vào bội số, EQ-08 vào mô hình dự phóng báo cáo tài chính. Hiểu bản đồ trước thì học chi tiết sẽ dễ hơn.</p>`,
    },
    {
      title: '2. Giá và giá trị (price vs value)',
      minutes: 16,
      html: `
<p>Hai khái niệm này rất hay bị dùng lẫn lộn trong đời thường, nhưng trong CFA chúng khác nhau rõ ràng:</p>
<table class="plain"><thead><tr><th></th><th>Giá thị trường</th><th>Giá trị nội tại</th></tr></thead><tbody>
<tr><td>Là gì</td><td>Mức giá mà người mua và người bán vừa khớp lệnh</td><td>Giá trị "đúng" của cổ phiếu dựa trên đặc điểm đầu tư của nó, khi được hiểu đầy đủ</td></tr>
<tr><td>Ai xác định</td><td>Thị trường (cung và cầu)</td><td>Nhà phân tích, bằng mô hình và giả định</td></tr>
<tr><td>Quan sát được?</td><td>Có, trên bảng giá</td><td>Không, chỉ ước tính được</td></tr>
</tbody></table>
<h4>So sánh để ra quyết định</h4>
<div class="key">Giá trị nội tại &gt; giá thị trường → ${t('under', 'bị định giá thấp (undervalued)')}.<br>Giá trị nội tại = giá thị trường → ${t('fair', 'được định giá hợp lý (fairly valued)')}.<br>Giá trị nội tại &lt; giá thị trường → ${t('over', 'bị định giá cao (overvalued)')}.</div>
<div class="example"><div class="ex-h">Ví dụ 2.1</div>
<p>Bạn ước tính giá trị nội tại của cổ phiếu Sao Mai là 42, trong khi giá thị trường là 36. Cổ phiếu đang ở trạng thái nào? Giá cần tăng bao nhiêu phần trăm để bằng giá trị bạn ước tính?</p>
<details><summary>Xem lời giải</summary>
<p>42 &gt; 36 nên cổ phiếu <b>bị định giá thấp</b> theo đánh giá của bạn.<br>Mức tăng cần có = (42 - 36) / 36 = <b>16,67%</b>.<br>Nếu tính phần chênh trên giá trị: (42 - 36) / 42 = 14,29%. Đây là ${t('mos', 'biên an toàn (margin of safety)')}: giá thị trường thấp hơn giá trị ước tính 14,29%. Đọc đề cẩn thận xem mẫu số là giá hay giá trị.</p></details></div>

<h4>Vì sao giá và giá trị có thể khác nhau?</h4>
<ul>
<li><b>Thị trường không hoàn toàn hiệu quả</b>: thông tin mới chưa được phản ánh hết, tâm lý đám đông, giao dịch ít (cổ phiếu thanh khoản thấp).</li>
<li><b>Nhà phân tích có góc nhìn khác</b>: dự báo tăng trưởng, biên lợi nhuận hay rủi ro khác với số đông.</li>
<li><b>Mô hình và giả định có sai số</b>: giá trị nội tại chỉ là ước tính. Thay đổi lợi suất yêu cầu 1% có thể làm giá trị thay đổi 20% - 30% (xem EQ-06).</li>
</ul>
<p class="warn"><b>Điều đề thi hay hỏi:</b> khi giá trị ước tính chênh <b>rất lớn</b> so với giá thị trường, phản ứng đúng không phải là "mua ngay". Nhà phân tích nên xem lại giả định của mình và tự hỏi: thị trường đang biết điều gì mà mình bỏ sót? Giá thị trường là ý kiến tổng hợp của rất nhiều người tham gia, nên chênh lệch lớn đòi hỏi lý do thuyết phục.</p>

<h4>Đọc ngược kỳ vọng từ giá</h4>
<p>Một cách dùng giá thị trường rất hữu ích: giả sử giá đúng, rồi suy ra thị trường đang ngầm giả định điều gì. Bạn đã làm việc này ở QM-04 với mô hình Gordon.</p>
<div class="example"><div class="ex-h">Ví dụ 2.2</div>
<p>Cổ phiếu giá 30, cổ tức dự kiến năm tới 1,20, lợi suất yêu cầu 10%. Thị trường đang ngầm giả định cổ tức tăng trưởng bao nhiêu mỗi năm?</p>
<details><summary>Xem lời giải</summary>
<p>g = r - D<sub>1</sub>/P<sub>0</sub> = 10% - 1,20/30 = 10% - 4% = <b>6%</b>. Nếu bạn tin công ty chỉ tăng trưởng được khoảng 3% - 4%, thì mức giá 30 đang chứa kỳ vọng quá lạc quan, tức cổ phiếu có thể bị định giá cao.</p></details></div>

<h4>Các "loại" giá trị cần phân biệt</h4>
<table class="plain"><thead><tr><th>Khái niệm</th><th>Ý nghĩa</th></tr></thead><tbody>
<tr><td>${t('goingconcern', 'Giá trị hoạt động liên tục (going-concern value)')}</td><td>Giá trị khi công ty tiếp tục kinh doanh trong tương lai có thể thấy trước. Đây là giả định mặc định của hầu hết mô hình.</td></tr>
<tr><td>${t('liquidation', 'Giá trị thanh lý (liquidation value)')}</td><td>Số tiền thu được nếu bán hết tài sản riêng lẻ và trả hết nợ. Thường thấp hơn, đặc biệt nếu phải bán gấp.</td></tr>
<tr><td>${t('fmv', 'Giá trị thị trường hợp lý (fair market value)')}</td><td>Mức giá giao dịch giữa người mua và người bán tự nguyện, đủ thông tin, không bị ép.</td></tr>
</tbody></table>
<p>Với cổ phiếu niêm yết có thanh khoản tốt, giá thị trường thường là ước tính khá tốt của fair market value. Còn giá trị nội tại là quan điểm riêng của nhà phân tích, và mục đích của phân tích chủ động là tìm ra chỗ hai con số này lệch nhau.</p>`,
    },
    {
      title: '3. Giá trị sổ sách, vốn hóa và giá trị doanh nghiệp',
      minutes: 22,
      html: `
<p>Có ba con số "lấy được ngay" mà người mới hay nhầm là giá trị của công ty. Mỗi con số trả lời một câu hỏi khác nhau:</p>
<h4>a) Giá trị sổ sách vốn chủ sở hữu (book value of equity)</h4>
<div class="formula">${t('bv', 'Giá trị sổ sách vốn chủ')} = Tổng tài sản - Tổng nợ phải trả (theo bảng cân đối kế toán)</div>
<p>Đây là con số <b>kế toán</b>, nhìn về <b>quá khứ</b>: tài sản phần lớn ghi theo giá gốc trừ khấu hao. Nó thường khác xa giá trị nội tại vì:</p>
<ul>
<li>Nhiều tài sản vô hình tự tạo ra (thương hiệu, công nghệ, dữ liệu khách hàng, đội ngũ) <b>không được ghi nhận</b> trên bảng cân đối.</li>
<li>Tài sản ghi theo giá gốc có thể lệch xa giá thị trường hiện tại (đất mua từ 20 năm trước).</li>
<li>Không phản ánh khả năng tạo lợi nhuận và tăng trưởng trong tương lai.</li>
<li>Bị ảnh hưởng bởi lựa chọn kế toán (phương pháp khấu hao, mua lại cổ phiếu quỹ làm giảm vốn chủ).</li>
</ul>
<p>Book value gần với giá trị nội tại hơn khi tài sản chủ yếu là tài sản tài chính ghi theo giá trị hợp lý, ví dụ ngân hàng và công ty bảo hiểm.</p>

<h4>b) Vốn hóa thị trường (market capitalization)</h4>
<div class="formula">${t('mcap', 'Vốn hóa thị trường')} = Giá cổ phiếu × Số cổ phiếu đang lưu hành</div>
<p>Đây là giá trị vốn chủ <b>theo thị trường</b>, nhìn về <b>tương lai</b>: nó chứa kỳ vọng của nhà đầu tư về lợi nhuận và rủi ro. Nếu thị trường hiệu quả, vốn hóa là ước tính tốt của giá trị nội tại vốn chủ. Nhưng vốn hóa cũng chứa luôn cả sai lệch giá, nên nó <b>không thể</b> dùng để kết luận cổ phiếu rẻ hay đắt. Nó chính là thứ mà ta đem so với giá trị nội tại.</p>
<p>Tỷ số ${t('pb', 'P/B')} = vốn hóa / giá trị sổ sách cho biết thị trường trả bao nhiêu đồng cho mỗi đồng vốn chủ kế toán. P/B cao thường có nghĩa thị trường kỳ vọng công ty tạo ra lợi nhuận vượt mức (ROE cao hơn lợi suất yêu cầu), hoặc có nhiều tài sản vô hình không ghi sổ.</p>

<h4>c) Giá trị doanh nghiệp (enterprise value, EV)</h4>
<div class="formula">${t('ev', 'EV')} = Vốn hóa thị trường + Cổ phiếu ưu đãi + Nợ vay + ${t('nci', 'Lợi ích cổ đông không kiểm soát')} - Tiền và đầu tư ngắn hạn</div>
<p>EV đo giá trị của <b>toàn bộ hoạt động kinh doanh</b>, thuộc về tất cả những người cấp vốn (cổ đông thường, cổ đông ưu đãi, chủ nợ). Có thể hiểu: muốn mua đứt công ty, bạn phải trả cho cổ đông, gánh luôn khoản nợ, nhưng được giữ lại tiền mặt trong két, nên tiền mặt được trừ ra.</p>
<p>Vì EV không phụ thuộc vào việc công ty tài trợ bằng nợ hay vốn chủ, nó phù hợp để <b>so sánh các công ty có cơ cấu vốn khác nhau</b>. Muốn đi từ EV về giá trị vốn chủ thì làm ngược lại: trừ nợ, ưu đãi, lợi ích không kiểm soát và cộng lại tiền.</p>

<div class="example"><div class="ex-h">Ví dụ 3.1 - Công ty Sao Mai</div>
<p>Sao Mai có 200 triệu cổ phiếu, giá 30 USD. Số liệu (triệu USD): vốn chủ sở hữu trên sổ sách 2.400; nợ vay (giá thị trường) 1.500; cổ phiếu ưu đãi 300; lợi ích cổ đông không kiểm soát 200; tiền và đầu tư ngắn hạn 900. EBITDA năm nay 1.000. Tính vốn hóa, giá trị sổ sách mỗi cổ phiếu, P/B, EV và EV/EBITDA.</p>
<details><summary>Xem lời giải</summary>
<p>Vốn hóa = 30 × 200 = <b>6.000</b>.<br>
Giá trị sổ sách mỗi cổ phiếu = 2.400 / 200 = <b>12</b>; P/B = 30 / 12 = <b>2,5</b>.<br>
EV = 6.000 + 300 + 1.500 + 200 - 900 = <b>7.100</b>; EV/EBITDA = 7.100 / 1.000 = <b>7,1</b>.</p>
<p>Diễn giải: thị trường trả 2,5 đồng cho mỗi đồng vốn chủ ghi sổ, tức kỳ vọng Sao Mai tạo ra giá trị cao hơn nhiều so với số vốn đã bỏ vào. Bên mua toàn bộ hoạt động kinh doanh phải trả khoảng 7,1 lần EBITDA một năm.</p></details></div>

<table class="plain"><thead><tr><th>Thước đo</th><th>Thuộc về ai</th><th>Góc nhìn</th><th>Dùng làm chỉ báo giá trị nội tại khi</th></tr></thead><tbody>
<tr><td>Book value</td><td>Cổ đông thường</td><td>Kế toán, quá khứ</td><td>Tài sản chủ yếu là tài chính, ghi giá trị hợp lý (ngân hàng, bảo hiểm); làm "mức sàn" thô</td></tr>
<tr><td>Market cap</td><td>Cổ đông thường</td><td>Thị trường, tương lai</td><td>Thị trường hiệu quả, cổ phiếu thanh khoản tốt; là đối tượng để so sánh với giá trị nội tại</td></tr>
<tr><td>EV</td><td>Mọi người cấp vốn</td><td>Thị trường, toàn doanh nghiệp</td><td>So sánh công ty khác đòn bẩy; định giá thương vụ mua lại; dùng với EBITDA, EBIT, doanh thu</td></tr>
</tbody></table>
<p class="warn"><b>Bẫy dấu:</b> tiền mặt được <b>trừ</b> khỏi EV, không cộng. Lợi ích cổ đông không kiểm soát và cổ phiếu ưu đãi được <b>cộng</b> (họ cũng có quyền với dòng tiền hoạt động). Một công ty nhiều tiền mặt, không nợ có EV <b>nhỏ hơn</b> vốn hóa.</p>`,
    },
    {
      title: '4. Ba nhóm mô hình định giá',
      minutes: 20,
      html: `
<p>Có rất nhiều mô hình, nhưng tất cả đều thuộc một trong ba nhóm:</p>
<h4>a) Mô hình hiện tại hóa dòng tiền (present value models, DCF)</h4>
<div class="formula">V<sub>0</sub> = Σ ${frac('CF<sub>t</sub>', '(1 + r)<sup>t</sup>')}</div>
<p>Giá trị = tổng giá trị hiện tại của các lợi ích tương lai mà cổ phiếu mang lại. Đây là cách định giá ${t('absolute', 'tuyệt đối (absolute valuation)')}: giá trị được tính từ chính dòng tiền của công ty, không cần nhìn công ty khác. Dòng tiền có thể là:</p>
<ul>
<li><b>Cổ tức</b>: ${t('ddm', 'mô hình chiết khấu cổ tức (DDM)')}.</li>
<li><b>Dòng tiền tự do</b>: ${t('fcfe', 'FCFE')} (cho cổ đông) hoặc ${t('fcff', 'FCFF')} (cho toàn doanh nghiệp).</li>
<li><b>Lợi nhuận thặng dư</b>: ${t('ri', 'mô hình residual income')}, giá trị = book value + PV của phần lợi nhuận vượt chi phí vốn chủ.</li>
</ul>
<p>EQ-06 sẽ dạy chi tiết từng mô hình.</p>

<h4>b) Mô hình bội số (multiplier / market multiple models)</h4>
<p>Dùng tỷ số giữa giá (hoặc EV) và một chỉ tiêu cơ bản:</p>
<ul>
<li>${t('pricemult', 'Bội số giá (price multiples)')}: P/E, P/B, P/S, P/CF. Tử số là giá cổ phiếu, chỉ tiêu ở mẫu số thuộc về cổ đông.</li>
<li>${t('evmult', 'Bội số EV (enterprise value multiples)')}: EV/EBITDA, EV/EBIT, EV/Sales. Mẫu số là chỉ tiêu thuộc về toàn doanh nghiệp (trước lãi vay).</li>
</ul>
<p>Có hai cách dùng: <b>so sánh với công ty tương tự</b> (${t('comparables', 'method of comparables')}, định giá ${t('relative', 'tương đối')}) hoặc <b>tính bội số "đáng có" từ mô hình DCF</b> (${t('fundamentals', 'method of forecasted fundamentals')}). EQ-07 sẽ dạy chi tiết.</p>

<h4>c) Mô hình dựa trên tài sản (asset-based valuation)</h4>
<div class="formula">Giá trị vốn chủ = Giá trị hợp lý của tài sản - Giá trị hợp lý của nợ phải trả</div>
<p>Bắt đầu từ bảng cân đối, điều chỉnh từng khoản về giá thị trường (hoặc giá trị hợp lý). Phù hợp với công ty mà giá trị nằm chủ yếu ở tài sản hữu hình dễ định giá: công ty bất động sản, công ty nắm giữ tài nguyên, công ty đang thanh lý.</p>
<div class="example"><div class="ex-h">Ví dụ 4.1</div>
<p>Tiếp tục với Sao Mai (200 triệu cổ phiếu, giá 30). Một chuyên gia thẩm định cho rằng giá trị hợp lý của toàn bộ tài sản là 5.200, của toàn bộ nợ phải trả là 3.100. Giá trị theo tài sản mỗi cổ phiếu là bao nhiêu và nói lên điều gì?</p>
<details><summary>Xem lời giải</summary>
<p>Giá trị vốn chủ = 5.200 - 3.100 = 2.100; mỗi cổ phiếu = 2.100 / 200 = <b>10,5</b>.</p>
<p>Giá thị trường 30 gấp gần 3 lần giá trị tài sản. Thị trường đang trả rất nhiều cho thứ <b>không nằm trên bảng cân đối</b>: thương hiệu, khả năng sinh lời và tăng trưởng. Với Sao Mai, mô hình tài sản chỉ cho một <b>mức sàn</b>, không phải ước tính tốt của giá trị nội tại.</p></details></div>

<table class="plain"><thead><tr><th>Nhóm</th><th>Câu hỏi trả lời</th><th>Ví dụ</th></tr></thead><tbody>
<tr><td>Hiện tại hóa dòng tiền</td><td>Dòng tiền tương lai đáng giá bao nhiêu hôm nay?</td><td>DDM, FCFE, FCFF, residual income</td></tr>
<tr><td>Bội số</td><td>Công ty tương tự đang được trả giá bao nhiêu cho mỗi đồng lợi nhuận, doanh thu...?</td><td>P/E, P/B, P/S, P/CF, EV/EBITDA</td></tr>
<tr><td>Dựa trên tài sản</td><td>Tài sản trừ nợ, tính theo giá thị trường, còn lại bao nhiêu?</td><td>Book value điều chỉnh, giá trị thanh lý</td></tr>
</tbody></table>`,
    },
    {
      title: '5. Ưu, nhược điểm và cách chọn mô hình',
      minutes: 11,
      html: `
<table class="plain"><thead><tr><th>Nhóm</th><th>Ưu điểm</th><th>Nhược điểm</th></tr></thead><tbody>
<tr><td><b>Hiện tại hóa dòng tiền</b></td><td>Có nền tảng lý thuyết vững (giá trị = PV dòng tiền); được giới phân tích chấp nhận rộng rãi; buộc nhà phân tích suy nghĩ rõ ràng về tăng trưởng, rủi ro, đầu tư</td><td>Phải ước tính nhiều đầu vào cho nhiều năm; kết quả <b>rất nhạy</b> với lợi suất yêu cầu và tốc độ tăng trưởng; khó áp dụng cho công ty có dòng tiền âm hoặc khó dự báo</td></tr>
<tr><td><b>Bội số so sánh</b></td><td>Dễ tính, dữ liệu có sẵn; dùng được cho so sánh theo thời gian và giữa các công ty; phản ánh đánh giá hiện tại của thị trường</td><td>Nếu cả nhóm so sánh đang bị định giá cao thì công ty mục tiêu cũng bị "định giá cao theo"; khó tìm công ty thực sự tương đồng; lựa chọn kế toán làm mẫu số khó so sánh; bội số theo lợi nhuận vô nghĩa khi lợi nhuận âm</td></tr>
<tr><td><b>Bội số theo cơ bản</b></td><td>Xuất phát từ mô hình có lý thuyết vững; dùng ngôn ngữ bội số quen thuộc</td><td>Cũng rất nhạy với đầu vào, nhất là mẫu số (r - g)</td></tr>
<tr><td><b>Dựa trên tài sản</b></td><td>Cho <b>mức sàn</b> giá trị; đáng tin khi tài sản chủ yếu hữu hình, ngắn hạn, có giá thị trường sẵn, hoặc khi công ty sắp thanh lý; ngày càng hữu ích khi chuẩn mực kế toán dùng nhiều giá trị hợp lý</td><td>Giá thị trường của nhiều tài sản khó xác định; giá thị trường thường khác book value; không chính xác khi công ty có nhiều tài sản vô hình hoặc dòng tiền tương lai không thể hiện trong tài sản; khó dùng khi lạm phát rất cao</td></tr>
</tbody></table>

<h4>Chọn mô hình theo đặc điểm công ty</h4>
<p>Không có mô hình "tốt nhất" cho mọi trường hợp. Câu hỏi đúng là: mô hình nào phù hợp với <b>đặc điểm của công ty</b> và <b>mục đích định giá</b>?</p>
<table class="plain"><thead><tr><th>Đặc điểm công ty</th><th>Mô hình thường phù hợp</th></tr></thead><tbody>
<tr><td>Trưởng thành, trả cổ tức đều và có chính sách cổ tức gắn với lợi nhuận</td><td>DDM (Gordon)</td></tr>
<tr><td>Không trả hoặc trả ít cổ tức, nhưng dòng tiền tự do dương và dự báo được</td><td>FCFE (nếu đòn bẩy ổn định) hoặc FCFF (nếu đòn bẩy cao hoặc thay đổi)</td></tr>
<tr><td>Dòng tiền tự do âm nhiều năm (đang đầu tư mạnh), nhưng có book value và lợi nhuận</td><td>Residual income; bội số P/B</td></tr>
<tr><td>Có nhiều công ty niêm yết tương tự</td><td>Bội số so sánh (P/E, EV/EBITDA)</td></tr>
<tr><td>Công ty đang lỗ hoặc mới khởi nghiệp</td><td>P/S, EV/Sales; DCF nhiều giai đoạn với nhiều kịch bản</td></tr>
<tr><td>Tài sản chủ yếu hữu hình, có giá thị trường; công ty sắp thanh lý</td><td>Dựa trên tài sản</td></tr>
</tbody></table>
<p class="tip"><b>Thực tế nghề nghiệp:</b> nhà phân tích thường dùng <b>nhiều mô hình cùng lúc</b> rồi đối chiếu. Nếu DCF cho 50 mà bội số so sánh cho 30, đó là tín hiệu phải tìm hiểu: giả định tăng trưởng quá cao, hay cả ngành đang bị định giá thấp? Báo cáo phân tích (EQ-11) thường trình bày một khoảng giá trị và lý giải khác biệt giữa các phương pháp.</p>`,
    },
    {
      title: '6. Tóm tắt và bẫy thường gặp',
      minutes: 6,
      html: `
<table class="plain"><thead><tr><th>Tình huống</th><th>Nhớ</th></tr></thead><tbody>
<tr><td>Giá trị nội tại &gt; giá</td><td>Bị định giá thấp (undervalued). Ngược lại là định giá cao</td></tr>
<tr><td>Chênh lệch giá và giá trị rất lớn</td><td>Xem lại giả định trước khi kết luận; thị trường có thể biết điều bạn chưa biết</td></tr>
<tr><td>% tăng giá cần thiết</td><td>(V - P) / P, mẫu số là <b>giá</b>; biên an toàn dùng mẫu số là giá trị</td></tr>
<tr><td>Book value</td><td>Kế toán, quá khứ, thiếu tài sản vô hình tự tạo; hợp với ngân hàng, bảo hiểm</td></tr>
<tr><td>Market cap</td><td>Giá × số cổ phiếu đang lưu hành; là thứ đem so với giá trị nội tại, không phải giá trị nội tại</td></tr>
<tr><td>EV</td><td>Cộng nợ, ưu đãi, lợi ích không kiểm soát; <b>trừ</b> tiền. Dùng khi so sánh công ty khác đòn bẩy</td></tr>
<tr><td>Ba nhóm mô hình</td><td>Hiện tại hóa dòng tiền (tuyệt đối) · bội số (tương đối hoặc theo cơ bản) · dựa trên tài sản (mức sàn)</td></tr>
<tr><td>Nhược điểm của bội số so sánh</td><td>Cả nhóm bị định giá sai thì kết luận cũng sai theo</td></tr>
<tr><td>Asset-based phù hợp</td><td>Tài sản hữu hình, có giá thị trường; công ty thanh lý. Không hợp với công ty công nghệ, dịch vụ</td></tr>
</tbody></table>
<p>Tiếp theo: tab <b>Luyện tập</b> 10 câu (rút ngẫu nhiên từ ngân hàng 30 câu, mỗi lần làm một bộ khác), rồi sang EQ-06 để học cách tính giá trị nội tại bằng mô hình dòng tiền.</p>`,
    },
  ];

  const glossary = {
    iv: ['Intrinsic value', 'Giá trị nội tại', 'Giá trị của cổ phiếu dựa trên đặc điểm đầu tư của nó khi được hiểu đầy đủ; do nhà phân tích ước tính, không quan sát được.'],
    price: ['Market price', 'Giá thị trường', 'Mức giá giao dịch thực tế trên thị trường, do cung cầu quyết định.'],
    under: ['Undervalued', 'Bị định giá thấp', 'Giá trị nội tại ước tính lớn hơn giá thị trường.'],
    fair: ['Fairly valued', 'Được định giá hợp lý', 'Giá trị nội tại ước tính bằng (xấp xỉ) giá thị trường.'],
    over: ['Overvalued', 'Bị định giá cao', 'Giá trị nội tại ước tính nhỏ hơn giá thị trường.'],
    mos: ['Margin of safety', 'Biên an toàn', 'Phần giá thị trường thấp hơn giá trị ước tính, tính trên giá trị; tạo vùng đệm cho sai số mô hình.'],
    goingconcern: ['Going-concern value', 'Giá trị hoạt động liên tục', 'Giá trị khi giả định công ty tiếp tục hoạt động trong tương lai có thể thấy trước.'],
    liquidation: ['Liquidation value', 'Giá trị thanh lý', 'Giá trị nếu công ty giải thể, bán tài sản riêng lẻ và trả hết nợ.'],
    fmv: ['Fair market value', 'Giá trị thị trường hợp lý', 'Giá giao dịch giữa người mua và bán tự nguyện, đủ thông tin, không bị ép buộc.'],
    bv: ['Book value of equity', 'Giá trị sổ sách vốn chủ', 'Tổng tài sản trừ tổng nợ phải trả theo bảng cân đối kế toán.'],
    mcap: ['Market capitalization', 'Vốn hóa thị trường', 'Giá cổ phiếu nhân số cổ phiếu đang lưu hành; giá trị vốn chủ theo thị trường.'],
    pb: ['Price-to-book ratio (P/B)', 'Tỷ số giá trên giá trị sổ sách', 'Giá cổ phiếu chia giá trị sổ sách mỗi cổ phiếu (hoặc vốn hóa chia vốn chủ).'],
    ev: ['Enterprise value (EV)', 'Giá trị doanh nghiệp', 'Vốn hóa + cổ phiếu ưu đãi + nợ + lợi ích không kiểm soát - tiền và đầu tư ngắn hạn; giá trị toàn bộ hoạt động kinh doanh.'],
    nci: ['Non-controlling (minority) interest', 'Lợi ích cổ đông không kiểm soát', 'Phần vốn chủ của công ty con thuộc về cổ đông khác ngoài công ty mẹ.'],
    absolute: ['Absolute valuation model', 'Mô hình định giá tuyệt đối', 'Ước tính giá trị từ chính dòng tiền hoặc tài sản của công ty, không dựa vào giá của công ty khác.'],
    ddm: ['Dividend discount model (DDM)', 'Mô hình chiết khấu cổ tức', 'Giá trị cổ phiếu = PV của cổ tức tương lai, chiết khấu ở lợi suất yêu cầu vốn chủ.'],
    fcfe: ['Free cash flow to equity (FCFE)', 'Dòng tiền tự do cho cổ đông', 'Dòng tiền còn lại cho cổ đông sau chi phí, đầu tư và các khoản liên quan đến nợ.'],
    fcff: ['Free cash flow to the firm (FCFF)', 'Dòng tiền tự do cho doanh nghiệp', 'Dòng tiền còn lại cho tất cả người cấp vốn (chủ nợ và cổ đông) sau chi phí và đầu tư.'],
    ri: ['Residual income model', 'Mô hình lợi nhuận thặng dư', 'Giá trị = book value hiện tại + PV của phần lợi nhuận vượt chi phí vốn chủ.'],
    pricemult: ['Price multiples', 'Bội số giá', 'Tỷ số giữa giá cổ phiếu và một chỉ tiêu mỗi cổ phiếu: P/E, P/B, P/S, P/CF.'],
    evmult: ['Enterprise value multiples', 'Bội số giá trị doanh nghiệp', 'Tỷ số giữa EV và chỉ tiêu toàn doanh nghiệp: EV/EBITDA, EV/EBIT, EV/Sales.'],
    comparables: ['Method of comparables', 'Phương pháp so sánh', 'Định giá dựa trên bội số của các công ty hoặc chuẩn tương tự (luật một giá).'],
    relative: ['Relative valuation', 'Định giá tương đối', 'Đánh giá cổ phiếu đắt hay rẻ so với cổ phiếu khác hoặc so với chính nó trong quá khứ.'],
    fundamentals: ['Method of forecasted fundamentals', 'Phương pháp theo dự báo cơ bản', 'Tính bội số hợp lý từ các dự báo cơ bản (tăng trưởng, lợi suất yêu cầu, tỷ lệ chi trả) qua mô hình DCF.'],
  };

  const practice = [
    { q: 'Một nhà phân tích ước tính giá trị nội tại của cổ phiếu là 50, trong khi giá thị trường hiện tại là 45. Theo nhà phân tích, cổ phiếu này:', choices: ['Bị định giá thấp (undervalued)', 'Bị định giá cao (overvalued)', 'Được định giá hợp lý (fairly valued)'], answer: 0, explain: 'Giá trị nội tại (50) lớn hơn giá thị trường (45) nên cổ phiếu bị định giá thấp. Phương án "định giá cao" là đảo ngược quan hệ giữa giá và giá trị.' },
    { q: 'Công ty có vốn hóa 4.000, nợ vay 1.200, cổ phiếu ưu đãi 200, lợi ích cổ đông không kiểm soát 100, tiền và đầu tư ngắn hạn 500. Giá trị doanh nghiệp (EV) gần nhất với:', choices: ['4.700', '5.000', '6.000'], answer: 1, explain: 'EV = 4.000 + 1.200 + 200 + 100 - 500 = 5.000. Lựa chọn 6.000 cộng tiền thay vì trừ (sai dấu). Lựa chọn 4.700 quên cộng cổ phiếu ưu đãi và lợi ích không kiểm soát.' },
    { q: 'Với một công ty phần mềm mà tài sản giá trị nhất là công nghệ tự phát triển và thương hiệu, thước đo nào KÉM tin cậy nhất để làm chỉ báo giá trị nội tại của vốn chủ?', choices: ['Vốn hóa thị trường', 'Giá trị doanh nghiệp (EV) trừ nợ ròng', 'Giá trị sổ sách vốn chủ'], answer: 2, explain: 'Tài sản vô hình tự tạo hầu như không được ghi nhận trên bảng cân đối, nên book value đánh giá thấp nghiêm trọng giá trị của công ty phần mềm. Vốn hóa và EV dựa trên giá thị trường nên phản ánh được kỳ vọng về các tài sản này.' },
    { q: 'Mô hình định giá dựa trên tài sản (asset-based) phù hợp NHẤT cho công ty nào?', choices: ['Công ty sắp giải thể, tài sản chủ yếu là đất và hàng tồn kho có giá thị trường', 'Công ty công nghệ tăng trưởng nhanh, đầu tư mạnh vào R&D', 'Công ty tư vấn có tài sản chính là đội ngũ nhân sự'], answer: 0, explain: 'Asset-based đáng tin khi tài sản hữu hình, có giá thị trường sẵn, hoặc công ty đang thanh lý. Công ty công nghệ đầu tư mạnh vào R&D và công ty tư vấn có giá trị chủ yếu từ tài sản vô hình và tăng trưởng tương lai, không thể hiện trên bảng cân đối.' },
    { q: 'Mô hình của một nhà phân tích cho giá trị nội tại 80, trong khi cổ phiếu đang giao dịch ở 50 và có thanh khoản tốt. Hành động phù hợp NHẤT là:', choices: ['Khuyến nghị mua mạnh vì cổ phiếu chắc chắn bị định giá thấp 60%', 'Kiểm tra lại các giả định và tìm hiểu thị trường đang kỳ vọng điều gì', 'Kết luận thị trường không hiệu quả và bỏ qua giá thị trường'], answer: 1, explain: 'Giá trị nội tại chỉ là ước tính. Với cổ phiếu thanh khoản tốt, chênh lệch lớn như vậy đòi hỏi nhà phân tích xem lại giả định và hiểu vì sao thị trường định giá khác, trước khi đưa ra khuyến nghị. Phương án "khuyến nghị mua mạnh" và phương án "bỏ qua giá thị trường" đều bỏ qua thông tin chứa trong giá thị trường.' },
    { q: 'Nhược điểm chính của phương pháp so sánh bội số (method of comparables) là:', choices: ['Không sử dụng được dữ liệu giá thị trường', 'Phải dự báo dòng tiền cho vô số năm trong tương lai', 'Nếu cả nhóm so sánh đang bị định giá cao, cổ phiếu mục tiêu cũng bị đánh giá cao theo'], answer: 2, explain: 'Phương pháp so sánh chỉ cho biết cổ phiếu đắt hay rẻ TƯƠNG ĐỐI so với nhóm. Nếu cả nhóm bị định giá sai, kết luận cũng sai theo. Phương án "không sử dụng được dữ liệu giá thị trường" sai vì phương pháp này dựa vào giá thị trường; dự báo dòng tiền cho vô số năm là đặc điểm của mô hình DCF.' },
    { q: 'Giá trị nội tại ước tính là 40, giá thị trường là 34. Giá cần tăng bao nhiêu phần trăm để bằng giá trị nội tại?', choices: ['17,65%', '15,00%', '6,00%'], answer: 0, explain: '(40 - 34) / 34 = 17,65%. Lựa chọn 15,00% chia cho giá trị (40) thay vì giá hiện tại, đó là biên an toàn chứ không phải mức tăng giá. Lựa chọn 6,00% là chênh lệch tuyệt đối, không phải phần trăm.' },
    { q: 'Một công ty không trả cổ tức nhưng có dòng tiền tự do dương, ổn định và dự báo được; cơ cấu vốn ổn định. Mô hình hiện tại hóa phù hợp NHẤT là:', choices: ['Mô hình chiết khấu cổ tức (DDM)', 'Mô hình dòng tiền tự do cho cổ đông (FCFE)', 'Mô hình dựa trên tài sản'], answer: 1, explain: 'Không có cổ tức nên DDM khó áp dụng. Dòng tiền tự do dương, dự báo được và đòn bẩy ổn định là điều kiện lý tưởng cho FCFE. Mô hình tài sản không thuộc nhóm hiện tại hóa dòng tiền.' },
    { q: 'Cổ phiếu giá 45; công ty có vốn chủ sở hữu trên sổ sách 1.800 và 100 cổ phiếu đang lưu hành. P/B gần nhất với:', choices: ['0,40', '40,00', '2,50'], answer: 2, explain: 'Book value mỗi cổ phiếu = 1.800 / 100 = 18; P/B = 45 / 18 = 2,50. Lựa chọn 0,40 đảo ngược tử và mẫu (18/45). Lựa chọn 40,00 quên chia vốn chủ cho số cổ phiếu (1.800/45).' },
    { q: 'Khi so sánh định giá của hai công ty cùng ngành nhưng một công ty vay nợ nhiều và công ty kia gần như không nợ, nhà phân tích nên ưu tiên thước đo nào?', choices: ['EV/EBITDA, vì EV và EBITDA không phụ thuộc cơ cấu vốn', 'Vốn hóa thị trường, vì nó phản ánh toàn bộ giá trị công ty', 'Book value, vì không bị ảnh hưởng bởi tâm lý thị trường'], answer: 0, explain: 'EV gồm cả nợ và vốn chủ, EBITDA là lợi nhuận trước lãi vay, nên tỷ số này so sánh được các công ty khác đòn bẩy. Vốn hóa thị trường không phù hợp vì chỉ là giá trị vốn chủ, bỏ qua nợ. Book value không phù hợp vì là số kế toán, không phải giá trị nội tại.' },
    { q: 'Nhà phân tích ước tính giá trị nội tại của cổ phiếu là 36, trong khi giá thị trường là 42. Theo nhà phân tích, cổ phiếu đang ở trạng thái nào và giá phải thay đổi bao nhiêu để bằng giá trị nội tại?', choices: ['Định giá thấp; giá cần tăng 16,67%', 'Định giá cao; giá cần giảm 14,29%', 'Định giá cao; giá cần giảm 16,67%'], answer: 1, explain: 'Giá trị 36 nhỏ hơn giá 42 nên cổ phiếu bị định giá cao. Mức thay đổi tính trên giá hiện tại: (36 - 42) / 42 = -14,29%. Lựa chọn "giảm 16,67%" chia chênh lệch 6 cho giá trị 36 thay vì cho giá. Lựa chọn "định giá thấp" đảo ngược quan hệ giữa giá và giá trị.' },
    { q: 'Giá trị nội tại ước tính của một cổ phiếu là 60, giá thị trường là 48. Biên an toàn (margin of safety), tính theo phần trăm giá trị ước tính, là:', choices: ['20,00%', '25,00%', '12,00%'], answer: 0, explain: 'Biên an toàn = (60 - 48) / 60 = 20,00%: giá thấp hơn giá trị ước tính 20%. Lựa chọn 25,00% chia cho giá (48), đó là mức giá cần tăng. Lựa chọn 12,00% là chênh lệch tuyệt đối, không phải phần trăm.' },
    { q: 'Cổ phiếu giá 40, cổ tức dự kiến năm tới 1,60, lợi suất yêu cầu 9%. Giả sử giá thị trường đúng, tốc độ tăng trưởng cổ tức mà thị trường đang ngầm giả định là:', choices: ['4,00%', '13,00%', '5,00%'], answer: 2, explain: 'Từ Gordon: g = r - D1 / P0 = 9% - 1,60 / 40 = 9% - 4% = 5,00%. Lựa chọn 13,00% cộng lợi suất cổ tức vào r thay vì trừ. Lựa chọn 4,00% chỉ là lợi suất cổ tức D1 / P0.' },
    { q: 'Một công ty đang hoạt động bình thường, dự kiến tiếp tục kinh doanh trong tương lai có thể thấy trước. Khái niệm giá trị nào là giả định mặc định của hầu hết mô hình định giá?', choices: ['Giá trị thanh lý (liquidation value)', 'Giá trị hoạt động liên tục (going-concern value)', 'Giá trị sổ sách (book value)'], answer: 1, explain: 'Hầu hết mô hình giả định công ty tiếp tục hoạt động (going concern) và tạo ra dòng tiền trong tương lai. Giá trị thanh lý chỉ phù hợp khi công ty sắp bán tài sản riêng lẻ và giải thể, thường thấp hơn. Book value là con số kế toán, không phải một khái niệm giá trị nội tại.' },
    { q: 'Giá trị thị trường hợp lý (fair market value) được định nghĩa đúng NHẤT là:', choices: ['Giá trị do nhà phân tích ước tính dựa trên hiểu biết đầy đủ về đặc điểm đầu tư của tài sản', 'Số tiền thu được khi bán gấp từng tài sản riêng lẻ', 'Mức giá giao dịch giữa người mua và người bán tự nguyện, đủ thông tin, không bị ép buộc'], answer: 2, explain: 'Fair market value là giá giữa các bên tự nguyện, có hiểu biết, không bị ép. Giá trị do nhà phân tích ước tính dựa trên hiểu biết đầy đủ là giá trị nội tại. Bán gấp từng tài sản riêng lẻ mô tả giá trị thanh lý.' },
    { q: 'Công ty đã phát hành 160 triệu cổ phiếu, trong đó 10 triệu là cổ phiếu quỹ. Giá cổ phiếu 22. Vốn hóa thị trường là:', choices: ['3.520 triệu', '3.740 triệu', '3.300 triệu'], answer: 2, explain: 'Vốn hóa = giá x số cổ phiếu đang lưu hành = 22 x (160 - 10) = 3.300 triệu. Lựa chọn 3.520 triệu dùng số cổ phiếu đã phát hành, quên trừ cổ phiếu quỹ. Lựa chọn 3.740 triệu cộng cổ phiếu quỹ thay vì trừ.' },
    { q: 'Công ty có vốn hóa 5.000, không có nợ vay, không có cổ phiếu ưu đãi hay lợi ích cổ đông không kiểm soát, nắm 1.200 tiền và đầu tư ngắn hạn. Giá trị doanh nghiệp (EV) là:', choices: ['3.800', '5.000', '6.200'], answer: 0, explain: 'EV = 5.000 + 0 - 1.200 = 3.800. Công ty nhiều tiền mặt, không nợ có EV nhỏ hơn vốn hóa vì người mua toàn bộ công ty được giữ lại tiền. Lựa chọn 6.200 cộng tiền thay vì trừ. Lựa chọn 5.000 coi EV bằng vốn hóa, bỏ qua tiền mặt.' },
    { q: 'Nhà phân tích ước tính giá trị doanh nghiệp (EV) của một công ty là 9.000. Công ty có nợ vay 2.500, cổ phiếu ưu đãi 400, lợi ích cổ đông không kiểm soát 300, tiền và đầu tư ngắn hạn 900, và 250 cổ phiếu phổ thông. Giá trị vốn chủ mỗi cổ phiếu gần nhất với:', choices: ['19,60', '26,80', '29,60'], answer: 1, explain: 'Giá trị vốn chủ = 9.000 - 2.500 - 400 - 300 + 900 = 6.700; mỗi cổ phiếu = 6.700 / 250 = 26,80. Lựa chọn 19,60 trừ tiền thay vì cộng lại (4.900 / 250). Lựa chọn 29,60 quên trừ cổ phiếu ưu đãi và lợi ích không kiểm soát (7.400 / 250).' },
    { q: 'Một công ty có P/B là 4,0 trong khi các công ty cùng ngành có P/B khoảng 1,5. Cách giải thích hợp lý NHẤT là:', choices: ['Công ty chắc chắn bị định giá cao gấp hơn 2 lần', 'Thị trường kỳ vọng công ty có ROE cao hơn lợi suất yêu cầu hoặc có nhiều tài sản vô hình không ghi sổ', 'Giá trị sổ sách của công ty chính xác hơn các công ty khác'], answer: 1, explain: 'P/B cao cho thấy thị trường trả nhiều hơn cho mỗi đồng vốn chủ kế toán, thường vì kỳ vọng lợi nhuận vượt mức (ROE > lợi suất yêu cầu) hoặc tài sản vô hình tự tạo không có trên bảng cân đối. P/B cao một mình không chứng minh cổ phiếu bị định giá cao. Không có cơ sở nói book value của công ty này chính xác hơn.' },
    { q: 'Giá trị sổ sách vốn chủ sở hữu là chỉ báo tương đối tốt cho giá trị nội tại đối với loại công ty nào?', choices: ['Công ty công nghệ có nhiều tài sản vô hình tự tạo', 'Công ty dịch vụ có tài sản chính là đội ngũ nhân sự', 'Ngân hàng và công ty bảo hiểm có tài sản chủ yếu là tài sản tài chính ghi theo giá trị hợp lý'], answer: 2, explain: 'Book value gần với giá trị nội tại hơn khi tài sản chủ yếu là tài sản tài chính được ghi theo giá trị hợp lý, như ở ngân hàng và bảo hiểm. Với công ty công nghệ và công ty dịch vụ, giá trị chính (công nghệ, thương hiệu, con người) hầu như không được ghi nhận trên bảng cân đối.' },
    { q: 'Một công ty sở hữu khu đất mua từ 20 năm trước, ghi sổ theo giá gốc, trong khi giá đất thị trường đã tăng gấp nhiều lần. Đối với khoản mục này, giá trị sổ sách vốn chủ có khả năng:', choices: ['Đánh giá thấp giá trị kinh tế của công ty', 'Đánh giá cao giá trị kinh tế của công ty', 'Phản ánh đúng giá trị kinh tế vì đã được kiểm toán'], answer: 0, explain: 'Tài sản ghi theo giá gốc có thể lệch xa giá thị trường hiện tại; đất tăng giá mà không được ghi nhận làm book value thấp hơn giá trị kinh tế. Lựa chọn "đánh giá cao" đảo ngược chiều tác động. Kiểm toán xác nhận số liệu tuân thủ chuẩn mực kế toán, không biến giá gốc thành giá thị trường.' },
    { q: 'Vì sao vốn hóa thị trường không thể dùng để kết luận một cổ phiếu đang rẻ hay đắt?', choices: ['Vì vốn hóa là con số kế toán nhìn về quá khứ', 'Vì vốn hóa chính là giá thị trường nhân số cổ phiếu, tức là thứ cần đem so với giá trị nội tại, nó chứa luôn cả sai lệch giá nếu có', 'Vì vốn hóa đã trừ tiền mặt và cộng nợ'], answer: 1, explain: 'Vốn hóa = giá x số cổ phiếu lưu hành; nếu giá đang sai lệch thì vốn hóa cũng sai lệch theo, nên nó là đối tượng để so sánh chứ không phải thước đo độc lập. Con số kế toán nhìn về quá khứ là book value. Cộng nợ và trừ tiền mặt là cách tính EV.' },
    { q: 'Công ty có vốn hóa 6.000, nợ vay 2.000, tiền và đầu tư ngắn hạn 500, không có cổ phiếu ưu đãi hay lợi ích cổ đông không kiểm soát. EBITDA là 1.250. EV/EBITDA gần nhất với:', choices: ['4,8', '6,8', '6,0'], answer: 2, explain: 'EV = 6.000 + 2.000 - 500 = 7.500; EV/EBITDA = 7.500 / 1.250 = 6,0. Lựa chọn 4,8 lấy vốn hóa chia EBITDA, không nhất quán vì EBITDA thuộc về mọi người cấp vốn. Lựa chọn 6,8 cộng tiền thay vì trừ (8.500 / 1.250).' },
    { q: 'Cặp tử số và mẫu số nào sau đây KHÔNG nhất quán khi xây dựng một bội số định giá?', choices: ['Giá cổ phiếu / EBITDA mỗi cổ phiếu', 'Giá cổ phiếu / EPS', 'EV / doanh thu'], answer: 0, explain: 'EBITDA là lợi nhuận trước lãi vay, thuộc về mọi người cấp vốn, nên phải đi với EV, không đi với giá cổ phiếu (chỉ thuộc cổ đông). P/E dùng giá và lợi nhuận thuộc cổ đông, nhất quán. EV/Sales dùng EV và chỉ tiêu của toàn doanh nghiệp, nhất quán.' },
    { q: 'Nhà phân tích tính P/E "đáng có" của một công ty từ mô hình chiết khấu cổ tức (dựa trên tỷ lệ chi trả, lợi suất yêu cầu và tăng trưởng), thay vì lấy P/E trung bình của các công ty cùng ngành. Cách làm này là:', choices: ['Method of comparables', 'Asset-based valuation', 'Method of forecasted fundamentals'], answer: 2, explain: 'Method of forecasted fundamentals suy ra bội số từ mô hình DCF dựa trên đặc điểm cơ bản của chính công ty. Method of comparables so với bội số của các công ty tương tự. Asset-based dựa trên giá trị hợp lý của tài sản trừ nợ, không dùng bội số.' },
    { q: 'Chuyên gia thẩm định ước tính giá trị hợp lý của toàn bộ tài sản một công ty là 3.600 và của toàn bộ nợ phải trả là 2.100. Công ty có 50 cổ phiếu. Giá trị theo tài sản mỗi cổ phiếu là:', choices: ['30,00', '72,00', '42,00'], answer: 0, explain: 'Giá trị vốn chủ = 3.600 - 2.100 = 1.500; mỗi cổ phiếu = 1.500 / 50 = 30,00. Lựa chọn 72,00 lấy tổng tài sản chia số cổ phiếu, quên trừ nợ. Lựa chọn 42,00 lấy nợ phải trả chia số cổ phiếu.' },
    { q: 'Nhược điểm nào sau đây là của mô hình định giá dựa trên tài sản (asset-based)?', choices: ['Phải dự báo dòng tiền cho nhiều năm trong tương lai', 'Khó xác định giá trị hợp lý của nhiều tài sản và bỏ sót giá trị của tài sản vô hình cũng như dòng tiền tương lai không thể hiện trong tài sản', 'Kết luận sai theo nếu cả nhóm công ty so sánh bị định giá sai'], answer: 1, explain: 'Asset-based kém chính xác khi tài sản khó định giá hoặc khi giá trị đến từ tài sản vô hình và khả năng sinh lời tương lai; cũng khó dùng khi lạm phát rất cao. Dự báo dòng tiền nhiều năm là nhược điểm của DCF. Phụ thuộc vào nhóm so sánh là nhược điểm của phương pháp bội số so sánh.' },
    { q: 'Một công ty khởi nghiệp đang lỗ nhưng doanh thu tăng nhanh, có nhiều công ty tương tự đã niêm yết. Bội số phù hợp NHẤT để định giá là:', choices: ['P/E', 'P/S hoặc EV/Sales', 'P/B'], answer: 1, explain: 'Khi lợi nhuận âm, P/E vô nghĩa; doanh thu dương nên P/S hoặc EV/Sales vẫn dùng được để so sánh. P/B ít ý nghĩa với công ty khởi nghiệp vì giá trị chủ yếu nằm ở tăng trưởng tương lai, không ở vốn chủ kế toán.' },
    { q: 'Một công ty đang đầu tư mạnh nên dòng tiền tự do âm trong nhiều năm, không trả cổ tức, nhưng có giá trị sổ sách và lợi nhuận kế toán đáng tin cậy. Mô hình hiện tại hóa phù hợp NHẤT là:', choices: ['Mô hình chiết khấu cổ tức (DDM)', 'Mô hình FCFE', 'Mô hình lợi nhuận thặng dư (residual income)'], answer: 2, explain: 'Residual income định giá bằng book value cộng PV của lợi nhuận vượt chi phí vốn chủ, nên dùng được khi không có cổ tức và dòng tiền tự do âm. DDM cần cổ tức. FCFE với dòng tiền âm nhiều năm khiến giá trị phụ thuộc gần như hoàn toàn vào giá trị cuối kỳ.' },
    { q: 'Nhược điểm chính của mô hình hiện tại hóa dòng tiền (DCF) là:', choices: ['Kết quả rất nhạy với giả định về lợi suất yêu cầu và tốc độ tăng trưởng, và phải ước tính nhiều đầu vào cho nhiều năm', 'Không có nền tảng lý thuyết rõ ràng', 'Không thể dùng cho công ty có dòng tiền dương'], answer: 0, explain: 'DCF có nền tảng lý thuyết vững (giá trị = PV dòng tiền) nhưng cần nhiều dự báo, và thay đổi nhỏ của r hoặc g có thể làm giá trị thay đổi rất lớn. Lựa chọn "không có nền tảng lý thuyết" đảo ngược ưu điểm của DCF. DCF khó dùng khi dòng tiền âm hoặc khó dự báo, không phải khi dòng tiền dương.' },
  ];

  window.LESSONS['EQ-05'] = {
    moduleId: 'EQ-05',
    calculator: 'Không cần máy tính',
    warmup: [
      'Ôn QM-04: viết công thức Gordon. Nếu đề cho cổ tức vừa trả D0, bạn làm gì trước?',
      'Theo bạn, giá cổ phiếu trên bảng điện có phải là "giá trị thật" của công ty không? Vì sao?',
      'Kể tên 2 công ty bạn biết có giá trị chủ yếu nằm ở tài sản vô hình, và 1 công ty có giá trị chủ yếu ở tài sản hữu hình.',
    ],
    sections,
    glossary,
    practice,
    widgets: {},
    slides: [],
    wrapup: [
      'Phân biệt giá và giá trị bằng một câu của bạn. Khi nào thì cổ phiếu bị định giá thấp?',
      'Viết công thức EV, đánh dấu khoản nào cộng, khoản nào trừ.',
      'Với mỗi nhóm mô hình (dòng tiền, bội số, tài sản), nêu 1 ưu điểm, 1 nhược điểm và 1 loại công ty phù hợp.',
    ],
  };
}());
