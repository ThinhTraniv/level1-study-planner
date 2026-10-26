// Bài giảng EQ-03 - Equity Issuance and Trading (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t, frac, keys } = window.CFAH;

  const sections = [
    {
      title: '1. Bức tranh lớn',
      minutes: 5,
      html: `
<p>Một cổ phiếu có hai "cuộc đời": lần đầu nó được <b>bán ra bởi công ty</b> để huy động vốn, sau đó nó được <b>nhà đầu tư mua bán với nhau</b> hàng nghìn lần mà công ty không nhận thêm đồng nào.</p>
<div class="key">${t('primary', 'Thị trường sơ cấp (primary market)')}: công ty → nhà đầu tư, tiền chảy về công ty. ${t('secondary', 'Thị trường thứ cấp (secondary market)')}: nhà đầu tư ↔ nhà đầu tư, tiền chảy giữa các nhà đầu tư. Thị trường thứ cấp càng tốt (thanh khoản cao, giá minh bạch) thì công ty huy động vốn ở thị trường sơ cấp càng dễ và càng rẻ.</div>
<p>Bốn LOS của module:</p>
<ol>
  <li><b>Thị trường sơ cấp và thứ cấp, chức năng của chúng</b>: phần 2 và 3.</li>
  <li><b>So sánh giao dịch trên sở, ngoài sở và OTC</b>: phần 4. Kèm theo là các loại lệnh, vị thế mua/bán khống và giao dịch ký quỹ (phần 5 và 6), nền tảng để hiểu cách giao dịch diễn ra.</li>
  <li><b>Đo lường thanh khoản, tính free float và khối lượng giao dịch bình quân ngày</b>: phần 7.</li>
  <li><b>Các loại chỉ số cổ phiếu</b>: phần 8. Cách tính và đặt trọng số chỉ số đã học ở QM-03, ở đây chỉ phân loại.</li>
</ol>
<p class="tip"><b>Máy tính:</b> module này chủ yếu là phép tính số học (cộng, nhân, chia). BA II Plus chỉ dùng như máy tính thường; không cần TVM.</p>`,
    },
    {
      title: '2. Thị trường sơ cấp: công ty phát hành cổ phiếu',
      minutes: 12,
      html: `
<h4>Phát hành lần đầu ra công chúng (IPO)</h4>
<p>Công ty tư nhân bán cổ phiếu cho công chúng lần đầu và niêm yết. Thường có ngân hàng đầu tư làm ${t('underwriter', 'tổ chức bảo lãnh phát hành (underwriter)')}:</p>
<ul>
<li>${t('firm', 'Bảo lãnh cam kết chắc chắn (underwritten, firm commitment)')}: ngân hàng cam kết mua toàn bộ đợt phát hành ở giá thỏa thuận rồi bán lại; nếu không bán hết, <b>ngân hàng chịu phần còn lại</b>. Công ty chắc chắn nhận đủ tiền.</li>
<li>${t('besteff', 'Bảo lãnh cố gắng tối đa (best efforts)')}: ngân hàng chỉ làm môi giới, không cam kết mua phần bán không hết. Rủi ro thuộc về công ty.</li>
</ul>
<p>Giá IPO thường được xác định qua ${t('bookbuild', 'dựng sổ (book building)')}: ngân hàng thu thập đăng ký mua của nhà đầu tư tổ chức ở các mức giá để ước lượng cầu. Một số thị trường dùng đấu giá (Việt Nam từng đấu giá cổ phần khi cổ phần hóa doanh nghiệp nhà nước).</p>
<div class="example"><div class="ex-h">Ví dụ 2.1 - định giá thấp khi IPO</div>
<p>Cổ phiếu IPO ở giá 20 USD và đóng cửa phiên đầu ở 26 USD. Lợi suất ngày đầu là bao nhiêu và nó nói lên điều gì?</p>
<details><summary>Xem lời giải</summary><p>(26 - 20) / 20 = <b>30%</b>. Đây là ${t('underpricing', 'định giá thấp IPO (IPO underpricing)')}: công ty "để lại tiền trên bàn" vì bán rẻ hơn giá thị trường sẵn sàng trả. Đổi lại, ngân hàng dễ bán hết và nhà đầu tư tham gia IPO được thưởng cho rủi ro thông tin.</p></details></div>
<h4>Các cách khác để lên sàn</h4>
<p>${t('directlist', 'Niêm yết trực tiếp (direct listing)')} không phát hành cổ phiếu mới, không cần bảo lãnh; ${t('spac', 'SPAC')} là công ty vỏ IPO trước rồi sáp nhập với công ty tư nhân. Hai cách này đã học ở CF-01.</p>
<h4>Công ty đã niêm yết phát hành thêm</h4>
<table class="plain"><thead><tr><th>Hình thức</th><th>Đặc điểm</th></tr></thead><tbody>
<tr><td>${t('seo', 'Phát hành thêm ra công chúng (seasoned offering, follow-on)')}</td><td>Đã có giá thị trường nên dễ định giá hơn IPO; giá cổ phiếu thường giảm khi công bố (tín hiệu "cổ phiếu đang đắt" và pha loãng)</td></tr>
<tr><td>${t('rightsoff', 'Chào bán cho cổ đông hiện hữu (rights offering)')}</td><td>Cổ đông nhận quyền mua cổ phiếu mới ở giá chiết khấu theo tỷ lệ sở hữu; không mua thì bị pha loãng, nhưng có thể bán quyền</td></tr>
<tr><td>${t('placement', 'Phát hành riêng lẻ (private placement)')}</td><td>Bán cho một nhóm nhỏ nhà đầu tư đủ điều kiện; ít công bố hơn, chi phí thấp, nhưng thường phải chiết khấu và có hạn chế chuyển nhượng</td></tr>
<tr><td>${t('shelf', 'Đăng ký phát hành nhiều đợt (shelf registration)')}</td><td>Đăng ký một lần, bán dần khi cần vốn và khi thị trường thuận lợi</td></tr>
<tr><td>${t('drip', 'Kế hoạch tái đầu tư cổ tức (DRIP)')}</td><td>Cổ đông dùng cổ tức mua cổ phiếu mới trực tiếp từ công ty, đôi khi được chiết khấu</td></tr>
</tbody></table>
<div class="example"><div class="ex-h">Ví dụ 2.2 - giá lý thuyết sau quyền</div>
<p>Cổ phiếu giá 50. Công ty chào bán cho cổ đông hiện hữu: cứ 4 cổ phiếu cũ được mua 1 cổ phiếu mới giá 40. Giá lý thuyết sau quyền (bỏ qua tác động thông tin) và giá trị một quyền là bao nhiêu?</p>
<details><summary>Xem lời giải</summary><p>Giá sau quyền = (4 × 50 + 1 × 40) / 5 = <b>48</b>. Mỗi cổ phiếu cũ mất 2 giá trị, đúng bằng giá trị của quyền gắn với nó: 50 - 48 = <b>2</b>. Cổ đông thực hiện quyền hoặc bán quyền thì không mất gì; cổ đông bỏ mặc quyền thì mất 2 mỗi cổ phiếu.</p></details></div>`,
    },
    {
      title: '3. Thị trường thứ cấp: chức năng và cơ chế',
      minutes: 10,
      html: `
<h4>Chức năng</h4>
<ul>
<li>${t('liquidity', 'Thanh khoản (liquidity)')}: nhà đầu tư bán được khi cần, nên sẵn sàng mua ở thị trường sơ cấp với giá cao hơn (đòi lợi suất thấp hơn). Kết quả: <b>chi phí vốn của công ty thấp hơn</b>.</li>
<li>${t('pricedisc', 'Khám phá giá (price discovery)')}: giá thị trường tổng hợp thông tin của mọi nhà đầu tư; công ty dùng nó để định giá đợt phát hành mới, đánh giá dự án, trả thưởng bằng cổ phiếu, làm "tiền tệ" khi sáp nhập.</li>
<li>Giám sát và kỷ luật: giá giảm mạnh là tín hiệu ban điều hành làm kém, mở đường cho thâu tóm hoặc cổ đông hoạt động.</li>
<li>Cho phép nhà đầu tư đa dạng hóa, tái cân bằng danh mục, quản lý rủi ro với chi phí thấp.</li>
</ul>
<h4>Phiên khớp lệnh</h4>
<ul>
<li>${t('callmkt', 'Thị trường khớp lệnh định kỳ (call market)')}: gom lệnh và khớp một lần ở một mức giá tại một thời điểm. Ví dụ phiên ATO, ATC của HOSE. Tập trung thanh khoản, giá mở và đóng cửa tin cậy hơn.</li>
<li>${t('contmkt', 'Thị trường liên tục (continuous market)')}: lệnh được khớp bất cứ lúc nào có lệnh đối ứng trong giờ giao dịch.</li>
</ul>
<h4>Ba cơ chế giao dịch</h4>
<table class="plain"><thead><tr><th>Cơ chế</th><th>Ai đứng đối diện nhà đầu tư</th><th>Ví dụ</th></tr></thead><tbody>
<tr><td>${t('orderdriven', 'Khớp lệnh (order-driven)')}</td><td>Nhà đầu tư khác; hệ thống khớp theo quy tắc ưu tiên: <b>giá trước</b>, rồi lệnh hiển thị trước lệnh ẩn, rồi <b>thời gian</b></td><td>Phần lớn sở giao dịch cổ phiếu, kể cả HOSE, HNX</td></tr>
<tr><td>${t('quotedriven', 'Báo giá (quote-driven, dealer market)')}</td><td>${t('dealer', 'Nhà tạo lập (dealer)')} niêm yết giá mua (bid) và giá bán (ask), dùng vốn của mình để mua bán</td><td>Trái phiếu, ngoại tệ, cổ phiếu OTC</td></tr>
<tr><td>${t('brokered', 'Môi giới (brokered)')}</td><td>Môi giới tìm đối tác cho tài sản đặc biệt, giao dịch lớn</td><td>Khối cổ phiếu lớn, cổ phần tư nhân, bất động sản</td></tr>
</tbody></table>
<p class="warn"><b>Bẫy:</b> ${t('broker', 'môi giới (broker)')} chỉ làm đại lý, kiếm hoa hồng, không dùng vốn của mình; dealer là bên đối ứng, kiếm từ chênh lệch bid-ask và chịu rủi ro tồn kho.</p>`,
    },
    {
      title: '4. Giao dịch trên sở, ngoài sở và OTC',
      minutes: 14,
      html: `
<p>Cùng một cổ phiếu niêm yết có thể được giao dịch ở nhiều nơi. LOS yêu cầu so sánh ba nhóm địa điểm:</p>
<ul>
<li>${t('exchange', 'Sở giao dịch (exchange)')}: địa điểm có tổ chức, có quy chuẩn niêm yết, công bố sổ lệnh (bid, ask, khối lượng) trước khi khớp và công bố giao dịch ngay sau khi khớp, giám sát thành viên.</li>
<li>${t('offexch', 'Ngoài sở (off-exchange)')}: cổ phiếu niêm yết nhưng được khớp ở nơi khác: ${t('ats', 'hệ thống giao dịch thay thế (ATS, MTF, ECN)')}, ${t('darkpool', 'dark pool')} (không công bố lệnh trước khi khớp), hoặc ${t('internal', 'nội bộ hóa (internalization)')} khi công ty chứng khoán tự khớp lệnh của khách với chính mình hoặc giữa các khách. Giao dịch vẫn phải báo cáo sau khi khớp.</li>
<li>${t('otc', 'Phi tập trung (over-the-counter, OTC)')}: thỏa thuận song phương qua mạng lưới dealer, chủ yếu cho cổ phiếu <b>không niêm yết</b> trên sở (công ty nhỏ, công ty nước ngoài, công ty bị hủy niêm yết).</li>
</ul>
<table class="plain"><thead><tr><th>Tiêu chí</th><th>Trên sở</th><th>Ngoài sở (ATS, dark pool, nội bộ)</th><th>OTC</th></tr></thead><tbody>
<tr><td>Chứng khoán</td><td>Cổ phiếu niêm yết</td><td>Cổ phiếu niêm yết</td><td>Chủ yếu không niêm yết</td></tr>
<tr><td>Minh bạch trước giao dịch</td><td>Cao: sổ lệnh công khai</td><td>Thấp hoặc không có (dark)</td><td>Thấp: giá do dealer báo</td></tr>
<tr><td>Minh bạch sau giao dịch</td><td>Công bố ngay</td><td>Báo cáo sau khớp</td><td>Hạn chế hơn</td></tr>
<tr><td>Ai dùng nhiều</td><td>Mọi nhà đầu tư</td><td>Nhà đầu tư tổ chức cần giao dịch khối lớn mà không làm động giá; lệnh nhỏ của khách lẻ được nội bộ hóa</td><td>Nhà đầu tư chấp nhận rủi ro thông tin, thanh khoản</td></tr>
<tr><td>Ưu điểm</td><td>Khám phá giá tốt, thanh khoản tập trung</td><td>Giảm tác động giá, có thể rẻ hơn</td><td>Tiếp cận cổ phiếu không đủ điều kiện niêm yết</td></tr>
<tr><td>Nhược điểm</td><td>Lệnh lớn dễ bị lộ, làm giá chạy</td><td>Phân mảnh thanh khoản, làm giảm chất lượng giá công khai</td><td>Thanh khoản thấp, spread rộng, ít công bố thông tin</td></tr>
</tbody></table>
<div class="key">Đánh đổi chính: <b>minh bạch</b> (tốt cho khám phá giá) và <b>giảm tác động giá</b> (tốt cho người giao dịch khối lớn). Khi ngày càng nhiều lệnh rời khỏi sở, sổ lệnh công khai mỏng đi và giá tham chiếu kém tin cậy hơn, nên cơ quan quản lý giới hạn và giám sát giao dịch ngoài sở.</div>
<p class="tip"><b>Việt Nam:</b> giao dịch ${t('putthrough', 'thỏa thuận (put-through)')} trên HOSE, HNX là giao dịch khối lớn được thương lượng riêng nhưng thực hiện qua hệ thống của sở. UPCoM là nơi giao dịch cổ phiếu công ty đại chúng chưa niêm yết, có tổ chức hơn OTC truyền thống.</p>`,
    },
    {
      title: '5. Lệnh và vị thế',
      minutes: 14,
      html: `
<h4>Lệnh: thực hiện thế nào, khi nào</h4>
<table class="plain"><thead><tr><th>Nhóm</th><th>Lệnh</th><th>Đặc điểm</th></tr></thead><tbody>
<tr><td rowspan="5">Thực hiện (how)</td><td>${t('market', 'Lệnh thị trường (market order)')}</td><td>Khớp ngay ở giá tốt nhất hiện có; chắc chắn khớp, không chắc giá</td></tr>
<tr><td>${t('limit', 'Lệnh giới hạn (limit order)')}</td><td>Chỉ khớp ở giá giới hạn hoặc tốt hơn; chắc giá, không chắc khớp. Lệnh mua giới hạn thấp hơn giá ask hiện tại sẽ nằm chờ trong sổ lệnh, tức là <b>cung cấp thanh khoản</b></td></tr>
<tr><td>${t('stop', 'Lệnh dừng (stop order)')}</td><td>Chỉ kích hoạt khi giá chạm mức dừng. Lệnh bán dừng (stop-loss) đặt dưới giá hiện tại để cắt lỗ; lệnh mua dừng đặt trên giá hiện tại, thường để bảo vệ vị thế bán khống</td></tr>
<tr><td>All-or-nothing</td><td>Chỉ khớp nếu khớp được toàn bộ</td></tr>
<tr><td>Lệnh ẩn, ${t('iceberg', 'lệnh tảng băng (iceberg)')}</td><td>Ẩn toàn bộ hoặc chỉ hiện một phần khối lượng, để không lộ ý định giao dịch lớn</td></tr>
<tr><td rowspan="3">Hiệu lực (when)</td><td>Day, GTC</td><td>Hết hiệu lực cuối ngày; hoặc có hiệu lực đến khi khớp hoặc hủy (good-till-cancelled)</td></tr>
<tr><td>IOC, fill-or-kill</td><td>Khớp ngay (một phần hoặc toàn bộ), phần còn lại hủy; fill-or-kill: khớp toàn bộ ngay hoặc hủy</td></tr>
<tr><td>Good-on-open, good-on-close</td><td>Chỉ khớp ở phiên mở cửa, đóng cửa (như ATO, ATC)</td></tr>
</tbody></table>
<p>Ngoài ra lệnh có <b>chỉ dẫn thanh toán bù trừ</b> (clearing instructions): ai thanh toán, và lệnh bán là bán thông thường hay bán khống (môi giới phải xác nhận mượn được cổ phiếu).</p>
<h4>Vị thế mua và bán khống</h4>
<ul>
<li>${t('long', 'Vị thế mua (long)')}: sở hữu cổ phiếu, lãi khi giá tăng. Lỗ tối đa là số tiền bỏ ra.</li>
<li>${t('short', 'Bán khống (short sale)')}: mượn cổ phiếu, bán ngay, sau đó mua lại để trả. Lãi khi giá giảm. Người bán khống phải <b>trả cho người cho mượn mọi cổ tức</b> phát sinh và trả phí mượn; phải ký quỹ. Lỗ về lý thuyết <b>không giới hạn</b> vì giá có thể tăng mãi.</li>
</ul>
<div class="example"><div class="ex-h">Ví dụ 5.1</div>
<p>Bán khống 1.000 cổ phiếu ở giá 50. Trong thời gian nắm giữ, công ty trả cổ tức 1/cổ phiếu, phí mượn là 0,5% giá trị vay ban đầu. Lãi/lỗ là bao nhiêu nếu mua lại ở (a) 42, (b) 65?</p>
<details><summary>Xem lời giải</summary><p>Phí mượn = 0,5% × 50.000 = 250; cổ tức phải trả = 1.000.<br>
(a) 1.000 × (50 - 42) - 1.000 - 250 = <b>6.750</b> lãi.<br>
(b) 1.000 × (50 - 65) - 1.000 - 250 = <b>-16.250</b> (lỗ).</p>
<p>Giá giảm 8 thì lãi 6.750; giá tăng 15 thì lỗ 16.250: rủi ro của người bán khống không cân xứng.</p></details></div>`,
    },
    {
      title: '6. Giao dịch ký quỹ và đòn bẩy',
      minutes: 16,
      html: `
<p>${t('marginbuy', 'Mua ký quỹ (buying on margin)')} là vay tiền của công ty chứng khoán để mua cổ phiếu. Khoản vay chịu lãi (call money rate cộng biên). Cổ phiếu mua được dùng làm tài sản bảo đảm.</p>
<ul>
<li>${t('im', 'Ký quỹ ban đầu (initial margin)')}: tỷ lệ tối thiểu của giá trị mua phải bằng vốn tự có.</li>
<li>${t('mm', 'Ký quỹ duy trì (maintenance margin)')}: tỷ lệ vốn tự có / giá trị tài khoản tối thiểu phải duy trì. Xuống dưới mức này sẽ bị ${t('margincall', 'gọi ký quỹ (margin call)')}: phải nộp thêm tiền, nếu không cổ phiếu bị bán giải chấp.</li>
</ul>
<div class="formula">${t('levratio', 'Tỷ lệ đòn bẩy (leverage ratio)')} = ${frac('Giá trị tài sản', 'Vốn tự có')} = ${frac('1', 'Initial margin')} &nbsp;&nbsp;&nbsp; Giá bị gọi ký quỹ = P<sub>0</sub> × ${frac('1 - Initial margin', '1 - Maintenance margin')}</div>
<div class="example"><div class="ex-h">Ví dụ 6.1 - lợi suất trên vốn tự có</div>
<p>Mua 2.000 cổ phiếu giá 25 USD, ký quỹ ban đầu 50%, lãi vay 5%/năm, hoa hồng 0,02 USD/cổ phiếu mỗi chiều, cổ tức 0,50 USD/cổ phiếu trong năm. Sau một năm bán ở (a) 28, (b) 21. Tính tỷ lệ đòn bẩy và lợi suất trên vốn tự có.</p>
<details><summary>Xem lời giải</summary>
<p>Giá trị mua = 50.000; vốn tự có = 25.000; vay = 25.000; đòn bẩy = 1 / 50% = <b>2</b>. Vốn bỏ ra ban đầu gồm cả hoa hồng mua = 25.000 + 40 = <b>25.040</b>.</p>
<table class="plain"><thead><tr><th>Khoản mục</th><th>(a) Giá 28</th><th>(b) Giá 21</th></tr></thead><tbody>
<tr><td>Tiền bán</td><td>56.000</td><td>42.000</td></tr>
<tr><td>- Hoa hồng bán</td><td>40</td><td>40</td></tr>
<tr><td>- Trả gốc vay</td><td>25.000</td><td>25.000</td></tr>
<tr><td>- Lãi vay (5% × 25.000)</td><td>1.250</td><td>1.250</td></tr>
<tr><td>+ Cổ tức (2.000 × 0,50)</td><td>1.000</td><td>1.000</td></tr>
<tr><td>Còn lại</td><td>30.710</td><td>16.710</td></tr>
<tr><td>Lợi suất = còn lại / 25.040 - 1</td><td><b>22,64%</b></td><td><b>-33,27%</b></td></tr>
</tbody></table>
<p>Không dùng đòn bẩy, lợi suất cổ phiếu là (28 + 0,5) / 25 - 1 = <b>14%</b> hoặc (21 + 0,5) / 25 - 1 = <b>-14%</b>. Đòn bẩy 2 lần khuếch đại cả lãi lẫn lỗ, và lãi vay làm kết quả lệch về phía bất lợi (lãi chưa tới 2 × 14%, lỗ vượt 2 × 14%).</p></details></div>
<div class="example"><div class="ex-h">Ví dụ 6.2 - giá bị gọi ký quỹ</div>
<p>Cùng giao dịch trên, ký quỹ duy trì 30%. Giá xuống bao nhiêu thì bị gọi ký quỹ? Nếu giá xuống 16, phải nộp thêm bao nhiêu để về mức duy trì?</p>
<details><summary>Xem lời giải</summary><p>Giá gọi ký quỹ = 25 × (1 - 0,5) / (1 - 0,3) = <b>17,86</b>. Kiểm tra: giá trị 2.000 × 17,86 = 35.714, vốn tự có = 35.714 - 25.000 = 10.714, tỷ lệ = 30%.</p>
<p>Ở giá 16: giá trị = 32.000, vốn tự có = 7.000, mức yêu cầu = 30% × 32.000 = 9.600, phải nộp thêm <b>2.600</b>.</p></details></div>
${keys([
  ['Giá gọi ký quỹ: 25 × 0,5 / 0,7', '25 [×] 0.5 [÷] 0.7 [=]', '17.8571'],
  ['Lợi suất (a): 30.710 / 25.040 - 1', '30710 [÷] 25040 [-] 1 [=]', '0.2264'],
])}
<p class="tip">Màn hình ở chế độ DEC = 4 (cách đặt xem QM-04). Hai phép tính trên cho cùng kết quả ở cả chế độ Chn và AOS.</p>
<h4>Thử ngay: kéo giá và tỷ lệ ký quỹ</h4>
<div class="widget" data-widget="margin"></div>
<p class="warn"><b>Bẫy:</b> công thức giá gọi ký quỹ là (1 - IM) / (1 - MM), không phải MM / IM. Kiểm tra nhanh: giá gọi ký quỹ luôn <b>thấp hơn</b> giá mua với vị thế mua.</p>`,
    },
    {
      title: '7. Đo lường thanh khoản: spread, khối lượng, free float',
      minutes: 14,
      html: `
<p>Một cổ phiếu thanh khoản tốt khi có thể mua bán <b>nhanh</b>, <b>khối lượng lớn</b>, với <b>chi phí thấp</b> và <b>ít làm động giá</b>. Không có thước đo duy nhất, nhà phân tích kết hợp nhiều chỉ tiêu:</p>
<table class="plain"><thead><tr><th>Thước đo</th><th>Cách tính</th><th>Ý nghĩa</th></tr></thead><tbody>
<tr><td>${t('spread', 'Chênh lệch giá mua - bán (bid-ask spread)')}</td><td>Ask - Bid; theo %: (Ask - Bid) / giá giữa</td><td>Chi phí một vòng mua rồi bán ngay; càng hẹp càng tốt</td></tr>
<tr><td>${t('effspread', 'Spread hiệu dụng (effective spread)')}</td><td>2 × |giá khớp - giá giữa|</td><td>Chi phí thực tế, tính cả việc khớp tốt hơn hoặc kém hơn giá yết</td></tr>
<tr><td>${t('depth', 'Độ sâu thị trường (market depth)')}</td><td>Khối lượng đang chờ ở giá bid, ask tốt nhất và các mức gần đó</td><td>Mua bán được bao nhiêu trước khi giá phải dịch chuyển</td></tr>
<tr><td>${t('adv', 'Khối lượng giao dịch bình quân ngày (ADV)')}</td><td>Tổng khối lượng n ngày / n</td><td>Mức độ sôi động; dùng để ước lượng thời gian thanh lý một vị thế</td></tr>
<tr><td>${t('turnover', 'Vòng quay (turnover)')}</td><td>Khối lượng giao dịch / số cổ phiếu (lưu hành hoặc free float)</td><td>So sánh thanh khoản giữa các công ty quy mô khác nhau</td></tr>
<tr><td>${t('float', 'Free float')}</td><td>Cổ phiếu lưu hành - cổ phiếu do người nội bộ, cổ đông chiến lược, Nhà nước và các bên bị hạn chế chuyển nhượng nắm giữ</td><td>Phần thực sự có thể giao dịch; cũng dùng để điều chỉnh trọng số chỉ số</td></tr>
</tbody></table>
<div class="example"><div class="ex-h">Ví dụ 7.1</div>
<p>Cổ phiếu ABC: giá bid 24,90, ask 25,10. Một lệnh mua khớp ở 25,06. 500 triệu cổ phiếu lưu hành, trong đó gia đình sáng lập nắm 200 triệu, Nhà nước nắm 100 triệu. Khối lượng 5 phiên gần nhất (triệu cổ phiếu): 1,10; 0,95; 1,40; 1,25; 1,30. Tính: (a) spread và spread %, (b) spread hiệu dụng, (c) free float, (d) ADV, (e) số ngày để bán 3 triệu cổ phiếu nếu không muốn vượt 20% ADV mỗi ngày.</p>
<details><summary>Xem lời giải</summary>
<p>(a) Spread = 25,10 - 24,90 = <b>0,20</b>; giá giữa 25,00 → <b>0,80%</b>.<br>
(b) Spread hiệu dụng = 2 × (25,06 - 25,00) = <b>0,12</b> (0,48%): lệnh khớp tốt hơn giá ask, chi phí thực thấp hơn spread yết.<br>
(c) Free float = 500 - 200 - 100 = <b>200 triệu</b>, tức <b>40%</b> số cổ phiếu lưu hành.<br>
(d) ADV = (1,10 + 0,95 + 1,40 + 1,25 + 1,30) / 5 = 6,00 / 5 = <b>1,20 triệu cổ phiếu</b> (khoảng 30 triệu USD/ngày ở giá 25).<br>
(e) Mỗi ngày bán tối đa 20% × 1,20 = 0,24 triệu → 3 / 0,24 = <b>12,5 ngày</b>.</p>
<p>Vòng quay ngày theo free float = 1,20 / 200 = 0,6%. Nếu chỉ chia cho số lưu hành (500) thì trông kém thanh khoản hơn thực tế của phần có thể giao dịch.</p></details></div>
<p class="warn"><b>Bẫy:</b> (1) Free float tính từ cổ phiếu <b>lưu hành</b> (đã trừ cổ phiếu quỹ), không phải từ cổ phiếu đã phát hành. (2) ADV là trung bình cộng theo ngày, không phải tổng hay trung vị. (3) Vốn hóa lớn không đồng nghĩa thanh khoản cao nếu free float nhỏ.</p>`,
    },
    {
      title: '8. Các loại chỉ số cổ phiếu',
      minutes: 10,
      html: `
<p>QM-03 đã dạy cách tính chỉ số (price return, total return) và bốn cách đặt trọng số (theo giá, bằng nhau, theo vốn hóa có điều chỉnh free float, theo chỉ tiêu cơ bản). Ở đây ta phân loại chỉ số theo <b>phạm vi</b> và <b>mục đích</b>:</p>
<table class="plain"><thead><tr><th>Loại</th><th>Phạm vi</th><th>Ví dụ</th></tr></thead><tbody>
<tr><td>${t('broad', 'Chỉ số thị trường rộng (broad market)')}</td><td>Phần lớn (thường trên 90%) vốn hóa của một thị trường</td><td>S&amp;P 500, VN-Index, VNAllshare</td></tr>
<tr><td>${t('multi', 'Chỉ số đa thị trường (multi-market)')}</td><td>Nhiều quốc gia, theo khu vực hoặc theo mức phát triển (phát triển, mới nổi, cận biên)</td><td>MSCI World, MSCI Emerging Markets, MSCI ACWI</td></tr>
<tr><td>${t('sector', 'Chỉ số ngành (sector)')}</td><td>Công ty cùng ngành theo một hệ thống phân ngành</td><td>Chỉ số ngân hàng, công nghệ</td></tr>
<tr><td>${t('style', 'Chỉ số phong cách (style)')}</td><td>Theo quy mô (large, mid, small cap) hoặc giá trị/tăng trưởng (value/growth)</td><td>Russell 2000 (small cap), chỉ số value, growth</td></tr>
<tr><td>Chỉ số chủ đề, ESG, nhân tố</td><td>Theo chủ đề (năng lượng sạch, AI), tiêu chí ESG, hoặc nhân tố (momentum, low volatility)</td><td>VNDiamond (cổ phiếu gần hết room ngoại), chỉ số ESG</td></tr>
</tbody></table>
<h4>Công dụng</h4>
<ul>
<li>Đo lường tâm lý và kết quả của thị trường.</li>
<li>${t('benchmark', 'Điểm chuẩn (benchmark)')} để đánh giá nhà quản lý quỹ chủ động.</li>
<li>Cơ sở cho quỹ chỉ số, ETF và phái sinh (ví dụ hợp đồng tương lai VN30).</li>
<li>Đại diện cho "thị trường" khi tính beta, lợi suất yêu cầu (EQ-12) và phân bổ tài sản.</li>
</ul>
<p class="tip"><b>Liên hệ thanh khoản:</b> phần lớn chỉ số lớn dùng trọng số theo vốn hóa <b>điều chỉnh free float</b> và có ngưỡng thanh khoản tối thiểu (ADV, vòng quay) để quỹ chỉ số có thể mua thật được. Cổ phiếu được thêm vào chỉ số thường có cầu mua lớn từ quỹ ETF ngay trước ngày hiệu lực.</p>`,
    },
    {
      title: '9. Tóm tắt và bẫy thường gặp',
      minutes: 5,
      html: `
<table class="plain"><thead><tr><th>Tình huống</th><th>Nhớ</th></tr></thead><tbody>
<tr><td>Sơ cấp và thứ cấp</td><td>Sơ cấp: tiền về công ty. Thứ cấp: tiền giữa nhà đầu tư, nhưng hạ chi phí vốn cho sơ cấp</td></tr>
<tr><td>Firm commitment và best efforts</td><td>Firm: ngân hàng chịu phần bán không hết. Best efforts: công ty chịu</td></tr>
<tr><td>Rights offering</td><td>Giá sau quyền = (n × P + giá mới) / (n + 1); không thực hiện, không bán quyền thì mất</td></tr>
<tr><td>Order-driven, quote-driven, brokered</td><td>Khớp với nhà đầu tư khác; khớp với dealer; môi giới tìm đối tác</td></tr>
<tr><td>Trên sở, ngoài sở, OTC</td><td>Minh bạch cao; giảm tác động giá nhưng phân mảnh; chủ yếu cổ phiếu không niêm yết</td></tr>
<tr><td>Limit order</td><td>Chắc giá, không chắc khớp; lệnh chờ cung cấp thanh khoản</td></tr>
<tr><td>Bán khống</td><td>Trả cổ tức và phí mượn; lỗ không giới hạn</td></tr>
<tr><td>Đòn bẩy</td><td>1 / IM; khuếch đại cả lãi và lỗ; lãi vay kéo kết quả xuống</td></tr>
<tr><td>Giá gọi ký quỹ</td><td>P<sub>0</sub> × (1 - IM) / (1 - MM)</td></tr>
<tr><td>Free float</td><td>Lưu hành - nội bộ, chiến lược, Nhà nước, hạn chế chuyển nhượng</td></tr>
<tr><td>ADV</td><td>Tổng khối lượng / số ngày</td></tr>
<tr><td>Loại chỉ số</td><td>Rộng, đa thị trường, ngành, phong cách, chủ đề/ESG/nhân tố; trọng số xem QM-03</td></tr>
</tbody></table>
<p>Tiếp theo: tab <b>Luyện tập</b> 10 câu. Module sau (EQ-04) phân tích nhà đầu tư kiếm lợi suất từ cổ phiếu bằng cách nào: cổ tức, mua lại cổ phiếu và thay đổi giá.</p>`,
    },
  ];

  const glossary = {
    primary: ['Primary market', 'Thị trường sơ cấp', 'Nơi công ty bán chứng khoán mới cho nhà đầu tư; tiền chảy về công ty.'],
    secondary: ['Secondary market', 'Thị trường thứ cấp', 'Nơi nhà đầu tư mua bán chứng khoán đã phát hành với nhau.'],
    underwriter: ['Underwriter', 'Tổ chức bảo lãnh phát hành', 'Ngân hàng đầu tư giúp định giá, phân phối và có thể cam kết mua đợt phát hành.'],
    firm: ['Firm commitment (underwritten offering)', 'Bảo lãnh cam kết chắc chắn', 'Ngân hàng mua toàn bộ đợt phát hành và chịu rủi ro phần bán không hết.'],
    besteff: ['Best efforts offering', 'Bảo lãnh cố gắng tối đa', 'Ngân hàng chỉ làm môi giới, không cam kết mua phần bán không hết.'],
    bookbuild: ['Book building', 'Dựng sổ', 'Thu thập đăng ký mua của nhà đầu tư ở các mức giá để xác định giá phát hành.'],
    underpricing: ['IPO underpricing', 'Định giá thấp IPO', 'Giá IPO thấp hơn giá giao dịch đầu tiên; lợi suất ngày đầu dương.'],
    directlist: ['Direct listing', 'Niêm yết trực tiếp', 'Đưa cổ phiếu hiện có lên sàn mà không phát hành mới, không cần bảo lãnh.'],
    spac: ['SPAC', 'Công ty mua lại có mục đích đặc biệt', 'Công ty vỏ IPO để huy động tiền rồi sáp nhập với một công ty tư nhân.'],
    seo: ['Seasoned offering (follow-on)', 'Phát hành thêm ra công chúng', 'Công ty đã niêm yết bán thêm cổ phiếu mới ra công chúng.'],
    rightsoff: ['Rights offering', 'Chào bán cho cổ đông hiện hữu', 'Cổ đông được quyền mua cổ phiếu mới theo tỷ lệ sở hữu, thường ở giá chiết khấu.'],
    placement: ['Private placement', 'Phát hành riêng lẻ', 'Bán chứng khoán cho một nhóm nhỏ nhà đầu tư đủ điều kiện, không chào bán công khai.'],
    shelf: ['Shelf registration', 'Đăng ký phát hành nhiều đợt', 'Đăng ký một lần rồi phát hành dần theo nhu cầu vốn.'],
    drip: ['Dividend reinvestment plan (DRIP)', 'Kế hoạch tái đầu tư cổ tức', 'Cổ đông dùng cổ tức mua cổ phiếu mới trực tiếp từ công ty.'],
    liquidity: ['Liquidity', 'Thanh khoản', 'Khả năng mua bán nhanh, khối lượng lớn, chi phí thấp mà ít làm động giá.'],
    pricedisc: ['Price discovery', 'Khám phá giá', 'Quá trình giao dịch tổng hợp thông tin thành giá thị trường.'],
    callmkt: ['Call market', 'Thị trường khớp lệnh định kỳ', 'Gom lệnh và khớp một lần ở một mức giá tại thời điểm định trước.'],
    contmkt: ['Continuous market', 'Thị trường liên tục', 'Lệnh được khớp bất cứ lúc nào có lệnh đối ứng trong giờ giao dịch.'],
    orderdriven: ['Order-driven market', 'Thị trường khớp lệnh', 'Lệnh của nhà đầu tư được khớp với nhau theo quy tắc ưu tiên giá, rồi thời gian.'],
    quotedriven: ['Quote-driven (dealer) market', 'Thị trường báo giá', 'Nhà đầu tư giao dịch với dealer ở giá bid, ask mà dealer niêm yết.'],
    dealer: ['Dealer', 'Nhà tạo lập', 'Bên mua bán bằng vốn của mình, kiếm từ chênh lệch bid-ask.'],
    brokered: ['Brokered market', 'Thị trường môi giới', 'Môi giới tìm đối tác cho tài sản đặc biệt hoặc giao dịch lớn.'],
    broker: ['Broker', 'Môi giới', 'Đại lý thực hiện lệnh cho khách, kiếm hoa hồng, không dùng vốn của mình.'],
    exchange: ['Exchange', 'Sở giao dịch', 'Địa điểm giao dịch có tổ chức, quy chuẩn niêm yết, sổ lệnh công khai và giám sát.'],
    offexch: ['Off-exchange trading', 'Giao dịch ngoài sở', 'Cổ phiếu niêm yết được khớp ngoài sở: ATS, dark pool, nội bộ hóa.'],
    ats: ['Alternative trading system (ATS, MTF, ECN)', 'Hệ thống giao dịch thay thế', 'Nền tảng điện tử khớp lệnh ngoài sở, không có chức năng quản lý niêm yết.'],
    darkpool: ['Dark pool', 'Dark pool', 'Nơi khớp lệnh không công bố lệnh trước khi khớp, dùng cho giao dịch khối lớn.'],
    internal: ['Internalization', 'Nội bộ hóa', 'Công ty chứng khoán tự khớp lệnh của khách với mình hoặc giữa các khách hàng.'],
    otc: ['Over-the-counter (OTC)', 'Phi tập trung', 'Giao dịch song phương qua mạng lưới dealer, chủ yếu với cổ phiếu không niêm yết.'],
    putthrough: ['Put-through (negotiated) trade', 'Giao dịch thỏa thuận', 'Giao dịch khối lớn thương lượng riêng nhưng thực hiện qua hệ thống của sở.'],
    market: ['Market order', 'Lệnh thị trường', 'Lệnh khớp ngay ở giá tốt nhất hiện có.'],
    limit: ['Limit order', 'Lệnh giới hạn', 'Lệnh chỉ khớp ở giá giới hạn hoặc tốt hơn.'],
    stop: ['Stop order', 'Lệnh dừng', 'Lệnh chỉ kích hoạt khi giá chạm mức dừng định trước.'],
    iceberg: ['Iceberg order', 'Lệnh tảng băng', 'Lệnh chỉ hiển thị một phần khối lượng, phần còn lại ẩn.'],
    long: ['Long position', 'Vị thế mua', 'Sở hữu tài sản, lãi khi giá tăng.'],
    short: ['Short sale', 'Bán khống', 'Mượn cổ phiếu để bán, sau đó mua lại để trả; lãi khi giá giảm.'],
    marginbuy: ['Buying on margin', 'Mua ký quỹ', 'Vay tiền của công ty chứng khoán để mua chứng khoán, dùng chính chứng khoán làm bảo đảm.'],
    im: ['Initial margin', 'Ký quỹ ban đầu', 'Tỷ lệ tối thiểu của giá trị mua phải bằng vốn tự có.'],
    mm: ['Maintenance margin', 'Ký quỹ duy trì', 'Tỷ lệ vốn tự có trên giá trị tài khoản tối thiểu phải duy trì.'],
    margincall: ['Margin call', 'Gọi ký quỹ', 'Yêu cầu nộp thêm tiền khi tỷ lệ vốn tự có xuống dưới mức duy trì.'],
    levratio: ['Leverage ratio', 'Tỷ lệ đòn bẩy', 'Giá trị tài sản chia vốn tự có; với mua ký quỹ bằng 1 / initial margin.'],
    spread: ['Bid-ask spread', 'Chênh lệch giá mua - bán', 'Ask trừ bid; chi phí của một vòng mua rồi bán ngay.'],
    effspread: ['Effective spread', 'Spread hiệu dụng', 'Hai lần chênh lệch giữa giá khớp và giá giữa; đo chi phí giao dịch thực tế.'],
    depth: ['Market depth', 'Độ sâu thị trường', 'Khối lượng chờ khớp ở các mức giá gần giá tốt nhất.'],
    adv: ['Average daily volume (ADV)', 'Khối lượng giao dịch bình quân ngày', 'Tổng khối lượng giao dịch trong n ngày chia cho n.'],
    turnover: ['Turnover', 'Vòng quay', 'Khối lượng giao dịch chia số cổ phiếu lưu hành hoặc free float.'],
    float: ['Free float', 'Tỷ lệ tự do chuyển nhượng', 'Cổ phiếu lưu hành trừ phần do người nội bộ, cổ đông chiến lược, Nhà nước và các bên bị hạn chế nắm giữ.'],
    broad: ['Broad market index', 'Chỉ số thị trường rộng', 'Chỉ số bao phủ phần lớn vốn hóa của một thị trường.'],
    multi: ['Multi-market index', 'Chỉ số đa thị trường', 'Chỉ số gồm cổ phiếu nhiều quốc gia, theo khu vực hoặc mức phát triển.'],
    sector: ['Sector index', 'Chỉ số ngành', 'Chỉ số gồm các công ty cùng ngành.'],
    style: ['Style index', 'Chỉ số phong cách', 'Chỉ số theo quy mô vốn hóa hoặc theo phong cách giá trị, tăng trưởng.'],
    benchmark: ['Benchmark', 'Điểm chuẩn', 'Danh mục tham chiếu để so sánh kết quả của nhà quản lý.'],
  };

  const practice = [
    { q: 'Thị trường thứ cấp hỗ trợ thị trường sơ cấp chủ yếu bằng cách nào?', choices: ['Cung cấp thêm vốn trực tiếp cho công ty mỗi khi cổ phiếu được giao dịch', 'Bảo đảm giá phát hành luôn bằng giá trị nội tại', 'Tạo thanh khoản và giá tham chiếu, giúp nhà đầu tư chấp nhận lợi suất thấp hơn nên chi phí vốn của công ty thấp hơn'], answer: 2, explain: 'Giao dịch thứ cấp diễn ra giữa các nhà đầu tư, công ty không nhận tiền, nên phương án "cung cấp thêm vốn trực tiếp" sai. Thanh khoản và khám phá giá làm cổ phiếu mới hấp dẫn hơn, giảm chi phí vốn. Không có gì bảo đảm giá phát hành bằng giá trị nội tại.' },
    { q: 'Trong đợt IPO bảo lãnh theo hình thức cam kết chắc chắn (firm commitment), nếu nhà đầu tư không đăng ký mua hết:', choices: ['Công ty phát hành hủy phần còn lại và nhận ít tiền hơn', 'Ngân hàng bảo lãnh phải mua phần còn lại', 'Sở giao dịch hoãn niêm yết cho đến khi bán hết'], answer: 1, explain: 'Firm commitment: ngân hàng mua toàn bộ và chịu rủi ro phần bán không hết, nên công ty chắc chắn nhận đủ tiền. Phương án "hủy phần còn lại và nhận ít tiền hơn" mô tả best efforts.' },
    { q: 'Đặc điểm nào mô tả đúng nhất một dark pool?', choices: ['Địa điểm giao dịch ngoài sở, không công bố lệnh trước khi khớp, dùng nhiều cho giao dịch khối lớn của tổ chức', 'Mạng lưới dealer giao dịch cổ phiếu không niêm yết', 'Phiên khớp lệnh định kỳ xác định giá đóng cửa của sở'], answer: 0, explain: 'Dark pool thiếu minh bạch trước giao dịch để giảm tác động giá của lệnh lớn; giao dịch vẫn báo cáo sau khi khớp. "Mạng lưới dealer" mô tả OTC; "phiên khớp lệnh định kỳ" mô tả call market (ví dụ ATC).' },
    { q: 'So với giao dịch trên sở, giao dịch OTC cổ phiếu thường:', choices: ['Minh bạch trước giao dịch cao hơn vì dealer phải công bố mọi lệnh', 'Chỉ dành cho cổ phiếu vốn hóa lớn nhất', 'Có spread rộng hơn, thanh khoản thấp hơn và chủ yếu là cổ phiếu không niêm yết'], answer: 2, explain: 'OTC là thỏa thuận song phương qua dealer, ít minh bạch, thường cho cổ phiếu nhỏ, không đủ điều kiện niêm yết, nên spread rộng và thanh khoản thấp.' },
    { q: 'Công ty đã phát hành 800 triệu cổ phiếu, trong đó 50 triệu là cổ phiếu quỹ. Người nội bộ nắm 300 triệu, Nhà nước nắm 150 triệu. Free float (theo % cổ phiếu lưu hành) là:', choices: ['43,75%', '40,00%', '37,50%'], answer: 1, explain: 'Lưu hành = 800 - 50 = 750; free float = 750 - 300 - 150 = 300; 300 / 750 = 40%. Lựa chọn 43,75% lấy (800 - 300 - 150) / 800, quên trừ cổ phiếu quỹ; lựa chọn 37,50% chia 300 cho 800 (số đã phát hành).' },
    { q: 'Khối lượng giao dịch 5 phiên gần nhất (triệu cổ phiếu) là 2,0; 1,6; 3,4; 1,8; 2,2. ADV gần nhất với:', choices: ['2,2 triệu', '2,0 triệu', '11,0 triệu'], answer: 0, explain: 'ADV = 11,0 / 5 = 2,2 triệu. Lựa chọn 2,0 triệu là trung vị; lựa chọn 11,0 triệu là tổng khối lượng.' },
    { q: 'Cổ phiếu có giá bid 9,95 và ask 10,05. Spread tính theo phần trăm giá giữa là:', choices: ['0,10%', '1,00%', '0,50%'], answer: 1, explain: '(10,05 - 9,95) / 10,00 = 1,00%. Lựa chọn 0,10% nhầm spread tuyệt đối 0,10 thành phần trăm; lựa chọn 0,50% là một nửa spread.' },
    { q: 'Nhà đầu tư mua cổ phiếu giá 60 với ký quỹ ban đầu 60%, ký quỹ duy trì 35%. Giá bị gọi ký quỹ gần nhất với:', choices: ['35,00', '97,50', '36,92'], answer: 2, explain: 'P = 60 x (1 - 0,60) / (1 - 0,35) = 36,92. Lựa chọn 35,00 dùng 60 x 0,35 / 0,60; lựa chọn 97,50 đảo ngược tử và mẫu, cho giá cao hơn giá mua (vô lý với vị thế mua).' },
    { q: 'Một chỉ số chỉ gồm các công ty có doanh thu chủ yếu từ năng lượng tái tạo ở nhiều quốc gia, thuộc loại:', choices: ['Chỉ số chủ đề (thematic)', 'Chỉ số thị trường rộng', 'Chỉ số phong cách theo quy mô'], answer: 0, explain: 'Lựa chọn thành phần theo một chủ đề kinh tế là chỉ số chủ đề. Chỉ số rộng bao phủ phần lớn thị trường; chỉ số phong cách chọn theo quy mô hoặc value/growth.' },
    { q: 'Mua ký quỹ với ký quỹ ban đầu 40%. Bỏ qua lãi vay, cổ tức và phí, nếu giá cổ phiếu tăng 10% thì lợi suất trên vốn tự có là:', choices: ['10%', '25%', '4%'], answer: 1, explain: 'Đòn bẩy = 1 / 40% = 2,5; lợi suất = 2,5 x 10% = 25%. Lựa chọn 10% là lợi suất không đòn bẩy; lựa chọn 4% nhân 10% với 40% thay vì chia.' },
  ];

  // Widget: tài khoản ký quỹ (2.000 cổ phiếu, giá mua 25, bỏ qua lãi vay, cổ tức, phí).
  const widgets = {
    margin(el) {
      el.innerHTML = `
        <div class="w-row"><label>Ký quỹ ban đầu: <b data-o="im">50%</b><input type="range" min="30" max="100" step="5" value="50" data-i="im"></label>
        <label>Ký quỹ duy trì: <b data-o="mm">30%</b><input type="range" min="15" max="45" step="5" value="30" data-i="mm"></label>
        <label>Giá hiện tại: <b data-o="p">25,00</b><input type="range" min="10" max="40" step="0.5" value="25" data-i="p"></label></div>
        <div class="w-out"><div class="w-price" data-o="out"></div><div class="w-bar"><span data-o="bar"></span><i></i></div><div class="w-note" data-o="note"></div></div>`;
      const q = s => el.querySelector(s);
      const f = (x, d = 2) => x.toFixed(d).replace('.', ',');
      const upd = () => {
        const im = +q('[data-i="im"]').value / 100, mm = +q('[data-i="mm"]').value / 100, p = +q('[data-i="p"]').value;
        const n = 2000, p0 = 25, loan = n * p0 * (1 - im), val = n * p, eq = val - loan, ratio = val > 0 ? eq / val : 0;
        const pc = (p0 * (1 - im)) / (1 - mm), ret = eq / (n * p0 * im) - 1;
        q('[data-o="im"]').textContent = `${Math.round(im * 100)}%`;
        q('[data-o="mm"]').textContent = `${Math.round(mm * 100)}%`;
        q('[data-o="p"]').textContent = f(p);
        q('[data-o="out"]').textContent = `Vốn tự có ${f(ratio * 100, 1)}% · lợi suất ${f(ret * 100, 1)}% · đòn bẩy ${f(1 / im)}x`;
        q('[data-o="bar"]').style.width = `${Math.max(0, Math.min(100, ratio * 100))}%`;
        q('[data-o="note"]').textContent = im >= 1 ? 'Không vay: không thể bị gọi ký quỹ.'
          : ratio < mm ? `Dưới mức duy trì: bị gọi ký quỹ (giá gọi ký quỹ = ${f(pc)}). Phải nộp thêm ${f(mm * val - eq, 0)} USD.`
            : `Giá gọi ký quỹ = 25 × (1 - ${f(im)}) / (1 - ${f(mm)}) = ${f(pc)}. Bỏ qua lãi vay, cổ tức và phí.`;
      };
      el.addEventListener('input', upd);
      upd();
    },
  };

  window.LESSONS['EQ-03'] = {
    moduleId: 'EQ-03',
    calculator: 'BA II Plus',
    warmup: [
      'Ôn EQ-01: vì sao nhà đầu tư đòi lợi suất cao hơn với cổ phần tư nhân kém thanh khoản?',
      'Ôn QM-03: chỉ số theo vốn hóa có điều chỉnh free float khác chỉ số theo vốn hóa thông thường ở điểm nào?',
      'Khi bạn đặt lệnh mua cổ phiếu trên app, bạn thường chọn lệnh LO hay MP? Vì sao?',
    ],
    sections,
    glossary,
    practice,
    widgets,
    slides: [],
    wrapup: [
      'Vẽ bảng so sánh trên sở, ngoài sở và OTC theo 4 tiêu chí mà không nhìn tài liệu.',
      'Tự đặt số liệu một giao dịch ký quỹ, tính đòn bẩy, giá gọi ký quỹ và lợi suất khi giá giảm 10%.',
      'Còn câu hỏi nào chưa rõ? Ghi lại để hỏi.',
    ],
  };
}());
