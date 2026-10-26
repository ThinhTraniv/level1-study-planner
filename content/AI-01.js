// Bài giảng AI-01 - Alternative Investment Features, Methods, and Structures (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t } = window.CFAH;

  const sections = [
    {
      title: '1. Bức tranh lớn',
      minutes: 6,
      html: `
<p>Nhà đầu tư truyền thống chỉ có ba "ngăn kéo": cổ phiếu niêm yết, trái phiếu và tiền mặt. ${t('alt', 'Đầu tư thay thế (alternative investments)')} là mọi thứ nằm ngoài ba ngăn kéo đó: công ty chưa niêm yết, khoản cho vay tư nhân, tòa nhà, đường cao tốc, rừng trồng, hàng hóa, quỹ phòng hộ, tài sản số.</p>
<div class="key">Ba câu hỏi của module này:<br>
1. Tài sản thay thế <b>khác gì</b> tài sản truyền thống và gồm <b>những nhóm nào</b>? (LOS 1)<br>
2. Nhà đầu tư <b>tiếp cận</b> chúng bằng cách nào: qua quỹ, đồng đầu tư hay trực tiếp? (LOS 2)<br>
3. Quỹ được <b>tổ chức</b> ra sao và nhà quản lý được <b>trả công</b> thế nào? (LOS 3)</div>
<p>Module này là "khung xương" cho cả topic Alternatives. Các module sau đi sâu vào từng nhóm: AI-02 (đo lường thành quả và tính phí), AI-03 (private capital), AI-04 (bất động sản và hạ tầng), AI-05 (tài nguyên thiên nhiên), AI-06 (hedge funds), AI-07 (tài sản số).</p>
<p class="tip"><b>Trọng số đề thi:</b> Alternatives chiếm khoảng 6-9% Level I. Câu hỏi ở module này chủ yếu là <b>khái niệm</b>: nhận diện đặc điểm, so sánh ba phương thức đầu tư, hiểu đúng các điều khoản phí. Không cần máy tính, nhưng phải phân biệt chính xác các thuật ngữ.</p>`,
    },
    {
      title: '2. Đặc điểm chung của đầu tư thay thế',
      minutes: 12,
      html: `
<p>Không có định nghĩa "chính thức" nào cho tài sản thay thế. Cách dễ nhất là nhận diện qua các <b>đặc điểm chung</b> so với tài sản truyền thống:</p>
<table class="plain"><thead><tr><th>Tiêu chí</th><th>Tài sản truyền thống</th><th>Tài sản thay thế</th></tr></thead><tbody>
<tr><td>Thanh khoản</td><td>Cao, giao dịch hằng ngày</td><td>Thấp, ${t('illiquid', 'kém thanh khoản (illiquid)')}, vốn bị khóa nhiều năm</td></tr>
<tr><td>Quản lý</td><td>Có thể thụ động (quỹ chỉ số)</td><td>Gần như luôn chủ động, cần chuyên môn sâu</td></tr>
<tr><td>Tương quan với cổ phiếu, trái phiếu</td><td>-</td><td>Thường thấp, nên có lợi ích đa dạng hóa</td></tr>
<tr><td>Quy mô vốn tối thiểu, kỳ hạn</td><td>Nhỏ, linh hoạt</td><td>Lớn, kỳ hạn dài</td></tr>
<tr><td>Phí</td><td>Thấp</td><td>Cao: phí quản lý + phí thành quả</td></tr>
<tr><td>Minh bạch, quy định</td><td>Công bố thông tin đầy đủ, quản lý chặt</td><td>${t('asym', 'Bất cân xứng thông tin')} lớn, quy định lỏng hơn</td></tr>
<tr><td>Dữ liệu lịch sử</td><td>Dài, đáng tin</td><td>Ngắn, dựa trên thẩm định giá, khó đánh giá thành quả</td></tr>
<tr><td>Cấu trúc pháp lý, thuế</td><td>Đơn giản</td><td>Phức tạp (quỹ hợp danh, cấu trúc nhiều tầng)</td></tr>
</tbody></table>

<h4>Vì sao nhà đầu tư vẫn muốn nắm giữ?</h4>
<ul>
<li><b>Đa dạng hóa:</b> tương quan thấp với tài sản truyền thống giúp giảm rủi ro danh mục.</li>
<li><b>Nâng cao lợi suất:</b> kỳ vọng nhận ${t('illiqprem', 'phần bù kém thanh khoản (illiquidity premium)')} và lợi nhuận từ kỹ năng của nhà quản lý.</li>
<li><b>Thu nhập ổn định, chống lạm phát:</b> tiền thuê bất động sản, phí hạ tầng, giá hàng hóa thường đi cùng lạm phát.</li>
</ul>
<p class="warn"><b>Cẩn thận với "tương quan thấp":</b> nhiều tài sản thay thế được định giá bằng thẩm định định kỳ (appraisal), nên lợi suất báo cáo bị "làm mượt". Độ biến động và tương quan đo được <b>thấp hơn thực tế</b>. Trong khủng hoảng, tương quan thường tăng mạnh đúng lúc nhà đầu tư cần đa dạng hóa nhất. AI-02 sẽ phân tích kỹ.</p>

<div class="example"><div class="ex-h">Ví dụ 2.1 - Nhận diện đặc điểm</div>
<p>Một quỹ hưu trí đang cân nhắc góp vốn vào một quỹ đầu tư tư nhân có thời hạn 10 năm, yêu cầu cam kết tối thiểu 20 triệu USD, định giá danh mục mỗi quý dựa trên mô hình nội bộ. Hãy chỉ ra ít nhất 4 đặc điểm "thay thế" trong mô tả này.</p>
<details><summary>Xem lời giải</summary>
<p>(1) Kỳ hạn dài, vốn bị khóa 10 năm: kém thanh khoản. (2) Cam kết tối thiểu lớn. (3) Định giá theo quý: dữ liệu thưa, không có giá thị trường hằng ngày. (4) Định giá bằng mô hình nội bộ: khó đánh giá thành quả, có bất cân xứng thông tin giữa nhà quản lý và nhà đầu tư. Có thể thêm: nhà quản lý chủ động, phí thường cao.</p></details></div>`,
    },
    {
      title: '3. Các nhóm tài sản thay thế',
      minutes: 12,
      html: `
<p>Chương trình 2027 chia tài sản thay thế thành các nhóm chính sau:</p>
<table class="plain"><thead><tr><th>Nhóm</th><th>Gồm</th><th>Nguồn lợi suất chính</th><th>Module</th></tr></thead><tbody>
<tr><td>${t('privcap', 'Vốn tư nhân (private capital)')}</td><td>${t('pe', 'Private equity')} (mua lại doanh nghiệp, đầu tư mạo hiểm) và ${t('pd', 'private debt')} (cho vay tư nhân)</td><td>Tăng giá trị doanh nghiệp; lãi vay cao hơn trái phiếu niêm yết</td><td>AI-03</td></tr>
<tr><td>${t('realasset', 'Tài sản thực (real assets)')}</td><td>Bất động sản, hạ tầng, tài nguyên thiên nhiên (đất, rừng, nông nghiệp, hàng hóa)</td><td>Thu nhập (thuê, phí sử dụng, sản lượng) và tăng giá tài sản</td><td>AI-04, AI-05</td></tr>
<tr><td>${t('hf', 'Quỹ phòng hộ (hedge funds)')}</td><td>Quỹ tư nhân dùng chiến lược linh hoạt: bán khống, đòn bẩy, phái sinh</td><td>Kỹ năng nhà quản lý (alpha) và các chiến lược đặc thù</td><td>AI-06</td></tr>
<tr><td>${t('digital', 'Tài sản số (digital assets)')}</td><td>Tiền mã hóa, stablecoin, token</td><td>Biến động giá, ứng dụng công nghệ sổ cái phân tán</td><td>AI-07</td></tr>
</tbody></table>

<h4>Tài sản thay thế hay chiến lược thay thế?</h4>
<p>Có hai cách nhìn khác nhau. Bất động sản, hạ tầng, hàng hóa là <b>tài sản</b> khác biệt về bản chất. Ngược lại, hedge fund thường nắm giữ chính cổ phiếu, trái phiếu niêm yết, nhưng dùng <b>chiến lược</b> khác biệt (bán khống, đòn bẩy, chênh lệch giá). Vì vậy hedge fund được xếp vào alternatives do <b>cách đầu tư</b>, không phải do loại tài sản.</p>

<div class="example"><div class="ex-h">Ví dụ 3.1 - Xếp nhóm</div>
<p>Xếp từng khoản sau vào nhóm phù hợp: (a) góp vốn vào quỹ mua lại một chuỗi nhà thuốc chưa niêm yết; (b) cho một công ty phần mềm vừa và nhỏ vay 5 năm, lãi thả nổi, không qua ngân hàng; (c) mua cổ phần một dự án điện gió; (d) quỹ mua cổ phiếu ngân hàng và bán khống cổ phiếu bất động sản cùng lúc.</p>
<details><summary>Xem lời giải</summary>
<p>(a) Private equity (private capital). (b) Private debt, cụ thể là direct lending (private capital). (c) Hạ tầng (real assets). (d) Hedge fund, chiến lược long/short equity: tài sản là cổ phiếu niêm yết nhưng chiến lược là "thay thế".</p></details></div>
<p class="tip"><b>Mẹo nhớ:</b> "Vốn - Thực - Phòng hộ - Số": private <b>vốn</b>, tài sản <b>thực</b>, quỹ <b>phòng hộ</b>, tài sản <b>số</b>.</p>`,
    },
    {
      title: '4. Ba phương thức đầu tư: qua quỹ, đồng đầu tư, trực tiếp',
      minutes: 16,
      html: `
<p>Cùng một tài sản (ví dụ một công ty tư nhân), nhà đầu tư có ba cách tiếp cận, xếp theo mức độ tự làm tăng dần:</p>
<ol>
<li>${t('fundinv', 'Đầu tư qua quỹ (fund investing)')}: góp tiền vào quỹ chung cùng nhiều nhà đầu tư khác. Nhà quản lý quỹ tự chọn và quản lý tài sản theo chiến lược đã thỏa thuận. Nhà đầu tư thụ động.</li>
<li>${t('coinv', 'Đồng đầu tư (co-investing)')}: vẫn góp vào quỹ, nhưng có <b>thêm quyền</b> đầu tư trực tiếp bên cạnh quỹ vào một số thương vụ cụ thể mà nhà quản lý chọn.</li>
<li>${t('directinv', 'Đầu tư trực tiếp (direct investing)')}: tự mua tài sản, không gộp vốn với ai, không thuê nhà quản lý bên ngoài.</li>
</ol>
<table class="plain"><thead><tr><th></th><th>Qua quỹ</th><th>Đồng đầu tư</th><th>Trực tiếp</th></tr></thead><tbody>
<tr><td>Chi phí, phí</td><td>Cao nhất (phí quản lý + phí thành quả)</td><td>Thấp hơn: phần đồng đầu tư thường giảm hoặc miễn phí</td><td>Không trả phí cho nhà quản lý bên ngoài, nhưng tốn chi phí xây đội ngũ</td></tr>
<tr><td>Quyền kiểm soát</td><td>Ít nhất</td><td>Trung bình</td><td>Nhiều nhất</td></tr>
<tr><td>Chuyên môn cần có</td><td>Ít nhất (nhưng cần thẩm định nhà quản lý)</td><td>Trung bình: phải tự đánh giá từng thương vụ</td><td>Nhiều nhất: tự tìm, định giá, quản lý tài sản</td></tr>
<tr><td>Đa dạng hóa</td><td>Cao (một quỹ nhiều tài sản)</td><td>Thấp hơn ở phần đồng đầu tư</td><td>Thấp, dễ tập trung rủi ro</td></tr>
<tr><td>Quy mô vốn phù hợp</td><td>Nhỏ đến lớn</td><td>Lớn</td><td>Rất lớn (quỹ hưu trí, quỹ đầu tư quốc gia)</td></tr>
</tbody></table>

<h4>Ưu và nhược điểm cần nhớ</h4>
<ul>
<li><b>Qua quỹ:</b> tiếp cận chuyên môn và thương vụ mà nhà đầu tư không tự tìm được; đổi lại phải trả phí cao, ít kiểm soát, và phải thẩm định kỹ nhà quản lý.</li>
<li><b>Đồng đầu tư:</b> giảm phí bình quân, tăng kiểm soát và học hỏi từ nhà quản lý; nhưng có rủi ro ${t('adverse', 'lựa chọn ngược (adverse selection)')}: nhà quản lý có thể mời đồng đầu tư vào thương vụ <b>kém hấp dẫn</b> hoặc quá lớn so với quỹ, giữ thương vụ tốt cho quỹ (nơi họ hưởng phí thành quả).</li>
<li><b>Trực tiếp:</b> kiểm soát tối đa, chi phí thấp nhất khi đủ quy mô, linh hoạt chọn tài sản; nhưng cần đội ngũ lớn, vốn lớn, mất đa dạng hóa và phải tự gánh rủi ro vận hành.</li>
</ul>
<div class="example"><div class="ex-h">Ví dụ 4.1 - Chọn phương thức</div>
<p>Một quỹ đầu tư quốc gia quản lý 300 tỷ USD, có đội ngũ 40 chuyên gia private equity, muốn giảm tổng phí trả cho bên ngoài nhưng vẫn giữ quan hệ với các GP hàng đầu. Một quỹ tài trợ (endowment) của trường đại học nhỏ, quản lý 400 triệu USD, chỉ có 3 nhân viên đầu tư. Mỗi tổ chức nên ưu tiên phương thức nào?</p>
<details><summary>Xem lời giải</summary>
<p>Quỹ quốc gia: kết hợp <b>đồng đầu tư</b> (giữ quan hệ với GP, giảm phí) và <b>trực tiếp</b> (đủ quy mô và chuyên môn). Endowment nhỏ: <b>đầu tư qua quỹ</b> (có thể qua fund of funds), vì không đủ người để tự định giá từng thương vụ và cần đa dạng hóa.</p></details></div>
<p class="warn"><b>Bẫy:</b> "đầu tư trực tiếp không có chi phí" là sai. Không trả phí cho nhà quản lý bên ngoài, nhưng tốn chi phí nội bộ (nhân sự, pháp lý, thẩm định) và đòi hỏi quy mô lớn mới hiệu quả.</p>`,
    },
    {
      title: '5. Thẩm định (due diligence) khi đầu tư qua quỹ',
      minutes: 8,
      html: `
<p>Khi giao tiền cho nhà quản lý trong 10 năm và khó rút ra, ${t('dd', 'thẩm định (due diligence)')} trước khi cam kết là bước quan trọng nhất. Nhà đầu tư thường xem xét các nhóm câu hỏi sau:</p>
<table class="plain"><thead><tr><th>Khía cạnh</th><th>Câu hỏi chính</th></tr></thead><tbody>
<tr><td>Tổ chức</td><td>Công ty quản lý ổn định không? Ai sở hữu? Có kế hoạch kế nhiệm không?</td></tr>
<tr><td>Con người</td><td>Kinh nghiệm, thành tích của đội ngũ chủ chốt; mức độ gắn bó (key person risk)</td></tr>
<tr><td>Quy trình đầu tư</td><td>Lợi thế cạnh tranh là gì? Chiến lược có nhất quán với thành tích quá khứ không?</td></tr>
<tr><td>Vận hành và kiểm soát</td><td>Định giá tài sản thế nào, ai kiểm toán, ai lưu ký, quản trị rủi ro ra sao</td></tr>
<tr><td>Điều khoản quỹ</td><td>Phí, hurdle, khóa vốn, quyền rút vốn, lợi ích của GP có gắn với LP không</td></tr>
</tbody></table>
<p class="tip">Thành tích quá khứ của alternatives khó kiểm chứng: dữ liệu ngắn, tự báo cáo, định giá bằng mô hình. Vì vậy thẩm định <b>vận hành</b> (operational due diligence) quan trọng ngang thẩm định chiến lược đầu tư.</p>
<div class="example"><div class="ex-h">Ví dụ 5.1</div>
<p>Một quỹ có thành tích 5 năm rất tốt, nhưng toàn bộ quyết định do một nhà sáng lập 68 tuổi đưa ra, tài sản do chính công ty tự định giá, không có kiểm toán độc lập. Rủi ro nào nổi bật?</p>
<details><summary>Xem lời giải</summary>
<p>Rủi ro <b>con người chủ chốt</b> (key person risk) và rủi ro <b>vận hành/định giá</b>: không có bên độc lập kiểm tra giá trị tài sản, nên thành tích 5 năm có thể không đáng tin.</p></details></div>`,
    },
    {
      title: '6. Cấu trúc sở hữu',
      minutes: 14,
      html: `
<h4>a) Quỹ hợp danh hữu hạn (limited partnership)</h4>
<p>Cấu trúc phổ biến nhất của private equity, private debt, hedge fund, bất động sản tư nhân:</p>
<ul>
<li>${t('gp', 'General partner (GP)')}: công ty quản lý quỹ. Ra mọi quyết định đầu tư, vận hành quỹ, chịu <b>trách nhiệm vô hạn</b> về nghĩa vụ của quỹ.</li>
<li>${t('lp', 'Limited partners (LPs)')}: nhà đầu tư (quỹ hưu trí, endowment, công ty bảo hiểm, cá nhân giàu có đủ điều kiện). Góp vốn, <b>không tham gia điều hành</b>, chỉ chịu trách nhiệm trong phạm vi vốn góp.</li>
</ul>
<p>Quan hệ giữa hai bên được quy định trong ${t('lpa', 'thỏa thuận hợp danh (limited partnership agreement, LPA)')}: chiến lược, thời hạn, phí, quyền của LP. Một số LP lớn đàm phán thêm ${t('sideletter', 'side letter')}: điều khoản riêng như giảm phí, quyền đồng đầu tư, báo cáo chi tiết hơn, hoặc điều khoản "most favored nation" (được hưởng điều kiện tốt nhất mà bất kỳ LP nào khác nhận).</p>
<p>Quỹ private equity thường là quỹ <b>đóng</b>: LP cam kết một số vốn (${t('commit', 'committed capital')}), GP gọi vốn dần (capital call) khi tìm được thương vụ. Hedge fund thường là quỹ <b>mở</b>: nhận tiền và cho rút theo định kỳ, có điều kiện.</p>

<h4>b) Các cấu trúc khác</h4>
<table class="plain"><thead><tr><th>Cấu trúc</th><th>Đặc điểm</th></tr></thead><tbody>
<tr><td>${t('masterfeeder', 'Master-feeder')}</td><td>Nhiều quỹ "feeder" (ví dụ một quỹ trong nước và một quỹ ở nước ngoài) cùng đổ vốn vào một quỹ "master" để đầu tư chung. Mục đích: hiệu quả thuế và pháp lý cho từng nhóm nhà đầu tư, đồng thời gộp quy mô giao dịch.</td></tr>
<tr><td>${t('fof', 'Quỹ của các quỹ (fund of funds)')}</td><td>Quỹ đầu tư vào nhiều quỹ khác. Đa dạng hóa và thẩm định giúp nhà đầu tư nhỏ, nhưng có <b>hai tầng phí</b>.</td></tr>
<tr><td>${t('sma', 'Tài khoản quản lý riêng (separately managed account, SMA)')}</td><td>Nhà quản lý quản lý tiền của một nhà đầu tư lớn trong tài khoản riêng: minh bạch, kiểm soát, tùy biến cao; nhà đầu tư vẫn sở hữu trực tiếp tài sản.</td></tr>
<tr><td>${t('jv', 'Liên doanh (joint venture)')}</td><td>Hai hay nhiều bên cùng sở hữu và cùng kiểm soát một tài sản hoặc dự án, phổ biến với bất động sản và hạ tầng.</td></tr>
</tbody></table>
<div class="example"><div class="ex-h">Ví dụ 6.1</div>
<p>Một nhà quản lý hedge fund có nhà đầu tư Mỹ chịu thuế và các tổ chức miễn thuế ở nước ngoài. Ông muốn quản lý chung một danh mục duy nhất. Cấu trúc nào phù hợp?</p>
<details><summary>Xem lời giải</summary>
<p><b>Master-feeder:</b> một feeder trong nước cho nhà đầu tư chịu thuế, một feeder ở nước ngoài cho tổ chức miễn thuế; cả hai cùng đầu tư qua quỹ master. Nhà quản lý chỉ vận hành một danh mục.</p></details></div>`,
    },
    {
      title: '7. Cấu trúc phí và các điều khoản bảo vệ LP',
      minutes: 9,
      html: `
<p>Mô hình phí kinh điển là ${t('twotwenty', '"2 and 20"')}: phí quản lý 2% và phí thành quả 20%. Mức thực tế ngày càng thấp hơn, nhưng cấu trúc vẫn vậy.</p>
<table class="plain"><thead><tr><th>Điều khoản</th><th>Ý nghĩa</th></tr></thead><tbody>
<tr><td>${t('mgmtfee', 'Phí quản lý (management fee)')}</td><td>Trả hằng năm bất kể kết quả. Private equity: tính trên <b>vốn cam kết</b> (committed capital), kể cả phần chưa gọi. Hedge fund: tính trên <b>tài sản quản lý</b> (AUM).</td></tr>
<tr><td>${t('perffee', 'Phí thành quả (incentive / performance fee)')}</td><td>Phần lợi nhuận GP được chia. Trong private equity gọi là ${t('carry', 'carried interest')}.</td></tr>
<tr><td>${t('hurdle', 'Hurdle rate')}</td><td>Mức lợi suất tối thiểu LP phải nhận trước khi GP được phí thành quả. <b>Hard hurdle:</b> phí chỉ tính trên phần vượt hurdle. <b>Soft hurdle:</b> vượt hurdle thì phí tính trên toàn bộ lợi nhuận.</td></tr>
<tr><td>${t('catchup', 'Catch-up')}</td><td>Sau khi LP nhận đủ hurdle, GP được nhận phần lớn (đến 100%) lợi nhuận tiếp theo cho đến khi "đuổi kịp" tỷ lệ 20% trên tổng lợi nhuận.</td></tr>
<tr><td>${t('hwm', 'High-water mark')}</td><td>GP chỉ nhận phí thành quả trên phần NAV vượt <b>đỉnh cao nhất</b> trước đó. Lỗ năm trước phải được bù lại trước.</td></tr>
<tr><td>${t('waterfall', 'Waterfall')}</td><td>Thứ tự chia tiền khi thoái vốn. <b>European (whole of fund):</b> LP nhận lại toàn bộ vốn góp và hurdle trước, GP nhận carry sau. <b>American (deal by deal):</b> GP nhận carry theo từng thương vụ, sớm hơn, có lợi cho GP.</td></tr>
<tr><td>${t('clawback', 'Clawback')}</td><td>LP được đòi lại phần carry GP đã nhận nếu cuối cùng tổng kết quả quỹ không đủ để GP được hưởng mức đó.</td></tr>
</tbody></table>
<div class="example"><div class="ex-h">Ví dụ 7.1 - Hard và soft hurdle</div>
<p>Quỹ đạt lợi suất 12% (đã trừ phí quản lý). Phí thành quả 20%, hurdle 8%. GP nhận bao nhiêu (theo % vốn) trong từng trường hợp?</p>
<details><summary>Xem lời giải</summary>
<p><b>Hard hurdle:</b> 20% × (12% - 8%) = <b>0,8%</b>.<br><b>Soft hurdle:</b> 12% &gt; 8% nên tính trên toàn bộ: 20% × 12% = <b>2,4%</b>.<br>Nếu lợi suất chỉ 7% thì cả hai trường hợp GP đều không nhận phí thành quả.</p></details></div>
<p class="tip">Các điều khoản hurdle, high-water mark, waterfall European và clawback đều nhằm <b>gắn lợi ích của GP với LP</b> (alignment of interests). Cách tính chi tiết bằng số và lợi suất sau phí sẽ học ở <b>AI-02</b>.</p>`,
    },
    {
      title: '8. Tóm tắt và bẫy thường gặp',
      minutes: 3,
      html: `
<table class="plain"><thead><tr><th>Tình huống</th><th>Nhớ</th></tr></thead><tbody>
<tr><td>Đặc điểm alternatives</td><td>Kém thanh khoản, chủ động, phí cao, tương quan thấp, khó đánh giá thành quả</td></tr>
<tr><td>Tương quan thấp</td><td>Một phần do định giá thẩm định làm mượt; tương quan thật thường cao hơn</td></tr>
<tr><td>Hedge fund</td><td>"Thay thế" do chiến lược, không nhất thiết do loại tài sản</td></tr>
<tr><td>Qua quỹ, đồng đầu tư, trực tiếp</td><td>Đi từ trái sang phải: phí giảm, kiểm soát tăng, chuyên môn và vốn cần nhiều hơn</td></tr>
<tr><td>Rủi ro của đồng đầu tư</td><td>Adverse selection: GP mời vào thương vụ kém hơn</td></tr>
<tr><td>GP và LP</td><td>GP điều hành, trách nhiệm vô hạn; LP thụ động, trách nhiệm hữu hạn</td></tr>
<tr><td>Phí quản lý private equity</td><td>Tính trên vốn cam kết, không phải vốn đã gọi</td></tr>
<tr><td>Hard và soft hurdle</td><td>Hard: phí trên phần vượt. Soft: phí trên toàn bộ khi đã vượt</td></tr>
<tr><td>American và European waterfall</td><td>American (deal by deal) có lợi cho GP; European (whole of fund) có lợi cho LP</td></tr>
</tbody></table>
<p>Tiếp theo: tab <b>Luyện tập</b> - 10 câu khái niệm và tình huống (rút ngẫu nhiên từ ngân hàng 30 câu, mỗi lần làm một bộ khác).</p>`,
    },
  ];

  const glossary = {
    alt: ['Alternative investments', 'Đầu tư thay thế', 'Các khoản đầu tư ngoài cổ phiếu niêm yết, trái phiếu và tiền mặt truyền thống.'],
    illiquid: ['Illiquidity', 'Kém thanh khoản', 'Khó bán nhanh với giá hợp lý; vốn thường bị khóa nhiều năm.'],
    asym: ['Information asymmetry', 'Bất cân xứng thông tin', 'Nhà quản lý biết nhiều hơn nhà đầu tư về tài sản và rủi ro của quỹ.'],
    illiqprem: ['Illiquidity premium', 'Phần bù kém thanh khoản', 'Lợi suất tăng thêm mà nhà đầu tư đòi hỏi để chấp nhận nắm tài sản khó bán.'],
    privcap: ['Private capital', 'Vốn tư nhân', 'Gồm private equity và private debt: vốn chủ và vốn vay cấp cho doanh nghiệp chưa niêm yết.'],
    pe: ['Private equity', 'Vốn cổ phần tư nhân', 'Đầu tư vốn chủ vào doanh nghiệp chưa niêm yết: buyout, venture capital, growth equity.'],
    pd: ['Private debt', 'Nợ tư nhân', 'Khoản cho vay không qua thị trường trái phiếu công khai: direct lending, mezzanine, distressed...'],
    realasset: ['Real assets', 'Tài sản thực', 'Tài sản hữu hình: bất động sản, hạ tầng, tài nguyên thiên nhiên.'],
    hf: ['Hedge funds', 'Quỹ phòng hộ', 'Quỹ tư nhân dùng chiến lược linh hoạt (bán khống, đòn bẩy, phái sinh), quy định lỏng.'],
    digital: ['Digital assets', 'Tài sản số', 'Tài sản được tạo, lưu trữ và chuyển giao bằng điện tử, thường dựa trên sổ cái phân tán.'],
    fundinv: ['Fund investing', 'Đầu tư qua quỹ', 'Góp vốn vào quỹ chung; nhà quản lý chọn và quản lý tài sản.'],
    coinv: ['Co-investing', 'Đồng đầu tư', 'Vừa góp vào quỹ vừa có quyền đầu tư trực tiếp bên cạnh quỹ vào một số thương vụ.'],
    directinv: ['Direct investing', 'Đầu tư trực tiếp', 'Nhà đầu tư tự mua và quản lý tài sản, không qua nhà quản lý bên ngoài.'],
    adverse: ['Adverse selection', 'Lựa chọn ngược', 'Rủi ro nhà quản lý chỉ mời đồng đầu tư vào các thương vụ kém hấp dẫn hơn.'],
    dd: ['Due diligence', 'Thẩm định', 'Quá trình kiểm tra kỹ nhà quản lý, chiến lược, vận hành và điều khoản trước khi đầu tư.'],
    gp: ['General partner (GP)', 'Thành viên hợp danh', 'Nhà quản lý quỹ; ra quyết định đầu tư, chịu trách nhiệm vô hạn.'],
    lp: ['Limited partner (LP)', 'Thành viên góp vốn', 'Nhà đầu tư thụ động, trách nhiệm giới hạn trong vốn góp.'],
    lpa: ['Limited partnership agreement (LPA)', 'Thỏa thuận hợp danh', 'Văn bản quy định quyền, nghĩa vụ, phí và điều khoản giữa GP và LP.'],
    sideletter: ['Side letter', 'Thỏa thuận phụ', 'Điều khoản riêng giữa GP và một LP (giảm phí, đồng đầu tư, most favored nation...).'],
    commit: ['Committed capital', 'Vốn cam kết', 'Số vốn LP hứa góp; GP gọi dần khi cần đầu tư.'],
    masterfeeder: ['Master-feeder structure', 'Cấu trúc master-feeder', 'Nhiều quỹ feeder (trong và ngoài nước) cùng đầu tư qua một quỹ master để tối ưu thuế và quy mô.'],
    fof: ['Fund of funds', 'Quỹ của các quỹ', 'Quỹ đầu tư vào nhiều quỹ khác; đa dạng hóa nhưng có hai tầng phí.'],
    sma: ['Separately managed account (SMA)', 'Tài khoản quản lý riêng', 'Danh mục riêng cho một nhà đầu tư, minh bạch và tùy biến cao.'],
    jv: ['Joint venture', 'Liên doanh', 'Hai hay nhiều bên cùng sở hữu, cùng kiểm soát một tài sản hoặc dự án.'],
    twotwenty: ['"2 and 20"', 'Mô hình phí 2 và 20', 'Phí quản lý 2% mỗi năm và phí thành quả 20% lợi nhuận.'],
    mgmtfee: ['Management fee', 'Phí quản lý', 'Phí cố định hằng năm, tính trên vốn cam kết (PE) hoặc AUM (hedge fund).'],
    perffee: ['Incentive / performance fee', 'Phí thành quả', 'Phần lợi nhuận trả cho nhà quản lý khi đạt kết quả tốt.'],
    carry: ['Carried interest', 'Lợi nhuận chia cho GP', 'Tên gọi phí thành quả trong private equity, thường 20% lợi nhuận.'],
    hurdle: ['Hurdle rate', 'Ngưỡng lợi suất tối thiểu', 'Lợi suất LP phải nhận trước khi GP được phí thành quả; hard hoặc soft.'],
    catchup: ['Catch-up clause', 'Điều khoản bắt kịp', 'Sau hurdle, GP nhận phần lớn lợi nhuận tiếp theo đến khi đạt đủ tỷ lệ carry trên tổng lợi nhuận.'],
    hwm: ['High-water mark', 'Mốc giá trị cao nhất', 'Đỉnh NAV trước đó; phí thành quả chỉ tính trên phần vượt đỉnh này.'],
    waterfall: ['Distribution waterfall', 'Thứ tự phân phối', 'Quy tắc chia tiền thoái vốn giữa LP và GP; European (cả quỹ) hoặc American (từng thương vụ).'],
    clawback: ['Clawback provision', 'Điều khoản thu hồi', 'LP được đòi lại carry GP đã nhận vượt mức xứng đáng khi tính trên toàn quỹ.'],
  };

  const practice = [
    { q: 'Đặc điểm nào sau đây ÍT điển hình nhất đối với đầu tư thay thế?', choices: ['Thanh khoản cao và có giá thị trường hằng ngày', 'Phí cao hơn so với đầu tư truyền thống', 'Tương quan tương đối thấp với cổ phiếu và trái phiếu'], answer: 0, explain: 'Alternatives thường kém thanh khoản và định giá thưa (theo quý, bằng thẩm định). Phí cao và tương quan thấp đều là đặc điểm điển hình.' },
    { q: 'So với đầu tư qua quỹ, lợi ích chính của đồng đầu tư (co-investing) đối với LP là:', choices: ['Đa dạng hóa tốt hơn', 'Phí bình quân thấp hơn và kiểm soát nhiều hơn', 'Cần ít chuyên môn hơn'], answer: 1, explain: 'Phần đồng đầu tư thường giảm hoặc miễn phí và LP chọn được thương vụ. Lựa chọn \'đa dạng hóa tốt hơn\' sai vì phần đồng đầu tư tập trung vào vài thương vụ. Lựa chọn \'cần ít chuyên môn hơn\' sai vì LP phải tự đánh giá thương vụ nên cần nhiều chuyên môn hơn.' },
    { q: 'Rủi ro đặc trưng nhất của đồng đầu tư là:', choices: ['Rủi ro trách nhiệm vô hạn', 'Phải trả hai tầng phí', 'Lựa chọn ngược (adverse selection)'], answer: 2, explain: 'GP có thể giữ thương vụ tốt cho quỹ và mời LP đồng đầu tư vào thương vụ kém hơn. Hai tầng phí là đặc điểm của fund of funds; trách nhiệm vô hạn thuộc về GP.' },
    { q: 'Một quỹ hưu trí rất lớn có đội ngũ chuyên gia nội bộ và muốn kiểm soát tối đa tài sản. Phương thức phù hợp nhất là:', choices: ['Đầu tư trực tiếp', 'Đầu tư qua quỹ', 'Fund of funds'], answer: 0, explain: 'Đầu tư trực tiếp cho kiểm soát cao nhất và phù hợp tổ chức có vốn và chuyên môn lớn. Qua quỹ và fund of funds cho ít kiểm soát nhất.' },
    { q: 'Trong một quỹ hợp danh hữu hạn, phát biểu nào đúng?', choices: ['LP ra quyết định đầu tư và chịu trách nhiệm vô hạn', 'GP điều hành quỹ; LP chỉ chịu trách nhiệm trong phạm vi vốn góp', 'GP và LP cùng chịu trách nhiệm hữu hạn và cùng điều hành'], answer: 1, explain: 'GP là nhà quản lý, ra quyết định, chịu trách nhiệm vô hạn. LP thụ động, trách nhiệm hữu hạn. Phương án nói LP ra quyết định và chịu trách nhiệm vô hạn đảo ngược vai trò.' },
    { q: 'Một LP lớn đàm phán được mức phí quản lý thấp hơn và quyền đồng đầu tư, ghi trong một văn bản riêng ngoài LPA. Văn bản này gọi là:', choices: ['Capital call', 'Clawback provision', 'Side letter'], answer: 2, explain: 'Side letter là thỏa thuận riêng giữa GP và một LP. Capital call là yêu cầu góp vốn; clawback là quyền đòi lại carry.' },
    { q: 'Mục đích chính của cấu trúc master-feeder là:', choices: ['Cho phép các nhóm nhà đầu tư khác nhau về thuế, pháp lý cùng đầu tư vào một danh mục chung', 'Tạo hai tầng phí để tăng thu nhập cho GP', 'Cho LP quyền kiểm soát trực tiếp từng tài sản'], answer: 0, explain: 'Feeder trong nước và nước ngoài gom vốn vào quỹ master: hiệu quả thuế và quy mô. Hai tầng phí là đặc điểm (nhược điểm) của fund of funds; quyền kiểm soát trực tiếp là của SMA hoặc đầu tư trực tiếp.' },
    { q: 'LP cam kết 500 triệu USD vào một quỹ private equity, phí quản lý 2%/năm tính trên vốn cam kết. Năm đầu GP mới gọi 200 triệu. Phí quản lý năm đầu là:', choices: ['4 triệu USD', '10 triệu USD', '40 triệu USD'], answer: 1, explain: 'Phí PE tính trên vốn cam kết: 2% × 500 = 10 triệu, kể cả phần chưa gọi. Lựa chọn 4 triệu USD là tính trên vốn đã gọi (2% × 200). Lựa chọn 40 triệu USD nhầm thành 20% × 200.' },
    { q: 'NAV sau phí của một hedge fund: đầu năm 1 là 100, cuối năm 1 là 120, cuối năm 2 là 105. Cuối năm 3 NAV trước phí thành quả là 115. Có high-water mark, phí thành quả 20%. Phí thành quả năm 3 (trên mỗi 100 vốn ban đầu) là:', choices: ['2', '3', '0'], answer: 2, explain: 'High-water mark là 120. NAV 115 vẫn dưới 120 nên không có phí thành quả. Lựa chọn 2 là 20% × (115 - 105), quên high-water mark. Lựa chọn 3 là 20% × (115 - 100).' },
    { q: 'Quỹ đạt lợi suất 12% sau phí quản lý. Phí thành quả 20%, hard hurdle 8%. Phí thành quả tính theo % vốn là:', choices: ['0,8%', '2,4%', '4,0%'], answer: 0, explain: 'Hard hurdle: 20% × (12% - 8%) = 0,8%. Lựa chọn 2,4% là soft hurdle (20% × 12%). Lựa chọn 4,0% là toàn bộ phần vượt hurdle, quên nhân 20%.' },
    { q: "Hedge fund thường được xếp vào nhóm đầu tư thay thế chủ yếu vì:", choices: ["Nắm giữ chủ yếu tài sản thực như đất, rừng và hạ tầng", "Dùng chiến lược như bán khống, đòn bẩy, phái sinh, dù tài sản thường là chứng khoán niêm yết", "Chỉ đầu tư vào doanh nghiệp chưa niêm yết"], answer: 1, explain: "Hedge fund là \"thay thế\" do cách đầu tư (bán khống, đòn bẩy, phái sinh, chênh lệch giá), còn tài sản nắm giữ thường là cổ phiếu, trái phiếu niêm yết. Lựa chọn \"tài sản thực\" mô tả bất động sản, hạ tầng, tài nguyên. Lựa chọn \"chỉ đầu tư vào doanh nghiệp chưa niêm yết\" mô tả private equity." },
    { q: "Một quỹ cấp khoản vay mezzanine để tài trợ cho thương vụ mua lại một doanh nghiệp chưa niêm yết. Khoản đầu tư này thuộc nhóm:", choices: ["Vốn tư nhân (private capital)", "Tài sản thực (real assets)", "Hedge fund"], answer: 0, explain: "Cho vay mezzanine không qua thị trường niêm yết là private debt, một nhánh của private capital (cùng private equity). Lựa chọn \"tài sản thực\" gồm bất động sản, hạ tầng, tài nguyên thiên nhiên, không phải khoản vay doanh nghiệp. Lựa chọn \"hedge fund\" sai vì đây không phải chiến lược giao dịch linh hoạt trên chứng khoán." },
    { q: "Lợi suất báo cáo của nhiều tài sản thay thế dựa trên thẩm định giá định kỳ (appraisal). Hệ quả có khả năng nhất là:", choices: ["Độ biến động báo cáo cao hơn thực tế", "Tương quan báo cáo với cổ phiếu cao hơn thực tế", "Độ biến động và tương quan báo cáo thấp hơn thực tế"], answer: 2, explain: "Thẩm định định kỳ làm lợi suất bị \"làm mượt\", nên độ biến động và tương quan đo được thấp hơn thực tế, khiến lợi ích đa dạng hóa trông lớn hơn. Hai lựa chọn còn lại nói ngược chiều tác động của việc làm mượt." },
    { q: "Phần lợi suất tăng thêm mà nhà đầu tư kỳ vọng nhận được vì chấp nhận khóa vốn nhiều năm trong một quỹ tư nhân gọi là:", choices: ["Phần bù kém thanh khoản (illiquidity premium)", "Phần bù rủi ro vốn cổ phần (equity risk premium)", "Alpha của nhà quản lý"], answer: 0, explain: "Phần bù kém thanh khoản bù đắp cho việc vốn bị khóa và không bán được dễ dàng. Phần bù rủi ro vốn cổ phần là phần bù của cổ phiếu so với tài sản phi rủi ro, không gắn với việc khóa vốn. Alpha là lợi suất do kỹ năng nhà quản lý, nguồn lợi suất khác với việc chấp nhận kém thanh khoản." },
    { q: "Bất động sản và hạ tầng thường được xem là có khả năng chống lạm phát chủ yếu vì:", choices: ["Chúng được định giá hằng ngày trên sàn giao dịch", "Chúng có tương quan cao với trái phiếu lãi suất cố định", "Tiền thuê và phí sử dụng thường được điều chỉnh theo lạm phát"], answer: 2, explain: "Hợp đồng thuê và biểu phí hạ tầng (phí cầu đường, phí điện nước) thường có điều khoản điều chỉnh theo lạm phát, nên dòng thu nhập tăng cùng giá cả. Lựa chọn \"định giá hằng ngày\" sai vì tài sản tư nhân được định giá thưa. Lựa chọn \"tương quan cao với trái phiếu lãi suất cố định\" sai vì trái phiếu lãi suất cố định bị thiệt khi lạm phát tăng." },
    { q: "Quỹ tài trợ (endowment) của một trường đại học quản lý 300 triệu USD, chỉ có 2 nhân viên đầu tư và cần phân tán rủi ro rộng. Phương thức tiếp cận private equity phù hợp nhất là:", choices: ["Đầu tư trực tiếp", "Đồng đầu tư (co-investing)", "Đầu tư qua quỹ (fund investing)"], answer: 2, explain: "Đầu tư qua quỹ (có thể qua fund of funds) cần ít chuyên môn nội bộ nhất và đa dạng hóa cao. Đầu tư trực tiếp cần đội ngũ lớn và vốn rất lớn để tự tìm, định giá, quản lý tài sản. Đồng đầu tư đòi hỏi tự đánh giá từng thương vụ và làm danh mục tập trung hơn." },
    { q: "Phát biểu nào về đầu tư trực tiếp vào tài sản thay thế là chính xác nhất?", choices: ["Tránh được phí trả cho nhà quản lý bên ngoài nhưng phát sinh chi phí nội bộ và cần quy mô lớn mới hiệu quả", "Mang lại mức đa dạng hóa cao nhất trong ba phương thức", "Cần ít chuyên môn nhất vì nhà đầu tư tự ra quyết định"], answer: 0, explain: "Đầu tư trực tiếp không trả phí quản lý và phí thành quả cho GP, nhưng phải trả chi phí nhân sự, pháp lý, thẩm định nội bộ. Lựa chọn \"đa dạng hóa cao nhất\" sai: đầu tư trực tiếp dễ tập trung rủi ro. Lựa chọn \"cần ít chuyên môn nhất\" sai: đây là phương thức cần nhiều chuyên môn nhất." },
    { q: "Trong đồng đầu tư (co-investing), các thương vụ đồng đầu tư thường đến từ đâu?", choices: ["LP tự tìm thương vụ, GP chỉ góp thêm vốn", "GP tìm thương vụ và mời LP đầu tư thêm trực tiếp bên cạnh quỹ", "Cơ quan quản lý phân bổ thương vụ cho các LP"], answer: 1, explain: "Trong đồng đầu tư, GP tìm và thực hiện thương vụ cho quỹ, rồi mời một số LP góp thêm vốn trực tiếp vào chính thương vụ đó, thường với phí thấp hoặc miễn phí. Lựa chọn \"LP tự tìm thương vụ\" mô tả đầu tư trực tiếp. Lựa chọn \"cơ quan quản lý phân bổ\" không có trong thực tế." },
    { q: "Thẩm định vận hành (operational due diligence) đối với một nhà quản lý quỹ tư nhân tập trung chủ yếu vào:", choices: ["Dự báo lợi suất của chiến lược trong 10 năm tới", "Hệ số tương quan giữa quỹ và chỉ số cổ phiếu", "Quy trình định giá tài sản, kiểm toán độc lập, lưu ký và kiểm soát nội bộ"], answer: 2, explain: "Thẩm định vận hành kiểm tra \"bộ máy\" của quỹ: ai định giá tài sản, có kiểm toán và lưu ký độc lập không, quản trị rủi ro và kiểm soát nội bộ ra sao. Dự báo lợi suất và tương quan thuộc phân tích chiến lược đầu tư, không phải thẩm định vận hành." },
    { q: "Nhược điểm chính của fund of funds đối với nhà đầu tư là:", choices: ["Hai tầng phí: phí của fund of funds cộng phí của các quỹ thành phần", "Đa dạng hóa thấp hơn đầu tư vào một quỹ đơn lẻ", "Nhà đầu tư phải tự thẩm định từng quỹ thành phần"], answer: 0, explain: "Fund of funds thu phí riêng bên cạnh phí của các quỹ thành phần, làm giảm lợi suất ròng. Lựa chọn \"đa dạng hóa thấp hơn\" sai: đa dạng hóa là ưu điểm chính của fund of funds. Lựa chọn \"tự thẩm định từng quỹ\" sai: nhà quản lý fund of funds làm việc này thay nhà đầu tư." },
    { q: "Một quỹ hưu trí lớn muốn thuê nhà quản lý bên ngoài nhưng vẫn trực tiếp sở hữu tài sản, thấy rõ từng vị thế và tùy biến chiến lược theo yêu cầu riêng. Cấu trúc phù hợp nhất là:", choices: ["Master-feeder", "Tài khoản quản lý riêng (separately managed account)", "Fund of funds"], answer: 1, explain: "Tài khoản quản lý riêng (SMA) cho nhà đầu tư lớn sở hữu trực tiếp tài sản, minh bạch vị thế và tùy biến cao. Master-feeder gộp nhiều nhóm nhà đầu tư vào một danh mục chung, nhà đầu tư không sở hữu trực tiếp tài sản. Fund of funds thêm một tầng trung gian và một tầng phí, ít minh bạch hơn." },
    { q: "Một công ty phát triển bất động sản và một quỹ hưu trí cùng sở hữu và cùng kiểm soát một dự án trung tâm thương mại. Cấu trúc này là:", choices: ["Liên doanh (joint venture)", "Side letter", "Quỹ hợp danh hữu hạn với quỹ hưu trí là LP"], answer: 0, explain: "Liên doanh là cấu trúc hai hay nhiều bên cùng sở hữu và cùng kiểm soát một tài sản, phổ biến trong bất động sản và hạ tầng. Side letter là văn bản điều khoản riêng giữa GP và một LP, không phải cấu trúc sở hữu. Trong quỹ hợp danh hữu hạn, LP không tham gia điều hành, trái với việc \"cùng kiểm soát\"." },
    { q: "Một LP cam kết 80 triệu USD vào một quỹ private equity. Đến nay GP đã gọi 30 triệu. Phí quản lý 1,5%/năm tính trên vốn cam kết. Phí quản lý năm nay của LP và số vốn LP còn phải sẵn sàng góp lần lượt là:", choices: ["1,2 triệu USD và 50 triệu USD", "0,45 triệu USD và 50 triệu USD", "1,2 triệu USD và 30 triệu USD"], answer: 0, explain: "Phí tính trên vốn cam kết: 1,5% × 80 = 1,2 triệu USD. Vốn chưa gọi: 80 - 30 = 50 triệu USD. Lựa chọn 0,45 triệu tính phí trên vốn đã gọi (1,5% × 30). Lựa chọn 30 triệu nhầm vốn đã gọi với vốn còn phải góp." },
    { q: "Phát biểu nào đúng về cơ sở tính phí quản lý?", choices: ["Private equity thường tính trên tài sản quản lý (AUM), hedge fund thường tính trên vốn cam kết", "Cả private equity và hedge fund đều chỉ tính phí quản lý trên lợi nhuận", "Private equity thường tính trên vốn cam kết, hedge fund thường tính trên tài sản quản lý (AUM)"], answer: 2, explain: "Quỹ private equity là quỹ đóng: phí quản lý tính trên vốn cam kết, kể cả phần chưa gọi. Hedge fund là quỹ mở: phí tính trên AUM. Lựa chọn đầu đảo ngược hai cơ sở. Lựa chọn \"chỉ tính trên lợi nhuận\" nhầm phí quản lý với phí thành quả." },
    { q: "Quỹ đạt lợi suất 10% sau phí quản lý. Phí thành quả 20% với soft hurdle 7%. Phí thành quả tính theo % vốn là:", choices: ["0,6%", "2,0%", "1,4%"], answer: 1, explain: "Soft hurdle: lợi suất 10% vượt 7% nên phí tính trên toàn bộ lợi suất: 20% × 10% = 2,0%. Lựa chọn 0,6% là cách tính hard hurdle (20% × 3%). Lựa chọn 1,4% nhầm tính phí trên chính mức hurdle (20% × 7%)." },
    { q: "NAV sau phí của một hedge fund: ban đầu 100, cuối năm 1 là 150, cuối năm 2 là 130. Cuối năm 3, NAV trước phí thành quả là 160. Quỹ áp dụng high-water mark, phí thành quả 20%. Phí thành quả năm 3 là:", choices: ["6,0", "2,0", "12,0"], answer: 1, explain: "High-water mark là đỉnh cũ 150, nên phí chỉ tính trên phần vượt đỉnh: 20% × (160 - 150) = 2,0. Lựa chọn 6,0 tính trên toàn bộ mức tăng năm 3 (20% × 30), bỏ qua high-water mark. Lựa chọn 12,0 tính trên mức tăng so với vốn ban đầu (20% × 60), tính phí hai lần cho phần đã trả năm 1." },
    { q: "Điều khoản catch-up trong cấu trúc phí của quỹ tư nhân cho phép:", choices: ["LP đòi lại phần carried interest GP đã nhận nếu kết quả cuối cùng của quỹ không đủ", "GP chỉ nhận phí thành quả trên phần NAV vượt đỉnh cao nhất trước đó", "GP nhận phần lớn lợi nhuận sau khi LP đạt hurdle cho đến khi GP đạt đủ tỷ lệ carry trên tổng lợi nhuận"], answer: 2, explain: "Catch-up giúp GP \"đuổi kịp\" tỷ lệ carry (ví dụ 20%) trên toàn bộ lợi nhuận sau khi LP đã nhận đủ hurdle. Lựa chọn \"LP đòi lại carry\" là clawback. Lựa chọn \"phần NAV vượt đỉnh cao nhất\" là high-water mark." },
    { q: "Quỹ private equity có vốn góp 100, lợi nhuận 20. Lợi suất ưu tiên (hurdle) 8%, catch-up 100% cho GP, carried interest 20%. Tổng carried interest của GP là:", choices: ["2,4", "4,0", "2,0"], answer: 1, explain: "LP nhận 8 trước. GP catch-up 100% cho đến khi đạt 20% lợi nhuận đã chia: 2 (vì 2/(8 + 2) = 20%). Phần còn lại 20 - 8 - 2 = 10 chia 80/20, GP nhận 2. Tổng GP = 2 + 2 = 4,0 = 20% × 20. Lựa chọn 2,4 là hard hurdle không có catch-up (20% × 12). Lựa chọn 2,0 chỉ tính phần catch-up, quên phần chia sau đó." },
    { q: "Loại waterfall nào cho phép GP nhận carried interest sớm hơn và vì vậy có lợi cho GP hơn?", choices: ["European (whole of fund)", "American (deal by deal)", "Waterfall có high-water mark"], answer: 1, explain: "American waterfall tính carry theo từng thương vụ, nên GP nhận carry ngay khi một thương vụ thoái vốn có lãi, trước khi LP nhận lại toàn bộ vốn. European waterfall buộc LP nhận lại toàn bộ vốn góp và hurdle trước, nên có lợi cho LP. High-water mark là điều khoản của hedge fund, không phải một loại waterfall." },
    { q: "Một quỹ dùng waterfall theo từng thương vụ. GP đã nhận carry từ hai thương vụ đầu có lãi, nhưng các thương vụ sau lỗ nặng khiến tổng kết quả quỹ không đủ để GP được hưởng mức carry đó. Điều khoản giúp LP đòi lại phần carry đã trả là:", choices: ["Catch-up", "High-water mark", "Clawback"], answer: 2, explain: "Clawback cho phép LP đòi lại phần carry GP đã nhận vượt mức xứng đáng tính trên toàn quỹ. Catch-up làm điều ngược lại: giúp GP nhận thêm lợi nhuận sau hurdle. High-water mark chỉ ngăn hedge fund thu phí thành quả trên phần bù lỗ, không đòi lại phí đã trả." },
  ];

  window.LESSONS['AI-01'] = {
    moduleId: 'AI-01',
    calculator: 'Không cần máy tính',
    warmup: [
      'Ôn: lợi ích đa dạng hóa phụ thuộc vào yếu tố nào giữa các tài sản? (gợi ý: hệ số tương quan)',
      'Kể tên 3 khoản đầu tư mà bạn biết nhưng không phải cổ phiếu niêm yết, trái phiếu hay tiền gửi.',
      'Nếu bạn giao tiền cho một người quản lý trong 10 năm và không thể rút ra, bạn muốn người đó được trả công thế nào để họ làm hết sức vì bạn?',
    ],
    sections,
    glossary,
    practice,
    widgets: {},
    slides: [],
    wrapup: [
      'Vẽ lại bảng so sánh ba phương thức đầu tư (qua quỹ, đồng đầu tư, trực tiếp) theo phí, kiểm soát, chuyên môn mà không nhìn tài liệu.',
      'Giải thích bằng lời của bạn: vì sao tương quan báo cáo của alternatives có thể thấp hơn thực tế?',
      'Hard hurdle khác soft hurdle ở đâu? Còn điều khoản phí nào chưa rõ? Ghi lại để học kỹ ở AI-02.',
    ],
  };
}());
