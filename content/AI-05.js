// Bài giảng AI-05 - Natural Resources (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t } = window.CFAH;

  const sections = [
    {
      title: '1. Bức tranh lớn: đất, cây và hàng hóa',
      minutes: 6,
      html: `
<p>${t('natres', 'Tài nguyên thiên nhiên (natural resources)')} gồm hai nhóm rất khác nhau:</p>
<ul>
<li><b>Đất</b>: ${t('rawland', 'đất trống (raw land)')}, ${t('timber', 'đất rừng trồng (timberland)')}, ${t('farm', 'đất nông nghiệp (farmland)')}. Đây là tài sản thực, gần với bất động sản ở AI-04: kém thanh khoản, định giá bằng thẩm định, có thể tạo thu nhập.</li>
<li><b>Hàng hóa (commodities)</b>: năng lượng, kim loại, nông sản. Hàng hóa vật chất <b>không tạo ra dòng tiền</b>; nhà đầu tư thường tiếp cận qua <b>hợp đồng futures</b>, nên lợi nhuận phụ thuộc vào cơ chế của futures (spot, roll, collateral).</li>
</ul>
<div class="key">Ba LOS của module:
<ol>
<li>Đặc điểm và đặc tính đầu tư của raw land, timberland, farmland (phần 2).</li>
<li>Đặc điểm của hàng hóa và đặc tính đầu tư (phần 3, 4, 5): phân loại, cách tiếp cận, định giá futures, contango và backwardation, ba nguồn lợi nhuận.</li>
<li>Phân tích nguồn rủi ro, lợi nhuận và lợi ích đa dạng hóa giữa các loại tài nguyên (phần 6).</li>
</ol></div>
<p>Hình thức tiếp cận: trực tiếp (mua đất, mua vàng vật chất), qua quỹ góp chung (ETF, REIT chuyên về rừng hoặc đất nông nghiệp, quỹ hợp danh, LLC), qua phái sinh (futures, swaps), hoặc qua cổ phiếu công ty khai thác, sản xuất.</p>`,
    },
    {
      title: '2. Raw land, timberland và farmland',
      minutes: 16,
      html: `
<h4>a) Raw land (đất trống)</h4>
<p>Đất chưa phát triển, chưa có công trình. Gần như <b>không tạo thu nhập</b> (có thể có một ít từ cho thuê làm bãi đỗ, chăn thả), nhưng lại phát sinh <b>chi phí nắm giữ</b> (thuế đất, bảo vệ, bảo trì).</p>
<ul>
<li>Lợi nhuận đến từ <b>tăng giá</b>: khu vực đô thị hóa, hạ tầng mới, thay đổi quy hoạch.</li>
<li>Giá trị gồm cả ${t('devopt', 'quyền chọn phát triển (option to develop)')}: chủ đất có quyền (không có nghĩa vụ) xây dựng khi điều kiện thuận lợi. Như mọi quyền chọn, giá trị này tăng khi thị trường bất định hơn.</li>
<li>Rủi ro: kém thanh khoản, mang tính đầu cơ, phụ thuộc quy hoạch và chính sách địa phương.</li>
</ul>

<h4>b) Timberland (đất rừng trồng)</h4>
<p>Đất trồng cây để khai thác gỗ. Lợi nhuận đến từ <b>ba nguồn</b>:</p>
<ol>
<li>${t('biogrowth', 'Tăng trưởng sinh học (biological growth)')}: cây lớn thêm mỗi năm <b>bất kể</b> thị trường tốt hay xấu. Đây là nguồn lợi nhuận độc lập với chu kỳ kinh tế.</li>
<li>Thay đổi <b>giá gỗ</b> (giá giao ngay của sản phẩm gỗ).</li>
<li>Thay đổi <b>giá đất</b> rừng.</li>
</ol>
<p class="key">Điểm đặc biệt: timberland có <b>tính linh hoạt về thời điểm khai thác</b>. Khi giá gỗ thấp, chủ rừng cứ để cây tiếp tục lớn ("lưu kho trên gốc"), chờ giá lên mới khai thác. Khi giá cao, có thể khai thác sớm hơn. Đây là một quyền chọn thật mà farmland không có.</p>
<p>Ngoài ra timberland có thể bán <b>tín chỉ carbon</b> và thường được xem là tích cực về ESG (hấp thụ carbon), nếu quản lý bền vững. Rủi ro: thời tiết, cháy rừng, sâu bệnh, giá gỗ giảm dài hạn, kém thanh khoản, chu kỳ khai thác dài (nhiều năm đến hàng chục năm).</p>

<h4>c) Farmland (đất nông nghiệp)</h4>
<table class="plain"><thead><tr><th></th><th>${t('rowcrop', 'Cây hằng năm (row crops)')}</th><th>${t('permcrop', 'Cây lâu năm (permanent crops)')}</th></tr></thead><tbody>
<tr><td>Ví dụ</td><td>Lúa mì, ngô, đậu tương, rau</td><td>Vườn cây ăn quả, nho, cà phê, hạt điều</td></tr>
<tr><td>Chu kỳ</td><td>Trồng và thu hoạch trong năm</td><td>Mất nhiều năm mới cho thu hoạch, sau đó cho trái nhiều năm</td></tr>
<tr><td>Linh hoạt</td><td>Đổi loại cây theo giá mỗi mùa được</td><td>Rất khó đổi: đã gắn với một loại cây</td></tr>
</tbody></table>
<p>Lợi nhuận farmland: <b>thu nhập từ thu hoạch</b> (sản lượng × giá nông sản, hoặc tiền thuê đất từ nông dân) cộng <b>tăng giá đất</b>. Khác timberland, nông sản phải thu hoạch <b>khi chín</b>, không thể chờ giá tốt như cây gỗ (dù một số nông sản như ngũ cốc có thể lưu kho sau thu hoạch).</p>
<p>Rủi ro: thời tiết, nước tưới, sâu bệnh, giá nông sản, chi phí lao động, chính sách (hạn chế sở hữu đất nông nghiệp của người nước ngoài, trợ cấp, thương mại).</p>

<table class="plain"><thead><tr><th></th><th>Raw land</th><th>Timberland</th><th>Farmland</th></tr></thead><tbody>
<tr><td>Thu nhập định kỳ</td><td>Gần như không</td><td>Từ khai thác gỗ</td><td>Từ thu hoạch hoặc cho thuê</td></tr>
<tr><td>Nguồn lợi nhuận chính</td><td>Tăng giá, quyền chọn phát triển</td><td>Tăng trưởng sinh học, giá gỗ, giá đất</td><td>Giá và sản lượng nông sản, giá đất</td></tr>
<tr><td>Linh hoạt thời điểm</td><td>Chọn lúc phát triển</td><td><b>Cao</b>: trì hoãn khai thác</td><td>Thấp: thu hoạch khi chín</td></tr>
<tr><td>Rủi ro đặc trưng</td><td>Quy hoạch, đầu cơ, chi phí nắm giữ</td><td>Cháy, sâu bệnh, giá gỗ</td><td>Thời tiết, nước, giá nông sản</td></tr>
</tbody></table>

<div class="example"><div class="ex-h">Ví dụ 2.1 - Nguồn lợi nhuận của rừng trồng</div>
<p>Một khu rừng có trữ lượng gỗ tăng 6% trong năm nhờ cây lớn; giá gỗ tăng 2%; giá đất không đổi. Bỏ qua chi phí, giá trị gỗ trên khu rừng tăng bao nhiêu?</p>
<details><summary>Xem lời giải</summary>
<p>Giá trị gỗ = khối lượng × giá, nên tăng (1 + 6%) × (1 + 2%) - 1 = <b>8,12%</b> (xấp xỉ 6% + 2% = 8%). Phần 6% đến từ tăng trưởng sinh học, có được ngay cả khi giá gỗ đứng yên.</p></details></div>`,
    },
    {
      title: '3. Hàng hóa: phân loại, đặc điểm và cách đầu tư',
      minutes: 12,
      html: `
<h4>a) Phân loại</h4>
<table class="plain"><thead><tr><th>Nhóm</th><th>Ví dụ</th><th>Yếu tố chi phối giá</th></tr></thead><tbody>
<tr><td><b>Năng lượng</b></td><td>Dầu thô, khí tự nhiên, xăng, dầu diesel</td><td>Tăng trưởng kinh tế, địa chính trị, chính sách OPEC, chuyển đổi năng lượng</td></tr>
<tr><td><b>Kim loại công nghiệp</b> (base metals)</td><td>Đồng, nhôm, kẽm, niken</td><td>Sản xuất công nghiệp, xây dựng, nhu cầu của các nền kinh tế lớn</td></tr>
<tr><td><b>Kim loại quý</b></td><td>Vàng, bạc, bạch kim</td><td>Vai trò "nơi trú ẩn", lạm phát, lãi suất thực, nhu cầu trang sức và công nghiệp</td></tr>
<tr><td><b>Nông sản</b></td><td>Ngũ cốc (lúa mì, ngô, đậu tương), softs (cà phê, ca cao, đường, bông), gia súc</td><td>Thời tiết, mùa vụ, dịch bệnh, chính sách thương mại</td></tr>
</tbody></table>

<h4>b) Đặc điểm đầu tư</h4>
<ul>
<li><b>Không có dòng tiền</b>: không cổ tức, không coupon, nên không định giá được bằng DCF. Giá do <b>cung cầu</b> quyết định.</li>
<li><b>Biến động cao</b>, có thể tăng giảm mạnh khi có cú sốc cung (chiến tranh, thời tiết, đình công).</li>
<li>Tương quan <b>thấp</b> với cổ phiếu và trái phiếu, tương quan <b>dương</b> với lạm phát (nhất là lạm phát bất ngờ).</li>
<li>Nắm giữ vật chất tốn chi phí lưu kho, bảo hiểm, vận chuyển, và có thể hư hỏng (nông sản), nên trừ vàng ra, nhà đầu tư tài chính hầu như không giữ hàng thật.</li>
</ul>

<h4>c) Các cách tiếp cận</h4>
<table class="plain"><thead><tr><th>Cách</th><th>Ưu điểm</th><th>Hạn chế</th></tr></thead><tbody>
<tr><td>Hàng vật chất (vàng thỏi)</td><td>Sở hữu thật, không rủi ro đối tác</td><td>Chi phí lưu kho, bảo hiểm; chỉ thực tế với kim loại quý</td></tr>
<tr><td>${t('futures', 'Futures')}, forwards, swaps</td><td>Phổ biến nhất; vốn ký quỹ nhỏ, thanh khoản cao (futures)</td><td>Phải ${t('roll', 'cuộn (roll)')} hợp đồng khi đáo hạn; lợi nhuận khác giá giao ngay</td></tr>
<tr><td>ETF, ETN hàng hóa</td><td>Dễ mua, vốn nhỏ</td><td>Phần lớn dùng futures bên trong nên vẫn chịu roll return; ETN có rủi ro tín dụng của tổ chức phát hành</td></tr>
<tr><td>Cổ phiếu công ty khai thác, sản xuất</td><td>Thanh khoản, có cổ tức</td><td>Tương quan cao với thị trường cổ phiếu; chịu rủi ro quản trị, phòng hộ của công ty, nên <b>không phải</b> tiếp xúc thuần với giá hàng hóa</td></tr>
<tr><td>Quỹ managed futures (CTA), quỹ hàng hóa</td><td>Quản lý chủ động, có thể bán khống</td><td>Phí, phụ thuộc kỹ năng người quản lý</td></tr>
</tbody></table>`,
    },
    {
      title: '4. Giá futures hàng hóa: cost of carry, contango và backwardation',
      minutes: 14,
      html: `
<h4>a) Quan hệ giá futures và giá giao ngay</h4>
<p>Hai cách để có hàng hóa vào ngày T: (1) mua ngay hôm nay, vay tiền và trả phí lưu kho; (2) mua futures hôm nay, nhận hàng ngày T. Nếu không có chênh lệch giá, hai cách phải tốn như nhau, trừ đi một lợi ích chỉ người giữ hàng thật mới có: ${t('cy', 'convenience yield')} (lợi ích từ việc có sẵn hàng khi khan hiếm, tránh gián đoạn sản xuất).</p>
<div class="formula">Giá futures ≈ Giá giao ngay × (1 + r) + Chi phí lưu kho - Convenience yield</div>
<div class="example"><div class="ex-h">Ví dụ 4.1</div>
<p>Giá giao ngay 80 USD/thùng, lãi suất phi rủi ro 4%/năm, chi phí lưu kho 1 năm 3 USD, convenience yield 5 USD. Giá futures 1 năm xấp xỉ bao nhiêu? Thị trường đang ở trạng thái nào?</p>
<details><summary>Xem lời giải</summary>
<p>F ≈ 80 × 1,04 + 3 - 5 = <b>81,2 USD</b>. Vì F &gt; S nên thị trường ở trạng thái <b>contango</b>.</p>
<p class="warn">Lỗi hay gặp: quên trừ convenience yield (ra 86,2) hoặc đảo dấu hai khoản (ra 85,2). Nhớ: chi phí lưu kho <b>đẩy giá futures lên</b>, convenience yield <b>kéo xuống</b>.</p></details></div>

<h4>b) Hai trạng thái của đường cong futures</h4>
<table class="plain"><thead><tr><th></th><th>${t('contango', 'Contango')}</th><th>${t('backw', 'Backwardation')}</th></tr></thead><tbody>
<tr><td>Quan hệ giá</td><td>Futures &gt; giao ngay; kỳ hạn càng xa giá càng cao</td><td>Futures &lt; giao ngay; kỳ hạn càng xa giá càng thấp</td></tr>
<tr><td>Khi nào</td><td>Hàng tồn kho dồi dào, chi phí lưu kho và lãi suất chiếm ưu thế, convenience yield thấp</td><td>Khan hiếm, tồn kho thấp, convenience yield cao</td></tr>
<tr><td>Roll return cho vị thế mua</td><td><b>Âm</b></td><td><b>Dương</b></td></tr>
</tbody></table>

<h4>c) Ba lý thuyết giải thích lợi nhuận futures</h4>
<ul>
<li>${t('insurance', 'Insurance theory')} (Keynes): người <b>sản xuất</b> muốn khóa giá bán nên <b>bán futures</b> để phòng hộ. Để có người mua, futures phải được định giá <b>thấp hơn</b> giá giao ngay kỳ vọng tương lai; bên mua (nhà đầu cơ) nhận một khoản bù rủi ro như người bán bảo hiểm. Trạng thái này gọi là ${t('normalbw', 'normal backwardation')}.</li>
<li>${t('hedgepress', 'Hedging pressure hypothesis')}: mở rộng insurance theory, có cả người <b>tiêu dùng</b> hàng hóa (hãng hàng không, nhà máy) <b>mua futures</b> để phòng hộ. Bên nào phòng hộ nhiều hơn quyết định đường cong: người sản xuất chiếm ưu thế → backwardation; người tiêu dùng chiếm ưu thế → contango.</li>
<li>${t('storage', 'Theory of storage')}: hình dạng đường cong phụ thuộc <b>mức tồn kho</b>. Tồn kho cao → chi phí lưu kho chiếm ưu thế → contango. Tồn kho thấp → convenience yield cao → backwardation. Đây chính là công thức cost of carry ở trên.</li>
</ul>
<p class="tip">Mẹo nhớ: "<b>Back</b>wardation = khan hiếm, mọi người muốn có hàng <b>bây giờ</b>, nên giá hiện tại cao hơn giá tương lai".</p>`,
    },
    {
      title: '5. Lợi nhuận từ futures: spot, roll và collateral',
      minutes: 14,
      html: `
<p>Một nhà đầu tư mua futures hàng hóa với ${t('fullcoll', 'ký quỹ toàn phần (fully collateralized)')}: đặt toàn bộ giá trị danh nghĩa bằng tiền, phần lớn tiền này mua tín phiếu kho bạc làm tài sản ký quỹ. Lợi nhuận gồm ba phần:</p>
<div class="formula">Tổng lợi nhuận ≈ ${t('spotret', 'Spot price return')} + ${t('rollret', 'Roll return')} + ${t('collret', 'Collateral return')}</div>
<table class="plain"><thead><tr><th>Thành phần</th><th>Đến từ đâu</th></tr></thead><tbody>
<tr><td><b>Spot price return</b></td><td>Thay đổi của giá giao ngay hàng hóa</td></tr>
<tr><td><b>Roll return</b></td><td>Khi hợp đồng gần đáo hạn, bán nó và mua hợp đồng kỳ hạn xa hơn. Giá futures hội tụ dần về giá giao ngay khi đến hạn: trong contango, futures cao hơn spot nên "trượt xuống", roll âm; trong backwardation, futures thấp hơn spot nên "trượt lên", roll dương</td></tr>
<tr><td><b>Collateral return</b></td><td>Lãi trên tài sản ký quỹ (thường là lãi tín phiếu)</td></tr>
</tbody></table>
<p>Với chỉ số hàng hóa giữ tỷ trọng cố định, có thể có thêm phần <b>rebalance return</b> từ việc định kỳ tái cân bằng tỷ trọng.</p>

<div class="example"><div class="ex-h">Ví dụ 5.1 - Roll return khi giá giao ngay đứng yên</div>
<p>Giá giao ngay 80. (a) Contango: futures 3 tháng giá 82. (b) Backwardation: futures 3 tháng giá 78. Nếu giá giao ngay vẫn là 80 khi hợp đồng đáo hạn, lợi nhuận của vị thế mua futures là bao nhiêu?</p>
<details><summary>Xem lời giải</summary>
<p>Khi đáo hạn, futures hội tụ về giá giao ngay 80.<br>
(a) (80 - 82) / 82 = <b>-2,44%</b>: lỗ dù giá hàng hóa không đổi. Đó là roll return âm của contango.<br>
(b) (80 - 78) / 78 = <b>+2,56%</b>: lãi dù giá không đổi. Đó là roll return dương của backwardation.</p></details></div>

<div class="example"><div class="ex-h">Ví dụ 5.2 - Ghép ba thành phần</div>
<p>Trong một năm, giá giao ngay của rổ hàng hóa tăng 6%, roll return -3% (thị trường contango), lãi tín phiếu trên tài sản ký quỹ 4%. Ước tính tổng lợi nhuận của vị thế futures ký quỹ toàn phần.</p>
<details><summary>Xem lời giải</summary>
<p>Tổng ≈ 6% + (-3%) + 4% = <b>7%</b>. Nếu chỉ nhìn giá giao ngay (6%) sẽ bỏ sót cả roll lẫn collateral; nếu cộng roll như số dương (13%) là sai dấu.</p></details></div>

<p class="warn"><b>Bẫy thực tế:</b> ETF dầu dùng futures có thể thua xa giá dầu giao ngay trong nhiều năm vì thị trường dầu thường ở contango. Đề thi hay hỏi: "giá giao ngay tăng nhưng quỹ futures lỗ, vì sao?" → roll return âm.</p>`,
    },
    {
      title: '6. Rủi ro, lợi nhuận và đa dạng hóa giữa các loại tài nguyên',
      minutes: 12,
      html: `
<h4>a) So sánh</h4>
<table class="plain"><thead><tr><th></th><th>Hàng hóa (futures)</th><th>Timberland</th><th>Farmland</th><th>Raw land</th></tr></thead><tbody>
<tr><td>Nguồn lợi nhuận</td><td>Spot, roll, collateral</td><td>Tăng trưởng sinh học, giá gỗ, giá đất</td><td>Thu hoạch, giá đất</td><td>Tăng giá</td></tr>
<tr><td>Biến động</td><td>Cao</td><td>Thấp - trung bình (đo bằng thẩm định)</td><td>Thấp - trung bình (đo bằng thẩm định)</td><td>Khó đo, đầu cơ</td></tr>
<tr><td>Thanh khoản</td><td>Cao (futures)</td><td>Thấp</td><td>Thấp</td><td>Rất thấp</td></tr>
<tr><td>Tương quan với cổ phiếu</td><td>Thấp, nhưng tăng trong khủng hoảng</td><td>Thấp</td><td>Thấp</td><td>Thấp</td></tr>
<tr><td>Chống lạm phát</td><td>Tốt (nhất là lạm phát bất ngờ)</td><td>Khá</td><td>Khá</td><td>Khá</td></tr>
</tbody></table>

<h4>b) Rủi ro chính</h4>
<ul>
<li><b>Hàng hóa</b>: biến động giá, sốc cung (địa chính trị, thời tiết), roll return âm kéo dài, rủi ro đòn bẩy của futures, rủi ro đối tác (swaps, forwards, ETN), thay đổi quy định.</li>
<li><b>Đất</b>: kém thanh khoản, định giá thẩm định bị làm trơn (giống AI-04), thời tiết và khí hậu, thiên tai, sâu bệnh, rủi ro chính trị và pháp lý (quyền sở hữu, quy hoạch, nước tưới).</li>
<li><b>ESG</b>: phá rừng, sử dụng nước, phát thải từ năng lượng; ngược lại, rừng trồng bền vững có thể tạo tín chỉ carbon.</li>
</ul>

<h4>c) Đa dạng hóa</h4>
<p>Lý do chính để thêm tài nguyên thiên nhiên vào danh mục:</p>
<ol>
<li><b>Tương quan thấp</b> với cổ phiếu, trái phiếu vì động lực giá khác: thời tiết, tăng trưởng sinh học, cung cầu vật chất.</li>
<li><b>Phòng hộ lạm phát</b>: giá hàng hóa là một phần của lạm phát; khi lạm phát bất ngờ tăng, trái phiếu và cổ phiếu thường giảm còn hàng hóa thường tăng.</li>
<li>Timberland và farmland có <b>thu nhập thực</b> (không phụ thuộc lãi suất danh nghĩa) và tăng trưởng sinh học không phụ thuộc chu kỳ.</li>
</ol>
<p class="warn"><b>Lưu ý khi đọc số liệu:</b> chỉ số timberland, farmland dựa trên thẩm định nên đánh giá thấp biến động và tương quan. Cổ phiếu công ty khai thác hay REIT rừng thì ngược lại: tương quan với thị trường cổ phiếu cao hơn nhiều so với tài sản gốc.</p>`,
    },
    {
      title: '7. Tóm tắt và bẫy thường gặp',
      minutes: 6,
      html: `
<table class="plain"><thead><tr><th>Chủ đề</th><th>Nhớ</th><th>Bẫy</th></tr></thead><tbody>
<tr><td>Raw land</td><td>Không thu nhập, có chi phí nắm giữ; lợi nhuận là tăng giá + quyền chọn phát triển</td><td>Không phải tài sản tạo thu nhập ổn định</td></tr>
<tr><td>Timberland</td><td>Ba nguồn: tăng trưởng sinh học, giá gỗ, giá đất</td><td>Linh hoạt trì hoãn khai thác (farmland không có)</td></tr>
<tr><td>Farmland</td><td>Row crops (linh hoạt) và permanent crops (khó đổi)</td><td>Thu hoạch khi chín, chịu thời tiết</td></tr>
<tr><td>Hàng hóa</td><td>Không dòng tiền, giá theo cung cầu</td><td>Cổ phiếu công ty khai thác không phải tiếp xúc thuần</td></tr>
<tr><td>Cost of carry</td><td>F ≈ S(1 + r) + lưu kho - convenience yield</td><td>Convenience yield mang dấu trừ</td></tr>
<tr><td>Contango</td><td>F &gt; S, tồn kho cao, roll âm</td><td>Giá giao ngay tăng mà quỹ futures vẫn lỗ</td></tr>
<tr><td>Backwardation</td><td>F &lt; S, khan hiếm, convenience yield cao, roll dương</td><td>Normal backwardation là insurance theory</td></tr>
<tr><td>Ba lý thuyết</td><td>Insurance, hedging pressure, storage</td><td>Hedging pressure có cả người tiêu dùng mua futures</td></tr>
<tr><td>Tổng lợi nhuận futures</td><td>Spot + roll + collateral</td><td>Đừng quên lãi ký quỹ, đừng sai dấu roll</td></tr>
<tr><td>Đa dạng hóa</td><td>Tương quan thấp, chống lạm phát</td><td>Chỉ số thẩm định làm trơn số liệu</td></tr>
</tbody></table>
<p>Tiếp theo: tab <b>Luyện tập</b> 10 câu (rút ngẫu nhiên từ ngân hàng 30 câu, mỗi lần làm một bộ khác). Module sau (AI-06) là quỹ phòng hộ; quỹ managed futures nhắc ở phần 3 sẽ xuất hiện lại ở đó.</p>`,
    },
  ];

  const glossary = {
    natres: ['Natural resources', 'Tài nguyên thiên nhiên', 'Gồm đất (raw land, timberland, farmland) và hàng hóa (năng lượng, kim loại, nông sản).'],
    rawland: ['Raw land', 'Đất trống', 'Đất chưa phát triển; gần như không thu nhập, lợi nhuận từ tăng giá và quyền chọn phát triển.'],
    timber: ['Timberland', 'Đất rừng trồng', 'Đất trồng cây lấy gỗ; lợi nhuận từ tăng trưởng sinh học, giá gỗ và giá đất.'],
    farm: ['Farmland', 'Đất nông nghiệp', 'Đất trồng trọt; lợi nhuận từ thu hoạch hoặc tiền thuê và tăng giá đất.'],
    devopt: ['Option to develop', 'Quyền chọn phát triển', 'Quyền, không phải nghĩa vụ, xây dựng trên đất khi điều kiện thuận lợi; một dạng quyền chọn thực.'],
    biogrowth: ['Biological growth', 'Tăng trưởng sinh học', 'Cây lớn thêm theo thời gian, làm tăng khối lượng gỗ bất kể điều kiện thị trường.'],
    rowcrop: ['Row crops', 'Cây hằng năm', 'Cây trồng và thu hoạch trong một mùa như lúa mì, ngô, đậu tương.'],
    permcrop: ['Permanent crops', 'Cây lâu năm', 'Cây cho thu hoạch nhiều năm như vườn cây ăn quả, nho, cà phê.'],
    futures: ['Futures contract', 'Hợp đồng tương lai', 'Hợp đồng chuẩn hóa niêm yết trên sàn để mua hoặc bán tài sản vào ngày tương lai với giá thỏa thuận hôm nay.'],
    roll: ['Rolling futures', 'Cuộn hợp đồng', 'Bán hợp đồng sắp đáo hạn và mua hợp đồng kỳ hạn xa hơn để duy trì vị thế.'],
    cy: ['Convenience yield', 'Lợi ích nắm giữ hàng thật', 'Lợi ích phi tiền tệ từ việc có sẵn hàng hóa vật chất, cao khi hàng khan hiếm.'],
    contango: ['Contango', 'Contango', 'Giá futures cao hơn giá giao ngay; roll return âm với vị thế mua.'],
    backw: ['Backwardation', 'Backwardation', 'Giá futures thấp hơn giá giao ngay; roll return dương với vị thế mua.'],
    insurance: ['Insurance theory', 'Lý thuyết bảo hiểm', 'Người sản xuất bán futures để phòng hộ, trả phần bù cho người mua; dẫn đến normal backwardation.'],
    normalbw: ['Normal backwardation', 'Backwardation thông thường', 'Giá futures thấp hơn giá giao ngay kỳ vọng tương lai, nên vị thế mua có lợi nhuận kỳ vọng dương.'],
    hedgepress: ['Hedging pressure hypothesis', 'Giả thuyết áp lực phòng hộ', 'Cả người sản xuất (bán) và người tiêu dùng (mua) phòng hộ; bên chiếm ưu thế quyết định contango hay backwardation.'],
    storage: ['Theory of storage', 'Lý thuyết lưu kho', 'Hình dạng đường cong futures phụ thuộc mức tồn kho: tồn kho cao → contango, thấp → backwardation.'],
    fullcoll: ['Fully collateralized position', 'Vị thế ký quỹ toàn phần', 'Vị thế futures có toàn bộ giá trị danh nghĩa được đặt bằng tiền hoặc tín phiếu.'],
    spotret: ['Spot price return', 'Lợi nhuận giá giao ngay', 'Phần lợi nhuận do thay đổi giá giao ngay của hàng hóa.'],
    rollret: ['Roll return (roll yield)', 'Lợi nhuận cuộn hợp đồng', 'Phần lợi nhuận do futures hội tụ về giá giao ngay và việc cuộn hợp đồng; âm khi contango, dương khi backwardation.'],
    collret: ['Collateral return', 'Lợi nhuận ký quỹ', 'Lãi thu được trên tài sản ký quỹ (thường là tín phiếu) của vị thế futures.'],
  };

  const practice = [
    { q: 'Giá giao ngay của một hàng hóa là 60, lãi suất phi rủi ro 5%/năm, chi phí lưu kho 1 năm là 2, convenience yield là 1. Giá futures 1 năm xấp xỉ:', choices: ['66,0', '64,0', '62,0'], answer: 1, explain: 'F ≈ 60 × 1,05 + 2 - 1 = 64,0. 66,0 là cộng cả convenience yield thay vì trừ; 62,0 là đảo dấu hai khoản (trừ lưu kho, cộng convenience yield).' },
    { q: 'Thị trường futures của một hàng hóa đang ở trạng thái contango. Nhà đầu tư giữ vị thế mua và cuộn hợp đồng liên tục sẽ có roll return:', choices: ['Âm', 'Dương', 'Bằng 0 nếu giá giao ngay không đổi'], answer: 0, explain: 'Trong contango futures cao hơn giá giao ngay; khi đáo hạn, futures hội tụ xuống giá giao ngay nên vị thế mua chịu roll return âm, kể cả khi giá giao ngay đứng yên.' },
    { q: 'Trong một năm, giá giao ngay của hàng hóa giảm 2%, roll return là +4% và lãi trên tài sản ký quỹ là 3%. Tổng lợi nhuận xấp xỉ của vị thế futures mua, ký quỹ toàn phần là:', choices: ['2%', '-3%', '5%'], answer: 2, explain: 'Tổng ≈ -2% + 4% + 3% = 5%. 2% là quên lãi ký quỹ; -3% là trừ roll return thay vì cộng (sai dấu).' },
    { q: 'Nguồn lợi nhuận nào là đặc trưng riêng của timberland so với farmland?', choices: ['Tăng giá đất', 'Thay đổi giá sản phẩm thu hoạch', 'Tăng trưởng sinh học cho phép trì hoãn khai thác khi giá thấp'], answer: 2, explain: 'Cây gỗ vẫn lớn khi chưa khai thác nên chủ rừng có thể chờ giá tốt. Farmland cũng có tăng giá đất và phụ thuộc giá nông sản, nhưng nông sản phải thu hoạch khi chín.' },
    { q: 'Theo insurance theory của Keynes, điều nào sau đây đúng?', choices: ['Người sản xuất bán futures để phòng hộ, nên giá futures thấp hơn giá giao ngay kỳ vọng và bên mua được bù rủi ro', 'Người tiêu dùng mua futures để phòng hộ, nên thị trường luôn ở contango', 'Mức tồn kho là yếu tố duy nhất quyết định hình dạng đường cong futures'], answer: 0, explain: 'Insurance theory: người sản xuất là bên phòng hộ chính (bán futures), trả phần bù cho nhà đầu cơ mua futures, dẫn tới normal backwardation. Vai trò người tiêu dùng thuộc hedging pressure hypothesis; mức tồn kho là theory of storage.' },
    { q: 'Phát biểu nào mô tả đúng nhất đặc tính đầu tư của raw land?', choices: ['Tạo dòng tiền cho thuê ổn định như bất động sản core', 'Lợi nhuận chủ yếu từ tăng giá và quyền chọn phát triển, trong khi phải chịu chi phí nắm giữ', 'Lợi nhuận chủ yếu từ tăng trưởng sinh học'], answer: 1, explain: 'Đất trống gần như không có thu nhập, phát sinh thuế và chi phí nắm giữ; giá trị đến từ tăng giá và quyền phát triển trong tương lai. Thu nhập ổn định là đặc điểm của bất động sản core; tăng trưởng sinh học thuộc timberland.' },
    { q: 'Một nhà đầu tư muốn tiếp xúc với giá đồng nên mua cổ phiếu các công ty khai thác đồng. Hạn chế chính của cách này là:', choices: ['Lợi nhuận chịu ảnh hưởng mạnh của thị trường cổ phiếu và quyết định của công ty, nên không phản ánh thuần giá đồng', 'Nhà đầu tư phải trả chi phí lưu kho đồng', 'Lợi nhuận luôn chịu roll return âm'], answer: 0, explain: 'Cổ phiếu khai thác có tương quan cao với thị trường cổ phiếu, chịu rủi ro quản trị, chi phí và chính sách phòng hộ của công ty. Chi phí lưu kho thuộc về nắm giữ hàng vật chất; roll return thuộc về vị thế futures.' },
    { q: 'Tồn kho dầu thô đang rất thấp và các nhà máy lọc dầu sẵn sàng trả giá cao để có dầu ngay. Đường cong futures nhiều khả năng ở trạng thái:', choices: ['Contango, vì chi phí lưu kho cao', 'Phẳng, vì giá giao ngay đã phản ánh hết', 'Backwardation, vì convenience yield cao'], answer: 2, explain: 'Khan hiếm làm convenience yield cao, kéo giá futures xuống dưới giá giao ngay: backwardation (theory of storage). Contango xảy ra khi tồn kho dồi dào.' },
    { q: 'Khi lạm phát tăng bất ngờ, loại tài sản nào trong ba loại sau thường có diễn biến tốt nhất?', choices: ['Trái phiếu chính phủ dài hạn có lãi suất cố định', 'Danh mục futures hàng hóa', 'Cổ phiếu tăng trưởng định giá cao'], answer: 1, explain: 'Giá hàng hóa là một phần của lạm phát nên futures hàng hóa có tương quan dương với lạm phát bất ngờ. Trái phiếu lãi suất cố định mất giá khi lạm phát và lãi suất tăng; cổ phiếu tăng trưởng định giá cao nhạy với lãi suất chiết khấu.' },
    { q: 'So với farmland trồng cây hằng năm (row crops), farmland trồng cây lâu năm (permanent crops) như vườn cây ăn quả:', choices: ['Kém linh hoạt hơn khi muốn đổi loại cây trồng theo giá thị trường', 'Có thể trì hoãn thu hoạch nhiều năm như rừng gỗ', 'Không chịu rủi ro thời tiết'], answer: 0, explain: 'Cây lâu năm mất nhiều năm mới cho thu hoạch và gắn với một loại cây, nên khó chuyển đổi. Trái cây vẫn phải thu hoạch khi chín (không trì hoãn như gỗ) và vẫn chịu rủi ro thời tiết.' },
    { q: "Trong một năm, trữ lượng gỗ của một khu rừng trồng tăng 5% nhờ cây lớn, còn giá gỗ giảm 3%; giá đất không đổi. Bỏ qua chi phí, giá trị gỗ trên khu rừng thay đổi gần nhất với:", choices: ["2,00%", "1,85%", "8,15%"], answer: 1, explain: "Giá trị gỗ = khối lượng × giá, nên thay đổi = (1 + 5%) × (1 - 3%) - 1 = 1,85%. Lựa chọn 2,00% cộng đơn giản hai tỷ lệ (chỉ là xấp xỉ). Lựa chọn 8,15% đảo dấu thay đổi giá gỗ (1,05 × 1,03 - 1)." },
    { q: "Xem raw land như một quyền chọn phát triển (option to develop). Nếu mức bất định về tương lai của khu vực tăng lên, các yếu tố khác không đổi, giá trị của mảnh đất có xu hướng:", choices: ["Tăng", "Giảm", "Không đổi, vì đất trống không tạo thu nhập"], answer: 0, explain: "Chủ đất có quyền nhưng không có nghĩa vụ phát triển; như mọi quyền chọn, giá trị quyền chọn tăng khi bất định cao hơn, vì chủ đất hưởng kịch bản tốt và có thể bỏ qua kịch bản xấu. Lựa chọn \"giảm\" nhầm bất định với rủi ro thuần túy. Lựa chọn \"không đổi\" bỏ qua giá trị quyền chọn nằm trong giá đất." },
    { q: "Lợi nhuận của một khoản đầu tư farmland đến từ:", choices: ["Chỉ từ tăng giá đất, vì farmland không tạo thu nhập", "Roll return và lãi trên tài sản ký quỹ", "Thu nhập từ thu hoạch hoặc tiền thuê đất, cộng với tăng giá đất"], answer: 2, explain: "Farmland tạo thu nhập (sản lượng × giá nông sản, hoặc tiền thuê đất từ nông dân) và có thể tăng giá đất. Lựa chọn \"chỉ từ tăng giá đất\" mô tả raw land. Lựa chọn \"roll return và lãi ký quỹ\" là các thành phần lợi nhuận của futures hàng hóa." },
    { q: "Nguồn thu bổ sung nào mà timberland được quản lý bền vững có thể tạo ra, ngoài việc bán gỗ và tăng giá đất?", choices: ["Roll return dương", "Cổ tức cố định do nhà nước bảo đảm", "Tín chỉ carbon"], answer: 2, explain: "Rừng hấp thụ carbon, nên timberland quản lý bền vững có thể bán tín chỉ carbon và được xem là tích cực về ESG. Roll return là thành phần lợi nhuận của futures, không phải của đất rừng. Không có cổ tức cố định do nhà nước bảo đảm cho timberland." },
    { q: "Đồng, nhôm và kẽm thuộc nhóm hàng hóa nào, và giá của chúng chịu chi phối chủ yếu bởi yếu tố nào?", choices: ["Kim loại quý; vai trò nơi trú ẩn và lãi suất thực", "Kim loại công nghiệp (base metals); sản xuất công nghiệp và xây dựng", "Nông sản; thời tiết và mùa vụ"], answer: 1, explain: "Đồng, nhôm, kẽm là kim loại công nghiệp, giá phụ thuộc hoạt động sản xuất, xây dựng và nhu cầu của các nền kinh tế lớn. Kim loại quý là vàng, bạc, bạch kim. Thời tiết và mùa vụ chi phối giá nông sản." },
    { q: "Vì sao không thể định giá hàng hóa vật chất (như dầu thô hay đồng) bằng mô hình chiết khấu dòng tiền như cổ phiếu, trái phiếu?", choices: ["Vì hàng hóa không tạo ra dòng tiền như cổ tức hay coupon; giá do cung cầu quyết định", "Vì giá hàng hóa gần như không biến động", "Vì hàng hóa chỉ được giao dịch qua hợp đồng futures"], answer: 0, explain: "Hàng hóa vật chất không trả cổ tức hay coupon, nên không có dòng tiền để chiết khấu; giá được quyết định bởi cung và cầu. Lựa chọn \"gần như không biến động\" sai: hàng hóa có biến động cao. Lựa chọn \"chỉ giao dịch qua futures\" sai: hàng hóa có thể mua bán vật chất, và lý do đó không liên quan đến việc thiếu dòng tiền." },
    { q: "Giá vàng giao ngay là 2.000 USD/ounce, lãi suất phi rủi ro 3%/năm, chi phí lưu kho 1 năm 12 USD/ounce, convenience yield 2 USD/ounce. Giá futures 1 năm xấp xỉ:", choices: ["2.074 USD", "2.010 USD", "2.070 USD"], answer: 2, explain: "F ≈ S × (1 + r) + chi phí lưu kho - convenience yield = 2.000 × 1,03 + 12 - 2 = 2.070 USD. Lựa chọn 2.074 USD cộng convenience yield thay vì trừ. Lựa chọn 2.010 USD quên chi phí vốn (lãi suất)." },
    { q: "Giá giao ngay của một hàng hóa là 50; giá futures kỳ hạn 6 tháng là 47 và kỳ hạn 12 tháng là 45. Trạng thái đường cong và roll return của vị thế mua futures là:", choices: ["Contango; roll return âm", "Backwardation; roll return dương", "Backwardation; roll return âm"], answer: 1, explain: "Giá futures thấp hơn giá giao ngay và giảm dần theo kỳ hạn: backwardation. Khi đáo hạn futures hội tụ lên giá giao ngay, nên vị thế mua có roll return dương. Lựa chọn \"contango\" sai vì contango là futures cao hơn giao ngay. Lựa chọn \"backwardation; roll âm\" sai dấu roll return." },
    { q: "Giá giao ngay của một hàng hóa là 100, giá futures 3 tháng là 104. Nếu khi hợp đồng đáo hạn giá giao ngay vẫn là 100, lợi nhuận của vị thế mua futures (không tính lãi ký quỹ) gần nhất với:", choices: ["-3,85%", "-4,00%", "+3,85%"], answer: 0, explain: "Futures hội tụ về giá giao ngay 100 khi đáo hạn: (100 - 104) / 104 = -3,85%, là roll return âm của contango dù giá hàng hóa không đổi. Lựa chọn -4,00% chia cho giá giao ngay thay vì giá futures lúc mua. Lựa chọn +3,85% sai dấu." },
    { q: "Trong một năm, giá giao ngay của dầu thô tăng 3%, nhưng một quỹ futures dầu ký quỹ toàn phần vẫn lỗ. Roll return là -7% (contango), lãi tín phiếu trên tài sản ký quỹ là 2%. Tổng lợi nhuận xấp xỉ của quỹ là:", choices: ["3%", "12%", "-2%"], answer: 2, explain: "Tổng ≈ spot + roll + collateral = 3% - 7% + 2% = -2%. Roll return âm do contango giải thích vì sao quỹ lỗ dù giá giao ngay tăng. Lựa chọn 3% chỉ nhìn giá giao ngay. Lựa chọn 12% cộng roll return như số dương." },
    { q: "Theo hedging pressure hypothesis, nếu nhu cầu phòng hộ của các hãng hàng không mua futures nhiên liệu chiếm ưu thế so với nhu cầu bán futures của nhà sản xuất, đường cong futures nhiều khả năng ở trạng thái:", choices: ["Backwardation", "Contango", "Normal backwardation theo insurance theory"], answer: 1, explain: "Khi người tiêu dùng phòng hộ (mua futures) chiếm ưu thế, giá futures bị đẩy lên trên giá giao ngay kỳ vọng: contango. Backwardation xảy ra khi người sản xuất phòng hộ (bán futures) chiếm ưu thế. Normal backwardation của insurance theory chỉ xét người sản xuất bán futures." },
    { q: "Convenience yield trong định giá futures hàng hóa là:", choices: ["Lãi thu được trên tài sản ký quỹ của vị thế futures", "Chi phí lưu kho và bảo hiểm hàng hóa vật chất", "Lợi ích từ việc có sẵn hàng hóa vật chất, nhất là khi hàng khan hiếm"], answer: 2, explain: "Convenience yield là lợi ích chỉ người giữ hàng thật mới có (tránh gián đoạn sản xuất khi khan hiếm), nên nó kéo giá futures xuống. Lãi trên tài sản ký quỹ là collateral return. Chi phí lưu kho và bảo hiểm đẩy giá futures lên, ngược chiều với convenience yield." },
    { q: "So với ETF hàng hóa, nhà đầu tư vào ETN (exchange-traded note) hàng hóa phải chịu thêm rủi ro nào?", choices: ["Chi phí lưu kho hàng vật chất do nhà đầu tư tự trả", "Bị gọi ký quỹ cá nhân hằng ngày", "Rủi ro tín dụng của tổ chức phát hành ETN"], answer: 2, explain: "ETN là chứng khoán nợ của tổ chức phát hành, cam kết trả lợi nhuận theo chỉ số hàng hóa, nên nhà đầu tư chịu rủi ro tín dụng của tổ chức đó. Nhà đầu tư ETN không tự trả chi phí lưu kho hàng vật chất. Nhà đầu tư ETN không bị gọi ký quỹ cá nhân như khi trực tiếp giữ futures." },
    { q: "Ưu điểm chính của việc nắm giữ vàng vật chất so với mua futures vàng là:", choices: ["Không phát sinh chi phí lưu kho và bảo hiểm", "Không có rủi ro đối tác và không phải cuộn hợp đồng khi đáo hạn", "Đòn bẩy cao hơn vì chỉ cần ký quỹ nhỏ"], answer: 1, explain: "Sở hữu vàng thật thì không phụ thuộc đối tác và không có roll return. Lựa chọn \"không phát sinh chi phí lưu kho\" sai: đó chính là nhược điểm của hàng vật chất. Lựa chọn \"đòn bẩy cao hơn, ký quỹ nhỏ\" mô tả futures, không phải vàng vật chất." },
    { q: "Phát biểu nào chính xác nhất về lợi ích đa dạng hóa của hàng hóa trong danh mục cổ phiếu và trái phiếu?", choices: ["Tương quan của hàng hóa với cổ phiếu luôn âm, kể cả trong khủng hoảng", "Hàng hóa không có khả năng phòng hộ lạm phát", "Hàng hóa có tương quan thấp với cổ phiếu trong điều kiện bình thường, nhưng tương quan có thể tăng trong khủng hoảng"], answer: 2, explain: "Hàng hóa có động lực giá khác cổ phiếu (cung cầu vật chất, thời tiết) nên tương quan thường thấp, nhưng tương quan có thể tăng trong khủng hoảng. Lựa chọn \"luôn âm, kể cả trong khủng hoảng\" quá tuyệt đối. Lựa chọn \"không phòng hộ lạm phát\" sai: hàng hóa có tương quan dương với lạm phát, nhất là lạm phát bất ngờ." },
    { q: "So với một chỉ số timberland dựa trên thẩm định, cổ phiếu REIT rừng niêm yết thường có:", choices: ["Tương quan với thị trường cổ phiếu cao hơn", "Độ biến động báo cáo thấp hơn", "Lợi nhuận bị làm trơn nhiều hơn"], answer: 0, explain: "REIT rừng có giá thị trường hằng ngày, biến động cùng thị trường cổ phiếu, nên tương quan với cổ phiếu cao hơn nhiều so với tài sản gốc. Chỉ số dựa trên thẩm định mới là loại có biến động báo cáo thấp và lợi nhuận bị làm trơn, nên hai lựa chọn còn lại đảo ngược đặc điểm." },
    { q: "Một nhà đầu tư lo ngại về cháy rừng, sâu bệnh, giá gỗ giảm dài hạn và chu kỳ khai thác kéo dài nhiều năm. Đây là các rủi ro đặc trưng của:", choices: ["Farmland trồng cây hằng năm", "Timberland", "Futures kim loại quý"], answer: 1, explain: "Cháy rừng, sâu bệnh, giá gỗ và chu kỳ khai thác dài là rủi ro đặc trưng của timberland. Farmland trồng cây hằng năm có chu kỳ trong năm và chịu rủi ro thời tiết, nước tưới, giá nông sản. Futures kim loại quý chịu rủi ro biến động giá và roll return, không chịu rủi ro sinh học." },
    { q: "Nhà đầu tư mua một lô đất trống giá 2 triệu USD, giữ 4 năm rồi bán được 2,6 triệu USD. Tổng chi phí nắm giữ (thuế đất, bảo vệ) là 240.000 USD, giả định trả vào cuối kỳ. Lợi nhuận năm hóa sau chi phí gần nhất với:", choices: ["4,22%", "6,78%", "4,50%"], answer: 0, explain: "Lợi nhuận ròng cả kỳ = (2,6 - 2 - 0,24) / 2 = 18%; năm hóa = (2,36 / 2)^(1/4) - 1 = 4,22%. Lựa chọn 6,78% bỏ qua chi phí nắm giữ ((2,6 / 2)^(1/4) - 1). Lựa chọn 4,50% chia đơn giản 18% cho 4 năm, bỏ qua lãi kép." },
    { q: "Hình thức tiếp cận hàng hóa nào cho phép quản lý chủ động và bán khống, nhưng phụ thuộc vào kỹ năng người quản lý và có phí cao?", choices: ["ETF hàng hóa mô phỏng chỉ số", "Quỹ managed futures (CTA)", "Vàng vật chất"], answer: 1, explain: "Quỹ managed futures do CTA quản lý chủ động, có thể mua và bán khống futures, đổi lại phải trả phí và phụ thuộc kỹ năng người quản lý. ETF mô phỏng chỉ số là đầu tư thụ động. Vàng vật chất là nắm giữ trực tiếp, không có quản lý chủ động hay bán khống." },
    { q: "Vì sao timberland có thể giúp đa dạng hóa một danh mục cổ phiếu và trái phiếu?", choices: ["Vì tăng trưởng sinh học của cây diễn ra bất kể chu kỳ kinh tế", "Vì timberland có thanh khoản cao hơn cổ phiếu niêm yết", "Vì giá gỗ luôn tăng khi thị trường cổ phiếu giảm"], answer: 0, explain: "Cây lớn thêm mỗi năm dù thị trường tốt hay xấu, tạo nguồn lợi nhuận độc lập với chu kỳ, nên tương quan với cổ phiếu, trái phiếu thấp. Lựa chọn \"thanh khoản cao hơn\" sai: timberland kém thanh khoản. Lựa chọn \"giá gỗ luôn tăng khi cổ phiếu giảm\" sai: giá gỗ cũng chịu ảnh hưởng của kinh tế (xây dựng nhà ở)." },
  ];

  window.LESSONS['AI-05'] = {
    moduleId: 'AI-05',
    calculator: 'BA II Plus',
    warmup: [
      'Ôn AI-04: vì sao chỉ số bất động sản dựa trên thẩm định đánh giá thấp độ biến động thật?',
      'Ôn AI-04: greenfield và brownfield khác nhau ở nguồn lợi nhuận chính như thế nào?',
      'Theo bạn, vì sao một quỹ ETF dầu có thể lỗ trong khi giá dầu thô trên báo lại tăng?',
    ],
    sections,
    glossary,
    practice,
    widgets: {},
    slides: [],
    wrapup: [
      'Kể ba nguồn lợi nhuận của timberland và giải thích vì sao chủ rừng linh hoạt hơn chủ trang trại.',
      'Viết công thức cost of carry; contango và backwardation xảy ra khi nào, roll return mang dấu gì?',
      'Tổng lợi nhuận của vị thế futures ký quỹ toàn phần gồm những thành phần nào?',
    ],
  };
}());
