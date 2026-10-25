// Bài giảng ET-03 - Guidance for Standard I: Professionalism (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t } = window.CFAH;

  const sections = [
    {
      title: '1. Bức tranh lớn',
      minutes: 5,
      html: `
<p>Standard I: Professionalism là nhóm chuẩn mực về <b>bản thân người hành nghề</b>: hiểu luật, giữ độc lập, nói thật, không gian dối và đủ năng lực. Đây là nền móng cho mọi Standard khác.</p>
<table class="plain"><thead><tr><th>Tiêu chuẩn</th><th>Một câu để nhớ</th></tr></thead><tbody>
<tr><td>I(A) Knowledge of the Law</td><td>Hiểu và tuân thủ luật; khi xung đột, theo quy định <b>chặt hơn</b>; không tham gia và phải tách mình khỏi vi phạm</td></tr>
<tr><td>I(B) Independence and Objectivity</td><td>Giữ độc lập, khách quan; không mời, đòi hay nhận lợi ích có thể làm mất khách quan</td></tr>
<tr><td>I(C) Misrepresentation</td><td>Không cố ý trình bày sai lệch, bỏ sót thông tin, hay đạo văn</td></tr>
<tr><td>I(D) Misconduct</td><td>Không gian dối, lừa đảo; không có hành vi làm tổn hại uy tín, tính chính trực, năng lực nghề nghiệp</td></tr>
<tr><td>I(E) Competence</td><td>Có và duy trì năng lực cần cho trách nhiệm của mình</td></tr>
</tbody></table>
<p>Ba LOS của module (giống nhau cho các module ET-03 đến ET-08): <b>áp dụng</b> Code and Standards vào tình huống, <b>khuyến nghị</b> thực hành và quy trình phòng ngừa vi phạm, và <b>nhận diện</b> hành vi tuân thủ hay vi phạm. Vì vậy mỗi phần dưới đây đều có ba mục: yêu cầu, tình huống, khuyến nghị.</p>
<p class="tip"><b>Cách làm câu hỏi Ethics:</b> (1) xác định ai là người hành động và họ có phải member/candidate không; (2) hỏi hành vi đó chạm vào chuẩn nào; (3) kiểm tra từ khóa "knowingly", "reasonable", "could reasonably be expected"; (4) chọn đáp án hành động <b>tốt nhất</b>, không chỉ "không vi phạm".</p>`,
    },
    {
      title: '2. I(A) Knowledge of the Law',
      minutes: 20,
      html: `
<h4>Yêu cầu</h4>
<p>Members and Candidates phải <b>hiểu và tuân thủ</b> mọi luật, quy định áp dụng cho hoạt động nghề nghiệp của mình, của chính phủ, cơ quan quản lý, cơ quan cấp phép và hiệp hội nghề nghiệp, kể cả Code and Standards. Có ba ý:</p>
<ol>
  <li><b>Biết luật</b>: không cần là luật sư, nhưng phải hiểu luật đủ để nhận ra khi hành vi có thể vi phạm.</li>
  <li>${t('strict', 'Theo quy định chặt hơn (more strict)')}: khi luật và Code and Standards khác nhau, áp dụng quy định đặt ra ràng buộc lớn hơn hoặc bảo vệ khách hàng tốt hơn.</li>
  <li><b>Không cố ý (knowingly) tham gia hay trợ giúp</b> vi phạm, và phải ${t('dissociate', 'tách mình khỏi (dissociate)')} vi phạm.</li>
</ol>
<h4>Áp dụng khi hoạt động ở nhiều nước</h4>
<p>Một người có thể chịu ba bộ quy tắc: Code and Standards, luật nơi cư trú, luật nơi kinh doanh. Cách đơn giản nhất: <b>không vi phạm bộ nào</b>, tức là làm theo bộ chặt nhất với từng hành vi.</p>
<table class="plain"><thead><tr><th>Tình huống</th><th>Phải tuân theo</th></tr></thead><tbody>
<tr><td>Luật địa phương lỏng hơn Code and Standards</td><td>Code and Standards</td></tr>
<tr><td>Nước không có luật chứng khoán</td><td>Code and Standards</td></tr>
<tr><td>Luật địa phương chặt hơn Code and Standards</td><td>Luật địa phương</td></tr>
<tr><td>Luật cấm một việc mà Code không cấm (ví dụ bán khống)</td><td>Không được làm việc đó</td></tr>
<tr><td>Luật cho phép một việc mà Code cấm</td><td>Không được làm việc đó</td></tr>
</tbody></table>
<h4>Khi phát hiện vi phạm của đồng nghiệp hoặc khách hàng</h4>
<ol>
  <li>Báo cấp trên hoặc ${t('compliance', 'bộ phận tuân thủ (compliance)')} để xử lý.</li>
  <li>Nếu họ không xử lý được hoặc không muốn xử lý, phải <b>tách mình khỏi</b> hoạt động đó: ví dụ từ chối tiếp tục tham gia, xin rút khỏi dự án.</li>
  <li>Trường hợp cực đoan, có thể phải <b>nghỉ việc</b>.</li>
</ol>
<p>Chỉ im lặng và tiếp tục làm việc có thể bị xem là <b>tham gia</b> vào vi phạm. Code and Standards không bắt buộc báo cáo ra cơ quan quản lý (dù luật một số nơi có thể bắt buộc), nhưng CFA Institute khuyến khích mạnh việc báo cáo vi phạm; báo cáo vi phạm Code and Standards của thành viên khác cho CFA Institute là việc nên làm.</p>
<div class="example"><div class="ex-h">Tình huống 2.1 - Luật chặt hơn</div>
<p>Như làm việc ở một nước mà luật chứng khoán cấm bán khống. Code and Standards không cấm bán khống. Như bán khống một cổ phiếu cho khách hàng. Như có vi phạm I(A) không?</p>
<details><summary>Xem lời giải</summary><p><b>Có.</b> Luật địa phương chặt hơn nên phải theo luật. Việc Code không cấm không có nghĩa là được phép khi luật đã cấm.</p></details></div>
<div class="example"><div class="ex-h">Tình huống 2.2 - Ba quốc gia</div>
<p>Giang, CFA, cư trú ở nước A có luật lỏng hơn Code and Standards, phục vụ khách hàng ở nước B (không có luật chứng khoán) và nước C (luật chặt hơn Code). Giang phải tuân theo gì ở từng nước?</p>
<details><summary>Xem lời giải</summary><p>Nước A và B: <b>Code and Standards</b> (vì chặt hơn luật hoặc không có luật). Nước C: <b>luật nước C</b>. Đây là đáp án thường gặp của dạng câu hỏi này.</p></details></div>
<div class="example"><div class="ex-h">Tình huống 2.3 - Phát hiện sai phạm</div>
<p>Khoa phát hiện bản cáo bạch do phòng mình soạn bỏ qua một vụ kiện lớn của công ty phát hành. Anh báo trưởng phòng nhưng trưởng phòng bảo "cứ phát hành, luật sư lo". Khoa nên làm gì?</p>
<details><summary>Xem lời giải</summary><p>Khoa nên báo lên <b>bộ phận compliance</b>. Nếu vẫn không được khắc phục, anh phải <b>tách mình khỏi</b> việc soạn và phân phối bản cáo bạch, và cân nhắc nghỉ việc nếu không thể tách mình. Tiếp tục làm như bình thường là vi phạm I(A).</p></details></div>
<h4>Khuyến nghị tuân thủ</h4>
<ul>
  <li><b>Với cá nhân:</b> cập nhật luật và quy định thường xuyên; duy trì hồ sơ về luật áp dụng; tham khảo compliance hoặc luật sư khi không chắc; lưu lại bằng văn bản việc mình đã báo cáo và tách khỏi vi phạm.</li>
  <li><b>Với công ty:</b> có code of ethics, sổ tay compliance, đào tạo định kỳ, quy trình báo cáo vi phạm (kể cả kênh tố giác ẩn danh).</li>
</ul>
<p class="warn"><b>Bẫy:</b> "dissociate" không có nghĩa là phải báo ngay cho cơ quan nhà nước, và cũng không có nghĩa là luôn phải nghỉ việc. Thứ tự là: báo cấp trên/compliance → tách mình → nghỉ việc nếu cần.</p>`,
    },
    {
      title: '3. I(B) Independence and Objectivity',
      minutes: 22,
      html: `
<h4>Yêu cầu</h4>
<p>Members and Candidates phải dùng sự cẩn trọng và phán đoán hợp lý để đạt và giữ ${t('independence', 'sự độc lập (independence)')} và ${t('objectivity', 'tính khách quan (objectivity)')} trong hoạt động nghề nghiệp. Họ <b>không được mời, đòi hay nhận</b> bất kỳ quà tặng, lợi ích, thù lao hay sự cân nhắc nào có thể được kỳ vọng một cách hợp lý là làm tổn hại sự độc lập và khách quan của <b>chính mình hoặc của người khác</b>.</p>
<p>Chú ý chữ "mời" (offer): đưa quà để tác động lên người khác cũng vi phạm, không chỉ nhận quà.</p>
<h4>Các nguồn áp lực điển hình</h4>
<table class="plain"><thead><tr><th>Nguồn</th><th>Áp lực</th></tr></thead><tbody>
<tr><td>Bộ phận ngân hàng đầu tư (investment banking)</td><td>Muốn nhà phân tích khuyến nghị tốt cho khách hàng phát hành của mình</td></tr>
<tr><td>Công ty được phân tích (issuer)</td><td>Dọa cắt quyền tiếp cận ban lãnh đạo nếu báo cáo tiêu cực</td></tr>
<tr><td>Quản lý danh mục phía buy-side</td><td>Muốn nhà phân tích nội bộ không hạ khuyến nghị cổ phiếu quỹ đang nắm nhiều</td></tr>
<tr><td>Quỹ, công ty quản lý tài sản bên ngoài</td><td>Tặng quà, chuyến đi để được chọn làm quản lý cho khách hàng</td></tr>
<tr><td>Nghiên cứu do công ty phát hành trả tiền (${t('issuerpaid', 'issuer-paid research')})</td><td>Thù lao có thể gắn với kết luận</td></tr>
</tbody></table>
<h4>Quà tặng và chi phí: điều gì được phép</h4>
<table class="plain"><thead><tr><th>Hành vi</th><th>Đánh giá</th></tr></thead><tbody>
<tr><td>Bữa ăn, tiếp khách kinh doanh thông thường, quà có giá trị nhỏ (token)</td><td>Được phép</td></tr>
<tr><td>Quà của <b>khách hàng</b> cảm ơn vì kết quả tốt</td><td>Ít rủi ro hơn; phải công bố cho chủ lao động trước khi nhận nếu có thể, nếu không thì sau khi nhận</td></tr>
<tr><td>Công ty được phân tích trả vé máy bay thương mại, khách sạn, du lịch</td><td>Nên tự trả; chấp nhận dùng phương tiện của công ty khi không có chuyến bay thương mại</td></tr>
<tr><td>Vé sự kiện thể thao, nghỉ dưỡng xa hoa từ công ty được phân tích</td><td>Vi phạm</td></tr>
<tr><td>Issuer-paid research với phí cố định, không phụ thuộc kết luận, và có công bố</td><td>Được phép</td></tr>
<tr><td>Thù lao phụ thuộc vào kết luận, khuyến nghị, hoặc tác động lên giá</td><td>Vi phạm</td></tr>
<tr><td>Nhận cổ phiếu IPO "hot" cho tài khoản cá nhân</td><td>Vi phạm (nên hạn chế, cần duyệt trước)</td></tr>
</tbody></table>
<div class="example"><div class="ex-h">Tình huống 3.1 - Áp lực từ investment banking</div>
<p>Công ty chứng khoán của Lan đang tư vấn phát hành thêm cổ phiếu cho công ty X. Bộ phận phân tích đang khuyến nghị "Bán" X. Trưởng bộ phận ngân hàng đầu tư yêu cầu nâng lên "Mua". Trưởng bộ phận phân tích được phép làm gì?</p>
<details><summary>Xem lời giải</summary><p>Đưa X vào ${t('restricted', 'danh sách hạn chế (restricted list)')} và chỉ cung cấp thông tin dữ kiện (factual information) về X. Nâng khuyến nghị dù chỉ một bậc, hoặc giao cho nhà phân tích khác với kỳ vọng sẽ có kết luận tốt hơn, đều là để áp lực chi phối kết luận.</p></details></div>
<div class="example"><div class="ex-h">Tình huống 3.2 - Chuyến thăm doanh nghiệp</div>
<p>Hưng sắp đến thăm trụ sở công ty Y để viết báo cáo. Y đề nghị trả toàn bộ vé máy bay thương mại, khách sạn và ăn uống. Hành động tốt nhất của Hưng?</p>
<details><summary>Xem lời giải</summary><p>Hưng (hoặc công ty của Hưng) <b>tự trả</b> vé máy bay và khách sạn. "Nhận rồi viết báo cáo khách quan" hay "nhận nhưng công bố giá trị" đều không bằng việc loại bỏ nguồn gây ảnh hưởng. Bữa ăn thông thường trong buổi làm việc có thể chấp nhận.</p></details></div>
<div class="example"><div class="ex-h">Tình huống 3.3 - Đổi kết luận vì quan hệ</div>
<p>Sau chuyến đi, Mai kết luận cổ phiếu Z bị định giá cao, nên khuyến nghị "Bán". Lo ngại làm hỏng quan hệ giữa Z và bộ phận ngân hàng đầu tư, Mai đổi thành "Nắm giữ". Mai có vi phạm không?</p>
<details><summary>Xem lời giải</summary><p><b>Có, vi phạm I(B).</b> Kết luận phân tích bị thay đổi vì áp lực bên ngoài, không phải vì bằng chứng mới.</p></details></div>
<h4>Khuyến nghị tuân thủ</h4>
<ul>
  <li><b>Cá nhân:</b> tự trả chi phí đi lại khi có thể; chỉ dùng máy bay riêng của công ty được phân tích khi không có chuyến bay thương mại; công bố quà tặng cho chủ lao động.</li>
  <li><b>Công ty:</b> có chính sách bằng văn bản về độc lập và khách quan; xây ${t('firewall', 'tường lửa (firewall)')} giữa bộ phận phân tích và ngân hàng đầu tư; không để thù lao của nhà phân tích phụ thuộc vào hoạt động ngân hàng đầu tư; lập restricted list; giới hạn quà tặng (trừ của khách hàng) ở mức token, có thể đặt ngưỡng giá trị; yêu cầu duyệt trước khi nhân viên tham gia IPO và phát hành riêng lẻ; chỉ định người phụ trách tuân thủ và quy trình báo cáo vi phạm.</li>
</ul>
<p class="warn"><b>Bẫy:</b> công bố (disclosure) <b>không</b> biến một món quà xa hoa từ công ty được phân tích thành hợp lệ. Còn quà của khách hàng thì thường hợp lệ nếu được công bố cho chủ lao động.</p>`,
    },
    {
      title: '4. I(C) Misrepresentation',
      minutes: 15,
      html: `
<h4>Yêu cầu</h4>
<p>Members and Candidates không được <b>cố ý (knowingly)</b> đưa ra bất kỳ ${t('misrep', 'sự trình bày sai lệch (misrepresentation)')} nào liên quan đến phân tích, khuyến nghị, hành động đầu tư hay hoạt động nghề nghiệp khác. Misrepresentation bao gồm: tuyên bố sai, <b>bỏ sót</b> sự thật trọng yếu, hoặc tạo ấn tượng sai về bản thân, công ty, tổ chức hay chứng khoán, bằng lời nói, quảng cáo, thư điện tử, mạng xã hội hay văn bản, công khai hay không.</p>
<h4>Các dạng vi phạm thường gặp</h4>
<ul>
  <li><b>Đảm bảo lợi nhuận</b> cho một khoản đầu tư có rủi ro. Được phép nói trái phiếu chính phủ được chính phủ bảo đảm thanh toán; không được hứa "chắc chắn lãi 10% mỗi năm".</li>
  <li><b>Phóng đại năng lực</b>, kinh nghiệm, dịch vụ của mình hoặc của công ty.</li>
  <li><b>Kết quả đầu tư gây hiểu nhầm</b>: bỏ bớt tài khoản kém, chọn benchmark không tương đồng với chiến lược, dựa vào một giao dịch may mắn.</li>
  <li><b>Chọn dịch vụ định giá</b> vì nó cho giá cao nhất với tài sản ít giao dịch.</li>
  <li><b>Dùng tài liệu tiếp thị của bên thứ ba</b> mà biết là sai lệch.</li>
  <li>${t('plagiarism', 'Đạo văn (plagiarism)')}: dùng báo cáo, dự báo, mô hình, ý tưởng, biểu đồ của người khác mà không ghi nguồn.</li>
</ul>
<h4>Dùng công trình của người khác</h4>
<ul>
  <li>Dùng nghiên cứu của bên ngoài: phải <b>ghi nguồn</b> (tác giả, nhà xuất bản).</li>
  <li>Dùng mô hình, nghiên cứu của <b>đồng nghiệp trong công ty</b> đã nghỉ việc: được dùng tiếp mà không cần ghi tên họ, vì công trình thuộc về công ty; nhưng <b>không được</b> phát hành lại báo cáo cũ chỉ dưới tên mình.</li>
  <li>Dữ liệu dữ kiện từ các nguồn thống kê, dịch vụ dữ liệu tài chính được công nhận thường có thể dùng mà không cần ghi nguồn chi tiết, nhưng ghi nguồn vẫn là thực hành tốt.</li>
</ul>
<div class="example"><div class="ex-h">Tình huống 4.1 - Hai câu nói</div>
<p>Vinh giới thiệu một quỹ chỉ đầu tư trái phiếu chính phủ Mỹ dài hạn, nói: (1) "Trái phiếu được chính phủ Mỹ bảo đảm thanh toán nên rủi ro vỡ nợ gần như bằng 0"; (2) "Dựa trên lịch sử, quỹ sẽ mang lại 10% mỗi năm trong vài năm tới". Câu nào vi phạm?</p>
<details><summary>Xem lời giải</summary><p><b>Chỉ câu (2).</b> Câu (1) là sự thật về rủi ro vỡ nợ. Câu (2) hứa hẹn một mức lợi nhuận cụ thể cho một quỹ có rủi ro lãi suất và rủi ro giá, là misrepresentation.</p></details></div>
<div class="example"><div class="ex-h">Tình huống 4.2 - Con số đúng nhưng gây hiểu nhầm</div>
<p>Thảo nói với khách hàng tiềm năng rằng khách hàng của cô đạt bình quân hơn 26% mỗi năm trong 3 năm. Con số đúng, nhưng Thảo có rất ít khách hàng và kết quả bị kéo lên bởi một khách hàng tự ý mua cổ phiếu penny trái với tư vấn của cô; không có giao dịch đó, bình quân chỉ khoảng 8%. Thảo có vi phạm không?</p>
<details><summary>Xem lời giải</summary><p><b>Có.</b> Tuyên bố tuy đúng về con số nhưng tạo ấn tượng sai về năng lực của Thảo. Bỏ sót sự thật trọng yếu cũng là misrepresentation.</p></details></div>
<h4>Khuyến nghị tuân thủ</h4>
<ul>
  <li><b>Cá nhân:</b> chuẩn bị bản tóm tắt bằng văn bản về trình độ, kinh nghiệm, dịch vụ mình có thể cung cấp; ghi nguồn mọi tài liệu tham khảo; lưu bản sao tài liệu đã dùng để viết báo cáo.</li>
  <li><b>Công ty:</b> danh sách dịch vụ và năng lực bằng văn bản; quy trình kiểm tra tài liệu tiếp thị của bên thứ ba; định kỳ rà soát tài liệu, quảng cáo, hồ sơ nhân viên đăng trên website và mạng xã hội.</li>
</ul>
<p class="warn"><b>Bẫy:</b> một tuyên bố <b>đúng về mặt số liệu</b> vẫn có thể là misrepresentation nếu bỏ sót bối cảnh trọng yếu. Ngược lại, nói đúng sự thật về một bảo đảm thực sự tồn tại (trái phiếu chính phủ, sản phẩm có bảo lãnh của ngân hàng) thì không vi phạm.</p>`,
    },
    {
      title: '5. I(D) Misconduct',
      minutes: 10,
      html: `
<h4>Yêu cầu</h4>
<p>Members and Candidates không được thực hiện hành vi nghề nghiệp có tính <b>gian dối, lừa đảo, lừa gạt</b> (dishonesty, fraud, deceit), và không được có hành vi nào ${t('adverse', 'phản ánh tiêu cực')} lên uy tín, tính chính trực hoặc năng lực nghề nghiệp của mình.</p>
<h4>Ranh giới giữa đời tư và nghề nghiệp</h4>
<p>Standard không nhằm điều chỉnh mọi khía cạnh đời tư. Câu hỏi then chốt: hành vi đó có cho thấy người này <b>thiếu trung thực</b>, hoặc có <b>ảnh hưởng đến công việc</b> và niềm tin của khách hàng không?</p>
<table class="plain"><thead><tr><th>Hành vi</th><th>Đánh giá</th></tr></thead><tbody>
<tr><td>Gian lận báo cáo chi phí, khai man hồ sơ, nói dối khách hàng</td><td>Vi phạm</td></tr>
<tr><td>Thường xuyên say rượu trong giờ làm, đồng nghiệp không tin tưởng phán đoán</td><td>Vi phạm (ảnh hưởng đến năng lực nghề nghiệp)</td></tr>
<tr><td>Uống rượu vào buổi tối cuối tuần, không ảnh hưởng công việc</td><td>Không vi phạm</td></tr>
<tr><td>Bị bắt vì biểu tình ôn hòa vì môi trường</td><td>Thường không vi phạm (không liên quan đến gian dối hay năng lực nghề nghiệp)</td></tr>
<tr><td>Phá sản cá nhân nhiều năm trước vì hoàn cảnh, không có gian lận</td><td>Không vi phạm</td></tr>
</tbody></table>
<p>Ngoài ra, thành viên không được dùng việc tố cáo vi phạm Standard này để giải quyết <b>tranh chấp cá nhân, chính trị</b> không liên quan đến đạo đức hay năng lực nghề nghiệp.</p>
<div class="example"><div class="ex-h">Tình huống 5.1</div>
<p>Một đối thủ tố cáo Duy vi phạm I(D) vì Duy từng nộp đơn phá sản cá nhân 10 năm trước, khi còn là sinh viên, do chi phí y tế lớn, và Duy không kể chuyện này với khách hàng. Duy có vi phạm không?</p>
<details><summary>Xem lời giải</summary><p><b>Không.</b> Phá sản do hoàn cảnh, không có gian dối, không phản ánh tiêu cực lên tính chính trực hay năng lực nghề nghiệp. Duy cũng không có nghĩa vụ kể với khách hàng.</p></details></div>
<h4>Khuyến nghị tuân thủ (cho công ty)</h4>
<ul>
  <li>Ban hành code of ethics và nói rõ hành vi phi đạo đức sẽ không được dung thứ.</li>
  <li>Cung cấp cho nhân viên danh sách các vi phạm có thể có và chế tài tương ứng, kể cả sa thải.</li>
  <li>Kiểm tra lý lịch, người tham chiếu (reference) của ứng viên trước khi tuyển dụng.</li>
</ul>
<p class="warn"><b>Bẫy:</b> không phải mọi hành vi phạm luật đều vi phạm I(D). Vượt đèn đỏ hay biểu tình ôn hòa thường không; gian lận, lừa đảo thì có, kể cả khi xảy ra ngoài công việc chính.</p>`,
    },
    {
      title: '6. I(E) Competence',
      minutes: 8,
      html: `
<h4>Yêu cầu</h4>
<p>Members and Candidates phải hành động với và duy trì ${t('competence', 'năng lực (competence)')} cần thiết để hoàn thành trách nhiệm nghề nghiệp. Đây là tiêu chuẩn được bổ sung trong phiên bản Code and Standards cập nhật, cụ thể hóa điều 6 của Code of Ethics.</p>
<ul>
  <li>Năng lực là có và <b>duy trì</b> kiến thức, kỹ năng, khả năng cần cho công việc. Năng lực cần có <b>tùy vào trách nhiệm cụ thể</b>: nhà phân tích phái sinh cần khác với người tư vấn hưu trí.</li>
  <li><b>Kết quả xấu không đồng nghĩa với thiếu năng lực.</b> Một khoản đầu tư thua lỗ sau quy trình phân tích cẩn thận không vi phạm I(E).</li>
  <li>Khi nhận <b>vai trò mới hoặc chưa quen</b>, người hành nghề có trách nhiệm phát triển năng lực mà vai trò đó đòi hỏi.</li>
</ul>
<div class="example"><div class="ex-h">Tình huống 6.1</div>
<p>Phương, chuyên gia cổ phiếu, được giao quản lý thêm danh mục trái phiếu chuyển đổi cho một khách hàng lớn. Cô chưa từng làm sản phẩm này và nhận việc ngay, không học thêm, không hỏi ai, dựa vào "kinh nghiệm cổ phiếu". Phương có vi phạm không?</p>
<details><summary>Xem lời giải</summary><p><b>Có khả năng vi phạm I(E).</b> Nhận vai trò mới không sai, nhưng Phương phải phát triển năng lực tương xứng (đào tạo, tự học, nhờ chuyên gia hỗ trợ) hoặc cân nhắc từ chối. Nếu cô đã học bài bản và danh mục vẫn lỗ do thị trường, thì kết quả xấu đó tự nó không phải vi phạm.</p></details></div>
<h4>Khuyến nghị tuân thủ</h4>
<ul>
  <li>Tham gia đào tạo liên tục, phát triển nghề nghiệp, đào tạo do công ty tổ chức.</li>
  <li>Theo đuổi các chứng chỉ nghề nghiệp.</li>
  <li>Dự hội thảo, hội nghị chuyên ngành; tham gia tổ chức nghề nghiệp.</li>
  <li>Tự học không chính thức (sách, nghiên cứu, khóa học trực tuyến).</li>
</ul>`,
    },
    {
      title: '7. Tóm tắt và bẫy thường gặp',
      minutes: 10,
      html: `
<table class="plain"><thead><tr><th>Tiêu chuẩn</th><th>Vi phạm điển hình</th><th>Không vi phạm / bẫy</th></tr></thead><tbody>
<tr><td>I(A)</td><td>Làm theo Code khi luật địa phương chặt hơn; im lặng tiếp tục tham gia vi phạm</td><td>Không bắt buộc báo cơ quan nhà nước; nghỉ việc chỉ là bước cuối</td></tr>
<tr><td>I(B)</td><td>Đổi khuyến nghị vì áp lực; nhận quà xa hoa từ công ty được phân tích; thù lao gắn kết luận</td><td>Bữa ăn thông thường, quà token; quà của khách hàng có công bố cho chủ lao động</td></tr>
<tr><td>I(C)</td><td>Hứa lợi nhuận; số liệu đúng nhưng bỏ sót bối cảnh; đạo văn</td><td>Nói đúng về bảo đảm thực sự; dùng mô hình của đồng nghiệp cũ trong công ty</td></tr>
<tr><td>I(D)</td><td>Gian dối, lừa đảo; say rượu trong giờ làm</td><td>Phá sản cá nhân không gian lận; biểu tình ôn hòa</td></tr>
<tr><td>I(E)</td><td>Nhận vai trò mới mà không phát triển năng lực</td><td>Đầu tư lỗ sau quy trình cẩn thận</td></tr>
</tbody></table>
<h4>Phân biệt nhanh chuẩn nào</h4>
<ul>
  <li>Có chữ "luật cấm / luật cho phép / nhiều nước" → <b>I(A)</b>.</li>
  <li>Có "quà", "chuyến đi", "áp lực đổi khuyến nghị", "IPO cho tài khoản riêng" → <b>I(B)</b>.</li>
  <li>Có "nói", "quảng cáo", "kết quả", "copy báo cáo" → <b>I(C)</b>.</li>
  <li>Có "gian lận", "nói dối", "say xỉn khi làm việc" → <b>I(D)</b>.</li>
  <li>Có "vai trò mới", "chưa có kiến thức" → <b>I(E)</b>.</li>
</ul>
<p class="tip">Các module tiếp theo: ET-04 (Standard II) đến ET-09 (Standard VII) hướng dẫn từng Standard còn lại; ET-10 là bài tổng hợp áp dụng Code and Standards.</p>`,
    },
  ];

  const glossary = {
    strict: ['More strict', 'Chặt hơn', 'Quy định đặt ra ràng buộc lớn hơn lên hành vi hoặc bảo vệ lợi ích khách hàng tốt hơn.'],
    dissociate: ['Dissociate', 'Tách mình khỏi', 'Chấm dứt tham gia vào hoạt động vi phạm, ví dụ rút khỏi dự án; trường hợp cực đoan có thể phải nghỉ việc.'],
    compliance: ['Compliance department', 'Bộ phận tuân thủ', 'Bộ phận giám sát việc tuân thủ luật, quy định và chính sách nội bộ trong công ty.'],
    independence: ['Independence', 'Sự độc lập', 'Không bị thiên lệch, không bị người khác chi phối về ý kiến hay hành vi.'],
    objectivity: ['Objectivity', 'Tính khách quan', 'Không để cảm xúc, lợi ích cá nhân hay lợi ích của người khác ảnh hưởng đến ý kiến và hành động.'],
    issuerpaid: ['Issuer-paid research', 'Nghiên cứu do công ty phát hành trả tiền', 'Báo cáo phân tích được chính công ty được phân tích trả phí; chấp nhận được nếu phí cố định, không phụ thuộc kết luận và có công bố.'],
    restricted: ['Restricted list', 'Danh sách hạn chế', 'Danh sách chứng khoán mà công ty hạn chế giao dịch hoặc khuyến nghị, thường chỉ cung cấp thông tin dữ kiện.'],
    firewall: ['Firewall', 'Tường lửa thông tin', 'Rào chắn thông tin và tổ chức giữa các bộ phận có xung đột, như phân tích và ngân hàng đầu tư.'],
    misrep: ['Misrepresentation', 'Trình bày sai lệch', 'Tuyên bố sai, bỏ sót sự thật trọng yếu, hoặc tạo ấn tượng sai, được thực hiện một cách cố ý.'],
    plagiarism: ['Plagiarism', 'Đạo văn', 'Dùng báo cáo, mô hình, ý tưởng, biểu đồ của người khác mà không ghi nguồn.'],
    adverse: ['Reflects adversely', 'Phản ánh tiêu cực', 'Hành vi làm tổn hại uy tín, tính chính trực hoặc năng lực nghề nghiệp của người hành nghề.'],
    competence: ['Competence', 'Năng lực', 'Có và duy trì kiến thức, kỹ năng, khả năng đủ để hoàn thành trách nhiệm nghề nghiệp.'],
  };

  const practice = [
    { q: 'Hoa, CFA, làm việc tại nước P, nơi luật chứng khoán cho phép nhà tư vấn giao dịch trước khách hàng trên cùng một cổ phiếu. Code and Standards yêu cầu giao dịch của khách hàng được ưu tiên trước. Hoa nên:', choices: ['Ưu tiên giao dịch của khách hàng vì Code and Standards chặt hơn luật nước P', 'Làm theo luật nước P vì luật quốc gia luôn đứng trên quy định của hiệp hội nghề nghiệp', 'Làm theo luật nước P nhưng công bố cho khách hàng'], answer: 0, explain: 'Khi Code and Standards chặt hơn luật địa phương thì phải theo Code and Standards (I(A)). B sai vì nguyên tắc là theo quy định chặt hơn, không phải theo thứ bậc cơ quan ban hành. C sai vì công bố không thay thế cho nghĩa vụ ưu tiên khách hàng.' },
    { q: 'Quang phát hiện trưởng nhóm đang dùng số liệu giả trong hồ sơ chào bán trái phiếu. Anh đã báo bộ phận compliance nhưng không có hành động gì. Theo Standard I(A), Quang nên:', choices: ['Báo ngay cho cơ quan quản lý vì Code and Standards bắt buộc', 'Tách mình khỏi việc soạn và phân phối hồ sơ, và cân nhắc nghỉ việc nếu không thể tách mình', 'Tiếp tục công việc vì đã báo compliance, trách nhiệm đã chuyển sang họ'], answer: 1, explain: 'Khi cấp trên và compliance không xử lý, member phải dissociate; trường hợp cực đoan có thể phải nghỉ việc. A sai vì Code and Standards không bắt buộc báo cơ quan quản lý (dù được khuyến khích và luật có thể yêu cầu). C sai vì tiếp tục tham gia có thể bị xem là trợ giúp vi phạm.' },
    { q: 'Ngân, nhà phân tích sell-side, được công ty mà cô đang phân tích mời dự hội nghị ở nước ngoài. Công ty đề nghị trả vé máy bay thương mại, ba đêm khách sạn, và tặng hai vé xem chung kết bóng đá. Hành động phù hợp nhất với I(B) là:', choices: ['Nhận tất cả và công bố đầy đủ giá trị trong báo cáo', 'Nhận vé máy bay và khách sạn, từ chối vé bóng đá', 'Công ty của Ngân tự trả vé máy bay và khách sạn, Ngân từ chối vé bóng đá'], answer: 2, explain: 'Khi có chuyến bay thương mại, nhà phân tích hoặc công ty nên tự trả chi phí đi lại và lưu trú; quà giải trí xa hoa phải từ chối. A sai vì công bố không biến quà xa hoa thành hợp lệ. B tốt hơn A nhưng vẫn để công ty được phân tích trả chi phí khi không cần thiết.' },
    { q: 'Một khách hàng lâu năm tặng Tuấn, quản lý danh mục, một chiếc đồng hồ đắt tiền để cảm ơn vì danh mục đạt kết quả tốt năm qua. Tuấn nên:', choices: ['Từ chối vì mọi quà tặng có giá trị lớn đều vi phạm I(B)', 'Công bố món quà cho chủ lao động, trước khi nhận nếu có thể', 'Nhận mà không cần báo ai vì quà đến từ khách hàng, không phải từ công ty được phân tích'], answer: 1, explain: 'Quà từ khách hàng ít đe dọa độc lập hơn quà từ bên muốn tác động lên khuyến nghị, nhưng vẫn phải công bố cho chủ lao động, trước khi nhận nếu có thể, nếu không thì sau. A quá khắt khe. C bỏ qua nghĩa vụ công bố.' },
    { q: 'Công ty chứng khoán của Bình đang làm tư vấn phát hành cho công ty K. Bộ phận phân tích khuyến nghị "Bán" K. Trưởng bộ phận ngân hàng đầu tư đề nghị nâng lên "Mua". Trưởng bộ phận phân tích được phép:', choices: ['Đưa K vào restricted list và chỉ cung cấp thông tin dữ kiện', 'Nâng khuyến nghị lên một bậc thành "Nắm giữ"', 'Giao K cho một nhà phân tích khác xem xét lại khuyến nghị'], answer: 0, explain: 'Restricted list và chỉ đưa thông tin dữ kiện giúp tránh xung đột mà không bóp méo kết luận. B vẫn là để áp lực thay đổi khuyến nghị. C là cách lách: đổi người với kỳ vọng có kết luận khác cũng là chịu áp lực.' },
    { q: 'Hải giới thiệu một quỹ trái phiếu chính phủ: "Trái phiếu chính phủ được nhà nước bảo đảm thanh toán, nên quỹ chắc chắn đem lại 7% mỗi năm như ba năm qua". Theo I(C):', choices: ['Hải không vi phạm vì trái phiếu chính phủ được nhà nước bảo đảm', 'Hải không vi phạm vì con số 7% dựa trên dữ liệu lịch sử có thật', 'Hải vi phạm vì đã bảo đảm một mức lợi nhuận mà quỹ không thể chắc chắn đạt được'], answer: 2, explain: 'Bảo đảm thanh toán gốc lãi trái phiếu không bảo đảm lợi nhuận của quỹ, vì giá trái phiếu biến động theo lãi suất. A đúng về rủi ro vỡ nợ nhưng không cứu được lời hứa 7%. B sai vì lợi nhuận quá khứ không phải là bảo đảm cho tương lai.' },
    { q: 'Yến dùng một mô hình định giá do đồng nghiệp xây dựng, người này đã nghỉ việc ở công ty. Cô cải tiến mô hình và viết báo cáo mới mang tên mình, không nêu tên người đồng nghiệp cũ. Yến:', choices: ['Không vi phạm, vì mô hình là tài sản của công ty và cô viết báo cáo mới', 'Vi phạm I(C) vì không ghi tên tác giả gốc', 'Vi phạm I(C) vì không được dùng mô hình của người đã nghỉ việc'], answer: 0, explain: 'Được dùng công trình của đồng nghiệp cũ trong công ty mà không cần ghi tên họ, vì công trình thuộc về công ty. Điều bị cấm là phát hành lại nguyên báo cáo cũ chỉ dưới tên mình. B và C áp sai quy tắc ghi nguồn cho nguồn bên ngoài.' },
    { q: 'Đức, quản lý danh mục, thường uống rượu nhiều trong bữa trưa với khách hàng và quay lại làm việc trong tình trạng say. Đồng nghiệp tránh giao việc cho anh vào buổi chiều. Đức nhiều khả năng:', choices: ['Không vi phạm vì đây là đời tư', 'Vi phạm I(E) Competence nhưng không vi phạm I(D)', 'Vi phạm I(D) Misconduct vì hành vi phản ánh tiêu cực lên năng lực nghề nghiệp'], answer: 2, explain: 'Hành vi ảnh hưởng trực tiếp đến công việc và niềm tin, nên phản ánh tiêu cực lên năng lực và uy tín nghề nghiệp: vi phạm I(D). A sai vì đã ảnh hưởng đến công việc. B sai vì I(E) nói về kiến thức, kỹ năng cho vai trò, còn tình huống là hành vi cá nhân làm suy giảm năng lực khi làm việc, thuộc I(D).' },
    { q: 'Hành vi nào ÍT có khả năng vi phạm Standard I(D) nhất?', choices: ['Khai khống chi phí tiếp khách trong báo cáo công tác', 'Bị bắt vì tham gia biểu tình ôn hòa phản đối ô nhiễm môi trường', 'Nói dối khách hàng về lý do danh mục giảm giá'], answer: 1, explain: 'Biểu tình ôn hòa không liên quan đến gian dối hay năng lực nghề nghiệp, nên thường không vi phạm I(D). A là gian lận, C là lừa gạt khách hàng; cả hai đều vi phạm I(D) (C còn có thể vi phạm I(C)).' },
    { q: 'Lâm được công ty chuyển từ phân tích cổ phiếu sang quản lý danh mục phái sinh. Hành động nào phù hợp nhất với I(E) Competence?', choices: ['Từ chối vai trò mới vì Code and Standards cấm nhận việc chưa có kinh nghiệm', 'Tham gia đào tạo, tự học và nhờ chuyên gia hỗ trợ để phát triển năng lực mà vai trò mới đòi hỏi', 'Nhận việc và giữ nguyên cách làm cũ, vì kết quả tốt sẽ chứng minh năng lực'], answer: 1, explain: 'I(E) cho phép nhận vai trò mới nhưng yêu cầu phát triển năng lực tương xứng. A sai vì không có quy định cấm. C sai vì năng lực đánh giá theo kiến thức, kỹ năng và quy trình, không theo kết quả.' },
  ];

  window.LESSONS['ET-03'] = {
    moduleId: 'ET-03',
    calculator: 'Không cần máy tính',
    warmup: [
      'Kể tên 7 Standards of Professional Conduct theo thứ tự (ET-02).',
      'Nếu luật nơi bạn làm việc lỏng hơn Code and Standards, bạn phải tuân theo gì?',
      'Theo bạn, một nhà phân tích nhận vé xem bóng đá từ công ty mình đang phân tích thì có vấn đề gì?',
    ],
    sections,
    glossary,
    practice,
    widgets: {},
    slides: [],
    wrapup: [
      'Viết một câu tóm tắt cho mỗi tiêu chuẩn I(A) đến I(E).',
      'Nêu ba bước phải làm khi phát hiện đồng nghiệp vi phạm luật.',
      'Cho một ví dụ về tuyên bố đúng về số liệu nhưng vẫn là misrepresentation.',
    ],
  };
}());
