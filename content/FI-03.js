// Bài giảng FI-03 - Fixed-Income Issuance and Trading (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t } = window.CFAH;

  const sections = [
    {
      title: '1. Bức tranh lớn',
      minutes: 4,
      html: `
<p>Thị trường trái phiếu toàn cầu lớn hơn thị trường cổ phiếu tính theo giá trị đang lưu hành, nhưng ít được nhắc đến hơn vì phần lớn giao dịch diễn ra giữa các định chế, ngoài sàn. Module này vẽ "bản đồ" thị trường đó:</p>
<ol>
<li><b>Phân khúc</b>: chia thị trường theo issuer, chất lượng tín dụng, kỳ hạn, đồng tiền, địa lý; ai phát hành và ai mua ở từng phân khúc.</li>
<li><b>Chỉ số trái phiếu</b>: có những loại nào và vì sao chúng khác chỉ số cổ phiếu.</li>
<li><b>Thị trường sơ cấp và thứ cấp</b>: trái phiếu được bán lần đầu và mua đi bán lại thế nào, so với cổ phiếu.</li>
</ol>
<div class="key">Ý chính cần mang theo: trái phiếu <b>rất nhiều loại, phát hành thường xuyên, giao dịch chủ yếu qua dealer (OTC)</b> và kém thanh khoản hơn cổ phiếu. Hầu hết khác biệt với thị trường cổ phiếu đều suy ra từ đặc điểm này.</div>
<p class="tip">FI-04 và FI-05 sẽ đi sâu vào cách doanh nghiệp và chính phủ huy động vốn; bài này chỉ dựng khung chung.</p>`,
    },
    {
      title: '2. Phân khúc thị trường trái phiếu',
      minutes: 10,
      html: `
<p>Có thể chia thị trường trái phiếu theo nhiều tiêu chí cùng lúc. Một trái phiếu cụ thể luôn thuộc một ô ở mỗi tiêu chí.</p>
<table class="plain"><thead><tr><th>Tiêu chí</th><th>Các phân khúc</th></tr></thead><tbody>
<tr><td>Loại issuer</td><td>Chính phủ và tổ chức liên quan chính phủ (sovereign, non-sovereign, quasi-government, supranational); doanh nghiệp tài chính và phi tài chính; chứng khoán hóa (ABS, MBS)</td></tr>
<tr><td>Chất lượng tín dụng</td><td>${t('ig', 'Xếp hạng đầu tư (investment grade, IG)')} và ${t('hy', 'lợi suất cao (high yield, HY)')}</td></tr>
<tr><td>Kỳ hạn gốc</td><td>Thị trường tiền tệ (≤ 1 năm), trung hạn, dài hạn</td></tr>
<tr><td>Đồng tiền</td><td>Phần lớn bằng USD và EUR; còn lại bằng JPY, GBP, CNY và các đồng nội tệ khác</td></tr>
<tr><td>Địa lý</td><td>${t('dm', 'Thị trường phát triển (developed)')} và ${t('em', 'thị trường mới nổi (emerging)')}</td></tr>
<tr><td>Đặc điểm khác</td><td>Lãi thả nổi hay cố định, gắn lạm phát, ${t('green', 'trái phiếu xanh (green bond)')} và các trái phiếu bền vững (ESG)</td></tr>
</tbody></table>

<h4>2.1. Investment grade và high yield</h4>
<p>Các tổ chức xếp hạng tín dụng (S&amp;P, Moody's, Fitch) chấm điểm khả năng trả nợ. Ranh giới quan trọng nhất:</p>
<ul>
<li>IG: từ <b>BBB-</b> (S&amp;P, Fitch) hoặc <b>Baa3</b> (Moody's) trở lên.</li>
<li>HY (còn gọi là non-investment grade, speculative, "junk"): từ BB+ / Ba1 trở xuống.</li>
</ul>
<p>Ranh giới này quan trọng vì nhiều nhà đầu tư định chế (quỹ hưu trí, công ty bảo hiểm, ngân hàng) bị quy định hoặc điều lệ chỉ cho nắm giữ trái phiếu IG. Một trái phiếu bị hạ từ IG xuống HY, gọi là ${t('fallen', 'thiên thần sa ngã (fallen angel)')}, thường bị bán tháo và giá giảm mạnh. Trái phiếu của issuer đang hoặc sắp phá sản gọi là ${t('distressed', 'nợ khó đòi (distressed debt)')}.</p>

<h4>2.2. Kỳ hạn</h4>
<p>Công cụ ngắn hạn (≤ 1 năm) như tín phiếu kho bạc, thương phiếu, chứng chỉ tiền gửi, repo phục vụ nhu cầu thanh khoản; trái phiếu trung và dài hạn tài trợ đầu tư dài hạn. Mỗi kỳ hạn thu hút nhóm nhà đầu tư khác nhau (phần 3).</p>

<h4>2.3. Đồng tiền và địa lý</h4>
<p>Issuer ở thị trường mới nổi thường tăng trưởng nhanh hơn nhưng kém ổn định hơn, nên phải trả lợi suất cao hơn; nhiều issuer EM vay bằng USD hoặc EUR vì nhà đầu tư quốc tế muốn tránh rủi ro tỷ giá nội tệ. Issuer ở thị trường phát triển thường vay bằng đồng tiền dự trữ của chính mình.</p>
<div class="example"><div class="ex-h">Ví dụ 2.1 - Xếp ô</div>
<p>Một ngân hàng thương mại Việt Nam được Moody's xếp hạng Ba3 phát hành trái phiếu 5 năm bằng USD, lãi cố định, cho nhà đầu tư quốc tế. Trái phiếu này thuộc những phân khúc nào?</p>
<details><summary>Xem lời giải</summary><p>Issuer: doanh nghiệp tài chính. Tín dụng: Ba3 thấp hơn Baa3 nên là <b>high yield</b>. Kỳ hạn: trung hạn (capital market). Đồng tiền: USD. Địa lý: <b>emerging market</b>. Lãi: cố định.</p></details></div>`,
    },
    {
      title: '3. Người phát hành và nhà đầu tư',
      minutes: 9,
      html: `
<h4>3.1. Người phát hành</h4>
<ul>
<li><b>Chính phủ và tổ chức liên quan</b>: tài trợ thâm hụt ngân sách, hạ tầng; là issuer lớn nhất và trái phiếu của họ thường là chuẩn (benchmark) lợi suất phi rủi ro trong nước (FI-05).</li>
<li><b>Doanh nghiệp</b>: ngân hàng, công ty bảo hiểm (tài chính) và công ty sản xuất, dịch vụ (phi tài chính) vay ngắn hạn cho vốn lưu động, dài hạn cho đầu tư (FI-04).</li>
<li><b>Pháp nhân đặc biệt (SPE)</b>: phát hành chứng khoán đảm bảo bằng tài sản (FI-17 đến FI-19).</li>
</ul>
<h4>3.2. Nhà đầu tư</h4>
<table class="plain"><thead><tr><th>Nhà đầu tư</th><th>Mục tiêu</th><th>Phân khúc ưa thích</th></tr></thead><tbody>
<tr><td>${t('cb', 'Ngân hàng trung ương')}</td><td>Điều hành chính sách tiền tệ (tăng, giảm dự trữ ngân hàng), quản lý dự trữ ngoại hối</td><td>Trái phiếu chính phủ ngắn và trung hạn, repo</td></tr>
<tr><td>Quỹ hưu trí, công ty bảo hiểm</td><td>Khớp với nghĩa vụ chi trả dài hạn</td><td>Trái phiếu dài hạn, phần lớn IG</td></tr>
<tr><td>Ngân hàng, định chế trung gian</td><td>Quản lý thanh khoản và rủi ro lãi suất, tài sản đảm bảo cho repo</td><td>Trái phiếu chính phủ mọi kỳ hạn</td></tr>
<tr><td>Doanh nghiệp phi tài chính</td><td>Gửi tiền nhàn rỗi an toàn, thanh khoản</td><td>Thương phiếu, repo, quỹ thị trường tiền tệ</td></tr>
<tr><td>Quỹ đầu tư, quản lý tài sản, hedge fund</td><td>Lợi nhuận so với chỉ số chuẩn, có thể chấp nhận rủi ro cao</td><td>Mọi phân khúc, kể cả HY, EM, distressed</td></tr>
<tr><td>${t('swf', 'Quỹ đầu tư quốc gia (sovereign wealth fund)')}</td><td>Đầu tư thặng dư quốc gia dài hạn</td><td>Đa dạng, thường dài hạn</td></tr>
<tr><td>Nhà đầu tư cá nhân (retail)</td><td>Thu nhập ổn định</td><td>Chủ yếu gián tiếp qua quỹ và ETF</td></tr>
</tbody></table>
<p>Giữa issuer và nhà đầu tư là ${t('dealer', 'dealer')}, thường là ngân hàng đầu tư lớn: họ bảo lãnh phát hành ở thị trường sơ cấp và tạo lập thị trường ở thị trường thứ cấp.</p>
<p class="warn"><b>Bẫy:</b> nhà đầu tư cá nhân hiếm khi mua trực tiếp trái phiếu doanh nghiệp ở các thị trường phát triển; thị trường trái phiếu chủ yếu là thị trường của <b>định chế</b>, với lô giao dịch lớn.</p>`,
    },
    {
      title: '4. Chỉ số trái phiếu (fixed-income indexes)',
      minutes: 9,
      html: `
<p>Một ${t('index', 'chỉ số trái phiếu')} theo dõi lợi suất của một rổ trái phiếu theo quy tắc định trước. Chỉ số dùng làm chuẩn đánh giá nhà quản lý quỹ và làm cơ sở cho quỹ chỉ số, ETF.</p>
<h4>4.1. Các loại chỉ số</h4>
<table class="plain"><thead><tr><th>Loại</th><th>Ví dụ</th></tr></thead><tbody>
<tr><td>${t('aggregate', 'Chỉ số thị trường rộng (broad market / aggregate)')}</td><td>Toàn bộ trái phiếu IG của một nước hoặc toàn cầu (chính phủ, doanh nghiệp, chứng khoán hóa)</td></tr>
<tr><td>Theo phân khúc issuer</td><td>Chỉ số trái phiếu chính phủ, doanh nghiệp, MBS</td></tr>
<tr><td>Theo chất lượng tín dụng</td><td>Chỉ số IG, chỉ số HY</td></tr>
<tr><td>Theo kỳ hạn</td><td>Ngắn hạn (1-3 năm), trung hạn, dài hạn</td></tr>
<tr><td>Theo địa lý, đồng tiền</td><td>Chỉ số EM bằng USD, chỉ số EM bằng nội tệ, chỉ số toàn cầu</td></tr>
<tr><td>Chỉ số chuyên biệt</td><td>Trái phiếu gắn lạm phát, trái phiếu xanh, ESG, FRN</td></tr>
</tbody></table>
<h4>4.2. Chỉ số trái phiếu khác chỉ số cổ phiếu ở đâu?</h4>
<ul>
<li><b>Nhiều thành phần hơn nhiều</b>: một công ty có một loại cổ phiếu nhưng có thể có hàng chục đợt trái phiếu khác kỳ hạn, coupon.</li>
<li><b>Thay đổi thành phần liên tục</b> (turnover cao): trái phiếu đáo hạn, bị call, mới phát hành, bị hạ hạng ra khỏi chỉ số IG. Chỉ số thường tái cân bằng hằng tháng.</li>
<li><b>Khó định giá</b>: nhiều trái phiếu không giao dịch mỗi ngày nên giá trong chỉ số phải lấy từ báo giá dealer hoặc ${t('matrix', 'định giá ma trận (matrix pricing)')} (FI-06), không có giá khớp lệnh liên tục như cổ phiếu.</li>
<li><b>Khó sao chép</b>: mua đủ hàng nghìn trái phiếu kém thanh khoản rất tốn kém, nên quỹ chỉ số thường dùng ${t('sampling', 'chọn mẫu phân tầng (stratified sampling)')}: chọn một số trái phiếu sao cho đặc điểm (duration, tín dụng, ngành) khớp với chỉ số.</li>
<li><b>Tỷ trọng theo giá trị thị trường của nợ</b>: issuer vay càng nhiều càng có tỷ trọng lớn. Tỷ trọng các phân khúc thay đổi theo xu hướng phát hành; chính phủ thường chiếm phần lớn chỉ số rộng.</li>
</ul>
<div class="example"><div class="ex-h">Ví dụ 4.1 - Tỷ trọng theo nợ</div>
<p>Một chỉ số đơn giản chỉ gồm hai issuer: A có 200 tỷ nợ, B có 300 tỷ nợ (theo giá trị thị trường). A phát hành thêm 200 tỷ. Tỷ trọng của A thay đổi thế nào?</p>
<details><summary>Xem lời giải</summary><p>Trước: 200 / 500 = <b>40,0%</b>. Sau: 400 / (400 + 300) = <b>57,1%</b>. Issuer vay nhiều hơn (có thể rủi ro hơn) lại chiếm tỷ trọng lớn hơn: một điểm yếu thường được nhắc đến của chỉ số trái phiếu tỷ trọng theo giá trị thị trường.</p></details></div>`,
    },
    {
      title: '5. Thị trường sơ cấp',
      minutes: 10,
      html: `
<p>${t('primary', 'Thị trường sơ cấp (primary market)')} là nơi issuer bán trái phiếu mới để huy động vốn. Có hai con đường chính:</p>
<h4>5.1. Phát hành ra công chúng (public offering)</h4>
<ul>
<li>${t('underwritten', 'Bảo lãnh phát hành chắc chắn (underwritten offering)')}: ngân hàng đầu tư (hoặc tổ hợp - syndicate) <b>mua toàn bộ</b> đợt phát hành ở một giá thỏa thuận rồi bán lại cho nhà đầu tư. Ngân hàng chịu rủi ro không bán hết hoặc phải bán giá thấp hơn.</li>
<li>${t('besteff', 'Phát hành theo nỗ lực tối đa (best-efforts offering)')}: ngân hàng chỉ làm đại lý, bán được bao nhiêu thì bán, <b>không cam kết</b> giá hay khối lượng. Issuer chịu rủi ro.</li>
<li>${t('bookbuild', 'Dựng sổ lệnh (book building)')}: ngân hàng thu thập đăng ký mua của nhà đầu tư định chế để chốt giá và coupon. Trước khi phát hành chính thức, trái phiếu có thể được giao dịch trên ${t('grey', 'thị trường xám (grey market)')}, giúp phát hiện giá.</li>
<li>${t('shelf', 'Đăng ký phát hành nhiều đợt (shelf registration)')}: issuer đăng ký một lần với cơ quan quản lý rồi phát hành từng đợt trong một khoảng thời gian, không cần làm lại hồ sơ đầy đủ. Phù hợp với issuer lớn, uy tín, vay thường xuyên.</li>
<li>${t('auction', 'Đấu thầu (auction)')}: cách phát hành chính của trái phiếu chính phủ (FI-05).</li>
</ul>
<h4>5.2. Phát hành riêng lẻ (private placement)</h4>
<p>${t('private', 'Phát hành riêng lẻ')} chỉ bán cho một nhóm nhỏ nhà đầu tư định chế đủ điều kiện. Thủ tục đăng ký nhẹ hơn, điều khoản có thể đàm phán riêng (covenant chặt hơn), nhưng trái phiếu <b>kém thanh khoản</b> vì hạn chế chuyển nhượng. Ở Việt Nam, phần lớn trái phiếu doanh nghiệp giai đoạn 2019-2022 được phát hành riêng lẻ.</p>
<div class="example"><div class="ex-h">Ví dụ 5.1 - Phí bảo lãnh</div>
<p>Một tổ hợp bảo lãnh mua toàn bộ đợt trái phiếu mệnh giá 500 triệu USD ở giá 99,50 và bán lại cho nhà đầu tư ở giá 100. Issuer nhận bao nhiêu? Tổ hợp hưởng chênh lệch bao nhiêu?</p>
<details><summary>Xem lời giải</summary><p>Issuer nhận 99,50% × 500 = <b>497,5 triệu</b>. Chênh lệch (gross spread) = 0,50% × 500 = <b>2,5 triệu</b>, là thù lao cho việc gánh rủi ro bảo lãnh và phân phối. Nếu thị trường xấu đi và phải bán dưới 99,50, tổ hợp chịu lỗ.</p></details></div>
<h4>5.3. So với thị trường sơ cấp cổ phiếu</h4>
<ul>
<li>Issuer trái phiếu quay lại thị trường <b>thường xuyên hơn nhiều</b>: một ngân hàng lớn có thể có hàng trăm đợt trái phiếu đang lưu hành, trong khi IPO cổ phiếu chỉ xảy ra một lần và phát hành thêm cổ phiếu thì hiếm.</li>
<li>Người mua chủ yếu là định chế; phát hành riêng lẻ phổ biến hơn với trái phiếu.</li>
<li>Định giá trái phiếu mới dễ hơn: so với lợi suất của các trái phiếu hiện có của chính issuer đó hoặc issuer tương tự, cộng một khoản bù phát hành mới nhỏ.</li>
</ul>`,
    },
    {
      title: '6. Thị trường thứ cấp',
      minutes: 8,
      html: `
<p>${t('secondary', 'Thị trường thứ cấp (secondary market)')} là nơi nhà đầu tư mua bán lại trái phiếu đã phát hành. Với trái phiếu, đây chủ yếu là ${t('otc', 'thị trường phi tập trung (OTC)')} dựa trên ${t('dealer', 'dealer')}: nhà đầu tư hỏi giá, dealer báo giá mua (bid) và giá bán (ask) và dùng chính bảng cân đối của mình để mua vào hoặc bán ra (thị trường ${t('quote', 'khớp theo báo giá (quote-driven)')}).</p>
<div class="example"><div class="ex-h">Ví dụ 6.1 - Chênh lệch giá mua - bán</div>
<p>Dealer báo giá một trái phiếu doanh nghiệp: bid 98,40 / ask 98,65. Nhà đầu tư mua 5 triệu USD mệnh giá rồi bán lại ngay. Chi phí giao dịch là bao nhiêu? Chênh lệch tính theo bps của giá giữa là bao nhiêu?</p>
<details><summary>Xem lời giải</summary><p>Chênh lệch = 98,65 - 98,40 = 0,25 trên 100 mệnh giá. Chi phí = 0,25% × 5.000.000 = <b>12.500 USD</b>. Giá giữa = 98,525; chênh lệch = 0,25 / 98,525 = <b>25,4 bps</b>. So sánh: cổ phiếu lớn giá 50,00 / 50,02 có chênh lệch chỉ khoảng 4 bps.</p></details></div>
<h4>Đặc điểm cần nhớ</h4>
<ul>
<li>${t('liquidity', 'Thanh khoản')} thấp hơn cổ phiếu: nhiều trái phiếu chỉ giao dịch sôi động vài tuần sau phát hành rồi nằm trong danh mục "mua và giữ" của định chế. Trái phiếu chính phủ mới phát hành gần nhất (on-the-run) thanh khoản nhất.</li>
<li>Chênh lệch bid-ask rộng hơn với trái phiếu nhỏ, cũ, tín dụng thấp, và nới rộng khi thị trường căng thẳng.</li>
<li>Minh bạch giá tăng dần nhờ yêu cầu báo cáo giao dịch (ví dụ hệ thống TRACE ở Mỹ) và giao dịch điện tử (nền tảng hỏi giá nhiều dealer, request for quote).</li>
<li>${t('settle', 'Thời gian thanh toán (settlement)')} thường T+1 với trái phiếu chính phủ và T+1 hoặc T+2 với trái phiếu doanh nghiệp tùy thị trường. Giao dịch thị trường tiền tệ có thể thanh toán ngay trong ngày.</li>
</ul>
<p class="tip"><b>Ví dụ Việt Nam:</b> trái phiếu chính phủ giao dịch thứ cấp trên HNX; từ năm 2023 trái phiếu doanh nghiệp phát hành riêng lẻ cũng có hệ thống giao dịch tập trung tại HNX dành cho nhà đầu tư chuyên nghiệp.</p>`,
    },
    {
      title: '7. Tóm tắt và bẫy thường gặp',
      minutes: 5,
      html: `
<h4>Trái phiếu và cổ phiếu: thị trường khác nhau ở đâu</h4>
<table class="plain"><thead><tr><th>Khía cạnh</th><th>Trái phiếu</th><th>Cổ phiếu</th></tr></thead><tbody>
<tr><td>Số lượng chứng khoán / issuer</td><td>Nhiều đợt, nhiều kỳ hạn mỗi issuer</td><td>Thường một loại cổ phiếu phổ thông</td></tr>
<tr><td>Tần suất phát hành</td><td>Thường xuyên, issuer quay lại liên tục; shelf registration</td><td>IPO một lần, phát hành thêm hiếm</td></tr>
<tr><td>Kênh phát hành</td><td>Bảo lãnh, riêng lẻ, đấu thầu (chính phủ)</td><td>IPO, phát hành thêm, riêng lẻ</td></tr>
<tr><td>Nơi giao dịch thứ cấp</td><td>OTC, dealer, quote-driven</td><td>Chủ yếu sở giao dịch, order-driven</td></tr>
<tr><td>Thanh khoản, chênh lệch bid-ask</td><td>Thấp hơn, chênh lệch rộng hơn</td><td>Cao hơn, chênh lệch hẹp</td></tr>
<tr><td>Định giá chỉ số</td><td>Báo giá dealer, matrix pricing</td><td>Giá khớp lệnh liên tục</td></tr>
<tr><td>Thành phần chỉ số</td><td>Rất nhiều, thay đổi liên tục; khó sao chép</td><td>Ít hơn, ổn định hơn</td></tr>
</tbody></table>
<table class="plain"><thead><tr><th>Bẫy</th><th>Nhớ</th></tr></thead><tbody>
<tr><td>BBB- / Baa3</td><td>Vẫn là IG (bậc thấp nhất); BB+ / Ba1 trở xuống là HY</td></tr>
<tr><td>Fallen angel</td><td>Bị hạ từ IG xuống HY, không phải issuer HY mới</td></tr>
<tr><td>Underwritten và best-efforts</td><td>Underwritten: ngân hàng gánh rủi ro; best-efforts: issuer gánh</td></tr>
<tr><td>Private placement</td><td>Thủ tục nhẹ, kém thanh khoản, nhà đầu tư đủ điều kiện</td></tr>
<tr><td>Tỷ trọng chỉ số</td><td>Theo giá trị nợ: vay nhiều hơn thì tỷ trọng lớn hơn</td></tr>
</tbody></table>
<p>Tiếp theo: tab <b>Luyện tập</b> - 10 câu (rút ngẫu nhiên từ ngân hàng 30 câu, mỗi lần làm một bộ khác). FI-04: doanh nghiệp và định chế tài chính huy động vốn ngắn hạn và dài hạn thế nào.</p>`,
    },
  ];

  const glossary = {
    ig: ['Investment grade (IG)', 'Xếp hạng đầu tư', 'Xếp hạng từ BBB- (S&P, Fitch) hoặc Baa3 (Moody\'s) trở lên.'],
    hy: ['High yield (HY)', 'Lợi suất cao', 'Xếp hạng từ BB+ / Ba1 trở xuống; còn gọi là non-investment grade, speculative.'],
    dm: ['Developed market', 'Thị trường phát triển', 'Nền kinh tế thu nhập cao, thể chế ổn định, thường vay bằng đồng tiền dự trữ.'],
    em: ['Emerging market', 'Thị trường mới nổi', 'Nền kinh tế tăng trưởng nhanh nhưng kém ổn định hơn; lợi suất thường cao hơn.'],
    green: ['Green bond', 'Trái phiếu xanh', 'Trái phiếu dùng vốn cho dự án môi trường, bền vững.'],
    fallen: ['Fallen angel', 'Thiên thần sa ngã', 'Trái phiếu bị hạ hạng từ IG xuống HY.'],
    distressed: ['Distressed debt', 'Nợ khó đòi', 'Trái phiếu của issuer đang hoặc gần phá sản.'],
    cb: ['Central bank', 'Ngân hàng trung ương', 'Dùng trái phiếu chính phủ và repo để điều hành chính sách tiền tệ.'],
    swf: ['Sovereign wealth fund', 'Quỹ đầu tư quốc gia', 'Quỹ của nhà nước đầu tư thặng dư quốc gia dài hạn.'],
    dealer: ['Dealer', 'Dealer', 'Định chế mua bán trái phiếu bằng chính bảng cân đối của mình, báo giá bid và ask.'],
    index: ['Fixed-income index', 'Chỉ số trái phiếu', 'Rổ trái phiếu theo quy tắc định trước, dùng làm chuẩn so sánh và cơ sở cho quỹ chỉ số.'],
    aggregate: ['Broad market (aggregate) index', 'Chỉ số thị trường rộng', 'Chỉ số bao gồm hầu hết trái phiếu IG của một thị trường hoặc toàn cầu.'],
    matrix: ['Matrix pricing', 'Định giá ma trận', 'Ước tính giá trái phiếu ít giao dịch từ lợi suất của các trái phiếu tương tự.'],
    sampling: ['Stratified sampling', 'Chọn mẫu phân tầng', 'Chọn một số trái phiếu để đặc điểm danh mục khớp với chỉ số thay vì mua toàn bộ.'],
    primary: ['Primary market', 'Thị trường sơ cấp', 'Nơi issuer bán chứng khoán mới để huy động vốn.'],
    underwritten: ['Underwritten offering', 'Bảo lãnh phát hành chắc chắn', 'Ngân hàng đầu tư mua toàn bộ đợt phát hành ở giá thỏa thuận rồi bán lại.'],
    besteff: ['Best-efforts offering', 'Phát hành theo nỗ lực tối đa', 'Ngân hàng chỉ làm đại lý bán, không cam kết giá hay khối lượng.'],
    bookbuild: ['Book building', 'Dựng sổ lệnh', 'Thu thập đăng ký mua của nhà đầu tư để chốt giá và quy mô phát hành.'],
    grey: ['Grey market', 'Thị trường xám', 'Giao dịch kỳ hạn trái phiếu sắp phát hành, giúp phát hiện giá.'],
    shelf: ['Shelf registration', 'Đăng ký phát hành nhiều đợt', 'Đăng ký một lần rồi phát hành từng đợt trong một khoảng thời gian.'],
    auction: ['Auction', 'Đấu thầu', 'Cách bán trái phiếu, chủ yếu của chính phủ, qua đặt thầu giá hoặc lợi suất.'],
    private: ['Private placement', 'Phát hành riêng lẻ', 'Bán cho một nhóm nhỏ nhà đầu tư đủ điều kiện, thủ tục nhẹ, kém thanh khoản.'],
    secondary: ['Secondary market', 'Thị trường thứ cấp', 'Nơi mua bán lại chứng khoán đã phát hành.'],
    otc: ['Over-the-counter (OTC) market', 'Thị trường phi tập trung', 'Thị trường phân tán, giao dịch qua dealer thay vì qua sở giao dịch.'],
    quote: ['Quote-driven market', 'Thị trường khớp theo báo giá', 'Nhà đầu tư giao dịch với dealer theo giá dealer báo.'],
    liquidity: ['Liquidity', 'Thanh khoản', 'Khả năng mua bán nhanh, khối lượng lớn mà không làm giá thay đổi nhiều.'],
    settle: ['Settlement', 'Thanh toán giao dịch', 'Việc chuyển tiền và chứng khoán sau khi giao dịch; ví dụ T+1 là một ngày làm việc sau.'],
  };

  const practice = [
    { q: 'Một trái phiếu được S&P xếp hạng BBB- thuộc nhóm:', choices: ['Investment grade', 'High yield', 'Distressed debt'], answer: 0, explain: 'BBB- là bậc thấp nhất của investment grade. High yield sai: HY bắt đầu từ BB+. Distressed debt sai: distressed là issuer đang hoặc gần phá sản.' },
    { q: '"Fallen angel" là:', choices: ['Trái phiếu của một issuer HY phát hành lần đầu', 'Trái phiếu xanh bị hủy chứng nhận', 'Trái phiếu của issuer bị hạ hạng từ investment grade xuống high yield'], answer: 2, explain: 'Fallen angel là trái phiếu từng là IG nay bị hạ xuống HY, thường bị các định chế chỉ được giữ IG bán ra. Phương án issuer HY phát hành lần đầu chỉ là issuer HY mới, không phải "sa ngã". Phương án trái phiếu xanh bị hủy chứng nhận không liên quan đến xếp hạng.' },
    { q: 'Một công ty bảo hiểm nhân thọ có nghĩa vụ chi trả kéo dài 20-30 năm NHIỀU KHẢ NĂNG đầu tư chủ yếu vào:', choices: ['Thương phiếu ngắn hạn', 'Trái phiếu dài hạn xếp hạng đầu tư', 'Nợ khó đòi'], answer: 1, explain: 'Nghĩa vụ dài hạn được khớp bằng tài sản dài hạn, chất lượng cao. Thương phiếu ngắn hạn là lựa chọn của doanh nghiệp gửi tiền nhàn rỗi. Nợ khó đòi quá rủi ro và thường bị quy định hạn chế với bảo hiểm.' },
    { q: 'So với chỉ số cổ phiếu, chỉ số trái phiếu thường:', choices: ['Có ít thành phần hơn và ít thay đổi thành phần hơn', 'Có nhiều thành phần hơn và thay đổi thành phần thường xuyên hơn', 'Được định giá bằng giá khớp lệnh liên tục trên sở giao dịch'], answer: 1, explain: 'Mỗi issuer có nhiều đợt trái phiếu; trái phiếu đáo hạn, bị call và phát hành mới liên tục. Phương án "ít thành phần hơn" ngược với thực tế. Phương án "giá khớp lệnh liên tục" sai: nhiều trái phiếu không giao dịch hằng ngày, phải dùng báo giá dealer hoặc matrix pricing.' },
    { q: 'Một chỉ số tỷ trọng theo giá trị thị trường chỉ gồm issuer A (nợ 200) và issuer B (nợ 300). A phát hành thêm 200. Tỷ trọng mới của A gần nhất với:', choices: ['57,1%', '40,0%', '80,0%'], answer: 0, explain: '400 / (400 + 300) = 57,1%. Lựa chọn 40,0% là tỷ trọng cũ. Lựa chọn 80,0% chia 400 cho tổng cũ 500, quên rằng tổng nợ trong chỉ số cũng tăng lên 700.' },
    { q: 'Trong một đợt phát hành best-efforts, ngân hàng đầu tư:', choices: ['Mua toàn bộ đợt phát hành ở giá thỏa thuận rồi bán lại', 'Bán toàn bộ đợt cho một nhà đầu tư duy nhất qua phát hành riêng lẻ', 'Cố gắng bán càng nhiều càng tốt nhưng không cam kết giá hay khối lượng'], answer: 2, explain: 'Best-efforts: ngân hàng là đại lý, rủi ro không bán hết thuộc về issuer. Phương án mua toàn bộ rồi bán lại là underwritten offering. Phương án bán cho một nhà đầu tư duy nhất là private placement, một kênh khác.' },
    { q: 'Tổ hợp bảo lãnh mua đợt trái phiếu mệnh giá 300 triệu ở giá 99,25 và bán lại ở giá 100. Chênh lệch tổ hợp hưởng là:', choices: ['2,25 triệu', '297,75 triệu', '0,75 triệu'], answer: 0, explain: '(100 - 99,25)% × 300 = 0,75% × 300 = 2,25 triệu. Lựa chọn 297,75 triệu là số tiền issuer nhận được. Lựa chọn 0,75 triệu là lấy 0,75 làm triệu mà quên nhân với quy mô 300 triệu theo %.' },
    { q: 'Phát biểu nào mô tả ĐÚNG thị trường thứ cấp trái phiếu so với cổ phiếu?', choices: ['Chủ yếu giao dịch trên sở giao dịch theo cơ chế khớp lệnh', 'Chênh lệch giá mua - bán thường hẹp hơn', 'Chủ yếu là thị trường OTC qua dealer, nhiều trái phiếu giao dịch không thường xuyên'], answer: 2, explain: 'Trái phiếu chủ yếu giao dịch OTC, quote-driven, thanh khoản thấp hơn. Giao dịch trên sở theo cơ chế khớp lệnh là đặc điểm của cổ phiếu. Phương án chênh lệch hẹp hơn thì ngược lại: bid-ask trái phiếu thường rộng hơn.' },
    { q: 'Dealer báo giá trái phiếu 101,10 / 101,35. Nhà đầu tư mua 2 triệu USD mệnh giá rồi bán lại ngay. Chi phí giao dịch là:', choices: ['2.500 USD', '5.000 USD', '10.000 USD'], answer: 1, explain: 'Chênh lệch 0,25 trên 100 mệnh giá: 0,25% × 2.000.000 = 5.000. Lựa chọn 2.500 USD chỉ tính nửa chênh lệch (một chiều so với giá giữa). Lựa chọn 10.000 USD tính chênh lệch hai lần cho hai chiều mua và bán.' },
    { q: 'So với thị trường sơ cấp cổ phiếu, thị trường sơ cấp trái phiếu có đặc điểm:', choices: ['Issuer phát hành thường xuyên hơn nhiều, mỗi issuer có thể có nhiều đợt đang lưu hành', 'Mỗi issuer thường chỉ phát hành trái phiếu một lần trong đời', 'Không cho phép phát hành riêng lẻ'], answer: 0, explain: 'Trái phiếu đáo hạn và phải tái tài trợ nên issuer quay lại thường xuyên, dùng cả shelf registration. Phương án "chỉ phát hành một lần" mô tả IPO cổ phiếu. Phương án "không cho phép phát hành riêng lẻ" sai: phát hành riêng lẻ rất phổ biến với trái phiếu.' },
    { q: "Một trái phiếu doanh nghiệp được Moody's xếp hạng Ba1. Trái phiếu này thuộc nhóm:", choices: ["Investment grade bậc thấp nhất", "High yield", "Distressed debt"], answer: 1, explain: "Ranh giới IG của Moody's là Baa3; Ba1 là bậc ngay dưới Baa3 nên thuộc high yield (non-investment grade). Phương án \"investment grade bậc thấp nhất\" là Baa3 (hoặc BBB- của S&P, Fitch). Distressed debt chỉ trái phiếu của issuer đang hoặc sắp phá sản, không đồng nghĩa với mọi trái phiếu HY." },
    { q: "Một doanh nghiệp sản xuất có lượng tiền mặt nhàn rỗi lớn cần dùng trong 3 tháng tới. Doanh nghiệp này nhiều khả năng đầu tư vào:", choices: ["Trái phiếu chính phủ 30 năm", "Trái phiếu high yield của thị trường mới nổi", "Thương phiếu và repo ngắn hạn"], answer: 2, explain: "Doanh nghiệp phi tài chính đầu tư tiền nhàn rỗi với mục tiêu an toàn và thanh khoản, nên chọn công cụ thị trường tiền tệ như thương phiếu, repo, quỹ thị trường tiền tệ. Trái phiếu chính phủ 30 năm có rủi ro lãi suất lớn, không khớp nhu cầu 3 tháng. Trái phiếu HY thị trường mới nổi rủi ro tín dụng cao, không phù hợp mục tiêu an toàn." },
    { q: "Ngân hàng trung ương tham gia thị trường trái phiếu chủ yếu để:", choices: ["Tối đa hóa lợi nhuận so với một chỉ số chuẩn bằng trái phiếu high yield", "Khớp kỳ hạn với nghĩa vụ chi trả hưu trí dài hạn", "Thực thi chính sách tiền tệ, điều chỉnh dự trữ của hệ thống ngân hàng qua mua bán trái phiếu chính phủ và repo"], answer: 2, explain: "Ngân hàng trung ương mua bán trái phiếu chính phủ và dùng repo để tăng, giảm dự trữ ngân hàng, đồng thời quản lý dự trữ ngoại hối. Mục tiêu lợi nhuận so với chỉ số chuẩn là của quỹ đầu tư, hedge fund. Khớp nghĩa vụ chi trả dài hạn là mục tiêu của quỹ hưu trí và công ty bảo hiểm." },
    { q: "Khi một trái phiếu bị hạ hạng từ BBB- xuống BB+, giá của nó thường giảm mạnh hơn mức mà riêng thay đổi rủi ro tín dụng giải thích được. Lý do chính là:", choices: ["Nhiều nhà đầu tư định chế bị quy định chỉ được nắm giữ trái phiếu investment grade nên buộc phải bán", "Trái phiếu tự động bị issuer mua lại ở mệnh giá", "Coupon của trái phiếu bị giảm theo xếp hạng mới"], answer: 0, explain: "BB+ nằm dưới ranh giới IG, trái phiếu trở thành fallen angel. Quỹ hưu trí, công ty bảo hiểm, ngân hàng bị giới hạn chỉ nắm IG nên phải bán cùng lúc, tạo áp lực bán. Phương án \"tự động bị mua lại ở mệnh giá\" sai: hạ hạng không kích hoạt việc mua lại thông thường, và mua lại ở mệnh giá sẽ không làm giá giảm. Phương án coupon giảm ngược chiều: nếu có điều khoản credit-linked thì coupon tăng khi bị hạ hạng." },
    { q: "Nhiều issuer ở thị trường mới nổi phát hành trái phiếu bằng USD hoặc EUR thay vì nội tệ chủ yếu vì:", choices: ["Trái phiếu bằng USD không có rủi ro tín dụng", "Nhà đầu tư quốc tế muốn tránh rủi ro tỷ giá của đồng nội tệ", "Luật quốc tế cấm issuer thị trường mới nổi phát hành bằng nội tệ"], answer: 1, explain: "Nhà đầu tư quốc tế ngại rủi ro tỷ giá và tính kém ổn định của đồng nội tệ thị trường mới nổi, nên issuer vay bằng đồng tiền dự trữ để tiếp cận nguồn vốn rộng hơn (và tự gánh rủi ro tỷ giá). Phương án \"không có rủi ro tín dụng\" sai: rủi ro tín dụng phụ thuộc issuer, không phụ thuộc đồng tiền. Không có quy định nào cấm phát hành bằng nội tệ." },
    { q: "Ở các thị trường phát triển, nhà đầu tư cá nhân thường tiếp cận trái phiếu doanh nghiệp bằng cách nào?", choices: ["Chủ yếu mua trực tiếp từng trái phiếu trên sở giao dịch", "Chủ yếu tham gia đấu thầu sơ cấp do issuer tổ chức", "Chủ yếu gián tiếp qua quỹ đầu tư và ETF trái phiếu"], answer: 2, explain: "Thị trường trái phiếu chủ yếu là thị trường của định chế với lô giao dịch lớn; nhà đầu tư cá nhân thường sở hữu trái phiếu gián tiếp qua quỹ và ETF. Phương án mua trực tiếp trên sở giao dịch sai vì trái phiếu giao dịch chủ yếu OTC qua dealer. Đấu thầu là cách phát hành chính của trái phiếu chính phủ, và người tham gia chủ yếu là dealer, định chế." },
    { q: "Một chỉ số trái phiếu tỷ trọng theo giá trị thị trường gồm ba issuer: X có nợ 150, Y có nợ 250, Z có nợ 100 (tỷ USD, giá trị thị trường). Z phát hành thêm 150. Tỷ trọng mới của Z gần nhất với:", choices: ["38,5%", "20,0%", "50,0%"], answer: 0, explain: "Sau phát hành, nợ của Z = 100 + 150 = 250 và tổng chỉ số = 500 + 150 = 650; tỷ trọng = 250 / 650 = 38,5%. Lựa chọn 20,0% là tỷ trọng cũ (100 / 500). Lựa chọn 50,0% cập nhật tử số nhưng quên cộng 150 vào tổng (250 / 500)." },
    { q: "Một chỉ trích thường gặp đối với chỉ số trái phiếu tỷ trọng theo giá trị thị trường là:", choices: ["Issuer có vốn hóa cổ phiếu lớn nhất luôn chiếm tỷ trọng lớn nhất", "Issuer vay nợ càng nhiều, có thể càng rủi ro, lại chiếm tỷ trọng càng lớn trong chỉ số", "Mọi issuer có tỷ trọng bằng nhau bất kể quy mô nợ"], answer: 1, explain: "Tỷ trọng theo giá trị nợ đang lưu hành nên issuer vay càng nhiều thì tỷ trọng càng lớn, dù đòn bẩy cao hơn có thể nghĩa là rủi ro hơn. Phương án vốn hóa cổ phiếu sai: chỉ số trái phiếu dựa trên giá trị nợ, không phải vốn hóa. Phương án tỷ trọng bằng nhau mô tả chỉ số equal-weighted, không phải market-value-weighted." },
    { q: "Một quỹ chỉ số trái phiếu muốn bám sát một chỉ số gồm hơn 10.000 trái phiếu, nhiều trái phiếu kém thanh khoản. Cách tiếp cận phù hợp nhất là:", choices: ["Mua đầy đủ mọi trái phiếu trong chỉ số theo đúng tỷ trọng", "Chỉ mua 10 trái phiếu có lợi suất cao nhất trong chỉ số", "Chọn mẫu phân tầng (stratified sampling): nắm một số trái phiếu sao cho duration, tín dụng, ngành khớp với chỉ số"], answer: 2, explain: "Sao chép đầy đủ hàng nghìn trái phiếu kém thanh khoản rất tốn kém và đôi khi không thể, nên quỹ dùng stratified sampling để khớp các đặc điểm rủi ro chính. Phương án mua đầy đủ không thực tế với chỉ số trái phiếu lớn. Chỉ mua trái phiếu lợi suất cao nhất làm lệch rủi ro tín dụng và không bám chỉ số." },
    { q: "Vì sao việc định giá các thành phần của một chỉ số trái phiếu doanh nghiệp khó hơn chỉ số cổ phiếu?", choices: ["Nhiều trái phiếu không giao dịch hằng ngày, nên giá phải lấy từ báo giá dealer hoặc định giá ma trận", "Trái phiếu doanh nghiệp đều niêm yết trên sở giao dịch nhưng chỉ khớp lệnh mỗi tuần một lần", "Giá trái phiếu được yết theo phần trăm mệnh giá thay vì theo đơn vị tiền tệ"], answer: 0, explain: "Phần lớn trái phiếu giao dịch OTC và không thường xuyên, nên nhà cung cấp chỉ số dùng báo giá dealer hoặc matrix pricing (dựa trên trái phiếu tương tự có giao dịch). Phương án \"niêm yết và khớp mỗi tuần một lần\" sai về cơ chế: trái phiếu chủ yếu giao dịch OTC. Yết giá theo phần trăm mệnh giá chỉ là quy ước, không làm việc định giá khó hơn." },
    { q: "Một nhà quản lý quỹ chỉ đầu tư vào trái phiếu chính phủ các nước thị trường mới nổi phát hành bằng USD. Chỉ số chuẩn phù hợp nhất để đánh giá quỹ là:", choices: ["Chỉ số trái phiếu tổng hợp (aggregate) toàn cầu investment grade", "Chỉ số trái phiếu chính phủ thị trường mới nổi bằng USD", "Chỉ số trái phiếu doanh nghiệp high yield của Mỹ"], answer: 1, explain: "Chỉ số chuẩn phải khớp với phân khúc đầu tư: issuer chính phủ, địa lý thị trường mới nổi, đồng tiền USD. Chỉ số aggregate toàn cầu IG bao gồm chủ yếu trái phiếu thị trường phát triển và nhiều đồng tiền. Chỉ số HY doanh nghiệp Mỹ sai cả loại issuer lẫn địa lý." },
    { q: "Tổ hợp bảo lãnh mua toàn bộ đợt trái phiếu mệnh giá 800 triệu USD ở giá 99,40 và bán lại cho nhà đầu tư ở giá 100. Số tiền issuer nhận được là:", choices: ["804,8 triệu USD", "4,8 triệu USD", "795,2 triệu USD"], answer: 2, explain: "Issuer nhận giá tổ hợp trả: 99,40% × 800 = 795,2 triệu USD. Phần chênh 0,60% × 800 = 4,8 triệu USD là gross spread của tổ hợp, không phải tiền issuer nhận. Lựa chọn 804,8 triệu USD cộng chênh lệch thay vì trừ." },
    { q: "Một tổ hợp bảo lãnh chắc chắn mua đợt trái phiếu mệnh giá 400 triệu USD ở giá 99,50, dự kiến bán lại ở 100. Thị trường xấu đi và tổ hợp chỉ bán được ở giá 99,10. Kết quả của tổ hợp là:", choices: ["Lỗ 1,6 triệu USD", "Lỗ 3,6 triệu USD", "Lãi 2,0 triệu USD"], answer: 0, explain: "Tổ hợp mua 99,50 và bán 99,10: lỗ 0,40% × 400 = 1,6 triệu USD. Trong bảo lãnh chắc chắn, rủi ro giá thuộc về tổ hợp chứ không phải issuer. Lựa chọn lỗ 3,6 triệu USD so giá bán với mệnh giá 100 thay vì giá mua 99,50. Lựa chọn lãi 2,0 triệu USD là gross spread dự kiến (0,50% × 400), chỉ đạt được nếu bán được ở 100." },
    { q: "Trong một đợt phát hành trái phiếu qua bảo lãnh, thị trường xám (grey market) là:", choices: ["Thị trường giao dịch trái phiếu đã bị hạ xuống high yield", "Giao dịch trái phiếu trước khi phát hành chính thức, giúp phát hiện giá", "Kênh phát hành riêng lẻ cho nhà đầu tư chuyên nghiệp"], answer: 1, explain: "Grey market là giao dịch kỳ hạn trên trái phiếu sắp phát hành, trước ngày phát hành chính thức; nó giúp ngân hàng và issuer chốt giá, coupon. Trái phiếu bị hạ xuống HY là fallen angel, không liên quan đến grey market. Kênh bán cho nhà đầu tư chuyên nghiệp là private placement." },
    { q: "Hình thức phát hành nào phù hợp nhất với một ngân hàng lớn, uy tín, cần huy động vốn qua trái phiếu nhiều lần trong 3 năm tới mà không muốn lập hồ sơ đầy đủ cho mỗi đợt?", choices: ["Best-efforts offering", "Đấu thầu (auction)", "Shelf registration"], answer: 2, explain: "Shelf registration cho phép issuer đăng ký một lần rồi phát hành từng đợt trong một khoảng thời gian, phù hợp với issuer lớn, vay thường xuyên. Best-efforts là cách ngân hàng đầu tư bán đợt phát hành (không cam kết), không giải quyết việc lập hồ sơ nhiều lần. Đấu thầu là kênh phát hành chính của trái phiếu chính phủ." },
    { q: "So với trái phiếu phát hành ra công chúng, trái phiếu phát hành riêng lẻ (private placement) thường:", choices: ["Kém thanh khoản hơn và có điều khoản, covenant được đàm phán riêng với nhà đầu tư", "Thanh khoản hơn vì được niêm yết trên sở giao dịch", "Phải đăng ký và công bố thông tin đầy đủ hơn với cơ quan quản lý"], answer: 0, explain: "Private placement chỉ bán cho một nhóm nhỏ nhà đầu tư định chế đủ điều kiện, thủ tục đăng ký nhẹ, điều khoản linh hoạt (thường covenant chặt hơn), nhưng bị hạn chế chuyển nhượng nên kém thanh khoản. Phương án \"thanh khoản hơn\" ngược lại. Phương án \"đăng ký và công bố đầy đủ hơn\" mô tả phát hành ra công chúng." },
    { q: "Dealer báo giá một trái phiếu doanh nghiệp: bid 97,80 / ask 98,10. Chênh lệch giá mua - bán tính theo điểm cơ bản của giá giữa gần nhất với:", choices: ["30,0 bps", "30,6 bps", "15,3 bps"], answer: 1, explain: "Chênh lệch = 98,10 - 97,80 = 0,30; giá giữa = 97,95; chênh lệch = 0,30 / 97,95 = 30,6 bps. Lựa chọn 30,0 bps chia cho mệnh giá 100 thay vì giá giữa. Lựa chọn 15,3 bps là nửa chênh lệch, tức khoảng cách từ giá giữa đến một phía." },
    { q: "Trái phiếu nào sau đây nhiều khả năng có chênh lệch giá mua - bán RỘNG NHẤT?", choices: ["Trái phiếu chính phủ Mỹ 10 năm on-the-run", "Trái phiếu investment grade quy mô lớn của một doanh nghiệp đầu ngành, mới phát hành tuần trước", "Trái phiếu high yield của một doanh nghiệp nhỏ, phát hành 6 năm trước, quy mô đợt phát hành nhỏ"], answer: 2, explain: "Chênh lệch bid-ask rộng hơn với trái phiếu nhỏ, cũ, tín dụng thấp vì dealer khó tìm người mua lại và chịu rủi ro tồn kho lớn hơn. Trái phiếu chính phủ on-the-run là trái phiếu thanh khoản nhất thị trường. Trái phiếu IG quy mô lớn mới phát hành thường giao dịch sôi động trong vài tuần đầu." },
    { q: "Một doanh nghiệp xếp hạng A chuẩn bị phát hành trái phiếu 7 năm mới. Trái phiếu 7 năm hiện có của chính doanh nghiệp này đang có lợi suất 5,35%. Ngân hàng đầu tư ước tính cần một khoản bù phát hành mới (new issue concession) 10 bps. Coupon hợp lý cho đợt phát hành mới (bán ở mệnh giá) gần nhất với:", choices: ["5,45%", "5,25%", "5,35%"], answer: 0, explain: "Trái phiếu mới được định giá theo lợi suất trái phiếu hiện có của cùng issuer cộng một khoản bù nhỏ để thu hút nhà đầu tư: 5,35% + 0,10% = 5,45%. Lựa chọn 5,25% trừ khoản bù thay vì cộng. Lựa chọn 5,35% bỏ qua khoản bù phát hành mới. Đây là lý do định giá trái phiếu mới dễ hơn định giá IPO cổ phiếu." },
    { q: "Yêu cầu báo cáo giao dịch sau khi khớp (ví dụ hệ thống TRACE ở Mỹ) tác động thế nào đến thị trường thứ cấp trái phiếu doanh nghiệp?", choices: ["Chuyển giao dịch trái phiếu từ OTC sang khớp lệnh tập trung trên sở giao dịch", "Tăng tính minh bạch về giá giao dịch", "Loại bỏ chênh lệch giá mua - bán của dealer"], answer: 1, explain: "Báo cáo giao dịch giúp nhà đầu tư thấy giá và khối lượng đã giao dịch, tăng minh bạch giá. Nó không thay đổi cơ chế: trái phiếu vẫn giao dịch chủ yếu OTC qua dealer. Chênh lệch bid-ask vẫn tồn tại vì dealer cần được bù cho việc cung cấp thanh khoản và rủi ro tồn kho." },
  ];

  window.LESSONS['FI-03'] = {
    moduleId: 'FI-03',
    calculator: 'Không cần máy tính',
    warmup: [
      'Nhớ lại FI-02: foreign bond, Eurobond và global bond khác nhau thế nào?',
      'Bạn đã từng mua trái phiếu doanh nghiệp ở Việt Nam chưa, hoặc nghe về đợt phát hành riêng lẻ nào? Ai thường mua chúng?',
      'Đoán trước: vì sao rất ít trái phiếu được niêm yết và khớp lệnh trên sàn như cổ phiếu?',
    ],
    sections,
    glossary,
    practice,
    widgets: {},
    slides: [],
    wrapup: [
      'Kể 6 tiêu chí phân khúc thị trường trái phiếu và cho một ví dụ cho mỗi tiêu chí.',
      'Nêu 4 điểm khiến chỉ số trái phiếu khác chỉ số cổ phiếu.',
      'So sánh thị trường sơ cấp và thứ cấp của trái phiếu với cổ phiếu, mỗi thị trường 2 điểm.',
    ],
  };
}());
