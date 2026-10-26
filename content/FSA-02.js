// Bài giảng FSA-02 - Analyzing Income Statements (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t, frac } = window.CFAH;

  const sections = [
    {
      title: '1. Bức tranh lớn và cấu trúc báo cáo kết quả kinh doanh',
      minutes: 6,
      html: `
<p>${t('is', 'Báo cáo kết quả kinh doanh (income statement)')} trả lời câu hỏi: <b>trong kỳ, doanh nghiệp kiếm được bao nhiêu</b>. Nó đi từ trên xuống dưới:</p>
<table class="plain"><thead><tr><th>Dòng</th><th>Ý nghĩa</th></tr></thead><tbody>
<tr><td>Doanh thu (revenue)</td><td>Giá trị hàng hóa, dịch vụ đã chuyển giao cho khách hàng</td></tr>
<tr><td>- Giá vốn hàng bán (COGS)</td><td>Chi phí trực tiếp tạo ra hàng đã bán</td></tr>
<tr><td>= ${t('gp', 'Lợi nhuận gộp (gross profit)')}</td><td>Phản ánh sức mạnh định giá và hiệu quả sản xuất</td></tr>
<tr><td>- Chi phí bán hàng, quản lý (SG&amp;A), R&amp;D</td><td>Chi phí hoạt động không gắn trực tiếp với từng sản phẩm</td></tr>
<tr><td>= ${t('op', 'Lợi nhuận hoạt động (operating profit)')}</td><td>Kết quả kinh doanh cốt lõi, trước chi phí tài chính và thuế</td></tr>
<tr><td>- Chi phí lãi vay, - thuế thu nhập</td><td>Ảnh hưởng của cấu trúc vốn và thuế</td></tr>
<tr><td>= Lợi nhuận ròng (net income)</td><td>Phần thuộc về chủ sở hữu (gồm cả cổ đông không kiểm soát nếu có)</td></tr>
</tbody></table>
<p>Chi phí có thể trình bày theo <b>chức năng</b> (giá vốn, bán hàng, quản lý) hoặc theo <b>bản chất</b> (nguyên vật liệu, lương, khấu hao). IFRS cho chọn một trong hai (nếu chọn chức năng thì phải thuyết minh thêm theo bản chất); US GAAP với công ty niêm yết Mỹ thường trình bày theo chức năng.</p>
<div class="key">Năm LOS của module: (1) <b>ghi nhận doanh thu</b>, (2) <b>ghi nhận chi phí</b>, vốn hóa hay ghi chi phí, (3) <b>khoản mục không thường xuyên</b> và thay đổi kế toán, (4) <b>EPS</b> cơ bản và pha loãng, (5) <b>common-size</b> và tỷ số. Câu hỏi xuyên suốt: <b>lợi nhuận này có bền vững và có so sánh được không?</b></div>`,
    },
    {
      title: '2. Ghi nhận doanh thu: nguyên tắc và mô hình 5 bước',
      minutes: 13,
      html: `
<p>Theo ${t('accrual', 'kế toán dồn tích')}, doanh thu ghi khi <b>đã thực hiện nghĩa vụ với khách hàng</b>, không phụ thuộc lúc thu tiền:</p>
<ul>
<li>Bán chịu: doanh thu tăng, ${t('ar', 'phải thu khách hàng (accounts receivable)')} tăng. Ví dụ bán 100, khách trả ngay 80, nợ 20: doanh thu +100, tiền +80, phải thu +20.</li>
<li>Thu tiền trước: tiền tăng, ${t('unearned', 'doanh thu chưa thực hiện (unearned / deferred revenue)')} tăng, đây là <b>nợ phải trả</b>. Ví dụ nhận trước 100 cho hợp đồng dịch vụ 2 năm, năm nay làm xong 40%: doanh thu +40, tiền +100, doanh thu chưa thực hiện +60.</li>
</ul>
<p>IFRS 15 và US GAAP (ASC 606) đã <b>hội tụ</b> về cùng một mô hình 5 bước, với nguyên tắc cốt lõi: doanh thu phản ánh việc chuyển giao hàng hóa, dịch vụ cho khách hàng với số tiền mà doanh nghiệp kỳ vọng được hưởng.</p>
<table class="plain"><thead><tr><th>Bước</th><th>Nội dung</th><th>Câu hỏi cần hỏi</th></tr></thead><tbody>
<tr><td>1. Xác định ${t('contract', 'hợp đồng')}</td><td>Thỏa thuận được các bên chấp thuận, quyền và điều khoản thanh toán rõ ràng, có thực chất thương mại, khả năng thu tiền là <b>có thể xảy ra (probable)</b></td><td>Có hợp đồng thật không?</td></tr>
<tr><td>2. Xác định ${t('po', 'nghĩa vụ thực hiện (performance obligation)')}</td><td>Mỗi hàng hóa, dịch vụ <b>riêng biệt (distinct)</b> là một nghĩa vụ</td><td>Khách hàng mua mấy thứ?</td></tr>
<tr><td>3. Xác định ${t('tp', 'giá giao dịch (transaction price)')}</td><td>Số tiền kỳ vọng được hưởng, kể cả ${t('variable', 'khoản thanh toán biến đổi')} (chiết khấu, thưởng, hàng trả lại) nhưng chỉ đến mức <b>rất có khả năng không bị đảo ngược đáng kể</b></td><td>Thực sự sẽ được bao nhiêu?</td></tr>
<tr><td>4. Phân bổ giá giao dịch</td><td>Chia cho các nghĩa vụ theo tỷ lệ ${t('ssp', 'giá bán riêng lẻ (standalone selling price)')}</td><td>Mỗi thứ đáng bao nhiêu?</td></tr>
<tr><td>5. Ghi nhận doanh thu</td><td>Khi (hoặc trong khi) <b>quyền kiểm soát</b> chuyển cho khách hàng: tại một thời điểm hoặc theo thời gian</td><td>Khi nào khách nắm quyền kiểm soát?</td></tr>
</tbody></table>
<div class="example"><div class="ex-h">Ví dụ 2.1 - Điện thoại kèm gói bảo hành mở rộng</div>
<p>Một hãng bán điện thoại kèm gói bảo hành mở rộng 2 năm. Giá bán riêng: điện thoại 1.000, gói bảo hành 200. (a) Nếu khách trả đúng 1.200, cuối năm 1 hãng ghi bao nhiêu doanh thu? (b) Nếu khách chỉ trả 1.100 cho cả gói?</p>
<details><summary>Xem lời giải</summary>
<p>Hai nghĩa vụ riêng biệt: điện thoại (giao ngay, ghi tại thời điểm giao) và bảo hành (ghi đều theo 2 năm).</p>
<p>(a) Điện thoại 1.000 + bảo hành 200/2 = 100. Doanh thu năm 1 = <b>1.100</b>; 100 còn lại là doanh thu chưa thực hiện.</p>
<p>(b) Phân bổ 1.100 theo tỷ lệ 1.000 : 200. Điện thoại = 1.100 × 1.000/1.200 = 916,67; bảo hành = 183,33. Doanh thu năm 1 = 916,67 + 183,33/2 = <b>1.008,33</b>. Phần giảm giá được chia cho cả hai nghĩa vụ, không dồn vào một bên.</p></details></div>
<div class="example"><div class="ex-h">Ví dụ 2.2 - Khoản thanh toán biến đổi</div>
<p>Bán 1.000 sản phẩm giá 10, khách được trả lại hàng và kinh nghiệm cho thấy khoảng 5% bị trả lại. Doanh thu ghi nhận?</p>
<details><summary>Xem lời giải</summary><p>Chỉ ghi phần rất có khả năng không bị đảo ngược: 10.000 × 95% = <b>9.500</b>. Phần 500 ghi vào ${t('refund', 'nợ phải trả hoàn tiền (refund liability)')}.</p></details></div>
<h4>Ghi nhận theo thời gian hay tại một thời điểm?</h4>
<p>Ghi <b>theo thời gian</b> nếu thỏa một trong ba điều kiện: khách vừa nhận vừa tiêu dùng lợi ích khi doanh nghiệp thực hiện (dịch vụ vệ sinh, bảo hành); khách kiểm soát tài sản ngay khi nó được tạo ra (xây trên đất của khách); tài sản không có công dụng thay thế với doanh nghiệp và doanh nghiệp có quyền đòi thanh toán cho phần đã làm. Nếu không, ghi <b>tại thời điểm</b> chuyển giao quyền kiểm soát (dấu hiệu: quyền đòi tiền, quyền sở hữu pháp lý, chuyển giao vật chất, rủi ro và lợi ích, khách đã chấp nhận).</p>`,
    },
    {
      title: '3. Ứng dụng ghi nhận doanh thu cụ thể và hệ quả phân tích',
      minutes: 15,
      html: `
<h4>a) ${t('pa', 'Bên chính hay đại lý (principal vs agent)')}</h4>
<p>Câu hỏi: doanh nghiệp có <b>kiểm soát hàng hóa, dịch vụ trước khi chuyển cho khách</b> không? Dấu hiệu là bên chính: chịu trách nhiệm chính thực hiện, chịu rủi ro tồn kho, tự quyết giá bán.</p>
<div class="example"><div class="ex-h">Ví dụ 3.1</div>
<p>Một đại lý du lịch bán vé hạng nhất giá 10.000 và được hưởng hoa hồng 1.000. Đại lý không khai thác chuyến bay, không chịu rủi ro tồn kho hay rủi ro tín dụng.</p>
<details><summary>Xem lời giải</summary>
<table class="plain"><thead><tr><th></th><th>Là đại lý (thuần, net)</th><th>Nếu là bên chính (gộp, gross)</th></tr></thead><tbody>
<tr><td>Doanh thu</td><td>1.000</td><td>10.000</td></tr>
<tr><td>Chi phí</td><td>0</td><td>9.000</td></tr>
<tr><td>Lợi nhuận gộp</td><td>1.000</td><td>1.000</td></tr>
<tr><td>Biên lợi nhuận gộp</td><td>100%</td><td>10%</td></tr>
</tbody></table>
<p>Đại lý ghi <b>thuần 1.000</b>. Lợi nhuận gộp như nhau, nhưng ghi gộp làm doanh thu phình gấp 10 lần và biên lợi nhuận nhỏ đi. Khi so sánh hai nền tảng thương mại điện tử, phải hỏi họ ghi gộp hay thuần.</p></details></div>

<h4>b) ${t('ltc', 'Hợp đồng dài hạn')}: ghi nhận theo tiến độ</h4>
<div class="example"><div class="ex-h">Ví dụ 3.2</div>
<p>Nhà thầu ký hợp đồng xây một nhà kho, giá 10 triệu, ước tính tổng chi phí 8 triệu. Các hạng mục (san nền, móng, điện, mái) không phải là sản phẩm riêng biệt: khách mua một nhà kho hoàn chỉnh, nên chỉ có <b>một</b> nghĩa vụ. Năm 1 chi 4 triệu, năm 2 chi thêm 2 triệu. Tiến độ đo bằng chi phí đã bỏ ra. Doanh thu từng năm?</p>
<details><summary>Xem lời giải</summary>
<p>Năm 1: tiến độ = 4/8 = 50%, doanh thu = 50% × 10 = <b>5 triệu</b>, lợi nhuận 1 triệu.<br>
Năm 2: tiến độ lũy kế = 6/8 = 75%, doanh thu lũy kế 7,5 triệu, doanh thu năm 2 = 7,5 - 5 = <b>2,5 triệu</b>.</p>
<p>Nếu ước tính tổng chi phí thay đổi, tính lại tiến độ <b>lũy kế</b> với ước tính mới rồi trừ phần đã ghi. Nếu dự kiến lỗ, ghi nhận <b>toàn bộ khoản lỗ dự kiến ngay</b>.</p></details></div>

<h4>c) ${t('franchise', 'Nhượng quyền (franchise)')}</h4>
<ul>
<li>Doanh thu từ nhà hàng tự vận hành, phí bản quyền và bán nguyên liệu cho bên nhận quyền có rủi ro khác nhau, nên được <b>trình bày tách riêng</b>.</li>
<li>Phí nhượng quyền ban đầu (quyền kinh doanh 10 năm) nhận trước, ghi là <b>doanh thu chưa thực hiện</b> rồi phân bổ dần theo thời hạn hợp đồng.</li>
<li>Phí bản quyền theo % doanh số của bên nhận quyền ghi khi doanh số đó phát sinh, tức khi khoản phí đến hạn phải trả.</li>
</ul>

<h4>d) Phần mềm và giấy phép</h4>
<table class="plain"><thead><tr><th>Tình huống</th><th>Bản chất</th><th>Ghi nhận</th></tr></thead><tbody>
<tr><td>Giấy phép kèm cập nhật liên tục trong suốt hợp đồng</td><td>Quyền <b>truy cập</b> (right to access) tài sản thay đổi</td><td>Theo thời gian</td></tr>
<tr><td>Giấy phép bán "nguyên trạng", cập nhật phải mua riêng</td><td>Quyền <b>sử dụng</b> (right to use) phần mềm như lúc giao</td><td>Tại thời điểm giao</td></tr>
<tr><td>Thuê bao đám mây (SaaS), khách không nắm giữ phần mềm</td><td>Dịch vụ</td><td>Theo thời gian</td></tr>
</tbody></table>

<h4>e) ${t('bah', 'Giao hàng sau (bill-and-hold)')}</h4>
<p>Khách đã mua nhưng nhờ người bán giữ hàng hộ. Chỉ được ghi doanh thu trước khi giao nếu <b>khách đã nắm quyền kiểm soát</b>, cụ thể: thỏa thuận có lý do thực chất (thường do khách yêu cầu), hàng được <b>tách riêng và xác định là của khách</b>, hàng sẵn sàng giao, và người bán <b>không thể dùng hay chuyển hàng cho khách khác</b>. Chỉ việc khách đã trả tiền thì <b>chưa đủ</b>.</p>

<h4>Hệ quả phân tích</h4>
<ul>
<li>Doanh thu dựa nhiều vào <b>ước tính</b> (tiến độ, hàng trả lại, giá bán riêng lẻ): đọc thuyết minh, so sánh với đối thủ.</li>
<li>Dấu hiệu ghi nhận sớm: phải thu tăng nhanh hơn doanh thu (số ngày thu tiền tăng), nhiều bill-and-hold cuối kỳ, doanh thu chưa thực hiện giảm bất thường.</li>
<li>Thuyết minh bắt buộc: doanh thu chia theo loại, ${t('cbal', 'số dư hợp đồng (tài sản và nợ phải trả hợp đồng)')}, nghĩa vụ còn lại chưa thực hiện, các xét đoán quan trọng.</li>
<li>Chi phí tăng thêm để có hợp đồng (ví dụ hoa hồng bán hàng) được <b>vốn hóa</b> và phân bổ dần nếu kỳ vọng thu hồi.</li>
</ul>`,
    },
    {
      title: '4. Ghi nhận chi phí: vốn hóa hay ghi chi phí ngay',
      minutes: 13,
      html: `
<h4>Nguyên tắc</h4>
<ul>
<li>${t('matching', 'Nguyên tắc phù hợp (matching)')}: ghi chi phí cùng kỳ với doanh thu mà nó giúp tạo ra. Ví dụ mua 5 đơn vị hàng, bán 4: giá vốn chỉ gồm 4 đơn vị, 1 đơn vị còn lại nằm trong tồn kho. Lương công nhân trực tiếp sản xuất vào giá thành tồn kho, thành giá vốn khi hàng được bán.</li>
<li>${t('period', 'Chi phí thời kỳ (period costs)')}: chi phí không gắn được với sản phẩm cụ thể (lương nhân viên bán hàng, tiền thuê văn phòng) ghi ngay vào kỳ phát sinh.</li>
<li>Một số chi phí cần ước tính: ${t('baddebt', 'dự phòng phải thu khó đòi')}, chi phí bảo hành, khấu hao. Ước tính lạc quan (dự phòng thấp, thời gian sử dụng dài) làm lợi nhuận hiện tại cao hơn.</li>
</ul>

<h4>${t('capitalize', 'Vốn hóa (capitalize)')} hay ghi chi phí (expense)?</h4>
<p>Câu hỏi then chốt: chi phí này có tạo <b>lợi ích kinh tế trong tương lai</b> không? Có thì vốn hóa thành tài sản trên bảng cân đối rồi phân bổ dần (khấu hao); không thì ghi chi phí ngay.</p>
<div class="example"><div class="ex-h">Ví dụ 4.1 - Mua máy</div>
<p>Công ty trả 250.000 cho máy (gồm vận chuyển, thuế), 10.000 lắp đặt, 7.500 đào tạo công nhân. Trong 5 năm sau đó chi 35.000 sửa chữa định kỳ và 85.000 thay động cơ, giúp kéo dài đáng kể thời gian sử dụng. Khoản nào vốn hóa?</p>
<details><summary>Xem lời giải</summary>
<p>Vốn hóa ban đầu: 250.000 + 10.000 = <b>260.000</b> (mọi chi phí để máy sẵn sàng hoạt động). Thay động cơ 85.000 cũng vốn hóa vì kéo dài thời gian sử dụng. Ghi chi phí: đào tạo 7.500 và sửa chữa định kỳ 35.000, tổng 42.500 (chỉ duy trì, không tạo lợi ích mới).</p></details></div>
<div class="example"><div class="ex-h">Ví dụ 4.2 - Ảnh hưởng của việc vốn hóa</div>
<p>Mỗi năm doanh thu 1.000, chi phí bằng tiền khác 500. Năm 1 chi thêm 300 cho một khoản có lợi ích 3 năm. Bỏ qua thuế. So sánh hai cách.</p>
<details><summary>Xem lời giải</summary>
<table class="plain"><thead><tr><th></th><th>Năm 1</th><th>Năm 2</th><th>Năm 3</th><th>Tổng</th></tr></thead><tbody>
<tr><td>Lợi nhuận - ghi chi phí ngay</td><td>200</td><td>500</td><td>500</td><td>1.200</td></tr>
<tr><td>Lợi nhuận - vốn hóa (khấu hao 100/năm)</td><td>400</td><td>400</td><td>400</td><td>1.200</td></tr>
<tr><td>CFO - ghi chi phí ngay</td><td>200</td><td>500</td><td>500</td><td>1.200</td></tr>
<tr><td>CFO - vốn hóa (300 nằm ở CFI)</td><td>500</td><td>500</td><td>500</td><td>1.500</td></tr>
</tbody></table>
<p>Vốn hóa: lợi nhuận năm đầu <b>cao hơn</b> và <b>mượt hơn</b>, tài sản và vốn chủ cao hơn, CFO cao hơn (khoản chi chuyển sang CFI). Tổng lợi nhuận cả vòng đời không đổi; tổng tiền cũng không đổi, chỉ khác phân loại.</p></details></div>

<h4>${t('capint', 'Vốn hóa lãi vay (capitalized interest)')}</h4>
<p>Lãi vay cho hoạt động thường ngày ghi ngay là chi phí lãi vay. Nhưng lãi vay phát sinh trong thời gian <b>xây dựng một tài sản đủ điều kiện</b> để tự dùng (nhà máy, tòa nhà) phải được cộng vào nguyên giá tài sản, theo cả IFRS và US GAAP. Khác biệt: IFRS trừ thu nhập từ việc tạm đầu tư tiền vay; US GAAP thường không trừ.</p>
<p class="warn"><b>Hệ quả:</b> lãi vay vốn hóa nằm trong CFI (cùng với chi đầu tư) thay vì CFO, và không xuất hiện trong chi phí lãi vay. Khi tính hệ số khả năng trả lãi, nhà phân tích nên <b>cộng lại lãi vay đã vốn hóa</b> vào mẫu số.</p>

<h4>${t('rd', 'Chi phí nghiên cứu và phát triển (R&amp;D)')}</h4>
<table class="plain"><thead><tr><th></th><th>IFRS</th><th>US GAAP</th></tr></thead><tbody>
<tr><td>Nghiên cứu (research)</td><td>Ghi chi phí</td><td>Ghi chi phí</td></tr>
<tr><td>Phát triển (development)</td><td><b>Vốn hóa</b> khi chứng minh được khả thi kỹ thuật, ý định và khả năng hoàn thành, lợi ích tương lai có thể xảy ra</td><td>Thường <b>ghi chi phí</b>; ngoại lệ: phần mềm để bán (vốn hóa sau khi đạt khả thi công nghệ) và phần mềm tự dùng (vốn hóa ở giai đoạn phát triển ứng dụng)</td></tr>
</tbody></table>
<p class="tip"><b>Mẹo:</b> chính sách tích cực (aggressive) đẩy chi phí về sau, làm lợi nhuận hiện tại cao. Chính sách thận trọng (conservative) ghi chi phí sớm. Hai công ty giống hệt nhau có thể báo cáo lợi nhuận khác nhau chỉ vì lựa chọn này.</p>`,
    },
    {
      title: '5. Khoản mục không thường xuyên và thay đổi kế toán',
      minutes: 10,
      html: `
<p>Để dự báo, nhà phân tích cần tách lợi nhuận <b>lặp lại được</b> khỏi các khoản <b>một lần</b>.</p>
<table class="plain"><thead><tr><th>Loại</th><th>Ví dụ</th><th>Trình bày</th></tr></thead><tbody>
<tr><td>${t('unusual', 'Khoản bất thường hoặc không thường xuyên (unusual or infrequent items)')}</td><td>Lãi bán nhà máy, suy giảm giá trị lợi thế thương mại, chi phí tái cấu trúc, ghi giảm tài sản</td><td>Trong lợi nhuận từ hoạt động liên tục, <b>trước thuế</b>, thường tách dòng riêng hoặc thuyết minh</td></tr>
<tr><td>${t('discops', 'Hoạt động không tiếp tục (discontinued operations)')}</td><td>Bán hoặc định bán một mảng tách biệt về hoạt động và tài chính</td><td><b>Sau</b> lợi nhuận từ hoạt động liên tục, <b>sau thuế (net of tax)</b>; số liệu kỳ trước trình bày lại</td></tr>
</tbody></table>
<p>Khoản mục "bất thường" (extraordinary items) <b>không còn</b>: IFRS cấm, US GAAP bỏ từ năm 2015.</p>
<div class="example"><div class="ex-h">Ví dụ 5.1</div>
<p>Lợi nhuận ròng 260 đã trừ lỗ sau thuế 40 của mảng điện tử tiêu dùng đang bán (công ty chỉ giữ mảng phần mềm). Trong hoạt động liên tục có chi phí tái cấu trúc 50 trước thuế, thuế suất 25%. Lợi nhuận "cốt lõi" để dự báo?</p>
<details><summary>Xem lời giải</summary>
<p>Lợi nhuận từ hoạt động liên tục = 260 + 40 = 300. Nếu tin rằng tái cấu trúc thật sự chỉ một lần, cộng lại phần sau thuế: 300 + 50 × (1 - 25%) = <b>337,5</b>. Cẩn thận: công ty năm nào cũng "tái cấu trúc" thì đó không còn là khoản một lần.</p></details></div>
<h4>Thay đổi kế toán</h4>
<table class="plain"><thead><tr><th>Thay đổi</th><th>Ví dụ</th><th>Cách áp dụng</th></tr></thead><tbody>
<tr><td>${t('policy', 'Thay đổi chính sách kế toán')}</td><td>Đổi phương pháp tính giá tồn kho, áp dụng chuẩn mực mới</td><td><b>Hồi tố (retrospective)</b>: trình bày lại kỳ trước</td></tr>
<tr><td>${t('estimate', 'Thay đổi ước tính kế toán')}</td><td>Thời gian sử dụng, giá trị thanh lý, tỷ lệ nợ khó đòi</td><td><b>Phi hồi tố (prospective)</b>: chỉ kỳ hiện tại và tương lai</td></tr>
<tr><td>Sửa sai sót kỳ trước (prior-period adjustment)</td><td>Phát hiện sai sót trong BCTC đã công bố</td><td>Hồi tố, trình bày lại; phải thuyết minh</td></tr>
</tbody></table>
<p class="tip"><b>Nhớ:</b> chính sách và sai sót nhìn về <b>sau lưng</b>; ước tính nhìn về <b>phía trước</b>. Thay đổi phạm vi hợp nhất (mua, bán công ty con) và tỷ giá không cần trình bày lại nhưng làm giảm tính so sánh. Sửa sai sót thường xuyên là dấu hiệu chất lượng báo cáo kém (FSA-10).</p>`,
    },
    {
      title: '6. EPS cơ bản và số cổ phiếu bình quân gia quyền',
      minutes: 9,
      html: `
<div class="formula">${t('basiceps', 'EPS cơ bản')} = ${frac('Lợi nhuận ròng - Cổ tức ưu đãi', 'Số cổ phiếu phổ thông bình quân gia quyền')}</div>
<p class="warn"><b>Bẫy:</b> chỉ trừ cổ tức <b>ưu đãi</b>. Cổ tức phổ thông không trừ, vì nó là phần chia từ chính lợi nhuận thuộc về cổ đông phổ thông.</p>
<h4>${t('waso', 'Số cổ phiếu bình quân gia quyền (WASO)')}</h4>
<ul>
<li>Cổ phiếu phát hành hoặc mua lại trong kỳ: nhân với tỷ lệ thời gian lưu hành.</li>
<li>${t('stockdiv', 'Cổ tức bằng cổ phiếu và chia tách cổ phiếu')}: điều chỉnh <b>hồi tố</b> cho mọi cổ phiếu lưu hành <b>trước</b> sự kiện, như thể đã xảy ra từ đầu kỳ (không tạo thêm giá trị, chỉ chia nhỏ).</li>
</ul>
<div class="example"><div class="ex-h">Ví dụ 6.1</div>
<p>Đầu năm có 10.000 cổ phiếu. Ngày 1/4 phát hành thêm 4.000. Ngày 1/7 trả cổ tức bằng cổ phiếu 10%. Ngày 1/9 mua lại 3.000. Lợi nhuận ròng 10.000, cổ tức ưu đãi 1.000, cổ tức phổ thông 1.750. Tính WASO và EPS cơ bản.</p>
<details><summary>Xem lời giải</summary>
<table class="plain"><thead><tr><th>Khoản</th><th>Số CP</th><th>Điều chỉnh cổ tức CP</th><th>Thời gian</th><th>Bình quân</th></tr></thead><tbody>
<tr><td>Đầu năm</td><td>10.000</td><td>× 1,1</td><td>12/12</td><td>11.000</td></tr>
<tr><td>Phát hành 1/4</td><td>4.000</td><td>× 1,1</td><td>9/12</td><td>3.300</td></tr>
<tr><td>Mua lại 1/9 (sau cổ tức CP)</td><td>-3.000</td><td>không</td><td>4/12</td><td>-1.000</td></tr>
<tr><td><b>WASO</b></td><td></td><td></td><td></td><td><b>13.300</b></td></tr>
</tbody></table>
<p>EPS cơ bản = (10.000 - 1.000) / 13.300 = <b>0,68</b>. Đáp án bẫy: trừ cả 1.750 cổ tức phổ thông, hoặc quên nhân 1,1 cho cổ phiếu phát hành trước ngày trả cổ tức cổ phiếu.</p></details></div>
<p>${t('simple', 'Cấu trúc vốn đơn giản')}: không có chứng khoán có thể chuyển thành cổ phiếu phổ thông, chỉ cần báo cáo EPS cơ bản. ${t('complex', 'Cấu trúc vốn phức tạp')}: có cổ phiếu ưu đãi chuyển đổi, trái phiếu chuyển đổi, quyền chọn, chứng quyền; phải báo cáo cả EPS pha loãng.</p>`,
    },
    {
      title: '7. EPS pha loãng: if-converted, treasury stock và chống pha loãng',
      minutes: 12,
      html: `
<div class="formula">${t('dileps', 'EPS pha loãng')} = ${frac('Lợi nhuận ròng - Cổ tức ưu đãi + Cổ tức ưu đãi chuyển đổi + Lãi trái phiếu chuyển đổi × (1 - t)', 'WASO + CP mới từ chuyển đổi + CP mới ròng từ quyền chọn')}</div>
<h4>a) ${t('ifconv', 'Phương pháp chuyển đổi giả định (if-converted)')}: cổ phiếu ưu đãi và trái phiếu chuyển đổi</h4>
<p>Giả định chuyển đổi từ đầu kỳ (hoặc từ ngày phát hành nếu muộn hơn): <b>tử số</b> cộng lại khoản không còn phải trả (cổ tức ưu đãi, hoặc lãi trái phiếu <b>sau thuế</b>), <b>mẫu số</b> cộng thêm cổ phiếu mới.</p>
<div class="example"><div class="ex-h">Ví dụ 7.1 - Cổ phiếu ưu đãi chuyển đổi</div>
<p>Lợi nhuận ròng 4,35 triệu; 2 triệu cổ phiếu phổ thông lưu hành cả năm. Có cổ phiếu ưu đãi chuyển đổi 7%, tổng mệnh giá 5 triệu, mệnh giá 10 mỗi cổ phiếu; mỗi cổ phiếu ưu đãi đổi được 1,1 cổ phiếu phổ thông.</p>
<details><summary>Xem lời giải</summary>
<p>Cổ tức ưu đãi = 7% × 5 triệu = 0,35 triệu. EPS cơ bản = (4,35 - 0,35)/2 = <b>2,00</b>.<br>
Số CP ưu đãi = 5 triệu/10 = 500.000; CP phổ thông mới = 500.000 × 1,1 = 550.000.<br>
EPS pha loãng = 4,35/(2 + 0,55) = <b>1,71</b>. Nhỏ hơn 2,00 nên chứng khoán này có tác dụng pha loãng, được đưa vào.</p></details></div>
<div class="example"><div class="ex-h">Ví dụ 7.2 - Trái phiếu chuyển đổi</div>
<p>Lợi nhuận ròng 5 triệu, 2 triệu cổ phiếu, không có ưu đãi. Trái phiếu chuyển đổi mệnh giá 10 triệu, lãi suất 5%, đổi được 400.000 cổ phiếu. Thuế suất 25%.</p>
<details><summary>Xem lời giải</summary>
<p>EPS cơ bản = 5/2 = <b>2,50</b>. Lãi sau thuế cộng lại = 10 × 5% × (1 - 25%) = 0,375 triệu.<br>
EPS pha loãng = (5 + 0,375)/(2 + 0,4) = <b>2,24</b>. Bẫy: cộng lại lãi trước thuế 0,5 triệu.</p></details></div>
<h4>b) ${t('tsm', 'Phương pháp cổ phiếu quỹ (treasury stock method)')}: quyền chọn và chứng quyền</h4>
<p>Giả định người nắm quyền chọn thực hiện, doanh nghiệp dùng tiền thu được <b>mua lại cổ phiếu theo giá thị trường bình quân</b> trong kỳ. Chỉ phần chênh lệch làm tăng mẫu số; tử số không đổi. Cả IFRS và US GAAP đều cho cùng kết quả (IFRS diễn đạt là phần cổ phiếu "phát hành không thu tiền").</p>
<div class="formula">CP tăng thêm = n × ${frac('P<sub>bình quân</sub> - K', 'P<sub>bình quân</sub>')}</div>
<div class="example"><div class="ex-h">Ví dụ 7.3</div>
<p>Lợi nhuận dành cho cổ đông phổ thông 1,2 triệu; 500.000 cổ phiếu. Có 100.000 quyền chọn, giá thực hiện 15; giá thị trường bình quân 20.</p>
<details><summary>Xem lời giải</summary>
<p>EPS cơ bản = 1,2 triệu/500.000 = <b>2,40</b>.<br>
Tiền thu = 100.000 × 15 = 1,5 triệu, mua lại 1,5 triệu/20 = 75.000 CP. CP tăng ròng = 25.000.<br>
EPS pha loãng = 1,2 triệu/525.000 = <b>2,29</b>.</p></details></div>
<h4>c) ${t('antidil', 'Chứng khoán chống pha loãng (antidilutive)')}</h4>
<p>Nếu đưa một chứng khoán vào làm EPS <b>tăng</b> thì nó là chống pha loãng và <b>bị loại</b>. EPS pha loãng không bao giờ lớn hơn EPS cơ bản. Cách kiểm tra nhanh với chứng khoán chuyển đổi: so sánh <b>phần cộng thêm ở tử số trên mỗi cổ phiếu mới</b> với EPS cơ bản.</p>
<ul>
<li>Cổ phiếu ưu đãi chuyển đổi trả cổ tức 600.000, đổi được 200.000 CP: 3,00 mỗi CP mới. Nếu EPS cơ bản là 2,00 thì 3,00 &gt; 2,00 nên <b>chống pha loãng</b>, loại ra.</li>
<li>Quyền chọn có giá thực hiện <b>cao hơn</b> giá bình quân thị trường: chống pha loãng (không ai thực hiện), loại ra.</li>
</ul>`,
    },
    {
      title: '8. Báo cáo quy mô chung và tỷ số từ báo cáo kết quả kinh doanh',
      minutes: 8,
      html: `
<p>${t('commonsize', 'Báo cáo kết quả kinh doanh quy mô chung (common-size)')} biểu diễn mỗi dòng theo <b>% doanh thu</b>. Nhờ vậy so sánh được doanh nghiệp khác quy mô, và một doanh nghiệp qua nhiều năm.</p>
<div class="formula">Biên lợi nhuận gộp = ${frac('Lợi nhuận gộp', 'Doanh thu')} &nbsp;&nbsp; Biên hoạt động = ${frac('Lợi nhuận hoạt động', 'Doanh thu')} &nbsp;&nbsp; Biên trước thuế = ${frac('LN trước thuế', 'Doanh thu')} &nbsp;&nbsp; Biên ròng = ${frac('LN ròng', 'Doanh thu')}</div>
<div class="example"><div class="ex-h">Ví dụ 8.1 - North và South</div>
<table class="plain"><thead><tr><th></th><th>North</th><th>% DT</th><th>South</th><th>% DT</th></tr></thead><tbody>
<tr><td>Doanh thu</td><td>5.000</td><td>100%</td><td>800</td><td>100%</td></tr>
<tr><td>Giá vốn</td><td>3.250</td><td>65,0%</td><td>400</td><td>50,0%</td></tr>
<tr><td>Lợi nhuận gộp</td><td>1.750</td><td>35,0%</td><td>400</td><td>50,0%</td></tr>
<tr><td>SG&amp;A</td><td>1.000</td><td>20,0%</td><td>200</td><td>25,0%</td></tr>
<tr><td>Lợi nhuận hoạt động</td><td>750</td><td>15,0%</td><td>200</td><td>25,0%</td></tr>
<tr><td>Lãi vay</td><td>150</td><td>3,0%</td><td>20</td><td>2,5%</td></tr>
<tr><td>LN trước thuế</td><td>600</td><td>12,0%</td><td>180</td><td>22,5%</td></tr>
<tr><td>Thuế 25%</td><td>150</td><td>3,0%</td><td>45</td><td>5,625%</td></tr>
<tr><td>LN ròng</td><td>450</td><td>9,0%</td><td>135</td><td>16,875%</td></tr>
</tbody></table>
<details><summary>Xem nhận xét</summary>
<p>North lớn hơn nhiều về số tuyệt đối, nhưng South <b>hiệu quả hơn</b> trên mỗi đồng doanh thu: biên gộp 50% so với 35% (sức mạnh định giá hoặc giá vốn thấp), dù SG&amp;A chiếm tỷ lệ cao hơn (25% so với 20%). Mỗi 100 doanh thu, South giữ lại 16,9, North chỉ 9. Câu hỏi tiếp theo của nhà phân tích: biên gộp cao của South có bền không, hay chỉ nhờ một sản phẩm đang hot?</p></details></div>
<p class="tip">Common-size còn giúp thấy <b>cơ cấu</b>. Ví dụ một hãng công nghệ có biên gộp chung khoảng 46%, nhưng mảng dịch vụ có biên gộp khoảng 74% so với khoảng 37% của phần cứng: tỷ trọng dịch vụ tăng sẽ kéo biên lợi nhuận chung lên. Thông tin này nằm ở thuyết minh bộ phận.</p>`,
    },
    {
      title: '9. Tóm tắt và bẫy thường gặp',
      minutes: 4,
      html: `
<table class="plain"><thead><tr><th>Tình huống</th><th>Nhớ</th></tr></thead><tbody>
<tr><td>Mô hình 5 bước</td><td>Hợp đồng, nghĩa vụ, giá, phân bổ theo giá bán riêng lẻ, ghi khi chuyển quyền kiểm soát. IFRS và US GAAP giống nhau</td></tr>
<tr><td>Bán kèm có giảm giá</td><td>Chia phần giảm giá theo tỷ lệ giá bán riêng lẻ</td></tr>
<tr><td>Đại lý</td><td>Ghi thuần (hoa hồng). Lợi nhuận gộp không đổi, doanh thu và biên khác</td></tr>
<tr><td>Hợp đồng dài hạn</td><td>Tiến độ lũy kế × giá, trừ phần đã ghi. Lỗ dự kiến ghi ngay</td></tr>
<tr><td>Bill-and-hold</td><td>Khách phải nắm quyền kiểm soát; trả tiền thôi chưa đủ</td></tr>
<tr><td>Vốn hóa</td><td>Lợi nhuận đầu kỳ cao hơn, CFO cao hơn, CFI thấp hơn</td></tr>
<tr><td>R&amp;D</td><td>IFRS: vốn hóa phát triển khi đủ điều kiện. US GAAP: ghi chi phí (trừ phần mềm)</td></tr>
<tr><td>Hoạt động không tiếp tục</td><td>Sau thuế, dưới lợi nhuận hoạt động liên tục. Bất thường: trước thuế, bên trong</td></tr>
<tr><td>Chính sách / ước tính</td><td>Chính sách hồi tố; ước tính phi hồi tố</td></tr>
<tr><td>EPS</td><td>Chỉ trừ cổ tức ưu đãi; cổ tức cổ phiếu và chia tách điều chỉnh hồi tố</td></tr>
<tr><td>Trái phiếu chuyển đổi</td><td>Cộng lãi <b>sau thuế</b></td></tr>
<tr><td>Quyền chọn</td><td>Mua lại theo giá <b>bình quân</b>; K &gt; giá bình quân thì loại</td></tr>
<tr><td>Chống pha loãng</td><td>EPS pha loãng không bao giờ lớn hơn EPS cơ bản</td></tr>
</tbody></table>`,
    },
  ];

  const glossary = {
    is: ['Income statement', 'Báo cáo kết quả kinh doanh', 'Doanh thu, chi phí và lợi nhuận trong một thời kỳ.'],
    gp: ['Gross profit', 'Lợi nhuận gộp', 'Doanh thu trừ giá vốn hàng bán.'],
    op: ['Operating profit', 'Lợi nhuận hoạt động', 'Lợi nhuận gộp trừ chi phí hoạt động; trước lãi vay và thuế.'],
    accrual: ['Accrual accounting', 'Kế toán dồn tích', 'Ghi doanh thu khi thực hiện nghĩa vụ, chi phí khi phát sinh, không chờ thu chi tiền.'],
    ar: ['Accounts receivable', 'Phải thu khách hàng', 'Số tiền khách hàng còn nợ từ việc mua chịu.'],
    unearned: ['Unearned (deferred) revenue', 'Doanh thu chưa thực hiện', 'Tiền khách trả trước cho hàng hóa, dịch vụ chưa giao; là nợ phải trả.'],
    contract: ['Contract with a customer', 'Hợp đồng với khách hàng', 'Thỏa thuận tạo quyền và nghĩa vụ có hiệu lực, thanh toán rõ, khả năng thu tiền là có thể xảy ra.'],
    po: ['Performance obligation', 'Nghĩa vụ thực hiện', 'Cam kết chuyển giao một hàng hóa hoặc dịch vụ riêng biệt cho khách hàng.'],
    tp: ['Transaction price', 'Giá giao dịch', 'Số tiền doanh nghiệp kỳ vọng được hưởng khi chuyển giao hàng hóa, dịch vụ.'],
    variable: ['Variable consideration', 'Khoản thanh toán biến đổi', 'Phần giá có thể thay đổi (chiết khấu, thưởng, trả lại); chỉ ghi phần rất có khả năng không bị đảo ngược.'],
    ssp: ['Standalone selling price', 'Giá bán riêng lẻ', 'Giá doanh nghiệp bán riêng hàng hóa, dịch vụ đó; dùng để phân bổ giá giao dịch.'],
    refund: ['Refund liability', 'Nợ phải trả hoàn tiền', 'Phần tiền dự kiến phải hoàn lại cho khách, chưa được ghi là doanh thu.'],
    pa: ['Principal vs agent', 'Bên chính hay đại lý', 'Bên chính kiểm soát hàng trước khi giao và ghi doanh thu gộp; đại lý ghi thuần phần hoa hồng.'],
    ltc: ['Long-term contract', 'Hợp đồng dài hạn', 'Hợp đồng kéo dài nhiều kỳ, thường ghi nhận doanh thu theo tiến độ hoàn thành.'],
    franchise: ['Franchise', 'Nhượng quyền thương mại', 'Bên nhượng quyền thu phí ban đầu, phí bản quyền theo doanh số và bán hàng cho bên nhận quyền.'],
    bah: ['Bill-and-hold arrangement', 'Thỏa thuận giao hàng sau', 'Người bán xuất hóa đơn nhưng giữ hàng hộ khách; chỉ ghi doanh thu khi khách đã nắm quyền kiểm soát.'],
    cbal: ['Contract balances', 'Số dư hợp đồng', 'Tài sản hợp đồng (đã làm, chưa có quyền đòi tiền vô điều kiện) và nợ phải trả hợp đồng (đã thu tiền, chưa làm).'],
    matching: ['Matching principle', 'Nguyên tắc phù hợp', 'Ghi chi phí cùng kỳ với doanh thu mà chi phí đó giúp tạo ra.'],
    period: ['Period costs', 'Chi phí thời kỳ', 'Chi phí không gắn được với sản phẩm cụ thể, ghi ngay vào kỳ phát sinh.'],
    baddebt: ['Allowance for doubtful accounts', 'Dự phòng phải thu khó đòi', 'Ước tính phần phải thu không thu được, ghi chi phí ngay kỳ bán hàng.'],
    capitalize: ['Capitalization', 'Vốn hóa', 'Ghi khoản chi thành tài sản trên bảng cân đối rồi phân bổ dần thành chi phí ở các kỳ sau.'],
    capint: ['Capitalized interest', 'Lãi vay được vốn hóa', 'Lãi vay trong thời gian xây dựng tài sản đủ điều kiện, cộng vào nguyên giá thay vì ghi chi phí.'],
    rd: ['Research and development costs', 'Chi phí nghiên cứu và phát triển', 'IFRS: nghiên cứu ghi chi phí, phát triển vốn hóa khi đủ điều kiện; US GAAP: thường ghi chi phí cả hai.'],
    unusual: ['Unusual or infrequent items', 'Khoản bất thường hoặc không thường xuyên', 'Lãi lỗ trọng yếu bất thường về bản chất hoặc hiếm khi xảy ra; nằm trong hoạt động liên tục, trước thuế.'],
    discops: ['Discontinued operations', 'Hoạt động không tiếp tục', 'Mảng đã bán hoặc định bán, tách biệt về hoạt động và tài chính; trình bày riêng, sau thuế.'],
    policy: ['Change in accounting policy', 'Thay đổi chính sách kế toán', 'Đổi phương pháp kế toán; áp dụng hồi tố, trình bày lại kỳ trước.'],
    estimate: ['Change in accounting estimate', 'Thay đổi ước tính kế toán', 'Cập nhật ước tính theo thông tin mới; áp dụng phi hồi tố.'],
    basiceps: ['Basic EPS', 'EPS cơ bản', '(Lợi nhuận ròng - cổ tức ưu đãi) / số cổ phiếu phổ thông bình quân gia quyền.'],
    waso: ['Weighted average shares outstanding', 'Số cổ phiếu bình quân gia quyền', 'Số cổ phiếu lưu hành bình quân theo thời gian trong kỳ.'],
    stockdiv: ['Stock dividends and stock splits', 'Cổ tức bằng cổ phiếu, chia tách cổ phiếu', 'Tăng số cổ phiếu không thu tiền; điều chỉnh hồi tố cho cổ phiếu lưu hành trước sự kiện.'],
    simple: ['Simple capital structure', 'Cấu trúc vốn đơn giản', 'Không có chứng khoán có thể làm tăng số cổ phiếu phổ thông.'],
    complex: ['Complex capital structure', 'Cấu trúc vốn phức tạp', 'Có chứng khoán có thể pha loãng như ưu đãi chuyển đổi, trái phiếu chuyển đổi, quyền chọn.'],
    dileps: ['Diluted EPS', 'EPS pha loãng', 'EPS giả định mọi chứng khoán có tác dụng pha loãng đã được chuyển đổi hoặc thực hiện.'],
    ifconv: ['If-converted method', 'Phương pháp chuyển đổi giả định', 'Giả định chuyển đổi từ đầu kỳ: cộng lại cổ tức ưu đãi hoặc lãi sau thuế, cộng thêm cổ phiếu mới.'],
    tsm: ['Treasury stock method', 'Phương pháp cổ phiếu quỹ', 'Giả định thực hiện quyền chọn và dùng tiền thu được mua lại cổ phiếu theo giá bình quân.'],
    antidil: ['Antidilutive security', 'Chứng khoán chống pha loãng', 'Chứng khoán mà nếu đưa vào sẽ làm EPS tăng; bị loại khỏi EPS pha loãng.'],
    commonsize: ['Common-size income statement', 'Báo cáo KQKD quy mô chung', 'Mỗi dòng biểu diễn theo % doanh thu.'],
  };

  const practice = [
    { q: 'Một công ty bán giấy phép phần mềm (giao ngay, quyền sử dụng) kèm 2 năm hỗ trợ kỹ thuật với tổng giá 1.500. Giá bán riêng lẻ: giấy phép 1.200, hỗ trợ 400. Doanh thu năm 1 gần nhất với:', choices: ['1.312,50', '1.400,00', '1.500,00'], answer: 0, explain: 'Phân bổ 1.500 theo tỷ lệ 1.200 : 400: giấy phép 1.125, hỗ trợ 375. Năm 1 = 1.125 + 375/2 = 1.312,50. Lựa chọn 1.400,00 lấy giá bán riêng lẻ 1.200 + 200 mà không phân bổ phần giảm giá. Lựa chọn 1.500,00 ghi toàn bộ ngay, bỏ qua nghĩa vụ hỗ trợ chưa thực hiện.' },
    { q: 'Một nền tảng đặt phòng bán phòng khách sạn giá 200 và giữ lại hoa hồng 30; nền tảng không kiểm soát phòng trước khi khách nhận phòng. Doanh thu nền tảng ghi nhận cho giao dịch này là:', choices: ['200', '30', '170'], answer: 1, explain: 'Không kiểm soát dịch vụ trước khi chuyển giao nên là đại lý, ghi thuần phần hoa hồng 30. Con số 200 là cách ghi gộp của bên chính. Con số 170 là phần trả cho khách sạn, không phải doanh thu của nền tảng.' },
    { q: 'Hợp đồng xây dựng giá 20 triệu, ước tính ban đầu tổng chi phí 15 triệu. Năm 1 chi 6 triệu. Năm 2 chi thêm 6 triệu và ước tính tổng chi phí tăng lên 16 triệu. Tiến độ đo bằng chi phí. Doanh thu năm 2 là:', choices: ['8,0 triệu', '15,0 triệu', '7,0 triệu'], answer: 2, explain: 'Năm 1: 6/15 = 40%, doanh thu 8. Năm 2: tiến độ lũy kế 12/16 = 75%, doanh thu lũy kế 15, trừ 8 đã ghi còn 7. Lựa chọn 8,0 triệu dùng ước tính cũ 12/15 = 80% (16 - 8 = 8). Lựa chọn 15,0 triệu là doanh thu lũy kế, chưa trừ phần năm 1.' },
    { q: 'So với ghi chi phí ngay, việc vốn hóa một khoản chi trong năm phát sinh làm cho năm đó:', choices: ['Lợi nhuận ròng cao hơn và CFO cao hơn', 'Lợi nhuận ròng cao hơn nhưng CFO không đổi', 'Lợi nhuận ròng thấp hơn và CFO cao hơn'], answer: 0, explain: 'Vốn hóa chỉ ghi một phần nhỏ (khấu hao) vào chi phí nên lợi nhuận cao hơn; khoản chi được xếp vào CFI thay vì CFO nên CFO cao hơn. Phương án "CFO không đổi" quên rằng phân loại dòng tiền cũng thay đổi.' },
    { q: 'Theo US GAAP, chi phí phát triển một loại thuốc mới (không phải phần mềm) sau khi đã chứng minh khả thi kỹ thuật thường được:', choices: ['Vốn hóa thành tài sản vô hình', 'Ghi chi phí khi phát sinh', 'Vốn hóa nếu lợi ích tương lai có thể xảy ra'], answer: 1, explain: 'US GAAP ghi chi phí cả nghiên cứu và phát triển, ngoại lệ chủ yếu là phần mềm. Hai phương án vốn hóa mô tả cách làm của IFRS với chi phí phát triển.' },
    { q: 'Kết quả của một mảng kinh doanh đã được phân loại là hoạt động không tiếp tục được trình bày:', choices: ['Trong lợi nhuận hoạt động, trước thuế', 'Như một khoản mục bất thường (extraordinary item)', 'Sau lợi nhuận từ hoạt động liên tục, đã trừ thuế'], answer: 2, explain: 'Hoạt động không tiếp tục trình bày riêng, sau thuế, dưới lợi nhuận từ hoạt động liên tục. Trình bày trong lợi nhuận hoạt động, trước thuế là cách dành cho khoản bất thường hoặc không thường xuyên. Phương án "khoản mục bất thường" sai vì cả IFRS và US GAAP đều không còn khoản mục extraordinary.' },
    { q: 'Công ty quyết định kéo dài thời gian sử dụng ước tính của thiết bị từ 8 năm lên 10 năm. Thay đổi này được áp dụng:', choices: ['Phi hồi tố, cho kỳ hiện tại và các kỳ sau', 'Hồi tố, trình bày lại các kỳ trước', 'Như một khoản điều chỉnh sai sót kỳ trước'], answer: 0, explain: 'Đây là thay đổi ước tính kế toán, áp dụng phi hồi tố. Hồi tố dùng cho thay đổi chính sách kế toán và sửa sai sót. Không có sai sót nào ở đây, chỉ có thông tin mới.' },
    { q: 'Đầu năm có 1.000.000 cổ phiếu. Ngày 1/5 phát hành thêm 240.000. Ngày 1/10 chia tách 2 thành 1. Ngày 1/12 mua lại 120.000 cổ phiếu (sau chia tách). Số cổ phiếu bình quân gia quyền để tính EPS là:', choices: ['2.360.000', '2.310.000', '1.460.000'], answer: 1, explain: 'Chia tách điều chỉnh hồi tố: 1.000.000 × 2 + 240.000 × 2 × 8/12 - 120.000 × 1/12 = 2.000.000 + 320.000 - 10.000 = 2.310.000. Lựa chọn 2.360.000 quên tính theo thời gian. Lựa chọn 1.460.000 chỉ áp dụng chia tách từ ngày 1/10 thay vì hồi tố.' },
    { q: 'Lợi nhuận ròng 3,0 triệu, cổ tức ưu đãi (không chuyển đổi) 0,2 triệu, 1.000.000 cổ phiếu phổ thông. Có 100.000 quyền chọn giá thực hiện 40 (giá bình quân 50) và trái phiếu chuyển đổi mệnh giá 2 triệu, lãi 6%, đổi được 50.000 cổ phiếu; thuế suất 30%. EPS pha loãng gần nhất với:', choices: ['2,80', '2,51', '2,70'], answer: 2, explain: 'EPS cơ bản = 2,8/1 = 2,80. Quyền chọn: mua lại 4 triệu/50 = 80.000, tăng ròng 20.000. Trái phiếu: lãi sau thuế 0,084 triệu, 1,68 mỗi CP mới < 2,80 nên pha loãng. EPS pha loãng = 2,884/1,07 = 2,70. Lựa chọn 2,80 là EPS cơ bản. Lựa chọn 2,51 cộng cả 100.000 quyền chọn mà không mua lại cổ phiếu.' },
    { q: 'Công ty X có biên gộp 40% và biên hoạt động 12%; công ty Y có biên gộp 30% và biên hoạt động 14%. Nhận định đúng nhất:', choices: ['Chi phí hoạt động tính theo % doanh thu của X cao hơn Y', 'X có lợi nhuận hoạt động lớn hơn Y về số tuyệt đối', 'Y có sức mạnh định giá tốt hơn X'], answer: 0, explain: 'Chi phí hoạt động/doanh thu = biên gộp - biên hoạt động: X là 28%, Y là 16%. Nhận định X có lợi nhuận hoạt động lớn hơn thì không kết luận được vì không biết quy mô doanh thu. Nhận định Y có sức mạnh định giá tốt hơn sai vì biên gộp của X cao hơn, cho thấy X có sức mạnh định giá hoặc giá vốn tốt hơn.' },
    { q: "Ngày 1/10, một công ty nhận trước 120 cho gói thuê bao dịch vụ 12 tháng, cung cấp đều theo tháng. Năm tài chính kết thúc 31/12. Doanh thu ghi nhận trong năm là:", choices: ["30", "120", "90"], answer: 0, explain: "Dịch vụ được chuyển giao đều theo thời gian nên ghi doanh thu theo số tháng đã cung cấp: 120 × 3/12 = 30. Phần 90 còn lại là doanh thu chưa thực hiện (nợ phải trả), không phải doanh thu. Ghi 120 là ghi theo lúc thu tiền, trái với kế toán dồn tích." },
    { q: "Một công ty bán 2.000 sản phẩm, giá 25 mỗi sản phẩm, khách được quyền trả lại hàng. Kinh nghiệm cho thấy 4% sẽ bị trả lại. Doanh thu ghi nhận gần nhất với:", choices: ["50.000", "48.000", "2.000"], answer: 1, explain: "Khoản thanh toán biến đổi chỉ được ghi đến mức rất có khả năng không bị đảo ngược: 2.000 × 25 × 96% = 48.000. Phần 2.000 là nợ phải trả hoàn tiền (refund liability), không phải doanh thu. Ghi 50.000 là bỏ qua hàng dự kiến bị trả lại." },
    { q: "Theo IFRS 15 và ASC 606, trường hợp nào ghi nhận doanh thu theo thời gian (over time) thay vì tại một thời điểm?", choices: ["Bán hàng hóa tiêu chuẩn, quyền kiểm soát chuyển khi giao hàng", "Bán giấy phép phần mềm \"nguyên trạng\", cập nhật phải mua riêng", "Hợp đồng vệ sinh văn phòng hằng tháng, khách vừa nhận vừa tiêu dùng lợi ích khi dịch vụ được thực hiện"], answer: 2, explain: "Khách vừa nhận vừa tiêu dùng lợi ích khi doanh nghiệp thực hiện là một trong ba điều kiện ghi nhận theo thời gian. Hàng hóa tiêu chuẩn ghi tại thời điểm chuyển quyền kiểm soát. Giấy phép \"nguyên trạng\" là quyền sử dụng (right to use), ghi tại thời điểm giao." },
    { q: "Cuối kỳ, khách hàng đã trả tiền cho một lô hàng nhưng nhờ người bán giữ hộ trong kho. Lô hàng chưa được tách riêng, và người bán vẫn có thể dùng chính lô hàng đó để giao cho khách khác. Người bán nên:", choices: ["Chưa ghi nhận doanh thu vì khách chưa nắm quyền kiểm soát hàng", "Ghi nhận doanh thu vì khách đã thanh toán", "Ghi nhận doanh thu vì hàng đã sẵn sàng giao"], answer: 0, explain: "Với thỏa thuận bill-and-hold, chỉ ghi doanh thu trước khi giao nếu khách đã nắm quyền kiểm soát: hàng phải được tách riêng, xác định là của khách và người bán không thể dùng cho khách khác. Việc khách đã trả tiền hay hàng sẵn sàng giao là chưa đủ khi các điều kiện còn lại không thỏa." },
    { q: "Ngày 1/7, một chuỗi nhà hàng nhận 600.000 phí nhượng quyền ban đầu cho quyền kinh doanh 10 năm, và hưởng phí bản quyền 5% doanh số của bên nhận quyền. Từ 1/7 đến 31/12, doanh số bên nhận quyền là 2.000.000. Doanh thu bên nhượng quyền ghi nhận từ bên nhận quyền này trong năm là:", choices: ["700.000", "130.000", "160.000"], answer: 1, explain: "Phí ban đầu là quyền kinh doanh 10 năm nên phân bổ dần: 600.000/10 × 6/12 = 30.000. Phí bản quyền ghi khi doanh số phát sinh: 5% × 2.000.000 = 100.000. Tổng 130.000. Lựa chọn 700.000 ghi toàn bộ phí ban đầu ngay khi nhận tiền. Lựa chọn 160.000 phân bổ phí ban đầu cho cả năm dù hợp đồng chỉ bắt đầu từ 1/7." },
    { q: "Một nền tảng thương mại điện tử thực chất là đại lý (không kiểm soát hàng trước khi chuyển cho khách) nhưng lại trình bày doanh thu theo giá trị gộp. So với cách trình bày đúng, việc này làm:", choices: ["Doanh thu và lợi nhuận gộp cùng cao hơn", "Doanh thu không đổi nhưng biên lợi nhuận gộp cao hơn", "Doanh thu cao hơn, lợi nhuận gộp không đổi, biên lợi nhuận gộp thấp hơn"], answer: 2, explain: "Ghi gộp cộng cả giá trị hàng vào doanh thu và cộng cùng số đó vào giá vốn, nên lợi nhuận gộp không đổi nhưng doanh thu phình to và biên gộp nhỏ đi. Lựa chọn \"lợi nhuận gộp cao hơn\" sai vì doanh thu và chi phí tăng cùng một lượng. Lựa chọn \"doanh thu không đổi\" sai vì đó chính là khoản bị thổi phồng." },
    { q: "Nhà thầu ký hợp đồng xây dựng giá 10 triệu (một nghĩa vụ thực hiện, tiến độ đo bằng chi phí). Năm 1 chi 3 triệu, và cuối năm 1 ước tính tổng chi phí tăng lên 11 triệu. Khoản lỗ nhà thầu ghi nhận trong năm 1 là:", choices: ["1,0 triệu", "0,27 triệu", "0, vì lỗ chỉ ghi khi hợp đồng hoàn thành"], answer: 0, explain: "Khi hợp đồng dự kiến lỗ, toàn bộ khoản lỗ dự kiến phải ghi nhận ngay: 10 - 11 = -1,0 triệu. Con số 0,27 triệu là lỗ tính theo tiến độ (3/11 × 10 - 3), chỉ ghi phần lỗ tương ứng với tiến độ. Chờ đến khi hoàn thành mới ghi lỗ là sai nguyên tắc." },
    { q: "Công ty mua một máy giá 400.000, chi 15.000 vận chuyển, 20.000 lắp đặt và chạy thử, 8.000 đào tạo công nhân vận hành, và 5.000 bảo trì định kỳ trong năm đầu. Nguyên giá máy được vốn hóa là:", choices: ["443.000", "435.000", "448.000"], answer: 1, explain: "Vốn hóa mọi chi phí cần thiết để máy sẵn sàng hoạt động: 400.000 + 15.000 + 20.000 = 435.000. Đào tạo (8.000) và bảo trì định kỳ (5.000) không tạo lợi ích kinh tế mới nên ghi chi phí. Lựa chọn 443.000 vốn hóa nhầm chi phí đào tạo; 448.000 vốn hóa nhầm cả đào tạo và bảo trì." },
    { q: "Một công ty có EBIT 600, chi phí lãi vay trên báo cáo kết quả kinh doanh 100 và lãi vay đã vốn hóa vào nhà máy đang xây 50. Hệ số khả năng trả lãi (EBIT/lãi vay) mà nhà phân tích nên dùng gần nhất với:", choices: ["6,0", "5,5", "4,0"], answer: 2, explain: "Lãi vay vốn hóa vẫn là nghĩa vụ trả lãi thật, nên nhà phân tích cộng lại vào mẫu số: 600/(100 + 50) = 4,0. Con số 6,0 là hệ số báo cáo, bỏ qua lãi vay vốn hóa nên phóng đại khả năng trả lãi. Con số 5,5 trừ lãi vốn hóa khỏi tử số thay vì cộng vào mẫu số." },
    { q: "Theo IFRS, một công ty vay riêng để xây nhà máy tự dùng. Trong thời gian xây, lãi vay phát sinh là 800; công ty tạm gửi một phần tiền vay chưa dùng và thu lãi 120. Số lãi vay được vốn hóa vào nguyên giá nhà máy là:", choices: ["680", "800", "920"], answer: 0, explain: "Theo IFRS, lãi vay vốn hóa được trừ thu nhập từ việc tạm đầu tư tiền vay: 800 - 120 = 680. Con số 800 là cách xử lý thường gặp theo US GAAP, không trừ thu nhập đầu tư tạm thời. Con số 920 cộng nhầm thu nhập đầu tư thay vì trừ." },
    { q: "Lợi nhuận ròng 6.000.000; 1.500.000 cổ phiếu phổ thông lưu hành cả năm. Có 50.000 cổ phiếu ưu đãi chuyển đổi, cổ tức 4 mỗi cổ phiếu, mỗi cổ phiếu ưu đãi đổi được 2 cổ phiếu phổ thông. EPS pha loãng gần nhất với:", choices: ["3,87", "3,75", "3,63"], answer: 1, explain: "EPS cơ bản = (6.000.000 - 200.000)/1.500.000 = 3,87. Theo phương pháp if-converted, giả định chuyển đổi: không còn trả cổ tức ưu đãi nên tử số là 6.000.000, mẫu số cộng thêm 100.000 cổ phiếu: 6.000.000/1.600.000 = 3,75 (nhỏ hơn EPS cơ bản nên có tác dụng pha loãng). Con số 3,63 thêm cổ phiếu mới vào mẫu số nhưng quên cộng lại cổ tức ưu đãi vào tử số. Con số 3,87 là EPS cơ bản." },
    { q: "Chi phí tái cấu trúc phát sinh trong năm (công ty vẫn tiếp tục các mảng kinh doanh liên quan) được trình bày trên báo cáo kết quả kinh doanh:", choices: ["Sau lợi nhuận từ hoạt động liên tục, đã trừ thuế", "Như một khoản mục bất thường (extraordinary item) riêng biệt", "Trong lợi nhuận từ hoạt động liên tục, trước thuế, thường là một dòng riêng hoặc được thuyết minh"], answer: 2, explain: "Khoản bất thường hoặc không thường xuyên như tái cấu trúc nằm trong hoạt động liên tục, trước thuế. Trình bày sau thuế, dưới lợi nhuận từ hoạt động liên tục là cách dành cho hoạt động không tiếp tục. Khoản mục extraordinary không còn tồn tại: IFRS cấm, US GAAP đã bỏ từ năm 2015." },
    { q: "Lợi nhuận ròng 500 đã gồm khoản lãi sau thuế 60 từ một mảng hoạt động không tiếp tục. Trong hoạt động liên tục có khoản lỗ suy giảm giá trị 80 trước thuế mà nhà phân tích tin là chỉ xảy ra một lần. Thuế suất 20%. Lợi nhuận \"cốt lõi\" dùng để dự báo gần nhất với:", choices: ["520", "504", "564"], answer: 1, explain: "Lợi nhuận từ hoạt động liên tục = 500 - 60 = 440. Cộng lại phần sau thuế của khoản suy giảm một lần: 440 + 80 × (1 - 20%) = 504. Con số 520 cộng lại khoản lỗ trước thuế, quên ảnh hưởng thuế. Con số 564 quên loại khoản lãi từ hoạt động không tiếp tục, vốn không lặp lại." },
    { q: "Một công ty đổi phương pháp tính giá tồn kho từ FIFO sang bình quân gia quyền để phản ánh tốt hơn dòng hàng thực tế. Thay đổi này được áp dụng:", choices: ["Hồi tố, trình bày lại số liệu các kỳ trước để so sánh được", "Phi hồi tố, chỉ cho kỳ hiện tại và tương lai", "Ghi toàn bộ ảnh hưởng lũy kế vào lợi nhuận kỳ hiện tại như một khoản mục bất thường"], answer: 0, explain: "Đổi phương pháp tính giá tồn kho là thay đổi chính sách kế toán, áp dụng hồi tố để các kỳ được trình bày trên cùng cơ sở. Phi hồi tố là cách xử lý thay đổi ước tính kế toán (thời gian sử dụng, giá trị thanh lý). Khoản mục bất thường (extraordinary) không còn được dùng." },
    { q: "Đầu năm có 60.000 cổ phiếu. Ngày 1/3 mua lại 6.000 cổ phiếu. Ngày 1/10 phát hành thêm 12.000 cổ phiếu. Ngày 1/11 trả cổ tức bằng cổ phiếu 5%. Số cổ phiếu bình quân gia quyền gần nhất với:", choices: ["58.000", "69.300", "60.900"], answer: 2, explain: "Tính bình quân theo thời gian: 60.000 × 12/12 - 6.000 × 10/12 + 12.000 × 3/12 = 58.000. Cổ tức bằng cổ phiếu điều chỉnh hồi tố cho mọi cổ phiếu lưu hành trước ngày trả, ở đây là tất cả: 58.000 × 1,05 = 60.900. Con số 58.000 quên điều chỉnh cổ tức cổ phiếu. Con số 69.300 lấy số cổ phiếu cuối năm (66.000 × 1,05), bỏ qua thời gian lưu hành." },
    { q: "Lợi nhuận ròng 2.500.000, cổ tức ưu đãi 300.000, cổ tức phổ thông 400.000, số cổ phiếu phổ thông bình quân gia quyền 1.100.000. Công ty có cấu trúc vốn đơn giản. EPS cơ bản gần nhất với:", choices: ["1,64", "2,00", "2,27"], answer: 1, explain: "EPS cơ bản = (2.500.000 - 300.000)/1.100.000 = 2,00. Chỉ trừ cổ tức ưu đãi. Con số 1,64 trừ thêm cổ tức phổ thông, vốn là phần chia từ chính lợi nhuận thuộc cổ đông phổ thông. Con số 2,27 quên trừ cổ tức ưu đãi." },
    { q: "Lợi nhuận ròng 1.000.000, không có cổ phiếu ưu đãi, 500.000 cổ phiếu phổ thông lưu hành cả năm. Có trái phiếu chuyển đổi mệnh giá 5.000.000, lãi suất 8%, đổi được 100.000 cổ phiếu; thuế suất 25%. EPS pha loãng báo cáo gần nhất với:", choices: ["2,00", "2,17", "2,33"], answer: 0, explain: "EPS cơ bản = 1.000.000/500.000 = 2,00. Lãi sau thuế cộng lại = 5.000.000 × 8% × (1 - 25%) = 300.000, tức 3,00 cho mỗi cổ phiếu mới, lớn hơn 2,00 nên trái phiếu chống pha loãng và bị loại; EPS pha loãng báo cáo bằng 2,00. Con số 2,17 = 1.300.000/600.000 đưa nhầm chứng khoán chống pha loãng vào. Con số 2,33 vừa đưa vào vừa cộng lãi trước thuế." },
    { q: "Lợi nhuận dành cho cổ đông phổ thông 840.000; 400.000 cổ phiếu lưu hành cả năm. Có 60.000 chứng quyền giá thực hiện 25; giá thị trường bình quân trong năm 40, giá cuối năm 50. EPS pha loãng gần nhất với:", choices: ["1,83", "1,95", "1,99"], answer: 2, explain: "Phương pháp cổ phiếu quỹ dùng giá bình quân: cổ phiếu tăng thêm = 60.000 × (40 - 25)/40 = 22.500. EPS pha loãng = 840.000/422.500 = 1,99. Con số 1,95 dùng nhầm giá cuối năm (30.000 cổ phiếu tăng thêm). Con số 1,83 cộng toàn bộ 60.000 cổ phiếu, quên phần mua lại bằng tiền thu được." },
    { q: "Một công ty có cổ phiếu phổ thông và cổ phiếu ưu đãi không chuyển đổi, ngoài ra không có quyền chọn, chứng quyền hay trái phiếu chuyển đổi. Phát biểu nào chính xác nhất?", choices: ["Công ty có cấu trúc vốn phức tạp vì có cổ phiếu ưu đãi", "Công ty có cấu trúc vốn đơn giản và chỉ cần báo cáo EPS cơ bản", "EPS pha loãng thấp hơn EPS cơ bản vì cổ tức ưu đãi"], answer: 1, explain: "Cấu trúc vốn đơn giản là không có chứng khoán có thể chuyển thành cổ phiếu phổ thông; cổ phiếu ưu đãi không chuyển đổi không làm cấu trúc vốn thành phức tạp. Cổ tức ưu đãi được trừ ở tử số của EPS cơ bản, không tạo ra khác biệt giữa EPS cơ bản và pha loãng." },
    { q: "Một công ty có doanh thu 8.000, giá vốn 5.200, chi phí bán hàng và quản lý 1.400, chi phí lãi vay 200, thuế suất 25%. Biên lợi nhuận ròng gần nhất với:", choices: ["17,50%", "15,00%", "11,25%"], answer: 2, explain: "Lợi nhuận trước thuế = 8.000 - 5.200 - 1.400 - 200 = 1.200; lợi nhuận ròng = 1.200 × 75% = 900; biên ròng = 900/8.000 = 11,25%. Con số 17,50% là biên lợi nhuận hoạt động (1.400/8.000). Con số 15,00% là biên trước thuế (1.200/8.000), quên trừ thuế." },
  ];

  window.LESSONS['FSA-02'] = {
    moduleId: 'FSA-02',
    calculator: 'BA II Plus',
    warmup: [
      'Ôn FSA-01: thuyết minh và MD&A, phần nào được kiểm toán?',
      'Bạn mua gói Netflix 1 năm và trả tiền ngay hôm nay. Theo bạn, Netflix nên ghi doanh thu hôm nay hay chia đều 12 tháng?',
      'Một công ty báo lãi ròng tăng 50% nhờ bán một tòa nhà. Bạn có dùng con số này để dự báo năm sau không?',
    ],
    sections,
    glossary,
    practice,
    widgets: {},
    slides: [],
    wrapup: [
      'Viết lại 5 bước ghi nhận doanh thu và áp dụng cho tình huống điện thoại kèm gói bảo hành.',
      'Giải thích vì sao vốn hóa làm CFO cao hơn nhưng không làm tổng tiền cả vòng đời thay đổi.',
      'Tự đặt một ví dụ có cả quyền chọn và trái phiếu chuyển đổi, tính EPS cơ bản và pha loãng.',
    ],
  };
}());
