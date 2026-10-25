// Bài giảng ET-04 - Guidance for Standard II: Integrity of Capital Markets (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t } = window.CFAH;

  const sections = [
    {
      title: '1. Bức tranh lớn',
      minutes: 6,
      html: `
<p>Standard I (ET-03) nói về <b>bản thân người hành nghề</b>: hiểu luật, độc lập, trung thực, không làm điều sai trái. Standard II mở rộng tầm nhìn ra <b>cả thị trường</b>:</p>
<div class="key">Thị trường vốn chỉ vận hành tốt khi mọi nhà đầu tư tin rằng mình đang chơi trên một sân chơi công bằng. Standard II cấm hai hành vi phá hoại niềm tin đó: <b>giao dịch dựa trên thông tin nội bộ</b> (II(A)) và <b>thao túng thị trường</b> (II(B)).</div>
<table class="plain"><thead><tr><th>Chuẩn</th><th>Cấm điều gì</th><th>Câu hỏi then chốt</th></tr></thead><tbody>
<tr><td>II(A) Material Nonpublic Information</td><td>Hành động hoặc khiến người khác hành động dựa trên thông tin trọng yếu chưa công bố</td><td>Thông tin có <b>trọng yếu</b> không? Đã <b>công khai</b> chưa?</td></tr>
<tr><td>II(B) Market Manipulation</td><td>Làm méo giá hoặc thổi phồng khối lượng giao dịch nhằm đánh lừa</td><td>Có <b>ý định đánh lừa</b> người tham gia thị trường không?</td></tr>
</tbody></table>
<p>Ba LOS của module giống nhau cho mọi module Guidance (ET-03 đến ET-09):</p>
<ol>
  <li><b>Áp dụng</b> Code và Standards vào tình huống cụ thể (các phần 4 và 7).</li>
  <li><b>Đề xuất</b> thực hành và quy trình để phòng ngừa vi phạm (các phần 5 và 7).</li>
  <li><b>Nhận diện</b> hành vi tuân thủ và hành vi vi phạm (mọi phần, nhất là phần 8).</li>
</ol>
<p class="tip"><b>Cách học module này:</b> mỗi chuẩn có một "bộ lọc" vài câu hỏi. Gặp tình huống, đi qua bộ lọc theo thứ tự rồi mới kết luận. Đừng học thuộc kết luận của từng ví dụ, hãy học <b>lý do</b>.</p>`,
    },
    {
      title: '2. II(A): thế nào là "trọng yếu" và "chưa công bố"',
      minutes: 16,
      html: `
<div class="key"><b>II(A) Material Nonpublic Information:</b> người hành nghề (Member và Candidate) đang nắm thông tin trọng yếu chưa công bố, có thể ảnh hưởng đến giá trị một khoản đầu tư, thì <b>không được hành động</b> và <b>không được khiến người khác hành động</b> dựa trên thông tin đó.</div>
<p>Chuẩn chỉ bị vi phạm khi thông tin thỏa <b>cả hai</b> điều kiện. Thiếu một trong hai thì không phải là ${t('mnpi', 'thông tin trọng yếu chưa công bố (MNPI)')}.</p>
<h4>a) Trọng yếu (${t('material', 'material')})</h4>
<p>Thông tin là trọng yếu nếu (1) công bố nó ra sẽ có khả năng <b>làm giá chứng khoán thay đổi</b>, hoặc (2) một ${t('reasonable', 'nhà đầu tư hợp lý (reasonable investor)')} sẽ muốn biết nó trước khi ra quyết định đầu tư.</p>
<p>Ví dụ thường gặp: kết quả kinh doanh trước khi công bố, kế hoạch sáp nhập hoặc mua lại, thay đổi cổ tức, sản phẩm mới hoặc phát hiện mới (mỏ, thuốc), kiện tụng lớn, thay đổi lãnh đạo chủ chốt, mất hoặc giành được hợp đồng lớn, đình công, vấn đề thanh khoản hay khả năng trả nợ.</p>
<p>Ba yếu tố làm thông tin <b>càng trọng yếu hơn</b>:</p>
<ul>
<li><b>Độ cụ thể</b>: "doanh thu quý 3 giảm 30%" trọng yếu hơn "quý này hơi khó khăn".</li>
<li><b>Độ tin cậy của nguồn</b>: giám đốc tài chính nói trọng yếu hơn tin đồn trên diễn đàn. Tin đồn chưa kiểm chứng từ nguồn không rõ thường <b>ít</b> trọng yếu.</li>
<li><b>Mức độ tác động lên giá</b>: thông tin ảnh hưởng nhỏ so với quy mô doanh nghiệp thì có thể không trọng yếu.</li>
</ul>
<p>Thông tin trọng yếu không nhất thiết đến từ công ty phát hành. Một <b>lệnh mua bán lớn sắp được đặt</b> của một quỹ, hay một <b>báo cáo của chuyên gia nổi tiếng sắp phát hành</b>, cũng có thể làm giá biến động.</p>
<h4>b) Chưa công bố (${t('nonpublic', 'nonpublic')})</h4>
<p>Thông tin vẫn là chưa công bố cho đến khi nó được ${t('dissem', 'phổ biến rộng rãi (disseminated)')} ra thị trường nói chung, ví dụ qua thông cáo báo chí, công bố trên trang của sở giao dịch, đăng tải trên website công ty kèm thông báo rộng rãi. Thông tin chỉ được chia sẻ cho <b>một nhóm chọn lọc</b> nhà đầu tư thì vẫn là chưa công bố.</p>
<ul>
<li>Thông tin nói trong ${t('confcall', 'cuộc gọi với chuyên viên phân tích (analyst conference call)')} mà chưa được công bố rộng rãi thì <b>chưa phải</b> là thông tin công khai.</li>
<li>Khi công ty ${t('selective', 'công bố có chọn lọc (selective disclosure)')} cho một số nhà phân tích hay cổ đông lớn, những người nghe được đang nắm MNPI.</li>
<li>Thông tin gửi riêng cho một nhóm nhỏ qua mạng xã hội, nhóm chat kín, cũng không phải là công bố rộng rãi.</li>
</ul>
<div class="example"><div class="ex-h">Ví dụ 2.1</div>
<p>Giám đốc tài chính của công ty X mời 10 cổ đông lớn nhất dự buổi gặp riêng và cho biết công nhân sẽ đình công vào thứ Sáu tới. Chuyên viên phân tích Hạnh có mặt, về văn phòng liền đổi khuyến nghị cổ phiếu X từ "mua" sang "bán". Hạnh có vi phạm II(A) không?</p>
<details><summary>Xem lời giải</summary><p><b>Có vi phạm.</b> Đình công sắp xảy ra là thông tin cụ thể, từ nguồn đáng tin cậy, có khả năng tác động lên giá: <b>trọng yếu</b>. Thông tin mới chỉ nói cho 10 cổ đông: <b>chưa công bố</b>. Đổi khuyến nghị là "hành động" dựa trên thông tin. Cách đúng là đề nghị công ty công bố rộng rãi và chờ đến khi thông tin công khai.</p></details></div>
<p class="warn"><b>Bẫy:</b> chuẩn cấm cả <b>hành động</b> (mua, bán, đổi khuyến nghị) lẫn <b>khiến người khác hành động</b> (mách bạn bè, gợi ý người thân, nói bóng gió). Chỉ "nắm" thông tin thì không vi phạm; vi phạm xảy ra khi dùng nó.</p>`,
    },
    {
      title: '3. Mosaic theory và các tình huống đặc biệt',
      minutes: 14,
      html: `
<h4>a) ${t('mosaic', 'Lý thuyết bức tranh ghép (mosaic theory)')}</h4>
<p>Người phân tích giỏi thường đi đến kết luận mà công chúng chưa biết. Điều đó <b>không</b> vi phạm II(A), miễn là kết luận được ghép từ các mảnh hợp lệ:</p>
<div class="formula">Thông tin công khai + thông tin chưa công bố nhưng KHÔNG trọng yếu + kỹ năng phân tích → kết luận được phép dùng</div>
<p>Kết luận cuối cùng có thể rất trọng yếu (ví dụ dự báo công ty sẽ cắt cổ tức), nhưng vì mỗi mảnh đầu vào đều hợp lệ nên người phân tích được dùng nó để khuyến nghị và giao dịch.</p>
<p>Ví dụ các mảnh hợp lệ: báo cáo tài chính đã công bố, số liệu ngành, đếm số xe tải ra vào nhà máy, phỏng vấn nhà cung cấp và khách hàng về tình hình chung, quan sát giá cả trong cửa hàng. Mỗi mảnh riêng lẻ đều không đủ để làm giá thay đổi.</p>
<p class="tip"><b>Khuyến nghị:</b> lưu lại toàn bộ tài liệu nghiên cứu để chứng minh kết luận đến từ quá trình ghép mảnh hợp lệ. Việc này nối với chuẩn V(C) Record Retention (ET-07).</p>
<h4>b) Mạng xã hội và nguồn trực tuyến</h4>
<p>Thông tin trên mạng xã hội chỉ là công khai khi nó được công bố cho thị trường nói chung. Một bài đăng trong nhóm kín 50 người của lãnh đạo công ty không phải là công bố rộng rãi. Người hành nghề phải kiểm tra nguồn gốc và mức độ phổ biến trước khi dùng.</p>
<h4>c) Mạng lưới chuyên gia (${t('expert', 'expert network')})</h4>
<p>Dùng chuyên gia trong ngành để hiểu về công nghệ, xu hướng là hợp lệ. Nhưng nếu chuyên gia (ví dụ nhân viên một công ty dược) tiết lộ kết quả thử nghiệm lâm sàng chưa công bố, người nghe đang nắm MNPI và không được hành động. Người hành nghề nên đặt câu hỏi trước để tránh nhận thông tin như vậy.</p>
<h4>d) Báo cáo của chuyên viên phân tích nổi tiếng</h4>
<p>Báo cáo của một chuyên gia rất có uy tín có thể làm giá biến động, tức là "trọng yếu" theo nghĩa rộng. Tuy vậy, chuyên viên phân tích <b>không phải</b> người nội bộ của công ty; kết luận đến từ thông tin công khai và công sức phân tích do khách hàng trả tiền. Vì vậy chuyên viên được phép phân phối báo cáo cho khách hàng mà không phải công bố cho toàn thị trường. Người ngoài muốn có thì tự phân tích hoặc trở thành khách hàng.</p>
<p class="warn"><b>Bẫy:</b> nhân viên <b>cùng công ty</b> biết trước nội dung báo cáo sắp phát hành và giao dịch trước khi khách hàng nhận được thì vẫn có thể vi phạm (II(A) và III(B) Fair Dealing). Điểm mấu chốt là thời điểm và đối tượng được biết.</p>
<div class="example"><div class="ex-h">Ví dụ 3.1</div>
<p>Chuyên viên Long theo dõi một chuỗi bán lẻ. Anh đếm lượng khách tại 20 cửa hàng trong 4 tuần, đối chiếu với số liệu thẻ tín dụng mua từ nhà cung cấp dữ liệu (dữ liệu tổng hợp, ẩn danh) và báo cáo ngành. Anh kết luận doanh thu quý sẽ thấp hơn kỳ vọng thị trường nhiều và khuyến nghị bán. Long có vi phạm không?</p>
<details><summary>Xem lời giải</summary><p><b>Không vi phạm.</b> Mỗi nguồn là công khai hoặc không trọng yếu khi đứng riêng; dữ liệu được mua hợp pháp. Kết luận là sản phẩm của mosaic theory. Long nên lưu lại số liệu và cách phân tích.</p></details></div>`,
    },
    {
      title: '4. II(A) trong các tình huống: vi phạm hay không?',
      minutes: 16,
      html: `
<p>Bộ lọc ba bước khi gặp tình huống II(A):</p>
<ol>
<li>Thông tin có <b>trọng yếu</b> không (cụ thể, nguồn tin cậy, tác động lên giá)?</li>
<li>Thông tin đã được <b>công bố rộng rãi</b> chưa?</li>
<li>Người đó có <b>hành động</b> hoặc <b>khiến người khác hành động</b> không?</li>
</ol>
<div class="example"><div class="ex-h">Ví dụ 4.1 - Tin nhắn từ bạn cũ</div>
<p>Nhà giao dịch Khoa nhận tin nhắn từ một người bạn lâu năm làm ở công ty phần mềm Y: "Hai ngày nữa bên mình công bố lợi nhuận vượt xa kỳ vọng." Khoa lập tức đặt lệnh mua cổ phiếu Y.</p>
<details><summary>Xem lời giải</summary><p><b>Vi phạm.</b> Lợi nhuận sắp công bố là cụ thể, đến từ người trong công ty, đủ làm giá tăng: trọng yếu. Chưa công bố. Khoa đã hành động. Quan hệ bạn bè hay việc "chưa chắc đúng" không thay đổi kết luận.</p></details></div>
<div class="example"><div class="ex-h">Ví dụ 4.2 - Nghe lỏm trong văn phòng</div>
<p>Quản lý quỹ Trang tham gia cuộc gọi trên loa ngoài với ban lãnh đạo công ty Z, trong đó lãnh đạo hé lộ dự báo lợi nhuận bị hạ mạnh và chưa công bố. Trong lúc gọi, vài nhân viên môi giới đi ra vào phòng, nghe được và sau đó bán cổ phiếu Z cho khách.</p>
<details><summary>Xem lời giải</summary><p>Các nhân viên môi giới <b>vi phạm</b>: họ hành động dựa trên MNPI dù chỉ "vô tình" nghe được. Trang cũng thiếu thận trọng: lẽ ra phải đóng cửa, không bật loa ngoài, và báo ngay cho bộ phận tuân thủ để công ty đưa cổ phiếu Z vào danh sách hạn chế.</p></details></div>
<div class="example"><div class="ex-h">Ví dụ 4.3 - Trước buổi phỏng vấn truyền hình</div>
<p>Chuyên viên Mai chuẩn bị lên truyền hình để công bố việc hạ khuyến nghị cổ phiếu từ "mua" xuống "bán". Trong lúc chờ, cô kể trước nội dung cho người dẫn chương trình. Người dẫn bán ngay số cổ phiếu mình đang có.</p>
<details><summary>Xem lời giải</summary><p>Khuyến nghị của một chuyên gia lên sóng truyền hình có thể làm giá biến động: trọng yếu; khi chưa phát sóng thì chưa công bố. Người dẫn chương trình hành động trên MNPI. Mai đã <b>khiến người khác hành động</b> khi tiết lộ trước, nên Mai cũng có vấn đề với II(A). Cách đúng: chỉ trao đổi nội dung chung, không tiết lộ thay đổi khuyến nghị trước giờ phát sóng.</p></details></div>
<div class="example"><div class="ex-h">Ví dụ 4.4 - Ứng viên phỏng vấn nói hớ</div>
<p>Trong buổi phỏng vấn tuyển chuyên viên, ứng viên Bình (đang làm ở một ngân hàng đầu tư) kể rằng ngân hàng của anh đang tư vấn một thương vụ sáp nhập giữa hai công ty, thương vụ chưa công bố. Người phỏng vấn là An, quản lý tài sản. An đã từng nghe tin đồn về thương vụ này. An nên làm gì?</p>
<details><summary>Xem lời giải</summary><p>Tin đồn trước đó không làm thông tin trở nên công khai; lời của người đang trực tiếp làm thương vụ khiến thông tin trở nên <b>cụ thể và đáng tin</b>. An đang nắm MNPI. An <b>không được</b> giao dịch (kể cả "chờ một ngày cho tin lan ra"), <b>không được</b> báo cho các quản lý khác để "khách hàng khỏi thiệt". Việc đúng là báo bộ phận tuân thủ và đưa cổ phiếu liên quan vào ${t('restricted', 'danh sách hạn chế (restricted list)')}.</p></details></div>
<div class="example"><div class="ex-h">Ví dụ 4.5 - Thông tin đã công bố nhưng thị trường chưa phản ứng kịp</div>
<p>Lúc 9h15, công ty K đăng thông cáo báo chí trên trang của sở giao dịch về việc trúng một hợp đồng lớn. Lúc 9h20, quản lý quỹ Duy đọc được và mua cổ phiếu K trước khi giá tăng nhiều.</p>
<details><summary>Xem lời giải</summary><p><b>Không vi phạm.</b> Thông tin đã được phổ biến cho thị trường nói chung. Phản ứng nhanh hơn người khác với thông tin công khai là kỹ năng, không phải lợi thế không công bằng.</p></details></div>
<p class="warn"><b>Bẫy:</b> "tôi sẽ đợi một ngày rồi mới giao dịch" không làm thông tin trở thành công khai. Thông tin chỉ thành công khai khi <b>được công bố</b>, không phải khi thời gian trôi qua.</p>`,
    },
    {
      title: '5. II(A): khuyến nghị tuân thủ',
      minutes: 10,
      html: `
<h4>a) Với cá nhân người hành nghề</h4>
<ul>
<li>Khi lỡ nắm MNPI: <b>không hành động</b>, báo ngay cho bộ phận tuân thủ hoặc pháp chế.</li>
<li>Nỗ lực hợp lý để công ty phát hành <b>công bố rộng rãi</b> thông tin (ví dụ đề nghị công ty ra thông cáo). Nếu đang làm việc cho công ty phát hành thì khuyến khích công ty công bố.</li>
<li>Khuyến khích công ty mình có quy trình phòng ngừa lạm dụng MNPI.</li>
</ul>
<h4>b) Với công ty: ${t('firewall', 'tường lửa thông tin (firewall / information barrier)')}</h4>
<p>Tường lửa ngăn dòng thông tin từ bộ phận có MNPI (ví dụ ngân hàng đầu tư, tư vấn M&A) sang bộ phận có thể giao dịch hoặc khuyến nghị (môi giới, phân tích, tự doanh). Các yếu tố tối thiểu:</p>
<ul>
<li><b>Kiểm soát chặt giao tiếp giữa các bộ phận</b> qua một đầu mối trung gian (clearance area), thường là bộ phận tuân thủ hoặc pháp chế.</li>
<li><b>Rà soát giao dịch của nhân viên</b>: phê duyệt trước, nhận bản sao xác nhận giao dịch, báo cáo định kỳ.</li>
<li>Duy trì các danh sách: ${t('watch', 'danh sách theo dõi (watch list)')}, danh sách hạn chế (restricted list) và ${t('rumor', 'danh sách tin đồn (rumor list)')}.</li>
<li><b>Giám sát và hạn chế ${t('prop', 'giao dịch tự doanh (proprietary trading)')}</b> khi công ty đang nắm MNPI.</li>
<li>Tách biệt vật lý các bộ phận, hạn chế nhân sự kiêm nhiệm hai bên tường lửa.</li>
</ul>
<p class="warn"><b>Bẫy:</b> cấm <b>hoàn toàn</b> tự doanh mỗi khi nắm MNPI chưa chắc là tốt, vì việc đột ngột ngừng giao dịch một mã cũng là <b>tín hiệu</b> cho thị trường. Khi đó công ty có thể chỉ nhận vị thế đối ứng với các ${t('unsol', 'lệnh khách hàng tự đặt (unsolicited)')}, đồng thời ghi chép lại.</p>
<h4>c) Văn bản và đào tạo</h4>
<p>Chính sách bằng văn bản, đào tạo định kỳ cho nhân viên về thế nào là MNPI và phải làm gì khi nhận được. Công ty nhỏ không cần cấu trúc phức tạp nhưng vẫn cần quy trình phù hợp với quy mô. Lưu hồ sơ các trường hợp đã xử lý.</p>
<div class="example"><div class="ex-h">Ví dụ 5.1</div>
<p>Bộ phận M&A của công ty chứng khoán S đang tư vấn cho công ty T về một đợt chào mua. Nhân viên phòng phân tích đang viết báo cáo về T. Công ty S nên làm gì?</p>
<details><summary>Xem lời giải</summary><p>Đưa T vào danh sách theo dõi (nội bộ, chỉ bộ phận tuân thủ biết) để giám sát giao dịch, hoặc danh sách hạn chế khi cần cấm nhân viên giao dịch và cấm phát hành khuyến nghị mới; mọi trao đổi giữa M&A và phân tích phải đi qua bộ phận tuân thủ; tự doanh về T bị giám sát.</p></details></div>`,
    },
    {
      title: '6. II(B): thao túng thị trường',
      minutes: 12,
      html: `
<div class="key"><b>II(B) Market Manipulation:</b> người hành nghề không được tham gia các hoạt động <b>làm méo giá</b> hoặc <b>thổi phồng giả tạo khối lượng giao dịch</b> với <b>ý định đánh lừa</b> người tham gia thị trường.</div>
<p>Chuẩn áp dụng cho mọi loại tài sản: cổ phiếu, trái phiếu, phái sinh, hàng hóa, tiền mã hóa. Có hai dạng:</p>
<h4>a) ${t('infomanip', 'Thao túng bằng thông tin (information-based)')}</h4>
<ul>
<li>Tung tin đồn sai sự thật, khuyến nghị sai lệch có chủ đích để làm giá lên hoặc xuống.</li>
<li>Kiểu kinh điển là ${t('pump', 'thổi giá rồi bán (pump and dump)')}: mua trước, tung tin tốt trên mạng xã hội, diễn đàn, rồi bán khi giá tăng.</li>
<li>Phát tán báo cáo phóng đại, thông tin gây hiểu lầm về công ty để có lợi cho vị thế của mình.</li>
</ul>
<h4>b) ${t('transmanip', 'Thao túng bằng giao dịch (transaction-based)')}</h4>
<ul>
<li>Giao dịch tạo ấn tượng giả về giá hoặc mức độ sôi động. Ví dụ ${t('wash', 'giao dịch giả (wash trading)')}: mua và bán qua lại giữa các tài khoản cùng chủ, không thay đổi sở hữu thực.</li>
<li>Giao dịch dồn dập cuối phiên để làm đẹp giá đóng cửa.</li>
<li>Thâu tóm vị thế chi phối một công cụ (ví dụ gom phần lớn lượng trái phiếu giao được của một hợp đồng tương lai) để ép giá công cụ đó hoặc công cụ phái sinh liên quan.</li>
</ul>
<h4>c) Ý định là chìa khóa</h4>
<p>Nhiều giao dịch hợp pháp vẫn làm giá và khối lượng thay đổi: một quỹ lớn mua nhiều, chiến lược khai thác chênh lệch giá, bán để ghi nhận lỗ cho mục đích thuế, tạo lập thị trường. Những hoạt động này <b>không vi phạm</b>, vì không có ý định đánh lừa.</p>
<div class="formula">Vi phạm II(B) = làm méo giá hoặc khối lượng + ý định đánh lừa thị trường</div>
<p class="warn"><b>Bẫy:</b> kết quả thao túng không cần thành công. Đã có hành vi và ý định đánh lừa thì đã vi phạm, kể cả khi giá không nhúc nhích.</p>
<p class="tip"><b>Phân biệt nhanh với II(A):</b> II(A) là lợi dụng thông tin <b>thật</b> mà người khác chưa có. II(B) là tạo ra thông tin <b>giả</b> hoặc giao dịch <b>giả</b> để đánh lừa.</p>`,
    },
    {
      title: '7. II(B) trong các tình huống và khuyến nghị',
      minutes: 10,
      html: `
<div class="example"><div class="ex-h">Ví dụ 7.1 - Chiến dịch tin đồn</div>
<p>Nhà giao dịch Hưng mua một lượng lớn cổ phiếu vốn hóa nhỏ, thanh khoản thấp. Sau đó anh lập nhiều tài khoản ảo đăng bài ca ngợi công ty trên các diễn đàn, đồng thời mua bán qua lại giữa vài tài khoản của mình để khối lượng tăng vọt.</p>
<details><summary>Xem lời giải</summary><p><b>Vi phạm II(B) ở cả hai dạng</b>: tung tin (thông tin) và giao dịch qua lại tạo thanh khoản giả (giao dịch). Mục đích rõ ràng là đánh lừa nhà đầu tư khác.</p></details></div>
<div class="example"><div class="ex-h">Ví dụ 7.2 - Sàn giao dịch "mồi" thanh khoản</div>
<p>Một sở giao dịch ra mắt hợp đồng tương lai trái phiếu mới. Để chứng minh sản phẩm thanh khoản tốt, sở ký thỏa thuận với một số thành viên: cam kết giao dịch tối thiểu một khối lượng trong 3 tháng để được giảm mạnh phí.</p>
<details><summary>Xem lời giải</summary><p><b>Vi phạm.</b> Khối lượng được tạo ra không phản ánh nhu cầu thật mà để đánh lừa nhà đầu tư về thanh khoản. Các thành viên tham gia (nếu là người hành nghề CFA) cũng vi phạm.</p></details></div>
<div class="example"><div class="ex-h">Ví dụ 7.3 - Lệnh mua lớn để "làm đẹp" cho thương vụ</div>
<p>Chủ tịch một ngân hàng chưa niêm yết đang tìm đối tác sáp nhập. Bên mua tiềm năng muốn đợi kết quả kinh doanh kỳ tới (dự kiến kém). Để thúc thương vụ, ông cân nhắc đặt lệnh mua cá nhân 2.000 cổ phiếu, gấp 4 lần khối lượng giao dịch bình quân tuần, nhằm tạo ấn tượng cổ phiếu được săn đón.</p>
<details><summary>Xem lời giải</summary><p><b>Vi phạm II(B).</b> Mục đích của lệnh mua là tạo cảm giác giả về nhu cầu và giá. Ngược lại, ra thông cáo rằng ngân hàng đã thuê tư vấn tìm đối tác, hay tái khẳng định dự báo lợi nhuận đã công bố (sau khi kiểm tra với giám đốc tài chính) là công bố thông tin thật, không vi phạm.</p></details></div>
<div class="example"><div class="ex-h">Ví dụ 7.4 - Bán để ghi nhận lỗ thuế</div>
<p>Cuối năm, quản lý tài sản Vy bán một số cổ phiếu đang lỗ trong tài khoản khách hàng để giảm thuế, sau đó mua lại một cổ phiếu tương tự trong cùng ngành.</p>
<details><summary>Xem lời giải</summary><p><b>Không vi phạm</b> (với điều kiện tuân thủ luật thuế). Mục đích là tối ưu thuế cho khách hàng, không phải đánh lừa thị trường.</p></details></div>
<h4>Khuyến nghị tuân thủ</h4>
<ul>
<li>Trước mỗi chiến lược giao dịch bất thường, tự hỏi: "mục đích chính của giao dịch này là gì, và nếu thị trường biết mục đích đó thì họ có thấy bị lừa không?".</li>
<li>Công ty nên có chính sách bằng văn bản về các hành vi bị cấm (wash trading, tung tin, giao dịch cuối phiên bất thường) và hệ thống giám sát giao dịch.</li>
<li>Kiểm tra nội dung đăng lên mạng xã hội: chỉ nói điều có cơ sở, tách rõ ý kiến với sự thật (nối với V(B), ET-07).</li>
</ul>`,
    },
    {
      title: '8. Tóm tắt và bẫy thường gặp',
      minutes: 6,
      html: `
<table class="plain"><thead><tr><th>Tình huống</th><th>Kết luận</th><th>Lý do</th></tr></thead><tbody>
<tr><td>Giao dịch dựa trên thông tin cụ thể từ người nội bộ, chưa công bố</td><td>Vi phạm II(A)</td><td>Trọng yếu + chưa công bố + hành động</td></tr>
<tr><td>Mách người thân thông tin MNPI, bản thân không giao dịch</td><td>Vi phạm II(A)</td><td>"Khiến người khác hành động"</td></tr>
<tr><td>Kết luận ghép từ thông tin công khai và thông tin không trọng yếu</td><td>Không vi phạm</td><td>Mosaic theory</td></tr>
<tr><td>Nghe trong analyst call, công ty chưa công bố rộng rãi</td><td>Vẫn là MNPI</td><td>Công bố chọn lọc chưa phải công khai</td></tr>
<tr><td>Đợi một ngày rồi mới giao dịch trên MNPI</td><td>Vẫn vi phạm</td><td>Thời gian không làm thông tin thành công khai</td></tr>
<tr><td>Đưa mã vào restricted list, báo tuân thủ</td><td>Cách làm đúng</td><td>Phòng ngừa lạm dụng MNPI</td></tr>
<tr><td>Ngừng toàn bộ tự doanh một mã khi nắm MNPI</td><td>Có thể là tín hiệu</td><td>Có thể chỉ khớp lệnh khách tự đặt</td></tr>
<tr><td>Tung tin tốt sau khi mua, bán khi giá lên</td><td>Vi phạm II(B)</td><td>Pump and dump</td></tr>
<tr><td>Mua bán qua lại giữa tài khoản của mình</td><td>Vi phạm II(B)</td><td>Thanh khoản giả</td></tr>
<tr><td>Bán lỗ để tối ưu thuế, mua lớn theo chiến lược thật</td><td>Không vi phạm</td><td>Không có ý định đánh lừa</td></tr>
</tbody></table>
<p class="warn"><b>Ba bẫy lớn nhất:</b> (1) nghĩ rằng chỉ người nội bộ công ty mới bị II(A) ràng buộc, thực ra <b>bất kỳ ai</b> nắm MNPI đều bị; (2) nghĩ rằng II(B) cần giá thực sự bị đẩy lên, thực ra chỉ cần <b>ý định</b> đánh lừa; (3) nghĩ rằng tin đồn đã nghe trước đó làm thông tin thành công khai.</p>`,
    },
  ];

  const glossary = {
    mnpi: ['Material nonpublic information (MNPI)', 'Thông tin trọng yếu chưa công bố', 'Thông tin có thể làm giá thay đổi và chưa được phổ biến ra thị trường nói chung.'],
    material: ['Material', 'Trọng yếu', 'Công bố ra sẽ ảnh hưởng đến giá, hoặc nhà đầu tư hợp lý muốn biết trước khi quyết định.'],
    reasonable: ['Reasonable investor', 'Nhà đầu tư hợp lý', 'Chuẩn tham chiếu để đánh giá một thông tin có quan trọng với quyết định đầu tư hay không.'],
    nonpublic: ['Nonpublic', 'Chưa công bố', 'Thông tin chưa được phổ biến cho thị trường nói chung, chỉ một nhóm chọn lọc biết.'],
    dissem: ['Dissemination', 'Phổ biến rộng rãi', 'Đưa thông tin đến thị trường nói chung, ví dụ thông cáo báo chí, công bố trên sở giao dịch.'],
    confcall: ['Analyst conference call', 'Cuộc gọi với chuyên viên phân tích', 'Buổi trao đổi giữa công ty và nhà phân tích; nội dung chưa phải công khai nếu chưa công bố rộng rãi.'],
    selective: ['Selective disclosure', 'Công bố có chọn lọc', 'Công ty chỉ chia sẻ thông tin cho một số nhà đầu tư hoặc nhà phân tích.'],
    mosaic: ['Mosaic theory', 'Lý thuyết bức tranh ghép', 'Được dùng kết luận ghép từ thông tin công khai và thông tin chưa công bố nhưng không trọng yếu.'],
    expert: ['Expert network', 'Mạng lưới chuyên gia', 'Dịch vụ kết nối nhà đầu tư với chuyên gia ngành; hợp lệ nếu không nhận MNPI.'],
    restricted: ['Restricted list', 'Danh sách hạn chế', 'Danh sách mã cấm nhân viên giao dịch, thường cấm cả khuyến nghị mới, khi công ty nắm MNPI.'],
    watch: ['Watch list', 'Danh sách theo dõi', 'Danh sách nội bộ (chỉ tuân thủ biết) các mã cần giám sát giao dịch chặt.'],
    rumor: ['Rumor list', 'Danh sách tin đồn', 'Danh sách các mã đang có tin đồn, cần theo dõi giao dịch bất thường.'],
    firewall: ['Firewall / information barrier', 'Tường lửa thông tin', 'Hệ thống ngăn MNPI đi từ bộ phận nắm thông tin sang bộ phận giao dịch, phân tích.'],
    prop: ['Proprietary trading', 'Giao dịch tự doanh', 'Công ty giao dịch bằng tiền của chính mình.'],
    unsol: ['Unsolicited trade', 'Lệnh khách hàng tự đặt', 'Lệnh do khách hàng chủ động đưa ra, không do công ty gợi ý.'],
    infomanip: ['Information-based manipulation', 'Thao túng bằng thông tin', 'Tung tin sai hoặc gây hiểu lầm để tác động lên giá hoặc khối lượng.'],
    transmanip: ['Transaction-based manipulation', 'Thao túng bằng giao dịch', 'Giao dịch tạo ấn tượng giả về giá, khối lượng, hoặc thâu tóm vị thế để ép giá.'],
    pump: ['Pump and dump', 'Thổi giá rồi bán', 'Mua trước, tung tin tốt để giá tăng, rồi bán ra kiếm lời.'],
    wash: ['Wash trading', 'Giao dịch giả', 'Mua bán qua lại không thay đổi sở hữu thực, nhằm tạo khối lượng giả.'],
  };

  const practice = [
    { q: 'Chuyên viên phân tích Lan dự hội thảo ngành. Trong giờ nghỉ, cô nghe giám đốc điều hành công ty M nói với một người bạn rằng M sắp bị cơ quan quản lý phạt rất nặng, chưa công bố. Lan về đổi khuyến nghị M sang "bán". Lan:', choices: ['Vi phạm II(A) vì đã hành động dựa trên thông tin trọng yếu chưa công bố', 'Không vi phạm vì cô nghe được một cách tình cờ, không ai cố ý tiết lộ cho cô', 'Không vi phạm vì đổi khuyến nghị không phải là giao dịch'], answer: 0, explain: 'Thông tin cụ thể, từ người đứng đầu công ty, tác động lớn lên giá, chưa công bố: là MNPI. Cách nhận được (tình cờ) không quan trọng (B sai). Đổi khuyến nghị là một hành động đầu tư và còn khiến khách hàng hành động (C sai).' },
    { q: 'Theo mosaic theory, chuyên viên phân tích được phép đưa ra khuyến nghị dựa trên:', choices: ['Mọi thông tin miễn là chuyên viên không phải người nội bộ của công ty', 'Thông tin công khai kết hợp với thông tin chưa công bố nhưng không trọng yếu', 'Thông tin trọng yếu chưa công bố nếu kết luận đã được kiểm chứng bằng nhiều nguồn'], answer: 1, explain: 'Mosaic theory cho phép ghép thông tin công khai và thông tin chưa công bố không trọng yếu, kể cả khi kết luận cuối cùng là trọng yếu. II(A) áp dụng cho bất kỳ ai nắm MNPI, không chỉ người nội bộ (A sai). Đầu vào đã có MNPI thì không còn là mosaic hợp lệ (C sai).' },
    { q: 'Quản lý quỹ Tuấn biết từ em gái (làm kế toán ở công ty P) rằng P sắp báo lỗ lớn. Tuấn không giao dịch, nhưng gợi ý một người bạn "nên bán P sớm". Tuấn:', choices: ['Không vi phạm vì bản thân không giao dịch', 'Không vi phạm vì người bạn không phải khách hàng của anh', 'Vi phạm II(A) vì đã khiến người khác hành động dựa trên MNPI'], answer: 2, explain: 'II(A) cấm cả hành động lẫn khiến người khác hành động. Việc Tuấn không tự giao dịch (A) hay người nhận không phải khách hàng (B) không thay đổi kết luận.' },
    { q: 'Một ngân hàng đầu tư đang tư vấn M&A cho công ty R. Biện pháp nào phù hợp nhất để ngăn lạm dụng thông tin?', choices: ['Đưa R vào danh sách hạn chế và cho mọi trao đổi giữa bộ phận M&A với phòng phân tích đi qua bộ phận tuân thủ', 'Thông báo cho toàn bộ nhân viên môi giới để họ không khuyến nghị R cho khách hàng', 'Cấm tuyệt đối mọi giao dịch tự doanh với R mà không cần xem xét tín hiệu ra thị trường'], answer: 0, explain: 'Tường lửa gồm kiểm soát giao tiếp qua bộ phận tuân thủ và các danh sách watch/restricted. B làm MNPI lan rộng hơn. C: ngừng hẳn tự doanh có thể là tín hiệu cho thị trường; công ty có thể chỉ khớp lệnh khách hàng tự đặt.' },
    { q: 'Chuyên viên Phong được mời vào cuộc gọi với ban lãnh đạo công ty, nghe được dự báo lợi nhuận mới chưa công bố. Phong hỏi đồng nghiệp: "Nếu tôi đợi đến tuần sau mới giao dịch thì sao?" Câu trả lời đúng nhất:', choices: ['Được, vì sau một tuần thông tin đã cũ và không còn trọng yếu', 'Vẫn vi phạm nếu đến lúc đó thông tin vẫn chưa được công bố rộng rãi', 'Được, nếu Phong chỉ giao dịch khối lượng nhỏ'], answer: 1, explain: 'Thông tin chỉ thành công khai khi được phổ biến cho thị trường, thời gian trôi qua không thay đổi điều đó (A sai). Quy mô giao dịch không làm hành vi hợp lệ (C sai).' },
    { q: 'Hành vi nào ÍT có khả năng vi phạm II(B) nhất?', choices: ['Mua bán qua lại cổ phiếu giữa hai tài khoản của cùng một người để tăng khối lượng', 'Đăng nhiều bài khen ngợi một cổ phiếu vừa mua trên diễn đàn bằng tài khoản ảo', 'Một quỹ lớn mua liên tục một cổ phiếu trong nhiều ngày theo kế hoạch tái cơ cấu danh mục, làm giá tăng'], answer: 2, explain: 'Giao dịch thật theo chiến lược đầu tư thật, dù làm giá tăng, không có ý định đánh lừa nên không vi phạm. A là wash trading, B là thao túng bằng thông tin.' },
    { q: 'Một sở giao dịch giảm phí cho các thành viên cam kết giao dịch tối thiểu một khối lượng trên sản phẩm phái sinh mới, nhằm cho thấy sản phẩm có thanh khoản tốt. Thỏa thuận này:', choices: ['Vi phạm II(B) vì thổi phồng giả tạo khối lượng để đánh lừa thị trường', 'Không vi phạm vì giảm phí là chính sách thương mại bình thường', 'Không vi phạm vì sở giao dịch không giao dịch trực tiếp'], answer: 0, explain: 'Khối lượng được tạo ra không phản ánh nhu cầu thật, với mục đích khiến nhà đầu tư tin sản phẩm thanh khoản. Giảm phí nói chung là bình thường (B), nhưng ở đây gắn với khối lượng giả. Việc không trực tiếp giao dịch không miễn trừ người sắp xếp thỏa thuận (C).' },
    { q: 'Chuyên viên nổi tiếng Hà vừa hoàn thành báo cáo hạ khuyến nghị một cổ phiếu, phân tích hoàn toàn từ thông tin công khai. Báo cáo được gửi cho khách hàng trả phí trước. Phát biểu nào đúng?', choices: ['Hà vi phạm II(A) vì phải công bố báo cáo cho toàn thị trường cùng lúc', 'Hà không vi phạm II(A); khách hàng trả phí được nhận kết quả phân tích của cô', 'Hà vi phạm II(A) vì báo cáo của cô chắc chắn làm giá biến động'], answer: 1, explain: 'Hà không phải người nội bộ, kết luận đến từ thông tin công khai và công sức phân tích, nên được phân phối cho khách hàng. A và C sai vì báo cáo có thể làm giá biến động không biến nó thành MNPI cần công bố rộng rãi.' },
    { q: 'Nhà giao dịch Quân nắm vị thế bán lớn cổ phiếu V. Anh đăng trên mạng xã hội rằng "nghe nói V sắp bị điều tra gian lận", dù không có cơ sở. Quân:', choices: ['Không vi phạm nếu giá V không giảm', 'Không vi phạm vì đó chỉ là ý kiến cá nhân trên mạng xã hội', 'Vi phạm II(B) vì tung tin sai nhằm tác động lên giá'], answer: 2, explain: 'Thao túng bằng thông tin: tung tin không có cơ sở để có lợi cho vị thế. Không cần giá thực sự giảm (A sai). Gọi đó là "ý kiến cá nhân" không thay đổi ý định đánh lừa (B sai).' },
    { q: 'Quản lý quỹ Linh nhận cuộc gọi qua mạng lưới chuyên gia. Chuyên gia (đang làm cho công ty dược D) bắt đầu nói về kết quả thử nghiệm thuốc chưa công bố. Linh nên:', choices: ['Ngừng cuộc trao đổi về nội dung đó, không giao dịch D và báo bộ phận tuân thủ', 'Tiếp tục nghe nhưng chỉ dùng thông tin như một mảnh trong mosaic', 'Giao dịch D ngay vì thông tin đến từ dịch vụ trả phí hợp pháp'], answer: 0, explain: 'Kết quả thử nghiệm chưa công bố là MNPI; Linh phải ngừng, không hành động và báo tuân thủ. Một mảnh MNPI không thể "hòa" vào mosaic (B sai). Dịch vụ hợp pháp không làm thông tin hợp lệ (C sai).' },
  ];

  window.LESSONS['ET-04'] = {
    moduleId: 'ET-04',
    calculator: 'Không cần máy tính',
    warmup: [
      'Nhắc lại: Standard I(B) Independence and Objectivity (ET-03) yêu cầu gì khi nhận quà từ công ty được phân tích?',
      'Kể 5 loại thông tin mà theo bạn có thể làm giá cổ phiếu một công ty thay đổi mạnh.',
      'Theo bạn, một tin đồn trên diễn đàn chứng khoán đã là "thông tin công khai" chưa? Vì sao?',
    ],
    sections,
    glossary,
    practice,
    widgets: {},
    slides: [],
    wrapup: [
      'Nêu bộ lọc ba bước cho II(A) và bộ lọc hai yếu tố cho II(B) mà không nhìn tài liệu.',
      'Giải thích bằng lời của bạn vì sao mosaic theory không mâu thuẫn với II(A).',
      'Liệt kê ít nhất 4 thành phần của một tường lửa thông tin.',
    ],
  };
}());
