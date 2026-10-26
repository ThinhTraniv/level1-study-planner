// Bài giảng AI-06 - Hedge Funds (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t } = window.CFAH;

  const sections = [
    {
      title: '1. Bức tranh lớn: quỹ có "giấy phép" làm gần như mọi thứ',
      minutes: 6,
      html: `
<p>${t('hf', 'Quỹ phòng hộ (hedge fund)')} là quỹ đầu tư tư nhân góp vốn chung, chỉ dành cho ${t('accredited', 'nhà đầu tư đủ điều kiện (accredited / qualified investors)')}, chịu ít quy định và cho người quản lý <b>tự do rất lớn</b> trong việc chọn chiến lược: dùng đòn bẩy, bán khống, phái sinh, đầu tư vào gần như mọi loại tài sản.</p>
<p>Tên gọi đến từ quỹ đầu tiên (A. W. Jones, 1949) kết hợp mua cổ phiếu tốt và bán khống cổ phiếu xấu để "phòng hộ" rủi ro thị trường. Ngày nay nhiều quỹ không hề phòng hộ; điểm chung thật sự là <b>cấu trúc pháp lý</b> và <b>mục tiêu lợi nhuận tuyệt đối</b> (absolute return), không phải so với một chỉ số.</p>
<div class="key">Ba LOS của module:
<ol>
<li>Đặc điểm đầu tư của hedge fund và so sánh với các lớp tài sản khác (phần 2, 3).</li>
<li>Hình thức và phương tiện đầu tư vào hedge fund (phần 4).</li>
<li>Phân tích nguồn rủi ro, lợi nhuận và đa dạng hóa (phần 5, 6).</li>
</ol></div>
<p class="tip">Cấu trúc phí (management fee, incentive fee, hurdle, high-water mark, clawback) và cách tính lợi nhuận sau phí đã học ở AI-01 và AI-02. Ở đây chỉ nhắc khi cần so sánh các phương tiện đầu tư.</p>`,
    },
    {
      title: '2. Đặc điểm đầu tư và so sánh với các lớp tài sản khác',
      minutes: 14,
      html: `
<h4>a) Đặc điểm chính</h4>
<ul>
<li><b>Cấu trúc</b>: thường là quỹ hợp danh hữu hạn (GP là người quản lý, LP là nhà đầu tư) hoặc công ty ở nơi có thuế thấp.</li>
<li><b>Ít quy định</b>: không phải đăng ký như quỹ đại chúng, không bị giới hạn đòn bẩy, bán khống, tập trung danh mục; công bố thông tin hạn chế.</li>
<li><b>Nhà đầu tư</b>: cá nhân giàu có, tổ chức; mức đầu tư tối thiểu cao.</li>
<li><b>Mục tiêu</b>: lợi nhuận tuyệt đối, tương quan thấp với thị trường; người quản lý thường góp vốn của chính mình vào quỹ.</li>
<li><b>Phí</b>: phí quản lý cộng phí thưởng (mô hình truyền thống "2 và 20", ngày nay thường thấp hơn).</li>
<li><b>Thanh khoản bị giới hạn</b> bởi các điều khoản sau.</li>
</ul>
<table class="plain"><thead><tr><th>Điều khoản</th><th>Ý nghĩa</th></tr></thead><tbody>
<tr><td>${t('lockup', 'Lockup period')}</td><td>Khoảng thời gian sau khi đầu tư mà nhà đầu tư <b>không được rút</b> (hard lockup) hoặc rút phải chịu phí (soft lockup)</td></tr>
<tr><td>${t('notice', 'Notice period')}</td><td>Phải báo trước bao lâu trước ngày rút (ví dụ 30 - 90 ngày)</td></tr>
<tr><td>Tần suất rút vốn (redemption frequency)</td><td>Chỉ rút vào các ngày định sẵn: hằng tháng, hằng quý, hằng năm</td></tr>
<tr><td>Phí rút vốn (redemption fee)</td><td>Phí khi rút sớm, bù chi phí bán tài sản và bảo vệ nhà đầu tư ở lại</td></tr>
<tr><td>${t('gate', 'Gate')}</td><td>Quỹ giới hạn tổng lượng rút trong một kỳ (ví dụ tối đa 10% tài sản quỹ), thường dùng khi thị trường căng thẳng</td></tr>
<tr><td>${t('sidepocket', 'Side pocket')}</td><td>Tách tài sản kém thanh khoản ra một tài khoản riêng; nhà đầu tư rút vốn chỉ nhận phần thanh khoản, phần side pocket trả khi tài sản được bán</td></tr>
</tbody></table>
<p>Lý do của các điều khoản: quỹ nắm tài sản kém thanh khoản hoặc dùng đòn bẩy; nếu ai cũng rút cùng lúc, quỹ phải bán tháo, gây thiệt hại cho người ở lại.</p>

<h4>b) So sánh với các lớp tài sản khác</h4>
<table class="plain"><thead><tr><th></th><th>Quỹ tương hỗ truyền thống</th><th>Hedge fund</th><th>Quỹ private equity</th></tr></thead><tbody>
<tr><td>Nhà đầu tư</td><td>Đại chúng</td><td>Đủ điều kiện</td><td>Đủ điều kiện, tổ chức</td></tr>
<tr><td>Quy định</td><td>Chặt</td><td>Nhẹ</td><td>Nhẹ</td></tr>
<tr><td>Tài sản</td><td>Chủ yếu chứng khoán niêm yết, long-only</td><td>Chủ yếu tài sản <b>có thị trường</b> (cổ phiếu, trái phiếu, phái sinh, tiền tệ, hàng hóa), mua và bán khống</td><td>Công ty tư nhân, kém thanh khoản</td></tr>
<tr><td>Đòn bẩy, bán khống</td><td>Hạn chế</td><td>Tự do</td><td>Đòn bẩy ở cấp công ty (LBO)</td></tr>
<tr><td>Cấu trúc vốn</td><td>Mở, rút hằng ngày</td><td><b>Mở (evergreen)</b> nhưng có lockup, notice, gate</td><td>Đóng, kỳ hạn khoảng 10 năm, gọi vốn dần</td></tr>
<tr><td>Mục tiêu</td><td>Vượt chỉ số tham chiếu</td><td>Lợi nhuận tuyệt đối</td><td>Tạo giá trị qua kiểm soát, thoái vốn</td></tr>
<tr><td>Minh bạch</td><td>Cao</td><td>Thấp</td><td>Thấp</td></tr>
</tbody></table>
<p class="warn"><b>Bẫy:</b> hedge fund thường nắm tài sản <b>thanh khoản hơn</b> private equity, nhưng nhà đầu tư vẫn bị giới hạn rút vốn. Đừng nhầm "tài sản thanh khoản" với "quỹ thanh khoản".</p>`,
    },
    {
      title: '3. Các nhóm chiến lược',
      minutes: 16,
      html: `
<table class="plain"><thead><tr><th>Nhóm</th><th>Chiến lược con</th><th>Ý tưởng kiếm lời</th></tr></thead><tbody>
<tr><td>${t('eqhedge', 'Equity hedge')}</td><td>Long/short cổ phiếu, ${t('mktneutral', 'market neutral')}, short bias, chuyên ngành</td><td>Chọn cổ phiếu: mua cổ phiếu được định giá thấp, bán khống cổ phiếu định giá cao</td></tr>
<tr><td>${t('eventdriven', 'Event-driven')}</td><td>${t('mergerarb', 'Merger arbitrage')}, chứng khoán khó khăn (distressed), activist, tình huống đặc biệt (tách công ty, mua lại cổ phiếu)</td><td>Kiếm lời từ sự kiện doanh nghiệp</td></tr>
<tr><td>${t('relvalue', 'Relative value')}</td><td>Fixed income arbitrage, convertible bond arbitrage, volatility arbitrage</td><td>Mua tài sản rẻ, bán tài sản liên quan đắt; chờ chênh lệch thu hẹp. Lợi nhuận mỗi giao dịch nhỏ nên thường dùng <b>đòn bẩy cao</b></td></tr>
<tr><td>Opportunistic</td><td>${t('macro', 'Global macro')}, ${t('cta', 'managed futures (CTA)')}</td><td>Đặt cược vào xu hướng vĩ mô (lãi suất, tiền tệ, hàng hóa) hoặc theo xu hướng giá bằng mô hình</td></tr>
<tr><td>Specialist</td><td>Bán biến động (volatility), tái bảo hiểm, bản quyền, tín dụng chuyên biệt</td><td>Kiến thức chuyên sâu về thị trường ngách</td></tr>
<tr><td>Multi-strategy / multi-manager</td><td>Nhiều chiến lược hoặc nhiều nhóm giao dịch trong một quỹ</td><td>Đa dạng hóa, phân bổ vốn linh hoạt giữa các chiến lược</td></tr>
</tbody></table>

<h4>a) Equity hedge: gross và net exposure</h4>
<div class="formula">Gross exposure = Long + Short &nbsp;&nbsp;·&nbsp;&nbsp; Net exposure = Long - Short (tính theo % vốn của quỹ)</div>
<div class="example"><div class="ex-h">Ví dụ 3.1</div>
<p>Quỹ có vốn 100 triệu USD, mua 120 triệu USD cổ phiếu và bán khống 80 triệu USD cổ phiếu. Tính gross và net exposure.</p>
<details><summary>Xem lời giải</summary>
<p>Gross = 120% + 80% = <b>200%</b> (đo mức dùng đòn bẩy). Net = 120% - 80% = <b>40% long</b> (đo mức tiếp xúc với hướng đi của thị trường). Quỹ market neutral cố gắng giữ net (hoặc beta ròng) gần 0; quỹ short bias có net âm.</p></details></div>

<h4>b) Merger arbitrage: lãi nhỏ thường xuyên, lỗ lớn hiếm khi</h4>
<div class="example"><div class="ex-h">Ví dụ 3.2</div>
<p>Công ty A công bố mua công ty B với giá 50 USD/cổ phiếu tiền mặt. Cổ phiếu B đang giao dịch ở 46 USD. Nếu thương vụ thất bại, giá B dự kiến về 38 USD. Tính lãi nếu thương vụ thành công, lỗ nếu thất bại, và lợi nhuận kỳ vọng nếu xác suất thành công 90%.</p>
<details><summary>Xem lời giải</summary>
<p>Thành công: (50 - 46) / 46 = <b>+8,70%</b>. Thất bại: (38 - 46) / 46 = <b>-17,39%</b>.<br>
Kỳ vọng = 0,9 × 8,70% + 0,1 × (-17,39%) = <b>6,09%</b>.</p>
<p>Đây giống như <b>bán bảo hiểm</b> cho rủi ro thương vụ đổ vỡ: phần lớn thời gian lãi nhỏ, thỉnh thoảng lỗ lớn. Phân phối lợi nhuận <b>lệch âm</b>, và thương vụ dễ đổ vỡ đồng loạt khi thị trường khủng hoảng.</p></details></div>
<p>Với thương vụ trả bằng cổ phiếu, quỹ thường <b>mua cổ phiếu mục tiêu và bán khống cổ phiếu bên mua</b> theo tỷ lệ hoán đổi, để chỉ giữ lại rủi ro thương vụ.</p>

<h4>c) Relative value và opportunistic</h4>
<ul>
<li><b>Convertible arbitrage</b>: mua trái phiếu chuyển đổi bị định giá thấp, bán khống cổ phiếu cơ sở để phòng hộ; lợi nhuận từ định giá sai của quyền chọn ẩn trong trái phiếu. Rủi ro: thanh khoản, tín dụng, đòn bẩy khi thị trường căng thẳng.</li>
<li><b>Global macro</b>: phân tích từ trên xuống (top-down) về lãi suất, tiền tệ, chính sách; vị thế lớn trên nhiều thị trường.</li>
<li><b>Managed futures</b>: thường là chiến lược hệ thống theo xu hướng (trend following) trên futures. Hay có lợi nhuận tốt trong các đợt thị trường giảm kéo dài, nên được gọi là chiến lược "crisis alpha".</li>
</ul>`,
    },
    {
      title: '4. Hình thức và phương tiện đầu tư',
      minutes: 14,
      html: `
<h4>a) Đầu tư trực tiếp vào quỹ và cấu trúc master-feeder</h4>
<p>Cách phổ biến nhất: nhà đầu tư trở thành LP của quỹ. Để phục vụ cả nhà đầu tư trong nước và nước ngoài với cách xử lý thuế khác nhau, nhiều quỹ dùng ${t('masterfeeder', 'cấu trúc master-feeder')}:</p>
<ul>
<li><b>Feeder trong nước</b> (onshore, thường là LP) cho nhà đầu tư chịu thuế trong nước.</li>
<li><b>Feeder nước ngoài</b> (offshore, thường là công ty ở nơi thuế thấp) cho nhà đầu tư nước ngoài và tổ chức miễn thuế.</li>
<li>Cả hai feeder đổ vốn vào <b>một quỹ master</b>, nơi mọi giao dịch được thực hiện. Một danh mục duy nhất giúp tiết kiệm chi phí giao dịch, quản lý, và mọi nhà đầu tư được đối xử như nhau về danh mục.</li>
</ul>
<p>Quỹ cũng có thể có nhiều <b>lớp chứng chỉ (share classes)</b> với mức phí, lockup khác nhau, và ${t('sideletter', 'side letter')}: thỏa thuận riêng cho nhà đầu tư lớn (phí thấp hơn, báo cáo nhiều hơn, quyền rút ưu tiên).</p>

<h4>b) Fund of funds</h4>
<p>${t('fof', 'Fund of funds (FoF)')} là quỹ đầu tư vào nhiều hedge fund khác.</p>
<table class="plain"><thead><tr><th>Ưu điểm</th><th>Nhược điểm</th></tr></thead><tbody>
<tr><td>Đa dạng hóa nhiều quỹ, nhiều chiến lược với vốn nhỏ hơn</td><td><b>Hai tầng phí</b>: phí của FoF cộng phí của các quỹ con</td></tr>
<tr><td>Thẩm định (due diligence) và giám sát chuyên nghiệp</td><td>Phí thưởng có thể bị trả cho quỹ con thắng dù tổng danh mục lỗ</td></tr>
<tr><td>Tiếp cận quỹ đã đóng cửa với nhà đầu tư mới</td><td>Minh bạch thấp hơn, thanh khoản phụ thuộc quỹ con; đa dạng quá mức làm loãng alpha</td></tr>
</tbody></table>

<h4>c) Separately managed account và fund of one</h4>
<p>${t('sma', 'Separately managed account (SMA)')}: người quản lý giao dịch theo chiến lược của quỹ nhưng trong <b>tài khoản đứng tên nhà đầu tư</b>. Nhà đầu tư thấy toàn bộ vị thế (minh bạch), giữ quyền sở hữu tài sản, có thể tùy chỉnh (loại trừ ngành, giới hạn đòn bẩy) và thanh khoản tốt hơn. Đổi lại: cần vốn rất lớn, chi phí vận hành cao, nhà đầu tư phải tự lo hạ tầng giám sát, và người quản lý không phải lúc nào cũng nhận.</p>
<p><b>Fund of one</b>: quỹ riêng chỉ có một nhà đầu tư; nằm giữa quỹ chung và SMA, giữ được cấu trúc pháp lý của quỹ nhưng điều khoản may đo.</p>

<h4>d) Liquid alternatives</h4>
<p>${t('liquidalt', 'Liquid alternatives')}: quỹ đại chúng chịu quy định (ví dụ quỹ theo luật 1940 ở Mỹ, quỹ UCITS ở châu Âu) áp dụng chiến lược kiểu hedge fund. Ưu: thanh khoản hằng ngày hoặc thường xuyên, minh bạch, vốn tối thiểu thấp, phí thấp hơn. Nhược: bị giới hạn đòn bẩy, bán khống, tài sản kém thanh khoản, nên lợi nhuận thường <b>thấp hơn</b> quỹ tư nhân cùng chiến lược.</p>
<table class="plain"><thead><tr><th></th><th>Quỹ chung (LP)</th><th>Fund of funds</th><th>SMA</th><th>Liquid alt</th></tr></thead><tbody>
<tr><td>Minh bạch</td><td>Thấp</td><td>Thấp nhất</td><td><b>Cao nhất</b></td><td>Cao</td></tr>
<tr><td>Phí</td><td>Cao</td><td><b>Cao nhất</b> (hai tầng)</td><td>Thương lượng, chi phí vận hành cao</td><td>Thấp hơn</td></tr>
<tr><td>Vốn tối thiểu</td><td>Cao</td><td>Thấp hơn</td><td>Rất cao</td><td>Thấp</td></tr>
<tr><td>Thanh khoản</td><td>Lockup, notice, gate</td><td>Phụ thuộc quỹ con</td><td>Tốt</td><td>Tốt nhất</td></tr>
</tbody></table>`,
    },
    {
      title: '5. Nguồn lợi nhuận: market beta, strategy beta và alpha',
      minutes: 12,
      html: `
<p>Lợi nhuận của hedge fund chủ yếu đến từ <b>sự kém hiệu quả của thị trường</b> và <b>biến động giá</b>, được tách thành ba lớp:</p>
<table class="plain"><thead><tr><th>Lớp</th><th>Là gì</th><th>Có thể mua rẻ ở đâu</th></tr></thead><tbody>
<tr><td>${t('mktbeta', 'Market beta')}</td><td>Phần lợi nhuận do tiếp xúc với thị trường chung (ví dụ chỉ số cổ phiếu)</td><td>Quỹ chỉ số, ETF, chi phí rất thấp</td></tr>
<tr><td>${t('stratbeta', 'Strategy beta')} (alternative risk premia)</td><td>Phần thưởng cho các yếu tố hoặc phong cách cụ thể: giá trị (value), quán tính (momentum), carry, bán biến động, rủi ro thương vụ</td><td>Sản phẩm risk premia, smart beta, chi phí vừa phải</td></tr>
<tr><td>${t('alpha', 'Alpha')}</td><td>Phần còn lại nhờ kỹ năng chọn chứng khoán, chọn thời điểm của người quản lý</td><td>Chỉ có ở người quản lý giỏi, đáng trả phí cao</td></tr>
</tbody></table>
<div class="formula">Alpha = Lợi nhuận quỹ - β<sub>thị trường</sub> × R<sub>thị trường</sub> - Σ β<sub>chiến lược</sub> × R<sub>yếu tố</sub></div>
<div class="example"><div class="ex-h">Ví dụ 5.1 - Tách lợi nhuận</div>
<p>Một quỹ long/short đạt 9% trong năm. Quỹ có beta 0,4 với chỉ số cổ phiếu (chỉ số tăng 10%) và hệ số tiếp xúc 0,5 với yếu tố giá trị (yếu tố này mang lại 3%). Tính phần alpha. (Để đơn giản, bỏ qua lãi suất phi rủi ro.)</p>
<details><summary>Xem lời giải</summary>
<p>Market beta: 0,4 × 10% = 4,0%. Strategy beta: 0,5 × 3% = 1,5%. Alpha = 9% - 4,0% - 1,5% = <b>3,5%</b>.</p>
<p class="warn">Nếu chỉ trừ market beta, alpha "trông như" 5%: người quản lý được ghi công cho 1,5% mà thật ra có thể mua rẻ qua một sản phẩm yếu tố giá trị. Đây là lý do nhà đầu tư ngày càng không muốn trả phí "2 và 20" cho strategy beta.</p></details></div>
<p><b>Đòn bẩy</b> không phải nguồn lợi nhuận riêng mà là bộ khuếch đại: relative value kiếm vài phần mười phần trăm mỗi giao dịch, nhân đòn bẩy nhiều lần mới thành lợi nhuận đáng kể, và lỗ cũng được nhân lên tương ứng.</p>`,
    },
    {
      title: '6. Rủi ro và đa dạng hóa',
      minutes: 12,
      html: `
<h4>a) Rủi ro đặc thù của hedge fund</h4>
<ul>
<li><b>Đòn bẩy</b>: lỗ khuếch đại; bị gọi ký quỹ có thể buộc bán tháo đúng lúc giá xấu nhất.</li>
<li><b>Thanh khoản</b>: tài sản kém thanh khoản hoặc chênh lệch giữa tài sản và điều khoản rút vốn; khi nhiều nhà đầu tư rút cùng lúc, quỹ dùng gate, side pocket.</li>
<li><b>Đối tác</b>: phụ thuộc prime broker (vay chứng khoán, cấp tín dụng) và đối tác phái sinh OTC.</li>
<li><b>Vận hành</b>: định giá sai, gian lận, hệ thống; <b>key person</b> (phụ thuộc một nhà quản lý ngôi sao).</li>
<li><b>Bán khống</b>: lỗ tiềm năng không giới hạn, short squeeze, chi phí vay cổ phiếu tăng.</li>
<li><b>Style drift</b> (trôi phong cách): người quản lý rời xa chiến lược đã cam kết; <b>crowding</b>: nhiều quỹ cùng vị thế, thoát cùng lúc.</li>
<li><b>Mô hình</b> (quant, relative value) và minh bạch thấp khiến khó giám sát.</li>
</ul>

<h4>b) Thiên lệch trong dữ liệu lợi nhuận</h4>
<table class="plain"><thead><tr><th>Thiên lệch</th><th>Cơ chế</th><th>Hệ quả</th></tr></thead><tbody>
<tr><td>${t('survbias', 'Survivorship bias')}</td><td>Quỹ thua lỗ đóng cửa, ngừng báo cáo và bị loại khỏi cơ sở dữ liệu</td><td>Lợi nhuận trung bình bị <b>phóng đại</b>, rủi ro bị đánh giá thấp</td></tr>
<tr><td>${t('backfill', 'Backfill bias')}</td><td>Quỹ chỉ tham gia cơ sở dữ liệu sau khi có thành tích tốt và đưa cả lịch sử tốt đó vào</td><td>Lợi nhuận quá khứ bị phóng đại</td></tr>
<tr><td>Làm trơn (smoothing)</td><td>Tài sản kém thanh khoản được định giá bằng mô hình, giá cũ</td><td>Biến động và tương quan đo được thấp hơn thực tế</td></tr>
</tbody></table>
<div class="example"><div class="ex-h">Ví dụ 6.1 - Survivorship bias</div>
<p>10 quỹ bắt đầu cùng lúc. Cuối kỳ, 7 quỹ còn hoạt động với lợi nhuận trung bình 9%/năm; 3 quỹ đã đóng cửa với lợi nhuận trung bình -6%/năm. Cơ sở dữ liệu chỉ còn 7 quỹ sống sót. Lợi nhuận trung bình bị phóng đại bao nhiêu?</p>
<details><summary>Xem lời giải</summary>
<p>Trung bình thật = (7 × 9% + 3 × (-6%)) / 10 = <b>4,5%</b>. Cơ sở dữ liệu báo 9%, phóng đại <b>4,5 điểm %</b>.</p></details></div>

<h4>c) Phân phối lợi nhuận không chuẩn</h4>
<p>Nhiều chiến lược (merger arbitrage, relative value, bán biến động, tín dụng) có ${t('negskew', 'phân phối lệch âm')} và đuôi dày: lãi nhỏ đều đặn, thỉnh thoảng lỗ rất lớn. Khi đó <b>độ lệch chuẩn và Sharpe ratio đánh giá thấp rủi ro</b>; nên xem thêm drawdown tối đa, độ lệch, độ nhọn, các thước đo rủi ro đuôi.</p>

<h4>d) Đa dạng hóa</h4>
<ul>
<li>Lợi ích đa dạng hóa phụ thuộc rất mạnh vào <b>chiến lược</b>: equity hedge long-biased tương quan khá cao với cổ phiếu; market neutral, relative value tương quan thấp trong điều kiện bình thường.</li>
<li>Trong khủng hoảng, tương quan của nhiều chiến lược <b>tăng vọt</b> (event-driven, distressed, relative value có đòn bẩy cùng lỗ khi thanh khoản biến mất).</li>
<li>Global macro và managed futures thường là bộ đa dạng hóa tốt nhất trong các đợt giảm kéo dài.</li>
<li>Lợi ích thật sau phí cần được đánh giá kỹ: lợi nhuận trung bình ngành sau phí trong nhiều năm gần đây không cao, và phân tán rất lớn giữa quỹ giỏi và quỹ kém, nên <b>chọn quỹ và thẩm định</b> (đầu tư lẫn vận hành) là then chốt.</li>
</ul>`,
    },
    {
      title: '7. Tóm tắt và bẫy thường gặp',
      minutes: 6,
      html: `
<table class="plain"><thead><tr><th>Chủ đề</th><th>Nhớ</th><th>Bẫy</th></tr></thead><tbody>
<tr><td>Đặc điểm</td><td>Tư nhân, ít quy định, đòn bẩy, bán khống, lợi nhuận tuyệt đối</td><td>Tài sản thanh khoản nhưng quỹ bị giới hạn rút vốn</td></tr>
<tr><td>Thanh khoản</td><td>Lockup, notice, tần suất, phí rút, gate, side pocket</td><td>Gate giới hạn tổng lượng rút của cả quỹ</td></tr>
<tr><td>Gross, net</td><td>Gross = long + short; net = long - short</td><td>Gross đo đòn bẩy, net đo hướng thị trường</td></tr>
<tr><td>Merger arbitrage</td><td>Mua mục tiêu (bán khống bên mua nếu trả bằng cổ phiếu)</td><td>Lệch âm: lãi nhỏ, lỗ lớn khi thương vụ đổ</td></tr>
<tr><td>Relative value</td><td>Chênh lệch nhỏ, đòn bẩy cao</td><td>Rủi ro thanh khoản, đối tác khi căng thẳng</td></tr>
<tr><td>Master-feeder</td><td>Onshore + offshore feeder → một master</td><td>Mục đích: hiệu quả thuế, một danh mục</td></tr>
<tr><td>Fund of funds</td><td>Đa dạng, thẩm định, tiếp cận</td><td>Hai tầng phí</td></tr>
<tr><td>SMA</td><td>Minh bạch, kiểm soát, tùy chỉnh</td><td>Vốn lớn, chi phí cao</td></tr>
<tr><td>Liquid alternatives</td><td>Quỹ đại chúng chịu quy định, thanh khoản</td><td>Giới hạn đòn bẩy nên lợi nhuận thường thấp hơn</td></tr>
<tr><td>Nguồn lợi nhuận</td><td>Market beta + strategy beta + alpha</td><td>Quên trừ strategy beta làm alpha phóng đại</td></tr>
<tr><td>Dữ liệu</td><td>Survivorship, backfill, smoothing</td><td>Đều làm lợi nhuận đẹp hơn, rủi ro thấp hơn thực tế</td></tr>
<tr><td>Đa dạng hóa</td><td>Phụ thuộc chiến lược; macro, CTA tốt trong khủng hoảng</td><td>Tương quan tăng vọt khi khủng hoảng</td></tr>
</tbody></table>
<p>Tiếp theo: tab <b>Luyện tập</b> 10 câu (rút ngẫu nhiên từ ngân hàng 30 câu, mỗi lần làm một bộ khác). Module sau (AI-07) là tài sản số; nhiều quỹ tiền mã hóa cũng dùng cấu trúc hedge fund vừa học.</p>`,
    },
  ];

  const glossary = {
    hf: ['Hedge fund', 'Quỹ phòng hộ', 'Quỹ tư nhân góp vốn chung, ít quy định, tự do dùng đòn bẩy, bán khống, phái sinh; nhắm lợi nhuận tuyệt đối.'],
    accredited: ['Accredited / qualified investor', 'Nhà đầu tư đủ điều kiện', 'Nhà đầu tư đạt ngưỡng tài sản hoặc thu nhập theo luật, được phép đầu tư vào quỹ tư nhân.'],
    lockup: ['Lockup period', 'Thời gian khóa vốn', 'Thời gian sau khi đầu tư mà nhà đầu tư không được rút hoặc rút phải chịu phí.'],
    notice: ['Notice period', 'Thời gian báo trước', 'Khoảng thời gian phải thông báo trước khi rút vốn.'],
    gate: ['Gate provision', 'Điều khoản giới hạn rút vốn', 'Quỹ giới hạn tổng lượng vốn được rút trong một kỳ.'],
    sidepocket: ['Side pocket', 'Tài khoản tách riêng', 'Tài khoản tách tài sản kém thanh khoản; nhà đầu tư chỉ nhận phần này khi tài sản được bán.'],
    eqhedge: ['Equity hedge strategies', 'Chiến lược cổ phiếu phòng hộ', 'Mua và bán khống cổ phiếu dựa trên phân tích chọn cổ phiếu.'],
    mktneutral: ['Market neutral', 'Trung lập thị trường', 'Giữ beta hoặc net exposure gần 0 để lợi nhuận chỉ đến từ chọn cổ phiếu.'],
    eventdriven: ['Event-driven strategies', 'Chiến lược theo sự kiện', 'Kiếm lời từ sự kiện doanh nghiệp: sáp nhập, phá sản, tái cấu trúc, hoạt động cổ đông.'],
    mergerarb: ['Merger arbitrage', 'Kinh doanh chênh lệch sáp nhập', 'Mua cổ phiếu công ty mục tiêu (và bán khống bên mua nếu trả bằng cổ phiếu) để hưởng chênh lệch khi thương vụ hoàn tất.'],
    relvalue: ['Relative value strategies', 'Chiến lược giá trị tương đối', 'Mua tài sản rẻ, bán tài sản liên quan đắt, chờ chênh lệch thu hẹp; thường dùng đòn bẩy cao.'],
    macro: ['Global macro', 'Vĩ mô toàn cầu', 'Đặt cược vào xu hướng vĩ mô qua lãi suất, tiền tệ, hàng hóa, chỉ số.'],
    cta: ['Managed futures (CTA)', 'Quỹ futures được quản lý', 'Giao dịch futures, thường theo hệ thống bám xu hướng; hay hoạt động tốt khi thị trường giảm kéo dài.'],
    masterfeeder: ['Master-feeder structure', 'Cấu trúc master-feeder', 'Các quỹ feeder trong nước và nước ngoài cùng đầu tư vào một quỹ master nơi thực hiện giao dịch.'],
    sideletter: ['Side letter', 'Thỏa thuận riêng', 'Thỏa thuận bổ sung giữa quỹ và một nhà đầu tư về phí, báo cáo, quyền rút vốn.'],
    fof: ['Fund of funds', 'Quỹ của các quỹ', 'Quỹ đầu tư vào nhiều hedge fund; đa dạng hóa, thẩm định, nhưng có hai tầng phí.'],
    sma: ['Separately managed account (SMA)', 'Tài khoản quản lý riêng', 'Tài khoản đứng tên nhà đầu tư, người quản lý giao dịch theo chiến lược; minh bạch và tùy chỉnh cao.'],
    liquidalt: ['Liquid alternatives', 'Quỹ thay thế thanh khoản', 'Quỹ đại chúng chịu quy định áp dụng chiến lược kiểu hedge fund, thanh khoản thường xuyên.'],
    mktbeta: ['Market beta', 'Beta thị trường', 'Phần lợi nhuận do tiếp xúc với thị trường chung; mua được rẻ qua quỹ chỉ số.'],
    stratbeta: ['Strategy beta (alternative risk premia)', 'Beta chiến lược', 'Phần thưởng cho các yếu tố hoặc phong cách cụ thể như value, momentum, carry.'],
    alpha: ['Alpha', 'Alpha', 'Lợi nhuận vượt trội còn lại sau khi trừ market beta và strategy beta; phản ánh kỹ năng.'],
    survbias: ['Survivorship bias', 'Thiên lệch sống sót', 'Quỹ thất bại bị loại khỏi dữ liệu, làm lợi nhuận trung bình bị phóng đại.'],
    backfill: ['Backfill bias', 'Thiên lệch điền ngược', 'Quỹ chỉ báo cáo sau khi có thành tích tốt, kèm cả lịch sử tốt, làm lợi nhuận quá khứ bị phóng đại.'],
    negskew: ['Negative skewness', 'Lệch âm', 'Phân phối có đuôi trái dài: lãi nhỏ thường xuyên, lỗ lớn hiếm khi.'],
  };

  const practice = [
    { q: 'Một quỹ hedge fund đạt lợi nhuận 12%. Quỹ có beta 0,6 với chỉ số cổ phiếu (chỉ số tăng 8%) và hệ số tiếp xúc 0,8 với yếu tố giá trị (yếu tố mang lại 2,5%). Bỏ qua lãi suất phi rủi ro, alpha của quỹ là:', choices: ['10,0%', '7,2%', '5,2%'], answer: 2, explain: 'Alpha = 12% - 0,6 × 8% - 0,8 × 2,5% = 12% - 4,8% - 2,0% = 5,2%. 7,2% là chỉ trừ market beta (quên strategy beta); 10,0% là chỉ trừ strategy beta.' },
    { q: 'Một quỹ có vốn 100 triệu USD, mua 150 triệu USD cổ phiếu và bán khống 100 triệu USD cổ phiếu. Gross exposure và net exposure là:', choices: ['Gross 250%, net 50%', 'Gross 50%, net 250%', 'Gross 150%, net 100%'], answer: 0, explain: 'Gross = long + short = 150% + 100% = 250%; net = long - short = 150% - 100% = 50%. Lựa chọn \'gross 50%, net 250%\' đảo hai khái niệm; lựa chọn \'gross 150%, net 100%\' chỉ là hai vế long và short.' },
    { q: 'Công ty X công bố mua công ty Y với giá 42 USD/cổ phiếu tiền mặt; cổ phiếu Y đang giao dịch ở 38 USD. Lợi nhuận của quỹ merger arbitrage mua Y nếu thương vụ hoàn tất là:', choices: ['9,52%', '10,53%', '4,00%'], answer: 1, explain: 'Lợi nhuận = (42 - 38) / 38 = 10,53%. 9,52% là chia nhầm cho giá chào mua 42; 4,00% là chênh lệch tính bằng USD, không phải tỷ lệ.' },
    { q: 'Một quỹ hưu trí lớn muốn thấy toàn bộ vị thế theo thời gian thực, giữ quyền sở hữu tài sản và áp giới hạn đòn bẩy riêng. Phương tiện phù hợp nhất là:', choices: ['Fund of funds', 'Separately managed account', 'Feeder fund nước ngoài'], answer: 1, explain: 'SMA đứng tên nhà đầu tư, minh bạch hoàn toàn và tùy chỉnh được. Fund of funds có minh bạch thấp nhất; feeder fund chỉ là cửa vào quỹ chung, không cho quyền kiểm soát.' },
    { q: 'Nhược điểm đặc trưng nhất của fund of funds so với đầu tư trực tiếp vào một hedge fund là:', choices: ['Không mang lại lợi ích đa dạng hóa', 'Nhà đầu tư phải tự thẩm định từng quỹ con', 'Nhà đầu tư chịu hai tầng phí'], answer: 2, explain: 'Fund of funds thu phí riêng cộng với phí của các quỹ con. Đa dạng hóa và thẩm định chuyên nghiệp lại chính là ưu điểm của fund of funds.' },
    { q: 'Survivorship bias trong cơ sở dữ liệu hedge fund có xu hướng:', choices: ['Phóng đại lợi nhuận trung bình và đánh giá thấp rủi ro', 'Làm lợi nhuận trung bình thấp hơn thực tế', 'Không ảnh hưởng vì các quỹ đóng cửa đã được thay bằng quỹ mới'], answer: 0, explain: 'Quỹ thua lỗ đóng cửa và bị loại khỏi dữ liệu, chỉ còn quỹ sống sót có thành tích tốt, nên lợi nhuận trung bình bị phóng đại và rủi ro (kể cả rủi ro thất bại) bị đánh giá thấp.' },
    { q: 'Chiến lược nào trong số sau thường mang lại lợi ích đa dạng hóa tốt nhất trong một đợt thị trường cổ phiếu giảm kéo dài?', choices: ['Merger arbitrage', 'Managed futures theo xu hướng', 'Đầu tư chứng khoán khó khăn (distressed)'], answer: 1, explain: 'Managed futures bám xu hướng có thể bán khống theo xu hướng giảm nên thường lãi trong các đợt giảm kéo dài. Merger arbitrage và distressed chịu rủi ro thương vụ, tín dụng, thanh khoản, thường lỗ cùng thị trường trong khủng hoảng.' },
    { q: 'Mục đích chính của cấu trúc master-feeder là:', choices: ['Cho nhà đầu tư trong nước và nước ngoài với hoàn cảnh thuế khác nhau cùng đầu tư vào một danh mục duy nhất', 'Cho phép mỗi nhà đầu tư có danh mục riêng tùy chỉnh', 'Tránh hoàn toàn phí thưởng cho người quản lý'], answer: 0, explain: 'Feeder trong nước và nước ngoài phục vụ từng nhóm nhà đầu tư về thuế, rồi cùng đổ vốn vào quỹ master giao dịch một danh mục. Danh mục riêng tùy chỉnh là SMA; master-feeder không loại bỏ phí.' },
    { q: 'Một quỹ relative value có lợi nhuận hằng tháng rất ổn định trong 5 năm, Sharpe ratio cao, nhưng chiến lược về bản chất là bán bảo hiểm cho các biến cố hiếm. Nhận định nào hợp lý nhất?', choices: ['Sharpe ratio cao chứng tỏ rủi ro thấp', 'Lợi nhuận chắc chắn có phân phối chuẩn', 'Phân phối có thể lệch âm, đuôi dày; độ lệch chuẩn đánh giá thấp rủi ro đuôi'], answer: 2, explain: 'Chiến lược kiểu bán bảo hiểm thường lãi nhỏ đều đặn và thỉnh thoảng lỗ rất lớn. Độ lệch chuẩn và Sharpe ratio không bắt được rủi ro đuôi, nên cần xem drawdown, độ lệch, độ nhọn.' },
    { q: 'Đặc điểm nào phân biệt rõ nhất hedge fund với quỹ tương hỗ truyền thống?', choices: ['Được dùng đòn bẩy, bán khống linh hoạt và thường có thời gian khóa vốn', 'Định giá và cho rút vốn hằng ngày', 'Phải công bố danh mục chi tiết định kỳ theo quy định chặt chẽ'], answer: 0, explain: 'Hedge fund ít bị quy định nên tự do dùng đòn bẩy, bán khống, và giới hạn rút vốn bằng lockup, notice, gate. Định giá, rút vốn hằng ngày và công bố danh mục chặt chẽ là đặc điểm của quỹ tương hỗ.' },
    { q: "Một hedge fund tách các khoản đầu tư kém thanh khoản sang một tài khoản riêng; nhà đầu tư rút vốn chỉ nhận phần tương ứng với tài sản thanh khoản, phần còn lại được trả khi các tài sản kia được bán. Điều khoản này là:", choices: ["Gate", "Side pocket", "Notice period"], answer: 1, explain: "Side pocket tách tài sản kém thanh khoản ra tài khoản riêng và chỉ trả khi tài sản được bán. Gate giới hạn tổng lượng rút của cả quỹ trong một kỳ. Notice period là thời gian nhà đầu tư phải báo trước khi rút." },
    { q: "Một hedge fund cho rút vốn vào ngày cuối mỗi quý, với thời gian báo trước (notice period) 45 ngày. Nhà đầu tư gửi yêu cầu rút vốn vào đầu tháng Ba. Thời điểm rút vốn sớm nhất là:", choices: ["Cuối quý 1", "Cuối quý 2", "Cuối quý 3"], answer: 1, explain: "Từ đầu tháng Ba đến cuối tháng Ba (cuối quý 1) chỉ khoảng 30 ngày, chưa đủ 45 ngày báo trước, nên phải chờ đến ngày rút vốn kế tiếp là cuối quý 2. Lựa chọn cuối quý 1 bỏ qua notice period. Lựa chọn cuối quý 3 chờ thêm một kỳ không cần thiết." },
    { q: "Một quỹ có vốn 200 triệu USD, mua 120 triệu USD cổ phiếu và bán khống 180 triệu USD cổ phiếu. Phát biểu nào đúng?", choices: ["Gross 150%, net -30%; quỹ thiên về bán khống (short bias)", "Gross 30%, net 150%; quỹ market neutral", "Gross 150%, net 30%; quỹ thiên về mua (long-biased)"], answer: 0, explain: "Gross = (120 + 180) / 200 = 150%; net = (120 - 180) / 200 = -30%, net âm nên quỹ thiên về bán khống. Lựa chọn \"gross 30%, net 150%\" đảo hai khái niệm. Lựa chọn \"net 30%, long-biased\" sai dấu vì vị thế bán khống lớn hơn vị thế mua." },
    { q: "Một quỹ equity market neutral cố gắng:", choices: ["Giữ beta ròng gần 0, để lợi nhuận đến chủ yếu từ chọn cổ phiếu", "Luôn duy trì net exposure âm lớn", "Đặt cược vào xu hướng lãi suất và tiền tệ toàn cầu"], answer: 0, explain: "Market neutral cân bằng vị thế mua và bán khống để beta ròng gần 0, lợi nhuận đến từ chênh lệch giữa cổ phiếu mua và cổ phiếu bán. Net exposure âm lớn là đặc điểm của quỹ short bias. Đặt cược xu hướng vĩ mô là global macro." },
    { q: "Công ty M công bố mua công ty N với giá 30 USD/cổ phiếu tiền mặt. Cổ phiếu N đang giao dịch ở 27 USD; nếu thương vụ thất bại, giá N dự kiến về 22 USD. Xác suất thương vụ hoàn tất là 85%. Lợi nhuận kỳ vọng của quỹ merger arbitrage mua N gần nhất với:", choices: ["11,11%", "9,44%", "6,67%"], answer: 2, explain: "Thành công: (30 - 27) / 27 = 11,11%; thất bại: (22 - 27) / 27 = -18,52%. Kỳ vọng = 0,85 × 11,11% + 0,15 × (-18,52%) = 6,67%. Lựa chọn 11,11% bỏ qua khả năng thương vụ thất bại. Lựa chọn 9,44% nhân xác suất thành công nhưng quên phần lỗ khi thất bại." },
    { q: "Với một thương vụ sáp nhập trả bằng cổ phiếu, quỹ merger arbitrage thường:", choices: ["Mua cổ phiếu bên mua và bán khống cổ phiếu công ty mục tiêu", "Mua cổ phiếu công ty mục tiêu và bán khống cổ phiếu bên mua theo tỷ lệ hoán đổi", "Chỉ mua trái phiếu chuyển đổi của công ty mục tiêu"], answer: 1, explain: "Quỹ mua cổ phiếu mục tiêu (đang giao dịch dưới giá chào mua) và bán khống cổ phiếu bên mua theo tỷ lệ hoán đổi, để loại bỏ rủi ro giá cổ phiếu bên mua và chỉ giữ lại rủi ro thương vụ. Lựa chọn đầu đảo ngược hai vị thế. Lựa chọn \"trái phiếu chuyển đổi\" mô tả convertible arbitrage." },
    { q: "Chiến lược convertible bond arbitrage điển hình là:", choices: ["Mua cổ phiếu cơ sở và bán khống trái phiếu chuyển đổi", "Mua quyền chọn bán trên chỉ số cổ phiếu", "Mua trái phiếu chuyển đổi bị định giá thấp và bán khống cổ phiếu cơ sở để phòng hộ"], answer: 2, explain: "Convertible arbitrage mua trái phiếu chuyển đổi bị định giá thấp (quyền chọn ẩn rẻ) và bán khống cổ phiếu cơ sở để phòng hộ rủi ro giá cổ phiếu. Lựa chọn đầu đảo ngược hai vị thế. Mua quyền chọn bán chỉ số là phòng hộ thị trường, không phải chiến lược relative value này." },
    { q: "Dựa trên phân tích chính sách tiền tệ, một quỹ đặt cược lớn rằng lãi suất Nhật Bản sẽ tăng và đồng yen sẽ tăng giá, đồng thời giữ vị thế trên trái phiếu và tiền tệ của nhiều nước. Quỹ này thuộc nhóm:", choices: ["Relative value", "Event-driven", "Opportunistic (global macro)"], answer: 2, explain: "Global macro thuộc nhóm opportunistic: phân tích từ trên xuống về lãi suất, tiền tệ, chính sách và đặt vị thế lớn trên nhiều thị trường. Relative value kiếm lời từ chênh lệch giá giữa các tài sản liên quan. Event-driven kiếm lời từ sự kiện doanh nghiệp như sáp nhập, tái cấu trúc." },
    { q: "Một quỹ mua 8% cổ phần của một công ty niêm yết, đòi ghế trong hội đồng quản trị và yêu cầu công ty bán một mảng kinh doanh kém hiệu quả. Chiến lược này thuộc nhóm:", choices: ["Event-driven (activist)", "Equity market neutral", "Relative value"], answer: 0, explain: "Activist investing là chiến lược event-driven: nhà đầu tư chủ động tạo ra sự kiện doanh nghiệp (thay đổi quản trị, bán tài sản) để tăng giá cổ phiếu. Equity market neutral giữ beta ròng gần 0 và chọn cổ phiếu, không can thiệp vào công ty. Relative value kiếm lời từ chênh lệch định giá giữa tài sản liên quan." },
    { q: "Vì sao các quỹ relative value thường sử dụng đòn bẩy cao?", choices: ["Vì chiến lược này luôn có lợi nhuận lớn trên mỗi giao dịch", "Vì chênh lệch giá khai thác ở mỗi giao dịch rất nhỏ, cần đòn bẩy để lợi nhuận trở nên đáng kể", "Vì quy định bắt buộc hedge fund phải dùng đòn bẩy"], answer: 1, explain: "Relative value kiếm lời từ chênh lệch nhỏ giữa các tài sản liên quan, nên phải nhân đòn bẩy nhiều lần; lỗ cũng bị nhân lên khi căng thẳng thanh khoản. Lựa chọn \"lợi nhuận lớn mỗi giao dịch\" ngược với thực tế. Không có quy định bắt buộc hedge fund dùng đòn bẩy." },
    { q: "Nhược điểm chính của liquid alternatives (quỹ đại chúng chịu quy định áp dụng chiến lược kiểu hedge fund) so với hedge fund tư nhân cùng chiến lược là:", choices: ["Bị giới hạn đòn bẩy, bán khống và tài sản kém thanh khoản, nên lợi nhuận thường thấp hơn", "Thanh khoản kém hơn hedge fund tư nhân", "Yêu cầu vốn đầu tư tối thiểu cao hơn"], answer: 0, explain: "Liquid alternatives phải tuân thủ quy định quỹ đại chúng, nên bị giới hạn đòn bẩy, bán khống và tài sản kém thanh khoản; lợi nhuận vì thế thường thấp hơn. Hai lựa chọn còn lại đảo ngược ưu điểm của chúng: liquid alternatives có thanh khoản tốt hơn và vốn tối thiểu thấp hơn." },
    { q: "Một quỹ riêng được lập chỉ cho một nhà đầu tư duy nhất, vẫn giữ cấu trúc pháp lý của quỹ nhưng có điều khoản may đo theo yêu cầu của nhà đầu tư đó. Phương tiện này là:", choices: ["Separately managed account", "Fund of one", "Liquid alternative"], answer: 1, explain: "Fund of one là quỹ chỉ có một nhà đầu tư, nằm giữa quỹ chung và SMA: giữ cấu trúc pháp lý của quỹ nhưng điều khoản may đo. SMA không phải là quỹ: tài sản nằm trong tài khoản đứng tên nhà đầu tư. Liquid alternative là quỹ đại chúng cho nhiều nhà đầu tư." },
    { q: "Một fund of funds phân bổ 50% vào quỹ A và 50% vào quỹ B. Trong năm, quỹ A đạt lợi nhuận gộp +20%, quỹ B đạt -10%; mỗi quỹ con thu phí thưởng 20% trên lợi nhuận dương (bỏ qua phí quản lý và phí của fund of funds). Lợi nhuận của danh mục fund of funds sau phí quỹ con gần nhất với:", choices: ["5,0%", "4,0%", "3,0%"], answer: 2, explain: "Quỹ A sau phí: 20% - 20% × 20% = 16%; quỹ B không thu phí: -10%. Danh mục = 0,5 × 16% + 0,5 × (-10%) = 3,0%. Lựa chọn 5,0% là lợi nhuận gộp, chưa trừ phí. Lựa chọn 4,0% tính phí thưởng trên lợi nhuận gộp của cả danh mục (80% × 5%), bỏ qua việc quỹ thắng vẫn thu phí dù quỹ kia lỗ." },
    { q: "Phần lợi nhuận của hedge fund đến từ tiếp xúc với các yếu tố như momentum, carry, giá trị (value), có thể mua với chi phí thấp qua các sản phẩm risk premia, được gọi là:", choices: ["Alpha", "Market beta", "Strategy beta (alternative risk premia)"], answer: 2, explain: "Strategy beta là phần thưởng cho tiếp xúc với yếu tố hoặc phong cách cụ thể, có thể mua qua sản phẩm risk premia với chi phí vừa phải. Alpha là phần còn lại nhờ kỹ năng người quản lý sau khi trừ cả market beta và strategy beta. Market beta là tiếp xúc với thị trường chung, mua được qua quỹ chỉ số." },
    { q: "Một hedge fund đạt lợi nhuận 7% trong năm chỉ số cổ phiếu giảm 10%. Quỹ có beta 0,3 với chỉ số cổ phiếu và hệ số tiếp xúc 0,6 với yếu tố carry (yếu tố này mang lại 4%). Bỏ qua lãi suất phi rủi ro, alpha của quỹ gần nhất với:", choices: ["10,0%", "7,6%", "1,6%"], answer: 1, explain: "Market beta = 0,3 × (-10%) = -3,0%; strategy beta = 0,6 × 4% = 2,4%. Alpha = 7% - (-3,0%) - 2,4% = 7,6%. Lựa chọn 10,0% quên trừ strategy beta. Lựa chọn 1,6% bỏ dấu âm của lợi nhuận chỉ số (trừ 3,0% thay vì cộng)." },
    { q: "20 hedge fund bắt đầu cùng lúc. Cuối kỳ, 14 quỹ còn hoạt động với lợi nhuận trung bình 8%/năm; 6 quỹ đã đóng cửa với lợi nhuận trung bình -5%/năm. Lợi nhuận trung bình thật của cả 20 quỹ gần nhất với:", choices: ["8,0%", "4,1%", "1,5%"], answer: 1, explain: "Trung bình thật = (14 × 8% + 6 × (-5%)) / 20 = 4,1%. Lựa chọn 8,0% chỉ tính các quỹ sống sót: đó chính là survivorship bias. Lựa chọn 1,5% lấy trung bình đơn giản của hai nhóm, bỏ qua số quỹ trong mỗi nhóm." },
    { q: "Rủi ro đặc thù của vị thế bán khống trong hedge fund là:", choices: ["Lỗ tối đa giới hạn ở số tiền đã đầu tư", "Không phát sinh chi phí vay cổ phiếu", "Lỗ tiềm năng không giới hạn và có thể bị short squeeze"], answer: 2, explain: "Giá cổ phiếu có thể tăng không giới hạn, nên lỗ của vị thế bán khống không giới hạn; khi nhiều bên cùng phải mua lại, giá bị đẩy lên mạnh (short squeeze). Lựa chọn \"lỗ tối đa giới hạn ở số tiền đầu tư\" mô tả vị thế mua. Lựa chọn \"không có chi phí vay cổ phiếu\" sai: bán khống phải vay cổ phiếu và phí vay có thể tăng." },
    { q: "Một quỹ cam kết với nhà đầu tư chiến lược equity market neutral, nhưng sau hai năm đã nâng net exposure lên 70% long để đuổi theo thị trường tăng. Rủi ro này gọi là:", choices: ["Trôi phong cách (style drift)", "Crowding", "Backfill bias"], answer: 0, explain: "Style drift là khi người quản lý rời xa chiến lược đã cam kết, khiến nhà đầu tư chịu rủi ro khác với dự kiến. Crowding là nhiều quỹ cùng nắm vị thế giống nhau và thoát cùng lúc. Backfill bias là thiên lệch dữ liệu khi quỹ đưa lịch sử tốt vào cơ sở dữ liệu." },
    { q: "Một hedge fund phụ thuộc vào một prime broker để vay chứng khoán bán khống và cấp tín dụng. Nếu prime broker này gặp khó khăn tài chính, quỹ chịu rủi ro chủ yếu là:", choices: ["Rủi ro đối tác (counterparty risk)", "Rủi ro con người chủ chốt (key person risk)", "Survivorship bias"], answer: 0, explain: "Prime broker và đối tác phái sinh OTC là đối tác của quỹ; khi họ gặp khó khăn, quỹ có thể mất tài sản, mất nguồn vay hoặc bị buộc đóng vị thế: đó là rủi ro đối tác. Key person risk là phụ thuộc vào một nhà quản lý chủ chốt. Survivorship bias là thiên lệch dữ liệu, không phải rủi ro của danh mục." },
    { q: "Phát biểu nào chính xác nhất về lợi ích đa dạng hóa của hedge fund?", choices: ["Mọi chiến lược hedge fund đều giữ tương quan thấp, ổn định với cổ phiếu, kể cả trong khủng hoảng", "Chiến lược equity hedge long-biased có tương quan rất thấp với cổ phiếu", "Lợi ích đa dạng hóa phụ thuộc mạnh vào chiến lược, và tương quan của nhiều chiến lược tăng vọt trong khủng hoảng"], answer: 2, explain: "Market neutral, relative value có tương quan thấp trong điều kiện bình thường, nhưng trong khủng hoảng nhiều chiến lược (event-driven, relative value có đòn bẩy) cùng lỗ; global macro và managed futures thường đa dạng hóa tốt hơn. Lựa chọn \"mọi chiến lược đều tương quan thấp, ổn định\" sai vì tương quan tăng vọt khi khủng hoảng. Lựa chọn \"long-biased tương quan rất thấp\" sai: equity hedge long-biased tương quan khá cao với cổ phiếu." },
  ];

  window.LESSONS['AI-06'] = {
    moduleId: 'AI-06',
    calculator: 'BA II Plus',
    warmup: [
      'Ôn AI-01: high-water mark bảo vệ nhà đầu tư như thế nào khi tính phí thưởng?',
      'Ôn AI-05: vì sao quỹ managed futures có thể lỗ khi đầu tư vào thị trường đang contango?',
      'Nếu một quỹ mua 100 triệu cổ phiếu và bán khống 100 triệu cổ phiếu khác, theo bạn quỹ có chịu rủi ro thị trường không?',
    ],
    sections,
    glossary,
    practice,
    widgets: {},
    slides: [],
    wrapup: [
      'Kể 4 điều khoản giới hạn thanh khoản của hedge fund và mục đích của chúng.',
      'So sánh fund of funds, SMA và liquid alternatives theo minh bạch, phí, thanh khoản.',
      'Tách lợi nhuận hedge fund thành ba lớp; vì sao survivorship và backfill bias làm thành tích trông đẹp hơn thực tế?',
    ],
  };
}());
