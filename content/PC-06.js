// Bài giảng PC-06 - Introduction to Risk Management (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t, frac } = window.CFAH;

  const sections = [
    {
      title: '1. Bức tranh lớn: quản lý rủi ro là gì?',
      minutes: 10,
      html: `
<p>Nhiều người nghĩ quản lý rủi ro là <b>giảm rủi ro càng nhiều càng tốt</b>. Sai. Một ngân hàng không chịu rủi ro tín dụng thì không cho vay được; một quỹ cổ phiếu không chịu rủi ro thị trường thì không có lợi nhuận. Rủi ro là "nguyên liệu" để tạo ra lợi nhuận.</p>
<div class="key">${t('rm', 'Quản lý rủi ro (risk management)')} là quá trình xác định ${t('tolerance', 'mức chấp nhận rủi ro (risk tolerance)')}, nhận diện và đo lường các rủi ro đang có, rồi theo dõi và điều chỉnh chúng sao cho <b>rủi ro thực tế khớp với mức rủi ro mong muốn</b>. Mục tiêu là tối đa hóa giá trị của tổ chức (hoặc độ thỏa dụng của cá nhân) trong giới hạn rủi ro đã chọn (LOS 1).</div>
<p>Hai hệ quả quan trọng:</p>
<ul>
  <li>Quản lý rủi ro tốt <b>không đồng nghĩa</b> với không bao giờ thua lỗ. Một tổ chức quản lý rủi ro tốt vẫn có thể lỗ nếu chuyện xấu xảy ra với những rủi ro đã được chủ động chấp nhận.</li>
  <li>Ngược lại, lãi lớn chưa chắc là quản lý rủi ro tốt: có thể đó là may mắn khi đang chịu rủi ro vượt quá giới hạn.</li>
</ul>
<p>Module có 7 LOS, đi theo thứ tự: định nghĩa (1), khung quản lý rủi ro (2), quản trị rủi ro (3), risk tolerance (4), ngân sách rủi ro (5), nguồn rủi ro (6), đo lường và điều chỉnh rủi ro (7).</p>
<p class="tip">Liên hệ với PC-04: risk tolerance của tổ chức giống như mục tiêu rủi ro trong IPS của cá nhân. Cá nhân cũng cần quản lý rủi ro: ví dụ mua bảo hiểm nhân thọ, đa dạng hóa danh mục, giữ quỹ dự phòng.</p>`,
    },
    {
      title: '2. Khung quản lý rủi ro',
      minutes: 15,
      html: `
<p>${t('framework', 'Khung quản lý rủi ro (risk management framework)')} là toàn bộ hạ tầng, quy trình và công cụ để quản lý rủi ro trong tổ chức (LOS 2). Các yếu tố chính:</p>
<table class="plain"><thead><tr><th>Yếu tố</th><th>Nội dung</th></tr></thead><tbody>
<tr><td>${t('governance', 'Quản trị rủi ro (risk governance)')}</td><td>Cơ cấu từ trên xuống: ai quyết định mức rủi ro, ai giám sát</td></tr>
<tr><td>Nhận diện và đo lường rủi ro (risk identification and measurement)</td><td>Tìm ra các rủi ro, lượng hóa chúng; theo dõi khi điều kiện thay đổi</td></tr>
<tr><td>${t('infra', 'Hạ tầng rủi ro (risk infrastructure)')}</td><td>Con người, dữ liệu, mô hình, hệ thống công nghệ để theo dõi rủi ro</td></tr>
<tr><td>Chính sách và quy trình (policies and processes)</td><td>Quy định cụ thể: hạn mức, quy trình phê duyệt, xử lý khi vượt hạn mức</td></tr>
<tr><td>Theo dõi, giảm thiểu và quản lý (monitoring, mitigation and management)</td><td>Liên tục so sánh rủi ro thực tế với giới hạn, hành động khi cần</td></tr>
<tr><td>Truyền thông (communications)</td><td>Báo cáo rủi ro rõ ràng, kịp thời cho các cấp ra quyết định</td></tr>
<tr><td>Phân tích chiến lược và tích hợp (strategic analysis or integration)</td><td>Dùng thông tin rủi ro để ra quyết định kinh doanh, không chỉ để "phòng thủ"</td></tr>
</tbody></table>
<p>Ở cấp độ cá nhân, khung cũng tương tự nhưng đơn giản hơn: cá nhân tự là "hội đồng quản trị" của mình, IPS đóng vai trò chính sách, còn nhà tư vấn hỗ trợ đo lường và điều chỉnh.</p>
<div class="example"><div class="ex-h">Ví dụ 2.1 - Nhận diện yếu tố</div>
<p>Một quỹ đầu tư: (a) mua phần mềm tính toán rủi ro theo thời gian thực; (b) quy định mỗi giao dịch viên chỉ được nắm vị thế tối đa 5 triệu USD; (c) gửi báo cáo rủi ro hằng tuần lên ban điều hành. Mỗi việc thuộc yếu tố nào?</p>
<details><summary>Xem lời giải</summary><p>(a) <b>Hạ tầng rủi ro</b>. (b) <b>Chính sách và quy trình</b> (hạn mức). (c) <b>Truyền thông</b>.</p></details></div>
<p class="warn"><b>Bẫy:</b> khung quản lý rủi ro không phải là phòng quản lý rủi ro. Phòng rủi ro chỉ là một phần của hạ tầng; khung bao trùm cả cách cả tổ chức ra quyết định.</p>`,
    },
    {
      title: '3. Quản trị rủi ro',
      minutes: 14,
      html: `
<p>${t('governance', 'Quản trị rủi ro (risk governance)')} là hệ thống quản trị từ trên xuống, nhằm bảo đảm rủi ro được quản lý phù hợp với mục tiêu của toàn tổ chức (LOS 3).</p>
<ul>
  <li><b>Hội đồng quản trị (board):</b> chịu trách nhiệm cao nhất. Xác định mục tiêu, phê duyệt <b>risk tolerance</b> và giám sát.</li>
  <li><b>Ban điều hành:</b> thực hiện chiến lược trong giới hạn rủi ro mà hội đồng đã duyệt.</li>
  <li>${t('rmc', 'Ủy ban quản lý rủi ro (risk management committee)')}: chuyên sâu hơn, thay mặt hội đồng xem xét rủi ro.</li>
  <li>${t('cro', 'Giám đốc rủi ro (CRO)')}: lãnh đạo chức năng quản lý rủi ro, nên <b>độc lập</b> với các bộ phận kinh doanh.</li>
</ul>
<p>Cách tiếp cận tốt là ${t('erm', 'quản lý rủi ro toàn doanh nghiệp (enterprise risk management)')}: nhìn rủi ro của <b>toàn tổ chức</b> chứ không phải từng phòng ban riêng lẻ, vì rủi ro của các bộ phận có thể bù trừ hoặc cộng hưởng.</p>

<h4>Yếu tố của quản trị rủi ro hiệu quả</h4>
<ol>
  <li>Xác định rõ risk tolerance của tổ chức (rủi ro nào chấp nhận, rủi ro nào tránh, ở mức nào).</li>
  <li>Hội đồng quản trị giám sát thực chất, có đủ hiểu biết.</li>
  <li>Chức năng rủi ro độc lập, có tiếng nói đủ mạnh.</li>
  <li>Phân công trách nhiệm rõ ràng, báo cáo minh bạch.</li>
  <li>Gắn quản lý rủi ro với chiến lược và cơ chế khen thưởng (tránh thưởng cho việc chấp nhận rủi ro quá mức).</li>
</ol>
<div class="example"><div class="ex-h">Ví dụ 3.1</div>
<p>Tại một ngân hàng, trưởng bộ phận kinh doanh trái phiếu đồng thời phụ trách đo lường rủi ro của chính bộ phận mình, thưởng tính theo lợi nhuận quý. Điểm yếu quản trị là gì?</p>
<details><summary>Xem lời giải</summary><p>Thiếu <b>tính độc lập</b>: người chấp nhận rủi ro lại tự đo rủi ro. Cơ chế thưởng theo lợi nhuận ngắn hạn khuyến khích chấp nhận rủi ro vượt giới hạn. Cần tách chức năng đo lường rủi ro ra, báo cáo trực tiếp lên CRO.</p></details></div>`,
    },
    {
      title: '4. Risk tolerance ảnh hưởng tới quản lý rủi ro',
      minutes: 14,
      html: `
<p>${t('tolerance', 'Risk tolerance')} trả lời câu hỏi: <b>tổ chức sẵn lòng chấp nhận bao nhiêu rủi ro, rủi ro loại nào, và trong hoàn cảnh nào</b> để đạt mục tiêu (LOS 4). Đây là quyết định đầu tiên và quan trọng nhất của quản trị rủi ro, do hội đồng quản trị phê duyệt.</p>
<h4>Khi xác định risk tolerance, cần xem xét</h4>
<table class="plain"><thead><tr><th>Bên trong tổ chức</th><th>Bên ngoài tổ chức</th></tr></thead><tbody>
<tr><td>Mục tiêu và chiến lược; năng lực chuyên môn trong từng loại rủi ro; sức mạnh tài chính (vốn, thanh khoản) để hấp thụ thua lỗ; tổn thất nào sẽ khiến tổ chức thất bại</td><td>Môi trường cạnh tranh; quy định pháp luật; điều kiện kinh tế và thị trường; kỳ vọng của cổ đông, khách hàng</td></tr>
</tbody></table>
<div class="key">Risk tolerance là "khung" cho mọi bước tiếp theo:<br>
- Quyết định <b>rủi ro nào được giữ</b> (vì tổ chức có lợi thế) và <b>rủi ro nào phải chuyển đi</b>.<br>
- Là cơ sở để lập ${t('budget', 'ngân sách rủi ro')} và đặt hạn mức.<br>
- Giúp tránh hai sai lầm: chấp nhận quá nhiều rủi ro (có thể phá sản) hoặc quá ít (bỏ lỡ cơ hội, không đạt mục tiêu).</div>
<p>Giống cá nhân ở PC-04, risk tolerance của tổ chức phụ thuộc cả <b>sẵn lòng</b> và <b>khả năng</b> chịu rủi ro. Tổ chức có tài chính yếu thì khả năng hấp thụ tổn thất thấp, nên dù muốn tăng trưởng nhanh cũng không nên đặt mức chấp nhận rủi ro cao.</p>
<div class="example"><div class="ex-h">Ví dụ 4.1</div>
<p>Công ty A là hãng hàng không có chuyên môn vận hành, nhưng không có chuyên môn dự báo giá dầu. Theo cách nghĩ risk tolerance, công ty nên làm gì với rủi ro giá nhiên liệu?</p>
<details><summary>Xem lời giải</summary><p>Rủi ro giá dầu không phải là rủi ro mà công ty có lợi thế để chấp nhận, nên risk tolerance với rủi ro này thấp. Công ty có thể <b>phòng ngừa</b> (hedge) bằng hợp đồng kỳ hạn nhiên liệu, và tập trung chấp nhận rủi ro kinh doanh cốt lõi mà mình am hiểu.</p></details></div>`,
    },
    {
      title: '5. Ngân sách rủi ro',
      minutes: 14,
      html: `
<p>${t('budget', 'Ngân sách rủi ro (risk budgeting)')} là việc <b>phân bổ tổng mức rủi ro được phép</b> (từ risk tolerance) cho các bộ phận, nhóm tài sản, chiến lược hoặc nhà quản lý (LOS 5). Nó giống ngân sách chi tiêu, nhưng "tiền" ở đây là rủi ro.</p>
<ul>
  <li><b>Đơn vị đo:</b> có thể là độ lệch chuẩn, beta, ${t('var', 'VaR')}, ${t('te', 'tracking error')}, hoặc vốn rủi ro.</li>
  <li><b>Một chiều (single dimension):</b> dùng một thước đo, ví dụ beta hoặc VaR, đơn giản nhưng thô.</li>
  <li><b>Nhiều chiều (multiple dimensions):</b> phân bổ theo nhiều ${t('factor', 'yếu tố rủi ro')} cùng lúc (cổ phiếu, lãi suất, tín dụng, lạm phát...). Phức tạp hơn nhưng phản ánh tốt hơn rủi ro thật.</li>
</ul>
<div class="key">Vai trò trong quản trị rủi ro: ngân sách rủi ro buộc tổ chức phải nghĩ <b>rủi ro được dùng ở đâu thì đáng nhất</b>. Nguyên tắc: phân bổ rủi ro cho nơi có lợi suất kỳ vọng trên mỗi đơn vị rủi ro cao nhất, cho đến khi lợi suất biên trên rủi ro biên bằng nhau giữa các nơi.</div>

<div class="example"><div class="ex-h">Ví dụ 5.1 - Ngân sách tracking error</div>
<p>Một quỹ hưu trí có ngân sách tracking error tổng 3%. Quỹ giao 50% cho nhà quản lý A (tracking error 4%) và 50% cho B (tracking error 6%). Lợi suất vượt trội của A và B không tương quan. Có nằm trong ngân sách không?</p>
<details><summary>Xem lời giải</summary>
<p>TE tổng = √[(0,5 × 4%)<sup>2</sup> + (0,5 × 6%)<sup>2</sup>] = √(4 + 9) = <b>3,61%</b> &gt; 3%: <b>vượt ngân sách</b>.</p>
<p>Nếu thay B bằng nhà quản lý có TE 4%: √(4 + 4) = <b>2,83%</b>, trong ngân sách. Chú ý TE tổng nhỏ hơn trung bình cộng (5%) vì hai phần không tương quan: đa dạng hóa giữa các nhà quản lý cũng làm giảm rủi ro.</p></details></div>`,
    },
    {
      title: '6. Các nguồn rủi ro và tương tác giữa chúng',
      minutes: 20,
      html: `
<h4>Rủi ro tài chính (financial risks)</h4>
<p>Rủi ro phát sinh từ các sự kiện trên thị trường tài chính (LOS 6):</p>
<table class="plain"><thead><tr><th>Rủi ro</th><th>Mô tả</th></tr></thead><tbody>
<tr><td>${t('market', 'Rủi ro thị trường (market risk)')}</td><td>Do biến động lãi suất, tỷ giá, giá cổ phiếu, giá hàng hóa</td></tr>
<tr><td>${t('credit', 'Rủi ro tín dụng (credit risk)')}</td><td>Đối tác không trả được nợ hoặc vi phạm nghĩa vụ; gồm cả rủi ro đối tác (counterparty) trong phái sinh</td></tr>
<tr><td>${t('liq', 'Rủi ro thanh khoản (liquidity risk)')}</td><td>Phải bán tài sản với giá thấp hơn nhiều so với giá trị hợp lý, hoặc không bán được, khi cần tiền</td></tr>
</tbody></table>

<h4>Rủi ro phi tài chính (non-financial risks)</h4>
<table class="plain"><thead><tr><th>Rủi ro</th><th>Mô tả</th></tr></thead><tbody>
<tr><td>Rủi ro thanh toán (settlement)</td><td>Một bên đã thanh toán nhưng bên kia không giao tài sản hoặc tiền</td></tr>
<tr><td>Rủi ro pháp lý (legal)</td><td>Bị kiện, hợp đồng không thực thi được</td></tr>
<tr><td>Rủi ro tuân thủ (compliance)</td><td>Gồm rủi ro quy định (regulatory), kế toán, thuế: vi phạm hoặc quy định thay đổi</td></tr>
<tr><td>${t('model', 'Rủi ro mô hình (model risk)')}</td><td>Mô hình sai hoặc dùng sai, dẫn tới định giá và đo lường rủi ro sai</td></tr>
<tr><td>${t('tail', 'Rủi ro đuôi (tail risk)')}</td><td>Sự kiện cực đoan xảy ra thường hơn giả định của phân phối chuẩn</td></tr>
<tr><td>${t('oprisk', 'Rủi ro hoạt động (operational risk)')}</td><td>Do con người, quy trình, hệ thống nội bộ hoặc sự kiện bên ngoài: gian lận, lỗi nhập lệnh, tấn công mạng (cyber), thiên tai</td></tr>
<tr><td>${t('solvency', 'Rủi ro mất khả năng thanh toán (solvency risk)')}</td><td>Tổ chức cạn tiền và không thể tiếp tục hoạt động</td></tr>
</tbody></table>
<p>Với <b>cá nhân</b> còn có: rủi ro tử vong sớm (mortality), sống lâu hơn số tiền tích lũy (${t('longevity', 'longevity')}), rủi ro sức khỏe; rủi ro tài sản và trách nhiệm pháp lý. Vốn nhân lực (thu nhập tương lai) cũng là một tài sản chịu rủi ro.</p>

<h4>Các rủi ro tương tác với nhau</h4>
<div class="key">Rủi ro hiếm khi xảy ra riêng lẻ. Tác động kết hợp thường <b>lớn hơn tổng</b> các tác động riêng, đặc biệt trong khủng hoảng.</div>
<ul>
  <li><b>Thị trường → tín dụng:</b> giá tài sản giảm làm đối tác phái sinh lỗ nặng, tăng khả năng họ vỡ nợ với bạn.</li>
  <li><b>Tín dụng và thị trường → thanh khoản:</b> khi nhiều bên cùng phải bán để đáp ứng ký quỹ, giá giảm thêm và tài sản khó bán.</li>
  <li><b>Thanh khoản → solvency:</b> không huy động được tiền dù tài sản vẫn có giá trị trên sổ sách.</li>
  <li><b>Phi tài chính → tài chính:</b> lỗi hệ thống (operational) gây vị thế ngoài ý muốn (market); quy định mới (compliance) buộc bán tài sản (liquidity).</li>
</ul>
<div class="example"><div class="ex-h">Ví dụ 6.1</div>
<p>Một quỹ dùng đòn bẩy cao, nắm trái phiếu doanh nghiệp. Khủng hoảng làm giá trái phiếu giảm 10%. Ngân hàng cho vay yêu cầu bổ sung ký quỹ. Quỹ phải bán trái phiếu trong lúc thị trường không có người mua. Chuỗi rủi ro?</p>
<details><summary>Xem lời giải</summary><p><b>Thị trường</b> (giá giảm) → yêu cầu ký quỹ → <b>thanh khoản</b> (bán tháo giá thấp) → lỗ thêm, có thể dẫn tới <b>solvency</b>. Nếu ngân hàng cho vay cũng gặp khó, có thêm <b>rủi ro tín dụng đối tác</b>. Đo từng rủi ro riêng lẻ sẽ đánh giá thấp tổng rủi ro.</p></details></div>`,
    },
    {
      title: '7. Đo lường rủi ro',
      minutes: 16,
      html: `
<p>Mỗi loại rủi ro có thước đo riêng (LOS 7):</p>
<table class="plain"><thead><tr><th>Thước đo</th><th>Đo cái gì</th><th>Ví dụ</th></tr></thead><tbody>
<tr><td>Độ lệch chuẩn</td><td>Biến động tổng thể</td><td>σ năm 15%</td></tr>
<tr><td>Beta</td><td>Độ nhạy của cổ phiếu với thị trường</td><td>Beta 1,2, thị trường -10%: danh mục khoảng -12%</td></tr>
<tr><td>Duration</td><td>Độ nhạy của giá trái phiếu với lãi suất</td><td>Duration 6, lãi suất +0,5%: giá khoảng -3%</td></tr>
<tr><td>Delta, gamma, vega, rho</td><td>Độ nhạy của quyền chọn với giá tài sản cơ sở, độ cong, biến động, lãi suất</td><td>Delta 0,6, cổ phiếu +2: quyền chọn khoảng +1,2</td></tr>
<tr><td>Rủi ro tín dụng</td><td>Xác suất vỡ nợ, tổn thất khi vỡ nợ, mức phơi nhiễm</td><td>Xếp hạng tín nhiệm</td></tr>
</tbody></table>

<h4>Value at Risk (VaR)</h4>
<p>${t('var', 'VaR')} là mức thua lỗ <b>tối thiểu</b> dự kiến sẽ bị vượt qua với một xác suất cho trước, trong một khoảng thời gian cho trước.</p>
<div class="example"><div class="ex-h">Ví dụ 7.1</div>
<p>Danh mục 20.000.000 USD, lợi suất ngày có trung bình 0 và độ lệch chuẩn 1,5%, phân phối chuẩn. Tính VaR 1 ngày ở mức 5% và 1%.</p>
<details><summary>Xem lời giải</summary>
<p>VaR 5% = 1,645 × 1,5% × 20.000.000 = <b>493.500 USD</b>.<br>VaR 1% = 2,326 × 1,5% × 20.000.000 = <b>697.800 USD</b>.</p>
<p>Diễn giải: có <b>5% khả năng</b> trong một ngày danh mục lỗ <b>ít nhất</b> 493.500 USD. Không phải "lỗ tối đa 493.500 USD".</p></details></div>
<p class="warn"><b>Hạn chế của VaR:</b> không cho biết lỗ lớn đến đâu khi đã vượt VaR; phụ thuộc giả định phân phối (thường đánh giá thấp rủi ro đuôi); VaR của các bộ phận không cộng lại thành VaR tổng. Vì vậy dùng thêm ${t('cvar', 'CVaR (conditional VaR)')} - lỗ trung bình khi lỗ đã vượt VaR.</p>
<h4>Thước đo bổ sung</h4>
<ul>
  <li>${t('stress', 'Kiểm tra sức chịu đựng (stress test)')}: điều gì xảy ra trong tình huống cực đoan (lãi suất +3%, cổ phiếu -40%)?</li>
  <li>${t('scenario', 'Phân tích kịch bản (scenario analysis)')}: tác động của một kịch bản cụ thể, có thể là lịch sử (khủng hoảng 2008) hoặc giả định.</li>
  <li><b>Rủi ro phi tài chính</b> khó đo hơn nhiều: thường dùng đánh giá định tính, tần suất và mức độ nghiêm trọng, hoặc dữ liệu tổn thất trong quá khứ.</li>
</ul>`,
    },
    {
      title: '8. Điều chỉnh rủi ro và lựa chọn phương pháp',
      minutes: 13,
      html: `
<p>Sau khi đo, nếu rủi ro thực tế lệch khỏi risk tolerance thì phải điều chỉnh. Có 4 nhóm phương pháp (LOS 7):</p>
<table class="plain"><thead><tr><th>Phương pháp</th><th>Cách làm</th><th>Ví dụ</th></tr></thead><tbody>
<tr><td>${t('avoid', 'Ngăn ngừa và tránh (prevention and avoidance)')}</td><td>Không tham gia hoạt động, hoặc đặt biện pháp phòng ngừa</td><td>Không kinh doanh ở quốc gia bất ổn; hệ thống kiểm soát nội bộ</td></tr>
<tr><td>${t('accept', 'Chấp nhận (risk acceptance)')}</td><td>Giữ rủi ro: ${t('selfins', 'tự bảo hiểm (self-insurance)')} bằng quỹ dự phòng, hoặc đa dạng hóa</td><td>Lập quỹ dự phòng tổn thất; nắm nhiều cổ phiếu</td></tr>
<tr><td>${t('transfer', 'Chuyển giao (risk transfer)')}</td><td>Trả phí để bên khác gánh tổn thất, chủ yếu qua bảo hiểm</td><td>Mua bảo hiểm cháy nổ, bảo lãnh (surety bond)</td></tr>
<tr><td>${t('shift', 'Dịch chuyển (risk shifting)')}</td><td>Thay đổi phân phối kết quả bằng phái sinh</td><td>Kỳ hạn, tương lai, hoán đổi lãi suất, quyền chọn bán để bảo vệ</td></tr>
</tbody></table>
<p class="tip">Phân biệt <b>transfer</b> và <b>shifting</b>: transfer là đẩy tổn thất cho công ty bảo hiểm (bảo hiểm); shifting là đổi hình dạng rủi ro bằng phái sinh (ví dụ swap đổi lãi suất cố định sang thả nổi).</p>

<h4>Chọn phương pháp nào?</h4>
<p>Nguyên tắc chung: chọn phương pháp có <b>lợi ích lớn nhất so với chi phí</b>, trong giới hạn risk tolerance. Một gợi ý theo tần suất và mức độ nghiêm trọng của tổn thất:</p>
<table class="plain"><thead><tr><th></th><th>Mức độ nhẹ</th><th>Mức độ nghiêm trọng</th></tr></thead><tbody>
<tr><td>Tần suất thấp</td><td>Chấp nhận, tự bảo hiểm</td><td>Chuyển giao (bảo hiểm)</td></tr>
<tr><td>Tần suất cao</td><td>Giảm thiểu, kiểm soát, tự bảo hiểm</td><td>Tránh</td></tr>
</tbody></table>
<p>Các yếu tố khác: chi phí bảo hiểm hoặc phái sinh, chuyên môn của tổ chức, rủi ro đối tác khi dùng phái sinh, tác động thuế và kế toán. Có thể kết hợp nhiều phương pháp cho cùng một rủi ro.</p>
<div class="example"><div class="ex-h">Ví dụ 8.1</div>
<p>Một công ty xuất khẩu nhận 10 triệu EUR sau 6 tháng. Công ty bán kỳ hạn EUR để chốt tỷ giá. Đồng thời, công ty mua bảo hiểm hàng hóa trên đường vận chuyển. Hai việc này là phương pháp nào?</p>
<details><summary>Xem lời giải</summary><p>Bán kỳ hạn EUR: <b>risk shifting</b> (dùng phái sinh). Mua bảo hiểm hàng hóa: <b>risk transfer</b>.</p></details></div>`,
    },
    {
      title: '9. Tóm tắt và bẫy thường gặp',
      minutes: 4,
      html: `
<table class="plain"><thead><tr><th>Tình huống</th><th>Nhớ</th></tr></thead><tbody>
<tr><td>Quản lý rủi ro</td><td>Làm cho rủi ro thực tế khớp risk tolerance, không phải giảm thiểu rủi ro</td></tr>
<tr><td>Ai quyết định risk tolerance?</td><td>Hội đồng quản trị (risk governance), từ trên xuống</td></tr>
<tr><td>Khung quản lý rủi ro</td><td>Governance, đo lường, hạ tầng, chính sách, theo dõi, truyền thông, tích hợp chiến lược</td></tr>
<tr><td>Risk budgeting</td><td>Phân bổ tổng rủi ro được phép; đơn vị: σ, beta, VaR, TE</td></tr>
<tr><td>Tài chính và phi tài chính</td><td>Tài chính: thị trường, tín dụng, thanh khoản. Còn lại là phi tài chính</td></tr>
<tr><td>Tương tác</td><td>Tác động kết hợp thường lớn hơn tổng, nhất là trong khủng hoảng</td></tr>
<tr><td>VaR 5%</td><td>5% khả năng lỗ <b>ít nhất</b> bằng VaR, không phải lỗ tối đa</td></tr>
<tr><td>Transfer và shifting</td><td>Bảo hiểm là transfer; phái sinh là shifting</td></tr>
</tbody></table>
<p>Tiếp theo: tab <b>Luyện tập</b> - 10 câu. Đây là module cuối của Portfolio Construction.</p>`,
    },
  ];

  const glossary = {
    rm: ['Risk management', 'Quản lý rủi ro', 'Quá trình xác định risk tolerance, đo lường, theo dõi và điều chỉnh rủi ro cho khớp với mức mong muốn.'],
    tolerance: ['Risk tolerance', 'Mức chấp nhận rủi ro', 'Mức và loại rủi ro tổ chức sẵn lòng và có khả năng chấp nhận để đạt mục tiêu.'],
    framework: ['Risk management framework', 'Khung quản lý rủi ro', 'Hạ tầng, quy trình và công cụ để quản lý rủi ro trong toàn tổ chức.'],
    governance: ['Risk governance', 'Quản trị rủi ro', 'Hệ thống quản trị từ trên xuống, do hội đồng quản trị dẫn dắt, để rủi ro phù hợp mục tiêu tổ chức.'],
    infra: ['Risk infrastructure', 'Hạ tầng rủi ro', 'Con người, dữ liệu, mô hình và hệ thống để theo dõi rủi ro.'],
    rmc: ['Risk management committee', 'Ủy ban quản lý rủi ro', 'Ủy ban chuyên trách thay mặt hội đồng quản trị giám sát rủi ro.'],
    cro: ['Chief risk officer (CRO)', 'Giám đốc rủi ro', 'Người lãnh đạo chức năng quản lý rủi ro, độc lập với bộ phận kinh doanh.'],
    erm: ['Enterprise risk management (ERM)', 'Quản lý rủi ro toàn doanh nghiệp', 'Quản lý rủi ro trên cơ sở toàn tổ chức thay vì từng bộ phận riêng lẻ.'],
    budget: ['Risk budgeting', 'Ngân sách rủi ro', 'Phân bổ tổng mức rủi ro được phép cho các bộ phận, tài sản hoặc nhà quản lý.'],
    var: ['Value at risk (VaR)', 'Giá trị chịu rủi ro', 'Mức lỗ tối thiểu sẽ bị vượt qua với xác suất cho trước trong khoảng thời gian cho trước.'],
    te: ['Tracking error', 'Sai số bám', 'Độ lệch chuẩn của chênh lệch lợi suất giữa danh mục và benchmark.'],
    factor: ['Risk factor', 'Yếu tố rủi ro', 'Nguồn rủi ro chung như cổ phiếu, lãi suất, tín dụng, lạm phát.'],
    market: ['Market risk', 'Rủi ro thị trường', 'Rủi ro do biến động lãi suất, tỷ giá, giá cổ phiếu và hàng hóa.'],
    credit: ['Credit risk', 'Rủi ro tín dụng', 'Rủi ro đối tác không thực hiện nghĩa vụ thanh toán.'],
    liq: ['Liquidity risk', 'Rủi ro thanh khoản', 'Rủi ro phải bán tài sản giá thấp hoặc không bán được khi cần tiền.'],
    model: ['Model risk', 'Rủi ro mô hình', 'Rủi ro do mô hình sai hoặc bị dùng sai.'],
    tail: ['Tail risk', 'Rủi ro đuôi', 'Sự kiện cực đoan xảy ra thường hơn giả định của mô hình.'],
    oprisk: ['Operational risk', 'Rủi ro hoạt động', 'Tổn thất do con người, quy trình, hệ thống nội bộ hoặc sự kiện bên ngoài, kể cả tấn công mạng.'],
    solvency: ['Solvency risk', 'Rủi ro mất khả năng thanh toán', 'Rủi ro tổ chức cạn tiền và không thể tiếp tục hoạt động.'],
    longevity: ['Longevity risk', 'Rủi ro tuổi thọ', 'Rủi ro sống lâu hơn số tiền tích lũy cho nghỉ hưu.'],
    cvar: ['Conditional VaR (CVaR)', 'VaR có điều kiện', 'Mức lỗ trung bình khi lỗ đã vượt quá VaR.'],
    stress: ['Stress testing', 'Kiểm tra sức chịu đựng', 'Đánh giá tổn thất trong các tình huống thị trường cực đoan.'],
    scenario: ['Scenario analysis', 'Phân tích kịch bản', 'Đánh giá tác động của một kịch bản cụ thể, lịch sử hoặc giả định.'],
    avoid: ['Risk prevention and avoidance', 'Ngăn ngừa và tránh rủi ro', 'Không tham gia hoạt động rủi ro hoặc đặt biện pháp ngăn tổn thất xảy ra.'],
    accept: ['Risk acceptance', 'Chấp nhận rủi ro', 'Giữ lại rủi ro, qua tự bảo hiểm hoặc đa dạng hóa.'],
    selfins: ['Self-insurance', 'Tự bảo hiểm', 'Tự lập quỹ dự phòng để bù tổn thất thay vì mua bảo hiểm.'],
    transfer: ['Risk transfer', 'Chuyển giao rủi ro', 'Trả phí để bên khác (thường là công ty bảo hiểm) gánh tổn thất.'],
    shift: ['Risk shifting', 'Dịch chuyển rủi ro', 'Dùng phái sinh để thay đổi phân phối kết quả.'],
  };

  const practice = [
    { q: 'Quản lý rủi ro được mô tả đúng nhất là:', choices: ['Giảm rủi ro xuống mức thấp nhất có thể.', 'Tránh mọi khoản thua lỗ của tổ chức.', 'Xác định risk tolerance, đo lường và điều chỉnh rủi ro để rủi ro thực tế khớp với mức mong muốn.'], answer: 2, explain: 'Quản lý rủi ro là làm cho rủi ro khớp với risk tolerance, không phải giảm tối đa. Giảm rủi ro xuống mức thấp nhất khiến tổ chức bỏ lỡ lợi nhuận. Tránh mọi khoản thua lỗ là không thể đạt được: tổ chức quản lý rủi ro tốt vẫn có thể lỗ.' },
    { q: 'Trong cơ cấu quản trị rủi ro, ai chịu trách nhiệm cuối cùng trong việc phê duyệt risk tolerance của tổ chức?', choices: ['Hội đồng quản trị', 'Các giao dịch viên', 'Kiểm toán độc lập bên ngoài'], answer: 0, explain: 'Risk governance là từ trên xuống: hội đồng quản trị phê duyệt risk tolerance, ban điều hành và CRO thực hiện. Giao dịch viên là người chấp nhận rủi ro, không đặt giới hạn. Kiểm toán độc lập bên ngoài không thuộc cơ cấu quản trị rủi ro nội bộ.' },
    { q: 'Yếu tố "hạ tầng rủi ro" (risk infrastructure) trong khung quản lý rủi ro chủ yếu là:', choices: ['Việc hội đồng quản trị đặt mức chấp nhận rủi ro.', 'Con người, dữ liệu, mô hình và hệ thống dùng để theo dõi rủi ro.', 'Việc phân bổ tổng rủi ro cho các bộ phận.'], answer: 1, explain: 'Hạ tầng là nguồn lực và hệ thống. Việc hội đồng quản trị đặt mức chấp nhận rủi ro thuộc risk governance. Phân bổ tổng rủi ro cho các bộ phận là risk budgeting.' },
    { q: 'Một công ty có vốn mỏng và thanh khoản yếu, nhưng ban lãnh đạo muốn tăng trưởng nhanh để bắt kịp đối thủ. Risk tolerance phù hợp:', choices: ['Cao, vì cần bắt kịp đối thủ cạnh tranh.', 'Thấp hơn, vì khả năng hấp thụ tổn thất của công ty hạn chế.', 'Không bị ảnh hưởng bởi tình hình tài chính.'], answer: 1, explain: 'Risk tolerance phải xét cả sức mạnh tài chính: vốn mỏng, thanh khoản yếu nghĩa là một tổn thất lớn có thể làm công ty thất bại. Phương án \'cao, vì cần bắt kịp đối thủ\' chỉ xét sự sẵn lòng. Phương án \'không bị ảnh hưởng bởi tình hình tài chính\' bỏ qua yếu tố bên trong quan trọng nhất.' },
    { q: 'Danh mục 20.000.000 USD, lợi suất ngày có trung bình 0 và độ lệch chuẩn 1,5%, phân phối chuẩn. VaR 1 ngày ở mức 5% gần nhất với:', choices: ['493.500 USD', '300.000 USD', '697.800 USD'], answer: 0, explain: 'VaR 5% = 1,645 x 1,5% x 20.000.000 = 493.500. Lựa chọn 300.000 USD chỉ là 1 độ lệch chuẩn. Lựa chọn 697.800 USD dùng 2,326, tức VaR ở mức 1%.' },
    { q: 'VaR 1 ngày ở mức 5% của một danh mục là 493.500 USD. Diễn giải đúng là:', choices: ['Danh mục lỗ tối đa 493.500 USD trong một ngày.', 'Có 95% khả năng danh mục lỗ ít nhất 493.500 USD trong một ngày.', 'Có 5% khả năng danh mục lỗ ít nhất 493.500 USD trong một ngày.'], answer: 2, explain: 'VaR là mức lỗ tối thiểu bị vượt với xác suất 5%. Phương án \'lỗ tối đa\' sai vì VaR không phải lỗ tối đa; lỗ thực tế có thể lớn hơn nhiều. Phương án \'95% khả năng\' đảo ngược xác suất.' },
    { q: 'Một nhà máy mua bảo hiểm cháy nổ cho toàn bộ nhà xưởng. Đây là phương pháp điều chỉnh rủi ro nào?', choices: ['Chuyển giao rủi ro (risk transfer)', 'Dịch chuyển rủi ro (risk shifting)', 'Tự bảo hiểm (self-insurance)'], answer: 0, explain: 'Bảo hiểm là chuyển giao tổn thất cho công ty bảo hiểm. Risk shifting là dùng phái sinh. Tự bảo hiểm là tự lập quỹ dự phòng, tức là chấp nhận rủi ro.' },
    { q: 'Một công ty có khoản vay lãi suất thả nổi ký hợp đồng hoán đổi để trả lãi cố định. Đây là:', choices: ['Chuyển giao rủi ro (risk transfer)', 'Tránh rủi ro (risk avoidance)', 'Dịch chuyển rủi ro (risk shifting)'], answer: 2, explain: 'Dùng phái sinh (swap) để thay đổi phân phối kết quả là risk shifting. Risk transfer là bảo hiểm. Tránh rủi ro là không tham gia hoạt động - công ty vẫn giữ khoản vay.' },
    { q: 'Ngân sách rủi ro (risk budgeting) được mô tả đúng nhất là:', choices: ['Việc hội đồng quản trị xác định tổng mức rủi ro chấp nhận được.', 'Việc phân bổ tổng mức rủi ro được phép cho các bộ phận, nhóm tài sản hoặc nhà quản lý, đo bằng các đơn vị như VaR hay tracking error.', 'Việc mua bảo hiểm cho các rủi ro vượt quá hạn mức.'], answer: 1, explain: 'Risk budgeting là phân bổ rủi ro, sau khi đã có risk tolerance. Việc hội đồng quản trị xác định tổng mức rủi ro là xác định risk tolerance. Mua bảo hiểm là một phương pháp điều chỉnh rủi ro (transfer).' },
    { q: 'Trong khủng hoảng, giá tài sản giảm làm đối tác phái sinh gặp khó, đồng thời nhiều quỹ cùng phải bán tài sản để đáp ứng ký quỹ. Nhận định đúng nhất:', choices: ['Rủi ro thị trường, tín dụng và thanh khoản tương tác, khuếch đại nhau nên tổng tác động lớn hơn tổng từng phần.', 'Các rủi ro này độc lập nên có thể đo và quản lý riêng rẽ mà không mất gì.', 'Đa dạng hóa giữa các loại rủi ro luôn làm tổng rủi ro giảm mạnh trong khủng hoảng.'], answer: 0, explain: 'Rủi ro tương tác: giá giảm (thị trường) làm đối tác yếu đi (tín dụng) và bán tháo (thanh khoản). Phương án coi các rủi ro là độc lập bỏ qua tương tác. Phương án \'đa dạng hóa luôn làm tổng rủi ro giảm mạnh\' sai vì trong khủng hoảng tương quan tăng, lợi ích đa dạng hóa giảm.' },
  ];

  window.LESSONS['PC-06'] = {
    moduleId: 'PC-06',
    calculator: 'Không cần máy tính',
    warmup: [
      'Ở PC-04, mục tiêu rủi ro trong IPS có thể nêu theo những cách nào?',
      'Theo bạn, một ngân hàng nên giảm rủi ro tín dụng xuống bằng 0 không? Vì sao?',
      'Kể tên 3 rủi ro mà một gia đình bình thường gặp phải và cách họ xử lý chúng.',
    ],
    sections,
    glossary,
    practice,
    widgets: {},
    slides: [],
    wrapup: [
      'Viết định nghĩa quản lý rủi ro bằng lời của bạn trong một câu.',
      'Liệt kê 3 rủi ro tài chính và ít nhất 5 rủi ro phi tài chính.',
      'Phân biệt 4 phương pháp điều chỉnh rủi ro bằng một ví dụ cho mỗi loại.',
    ],
  };
}());
