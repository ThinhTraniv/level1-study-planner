// Bài giảng ET-05 - Guidance for Standard III: Duties to Clients (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t } = window.CFAH;

  const sections = [
    {
      title: '1. Bức tranh lớn',
      minutes: 5,
      html: `
<p>Standard II (ET-04) bảo vệ thị trường. Standard III bảo vệ <b>khách hàng</b>, người đã giao tiền và thông tin của mình cho người hành nghề. Năm chuẩn con trả lời năm câu hỏi:</p>
<table class="plain"><thead><tr><th>Chuẩn</th><th>Câu hỏi</th><th>Ý chính</th></tr></thead><tbody>
<tr><td>III(A) Loyalty, Prudence, and Care</td><td>Tôi làm việc vì ai?</td><td>Khách hàng trước, công ty sau, bản thân cuối cùng</td></tr>
<tr><td>III(B) Fair Dealing</td><td>Tôi có đối xử công bằng giữa các khách hàng không?</td><td>Công bằng, không nhất thiết như nhau</td></tr>
<tr><td>III(C) Suitability</td><td>Khoản đầu tư có hợp với khách hàng không?</td><td>Hiểu khách hàng (IPS) rồi mới khuyến nghị</td></tr>
<tr><td>III(D) Performance Presentation</td><td>Tôi có trình bày kết quả trung thực không?</td><td>Công bằng, chính xác, đầy đủ</td></tr>
<tr><td>III(E) Preservation of Confidentiality</td><td>Tôi có giữ bí mật cho khách hàng không?</td><td>Giữ bí mật trừ 3 ngoại lệ</td></tr>
</tbody></table>
<p>Các LOS của module (áp dụng, đề xuất quy trình, nhận diện vi phạm) được lồng vào từng phần: mỗi chuẩn có yêu cầu, tình huống và khuyến nghị tuân thủ.</p>
<p class="tip"><b>Thứ tự ưu tiên cần thuộc lòng:</b> khi lợi ích xung đột, thứ tự là <b>khách hàng → công ty (employer) → bản thân</b>. Nhiều câu hỏi Standard III chỉ cần áp dụng đúng thứ tự này.</p>`,
    },
    {
      title: '2. III(A) Loyalty, Prudence, and Care: yêu cầu',
      minutes: 18,
      html: `
<div class="key"><b>III(A):</b> người hành nghề có ${t('loyalty', 'nghĩa vụ trung thành (duty of loyalty)')} với khách hàng, phải hành động với sự cẩn trọng hợp lý (reasonable care) và phán đoán thận trọng (prudent judgment). Phải hành động vì lợi ích của khách hàng và đặt lợi ích của khách hàng <b>trước</b> lợi ích của công ty và của bản thân.</div>
<h4>a) Xác định đúng khách hàng</h4>
<ul>
<li>Với quỹ hưu trí hoặc quỹ tín thác (trust), khách hàng là <b>người thụ hưởng</b> (beneficiaries), không phải ban quản trị hay doanh nghiệp đã thuê người quản lý.</li>
<li>Với quỹ chỉ số hay quỹ đầu tư theo chiến lược, có thể không có một "khách hàng" cụ thể; nghĩa vụ là quản lý <b>nhất quán với mandate</b> (chiến lược đã công bố) của quỹ.</li>
<li>Quản lý tài sản theo đúng ${t('govdocs', 'văn bản điều chỉnh (governing documents)')}: hợp đồng quản lý, điều lệ quỹ, văn bản tín thác.</li>
</ul>
<h4>b) Mức độ nghĩa vụ</h4>
<p>Khi người hành nghề có quyền ra quyết định thay khách hàng, họ thường mang ${t('fiduciary', 'nghĩa vụ ủy thác (fiduciary duty)')}, mức cao nhất của trách nhiệm. Dù vai trò là gì, III(A) yêu cầu:</p>
<ul>
<li>Ra quyết định đầu tư trong <b>bối cảnh toàn bộ danh mục</b> của khách hàng, không xét từng khoản riêng lẻ.</li>
<li>Thông báo cho khách hàng mọi <b>giới hạn</b> của quan hệ tư vấn, ví dụ chỉ được khuyến nghị sản phẩm của công ty mình.</li>
<li>Không giao dịch quá mức để thu phí. ${t('churning', 'Giao dịch quá mức (churning)')} vì hoa hồng là vi phạm rõ ràng.</li>
</ul>
<h4>c) ${t('softdollar', 'Hoa hồng mềm (soft dollars / client brokerage)')}</h4>
<p>Hoa hồng môi giới trả bằng tiền của khách hàng là <b>tài sản của khách hàng</b>. Nó chỉ được dùng để mua hàng hóa, dịch vụ (thường là nghiên cứu) <b>có lợi cho chính khách hàng đó</b> trong quá trình ra quyết định đầu tư.</p>
<ul>
<li>Trả hoa hồng cao hơn để đổi lấy dịch vụ phục vụ hoạt động của công ty quản lý (thuê văn phòng, trả lương, máy tính hành chính) là <b>vi phạm</b>.</li>
<li>${t('directed', 'Môi giới theo chỉ định (directed brokerage)')}: khách hàng tự yêu cầu dùng hoa hồng của mình qua một công ty môi giới cụ thể để mua dịch vụ cho chính khách hàng. Điều này <b>không vi phạm</b>, nhưng người quản lý vẫn phải tìm ${t('bestexec', 'giá tốt nhất và thực hiện tốt nhất (best execution)')} và nên thông báo cho khách hàng nếu chỉ định đó làm chi phí cao hơn.</li>
</ul>
<h4>d) ${t('proxy', 'Bỏ phiếu ủy quyền (proxy voting)')}</h4>
<p>Quyền biểu quyết cổ phiếu trong danh mục là tài sản của khách hàng. Người quản lý có trách nhiệm bỏ phiếu một cách <b>có hiểu biết và có trách nhiệm</b>, vì lợi ích của khách hàng. Không bắt buộc phải bỏ phiếu mọi vấn đề: có thể so sánh chi phí và lợi ích, ví dụ bỏ qua các vấn đề thường lệ. Công ty nên có chính sách bỏ phiếu bằng văn bản và công bố cho khách hàng.</p>
<p class="warn"><b>Bẫy:</b> "khách hàng của quỹ hưu trí là doanh nghiệp đã thuê tôi" là sai. Nếu doanh nghiệp yêu cầu mua cổ phiếu của chính họ để giữ giá, người quản lý phải đặt lợi ích của <b>người lao động thụ hưởng</b> lên trên.</p>`,
    },
    {
      title: '3. III(A): tình huống và khuyến nghị',
      minutes: 8,
      html: `
<div class="example"><div class="ex-h">Ví dụ 3.1 - Đạt chỉ tiêu hoa hồng</div>
<p>Nhà giao dịch Hoàng quản lý tài khoản của nhiều khách hàng giàu có; lương của anh phụ thuộc nhiều vào hoa hồng. Anh giao dịch liên tục để đạt mức hoa hồng tối thiểu công ty đặt ra, vượt xa mức cần thiết để đạt mục tiêu của khách hàng.</p>
<details><summary>Xem lời giải</summary><p><b>Vi phạm III(A).</b> Đây là churning: đặt lợi ích bản thân trước lợi ích khách hàng.</p></details></div>
<div class="example"><div class="ex-h">Ví dụ 3.2 - Công ty môi giới trả tiền thuê nhà</div>
<p>Quỹ Hổ chuyển phần lớn giao dịch qua công ty môi giới Sư Tử, dù phí của Sư Tử cao hơn mặt bằng. Đổi lại, Sư Tử trả hộ một phần chi phí hoạt động của quỹ, gồm cả tiền thuê văn phòng.</p>
<details><summary>Xem lời giải</summary><p><b>Vi phạm III(A).</b> Hoa hồng là tài sản của khách hàng (nhà đầu tư trong quỹ), nhưng lại dùng để trả chi phí của công ty quản lý. Đồng thời không đạt best execution.</p></details></div>
<div class="example"><div class="ex-h">Ví dụ 3.3 - Bỏ phiếu để giữ quan hệ</div>
<p>Công ty quản lý quỹ đang muốn giành hợp đồng quản lý quỹ hưu trí của công ty G. Trưởng phòng yêu cầu bỏ phiếu ủng hộ đề xuất của ban lãnh đạo G trong đại hội cổ đông, dù phân tích nội bộ cho thấy đề xuất làm giảm giá trị cổ phiếu G mà các quỹ đang nắm.</p>
<details><summary>Xem lời giải</summary><p><b>Vi phạm III(A).</b> Phiếu bầu phải phục vụ lợi ích của khách hàng đang sở hữu cổ phiếu, không phải lợi ích kinh doanh của công ty quản lý.</p></details></div>
<h4>Khuyến nghị tuân thủ</h4>
<p>Người hành nghề nên khuyến khích công ty xây dựng chính sách về nghĩa vụ ủy thác, bao gồm:</p>
<ul>
<li>Tuân thủ luật và quy định; xác lập mục tiêu đầu tư của khách hàng.</li>
<li>Xem xét tính phù hợp (suitability), đa dạng hóa, định kỳ rà soát danh mục.</li>
<li>Đối xử công bằng giữa các khách hàng; công bố xung đột lợi ích và cơ chế thù lao.</li>
<li>Bỏ phiếu vì lợi ích của khách hàng và người thụ hưởng cuối cùng; giữ bí mật; tìm best execution.</li>
<li>Khi có nghi ngờ, đặt lợi ích khách hàng lên trên.</li>
</ul>`,
    },
    {
      title: '4. III(B) Fair Dealing',
      minutes: 17,
      html: `
<div class="key"><b>III(B):</b> người hành nghề phải đối xử <b>công bằng và khách quan</b> với mọi khách hàng khi đưa ra phân tích, khuyến nghị, thực hiện hành động đầu tư hoặc các hoạt động chuyên môn khác.</div>
<h4>a) Công bằng không có nghĩa là như nhau</h4>
<ul>
<li>Thư điện tử đến tay khách hàng sớm muộn vài phút là bình thường; điều cấm là <b>cố ý ưu tiên</b> một nhóm.</li>
<li>Được phép có ${t('servicelvl', 'các cấp độ dịch vụ khác nhau (service levels)')}, ví dụ gói cao cấp được gọi điện trao đổi chi tiết, với điều kiện: không làm hại khách hàng khác, và <b>công bố</b> các cấp dịch vụ cho mọi khách hàng và khách hàng tiềm năng.</li>
<li>Gói dịch vụ trả phí cao <b>không</b> được nhận khuyến nghị mới trước người khác.</li>
</ul>
<h4>b) Phổ biến khuyến nghị (${t('dissemrec', 'dissemination')})</h4>
<p>Khuyến nghị mới hoặc thay đổi phải được gửi <b>đồng thời</b> đến mọi khách hàng đã quan tâm hoặc phù hợp với khoản đầu tư. Khách hàng chưa biết khuyến nghị đã thay đổi thì nên được thông báo <b>trước khi</b> nhận lệnh của họ.</p>
<h4>c) Phân bổ giao dịch (${t('alloc', 'trade allocation')})</h4>
<ul>
<li>Lệnh gộp (block trade) phải được phân bổ công bằng, thường theo <b>tỷ lệ</b> (pro rata) và cùng mức giá trung bình.</li>
<li>Chứng khoán phát hành lần đầu (IPO) đắt hàng: phải phân bổ cho mọi khách hàng phù hợp theo chính sách của công ty; nếu thiếu thì chia ${t('prorata', 'theo tỷ lệ (pro rata)')}.</li>
<li>Không được ưu tiên tài khoản của người thân, của chính mình hay của khách hàng "VIP". Tài khoản của người thân <b>trả phí như khách hàng thông thường</b> thì được đối xử như khách hàng khác, không được ưu tiên mà cũng không bị loại trừ.</li>
</ul>
<div class="example"><div class="ex-h">Ví dụ 4.1 - Chia cổ phiếu IPO</div>
<p>Công ty được phân bổ 30.000 cổ phiếu IPO. Ba khách hàng phù hợp đặt mua: A 40.000, B 15.000, C 5.000. Phân bổ thế nào?</p>
<details><summary>Xem lời giải</summary><p>Tổng đặt mua 60.000, tỷ lệ đáp ứng 30.000 / 60.000 = 50%. A nhận 20.000, B nhận 7.500, C nhận 2.500. Ưu tiên cho A (khách lớn) hoặc cho C (để "đủ" lệnh) đều không công bằng.</p></details></div>
<h4>d) Tình huống</h4>
<div class="example"><div class="ex-h">Ví dụ 4.2 - Bữa trưa trước ngày phát hành</div>
<p>Trưởng phòng phân tích Thái hoàn thành báo cáo khuyến nghị mua một công ty nhỏ. Trong khi chờ phát hành chính thức cho mọi khách hàng vào tuần sau, ông mời vài khách hàng lớn nhất ăn trưa và nhắc đến khuyến nghị sắp ra.</p>
<details><summary>Xem lời giải</summary><p><b>Vi phạm III(B).</b> Một nhóm khách hàng được biết trước và có cơ hội hành động trước những người khác.</p></details></div>
<div class="example"><div class="ex-h">Ví dụ 4.3 - Email trước, gọi sau</div>
<p>Thái gửi email khuyến nghị mới đến tất cả khách hàng cùng lúc, sau đó gọi cho ba khách hàng tổ chức trả phí cao để thảo luận chi tiết.</p>
<details><summary>Xem lời giải</summary><p><b>Không vi phạm</b>, nếu cấp dịch vụ cao hơn này đã được công bố. Mọi khách hàng nhận khuyến nghị cùng lúc; khách hàng trả phí cao chỉ được thêm dịch vụ giải thích.</p></details></div>
<div class="example"><div class="ex-h">Ví dụ 4.4 - Khách đặt lệnh ngược khuyến nghị mới</div>
<p>Thứ Tư, công ty đổi khuyến nghị cổ phiếu Green từ "mua" sang "bán" và gửi cho mọi khách hàng. Thứ Năm, một khách gọi đặt mua 500 cổ phiếu Green.</p>
<details><summary>Xem lời giải</summary><p>Thông báo cho khách về thay đổi khuyến nghị <b>trước khi</b> nhận lệnh. Nếu khách vẫn muốn mua, có thể thực hiện như lệnh tự đặt. Từ chối thẳng là không cần thiết; nhận lệnh im lặng là thiếu công bằng.</p></details></div>
<h4>e) Khuyến nghị tuân thủ cho công ty</h4>
<ul>
<li>Giới hạn số người biết trước thay đổi khuyến nghị; <b>rút ngắn</b> thời gian từ lúc quyết định đến lúc phát hành.</li>
<li>Có quy định cấm người biết trước thảo luận hoặc giao dịch trước khi phát hành.</li>
<li>Phát hành đồng thời; có quy trình phân bổ giao dịch bằng văn bản và công bố quy trình đó.</li>
<li>Rà soát tài khoản có hệ thống để không khách hàng nào được ưu đãi; công bố các cấp dịch vụ.</li>
</ul>`,
    },
    {
      title: '5. III(C) Suitability',
      minutes: 17,
      html: `
<div class="key"><b>III(C)</b> có hai phần.<br>
<b>(1) Khi có quan hệ tư vấn với khách hàng</b>, người hành nghề phải: (a) tìm hiểu hợp lý về kinh nghiệm đầu tư, mục tiêu lợi nhuận và rủi ro, ràng buộc tài chính của khách hàng <b>trước khi</b> khuyến nghị hoặc hành động, và cập nhật định kỳ; (b) xác định khoản đầu tư phù hợp với tình hình tài chính và nhất quán với mục tiêu, ràng buộc đã ghi bằng văn bản; (c) đánh giá tính phù hợp trong <b>bối cảnh toàn bộ danh mục</b>.<br>
<b>(2) Khi quản lý danh mục theo một mandate</b>, chiến lược hay phong cách, chỉ khuyến nghị hoặc thực hiện đầu tư <b>nhất quán với mục tiêu và ràng buộc đã công bố</b> của danh mục.</div>
<h4>a) ${t('ips', 'Bản chính sách đầu tư (IPS)')}</h4>
<p>Công cụ chính để tuân thủ III(C). IPS ghi lại: loại khách hàng và có người thụ hưởng riêng không; mục tiêu (lợi nhuận, rủi ro); ràng buộc (thanh khoản, thời gian, thuế, pháp lý, hoàn cảnh riêng); và chuẩn so sánh để đánh giá kết quả. IPS nên được rà soát <b>ít nhất hằng năm</b> và mỗi khi hoàn cảnh khách hàng thay đổi lớn (kết hôn, nghỉ hưu, nhận thừa kế).</p>
<h4>b) ${t('unsolicited', 'Lệnh do khách hàng tự yêu cầu (unsolicited trade)')} nhưng không phù hợp</h4>
<p>Khách hàng tự yêu cầu mua một chứng khoán mà người quản lý biết là không phù hợp với IPS. Trước hết phải <b>trao đổi</b> với khách hàng về lý do. Sau đó:</p>
<ul>
<li><b>Ảnh hưởng nhỏ</b> lên rủi ro và lợi nhuận của toàn danh mục: giải thích cho khách hàng sự sai lệch so với IPS, làm theo quy định của công ty về phê duyệt, khách hàng xác nhận đã được giải thích. Sau đó có thể thực hiện.</li>
<li><b>Ảnh hưởng lớn</b>: đề nghị cập nhật IPS để khách hàng chấp nhận hồ sơ rủi ro mới. Nếu khách không đồng ý, có thể (nếu chính sách công ty cho phép) thực hiện trong một ${t('cdacct', 'tài khoản riêng do khách hàng tự chỉ đạo (client-directed account)')}. Không còn cách nào thì cân nhắc có nên tiếp tục quan hệ.</li>
</ul>
<h4>c) Tình huống</h4>
<div class="example"><div class="ex-h">Ví dụ 5.1 - Một khuyến nghị cho hai người</div>
<p>Cố vấn Phước có hai khách hàng thu nhập tương đương. Ông Linh 60 tuổi, tài sản lớn, chấp nhận rủi ro cao. Anh Sét 40 tuổi, chỉ muốn lợi nhuận ổn định, ít biến động để lo học phí cho con. Phước khuyến nghị cả hai dành 20% danh mục cho cổ phiếu công nghệ vốn hóa nhỏ, không trả cổ tức.</p>
<details><summary>Xem lời giải</summary><p><b>Vi phạm III(C) với anh Sét</b>: khoản đầu tư không hợp với khả năng và mong muốn chịu rủi ro. Với ông Linh có thể phù hợp. Tuổi tác không phải yếu tố duy nhất; khả năng chịu rủi ro phụ thuộc tài sản và mục tiêu.</p></details></div>
<div class="example"><div class="ex-h">Ví dụ 5.2 - Quỹ thu nhập mua cổ phiếu không trả cổ tức</div>
<p>Quản lý một quỹ thu nhập cao (high income) mua cổ phiếu một công ty tài chính không trả cổ tức, vì cho rằng cổ phiếu đang bị định giá thấp và ngành có tiềm năng tăng trưởng.</p>
<details><summary>Xem lời giải</summary><p><b>Vi phạm III(C).</b> Khoản đầu tư có thể hấp dẫn, nhưng không nhất quán với mandate tạo thu nhập của quỹ.</p></details></div>
<div class="example"><div class="ex-h">Ví dụ 5.3 - Chọn người quản lý phụ rẻ nhất</div>
<p>Một công ty quản lý tài sản cần thuê người quản lý phụ (subadviser) cho phần đầu tư quốc tế. Sau khi nhận 7 hồ sơ, giám đốc chọn đơn vị có phí thấp nhất để ít ảnh hưởng nhất đến lợi nhuận của công ty, không xem xét chiến lược của đơn vị đó có hợp với IPS của khách hàng không.</p>
<details><summary>Xem lời giải</summary><p><b>Vi phạm.</b> Phí là một tiêu chí, nhưng phải đánh giá xem quy trình đầu tư của người quản lý phụ có <b>phù hợp</b> với mục tiêu của khách hàng không (III(C)), và thẩm định kỹ người quản lý phụ (V(A), ET-07). Lý do "lợi nhuận của công ty" còn đặt lợi ích công ty trước khách hàng.</p></details></div>
<p class="tip"><b>Khuyến nghị tuân thủ:</b> lập IPS bằng văn bản cho mỗi khách hàng; xem xét đầy đủ mục tiêu, ràng buộc và chuẩn so sánh; rà soát định kỳ và khi hoàn cảnh thay đổi.</p>
<p class="warn"><b>Bẫy:</b> III(C) phần (1) chỉ áp dụng khi có <b>quan hệ tư vấn</b>. Người quản lý quỹ không gặp từng nhà đầu tư thì không phải lập IPS cho từng người, nhưng phải tuân thủ mandate của quỹ (phần 2).</p>`,
    },
    {
      title: '6. III(D) Performance Presentation',
      minutes: 10,
      html: `
<div class="key"><b>III(D):</b> khi trình bày thông tin về kết quả đầu tư, người hành nghề phải nỗ lực hợp lý để thông tin đó <b>công bằng, chính xác và đầy đủ</b>.</div>
<ul>
<li>Không trình bày sai hoặc gây hiểu lầm về kết quả của bản thân hay của công ty.</li>
<li>Không nói hoặc ngụ ý rằng có thể đạt lại mức lợi nhuận trong quá khứ.</li>
<li>Bài trình bày ngắn (một slide, quảng cáo) được phép tóm tắt, nhưng phải nói rõ là thông tin có giới hạn và cung cấp chi tiết khi khách hàng yêu cầu.</li>
<li>Kết quả mô phỏng hoặc ${t('backtest', 'kiểm định quá khứ (backtest)')} phải được ghi rõ là mô phỏng, không phải kết quả thực.</li>
<li>Không loại bỏ các tài khoản đã chấm dứt hoặc kết quả kém khỏi ${t('composite', 'nhóm danh mục tổng hợp (composite)')}: đó là ${t('survivor', 'thiên lệch sống sót (survivorship bias)')}.</li>
</ul>
<div class="example"><div class="ex-h">Ví dụ 6.1 - Chỉ khoe ba tài khoản tốt nhất</div>
<p>Một công ty quản lý 10 tài khoản cùng chiến lược. Lợi nhuận năm qua (%): 12,5; 9,8; 7,1; 15,2; -3,4; 6,0; 4,3; 10,9; -1,2; 8,6. Tài liệu tiếp thị ghi "lợi nhuận chiến lược: 12,87%", là trung bình của 3 tài khoản tốt nhất.</p>
<details><summary>Xem lời giải</summary><p>Trung bình đơn giản của cả 10 tài khoản là 6,98%. Con số 12,87% (trung bình của 15,2; 12,5; 10,9) không đại diện cho chiến lược: <b>vi phạm III(D)</b>. Cách đúng là trình bày composite gồm mọi tài khoản cùng chiến lược, thường theo trọng số tài sản.</p></details></div>
<div class="example"><div class="ex-h">Ví dụ 6.2 - Chọn con số đẹp hơn</div>
<p>Hệ thống mới tính được cả lợi nhuận theo thời gian (time-weighted) và theo tiền (money-weighted). Trưởng bộ phận dịch vụ khách hàng dặn không ghi tên loại lợi nhuận, để mỗi kỳ chọn con số cao hơn mà báo cáo.</p>
<details><summary>Xem lời giải</summary><p><b>Vi phạm III(D).</b> Báo cáo gây hiểu lầm vì phương pháp thay đổi tùy theo con số nào đẹp hơn, lại không được công bố.</p></details></div>
<h4>Khuyến nghị tuân thủ</h4>
<ul>
<li>Áp dụng ${t('gips', 'GIPS (Global Investment Performance Standards)')}: cách tốt nhất để đáp ứng III(D). Không bắt buộc, nhưng được khuyến khích.</li>
<li>Nếu không áp dụng GIPS: cân nhắc trình độ của người nghe; trình bày composite có trọng số của các danh mục tương tự thay vì một tài khoản; gồm cả tài khoản đã chấm dứt; công bố trước thuế hay sau thuế, trước phí hay sau phí; công bố khi kết quả có dùng đòn bẩy hoặc mô phỏng.</li>
<li>Lưu giữ dữ liệu và hồ sơ dùng để tính kết quả.</li>
</ul>`,
    },
    {
      title: '7. III(E) Preservation of Confidentiality',
      minutes: 9,
      html: `
<div class="key"><b>III(E):</b> người hành nghề phải giữ bí mật thông tin về khách hàng <b>hiện tại, cũ và tiềm năng</b>, trừ khi: (1) thông tin liên quan đến <b>hoạt động bất hợp pháp</b> của khách hàng; (2) <b>luật pháp yêu cầu</b> công bố; hoặc (3) khách hàng <b>cho phép</b> công bố.</div>
<ul>
<li>Nghĩa vụ không chấm dứt khi khách hàng rời đi.</li>
<li>Nếu khách hàng có hoạt động bất hợp pháp (ví dụ rửa tiền), người hành nghề có thể có nghĩa vụ báo cáo cơ quan chức năng theo luật. Nên tham vấn bộ phận tuân thủ hoặc pháp chế.</li>
<li>III(E) không ngăn việc hợp tác với cuộc điều tra của ${t('pcp', 'Chương trình Ứng xử Nghề nghiệp (PCP)')} của CFA Institute: khi luật cho phép, người hành nghề coi PCP là "sự mở rộng của chính mình" và cung cấp thông tin khách hàng phục vụ điều tra về hành vi của chính họ.</li>
<li>Thông tin điện tử: công ty cần biện pháp bảo mật hợp lý (mã hóa, phân quyền truy cập); người hành nghề tuân thủ chính sách đó.</li>
</ul>
<div class="example"><div class="ex-h">Ví dụ 7.1 - Giới thiệu người quyên góp</div>
<p>Khách hàng của Phong kể rằng bà định tặng 50.000 USD cho từ thiện để giảm thuế. Phong nói lại với bạn mình, chủ tịch một quỹ từ thiện, để người này đến gặp bà xin khoản tài trợ khoảng 50.000 USD.</p>
<details><summary>Xem lời giải</summary><p><b>Vi phạm III(E).</b> Phong tiết lộ thông tin tài chính riêng của khách hàng mà không được phép.</p></details></div>
<div class="example"><div class="ex-h">Ví dụ 7.2 - Bản tin gửi mọi khách hàng</div>
<p>Cố vấn Tâm vừa được mời vào ban điều hành một chương trình golf thanh thiếu niên phi lợi nhuận. Trong bản tin định kỳ gửi mọi khách hàng, chị thêm một đoạn ngắn giới thiệu chiến dịch gây quỹ và vai trò của mình.</p>
<details><summary>Xem lời giải</summary><p><b>Không vi phạm.</b> Chị không tiết lộ thông tin của bất kỳ khách hàng nào; chỉ thông báo chung cho mọi người, có nêu rõ vai trò của mình.</p></details></div>
<p class="warn"><b>Bẫy:</b> thông tin công khai về khách hàng (ví dụ khách hàng là một công ty niêm yết đã công bố báo cáo tài chính) không phải là "bí mật". III(E) bảo vệ thông tin người hành nghề có được nhờ quan hệ với khách hàng.</p>`,
    },
    {
      title: '8. Tóm tắt và bẫy thường gặp',
      minutes: 6,
      html: `
<table class="plain"><thead><tr><th>Tình huống</th><th>Chuẩn</th><th>Kết luận</th></tr></thead><tbody>
<tr><td>Giao dịch quá mức để đạt chỉ tiêu hoa hồng</td><td>III(A)</td><td>Vi phạm (churning)</td></tr>
<tr><td>Hoa hồng của khách trả tiền thuê văn phòng công ty quản lý</td><td>III(A)</td><td>Vi phạm (soft dollars sai mục đích)</td></tr>
<tr><td>Khách hàng tự chỉ định công ty môi giới</td><td>III(A)</td><td>Được, vẫn tìm best execution</td></tr>
<tr><td>Quỹ hưu trí: ai là khách hàng?</td><td>III(A)</td><td>Người thụ hưởng</td></tr>
<tr><td>Kể trước khuyến nghị cho khách hàng lớn</td><td>III(B)</td><td>Vi phạm</td></tr>
<tr><td>Phát hành đồng thời, khách VIP được gọi thêm (đã công bố)</td><td>III(B)</td><td>Không vi phạm</td></tr>
<tr><td>Loại tài khoản người thân trả phí khỏi IPO</td><td>III(B)</td><td>Vi phạm, phải đối xử như khách khác</td></tr>
<tr><td>Khuyến nghị giống nhau cho hai khách khác khẩu vị rủi ro</td><td>III(C)</td><td>Vi phạm</td></tr>
<tr><td>Quỹ thu nhập mua cổ phiếu không trả cổ tức</td><td>III(C)</td><td>Vi phạm mandate</td></tr>
<tr><td>Chỉ trình bày các tài khoản tốt nhất</td><td>III(D)</td><td>Vi phạm</td></tr>
<tr><td>Cung cấp thông tin khách hàng cho PCP</td><td>III(E)</td><td>Không vi phạm</td></tr>
<tr><td>Kể chuyện tài chính của khách cho bạn</td><td>III(E)</td><td>Vi phạm</td></tr>
</tbody></table>
<p class="warn"><b>Ba bẫy lớn nhất:</b> (1) "fair" không phải "equal": được có cấp dịch vụ khác nhau nếu công bố và không làm hại ai; (2) lệnh khách tự đặt nhưng không phù hợp: <b>trao đổi trước</b>, không tự động từ chối hay im lặng làm theo; (3) bảo mật áp dụng cả cho khách hàng <b>cũ và tiềm năng</b>.</p>`,
    },
  ];

  const glossary = {
    loyalty: ['Duty of loyalty', 'Nghĩa vụ trung thành', 'Đặt lợi ích khách hàng trước lợi ích của công ty và của bản thân.'],
    govdocs: ['Governing documents', 'Văn bản điều chỉnh', 'Hợp đồng quản lý, điều lệ quỹ, văn bản tín thác quy định cách quản lý tài sản.'],
    fiduciary: ['Fiduciary duty', 'Nghĩa vụ ủy thác', 'Trách nhiệm pháp lý và đạo đức cao nhất khi quản lý tài sản thay người khác.'],
    churning: ['Churning', 'Giao dịch quá mức', 'Giao dịch nhiều hơn mức cần thiết để thu hoa hồng, gây hại cho khách hàng.'],
    softdollar: ['Soft dollars / client brokerage', 'Hoa hồng mềm', 'Dùng hoa hồng môi giới của khách hàng để mua dịch vụ; phải có lợi cho chính khách hàng.'],
    directed: ['Directed brokerage', 'Môi giới theo chỉ định', 'Khách hàng yêu cầu giao dịch qua một công ty môi giới cụ thể.'],
    bestexec: ['Best execution', 'Thực hiện tốt nhất', 'Giao dịch với tổng chi phí và chất lượng thực hiện tốt nhất cho khách hàng.'],
    proxy: ['Proxy voting', 'Bỏ phiếu ủy quyền', 'Thực hiện quyền biểu quyết của cổ phiếu trong danh mục thay khách hàng.'],
    servicelvl: ['Service levels', 'Các cấp độ dịch vụ', 'Gói dịch vụ khác nhau theo mức phí; được phép nếu công bố và không làm hại khách khác.'],
    dissemrec: ['Dissemination of recommendations', 'Phổ biến khuyến nghị', 'Gửi khuyến nghị mới hoặc thay đổi đồng thời đến mọi khách hàng phù hợp.'],
    alloc: ['Trade allocation', 'Phân bổ giao dịch', 'Chia khối lượng và giá của lệnh gộp cho các tài khoản một cách công bằng.'],
    prorata: ['Pro rata', 'Theo tỷ lệ', 'Chia theo tỷ lệ khối lượng mỗi khách đặt so với tổng.'],
    ips: ['Investment policy statement (IPS)', 'Bản chính sách đầu tư', 'Văn bản ghi mục tiêu, ràng buộc và chuẩn so sánh của khách hàng.'],
    unsolicited: ['Unsolicited trade', 'Lệnh khách hàng tự yêu cầu', 'Giao dịch khách hàng chủ động đề nghị, không do người quản lý khuyến nghị.'],
    cdacct: ['Client-directed account', 'Tài khoản do khách tự chỉ đạo', 'Tài khoản riêng để thực hiện các giao dịch khách hàng tự quyết, nằm ngoài IPS.'],
    backtest: ['Backtest / simulated results', 'Kiểm định quá khứ', 'Kết quả giả định nếu chiến lược được áp dụng trong quá khứ; không phải kết quả thực.'],
    composite: ['Composite', 'Nhóm danh mục tổng hợp', 'Tập hợp các danh mục cùng chiến lược để trình bày kết quả đại diện.'],
    survivor: ['Survivorship bias', 'Thiên lệch sống sót', 'Kết quả bị đẹp lên do loại bỏ các tài khoản hay quỹ đã chấm dứt hoặc kém.'],
    gips: ['Global Investment Performance Standards (GIPS)', 'Chuẩn trình bày kết quả đầu tư toàn cầu', 'Bộ chuẩn tự nguyện của CFA Institute để tính và trình bày kết quả công bằng.'],
    pcp: ['Professional Conduct Program (PCP)', 'Chương trình Ứng xử Nghề nghiệp', 'Bộ phận của CFA Institute điều tra và xử lý vi phạm Code và Standards.'],
  };

  const practice = [
    { q: 'Quản lý danh mục Hùng được doanh nghiệp K thuê quản lý quỹ hưu trí cho nhân viên K. Giám đốc tài chính K yêu cầu quỹ mua thêm cổ phiếu K để đỡ giá. Theo III(A), Hùng nên:', choices: ['Làm theo vì K là khách hàng đã thuê và trả phí cho anh', 'Chỉ mua nếu phù hợp với lợi ích của người thụ hưởng quỹ, vì họ mới là khách hàng', 'Mua với tỷ trọng nhỏ để giữ quan hệ, vì ảnh hưởng không đáng kể'], answer: 1, explain: 'Với quỹ hưu trí, khách hàng là người thụ hưởng. A nhầm khách hàng là doanh nghiệp. C vẫn đặt lợi ích quan hệ kinh doanh lên trên người thụ hưởng.' },
    { q: 'Công ty quản lý quỹ dùng hoa hồng của các quỹ để trả cho công ty môi giới với mức phí cao hơn thị trường; đổi lại, công ty môi giới cung cấp phần mềm kế toán nội bộ cho công ty quản lý. Hành vi này:', choices: ['Vi phạm III(A) vì hoa hồng của khách hàng được dùng cho lợi ích của công ty quản lý', 'Không vi phạm nếu được ghi trong báo cáo tài chính của công ty quản lý', 'Không vi phạm vì mọi dịch vụ từ công ty môi giới đều là soft dollars hợp lệ'], answer: 0, explain: 'Soft dollars chỉ được dùng cho dịch vụ có lợi cho khách hàng trong quá trình đầu tư; phần mềm kế toán nội bộ phục vụ công ty quản lý. Ghi vào báo cáo (B) không làm hành vi hợp lệ. C sai vì không phải mọi dịch vụ đều hợp lệ.' },
    { q: 'Một công ty có hai gói dịch vụ: gói cơ bản nhận báo cáo qua email, gói cao cấp được gọi điện thảo luận thêm. Cả hai gói được công bố cho mọi khách hàng. Khuyến nghị mới được gửi cho mọi người cùng lúc, sau đó khách gói cao cấp được gọi điện. Theo III(B):', choices: ['Vi phạm vì khách hàng không được đối xử như nhau', 'Vi phạm vì khách gói cao cấp nhận thông tin chi tiết hơn', 'Không vi phạm vì các cấp dịch vụ đã được công bố và không ai nhận khuyến nghị trước'], answer: 2, explain: 'Fair dealing là công bằng, không phải như nhau. Cấp dịch vụ khác nhau được phép nếu công bố và không làm hại khách khác. A và B nhầm "fair" với "equal".' },
    { q: 'Nhà quản lý được phân bổ ít cổ phiếu IPO hơn tổng lượng các khách hàng phù hợp đặt mua. Trong các khách hàng có tài khoản của anh trai anh, trả phí như mọi khách khác. Cách làm phù hợp nhất:', choices: ['Phân bổ theo tỷ lệ cho mọi khách hàng phù hợp, kể cả tài khoản của anh trai', 'Không phân bổ cho anh trai để tránh mọi nghi ngờ xung đột lợi ích', 'Ưu tiên khách hàng lớn nhất trước, số còn lại chia đều'], answer: 0, explain: 'Tài khoản người thân trả phí được đối xử như khách hàng khác: không ưu tiên nhưng cũng không bị loại (B sai). Ưu tiên khách lớn (C) là thiếu công bằng.' },
    { q: 'Hôm qua công ty hạ khuyến nghị cổ phiếu X từ "mua" xuống "bán" và đã gửi cho mọi khách hàng. Hôm nay một khách gọi đặt mua X. Nhân viên môi giới nên:', choices: ['Từ chối lệnh vì trái với khuyến nghị của công ty', 'Thông báo cho khách về khuyến nghị mới trước khi nhận lệnh', 'Nhận lệnh ngay vì đây là lệnh khách hàng tự đặt'], answer: 1, explain: 'Khách có thể chưa đọc thông báo; cho họ biết trước rồi để họ quyết định. Từ chối (A) là không cần thiết; nhận lệnh im lặng (C) không cho khách cơ hội công bằng để hành động theo khuyến nghị mới.' },
    { q: 'Một khách hàng có IPS thận trọng yêu cầu mua một cổ phiếu đầu cơ với số tiền chiếm khoảng 1% danh mục. Người quản lý nên:', choices: ['Từ chối vì giao dịch không phù hợp IPS', 'Thực hiện ngay vì khách hàng có quyền quyết định với tiền của mình', 'Trao đổi với khách về sự sai lệch so với IPS, làm theo quy trình phê duyệt của công ty và để khách xác nhận trước khi thực hiện'], answer: 2, explain: 'Lệnh tự yêu cầu không phù hợp nhưng ảnh hưởng nhỏ lên toàn danh mục: giải thích, lấy xác nhận theo chính sách công ty rồi thực hiện. Từ chối (A) không bắt buộc; thực hiện ngay mà không trao đổi (B) bỏ qua nghĩa vụ III(C).' },
    { q: 'Quản lý quỹ chỉ số VN30 mua thêm một cổ phiếu ngoài rổ vì tin rằng cổ phiếu này sẽ tăng mạnh. Hành vi này:', choices: ['Vi phạm III(C) vì không nhất quán với mandate của quỹ', 'Không vi phạm nếu cổ phiếu thật sự tăng giá', 'Không vi phạm vì III(C) chỉ áp dụng cho quan hệ tư vấn với cá nhân'], answer: 0, explain: 'Phần (2) của III(C) yêu cầu đầu tư nhất quán với mandate đã công bố. Kết quả tốt (B) không biện minh. C sai vì III(C) có phần riêng cho danh mục quản lý theo mandate.' },
    { q: 'Tài liệu tiếp thị của một công ty trình bày lợi nhuận 5 năm của composite chiến lược tăng trưởng nhưng loại bỏ ba tài khoản khách hàng đã rút vốn sau khi lỗ lớn. Điều này:', choices: ['Không vi phạm vì các tài khoản đó không còn là khách hàng', 'Vi phạm III(D) vì kết quả bị thiên lệch sống sót và không đầy đủ', 'Không vi phạm nếu công ty không tuyên bố tuân thủ GIPS'], answer: 1, explain: 'Bỏ tài khoản đã chấm dứt làm kết quả đẹp giả tạo: không công bằng, không đầy đủ. III(D) áp dụng dù công ty có tuân thủ GIPS hay không (C sai). A bỏ qua yêu cầu trình bày đầy đủ.' },
    { q: 'Cơ quan điều tra của CFA Institute (PCP) đang điều tra một khiếu nại về hành vi của chuyên viên Mai và yêu cầu cô cung cấp hồ sơ giao dịch của khách hàng liên quan. Luật địa phương không cấm. Mai:', choices: ['Phải từ chối vì III(E) bắt buộc giữ bí mật khách hàng', 'Chỉ được cung cấp nếu có đồng ý bằng văn bản của khách hàng', 'Có thể cung cấp, vì III(E) không ngăn hợp tác với PCP khi luật cho phép'], answer: 2, explain: 'III(E) không nhằm ngăn hợp tác với PCP; người hành nghề coi PCP như sự mở rộng của chính mình. A và B đặt ra rào cản mà chuẩn không yêu cầu.' },
    { q: 'Cố vấn Nam phát hiện khách hàng cũ, đã ngừng sử dụng dịch vụ từ hai năm trước, đang bị báo chí đồn đoán. Một phóng viên hỏi Nam về tình hình tài chính của người này. Theo III(E), Nam:', choices: ['Có thể chia sẻ vì người này không còn là khách hàng', 'Phải giữ bí mật vì nghĩa vụ bảo mật áp dụng cả cho khách hàng cũ', 'Có thể chia sẻ nếu thông tin giúp báo chí đưa tin chính xác hơn'], answer: 1, explain: 'III(E) áp dụng cho khách hàng hiện tại, cũ và tiềm năng. Ba ngoại lệ (hoạt động bất hợp pháp, luật yêu cầu, khách hàng cho phép) không có ở đây. A và C không thuộc ngoại lệ nào.' },
  ];

  window.LESSONS['ET-05'] = {
    moduleId: 'ET-05',
    calculator: 'Không cần máy tính',
    warmup: [
      'Nhắc lại hai chuẩn của Standard II (ET-04) và điều kiện để một thông tin bị coi là MNPI.',
      'Nếu bạn là cố vấn đầu tư, bạn cần biết những gì về khách hàng trước khi khuyến nghị?',
      'Theo bạn, cho khách VIP nhận báo cáo sớm hơn khách thường có công bằng không? Vì sao?',
    ],
    sections,
    glossary,
    practice,
    widgets: {},
    slides: [],
    wrapup: [
      'Nêu thứ tự ưu tiên lợi ích và áp dụng nó vào ví dụ quỹ hưu trí.',
      'Giải thích quy trình xử lý lệnh khách hàng tự yêu cầu nhưng không phù hợp IPS, theo hai trường hợp ảnh hưởng nhỏ và lớn.',
      'Kể ba ngoại lệ của III(E) và một trường hợp không thuộc ngoại lệ nào.',
    ],
  };
}());
