// Bài giảng FSA-05 - Analyzing Statements of Cash Flows II (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t, frac } = window.CFAH;

  const sections = [
    {
      title: '1. Bức tranh lớn',
      minutes: 4,
      html: `
<p>Ở FSA-04 bạn đã học cách <b>lập</b> báo cáo lưu chuyển tiền tệ: chia dòng tiền thành ${t('cfo', 'CFO')}, ${t('cfi', 'CFI')} và ${t('cff', 'CFF')}, phương pháp trực tiếp và gián tiếp, khác biệt IFRS và US GAAP. Module này trả lời câu hỏi tiếp theo: <b>đọc báo cáo đó như thế nào để ra kết luận?</b></p>
<div class="key">Lợi nhuận là một ý kiến (phụ thuộc ước tính kế toán), tiền là một sự thật. Nhà phân tích dùng báo cáo dòng tiền để hỏi: tiền <b>đến từ đâu</b>, <b>đi về đâu</b>, công ty có <b>tự nuôi được mình</b> không, và còn bao nhiêu tiền "tự do" cho người cấp vốn.</div>
<ol>
  <li><b>Phân tích báo cáo dòng tiền đã công bố và dạng tỷ trọng (common-size)</b>: nguồn và sử dụng tiền, chất lượng CFO, giai đoạn vòng đời. Ứng với LOS 1 (phần 2, 3).</li>
  <li><b>Dòng tiền tự do FCFF, FCFE và các tỷ số dòng tiền</b> (hiệu quả hoạt động và khả năng chi trả). Ứng với LOS 2 (phần 4, 5).</li>
</ol>
<p class="tip">Một ví dụ xuyên suốt: <b>Công ty Minh An</b>. Doanh thu 5.000; EBIT 640; chi phí lãi vay 80 (đã trả bằng tiền); thuế suất 25%; lợi nhuận ròng 420; khấu hao 250; thuế hoãn lại phải trả tăng 10; phải thu tăng 60; tồn kho tăng 40; phải trả người bán tăng 30. Mua TSCĐ 350, bán thiết bị cũ thu 20. Vay mới 150, trả nợ gốc 100, trả cổ tức 120. Công ty báo cáo theo US GAAP.</p>`,
    },
    {
      title: '2. Phân tích báo cáo dòng tiền đã công bố',
      minutes: 11,
      html: `
<p>Quy trình phân tích gồm ba bước: (1) xác định <b>nguồn tiền chính</b> và <b>cách sử dụng tiền chính</b>; (2) xem xét từng phần CFO, CFI, CFF và các yếu tố tạo ra chúng; (3) so sánh qua nhiều năm và với công ty cùng ngành.</p>

<h4>Bước 1: nguồn tiền đến từ đâu?</h4>
<p>Một công ty trưởng thành và khỏe mạnh nên tạo ra tiền chủ yếu từ <b>hoạt động kinh doanh</b> (CFO). Đi vay hay bán tài sản có thể bù đắp tạm thời, nhưng không thể kéo dài mãi. Nguồn tiền "hợp lý" phụ thuộc vào ${t('lifecycle', 'giai đoạn vòng đời (life cycle stage)')} của công ty:</p>
<table class="plain"><thead><tr><th>Giai đoạn</th><th>CFO</th><th>CFI</th><th>CFF</th><th>Diễn giải</th></tr></thead><tbody>
<tr><td>Khởi nghiệp / tăng trưởng sớm</td><td>Âm hoặc nhỏ</td><td>Âm lớn</td><td>Dương lớn</td><td>Đầu tư mạnh, chưa có lãi, sống nhờ vốn góp và vay</td></tr>
<tr><td>Tăng trưởng</td><td>Dương, đang tăng</td><td>Âm lớn</td><td>Dương hoặc gần 0</td><td>CFO chưa đủ tài trợ toàn bộ đầu tư</td></tr>
<tr><td>Trưởng thành</td><td>Dương lớn, ổn định</td><td>Âm vừa phải</td><td>Âm</td><td>Tự tài trợ đầu tư, dùng tiền thừa để trả nợ, cổ tức, mua lại cổ phiếu</td></tr>
<tr><td>Suy thoái</td><td>Dương nhưng giảm</td><td>Có thể dương</td><td>Âm</td><td>Bán bớt tài sản, thu hẹp quy mô</td></tr>
</tbody></table>

<h4>Bước 2: xem kỹ từng phần</h4>
<ul>
<li><b>CFO</b>: so sánh CFO với lợi nhuận ròng. Nếu CFO <b>liên tục cao hơn hoặc xấp xỉ</b> lợi nhuận ròng, lợi nhuận được "tiền thật" hậu thuẫn. Nếu lợi nhuận tăng mà CFO giảm, thường là do phải thu hoặc tồn kho phình to: dấu hiệu ${t('eq', 'chất lượng lợi nhuận (earnings quality)')} thấp. Xem thêm CFO có đến từ khoản bất thường không (ví dụ kéo dài thời gian trả người bán, bán khoản phải thu).</li>
<li><b>CFI</b>: chi đầu tư tài sản dài hạn (capex) là để <b>thay thế</b> tài sản cũ hay để <b>mở rộng</b>? So sánh capex với khấu hao. Thu từ bán tài sản thường không lặp lại.</li>
<li><b>CFF</b>: công ty đang vay thêm, phát hành cổ phiếu, hay đang trả nợ, trả cổ tức? Vay để trả cổ tức là tín hiệu đáng lo.</li>
</ul>

<div class="example"><div class="ex-h">Ví dụ 2.1 - Đọc báo cáo của Minh An</div>
<p>Từ dữ liệu ở phần 1, tính CFO, CFI, CFF và nhận xét.</p>
<details><summary>Xem lời giải</summary>
<p>CFO (gián tiếp) = 420 + 250 + 10 - 60 - 40 + 30 = <b>610</b>.<br>
CFI = -350 + 20 = <b>-330</b>.<br>
CFF = 150 - 100 - 120 = <b>-70</b>.<br>
Tiền tăng ròng = 610 - 330 - 70 = <b>210</b>.</p>
<p>Nhận xét: CFO (610) lớn hơn lợi nhuận ròng (420), gấp 1,45 lần, chủ yếu nhờ khấu hao là chi phí không bằng tiền. CFO đủ trả toàn bộ capex (350), trả nợ và cổ tức, vẫn dư tiền. Đây là hình ảnh của một công ty <b>trưởng thành, tự tài trợ được</b>. Điểm cần theo dõi: phải thu và tồn kho tăng tổng cộng 100, làm CFO thấp hơn mức có thể đạt được.</p></details></div>
<p class="warn"><b>Bẫy hay gặp:</b> "tiền tăng ròng dương" không có nghĩa là công ty tốt. Tiền có thể tăng vì công ty vừa vay một khoản lớn. Luôn hỏi tiền tăng <b>nhờ phần nào</b>.</p>`,
    },
    {
      title: '3. Báo cáo dòng tiền dạng tỷ trọng (common-size)',
      minutes: 8,
      html: `
<p>${t('commonsize', 'Báo cáo dòng tiền dạng tỷ trọng (common-size cash flow statement)')} giúp so sánh qua nhiều năm và giữa các công ty có quy mô khác nhau. Có hai cách:</p>
<table class="plain"><thead><tr><th>Cách</th><th>Mỗi dòng chia cho</th><th>Trả lời câu hỏi</th></tr></thead><tbody>
<tr><td>(a) Theo doanh thu</td><td>Doanh thu thuần</td><td>Mỗi 1 đồng doanh thu tạo ra / tiêu bao nhiêu tiền ở từng khoản mục?</td></tr>
<tr><td>(b) Theo tổng thu và tổng chi</td><td>Khoản thu chia cho <b>tổng tiền thu vào</b>; khoản chi chia cho <b>tổng tiền chi ra</b></td><td>Tiền chủ yếu đến từ đâu, đi về đâu?</td></tr>
</tbody></table>

<div class="example"><div class="ex-h">Ví dụ 3.1 - Minh An theo hai cách</div>
<details><summary>Xem lời giải</summary>
<p><b>(a) Theo doanh thu 5.000:</b> lợi nhuận ròng 8,4%; khấu hao 5,0%; phải thu -1,2%; tồn kho -0,8%; phải trả +0,6%; CFO <b>12,2%</b>; capex -7,0%; CFI -6,6%; CFF -1,4%.</p>
<p><b>(b) Theo tổng thu, tổng chi:</b><br>
Tổng thu = CFO 610 + bán thiết bị 20 + vay mới 150 = 780. Tỷ trọng: CFO <b>78,21%</b>, bán thiết bị 2,56%, vay mới 19,23%.<br>
Tổng chi = capex 350 + trả nợ 100 + cổ tức 120 = 570. Tỷ trọng: capex <b>61,40%</b>, trả nợ 17,54%, cổ tức 21,05%.</p>
<p>Kết luận: gần 4/5 tiền vào đến từ kinh doanh, và phần lớn tiền ra dùng để đầu tư tài sản dài hạn. Nếu năm sau tỷ trọng "vay mới" tăng lên 50% trong khi CFO giảm, đó là tín hiệu xấu đi.</p></details></div>
<p class="tip"><b>Cách (a) hữu ích nhất cho dự báo:</b> nếu CFO ổn định quanh 12% doanh thu, nhà phân tích dự báo doanh thu rồi nhân 12% để ước tính CFO tương lai. Đọc theo <b>xu hướng</b>: CFO/doanh thu giảm dần qua các năm dù biên lợi nhuận không đổi thường do vốn lưu động phình to.</p>`,
    },
    {
      title: '4. Dòng tiền tự do: FCFF và FCFE',
      minutes: 12,
      html: `
<p>${t('fcf', 'Dòng tiền tự do (free cash flow)')} là phần tiền còn lại sau khi công ty đã chi cho vốn lưu động và tài sản dài hạn cần thiết để duy trì và phát triển hoạt động. Câu hỏi là: <b>tự do cho ai?</b></p>

<h4>FCFF - dòng tiền tự do cho cả doanh nghiệp</h4>
<p>${t('fcff', 'FCFF (free cash flow to the firm)')} là tiền dành cho <b>tất cả</b> người cấp vốn: chủ nợ và cổ đông. Vì chủ nợ cũng được hưởng, ta phải cộng lại lãi vay (sau thuế) đã bị trừ khi tính CFO.</p>
<div class="formula">FCFF = CFO + Lãi vay × (1 - t) - FCInv</div>
<div class="formula">FCFF = NI + NCC + Lãi vay × (1 - t) - FCInv - WCInv</div>
<p>NCC là ${t('ncc', 'chi phí không bằng tiền (non-cash charges)')} như khấu hao, tăng thuế hoãn lại phải trả. FCInv là ${t('fcinv', 'đầu tư vốn cố định ròng (fixed capital investment)')} = capex - tiền thu từ bán tài sản dài hạn. WCInv là ${t('wcinv', 'đầu tư vốn lưu động')} (không tính tiền mặt và nợ vay ngắn hạn).</p>

<h4>FCFE - dòng tiền tự do cho cổ đông</h4>
<p>${t('fcfe', 'FCFE (free cash flow to equity)')} là tiền còn lại cho <b>cổ đông thường</b>, sau khi đã trả lãi và gốc cho chủ nợ và nhận thêm khoản vay mới.</p>
<div class="formula">FCFE = CFO - FCInv + Vay ròng &nbsp;&nbsp;&nbsp; (vay ròng = vay mới - trả nợ gốc)</div>
<div class="formula">FCFE = FCFF - Lãi vay × (1 - t) + Vay ròng</div>

<div class="example"><div class="ex-h">Ví dụ 4.1 - FCFF và FCFE của Minh An</div>
<details><summary>Xem lời giải</summary>
<p>FCInv = 350 - 20 = 330. WCInv = 60 + 40 - 30 = 70. Lãi vay sau thuế = 80 × 0,75 = 60.</p>
<p><b>Từ CFO:</b> FCFF = 610 + 60 - 330 = <b>340</b>.<br>
<b>Từ NI (kiểm tra):</b> FCFF = 420 + (250 + 10) + 60 - 330 - 70 = <b>340</b>.</p>
<p>FCFE = 610 - 330 + (150 - 100) = <b>330</b>. Kiểm tra: 340 - 60 + 50 = 330.</p>
<p>Minh An trả cổ tức 120, thấp hơn nhiều so với FCFE 330: công ty còn dư địa để tăng cổ tức hoặc mua lại cổ phiếu.</p></details></div>

<h4>Lưu ý IFRS và US GAAP</h4>
<table class="plain"><thead><tr><th>Khoản mục</th><th>US GAAP</th><th>IFRS</th><th>Điều chỉnh khi tính FCF</th></tr></thead><tbody>
<tr><td>Lãi vay đã trả</td><td>CFO</td><td>CFO hoặc CFF</td><td>Chỉ cộng lại Lãi vay × (1 - t) khi lãi vay <b>đã bị trừ trong CFO</b>. Nếu nằm ở CFF thì không cộng lại.</td></tr>
<tr><td>Cổ tức đã trả</td><td>CFF</td><td>CFO hoặc CFF</td><td>Nếu cổ tức đã trả bị trừ trong CFO thì <b>cộng lại</b> vào CFO: trả cổ tức là cách <b>dùng</b> FCFE, không làm giảm FCFE.</td></tr>
</tbody></table>
<p class="warn"><b>Ba bẫy hay gặp:</b> (1) cộng lại lãi vay <b>trước thuế</b> thay vì sau thuế; (2) quên trừ tiền thu từ bán tài sản khỏi capex (hoặc ngược lại, đề cho capex ròng mà bạn trừ thêm); (3) trừ cổ tức khi tính FCFE.</p>`,
    },
    {
      title: '5. Tỷ số dòng tiền: hiệu quả hoạt động và khả năng chi trả',
      minutes: 7,
      html: `
<p>Tỷ số dòng tiền thay lợi nhuận bằng CFO trong các tỷ số quen thuộc. Có hai nhóm:</p>
<h4>a) ${t('perf', 'Tỷ số hiệu quả hoạt động (performance ratios)')}</h4>
<table class="plain"><thead><tr><th>Tỷ số</th><th>Công thức</th><th>Minh An</th></tr></thead><tbody>
<tr><td>Dòng tiền trên doanh thu (cash flow to revenue)</td><td>CFO / doanh thu thuần</td><td>610 / 5.000 = 12,2%</td></tr>
<tr><td>Tỷ suất tiền trên tài sản (cash return on assets)</td><td>CFO / tổng tài sản bình quân</td><td>610 / 4.000 = 15,25%</td></tr>
<tr><td>Tỷ suất tiền trên vốn chủ (cash return on equity)</td><td>CFO / vốn chủ sở hữu bình quân</td><td>610 / 2.000 = 30,5%</td></tr>
<tr><td>Tiền trên lợi nhuận hoạt động (cash to income)</td><td>CFO / lợi nhuận hoạt động (EBIT)</td><td>610 / 640 = 0,95</td></tr>
<tr><td>Dòng tiền mỗi cổ phần (cash flow per share)</td><td>(CFO - cổ tức ưu đãi) / số cổ phiếu bình quân</td><td>610 / 200 = 3,05</td></tr>
</tbody></table>

<h4>b) ${t('cov', 'Tỷ số khả năng chi trả (coverage ratios)')}</h4>
<table class="plain"><thead><tr><th>Tỷ số</th><th>Công thức</th><th>Minh An</th></tr></thead><tbody>
<tr><td>Khả năng trả nợ (debt coverage)</td><td>CFO / tổng nợ vay</td><td>610 / 1.220 = 0,50</td></tr>
<tr><td>Khả năng trả lãi (interest coverage)</td><td>(CFO + lãi vay đã trả + thuế đã nộp) / lãi vay đã trả</td><td>(610 + 80 + 130) / 80 = 10,25</td></tr>
<tr><td>Tái đầu tư (reinvestment)</td><td>CFO / tiền chi mua tài sản dài hạn</td><td>610 / 350 = 1,74</td></tr>
<tr><td>Trả nợ gốc (debt payment)</td><td>CFO / tiền trả nợ dài hạn</td><td>610 / 100 = 6,10</td></tr>
<tr><td>Trả cổ tức (dividend payment)</td><td>CFO / cổ tức đã trả</td><td>610 / 120 = 5,08</td></tr>
<tr><td>Đầu tư và tài trợ (investing and financing)</td><td>CFO / tổng tiền chi cho hoạt động đầu tư và tài trợ</td><td>610 / (350 + 100 + 120) = 1,07</td></tr>
</tbody></table>
<p>Giả định thêm cho Minh An: tổng tài sản bình quân 4.000, vốn chủ bình quân 2.000, tổng nợ vay 1.220, thuế đã nộp 130, 200 cổ phiếu, không có cổ phiếu ưu đãi.</p>
<p class="tip"><b>Đọc nhanh:</b> nhóm coverage lớn hơn 1 nghĩa là CFO đủ trang trải khoản chi đó. Debt coverage 0,50 nghĩa là cần khoảng 2 năm CFO để trả hết nợ vay. Reinvestment 1,74 nghĩa là CFO đủ tài trợ toàn bộ capex mà không cần vay.</p>
<p class="warn"><b>Bẫy:</b> interest coverage dạng dòng tiền cộng lại <b>cả lãi vay và thuế</b> đã trả vào CFO (để có tiền "trước lãi và thuế"), mẫu số là lãi vay đã trả. Chỉ lấy CFO / lãi vay là sai.</p>`,
    },
    {
      title: '6. Tóm tắt và bẫy thường gặp',
      minutes: 3,
      html: `
<table class="plain"><thead><tr><th>Tình huống</th><th>Nhớ</th></tr></thead><tbody>
<tr><td>Nguồn tiền chính</td><td>Công ty trưởng thành: CFO. Vay hay bán tài sản không bền vững</td></tr>
<tr><td>CFO và lợi nhuận ròng</td><td>Lợi nhuận tăng, CFO giảm: kiểm tra phải thu, tồn kho (chất lượng lợi nhuận thấp)</td></tr>
<tr><td>Common-size</td><td>(a) chia doanh thu; (b) thu chia tổng thu, chi chia tổng chi</td></tr>
<tr><td>FCFF</td><td>CFO + lãi vay × (1 - t) - FCInv</td></tr>
<tr><td>FCFE</td><td>CFO - FCInv + vay ròng; không trừ cổ tức</td></tr>
<tr><td>IFRS</td><td>Lãi vay ở CFF: không cộng lại. Cổ tức đã trả ở CFO: cộng lại</td></tr>
<tr><td>Interest coverage</td><td>(CFO + lãi vay đã trả + thuế đã nộp) / lãi vay đã trả</td></tr>
<tr><td>Coverage &gt; 1</td><td>CFO đủ trang trải khoản chi tương ứng</td></tr>
</tbody></table>
<p>Tiếp theo: tab <b>Luyện tập</b> - 8 câu. Module sau: FSA-06 Analysis of Inventories.</p>`,
    },
  ];

  const glossary = {
    cfo: ['Cash flow from operating activities (CFO)', 'Dòng tiền từ hoạt động kinh doanh', 'Tiền thu chi từ hoạt động tạo doanh thu chính của công ty.'],
    cfi: ['Cash flow from investing activities (CFI)', 'Dòng tiền từ hoạt động đầu tư', 'Tiền mua bán tài sản dài hạn và các khoản đầu tư.'],
    cff: ['Cash flow from financing activities (CFF)', 'Dòng tiền từ hoạt động tài chính', 'Tiền vay, trả nợ, phát hành, mua lại cổ phiếu, trả cổ tức (US GAAP).'],
    lifecycle: ['Life cycle stage', 'Giai đoạn vòng đời', 'Khởi nghiệp, tăng trưởng, trưởng thành, suy thoái; mỗi giai đoạn có hình dạng CFO, CFI, CFF đặc trưng.'],
    eq: ['Earnings quality', 'Chất lượng lợi nhuận', 'Mức độ lợi nhuận bền vững và được hậu thuẫn bằng tiền; CFO thấp hơn lợi nhuận kéo dài là dấu hiệu cảnh báo.'],
    commonsize: ['Common-size cash flow statement', 'Báo cáo dòng tiền dạng tỷ trọng', 'Mỗi dòng chia cho doanh thu, hoặc chia cho tổng thu (khoản thu) và tổng chi (khoản chi).'],
    fcf: ['Free cash flow', 'Dòng tiền tự do', 'Tiền còn lại sau khi đã chi cho vốn lưu động và tài sản dài hạn cần thiết.'],
    fcff: ['Free cash flow to the firm (FCFF)', 'Dòng tiền tự do cho doanh nghiệp', 'CFO + lãi vay sau thuế - đầu tư vốn cố định; dành cho cả chủ nợ và cổ đông.'],
    fcfe: ['Free cash flow to equity (FCFE)', 'Dòng tiền tự do cho cổ đông', 'CFO - đầu tư vốn cố định + vay ròng; dành cho cổ đông thường.'],
    ncc: ['Non-cash charges (NCC)', 'Chi phí không bằng tiền', 'Khoản làm giảm lợi nhuận nhưng không chi tiền, ví dụ khấu hao, tăng thuế hoãn lại phải trả.'],
    fcinv: ['Fixed capital investment (FCInv)', 'Đầu tư vốn cố định ròng', 'Chi mua tài sản dài hạn trừ tiền thu từ bán tài sản dài hạn.'],
    wcinv: ['Working capital investment (WCInv)', 'Đầu tư vốn lưu động', 'Mức tăng vốn lưu động hoạt động (không tính tiền mặt và nợ vay ngắn hạn).'],
    perf: ['Performance ratios', 'Tỷ số hiệu quả hoạt động', 'Đo khả năng tạo tiền từ doanh thu, tài sản, vốn chủ: CFO chia cho các đại lượng này.'],
    cov: ['Coverage ratios', 'Tỷ số khả năng chi trả', 'Đo khả năng CFO trang trải nợ, lãi vay, capex, cổ tức.'],
  };

  const practice = [
    { q: 'Một công ty có CFO 900, lãi vay đã trả 100 (đã trừ trong CFO), thuế suất 30%, chi mua TSCĐ 400 và thu từ bán TSCĐ 50. FCFF gần nhất với:', choices: ['620', '650', '570'], answer: 0, explain: 'FCFF = 900 + 100 x (1 - 0,30) - (400 - 50) = 900 + 70 - 350 = 620. Con số 650 cộng lại lãi vay trước thuế. Con số 570 quên trừ tiền thu từ bán TSCĐ khỏi capex.' },
    { q: 'Một công ty có CFO 900 (lãi vay đã trả 100 đã trừ trong CFO), chi mua TSCĐ 400, thu từ bán TSCĐ 50, vay mới 200, trả nợ gốc 120 và trả cổ tức 90. FCFE gần nhất với:', choices: ['540', '630', '750'], answer: 1, explain: 'FCFE = CFO - FCInv + vay ròng = 900 - 350 + (200 - 120) = 630. Con số 540 trừ thêm cổ tức (cổ tức là cách dùng FCFE, không làm giảm FCFE). Con số 750 chỉ cộng vay mới mà quên trừ khoản trả nợ gốc.' },
    { q: 'Một công ty theo IFRS báo cáo CFO 500, sau khi đã trừ cổ tức đã trả 60 (công ty xếp cổ tức đã trả vào CFO). Đầu tư vốn cố định ròng 200, vay ròng 30. FCFE gần nhất với:', choices: ['270', '330', '390'], answer: 2, explain: 'Cổ tức đã trả bị trừ trong CFO nên phải cộng lại: FCFE = (500 + 60) - 200 + 30 = 390. Con số 330 không cộng lại cổ tức. Con số 270 còn trừ cổ tức thêm một lần nữa.' },
    { q: 'CFO 450, lãi vay đã trả 50, thuế đã nộp 100. Tỷ số khả năng trả lãi dạng dòng tiền (cash flow interest coverage) là:', choices: ['12,0 lần', '9,0 lần', '11,0 lần'], answer: 0, explain: '(CFO + lãi vay đã trả + thuế đã nộp) / lãi vay đã trả = (450 + 50 + 100) / 50 = 12,0. Con số 9,0 lần là CFO / lãi vay (quên cộng lại). Con số 11,0 lần chỉ cộng lại thuế.' },
    { q: 'Tỷ số tái đầu tư (reinvestment ratio = CFO / tiền chi mua tài sản dài hạn) của một công ty là 0,8. Diễn giải hợp lý nhất:', choices: ['Công ty tạo đủ tiền từ kinh doanh để mua tài sản dài hạn và còn dư 20%.', 'Công ty phải dùng nguồn khác (tiền sẵn có, vay, phát hành cổ phiếu, bán tài sản) để tài trợ một phần chi đầu tư.', 'Công ty đang đầu tư ít hơn mức khấu hao, tức là thu hẹp quy mô.'], answer: 1, explain: 'Tỷ số < 1: CFO chỉ trang trải 80% chi đầu tư dài hạn, phần còn lại phải từ nguồn khác. Phương án "còn dư 20%" diễn giải ngược. Phương án "đầu tư ít hơn mức khấu hao" nhầm sang so sánh capex với khấu hao, tỷ số này không cho biết điều đó.' },
    { q: 'Một công ty có doanh thu 4.000. Trong năm: CFO 600, thu từ bán khoản đầu tư 100, phát hành trái phiếu 300 (không có khoản thu nào khác). Theo cách common-size "tổng thu", tỷ trọng của CFO là:', choices: ['15,00%', '66,67%', '60,00%'], answer: 2, explain: 'Tổng thu = 600 + 100 + 300 = 1.000; CFO chiếm 600 / 1.000 = 60%. Con số 15,00% chia cho doanh thu (đó là cách common-size theo doanh thu). Con số 66,67% bỏ sót khoản thu từ bán đầu tư.' },
    { q: 'Một công ty có CFO âm, CFI âm với giá trị lớn, CFF dương với giá trị lớn trong 3 năm liền. Công ty nhiều khả năng đang ở giai đoạn:', choices: ['Khởi nghiệp hoặc tăng trưởng sớm', 'Trưởng thành', 'Suy thoái'], answer: 0, explain: 'Đầu tư mạnh (CFI âm lớn) khi kinh doanh chưa tạo tiền (CFO âm), được tài trợ bằng vốn góp và vay (CFF dương). Công ty trưởng thành có CFO dương lớn, CFF thường âm. Công ty suy thoái thường có CFI dương do bán bớt tài sản.' },
    { q: 'Trong 3 năm, lợi nhuận ròng của công ty là 100, 120, 150 trong khi CFO là 110, 90, 60; phải thu tăng nhanh hơn doanh thu. Kết luận hợp lý nhất:', choices: ['Chất lượng lợi nhuận đang cải thiện vì lợi nhuận tăng đều.', 'CFO giảm là do công ty tăng capex, không ảnh hưởng chất lượng lợi nhuận.', 'Lợi nhuận ngày càng dựa vào khoản dồn tích (phải thu), chất lượng lợi nhuận đang giảm.'], answer: 2, explain: 'Khoảng cách lợi nhuận - CFO ngày càng lớn và phải thu tăng nhanh hơn doanh thu cho thấy doanh thu ghi nhận nhưng chưa thu được tiền, có thể do ghi nhận doanh thu tích cực. Phương án cho rằng CFO giảm do tăng capex sai vì capex nằm ở CFI, không làm giảm CFO.' },
  ];

  window.LESSONS['FSA-05'] = {
    moduleId: 'FSA-05',
    calculator: 'BA II Plus',
    warmup: [
      'Ôn FSA-04: lãi vay đã trả và cổ tức đã trả được xếp vào phần nào theo US GAAP? Theo IFRS?',
      'Theo phương pháp gián tiếp, phải thu tăng 50 làm CFO tăng hay giảm bao nhiêu?',
      'Theo bạn, vì sao một công ty có lãi lớn vẫn có thể thiếu tiền?',
    ],
    sections,
    glossary,
    practice,
    widgets: {},
    slides: [],
    wrapup: [
      'Viết công thức FCFF và FCFE (cả dạng bắt đầu từ CFO) không nhìn tài liệu.',
      'Nêu hai cách lập báo cáo dòng tiền dạng tỷ trọng và mỗi cách trả lời câu hỏi gì.',
      'Liệt kê 3 tỷ số coverage và ý nghĩa khi chúng lớn hơn 1.',
    ],
  };
}());
