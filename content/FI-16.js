// Bài giảng FI-16 - Credit Analysis for Corporate Issuers (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t, frac } = window.CFAH;

  const sections = [
    {
      title: '1. Bức tranh lớn: ba câu hỏi về một doanh nghiệp đi vay',
      minutes: 4,
      html: `
<p>FI-14 cho bạn khung expected loss = POD × LGD. Module này cho bạn công cụ để <b>ước lượng</b> hai thành phần đó với một doanh nghiệp cụ thể:</p>
<ol>
  <li><b>Doanh nghiệp có tạo ra đủ tiền để trả nợ không?</b> Phân tích định tính (mô hình kinh doanh, ngành, rủi ro kinh doanh, quản trị) và định lượng (lợi nhuận, đòn bẩy, khả năng trả lãi). Ứng với LOS 1 và LOS 2, quyết định chủ yếu <b>POD</b>.</li>
  <li><b>Nếu vỡ nợ, khoản nợ của tôi đứng ở đâu trong hàng chờ?</b> Thứ tự ưu tiên, tài sản bảo đảm. Ứng với LOS 3, quyết định chủ yếu <b>LGD</b>.</li>
  <li><b>Điều đó thể hiện thế nào trên xếp hạng?</b> Issuer rating và notching cho từng khoản nợ. Cũng thuộc LOS 3.</li>
</ol>
<p class="tip"><b>Liên hệ khung truyền thống "4C":</b> ${t('fourc', 'Capacity, Capital, Collateral, Covenants')} (nhiều tài liệu thêm Character). Khung của chương trình 2027 bao trùm các ý này: capacity và character nằm trong phân tích định tính và tỷ số khả năng trả nợ; capital là đòn bẩy; collateral là seniority và tài sản bảo đảm; covenants là điều khoản hợp đồng bảo vệ chủ nợ (đã học ở FI-01).</p>`,
    },
    {
      title: '2. Các yếu tố định tính (LOS 1)',
      minutes: 10,
      html: `
<table class="plain"><thead><tr><th>Yếu tố</th><th>Câu hỏi then chốt</th><th>Dấu hiệu tín dụng tốt</th></tr></thead><tbody>
<tr><td>${t('bizmodel', 'Mô hình kinh doanh (business model)')}</td><td>Doanh nghiệp kiếm tiền bằng cách nào? Mô hình có bền vững, có thể mở rộng không?</td><td>Dễ hiểu, đã được kiểm chứng, dòng tiền ổn định</td></tr>
<tr><td>${t('industry', 'Cạnh tranh trong ngành')}</td><td>Ngành có rào cản gia nhập, sức mạnh mặc cả với nhà cung cấp và khách hàng thế nào? (5 lực lượng của Porter)</td><td>Cạnh tranh vừa phải, vị thế dẫn đầu, rào cản cao</td></tr>
<tr><td>${t('bizrisk', 'Rủi ro kinh doanh')}</td><td>Doanh thu có theo chu kỳ không? Có định kỳ (recurring) không? Có phụ thuộc vài khách hàng hoặc một sản phẩm không?</td><td>Doanh thu định kỳ, đa dạng, ít nhạy với chu kỳ</td></tr>
<tr><td>${t('governance', 'Quản trị doanh nghiệp')}</td><td>Ban lãnh đạo có năng lực, minh bạch, đối xử công bằng với chủ nợ không? Chính sách kế toán thận trọng hay "tích cực" (aggressive)?</td><td>Lịch sử tốt, kế toán thận trọng, không ưu tiên cổ đông bằng mọi giá</td></tr>
</tbody></table>
<div class="key">Chủ nợ và cổ đông có lợi ích không giống nhau. Cổ đông thích tăng trưởng nhanh và mua lại cổ phiếu bằng vay nợ; chủ nợ chỉ được nhận lãi và gốc, nên ưu tiên <b>sự ổn định và khả năng trả nợ</b>.</div>
<p class="warn"><b>Dấu hiệu cảnh báo (red flags):</b> ghi nhận doanh thu sớm, vốn hóa chi phí bất thường, thay đổi kiểm toán viên, giao dịch với bên liên quan, ban lãnh đạo thay đổi liên tục, chi trả cổ tức hoặc mua lại cổ phiếu vượt dòng tiền.</p>`,
    },
    {
      title: '3. Các tỷ số tài chính trong phân tích tín dụng (LOS 2)',
      minutes: 16,
      html: `
<p>Ba nhóm tỷ số, mỗi nhóm trả lời một câu hỏi:</p>
<table class="plain"><thead><tr><th>Nhóm</th><th>Tỷ số</th><th>Tốt cho chủ nợ khi</th></tr></thead><tbody>
<tr><td>${t('profit', 'Lợi nhuận (profitability)')}</td><td>EBIT margin = EBIT / doanh thu</td><td>Cao và ổn định</td></tr>
<tr><td rowspan="4">${t('leverage', 'Đòn bẩy (leverage)')}</td><td>Debt / EBITDA</td><td>Thấp</td></tr>
<tr><td>Net debt / EBITDA = (nợ - tiền) / EBITDA</td><td>Thấp</td></tr>
<tr><td>${t('ffo', 'FFO')} / debt</td><td>Cao</td></tr>
<tr><td>Debt / capital = nợ / (nợ + vốn chủ sở hữu)</td><td>Thấp</td></tr>
<tr><td rowspan="2">${t('coverage', 'Khả năng trả lãi (coverage)')}</td><td>EBIT / interest expense</td><td>Cao</td></tr>
<tr><td>EBITDA / interest expense</td><td>Cao</td></tr>
</tbody></table>
<p>FFO (funds from operations) ≈ lợi nhuận ròng từ hoạt động liên tục + khấu hao + các khoản phi tiền mặt khác. Đây là dòng tiền "thô" trước thay đổi vốn lưu động.</p>
<p class="warn"><b>Bẫy chiều tốt xấu:</b> với Debt/EBITDA và Debt/capital, <b>thấp</b> là tốt. Với FFO/debt và các tỷ số coverage, <b>cao</b> là tốt. Đề hay đảo chiều để gài.</p>

<div class="example"><div class="ex-h">Ví dụ 3.1 - So sánh hai doanh nghiệp (triệu USD, thuế 25%)</div>
<table class="plain"><thead><tr><th></th><th>Công ty X</th><th>Công ty Y</th></tr></thead><tbody>
<tr><td>Doanh thu</td><td>2.000</td><td>1.500</td></tr>
<tr><td>EBITDA</td><td>400</td><td>180</td></tr>
<tr><td>Khấu hao</td><td>100</td><td>60</td></tr>
<tr><td>Chi phí lãi vay</td><td>60</td><td>45</td></tr>
<tr><td>Tổng nợ</td><td>1.200</td><td>900</td></tr>
<tr><td>Tiền mặt</td><td>200</td><td>50</td></tr>
<tr><td>Vốn chủ sở hữu</td><td>1.300</td><td>600</td></tr>
</tbody></table>
<details><summary>Xem lời giải</summary>
<p>EBIT: X = 400 - 100 = 300; Y = 180 - 60 = 120. Lợi nhuận ròng: X = (300 - 60) × 75% = 180; Y = (120 - 45) × 75% = 56,25. FFO ≈ lợi nhuận ròng + khấu hao: X = 280; Y = 116,25.</p>
<table class="plain"><thead><tr><th>Tỷ số</th><th>X</th><th>Y</th><th>Tốt hơn</th></tr></thead><tbody>
<tr><td>EBIT margin</td><td>15,0%</td><td>8,0%</td><td>X</td></tr>
<tr><td>Debt / EBITDA</td><td>3,00x</td><td>5,00x</td><td>X</td></tr>
<tr><td>Net debt / EBITDA</td><td>2,50x</td><td>4,72x</td><td>X</td></tr>
<tr><td>FFO / debt</td><td>23,3%</td><td>12,9%</td><td>X</td></tr>
<tr><td>Debt / capital</td><td>48,0%</td><td>60,0%</td><td>X</td></tr>
<tr><td>EBIT / interest</td><td>5,00x</td><td>2,67x</td><td>X</td></tr>
<tr><td>EBITDA / interest</td><td>6,67x</td><td>4,00x</td><td>X</td></tr>
</tbody></table>
<p>X tốt hơn ở mọi tỷ số, nên nhiều khả năng có POD thấp hơn và xếp hạng cao hơn Y. Y với Debt/EBITDA 5x và EBIT/interest dưới 3x mang đặc điểm thường thấy ở doanh nghiệp high yield.</p></details></div>
<p class="tip"><b>Cách dùng tỷ số đúng:</b> so sánh với <b>doanh nghiệp cùng ngành</b> và với <b>xu hướng của chính doanh nghiệp</b> qua thời gian. Tổ chức xếp hạng thường điều chỉnh số liệu (ví dụ cộng nợ thuê vào tổng nợ) trước khi tính, nên tỷ số tự tính có thể khác tỷ số họ công bố.</p>`,
    },
    {
      title: '4. Seniority và thứ tự ưu tiên khi phá sản (LOS 3)',
      minutes: 12,
      html: `
<p>${t('seniority', 'Seniority ranking')} quyết định ai được trả trước khi doanh nghiệp vỡ nợ và tài sản được thanh lý hoặc tái cơ cấu. Từ ưu tiên cao xuống thấp:</p>
<ol>
  <li><b>${t('secured', 'Secured debt')}</b>: first lien (thế chấp thứ nhất) → second lien. Có quyền với tài sản bảo đảm cụ thể.</li>
  <li><b>${t('unsecured', 'Unsecured debt')}</b>: senior unsecured → senior subordinated → subordinated → junior subordinated.</li>
  <li>Cổ phiếu ưu đãi, rồi cổ phiếu phổ thông (chủ sở hữu, xếp cuối cùng).</li>
</ol>
<div class="key">${t('apr', 'Absolute priority rule')}: hạng trên phải được trả đủ thì hạng dưới mới được nhận. Các khoản nợ <b>cùng hạng</b> (pari passu) chia theo tỷ lệ.</div>

<div class="example"><div class="ex-h">Ví dụ 4.1 - Chia tài sản khi phá sản</div>
<p>Công ty phá sản, giá trị tài sản còn lại 500 triệu USD. Các khoản nợ: first lien 300, senior unsecured 400, subordinated 250. Tính tỷ lệ thu hồi của từng hạng.</p>
<details><summary>Xem lời giải</summary>
<p>First lien: nhận đủ 300, thu hồi <b>100%</b>. Còn lại 500 - 300 = 200.<br>
Senior unsecured: nhận 200 trên 400, thu hồi <b>50%</b>. Còn lại 0.<br>
Subordinated: thu hồi <b>0%</b>. Cổ đông không nhận gì.</p>
<p>Cùng một POD (cùng công ty), nhưng LGD rất khác nhau theo hạng. Đó là lý do trái phiếu subordinated có spread cao hơn.</p></details></div>
<p class="warn"><b>Thực tế không luôn theo quy tắc:</b> trong tái cơ cấu có thương lượng (ví dụ Chapter 11 ở Mỹ), các hạng thấp hơn và cả cổ đông đôi khi vẫn nhận được một phần để đồng ý phương án, dù hạng trên chưa được trả đủ. Thủ tục phá sản kéo dài, tốn chi phí, và giá trị tài sản bảo đảm có thể thấp hơn kỳ vọng.</p>
<p class="tip"><b>Secured không có nghĩa là an toàn tuyệt đối:</b> nếu tài sản bảo đảm mất giá (ví dụ nhà máy chuyên dụng khó bán), phần thiếu hụt của khoản nợ secured trở thành nợ unsecured.</p>`,
    },
    {
      title: '5. Issuer rating, issue rating và notching',
      minutes: 8,
      html: `
<p>${t('cfr', 'Issuer rating / corporate family rating (CFR)')} thể hiện khả năng vỡ nợ chung của doanh nghiệp và thường áp dụng cho <b>nợ senior unsecured</b>. Từng khoản nợ được xếp hạng riêng (issue rating) bằng cách ${t('notching', 'notching')}: nâng lên nếu có tài sản bảo đảm, hạ xuống nếu là nợ thứ cấp.</p>
<table class="plain"><thead><tr><th>Issuer rating</th><th>Mức notching</th><th>Lý do</th></tr></thead><tbody>
<tr><td>Investment grade</td><td>Ít (thường 0 đến 1 bậc)</td><td>POD thấp, nên khác biệt về recovery ít ảnh hưởng đến expected loss</td></tr>
<tr><td>High yield</td><td>Nhiều hơn (có thể 2 bậc trở lên)</td><td>POD cao, recovery quyết định nhiều đến expected loss</td></tr>
</tbody></table>
<div class="example"><div class="ex-h">Ví dụ 5.1</div>
<p>Một doanh nghiệp có CFR BB. Trái phiếu senior secured có thể được xếp BB+ hoặc BBB-, trái phiếu subordinated có thể bị xếp B+ hoặc B. Với một doanh nghiệp có CFR A, trái phiếu subordinated thường chỉ bị hạ một bậc xuống A-.</p></div>
<h4>${t('structsub', 'Structural subordination')}</h4>
<p>Khi doanh nghiệp có cấu trúc công ty mẹ (holding) và công ty con hoạt động, dòng tiền nằm ở công ty con. Chủ nợ của <b>công ty con</b> được trả từ tài sản công ty con trước; chủ nợ của <b>công ty mẹ</b> chỉ nhận phần còn lại (qua cổ tức từ công ty con). Vì vậy nợ của công ty mẹ, dù ghi là senior, thực chất <b>đứng sau</b> nợ của công ty con và có thể bị notching xuống.</p>
<div class="key">Seniority cao → LGD thấp → issue rating cao hơn (hoặc bằng) issuer rating.<br>Seniority thấp hoặc structural subordination → LGD cao → issue rating thấp hơn.</div>`,
    },
    {
      title: '6. Tóm tắt và bẫy thường gặp',
      minutes: 5,
      html: `
<table class="plain"><thead><tr><th>Tình huống</th><th>Nhớ</th></tr></thead><tbody>
<tr><td>Định tính</td><td>Mô hình kinh doanh, cạnh tranh ngành, rủi ro kinh doanh, quản trị (gồm chính sách kế toán)</td></tr>
<tr><td>Lợi nhuận</td><td>EBIT margin: cao là tốt</td></tr>
<tr><td>Đòn bẩy</td><td>Debt/EBITDA, debt/capital: thấp là tốt; FFO/debt: cao là tốt</td></tr>
<tr><td>Coverage</td><td>EBIT/interest, EBITDA/interest: cao là tốt</td></tr>
<tr><td>Thứ tự ưu tiên</td><td>First lien → second lien → senior unsecured → subordinated → cổ phiếu ưu đãi → cổ phiếu phổ thông</td></tr>
<tr><td>Absolute priority rule</td><td>Hạng trên trả đủ mới đến hạng dưới; thực tế tái cơ cấu có thể lệch</td></tr>
<tr><td>CFR</td><td>Áp dụng cho nợ senior unsecured</td></tr>
<tr><td>Notching</td><td>Ít với investment grade, nhiều hơn với high yield</td></tr>
<tr><td>Structural subordination</td><td>Nợ công ty mẹ đứng sau nợ công ty con</td></tr>
</tbody></table>
<p>Tiếp theo: tab <b>Luyện tập</b> 10 câu. Module tiếp theo của topic là FI-17 Securitization.</p>`,
    },
  ];

  const glossary = {
    fourc: ['Four Cs of credit analysis', '4C trong phân tích tín dụng', 'Capacity (khả năng trả), Capital (vốn), Collateral (tài sản bảo đảm), Covenants (điều khoản); đôi khi thêm Character (tư cách).'],
    bizmodel: ['Business model', 'Mô hình kinh doanh', 'Cách doanh nghiệp tạo ra doanh thu và dòng tiền.'],
    industry: ['Industry competition', 'Cạnh tranh trong ngành', 'Mức độ cạnh tranh, rào cản gia nhập, sức mạnh mặc cả; phân tích bằng 5 lực lượng của Porter.'],
    bizrisk: ['Business risk', 'Rủi ro kinh doanh', 'Biến động của doanh thu và dòng tiền do chu kỳ, tập trung khách hàng, sản phẩm.'],
    governance: ['Corporate governance', 'Quản trị doanh nghiệp', 'Năng lực và tính minh bạch của ban lãnh đạo, chính sách kế toán, đối xử với các bên có quyền lợi.'],
    profit: ['Profitability', 'Khả năng sinh lời', 'Đo bằng EBIT margin; lợi nhuận cao và ổn định giảm khả năng vỡ nợ.'],
    leverage: ['Leverage ratios', 'Tỷ số đòn bẩy', 'Debt/EBITDA, net debt/EBITDA, FFO/debt, debt/capital: đo mức nợ so với khả năng tạo tiền hoặc vốn.'],
    ffo: ['Funds from operations (FFO)', 'Dòng tiền từ hoạt động', 'Lợi nhuận ròng từ hoạt động liên tục cộng khấu hao và các khoản phi tiền mặt khác.'],
    coverage: ['Coverage ratios', 'Tỷ số khả năng trả lãi', 'EBIT/interest, EBITDA/interest: lợi nhuận gấp bao nhiêu lần chi phí lãi vay.'],
    seniority: ['Seniority ranking', 'Thứ tự ưu tiên', 'Thứ tự được thanh toán của các khoản nợ khi doanh nghiệp phá sản.'],
    secured: ['Secured debt', 'Nợ có bảo đảm', 'Nợ có quyền với tài sản bảo đảm cụ thể (first lien, second lien).'],
    unsecured: ['Unsecured debt', 'Nợ không có bảo đảm', 'Nợ chỉ có quyền chung với tài sản còn lại của doanh nghiệp; gồm senior unsecured và subordinated.'],
    apr: ['Absolute priority rule', 'Quy tắc ưu tiên tuyệt đối', 'Hạng ưu tiên cao phải được trả đủ trước khi hạng thấp hơn nhận bất cứ thứ gì.'],
    cfr: ['Corporate family rating (CFR) / issuer rating', 'Xếp hạng tổ chức phát hành', 'Xếp hạng khả năng vỡ nợ chung, thường gắn với nợ senior unsecured.'],
    notching: ['Notching', 'Điều chỉnh bậc', 'Nâng hoặc hạ issue rating so với issuer rating theo seniority và tài sản bảo đảm.'],
    structsub: ['Structural subordination', 'Thứ cấp do cấu trúc', 'Nợ của công ty mẹ đứng sau nợ của công ty con vì tài sản và dòng tiền nằm ở công ty con.'],
  };

  const practice = [
    { q: 'Yếu tố định tính nào sau đây hỗ trợ khả năng tín dụng cao của một doanh nghiệp?', choices: ['Ngành cạnh tranh gay gắt, rào cản gia nhập thấp', 'Chính sách kế toán tích cực (aggressive)', 'Doanh thu định kỳ, ổn định từ nhiều khách hàng'], answer: 2, explain: 'Doanh thu định kỳ và đa dạng làm giảm rủi ro kinh doanh. Ngành cạnh tranh gay gắt làm biên lợi nhuận và dòng tiền kém ổn định. Chính sách kế toán tích cực là dấu hiệu cảnh báo về quản trị.' },
    { q: 'Doanh nghiệp có tổng nợ 1.800, tiền mặt 300, EBITDA 450, EBIT 330, chi phí lãi 90. Debt/EBITDA gần nhất với:', choices: ['4,00x', '3,33x', '5,45x'], answer: 0, explain: '1.800 / 450 = 4,00x. Lựa chọn 3,33x là net debt/EBITDA = 1.500 / 450. Lựa chọn 5,45x dùng EBIT thay vì EBITDA ở mẫu.' },
    { q: 'Doanh nghiệp có tổng nợ 1.800, tiền mặt 300, EBITDA 450, EBIT 330, chi phí lãi 90. EBIT/interest expense gần nhất với:', choices: ['5,00x', '3,67x', '0,27x'], answer: 1, explain: '330 / 90 = 3,67x. Lựa chọn 5,00x là EBITDA/interest. Lựa chọn 0,27x đảo ngược tử và mẫu.' },
    { q: 'Tỷ số nào sau đây là tỷ số đòn bẩy?', choices: ['EBIT margin', 'Debt / EBITDA', 'EBIT / interest expense'], answer: 1, explain: 'Debt/EBITDA đo mức nợ so với khả năng tạo tiền, thuộc nhóm đòn bẩy. EBIT margin là tỷ số lợi nhuận. EBIT / interest expense là tỷ số khả năng trả lãi (coverage).' },
    { q: 'Khoản nợ nào có thứ tự ưu tiên cao nhất khi doanh nghiệp phá sản?', choices: ['First lien loan', 'Senior unsecured bond', 'Subordinated bond'], answer: 0, explain: 'First lien có quyền đầu tiên với tài sản bảo đảm. Senior unsecured đứng sau nợ có bảo đảm; subordinated đứng sau senior unsecured.' },
    { q: 'Doanh nghiệp phá sản với giá trị tài sản 420. Nợ: first lien 200, senior unsecured 300, subordinated 100. Theo absolute priority rule, tỷ lệ thu hồi của senior unsecured gần nhất với:', choices: ['70,0%', '55,0%', '73,3%'], answer: 2, explain: 'First lien nhận đủ 200, còn 220 cho senior unsecured: 220 / 300 = 73,3%; subordinated nhận 0. Lựa chọn 70,0% chia đều cho mọi chủ nợ (420 / 600). Lựa chọn 55,0% coi senior unsecured và subordinated là cùng hạng (220 / 400).' },
    { q: 'Phát biểu nào về notching là đúng nhất?', choices: ['Notching chỉ áp dụng cho trái phiếu chính phủ', 'Notching giữa các hạng nợ thường lớn hơn với doanh nghiệp xếp hạng high yield', 'Nợ subordinated luôn được xếp cao hơn issuer rating'], answer: 1, explain: 'Với doanh nghiệp high yield, POD cao nên khác biệt về recovery giữa các hạng nợ ảnh hưởng mạnh đến expected loss, vì vậy notching nhiều hơn. Phương án "chỉ áp dụng cho trái phiếu chính phủ" sai: notching áp dụng cho nợ doanh nghiệp. Phương án "subordinated luôn được xếp cao hơn" sai: subordinated thường bị hạ.' },
    { q: 'Một tập đoàn có trái phiếu senior unsecured phát hành ở công ty mẹ (holding), trong khi các công ty con hoạt động có khoản vay ngân hàng riêng. So với khoản vay của công ty con, trái phiếu của công ty mẹ:', choices: ['có ưu tiên cao hơn vì là nợ senior', 'có cùng thứ tự ưu tiên vì cùng một tập đoàn', 'đứng sau do structural subordination'], answer: 2, explain: 'Tài sản và dòng tiền nằm ở công ty con; chủ nợ công ty con được trả trước, công ty mẹ chỉ nhận phần còn lại. Chữ "senior" chỉ có nghĩa trong phạm vi nợ của chính công ty mẹ, nên hai phương án "ưu tiên cao hơn" và "cùng thứ tự ưu tiên" đều sai.' },
    { q: 'Công ty A: EBIT/interest 6,0x, Debt/EBITDA 2,5x. Công ty B: EBIT/interest 3,0x, Debt/EBITDA 3,6x. Cùng ngành. Kết luận hợp lý nhất:', choices: ['A có khả năng tín dụng tốt hơn, vì coverage cao hơn và đòn bẩy thấp hơn', 'B có khả năng tín dụng tốt hơn, vì Debt/EBITDA cao hơn', 'Không so sánh được vì hai tỷ số cho kết luận trái ngược'], answer: 0, explain: 'Coverage cao là tốt và Debt/EBITDA thấp là tốt; công ty A tốt hơn ở cả hai. Phương án cho rằng B tốt hơn hiểu ngược chiều Debt/EBITDA. Phương án "không so sánh được" sai vì hai tỷ số cùng chỉ về công ty A.' },
    { q: 'Corporate family rating (CFR) thường áp dụng cho loại nợ nào của doanh nghiệp?', choices: ['Nợ có bảo đảm first lien', 'Nợ senior unsecured', 'Cổ phiếu ưu đãi'], answer: 1, explain: 'Issuer rating / CFR phản ánh khả năng vỡ nợ chung và thường gắn với nợ senior unsecured; các khoản nợ khác được notching từ mốc này. Nợ first lien thường được nâng bậc; cổ phiếu ưu đãi không phải nợ.' },
  ];

  window.LESSONS['FI-16'] = {
    moduleId: 'FI-16',
    calculator: 'BA II Plus',
    warmup: [
      'Ôn FI-14: POD gắn với người vay hay khoản nợ? LGD thì sao?',
      'Ôn FSA: EBITDA khác EBIT ở khoản nào?',
      'Đoán trước: nếu bạn là ngân hàng cho vay, bạn sẽ hỏi doanh nghiệp những câu gì trước khi giải ngân?',
    ],
    sections,
    glossary,
    practice,
    widgets: {},
    slides: [],
    wrapup: [
      'Viết 7 tỷ số tín dụng và đánh dấu tỷ số nào cao là tốt, tỷ số nào thấp là tốt.',
      'Vẽ "hàng chờ" thứ tự ưu tiên khi phá sản, từ first lien đến cổ phiếu phổ thông.',
      'Giải thích vì sao notching nhiều hơn với doanh nghiệp high yield.',
    ],
  };
}());
