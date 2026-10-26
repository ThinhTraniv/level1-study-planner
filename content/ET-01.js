// Bài giảng ET-01 - Ethics and Trust in the Investment Profession (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t } = window.CFAH;

  const sections = [
    {
      title: '1. Bức tranh lớn',
      minutes: 6,
      html: `
<p>Topic Ethical and Professional Standards chiếm 10-15% đề Level I năm 2027 (trước đó là 15-20%) và xuất hiện ở cả ba cấp thi. Module mở đầu này chưa đi vào từng Standard; nó trả lời câu hỏi gốc: <b>vì sao ngành đầu tư cần đạo đức, và đạo đức vận hành như thế nào trong một nghề nghiệp</b>.</p>
<div class="key">Ngành đầu tư bán một thứ vô hình: lời hứa sẽ quản lý tiền của người khác vì lợi ích của họ. Khách hàng không kiểm tra được chất lượng ngay, nên họ phải <b>tin</b>. Đạo đức nghề nghiệp là cơ chế tạo ra và giữ gìn niềm tin đó.</div>
<p>Tám LOS của module đi theo một mạch logic:</p>
<ol>
  <li><b>Đạo đức là gì</b> (LOS: explain ethics) - phần 2.</li>
  <li><b>Code of ethics định nghĩa một nghề</b> và <b>nghề nghiệp xây dựng niềm tin</b> (2 LOS) - phần 3, 4.</li>
  <li><b>Vì sao ngành đầu tư cần chuẩn mực đạo đức cao</b> và <b>tính chuyên nghiệp trong quản lý đầu tư</b> (2 LOS) - phần 5, 6.</li>
  <li><b>Những thách thức đối với hành vi đạo đức</b> - phần 7.</li>
  <li><b>So sánh chuẩn mực đạo đức và chuẩn mực pháp lý</b> - phần 8.</li>
  <li><b>Khung ra quyết định đạo đức</b> - phần 9.</li>
</ol>
<p class="tip"><b>Cách học:</b> module này không có tính toán, câu hỏi thường là định nghĩa hoặc tình huống ngắn "điều nào đúng nhất". Hãy nắm chắc vài cặp khái niệm hay bị đánh tráo: code of ethics và standards of conduct, hợp pháp và đạo đức, overconfidence và situational influences, cùng bốn bước của framework.</p>`,
    },
    {
      title: '2. Đạo đức là gì (ethics)',
      minutes: 11,
      html: `
<p>${t('ethics', 'Đạo đức (ethics)')} là tập hợp <b>niềm tin chung</b> của một cộng đồng về hành vi nào là tốt, chấp nhận được và hành vi nào là xấu, không chấp nhận được. Chữ "chung" rất quan trọng: đạo đức không phải sở thích riêng của một người, mà là kỳ vọng mà xã hội đặt lên mỗi thành viên.</p>
<ul>
  <li>${t('principles', 'Nguyên tắc đạo đức (ethical principles)')}: các niềm tin nền tảng như trung thực, công bằng, tôn trọng, giữ lời hứa. Chúng có thể bắt nguồn từ tôn giáo, văn hóa, gia đình, triết học.</li>
  <li>${t('conduct', 'Hành vi đạo đức (ethical conduct)')}: hành động tuân theo các nguyên tắc đó và phù hợp với kỳ vọng đạo đức của xã hội.</li>
</ul>
<h4>Cốt lõi: cân bằng lợi ích bản thân với tác động lên người khác</h4>
<p>Hầu hết tình huống đạo đức không phải là chọn giữa "tốt" và "ác" rõ ràng, mà là chọn giữa <b>lợi ích của mình</b> và <b>lợi ích của người khác</b>. Một hành vi đạo đức là hành vi mà người ra quyết định đã cân nhắc nghiêm túc hậu quả đối với những ${t('stakeholder', 'bên liên quan (stakeholders)')}: khách hàng, đồng nghiệp, công ty, thị trường, xã hội.</p>
<div class="example"><div class="ex-h">Ví dụ 2.1</div>
<p>Chi là chuyên viên tư vấn tại một công ty chứng khoán. Quỹ A trả hoa hồng cho Chi cao gấp đôi quỹ B, trong khi quỹ B có phí thấp hơn và hợp với mục tiêu của khách hàng hơn. Chi giới thiệu quỹ A vì "không có luật nào cấm". Hành vi này có đạo đức không?</p>
<details><summary>Xem lời giải</summary><p><b>Không.</b> Chi đặt lợi ích của mình (hoa hồng) lên trên lợi ích của khách hàng mà không cân nhắc tác động lên họ. "Không có luật cấm" chỉ nói về tính hợp pháp, không nói về đạo đức (phần 8). Trong các module sau, đây là vấn đề của Standard III (Duties to Clients) và VI (Conflicts of Interest).</p></details></div>
<p class="warn"><b>Bẫy:</b> đạo đức không đồng nghĩa với "làm theo cảm tính" hay "làm điều mình thấy đúng". Đề thi định nghĩa ethics là <b>niềm tin được chia sẻ</b> về hành vi tốt và xấu, gắn với kỳ vọng của xã hội.</p>`,
    },
    {
      title: '3. Code of ethics và vai trò định nghĩa một nghề',
      minutes: 14,
      html: `
<p>Khi một nhóm người cùng làm một công việc chuyên môn, họ cần một văn bản nói rõ "chúng tôi cam kết hành xử như thế nào". Đó là ${t('code', 'bộ quy tắc đạo đức (code of ethics)')}: một tập hợp <b>nguyên tắc đạo đức được viết ra</b>, hướng dẫn hành vi bằng cách mô tả điều gì được xem là chấp nhận được.</p>
<p>Nhiều tổ chức đi thêm một bước: ban hành ${t('soc', 'chuẩn mực hành nghề (standards of conduct)')}, tức các quy định cụ thể hơn, đặt ra <b>mức hành vi tối thiểu</b> chấp nhận được. Code of ethics là nguyên tắc rộng; standards of conduct là quy tắc cụ thể giúp diễn giải và áp dụng code.</p>
<table class="plain"><thead><tr><th>Tiêu chí</th><th>Code of ethics</th><th>Standards of conduct</th></tr></thead><tbody>
<tr><td>Bản chất</td><td>Nguyên tắc chung</td><td>Quy tắc cụ thể</td></tr>
<tr><td>Vai trò</td><td>Nêu giá trị, cam kết</td><td>Đặt mức hành vi tối thiểu</td></tr>
<tr><td>Ví dụ của CFA Institute</td><td>6 điều của Code of Ethics</td><td>7 Standards, 23 tiêu chuẩn con</td></tr>
</tbody></table>
<h4>Vai trò của code of ethics trong việc định nghĩa một nghề</h4>
<ul>
  <li><b>Truyền thông với công chúng</b>: tuyên bố rằng thành viên sẽ dùng kiến thức và kỹ năng để phục vụ khách hàng một cách trung thực, có đạo đức. Người ngoài nghề nhờ đó biết họ có thể kỳ vọng điều gì.</li>
  <li><b>Hướng dẫn thành viên</b>: giúp người hành nghề nhận ra và xử lý tình huống khó, nhất là khi lợi ích bản thân xung đột với lợi ích khách hàng.</li>
  <li><b>Tạo chuẩn chung để đánh giá và kỷ luật</b>: hành vi của thành viên được so với một văn bản công khai, không phải với ý kiến cá nhân.</li>
  <li><b>Phân biệt nghề với một công việc thông thường</b>: cam kết đạo đức vượt trên yêu cầu pháp luật chính là điều làm nên một nghề.</li>
</ul>
<p class="tip"><b>Liên hệ:</b> bác sĩ có lời thề Hippocrates và quy định y đức; kiểm toán viên có chuẩn mực đạo đức nghề nghiệp kế toán, kiểm toán. Người làm đầu tư có CFA Institute Code of Ethics and Standards of Professional Conduct (học chi tiết ở ET-02).</p>
<p class="warn"><b>Bẫy:</b> standards of conduct đặt mức <b>tối thiểu</b>, không phải mức lý tưởng. Đạt đúng mức tối thiểu chưa chắc đã là hành vi tốt nhất trong mọi hoàn cảnh.</p>`,
    },
    {
      title: '4. Nghề nghiệp và cách xây dựng niềm tin',
      minutes: 15,
      html: `
<p>Một ${t('profession', 'nghề nghiệp (profession)')} là một nhóm người có kiến thức và kỹ năng chuyên môn, dùng chúng để <b>phục vụ người khác</b>, và đồng ý hành xử theo một code of ethics chung. Khác với một nghề thủ công hay một công việc kinh doanh đơn thuần, nghề nghiệp được xã hội trao niềm tin vì nó tự ràng buộc mình bằng chuẩn mực cao.</p>
<h4>Các đặc điểm giúp một nghề xây dựng niềm tin</h4>
<table class="plain"><thead><tr><th>Đặc điểm</th><th>Ý nghĩa với khách hàng</th></tr></thead><tbody>
<tr><td>Có code of ethics và standards of conduct, được thực thi</td><td>Biết người hành nghề bị ràng buộc bởi chuẩn mực chung, vi phạm sẽ bị xử lý</td></tr>
<tr><td>Tiêu chuẩn đầu vào cao (học vấn, kỳ thi, kinh nghiệm)</td><td>Người được công nhận có năng lực tối thiểu đã kiểm chứng</td></tr>
<tr><td>Yêu cầu cập nhật kiến thức liên tục (${t('ce', 'continuing education')})</td><td>Năng lực không bị lỗi thời</td></tr>
<tr><td>Đặt lợi ích khách hàng và xã hội lên trên lợi ích riêng</td><td>Được phục vụ vì lợi ích của mình, không phải của người tư vấn</td></tr>
<tr><td>Có tổ chức nghề nghiệp giám sát hành vi thành viên</td><td>Có nơi khiếu nại, có cơ chế kỷ luật</td></tr>
<tr><td>Khuyến khích tính đồng nghiệp, kèm cặp người mới (mentoring)</td><td>Văn hóa đạo đức được truyền lại qua các thế hệ</td></tr>
</tbody></table>
<p>${t('trust', 'Niềm tin (trust)')} được xây theo vòng lặp: chuẩn mực cao → thành viên hành xử tốt → khách hàng tin tưởng → nghề có uy tín, thu hút người giỏi → chuẩn mực được duy trì. Một vụ bê bối có thể làm gãy vòng lặp này cho <b>cả nghề</b>, không chỉ cho người vi phạm.</p>
<div class="example"><div class="ex-h">Ví dụ 4.1</div>
<p>Một hiệp hội nhà môi giới bất động sản có quy tắc đạo đức nhưng không bao giờ điều tra khiếu nại và không có hình thức kỷ luật nào. Hiệp hội này thiếu yếu tố nào để xây dựng niềm tin như một nghề nghiệp?</p>
<details><summary>Xem lời giải</summary><p>Thiếu <b>cơ chế giám sát và thực thi</b>. Một code of ethics chỉ có giá trị khi tổ chức nghề nghiệp theo dõi hành vi thành viên và xử lý vi phạm. CFA Institute làm việc này qua Professional Conduct Program (ET-02).</p></details></div>
<p class="tip"><b>CFA Institute như một tổ chức nghề nghiệp:</b> đặt tiêu chuẩn đầu vào (3 cấp thi, kinh nghiệm làm việc), có Code and Standards, yêu cầu thành viên ký Professional Conduct Statement hằng năm, khuyến khích continuing education, và có chế tài đến mức thu hồi charter.</p>`,
    },
    {
      title: '5. Vì sao ngành đầu tư cần chuẩn mực đạo đức cao',
      minutes: 15,
      html: `
<p>Mọi nghề đều cần đạo đức, nhưng ngành đầu tư có vài đặc điểm khiến yêu cầu này đặc biệt cao:</p>
<ul>
  <li><b>Khách hàng giao tiền và quyền quyết định</b>: người làm đầu tư thường kiểm soát tài sản của người khác. Cám dỗ dùng tài sản đó cho lợi ích riêng là có thật.</li>
  <li><b>Sản phẩm vô hình</b>: khách hàng mua lời tư vấn, một quy trình quản lý, một lời hứa. Họ không "sờ" được chất lượng.</li>
  <li>${t('asym', 'Bất cân xứng thông tin (information asymmetry)')}: người làm nghề hiểu sản phẩm, rủi ro, phí tốt hơn khách hàng rất nhiều. Khách hàng khó phát hiện khi bị đối xử không công bằng.</li>
  <li><b>Kết quả khó đánh giá</b>: lợi nhuận kém có thể do thị trường, không hẳn do người quản lý; lợi nhuận tốt có thể do may mắn hoặc do chấp nhận rủi ro quá mức. Khách hàng có khi nhiều năm sau mới biết mình bị thiệt.</li>
  <li><b>Tác động lan rộng</b>: hành vi của người làm đầu tư ảnh hưởng đến giá chứng khoán, cách vốn được phân bổ trong nền kinh tế, và niềm tin vào thị trường vốn.</li>
</ul>
<h4>Hành vi phi đạo đức gây hại cho ai?</h4>
<table class="plain"><thead><tr><th>Đối tượng</th><th>Thiệt hại</th></tr></thead><tbody>
<tr><td>Khách hàng</td><td>Mất tiền, trả phí quá cao, chịu rủi ro không phù hợp</td></tr>
<tr><td>Công ty</td><td>Mất uy tín, mất khách hàng, bị phạt, bị kiện</td></tr>
<tr><td>Ngành và nghề</td><td>Công chúng mất niềm tin vào mọi người làm nghề, quy định siết chặt hơn</td></tr>
<tr><td>Thị trường và xã hội</td><td>Nhà đầu tư rút lui, thanh khoản giảm, chi phí vốn tăng, vốn phân bổ kém hiệu quả</td></tr>
</tbody></table>
<div class="key">Khi nhà đầu tư tin rằng thị trường công bằng, họ sẵn sàng tham gia với mức lợi nhuận đòi hỏi thấp hơn. Điều đó giảm <b>chi phí vốn</b> cho doanh nghiệp và giúp vốn chảy vào nơi sử dụng hiệu quả nhất. Vì vậy đạo đức không chỉ là chuyện "tốt bụng", mà là điều kiện để thị trường vận hành hiệu quả.</div>
<div class="example"><div class="ex-h">Ví dụ 5.1</div>
<p>Sau một loạt vụ thao túng giá cổ phiếu bị phanh phui, nhiều nhà đầu tư cá nhân bán hết cổ phiếu và gửi tiết kiệm. Hệ quả nào là hợp lý nhất đối với các doanh nghiệp đang cần huy động vốn cổ phần?</p>
<details><summary>Xem lời giải</summary><p>Họ phải chấp nhận <b>chi phí vốn cao hơn</b> (định giá thấp hơn khi phát hành) vì nhà đầu tư đòi bù đắp cho rủi ro bị đối xử không công bằng. Một số dự án tốt có thể không được tài trợ. Hành vi của vài cá nhân gây chi phí cho cả nền kinh tế.</p></details></div>
<p class="warn"><b>Bẫy:</b> lợi ích của đạo đức không chỉ dành cho khách hàng. Đề thi thường hỏi "ai được lợi" và đáp án đúng bao gồm cả công ty, người hành nghề (uy tín lâu dài) và thị trường.</p>`,
    },
    {
      title: '6. Tính chuyên nghiệp trong quản lý đầu tư (professionalism)',
      minutes: 14,
      html: `
<p>${t('professionalism', 'Tính chuyên nghiệp (professionalism)')} trong quản lý đầu tư là sự kết hợp của <b>năng lực chuyên môn</b> và <b>hành vi đạo đức</b>, luôn hướng về lợi ích của khách hàng. Có giỏi mà không trung thực thì nguy hiểm; trung thực mà không đủ năng lực thì cũng gây hại cho khách hàng.</p>
<h4>Ba trụ cột</h4>
<ol>
  <li><b>Năng lực (competence)</b>: kiến thức, kỹ năng đủ cho công việc, và liên tục cập nhật. Thị trường, sản phẩm, công nghệ thay đổi nhanh; năng lực của năm nay có thể lỗi thời sau vài năm.</li>
  <li><b>Chính trực (integrity)</b>: trung thực, khách quan, giữ lời hứa, kể cả khi không ai nhìn thấy.</li>
  <li><b>Phục vụ khách hàng và thị trường</b>: đặt lợi ích khách hàng lên trước lợi ích của mình và của công ty; giữ gìn tính toàn vẹn của thị trường vốn.</li>
</ol>
<h4>Đặc thù của nghề đầu tư</h4>
<ul>
  <li>Đây là một nghề <b>tương đối trẻ</b> so với y khoa hay luật. Niềm tin của công chúng còn đang được xây dựng và dễ bị tổn thương bởi khủng hoảng, bê bối.</li>
  <li>Người làm đầu tư thường có <b>nhiều nghĩa vụ cùng lúc</b>: với khách hàng, với chủ lao động, với thị trường. Khi các nghĩa vụ này xung đột, chuẩn mực nghề nghiệp giúp xác định thứ tự ưu tiên (khách hàng trước, rồi đến công ty, cuối cùng mới đến bản thân).</li>
  <li>Người làm nghề không chỉ tuân thủ, mà còn nên <b>chủ động nâng cao chuẩn mực</b> của đồng nghiệp và của ngành: chia sẻ kiến thức, kèm cặp người mới, lên tiếng khi thấy sai.</li>
</ul>
<div class="example"><div class="ex-h">Ví dụ 6.1</div>
<p>Long là chuyên viên phân tích cổ phiếu ngân hàng, vừa được chuyển sang quản lý danh mục trái phiếu mà chưa từng làm mảng này. Sếp nói "cứ làm, rồi sẽ quen". Hành động nào thể hiện tính chuyên nghiệp nhất?</p>
<details><summary>Xem lời giải</summary><p>Long nên <b>chủ động bổ sung kiến thức</b> (đào tạo, tự học, nhờ đồng nghiệp có kinh nghiệm hướng dẫn) trước và trong khi nhận nhiệm vụ, và thận trọng trong những quyết định vượt quá năng lực hiện tại. Việc chấp nhận vai trò mới không sai; sai là làm mà không phát triển năng lực tương xứng. Đây chính là tinh thần của Standard I(E) Competence (ET-03).</p></details></div>`,
    },
    {
      title: '7. Thách thức đối với hành vi đạo đức',
      minutes: 15,
      html: `
<p>Hầu hết người vi phạm đạo đức không nghĩ mình là người xấu. Hiểu <b>vì sao người tốt vẫn làm điều sai</b> là bước đầu để tự phòng vệ. Curriculum nêu các thách thức chính:</p>
<h4>a) Tự tin thái quá (overconfidence)</h4>
<p>${t('overconf', 'Overconfidence bias')}: hầu hết mọi người tin rằng mình có đạo đức hơn mức trung bình. Hệ quả: "tôi là người tốt, nên quyết định của tôi chắc chắn là tốt", và họ bỏ qua bước tự kiểm tra. Người càng tự tin vào phẩm chất của mình càng dễ đánh giá thấp ảnh hưởng của hoàn cảnh lên hành vi.</p>
<h4>b) Ảnh hưởng của hoàn cảnh (situational influences)</h4>
<p>${t('situational', 'Situational influences')} là các yếu tố bên ngoài (môi trường, văn hóa, áp lực) định hình suy nghĩ và hành vi, thường mà người ta không nhận ra. Những ảnh hưởng mạnh nhất:</p>
<ul>
  <li><b>Tiền bạc và danh vọng</b>: thưởng theo doanh số, cơ hội thăng tiến.</li>
  <li><b>Lòng trung thành</b> với công ty, với sếp, với đồng nghiệp: "mọi người ở đây đều làm vậy", "không muốn làm khó sếp".</li>
  <li><b>Áp lực nhóm</b> và văn hóa doanh nghiệp: khi hành vi sai trở thành bình thường, người mới dễ chấp nhận theo.</li>
</ul>
<h4>c) Ưu tiên ngắn hạn</h4>
<p>Lợi ích của hành vi phi đạo đức thường đến ngay (thưởng quý này), còn hậu quả đến muộn và không chắc chắn (bị phát hiện, mất uy tín). Người ra quyết định có xu hướng phóng đại cái trước mắt và xem nhẹ cái lâu dài.</p>
<h4>d) Chỉ tập trung vào tuân thủ pháp lý</h4>
<p>Một văn hóa ${t('compliance', 'tuân thủ (compliance)')} mạnh là tốt, nhưng nếu nhân viên chỉ hỏi "việc này có hợp pháp không?" thì họ ngừng hỏi "việc này có đúng không?". Quy định không thể bao quát mọi tình huống, và ranh giới pháp lý không phải ranh giới đạo đức (phần 8).</p>
<div class="example"><div class="ex-h">Ví dụ 7.1</div>
<p>Trang mới vào phòng môi giới. Cô thấy các đồng nghiệp lâu năm thường khuyên khách hàng giao dịch liên tục để tăng phí, dù không cần thiết. Trưởng phòng khen những người có doanh số phí cao nhất. Sau vài tháng Trang cũng làm theo. Yếu tố nào giải thích tốt nhất hành vi của Trang?</p>
<details><summary>Xem lời giải</summary><p><b>Situational influences</b>: áp lực nhóm, văn hóa của phòng, và hệ thống thưởng gắn với phí. Không phải Trang tự tin thái quá vào đạo đức của mình; cô bị hoàn cảnh dẫn dắt.</p></details></div>
<p class="warn"><b>Bẫy:</b> đừng nhầm overconfidence (yếu tố bên trong, đánh giá quá cao phẩm chất của chính mình) với situational influences (yếu tố bên ngoài). Câu hỏi có mô tả "thưởng", "sếp", "đồng nghiệp", "mọi người đều làm" thường là situational influences.</p>`,
    },
    {
      title: '8. Chuẩn mực đạo đức và chuẩn mực pháp lý',
      minutes: 13,
      html: `
<p>${t('legal', 'Chuẩn mực pháp lý (legal standards)')} là luật và quy định do nhà nước, cơ quan quản lý ban hành, có chế tài bắt buộc. Chuẩn mực đạo đức là kỳ vọng của xã hội và của nghề. Hai vùng này <b>chồng lên nhau nhưng không trùng nhau</b>:</p>
<table class="plain"><thead><tr><th></th><th>Hợp pháp</th><th>Bất hợp pháp</th></tr></thead><tbody>
<tr><td><b>Có đạo đức</b></td><td>Phần lớn hành vi hằng ngày: báo cáo trung thực, tư vấn phù hợp</td><td>Ví dụ: tố giác sai phạm khi luật nơi đó chưa bảo vệ hoặc còn cấm tiết lộ; bất tuân dân sự ôn hòa</td></tr>
<tr><td><b>Phi đạo đức</b></td><td>Ví dụ: giới thiệu sản phẩm phí cao vì hoa hồng; lợi dụng kẽ hở luật</td><td>Gian lận, giao dịch nội gián, thao túng giá</td></tr>
</tbody></table>
<h4>Vì sao luật không đủ để dẫn dắt hành vi?</h4>
<ul>
  <li><b>Luật đi sau thực tế</b>: thường được ban hành sau khi đã có thiệt hại; sản phẩm và hành vi mới xuất hiện trước khi có quy định.</li>
  <li><b>Luật không bao quát hết</b>: không thể quy định mọi tình huống; khoảng trống được lấp bằng phán đoán đạo đức.</li>
  <li><b>Luật khác nhau giữa các nước</b>: hành vi hợp pháp ở nơi này có thể bị cấm ở nơi khác.</li>
  <li><b>Luật có thể bị ảnh hưởng</b> bởi nhóm lợi ích, và có lúc chính luật dẫn đến kết quả bất công.</li>
  <li><b>Luật đặt mức tối thiểu</b>: tránh bị phạt khác với hành xử tốt.</li>
</ul>
<p>${t('whistle', 'Tố giác (whistleblowing)')} là ví dụ kinh điển: người tiết lộ sai phạm của công ty có thể vi phạm nghĩa vụ bảo mật theo hợp đồng hoặc luật, nhưng hành động vì lợi ích của công chúng. Hành vi ấy có thể có đạo đức dù về mặt pháp lý gây tranh cãi.</p>
<div class="example"><div class="ex-h">Ví dụ 8.1</div>
<p>Một quỹ đầu tư tính phí quản lý cao gấp ba mức trung bình ngành và chỉ ghi điều này ở phụ lục cuối bản cáo bạch bằng cỡ chữ rất nhỏ. Luật chỉ yêu cầu "có công bố phí". Hành vi này thuộc ô nào?</p>
<details><summary>Xem lời giải</summary><p><b>Hợp pháp nhưng phi đạo đức.</b> Quỹ đã công bố theo luật, nhưng cách công bố nhằm làm nhà đầu tư không chú ý. Chuẩn mực của CFA Institute (2024) đòi hỏi công bố phải nổi bật (prominent) và bằng ngôn ngữ dễ hiểu (plain language), tức là cao hơn mức luật tối thiểu trong ví dụ này.</p></details></div>
<p class="warn"><b>Bẫy:</b> câu "hành vi hợp pháp thì luôn có đạo đức" và "hành vi bất hợp pháp thì luôn phi đạo đức" đều <b>sai</b>. Chuẩn mực đạo đức thường cao hơn, nhưng không phải lúc nào cũng nằm gọn bên trong luật.</p>`,
    },
    {
      title: '9. Khung ra quyết định đạo đức (ethical decision-making framework)',
      minutes: 12,
      html: `
<p>Chuẩn mực không thể liệt kê mọi tình huống. Vì vậy CFA Institute đưa ra một ${t('framework', 'khung ra quyết định đạo đức (ethical decision-making framework)')} để người hành nghề tự xử lý những tình huống chưa có tiền lệ. Khung gồm bốn bước: <b>Identify - Consider - Act - Reflect</b>.</p>
<table class="plain"><thead><tr><th>Bước</th><th>Câu hỏi cần trả lời</th></tr></thead><tbody>
<tr><td><b>1. Identify</b> (xác định)</td><td>Sự thật liên quan là gì? Ai là các bên liên quan và mình có nghĩa vụ gì với từng bên? Nguyên tắc đạo đức nào áp dụng? Có ${t('conflict', 'xung đột lợi ích (conflict of interest)')} nào không?</td></tr>
<tr><td><b>2. Consider</b> (cân nhắc)</td><td>Có situational influences nào đang tác động lên mình? Cần tìm thêm hướng dẫn ở đâu (Code and Standards, chính sách công ty, compliance, đồng nghiệp đáng tin, luật sư)? Có những phương án hành động nào?</td></tr>
<tr><td><b>3. Act</b> (hành động)</td><td>Chọn phương án tốt nhất và thực hiện. Nếu chưa rõ, có thể quay lại hai bước trước.</td></tr>
<tr><td><b>4. Reflect</b> (rút kinh nghiệm)</td><td>Kết quả có như dự kiến không? Vì sao? Lần sau có nên làm khác?</td></tr>
</tbody></table>
<p>Khung này là <b>vòng lặp</b>, không phải đường thẳng: bước Reflect giúp người hành nghề ra quyết định tốt hơn ở những tình huống sau. Nó cũng là liều thuốc chống overconfidence, vì buộc mình chậm lại và nhìn tình huống từ góc độ của các bên liên quan.</p>
<div class="example"><div class="ex-h">Ví dụ 9.1</div>
<p>Sơn là chuyên viên phân tích. Một công ty niêm yết mời anh tham dự hội nghị nhà đầu tư ở Đà Nẵng, bao trọn vé máy bay hạng thương gia, ba đêm khách sạn năm sao và một tour golf. Áp dụng khung ra quyết định.</p>
<details><summary>Xem lời giải</summary>
<p><b>Identify:</b> sự thật là công ty đang được Sơn phân tích muốn trả chi phí xa hoa; bên liên quan gồm khách hàng đọc báo cáo, công ty của Sơn, công ty niêm yết; nguyên tắc là khách quan và độc lập; có xung đột lợi ích tiềm ẩn.</p>
<p><b>Consider:</b> ảnh hưởng tình huống là quan hệ với công ty niêm yết và cảm giác "ai cũng nhận". Hướng dẫn: chính sách quà tặng của công ty, bộ phận compliance, Standard I(B). Phương án: nhận tất cả; từ chối tất cả; tham dự nhưng công ty Sơn tự trả vé và khách sạn, bỏ tour golf.</p>
<p><b>Act:</b> phương án thứ ba thường là phù hợp nhất: vẫn thu thập được thông tin nhưng giữ được độc lập.</p>
<p><b>Reflect:</b> sau chuyến đi, Sơn xem lại báo cáo của mình có bị ảnh hưởng không, và đề xuất công ty đưa quy định rõ về chi phí đi lại.</p></details></div>
<p class="warn"><b>Bẫy:</b> thứ tự là Identify → Consider → Act → Reflect. Tìm kiếm hướng dẫn và liệt kê phương án thuộc bước <b>Consider</b>, không thuộc Identify; xác định xung đột lợi ích thuộc bước <b>Identify</b>.</p>`,
    },
    {
      title: '10. Tóm tắt và bẫy thường gặp',
      minutes: 5,
      html: `
<table class="plain"><thead><tr><th>Chủ đề</th><th>Điều cần nhớ</th><th>Bẫy thường gặp</th></tr></thead><tbody>
<tr><td>Ethics</td><td>Niềm tin chung về hành vi tốt, xấu; cân bằng lợi ích bản thân với tác động lên người khác</td><td>Nhầm với ý kiến cá nhân hoặc với luật</td></tr>
<tr><td>Code of ethics và standards of conduct</td><td>Code: nguyên tắc; standards: quy tắc cụ thể, mức tối thiểu</td><td>Cho rằng standards là mức lý tưởng</td></tr>
<tr><td>Profession</td><td>Kiến thức chuyên môn, phục vụ người khác, code of ethics được thực thi, chuẩn đầu vào, học liên tục</td><td>Quên yếu tố giám sát và thực thi</td></tr>
<tr><td>Vì sao đầu tư cần đạo đức cao</td><td>Khách hàng giao tiền, sản phẩm vô hình, bất cân xứng thông tin, tác động lên thị trường</td><td>Nghĩ chỉ khách hàng được lợi; thực ra cả công ty, nghề, thị trường</td></tr>
<tr><td>Professionalism</td><td>Năng lực + chính trực + phục vụ khách hàng</td><td>Chỉ chú ý năng lực</td></tr>
<tr><td>Thách thức</td><td>Overconfidence (bên trong), situational influences (bên ngoài), ngắn hạn, chỉ lo hợp pháp</td><td>Đánh tráo hai loại đầu</td></tr>
<tr><td>Ethical và legal</td><td>Chồng lên nhau nhưng không trùng; luật đi sau, không bao quát, khác nhau theo nước</td><td>"Hợp pháp là có đạo đức"</td></tr>
<tr><td>Framework</td><td>Identify → Consider → Act → Reflect</td><td>Đặt sai hoạt động vào bước</td></tr>
</tbody></table>
<p class="tip">Module tiếp theo ET-02 giới thiệu cụ thể CFA Institute Code of Ethics, 7 Standards và cách CFA Institute thực thi chúng.</p>`,
    },
  ];

  const glossary = {
    ethics: ['Ethics', 'Đạo đức', 'Tập hợp niềm tin chung về hành vi nào là tốt, chấp nhận được và hành vi nào là xấu, không chấp nhận được.'],
    principles: ['Ethical principles', 'Nguyên tắc đạo đức', 'Niềm tin nền tảng như trung thực, công bằng, tôn trọng; có thể bắt nguồn từ tôn giáo, văn hóa, triết học.'],
    conduct: ['Ethical conduct', 'Hành vi đạo đức', 'Hành vi tuân theo nguyên tắc đạo đức và phù hợp với kỳ vọng đạo đức của xã hội.'],
    stakeholder: ['Stakeholders', 'Bên liên quan', 'Những người hoặc tổ chức chịu tác động từ một quyết định: khách hàng, đồng nghiệp, công ty, thị trường, xã hội.'],
    code: ['Code of ethics', 'Bộ quy tắc đạo đức', 'Tập hợp nguyên tắc đạo đức được viết ra, mô tả hành vi được xem là chấp nhận được.'],
    soc: ['Standards of conduct', 'Chuẩn mực hành nghề', 'Quy tắc cụ thể đặt ra mức hành vi tối thiểu chấp nhận được, giúp diễn giải và áp dụng code of ethics.'],
    profession: ['Profession', 'Nghề nghiệp', 'Nhóm người có kiến thức, kỹ năng chuyên môn, phục vụ người khác và cam kết hành xử theo code of ethics chung.'],
    ce: ['Continuing education', 'Đào tạo liên tục', 'Việc tiếp tục học, cập nhật kiến thức sau khi đã được công nhận hành nghề.'],
    trust: ['Trust', 'Niềm tin', 'Sự sẵn lòng của khách hàng và công chúng giao phó lợi ích của mình cho người hành nghề.'],
    asym: ['Information asymmetry', 'Bất cân xứng thông tin', 'Một bên (người làm nghề) có nhiều thông tin hơn bên kia (khách hàng) về sản phẩm, rủi ro, phí.'],
    professionalism: ['Professionalism', 'Tính chuyên nghiệp', 'Kết hợp năng lực chuyên môn và hành vi đạo đức, hướng về lợi ích của khách hàng và thị trường.'],
    overconf: ['Overconfidence bias', 'Thiên lệch tự tin thái quá', 'Xu hướng tin rằng mình có đạo đức hơn người khác, dẫn đến bỏ qua việc tự kiểm tra quyết định.'],
    situational: ['Situational influences', 'Ảnh hưởng của hoàn cảnh', 'Yếu tố bên ngoài như tiền bạc, danh vọng, lòng trung thành, áp lực nhóm định hình hành vi mà người ta thường không nhận ra.'],
    compliance: ['Compliance', 'Tuân thủ', 'Việc làm đúng luật, quy định và chính sách nội bộ; bộ phận compliance giám sát việc này trong công ty.'],
    legal: ['Legal standards', 'Chuẩn mực pháp lý', 'Luật và quy định do nhà nước, cơ quan quản lý ban hành, có chế tài bắt buộc.'],
    whistle: ['Whistleblowing', 'Tố giác', 'Tiết lộ hành vi sai phạm của tổ chức cho cấp có thẩm quyền hoặc công chúng nhằm bảo vệ lợi ích chung.'],
    framework: ['Ethical decision-making framework', 'Khung ra quyết định đạo đức', 'Quy trình bốn bước Identify, Consider, Act, Reflect để xử lý tình huống đạo đức.'],
    conflict: ['Conflict of interest', 'Xung đột lợi ích', 'Tình huống có thể làm suy giảm sự độc lập, khách quan hoặc khiến người khác nghi ngờ quyết định có bị thiên lệch.'],
  };

  const practice = [
    { q: 'Định nghĩa nào mô tả đúng nhất khái niệm ethics theo curriculum CFA?', choices: ['Tập hợp niềm tin chung về hành vi nào là tốt, chấp nhận được và hành vi nào là xấu, không chấp nhận được', 'Toàn bộ luật và quy định mà một người hành nghề phải tuân thủ', 'Những giá trị cá nhân mà mỗi người tự chọn cho mình'], answer: 0, explain: 'Ethics là niềm tin được chia sẻ trong cộng đồng về hành vi tốt và xấu. Lựa chọn "toàn bộ luật và quy định" nhầm ethics với chuẩn mực pháp lý. Lựa chọn "giá trị cá nhân" bỏ mất yếu tố "chung", kỳ vọng của xã hội.' },
    { q: 'Một hiệp hội nghề nghiệp ban hành văn bản nêu các giá trị cốt lõi như trung thực, khách quan, và một văn bản khác liệt kê các hành vi tối thiểu mà hội viên phải đáp ứng. Văn bản thứ hai được gọi là:', choices: ['Code of ethics', 'Standards of conduct', 'Ethical principles'], answer: 1, explain: 'Standards of conduct là các quy tắc cụ thể đặt mức hành vi tối thiểu. Code of ethics là văn bản nêu nguyên tắc chung, tức văn bản thứ nhất. Ethical principles là các niềm tin nền tảng, không phải văn bản quy định mức tối thiểu.' },
    { q: 'Yếu tố nào KHÔNG phải là cách một nghề nghiệp xây dựng niềm tin với công chúng?', choices: ['Đặt tiêu chuẩn đầu vào cao và yêu cầu cập nhật kiến thức liên tục', 'Có tổ chức giám sát và kỷ luật hội viên vi phạm', 'Bảo đảm hội viên luôn đạt lợi nhuận cao hơn thị trường cho khách hàng'], answer: 2, explain: 'Không nghề nào bảo đảm được kết quả; lời hứa đó còn có thể là misrepresentation. Niềm tin đến từ chuẩn đầu vào, học liên tục, cơ chế giám sát và thực thi, code of ethics và việc đặt lợi ích khách hàng lên trước.' },
    { q: 'Lý do nào giải thích tốt nhất vì sao ngành quản lý đầu tư cần chuẩn mực đạo đức đặc biệt cao?', choices: ['Khách hàng giao tài sản cho người làm nghề và khó đánh giá chất lượng dịch vụ do bất cân xứng thông tin', 'Người làm đầu tư có thu nhập cao hơn hầu hết các nghề khác', 'Luật chứng khoán ở hầu hết các nước đều lỏng lẻo'], answer: 0, explain: 'Sản phẩm vô hình, khách hàng giao tiền và quyền quyết định, lại biết ít hơn người làm nghề, nên họ phải dựa vào niềm tin. Lựa chọn về thu nhập cao không liên quan đến nhu cầu đạo đức. Lựa chọn "luật lỏng lẻo" là khái quát sai; kể cả khi luật chặt, đạo đức vẫn cần vì luật không bao quát mọi tình huống.' },
    { q: 'Một loạt bê bối gian lận ở các công ty quản lý quỹ khiến nhà đầu tư rút vốn khỏi thị trường cổ phiếu. Hệ quả nào là hợp lý nhất?', choices: ['Chỉ những công ty vi phạm bị ảnh hưởng, các công ty khác không bị tác động', 'Thanh khoản tăng vì nhà đầu tư giao dịch nhiều hơn để rút vốn', 'Chi phí vốn của doanh nghiệp tăng và vốn được phân bổ kém hiệu quả hơn'], answer: 2, explain: 'Khi niềm tin giảm, nhà đầu tư đòi lợi nhuận cao hơn hoặc rời thị trường, làm chi phí vốn tăng và vốn chảy kém hiệu quả. Lựa chọn "chỉ công ty vi phạm bị ảnh hưởng" sai vì mất niềm tin lan ra cả ngành. Lựa chọn "thanh khoản tăng" sai vì nhà đầu tư rút lui làm thanh khoản giảm về lâu dài.' },
    { q: 'Hà là quản lý danh mục được công ty thưởng theo tài sản quản lý. Sếp gợi ý cô giữ một khách hàng lớn bằng cách nói giảm rủi ro của chiến lược. Cả phòng đều đã từng "làm cho đẹp" báo cáo như vậy. Thách thức đạo đức nổi bật nhất trong tình huống này là:', choices: ['Overconfidence bias', 'Situational influences', 'Chỉ tập trung vào tuân thủ pháp lý'], answer: 1, explain: 'Tiền thưởng, áp lực từ sếp và văn hóa của phòng là các yếu tố bên ngoài, tức situational influences. Overconfidence là đánh giá quá cao phẩm chất đạo đức của chính mình. Lựa chọn "chỉ tập trung vào tuân thủ pháp lý" không được mô tả: tình huống không nói Hà chỉ hỏi "có hợp pháp không".' },
    { q: 'Minh tin chắc mình là người trung thực nên không bao giờ hỏi ý kiến compliance trước khi nhận quà từ đối tác, vì "người như tôi không thể bị một món quà mua chuộc". Minh đang thể hiện:', choices: ['Overconfidence bias', 'Situational influences', 'Ưu tiên ngắn hạn'], answer: 0, explain: 'Tin rằng phẩm chất của mình đủ để miễn nhiễm với ảnh hưởng, nên bỏ qua bước kiểm tra, là biểu hiện của overconfidence. Situational influences là yếu tố bên ngoài; ưu tiên ngắn hạn là xem nhẹ hậu quả lâu dài, không phải trọng tâm ở đây.' },
    { q: 'Nhận định nào về quan hệ giữa chuẩn mực đạo đức và chuẩn mực pháp lý là ĐÚNG?', choices: ['Mọi hành vi hợp pháp đều có đạo đức, vì luật phản ánh kỳ vọng của xã hội', 'Mọi hành vi bất hợp pháp đều phi đạo đức', 'Một hành vi có thể hợp pháp nhưng phi đạo đức, vì luật thường đi sau thực tế và không bao quát hết mọi tình huống'], answer: 2, explain: 'Hai vùng chồng lên nhau nhưng không trùng nhau. Nhận định "mọi hành vi hợp pháp đều có đạo đức" sai: lợi dụng kẽ hở luật vẫn có thể phi đạo đức. Nhận định "mọi hành vi bất hợp pháp đều phi đạo đức" sai: có trường hợp hành vi bất hợp pháp nhưng có đạo đức, ví dụ một số trường hợp tố giác hay bất tuân dân sự ôn hòa.' },
    { q: 'Trong khung ra quyết định đạo đức của CFA Institute, việc liệt kê các phương án hành động có thể chọn và tìm kiếm hướng dẫn từ bộ phận compliance thuộc bước:', choices: ['Identify', 'Consider', 'Act'], answer: 1, explain: 'Bước Consider bao gồm nhận diện situational influences, tìm thêm hướng dẫn và xem xét các phương án. Identify là xác định sự thật, bên liên quan, nghĩa vụ, nguyên tắc và xung đột lợi ích. Act là chọn và thực hiện phương án.' },
    { q: 'Sau khi từ chối một chuyến du lịch do công ty niêm yết tài trợ, Quân xem lại quyết định của mình có hợp lý không và đề xuất công ty bổ sung quy định về quà tặng. Quân đang ở bước nào của khung ra quyết định?', choices: ['Reflect', 'Consider', 'Identify'], answer: 0, explain: 'Đánh giá lại kết quả sau khi hành động và rút kinh nghiệm cho lần sau là bước Reflect, bước cuối của vòng lặp. Consider và Identify diễn ra trước khi hành động.' },
    { q: "Khánh là môi giới, được thưởng theo số lệnh. Một khách hàng lớn tuổi hỏi có nên chuyển toàn bộ tiền tiết kiệm sang một sản phẩm phí cao không. Khánh suy nghĩ kỹ về việc sản phẩm sẽ ảnh hưởng thế nào tới khách hàng trước khi trả lời. Theo curriculum, điều làm nên hành vi đạo đức ở đây là:", choices: ["Khánh tuân thủ đúng quy trình bán hàng của công ty", "Khánh cân nhắc nghiêm túc tác động của quyết định lên khách hàng, không chỉ lợi ích của bản thân", "Khánh chỉ tư vấn sản phẩm có hoa hồng cao nhất vì đó là quyền lợi chính đáng"], answer: 1, explain: "Hành vi đạo đức là cân bằng lợi ích bản thân với tác động lên các bên liên quan. Lựa chọn \"tuân thủ đúng quy trình bán hàng\" chỉ nói về tuân thủ, quy trình có thể vẫn đặt lợi ích người bán lên trước. Lựa chọn \"chỉ tư vấn sản phẩm hoa hồng cao nhất\" đặt lợi ích riêng lên trên khách hàng." },
    { q: "Phát biểu nào phân biệt đúng nhất giữa nguyên tắc đạo đức (ethical principles) và hành vi đạo đức (ethical conduct)?", choices: ["Nguyên tắc đạo đức do luật quy định, còn hành vi đạo đức do mỗi người tự chọn", "Nguyên tắc đạo đức chỉ áp dụng trong công việc, còn hành vi đạo đức áp dụng trong đời sống cá nhân", "Nguyên tắc đạo đức là các niềm tin nền tảng như trung thực, công bằng; hành vi đạo đức là hành động tuân theo các nguyên tắc đó và phù hợp kỳ vọng của xã hội"], answer: 2, explain: "Nguyên tắc là niềm tin nền tảng (có thể từ tôn giáo, văn hóa, triết học); hành vi là việc làm theo các nguyên tắc ấy. Lựa chọn \"nguyên tắc do luật quy định\" nhầm đạo đức với pháp luật. Lựa chọn \"chỉ áp dụng trong công việc\" tạo ra một ranh giới không có trong định nghĩa." },
    { q: "Một hiệp hội kiểm toán viên công bố code of ethics trên trang web và yêu cầu hội viên cam kết tuân thủ. Lợi ích trực tiếp nhất của việc này đối với công chúng là:", choices: ["Công chúng biết được hội viên cam kết dùng kiến thức chuyên môn để phục vụ khách hàng một cách trung thực và có thể kỳ vọng gì ở họ", "Hội viên không còn phải tuân thủ luật kiểm toán của nhà nước", "Công chúng được bảo đảm rằng không hội viên nào mắc sai sót chuyên môn"], answer: 0, explain: "Code of ethics truyền thông với công chúng về giá trị và cam kết của nghề, nhờ đó người ngoài biết có thể kỳ vọng điều gì. Code không thay thế luật, nên lựa chọn \"không còn phải tuân thủ luật\" sai. Code cũng không bảo đảm kết quả hay loại bỏ sai sót, nên lựa chọn \"bảo đảm không ai mắc sai sót\" sai." },
    { q: "Vy lập luận: \"Tôi đã làm đúng mọi điều trong standards of conduct của hiệp hội, nên hành vi của tôi chắc chắn là tốt nhất có thể trong mọi tình huống.\" Nhận xét nào chính xác nhất?", choices: ["Vy đúng, vì standards of conduct mô tả mức hành vi lý tưởng của nghề", "Vy đúng, vì code of ethics và standards of conduct là cùng một văn bản", "Vy sai, vì standards of conduct đặt mức hành vi tối thiểu chấp nhận được; đạt mức tối thiểu chưa chắc là hành vi tốt nhất"], answer: 2, explain: "Standards of conduct là quy tắc cụ thể đặt mức tối thiểu, không phải mức lý tưởng. Lựa chọn \"mô tả mức hành vi lý tưởng\" là đúng cái bẫy này. Lựa chọn \"là cùng một văn bản\" sai vì code of ethics nêu nguyên tắc chung, còn standards of conduct là quy tắc cụ thể giúp áp dụng code." },
    { q: "Đặc điểm nào phân biệt rõ nhất một nghề nghiệp (profession) với một công việc kinh doanh thông thường?", choices: ["Người làm nghề có thu nhập cao và ổn định", "Người làm nghề có kiến thức chuyên môn, dùng nó để phục vụ người khác và cùng cam kết tuân theo một code of ethics được thực thi", "Người làm nghề được nhà nước cấp phép kinh doanh"], answer: 1, explain: "Một profession kết hợp kiến thức chuyên môn, mục tiêu phục vụ người khác và cam kết đạo đức chung có cơ chế thực thi. Thu nhập cao không phải tiêu chí định nghĩa nghề nghiệp. Giấy phép kinh doanh có ở mọi doanh nghiệp, kể cả những công việc không phải nghề nghiệp theo nghĩa này." },
    { q: "Một hiệp hội nghề nghiệp yêu cầu hội viên hoàn thành số giờ đào tạo liên tục (continuing education) mỗi năm. Yêu cầu này giúp xây dựng niềm tin của công chúng chủ yếu vì:", choices: ["Nó giúp năng lực của người hành nghề không bị lỗi thời khi thị trường và sản phẩm thay đổi", "Nó thay thế cho tiêu chuẩn đầu vào khi tuyển hội viên mới", "Nó bảo đảm hội viên không bao giờ vi phạm chuẩn mực đạo đức"], answer: 0, explain: "Continuing education giữ cho năng lực được cập nhật, một trong các đặc điểm giúp nghề tạo niềm tin. Nó bổ sung, không thay thế, tiêu chuẩn đầu vào. Học thêm cũng không bảo đảm hành vi đạo đức; việc đó cần code of ethics được giám sát và thực thi." },
    { q: "Danh mục của bà Hương đạt lợi nhuận cao trong ba năm. Bà không biết rằng người quản lý đã đạt kết quả đó bằng cách tăng mạnh rủi ro vượt quá mức bà chấp nhận. Tình huống này minh họa rõ nhất lý do nào khiến ngành đầu tư cần chuẩn mực đạo đức cao?", choices: ["Người làm đầu tư có thu nhập cao hơn các nghề khác", "Khách hàng luôn hiểu rõ sản phẩm đầu tư hơn người quản lý", "Kết quả đầu tư khó đánh giá và có bất cân xứng thông tin, nên khách hàng có thể nhiều năm sau mới biết mình chịu thiệt"], answer: 2, explain: "Lợi nhuận tốt có thể đến từ rủi ro quá mức hoặc may mắn; khách hàng khó nhận ra vì người làm nghề hiểu sản phẩm và rủi ro hơn họ. Thu nhập cao không phải lý do được curriculum nêu. Lựa chọn \"khách hàng hiểu rõ hơn người quản lý\" ngược với bất cân xứng thông tin." },
    { q: "Công ty quản lý quỹ X duy trì văn hóa đạo đức mạnh trong nhiều năm. Nhận định nào mô tả đúng nhất những bên được hưởng lợi từ hành vi đạo đức đó?", choices: ["Chỉ khách hàng của công ty X, vì họ là người giao tiền", "Khách hàng, công ty X và nhân viên (uy tín lâu dài), nghề đầu tư và thị trường nói chung", "Chỉ cơ quan quản lý, vì họ ít phải xử phạt hơn"], answer: 1, explain: "Lợi ích của đạo đức lan rộng: khách hàng được phục vụ đúng, công ty và người hành nghề có uy tín lâu dài, nghề được công chúng tin và thị trường vận hành hiệu quả hơn. Hai lựa chọn \"chỉ khách hàng\" và \"chỉ cơ quan quản lý\" bỏ sót phần lớn các bên được lợi." },
    { q: "Theo curriculum, khi nhà đầu tư tin rằng thị trường vốn công bằng và người hành nghề có đạo đức, hệ quả hợp lý nhất là:", choices: ["Nhà đầu tư sẵn sàng tham gia với mức lợi nhuận đòi hỏi thấp hơn, giúp giảm chi phí vốn và phân bổ vốn hiệu quả hơn", "Nhà đầu tư đòi hỏi lợi nhuận cao hơn vì thị trường trở nên cạnh tranh hơn", "Cơ quan quản lý có thể bãi bỏ phần lớn luật chứng khoán"], answer: 0, explain: "Niềm tin làm giảm phần bù rủi ro mà nhà đầu tư đòi hỏi, nên doanh nghiệp huy động vốn rẻ hơn và vốn chảy tới nơi hiệu quả. Lựa chọn \"đòi hỏi lợi nhuận cao hơn\" đi ngược chiều. Lựa chọn \"bãi bỏ phần lớn luật\" sai vì đạo đức và luật bổ sung cho nhau, không thay thế nhau." },
    { q: "Bình là chuyên viên phân tích rất giỏi mô hình định giá nhưng thường điều chỉnh giả định để kết quả khớp với quan điểm của sếp. Theo khái niệm tính chuyên nghiệp (professionalism) trong quản lý đầu tư, Bình còn thiếu:", choices: ["Năng lực chuyên môn, vì mô hình của anh chưa đủ phức tạp", "Kinh nghiệm, vì anh chưa làm đủ lâu trong ngành", "Chính trực, vì tính chuyên nghiệp đòi hỏi kết hợp năng lực với trung thực và khách quan"], answer: 2, explain: "Professionalism gồm năng lực, chính trực và phục vụ khách hàng, thị trường. Bình có năng lực nhưng thiếu khách quan và trung thực. Lựa chọn \"thiếu năng lực chuyên môn\" sai vì tình huống nói anh rất giỏi mô hình. Lựa chọn \"thiếu kinh nghiệm\" không phải vấn đề được mô tả." },
    { q: "Quản lý danh mục Đức nhận thấy một giao dịch có lợi cho công ty nơi anh làm việc nhưng gây bất lợi cho khách hàng, trong khi anh cũng có một khoản thưởng cá nhân gắn với giao dịch này. Theo thứ tự ưu tiên của chuẩn mực nghề nghiệp, Đức nên đặt lợi ích theo thứ tự:", choices: ["Công ty, khách hàng, bản thân", "Khách hàng, công ty, bản thân", "Khách hàng, bản thân, công ty"], answer: 1, explain: "Khi các nghĩa vụ xung đột, khách hàng đứng trước, rồi đến chủ lao động, cuối cùng mới đến bản thân. Thứ tự \"công ty, khách hàng, bản thân\" đặt chủ lao động trên khách hàng. Thứ tự \"khách hàng, bản thân, công ty\" đặt lợi ích riêng lên trên chủ lao động." },
    { q: "Hành động nào thể hiện rõ nhất khía cạnh \"nâng cao chuẩn mực của đồng nghiệp và của ngành\" trong tính chuyên nghiệp?", choices: ["Kèm cặp nhân viên mới về cách xử lý xung đột lợi ích và lên tiếng khi thấy hành vi sai", "Giữ kín phương pháp phân tích của mình để duy trì lợi thế cạnh tranh với đồng nghiệp", "Chỉ tập trung hoàn thành chỉ tiêu cá nhân, không can thiệp vào công việc của người khác"], answer: 0, explain: "Người làm nghề không chỉ tự tuân thủ mà còn chủ động chia sẻ kiến thức, kèm cặp người mới và lên tiếng khi thấy sai. Giữ kín phương pháp để cạnh tranh với đồng nghiệp không góp phần nâng chuẩn mực của ngành. Chỉ lo chỉ tiêu cá nhân bỏ qua vai trò đối với nghề." },
    { q: "Cuối quý, Long có thể đạt chỉ tiêu thưởng nếu thuyết phục khách hàng mua một sản phẩm chưa thật phù hợp. Anh nghĩ: \"Thưởng thì nhận ngay, còn khách hàng có phàn nàn thì cũng phải vài năm nữa.\" Thách thức đạo đức nào thể hiện rõ nhất trong suy nghĩ của Long?", choices: ["Overconfidence bias", "Chỉ tập trung vào tuân thủ pháp lý", "Ưu tiên lợi ích ngắn hạn, xem nhẹ hậu quả dài hạn và không chắc chắn"], answer: 2, explain: "Lợi ích trước mắt (thưởng quý này) được phóng đại, còn hậu quả đến muộn và không chắc chắn bị xem nhẹ: đó là ưu tiên ngắn hạn. Overconfidence là tin mình có đạo đức hơn người khác, không phải điều Long nghĩ. Long không hề viện dẫn tính hợp pháp, nên \"chỉ tập trung vào tuân thủ pháp lý\" không phù hợp." },
    { q: "Tại công ty Z, câu hỏi duy nhất nhân viên đặt ra trước mỗi quyết định là \"Việc này có trái luật hay quy định nội bộ không?\". Theo curriculum, rủi ro lớn nhất của văn hóa này là:", choices: ["Nhân viên sẽ vi phạm pháp luật thường xuyên hơn", "Nhân viên ngừng hỏi \"việc này có đúng không\" và bỏ qua những hành vi phi đạo đức mà luật chưa cấm", "Bộ phận compliance trở nên không cần thiết"], answer: 1, explain: "Chỉ tập trung vào tuân thủ khiến người ta coi ranh giới pháp lý là ranh giới đạo đức, trong khi luật không bao quát mọi tình huống. Văn hóa tuân thủ không làm vi phạm pháp luật tăng lên. Compliance vẫn cần thiết; vấn đề là nó không đủ." },
    { q: "Một công ty muốn giảm tác động của overconfidence bias lên quyết định đạo đức của nhân viên. Biện pháp nào phù hợp nhất?", choices: ["Yêu cầu nhân viên dùng khung ra quyết định có cấu trúc, xem xét tình huống từ góc nhìn các bên liên quan và tham khảo compliance trước khi hành động", "Tuyển những người tự đánh giá mình có đạo đức cao nhất", "Tăng thưởng theo doanh số để nhân viên có động lực hơn"], answer: 0, explain: "Khung ra quyết định buộc người ta chậm lại, tự kiểm tra và nhìn từ góc độ người khác, chống lại xu hướng tin rằng mình chắc chắn đúng. Tuyển người tự đánh giá cao đạo đức của mình có thể làm overconfidence nặng hơn. Tăng thưởng theo doanh số tạo thêm situational influences." },
    { q: "Nhân viên kế toán Thảo phát hiện công ty che giấu khoản lỗ lớn khỏi nhà đầu tư. Luật nước cô chưa bảo vệ người tố giác và hợp đồng lao động cấm tiết lộ thông tin nội bộ. Cô vẫn báo cho cơ quan quản lý. Theo phân loại đạo đức và pháp lý, hành vi của Thảo nhiều khả năng thuộc nhóm:", choices: ["Hợp pháp và có đạo đức", "Hợp pháp nhưng phi đạo đức", "Có thể có đạo đức dù gây tranh cãi về mặt pháp lý"], answer: 2, explain: "Tố giác vì lợi ích công chúng có thể vi phạm nghĩa vụ bảo mật theo hợp đồng nhưng vẫn là hành vi có đạo đức: đây là ví dụ cho thấy đạo đức và pháp luật không trùng nhau. Lựa chọn \"hợp pháp và có đạo đức\" bỏ qua xung đột với hợp đồng và luật. Lựa chọn \"hợp pháp nhưng phi đạo đức\" sai cả hai vế." },
    { q: "Một loại sản phẩm đầu tư mới được bán rộng rãi hai năm trước khi cơ quan quản lý ban hành quy định về cách công bố rủi ro của nó. Tình huống này minh họa rõ nhất lý do nào khiến luật không đủ để dẫn dắt hành vi?", choices: ["Luật khác nhau giữa các quốc gia", "Luật thường đi sau thực tế: sản phẩm và hành vi mới xuất hiện trước khi có quy định", "Luật đặt mức hành vi cao hơn chuẩn mực đạo đức"], answer: 1, explain: "Sản phẩm xuất hiện trước, quy định đến sau: luật đi sau thực tế. Tình huống chỉ có một quốc gia, nên \"luật khác nhau giữa các quốc gia\" không phải điểm chính. Lựa chọn \"luật đặt mức cao hơn chuẩn mực đạo đức\" ngược với curriculum, vốn coi luật là mức tối thiểu." },
    { q: "Trong khung ra quyết định đạo đức, việc nào thuộc bước Identify?", choices: ["Đánh giá xem kết quả của quyết định có như dự kiến không", "Hỏi ý kiến bộ phận compliance và liệt kê các phương án hành động", "Xác định sự thật liên quan, các bên liên quan, nghĩa vụ với từng bên và các xung đột lợi ích"], answer: 2, explain: "Identify gồm xác định sự thật, bên liên quan, nghĩa vụ, nguyên tắc đạo đức và xung đột lợi ích. Đánh giá kết quả sau khi hành động là bước Reflect. Hỏi compliance và liệt kê phương án thuộc bước Consider." },
    { q: "Nhận định nào về khung ra quyết định đạo đức (Identify - Consider - Act - Reflect) là chính xác nhất?", choices: ["Khung là một vòng lặp: nếu chưa rõ nên hành động thế nào có thể quay lại các bước trước, và bước Reflect giúp ra quyết định tốt hơn lần sau", "Khung là một chuỗi cố định, đã qua bước nào thì không được quay lại bước đó", "Khung chỉ dùng khi luật không có quy định về tình huống đang gặp"], answer: 0, explain: "Khung được thiết kế như vòng lặp; khi chưa đủ rõ ở bước Act có thể quay lại Identify hoặc Consider, và Reflect rút kinh nghiệm cho quyết định sau. Lựa chọn \"chuỗi cố định, không quay lại\" sai với bản chất vòng lặp. Lựa chọn \"chỉ dùng khi luật không quy định\" sai vì khung áp dụng cho mọi tình huống đạo đức, kể cả khi có luật." },
    { q: "Trước khi quyết định có nhận lời làm cố vấn có thù lao cho một công ty mà mình đang theo dõi, Ngân tự hỏi: \"Mối quan hệ lâu năm với ban lãnh đạo công ty và kỳ vọng của sếp có đang khiến mình thiên về đồng ý không?\" Ngân đang ở bước nào của khung ra quyết định?", choices: ["Identify", "Consider", "Reflect"], answer: 1, explain: "Nhận diện situational influences đang tác động lên mình là nội dung của bước Consider (cùng với tìm hướng dẫn và liệt kê phương án). Identify là xác định sự thật, bên liên quan, nghĩa vụ và xung đột lợi ích. Reflect diễn ra sau khi đã hành động, còn Ngân chưa quyết định." },
  ];

  window.LESSONS['ET-01'] = {
    moduleId: 'ET-01',
    calculator: 'Không cần máy tính',
    warmup: [
      'Hãy kể một lần bạn phải chọn giữa lợi ích của mình và lợi ích của người khác. Bạn đã cân nhắc những gì?',
      'Vì sao bạn tin một bác sĩ khi họ kê đơn thuốc dù bạn không hiểu y học? Ngành đầu tư có giống vậy không?',
      'Theo bạn, một hành vi đúng luật có chắc chắn là hành vi đúng đắn không? Cho một ví dụ.',
    ],
    sections,
    glossary,
    practice,
    widgets: {},
    slides: [],
    wrapup: [
      'Giải thích bằng lời của bạn vì sao đạo đức giúp giảm chi phí vốn của doanh nghiệp.',
      'Nêu bốn bước của khung ra quyết định đạo đức và việc cần làm trong mỗi bước.',
      'Phân biệt overconfidence và situational influences bằng một ví dụ của riêng bạn.',
    ],
  };
}());
