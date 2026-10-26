// Bài giảng DE-01 - Derivative Instrument and Derivative Market Features (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t } = window.CFAH;

  const sections = [
    {
      title: '1. Bức tranh lớn',
      minutes: 5,
      html: `
<p>Topic Derivatives có 10 module. Module đầu tiên này trả lời hai câu hỏi nền tảng: <b>phái sinh là gì</b> và <b>nó được giao dịch ở đâu, như thế nào</b>.</p>
<div class="key">Một ${t('deriv', 'công cụ phái sinh (derivative)')} là một hợp đồng mà giá trị và dòng tiền của nó <b>phụ thuộc vào (được "phái sinh" từ)</b> giá hoặc giá trị của một thứ khác, gọi là ${t('underlying', 'tài sản cơ sở (underlying)')}.</div>
<p>Ví dụ đời thường: một người nuôi gà ký với chuỗi nhà hàng hôm nay rằng sau 1 năm sẽ bán gà với giá 110 USD/con. Hợp đồng này tự nó không phải là con gà, nhưng lời hay lỗ của nó hoàn toàn do <b>giá gà sau 1 năm</b> quyết định. Đó là một phái sinh.</p>
<p>Lộ trình của topic:</p>
<table class="plain"><thead><tr><th>Module</th><th>Câu hỏi chính</th></tr></thead><tbody>
<tr><td><b>DE-01</b> (bài này)</td><td>Phái sinh là gì, thị trường OTC và sàn khác nhau thế nào?</td></tr>
<tr><td>DE-02</td><td>Forward, futures, swap, option, credit derivative; payoff và lợi nhuận</td></tr>
<tr><td>DE-03</td><td>Lợi ích, rủi ro; doanh nghiệp phát hành và nhà đầu tư dùng phái sinh ra sao</td></tr>
<tr><td>DE-04</td><td>Arbitrage, sao chép (replication), chi phí nắm giữ (cost of carry)</td></tr>
<tr><td>DE-05 đến DE-10</td><td>Định giá forward, futures, swap, option, put-call parity, mô hình nhị thức</td></tr>
</tbody></table>
<p class="tip"><b>Mẹo học:</b> module này gần như toàn lý thuyết, đề thi hỏi dạng "đặc điểm nào ĐÚNG với OTC / với sàn". Hãy tập trung vào <b>bảng so sánh</b> ở phần 5.</p>`,
    },
    {
      title: '2. Định nghĩa và các đặc điểm cơ bản của một hợp đồng phái sinh',
      minutes: 12,
      html: `
<p>Mọi hợp đồng phái sinh, dù đơn giản hay phức tạp, đều phải trả lời được 6 câu hỏi sau:</p>
<table class="plain"><thead><tr><th>Yếu tố</th><th>Ý nghĩa</th><th>Ví dụ hợp đồng gà</th></tr></thead><tbody>
<tr><td>${t('underlying', 'Tài sản cơ sở')}</td><td>Phái sinh "phụ thuộc" vào cái gì</td><td>Giá gà</td></tr>
<tr><td>${t('size', 'Quy mô hợp đồng / giá trị danh nghĩa (contract size, notional)')}</td><td>Bao nhiêu đơn vị tài sản cơ sở</td><td>1.000 con</td></tr>
<tr><td>${t('maturity', 'Ngày đáo hạn (maturity / expiration)')}</td><td>Khi nào hợp đồng kết thúc</td><td>Sau 1 năm</td></tr>
<tr><td>Giá hoặc tỷ lệ thỏa thuận</td><td>Giá kỳ hạn, giá thực hiện, lãi suất cố định...</td><td>110 USD/con</td></tr>
<tr><td>${t('settle', 'Cách thanh toán (settlement)')}</td><td>Giao hàng thật hay chỉ trả chênh lệch tiền</td><td>Giao gà thật</td></tr>
<tr><td>${t('cpty', 'Các bên (counterparties)')}</td><td>Ai mua (long), ai bán (short)</td><td>Nhà hàng long, người nuôi gà short</td></tr>
</tbody></table>

<h4>Long và short</h4>
<p>Bên ${t('long', 'long (bên mua)')} là bên được lợi khi giá tài sản cơ sở <b>tăng</b> (với forward, futures, call). Bên ${t('short', 'short (bên bán)')} là bên được lợi khi giá tài sản cơ sở <b>giảm</b>. Trong phái sinh, lợi của bên này đúng bằng lỗ của bên kia (trước phí): đây là trò chơi ${t('zerosum', 'tổng bằng không (zero-sum)')}.</p>

<h4>Hai cách thanh toán</h4>
<ul>
<li>${t('physical', 'Giao nhận vật chất (physical delivery)')}: bên short giao tài sản thật, bên long trả giá thỏa thuận.</li>
<li>${t('cash', 'Thanh toán bằng tiền (cash settlement)')}: không giao hàng, bên lỗ chỉ trả cho bên lời phần <b>chênh lệch</b> giữa giá thị trường và giá thỏa thuận. Ví dụ: hợp đồng tương lai chỉ số chứng khoán luôn thanh toán bằng tiền vì không ai "giao" được một chỉ số.</li>
</ul>

<h4>Đặc điểm kinh tế quan trọng nhất: đòn bẩy</h4>
<p>Phái sinh thường cần <b>rất ít hoặc không cần</b> vốn ban đầu so với việc mua tài sản cơ sở (forward: 0; futures: chỉ ký quỹ; option: chỉ trả phí). Vì vậy lời lỗ tính trên vốn bỏ ra được khuếch đại, gọi là ${t('leverage', 'đòn bẩy (leverage)')}.</p>
<div class="example"><div class="ex-h">Ví dụ 2.1 - Đòn bẩy</div>
<p>Nhà đầu tư A mua 1.000 cổ phiếu giá 50 USD (bỏ ra 50.000 USD). Nhà đầu tư B mua hợp đồng tương lai trên đúng 1.000 cổ phiếu đó và chỉ phải ký quỹ 10% giá trị danh nghĩa. Nếu giá cổ phiếu lên 53 USD, lợi suất trên vốn của mỗi người là bao nhiêu? Nếu giá xuống 47 USD thì sao?</p>
<details><summary>Xem lời giải</summary>
<p>Vốn của B = 10% × 50.000 = 5.000 USD. Mức lời/lỗ của cả hai đều là 1.000 × 3 = 3.000 USD.</p>
<p>Giá lên 53: A lời 3.000 / 50.000 = <b>6%</b>; B lời 3.000 / 5.000 = <b>60%</b>.<br>Giá xuống 47: A lỗ <b>-6%</b>; B lỗ <b>-60%</b>.</p>
<p>Đòn bẩy khuếch đại <b>cả hai chiều</b>. Đây vừa là lợi ích (dùng ít vốn) vừa là rủi ro (lỗ nhanh), sẽ phân tích kỹ ở DE-03.</p></details></div>
<p class="warn"><b>Bẫy:</b> "phái sinh luôn được dùng để đầu cơ" là sai. Cùng một hợp đồng, người nuôi gà dùng để <b>phòng hộ (hedge)</b>, còn một trader không nuôi gà dùng để <b>đầu cơ (speculate)</b>. Bản chất hợp đồng không quyết định mục đích sử dụng.</p>`,
    },
    {
      title: '3. Các loại tài sản cơ sở',
      minutes: 8,
      html: `
<p>Gần như mọi thứ có giá hoặc có thể đo lường khách quan đều có thể làm tài sản cơ sở. Đề thi hay hỏi theo nhóm:</p>
<table class="plain"><thead><tr><th>Nhóm</th><th>Ví dụ</th><th>Ghi chú</th></tr></thead><tbody>
<tr><td>Cổ phiếu (equity)</td><td>Một cổ phiếu riêng lẻ, rổ cổ phiếu, chỉ số (S&amp;P 500, VN30)</td><td>Phái sinh trên chỉ số thường thanh toán bằng tiền</td></tr>
<tr><td>Thu nhập cố định và lãi suất</td><td>Trái phiếu, lãi suất tham chiếu thị trường (${t('mrr', 'MRR')}, ví dụ SOFR)</td><td>Lãi suất không phải tài sản, nhưng vẫn là "underlying" hợp lệ</td></tr>
<tr><td>Tiền tệ (currency)</td><td>EUR/USD, USD/VND</td><td>Hợp đồng kỳ hạn ngoại tệ rất phổ biến với doanh nghiệp xuất nhập khẩu</td></tr>
<tr><td>Hàng hóa (commodity)</td><td>Dầu, vàng, cà phê, lúa mì, gà...</td><td>Có thể giao nhận vật chất; có chi phí lưu kho (DE-04)</td></tr>
<tr><td>Tín dụng (credit)</td><td>Rủi ro vỡ nợ của một công ty hoặc một nhóm trái phiếu</td><td>Hợp đồng hoán đổi rủi ro tín dụng (CDS) học ở DE-02</td></tr>
<tr><td>Khác</td><td>Thời tiết, tuổi thọ, tài sản mã hóa, thậm chí một phái sinh khác</td><td>Ví dụ: quyền chọn trên hợp đồng tương lai</td></tr>
</tbody></table>
<p class="tip"><b>Ghi nhớ:</b> tài sản cơ sở không nhất thiết phải mua bán được (lãi suất, thời tiết, chỉ số). Chỉ cần nó có một giá trị đo được rõ ràng để xác định ai trả ai bao nhiêu khi đáo hạn.</p>`,
    },
    {
      title: '4. Thị trường phái sinh: vai trò và các bên tham gia',
      minutes: 9,
      html: `
<p>Thị trường phái sinh tồn tại vì nó giúp <b>chuyển rủi ro</b> từ người không muốn gánh sang người sẵn sàng gánh (và đòi được trả công). Ngoài ra nó còn giúp phát hiện giá và giảm chi phí giao dịch (DE-03).</p>
<h4>Ai tham gia?</h4>
<ul>
<li><b>Người dùng cuối (end users)</b>: doanh nghiệp, quỹ đầu tư, ngân hàng, chính phủ. Họ dùng phái sinh để phòng hộ hoặc tạo vị thế đầu tư.</li>
<li>${t('dealer', 'Nhà tạo lập thị trường / dealer')}: thường là ngân hàng lớn, sẵn sàng làm bên đối ứng cho khách hàng và kiếm lời từ chênh lệch giá mua - bán. Dealer thường phòng hộ lại rủi ro bằng các giao dịch khác.</li>
<li>${t('ccp', 'Đối tác bù trừ trung tâm (central counterparty, CCP)')}: đứng giữa hai bên, trở thành người mua của mọi người bán và người bán của mọi người mua.</li>
</ul>
<h4>Hai "nơi" giao dịch</h4>
<p>${t('etd', 'Phái sinh niêm yết trên sàn (exchange-traded derivatives, ETD)')} giao dịch trên sở giao dịch với hợp đồng chuẩn hóa. ${t('otc', 'Phái sinh phi tập trung (over-the-counter, OTC)')} được thỏa thuận <b>trực tiếp</b> giữa hai bên (thường là khách hàng và dealer), điều khoản tùy chỉnh theo nhu cầu.</p>
<p>Theo giá trị danh nghĩa, thị trường OTC <b>lớn hơn nhiều</b> so với thị trường sàn, chủ yếu nhờ hợp đồng hoán đổi lãi suất (interest rate swap).</p>
<p class="tip"><b>Ví dụ Việt Nam:</b> hợp đồng tương lai chỉ số VN30 là phái sinh niêm yết trên HNX, được bù trừ qua Tổng công ty Lưu ký và Bù trừ chứng khoán (VSDC). Còn hợp đồng kỳ hạn USD/VND mà doanh nghiệp ký với ngân hàng là OTC.</p>`,
    },
    {
      title: '5. So sánh OTC và phái sinh niêm yết (ETD)',
      minutes: 12,
      html: `
<table class="plain"><thead><tr><th>Đặc điểm</th><th>Niêm yết trên sàn (ETD)</th><th>OTC</th></tr></thead><tbody>
<tr><td>Điều khoản</td><td>${t('standard', 'Chuẩn hóa (standardized)')}: quy mô, đáo hạn, tài sản cơ sở do sàn quy định</td><td>Tùy chỉnh (customized) theo nhu cầu hai bên</td></tr>
<tr><td>Đối tác</td><td>CCP đứng giữa, các bên không cần biết nhau</td><td>Song phương, thường khách hàng - dealer</td></tr>
<tr><td>${t('cptyrisk', 'Rủi ro đối tác (counterparty credit risk)')}</td><td>Rất thấp nhờ CCP và ký quỹ</td><td>Cao hơn (trừ khi bù trừ qua CCP hoặc có tài sản đảm bảo)</td></tr>
<tr><td>Ký quỹ, thanh toán</td><td>${t('margin', 'Ký quỹ')} bắt buộc, ${t('mtm', 'thanh toán lãi lỗ hằng ngày (mark-to-market)')}</td><td>Thỏa thuận riêng, thường ít hơn</td></tr>
<tr><td>Thanh khoản</td><td>Cao: dễ đóng vị thế bằng giao dịch ngược chiều</td><td>Thấp hơn: muốn thoát thường phải thương lượng với chính đối tác</td></tr>
<tr><td>Minh bạch</td><td>Cao: giá, khối lượng công khai</td><td>Thấp hơn, giao dịch riêng tư</td></tr>
<tr><td>Quản lý nhà nước</td><td>Chặt chẽ</td><td>Trước 2008 ít; nay chặt hơn nhiều</td></tr>
<tr><td>Chi phí giao dịch</td><td>Thấp nhờ chuẩn hóa</td><td>Cao hơn, nhưng "may đo" được</td></tr>
</tbody></table>

<h4>Đánh đổi cốt lõi</h4>
<div class="key">Sàn: <b>chuẩn hóa → thanh khoản, minh bạch, ít rủi ro đối tác</b>, nhưng có thể không khớp nhu cầu.<br>OTC: <b>linh hoạt, may đo</b>, nhưng kém thanh khoản, kém minh bạch và có rủi ro đối tác.</div>

<div class="example"><div class="ex-h">Ví dụ 5.1 - Chọn thị trường nào?</div>
<p>Một công ty Việt Nam sẽ nhận 1.370.000 EUR vào ngày 17/8 năm sau và muốn chốt tỷ giá đổi sang USD đúng ngày đó, đúng số tiền đó. Hợp đồng tương lai EUR trên sàn có quy mô 125.000 EUR/hợp đồng và chỉ đáo hạn vào tháng 3, 6, 9, 12. Nên dùng công cụ nào?</p>
<details><summary>Xem lời giải</summary>
<p>1.370.000 / 125.000 = 10,96 hợp đồng, không chia lẻ được; ngày đáo hạn cũng không khớp. Dùng futures sẽ để lại rủi ro chênh lệch. Một <b>hợp đồng kỳ hạn OTC</b> với ngân hàng cho phép ghi đúng số tiền và đúng ngày, đổi lại công ty chịu rủi ro đối tác với ngân hàng và khó thoát vị thế sớm.</p></details></div>

<h4>Sau khủng hoảng 2008: OTC "giống sàn" hơn</h4>
<p>Khủng hoảng tài chính 2008 cho thấy rủi ro đối tác trong OTC có thể lan truyền khắp hệ thống. Các cải cách (Dodd-Frank ở Mỹ, EMIR ở châu Âu) yêu cầu:</p>
<ul>
<li>Hợp đồng OTC chuẩn hóa (như phần lớn swap lãi suất) phải ${t('clearing', 'bù trừ trung tâm (central clearing)')} qua CCP.</li>
<li>Giao dịch phải báo cáo cho ${t('repo', 'kho lưu trữ dữ liệu giao dịch (trade repository)')}, tăng minh bạch.</li>
<li>Hợp đồng không bù trừ trung tâm phải ký quỹ nhiều hơn.</li>
</ul>
<p>Hợp đồng OTC song phương thường được ký theo ${t('isda', 'thỏa thuận khung ISDA (ISDA Master Agreement)')}, quy định chung về thanh toán, bù trừ ròng và xử lý khi một bên vỡ nợ.</p>
<p class="warn"><b>Bẫy:</b> "OTC không có quản lý" là sai với thị trường hiện nay. Nhưng nếu đề hỏi "so với sàn" thì OTC vẫn là <b>ít minh bạch hơn, ít thanh khoản hơn, ít quản lý hơn</b>.</p>`,
    },
    {
      title: '6. Đối tác bù trừ trung tâm (CCP) và ký quỹ hoạt động thế nào',
      minutes: 4,
      html: `
<p>Khi A mua và B bán một hợp đồng trên sàn, CCP chen vào giữa bằng cơ chế ${t('novation', 'thay thế nghĩa vụ (novation)')}: hợp đồng A - B được thay bằng hai hợp đồng A - CCP và CCP - B. Nếu B vỡ nợ, A vẫn được CCP thanh toán.</p>
<p>CCP tự bảo vệ bằng:</p>
<ol>
<li><b>Ký quỹ ban đầu (initial margin)</b> từ cả hai bên.</li>
<li><b>Thanh toán lãi lỗ hằng ngày</b>: bên lỗ nộp thêm tiền (variation margin), bên lời được ghi có. Lỗ không bao giờ được phép tích tụ lớn.</li>
<li>Quỹ phòng ngừa rủi ro do các thành viên bù trừ đóng góp.</li>
</ol>
<p class="tip">Chi tiết về ký quỹ ban đầu, ký quỹ duy trì và lệnh gọi ký quỹ (margin call) sẽ có ví dụ số ở DE-02 (phần futures).</p>`,
    },
    {
      title: '7. Tóm tắt và bẫy thường gặp',
      minutes: 5,
      html: `
<table class="plain"><thead><tr><th>Tình huống</th><th>Nhớ</th></tr></thead><tbody>
<tr><td>Định nghĩa phái sinh</td><td>Giá trị phụ thuộc vào một tài sản cơ sở; thường cần ít vốn ban đầu (đòn bẩy)</td></tr>
<tr><td>Tài sản cơ sở</td><td>Không nhất thiết mua bán được: lãi suất, chỉ số, thời tiết, tín dụng đều hợp lệ</td></tr>
<tr><td>Long / short</td><td>Long lời khi giá cơ sở tăng; tổng lời lỗ hai bên bằng 0 (trước phí)</td></tr>
<tr><td>Thanh toán</td><td>Giao nhận vật chất hoặc trả chênh lệch bằng tiền</td></tr>
<tr><td>Sàn (ETD)</td><td>Chuẩn hóa, CCP, ký quỹ, mark-to-market hằng ngày, thanh khoản, minh bạch</td></tr>
<tr><td>OTC</td><td>Tùy chỉnh, song phương, rủi ro đối tác, kém minh bạch, thị trường lớn hơn theo notional</td></tr>
<tr><td>Sau 2008</td><td>Swap chuẩn hóa phải bù trừ qua CCP và báo cáo; OTC không còn "không quản lý"</td></tr>
<tr><td>Mục đích</td><td>Cùng một hợp đồng có thể dùng để phòng hộ hoặc đầu cơ</td></tr>
</tbody></table>
<p>Tiếp theo: tab <b>Luyện tập</b> - 10 câu (rút ngẫu nhiên từ ngân hàng 30 câu, mỗi lần làm một bộ khác). Module sau (DE-02) đi vào từng loại hợp đồng và cách tính payoff.</p>`,
    },
  ];

  const glossary = {
    deriv: ['Derivative', 'Công cụ phái sinh', 'Hợp đồng có giá trị và dòng tiền phụ thuộc vào giá hoặc giá trị của một tài sản cơ sở.'],
    underlying: ['Underlying', 'Tài sản cơ sở', 'Thứ mà phái sinh "phụ thuộc" vào: cổ phiếu, chỉ số, lãi suất, tiền tệ, hàng hóa, tín dụng...'],
    size: ['Contract size / notional amount', 'Quy mô hợp đồng / giá trị danh nghĩa', 'Số đơn vị tài sản cơ sở (hoặc số tiền gốc tham chiếu) mà hợp đồng bao phủ.'],
    maturity: ['Maturity / expiration date', 'Ngày đáo hạn', 'Thời điểm hợp đồng kết thúc và được thanh toán.'],
    settle: ['Settlement', 'Thanh toán hợp đồng', 'Cách hai bên hoàn tất nghĩa vụ khi đáo hạn: giao hàng thật hoặc trả chênh lệch bằng tiền.'],
    cpty: ['Counterparties', 'Các bên của hợp đồng', 'Bên mua (long) và bên bán (short) của hợp đồng phái sinh.'],
    long: ['Long position', 'Vị thế mua', 'Bên được lợi khi giá tài sản cơ sở tăng (với forward, futures, call).'],
    short: ['Short position', 'Vị thế bán', 'Bên được lợi khi giá tài sản cơ sở giảm (với forward, futures, call).'],
    zerosum: ['Zero-sum game', 'Trò chơi tổng bằng không', 'Lời của bên này đúng bằng lỗ của bên kia, chưa tính chi phí giao dịch.'],
    physical: ['Physical delivery', 'Giao nhận vật chất', 'Khi đáo hạn, bên short giao tài sản thật và bên long trả giá thỏa thuận.'],
    cash: ['Cash settlement', 'Thanh toán bằng tiền', 'Không giao hàng; bên lỗ trả cho bên lời phần chênh lệch giá.'],
    leverage: ['Leverage', 'Đòn bẩy', 'Dùng ít vốn để nắm giữ rủi ro của một lượng tài sản lớn; khuếch đại cả lời và lỗ.'],
    mrr: ['Market reference rate (MRR)', 'Lãi suất tham chiếu thị trường', 'Lãi suất thả nổi dùng làm chuẩn cho phái sinh lãi suất, ví dụ SOFR.'],
    dealer: ['Dealer / market maker', 'Nhà tạo lập thị trường', 'Định chế (thường là ngân hàng lớn) sẵn sàng làm bên đối ứng và kiếm lời từ chênh lệch giá mua - bán.'],
    ccp: ['Central counterparty (CCP)', 'Đối tác bù trừ trung tâm', 'Tổ chức đứng giữa hai bên, trở thành người mua của mọi người bán và người bán của mọi người mua.'],
    etd: ['Exchange-traded derivatives', 'Phái sinh niêm yết trên sàn', 'Hợp đồng chuẩn hóa, giao dịch trên sở giao dịch, bù trừ qua CCP.'],
    otc: ['Over-the-counter (OTC) derivatives', 'Phái sinh phi tập trung', 'Hợp đồng thỏa thuận trực tiếp giữa hai bên, điều khoản tùy chỉnh.'],
    standard: ['Standardization', 'Chuẩn hóa', 'Sàn quy định sẵn quy mô, ngày đáo hạn, tài sản cơ sở và cách thanh toán của hợp đồng.'],
    cptyrisk: ['Counterparty credit risk', 'Rủi ro đối tác', 'Rủi ro bên kia không thực hiện nghĩa vụ thanh toán khi hợp đồng có lợi cho mình.'],
    margin: ['Margin', 'Ký quỹ', 'Tiền hoặc tài sản đảm bảo nộp vào để bảo đảm thực hiện hợp đồng.'],
    mtm: ['Mark-to-market (daily settlement)', 'Thanh toán lãi lỗ hằng ngày', 'Cuối mỗi ngày, lời lỗ theo giá thanh toán được ghi vào tài khoản ký quỹ.'],
    clearing: ['Central clearing', 'Bù trừ trung tâm', 'Giao dịch được chuyển qua CCP để CCP bảo đảm thanh toán cho cả hai bên.'],
    repo: ['Trade repository', 'Kho lưu trữ dữ liệu giao dịch', 'Nơi lưu giữ thông tin các giao dịch phái sinh OTC để cơ quan quản lý giám sát.'],
    isda: ['ISDA Master Agreement', 'Thỏa thuận khung ISDA', 'Hợp đồng khung chuẩn cho giao dịch phái sinh OTC song phương.'],
    novation: ['Novation', 'Thay thế nghĩa vụ', 'Hợp đồng giữa hai bên được thay bằng hai hợp đồng với CCP ở giữa.'],
  };

  const practice = [
    { q: 'Đặc điểm nào sau đây mô tả ĐÚNG nhất một công cụ phái sinh?', choices: ['Giá trị của nó phụ thuộc vào giá hoặc giá trị của một tài sản cơ sở', 'Người mua luôn phải trả toàn bộ giá trị tài sản cơ sở ngay khi ký hợp đồng', 'Nó chỉ được dùng cho mục đích đầu cơ'], answer: 0, explain: 'Định nghĩa phái sinh: giá trị được "phái sinh" từ tài sản cơ sở. Phương án "trả toàn bộ giá trị ngay khi ký" sai: phái sinh thường cần rất ít hoặc không cần vốn ban đầu (đòn bẩy). Phương án "chỉ dùng để đầu cơ" sai: phái sinh được dùng nhiều để phòng hộ.' },
    { q: 'Đặc điểm nào gắn với phái sinh OTC hơn là phái sinh niêm yết trên sàn?', choices: ['Giao dịch tập trung, giá được công bố công khai', 'Điều khoản có thể tùy chỉnh theo nhu cầu của hai bên', 'Mọi giao dịch đều được thanh toán lãi lỗ hằng ngày qua CCP'], answer: 1, explain: 'OTC được "may đo". Giao dịch tập trung, giá công khai và thanh toán lãi lỗ hằng ngày qua CCP đều là đặc điểm của sàn: tập trung, minh bạch, CCP và mark-to-market hằng ngày.' },
    { q: 'So với phái sinh niêm yết, phái sinh OTC NHIỀU KHẢ NĂNG:', choices: ['Thanh khoản cao hơn', 'Rủi ro đối tác thấp hơn', 'Kém minh bạch hơn'], answer: 2, explain: 'OTC là giao dịch riêng tư nên kém minh bạch. Phương án "thanh khoản cao hơn" sai: chuẩn hóa giúp sàn thanh khoản hơn. Phương án "rủi ro đối tác thấp hơn" sai: CCP và ký quỹ làm rủi ro đối tác trên sàn thấp hơn.' },
    { q: 'Nhà đầu tư mua hợp đồng tương lai có giá trị danh nghĩa 200.000 USD và ký quỹ 8% giá trị danh nghĩa. Nếu giá tài sản cơ sở tăng 3%, lợi suất trên số tiền ký quỹ gần nhất với:', choices: ['3,0%', '37,5%', '24,0%'], answer: 1, explain: 'Ký quỹ = 8% x 200.000 = 16.000. Lời = 3% x 200.000 = 6.000. Lợi suất = 6.000 / 16.000 = 37,5%. Lựa chọn 3,0% là lợi suất nếu mua tài sản bằng toàn bộ tiền (bỏ qua đòn bẩy); lựa chọn 24,0% là lấy 3% x 8, nhầm cách tính.' },
    { q: 'Vai trò chính của đối tác bù trừ trung tâm (CCP) là:', choices: ['Trở thành người mua của mọi người bán và người bán của mọi người mua, bảo đảm thực hiện hợp đồng', 'Tư vấn cho nhà đầu tư nên mua hay bán hợp đồng nào', 'Thiết kế hợp đồng riêng cho từng khách hàng doanh nghiệp'], answer: 0, explain: 'CCP đứng giữa qua cơ chế novation và gần như loại bỏ rủi ro đối tác. Tư vấn nên mua hay bán không phải chức năng của CCP. Thiết kế hợp đồng riêng cho từng khách hàng là việc của dealer trên thị trường OTC.' },
    { q: 'Thứ nào sau đây KHÔNG thể là tài sản cơ sở của một hợp đồng phái sinh?', choices: ['Một lãi suất tham chiếu như SOFR', 'Lượng mưa đo được tại một thành phố', 'Tất cả đều có thể là tài sản cơ sở'], answer: 2, keepOrder: true, explain: 'Tài sản cơ sở không cần mua bán được, chỉ cần đo được khách quan. Lãi suất (SOFR) và thời tiết (lượng mưa) đều là underlying hợp lệ.' },
    { q: 'Hợp đồng tương lai chỉ số chứng khoán thường được thanh toán bằng tiền chủ yếu vì:', choices: ['Sàn giao dịch cấm giao nhận cổ phiếu', 'Rất khó và tốn kém để giao đúng rổ cổ phiếu của chỉ số', 'Thanh toán bằng tiền loại bỏ được hoàn toàn rủi ro thị trường'], answer: 1, explain: 'Giao đủ mọi cổ phiếu theo đúng tỷ trọng chỉ số là phi thực tế, nên chỉ trả chênh lệch. Phương án "loại bỏ hoàn toàn rủi ro thị trường" sai: cách thanh toán không làm thay đổi rủi ro giá của vị thế.' },
    { q: 'Sau khủng hoảng 2008, thay đổi nào áp dụng cho phần lớn hợp đồng hoán đổi lãi suất OTC chuẩn hóa?', choices: ['Bị cấm giao dịch', 'Chuyển hoàn toàn sang niêm yết trên sở giao dịch chứng khoán', 'Phải bù trừ trung tâm qua CCP và báo cáo cho kho dữ liệu giao dịch'], answer: 2, explain: 'Cải cách như Dodd-Frank, EMIR yêu cầu bù trừ trung tâm và báo cáo. Swap vẫn là OTC, không bị cấm và không bắt buộc niêm yết như cổ phiếu.' },
    { q: 'Một doanh nghiệp cần phòng hộ đúng 3,7 triệu EUR vào một ngày cụ thể không trùng các tháng đáo hạn trên sàn. Lựa chọn phù hợp nhất và điểm đánh đổi chính là:', choices: ['Hợp đồng kỳ hạn OTC; đổi lại phải chịu rủi ro đối tác và khó thoát vị thế sớm', 'Hợp đồng tương lai trên sàn; đổi lại phải chịu rủi ro đối tác cao', 'Hợp đồng tương lai trên sàn; vì sàn cho phép tùy chỉnh số tiền và ngày'], answer: 0, explain: 'Cần "may đo" số tiền và ngày thì chọn OTC; cái giá là rủi ro đối tác, thanh khoản kém. Phương án futures "chịu rủi ro đối tác cao" sai: futures có rủi ro đối tác rất thấp. Phương án futures "cho phép tùy chỉnh" sai: futures chuẩn hóa, không tùy chỉnh được.' },
    { q: 'Phát biểu nào về thị trường phái sinh là ĐÚNG?', choices: ['Thị trường sàn lớn hơn OTC xét theo giá trị danh nghĩa', 'Thị trường OTC lớn hơn sàn xét theo giá trị danh nghĩa, chủ yếu nhờ swap lãi suất', 'Phái sinh OTC luôn không có tài sản đảm bảo'], answer: 1, explain: 'Swap lãi suất OTC chiếm phần lớn giá trị danh nghĩa toàn cầu, nên thị trường sàn không lớn hơn OTC. Phương án "OTC luôn không có tài sản đảm bảo" sai: nhiều hợp đồng OTC có ký quỹ, tài sản đảm bảo, nhất là sau các cải cách.' },
    { q: "Trong một hợp đồng kỳ hạn, bên long được lợi khi:", choices: ["Giá tài sản cơ sở tăng lên trên giá kỳ hạn đã thỏa thuận", "Giá tài sản cơ sở giảm xuống dưới giá kỳ hạn đã thỏa thuận", "Giá tài sản cơ sở không đổi, vì bên long nhận phí từ bên short"], answer: 0, explain: "Bên long cam kết mua ở giá đã chốt nên lời khi giá thị trường lúc đáo hạn cao hơn giá đó. Lựa chọn \"giá giảm\" là vị thế của bên short. Lựa chọn \"nhận phí\" sai vì hợp đồng kỳ hạn không có phí ban đầu giữa hai bên." },
    { q: "Một hợp đồng kỳ hạn trên 1.000 đơn vị hàng hóa có giá kỳ hạn 110. Khi đáo hạn, giá giao ngay là 97. Payoff của bên short là:", choices: ["-13.000", "+97.000", "+13.000"], answer: 2, explain: "Payoff short = (110 - 97) x 1.000 = +13.000. Phái sinh là trò chơi tổng bằng không nên bên long lỗ đúng 13.000; lựa chọn -13.000 là payoff của bên long. Lựa chọn +97.000 lấy giá giao ngay nhân quy mô, nhầm payoff với giá trị tài sản." },
    { q: "Nhà đầu tư long hợp đồng tương lai trên 2.000 cổ phiếu ở giá 25, ký quỹ 12% giá trị danh nghĩa. Giá cổ phiếu giảm còn 23,50. Lợi suất trên vốn ký quỹ gần nhất với:", choices: ["-6,0%", "-50,0%", "-12,5%"], answer: 1, explain: "Ký quỹ = 12% x 2.000 x 25 = 6.000. Lỗ = 1,50 x 2.000 = 3.000. Lợi suất = -3.000/6.000 = -50,0%. Lựa chọn -6,0% là lợi suất của cổ phiếu (1,50/25), bỏ qua đòn bẩy. Lựa chọn -12,5% lấy 1,50/12, nhầm tỷ lệ ký quỹ với giá." },
    { q: "Quá trình CCP thay hợp đồng gốc giữa bên mua và bên bán bằng hai hợp đồng riêng, mỗi hợp đồng có CCP là một bên, gọi là:", choices: ["Bù trừ ròng (netting)", "Thay thế nghĩa vụ (novation)", "Thanh toán theo giá thị trường (mark-to-market)"], answer: 1, explain: "Novation là cơ chế CCP chen vào giữa, trở thành người mua của mọi người bán và người bán của mọi người mua. \"Bù trừ ròng\" là gộp các khoản phải trả và phải nhận để chỉ thanh toán phần chênh lệch. \"Mark-to-market\" là ghi nhận lời lỗ hằng ngày vào tài khoản ký quỹ." },
    { q: "Yếu tố nào ÍT có khả năng là một điều khoản được quy định trong hợp đồng phái sinh?", choices: ["Mục đích sử dụng hợp đồng (phòng hộ hay đầu cơ)", "Cách thanh toán (giao nhận vật chất hay bằng tiền)", "Quy mô hợp đồng (giá trị danh nghĩa)"], answer: 0, explain: "Hợp đồng quy định tài sản cơ sở, quy mô, ngày đáo hạn, giá thỏa thuận, cách thanh toán và các bên. Mục đích sử dụng không nằm trong hợp đồng: cùng một hợp đồng có thể dùng để phòng hộ hoặc đầu cơ. \"Cách thanh toán\" và \"quy mô hợp đồng\" đều là điều khoản cơ bản." },
    { q: "Một hợp đồng kỳ hạn thanh toán bằng tiền trên 500 đơn vị có giá kỳ hạn 72,00. Khi đáo hạn, giá giao ngay là 75,40. Khi thanh toán:", choices: ["Bên long trả cho bên short 1.700", "Bên short giao 500 đơn vị và nhận 36.000", "Bên short trả cho bên long 1.700"], answer: 2, explain: "Thanh toán bằng tiền chỉ trả chênh lệch: (75,40 - 72,00) x 500 = 1.700, bên lỗ (short) trả cho bên lời (long). Lựa chọn \"bên long trả\" đảo chiều lời lỗ. Lựa chọn \"giao 500 đơn vị, nhận 36.000\" là giao nhận vật chất, không phải thanh toán bằng tiền." },
    { q: "Trên thị trường OTC, các dealer (thường là ngân hàng lớn) NHIỀU KHẢ NĂNG:", choices: ["Đứng giữa mọi giao dịch và bảo đảm thực hiện hợp đồng như một CCP", "Chỉ giữ vị thế đầu cơ dài hạn mà không phòng hộ", "Làm bên đối ứng cho khách hàng, kiếm lời từ chênh lệch giá mua - bán và phòng hộ lại rủi ro"], answer: 2, explain: "Dealer sẵn sàng làm bên mua hoặc bán cho khách hàng, thu lời từ chênh lệch giá mua - bán và thường phòng hộ lại rủi ro bằng giao dịch khác. Vai trò \"bảo đảm thực hiện hợp đồng\" là của CCP. Lựa chọn \"chỉ đầu cơ, không phòng hộ\" sai vì dealer kiếm tiền từ chênh lệch, không phải từ đặt cược hướng giá." },
    { q: "Mục đích chính của thỏa thuận khung ISDA (ISDA Master Agreement) là:", choices: ["Quy định mức ký quỹ cho hợp đồng tương lai niêm yết trên sàn", "Quy định chung các điều khoản pháp lý cho hợp đồng OTC song phương, gồm thanh toán, bù trừ ròng và xử lý khi một bên vỡ nợ", "Bắt buộc mọi phái sinh OTC phải chuyển lên niêm yết trên sàn"], answer: 1, explain: "ISDA Master Agreement là khung pháp lý chuẩn cho giao dịch OTC song phương: thanh toán, bù trừ ròng, xử lý vỡ nợ. Ký quỹ hợp đồng tương lai do sàn và CCP quy định, không phải ISDA. Không có quy định buộc mọi phái sinh OTC lên sàn; cải cách sau 2008 chỉ yêu cầu bù trừ trung tâm và báo cáo." },
    { q: "Sau khủng hoảng 2008, yêu cầu báo cáo giao dịch phái sinh OTC cho kho lưu trữ dữ liệu giao dịch (trade repository) chủ yếu nhằm:", choices: ["Tăng tính minh bạch để cơ quan quản lý thấy được rủi ro đang tập trung ở đâu", "Loại bỏ hoàn toàn rủi ro đối tác của các hợp đồng OTC", "Chuẩn hóa điều khoản để mọi hợp đồng OTC giống hợp đồng tương lai"], answer: 0, explain: "Trade repository ghi nhận giao dịch để cơ quan quản lý và thị trường thấy được vị thế và rủi ro, tức là tăng minh bạch. Báo cáo không loại bỏ rủi ro đối tác (bù trừ trung tâm và ký quỹ mới làm giảm rủi ro này). Báo cáo cũng không chuẩn hóa điều khoản hợp đồng." },
    { q: "Theo các cải cách sau 2008, hợp đồng phái sinh OTC KHÔNG được bù trừ trung tâm NHIỀU KHẢ NĂNG:", choices: ["Phải đáp ứng yêu cầu ký quỹ (tài sản đảm bảo) cao hơn", "Bị cấm giao dịch", "Được miễn mọi nghĩa vụ báo cáo"], answer: 0, explain: "Hợp đồng không bù trừ trung tâm vẫn được phép nhưng phải ký quỹ nhiều hơn để bù cho rủi ro đối tác cao hơn. Chúng không bị cấm, và vẫn phải báo cáo cho trade repository." },
    { q: "Nhà đầu tư đang long hợp đồng tương lai niêm yết trên sàn và muốn đóng vị thế trước ngày đáo hạn. Cách thông thường là:", choices: ["Thương lượng với chính người đã bán hợp đồng cho mình để hủy hợp đồng", "Không thể đóng, phải giữ đến ngày đáo hạn", "Mở một vị thế short cùng hợp đồng, cùng số lượng trên sàn để triệt tiêu vị thế"], answer: 2, explain: "Hợp đồng chuẩn hóa và có CCP nên nhà đầu tư chỉ cần giao dịch ngược chiều trên sàn để đóng vị thế, đây là lý do sàn có thanh khoản cao. \"Thương lượng với chính đối tác\" là cách thoát vị thế OTC. Lựa chọn \"không thể đóng\" sai vì futures có thể đóng bất kỳ ngày giao dịch nào." },
    { q: "Đối tượng nào sau đây là người dùng cuối (end user) của phái sinh?", choices: ["Ngân hàng niêm yết giá mua và giá bán swap cho khách hàng", "Doanh nghiệp xuất khẩu cà phê dùng hợp đồng kỳ hạn để chốt giá bán", "Tổ chức bù trừ đứng giữa và bảo đảm các giao dịch trên sàn"], answer: 1, explain: "Người dùng cuối dùng phái sinh để phòng hộ hoặc tạo vị thế cho chính mình, như doanh nghiệp xuất khẩu chốt giá. Ngân hàng niêm yết giá mua/bán là dealer (nhà tạo lập thị trường). Tổ chức đứng giữa bảo đảm giao dịch là CCP." },
    { q: "Trong một hợp đồng kỳ hạn OTC song phương không có tài sản đảm bảo, bên chịu rủi ro đối tác tại một thời điểm là:", choices: ["Luôn luôn là bên long", "Bên mà hợp đồng đang có giá trị dương", "Không bên nào, vì không có tiền trao đổi khi ký hợp đồng"], answer: 1, explain: "Rủi ro đối tác là rủi ro bên kia không trả khi hợp đồng có lợi cho mình, nên bên đang có giá trị dương (đang lời) chịu rủi ro. Lựa chọn \"luôn là bên long\" sai vì giá trị có thể dương cho bất kỳ bên nào tùy biến động giá. Không trả tiền lúc ký không loại bỏ rủi ro, vì giá trị phát sinh sau đó." },
    { q: "Nhược điểm chính của phái sinh niêm yết trên sàn đối với một doanh nghiệp muốn phòng hộ là:", choices: ["Điều khoản chuẩn hóa có thể không khớp đúng số tiền và ngày của rủi ro cần phòng hộ", "Rủi ro đối tác cao", "Giá không được công bố công khai"], answer: 0, explain: "Chuẩn hóa mang lại thanh khoản và minh bạch, nhưng quy mô và ngày đáo hạn cố định có thể không khớp nhu cầu, để lại rủi ro chênh lệch. Rủi ro đối tác trên sàn rất thấp nhờ CCP và ký quỹ. Giá trên sàn được công bố công khai; thiếu minh bạch là đặc điểm của OTC." },
    { q: "Nhà đầu tư long 10 hợp đồng tương lai, mỗi hợp đồng 100 đơn vị, giá 48,00. Cuối ngày, giá thanh toán là 47,20. Kết quả thanh toán hằng ngày trên tài khoản ký quỹ là:", choices: ["Được ghi có (cộng) 800", "Bị ghi nợ (trừ) 80", "Bị ghi nợ (trừ) 800"], answer: 2, explain: "Lỗ = (47,20 - 48,00) x 100 x 10 = -800, bị trừ ngay vào tài khoản cuối ngày. Lựa chọn \"được ghi có\" đảo chiều: bên long lỗ khi giá giảm. Lựa chọn 80 quên nhân với 10 hợp đồng." },
    { q: "Một hợp đồng có khoản thanh toán phụ thuộc vào việc một công ty cụ thể có vỡ nợ hay không NHIỀU KHẢ NĂNG là:", choices: ["Phái sinh cổ phiếu (equity derivative)", "Phái sinh tiền tệ (currency derivative)", "Phái sinh tín dụng (credit derivative)"], answer: 2, explain: "Tài sản cơ sở ở đây là rủi ro vỡ nợ của một bên tham chiếu, nên đây là phái sinh tín dụng (ví dụ CDS). Phái sinh cổ phiếu phụ thuộc vào giá cổ phiếu hoặc chỉ số. Phái sinh tiền tệ phụ thuộc vào tỷ giá." },
    { q: "Phát biểu nào về tài sản cơ sở của phái sinh là CHÍNH XÁC nhất?", choices: ["Tài sản cơ sở phải là tài sản có thể giao nhận vật chất", "Một phái sinh có thể là tài sản cơ sở của phái sinh khác, ví dụ quyền chọn trên hợp đồng tương lai", "Lãi suất không thể là tài sản cơ sở vì không phải là tài sản được mua bán"], answer: 1, explain: "Quyền chọn trên hợp đồng tương lai là ví dụ phái sinh có tài sản cơ sở là một phái sinh. Tài sản cơ sở không cần giao nhận được (chỉ số, thời tiết); và lãi suất tham chiếu như SOFR là tài sản cơ sở hợp lệ dù không mua bán được, chỉ cần đo lường khách quan." },
    { q: "Phát biểu nào về giá trị danh nghĩa (notional amount) của phái sinh OTC là CHÍNH XÁC nhất?", choices: ["Giá trị danh nghĩa thường lớn hơn nhiều so với số tiền thực sự chịu rủi ro, vì hợp đồng thường chỉ trao đổi phần chênh lệch ròng", "Giá trị danh nghĩa bằng giá trị thị trường của hợp đồng", "Giá trị danh nghĩa được bên long thanh toán cho bên short khi ký hợp đồng"], answer: 0, explain: "Ví dụ swap lãi suất không trao đổi gốc, chỉ trả phần chênh lệch lãi tính trên notional, nên notional phóng đại số tiền thực sự chịu rủi ro. Giá trị thị trường của hợp đồng thường chỉ là một phần nhỏ của notional (bằng 0 khi ký forward/swap). Notional không được thanh toán khi ký." },
    { q: "Nhà đầu tư X mua 500 cổ phiếu giá 80. Nhà đầu tư Y long hợp đồng tương lai trên 500 cổ phiếu đó ở giá 80 và ký quỹ 15% giá trị danh nghĩa. Giá cổ phiếu tăng lên 86. Lợi suất trên vốn của X và Y lần lượt là:", choices: ["7,5% và 50,0%", "7,5% và 7,5%", "7,5% và 1,12%"], answer: 0, explain: "Cả hai lời 6 x 500 = 3.000. X bỏ vốn 40.000, lợi suất 7,5%. Y chỉ ký quỹ 15% x 40.000 = 6.000, lợi suất 3.000/6.000 = 50,0%. Lựa chọn hai lợi suất bằng nhau bỏ qua đòn bẩy. Lựa chọn 1,12% nhân lợi suất với tỷ lệ ký quỹ thay vì chia." },
    { q: "Hợp đồng tương lai chỉ số VN30 giao dịch trên HNX và được bù trừ qua VSDC. Đặc điểm nào sau đây NHIỀU KHẢ NĂNG đúng với hợp đồng này?", choices: ["Điều khoản do hai bên tự thương lượng, thanh toán một lần khi đáo hạn", "Thanh toán bằng cách giao toàn bộ rổ 30 cổ phiếu khi đáo hạn", "Điều khoản chuẩn hóa, ký quỹ bắt buộc và thanh toán lãi lỗ hằng ngày"], answer: 2, explain: "Đây là phái sinh niêm yết: chuẩn hóa, có CCP, ký quỹ và mark-to-market hằng ngày. \"Tự thương lượng, thanh toán một lần\" là đặc điểm của forward OTC. Hợp đồng tương lai chỉ số thanh toán bằng tiền vì giao cả rổ cổ phiếu tốn kém và khó thực hiện." },
  ];

  window.LESSONS['DE-01'] = {
    moduleId: 'DE-01',
    calculator: 'Không cần máy tính',
    warmup: [
      'Bạn đã từng nghe về hợp đồng tương lai VN30 hoặc hợp đồng kỳ hạn ngoại tệ chưa? Theo bạn, người ta ký chúng để làm gì?',
      'Nhớ lại QM-04: nguyên tắc "không chênh lệch giá" (no arbitrage) nói gì? Viết lại bằng một câu.',
      'Đoán trước: điểm khác nhau lớn nhất giữa mua bán trên sàn và thỏa thuận riêng với ngân hàng là gì?',
    ],
    sections,
    glossary,
    practice,
    widgets: {},
    slides: [],
    wrapup: [
      'Nêu 6 yếu tố mà mọi hợp đồng phái sinh phải quy định.',
      'Liệt kê 4 điểm khác nhau giữa OTC và ETD mà bạn chắc chắn nhất.',
      'Vì sao CCP làm giảm rủi ro đối tác? Viết lại bằng lời của bạn.',
    ],
  };
}());
