// Bài giảng PC-03 - Portfolio Management: An Overview (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t, frac } = window.CFAH;

  const sections = [
    {
      title: '1. Bức tranh lớn',
      minutes: 5,
      html: `
<p>PC-01 và PC-02 là phần "toán" của danh mục. Module này lùi lại một bước để nhìn <b>cả ngành quản lý danh mục</b>: vì sao phải đầu tư theo danh mục, công việc quản lý danh mục diễn ra theo quy trình nào, phục vụ những ai, và sản phẩm nào được bán cho họ.</p>
<div class="key">Đầu tư theo danh mục = đánh giá mỗi tài sản theo <b>đóng góp vào tổng thể</b>. Quản lý danh mục là một <b>quy trình lặp lại</b> ba bước: lập kế hoạch, thực hiện, phản hồi. Mỗi loại nhà đầu tư có mục tiêu và ràng buộc riêng, và ngành quản lý tài sản đáp ứng họ bằng nhiều loại quỹ khác nhau.</div>
<p>Sáu LOS của module:</p>
<ol>
  <li>Cách tiếp cận danh mục (portfolio approach). Phần 2.</li>
  <li>Các bước của quy trình quản lý danh mục. Phần 3.</li>
  <li>Các loại nhà đầu tư và nhu cầu đặc trưng. Phần 4.</li>
  <li>Quỹ hưu trí đóng góp xác định (DC) và lợi ích xác định (DB). Phần 5.</li>
  <li>Ngành quản lý tài sản. Phần 6.</li>
  <li>Quỹ tương hỗ và các sản phẩm đầu tư tập thể khác. Phần 7.</li>
</ol>
<p class="tip">Module này hầu như không có tính toán. Câu hỏi thi chủ yếu là <b>phân biệt khái niệm</b>: bên mua hay bên bán, DB hay DC, quỹ mở hay quỹ đóng, ETF hay quỹ tương hỗ, ngân hàng hay quỹ hiến tặng. Học bằng bảng so sánh là hiệu quả nhất. Phần IPS chi tiết thuộc PC-04.</p>`,
    },
    {
      title: '2. Cách tiếp cận danh mục (portfolio approach)',
      minutes: 14,
      html: `
<p>Trước thập niên 1950, nhà đầu tư chủ yếu tìm "cổ phiếu tốt nhất" rồi mua từng mã. Năm 1952, Harry Markowitz đề xuất cách nghĩ ngược lại: giá trị của một tài sản nằm ở cách nó <b>tương tác với các tài sản khác</b> trong danh mục. Ý tưởng này trở thành ${t('mpt', 'lý thuyết danh mục hiện đại (MPT)')} và mang về cho ông giải Nobel kinh tế năm 1990.</p>
<div class="key"><b>Lợi ích cốt lõi:</b> đa dạng hóa có thể <b>giảm rủi ro mà không nhất thiết giảm lợi suất kỳ vọng</b>. Danh mục chỉ gồm một vài cổ phiếu (hoặc chỉ cổ phiếu của chính công ty mình làm việc) khiến nhà đầu tư chịu rủi ro riêng không được trả công (PC-02 phần 4).</div>
<p>Bài học kinh điển: nhân viên của Enron để phần lớn tiền hưu trí vào cổ phiếu công ty. Khi Enron phá sản năm 2001, họ mất <b>cùng lúc</b> cả việc làm lẫn tiền tiết kiệm. Đây là ví dụ của rủi ro tập trung, không phải rủi ro thị trường.</p>

<h4>Tỷ số đa dạng hóa (diversification ratio)</h4>
<div class="formula">${t('dr', 'Diversification ratio')} = ${frac('Rủi ro (σ) của danh mục', 'Rủi ro (σ) của một chứng khoán đơn lẻ (trung bình)')}</div>
<p>Tỷ số càng <b>thấp</b>, lợi ích đa dạng hóa càng lớn. Tỷ số bằng 1 nghĩa là không có lợi ích gì.</p>
<div class="example"><div class="ex-h">Ví dụ 2.1</div>
<p>(a) Rủi ro trung bình của một cổ phiếu là 25%, danh mục có rủi ro 18%. (b) Danh mục tỷ trọng đều, mỗi cổ phiếu σ = 30%, tương quan giữa các cặp 0,4: so sánh 2 cổ phiếu, 10 cổ phiếu, và 10 cổ phiếu khi khủng hoảng đẩy tương quan lên 0,8.</p>
<details><summary>Xem lời giải</summary>
<p>(a) DR = 18% / 25% = <b>0,72</b>: rủi ro danh mục chỉ bằng 72% rủi ro của một cổ phiếu.</p>
<p>(b) Dùng công thức tỷ trọng đều ở PC-01 phần 7:</p>
<table class="plain"><thead><tr><th>Trường hợp</th><th>σ danh mục</th><th>DR</th></tr></thead><tbody>
<tr><td>2 cổ phiếu, ρ = 0,4</td><td>25,10%</td><td>0,84</td></tr>
<tr><td>10 cổ phiếu, ρ = 0,4</td><td>20,35%</td><td>0,68</td></tr>
<tr><td>10 cổ phiếu, ρ = 0,8 (khủng hoảng)</td><td>27,17%</td><td>0,91</td></tr>
</tbody></table>
<p>Khi tương quan tăng, DR tiến gần 1: lợi ích đa dạng hóa gần như biến mất.</p></details></div>
<p class="warn"><b>Giới hạn của đa dạng hóa:</b> (1) Đa dạng hóa giảm rủi ro <b>bình thường</b> nhưng không bảo vệ khỏi một cú sập toàn thị trường. (2) Trong khủng hoảng, tương quan giữa các tài sản rủi ro thường tăng mạnh, nên danh mục mất giá đồng loạt đúng lúc nhà đầu tư cần bảo vệ nhất. Đa dạng hóa vẫn đáng làm, chỉ là đừng kỳ vọng nó là tấm khiên tuyệt đối.</p>`,
    },
    {
      title: '3. Quy trình quản lý danh mục',
      minutes: 16,
      html: `
<p>Quản lý danh mục không phải chọn cổ phiếu một lần rồi thôi, mà là một ${t('pmp', 'quy trình (portfolio management process)')} gồm 3 bước lặp lại liên tục:</p>
<table class="plain"><thead><tr><th>Bước</th><th>Hoạt động</th><th>Câu hỏi trả lời</th></tr></thead><tbody>
<tr><td><b>1. Lập kế hoạch (planning)</b></td><td>Hiểu nhu cầu khách hàng: mục tiêu, khả năng và mức sẵn sàng chịu rủi ro, ràng buộc.<br>Soạn ${t('ips', 'bản chính sách đầu tư (IPS)')}: văn bản ghi mục tiêu, ràng buộc, chuẩn so sánh (benchmark).</td><td>Khách hàng cần gì?</td></tr>
<tr><td><b>2. Thực hiện (execution)</b></td><td>${t('aa', 'Phân bổ tài sản (asset allocation)')} giữa các lớp tài sản.<br>Phân tích chứng khoán: từ trên xuống (top-down: vĩ mô → ngành → công ty) hoặc từ dưới lên (bottom-up: đi thẳng vào công ty).<br>Xây dựng danh mục: chọn chứng khoán, tỷ trọng, rồi giao dịch.</td><td>Đầu tư vào đâu, bao nhiêu?</td></tr>
<tr><td><b>3. Phản hồi (feedback)</b></td><td>Giám sát và ${t('rebal', 'tái cân bằng (rebalancing)')}: khi giá thay đổi làm lệch tỷ trọng, hoặc khi hoàn cảnh khách hàng thay đổi.<br>Đo lường và báo cáo hiệu quả: so với benchmark, dùng các thước đo ở PC-02 phần 9.</td><td>Đang đi đúng hướng không?</td></tr>
</tbody></table>
<div class="key">IPS là <b>đầu ra</b> của bước lập kế hoạch và là <b>kim chỉ nam</b> cho hai bước sau. Bước phản hồi có thể quay lại bước 1 (cập nhật IPS khi khách hàng thay đổi) hoặc bước 2 (tái cân bằng).</div>
<div class="example"><div class="ex-h">Ví dụ 3.1 - Xếp hoạt động vào đúng bước</div>
<p>Một công ty quản lý quỹ: (a) gặp khách hàng để tìm hiểu kế hoạch nghỉ hưu; (b) quyết định 60% cổ phiếu, 40% trái phiếu; (c) bán bớt cổ phiếu sau khi thị trường tăng mạnh làm tỷ trọng cổ phiếu lên 70%; (d) gửi báo cáo quý so sánh lợi suất với chỉ số chuẩn; (e) phân tích báo cáo tài chính để chọn 30 mã.</p>
<details><summary>Xem lời giải</summary><p>(a) Lập kế hoạch. (b) Thực hiện - phân bổ tài sản. (c) Phản hồi - tái cân bằng. (d) Phản hồi - đo lường và báo cáo. (e) Thực hiện - phân tích chứng khoán và xây dựng danh mục.</p></details></div>
<p class="warn"><b>Bẫy:</b> phân bổ tài sản thuộc bước <b>thực hiện</b>, không phải lập kế hoạch (dù nó dựa trên IPS). Tái cân bằng thuộc bước <b>phản hồi</b>.</p>`,
    },
    {
      title: '4. Các loại nhà đầu tư và nhu cầu đặc trưng',
      minutes: 20,
      html: `
<p>Có hai nhóm lớn: ${t('indiv', 'nhà đầu tư cá nhân')} và ${t('inst', 'nhà đầu tư tổ chức')}.</p>
<h4>Nhà đầu tư cá nhân</h4>
<p>Đầu tư cho các mục tiêu đời sống: nghỉ hưu, học phí của con, mua nhà, để lại thừa kế. Mỗi người một khác: người trẻ có thời gian dài và chịu rủi ro được nhiều hơn; người sắp nghỉ hưu cần thu nhập và ổn định. Thuế và nhu cầu thanh khoản riêng (dự phòng khẩn cấp) rất quan trọng.</p>
<h4>Nhà đầu tư tổ chức</h4>
<ul>
  <li><b>Quỹ hưu trí lợi ích xác định (DB pension):</b> tài sản để chi trả lương hưu đã hứa cho nhân viên (phần 5).</li>
  <li>${t('endow', 'Quỹ hiến tặng và quỹ tài trợ (endowments and foundations)')}: endowment gắn với tổ chức phi lợi nhuận như trường đại học, bệnh viện, tài trợ hoạt động lâu dài của tổ chức. Foundation là quỹ từ thiện, tài trợ nghiên cứu, hoạt động xã hội. Mục tiêu: chi tiêu đều đặn mà vẫn <b>giữ giá trị thực của quỹ mãi mãi</b>.</li>
  <li><b>Ngân hàng:</b> đầu tư phần tiền gửi chưa cho vay. Mục tiêu là <b>kiếm nhiều hơn lãi phải trả cho người gửi</b>, giữ thanh khoản để đáp ứng rút tiền, và tuân thủ quy định vốn. Ưa tài sản rủi ro thấp, thanh khoản cao.</li>
  <li><b>Công ty bảo hiểm:</b> đầu tư phí bảo hiểm để chi trả bồi thường trong tương lai. ${t('pc', 'Bảo hiểm phi nhân thọ (property and casualty)')} có bồi thường đến sớm và khó dự đoán hơn nên kỳ hạn ngắn hơn bảo hiểm nhân thọ. Cả hai đều bảo thủ vì phải giữ khả năng chi trả.</li>
  <li><b>Công ty đầu tư (investment companies):</b> quỹ tương hỗ, ETF... là trung gian gom tiền của nhà đầu tư khác (phần 7). Đặc điểm phụ thuộc chiến lược của từng quỹ.</li>
  <li>${t('swf', 'Quỹ đầu tư quốc gia (sovereign wealth fund)')}: quỹ do chính phủ sở hữu, thường hình thành từ thặng dư ngân sách hoặc doanh thu tài nguyên (dầu mỏ). Ví dụ: quỹ của Na Uy, Abu Dhabi, Singapore.</li>
</ul>
<table class="plain"><thead><tr><th>Nhà đầu tư</th><th>Chịu rủi ro</th><th>Kỳ hạn</th><th>Nhu cầu thanh khoản</th><th>Nhu cầu thu nhập</th></tr></thead><tbody>
<tr><td>Cá nhân</td><td>Tùy người</td><td>Tùy người</td><td>Tùy người</td><td>Tùy người</td></tr>
<tr><td>Quỹ hưu trí DB</td><td>Cao</td><td>Dài</td><td>Thấp</td><td>Tùy độ tuổi người tham gia</td></tr>
<tr><td>Endowment, foundation</td><td>Cao</td><td>Dài</td><td>Thấp</td><td>Đủ cho cam kết chi tiêu</td></tr>
<tr><td>Ngân hàng</td><td>Thấp</td><td>Ngắn</td><td>Cao</td><td>Trả lãi tiền gửi</td></tr>
<tr><td>Bảo hiểm</td><td>Thấp</td><td>Ngắn (phi nhân thọ), dài (nhân thọ)</td><td>Cao</td><td>Thấp</td></tr>
<tr><td>Công ty đầu tư</td><td>Tùy quỹ</td><td>Tùy quỹ</td><td>Cao</td><td>Tùy quỹ</td></tr>
<tr><td>Quỹ đầu tư quốc gia</td><td>Tùy quỹ (thường cao)</td><td>Thường dài</td><td>Tùy quỹ</td><td>Tùy quỹ</td></tr>
</tbody></table>
<p class="tip"><b>Mẹo nhớ:</b> tổ chức nào có <b>nghĩa vụ phải trả sớm, bất ngờ</b> (ngân hàng: người gửi rút tiền; bảo hiểm: bồi thường) thì chịu rủi ro thấp, cần thanh khoản cao. Tổ chức <b>tồn tại mãi mãi</b> và chi tiêu đều đặn (endowment, quỹ hưu trí DB còn trẻ) thì chịu rủi ro cao, kỳ hạn dài.</p>`,
    },
    {
      title: '5. Quỹ hưu trí DC và DB',
      minutes: 14,
      html: `
<table class="plain"><thead><tr><th></th><th>${t('dc', 'Đóng góp xác định (defined contribution - DC)')}</th><th>${t('db', 'Lợi ích xác định (defined benefit - DB)')}</th></tr></thead><tbody>
<tr><td>Cái gì được "xác định"</td><td>Mức <b>đóng góp</b> (ví dụ 10% lương mỗi năm)</td><td>Mức <b>lương hưu</b> sẽ nhận (theo công thức)</td></tr>
<tr><td>Tài khoản</td><td>Riêng cho từng nhân viên</td><td>Một quỹ chung của doanh nghiệp</td></tr>
<tr><td>Ai quyết định đầu tư</td><td>Thường là nhân viên (chọn trong danh sách quỹ)</td><td>Doanh nghiệp (nhà quản lý quỹ)</td></tr>
<tr><td>Ai chịu rủi ro đầu tư</td><td><b>Nhân viên</b>: lương hưu tùy kết quả đầu tư</td><td><b>Doanh nghiệp</b>: phải bù nếu quỹ thiếu</td></tr>
<tr><td>Chuyển việc</td><td>Mang theo được (portable)</td><td>Khó mang theo; thường cần đủ thời gian làm việc</td></tr>
<tr><td>Ví dụ</td><td>401(k) ở Mỹ</td><td>Lương hưu truyền thống của doanh nghiệp lớn, khu vực công</td></tr>
</tbody></table>
<div class="example"><div class="ex-h">Ví dụ 5.1</div>
<p>(a) Kế hoạch DB trả lương hưu hằng năm = 1,5% × số năm làm việc × lương năm cuối. Nhân viên làm 30 năm, lương năm cuối 40.000 USD. (b) Kế hoạch DC: doanh nghiệp đóng 10% lương 50.000 USD vào tài khoản nhân viên. Ai biết chắc điều gì?</p>
<details><summary>Xem lời giải</summary>
<p>(a) Lương hưu = 1,5% × 30 × 40.000 = <b>18.000 USD/năm</b>. Nhân viên biết chắc khoản này; doanh nghiệp không biết chắc phải đóng bao nhiêu vì phụ thuộc lợi suất quỹ, lãi suất chiết khấu, tuổi thọ.</p>
<p>(b) Đóng góp = 10% × 50.000 = <b>5.000 USD/năm</b>. Doanh nghiệp biết chắc chi phí; nhân viên không biết lương hưu cuối cùng vì phụ thuộc kết quả đầu tư.</p></details></div>
<ul>
  <li>Quỹ DB có ${t('funded', 'tình trạng tài trợ (funded status)')}: so sánh tài sản quỹ với giá trị hiện tại của nghĩa vụ lương hưu. Tài sản &lt; nghĩa vụ là <b>thiếu hụt (underfunded)</b>, doanh nghiệp phải đóng thêm.</li>
  <li>Xu hướng nhiều thập kỷ qua: doanh nghiệp chuyển từ DB sang DC để <b>chuyển rủi ro</b> sang nhân viên và cắt gánh nặng trên bảng cân đối.</li>
</ul>
<p class="warn"><b>Bẫy:</b> "DC" nghe như "doanh nghiệp đảm bảo" nhưng ngược lại: chỉ <b>đóng góp</b> được đảm bảo. Người chịu rủi ro là người không biết chắc kết quả cuối cùng: nhân viên trong DC, doanh nghiệp trong DB.</p>`,
    },
    {
      title: '6. Ngành quản lý tài sản',
      minutes: 16,
      html: `
<h4>Bên mua và bên bán</h4>
<table class="plain"><thead><tr><th>${t('buyside', 'Bên mua (buy side)')}</th><th>${t('sellside', 'Bên bán (sell side)')}</th></tr></thead><tbody>
<tr><td>Công ty quản lý tài sản, quỹ hưu trí, quỹ hiến tặng: <b>dùng tiền của khách hàng để mua</b> chứng khoán</td><td>Ngân hàng đầu tư, công ty môi giới, nhà tạo lập thị trường: <b>bán dịch vụ</b> cho bên mua (môi giới, bảo lãnh phát hành, nghiên cứu, giao dịch)</td></tr>
</tbody></table>

<h4>Ba cách phân loại công ty quản lý tài sản</h4>
<ul>
  <li><b>Chủ động và thụ động:</b> quản lý ${t('active', 'chủ động')} cố gắng vượt chỉ số chuẩn bằng chọn chứng khoán và chọn thời điểm; quản lý ${t('passive', 'thụ động')} sao chép chỉ số với phí thấp. Còn có chiến lược "smart beta" (chỉ số theo yếu tố như giá trị, quy mô, biến động thấp) nằm giữa hai cực.</li>
  <li><b>Truyền thống và thay thế:</b> quản lý truyền thống đầu tư cổ phiếu, trái phiếu niêm yết, thu phí theo phần trăm tài sản quản lý (AUM). Quản lý thay thế (quỹ phòng hộ, quỹ đầu tư tư nhân, bất động sản, hàng hóa) thu phí quản lý cộng <b>phí thành quả</b> (ví dụ "2 và 20": 2% AUM và 20% lợi nhuận).</li>
  <li><b>Cơ cấu sở hữu:</b> công ty niêm yết, công ty tư nhân (thường do đối tác sở hữu), hoặc bộ phận của một tập đoàn tài chính (ngân hàng, bảo hiểm). Mô hình ${t('multiboutique', 'multi-boutique')}: một công ty mẹ sở hữu nhiều công ty quản lý chuyên biệt, mỗi công ty giữ thương hiệu và phong cách riêng.</li>
</ul>

<h4>Các xu hướng lớn</h4>
<ol>
  <li><b>Tăng trưởng của đầu tư thụ động:</b> tiền chảy mạnh từ quỹ chủ động sang quỹ chỉ số và ETF vì phí thấp và vì nhiều quỹ chủ động không vượt được chỉ số sau phí. Áp lực giảm phí lên toàn ngành.</li>
  <li><b>Dữ liệu lớn (big data):</b> dữ liệu thay thế (ảnh vệ tinh, giao dịch thẻ, mạng xã hội) và máy học dùng trong phân tích đầu tư.</li>
  <li>${t('robo', 'Robo-advisor')}: dùng thuật toán để tư vấn và xây danh mục tự động (thường bằng ETF), chi phí thấp, phù hợp nhà đầu tư nhỏ.</li>
  <li><b>Hợp nhất (consolidation):</b> phí giảm, chi phí công nghệ và tuân thủ tăng khiến các công ty sáp nhập để có quy mô.</li>
</ol>
<p class="warn"><b>Bẫy:</b> ngân hàng đầu tư bảo lãnh phát hành là <b>bên bán</b>, dù họ cũng "mua" chứng khoán trong quá trình bảo lãnh. Câu hỏi về bên mua luôn xoay quanh việc <b>quản lý tiền thay cho khách hàng</b>.</p>`,
    },
    {
      title: '7. Quỹ tương hỗ và các sản phẩm đầu tư tập thể khác',
      minutes: 20,
      html: `
<p>${t('mf', 'Quỹ tương hỗ (mutual fund)')} gom tiền của nhiều nhà đầu tư thành một danh mục chung do nhà quản lý chuyên nghiệp điều hành theo một phong cách cụ thể. Mỗi chứng chỉ quỹ đại diện cho một phần danh mục; giá trị được đo bằng ${t('nav', 'giá trị tài sản ròng (NAV)')} = (tài sản - nợ) / số chứng chỉ quỹ.</p>
<p><b>Ưu điểm cho nhà đầu tư nhỏ:</b> đa dạng hóa với số vốn ít, quản lý chuyên nghiệp, sổ sách gọn, thanh khoản.</p>

<h4>Quỹ mở và quỹ đóng</h4>
<table class="plain"><thead><tr><th></th><th>${t('openend', 'Quỹ mở (open-end)')}</th><th>${t('closedend', 'Quỹ đóng (closed-end)')}</th></tr></thead><tbody>
<tr><td>Số chứng chỉ quỹ</td><td>Thay đổi: quỹ phát hành mới khi có tiền vào, mua lại khi nhà đầu tư rút</td><td>Cố định sau đợt phát hành ban đầu</td></tr>
<tr><td>Mua bán</td><td>Trực tiếp với quỹ, theo NAV cuối ngày</td><td>Trên sàn với nhà đầu tư khác, theo giá thị trường</td></tr>
<tr><td>Giá so với NAV</td><td>Bằng NAV (cộng hoặc trừ phí nếu có)</td><td>Có thể cao hơn (premium) hoặc thấp hơn (discount) NAV</td></tr>
<tr><td>Quản lý</td><td>Phải giữ tiền mặt để đáp ứng rút vốn</td><td>Không lo rút vốn, có thể đầu tư tài sản kém thanh khoản</td></tr>
</tbody></table>
<p><b>Phí:</b> quỹ ${t('load', 'có phí bán (load fund)')} thu phí khi mua (front-end) hoặc khi rút (back-end); quỹ không phí bán (no-load) không thu khoản này. Mọi quỹ đều có phí quản lý hằng năm.</p>
<p><b>Các loại quỹ tương hỗ chính:</b> quỹ thị trường tiền tệ (money market: công cụ ngắn hạn, rủi ro rất thấp), quỹ trái phiếu, quỹ cổ phiếu (chủ động hoặc chỉ số), quỹ cân bằng/hỗn hợp (hybrid: cả cổ phiếu và trái phiếu).</p>

<h4>Các sản phẩm đầu tư tập thể khác</h4>
<ul>
  <li>${t('etf', 'Quỹ hoán đổi danh mục (ETF)')}: thường theo chỉ số, giao dịch trên sàn <b>suốt phiên</b> như cổ phiếu. Cơ chế tạo lập và mua lại với các thành viên lập quỹ (authorized participants) bằng rổ chứng khoán giữ giá ETF sát NAV. Phí thấp; ở Mỹ thường hiệu quả về thuế hơn quỹ mở. Nhà đầu tư trả phí môi giới và chênh lệch giá mua bán.</li>
  <li>${t('sma', 'Tài khoản quản lý riêng (separately managed account - SMA)')}: nhà đầu tư <b>sở hữu trực tiếp</b> từng chứng khoán trong tài khoản, nhà quản lý điều hành theo yêu cầu riêng (loại trừ ngành, quản lý thuế). Thường đòi hỏi vốn tối thiểu lớn.</li>
  <li>${t('hf', 'Quỹ phòng hộ (hedge fund)')}: thường là hợp danh trách nhiệm hữu hạn, chỉ dành cho nhà đầu tư đủ điều kiện, ít bị quản lý. Dùng đòn bẩy, bán khống, phái sinh; phí quản lý cộng phí thành quả; có thể khóa vốn (lockup).</li>
  <li>${t('pe', 'Quỹ mua lại (buyout) và quỹ đầu tư mạo hiểm (venture capital)')}: thuộc nhóm quỹ đầu tư tư nhân. Buyout mua công ty trưởng thành (thường bằng nhiều nợ), cải thiện hoạt động rồi bán lại; venture capital đầu tư công ty khởi nghiệp. Kỳ hạn dài, kém thanh khoản, nhà quản lý tham gia sâu vào điều hành.</li>
</ul>
<table class="plain"><thead><tr><th>Sản phẩm</th><th>Giao dịch</th><th>Ai có thể mua</th><th>Đặc điểm nổi bật</th></tr></thead><tbody>
<tr><td>Quỹ mở</td><td>Với quỹ, theo NAV cuối ngày</td><td>Đại chúng</td><td>Số chứng chỉ thay đổi</td></tr>
<tr><td>Quỹ đóng</td><td>Trên sàn</td><td>Đại chúng</td><td>Premium/discount so với NAV</td></tr>
<tr><td>ETF</td><td>Trên sàn, suốt phiên</td><td>Đại chúng</td><td>Phí thấp, giá sát NAV</td></tr>
<tr><td>SMA</td><td>Sở hữu trực tiếp</td><td>Vốn lớn</td><td>Tùy biến, quản lý thuế</td></tr>
<tr><td>Hedge fund</td><td>Rút vốn định kỳ, có lockup</td><td>Nhà đầu tư đủ điều kiện</td><td>Đòn bẩy, phí thành quả</td></tr>
<tr><td>Buyout, VC</td><td>Rất kém thanh khoản</td><td>Tổ chức, cá nhân giàu</td><td>Tham gia điều hành công ty</td></tr>
</tbody></table>`,
    },
    {
      title: '8. Tóm tắt và bẫy thường gặp',
      minutes: 10,
      html: `
<table class="plain"><thead><tr><th>Tình huống</th><th>Nhớ</th></tr></thead><tbody>
<tr><td>Cách tiếp cận danh mục</td><td>Giảm rủi ro không nhất thiết giảm lợi suất; không chống được sập toàn thị trường</td></tr>
<tr><td>Diversification ratio</td><td>σ danh mục / σ một chứng khoán; càng thấp càng tốt; khủng hoảng làm tỷ số tăng</td></tr>
<tr><td>Quy trình</td><td>Lập kế hoạch (IPS) → thực hiện (phân bổ tài sản, chọn chứng khoán) → phản hồi (tái cân bằng, báo cáo)</td></tr>
<tr><td>Ngân hàng, bảo hiểm</td><td>Rủi ro thấp, thanh khoản cao; phi nhân thọ kỳ hạn ngắn hơn nhân thọ</td></tr>
<tr><td>Endowment, DB pension</td><td>Rủi ro cao, kỳ hạn dài, thanh khoản thấp</td></tr>
<tr><td>DC và DB</td><td>DC: nhân viên chịu rủi ro, mang theo được. DB: doanh nghiệp chịu rủi ro</td></tr>
<tr><td>Bên mua, bên bán</td><td>Bên mua quản lý tiền khách hàng; bên bán cung cấp dịch vụ cho bên mua</td></tr>
<tr><td>Quỹ mở, quỹ đóng</td><td>Mở: theo NAV, số chứng chỉ thay đổi. Đóng: giá sàn, có premium/discount</td></tr>
<tr><td>ETF</td><td>Giao dịch suốt phiên, giá sát NAV nhờ cơ chế tạo lập/mua lại</td></tr>
</tbody></table>
<p>Tiếp theo: tab <b>Luyện tập</b> 10 câu (rút ngẫu nhiên từ ngân hàng 30 câu, mỗi lần làm một bộ khác), rồi PC-04 (IPS và xây dựng danh mục).</p>`,
    },
  ];

  const glossary = {
    mpt: ['Modern portfolio theory (MPT)', 'Lý thuyết danh mục hiện đại', 'Lý thuyết của Markowitz: đánh giá tài sản theo đóng góp vào rủi ro - lợi suất của cả danh mục.'],
    dr: ['Diversification ratio', 'Tỷ số đa dạng hóa', 'Rủi ro danh mục chia cho rủi ro của một chứng khoán đơn lẻ; càng thấp thì lợi ích đa dạng hóa càng lớn.'],
    pmp: ['Portfolio management process', 'Quy trình quản lý danh mục', 'Ba bước lặp lại: lập kế hoạch, thực hiện, phản hồi.'],
    ips: ['Investment policy statement (IPS)', 'Bản chính sách đầu tư', 'Văn bản ghi mục tiêu, ràng buộc và hướng dẫn đầu tư của khách hàng; đầu ra của bước lập kế hoạch.'],
    aa: ['Asset allocation', 'Phân bổ tài sản', 'Quyết định tỷ trọng giữa các lớp tài sản; thuộc bước thực hiện.'],
    rebal: ['Rebalancing', 'Tái cân bằng', 'Điều chỉnh danh mục về tỷ trọng mục tiêu khi giá thay đổi hoặc hoàn cảnh khách hàng thay đổi.'],
    indiv: ['Individual investor', 'Nhà đầu tư cá nhân', 'Đầu tư cho mục tiêu cá nhân như nghỉ hưu, học phí, mua nhà; đặc điểm khác nhau theo từng người.'],
    inst: ['Institutional investor', 'Nhà đầu tư tổ chức', 'Quỹ hưu trí, quỹ hiến tặng, ngân hàng, bảo hiểm, công ty đầu tư, quỹ quốc gia.'],
    endow: ['Endowment / foundation', 'Quỹ hiến tặng / quỹ tài trợ', 'Quỹ dài hạn tài trợ cho tổ chức phi lợi nhuận hoặc hoạt động từ thiện; muốn chi tiêu đều mà vẫn giữ giá trị thực.'],
    pc: ['Property and casualty insurer', 'Công ty bảo hiểm phi nhân thọ', 'Bảo hiểm tài sản, tai nạn; bồi thường đến sớm, khó dự đoán nên kỳ hạn đầu tư ngắn.'],
    swf: ['Sovereign wealth fund', 'Quỹ đầu tư quốc gia', 'Quỹ đầu tư thuộc sở hữu nhà nước, thường từ thặng dư ngân sách hoặc doanh thu tài nguyên.'],
    dc: ['Defined contribution plan (DC)', 'Quỹ hưu trí đóng góp xác định', 'Mức đóng góp được xác định; tài khoản riêng; nhân viên chịu rủi ro đầu tư.'],
    db: ['Defined benefit plan (DB)', 'Quỹ hưu trí lợi ích xác định', 'Doanh nghiệp hứa trả lương hưu theo công thức; doanh nghiệp chịu rủi ro đầu tư.'],
    funded: ['Funded status', 'Tình trạng tài trợ', 'Tài sản quỹ DB so với giá trị hiện tại của nghĩa vụ lương hưu.'],
    buyside: ['Buy side', 'Bên mua', 'Tổ chức quản lý tiền và mua chứng khoán thay cho khách hàng: công ty quản lý tài sản, quỹ hưu trí...'],
    sellside: ['Sell side', 'Bên bán', 'Ngân hàng đầu tư, môi giới, nhà tạo lập thị trường: cung cấp dịch vụ cho bên mua.'],
    active: ['Active management', 'Quản lý chủ động', 'Cố gắng vượt chỉ số chuẩn bằng chọn chứng khoán và chọn thời điểm.'],
    passive: ['Passive management', 'Quản lý thụ động', 'Sao chép hiệu quả của một chỉ số chuẩn với chi phí thấp.'],
    multiboutique: ['Multi-boutique firm', 'Công ty đa boutique', 'Công ty mẹ sở hữu nhiều công ty quản lý chuyên biệt hoạt động độc lập.'],
    robo: ['Robo-advisor', 'Cố vấn tự động', 'Dịch vụ dùng thuật toán để tư vấn và xây dựng danh mục tự động với chi phí thấp.'],
    mf: ['Mutual fund', 'Quỹ tương hỗ', 'Quỹ gom tiền nhiều nhà đầu tư thành danh mục chung do nhà quản lý chuyên nghiệp điều hành.'],
    nav: ['Net asset value (NAV)', 'Giá trị tài sản ròng', '(Tài sản - nợ)/số chứng chỉ quỹ.'],
    openend: ['Open-end fund', 'Quỹ mở', 'Phát hành và mua lại chứng chỉ quỹ theo NAV; số chứng chỉ thay đổi.'],
    closedend: ['Closed-end fund', 'Quỹ đóng', 'Số chứng chỉ cố định, giao dịch trên sàn; giá có thể chênh so với NAV.'],
    load: ['Load fund', 'Quỹ có phí bán', 'Quỹ thu phí khi mua (front-end) hoặc khi rút (back-end); ngược lại là no-load.'],
    etf: ['Exchange-traded fund (ETF)', 'Quỹ hoán đổi danh mục', 'Quỹ giao dịch trên sàn suốt phiên; cơ chế tạo lập/mua lại giữ giá sát NAV.'],
    sma: ['Separately managed account (SMA)', 'Tài khoản quản lý riêng', 'Nhà đầu tư sở hữu trực tiếp chứng khoán; nhà quản lý điều hành theo yêu cầu riêng.'],
    hf: ['Hedge fund', 'Quỹ phòng hộ', 'Quỹ tư nhân cho nhà đầu tư đủ điều kiện; dùng đòn bẩy, bán khống; thu phí thành quả.'],
    pe: ['Buyout fund / venture capital', 'Quỹ mua lại / quỹ đầu tư mạo hiểm', 'Quỹ đầu tư tư nhân: mua công ty trưởng thành hoặc đầu tư công ty khởi nghiệp; kém thanh khoản.'],
  };

  const practice = [
    { q: 'Danh mục có độ lệch chuẩn 15%, trong khi độ lệch chuẩn trung bình của một cổ phiếu riêng lẻ là 24%. Tỷ số đa dạng hóa và cách diễn giải đúng nhất là:', choices: ['0,625: danh mục giữ lại khoảng 62,5% rủi ro của một cổ phiếu', '1,60: đa dạng hóa làm rủi ro tăng 60%', '0,375: danh mục giữ lại 37,5% rủi ro của một cổ phiếu'], answer: 0, explain: 'DR = 15%/24% = 0,625. Lựa chọn 1,60 đảo tử và mẫu. Lựa chọn 0,375 là phần rủi ro đã loại bỏ (1 - 0,625), không phải tỷ số đa dạng hóa.' },
    { q: 'Phát biểu nào về cách tiếp cận danh mục là đúng nhất?', choices: ['Đa dạng hóa bảo vệ danh mục khỏi các đợt giảm mạnh của toàn thị trường', 'Đa dạng hóa có thể giảm rủi ro mà không nhất thiết giảm lợi suất kỳ vọng', 'Đa dạng hóa luôn làm tăng lợi suất kỳ vọng của danh mục'], answer: 1, explain: 'Lợi ích cốt lõi là giảm rủi ro không nhất thiết hy sinh lợi suất. Phương án \'bảo vệ khỏi các đợt giảm mạnh của toàn thị trường\' sai vì đa dạng hóa không loại bỏ được rủi ro hệ thống, và tương quan thường tăng trong khủng hoảng. Phương án \'luôn làm tăng lợi suất kỳ vọng\' sai: lợi suất kỳ vọng là trung bình có trọng số, đa dạng hóa không làm nó tăng.' },
    { q: 'Hoạt động nào thuộc bước thực hiện (execution) của quy trình quản lý danh mục?', choices: ['Soạn bản chính sách đầu tư (IPS)', 'Tái cân bằng danh mục sau khi giá biến động', 'Quyết định tỷ trọng giữa cổ phiếu và trái phiếu'], answer: 2, explain: 'Phân bổ tài sản, phân tích chứng khoán và xây dựng danh mục thuộc bước thực hiện. Soạn IPS thuộc bước lập kế hoạch. Tái cân bằng thuộc bước phản hồi.' },
    { q: 'Loại nhà đầu tư nào thường có mức chịu rủi ro thấp, kỳ hạn đầu tư ngắn và nhu cầu thanh khoản cao?', choices: ['Quỹ hiến tặng của trường đại học', 'Ngân hàng', 'Quỹ hưu trí DB với người tham gia trẻ'], answer: 1, explain: 'Ngân hàng phải đáp ứng rút tiền gửi bất cứ lúc nào và chịu quy định vốn, nên ưa tài sản ngắn hạn, thanh khoản, ít rủi ro. Quỹ hiến tặng và quỹ DB với người tham gia trẻ đều có kỳ hạn dài và chịu rủi ro cao.' },
    { q: 'Mục tiêu đầu tư điển hình của một quỹ hiến tặng (endowment) là:', choices: ['Chi tiêu đều đặn cho tổ chức mà vẫn duy trì giá trị thực của quỹ lâu dài', 'Tối đa hóa lợi nhuận giao dịch ngắn hạn', 'Bảo đảm thu nhập hưu trí cho nhân viên của trường'], answer: 0, explain: 'Endowment tồn tại vô thời hạn, cần lợi suất đủ để chi tiêu và bù lạm phát, nên chịu rủi ro cao với kỳ hạn dài. Tối đa hóa lợi nhuận giao dịch ngắn hạn không phù hợp với kỳ hạn dài. Bảo đảm thu nhập hưu trí cho nhân viên là mục tiêu của quỹ hưu trí.' },
    { q: 'So với công ty bảo hiểm nhân thọ, công ty bảo hiểm phi nhân thọ (property and casualty) thường có kỳ hạn đầu tư ngắn hơn vì:', choices: ['Quy định pháp luật cấm họ đầu tư dài hạn', 'Khách hàng yêu cầu rút tiền hằng ngày', 'Các khoản bồi thường đến sớm hơn và khó dự đoán hơn'], answer: 2, explain: 'Bồi thường tài sản, tai nạn có thể phát sinh bất ngờ và sớm, nên danh mục phải ngắn hạn, thanh khoản. Không có quy định cấm đầu tư dài hạn; khách hàng bảo hiểm không rút tiền hằng ngày như người gửi ngân hàng.' },
    { q: 'Trong kế hoạch hưu trí đóng góp xác định (DC):', choices: ['Doanh nghiệp cam kết mức lương hưu theo công thức lương và số năm làm việc', 'Nhân viên chịu rủi ro đầu tư và tài khoản có thể mang theo khi chuyển việc', 'Doanh nghiệp phải đóng thêm khi quỹ bị thiếu hụt'], answer: 1, explain: 'Trong DC, chỉ khoản đóng góp được xác định; lương hưu phụ thuộc kết quả đầu tư nên nhân viên chịu rủi ro, và tài khoản riêng mang theo được. Các phương án \'cam kết mức lương hưu theo công thức\' và \'phải đóng thêm khi quỹ thiếu hụt\' mô tả kế hoạch DB.' },
    { q: 'Kế hoạch DB trả lương hưu hằng năm bằng 1,8% x số năm làm việc x lương năm cuối. Nhân viên làm 25 năm, lương năm cuối 60.000 USD. Lương hưu hằng năm và bên chịu rủi ro đầu tư là:', choices: ['27.000 USD; doanh nghiệp', '27.000 USD; nhân viên', '2.700 USD; doanh nghiệp'], answer: 0, explain: '1,8% x 25 x 60.000 = 27.000 USD. Trong DB, lương hưu đã được hứa nên doanh nghiệp chịu rủi ro nếu tài sản quỹ không đủ. Lựa chọn \'27.000 USD; nhân viên\' nhầm bên chịu rủi ro (đó là đặc điểm của DC). Lựa chọn 2.700 USD sai một bậc thập phân (dùng 0,18%).' },
    { q: 'Điểm khác biệt chính giữa ETF và quỹ mở truyền thống là ETF:', choices: ['Chỉ được mua bán trực tiếp với công ty quản lý quỹ theo NAV cuối ngày', 'Giao dịch trên sàn suốt phiên ở giá thị trường, thường sát với NAV', 'Có số chứng chỉ quỹ cố định và thường giao dịch với mức chiết khấu lớn so với NAV'], answer: 1, explain: 'ETF giao dịch như cổ phiếu trong phiên; cơ chế tạo lập/mua lại của thành viên lập quỹ giữ giá sát NAV. Phương án mua bán với công ty quản lý theo NAV cuối ngày mô tả quỹ mở. Phương án số chứng chỉ cố định, chiết khấu lớn so với NAV mô tả quỹ đóng.' },
    { q: 'Nhận định nào về quỹ đóng (closed-end fund) là đúng nhất?', choices: ['Quỹ phát hành chứng chỉ mới mỗi khi có nhà đầu tư muốn mua', 'Nhà đầu tư bán lại chứng chỉ cho quỹ theo NAV cuối ngày', 'Chứng chỉ quỹ giao dịch trên sàn và có thể có giá cao hơn hoặc thấp hơn NAV'], answer: 2, explain: 'Quỹ đóng có số chứng chỉ cố định sau phát hành, nhà đầu tư mua bán với nhau trên sàn nên giá có thể chênh so với NAV. Phát hành chứng chỉ mới khi có người mua và bán lại cho quỹ theo NAV cuối ngày là đặc điểm của quỹ mở.' },
    { q: "Danh mục tỷ trọng đều gồm 5 cổ phiếu, mỗi cổ phiếu có σ = 35%, tương quan giữa các cặp là 0,3. Tỷ số đa dạng hóa (σ danh mục / σ một cổ phiếu) gần nhất với:", choices: ["0,45", "0,66", "0,55"], answer: 1, explain: "σP² = 0,1225/5 + (4/5) x 0,3 x 0,1225 = 0,0245 + 0,0294 = 0,0539, σP = 23,22%. Tỷ số đa dạng hóa = 23,22%/35% = 0,66. Lựa chọn 0,45 là 1/√5, chỉ đúng khi tương quan bằng 0. Lựa chọn 0,55 là √0,3, giới hạn khi số cổ phiếu rất lớn, chưa đạt với 5 cổ phiếu." },
    { q: "Một nhân viên đặt 80% tiền hưu trí vào cổ phiếu của chính công ty mình. Rủi ro lớn nhất mà cách tiếp cận danh mục chỉ ra trong trường hợp này là:", choices: ["Rủi ro tập trung: nếu công ty gặp khó khăn, nhân viên có thể mất cùng lúc việc làm và phần lớn tiền tiết kiệm", "Rủi ro thị trường: cổ phiếu công ty có beta cao hơn chỉ số chung", "Rủi ro lạm phát: cổ phiếu không bảo vệ được sức mua trong dài hạn"], answer: 0, explain: "Đây là bài học Enron: thu nhập từ việc làm và tiền tiết kiệm cùng phụ thuộc vào một công ty, nên rủi ro riêng (phi hệ thống) bị tập trung mà không được trả công. Phương án \"rủi ro thị trường\" sai vì vấn đề là rủi ro riêng của công ty, không phải beta. Phương án \"rủi ro lạm phát\" không phải điểm chính và cũng không đúng với cổ phiếu trong dài hạn." },
    { q: "Hoạt động nào thuộc bước lập kế hoạch (planning) của quy trình quản lý danh mục?", choices: ["Phân tích báo cáo tài chính để chọn cổ phiếu", "So sánh lợi suất danh mục với chỉ số chuẩn mỗi quý", "Tìm hiểu mục tiêu, khả năng chịu rủi ro và ràng buộc của khách hàng để soạn IPS"], answer: 2, explain: "Bước lập kế hoạch gồm hiểu nhu cầu khách hàng (mục tiêu, rủi ro, ràng buộc) và soạn IPS. Phân tích báo cáo tài chính để chọn cổ phiếu thuộc bước thực hiện (phân tích chứng khoán). So sánh với chỉ số chuẩn thuộc bước phản hồi (đo lường và báo cáo hiệu quả)." },
    { q: "Tỷ trọng cổ phiếu trong danh mục tăng từ 60% lên 68% sau một đợt thị trường tăng mạnh, và nhà quản lý bán bớt cổ phiếu để đưa về 60%. Hoạt động này thuộc bước nào?", choices: ["Lập kế hoạch", "Phản hồi", "Thực hiện"], answer: 1, explain: "Giám sát và tái cân bằng (rebalancing) khi giá thay đổi làm lệch tỷ trọng là hoạt động của bước phản hồi. Lựa chọn \"Thực hiện\" là bẫy hay gặp: bước thực hiện là quyết định phân bổ ban đầu và xây dựng danh mục, còn đưa tỷ trọng về mục tiêu là tái cân bằng. Lựa chọn \"Lập kế hoạch\" sai vì mục tiêu 60% đã có trong IPS, không bị thay đổi." },
    { q: "Một nhà phân tích bắt đầu bằng dự báo tăng trưởng kinh tế và lãi suất, chọn ra các ngành hưởng lợi, rồi mới chọn công ty tốt nhất trong các ngành đó. Cách tiếp cận này là:", choices: ["Phân tích từ trên xuống (top-down)", "Phân tích từ dưới lên (bottom-up)", "Quản lý thụ động (passive)"], answer: 0, explain: "Đi từ vĩ mô đến ngành rồi đến công ty là phân tích từ trên xuống. Phân tích từ dưới lên đi thẳng vào từng công ty, không bắt đầu từ dự báo vĩ mô. Quản lý thụ động sao chép chỉ số, không phân tích để chọn chứng khoán." },
    { q: "Phát biểu nào về quỹ đầu tư quốc gia (sovereign wealth fund) là đúng nhất?", choices: ["Là quỹ của doanh nghiệp nhà nước để chi trả lương hưu đã cam kết cho nhân viên", "Là quỹ tương hỗ do chính phủ bảo lãnh, bán cho nhà đầu tư cá nhân", "Là quỹ do chính phủ sở hữu, thường hình thành từ thặng dư ngân sách hoặc doanh thu tài nguyên, và thường có kỳ hạn dài"], answer: 2, explain: "Quỹ đầu tư quốc gia thuộc sở hữu chính phủ, thường hình thành từ thặng dư ngân sách hoặc doanh thu tài nguyên như dầu mỏ (ví dụ Na Uy, Abu Dhabi), kỳ hạn thường dài. Phương án \"chi trả lương hưu\" mô tả quỹ hưu trí DB. Phương án \"quỹ tương hỗ bán cho cá nhân\" mô tả công ty đầu tư, không phải quỹ quốc gia." },
    { q: "So với quỹ hưu trí DB có người tham gia chủ yếu còn trẻ, quỹ hưu trí DB có phần lớn người tham gia đã nghỉ hưu nhiều khả năng:", choices: ["Có kỳ hạn dài hơn và chịu rủi ro cao hơn", "Có nhu cầu thu nhập và thanh khoản cao hơn, mức chịu rủi ro thấp hơn", "Không có nhu cầu thu nhập vì nghĩa vụ đã được doanh nghiệp bảo đảm"], answer: 1, explain: "Khi phần lớn người tham gia đã nghỉ hưu, quỹ phải chi trả lương hưu ngay và đều đặn: cần thu nhập và thanh khoản cao hơn, kỳ hạn ngắn hơn, nên chịu rủi ro thấp hơn. Phương án \"kỳ hạn dài hơn, rủi ro cao hơn\" mô tả quỹ có người tham gia trẻ. Phương án \"không có nhu cầu thu nhập\" sai: doanh nghiệp bảo đảm lương hưu chính là lý do quỹ phải tạo đủ dòng tiền chi trả." },
    { q: "Mục tiêu đầu tư điển hình của danh mục chứng khoán của một ngân hàng thương mại là:", choices: ["Kiếm lợi suất cao hơn chi phí lãi tiền gửi, giữ thanh khoản cao để đáp ứng rút tiền và tuân thủ quy định vốn", "Tối đa hóa lợi suất dài hạn bằng tỷ trọng lớn cổ phiếu và tài sản thay thế", "Duy trì giá trị thực của quỹ mãi mãi trong khi chi tiêu đều đặn cho tổ chức"], answer: 0, explain: "Ngân hàng đầu tư phần tiền gửi chưa cho vay: cần kiếm nhiều hơn lãi phải trả, giữ thanh khoản để đáp ứng người gửi rút tiền, tuân thủ quy định vốn, nên ưa tài sản rủi ro thấp. Phương án \"tỷ trọng lớn cổ phiếu và tài sản thay thế\" phù hợp nhà đầu tư kỳ hạn dài, chịu rủi ro cao. Phương án \"duy trì giá trị thực mãi mãi\" là mục tiêu của quỹ hiến tặng." },
    { q: "Quỹ hưu trí DB có tài sản 820 triệu USD, giá trị hiện tại của nghĩa vụ lương hưu 950 triệu USD. Nhận định nào đúng nhất?", choices: ["Quỹ thặng dư 130 triệu USD; doanh nghiệp có thể giảm đóng góp", "Quỹ thiếu hụt 130 triệu USD; người tham gia sẽ nhận lương hưu thấp hơn tương ứng", "Quỹ thiếu hụt 130 triệu USD; doanh nghiệp phải đóng thêm vì chịu rủi ro đầu tư"], answer: 2, explain: "Tài sản 820 < nghĩa vụ 950: quỹ thiếu hụt (underfunded) 130 triệu USD, tỷ lệ tài trợ khoảng 86%. Trong DB, doanh nghiệp chịu rủi ro đầu tư nên phải bù. Phương án \"thặng dư\" đảo chiều so sánh. Phương án \"người tham gia nhận thấp hơn\" mô tả cơ chế DC, trong DB lương hưu đã được cam kết theo công thức." },
    { q: "Trong kế hoạch DC, nhân viên đóng 8% lương 60.000 USD; doanh nghiệp đóng thêm bằng 50% khoản đóng góp của nhân viên, nhưng chỉ tính trên phần đóng góp tối đa 6% lương. Tổng đóng góp hằng năm vào tài khoản gần nhất với:", choices: ["7.200 USD", "6.600 USD", "8.400 USD"], answer: 1, explain: "Nhân viên: 8% x 60.000 = 4.800 USD. Doanh nghiệp: 50% x 6% x 60.000 = 1.800 USD. Tổng = 6.600 USD. Lựa chọn 7.200 USD tính phần đối ứng trên toàn bộ 8% (2.400 USD), bỏ qua mức trần 6%. Lựa chọn 8.400 USD cho doanh nghiệp đóng đủ 6% lương (3.600 USD), quên tỷ lệ đối ứng 50%." },
    { q: "Lý do chính khiến nhiều doanh nghiệp chuyển từ kế hoạch hưu trí DB sang DC trong nhiều thập kỷ qua là:", choices: ["Chuyển rủi ro đầu tư và rủi ro tuổi thọ sang nhân viên, giảm gánh nặng trên bảng cân đối", "Kế hoạch DC bảo đảm mức lương hưu cao hơn cho nhân viên", "Kế hoạch DC buộc doanh nghiệp tự quyết định đầu tư nên dễ kiểm soát hơn"], answer: 0, explain: "Trong DC, doanh nghiệp chỉ cam kết mức đóng góp; kết quả đầu tư và rủi ro sống lâu hơn dự kiến do nhân viên chịu, nên doanh nghiệp không còn nghĩa vụ thiếu hụt trên bảng cân đối. Phương án \"bảo đảm lương hưu cao hơn\" sai vì DC không bảo đảm mức lương hưu. Phương án \"doanh nghiệp tự quyết định đầu tư\" sai vì trong DC thường là nhân viên chọn cách đầu tư." },
    { q: "Tổ chức nào sau đây thuộc bên bán (sell side)?", choices: ["Công ty quản lý quỹ tương hỗ", "Quỹ hiến tặng của một trường đại học", "Ngân hàng đầu tư bảo lãnh phát hành và cung cấp báo cáo phân tích cho nhà đầu tư tổ chức"], answer: 2, explain: "Bên bán cung cấp dịch vụ cho bên mua: môi giới, bảo lãnh phát hành, nghiên cứu, giao dịch. Ngân hàng đầu tư là bên bán dù trong bảo lãnh họ cũng mua chứng khoán. Công ty quản lý quỹ và quỹ hiến tặng dùng tiền của khách hàng hoặc của tổ chức để mua chứng khoán, nên thuộc bên mua." },
    { q: "Quỹ phòng hộ có tài sản đầu năm 200 triệu USD, thu phí \"2 và 20\": phí quản lý 2% tài sản đầu năm, phí thành quả 20% lợi nhuận (tính trên lợi nhuận trước phí quản lý). Lợi suất trước phí trong năm là 15%. Tổng phí gần nhất với:", choices: ["10,0 triệu USD", "10,6 triệu USD", "6,0 triệu USD"], answer: 0, explain: "Phí quản lý = 2% x 200 = 4,0 triệu. Lợi nhuận = 15% x 200 = 30 triệu, phí thành quả = 20% x 30 = 6,0 triệu. Tổng = 10,0 triệu USD. Lựa chọn 10,6 triệu tính phí quản lý trên tài sản cuối năm 230 triệu (4,6 triệu) trái với điều khoản. Lựa chọn 6,0 triệu chỉ tính phí thành quả, quên phí quản lý." },
    { q: "Phát biểu nào về xu hướng của ngành quản lý tài sản là đúng nhất?", choices: ["Tiền đang chảy từ quỹ chỉ số sang quỹ chủ động vì quỹ chủ động thường vượt chỉ số sau phí", "Đầu tư thụ động tăng trưởng mạnh, tạo áp lực giảm phí lên toàn ngành và thúc đẩy hợp nhất các công ty", "Robo-advisor chủ yếu phục vụ nhà đầu tư tổ chức lớn với chi phí cao"], answer: 1, explain: "Đầu tư thụ động (quỹ chỉ số, ETF) tăng mạnh vì phí thấp và vì nhiều quỹ chủ động không vượt được chỉ số sau phí; phí giảm cùng chi phí công nghệ, tuân thủ tăng thúc đẩy hợp nhất. Phương án \"từ quỹ chỉ số sang quỹ chủ động\" nói ngược xu hướng. Phương án về robo-advisor sai: robo-advisor có chi phí thấp, phù hợp nhà đầu tư nhỏ." },
    { q: "Chiến lược \"smart beta\" được mô tả đúng nhất là:", choices: ["Quản lý chủ động chọn từng cổ phiếu dựa trên phân tích cơ bản chuyên sâu", "Sao chép đúng chỉ số vốn hóa thị trường với phí thấp nhất", "Đầu tư theo chỉ số dựa trên quy tắc và yếu tố (như giá trị, quy mô, biến động thấp), nằm giữa quản lý chủ động và thụ động"], answer: 2, explain: "Smart beta xây chỉ số theo quy tắc dựa trên yếu tố thay vì tỷ trọng vốn hóa thuần túy, nên nằm giữa hai cực chủ động và thụ động. Phương án \"chọn từng cổ phiếu bằng phân tích cơ bản\" là quản lý chủ động truyền thống. Phương án \"sao chép đúng chỉ số vốn hóa\" là quản lý thụ động thuần túy." },
    { q: "Quỹ đóng có tổng tài sản 520 triệu USD, nợ phải trả 20 triệu USD, 25 triệu chứng chỉ quỹ. Chứng chỉ quỹ đang giao dịch trên sàn ở giá 18,50 USD. NAV mỗi chứng chỉ và mức chênh lệch so với NAV là:", choices: ["20,00 USD; chiết khấu 7,50%", "20,80 USD; chiết khấu 11,06%", "20,00 USD; thặng giá 8,11%"], answer: 0, explain: "NAV = (520 - 20)/25 = 20,00 USD. Giá 18,50 < NAV nên chiết khấu (18,50 - 20)/20 = -7,50%. Lựa chọn \"20,80 USD\" quên trừ nợ phải trả (520/25). Lựa chọn \"thặng giá 8,11%\" vừa sai chiều (giá dưới NAV là chiết khấu) vừa chia cho giá thay vì NAV." },
    { q: "Nhà đầu tư bỏ 10.000 USD vào một quỹ mở có phí bán trước (front-end load) 4%; NAV là 25 USD. Số chứng chỉ quỹ nhận được gần nhất với:", choices: ["400", "384", "416"], answer: 1, explain: "Phí bán trước trừ ngay khi mua: số tiền đầu tư thực = 10.000 x (1 - 4%) = 9.600 USD; số chứng chỉ = 9.600/25 = 384. Lựa chọn 400 bỏ qua phí (10.000/25). Lựa chọn 416 cộng phí thay vì trừ (10.400/25)." },
    { q: "Một nhà đầu tư giàu muốn loại trừ cổ phiếu thuốc lá khỏi danh mục và chủ động bán các mã lỗ để giảm thuế. Sản phẩm phù hợp nhất là:", choices: ["Quỹ tương hỗ cổ phiếu", "Quỹ ETF theo chỉ số toàn thị trường", "Tài khoản quản lý riêng (SMA)"], answer: 2, explain: "Trong SMA, nhà đầu tư sở hữu trực tiếp từng chứng khoán nên nhà quản lý có thể tùy biến (loại trừ ngành) và quản lý thuế theo tình hình riêng của khách hàng; đổi lại thường cần vốn tối thiểu lớn. Quỹ tương hỗ và ETF là danh mục chung cho mọi người góp vốn, không thể loại trừ ngành hay bán lỗ theo yêu cầu riêng của một nhà đầu tư." },
    { q: "Phát biểu nào phân biệt đúng nhất quỹ mua lại (buyout) và quỹ đầu tư mạo hiểm (venture capital)?", choices: ["Quỹ mua lại đầu tư vào công ty khởi nghiệp; quỹ mạo hiểm mua công ty trưởng thành bằng nhiều nợ", "Quỹ mua lại mua công ty trưởng thành, thường dùng nhiều nợ; quỹ mạo hiểm đầu tư vào công ty khởi nghiệp", "Cả hai đều đầu tư vào cổ phiếu niêm yết thanh khoản cao và không tham gia điều hành"], answer: 1, explain: "Buyout mua công ty trưởng thành (thường bằng nhiều nợ), cải thiện hoạt động rồi bán lại; venture capital đầu tư vào công ty giai đoạn đầu. Phương án thứ nhất đảo ngược hai loại quỹ. Phương án \"cổ phiếu niêm yết, không tham gia điều hành\" sai: cả hai đều là quỹ đầu tư tư nhân, kém thanh khoản, nhà quản lý tham gia sâu vào điều hành." },
    { q: "Cơ chế nào giúp giá thị trường của ETF thường sát với NAV?", choices: ["Các thành viên lập quỹ (authorized participants) tạo lập hoặc mua lại chứng chỉ ETF bằng rổ chứng khoán khi giá lệch khỏi NAV", "Công ty quản lý quỹ cố định số chứng chỉ quỹ sau đợt phát hành ban đầu", "Nhà đầu tư cá nhân chỉ được mua bán ETF với quỹ theo NAV cuối ngày"], answer: 0, explain: "Khi giá ETF cao hơn NAV, thành viên lập quỹ giao rổ chứng khoán để tạo chứng chỉ mới rồi bán ra; khi thấp hơn, họ mua ETF trên sàn và đổi lấy rổ chứng khoán. Hoạt động chênh lệch giá này kéo giá về sát NAV. Phương án \"cố định số chứng chỉ\" là đặc điểm của quỹ đóng, chính là lý do quỹ đóng hay có chiết khấu hoặc thặng giá. Phương án \"mua bán với quỹ theo NAV cuối ngày\" mô tả quỹ mở; nhà đầu tư cá nhân giao dịch ETF trên sàn." },
  ];

  window.LESSONS['PC-03'] = {
    moduleId: 'PC-03',
    calculator: 'Không cần máy tính',
    warmup: [
      'Ôn PC-02: vì sao nhà đầu tư nắm một danh mục chỉ gồm 3 cổ phiếu chịu rủi ro "không được trả công"?',
      'Nếu bạn quản lý tiền cho một ngân hàng và cho một quỹ học bổng của trường đại học, bạn sẽ đầu tư hai khoản tiền này khác nhau thế nào?',
      'Bạn đã từng mua chứng chỉ quỹ mở hoặc ETF ở Việt Nam chưa? Giá bạn mua được xác định như thế nào?',
    ],
    sections,
    glossary,
    practice,
    widgets: {},
    slides: [],
    wrapup: [
      'Viết 3 bước của quy trình quản lý danh mục và mỗi bước một hoạt động cụ thể.',
      'Lập bảng 2 cột so sánh DB và DC theo: ai chịu rủi ro, ai quyết định đầu tư, có mang theo được không.',
      'Phân biệt quỹ mở, quỹ đóng và ETF trong 3 câu. Còn điểm nào chưa rõ? Ghi lại để hỏi.',
    ],
  };
}());
