// Bài giảng EC-05 - Introduction to Geopolitics (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t } = window.CFAH;

  // Ma trận 2 x 2 bốn archetype trong bài giảng.
  const matrix = `<figure class="tl"><svg viewBox="0 0 560 330" role="img" aria-label="Bốn archetype địa chính trị">
    <line x1="80" y1="290" x2="540" y2="290" class="axis"/><line x1="80" y1="20" x2="80" y2="290" class="axis"/>
    <line x1="310" y1="20" x2="310" y2="290" class="axis" stroke-dasharray="5 5"/><line x1="80" y1="155" x2="540" y2="155" class="axis" stroke-dasharray="5 5"/>
    <text x="195" y="80" class="flabel">Bilateralism</text><text x="195" y="104" class="tick">hợp tác theo cặp</text>
    <text x="425" y="80" class="flabel pv">Multilateralism</text><text x="425" y="104" class="tick">hợp tác rộng, nhiều nước</text>
    <text x="195" y="215" class="flabel">Autarky</text><text x="195" y="239" class="tick">tự cung tự cấp</text>
    <text x="425" y="215" class="flabel">Hegemony</text><text x="425" y="239" class="tick">nước lớn chi phối</text>
    <text x="195" y="315" class="tick">Nationalism</text><text x="425" y="315" class="tick">Globalization</text>
    <text x="40" y="90" class="tick" transform="rotate(-90 40 90)">Hợp tác</text><text x="40" y="225" class="tick" transform="rotate(-90 40 225)">Không hợp tác</text>
  </svg><figcaption>Trục ngang: mức hội nhập kinh tế (nationalism hay globalization). Trục dọc: mức hợp tác với các nước khác.</figcaption></figure>`;

  const sections = [
    {
      title: '1. Bức tranh lớn',
      minutes: 6,
      html: `
<p>Các module EC-01 đến EC-04 nhìn vào <b>một nền kinh tế</b>: doanh nghiệp, chu kỳ, chính sách tài khóa và tiền tệ. Từ EC-05 trở đi, ta bước ra ngoài biên giới: các quốc gia tương tác với nhau như thế nào, và nhà đầu tư bị ảnh hưởng ra sao.</p>
<div class="key">${t('geopolitics', 'Địa chính trị (geopolitics)')} nghiên cứu cách <b>các chủ thể</b> (nhà nước và ngoài nhà nước) tương tác với nhau trên trường quốc tế, và cách <b>địa lý</b> (vị trí, tài nguyên, đường biển, biên giới) định hình các tương tác đó.</div>
<p>Module này trả lời 6 câu hỏi, tương ứng 6 LOS:</p>
<table class="plain"><thead><tr><th>Câu hỏi</th><th>LOS 2027</th><th>Phần</th></tr></thead><tbody>
<tr><td>Ai là người chơi, và vì sao họ hợp tác hay cạnh tranh?</td><td>Cooperation versus competition</td><td>2, 3</td></tr>
<tr><td>Toàn cầu hóa liên quan gì đến địa chính trị? Có những "kiểu" quốc gia nào?</td><td>Geopolitics and globalization</td><td>4</td></tr>
<tr><td>IMF, World Bank, WTO làm gì?</td><td>International organizations</td><td>5</td></tr>
<tr><td>Các nước dùng công cụ gì để theo đuổi lợi ích?</td><td>Tools of geopolitics</td><td>6</td></tr>
<tr><td>Rủi ro địa chính trị là gì, phân loại và đánh giá thế nào?</td><td>Geopolitical risk</td><td>7</td></tr>
<tr><td>Nhà đầu tư đưa rủi ro này vào danh mục ra sao?</td><td>Impact on investments</td><td>8</td></tr>
</tbody></table>
<p class="tip"><b>Đặc điểm của module:</b> gần như không có tính toán. Đề thi hỏi <b>phân loại</b> (đây là archetype nào, loại rủi ro nào, công cụ nào, tổ chức nào). Học thuộc các cặp khái niệm và luyện nhận diện tình huống là đủ.</p>`,
    },
    {
      title: '2. Người chơi: chủ thể nhà nước và ngoài nhà nước',
      minutes: 12,
      html: `
<h4>Hai nhóm chủ thể</h4>
<table class="plain"><thead><tr><th>Nhóm</th><th>Gồm ai</th><th>Ví dụ</th></tr></thead><tbody>
<tr><td>${t('stateactor', 'Chủ thể nhà nước (state actors)')}</td><td>Chính phủ quốc gia và các cơ quan đại diện cho quốc gia: lãnh đạo, quân đội, bộ ngoại giao, ngân hàng trung ương</td><td>Chính phủ Việt Nam ký FTA; Bộ Thương mại Mỹ áp thuế chống bán phá giá</td></tr>
<tr><td>${t('nonstate', 'Chủ thể ngoài nhà nước (non-state actors)')}</td><td>Tổ chức và cá nhân không đại diện cho một quốc gia nhưng vẫn tác động xuyên biên giới</td><td>Tập đoàn đa quốc gia (Samsung, Apple), tổ chức phi chính phủ (NGO), cá nhân có ảnh hưởng, tổ chức quốc tế</td></tr>
</tbody></table>
<p>Non-state actors quan trọng vì họ có thể <b>thúc đẩy</b> hợp tác (doanh nghiệp vận động hạ thuế quan để mở rộng chuỗi cung ứng) hoặc <b>bị cuốn vào</b> cạnh tranh giữa các nước (một hãng công nghệ bị cấm bán chip sang một thị trường).</p>

<h4>Lợi ích quốc gia và thứ tự ưu tiên</h4>
<p>Mỗi nhà nước hành động để bảo vệ ${t('natint', 'lợi ích quốc gia (national interest)')}. Ưu tiên cao nhất luôn là <b>sự tồn tại</b>: an ninh, toàn vẹn lãnh thổ, ổn định chính trị. Sau đó mới đến tăng trưởng kinh tế, uy tín quốc tế, giá trị văn hóa. Một nước sẵn sàng hy sinh lợi ích kinh tế để bảo vệ an ninh, nhưng hiếm khi làm ngược lại.</p>

<h4>Vai trò của địa lý</h4>
<ul>
<li><b>Vị trí:</b> nước có bờ biển dài, nằm trên tuyến hàng hải lớn (như Việt Nam, Singapore) có lợi thế thương mại; nước không giáp biển phải phụ thuộc vào láng giềng để xuất nhập khẩu.</li>
<li><b>Tài nguyên:</b> ${t('resource', 'nguồn tài nguyên sẵn có (resource endowment)')} như dầu khí, đất hiếm, nước ngọt quyết định nước đó cần hợp tác với ai và có "con bài" gì để mặc cả.</li>
<li><b>Láng giềng:</b> nước nằm cạnh cường quốc thường phải cân bằng giữa hợp tác kinh tế và độc lập chính trị.</li>
</ul>

<h4>Sức mạnh cứng và sức mạnh mềm</h4>
<div class="key">${t('hardpower', 'Sức mạnh cứng (hard power)')}: ép buộc bằng quân sự hoặc sức ép kinh tế.<br>${t('softpower', 'Sức mạnh mềm (soft power)')}: thuyết phục và thu hút <b>mà không dùng hay đe dọa dùng vũ lực</b>, chủ yếu qua văn hóa, giáo dục, giá trị, hình ảnh quốc gia.</div>
<p>Ví dụ quen thuộc: làn sóng phim và nhạc Hàn Quốc giúp tăng thiện cảm với hàng Hàn, du lịch Hàn và thương hiệu Hàn. Học bổng du học của nhiều chính phủ cũng là công cụ soft power.</p>
<p class="warn"><b>Bẫy:</b> soft power không phải là "sức mạnh yếu". Nó có thể rất hiệu quả, chỉ là không dùng ép buộc. Thuế quan, cấm vận là công cụ ép buộc, không phải soft power.</p>`,
    },
    {
      title: '3. Hợp tác hay cạnh tranh (cooperation versus competition)',
      minutes: 14,
      html: `
<p>Một cách nhìn địa chính trị là đo xem một quốc gia <b>hợp tác với các nước khác đến mức nào</b>. Đây không phải lựa chọn có hoặc không:</p>
<ul>
<li>Một nước có thể <b>hợp tác ở vấn đề này, cạnh tranh ở vấn đề khác</b> (hợp tác về khí hậu nhưng cạnh tranh về công nghệ bán dẫn).</li>
<li>Mức hợp tác <b>thay đổi theo thời gian</b>, nhất là theo <b>chu kỳ chính trị trong nước</b>: một cuộc bầu cử có thể đưa lên chính phủ ủng hộ hoặc phản đối thương mại tự do.</li>
</ul>
<div class="key">Nguyên tắc chung: một nước <b>hợp tác khi việc đó giúp thúc đẩy lợi ích quốc gia</b>, trước hết là các lợi ích bảo đảm sự tồn tại. Hợp tác không xuất phát từ lòng tốt mà từ tính toán lợi ích.</div>

<h4>Những yếu tố thúc đẩy hợp tác</h4>
<table class="plain"><thead><tr><th>Yếu tố</th><th>Cách tác động</th><th>Ví dụ</th></tr></thead><tbody>
<tr><td>Nhu cầu tài nguyên và thị trường</td><td>Nước thiếu năng lượng, lương thực hoặc thị trường tiêu thụ có động lực hợp tác với nước có những thứ đó</td><td>Nhật Bản nhập khẩu gần như toàn bộ dầu nên duy trì quan hệ với các nước xuất khẩu dầu</td></tr>
<tr><td>${t('standard', 'Chuẩn hóa (standardization)')}</td><td>Thống nhất quy định và quy trình giúp hàng hóa, vốn, thông tin lưu chuyển dễ hơn</td><td>Chuẩn mực báo cáo tài chính IFRS, tiêu chuẩn ISO, quy tắc an toàn hàng không</td></tr>
<tr><td>Yếu tố văn hóa</td><td>Ngôn ngữ chung, lịch sử di cư, cộng đồng kiều bào tạo sẵn niềm tin</td><td>Kiều bào và kiều hối là cầu nối thương mại, đầu tư</td></tr>
<tr><td>${t('institutions', 'Thể chế (institutions)')}</td><td>Thể chế chính thức (luật pháp, tòa án, tổ chức công và tư) và không chính thức (phong tục, thói quen) quyết định độ tin cậy khi làm ăn</td><td>Nước có hệ thống pháp luật minh bạch dễ thu hút FDI và ký hiệp định</td></tr>
</tbody></table>

<h4>Khi nào cạnh tranh mạnh lên</h4>
<p>Cạnh tranh tăng khi các nước tranh giành cùng một nguồn lực khan hiếm (tài nguyên, công nghệ chiến lược, tuyến hàng hải), khi một bên lo ngại phụ thuộc quá mức vào bên kia, hoặc khi chính trị trong nước đề cao chủ nghĩa dân tộc. Cạnh tranh không nhất thiết là xung đột vũ trang; phần lớn diễn ra qua thương mại, công nghệ và tài chính (xem phần 6).</p>

<div class="example"><div class="ex-h">Ví dụ 3.1 - Nhận diện</div>
<p>Hai nước A và B ký thỏa thuận công nhận lẫn nhau tiêu chuẩn an toàn thực phẩm, nhưng đồng thời A cấm doanh nghiệp B tham gia đấu thầu mạng viễn thông 5G. Đánh giá mức hợp tác của A?</p>
<details><summary>Xem lời giải</summary><p>A <b>hợp tác ở một số vấn đề</b> (chuẩn hóa thương mại thực phẩm) và <b>cạnh tranh ở vấn đề khác</b> (viễn thông liên quan an ninh quốc gia). Đây là trường hợp rất phổ biến: khi lĩnh vực gắn với an ninh, ưu tiên "tồn tại" lấn át lợi ích kinh tế.</p></details></div>`,
    },
    {
      title: '4. Toàn cầu hóa và bốn archetype',
      minutes: 18,
      html: `
<h4>Toàn cầu hóa và chủ nghĩa dân tộc</h4>
<div class="key">${t('globalization', 'Toàn cầu hóa (globalization)')}: xu hướng dài hạn hướng tới sự <b>hội nhập toàn cầu</b> về hoạt động kinh tế và văn hóa.<br>${t('nationalism', 'Chủ nghĩa dân tộc kinh tế (nationalism)')}: một nước theo đuổi lợi ích kinh tế của mình <b>độc lập</b> hoặc <b>cạnh tranh</b> với lợi ích của các nước khác.</div>

<h4>Lợi ích và chi phí của toàn cầu hóa</h4>
<table class="plain"><thead><tr><th>Lợi ích</th><th>Chi phí</th></tr></thead><tbody>
<tr><td><b>Tăng lợi nhuận và tăng trưởng:</b> doanh nghiệp mở rộng thị trường, khai thác lợi thế quy mô, giảm chi phí sản xuất</td><td><b>Lợi ích phân bổ không đều:</b> người lao động trong ngành bị cạnh tranh nhập khẩu mất việc, bất bình đẳng có thể tăng</td></tr>
<tr><td><b>Tiếp cận nguồn lực và thị trường:</b> nguyên liệu, lao động, công nghệ, vốn</td><td><b>Phụ thuộc lẫn nhau:</b> chuỗi cung ứng dài dễ đứt gãy khi có cú sốc (đại dịch, xung đột, phong tỏa kênh vận tải)</td></tr>
<tr><td><b>Lợi ích phi kinh tế:</b> trao đổi văn hóa, tri thức, hiểu biết lẫn nhau</td><td><b>Vấn đề bền vững và ESG:</b> sản xuất dịch chuyển tới nơi có tiêu chuẩn môi trường và lao động thấp hơn</td></tr>
</tbody></table>

<h4>Ghép hai trục: bốn archetype</h4>
<p>Đặt trục <b>hợp tác / không hợp tác</b> cạnh trục <b>toàn cầu hóa / dân tộc</b>, ta được 4 kiểu quốc gia điển hình (archetype):</p>
${matrix}
<table class="plain"><thead><tr><th>Archetype</th><th>Vị trí</th><th>Đặc điểm nhận diện</th></tr></thead><tbody>
<tr><td>${t('autarky', 'Autarky')}</td><td>Không hợp tác + dân tộc</td><td>Mục tiêu <b>tự lực tự cường</b>; nhà nước kiểm soát các ngành then chốt và truyền thông; hạn chế thương mại và đầu tư nước ngoài</td></tr>
<tr><td>${t('hegemony', 'Hegemony')}</td><td>Không hợp tác + toàn cầu hóa</td><td>Mở cửa, tham gia thương mại toàn cầu, nhưng đủ <b>quy mô và sức mạnh</b> để gây ảnh hưởng lên nước khác <b>mà không cần hợp tác</b></td></tr>
<tr><td>${t('multilateral', 'Multilateralism')}</td><td>Hợp tác + toàn cầu hóa</td><td>Tham gia sâu vào thương mại quốc tế và các thỏa thuận <b>với nhiều nước</b>, tôn trọng luật chơi chung</td></tr>
<tr><td>${t('bilateral', 'Bilateralism')}</td><td>Hợp tác + dân tộc</td><td>Hợp tác, nhưng chủ yếu qua các <b>thỏa thuận song phương</b> (từng cặp hai nước) thay vì khuôn khổ nhiều nước</td></tr>
</tbody></table>
<p class="tip"><b>Mẹo nhớ:</b> "auto" là tự mình (autarky: tự cung); "hegemon" là bá chủ (hegemony: lớn đến mức không cần hợp tác); "multi" là nhiều bên; "bi" là hai bên.</p>
<p class="warn"><b>Bẫy hay gặp:</b> hegemony nằm ở phía <b>toàn cầu hóa</b>, không phải phía dân tộc. Nước bá chủ vẫn mở cửa và hưởng lợi từ hội nhập; điểm khác là họ dùng sức mạnh để đặt luật chơi thay vì hợp tác bình đẳng.</p>
<p>Trên thực tế, ít nước nằm gọn ở một góc. Nhiều nước pha trộn: hợp tác rất chặt trong một khối khu vực nhưng dè dặt với phần còn lại của thế giới. Đề thi thường mô tả <b>hành vi</b> rồi hỏi archetype phù hợp nhất.</p>

<div class="example"><div class="ex-h">Ví dụ 4.1 - Phân loại</div>
<p>(a) Nước X chỉ ký hiệp định thương mại với từng đối tác riêng lẻ, tránh các khuôn khổ đa phương. (b) Nước Y đóng cửa với hàng nhập khẩu, quốc hữu hóa ngân hàng và kiểm soát báo chí. (c) Nước Z là thành viên tích cực của WTO, nhiều FTA thế hệ mới, đón FDI từ nhiều nước.</p>
<details><summary>Xem lời giải</summary><p>(a) <b>Bilateralism</b>. (b) <b>Autarky</b>. (c) <b>Multilateralism</b>. Việt Nam với hàng loạt FTA (CPTPP, EVFTA, RCEP) là ví dụ gần với multilateralism.</p></details></div>`,
    },
    {
      title: '5. Các tổ chức quốc tế: IMF, World Bank, WTO',
      minutes: 12,
      html: `
<p>Ba tổ chức này là "hạ tầng" của hợp tác kinh tế toàn cầu. Đề thi hay hỏi: <b>chức năng này thuộc tổ chức nào?</b></p>
<table class="plain"><thead><tr><th>Tổ chức</th><th>Mục tiêu chính</th><th>Công việc cụ thể</th></tr></thead><tbody>
<tr><td>${t('imf', 'IMF (International Monetary Fund)')}</td><td>Ổn định hệ thống tiền tệ quốc tế: hợp tác tiền tệ, ổn định tỷ giá, thương mại cân bằng</td><td>Giám sát chính sách kinh tế các nước thành viên; hỗ trợ xây dựng hệ thống thanh toán quốc tế; <b>cho vay các nước gặp khó khăn cán cân thanh toán</b> (thường kèm điều kiện cải cách)</td></tr>
<tr><td>${t('wb', 'World Bank')}</td><td><b>Giảm nghèo</b> và phát triển bền vững ở các nước đang phát triển</td><td>Cho vay lãi suất thấp, tín dụng không lãi và viện trợ không hoàn lại cho các dự án cụ thể (hạ tầng, giáo dục, y tế); cung cấp tri thức, tư vấn; thúc đẩy hợp tác công tư</td></tr>
<tr><td>${t('wto', 'WTO (World Trade Organization)')}</td><td>Bảo đảm <b>thương mại lưu thông tự do và suôn sẻ</b></td><td>Xây dựng, diễn giải và thực thi các hiệp định thương mại đa phương; diễn đàn đàm phán; <b>giải quyết tranh chấp thương mại</b> giữa các thành viên</td></tr>
</tbody></table>
<p>Bối cảnh: IMF và World Bank ra đời từ Hội nghị Bretton Woods năm 1944. WTO thành lập năm 1995, kế thừa Hiệp định chung về thuế quan và thương mại (GATT). Việt Nam là thành viên WTO từ năm 2007.</p>
<p class="tip"><b>Mẹo phân biệt:</b> IMF lo <b>tiền tệ và cán cân thanh toán</b> (ngắn hạn, khủng hoảng); World Bank lo <b>phát triển và giảm nghèo</b> (dài hạn, dự án); WTO lo <b>luật chơi thương mại</b>.</p>
<p class="warn"><b>Bẫy:</b> "cho vay" có ở cả IMF và World Bank. Nếu mục đích là xử lý khủng hoảng cán cân thanh toán, ổn định tỷ giá thì là IMF. Nếu là dự án phát triển, xóa đói giảm nghèo thì là World Bank. WTO không cho vay.</p>`,
    },
    {
      title: '6. Công cụ địa chính trị (tools of geopolitics)',
      minutes: 15,
      html: `
<p>Để theo đuổi lợi ích, các nước dùng ba nhóm công cụ. Mỗi nhóm đều có thể dùng theo cách <b>hợp tác</b> hoặc <b>không hợp tác</b>.</p>
<table class="plain"><thead><tr><th>Nhóm</th><th>Dùng theo cách hợp tác</th><th>Dùng theo cách không hợp tác</th></tr></thead><tbody>
<tr><td>${t('nstool', 'An ninh quốc gia (national security tools)')}</td><td>Liên minh, hiệp ước song phương hoặc đa phương nhằm ngăn chặn xung đột (ví dụ NATO)</td><td>Xung đột vũ trang, gián điệp, đe dọa quân sự</td></tr>
<tr><td>${t('ectool', 'Kinh tế (economic tools)')}</td><td>Khu vực thương mại tự do, thị trường chung, liên minh kinh tế và tiền tệ (chi tiết ở EC-06)</td><td>Yêu cầu tỷ lệ nội địa hóa, hạn chế xuất khẩu tự nguyện, thuế quan và hạn ngạch mang tính trả đũa, quốc hữu hóa tài sản nước ngoài</td></tr>
<tr><td>${t('fintool', 'Tài chính (financial tools)')}</td><td>Cho phép đầu tư nước ngoài, tự do chuyển đổi tiền tệ, kết nối hệ thống thanh toán</td><td>Hạn chế đầu tư nước ngoài vào ngành nhạy cảm, kiểm soát vốn, ${t('sanction', 'trừng phạt tài chính (sanctions)')} như đóng băng tài sản, loại ngân hàng khỏi hệ thống thanh toán quốc tế</td></tr>
</tbody></table>

<h4>Tác động lên khu vực và nền kinh tế</h4>
<ul>
<li><b>Thuế quan Mỹ - Trung từ 2018:</b> giá hàng nhập khẩu tăng ở Mỹ, doanh nghiệp đa quốc gia dịch chuyển một phần sản xuất sang nước thứ ba (chiến lược "Trung Quốc + 1"), trong đó có Việt Nam. Một công cụ kinh tế không hợp tác giữa hai nước lại tạo cơ hội FDI cho nước thứ ba.</li>
<li><b>Trừng phạt Nga năm 2022:</b> một số ngân hàng Nga bị loại khỏi hệ thống SWIFT, dự trữ ngoại hối bị đóng băng (công cụ tài chính). Giá năng lượng ở châu Âu tăng vọt, lạm phát lan rộng, dòng chảy dầu khí được định tuyến lại.</li>
<li><b>Kiểm soát xuất khẩu công nghệ:</b> hạn chế bán chip tiên tiến cho một số quốc gia làm thay đổi chuỗi cung ứng bán dẫn, thúc đẩy các nước đầu tư sản xuất nội địa.</li>
</ul>
<div class="key">Công cụ không hợp tác thường gây <b>chi phí cho cả hai bên</b> và có <b>tác động lan tỏa</b> sang nước thứ ba: chuyển hướng thương mại, thay đổi giá hàng hóa, dịch chuyển chuỗi cung ứng.</div>

<div class="example"><div class="ex-h">Ví dụ 6.1 - Nhận diện công cụ</div>
<p>Chính phủ nước M (1) ký hiệp ước quốc phòng với nước N, (2) yêu cầu ô tô bán trong nước có ít nhất 40% linh kiện sản xuất nội địa, (3) cấm nhà đầu tư nước ngoài mua cổ phần doanh nghiệp năng lượng.</p>
<details><summary>Xem lời giải</summary><p>(1) Công cụ <b>an ninh quốc gia</b>, dùng theo cách hợp tác. (2) Công cụ <b>kinh tế</b>, không hợp tác (minimum domestic content). (3) Công cụ <b>tài chính</b>, không hợp tác (hạn chế đầu tư nước ngoài).</p></details></div>`,
    },
    {
      title: '7. Rủi ro địa chính trị: phân loại và đánh giá',
      minutes: 12,
      html: `
<p>${t('georisk', 'Rủi ro địa chính trị (geopolitical risk)')} là rủi ro phát sinh từ căng thẳng hoặc hành động giữa các chủ thể làm thay đổi tiến trình bình thường của quan hệ quốc tế, kinh tế và thị trường.</p>
<h4>Ba loại rủi ro</h4>
<table class="plain"><thead><tr><th>Loại</th><th>Biết trước gì?</th><th>Ví dụ</th></tr></thead><tbody>
<tr><td>${t('eventrisk', 'Event risk')}</td><td>Biết <b>thời điểm</b>, chưa biết <b>kết quả</b></td><td>Bầu cử quốc gia, trưng cầu dân ý (như Brexit 2016), hạn chót đàm phán thương mại</td></tr>
<tr><td>${t('exorisk', 'Exogenous risk')}</td><td><b>Không lường trước</b> (bất ngờ cả thời điểm lẫn kết quả)</td><td>Chiến tranh bùng nổ, đảo chính, nổi dậy, tấn công khủng bố</td></tr>
<tr><td>${t('thematic', 'Thematic risk')}</td><td>Đã biết yếu tố, tác động <b>kéo dài</b> trong thời gian dài</td><td>Biến đổi khí hậu, xu hướng di cư, rủi ro an ninh mạng, cạnh tranh chiến lược giữa các cường quốc</td></tr>
</tbody></table>
<p>${t('blackswan', 'Rủi ro thiên nga đen (black swan)')}: sự kiện ngoại sinh (exogenous) có <b>xác suất rất thấp</b> nhưng <b>tác động ngắn hạn rất lớn</b>.</p>

<h4>Ba thước đo khi đánh giá</h4>
<table class="plain"><thead><tr><th>Thước đo</th><th>Câu hỏi</th></tr></thead><tbody>
<tr><td>${t('likelihood', 'Khả năng xảy ra (likelihood)')}</td><td>Sự kiện có xác suất bao nhiêu?</td></tr>
<tr><td>${t('impact', 'Mức tác động (impact)')}</td><td>Nếu xảy ra, ảnh hưởng đến kết quả đầu tư lớn đến đâu? Ảnh hưởng toàn thị trường hay chỉ một ngành, một công ty?</td></tr>
<tr><td>${t('velocity', 'Tốc độ (velocity)')}</td><td>Giá tài sản phản ánh tác động <b>nhanh đến mức nào</b>?</td></tr>
</tbody></table>
<p>Quy luật thường thấy về velocity: <b>exogenous risk</b> có tốc độ cao (thị trường phản ứng ngay, biến động mạnh); <b>event risk</b> ở mức trung bình (thị trường đã phần nào định giá trước ngày sự kiện); <b>thematic risk</b> có tốc độ thấp (tác động thấm dần trong nhiều năm).</p>
<p class="warn"><b>Bẫy:</b> đừng nhầm event risk với exogenous risk. Câu hỏi then chốt: <b>có biết trước thời điểm không?</b> Bầu cử có lịch cố định nên là event risk, dù kết quả bất ngờ đến đâu.</p>`,
    },
    {
      title: '8. Tác động của rủi ro địa chính trị lên đầu tư',
      minutes: 11,
      html: `
<h4>Rủi ro địa chính trị đi vào giá tài sản qua những kênh nào?</h4>
<ul>
<li><b>Dòng tiền:</b> thuế quan, trừng phạt, đứt gãy chuỗi cung ứng làm giảm doanh thu hoặc tăng chi phí của doanh nghiệp.</li>
<li><b>Tỷ suất chiết khấu:</b> bất định cao hơn làm nhà đầu tư đòi <b>phần bù rủi ro</b> cao hơn, nên giá tài sản giảm dù dòng tiền chưa đổi.</li>
<li><b>Dòng vốn trú ẩn:</b> khi căng thẳng tăng, vốn chảy về tài sản an toàn (trái phiếu chính phủ lớn, vàng, một số đồng tiền dự trữ) và rời khỏi thị trường mới nổi.</li>
<li><b>Biến động:</b> sự kiện có velocity cao làm biến động tăng vọt trong ngắn hạn.</li>
</ul>

<h4>Các công cụ phân tích</h4>
<table class="plain"><thead><tr><th>Công cụ</th><th>Cách làm</th></tr></thead><tbody>
<tr><td>${t('scenario', 'Phân tích kịch bản (scenario analysis)')}</td><td>Xây vài kịch bản (cơ sở, xấu, tốt), gán xác suất và ước tính tác động lên danh mục</td></tr>
<tr><td>Mô phỏng (simulation)</td><td>Chạy nhiều kịch bản định lượng để thấy phân phối kết quả và mức lỗ tiềm năng</td></tr>
<tr><td>${t('signpost', 'Chỉ báo theo dõi (signposts)')}</td><td>Các dấu hiệu cần quan sát để biết kịch bản nào đang thành hiện thực: tuyên bố chính sách, kết quả thăm dò, diễn biến đàm phán</td></tr>
</tbody></table>

<div class="example"><div class="ex-h">Ví dụ 8.1 - Kịch bản cho danh mục cổ phiếu xuất khẩu</div>
<p>Nếu bỏ qua rủi ro địa chính trị, chuyên viên dự báo lợi suất 1 năm của danh mục là 8%. Sau khi xem xét căng thẳng thương mại, họ xây 3 kịch bản: giữ nguyên hiện trạng (xác suất 70%, lợi suất 8%), leo thang thuế quan (20%, -15%), hạ nhiệt (10%, 14%). Lợi suất kỳ vọng là bao nhiêu?</p>
<details><summary>Xem lời giải</summary><p>E(R) = 0,70 × 8% + 0,20 × (-15%) + 0,10 × 14% = 5,6% - 3,0% + 1,4% = <b>4,0%</b>.</p>
<p>Lợi suất kỳ vọng chỉ còn một nửa so với dự báo 8%. Ngoài con số trung bình, kịch bản xấu (-15%) cho biết mức lỗ cần chuẩn bị. Signposts phù hợp: lịch đàm phán thương mại, tuyên bố về thuế quan, số liệu đơn hàng xuất khẩu.</p></details></div>

<h4>Kết hợp với tầm nhìn đầu tư</h4>
<ul>
<li>Nhà đầu tư dài hạn chú ý nhiều hơn đến <b>thematic risk</b> (tốc độ thấp nhưng thay đổi cấu trúc ngành, ví dụ dịch chuyển chuỗi cung ứng).</li>
<li>Rủi ro <b>velocity cao</b> thường gây biến động mạnh nhưng nhiều khi chỉ ngắn hạn; phản ứng bán tháo vội có thể gây thiệt hại hơn chính sự kiện.</li>
<li>Rủi ro có <b>impact lớn và rộng</b> (toàn thị trường) cần được phản ánh trong phân bổ tài sản, không chỉ trong lựa chọn cổ phiếu.</li>
</ul>`,
    },
    {
      title: '9. Tóm tắt và bẫy thường gặp',
      minutes: 5,
      html: `
<table class="plain"><thead><tr><th>Tình huống</th><th>Nhớ</th></tr></thead><tbody>
<tr><td>Doanh nghiệp, NGO, cá nhân có ảnh hưởng</td><td>Non-state actors (không đại diện cho quốc gia)</td></tr>
<tr><td>Ảnh hưởng bằng văn hóa, giá trị</td><td>Soft power: không dùng hay đe dọa dùng vũ lực</td></tr>
<tr><td>Vì sao hợp tác?</td><td>Khi giúp thúc đẩy lợi ích quốc gia; ưu tiên số 1 là tồn tại</td></tr>
<tr><td>Autarky</td><td>Không hợp tác + dân tộc: tự cung, nhà nước kiểm soát ngành then chốt</td></tr>
<tr><td>Hegemony</td><td>Không hợp tác + <b>toàn cầu hóa</b>: đủ lớn để chi phối</td></tr>
<tr><td>Multilateralism / Bilateralism</td><td>Hợp tác với nhiều nước / hợp tác chủ yếu theo cặp</td></tr>
<tr><td>IMF / World Bank / WTO</td><td>Cán cân thanh toán, tỷ giá / giảm nghèo, phát triển / luật chơi thương mại, tranh chấp</td></tr>
<tr><td>Ba nhóm công cụ</td><td>An ninh, kinh tế, tài chính; mỗi nhóm có cách dùng hợp tác và không hợp tác</td></tr>
<tr><td>Event / exogenous / thematic</td><td>Biết thời điểm / bất ngờ / kéo dài nhiều năm</td></tr>
<tr><td>Black swan</td><td>Exogenous, xác suất thấp, tác động ngắn hạn rất lớn</td></tr>
<tr><td>Đánh giá rủi ro</td><td>Likelihood, impact, velocity; công cụ: kịch bản, mô phỏng, signposts</td></tr>
</tbody></table>
<p>Tiếp theo: tab <b>Luyện tập</b> 10 câu. Sang EC-06 bạn sẽ học sâu các công cụ kinh tế: thuế quan, hạn ngạch và các khối thương mại.</p>`,
    },
  ];

  const glossary = {
    geopolitics: ['Geopolitics', 'Địa chính trị', 'Nghiên cứu tương tác giữa các chủ thể nhà nước và ngoài nhà nước trên trường quốc tế, và vai trò của địa lý trong các tương tác đó.'],
    stateactor: ['State actors', 'Chủ thể nhà nước', 'Chính phủ quốc gia và các cơ quan đại diện cho quốc gia như lãnh đạo, quân đội, ngân hàng trung ương.'],
    nonstate: ['Non-state actors', 'Chủ thể ngoài nhà nước', 'Tập đoàn, tổ chức phi chính phủ, cá nhân và tổ chức quốc tế có tác động xuyên biên giới nhưng không đại diện một quốc gia.'],
    natint: ['National interest', 'Lợi ích quốc gia', 'Mục tiêu một nước theo đuổi; ưu tiên cao nhất là sự tồn tại và an ninh.'],
    resource: ['Resource endowment', 'Nguồn tài nguyên sẵn có', 'Tài nguyên thiên nhiên và nhân lực của một nước; quyết định nhu cầu và khả năng mặc cả khi hợp tác.'],
    hardpower: ['Hard power', 'Sức mạnh cứng', 'Ảnh hưởng bằng ép buộc quân sự hoặc sức ép kinh tế.'],
    softpower: ['Soft power', 'Sức mạnh mềm', 'Khả năng ảnh hưởng nước khác mà không dùng hay đe dọa dùng vũ lực, chủ yếu qua văn hóa và giá trị.'],
    standard: ['Standardization', 'Chuẩn hóa', 'Thống nhất quy định và quy trình giữa các nước (IFRS, ISO) để nguồn lực lưu chuyển dễ hơn.'],
    institutions: ['Formal and informal institutions', 'Thể chế chính thức và không chính thức', 'Luật pháp, tổ chức công tư (chính thức) và phong tục, thói quen (không chính thức) ảnh hưởng đến mức hợp tác.'],
    globalization: ['Globalization', 'Toàn cầu hóa', 'Xu hướng dài hạn hướng tới hội nhập toàn cầu về kinh tế và văn hóa.'],
    nationalism: ['Nationalism', 'Chủ nghĩa dân tộc kinh tế', 'Một nước theo đuổi lợi ích kinh tế độc lập hoặc cạnh tranh với lợi ích của nước khác.'],
    autarky: ['Autarky', 'Tự cung tự cấp', 'Archetype không hợp tác và dân tộc: mục tiêu tự lực, nhà nước kiểm soát ngành then chốt và truyền thông.'],
    hegemony: ['Hegemony', 'Bá quyền', 'Archetype không hợp tác nhưng toàn cầu hóa: đủ quy mô để ảnh hưởng nước khác mà không cần hợp tác.'],
    multilateral: ['Multilateralism', 'Chủ nghĩa đa phương', 'Archetype hợp tác và toàn cầu hóa: tham gia thương mại và thỏa thuận với nhiều nước.'],
    bilateral: ['Bilateralism', 'Chủ nghĩa song phương', 'Archetype hợp tác nhưng chủ yếu qua thỏa thuận giữa từng cặp hai nước.'],
    imf: ['International Monetary Fund (IMF)', 'Quỹ Tiền tệ Quốc tế', 'Thúc đẩy hợp tác tiền tệ, ổn định tỷ giá, giám sát và cho vay nước gặp khó khăn cán cân thanh toán.'],
    wb: ['World Bank', 'Ngân hàng Thế giới', 'Cho vay ưu đãi, tín dụng không lãi, viện trợ và tư vấn cho nước đang phát triển nhằm giảm nghèo.'],
    wto: ['World Trade Organization (WTO)', 'Tổ chức Thương mại Thế giới', 'Xây dựng và thực thi hiệp định thương mại đa phương, giải quyết tranh chấp để thương mại lưu thông tự do.'],
    nstool: ['National security tools', 'Công cụ an ninh quốc gia', 'Xung đột vũ trang, gián điệp, liên minh và hiệp ước nhằm thúc đẩy hoặc ngăn chặn xung đột.'],
    ectool: ['Economic tools', 'Công cụ kinh tế', 'Hợp tác: FTA, thị trường chung, liên minh. Không hợp tác: nội địa hóa bắt buộc, hạn chế xuất khẩu tự nguyện, quốc hữu hóa.'],
    fintool: ['Financial tools', 'Công cụ tài chính', 'Liên quan đầu tư nước ngoài và trao đổi tiền tệ; không hợp tác khi hạn chế đầu tư hoặc trừng phạt tài chính.'],
    sanction: ['Sanctions', 'Trừng phạt', 'Biện pháp hạn chế giao dịch, đóng băng tài sản hoặc cắt kết nối tài chính nhắm vào một nước, tổ chức hay cá nhân.'],
    georisk: ['Geopolitical risk', 'Rủi ro địa chính trị', 'Rủi ro từ căng thẳng hoặc hành động giữa các chủ thể làm thay đổi tiến trình bình thường của quan hệ quốc tế và thị trường.'],
    eventrisk: ['Event risk', 'Rủi ro sự kiện', 'Sự kiện biết trước thời điểm nhưng chưa biết kết quả, như bầu cử.'],
    exorisk: ['Exogenous risk', 'Rủi ro ngoại sinh', 'Sự kiện không lường trước, như chiến tranh hay nổi dậy bất ngờ.'],
    thematic: ['Thematic risk', 'Rủi ro chủ đề', 'Yếu tố đã biết, tác động kéo dài nhiều năm, như khí hậu, di cư, an ninh mạng.'],
    blackswan: ['Black swan risk', 'Rủi ro thiên nga đen', 'Sự kiện ngoại sinh xác suất thấp nhưng tác động ngắn hạn rất lớn.'],
    likelihood: ['Likelihood', 'Khả năng xảy ra', 'Xác suất rủi ro địa chính trị xảy ra.'],
    impact: ['Impact', 'Mức tác động', 'Độ lớn ảnh hưởng của rủi ro lên kết quả đầu tư, toàn thị trường hay chỉ một ngành.'],
    velocity: ['Velocity', 'Tốc độ tác động', 'Giá tài sản phản ánh tác động của rủi ro nhanh đến mức nào.'],
    scenario: ['Scenario analysis', 'Phân tích kịch bản', 'Xây các kịch bản có xác suất và ước tính tác động lên danh mục.'],
    signpost: ['Signposts', 'Chỉ báo theo dõi', 'Dấu hiệu quan sát được cho biết kịch bản nào đang thành hiện thực.'],
  };

  const practice = [
    { q: 'Chủ thể nào sau đây là non-state actor?', choices: ['Một tập đoàn đa quốc gia vận động hành lang để giảm thuế nhập khẩu linh kiện', 'Bộ Ngoại giao của một quốc gia', 'Ngân hàng trung ương của một quốc gia'], answer: 0, explain: 'Tập đoàn đa quốc gia không đại diện cho quốc gia nào nên là non-state actor. Bộ Ngoại giao và ngân hàng trung ương là cơ quan nhà nước, tức state actors.' },
    { q: 'Một quốc gia hạn chế tối đa thương mại, đặt mục tiêu tự cung tự cấp, nhà nước nắm các ngành then chốt và kiểm soát truyền thông. Archetype phù hợp nhất là:', choices: ['Hegemony', 'Bilateralism', 'Autarky'], answer: 2, explain: 'Không hợp tác + dân tộc + tự lực là autarky. Hegemony vẫn mở cửa và hội nhập toàn cầu. Bilateralism là có hợp tác, chỉ là theo từng cặp.' },
    { q: 'Một nền kinh tế rất lớn, hội nhập sâu vào thương mại toàn cầu, thường dùng quy mô của mình để buộc các nước khác chấp nhận điều kiện mà không cần đàm phán hợp tác. Archetype phù hợp nhất là:', choices: ['Multilateralism', 'Hegemony', 'Autarky'], answer: 1, explain: 'Hegemony = toàn cầu hóa nhưng không hợp tác: đủ lớn để chi phối. Multilateralism có hợp tác bình đẳng với nhiều nước. Autarky đóng cửa, trái với "hội nhập sâu".' },
    { q: 'Tổ chức nào có mục tiêu chính là giảm nghèo, cung cấp khoản vay lãi suất thấp, tín dụng không lãi và viện trợ cho các nước đang phát triển?', choices: ['World Bank', 'IMF', 'WTO'], answer: 0, explain: 'Đây là World Bank. IMF cũng cho vay nhưng để xử lý khó khăn cán cân thanh toán và ổn định tỷ giá. WTO không cho vay mà lo luật chơi thương mại.' },
    { q: 'Cuộc bầu cử tổng thống của một nước lớn sẽ diễn ra vào tháng 11 năm sau, kết quả còn rất khó đoán. Đối với nhà đầu tư, đây là:', choices: ['Exogenous risk', 'Event risk', 'Thematic risk'], answer: 1, explain: 'Biết trước thời điểm, chưa biết kết quả là event risk. Exogenous risk là sự kiện không lường trước. Thematic risk là yếu tố kéo dài nhiều năm.' },
    { q: 'Mối đe dọa tấn công mạng nhắm vào hạ tầng tài chính, được dự báo sẽ tăng dần trong nhiều năm tới, là ví dụ của:', choices: ['Event risk', 'Black swan risk', 'Thematic risk'], answer: 2, explain: 'Yếu tố đã biết, tác động kéo dài là thematic risk. Không có thời điểm xác định nên không phải event risk; không phải sự kiện bất ngờ xác suất thấp nên không phải black swan.' },
    { q: 'Chính phủ nước A cấm nhà đầu tư nước B mua cổ phần công ty viễn thông trong nước và đóng băng tài sản của ngân hàng trung ương nước B. A đang dùng:', choices: ['Công cụ tài chính theo cách không hợp tác', 'Công cụ kinh tế theo cách hợp tác', 'Công cụ an ninh quốc gia theo cách hợp tác'], answer: 0, explain: 'Hạn chế đầu tư nước ngoài và đóng băng tài sản là công cụ tài chính, dùng để gây sức ép nên là không hợp tác. Không có yếu tố FTA hay liên minh quân sự.' },
    { q: 'Phát biểu nào đúng nhất về soft power?', choices: ['Là việc đe dọa dùng quân sự để buộc nước khác nhượng bộ', 'Là việc áp thuế quan để gây sức ép thương mại', 'Là khả năng ảnh hưởng nước khác qua văn hóa, giá trị mà không dùng hay đe dọa dùng vũ lực'], answer: 2, explain: 'Soft power không dùng ép buộc. Đe dọa quân sự và thuế quan trả đũa đều là công cụ ép buộc (hard power).' },
    { q: 'Một danh mục có 3 kịch bản địa chính trị: cơ sở (xác suất 60%, lợi suất 10%), căng thẳng (30%, -5%), xung đột (10%, -25%). Lợi suất kỳ vọng gần nhất với:', choices: ['10,0%', '2,0%', '-6,7%'], answer: 1, explain: 'E(R) = 0,6 x 10% + 0,3 x (-5%) + 0,1 x (-25%) = 6% - 1,5% - 2,5% = 2,0%. Đáp án A chỉ dùng kịch bản cơ sở. Đáp án C lấy trung bình cộng không theo xác suất.' },
    { q: 'Loại rủi ro nào thường có velocity cao nhất, tức giá tài sản phản ứng gần như tức thì?', choices: ['Một cuộc xâm lược quân sự bất ngờ', 'Xu hướng di cư do biến đổi khí hậu', 'Một cuộc trưng cầu dân ý mà thị trường đã dự đoán đúng kết quả'], answer: 0, explain: 'Exogenous risk như xâm lược bất ngờ có velocity cao. Thematic risk (di cư) thấm dần chậm. Event risk mà kết quả đúng như dự đoán thì phần lớn đã được định giá trước nên phản ứng nhỏ.' },
  ];

  window.LESSONS['EC-05'] = {
    moduleId: 'EC-05',
    calculator: 'Không cần máy tính',
    warmup: [
      'Ôn EC-04: khi một nước tăng lãi suất chính sách, đồng tiền của nước đó thường tăng hay giảm giá? Vì sao điều này liên quan tới các nước khác?',
      'Kể tên 2 hiệp định thương mại Việt Nam đã tham gia. Bạn nghĩ vì sao Việt Nam chọn tham gia nhiều hiệp định cùng lúc?',
      'Đoán trước: một cuộc bầu cử và một cuộc chiến tranh bất ngờ khác nhau thế nào dưới góc nhìn rủi ro đầu tư?',
    ],
    sections,
    glossary,
    practice,
    widgets: {},
    slides: [],
    wrapup: [
      'Vẽ lại ma trận 4 archetype không nhìn tài liệu, mỗi ô ghi một đặc điểm nhận diện.',
      'Mỗi tổ chức IMF, World Bank, WTO: viết một câu về chức năng chính.',
      'Chọn một sự kiện địa chính trị gần đây: thuộc loại rủi ro nào, đánh giá likelihood, impact, velocity ra sao?',
    ],
  };
}());
