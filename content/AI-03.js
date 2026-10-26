// Bài giảng AI-03 - Investments in Private Capital: Equity and Debt (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t, frac, keys } = window.CFAH;

  const sections = [
    {
      title: '1. Bức tranh lớn',
      minutes: 5,
      html: `
<p>${t('privcap', 'Vốn tư nhân (private capital)')} là toàn bộ vốn cấp cho doanh nghiệp <b>không qua thị trường công khai</b>. Có hai dạng, giống như bảng cân đối kế toán của doanh nghiệp có hai phía nguồn vốn:</p>
<ul>
<li>${t('pe', 'Private equity')}: góp <b>vốn chủ</b>, hưởng phần tăng giá trị doanh nghiệp.</li>
<li>${t('pd', 'Private debt')}: cho <b>vay</b>, hưởng lãi và được ưu tiên hoàn trả trước chủ sở hữu.</li>
</ul>
<div class="key">LOS 1: đặc điểm private equity và đặc tính đầu tư.<br>LOS 2: đặc điểm private debt và đặc tính đầu tư.<br>LOS 3: lợi ích đa dạng hóa mà private capital mang lại.</div>
<p>Cấu trúc quỹ (GP, LP), phí và waterfall đã học ở AI-01 và AI-02. Ở đây ta tập trung vào <b>tài sản bên trong quỹ</b>: quỹ mua loại doanh nghiệp nào, tạo giá trị ra sao, thoát vốn bằng cách nào, cho vay kiểu gì.</p>
<p class="tip">Câu hỏi thi thường là nhận diện: "PE firm thay đội quản lý" là MBI, "doanh nghiệp vay để trả cổ tức đặc biệt cho quỹ" là recapitalization, "khoản vay một tầng lãi suất pha trộn" là unitranche. Hãy học kỹ các định nghĩa.</p>`,
    },
    {
      title: '2. Private equity: các chiến lược chính',
      minutes: 12,
      html: `
<table class="plain"><thead><tr><th>Chiến lược</th><th>Mục tiêu đầu tư</th><th>Đặc điểm</th></tr></thead><tbody>
<tr><td>${t('lbo', 'Mua lại bằng vốn vay (leveraged buyout, LBO)')}</td><td>Doanh nghiệp trưởng thành, dòng tiền ổn định (kể cả công ty niêm yết bị hủy niêm yết sau thương vụ)</td><td>Phần lớn giá mua tài trợ bằng nợ; quỹ nắm quyền kiểm soát</td></tr>
<tr><td>${t('mbo', 'Management buyout (MBO)')}</td><td>Dạng LBO</td><td>Đội ngũ quản lý <b>hiện tại</b> cùng tham gia mua lại</td></tr>
<tr><td>${t('mbi', 'Management buy-in (MBI)')}</td><td>Dạng LBO</td><td>Quỹ <b>thay</b> đội quản lý hiện tại bằng đội ngũ mới từ bên ngoài</td></tr>
<tr><td>${t('vc', 'Đầu tư mạo hiểm (venture capital, VC)')}</td><td>Doanh nghiệp giai đoạn đầu, tăng trưởng cao, thường chưa có lãi</td><td>Ít hoặc không dùng nợ; rủi ro rất cao, nhiều thương vụ thất bại, vài thương vụ thắng lớn</td></tr>
<tr><td>${t('growth', 'Growth equity (minority equity)')}</td><td>Doanh nghiệp đã trưởng thành hơn, cần vốn mở rộng</td><td>Thường nắm <b>cổ phần thiểu số</b>, ít nợ; chủ cũ vẫn kiểm soát</td></tr>
</tbody></table>

<h4>Quỹ LBO tạo giá trị bằng cách nào?</h4>
<ul>
<li><b>Cải thiện hoạt động:</b> cắt giảm chi phí, tái cơ cấu, mở rộng thị trường, tăng EBITDA.</li>
<li><b>Tái cấu trúc tài chính:</b> dùng nợ để giảm vốn chủ phải bỏ ra; lá chắn thuế từ lãi vay; trả nợ dần bằng dòng tiền doanh nghiệp.</li>
<li><b>Quản trị tốt hơn:</b> gắn quyền lợi của ban điều hành với chủ sở hữu (cổ phần, quyền chọn), giám sát chặt.</li>
<li><b>Mua rẻ, bán đắt:</b> mua ở bội số định giá thấp, bán ở bội số cao hơn (multiple expansion).</li>
</ul>
<div class="example"><div class="ex-h">Ví dụ 2.1 - Nhận diện</div>
<p>(a) Một quỹ mua 25% cổ phần một chuỗi bán lẻ đang có lãi để mở thêm 100 cửa hàng, nhà sáng lập vẫn là cổ đông lớn nhất. (b) Một quỹ mua 100% một công ty sản xuất, giám đốc điều hành hiện tại góp 10% vốn chủ. (c) Một quỹ mua lại một công ty hóa chất và bổ nhiệm CEO, CFO mới từ bên ngoài.</p>
<details><summary>Xem lời giải</summary><p>(a) Growth equity (thiểu số). (b) MBO. (c) MBI.</p></details></div>`,
    },
    {
      title: '3. Venture capital: các giai đoạn phát triển',
      minutes: 10,
      html: `
<p>Doanh nghiệp khởi nghiệp gọi vốn qua nhiều vòng. Giai đoạn càng sớm thì rủi ro càng cao và lợi suất yêu cầu càng lớn.</p>
<table class="plain"><thead><tr><th>Giai đoạn</th><th>Doanh nghiệp đang ở đâu</th><th>Vốn dùng để</th></tr></thead><tbody>
<tr><td>${t('angel', 'Angel investing (pre-seed)')}</td><td>Mới có ý tưởng, kế hoạch kinh doanh</td><td>Đánh giá ý tưởng, lập kế hoạch; thường từ cá nhân (nhà đầu tư thiên thần)</td></tr>
<tr><td>Seed-stage</td><td>Đang phát triển sản phẩm</td><td>Hoàn thiện sản phẩm, nghiên cứu thị trường; quỹ VC bắt đầu tham gia</td></tr>
<tr><td>Early-stage (Series A...)</td><td>Bắt đầu vận hành, có thể chưa có doanh thu đáng kể</td><td>Bắt đầu sản xuất và bán hàng thương mại</td></tr>
<tr><td>Later-stage</td><td>Đã có doanh thu, có thể chưa có lãi</td><td>Mở rộng sản xuất, marketing, vốn lưu động</td></tr>
<tr><td>${t('mezzstage', 'Mezzanine-stage')}</td><td>Chuẩn bị IPO</td><td>Vốn bắc cầu đến khi niêm yết</td></tr>
</tbody></table>
<p class="warn"><b>Đừng nhầm:</b> "mezzanine-stage financing" của VC (vốn giai đoạn trước IPO) khác với "mezzanine debt" (nợ thứ cấp) ở phần private debt.</p>

<div class="example"><div class="ex-h">Ví dụ 3.1 - Vì sao VC đòi hỏi lợi suất rất cao</div>
<p>Một quỹ VC định đầu tư 5 triệu USD vào một startup. Nếu thành công, startup có thể được bán với giá 100 triệu USD sau 5 năm. Quỹ yêu cầu lợi suất 40%/năm (đã tính đến khả năng thất bại). Quỹ cần sở hữu bao nhiêu % công ty?</p>
<details><summary>Xem lời giải</summary>
<p>Giá trị hiện tại của công ty (post-money) = 100 / 1,40<sup>5</sup> = <b>18,59</b> triệu USD.<br>
Tỷ lệ sở hữu cần có = 5 / 18,59 = <b>26,89%</b>. Giá trị trước khi rót vốn (pre-money) = 18,59 - 5 = 13,59 triệu USD.</p>
<p>Lợi suất yêu cầu 40% nghe rất cao, nhưng phản ánh thực tế: phần lớn startup thất bại, quỹ phải kiếm đủ lời từ số ít thương vụ thành công.</p></details></div>`,
    },
    {
      title: '4. LBO bằng số: lợi suất đến từ đâu',
      minutes: 12,
      html: `
<div class="example"><div class="ex-h">Ví dụ 4.1</div>
<p>Quỹ mua một công ty có EBITDA 50 triệu USD, giá mua bằng 8 lần EBITDA. Tài trợ 60% bằng nợ, 40% bằng vốn chủ. Sau 5 năm, EBITDA tăng lên 70, công ty được bán ở bội số 9 lần, dư nợ còn 140. Tính MOIC, IRR và tách nguồn tạo giá trị.</p>
<details><summary>Xem lời giải</summary>
<p><b>Lúc mua:</b> giá trị doanh nghiệp (EV) = 8 × 50 = 400. Nợ = 240, vốn chủ = <b>160</b>.<br>
<b>Lúc bán:</b> EV = 9 × 70 = 630. Vốn chủ = 630 - 140 = <b>490</b>.<br>
MOIC = 490 / 160 = <b>3,06x</b>. IRR = 3,0625<sup>1/5</sup> - 1 = <b>25,09%</b>.</p>
${keys([
  ['Xóa TVM', '[2ND] [FV]', '0'],
  ['Số năm', '5 [N]', 'N = 5'],
  ['Vốn chủ bỏ ra', '160 [+/-] [PV]', 'PV = -160'],
  ['Không có dòng tiền giữa kỳ', '0 [PMT]', 'PMT = 0'],
  ['Vốn chủ thu về', '490 [FV]', 'FV = 490'],
  ['Tính', '[CPT] [I/Y]', 'I/Y = 25.0879'],
])}
<table class="plain"><thead><tr><th>Nguồn tạo giá trị</th><th>Cách tính</th><th>Đóng góp</th></tr></thead><tbody>
<tr><td>Tăng EBITDA (hoạt động)</td><td>(70 - 50) × 8</td><td>160</td></tr>
<tr><td>Tăng bội số (multiple expansion)</td><td>(9 - 8) × 70</td><td>70</td></tr>
<tr><td>Trả bớt nợ</td><td>240 - 140</td><td>100</td></tr>
<tr><td><b>Tổng tăng vốn chủ</b></td><td>490 - 160</td><td><b>330</b></td></tr>
</tbody></table></details></div>
<p class="tip">Nếu cùng thương vụ nhưng không vay (vốn chủ bỏ ra 400, thu về 630), MOIC chỉ 1,58x. Đòn bẩy nhân lợi suất vốn chủ lên, nhưng cũng làm doanh nghiệp dễ vỡ nợ nếu EBITDA giảm.</p>`,
    },
    {
      title: '5. Chiến lược thoái vốn (exit)',
      minutes: 8,
      html: `
<p>Lợi nhuận của private equity chỉ "thành tiền" khi thoái vốn. Lựa chọn và thời điểm thoái vốn ảnh hưởng lớn đến IRR.</p>
<table class="plain"><thead><tr><th>Cách thoái vốn</th><th>Mô tả</th><th>Ghi chú</th></tr></thead><tbody>
<tr><td>${t('tradesale', 'Bán cho nhà đầu tư chiến lược (trade sale)')}</td><td>Bán doanh nghiệp cho một công ty khác, thường cùng ngành</td><td>Nhanh, có thể được giá cao nhờ cộng hưởng; có thể bị ban điều hành phản đối, ít người mua</td></tr>
<tr><td>${t('ipo', 'Niêm yết (public listing)')}</td><td>IPO, ${t('directlist', 'niêm yết trực tiếp (direct listing)')} không phát hành cổ phiếu mới, hoặc sáp nhập với ${t('spac', 'SPAC')}</td><td>Thường cho định giá cao nhất; tốn kém, phụ thuộc thị trường, quỹ thường phải giữ lại cổ phần một thời gian</td></tr>
<tr><td>${t('recap', 'Tái cấu trúc vốn (recapitalization)')}</td><td>Doanh nghiệp vay thêm nợ để trả cổ tức đặc biệt cho quỹ</td><td>Quỹ rút được tiền nhưng <b>vẫn giữ quyền kiểm soát</b>; không phải thoái vốn hoàn toàn</td></tr>
<tr><td>${t('secondary', 'Bán thứ cấp (secondary sale)')}</td><td>Bán cho một quỹ PE khác hoặc nhà đầu tư tài chính khác</td><td>Phổ biến khi quỹ gần hết hạn</td></tr>
<tr><td>Xóa sổ, thanh lý (write-off, liquidation)</td><td>Doanh nghiệp thất bại, bán tài sản còn lại</td><td>Ghi nhận lỗ</td></tr>
</tbody></table>
<p>SPAC là công ty "vỏ" đã niêm yết, huy động tiền với mục đích duy nhất là sáp nhập với một công ty tư nhân trong một thời hạn nhất định. Sau sáp nhập, công ty tư nhân trở thành công ty niêm yết mà không qua IPO truyền thống.</p>
<div class="example"><div class="ex-h">Ví dụ 5.1</div>
<p>Thị trường IPO đóng băng, nhưng quỹ muốn trả tiền về cho LP để cải thiện IRR mà vẫn giữ công ty chờ định giá tốt hơn. Quỹ nên chọn cách nào?</p>
<details><summary>Xem lời giải</summary><p><b>Recapitalization</b> (dividend recap): công ty vay nợ trả cổ tức đặc biệt cho quỹ, quỹ vẫn sở hữu và kiểm soát, chờ IPO hoặc trade sale sau.</p></details></div>`,
    },
    {
      title: '6. Đặc tính đầu tư của private equity',
      minutes: 6,
      html: `
<ul>
<li><b>Lợi suất kỳ vọng cao hơn cổ phiếu niêm yết:</b> bù cho kém thanh khoản, đòn bẩy (với LBO) và rủi ro doanh nghiệp nhỏ, non trẻ (với VC).</li>
<li><b>Rủi ro khác nhau theo chiến lược:</b> VC có rủi ro và độ phân tán kết quả lớn nhất; LBO chịu rủi ro đòn bẩy; growth equity ở giữa.</li>
<li><b>Chênh lệch giữa các nhà quản lý rất lớn:</b> khoảng cách lợi suất giữa quỹ tốp đầu và quỹ tốp cuối lớn hơn nhiều so với quỹ cổ phiếu niêm yết. Chọn đúng GP quan trọng hơn chọn đúng "thị trường".</li>
<li><b>Kém thanh khoản, J-curve:</b> vốn khóa khoảng 10 năm; lợi suất những năm đầu âm (AI-02).</li>
<li><b>${t('vintage', 'Năm khởi tạo (vintage year)')}:</b> lợi suất phụ thuộc mạnh vào điều kiện thị trường lúc quỹ bắt đầu đầu tư. Nhà đầu tư thường rải vốn qua nhiều vintage để đa dạng hóa theo thời gian.</li>
<li><b>Định giá Level 3:</b> NAV dựa trên mô hình, cập nhật theo quý, dễ bị làm mượt.</li>
</ul>`,
    },
    {
      title: '7. Private debt: các loại hình chính',
      minutes: 14,
      html: `
<p>Sau khủng hoảng 2008, ngân hàng bị quy định chặt hơn và giảm cho vay doanh nghiệp vừa và nhỏ. Các quỹ private debt lấp vào khoảng trống này.</p>
<table class="plain"><thead><tr><th>Loại</th><th>Đặc điểm</th><th>Rủi ro, lợi suất</th></tr></thead><tbody>
<tr><td>${t('direct', 'Cho vay trực tiếp (direct lending)')}</td><td>Quỹ cho doanh nghiệp vay trực tiếp, không qua ngân hàng; thường là nợ <b>cao cấp, có bảo đảm</b>, lãi thả nổi, có điều khoản ràng buộc (covenants)</td><td>Thấp nhất trong private debt; lợi suất cao hơn trái phiếu niêm yết cùng hạng nhờ kém thanh khoản</td></tr>
<tr><td>${t('venturedebt', 'Nợ mạo hiểm (venture debt)')}</td><td>Cho startup đã được quỹ VC rót vốn vay, dù chưa có dòng tiền dương; thường kèm warrant (quyền mua cổ phần)</td><td>Cao; giúp nhà sáng lập huy động vốn mà ít bị pha loãng</td></tr>
<tr><td>${t('mezz', 'Nợ mezzanine')}</td><td>Nợ <b>thứ cấp</b>, xếp sau nợ cao cấp, trước vốn chủ; thường kèm warrant hoặc quyền chuyển đổi (equity kicker); hay dùng trong LBO</td><td>Lợi suất cao hơn nợ cao cấp để bù thứ tự ưu tiên thấp hơn</td></tr>
<tr><td>${t('distressed', 'Nợ khó khăn (distressed debt)')}</td><td>Mua nợ của công ty đang hoặc sắp phá sản, với giá chiết khấu sâu; nhà đầu tư thường tham gia tái cấu trúc, có khi chuyển nợ thành cổ phần để nắm quyền ("loan to own")</td><td>Cao, cần chuyên môn pháp lý và tái cấu trúc</td></tr>
<tr><td>${t('unitranche', 'Nợ một tầng (unitranche)')}</td><td>Gộp nợ cao cấp và nợ thứ cấp thành <b>một khoản vay duy nhất</b>, một mức lãi suất pha trộn</td><td>Ở giữa nợ cao cấp và mezzanine; doanh nghiệp đơn giản hóa thủ tục, chỉ làm việc với một bên cho vay</td></tr>
</tbody></table>

<div class="example"><div class="ex-h">Ví dụ 7.1 - Lãi suất unitranche</div>
<p>Một doanh nghiệp cần khoản vay mà nếu chia tầng sẽ gồm 70% nợ cao cấp lãi 6% và 30% nợ thứ cấp lãi 11%. Lãi suất pha trộn của khoản unitranche tương đương là bao nhiêu?</p>
<details><summary>Xem lời giải</summary><p>70% × 6% + 30% × 11% = <b>7,5%</b>. Doanh nghiệp trả một mức lãi duy nhất 7,5% cho một bên cho vay.</p></details></div>

<div class="example"><div class="ex-h">Ví dụ 7.2 - Distressed debt</div>
<p>Quỹ mua trái phiếu của một công ty sắp phá sản với giá 40 trên mệnh giá 100. Sau 2 năm tái cấu trúc, quỹ thu về 65. Lợi suất năm hóa là bao nhiêu?</p>
<details><summary>Xem lời giải</summary><p>(65 / 40)<sup>1/2</sup> - 1 = <b>27,48%</b>/năm. Nếu tái cấu trúc thất bại và chỉ thu về 20, quỹ mất một nửa vốn: lợi suất cao đi kèm rủi ro cao.</p></details></div>
<p class="tip">Private debt thường có <b>lãi suất thả nổi</b>, nên ít chịu rủi ro lãi suất hơn trái phiếu lãi cố định. Rủi ro chính là <b>rủi ro tín dụng</b> và <b>rủi ro thanh khoản</b>.</p>`,
    },
    {
      title: '8. Phổ rủi ro - lợi suất và lợi ích đa dạng hóa',
      minutes: 8,
      html: `
<h4>Phổ rủi ro - lợi suất trong private capital</h4>
<p>Xếp từ thấp đến cao (theo kỳ vọng chung, không phải quy luật cứng):</p>
<div class="formula">Direct lending cao cấp → Unitranche → Mezzanine → Venture debt, distressed debt → LBO → Venture capital</div>
<p>Nợ có thứ tự ưu tiên cao hơn và dòng tiền định kỳ (lãi), nên rủi ro thấp hơn vốn chủ. Trong vốn chủ, VC rủi ro nhất vì doanh nghiệp non trẻ, kết quả "được ăn cả ngã về không".</p>

<h4>Private capital đa dạng hóa danh mục thế nào?</h4>
<ul>
<li><b>Tương quan không hoàn hảo</b> với cổ phiếu, trái phiếu niêm yết: tiếp cận doanh nghiệp, ngành và giai đoạn không có trên sàn.</li>
<li><b>Private debt:</b> thu nhập lãi cao, lãi thả nổi giúp giảm rủi ro khi lãi suất tăng; bổ sung tốt cho trái phiếu lãi cố định.</li>
<li><b>Private equity:</b> tiềm năng nâng lợi suất danh mục cổ phiếu; đa dạng hóa theo vintage, chiến lược, khu vực.</li>
</ul>
<p class="warn"><b>Cẩn thận:</b> tương quan và biến động <b>báo cáo</b> thấp một phần do định giá Level 3 làm mượt lợi suất. Sau khi điều chỉnh (de-smoothing), tương quan của private equity với cổ phiếu niêm yết cao hơn đáng kể, vì cả hai cùng phụ thuộc vào chu kỳ kinh tế và lợi nhuận doanh nghiệp. Lợi ích đa dạng hóa có thật nhưng <b>nhỏ hơn</b> con số báo cáo.</p>
<div class="example"><div class="ex-h">Ví dụ 8.1</div>
<p>Một chỉ số private equity có độ lệch chuẩn báo cáo thấp hơn chỉ số cổ phiếu niêm yết, dù các công ty trong chỉ số dùng nợ nhiều hơn. Điều này có hợp lý không?</p>
<details><summary>Xem lời giải</summary><p>Không hợp lý về kinh tế: đòn bẩy cao hơn phải làm rủi ro vốn chủ <b>cao hơn</b>. Độ lệch chuẩn thấp chủ yếu do định giá thẩm định làm mượt lợi suất. Rủi ro thật bị đánh giá thấp.</p></details></div>`,
    },
    {
      title: '9. Tóm tắt và bẫy thường gặp',
      minutes: 5,
      html: `
<table class="plain"><thead><tr><th>Tình huống</th><th>Nhớ</th></tr></thead><tbody>
<tr><td>MBO và MBI</td><td>MBO: quản lý hiện tại tham gia mua. MBI: thay quản lý bằng đội ngũ bên ngoài</td></tr>
<tr><td>Growth equity</td><td>Cổ phần thiểu số, doanh nghiệp trưởng thành cần vốn mở rộng, ít nợ</td></tr>
<tr><td>Giai đoạn VC</td><td>Angel → seed → early → later → mezzanine-stage (trước IPO)</td></tr>
<tr><td>Nguồn lợi suất LBO</td><td>Tăng EBITDA, tăng bội số, trả nợ</td></tr>
<tr><td>Recapitalization</td><td>Vay để trả cổ tức cho quỹ; quỹ vẫn giữ kiểm soát</td></tr>
<tr><td>Direct listing và SPAC</td><td>Direct listing không phát hành cổ phiếu mới; SPAC là công ty vỏ niêm yết sáp nhập với công ty tư nhân</td></tr>
<tr><td>Mezzanine debt</td><td>Nợ thứ cấp kèm warrant; khác mezzanine-stage của VC</td></tr>
<tr><td>Unitranche</td><td>Một khoản vay, một lãi suất pha trộn giữa cao cấp và thứ cấp</td></tr>
<tr><td>Venture debt</td><td>Cho startup có VC hậu thuẫn vay, chưa có dòng tiền dương, kèm warrant</td></tr>
<tr><td>Đa dạng hóa</td><td>Có thật nhưng bị phóng đại do làm mượt</td></tr>
</tbody></table>
<p>Tiếp theo: tab <b>Luyện tập</b> - 10 câu.</p>`,
    },
  ];

  const glossary = {
    privcap: ['Private capital', 'Vốn tư nhân', 'Vốn chủ và vốn vay cấp cho doanh nghiệp không qua thị trường công khai.'],
    pe: ['Private equity', 'Vốn cổ phần tư nhân', 'Đầu tư vốn chủ vào doanh nghiệp chưa niêm yết.'],
    pd: ['Private debt', 'Nợ tư nhân', 'Cho doanh nghiệp vay không qua ngân hàng hay thị trường trái phiếu công khai.'],
    lbo: ['Leveraged buyout (LBO)', 'Mua lại bằng vốn vay', 'Mua quyền kiểm soát doanh nghiệp, phần lớn giá mua tài trợ bằng nợ.'],
    mbo: ['Management buyout (MBO)', 'Ban quản lý mua lại', 'LBO trong đó đội ngũ quản lý hiện tại cùng tham gia mua.'],
    mbi: ['Management buy-in (MBI)', 'Mua lại và thay ban quản lý', 'LBO trong đó quỹ thay đội quản lý hiện tại bằng đội ngũ bên ngoài.'],
    vc: ['Venture capital (VC)', 'Đầu tư mạo hiểm', 'Vốn chủ cho doanh nghiệp giai đoạn đầu, tăng trưởng cao, rủi ro cao.'],
    growth: ['Growth equity / minority equity', 'Vốn tăng trưởng', 'Cổ phần thiểu số trong doanh nghiệp trưởng thành cần vốn mở rộng.'],
    angel: ['Angel investing', 'Đầu tư thiên thần', 'Vốn sớm nhất, khi mới có ý tưởng và kế hoạch kinh doanh, thường từ cá nhân.'],
    mezzstage: ['Mezzanine-stage financing', 'Vốn giai đoạn trước IPO', 'Vốn VC bắc cầu cho doanh nghiệp chuẩn bị niêm yết.'],
    tradesale: ['Trade sale', 'Bán cho nhà đầu tư chiến lược', 'Bán doanh nghiệp cho một công ty khác, thường cùng ngành.'],
    ipo: ['Public listing', 'Niêm yết', 'Thoái vốn bằng cách đưa doanh nghiệp lên sàn: IPO, direct listing, SPAC.'],
    directlist: ['Direct listing', 'Niêm yết trực tiếp', 'Niêm yết cổ phiếu hiện có mà không phát hành cổ phiếu mới, không qua bảo lãnh.'],
    spac: ['Special purpose acquisition company (SPAC)', 'Công ty mua lại cho mục đích đặc biệt', 'Công ty vỏ niêm yết, huy động tiền để sáp nhập với một công ty tư nhân.'],
    recap: ['Recapitalization', 'Tái cấu trúc vốn', 'Doanh nghiệp vay thêm để trả cổ tức cho quỹ; quỹ vẫn giữ quyền kiểm soát.'],
    secondary: ['Secondary sale', 'Bán thứ cấp', 'Bán khoản đầu tư cho một quỹ PE hoặc nhà đầu tư tài chính khác.'],
    vintage: ['Vintage year', 'Năm khởi tạo', 'Năm quỹ bắt đầu đầu tư; ảnh hưởng mạnh đến lợi suất của quỹ.'],
    direct: ['Direct lending', 'Cho vay trực tiếp', 'Quỹ cho doanh nghiệp vay trực tiếp, thường nợ cao cấp có bảo đảm, lãi thả nổi.'],
    venturedebt: ['Venture debt', 'Nợ mạo hiểm', 'Khoản vay cho startup có VC hậu thuẫn, chưa có dòng tiền dương, thường kèm warrant.'],
    mezz: ['Mezzanine debt', 'Nợ mezzanine', 'Nợ thứ cấp xếp sau nợ cao cấp, thường kèm warrant hoặc quyền chuyển đổi.'],
    distressed: ['Distressed debt', 'Nợ khó khăn', 'Nợ của công ty đang hoặc sắp phá sản, mua với giá chiết khấu sâu.'],
    unitranche: ['Unitranche debt', 'Nợ một tầng', 'Gộp nợ cao cấp và thứ cấp thành một khoản vay với một lãi suất pha trộn.'],
  };

  const practice = [
    { q: 'Một quỹ private equity mua lại doanh nghiệp và thay toàn bộ ban điều hành bằng đội ngũ mới từ bên ngoài. Thương vụ này là:', choices: ['Management buyout (MBO)', 'Management buy-in (MBI)', 'Growth equity'], answer: 1, explain: 'MBI: quỹ đưa đội quản lý bên ngoài vào thay thế. MBO là khi đội quản lý hiện tại cùng tham gia mua. Growth equity là cổ phần thiểu số, không thay ban điều hành.' },
    { q: 'Một doanh nghiệp mới chỉ có ý tưởng và kế hoạch kinh doanh, nhận vốn từ một vài cá nhân để đánh giá tính khả thi. Đây là giai đoạn:', choices: ['Angel investing', 'Later-stage financing', 'Mezzanine-stage financing'], answer: 0, explain: 'Angel investing là giai đoạn sớm nhất (ý tưởng, kế hoạch). Later-stage dành cho doanh nghiệp đã có doanh thu; mezzanine-stage là vốn trước IPO.' },
    { q: 'Công ty trong danh mục của quỹ PE vay thêm nợ để trả cổ tức đặc biệt cho quỹ; quỹ vẫn giữ quyền kiểm soát. Đây là:', choices: ['Trade sale', 'Secondary sale', 'Recapitalization'], answer: 2, explain: 'Recapitalization cho quỹ rút tiền mà vẫn sở hữu, kiểm soát. Trade sale và secondary sale đều là bán doanh nghiệp, quỹ mất quyền kiểm soát.' },
    { q: 'Quỹ LBO bỏ ra 200 triệu USD vốn chủ và thu về 500 triệu USD sau 4 năm, không có dòng tiền giữa kỳ. IRR gần nhất với:', choices: ['25,74%', '37,50%', '150,00%'], answer: 0, explain: 'N = 4, PV = -200, PMT = 0, FV = 500, CPT I/Y = 25,74%. Lựa chọn 37,50% là lợi suất đơn bình quân (150%/4). Lựa chọn 150,00% là tổng lợi suất cả kỳ, chưa năm hóa.' },
    { q: 'Quỹ mua công ty với EV 280 (7 lần EBITDA 40), nợ 180, vốn chủ 100. Khi bán, EBITDA là 50, bội số 8 lần, dư nợ còn 120. Giá trị vốn chủ khi bán là:', choices: ['400', '280', '220'], answer: 1, explain: 'EV khi bán = 8 × 50 = 400; vốn chủ = 400 - 120 = 280 (MOIC 2,8x). Lựa chọn 400 là EV, quên trừ nợ. Lựa chọn 220 trừ nợ ban đầu 180, quên phần nợ đã trả.' },
    { q: 'Phát biểu nào mô tả đúng nhất mezzanine debt?', choices: ['Nợ cao cấp có bảo đảm, ưu tiên hoàn trả trước tiên', 'Khoản vay cho startup chưa có dòng tiền dương do VC hậu thuẫn', 'Nợ thứ cấp xếp sau nợ cao cấp, lãi suất cao hơn, thường kèm warrant hoặc quyền chuyển đổi'], answer: 2, explain: 'Mezzanine là nợ thứ cấp có equity kicker. Phương án \'nợ cao cấp có bảo đảm\' mô tả direct lending cao cấp; phương án \'khoản vay cho startup\' mô tả venture debt.' },
    { q: 'Một doanh nghiệp cỡ vừa vay một khoản duy nhất từ một quỹ, thay cho việc vay riêng nợ cao cấp và nợ thứ cấp, với một mức lãi suất pha trộn. Đây là:', choices: ['Unitranche debt', 'Mezzanine debt', 'Venture debt'], answer: 0, explain: 'Unitranche gộp các tầng nợ thành một khoản với một lãi suất pha trộn. Mezzanine chỉ là tầng thứ cấp; venture debt dành cho startup.' },
    { q: 'Quỹ distressed debt mua trái phiếu với giá 45 và thu về 60 sau 1,5 năm. Lợi suất năm hóa (ghép lãi) gần nhất với:', choices: ['22,22%', '21,14%', '33,33%'], answer: 1, explain: '(60/45)^(1/1,5) - 1 = 21,14%. Lựa chọn 22,22% là lợi suất đơn (33,33%/1,5). Lựa chọn 33,33% là lợi suất cả kỳ, chưa năm hóa.' },
    { q: 'Một startup công nghệ vừa gọi vốn vòng Series B từ quỹ VC, chưa có dòng tiền dương, vay thêm 10 triệu USD từ một quỹ chuyên biệt, khoản vay kèm warrant. Đây là:', choices: ['Distressed debt', 'Direct lending', 'Venture debt'], answer: 2, explain: 'Venture debt cấp cho startup có VC hậu thuẫn, thường kèm warrant. Distressed debt là nợ của công ty sắp phá sản; direct lending thường cho doanh nghiệp đã có dòng tiền ổn định.' },
    { q: 'Vì sao lợi ích đa dạng hóa của private equity có thể thấp hơn mức số liệu báo cáo cho thấy?', choices: ['Định giá thẩm định làm mượt lợi suất, khiến tương quan và biến động báo cáo thấp hơn thực tế', 'Private equity luôn có tương quan âm với cổ phiếu niêm yết', 'Private equity không chịu ảnh hưởng của chu kỳ kinh tế'], answer: 0, explain: 'Làm mượt khiến tương quan đo được thấp; tương quan thật cao hơn vì cùng phụ thuộc chu kỳ kinh tế. Các phương án \'luôn có tương quan âm\' và \'không chịu ảnh hưởng của chu kỳ kinh tế\' sai về bản chất.' },
  ];

  window.LESSONS['AI-03'] = {
    moduleId: 'AI-03',
    calculator: 'BA II Plus',
    warmup: [
      'Ôn AI-02: vì sao IRR phù hợp với quỹ private equity hơn lợi suất theo thời gian?',
      'Ôn AI-01: quỹ PE thường tổ chức dưới dạng gì? GP và LP khác nhau ở điểm nào?',
      'Nếu bạn mua một quán cà phê giá 1 tỷ, vay ngân hàng 600 triệu, sau 3 năm bán được 1,5 tỷ và đã trả bớt 200 triệu nợ, vốn của bạn tăng gấp mấy lần?',
    ],
    sections,
    glossary,
    practice,
    widgets: {},
    slides: [],
    wrapup: [
      'Liệt kê 5 cách thoái vốn của private equity và một ưu, một nhược điểm của mỗi cách.',
      'Xếp 5 loại private debt theo rủi ro tăng dần và giải thích ngắn vì sao.',
      'Giải thích bằng lời: vì sao lợi ích đa dạng hóa của private capital có thật nhưng nhỏ hơn số liệu báo cáo?',
    ],
  };
}());
