// Bài giảng FI-18 - Asset-Backed Security (ABS) Instrument and Market Features (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t, keys } = window.CFAH;

  const sections = [
    {
      title: '1. Bức tranh lớn',
      minutes: 5,
      html: `
<p>FI-17 cho ta bộ khung: bên khởi tạo bán danh mục cho SPE, SPE phát hành ABS. Module này trả lời ba câu hỏi tiếp theo:</p>
<ol>
  <li><b>Có cách nào khác để huy động vốn bằng tài sản mà không bán chúng đi không?</b> Có: ${t('covered', 'trái phiếu có bảo đảm (covered bond)')}. LOS 1 - phần 2.</li>
  <li><b>Làm sao tầng senior đạt AAA khi các khoản vay bên dưới chỉ là nợ tiêu dùng bình thường?</b> Nhờ ${t('ce', 'tăng cường tín dụng (credit enhancement)')}. LOS 2 - phần 3 và 4.</li>
  <li><b>Những loại ABS nào ngoài thế chấp nhà?</b> ABS cho vay mua ô tô, ABS thẻ tín dụng, ABS điện mặt trời (LOS 3 - phần 5) và ${t('cdo', 'nghĩa vụ nợ có tài sản đảm bảo (CDO)')} (LOS 4 - phần 6).</li>
</ol>
<div class="key">Ý chính của cả module: <b>tổn thất của danh mục không chia đều</b>. Cấu trúc quyết định ai chịu lỗ trước, ai được trả trước. Hiểu "thác nước" phân bổ lỗ là hiểu được ABS.</div>
<p class="tip">MBS (chứng khoán đảm bảo bằng thế chấp) và rủi ro trả nợ trước hạn để dành cho FI-19. Ở đây ta tập trung vào rủi ro <b>tín dụng</b>.</p>`,
    },
    {
      title: '2. Covered bond: tài sản ở lại bảng cân đối',
      minutes: 12,
      html: `
<p>${t('covered', 'Covered bond')} là trái phiếu <b>cao cấp</b> do một tổ chức tài chính (thường là ngân hàng) phát hành, được bảo đảm bằng một danh mục tài sản tách riêng gọi là ${t('coverpool', 'danh mục bảo đảm (cover pool)')}, thường là khoản vay thế chấp nhà ở, thế chấp bất động sản thương mại hoặc nợ khu vực công. Phổ biến nhất ở châu Âu, được điều chỉnh bởi luật riêng.</p>
<table class="plain"><thead><tr><th>Đặc điểm</th><th>Covered bond</th><th>ABS thông thường</th></tr></thead><tbody>
<tr><td>Tài sản đảm bảo</td><td><b>Ở lại</b> bảng cân đối của ngân hàng phát hành</td><td>Bán sang SPE, rời bảng cân đối</td></tr>
<tr><td>Quyền đòi nợ</td><td>${t('dualrec', 'Truy đòi kép (dual recourse)')}: đòi ngân hàng phát hành, và nếu ngân hàng vỡ nợ thì đòi cover pool</td><td>Chỉ đòi dòng tiền của danh mục trong SPE</td></tr>
<tr><td>Danh mục</td><td><b>Động (dynamic)</b>: tài sản xấu hoặc trả trước phải được <b>thay</b> bằng tài sản đạt chuẩn</td><td>Thường <b>tĩnh</b>: danh mục cố định, khoản vay trả hết thì thôi</td></tr>
<tr><td>Phân tầng</td><td>Thường một lớp, không phân tầng</td><td>Nhiều tầng senior, mezzanine, subordinated</td></tr>
<tr><td>Rủi ro, lợi suất</td><td>Rủi ro tín dụng thấp hơn → <b>lợi suất thấp hơn</b></td><td>Rủi ro cao hơn, lợi suất cao hơn</td></tr>
</tbody></table>
<p>Ngân hàng còn phải duy trì giá trị cover pool <b>lớn hơn</b> dư nợ trái phiếu (thế chấp vượt mức), và chịu sự giám sát của cơ quan quản lý.</p>
<h4>Ba chế độ hoàn trả khi ngân hàng phát hành gặp khó</h4>
<table class="plain"><thead><tr><th>Chế độ</th><th>Nếu không trả đúng hạn</th></tr></thead><tbody>
<tr><td>${t('hardbullet', 'Hard bullet')}</td><td>Trễ hạn là <b>vỡ nợ ngay</b>, trái chủ có quyền đòi tăng tốc thanh toán</td></tr>
<tr><td>${t('softbullet', 'Soft bullet')}</td><td>Ngày đáo hạn được <b>gia hạn</b> (thường tới khoảng 12 tháng) để có thời gian bán tài sản</td></tr>
<tr><td>${t('cpt', 'Conditional pass-through')}</td><td>Trái phiếu <b>chuyển thành dạng pass-through</b>: trả dần theo dòng tiền thu từ cover pool cho đến khi hết</td></tr>
</tbody></table>
<div class="key">Mức bảo vệ trái chủ giảm dần: hard bullet → soft bullet → conditional pass-through. Bảo vệ càng ít thì người phát hành có càng nhiều thời gian xử lý tài sản (và thường lợi suất đòi hỏi càng cao).</div>
<p class="warn"><b>Bẫy:</b> covered bond <b>không</b> rời bảng cân đối và có quyền đòi chính ngân hàng. Câu nào nói "covered bond được bán sang SPE và chỉ đòi được tài sản" là mô tả ABS, không phải covered bond.</p>`,
    },
    {
      title: '3. Phân tầng tín dụng: thác nước phân bổ lỗ',
      minutes: 15,
      html: `
<p>Dạng tăng cường tín dụng nội bộ quan trọng nhất là ${t('subord', 'thứ cấp hóa (subordination)')}, còn gọi là ${t('crtranch', 'phân tầng tín dụng (credit tranching)')}. Danh mục được chia thành các tầng có thứ tự ưu tiên khác nhau:</p>
<ul>
  <li><b>Dòng tiền</b> trả từ trên xuống: senior trước, rồi mezzanine, cuối cùng tầng thấp nhất.</li>
  <li><b>Tổn thất</b> phân bổ từ dưới lên: tầng thấp nhất (thường gọi là equity hay first-loss) chịu lỗ đầu tiên đến khi bị xóa sạch, rồi mới tới tầng trên.</li>
</ul>
<p>Quy tắc này gọi là ${t('waterfall', 'thác nước (waterfall)')}. Phần các tầng thấp hơn "đỡ" cho một tầng gọi là <b>mức thứ cấp</b> của tầng đó.</p>
<div class="example"><div class="ex-h">Ví dụ 3.1 - Phân bổ lỗ cho ba tầng</div>
<p>Danh mục 100 triệu USD được chia: tầng A (senior) 75 triệu, tầng B (mezzanine) 15 triệu, tầng C (subordinated) 10 triệu. Phân bổ tổn thất nếu danh mục lỗ (a) 6 triệu, (b) 18 triệu, (c) 30 triệu.</p>
<details><summary>Xem lời giải</summary>
<table class="plain"><thead><tr><th>Lỗ danh mục</th><th>Tầng C (10)</th><th>Tầng B (15)</th><th>Tầng A (75)</th></tr></thead><tbody>
<tr><td>6</td><td>6 (60%)</td><td>0</td><td>0</td></tr>
<tr><td>18</td><td>10 (100%)</td><td>8 (53,33%)</td><td>0</td></tr>
<tr><td>30</td><td>10 (100%)</td><td>15 (100%)</td><td>5 (6,67%)</td></tr>
</tbody></table>
<p>Tầng A có mức thứ cấp 25 triệu (B + C), tức 25% danh mục: danh mục phải lỗ hơn 25% thì tầng A mới mất đồng nào. Tầng B có mức thứ cấp 10%.</p></details></div>
<h4>Thử ngay: kéo thanh tổn thất của danh mục</h4>
<div class="widget" data-widget="waterfall"></div>
<div class="key">Vì sao nhà đầu tư nào cũng có lợi? Nhà đầu tư thận trọng mua tầng A gần như không rủi ro tín dụng với lợi suất thấp; nhà đầu tư chấp nhận rủi ro mua tầng C với lợi suất cao. Cấu trúc chỉ <b>phân phối lại</b> rủi ro, không làm giảm tổng rủi ro của danh mục.</div>
<p class="tip">Cấu trúc dạng này còn gọi là <b>senior/subordinated structure</b>. Lỗi hay gặp khi tính: chia lỗ <b>tỷ lệ</b> cho mọi tầng. Sai: lỗ luôn đổ vào tầng thấp nhất trước.</p>`,
    },
    {
      title: '4. Các dạng tăng cường tín dụng khác',
      minutes: 10,
      html: `
<h4>Nội bộ (internal): nằm trong chính cấu trúc</h4>
<table class="plain"><thead><tr><th>Dạng</th><th>Cách hoạt động</th></tr></thead><tbody>
<tr><td>Subordination</td><td>Tầng thấp chịu lỗ trước (phần 3)</td></tr>
<tr><td>${t('oc', 'Thế chấp vượt mức (overcollateralization)')}</td><td>Giá trị tài sản đảm bảo <b>lớn hơn</b> mệnh giá ABS phát hành; phần dôi ra hấp thụ lỗ đầu tiên</td></tr>
<tr><td>${t('es', 'Chênh lệch lãi dư (excess spread)')}</td><td>Lãi thu từ danh mục lớn hơn coupon trả nhà đầu tư cộng phí; phần dư dùng bù lỗ hoặc tích vào tài khoản dự phòng</td></tr>
<tr><td>${t('reserve', 'Tài khoản dự phòng (reserve account)')}</td><td>Tiền mặt để sẵn (cash reserve fund) hoặc tích lũy từ excess spread, dùng khi thiếu tiền trả</td></tr>
</tbody></table>
<div class="example"><div class="ex-h">Ví dụ 4.1 - Thế chấp vượt mức và excess spread</div>
<p>Danh mục 105 triệu USD, lợi suất 8%/năm, đứng sau 100 triệu ABS (A 75, B 15, C 10) có coupon bình quân 5%. Phí servicing và chi phí 0,5% trên danh mục. (a) Mức thế chấp vượt mức? (b) Excess spread một năm? (c) Nếu danh mục lỗ 12 triệu, ai chịu?</p>
<details><summary>Xem lời giải</summary>
<p>(a) OC = 105 - 100 = <b>5 triệu</b> (4,76% danh mục).<br>
(b) Lãi thu = 8% × 105 = 8,4; coupon = 5% × 100 = 5,0; phí = 0,5% × 105 = 0,525. Excess spread = 8,4 - 5,0 - 0,525 = <b>2,875 triệu</b> (khoảng 2,74% danh mục).<br>
(c) Bỏ qua excess spread: OC hấp thụ 5 triệu đầu tiên, tầng C chịu 7 triệu còn lại (mất 70%); tầng A và B chưa bị ảnh hưởng. Nếu excess spread được dùng để bù lỗ, tầng C còn chịu ít hơn.</p></details></div>
<h4>Bên ngoài (external): bên thứ ba bảo lãnh</h4>
<ul>
  <li>${t('guarantee', 'Bảo lãnh tài chính (financial guarantee, surety bond)')} của công ty bảo hiểm hoặc ngân hàng: cam kết bù lỗ đến một mức nhất định.</li>
  <li>${t('loc', 'Thư tín dụng (letter of credit)')}: ngân hàng cam kết cho SPE vay để bù thiếu hụt.</li>
</ul>
<p class="warn"><b>Nhược điểm của bảo lãnh bên ngoài:</b> chất lượng tín dụng của ABS chỉ tốt bằng <b>bên bảo lãnh</b>. Bên bảo lãnh bị hạ hạng thì ABS cũng bị hạ hạng theo (đây là rủi ro tín dụng bên thứ ba, thấy rõ khi các công ty bảo hiểm trái phiếu gặp khó năm 2008). Vì vậy cấu trúc hiện đại dựa chủ yếu vào tăng cường nội bộ.</p>`,
    },
    {
      title: '5. ABS ngoài thế chấp: ô tô, thẻ tín dụng, điện mặt trời',
      minutes: 10,
      html: `
<p>Điểm phân biệt lớn nhất: tài sản đảm bảo là ${t('amort', 'khoản vay trả dần (amortizing)')} hay ${t('nonamort', 'khoản vay quay vòng (non-amortizing)')}.</p>
<h4>a) ABS cho vay mua ô tô (auto loan ABS) - trả dần</h4>
<p>Dòng tiền gồm <b>lãi</b>, <b>gốc theo lịch</b> và <b>gốc trả trước hạn</b> (người vay bán xe, xe bị mất cắp hoặc hư hỏng được bảo hiểm trả, tái cấp vốn). Tăng cường tín dụng thường kết hợp subordination, OC, reserve account và excess spread.</p>
<div class="example"><div class="ex-h">Ví dụ 5.1 - Một khoản vay trong danh mục</div>
<p>Vay 30.000 USD mua xe, 60 tháng, lãi suất 6%/năm trả hằng tháng. Khoản trả góp mỗi tháng và phần gốc tháng đầu?</p>
<details><summary>Xem lời giải</summary>
${keys([
  ['Xóa TVM (đã đặt P/Y = 1)', '[2ND] [FV]', '0'],
  ['Số kỳ', '60 [N]', 'N = 60'],
  ['Lãi suất tháng', '0.5 [I/Y]', 'I/Y = 0.5'],
  ['Số tiền vay', '30000 [PV]', 'PV = 30,000'],
  ['Trả hết', '0 [FV]', 'FV = 0'],
  ['Tính', '[CPT] [PMT]', 'PMT = -579.98'],
])}
<p>Trả góp <b>579,98 USD/tháng</b>. Tháng đầu: lãi = 0,5% × 30.000 = 150,00; gốc = 579,98 - 150,00 = <b>429,98</b>. Nhà đầu tư ABS nhận cả hai phần (trừ phí), cộng với gốc trả trước nếu có.</p></details></div>
<h4>b) ABS thẻ tín dụng - quay vòng</h4>
<ul>
  <li>Dòng tiền từ danh mục: phí tài chính (lãi trên dư nợ), phí thường niên, phí trả chậm, và gốc chủ thẻ trả.</li>
  <li>${t('lockout', 'Thời kỳ khóa (lockout / revolving period)')}: nhà đầu tư chỉ nhận <b>lãi</b>; gốc thu được dùng để <b>mua khoản phải thu thẻ mới</b>, giữ quy mô danh mục. Ví dụ danh mục 500 triệu USD, chủ thẻ trả 20% dư nợ mỗi tháng: 100 triệu gốc thu về được tái đầu tư vào khoản phải thu mới.</li>
  <li>Hết thời kỳ khóa: gốc được chuyển cho nhà đầu tư (giai đoạn trả gốc).</li>
  <li>${t('earlyam', 'Điều khoản trả gốc sớm (early / rapid amortization)')}: nếu xảy ra sự kiện kích hoạt (ví dụ tổn thất tăng mạnh, excess spread âm), gốc được trả ngay cho nhà đầu tư để bảo vệ họ.</li>
  <li>Coupon có thể cố định hoặc thả nổi. Trong thời kỳ khóa, nhà đầu tư gần như <b>không</b> chịu rủi ro trả trước.</li>
</ul>
<h4>c) ABS điện mặt trời (solar ABS)</h4>
<p>Danh mục là khoản vay (hoặc hợp đồng thuê, mua điện) của hộ gia đình lắp tấm pin mặt trời. Người vay thường có điểm tín dụng tốt; dòng tiền trả nợ được hỗ trợ bởi khoản tiết kiệm tiền điện. Rủi ro gồm: tín dụng của hộ gia đình, trả trước (ví dụ khi bán nhà hoặc nhận ưu đãi thuế), thay đổi chính sách hỗ trợ và hiệu suất thiết bị.</p>
<p class="tip">So sánh nhanh: auto ABS <b>trả dần</b>, có rủi ro trả trước; credit card ABS <b>quay vòng</b>, có lockout và rapid amortization.</p>`,
    },
    {
      title: '6. CDO: phân tầng một danh mục nợ',
      minutes: 15,
      html: `
<p>${t('cdo', 'CDO (collateralized debt obligation)')} là cấu trúc phát hành nhiều tầng nợ và một tầng vốn, đảm bảo bằng một danh mục <b>công cụ nợ</b> đa dạng. Gọi tên theo tài sản đảm bảo:</p>
<table class="plain"><thead><tr><th>Loại</th><th>Tài sản đảm bảo</th></tr></thead><tbody>
<tr><td>CBO (collateralized bond obligation)</td><td>Trái phiếu doanh nghiệp, trái phiếu chính phủ thị trường mới nổi</td></tr>
<tr><td>${t('clo', 'CLO (collateralized loan obligation)')}</td><td>Khoản vay doanh nghiệp đòn bẩy cao (leveraged loans) - loại phổ biến nhất hiện nay</td></tr>
<tr><td>Structured finance CDO</td><td>Các tầng ABS, RMBS, CMBS, CDO khác</td></tr>
<tr><td>${t('synth', 'Synthetic CDO')}</td><td>Không mua tài sản thật, nhận phơi nhiễm qua hợp đồng hoán đổi rủi ro tín dụng (CDS)</td></tr>
</tbody></table>
<p>Khác với ABS thông thường, danh mục CDO được một ${t('cmanager', 'nhà quản lý tài sản đảm bảo (collateral manager)')} <b>quản lý chủ động</b>: mua bán tài sản, tái đầu tư tiền thu về, tuân thủ các ràng buộc của hợp đồng.</p>
<h4>Dòng tiền và "kinh doanh chênh lệch"</h4>
<p>Tiền lãi từ danh mục trả lần lượt cho tầng senior, mezzanine, phí quản lý; phần còn lại thuộc về tầng equity. Giao dịch hấp dẫn khi <b>lợi suất danh mục cao hơn chi phí vốn</b> của các tầng nợ. Tầng equity được hưởng phần chênh lệch này với đòn bẩy cao.</p>
<div class="example"><div class="ex-h">Ví dụ 6.1 - Lợi suất của tầng equity trong CLO</div>
<p>CLO 200 triệu USD khoản vay lợi suất 9%. Tầng senior 160 triệu coupon 6%, tầng mezzanine 20 triệu coupon 10%, tầng equity 20 triệu. Phí quản lý 0,5% danh mục. (a) Lợi suất năm của tầng equity khi không có tổn thất? (b) Nếu tổn thất tín dụng 4 triệu? (c) 8 triệu?</p>
<details><summary>Xem lời giải</summary>
<p>Lãi danh mục = 9% × 200 = 18,0. Trả senior = 6% × 160 = 9,6; mezzanine = 10% × 20 = 2,0; phí = 0,5% × 200 = 1,0.<br>
(a) Equity nhận 18,0 - 9,6 - 2,0 - 1,0 = 5,4 triệu → 5,4 / 20 = <b>27%</b>.<br>
(b) Equity chịu lỗ trước: 5,4 - 4 = 1,4 → <b>7%</b>.<br>
(c) 5,4 - 8 = -2,6 → <b>-13%</b>. Tầng senior và mezzanine vẫn được trả đủ.</p>
<p>Tổn thất chỉ bằng 2% hay 4% danh mục mà lợi suất tầng equity giảm từ 27% xuống 7% hay -13%: đó là tác động của đòn bẩy.</p></details></div>
<h4>Kiểm định bảo vệ tầng nợ</h4>
<p>Hợp đồng CDO thường có ${t('covtest', 'kiểm định độ phủ (coverage tests)')}: kiểm định thế chấp vượt mức (giá trị danh mục so với dư nợ tầng, ví dụ 200 / 160 = 1,25 lần với tầng senior) và kiểm định độ phủ lãi. Nếu không đạt, dòng tiền bị <b>chuyển hướng</b> để trả bớt gốc tầng senior thay vì trả cho tầng thấp hơn.</p>
<div class="warn"><b>Rủi ro của CDO:</b> rủi ro vỡ nợ của danh mục; ${t('corr', 'tương quan vỡ nợ (default correlation)')} - khi nhiều tài sản vỡ nợ cùng lúc, tầng senior cũng có thể bị lỗ (bài học 2007-2009 với CDO của RMBS); rủi ro năng lực nhà quản lý; đòn bẩy cao của tầng equity; thanh khoản kém và cấu trúc phức tạp.</div>`,
    },
    {
      title: '7. Tóm tắt và bẫy thường gặp',
      minutes: 3,
      html: `
<table class="plain"><thead><tr><th>Chủ đề</th><th>Điều cần nhớ</th><th>Bẫy</th></tr></thead><tbody>
<tr><td>Covered bond</td><td>Ở lại bảng cân đối, dual recourse, cover pool động, lợi suất thấp hơn ABS</td><td>Không bán sang SPE; không phải danh mục tĩnh</td></tr>
<tr><td>Chế độ hoàn trả</td><td>Hard bullet → soft bullet (gia hạn) → conditional pass-through</td><td>Soft bullet không phải vỡ nợ ngay</td></tr>
<tr><td>Subordination</td><td>Lỗ đổ từ dưới lên, tiền trả từ trên xuống</td><td>Không chia lỗ tỷ lệ</td></tr>
<tr><td>Nội bộ khác</td><td>OC, excess spread, reserve account</td><td>Letter of credit, guarantee là <b>bên ngoài</b></td></tr>
<tr><td>Auto ABS</td><td>Trả dần: lãi + gốc lịch + trả trước</td><td>Có rủi ro trả trước</td></tr>
<tr><td>Credit card ABS</td><td>Quay vòng, lockout tái đầu tư gốc, rapid amortization khi có sự kiện</td><td>Trong lockout nhà đầu tư chỉ nhận lãi</td></tr>
<tr><td>CDO</td><td>Quản lý chủ động, equity hưởng chênh lệch có đòn bẩy, coverage tests</td><td>Tương quan vỡ nợ cao làm tầng senior cũng lỗ</td></tr>
</tbody></table>
<p>Tiếp theo: tab <b>Luyện tập</b> - 10 câu. Module sau (FI-19) chuyển sang MBS và rủi ro trả trước.</p>`,
    },
  ];

  const glossary = {
    covered: ['Covered bond', 'Trái phiếu có bảo đảm', 'Trái phiếu cao cấp của ngân hàng, bảo đảm bằng cover pool vẫn nằm trên bảng cân đối của ngân hàng; trái chủ có dual recourse.'],
    ce: ['Credit enhancement', 'Tăng cường tín dụng', 'Các cơ chế giúp tầng ABS chịu được tổn thất của danh mục: nội bộ (subordination, OC, excess spread, reserve) hoặc bên ngoài (bảo lãnh).'],
    cdo: ['Collateralized debt obligation (CDO)', 'Nghĩa vụ nợ có tài sản đảm bảo', 'Cấu trúc phân tầng đảm bảo bằng danh mục công cụ nợ, được quản lý chủ động.'],
    coverpool: ['Cover pool', 'Danh mục bảo đảm', 'Danh mục tài sản tách riêng bảo đảm cho covered bond; phải được bổ sung, thay thế khi tài sản xấu đi.'],
    dualrec: ['Dual recourse', 'Truy đòi kép', 'Trái chủ covered bond đòi được cả ngân hàng phát hành lẫn cover pool.'],
    hardbullet: ['Hard-bullet covered bond', 'Covered bond hard bullet', 'Không trả đúng hạn là vỡ nợ, trái chủ có thể đòi tăng tốc thanh toán.'],
    softbullet: ['Soft-bullet covered bond', 'Covered bond soft bullet', 'Ngày đáo hạn có thể được gia hạn (thường tới khoảng 12 tháng) trước khi coi là vỡ nợ.'],
    cpt: ['Conditional pass-through covered bond', 'Covered bond chuyển thành pass-through', 'Nếu không trả đúng hạn, trái phiếu trả dần theo dòng tiền của cover pool.'],
    subord: ['Subordination', 'Thứ cấp hóa', 'Các tầng thấp hơn chịu lỗ trước, bảo vệ tầng cao hơn.'],
    crtranch: ['Credit tranching', 'Phân tầng tín dụng', 'Chia ABS thành các tầng có thứ tự chịu lỗ khác nhau; tạo ra các mức rủi ro tín dụng khác nhau.'],
    waterfall: ['Waterfall', 'Thác nước dòng tiền', 'Quy tắc trả tiền từ trên xuống và phân bổ lỗ từ dưới lên giữa các tầng.'],
    oc: ['Overcollateralization', 'Thế chấp vượt mức', 'Giá trị tài sản đảm bảo lớn hơn mệnh giá chứng khoán phát hành; phần dôi ra hấp thụ lỗ đầu tiên.'],
    es: ['Excess spread', 'Chênh lệch lãi dư', 'Lãi thu từ danh mục trừ coupon trả nhà đầu tư và phí; dùng bù lỗ hoặc tích vào tài khoản dự phòng.'],
    reserve: ['Reserve account', 'Tài khoản dự phòng', 'Tiền mặt để sẵn hoặc tích lũy từ excess spread, dùng khi thiếu tiền trả.'],
    guarantee: ['Financial guarantee / surety bond', 'Bảo lãnh tài chính', 'Bên thứ ba (bảo hiểm, ngân hàng) cam kết bù lỗ đến một mức nhất định; là tăng cường bên ngoài.'],
    loc: ['Letter of credit', 'Thư tín dụng', 'Ngân hàng cam kết cấp tiền khi cấu trúc thiếu hụt; là tăng cường bên ngoài.'],
    amort: ['Amortizing loans', 'Khoản vay trả dần', 'Mỗi kỳ trả cả lãi và một phần gốc theo lịch, ví dụ vay mua ô tô, thế chấp nhà.'],
    nonamort: ['Non-amortizing (revolving) loans', 'Khoản vay quay vòng', 'Không có lịch trả gốc cố định, người vay trả tùy ý trên mức tối thiểu và có thể vay tiếp, ví dụ thẻ tín dụng.'],
    lockout: ['Lockout (revolving) period', 'Thời kỳ khóa', 'Giai đoạn đầu của ABS thẻ tín dụng: gốc thu được dùng mua khoản phải thu mới, nhà đầu tư chỉ nhận lãi.'],
    earlyam: ['Early (rapid) amortization provision', 'Điều khoản trả gốc sớm', 'Khi có sự kiện kích hoạt (tổn thất cao, excess spread thấp), gốc được trả ngay cho nhà đầu tư.'],
    clo: ['Collateralized loan obligation (CLO)', 'CLO', 'CDO đảm bảo bằng danh mục khoản vay doanh nghiệp đòn bẩy cao.'],
    synth: ['Synthetic CDO', 'CDO tổng hợp', 'CDO nhận phơi nhiễm tín dụng qua CDS thay vì mua tài sản thật.'],
    cmanager: ['Collateral manager', 'Nhà quản lý tài sản đảm bảo', 'Quản lý chủ động danh mục CDO: mua bán, tái đầu tư, tuân thủ kiểm định.'],
    covtest: ['Coverage tests', 'Kiểm định độ phủ', 'Kiểm định OC và độ phủ lãi; không đạt thì dòng tiền chuyển sang trả gốc tầng senior.'],
    corr: ['Default correlation', 'Tương quan vỡ nợ', 'Mức độ các tài sản cùng vỡ nợ một lúc; tương quan cao làm tầng senior dễ bị lỗ.'],
  };

  const practice = [
    { q: 'Điểm khác biệt chính giữa covered bond và ABS thông thường là trái chủ covered bond:', choices: ['Chỉ có quyền đối với dòng tiền của danh mục đã bán sang SPE.', 'Có quyền đòi cả ngân hàng phát hành lẫn cover pool, và tài sản vẫn nằm trên bảng cân đối của ngân hàng.', 'Chịu lỗ đầu tiên trước mọi chủ nợ khác của ngân hàng.'], answer: 1, explain: 'Covered bond có dual recourse và tài sản ở lại bảng cân đối. A mô tả ABS. C sai: covered bond là nợ cao cấp, được bảo vệ tốt, không phải tầng chịu lỗ đầu tiên.' },
    { q: 'Một ngân hàng không trả được gốc covered bond đúng ngày đáo hạn, và ngày đáo hạn được tự động gia hạn thêm 12 tháng. Đây là covered bond dạng:', choices: ['Soft bullet', 'Hard bullet', 'Conditional pass-through'], answer: 0, explain: 'Soft bullet cho phép gia hạn đáo hạn. Hard bullet: trễ là vỡ nợ ngay. Conditional pass-through: chuyển thành trả dần theo dòng tiền cover pool chứ không phải một kỳ gia hạn cố định.' },
    { q: 'Khi một khoản vay trong cover pool của covered bond trở thành nợ xấu, ngân hàng phát hành thường phải:', choices: ['Chuyển khoản vay đó sang SPE.', 'Giảm coupon trả trái chủ tương ứng.', 'Thay khoản vay đó bằng tài sản đạt chuẩn để duy trì cover pool.'], answer: 2, explain: 'Cover pool là danh mục động: tài sản xấu phải được thay. A sai vì covered bond không dùng cơ chế bán sang SPE như ABS. B sai: coupon không đổi theo chất lượng tài sản.' },
    { q: 'Danh mục 100 triệu chia thành tầng A 75, tầng B 15, tầng C 10 (chịu lỗ đầu tiên). Nếu danh mục lỗ 18 triệu, tầng B mất bao nhiêu phần trăm mệnh giá?', choices: ['18,00%', '100,00%', '53,33%'], answer: 2, explain: 'Tầng C chịu 10 trước, còn 8 đổ vào B: 8 / 15 = 53,33%. A là lỗ tính trên toàn danh mục, như thể chia đều cho mọi tầng. B là kết quả nếu nghĩ B chịu lỗ trước C.' },
    { q: 'Dạng nào sau đây là tăng cường tín dụng bên ngoài (external)?', choices: ['Thư tín dụng do một ngân hàng cấp', 'Thế chấp vượt mức', 'Excess spread'], answer: 0, explain: 'Thư tín dụng đến từ bên thứ ba nên là bên ngoài, khiến ABS chịu rủi ro tín dụng của ngân hàng cấp thư. B và C nằm trong chính cấu trúc (nội bộ).' },
    { q: 'Danh mục 105 triệu lợi suất 8% đứng sau 100 triệu ABS coupon bình quân 5%; phí 0,5% trên danh mục. Excess spread một năm là:', choices: ['3,400 triệu', '2,875 triệu', '2,500 triệu'], answer: 1, explain: '8% × 105 - 5% × 100 - 0,5% × 105 = 8,4 - 5,0 - 0,525 = 2,875. A quên trừ phí. C tính lãi và phí trên 100 thay vì 105, bỏ mất lợi ích của phần thế chấp vượt mức.' },
    { q: 'Trong thời kỳ khóa (lockout) của ABS thẻ tín dụng, khoản gốc mà chủ thẻ trả về được:', choices: ['Chuyển ngay cho nhà đầu tư tầng senior.', 'Dùng để mua thêm khoản phải thu thẻ tín dụng mới.', 'Giữ trong tài khoản dự phòng đến ngày đáo hạn.'], answer: 1, explain: 'Lockout là giai đoạn quay vòng: gốc được tái đầu tư để giữ quy mô danh mục, nhà đầu tư chỉ nhận lãi. A chỉ xảy ra trong giai đoạn trả gốc hoặc khi rapid amortization kích hoạt. C không phải cơ chế chuẩn.' },
    { q: 'Tổn thất của danh mục thẻ tín dụng tăng mạnh làm excess spread xuống dưới 0. Điều khoản nào nhiều khả năng được kích hoạt để bảo vệ nhà đầu tư?', choices: ['Rapid amortization: gốc được trả ngay cho nhà đầu tư.', 'Kéo dài thời kỳ khóa.', 'Chuyển ABS thành covered bond.'], answer: 0, explain: 'Early (rapid) amortization chấm dứt việc tái đầu tư và trả gốc sớm khi có sự kiện xấu. B làm nhà đầu tư phơi nhiễm lâu hơn. C không phải cơ chế tồn tại.' },
    { q: 'So với ABS thẻ tín dụng trong thời kỳ khóa, ABS cho vay mua ô tô khác ở chỗ:', choices: ['Không có rủi ro tín dụng vì xe là tài sản thế chấp.', 'Chỉ trả lãi cho đến ngày đáo hạn.', 'Dòng tiền gồm lãi, gốc theo lịch và gốc trả trước hạn, nên có rủi ro trả trước.'], answer: 2, explain: 'Khoản vay ô tô trả dần nên nhà đầu tư nhận gốc mỗi tháng, cộng gốc trả trước khi người vay bán xe hoặc tái cấp vốn. A sai: vẫn có vỡ nợ, giá trị xe giảm. B mô tả gần với credit card ABS trong lockout.' },
    { q: 'CLO 200 triệu lợi suất 9%: senior 160 triệu coupon 6%, mezzanine 20 triệu coupon 10%, equity 20 triệu, phí quản lý 0,5% danh mục. Nếu tổn thất tín dụng trong năm là 4 triệu, lợi suất năm của tầng equity là:', choices: ['27,00%', '0,70%', '7,00%'], answer: 2, explain: 'Equity nhận 18 - 9,6 - 2 - 1 = 5,4 trước tổn thất; chịu lỗ trước nên còn 1,4: 1,4 / 20 = 7%. A bỏ qua tổn thất. B chia cho cả danh mục 200 thay vì vốn của tầng equity 20.' },
  ];

  const widgets = {
    waterfall(el) {
      el.innerHTML = `
        <div class="w-row"><label>Tổn thất danh mục (triệu USD): <b data-o="l">18</b><input type="range" min="0" max="50" step="1" value="18" data-i="l"></label></div>
        <div class="w-out"><div class="w-price" data-o="main"></div><div class="w-bar"><span data-o="bar"></span><i></i></div><div class="w-note" data-o="note"></div></div>`;
      const q = s => el.querySelector(s);
      const f = x => x.toFixed(2).replace('.', ',');
      const tr = [['C', 10], ['B', 15], ['A', 75]];
      const upd = () => {
        const L = +q('[data-i="l"]').value;
        let rem = L;
        const out = tr.map(([n, s]) => { const x = Math.min(s, rem); rem -= x; return `Tầng ${n}: lỗ ${x} / ${s} (${f((x / s) * 100)}%)`; });
        q('[data-o="l"]').textContent = L;
        q('[data-o="main"]').textContent = out.slice().reverse().join(' · ');
        q('[data-o="bar"]').style.width = `${L * 2}%`;
        q('[data-o="note"]').textContent = L <= 10 ? 'Chỉ tầng C chịu lỗ; A và B nguyên vẹn.' : L <= 25 ? 'Tầng C đã mất hết; tầng B bắt đầu chịu lỗ. Tầng A vẫn an toàn nhờ 25% thứ cấp.' : 'Lỗ vượt 25% danh mục: tầng A (senior) bắt đầu bị ảnh hưởng.';
      };
      el.addEventListener('input', upd);
      upd();
    },
  };

  window.LESSONS['FI-18'] = {
    moduleId: 'FI-18',
    calculator: 'BA II Plus',
    warmup: [
      'Ôn FI-17: SPE và true sale bảo vệ nhà đầu tư ABS thế nào khi bên khởi tạo phá sản?',
      'Ôn FI-17: servicer và trustee khác nhau ở vai trò gì?',
      'Nếu một danh mục 100 triệu lỗ 5 triệu, bạn muốn là người chịu 5 triệu đó đầu tiên hay cuối cùng? Bạn sẽ đòi điều gì để chấp nhận chịu lỗ đầu tiên?',
    ],
    sections,
    glossary,
    practice,
    widgets,
    slides: [],
    wrapup: [
      'Lập bảng so sánh covered bond và ABS theo 5 tiêu chí: bảng cân đối, quyền truy đòi, danh mục, phân tầng, lợi suất.',
      'Tự cho một cấu trúc 3 tầng và một mức lỗ, phân bổ lỗ cho từng tầng.',
      'Giải thích vì sao tầng equity của CLO nhạy cảm với tổn thất hơn nhiều so với danh mục.',
    ],
  };
}());
