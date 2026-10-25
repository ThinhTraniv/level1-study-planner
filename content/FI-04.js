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
<p>Tiếp theo: tab <b>Luyện tập</b> - 10 câu. FI-05 xem chính phủ và các tổ chức liên quan huy động vốn ra sao.</p>`,
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
    { q: 'Hình thức tài trợ ngân hàng nào cho doanh nghiệp sự chắc chắn có vốn cao nhất trong nhiều năm?', choices: ['Hạn mức không cam kết', 'Hợp đồng tín dụng quay vòng (revolver)', 'Hạn mức cam kết thông thường'], answer: 1, explain: 'Revolver là cam kết chính thức nhiều năm, thường dùng làm dự phòng cho thương phiếu. A: ngân hàng có thể từ chối bất kỳ lúc nào. C có cam kết nhưng thường dưới 1 năm.' },
    { q: 'Hạn mức cam kết 20 triệu, phí cam kết 0,3%/năm trên phần chưa dùng. Doanh nghiệp rút 5 triệu cả năm. Phí cam kết là:', choices: ['45.000', '60.000', '15.000'], answer: 0, explain: '0,3% × (20 - 5) triệu = 45.000. B tính phí trên toàn bộ hạn mức. C tính phí trên phần đã rút, trong khi phần này chịu lãi chứ không chịu phí cam kết.' },
    { q: 'Thương phiếu mệnh giá 20 triệu, 60 ngày, lãi suất chiết khấu 3,6% theo quy ước 360 ngày. Số tiền issuer nhận được là:', choices: ['19.280.000', '19.881.644', '19.880.000'], answer: 2, explain: '20 × (1 - 3,6% × 60/360) = 20 × 0,994 = 19,88 triệu. A trừ cả lãi suất năm 3,6% mà quên nhân 60/360. B dùng 365 ngày thay vì quy ước 360.' },
    { q: 'Vì sao issuer thương phiếu thường duy trì hạn mức dự phòng của ngân hàng?', choices: ['Để được miễn đăng ký với cơ quan quản lý chứng khoán', 'Để trả thương phiếu đến hạn nếu không phát hành được thương phiếu mới', 'Để chuyển thương phiếu thành trái phiếu dài hạn'], answer: 1, explain: 'Backup line xử lý rủi ro đảo nợ. A sai: miễn đăng ký ở Mỹ đến từ kỳ hạn ≤ 270 ngày. C sai: hạn mức không chuyển đổi kỳ hạn của CP.' },
    { q: 'Dealer làm repo 30 ngày trên trái phiếu có giá trị thị trường 20 triệu, haircut 3%, repo rate 4,8% (actual/360). Tiền lãi repo là:', choices: ['80.000', '76.537', '77.600'], answer: 2, explain: 'Tiền vay = 20 × 0,97 = 19,4 triệu; lãi = 19.400.000 × 4,8% × 30/360 = 77.600. A tính lãi trên toàn bộ 20 triệu, bỏ qua haircut. B dùng 365 ngày thay cho actual/360.' },
    { q: 'Trong các điều kiện khác như nhau, repo rate NHIỀU KHẢ NĂNG thấp hơn khi:', choices: ['Tài sản đảm bảo là trái phiếu chính phủ đang được săn lùng (special)', 'Kỳ hạn repo dài hơn', 'Tài sản đảm bảo do chính người vay giữ thay vì giao cho bên cho vay'], answer: 0, explain: 'Bên cho vay tiền chấp nhận lãi thấp để có được tài sản special, an toàn. B thường làm repo rate cao hơn. C làm tăng rủi ro cho bên cho vay nên repo rate cao hơn.' },
    { q: 'Giá trái phiếu dùng làm đảm bảo trong repo giảm mạnh, khiến giá trị của nó thấp hơn số tiền đã cho vay. Đây là:', choices: ['Rủi ro pháp lý', 'Rủi ro tài sản đảm bảo', 'Rủi ro thanh toán'], answer: 1, explain: 'Collateral risk là rủi ro giá trị tài sản đảm bảo không đủ bù khoản vay; haircut và ký quỹ bổ sung là cách phòng ngừa. A liên quan đến khả năng thực thi hợp đồng. C liên quan đến việc chuyển tiền, chứng khoán đúng hạn.' },
    { q: 'Chứng chỉ tiền gửi chuyển nhượng được (negotiable CD) khác loại không chuyển nhượng ở điểm:', choices: ['Bắt buộc phải giữ đến đáo hạn', 'Chỉ bán cho nhà đầu tư cá nhân', 'Có thể bán trên thị trường thứ cấp trước khi đáo hạn'], answer: 2, explain: 'Negotiable CD bán lại được cho người khác. A là đặc điểm của CD không chuyển nhượng (rút trước hạn bị phạt). B sai: negotiable CD thường có mệnh giá lớn, người mua chủ yếu là định chế.' },
    { q: 'So với issuer xếp hạng đầu tư, nợ dài hạn của issuer lợi suất cao NHIỀU KHẢ NĂNG:', choices: ['Có bảo đảm, covenant chặt hơn và kỳ hạn ngắn hơn', 'Có kỳ hạn dài hơn và ít covenant hơn', 'Chủ yếu là trái phiếu không bảo đảm có thương phiếu đi kèm'], answer: 0, explain: 'Nhà đầu tư HY đòi bảo vệ bằng tài sản đảm bảo, covenant và kỳ hạn ngắn. B mô tả issuer IG. C sai: thương phiếu là công cụ ngắn hạn và chỉ dành cho issuer tín dụng tốt.' },
    { q: 'Một issuer IG sắp xếp các đợt trái phiếu đáo hạn rải đều ở nhiều năm khác nhau (laddering) chủ yếu để:', choices: ['Được trả coupon thấp hơn ở mọi kỳ hạn', 'Giảm rủi ro tái tài trợ vì mỗi năm chỉ phải đảo một phần nhỏ nợ', 'Tránh phải tuân thủ covenant'], answer: 1, explain: 'Laddering tránh dồn nợ đáo hạn vào một thời điểm thị trường có thể xấu. A sai: coupon do thị trường và kỳ hạn quyết định. C sai: covenant nằm trong indenture, không phụ thuộc lịch đáo hạn.' },
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
