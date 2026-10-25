// Bài giảng ET-02 - Code of Ethics and Standards of Professional Conduct (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t } = window.CFAH;

  const sections = [
    {
      title: '1. Bức tranh lớn',
      minutes: 6,
      html: `
<p>ET-01 giải thích vì sao nghề đầu tư cần đạo đức. ET-02 giới thiệu <b>bộ luật chơi cụ thể</b> mà mọi thành viên CFA Institute và thí sinh CFA phải tuân theo, cùng cơ chế CFA Institute dùng để thực thi nó.</p>
<div class="key">Ba tầng cần nhớ: <b>Code of Ethics</b> (6 nguyên tắc chung) → <b>Standards of Professional Conduct</b> (7 Standards, 23 tiêu chuẩn con) → <b>Standards of Practice Handbook</b> (hướng dẫn và tình huống minh họa). Bên cạnh đó là <b>Professional Conduct Program</b> để điều tra và xử lý vi phạm.</div>
<p>Ba LOS của module:</p>
<ol>
  <li><b>Cấu trúc Professional Conduct Program (PCP) và quy trình thực thi</b> Code and Standards - phần 3, 4.</li>
  <li><b>Sáu thành phần của Code of Ethics và bảy Standards</b> - phần 5, 6.</li>
  <li><b>Trách nhiệm đạo đức mà Code and Standards đòi hỏi</b>, kể cả các tiêu chuẩn con - phần 2, 6, 7.</li>
</ol>
<p class="tip"><b>Cách học:</b> đề Level I hay hỏi kiểu "điều nào KHÔNG phải một thành phần của Code of Ethics", "tiêu chuẩn X thuộc Standard nào", "ai quyết định chế tài khi thành viên không chấp nhận". Hãy thuộc lòng tên 7 Standards theo thứ tự và các bước của PCP. Phần hướng dẫn chi tiết từng Standard nằm ở ET-03 đến ET-09.</p>`,
    },
    {
      title: '2. Code and Standards là gì và ai phải tuân thủ',
      minutes: 10,
      html: `
<p>${t('cs', 'CFA Institute Code of Ethics and Standards of Professional Conduct')} (gọi tắt là Code and Standards) là nền tảng giá trị của CFA Institute. Phần mở đầu (preamble) nêu sứ mệnh: dẫn dắt nghề đầu tư toàn cầu bằng cách thúc đẩy chuẩn mực cao nhất về đạo đức, giáo dục và sự xuất sắc nghề nghiệp, vì lợi ích cuối cùng của xã hội.</p>
<h4>Ai bị ràng buộc?</h4>
<ul>
  <li>${t('members', 'Members and Candidates')}: mọi thành viên CFA Institute (kể cả người đã có charter) và mọi thí sinh đã đăng ký chương trình CFA. Người chỉ là thí sinh Level I cũng phải tuân thủ từ khi đăng ký thi.</li>
  <li>Code and Standards áp dụng cho <b>hoạt động nghề nghiệp</b> của họ, bất kể chức danh hay nơi làm việc, và ở mọi quốc gia.</li>
  <li><b>Công ty</b> không bị buộc phải áp dụng Code and Standards. CFA Institute khuyến khích công ty áp dụng, nhưng nghĩa vụ đặt lên <b>cá nhân</b> thành viên và thí sinh.</li>
</ul>
<h4>Cam kết hằng năm</h4>
<p>Thành viên phải ký ${t('pcs', 'Professional Conduct Statement')} hằng năm: xác nhận tiếp tục tuân thủ Code and Standards và tự khai báo nếu đang liên quan đến kiện tụng dân sự, điều tra hình sự, hoặc là đối tượng của khiếu nại bằng văn bản về hành vi nghề nghiệp.</p>
<h4>Tài liệu hướng dẫn</h4>
<p>${t('handbook', 'Standards of Practice Handbook')} giải thích từng Standard: yêu cầu, hướng dẫn áp dụng, khuyến nghị tuân thủ và ví dụ tình huống. Ấn bản cập nhật gần đây (2024) bổ sung Standard I(E) Competence và nhấn mạnh việc công bố thông tin phải nổi bật, dễ hiểu.</p>
<p class="warn"><b>Bẫy:</b> Code and Standards đặt ra mức <b>tối thiểu</b>. Nếu luật địa phương chặt hơn thì theo luật; nếu Code and Standards chặt hơn thì theo Code and Standards (nguyên tắc "more strict", học kỹ ở ET-03).</p>`,
    },
    {
      title: '3. Cấu trúc Professional Conduct Program',
      minutes: 12,
      html: `
<p>${t('pcp', 'Professional Conduct Program (PCP)')} là cơ chế CFA Institute dùng để thực thi Code and Standards. Hãy nhớ PCP theo ba tầng: <b>căn cứ</b>, <b>cơ quan chịu trách nhiệm</b>, <b>bộ phận thực hiện</b>.</p>
<table class="plain"><thead><tr><th>Tầng</th><th>Là gì</th><th>Vai trò</th></tr></thead><tbody>
<tr><td>Căn cứ</td><td>CFA Institute Bylaws và Rules of Procedure for Proceedings Related to Professional Conduct</td><td>Quy định PCP vận hành ra sao, quyền của người bị điều tra</td></tr>
<tr><td>Cơ quan chịu trách nhiệm</td><td>${t('drc', 'Disciplinary Review Committee (DRC)')} thuộc Board of Governors</td><td>Chịu trách nhiệm chung về PCP và việc thực thi Code and Standards</td></tr>
<tr><td>Bộ phận thực hiện</td><td>${t('staff', 'Professional Conduct staff')}</td><td>Tiến hành điều tra (inquiry), đề xuất kết luận và chế tài</td></tr>
</tbody></table>
<h4>Điều gì có thể khởi động một cuộc điều tra?</h4>
<ul>
  <li><b>Tự khai báo</b> trên Professional Conduct Statement hằng năm: liên quan kiện tụng dân sự, điều tra hình sự, hoặc là đối tượng của một khiếu nại bằng văn bản.</li>
  <li><b>Khiếu nại bằng văn bản</b> về hành vi nghề nghiệp gửi đến Professional Conduct staff.</li>
  <li><b>Bằng chứng từ nguồn công khai</b>, ví dụ bài báo, chương trình truyền hình.</li>
  <li><b>Báo cáo của giám thị (proctor)</b> về vi phạm có thể có trong kỳ thi CFA.</li>
  <li><b>Phân tích bài thi</b> và việc <b>theo dõi mạng xã hội</b> của CFA Institute.</li>
</ul>
<div class="example"><div class="ex-h">Ví dụ 3.1</div>
<p>Một tờ báo tài chính đưa tin thành viên CFA tên Bảo bị cơ quan quản lý phạt vì giao dịch nội gián. Không ai gửi khiếu nại cho CFA Institute. CFA Institute có thể mở điều tra không?</p>
<details><summary>Xem lời giải</summary><p><b>Có.</b> Bằng chứng từ nguồn công khai như báo chí là một căn cứ để Professional Conduct staff mở inquiry. Không cần phải có khiếu nại bằng văn bản. Ngoài ra, Bảo có nghĩa vụ tự khai báo trên Professional Conduct Statement.</p></details></div>
<p class="warn"><b>Bẫy:</b> người <b>điều tra</b> là Professional Conduct staff; cơ quan <b>chịu trách nhiệm chung</b> là DRC. Đề có thể đổi chỗ hai vai trò này.</p>`,
    },
    {
      title: '4. Quy trình thực thi và các chế tài',
      minutes: 14,
      html: `
<p>Khi inquiry đã bắt đầu, quy trình đi theo các bước sau:</p>
<ol>
  <li><b>Thu thập thông tin</b>: Professional Conduct staff có thể yêu cầu người bị điều tra giải trình bằng văn bản, phỏng vấn người đó, phỏng vấn người khiếu nại hoặc bên thứ ba, và thu thập tài liệu, hồ sơ liên quan.</li>
  <li><b>Kết luận của Professional Conduct staff</b>, một trong ba hướng:
    <ul><li>Đóng inquiry, <b>không áp dụng chế tài</b>.</li>
    <li>Gửi <b>thư cảnh báo (cautionary letter)</b>: không phải là chế tài kỷ luật.</li>
    <li>Tiếp tục thủ tục để <b>kỷ luật</b>: đưa ra cáo buộc và đề xuất chế tài.</li></ul></li>
  <li><b>Người bị điều tra chọn chấp nhận hoặc từ chối</b> cáo buộc và chế tài đề xuất.</li>
  <li>Nếu từ chối, vụ việc được chuyển đến một ${t('panel', 'hội đồng xét xử (hearing panel)')} gồm các thành viên DRC. Hội đồng xem xét tài liệu và trình bày của cả hai bên, quyết định có vi phạm hay không và nếu có thì áp dụng chế tài nào.</li>
</ol>
<h4>Các chế tài (sanctions)</h4>
<table class="plain"><thead><tr><th>Đối tượng</th><th>Chế tài có thể áp dụng</th></tr></thead><tbody>
<tr><td>Thành viên (member)</td><td>${t('censure', 'Khiển trách công khai (public censure)')}; đình chỉ tư cách thành viên và quyền sử dụng danh hiệu CFA (suspension); thu hồi charter CFA (revocation)</td></tr>
<tr><td>Thí sinh (candidate)</td><td>Đình chỉ hoặc cấm tham gia tiếp chương trình CFA</td></tr>
</tbody></table>
<p>Chế tài của CFA Institute có hệ quả nghiêm trọng vì thường được công bố, ảnh hưởng đến uy tín và cơ hội nghề nghiệp. Tuy nhiên CFA Institute <b>không</b> phạt tiền hay bỏ tù; đó là việc của cơ quan nhà nước.</p>
<div class="example"><div class="ex-h">Ví dụ 4.1</div>
<p>Sau điều tra, Professional Conduct staff đề xuất đình chỉ tư cách thành viên của Hạnh 2 năm. Hạnh cho rằng mình không vi phạm và từ chối. Bước tiếp theo là gì?</p>
<details><summary>Xem lời giải</summary><p>Vụ việc được chuyển cho <b>hearing panel gồm các thành viên DRC</b>. Hội đồng nghe trình bày của Professional Conduct staff và của Hạnh, rồi quyết định có vi phạm hay không và chế tài thích hợp. Staff không tự áp đặt chế tài khi Hạnh đã từ chối.</p></details></div>
<p class="warn"><b>Bẫy:</b> cautionary letter <b>không phải</b> chế tài. Ba chế tài với thành viên là public censure, suspension, revocation; với thí sinh là đình chỉ hoặc cấm thi tiếp.</p>`,
    },
    {
      title: '5. Sáu thành phần của Code of Ethics',
      minutes: 14,
      html: `
<p>${t('code', 'Code of Ethics')} gồm sáu điều. Members and Candidates phải:</p>
<table class="plain"><thead><tr><th>#</th><th>Nội dung (diễn giải)</th><th>Từ khóa</th></tr></thead><tbody>
<tr><td>1</td><td>Hành động chính trực, có năng lực, cần mẫn, tôn trọng và có đạo đức với công chúng, khách hàng, khách hàng tiềm năng, chủ lao động, nhân viên, đồng nghiệp trong nghề và những người tham gia thị trường vốn toàn cầu khác</td><td>Integrity, competence, diligence, respect</td></tr>
<tr><td>2</td><td>Đặt tính chính trực của nghề đầu tư và lợi ích của khách hàng lên trên lợi ích của bản thân</td><td>Nghề và khách hàng trước</td></tr>
<tr><td>3</td><td>Dùng sự cẩn trọng hợp lý (reasonable care) và phán đoán độc lập khi phân tích, khuyến nghị, hành động đầu tư và các hoạt động nghề nghiệp khác</td><td>Reasonable care, independent judgment</td></tr>
<tr><td>4</td><td>Hành nghề và khuyến khích người khác hành nghề một cách chuyên nghiệp, có đạo đức, đem lại uy tín cho bản thân và cho nghề</td><td>Tự làm và khuyến khích người khác</td></tr>
<tr><td>5</td><td>Thúc đẩy tính toàn vẹn và sức sống của thị trường vốn toàn cầu vì lợi ích cuối cùng của xã hội</td><td>Integrity of capital markets</td></tr>
<tr><td>6</td><td>Duy trì và nâng cao năng lực chuyên môn của bản thân và nỗ lực nâng cao năng lực của những người làm nghề khác</td><td>Competence của mình và của người khác</td></tr>
</tbody></table>
<p class="tip"><b>Mẹo nhớ:</b> đọc 6 điều theo thứ tự "cách cư xử chung → ai đứng trước → cách làm việc → lan tỏa → thị trường → năng lực". Điều 4 và điều 6 đều có phần "người khác": khuyến khích người khác hành xử có đạo đức, và giúp người khác nâng cao năng lực.</p>
<div class="example"><div class="ex-h">Ví dụ 5.1</div>
<p>Câu nào sau đây KHÔNG phải là một thành phần của Code of Ethics: (a) đặt lợi ích khách hàng lên trên lợi ích bản thân; (b) tối đa hóa lợi nhuận cho chủ lao động; (c) thúc đẩy tính toàn vẹn của thị trường vốn toàn cầu?</p>
<details><summary>Xem lời giải</summary><p><b>(b).</b> Code of Ethics không yêu cầu tối đa hóa lợi nhuận cho chủ lao động. Code đặt tính chính trực của nghề và lợi ích của khách hàng lên trên lợi ích bản thân; nghĩa vụ với chủ lao động nằm ở Standard IV, và vẫn đứng sau lợi ích khách hàng.</p></details></div>
<p class="warn"><b>Bẫy:</b> Code of Ethics nói lợi ích của <b>khách hàng</b> và tính chính trực của <b>nghề</b> đứng trước lợi ích <b>bản thân</b>. Đáp án nhiễu hay chèn "lợi ích của chủ lao động đứng trước khách hàng" hoặc "tuân thủ luật địa phương là đủ".</p>`,
    },
    {
      title: '6. Bảy Standards và 23 tiêu chuẩn con',
      minutes: 16,
      html: `
<p>${t('sopc', 'Standards of Professional Conduct')} chi tiết hóa Code of Ethics thành 7 nhóm. Mỗi nhóm hướng về một đối tượng mà người hành nghề có nghĩa vụ:</p>
<table class="plain"><thead><tr><th>Standard</th><th>Đối tượng</th><th>Các tiêu chuẩn con</th></tr></thead><tbody>
<tr><td><b>I. Professionalism</b></td><td>Nghề nghiệp</td><td>(A) Knowledge of the Law; (B) Independence and Objectivity; (C) Misrepresentation; (D) Misconduct; (E) Competence</td></tr>
<tr><td><b>II. Integrity of Capital Markets</b></td><td>Thị trường vốn</td><td>(A) Material Nonpublic Information; (B) Market Manipulation</td></tr>
<tr><td><b>III. Duties to Clients</b></td><td>Khách hàng</td><td>(A) Loyalty, Prudence, and Care; (B) Fair Dealing; (C) Suitability; (D) Performance Presentation; (E) Preservation of Confidentiality</td></tr>
<tr><td><b>IV. Duties to Employers</b></td><td>Chủ lao động</td><td>(A) Loyalty; (B) Additional Compensation Arrangements; (C) Responsibilities of Supervisors</td></tr>
<tr><td><b>V. Investment Analysis, Recommendations, and Actions</b></td><td>Quy trình đầu tư</td><td>(A) Diligence and Reasonable Basis; (B) Communication with Clients and Prospective Clients; (C) Record Retention</td></tr>
<tr><td><b>VI. Conflicts of Interest</b></td><td>Xung đột lợi ích</td><td>(A) Avoid or Disclose Conflicts; (B) Priority of Transactions; (C) Referral Fees</td></tr>
<tr><td><b>VII. Responsibilities as a CFA Institute Member or CFA Candidate</b></td><td>CFA Institute và chương trình CFA</td><td>(A) Conduct as Participants in CFA Institute Programs; (B) Reference to CFA Institute, the CFA Designation, and the CFA Program</td></tr>
</tbody></table>
<p>Đếm: 5 + 2 + 5 + 3 + 3 + 3 + 2 = <b>23 tiêu chuẩn con</b>.</p>
<p class="tip"><b>Mẹo nhớ thứ tự:</b> đi từ bản thân ra ngoài rồi quay về tổ chức: <b>Nghề</b> (I) → <b>Thị trường</b> (II) → <b>Khách hàng</b> (III) → <b>Chủ lao động</b> (IV) → <b>Công việc phân tích</b> (V) → <b>Xung đột</b> (VI) → <b>CFA Institute</b> (VII).</p>
<div class="example"><div class="ex-h">Ví dụ 6.1</div>
<p>Xếp mỗi tiêu chuẩn vào Standard tương ứng: Suitability; Record Retention; Referral Fees; Material Nonpublic Information; Responsibilities of Supervisors.</p>
<details><summary>Xem lời giải</summary><p>Suitability → III(C). Record Retention → V(C). Referral Fees → VI(C). Material Nonpublic Information → II(A). Responsibilities of Supervisors → IV(C).</p></details></div>
<p class="warn"><b>Bẫy:</b> có hai tiêu chuẩn tên "Loyalty": III(A) là trung thành với <b>khách hàng</b> (Loyalty, Prudence, and Care), IV(A) là trung thành với <b>chủ lao động</b>. Còn "Fair Dealing" thuộc III, không thuộc II.</p>`,
    },
    {
      title: '7. Trách nhiệm đạo đức theo từng Standard',
      minutes: 13,
      html: `
<p>Mỗi Standard đặt ra những trách nhiệm cốt lõi. Phần này tóm tắt bằng một câu cho từng nhóm; hướng dẫn chi tiết và tình huống nằm ở các module ET-03 (Standard I) đến ET-09 (Standard VII).</p>
<table class="plain"><thead><tr><th>Standard</th><th>Trách nhiệm cốt lõi (diễn giải)</th></tr></thead><tbody>
<tr><td>I</td><td>Hiểu và tuân thủ luật (theo quy định chặt hơn), giữ độc lập khách quan, không trình bày sai lệch, không gian dối, duy trì năng lực</td></tr>
<tr><td>II</td><td>Không hành động dựa trên thông tin trọng yếu chưa công bố; không làm méo giá hay khối lượng với ý định đánh lừa thị trường</td></tr>
<tr><td>III</td><td>Đặt lợi ích khách hàng lên trước, đối xử công bằng giữa các khách hàng, bảo đảm khuyến nghị phù hợp, trình bày kết quả đầu tư trung thực, bảo mật thông tin khách hàng</td></tr>
<tr><td>IV</td><td>Hành động vì lợi ích của chủ lao động, không nhận thù lao cạnh tranh với chủ lao động khi chưa có sự đồng ý bằng văn bản, giám sát người dưới quyền một cách hợp lý</td></tr>
<tr><td>V</td><td>Có cơ sở hợp lý, đủ nghiên cứu cho mọi khuyến nghị; truyền đạt quy trình, rủi ro, và phân biệt sự thật với ý kiến; lưu trữ hồ sơ</td></tr>
<tr><td>VI</td><td>Tránh hoặc công bố đầy đủ, nổi bật, dễ hiểu mọi xung đột lợi ích; giao dịch của khách hàng và chủ lao động được ưu tiên trước giao dịch cá nhân; công bố phí giới thiệu</td></tr>
<tr><td>VII</td><td>Không làm tổn hại uy tín CFA Institute và tính toàn vẹn của kỳ thi; nói về danh hiệu và chương trình CFA đúng sự thật</td></tr>
</tbody></table>
<h4>Những nguyên tắc xuyên suốt</h4>
<ul>
  <li><b>Thứ tự ưu tiên</b>: khách hàng → chủ lao động → bản thân.</li>
  <li><b>Chặt hơn thì theo</b>: giữa luật và Code and Standards, áp dụng quy định chặt hơn.</li>
  <li><b>Công bố không phải lúc nào cũng đủ</b>: Standard VI(A) mới (2024) yêu cầu <b>tránh hoặc</b> công bố xung đột; công bố phải nổi bật, bằng ngôn ngữ dễ hiểu.</li>
  <li><b>Hành vi được đánh giá theo nỗ lực hợp lý</b> ("reasonable"), không theo kết quả: một khuyến nghị lỗ không có nghĩa là vi phạm.</li>
</ul>
<div class="example"><div class="ex-h">Ví dụ 7.1</div>
<p>Tùng, thí sinh Level I, đăng lên mạng xã hội chủ đề cụ thể của các câu hỏi đã xuất hiện trong bài thi của anh. Tùng có liên quan đến Code and Standards không, và Standard nào phù hợp nhất?</p>
<details><summary>Xem lời giải</summary><p><b>Có.</b> Thí sinh cũng bị ràng buộc. Hành vi tiết lộ nội dung bài thi làm tổn hại tính toàn vẹn của kỳ thi, liên quan đến <b>Standard VII(A)</b> Conduct as Participants in CFA Institute Programs. Hệ quả có thể là đình chỉ hoặc cấm tham gia chương trình CFA.</p></details></div>`,
    },
    {
      title: '8. Tóm tắt và bẫy thường gặp',
      minutes: 5,
      html: `
<table class="plain"><thead><tr><th>Chủ đề</th><th>Điều cần nhớ</th><th>Bẫy thường gặp</th></tr></thead><tbody>
<tr><td>Ai bị ràng buộc</td><td>Members và Candidates (kể cả thí sinh Level I)</td><td>Nghĩ công ty bắt buộc phải áp dụng</td></tr>
<tr><td>Cơ cấu PCP</td><td>Bylaws và Rules of Procedure; DRC chịu trách nhiệm; Professional Conduct staff điều tra</td><td>Đổi chỗ DRC và staff</td></tr>
<tr><td>Nguồn khởi động</td><td>Tự khai báo, khiếu nại văn bản, nguồn công khai, giám thị, phân tích bài thi, mạng xã hội</td><td>Nghĩ phải có khiếu nại mới điều tra</td></tr>
<tr><td>Kết luận của staff</td><td>Không chế tài, cautionary letter, hoặc tiếp tục kỷ luật</td><td>Coi cautionary letter là chế tài</td></tr>
<tr><td>Từ chối chế tài</td><td>Chuyển đến hearing panel gồm thành viên DRC</td><td>Nghĩ chuyển ra tòa án</td></tr>
<tr><td>Chế tài</td><td>Public censure, suspension, revocation; thí sinh: đình chỉ, cấm thi</td><td>Thêm "phạt tiền"</td></tr>
<tr><td>Code of Ethics</td><td>6 điều, khách hàng và nghề trước bản thân</td><td>Chèn "lợi ích chủ lao động trước khách hàng"</td></tr>
<tr><td>Standards</td><td>7 nhóm, 23 tiêu chuẩn con, I có 5 với Competence</td><td>Nhầm hai chữ Loyalty ở III(A) và IV(A)</td></tr>
</tbody></table>`,
    },
  ];

  const glossary = {
    cs: ['CFA Institute Code of Ethics and Standards of Professional Conduct', 'Bộ quy tắc đạo đức và chuẩn mực hành nghề của CFA Institute', 'Gồm 6 điều Code of Ethics và 7 Standards; ràng buộc mọi thành viên và thí sinh CFA.'],
    members: ['Members and Candidates', 'Thành viên và thí sinh', 'Thành viên CFA Institute (kể cả charterholder) và người đã đăng ký chương trình CFA.'],
    pcs: ['Professional Conduct Statement', 'Bản cam kết về hành vi nghề nghiệp', 'Văn bản thành viên ký hằng năm: cam kết tuân thủ và tự khai báo kiện tụng, điều tra, khiếu nại.'],
    handbook: ['Standards of Practice Handbook', 'Sổ tay chuẩn mực hành nghề', 'Tài liệu giải thích từng Standard bằng hướng dẫn, khuyến nghị và ví dụ.'],
    pcp: ['Professional Conduct Program (PCP)', 'Chương trình thực thi chuẩn mực', 'Cơ chế của CFA Institute để điều tra và xử lý vi phạm Code and Standards.'],
    drc: ['Disciplinary Review Committee (DRC)', 'Ủy ban xem xét kỷ luật', 'Ủy ban thuộc Board of Governors, chịu trách nhiệm chung về PCP và việc thực thi Code and Standards.'],
    staff: ['Professional Conduct staff', 'Bộ phận chuẩn mực nghề nghiệp', 'Nhân sự CFA Institute trực tiếp điều tra, đưa ra kết luận và đề xuất chế tài.'],
    panel: ['Hearing panel', 'Hội đồng xét xử', 'Hội đồng gồm thành viên DRC, xem xét vụ việc khi người bị điều tra từ chối cáo buộc hoặc chế tài.'],
    censure: ['Public censure', 'Khiển trách công khai', 'Chế tài nhẹ nhất với thành viên, được công bố công khai.'],
    code: ['Code of Ethics', 'Bộ quy tắc đạo đức', 'Sáu nguyên tắc chung mà Members and Candidates phải tuân theo.'],
    sopc: ['Standards of Professional Conduct', 'Chuẩn mực hành nghề', 'Bảy nhóm quy tắc cụ thể (23 tiêu chuẩn con) chi tiết hóa Code of Ethics.'],
  };

  const practice = [
    { q: 'Thu là thí sinh Level I, đang làm nhân viên kế toán tại một công ty sản xuất. Code and Standards áp dụng với Thu như thế nào?', choices: ['Thu phải tuân thủ Code and Standards vì cô đã là thí sinh chương trình CFA', 'Code and Standards chỉ áp dụng sau khi Thu được cấp charter', 'Code and Standards chỉ áp dụng nếu công ty của Thu đã chính thức áp dụng chúng'], answer: 0, explain: 'Code and Standards ràng buộc cả Members và Candidates kể từ khi đăng ký chương trình. B sai vì thí sinh cũng bị ràng buộc. C sai vì nghĩa vụ đặt lên cá nhân, công ty không bắt buộc phải áp dụng.' },
    { q: 'Trong Professional Conduct Program, bộ phận nào trực tiếp tiến hành điều tra (inquiry) về hành vi của thành viên?', choices: ['Board of Governors', 'Disciplinary Review Committee', 'Professional Conduct staff'], answer: 2, explain: 'Professional Conduct staff tiến hành inquiry. DRC (B) thuộc Board of Governors và chịu trách nhiệm chung về PCP, đồng thời cung cấp thành viên cho hearing panel. Board of Governors (A) không trực tiếp điều tra.' },
    { q: 'Điều nào sau đây KHÔNG phải là căn cứ để CFA Institute mở một inquiry?', choices: ['Thông tin trên một bài báo về việc thành viên bị cơ quan quản lý phạt', 'Lời phàn nàn qua điện thoại của một đối thủ cạnh tranh về việc thành viên có thu nhập cao bất thường', 'Báo cáo của giám thị về hành vi khả nghi trong phòng thi'], answer: 1, explain: 'Thu nhập cao không phải là vấn đề về hành vi nghề nghiệp, và đây cũng không phải khiếu nại bằng văn bản về một vi phạm. Nguồn công khai như báo chí (A) và báo cáo của giám thị (C) đều là căn cứ được nêu rõ.' },
    { q: 'Sau khi điều tra, Professional Conduct staff kết luận hành vi của Duy chưa đến mức phải kỷ luật nhưng cần nhắc nhở. Staff nhiều khả năng sẽ:', choices: ['Gửi cautionary letter, không phải là chế tài kỷ luật', 'Áp dụng public censure', 'Chuyển vụ việc lên hearing panel'], answer: 0, explain: 'Cautionary letter là một hướng kết luận của staff và không được xem là chế tài. Public censure (B) là chế tài kỷ luật. Hearing panel (C) chỉ được triệu tập khi người bị điều tra từ chối cáo buộc hoặc chế tài đề xuất.' },
    { q: 'Professional Conduct staff đề xuất thu hồi charter của Phong. Phong từ chối cả cáo buộc lẫn chế tài. Điều gì xảy ra tiếp theo?', choices: ['Chế tài tự động có hiệu lực sau 30 ngày', 'Vụ việc được chuyển đến hearing panel gồm các thành viên DRC để quyết định', 'Vụ việc được chuyển đến tòa án nơi Phong cư trú'], answer: 1, explain: 'Khi bị từ chối, hearing panel gồm thành viên DRC xem xét tài liệu và trình bày của hai bên rồi quyết định có vi phạm và chế tài nào. A sai vì chế tài không tự động áp dụng khi đã bị từ chối. C sai vì đây là quy trình nội bộ của CFA Institute, không phải tố tụng tại tòa.' },
    { q: 'Chế tài nào KHÔNG nằm trong số các chế tài CFA Institute có thể áp dụng với thành viên?', choices: ['Khiển trách công khai', 'Thu hồi charter CFA', 'Phạt tiền theo tỷ lệ thu nhập'], answer: 2, explain: 'Chế tài với thành viên gồm public censure, suspension (đình chỉ tư cách thành viên và quyền dùng danh hiệu) và revocation (thu hồi charter). CFA Institute không phạt tiền; đó là thẩm quyền của cơ quan nhà nước.' },
    { q: 'Câu nào là một thành phần của CFA Institute Code of Ethics?', choices: ['Đặt lợi ích của chủ lao động lên trên lợi ích của khách hàng khi hai bên xung đột', 'Tuân thủ luật địa phương là đủ để đáp ứng nghĩa vụ đạo đức', 'Thúc đẩy tính toàn vẹn và sức sống của thị trường vốn toàn cầu vì lợi ích cuối cùng của xã hội'], answer: 2, explain: 'Đây là điều thứ năm của Code of Ethics. A trái với Code, vốn đặt lợi ích khách hàng lên trên. B sai vì Code and Standards có thể chặt hơn luật, và khi đó phải theo quy định chặt hơn.' },
    { q: 'Tiêu chuẩn "Fair Dealing" thuộc Standard nào?', choices: ['Standard III: Duties to Clients', 'Standard II: Integrity of Capital Markets', 'Standard VI: Conflicts of Interest'], answer: 0, explain: 'Fair Dealing là III(B): đối xử công bằng, khách quan với mọi khách hàng. Đáp án B: Standard II gồm Material Nonpublic Information và Market Manipulation. Đáp án C: Standard VI gồm Avoid or Disclose Conflicts, Priority of Transactions và Referral Fees.' },
    { q: 'Theo phiên bản Code and Standards hiện hành, Standard I: Professionalism có bao nhiêu tiêu chuẩn con, và tiêu chuẩn nào được bổ sung?', choices: ['4 tiêu chuẩn; không có tiêu chuẩn mới', '5 tiêu chuẩn; bổ sung I(E) Competence', '5 tiêu chuẩn; bổ sung I(E) Suitability'], answer: 1, explain: 'Standard I hiện gồm (A) Knowledge of the Law, (B) Independence and Objectivity, (C) Misrepresentation, (D) Misconduct, (E) Competence. A mô tả phiên bản cũ. C sai vì Suitability là III(C), thuộc nghĩa vụ với khách hàng.' },
    { q: 'An, thành viên CFA, nhận thù lao từ một công ty khác để tư vấn cho khách hàng của chính công ty nơi An đang làm, mà không báo cho chủ lao động. Hành vi này liên quan trực tiếp nhất đến Standard nào?', choices: ['Standard VII: Responsibilities as a CFA Institute Member or CFA Candidate', 'Standard V: Investment Analysis, Recommendations, and Actions', 'Standard IV: Duties to Employers'], answer: 2, explain: 'Nhận thù lao cạnh tranh với lợi ích chủ lao động khi chưa có đồng ý bằng văn bản là vấn đề của IV(B) Additional Compensation Arrangements, thuộc nghĩa vụ với chủ lao động. Đáp án A: Standard VII nói về CFA Institute và kỳ thi. Đáp án B: Standard V nói về quy trình phân tích, truyền đạt và lưu trữ hồ sơ.' },
  ];

  window.LESSONS['ET-02'] = {
    moduleId: 'ET-02',
    calculator: 'Không cần máy tính',
    warmup: [
      'Nêu bốn bước của khung ra quyết định đạo đức đã học ở ET-01.',
      'Vì sao một code of ethics chỉ có giá trị khi có cơ chế giám sát và kỷ luật đi kèm?',
      'Bạn đoán xem: nếu một thí sinh CFA gian lận khi thi, CFA Institute có thể làm gì?',
    ],
    sections,
    glossary,
    practice,
    widgets: {},
    slides: [],
    wrapup: [
      'Vẽ sơ đồ quy trình PCP từ lúc có căn cứ điều tra đến khi có chế tài.',
      'Viết lại 6 điều của Code of Ethics bằng lời của bạn, mỗi điều một dòng.',
      'Đọc thuộc tên 7 Standards theo thứ tự và số tiêu chuẩn con của từng Standard.',
    ],
  };
}());
