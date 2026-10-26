// Bài giảng EQ-01 - Equity Instrument Features (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t } = window.CFAH;

  const sections = [
    {
      title: '1. Bức tranh lớn',
      minutes: 5,
      html: `
<p>Topic Equities năm 2027 được viết lại theo một trình tự rất tự nhiên: <b>cổ phiếu là gì</b> (EQ-01, EQ-02), <b>nó được phát hành và mua bán ra sao</b> (EQ-03), <b>nhà đầu tư kiếm tiền từ nó bằng cách nào</b> (EQ-04), rồi mới đến <b>định giá</b> và <b>phân tích ngành, công ty</b> (EQ-05 đến EQ-12).</p>
<div class="key">Mua một ${t('equity', 'công cụ vốn cổ phần (equity instrument)')} là mua <b>quyền sở hữu</b> một phần doanh nghiệp: bạn nhận phần còn lại sau khi mọi nghĩa vụ khác đã được trả, đổi lại bạn có quyền tham gia kiểm soát và hưởng toàn bộ phần tăng trưởng.</div>
<p>Module này có hai LOS:</p>
<ol>
  <li><b>Đặc điểm và các loại công cụ vốn cổ phần</b>: cổ phiếu phổ thông, cổ phiếu ưu đãi với các biến thể (cumulative, participating, convertible, callable, putable) và các công cụ gắn với cổ phiếu (warrant, quyền mua, trái phiếu chuyển đổi). Phần 2 đến 5.</li>
  <li><b>So sánh cổ phiếu niêm yết với vốn cổ phần tư nhân</b>: thanh khoản, công bố thông tin, định giá, quản trị và các dạng đầu tư tư nhân. Phần 6.</li>
</ol>
<p class="tip"><b>Liên hệ:</b> CF-01 đã giới thiệu công ty đại chúng và tư nhân, IPO, LBO từ góc nhìn <b>công ty phát hành</b>. Ở đây ta nhìn cùng các khái niệm đó từ góc nhìn <b>nhà đầu tư</b>: mình nắm quyền gì, rủi ro ở đâu.</p>`,
    },
    {
      title: '2. Đặc điểm cơ bản của vốn cổ phần',
      minutes: 12,
      html: `
<p>Mọi công cụ vốn cổ phần, dù ở nước nào, đều có chung một bộ đặc điểm. Cách dễ nhớ nhất là đặt cạnh trái phiếu (nợ):</p>
<table class="plain"><thead><tr><th>Đặc điểm</th><th>Nợ (trái phiếu, khoản vay)</th><th>Vốn cổ phần (cổ phiếu phổ thông)</th></tr></thead><tbody>
<tr><td>Bản chất quyền đòi</td><td>Hợp đồng: được trả lãi và gốc theo lịch</td><td>${t('residual', 'Quyền đòi phần còn lại (residual claim)')} trên thu nhập và tài sản</td></tr>
<tr><td>Dòng tiền</td><td>Cố định hoặc theo công thức; không trả là vỡ nợ</td><td>Cổ tức do HĐQT quyết định; không trả không phải vỡ nợ</td></tr>
<tr><td>Kỳ hạn</td><td>Có ngày đáo hạn</td><td>${t('perpetual', 'Vĩnh viễn (perpetual)')}: không đáo hạn, muốn thu tiền về phải bán cho người khác</td></tr>
<tr><td>Thứ tự khi thanh lý</td><td>Trước cổ đông</td><td>Sau cùng</td></tr>
<tr><td>Quyền kiểm soát</td><td>Thường không có (chỉ có điều khoản bảo vệ - covenant)</td><td>Có quyền biểu quyết: bầu HĐQT, thông qua các quyết định lớn</td></tr>
<tr><td>Lợi ích tiềm năng</td><td>Bị giới hạn ở lãi và gốc</td><td>Không giới hạn trên</td></tr>
<tr><td>Thua lỗ tối đa</td><td>Số tiền đã cho vay</td><td>Số tiền đã góp nhờ ${t('limited', 'trách nhiệm hữu hạn (limited liability)')}</td></tr>
</tbody></table>
<div class="key">Hai mặt của cùng một đồng xu: vì cổ đông đứng <b>cuối hàng</b> khi chia tiền, họ chịu rủi ro cao nhất; vì thế họ được hưởng <b>toàn bộ phần dư</b> khi công ty làm ăn tốt và được trao <b>quyền kiểm soát</b>.</div>
<h4>Thứ tự thanh toán khi thanh lý</h4>
<p>Khi công ty giải thể hoặc phá sản, tài sản được dùng trả theo thứ tự: chi phí thanh lý và các khoản ưu tiên theo luật (thuế, lương) → chủ nợ có bảo đảm → chủ nợ không bảo đảm → cổ đông ưu đãi → cổ đông phổ thông.</p>
<div class="example"><div class="ex-h">Ví dụ 2.1</div>
<p>Công ty X thanh lý. Tổng nợ phải trả là 320 triệu USD, cổ phiếu ưu đãi có tổng mệnh giá thanh lý 100 triệu USD, có 10 triệu cổ phiếu phổ thông. Mỗi nhóm nhận bao nhiêu nếu tài sản thu về là (a) 500 triệu, (b) 400 triệu?</p>
<details><summary>Xem lời giải</summary>
<p>(a) Chủ nợ nhận đủ 320; còn 180, cổ đông ưu đãi nhận đủ 100; cổ đông phổ thông nhận phần dư <b>80 triệu</b>, tức <b>8 USD/cổ phiếu</b>.<br>
(b) Chủ nợ nhận đủ 320; còn 80, cổ đông ưu đãi chỉ nhận <b>80</b> (thiếu 20); cổ đông phổ thông nhận <b>0</b>.</p>
<p>Tài sản giảm 100 triệu (từ 500 xuống 400) thì cổ đông phổ thông mất toàn bộ 80, cổ đông ưu đãi mất 20, chủ nợ không mất gì. Đó chính là ý nghĩa của "residual claim".</p></details></div>
<p class="warn"><b>Bẫy:</b> "cổ đông chịu trách nhiệm với nợ của công ty" là sai. Nhờ trách nhiệm hữu hạn, cổ đông mất tối đa số tiền đã đầu tư, không phải bù thêm cho chủ nợ, kể cả khi tài sản không đủ trả nợ.</p>`,
    },
    {
      title: '3. Cổ phiếu phổ thông (common shares)',
      minutes: 8,
      html: `
<p>${t('common', 'Cổ phiếu phổ thông (common shares, ordinary shares)')} là loại vốn cổ phần cơ bản nhất. Người nắm giữ có ba nhóm quyền:</p>
<table class="plain"><thead><tr><th>Nhóm quyền</th><th>Nội dung</th></tr></thead><tbody>
<tr><td>Quyền kinh tế</td><td>Nhận cổ tức khi HĐQT công bố; nhận phần tài sản còn lại khi thanh lý; ${t('preemptive', 'quyền ưu tiên mua cổ phiếu mới (preemptive right)')} để giữ nguyên tỷ lệ sở hữu ở những nơi luật hoặc điều lệ quy định</td></tr>
<tr><td>Quyền kiểm soát</td><td>Biểu quyết tại đại hội cổ đông: bầu HĐQT, phê duyệt sáp nhập, sửa điều lệ, phát hành thêm; thường là một cổ phiếu một phiếu (chi tiết ở EQ-02)</td></tr>
<tr><td>Quyền thông tin và pháp lý</td><td>Nhận báo cáo, xem sổ sách theo quy định, khởi kiện khi quyền lợi bị xâm phạm</td></tr>
</tbody></table>
<h4>Cổ phiếu phổ thông có điều khoản đặc biệt</h4>
<ul>
<li>${t('callable', 'Callable shares')}: công ty có quyền mua lại cổ phiếu từ nhà đầu tư ở giá định trước. Có lợi cho <b>công ty</b> (mua lại khi giá thị trường cao hơn giá call), nên rủi ro hơn với nhà đầu tư và phải bán với giá thấp hơn loại tương đương không có điều khoản.</li>
<li>${t('putable', 'Putable shares')}: nhà đầu tư có quyền bán lại cổ phiếu cho công ty ở giá định trước. Có lợi cho <b>nhà đầu tư</b> vì tạo một "sàn" giá, nên ít rủi ro hơn và có giá cao hơn.</li>
</ul>
<div class="example"><div class="ex-h">Ví dụ 3.1</div>
<p>Bạn sở hữu 2% cổ phiếu phổ thông của công ty Y. Công ty phát hành thêm 25% số cổ phiếu hiện có cho nhà đầu tư mới, không chào bán cho cổ đông hiện hữu. Tỷ lệ sở hữu của bạn còn bao nhiêu? Quyền nào lẽ ra bảo vệ bạn?</p>
<details><summary>Xem lời giải</summary><p>Tỷ lệ mới = 2% / 1,25 = <b>1,6%</b>. Nếu có <b>preemptive right</b>, bạn được quyền mua trước 2% số cổ phiếu mới phát hành để giữ nguyên 2%. Quyền này phổ biến ở châu Âu và nhiều thị trường châu Á (Việt Nam có hình thức chào bán cho cổ đông hiện hữu), ít phổ biến hơn với công ty đại chúng Mỹ.</p></details></div>`,
    },
    {
      title: '4. Cổ phiếu ưu đãi và các biến thể',
      minutes: 15,
      html: `
<p>${t('preferred', 'Cổ phiếu ưu đãi (preferred shares, preference shares)')} là công cụ ${t('hybrid', 'lai (hybrid)')} giữa nợ và vốn cổ phần:</p>
<ul>
<li><b>Giống nợ</b>: cổ tức thường cố định (ví dụ 6% mệnh giá), không hưởng phần tăng trưởng, thường không có quyền biểu quyết (trừ khi cổ tức bị bỏ lỡ hoặc với các vấn đề ảnh hưởng trực tiếp tới họ).</li>
<li><b>Giống vốn</b>: không trả cổ tức không phải vỡ nợ; thường không có kỳ hạn; đứng sau mọi chủ nợ khi thanh lý; về kế toán thường ghi nhận là vốn chủ sở hữu.</li>
<li><b>Ưu tiên hơn cổ phiếu phổ thông</b>: được trả cổ tức trước và nhận lại mệnh giá trước khi thanh lý.</li>
</ul>
<h4>Cumulative và noncumulative</h4>
<p>Với ${t('cumpref', 'cổ phiếu ưu đãi tích lũy (cumulative)')}, cổ tức bị bỏ qua sẽ được cộng dồn thành ${t('arrears', 'cổ tức nợ đọng (dividends in arrears)')}: công ty phải trả hết phần này cộng cổ tức kỳ hiện tại thì mới được trả cổ tức cho cổ đông phổ thông. Với loại ${t('noncum', 'không tích lũy (noncumulative)')}, cổ tức đã bỏ qua mất hẳn.</p>
<div class="example"><div class="ex-h">Ví dụ 4.1</div>
<p>Cổ phiếu ưu đãi mệnh giá 50 USD, cổ tức 8%/năm. Công ty bỏ qua cổ tức năm 1 và năm 2. Năm 3 công ty muốn trả cổ tức cho cổ đông phổ thông. Mỗi cổ phiếu ưu đãi phải nhận tối thiểu bao nhiêu nếu đó là loại (a) cumulative, (b) noncumulative?</p>
<details><summary>Xem lời giải</summary><p>Cổ tức mỗi năm = 8% × 50 = 4 USD.<br>(a) Cumulative: nợ đọng 2 năm + năm hiện tại = 3 × 4 = <b>12 USD</b>.<br>(b) Noncumulative: chỉ cổ tức năm hiện tại = <b>4 USD</b>.</p>
<p>Vì vậy cổ phiếu cumulative ít rủi ro hơn cho nhà đầu tư và có lợi suất yêu cầu thấp hơn.</p></details></div>
<h4>Participating và nonparticipating</h4>
<p>Loại ${t('participating', 'tham dự (participating)')} ngoài cổ tức cố định còn được chia thêm khi lợi nhuận vượt một ngưỡng định trước, và có thể được chia thêm tài sản khi thanh lý vượt mệnh giá. Loại nonparticipating (phổ biến hơn) chỉ nhận cổ tức cố định và mệnh giá. Participating hay gặp trong đầu tư mạo hiểm, nơi nhà đầu tư muốn vừa có "đệm" an toàn vừa có phần tăng trưởng.</p>
<h4>Convertible</h4>
<p>${t('convpref', 'Cổ phiếu ưu đãi chuyển đổi (convertible preferred)')} cho người nắm giữ quyền đổi sang một số cổ phiếu phổ thông cố định, gọi là ${t('convratio', 'tỷ lệ chuyển đổi (conversion ratio)')}.</p>
<div class="example"><div class="ex-h">Ví dụ 4.2</div>
<p>Cổ phiếu ưu đãi chuyển đổi mệnh giá 100, tỷ lệ chuyển đổi 3. Giá trị chuyển đổi là bao nhiêu nếu giá cổ phiếu phổ thông là (a) 30, (b) 40? Khi nào chuyển đổi có lợi?</p>
<details><summary>Xem lời giải</summary><p>Giá trị chuyển đổi = 3 × giá cổ phiếu phổ thông. (a) 3 × 30 = <b>90</b>, thấp hơn mệnh giá 100, giữ dạng ưu đãi để nhận cổ tức ổn định. (b) 3 × 40 = <b>120</b>, cao hơn 100, chuyển đổi để hưởng phần tăng giá.</p>
<p>Nhà đầu tư có "đệm" của cổ phiếu ưu đãi khi giá xuống và phần tăng của cổ phiếu phổ thông khi giá lên, nên convertible có giá cao hơn (lợi suất cổ tức thấp hơn) loại không chuyển đổi.</p></details></div>
<h4>Callable và putable preferred</h4>
<p>Cổ phiếu ưu đãi cũng có thể callable (công ty mua lại ở giá định trước, thường khi lãi suất giảm để phát hành lại với cổ tức thấp hơn) hoặc putable (nhà đầu tư bán lại cho công ty). Một số loại có ngày mua lại bắt buộc, khi đó nó gần như một trái phiếu.</p>
<div class="key"><b>Quy tắc chung:</b> điều khoản nào cho <b>nhà đầu tư</b> thêm quyền (cumulative, participating, convertible, putable) thì giảm rủi ro hoặc tăng lợi ích cho nhà đầu tư, nên công cụ có giá cao hơn và lợi suất yêu cầu thấp hơn. Điều khoản nào cho <b>công ty</b> thêm quyền (callable) thì ngược lại.</div>
<h4>So sánh rủi ro</h4>
<table class="plain"><thead><tr><th>Ít rủi ro hơn (với nhà đầu tư)</th><th>Rủi ro hơn</th><th>Vì sao</th></tr></thead><tbody>
<tr><td>Cổ phiếu ưu đãi</td><td>Cổ phiếu phổ thông</td><td>Cổ tức cố định, trả trước, mệnh giá thanh lý biết trước</td></tr>
<tr><td>Cumulative</td><td>Noncumulative</td><td>Cổ tức bỏ lỡ không mất</td></tr>
<tr><td>Putable</td><td>Không putable</td><td>Có giá sàn để bán lại</td></tr>
<tr><td>Không callable</td><td>Callable</td><td>Công ty không thể "lấy lại" khi giá tăng</td></tr>
</tbody></table>
<p class="warn"><b>Bẫy:</b> cổ phiếu ưu đãi ít rủi ro hơn cổ phiếu phổ thông <b>của cùng công ty</b>, nhưng vẫn rủi ro hơn trái phiếu của công ty đó. Đừng xếp nó ngang hàng với nợ. Việc định giá cổ phiếu ưu đãi (cổ tức / lợi suất yêu cầu) học ở EQ-06.</p>`,
    },
    {
      title: '5. Các công cụ gắn với cổ phiếu',
      minutes: 6,
      html: `
<p>Ngoài hai loại cổ phiếu chính, nhà đầu tư còn gặp các công cụ cho quyền nhận cổ phiếu trong tương lai:</p>
<table class="plain"><thead><tr><th>Công cụ</th><th>Bản chất</th><th>Điểm cần nhớ</th></tr></thead><tbody>
<tr><td>${t('warrant', 'Chứng quyền do công ty phát hành (warrant)')}</td><td>Quyền mua cổ phiếu mới của công ty ở giá thực hiện định trước, trong một thời hạn dài</td><td>Do <b>chính công ty</b> phát hành; khi thực hiện, công ty phát hành cổ phiếu mới, gây pha loãng. Thường đi kèm trái phiếu hoặc cổ phiếu ưu đãi như "chất ngọt" để giảm chi phí vốn</td></tr>
<tr><td>${t('rights', 'Quyền mua cổ phiếu (rights)')}</td><td>Quyền ngắn hạn để cổ đông hiện hữu mua cổ phiếu mới, thường ở giá thấp hơn giá thị trường</td><td>Gắn với preemptive right; có thể chuyển nhượng; chi tiết đợt chào bán ở EQ-03</td></tr>
<tr><td>${t('convdebt', 'Trái phiếu chuyển đổi (convertible bond)')}</td><td>Trái phiếu có quyền đổi sang cổ phiếu phổ thông</td><td>Là nợ cho đến khi chuyển đổi; học kỹ ở phần Fixed Income</td></tr>
<tr><td>Quyền chọn cổ phiếu cho nhân viên, cổ phiếu hạn chế (ESOP, RSU)</td><td>Thù lao trả bằng cổ phiếu hoặc quyền mua cổ phiếu</td><td>Gây pha loãng tiềm năng; làm thay đổi số cổ phiếu pha loãng khi tính EPS</td></tr>
</tbody></table>
<p class="tip"><b>Phân biệt:</b> chứng quyền có bảo đảm (covered warrant) đang giao dịch trên HOSE do <b>công ty chứng khoán</b> phát hành dựa trên cổ phiếu đã có sẵn, nên không làm tăng số cổ phiếu của công ty cơ sở. Đó không phải là "warrant" theo nghĩa trong CFA.</p>`,
    },
    {
      title: '6. Cổ phiếu niêm yết và vốn cổ phần tư nhân',
      minutes: 10,
      html: `
<p>${t('listed', 'Cổ phiếu niêm yết (publicly listed equity)')} giao dịch trên sở giao dịch, có giá hằng ngày. ${t('privateeq', 'Vốn cổ phần tư nhân (private equity)')} là cổ phần của công ty không niêm yết, mua bán qua thỏa thuận riêng.</p>
<table class="plain"><thead><tr><th>Tiêu chí</th><th>Niêm yết</th><th>Tư nhân</th></tr></thead><tbody>
<tr><td>Thanh khoản</td><td>Cao: mua bán trong vài giây, chi phí thấp</td><td>Thấp: cần tìm người mua, có thể bị hạn chế chuyển nhượng, mất nhiều tháng</td></tr>
<tr><td>Hình thành giá</td><td>Giá thị trường liên tục</td><td>Giá thương lượng; định giá định kỳ (theo quý) bằng mô hình, nên lợi suất đo được trông "mượt" hơn thực tế</td></tr>
<tr><td>Công bố thông tin</td><td>Bắt buộc, chuẩn hóa, công khai cho mọi người</td><td>Ít bắt buộc; thông tin chi tiết chỉ cho nhà đầu tư trong thỏa thuận</td></tr>
<tr><td>Chi phí tuân thủ</td><td>Cao</td><td>Thấp hơn</td></tr>
<tr><td>Nhà đầu tư</td><td>Mọi người, kể cả nhà đầu tư cá nhân</td><td>Chủ yếu nhà đầu tư tổ chức và nhà đầu tư chuyên nghiệp, qua quỹ</td></tr>
<tr><td>Sở hữu và quản trị</td><td>Phân tán; cổ đông nhỏ ít ảnh hưởng</td><td>Tập trung; nhà đầu tư thường có ghế HĐQT, quyền phủ quyết theo hợp đồng</td></tr>
<tr><td>Tầm nhìn</td><td>Áp lực kết quả quý</td><td>Tập trung dài hạn, có kế hoạch thoái vốn (IPO, bán lại)</td></tr>
<tr><td>Lợi suất kỳ vọng</td><td>Lợi suất thị trường</td><td>Cao hơn để bù ${t('illiq', 'phần bù kém thanh khoản (illiquidity premium)')} và rủi ro</td></tr>
</tbody></table>
<h4>Các dạng đầu tư vốn cổ phần tư nhân</h4>
<ul>
<li>${t('vc', 'Đầu tư mạo hiểm (venture capital)')}: công ty giai đoạn đầu (seed, series A, B...), rủi ro rất cao, thường dùng cổ phiếu ưu đãi chuyển đổi.</li>
<li>${t('growth', 'Vốn tăng trưởng (growth equity)')}: cổ phần thiểu số ở công ty đã có doanh thu, cần vốn để mở rộng.</li>
<li>${t('buyout', 'Mua lại (buyout, LBO)')}: mua quyền kiểm soát công ty trưởng thành, tài trợ nhiều bằng nợ; có thể đưa công ty niêm yết về tư nhân.</li>
<li>${t('pipe', 'PIPE (private investment in public equity)')}: nhà đầu tư mua riêng lẻ một khối cổ phần lớn của <b>công ty niêm yết</b>, thường với giá chiết khấu, khi công ty cần vốn nhanh. Ở Việt Nam tương tự "phát hành riêng lẻ" cho nhà đầu tư chiến lược, thường bị hạn chế chuyển nhượng một thời gian.</li>
</ul>
<div class="example"><div class="ex-h">Ví dụ 6.1</div>
<p>Một quỹ định giá cổ phần ở công ty tư nhân Z bằng cách so với các công ty niêm yết tương tự: giá trị tương đương là 120 triệu USD. Quỹ áp dụng chiết khấu kém thanh khoản 25%. Giá trị ước tính là bao nhiêu và vì sao phải chiết khấu?</p>
<details><summary>Xem lời giải</summary><p>120 × (1 - 25%) = <b>90 triệu USD</b>. Người mua cổ phần tư nhân không thể bán nhanh khi cần tiền, nên chỉ chấp nhận trả giá thấp hơn so với một tài sản tương tự có thể bán ngay trên sàn.</p></details></div>
<p class="tip"><b>Xu hướng:</b> công ty ngày càng ở lại tư nhân lâu hơn vì có thể huy động vốn lớn từ quỹ, nên một phần đáng kể tăng trưởng giá trị diễn ra trước khi IPO. Nhà đầu tư chỉ mua cổ phiếu niêm yết có thể bỏ lỡ giai đoạn này. Chi tiết về quỹ private equity học ở topic Alternative Investments.</p>`,
    },
    {
      title: '7. Tóm tắt và bẫy thường gặp',
      minutes: 4,
      html: `
<table class="plain"><thead><tr><th>Tình huống</th><th>Nhớ</th></tr></thead><tbody>
<tr><td>Residual claim</td><td>Cổ đông phổ thông nhận sau cùng, nhưng hưởng toàn bộ phần dư</td></tr>
<tr><td>Trách nhiệm hữu hạn</td><td>Mất tối đa số tiền đã góp; không bù nợ cho công ty</td></tr>
<tr><td>Không trả cổ tức</td><td>Không phải vỡ nợ, kể cả với cổ phiếu ưu đãi</td></tr>
<tr><td>Thứ tự thanh lý</td><td>Nợ → ưu đãi → phổ thông</td></tr>
<tr><td>Cumulative</td><td>Trả hết nợ đọng + kỳ này rồi mới trả cổ đông phổ thông</td></tr>
<tr><td>Participating</td><td>Cổ tức cố định + phần chia thêm khi lợi nhuận vượt ngưỡng</td></tr>
<tr><td>Convertible</td><td>Giá trị chuyển đổi = tỷ lệ chuyển đổi × giá cổ phiếu phổ thông</td></tr>
<tr><td>Callable / putable</td><td>Callable lợi cho công ty (rủi ro hơn với nhà đầu tư); putable lợi cho nhà đầu tư</td></tr>
<tr><td>Warrant</td><td>Công ty phát hành, thực hiện thì có cổ phiếu mới, gây pha loãng</td></tr>
<tr><td>Private equity</td><td>Kém thanh khoản, ít công bố, sở hữu tập trung, lợi suất kỳ vọng cao hơn; giá trị báo cáo "mượt"</td></tr>
<tr><td>PIPE</td><td>Đầu tư tư nhân vào công ty <b>niêm yết</b></td></tr>
</tbody></table>
<p>Tiếp theo: tab <b>Luyện tập</b> 10 câu (rút ngẫu nhiên từ ngân hàng 30 câu, mỗi lần làm một bộ khác). Module sau (EQ-02) đi sâu vào khác biệt về quyền biểu quyết giữa các loại cổ phiếu, các quốc gia và quy trình biểu quyết.</p>`,
    },
  ];

  const glossary = {
    equity: ['Equity instrument', 'Công cụ vốn cổ phần', 'Chứng khoán thể hiện quyền sở hữu một phần doanh nghiệp, gồm cổ phiếu phổ thông và cổ phiếu ưu đãi.'],
    residual: ['Residual claim', 'Quyền đòi phần còn lại', 'Quyền nhận phần thu nhập và tài sản còn lại sau khi đã trả hết các nghĩa vụ ưu tiên hơn.'],
    perpetual: ['Perpetual', 'Vĩnh viễn', 'Không có ngày đáo hạn; vốn không được hoàn trả theo lịch.'],
    limited: ['Limited liability', 'Trách nhiệm hữu hạn', 'Cổ đông chỉ mất tối đa số vốn đã góp, không chịu trách nhiệm cá nhân với nợ của công ty.'],
    common: ['Common shares (ordinary shares)', 'Cổ phiếu phổ thông', 'Vốn cổ phần cơ bản: có quyền biểu quyết, nhận cổ tức khi công bố và phần còn lại khi thanh lý.'],
    preemptive: ['Preemptive right', 'Quyền ưu tiên mua', 'Quyền của cổ đông hiện hữu được mua trước cổ phiếu mới theo tỷ lệ sở hữu để tránh bị pha loãng.'],
    callable: ['Callable shares', 'Cổ phiếu có quyền mua lại', 'Công ty có quyền mua lại cổ phiếu ở giá định trước; có lợi cho công ty.'],
    putable: ['Putable shares', 'Cổ phiếu có quyền bán lại', 'Nhà đầu tư có quyền bán lại cổ phiếu cho công ty ở giá định trước; có lợi cho nhà đầu tư.'],
    preferred: ['Preferred shares (preference shares)', 'Cổ phiếu ưu đãi', 'Cổ phiếu có cổ tức thường cố định, được trả trước cổ phiếu phổ thông, thường không biểu quyết.'],
    hybrid: ['Hybrid security', 'Công cụ lai', 'Công cụ mang cả đặc điểm của nợ và của vốn cổ phần.'],
    cumpref: ['Cumulative preferred shares', 'Cổ phiếu ưu đãi tích lũy', 'Cổ tức bỏ lỡ được cộng dồn và phải trả hết trước khi trả cổ tức cổ phiếu phổ thông.'],
    arrears: ['Dividends in arrears', 'Cổ tức nợ đọng', 'Cổ tức ưu đãi tích lũy đã bỏ lỡ, chưa được trả.'],
    noncum: ['Noncumulative preferred shares', 'Cổ phiếu ưu đãi không tích lũy', 'Cổ tức bỏ lỡ mất hẳn, không phải trả bù.'],
    participating: ['Participating preferred shares', 'Cổ phiếu ưu đãi tham dự', 'Ngoài cổ tức cố định còn được chia thêm khi lợi nhuận vượt ngưỡng định trước.'],
    convpref: ['Convertible preferred shares', 'Cổ phiếu ưu đãi chuyển đổi', 'Có thể đổi sang một số cổ phiếu phổ thông cố định theo lựa chọn của người nắm giữ.'],
    convratio: ['Conversion ratio', 'Tỷ lệ chuyển đổi', 'Số cổ phiếu phổ thông nhận được khi chuyển đổi một đơn vị công cụ chuyển đổi.'],
    warrant: ['Warrant', 'Chứng quyền (do công ty phát hành)', 'Quyền mua cổ phiếu mới của công ty ở giá định trước; khi thực hiện gây pha loãng.'],
    rights: ['Rights', 'Quyền mua cổ phiếu', 'Quyền ngắn hạn cho cổ đông hiện hữu mua cổ phiếu mới, thường ở giá chiết khấu.'],
    convdebt: ['Convertible bond', 'Trái phiếu chuyển đổi', 'Trái phiếu có quyền đổi sang cổ phiếu phổ thông của công ty phát hành.'],
    listed: ['Publicly listed equity', 'Cổ phiếu niêm yết', 'Cổ phiếu giao dịch trên sở giao dịch, có giá thị trường và nghĩa vụ công bố thông tin.'],
    privateeq: ['Private equity', 'Vốn cổ phần tư nhân', 'Cổ phần của công ty không niêm yết, mua bán qua thỏa thuận riêng, kém thanh khoản.'],
    illiq: ['Illiquidity premium', 'Phần bù kém thanh khoản', 'Lợi suất tăng thêm nhà đầu tư đòi hỏi khi tài sản khó bán nhanh với giá hợp lý.'],
    vc: ['Venture capital', 'Đầu tư mạo hiểm', 'Vốn cổ phần cho công ty giai đoạn đầu, rủi ro cao, tiềm năng tăng trưởng lớn.'],
    growth: ['Growth equity', 'Vốn tăng trưởng', 'Cổ phần thiểu số ở công ty đã có doanh thu, dùng để mở rộng.'],
    buyout: ['Buyout (LBO)', 'Mua lại (bằng vốn vay)', 'Mua quyền kiểm soát công ty trưởng thành, tài trợ phần lớn bằng nợ.'],
    pipe: ['PIPE (private investment in public equity)', 'Đầu tư tư nhân vào công ty niêm yết', 'Bán riêng lẻ một khối cổ phần của công ty niêm yết cho nhà đầu tư, thường với giá chiết khấu.'],
  };

  const practice = [
    { q: 'Đặc điểm nào sau đây đúng với cổ đông phổ thông của một công ty cổ phần?', choices: ['Thua lỗ tối đa bằng số vốn đã đầu tư', 'Được bảo đảm nhận cổ tức hằng năm', 'Được hoàn vốn vào một ngày đáo hạn định trước'], answer: 0, explain: 'Trách nhiệm hữu hạn giới hạn thua lỗ ở số vốn đã góp. Cổ tức do HĐQT quyết định, không được bảo đảm, nên phương án "được bảo đảm nhận cổ tức" sai. Cổ phiếu là vĩnh viễn, không có ngày đáo hạn, nên phương án "hoàn vốn vào ngày đáo hạn" sai.' },
    { q: 'Cổ phiếu ưu đãi cumulative mệnh giá 100, cổ tức 6%/năm. Công ty đã bỏ qua cổ tức 3 năm liền. Năm nay công ty muốn trả cổ tức cho cổ đông phổ thông. Mỗi cổ phiếu ưu đãi phải nhận tối thiểu:', choices: ['6', '18', '24'], answer: 2, explain: 'Nợ đọng 3 năm (18) cộng cổ tức năm hiện tại (6) = 24. Lựa chọn 6 là cách tính của loại noncumulative; lựa chọn 18 quên cổ tức của năm hiện tại.' },
    { q: 'Công ty thanh lý thu về 400 triệu. Nợ phải trả 320 triệu, cổ phiếu ưu đãi có tổng mệnh giá thanh lý 100 triệu. Cổ đông ưu đãi nhận được:', choices: ['100 triệu', '80 triệu', '0'], answer: 1, explain: 'Chủ nợ được trả trước 320, còn 80 cho cổ đông ưu đãi (thiếu 20 so với mệnh giá); cổ đông phổ thông nhận 0. Lựa chọn 100 triệu bỏ qua thứ tự ưu tiên; lựa chọn 0 nhầm cổ đông ưu đãi với cổ đông phổ thông.' },
    { q: 'Xét từ góc độ nhà đầu tư, công cụ nào sau đây ít rủi ro nhất (cùng một công ty phát hành)?', choices: ['Cổ phiếu ưu đãi cumulative, putable', 'Cổ phiếu ưu đãi noncumulative, callable', 'Cổ phiếu phổ thông'], answer: 0, explain: 'Cumulative giữ lại cổ tức bỏ lỡ, putable cho nhà đầu tư giá sàn để bán lại: cả hai giảm rủi ro. Noncumulative và callable đều bất lợi cho nhà đầu tư; cổ phiếu phổ thông đứng sau cùng.' },
    { q: 'Cổ phiếu ưu đãi chuyển đổi mệnh giá 100, tỷ lệ chuyển đổi 3, giá cổ phiếu phổ thông hiện là 40. Giá trị chuyển đổi là:', choices: ['33,33', '120', '100'], answer: 1, explain: 'Giá trị chuyển đổi = 3 x 40 = 120, cao hơn mệnh giá nên chuyển đổi có lợi. Lựa chọn 33,33 chia mệnh giá cho tỷ lệ (đó là giá chuyển đổi hòa vốn 33,33 mỗi cổ phiếu phổ thông); lựa chọn 100 chỉ là mệnh giá.' },
    { q: 'Cổ phiếu ưu đãi được nhận cổ tức cố định và được chia thêm khi lợi nhuận vượt một ngưỡng định trước là loại:', choices: ['Cumulative', 'Convertible', 'Participating'], answer: 2, explain: 'Participating được "tham dự" vào phần lợi nhuận vượt ngưỡng. Cumulative nói về việc cộng dồn cổ tức bỏ lỡ; convertible nói về quyền đổi sang cổ phiếu phổ thông.' },
    { q: 'So với cổ phiếu niêm yết, đặc điểm nào điển hình của vốn cổ phần tư nhân?', choices: ['Sở hữu tập trung, nhà đầu tư thường tham gia trực tiếp vào HĐQT', 'Có giá thị trường cập nhật liên tục trong ngày', 'Yêu cầu công bố thông tin chuẩn hóa và công khai cho mọi người'], answer: 0, explain: 'Nhà đầu tư tư nhân thường nắm khối cổ phần lớn và có ghế HĐQT, quyền phủ quyết. Giá liên tục và công bố thông tin công khai là đặc điểm của cổ phiếu niêm yết.' },
    { q: 'Một quỹ mua riêng lẻ 15% cổ phần mới phát hành của một công ty đang niêm yết, với giá chiết khấu 10% so với giá thị trường. Đây là:', choices: ['Venture capital', 'PIPE', 'Leveraged buyout'], answer: 1, explain: 'PIPE là đầu tư tư nhân vào công ty niêm yết. Venture capital đầu tư vào công ty giai đoạn đầu chưa niêm yết; LBO mua quyền kiểm soát, thường đưa công ty về tư nhân.' },
    { q: 'Vì sao cổ phiếu ưu đãi được xem là công cụ lai (hybrid)?', choices: ['Vì có quyền biểu quyết như cổ phiếu phổ thông và được ưu tiên như nợ có bảo đảm', 'Vì công ty phải trả cổ tức, nếu không sẽ vỡ nợ như trái phiếu', 'Vì cổ tức thường cố định như lãi trái phiếu, nhưng không trả cổ tức không phải vỡ nợ và thường không có kỳ hạn'], answer: 2, explain: 'Cổ tức cố định giống nợ; không có nghĩa vụ trả, không đáo hạn, xếp sau chủ nợ là đặc điểm vốn. Phương án nói "có quyền biểu quyết ... như nợ có bảo đảm" sai: cổ phiếu ưu đãi thường không biểu quyết và không có bảo đảm. Phương án nói "phải trả cổ tức, nếu không sẽ vỡ nợ" sai: bỏ cổ tức ưu đãi không gây vỡ nợ.' },
    { q: 'Điểm khác biệt chính giữa warrant (theo nghĩa CFA) và quyền chọn mua niêm yết trên sàn phái sinh là:', choices: ['Warrant luôn có kỳ hạn ngắn hơn quyền chọn', 'Warrant do chính công ty phát hành, khi thực hiện công ty phát hành cổ phiếu mới gây pha loãng', 'Warrant cho quyền bán, không phải quyền mua'], answer: 1, explain: 'Warrant do công ty phát hành và tạo cổ phiếu mới khi thực hiện. Warrant thường có kỳ hạn dài (không phải ngắn hơn quyền chọn) và là quyền mua (không phải quyền bán).' },
    { q: 'Công ty thanh lý thu về 650 triệu USD. Nợ phải trả 500 triệu, cổ phiếu ưu đãi có tổng mệnh giá thanh lý 100 triệu, có 20 triệu cổ phiếu phổ thông. Mỗi cổ phiếu phổ thông nhận được gần nhất với:', choices: ['2,50 USD', '7,50 USD', '27,50 USD'], answer: 0, explain: 'Trả chủ nợ 500, còn 150; trả cổ đông ưu đãi 100, còn 50 cho cổ đông phổ thông: 50 / 20 = 2,50 USD. Lựa chọn 7,50 USD quên trả cổ đông ưu đãi trước (150 / 20). Lựa chọn 27,50 USD bỏ qua chủ nợ (550 / 20), ngược thứ tự ưu tiên.' },
    { q: 'Công ty có 4 triệu cổ phiếu ưu đãi cumulative, mệnh giá 50 USD, cổ tức 7%/năm. Công ty đã bỏ qua cổ tức ưu đãi 2 năm liền và năm nay muốn trả cổ tức cho cổ đông phổ thông. Tổng số tiền tối thiểu phải trả cho cổ đông ưu đãi trước đó là:', choices: ['14 triệu USD', '28 triệu USD', '42 triệu USD'], answer: 2, explain: 'Cổ tức mỗi năm = 7% x 50 = 3,50 USD/cổ phiếu, tức 14 triệu USD cho 4 triệu cổ phiếu. Phải trả 2 năm nợ đọng cộng năm hiện tại: 3 x 14 = 42 triệu USD. Lựa chọn 14 triệu USD chỉ là cổ tức năm hiện tại (đúng với loại noncumulative); lựa chọn 28 triệu USD chỉ tính phần nợ đọng, quên năm hiện tại.' },
    { q: 'Cổ phiếu ưu đãi noncumulative mệnh giá 25, cổ tức 8%/năm. Công ty đã bỏ qua cổ tức 2 năm trước và năm nay muốn trả cổ tức cho cổ đông phổ thông. Mỗi cổ phiếu ưu đãi phải nhận tối thiểu:', choices: ['2,00', '4,00', '6,00'], answer: 0, explain: 'Với loại noncumulative, cổ tức đã bỏ qua mất hẳn, chỉ cần trả cổ tức năm hiện tại: 8% x 25 = 2,00. Lựa chọn 6,00 cộng cả 2 năm bỏ lỡ, là cách tính của loại cumulative; lựa chọn 4,00 chỉ tính 2 năm bỏ lỡ.' },
    { q: 'Nhà đầu tư sở hữu 3% cổ phiếu phổ thông của một công ty. Công ty phát hành thêm số cổ phiếu bằng 20% số cổ phiếu hiện có và bán toàn bộ cho nhà đầu tư mới. Nếu không có quyền ưu tiên mua, tỷ lệ sở hữu của nhà đầu tư sau đợt phát hành là:', choices: ['2,40%', '2,50%', '3,00%'], answer: 1, explain: 'Số cổ phiếu tăng lên 1,2 lần, số cổ phiếu của nhà đầu tư không đổi: 3% / 1,2 = 2,50%. Lựa chọn 2,40% lấy 3% x (1 - 20%), coi như mất 20% tỷ lệ sở hữu. Lựa chọn 3,00% bỏ qua tác động pha loãng; chỉ giữ được 3% nếu có preemptive right và mua 3% số cổ phiếu mới.' },
    { q: 'Cổ phiếu ưu đãi chuyển đổi mệnh giá 100, tỷ lệ chuyển đổi 4. Giá cổ phiếu phổ thông phải vượt mức nào thì giá trị chuyển đổi mới cao hơn mệnh giá?', choices: ['88', '400', '25'], answer: 2, explain: 'Giá trị chuyển đổi = 4 x giá cổ phiếu phổ thông, vượt 100 khi giá trên 100 / 4 = 25. Lựa chọn 400 nhân mệnh giá với tỷ lệ chuyển đổi thay vì chia. Lựa chọn 88 là giá trị chuyển đổi khi giá cổ phiếu phổ thông là 22 (4 x 22), không phải ngưỡng giá.' },
    { q: 'Nhà đầu tư mạo hiểm rót vốn vào một công ty khởi nghiệp, muốn được nhận lại vốn trước cổ đông sáng lập nếu công ty thất bại nhưng vẫn hưởng phần tăng giá nếu công ty thành công. Công cụ phù hợp NHẤT là:', choices: ['Cổ phiếu ưu đãi chuyển đổi', 'Cổ phiếu phổ thông callable', 'Cổ phiếu ưu đãi noncumulative, không chuyển đổi'], answer: 0, explain: 'Cổ phiếu ưu đãi chuyển đổi đứng trước cổ phiếu phổ thông khi thanh lý (đệm an toàn) và có thể đổi sang cổ phiếu phổ thông khi công ty thành công; vì vậy rất phổ biến trong venture capital. Cổ phiếu phổ thông callable không có ưu tiên khi thanh lý và công ty còn có thể mua lại. Ưu đãi không chuyển đổi có ưu tiên nhưng không hưởng phần tăng giá.' },
    { q: 'So với cổ phiếu phổ thông tương đương không có điều khoản đặc biệt, cổ phiếu phổ thông callable thường:', choices: ['Có giá cao hơn vì nhà đầu tư có thêm quyền bán lại', 'Có giá thấp hơn vì công ty có quyền mua lại ở giá định trước khi có lợi cho công ty', 'Có giá bằng nhau vì quyền kinh tế như nhau'], answer: 1, explain: 'Quyền call thuộc về công ty: công ty mua lại khi giá thị trường cao hơn giá call, lấy đi phần tăng giá của nhà đầu tư, nên nhà đầu tư chỉ chấp nhận giá thấp hơn. Lựa chọn nói "nhà đầu tư có thêm quyền bán lại" mô tả putable shares. Lựa chọn "giá bằng nhau" bỏ qua giá trị của quyền call.' },
    { q: 'Điều khoản nào tạo cho nhà đầu tư một "giá sàn" khi giá cổ phiếu giảm?', choices: ['Callable', 'Participating', 'Putable'], answer: 2, explain: 'Putable cho nhà đầu tư quyền bán lại cổ phiếu cho công ty ở giá định trước, nên giá trị khoản đầu tư không giảm dưới mức đó; vì vậy cổ phiếu putable có giá cao hơn. Callable là quyền của công ty, bất lợi cho nhà đầu tư. Participating chỉ cho thêm cổ tức khi lợi nhuận vượt ngưỡng, không bảo vệ khi giá giảm.' },
    { q: 'Công ty có cổ phiếu ưu đãi callable, cổ tức 7%. Tình huống nào khiến công ty có khả năng cao nhất thực hiện quyền mua lại?', choices: ['Lợi suất yêu cầu trên thị trường giảm xuống khoảng 5%', 'Lợi suất yêu cầu trên thị trường tăng lên khoảng 9%', 'Lợi nhuận của công ty giảm mạnh'], answer: 0, explain: 'Khi lợi suất thị trường giảm, công ty mua lại ở giá call rồi phát hành cổ phiếu ưu đãi mới với cổ tức thấp hơn, giống tái cấp vốn trái phiếu. Khi lợi suất tăng lên 9%, cổ tức 7% đã rẻ so với thị trường nên công ty không có lý do mua lại. Lợi nhuận giảm mạnh làm công ty cần giữ tiền, không phải dùng tiền mua lại.' },
    { q: 'Công ty có 10 triệu cổ phiếu phổ thông lưu hành và đã phát hành warrant cho phép mua 2 triệu cổ phiếu mới. Một nhà đầu tư nắm 1 triệu cổ phiếu và không nắm warrant. Nếu toàn bộ warrant được thực hiện, tỷ lệ sở hữu của nhà đầu tư gần nhất với:', choices: ['10,00%', '8,00%', '8,33%'], answer: 2, explain: 'Thực hiện warrant tạo 2 triệu cổ phiếu mới, tổng thành 12 triệu: 1 / 12 = 8,33%. Lựa chọn 10,00% bỏ qua pha loãng, như thể warrant chỉ chuyển nhượng cổ phiếu có sẵn. Lựa chọn 8,00% trừ thẳng 2 điểm phần trăm (10% x 0,8) thay vì chia cho số cổ phiếu mới.' },
    { q: 'So với warrant, quyền mua cổ phiếu (rights) do công ty phát hành thường:', choices: ['Có thời hạn dài, gắn kèm trái phiếu để giảm lãi suất', 'Có thời hạn ngắn, cấp cho cổ đông hiện hữu theo tỷ lệ sở hữu, giá mua thường thấp hơn giá thị trường', 'Do công ty chứng khoán phát hành trên cổ phiếu có sẵn'], answer: 1, explain: 'Rights là quyền ngắn hạn gắn với preemptive right: cổ đông hiện hữu được mua cổ phiếu mới theo tỷ lệ, thường ở giá chiết khấu, và có thể bán quyền. Thời hạn dài và gắn kèm trái phiếu như "chất ngọt" là đặc điểm của warrant. Phát hành trên cổ phiếu có sẵn bởi công ty chứng khoán là covered warrant.' },
    { q: 'Một nhà đầu tư Việt Nam mua chứng quyền có bảo đảm (covered warrant) trên cổ phiếu ABC niêm yết ở HOSE. Khi chứng quyền được thực hiện, số cổ phiếu lưu hành của ABC:', choices: ['Không đổi, vì chứng quyền do công ty chứng khoán phát hành dựa trên cổ phiếu có sẵn', 'Tăng, vì ABC phải phát hành cổ phiếu mới', 'Giảm, vì ABC phải mua lại cổ phiếu để giao'], answer: 0, explain: 'Covered warrant do công ty chứng khoán phát hành và phòng ngừa bằng cổ phiếu có sẵn (thực tế ở Việt Nam thường thanh toán bằng tiền), nên ABC không phát hành thêm cổ phiếu. Lựa chọn "tăng" đúng với warrant theo nghĩa CFA do chính công ty phát hành. ABC không tham gia nên không có lý do mua lại cổ phiếu.' },
    { q: 'Một công ty không trả cổ tức năm nay cho cổ phiếu ưu đãi cumulative của mình. Hệ quả nào sau đây là đúng?', choices: ['Công ty bị coi là vỡ nợ và cổ đông ưu đãi có thể yêu cầu phá sản', 'Cổ tức năm nay mất hẳn, cổ đông ưu đãi không được trả bù', 'Cổ tức bỏ lỡ thành nợ đọng; công ty phải trả hết trước khi trả cổ tức cho cổ đông phổ thông'], answer: 2, explain: 'Không trả cổ tức ưu đãi không phải vỡ nợ, kể cả với loại cumulative; cổ tức bị bỏ lỡ được cộng dồn thành dividends in arrears và phải trả trước cổ đông phổ thông. Lựa chọn "vỡ nợ" nhầm cổ phiếu ưu đãi với trái phiếu. Lựa chọn "mất hẳn" mô tả loại noncumulative.' },
    { q: 'Nhà đầu tư mua 1.000 cổ phiếu phổ thông giá 30 USD. Công ty sau đó phá sản, tài sản không đủ trả nợ, còn thiếu chủ nợ 50 triệu USD. Thua lỗ tối đa của nhà đầu tư là:', choices: ['30.000 USD', '30.000 USD cộng phần nợ còn thiếu tương ứng tỷ lệ sở hữu', '0, vì công ty chịu toàn bộ thua lỗ'], answer: 0, explain: 'Nhờ trách nhiệm hữu hạn, cổ đông mất tối đa số vốn đã đầu tư: 1.000 x 30 = 30.000 USD, không phải bù phần nợ còn thiếu cho chủ nợ. Lựa chọn cộng thêm phần nợ là bẫy "cổ đông chịu trách nhiệm với nợ công ty". Lựa chọn 0 sai vì cổ phiếu mất toàn bộ giá trị khi cổ đông phổ thông không nhận được gì.' },
    { q: 'Một công ty có tài sản 500 triệu, nợ phải trả 320 triệu và cổ phiếu ưu đãi mệnh giá thanh lý 100 triệu. Nếu giá trị tài sản giảm còn 450 triệu (nợ và cổ phiếu ưu đãi không đổi), giá trị phần thuộc cổ đông phổ thông thay đổi:', choices: ['-10,00%', '-62,50%', '-27,78%'], answer: 1, explain: 'Phần của cổ đông phổ thông giảm từ 500 - 320 - 100 = 80 xuống 450 - 320 - 100 = 30, tức -62,50%. Là residual claim, cổ đông phổ thông hấp thụ toàn bộ khoản giảm 50 trước các bên khác. Lựa chọn -10,00% là mức giảm của tổng tài sản. Lựa chọn -27,78% tính trên phần vốn gồm cả cổ phiếu ưu đãi (180 xuống 130).' },
    { q: 'Một quỹ định giá cổ phần tại công ty tư nhân bằng cách so sánh với các công ty niêm yết tương tự, ra giá trị 80 triệu USD, sau đó áp dụng chiết khấu kém thanh khoản 30%. Giá trị ước tính gần nhất với:', choices: ['56,00 triệu USD', '61,54 triệu USD', '104,00 triệu USD'], answer: 0, explain: '80 x (1 - 30%) = 56,00 triệu USD. Lựa chọn 61,54 triệu USD chia 80 cho 1,3, không phải cách áp dụng chiết khấu theo tỷ lệ. Lựa chọn 104,00 triệu USD cộng thêm 30%, ngược chiều: cổ phần kém thanh khoản phải rẻ hơn tài sản tương tự có thể bán ngay trên sàn.' },
    { q: 'Lợi suất do các quỹ private equity báo cáo thường có độ biến động thấp hơn cổ phiếu niêm yết tương đương, chủ yếu vì:', choices: ['Công ty tư nhân luôn ít rủi ro hơn công ty niêm yết', 'Giá trị được định giá định kỳ bằng mô hình thay vì giá thị trường liên tục, nên lợi suất trông "mượt" hơn', 'Quỹ private equity không dùng đòn bẩy'], answer: 1, explain: 'Cổ phần tư nhân không có giá giao dịch hằng ngày; giá trị được ước tính theo quý bằng mô hình, làm biến động đo được thấp hơn rủi ro thực tế. Công ty tư nhân không ít rủi ro hơn (nhà đầu tư còn đòi phần bù kém thanh khoản). Nhiều quỹ, nhất là buyout, dùng đòn bẩy cao.' },
    { q: 'Một quỹ mua 25% cổ phần (thiểu số) của một công ty tư nhân đã có doanh thu ổn định, để công ty có vốn mở rộng sang thị trường mới. Đây là hình thức:', choices: ['Venture capital', 'Leveraged buyout', 'Growth equity'], answer: 2, explain: 'Growth equity là cổ phần thiểu số ở công ty đã có doanh thu, cần vốn mở rộng. Venture capital đầu tư vào công ty giai đoạn đầu, thường chưa có doanh thu ổn định. Leveraged buyout mua quyền kiểm soát công ty trưởng thành, tài trợ phần lớn bằng nợ.' },
    { q: 'Lý do nào sau đây giải thích tốt NHẤT vì sao một công ty có thể chọn ở lại tư nhân thay vì niêm yết?', choices: ['Để cổ phiếu có thanh khoản cao hơn', 'Tránh chi phí tuân thủ, nghĩa vụ công bố thông tin công khai và áp lực kết quả hằng quý', 'Để có thể huy động vốn từ đông đảo nhà đầu tư cá nhân'], answer: 1, explain: 'Công ty tư nhân có chi phí tuân thủ thấp hơn, ít phải công bố thông tin và có thể theo đuổi chiến lược dài hạn. Thanh khoản cao và tiếp cận nhà đầu tư cá nhân là lợi ích của việc niêm yết, không phải của ở lại tư nhân.' },
    { q: 'Cổ đông nắm cổ phiếu ưu đãi thông thường có quyền biểu quyết trong trường hợp nào?', choices: ['Ở mọi nghị quyết của đại hội, như cổ đông phổ thông', 'Không bao giờ, trong mọi trường hợp', 'Thường chỉ khi cổ tức ưu đãi bị bỏ lỡ hoặc với vấn đề ảnh hưởng trực tiếp đến quyền của họ'], answer: 2, explain: 'Cổ phiếu ưu đãi thường không biểu quyết, nhưng điều lệ hoặc luật thường trao quyền biểu quyết khi cổ tức bị bỏ lỡ hoặc khi có thay đổi ảnh hưởng trực tiếp đến họ. Biểu quyết ở mọi nghị quyết là đặc điểm của cổ phiếu phổ thông. "Không bao giờ" quá tuyệt đối.' },
  ];

  window.LESSONS['EQ-01'] = {
    moduleId: 'EQ-01',
    calculator: 'Không cần máy tính',
    warmup: [
      'Ôn CF-01: cổ đông của công ty cổ phần chịu trách nhiệm đến đâu với nợ của công ty?',
      'Nếu công ty phá sản, theo bạn ai được trả tiền trước: ngân hàng cho vay hay cổ đông? Vì sao?',
      'Kể tên một cổ phiếu bạn biết có cổ tức rất ổn định và một cổ phiếu gần như không bao giờ trả cổ tức.',
    ],
    sections,
    glossary,
    practice,
    widgets: {},
    slides: [],
    wrapup: [
      'Viết bảng so sánh nợ và vốn cổ phần theo 5 tiêu chí mà không nhìn tài liệu.',
      'Với mỗi điều khoản cumulative, participating, convertible, callable, putable: ai được lợi, công ty hay nhà đầu tư?',
      'Còn câu hỏi nào chưa rõ? Ghi lại để hỏi.',
    ],
  };
}());
