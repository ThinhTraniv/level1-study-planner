// Bài giảng FI-17 - Fixed-Income Securitization (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t } = window.CFAH;

  const sections = [
    {
      title: '1. Bức tranh lớn',
      minutes: 4,
      html: `
<p>Một ngân hàng cho vay mua xe. Cách truyền thống: giữ khoản vay trên bảng cân đối đến khi đáo hạn, thu lãi, chịu rủi ro vỡ nợ, và vốn bị "giam" suốt thời gian đó. ${t('securitization', 'Chứng khoán hóa (securitization)')} là cách khác: <b>gom nhiều khoản vay lại thành một danh mục, bán danh mục đó cho một pháp nhân riêng, pháp nhân này phát hành chứng khoán</b> mà dòng tiền trả cho nhà đầu tư lấy từ chính các khoản vay.</p>
<div class="key">Chứng khoán hóa biến tài sản <b>kém thanh khoản</b> (từng khoản vay riêng lẻ) thành chứng khoán <b>giao dịch được</b> - ${t('abs', 'chứng khoán đảm bảo bằng tài sản (asset-backed securities, ABS)')}. Danh mục khoản vay đứng sau gọi là ${t('collateral', 'tài sản đảm bảo (collateral)')}.</div>
<p>Module có 2 LOS, và là nền cho hai module tiếp theo:</p>
<ol>
  <li>Giải thích lợi ích của chứng khoán hóa với người phát hành, nhà đầu tư, nền kinh tế và thị trường tài chính. LOS 1 - phần 3 và 4.</li>
  <li>Mô tả quy trình chứng khoán hóa, các bên tham gia và vai trò của từng bên. LOS 2 - phần 2 và 5.</li>
</ol>
<p class="tip">FI-18 sẽ đi sâu vào ABS ngoài thế chấp, covered bond, tăng cường tín dụng và CDO; FI-19 dành cho chứng khoán đảm bảo bằng thế chấp (MBS). Ở đây ta chỉ cần nắm "bộ khung": ai làm gì và vì sao mọi người cùng có lợi.</p>`,
    },
    {
      title: '2. Quy trình chứng khoán hóa từng bước',
      minutes: 9,
      html: `
<p>Hãy theo một giao dịch giả định. <b>Công ty Tài chính Sao Mai</b> đã cho 8.000 khách hàng vay mua ô tô, tổng dư nợ 200 triệu USD, lãi suất bình quân 7%/năm.</p>
<table class="plain"><thead><tr><th>Bước</th><th>Việc xảy ra</th><th>Ý nghĩa</th></tr></thead><tbody>
<tr><td>1. Cho vay</td><td>Sao Mai thẩm định và giải ngân cho người vay</td><td>Sao Mai là ${t('originator', 'bên khởi tạo (originator)')}</td></tr>
<tr><td>2. Gom và bán</td><td>Sao Mai gom 8.000 khoản vay, <b>bán</b> cho một pháp nhân mới lập (Sao Mai Auto Trust)</td><td>Sao Mai thành ${t('seller', 'bên bán (seller, depositor)')}; giao dịch phải là ${t('truesale', 'bán thật (true sale)')}</td></tr>
<tr><td>3. Phát hành</td><td>Trust phát hành ABS cho nhà đầu tư, dùng tiền thu được trả cho Sao Mai</td><td>Trust là ${t('spe', 'pháp nhân mục đích đặc biệt (SPE)')}, cũng là người phát hành (issuer)</td></tr>
<tr><td>4. Thu nợ</td><td>Người vay vẫn trả góp hằng tháng; một đơn vị thu tiền, nhắc nợ, xử lý nợ quá hạn</td><td>Đơn vị đó là ${t('servicer', 'bên quản lý thu nợ (servicer)')}, thường chính là Sao Mai</td></tr>
<tr><td>5. Chuyển trả</td><td>Tiền thu được, sau khi trừ phí, chảy về nhà đầu tư ABS theo thứ tự đã định</td><td>Thứ tự trả gọi là ${t('waterfall', 'thác nước dòng tiền (waterfall)')}</td></tr>
</tbody></table>
<div class="key">Điểm cốt lõi: nhà đầu tư ABS <b>không cho Sao Mai vay</b>. Họ có quyền đối với <b>dòng tiền của danh mục khoản vay</b>. Vì vậy chất lượng ABS phụ thuộc chủ yếu vào chất lượng tài sản đảm bảo, không phải vào sức khỏe tài chính của Sao Mai.</div>
<h4>Phân tầng (tranching): một danh mục, nhiều loại chứng khoán</h4>
<p>SPE thường không phát hành một loại ABS duy nhất mà chia thành nhiều ${t('tranche', 'tầng (tranche)')}: tầng cao cấp (senior) được trả trước và chịu lỗ sau cùng; tầng thứ cấp (subordinated) được trả sau, chịu lỗ trước, đổi lại lợi suất cao hơn. Nhờ đó cùng một danh mục khoản vay phục vụ được nhiều kiểu nhà đầu tư. Cơ chế phân tầng theo rủi ro tín dụng học ở FI-18, phân tầng theo thời gian (rủi ro trả trước) học ở FI-19.</p>
<p class="warn"><b>Đừng nhầm:</b> phát hành trái phiếu có bảo đảm thông thường (covered bond, trái phiếu doanh nghiệp có tài sản thế chấp) thì tài sản <b>vẫn nằm trên bảng cân đối</b> của người phát hành. Chứng khoán hóa thì tài sản được <b>bán ra khỏi</b> bảng cân đối của bên khởi tạo.</p>`,
    },
    {
      title: '3. Lợi ích cho người phát hành và nhà đầu tư',
      minutes: 9,
      html: `
<h4>Với người phát hành (bên khởi tạo)</h4>
<ul>
  <li><b>Giải phóng vốn và mở rộng cho vay.</b> Khoản vay đã bán không còn trên bảng cân đối, nên ngân hàng không phải giữ vốn tự có cho chúng. Tiền thu từ bán danh mục được dùng để cho vay tiếp: hoạt động kinh doanh tăng mà không cần thêm vốn chủ.</li>
  <li><b>Chi phí vốn có thể thấp hơn.</b> ABS được xếp hạng dựa trên chất lượng tài sản đảm bảo (và tăng cường tín dụng). Một công ty tài chính xếp hạng BBB vẫn có thể phát hành tầng senior AAA, vay rẻ hơn so với phát hành trái phiếu của chính mình.</li>
  <li><b>Thu phí.</b> Bên khởi tạo thường tiếp tục làm servicer và nhận phí quản lý thu nợ.</li>
  <li><b>Chuyển giao rủi ro.</b> Rủi ro tín dụng và rủi ro lãi suất của danh mục được chuyển phần lớn sang nhà đầu tư.</li>
</ul>
<div class="example"><div class="ex-h">Ví dụ 3.1 - Vốn được giải phóng</div>
<p>Giả sử quy định yêu cầu Sao Mai giữ vốn tự có bằng 8% dư nợ cho vay. Nếu bán toàn bộ danh mục 200 triệu USD cho SPE, bao nhiêu vốn tự có được giải phóng?</p>
<details><summary>Xem lời giải</summary><p>Vốn đang bị giữ = 8% × 200 = <b>16 triệu USD</b>. Sau khi bán, 16 triệu này có thể làm nền cho các khoản vay mới. Đồng thời Sao Mai nhận khoảng 200 triệu tiền mặt từ SPE để giải ngân tiếp.</p>
<p>Lưu ý: nếu Sao Mai giữ lại một phần rủi ro (ví dụ mua tầng thấp nhất), quy định thường yêu cầu giữ vốn cho phần đó.</p></details></div>
<h4>Với nhà đầu tư</h4>
<ul>
  <li><b>Tiếp cận loại tài sản mới.</b> Một quỹ hưu trí không thể tự cho 8.000 người vay mua xe, nhưng có thể mua ABS ô tô.</li>
  <li><b>Hồ sơ rủi ro - lợi suất "đo ni đóng giày".</b> Nhờ phân tầng, nhà đầu tư thận trọng mua tầng senior, nhà đầu tư chấp nhận rủi ro mua tầng thứ cấp.</li>
  <li><b>Thanh khoản cao hơn</b> so với nắm giữ trực tiếp từng khoản vay: ABS chuẩn hóa, được xếp hạng, có thị trường thứ cấp.</li>
  <li><b>Đa dạng hóa:</b> một tầng ABS phơi nhiễm với hàng nghìn khoản vay nhỏ thay vì một vài người vay.</li>
</ul>
<p class="tip">Câu hỏi hay gặp: "lợi ích chính với nhà đầu tư" là <b>tailored risk-return</b> và <b>tiếp cận tài sản</b>. Chứng khoán hóa <b>không</b> bảo đảm hoàn vốn và <b>không</b> xóa bỏ rủi ro tín dụng hay rủi ro thanh khoản.</p>`,
    },
    {
      title: '4. Lợi ích cho nền kinh tế, thị trường và mặt trái',
      minutes: 7,
      html: `
<h4>Với nền kinh tế và thị trường tài chính</h4>
<ul>
  <li>${t('disinter', 'Giảm vai trò trung gian (disintermediation)')}: nhà đầu tư nắm trực tiếp dòng tiền của khoản vay, ngân hàng không còn phải "ôm" toàn bộ. Chuỗi trung gian ngắn lại, chi phí vốn cho người vay cuối cùng (hộ gia đình, doanh nghiệp) có thể giảm.</li>
  <li><b>Tăng lượng tín dụng sẵn có:</b> vốn ngân hàng được quay vòng nhanh hơn, nhiều khoản vay mới được cấp hơn.</li>
  <li><b>Thị trường thanh khoản và hiệu quả hơn:</b> tài sản trước đây không giao dịch được nay có giá thị trường; rủi ro được phân bổ tới những người sẵn lòng và có khả năng chịu nhất.</li>
  <li><b>Minh bạch:</b> thông tin về danh mục tài sản đảm bảo được công bố trong hồ sơ phát hành (prospectus) và báo cáo định kỳ.</li>
</ul>
<h4>Mặt trái: bài học 2007-2009</h4>
<div class="warn">Khủng hoảng tài chính toàn cầu cho thấy chứng khoán hóa có thể <b>làm tăng rủi ro hệ thống</b>:
<ul>
  <li>Mô hình "cho vay để bán" (originate-to-distribute) làm bên khởi tạo ít động lực thẩm định kỹ, vì rủi ro được chuyển đi (vấn đề ${t('moralhazard', 'rủi ro đạo đức (moral hazard)')}).</li>
  <li>Cấu trúc phức tạp, nhà đầu tư dựa quá nhiều vào xếp hạng tín nhiệm.</li>
  <li>Rủi ro tín dụng tích tụ trong ABS và lan khắp hệ thống; khi thị trường đóng băng, ABS mất thanh khoản.</li>
</ul></div>
<p>Phản ứng chính sách sau khủng hoảng: yêu cầu bên khởi tạo <b>giữ lại một phần rủi ro</b> (risk retention, "skin in the game"), tăng yêu cầu công bố thông tin và giám sát tổ chức xếp hạng.</p>
<p class="tip">Rủi ro riêng của nhà đầu tư ABS cần nhớ: dòng tiền <b>không chắc chắn về thời điểm và quy mô</b> (vỡ nợ, trả nợ trước hạn), rủi ro tín dụng của danh mục, và rủi ro thanh khoản khi thị trường căng thẳng.</p>`,
    },
    {
      title: '5. Các bên tham gia và SPE',
      minutes: 8,
      html: `
<table class="plain"><thead><tr><th>Bên</th><th>Vai trò</th><th>Trong ví dụ</th></tr></thead><tbody>
<tr><td>Originator / seller (depositor)</td><td>Khởi tạo khoản vay, gom danh mục, bán cho SPE</td><td>Công ty Tài chính Sao Mai</td></tr>
<tr><td>SPE (issuer, trust)</td><td>Mua danh mục, phát hành ABS, giữ quyền đối với tài sản đảm bảo</td><td>Sao Mai Auto Trust</td></tr>
<tr><td>Servicer</td><td>Thu tiền gốc và lãi, nhắc nợ, xử lý nợ quá hạn, thu hồi xe khi vỡ nợ</td><td>Thường là Sao Mai, nhận phí quản lý</td></tr>
<tr><td>${t('trustee', 'Bên ủy thác (trustee)')}</td><td>Đại diện quyền lợi nhà đầu tư, giữ tài sản và tài khoản thu tiền, giám sát việc phân phối theo hợp đồng</td><td>Một ngân hàng lưu ký độc lập</td></tr>
<tr><td>Underwriter / structurer</td><td>Thiết kế cấu trúc các tầng, làm việc với tổ chức xếp hạng, bán ABS cho nhà đầu tư</td><td>Ngân hàng đầu tư</td></tr>
<tr><td>Tổ chức xếp hạng</td><td>Đánh giá rủi ro tín dụng từng tầng</td><td>Moody's, S&amp;P, Fitch</td></tr>
<tr><td>Nhà đầu tư</td><td>Mua ABS, nhận dòng tiền từ danh mục</td><td>Quỹ hưu trí, công ty bảo hiểm, ngân hàng</td></tr>
</tbody></table>
<h4>Vì sao cần SPE?</h4>
<p>SPE được thiết kế để ${t('bankremote', 'cách ly phá sản (bankruptcy remote)')}: nếu Sao Mai phá sản, chủ nợ của Sao Mai <b>không</b> đòi được các khoản vay đã bán cho SPE, vì chúng không còn là tài sản của Sao Mai. Nhà đầu tư ABS chỉ cần lo một câu hỏi: <b>người vay mua xe có trả nợ không?</b></p>
<div class="key">Điều kiện để cách ly phá sản có hiệu lực: giao dịch phải là <b>bán thật (true sale)</b>, tức quyền sở hữu tài sản chuyển hẳn sang SPE. Nếu tòa án coi đây chỉ là khoản vay có bảo đảm của Sao Mai, tài sản có thể bị kéo trở lại khối phá sản.</div>
<div class="example"><div class="ex-h">Ví dụ 5.1 - Dòng tiền qua các bên trong một năm</div>
<p>Danh mục 200 triệu USD, lãi suất bình quân 7%. Servicer thu phí 0,5%/năm, trustee và các chi phí khác 0,1%/năm, đều tính trên dư nợ. Bỏ qua vỡ nợ và trả gốc, tiền lãi còn lại cho nhà đầu tư ABS trong năm đầu là bao nhiêu?</p>
<details><summary>Xem lời giải</summary><p>Lãi thu được = 7% × 200 = 14,0 triệu.<br>Phí servicer = 0,5% × 200 = 1,0 triệu; phí trustee và chi phí khác = 0,1% × 200 = 0,2 triệu.<br>Cho nhà đầu tư = 14,0 - 1,0 - 0,2 = <b>12,8 triệu USD</b>, tương đương 6,4% dư nợ.</p>
<p>Nhà đầu tư nhận lợi suất thấp hơn lãi suất khoản vay vì phải trả công cho các bên vận hành cấu trúc.</p></details></div>`,
    },
    {
      title: '6. Tóm tắt và bẫy thường gặp',
      minutes: 3,
      html: `
<table class="plain"><thead><tr><th>Chủ đề</th><th>Điều cần nhớ</th><th>Bẫy</th></tr></thead><tbody>
<tr><td>Bản chất</td><td>Gom khoản vay, bán cho SPE, SPE phát hành ABS trả bằng dòng tiền danh mục</td><td>Nhà đầu tư ABS không phải chủ nợ của bên khởi tạo</td></tr>
<tr><td>Bên khởi tạo</td><td>Giải phóng vốn, cho vay thêm, chi phí vốn thấp hơn, thu phí servicing</td><td>Không phải "tăng vốn yêu cầu" hay "giảm hoạt động"</td></tr>
<tr><td>Nhà đầu tư</td><td>Tiếp cận tài sản, rủi ro - lợi suất theo tầng, thanh khoản hơn khoản vay</td><td>Không bảo đảm hoàn vốn, không xóa rủi ro tín dụng</td></tr>
<tr><td>Nền kinh tế</td><td>Giảm trung gian, tăng tín dụng, thị trường hiệu quả hơn</td><td>Khủng hoảng 2007-2009: có thể tăng rủi ro hệ thống</td></tr>
<tr><td>SPE</td><td>Cách ly phá sản, cần true sale</td><td>SPE không xếp hạng, không thu thuế</td></tr>
<tr><td>Servicer và trustee</td><td>Servicer thu nợ; trustee bảo vệ nhà đầu tư, giữ tài sản</td><td>Đừng đảo vai hai bên</td></tr>
</tbody></table>
<p>Tiếp theo: tab <b>Luyện tập</b> - 10 câu (rút ngẫu nhiên từ ngân hàng 30 câu, mỗi lần làm một bộ khác). Module sau (FI-18) học các loại ABS và cơ chế tăng cường tín dụng.</p>`,
    },
  ];

  const glossary = {
    securitization: ['Securitization', 'Chứng khoán hóa', 'Gom các tài sản tạo dòng tiền (khoản vay, khoản phải thu), bán cho pháp nhân riêng để phát hành chứng khoán trả bằng dòng tiền đó.'],
    abs: ['Asset-backed securities (ABS)', 'Chứng khoán đảm bảo bằng tài sản', 'Chứng khoán mà dòng tiền trả nhà đầu tư đến từ một danh mục tài sản đảm bảo.'],
    collateral: ['Collateral (securitized pool)', 'Tài sản đảm bảo', 'Danh mục khoản vay hoặc khoản phải thu được bán cho SPE và đứng sau ABS.'],
    originator: ['Originator', 'Bên khởi tạo', 'Đơn vị cho vay ban đầu, tạo ra các khoản vay sẽ được chứng khoán hóa.'],
    seller: ['Seller / depositor', 'Bên bán tài sản', 'Bên bán danh mục tài sản cho SPE; thường chính là bên khởi tạo.'],
    truesale: ['True sale', 'Bán thật', 'Chuyển hẳn quyền sở hữu tài sản sang SPE, để tài sản không bị coi là của bên bán khi bên bán phá sản.'],
    spe: ['Special purpose entity (SPE)', 'Pháp nhân mục đích đặc biệt', 'Pháp nhân lập riêng để mua danh mục và phát hành ABS; còn gọi là SPV, trust, issuer.'],
    servicer: ['Servicer', 'Bên quản lý thu nợ', 'Thu gốc và lãi, nhắc nợ, xử lý nợ quá hạn và thu hồi tài sản; nhận phí servicing.'],
    waterfall: ['Waterfall', 'Thác nước dòng tiền', 'Thứ tự ưu tiên phân phối dòng tiền và phân bổ tổn thất giữa các tầng ABS.'],
    tranche: ['Tranche', 'Tầng chứng khoán', 'Một lớp ABS có quyền ưu tiên, rủi ro và lợi suất riêng trong cùng một cấu trúc.'],
    disinter: ['Disintermediation', 'Giảm vai trò trung gian', 'Nhà đầu tư nắm trực tiếp dòng tiền tài sản thay vì qua ngân hàng; có thể giảm chi phí vốn.'],
    moralhazard: ['Moral hazard', 'Rủi ro đạo đức', 'Bên chuyển được rủi ro đi thì có ít động lực thận trọng hơn, ví dụ thẩm định khoản vay lỏng lẻo.'],
    trustee: ['Trustee', 'Bên ủy thác', 'Đại diện quyền lợi nhà đầu tư, giữ tài sản và tài khoản, giám sát việc phân phối dòng tiền.'],
    bankremote: ['Bankruptcy remote', 'Cách ly phá sản', 'Tài sản của SPE không bị ảnh hưởng khi bên khởi tạo phá sản.'],
  };

  const practice = [
    { q: 'Khi một ngân hàng bán danh mục khoản vay cho SPE, lợi ích trực tiếp nhất đối với ngân hàng là:', choices: ['Giải phóng vốn tự có và có tiền để cấp thêm khoản vay mới.', 'Tăng lượng vốn tự có phải giữ theo quy định.', 'Loại bỏ vĩnh viễn mọi rủi ro vỡ nợ trong nền kinh tế.'], answer: 0, explain: 'Tài sản rời bảng cân đối nên vốn được giải phóng, tiền bán danh mục dùng cho vay tiếp. Phương án "tăng lượng vốn tự có phải giữ" ngược lại. Phương án "loại bỏ vĩnh viễn mọi rủi ro vỡ nợ" sai: rủi ro tín dụng được chuyển cho nhà đầu tư ABS chứ không biến mất.' },
    { q: 'Lợi ích quan trọng nhất của chứng khoán hóa đối với nhà đầu tư là:', choices: ['Được bảo đảm hoàn trả gốc.', 'Có thể chọn tầng có hồ sơ rủi ro - lợi suất phù hợp với mình.', 'Không còn rủi ro thanh khoản.'], answer: 1, explain: 'Phân tầng tạo ra các chứng khoán với mức ưu tiên và lợi suất khác nhau. Phương án "bảo đảm hoàn trả gốc" sai: ABS không có bảo đảm hoàn vốn. Phương án "không còn rủi ro thanh khoản" sai: ABS thanh khoản hơn khoản vay gốc nhưng vẫn có rủi ro thanh khoản, nhất là khi thị trường căng thẳng như 2008.' },
    { q: 'Bên khởi tạo một giao dịch ABS phá sản sau khi đã bán danh mục cho SPE theo hình thức bán thật. Tác động lên nhà đầu tư ABS nhiều khả năng là:', choices: ['Nhà đầu tư ABS trở thành chủ nợ không có bảo đảm của bên khởi tạo.', 'Danh mục bị đưa vào khối tài sản phá sản để chia cho mọi chủ nợ.', 'Nhà đầu tư vẫn nhận dòng tiền từ danh mục; chủ nợ của bên khởi tạo không đòi được tài sản của SPE.'], answer: 2, explain: 'SPE được cấu trúc để cách ly phá sản; với true sale, tài sản thuộc SPE. Hai phương án "chủ nợ không có bảo đảm" và "đưa vào khối tài sản phá sản" chỉ có thể xảy ra nếu giao dịch bị coi là khoản vay có bảo đảm, không phải bán thật. (Nếu bên khởi tạo cũng là servicer thì cần thay servicer, nhưng quyền đối với tài sản không đổi.)' },
    { q: 'Trong giao dịch chứng khoán hóa, bên chịu trách nhiệm thu tiền trả góp hằng tháng và xử lý các khoản vay quá hạn là:', choices: ['Trustee', 'Underwriter', 'Servicer'], answer: 2, explain: 'Servicer thu nợ, nhắc nợ, thu hồi tài sản. Trustee đại diện và bảo vệ quyền lợi nhà đầu tư, giữ tài sản. Underwriter thiết kế và bán ABS.' },
    { q: 'Vai trò chính của SPE trong chứng khoán hóa là:', choices: ['Mua danh mục tài sản và phát hành ABS được trả bằng dòng tiền của danh mục.', 'Xếp hạng tín nhiệm cho các tầng ABS.', 'Cho vay trực tiếp tới người vay cuối cùng.'], answer: 0, explain: 'SPE là người phát hành ABS và giữ quyền đối với tài sản đảm bảo. Xếp hạng tín nhiệm là việc của tổ chức xếp hạng. Cho vay trực tiếp tới người vay cuối cùng là việc của bên khởi tạo.' },
    { q: 'Chứng khoán hóa có thể làm giảm chi phí vay của hộ gia đình và doanh nghiệp chủ yếu nhờ:', choices: ['Chính phủ bảo lãnh toàn bộ ABS.', 'Giảm vai trò trung gian: nhà đầu tư nắm trực tiếp dòng tiền khoản vay và vốn ngân hàng quay vòng nhanh hơn.', 'Loại bỏ phí servicing.'], answer: 1, explain: 'Disintermediation và vốn quay vòng làm tăng tín dụng sẵn có, hạ chi phí vốn. Phương án "chính phủ bảo lãnh toàn bộ ABS" sai: phần lớn ABS không có bảo lãnh của chính phủ. Phương án "loại bỏ phí servicing" sai: servicer vẫn thu phí.' },
    { q: 'Bài học từ khủng hoảng 2007-2009 về chứng khoán hóa là nó có thể:', choices: ['Loại bỏ hoàn toàn rủi ro tín dụng hệ thống.', 'Khiến ngân hàng không còn cần cho vay.', 'Làm tăng rủi ro hệ thống khi rủi ro tín dụng tích tụ trong ABS và chuẩn cho vay bị nới lỏng.'], answer: 2, explain: 'Mô hình cho vay để bán làm giảm động lực thẩm định, rủi ro tích tụ và lan rộng. Phương án "loại bỏ hoàn toàn rủi ro tín dụng hệ thống" ngược lại. Phương án "ngân hàng không còn cần cho vay" sai: chứng khoán hóa cần có khoản vay được khởi tạo.' },
    { q: 'Danh mục 200 triệu USD, lãi suất 7%/năm. Phí servicer 0,5% và phí trustee 0,1% tính trên dư nợ. Bỏ qua vỡ nợ, tiền lãi còn lại cho nhà đầu tư ABS trong năm là:', choices: ['12,8 triệu USD', '13,0 triệu USD', '14,0 triệu USD'], answer: 0, explain: '14,0 - 1,0 - 0,2 = 12,8 triệu. Lựa chọn 13,0 triệu USD chỉ trừ phí servicer, quên phí trustee. Lựa chọn 14,0 triệu USD là toàn bộ lãi thu được, chưa trừ phí.' },
    { q: 'Một ngân hàng có vốn tự có 50 triệu USD, quy định yêu cầu vốn tự có bằng 10% dư nợ, và đã cho vay tối đa 500 triệu USD. Ngân hàng bán 200 triệu USD khoản vay cho SPE và không giữ lại phần rủi ro nào. Ngân hàng có thể cấp thêm tối đa bao nhiêu khoản vay mới?', choices: ['20 triệu USD', '200 triệu USD', '180 triệu USD'], answer: 1, explain: 'Bán 200 triệu khoản vay giải phóng 10% x 200 = 20 triệu vốn tự có; 20 triệu vốn này đủ làm nền cho 20 / 10% = 200 triệu khoản vay mới (ngân hàng cũng nhận khoảng 200 triệu tiền mặt từ SPE để giải ngân). Lựa chọn 20 triệu USD là lượng vốn được giải phóng, không phải năng lực cho vay mới. Lựa chọn 180 triệu USD trừ nhầm phần vốn khỏi dư nợ đã bán.' },
    { q: 'Công ty tài chính xếp hạng BBB phải trả lợi suất 6,5% nếu tự phát hành trái phiếu. Thay vào đó, công ty chứng khoán hóa danh mục cho vay: 85% phát hành thành tầng senior AAA lợi suất 4,2%, 15% thành tầng thứ cấp lợi suất 8,0%. Chi phí vốn bình quân của cấu trúc ABS gần nhất với:', choices: ['4,77%', '6,10%', '4,20%'], answer: 0, explain: 'Chi phí bình quân = 85% x 4,2% + 15% x 8,0% = 3,57% + 1,20% = 4,77%, thấp hơn 6,5% vì tầng senior được xếp hạng dựa trên chất lượng danh mục và tăng cường tín dụng. Lựa chọn 6,10% lấy bình quân giản đơn của hai mức lợi suất, bỏ qua tỷ trọng. Lựa chọn 4,20% chỉ tính tầng senior.' },
    { q: 'Vì sao một công ty tài chính xếp hạng BBB vẫn có thể phát hành tầng ABS được xếp hạng AAA?', choices: ['Vì tổ chức xếp hạng luôn nâng bậc ABS so với bên khởi tạo theo quy định', 'Vì xếp hạng tầng ABS dựa chủ yếu vào chất lượng tài sản đảm bảo và cấu trúc tăng cường tín dụng, không phải sức khỏe tài chính của bên khởi tạo', 'Vì chính phủ bảo lãnh tầng senior của mọi giao dịch ABS'], answer: 1, explain: 'Tài sản đã được bán thật cho SPE cách ly phá sản, nên rủi ro của tầng ABS phụ thuộc vào danh mục và cấu trúc (phân tầng, tăng cường tín dụng). Không có quy định "luôn nâng bậc". Phần lớn ABS không có bảo lãnh của chính phủ.' },
    { q: 'Một quỹ hưu trí muốn đầu tư vào khoản vay mua ô tô của hộ gia đình nhưng không có năng lực thẩm định và cho vay. Lợi ích nào của chứng khoán hóa phù hợp nhất với nhu cầu này?', choices: ['Tiếp cận loại tài sản mà quỹ không thể tự khởi tạo', 'Được bảo đảm hoàn trả gốc', 'Loại bỏ rủi ro trả nợ trước hạn'], answer: 0, explain: 'Chứng khoán hóa cho phép nhà đầu tư nắm dòng tiền của khoản vay ô tô qua ABS mà không cần tự cho vay. ABS không bảo đảm hoàn vốn. Rủi ro trả nợ trước hạn vẫn còn: người vay có thể trả sớm, làm dòng tiền thay đổi.' },
    { q: 'So với việc nắm trực tiếp 20 khoản vay doanh nghiệp nhỏ, nắm một tầng ABS được đảm bảo bằng 10.000 khoản vay tiêu dùng nhỏ chủ yếu mang lại lợi ích gì cho nhà đầu tư?', choices: ['Loại bỏ hoàn toàn rủi ro tín dụng', 'Lợi suất luôn cao hơn', 'Đa dạng hóa: rủi ro dàn trải trên rất nhiều người vay nhỏ'], answer: 2, explain: 'Một tầng ABS phơi nhiễm với hàng nghìn khoản vay, nên một vài khoản vỡ nợ ít ảnh hưởng. Đa dạng hóa giảm rủi ro riêng lẻ nhưng không loại bỏ rủi ro tín dụng (vỡ nợ đồng loạt khi suy thoái vẫn xảy ra). Không có gì bảo đảm lợi suất luôn cao hơn.' },
    { q: 'Phát biểu nào về thanh khoản của ABS so với khoản vay gốc là đúng nhất?', choices: ['ABS thường thanh khoản hơn khoản vay riêng lẻ nhờ được chuẩn hóa, xếp hạng và có thị trường thứ cấp, nhưng vẫn có thể mất thanh khoản khi thị trường căng thẳng', 'ABS luôn có thanh khoản ngang trái phiếu chính phủ', 'ABS kém thanh khoản hơn khoản vay riêng lẻ vì cấu trúc phức tạp'], answer: 0, explain: 'Chuẩn hóa, xếp hạng và thị trường thứ cấp làm ABS dễ giao dịch hơn từng khoản vay riêng lẻ, nhưng như năm 2008 cho thấy, thị trường ABS có thể đóng băng. Phương án "ngang trái phiếu chính phủ" quá lạc quan. Phương án "kém thanh khoản hơn khoản vay" ngược lại.' },
    { q: 'Lợi ích nào sau đây là lợi ích của chứng khoán hóa đối với nền kinh tế và thị trường tài chính?', choices: ['Rủi ro tín dụng biến mất khỏi hệ thống tài chính', 'Tăng lượng tín dụng sẵn có và phân bổ rủi ro tới những nhà đầu tư sẵn lòng và có khả năng chịu', 'Ngân hàng không cần thẩm định người vay nữa'], answer: 1, explain: 'Vốn ngân hàng quay vòng nhanh hơn nên nhiều khoản vay mới được cấp; rủi ro được chuyển tới nhà đầu tư phù hợp; tài sản trước đây không giao dịch được nay có giá thị trường. Rủi ro tín dụng chỉ được chuyển đi, không biến mất. Thẩm định vẫn cần thiết; nới lỏng thẩm định chính là mặt trái của mô hình cho vay để bán.' },
    { q: 'Trong mô hình "cho vay để bán" (originate-to-distribute), bên khởi tạo có ít động lực thẩm định kỹ người vay vì rủi ro sẽ được chuyển cho nhà đầu tư ABS. Vấn đề này gọi là:', choices: ['rủi ro trả nợ trước hạn', 'rủi ro thanh khoản', 'rủi ro đạo đức (moral hazard)'], answer: 2, explain: 'Khi người ra quyết định (bên khởi tạo) không chịu hậu quả của quyết định đó, họ có xu hướng chấp nhận rủi ro nhiều hơn: đó là moral hazard, một nguyên nhân của khủng hoảng 2007-2009. Rủi ro trả nợ trước hạn liên quan đến người vay trả sớm. Rủi ro thanh khoản liên quan đến khả năng bán chứng khoán.' },
    { q: 'Sau khủng hoảng 2007-2009, nhiều quy định yêu cầu bên khởi tạo giữ lại một phần rủi ro của giao dịch chứng khoán hóa (risk retention). Mục đích chính của yêu cầu này là:', choices: ['buộc bên khởi tạo có "skin in the game" để giữ chuẩn thẩm định', 'tăng lợi suất cho nhà đầu tư tầng senior', 'loại bỏ nhu cầu xếp hạng tín nhiệm cho ABS'], answer: 0, explain: 'Khi phải chịu một phần tổn thất, bên khởi tạo có động lực thẩm định cẩn thận, giảm moral hazard. Risk retention không nhằm tăng lợi suất tầng senior. Xếp hạng tín nhiệm vẫn được dùng; sau khủng hoảng, giám sát tổ chức xếp hạng còn được tăng cường.' },
    { q: 'Rủi ro nào sau đây nhà đầu tư ABS vẫn phải chịu?', choices: ['Rủi ro bên khởi tạo phá sản làm mất quyền đối với tài sản, khi giao dịch là bán thật', 'Rủi ro dòng tiền không chắc chắn về thời điểm và quy mô do vỡ nợ và trả nợ trước hạn', 'Không có rủi ro đáng kể nào vì ABS đã được xếp hạng'], answer: 1, explain: 'Dòng tiền ABS phụ thuộc vào hành vi của người vay: vỡ nợ làm giảm dòng tiền, trả trước làm thay đổi thời điểm. Với true sale và SPE cách ly phá sản, bên khởi tạo phá sản không làm mất quyền đối với tài sản. Xếp hạng không xóa rủi ro tín dụng hay rủi ro thanh khoản.' },
    { q: 'Trong giao dịch chứng khoán hóa, bên đại diện quyền lợi nhà đầu tư, giữ tài sản và tài khoản thu tiền, và giám sát việc phân phối dòng tiền theo hợp đồng là:', choices: ['Trustee', 'Servicer', 'Originator'], answer: 0, explain: 'Trustee (thường là một ngân hàng lưu ký độc lập) bảo vệ quyền lợi nhà đầu tư và giám sát phân phối. Servicer thu tiền và xử lý nợ quá hạn. Originator khởi tạo khoản vay và bán cho SPE.' },
    { q: 'Ngân hàng đầu tư thiết kế cấu trúc các tầng, làm việc với tổ chức xếp hạng và bán ABS cho nhà đầu tư đóng vai trò:', choices: ['trustee', 'servicer', 'underwriter / structurer'], answer: 2, explain: 'Underwriter / structurer thiết kế cấu trúc, làm việc với tổ chức xếp hạng và phân phối ABS. Trustee bảo vệ quyền lợi nhà đầu tư. Servicer thu tiền từ người vay.' },
    { q: 'Nếu tòa án coi việc bên khởi tạo chuyển danh mục cho SPE là khoản vay có bảo đảm thay vì bán thật (true sale), hậu quả nhiều khả năng là:', choices: ['nhà đầu tư ABS được ưu tiên hơn mọi chủ nợ khác của bên khởi tạo', 'danh mục có thể bị kéo trở lại khối tài sản phá sản của bên khởi tạo', 'không có hậu quả gì vì SPE vẫn là pháp nhân riêng'], answer: 1, explain: 'Cách ly phá sản chỉ có hiệu lực khi quyền sở hữu thực sự chuyển sang SPE. Nếu bị coi là khoản vay có bảo đảm, tài sản vẫn thuộc bên khởi tạo và có thể bị đưa vào khối phá sản. Phương án "ưu tiên hơn mọi chủ nợ" không có cơ sở. Phương án "không có hậu quả" bỏ qua điều kiện true sale.' },
    { q: 'SPE được mô tả là "bankruptcy remote" (cách ly phá sản) có nghĩa là:', choices: ['SPE không bao giờ có thể vỡ nợ với nhà đầu tư ABS', 'chủ nợ của bên khởi tạo không thể đòi các tài sản đã bán cho SPE nếu bên khởi tạo phá sản', 'SPE được chính phủ bảo lãnh khi gặp khó khăn'], answer: 1, explain: 'Bankruptcy remote nghĩa là tài sản của SPE tách biệt khỏi rủi ro phá sản của bên khởi tạo. SPE vẫn có thể không trả đủ cho nhà đầu tư nếu danh mục khoản vay vỡ nợ nhiều. SPE không có bảo lãnh của chính phủ.' },
    { q: 'Một công ty tài chính bị hạ xếp hạng từ BBB xuống BB. Tầng senior AAA của giao dịch ABS do công ty này khởi tạo trước đó (bán thật cho SPE) nhiều khả năng:', choices: ['bị hạ xuống BB tương ứng', 'tự động trở thành nợ không có bảo đảm của công ty', 'ít bị ảnh hưởng trực tiếp, vì chất lượng phụ thuộc chủ yếu vào danh mục tài sản đảm bảo (dù cần theo dõi vai trò servicer của công ty)'], answer: 2, explain: 'Nhà đầu tư ABS không phải chủ nợ của bên khởi tạo; họ có quyền đối với dòng tiền danh mục. Rủi ro còn lại chủ yếu là rủi ro vận hành nếu công ty đồng thời là servicer. Phương án "hạ xuống BB tương ứng" nhầm ABS là nợ của công ty. Phương án "trở thành nợ không có bảo đảm" chỉ có thể xảy ra nếu giao dịch không phải bán thật.' },
    { q: 'Bên khởi tạo, khi bán danh mục khoản vay cho SPE, còn được gọi là:', choices: ['seller hoặc depositor', 'trustee', 'issuer'], answer: 0, explain: 'Khi chuyển danh mục cho SPE, bên khởi tạo đóng vai trò seller (depositor). Trustee là bên đại diện nhà đầu tư. Issuer là chính SPE, pháp nhân phát hành ABS.' },
    { q: 'Trình tự nào sau đây mô tả đúng nhất quy trình chứng khoán hóa?', choices: ['SPE phát hành ABS, rồi mới khởi tạo khoản vay, rồi bán khoản vay cho bên khởi tạo', 'Khởi tạo khoản vay, gom và bán danh mục cho SPE, SPE phát hành ABS, servicer thu nợ và dòng tiền chảy về nhà đầu tư theo waterfall', 'Nhà đầu tư cho bên khởi tạo vay, bên khởi tạo dùng tiền đó để mua lại cổ phiếu'], answer: 1, explain: 'Bên khởi tạo cho vay, gom danh mục và bán cho SPE; SPE phát hành ABS và dùng tiền thu được trả cho bên khởi tạo; servicer thu nợ và tiền chảy về nhà đầu tư theo thứ tự đã định. Phương án "SPE phát hành ABS trước rồi mới khởi tạo khoản vay" đảo trình tự. Phương án "nhà đầu tư cho bên khởi tạo vay" mô tả trái phiếu doanh nghiệp, không phải chứng khoán hóa.' },
    { q: 'Trong chứng khoán hóa, "waterfall" là:', choices: ['quy tắc thứ tự phân phối dòng tiền thu được từ danh mục cho các bên và các tầng ABS', 'tốc độ người vay trả nợ trước hạn', 'quá trình bên khởi tạo bán danh mục cho SPE'], answer: 0, explain: 'Waterfall quy định tiền thu được (sau phí) được trả cho ai trước, ai sau: phí, rồi tầng senior, rồi tầng thứ cấp. Tốc độ trả nợ trước hạn là khái niệm về prepayment. Việc bán danh mục cho SPE là bước true sale.' },
    { q: 'Danh mục 200 triệu USD được chia thành tầng senior 160 triệu USD và tầng thứ cấp 40 triệu USD; tầng thứ cấp chịu lỗ trước. Nếu tổng tổn thất của danh mục là 30 triệu USD, tỷ lệ tổn thất của tầng thứ cấp gần nhất với:', choices: ['15,0%', '18,8%', '75,0%'], answer: 2, explain: 'Tầng thứ cấp hấp thụ toàn bộ 30 triệu đầu tiên: 30 / 40 = 75,0%; tầng senior không bị lỗ. Lựa chọn 15,0% chia tổn thất theo tỷ lệ cho cả danh mục (30 / 200). Lựa chọn 18,8% chia cho quy mô tầng senior (30 / 160).' },
    { q: 'Điểm khác biệt cơ bản giữa covered bond và chứng khoán hóa (ABS) là:', choices: ['với covered bond, tài sản đảm bảo vẫn nằm trên bảng cân đối của người phát hành; với chứng khoán hóa, tài sản được bán ra khỏi bảng cân đối bên khởi tạo cho SPE', 'covered bond không có tài sản đảm bảo', 'ABS được phát hành bởi chính bên khởi tạo, còn covered bond được phát hành bởi SPE'], answer: 0, explain: 'Covered bond là nợ của ngân hàng phát hành, có thêm quyền với một nhóm tài sản vẫn nằm trên bảng cân đối của ngân hàng. Chứng khoán hóa chuyển tài sản cho SPE. Phương án "không có tài sản đảm bảo" sai: covered bond có cover pool. Phương án còn lại đảo vai người phát hành.' },
    { q: 'Bên khởi tạo đồng thời là servicer của giao dịch ABS bị phá sản. Rủi ro chủ yếu đối với nhà đầu tư ABS và cách xử lý thông thường là:', choices: ['mất quyền đối với danh mục; nhà đầu tư phải nộp đơn đòi nợ trong vụ phá sản', 'không có rủi ro nào vì SPE cách ly phá sản', 'gián đoạn việc thu nợ; trustee chỉ định servicer thay thế, còn quyền đối với tài sản không đổi'], answer: 2, explain: 'Với true sale, tài sản vẫn thuộc SPE, nhưng việc thu tiền từ người vay có thể bị gián đoạn; trustee bổ nhiệm servicer thay thế (backup servicer). Phương án "mất quyền đối với danh mục" chỉ đúng nếu không có true sale. Phương án "không có rủi ro nào" bỏ qua rủi ro vận hành của servicer.' },
    { q: 'Trước khi chứng khoán hóa, khoản vay tiêu dùng nằm trên bảng cân đối ngân hàng và hầu như không có giá thị trường. Sau khi chứng khoán hóa, hồ sơ phát hành và báo cáo định kỳ công bố chi tiết về danh mục, và ABS được giao dịch trên thị trường thứ cấp. Lợi ích nào cho thị trường tài chính được minh họa rõ nhất?', choices: ['Bảo đảm nhà đầu tư không bị lỗ', 'Minh bạch hơn và hình thành giá thị trường cho tài sản trước đây không giao dịch được', 'Ngân hàng được miễn yêu cầu vốn tự có cho mọi khoản vay'], answer: 1, explain: 'Công bố thông tin về danh mục và giao dịch thứ cấp làm thị trường minh bạch và hiệu quả hơn: rủi ro được định giá. Chứng khoán hóa không bảo đảm nhà đầu tư không bị lỗ. Ngân hàng chỉ được giải phóng vốn cho phần khoản vay đã bán (và không giữ lại rủi ro), không phải mọi khoản vay.' },
  ];

  window.LESSONS['FI-17'] = {
    moduleId: 'FI-17',
    calculator: 'Không cần máy tính',
    warmup: [
      'Ôn FI-16: khoản nợ có bảo đảm (secured) và không bảo đảm (unsecured) khác nhau thế nào khi người vay phá sản?',
      'Một ngân hàng có nhiều khoản vay tốt nhưng hết vốn để cho vay thêm. Bạn sẽ gợi ý ngân hàng làm gì?',
      'Theo bạn, vì sao một quỹ hưu trí khó tự cho hàng nghìn người vay mua xe?',
    ],
    sections,
    glossary,
    practice,
    widgets: {},
    slides: [],
    wrapup: [
      'Vẽ lại sơ đồ chứng khoán hóa với 5 bên và chiều đi của tiền, tài sản.',
      'Nêu 2 lợi ích cho bên khởi tạo, 2 cho nhà đầu tư, 2 cho nền kinh tế.',
      'Giải thích bằng lời của bạn vì sao SPE phải cách ly phá sản và cần true sale.',
    ],
  };
}());
