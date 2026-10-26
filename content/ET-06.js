// Bài giảng ET-06 - Guidance for Standard IV: Duties to Employers (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t } = window.CFAH;

  const sections = [
    {
      title: '1. Bức tranh lớn',
      minutes: 5,
      html: `
<p>Standard III (ET-05) nói về nghĩa vụ với khách hàng. Standard IV nói về nghĩa vụ với <b>công ty đang thuê mình</b> (employer). Ba chuẩn con:</p>
<table class="plain"><thead><tr><th>Chuẩn</th><th>Câu hỏi</th><th>Ý chính</th></tr></thead><tbody>
<tr><td>IV(A) Loyalty</td><td>Tôi có làm hại công ty không?</td><td>Không tước đi kỹ năng, không lộ bí mật, không cạnh tranh khi còn làm việc</td></tr>
<tr><td>IV(B) Additional Compensation Arrangements</td><td>Tôi có nhận lợi ích nào từ bên ngoài không?</td><td>Lợi ích có thể xung đột với công ty cần <b>đồng ý bằng văn bản</b></td></tr>
<tr><td>IV(C) Responsibilities of Supervisors</td><td>Người tôi quản lý có tuân thủ không?</td><td>Nỗ lực hợp lý để <b>ngăn ngừa và phát hiện</b> vi phạm</td></tr>
</tbody></table>
<div class="key">Trung thành với công ty <b>không</b> có nghĩa là vâng lời mọi điều. Nghĩa vụ với khách hàng và thị trường đứng trên nghĩa vụ với công ty. Không ai được viện lý do "công ty bảo thế" để vi phạm Code và Standards.</div>
<p>Các LOS (áp dụng, đề xuất quy trình, nhận diện vi phạm) được lồng vào từng phần.</p>`,
    },
    {
      title: '2. IV(A) Loyalty: yêu cầu và hoạt động độc lập',
      minutes: 15,
      html: `
<div class="key"><b>IV(A):</b> trong các vấn đề liên quan đến công việc, người hành nghề phải hành động vì lợi ích của công ty và không được: tước đi của công ty lợi ích từ kỹ năng và năng lực của mình, tiết lộ thông tin bí mật, hoặc gây hại cho công ty bằng cách khác.</div>
<h4>a) Phạm vi</h4>
<ul>
<li>Chuẩn áp dụng cho <b>các vấn đề liên quan đến công việc</b>. Đời sống riêng hoàn toàn không liên quan thì không thuộc phạm vi.</li>
<li>Không đòi hỏi đặt lợi ích công ty trên lợi ích khách hàng. Nếu công ty yêu cầu làm điều trái đạo đức, người hành nghề không được làm theo.</li>
<li>Áp dụng cả với nhân viên toàn thời gian, bán thời gian. Với ${t('contractor', 'người làm theo hợp đồng độc lập (independent contractor)')}, nghĩa vụ chủ yếu xác định theo hợp đồng.</li>
</ul>
<h4>b) ${t('indep', 'Hoạt động độc lập (independent practice)')}</h4>
<p>Là hoạt động có thể <b>cạnh tranh</b> với công ty hoặc xung đột với lợi ích của công ty, ví dụ tư vấn đầu tư riêng, quản lý tiền cho người quen để lấy phí.</p>
<p>Chỉ được làm hoạt động độc lập có thù lao khi đã:</p>
<ol>
<li>Thông báo cho công ty, mô tả <b>đầy đủ</b>: loại dịch vụ, thù lao, thời gian, bản chất công việc;</li>
<li>Được công ty <b>đồng ý</b> với mọi điều khoản <b>trước khi bắt đầu</b>.</li>
</ol>
<div class="example"><div class="ex-h">Ví dụ 2.1 - Tư vấn cuối tuần</div>
<p>Chuyên viên phân tích Hiếu làm việc tại công ty quản lý quỹ. Cuối tuần, anh nhận tư vấn danh mục cho ba người quen, mỗi người trả phí hằng tháng. Anh nghĩ đây là việc ngoài giờ nên không cần báo.</p>
<details><summary>Xem lời giải</summary><p><b>Vi phạm IV(A).</b> Tư vấn đầu tư có thu phí cạnh tranh trực tiếp với công ty. Làm ngoài giờ không thay đổi bản chất. Hiếu phải mô tả đầy đủ và được công ty đồng ý trước khi bắt đầu; thù lao từ người quen cũng cần đồng ý bằng văn bản theo IV(B).</p></details></div>
<div class="example"><div class="ex-h">Ví dụ 2.2 - Dạy học buổi tối</div>
<p>Quản lý danh mục Ngọc dạy môn tài chính doanh nghiệp buổi tối ở một trường đại học, có nhận thù lao. Công ty không kinh doanh giáo dục.</p>
<details><summary>Xem lời giải</summary><p>Việc dạy học không cạnh tranh với công ty, nên <b>không phải</b> hoạt động độc lập theo IV(A). Tuy vậy, nên báo cho công ty và tuân thủ chính sách công ty về công việc bên ngoài, nhất là khi việc dạy có thể ảnh hưởng đến thời gian làm việc.</p></details></div>
<p class="warn"><b>Bẫy:</b> IV(A) không cấm mọi việc làm thêm. Chỉ hoạt động <b>cạnh tranh hoặc xung đột</b> với công ty mới cần đồng ý trước.</p>`,
    },
    {
      title: '3. IV(A): khi rời công ty và khi tố giác',
      minutes: 20,
      html: `
<h4>a) Chuẩn bị rời đi: được chuẩn bị, chưa được cạnh tranh</h4>
<p>Người hành nghề phải tiếp tục hành động vì lợi ích công ty <b>cho đến khi thôi việc có hiệu lực</b>. Trong thời gian này:</p>
<table class="plain"><thead><tr><th>Được phép (chuẩn bị)</th><th>Không được phép (cạnh tranh, gây hại)</th></tr></thead><tbody>
<tr><td>Thuê văn phòng, mua thiết bị, vay vốn cho công ty mới</td><td>Lôi kéo khách hàng của công ty trước khi nghỉ</td></tr>
<tr><td>Đăng ký thành lập công ty mới với cơ quan quản lý</td><td>Chép, mang theo danh sách khách hàng, hồ sơ, mô hình</td></tr>
<tr><td>Tìm việc ở công ty khác, phỏng vấn</td><td>Lấy bí mật kinh doanh (trade secrets), dùng sai thông tin bí mật</td></tr>
<tr><td>Làm những việc trên ngoài giờ, không dùng nguồn lực công ty</td><td>${t('selfdeal', 'Tự giao dịch có lợi cho mình (self-dealing)')}, chuyển cơ hội kinh doanh của công ty cho mình</td></tr>
</tbody></table>
<ul>
<li>Hồ sơ của công ty trên <b>mọi phương tiện</b> (máy tính ở nhà, máy tính bảng, điện thoại, ổ lưu trữ đám mây) đều là tài sản của công ty.</li>
<li>Sau khi đã nghỉ: biết tên và sự tồn tại của khách hàng cũ thường <b>không</b> phải bí mật. Được dùng kinh nghiệm và kiến thức đã tích lũy. Nếu không có ${t('noncompete', 'thỏa thuận không cạnh tranh (noncompete agreement)')}, được liên hệ khách hàng cũ bằng thông tin công khai (danh bạ, hồ sơ công khai).</li>
<li>Nếu đã ký thỏa thuận không cạnh tranh hoặc không lôi kéo khách hàng thì phải tuân thủ.</li>
<li>Tài khoản mạng xã hội dùng cho công việc: tuân thủ chính sách của công ty về ai sở hữu tài khoản và danh bạ; không dùng để báo tin chuyển việc và mời khách hàng trước khi thôi việc có hiệu lực.</li>
</ul>
<div class="example"><div class="ex-h">Ví dụ 3.1 - Đăng ký công ty mới</div>
<p>Chuyên viên Như đang làm ở công ty chứng khoán Sư Tử. Chưa báo công ty, cô đăng ký thành lập một công ty tư vấn sẽ cạnh tranh với Sư Tử, nhưng chưa tìm khách hàng hay hoạt động gì.</p>
<details><summary>Xem lời giải</summary><p><b>Không vi phạm.</b> Đăng ký thành lập là bước chuẩn bị, chưa phải kinh doanh cạnh tranh. Vi phạm sẽ xảy ra nếu cô bắt đầu phục vụ hoặc lôi kéo khách hàng trước khi nghỉ việc.</p></details></div>
<div class="example"><div class="ex-h">Ví dụ 3.2 - Vay vốn trong giờ ăn trưa</div>
<p>Hiền đã nộp đơn nghỉ việc, còn hai tuần nữa mới có hiệu lực. Trong giờ ăn trưa, cô vay ngân hàng cho công ty mới và mua thiết bị văn phòng.</p>
<details><summary>Xem lời giải</summary><p><b>Không vi phạm.</b> Vay vốn và mua thiết bị là chuẩn bị, làm ngoài giờ, không lấy gì của công ty.</p></details></div>
<div class="example"><div class="ex-h">Ví dụ 3.3 - Liên hệ khách hàng cũ bằng danh bạ công khai</div>
<p>Sau khi nghỉ việc, Quế mở công ty quản lý tài sản riêng. Cô không ký thỏa thuận không cạnh tranh, không mang theo danh sách khách hàng, đã xóa hồ sơ công ty trên máy cá nhân. Cô tìm số điện thoại khách hàng cũ từ danh bạ công khai và gọi mời họ.</p>
<details><summary>Xem lời giải</summary><p><b>Không vi phạm.</b> Cô đã nghỉ việc, không dùng tài sản của công ty cũ, không bị ràng buộc bởi thỏa thuận không cạnh tranh.</p></details></div>
<div class="example"><div class="ex-h">Ví dụ 3.4 - Chép mô hình mang theo</div>
<p>Trước ngày nghỉ, Đức chép sang ổ USB các mô hình định giá do anh xây dựng tại công ty, vì cho rằng "mình làm ra thì là của mình".</p>
<details><summary>Xem lời giải</summary><p><b>Vi phạm IV(A).</b> Sản phẩm làm ra trong quá trình làm việc là tài sản của công ty, trừ khi có thỏa thuận khác. Đức chỉ được mang theo kiến thức và kinh nghiệm, không được mang tài liệu.</p></details></div>
<h4>b) ${t('whistle', 'Tố giác (whistleblowing)')}</h4>
<p>Khi công ty có hành vi bất hợp pháp hoặc phi đạo đức, người hành nghề có thể phải hành động <b>trái với lợi ích của công ty</b> để bảo vệ khách hàng và thị trường. Việc này <b>không vi phạm</b> IV(A), với điều kiện mục đích rõ ràng là bảo vệ khách hàng hay sự toàn vẹn của thị trường, <b>không phải vì lợi ích cá nhân</b>.</p>
<div class="example"><div class="ex-h">Ví dụ 3.5</div>
<p>Tùng phát hiện cấp trên gian lận làm hại khách hàng. Anh báo bộ phận tuân thủ, nhưng người phụ trách bảo anh im lặng. Tùng lo rằng nếu báo cơ quan quản lý thì sẽ "không trung thành".</p>
<details><summary>Xem lời giải</summary><p><b>Không vi phạm</b> nếu Tùng báo cơ quan quản lý để bảo vệ khách hàng. Ngược lại, nếu im lặng anh có thể vi phạm các chuẩn khác (I(A), I(D)). Trung thành không có nghĩa là che giấu sai phạm.</p></details></div>`,
    },
    {
      title: '4. IV(A): khuyến nghị tuân thủ',
      minutes: 10,
      html: `
<p>Người hành nghề nên khuyến khích công ty có các chính sách sau, và tự mình hiểu rõ chúng:</p>
<ul>
<li><b>Chính sách cạnh tranh (competition policy):</b> nêu rõ hoạt động nào bị coi là cạnh tranh, có cần thỏa thuận không cạnh tranh không; nhân viên hiểu rõ điều khoản trước khi ký.</li>
<li><b>Chính sách khi nghỉ việc (termination policy):</b> quy định về giai đoạn báo trước, việc tiếp tục hành động vì lợi ích công ty, cách xử lý hồ sơ, tài khoản mạng xã hội và liên hệ với khách hàng khi chuyển đi.</li>
<li><b>Quy trình báo cáo sự cố (incident reporting):</b> kênh để nhân viên báo cáo nghi ngờ vi phạm, bảo vệ người tố giác.</li>
<li><b>Phân loại nhân viên (employee classification):</b> xác định rõ ai là nhân viên, ai là người làm theo hợp đồng, và nghĩa vụ tương ứng.</li>
</ul>
<div class="example"><div class="ex-h">Ví dụ 4.1 - Sách nghiên cứu nội bộ</div>
<p>Lâm là chuyên viên phân tích. Trong giờ làm, anh viết một bộ tài liệu về định giá ngân hàng cho phòng nghiên cứu. Sau đó anh định xuất bản thành sách có thu tiền bản quyền mà không hỏi công ty.</p>
<details><summary>Xem lời giải</summary><p><b>Vi phạm IV(A).</b> Tài liệu làm trong giờ làm việc, cho công ty, là tài sản của công ty. Lâm cần được công ty cho phép trước khi xuất bản, và có thể cần đồng ý bằng văn bản về phần thù lao (IV(B)).</p></details></div>
<div class="example"><div class="ex-h">Ví dụ 4.2 - Nghỉ phép dài ngày</div>
<p>Hà xin nghỉ không lương 6 tháng để chăm con nhỏ. Trong thời gian đó, một công ty khác mời cô làm tư vấn bán thời gian về quản lý danh mục.</p>
<details><summary>Xem lời giải</summary><p>Nghỉ không lương vẫn là nhân viên. Nếu nhận việc tư vấn cạnh tranh mà không được công ty đồng ý, Hà <b>vi phạm IV(A)</b>. Cô cần báo và được đồng ý trước.</p></details></div>
<p class="tip"><b>Mẹo làm bài:</b> gặp tình huống rời công ty, hỏi hai câu: (1) hành vi xảy ra <b>trước hay sau</b> khi thôi việc có hiệu lực? (2) có dùng <b>tài sản</b> của công ty (danh sách, hồ sơ, thời gian làm việc) không?</p>`,
    },
    {
      title: '5. IV(B) Additional Compensation Arrangements',
      minutes: 14,
      html: `
<div class="key"><b>IV(B):</b> người hành nghề không được nhận quà, lợi ích, thù lao hay bất kỳ khoản đền đáp nào <b>cạnh tranh</b> với hoặc có thể hợp lý dẫn đến <b>xung đột lợi ích</b> với công ty, trừ khi có <b>đồng ý bằng văn bản từ mọi bên liên quan</b>.</div>
<ul>
<li>"Thù lao" hiểu rộng: tiền, quyền lợi, chuyến du lịch, quyền thành viên câu lạc bộ, cổ phiếu, kể cả lợi ích gián tiếp.</li>
<li>"Văn bản" bao gồm cả <b>email</b>.</li>
<li>Khi xin đồng ý, cần nêu: bản chất của thù lao, giá trị ước tính, thời hạn, và bản chất công việc.</li>
<li>Nhân viên bán thời gian nên trao đổi các hoạt động có thể xung đột ngay khi được tuyển và tuân thủ giới hạn công ty đặt ra.</li>
</ul>
<h4>Phân biệt thưởng cho tương lai và quà cho quá khứ</h4>
<table class="plain"><thead><tr><th></th><th>Thưởng gắn với kết quả <b>tương lai</b></th><th>Quà cảm ơn kết quả <b>đã qua</b></th></tr></thead><tbody>
<tr><td>Ví dụ</td><td>"Năm nào danh mục tăng trên 20% tôi sẽ tặng anh chuyến du lịch"</td><td>"Năm ngoái danh mục tốt quá, tôi tặng anh vé xem bóng đá"</td></tr>
<tr><td>Rủi ro</td><td>Có thể khiến người quản lý ưu tiên tài khoản này, chấp nhận rủi ro quá mức</td><td>Ít tạo động cơ thiên lệch hơn</td></tr>
<tr><td>Yêu cầu</td><td>${t('addcomp', 'Thỏa thuận thù lao bổ sung')}: cần <b>đồng ý bằng văn bản trước</b> từ công ty (IV(B))</td><td>Cần <b>thông báo</b> cho công ty (theo I(B) Independence and Objectivity)</td></tr>
</tbody></table>
<div class="example"><div class="ex-h">Ví dụ 5.1 - Chuyến du lịch nếu đạt 50%</div>
<p>Phong quản lý tài khoản của ông Sơn. Ông Sơn hứa: "Năm nào tài khoản tăng ít nhất 50% trước thuế, vợ chồng anh được đi du lịch Mỹ do tôi trả tiền." Phong không báo công ty, rồi năm đó đi du lịch.</p>
<details><summary>Xem lời giải</summary><p><b>Vi phạm IV(B).</b> Lợi ích gắn với kết quả tương lai của một tài khoản cụ thể có thể tạo động cơ đối xử thiên lệch, ưu tiên rủi ro cao. Phong phải có đồng ý bằng văn bản của công ty trước.</p></details></div>
<div class="example"><div class="ex-h">Ví dụ 5.2 - Ghế hội đồng quản trị đổi lấy thẻ thành viên</div>
<p>Trí ngồi trong hội đồng quản trị của chuỗi phòng tập E. Đổi lại, gia đình anh được dùng miễn phí mọi cơ sở. Trí mua cổ phiếu E cho các khách hàng phù hợp. Anh không báo công ty vì "không nhận tiền".</p>
<details><summary>Xem lời giải</summary><p><b>Vi phạm IV(B).</b> Quyền lợi không bằng tiền vẫn là thù lao. Vị trí trong hội đồng quản trị cạnh tranh về thời gian và tạo xung đột khi anh mua cổ phiếu E cho khách hàng. Cần đồng ý bằng văn bản, đồng thời công bố xung đột theo VI(A) (ET-08).</p></details></div>
<p class="tip"><b>Khuyến nghị tuân thủ:</b> báo cáo bằng văn bản cho cấp trên trực tiếp về mọi thỏa thuận thù lao bổ sung, nêu rõ điều khoản; cập nhật khi điều khoản thay đổi.</p>
<p class="warn"><b>Bẫy:</b> "Mọi bên liên quan" ở đây chủ yếu là <b>công ty</b>. Có sự đồng ý của khách hàng mà không có đồng ý của công ty thì vẫn vi phạm.</p>`,
    },
    {
      title: '6. IV(C) Responsibilities of Supervisors',
      minutes: 20,
      html: `
<div class="key"><b>IV(C):</b> người hành nghề phải nỗ lực hợp lý để bảo đảm mọi người thuộc quyền giám sát hoặc quyền hạn của mình tuân thủ luật, quy tắc, quy định hiện hành và Code and Standards.</div>
<h4>a) Nội dung</h4>
<ul>
<li>Áp dụng với <b>mọi người</b> dưới quyền, kể cả người không phải thành viên CFA Institute. Người giám sát chịu trách nhiệm theo luật và Code, chứ không đòi hỏi nhân viên phải là thành viên.</li>
<li>Nghĩa vụ gồm hai phần: <b>ngăn ngừa</b> vi phạm và <b>phát hiện</b> vi phạm.</li>
<li>Có thể ${t('delegate', 'ủy quyền giám sát (delegate)')} một phần công việc, nhưng <b>không ủy quyền được trách nhiệm</b>.</li>
<li>Giám sát cả các hệ thống, mô hình, thuật toán giao dịch và nhà cung cấp bên ngoài mà bộ phận mình sử dụng.</li>
</ul>
<h4>b) ${t('compliance', 'Hệ thống tuân thủ (compliance system)')} phải đủ tốt</h4>
<ul>
<li>Người giám sát thấy hệ thống tuân thủ <b>không đủ</b> phải báo lên ban lãnh đạo và đề xuất khắc phục.</li>
<li>Nếu công ty không có quy trình tuân thủ hoặc quy trình không đủ để giám sát hiệu quả, người hành nghề phải <b>từ chối nhận trách nhiệm giám sát bằng văn bản</b> cho đến khi công ty có quy trình đầy đủ.</li>
<li>Nếu đã có quy trình hợp lý và thực sự áp dụng, người giám sát <b>không vi phạm</b> khi vẫn có vi phạm mà mình không phát hiện được.</li>
</ul>
<h4>c) Khi phát hiện hoặc nghi ngờ vi phạm</h4>
<ol>
<li><b>Kịp thời</b> tiến hành điều tra để xác định mức độ sai phạm.</li>
<li>Trong khi điều tra: <b>hạn chế</b> hoạt động của nhân viên đó và <b>tăng giám sát</b>.</li>
<li>Bảo đảm vi phạm không lặp lại. Chỉ nhận lời hứa "sẽ không tái phạm" của nhân viên là <b>không đủ</b>.</li>
</ol>
<div class="example"><div class="ex-h">Ví dụ 6.1 - Thăng chức nhưng không có quy trình</div>
<p>Huy được thăng chức quản lý danh mục cấp cao, giám sát ba quản lý danh mục. Anh xin bản quy trình giám sát bằng văn bản thì được trả lời rằng luật nước sở tại không yêu cầu nên công ty không có.</p>
<details><summary>Xem lời giải</summary><p>Huy nên <b>từ chối bằng văn bản</b> việc nhận trách nhiệm giám sát cho đến khi công ty có quy trình đủ để anh giám sát hiệu quả. Anh không có quyền "bắt" công ty hay nhân viên áp dụng Code and Standards của CFA Institute.</p></details></div>
<div class="example"><div class="ex-h">Ví dụ 6.2 - Lộ khuyến nghị trước khi phát hành</div>
<p>Trưởng phòng nghiên cứu Mát quyết định hạ khuyến nghị cổ phiếu T từ mua xuống bán. Theo quy trình công ty, chị báo miệng cho vài lãnh đạo trước khi viết báo cáo. Một lãnh đạo lập tức bán T trong tài khoản riêng và một số tài khoản khách hàng ủy thác; người khác báo trước cho vài khách hàng tổ chức.</p>
<details><summary>Xem lời giải</summary><p>Các lãnh đạo giao dịch và báo trước vi phạm III(B) Fair Dealing (và có thể VI(B)). Mát, với vai trò giám sát, cũng có vấn đề với IV(C): quy trình cho phép báo miệng trước mà không có biện pháp ngăn giao dịch là <b>không đủ</b>. Chị nên đề xuất quy trình mới: hạn chế người biết trước, cấm giao dịch trước khi phát hành, phát hành đồng thời.</p></details></div>
<div class="example"><div class="ex-h">Ví dụ 6.3 - Nhân viên hứa không tái phạm</div>
<p>Trưởng phòng Bảo phát hiện một nhân viên giao dịch cá nhân trước lệnh của khách hàng. Nhân viên xin lỗi và hứa không tái phạm. Bảo bỏ qua và không làm gì thêm.</p>
<details><summary>Xem lời giải</summary><p><b>Bảo vi phạm IV(C).</b> Lời hứa không đủ. Bảo phải điều tra mức độ, hạn chế hoạt động, tăng giám sát nhân viên, và báo cáo theo quy trình của công ty.</p></details></div>
<h4>d) Khuyến nghị tuân thủ</h4>
<p>Quy trình tuân thủ tốt nên: viết rõ ràng, dễ hiểu; chỉ định người phụ trách tuân thủ có đủ thẩm quyền; mô tả hệ thống báo cáo theo cấp; nêu phạm vi hành vi được và không được phép; có quy trình giám sát, kiểm tra và báo cáo vi phạm, cùng các mức kỷ luật.</p>
<p>Khi triển khai: phổ biến đến mọi nhân viên, cập nhật định kỳ, đào tạo, thiết kế cơ chế thưởng khuyến khích hành vi đúng (không thưởng chỉ theo doanh số), rà soát hành động của nhân viên, và phản ứng kịp thời khi có vi phạm. Người giám sát nên khuyến khích công ty có <b>bộ quy tắc đạo đức</b> riêng, tách khỏi quy trình tuân thủ chi tiết.</p>
<p class="warn"><b>Bẫy:</b> "Công ty có quy trình trên giấy" chưa đủ. Quy trình phải <b>được thực thi</b>; người giám sát phải thực sự kiểm tra.</p>`,
    },
    {
      title: '7. Tóm tắt và bẫy thường gặp',
      minutes: 6,
      html: `
<table class="plain"><thead><tr><th>Tình huống</th><th>Chuẩn</th><th>Kết luận</th></tr></thead><tbody>
<tr><td>Tư vấn có thu phí ngoài giờ, chưa báo công ty</td><td>IV(A)</td><td>Vi phạm</td></tr>
<tr><td>Đăng ký công ty mới, thuê văn phòng, vay vốn trước khi nghỉ</td><td>IV(A)</td><td>Không vi phạm (chuẩn bị)</td></tr>
<tr><td>Mời khách hàng của công ty trước khi nghỉ</td><td>IV(A)</td><td>Vi phạm</td></tr>
<tr><td>Mang theo danh sách khách hàng, mô hình</td><td>IV(A)</td><td>Vi phạm</td></tr>
<tr><td>Sau khi nghỉ, gọi khách cũ bằng danh bạ công khai (không có noncompete)</td><td>IV(A)</td><td>Không vi phạm</td></tr>
<tr><td>Tố giác sai phạm để bảo vệ khách hàng</td><td>IV(A)</td><td>Không vi phạm</td></tr>
<tr><td>Khách hứa thưởng nếu kết quả tương lai tốt</td><td>IV(B)</td><td>Cần đồng ý bằng văn bản trước</td></tr>
<tr><td>Khách tặng quà cảm ơn kết quả đã qua</td><td>I(B)</td><td>Thông báo cho công ty</td></tr>
<tr><td>Thù lao phi tiền mặt (thẻ thành viên) từ ghế HĐQT</td><td>IV(B)</td><td>Cần đồng ý bằng văn bản</td></tr>
<tr><td>Công ty không có quy trình giám sát</td><td>IV(C)</td><td>Từ chối giám sát bằng văn bản</td></tr>
<tr><td>Có quy trình hợp lý, vẫn có vi phạm không phát hiện được</td><td>IV(C)</td><td>Người giám sát không vi phạm</td></tr>
<tr><td>Chỉ nhận lời hứa không tái phạm</td><td>IV(C)</td><td>Vi phạm</td></tr>
</tbody></table>
<p class="warn"><b>Ba bẫy lớn nhất:</b> (1) nhầm <b>chuẩn bị</b> với <b>cạnh tranh</b>; (2) nghĩ rằng thù lao không bằng tiền thì không cần đồng ý; (3) nghĩ rằng ủy quyền giám sát là chuyển luôn trách nhiệm.</p>`,
    },
  ];

  const glossary = {
    contractor: ['Independent contractor', 'Người làm theo hợp đồng độc lập', 'Không phải nhân viên chính thức; nghĩa vụ với công ty chủ yếu xác định theo hợp đồng.'],
    indep: ['Independent practice', 'Hoạt động độc lập', 'Hoạt động có thể cạnh tranh hoặc xung đột với công ty; cần đồng ý trước nếu có thù lao.'],
    selfdeal: ['Self-dealing', 'Tự giao dịch có lợi cho mình', 'Dùng vị trí trong công ty để mưu lợi riêng, gây hại cho công ty.'],
    noncompete: ['Noncompete agreement', 'Thỏa thuận không cạnh tranh', 'Cam kết không cạnh tranh hoặc không lôi kéo khách hàng sau khi rời công ty.'],
    whistle: ['Whistleblowing', 'Tố giác', 'Báo cáo sai phạm của công ty để bảo vệ khách hàng hoặc thị trường; không vi phạm IV(A).'],
    addcomp: ['Additional compensation arrangement', 'Thỏa thuận thù lao bổ sung', 'Lợi ích từ bên ngoài gắn với công việc; cần đồng ý bằng văn bản trước.'],
    delegate: ['Delegation of supervision', 'Ủy quyền giám sát', 'Giao việc giám sát cho người khác; trách nhiệm vẫn thuộc người giám sát.'],
    compliance: ['Compliance system', 'Hệ thống tuân thủ', 'Chính sách, quy trình và con người giúp ngăn ngừa, phát hiện vi phạm.'],
  };

  const practice = [
    { q: 'Chuyên viên phân tích Toàn quản lý danh mục cho hai người họ hàng vào cuối tuần, mỗi người trả phí 1% tài sản mỗi năm. Công ty của anh cung cấp dịch vụ quản lý danh mục. Toàn chưa báo công ty. Toàn:', choices: ['Vi phạm IV(A) vì đây là hoạt động độc lập cạnh tranh, chưa được công ty đồng ý trước', 'Không vi phạm vì khách hàng là người thân', 'Không vi phạm vì anh làm ngoài giờ làm việc'], answer: 0, explain: 'Quản lý danh mục có thu phí cạnh tranh với công ty; phải mô tả đầy đủ và được đồng ý trước khi bắt đầu. Quan hệ họ hàng hay làm ngoài giờ không thay đổi bản chất cạnh tranh.' },
    { q: 'Trong thời gian báo trước nghỉ việc, hành động nào của chuyên viên Vân ÍT có khả năng vi phạm IV(A) nhất?', choices: ['Gửi email cho các khách hàng lớn mời họ chuyển sang công ty mới của cô', 'Thuê văn phòng và đăng ký giấy phép cho công ty mới, làm ngoài giờ', 'Tải danh sách khách hàng về máy cá nhân để liên hệ sau khi nghỉ'], answer: 1, explain: 'Thuê văn phòng, đăng ký giấy phép là chuẩn bị, được phép. Mời khách hàng trước khi nghỉ và tải danh sách khách hàng về máy cá nhân đều gây hại cho công ty.' },
    { q: 'Sau khi nghỉ việc, Khánh lập công ty riêng. Anh không ký thỏa thuận không cạnh tranh, không mang theo tài liệu nào. Anh nhớ tên vài khách hàng cũ, tìm số điện thoại trong danh bạ công khai và gọi mời họ. Khánh:', choices: ['Vi phạm IV(A) vì dùng thông tin có được từ công ty cũ', 'Vi phạm IV(A) vì mọi liên hệ với khách hàng cũ đều bị cấm trong một năm', 'Không vi phạm vì biết tên khách hàng cũ không phải bí mật và anh dùng nguồn công khai'], answer: 2, explain: 'Sau khi nghỉ, nếu không có noncompete, được liên hệ khách hàng cũ bằng thông tin công khai; tên khách hàng thường không phải bí mật, nên lựa chọn "dùng thông tin có được từ công ty cũ" sai. Code không đặt ra thời hạn cấm một năm.' },
    { q: 'Nhân viên phát hiện công ty che giấu khoản lỗ khỏi khách hàng. Bộ phận tuân thủ không xử lý. Anh báo cơ quan quản lý để bảo vệ khách hàng. Theo IV(A):', choices: ['Anh vi phạm vì đã làm hại uy tín công ty', 'Anh không vi phạm vì hành động nhằm bảo vệ khách hàng, không vì lợi ích cá nhân', 'Anh chỉ không vi phạm nếu đã nghỉ việc trước khi báo'], answer: 1, explain: 'Tố giác vì bảo vệ khách hàng và thị trường được phép. Nghĩa vụ với công ty không đứng trên nghĩa vụ với khách hàng, nên lựa chọn "làm hại uy tín công ty" sai. Cũng không cần nghỉ việc trước khi báo.' },
    { q: 'Một khách hàng nói với quản lý danh mục Thu: "Nếu năm nay tài khoản của tôi vượt chỉ số 5%, tôi sẽ tặng chị 2.000 USD." Thu nên:', choices: ['Nhận và chỉ cần thông báo cho công ty sau khi nhận tiền', 'Từ chối vì Code cấm mọi khoản thưởng từ khách hàng', 'Xin đồng ý bằng văn bản của công ty trước khi chấp nhận thỏa thuận'], answer: 2, explain: 'Thưởng gắn với kết quả tương lai là thỏa thuận thù lao bổ sung: cần đồng ý bằng văn bản trước (IV(B)). Nhận rồi thông báo sau chỉ áp dụng với quà cảm ơn kết quả đã qua (I(B)). Code không cấm hoàn toàn mọi khoản thưởng từ khách hàng.' },
    { q: 'Quản lý quỹ Đạt ngồi ghế hội đồng quản trị một công ty niêm yết, được nhận cổ phiếu thưởng thay cho tiền. Anh báo bằng lời cho trưởng phòng nhưng không có văn bản hay email nào. Theo IV(B):', choices: ['Đạt chưa tuân thủ vì cần đồng ý bằng văn bản (email cũng được)', 'Đạt tuân thủ vì đã báo cho cấp trên', 'Đạt tuân thủ vì cổ phiếu thưởng không phải là thù lao bằng tiền'], answer: 0, explain: 'IV(B) yêu cầu đồng ý bằng văn bản; email được tính là văn bản. Báo bằng lời cho cấp trên chưa đủ. Cổ phiếu thưởng vẫn là thù lao, dù không phải tiền mặt.' },
    { q: 'Năm ngoái tài khoản của bà Mai tăng mạnh. Bà tặng quản lý danh mục Nam một cặp vé xem hòa nhạc để cảm ơn. Nam nên:', choices: ['Xin đồng ý bằng văn bản của bà Mai và công ty trước khi nhận', 'Thông báo cho công ty về món quà', 'Từ chối vì nhận quà từ khách hàng luôn vi phạm'], answer: 1, explain: 'Quà cảm ơn kết quả đã qua ít tạo động cơ thiên lệch; cần thông báo cho công ty theo I(B). Xin đồng ý bằng văn bản trước là yêu cầu cho thưởng gắn với kết quả tương lai. Lựa chọn "luôn vi phạm" sai vì quà nhỏ từ khách hàng không bị cấm tuyệt đối.' },
    { q: 'Trưởng phòng Linh được giao giám sát 5 nhân viên môi giới. Công ty không có quy trình giám sát bằng văn bản và từ chối xây dựng. Linh nên:', choices: ['Yêu cầu 5 nhân viên ký cam kết tuân thủ Code and Standards của CFA Institute', 'Nhận nhiệm vụ và tự giám sát theo kinh nghiệm cá nhân', 'Từ chối nhận trách nhiệm giám sát bằng văn bản cho đến khi công ty có quy trình đầy đủ'], answer: 2, explain: 'Không có quy trình đủ để giám sát hiệu quả thì phải từ chối bằng văn bản. Bắt nhân viên ký cam kết không thay thế được hệ thống tuân thủ; Linh cũng không thể buộc nhân viên áp dụng Code. Nhận nhiệm vụ và tự giám sát theo kinh nghiệm để Linh gánh trách nhiệm mà không có công cụ.' },
    { q: 'Trưởng phòng Hải phát hiện một nhân viên có thể đã giao dịch cá nhân trước khi đặt lệnh lớn cho quỹ. Bước phù hợp nhất ngay lúc đó:', choices: ['Kịp thời điều tra, đồng thời hạn chế hoạt động và tăng giám sát nhân viên đó', 'Nhắc nhở nhân viên và ghi nhận lời hứa không tái phạm', 'Chờ đến kỳ kiểm tra tuân thủ cuối năm để xử lý cùng các vấn đề khác'], answer: 0, explain: 'IV(C): khi biết có thể có vi phạm phải điều tra kịp thời, hạn chế hoạt động và tăng giám sát. Nhắc nhở và ghi nhận lời hứa không đủ. Chờ đến kỳ kiểm tra cuối năm không kịp thời.' },
    { q: 'Công ty có quy trình tuân thủ hợp lý và người giám sát Trúc thực hiện kiểm tra đầy đủ. Một nhân viên vẫn che giấu được hành vi vi phạm tinh vi và Trúc không phát hiện. Trúc:', choices: ['Vi phạm IV(C) vì mọi vi phạm của cấp dưới đều là trách nhiệm của người giám sát', 'Không vi phạm IV(C) vì đã có và thực thi quy trình hợp lý', 'Vi phạm IV(C) trừ khi đã ủy quyền giám sát cho bộ phận tuân thủ'], answer: 1, explain: 'Người giám sát đã nỗ lực hợp lý (quy trình tốt, thực sự thực thi) thì không vi phạm khi vẫn có vi phạm không phát hiện được, nên lựa chọn "mọi vi phạm của cấp dưới đều là trách nhiệm của người giám sát" sai. Ủy quyền cho bộ phận tuân thủ không chuyển trách nhiệm, nên lựa chọn "trừ khi đã ủy quyền giám sát" cũng sai.' },
    { q: "Chuyên viên Hưng đã nộp đơn nghỉ việc, còn ba tuần nữa mới có hiệu lực. Anh dùng tài khoản LinkedIn mà công ty quản lý cho công việc để nhắn tin cho các khách hàng trong danh bạ, báo rằng mình sẽ mở công ty riêng và mời họ chuyển theo. Hưng:", choices: ["Vi phạm Standard IV(A) vì lôi kéo khách hàng của công ty trước khi thôi việc có hiệu lực", "Không vi phạm vì mạng xã hội là kênh công khai", "Không vi phạm vì anh đã thông báo nghỉ việc với công ty"], answer: 0, explain: "Trước khi thôi việc có hiệu lực, người hành nghề phải tiếp tục hành động vì lợi ích công ty; mời khách hàng chuyển đi là cạnh tranh, không phải chuẩn bị. Tài khoản mạng xã hội dùng cho công việc phải theo chính sách công ty. Việc mạng xã hội là \"kênh công khai\" không thay đổi bản chất lôi kéo khách hàng. Đã \"thông báo nghỉ việc\" cũng không chấm dứt nghĩa vụ trong thời gian báo trước." },
    { q: "Công ty của Sang đang chào thầu quản lý quỹ hưu trí của một tập đoàn. Sang biết thông tin hồ sơ thầu và mách cho công ty quản lý quỹ của anh rể để công ty này nộp hồ sơ cạnh tranh với giá thấp hơn. Sang:", choices: ["Không vi phạm vì anh không nhận lợi ích tài chính trực tiếp", "Không vi phạm vì việc chọn đơn vị quản lý là quyết định của tập đoàn", "Vi phạm Standard IV(A) vì dùng thông tin bí mật để chuyển cơ hội kinh doanh của công ty cho người khác"], answer: 2, explain: "IV(A) cấm tiết lộ thông tin bí mật và gây hại cho công ty; chuyển cơ hội kinh doanh của công ty cho bên khác là ví dụ điển hình. \"Không nhận lợi ích trực tiếp\" không quan trọng vì công ty vẫn bị hại. Việc tập đoàn là bên ra quyết định không xóa được hành vi tiết lộ thông tin thầu của chính công ty." },
    { q: "Khi vào công ty, Mai ký thỏa thuận không lôi kéo khách hàng trong một năm sau khi nghỉ. Ba tháng sau khi nghỉ, cô tìm số điện thoại khách hàng cũ trong danh bạ công khai và gọi mời họ sang công ty mới. Mai:", choices: ["Không vi phạm vì cô chỉ dùng thông tin công khai", "Vi phạm Standard IV(A) vì phải tuân thủ thỏa thuận không lôi kéo đã ký", "Không vi phạm vì nghĩa vụ trung thành chấm dứt khi thôi việc"], answer: 1, explain: "Không có thỏa thuận thì được liên hệ khách hàng cũ bằng thông tin công khai; nhưng Mai đã ký thỏa thuận không lôi kéo nên phải tuân thủ. \"Chỉ dùng thông tin công khai\" chỉ đủ khi không có thỏa thuận ràng buộc. Nghĩa vụ \"chấm dứt khi thôi việc\" sai trong trường hợp này vì thỏa thuận đã ký vẫn còn hiệu lực." },
    { q: "Quản lý danh mục Thảo đang nghỉ không lương 4 tháng. Một công ty quản lý quỹ khác mời cô tư vấn chiến lược danh mục trong thời gian này, có trả phí. Thảo nên:", choices: ["Thông báo và được công ty đồng ý trước khi nhận việc, vì khi nghỉ không lương cô vẫn là nhân viên", "Nhận việc mà không cần báo, vì cô không nhận lương từ công ty trong thời gian nghỉ", "Nhận việc và chỉ cần báo công ty sau khi quay lại làm"], answer: 0, explain: "Nghỉ không lương vẫn là nhân viên, nên IV(A) vẫn áp dụng; tư vấn danh mục có phí cho công ty khác là hoạt động cạnh tranh, cần báo và được đồng ý trước. Lựa chọn \"không nhận lương nên không cần báo\" nhầm rằng nghĩa vụ phụ thuộc vào việc trả lương. \"Báo sau khi quay lại\" sai vì phải được đồng ý trước khi bắt đầu." },
    { q: "Công ty thuê Lực, một chuyên gia làm theo hợp đồng độc lập, xây dựng mô hình định giá trong 6 tháng. Nhận định nào về nghĩa vụ của Lực theo Standard IV(A) là đúng nhất?", choices: ["Lực có đúng các nghĩa vụ như một nhân viên toàn thời gian, bất kể hợp đồng ghi gì", "Lực không có nghĩa vụ nào vì không phải là nhân viên", "Nghĩa vụ của Lực với công ty chủ yếu được xác định theo các điều khoản của hợp đồng"], answer: 2, explain: "Với người làm theo hợp đồng độc lập, nghĩa vụ với công ty chủ yếu xác định theo hợp đồng giữa hai bên. Lựa chọn \"đúng các nghĩa vụ như nhân viên toàn thời gian\" bỏ qua bản chất quan hệ hợp đồng. Lựa chọn \"không có nghĩa vụ nào\" sai vì hợp đồng vẫn tạo ra nghĩa vụ, ví dụ về bảo mật và quyền sở hữu sản phẩm." },
    { q: "Sau khi bị từ chối tăng lương, chuyên viên Duy gửi cho báo chí các email nội bộ về kế hoạch tái cấu trúc của công ty, không có dấu hiệu sai phạm nào, nhằm \"cho công ty một bài học\". Duy:", choices: ["Không vi phạm vì đây là hành vi tố giác được bảo vệ", "Vi phạm Standard IV(A) vì tiết lộ thông tin bí mật gây hại cho công ty vì động cơ cá nhân", "Không vi phạm nếu thông tin trong email là đúng sự thật"], answer: 1, explain: "Hành động trái lợi ích công ty chỉ được chấp nhận khi mục đích rõ ràng là bảo vệ khách hàng hoặc thị trường trước hành vi sai phạm. Ở đây không có sai phạm và động cơ là trả đũa cá nhân, nên vi phạm IV(A). Gọi đây là \"tố giác được bảo vệ\" sai vì không có gì để tố giác. Thông tin \"đúng sự thật\" vẫn là thông tin bí mật." },
    { q: "Giám đốc yêu cầu nhân viên giao dịch Ngân ghi lùi ngày một lệnh để một khách hàng ưu tiên được hưởng giá tốt hơn. Ngân từ chối và báo cho bộ phận tuân thủ. Theo Standard IV(A), Ngân:", choices: ["Không vi phạm vì trung thành với công ty không có nghĩa là làm theo yêu cầu trái đạo đức", "Vi phạm vì không làm theo chỉ đạo của cấp trên", "Vi phạm vì báo cáo nội bộ có thể làm tổn hại quan hệ với khách hàng ưu tiên"], answer: 0, explain: "IV(A) không đòi hỏi đặt lợi ích công ty hay lời cấp trên lên trên đạo đức và lợi ích khách hàng; người hành nghề không được làm theo yêu cầu trái đạo đức. \"Không làm theo chỉ đạo\" không phải là vi phạm khi chỉ đạo sai. Báo cáo cho bộ phận tuân thủ là bước đúng, không phải gây hại cho công ty." },
    { q: "Công ty của Trâm muốn giảm rủi ro nhân viên vi phạm Standard IV(A) khi rời công ty. Chính sách nào phù hợp nhất để công ty áp dụng?", choices: ["Cấm nhân viên tìm việc ở công ty khác khi còn đang làm việc", "Yêu cầu nhân viên nghỉ việc ngay trong ngày nộp đơn, không có thời gian báo trước", "Ban hành chính sách nghỉ việc nêu rõ nghĩa vụ trong thời gian báo trước, cách xử lý hồ sơ, tài khoản mạng xã hội và liên hệ với khách hàng"], answer: 2, explain: "Khuyến nghị tuân thủ IV(A) gồm chính sách cạnh tranh, chính sách nghỉ việc (giai đoạn báo trước, hồ sơ, mạng xã hội, liên hệ khách hàng), quy trình báo cáo sự cố và phân loại nhân viên. Cấm \"tìm việc ở công ty khác\" vượt quá chuẩn, vì tìm việc là hoạt động chuẩn bị được phép. Bỏ thời gian báo trước không giải quyết vấn đề nghĩa vụ và hồ sơ khi chuyển đi." },
    { q: "Một khách hàng quỹ đầu tư hứa thưởng cho quản lý danh mục Vinh 1% phần lợi nhuận vượt chỉ số mỗi năm. Khách hàng ký văn bản đồng ý về thỏa thuận này, nhưng Vinh không báo công ty. Theo Standard IV(B), Vinh:", choices: ["Không vi phạm vì có đồng ý bằng văn bản của khách hàng", "Không vi phạm vì khoản thưởng gắn với kết quả tốt cho khách hàng", "Vi phạm vì cần có đồng ý bằng văn bản của công ty trước khi chấp nhận thỏa thuận"], answer: 2, explain: "IV(B) yêu cầu đồng ý bằng văn bản từ mọi bên liên quan, trước hết là công ty, vì khoản thưởng có thể khiến Vinh ưu tiên tài khoản này hoặc chấp nhận rủi ro quá mức. Chỉ có đồng ý của khách hàng là chưa đủ. \"Gắn với kết quả tốt cho khách hàng\" chính là nguồn gốc xung đột với công ty và các khách hàng khác." },
    { q: "Chuyên viên Long được một công ty bên ngoài mời viết báo cáo ngành có trả phí, có thể xung đột với công việc của anh. Khi xin đồng ý bằng văn bản theo Standard IV(B), Long nên nêu rõ:", choices: ["Chỉ tên công ty bên ngoài", "Bản chất của thù lao, giá trị ước tính, thời hạn và bản chất công việc", "Chỉ số tiền thù lao, vì phần còn lại là việc riêng của anh"], answer: 1, explain: "Khi xin đồng ý theo IV(B), cần mô tả bản chất thù lao, giá trị ước tính, thời hạn và bản chất dịch vụ, để công ty đánh giá được xung đột. Chỉ nêu \"tên công ty bên ngoài\" hoặc \"chỉ số tiền thù lao\" không đủ để công ty đánh giá thời gian bỏ ra và mức độ xung đột." },
    { q: "Một khách hàng nói với quản lý danh mục Quân: \"Năm nào tài khoản của tôi vượt chỉ số, gia đình anh được nghỉ miễn phí một tuần tại biệt thự của tôi.\" Quân cho rằng đây không phải tiền nên không cần báo công ty. Nhận định đúng nhất:", choices: ["Quân cần đồng ý bằng văn bản của công ty trước, vì lợi ích không bằng tiền gắn với kết quả tương lai vẫn là thù lao bổ sung", "Quân chỉ cần thông báo cho công ty sau mỗi lần sử dụng biệt thự", "Quân không cần báo vì Standard IV(B) chỉ áp dụng cho thù lao bằng tiền"], answer: 0, explain: "Thù lao theo IV(B) hiểu rộng, gồm cả quyền lợi không bằng tiền như chuyến nghỉ dưỡng. Lợi ích gắn với kết quả tương lai có thể khiến Quân ưu tiên tài khoản này, nên cần đồng ý bằng văn bản trước. \"Thông báo sau mỗi lần sử dụng\" là cách xử lý quà cảm ơn kết quả đã qua (I(B)), không phải thưởng cho tương lai. \"Chỉ áp dụng cho thù lao bằng tiền\" sai." },
    { q: "Lan được tuyển làm chuyên viên phân tích bán thời gian tại công ty quản lý quỹ. Cô đang kiêm nhiệm tư vấn tài chính có phí cho một công ty gia đình. Theo khuyến nghị của Standard IV(B), Lan nên:", choices: ["Không cần báo vì cô chỉ làm bán thời gian", "Chỉ báo nếu thu nhập từ việc bên ngoài cao hơn lương ở công ty quản lý quỹ", "Trao đổi với công ty về hoạt động có thể xung đột ngay khi được tuyển và tuân thủ giới hạn công ty đặt ra"], answer: 2, explain: "Nhân viên bán thời gian nên trao đổi các hoạt động có thể xung đột ngay khi được tuyển, có đồng ý bằng văn bản khi cần, và tuân thủ giới hạn công ty đặt ra. \"Chỉ làm bán thời gian\" không loại trừ nghĩa vụ. Ngưỡng \"thu nhập cao hơn lương\" không phải tiêu chí của chuẩn; điều quan trọng là khả năng xung đột lợi ích." },
    { q: "Quản lý danh mục Thịnh được mời làm thành viên độc lập hội đồng quản trị của một ngân hàng niêm yết, nhận thù lao 30.000 USD mỗi năm. Các quỹ do Thịnh quản lý có thể mua cổ phiếu ngân hàng này. Trước khi nhận lời, Thịnh nên:", choices: ["Có đồng ý bằng văn bản của công ty, mô tả rõ thù lao và thời gian cam kết", "Chỉ cần ngân hàng niêm yết đồng ý vì họ là bên trả thù lao", "Nhận lời và báo bằng lời cho trưởng phòng trong cuộc họp kế tiếp"], answer: 0, explain: "Ghế hội đồng quản trị có thù lao cạnh tranh về thời gian và có thể xung đột với lợi ích của công ty và khách hàng, nên cần đồng ý bằng văn bản của công ty trước theo IV(B) (và công bố xung đột theo VI(A)). Sự đồng ý của \"ngân hàng niêm yết\" không thay cho đồng ý của công ty nơi Thịnh làm việc. \"Báo bằng lời\" và \"sau khi nhận lời\" đều không đáp ứng yêu cầu văn bản và trước khi chấp nhận." },
    { q: "Trưởng khối môi giới Phương giao cho phó phòng việc rà soát hằng ngày giao dịch cá nhân của nhân viên. Phó phòng bỏ qua việc rà soát trong nhiều tháng và một nhân viên đã giao dịch trước lệnh của khách hàng. Phương cho rằng mình không có trách nhiệm vì đã ủy quyền. Nhận định đúng nhất:", choices: ["Phương không có trách nhiệm vì nhiệm vụ đã được ủy quyền hợp lệ", "Phương vẫn chịu trách nhiệm theo Standard IV(C) vì có thể ủy quyền công việc giám sát nhưng không ủy quyền được trách nhiệm", "Chỉ nhân viên giao dịch trước lệnh khách hàng vi phạm, người giám sát không liên quan"], answer: 1, explain: "Người giám sát có thể giao một phần việc giám sát cho người khác nhưng vẫn giữ trách nhiệm, và phải nỗ lực hợp lý để biết việc giám sát có được thực hiện không. Lựa chọn \"ủy quyền hợp lệ nên không có trách nhiệm\" nhầm ủy quyền công việc với chuyển trách nhiệm. Lựa chọn \"người giám sát không liên quan\" bỏ qua nghĩa vụ ngăn ngừa và phát hiện vi phạm." },
    { q: "Trưởng phòng Kỳ nhận thấy hệ thống tuân thủ của công ty không kiểm tra giao dịch cá nhân của nhân viên, dù có quy định trên giấy. Theo Standard IV(C), bước phù hợp nhất của Kỳ là:", choices: ["Báo cho ban lãnh đạo về điểm yếu của hệ thống và đề xuất biện pháp khắc phục", "Không làm gì vì hệ thống tuân thủ là trách nhiệm của bộ phận tuân thủ", "Tự kiểm tra tài khoản ngân hàng cá nhân của nhân viên mà không báo ai"], answer: 0, explain: "Người giám sát thấy hệ thống tuân thủ không đủ phải báo lên ban lãnh đạo và đề xuất khắc phục; quy trình trên giấy mà không thực thi là chưa đủ. \"Trách nhiệm của bộ phận tuân thủ\" sai vì người giám sát có nghĩa vụ riêng theo IV(C). Tự kiểm tra tài khoản cá nhân của nhân viên mà không báo ai vượt thẩm quyền và không sửa được lỗ hổng của hệ thống." },
    { q: "Trưởng phòng Hòa, CFA, giám sát 6 nhân viên, không ai là thành viên CFA Institute. Anh cho rằng nghĩa vụ giám sát theo Standard IV(C) không áp dụng với nhóm này. Nhận định đúng nhất:", choices: ["Hòa đúng, vì Code and Standards chỉ ràng buộc thành viên và ứng viên", "Hòa đúng nếu nhân viên đã ký cam kết tuân thủ quy định của công ty", "Hòa sai, vì IV(C) áp dụng với mọi người thuộc quyền giám sát, dù họ có là thành viên hay không"], answer: 2, explain: "IV(C) đặt nghĩa vụ lên người giám sát là thành viên: nỗ lực hợp lý để mọi người thuộc quyền giám sát tuân thủ luật, quy định và Code and Standards, không phụ thuộc nhân viên có là thành viên hay không. Lựa chọn \"chỉ ràng buộc thành viên\" nhầm vì nghĩa vụ thuộc về Hòa, người là thành viên. Cam kết của nhân viên không thay thế nghĩa vụ giám sát." },
    { q: "Trưởng bộ phận giao dịch Nhân phụ trách một thuật toán đặt lệnh tự động do nhà cung cấp bên ngoài phát triển. Anh không kiểm tra thuật toán vì cho rằng IV(C) chỉ áp dụng với con người. Nhận định đúng nhất:", choices: ["Nhân đúng, vì thuật toán không thể vi phạm Code and Standards", "Nhân sai, vì trách nhiệm giám sát gồm cả hệ thống, thuật toán giao dịch và nhà cung cấp bên ngoài mà bộ phận sử dụng", "Nhân đúng, vì nhà cung cấp chịu toàn bộ trách nhiệm về sản phẩm của họ"], answer: 1, explain: "Người giám sát phải nỗ lực hợp lý để giám sát cả hệ thống, mô hình, thuật toán giao dịch và nhà cung cấp bên ngoài mà bộ phận mình sử dụng. Lập luận \"thuật toán không thể vi phạm\" bỏ qua việc thuật toán có thể tạo giao dịch vi phạm luật hay chuẩn mực. \"Nhà cung cấp chịu toàn bộ trách nhiệm\" sai vì trách nhiệm giám sát việc sử dụng vẫn thuộc về bộ phận." },
    { q: "Công ty chứng khoán trả thưởng cho nhân viên môi giới hoàn toàn theo doanh số phí giao dịch. Trưởng phòng Yến muốn đề xuất thay đổi để hỗ trợ việc tuân thủ. Đề xuất phù hợp nhất với khuyến nghị của Standard IV(C) là:", choices: ["Tăng tỷ lệ thưởng theo doanh số để giữ chân nhân viên giỏi", "Bỏ hoàn toàn tiền thưởng cho mọi nhân viên", "Thiết kế cơ chế thưởng khuyến khích hành vi đúng, không chỉ dựa trên doanh số"], answer: 2, explain: "Khi triển khai hệ thống tuân thủ, nên thiết kế cơ chế thưởng khuyến khích hành vi đúng, vì thưởng chỉ theo doanh số dễ dẫn đến churning hay bán sản phẩm không phù hợp. \"Tăng tỷ lệ thưởng theo doanh số\" làm động cơ sai lệch mạnh hơn. \"Bỏ hoàn toàn tiền thưởng\" là không cần thiết; vấn đề là cách thiết kế, không phải sự tồn tại của tiền thưởng." },
    { q: "Đặc điểm nào sau đây ÍT phù hợp nhất với một quy trình tuân thủ đầy đủ theo khuyến nghị của Standard IV(C)?", choices: ["Viết rõ ràng, dễ hiểu và được phổ biến đến mọi nhân viên", "Chỉ ban lãnh đạo cấp cao được biết nội dung chi tiết, để tránh nhân viên tìm cách lách quy trình", "Chỉ định người phụ trách tuân thủ có đủ thẩm quyền và mô tả hệ thống báo cáo theo cấp"], answer: 1, explain: "Quy trình tuân thủ tốt cần viết rõ ràng, dễ hiểu, phổ biến đến mọi nhân viên, cập nhật định kỳ, có người phụ trách đủ thẩm quyền và hệ thống báo cáo theo cấp. Giữ kín nội dung chỉ cho lãnh đạo là ngược lại khuyến nghị, vì nhân viên không thể tuân thủ quy định mình không biết. Hai lựa chọn còn lại là đặc điểm được khuyến nghị." },
    { q: "Công ty của Đoan chỉ có một tài liệu dài 200 trang gồm các quy trình tuân thủ chi tiết. Theo khuyến nghị của Standard IV(C), người giám sát nên khuyến khích công ty:", choices: ["Ban hành bộ quy tắc đạo đức riêng, tách khỏi quy trình tuân thủ chi tiết, nêu rõ các giá trị và cam kết của công ty", "Giữ nguyên vì quy trình tuân thủ chi tiết đã thay thế được bộ quy tắc đạo đức", "Thay toàn bộ quy trình tuân thủ bằng Code and Standards của CFA Institute"], answer: 0, explain: "Người giám sát nên khuyến khích công ty có bộ quy tắc đạo đức riêng, nêu các giá trị và cam kết với khách hàng, tách khỏi quy trình tuân thủ chi tiết, để nhân viên hiểu tinh thần chứ không chỉ quy định. \"Quy trình chi tiết đã thay thế được\" bỏ qua vai trò nêu giá trị của bộ quy tắc. Code and Standards không thay được các quy trình tuân thủ cụ thể theo luật và hoạt động của công ty." },
  ];

  window.LESSONS['ET-06'] = {
    moduleId: 'ET-06',
    calculator: 'Không cần máy tính',
    warmup: [
      'Nhắc lại thứ tự ưu tiên lợi ích trong Standard III (ET-05).',
      'Nếu bạn muốn nhận dạy thêm hoặc tư vấn ngoài giờ, bạn có nghĩ cần báo công ty không? Khi nào cần?',
      'Trước khi nghỉ việc để mở công ty riêng, bạn được làm những gì và không được làm những gì?',
    ],
    sections,
    glossary,
    practice,
    widgets: {},
    slides: [],
    wrapup: [
      'Lập bảng "chuẩn bị" và "cạnh tranh" khi rời công ty, mỗi cột ít nhất 3 ví dụ.',
      'Phân biệt thưởng gắn với kết quả tương lai và quà cảm ơn kết quả đã qua: chuẩn nào, yêu cầu gì?',
      'Nêu ba việc người giám sát phải làm khi phát hiện nhân viên có thể vi phạm.',
    ],
  };
}());
