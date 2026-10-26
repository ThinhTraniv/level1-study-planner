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
<p>Tiếp theo: tab <b>Luyện tập</b> 8 câu. FI-06 sẽ bắt đầu phần tính toán: định giá trái phiếu.</p>`,
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
