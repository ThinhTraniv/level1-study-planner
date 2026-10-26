// Bài giảng EQ-09 - Industry and Competitive Analysis (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t, frac } = window.CFAH;

  const sections = [
    {
      title: '1. Bức tranh lớn',
      minutes: 5,
      html: `
<p>Trước khi hỏi "công ty này tốt không", nhà phân tích phải hỏi "công ty này đang chơi trong <b>sân</b> nào, và sân đó có dễ kiếm tiền không". Cùng một ban lãnh đạo giỏi, nhưng ở một ngành mà khách hàng mạnh, sản phẩm thay thế nhiều và đối thủ liên tục giảm giá thì lợi nhuận vẫn mỏng.</p>
<div class="key">${t('ia', 'Phân tích ngành (industry analysis)')} cho biết <b>môi trường</b> mà công ty kiếm lợi nhuận: ngành lớn cỡ nào, tăng nhanh hay chậm, lợi nhuận cao hay thấp, ai đang giành thị phần, và những lực nào quyết định giá bán. Đó là nền móng cho phân tích công ty (EQ-10), dự báo (EQ-08) và định giá (EQ-05 đến EQ-07).</div>
<p>Module này có 4 LOS, đi theo đúng thứ tự một nhà phân tích làm việc:</p>
<ol>
  <li><b>Quy trình</b> phân tích ngành và cạnh tranh: các bước và mục đích sử dụng (LOS 1, phần 2).</li>
  <li><b>Phân loại ngành</b> và các cách nhóm công ty, từ đó chọn nhóm so sánh (LOS 2, phần 3).</li>
  <li><b>Khảo sát ngành</b>: quy mô, tăng trưởng, vòng đời, lợi nhuận, thị phần và mức độ tập trung (LOS 3, phần 4 và 5).</li>
  <li><b>Phân tích cấu trúc và tác động bên ngoài</b> bằng Porter's Five Forces và PESTLE (LOS 4, phần 6 và 7).</li>
</ol>
<p>Phần 8 nối sang EQ-10: từ cấu trúc ngành suy ra công ty cần chiến lược gì để thắng.</p>
<p class="tip"><b>Cách học module này:</b> gần như không có công thức khó (chỉ CAGR, tỷ lệ tập trung CR và HHI). Đề thi hỏi chủ yếu dạng <b>tình huống</b>: cho mô tả một ngành, hỏi lực nào mạnh, ngành ở giai đoạn nào, cách phân loại nào phù hợp. Hãy học theo các <b>dấu hiệu nhận biết</b>.</p>`,
    },
    {
      title: '2. Quy trình phân tích ngành và cạnh tranh',
      minutes: 10,
      html: `
<h4>Phân tích ngành dùng để làm gì?</h4>
<table class="plain"><thead><tr><th>Ứng dụng</th><th>Ý nghĩa</th></tr></thead><tbody>
<tr><td>Hiểu doanh nghiệp và môi trường kinh doanh</td><td>Cổ phiếu: thấy cơ hội tăng trưởng, động lực cạnh tranh, rủi ro kinh doanh. Tín dụng: đánh giá công ty có nên vay nhiều không và có trả nợ được không.</td></tr>
<tr><td>Dự báo và định giá</td><td>Doanh thu công ty = quy mô thị trường × thị phần. Muốn dự báo thị phần phải hiểu cạnh tranh.</td></tr>
<tr><td>Tìm cơ hội đầu tư chủ động</td><td>Xếp ngành vào nhóm triển vọng tích cực, trung tính, tiêu cực rồi tăng tỷ trọng (overweight), giữ nguyên hoặc giảm tỷ trọng (underweight) so với chuẩn. Chiến lược ${t('rotation', 'luân chuyển ngành (sector rotation)')} chọn ngành theo giai đoạn của chu kỳ kinh tế.</td></tr>
<tr><td>Phân bổ kết quả đầu tư (performance attribution)</td><td>Tách lợi suất của quỹ thành phần do chọn ngành và phần do chọn cổ phiếu trong ngành.</td></tr>
</tbody></table>

<h4>Năm bước của quy trình</h4>
<ol>
  <li><b>Xác định ngành và nhóm so sánh:</b> công ty bán gì, cho ai, ở đâu? Đối thủ trực tiếp là ai? (phần 3)</li>
  <li><b>Khảo sát ngành:</b> quy mô, tốc độ tăng trưởng, giai đoạn vòng đời, mức lợi nhuận, xu hướng thị phần. (phần 4 và 5)</li>
  <li><b>Phân tích cấu trúc ngành:</b> năm lực cạnh tranh của Porter quyết định ngành giữ lại được bao nhiêu lợi nhuận. (phần 6)</li>
  <li><b>Phân tích tác động bên ngoài:</b> chính trị, kinh tế, xã hội, công nghệ, pháp lý, môi trường (PESTLE). (phần 7)</li>
  <li><b>Phân tích vị thế cạnh tranh của công ty</b> trong ngành và kết luận cho dự báo, định giá. (phần 8 và EQ-10)</li>
</ol>
<div class="key">Bước 1-4 là ${t('ia', 'phân tích ngành')} (nhìn cả sân chơi). Bước 5 là ${t('ca', 'phân tích cạnh tranh (competitive analysis)')} (công ty đứng ở đâu trong sân chơi đó). Kết quả cuối cùng phải đổ vào <b>con số</b>: tăng trưởng doanh thu, biên lợi nhuận, nhu cầu đầu tư, rủi ro.</div>
<p class="tip"><b>Nguồn thông tin:</b> báo cáo thường niên và thuyết minh bộ phận (segment) của các công ty trong ngành, hiệp hội ngành, thống kê của chính phủ, báo cáo của đơn vị nghiên cứu thị trường, và trao đổi với khách hàng, nhà cung cấp, đối thủ.</p>`,
    },
    {
      title: '3. Phân loại ngành và các cách nhóm công ty',
      minutes: 15,
      html: `
<p>Có ba cách nhóm công ty mà đề thi hay so sánh:</p>
<table class="plain"><thead><tr><th>Cách nhóm</th><th>Dựa trên</th><th>Ưu điểm</th><th>Hạn chế</th></tr></thead><tbody>
<tr><td><b>Sản phẩm và dịch vụ</b> (hoạt động kinh doanh chính)</td><td>Nguồn tạo ra phần lớn doanh thu (và lợi nhuận)</td><td>Trực quan, ổn định; là cơ sở của các hệ thống phân loại chính thức</td><td>Công ty đa ngành chỉ được xếp vào một nhóm; hai công ty cùng mã ngành có thể có động lực rất khác</td></tr>
<tr><td><b>Độ nhạy với chu kỳ kinh tế</b></td><td>Lợi nhuận biến động mạnh hay ít theo chu kỳ</td><td>Hữu ích cho luân chuyển ngành và phân bổ tài sản</td><td>Chỉ có vài nhóm rất rộng; một công ty có thể vừa có phần chu kỳ vừa có phần phòng thủ</td></tr>
<tr><td><b>Tương đồng thống kê</b></td><td>Tương quan lợi suất trong quá khứ (phân tích cụm)</td><td>Nhóm có tương quan cao bên trong, thấp giữa các nhóm: tốt cho đa dạng hóa</td><td>Dựa vào dữ liệu quá khứ, nhóm thay đổi theo thời gian và mẫu; có thể ra nhóm không có ý nghĩa kinh tế; tương quan có thể do ngẫu nhiên</td></tr>
</tbody></table>

<h4>a) Phân loại theo chu kỳ kinh tế</h4>
<ul>
  <li>${t('cyclical', 'Ngành chu kỳ (cyclical)')}: sản phẩm đắt tiền hoặc có thể hoãn mua, nên cầu co giãn mạnh theo thu nhập. Ví dụ: ô tô, nhà ở, vật liệu cơ bản, máy móc công nghiệp, hàng tiêu dùng không thiết yếu, du lịch. Đòn bẩy hoạt động cao khiến lợi nhuận dao động còn mạnh hơn doanh thu.</li>
  <li>${t('defensive', 'Ngành phòng thủ (defensive, non-cyclical)')}: nhu cầu ổn định dù kinh tế tốt hay xấu. Ví dụ: hàng tiêu dùng thiết yếu, y tế, điện nước, viễn thông cơ bản.</li>
  <li>${t('growthind', 'Ngành tăng trưởng (growth)')}: nhu cầu tăng mạnh đến mức lấn át ảnh hưởng của chu kỳ, vẫn tăng khi kinh tế suy thoái (ví dụ một số mảng công nghệ trong giai đoạn bùng nổ).</li>
</ul>
<p class="warn"><b>Bẫy:</b> "phòng thủ" không có nghĩa là cổ phiếu luôn tăng giá khi suy thoái, mà là <b>lợi nhuận</b> ít nhạy với chu kỳ. Và phân loại theo chu kỳ có tính tương đối: điện thoại thông minh từng là sản phẩm tăng trưởng, nay gần với hàng tiêu dùng có chu kỳ thay thế.</p>

<h4>b) Hệ thống phân loại chính thức</h4>
<table class="plain"><thead><tr><th></th><th>Thương mại (commercial)</th><th>Chính phủ (government)</th></tr></thead><tbody>
<tr><td>Ví dụ</td><td>${t('gics', 'GICS')} (MSCI và S&amp;P), ICB (FTSE Russell), các hệ thống của những nhà cung cấp chỉ số khác</td><td>ISIC (Liên Hợp Quốc), NACE (châu Âu), NAICS (Bắc Mỹ); Việt Nam có hệ thống ngành kinh tế VSIC</td></tr>
<tr><td>Cấu trúc</td><td>Nhiều cấp từ rộng đến hẹp. GICS: ngành lớn (sector) → nhóm ngành (industry group) → ngành (industry) → ngành con (sub-industry); hiện có 11 sector</td><td>Nhiều cấp theo hoạt động kinh tế chính</td></tr>
<tr><td>Cách xếp một công ty</td><td>Theo hoạt động chính, chủ yếu căn cứ vào nguồn doanh thu (có xét thêm lợi nhuận và nhận thức của thị trường)</td><td>Theo hoạt động chính của cơ sở kinh doanh</td></tr>
<tr><td>Cập nhật</td><td>Thường xuyên</td><td>Ít, khoảng 5 năm một lần</td></tr>
<tr><td>Đặc điểm khác</td><td>Dùng để xây chỉ số, quỹ ngành, so sánh nhà đầu tư</td><td>Không công bố công ty cụ thể thuộc nhóm nào; không phân biệt công ty lớn nhỏ, có hay không vì lợi nhuận</td></tr>
</tbody></table>
<div class="example"><div class="ex-h">Ví dụ 3.1 - Xếp ngành cho một tập đoàn</div>
<p>Một công ty có 62% doanh thu từ sản xuất thép xây dựng, 25% từ bất động sản khu công nghiệp và 13% từ nông nghiệp. Theo GICS, công ty được xếp vào đâu? Có nên dùng mã ngành này để chọn toàn bộ nhóm so sánh không?</p>
<details><summary>Xem lời giải</summary>
<p>Hoạt động chính (phần lớn doanh thu) là thép, nên được xếp vào <b>Materials</b> (vật liệu), ngành thép. Tuy nhiên 38% doanh thu đến từ mảng khác có động lực rất khác, nên khi định giá nhà phân tích thường <b>định giá từng mảng</b> với nhóm so sánh riêng (định giá theo từng phần, sum-of-the-parts) thay vì chỉ so với các công ty thép thuần túy.</p></details></div>

<h4>c) Từ phân loại đến nhóm so sánh (peer group)</h4>
<p>${t('peer', 'Nhóm so sánh (peer group)')} là các công ty có <b>cùng hoạt động kinh doanh chính</b> và <b>cùng động lực</b> tạo giá trị: chung yếu tố cầu, cấu trúc chi phí tương tự, cùng khả năng tiếp cận vốn. Cách xây dựng:</p>
<ol>
  <li>Bắt đầu từ danh sách cùng mã ngành trong GICS hoặc ICB.</li>
  <li>Đọc báo cáo thường niên: công ty tự nêu đối thủ là ai; xem thuyết minh bộ phận để biết cơ cấu doanh thu.</li>
  <li>Loại hoặc điều chỉnh công ty có mô hình kinh doanh, khách hàng, quy mô hay địa bàn khác biệt lớn.</li>
  <li>Xem nhóm so sánh mà các nhà phân tích khác dùng.</li>
</ol>
<p class="tip">Nhóm so sánh dùng trực tiếp ở EQ-07 (định giá bằng bội số). Nhóm sai thì P/E "rẻ" hay "đắt" đều vô nghĩa.</p>`,
    },
    {
      title: '4. Quy mô, tăng trưởng, vòng đời và lợi nhuận ngành',
      minutes: 15,
      html: `
<h4>a) Quy mô ngành</h4>
<p>Thường đo bằng <b>tổng doanh thu</b> của ngành (hoặc sản lượng). Khi dự báo cho công ty mới, nhà phân tích hay dùng ${t('tam', 'thị trường có thể tiếp cận (total addressable market, TAM)')}: tổng doanh thu nếu chiếm 100% thị trường mục tiêu. Doanh thu công ty = quy mô thị trường × thị phần.</p>

<h4>b) Tăng trưởng</h4>
<p>Đo bằng ${t('cagr', 'tốc độ tăng trưởng kép hằng năm (CAGR)')} và so với tăng trưởng GDP danh nghĩa để biết ngành tăng nhanh hơn hay chậm hơn nền kinh tế:</p>
<div class="formula">CAGR = (${frac('Doanh thu cuối kỳ', 'Doanh thu đầu kỳ')})<sup>1/N</sup> - 1</div>
<div class="example"><div class="ex-h">Ví dụ 4.1</div>
<p>Doanh thu toàn ngành tăng từ 120 nghìn tỷ đồng năm 2020 lên 168 nghìn tỷ năm 2025. GDP danh nghĩa tăng bình quân 5%/năm. Ngành tăng nhanh hơn nền kinh tế bao nhiêu?</p>
<details><summary>Xem lời giải</summary>
<p>N = 5. CAGR = (168/120)<sup>1/5</sup> - 1 = <b>6,96%</b>. Ngành tăng nhanh hơn GDP danh nghĩa khoảng 1,96 điểm phần trăm mỗi năm (tính chính xác theo tỷ lệ: 1,0696/1,05 - 1 = 1,87%), nên tỷ trọng của ngành trong nền kinh tế đang tăng.</p>
<p>Bẫy: lấy (168/120 - 1)/5 = 8% là trung bình cộng, bỏ qua lãi kép.</p>
<p class="tip">BA II Plus: 5 [N] 120 [+/-] [PV] 0 [PMT] 168 [FV] [CPT] [I/Y] = 6.9610.</p></details></div>

<h4>c) Vòng đời ngành (industry life cycle)</h4>
<table class="plain"><thead><tr><th>Giai đoạn</th><th>Tăng trưởng</th><th>Cạnh tranh, giá</th><th>Lợi nhuận, dòng tiền</th></tr></thead><tbody>
<tr><td>${t('embryonic', 'Phôi thai (embryonic)')}</td><td>Chậm, khách hàng còn ít biết</td><td>Giá cao, sản phẩm chưa chuẩn hóa</td><td>Đầu tư lớn, thường lỗ, rủi ro thất bại cao</td></tr>
<tr><td>Tăng trưởng (growth)</td><td>Nhanh, nhiều khách hàng mới</td><td>Cạnh tranh nhẹ vì ai cũng tăng được; giá bắt đầu giảm</td><td>Lợi nhuận cải thiện nhanh; dòng tiền có thể âm vì phải đầu tư</td></tr>
<tr><td>${t('shakeout', 'Sàng lọc (shakeout)')}</td><td>Chậm lại</td><td>Cạnh tranh gay gắt, dư công suất, giảm giá, sáp nhập và phá sản</td><td>Lợi nhuận giảm; công ty yếu bị loại</td></tr>
<tr><td>Bão hòa (mature)</td><td>Thấp, gần GDP</td><td>Ngành hợp nhất, rào cản gia nhập cao, giá ổn định; tăng trưởng chủ yếu bằng giành thị phần</td><td>Dòng tiền mạnh, đầu tư giảm, trả cổ tức nhiều</td></tr>
<tr><td>Suy thoái (decline)</td><td>Âm</td><td>Dư công suất, chiến tranh giá, nhiều doanh nghiệp rút lui</td><td>Lợi nhuận giảm</td></tr>
</tbody></table>
<p><b>Hạn chế của mô hình vòng đời:</b> công nghệ, quy định, thay đổi xã hội và nhân khẩu học có thể kéo dài, rút ngắn hoặc bỏ qua hẳn một giai đoạn; mô hình hữu ích nhất khi ngành tương đối ổn định, kém hữu ích khi ngành thay đổi nhanh; và không phải công ty nào trong ngành cũng giống nhau (vẫn có công ty kiếm lợi nhuận cao trong ngành bão hòa, cạnh tranh gay gắt).</p>
<p class="warn"><b>Bẫy:</b> giai đoạn tăng trưởng có cạnh tranh <b>nhẹ</b> (cầu tăng đủ cho tất cả), còn giai đoạn sàng lọc mới là lúc cạnh tranh <b>gay gắt nhất</b> vì tăng trưởng chậm lại trong khi công suất đã xây quá nhiều.</p>

<h4>d) Lợi nhuận ngành</h4>
<p>Xem biên lợi nhuận (gộp, hoạt động) và nhất là ${t('roic', 'lợi nhuận trên vốn đầu tư (ROIC)')} so với ${t('wacc', 'chi phí vốn bình quân (WACC)')}. ROIC &gt; WACC một cách bền vững nghĩa là ngành tạo ra ${t('ep', 'lợi nhuận kinh tế (economic profit)')}, thường nhờ rào cản gia nhập cao. Cũng cần xem lợi nhuận <b>phân bổ</b> thế nào: vài công ty dẫn đầu chiếm gần hết, hay chia đều.</p>
<div class="example"><div class="ex-h">Ví dụ 4.2</div>
<p>Một ngành có ROIC bình quân 14%, WACC 9%, tổng vốn đầu tư 500 nghìn tỷ đồng. Lợi nhuận kinh tế của ngành bao nhiêu? Điều gì thường xảy ra nếu ngành có rào cản gia nhập thấp?</p>
<details><summary>Xem lời giải</summary><p>Lợi nhuận kinh tế = (14% - 9%) × 500 = <b>25 nghìn tỷ đồng</b>. Nếu rào cản thấp, lợi nhuận vượt trội này sẽ hút công ty mới vào, tăng công suất và kéo ROIC dần về WACC.</p></details></div>`,
    },
    {
      title: '5. Thị phần, mức độ tập trung và cấu trúc thị trường',
      minutes: 13,
      html: `
<h4>a) Xu hướng thị phần</h4>
<p>Thị phần = doanh thu công ty / doanh thu ngành. Điều quan trọng là <b>xu hướng</b>: công ty tăng trưởng nhanh hơn ngành thì đang giành thị phần. Ví dụ công ty có doanh thu 180 trên ngành 1.000 (thị phần 18%) năm 2021, đến 2025 là 300 trên 1.250 (24%).</p>
<ul>
  <li>${t('sharestab', 'Thị phần ổn định')} qua nhiều năm: thường là ngành ít cạnh tranh (khách hàng trung thành, chi phí chuyển đổi cao, rào cản cao).</li>
  <li>Thị phần thay đổi liên tục: thường là ngành cạnh tranh mạnh, ít sức mạnh định giá.</li>
</ul>

<h4>b) Đo mức độ tập trung</h4>
<div class="formula">CR<sub>N</sub> = tổng thị phần của N công ty lớn nhất &nbsp;&nbsp;&nbsp; HHI = Σ (thị phần tính bằng %)<sup>2</sup></div>
<p>${t('cr', 'Tỷ lệ tập trung (concentration ratio)')} dễ tính nhưng không phân biệt được 4 công ty đều nhau với 1 công ty áp đảo. ${t('hhi', 'Chỉ số Herfindahl-Hirschman (HHI)')} bình phương thị phần nên nhạy với công ty lớn; HHI chạy từ gần 0 (rất phân mảnh) đến 10.000 (độc quyền). Nếu dùng thị phần dạng số thập phân thì HHI từ 0 đến 1. Với N công ty có thị phần bằng nhau, HHI = 10.000/N; vì vậy 10.000/HHI là "số công ty bằng nhau tương đương". Cách tính chi tiết đã học ở EC-01.</p>
<div class="example"><div class="ex-h">Ví dụ 5.1</div>
<p>Ngành X có 5 công ty với thị phần 35%, 25%, 20%, 10%, 10%. Ngành Y có 10 công ty, mỗi công ty 10%. Tính CR4 và HHI của mỗi ngành.</p>
<details><summary>Xem lời giải</summary>
<p>Ngành X: CR4 = 35 + 25 + 20 + 10 = <b>90%</b>; HHI = 1.225 + 625 + 400 + 100 + 100 = <b>2.450</b>, tương đương khoảng 4,1 công ty bằng nhau.<br>
Ngành Y: CR4 = <b>40%</b>; HHI = 10 × 100 = <b>1.000</b>.</p>
<p>Ngành X tập trung hơn nhiều, thường có kỷ luật giá tốt hơn.</p></details></div>
<div class="widget" data-widget="hhi"></div>

<h4>c) Bốn yếu tố quyết định sức mạnh định giá của ngành</h4>
<table class="plain"><thead><tr><th>Yếu tố</th><th>Sức mạnh định giá cao khi</th><th>Lưu ý</th></tr></thead><tbody>
<tr><td>${t('barrier', 'Rào cản gia nhập (barriers to entry)')}</td><td>Rào cản cao: lợi nhuận kinh tế không bị đối thủ mới bào mòn</td><td>Rào cản gia nhập khác <b>rào cản thành công</b>: gia nhập dễ không có nghĩa là người mới sẽ thắng</td></tr>
<tr><td>Mức độ tập trung</td><td>Ít công ty lớn chi phối</td><td>Không tuyệt đối: ngành tập trung nhưng sản phẩm đồng nhất, chi phí cố định lớn vẫn có thể có chiến tranh giá</td></tr>
<tr><td>${t('capacity', 'Công suất ngành (industry capacity)')}</td><td>Công suất chật: cầu vượt cung</td><td>Dư công suất dẫn đến giảm giá. Công suất vật chất (nhà máy, tàu) cần nhiều năm để thay đổi</td></tr>
<tr><td>Ổn định thị phần</td><td>Thị phần ổn định</td><td>Thị phần biến động là dấu hiệu cạnh tranh gay gắt</td></tr>
</tbody></table>

<h4>d) Cấu trúc thị trường (nhắc lại từ EC-01)</h4>
<table class="plain"><thead><tr><th>Cấu trúc</th><th>Số công ty</th><th>Rào cản</th><th>Sản phẩm</th><th>Sức mạnh định giá</th></tr></thead><tbody>
<tr><td>Cạnh tranh hoàn hảo</td><td>Rất nhiều</td><td>Rất thấp</td><td>Đồng nhất</td><td>Không có</td></tr>
<tr><td>Cạnh tranh độc quyền</td><td>Nhiều</td><td>Thấp</td><td>Khác biệt (thương hiệu)</td><td>Một phần</td></tr>
<tr><td>Độc quyền nhóm (oligopoly)</td><td>Ít</td><td>Cao</td><td>Đồng nhất hoặc khác biệt</td><td>Đáng kể, phụ thuộc phản ứng của đối thủ</td></tr>
<tr><td>Độc quyền</td><td>Một</td><td>Rất cao</td><td>Không có thay thế gần</td><td>Lớn (thường bị điều tiết)</td></tr>
</tbody></table>`,
    },
    {
      title: '6. Porter\'s Five Forces: cấu trúc ngành quyết định lợi nhuận',
      minutes: 20,
      html: `
<p>Michael Porter cho rằng lợi nhuận dài hạn của một ngành do <b>năm lực</b> quyết định. Lực càng mạnh thì phần giá trị mà ngành giữ lại được càng ít, ROIC càng bị kéo về gần chi phí vốn.</p>
<div class="key">${t('five', 'Năm lực (Five Forces)')}: (1) mối đe dọa từ người gia nhập mới, (2) quyền lực của nhà cung cấp, (3) quyền lực của người mua, (4) mối đe dọa từ sản phẩm thay thế, (5) mức độ cạnh tranh giữa các công ty hiện hữu. Lực nào cũng mạnh lên thì lợi nhuận ngành đi xuống.</div>

<table class="plain"><thead><tr><th>Lực</th><th>Lực MẠNH (xấu cho ngành) khi</th></tr></thead><tbody>
<tr><td>${t('entry', 'Đe dọa gia nhập (threat of new entrants)')}</td><td>Lợi thế quy mô nhỏ, vốn ban đầu thấp, thương hiệu yếu, khách hàng dễ chuyển đổi, dễ tiếp cận kênh phân phối, không cần giấy phép, ít hiệu ứng mạng lưới, công ty hiện hữu không trả đũa</td></tr>
<tr><td>${t('supplier', 'Quyền lực nhà cung cấp (power of suppliers)')}</td><td>Ít nhà cung cấp, đầu vào độc đáo hoặc khan hiếm, chi phí chuyển nhà cung cấp cao, nhà cung cấp có thể tự làm luôn sản phẩm của ngành (hội nhập xuôi), ngành không phải khách hàng quan trọng của họ</td></tr>
<tr><td>${t('buyer', 'Quyền lực người mua (power of buyers)')}</td><td>Ít người mua mua khối lượng lớn, sản phẩm đồng nhất, người mua dễ đổi nhà bán, sản phẩm chiếm tỷ trọng lớn trong chi phí của người mua (nên họ nhạy giá), người mua có thể tự sản xuất (hội nhập ngược)</td></tr>
<tr><td>${t('subst', 'Đe dọa sản phẩm thay thế (threat of substitutes)')}</td><td>Có sản phẩm <b>từ ngành khác</b> đáp ứng cùng nhu cầu với giá và chất lượng hấp dẫn, chi phí chuyển đổi thấp</td></tr>
<tr><td>${t('rivalry', 'Cạnh tranh nội ngành (intensity of rivalry)')}</td><td>Nhiều đối thủ ngang sức, ngành tăng chậm, chi phí cố định cao và dư công suất, sản phẩm ít khác biệt, rào cản rút lui cao (tài sản chuyên dụng, áp lực giữ việc làm), thị phần không ổn định</td></tr>
</tbody></table>
<p class="warn"><b>Bẫy hay gặp:</b> sản phẩm <b>thay thế</b> (substitute) đến từ ngành khác (xe máy điện thay xe xăng, gọi video thay vé máy bay công tác), còn sản phẩm của <b>đối thủ cùng ngành</b> thuộc lực cạnh tranh nội ngành. Và rào cản <b>rút lui</b> cao làm cạnh tranh <b>gay gắt hơn</b> (công ty yếu không chịu rời ngành), ngược với rào cản <b>gia nhập</b> cao làm cạnh tranh nhẹ đi.</p>

<div class="example"><div class="ex-h">Ví dụ 6.1 - Đánh giá năm lực cho ngành hàng không nội địa</div>
<p>Đặc điểm: vài hãng bay giá rẻ cạnh tranh trực tiếp trên cùng đường bay; máy bay thuê từ hai nhà sản xuất lớn và vài công ty cho thuê; nhiên liệu chiếm khoảng 30% chi phí; khách so giá trên ứng dụng và đổi hãng dễ dàng; tàu cao tốc đang được xây trên tuyến dài nhất; cần giấy phép bay và slot cất hạ cánh tại sân bay lớn. Đánh giá từng lực.</p>
<details><summary>Xem lời giải</summary>
<table class="plain"><thead><tr><th>Lực</th><th>Mức</th><th>Lý do</th></tr></thead><tbody>
<tr><td>Gia nhập</td><td>Trung bình</td><td>Giấy phép và slot là rào cản, nhưng máy bay có thể thuê nên vốn ban đầu không quá lớn</td></tr>
<tr><td>Nhà cung cấp</td><td>Mạnh</td><td>Hai nhà sản xuất máy bay, nhiên liệu theo giá thế giới</td></tr>
<tr><td>Người mua</td><td>Mạnh</td><td>Từng khách nhỏ nhưng rất nhạy giá, so sánh dễ, chuyển đổi gần như miễn phí</td></tr>
<tr><td>Thay thế</td><td>Tăng dần</td><td>Tàu cao tốc, ô tô, họp trực tuyến</td></tr>
<tr><td>Cạnh tranh nội ngành</td><td>Rất mạnh</td><td>Sản phẩm đồng nhất, chi phí cố định cao (ghế trống là mất trắng), nên hay giảm giá để lấp đầy chuyến</td></tr>
</tbody></table>
<p>Kết luận: lợi nhuận ngành thấp và biến động, phù hợp với thực tế ngành hàng không trên thế giới. Công ty muốn vượt trội phải có chi phí thấp nhất (xem phần 8).</p></details></div>
<p class="tip"><b>Mẹo làm bài tình huống:</b> đọc từng câu mô tả và tự hỏi "câu này nói về <i>ai</i>?": người sắp vào ngành, người bán cho ngành, người mua của ngành, ngành khác, hay các đối thủ hiện tại. Sau đó hỏi "điều này làm lực đó mạnh lên hay yếu đi?".</p>`,
    },
    {
      title: '7. PESTLE: các tác động bên ngoài',
      minutes: 12,
      html: `
<p>Năm lực nhìn <b>bên trong</b> chuỗi giá trị của ngành. ${t('pestle', 'PESTLE')} nhìn <b>môi trường vĩ mô bên ngoài</b> có thể làm thay đổi chính các lực đó, tăng trưởng của ngành và rủi ro.</p>
<table class="plain"><thead><tr><th>Yếu tố</th><th>Ví dụ</th><th>Ảnh hưởng điển hình</th></tr></thead><tbody>
<tr><td><b>P</b>olitical - chính trị</td><td>Thuế quan, trợ cấp, chính sách công nghiệp, quan hệ thương mại, ổn định chính trị</td><td>Thuế nhập khẩu làm đầu vào đắt hơn hoặc bảo hộ ngành trong nước</td></tr>
<tr><td><b>E</b>conomic - kinh tế</td><td>Tăng trưởng GDP, lãi suất, lạm phát, tỷ giá, giá hàng hóa</td><td>Lãi suất tăng làm giảm cầu nhà ở và ô tô mua trả góp; tỷ giá ảnh hưởng nhà xuất khẩu</td></tr>
<tr><td><b>S</b>ocial - xã hội</td><td>Nhân khẩu học (già hóa, đô thị hóa), lối sống, thói quen tiêu dùng</td><td>Già hóa dân số tăng cầu y tế; xu hướng ăn uống lành mạnh làm giảm cầu nước ngọt có đường</td></tr>
<tr><td><b>T</b>echnological - công nghệ</td><td>Sản phẩm mới, tự động hóa, thương mại điện tử, trí tuệ nhân tạo</td><td>Tạo sản phẩm thay thế, hạ rào cản gia nhập, hoặc rút ngắn vòng đời ngành</td></tr>
<tr><td><b>L</b>egal - pháp lý</td><td>Luật cạnh tranh, bảo vệ người tiêu dùng, sở hữu trí tuệ, cấp phép, lao động</td><td>Bằng sáng chế là rào cản gia nhập; luật chống độc quyền có thể chặn sáp nhập</td></tr>
<tr><td><b>E</b>nvironmental - môi trường</td><td>Biến đổi khí hậu, thuế carbon, tiêu chuẩn khí thải, khan hiếm nước</td><td>Tăng chi phí cho ngành phát thải cao; mở thị trường cho năng lượng tái tạo</td></tr>
</tbody></table>
<div class="example"><div class="ex-h">Ví dụ 7.1 - Xếp yếu tố vào PESTLE</div>
<p>Một nhà phân tích ngành bia ghi chú: (i) luật cấm lái xe khi có nồng độ cồn được thực thi nghiêm ngặt; (ii) thuế tiêu thụ đặc biệt với bia tăng theo lộ trình; (iii) giới trẻ uống ít rượu bia hơn thế hệ trước; (iv) giá lúa mạch nhập khẩu tăng do tỷ giá. Mỗi ghi chú thuộc yếu tố nào?</p>
<details><summary>Xem lời giải</summary><p>(i) <b>Legal</b> (quy định pháp luật và thực thi). (ii) <b>Political</b> (chính sách thuế của nhà nước; một số tài liệu xếp vào Economic, nhưng bản chất là quyết định chính sách). (iii) <b>Social</b>. (iv) <b>Economic</b> (tỷ giá, giá hàng hóa). Cả bốn đều làm sản lượng hoặc biên lợi nhuận ngành giảm.</p></details></div>
<p class="tip"><b>Nối PESTLE với năm lực:</b> một thay đổi bên ngoài thường tác động <b>qua</b> một lực cụ thể. Ví dụ: công nghệ thương mại điện tử (T) hạ rào cản gia nhập ngành bán lẻ và tăng quyền lực người mua (dễ so giá). Khi viết phân tích, nói rõ yếu tố ngoài ảnh hưởng lực nào, theo chiều nào, và mức độ.</p>`,
    },
    {
      title: '8. Từ cấu trúc ngành đến chiến lược cạnh tranh',
      minutes: 5,
      html: `
<p>Phân tích ngành cho biết <b>luật chơi</b>; bước cuối của quy trình là xem công ty chơi thế nào. Porter đưa ra hai cách cơ bản để thắng trong một ngành (sẽ học kỹ ở EQ-10):</p>
<ul>
  <li>${t('costlead', 'Dẫn đầu về chi phí (cost leadership)')}: có chi phí thấp nhất ngành, bán giá ngang hoặc thấp hơn đối thủ mà vẫn có lời. Phù hợp với ngành sản phẩm đồng nhất, người mua nhạy giá (hàng không giá rẻ, xi măng, bán lẻ giá rẻ).</li>
  <li>${t('diff', 'Khác biệt hóa (differentiation)')}: sản phẩm độc đáo về chất lượng, thương hiệu, dịch vụ; khách hàng sẵn lòng trả giá cao hơn chi phí tạo khác biệt. Phù hợp khi nhu cầu khách hàng đa dạng.</li>
</ul>
<p>Mỗi chiến lược có thể áp dụng cho toàn thị trường hoặc chỉ một phân khúc hẹp (chiến lược tập trung). Chiến lược tốt là chiến lược <b>làm yếu các lực</b> đối với riêng công ty: thương hiệu mạnh làm giảm quyền lực người mua và đe dọa thay thế; quy mô lớn tạo rào cản gia nhập.</p>
<p class="tip">Ở EQ-10 bạn sẽ kiểm tra chiến lược bằng số liệu: công ty dẫn đầu chi phí thường có biên gộp thấp nhưng vòng quay tài sản cao; công ty khác biệt hóa thường có biên gộp cao, chi phí bán hàng, marketing và R&amp;D lớn.</p>`,
    },
    {
      title: '9. Tóm tắt và bẫy thường gặp',
      minutes: 5,
      html: `
<table class="plain"><thead><tr><th>Chủ đề</th><th>Nhớ</th></tr></thead><tbody>
<tr><td>Quy trình</td><td>Xác định ngành, khảo sát, năm lực, PESTLE, rồi vị thế công ty. Kết quả phải ra con số dự báo</td></tr>
<tr><td>Ba cách nhóm</td><td>Sản phẩm, dịch vụ (GICS, ICB, ISIC, NACE, NAICS); chu kỳ kinh tế; thống kê (tương quan quá khứ, không ổn định)</td></tr>
<tr><td>Thương mại và chính phủ</td><td>Chính phủ: không công bố tên công ty, cập nhật khoảng 5 năm, không phân biệt quy mô</td></tr>
<tr><td>Phòng thủ</td><td>Lợi nhuận ít nhạy với chu kỳ, không phải "giá luôn tăng"</td></tr>
<tr><td>CAGR</td><td>Dùng căn bậc N, không chia đều; so với GDP danh nghĩa</td></tr>
<tr><td>Vòng đời</td><td>Tăng trưởng: cạnh tranh nhẹ. Sàng lọc: cạnh tranh gay gắt nhất. Bão hòa: hợp nhất, giá ổn định</td></tr>
<tr><td>HHI</td><td>Bình phương thị phần %, tối đa 10.000; N công ty bằng nhau: 10.000/N</td></tr>
<tr><td>Sức mạnh định giá</td><td>Rào cản cao, tập trung, công suất chật, thị phần ổn định</td></tr>
<tr><td>Năm lực</td><td>Thay thế đến từ ngành khác. Rào cản rút lui cao làm cạnh tranh mạnh hơn</td></tr>
<tr><td>PESTLE</td><td>Môi trường bên ngoài; nói rõ tác động qua lực nào</td></tr>
</tbody></table>
<p>Tiếp theo: tab <b>Luyện tập</b> (10 câu), sau đó xem bộ slide để ôn nhanh.</p>`,
    },
  ];

  const glossary = {
    ia: ['Industry analysis', 'Phân tích ngành', 'Đánh giá quy mô, tăng trưởng, lợi nhuận, cấu trúc cạnh tranh và tác động bên ngoài của một ngành.'],
    ca: ['Competitive analysis', 'Phân tích cạnh tranh', 'Đánh giá vị thế và lợi thế của một công ty so với đối thủ trong ngành.'],
    rotation: ['Sector rotation', 'Luân chuyển ngành', 'Tăng, giảm tỷ trọng các ngành theo giai đoạn của chu kỳ kinh tế hoặc triển vọng ngành.'],
    cyclical: ['Cyclical industry', 'Ngành chu kỳ', 'Doanh thu, lợi nhuận biến động mạnh theo chu kỳ kinh tế; sản phẩm đắt hoặc có thể hoãn mua.'],
    defensive: ['Defensive (non-cyclical) industry', 'Ngành phòng thủ', 'Nhu cầu ổn định qua chu kỳ: hàng thiết yếu, y tế, điện nước.'],
    growthind: ['Growth industry', 'Ngành tăng trưởng', 'Nhu cầu tăng mạnh đến mức vẫn tăng khi kinh tế suy thoái.'],
    gics: ['Global Industry Classification Standard (GICS)', 'Chuẩn phân loại ngành toàn cầu', 'Hệ thống của MSCI và S&P: sector, industry group, industry, sub-industry; xếp theo hoạt động chính (chủ yếu theo doanh thu).'],
    peer: ['Peer group', 'Nhóm so sánh', 'Các công ty cùng hoạt động chính và cùng động lực giá trị, dùng để so sánh và định giá bằng bội số.'],
    tam: ['Total addressable market (TAM)', 'Thị trường có thể tiếp cận', 'Tổng doanh thu tiềm năng nếu chiếm toàn bộ thị trường mục tiêu.'],
    cagr: ['Compound annual growth rate (CAGR)', 'Tốc độ tăng trưởng kép hằng năm', '(Cuối/Đầu)^(1/N) - 1.'],
    embryonic: ['Embryonic stage', 'Giai đoạn phôi thai', 'Ngành mới hình thành: tăng chậm, giá cao, đầu tư lớn, rủi ro thất bại cao.'],
    shakeout: ['Shakeout stage', 'Giai đoạn sàng lọc', 'Tăng trưởng chậm lại, dư công suất, cạnh tranh gay gắt, nhiều công ty bị loại hoặc sáp nhập.'],
    roic: ['Return on invested capital (ROIC)', 'Lợi nhuận trên vốn đầu tư', 'Lợi nhuận hoạt động sau thuế chia cho vốn đầu tư (nợ vay và vốn chủ).'],
    wacc: ['Weighted average cost of capital (WACC)', 'Chi phí vốn bình quân gia quyền', 'Lợi suất tối thiểu mà nhà cung cấp vốn yêu cầu.'],
    ep: ['Economic profit', 'Lợi nhuận kinh tế', '(ROIC - WACC) × vốn đầu tư; lợi nhuận vượt trên chi phí cơ hội của vốn.'],
    sharestab: ['Market share stability', 'Ổn định thị phần', 'Thị phần ít thay đổi theo thời gian, dấu hiệu ngành ít cạnh tranh.'],
    cr: ['Concentration ratio (CR)', 'Tỷ lệ tập trung', 'Tổng thị phần của N công ty lớn nhất, ví dụ CR4.'],
    hhi: ['Herfindahl-Hirschman Index (HHI)', 'Chỉ số HHI', 'Tổng bình phương thị phần (%) của mọi công ty; từ gần 0 đến 10.000.'],
    barrier: ['Barriers to entry', 'Rào cản gia nhập', 'Những khó khăn khiến công ty mới khó vào ngành: quy mô, vốn, thương hiệu, giấy phép, hiệu ứng mạng lưới.'],
    capacity: ['Industry capacity', 'Công suất ngành', 'Lượng hàng hóa, dịch vụ tối đa ngành cung cấp được; dư công suất gây áp lực giảm giá.'],
    five: ['Porter\'s Five Forces', 'Năm lực cạnh tranh của Porter', 'Gia nhập, nhà cung cấp, người mua, thay thế, cạnh tranh nội ngành; quyết định lợi nhuận dài hạn của ngành.'],
    entry: ['Threat of new entrants', 'Đe dọa từ người gia nhập mới', 'Khả năng công ty mới vào ngành và chia sẻ lợi nhuận; thấp khi rào cản gia nhập cao.'],
    supplier: ['Bargaining power of suppliers', 'Quyền lực nhà cung cấp', 'Khả năng người bán đầu vào đẩy giá lên hoặc giảm chất lượng.'],
    buyer: ['Bargaining power of buyers', 'Quyền lực người mua', 'Khả năng khách hàng ép giá xuống hoặc đòi thêm chất lượng, dịch vụ.'],
    subst: ['Threat of substitutes', 'Đe dọa từ sản phẩm thay thế', 'Sản phẩm từ ngành khác đáp ứng cùng nhu cầu, đặt trần cho giá của ngành.'],
    rivalry: ['Intensity of rivalry', 'Mức độ cạnh tranh nội ngành', 'Cạnh tranh giữa các công ty hiện hữu về giá, sản phẩm, quảng cáo.'],
    pestle: ['PESTLE analysis', 'Phân tích PESTLE', 'Political, Economic, Social, Technological, Legal, Environmental: các tác động vĩ mô bên ngoài ngành.'],
    costlead: ['Cost leadership', 'Dẫn đầu về chi phí', 'Chiến lược có chi phí thấp nhất ngành.'],
    diff: ['Differentiation', 'Khác biệt hóa', 'Chiến lược tạo sản phẩm độc đáo để bán giá cao hơn chi phí tạo khác biệt.'],
  };

  const practice = [
    { q: 'Doanh thu một ngành tăng từ 80 lên 112 trong 4 năm. Tốc độ tăng trưởng kép hằng năm gần nhất với:', choices: ['8,78%', '10,00%', '40,00%'], answer: 0, explain: 'CAGR = (112/80)^(1/4) - 1 = 8,78%. Lựa chọn 10,00% là trung bình cộng 40%/4, bỏ qua lãi kép. Lựa chọn 40,00% là tổng mức tăng của cả 4 năm, không phải mỗi năm.' },
    { q: 'Một ngành có bốn công ty với thị phần 40%, 30%, 20% và 10%. HHI của ngành là:', choices: ['1.000', '3.000', '10.000'], answer: 1, explain: 'HHI = 1.600 + 900 + 400 + 100 = 3.000, tương đương khoảng 3,3 công ty bằng nhau. Lựa chọn 1.000 là HHI khi 10 công ty bằng nhau. Lựa chọn 10.000 là độc quyền tuyệt đối (CR4 = 100% không có nghĩa là HHI = 10.000).' },
    { q: 'Nhóm công ty dựa trên tương quan lợi suất cổ phiếu trong quá khứ có hạn chế nào sau đây?', choices: ['Các nhóm có tương quan lợi suất cao giữa nhóm với nhau nên không dùng được cho đa dạng hóa.', 'Không thể xếp được công ty đa ngành vào nhóm nào.', 'Nhóm có thể thay đổi theo giai đoạn dữ liệu và có thể không có ý nghĩa kinh tế.'], answer: 2, explain: 'Cách nhóm thống kê dựa vào dữ liệu quá khứ: kết quả thay đổi theo thời gian và mẫu, tương quan có thể do ngẫu nhiên. Phương án nói các nhóm có tương quan cao với nhau sai: phương pháp này tạo nhóm có tương quan cao bên trong và thấp giữa các nhóm. Khó xếp công ty đa ngành là hạn chế của cách nhóm theo sản phẩm.' },
    { q: 'So với hệ thống phân loại ngành thương mại như GICS, hệ thống của chính phủ thường:', choices: ['được cập nhật thường xuyên hơn để theo kịp thay đổi của doanh nghiệp.', 'không công bố công ty cụ thể nào thuộc nhóm nào.', 'phân biệt rõ công ty lớn và nhỏ, có và không vì lợi nhuận.'], answer: 1, explain: 'Hệ thống chính phủ không tiết lộ thông tin về từng công ty, cập nhật thưa (khoảng 5 năm) và không phân biệt quy mô hay mục đích lợi nhuận. Hai phương án còn lại mô tả ngược lại.' },
    { q: 'Một ngành có tăng trưởng doanh thu chậm lại rõ rệt, nhiều công ty xây thêm nhà máy trong giai đoạn trước nay dư công suất, giá giảm và một số công ty nhỏ phá sản. Ngành nhiều khả năng đang ở giai đoạn:', choices: ['sàng lọc (shakeout).', 'tăng trưởng (growth).', 'bão hòa (mature).'], answer: 0, explain: 'Tăng trưởng chậm lại, dư công suất, cạnh tranh giá gay gắt và công ty yếu bị loại là dấu hiệu sàng lọc. Giai đoạn tăng trưởng có cầu tăng nhanh, cạnh tranh nhẹ. Giai đoạn bão hòa có ngành đã hợp nhất, giá tương đối ổn định.' },
    { q: 'Yếu tố nào sau đây làm tăng mức độ cạnh tranh nội ngành?', choices: ['Ngành tăng trưởng nhanh và sản phẩm khác biệt cao.', 'Rào cản gia nhập cao nhờ quy định cấp phép.', 'Chi phí cố định cao và tài sản chuyên dụng khó bán khi rút lui.'], answer: 2, explain: 'Chi phí cố định cao khiến công ty giảm giá để lấp công suất; rào cản rút lui cao giữ công ty yếu ở lại, nên cạnh tranh gay gắt hơn. Tăng trưởng nhanh và sản phẩm khác biệt cao làm cạnh tranh nhẹ đi. Rào cản gia nhập cao làm giảm đe dọa gia nhập, không làm tăng cạnh tranh nội ngành.' },
    { q: 'Một nhà sản xuất nước đóng chai lo ngại người tiêu dùng chuyển sang dùng máy lọc nước tại nhà. Theo Porter, đây là:', choices: ['quyền lực người mua.', 'đe dọa từ sản phẩm thay thế.', 'đe dọa từ người gia nhập mới.'], answer: 1, explain: 'Máy lọc nước là sản phẩm của ngành khác đáp ứng cùng nhu cầu, nên là sản phẩm thay thế. Quyền lực người mua nói về khả năng ép giá của khách hàng. Đe dọa gia nhập mới là công ty mới vào chính ngành nước đóng chai.' },
    { q: 'Yếu tố nào sau đây nhiều khả năng mang lại cho các công ty trong ngành sức mạnh định giá cao nhất?', choices: ['Công suất toàn ngành đang thiếu so với nhu cầu và thị phần các công ty ổn định nhiều năm.', 'Ngành phân mảnh với hàng trăm công ty nhỏ.', 'Rào cản gia nhập thấp nhưng tỷ lệ thất bại của công ty mới cao.'], answer: 0, explain: 'Công suất chật (cầu vượt cung) và thị phần ổn định là dấu hiệu sức mạnh định giá. Ngành phân mảnh thường yếu về định giá. Phương án rào cản gia nhập thấp nhầm rào cản thành công với rào cản gia nhập: gia nhập dễ vẫn kéo giá xuống.' },
    { q: 'Nhà phân tích ghi nhận: "Quy định mới bắt buộc giảm 30% phát thải CO2 của nhà máy xi măng trước năm 2030." Trong PESTLE, yếu tố này thuộc nhóm nào và tác động trực tiếp nhất là gì?', choices: ['Social; làm giảm nhu cầu xi măng.', 'Technological; làm giảm chi phí sản xuất.', 'Environmental; làm tăng chi phí và có thể tăng rào cản gia nhập.'], answer: 2, explain: 'Tiêu chuẩn phát thải là yếu tố môi trường (có thể kết hợp pháp lý). Nó buộc đầu tư thêm, tăng chi phí, đồng thời khiến người mới khó gia nhập hơn. Hai phương án Social và Technological xếp sai nhóm và sai chiều tác động.' },
    { q: 'Trong ngành gồm 6 công ty có thị phần 30%, 25%, 15%, 10%, 10% và 10%, công ty thứ hai và thứ ba sáp nhập. HHI tăng thêm bao nhiêu?', choices: ['1.600', '750', '2.800'], answer: 1, explain: 'HHI trước = 900 + 625 + 225 + 100 + 100 + 100 = 2.050. Sau sáp nhập thị phần 40%: HHI = 900 + 1.600 + 300 = 2.800. Mức tăng = 750 (đúng bằng 2 × 25 × 15). Lựa chọn 1.600 chỉ là bình phương thị phần của công ty sau sáp nhập. Lựa chọn 2.800 là HHI sau sáp nhập chứ không phải mức tăng.' },
  ];

  // Widget: nhập thị phần 5 công ty lớn nhất, tính CR4 và HHI.
  const widgets = {
    hhi(el) {
      const init = [35, 25, 20, 10, 10];
      el.innerHTML = `<div class="w-row">${init.map((v, i) => `<label>Công ty ${i + 1}: <b data-o="s${i}">${v}%</b><input type="range" min="0" max="60" step="1" value="${v}" data-i="${i}"></label>`).join('')}</div>
        <div class="w-out"><div class="w-price" data-o="p"></div><div class="w-bar"><span data-o="bar"></span><i></i></div><div class="w-note" data-o="note"></div></div>`;
      const q = s => el.querySelector(s);
      const upd = () => {
        const s = init.map((_, i) => +q(`[data-i="${i}"]`).value);
        s.forEach((v, i) => { q(`[data-o="s${i}"]`).textContent = `${v}%`; });
        const tot = s.reduce((a, b) => a + b, 0);
        if (tot > 100) { q('[data-o="p"]').textContent = `Tổng thị phần ${tot}% vượt 100%`; q('[data-o="note"]').textContent = 'Giảm bớt thị phần của một công ty.'; return; }
        const h = s.reduce((a, b) => a + b * b, 0);
        const cr4 = [...s].sort((a, b) => b - a).slice(0, 4).reduce((a, b) => a + b, 0);
        q('[data-o="p"]').textContent = `HHI ≈ ${h.toLocaleString('vi-VN')} · CR4 = ${cr4}%`;
        q('[data-o="bar"]').style.width = `${Math.min(100, h / 100)}%`;
        q('[data-o="note"]').textContent = `Phần còn lại ${100 - tot}% coi như chia cho rất nhiều công ty nhỏ (đóng góp gần 0 vào HHI). Tương đương khoảng ${(10000 / Math.max(h, 1)).toFixed(1).replace('.', ',')} công ty bằng nhau.`;
      };
      el.addEventListener('input', upd);
      upd();
    },
  };

  window.LESSONS['EQ-09'] = {
    moduleId: 'EQ-09',
    calculator: 'BA II Plus',
    warmup: [
      'Ôn EC-01: kể tên bốn cấu trúc thị trường và cấu trúc nào có sức mạnh định giá lớn nhất.',
      'Đoán trước: vì sao ngành hàng không thường có lợi nhuận thấp dù nhu cầu bay tăng đều mỗi năm?',
      'Nghĩ về một công ty niêm yết bạn biết: nó thuộc ngành nào, và ba đối thủ chính là ai?',
    ],
    sections,
    glossary,
    practice,
    widgets,
    slides: [],
    wrapup: [
      'Chọn một ngành ở Việt Nam và đánh giá nhanh năm lực của Porter (mạnh, trung bình, yếu).',
      'Phân biệt ba cách nhóm công ty và nêu một hạn chế của mỗi cách.',
      'Giải thích vì sao giai đoạn sàng lọc lại có cạnh tranh gay gắt hơn giai đoạn tăng trưởng.',
    ],
  };
}());
