// Bài giảng FI-04 - Fixed-Income Markets for Corporate Issuers (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t, frac } = window.CFAH;

  const sections = [
    {
      title: '1. Bức tranh lớn',
      minutes: 4,
      html: `
<p>Một doanh nghiệp cần tiền cho hai việc rất khác nhau: <b>vốn lưu động</b> (trả nhà cung cấp, lương, tồn kho trong vài tuần, vài tháng) và <b>đầu tư dài hạn</b> (nhà máy, sáp nhập). Nguyên tắc chung: tài trợ khớp kỳ hạn, tức nhu cầu ngắn hạn dùng vốn ngắn hạn, nhu cầu dài hạn dùng vốn dài hạn.</p>
<table class="plain"><thead><tr><th>Phần</th><th>Nội dung</th><th>LOS</th></tr></thead><tbody>
<tr><td>2-3</td><td>Vốn ngắn hạn của doanh nghiệp phi tài chính: vay ngân hàng, vay có bảo đảm, factoring, thương phiếu</td><td>LOS 1</td></tr>
<tr><td>4</td><td>Vốn ngắn hạn của định chế tài chính: tiền gửi, vốn bán buôn</td><td>LOS 1</td></tr>
<tr><td>5-6</td><td>Repo: cơ chế, công dụng, lợi ích và rủi ro</td><td>LOS 2</td></tr>
<tr><td>7</td><td>Vốn dài hạn: issuer xếp hạng đầu tư và issuer lợi suất cao</td><td>LOS 3</td></tr>
</tbody></table>
<div class="key">Một sợi chỉ xuyên suốt: <b>chất lượng tín dụng quyết định lựa chọn</b>. Issuer mạnh vay không bảo đảm, rẻ, linh hoạt (thương phiếu, trái phiếu dài hạn ít covenant). Issuer yếu phải đưa tài sản đảm bảo, chịu covenant chặt và kỳ hạn ngắn hơn.</div>`,
    },
    {
      title: '2. Vốn ngắn hạn của doanh nghiệp: vay ngân hàng và vay có bảo đảm',
      minutes: 9,
      html: `
<h4>2.1. Hạn mức tín dụng ngân hàng (bank lines of credit)</h4>
<table class="plain"><thead><tr><th>Loại</th><th>Đặc điểm</th><th>Chi phí, mức chắc chắn</th></tr></thead><tbody>
<tr><td>${t('uncommitted', 'Hạn mức không cam kết (uncommitted line)')}</td><td>Ngân hàng cho vay nếu muốn; có thể từ chối bất kỳ lúc nào, nhất là khi doanh nghiệp đang khó khăn</td><td>Thường không có phí cam kết; kém chắc chắn nhất</td></tr>
<tr><td>${t('committed', 'Hạn mức cam kết (committed / regular line)')}</td><td>Ngân hàng cam kết cho vay đến hạn mức trong một thời gian, thường dưới 1 năm</td><td>Trả ${t('commitfee', 'phí cam kết (commitment fee)')} trên phần chưa dùng, cộng lãi trên phần đã rút</td></tr>
<tr><td>${t('revolver', 'Hợp đồng tín dụng quay vòng (revolving credit agreement, revolver)')}</td><td>Cam kết chính thức, nhiều năm, có thể rút, trả, rút lại; thường dùng làm hạn mức dự phòng cho thương phiếu</td><td>Phí cam kết; chắc chắn nhất</td></tr>
</tbody></table>
<div class="example"><div class="ex-h">Ví dụ 2.1 - Chi phí hạn mức cam kết</div>
<p>Công ty có hạn mức cam kết 10 triệu USD trong 1 năm, phí cam kết 0,25%/năm trên phần chưa dùng, lãi suất trên phần đã rút là MRR + 1,5% với MRR = 4,5%. Công ty rút trung bình 4 triệu cả năm. Tổng chi phí và chi phí tính trên số tiền đã dùng là bao nhiêu?</p>
<details><summary>Xem lời giải</summary>
<p>Phí cam kết = 0,25% × (10 - 4) triệu = <b>15.000</b>. Lãi = (4,5% + 1,5%) × 4 triệu = <b>240.000</b>. Tổng = 255.000. Chi phí trên số tiền đã dùng = 255.000 / 4.000.000 = <b>6,375%</b>, cao hơn lãi suất 6% vì phải trả cho sự chắc chắn có tiền khi cần.</p></details></div>

<h4>2.2. Vay có bảo đảm và factoring</h4>
<p>Doanh nghiệp tín dụng thấp hoặc dòng tiền không ổn định thường phải vay ${t('abl', 'có bảo đảm bằng tài sản (asset-based loan)')}: cầm cố khoản phải thu, hàng tồn kho làm tài sản đảm bảo. Ngân hàng cho vay một tỷ lệ trên giá trị tài sản, ví dụ 80% khoản phải thu.</p>
<p>${t('factoring', 'Bao thanh toán (factoring)')} là <b>bán</b> khoản phải thu cho một bên mua (factor) với giá chiết khấu. Factor ứng trước phần lớn giá trị, thu tiền từ khách hàng và thường gánh rủi ro khách hàng không trả. Ví dụ: bán 2 triệu khoản phải thu, factor ứng trước 85% (1,7 triệu) và thu phí 2% (40.000).</p>
<p class="tip">Ngoài vốn từ bên ngoài, doanh nghiệp còn có nguồn nội bộ: kéo dài thời gian trả nhà cung cấp, thu tiền khách hàng nhanh hơn, dùng tiền mặt sẵn có. Phần quản lý vốn lưu động này thuộc Corporate Issuers.</p>`,
    },
    {
      title: '3. Thương phiếu (commercial paper)',
      minutes: 7,
      html: `
<p>${t('cp', 'Thương phiếu (commercial paper, CP)')} là giấy nợ <b>ngắn hạn, không có bảo đảm</b> do doanh nghiệp uy tín phát hành trực tiếp ra thị trường tiền tệ để tài trợ vốn lưu động hoặc làm ${t('bridge', 'vốn bắc cầu (bridge financing)')} trước khi phát hành nợ dài hạn.</p>
<ul>
<li>Kỳ hạn ở Mỹ tối đa 270 ngày (để được miễn đăng ký với SEC), phần lớn dưới 90 ngày. ${t('ecp', 'Eurocommercial paper (ECP)')} phát hành ngoài thị trường nội địa của đồng tiền.</li>
<li>Thường phát hành ${t('discbasis', 'theo giá chiết khấu (discount basis)')}: mua dưới mệnh giá, nhận đủ mệnh giá khi đáo hạn.</li>
<li>Rẻ hơn vay ngân hàng với issuer xếp hạng cao; người mua là quỹ thị trường tiền tệ, doanh nghiệp có tiền nhàn rỗi.</li>
<li>${t('rollover', 'Rủi ro đảo nợ (rollover risk)')}: issuer thường trả CP đáo hạn bằng CP mới. Nếu thị trường đóng băng hoặc tín dụng issuer xấu đi, issuer không phát hành được CP mới. Vì vậy issuer duy trì ${t('backup', 'hạn mức dự phòng (backup line of credit)')}, thường là revolver, và các tổ chức xếp hạng đòi hỏi điều này.</li>
</ul>
<div class="example"><div class="ex-h">Ví dụ 3.1 - Giá thương phiếu</div>
<p>CP mệnh giá 50 triệu USD, 90 ngày, phát hành với lãi suất chiết khấu 4% (quy ước 360 ngày). Issuer nhận bao nhiêu và trả lãi bao nhiêu?</p>
<details><summary>Xem lời giải</summary>
<p>Giá = 50 × (1 - 4% × ${frac('90', '360')}) = 50 × 0,99 = <b>49,5 triệu</b>. Lãi = 50 - 49,5 = <b>0,5 triệu</b>. Chi phí thực trên tiền nhận được cao hơn 4% một chút: (50 / 49,5 - 1) × 360 / 90 = 4,04%. Các thước đo lợi suất thị trường tiền tệ học kỹ ở FI-08.</p></details></div>
<p class="warn"><b>Bẫy:</b> CP <b>không có bảo đảm</b> và chỉ dành cho issuer tín dụng tốt. Doanh nghiệp rủi ro, dòng tiền bất ổn dựa nhiều hơn vào vay có bảo đảm, factoring, leveraged loan.</p>`,
    },
    {
      title: '4. Vốn ngắn hạn của định chế tài chính',
      minutes: 8,
      html: `
<p>Ngân hàng cho vay dài hạn nhưng huy động phần lớn bằng nguồn ngắn hạn. Hai nhóm nguồn:</p>
<h4>4.1. Tiền gửi bán lẻ (retail deposits)</h4>
<ul>
<li>${t('demand', 'Tiền gửi không kỳ hạn (demand / checking deposits)')}: rút bất kỳ lúc nào, lãi rất thấp hoặc bằng 0.</li>
<li>Tiền gửi tiết kiệm, tài khoản thị trường tiền tệ: lãi cao hơn, có thể giới hạn số lần rút.</li>
<li>Tiền gửi có kỳ hạn: lãi cao hơn, rút trước hạn bị phạt.</li>
</ul>
<p>Tiền gửi bán lẻ thường <b>ổn định và rẻ</b> (một phần nhờ bảo hiểm tiền gửi), nhưng ngân hàng tốn chi phí vận hành mạng lưới để thu hút.</p>
<h4>4.2. Vốn bán buôn (wholesale funds)</h4>
<ul>
<li>${t('cbfunds', 'Vốn dự trữ tại ngân hàng trung ương (central bank funds)')}: ngân hàng thừa dự trữ cho ngân hàng thiếu vay qua đêm hoặc vài ngày; lãi suất qua đêm là công cụ chính sách tiền tệ (ví dụ fed funds rate ở Mỹ).</li>
<li>${t('interbank', 'Tiền gửi, cho vay liên ngân hàng (interbank funds)')}: không bảo đảm, kỳ hạn từ qua đêm đến 1 năm.</li>
<li>${t('cd', 'Chứng chỉ tiền gửi (certificate of deposit, CD)')}: <b>không chuyển nhượng</b> (rút trước hạn bị phạt) hoặc <b>chuyển nhượng được</b> (negotiable CD, mệnh giá lớn, bán được trên thị trường thứ cấp trước hạn).</li>
<li>Thương phiếu do định chế tài chính phát hành và <b>repo</b> (phần 5).</li>
</ul>
<table class="plain"><thead><tr><th></th><th>Tiền gửi bán lẻ</th><th>Vốn bán buôn</th></tr></thead><tbody>
<tr><td>Mức ổn định</td><td>Cao, ít nhạy cảm với lãi suất</td><td>Thấp hơn, có thể rút nhanh khi có tin xấu</td></tr>
<tr><td>Chi phí lãi</td><td>Thấp</td><td>Theo lãi suất thị trường</td></tr>
<tr><td>Ưu điểm</td><td>Nền vốn bền vững</td><td>Huy động nhanh, khối lượng lớn, chủ động kỳ hạn</td></tr>
</tbody></table>
<p class="warn"><b>Bẫy:</b> vốn bán buôn rẻ và linh hoạt lúc bình thường nhưng là nguồn đầu tiên "bỏ chạy" khi khủng hoảng. Ngân hàng phụ thuộc nhiều vào vốn bán buôn chịu rủi ro thanh khoản cao hơn.</p>`,
    },
    {
      title: '5. Hợp đồng mua lại (repo): cơ chế',
      minutes: 10,
      html: `
<p>Trong một ${t('repo', 'hợp đồng mua lại (repurchase agreement, repo)')}, một bên <b>bán</b> chứng khoán hôm nay và đồng thời cam kết <b>mua lại</b> chính chứng khoán đó vào một ngày sau với giá cao hơn. Về kinh tế, đây là một <b>khoản vay ngắn hạn có bảo đảm</b>: bên bán là người vay tiền, chứng khoán là tài sản đảm bảo.</p>
<ul>
<li>Bên vay tiền làm repo; bên cho vay tiền (nhận chứng khoán) làm ${t('reverse', 'reverse repo')}. Cùng một giao dịch, nhìn từ hai phía.</li>
<li>${t('reporate', 'Lãi suất repo (repo rate)')}: lãi suất năm ngầm trong chênh lệch giữa giá mua lại và giá bán.</li>
<li>${t('haircut', 'Tỷ lệ chiết khấu tài sản đảm bảo (haircut / repo margin)')}: tiền vay thấp hơn giá trị thị trường của chứng khoán, tạo đệm an toàn cho bên cho vay.</li>
<li>Kỳ hạn: ${t('overnight', 'qua đêm (overnight repo)')} hoặc có kỳ hạn (term repo).</li>
</ul>
<div class="formula">Tiền vay = giá trị chứng khoán × (1 - haircut) ; Giá mua lại = tiền vay × (1 + repo rate × ${frac('số ngày', '360')})</div>
<div class="example"><div class="ex-h">Ví dụ 5.1 - Repo 7 ngày</div>
<p>Dealer cần tiền để tài trợ vị thế trái phiếu mệnh giá 10 triệu USD đang giá 101. Dealer làm repo 7 ngày, haircut 2%, repo rate 5% (actual/360). Dealer nhận bao nhiêu tiền, phải mua lại với giá bao nhiêu, và trả lãi bao nhiêu?</p>
<details><summary>Xem lời giải</summary>
<p>Giá trị thị trường = 10 × 101% = 10,1 triệu. Tiền vay = 10.100.000 × 0,98 = <b>9.898.000</b>.</p>
<p>Giá mua lại = 9.898.000 × (1 + 5% × 7 / 360) = <b>9.907.623,06</b>. Lãi repo = <b>9.623,06 USD</b>.</p></details></div>
<h4>Yếu tố quyết định repo rate</h4>
<table class="plain"><thead><tr><th>Yếu tố</th><th>Repo rate thấp hơn khi</th></tr></thead><tbody>
<tr><td>Chất lượng tài sản đảm bảo</td><td>Tài sản an toàn, thanh khoản cao (trái phiếu chính phủ)</td></tr>
<tr><td>Kỳ hạn repo</td><td>Kỳ hạn ngắn hơn (thường, khi đường cong lãi suất dốc lên)</td></tr>
<tr><td>Giao tài sản</td><td>Tài sản được giao thật cho bên cho vay (hoặc bên thứ ba giữ) thay vì người vay tự giữ</td></tr>
<tr><td>Cung cầu tài sản</td><td>Tài sản đang được săn lùng (${t('special', 'special collateral')}), bên cho vay tiền chấp nhận lãi thấp để có nó</td></tr>
<tr><td>Lãi suất thị trường tiền tệ chung</td><td>Lãi suất các nguồn vốn ngắn hạn khác thấp</td></tr>
</tbody></table>
<p>Haircut cao hơn khi kỳ hạn repo dài hơn, tài sản đảm bảo kém thanh khoản hoặc biến động mạnh, và người vay có tín dụng kém. Repo có thể ${t('bilateral', 'song phương (bilateral)')} hoặc qua ${t('triparty', 'bên thứ ba (tri-party repo)')}: một ngân hàng lưu ký đứng giữa giữ tài sản, định giá hằng ngày và xử lý ký quỹ.</p>`,
    },
    {
      title: '6. Repo: công dụng, lợi ích và rủi ro',
      minutes: 6,
      html: `
<h4>Ai dùng repo và để làm gì?</h4>
<ul>
<li><b>Dealer, ngân hàng</b>: tài trợ vị thế trái phiếu với chi phí thấp; vay chứng khoán cụ thể (qua reverse repo) để bán khống hoặc giao hàng.</li>
<li><b>Ngân hàng trung ương</b>: bơm hoặc hút thanh khoản (nghiệp vụ thị trường mở). Ở Việt Nam, Ngân hàng Nhà nước dùng nghiệp vụ mua kỳ hạn giấy tờ có giá với các ngân hàng thương mại theo đúng cơ chế này.</li>
<li><b>Nhà đầu tư có tiền nhàn rỗi</b> (quỹ thị trường tiền tệ, doanh nghiệp): cho vay qua reverse repo, nhận lãi có bảo đảm.</li>
<li><b>Nhà đầu tư dùng đòn bẩy</b>: mua trái phiếu rồi đem repo để vay tiền mua thêm.</li>
</ul>
<div class="key"><b>Lợi ích:</b> chi phí vay thấp hơn vay không bảo đảm; linh hoạt kỳ hạn; thị trường sâu, thanh khoản; hỗ trợ bán khống và thực thi chính sách tiền tệ.</div>
<table class="plain"><thead><tr><th>Rủi ro</th><th>Ý nghĩa</th></tr></thead><tbody>
<tr><td>${t('defrisk', 'Rủi ro vỡ nợ đối tác')}</td><td>Bên vay không mua lại được chứng khoán; bên cho vay phải bán tài sản đảm bảo</td></tr>
<tr><td>${t('collrisk', 'Rủi ro tài sản đảm bảo')}</td><td>Giá tài sản đảm bảo giảm mạnh dưới tiền đã cho vay (haircut không đủ)</td></tr>
<tr><td>Rủi ro ký quỹ (margining)</td><td>Tranh chấp hoặc chậm trễ khi gọi bổ sung ký quỹ do giá thay đổi</td></tr>
<tr><td>Rủi ro pháp lý</td><td>Quyền xử lý tài sản khi một bên phá sản không được thực thi như kỳ vọng, nhất là giữa các quốc gia</td></tr>
<tr><td>Rủi ro thanh toán, bù trừ</td><td>Chứng khoán hoặc tiền không được chuyển đúng hạn</td></tr>
</tbody></table>
<p class="warn"><b>Bẫy:</b> repo là khoản vay có bảo đảm nhưng <b>không phải không rủi ro</b>. Khi thị trường căng thẳng, tài sản đảm bảo mất thanh khoản, haircut bị nâng đột ngột và người vay bằng repo có thể mất nguồn vốn cùng lúc (như năm 2008).</p>`,
    },
    {
      title: '7. Vốn dài hạn: investment grade và high yield',
      minutes: 8,
      html: `
<table class="plain"><thead><tr><th>Đặc điểm</th><th>Issuer xếp hạng đầu tư (IG)</th><th>Issuer lợi suất cao (HY)</th></tr></thead><tbody>
<tr><td>Rủi ro vỡ nợ, spread</td><td>Thấp</td><td>Cao; lợi nhuận và rủi ro gần với cổ phiếu hơn</td></tr>
<tr><td>Nguồn vốn chính</td><td>Trái phiếu không bảo đảm phát hành ra công chúng, thường qua shelf registration, chương trình ${t('mtn', 'MTN (medium-term note)')}</td><td>${t('levloan', 'Leveraged loan')} (thả nổi, có bảo đảm) từ ngân hàng, trái phiếu HY, nợ tư nhân</td></tr>
<tr><td>Bảo đảm</td><td>Chủ yếu không bảo đảm</td><td>Thường có bảo đảm; cấu trúc nhiều tầng nợ ưu tiên khác nhau</td></tr>
<tr><td>Covenant</td><td>Ít, lỏng</td><td>Nhiều, chặt (giới hạn vay thêm, chia cổ tức, bán tài sản)</td></tr>
<tr><td>Kỳ hạn</td><td>Trải khắp đường cong, đến 30 năm hoặc hơn</td><td>Ngắn hơn, thường 5-10 năm</td></tr>
<tr><td>Quyền call</td><td>Thường là make-whole call</td><td>Thời gian không được call (ví dụ 3 năm), sau đó call với phí giảm dần</td></tr>
<tr><td>Tái tài trợ</td><td>Dễ, có thể phát hành khi thị trường thuận lợi</td><td>Khó hơn, phụ thuộc thị trường; rủi ro tái tài trợ cao</td></tr>
</tbody></table>
<h4>Issuer IG quản lý kỳ hạn nợ thế nào?</h4>
<p>Họ thường ${t('ladder', 'trải đều kỳ hạn nợ (laddering)')}: phát hành các đợt đáo hạn ở các năm khác nhau để mỗi năm chỉ phải tái tài trợ một phần nhỏ, giảm rủi ro tái tài trợ. Họ cũng có thể phát hành chủ động khi lãi suất thấp, cho mục đích chung của doanh nghiệp.</p>
<h4>Vì sao HY phải chấp nhận điều kiện khó hơn?</h4>
<p>Nhà đầu tư vào HY quan tâm nhiều đến <b>khả năng thu hồi khi vỡ nợ</b>, nên đòi tài sản đảm bảo, covenant để ngăn issuer chuyển giá trị cho cổ đông, kỳ hạn ngắn để sớm được đánh giá lại. Phân tích HY giống phân tích cổ phiếu: dòng tiền, triển vọng ngành, đội ngũ quản lý.</p>
<div class="example"><div class="ex-h">Ví dụ 7.1 - Cái giá của tín dụng thấp</div>
<p>Hai công ty cùng vay 500 triệu USD dài hạn. Công ty IG trả coupon 4,5%, công ty HY trả 8%. Chênh lệch tiền lãi mỗi năm là bao nhiêu?</p>
<details><summary>Xem lời giải</summary><p>IG: 4,5% × 500 = 22,5 triệu. HY: 8% × 500 = 40 triệu. Chênh lệch = <b>17,5 triệu USD mỗi năm</b>, chưa kể HY còn phải đưa tài sản đảm bảo và chịu covenant chặt hơn.</p></details></div>`,
    },
    {
      title: '8. Tóm tắt và bẫy thường gặp',
      minutes: 3,
      html: `
<table class="plain"><thead><tr><th>Chủ đề</th><th>Nhớ</th></tr></thead><tbody>
<tr><td>Hạn mức ngân hàng</td><td>Uncommitted (kém chắc chắn) &lt; committed (phí trên phần chưa dùng) &lt; revolver (nhiều năm, dự phòng CP)</td></tr>
<tr><td>Vay có bảo đảm, factoring</td><td>Cho issuer yếu; factoring là bán khoản phải thu, factor gánh rủi ro thu nợ</td></tr>
<tr><td>Thương phiếu</td><td>Ngắn hạn, không bảo đảm, giá chiết khấu; rủi ro đảo nợ → cần backup line</td></tr>
<tr><td>Ngân hàng</td><td>Tiền gửi bán lẻ ổn định, rẻ; vốn bán buôn (liên ngân hàng, CD, repo) linh hoạt nhưng dễ rút</td></tr>
<tr><td>Repo</td><td>Bán và cam kết mua lại = vay có bảo đảm; tiền vay = giá trị × (1 - haircut)</td></tr>
<tr><td>Repo rate thấp khi</td><td>Tài sản tốt, kỳ hạn ngắn, tài sản được giao, collateral special</td></tr>
<tr><td>Rủi ro repo</td><td>Vỡ nợ, tài sản đảm bảo, ký quỹ, pháp lý, thanh toán</td></tr>
<tr><td>IG và HY dài hạn</td><td>IG: không bảo đảm, ít covenant, kỳ hạn dài, laddering. HY: có bảo đảm, covenant chặt, kỳ hạn ngắn, call sau thời gian khóa</td></tr>
</tbody></table>
<p>Tiếp theo: tab <b>Luyện tập</b> - 10 câu (rút ngẫu nhiên từ ngân hàng 30 câu, mỗi lần làm một bộ khác). FI-05 xem chính phủ và các tổ chức liên quan huy động vốn ra sao.</p>`,
    },
  ];

  const glossary = {
    uncommitted: ['Uncommitted line of credit', 'Hạn mức không cam kết', 'Ngân hàng có thể từ chối cho vay bất kỳ lúc nào; thường không có phí cam kết.'],
    committed: ['Committed (regular) line of credit', 'Hạn mức cam kết', 'Ngân hàng cam kết cho vay đến hạn mức trong một thời gian, thường dưới 1 năm.'],
    commitfee: ['Commitment fee', 'Phí cam kết', 'Phí trả cho ngân hàng trên phần hạn mức chưa sử dụng.'],
    revolver: ['Revolving credit agreement', 'Hợp đồng tín dụng quay vòng', 'Cam kết chính thức nhiều năm, rút và trả linh hoạt; thường làm dự phòng cho thương phiếu.'],
    abl: ['Asset-based loan', 'Khoản vay bảo đảm bằng tài sản', 'Khoản vay có tài sản như khoản phải thu, tồn kho làm đảm bảo.'],
    factoring: ['Factoring', 'Bao thanh toán', 'Bán khoản phải thu cho factor với giá chiết khấu; factor thu tiền và thường gánh rủi ro tín dụng.'],
    cp: ['Commercial paper (CP)', 'Thương phiếu', 'Giấy nợ ngắn hạn không bảo đảm do doanh nghiệp uy tín phát hành.'],
    bridge: ['Bridge financing', 'Vốn bắc cầu', 'Vốn tạm thời trong lúc chờ nguồn tài trợ dài hạn.'],
    ecp: ['Eurocommercial paper (ECP)', 'Thương phiếu Euro', 'Thương phiếu phát hành ngoài thị trường nội địa của đồng tiền.'],
    discbasis: ['Discount basis', 'Theo giá chiết khấu', 'Mua dưới mệnh giá, nhận đủ mệnh giá khi đáo hạn; lãi là phần chênh lệch.'],
    rollover: ['Rollover risk', 'Rủi ro đảo nợ', 'Rủi ro không phát hành được nợ mới để trả nợ cũ đến hạn.'],
    backup: ['Backup line of credit', 'Hạn mức dự phòng', 'Hạn mức ngân hàng để trả thương phiếu nếu không đảo nợ được.'],
    demand: ['Demand deposits', 'Tiền gửi không kỳ hạn', 'Tiền gửi rút được bất kỳ lúc nào.'],
    cbfunds: ['Central bank funds', 'Vốn dự trữ tại ngân hàng trung ương', 'Dự trữ mà ngân hàng thừa cho ngân hàng thiếu vay, thường qua đêm.'],
    interbank: ['Interbank funds', 'Vốn liên ngân hàng', 'Tiền gửi, cho vay không bảo đảm giữa các ngân hàng, kỳ hạn đến 1 năm.'],
    cd: ['Certificate of deposit (CD)', 'Chứng chỉ tiền gửi', 'Tiền gửi có kỳ hạn; loại negotiable bán được trên thị trường thứ cấp.'],
    repo: ['Repurchase agreement (repo)', 'Hợp đồng mua lại', 'Bán chứng khoán và cam kết mua lại với giá cao hơn; về kinh tế là vay có bảo đảm.'],
    reverse: ['Reverse repo', 'Reverse repo', 'Phía bên kia của repo: mua chứng khoán và cam kết bán lại, tức cho vay có bảo đảm.'],
    reporate: ['Repo rate', 'Lãi suất repo', 'Lãi suất năm ngầm trong chênh lệch giữa giá mua lại và giá bán ban đầu.'],
    haircut: ['Haircut (repo margin)', 'Tỷ lệ chiết khấu tài sản đảm bảo', 'Phần trăm giá trị chứng khoán không được cho vay, làm đệm an toàn.'],
    overnight: ['Overnight repo', 'Repo qua đêm', 'Repo kỳ hạn một ngày; repo dài hơn gọi là term repo.'],
    special: ['Special collateral', 'Tài sản đảm bảo đặc biệt', 'Chứng khoán đang được săn lùng nên repo rate thấp hơn mức thông thường.'],
    bilateral: ['Bilateral repo', 'Repo song phương', 'Hai bên tự thỏa thuận, tự giữ và định giá tài sản đảm bảo.'],
    triparty: ['Tri-party repo', 'Repo qua bên thứ ba', 'Ngân hàng lưu ký đứng giữa giữ tài sản, định giá và quản lý ký quỹ.'],
    defrisk: ['Default risk (counterparty)', 'Rủi ro vỡ nợ đối tác', 'Rủi ro bên kia không thực hiện nghĩa vụ mua lại hoặc bán lại.'],
    collrisk: ['Collateral risk', 'Rủi ro tài sản đảm bảo', 'Rủi ro giá trị tài sản đảm bảo giảm dưới khoản vay.'],
    mtn: ['Medium-term note (MTN)', 'Chương trình trái phiếu trung hạn', 'Chương trình cho phép issuer phát hành liên tục nhiều đợt nợ với kỳ hạn linh hoạt.'],
    levloan: ['Leveraged loan', 'Khoản vay đòn bẩy', 'Khoản vay ngân hàng, thường lãi thả nổi, có bảo đảm, cho issuer tín dụng thấp.'],
    ladder: ['Laddering', 'Trải đều kỳ hạn nợ', 'Sắp xếp các đợt nợ đáo hạn ở nhiều năm khác nhau để giảm rủi ro tái tài trợ.'],
  };

  const practice = [
    { q: 'Hình thức tài trợ ngân hàng nào cho doanh nghiệp sự chắc chắn có vốn cao nhất trong nhiều năm?', choices: ['Hạn mức không cam kết', 'Hợp đồng tín dụng quay vòng (revolver)', 'Hạn mức cam kết thông thường'], answer: 1, explain: 'Revolver là cam kết chính thức nhiều năm, thường dùng làm dự phòng cho thương phiếu. Hạn mức không cam kết: ngân hàng có thể từ chối bất kỳ lúc nào. Hạn mức cam kết thông thường có cam kết nhưng thường dưới 1 năm.' },
    { q: 'Hạn mức cam kết 20 triệu, phí cam kết 0,3%/năm trên phần chưa dùng. Doanh nghiệp rút 5 triệu cả năm. Phí cam kết là:', choices: ['45.000', '60.000', '15.000'], answer: 0, explain: '0,3% × (20 - 5) triệu = 45.000. Lựa chọn 60.000 tính phí trên toàn bộ hạn mức. Lựa chọn 15.000 tính phí trên phần đã rút, trong khi phần này chịu lãi chứ không chịu phí cam kết.' },
    { q: 'Thương phiếu mệnh giá 20 triệu, 60 ngày, lãi suất chiết khấu 3,6% theo quy ước 360 ngày. Số tiền issuer nhận được là:', choices: ['19.280.000', '19.881.644', '19.880.000'], answer: 2, explain: '20 × (1 - 3,6% × 60/360) = 20 × 0,994 = 19,88 triệu. Lựa chọn 19.280.000 trừ cả lãi suất năm 3,6% mà quên nhân 60/360. Lựa chọn 19.881.644 dùng 365 ngày thay vì quy ước 360.' },
    { q: 'Vì sao issuer thương phiếu thường duy trì hạn mức dự phòng của ngân hàng?', choices: ['Để được miễn đăng ký với cơ quan quản lý chứng khoán', 'Để trả thương phiếu đến hạn nếu không phát hành được thương phiếu mới', 'Để chuyển thương phiếu thành trái phiếu dài hạn'], answer: 1, explain: 'Backup line xử lý rủi ro đảo nợ. Phương án "được miễn đăng ký" sai: miễn đăng ký ở Mỹ đến từ kỳ hạn ≤ 270 ngày. Phương án "chuyển thành trái phiếu dài hạn" sai: hạn mức không chuyển đổi kỳ hạn của CP.' },
    { q: 'Dealer làm repo 30 ngày trên trái phiếu có giá trị thị trường 20 triệu, haircut 3%, repo rate 4,8% (actual/360). Tiền lãi repo là:', choices: ['80.000', '76.537', '77.600'], answer: 2, explain: 'Tiền vay = 20 × 0,97 = 19,4 triệu; lãi = 19.400.000 × 4,8% × 30/360 = 77.600. Lựa chọn 80.000 tính lãi trên toàn bộ 20 triệu, bỏ qua haircut. Lựa chọn 76.537 dùng 365 ngày thay cho actual/360.' },
    { q: 'Trong các điều kiện khác như nhau, repo rate NHIỀU KHẢ NĂNG thấp hơn khi:', choices: ['Tài sản đảm bảo là trái phiếu chính phủ đang được săn lùng (special)', 'Kỳ hạn repo dài hơn', 'Tài sản đảm bảo do chính người vay giữ thay vì giao cho bên cho vay'], answer: 0, explain: 'Bên cho vay tiền chấp nhận lãi thấp để có được tài sản special, an toàn. Kỳ hạn repo dài hơn thường làm repo rate cao hơn. Tài sản đảm bảo do người vay giữ làm tăng rủi ro cho bên cho vay nên repo rate cao hơn.' },
    { q: 'Giá trái phiếu dùng làm đảm bảo trong repo giảm mạnh, khiến giá trị của nó thấp hơn số tiền đã cho vay. Đây là:', choices: ['Rủi ro pháp lý', 'Rủi ro tài sản đảm bảo', 'Rủi ro thanh toán'], answer: 1, explain: 'Collateral risk là rủi ro giá trị tài sản đảm bảo không đủ bù khoản vay; haircut và ký quỹ bổ sung là cách phòng ngừa. Rủi ro pháp lý liên quan đến khả năng thực thi hợp đồng. Rủi ro thanh toán liên quan đến việc chuyển tiền, chứng khoán đúng hạn.' },
    { q: 'Chứng chỉ tiền gửi chuyển nhượng được (negotiable CD) khác loại không chuyển nhượng ở điểm:', choices: ['Bắt buộc phải giữ đến đáo hạn', 'Chỉ bán cho nhà đầu tư cá nhân', 'Có thể bán trên thị trường thứ cấp trước khi đáo hạn'], answer: 2, explain: 'Negotiable CD bán lại được cho người khác. Phương án bắt buộc giữ đến đáo hạn là đặc điểm của CD không chuyển nhượng (rút trước hạn bị phạt). Phương án chỉ bán cho cá nhân sai: negotiable CD thường có mệnh giá lớn, người mua chủ yếu là định chế.' },
    { q: 'So với issuer xếp hạng đầu tư, nợ dài hạn của issuer lợi suất cao NHIỀU KHẢ NĂNG:', choices: ['Có bảo đảm, covenant chặt hơn và kỳ hạn ngắn hơn', 'Có kỳ hạn dài hơn và ít covenant hơn', 'Chủ yếu là trái phiếu không bảo đảm có thương phiếu đi kèm'], answer: 0, explain: 'Nhà đầu tư HY đòi bảo vệ bằng tài sản đảm bảo, covenant và kỳ hạn ngắn. Phương án kỳ hạn dài hơn, ít covenant hơn mô tả issuer IG. Phương án có thương phiếu đi kèm sai: thương phiếu là công cụ ngắn hạn và chỉ dành cho issuer tín dụng tốt.' },
    { q: 'Một issuer IG sắp xếp các đợt trái phiếu đáo hạn rải đều ở nhiều năm khác nhau (laddering) chủ yếu để:', choices: ['Được trả coupon thấp hơn ở mọi kỳ hạn', 'Giảm rủi ro tái tài trợ vì mỗi năm chỉ phải đảo một phần nhỏ nợ', 'Tránh phải tuân thủ covenant'], answer: 1, explain: 'Laddering tránh dồn nợ đáo hạn vào một thời điểm thị trường có thể xấu. Phương án coupon thấp hơn sai: coupon do thị trường và kỳ hạn quyết định. Phương án tránh covenant sai: covenant nằm trong indenture, không phụ thuộc lịch đáo hạn.' },
    { q: "Công ty có hạn mức tín dụng cam kết 15 triệu USD trong 1 năm, phí cam kết 0,20%/năm trên phần chưa dùng, lãi suất trên phần đã rút là MRR + 1,25% với MRR = 4,00%. Công ty rút trung bình 6 triệu USD cả năm. Chi phí tính trên số tiền đã dùng gần nhất với:", choices: ["5,55%", "5,25%", "5,75%"], answer: 0, explain: "Phí cam kết = 0,20% × (15 - 6) = 18.000 USD; lãi = 5,25% × 6.000.000 = 315.000 USD; tổng 333.000 / 6.000.000 = 5,55%. Lựa chọn 5,25% bỏ qua phí cam kết. Lựa chọn 5,75% tính phí cam kết trên toàn bộ hạn mức 15 triệu thay vì phần chưa dùng 9 triệu." },
    { q: "Nguồn vốn ngân hàng nào ít có khả năng sẵn có nhất khi doanh nghiệp đang gặp khó khăn tài chính?", choices: ["Hạn mức cam kết (committed line) còn hiệu lực", "Hợp đồng tín dụng quay vòng (revolver) nhiều năm", "Hạn mức không cam kết (uncommitted line)"], answer: 2, explain: "Với hạn mức không cam kết, ngân hàng cho vay nếu muốn và có thể từ chối bất kỳ lúc nào, nhất là khi doanh nghiệp đang khó khăn; đổi lại thường không có phí cam kết. Hạn mức cam kết và revolver là cam kết chính thức của ngân hàng trong thời hạn hợp đồng, doanh nghiệp trả phí cam kết để có sự chắc chắn này." },
    { q: "Ngân hàng cho một doanh nghiệp vay có bảo đảm bằng tài sản (asset-based loan) với tỷ lệ 80% trên khoản phải thu và 50% trên hàng tồn kho. Doanh nghiệp có khoản phải thu 12,5 triệu USD và hàng tồn kho 6 triệu USD. Số tiền vay tối đa là:", choices: ["10,0 triệu USD", "14,8 triệu USD", "13,0 triệu USD"], answer: 2, explain: "Tiền vay tối đa = 80% × 12,5 + 50% × 6 = 10,0 + 3,0 = 13,0 triệu USD. Lựa chọn 10,0 triệu USD chỉ tính khoản phải thu, bỏ qua hàng tồn kho. Lựa chọn 14,8 triệu USD áp tỷ lệ 80% cho cả hàng tồn kho, trong khi hàng tồn kho kém thanh khoản hơn nên được cho vay tỷ lệ thấp hơn." },
    { q: "Mô tả nào đúng nhất về bao thanh toán (factoring)?", choices: ["Doanh nghiệp bán khoản phải thu cho factor với giá chiết khấu; factor thu tiền từ khách hàng và thường gánh rủi ro khách hàng không trả", "Doanh nghiệp cầm cố khoản phải thu để vay ngân hàng nhưng vẫn tự thu tiền và chịu rủi ro không trả", "Doanh nghiệp phát hành giấy nợ ngắn hạn không bảo đảm ra thị trường tiền tệ"], answer: 0, explain: "Factoring là bán khoản phải thu: factor ứng trước phần lớn giá trị, tự thu nợ và thường gánh rủi ro tín dụng của khách hàng. Phương án cầm cố khoản phải thu mô tả asset-based loan, trong đó tài sản chỉ là đảm bảo. Phương án phát hành giấy nợ ngắn hạn không bảo đảm mô tả thương phiếu." },
    { q: "Thương phiếu mệnh giá 30 triệu USD, kỳ hạn 120 ngày, phát hành với lãi suất chiết khấu 4,50% (quy ước 360 ngày). Chi phí vay năm hóa tính trên số tiền issuer thực nhận gần nhất với:", choices: ["4,50%", "4,57%", "1,52%"], answer: 1, explain: "Giá = 30 × (1 - 4,50% × 120/360) = 29,55 triệu; lãi = 0,45 triệu. Chi phí trên tiền nhận = (30 / 29,55 - 1) × 360/120 = 4,57%. Lựa chọn 4,50% là lãi suất chiết khấu, tính trên mệnh giá chứ không trên tiền thực nhận. Lựa chọn 1,52% là chi phí cho 120 ngày, chưa năm hóa." },
    { q: "Ở Mỹ, phần lớn thương phiếu có kỳ hạn không quá 270 ngày chủ yếu vì:", choices: ["Vì thương phiếu bắt buộc phải có tài sản đảm bảo nếu kỳ hạn trên 270 ngày", "Vì ngân hàng trung ương cấm doanh nghiệp vay quá 270 ngày", "Để được miễn đăng ký với cơ quan quản lý chứng khoán (SEC)"], answer: 2, explain: "Thương phiếu ở Mỹ có kỳ hạn tối đa 270 ngày để được miễn đăng ký với SEC, giúp giảm chi phí và thời gian phát hành; phần lớn có kỳ hạn dưới 90 ngày. Không có quy định thương phiếu trên 270 ngày phải có bảo đảm; thương phiếu vốn là nợ không bảo đảm. Doanh nghiệp vẫn vay dài hạn bằng trái phiếu, nên phương án ngân hàng trung ương cấm là sai." },
    { q: "Doanh nghiệp nào sau đây ít có khả năng dùng thương phiếu làm nguồn vốn ngắn hạn chính nhất?", choices: ["Doanh nghiệp xếp hạng tín dụng thấp, dòng tiền bất ổn", "Doanh nghiệp xếp hạng A1/P1 cần tài trợ vốn lưu động", "Doanh nghiệp xếp hạng cao cần vốn bắc cầu trước khi phát hành trái phiếu dài hạn"], answer: 0, explain: "Thương phiếu là nợ không bảo đảm nên chỉ phù hợp với issuer tín dụng tốt; doanh nghiệp tín dụng thấp, dòng tiền bất ổn dựa vào vay có bảo đảm, factoring hoặc leveraged loan. Doanh nghiệp xếp hạng cao dùng thương phiếu để tài trợ vốn lưu động và làm vốn bắc cầu trước khi phát hành nợ dài hạn." },
    { q: "Khi có tin xấu về một ngân hàng, nguồn vốn nào của ngân hàng đó nhiều khả năng bị rút nhanh nhất?", choices: ["Tiền gửi không kỳ hạn của khách hàng cá nhân được bảo hiểm tiền gửi", "Vốn vay liên ngân hàng không bảo đảm", "Vốn chủ sở hữu"], answer: 1, explain: "Vốn bán buôn như vay liên ngân hàng không bảo đảm được định giá theo thị trường và nhạy cảm với rủi ro tín dụng, nên là nguồn \"bỏ chạy\" đầu tiên khi có tin xấu. Tiền gửi bán lẻ được bảo hiểm tiền gửi ổn định hơn nhiều. Vốn chủ sở hữu không phải là nguồn có thể rút." },
    { q: "Thị trường vốn dự trữ tại ngân hàng trung ương (central bank funds, ví dụ fed funds ở Mỹ) có đặc điểm:", choices: ["Ngân hàng trung ương cho doanh nghiệp phi tài chính vay trực tiếp với kỳ hạn dài", "Ngân hàng huy động tiền gửi tiết kiệm của cá nhân có kỳ hạn trên 1 năm", "Ngân hàng thừa dự trữ cho ngân hàng thiếu dự trữ vay, thường qua đêm; lãi suất qua đêm là công cụ chính sách tiền tệ"], answer: 2, explain: "Central bank funds là khoản vay dự trữ giữa các ngân hàng, thường qua đêm hoặc vài ngày, và lãi suất này được ngân hàng trung ương điều hành. Phương án cho doanh nghiệp phi tài chính vay trực tiếp sai cả bên vay lẫn kỳ hạn. Tiền gửi tiết kiệm của cá nhân là tiền gửi bán lẻ, không phải vốn bán buôn." },
    { q: "Dealer làm repo trên trái phiếu mệnh giá 25 triệu USD đang có giá 98,40, haircut 4%. Số tiền dealer vay được gần nhất với:", choices: ["23,616 triệu USD", "24,000 triệu USD", "24,600 triệu USD"], answer: 0, explain: "Giá trị thị trường = 25 × 98,40% = 24,600 triệu; tiền vay = 24,600 × (1 - 4%) = 23,616 triệu USD. Lựa chọn 24,000 triệu USD áp haircut lên mệnh giá thay vì giá trị thị trường. Lựa chọn 24,600 triệu USD bỏ qua haircut." },
    { q: "Một ngân hàng vay 9.800.000 USD qua repo 14 ngày với repo rate 5,20% (actual/360). Giá mua lại gần nhất với:", choices: ["9.819.546,30 USD", "9.819.817,78 USD", "10.309.600,00 USD"], answer: 1, explain: "Giá mua lại = 9.800.000 × (1 + 5,20% × 14/360) = 9.819.817,78 USD. Lựa chọn 9.819.546,30 USD dùng 365 ngày thay vì quy ước actual/360. Lựa chọn 10.309.600,00 USD áp cả lãi suất năm cho 14 ngày, quên nhân tỷ lệ thời gian." },
    { q: "Trong một repo 10 ngày, bên vay bán chứng khoán nhận 4.950.000 USD và cam kết mua lại với giá 4.954.125 USD. Repo rate (actual/360) gần nhất với:", choices: ["0,0833%", "3,04%", "3,00%"], answer: 2, explain: "Lãi = 4.954.125 - 4.950.000 = 4.125; repo rate = 4.125 / 4.950.000 × 360/10 = 3,00%. Lựa chọn 0,0833% là lãi suất cho 10 ngày, chưa năm hóa. Lựa chọn 3,04% năm hóa theo 365 ngày, sai quy ước actual/360." },
    { q: "Một quỹ thị trường tiền tệ cho một dealer vay tiền qua đêm và nhận trái phiếu kho bạc làm tài sản đảm bảo. Nhìn từ phía quỹ, giao dịch này là:", choices: ["Reverse repo", "Repo", "Bán khống trái phiếu kho bạc"], answer: 0, explain: "Bên cho vay tiền và nhận chứng khoán thực hiện reverse repo; bên vay tiền (dealer) thực hiện repo. Cùng một giao dịch nhìn từ hai phía. Quỹ không bán khống: nó nắm giữ trái phiếu làm tài sản đảm bảo và sẽ trả lại khi dealer mua lại." },
    { q: "Trong các điều kiện khác như nhau, yếu tố nào nhiều khả năng làm haircut của repo CAO HƠN?", choices: ["Kỳ hạn repo là qua đêm thay vì 3 tháng", "Tài sản đảm bảo là trái phiếu doanh nghiệp high yield kém thanh khoản", "Bên vay là ngân hàng có xếp hạng tín dụng AA"], answer: 1, explain: "Haircut cao hơn khi tài sản đảm bảo kém thanh khoản hoặc biến động mạnh, kỳ hạn repo dài hơn và người vay có tín dụng kém. Trái phiếu HY kém thanh khoản cần đệm an toàn lớn hơn. Kỳ hạn qua đêm ngắn hơn và người vay xếp hạng AA đều làm haircut thấp hơn." },
    { q: "Trong một tri-party repo, bên thứ ba (thường là ngân hàng lưu ký) có vai trò:", choices: ["Bảo lãnh hoàn trả tiền vay nếu bên vay vỡ nợ", "Cho bên vay vay thêm tiền khi giá tài sản đảm bảo giảm", "Giữ tài sản đảm bảo, định giá hằng ngày và xử lý ký quỹ cho hai bên"], answer: 2, explain: "Tri-party agent là bên trung gian vận hành: giữ tài sản đảm bảo, định giá theo thị trường hằng ngày, gọi ký quỹ và xử lý thanh toán. Agent không bảo lãnh khoản vay, rủi ro tín dụng vẫn thuộc hai bên. Khi giá tài sản đảm bảo giảm, bên vay phải bổ sung ký quỹ chứ không được vay thêm." },
    { q: "Một dealer muốn bán khống một trái phiếu chính phủ cụ thể mà mình không nắm giữ. Cách phổ biến để có trái phiếu đó giao cho người mua là:", choices: ["Thực hiện reverse repo với trái phiếu đó làm tài sản đảm bảo", "Thực hiện repo, bán trái phiếu đó cho bên cho vay tiền", "Phát hành thương phiếu để mua trái phiếu đó"], answer: 0, explain: "Qua reverse repo, dealer cho vay tiền và nhận trái phiếu cụ thể làm tài sản đảm bảo, rồi dùng trái phiếu đó giao cho người mua trong giao dịch bán khống. Repo là khi dealer đã có trái phiếu và cần vay tiền, ngược với tình huống này. Phát hành thương phiếu để mua trái phiếu là mua thật, không phải bán khống." },
    { q: "Bên cho vay trong một repo xuyên biên giới phát hiện rằng khi bên vay phá sản, luật nước sở tại không cho phép bên cho vay bán ngay tài sản đảm bảo như hợp đồng quy định. Đây là loại rủi ro nào của repo?", choices: ["Rủi ro ký quỹ (margining)", "Rủi ro pháp lý", "Rủi ro tài sản đảm bảo"], answer: 1, explain: "Rủi ro pháp lý là khi quyền xử lý tài sản đảm bảo lúc một bên phá sản không được thực thi như kỳ vọng, nhất là giữa các quốc gia. Rủi ro ký quỹ liên quan đến tranh chấp hoặc chậm trễ khi gọi bổ sung ký quỹ. Rủi ro tài sản đảm bảo là khi giá tài sản giảm xuống dưới số tiền đã cho vay." },
    { q: "Một quỹ có 4 triệu USD vốn tự có, mua trái phiếu rồi liên tục đem trái phiếu đi repo để vay tiền mua thêm. Haircut là 5%. Quy mô vị thế trái phiếu tối đa về lý thuyết gần nhất với:", choices: ["4,2 triệu USD", "76,0 triệu USD", "80,0 triệu USD"], answer: 2, explain: "Với mỗi đồng trái phiếu, quỹ chỉ phải tự góp phần haircut 5%, nên vị thế tối đa = vốn tự có / haircut = 4 / 0,05 = 80,0 triệu USD. Lựa chọn 4,2 triệu USD chia cho (1 - haircut), như thể chỉ đi vay một lần nhỏ. Lựa chọn 76,0 triệu USD là tổng số tiền vay qua repo, không phải quy mô vị thế. Đòn bẩy cao như vậy là lý do haircut bị nâng đột ngột có thể buộc quỹ bán tháo." },
    { q: "Điều khoản call nào thường gặp nhất ở trái phiếu dài hạn của issuer lợi suất cao (high yield)?", choices: ["Thời gian không được call (ví dụ 3 năm), sau đó được call với phí mua lại giảm dần", "Make-whole call có thể thực hiện bất kỳ lúc nào", "Không có quyền call vì trái chủ HY đòi giữ trái phiếu đến đáo hạn"], answer: 0, explain: "Trái phiếu HY thường có thời gian khóa không được call, sau đó issuer được call với phí giảm dần; điều này cho issuer cơ hội tái tài trợ khi tín dụng cải thiện. Make-whole call là đặc điểm điển hình của trái phiếu IG. Phương án không có quyền call sai: quyền call rất phổ biến ở trái phiếu HY." },
    { q: "Hai công ty cùng vay 750 triệu USD dài hạn. Công ty xếp hạng đầu tư trả coupon 4,2%/năm, công ty lợi suất cao trả 7,9%/năm. Chênh lệch tiền lãi mỗi năm gần nhất với:", choices: ["59,25 triệu USD", "27,75 triệu USD", "31,50 triệu USD"], answer: 1, explain: "IG trả 4,2% × 750 = 31,50 triệu; HY trả 7,9% × 750 = 59,25 triệu; chênh lệch = 27,75 triệu USD mỗi năm. Lựa chọn 59,25 triệu USD là toàn bộ tiền lãi của công ty HY. Lựa chọn 31,50 triệu USD là tiền lãi của công ty IG, không phải chênh lệch." },
  ];

  window.LESSONS['FI-04'] = {
    moduleId: 'FI-04',
    calculator: 'Không cần máy tính',
    warmup: [
      'Nhớ lại FI-03: ranh giới giữa investment grade và high yield nằm ở xếp hạng nào?',
      'Nhớ lại FI-01: covenant nào bảo vệ trái chủ khỏi việc issuer vay thêm quá nhiều?',
      'Đoán trước: nếu một doanh nghiệp cần tiền trả lương trong 2 tháng, bạn sẽ khuyên họ vay kiểu gì? Nếu cần xây nhà máy 10 năm thì sao?',
    ],
    sections,
    glossary,
    practice,
    widgets: {},
    slides: [],
    wrapup: [
      'So sánh uncommitted line, committed line và revolver theo mức chắc chắn và chi phí.',
      'Tự tính lại ví dụ repo 7 ngày: tiền vay, giá mua lại, tiền lãi; rồi nêu 3 rủi ro của repo.',
      'Lập bảng 5 dòng so sánh vốn dài hạn của issuer IG và HY.',
    ],
  };
}());
