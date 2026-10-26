// Bài giảng FSA-01 - Introduction to Financial Statement Analysis (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t } = window.CFAH;

  const sections = [
    {
      title: '1. Bức tranh lớn',
      minutes: 5,
      html: `
<p>Topic Financial Statement Analysis (FSA) chiếm tỷ trọng lớn trong đề Level I và là nền cho Equity, Fixed Income, Corporate Issuers. Module mở đầu này <b>chưa tính toán nhiều</b>, nhưng trả lời ba câu hỏi bạn sẽ dùng suốt topic:</p>
<div class="key">Phân tích báo cáo tài chính là dùng thông tin của doanh nghiệp (và thông tin bên ngoài) để <b>ra quyết định kinh tế</b>: mua cổ phiếu, cho vay, xếp hạng tín dụng, sáp nhập. Muốn làm tốt, nhà phân tích phải biết <b>tìm thông tin ở đâu</b>, <b>tin được đến mức nào</b> và <b>làm theo quy trình nào</b>.</div>
<p>Năm LOS của module đi theo trình tự:</p>
<ol>
  <li><b>Vai trò của phân tích BCTC</b>: ai dùng, để quyết định gì. Ứng với LOS 2 (phần 2).</li>
  <li><b>Nguồn thông tin chính thức</b>: hồ sơ nộp cơ quan quản lý, BCTC và thuyết minh, thông tin bổ sung, bình luận của ban điều hành, báo cáo kiểm toán. Ứng với LOS 3 (phần 3, 4, 5).</li>
  <li><b>Các hệ thống chuẩn mực khác nhau</b> (IFRS, US GAAP) và vì sao phải theo dõi chuẩn mực mới. Ứng với LOS 4 (phần 6).</li>
  <li><b>Nguồn thông tin khác</b> ngoài báo cáo năm và giữa kỳ. Ứng với LOS 5 (phần 7).</li>
  <li><b>Khung phân tích 6 bước</b>. Ứng với LOS 1 (phần 8).</li>
</ol>
<p class="tip"><b>Cách học module này:</b> đề thi hỏi dạng "thông tin X nằm ở đâu", "ý kiến kiểm toán nào phù hợp tình huống", "bước nào của khung phân tích". Hãy học bằng bảng và tự đặt mình vào vai một nhà phân tích đang đọc báo cáo thường niên của một công ty thật.</p>`,
    },
    {
      title: '2. Vai trò của phân tích báo cáo tài chính',
      minutes: 10,
      html: `
<p>Cần phân biệt hai việc thường bị nhầm:</p>
<ul>
<li>${t('finreport', 'Lập báo cáo tài chính (financial reporting)')}: việc của <b>doanh nghiệp</b>. Ban điều hành ghi nhận giao dịch theo chuẩn mực và trình bày ra bốn báo cáo.</li>
<li>${t('fsa', 'Phân tích báo cáo tài chính (financial statement analysis)')}: việc của <b>người dùng bên ngoài</b> (và cả bên trong). Họ dùng các báo cáo đó, cùng với thông tin khác, để ra quyết định.</li>
</ul>
<div class="key">Vai trò của phân tích BCTC: dùng thông tin tài chính để <b>hỗ trợ quyết định kinh tế</b>. Cụ thể, đánh giá <b>kết quả hoạt động trong quá khứ</b>, <b>tình hình tài chính hiện tại</b>, <b>khả năng tạo lợi nhuận và dòng tiền trong tương lai</b>, và <b>các rủi ro</b> có thể ảnh hưởng đến những điều đó.</div>
<h4>Ai dùng và họ quan tâm điều gì</h4>
<table class="plain"><thead><tr><th>Người dùng</th><th>Quyết định</th><th>Câu hỏi chính</th></tr></thead><tbody>
<tr><td>Nhà phân tích cổ phiếu (equity analyst)</td><td>Mua, giữ, bán cổ phiếu</td><td>Lợi nhuận và dòng tiền tăng trưởng thế nào? Giá hiện tại đắt hay rẻ?</td></tr>
<tr><td>Nhà phân tích tín dụng, ngân hàng (credit analyst)</td><td>Cho vay, mua trái phiếu, đặt điều khoản</td><td>Doanh nghiệp có đủ tiền trả lãi và gốc đúng hạn không? Tài sản bảo đảm ra sao?</td></tr>
<tr><td>Tổ chức xếp hạng tín nhiệm</td><td>Gán hạng tín nhiệm</td><td>Rủi ro vỡ nợ so với các doanh nghiệp cùng hạng</td></tr>
<tr><td>Doanh nghiệp đi mua bán, sáp nhập</td><td>Giá mua, cấu trúc giao dịch</td><td>Mục tiêu đáng giá bao nhiêu? Có rủi ro ẩn trong bảng cân đối không?</td></tr>
<tr><td>Nhà cung cấp, khách hàng lớn</td><td>Cấp tín dụng thương mại, ký hợp đồng dài hạn</td><td>Đối tác có tồn tại và trả tiền được trong vài năm tới không?</td></tr>
</tbody></table>
<p>Nhà phân tích cổ phiếu và nhà phân tích tín dụng nhìn cùng một bộ báo cáo nhưng <b>với trọng tâm khác nhau</b>. Người nắm cổ phiếu hưởng phần lợi nhuận tăng thêm không giới hạn, nên quan tâm đến <b>tăng trưởng</b>. Chủ nợ chỉ nhận lãi và gốc cố định, nên quan tâm đến <b>khả năng trả nợ và rủi ro xấu nhất</b>.</p>
<div class="example"><div class="ex-h">Ví dụ 2.1</div>
<p>Một công ty bán lẻ vừa công bố lợi nhuận tăng 30%, nhưng dòng tiền từ hoạt động kinh doanh âm do tồn kho và phải thu tăng mạnh, đồng thời vay ngắn hạn tăng gấp đôi. Một nhà phân tích cổ phiếu và một chuyên viên tín dụng ngân hàng sẽ chú ý điều gì?</p>
<details><summary>Xem lời giải</summary>
<p>Nhà phân tích cổ phiếu hỏi: tăng trưởng lợi nhuận có <b>bền vững</b> không, hay đến từ việc bán chịu dễ dãi? Chuyên viên tín dụng hỏi: dòng tiền âm thì công ty <b>lấy tiền đâu trả nợ</b>, nợ ngắn hạn có bị đáo hạn dồn không? Cả hai đều phải nhìn ra ngoài con số lợi nhuận, sang bảng cân đối và báo cáo lưu chuyển tiền tệ.</p></details></div>
<p class="tip">Phân tích BCTC <b>không phải</b> là lập báo cáo, cũng không phải là kiểm toán hay bảo đảm tuân thủ chuẩn mực. Đề thi hay đặt các lựa chọn này làm đáp án nhiễu.</p>`,
    },
    {
      title: '3. Hồ sơ nộp cơ quan quản lý và bốn báo cáo chính',
      minutes: 12,
      html: `
<h4>Hồ sơ nộp cơ quan quản lý (regulatory filings)</h4>
<p>Công ty niêm yết phải nộp ${t('filing', 'hồ sơ định kỳ và bất thường')} cho cơ quan quản lý chứng khoán. Ở Mỹ, cơ quan này là SEC, hồ sơ được công bố trên hệ thống EDGAR. Các mẫu cần nhận ra:</p>
<table class="plain"><thead><tr><th>Mẫu (Mỹ)</th><th>Nội dung</th></tr></thead><tbody>
<tr><td><b>Form 10-K</b></td><td>Báo cáo năm: BCTC đã kiểm toán, thuyết minh, MD&amp;A, mô tả kinh doanh, rủi ro</td></tr>
<tr><td><b>Form 10-Q</b></td><td>Báo cáo quý: BCTC giữa kỳ, thường <b>chưa kiểm toán</b> (chỉ soát xét)</td></tr>
<tr><td><b>Form 8-K</b></td><td>Sự kiện trọng yếu bất thường: mua bán sáp nhập, thay đổi kiểm toán viên, thay lãnh đạo, phá sản</td></tr>
<tr><td><b>Proxy statement (DEF 14A)</b></td><td>Gửi cổ đông trước đại hội: bầu HĐQT, thù lao lãnh đạo, cổ đông lớn, các vấn đề biểu quyết</td></tr>
<tr><td><b>Forms 3, 4, 5 và 144</b></td><td>Giao dịch, sở hữu của người nội bộ; ý định bán chứng khoán hạn chế chuyển nhượng</td></tr>
<tr><td><b>Form 20-F, 6-K</b></td><td>Báo cáo năm và báo cáo bất thường của doanh nghiệp nước ngoài niêm yết tại Mỹ</td></tr>
<tr><td><b>Form S-1</b></td><td>Hồ sơ đăng ký phát hành, ví dụ khi IPO</td></tr>
</tbody></table>
<p>Ở các thị trường khác (EU, Việt Nam...) tên mẫu khác nhau nhưng logic giống nhau: <b>báo cáo năm, báo cáo giữa kỳ, công bố bất thường, tài liệu đại hội cổ đông, giao dịch người nội bộ</b>.</p>

<h4>Bốn báo cáo tài chính chính</h4>
<table class="plain"><thead><tr><th>Báo cáo</th><th>Trả lời câu hỏi</th><th>Thời điểm hay thời kỳ</th></tr></thead><tbody>
<tr><td>${t('bs', 'Bảng cân đối kế toán (statement of financial position)')}</td><td>Doanh nghiệp sở hữu gì, nợ ai, chủ sở hữu còn lại bao nhiêu? Tài sản = Nợ phải trả + Vốn chủ</td><td>Một <b>thời điểm</b></td></tr>
<tr><td>${t('is', 'Báo cáo kết quả kinh doanh và thu nhập toàn diện')}</td><td>Doanh nghiệp tạo ra bao nhiêu doanh thu, chi phí, lợi nhuận? Thu nhập toàn diện khác (OCI) gồm những gì?</td><td>Một <b>thời kỳ</b></td></tr>
<tr><td>${t('sce', 'Báo cáo thay đổi vốn chủ sở hữu')}</td><td>Vốn chủ thay đổi vì lợi nhuận, OCI, cổ tức, phát hành, mua lại cổ phiếu ra sao?</td><td>Một thời kỳ</td></tr>
<tr><td>${t('cfs', 'Báo cáo lưu chuyển tiền tệ (statement of cash flows)')}</td><td>Tiền vào ra từ kinh doanh, đầu tư, tài chính thế nào?</td><td>Một thời kỳ</td></tr>
</tbody></table>
<p class="tip">Lợi nhuận được ghi theo ${t('accrual', 'cơ sở dồn tích (accrual basis)')}: doanh thu ghi khi đã thực hiện nghĩa vụ, chi phí ghi khi phát sinh, không cần chờ tiền. Vì vậy cần báo cáo lưu chuyển tiền tệ để thấy <b>tiền thật</b>. Ba module FSA-02, FSA-03, FSA-04 sẽ đi sâu vào từng báo cáo.</p>`,
    },
    {
      title: '4. Thuyết minh, thông tin bổ sung và bình luận của ban điều hành',
      minutes: 12,
      html: `
<h4>Thuyết minh báo cáo tài chính (notes)</h4>
<p>${t('notes', 'Thuyết minh')} là <b>một phần không tách rời</b> của BCTC và được kiểm toán cùng các báo cáo. Bốn con số tổng hợp không thể hiểu được nếu thiếu thuyết minh. Nội dung chính:</p>
<ul>
<li><b>Cơ sở lập</b> và <b>chính sách kế toán</b>: chuẩn mực áp dụng, phương pháp tính giá tồn kho, khấu hao, ghi nhận doanh thu.</li>
<li><b>Ước tính và xét đoán quan trọng</b>: thời gian sử dụng tài sản, dự phòng nợ khó đòi, giả định lương hưu, kiểm tra suy giảm giá trị.</li>
<li><b>Chi tiết các khoản mục</b>: cơ cấu tồn kho, tài sản cố định, nợ vay theo kỳ hạn, thuế hoãn lại.</li>
<li><b>Nghĩa vụ tiềm tàng, cam kết, giao dịch với bên liên quan, sự kiện sau ngày kết thúc kỳ</b>.</li>
<li>${t('segment', 'Thông tin bộ phận (segment reporting)')}: doanh thu, lợi nhuận, tài sản theo mảng kinh doanh hoặc khu vực địa lý.</li>
</ul>
<div class="example"><div class="ex-h">Ví dụ 4.1</div>
<p>Hai hãng hàng không có cùng chi phí khấu hao trên báo cáo, nhưng hãng A khấu hao máy bay 25 năm, hãng B khấu hao 15 năm. Nhà phân tích biết điều này ở đâu và nó có nghĩa gì?</p>
<details><summary>Xem lời giải</summary>
<p>Ở thuyết minh về <b>chính sách kế toán</b> (tài sản cố định). Với cùng đội bay, hãng A ghi khấu hao mỗi năm thấp hơn, nên lợi nhuận cao hơn. Muốn so sánh công bằng, nhà phân tích phải điều chỉnh về cùng giả định. Đây là lý do <b>không bao giờ</b> nên so sánh tỷ số mà chưa đọc chính sách kế toán.</p></details></div>

<h4>Thông tin bổ sung (supplementary information)</h4>
<p>Một số thông tin đi kèm nhưng không thuộc bốn báo cáo chính, ví dụ số liệu theo quý, thông tin dự trữ dầu khí, thông tin về ảnh hưởng của lạm phát. Ngoài ra, doanh nghiệp phải công bố <b>chuẩn mực mới đã ban hành nhưng chưa áp dụng</b> và ảnh hưởng dự kiến của chúng (xem phần 6).</p>

<h4>Bình luận của ban điều hành (management commentary, MD&amp;A)</h4>
<p>${t('mda', 'MD&amp;A (Management\'s Discussion and Analysis)')} là phần ban điều hành <b>giải thích bằng lời</b> kết quả và tình hình tài chính. SEC yêu cầu MD&amp;A trong 10-K và 10-Q, gồm: kết quả hoạt động và nguyên nhân thay đổi, ${t('liquidity', 'thanh khoản và nguồn vốn')}, các xu hướng và sự kiện đã biết có thể ảnh hưởng tương lai, các ${t('crit', 'ước tính kế toán quan trọng (critical accounting estimates)')}. Theo IFRS, bình luận của ban điều hành được khuyến khích (IFRS Practice Statement) nhưng không bắt buộc bởi chính IFRS; nhiều nước yêu cầu qua luật chứng khoán.</p>
<p class="warn"><b>Lưu ý:</b> MD&amp;A <b>không được kiểm toán</b>. Ban điều hành có động cơ trình bày tích cực, nên nhà phân tích dùng MD&amp;A để biết <b>ban điều hành nghĩ gì</b>, rồi kiểm chứng bằng số liệu trong BCTC đã kiểm toán.</p>`,
    },
    {
      title: '5. Báo cáo kiểm toán',
      minutes: 12,
      html: `
<p>${t('audit', 'Kiểm toán độc lập')} đưa ra ý kiến về việc BCTC có được trình bày <b>trung thực và hợp lý, trên các khía cạnh trọng yếu</b>, theo khuôn khổ chuẩn mực áp dụng hay không. Kiểm toán cho ${t('reasonable', 'sự bảo đảm hợp lý (reasonable assurance)')}, <b>không phải bảo đảm tuyệt đối</b>: kiểm toán viên kiểm tra theo mẫu, dựa vào ${t('material', 'trọng yếu (materiality)')}, và không chịu trách nhiệm lập báo cáo. Trách nhiệm lập BCTC thuộc về ban điều hành.</p>
<h4>Bốn loại ý kiến kiểm toán</h4>
<p>Loại ý kiến phụ thuộc hai câu hỏi: vấn đề có <b>trọng yếu</b> không, và có <b>lan tỏa (pervasive)</b>, tức ảnh hưởng đến toàn bộ BCTC, không?</p>
<table class="plain"><thead><tr><th>Ý kiến</th><th>Khi nào</th><th>Ý nghĩa với nhà phân tích</th></tr></thead><tbody>
<tr><td>${t('unqual', 'Chấp nhận toàn phần (unqualified / unmodified)')}</td><td>BCTC trình bày hợp lý trên các khía cạnh trọng yếu</td><td>Ý kiến "sạch", tình huống bình thường</td></tr>
<tr><td>${t('qual', 'Ngoại trừ (qualified)')}</td><td>Có sai sót hoặc giới hạn phạm vi <b>trọng yếu nhưng không lan tỏa</b>, giới hạn ở một khoản mục</td><td>Đọc kỹ khoản mục bị ngoại trừ và điều chỉnh nếu cần</td></tr>
<tr><td>${t('adverse', 'Trái ngược (adverse)')}</td><td>Sai sót <b>trọng yếu và lan tỏa</b>: BCTC không trình bày hợp lý</td><td>Số liệu gần như không dùng được</td></tr>
<tr><td>${t('disclaim', 'Từ chối đưa ra ý kiến (disclaimer)')}</td><td>Không thu thập được đủ bằng chứng, ảnh hưởng có thể <b>trọng yếu và lan tỏa</b></td><td>Tín hiệu rất xấu về quản trị hoặc hợp tác của doanh nghiệp</td></tr>
</tbody></table>
<p class="tip"><b>Mẹo nhớ:</b> qualified = "trừ một chỗ", adverse = "sai cả bộ", disclaimer = "không xem được nên không nói".</p>
<h4>Các phần khác của báo cáo kiểm toán</h4>
<ul>
<li>${t('kam', 'Vấn đề kiểm toán trọng yếu (key audit matters, KAM)')} theo chuẩn mực kiểm toán quốc tế, hay ${t('cam', 'critical audit matters (CAM)')} theo PCAOB ở Mỹ: những vấn đề đòi hỏi nhiều xét đoán nhất, ví dụ suy giảm lợi thế thương mại, ghi nhận doanh thu hợp đồng dài hạn. Đây là "bản đồ rủi ro" miễn phí cho nhà phân tích.</li>
<li>${t('goingc', 'Hoạt động liên tục (going concern)')}: nếu có bất định trọng yếu về khả năng tiếp tục hoạt động, kiểm toán viên nêu rõ trong một đoạn riêng, kể cả khi ý kiến vẫn là chấp nhận toàn phần.</li>
<li>Ở Mỹ, công ty niêm yết lớn còn có ý kiến của kiểm toán viên về ${t('icfr', 'kiểm soát nội bộ đối với báo cáo tài chính')} (theo luật Sarbanes-Oxley), và ban điều hành phải tự đánh giá kiểm soát nội bộ.</li>
</ul>
<div class="example"><div class="ex-h">Ví dụ 5.1</div>
<p>Kiểm toán viên không được phép kiểm kê hàng tồn kho tại một kho lớn chiếm 8% tổng tài sản. Các khoản mục khác đều kiểm tra đầy đủ và không có sai sót. Ý kiến phù hợp nhất?</p>
<details><summary>Xem lời giải</summary>
<p>Giới hạn phạm vi ở <b>một khoản mục</b>, có thể trọng yếu nhưng <b>không lan tỏa</b>: ý kiến <b>ngoại trừ (qualified)</b>. Nếu kiểm toán viên không tiếp cận được phần lớn sổ sách của toàn công ty thì mới là từ chối đưa ra ý kiến.</p></details></div>`,
    },
    {
      title: '6. Hệ thống chuẩn mực khác nhau và theo dõi chuẩn mực mới',
      minutes: 13,
      html: `
<h4>Người đặt chuẩn mực và cơ quan quản lý</h4>
<table class="plain"><thead><tr><th>Vai trò</th><th>Ví dụ</th><th>Làm gì</th></tr></thead><tbody>
<tr><td>${t('setter', 'Tổ chức lập chuẩn mực (standard-setting body)')}</td><td>IASB (ban hành IFRS), FASB (ban hành US GAAP)</td><td>Tổ chức chuyên môn, tư nhân, độc lập; soạn chuẩn mực nhưng <b>không có quyền cưỡng chế</b></td></tr>
<tr><td>${t('regulator', 'Cơ quan quản lý (regulatory authority)')}</td><td>SEC (Mỹ), ESMA (EU), FCA (Anh), Ủy ban Chứng khoán Nhà nước (Việt Nam)</td><td>Cơ quan nhà nước có <b>quyền pháp lý</b> buộc doanh nghiệp tuân thủ, quy định chuẩn mực nào được dùng, xử phạt</td></tr>
<tr><td>Tổ chức phối hợp</td><td>IOSCO</td><td>Hiệp hội các cơ quan quản lý chứng khoán; thúc đẩy chuẩn mực quản lý thống nhất, không trực tiếp ban hành chuẩn mực kế toán</td></tr>
</tbody></table>
<p>Ví dụ, SEC chấp nhận US GAAP cho doanh nghiệp Mỹ và chấp nhận IFRS (do IASB ban hành) cho doanh nghiệp nước ngoài niêm yết tại Mỹ. Việt Nam hiện dùng chủ yếu chuẩn mực kế toán Việt Nam (VAS), với lộ trình áp dụng IFRS tự nguyện.</p>

<h4>Hệ quả của việc có nhiều hệ thống chuẩn mực</h4>
<p>${t('ifrs', 'IFRS')} được dùng ở hơn 140 khu vực pháp lý; ${t('usgaap', 'US GAAP')} dùng ở Mỹ. Hai bộ chuẩn mực đã tiến lại gần nhau nhưng <b>vẫn còn khác biệt</b>, ảnh hưởng trực tiếp đến tỷ số. Một vài ví dụ bạn sẽ gặp lại:</p>
<table class="plain"><thead><tr><th>Vấn đề</th><th>IFRS</th><th>US GAAP</th><th>Module</th></tr></thead><tbody>
<tr><td>Chi phí phát triển (development)</td><td>Vốn hóa khi đủ điều kiện</td><td>Thường ghi chi phí</td><td>FSA-02, FSA-03</td></tr>
<tr><td>Phương pháp LIFO cho tồn kho</td><td>Không được dùng</td><td>Được dùng</td><td>FSA-06</td></tr>
<tr><td>Đánh giá lại tài sản cố định</td><td>Được chọn mô hình đánh giá lại</td><td>Chỉ mô hình giá gốc</td><td>FSA-07</td></tr>
<tr><td>Lãi vay đã trả trên báo cáo lưu chuyển tiền tệ</td><td>CFO hoặc CFF</td><td>CFO</td><td>FSA-04</td></tr>
</tbody></table>
<div class="key">Hệ quả phân tích: khi so sánh doanh nghiệp theo IFRS với doanh nghiệp theo US GAAP (hoặc VAS), nhà phân tích phải <b>nhận diện khác biệt</b> và <b>điều chỉnh về cùng cơ sở</b> nếu khác biệt trọng yếu, trước khi so sánh tỷ số. Ngay trong cùng một chuẩn mực, các lựa chọn và ước tính khác nhau cũng làm giảm tính so sánh.</div>
<p>Thêm một rủi ro: nhiều công ty công bố ${t('nongaap', 'chỉ tiêu phi chuẩn mực (non-GAAP / alternative performance measures)')} như "EBITDA điều chỉnh". Cơ quan quản lý yêu cầu công bố kèm chỉ tiêu theo chuẩn mực gần nhất và bảng đối chiếu, nhưng nhà phân tích vẫn phải xem các khoản bị loại ra có thật sự không lặp lại không.</p>

<h4>Vì sao phải theo dõi chuẩn mực mới</h4>
<p>Chuẩn mực thay đổi có thể làm <b>thay đổi con số mà kinh tế thực chất không đổi</b>. Ví dụ: IFRS 16 (từ 2019) đưa hầu hết hợp đồng thuê lên bảng cân đối, làm nợ và EBITDA của hãng hàng không, bán lẻ tăng mạnh. IFRS 18 (hiệu lực từ năm 2027) thay đổi cách trình bày báo cáo kết quả kinh doanh với các tổng phụ bắt buộc mới. Nhà phân tích theo dõi bằng cách:</p>
<ul>
<li>Đọc website và dự thảo (exposure draft) của IASB, FASB; theo dõi thông báo của cơ quan quản lý.</li>
<li>Đọc phần thuyết minh về <b>chuẩn mực đã ban hành nhưng chưa có hiệu lực</b> và ảnh hưởng dự kiến mà doanh nghiệp công bố.</li>
<li>Khi chuẩn mực thay đổi, kiểm tra doanh nghiệp có <b>điều chỉnh hồi tố</b> số liệu năm trước không, để tránh so sánh "táo với cam" qua thời gian.</li>
</ul>`,
    },
    {
      title: '7. Nguồn thông tin khác ngoài báo cáo năm và giữa kỳ',
      minutes: 8,
      html: `
<p>Báo cáo năm và ${t('interim', 'báo cáo giữa kỳ (interim reports)')} là nguồn cốt lõi, nhưng chậm (công bố sau khi kỳ kết thúc vài tuần đến vài tháng) và chỉ nhìn từ phía doanh nghiệp. Nhà phân tích bổ sung bằng:</p>
<table class="plain"><thead><tr><th>Nhóm</th><th>Ví dụ</th><th>Dùng để</th></tr></thead><tbody>
<tr><td>Từ chính doanh nghiệp</td><td>Thông cáo kết quả kinh doanh, ${t('call', 'hội nghị công bố kết quả (earnings call)')}, tài liệu trình bày nhà đầu tư, website, tài liệu đại hội cổ đông</td><td>Nghe ban điều hành giải thích, hỏi đáp trực tiếp, nắm hướng dẫn kết quả</td></tr>
<tr><td>Ngành và vĩ mô</td><td>Báo cáo hiệp hội ngành, số liệu thống kê, ngân hàng trung ương, tổ chức quốc tế</td><td>Đặt doanh nghiệp vào chu kỳ ngành và kinh tế</td></tr>
<tr><td>Bên thứ ba</td><td>Báo cáo của công ty chứng khoán, tổ chức xếp hạng tín nhiệm, báo chí, mạng xã hội</td><td>So sánh quan điểm, phát hiện tin tức sớm</td></tr>
<tr><td>Tự thu thập</td><td>Phỏng vấn nhà cung cấp, khách hàng, đối thủ; thăm nhà máy, cửa hàng</td><td>Kiểm chứng câu chuyện của ban điều hành</td></tr>
<tr><td>${t('altdata', 'Dữ liệu thay thế (alternative data)')}</td><td>Ảnh vệ tinh bãi đỗ xe, lượt truy cập web, lượt tải ứng dụng, dữ liệu giao dịch thẻ</td><td>Ước tính doanh thu <b>trước khi</b> BCTC công bố</td></tr>
</tbody></table>
<p class="warn">Thông tin từ bên thứ ba và mạng xã hội có chất lượng không đồng đều. Luôn đánh giá <b>độ tin cậy, tính kịp thời và chi phí</b> của từng nguồn. Ngoài ra, chỉ được dùng thông tin công khai hoặc tự phân tích; dùng thông tin trọng yếu chưa công bố là vi phạm Standards (xem Ethics).</p>`,
    },
    {
      title: '8. Khung phân tích báo cáo tài chính 6 bước',
      minutes: 13,
      html: `
<p>Mọi nhiệm vụ phân tích, từ đánh giá một khoản vay đến định giá một vụ sáp nhập, đều đi theo ${t('framework', 'khung 6 bước')}. Đề thi thường mô tả một việc cụ thể và hỏi nó thuộc bước nào, hoặc hỏi đầu ra của một bước.</p>
<table class="plain"><thead><tr><th>Bước</th><th>Việc chính</th><th>Đầu ra điển hình</th></tr></thead><tbody>
<tr><td><b>1. Xác định mục tiêu và bối cảnh</b> (articulate purpose and context)</td><td>Phân tích để trả lời câu hỏi gì, cho ai, định dạng nào, thời hạn và nguồn lực bao nhiêu</td><td>Danh sách câu hỏi cần trả lời, kế hoạch và thời hạn</td></tr>
<tr><td><b>2. Thu thập dữ liệu</b> (collect data)</td><td>Lấy BCTC, thông tin ngành, vĩ mô; phỏng vấn ban điều hành, nhà cung cấp, khách hàng; đi thực địa</td><td>BCTC và dữ liệu đã sắp xếp, ghi chú phỏng vấn</td></tr>
<tr><td><b>3. Xử lý dữ liệu</b> (process data)</td><td>Điều chỉnh BCTC (ví dụ đưa về cùng chuẩn mực), tính tỷ số, lập ${t('commonsize', 'báo cáo quy mô chung (common-size)')}, biểu đồ, dự báo, phân tích thống kê</td><td>BCTC điều chỉnh, bảng tỷ số, biểu đồ, dự báo</td></tr>
<tr><td><b>4. Phân tích và diễn giải</b> (analyze/interpret)</td><td>Dùng dữ liệu đã xử lý để trả lời câu hỏi ở bước 1, đi đến kết luận</td><td>Kết luận, khuyến nghị (mua/bán, cho vay hay không, hạng tín nhiệm)</td></tr>
<tr><td><b>5. Báo cáo kết luận</b> (develop and communicate conclusions)</td><td>Viết báo cáo, trình bày cho đúng đối tượng, tuân thủ Code and Standards</td><td>Báo cáo phân tích, bài trình bày</td></tr>
<tr><td><b>6. Theo dõi, cập nhật</b> (follow-up)</td><td>Thu thập thông tin mới định kỳ, lặp lại các bước khi cần</td><td>Báo cáo cập nhật, khuyến nghị được điều chỉnh</td></tr>
</tbody></table>
<p class="tip"><b>Phân biệt bước 3 và bước 4:</b> tính tỷ số, lập bảng common-size, điều chỉnh số liệu là <b>xử lý</b>. Giải thích vì sao tỷ số thay đổi và đưa ra khuyến nghị mới là <b>phân tích, diễn giải</b>. Tính ra một con số chưa phải là phân tích.</p>
<div class="example"><div class="ex-h">Ví dụ 8.1</div>
<p>Chị Lan là chuyên viên tín dụng. Lần lượt chị: (a) xác nhận với trưởng phòng là cần đề xuất có cho vay 50 tỷ đồng trong 5 năm hay không, hạn nộp 2 tuần; (b) tải BCTC 5 năm và gặp giám đốc tài chính; (c) điều chỉnh để loại khoản lãi bán tài sản không lặp lại, tính hệ số khả năng trả lãi; (d) kết luận dòng tiền đủ trả nợ trong kịch bản xấu, đề xuất cho vay kèm cam kết tỷ lệ nợ; (e) trình hội đồng tín dụng; (f) mỗi quý xem lại BCTC quý. Ghép với 6 bước.</p>
<details><summary>Xem lời giải</summary>
<p>(a) Bước 1, (b) bước 2, (c) bước 3, (d) bước 4, (e) bước 5, (f) bước 6. Chú ý (c) dù có "điều chỉnh" và "tính" vẫn là xử lý dữ liệu; chỉ đến (d) mới có kết luận.</p></details></div>`,
    },
    {
      title: '9. Tóm tắt và bẫy thường gặp',
      minutes: 5,
      html: `
<table class="plain"><thead><tr><th>Tình huống</th><th>Nhớ</th></tr></thead><tbody>
<tr><td>Vai trò của phân tích BCTC</td><td>Hỗ trợ quyết định kinh tế. Không phải lập báo cáo, không phải bảo đảm tuân thủ</td></tr>
<tr><td>Thuyết minh và MD&amp;A</td><td>Thuyết minh được kiểm toán; MD&amp;A thì không</td></tr>
<tr><td>10-K, 10-Q, 8-K, proxy</td><td>Năm, quý (chưa kiểm toán), sự kiện bất thường, đại hội cổ đông và thù lao</td></tr>
<tr><td>Ý kiến kiểm toán</td><td>Trọng yếu nhưng không lan tỏa: ngoại trừ. Trọng yếu và lan tỏa: trái ngược (sai sót) hoặc từ chối (thiếu bằng chứng)</td></tr>
<tr><td>Bảo đảm của kiểm toán</td><td>Hợp lý, không tuyệt đối. Ban điều hành chịu trách nhiệm lập BCTC</td></tr>
<tr><td>IASB, FASB và SEC</td><td>IASB, FASB soạn chuẩn mực; SEC, ESMA có quyền cưỡng chế</td></tr>
<tr><td>So sánh IFRS với US GAAP</td><td>Nhận diện khác biệt và điều chỉnh trước khi so sánh tỷ số</td></tr>
<tr><td>Chuẩn mực mới</td><td>Con số đổi dù kinh tế không đổi; đọc thuyết minh về chuẩn mực chưa hiệu lực</td></tr>
<tr><td>Khung 6 bước</td><td>Mục tiêu, thu thập, xử lý, phân tích, báo cáo, cập nhật. Tính tỷ số là bước 3</td></tr>
</tbody></table>
<p>Tiếp theo: tab <b>Luyện tập</b> 10 câu (rút ngẫu nhiên từ ngân hàng 30 câu, mỗi lần làm một bộ khác), rồi sang FSA-02 Analyzing Income Statements.</p>`,
    },
  ];

  const glossary = {
    finreport: ['Financial reporting', 'Lập báo cáo tài chính', 'Quá trình doanh nghiệp ghi nhận và trình bày thông tin tài chính cho người dùng bên ngoài theo chuẩn mực.'],
    fsa: ['Financial statement analysis', 'Phân tích báo cáo tài chính', 'Dùng BCTC và thông tin khác để đánh giá kết quả, tình hình, triển vọng và rủi ro nhằm ra quyết định kinh tế.'],
    filing: ['Regulatory filings', 'Hồ sơ nộp cơ quan quản lý', 'Báo cáo định kỳ và bất thường mà công ty niêm yết phải nộp, ví dụ 10-K, 10-Q, 8-K ở Mỹ.'],
    bs: ['Statement of financial position (balance sheet)', 'Bảng cân đối kế toán', 'Tài sản, nợ phải trả và vốn chủ sở hữu tại một thời điểm.'],
    is: ['Income statement and statement of comprehensive income', 'Báo cáo kết quả kinh doanh và thu nhập toàn diện', 'Doanh thu, chi phí, lợi nhuận và thu nhập toàn diện khác trong một thời kỳ.'],
    sce: ['Statement of changes in equity', 'Báo cáo thay đổi vốn chủ sở hữu', 'Giải thích biến động từng cấu phần vốn chủ trong kỳ.'],
    cfs: ['Statement of cash flows', 'Báo cáo lưu chuyển tiền tệ', 'Dòng tiền vào ra từ hoạt động kinh doanh, đầu tư và tài chính trong kỳ.'],
    accrual: ['Accrual accounting', 'Kế toán dồn tích', 'Ghi nhận doanh thu khi thực hiện nghĩa vụ và chi phí khi phát sinh, không phụ thuộc thời điểm thu chi tiền.'],
    notes: ['Notes to financial statements', 'Thuyết minh báo cáo tài chính', 'Phần không tách rời của BCTC, được kiểm toán: chính sách, ước tính, chi tiết khoản mục, nghĩa vụ tiềm tàng.'],
    segment: ['Segment reporting', 'Thông tin bộ phận', 'Số liệu doanh thu, lợi nhuận, tài sản theo mảng kinh doanh hoặc khu vực địa lý.'],
    mda: ["Management's Discussion and Analysis (MD&A)", 'Thảo luận và phân tích của ban điều hành', 'Phần ban điều hành giải thích kết quả, thanh khoản, xu hướng và ước tính quan trọng; không được kiểm toán.'],
    liquidity: ['Liquidity and capital resources', 'Thanh khoản và nguồn vốn', 'Khả năng đáp ứng nhu cầu tiền ngắn hạn và các nguồn tài trợ của doanh nghiệp.'],
    crit: ['Critical accounting estimates', 'Ước tính kế toán quan trọng', 'Ước tính đòi hỏi nhiều xét đoán và có thể làm thay đổi trọng yếu kết quả, ví dụ suy giảm giá trị, dự phòng.'],
    audit: ['Independent audit', 'Kiểm toán độc lập', 'Kiểm tra độc lập để đưa ra ý kiến về việc BCTC có trình bày hợp lý theo chuẩn mực hay không.'],
    reasonable: ['Reasonable assurance', 'Bảo đảm hợp lý', 'Mức bảo đảm cao nhưng không tuyệt đối mà kiểm toán cung cấp.'],
    material: ['Materiality', 'Trọng yếu', 'Thông tin trọng yếu nếu việc bỏ sót hoặc sai lệch có thể ảnh hưởng đến quyết định của người dùng.'],
    unqual: ['Unqualified (unmodified) opinion', 'Ý kiến chấp nhận toàn phần', 'BCTC trình bày hợp lý trên các khía cạnh trọng yếu; ý kiến sạch.'],
    qual: ['Qualified opinion', 'Ý kiến ngoại trừ', 'BCTC hợp lý ngoại trừ một vấn đề trọng yếu nhưng không lan tỏa.'],
    adverse: ['Adverse opinion', 'Ý kiến trái ngược', 'BCTC có sai sót trọng yếu và lan tỏa, không trình bày hợp lý.'],
    disclaim: ['Disclaimer of opinion', 'Từ chối đưa ra ý kiến', 'Kiểm toán viên không thu thập đủ bằng chứng và ảnh hưởng có thể trọng yếu, lan tỏa.'],
    kam: ['Key audit matters (KAM)', 'Vấn đề kiểm toán trọng yếu', 'Những vấn đề kiểm toán viên đánh giá là quan trọng nhất, cần nhiều xét đoán; theo chuẩn mực kiểm toán quốc tế.'],
    cam: ['Critical audit matters (CAM)', 'Vấn đề kiểm toán then chốt', 'Khái niệm tương tự KAM theo PCAOB tại Mỹ.'],
    goingc: ['Going concern', 'Hoạt động liên tục', 'Giả định doanh nghiệp tiếp tục hoạt động trong tương lai gần; bất định trọng yếu phải được nêu riêng.'],
    icfr: ['Internal control over financial reporting', 'Kiểm soát nội bộ đối với BCTC', 'Quy trình bảo đảm BCTC đáng tin cậy; công ty niêm yết lớn ở Mỹ có ý kiến kiểm toán riêng về phần này.'],
    setter: ['Standard-setting body', 'Tổ chức lập chuẩn mực', 'Tổ chức chuyên môn soạn chuẩn mực kế toán (IASB, FASB), không có quyền cưỡng chế.'],
    regulator: ['Regulatory authority', 'Cơ quan quản lý', 'Cơ quan nhà nước có quyền pháp lý buộc tuân thủ yêu cầu báo cáo (SEC, ESMA, UBCKNN).'],
    ifrs: ['International Financial Reporting Standards (IFRS)', 'Chuẩn mực BCTC quốc tế', 'Bộ chuẩn mực do IASB ban hành, dùng ở hơn 140 khu vực pháp lý.'],
    usgaap: ['US GAAP', 'Nguyên tắc kế toán Mỹ', 'Bộ chuẩn mực do FASB ban hành, bắt buộc với doanh nghiệp Mỹ niêm yết.'],
    nongaap: ['Non-GAAP / alternative performance measures', 'Chỉ tiêu phi chuẩn mực', 'Chỉ tiêu do doanh nghiệp tự định nghĩa (ví dụ EBITDA điều chỉnh), không theo chuẩn mực.'],
    interim: ['Interim reports', 'Báo cáo giữa kỳ', 'Báo cáo quý hoặc bán niên, thường chỉ được soát xét, không kiểm toán.'],
    call: ['Earnings call', 'Hội nghị công bố kết quả', 'Buổi ban điều hành trình bày kết quả và trả lời câu hỏi của nhà phân tích.'],
    altdata: ['Alternative data', 'Dữ liệu thay thế', 'Dữ liệu ngoài nguồn truyền thống như ảnh vệ tinh, lưu lượng web, giao dịch thẻ.'],
    framework: ['Financial statement analysis framework', 'Khung phân tích BCTC', 'Sáu bước: mục tiêu, thu thập, xử lý, phân tích và diễn giải, báo cáo, cập nhật.'],
    commonsize: ['Common-size statements', 'Báo cáo quy mô chung', 'Biểu diễn mỗi khoản mục theo % của doanh thu hoặc tổng tài sản để so sánh.'],
  };

  const practice = [
    { q: 'Bước đầu tiên của khung phân tích báo cáo tài chính là:', choices: ['Xác định mục tiêu và bối cảnh phân tích', 'Thu thập dữ liệu', 'Xử lý dữ liệu'], answer: 0, explain: 'Phải biết cần trả lời câu hỏi gì, cho ai, trong thời hạn nào rồi mới biết cần dữ liệu gì. Thu thập và xử lý là bước 2 và 3.' },
    { q: 'Nhà phân tích điều chỉnh BCTC của một công ty theo IFRS để so sánh với đối thủ theo US GAAP, rồi lập bảng tỷ số và báo cáo common-size. Việc này thuộc bước:', choices: ['Thu thập dữ liệu', 'Xử lý dữ liệu', 'Phân tích và diễn giải dữ liệu'], answer: 1, explain: 'Điều chỉnh, tính tỷ số, lập common-size là xử lý dữ liệu (bước 3). Phân tích và diễn giải (bước 4) là dùng kết quả đó để trả lời câu hỏi và đi đến kết luận. Thu thập là lấy BCTC và thông tin.' },
    { q: 'So với nhà phân tích cổ phiếu, nhà phân tích tín dụng thường tập trung nhiều hơn vào:', choices: ['Tiềm năng tăng trưởng lợi nhuận dài hạn', 'Giá thị trường so với giá trị nội tại của cổ phiếu', 'Khả năng tạo đủ dòng tiền để trả lãi và gốc đúng hạn'], answer: 2, explain: 'Chủ nợ chỉ nhận lãi và gốc cố định nên quan tâm khả năng trả nợ và rủi ro xấu nhất. Tăng trưởng lợi nhuận dài hạn và so sánh giá thị trường với giá trị nội tại là trọng tâm của nhà đầu tư cổ phiếu, người hưởng phần lợi nhuận tăng thêm.' },
    { q: 'Kiểm toán viên kết luận rằng BCTC có sai sót trọng yếu và ảnh hưởng lan tỏa đến toàn bộ báo cáo. Ý kiến kiểm toán phù hợp là:', choices: ['Ý kiến ngoại trừ (qualified)', 'Từ chối đưa ra ý kiến (disclaimer)', 'Ý kiến trái ngược (adverse)'], answer: 2, explain: 'Sai sót trọng yếu và lan tỏa thì ý kiến trái ngược. Ngoại trừ dùng khi vấn đề trọng yếu nhưng không lan tỏa. Từ chối dùng khi không thu thập được đủ bằng chứng, không phải khi đã xác định có sai sót.' },
    { q: 'Nhà phân tích muốn đọc giải thích của ban điều hành về nguyên nhân biên lợi nhuận giảm, các xu hướng đã biết và ước tính kế toán quan trọng. Nguồn phù hợp nhất là:', choices: ['MD&A trong báo cáo năm', 'Báo cáo của kiểm toán viên', 'Proxy statement'], answer: 0, explain: 'MD&A là nơi ban điều hành giải thích kết quả, thanh khoản, xu hướng và ước tính quan trọng. Báo cáo kiểm toán chỉ đưa ý kiến về BCTC. Proxy statement chủ yếu về bầu HĐQT, thù lao lãnh đạo và vấn đề biểu quyết.' },
    { q: 'Tại Mỹ, BCTC theo quý, thường chỉ được soát xét chứ chưa kiểm toán, được nộp trong:', choices: ['Form 10-K', 'Form 10-Q', 'Form 8-K'], answer: 1, explain: '10-Q là báo cáo quý. 10-K là báo cáo năm có BCTC đã kiểm toán. 8-K dùng để công bố sự kiện trọng yếu bất thường như sáp nhập, thay kiểm toán viên.' },
    { q: 'Phần "key audit matters" trong báo cáo kiểm toán:', choices: ['Nêu những vấn đề kiểm toán viên đánh giá là quan trọng nhất, cần nhiều xét đoán trong cuộc kiểm toán', 'Liệt kê các sai sót mà doanh nghiệp đã sửa trước khi công bố', 'Thay thế cho ý kiến kiểm toán khi có giới hạn phạm vi'], answer: 0, explain: 'KAM (hay CAM ở Mỹ) mô tả các vấn đề cần nhiều xét đoán như suy giảm lợi thế thương mại, doanh thu hợp đồng dài hạn. Nó không phải danh sách sai sót đã sửa và không thay thế ý kiến kiểm toán.' },
    { q: 'Khi so sánh tỷ số của một công ty theo IFRS với một công ty theo US GAAP, cách làm phù hợp nhất là:', choices: ['So sánh trực tiếp vì cả hai đều là chuẩn mực chất lượng cao', 'Chỉ dùng số liệu dòng tiền vì dòng tiền không chịu ảnh hưởng của chuẩn mực', 'Nhận diện khác biệt chuẩn mực trọng yếu và điều chỉnh về cùng cơ sở trước khi so sánh'], answer: 2, explain: 'Hai chuẩn mực vẫn còn khác biệt (chi phí phát triển, LIFO, đánh giá lại tài sản...). Phương án "chỉ dùng số liệu dòng tiền" sai vì ngay cả cách phân loại dòng tiền, ví dụ lãi vay đã trả, cũng khác nhau giữa IFRS và US GAAP.' },
    { q: 'Tổ chức nào có quyền pháp lý buộc doanh nghiệp niêm yết tuân thủ yêu cầu báo cáo tài chính?', choices: ['IASB', 'SEC', 'FASB'], answer: 1, explain: 'SEC là cơ quan quản lý nhà nước, có quyền cưỡng chế. IASB và FASB là tổ chức lập chuẩn mực, soạn ra IFRS và US GAAP nhưng không có quyền cưỡng chế.' },
    { q: 'Nguồn thông tin nào giúp nhà phân tích ước tính doanh thu quý của một chuỗi bán lẻ trước khi công ty công bố báo cáo giữa kỳ?', choices: ['Dữ liệu giao dịch thẻ và lượt truy cập website', 'Thuyết minh về chính sách kế toán trong báo cáo năm trước', 'Ý kiến kiểm toán năm trước'], answer: 0, explain: 'Dữ liệu thay thế (alternative data) như giao dịch thẻ, lưu lượng web phản ánh doanh số gần thời gian thực. Thuyết minh chính sách kế toán và ý kiến kiểm toán năm trước là thông tin quá khứ, không cho biết doanh thu quý hiện tại.' },
    { q: "Nhà phân tích viết báo cáo khuyến nghị, trình bày trước hội đồng đầu tư và rà soát để bảo đảm báo cáo tuân thủ Code and Standards. Việc này thuộc bước nào của khung phân tích?", choices: ["Phân tích và diễn giải dữ liệu", "Xây dựng và trình bày kết luận", "Theo dõi, cập nhật"], answer: 1, explain: "Viết báo cáo, trình bày cho đúng đối tượng và tuân thủ Code and Standards là bước 5 (develop and communicate conclusions). \"Phân tích và diễn giải\" là bước 4, nơi kết luận được hình thành chứ chưa trình bày. \"Theo dõi, cập nhật\" là bước 6, diễn ra sau khi báo cáo đã phát hành." },
    { q: "Sau khi cấp khoản vay, mỗi quý chuyên viên tín dụng đọc BCTC mới, so với dự báo ban đầu và điều chỉnh xếp hạng nội bộ của khách hàng khi cần. Việc này thuộc bước:", choices: ["Thu thập dữ liệu", "Xử lý dữ liệu", "Theo dõi, cập nhật"], answer: 2, explain: "Thu thập thông tin mới định kỳ và lặp lại phân tích để điều chỉnh kết luận là bước 6 (follow-up). \"Thu thập dữ liệu\" và \"Xử lý dữ liệu\" là bước 2 và 3 của lần phân tích ban đầu; ở đây chúng được lặp lại như một phần của việc theo dõi, nên mô tả đầy đủ nhất là bước theo dõi, cập nhật." },
    { q: "Đầu ra điển hình của bước \"xác định mục tiêu và bối cảnh\" trong khung phân tích BCTC là:", choices: ["Danh sách câu hỏi cần trả lời, định dạng báo cáo, thời hạn và nguồn lực", "Bộ BCTC đã điều chỉnh và bảng tỷ số", "Khuyến nghị mua, bán hoặc cho vay"], answer: 0, explain: "Bước 1 xác định cần trả lời câu hỏi gì, cho ai, theo định dạng và thời hạn nào. \"BCTC đã điều chỉnh và bảng tỷ số\" là đầu ra của bước 3 (xử lý dữ liệu). \"Khuyến nghị\" là đầu ra của bước 4 (phân tích và diễn giải)." },
    { q: "Phát biểu nào mô tả chính xác nhất vai trò của phân tích báo cáo tài chính?", choices: ["Bảo đảm doanh nghiệp tuân thủ đúng chuẩn mực kế toán", "Dùng thông tin tài chính và thông tin khác để hỗ trợ quyết định kinh tế", "Lập và trình bày bốn báo cáo tài chính chính"], answer: 1, explain: "Phân tích BCTC dùng thông tin để đánh giá kết quả quá khứ, tình hình hiện tại và triển vọng, phục vụ quyết định như đầu tư, cho vay. \"Bảo đảm tuân thủ chuẩn mực\" là việc của kiểm toán và cơ quan quản lý. \"Lập và trình bày BCTC\" là financial reporting, trách nhiệm của ban điều hành." },
    { q: "Phát biểu nào về thuyết minh báo cáo tài chính (notes) là chính xác nhất?", choices: ["Thuyết minh là một phần không tách rời của BCTC và được kiểm toán cùng các báo cáo", "Thuyết minh là thông tin bổ sung tự nguyện và không được kiểm toán", "Thuyết minh chỉ bắt buộc trong báo cáo quý"], answer: 0, explain: "Thuyết minh nêu chính sách kế toán, ước tính quan trọng, chi tiết khoản mục, nghĩa vụ tiềm tàng, thông tin bộ phận và được kiểm toán cùng BCTC. Lựa chọn \"tự nguyện, không được kiểm toán\" nhầm thuyết minh với MD&A. Thuyết minh bắt buộc cả trong báo cáo năm, không chỉ báo cáo quý." },
    { q: "Phát biểu nào về phần bình luận của ban điều hành (MD&A) là chính xác nhất?", choices: ["MD&A được kiểm toán viên đưa ra ý kiến cùng với BCTC", "Theo IFRS, MD&A là bắt buộc theo chính chuẩn mực IFRS", "MD&A không được kiểm toán, nên nhà phân tích cần kiểm chứng với số liệu trong BCTC"], answer: 2, explain: "MD&A không được kiểm toán và ban điều hành có động cơ trình bày tích cực, nên cần đối chiếu với BCTC đã kiểm toán. Lựa chọn \"được kiểm toán\" sai vì ý kiến kiểm toán chỉ bao trùm BCTC và thuyết minh. Theo IFRS, bình luận của ban điều hành chỉ được khuyến khích (IFRS Practice Statement), không bắt buộc bởi chính IFRS; SEC mới là nơi yêu cầu MD&A trong 10-K và 10-Q." },
    { q: "Hai hãng vận tải có cùng đội xe nhưng chi phí khấu hao chênh lệch lớn. Nhà phân tích tìm thông tin về phương pháp và thời gian khấu hao của từng hãng ở đâu?", choices: ["Thuyết minh về chính sách kế toán trong BCTC", "Phần key audit matters của báo cáo kiểm toán", "Form 8-K"], answer: 0, explain: "Phương pháp khấu hao, thời gian sử dụng ước tính nằm trong thuyết minh về chính sách kế toán và tài sản cố định. Key audit matters chỉ nêu các vấn đề cần nhiều xét đoán của cuộc kiểm toán, không trình bày chính sách khấu hao. Form 8-K dùng công bố sự kiện trọng yếu bất thường." },
    { q: "Tại Mỹ, nhà đầu tư muốn biết thù lao của các lãnh đạo cấp cao và danh sách ứng viên HĐQT trước đại hội cổ đông sẽ tìm trong:", choices: ["Form 10-Q", "Proxy statement (DEF 14A)", "Form 4"], answer: 1, explain: "Proxy statement gửi cổ đông trước đại hội, trình bày thù lao lãnh đạo, ứng viên HĐQT, cổ đông lớn và các vấn đề biểu quyết. Form 10-Q là báo cáo quý. Form 4 báo cáo giao dịch cổ phiếu của người nội bộ, không trình bày thù lao và bầu HĐQT." },
    { q: "Một công ty niêm yết tại Mỹ thông báo thay đổi công ty kiểm toán giữa quý. Thông tin này nhiều khả năng được nộp lên SEC trong:", choices: ["Form 8-K", "Form 10-Q của quý đó", "Form S-1"], answer: 0, explain: "Thay đổi kiểm toán viên là sự kiện trọng yếu bất thường, công bố kịp thời qua Form 8-K. Chờ đến Form 10-Q là quá chậm vì 10-Q là báo cáo định kỳ. Form S-1 là hồ sơ đăng ký phát hành chứng khoán, ví dụ khi IPO." },
    { q: "Tại Mỹ, giao dịch mua bán cổ phiếu của giám đốc và thành viên HĐQT công ty được báo cáo trong:", choices: ["Form 20-F", "Proxy statement (DEF 14A)", "Form 4"], answer: 2, explain: "Forms 3, 4, 5 báo cáo sở hữu và giao dịch của người nội bộ; Form 4 dùng cho thay đổi sở hữu. Form 20-F là báo cáo năm của doanh nghiệp nước ngoài niêm yết tại Mỹ. Proxy statement trình bày cổ đông lớn và thù lao nhưng không phải nơi báo cáo từng giao dịch của người nội bộ." },
    { q: "Kiểm toán viên không được tiếp cận phần lớn sổ sách kế toán của công ty và không thu thập được đủ bằng chứng cho hầu hết các khoản mục. Ý kiến kiểm toán phù hợp nhất là:", choices: ["Ý kiến ngoại trừ (qualified)", "Từ chối đưa ra ý kiến (disclaimer)", "Ý kiến trái ngược (adverse)"], answer: 1, explain: "Thiếu bằng chứng và ảnh hưởng có thể lan tỏa ra toàn bộ BCTC thì kiểm toán viên từ chối đưa ra ý kiến. Ngoại trừ chỉ phù hợp khi vấn đề giới hạn ở một khoản mục, không lan tỏa. Trái ngược dùng khi kiểm toán viên đã xác định được sai sót trọng yếu và lan tỏa, còn ở đây kiểm toán viên không đủ cơ sở để kết luận." },
    { q: "Kiểm toán viên phát hiện công ty ghi nhận sai giá trị một khoản đầu tư; sai sót trọng yếu nhưng chỉ giới hạn ở khoản mục này, các phần khác của BCTC trình bày hợp lý. Ý kiến kiểm toán phù hợp nhất là:", choices: ["Ý kiến trái ngược (adverse)", "Ý kiến chấp nhận toàn phần (unqualified)", "Ý kiến ngoại trừ (qualified)"], answer: 2, explain: "Sai sót trọng yếu nhưng không lan tỏa dẫn đến ý kiến ngoại trừ. Trái ngược chỉ dùng khi sai sót vừa trọng yếu vừa lan tỏa đến toàn bộ BCTC. Chấp nhận toàn phần không phù hợp vì đã có sai sót trọng yếu chưa được sửa." },
    { q: "Kiểm toán viên kết luận BCTC trình bày hợp lý trên các khía cạnh trọng yếu, nhưng có bất định trọng yếu về khả năng hoạt động liên tục và công ty đã thuyết minh đầy đủ. Báo cáo kiểm toán nhiều khả năng:", choices: ["Đưa ra ý kiến trái ngược vì công ty có thể phá sản", "Vẫn là ý kiến chấp nhận toàn phần, kèm một đoạn riêng về bất định trọng yếu liên quan đến hoạt động liên tục", "Từ chối đưa ra ý kiến vì tương lai không chắc chắn"], answer: 1, explain: "Bất định về hoạt động liên tục được nêu trong một đoạn riêng, kể cả khi ý kiến vẫn là chấp nhận toàn phần, nếu BCTC trình bày hợp lý và thuyết minh đầy đủ. Ý kiến trái ngược chỉ dùng khi có sai sót trọng yếu và lan tỏa. Từ chối đưa ra ý kiến dùng khi thiếu bằng chứng, không phải khi tương lai không chắc chắn." },
    { q: "Phát biểu nào về kiểm toán độc lập là chính xác nhất?", choices: ["Kiểm toán bảo đảm tuyệt đối rằng BCTC không có sai sót", "Kiểm toán cung cấp bảo đảm hợp lý rằng BCTC không có sai sót trọng yếu, còn ban điều hành chịu trách nhiệm lập BCTC", "Kiểm toán viên chịu trách nhiệm lập BCTC và lựa chọn chính sách kế toán"], answer: 1, explain: "Kiểm toán kiểm tra theo mẫu và dựa vào trọng yếu, nên chỉ cho bảo đảm hợp lý, không tuyệt đối. Trách nhiệm lập BCTC và chọn chính sách kế toán thuộc về ban điều hành; kiểm toán viên chỉ đưa ý kiến về BCTC đó." },
    { q: "Vai trò của IOSCO được mô tả chính xác nhất là:", choices: ["Ban hành chuẩn mực IFRS", "Cơ quan nhà nước có quyền cưỡng chế doanh nghiệp niêm yết ở EU", "Hiệp hội các cơ quan quản lý chứng khoán, thúc đẩy chuẩn mực quản lý thống nhất giữa các nước"], answer: 2, explain: "IOSCO là tổ chức của các cơ quan quản lý chứng khoán, thúc đẩy quản lý thống nhất, không trực tiếp ban hành chuẩn mực kế toán. IFRS do IASB ban hành. Cơ quan có quyền cưỡng chế ở cấp EU là ESMA cùng các cơ quan quản lý quốc gia, không phải IOSCO." },
    { q: "Một chuẩn mực mới đưa phần lớn hợp đồng thuê lên bảng cân đối, khiến tổng nợ phải trả của một chuỗi bán lẻ tăng mạnh dù hoạt động kinh doanh không đổi. Cách hiểu phù hợp nhất của nhà phân tích là:", choices: ["Rủi ro kinh tế thực chất của công ty đã tăng mạnh", "Bỏ qua thay đổi vì chuẩn mực mới không ảnh hưởng tỷ số", "Con số báo cáo thay đổi dù kinh tế thực chất không đổi; cần kiểm tra số liệu năm trước có được điều chỉnh hồi tố để so sánh nhất quán không"], answer: 2, explain: "Thay đổi chuẩn mực (như IFRS 16) có thể làm thay đổi con số mà kinh tế thực chất không đổi, nên phải so sánh trên cùng cơ sở. Kết luận \"rủi ro kinh tế tăng mạnh\" nhầm thay đổi trình bày với thay đổi thực chất. \"Bỏ qua\" sai vì nợ và EBITDA thay đổi làm các tỷ số đòn bẩy, khả năng trả lãi thay đổi." },
    { q: "Nhà phân tích muốn biết ảnh hưởng dự kiến của một chuẩn mực đã ban hành nhưng chưa có hiệu lực lên BCTC của công ty. Nguồn phù hợp nhất là:", choices: ["Thuyết minh BCTC về chuẩn mực mới đã ban hành nhưng chưa áp dụng", "Phần key audit matters của báo cáo kiểm toán", "Form 4"], answer: 0, explain: "Doanh nghiệp phải công bố chuẩn mực đã ban hành nhưng chưa áp dụng và ảnh hưởng dự kiến trong thuyết minh. Key audit matters mô tả vấn đề cần nhiều xét đoán trong cuộc kiểm toán năm hiện tại. Form 4 báo cáo giao dịch của người nội bộ." },
    { q: "Một công ty nhấn mạnh chỉ tiêu \"EBITDA điều chỉnh\" trong thông cáo kết quả kinh doanh. Phát biểu nào chính xác nhất?", choices: ["Chỉ tiêu này được kiểm toán và có thể so sánh trực tiếp giữa các công ty", "Cơ quan quản lý cấm công bố mọi chỉ tiêu phi chuẩn mực", "Đây là chỉ tiêu phi chuẩn mực; cơ quan quản lý yêu cầu đối chiếu với chỉ tiêu chuẩn mực gần nhất, và nhà phân tích phải xem các khoản bị loại ra có thật sự không lặp lại không"], answer: 2, explain: "Chỉ tiêu non-GAAP được phép công bố nhưng phải kèm chỉ tiêu theo chuẩn mực gần nhất và bảng đối chiếu. Lựa chọn \"được kiểm toán, so sánh trực tiếp\" sai vì mỗi công ty tự định nghĩa khoản điều chỉnh. Lựa chọn \"cấm công bố\" sai vì cơ quan quản lý chỉ đặt điều kiện, không cấm." },
    { q: "Hai công ty giống hệt nhau chi cùng số tiền cho phát triển sản phẩm, và chi phí này thỏa mãn điều kiện vốn hóa theo IFRS. Công ty X áp dụng IFRS, công ty Y áp dụng US GAAP. Trong năm phát sinh, nhiều khả năng:", choices: ["Công ty X báo cáo tổng tài sản và lợi nhuận cao hơn công ty Y", "Công ty Y báo cáo tổng tài sản cao hơn công ty X", "Hai công ty báo cáo cùng lợi nhuận vì dòng tiền chi ra như nhau"], answer: 0, explain: "Theo IFRS, chi phí phát triển được vốn hóa khi đủ điều kiện, nên công ty X ghi tài sản vô hình và chi phí năm đầu thấp hơn. Theo US GAAP, chi phí phát triển thường ghi vào chi phí ngay, nên công ty Y có tài sản và lợi nhuận thấp hơn. Dòng tiền chi ra như nhau nhưng lợi nhuận dồn tích khác nhau, đây là lý do phải điều chỉnh trước khi so sánh." },
    { q: "Ban điều hành một công ty sản xuất tuyên bố nhu cầu sản phẩm đang tăng mạnh. Cách nào giúp nhà phân tích kiểm chứng tuyên bố này một cách độc lập nhất?", choices: ["Đọc lại phần MD&A của báo cáo quý gần nhất", "Phỏng vấn nhà cung cấp, khách hàng và đối thủ của công ty", "Nghe lại earnings call của chính công ty"], answer: 1, explain: "Thông tin tự thu thập từ nhà cung cấp, khách hàng, đối thủ là nguồn độc lập với ban điều hành, giúp kiểm chứng câu chuyện của họ. MD&A và earnings call đều do chính ban điều hành trình bày, nên không độc lập để kiểm chứng tuyên bố của ban điều hành." },
  ];

  window.LESSONS['FSA-01'] = {
    moduleId: 'FSA-01',
    calculator: 'Không cần máy tính',
    warmup: [
      'Bạn đã bao giờ mở báo cáo thường niên của một công ty niêm yết chưa? Theo bạn, phần nào dài nhất?',
      'Nếu bạn là ngân hàng định cho một công ty vay, bạn muốn xem ba con số nào đầu tiên?',
      'Theo bạn, vì sao báo cáo tài chính cần được kiểm toán bởi một công ty độc lập?',
    ],
    sections,
    glossary,
    practice,
    widgets: {},
    slides: [],
    wrapup: [
      'Kể lại 6 bước của khung phân tích và cho mỗi bước một ví dụ việc làm cụ thể.',
      'Lập bảng 4 loại ý kiến kiểm toán theo hai tiêu chí: trọng yếu và lan tỏa.',
      'Nêu hai khác biệt IFRS và US GAAP mà bạn sẽ gặp lại trong các module FSA tiếp theo.',
    ],
  };
}());
