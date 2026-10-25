// Bài giảng ET-10 - Application of the Code and Standards: Level I (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027 và Standards of Practice Handbook (bản 12). Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t } = window.CFAH;

  const sections = [
    {
      title: '1. Bức tranh lớn',
      minutes: 5,
      html: `
<p>Các module ET-03 đến ET-09 dạy từng chuẩn riêng lẻ. Trong phòng thi, tình huống không ghi sẵn "đây là câu về VI(B)". Một đoạn văn ngắn có thể chạm hai, ba chuẩn cùng lúc, và ba đáp án thường là ba cách hiểu sai khác nhau. Module này luyện kỹ năng <b>đánh giá</b> hành vi và <b>giải thích</b> vì sao nó tuân thủ hay vi phạm.</p>
<div class="key">Hai LOS của module:
<ol>
<li><b>Đánh giá</b> thực tiễn, chính sách, hành vi so với Code of Ethics và Standards of Professional Conduct (phần 2, 3, 5).</li>
<li><b>Giải thích</b> vì sao thực tiễn, chính sách, hành vi đó vi phạm hoặc không vi phạm (phần 4, 5).</li>
</ol></div>
<p>Ethical and Professional Standards chiếm tỷ trọng lớn ở Level I (10-15% bài thi năm 2027). Câu hỏi luôn là ${t('minicase', 'tình huống ngắn (mini-case)')} với ba lựa chọn. Phần lớn điểm đến từ việc nhận đúng chuẩn và không mắc bẫy, không phải từ việc thuộc lòng câu chữ.</p>
<p class="tip"><b>Cách dùng module:</b> đọc quy trình 5 bước, in hoặc lưu bảng tra nhanh 7 Standards, rồi làm bài tập tổng hợp trước khi xem lời giải.</p>`,
    },
    {
      title: '2. Quy trình 5 bước xử lý một câu tình huống',
      minutes: 12,
      html: `
<ol>
<li><b>Đọc câu hỏi trước đoạn văn.</b> Đề hỏi gì: "có vi phạm không", "vi phạm chuẩn nào", "hành động nào phù hợp nhất", "thủ tục nào KHÔNG được khuyến nghị"? Chú ý từ ${t('qualifier', 'định mức (qualifier)')} như <i>most likely</i>, <i>least likely</i>, <i>best</i>.</li>
<li><b>Xác định nhân vật.</b> Ai là thành viên hay ứng viên (Code and Standards chỉ ràng buộc họ)? Vai trò của họ: nhà phân tích, quản lý danh mục, người giám sát, tình nguyện viên?</li>
<li><b>Gạch chân sự kiện then chốt.</b> Ai được lợi? Ai biết thông tin gì, thông tin đã công khai chưa? Đã công bố cho ai, khi nào, bằng cách nào? Có sự đồng ý bằng văn bản không? Có luật địa phương nào liên quan?</li>
<li><b>Đối chiếu chuẩn</b> bằng từ khóa (xem bảng tra nhanh ở phần 3): quà tặng → I(B); thông tin chưa công bố → II(A); phân bổ lệnh → III(B); nghỉ việc → IV(A); thù lao bên ngoài → IV(B); giao dịch cá nhân → VI(B)...</li>
<li><b>Loại đáp án.</b> Mỗi đáp án sai thường dựa trên một ngộ nhận. Gạch bỏ những đáp án có lý do "nghe hợp lý nhưng sai" (xem bẫy dưới đây), rồi chọn đáp án còn lại.</li>
</ol>
<h4>Năm nguyên tắc nền giúp loại đáp án</h4>
<table class="plain"><thead><tr><th>Nguyên tắc</th><th>Hệ quả khi làm bài</th></tr></thead><tbody>
<tr><td>Luật nghiêm hơn được áp dụng (I(A))</td><td>"Luật địa phương cho phép" không phải lý do nếu Standards nghiêm hơn, và ngược lại</td></tr>
<tr><td>Standards áp dụng bất kể chính sách công ty</td><td>"Công ty không có quy định" không miễn trừ trách nhiệm cá nhân</td></tr>
<tr><td>Công bố không chữa được mọi thứ</td><td>Công bố quan hệ IB không làm một khuyến nghị thiếu khách quan trở thành hợp lệ</td></tr>
<tr><td>Kết quả không quyết định vi phạm</td><td>Khách hàng có lãi vẫn có thể vi phạm; khách hàng lỗ chưa chắc vi phạm</td></tr>
<tr><td>Quy mô, chức vụ không miễn trừ</td><td>"Giao dịch nhỏ", "nhân viên cấp thấp", "chỉ một lần" vẫn có thể vi phạm</td></tr>
</tbody></table>
<div class="example"><div class="ex-h">Ví dụ 2.1 - Áp dụng quy trình</div>
<p>Châu, CFA, làm việc ở một nước chưa có luật cấm giao dịch nội gián. Trong buổi gặp riêng, giám đốc tài chính của một công ty niêm yết cho cô biết công ty sắp bị thu hồi giấy phép, thông tin chưa công bố. Châu bán ngay cổ phiếu này trong danh mục khách hàng. Châu có vi phạm không?</p>
<details><summary>Xem lời giải</summary>
<p>Bước 1: đề hỏi có vi phạm không. Bước 2: Châu là thành viên. Bước 3: thông tin trọng yếu (thu hồi giấy phép), chưa công khai; cô hành động trên thông tin đó; luật địa phương không cấm. Bước 4: từ khóa "chưa công bố" → II(A), "luật địa phương" → I(A). Bước 5: loại "không vi phạm vì luật cho phép" (Standards nghiêm hơn) và "không vi phạm vì giao dịch cho khách hàng" (II(A) cấm hành động trên MNPI, kể cả cho khách hàng).</p>
<p><b>Kết luận:</b> vi phạm II(A). Cô phải tuân thủ chuẩn nghiêm hơn theo I(A).</p></details></div>`,
    },
    {
      title: '3. Bảng tra nhanh 7 Standards',
      minutes: 15,
      html: `
<p>Mỗi dòng: chuẩn con, ý chính một câu, và ${t('trigger', 'dấu hiệu nhận diện')} hay xuất hiện trong đề. Chi tiết từng chuẩn xem lại ET-03 đến ET-09.</p>
<table class="plain"><thead><tr><th>Chuẩn</th><th>Ý chính</th><th>Dấu hiệu trong đề</th></tr></thead><tbody>
<tr><td colspan="3"><b>I. Professionalism</b></td></tr>
<tr><td>I(A) Knowledge of the Law</td><td>Hiểu và tuân thủ luật; áp dụng quy định nghiêm hơn; không tham gia và phải tách mình khỏi vi phạm</td><td>Hai nước, hai bộ luật; đồng nghiệp làm sai</td></tr>
<tr><td>I(B) Independence and Objectivity</td><td>Giữ độc lập, khách quan; không cho, đòi, nhận quà có thể làm mất khách quan</td><td>Quà, chuyến đi do công ty phát hành trả; áp lực từ IB</td></tr>
<tr><td>I(C) Misrepresentation</td><td>Không cố ý trình bày sai; không đạo văn</td><td>Dùng báo cáo người khác không ghi nguồn; hứa lợi nhuận "chắc chắn"</td></tr>
<tr><td>I(D) Misconduct</td><td>Không gian dối, lừa đảo, không làm tổn hại uy tín, liêm chính nghề nghiệp</td><td>Gian lận chi phí, hành vi bất lương trong công việc</td></tr>
<tr><td>I(E) Competence</td><td>Có và duy trì năng lực cần cho trách nhiệm nghề nghiệp</td><td>Nhận vai trò mới mà không học thêm</td></tr>
<tr><td colspan="3"><b>II. Integrity of Capital Markets</b></td></tr>
<tr><td>II(A) Material Nonpublic Information</td><td>Có thông tin trọng yếu chưa công bố thì không hành động, không khiến người khác hành động</td><td>"Tin chưa công bố", gặp riêng lãnh đạo; mosaic theory được phép</td></tr>
<tr><td>II(B) Market Manipulation</td><td>Không làm méo giá hay thổi phồng khối lượng nhằm đánh lừa</td><td>Tung tin đồn, giao dịch qua lại tạo thanh khoản giả</td></tr>
<tr><td colspan="3"><b>III. Duties to Clients</b></td></tr>
<tr><td>III(A) Loyalty, Prudence, and Care</td><td>Đặt lợi ích khách hàng lên trước công ty và bản thân; cẩn trọng</td><td>Soft dollar, biểu quyết ủy quyền, chọn môi giới</td></tr>
<tr><td>III(B) Fair Dealing</td><td>Đối xử công bằng (không nhất thiết như nhau) với mọi khách hàng</td><td>Phân bổ IPO, thông báo đổi khuyến nghị trước cho khách lớn</td></tr>
<tr><td>III(C) Suitability</td><td>Tìm hiểu mục tiêu, ràng buộc (IPS); đầu tư phù hợp trong bối cảnh cả danh mục hoặc đúng mandate</td><td>Khách thận trọng mua tài sản rủi ro cao; lệch khỏi mandate quỹ</td></tr>
<tr><td>III(D) Performance Presentation</td><td>Thông tin hiệu quả đầu tư phải công bằng, chính xác, đầy đủ</td><td>Chỉ trình bày tài khoản tốt nhất; mô phỏng không ghi rõ</td></tr>
<tr><td>III(E) Preservation of Confidentiality</td><td>Bảo mật thông tin khách hàng hiện tại, cũ, tiềm năng; trừ khi hoạt động phi pháp, luật yêu cầu, khách cho phép</td><td>Kể thông tin khách cho người khác; phát hiện rửa tiền</td></tr>
<tr><td colspan="3"><b>IV. Duties to Employers</b></td></tr>
<tr><td>IV(A) Loyalty</td><td>Làm vì lợi ích chủ lao động; không lấy tài liệu, không lôi kéo khách trước khi nghỉ</td><td>Chuẩn bị mở công ty riêng, chép danh sách khách</td></tr>
<tr><td>IV(B) Additional Compensation Arrangements</td><td>Thù lao bên ngoài có thể xung đột lợi ích chủ lao động: cần đồng ý bằng văn bản</td><td>Khách hàng thưởng thêm nếu đạt lợi nhuận; làm thêm bên ngoài</td></tr>
<tr><td>IV(C) Responsibilities of Supervisors</td><td>Nỗ lực hợp lý để người dưới quyền tuân thủ luật và Standards</td><td>Phát hiện cấp dưới vi phạm mà chỉ nhắc nhở</td></tr>
<tr><td colspan="3"><b>V. Investment Analysis, Recommendations, and Actions</b></td></tr>
<tr><td>V(A) Diligence and Reasonable Basis</td><td>Nghiên cứu cẩn thận, có cơ sở hợp lý; kiểm tra nghiên cứu bên thứ ba</td><td>Khuyến nghị theo tin đồn; dùng mô hình không kiểm tra</td></tr>
<tr><td>V(B) Communication with Clients</td><td>Công bố quy trình đầu tư, rủi ro, giới hạn; tách sự kiện và ý kiến</td><td>Đổi chiến lược không báo khách; dự báo trình bày như sự thật</td></tr>
<tr><td>V(C) Record Retention</td><td>Lưu hồ sơ hỗ trợ phân tích, khuyến nghị; hồ sơ thuộc công ty (7 năm nếu không có quy định khác)</td><td>Hủy ghi chú sau khi viết báo cáo; mang hồ sơ về nhà</td></tr>
<tr><td colspan="3"><b>VI. Conflicts of Interest</b></td></tr>
<tr><td>VI(A) Avoid or Disclose Conflicts</td><td>Tránh hoặc công bố đầy đủ, nổi bật, dễ hiểu</td><td>Sở hữu cổ phiếu khuyến nghị, ghế HĐQT</td></tr>
<tr><td>VI(B) Priority of Transactions</td><td>Khách hàng → chủ lao động → cá nhân</td><td>Mua cho mình trước khách; tài khoản người thân</td></tr>
<tr><td>VI(C) Referral Fees</td><td>Công bố phí giới thiệu (bản chất, giá trị) trước khi ký</td><td>Nhận dịch vụ miễn phí đổi lấy giới thiệu khách</td></tr>
<tr><td colspan="3"><b>VII. Responsibilities as a CFA Institute Member or CFA Candidate</b></td></tr>
<tr><td>VII(A) Conduct as Participants in CFA Institute Programs</td><td>Không gian lận, không lộ thông tin đề, tuân thủ quy chế, khai PCS trung thực</td><td>Bài đăng sau kỳ thi; làm bài khi hết giờ</td></tr>
<tr><td>VII(B) Reference to CFA Institute, the CFA Designation, and the CFA Program</td><td>Không xuyên tạc, phóng đại ý nghĩa thành viên, danh hiệu, ứng viên</td><td>"CFA Level II", "một CFA", "bằng CFA"</td></tr>
</tbody></table>`,
    },
    {
      title: '4. Các cặp chuẩn dễ nhầm',
      minutes: 10,
      html: `
<p>Đề hay cho đáp án "vi phạm chuẩn X" khi thực ra là chuẩn Y gần nghĩa. Bảng dưới giúp tách các ${t('pair', 'cặp chuẩn dễ nhầm')}:</p>
<table class="plain"><thead><tr><th>Cặp</th><th>Phân biệt</th></tr></thead><tbody>
<tr><td>I(B) và VI(A)</td><td>I(B): hành vi làm mất khách quan (nhận quà, chịu áp lực). VI(A): xung đột phải tránh hoặc công bố. Công bố theo VI(A) không chữa được việc mất khách quan theo I(B).</td></tr>
<tr><td>IV(B) và VI(C)</td><td>IV(B): thù lao cho <b>công việc</b> có thể cạnh tranh với chủ lao động, cần <b>đồng ý bằng văn bản</b>. VI(C): lợi ích cho việc <b>giới thiệu</b>, cần <b>công bố</b> cho chủ lao động và khách hàng.</td></tr>
<tr><td>III(B) và VI(B)</td><td>III(B): công bằng <b>giữa các khách hàng</b>. VI(B): khách hàng <b>so với bản thân</b>. Làm thiệt tài khoản người thân là khách hàng chạm cả hai.</td></tr>
<tr><td>II(A) và V(A)</td><td>Ghép thông tin công khai với thông tin chưa công khai nhưng không trọng yếu (mosaic) là nghiên cứu tốt theo V(A), không vi phạm II(A).</td></tr>
<tr><td>I(C) và VII(B)</td><td>I(C): trình bày sai bất kỳ điều gì về chuyên môn. VII(B): riêng về CFA Institute, danh hiệu, tư cách ứng viên. Một CV có thể vi phạm cả hai.</td></tr>
<tr><td>I(C) và III(D)</td><td>III(D) là trường hợp riêng về <b>số liệu hiệu quả đầu tư</b>; trình bày sai các thông tin khác thuộc I(C).</td></tr>
<tr><td>III(A) và IV(A)</td><td>III(A): trung thành với <b>khách hàng</b>. IV(A): trung thành với <b>chủ lao động</b>. Khi xung đột, lợi ích khách hàng đứng trước.</td></tr>
<tr><td>I(A) và IV(C)</td><td>Ai cũng phải tách mình khỏi vi phạm (I(A)). Người giám sát còn phải chủ động ngăn chặn, điều tra, hạn chế cấp dưới (IV(C)).</td></tr>
</tbody></table>
<div class="example"><div class="ex-h">Ví dụ 4.1 - Một tình huống, hai chuẩn</div>
<p>Khách hàng hứa thưởng cho quản lý danh mục Duy một chuyến du lịch nếu danh mục vượt chỉ số năm tới. Duy báo miệng cho trưởng phòng và nhận lời. Duy vi phạm chuẩn nào?</p>
<details><summary>Xem lời giải</summary><p>Đây là thù lao bổ sung gắn với <b>kết quả tương lai</b>, có thể khiến Duy ưu tiên khách hàng này hơn các khách hàng khác, nên thuộc <b>IV(B)</b>: cần <b>đồng ý bằng văn bản</b> của chủ lao động. Báo miệng là chưa đủ. Nếu đó là quà cảm ơn cho kết quả <b>đã qua</b>, chỉ cần công bố cho chủ lao động theo I(B).</p></details></div>`,
    },
    {
      title: '5. Bài tập tổng hợp nhiều chuẩn',
      minutes: 15,
      html: `
<p>Hãy tự đánh giá từng hành vi trước khi mở lời giải. Ghi ra: chuẩn liên quan, vi phạm hay không, và một câu giải thích.</p>
<div class="example"><div class="ex-h">Tình huống 5.1 - Một tuần của Hoàng</div>
<p>Hoàng, CFA, là quản lý danh mục ở Công ty Bình Minh và giám sát trợ lý Mai, ứng viên Level II.</p>
<ol type="a">
<li>Công ty Thép Bắc mời Hoàng đi du lịch nước ngoài miễn phí kèm vợ "để tìm hiểu nhà máy". Bình Minh nắm nhiều cổ phiếu Thép Bắc cho khách hàng. Hoàng nhận lời.</li>
<li>Trong chuyến đi, giám đốc tài chính tiết lộ Thép Bắc sẽ báo lỗ lớn, chưa công bố. Hoàng gọi về bán cổ phiếu Thép Bắc trong danh mục khách hàng.</li>
<li>Trước đó vài phút, Hoàng bán cổ phiếu Thép Bắc trong tài khoản của vợ.</li>
<li>Hoàng duyệt tờ rơi quảng cáo do Mai soạn, trong đó ghi "Mai, CFA Level II".</li>
<li>Hoàng nhận 0,5% phí giới thiệu từ một công ty tư vấn thuế; anh nói rõ tỷ lệ và số tiền ước tính cho khách hàng trước khi họ ký hợp đồng.</li>
</ol>
<details><summary>Xem lời giải</summary>
<table class="plain"><thead><tr><th>Hành vi</th><th>Chuẩn</th><th>Kết luận và lý do</th></tr></thead><tbody>
<tr><td>a. Nhận chuyến du lịch</td><td>I(B)</td><td>Vi phạm: quà giá trị lớn từ công ty phát hành mà anh đang nắm cổ phiếu có thể làm mất khách quan. Nên tự trả chi phí đi lại, khách sạn.</td></tr>
<tr><td>b. Bán cho khách hàng</td><td>II(A)</td><td>Vi phạm: hành động dựa trên thông tin trọng yếu chưa công bố, kể cả để bảo vệ khách hàng. Nên báo bộ phận tuân thủ, đề nghị công ty công bố thông tin.</td></tr>
<tr><td>c. Bán tài khoản của vợ trước</td><td>VI(B), II(A)</td><td>Vi phạm: tài khoản vợ là tài khoản beneficial owner, giao dịch trước khách hàng; đồng thời dùng MNPI.</td></tr>
<tr><td>d. Duyệt tờ rơi "CFA Level II"</td><td>VII(B) (Mai), IV(C) (Hoàng)</td><td>Mai vi phạm VII(B) vì không có danh hiệu từng phần; Hoàng không nỗ lực hợp lý để cấp dưới tuân thủ.</td></tr>
<tr><td>e. Phí giới thiệu đã công bố</td><td>VI(C)</td><td>Tuân thủ: công bố bản chất và giá trị trước khi ký. Cũng cần đã báo cho chủ lao động.</td></tr>
</tbody></table></details></div>
<div class="example"><div class="ex-h">Tình huống 5.2 - Báo cáo vội của Thu</div>
<p>Thu, ứng viên Level I, là chuyên viên phân tích. Bị hối thúc, cô (a) chép nguyên đoạn phân tích ngành từ báo cáo của một công ty khác vào báo cáo của mình mà không ghi nguồn; (b) đưa ra khuyến nghị "mua" chỉ dựa trên một bài báo; (c) viết "lợi nhuận năm tới sẽ tăng 30%" như một sự thật; (d) xóa toàn bộ ghi chú sau khi phát hành báo cáo.</p>
<details><summary>Xem lời giải</summary>
<table class="plain"><thead><tr><th>Hành vi</th><th>Chuẩn vi phạm</th><th>Lý do</th></tr></thead><tbody>
<tr><td>a</td><td>I(C)</td><td>Đạo văn là trình bày sai: dùng công trình người khác như của mình.</td></tr>
<tr><td>b</td><td>V(A)</td><td>Không có cơ sở hợp lý và đầy đủ, thiếu nghiên cứu cẩn thận.</td></tr>
<tr><td>c</td><td>V(B)</td><td>Không tách sự kiện và ý kiến; dự báo phải được trình bày là ý kiến.</td></tr>
<tr><td>d</td><td>V(C)</td><td>Phải lưu hồ sơ hỗ trợ khuyến nghị; hồ sơ thuộc về công ty.</td></tr>
</tbody></table>
<p>Cả bốn hành vi đều bị ràng buộc dù Thu mới là ứng viên: Code and Standards áp dụng cho ứng viên như thành viên.</p></details></div>`,
    },
    {
      title: '6. Tóm tắt và bẫy thường gặp',
      minutes: 8,
      html: `
<table class="plain"><thead><tr><th>Đáp án "nghe hợp lý"</th><th>Vì sao thường sai</th></tr></thead><tbody>
<tr><td>"Không vi phạm vì luật địa phương cho phép"</td><td>Áp dụng quy định nghiêm hơn (I(A))</td></tr>
<tr><td>"Không vi phạm vì công ty không có quy định"</td><td>Standards áp dụng trực tiếp cho cá nhân</td></tr>
<tr><td>"Không vi phạm vì đã công bố"</td><td>Công bố phải đúng cách, đúng lúc; và không chữa được mất khách quan</td></tr>
<tr><td>"Không vi phạm vì khách hàng có lãi"</td><td>Vi phạm xét theo hành vi và quy trình, không theo kết quả</td></tr>
<tr><td>"Không vi phạm vì giao dịch cho khách hàng, không cho mình"</td><td>II(A) cấm hành động trên MNPI cho bất kỳ ai</td></tr>
<tr><td>"Không vi phạm vì số tiền nhỏ / chỉ một lần"</td><td>Quy mô không miễn trừ</td></tr>
<tr><td>"Không vi phạm vì người đó chỉ là ứng viên"</td><td>Ứng viên chịu ràng buộc như thành viên</td></tr>
<tr><td>"Vi phạm vì không tuân theo GIPS"</td><td>GIPS là tự nguyện; III(D) chỉ yêu cầu công bằng, chính xác, đầy đủ</td></tr>
<tr><td>"Phải nghỉ việc ngay khi thấy sai phạm"</td><td>Trước hết là tách mình, báo cấp trên hoặc tuân thủ; nghỉ việc chỉ khi cần thiết</td></tr>
</tbody></table>
<p>Tiếp theo: tab <b>Luyện tập</b> 10 câu tổng hợp. Sau đó nên làm thêm bộ câu hỏi Ethics tổng hợp để luyện tốc độ: khoảng 1,5 phút mỗi câu.</p>`,
    },
  ];

  const glossary = {
    minicase: ['Mini-case', 'Tình huống ngắn', 'Đoạn mô tả ngắn một hành vi, kèm câu hỏi ba lựa chọn về việc tuân thủ hay vi phạm.'],
    qualifier: ['Qualifier', 'Từ định mức', 'Từ như most likely, least likely, best quyết định đáp án nào được chọn.'],
    trigger: ['Trigger words', 'Dấu hiệu nhận diện', 'Chi tiết trong đề gợi ý chuẩn nào đang được kiểm tra.'],
    pair: ['Commonly confused standards', 'Cặp chuẩn dễ nhầm', 'Hai chuẩn có phạm vi gần nhau, đề thi hay dùng để làm đáp án nhiễu.'],
  };

  const practice = [
    { q: 'Hà, CFA, làm việc ở một nước chưa có luật cấm giao dịch dựa trên thông tin nội bộ. Cô biết trước, từ một lãnh đạo công ty, rằng công ty sắp được mua lại với giá cao; tin chưa công bố. Hà mua cổ phiếu cho tài khoản của mình. Hà:', choices: ['Không vi phạm vì luật địa phương không cấm', 'Vi phạm vì phải tuân thủ quy định nghiêm hơn là Standards', 'Không vi phạm nếu cô công bố giao dịch cho chủ lao động'], answer: 1, explain: 'Theo I(A), khi luật địa phương lỏng hơn, phải tuân thủ Standards. Hành động trên thông tin trọng yếu chưa công bố vi phạm II(A). Công bố cho chủ lao động (C) không hợp thức hóa việc dùng MNPI.' },
    { q: 'Một khách hàng tặng quản lý danh mục Phúc chiếc đồng hồ đắt tiền để cảm ơn vì danh mục năm qua vượt chỉ số. Phúc báo cho chủ lao động trước khi nhận. Phúc:', choices: ['Tuân thủ Code and Standards', 'Vi phạm I(B) vì mọi món quà đều làm mất khách quan', 'Vi phạm IV(B) vì không có đồng ý bằng văn bản của khách hàng'], answer: 0, explain: 'Quà từ khách hàng cho kết quả đã qua ít đe dọa tính độc lập hơn quà từ công ty phát hành; chỉ cần công bố cho chủ lao động. IV(B) cần đồng ý bằng văn bản của chủ lao động khi thù lao gắn với kết quả tương lai, không phải trường hợp này.' },
    { q: 'Trước khi nghỉ việc để mở công ty riêng, Tâm chép danh sách liên lạc khách hàng của công ty vào ổ đĩa cá nhân. Anh không liên hệ khách hàng nào trước ngày nghỉ. Tâm:', choices: ['Không vi phạm vì không lôi kéo khách hàng khi còn làm việc', 'Không vi phạm vì anh đã tự xây dựng quan hệ với các khách hàng đó', 'Vi phạm IV(A) vì mang tài liệu thuộc về chủ lao động'], answer: 2, explain: 'Danh sách khách hàng là tài sản của chủ lao động; chép đi mà không được phép là vi phạm IV(A), dù chưa lôi kéo (A). Quan hệ cá nhân (B) không biến hồ sơ của công ty thành của anh. Sau khi nghỉ, anh có thể liên hệ khách hàng bằng thông tin công khai, nếu không có thỏa thuận cấm.' },
    { q: 'Nhà phân tích Hiếu hạ khuyến nghị một cổ phiếu từ "mua" xuống "bán". Anh gửi email cho 10 khách hàng lớn nhất ngay lập tức, và gửi cho các khách hàng còn lại vào sáng hôm sau. Hiếu:', choices: ['Tuân thủ vì cuối cùng mọi khách hàng đều được thông báo', 'Vi phạm III(B) Fair Dealing', 'Vi phạm III(C) Suitability'], answer: 1, explain: 'Thay đổi khuyến nghị phải được phổ biến sao cho mọi khách hàng có cơ hội hành động công bằng; ưu tiên khách lớn là vi phạm III(B). A bỏ qua yếu tố thời gian. Suitability (C) là về sự phù hợp của khoản đầu tư với khách hàng, không liên quan.' },
    { q: 'Quản lý danh mục Ngọc phát hiện một khách hàng dùng tài khoản để rửa tiền. Luật nước cô yêu cầu báo cáo hành vi này. Ngọc báo cho cơ quan chức năng. Ngọc:', choices: ['Vi phạm III(E) vì tiết lộ thông tin khách hàng', 'Vi phạm III(A) vì không trung thành với khách hàng', 'Không vi phạm'], answer: 2, explain: 'III(E) cho phép tiết lộ thông tin khi khách hàng có hoạt động phi pháp hoặc khi luật yêu cầu. Trung thành với khách hàng (B) không bao gồm che giấu hành vi phạm pháp.' },
    { q: 'Linh không đồng ý với khuyến nghị "mua" của hội đồng đầu tư, nhưng cô thừa nhận khuyến nghị được xây dựng trên nghiên cứu kỹ lưỡng và có cơ sở hợp lý. Báo cáo sẽ có tên Linh. Theo Standard V(A), Linh:', choices: ['Có thể để tên trên báo cáo, và nên ghi lại ý kiến khác biệt của mình', 'Phải yêu cầu gỡ tên khỏi báo cáo', 'Phải thông báo cho khách hàng rằng mình không đồng ý'], answer: 0, explain: 'Khi quyết định nhóm có cơ sở hợp lý và đầy đủ, thành viên không cần tách mình khỏi báo cáo dù bất đồng; nên lưu lại ý kiến khác biệt. Gỡ tên (B) là không bắt buộc; thông báo bất đồng cho khách hàng (C) không phải yêu cầu của chuẩn.' },
    { q: 'Nhà phân tích Sơn ghép thông tin công khai với nhận xét của nhân viên nhà máy (không trọng yếu, chưa công khai) và kết luận nên bán cổ phiếu. Sơn phát hành khuyến nghị "bán". Sơn:', choices: ['Vi phạm II(A) vì dùng thông tin chưa công khai', 'Không vi phạm, theo mosaic theory', 'Vi phạm nếu công ty phát hành không đồng ý với kết luận'], answer: 1, explain: 'Mosaic theory cho phép kết luận dựa trên thông tin công khai cộng thông tin chưa công khai nhưng không trọng yếu, kể cả khi kết luận đó là trọng yếu. A bỏ qua điều kiện "không trọng yếu". Ý kiến của công ty phát hành (C) không liên quan.' },
    { q: 'Trưởng phòng Khánh phát hiện một nhân viên dưới quyền mua cổ phiếu cá nhân ngay trước lệnh lớn của khách hàng. Khánh nhắc nhở miệng nhân viên đó rồi để anh ta tiếp tục công việc như cũ, không điều tra thêm. Nhận định đúng nhất:', choices: ['Khánh tuân thủ vì đã yêu cầu nhân viên dừng lại', 'Chỉ nhân viên vi phạm; Khánh không có trách nhiệm', 'Khánh vi phạm IV(C) vì không có biện pháp hợp lý để ngăn chặn vi phạm'], answer: 2, explain: 'Người giám sát phải nỗ lực hợp lý: điều tra, hạn chế hoạt động hoặc tăng giám sát nhân viên trong lúc xử lý. Nhắc nhở miệng (A) là không đủ. B sai vì IV(C) đặt trách nhiệm riêng cho người giám sát.' },
    { q: 'Phân tích của An cho thấy cổ phiếu XYZ bị định giá quá cao, nhưng vì XYZ là khách hàng ngân hàng đầu tư lớn, cấp trên yêu cầu giữ khuyến nghị "mua". An giữ khuyến nghị "mua" và thêm dòng công bố nổi bật về quan hệ ngân hàng đầu tư. An:', choices: ['Vi phạm I(B) vì khuyến nghị không còn độc lập, khách quan', 'Tuân thủ vì đã công bố xung đột lợi ích theo VI(A)', 'Tuân thủ vì làm theo chỉ đạo của cấp trên'], answer: 0, explain: 'Công bố xung đột không chữa được việc đưa ra khuyến nghị trái với phân tích của chính mình. Áp lực từ cấp trên (C) không phải lý do miễn trừ; An nên giữ ý kiến độc lập hoặc từ chối đứng tên.' },
    { q: 'Tờ quảng cáo của một công ty quản lý tài sản giới thiệu lợi nhuận của 3 tài khoản tốt nhất trong 20 tài khoản, ghi là "kết quả tiêu biểu của công ty". Số liệu của 3 tài khoản là chính xác. Nhận định đúng nhất:', choices: ['Tuân thủ vì số liệu chính xác', 'Vi phạm III(D) vì thông tin hiệu quả không công bằng và không đầy đủ', 'Tuân thủ vì công ty không tuyên bố tuân thủ GIPS'], answer: 1, explain: 'III(D) yêu cầu thông tin hiệu quả công bằng, chính xác và đầy đủ; chọn lọc tài khoản tốt nhất rồi gọi là "tiêu biểu" gây hiểu lầm dù từng con số đúng (A). GIPS là tự nguyện, nhưng không tuân thủ GIPS (C) không miễn trừ yêu cầu của III(D).' },
  ];

  window.LESSONS['ET-10'] = {
    moduleId: 'ET-10',
    calculator: 'Không cần máy tính',
    warmup: [
      'Ôn ET-09: vì sao "CFA Level II" là cách viết sai?',
      'Kể tên đủ 7 Standards (I đến VII) mà không nhìn tài liệu.',
      'Khi luật địa phương lỏng hơn Code and Standards, bạn phải tuân thủ cái nào?',
    ],
    sections,
    glossary,
    practice,
    widgets: {},
    slides: [],
    wrapup: [
      'Viết lại quy trình 5 bước xử lý một câu tình huống ethics.',
      'Chọn ba cặp chuẩn dễ nhầm và nêu điểm khác nhau của từng cặp.',
      'Chuẩn nào bạn còn hay sai nhất? Ghi lại để ôn trước kỳ thi.',
    ],
  };
}());
