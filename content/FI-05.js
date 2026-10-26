// Bài giảng FI-05 - Fixed-Income Markets for Government Issuers (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t } = window.CFAH;

  const sections = [
    {
      title: '1. Bức tranh lớn: "chính phủ" gồm những ai?',
      minutes: 4,
      html: `
<p>FI-04 đã xem doanh nghiệp huy động vốn ra sao. Module này làm điều tương tự cho <b>khu vực công</b>. "Chính phủ" trên thị trường trái phiếu thật ra là 4 nhóm tổ chức phát hành khác nhau:</p>
<table class="plain"><thead><tr><th>Nhóm</th><th>Ví dụ</th><th>Trả nợ bằng gì?</th></tr></thead><tbody>
<tr><td>${t('sovereign', 'Chính phủ trung ương (sovereign)')}</td><td>Bộ Tài chính Mỹ (US Treasury), Kho bạc Nhà nước Việt Nam</td><td>Thuế quốc gia; với nợ nội tệ còn có khả năng in tiền</td></tr>
<tr><td>${t('nonsov', 'Chính quyền địa phương (non-sovereign)')}</td><td>Bang, tỉnh, thành phố (municipal bonds ở Mỹ)</td><td>Thuế địa phương hoặc doanh thu của một dự án</td></tr>
<tr><td>${t('quasi', 'Tổ chức bán chính phủ (quasi-government / agency)')}</td><td>Fannie Mae, Freddie Mac (Mỹ), KfW (Đức)</td><td>Hoạt động kinh doanh của tổ chức, kèm bảo lãnh ngầm hoặc rõ ràng của nhà nước</td></tr>
<tr><td>${t('supra', 'Tổ chức đa quốc gia (supranational)')}</td><td>World Bank (IBRD), ADB, EIB</td><td>Thu nợ từ các khoản cho vay, vốn góp của các nước thành viên</td></tr>
</tbody></table>
<p>Hai câu hỏi của LOS 2027:</p>
<ol>
  <li>Mỗi nhóm <b>chọn cách vay</b> như thế nào (kỳ hạn, loại lãi suất, đồng tiền)? Phần 2 và 4.</li>
  <li>Phát hành và giao dịch trái phiếu chính phủ <b>khác trái phiếu doanh nghiệp</b> ở đâu? Phần 3 và 5.</li>
</ol>
<p class="tip"><b>Không có công thức khó</b> trong module này. Đề thi hỏi dạng khái niệm: nhận diện loại tổ chức phát hành, so sánh rủi ro tín dụng, cơ chế đấu thầu và thanh khoản.</p>`,
    },
    {
      title: '2. Chính phủ trung ương: vì sao vay và vay bằng gì?',
      minutes: 10,
      html: `
<h4>Vì sao chính phủ phải vay?</h4>
<ul>
  <li><b>Thâm hụt ngân sách</b> (chi lớn hơn thu): cần vốn dài hạn để bù phần thiếu, ví dụ đầu tư hạ tầng.</li>
  <li><b>Lệch thời điểm thu chi</b>: thuế thường thu tập trung vào vài tháng trong năm, còn lương và chi thường xuyên phải trả đều. Phần lệch này được bù bằng nợ ngắn hạn.</li>
  <li><b>Tái cấp vốn</b> (refinancing): phát hành nợ mới để trả nợ cũ đến hạn.</li>
</ul>
<p>Cách chính phủ cân đối các lựa chọn vay được ghi trong ${t('dmp', 'chính sách quản lý nợ (debt management policy)')}: phát hành bao nhiêu, kỳ hạn nào, loại lãi suất nào, lịch phát hành ra sao.</p>

<h4>Ba lựa chọn chính</h4>
<table class="plain"><thead><tr><th>Lựa chọn</th><th>Các phương án</th><th>Đánh đổi</th></tr></thead><tbody>
<tr><td>Kỳ hạn</td><td>Bills (≤ 1 năm), notes (2-10 năm), bonds (trên 10 năm, đến 30 năm)</td><td>Nợ ngắn rẻ hơn khi đường cong lợi suất dốc lên, nhưng phải đảo nợ thường xuyên (rủi ro tái cấp vốn). Nợ dài chốt chi phí lâu dài.</td></tr>
<tr><td>Loại lãi suất</td><td>Cố định, thả nổi (FRN), ${t('linker', 'chỉ số hóa theo lạm phát (inflation-linked)')}</td><td>Linker giảm chi phí khi chính phủ chống lạm phát đáng tin; FRN khiến chi phí lãi dao động theo lãi suất thị trường.</td></tr>
<tr><td>Đồng tiền</td><td>Nội tệ (${t('domestic', 'nợ trong nước')}) hoặc ngoại tệ, thường là ${t('reserve', 'đồng tiền dự trữ (reserve currency)')} như USD, EUR (${t('external', 'nợ nước ngoài')})</td><td>Vay ngoại tệ mở rộng nhà đầu tư nhưng gánh rủi ro tỷ giá: nội tệ mất giá thì nợ quy đổi phình to.</td></tr>
</tbody></table>

<div class="key">Với nợ <b>nội tệ</b>, chính phủ có thể tăng thuế hoặc in tiền để trả, nên rủi ro vỡ nợ rất thấp (đổi lại là rủi ro lạm phát). Với nợ <b>ngoại tệ</b>, chính phủ không in được USD, nên rủi ro tín dụng cao hơn rõ rệt. Đây là lý do cùng một quốc gia, trái phiếu nội tệ thường được xếp hạng cao hơn trái phiếu ngoại tệ.</div>

<h4>Phát triển (developed) và mới nổi (emerging)</h4>
<table class="plain"><thead><tr><th></th><th>Chính phủ thị trường phát triển</th><th>Chính phủ thị trường mới nổi</th></tr></thead><tbody>
<tr><td>Kinh tế</td><td>Đa dạng, tăng trưởng chậm nhưng ổn định</td><td>Tăng trưởng nhanh nhưng biến động, có thể phụ thuộc một ngành (ví dụ dầu mỏ)</td></tr>
<tr><td>Đồng tiền nợ</td><td>Chủ yếu nội tệ, thường là đồng tiền dự trữ</td><td>Phải vay một phần bằng ngoại tệ vì nhà đầu tư nước ngoài ngại rủi ro nội tệ</td></tr>
<tr><td>Thể chế</td><td>Chính sách tài khóa minh bạch, thị trường nợ sâu, nhiều nhà đầu tư</td><td>Minh bạch kém hơn, nhà đầu tư hẹp hơn, lợi suất cao hơn</td></tr>
</tbody></table>

<div class="example"><div class="ex-h">Ví dụ 2.1 - Chọn công cụ vay</div>
<p>Thuế thu nhập của nước X thu chủ yếu vào tháng 4. Chính phủ cần tiền trả lương từ tháng 1 đến tháng 3 và đang có ngân sách cân bằng trong cả năm. Công cụ nào phù hợp nhất?</p>
<details><summary>Xem lời giải</summary><p><b>Tín phiếu kho bạc ngắn hạn (T-bills)</b> kỳ hạn 3-4 tháng. Đây là nhu cầu lệch thời điểm, không phải thâm hụt, nên vay ngắn và trả ngay khi thuế về. Phát hành trái phiếu 10 năm sẽ khiến chính phủ trả lãi dài hạn cho một nhu cầu chỉ kéo dài vài tháng.</p></details></div>
<p class="tip"><b>Liên hệ Việt Nam:</b> Kho bạc Nhà nước phát hành trái phiếu chính phủ bằng VND qua đấu thầu trên Sở Giao dịch Chứng khoán Hà Nội (HNX), chủ yếu kỳ hạn 10-15 năm; người mua chính là ngân hàng và công ty bảo hiểm. Đây là hình mẫu "nợ nội tệ, kỳ hạn dài, nhà đầu tư trong nước".</p>`,
    },
    {
      title: '3. Phát hành trái phiếu chính phủ: đấu thầu định kỳ',
      minutes: 8,
      html: `
<p>Chính phủ trung ương phát hành chủ yếu qua ${t('auction', 'đấu thầu công khai (public auction)')} theo <b>lịch công bố trước</b> (ví dụ T-bill 4 tuần đấu thầu mỗi tuần). Lịch đều đặn giúp nhà đầu tư lên kế hoạch và giảm chi phí vay.</p>
<ul>
  <li>Người tham gia chính là ${t('pdealer', 'nhà tạo lập thị trường sơ cấp (primary dealers)')}: các ngân hàng lớn có nghĩa vụ đặt thầu ở mọi phiên và tạo thanh khoản trên thị trường thứ cấp.</li>
  <li>${t('noncomp', 'Đặt thầu không cạnh tranh (non-competitive bid)')}: nhà đầu tư nhỏ chỉ ghi khối lượng, chấp nhận lợi suất do phiên đấu thầu quyết định, và được ưu tiên phân bổ trước.</li>
  <li>${t('comp', 'Đặt thầu cạnh tranh (competitive bid)')}: ghi cả khối lượng và lợi suất mong muốn. Xếp từ lợi suất thấp (giá cao) đến cao, chấp nhận dần cho đến khi đủ khối lượng.</li>
</ul>

<h4>Đơn giá và đa giá</h4>
<table class="plain"><thead><tr><th>Hình thức</th><th>Người trúng thầu trả</th></tr></thead><tbody>
<tr><td>${t('single', 'Đấu thầu đơn giá (single-price / uniform)')}</td><td>Tất cả nhận cùng một lợi suất: mức lợi suất cao nhất được chấp nhận, gọi là ${t('stop', 'lợi suất dừng (stop-out yield)')}. Mỹ dùng cách này.</td></tr>
<tr><td>Đấu thầu đa giá (multiple-price / discriminatory)</td><td>Mỗi người nhận đúng lợi suất mình đặt.</td></tr>
</tbody></table>

<div class="example"><div class="ex-h">Ví dụ 3.1 - Một phiên đấu thầu đơn giá</div>
<p>Kho bạc chào bán 10 tỷ USD trái phiếu 10 năm. Đặt thầu không cạnh tranh: 1,5 tỷ. Đặt thầu cạnh tranh: 2,0 tỷ ở 3,80%; 3,5 tỷ ở 3,82%; 4,0 tỷ ở 3,84%; 2,5 tỷ ở 3,86%. Tìm lợi suất dừng và tỷ lệ phân bổ ở mức đó.</p>
<details><summary>Xem lời giải</summary>
<p>Phần dành cho cạnh tranh = 10 - 1,5 = 8,5 tỷ.<br>
Chấp nhận 2,0 (3,80%) + 3,5 (3,82%) = 5,5 tỷ, còn thiếu 3,0 tỷ, lấy từ mức 3,84%.<br>
Lợi suất dừng = <b>3,84%</b>. Người đặt ở 3,84% chỉ được 3,0/4,0 = <b>75%</b> khối lượng. Mức 3,86% trượt thầu.<br>
Đơn giá: mọi người trúng thầu (kể cả 1,5 tỷ không cạnh tranh) đều nhận 3,84%. Nếu là đa giá, lợi suất bình quân chính phủ trả là 3,8224%.</p>
<p>Tỷ lệ ${t('btc', 'bid-to-cover')} = tổng đặt thầu / khối lượng chào bán = 13,5 / 10 = <b>1,35</b>. Tỷ lệ càng cao, nhu cầu càng mạnh.</p></details></div>

<h4>Các cách phát hành khác</h4>
<ul>
  <li>${t('tap', 'Phát hành bổ sung (tap / reopening)')}: bán thêm một mã trái phiếu đã có (cùng coupon, cùng ngày đáo hạn) để mã đó lớn và thanh khoản hơn.</li>
  <li>${t('syndic', 'Phát hành qua nghiệp đoàn (syndicated offering)')}: một nhóm ngân hàng bảo lãnh, giống doanh nghiệp. Hay dùng cho mã mới lạ (kỳ hạn rất dài, linker đầu tiên) hoặc chính phủ mới nổi phát hành ngoại tệ.</li>
</ul>

<h4>On-the-run và off-the-run</h4>
<p>Mã vừa phát hành gần nhất của mỗi kỳ hạn gọi là ${t('otr', 'on-the-run')}: thanh khoản nhất, chênh lệch mua bán hẹp nhất, nên lợi suất thường <b>thấp hơn một chút</b> so với các mã cũ (off-the-run) có thời gian còn lại tương tự. Các mã on-the-run tạo nên ${t('bench', 'đường cong lợi suất chuẩn (benchmark)')} để định giá mọi trái phiếu khác (G-spread ở FI-07).</p>`,
    },
    {
      title: '4. Địa phương, tổ chức bán chính phủ và đa quốc gia',
      minutes: 9,
      html: `
<h4>a) Chính quyền địa phương (non-sovereign)</h4>
<p>Bang, tỉnh, thành phố vay để xây trường học, cầu đường, bệnh viện. Ở Mỹ gọi là municipal bonds (munis); lãi thường <b>được miễn thuế</b> thu nhập liên bang, nên lợi suất danh nghĩa có thể thấp hơn trái phiếu doanh nghiệp cùng xếp hạng.</p>
<table class="plain"><thead><tr><th></th><th>${t('go', 'General obligation (GO) bond')}</th><th>${t('rev', 'Revenue bond')}</th></tr></thead><tbody>
<tr><td>Nguồn trả nợ</td><td>Toàn bộ quyền thu thuế của địa phương</td><td>Chỉ doanh thu của dự án được tài trợ (phí cầu đường, sân bay, nhà máy nước)</td></tr>
<tr><td>Rủi ro</td><td>Thấp hơn</td><td>Cao hơn: dự án kém thì không có tiền trả</td></tr>
<tr><td>Lợi suất</td><td>Thấp hơn</td><td>Cao hơn cho cùng kỳ hạn</td></tr>
</tbody></table>
<p>Địa phương <b>không in được tiền</b> và thường không được trung ương bảo lãnh, nên rủi ro tín dụng cao hơn chính phủ trung ương. Thị trường cũng kém thanh khoản hơn nhiều: hàng chục nghìn mã nhỏ, giao dịch OTC thưa thớt.</p>

<h4>b) Tổ chức bán chính phủ (quasi-government / agency)</h4>
<p>Được nhà nước lập ra hoặc bảo trợ để phục vụ một mục tiêu công (nhà ở, nông nghiệp, xuất khẩu, hạ tầng). Ví dụ: Fannie Mae, Freddie Mac và Federal Home Loan Banks ở Mỹ (government-sponsored enterprises), KfW ở Đức.</p>
<ul>
  <li>Thường có <b>bảo lãnh ngầm (implicit)</b>, đôi khi rõ ràng (explicit), của chính phủ. Lợi suất chỉ cao hơn trái phiếu chính phủ một chút.</li>
  <li>Phát hành cả trái phiếu thông thường lẫn chứng khoán đảm bảo bằng tài sản (ví dụ MBS, sẽ học ở FI-19).</li>
</ul>

<h4>c) Tổ chức đa quốc gia (supranational)</h4>
<p>Do nhiều quốc gia cùng sở hữu: World Bank (IBRD), Ngân hàng Phát triển Châu Á (ADB), Ngân hàng Đầu tư Châu Âu (EIB). Vay trên thị trường vốn rồi cho các nước thành viên vay lại, thường để phát triển.</p>
<ul>
  <li>Tín nhiệm rất cao (nhiều tổ chức xếp hạng AAA) nhờ vốn góp và <b>vốn cam kết có thể gọi thêm (callable capital)</b> từ các nước thành viên giàu.</li>
  <li>Phát hành bằng nhiều đồng tiền, kể cả nội tệ của nước mới nổi, giúp phát triển thị trường nợ địa phương.</li>
</ul>

<div class="example"><div class="ex-h">Ví dụ 4.1 - Xếp theo rủi ro tín dụng</div>
<p>Xếp từ rủi ro thấp đến cao (cùng nước Mỹ, cùng kỳ hạn, cùng đồng USD): (1) revenue bond của một sân bay địa phương; (2) US Treasury; (3) trái phiếu của Fannie Mae; (4) GO bond của một bang.</p>
<details><summary>Xem lời giải</summary><p>Thường là: <b>US Treasury &lt; Fannie Mae &lt; GO bond của bang &lt; revenue bond sân bay</b>. Treasury có quyền thu thuế quốc gia; agency có bảo lãnh ngầm của trung ương; GO dựa vào thuế của bang; revenue bond chỉ dựa vào một dự án. Thứ tự giữa agency và GO có thể đổi tùy trường hợp cụ thể, nhưng revenue bond gần như luôn rủi ro nhất trong nhóm.</p></details></div>`,
    },
    {
      title: '5. So sánh: trái phiếu chính phủ và trái phiếu doanh nghiệp',
      minutes: 6,
      html: `
<table class="plain"><thead><tr><th>Tiêu chí</th><th>Chính phủ trung ương</th><th>Doanh nghiệp</th></tr></thead><tbody>
<tr><td>Cách phát hành</td><td>Đấu thầu công khai, có primary dealers</td><td>Bảo lãnh phát hành qua nghiệp đoàn (underwritten), shelf registration, hoặc phát hành riêng lẻ (private placement)</td></tr>
<tr><td>Thời điểm</td><td>Theo lịch cố định, đều đặn</td><td>Cơ hội: khi có nhu cầu vốn hoặc thị trường thuận lợi</td></tr>
<tr><td>Quy mô và cấu trúc</td><td>Rất lớn, chuẩn hóa (bullet, coupon cố định, ít điều khoản)</td><td>Nhỏ hơn, đa dạng (callable, covenants, nhiều hạng ưu tiên)</td></tr>
<tr><td>Thị trường thứ cấp</td><td>OTC nhưng cực kỳ thanh khoản, chênh lệch mua bán rất hẹp, nhiều giao dịch điện tử</td><td>OTC qua dealer, nhiều mã ít khi giao dịch, chênh lệch mua bán rộng hơn</td></tr>
<tr><td>Rủi ro tín dụng</td><td>Gần như phi rủi ro với nợ nội tệ của nước phát triển</td><td>Tùy doanh nghiệp, đo bằng spread so với trái phiếu chính phủ</td></tr>
<tr><td>Vai trò</td><td>Tạo đường cong lợi suất chuẩn, tài sản thế chấp cho repo, công cụ chính sách tiền tệ</td><td>Huy động vốn cho hoạt động kinh doanh</td></tr>
</tbody></table>
<p class="warn"><b>Bẫy:</b> trái phiếu chính phủ cũng giao dịch <b>OTC</b> (qua dealer), không phải trên sàn như cổ phiếu. Điểm khác là thanh khoản: một mã on-the-run của Mỹ giao dịch hàng chục tỷ USD mỗi ngày, trong khi đa số mã trái phiếu doanh nghiệp có thể nhiều ngày không có giao dịch nào.</p>
<p class="tip">Vì sao lịch đấu thầu đều đặn lại có lợi cho chính phủ? Nhà đầu tư không phải đoán khi nào có hàng, thanh khoản tốt hơn, phần bù thanh khoản thấp hơn, nên chi phí vay bình quân giảm. Doanh nghiệp không có quy mô để làm như vậy.</p>`,
    },
    {
      title: '6. Tóm tắt và bẫy thường gặp',
      minutes: 3,
      html: `
<table class="plain"><thead><tr><th>Tình huống</th><th>Nhớ</th></tr></thead><tbody>
<tr><td>Nợ nội tệ và nợ ngoại tệ</td><td>Nội tệ: có thể in tiền nên rủi ro vỡ nợ thấp. Ngoại tệ: rủi ro tín dụng và tỷ giá cao hơn</td></tr>
<tr><td>Lệch thời điểm thu thuế</td><td>Dùng T-bills, không dùng trái phiếu dài hạn</td></tr>
<tr><td>Đấu thầu đơn giá</td><td>Mọi người trúng thầu nhận cùng lợi suất dừng (cao nhất được chấp nhận)</td></tr>
<tr><td>Đặt thầu không cạnh tranh</td><td>Phân bổ trước, chấp nhận lợi suất của phiên</td></tr>
<tr><td>On-the-run</td><td>Mới nhất, thanh khoản nhất, lợi suất thấp hơn chút; dùng làm benchmark</td></tr>
<tr><td>GO và revenue bond</td><td>GO dựa vào thuế (an toàn hơn); revenue dựa vào một dự án (lợi suất cao hơn)</td></tr>
<tr><td>Agency</td><td>Bảo lãnh ngầm của chính phủ, spread nhỏ</td></tr>
<tr><td>Supranational</td><td>Nhiều nước sở hữu, tín nhiệm cao nhờ vốn cam kết của thành viên</td></tr>
<tr><td>Chính phủ và doanh nghiệp</td><td>Đấu thầu định kỳ, quy mô lớn, chuẩn hóa, thanh khoản cao, so với bảo lãnh phát hành, không định kỳ, đa dạng</td></tr>
</tbody></table>
<p>Tiếp theo: tab <b>Luyện tập</b> 10 câu (rút ngẫu nhiên từ ngân hàng 30 câu, mỗi lần làm một bộ khác). FI-06 sẽ bắt đầu phần tính toán: định giá trái phiếu.</p>`,
    },
  ];

  const glossary = {
    sovereign: ['Sovereign government / sovereign debt', 'Chính phủ trung ương / nợ chính phủ', 'Nợ do chính phủ quốc gia phát hành, trả bằng thuế quốc gia.'],
    nonsov: ['Non-sovereign government', 'Chính quyền địa phương', 'Bang, tỉnh, thành phố; vay để tài trợ dự án công, rủi ro cao hơn trung ương.'],
    quasi: ['Quasi-government entity / agency', 'Tổ chức bán chính phủ', 'Tổ chức do nhà nước lập hoặc bảo trợ cho mục tiêu công; thường có bảo lãnh ngầm của chính phủ.'],
    supra: ['Supranational agency', 'Tổ chức đa quốc gia', 'Tổ chức do nhiều nước sở hữu (World Bank, ADB, EIB); phát hành trái phiếu tín nhiệm rất cao.'],
    dmp: ['Debt management policy', 'Chính sách quản lý nợ', 'Kế hoạch của chính phủ về khối lượng, kỳ hạn, loại công cụ và lịch phát hành nợ.'],
    linker: ['Inflation-linked bond (linker)', 'Trái phiếu chỉ số hóa theo lạm phát', 'Gốc hoặc coupon điều chỉnh theo chỉ số giá; ví dụ TIPS của Mỹ.'],
    domestic: ['Domestic debt', 'Nợ trong nước', 'Nợ bằng nội tệ, chủ yếu do nhà đầu tư trong nước nắm giữ.'],
    external: ['External debt', 'Nợ nước ngoài', 'Nợ đối với chủ nợ nước ngoài, thường bằng ngoại tệ.'],
    reserve: ['Reserve currency', 'Đồng tiền dự trữ', 'Đồng tiền được ngân hàng trung ương các nước nắm giữ và dùng rộng rãi trong thương mại (USD, EUR).'],
    auction: ['Public auction', 'Đấu thầu công khai', 'Cách chính phủ bán trái phiếu: nhận đặt thầu và phân bổ theo lợi suất.'],
    pdealer: ['Primary dealer', 'Nhà tạo lập thị trường sơ cấp', 'Ngân hàng được chỉ định, có nghĩa vụ đặt thầu ở các phiên đấu thầu và tạo thanh khoản.'],
    noncomp: ['Non-competitive bid', 'Đặt thầu không cạnh tranh', 'Chỉ ghi khối lượng, chấp nhận lợi suất của phiên; được phân bổ trước.'],
    comp: ['Competitive bid', 'Đặt thầu cạnh tranh', 'Ghi cả khối lượng và lợi suất; chỉ trúng nếu lợi suất không cao hơn lợi suất dừng.'],
    single: ['Single-price (uniform) auction', 'Đấu thầu đơn giá', 'Mọi người trúng thầu nhận cùng một lợi suất bằng lợi suất dừng.'],
    stop: ['Stop-out yield', 'Lợi suất dừng', 'Lợi suất cao nhất được chấp nhận trong phiên đấu thầu.'],
    btc: ['Bid-to-cover ratio', 'Tỷ lệ đặt thầu trên chào bán', 'Tổng khối lượng đặt thầu chia khối lượng chào bán; đo sức cầu của phiên.'],
    tap: ['Tap issuance / reopening', 'Phát hành bổ sung', 'Bán thêm một mã trái phiếu đã lưu hành, cùng coupon và ngày đáo hạn.'],
    syndic: ['Syndicated offering', 'Phát hành qua nghiệp đoàn', 'Nhóm ngân hàng bảo lãnh và phân phối đợt phát hành.'],
    otr: ['On-the-run / off-the-run', 'Mã mới nhất / mã cũ', 'On-the-run là mã mới phát hành gần nhất của một kỳ hạn, thanh khoản nhất.'],
    bench: ['Benchmark yield curve', 'Đường cong lợi suất chuẩn', 'Đường lợi suất trái phiếu chính phủ (thường on-the-run) dùng làm mốc định giá trái phiếu khác.'],
    go: ['General obligation (GO) bond', 'Trái phiếu nghĩa vụ chung', 'Trái phiếu địa phương được bảo đảm bằng toàn bộ quyền thu thuế của địa phương.'],
    rev: ['Revenue bond', 'Trái phiếu doanh thu', 'Trái phiếu địa phương chỉ trả nợ bằng doanh thu của dự án cụ thể; rủi ro cao hơn GO.'],
  };

  const practice = [
    { q: 'Kho bạc chào bán 6 tỷ USD trái phiếu theo hình thức đơn giá. Đặt thầu không cạnh tranh 1 tỷ. Đặt thầu cạnh tranh: 2 tỷ ở 4,10%; 2 tỷ ở 4,12%; 3 tỷ ở 4,15%. Mọi nhà đầu tư trúng thầu sẽ nhận lợi suất:', choices: ['4,12%', '4,15%', '4,13%'], answer: 1, explain: 'Phần cạnh tranh = 6 - 1 = 5 tỷ: nhận 2 tỷ (4,10%) + 2 tỷ (4,12%) rồi 1 tỷ ở 4,15%. Lợi suất dừng = 4,15% và ở đấu thầu đơn giá mọi người trúng thầu đều nhận mức này. Lựa chọn 4,12% là mức của người đặt thầu thứ hai (cách nghĩ đa giá); lựa chọn 4,13% là trung bình gần đúng, không phải quy tắc nào.' },
    { q: 'Kho bạc chào bán 6 tỷ USD trái phiếu theo hình thức đơn giá. Đặt thầu không cạnh tranh 1 tỷ. Đặt thầu cạnh tranh: 2 tỷ ở 4,10%; 2 tỷ ở 4,12%; 3 tỷ ở 4,15%. Nhà đầu tư đặt 3 tỷ ở 4,15% được phân bổ khoảng bao nhiêu phần trăm khối lượng đặt?', choices: ['33,3%', '100%', '20,0%'], answer: 0, explain: 'Chỉ còn 5 - 2 - 2 = 1 tỷ cho mức 4,15%, nên tỷ lệ = 1/3 = 33,3%. Lựa chọn 100% quên rằng mức lợi suất dừng thường chỉ được phân bổ một phần. Lựa chọn 20,0% chia 1 tỷ cho cả 5 tỷ phần cạnh tranh thay vì cho 3 tỷ mà nhà đầu tư này đặt.' },
    { q: 'Ngân sách năm của nước A cân bằng, nhưng thuế thu tập trung vào tháng 6 trong khi chi tiêu trải đều cả năm. Để bù khoản thiếu hụt tạm thời từ tháng 1 đến tháng 5, chính phủ phù hợp nhất nên phát hành:', choices: ['trái phiếu coupon cố định 10 năm', 'trái phiếu chỉ số hóa lạm phát 5 năm', 'tín phiếu kho bạc kỳ hạn dưới 1 năm'], answer: 2, explain: 'Đây là lệch thời điểm thu chi chứ không phải thâm hụt, nên dùng nợ ngắn hạn (T-bills) và trả khi thuế về. Trái phiếu coupon cố định 10 năm và trái phiếu chỉ số hóa lạm phát 5 năm là công cụ dài hạn, phù hợp cho thâm hụt kéo dài hoặc đầu tư hạ tầng.' },
    { q: 'So với trái phiếu USD do chính phủ nước B phát hành, trái phiếu bằng nội tệ của cùng chính phủ đó thường có rủi ro vỡ nợ thấp hơn vì:', choices: ['chính phủ có thể tăng thuế hoặc in nội tệ để trả nợ', 'nhà đầu tư nước ngoài không được mua trái phiếu nội tệ', 'trái phiếu nội tệ luôn có kỳ hạn ngắn hơn'], answer: 0, explain: 'Chính phủ kiểm soát việc phát hành nội tệ nên luôn có cách trả nợ nội tệ (đổi lại có thể gây lạm phát), nhưng không in được USD. Phương án cấm nhà đầu tư nước ngoài sai: nhà đầu tư nước ngoài vẫn có thể mua nợ nội tệ. Phương án kỳ hạn ngắn hơn sai: kỳ hạn không quyết định điều này.' },
    { q: 'Thành phố C phát hành hai loại trái phiếu cùng kỳ hạn: một trái phiếu nghĩa vụ chung (GO) và một revenue bond để xây trạm thu phí. Nhận định nào đúng nhất?', choices: ['GO bond có lợi suất cao hơn vì không gắn với dự án cụ thể', 'Revenue bond có lợi suất cao hơn vì chỉ được trả từ doanh thu của trạm thu phí', 'Hai trái phiếu có cùng lợi suất vì cùng tổ chức phát hành'], answer: 1, explain: 'GO bond dựa vào toàn bộ quyền thu thuế của thành phố, nên an toàn hơn. Revenue bond phụ thuộc một nguồn thu duy nhất, nên rủi ro và lợi suất cao hơn. Phương án GO bond lợi suất cao hơn đảo ngược quan hệ; phương án cùng lợi suất bỏ qua khác biệt về nguồn trả nợ.' },
    { q: 'Trái phiếu của các tổ chức đa quốc gia như World Bank thường có xếp hạng tín nhiệm rất cao chủ yếu vì:', choices: ['được miễn thuế ở mọi quốc gia', 'chỉ phát hành bằng đồng tiền dự trữ', 'được hỗ trợ bởi vốn góp và vốn cam kết của nhiều nước thành viên'], answer: 2, explain: 'Sức mạnh tín dụng đến từ vốn góp và vốn cam kết có thể gọi thêm (callable capital) của các nước thành viên. Phương án miễn thuế sai: miễn thuế là đặc điểm của muni Mỹ. Phương án chỉ phát hành bằng đồng tiền dự trữ sai: supranational phát hành bằng nhiều đồng tiền, kể cả nội tệ của nước mới nổi.' },
    { q: 'So với một trái phiếu chính phủ off-the-run có thời gian đáo hạn còn lại gần như bằng nhau, trái phiếu on-the-run thường có:', choices: ['thanh khoản cao hơn và lợi suất thấp hơn một chút', 'thanh khoản thấp hơn và lợi suất cao hơn một chút', 'rủi ro tín dụng cao hơn vì vừa phát hành'], answer: 0, explain: 'On-the-run là mã mới nhất, giao dịch nhiều nhất, nên nhà đầu tư chấp nhận lợi suất thấp hơn (phần bù thanh khoản nhỏ hơn). Phương án thanh khoản thấp hơn, lợi suất cao hơn đảo ngược quan hệ. Phương án rủi ro tín dụng cao hơn sai: cùng tổ chức phát hành thì rủi ro tín dụng như nhau.' },
    { q: 'Điểm nào phân biệt rõ nhất cách phát hành của chính phủ trung ương các nước phát triển so với doanh nghiệp?', choices: ['Chính phủ phát hành qua sàn giao dịch tập trung, doanh nghiệp phát hành OTC', 'Chính phủ đấu thầu theo lịch định kỳ, doanh nghiệp thường phát hành qua bảo lãnh khi có nhu cầu', 'Chính phủ chỉ phát hành riêng lẻ (private placement) cho ngân hàng'], answer: 1, explain: 'Chính phủ dùng đấu thầu công khai theo lịch cố định với quy mô lớn, chuẩn hóa; doanh nghiệp phát hành không định kỳ qua nghiệp đoàn bảo lãnh, shelf registration hoặc private placement. Phương án phát hành qua sàn tập trung sai: cả hai đều giao dịch thứ cấp chủ yếu OTC. Phương án chỉ phát hành riêng lẻ sai: đấu thầu là công khai.' },
    { q: "Kho bạc chào bán 12 tỷ USD trái phiếu. Đặt thầu không cạnh tranh: 2 tỷ. Đặt thầu cạnh tranh: 3 tỷ ở 3,50%; 4 tỷ ở 3,53%; 5 tỷ ở 3,55%; 2 tỷ ở 3,58%. Nếu đấu thầu đơn giá, lợi suất dừng (stop-out yield) là:", choices: ["3,53%", "3,58%", "3,55%"], answer: 2, explain: "Phần dành cho cạnh tranh = 12 - 2 = 10 tỷ. Chấp nhận 3 tỷ ở 3,50% và 4 tỷ ở 3,53% (cộng dồn 7 tỷ), còn thiếu 3 tỷ lấy từ mức 3,55%, nên lợi suất dừng là 3,55%. Lựa chọn 3,53% dừng quá sớm, chưa đủ khối lượng. Lựa chọn 3,58% quên trừ phần không cạnh tranh hoặc chấp nhận mọi lệnh đặt thầu." },
    { q: "Kho bạc chào bán 12 tỷ USD trái phiếu. Đặt thầu không cạnh tranh: 2 tỷ. Đặt thầu cạnh tranh: 3 tỷ ở 3,50%; 4 tỷ ở 3,53%; 5 tỷ ở 3,55%; 2 tỷ ở 3,58%. Tỷ lệ bid-to-cover của phiên đấu thầu gần nhất với:", choices: ["1,17", "1,33", "1,60"], answer: 1, explain: "Bid-to-cover = tổng đặt thầu / khối lượng chào bán = (2 + 3 + 4 + 5 + 2) / 12 = 16 / 12 = 1,33. Lựa chọn 1,17 bỏ phần đặt thầu không cạnh tranh khỏi tử số (14 / 12). Lựa chọn 1,60 chia cho phần cạnh tranh 10 tỷ thay vì toàn bộ khối lượng chào bán." },
    { q: "Kho bạc chào bán 12 tỷ USD trái phiếu. Đặt thầu không cạnh tranh: 2 tỷ. Đặt thầu cạnh tranh: 3 tỷ ở 3,50%; 4 tỷ ở 3,53%; 5 tỷ ở 3,55%; 2 tỷ ở 3,58%. Nếu đấu thầu đa giá, lợi suất bình quân gia quyền chính phủ trả cho phần cạnh tranh gần nhất với:", choices: ["3,550%", "3,538%", "3,527%"], answer: 2, explain: "Đa giá: mỗi người trúng thầu nhận đúng lợi suất mình đặt. Phần cạnh tranh trúng: 3 tỷ ở 3,50%, 4 tỷ ở 3,53%, 3 tỷ ở 3,55%. Bình quân = (3 × 3,50 + 4 × 3,53 + 3 × 3,55) / 10 = 3,527%. Lựa chọn 3,550% là lợi suất dừng, áp dụng cho đấu thầu đơn giá. Lựa chọn 3,538% lấy bình quân trên mọi lệnh đặt, kể cả phần trượt thầu và toàn bộ 5 tỷ ở 3,55%." },
    { q: "Trong đấu thầu trái phiếu chính phủ, nhà đầu tư đặt thầu không cạnh tranh (non-competitive bid):", choices: ["Chỉ ghi khối lượng, chấp nhận lợi suất do phiên đấu thầu quyết định và được phân bổ trước", "Ghi cả khối lượng và lợi suất, được phân bổ sau cùng", "Được nhận lợi suất cao hơn lợi suất dừng để bù cho việc không chọn giá"], answer: 0, explain: "Đặt thầu không cạnh tranh dành cho nhà đầu tư nhỏ: chỉ ghi khối lượng, chấp nhận lợi suất của phiên, và được phân bổ trước phần cạnh tranh. Phương án ghi cả khối lượng và lợi suất mô tả đặt thầu cạnh tranh. Phương án nhận lợi suất cao hơn lợi suất dừng sai: trong đấu thầu đơn giá, mọi người trúng thầu nhận cùng lợi suất dừng." },
    { q: "Vai trò chính của nhà tạo lập thị trường sơ cấp (primary dealers) trên thị trường trái phiếu chính phủ là:", choices: ["Bảo lãnh thanh toán nếu chính phủ vỡ nợ", "Có nghĩa vụ đặt thầu ở các phiên đấu thầu và tạo thanh khoản trên thị trường thứ cấp", "Quyết định coupon và kỳ hạn của trái phiếu chính phủ"], answer: 1, explain: "Primary dealers là các ngân hàng lớn có nghĩa vụ tham gia đặt thầu ở mọi phiên và tạo lập thị trường thứ cấp, đổi lại có quan hệ giao dịch trực tiếp với cơ quan quản lý nợ hoặc ngân hàng trung ương. Họ không bảo lãnh nợ của chính phủ. Coupon và kỳ hạn do cơ quan quản lý nợ quyết định theo chính sách quản lý nợ và kết quả đấu thầu." },
    { q: "Chính phủ bán thêm một mã trái phiếu đang lưu hành, cùng coupon và cùng ngày đáo hạn, thay vì phát hành mã mới. Mục đích chính của việc phát hành bổ sung (tap / reopening) này là:", choices: ["Thay đổi coupon cho phù hợp với lãi suất thị trường", "Tránh phải tổ chức đấu thầu công khai", "Tăng quy mô và thanh khoản của mã trái phiếu đó"], answer: 2, explain: "Tap bán thêm cùng một mã nên mã đó lớn hơn, giao dịch sôi động hơn và thanh khoản tốt hơn. Coupon giữ nguyên chứ không thay đổi; giá bán phản ánh lãi suất thị trường. Phát hành bổ sung vẫn thường được thực hiện qua đấu thầu." },
    { q: "Trong trường hợp nào chính phủ trung ương nhiều khả năng phát hành qua nghiệp đoàn bảo lãnh (syndicated offering) thay vì đấu thầu định kỳ?", choices: ["Lần đầu phát hành trái phiếu chỉ số hóa lạm phát kỳ hạn 30 năm", "Phát hành tín phiếu kho bạc 4 tuần theo lịch hằng tuần", "Phát hành bổ sung một mã trái phiếu 10 năm on-the-run"], answer: 0, explain: "Nghiệp đoàn bảo lãnh hay được dùng cho mã mới lạ hoặc khó định giá (kỳ hạn rất dài, linker đầu tiên) hoặc khi chính phủ mới nổi phát hành bằng ngoại tệ, vì các ngân hàng giúp tìm nhà đầu tư và định giá. Tín phiếu 4 tuần và phát hành bổ sung mã 10 năm on-the-run là phát hành thông thường, được bán qua đấu thầu định kỳ." },
    { q: "Theo cách gọi phổ biến của trái phiếu chính phủ Mỹ, một chứng khoán kho bạc kỳ hạn gốc 7 năm là:", choices: ["Bill", "Note", "Bond"], answer: 1, explain: "Bills có kỳ hạn gốc từ 1 năm trở xuống, notes từ 2 đến 10 năm, bonds trên 10 năm (đến 30 năm). Kỳ hạn 7 năm thuộc nhóm notes." },
    { q: "Một chính phủ chuyển sang vay chủ yếu bằng nợ ngắn hạn khi đường cong lợi suất dốc lên. Đánh đổi chính của quyết định này là:", choices: ["Chi phí lãi cao hơn nhưng loại bỏ rủi ro tái cấp vốn", "Rủi ro tỷ giá tăng vì nợ ngắn hạn luôn bằng ngoại tệ", "Chi phí lãi hiện tại thấp hơn nhưng rủi ro tái cấp vốn cao hơn vì phải đảo nợ thường xuyên"], answer: 2, explain: "Khi đường cong dốc lên, nợ ngắn rẻ hơn nợ dài, nhưng chính phủ phải đảo nợ thường xuyên và chịu rủi ro lãi suất tăng hoặc thị trường đóng băng khi đến hạn. Phương án \"chi phí cao hơn, loại bỏ rủi ro tái cấp vốn\" mô tả ngược. Kỳ hạn và đồng tiền là hai lựa chọn độc lập: nợ ngắn hạn không nhất thiết bằng ngoại tệ." },
    { q: "Một chính phủ có cam kết chống lạm phát đáng tin cậy nhiều khả năng phát hành trái phiếu chỉ số hóa lạm phát vì:", choices: ["Nhà đầu tư không cần đòi phần bù rủi ro lạm phát, nên nếu lạm phát được giữ thấp thì chi phí vay giảm", "Trái phiếu chỉ số hóa lạm phát không phải trả gốc khi đáo hạn", "Chi phí lãi của chính phủ sẽ cố định bất kể lạm phát"], answer: 0, explain: "Với linker, nhà đầu tư được bảo vệ khỏi lạm phát nên chấp nhận lợi suất thực thấp, không có phần bù rủi ro lạm phát. Nếu chính phủ giữ được lạm phát thấp, chi phí vay thực tế thấp hơn so với nợ danh nghĩa. Linker vẫn trả gốc (đã điều chỉnh). Phương án chi phí cố định sai: chi phí của linker thay đổi theo lạm phát." },
    { q: "Chính phủ nước V có khoản nợ 2 tỷ USD. Tỷ giá thay đổi từ 24.000 lên 26.400 VND/USD (nội tệ mất giá 10%). Giá trị khoản nợ quy đổi ra nội tệ sau khi tỷ giá thay đổi là:", choices: ["48.000 tỷ VND", "52.800 tỷ VND", "43.636 tỷ VND"], answer: 1, explain: "Trước: 2 × 24.000 = 48.000 tỷ VND. Sau: 2 × 26.400 = 52.800 tỷ VND, tăng 4.800 tỷ dù số USD nợ không đổi. Đây là rủi ro tỷ giá của nợ ngoại tệ. Lựa chọn 48.000 tỷ VND bỏ qua thay đổi tỷ giá. Lựa chọn 43.636 tỷ VND chia cho 1,10, nhầm rằng nội tệ mất giá làm nợ quy đổi nhỏ đi." },
    { q: "So với chính phủ các nước phát triển, chính phủ các nước thị trường mới nổi thường:", choices: ["Vay chủ yếu bằng đồng tiền dự trữ của chính mình với nhà đầu tư rộng hơn", "Có rủi ro tín dụng thấp hơn vì tăng trưởng kinh tế nhanh hơn", "Phải vay một phần bằng ngoại tệ và trả lợi suất cao hơn"], answer: 2, explain: "Nhà đầu tư nước ngoài ngại rủi ro nội tệ của nước mới nổi, nên các chính phủ này phải vay một phần bằng USD, EUR; nền kinh tế biến động hơn, thể chế kém minh bạch hơn nên lợi suất cao hơn. Vay bằng đồng tiền dự trữ của chính mình là đặc điểm của nước phát triển. Tăng trưởng nhanh nhưng biến động, phụ thuộc một ngành không có nghĩa là rủi ro tín dụng thấp hơn." },
    { q: "Một trái phiếu municipal của Mỹ được miễn thuế thu nhập liên bang có lợi suất 3,15%. Nhà đầu tư chịu thuế suất 37%. Lợi suất trước thuế tương đương của trái phiếu này gần nhất với:", choices: ["5,00%", "1,98%", "4,32%"], answer: 0, explain: "Lợi suất tương đương trước thuế = 3,15% / (1 - 0,37) = 5,00%. Đây là lý do lợi suất danh nghĩa của muni có thể thấp hơn trái phiếu doanh nghiệp cùng xếp hạng. Lựa chọn 1,98% nhân với (1 - 0,37), tức lợi suất sau thuế của một trái phiếu chịu thuế 3,15%. Lựa chọn 4,32% nhân với 1,37, sai thay cho phép chia." },
    { q: "So với thị trường trái phiếu chính phủ trung ương, thị trường trái phiếu chính quyền địa phương (như municipal bonds ở Mỹ) thường:", choices: ["Thanh khoản hơn vì được niêm yết trên sở giao dịch", "Kém thanh khoản hơn nhiều, gồm hàng chục nghìn mã nhỏ giao dịch OTC thưa thớt", "Gồm một số ít mã rất lớn, chuẩn hóa, phát hành theo lịch hằng tuần"], answer: 1, explain: "Thị trường muni phân mảnh: hàng chục nghìn issuer và mã trái phiếu nhỏ, giao dịch OTC không thường xuyên, nên kém thanh khoản hơn nhiều so với trái phiếu kho bạc. Muni không giao dịch chủ yếu trên sở giao dịch. Một số ít mã rất lớn, chuẩn hóa, phát hành định kỳ là đặc điểm của trái phiếu chính phủ trung ương." },
    { q: "Trái phiếu do Fannie Mae phát hành thường có lợi suất chỉ cao hơn trái phiếu kho bạc Mỹ cùng kỳ hạn một chút, chủ yếu vì:", choices: ["Fannie Mae có quyền thu thuế quốc gia", "Fannie Mae là tổ chức đa quốc gia do nhiều nước sở hữu", "Nhà đầu tư tin rằng có sự bảo lãnh ngầm của chính phủ Mỹ"], answer: 2, explain: "Fannie Mae là tổ chức bán chính phủ (government-sponsored enterprise); thị trường coi nó có bảo lãnh ngầm của chính phủ nên spread so với Treasury nhỏ. Quyền thu thuế quốc gia là của chính phủ trung ương. Tổ chức đa quốc gia là World Bank, ADB, EIB; Fannie Mae là tổ chức của Mỹ." },
    { q: "Một tổ chức đa quốc gia (supranational) như ADB phát hành trái phiếu bằng nội tệ của một nước thị trường mới nổi. Lợi ích chính của việc này đối với nước đó là:", choices: ["Giúp phát triển thị trường nợ nội tệ trong nước", "Giúp chính phủ nước đó in tiền để trả nợ ADB", "Chuyển rủi ro tín dụng của ADB sang chính phủ nước đó"], answer: 0, explain: "Trái phiếu nội tệ của issuer có tín nhiệm rất cao tạo thêm sản phẩm an toàn, mở rộng nhà đầu tư và đường cong tham chiếu, qua đó phát triển thị trường nợ địa phương. Phương án in tiền không liên quan: ADB là issuer chứ không phải chính phủ. Rủi ro tín dụng của trái phiếu là của ADB, không chuyển sang chính phủ nước đó." },
    { q: "Trong các trái phiếu cùng kỳ hạn, cùng bằng USD sau đây, trái phiếu nào nhiều khả năng có rủi ro tín dụng cao nhất?", choices: ["General obligation bond của một bang", "Revenue bond của một sân bay địa phương", "Trái phiếu kho bạc Mỹ (US Treasury)"], answer: 1, explain: "Revenue bond chỉ được trả từ doanh thu của một dự án, nên dự án kém thì không có tiền trả; đây gần như luôn là trái phiếu rủi ro nhất trong nhóm. GO bond được hỗ trợ bởi toàn bộ quyền thu thuế của bang. US Treasury dựa vào quyền thu thuế quốc gia và là nợ nội tệ, rủi ro vỡ nợ thấp nhất." },
    { q: "Nhận định nào đúng nhất về thị trường thứ cấp của trái phiếu chính phủ các nước phát triển?", choices: ["Giao dịch chủ yếu trên sở giao dịch tập trung theo cơ chế khớp lệnh như cổ phiếu", "Kém thanh khoản hơn trái phiếu doanh nghiệp vì chính phủ hiếm khi phát hành", "Giao dịch chủ yếu OTC qua dealer nhưng cực kỳ thanh khoản, chênh lệch mua bán rất hẹp"], answer: 2, explain: "Trái phiếu chính phủ cũng giao dịch OTC qua dealer, nhưng khác trái phiếu doanh nghiệp ở thanh khoản: mã on-the-run giao dịch khối lượng rất lớn mỗi ngày với chênh lệch rất hẹp. Phương án giao dịch trên sở giao dịch như cổ phiếu là một bẫy phổ biến. Phương án kém thanh khoản hơn trái phiếu doanh nghiệp ngược lại: chính phủ phát hành thường xuyên, quy mô lớn." },
    { q: "Vai trò nào sau đây là của trái phiếu chính phủ trung ương nhưng ít gắn với trái phiếu doanh nghiệp?", choices: ["Tạo đường cong lợi suất chuẩn để định giá các trái phiếu khác", "Tài trợ cho dự án đầu tư mở rộng nhà máy", "Có điều khoản covenant hạn chế chia cổ tức"], answer: 0, explain: "Các mã on-the-run của chính phủ tạo đường cong lợi suất chuẩn (benchmark), đồng thời là tài sản đảm bảo chính cho repo và công cụ chính sách tiền tệ. Tài trợ mở rộng nhà máy là mục đích huy động của doanh nghiệp. Covenant hạn chế chia cổ tức là điều khoản của trái phiếu doanh nghiệp; chính phủ không có cổ tức." },
    { q: "Vì sao việc chính phủ phát hành theo lịch đấu thầu đều đặn, công bố trước giúp giảm chi phí vay?", choices: ["Lịch cố định cho phép chính phủ tự chọn lợi suất mà không cần nhà đầu tư", "Nhà đầu tư lên kế hoạch được, thanh khoản tốt hơn nên phần bù thanh khoản thấp hơn", "Lịch cố định loại bỏ hoàn toàn rủi ro lãi suất cho nhà đầu tư"], answer: 1, explain: "Phát hành đều đặn giúp nhà đầu tư không phải đoán khi nào có hàng, thị trường sâu và thanh khoản hơn, nhà đầu tư đòi phần bù thanh khoản thấp hơn nên chi phí vay bình quân giảm. Chính phủ không tự chọn được lợi suất: lợi suất do đấu thầu quyết định. Lịch phát hành không ảnh hưởng đến rủi ro lãi suất của trái phiếu đã mua." },
    { q: "So với trái phiếu doanh nghiệp, trái phiếu chính phủ trung ương các nước phát triển thường:", choices: ["Có nhiều quyền call, covenant và nhiều hạng ưu tiên khác nhau", "Được phát hành chủ yếu qua phát hành riêng lẻ (private placement)", "Có quy mô mỗi mã rất lớn và cấu trúc chuẩn hóa (bullet, coupon cố định, ít điều khoản)"], answer: 2, explain: "Trái phiếu chính phủ được phát hành quy mô lớn, chuẩn hóa, thường là bullet với coupon cố định, giúp thanh khoản cao. Quyền call, covenant và nhiều hạng ưu tiên là đặc điểm đa dạng của trái phiếu doanh nghiệp. Chính phủ phát hành chủ yếu qua đấu thầu công khai, không phải phát hành riêng lẻ." },
    { q: "Trái phiếu của chính quyền địa phương thường có rủi ro tín dụng cao hơn trái phiếu nội tệ của chính phủ trung ương cùng nước chủ yếu vì:", choices: ["Địa phương không in được tiền và thường không được trung ương bảo lãnh", "Địa phương không có quyền thu thuế", "Trái phiếu địa phương luôn được phát hành bằng ngoại tệ"], answer: 0, explain: "Chính phủ trung ương có thể tăng thuế quốc gia hoặc in nội tệ để trả nợ; địa phương không in được tiền và thường không có bảo lãnh của trung ương. Phương án \"không có quyền thu thuế\" sai: địa phương có thuế địa phương, là nguồn trả của GO bond. Trái phiếu địa phương thường bằng nội tệ." },
  ];

  window.LESSONS['FI-05'] = {
    moduleId: 'FI-05',
    calculator: 'Không cần máy tính',
    warmup: [
      'Ôn FI-04: doanh nghiệp xếp hạng đầu tư và doanh nghiệp lợi suất cao khác nhau thế nào khi vay dài hạn?',
      'Theo bạn, vì sao trái phiếu chính phủ Mỹ được coi là "phi rủi ro" trong khi trái phiếu USD của một nước mới nổi thì không?',
      'Bạn có biết ai là người mua chính trái phiếu chính phủ Việt Nam không? Đoán trước rồi đối chiếu ở phần 2.',
    ],
    sections,
    glossary,
    practice,
    widgets: {},
    slides: [],
    wrapup: [
      'Kể tên 4 nhóm tổ chức phát hành khu vực công và nguồn trả nợ của mỗi nhóm.',
      'Giải thích bằng lời của bạn cơ chế đấu thầu đơn giá và lợi suất dừng.',
      'Liệt kê 3 điểm khác nhau giữa phát hành trái phiếu chính phủ và trái phiếu doanh nghiệp.',
    ],
  };
}());
