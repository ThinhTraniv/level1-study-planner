// Bài giảng CF-03 - Corporate Governance: Conflicts, Mechanisms, Risks, and Benefits (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t } = window.CFAH;

  const sections = [
    {
      title: '1. Bức tranh lớn',
      minutes: 5,
      html: `
<p>CF-02 cho thấy mỗi bên liên quan muốn một thứ khác nhau và lợi ích của họ có thể va chạm. CF-03 trả lời ba câu hỏi tiếp theo:</p>
<div class="key">${t('cg', 'Quản trị công ty (corporate governance)')} là hệ thống các nguyên tắc, quy trình và cơ chế để <b>điều hành và kiểm soát</b> công ty, nhằm giảm xung đột lợi ích giữa các bên liên quan. Quản trị tốt không xóa bỏ xung đột, nhưng giữ chúng ở mức chi phí thấp nhất.</div>
<ol>
  <li><b>Xung đột phát sinh từ đâu?</b> Quan hệ ủy quyền - đại diện và các xung đột giữa các nhóm. Ứng với LOS 1 (phần 2, 3).</li>
  <li><b>Dùng công cụ gì để quản lý?</b> Cơ chế của cổ đông, chủ nợ, HĐQT, nhân viên, khách hàng, nhà cung cấp và Nhà nước. Ứng với LOS 2 (phần 4).</li>
  <li><b>Được gì và mất gì?</b> Rủi ro của quản trị kém và lợi ích của quản trị tốt. Ứng với LOS 3 (phần 5).</li>
</ol>`,
    },
    {
      title: '2. Quan hệ ủy quyền - đại diện (principal-agent)',
      minutes: 12,
      html: `
<p>Một ${t('pa', 'quan hệ ủy quyền - đại diện (principal-agent relationship)')} xuất hiện khi một bên (${t('principal', 'người ủy quyền, principal')}) thuê bên khác (${t('agent', 'người đại diện, agent')}) làm việc thay mình và trao cho họ quyền ra quyết định. Trong công ty:</p>
<ul>
<li>Cổ đông (principal) bầu HĐQT (agent) để giám sát thay mình.</li>
<li>HĐQT (principal) thuê ban điều hành (agent) để điều hành công ty.</li>
</ul>
<p>Vấn đề nảy sinh vì hai lý do cùng lúc: (1) lợi ích của agent không trùng với principal; (2) ${t('asym', 'bất cân xứng thông tin (information asymmetry)')}: ban điều hành biết về hoạt động và chiến lược của công ty nhiều hơn hẳn cổ đông, nên cổ đông khó giám sát.</p>
<h4>Chi phí đại diện (agency costs)</h4>
<p>${t('agencycost', 'Chi phí đại diện')} là tổng thiệt hại do xung đột đại diện gây ra, gồm:</p>
<ul>
<li><b>Chi phí trực tiếp</b>: tiền chi ra để giám sát và ràng buộc agent, ví dụ thuê kiểm toán độc lập, thù lao thành viên HĐQT độc lập, chi phí xây dựng hệ thống báo cáo.</li>
<li><b>Chi phí gián tiếp</b>: giá trị mất đi vì agent ra quyết định không tối ưu, ví dụ bỏ lỡ dự án tốt vì ban điều hành ngại rủi ro, hoặc đầu tư vào dự án kém để mở rộng đế chế.</li>
</ul>
<div class="example"><div class="ex-h">Ví dụ 2.1</div>
<p>Phân loại: (a) phí kiểm toán báo cáo tài chính hằng năm; (b) CEO từ chối một dự án có NPV dương vì sợ thất bại ảnh hưởng đến uy tín cá nhân.</p>
<details><summary>Xem lời giải</summary><p>(a) là chi phí đại diện <b>trực tiếp</b> (tiền chi ra để giám sát). (b) là chi phí <b>gián tiếp</b> (giá trị bị bỏ lỡ do quyết định của agent).</p></details></div>`,
    },
    {
      title: '3. Các xung đột giữa các nhóm bên liên quan',
      minutes: 20,
      html: `
<h4>a) Cổ đông và ban điều hành / HĐQT</h4>
<table class="plain"><thead><tr><th>Dạng xung đột</th><th>Biểu hiện</th></tr></thead><tbody>
<tr><td>Thiếu nỗ lực</td><td>Ban điều hành không làm hết sức vì phần thưởng không gắn với kết quả</td></tr>
<tr><td>Đầu tư kém hiệu quả</td><td>${t('empire', 'Xây dựng đế chế (empire building)')}: thâu tóm, mở rộng để công ty to hơn (thù lao và quyền lực tăng theo quy mô), dự án ưa thích cá nhân</td></tr>
<tr><td>Bám ghế</td><td>${t('entrench', 'Cố thủ vị trí (entrenchment)')}: chống lại thâu tóm có lợi cho cổ đông, chọn chiến lược an toàn để giữ ghế</td></tr>
<tr><td>Tư lợi</td><td>${t('selfdeal', 'Giao dịch tư lợi (self-dealing)')}: đặc quyền quá mức (máy bay riêng, chi tiêu cá nhân), giao dịch với công ty người nhà</td></tr>
<tr><td>Khẩu vị rủi ro lệch</td><td>Ban điều hành có thể quá né rủi ro (sợ mất việc) hoặc quá liều lĩnh (nếu được thưởng nhiều quyền chọn cổ phiếu)</td></tr>
</tbody></table>
<p>HĐQT cũng là agent của cổ đông. Xung đột xảy ra khi thành viên HĐQT thiếu độc lập (có quan hệ với CEO, ngồi chéo HĐQT của nhau), thiếu chuyên môn, hoặc khi CEO kiêm chủ tịch HĐQT. HĐQT cũng có thể ưu ái một nhóm cổ đông hơn nhóm khác.</p>
<h4>b) Cổ đông kiểm soát và cổ đông thiểu số</h4>
<p>${t('controlling', 'Cổ đông kiểm soát (controlling shareholder)')} có đủ phiếu để quyết định thành phần HĐQT và các vấn đề lớn; ${t('minority', 'cổ đông thiểu số (minority shareholder)')} gần như không có tiếng nói. Rủi ro điển hình:</p>
<ul>
<li>${t('rpt', 'Giao dịch với bên liên quan (related-party transaction)')}: công ty mua hàng giá cao của công ty khác do cổ đông kiểm soát sở hữu, chuyển giá trị ra khỏi tay cổ đông thiểu số.</li>
<li>Quyết định thâu tóm, sáp nhập có lợi cho cổ đông kiểm soát.</li>
<li>${t('dualclass', 'Cổ phiếu hai loại (dual-class shares)')}: một loại có nhiều phiếu bầu hơn, giúp nhà sáng lập nắm quyền biểu quyết lớn hơn nhiều so với phần vốn góp.</li>
</ul>
<div class="example"><div class="ex-h">Ví dụ 3.1 - Cổ phiếu hai loại</div>
<p>Công ty có 100 triệu cổ phiếu: nhà sáng lập nắm 20 triệu cổ phiếu loại B (10 phiếu bầu mỗi cổ phiếu), công chúng nắm 80 triệu cổ phiếu loại A (1 phiếu bầu). Nhà sáng lập nắm bao nhiêu phần trăm vốn và quyền biểu quyết?</p>
<details><summary>Xem lời giải</summary><p>Vốn: 20/100 = <b>20%</b>. Phiếu bầu: 20 × 10 = 200 triệu trên tổng 200 + 80 = 280 triệu, tức <b>71,4%</b>. Nhà sáng lập chỉ chịu 20% thiệt hại nếu ra quyết định sai nhưng kiểm soát hơn 70% phiếu bầu.</p></details></div>
<h4>c) Cổ đông và chủ nợ</h4>
<p>Như CF-02: cổ đông thích rủi ro cao hơn, nhiều đòn bẩy hơn và nhiều cổ tức hơn; chủ nợ thì ngược lại. Xung đột lớn hơn với <b>nợ dài hạn</b> vì công ty có nhiều thời gian để thay đổi chiến lược sau khi đã vay.</p>
<h4>d) Các bên liên quan khác</h4>
<ul>
<li><b>Khách hàng</b>: cắt giảm chi phí làm giảm an toàn, chất lượng sản phẩm.</li>
<li><b>Nhà cung cấp</b>: công ty kéo dài thời hạn thanh toán hoặc ép giá.</li>
<li><b>Nhân viên</b>: lương, phúc lợi, an toàn lao động so với lợi nhuận ngắn hạn.</li>
<li><b>Chính phủ</b>: tránh thuế quá mức, lách quy định môi trường.</li>
</ul>`,
    },
    {
      title: '4. Cơ chế quản trị để quản lý quan hệ với các bên liên quan',
      minutes: 28,
      html: `
<h4>a) Cơ chế của cổ đông</h4>
<ul>
<li><b>Báo cáo và minh bạch</b>: báo cáo tài chính, báo cáo thường niên, công bố thông tin giúp giảm bất cân xứng thông tin.</li>
<li><b>Đại hội cổ đông</b>: ${t('agm', 'đại hội thường niên (AGM)')} bầu HĐQT, thông qua báo cáo, phê duyệt kiểm toán viên; ${t('egm', 'đại hội bất thường (EGM)')} cho các vấn đề đặc biệt như sáp nhập, sửa điều lệ. Cổ đông không dự có thể ${t('proxy', 'bỏ phiếu ủy quyền (proxy voting)')}.</li>
<li><b>Cách bầu HĐQT</b>: ${t('straight', 'bầu thẳng (straight voting)')} mỗi cổ phiếu một phiếu cho mỗi ghế, nên ai nắm trên 50% thắng tất cả các ghế; ${t('cumulative', 'bầu dồn phiếu (cumulative voting)')} cho phép dồn toàn bộ phiếu (số cổ phiếu × số ghế) cho một ứng viên, giúp cổ đông thiểu số có đại diện.</li>
</ul>
<div class="example"><div class="ex-h">Ví dụ 4.1 - Bầu dồn phiếu</div>
<p>Công ty có 1.000 cổ phiếu, bầu 5 ghế HĐQT. Một nhóm thiểu số nắm 300 cổ phiếu. Nhóm này chắc chắn bầu được bao nhiêu ghế theo (a) bầu thẳng, (b) bầu dồn phiếu?</p>
<details><summary>Xem lời giải</summary>
<p>(a) Bầu thẳng: mỗi ghế được bầu riêng, nhóm đa số (700 cổ phiếu) thắng cả 5 ghế. Thiểu số được <b>0 ghế</b>.</p>
<p>(b) Bầu dồn phiếu: thiểu số có 300 × 5 = 1.500 phiếu, đa số có 700 × 5 = 3.500 phiếu. Dồn 1.500 phiếu cho một ứng viên: để loại ứng viên này, đa số cần 5 ứng viên đều trên 1.500 phiếu, tức hơn 7.500 phiếu, không thể. Thiểu số chắc chắn được <b>1 ghế</b>.</p>
<p>Quy tắc nhanh: số ghế chắc chắn = phần nguyên của [số cổ phiếu nắm giữ × (số ghế + 1) / tổng số cổ phiếu] = phần nguyên của 300 × 6 / 1.000 = 1,8, tức 1 ghế.</p></details></div>
<ul>
<li>${t('activism', 'Cổ đông chủ động (shareholder activism)')}: quỹ hoặc nhóm cổ đông gây áp lực lên ban điều hành bằng đề xuất nghị quyết, vận động phiếu bầu, công khai vấn đề trên truyền thông.</li>
<li><b>Kiện tụng</b>: cổ đông kiện HĐQT, ban điều hành vì không hành động vì lợi ích công ty (ví dụ ${t('derivative', 'kiện phái sinh (derivative lawsuit)')}: cổ đông kiện thay mặt công ty).</li>
<li><b>Thâu tóm</b> (market for corporate control): mối đe dọa bị thâu tóm buộc ban điều hành làm việc tốt.
  <ul><li>${t('proxyfight', 'Tranh giành ủy quyền (proxy contest)')}: một nhóm vận động cổ đông bầu người của mình vào HĐQT.</li>
  <li>${t('tender', 'Chào mua công khai (tender offer)')}: đề nghị mua cổ phiếu trực tiếp từ cổ đông, thường ở giá cao hơn thị trường.</li>
  <li>${t('hostile', 'Thâu tóm thù địch (hostile takeover)')}: mua lại công ty khi ban điều hành không đồng ý.</li></ul></li>
</ul>
<p class="warn"><b>Biện pháp chống thâu tóm</b> như ${t('staggered', 'HĐQT bầu so le (staggered board)')} hay "viên thuốc độc" (poison pill) bảo vệ công ty khỏi người mua trả giá thấp, nhưng cũng có thể giúp ban điều hành <b>cố thủ</b>. Nhà phân tích thường coi chúng là dấu hiệu cần xem xét kỹ.</p>
<h4>b) Cơ chế của chủ nợ</h4>
<ul>
<li>${t('indenture', 'Hợp đồng phát hành trái phiếu (bond indenture)')}: quy định quyền của trái chủ và nghĩa vụ của công ty.</li>
<li>${t('covenant', 'Covenant')}: <b>khẳng định</b> (affirmative, buộc công ty làm, ví dụ duy trì bảo hiểm, nộp báo cáo) và <b>hạn chế</b> (negative, cấm công ty làm, ví dụ vay thêm vượt mức, chia cổ tức quá tỷ lệ, bán tài sản chính).</li>
<li>${t('collateral', 'Tài sản bảo đảm (collateral)')}: tài sản cụ thể chủ nợ có quyền đòi khi công ty vỡ nợ.</li>
<li><b>Ủy ban chủ nợ</b>: ${t('adhoc', 'ủy ban ad hoc')} do trái chủ lập ra để đàm phán tái cấu trúc khi công ty khó khăn; ${t('credcomm', 'ủy ban chủ nợ (creditor committee)')} đại diện chủ nợ trong thủ tục phá sản.</li>
</ul>
<h4>c) Cơ chế của HĐQT và ban điều hành</h4>
<p>HĐQT có nhiều thành viên ${t('independent', 'độc lập (independent director)')} thì giám sát hiệu quả hơn. Phần lớn công việc thực hiện qua các ủy ban:</p>
<table class="plain"><thead><tr><th>Ủy ban</th><th>Nhiệm vụ chính</th></tr></thead><tbody>
<tr><td>${t('audit', 'Ủy ban kiểm toán (audit committee)')}</td><td>Giám sát báo cáo tài chính, kiểm soát nội bộ, kiểm toán nội bộ và chọn kiểm toán độc lập</td></tr>
<tr><td>Ủy ban quản trị (governance)</td><td>Xây dựng và giám sát chính sách quản trị, quy tắc đạo đức, xung đột lợi ích</td></tr>
<tr><td>Ủy ban nhân sự (nomination)</td><td>Tìm và đề cử ứng viên HĐQT, kế hoạch kế nhiệm</td></tr>
<tr><td>${t('remcomm', 'Ủy ban lương thưởng (remuneration / compensation)')}</td><td>Thiết kế thù lao của HĐQT và lãnh đạo, gắn thưởng với lợi ích cổ đông dài hạn</td></tr>
<tr><td>Ủy ban khác</td><td>Rủi ro (ngân hàng, bảo hiểm), đầu tư, an toàn... tùy ngành</td></tr>
</tbody></table>
<p>Ủy ban kiểm toán và lương thưởng thường yêu cầu <b>toàn bộ hoặc đa số thành viên độc lập</b>. Thù lao tốt thường kết hợp lương, thưởng theo kết quả và cổ phiếu thưởng có thời hạn khóa, kèm điều khoản thu hồi (clawback) nếu kết quả bị điều chỉnh. Nhiều nước cho cổ đông biểu quyết về thù lao (say on pay).</p>
<h4>d) Cơ chế của nhân viên, khách hàng, nhà cung cấp</h4>
<ul>
<li><b>Nhân viên</b>: luật lao động, công đoàn, hợp đồng lao động, ${t('esop', 'chương trình cổ phiếu cho nhân viên (ESOP)')} để gắn lợi ích nhân viên với công ty.</li>
<li><b>Khách hàng, nhà cung cấp</b>: hợp đồng quy định điều khoản thương mại và cách giải quyết tranh chấp; mạng xã hội là kênh gây áp lực và định hình dư luận.</li>
</ul>
<h4>e) Cơ chế của Nhà nước</h4>
<ul>
<li><b>Luật và quy định</b>: bảo vệ quyền tài sản, hợp đồng, người tiêu dùng, môi trường; quy định ngành (ngân hàng, bảo hiểm).</li>
<li>${t('code', 'Bộ quy tắc quản trị công ty (corporate governance code)')}: áp dụng cho công ty niêm yết theo nguyên tắc ${t('comply', 'tuân thủ hoặc giải thích (comply or explain)')}: công ty không áp dụng một khuyến nghị thì phải công bố lý do. Ví dụ: công ty Nhật không có thành viên HĐQT độc lập phải giải thích vì sao.</li>
</ul>`,
    },
    {
      title: '5. Rủi ro của quản trị kém và lợi ích của quản trị tốt',
      minutes: 10,
      html: `
<table class="plain"><thead><tr><th>Quản trị kém dẫn đến</th><th>Quản trị tốt mang lại</th></tr></thead><tbody>
<tr><td>Kiểm soát nội bộ yếu: gian lận, sai sót báo cáo, tham ô</td><td>Kiểm soát và giám sát tốt hơn, báo cáo đáng tin cậy</td></tr>
<tr><td>Ra quyết định kém: ban điều hành cố thủ, đầu tư vì lợi ích cá nhân</td><td>Ra quyết định tốt hơn, hiệu quả hoạt động cao hơn</td></tr>
<tr><td>Rủi ro pháp lý, quy định và uy tín: bị phạt, kiện, mất khách hàng</td><td>Giảm rủi ro pháp lý, quy định, uy tín</td></tr>
<tr><td>Rủi ro vỡ nợ và phá sản cao hơn; chi phí vốn tăng</td><td>Rủi ro vỡ nợ thấp hơn, chi phí nợ và chi phí vốn thấp hơn</td></tr>
<tr><td>Lợi ích các bên lệch nhau, mất lợi thế cạnh tranh, giá trị giảm</td><td>Lợi ích các bên đồng thuận hơn, kết quả tài chính và định giá tốt hơn</td></tr>
</tbody></table>
<div class="example"><div class="ex-h">Ví dụ 5.1</div>
<p>Một công ty có CEO kiêm chủ tịch HĐQT, chỉ 1 trong 9 thành viên HĐQT độc lập, ủy ban kiểm toán do giám đốc tài chính đứng đầu, và thường xuyên mua nguyên liệu từ công ty của em trai CEO. Nêu các rủi ro chính.</p>
<details><summary>Xem lời giải</summary><p>HĐQT thiếu độc lập nên giám sát yếu; ủy ban kiểm toán không độc lập làm tăng rủi ro báo cáo sai; giao dịch với bên liên quan có thể chuyển giá trị khỏi cổ đông thiểu số. Hệ quả: rủi ro gian lận, rủi ro pháp lý và uy tín, nhà đầu tư đòi lợi suất cao hơn, định giá thấp hơn.</p></details></div>
<p class="tip"><b>Góc nhìn nhà phân tích:</b> quản trị là phần "G" trong ESG (CF-02). Khi phân tích, hãy xem tính độc lập của HĐQT, cơ cấu sở hữu và quyền biểu quyết, thiết kế thù lao, giao dịch bên liên quan, chất lượng kiểm toán và lịch sử đối xử với cổ đông thiểu số.</p>`,
    },
    {
      title: '6. Tóm tắt và bẫy thường gặp',
      minutes: 5,
      html: `
<table class="plain"><thead><tr><th>Tình huống</th><th>Nhớ</th></tr></thead><tbody>
<tr><td>Principal - agent</td><td>Cổ đông → HĐQT → ban điều hành; xung đột do lợi ích lệch và bất cân xứng thông tin</td></tr>
<tr><td>Chi phí đại diện</td><td>Trực tiếp (kiểm toán, giám sát) và gián tiếp (cơ hội bị bỏ lỡ, quyết định kém)</td></tr>
<tr><td>Empire building</td><td>Đầu tư kém hiệu quả để công ty to hơn</td></tr>
<tr><td>Cổ đông kiểm soát</td><td>Giao dịch bên liên quan, cổ phiếu hai loại gây hại cổ đông thiểu số</td></tr>
<tr><td>Bầu dồn phiếu</td><td>Phiếu = cổ phiếu × số ghế; giúp thiểu số có ghế</td></tr>
<tr><td>Proxy contest và tender offer</td><td>Vận động phiếu bầu và đề nghị mua trực tiếp cổ phiếu</td></tr>
<tr><td>Ủy ban ad hoc và ủy ban chủ nợ</td><td>Đàm phán tái cấu trúc và đại diện trong phá sản</td></tr>
<tr><td>Ủy ban kiểm toán</td><td>Báo cáo tài chính, kiểm soát nội bộ, kiểm toán viên; cần độc lập</td></tr>
<tr><td>Comply or explain</td><td>Bộ quy tắc quản trị: không áp dụng thì phải giải thích</td></tr>
<tr><td>Quản trị tốt</td><td>Giảm rủi ro, chi phí vốn thấp hơn, định giá cao hơn</td></tr>
</tbody></table>
<p>Tiếp theo: tab <b>Luyện tập</b> 10 câu (rút ngẫu nhiên từ ngân hàng 30 câu, mỗi lần làm một bộ khác). CF-04 chuyển sang quản lý vốn lưu động và thanh khoản, có tính toán.</p>`,
    },
  ];

  const glossary = {
    cg: ['Corporate governance', 'Quản trị công ty', 'Hệ thống nguyên tắc, quy trình, cơ chế điều hành và kiểm soát công ty, giảm xung đột giữa các bên liên quan.'],
    pa: ['Principal-agent relationship', 'Quan hệ ủy quyền - đại diện', 'Một bên thuê bên khác ra quyết định thay mình.'],
    principal: ['Principal', 'Người ủy quyền', 'Bên giao việc và quyền quyết định, ví dụ cổ đông.'],
    agent: ['Agent', 'Người đại diện', 'Bên được thuê để hành động vì lợi ích của principal, ví dụ ban điều hành.'],
    asym: ['Information asymmetry', 'Bất cân xứng thông tin', 'Một bên (ban điều hành) có nhiều thông tin hơn bên kia (cổ đông), làm việc giám sát khó khăn.'],
    agencycost: ['Agency costs', 'Chi phí đại diện', 'Chi phí trực tiếp để giám sát agent và giá trị mất đi do quyết định không tối ưu của agent.'],
    empire: ['Empire building', 'Xây dựng đế chế', 'Ban điều hành mở rộng quy mô công ty (thâu tóm, dự án lớn) vì lợi ích cá nhân, dù không tạo giá trị.'],
    entrench: ['Entrenchment', 'Cố thủ vị trí', 'Ban điều hành hành động để giữ ghế, chống lại thay đổi có lợi cho cổ đông.'],
    selfdeal: ['Self-dealing', 'Giao dịch tư lợi', 'Người điều hành dùng tài sản hay quyền lực của công ty cho lợi ích riêng.'],
    controlling: ['Controlling shareholder', 'Cổ đông kiểm soát', 'Cổ đông có đủ phiếu bầu để quyết định HĐQT và các vấn đề quan trọng.'],
    minority: ['Minority shareholder', 'Cổ đông thiểu số', 'Cổ đông có tỷ lệ sở hữu nhỏ, ít ảnh hưởng đến quyết định của công ty.'],
    rpt: ['Related-party transaction', 'Giao dịch với bên liên quan', 'Giao dịch giữa công ty và người có quan hệ với người nội bộ hay cổ đông kiểm soát.'],
    dualclass: ['Dual-class shares', 'Cổ phiếu hai loại', 'Hai loại cổ phiếu có số phiếu bầu khác nhau; giúp một nhóm kiểm soát vượt phần vốn góp.'],
    agm: ['Annual general meeting (AGM)', 'Đại hội cổ đông thường niên', 'Họp hằng năm để bầu HĐQT, thông qua báo cáo, kiểm toán viên và các vấn đề thường kỳ.'],
    egm: ['Extraordinary general meeting (EGM)', 'Đại hội cổ đông bất thường', 'Họp riêng để quyết định vấn đề đặc biệt như sáp nhập, sửa điều lệ.'],
    proxy: ['Proxy voting', 'Bỏ phiếu ủy quyền', 'Cổ đông ủy quyền cho người khác bỏ phiếu thay mình.'],
    straight: ['Straight voting', 'Bầu thẳng', 'Mỗi cổ phiếu một phiếu cho từng ghế; cổ đông trên 50% thắng mọi ghế.'],
    cumulative: ['Cumulative voting', 'Bầu dồn phiếu', 'Tổng phiếu = số cổ phiếu × số ghế, được dồn cho một hay vài ứng viên; giúp thiểu số có đại diện.'],
    activism: ['Shareholder activism', 'Cổ đông chủ động', 'Cổ đông gây áp lực lên ban điều hành để thay đổi chiến lược, quản trị nhằm tăng giá trị.'],
    derivative: ['Derivative lawsuit', 'Kiện phái sinh', 'Cổ đông khởi kiện thay mặt công ty, thường nhằm vào HĐQT hoặc ban điều hành.'],
    proxyfight: ['Proxy contest', 'Tranh giành ủy quyền', 'Một nhóm vận động cổ đông bầu người của mình vào HĐQT để giành quyền kiểm soát.'],
    tender: ['Tender offer', 'Chào mua công khai', 'Đề nghị mua cổ phiếu trực tiếp từ cổ đông, thường ở giá cao hơn thị trường.'],
    hostile: ['Hostile takeover', 'Thâu tóm thù địch', 'Mua lại công ty khi ban điều hành không đồng ý.'],
    staggered: ['Staggered board', 'HĐQT bầu so le', 'Mỗi năm chỉ bầu lại một phần HĐQT, làm chậm việc giành quyền kiểm soát.'],
    indenture: ['Bond indenture', 'Hợp đồng phát hành trái phiếu', 'Văn bản pháp lý quy định điều khoản trái phiếu, quyền của trái chủ, nghĩa vụ của công ty.'],
    covenant: ['Covenant', 'Điều khoản ràng buộc', 'Điều khoản buộc công ty làm (affirmative) hoặc cấm công ty làm (negative) một số việc.'],
    collateral: ['Collateral', 'Tài sản bảo đảm', 'Tài sản cụ thể chủ nợ được quyền đòi nếu công ty vỡ nợ.'],
    adhoc: ['Ad hoc committee', 'Ủy ban ad hoc', 'Nhóm trái chủ lập ra để đàm phán tái cấu trúc nợ với công ty.'],
    credcomm: ['Creditor committee', 'Ủy ban chủ nợ', 'Đại diện cho chủ nợ trong thủ tục phá sản.'],
    independent: ['Independent director', 'Thành viên HĐQT độc lập', 'Không có quan hệ trọng yếu với công ty, ban điều hành hay cổ đông lớn.'],
    audit: ['Audit committee', 'Ủy ban kiểm toán', 'Giám sát báo cáo tài chính, kiểm soát nội bộ, kiểm toán nội bộ và kiểm toán độc lập.'],
    remcomm: ['Remuneration / compensation committee', 'Ủy ban lương thưởng', 'Thiết kế thù lao HĐQT và lãnh đạo, gắn với lợi ích cổ đông.'],
    esop: ['Employee stock ownership plan (ESOP)', 'Chương trình cổ phiếu cho nhân viên', 'Cho nhân viên sở hữu cổ phiếu công ty để gắn lợi ích với công ty.'],
    code: ['Corporate governance code', 'Bộ quy tắc quản trị công ty', 'Bộ khuyến nghị về quản trị cho công ty niêm yết.'],
    comply: ['Comply or explain', 'Tuân thủ hoặc giải thích', 'Công ty phải áp dụng khuyến nghị hoặc công bố lý do không áp dụng.'],
  };

  const practice = [
    { q: 'Khoản nào là chi phí đại diện TRỰC TIẾP?', choices: ['Phí thuê kiểm toán độc lập để kiểm toán báo cáo tài chính', 'Lợi nhuận bị mất do ban điều hành bỏ qua một dự án có NPV dương', 'Giá cổ phiếu giảm sau một thương vụ thâu tóm kém hiệu quả'], answer: 0, explain: 'Chi phí trực tiếp là tiền chi ra để giám sát agent. Lợi nhuận mất do bỏ qua dự án NPV dương và giá cổ phiếu giảm sau thương vụ thâu tóm kém là chi phí gián tiếp: giá trị mất đi do quyết định không tối ưu.' },
    { q: 'CEO liên tục thâu tóm các công ty khác ngành với giá cao, làm doanh thu tăng nhưng ROE giảm. Thù lao CEO gắn với quy mô doanh thu. Đây là ví dụ về:', choices: ['Xung đột giữa cổ đông và chủ nợ', 'Xây dựng đế chế (empire building)', 'Bầu dồn phiếu'], answer: 1, explain: 'Ban điều hành đầu tư kém hiệu quả để công ty to hơn vì lợi ích cá nhân: xung đột cổ đông - ban điều hành dạng empire building. Không liên quan trực tiếp đến chủ nợ hay cách bầu HĐQT.' },
    { q: 'Công ty có 100 triệu cổ phiếu. Nhà sáng lập nắm 20 triệu cổ phiếu loại B (10 phiếu mỗi cổ phiếu), còn lại là loại A (1 phiếu). Tỷ lệ quyền biểu quyết của nhà sáng lập gần nhất với:', choices: ['20,0%', '28,6%', '71,4%'], answer: 2, explain: 'Phiếu của nhà sáng lập = 200 triệu; tổng phiếu = 200 + 80 = 280 triệu; tỷ lệ = 71,4%. Lựa chọn 20,0% là tỷ lệ vốn. Lựa chọn 28,6% là tỷ lệ phiếu của cổ đông loại A.' },
    { q: 'Công ty có 1.000 cổ phiếu, bầu 5 ghế HĐQT theo cách bầu dồn phiếu. Một cổ đông nắm 400 cổ phiếu chắc chắn bầu được tối đa bao nhiêu ghế?', choices: ['0', '2', '3'], answer: 1, explain: 'Số ghế chắc chắn = phần nguyên của 400 x 6 / 1.000 = 2,4, tức 2 ghế. Lựa chọn 0 là kết quả của bầu thẳng. Lựa chọn 3 làm tròn lên 2,4 hoặc nghĩ 40% của 5 ghế làm tròn lên.' },
    { q: 'Công ty mua nguyên liệu với giá cao hơn thị trường 20% từ một công ty do cổ đông kiểm soát sở hữu. Nhóm chịu thiệt chủ yếu là:', choices: ['Cổ đông thiểu số', 'Cổ đông kiểm soát', 'Nhà cung cấp'], answer: 0, explain: 'Giao dịch bên liên quan chuyển giá trị từ công ty (thuộc mọi cổ đông) sang công ty riêng của cổ đông kiểm soát. Cổ đông kiểm soát được lợi ròng vì nhận toàn bộ phần chênh lệch ở công ty riêng nhưng chỉ chịu một phần thiệt hại ở công ty niêm yết. Nhà cung cấp ở đây chính là công ty của cổ đông kiểm soát nên được lợi.' },
    { q: 'Một nhóm nhà đầu tư đề nghị mua cổ phiếu trực tiếp từ cổ đông với giá cao hơn thị trường 30% để giành quyền kiểm soát. Đây là:', choices: ['Proxy contest', 'Tender offer', 'Derivative lawsuit'], answer: 1, explain: 'Tender offer là đề nghị mua trực tiếp cổ phiếu từ cổ đông. Proxy contest là vận động cổ đông bầu người của nhóm vào HĐQT. Derivative lawsuit là cổ đông kiện thay mặt công ty.' },
    { q: 'Khi công ty đã nộp đơn phá sản, chủ nợ thường được đại diện bởi:', choices: ['Ủy ban kiểm toán', 'Ủy ban ad hoc', 'Ủy ban chủ nợ (creditor committee)'], answer: 2, explain: 'Creditor committee đại diện chủ nợ trong thủ tục phá sản. Ủy ban ad hoc do trái chủ lập để đàm phán tái cấu trúc, thường trước hoặc ngoài thủ tục phá sản. Ủy ban kiểm toán là ủy ban của HĐQT.' },
    { q: 'Nhiệm vụ nào thuộc về ủy ban kiểm toán của HĐQT?', choices: ['Giám sát kiểm soát nội bộ và đề xuất chọn kiểm toán viên độc lập', 'Thiết kế gói thưởng cổ phiếu cho CEO', 'Tìm ứng viên cho HĐQT nhiệm kỳ mới'], answer: 0, explain: 'Ủy ban kiểm toán giám sát báo cáo tài chính, kiểm soát nội bộ và kiểm toán. Thiết kế gói thưởng cổ phiếu cho CEO là việc của ủy ban lương thưởng, tìm ứng viên HĐQT là việc của ủy ban nhân sự (nomination).' },
    { q: 'Bộ quy tắc quản trị công ty yêu cầu công ty niêm yết không áp dụng một khuyến nghị phải công bố lý do. Đây là:', choices: ['Cơ chế của chủ nợ thông qua covenant', 'Biện pháp chống thâu tóm', 'Nguyên tắc tuân thủ hoặc giải thích (comply or explain)'], answer: 2, explain: 'Comply or explain là cách tiếp cận của các bộ quy tắc quản trị, một cơ chế của Nhà nước / cơ quan quản lý. Covenant là điều khoản trong hợp đồng vay; biện pháp chống thâu tóm như staggered board, poison pill.' },
    { q: 'Lợi ích nào thường gắn với quản trị công ty hiệu quả?', choices: ['Chi phí nợ cao hơn do công bố nhiều thông tin hơn', 'Rủi ro vỡ nợ thấp hơn và chi phí vốn thấp hơn', 'Loại bỏ hoàn toàn xung đột giữa các bên liên quan'], answer: 1, explain: 'Quản trị tốt giảm rủi ro, giúp chi phí nợ và chi phí vốn thấp hơn. Phương án "chi phí nợ cao hơn" ngược chiều. Phương án "loại bỏ hoàn toàn xung đột" sai: quản trị tốt giảm và quản lý xung đột, không xóa bỏ được.' },
    { q: "Ngoài việc lợi ích của ban điều hành không trùng với cổ đông, yếu tố nào khiến vấn đề ủy quyền - đại diện trong công ty khó kiểm soát?", choices: ["Cổ đông chịu trách nhiệm vô hạn với nợ của công ty", "Bất cân xứng thông tin: ban điều hành biết về công ty nhiều hơn hẳn cổ đông", "Chủ nợ có quyền biểu quyết bầu HĐQT"], answer: 1, explain: "Vấn đề đại diện nảy sinh khi lợi ích lệch nhau và bất cân xứng thông tin cùng tồn tại, khiến cổ đông khó giám sát ban điều hành. Lựa chọn \"cổ đông chịu trách nhiệm vô hạn\" sai vì cổ đông công ty có trách nhiệm hữu hạn. Lựa chọn \"chủ nợ có quyền biểu quyết\" sai vì chủ nợ không bầu HĐQT." },
    { q: "Trong năm, một công ty phát sinh: phí kiểm toán độc lập 2,0 triệu USD; thù lao thành viên HĐQT độc lập 1,5 triệu USD; giá trị bị bỏ lỡ do CEO từ chối một dự án có NPV dương ước tính 6,0 triệu USD; giá trị bị mất do một thương vụ thâu tóm phục vụ xây dựng đế chế ước tính 10,0 triệu USD. Tổng chi phí đại diện TRỰC TIẾP gần nhất với:", choices: ["19,5 triệu USD", "16,0 triệu USD", "3,5 triệu USD"], answer: 2, explain: "Chi phí trực tiếp là tiền chi ra để giám sát agent: 2,0 + 1,5 = 3,5 triệu USD. Lựa chọn 16,0 triệu USD là chi phí gián tiếp (giá trị mất do quyết định kém: 6,0 + 10,0). Lựa chọn 19,5 triệu USD cộng cả chi phí trực tiếp và gián tiếp." },
    { q: "Một đối thủ đưa ra đề nghị mua lại công ty với giá cao hơn thị trường 40%. Ban điều hành vận động HĐQT từ chối vì lo mất ghế sau thương vụ. Hành vi này là:", choices: ["Cố thủ vị trí (entrenchment)", "Xây dựng đế chế (empire building)", "Cổ đông chủ động (shareholder activism)"], answer: 0, explain: "Cố thủ là việc ban điều hành chống lại thâu tóm có lợi cho cổ đông để giữ vị trí của mình. Empire building là mở rộng, thâu tóm để công ty to hơn, ngược với việc từ chối bị mua. Shareholder activism là hành động của cổ đông gây áp lực lên ban điều hành, không phải hành vi của ban điều hành." },
    { q: "CEO dùng máy bay của công ty cho các chuyến du lịch gia đình và ký hợp đồng thuê văn phòng với công ty do vợ mình sở hữu với giá cao hơn thị trường. Dạng xung đột này là:", choices: ["Thiếu nỗ lực", "Giao dịch tư lợi (self-dealing)", "Xung đột giữa cổ đông và chủ nợ"], answer: 1, explain: "Đặc quyền quá mức và giao dịch với công ty của người nhà là giao dịch tư lợi, chuyển giá trị từ cổ đông sang người quản lý. Thiếu nỗ lực là không làm hết sức, không phải lấy lợi ích riêng. Xung đột cổ đông - chủ nợ liên quan đến rủi ro, đòn bẩy và cổ tức, không phải đặc quyền cá nhân của CEO." },
    { q: "Thù lao của CEO chủ yếu là quyền chọn mua cổ phiếu có giá thực hiện cao hơn giá hiện tại. Rủi ro đại diện nào có khả năng xảy ra nhất?", choices: ["Ban điều hành quá né rủi ro vì sợ mất việc", "Ban điều hành bị trói buộc bởi covenant của chủ nợ", "Ban điều hành chấp nhận rủi ro quá mức vì phần thưởng tăng mạnh khi giá cổ phiếu tăng nhưng không bị phạt khi giá giảm"], answer: 2, explain: "Quyền chọn có lãi không giới hạn và lỗ bị chặn, nên người nắm quyền chọn có động cơ tăng rủi ro. Lựa chọn \"quá né rủi ro\" xảy ra khi thù lao chủ yếu là lương cố định và lo mất việc. Lựa chọn \"bị trói buộc bởi covenant\" không phải là hệ quả của cơ cấu thù lao." },
    { q: "Đặc điểm nào của HĐQT làm tăng rủi ro xung đột giữa HĐQT và cổ đông?", choices: ["CEO kiêm chủ tịch HĐQT và nhiều thành viên ngồi chéo HĐQT của nhau", "Đa số thành viên HĐQT độc lập, có chuyên môn phù hợp", "Ủy ban kiểm toán gồm toàn thành viên độc lập"], answer: 0, explain: "Khi CEO kiêm chủ tịch và thành viên ngồi chéo HĐQT, HĐQT thiếu độc lập nên khó giám sát ban điều hành. Hai lựa chọn còn lại là đặc điểm của quản trị tốt, giúp giảm xung đột." },
    { q: "Công ty có 150 triệu cổ phiếu. Nhà sáng lập nắm 15 triệu cổ phiếu loại B, mỗi cổ phiếu 20 phiếu bầu; 135 triệu cổ phiếu loại A còn lại do công chúng nắm, mỗi cổ phiếu 1 phiếu bầu. Tỷ lệ quyền biểu quyết của nhà sáng lập gần nhất với:", choices: ["10,0%", "69,0%", "66,7%"], answer: 1, explain: "Phiếu của nhà sáng lập = 15 x 20 = 300 triệu; tổng phiếu = 300 + 135 = 435 triệu; tỷ lệ = 69,0%. Lựa chọn 10,0% là tỷ lệ vốn góp, không phải quyền biểu quyết. Lựa chọn 66,7% cộng 300 với toàn bộ 150 triệu cổ phiếu, đếm trùng cổ phiếu của nhà sáng lập." },
    { q: "Xung đột giữa cổ đông và chủ nợ thường lớn hơn khi:", choices: ["Khoản nợ có kỳ hạn ngắn và được đảo nợ thường xuyên", "Công ty gần như không có nợ", "Khoản nợ có kỳ hạn dài, vì công ty có nhiều thời gian thay đổi chiến lược sau khi đã vay"], answer: 2, explain: "Với nợ dài hạn, sau khi đã vay công ty có nhiều thời gian để tăng rủi ro, vay thêm hay chia cổ tức lớn gây thiệt cho chủ nợ. Nợ ngắn hạn buộc công ty thường xuyên thương lượng lại, chủ nợ có thể từ chối gia hạn, nên xung đột nhỏ hơn. Khi gần như không có nợ thì không có nhiều giá trị để chuyển từ chủ nợ sang cổ đông." },
    { q: "Công ty có 1.000 cổ phiếu và bầu 4 ghế HĐQT theo cách bầu dồn phiếu (cumulative voting). Một nhóm cổ đông nắm 450 cổ phiếu chắc chắn bầu được bao nhiêu ghế?", choices: ["0", "1", "2"], answer: 2, explain: "Số ghế chắc chắn = phần nguyên của [450 x (4 + 1)/1.000] = phần nguyên của 2,25 = 2. Kiểm tra: nhóm có 1.800 phiếu, dồn 900 cho mỗi ứng viên; đa số có 2.200 phiếu, không thể có 3 ứng viên cùng trên 900. Lựa chọn 0 là kết quả nếu bầu thẳng. Lựa chọn 1 lấy phần nguyên của 450 x 4/1.000 = 1,8, dùng sai mẫu số." },
    { q: "Công ty có 2.000 cổ phiếu và bầu 5 ghế HĐQT theo cách bầu dồn phiếu. Số cổ phiếu tối thiểu một cổ đông cần nắm để chắc chắn bầu được 1 ghế gần nhất với:", choices: ["334", "401", "1.001"], answer: 0, explain: "Cần nắm nhiều hơn 2.000/(5 + 1) = 333,33 cổ phiếu, tức 334 cổ phiếu. Kiểm tra: 334 x 5 = 1.670 phiếu; phần còn lại 1.666 x 5 = 8.330 phiếu, không đủ để 5 ứng viên khác cùng vượt 1.670 (cần hơn 8.350). Lựa chọn 401 dùng 2.000/5 + 1, quên cộng 1 vào số ghế. Lựa chọn 1.001 là số cần để nắm đa số, đúng với bầu thẳng chứ không phải bầu dồn phiếu." },
    { q: "Công ty muốn sáp nhập với một đối thủ và cần cổ đông phê duyệt ngay, không chờ đến đại hội thường niên. Cổ đông không thể đến dự vẫn có thể biểu quyết. Cơ chế nào được mô tả?", choices: ["Đại hội cổ đông bất thường (EGM) và bỏ phiếu ủy quyền (proxy voting)", "Đại hội cổ đông thường niên (AGM) và bầu dồn phiếu", "Chào mua công khai (tender offer) và kiện phái sinh"], answer: 0, explain: "EGM được triệu tập cho các vấn đề đặc biệt như sáp nhập, sửa điều lệ; cổ đông vắng mặt bỏ phiếu ủy quyền. AGM là đại hội định kỳ hằng năm, và bầu dồn phiếu chỉ là cách bầu HĐQT. Tender offer và kiện phái sinh là công cụ thâu tóm và kiện tụng, không phải cách phê duyệt nghị quyết." },
    { q: "Một nhóm cổ đông kiện các thành viên HĐQT thay mặt công ty vì HĐQT phê duyệt một thương vụ gây thiệt hại cho công ty. Đây là:", choices: ["Proxy contest", "Kiện phái sinh (derivative lawsuit)", "Tender offer"], answer: 1, explain: "Kiện phái sinh là cổ đông kiện thay mặt công ty, thường nhắm vào HĐQT hoặc ban điều hành không hành động vì lợi ích công ty. Proxy contest là vận động cổ đông bầu người của mình vào HĐQT. Tender offer là đề nghị mua cổ phiếu trực tiếp từ cổ đông." },
    { q: "Nhận định nào về các biện pháp chống thâu tóm như HĐQT bầu so le (staggered board) hay \"viên thuốc độc\" (poison pill) là chính xác nhất?", choices: ["Chúng luôn làm tăng giá trị cho cổ đông", "Chúng là cơ chế bảo vệ chủ nợ trong hợp đồng phát hành trái phiếu", "Chúng có thể bảo vệ công ty khỏi người mua trả giá thấp nhưng cũng giúp ban điều hành cố thủ, nên nhà phân tích cần xem xét kỹ"], answer: 2, explain: "Biện pháp chống thâu tóm có hai mặt: chống người mua trả giá thấp nhưng làm yếu cơ chế thị trường kiểm soát công ty và giúp ban điều hành cố thủ. Lựa chọn \"luôn làm tăng giá trị\" bỏ qua mặt trái. Lựa chọn \"bảo vệ chủ nợ trong hợp đồng trái phiếu\" nhầm với covenant." },
    { q: "Điều khoản nào trong hợp đồng vay là covenant hạn chế (negative covenant)?", choices: ["Công ty phải nộp báo cáo tài chính đã kiểm toán cho chủ nợ trong vòng 90 ngày sau cuối năm", "Công ty không được chia cổ tức vượt quá 40% lợi nhuận ròng", "Công ty phải duy trì bảo hiểm đầy đủ cho nhà máy"], answer: 1, explain: "Covenant hạn chế cấm công ty làm một điều, như chia cổ tức quá tỷ lệ, vay thêm vượt mức, bán tài sản chính. Nộp báo cáo tài chính và duy trì bảo hiểm là covenant khẳng định (affirmative), buộc công ty phải làm." },
    { q: "Ủy ban lương thưởng muốn gắn thù lao CEO với lợi ích dài hạn của cổ đông và có thể thu hồi tiền thưởng nếu lợi nhuận đã công bố bị điều chỉnh giảm. Thiết kế phù hợp nhất là:", choices: ["Lương cố định cao, không có thưởng theo kết quả", "Thưởng tiền mặt hằng quý dựa trên doanh thu", "Kết hợp lương, thưởng theo kết quả và cổ phiếu thưởng có thời hạn khóa, kèm điều khoản thu hồi (clawback)"], answer: 2, explain: "Cổ phiếu có thời hạn khóa gắn CEO với giá trị dài hạn, còn clawback cho phép thu hồi thưởng khi kết quả bị điều chỉnh. Lương cố định cao không tạo động lực gắn với kết quả. Thưởng hằng quý theo doanh thu khuyến khích tăng quy mô ngắn hạn, có thể dẫn đến xây dựng đế chế." },
    { q: "Cơ chế nào giúp gắn lợi ích của nhân viên với lợi ích của công ty và cổ đông?", choices: ["Chương trình cổ phiếu cho nhân viên (ESOP)", "Bầu dồn phiếu tại đại hội cổ đông", "Covenant hạn chế trong hợp đồng vay"], answer: 0, explain: "ESOP cho nhân viên sở hữu cổ phiếu, nên họ hưởng lợi khi công ty tạo giá trị. Bầu dồn phiếu là cơ chế giúp cổ đông thiểu số có ghế HĐQT. Covenant hạn chế là công cụ bảo vệ chủ nợ." },
    { q: "Một quỹ đầu tư nắm 8% cổ phần không hài lòng với kết quả kinh doanh. Quỹ vận động các cổ đông khác ủy quyền biểu quyết để bầu ba ứng viên của quỹ vào HĐQT tại đại hội sắp tới. Đây là:", choices: ["Tender offer", "Proxy contest", "Thâu tóm thù địch bằng cách mua toàn bộ cổ phiếu"], answer: 1, explain: "Proxy contest là vận động phiếu ủy quyền của cổ đông để bầu người của mình vào HĐQT, không cần mua thêm cổ phiếu. Tender offer là đề nghị mua cổ phiếu trực tiếp từ cổ đông. Thâu tóm thù địch đòi hỏi mua lại công ty khi ban điều hành không đồng ý, ở đây quỹ không mua thêm cổ phiếu." },
    { q: "Ủy ban nào của HĐQT chịu trách nhiệm tìm và đề cử ứng viên HĐQT cũng như xây dựng kế hoạch kế nhiệm?", choices: ["Ủy ban kiểm toán", "Ủy ban lương thưởng", "Ủy ban nhân sự (nomination committee)"], answer: 2, explain: "Ủy ban nhân sự tìm, đề cử ứng viên HĐQT và lập kế hoạch kế nhiệm. Ủy ban kiểm toán giám sát báo cáo tài chính, kiểm soát nội bộ và kiểm toán viên. Ủy ban lương thưởng thiết kế thù lao cho HĐQT và lãnh đạo." },
    { q: "Một công ty có kiểm soát nội bộ yếu và ủy ban kiểm toán do giám đốc tài chính đứng đầu. Rủi ro nào có khả năng tăng nhất?", choices: ["Gian lận, sai sót trong báo cáo tài chính và rủi ro pháp lý", "Rủi ro vật lý do thời tiết cực đoan", "Cổ đông thiểu số bầu được quá nhiều ghế HĐQT"], answer: 0, explain: "Kiểm soát nội bộ yếu và ủy ban kiểm toán không độc lập làm tăng rủi ro gian lận, báo cáo sai, kéo theo rủi ro pháp lý, uy tín. Rủi ro vật lý là yếu tố môi trường, không liên quan đến quản trị. Cơ cấu này không làm cổ đông thiểu số có thêm ghế." },
    { q: "Hai công ty giống nhau về hoạt động kinh doanh. Công ty X có HĐQT đa số độc lập, công bố thông tin minh bạch và không có giao dịch bên liên quan đáng kể; công ty Y thì ngược lại. So với Y, X nhiều khả năng có:", choices: ["Chi phí vốn cao hơn vì tốn chi phí giám sát", "Chi phí vốn thấp hơn và định giá cao hơn", "Rủi ro vỡ nợ cao hơn vì thông tin công khai giúp đối thủ"], answer: 1, explain: "Quản trị tốt giảm rủi ro gian lận, pháp lý và vỡ nợ, nên nhà đầu tư đòi lợi suất thấp hơn, chi phí vốn thấp hơn, định giá cao hơn. Lựa chọn \"chi phí vốn cao hơn vì tốn chi phí giám sát\" bỏ qua lợi ích lớn hơn từ rủi ro giảm. Lựa chọn \"rủi ro vỡ nợ cao hơn\" đi ngược bằng chứng về lợi ích của quản trị tốt." },
  ];

  window.LESSONS['CF-03'] = {
    moduleId: 'CF-03',
    calculator: 'Không cần máy tính',
    warmup: [
      'Ôn CF-02: vì sao cổ đông có thể thích một dự án rủi ro làm giảm tổng giá trị công ty?',
      'Nếu bạn thuê người quản lý cửa hàng thay mình, bạn lo người đó làm gì sai? Bạn sẽ giám sát thế nào?',
      'Bạn đã từng đọc báo cáo thường niên hoặc tài liệu đại hội cổ đông của một công ty niêm yết chưa? Nó có những phần nào?',
    ],
    sections,
    glossary,
    practice,
    widgets: {},
    slides: [],
    wrapup: [
      'Liệt kê 4 nhóm xung đột và một cơ chế xử lý tương ứng cho mỗi nhóm.',
      'Giải thích vì sao bầu dồn phiếu giúp cổ đông thiểu số, kèm một ví dụ số.',
      'Còn câu hỏi nào chưa rõ? Ghi lại để hỏi.',
    ],
  };
}());
