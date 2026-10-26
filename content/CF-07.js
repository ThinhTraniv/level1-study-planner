// Bài giảng CF-07 - Business Models (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t, frac } = window.CFAH;

  const sections = [
    {
      title: '1. Bức tranh lớn',
      minutes: 4,
      html: `
<p>Trước khi dự báo dòng tiền, tính WACC hay định giá, nhà phân tích phải trả lời một câu hỏi đơn giản: <b>công ty này kiếm tiền bằng cách nào?</b> Câu trả lời chính là ${t('bizmodel', 'mô hình kinh doanh (business model)')}.</p>
<div class="key">Mô hình kinh doanh mô tả công ty <b>bán gì, cho ai, qua kênh nào, giá bao nhiêu</b>, và <b>tổ chức hoạt động ra sao</b> để làm điều đó có lãi. Hiểu mô hình kinh doanh giúp biết đâu là động lực doanh thu, chi phí, rủi ro và nhu cầu vốn.</div>
<p>Hai LOS của module:</p>
<ol>
  <li><b>Các đặc điểm chính</b> của một mô hình kinh doanh (phần 2 đến 5): Who, What, Where, How much, giá trị mang lại, cách tổ chức, lợi nhuận và unit economics.</li>
  <li><b>Các loại mô hình kinh doanh</b> (phần 6 và 7): theo ngành, các biến thể, thương mại điện tử, nền tảng và hiệu ứng mạng, crowdsourcing.</li>
</ol>
<p class="tip">Module này gần như không có tính toán. Đề thi thường mô tả ngắn một công ty và hỏi: đó là chiến lược giá nào, mô hình nào, hay đặc điểm nào. Học theo kiểu <b>nhận diện tình huống</b>, mỗi khái niệm gắn một ví dụ quen thuộc.</p>`,
    },
    {
      title: '2. Who, What, Where: khách hàng, sản phẩm và kênh phân phối',
      minutes: 10,
      html: `
<h4>Who: khách hàng là ai?</h4>
<ul>
<li><b>Địa lý</b>: nội địa, khu vực hay toàn cầu.</li>
<li><b>Phân khúc thị trường</b>: cao cấp hay đại chúng, quy mô và tăng trưởng của phân khúc.</li>
<li><b>Loại khách hàng</b>: ${t('b2b', 'B2B')} (bán cho doanh nghiệp: ít khách, đơn hàng lớn, quan hệ dài hạn) hay ${t('b2c', 'B2C')} (bán cho người tiêu dùng: nhiều khách, đơn nhỏ, thương hiệu quan trọng).</li>
</ul>
<h4>What: công ty bán gì?</h4>
<p>Sản phẩm hay dịch vụ, <b>khác biệt</b> thế nào so với đối thủ, và giải quyết <b>nhu cầu</b> gì của khách hàng. Sản phẩm khác biệt cho phép định giá cao hơn; sản phẩm phổ thông (commodity) buộc phải cạnh tranh bằng chi phí.</p>
<h4>Where: bán qua kênh nào?</h4>
<p>${t('channel', 'Kênh phân phối (channel)')} đảm nhận hai chức năng: <b>bán hàng</b> và <b>giao hàng</b> (sản phẩm hoặc dịch vụ).</p>
<table class="plain"><thead><tr><th>Kênh</th><th>Ví dụ</th></tr></thead><tbody>
<tr><td>Bán trực tiếp</td><td>Đội ngũ bán hàng riêng, cửa hàng của hãng</td></tr>
<tr><td>Qua trung gian</td><td>Nhà bán buôn, nhà bán lẻ, đại lý, nhà nhượng quyền</td></tr>
<tr><td>Kênh số</td><td>Website, ứng dụng, sàn thương mại điện tử</td></tr>
<tr><td>${t('omni', 'Đa kênh (omnichannel)')}</td><td>Kết hợp cửa hàng và kênh số: đặt online, nhận tại cửa hàng</td></tr>
</tbody></table>
<p>Chiến lược kênh gồm ba yếu tố: <b>chức năng</b> (bán, phân phối, trả lời thắc mắc, nhận đơn, dịch vụ sau bán), <b>tài sản</b> (kho, cửa hàng, đội bán hàng, website) và <b>đối tác</b> (nhà bán lẻ, bán buôn, đại lý, bên nhận nhượng quyền).</p>
<p class="tip">Kênh ảnh hưởng thẳng tới số liệu tài chính: bán trực tiếp cho biên lợi nhuận gộp cao hơn nhưng tốn chi phí bán hàng và tài sản; bán qua trung gian nhẹ vốn hơn nhưng phải chia phần biên lợi nhuận.</p>`,
    },
    {
      title: '3. How much: chiến lược giá',
      minutes: 12,
      html: `
<h4>Định vị giá so với đối thủ</h4>
<p>${t('premiumprice', 'Giá cao cấp (premium)')}, ${t('parity', 'giá ngang (parity)')} hay ${t('discountprice', 'giá chiết khấu (discount)')}. Muốn duy trì giá premium, sản phẩm phải khác biệt thật; giá discount cần lợi thế chi phí.</p>
<h4>Cách đặt giá</h4>
<ul>
<li>${t('valuebased', 'Dựa trên giá trị (value-based)')}: theo giá trị khách hàng cảm nhận. Phù hợp sản phẩm khác biệt.</li>
<li>${t('costbased', 'Dựa trên chi phí (cost-based)')}: chi phí cộng một mức lợi nhuận. Phù hợp sản phẩm phổ thông.</li>
</ul>
<h4>Phân biệt giá (price discrimination)</h4>
<table class="plain"><thead><tr><th>Cách</th><th>Ý nghĩa</th><th>Ví dụ</th></tr></thead><tbody>
<tr><td>${t('tiered', 'Giá theo bậc (tiered)')}</td><td>Giá khác nhau theo khối lượng mua hoặc gói dịch vụ</td><td>Mua nhiều giảm giá; gói cơ bản, nâng cao</td></tr>
<tr><td>${t('dynamic', 'Giá động (dynamic)')}</td><td>Giá thay đổi theo thời điểm, cung cầu</td><td>Vé máy bay, phòng khách sạn, giá xe giờ cao điểm</td></tr>
<tr><td>${t('auction', 'Đấu giá (auction)')}</td><td>Người mua tự trả giá</td><td>Quảng cáo trực tuyến, đấu giá tài sản</td></tr>
</tbody></table>
<h4>Định giá cho nhiều sản phẩm</h4>
<ul>
<li>${t('bundling', 'Bán theo gói (bundling)')}: gộp nhiều sản phẩm bán chung, rẻ hơn mua lẻ (gói truyền hình, internet, di động).</li>
<li>${t('razor', 'Dao cạo và lưỡi dao (razors-and-blades)')}: bán sản phẩm chính rẻ (thậm chí lỗ), kiếm lời từ hàng tiêu hao đi kèm (máy in và mực, máy pha cà phê và viên nang).</li>
<li>${t('optional', 'Sản phẩm tùy chọn (optional product)')}: giá cơ bản thấp, lời từ phần nâng cấp, phụ kiện thêm (xe hơi và các gói option).</li>
</ul>
<h4>Định giá để tăng trưởng nhanh</h4>
<ul>
<li>${t('penetration', 'Giá thâm nhập (penetration)')}: đặt giá thấp để chiếm thị phần nhanh, chấp nhận lỗ ban đầu, tận dụng lợi thế quy mô về sau.</li>
<li>${t('freemium', 'Freemium')}: bản cơ bản miễn phí, thu tiền bản cao cấp. Một phần nhỏ người dùng trả tiền nuôi cả hệ thống.</li>
<li>${t('hidden', 'Doanh thu ẩn (hidden revenue)')}: người dùng không trả tiền, doanh thu đến từ bên thứ ba, thường là quảng cáo hoặc dữ liệu (mạng xã hội, công cụ tìm kiếm).</li>
</ul>
<div class="example"><div class="ex-h">Ví dụ 3.1 - Nhận diện</div>
<p>(a) Ứng dụng nghe nhạc cho nghe miễn phí có quảng cáo, trả phí để bỏ quảng cáo và tải về. (b) Hãng máy lọc nước bán máy giá rẻ, lời từ lõi lọc thay định kỳ. (c) Hãng hàng không tăng giá vé khi gần ngày bay.</p>
<details><summary>Xem lời giải</summary><p>(a) Freemium (kết hợp doanh thu quảng cáo). (b) Razors-and-blades. (c) Giá động (dynamic pricing), một dạng phân biệt giá.</p></details></div>`,
    },
    {
      title: '4. Thay thế sở hữu, giá trị mang lại và cách tổ chức',
      minutes: 10,
      html: `
<h4>Các hình thức thay thế cho bán đứt</h4>
<table class="plain"><thead><tr><th>Hình thức</th><th>Ý nghĩa</th><th>Ví dụ</th></tr></thead><tbody>
<tr><td>${t('subscription', 'Thuê bao (subscription), doanh thu định kỳ')}</td><td>Khách trả phí định kỳ để sử dụng; doanh thu ổn định, dễ dự báo</td><td>Phần mềm, phim trực tuyến, phòng tập</td></tr>
<tr><td>${t('fractional', 'Chia nhỏ (fractionalization)')}</td><td>Bán hoặc cho dùng tài sản theo phần nhỏ hoặc theo thời gian</td><td>Sở hữu chung kỳ nghỉ (timeshare), chia sẻ máy bay riêng</td></tr>
<tr><td>${t('leasing', 'Cho thuê (leasing)')}</td><td>Khách dùng tài sản, công ty giữ quyền sở hữu</td><td>Thuê xe, thuê thiết bị, bất động sản</td></tr>
<tr><td>${t('licensing', 'Cấp phép (licensing)')}</td><td>Cho phép bên khác dùng tài sản trí tuệ, thu phí bản quyền (royalty)</td><td>Bằng sáng chế, nhân vật hoạt hình, công nghệ</td></tr>
<tr><td>${t('franchise', 'Nhượng quyền (franchising)')}</td><td>Bên nhận quyền kinh doanh dưới thương hiệu và quy trình của bên nhượng trong một khu vực, trả phí và tuân thủ tiêu chuẩn</td><td>Chuỗi đồ ăn nhanh, cà phê</td></tr>
</tbody></table>
<h4>Giá trị mang lại cho khách hàng (value proposition)</h4>
<div class="key">${t('valueprop', 'Value proposition')} = Who + What + Where + How much: lý do khách hàng chọn công ty thay vì đối thủ. Nó gồm đặc tính sản phẩm, dịch vụ đi kèm, trải nghiệm mua và mức giá <b>so với đối thủ</b>.</div>
<h4>Cách tổ chức và năng lực (How)</h4>
<ul>
<li><b>Cơ cấu tổ chức</b>: công ty tổ chức hoạt động thế nào để mang giá trị đến khách hàng; tự làm hay thuê ngoài.</li>
<li><b>Quan hệ nhà cung cấp</b>: thuê hay mua nguồn lực; phụ thuộc một nhà cung cấp là rủi ro.</li>
<li>${t('valuechain', 'Chuỗi giá trị (value chain)')}: hệ thống các hoạt động <b>công ty thực hiện</b> để tạo ra giá trị cho khách hàng (R&amp;D, sản xuất, marketing, dịch vụ sau bán). ${t('supplychain', 'Chuỗi cung ứng (supply chain)')}: <b>trình tự các bước</b> để làm ra và đưa sản phẩm đến khách hàng, thường gồm nhiều công ty.</li>
</ul>
<p class="tip">Câu hỏi để phân tích chuỗi giá trị: công ty tạo giá trị ở khâu nào, và có <b>giữ lại</b> được phần giá trị đó không (biên lợi nhuận), hay đối tác trong chuỗi lấy mất?</p>`,
    },
    {
      title: '5. Lợi nhuận và unit economics',
      minutes: 8,
      html: `
<p>Mô hình kinh doanh tốt phải <b>có lãi</b> khi đạt quy mô. Ba công cụ:</p>
<ul>
<li><b>Biên lợi nhuận</b> (gộp, hoạt động): so với đối thủ cùng ngành.</li>
<li>${t('breakeven', 'Điểm hòa vốn (break-even)')}: sản lượng để doanh thu đủ bù chi phí cố định.</li>
<li>${t('unitecon', 'Unit economics')}: doanh thu và chi phí <b>trên một đơn vị</b> (một sản phẩm, một khách hàng, một cửa hàng).</li>
</ul>
<div class="formula">Sản lượng hòa vốn = ${frac('Chi phí cố định', 'Giá bán - chi phí biến đổi một đơn vị')}</div>
<div class="example"><div class="ex-h">Ví dụ 5.1</div>
<p>Giá bán 50, chi phí biến đổi 30 mỗi sản phẩm, chi phí cố định 200.000/năm. Tính sản lượng hòa vốn.</p>
<details><summary>Xem lời giải</summary><p>Lãi góp mỗi sản phẩm = 50 - 30 = 20 (tỷ lệ lãi góp 40%). Sản lượng hòa vốn = 200.000 / 20 = <b>10.000</b> sản phẩm, tương ứng doanh thu 500.000.</p></details></div>
<div class="example"><div class="ex-h">Ví dụ 5.2 - Unit economics của mô hình thuê bao</div>
<p>Phí thuê bao 10/tháng, biên lợi nhuận gộp 70%, mỗi tháng 5% khách hủy, chi phí có được một khách hàng (CAC) là 70. Tính giá trị vòng đời khách hàng (LTV).</p>
<details><summary>Xem lời giải</summary><p>Thời gian giữ chân trung bình = 1 / 5% = 20 tháng. Lợi nhuận gộp mỗi tháng = 10 × 70% = 7. LTV = 7 × 20 = <b>140</b>. LTV/CAC = 140/70 = <b>2</b>; mất 70/7 = 10 tháng để thu hồi CAC. Nếu dùng doanh thu thay vì lợi nhuận gộp, ta được 200: quá lạc quan.</p></details></div>
<p class="warn">Công ty tăng trưởng nhanh có thể lỗ tổng thể nhưng unit economics tốt (mỗi khách hàng mới sinh lời), hoặc ngược lại: doanh thu tăng mạnh nhưng mỗi đơn vị bán thêm đều lỗ. Trường hợp sau không thể "lấy quy mô bù lại".</p>`,
    },
    {
      title: '6. Các loại mô hình kinh doanh: theo ngành và các biến thể',
      minutes: 8,
      html: `
<p>Mỗi ngành có mô hình đặc trưng, với cách tạo doanh thu và cấu trúc chi phí riêng:</p>
<table class="plain"><thead><tr><th>Ngành</th><th>Kiếm tiền từ</th></tr></thead><tbody>
<tr><td>Khai thác tài nguyên</td><td>Bán dầu, khoáng sản; lợi nhuận phụ thuộc giá hàng hóa và chi phí khai thác</td></tr>
<tr><td>Sản xuất</td><td>Biến nguyên liệu thành sản phẩm; quy mô và hiệu suất quan trọng</td></tr>
<tr><td>Phân phối, bán buôn</td><td>Chênh lệch giá mua và bán, biên mỏng, vòng quay cao</td></tr>
<tr><td>Bán lẻ</td><td>Chênh lệch giá, vị trí cửa hàng và vòng quay hàng tồn kho</td></tr>
<tr><td>Ngân hàng</td><td>Chênh lệch lãi suất cho vay và huy động, cộng phí dịch vụ</td></tr>
<tr><td>Môi giới</td><td>Hoa hồng khi kết nối người mua và người bán</td></tr>
<tr><td>Dịch vụ</td><td>Bán thời gian và chuyên môn của con người</td></tr>
<tr><td>Phần mềm</td><td>Chi phí phát triển lớn ban đầu, chi phí biên gần 0; bán bản quyền hoặc thuê bao (SaaS)</td></tr>
</tbody></table>
<h4>Các biến thể phổ biến</h4>
<ul>
<li>${t('privatelabel', 'Sản xuất nhãn riêng (private label)')}: sản xuất hàng để công ty khác bán dưới thương hiệu của họ (nhãn riêng của siêu thị).</li>
<li><b>Thỏa thuận cấp phép (licensing)</b>: làm sản phẩm cho thương hiệu khác, hoặc dùng thương hiệu khác, và trả hoặc thu phí.</li>
<li>${t('var', 'Nhà bán lại giá trị gia tăng (value-added reseller)')}: phân phối sản phẩm kèm dịch vụ lắp đặt, tích hợp, hỗ trợ kỹ thuật (thường trong CNTT).</li>
<li><b>Mô hình nhượng quyền phân phối</b>: nhà phân phối có quan hệ độc quyền với công ty mẹ trong một khu vực (đại lý ô tô chính hãng).</li>
</ul>`,
    },
    {
      title: '7. Thương mại điện tử, nền tảng và crowdsourcing',
      minutes: 5,
      html: `
<h4>Mô hình thương mại điện tử</h4>
<ul>
<li>${t('affiliate', 'Tiếp thị liên kết (affiliate marketing)')}: hưởng hoa hồng khi giới thiệu khách mua hàng trên website của người khác.</li>
<li>${t('marketplace', 'Sàn giao dịch (marketplace)')}: kết nối người mua và người bán, không sở hữu hàng hóa, thu phí giao dịch hoặc hoa hồng.</li>
<li>${t('aggregator', 'Mô hình tổng hợp (aggregator)')}: giống sàn nhưng gom sản phẩm, dịch vụ của nhiều nhà cung cấp và bán <b>dưới thương hiệu của chính mình</b>, thường kiểm soát giá và trải nghiệm.</li>
</ul>
<h4>Hiệu ứng mạng và nền tảng</h4>
<div class="key">${t('network', 'Hiệu ứng mạng (network effect)')}: giá trị của dịch vụ với mỗi người dùng <b>tăng khi có thêm người dùng</b>. ${t('platform', 'Nền tảng (platform)')} khác doanh nghiệp tuyến tính (mua vào, chế biến, bán ra) ở chỗ nó tạo giá trị bằng cách <b>kết nối các nhóm người dùng</b> và dựa vào hiệu ứng mạng.</div>
<p>Nền tảng <b>hai phía hoặc nhiều phía</b>: thêm người bán thu hút thêm người mua và ngược lại (ứng dụng gọi xe, sàn thương mại điện tử, ví điện tử). Hiệu ứng mạng mạnh tạo rào cản gia nhập và xu hướng "kẻ thắng lấy hết", nhưng giai đoạn đầu thường phải trợ giá một phía để có đủ người dùng.</p>
<h4>Crowdsourcing</h4>
<p>${t('crowdsource', 'Crowdsourcing')}: người dùng trực tiếp đóng góp vào sản phẩm (nội dung, đánh giá, mã nguồn, ý tưởng), thường qua cộng đồng người dùng. Ví dụ: bách khoa toàn thư mở, phần mềm mã nguồn mở, trang đánh giá nhà hàng.</p>
<p class="tip">Nhiều công ty là <b>mô hình lai</b>: vừa bán lẻ trực tiếp vừa vận hành sàn cho người bán khác, vừa thu thuê bao vừa thu quảng cáo. Khi phân tích, tách từng mảng doanh thu theo mô hình của nó.</p>`,
    },
    {
      title: '8. Tóm tắt và bẫy thường gặp',
      minutes: 3,
      html: `
<table class="plain"><thead><tr><th>Dấu hiệu trong đề</th><th>Khái niệm</th></tr></thead><tbody>
<tr><td>Máy rẻ, lời từ hàng tiêu hao</td><td>Razors-and-blades</td></tr>
<tr><td>Bản cơ bản miễn phí, trả tiền bản cao cấp</td><td>Freemium</td></tr>
<tr><td>Người dùng không trả, quảng cáo trả</td><td>Hidden revenue</td></tr>
<tr><td>Giá thấp để chiếm thị phần nhanh</td><td>Penetration pricing</td></tr>
<tr><td>Giá đổi theo thời điểm, cung cầu</td><td>Dynamic pricing</td></tr>
<tr><td>Phân phối kèm lắp đặt, hỗ trợ</td><td>Value-added reseller</td></tr>
<tr><td>Sản xuất cho thương hiệu khác bán</td><td>Private label</td></tr>
<tr><td>Kết nối người mua và bán, không sở hữu hàng</td><td>Marketplace</td></tr>
<tr><td>Càng nhiều người dùng càng có giá trị</td><td>Network effect, platform</td></tr>
<tr><td>Hòa vốn</td><td>Chi phí cố định / (giá - chi phí biến đổi)</td></tr>
<tr><td>LTV</td><td>Dùng lợi nhuận gộp, không dùng doanh thu</td></tr>
</tbody></table>
<p>Tiếp theo: tab <b>Luyện tập</b> để làm 10 câu (rút ngẫu nhiên từ ngân hàng 30 câu, mỗi lần làm một bộ khác). Đây là module cuối của Corporate Issuers.</p>`,
    },
  ];

  const glossary = {
    bizmodel: ['Business model', 'Mô hình kinh doanh', 'Cách công ty tạo ra, mang đến và thu về giá trị: bán gì, cho ai, qua kênh nào, giá bao nhiêu.'],
    b2b: ['Business-to-business (B2B)', 'Bán cho doanh nghiệp', 'Khách hàng là doanh nghiệp; ít khách, đơn hàng lớn, quan hệ dài hạn.'],
    b2c: ['Business-to-consumer (B2C)', 'Bán cho người tiêu dùng', 'Khách hàng là cá nhân; nhiều khách, đơn nhỏ.'],
    channel: ['Channel', 'Kênh phân phối', 'Con đường công ty bán và giao sản phẩm đến khách hàng.'],
    omni: ['Omnichannel', 'Đa kênh', 'Kết hợp liền mạch kênh cửa hàng và kênh số.'],
    premiumprice: ['Premium pricing', 'Giá cao cấp', 'Giá cao hơn đối thủ, dựa trên sự khác biệt của sản phẩm.'],
    parity: ['Parity pricing', 'Giá ngang', 'Giá tương đương đối thủ.'],
    discountprice: ['Discount pricing', 'Giá chiết khấu', 'Giá thấp hơn đối thủ, cần lợi thế chi phí.'],
    valuebased: ['Value-based pricing', 'Định giá theo giá trị', 'Đặt giá theo giá trị khách hàng cảm nhận.'],
    costbased: ['Cost-based pricing', 'Định giá theo chi phí', 'Chi phí cộng một mức lợi nhuận.'],
    tiered: ['Tiered pricing', 'Giá theo bậc', 'Giá khác nhau theo khối lượng hoặc gói dịch vụ.'],
    dynamic: ['Dynamic pricing', 'Giá động', 'Giá thay đổi theo thời điểm và cung cầu.'],
    auction: ['Auction pricing', 'Định giá bằng đấu giá', 'Người mua tự trả giá cạnh tranh.'],
    bundling: ['Bundling', 'Bán theo gói', 'Gộp nhiều sản phẩm bán chung với giá ưu đãi.'],
    razor: ['Razors-and-blades pricing', 'Dao cạo và lưỡi dao', 'Bán sản phẩm chính giá thấp, kiếm lời từ hàng tiêu hao đi kèm.'],
    optional: ['Optional product pricing', 'Định giá sản phẩm tùy chọn', 'Giá cơ bản thấp, lời từ nâng cấp và phụ kiện.'],
    penetration: ['Penetration pricing', 'Giá thâm nhập', 'Giá thấp ban đầu để chiếm thị phần nhanh.'],
    freemium: ['Freemium', 'Freemium', 'Bản cơ bản miễn phí, thu tiền bản cao cấp.'],
    hidden: ['Hidden revenue model', 'Doanh thu ẩn', 'Người dùng không trả tiền; doanh thu từ bên thứ ba như quảng cáo.'],
    subscription: ['Subscription / recurring revenue', 'Thuê bao, doanh thu định kỳ', 'Khách trả phí định kỳ để dùng sản phẩm, dịch vụ.'],
    fractional: ['Fractionalization', 'Chia nhỏ sở hữu', 'Bán hoặc cho dùng tài sản theo phần nhỏ hoặc theo thời gian.'],
    leasing: ['Leasing', 'Cho thuê', 'Khách dùng tài sản trong khi công ty giữ quyền sở hữu.'],
    licensing: ['Licensing', 'Cấp phép', 'Cho bên khác dùng tài sản trí tuệ để thu phí bản quyền.'],
    franchise: ['Franchising', 'Nhượng quyền', 'Bên nhận quyền kinh doanh dưới thương hiệu, quy trình của bên nhượng trong một khu vực.'],
    valueprop: ['Value proposition', 'Giá trị mang lại cho khách hàng', 'Lý do khách hàng chọn công ty thay vì đối thủ: sản phẩm, dịch vụ, kênh và giá.'],
    valuechain: ['Value chain', 'Chuỗi giá trị', 'Các hoạt động công ty thực hiện để tạo giá trị cho khách hàng.'],
    supplychain: ['Supply chain', 'Chuỗi cung ứng', 'Trình tự các bước, thường qua nhiều công ty, để làm ra và đưa sản phẩm đến khách.'],
    breakeven: ['Break-even point', 'Điểm hòa vốn', 'Sản lượng mà doanh thu vừa đủ bù tổng chi phí.'],
    unitecon: ['Unit economics', 'Kinh tế đơn vị', 'Doanh thu và chi phí tính trên một đơn vị sản phẩm hoặc một khách hàng.'],
    privatelabel: ['Private label manufacturer', 'Sản xuất nhãn riêng', 'Sản xuất hàng để công ty khác bán dưới thương hiệu của họ.'],
    var: ['Value-added reseller', 'Nhà bán lại giá trị gia tăng', 'Phân phối sản phẩm kèm dịch vụ lắp đặt, tích hợp, hỗ trợ.'],
    affiliate: ['Affiliate marketing', 'Tiếp thị liên kết', 'Hưởng hoa hồng khi giới thiệu khách mua hàng của người khác.'],
    marketplace: ['Marketplace', 'Sàn giao dịch', 'Kết nối người mua và người bán, không sở hữu hàng hóa.'],
    aggregator: ['Aggregator', 'Mô hình tổng hợp', 'Gom sản phẩm, dịch vụ của nhiều nhà cung cấp và bán dưới thương hiệu của mình.'],
    network: ['Network effect', 'Hiệu ứng mạng', 'Giá trị với mỗi người dùng tăng khi có thêm người dùng.'],
    platform: ['Platform business model', 'Mô hình nền tảng', 'Tạo giá trị bằng cách kết nối các nhóm người dùng, dựa trên hiệu ứng mạng.'],
    crowdsource: ['Crowdsourcing', 'Crowdsourcing', 'Người dùng trực tiếp đóng góp vào sản phẩm, thường qua cộng đồng.'],
  };

  const practice = [
    { q: 'Một hãng bán máy pha cà phê với giá gần bằng giá vốn và kiếm phần lớn lợi nhuận từ viên nang cà phê chỉ dùng được cho máy của hãng. Đây là chiến lược giá:', choices: ['Bundling', 'Razors-and-blades', 'Penetration pricing'], answer: 1, explain: 'Bán sản phẩm chính rẻ, lời từ hàng tiêu hao đi kèm là razors-and-blades. Bundling là gộp nhiều sản phẩm bán chung một giá. Penetration pricing là giá thấp để chiếm thị phần, sau đó có thể tăng giá chính sản phẩm đó, không dựa vào hàng tiêu hao.' },
    { q: 'Một ứng dụng quản lý công việc cho dùng miễn phí bản cơ bản, người dùng trả phí hàng tháng để mở các tính năng nâng cao. Đây là mô hình:', choices: ['Freemium', 'Hidden revenue', 'Tiered pricing theo khối lượng mua'], answer: 0, explain: 'Bản cơ bản miễn phí, thu tiền bản cao cấp là freemium. Hidden revenue là người dùng không trả tiền mà bên thứ ba (quảng cáo) trả. Tiered pricing là giá khác nhau theo khối lượng hoặc gói, nhưng không có bậc miễn phí làm trọng tâm thu hút người dùng.' },
    { q: 'Một ứng dụng kết nối tài xế và hành khách; càng nhiều tài xế thì hành khách càng chờ ít, và càng nhiều hành khách thì tài xế càng có nhiều chuyến. Mô tả phù hợp nhất:', choices: ['Doanh nghiệp tuyến tính truyền thống', 'Value-added reseller', 'Nền tảng hai phía có hiệu ứng mạng'], answer: 2, explain: 'Giá trị cho mỗi phía tăng khi phía kia đông hơn: hiệu ứng mạng trên nền tảng hai phía. Doanh nghiệp tuyến tính mua vào, chế biến, bán ra. Value-added reseller phân phối sản phẩm kèm dịch vụ lắp đặt, hỗ trợ.' },
    { q: 'Giá bán 80, chi phí biến đổi 50 mỗi sản phẩm, chi phí cố định 150.000. Sản lượng hòa vốn gần nhất với:', choices: ['1.875', '3.000', '5.000'], answer: 2, explain: 'Hòa vốn = 150.000 / (80 - 50) = 5.000. Lựa chọn 1.875 chia cho giá bán (bỏ qua chi phí biến đổi). Lựa chọn 3.000 chia cho chi phí biến đổi.' },
    { q: 'Một công ty phân phối máy chủ và phần mềm của các hãng lớn, đồng thời cung cấp dịch vụ lắp đặt, tích hợp hệ thống và hỗ trợ kỹ thuật cho khách hàng doanh nghiệp. Đây là mô hình:', choices: ['Private label manufacturer', 'Value-added reseller', 'Licensing'], answer: 1, explain: 'Phân phối sản phẩm của hãng khác kèm dịch vụ gia tăng là value-added reseller. Private label là tự sản xuất hàng cho công ty khác gắn nhãn. Licensing là cho phép dùng tài sản trí tuệ để thu phí bản quyền.' },
    { q: 'Một doanh nhân trả phí ban đầu và phí hằng tháng theo doanh thu để mở cửa hàng mang thương hiệu của một chuỗi đồ uống tại một quận, phải theo đúng công thức, thiết kế và quy trình của chuỗi. Đây là:', choices: ['Franchising', 'Licensing', 'Affiliate marketing'], answer: 0, explain: 'Kinh doanh dưới thương hiệu và quy trình của bên nhượng, trong một khu vực, trả phí và tuân thủ tiêu chuẩn: franchising. Licensing thường chỉ cho phép dùng một tài sản trí tuệ cụ thể, không kèm cả mô hình vận hành. Affiliate là hưởng hoa hồng giới thiệu khách.' },
    { q: 'Dịch vụ thuê bao giá 10/tháng, biên lợi nhuận gộp 70%, tỷ lệ khách hủy 5% mỗi tháng. Giá trị vòng đời khách hàng (LTV) gần nhất với:', choices: ['200', '140', '7'], answer: 1, explain: 'Thời gian giữ chân trung bình = 1/5% = 20 tháng; LTV = 10 x 70% x 20 = 140. Lựa chọn 200 dùng doanh thu thay vì lợi nhuận gộp (10 x 20). Lựa chọn 7 chỉ là lợi nhuận gộp một tháng.' },
    { q: 'Phát biểu nào đúng về chuỗi giá trị (value chain) và chuỗi cung ứng (supply chain)?', choices: ['Chuỗi giá trị chỉ gồm các bước vận chuyển hàng hóa đến khách hàng', 'Chuỗi cung ứng là các hoạt động công ty tự thực hiện để tạo giá trị, gồm cả R&D và dịch vụ sau bán', 'Chuỗi giá trị là các hoạt động công ty thực hiện để tạo giá trị cho khách hàng; chuỗi cung ứng là trình tự các bước để làm ra và đưa sản phẩm đến khách'], answer: 2, explain: 'Chuỗi giá trị nhìn vào các hoạt động tạo giá trị của công ty (R&D, sản xuất, marketing, dịch vụ). Chuỗi cung ứng là trình tự các bước, thường qua nhiều công ty, để sản xuất và giao sản phẩm. Phương án "chỉ gồm các bước vận chuyển" thu hẹp chuỗi giá trị thành logistics; phương án coi chuỗi cung ứng là các hoạt động công ty tự thực hiện đã đảo ngược hai khái niệm.' },
    { q: "So với mô hình B2C, mô hình B2B thường có đặc điểm:", choices: ["Ít khách hàng hơn, đơn hàng lớn hơn và quan hệ dài hạn hơn", "Nhiều khách hàng, đơn hàng nhỏ và thương hiệu đại chúng là yếu tố quan trọng nhất", "Không cần kênh phân phối vì khách hàng tự tìm đến"], answer: 0, explain: "B2B bán cho doanh nghiệp: ít khách, đơn hàng lớn, quan hệ dài hạn. Lựa chọn \"nhiều khách hàng, đơn hàng nhỏ, thương hiệu đại chúng\" mô tả B2C. Lựa chọn \"không cần kênh phân phối\" sai vì mọi mô hình đều cần kênh để bán và giao hàng." },
    { q: "Một hãng mỹ phẩm chuyển từ bán qua nhà bán lẻ sang bán trực tiếp qua chuỗi cửa hàng và website riêng. Tác động tài chính nhiều khả năng nhất là:", choices: ["Biên lợi nhuận gộp giảm và chi phí bán hàng giảm", "Biên lợi nhuận gộp tăng nhưng chi phí bán hàng và tài sản cần đầu tư tăng", "Không thay đổi gì vì sản phẩm vẫn như cũ"], answer: 1, explain: "Bán trực tiếp giữ lại phần biên lợi nhuận trước đây chia cho trung gian, nên biên gộp cao hơn, nhưng công ty phải tự gánh chi phí bán hàng, cửa hàng, kho. Lựa chọn \"biên gộp giảm và chi phí bán hàng giảm\" đảo ngược cả hai tác động. Lựa chọn \"không thay đổi\" bỏ qua việc kênh ảnh hưởng trực tiếp đến số liệu tài chính." },
    { q: "Một công ty sản xuất thép cuộn, sản phẩm gần như giống hệt đối thủ, đặt giá bằng chi phí sản xuất cộng một mức lợi nhuận cố định. Đây là cách định giá:", choices: ["Dựa trên giá trị (value-based)", "Giá động (dynamic pricing)", "Dựa trên chi phí (cost-based)"], answer: 2, explain: "Chi phí cộng một mức lợi nhuận là định giá dựa trên chi phí, phù hợp với sản phẩm phổ thông. Định giá dựa trên giá trị theo giá trị khách hàng cảm nhận, phù hợp sản phẩm khác biệt. Giá động thay đổi theo thời điểm và cung cầu." },
    { q: "Điều kiện quan trọng nhất để một công ty duy trì được chiến lược giá cao cấp (premium) lâu dài là:", choices: ["Sản phẩm thực sự khác biệt và được khách hàng đánh giá cao hơn đối thủ", "Có chi phí sản xuất thấp nhất ngành", "Bán qua càng nhiều trung gian càng tốt"], answer: 0, explain: "Giá premium chỉ bền vững khi sản phẩm khác biệt thật, khách sẵn lòng trả thêm. Chi phí thấp nhất ngành là điều kiện của chiến lược giá chiết khấu. Số lượng trung gian không tạo ra lý do để khách trả giá cao." },
    { q: "Một nhà cung cấp dịch vụ lưu trữ đám mây bán ba gói: 100 GB giá 2 USD, 1 TB giá 8 USD và 5 TB giá 25 USD mỗi tháng. Đây là:", choices: ["Giá động (dynamic pricing)", "Giá theo bậc (tiered pricing)", "Razors-and-blades"], answer: 1, explain: "Giá khác nhau theo khối lượng hoặc gói dịch vụ là giá theo bậc, một dạng phân biệt giá. Giá động thay đổi theo thời điểm hay cung cầu, không theo gói cố định. Razors-and-blades bán sản phẩm chính rẻ để lời từ hàng tiêu hao đi kèm." },
    { q: "Một công cụ tìm kiếm bán vị trí quảng cáo cho từ khóa: các nhà quảng cáo tự đưa ra mức giá, người trả cao nhất được hiển thị trên cùng. Cách định giá này là:", choices: ["Bán theo gói (bundling)", "Giá thâm nhập (penetration)", "Đấu giá (auction)"], answer: 2, explain: "Người mua tự trả giá và giá do cạnh tranh giữa người mua quyết định là định giá đấu giá, một dạng phân biệt giá. Bundling gộp nhiều sản phẩm bán chung. Giá thâm nhập là đặt giá thấp để chiếm thị phần nhanh." },
    { q: "Một nhà mạng bán gói gồm internet cáp quang, truyền hình và 2 thuê bao di động với giá thấp hơn tổng giá khi mua lẻ từng dịch vụ. Đây là:", choices: ["Bán theo gói (bundling)", "Sản phẩm tùy chọn (optional product)", "Freemium"], answer: 0, explain: "Gộp nhiều sản phẩm bán chung với giá thấp hơn mua lẻ là bundling. Sản phẩm tùy chọn là giá cơ bản thấp rồi kiếm lời từ phần nâng cấp, phụ kiện. Freemium cho dùng miễn phí bản cơ bản và thu tiền bản cao cấp." },
    { q: "Một hãng xe điện mới vào thị trường bán xe với giá thấp hơn chi phí, chấp nhận lỗ vài năm đầu để nhanh chóng chiếm thị phần và đạt lợi thế quy mô. Đây là chiến lược:", choices: ["Giá thâm nhập (penetration pricing)", "Giá cao cấp (premium)", "Giá động (dynamic pricing)"], answer: 0, explain: "Đặt giá thấp, chấp nhận lỗ ban đầu để giành thị phần và tận dụng lợi thế quy mô về sau là giá thâm nhập. Giá premium đặt giá cao hơn đối thủ. Giá động thay đổi theo thời điểm và cung cầu." },
    { q: "Một mạng xã hội cho người dùng sử dụng hoàn toàn miễn phí; gần như toàn bộ doanh thu đến từ các doanh nghiệp mua quảng cáo nhắm tới người dùng. Đây là mô hình:", choices: ["Freemium", "Thuê bao (subscription)", "Doanh thu ẩn (hidden revenue)"], answer: 2, explain: "Người dùng không trả tiền, doanh thu đến từ bên thứ ba như nhà quảng cáo là mô hình doanh thu ẩn. Freemium vẫn thu tiền từ một phần người dùng mua bản cao cấp. Thuê bao thu phí định kỳ từ chính người dùng." },
    { q: "Đối với nhà phân tích, ưu điểm chính của mô hình thuê bao (subscription) so với bán đứt sản phẩm là:", choices: ["Doanh thu định kỳ, ổn định và dễ dự báo hơn", "Không bao giờ có khách hàng hủy dịch vụ", "Không cần chi phí để có được khách hàng"], answer: 0, explain: "Thuê bao tạo doanh thu định kỳ, giúp dự báo dễ hơn. Lựa chọn \"không bao giờ có khách hủy\" sai: tỷ lệ hủy (churn) là chỉ tiêu then chốt của mô hình này. Lựa chọn \"không cần chi phí có được khách hàng\" sai vì CAC vẫn tồn tại và cần so với giá trị vòng đời khách hàng." },
    { q: "Một công ty bán quyền sử dụng một chiếc máy bay riêng theo số giờ bay mỗi năm cho nhiều khách hàng cùng lúc, mỗi khách sở hữu một phần nhỏ. Đây là hình thức:", choices: ["Cấp phép (licensing)", "Chia nhỏ (fractionalization)", "Nhượng quyền (franchising)"], answer: 1, explain: "Bán hoặc cho dùng tài sản theo phần nhỏ hay theo thời gian là chia nhỏ, như timeshare hay chia sẻ máy bay riêng. Cấp phép là cho bên khác dùng tài sản trí tuệ để thu phí bản quyền. Nhượng quyền là cho bên khác kinh doanh dưới thương hiệu và quy trình của mình." },
    { q: "Một hãng phim hoạt hình cho phép các nhà sản xuất đồ chơi in nhân vật của mình lên sản phẩm và nhận phí bản quyền (royalty) theo doanh số. Đây là:", choices: ["Cho thuê (leasing)", "Tiếp thị liên kết (affiliate marketing)", "Cấp phép (licensing)"], answer: 2, explain: "Cho phép bên khác dùng tài sản trí tuệ (nhân vật, bằng sáng chế, công nghệ) để thu phí bản quyền là cấp phép. Cho thuê là cho khách dùng tài sản hữu hình mà công ty vẫn sở hữu. Tiếp thị liên kết là hưởng hoa hồng khi giới thiệu khách mua hàng trên website người khác." },
    { q: "Giá trị mang lại cho khách hàng (value proposition) của một công ty được hiểu đúng nhất là:", choices: ["Lý do khách hàng chọn công ty thay vì đối thủ, gồm đặc tính sản phẩm, dịch vụ đi kèm, trải nghiệm mua và mức giá so với đối thủ", "Tổng giá trị tài sản trên bảng cân đối kế toán", "Trình tự các bước để làm ra và đưa sản phẩm đến khách hàng"], answer: 0, explain: "Value proposition là tổng hợp Who + What + Where + How much: vì sao khách chọn công ty. Tổng tài sản là con số kế toán, không phải giá trị mang lại cho khách. Trình tự các bước làm ra và đưa sản phẩm đến khách là chuỗi cung ứng." },
    { q: "Một sản phẩm có giá bán 120, chi phí biến đổi 84 mỗi đơn vị và chi phí cố định 360.000/năm. Doanh thu hòa vốn gần nhất với:", choices: ["514.285,71", "1.200.000", "10.000"], answer: 1, explain: "Lãi góp mỗi đơn vị = 120 - 84 = 36 (tỷ lệ lãi góp 30%). Sản lượng hòa vốn = 360.000/36 = 10.000 đơn vị; doanh thu hòa vốn = 10.000 x 120 = 1.200.000. Lựa chọn 514.285,71 chia chi phí cố định cho tỷ lệ chi phí biến đổi 70% thay vì tỷ lệ lãi góp 30%. Lựa chọn 10.000 là sản lượng hòa vốn, chưa nhân với giá bán." },
    { q: "Một dịch vụ thuê bao thu 25/tháng, biên lợi nhuận gộp 60%, tỷ lệ khách hủy 4% mỗi tháng, chi phí có được một khách hàng (CAC) là 300. Tỷ lệ LTV/CAC gần nhất với:", choices: ["2,08", "0,05", "1,25"], answer: 2, explain: "Thời gian giữ chân trung bình = 1/4% = 25 tháng. Lợi nhuận gộp mỗi tháng = 25 x 60% = 15. LTV = 15 x 25 = 375; LTV/CAC = 375/300 = 1,25. Lựa chọn 2,08 tính LTV bằng doanh thu (25 x 25 = 625) thay vì lợi nhuận gộp, quá lạc quan. Lựa chọn 0,05 chỉ dùng lợi nhuận gộp của một tháng." },
    { q: "Một công ty giao đồ ăn tăng doanh thu 80%/năm, nhưng sau khi trừ chi phí giao hàng và khuyến mãi, mỗi đơn hàng đều lỗ 0,5 USD. Nhận định nào hợp lý nhất?", choices: ["Khi đạt quy mô lớn hơn, công ty chắc chắn sẽ có lãi", "Unit economics âm: mỗi đơn bán thêm làm lỗ tăng, nên tăng quy mô không tự giải quyết được vấn đề", "Doanh thu tăng nhanh là đủ để kết luận mô hình kinh doanh tốt"], answer: 1, explain: "Khi mỗi đơn vị bán thêm đều lỗ, tăng quy mô chỉ làm lỗ lớn hơn; công ty phải cải thiện giá hoặc chi phí trên mỗi đơn. Lựa chọn \"chắc chắn sẽ có lãi khi đạt quy mô\" chỉ đúng nếu lỗ đến từ chi phí cố định, không phải từ lỗ trên từng đơn. Lựa chọn \"doanh thu tăng nhanh là đủ\" bỏ qua khả năng sinh lời." },
    { q: "Một nhà máy sản xuất nước giặt để các chuỗi siêu thị bán dưới thương hiệu riêng của từng siêu thị. Nhà máy này hoạt động theo mô hình:", choices: ["Sản xuất nhãn riêng (private label)", "Value-added reseller", "Marketplace"], answer: 0, explain: "Sản xuất hàng để công ty khác bán dưới thương hiệu của họ là private label. Value-added reseller phân phối sản phẩm của hãng khác kèm dịch vụ lắp đặt, hỗ trợ. Marketplace kết nối người mua và người bán, không sản xuất hàng." },
    { q: "Một ứng dụng đặt phòng gom phòng của nhiều khách sạn nhỏ, bán dưới thương hiệu của chính ứng dụng với tiêu chuẩn và mức giá do ứng dụng kiểm soát. So với một sàn giao dịch (marketplace) thông thường, đây là:", choices: ["Tiếp thị liên kết (affiliate marketing)", "Mô hình tổng hợp (aggregator)", "Doanh nghiệp tuyến tính sản xuất"], answer: 1, explain: "Aggregator gom sản phẩm, dịch vụ của nhiều nhà cung cấp và bán dưới thương hiệu của chính mình, thường kiểm soát giá và trải nghiệm; marketplace chỉ kết nối người mua với người bán. Tiếp thị liên kết là hưởng hoa hồng khi giới thiệu khách sang website khác. Ứng dụng không tự sản xuất nên không phải doanh nghiệp tuyến tính sản xuất." },
    { q: "Một blogger công nghệ đặt đường dẫn đến trang bán hàng của một sàn thương mại điện tử và nhận hoa hồng 3% trên mỗi đơn hàng phát sinh từ đường dẫn đó. Đây là:", choices: ["Marketplace", "Crowdsourcing", "Tiếp thị liên kết (affiliate marketing)"], answer: 2, explain: "Hưởng hoa hồng khi giới thiệu khách mua hàng trên website của người khác là tiếp thị liên kết. Marketplace là chính nơi kết nối người mua và người bán. Crowdsourcing là người dùng đóng góp trực tiếp vào sản phẩm." },
    { q: "Một ứng dụng bản đồ dựa vào người dùng tự báo cáo kẹt xe, tai nạn và cập nhật địa điểm mới để cải thiện dữ liệu cho mọi người. Đặc điểm này là:", choices: ["Crowdsourcing", "Bán theo gói (bundling)", "Value-added reseller"], answer: 0, explain: "Người dùng trực tiếp đóng góp nội dung, dữ liệu vào sản phẩm là crowdsourcing. Bundling gộp nhiều sản phẩm bán chung. Value-added reseller phân phối sản phẩm kèm dịch vụ lắp đặt, hỗ trợ." },
    { q: "Đặc điểm cấu trúc chi phí điển hình của mô hình kinh doanh phần mềm là:", choices: ["Biên lợi nhuận mỏng và vòng quay hàng tồn kho cao", "Chi phí phát triển ban đầu lớn, chi phí biên để phục vụ thêm một khách hàng gần bằng 0", "Lợi nhuận chủ yếu phụ thuộc giá hàng hóa cơ bản trên thị trường thế giới"], answer: 1, explain: "Phần mềm tốn nhiều chi phí phát triển ban đầu, nhưng bán thêm một bản quyền hay thuê bao gần như không tốn thêm chi phí. Biên mỏng, vòng quay cao là đặc trưng của phân phối, bán buôn. Phụ thuộc giá hàng hóa là đặc trưng của ngành khai thác tài nguyên." },
    { q: "Nhận định nào về nền tảng có hiệu ứng mạng mạnh là chính xác nhất?", choices: ["Hiệu ứng mạng làm giá trị của dịch vụ với mỗi người dùng giảm khi có thêm người dùng", "Nền tảng tạo giá trị chủ yếu bằng cách mua vào, chế biến và bán ra như doanh nghiệp tuyến tính", "Hiệu ứng mạng tạo rào cản gia nhập và xu hướng \"kẻ thắng lấy hết\", nhưng giai đoạn đầu thường phải trợ giá một phía để có đủ người dùng"], answer: 2, explain: "Với hiệu ứng mạng, giá trị tăng khi có thêm người dùng, tạo rào cản gia nhập; để vượt ngưỡng ban đầu, nền tảng thường trợ giá một phía. Lựa chọn \"giá trị giảm khi có thêm người dùng\" đảo ngược định nghĩa. Lựa chọn \"mua vào, chế biến, bán ra\" mô tả doanh nghiệp tuyến tính, không phải nền tảng." },
  ];

  window.LESSONS['CF-07'] = {
    moduleId: 'CF-07',
    calculator: 'Không cần máy tính',
    warmup: [
      'Ôn CF-06: công ty có dòng tiền ổn định và tài sản hữu hình thường có tỷ lệ nợ cao hay thấp? Vì sao?',
      'Ôn CF-05: ROIC tách thành hai thành phần nào?',
      'Đoán trước: chọn một công ty bạn hay dùng sản phẩm. Họ kiếm tiền từ ai, bán qua kênh nào, và vì sao bạn chọn họ thay vì đối thủ?',
    ],
    sections,
    glossary,
    practice,
    widgets: {},
    slides: [],
    wrapup: [
      'Không nhìn tài liệu: liệt kê các đặc điểm chính của một mô hình kinh doanh (Who, What, Where, How much, ...).',
      'Phân biệt marketplace, aggregator và affiliate marketing bằng một câu cho mỗi loại.',
      'Vì sao hiệu ứng mạng tạo rào cản gia nhập? Kể một ví dụ ở Việt Nam.',
    ],
  };
}());
