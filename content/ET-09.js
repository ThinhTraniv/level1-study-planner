// Bài giảng ET-09 - Guidance for Standard VII: Responsibilities as a CFA Institute Member or CFA Candidate (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027 và Standards of Practice Handbook (bản 12). Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t } = window.CFAH;

  const sections = [
    {
      title: '1. Bức tranh lớn',
      minutes: 5,
      html: `
<p>Sáu Standards đầu nói về nghĩa vụ với thị trường, khách hàng, chủ lao động. Standard VII nói về nghĩa vụ với <b>chính CFA Institute và danh hiệu CFA</b>. Giá trị của danh hiệu nằm ở niềm tin: kỳ thi khó, không gian lận được, và người mang danh hiệu không thổi phồng ý nghĩa của nó.</p>
<div class="key">Hai chuẩn của Standard VII:
<ol>
<li><b>VII(A) Conduct as Participants in CFA Institute Programs</b>: không làm gì gây tổn hại uy tín, sự liêm chính của CFA Institute, danh hiệu CFA, hay tính liêm chính, giá trị, an ninh của các chương trình (kỳ thi, chương trình học tập liên tục).</li>
<li><b>VII(B) Reference to CFA Institute, the CFA Designation, and the CFA Program</b>: khi nhắc đến tư cách thành viên, danh hiệu, hay tư cách ứng viên, không được xuyên tạc hoặc phóng đại ý nghĩa của chúng.</li>
</ol></div>
<p>Hai LOS của module: (1) diễn giải chuẩn trong các tình huống, và (2) đề xuất thủ tục phòng ngừa vi phạm. Đây là module "gần" với bạn nhất: ngay bây giờ, khi là ${t('candidate', 'ứng viên (candidate)')}, bạn đã chịu ràng buộc của VII(A) và VII(B).</p>
<p class="tip"><b>Mẹo nhớ:</b> VII(A) là <b>hành vi</b> (thi cử, bảo mật, khai báo). VII(B) là <b>lời nói, chữ viết</b> về CFA (danh thiếp, CV, quảng cáo, LinkedIn).</p>`,
    },
    {
      title: '2. VII(A): hành vi bị cấm và được phép',
      minutes: 16,
      html: `
<p><b>Nội dung chuẩn (diễn đạt lại):</b> thành viên và ứng viên không được có bất kỳ hành vi nào làm tổn hại uy tín hoặc sự liêm chính của CFA Institute, danh hiệu CFA, hoặc tính liêm chính, giá trị, an ninh của các chương trình của CFA Institute.</p>
<h4>Hành vi vi phạm VII(A)</h4>
<table class="plain"><thead><tr><th>Nhóm</th><th>Ví dụ</th></tr></thead><tbody>
<tr><td>Gian lận khi thi</td><td>Mang tài liệu, nhìn bài, dùng thiết bị cấm, nhờ người thi hộ, tiếp tục làm bài khi đã hết giờ</td></tr>
<tr><td>Tiết lộ ${t('confid', 'thông tin bảo mật')} về kỳ thi</td><td>Nội dung câu hỏi; chủ đề rộng hay hẹp <b>có</b> trong đề; chủ đề <b>không có</b> trong đề; công thức cần hay không cần dùng</td></tr>
<tr><td>Không tuân thủ quy định của chương trình</td><td>Quy định về máy tính, đồ dùng cá nhân, quy chế phòng thi, ${t('pledge', 'Cam kết của ứng viên (Candidate Pledge)')}</td></tr>
<tr><td>Cung cấp thông tin bảo mật của chương trình</td><td>Cho ứng viên khác hoặc công chúng biết thông tin chưa công khai</td></tr>
<tr><td>Dùng danh hiệu không đúng</td><td>Lợi dụng danh hiệu CFA để đạt mục tiêu cá nhân, nghề nghiệp một cách không chính đáng</td></tr>
<tr><td>Khai báo sai</td><td>Thông tin sai trong ${t('pcs', 'Bản khai đạo đức nghề nghiệp (Professional Conduct Statement, PCS)')} hoặc trong chương trình học tập, phát triển nghề nghiệp liên tục của CFA Institute</td></tr>
</tbody></table>
<h4>Hành vi được phép</h4>
<ul>
<li><b>Bày tỏ quan điểm</b> về kỳ thi, chương trình hay chính sách của CFA Institute, kể cả chỉ trích công khai, miễn là không tiết lộ thông tin bảo mật.</li>
<li>Trao đổi về nội dung <b>curriculum và LOS đã công bố</b>, lập nhóm học, chia sẻ ghi chú tự soạn, cách học.</li>
<li>Nói cảm nhận chung về trải nghiệm thi mà không nêu chủ đề, câu hỏi hay công thức cụ thể.</li>
</ul>
<h4>Tình nguyện viên của CFA Institute</h4>
<p>Thành viên làm tình nguyện viên (soạn đề, chấm bài, hội đồng) không được gợi hỏi hay tiết lộ thông tin về câu hỏi đang được cân nhắc hoặc đã dùng trong đề, về quy trình chấm hay cách cho điểm.</p>
<p class="warn"><b>Bẫy kinh điển:</b> "Tôi chỉ nói những gì <b>không có</b> trong đề." Vẫn vi phạm. Nói rằng đề bỏ qua chủ đề X cũng giúp người thi sau thu hẹp phạm vi ôn tập. Thời điểm (sau kỳ thi, sau khi có kết quả) cũng không làm thay đổi kết luận.</p>`,
    },
    {
      title: '3. VII(A): tình huống mẫu',
      minutes: 10,
      html: `
<div class="example"><div class="ex-h">Ví dụ 3.1 - Bài blog than phiền về đề</div>
<p>Ba ngày sau kỳ thi Level II, ứng viên Ngân viết trên blog của nhóm học: "Đề chọn chủ đề quá hóc búa. Những phần quan trọng như FCF, DDM, Residual Income bị bỏ qua hoàn toàn." Ngân có vi phạm không?</p>
<details><summary>Xem lời giải</summary><p><b>Có</b>, vi phạm VII(A). Ngân tiết lộ chủ đề không xuất hiện trong đề, là thông tin bảo mật. Việc chỉ nói về chủ đề "không có" và việc đăng sau kỳ thi đều không phải lý do miễn trừ.</p></details></div>
<div class="example"><div class="ex-h">Ví dụ 3.2 - Bài báo chỉ trích CFA Institute</div>
<p>Thành viên Tuấn viết bài trên báo chỉ trích lệ phí thi quá cao và cho rằng tỷ lệ đỗ thấp là không hợp lý. Tuấn có vi phạm VII(A) không?</p>
<details><summary>Xem lời giải</summary><p><b>Không.</b> Thành viên được tự do bày tỏ quan điểm về chương trình và chính sách của CFA Institute. Bài báo không tiết lộ thông tin bảo mật nào.</p></details></div>
<div class="example"><div class="ex-h">Ví dụ 3.3 - Viết thêm sau khi hết giờ</div>
<p>Khi giám thị thông báo hết giờ, ứng viên Hòa vẫn bấm chọn đáp án cho hai câu cuối. Hòa có vi phạm Standards không?</p>
<details><summary>Xem lời giải</summary><p><b>Có</b>, vi phạm VII(A). Không tuân thủ quy chế thi là vi phạm chuẩn này, bất kể việc đó có làm thay đổi điểm hay không.</p></details></div>
<div class="example"><div class="ex-h">Ví dụ 3.4 - Khai thiếu trong PCS</div>
<p>Thành viên Long đang bị cơ quan quản lý điều tra về một khiếu nại của khách hàng, nhưng khi nộp PCS hằng năm, anh trả lời "không" ở câu hỏi về điều tra. Long vi phạm gì?</p>
<details><summary>Xem lời giải</summary><p>Long vi phạm <b>VII(A)</b> vì khai sai thông tin trong PCS, làm tổn hại tính liêm chính của chương trình. Việc anh có thật sự sai phạm trong vụ khiếu nại hay không là chuyện khác.</p></details></div>
<h4>Thủ tục phòng ngừa (LOS 2)</h4>
<ul>
<li>Ứng viên: đọc kỹ quy chế thi, chính sách máy tính và đồ dùng trước ngày thi; ghi nhớ Candidate Pledge.</li>
<li>Khi tham gia nhóm học, diễn đàn, mạng xã hội sau kỳ thi: chỉ nói về curriculum đã công bố, không nhắc đến nội dung hay phạm vi của đề.</li>
<li>Thành viên: nộp PCS đúng hạn, trả lời trung thực; lưu bằng chứng giờ học tập liên tục đã khai.</li>
<li>Tình nguyện viên: tách biệt hoàn toàn công việc tình nguyện với việc dạy, ôn thi.</li>
</ul>`,
    },
    {
      title: '4. VII(B): thành viên, charterholder và ứng viên',
      minutes: 12,
      html: `
<p><b>Nội dung chuẩn (diễn đạt lại):</b> khi nhắc đến CFA Institute, tư cách thành viên, danh hiệu CFA hay tư cách ứng viên trong CFA Program, thành viên và ứng viên không được xuyên tạc hoặc phóng đại ý nghĩa, hàm ý của chúng.</p>
<table class="plain"><thead><tr><th>Tư cách</th><th>Điều kiện</th><th>Mất tư cách khi</th></tr></thead><tbody>
<tr><td>Thành viên CFA Institute (member)</td><td>Nộp PCS hằng năm và đóng ${t('dues', 'hội phí (membership dues)')} hằng năm</td><td>Không nộp PCS hoặc không đóng hội phí: không còn là thành viên đang hoạt động</td></tr>
<tr><td>${t('charter', 'Người có danh hiệu CFA (CFA charterholder)')}</td><td>Đỗ cả ba cấp độ, đủ kinh nghiệm, được cấp charter, và duy trì tư cách thành viên</td><td>Tư cách thành viên mất hiệu lực: không được dùng danh hiệu CFA cho đến khi khôi phục</td></tr>
<tr><td>Ứng viên (candidate)</td><td>Đã được nhận vào chương trình và đang đăng ký một kỳ thi sắp tới, hoặc đang chờ kết quả</td><td>Không đăng ký kỳ thi tiếp theo: không còn được tự gọi là ứng viên</td></tr>
</tbody></table>
<h4>Không có danh hiệu CFA "từng phần"</h4>
<p>Đỗ Level I hay Level II <b>không</b> tạo ra danh hiệu nào. Không được viết "CFA Level I", "CFA Level II", "đã có một phần danh hiệu CFA". Được nói đúng sự thật: "đã đỗ Level I của CFA Program", "là ứng viên Level II của CFA Program".</p>
<h4>Không hứa hẹn, không gắn với kết quả đầu tư</h4>
<ul>
<li>Được nói đúng sự thật, ví dụ "đã hoàn thành chương trình trong ba năm liên tiếp" hay "đỗ cả ba cấp độ ngay lần đầu".</li>
<li><b>Không được</b> dùng điều đó để ngụ ý năng lực vượt trội, hiệu quả đầu tư cao hơn hay rủi ro thấp hơn.</li>
<li>Được nói về những gì danh hiệu thực sự yêu cầu: chương trình học khó, cam kết đạo đức, yêu cầu kinh nghiệm.</li>
</ul>
<div class="example"><div class="ex-h">Ví dụ 4.1 - Quảng cáo "đỗ ngay lần đầu"</div>
<p>Quảng cáo của Công ty An Phát ghi: tất cả lãnh đạo là CFA charterholder và đều đỗ ba kỳ thi ngay lần đầu, vì vậy các quỹ của An Phát đạt hiệu quả vượt trội. Quảng cáo có tuân thủ VII(B) không?</p>
<details><summary>Xem lời giải</summary><p><b>Không.</b> Nêu sự thật "đỗ ngay lần đầu" thì được, nhưng gắn nó với hiệu quả đầu tư vượt trội là phóng đại ý nghĩa của danh hiệu.</p></details></div>
<div class="example"><div class="ex-h">Ví dụ 4.2 - Lời khuyên cho bạn</div>
<p>Charterholder Hạnh nói với một người bạn rằng chị học được rất nhiều từ CFA Program, nhiều công ty yêu cầu nhân viên có danh hiệu CFA, và chị khuyên ai làm quản lý đầu tư cũng nên theo học. Hạnh có vi phạm không?</p>
<details><summary>Xem lời giải</summary><p><b>Không.</b> Đây là nhận xét đúng sự thật, không phóng đại hay hứa hẹn kết quả.</p></details></div>`,
    },
    {
      title: '5. VII(B): dùng danh xưng đúng và sai',
      minutes: 14,
      html: `
<p>Quy tắc cốt lõi: "CFA" và "Chartered Financial Analyst" là ${t('mark', 'nhãn hiệu (trademark)')} gắn với một con người đủ điều kiện. "CFA" đi <b>sau tên</b> người hoặc làm <b>tính từ</b> ("CFA charterholder", "CFA Program"), <b>không</b> dùng như danh từ.</p>
<table class="plain"><thead><tr><th>Đúng</th><th>Sai</th><th>Vì sao sai</th></tr></thead><tbody>
<tr><td>Nguyễn Lan, CFA</td><td>Nguyễn Lan, C.F.A. / Nguyễn Lan, cfa</td><td>Viết hoa, không dấu chấm</td></tr>
<tr><td>Lan là CFA charterholder</td><td>Lan là một CFA / công ty có năm CFA</td><td>"CFA" không phải danh từ</td></tr>
<tr><td>Lan có danh hiệu Chartered Financial Analyst</td><td>Lan có bằng CFA (CFA degree)</td><td>CFA không phải văn bằng học thuật</td></tr>
<tr><td>Lan đã đỗ Level II của CFA Program</td><td>Lan, CFA Level II / Lan có danh hiệu CFA Level I</td><td>Không có danh hiệu từng phần</td></tr>
<tr><td>Lan là ứng viên Level III của CFA Program</td><td>Lan, CFA (dự kiến 2028)</td><td>Chưa có danh hiệu thì không gắn "CFA" sau tên</td></tr>
<tr><td>Lan đã hoàn thành cả ba cấp độ liên tiếp</td><td>Nhờ đỗ ngay lần đầu, Lan quản lý danh mục giỏi hơn</td><td>Ngụ ý năng lực, hiệu quả vượt trội</td></tr>
<tr><td>Lan là thành viên của CFA Institute</td><td>(Hội phí đã quá hạn hai năm) Lan là thành viên của CFA Institute</td><td>Tư cách thành viên không còn hiệu lực</td></tr>
</tbody></table>
<p class="tip">Ngoài ra, chữ "CFA" không nên được in to hơn hay nổi bật hơn tên của người mang danh hiệu (ví dụ trên danh thiếp).</p>
<div class="example"><div class="ex-h">Ví dụ 5.1 - Tài liệu quảng cáo của hai đồng nghiệp</div>
<p>Tài liệu quảng cáo của Công ty Sông Hồng ghi: "Trúc là một trong năm CFA của công ty; cô hoàn thành mọi yêu cầu của danh hiệu năm 2015." và "Bình có danh hiệu CFA Level I, đạt năm 2024; anh đã đăng ký kỳ thi Level II sắp tới." Ai vi phạm VII(B)?</p>
<details><summary>Xem lời giải</summary><p><b>Cả hai.</b> Trúc dùng "CFA" như danh từ ("năm CFA"). Bình nói về danh hiệu "CFA Level I" không tồn tại; anh nên viết "đã đỗ Level I của CFA Program, là ứng viên Level II".</p></details></div>
<div class="example"><div class="ex-h">Ví dụ 5.2 - CV "bằng CFA" và "tốt nghiệp loại giỏi"</div>
<p>Năm 2025, Phương tốt nghiệp đại học ngành quản trị và hoàn thành mọi yêu cầu để có danh hiệu CFA. CV của cô ghi: "Được CFA Institute cấp bằng CFA năm 2025", "tốt nghiệp loại giỏi chuyên ngành tài chính". Thực tế điểm trung bình của cô thấp hơn ngưỡng loại giỏi. Phương vi phạm chuẩn nào?</p>
<details><summary>Xem lời giải</summary><p>Vi phạm <b>VII(B)</b> vì gọi danh hiệu là "bằng CFA", và vi phạm <b>I(C) Misrepresentation</b> vì khai sai chuyên ngành và xếp loại tốt nghiệp.</p></details></div>
<h4>Thủ tục phòng ngừa (LOS 2)</h4>
<ul>
<li>Công ty: bộ phận tuân thủ rà soát danh thiếp, website, tài liệu quảng cáo, hồ sơ nhân sự trước khi phát hành; có bảng hướng dẫn cách dùng danh xưng CFA.</li>
<li>Cá nhân: kiểm tra CV, chữ ký email, hồ sơ mạng xã hội mỗi khi tư cách thay đổi (đỗ, trượt, chưa đăng ký kỳ thi mới, hội phí quá hạn).</li>
<li>Thành viên: nộp PCS và đóng hội phí đúng hạn để giữ quyền dùng danh hiệu.</li>
</ul>`,
    },
    {
      title: '6. Tóm tắt và bẫy thường gặp',
      minutes: 8,
      html: `
<table class="plain"><thead><tr><th>Tình huống</th><th>Nhớ</th></tr></thead><tbody>
<tr><td>Kể chủ đề có hoặc không có trong đề</td><td>Vi phạm VII(A), dù đã thi xong</td></tr>
<tr><td>Chỉ trích CFA Institute, lệ phí, tỷ lệ đỗ</td><td>Được phép, nếu không lộ thông tin bảo mật</td></tr>
<tr><td>Vi phạm quy chế thi (máy tính, đồ dùng, hết giờ, Pledge)</td><td>Vi phạm VII(A)</td></tr>
<tr><td>Khai sai PCS hoặc giờ học tập liên tục</td><td>Vi phạm VII(A)</td></tr>
<tr><td>Tình nguyện viên tiết lộ cách chấm</td><td>Vi phạm VII(A)</td></tr>
<tr><td>Điều kiện thành viên</td><td>Nộp PCS + đóng hội phí hằng năm</td></tr>
<tr><td>Ứng viên</td><td>Đang đăng ký kỳ thi sắp tới hoặc chờ kết quả</td></tr>
<tr><td>"CFA Level I", "CFA (dự kiến)"</td><td>Sai: không có danh hiệu từng phần</td></tr>
<tr><td>"một CFA", "bằng CFA", "C.F.A."</td><td>Sai: CFA là tính từ, viết hoa, không phải văn bằng</td></tr>
<tr><td>"Đỗ ngay lần đầu"</td><td>Được nói nếu đúng; không được gắn với hiệu quả vượt trội</td></tr>
<tr><td>CV sai cả danh xưng lẫn học vấn</td><td>Vi phạm cả VII(B) và I(C)</td></tr>
</tbody></table>
<p>Tiếp theo: tab <b>Luyện tập</b> 10 câu. ET-10 tổng hợp cách áp dụng toàn bộ Code and Standards vào tình huống.</p>`,
    },
  ];

  const glossary = {
    candidate: ['CFA candidate', 'Ứng viên CFA', 'Người đã được nhận vào CFA Program và đang đăng ký một kỳ thi sắp tới hoặc đang chờ kết quả.'],
    confid: ['Confidential exam information', 'Thông tin bảo mật về kỳ thi', 'Nội dung câu hỏi, chủ đề có hoặc không có trong đề, công thức cần dùng, cách chấm điểm.'],
    pledge: ['Candidate Pledge', 'Cam kết của ứng viên', 'Cam kết ứng viên chấp nhận trước kỳ thi, gồm việc giữ bí mật nội dung đề.'],
    pcs: ['Professional Conduct Statement (PCS)', 'Bản khai đạo đức nghề nghiệp', 'Bản khai hằng năm của thành viên về việc tuân thủ Code and Standards và các khiếu nại, điều tra liên quan.'],
    dues: ['Membership dues', 'Hội phí', 'Phí thành viên đóng hằng năm cho CFA Institute.'],
    charter: ['CFA charterholder', 'Người có danh hiệu CFA', 'Người đã đỗ ba cấp độ, đủ kinh nghiệm, được cấp charter và duy trì tư cách thành viên.'],
    mark: ['CFA marks', 'Nhãn hiệu CFA', 'Các nhãn hiệu "CFA", "Chartered Financial Analyst" thuộc CFA Institute; chỉ dùng đúng cách, đúng người.'],
  };

  const practice = [
    { q: 'Ba ngày sau kỳ thi, một ứng viên Level I đăng trên diễn đàn: "Tôi bất ngờ vì đề hầu như không hỏi gì về phái sinh." Ứng viên này:', choices: ['Không vi phạm vì chỉ nói về nội dung không có trong đề', 'Không vi phạm vì kỳ thi đã kết thúc', 'Vi phạm Standard VII(A) vì tiết lộ thông tin bảo mật về kỳ thi'], answer: 2, explain: 'Chủ đề không xuất hiện trong đề cũng là thông tin bảo mật, và việc kỳ thi đã kết thúc không thay đổi điều đó. Lý do "chỉ nói về nội dung không có trong đề" và "kỳ thi đã kết thúc" là hai cách biện minh phổ biến nhưng đều sai.' },
    { q: 'Một charterholder viết bài trên báo cho rằng lệ phí thi CFA quá cao và tỷ lệ đỗ thấp là bất hợp lý. Theo Standard VII(A), người này:', choices: ['Không vi phạm vì được tự do bày tỏ quan điểm về chương trình', 'Vi phạm vì làm tổn hại uy tín của CFA Institute', 'Vi phạm nếu bài báo được đăng công khai'], answer: 0, explain: 'Thành viên và ứng viên được bày tỏ quan điểm, kể cả chỉ trích, về chương trình và CFA Institute, miễn là không tiết lộ thông tin bảo mật. Chỉ trích không phải là hành vi làm tổn hại tính liêm chính của chương trình.' },
    { q: 'Khi giám thị thông báo hết giờ, một ứng viên vẫn chọn đáp án cho câu cuối cùng. Nhận định đúng nhất:', choices: ['Không vi phạm vì chỉ thay đổi một câu', 'Vi phạm Standard VII(A)', 'Chỉ vi phạm quy chế phòng thi, không vi phạm Standards'], answer: 1, explain: 'Không tuân thủ quy chế thi là vi phạm VII(A), bất kể chỉ thay đổi một câu. Lựa chọn "chỉ vi phạm quy chế phòng thi" sai vì quy chế của CFA Program được VII(A) bao hàm trực tiếp.' },
    { q: 'Hùng được cấp charter năm 2018. Hai năm gần đây anh không nộp PCS và không đóng hội phí, nhưng vẫn in "Hùng, CFA" trên danh thiếp. Hùng:', choices: ['Không vi phạm vì danh hiệu đã được cấp là vĩnh viễn', 'Chỉ vi phạm nếu anh tự nhận là thành viên CFA Institute', 'Vi phạm Standard VII(B) vì không còn quyền dùng danh hiệu khi tư cách thành viên mất hiệu lực'], answer: 2, explain: 'Muốn dùng danh hiệu CFA, charterholder phải duy trì tư cách thành viên (nộp PCS, đóng hội phí hằng năm). Khi tư cách thành viên mất hiệu lực, không được dùng danh hiệu cho đến khi khôi phục; danh hiệu không có hiệu lực vĩnh viễn, và vi phạm không phụ thuộc việc anh có tự nhận là thành viên hay không.' },
    { q: 'Hồ sơ LinkedIn của Mai ghi "Mai Trần, CFA Level II". Mai vừa đỗ Level II. Nhận định đúng nhất:', choices: ['Vi phạm Standard VII(B) vì không có danh hiệu CFA từng phần', 'Không vi phạm vì thông tin là sự thật', 'Không vi phạm nếu Mai đã đăng ký thi Level III'], answer: 0, explain: 'Đỗ Level II không tạo ra danh hiệu nào. Mai nên viết "đã đỗ Level II của CFA Program" hoặc "ứng viên Level III của CFA Program". Việc đỗ là thật hay đã đăng ký thi Level III không làm cách viết này đúng.' },
    { q: 'Quảng cáo của một công ty quản lý quỹ ghi rằng mọi lãnh đạo đều đỗ ba kỳ thi CFA ngay lần đầu, "đó là lý do các quỹ của chúng tôi luôn vượt chỉ số". Quảng cáo này:', choices: ['Tuân thủ vì việc đỗ ngay lần đầu là sự thật', 'Vi phạm Standard VII(B) vì gắn danh hiệu với hiệu quả đầu tư vượt trội', 'Tuân thủ nếu công ty có số liệu hiệu quả đầu tư chứng minh'], answer: 1, explain: 'Nêu sự thật đỗ ngay lần đầu thì được, nhưng ngụ ý danh hiệu dẫn đến hiệu quả vượt trội là phóng đại ý nghĩa danh hiệu. Có số liệu hiệu quả đầu tư chứng minh không làm mối liên hệ nhân quả này được phép.' },
    { q: 'Câu nào sau đây phù hợp với Standard VII(B)?', choices: ['"Tôi đã đỗ Level I của CFA Program."', '"Tôi là CFA (dự kiến năm 2028)."', '"Tôi là một CFA với 10 năm kinh nghiệm."'], answer: 0, explain: 'Nêu đúng sự thật đã đỗ một cấp độ là được phép. Câu "CFA (dự kiến năm 2028)" gắn "CFA" khi chưa có danh hiệu. Câu "một CFA với 10 năm kinh nghiệm" dùng "CFA" như danh từ; cách đúng là "CFA charterholder".' },
    { q: 'Năm 2025 Quang hoàn thành mọi yêu cầu để có danh hiệu CFA. CV của anh ghi "được cấp bằng CFA năm 2025" và "tốt nghiệp đại học loại giỏi", trong khi điểm trung bình của anh thấp hơn ngưỡng loại giỏi. Quang:', choices: ['Không vi phạm chuẩn nào vì anh thực sự đã có danh hiệu', 'Chỉ vi phạm Standard I(C) Misrepresentation', 'Vi phạm cả Standard VII(B) và Standard I(C)'], answer: 2, explain: '"Bằng CFA" là cách gọi sai (CFA không phải văn bằng học thuật), vi phạm VII(B). Khai sai xếp loại tốt nghiệp là xuyên tạc thông tin, vi phạm I(C). Lựa chọn "chỉ vi phạm Standard I(C)" bỏ sót lỗi danh xưng.' },
    { q: 'Thanh đỗ Level I năm 2025 nhưng chưa đăng ký kỳ thi Level II nào và chưa có kế hoạch thi. Trên CV, cô ghi "ứng viên CFA". Thanh:', choices: ['Tuân thủ vì cô đã từng thi và đỗ Level I', 'Vi phạm vì không còn là ứng viên khi chưa đăng ký kỳ thi tiếp theo', 'Tuân thủ nếu cô ghi thêm năm đỗ Level I'], answer: 1, explain: 'Chỉ người đang đăng ký một kỳ thi sắp tới hoặc đang chờ kết quả mới được gọi là ứng viên. Thanh có thể ghi "đã đỗ Level I của CFA Program". Việc từng đỗ hay ghi thêm năm đỗ không giữ được tư cách ứng viên.' },
    { q: 'Một charterholder làm tình nguyện viên chấm bài thi Level III. Anh kể cho một người bạn sắp thi rằng năm nay người chấm "rất nặng tay với phần trình bày lời giải". Anh:', choices: ['Vi phạm Standard VII(A) vì tiết lộ thông tin về quy trình chấm điểm', 'Không vi phạm vì không nói nội dung câu hỏi cụ thể nào', 'Không vi phạm vì đây chỉ là lời khuyên ôn thi chung'], answer: 0, explain: 'Tình nguyện viên không được tiết lộ thông tin về quy trình chấm hay cách cho điểm. Không nêu câu hỏi cụ thể không làm thay đổi kết luận; đây cũng không phải lời khuyên ôn thi chung vì dựa trên thông tin nội bộ của việc chấm bài.' },
  ];

  window.LESSONS['ET-09'] = {
    moduleId: 'ET-09',
    calculator: 'Không cần máy tính',
    warmup: [
      'Ôn ET-08: theo Standard VI(B), thứ tự ưu tiên giao dịch giữa khách hàng, chủ lao động và cá nhân là gì?',
      'Theo bạn, vì sao CFA Institute cấm ứng viên kể lại đề thi, kể cả sau khi thi xong?',
      'Bạn đang học Level I. Trên CV, bạn nên ghi tư cách của mình như thế nào?',
    ],
    sections,
    glossary,
    practice,
    widgets: {},
    slides: [],
    wrapup: [
      'Liệt kê năm nhóm hành vi vi phạm Standard VII(A).',
      'Viết lại cho đúng: "Lan là một CFA", "Bình, CFA Level II", "Chi có bằng CFA".',
      'Một thành viên cần làm gì hằng năm để tiếp tục được dùng danh hiệu CFA?',
    ],
  };
}());
