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
<p>Tiếp theo: tab <b>Luyện tập</b> 10 câu. Module sau (EQ-02) đi sâu vào khác biệt về quyền biểu quyết giữa các loại cổ phiếu, các quốc gia và quy trình biểu quyết.</p>`,
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
    { q: 'Đặc điểm nào sau đây đúng với cổ đông phổ thông của một công ty cổ phần?', choices: ['Thua lỗ tối đa bằng số vốn đã đầu tư', 'Được bảo đảm nhận cổ tức hằng năm', 'Được hoàn vốn vào một ngày đáo hạn định trước'], answer: 0, explain: 'Trách nhiệm hữu hạn giới hạn thua lỗ ở số vốn đã góp. Cổ tức do HĐQT quyết định, không được bảo đảm (B sai). Cổ phiếu là vĩnh viễn, không có ngày đáo hạn (C sai).' },
    { q: 'Cổ phiếu ưu đãi cumulative mệnh giá 100, cổ tức 6%/năm. Công ty đã bỏ qua cổ tức 3 năm liền. Năm nay công ty muốn trả cổ tức cho cổ đông phổ thông. Mỗi cổ phiếu ưu đãi phải nhận tối thiểu:', choices: ['6', '18', '24'], answer: 2, explain: 'Nợ đọng 3 năm (18) cộng cổ tức năm hiện tại (6) = 24. Đáp án A là cách tính của loại noncumulative; đáp án B quên cổ tức của năm hiện tại.' },
    { q: 'Công ty thanh lý thu về 400 triệu. Nợ phải trả 320 triệu, cổ phiếu ưu đãi có tổng mệnh giá thanh lý 100 triệu. Cổ đông ưu đãi nhận được:', choices: ['100 triệu', '80 triệu', '0'], answer: 1, explain: 'Chủ nợ được trả trước 320, còn 80 cho cổ đông ưu đãi (thiếu 20 so với mệnh giá); cổ đông phổ thông nhận 0. Đáp án A bỏ qua thứ tự ưu tiên; đáp án C nhầm cổ đông ưu đãi với cổ đông phổ thông.' },
    { q: 'Xét từ góc độ nhà đầu tư, công cụ nào sau đây ít rủi ro nhất (cùng một công ty phát hành)?', choices: ['Cổ phiếu ưu đãi cumulative, putable', 'Cổ phiếu ưu đãi noncumulative, callable', 'Cổ phiếu phổ thông'], answer: 0, explain: 'Cumulative giữ lại cổ tức bỏ lỡ, putable cho nhà đầu tư giá sàn để bán lại: cả hai giảm rủi ro. Noncumulative và callable đều bất lợi cho nhà đầu tư; cổ phiếu phổ thông đứng sau cùng.' },
    { q: 'Cổ phiếu ưu đãi chuyển đổi mệnh giá 100, tỷ lệ chuyển đổi 3, giá cổ phiếu phổ thông hiện là 40. Giá trị chuyển đổi là:', choices: ['33,33', '120', '100'], answer: 1, explain: 'Giá trị chuyển đổi = 3 x 40 = 120, cao hơn mệnh giá nên chuyển đổi có lợi. Đáp án A chia mệnh giá cho tỷ lệ (đó là giá chuyển đổi hòa vốn 33,33 mỗi cổ phiếu phổ thông); đáp án C chỉ là mệnh giá.' },
    { q: 'Cổ phiếu ưu đãi được nhận cổ tức cố định và được chia thêm khi lợi nhuận vượt một ngưỡng định trước là loại:', choices: ['Cumulative', 'Convertible', 'Participating'], answer: 2, explain: 'Participating được "tham dự" vào phần lợi nhuận vượt ngưỡng. Cumulative nói về việc cộng dồn cổ tức bỏ lỡ; convertible nói về quyền đổi sang cổ phiếu phổ thông.' },
    { q: 'So với cổ phiếu niêm yết, đặc điểm nào điển hình của vốn cổ phần tư nhân?', choices: ['Sở hữu tập trung, nhà đầu tư thường tham gia trực tiếp vào HĐQT', 'Có giá thị trường cập nhật liên tục trong ngày', 'Yêu cầu công bố thông tin chuẩn hóa và công khai cho mọi người'], answer: 0, explain: 'Nhà đầu tư tư nhân thường nắm khối cổ phần lớn và có ghế HĐQT, quyền phủ quyết. Giá liên tục và công bố thông tin công khai là đặc điểm của cổ phiếu niêm yết.' },
    { q: 'Một quỹ mua riêng lẻ 15% cổ phần mới phát hành của một công ty đang niêm yết, với giá chiết khấu 10% so với giá thị trường. Đây là:', choices: ['Venture capital', 'PIPE', 'Leveraged buyout'], answer: 1, explain: 'PIPE là đầu tư tư nhân vào công ty niêm yết. Venture capital đầu tư vào công ty giai đoạn đầu chưa niêm yết; LBO mua quyền kiểm soát, thường đưa công ty về tư nhân.' },
    { q: 'Vì sao cổ phiếu ưu đãi được xem là công cụ lai (hybrid)?', choices: ['Vì có quyền biểu quyết như cổ phiếu phổ thông và được ưu tiên như nợ có bảo đảm', 'Vì công ty phải trả cổ tức, nếu không sẽ vỡ nợ như trái phiếu', 'Vì cổ tức thường cố định như lãi trái phiếu, nhưng không trả cổ tức không phải vỡ nợ và thường không có kỳ hạn'], answer: 2, explain: 'Cổ tức cố định giống nợ; không có nghĩa vụ trả, không đáo hạn, xếp sau chủ nợ là đặc điểm vốn. A sai: cổ phiếu ưu đãi thường không biểu quyết và không có bảo đảm. B sai: bỏ cổ tức ưu đãi không gây vỡ nợ.' },
    { q: 'Điểm khác biệt chính giữa warrant (theo nghĩa CFA) và quyền chọn mua niêm yết trên sàn phái sinh là:', choices: ['Warrant luôn có kỳ hạn ngắn hơn quyền chọn', 'Warrant do chính công ty phát hành, khi thực hiện công ty phát hành cổ phiếu mới gây pha loãng', 'Warrant cho quyền bán, không phải quyền mua'], answer: 1, explain: 'Warrant do công ty phát hành và tạo cổ phiếu mới khi thực hiện. Warrant thường có kỳ hạn dài (A sai) và là quyền mua (C sai).' },
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
