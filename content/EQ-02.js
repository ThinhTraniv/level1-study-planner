// Bài giảng EQ-02 - Equity Jurisdictions, Classes, and the Voting Process (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t, frac } = window.CFAH;

  const sections = [
    {
      title: '1. Bức tranh lớn',
      minutes: 4,
      html: `
<p>EQ-01 cho ta "khung chuẩn" của cổ phiếu phổ thông: một cổ phiếu, một phần quyền lợi kinh tế, một phiếu bầu. Thực tế phức tạp hơn nhiều:</p>
<div class="key">Cùng gọi là "cổ phiếu", nhưng quyền lợi kinh tế và quyền biểu quyết có thể <b>khác nhau rất xa</b> tùy theo <b>nơi công ty đăng ký và niêm yết</b> (jurisdiction) và <b>loại cổ phiếu</b> (share class). Quyền biểu quyết chỉ có giá trị khi được thực hiện qua một <b>quy trình</b> có nhiều bên tham gia.</div>
<p>Hai LOS của module:</p>
<ol>
  <li><b>Khác biệt về quyền kinh tế, quyền biểu quyết giữa các khu vực pháp lý và giữa các loại cổ phiếu</b>: phần 2 và 3.</li>
  <li><b>Quy trình biểu quyết và vai trò của ban điều hành, HĐQT, công ty tư vấn ủy quyền, nhà quản lý tài sản và chủ sở hữu tài sản</b>: phần 4 và 5.</li>
</ol>
<p class="tip"><b>Liên hệ:</b> CF-03 đã giới thiệu đại hội cổ đông, bỏ phiếu ủy quyền, bầu thẳng và bầu dồn phiếu như <b>cơ chế quản trị</b>. Ở đây ta đi vào chi tiết: phiếu bầu đi từ nhà đầu tư cuối cùng đến đại hội như thế nào và ai ảnh hưởng đến lá phiếu đó.</p>`,
    },
    {
      title: '2. Khác biệt giữa các khu vực pháp lý',
      minutes: 13,
      html: `
<p>Luật công ty, luật chứng khoán và quy định niêm yết của mỗi nước quyết định cổ đông được bảo vệ đến đâu. Nhà phân tích cần biết công ty <b>đăng ký thành lập ở đâu</b> (luật công ty nào áp dụng) và <b>niêm yết ở đâu</b> (quy định sàn nào áp dụng), vì hai nơi này có thể khác nhau.</p>
<h4>Hai mô hình lớn</h4>
<table class="plain"><thead><tr><th>Tiêu chí</th><th>Mỹ, Anh (thông luật)</th><th>Châu Âu lục địa, phần lớn châu Á</th></tr></thead><tbody>
<tr><td>Cơ cấu sở hữu điển hình</td><td>Phân tán, nhà đầu tư tổ chức nắm phần lớn</td><td>Tập trung: gia đình, Nhà nước, tập đoàn mẹ, sở hữu chéo</td></tr>
<tr><td>Xung đột chính</td><td>Cổ đông với ban điều hành</td><td>${t('minority', 'Cổ đông thiểu số (minority shareholders)')} với cổ đông kiểm soát</td></tr>
<tr><td>Quan điểm về mục tiêu công ty</td><td>Nghiêng về ${t('shprimacy', 'ưu tiên cổ đông (shareholder primacy)')}</td><td>Nghiêng về ${t('stakeholder', 'mô hình các bên liên quan (stakeholder model)')}, ví dụ người lao động có ghế trong ban giám sát ở Đức</td></tr>
<tr><td>Quyền ưu tiên mua cổ phiếu mới</td><td>Ít phổ biến ở công ty đại chúng Mỹ</td><td>Thường là quyền mặc định theo luật (EU, nhiều nước châu Á)</td></tr>
<tr><td>Khi bị thâu tóm</td><td>Anh, EU: ${t('mandatory', 'nghĩa vụ chào mua công khai (mandatory bid)')} khi vượt ngưỡng sở hữu</td><td>Tương tự ở nhiều nước; Việt Nam có ngưỡng chào mua công khai</td></tr>
</tbody></table>
<h4>Những điểm khác biệt nhà đầu tư hay gặp</h4>
<ul>
<li><b>Quyền kinh tế:</b> cách chia cổ tức (một lần hay nhiều lần mỗi năm, cần đại hội phê duyệt hay HĐQT tự quyết), thuế khấu trừ cổ tức với nhà đầu tư nước ngoài, quyền ưu tiên mua.</li>
<li><b>Quyền biểu quyết:</b> có cho phép nhiều loại cổ phiếu với số phiếu khác nhau không; vấn đề nào cần đại hội thông qua; ngưỡng thông qua (đa số thường, đa số đặc biệt); cổ đông được tự đề xuất nội dung không; bầu thẳng hay bầu dồn phiếu.</li>
<li><b>Bảo vệ cổ đông thiểu số:</b> quy định về giao dịch với bên liên quan, quyền khởi kiện, quyền yêu cầu công ty mua lại cổ phần khi phản đối sáp nhập.</li>
<li>${t('fol', 'Giới hạn sở hữu nước ngoài (foreign ownership limit)')}: nhiều nước giới hạn tỷ lệ nhà đầu tư nước ngoài được nắm ở ngành nhạy cảm.</li>
</ul>
<div class="example"><div class="ex-h">Ví dụ 2.1 - giới hạn sở hữu nước ngoài</div>
<p>Một ngân hàng Việt Nam có 5.000 triệu cổ phiếu, giới hạn sở hữu nước ngoài 30%. Nhà đầu tư nước ngoài hiện nắm 28,5%. Khối ngoại còn được mua thêm bao nhiêu cổ phiếu? Hệ quả với giá?</p>
<details><summary>Xem lời giải</summary><p>"Room" còn lại = (30% - 28,5%) × 5.000 = <b>75 triệu cổ phiếu</b>. Khi room gần hết, nhà đầu tư nước ngoài muốn mua phải mua lại từ một nhà đầu tư nước ngoài khác, thường với giá cao hơn giá trên sàn. Cùng một cổ phiếu nhưng thực tế có hai mức giá: một cho nhà đầu tư trong nước, một cho nhà đầu tư nước ngoài.</p></details></div>
<p class="warn"><b>Bẫy:</b> nơi niêm yết không quyết định luật công ty. Một công ty đăng ký ở Quần đảo Cayman và niêm yết ở New York chịu luật công ty Cayman về quyền cổ đông, còn quy định công bố thông tin theo sàn Mỹ.</p>`,
    },
    {
      title: '3. Các loại cổ phiếu và quyền biểu quyết',
      minutes: 14,
      html: `
<p>Nguyên tắc ${t('oneshare', 'một cổ phiếu, một phiếu bầu (one share, one vote)')} gắn quyền kiểm soát với phần vốn góp. Nhiều cấu trúc đi lệch khỏi nguyên tắc này:</p>
<h4>Cổ phiếu nhiều loại (dual-class, multiple-class)</h4>
<p>Công ty phát hành ${t('dualclass', 'nhiều loại cổ phiếu (dual-class shares)')} có quyền kinh tế như nhau nhưng số phiếu bầu khác nhau. Mô hình phổ biến ở các công ty công nghệ Mỹ: cổ phiếu Class A bán cho công chúng có 1 phiếu, cổ phiếu Class B của nhà sáng lập có 10 phiếu, đôi khi có thêm loại không có quyền biểu quyết.</p>
<div class="formula">Tỷ lệ quyền biểu quyết của nhóm B = ${frac('số CP B × phiếu mỗi CP B', 'số CP A × phiếu mỗi CP A + số CP B × phiếu mỗi CP B')}</div>
<div class="example"><div class="ex-h">Ví dụ 3.1</div>
<p>Nhà sáng lập nắm 15% tổng số cổ phiếu, toàn bộ là Class B (10 phiếu/cổ phiếu). 85% còn lại là Class A (1 phiếu). Nhà sáng lập kiểm soát bao nhiêu phần trăm phiếu bầu?</p>
<details><summary>Xem lời giải</summary><p>Phiếu B = 15 × 10 = 150; phiếu A = 85 × 1 = 85. Tỷ lệ = 150 / 235 = <b>63,83%</b>. Với 15% vốn, nhà sáng lập thắng mọi nghị quyết cần đa số thường. Nếu chỉ nắm 10% vốn: 100 / 190 = <b>52,63%</b>, vẫn đủ kiểm soát.</p></details></div>
<table class="plain"><thead><tr><th>Lập luận ủng hộ</th><th>Lập luận phản đối</th></tr></thead><tbody>
<tr><td>Nhà sáng lập theo đuổi tầm nhìn dài hạn, không bị áp lực ngắn hạn hay bị thâu tóm</td><td>Ban điều hành khó bị thay thế dù làm kém (entrenchment); cổ đông đại chúng gánh rủi ro nhưng không có tiếng nói</td></tr>
<tr><td>Giúp công ty IPO mà không mất quyền kiểm soát</td><td>Thường bị định giá thấp hơn; một số nhà cung cấp chỉ số và nhà đầu tư tổ chức hạn chế loại cấu trúc này</td></tr>
</tbody></table>
<p>Để cân bằng, nhiều công ty có ${t('sunset', 'điều khoản hoàng hôn (sunset clause)')}: cổ phiếu B tự chuyển thành cổ phiếu A sau một số năm, khi nhà sáng lập rời đi hoặc khi tỷ lệ sở hữu xuống dưới ngưỡng.</p>
<h4>Các cấu trúc khác</h4>
<table class="plain"><thead><tr><th>Cấu trúc</th><th>Đặc điểm</th></tr></thead><tbody>
<tr><td>Cổ phiếu không có quyền biểu quyết</td><td>Cùng quyền kinh tế, không phiếu bầu; đôi khi bù bằng cổ tức cao hơn chút (ví dụ cổ phiếu ưu tiên cổ tức ở Đức)</td></tr>
<tr><td>${t('loyalty', 'Cổ phiếu trung thành (loyalty shares)')}</td><td>Cổ đông nắm giữ lâu (ví dụ từ 2 năm) được thêm phiếu bầu; phổ biến ở Pháp, Ý, Hà Lan</td></tr>
<tr><td>${t('golden', 'Cổ phần vàng (golden share)')}</td><td>Nhà nước giữ một cổ phần có quyền phủ quyết các quyết định chiến lược sau khi tư nhân hóa</td></tr>
<tr><td>Cổ phiếu A, B, H của Trung Quốc</td><td>A: niêm yết trong nước bằng nhân dân tệ; B: trong nước nhưng bằng ngoại tệ; H: công ty Trung Quốc niêm yết ở Hồng Kông. Cùng quyền kinh tế, nhưng giá có thể chênh lệch đáng kể do hạn chế dòng vốn</td></tr>
<tr><td>${t('vie', 'Cấu trúc VIE (variable interest entity)')}</td><td>Nhà đầu tư nước ngoài mua cổ phiếu của công ty vỏ ở nước ngoài, công ty này chỉ kiểm soát công ty hoạt động trong nước bằng <b>hợp đồng</b>, không sở hữu trực tiếp. Rủi ro pháp lý lớn</td></tr>
<tr><td>${t('nvdr', 'NVDR (non-voting depositary receipt)')}</td><td>Thái Lan: chứng chỉ cho nhà đầu tư nước ngoài hưởng quyền kinh tế nhưng không biểu quyết, để vượt giới hạn sở hữu nước ngoài</td></tr>
</tbody></table>
<h4>Chứng chỉ lưu ký (depositary receipts)</h4>
<p>${t('dr', 'Chứng chỉ lưu ký (depositary receipt, DR)')} do một ngân hàng lưu ký phát hành, đại diện cho cổ phiếu nước ngoài được giữ tại ngân hàng. ADR giao dịch ở Mỹ bằng USD; GDR giao dịch ở các thị trường khác.</p>
<ul>
<li>${t('sponsored', 'DR có bảo trợ (sponsored)')}: công ty phát hành tham gia ký thỏa thuận; người nắm DR thường được biểu quyết thông qua ngân hàng lưu ký; yêu cầu công bố thông tin cao hơn.</li>
<li>DR không bảo trợ (unsponsored): ngân hàng tự phát hành, công ty không tham gia; ngân hàng lưu ký <b>giữ quyền biểu quyết</b>.</li>
</ul>
<div class="example"><div class="ex-h">Ví dụ 3.2</div>
<p>Một ADR đại diện cho 2 cổ phiếu Nhật đang giao dịch 3.000 JPY, tỷ giá 150 JPY/USD. Giá ADR hợp lý (bỏ qua phí) là bao nhiêu?</p>
<details><summary>Xem lời giải</summary><p>2 × 3.000 / 150 = <b>40 USD</b>. Nếu ADR chênh lệch nhiều so với mức này, nhà kinh doanh chênh lệch giá sẽ mua bên rẻ, bán bên đắt cho đến khi giá về gần nhau. Người nắm ADR chịu cả rủi ro giá cổ phiếu và rủi ro tỷ giá.</p></details></div>`,
    },
    {
      title: '4. Quy trình biểu quyết',
      minutes: 13,
      html: `
<p>Biểu quyết thường diễn ra tại ${t('agm', 'đại hội cổ đông thường niên (AGM)')} hoặc đại hội bất thường. Phần lớn cổ đông không dự trực tiếp mà ${t('proxy', 'bỏ phiếu ủy quyền (proxy voting)')}.</p>
<h4>Trình tự</h4>
<ol>
<li><b>HĐQT ấn định ngày họp và ${t('recorddate', 'ngày chốt danh sách (record date)')}</b>: ai có tên trong sổ cổ đông vào ngày này mới có quyền biểu quyết, dù sau đó đã bán cổ phiếu.</li>
<li><b>Gửi thông báo và ${t('proxystmt', 'tài liệu ủy quyền (proxy statement)')}</b>: chương trình họp, thông tin ứng viên HĐQT, thù lao lãnh đạo, kiểm toán viên, các đề xuất và khuyến nghị của HĐQT.</li>
<li><b>Phân tích và quyết định</b>: nhà đầu tư tổ chức đọc tài liệu, tham khảo công ty tư vấn ủy quyền, đối thoại với công ty.</li>
<li><b>Bỏ phiếu qua chuỗi trung gian</b>: cổ phiếu thường đứng tên lưu ký, môi giới (registered holder) thay cho ${t('beneficial', 'chủ sở hữu hưởng lợi (beneficial owner)')}; chỉ thị biểu quyết đi ngược qua chuỗi này.</li>
<li><b>Họp, kiểm phiếu và công bố kết quả</b>.</li>
</ol>
<h4>Nội dung thường được biểu quyết</h4>
<ul>
<li>Bầu thành viên HĐQT; phê duyệt kiểm toán viên; báo cáo tài chính và phân phối lợi nhuận (ở nhiều nước ngoài Mỹ).</li>
<li>${t('sayonpay', 'Biểu quyết về thù lao (say on pay)')}: ở một số nước chỉ mang tính tư vấn, ở nơi khác có tính ràng buộc.</li>
<li>Sáp nhập, bán tài sản lớn, phát hành thêm cổ phiếu, sửa điều lệ: thường cần ${t('special', 'đa số đặc biệt (special resolution)')}, ví dụ 65% hoặc 75% số phiếu dự họp tùy nước.</li>
<li>${t('shproposal', 'Đề xuất của cổ đông (shareholder proposal)')}: cổ đông đủ điều kiện đưa vấn đề vào chương trình họp (ví dụ về môi trường, quản trị).</li>
</ul>
<h4>Bầu HĐQT: đa số hay nhiều phiếu nhất?</h4>
<p>Với ${t('plurality', 'bầu theo số phiếu nhiều nhất (plurality voting)')}, khi số ứng viên bằng số ghế thì mọi ứng viên đều trúng, kể cả khi đa số phiếu là "không ủng hộ". Với ${t('majority', 'bầu theo đa số (majority voting)')}, ứng viên phải nhận hơn 50% số phiếu bầu, nếu không phải từ nhiệm hoặc HĐQT phải xem xét lại.</p>
<h4>Bầu thẳng và bầu dồn phiếu</h4>
<p>${t('straight', 'Bầu thẳng (straight voting)')}: mỗi cổ phiếu có 1 phiếu cho <b>từng</b> ghế, nên nhóm nắm hơn 50% thắng mọi ghế. ${t('cumvote', 'Bầu dồn phiếu (cumulative voting)')}: tổng phiếu = số cổ phiếu × số ghế, được dồn cho một hoặc vài ứng viên.</p>
<div class="formula">Số cổ phiếu cần để chắc chắn có k ghế &gt; ${frac('k × S', 'N + 1')} &nbsp;&nbsp; (S: tổng số cổ phiếu biểu quyết, N: số ghế được bầu)</div>
<div class="example"><div class="ex-h">Ví dụ 4.1</div>
<p>Công ty có 1.000.000 cổ phiếu biểu quyết, bầu 5 ghế HĐQT. Nhóm thiểu số nắm 300.000 cổ phiếu. Nhóm này chắc chắn có bao nhiêu ghế theo (a) bầu thẳng, (b) bầu dồn phiếu?</p>
<details><summary>Xem lời giải</summary><p>(a) Bầu thẳng: với mỗi ghế, nhóm đa số có 700.000 phiếu so với 300.000, nên thiểu số có <b>0 ghế</b>.<br>
(b) Bầu dồn phiếu: thiểu số có 300.000 × 5 = 1.500.000 phiếu. Một ghế cần hơn 1.000.000 / 6 = 166.667 cổ phiếu; hai ghế cần hơn 333.333 cổ phiếu. Với 300.000 cổ phiếu, thiểu số chắc chắn có <b>1 ghế</b>. Nếu nắm 400.000 cổ phiếu thì chắc chắn có 2 ghế.</p></details></div>
<p class="tip"><b>Việt Nam:</b> Luật Doanh nghiệp quy định nghị quyết thông thường được thông qua khi trên 50% số phiếu của cổ đông dự họp tán thành, các vấn đề quan trọng (sửa điều lệ, tổ chức lại, bán tài sản lớn) cần từ 65%; việc bầu HĐQT thường theo phương thức bầu dồn phiếu.</p>`,
    },
    {
      title: '5. Vai trò của các bên trong quy trình biểu quyết',
      minutes: 12,
      html: `
<table class="plain"><thead><tr><th>Bên</th><th>Vai trò chính</th><th>Lưu ý</th></tr></thead><tbody>
<tr><td>Ban điều hành (management)</td><td>Chuẩn bị tài liệu, đề xuất nội dung (thường qua HĐQT), vận động cổ đông ủng hộ, đối thoại với nhà đầu tư</td><td>Có lợi ích riêng ở các vấn đề như thù lao, chống thâu tóm</td></tr>
<tr><td>HĐQT (board)</td><td>Phê duyệt chương trình họp và ngày chốt; đề cử ứng viên; đưa ra <b>khuyến nghị</b> cho từng nội dung; phản hồi khi một nghị quyết bị phản đối nhiều</td><td>Đại diện cho cổ đông, chịu trách nhiệm giám sát ban điều hành</td></tr>
<tr><td>${t('proxyadv', 'Công ty tư vấn ủy quyền (proxy advisor)')}</td><td>Nghiên cứu tài liệu và đưa ra <b>khuyến nghị bỏ phiếu</b> cho nhà đầu tư tổ chức; cung cấp nền tảng bỏ phiếu</td><td>Hai công ty lớn chiếm phần lớn thị trường; bị phê phán vì áp một khuôn mẫu cho mọi công ty, xung đột lợi ích, và nhà đầu tư làm theo máy móc</td></tr>
<tr><td>${t('am', 'Nhà quản lý tài sản (asset manager)')}</td><td>Thường được ủy quyền biểu quyết thay khách hàng; có chính sách biểu quyết, đội ngũ ${t('stewardship', 'quản lý trách nhiệm (stewardship)')} và đối thoại với công ty</td><td>Nghĩa vụ ủy thác: phải bỏ phiếu vì lợi ích khách hàng. Quỹ chỉ số lớn nắm nhiều phiếu nên ảnh hưởng mạnh; xu hướng "lựa chọn biểu quyết" (pass-through voting) cho khách hàng tự chọn</td></tr>
<tr><td>${t('ao', 'Chủ sở hữu tài sản (asset owner)')}</td><td>Quỹ hưu trí, quỹ đầu tư quốc gia, công ty bảo hiểm, quỹ tài trợ: là chủ thực sự của vốn; tự bỏ phiếu hoặc ủy quyền cho nhà quản lý tài sản; đặt ra chính sách stewardship và giám sát việc thực hiện</td><td>Nếu cho vay chứng khoán, phải <b>thu hồi cổ phiếu cho vay</b> trước ngày chốt để giữ quyền biểu quyết</td></tr>
</tbody></table>
<div class="key">Chuỗi trách nhiệm: <b>chủ sở hữu tài sản</b> giao vốn và (thường) quyền biểu quyết cho <b>nhà quản lý tài sản</b>, người này có thể tham khảo <b>proxy advisor</b>, rồi bỏ phiếu cho các nội dung mà <b>HĐQT</b> và <b>ban điều hành</b> đưa ra. Mỗi mắt xích là một quan hệ ủy quyền - đại diện có thể phát sinh xung đột.</div>
<h4>Một số vấn đề thực tế</h4>
<ul>
<li><b>Cho vay chứng khoán:</b> người cho vay mất quyền biểu quyết trong thời gian cho vay; người vay có thể biểu quyết dù không có lợi ích kinh tế thực sự (empty voting).</li>
<li><b>Phong tỏa cổ phiếu (share blocking):</b> ở một số thị trường, cổ phiếu bị khóa không được bán vài ngày trước đại hội nếu cổ đông đăng ký biểu quyết, nên nhà đầu tư có khi chọn không bỏ phiếu.</li>
<li><b>Bỏ phiếu xuyên biên giới:</b> chuỗi lưu ký dài, chi phí cao, thời hạn ngắn làm nhiều phiếu bị thất lạc hoặc không kịp.</li>
<li><b>Nhà đầu tư cá nhân</b> thường không bỏ phiếu; trong đó ở Mỹ, môi giới không được tự bỏ phiếu thay khách ở các vấn đề quan trọng như bầu HĐQT.</li>
</ul>
<div class="example"><div class="ex-h">Ví dụ 5.1</div>
<p>Một quỹ hưu trí giao danh mục cổ phiếu cho nhà quản lý tài sản và cho vay một phần cổ phiếu để tăng thu nhập. Một công ty trong danh mục sắp biểu quyết về một thương vụ sáp nhập gây tranh cãi. Quỹ hưu trí nên làm gì?</p>
<details><summary>Xem lời giải</summary><p>(1) Yêu cầu <b>thu hồi cổ phiếu cho vay trước ngày chốt danh sách</b> để có quyền biểu quyết. (2) Bảo đảm nhà quản lý tài sản bỏ phiếu theo chính sách stewardship của quỹ, có thể tham khảo proxy advisor nhưng không làm theo máy móc. (3) Nếu chính sách cho phép, quỹ có thể tự chỉ đạo phiếu bầu cho thương vụ này.</p></details></div>`,
    },
    {
      title: '6. Tóm tắt và bẫy thường gặp',
      minutes: 4,
      html: `
<table class="plain"><thead><tr><th>Tình huống</th><th>Nhớ</th></tr></thead><tbody>
<tr><td>Đăng ký ở đâu, niêm yết ở đâu</td><td>Luật công ty theo nơi đăng ký; quy định công bố theo nơi niêm yết</td></tr>
<tr><td>Sở hữu tập trung</td><td>Xung đột chính là cổ đông kiểm soát với cổ đông thiểu số</td></tr>
<tr><td>Dual-class</td><td>Tỷ lệ phiếu = phiếu B / tổng phiếu; 15% vốn × 10 phiếu → 63,83%</td></tr>
<tr><td>Loyalty shares</td><td>Thêm phiếu cho cổ đông nắm lâu</td></tr>
<tr><td>Golden share</td><td>Nhà nước giữ quyền phủ quyết</td></tr>
<tr><td>VIE</td><td>Kiểm soát bằng hợp đồng, không sở hữu trực tiếp</td></tr>
<tr><td>DR không bảo trợ</td><td>Ngân hàng lưu ký giữ quyền biểu quyết</td></tr>
<tr><td>Record date</td><td>Có tên vào ngày này mới được biểu quyết</td></tr>
<tr><td>Plurality</td><td>Ứng viên không có đối thủ luôn trúng; majority cần hơn 50%</td></tr>
<tr><td>Bầu dồn phiếu</td><td>k ghế cần hơn k × S / (N + 1) cổ phiếu</td></tr>
<tr><td>Proxy advisor</td><td>Khuyến nghị, không phải chủ sở hữu; không tự có phiếu bầu</td></tr>
<tr><td>Asset owner cho vay chứng khoán</td><td>Thu hồi trước ngày chốt để biểu quyết</td></tr>
</tbody></table>
<p>Tiếp theo: tab <b>Luyện tập</b> 10 câu. Module sau (EQ-03) chuyển sang cách cổ phiếu được phát hành và giao dịch.</p>`,
    },
  ];

  const glossary = {
    minority: ['Minority shareholders', 'Cổ đông thiểu số', 'Cổ đông không nắm quyền kiểm soát; dễ bị thiệt khi cổ đông lớn ưu tiên lợi ích riêng.'],
    shprimacy: ['Shareholder primacy', 'Ưu tiên cổ đông', 'Quan điểm cho rằng mục tiêu chính của công ty là tối đa hóa giá trị cho cổ đông.'],
    stakeholder: ['Stakeholder model', 'Mô hình các bên liên quan', 'Quan điểm công ty phải cân bằng lợi ích của cổ đông, người lao động, chủ nợ, cộng đồng.'],
    mandatory: ['Mandatory bid rule', 'Nghĩa vụ chào mua công khai', 'Người vượt ngưỡng sở hữu nhất định phải chào mua cổ phiếu của các cổ đông còn lại.'],
    fol: ['Foreign ownership limit', 'Giới hạn sở hữu nước ngoài', 'Tỷ lệ tối đa nhà đầu tư nước ngoài được nắm giữ ở một công ty hoặc ngành.'],
    oneshare: ['One share, one vote', 'Một cổ phiếu, một phiếu bầu', 'Nguyên tắc quyền biểu quyết tỷ lệ thuận với phần vốn góp.'],
    dualclass: ['Dual-class shares', 'Cổ phiếu nhiều loại', 'Các loại cổ phiếu có quyền kinh tế như nhau nhưng số phiếu bầu khác nhau.'],
    sunset: ['Sunset clause', 'Điều khoản hoàng hôn', 'Điều khoản tự chấm dứt quyền biểu quyết đặc biệt sau một thời gian hoặc khi có sự kiện định trước.'],
    loyalty: ['Loyalty shares', 'Cổ phiếu trung thành', 'Cổ đông nắm giữ đủ lâu được thêm quyền biểu quyết (hoặc cổ tức).'],
    golden: ['Golden share', 'Cổ phần vàng', 'Cổ phần đặc biệt của Nhà nước có quyền phủ quyết một số quyết định chiến lược.'],
    vie: ['Variable interest entity (VIE)', 'Cấu trúc VIE', 'Công ty niêm yết ở nước ngoài kiểm soát công ty hoạt động trong nước bằng hợp đồng, không sở hữu trực tiếp.'],
    nvdr: ['Non-voting depositary receipt (NVDR)', 'Chứng chỉ lưu ký không biểu quyết', 'Chứng chỉ cho hưởng quyền kinh tế của cổ phiếu nhưng không có quyền biểu quyết (Thái Lan).'],
    dr: ['Depositary receipt (DR)', 'Chứng chỉ lưu ký', 'Chứng chỉ do ngân hàng lưu ký phát hành, đại diện cho cổ phiếu nước ngoài được giữ tại ngân hàng.'],
    sponsored: ['Sponsored DR', 'DR có bảo trợ', 'DR có sự tham gia của công ty phát hành; người nắm thường được biểu quyết.'],
    agm: ['Annual general meeting (AGM)', 'Đại hội cổ đông thường niên', 'Cuộc họp hằng năm để cổ đông biểu quyết các vấn đề quan trọng.'],
    proxy: ['Proxy voting', 'Bỏ phiếu ủy quyền', 'Cổ đông ủy quyền cho người khác bỏ phiếu thay hoặc gửi chỉ thị biểu quyết từ xa.'],
    recorddate: ['Record date', 'Ngày chốt danh sách', 'Ngày xác định danh sách cổ đông có quyền biểu quyết hoặc nhận cổ tức.'],
    proxystmt: ['Proxy statement', 'Tài liệu ủy quyền', 'Tài liệu gửi cổ đông trước đại hội: chương trình, ứng viên, thù lao, đề xuất và khuyến nghị.'],
    beneficial: ['Beneficial owner', 'Chủ sở hữu hưởng lợi', 'Người thực sự hưởng lợi ích kinh tế của cổ phiếu, dù cổ phiếu đứng tên trung gian.'],
    sayonpay: ['Say on pay', 'Biểu quyết về thù lao', 'Cổ đông biểu quyết về chính sách hoặc mức thù lao của lãnh đạo.'],
    special: ['Special resolution', 'Nghị quyết đa số đặc biệt', 'Nghị quyết cần tỷ lệ tán thành cao hơn đa số thường, ví dụ 65% hoặc 75%.'],
    shproposal: ['Shareholder proposal', 'Đề xuất của cổ đông', 'Nội dung do cổ đông đủ điều kiện đưa vào chương trình đại hội.'],
    plurality: ['Plurality voting', 'Bầu theo số phiếu nhiều nhất', 'Ứng viên nhiều phiếu nhất trúng; khi không có đối thủ thì luôn trúng.'],
    majority: ['Majority voting', 'Bầu theo đa số', 'Ứng viên phải nhận hơn 50% số phiếu bầu mới trúng.'],
    straight: ['Straight voting', 'Bầu thẳng', 'Mỗi cổ phiếu một phiếu cho từng ghế; nhóm trên 50% thắng mọi ghế.'],
    cumvote: ['Cumulative voting', 'Bầu dồn phiếu', 'Tổng phiếu = số cổ phiếu × số ghế, được dồn cho một vài ứng viên; giúp thiểu số có ghế.'],
    proxyadv: ['Proxy advisor', 'Công ty tư vấn ủy quyền', 'Công ty nghiên cứu tài liệu đại hội và đưa khuyến nghị bỏ phiếu cho nhà đầu tư tổ chức.'],
    am: ['Asset manager', 'Nhà quản lý tài sản', 'Tổ chức quản lý vốn thay khách hàng, thường được ủy quyền biểu quyết.'],
    stewardship: ['Stewardship', 'Quản lý trách nhiệm', 'Hoạt động biểu quyết, đối thoại và giám sát công ty để bảo vệ giá trị dài hạn cho khách hàng.'],
    ao: ['Asset owner', 'Chủ sở hữu tài sản', 'Chủ thực sự của vốn như quỹ hưu trí, quỹ quốc gia, bảo hiểm; quyết định chính sách biểu quyết.'],
  };

  const practice = [
    { q: 'Nhà sáng lập nắm 15% tổng số cổ phiếu của công ty, toàn bộ là Class B (10 phiếu/cổ phiếu); 85% còn lại là Class A (1 phiếu). Tỷ lệ quyền biểu quyết của nhà sáng lập gần nhất với:', choices: ['15,00%', '63,83%', '60,00%'], answer: 1, explain: '150 / (150 + 85) = 63,83%. Lựa chọn 15,00% là tỷ lệ quyền kinh tế, không phải phiếu bầu. Lựa chọn 60,00% lấy 1,5 / (1 + 1,5), tức coi cả nhóm Class A chỉ có 1 phần phiếu.' },
    { q: 'Công ty có 1.000 cổ phiếu biểu quyết, bầu 9 ghế HĐQT theo phương thức bầu dồn phiếu. Một cổ đông nắm 260 cổ phiếu chắc chắn có tối đa bao nhiêu ghế?', choices: ['2', '0', '3'], answer: 0, explain: 'Mỗi ghế cần hơn 1.000 / (9 + 1) = 100 cổ phiếu. 260 > 200 nên có 2 ghế; 3 ghế cần hơn 300. Lựa chọn 0 là kết quả của bầu thẳng; lựa chọn 3 làm tròn lên 260 / 100.' },
    { q: 'Vai trò chính của công ty tư vấn ủy quyền (proxy advisor) là:', choices: ['Sở hữu cổ phiếu thay cho nhà đầu tư và bỏ phiếu bằng tên mình', 'Soạn thảo chương trình đại hội và đề cử ứng viên HĐQT', 'Phân tích tài liệu đại hội và đưa khuyến nghị bỏ phiếu cho nhà đầu tư tổ chức'], answer: 2, explain: 'Proxy advisor chỉ nghiên cứu và khuyến nghị (kèm nền tảng bỏ phiếu); quyết định thuộc về nhà đầu tư. Soạn chương trình và đề cử là việc của HĐQT và ban điều hành.' },
    { q: 'Cổ đông bán cổ phiếu sau ngày chốt danh sách (record date) nhưng trước ngày đại hội. Ai có quyền biểu quyết tại đại hội?', choices: ['Người mua, vì đang sở hữu cổ phiếu vào ngày họp', 'Không ai, vì cổ phiếu đã đổi chủ', 'Người bán, vì có tên trong danh sách vào ngày chốt'], answer: 2, explain: 'Quyền biểu quyết xác định theo danh sách tại ngày chốt. Người mua sau ngày chốt chưa có quyền cho đại hội này.' },
    { q: 'Cấu trúc nào trao thêm quyền biểu quyết cho cổ đông nắm giữ cổ phiếu trong thời gian dài?', choices: ['Loyalty shares', 'Golden share', 'NVDR'], answer: 0, explain: 'Loyalty shares thưởng phiếu bầu cho cổ đông dài hạn. Golden share là quyền phủ quyết của Nhà nước; NVDR thì không có quyền biểu quyết.' },
    { q: 'Với chứng chỉ lưu ký không bảo trợ (unsponsored DR), quyền biểu quyết thường thuộc về:', choices: ['Người nắm giữ DR', 'Ngân hàng lưu ký', 'Công ty phát hành cổ phiếu cơ sở'], answer: 1, explain: 'Với DR không bảo trợ, công ty không tham gia; ngân hàng lưu ký đứng tên cổ phiếu và giữ quyền biểu quyết. Với DR có bảo trợ, người nắm DR thường được biểu quyết qua ngân hàng.' },
    { q: 'Nhận định nào đúng về quyền ưu tiên mua cổ phiếu mới (preemptive right)?', choices: ['Thường là quyền mặc định theo luật ở châu Âu, ít phổ biến ở công ty đại chúng Mỹ', 'Là quyền mặc định ở công ty đại chúng Mỹ, bị cấm ở châu Âu', 'Chỉ áp dụng cho cổ phiếu ưu đãi'], answer: 0, explain: 'Luật EU và nhiều nước châu Á bảo vệ cổ đông hiện hữu bằng preemptive right; ở Mỹ công ty đại chúng thường không có quyền này. Quyền này gắn với cổ phiếu phổ thông.' },
    { q: 'Một quỹ hưu trí cho vay cổ phiếu để tăng thu nhập và muốn biểu quyết tại đại hội sắp tới. Quỹ nên:', choices: ['Chờ đến ngày đại hội rồi yêu cầu bên vay bỏ phiếu theo ý mình', 'Không cần làm gì vì quyền biểu quyết luôn thuộc chủ sở hữu ban đầu', 'Thu hồi cổ phiếu cho vay trước ngày chốt danh sách'], answer: 2, explain: 'Trong thời gian cho vay, quyền biểu quyết đi theo cổ phiếu sang bên vay. Phải thu hồi trước ngày chốt mới có tên trong danh sách biểu quyết.' },
    { q: 'Theo phương thức bầu theo số phiếu nhiều nhất (plurality), trong một cuộc bầu không có ứng viên cạnh tranh:', choices: ['Ứng viên chỉ trúng khi nhận hơn 50% số phiếu bầu', 'Ứng viên vẫn trúng dù đa số phiếu là không ủng hộ', 'Cổ đông thiểu số chắc chắn có ít nhất một ghế'], answer: 1, explain: 'Plurality: số ứng viên bằng số ghế thì ai cũng trúng, kể cả với rất ít phiếu ủng hộ. Yêu cầu hơn 50% là đặc điểm của majority voting. Ghế cho thiểu số liên quan đến bầu dồn phiếu.' },
    { q: 'Nhà đầu tư mua cổ phiếu niêm yết ở Mỹ của một công ty Trung Quốc dùng cấu trúc VIE. Nhà đầu tư thực chất sở hữu:', choices: ['Cổ phiếu của một công ty vỏ ở nước ngoài, công ty này kiểm soát công ty hoạt động bằng hợp đồng', 'Cổ phiếu A trực tiếp của công ty hoạt động ở Trung Quốc', 'Một chứng chỉ có bảo đảm của Nhà nước Trung Quốc'], answer: 0, explain: 'VIE: nhà đầu tư nắm cổ phiếu của công ty vỏ (thường đăng ký ở nước ngoài) chỉ có quyền theo hợp đồng với công ty hoạt động, không sở hữu trực tiếp; đây là rủi ro pháp lý chính. Không có bảo đảm nào của Nhà nước.' },
  ];

  window.LESSONS['EQ-02'] = {
    moduleId: 'EQ-02',
    calculator: 'Không cần máy tính',
    warmup: [
      'Ôn EQ-01: cổ đông phổ thông có ba nhóm quyền nào?',
      'Ôn CF-03: bầu thẳng và bầu dồn phiếu khác nhau thế nào?',
      'Bạn đã bao giờ nhận thư mời đại hội cổ đông chưa? Nếu có, bạn đã bỏ phiếu chưa và vì sao?',
    ],
    sections,
    glossary,
    practice,
    widgets: {},
    slides: [],
    wrapup: [
      'Vẽ sơ đồ chuỗi biểu quyết từ chủ sở hữu tài sản đến đại hội cổ đông, ghi vai trò từng bên.',
      'Tự đặt một ví dụ dual-class và tính tỷ lệ phiếu bầu của nhà sáng lập.',
      'Còn câu hỏi nào chưa rõ? Ghi lại để hỏi.',
    ],
  };
}());
