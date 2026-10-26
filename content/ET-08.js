// Bài giảng ET-08 - Guidance for Standard VI: Conflicts of Interest (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027 và Standards of Practice Handbook (bản 12). Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t } = window.CFAH;

  const sections = [
    {
      title: '1. Bức tranh lớn',
      minutes: 6,
      html: `
<p>Xung đột lợi ích có ở khắp nơi trong ngành đầu tư: nhà phân tích sở hữu cổ phiếu mình khuyến nghị, công ty môi giới vừa bảo lãnh phát hành vừa viết báo cáo, quản lý quỹ muốn mua cổ phiếu cho mình trước khi mua cho khách hàng, cố vấn nhận tiền "hoa hồng giới thiệu" từ bên thứ ba. Standard VI không cấm việc có xung đột; nó yêu cầu bạn <b>xử lý xung đột đúng cách</b>.</p>
<div class="key">Ba câu hỏi của Standard VI:
<ol>
<li><b>VI(A) Avoid or Disclose Conflicts</b>: có điều gì có thể làm giảm ${t('indep', 'tính độc lập và khách quan')} của tôi không? Nếu có, tránh được thì tránh; không tránh được thì ${t('fullfair', 'công bố đầy đủ và công bằng (full and fair disclosure)')}.</li>
<li><b>VI(B) Priority of Transactions</b>: giao dịch của ai được làm trước? Khách hàng → chủ lao động → bản thân (khi bạn là ${t('beneficial', 'chủ sở hữu hưởng lợi (beneficial owner)')}).</li>
<li><b>VI(C) Referral Fees</b>: tôi có nhận hoặc trả gì cho việc giới thiệu sản phẩm, dịch vụ không? Nếu có, phải công bố cho chủ lao động, khách hàng và khách hàng tiềm năng.</li>
</ol></div>
<p>Cả ba LOS của module (áp dụng chuẩn vào tình huống, đề xuất thủ tục phòng ngừa, nhận diện hành vi tuân thủ và vi phạm) được lồng vào từng phần dưới đây: mỗi chuẩn có nội dung, hướng dẫn, thủ tục khuyến nghị và tình huống mẫu.</p>
<p class="tip"><b>Liên hệ:</b> Standard VI là "người anh em" của I(B) Independence and Objectivity (ET-03), III(A) Loyalty, Prudence, and Care (ET-05) và IV(B) Additional Compensation Arrangements (ET-06). Trong đề thi, một tình huống xung đột lợi ích thường chạm cả hai chuẩn.</p>`,
    },
    {
      title: '2. VI(A) Avoid or Disclose Conflicts: yêu cầu cốt lõi',
      minutes: 16,
      html: `
<p><b>Nội dung chuẩn (diễn đạt lại):</b> thành viên và ứng viên phải <b>tránh</b>, hoặc <b>công bố đầy đủ và công bằng</b>, mọi vấn đề có thể hợp lý được kỳ vọng là làm giảm tính độc lập, khách quan hay cản trở nghĩa vụ của họ với khách hàng, khách hàng tiềm năng và chủ lao động. Việc công bố phải <b>nổi bật</b>, dùng <b>ngôn ngữ dễ hiểu</b> và truyền đạt thông tin một cách hiệu quả.</p>
<h4>Thứ tự xử lý: tránh trước, công bố sau</h4>
<ol>
<li><b>Tránh</b> nếu có thể hợp lý tránh được: không nhận ghế HĐQT gây xung đột, chuyển việc cho đồng nghiệp, bán khoản đầu tư cá nhân, từ chối món quà.</li>
<li><b>Công bố</b> khi không thể tránh hợp lý. Công bố không phải "thủ tục cho có": nếu xung đột nghiêm trọng đến mức công bố không thể bảo vệ lợi ích khách hàng, bạn vẫn phải tránh (ví dụ ngừng viết báo cáo về công ty đó).</li>
</ol>
<h4>Công bố thế nào mới đạt?</h4>
<table class="plain"><thead><tr><th>Tiêu chí</th><th>Ý nghĩa</th><th>Ví dụ không đạt</th></tr></thead><tbody>
<tr><td>Đầy đủ và công bằng</td><td>Đủ thông tin để người nhận tự đánh giá mức độ ảnh hưởng</td><td>Chỉ ghi "công ty có thể có quan hệ với tổ chức phát hành"</td></tr>
<tr><td>${t('prominent', 'Nổi bật (prominent)')}</td><td>Đặt ở chỗ dễ thấy, không bị làm mờ so với phần còn lại</td><td>Chữ nhỏ ở chú thích cuối trang, phụ lục trang 40</td></tr>
<tr><td>${t('plainlang', 'Ngôn ngữ dễ hiểu (plain language)')}</td><td>Câu ngắn, từ thông dụng, không thuật ngữ khó</td><td>Đoạn pháp lý dài đầy thuật ngữ</td></tr>
<tr><td>Đúng người nhận</td><td>Khách hàng, khách hàng tiềm năng <b>và</b> chủ lao động</td><td>Báo sếp nhưng giấu khách hàng (hoặc ngược lại)</td></tr>
</tbody></table>
<h4>Công bố cho chủ lao động</h4>
<p>Thành viên phải cung cấp cho chủ lao động đủ thông tin để họ đánh giá tác động của xung đột, có biện pháp ngăn chặn và được báo kịp thời khi xung đột phát sinh. Chủ lao động có thể yêu cầu bạn tránh hẳn (ví dụ cấm ngồi HĐQT công ty niêm yết), và bạn phải tuân theo.</p>
<div class="example"><div class="ex-h">Ví dụ 2.1 - Bản công bố giấu ở phụ lục</div>
<p>Công ty quản lý quỹ của Lan trả thưởng cho nhân viên bán hàng cao gấp đôi khi bán quỹ "nhà" so với quỹ của đối tác. Thông tin này được ghi ở phụ lục số 7, cỡ chữ 6, trong bản điều khoản 35 trang. Lan có tuân thủ VI(A) không khi tư vấn khách hàng mua quỹ nhà?</p>
<details><summary>Xem lời giải</summary><p>Không. Cơ chế thưởng là xung đột lợi ích phải công bố, và việc công bố phải nổi bật, dễ hiểu. Một dòng chữ nhỏ ở phụ lục không đạt yêu cầu "prominent". Lan nên nói rõ với khách hàng (bằng lời và trong tài liệu chính) rằng cô được thưởng nhiều hơn khi bán quỹ nhà, đồng thời chỉ khuyến nghị quỹ phù hợp với khách hàng (III(C) Suitability).</p></details></div>
<p class="warn"><b>Bẫy:</b> "Đã công bố" chưa chắc là tuân thủ. Đề thi hay cho tình huống công bố mơ hồ, công bố muộn (sau khi khách hàng đã ký) hoặc công bố cho sai đối tượng. Hãy kiểm tra: công bố <b>cái gì</b>, <b>cho ai</b>, <b>khi nào</b>, <b>ở đâu</b>.</p>`,
    },
    {
      title: '3. VI(A): các nguồn xung đột điển hình',
      minutes: 18,
      html: `
<p>Standards of Practice Handbook nêu một số nguồn xung đột hay gặp nhất. Hãy học theo nhóm:</p>
<table class="plain"><thead><tr><th>Nguồn xung đột</th><th>Vì sao là xung đột</th><th>Cách xử lý</th></tr></thead><tbody>
<tr><td><b>Sở hữu chứng khoán</b> của công ty mình khuyến nghị hoặc có trong danh mục khách hàng (của bản thân, gia đình, tài khoản mình là beneficial owner)</td><td>Bạn có lợi khi giá tăng, nên có động cơ khuyến nghị mua</td><td>Công bố trong báo cáo và cho chủ lao động; tuân thủ chính sách giao dịch cá nhân</td></tr>
<tr><td><b>Quan hệ ngân hàng đầu tư</b>: công ty là nhà bảo lãnh, tư vấn M&A, nắm giữ cổ phiếu, tạo lập thị trường</td><td>Áp lực khuyến nghị tích cực để giữ khách hàng IB</td><td>Công bố quan hệ đặc biệt trong báo cáo; tường lửa thông tin</td></tr>
<tr><td><b>Ghế HĐQT</b> ở công ty khác (kể cả tổ chức phi lợi nhuận, không lương)</td><td>Nghĩa vụ với cổ đông của công ty đó có thể va chạm nghĩa vụ với khách hàng; có thể nắm thông tin nội bộ</td><td>Công bố cho chủ lao động, mô tả trách nhiệm; nếu có thù lao thì xin đồng ý theo IV(B)</td></tr>
<tr><td><b>Cơ chế thù lao</b>: hoa hồng, thưởng theo doanh số, phí thành công, quyền chọn cổ phiếu</td><td>Thúc đẩy hành động có lợi ngắn hạn cho bạn, bất lợi dài hạn cho khách hàng</td><td>Công bố mọi cơ chế thù lao, thưởng, hoa hồng đặc biệt</td></tr>
<tr><td><b>Quan hệ cá nhân</b>: người thân làm ở công ty được phân tích, bạn bè điều hành nhà môi giới</td><td>Thiên vị khó nhận ra</td><td>Công bố; nếu nghiêm trọng thì chuyển việc cho người khác</td></tr>
</tbody></table>
<div class="example"><div class="ex-h">Ví dụ 3.1 - Nhà phân tích ở công ty có quan hệ IB lâu năm</div>
<p>Hà là chuyên viên phân tích mới ở một công ty chứng khoán. Bộ phận M&A của công ty đã tư vấn mọi thương vụ cho Tập đoàn Sao Mai suốt 15 năm, và hai lãnh đạo của công ty đang ngồi HĐQT các công ty con của Sao Mai. Hà được giao viết báo cáo về Sao Mai. Cô nên làm gì?</p>
<details><summary>Xem lời giải</summary><p>Hà <b>được viết báo cáo</b>, kể cả đưa ra khuyến nghị, miễn là báo cáo công bố rõ ràng các quan hệ đặc biệt giữa hai công ty (tư vấn M&A, ghế HĐQT). Từ chối viết là không cần thiết; viết mà không nêu ý kiến thì báo cáo vô giá trị. Điều quan trọng là người đọc biết xung đột để tự đánh giá.</p></details></div>
<div class="example"><div class="ex-h">Ví dụ 3.2 - Chồng thừa kế cổ phiếu</div>
<p>Minh Thư đã khuyến nghị mua cổ phiếu KTM. Sau đó chồng cô được thừa kế lượng lớn cổ phiếu KTM. Cô được giao viết báo cáo cập nhật về KTM. Cô cần làm gì?</p>
<details><summary>Xem lời giải</summary><p>Thư có lợi ích (qua chồng, cô được xem là có quyền lợi trong tài sản gia đình) với KTM. Cách đơn giản nhất: công bố việc gia đình sở hữu KTM cho chủ lao động và trong báo cáo cập nhật. Cách khác: đề nghị chuyển việc viết báo cáo cho đồng nghiệp. Chuẩn <b>không bắt buộc</b> chồng cô phải bán cổ phiếu; nếu bán, giao dịch phải tuân thủ chính sách của công ty và không đi trước khuyến nghị.</p></details></div>
<div class="example"><div class="ex-h">Ví dụ 3.3 - Ghế HĐQT không lương</div>
<p>Vũ viết báo cáo về các công ty dược. Anh được mời vào HĐQT không lương của một quỹ từ thiện hỗ trợ nghiên cứu ung thư. Ngoài việc gặp gỡ người mới, anh không nhận lợi ích nào. Anh cần làm gì để tuân thủ VI(A)?</p>
<details><summary>Xem lời giải</summary><p>Vũ nên <b>công bố cho cấp trên</b> việc nhận ghế HĐQT <b>và mô tả trách nhiệm</b> của mình ở đó. Quỹ từ thiện có thể tài trợ hoặc hợp tác với các công ty dược mà anh phân tích, và anh có thể biết thông tin trước thị trường. "Không lương" không có nghĩa là không có xung đột.</p></details></div>
<h4>Thủ tục khuyến nghị (LOS 2)</h4>
<ul>
<li>Công ty có chính sách bằng văn bản về xung đột: danh sách hạn chế (restricted list), tường lửa giữa nghiên cứu và IB, quy trình duyệt ghế HĐQT.</li>
<li>Báo cáo phân tích có mục công bố chuẩn hóa, đặt ở trang đầu hoặc ngay cạnh khuyến nghị.</li>
<li>Nhân viên khai báo định kỳ các khoản sở hữu và vị trí bên ngoài; cập nhật khi có thay đổi.</li>
</ul>`,
    },
    {
      title: '4. VI(B) Priority of Transactions: ai được làm trước',
      minutes: 16,
      html: `
<p><b>Nội dung chuẩn (diễn đạt lại):</b> giao dịch đầu tư cho khách hàng và chủ lao động phải được ưu tiên hơn giao dịch mà thành viên, ứng viên là chủ sở hữu hưởng lợi.</p>
<div class="formula">Khách hàng → Chủ lao động → Cá nhân (beneficial owner)</div>
<h4>Ý tưởng chính</h4>
<ul>
<li>Chuẩn <b>không cấm</b> giao dịch cá nhân. Bạn được kiếm tiền từ đầu tư riêng nếu: (1) khách hàng không bị bất lợi, (2) bạn không hưởng lợi từ giao dịch của khách hàng, và (3) bạn tuân thủ quy định pháp lý liên quan.</li>
<li>${t('beneficial', 'Beneficial owner')}: người thực sự sở hữu, kiểm soát, có quyền chỉ đạo hoặc có lợi ích đáng kể trong chứng khoán. Tài khoản của vợ chồng, con nhỏ, quỹ tín thác cho con, tài khoản bạn góp vốn chung... đều có thể là "giao dịch cá nhân".</li>
<li><b>Tài khoản người thân là khách hàng</b> (trả phí như mọi khách hàng, bạn không có quyền lợi sở hữu): đối xử như mọi khách hàng khác, <b>không ưu tiên và cũng không làm thiệt</b>.</li>
<li>Không được dùng thông tin về giao dịch sắp đặt của khách hàng hoặc khuyến nghị sắp công bố để trục lợi. Mua trước khi khách hàng mua gọi là ${t('frontrun', 'chạy trước lệnh (front-running)')}.</li>
</ul>
<div class="example"><div class="ex-h">Ví dụ 4.1 - Cổ phiếu thanh khoản thấp</div>
<p>Quản lý danh mục Ngọc muốn mua cổ phiếu ít giao dịch XYZ cho khách hàng và cho mình. Lệnh của khách hàng chắc chắn đẩy giá lên; lệnh của cô nhỏ, không ảnh hưởng giá. Khi nào cô được mua cho mình?</p>
<details><summary>Xem lời giải</summary><p><b>Sau khi lệnh của khách hàng đã khớp xong.</b> Mua cùng lúc vẫn có thể làm khách hàng chịu giá xấu hơn; mua trước là front-running. Chuẩn không cấm cô sở hữu cùng cổ phiếu với khách hàng.</p></details></div>
<div class="example"><div class="ex-h">Ví dụ 4.2 - Xếp tài khoản của bố mẹ cuối hàng</div>
<p>Quân quản lý tài khoản hưu trí bố mẹ mở tại công ty (trả phí bình thường, Quân không có quyền lợi). Mỗi khi có IPO hấp dẫn, anh phân bổ cho mọi khách hàng khác trước, phần còn lại mới đưa vào tài khoản bố mẹ "để không ai nói anh thiên vị". Anh có tuân thủ không?</p>
<details><summary>Xem lời giải</summary><p><b>Không.</b> Bố mẹ anh là khách hàng trả phí, phải được đối xử như mọi khách hàng khác (cũng là yêu cầu của III(B) Fair Dealing). Làm thiệt họ chỉ vì quan hệ gia đình là vi phạm. Nếu Quân <b>có</b> quyền lợi sở hữu trong tài khoản đó, tài khoản được xem là giao dịch cá nhân và phải xếp sau khách hàng, kèm thủ tục khai báo của công ty.</p></details></div>
<div class="example"><div class="ex-h">Ví dụ 4.3 - Bán cổ phiếu đang được khuyến nghị mua</div>
<p>Hùng cần bán một phần cổ phiếu ABC cá nhân để đóng học phí cho con, trong khi công ty vừa nâng khuyến nghị ABC lên "mua mạnh". Anh có được bán không?</p>
<details><summary>Xem lời giải</summary><p><b>Được</b>, sau khi báo cho công ty (xin duyệt trước nếu có quy định) và không làm khách hàng bất lợi (ví dụ không bán chen trước lệnh bán của khách hàng). Lý do bán là nhu cầu cá nhân hợp lý, không phải trục lợi từ khuyến nghị. Không cần chờ có khách hàng đặt lệnh mua.</p></details></div>
<div class="example"><div class="ex-h">Ví dụ 4.4 - Nhân viên trẻ mua trước danh sách khuyến nghị</div>
<p>Tú là nhân viên mới, lương thấp, làm việc cho cả phòng nghiên cứu và phòng quản lý đầu tư. Một năm sau anh mua xe thể thao. Điều tra cho thấy anh thường mua cổ phiếu ngay trước khi chúng được đưa vào danh sách "mua" của công ty và chưa bao giờ nộp tờ khai giao dịch cá nhân hằng quý. Tú vi phạm gì?</p>
<details><summary>Xem lời giải</summary><p>Tú vi phạm VI(B): anh dùng thông tin về khuyến nghị sắp công bố để giao dịch trước khách hàng của công ty, và không tuân thủ thủ tục khai báo. Chức vụ thấp không miễn trừ trách nhiệm: chuẩn áp dụng cho mọi thành viên, ứng viên có tiếp cận thông tin giao dịch.</p></details></div>`,
    },
    {
      title: '5. VI(B): thủ tục phòng ngừa cho thành viên và công ty',
      minutes: 12,
      html: `
<p>LOS 2 yêu cầu bạn <b>đề xuất thủ tục</b>. Với VI(B), Handbook nêu các nhóm thủ tục sau:</p>
<table class="plain"><thead><tr><th>Thủ tục</th><th>Nội dung</th></tr></thead><tbody>
<tr><td>Hạn chế tham gia ${t('ipo', 'IPO')}</td><td>Hạn chế hoặc cấm nhân viên mua cổ phiếu IPO; cách đơn giản nhất cho cá nhân là không tham gia IPO. IPO "nóng" phải dành cho khách hàng trước</td></tr>
<tr><td>Hạn chế ${t('privplace', 'phát hành riêng lẻ (private placement)')}</td><td>Giới hạn chặt, cần giám sát; xung đột tương tự IPO (cơ hội được "biếu" để đổi lấy giao dịch sau này)</td></tr>
<tr><td>${t('blackout', 'Thời kỳ cấm giao dịch (blackout period)')}</td><td>Người tham gia ra quyết định đầu tư không được giao dịch cá nhân trong một khoảng thời gian trước (và sau) giao dịch của khách hàng. Độ dài và mức nghiêm tùy quy mô công ty và loại chứng khoán</td></tr>
<tr><td>Thủ tục khai báo</td><td>Gửi bản sao xác nhận giao dịch (duplicate confirmations) cho bộ phận tuân thủ; khai báo các khoản nắm giữ cá nhân và tài khoản beneficial owner khi vào làm và định kỳ</td></tr>
<tr><td>${t('preclear', 'Phê duyệt trước (preclearance)')}</td><td>Nhân viên đầu tư phải xin duyệt trước mỗi giao dịch cá nhân để phát hiện xung đột</td></tr>
<tr><td>Công bố chính sách</td><td>Thông báo cho khách hàng chính sách giao dịch cá nhân của công ty</td></tr>
</tbody></table>
<p class="warn"><b>Bẫy:</b> Handbook <b>không</b> khuyến nghị bắt nhân viên khai báo tài sản của bạn bè, hàng xóm hay mọi người quen. Yêu cầu khai báo chỉ áp dụng cho tài khoản mà nhân viên là beneficial owner (bản thân, vợ chồng, con, tài khoản có quyền lợi). Đề thi hay hỏi "thủ tục nào KHÔNG được khuyến nghị".</p>
<div class="example"><div class="ex-h">Ví dụ 5.1 - Quỹ tín thác của con nhỏ</div>
<p>Chi, ứng viên CFA, làm phân tích ở một công ty cấm nhân viên giao dịch cổ phiếu trong danh sách theo dõi. Cô mua 10 cổ phiếu Viễn Thông Xanh (có trong danh sách) cho quỹ tín thác của con trai 1 tuổi và không khai báo vì "số lượng nhỏ, không phải tài khoản của mình". Cô có vi phạm không?</p>
<details><summary>Xem lời giải</summary><p><b>Có.</b> Chi là beneficial owner của quỹ tín thác cho con nhỏ, nên đây là giao dịch cá nhân, phải tuân thủ chính sách và khai báo. Quy mô nhỏ không phải lý do miễn trừ.</p></details></div>`,
    },
    {
      title: '6. VI(C) Referral Fees',
      minutes: 14,
      html: `
<p><b>Nội dung chuẩn (diễn đạt lại):</b> thành viên và ứng viên phải công bố cho chủ lao động, khách hàng và khách hàng tiềm năng (tùy trường hợp) mọi khoản thù lao, đền đáp hay lợi ích <b>nhận từ</b> hoặc <b>trả cho</b> người khác vì việc giới thiệu sản phẩm, dịch vụ.</p>
<h4>Công bố thế nào là phù hợp</h4>
<ul>
<li><b>Thời điểm</b>: <b>trước khi</b> khách hàng ký thỏa thuận dịch vụ chính thức.</li>
<li><b>Nội dung</b>: bản chất của lợi ích (phí cố định hay theo phần trăm, một lần hay liên tục, dựa trên kết quả, tiền mặt hay phi tiền mặt như nghiên cứu miễn phí) <b>và giá trị ước tính</b> bằng tiền.</li>
<li><b>Hai chiều</b>: cả khoản bạn nhận và khoản bạn trả cho người giới thiệu khách đến với bạn.</li>
<li><b>Trong nội bộ</b>: ${t('referral', 'phí giới thiệu')} giữa các phòng ban của cùng công ty (ví dụ phòng ngân hàng bán lẻ nhận thưởng khi giới thiệu khách sang phòng quản lý tài sản) cũng phải công bố cho khách hàng.</li>
</ul>
<p>Mục đích: giúp khách hàng đánh giá lời giới thiệu có khách quan không và biết tổng chi phí thực sự của dịch vụ; giúp chủ lao động đánh giá xung đột.</p>
<h4>Thủ tục khuyến nghị</h4>
<ul>
<li>Thành viên nên khuyến khích công ty có quy trình rõ ràng về thù lao giới thiệu và <b>cập nhật cho chủ lao động ít nhất hằng quý</b> về bản chất và giá trị ước tính của các khoản nhận được.</li>
<li>Công ty nào không cấm phí giới thiệu nên có quy trình phê duyệt và chính sách về loại, giá trị thù lao được phép nhận.</li>
</ul>
<div class="example"><div class="ex-h">Ví dụ 6.1 - Đổi lệnh môi giới lấy khách hàng</div>
<p>Quản lý quỹ Nhi yêu cầu bàn giao dịch chuyển phần lớn hoa hồng sang Công ty môi giới Sư Tử do bạn học cũ điều hành, dù Sư Tử có giá kém cạnh tranh và nghiên cứu ít giá trị. Đổi lại, Sư Tử giới thiệu dịch vụ của Nhi cho khách hàng giàu có của họ. Thỏa thuận này không được công bố cho công ty của Nhi lẫn khách hàng. Nhi vi phạm gì?</p>
<details><summary>Xem lời giải</summary><p>Nhi vi phạm <b>VI(C)</b>: cô nhận lợi ích (khách hàng được giới thiệu) đổi lấy việc chuyển giao dịch, không công bố cho chủ lao động và khách hàng. Cô cũng vi phạm <b>III(A) Loyalty, Prudence, and Care</b>: hoa hồng môi giới là tài sản của khách hàng, phải dùng để đạt giao dịch tốt nhất cho họ, không dùng để mua lợi ích cho bản thân. Ngoài ra có xung đột cần công bố theo VI(A).</p></details></div>
<div class="example"><div class="ex-h">Ví dụ 6.2 - Quyên góp cho trường học từ phí khách hàng giới thiệu</div>
<p>Phong ngồi ban cố vấn trường của con. Anh đề xuất với cấp trên: anh sẽ trích một phần phí dịch vụ từ khách hàng mới do phụ huynh trường giới thiệu để tặng trường mua đồ chơi. Công ty đồng ý; trường phát tờ rơi giới thiệu chương trình. Khi lập IPS cho khách hàng đầu tiên từ trường, Phong giải thích rõ cơ chế giới thiệu và khoản quyên góp. Anh có vi phạm không?</p>
<details><summary>Xem lời giải</summary><p><b>Không.</b> Phong đã có sự đồng ý của chủ lao động, công bố công khai chương trình, và giải thích cho khách hàng trước khi ký kết. Đây là cách làm mẫu cho VI(C).</p></details></div>
<p class="tip"><b>Phân biệt với IV(B):</b> IV(B) Additional Compensation Arrangements là thù lao từ bên ngoài cho công việc có thể cạnh tranh với lợi ích của chủ lao động; cần <b>đồng ý bằng văn bản</b> của chủ lao động. VI(C) là phí <b>giới thiệu</b>; cần <b>công bố</b> cho chủ lao động <b>và</b> khách hàng.</p>`,
    },
    {
      title: '7. Tóm tắt và bẫy thường gặp',
      minutes: 8,
      html: `
<table class="plain"><thead><tr><th>Tình huống</th><th>Nhớ</th></tr></thead><tbody>
<tr><td>Có xung đột lợi ích</td><td>Tránh nếu hợp lý; nếu không, công bố đầy đủ, nổi bật, dễ hiểu</td></tr>
<tr><td>Công bố ở chú thích chữ nhỏ</td><td>Không đạt yêu cầu "prominent"</td></tr>
<tr><td>Ghế HĐQT không lương</td><td>Vẫn là xung đột: báo chủ lao động và mô tả trách nhiệm</td></tr>
<tr><td>Công ty là nhà bảo lãnh cho công ty được phân tích</td><td>Được viết báo cáo, kèm công bố quan hệ đặc biệt</td></tr>
<tr><td>Thứ tự giao dịch</td><td>Khách hàng → chủ lao động → cá nhân</td></tr>
<tr><td>Tài khoản người thân là khách hàng</td><td>Đối xử như khách hàng khác: không ưu tiên, không làm thiệt</td></tr>
<tr><td>Tài khoản vợ chồng, con nhỏ, quỹ tín thác của con</td><td>Là tài khoản beneficial owner: xếp sau khách hàng, phải khai báo</td></tr>
<tr><td>Cổ phiếu thanh khoản thấp</td><td>Mua cho mình sau khi lệnh khách hàng đã khớp</td></tr>
<tr><td>Bán cổ phiếu cá nhân vì nhu cầu riêng</td><td>Được, nếu báo công ty và không làm khách hàng bất lợi</td></tr>
<tr><td>Thủ tục VI(B)</td><td>Hạn chế IPO, private placement; blackout; duplicate confirms; khai báo nắm giữ; preclearance (không khai tài sản bạn bè)</td></tr>
<tr><td>Phí giới thiệu</td><td>Công bố trước khi ký: bản chất + giá trị ước tính; cả nhận và trả; cả nội bộ</td></tr>
<tr><td>Đổi lệnh môi giới lấy khách hàng</td><td>Vi phạm VI(C) và III(A)</td></tr>
</tbody></table>
<p>Tiếp theo: tab <b>Luyện tập</b> 10 câu (rút ngẫu nhiên từ ngân hàng 30 câu, mỗi lần làm một bộ khác). ET-09 học Standard VII về trách nhiệm của thành viên và ứng viên CFA.</p>`,
    },
  ];

  const glossary = {
    indep: ['Independence and objectivity', 'Độc lập và khách quan', 'Không bị chi phối bởi lợi ích riêng hay áp lực của người khác khi đưa ra ý kiến, quyết định.'],
    fullfair: ['Full and fair disclosure', 'Công bố đầy đủ và công bằng', 'Lượng thông tin cần thiết để người nhận có bức tranh chính xác, đầy đủ, phù hợp với hoàn cảnh.'],
    beneficial: ['Beneficial owner', 'Chủ sở hữu hưởng lợi', 'Người thực sự sở hữu, kiểm soát, có quyền chỉ đạo hoặc có lợi ích đáng kể trong một chứng khoán.'],
    prominent: ['Prominent', 'Nổi bật', 'Đặt ở chỗ dễ thấy, không bị làm mờ hay đẩy xuống chú thích, phụ lục.'],
    plainlang: ['Plain language', 'Ngôn ngữ dễ hiểu', 'Ngắn gọn, rõ ràng, dùng từ thông dụng, không bị thuật ngữ chuyên môn chi phối.'],
    frontrun: ['Front-running', 'Chạy trước lệnh', 'Giao dịch cho bản thân trước giao dịch hoặc khuyến nghị sắp tới của khách hàng, chủ lao động để hưởng lợi.'],
    ipo: ['Initial public offering (IPO)', 'Phát hành lần đầu ra công chúng', 'Lần đầu cổ phiếu của công ty được bán cho công chúng; IPO "nóng" thường bị cầu vượt cung.'],
    privplace: ['Private placement', 'Phát hành riêng lẻ', 'Bán chứng khoán cho một nhóm nhỏ nhà đầu tư, không chào bán công khai.'],
    blackout: ['Blackout period', 'Thời kỳ cấm giao dịch', 'Khoảng thời gian nhân viên không được giao dịch cá nhân quanh thời điểm công ty giao dịch cho khách hàng.'],
    preclear: ['Preclearance', 'Phê duyệt trước', 'Thủ tục xin bộ phận tuân thủ duyệt trước mỗi giao dịch cá nhân.'],
    referral: ['Referral fee', 'Phí giới thiệu', 'Thù lao, lợi ích nhận hoặc trả cho việc giới thiệu khách hàng, sản phẩm, dịch vụ.'],
  };

  const practice = [
    { q: 'Bảo, chuyên viên phân tích, được giao viết báo cáo về Công ty Hải Đăng. Công ty chứng khoán nơi Bảo làm việc là nhà bảo lãnh chính trong đợt phát hành cổ phiếu sắp tới của Hải Đăng. Bảo không sở hữu cổ phiếu Hải Đăng. Cách làm phù hợp nhất với Standard VI là:', choices: ['Viết báo cáo và công bố rõ ràng quan hệ bảo lãnh phát hành', 'Từ chối viết báo cáo vì công ty có quan hệ ngân hàng đầu tư', 'Viết báo cáo mà không cần công bố vì Bảo không sở hữu cổ phiếu'], answer: 0, explain: 'Quan hệ IB là xung đột của công ty có thể ảnh hưởng tính khách quan của báo cáo, nên phải công bố nổi bật. Không cần từ chối viết báo cáo: công bố đầy đủ là đủ trong trường hợp này. Lựa chọn "không cần công bố vì Bảo không sở hữu cổ phiếu" sai vì xung đột không chỉ đến từ sở hữu cá nhân.' },
    { q: 'Thảo đã khuyến nghị mua cổ phiếu MNO. Sau đó chồng cô được thừa kế một lượng lớn cổ phiếu MNO. Khi viết báo cáo cập nhật, Thảo nên:', choices: ['Yêu cầu chồng bán hết cổ phiếu trước khi viết báo cáo', 'Ngừng theo dõi MNO vĩnh viễn', 'Công bố việc gia đình sở hữu MNO cho chủ lao động và trong báo cáo'], answer: 2, explain: 'Sở hữu của vợ chồng là lợi ích có thể làm giảm khách quan, cần công bố (hoặc chuyển việc cho đồng nghiệp). Chuẩn không bắt chồng phải bán cổ phiếu hay phải ngừng theo dõi vĩnh viễn.' },
    { q: 'Một công ty quản lý tài sản trả phí giới thiệu cho các ngân hàng đối tác. Thông tin này chỉ xuất hiện ở chú thích cỡ chữ 6 trong phụ lục cuối của hợp đồng 30 trang. Nhận định đúng nhất:', choices: ['Tuân thủ vì thông tin đã được công bố bằng văn bản', 'Không tuân thủ vì công bố không nổi bật và không hiệu quả', 'Tuân thủ nếu khách hàng đã ký hợp đồng'], answer: 1, explain: 'Standard VI yêu cầu công bố nổi bật, ngôn ngữ dễ hiểu và truyền đạt hiệu quả. Chú thích chữ nhỏ ở phụ lục không đạt. Việc có văn bản hay chữ ký khách hàng không chữa được cách công bố kém.' },
    { q: 'Đức, quản lý danh mục ngành y tế, được mời vào HĐQT không lương của một quỹ từ thiện hỗ trợ bệnh viện. Theo Standard VI(A), Đức nên:', choices: ['Công bố vị trí này cho chủ lao động và mô tả trách nhiệm của mình', 'Không cần làm gì vì vị trí không có thù lao', 'Từ chối lời mời vì mọi ghế HĐQT đều bị cấm'], answer: 0, explain: 'Ghế HĐQT, kể cả không lương, có thể tạo xung đột (quan hệ với công ty y tế, thông tin nội bộ), nên cần báo chủ lao động kèm mô tả trách nhiệm. Lựa chọn "không cần làm gì" sai vì xung đột không phụ thuộc vào thù lao. Lựa chọn "từ chối lời mời" sai vì chuẩn không cấm, chủ lao động mới là người quyết định.' },
    { q: 'Vy muốn mua cổ phiếu ít thanh khoản PQR cho mình và cho khách hàng. Lệnh của khách hàng nhiều khả năng đẩy giá lên, lệnh của cô thì nhỏ. Theo Standard VI(B), Vy được mua cho mình:', choices: ['Cùng lúc với lệnh của khách hàng, vì lệnh của cô quá nhỏ', 'Sau khi lệnh của khách hàng đã khớp xong', 'Không bao giờ, vì không được sở hữu cùng cổ phiếu với khách hàng'], answer: 1, explain: 'Giao dịch của khách hàng phải được ưu tiên, nên Vy chỉ mua sau khi lệnh khách hàng đã thực hiện. Mua cùng lúc vẫn có thể làm khách hàng thiệt. Lựa chọn "không bao giờ" sai vì chuẩn không cấm sở hữu cùng cổ phiếu.' },
    { q: 'Khoa quản lý tài khoản trả phí của anh trai tại công ty; Khoa không có quyền lợi gì trong tài khoản đó. Khi có IPO hấp dẫn, Khoa luôn phân bổ cho anh trai sau cùng để tránh bị nghi thiên vị. Khoa:', choices: ['Tuân thủ vì đã tránh được nghi ngờ thiên vị', 'Tuân thủ nếu đã thông báo cho anh trai', 'Vi phạm vì tài khoản người thân là khách hàng phải được đối xử như khách hàng khác'], answer: 2, explain: 'Tài khoản của người thân là khách hàng trả phí, không phải tài khoản beneficial owner của Khoa, nên phải được đối xử công bằng như mọi khách hàng. Luôn phân bổ sau cùng để tránh nghi ngờ là làm thiệt họ, cũng là vi phạm. Thông báo cho anh trai không chữa được việc đối xử bất công.' },
    { q: 'Tín, nhân viên hỗ trợ cấp thấp, thường mua cổ phiếu ngay trước khi chúng được đưa vào danh sách khuyến nghị "mua" của công ty, và không nộp tờ khai giao dịch cá nhân hằng quý. Nhận định đúng nhất:', choices: ['Không vi phạm vì Tín không phải người ra quyết định đầu tư', 'Vi phạm Standard VI(B) vì giao dịch trước khuyến nghị của công ty', 'Chỉ vi phạm quy định nội bộ, không vi phạm Standards'], answer: 1, explain: 'Dùng thông tin về khuyến nghị sắp công bố để giao dịch trước là vi phạm ưu tiên giao dịch (front-running). Chuẩn áp dụng cho mọi thành viên, ứng viên tiếp cận thông tin, bất kể chức vụ, nên lựa chọn "không phải người ra quyết định đầu tư" sai. Lựa chọn "chỉ vi phạm quy định nội bộ" sai vì đây là vi phạm Standards, không chỉ quy định nội bộ.' },
    { q: 'Linh cần bán một phần cổ phiếu XYZ cá nhân để trả tiền mua nhà, trong khi công ty vừa nâng khuyến nghị XYZ lên "mua". Theo Code and Standards, Linh:', choices: ['Được bán sau khi tuân thủ thủ tục báo cáo, phê duyệt của công ty và không làm khách hàng bất lợi', 'Không được bán vì đi ngược khuyến nghị của công ty', 'Chỉ được bán khi có khách hàng của công ty đặt lệnh mua XYZ'], answer: 0, explain: 'Chuẩn không cấm giao dịch cá nhân vì nhu cầu riêng, miễn khách hàng không bị bất lợi và tuân thủ thủ tục của công ty. Hai lựa chọn cấm bán hoặc chỉ cho bán khi có khách hàng đặt mua đặt ra hạn chế mà chuẩn không yêu cầu.' },
    { q: 'Một cố vấn tài chính thường giới thiệu khách hàng cho một công ty kế toán và được công ty này làm dịch vụ khai thuế miễn phí cho gia đình mình. Cô chỉ nói với khách hàng: "Tôi có quan hệ hợp tác với công ty kế toán này." Cô:', choices: ['Tuân thủ vì lợi ích nhận được không phải tiền mặt', 'Tuân thủ vì đã nói về quan hệ hợp tác', 'Vi phạm vì chưa công bố bản chất và giá trị ước tính của lợi ích nhận được'], answer: 2, explain: 'VI(C) bao gồm cả lợi ích phi tiền mặt. Công bố phải nêu bản chất của lợi ích (dịch vụ miễn phí, liên tục) và giá trị ước tính bằng tiền, trước khi khách hàng ký thỏa thuận. Câu nói chung chung về quan hệ hợp tác chưa đủ.' },
    { q: 'Nhân viên phòng ngân hàng bán lẻ nhận thưởng từ phòng quản lý tài sản của cùng ngân hàng cho mỗi khách hàng được giới thiệu. Ngân hàng biết và cho phép, nhưng khách hàng không được thông báo. Nhận định đúng nhất:', choices: ['Vi phạm vì khách hàng phải được thông báo về khoản thưởng trước khi ký thỏa thuận', 'Tuân thủ vì khoản thưởng được trả trong nội bộ cùng một công ty', 'Tuân thủ vì chủ lao động đã chấp thuận'], answer: 0, explain: 'Phí giới thiệu giữa các phòng ban vẫn là xung đột mà khách hàng cần biết để đánh giá lời giới thiệu. Sự chấp thuận của chủ lao động là cần nhưng chưa đủ; VI(C) yêu cầu công bố cho cả khách hàng. Lựa chọn "trả trong nội bộ cùng một công ty" sai vì chuẩn không miễn trừ thỏa thuận nội bộ.' },
    { q: "Chuyên viên phân tích Hoàng sở hữu một lượng cổ phiếu đáng kể của Công ty Bắc Hà, công ty mà anh vừa được giao viết báo cáo lần đầu. Chính sách công ty cho phép nhân viên giữ cổ phiếu nếu khai báo. Theo Standard VI(A), Hoàng nên:", choices: ["Bán hết cổ phiếu trước khi được phép viết báo cáo", "Công bố việc sở hữu cổ phiếu Bắc Hà cho chủ lao động và trong báo cáo", "Viết báo cáo mà không cần công bố vì chính sách công ty cho phép nắm giữ"], answer: 1, explain: "Sở hữu cổ phiếu của công ty được phân tích là xung đột có thể làm giảm tính khách quan, nên phải công bố cho chủ lao động và người đọc báo cáo. Chuẩn không bắt buộc bán cổ phiếu. Việc công ty cho phép nắm giữ không miễn nghĩa vụ công bố cho khách hàng." },
    { q: "Cố vấn Thắng nhận hoa hồng cao hơn khi bán sản phẩm bảo hiểm liên kết đầu tư so với quỹ mở. Anh giải thích cơ chế hoa hồng này cho khách hàng trong buổi gặp thứ hai, sau khi khách đã ký hợp đồng mua sản phẩm bảo hiểm. Nhận định đúng nhất:", choices: ["Tuân thủ vì Thắng đã công bố cơ chế hoa hồng bằng lời", "Tuân thủ nếu sản phẩm bảo hiểm phù hợp với khách hàng", "Vi phạm VI(A) vì công bố quá muộn để khách hàng dùng thông tin khi ra quyết định"], answer: 2, explain: "Công bố xung đột phải được đưa ra kịp thời, trước khi khách hàng quyết định, để họ đánh giá tính khách quan của lời khuyên. Công bố sau khi đã ký hợp đồng không đạt mục đích đó, dù có nói bằng lời. Sản phẩm phù hợp vẫn không miễn yêu cầu công bố đúng lúc." },
    { q: "Chuyên viên Diệp được giao viết báo cáo về Công ty Sông Đà Xanh, nơi chồng cô là tổng giám đốc và nắm 15% cổ phần. Theo Standard VI(A), cách xử lý phù hợp nhất là:", choices: ["Đề nghị chuyển việc phân tích Sông Đà Xanh cho đồng nghiệp, vì xung đột quá nghiêm trọng để chỉ công bố", "Viết báo cáo và ghi chú nhỏ ở cuối trang rằng cô có quan hệ gia đình với ban lãnh đạo", "Viết báo cáo bình thường vì cổ phần đứng tên chồng, không phải của cô"], answer: 0, explain: "Thứ tự xử lý là tránh trước, công bố sau. Khi xung đột nghiêm trọng đến mức công bố không đủ bảo vệ người đọc, như phân tích công ty do chồng điều hành, cần tránh bằng cách chuyển việc. Ghi chú nhỏ cuối trang không nổi bật. Cổ phần đứng tên chồng vẫn là lợi ích của gia đình cô." },
    { q: "Công ty chứng khoán của Phương là nhà tạo lập thị trường cho chứng chỉ quỹ ETF mà cô vừa khuyến nghị mua trong báo cáo gửi khách hàng. Phương không sở hữu chứng chỉ quỹ này. Theo Standard VI(A):", choices: ["Phương không cần công bố gì vì cá nhân cô không có lợi ích", "Báo cáo cần công bố việc công ty là nhà tạo lập thị trường cho ETF đó", "Phương phải rút khuyến nghị vì công ty có quan hệ kinh doanh với ETF"], answer: 1, explain: "Hoạt động tạo lập thị trường là một quan hệ đặc biệt của công ty có thể tạo xung đột, nên báo cáo phải công bố. Xung đột của chủ lao động vẫn cần công bố dù cá nhân Phương không sở hữu. Không cần rút khuyến nghị; công bố đầy đủ là đủ." },
    { q: "Quản lý quỹ Kiên chuyển phần lớn lệnh giao dịch của quỹ sang công ty môi giới do bạn thân của anh điều hành, với chi phí và chất lượng thực hiện tương đương các đơn vị khác. Kiên không nói với ai về mối quan hệ này. Theo Code and Standards, Kiên nên:", choices: ["Không cần làm gì vì chi phí giao dịch không cao hơn thị trường", "Ngừng giao dịch với công ty môi giới đó ngay lập tức", "Công bố mối quan hệ cá nhân cho chủ lao động để họ đánh giá xung đột"], answer: 2, explain: "Quan hệ cá nhân với bên cung cấp dịch vụ là nguồn xung đột có thể làm giảm tính khách quan, nên phải công bố cho chủ lao động. Chi phí tương đương không xóa bỏ xung đột tiềm ẩn. Chuẩn không bắt buộc ngừng giao dịch nếu việc chọn nhà môi giới vẫn đạt giao dịch tốt nhất cho khách hàng." },
    { q: "Một công ty quản lý quỹ vừa ban hành chính sách cấm nhân viên đầu tư ngồi HĐQT công ty niêm yết. Quản lý danh mục Lâm, CFA, được mời làm thành viên HĐQT độc lập có thù lao của một công ty niêm yết. Lâm nên:", choices: ["Từ chối lời mời vì phải tuân theo yêu cầu tránh xung đột của chủ lao động", "Nhận lời và công bố đầy đủ cho chủ lao động là đủ", "Nhận lời nếu chuyển toàn bộ thù lao HĐQT cho công ty"], answer: 0, explain: "Chủ lao động có thể yêu cầu tránh hẳn một loại xung đột, như cấm ngồi HĐQT công ty niêm yết, và thành viên phải tuân theo. Công bố chỉ là bước thay thế khi việc tránh không được yêu cầu hoặc không khả thi. Chuyển thù lao cho công ty không xóa bỏ xung đột về nghĩa vụ và thông tin." },
    { q: "Tài liệu công bố xung đột lợi ích của công ty quản lý tài sản do Yên soạn gồm hai trang thuật ngữ pháp lý dài, viện dẫn nhiều điều luật, đặt ở trang đầu hợp đồng. Khách hàng phổ thông khó hiểu được công ty nhận những khoản thưởng nào. Theo Standard VI(A), tài liệu này:", choices: ["Tuân thủ vì được đặt ở trang đầu, đủ nổi bật", "Không tuân thủ vì công bố phải dùng ngôn ngữ dễ hiểu để khách hàng tự đánh giá xung đột", "Tuân thủ vì đã liệt kê đầy đủ các căn cứ pháp lý"], answer: 1, explain: "Công bố phải đầy đủ, công bằng, nổi bật và dùng ngôn ngữ dễ hiểu. Vị trí trang đầu đáp ứng tiêu chí nổi bật nhưng chưa đủ khi nội dung khó hiểu với người nhận. Viện dẫn căn cứ pháp lý không giúp khách hàng hiểu xung đột." },
    { q: "Chuyên viên Tiến sở hữu chung một tài khoản chứng khoán với em gái, mỗi người góp một nửa vốn. Tiến cho rằng các giao dịch trong tài khoản này không phải \"giao dịch cá nhân\" nên không khai báo với công ty. Theo Standard VI(B):", choices: ["Tiến đúng vì tài khoản đứng tên chung với người khác", "Tiến đúng nếu em gái là người đặt mọi lệnh", "Tiến sai vì anh là beneficial owner của tài khoản, nên giao dịch phải xếp sau khách hàng và được khai báo"], answer: 2, explain: "Beneficial owner là người có lợi ích đáng kể trong chứng khoán; Tiến góp một nửa vốn nên có lợi ích trực tiếp. Tài khoản đứng tên chung hay do em gái đặt lệnh không làm mất lợi ích đó. Giao dịch trong tài khoản này là giao dịch cá nhân, phải tuân thủ thứ tự ưu tiên và thủ tục khai báo." },
    { q: "Theo các thủ tục khuyến nghị cho Standard VI(B), \"thời kỳ cấm giao dịch\" (blackout period) được hiểu đúng nhất là:", choices: ["Khoảng thời gian người tham gia ra quyết định đầu tư không được giao dịch cá nhân quanh thời điểm công ty giao dịch cho khách hàng", "Khoảng thời gian sở giao dịch tạm ngừng giao dịch một cổ phiếu do biến động bất thường", "Khoảng thời gian khách hàng không được rút vốn khỏi quỹ sau khi đầu tư"], answer: 0, explain: "Blackout period là thủ tục nội bộ nhằm ngăn nhân viên giao dịch trước hoặc ngay sau giao dịch của khách hàng để hưởng lợi. Ngừng giao dịch của sở giao dịch là cơ chế thị trường, không phải thủ tục của VI(B). Thời gian khóa rút vốn (lock-up) của quỹ là khái niệm khác." },
    { q: "Bộ phận tuân thủ của một công ty quản lý quỹ đang soạn chính sách giao dịch cá nhân. Thủ tục nào sau đây KHÔNG thuộc các thủ tục khuyến nghị cho Standard VI(B)?", choices: ["Yêu cầu nhân viên đầu tư xin phê duyệt trước mỗi giao dịch cá nhân", "Yêu cầu nhân viên khai báo các khoản đầu tư của bạn bè và hàng xóm", "Yêu cầu gửi bản sao xác nhận giao dịch cá nhân cho bộ phận tuân thủ"], answer: 1, explain: "Yêu cầu khai báo chỉ áp dụng cho tài khoản mà nhân viên là beneficial owner, không mở rộng sang bạn bè, hàng xóm. Phê duyệt trước (preclearance) và gửi bản sao xác nhận giao dịch (duplicate confirmations) đều là thủ tục được khuyến nghị." },
    { q: "Mục đích chính của thủ tục phê duyệt trước (preclearance) đối với giao dịch cá nhân của nhân viên đầu tư là:", choices: ["Bảo đảm nhân viên chỉ mua cổ phiếu có triển vọng tốt", "Giới hạn số tiền nhân viên được đầu tư mỗi năm", "Giúp công ty phát hiện và ngăn xung đột với giao dịch của khách hàng trước khi giao dịch cá nhân diễn ra"], answer: 2, explain: "Preclearance cho phép bộ phận tuân thủ đối chiếu giao dịch cá nhân với lệnh và khuyến nghị sắp tới của khách hàng, phát hiện xung đột trước khi xảy ra. Thủ tục này không nhằm đánh giá chất lượng khoản đầu tư hay giới hạn số tiền đầu tư của nhân viên." },
    { q: "Một công ty niêm yết chưa có quan hệ với quỹ mời quản lý danh mục Hải mua cổ phiếu phát hành riêng lẻ với giá ưu đãi cho tài khoản cá nhân. Hải mua ngay mà không xin phép công ty. Vài tháng sau, anh đề xuất quỹ mua cổ phiếu của chính công ty này. Nhận định đúng nhất:", choices: ["Hải vi phạm vì phải xin phê duyệt trước khi tham gia phát hành riêng lẻ, và khoản nắm giữ này tạo xung đột phải công bố", "Hải không vi phạm vì đã mua trước khi quỹ có ý định đầu tư", "Hải không vi phạm nếu giá mua ưu đãi bằng giá thị trường"], answer: 0, explain: "Phát hành riêng lẻ là cơ hội có thể được đưa ra để đổi lấy giao dịch sau này; thủ tục khuyến nghị là hạn chế chặt và xin phê duyệt trước. Khoản nắm giữ cá nhân còn tạo xung đột khi Hải đề xuất quỹ mua, nên phải công bố. Thời điểm mua trước không xóa xung đột. Giá mua không phải vấn đề chính; thiếu phê duyệt và công bố mới là vấn đề." },
    { q: "Lúc 9 giờ sáng, chuyên viên Phát biết công ty sẽ phát hành khuyến nghị hạ cổ phiếu G xuống \"bán\" vào 2 giờ chiều. Lúc 10 giờ, anh bán toàn bộ cổ phiếu G trong tài khoản cá nhân. Phát:", choices: ["Không vi phạm vì anh bán chứ không mua", "Vi phạm Standard VI(B) vì giao dịch cá nhân trước khi khách hàng được biết khuyến nghị", "Không vi phạm nếu anh đã sở hữu G từ trước khi biết khuyến nghị"], answer: 1, explain: "Dùng thông tin về khuyến nghị sắp công bố để giao dịch cá nhân trước khách hàng là vi phạm VI(B), dù là mua hay bán. Việc sở hữu G từ trước không cho phép anh bán trước khi khách hàng có cơ hội hành động theo khuyến nghị." },
    { q: "Công ty của Ánh được phân bổ cổ phiếu một đợt IPO được săn đón, ít hơn nhiều so với lượng khách hàng đặt mua. Ánh đặt mua thêm một phần cho tài khoản cá nhân của mình qua chính đợt phân bổ đó. Theo Standard VI(B):", choices: ["Ánh vi phạm vì cổ phiếu IPO được săn đón phải dành cho khách hàng trước khi nhân viên tham gia", "Ánh không vi phạm nếu cô trả cùng mức giá với khách hàng", "Ánh không vi phạm nếu lượng cô mua nhỏ so với tổng phân bổ"], answer: 0, explain: "Khi cầu vượt cung, mỗi cổ phiếu Ánh giữ cho mình là phần khách hàng mất đi; giao dịch của khách hàng phải được ưu tiên. Cùng mức giá hay quy mô nhỏ không thay đổi việc khách hàng bị thiệt. Thủ tục khuyến nghị là hạn chế hoặc cấm nhân viên tham gia IPO." },
    { q: "Một công ty yêu cầu nhân viên đầu tư khai báo toàn bộ các khoản nắm giữ chứng khoán khi bắt đầu làm việc và định kỳ sau đó. Thủ tục này phù hợp nhất với chuẩn nào?", choices: ["Standard VI(C) Referral Fees", "Standard IV(B) Additional Compensation Arrangements", "Standard VI(B) Priority of Transactions"], answer: 2, explain: "Khai báo nắm giữ khi vào làm và định kỳ là thủ tục khuyến nghị của VI(B), giúp công ty phát hiện giao dịch cá nhân xung đột với khách hàng. VI(C) liên quan đến phí giới thiệu. IV(B) liên quan đến thù lao từ bên ngoài cho công việc có thể cạnh tranh với chủ lao động." },
    { q: "Cố vấn đầu tư Duyên trả cho một văn phòng luật 0,5% giá trị tài sản ban đầu của mỗi khách hàng mà văn phòng này giới thiệu đến. Duyên không nói với khách hàng về khoản này vì \"tiền do tôi trả, khách hàng không mất gì\". Theo Standard VI(C), Duyên:", choices: ["Không vi phạm vì chuẩn chỉ điều chỉnh khoản phí giới thiệu nhận được", "Vi phạm vì phải công bố cả khoản phí giới thiệu trả cho người khác", "Không vi phạm nếu khách hàng không phải trả thêm phí"], answer: 1, explain: "VI(C) áp dụng hai chiều: thù lao nhận được và thù lao trả cho người khác vì việc giới thiệu. Khách hàng cần biết để đánh giá lời giới thiệu của văn phòng luật có khách quan không, dù họ không trả thêm phí." },
    { q: "Một công ty môi giới cung cấp miễn phí gói dữ liệu nghiên cứu trị giá khoảng 120 triệu đồng mỗi năm cho cố vấn Tài, đổi lại Tài giới thiệu khách hàng mở tài khoản tại đó. Khi giới thiệu, Tài chỉ nói: \"Tôi có nhận một số hỗ trợ từ công ty môi giới này.\" Theo Standard VI(C):", choices: ["Tuân thủ vì lợi ích là dữ liệu nghiên cứu, không phải tiền mặt", "Tuân thủ vì Tài đã thừa nhận có nhận hỗ trợ", "Vi phạm vì Tài phải công bố bản chất của lợi ích và giá trị ước tính của nó"], answer: 2, explain: "Lợi ích phi tiền mặt như nghiên cứu miễn phí vẫn là thù lao giới thiệu. Công bố phải nêu bản chất của lợi ích và giá trị ước tính, ở đây khoảng 120 triệu đồng mỗi năm; câu \"có nhận một số hỗ trợ\" quá mơ hồ." },
    { q: "Cố vấn Hạnh nhận phí giới thiệu từ một công ty bảo hiểm cho mỗi khách hàng cô giới thiệu. Theo Standard VI(C), thời điểm phù hợp nhất để Hạnh công bố khoản phí này cho khách hàng là:", choices: ["Trước khi khách hàng ký thỏa thuận sử dụng dịch vụ", "Trong báo cáo tài khoản cuối năm đầu tiên", "Chỉ khi khách hàng hỏi về khoản phí"], answer: 0, explain: "Phí giới thiệu phải được công bố trước khi khách hàng ký thỏa thuận dịch vụ chính thức, để họ cân nhắc tính khách quan và tổng chi phí. Công bố trong báo cáo cuối năm là quá muộn. Chờ khách hàng hỏi không đáp ứng yêu cầu chủ động công bố." },
    { q: "Công ty của Trung cho phép nhân viên nhận phí giới thiệu từ các đối tác sau khi đã công bố cho khách hàng. Theo thủ tục khuyến nghị của Standard VI(C), Trung nên làm gì thêm?", choices: ["Không cần làm gì thêm vì đã công bố cho khách hàng", "Cập nhật cho chủ lao động ít nhất hằng quý về bản chất và giá trị ước tính của các khoản phí giới thiệu nhận được", "Chuyển toàn bộ phí giới thiệu cho công ty"], answer: 1, explain: "Thủ tục khuyến nghị của VI(C) là thông báo cho chủ lao động ít nhất hằng quý về bản chất và giá trị ước tính các khoản thù lao giới thiệu. Công bố cho khách hàng chưa thay thế công bố cho chủ lao động. Chuẩn không yêu cầu chuyển phí cho công ty." },
    { q: "Con gái của chuyên viên Lộc vừa được tuyển làm kỹ sư tập sự tại Công ty Cơ khí Đông Á, công ty mà Lộc đang theo dõi. Cô không nắm cổ phần và không tham gia quản lý. Theo Standard VI(A), Lộc nên:", choices: ["Ngừng theo dõi Đông Á ngay vì mọi quan hệ gia đình đều không thể xử lý bằng công bố", "Không cần làm gì vì con gái không sở hữu cổ phiếu và không giữ vị trí quản lý", "Công bố quan hệ này cho chủ lao động và trong báo cáo về Đông Á"], answer: 2, explain: "Quan hệ gia đình với nhân viên của công ty được phân tích là nguồn xung đột có thể làm giảm tính khách quan; ở mức độ này, công bố đầy đủ là cách xử lý phù hợp. Không phải mọi quan hệ gia đình đều buộc phải ngừng theo dõi. Việc con gái không sở hữu cổ phiếu hay không giữ vị trí quản lý không xóa bỏ nghĩa vụ công bố." },
  ];

  window.LESSONS['ET-08'] = {
    moduleId: 'ET-08',
    calculator: 'Không cần máy tính',
    warmup: [
      'Ôn ET-06: Standard IV(B) Additional Compensation Arrangements yêu cầu gì khi bạn nhận thù lao từ bên ngoài công ty?',
      'Bạn sở hữu cổ phiếu ngân hàng mà mình sắp viết báo cáo khuyến nghị. Theo bạn, người đọc báo cáo có cần biết điều đó không? Vì sao?',
      'Bạn và khách hàng cùng muốn mua một cổ phiếu ít thanh khoản. Ai nên mua trước?',
    ],
    sections,
    glossary,
    practice,
    widgets: {},
    slides: [],
    wrapup: [
      'Nêu ba tiêu chí của một bản công bố xung đột lợi ích đạt yêu cầu Standard VI(A).',
      'Kể bốn thủ tục công ty nên áp dụng để quản lý giao dịch cá nhân của nhân viên theo VI(B).',
      'Phí giới thiệu phải được công bố cho ai, khi nào, gồm những nội dung gì?',
    ],
  };
}());
