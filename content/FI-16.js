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
<p>Tiếp theo: tab <b>Luyện tập</b> 10 câu (rút ngẫu nhiên từ ngân hàng 30 câu, mỗi lần làm một bộ khác). Module tiếp theo của topic là FI-17 Securitization.</p>`,
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
    { q: 'Dấu hiệu nào sau đây là dấu hiệu cảnh báo (red flag) về quản trị khi phân tích tín dụng doanh nghiệp?', choices: ['Công ty thay đổi kiểm toán viên ba lần trong bốn năm', 'Công ty chi trả cổ tức ổn định thấp hơn dòng tiền tự do', 'Công ty ghi nhận doanh thu khi đã giao hàng và chuyển quyền kiểm soát'], answer: 0, explain: 'Thay đổi kiểm toán viên liên tục là dấu hiệu cảnh báo kinh điển về chất lượng báo cáo và quản trị. Cổ tức thấp hơn dòng tiền tự do cho thấy chính sách thận trọng, có lợi cho chủ nợ. Ghi nhận doanh thu khi chuyển quyền kiểm soát là thông lệ chuẩn, không phải ghi nhận sớm.' },
    { q: 'Ban lãnh đạo công ty vay thêm nợ để mua lại cổ phiếu quy mô lớn. Từ góc độ chủ nợ hiện hữu, quyết định này nhiều khả năng:', choices: ['có lợi vì giá cổ phiếu tăng làm công ty an toàn hơn', 'bất lợi vì đòn bẩy tăng mà dòng tiền không tăng', 'không ảnh hưởng vì chủ nợ chỉ quan tâm đến lãi suất coupon'], answer: 1, explain: 'Chủ nợ và cổ đông có lợi ích khác nhau: mua lại cổ phiếu bằng vay nợ chuyển giá trị cho cổ đông, làm đòn bẩy tăng và khả năng trả nợ giảm, nên POD tăng. Phương án "có lợi vì giá cổ phiếu tăng" nhìn từ góc độ cổ đông. Phương án "không ảnh hưởng" sai: rủi ro tín dụng tăng làm giá trái phiếu hiện hữu giảm.' },
    { q: 'Một nhà cung cấp linh kiện có 60% doanh thu đến từ một khách hàng duy nhất. Khi đánh giá tín dụng, đặc điểm này chủ yếu làm tăng:', choices: ['rủi ro kinh doanh', 'đòn bẩy tài chính', 'khả năng trả lãi'], answer: 0, explain: 'Phụ thuộc vào một khách hàng là rủi ro kinh doanh (yếu tố định tính): mất khách hàng đó thì doanh thu giảm mạnh. Đòn bẩy tài chính đo bằng nợ so với EBITDA hoặc vốn, không trực tiếp do cơ cấu khách hàng. Khả năng trả lãi không "tăng" do rủi ro này; nếu có thì nó bị đe dọa.' },
    { q: 'Trong khung "4C" truyền thống của phân tích tín dụng, "Capital" tương ứng nhất với nội dung nào của chương trình 2027?', choices: ['Seniority và tài sản bảo đảm', 'Điều khoản hợp đồng bảo vệ chủ nợ', 'Đòn bẩy, tức mức nợ so với vốn và khả năng tạo tiền'], answer: 2, explain: 'Capital là cấu trúc vốn và mức đòn bẩy. Seniority và tài sản bảo đảm tương ứng với Collateral. Điều khoản hợp đồng bảo vệ chủ nợ tương ứng với Covenants.' },
    { q: 'Đặc điểm ngành nào sau đây hỗ trợ khả năng tín dụng của doanh nghiệp dẫn đầu ngành?', choices: ['Rào cản gia nhập thấp và nhiều đối thủ mới', 'Rào cản gia nhập cao và sức mạnh mặc cả mạnh với nhà cung cấp', 'Khách hàng tập trung, có sức mạnh mặc cả lớn về giá'], answer: 1, explain: 'Theo 5 lực lượng của Porter, rào cản gia nhập cao và sức mạnh mặc cả với nhà cung cấp giúp duy trì biên lợi nhuận và dòng tiền ổn định. Rào cản thấp và nhiều đối thủ mới làm biên lợi nhuận bị bào mòn. Khách hàng có sức mạnh mặc cả lớn ép giá, làm dòng tiền kém ổn định.' },
    { q: 'Doanh nghiệp có doanh thu 3.200, EBITDA 640 và khấu hao 160 (triệu USD). EBIT margin gần nhất với:', choices: ['20,0%', '75,0%', '15,0%'], answer: 2, explain: 'EBIT = 640 - 160 = 480; EBIT margin = 480 / 3.200 = 15,0%. Lựa chọn 20,0% là EBITDA margin (640 / 3.200), chưa trừ khấu hao. Lựa chọn 75,0% là EBIT / EBITDA, dùng sai mẫu số.' },
    { q: 'Doanh nghiệp có lợi nhuận ròng từ hoạt động liên tục 150, khấu hao 90, các khoản phi tiền mặt khác (thuế hoãn lại) 20 và tổng nợ 1.040 (triệu USD). FFO/debt gần nhất với:', choices: ['25,0%', '23,1%', '14,4%'], answer: 0, explain: 'FFO = 150 + 90 + 20 = 260; FFO / debt = 260 / 1.040 = 25,0%. Lựa chọn 23,1% bỏ qua khoản phi tiền mặt 20 (240 / 1.040). Lựa chọn 14,4% chỉ dùng lợi nhuận ròng (150 / 1.040), quên cộng lại khấu hao.' },
    { q: 'Doanh nghiệp có tổng nợ 750 và vốn chủ sở hữu 1.250 (triệu USD). Debt/capital gần nhất với:', choices: ['60,0%', '37,5%', '62,5%'], answer: 1, explain: 'Debt / capital = 750 / (750 + 1.250) = 37,5%. Lựa chọn 60,0% là debt / equity (750 / 1.250). Lựa chọn 62,5% là equity / capital.' },
    { q: 'Doanh nghiệp có EBITDA 500, tổng nợ 1.500 với lãi suất bình quân 5%. Công ty vay thêm 500 với lãi suất 6% để mua lại cổ phiếu; EBITDA không đổi. Debt/EBITDA và EBITDA/interest sau giao dịch gần nhất với:', choices: ['4,00x và 6,67x', '4,00x và 4,76x', '3,00x và 6,67x'], answer: 1, explain: 'Nợ mới = 2.000; Debt/EBITDA = 2.000 / 500 = 4,00x. Chi phí lãi = 1.500 x 5% + 500 x 6% = 75 + 30 = 105; EBITDA/interest = 500 / 105 = 4,76x. Lựa chọn "4,00x và 6,67x" quên chi phí lãi của khoản vay mới. Lựa chọn "3,00x và 6,67x" là các tỷ số trước giao dịch.' },
    { q: 'Doanh nghiệp có tổng nợ 2.400, tiền mặt 600 và EBITDA 720 (triệu USD). Net debt/EBITDA gần nhất với:', choices: ['2,50x', '3,33x', '4,17x'], answer: 0, explain: 'Net debt = 2.400 - 600 = 1.800; 1.800 / 720 = 2,50x. Lựa chọn 3,33x là debt/EBITDA, chưa trừ tiền mặt. Lựa chọn 4,17x cộng tiền mặt vào nợ thay vì trừ ra (3.000 / 720).' },
    { q: 'Doanh nghiệp bán lẻ báo cáo tổng nợ 900 và EBITDA 300. Tổ chức xếp hạng cộng thêm nghĩa vụ thuê 300 vào nợ khi tính tỷ số (giả định EBITDA giữ nguyên). Debt/EBITDA điều chỉnh gần nhất với:', choices: ['3,00x', '2,00x', '4,00x'], answer: 2, explain: 'Nợ điều chỉnh = 900 + 300 = 1.200; 1.200 / 300 = 4,00x. Đây là lý do tỷ số tự tính có thể thấp hơn tỷ số tổ chức xếp hạng công bố. Lựa chọn 3,00x là tỷ số chưa điều chỉnh. Lựa chọn 2,00x trừ nghĩa vụ thuê thay vì cộng.' },
    { q: 'Với tỷ số nào sau đây, giá trị cao hơn cho thấy khả năng tín dụng tốt hơn?', choices: ['Debt/capital', 'FFO/debt', 'Debt/EBITDA'], answer: 1, explain: 'FFO/debt đo dòng tiền tạo ra so với nợ, càng cao càng tốt. Debt/capital và Debt/EBITDA đo đòn bẩy, càng thấp càng tốt.' },
    { q: 'Nhà phân tích tính được Debt/EBITDA 3,5x cho một công ty viễn thông. Cách dùng tỷ số này hợp lý nhất là:', choices: ['so sánh với các công ty viễn thông cùng quy mô và với xu hướng của chính công ty qua các năm', 'so sánh trực tiếp với một công ty phần mềm có Debt/EBITDA 1,0x', 'kết luận ngay công ty là high yield vì tỷ số trên 3,0x'], answer: 0, explain: 'Mức tỷ số hợp lý khác nhau theo ngành (viễn thông có dòng tiền ổn định nên thường chịu được đòn bẩy cao hơn), nên phải so với doanh nghiệp cùng ngành và xu hướng theo thời gian. So với công ty phần mềm khác ngành dễ kết luận sai. Không có ngưỡng 3,0x cố định để kết luận là high yield.' },
    { q: 'Doanh nghiệp phá sản, giá trị tài sản còn lại 650. Nợ: first lien 250, second lien 200, senior unsecured 300, subordinated 150. Theo absolute priority rule, tỷ lệ thu hồi của senior unsecured gần nhất với:', choices: ['72,2%', '44,4%', '66,7%'], answer: 2, explain: 'First lien nhận 250, second lien nhận 200, còn 650 - 450 = 200 cho senior unsecured: 200 / 300 = 66,7%; subordinated nhận 0. Lựa chọn 72,2% chia đều theo tỷ lệ cho mọi chủ nợ (650 / 900). Lựa chọn 44,4% coi senior unsecured và subordinated là cùng hạng (200 / 450).' },
    { q: 'Sau khi trả nợ có bảo đảm, doanh nghiệp phá sản còn 450 cho chủ nợ unsecured. Trái phiếu senior unsecured 500 và khoản vay ngân hàng senior unsecured 250 có cùng thứ tự ưu tiên (pari passu). Khoản vay ngân hàng nhận được gần nhất với:', choices: ['250', '225', '150'], answer: 2, explain: 'Pari passu nghĩa là chia theo tỷ lệ: 450 / 750 = 60% cho mỗi khoản; ngân hàng nhận 250 x 60% = 150. Lựa chọn 250 giả định ngân hàng được trả đủ trước. Lựa chọn 225 chia đều 450 cho hai chủ nợ, bỏ qua quy mô khác nhau.' },
    { q: 'Khoản vay có bảo đảm 400 được thế chấp bằng một nhà máy chuyên dụng chỉ bán được 280 khi phá sản. Ngoài nhà máy, còn 150 tài sản cho các chủ nợ unsecured, với tổng nợ senior unsecured 480 (chưa tính phần thiếu hụt của khoản vay có bảo đảm). Tỷ lệ thu hồi tổng cộng của khoản vay có bảo đảm gần nhất với:', choices: ['77,5%', '70,0%', '100,0%'], answer: 0, explain: 'Phần thiếu hụt 400 - 280 = 120 trở thành nợ unsecured. Tỷ lệ thu hồi của nhóm unsecured = 150 / (480 + 120) = 25%. Khoản vay có bảo đảm nhận 280 + 25% x 120 = 310, tức 310 / 400 = 77,5%. Lựa chọn 70,0% chỉ tính tài sản bảo đảm (280 / 400), bỏ qua quyền đòi phần thiếu hụt. Lựa chọn 100,0% giả định nợ có bảo đảm luôn thu hồi đủ.' },
    { q: 'Trong một vụ tái cơ cấu có thương lượng theo Chapter 11, cổ đông vẫn nhận được một phần cổ phiếu của công ty mới dù chủ nợ senior unsecured chỉ thu hồi được 60%. Phát biểu nào đúng nhất?', choices: ['Đây là vi phạm pháp luật nên phương án tái cơ cấu chắc chắn bị hủy', 'Absolute priority rule luôn được áp dụng tuyệt đối trong thực tế', 'Trong thực tế, thứ tự ưu tiên có thể bị lệch khi các bên thương lượng để đạt đồng thuận'], answer: 2, explain: 'Absolute priority rule là nguyên tắc, nhưng trong tái cơ cấu có thương lượng, các hạng thấp hơn và cả cổ đông đôi khi nhận một phần giá trị để đồng ý phương án, tránh thủ tục kéo dài và tốn kém. Phương án "chắc chắn bị hủy" và phương án "luôn được áp dụng tuyệt đối" đều bỏ qua thực tế này.' },
    { q: 'Doanh nghiệp có corporate family rating B+. Trái phiếu first lien senior secured của doanh nghiệp này nhiều khả năng được xếp hạng:', choices: ['cao hơn B+ một hoặc nhiều bậc', 'bằng B+ vì CFR áp dụng cho mọi khoản nợ', 'thấp hơn B+ vì doanh nghiệp là high yield'], answer: 0, explain: 'CFR gắn với nợ senior unsecured. Nợ first lien có tài sản bảo đảm nên recovery cao hơn; với doanh nghiệp high yield, POD cao làm recovery có ảnh hưởng lớn, nên khoản nợ có bảo đảm thường được notching lên, có thể nhiều bậc. Phương án "bằng B+" bỏ qua notching. Phương án "thấp hơn" chỉ áp dụng cho nợ thứ cấp.' },
    { q: 'Trong các chứng khoán sau của cùng một doanh nghiệp, chứng khoán nào có thứ tự ưu tiên thấp nhất khi phá sản?', choices: ['Trái phiếu junior subordinated', 'Cổ phiếu ưu đãi', 'Khoản vay second lien'], answer: 1, explain: 'Thứ tự: first lien, second lien, senior unsecured, senior subordinated, subordinated, junior subordinated, rồi mới đến cổ phiếu ưu đãi và cổ phiếu phổ thông. Cổ phiếu ưu đãi là vốn chủ sở hữu nên đứng sau mọi khoản nợ, kể cả junior subordinated. Second lien là nợ có bảo đảm, ưu tiên cao.' },
    { q: 'Công ty mẹ (holding) có trái phiếu senior unsecured 300 và tài sản duy nhất là vốn chủ sở hữu ở công ty con. Công ty con có nợ 500 và khi phá sản tài sản công ty con trị giá 650. Tỷ lệ thu hồi của trái phiếu công ty mẹ gần nhất với:', choices: ['50,0%', '81,3%', '100,0%'], answer: 0, explain: 'Chủ nợ công ty con được trả trước từ tài sản công ty con: 650 - 500 = 150 còn lại cho cổ đông là công ty mẹ; trái chủ công ty mẹ thu hồi 150 / 300 = 50,0%. Đây là structural subordination. Lựa chọn 81,3% chia tỷ lệ cho mọi chủ nợ của tập đoàn (650 / 800). Lựa chọn 100,0% coi chữ "senior" của công ty mẹ là ưu tiên hơn nợ công ty con.' },
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
