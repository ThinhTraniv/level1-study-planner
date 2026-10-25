// Bài giảng ET-07 - Guidance for Standard V: Investment Analysis, Recommendations, and Actions (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t } = window.CFAH;

  const sections = [
    {
      title: '1. Bức tranh lớn',
      minutes: 5,
      html: `
<p>Standard V đi vào <b>công việc chuyên môn hằng ngày</b>: phân tích, khuyến nghị và ra quyết định đầu tư. Ba chuẩn con tạo thành một vòng khép kín:</p>
<table class="plain"><thead><tr><th>Chuẩn</th><th>Giai đoạn</th><th>Ý chính</th></tr></thead><tbody>
<tr><td>V(A) Diligence and Reasonable Basis</td><td>Trước khi khuyến nghị</td><td>Nghiên cứu kỹ, độc lập; có cơ sở hợp lý và đầy đủ</td></tr>
<tr><td>V(B) Communication with Clients and Prospective Clients</td><td>Khi truyền đạt</td><td>Nói rõ quy trình, rủi ro, yếu tố quan trọng; tách sự thật với ý kiến</td></tr>
<tr><td>V(C) Record Retention</td><td>Sau khi khuyến nghị</td><td>Lưu hồ sơ chứng minh cơ sở của khuyến nghị</td></tr>
</tbody></table>
<div class="key">Một khuyến nghị tốt cần ba thứ: <b>cơ sở</b> vững (V(A)), được <b>trình bày trung thực</b> (V(B)) và có <b>bằng chứng lưu lại</b> (V(C)). Thiếu một khâu là có thể vi phạm.</div>
<p>Các LOS (áp dụng, đề xuất quy trình, nhận diện vi phạm) được lồng vào từng phần.</p>`,
    },
    {
      title: '2. V(A): yêu cầu và mức độ nghiên cứu',
      minutes: 14,
      html: `
<div class="key"><b>V(A):</b> người hành nghề phải (1) thể hiện ${t('diligence', 'sự cần mẫn (diligence)')}, tính độc lập và kỹ lưỡng khi phân tích đầu tư, khuyến nghị và hành động đầu tư; (2) có ${t('reasonable', 'cơ sở hợp lý và đầy đủ (reasonable and adequate basis)')}, được hỗ trợ bởi nghiên cứu và điều tra phù hợp, cho mọi phân tích, khuyến nghị hay hành động.</div>
<h4>a) Mức độ nghiên cứu "đủ" là bao nhiêu?</h4>
<p>Không có con số cố định. Mức độ phụ thuộc vào triết lý đầu tư, vai trò của người hành nghề trong quy trình ra quyết định, nguồn lực và hỗ trợ công ty cung cấp, và loại sản phẩm. Trước khi khuyến nghị, nên cân nhắc các yếu tố như:</p>
<ul>
<li>Điều kiện kinh tế toàn cầu và trong nước.</li>
<li>Kết quả tài chính, lịch sử hoạt động, giai đoạn chu kỳ kinh doanh của công ty.</li>
<li>Phí và kết quả lịch sử của quỹ đầu tư (khi khuyến nghị quỹ).</li>
<li>Giới hạn của các mô hình định lượng được dùng.</li>
<li>So sánh với nhóm công ty tương đồng (peer group) có thực sự phù hợp để định giá không.</li>
</ul>
<h4>b) Cần mẫn không có nghĩa là hoàn hảo</h4>
<p>Khuyến nghị có cơ sở hợp lý mà sau đó sai thì <b>không vi phạm</b>. Chuẩn đánh giá <b>quy trình</b>, không đánh giá kết quả. Ngược lại, khuyến nghị đúng nhờ may mắn mà không có cơ sở thì vẫn vi phạm.</p>
<div class="example"><div class="ex-h">Ví dụ 2.1 - Báo cáo viết vội</div>
<p>Thái vừa đi học MBA vừa làm cộng tác viên cho một trang nghiên cứu trực tuyến, mỗi tháng phải ra một báo cáo. Hôm trước hạn nộp, vì bận thi, anh viết báo cáo dựa vào vài bài báo và cổ phiếu "nóng" trong ngày.</p>
<details><summary>Xem lời giải</summary><p><b>Vi phạm V(A).</b> Vài bài báo không phải là nghiên cứu đầy đủ. Nếu không đủ thời gian, Thái nên xin lùi hạn hoặc không phát hành.</p></details></div>
<div class="example"><div class="ex-h">Ví dụ 2.2 - Hai chuyên viên, hai cách làm</div>
<p>King dùng bộ lọc máy tính chia cổ phiếu thành giá trị và tăng trưởng, thấy năm qua nhóm giá trị kém hơn nhóm tăng trưởng, rồi chỉ dựa vào đó khuyến nghị bán toàn bộ cổ phiếu giá trị. Capelli phân tích ngành, phân tích tài chính, hợp đồng, tài sản và phỏng vấn lãnh đạo công ty trước khi khuyến nghị mua.</p>
<details><summary>Xem lời giải</summary><p><b>Capelli có cơ sở hợp lý, King thì không.</b> Kết quả một năm của cả một nhóm cổ phiếu không đủ để kết luận cho từng cổ phiếu hay cho tương lai.</p></details></div>`,
    },
    {
      title: '3. V(A): nghiên cứu bên thứ ba, mô hình định lượng, người quản lý bên ngoài',
      minutes: 17,
      html: `
<h4>a) ${t('thirdparty', 'Nghiên cứu thứ cấp và của bên thứ ba (secondary / third-party research)')}</h4>
<p>Được dùng nghiên cứu của người khác, nhưng phải nỗ lực hợp lý để xác định nghiên cứu đó <b>đáng tin cậy</b>: giả định sử dụng, độ chặt chẽ của phân tích, nghiên cứu có còn cập nhật không, mức độ khách quan và độc lập của khuyến nghị.</p>
<div class="example"><div class="ex-h">Ví dụ 3.1 - Công ty nhỏ dùng báo cáo mua ngoài</div>
<p>Ngân điều hành công ty quản lý đầu tư hai người. Công ty mua dịch vụ báo cáo từ một hãng nghiên cứu lớn và đưa ra khuyến nghị dựa trên các báo cáo đó.</p>
<details><summary>Xem lời giải</summary><p><b>Được phép</b>, với điều kiện Ngân đã thẩm định chất lượng của hãng nghiên cứu: phương pháp, giả định, tính độc lập, và rà soát lại định kỳ. Dùng báo cáo mà không hề kiểm tra mới là vi phạm.</p></details></div>
<h4>b) ${t('quant', 'Nghiên cứu định lượng (quantitatively oriented research)')}</h4>
<ul>
<li><b>Người dùng</b> mô hình phải hiểu các tham số, giả định, giới hạn của mô hình và cách kết quả được dùng trong quyết định. Không cần là chuyên gia lập trình, nhưng không được dùng "hộp đen" mà không hiểu.</li>
<li><b>Người xây dựng</b> mô hình chịu mức yêu cầu cao hơn: phải kiểm tra mô hình kỹ, kể cả ${t('stress', 'kịch bản bất lợi, ít khả năng xảy ra (stress scenarios)')}, chứ không chỉ kịch bản bình thường. Bài học từ khủng hoảng 2008: nhiều mô hình định giá chứng khoán thế chấp không kiểm tra trường hợp giá nhà giảm toàn quốc.</li>
</ul>
<h4>c) Chọn ${t('external', 'người quản lý bên ngoài và người quản lý phụ (external advisers / subadvisers)')}</h4>
<p>Khi giao tiền khách hàng cho người quản lý khác, phải thẩm định: chính sách và quy trình tuân thủ, kiểm soát nội bộ; chất lượng thông tin kết quả đầu tư công bố (có theo GIPS không); việc tuân thủ đúng chiến lược đã nêu; bộ quy tắc đạo đức của họ. <b>Phí thấp không phải tiêu chí duy nhất.</b></p>
<h4>d) ${t('group', 'Nghiên cứu và quyết định theo nhóm (group research)')}</h4>
<p>Báo cáo do một ủy ban hay nhóm đưa ra có thể khác ý kiến cá nhân của một thành viên. Nếu thành viên đó tin rằng ý kiến chung <b>có cơ sở hợp lý, độc lập và khách quan</b>, họ <b>không cần</b> rút tên khỏi báo cáo. Họ có thể ghi lại ý kiến khác của mình. Chỉ khi cho rằng báo cáo thiếu cơ sở hợp lý thì mới cần tách khỏi báo cáo.</p>
<div class="example"><div class="ex-h">Ví dụ 3.2 - Chuyên viên trẻ không đồng ý với ủy ban</div>
<p>Chuyên viên trẻ Ngân viết báo cáo ngành bán lẻ và nộp cho ủy ban nghiên cứu theo quy trình. Phần lớn ủy ban không đồng ý với kết luận của cô và sửa khuyến nghị. Ngân có nên yêu cầu bỏ tên mình khỏi báo cáo không?</p>
<details><summary>Xem lời giải</summary><p><b>Không cần</b>, nếu Ngân tin rằng quy trình của ủy ban có cơ sở hợp lý và khách quan. Khác biệt về quan điểm là bình thường. Cô có thể lưu lại ý kiến riêng trong hồ sơ.</p></details></div>
<p class="warn"><b>Bẫy:</b> "dùng báo cáo của hãng lớn nên không cần kiểm tra" là sai; "không đồng ý với nhóm thì phải rút tên" cũng sai.</p>`,
    },
    {
      title: '4. V(A): khuyến nghị tuân thủ',
      minutes: 10,
      html: `
<p>Người hành nghề nên khuyến khích công ty có:</p>
<ul>
<li><b>Chính sách yêu cầu cơ sở</b>: mọi báo cáo và khuyến nghị phải có cơ sở chứng minh được là hợp lý và đầy đủ.</li>
<li><b>Hướng dẫn chi tiết bằng văn bản</b> về quy trình nghiên cứu và thẩm định.</li>
<li><b>Tiêu chí đo lường được</b> để đánh giá chất lượng nghiên cứu, và gắn thù lao của chuyên viên với các tiêu chí đó (không chỉ với doanh thu môi giới).</li>
<li><b>Quy trình kiểm tra kịch bản</b> tối thiểu cho mô hình máy tính: phạm vi kịch bản, độ chính xác theo thời gian, độ nhạy của dòng tiền với giả định và đầu vào.</li>
<li><b>Chính sách đánh giá nhà cung cấp thông tin bên ngoài</b>: tính hợp lý, chính xác, và tần suất đánh giá lại.</li>
<li><b>Tiêu chuẩn đánh giá người quản lý bên ngoài</b> và tần suất rà soát họ.</li>
<li>Chính sách rà soát định kỳ chất lượng nghiên cứu của bên thứ ba.</li>
</ul>
<div class="example"><div class="ex-h">Ví dụ 4.1 - Tin lời ban lãnh đạo</div>
<p>Chuyên viên Wise gặp ban lãnh đạo công ty mình theo dõi. Họ rất lạc quan về thương vụ mua lại vừa hoàn tất. Hào hứng, cô viết báo cáo khẳng định công ty "sắp đạt thành công lớn" nhờ thương vụ này.</p>
<details><summary>Xem lời giải</summary><p><b>Vi phạm.</b> Sự lạc quan của ban lãnh đạo chỉ là ý kiến; Wise biến nó thành điều chắc chắn mà không phân tích độc lập (V(A)) và không tách ý kiến với sự thật (V(B)).</p></details></div>
<div class="example"><div class="ex-h">Ví dụ 4.2 - Khuyến nghị sai nhưng có cơ sở</div>
<p>Chuyên viên Phát phân tích kỹ một công ty sản xuất, dựa trên số liệu ngành, báo cáo tài chính và kiểm tra thực địa, khuyến nghị mua. Ba tháng sau, một trận lũ bất ngờ phá hủy nhà máy và giá cổ phiếu giảm 40%.</p>
<details><summary>Xem lời giải</summary><p><b>Không vi phạm.</b> Khuyến nghị có cơ sở hợp lý và đầy đủ tại thời điểm đưa ra. V(A) đánh giá quy trình, không đòi hỏi dự đoán đúng mọi sự kiện.</p></details></div>`,
    },
    {
      title: '5. V(B) Communication with Clients and Prospective Clients',
      minutes: 18,
      html: `
<div class="key"><b>V(B):</b> người hành nghề phải:<br>
(1) công bố cho khách hàng và khách hàng tiềm năng <b>khuôn khổ cơ bản và nguyên tắc chung</b> của quy trình đầu tư dùng để phân tích, chọn chứng khoán, xây dựng danh mục, và <b>kịp thời</b> công bố mọi thay đổi có thể ảnh hưởng đáng kể đến quy trình;<br>
(2) công bố các <b>giới hạn và rủi ro đáng kể</b> gắn với quy trình đầu tư;<br>
(3) dùng phán đoán hợp lý để xác định các <b>yếu tố quan trọng</b> với phân tích, khuyến nghị hay hành động, và đưa các yếu tố đó vào thông tin gửi khách hàng;<br>
(4) <b>tách bạch sự thật và ý kiến</b> khi trình bày phân tích và khuyến nghị.</div>
<h4>a) Thông báo về quy trình đầu tư</h4>
<p>Khách hàng cần hiểu tiền của mình được quản lý thế nào để đánh giá có phù hợp với họ không. Thay đổi lớn như đổi mô hình chọn cổ phiếu, đổi người quản lý chính, bắt đầu dùng phái sinh, phải được thông báo kịp thời.</p>
<h4>b) ${t('risklim', 'Rủi ro và giới hạn (risks and limitations)')}</h4>
<p>Ví dụ: rủi ro thanh khoản, ${t('capacity', 'giới hạn quy mô (capacity)')} của chiến lược (chiến lược cổ phiếu vốn hóa nhỏ khó mở rộng), rủi ro đòn bẩy, rủi ro của sản phẩm cấu trúc và phái sinh, giới hạn và giả định của mô hình định lượng. Công bố rủi ro không nhất thiết phải dài, nhưng phải đủ để khách hàng hiểu.</p>
<h4>c) Trình bày báo cáo</h4>
<ul>
<li>Không thể đưa mọi chi tiết vào báo cáo. Người hành nghề chọn các yếu tố quan trọng và đưa vào; phần còn lại lưu trong hồ sơ (V(C)) và cung cấp khi được hỏi.</li>
<li>Hình thức ngắn (tin nhắn, bài đăng mạng xã hội, bản tin tóm tắt) vẫn phải chính xác; nên dẫn đến thông tin đầy đủ.</li>
</ul>
<h4>d) ${t('factopinion', 'Sự thật và ý kiến (fact and opinion)')}</h4>
<p>Dự báo lợi nhuận, giá mục tiêu, kỳ vọng về cổ tức, kết quả của mô hình thống kê đều là <b>ý kiến</b>, dù được tính toán công phu. Khi trình bày phải dùng ngôn ngữ cho thấy đó là ước tính, và nêu giả định chính.</p>
<table class="plain"><thead><tr><th>Sự thật</th><th>Ý kiến</th></tr></thead><tbody>
<tr><td>Doanh thu năm 2026 đã kiểm toán là 1.200 tỷ đồng</td><td>Doanh thu năm 2027 dự kiến 1.400 tỷ đồng</td></tr>
<tr><td>Công ty đã công bố trả cổ tức 2.000 đồng/cổ phiếu</td><td>Cổ tức có khả năng tăng trong 3 năm tới</td></tr>
<tr><td>Kết quả khoan mẫu lõi được công bố</td><td>Trữ lượng ước tính 500.000 ounce vàng</td></tr>
</tbody></table>
<p class="warn"><b>Bẫy:</b> con số từ mô hình rất chi tiết (ví dụ "giá mục tiêu 52.340 đồng") vẫn là ý kiến. Viết "chắc chắn", "dựa trên sự thật là..." cho một ước tính là vi phạm V(B).</p>`,
    },
    {
      title: '6. V(B): tình huống và khuyến nghị',
      minutes: 9,
      html: `
<div class="example"><div class="ex-h">Ví dụ 6.1 - "Sự thật" về trữ lượng</div>
<p>Chuyên viên Như tính toán từ mẫu lõi khoan gần nhất và kết luận mỏ có hơn 500.000 ounce vàng. Báo cáo kết thúc bằng câu: "Dựa trên sự thật là công ty có 500.000 ounce vàng để khai thác, tôi khuyến nghị MUA mạnh."</p>
<details><summary>Xem lời giải</summary><p><b>Vi phạm V(B).</b> Trữ lượng là ước tính từ tính toán, không phải sự thật. Cô nên viết là "ước tính", nêu cơ sở và giới hạn của phương pháp.</p></details></div>
<div class="example"><div class="ex-h">Ví dụ 6.2 - Đổi mô hình mà không báo</div>
<p>Quỹ cổ phiếu giá trị của Phong chọn cổ phiếu bằng bốn mô hình đa nhân tố. Phong tìm được một mô hình chiết khấu cổ tức mới dựa trên lạm phát, tăng trưởng lợi nhuận và lãi suất dự báo, và thay một mô hình cũ bằng mô hình này mà không thông báo cho khách hàng.</p>
<details><summary>Xem lời giải</summary><p><b>Vi phạm V(B).</b> Thay mô hình chọn cổ phiếu là thay đổi đáng kể trong quy trình đầu tư; phải thông báo kịp thời cho khách hàng và khách hàng tiềm năng.</p></details></div>
<div class="example"><div class="ex-h">Ví dụ 6.3 - Không nói về capacity</div>
<p>Quỹ cổ phiếu vốn hóa nhỏ đã tăng quy mô gấp 5 lần trong hai năm. Quản lý quỹ biết rằng với quy mô này, quỹ không còn mua được nhiều cổ phiếu nhỏ như trước mà phải chuyển dần sang cổ phiếu vốn hóa vừa, nhưng tài liệu tiếp thị vẫn mô tả chiến lược cũ.</p>
<details><summary>Xem lời giải</summary><p><b>Vi phạm V(B).</b> Giới hạn quy mô và thay đổi chiến lược thực tế là thông tin quan trọng cần công bố.</p></details></div>
<h4>Khuyến nghị tuân thủ</h4>
<ul>
<li>Báo cáo nên đầy đủ: có quy trình, các yếu tố chính, rủi ro, giả định; tách rõ phần ước tính.</li>
<li>Có bản đầy đủ để cung cấp khi khách hàng yêu cầu, nhất là khi gửi bản tóm tắt.</li>
<li>Khi thay đổi quy trình, nhân sự chủ chốt hay chiến lược: thông báo bằng văn bản, kịp thời.</li>
</ul>`,
    },
    {
      title: '7. V(C) Record Retention',
      minutes: 11,
      html: `
<div class="key"><b>V(C):</b> người hành nghề phải xây dựng và lưu giữ hồ sơ phù hợp để chứng minh cơ sở cho các phân tích, khuyến nghị, hành động đầu tư và các thông tin khác liên quan đến đầu tư gửi khách hàng và khách hàng tiềm năng.</div>
<h4>a) Lưu những gì?</h4>
<ul>
<li>Tài liệu hỗ trợ kết luận của chuyên viên và các hành động đầu tư đã thực hiện: mô hình, số liệu, ghi chú gặp công ty, biên bản họp ủy ban.</li>
<li>Mọi trao đổi với khách hàng qua <b>bất kỳ phương tiện nào</b>: email, tin nhắn, mạng xã hội, ứng dụng chat, ghi âm.</li>
</ul>
<h4>b) Hồ sơ thuộc về ai?</h4>
<p>Hồ sơ là ${t('firmprop', 'tài sản của công ty (property of the firm)')}. Khi chuyển công ty, người hành nghề <b>không được</b> mang theo hồ sơ, trừ khi công ty cũ cho phép. Ở công ty mới, muốn tiếp tục khuyến nghị một cổ phiếu thì phải <b>tạo lại</b> tài liệu từ thông tin công khai hoặc từ chính công ty được phân tích, không được dựa vào trí nhớ hay tài liệu của công ty cũ.</p>
<h4>c) Lưu bao lâu?</h4>
<ul>
<li>Theo quy định pháp luật và chính sách của công ty nơi làm việc.</li>
<li>Nếu <b>không có</b> quy định hay chính sách nào, CFA Institute khuyến nghị lưu tối thiểu <b>7 năm</b>.</li>
</ul>
<h4>d) Ai chịu trách nhiệm?</h4>
<p>Thường thì việc lưu trữ do công ty đảm nhận, nhưng nghĩa vụ theo V(C) vẫn thuộc về <b>từng người hành nghề</b>. Nếu công ty không có hệ thống phù hợp, người hành nghề phải tự lưu hồ sơ của mình theo cách phù hợp.</p>
<div class="example"><div class="ex-h">Ví dụ 7.1 - Chuyển việc và khuyến nghị cũ</div>
<p>Chuyên viên Phúc chuyển từ công ty A sang công ty B. Ở A, anh đã viết báo cáo khuyến nghị mua cổ phiếu Q. Công ty B muốn anh tiếp tục theo dõi Q và phát hành khuyến nghị ngay tuần đầu.</p>
<details><summary>Xem lời giải</summary><p>Phúc phải xây dựng lại phân tích và hồ sơ từ nguồn công khai hoặc từ Q, tại B. Dựa vào tài liệu mang từ A (vi phạm cả IV(A)) hay chỉ dựa vào trí nhớ đều không đáp ứng V(C).</p></details></div>
<div class="example"><div class="ex-h">Ví dụ 7.2 - Tư vấn qua ứng dụng chat</div>
<p>Quản lý tài sản Yến thường trao đổi với khách hàng qua ứng dụng nhắn tin cá nhân, và tin nhắn tự xóa sau 24 giờ.</p>
<details><summary>Xem lời giải</summary><p><b>Vi phạm V(C).</b> Trao đổi liên quan đến đầu tư qua mọi kênh đều là hồ sơ cần lưu. Yến nên dùng kênh được công ty phê duyệt và có lưu trữ.</p></details></div>
<p class="warn"><b>Bẫy:</b> 7 năm là <b>khuyến nghị</b> khi không có quy định nào, không phải yêu cầu bắt buộc thay thế luật địa phương. Nếu luật yêu cầu lâu hơn hoặc ngắn hơn, theo luật (và theo nguyên tắc chuẩn nào nghiêm hơn của I(A)).</p>`,
    },
    {
      title: '8. Tóm tắt và bẫy thường gặp',
      minutes: 6,
      html: `
<table class="plain"><thead><tr><th>Tình huống</th><th>Chuẩn</th><th>Kết luận</th></tr></thead><tbody>
<tr><td>Báo cáo dựa vào vài bài báo</td><td>V(A)</td><td>Vi phạm</td></tr>
<tr><td>Khuyến nghị có cơ sở nhưng sau đó sai</td><td>V(A)</td><td>Không vi phạm</td></tr>
<tr><td>Dùng nghiên cứu bên thứ ba đã thẩm định</td><td>V(A)</td><td>Không vi phạm</td></tr>
<tr><td>Dùng mô hình mà không hiểu giả định</td><td>V(A)</td><td>Vi phạm</td></tr>
<tr><td>Chọn người quản lý phụ chỉ vì phí thấp</td><td>V(A)</td><td>Vi phạm</td></tr>
<tr><td>Không đồng ý với ủy ban có cơ sở hợp lý</td><td>V(A)</td><td>Không cần rút tên</td></tr>
<tr><td>Đổi mô hình chọn cổ phiếu, không báo khách</td><td>V(B)</td><td>Vi phạm</td></tr>
<tr><td>Gọi ước tính là "sự thật"</td><td>V(B)</td><td>Vi phạm</td></tr>
<tr><td>Không nêu rủi ro thanh khoản, capacity</td><td>V(B)</td><td>Vi phạm</td></tr>
<tr><td>Mang hồ sơ sang công ty mới</td><td>V(C), IV(A)</td><td>Vi phạm</td></tr>
<tr><td>Không có quy định lưu trữ</td><td>V(C)</td><td>Khuyến nghị tối thiểu 7 năm</td></tr>
<tr><td>Trao đổi với khách qua tin nhắn tự xóa</td><td>V(C)</td><td>Vi phạm</td></tr>
</tbody></table>
<p class="warn"><b>Ba bẫy lớn nhất:</b> (1) V(A) đánh giá <b>quy trình</b>, không đánh giá kết quả; (2) mô hình tinh vi đến đâu thì kết quả vẫn là <b>ý kiến</b>; (3) hồ sơ thuộc về <b>công ty</b>, không thuộc về người viết.</p>`,
    },
  ];

  const glossary = {
    diligence: ['Diligence', 'Sự cần mẫn', 'Làm việc kỹ lưỡng, độc lập, đủ chiều sâu trước khi khuyến nghị.'],
    reasonable: ['Reasonable and adequate basis', 'Cơ sở hợp lý và đầy đủ', 'Nghiên cứu và điều tra đủ để chứng minh khuyến nghị là hợp lý.'],
    thirdparty: ['Secondary / third-party research', 'Nghiên cứu của bên thứ ba', 'Nghiên cứu do người khác thực hiện; được dùng sau khi thẩm định độ tin cậy.'],
    quant: ['Quantitatively oriented research', 'Nghiên cứu định lượng', 'Phân tích dựa trên mô hình, thuật toán; phải hiểu giả định và giới hạn.'],
    stress: ['Stress scenarios', 'Kịch bản bất lợi', 'Kịch bản cực đoan, ít khả năng xảy ra dùng để kiểm tra mô hình.'],
    external: ['External advisers / subadvisers', 'Người quản lý bên ngoài', 'Đơn vị được giao quản lý một phần tài sản khách hàng; cần thẩm định trước khi chọn.'],
    group: ['Group research and decision making', 'Nghiên cứu theo nhóm', 'Khuyến nghị do ủy ban đưa ra; thành viên bất đồng không cần rút tên nếu có cơ sở hợp lý.'],
    risklim: ['Risks and limitations', 'Rủi ro và giới hạn', 'Những điểm yếu của quy trình hay khoản đầu tư mà khách hàng cần biết.'],
    capacity: ['Capacity', 'Giới hạn quy mô', 'Quy mô tối đa một chiến lược có thể quản lý mà không làm giảm hiệu quả.'],
    factopinion: ['Fact and opinion', 'Sự thật và ý kiến', 'Sự thật là điều đã xảy ra, kiểm chứng được; dự báo, ước tính là ý kiến.'],
    firmprop: ['Property of the firm', 'Tài sản của công ty', 'Hồ sơ nghiên cứu và trao đổi với khách hàng thuộc về công ty, không thuộc cá nhân.'],
  };

  const practice = [
    { q: 'Chuyên viên Long cần nộp báo cáo khuyến nghị gấp. Anh dựa vào một bản tin tổng hợp trên mạng và giá cổ phiếu tăng mạnh tuần qua để khuyến nghị mua. Long:', choices: ['Vi phạm V(A) vì không có cơ sở hợp lý và đầy đủ cho khuyến nghị', 'Không vi phạm nếu cổ phiếu sau đó tăng giá', 'Không vi phạm vì áp lực thời gian là lý do chính đáng'], answer: 0, explain: 'Bản tin tổng hợp và đà tăng giá không phải nghiên cứu đầy đủ. Kết quả tốt sau đó (B) không thay thế cho quy trình. Áp lực thời gian (C) không miễn trừ yêu cầu; nên lùi hạn hoặc không phát hành.' },
    { q: 'Một công ty quản lý nhỏ dùng báo cáo của một hãng nghiên cứu lớn làm cơ sở khuyến nghị. Điều kiện để tuân thủ V(A) là:', choices: ['Hãng nghiên cứu phải có tên tuổi trên thị trường', 'Công ty đã nỗ lực hợp lý đánh giá giả định, phương pháp, tính cập nhật và tính độc lập của nghiên cứu', 'Công ty phải tự làm lại toàn bộ phân tích của hãng nghiên cứu'], answer: 1, explain: 'Được dùng nghiên cứu bên thứ ba sau khi thẩm định độ tin cậy. Tên tuổi (A) không thay thế thẩm định. Không cần làm lại toàn bộ (C).' },
    { q: 'Chuyên viên Hà là thành viên ủy ban đầu tư. Ủy ban ra khuyến nghị "giữ" cho cổ phiếu X, trong khi Hà nghĩ nên "mua". Cô tin quy trình của ủy ban kỹ lưỡng và khách quan. Theo V(A), Hà:', choices: ['Phải rút tên khỏi báo cáo vì không đồng ý với kết luận', 'Phải công bố ý kiến riêng cho khách hàng', 'Không cần rút tên vì ý kiến chung có cơ sở hợp lý, độc lập và khách quan'], answer: 2, explain: 'Bất đồng với một quyết định nhóm có cơ sở hợp lý không đòi hỏi rút tên (A sai). Hà có thể ghi lại ý kiến trong hồ sơ, nhưng không bắt buộc công bố cho khách (B).' },
    { q: 'Quản lý danh mục Dũng dùng một mô hình định lượng mua từ nhà cung cấp để chọn trái phiếu. Anh không biết mô hình giả định gì về lãi suất và chưa từng xem kết quả khi thị trường biến động mạnh. Dũng:', choices: ['Không vi phạm vì người xây dựng mô hình mới chịu trách nhiệm', 'Vi phạm V(A) vì không hiểu giả định và giới hạn của mô hình đang dùng', 'Không vi phạm nếu mô hình cho kết quả tốt trong quá khứ'], answer: 1, explain: 'Người dùng mô hình phải hiểu tham số, giả định, giới hạn. Người xây dựng có yêu cầu cao hơn, nhưng người dùng vẫn có trách nhiệm (A sai). Kết quả quá khứ (C) không thay cho hiểu biết về mô hình.' },
    { q: 'Báo cáo của chuyên viên Mai viết: "Lợi nhuận năm tới sẽ tăng 25%, đây là điều chắc chắn dựa trên mô hình của chúng tôi." Câu này:', choices: ['Vi phạm V(B) vì trình bày ước tính như một sự thật', 'Không vi phạm nếu mô hình đã được kiểm định kỹ', 'Không vi phạm vì người đọc tự hiểu đó là dự báo'], answer: 0, explain: 'Dự báo từ mô hình là ý kiến; khẳng định "chắc chắn" là không tách sự thật với ý kiến. Mô hình tốt (B) hay người đọc tự hiểu (C) không thay đổi yêu cầu trình bày.' },
    { q: 'Quỹ cổ phiếu tăng trưởng quyết định bắt đầu dùng hợp đồng tương lai chỉ số để tăng đòn bẩy. Theo V(B), quỹ cần:', choices: ['Không cần thông báo nếu đòn bẩy không vượt quá luật cho phép', 'Chỉ thông báo trong báo cáo năm', 'Kịp thời thông báo thay đổi quy trình và các rủi ro mới cho khách hàng và khách hàng tiềm năng'], answer: 2, explain: 'Dùng phái sinh tạo đòn bẩy là thay đổi đáng kể quy trình và rủi ro; phải công bố kịp thời. Đúng luật (A) chưa đủ. Chờ báo cáo năm (B) không kịp thời.' },
    { q: 'Nhận định nào về V(B) là đúng nhất?', choices: ['Mọi báo cáo phải chứa toàn bộ dữ liệu và phép tính đã dùng', 'Người hành nghề chọn các yếu tố quan trọng để đưa vào báo cáo, lưu phần còn lại và cung cấp khi được hỏi', 'Bản tóm tắt ngắn trên mạng xã hội không chịu sự điều chỉnh của V(B)'], answer: 1, explain: 'V(B) yêu cầu dùng phán đoán hợp lý để đưa yếu tố quan trọng vào báo cáo; không cần đưa mọi chi tiết (A). Mọi hình thức truyền đạt đều chịu điều chỉnh (C sai).' },
    { q: 'Chuyên viên Phúc chuyển sang công ty mới và muốn tiếp tục khuyến nghị cổ phiếu anh đã theo dõi ở công ty cũ. Cách làm phù hợp nhất:', choices: ['Tạo lại phân tích và hồ sơ từ thông tin công khai hoặc từ công ty được phân tích', 'Dùng bản sao mô hình đã mang theo từ công ty cũ', 'Phát hành khuyến nghị dựa vào trí nhớ vì chính anh đã làm phân tích'], answer: 0, explain: 'Hồ sơ cũ là tài sản của công ty cũ (B vi phạm V(C) và IV(A)). Dựa vào trí nhớ (C) không có hồ sơ chứng minh cơ sở.' },
    { q: 'Công ty quản lý tài sản tại một quốc gia không có quy định về thời gian lưu hồ sơ, và công ty cũng chưa có chính sách. Theo khuyến nghị của CFA Institute, hồ sơ nên được lưu tối thiểu:', choices: ['3 năm', '5 năm', '7 năm'], answer: 2, explain: 'Khi không có quy định pháp luật hay chính sách công ty, khuyến nghị lưu tối thiểu 7 năm. 3 và 5 năm là các mốc gây nhiễu thường gặp.' },
    { q: 'Quản lý tài sản Yến tư vấn cho khách hàng qua ứng dụng nhắn tin với tính năng tự xóa tin sau 24 giờ. Nhận định đúng nhất:', choices: ['Không vi phạm vì tin nhắn không phải văn bản chính thức', 'Vi phạm V(C) vì trao đổi liên quan đến đầu tư qua mọi phương tiện đều cần được lưu', 'Không vi phạm nếu khách hàng đồng ý dùng ứng dụng đó'], answer: 1, explain: 'V(C) áp dụng cho mọi phương tiện, kể cả tin nhắn và mạng xã hội (A sai). Sự đồng ý của khách hàng (C) không miễn nghĩa vụ lưu hồ sơ.' },
  ];

  window.LESSONS['ET-07'] = {
    moduleId: 'ET-07',
    calculator: 'Không cần máy tính',
    warmup: [
      'Nhắc lại: khi rời công ty, những gì là tài sản của công ty theo IV(A) (ET-06)?',
      'Theo bạn, một khuyến nghị sai có nghĩa là chuyên viên đã làm việc không cẩn thận không?',
      'Câu "doanh thu năm tới sẽ đạt 1.400 tỷ đồng" là sự thật hay ý kiến? Vì sao?',
    ],
    sections,
    glossary,
    practice,
    widgets: {},
    slides: [],
    wrapup: [
      'Nêu bốn yêu cầu của V(B) bằng lời của bạn.',
      'Kể ba điều cần thẩm định khi dùng nghiên cứu của bên thứ ba và ba điều khi chọn người quản lý phụ.',
      'Khi chuyển công ty, bạn xử lý hồ sơ và các khuyến nghị cũ thế nào để tuân thủ V(C)?',
    ],
  };
}());
