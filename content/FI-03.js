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
<p>Tiếp theo: tab <b>Luyện tập</b> - 10 câu. FI-04: doanh nghiệp và định chế tài chính huy động vốn ngắn hạn và dài hạn thế nào.</p>`,
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
    { q: 'Một trái phiếu được S&P xếp hạng BBB- thuộc nhóm:', choices: ['Investment grade', 'High yield', 'Distressed debt'], answer: 0, explain: 'BBB- là bậc thấp nhất của investment grade. B sai: HY bắt đầu từ BB+. C sai: distressed là issuer đang hoặc gần phá sản.' },
    { q: '"Fallen angel" là:', choices: ['Trái phiếu của một issuer HY phát hành lần đầu', 'Trái phiếu xanh bị hủy chứng nhận', 'Trái phiếu của issuer bị hạ hạng từ investment grade xuống high yield'], answer: 2, explain: 'Fallen angel là trái phiếu từng là IG nay bị hạ xuống HY, thường bị các định chế chỉ được giữ IG bán ra. A là issuer HY mới, không phải "sa ngã". B không liên quan đến xếp hạng.' },
    { q: 'Một công ty bảo hiểm nhân thọ có nghĩa vụ chi trả kéo dài 20-30 năm NHIỀU KHẢ NĂNG đầu tư chủ yếu vào:', choices: ['Thương phiếu ngắn hạn', 'Trái phiếu dài hạn xếp hạng đầu tư', 'Nợ khó đòi'], answer: 1, explain: 'Nghĩa vụ dài hạn được khớp bằng tài sản dài hạn, chất lượng cao. A là lựa chọn của doanh nghiệp gửi tiền nhàn rỗi. C quá rủi ro và thường bị quy định hạn chế với bảo hiểm.' },
    { q: 'So với chỉ số cổ phiếu, chỉ số trái phiếu thường:', choices: ['Có ít thành phần hơn và ít thay đổi thành phần hơn', 'Có nhiều thành phần hơn và thay đổi thành phần thường xuyên hơn', 'Được định giá bằng giá khớp lệnh liên tục trên sở giao dịch'], answer: 1, explain: 'Mỗi issuer có nhiều đợt trái phiếu; trái phiếu đáo hạn, bị call và phát hành mới liên tục. A ngược với thực tế. C sai: nhiều trái phiếu không giao dịch hằng ngày, phải dùng báo giá dealer hoặc matrix pricing.' },
    { q: 'Một chỉ số tỷ trọng theo giá trị thị trường chỉ gồm issuer A (nợ 200) và issuer B (nợ 300). A phát hành thêm 200. Tỷ trọng mới của A gần nhất với:', choices: ['57,1%', '40,0%', '80,0%'], answer: 0, explain: '400 / (400 + 300) = 57,1%. B là tỷ trọng cũ. C chia 400 cho tổng cũ 500, quên rằng tổng nợ trong chỉ số cũng tăng lên 700.' },
    { q: 'Trong một đợt phát hành best-efforts, ngân hàng đầu tư:', choices: ['Mua toàn bộ đợt phát hành ở giá thỏa thuận rồi bán lại', 'Bán toàn bộ đợt cho một nhà đầu tư duy nhất qua phát hành riêng lẻ', 'Cố gắng bán càng nhiều càng tốt nhưng không cam kết giá hay khối lượng'], answer: 2, explain: 'Best-efforts: ngân hàng là đại lý, rủi ro không bán hết thuộc về issuer. A là underwritten offering. B là private placement, một kênh khác.' },
    { q: 'Tổ hợp bảo lãnh mua đợt trái phiếu mệnh giá 300 triệu ở giá 99,25 và bán lại ở giá 100. Chênh lệch tổ hợp hưởng là:', choices: ['2,25 triệu', '297,75 triệu', '0,75 triệu'], answer: 0, explain: '(100 - 99,25)% × 300 = 0,75% × 300 = 2,25 triệu. B là số tiền issuer nhận được. C là lấy 0,75 làm triệu mà quên nhân với quy mô 300 triệu theo %.' },
    { q: 'Phát biểu nào mô tả ĐÚNG thị trường thứ cấp trái phiếu so với cổ phiếu?', choices: ['Chủ yếu giao dịch trên sở giao dịch theo cơ chế khớp lệnh', 'Chênh lệch giá mua - bán thường hẹp hơn', 'Chủ yếu là thị trường OTC qua dealer, nhiều trái phiếu giao dịch không thường xuyên'], answer: 2, explain: 'Trái phiếu chủ yếu giao dịch OTC, quote-driven, thanh khoản thấp hơn. A là đặc điểm của cổ phiếu. B ngược lại: bid-ask trái phiếu thường rộng hơn.' },
    { q: 'Dealer báo giá trái phiếu 101,10 / 101,35. Nhà đầu tư mua 2 triệu USD mệnh giá rồi bán lại ngay. Chi phí giao dịch là:', choices: ['2.500 USD', '5.000 USD', '10.000 USD'], answer: 1, explain: 'Chênh lệch 0,25 trên 100 mệnh giá: 0,25% × 2.000.000 = 5.000. A chỉ tính nửa chênh lệch (một chiều so với giá giữa). C tính chênh lệch hai lần cho hai chiều mua và bán.' },
    { q: 'So với thị trường sơ cấp cổ phiếu, thị trường sơ cấp trái phiếu có đặc điểm:', choices: ['Issuer phát hành thường xuyên hơn nhiều, mỗi issuer có thể có nhiều đợt đang lưu hành', 'Mỗi issuer thường chỉ phát hành trái phiếu một lần trong đời', 'Không cho phép phát hành riêng lẻ'], answer: 0, explain: 'Trái phiếu đáo hạn và phải tái tài trợ nên issuer quay lại thường xuyên, dùng cả shelf registration. B mô tả IPO cổ phiếu. C sai: phát hành riêng lẻ rất phổ biến với trái phiếu.' },
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
