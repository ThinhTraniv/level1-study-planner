// Bài giảng CF-01 - Organizational Forms, Corporate Issuer Features, and Ownership (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t } = window.CFAH;

  const sections = [
    {
      title: '1. Bức tranh lớn',
      minutes: 5,
      html: `
<p>Topic Corporate Issuers (Corporate Finance) nghiên cứu <b>doanh nghiệp phát hành chứng khoán</b>: ai sở hữu, ai điều hành, ai cho vay, quản trị ra sao, quản lý tiền và đầu tư vốn thế nào. Module đầu tiên trả lời câu hỏi nền tảng nhất:</p>
<div class="key">Một doanh nghiệp có thể được tổ chức dưới nhiều hình thức pháp lý. Hình thức đó quyết định <b>5 điều</b>: doanh nghiệp có tư cách pháp lý riêng không, chủ sở hữu có trực tiếp điều hành không, chủ sở hữu chịu trách nhiệm đến đâu, huy động vốn dễ hay khó, và lợi nhuận bị đánh thuế thế nào.</div>
<p>Ba LOS của module đi theo trình tự từ rộng đến hẹp:</p>
<ol>
  <li><b>So sánh các hình thức tổ chức</b>: hộ kinh doanh cá thể, hợp danh, hợp danh hữu hạn, công ty. Ứng với LOS 1 (phần 2).</li>
  <li><b>Đặc điểm của công ty phát hành (corporate issuer)</b>: hình thức phổ biến nhất trên thị trường vốn. Ứng với LOS 2 (phần 3).</li>
  <li><b>So sánh công ty đại chúng và công ty tư nhân</b>, cùng các con đường chuyển từ dạng này sang dạng kia. Ứng với LOS 3 (phần 4, 5).</li>
</ol>
<p class="tip"><b>Cách học module này:</b> gần như không có tính toán. Đề thi hỏi dạng "đặc điểm nào đúng với hình thức X" hoặc "phương thức niêm yết nào không huy động vốn mới". Hãy học bằng <b>bảng so sánh</b>, mỗi dòng là một tiêu chí.</p>`,
    },
    {
      title: '2. Bốn hình thức tổ chức doanh nghiệp',
      minutes: 18,
      html: `
<p>Hãy hình dung một người mở quán cà phê rồi lớn dần thành chuỗi. Theo thời gian, quán đó thường đi qua các hình thức sau:</p>
<h4>a) ${t('sole', 'Doanh nghiệp một chủ (sole proprietorship)')}</h4>
<ul>
<li>Một người sở hữu và tự điều hành. Doanh nghiệp <b>không tách khỏi</b> chủ: tài sản, nợ và lợi nhuận đều là của chủ.</li>
<li>${t('unlimited', 'Trách nhiệm vô hạn (unlimited liability)')}: nếu quán nợ không trả được, chủ nợ có thể đòi cả nhà riêng, xe riêng của chủ.</li>
<li>Vốn chỉ đến từ tiền của chủ và vay cá nhân, nên quy mô bị giới hạn.</li>
<li>Lợi nhuận cộng vào thu nhập cá nhân của chủ, chịu thuế <b>một lần</b> theo thuế suất cá nhân.</li>
</ul>
<h4>b) ${t('gp', 'Hợp danh (general partnership)')}</h4>
<ul>
<li>Hai hoặc nhiều ${t('gpartner', 'thành viên hợp danh (general partner)')} cùng góp vốn, cùng điều hành và chia lợi nhuận theo ${t('pagree', 'thỏa thuận hợp danh (partnership agreement)')}.</li>
<li>Mỗi thành viên chịu trách nhiệm vô hạn, kể cả với khoản nợ do thành viên khác gây ra.</li>
<li>Huy động được nhiều vốn và kỹ năng hơn một chủ, nhưng vẫn giới hạn ở số người tin tưởng nhau. Thường gặp ở công ty luật, kiểm toán, tư vấn.</li>
<li>Thuế: lợi nhuận "chuyển thẳng" về các thành viên (${t('passthrough', 'pass-through')}), chịu thuế một lần ở cấp cá nhân.</li>
</ul>
<h4>c) ${t('lp', 'Hợp danh hữu hạn (limited partnership)')}</h4>
<ul>
<li>Có ít nhất một <b>general partner (GP)</b> điều hành và chịu trách nhiệm vô hạn, cùng các ${t('lpartner', 'thành viên góp vốn (limited partner, LP)')} chỉ góp tiền, <b>không tham gia điều hành</b>, và chỉ mất tối đa số vốn đã góp.</li>
<li>Đây là cấu trúc chuẩn của <b>quỹ đầu tư tư nhân (private equity), quỹ đầu tư mạo hiểm (venture capital), quỹ phòng hộ</b>: công ty quản lý quỹ là GP, nhà đầu tư tổ chức là LP.</li>
<li>LP thường bị khóa vốn nhiều năm, khó rút ra. Thuế vẫn là pass-through.</li>
</ul>
<h4>d) ${t('corp', 'Công ty (corporation / limited company)')}</h4>
<ul>
<li>Là một ${t('legalentity', 'pháp nhân riêng (separate legal entity)')}: tự sở hữu tài sản, tự ký hợp đồng, tự kiện và bị kiện, tồn tại độc lập với việc cổ đông thay đổi.</li>
<li>Chủ sở hữu (cổ đông) và người điều hành (ban giám đốc) <b>tách biệt</b>.</li>
<li>Cổ đông có ${t('limited', 'trách nhiệm hữu hạn (limited liability)')}: mất tối đa số tiền đã đầu tư.</li>
<li>Huy động vốn dễ nhất: phát hành cổ phiếu cho số đông nhà đầu tư và vay nợ, kể cả phát hành trái phiếu.</li>
<li>Thuế: lợi nhuận bị đánh thuế ở cấp công ty, rồi cổ tức bị đánh thuế thêm ở cấp cổ đông (thường gọi là ${t('double', 'đánh thuế hai lần (double taxation)')}).</li>
</ul>
<table class="plain"><thead><tr><th>Tiêu chí</th><th>Một chủ</th><th>Hợp danh</th><th>Hợp danh hữu hạn</th><th>Công ty</th></tr></thead><tbody>
<tr><td>Tư cách pháp lý riêng</td><td>Không</td><td>Không</td><td>Không (thường)</td><td>Có</td></tr>
<tr><td>Chủ sở hữu điều hành?</td><td>Có</td><td>Có</td><td>Chỉ GP</td><td>Tách biệt</td></tr>
<tr><td>Trách nhiệm của chủ</td><td>Vô hạn</td><td>Vô hạn</td><td>GP vô hạn, LP hữu hạn</td><td>Hữu hạn</td></tr>
<tr><td>Khả năng huy động vốn</td><td>Thấp</td><td>Trung bình</td><td>Khá (từ LP)</td><td>Cao nhất</td></tr>
<tr><td>Thuế</td><td>Một lần (cá nhân)</td><td>Pass-through</td><td>Pass-through</td><td>Cấp công ty + cổ tức</td></tr>
</tbody></table>
<p class="tip"><b>Liên hệ Việt Nam:</b> doanh nghiệp tư nhân gần với sole proprietorship; công ty hợp danh có thành viên hợp danh (vô hạn) và thành viên góp vốn (hữu hạn), giống limited partnership; công ty TNHH và công ty cổ phần là các dạng limited company. Đây chỉ là liên tưởng để dễ nhớ, đề thi dùng khái niệm quốc tế.</p>
<p>Ở nhiều nước còn có các dạng lai như <b>LLP</b> (limited liability partnership) hay <b>LLC</b> (limited liability company): giữ thuế pass-through nhưng cho thành viên trách nhiệm hữu hạn. Bạn chỉ cần biết chúng tồn tại.</p>
<div class="example"><div class="ex-h">Ví dụ 2.1</div>
<p>Một quỹ đầu tư mạo hiểm muốn: (1) công ty quản lý quỹ toàn quyền ra quyết định đầu tư; (2) các nhà đầu tư tổ chức góp vốn nhưng không chịu rủi ro vượt quá số vốn góp; (3) tránh bị đánh thuế hai lần. Hình thức nào phù hợp nhất?</p>
<details><summary>Xem lời giải</summary><p><b>Hợp danh hữu hạn.</b> Công ty quản lý là GP (điều hành, chịu trách nhiệm vô hạn), nhà đầu tư là LP (thụ động, trách nhiệm hữu hạn), lợi nhuận pass-through. Hợp danh thường không đạt điều (2); công ty không đạt điều (3).</p></details></div>
<p class="warn"><b>Bẫy:</b> limited partner có trách nhiệm hữu hạn <b>vì</b> không tham gia điều hành. Trong hợp danh hữu hạn luôn phải có ít nhất một GP chịu trách nhiệm vô hạn.</p>`,
    },
    {
      title: '3. Đặc điểm chính của công ty phát hành (corporate issuer)',
      minutes: 17,
      html: `
<p>Đa số chứng khoán trên thị trường do công ty phát hành. Năm đặc điểm dưới đây là lý do công ty trở thành hình thức thống trị của doanh nghiệp lớn:</p>
<h4>1. Pháp nhân riêng (legal identity)</h4>
<p>Công ty được đối xử như một "người" trước pháp luật: có tài sản, nợ, hợp đồng, có thể kiện và bị kiện, chịu sự quản lý của luật nơi đăng ký. Công ty có thể tồn tại <b>vô thời hạn</b>: cổ đông bán cổ phiếu hay qua đời thì công ty vẫn hoạt động bình thường.</p>
<h4>2. Tách biệt sở hữu và điều hành (owner-operator separation)</h4>
<p>Cổ đông bầu ra ${t('board', 'hội đồng quản trị (board of directors)')}; hội đồng quản trị thuê và giám sát ${t('mgmt', 'ban điều hành (management)')}. Cổ đông thực hiện quyền kiểm soát qua ${t('voting', 'quyền biểu quyết (voting rights)')}, thường theo nguyên tắc một cổ phiếu một phiếu bầu. Sự tách biệt này giúp công ty thuê được người quản lý chuyên nghiệp và cho phép hàng triệu người cùng sở hữu, nhưng tạo ra <b>xung đột lợi ích</b> giữa người chủ và người làm thuê. Xung đột đó là chủ đề của CF-03.</p>
<h4>3. Trách nhiệm hữu hạn (limited liability)</h4>
<p>Cổ đông mất tối đa số tiền đã bỏ vào cổ phiếu. Chủ nợ chỉ có quyền đòi tài sản của công ty, không đòi được tài sản riêng của cổ đông. Nhờ vậy nhà đầu tư dám mua cổ phiếu của công ty mà họ không điều hành.</p>
<h4>4. Huy động vốn bên ngoài (external financing)</h4>
<p>Công ty có thể huy động vốn chủ sở hữu (phát hành cổ phiếu) và vốn vay (vay ngân hàng, phát hành trái phiếu) với quy mô rất lớn. Cổ phiếu chia nhỏ quyền sở hữu thành các đơn vị dễ mua bán, nên vốn đến từ đông đảo nhà đầu tư.</p>
<h4>5. Thuế (taxation)</h4>
<p>Lợi nhuận chịu ${t('cit', 'thuế thu nhập doanh nghiệp')} ở cấp công ty. Khi lợi nhuận sau thuế được trả thành ${t('dividend', 'cổ tức (dividend)')}, cổ đông lại nộp thuế thu nhập cá nhân trên cổ tức.</p>
<div class="example"><div class="ex-h">Ví dụ 3.1 - Đánh thuế hai lần</div>
<p>Công ty có lợi nhuận trước thuế 100. Thuế suất thuế doanh nghiệp 25%, thuế cổ tức 20%, công ty chia toàn bộ lợi nhuận sau thuế. Cổ đông thực nhận bao nhiêu? Thuế suất tổng hợp là bao nhiêu?</p>
<details><summary>Xem lời giải</summary>
<p>Lợi nhuận sau thuế = 100 × (1 - 25%) = 75. Thuế cổ tức = 75 × 20% = 15. Cổ đông nhận <b>60</b>.<br>Thuế suất tổng hợp = 1 - 60/100 = <b>40%</b>, cao hơn nhiều so với 25% hay 20% riêng lẻ.</p>
<p>Với cấu trúc Việt Nam (thuế doanh nghiệp 20%, thuế cổ tức cá nhân 5%): 100 × 0,8 = 80, thuế cổ tức 4, cổ đông nhận 76, thuế suất tổng hợp 24%.</p></details></div>
<p>Nhiều quốc gia giảm gánh nặng này bằng thuế suất cổ tức thấp hơn, hoặc cho cổ đông khấu trừ phần thuế công ty đã nộp. Ngoài ra, một số loại công ty được hưởng cơ chế pass-through. Đề thi chỉ cần bạn hiểu <b>vì sao</b> công ty có thể chịu thuế cao hơn hợp danh.</p>
<h4>Công ty phi lợi nhuận (nonprofit)</h4>
<p>Một số công ty được lập vì mục đích từ thiện, giáo dục, y tế. Chúng thường <b>được miễn thuế</b>, <b>không có cổ đông</b> và không chia lợi nhuận: thặng dư được giữ lại để phục vụ sứ mệnh. Nguồn vốn đến từ tài trợ, quyên góp và vay nợ (ví dụ trái phiếu của bệnh viện, trường đại học).</p>
<p class="warn"><b>Bẫy:</b> "tách biệt sở hữu và điều hành" là <b>ưu điểm</b> (thuê được người giỏi, nhiều người cùng sở hữu) nhưng cũng là <b>nguồn gốc của chi phí đại diện</b>. Đừng chọn đáp án nói nó chỉ có lợi hoặc chỉ có hại.</p>`,
    },
    {
      title: '4. Công ty đại chúng và công ty tư nhân',
      minutes: 18,
      html: `
<p>Trong số các công ty, có hai nhóm sở hữu rất khác nhau:</p>
<ul>
<li>${t('public', 'Công ty đại chúng (publicly owned / public company)')}: cổ phiếu được <b>niêm yết trên sở giao dịch</b>, đăng ký với cơ quan quản lý và ai cũng có thể mua bán.</li>
<li>${t('private', 'Công ty tư nhân (privately owned / private company)')}: cổ phiếu <b>không niêm yết</b>, thuộc về một nhóm nhỏ (nhà sáng lập, gia đình, quỹ đầu tư), chuyển nhượng phải qua thỏa thuận riêng.</li>
</ul>
<h4>Năm điểm khác biệt chính</h4>
<table class="plain"><thead><tr><th>Tiêu chí</th><th>Công ty đại chúng</th><th>Công ty tư nhân</th></tr></thead><tbody>
<tr><td>Niêm yết và thanh khoản</td><td>Giao dịch trên sở; mua bán nhanh, có giá thị trường hằng ngày</td><td>Không có thị trường; bán khó, mất thời gian, giá do thương lượng</td></tr>
<tr><td>Phát hành cổ phiếu</td><td>Tăng vốn qua chào bán ra công chúng, cần phê duyệt của cơ quan quản lý và đại hội cổ đông</td><td>Tăng vốn qua ${t('placement', 'phát hành riêng lẻ (private placement)')} cho nhà đầu tư chuyên nghiệp</td></tr>
<tr><td>Đăng ký và công bố thông tin</td><td>Bắt buộc công bố báo cáo tài chính định kỳ, sự kiện trọng yếu; chi phí tuân thủ cao</td><td>Ít nghĩa vụ công bố; thông tin chỉ chia sẻ với cổ đông, ngân hàng</td></tr>
<tr><td>Cơ cấu sở hữu</td><td>Phân tán, nhiều cổ đông nhỏ</td><td>Tập trung; cổ đông lớn thường tham gia trực tiếp vào quản trị</td></tr>
<tr><td>Tầm nhìn quản lý</td><td>Áp lực kết quả từng quý từ thị trường</td><td>Dễ theo đuổi chiến lược dài hạn</td></tr>
</tbody></table>
<h4>Các khái niệm về số lượng cổ phiếu</h4>
<ul>
<li>${t('authorized', 'Cổ phiếu được phép phát hành (authorized shares)')}: số tối đa theo điều lệ.</li>
<li>${t('issued', 'Cổ phiếu đã phát hành (issued shares)')}: số đã bán ra.</li>
<li>${t('treasury', 'Cổ phiếu quỹ (treasury shares)')}: cổ phiếu công ty đã mua lại, không có quyền biểu quyết, không nhận cổ tức.</li>
<li>${t('outstanding', 'Cổ phiếu đang lưu hành (shares outstanding)')} = đã phát hành - cổ phiếu quỹ.</li>
<li>${t('float', 'Tỷ lệ tự do chuyển nhượng (free float)')}: phần cổ phiếu đang lưu hành thực sự có thể giao dịch, sau khi trừ cổ phiếu của người nội bộ, nhà sáng lập, cổ đông chiến lược, Nhà nước.</li>
</ul>
<div class="example"><div class="ex-h">Ví dụ 4.1</div>
<p>Công ty đã phát hành 1.050 triệu cổ phiếu, trong đó 50 triệu là cổ phiếu quỹ. Gia đình sáng lập nắm 400 triệu, đối tác chiến lược nắm 150 triệu. Tính số cổ phiếu đang lưu hành và free float.</p>
<details><summary>Xem lời giải</summary><p>Đang lưu hành = 1.050 - 50 = <b>1.000 triệu</b>. Free float = (1.000 - 400 - 150) / 1.000 = <b>45%</b>. Free float thấp nghĩa là ít cổ phiếu thực sự giao dịch, thanh khoản kém, và các chỉ số như MSCI thường điều chỉnh tỷ trọng theo free float.</p></details></div>
<p class="tip"><b>Ưu và nhược điểm của việc là công ty đại chúng:</b> được tiếp cận nguồn vốn lớn, cổ phiếu có thanh khoản và giá tham chiếu (dùng làm tiền tệ khi mua bán sáp nhập, trả thưởng cổ phiếu cho nhân viên); đổi lại là chi phí tuân thủ, công bố thông tin cho cả đối thủ, áp lực ngắn hạn và nguy cơ bị thâu tóm.</p>`,
    },
    {
      title: '5. Chuyển đổi giữa tư nhân và đại chúng',
      minutes: 14,
      html: `
<h4>Từ tư nhân lên đại chúng</h4>
<table class="plain"><thead><tr><th>Cách</th><th>Cơ chế</th><th>Huy động vốn mới?</th></tr></thead><tbody>
<tr><td>${t('ipo', 'Phát hành lần đầu ra công chúng (IPO)')}</td><td>Công ty phát hành cổ phiếu mới cho công chúng, thường có ${t('underwriter', 'tổ chức bảo lãnh phát hành (underwriter)')} định giá và phân phối, rồi niêm yết</td><td>Có</td></tr>
<tr><td>${t('direct', 'Niêm yết trực tiếp (direct listing)')}</td><td>Đưa cổ phiếu <b>hiện có</b> lên sàn, cổ đông hiện hữu bán trực tiếp cho thị trường; không cần bảo lãnh</td><td>Không</td></tr>
<tr><td>Sáp nhập vào công ty đại chúng</td><td>Một công ty đã niêm yết mua lại công ty tư nhân</td><td>Không (với công ty bị mua)</td></tr>
<tr><td>${t('spac', 'SPAC (special purpose acquisition company)')}</td><td>Công ty vỏ IPO để huy động tiền, giữ tiền trong tài khoản ký quỹ, rồi sáp nhập với một công ty tư nhân, giúp công ty này lên sàn</td><td>Có (từ đợt IPO của SPAC)</td></tr>
</tbody></table>
<p>IPO tốn kém (phí bảo lãnh, định giá thấp ngày đầu) nhưng huy động được vốn và có người hỗ trợ bán. Direct listing rẻ hơn, phù hợp với công ty đã nổi tiếng và không cần tiền. SPAC nhanh hơn IPO truyền thống nhưng nhà đầu tư SPAC ban đầu không biết sẽ mua công ty nào.</p>
<h4>Từ đại chúng về tư nhân</h4>
<ul>
<li>${t('lbo', 'Mua lại bằng vốn vay (leveraged buyout, LBO)')}: nhóm đầu tư (thường là quỹ private equity) mua toàn bộ cổ phiếu, tài trợ phần lớn bằng nợ, rồi hủy niêm yết.</li>
<li>${t('mbo', 'Ban điều hành mua lại (management buyout, MBO)')}: một dạng LBO mà người mua là chính ban điều hành hiện tại.</li>
</ul>
<h4>Nguồn vốn của công ty tư nhân</h4>
<ul>
<li>${t('vc', 'Quỹ đầu tư mạo hiểm (venture capital)')}: đầu tư vào doanh nghiệp giai đoạn đầu, rủi ro cao, nhận cổ phần.</li>
<li>${t('pe', 'Quỹ đầu tư tư nhân (private equity)')}: thường mua cổ phần chi phối ở công ty đã trưởng thành, kể cả qua LBO.</li>
<li>Nợ tư nhân (private debt): vay trực tiếp từ quỹ, không qua phát hành trái phiếu ra công chúng.</li>
</ul>
<div class="key"><b>Xu hướng:</b> ở các thị trường phát triển, số công ty niêm yết giảm dần trong vài thập kỷ, còn thị trường vốn tư nhân (VC, PE, private debt) tăng mạnh. Công ty ở lại tư nhân lâu hơn vì có thể huy động vốn lớn mà không phải chịu chi phí và nghĩa vụ của công ty đại chúng.</div>
<div class="example"><div class="ex-h">Ví dụ 5.1</div>
<p>Một công ty công nghệ nổi tiếng, lượng tiền mặt dồi dào, muốn cổ đông sáng lập và nhân viên bán được cổ phần trên sàn mà không pha loãng sở hữu. Phương thức nào phù hợp nhất?</p>
<details><summary>Xem lời giải</summary><p><b>Direct listing.</b> Không phát hành cổ phiếu mới nên không pha loãng và không huy động thêm vốn (công ty cũng không cần), chi phí thấp hơn IPO vì không có bảo lãnh.</p></details></div>`,
    },
    {
      title: '6. Tóm tắt và bẫy thường gặp',
      minutes: 8,
      html: `
<table class="plain"><thead><tr><th>Tình huống</th><th>Nhớ</th></tr></thead><tbody>
<tr><td>Trách nhiệm vô hạn</td><td>Chủ một mình, thành viên hợp danh, GP. LP và cổ đông công ty: hữu hạn</td></tr>
<tr><td>LP</td><td>Góp vốn, không điều hành; cấu trúc của quỹ PE, VC, hedge fund</td></tr>
<tr><td>Pass-through</td><td>Hợp danh và hợp danh hữu hạn: chịu thuế một lần ở cấp thành viên</td></tr>
<tr><td>Đánh thuế hai lần</td><td>Công ty nộp thuế trên lợi nhuận, cổ đông nộp thuế trên cổ tức</td></tr>
<tr><td>Pháp nhân riêng</td><td>Chỉ công ty; tồn tại độc lập với việc thay đổi chủ sở hữu</td></tr>
<tr><td>Công ty phi lợi nhuận</td><td>Thường miễn thuế, không có cổ đông, không chia lợi nhuận</td></tr>
<tr><td>Cổ phiếu đang lưu hành</td><td>Đã phát hành - cổ phiếu quỹ (không phải "được phép phát hành")</td></tr>
<tr><td>Direct listing</td><td>Không phát hành cổ phiếu mới, không huy động vốn, không cần underwriter</td></tr>
<tr><td>SPAC</td><td>Công ty vỏ IPO trước, sáp nhập với công ty tư nhân sau</td></tr>
<tr><td>LBO / MBO</td><td>Đưa công ty đại chúng về tư nhân, tài trợ chủ yếu bằng nợ</td></tr>
</tbody></table>
<p>Tiếp theo: tab <b>Luyện tập</b> 10 câu (rút ngẫu nhiên từ ngân hàng 30 câu, mỗi lần làm một bộ khác). Module sau (CF-02) sẽ đi sâu vào quyền lợi của cổ đông, chủ nợ và các bên liên quan khác.</p>`,
    },
  ];

  const glossary = {
    sole: ['Sole proprietorship', 'Doanh nghiệp một chủ', 'Một người sở hữu và điều hành; không tách biệt pháp lý với chủ, trách nhiệm vô hạn.'],
    unlimited: ['Unlimited liability', 'Trách nhiệm vô hạn', 'Chủ sở hữu phải dùng cả tài sản riêng để trả nợ của doanh nghiệp.'],
    gp: ['General partnership', 'Hợp danh', 'Hai hoặc nhiều thành viên cùng sở hữu, điều hành và chịu trách nhiệm vô hạn.'],
    gpartner: ['General partner (GP)', 'Thành viên hợp danh', 'Thành viên điều hành doanh nghiệp và chịu trách nhiệm vô hạn.'],
    pagree: ['Partnership agreement', 'Thỏa thuận hợp danh', 'Văn bản quy định góp vốn, quyền điều hành và cách chia lợi nhuận giữa các thành viên.'],
    passthrough: ['Pass-through taxation', 'Thuế chuyển thẳng', 'Lợi nhuận không bị đánh thuế ở cấp doanh nghiệp mà chuyển về thành viên, chịu thuế một lần ở cấp cá nhân.'],
    lp: ['Limited partnership', 'Hợp danh hữu hạn', 'Có ít nhất một GP điều hành (trách nhiệm vô hạn) và các LP góp vốn thụ động (trách nhiệm hữu hạn).'],
    lpartner: ['Limited partner (LP)', 'Thành viên góp vốn', 'Góp vốn nhưng không điều hành; chỉ mất tối đa số vốn đã góp.'],
    corp: ['Corporation / limited company', 'Công ty', 'Pháp nhân riêng, sở hữu bởi cổ đông có trách nhiệm hữu hạn, tách biệt sở hữu và điều hành.'],
    legalentity: ['Separate legal entity', 'Pháp nhân riêng', 'Tổ chức có quyền và nghĩa vụ pháp lý độc lập với chủ sở hữu.'],
    limited: ['Limited liability', 'Trách nhiệm hữu hạn', 'Chủ sở hữu chỉ mất tối đa số vốn đã đầu tư.'],
    double: ['Double taxation', 'Đánh thuế hai lần', 'Lợi nhuận chịu thuế ở cấp công ty, cổ tức chịu thuế thêm ở cấp cổ đông.'],
    board: ['Board of directors', 'Hội đồng quản trị', 'Do cổ đông bầu, thuê và giám sát ban điều hành, định hướng chiến lược.'],
    mgmt: ['Management', 'Ban điều hành', 'Người điều hành hoạt động hằng ngày của công ty, do hội đồng quản trị bổ nhiệm.'],
    voting: ['Voting rights', 'Quyền biểu quyết', 'Quyền của cổ đông bỏ phiếu bầu hội đồng quản trị và các vấn đề quan trọng.'],
    cit: ['Corporate income tax', 'Thuế thu nhập doanh nghiệp', 'Thuế đánh trên lợi nhuận của công ty.'],
    dividend: ['Dividend', 'Cổ tức', 'Phần lợi nhuận sau thuế công ty phân phối cho cổ đông.'],
    public: ['Publicly owned company', 'Công ty đại chúng', 'Cổ phiếu niêm yết trên sở giao dịch, đăng ký với cơ quan quản lý, ai cũng mua bán được.'],
    private: ['Privately owned company', 'Công ty tư nhân', 'Cổ phiếu không niêm yết, sở hữu tập trung, chuyển nhượng qua thỏa thuận riêng.'],
    placement: ['Private placement', 'Phát hành riêng lẻ', 'Bán chứng khoán trực tiếp cho một nhóm nhỏ nhà đầu tư chuyên nghiệp, không chào bán ra công chúng.'],
    authorized: ['Authorized shares', 'Cổ phiếu được phép phát hành', 'Số cổ phiếu tối đa công ty được phát hành theo điều lệ.'],
    issued: ['Issued shares', 'Cổ phiếu đã phát hành', 'Số cổ phiếu công ty đã bán ra, kể cả cổ phiếu sau đó mua lại làm cổ phiếu quỹ.'],
    treasury: ['Treasury shares', 'Cổ phiếu quỹ', 'Cổ phiếu công ty đã mua lại; không biểu quyết, không nhận cổ tức.'],
    outstanding: ['Shares outstanding', 'Cổ phiếu đang lưu hành', 'Cổ phiếu đã phát hành trừ cổ phiếu quỹ.'],
    float: ['Free float', 'Tỷ lệ tự do chuyển nhượng', 'Tỷ lệ cổ phiếu đang lưu hành có thể giao dịch tự do, không tính phần của người nội bộ, nhà sáng lập, cổ đông chiến lược.'],
    ipo: ['Initial public offering (IPO)', 'Phát hành lần đầu ra công chúng', 'Công ty tư nhân phát hành cổ phiếu mới cho công chúng và niêm yết để huy động vốn.'],
    underwriter: ['Underwriter', 'Tổ chức bảo lãnh phát hành', 'Ngân hàng đầu tư giúp định giá, phân phối và có thể cam kết mua chứng khoán phát hành.'],
    direct: ['Direct listing', 'Niêm yết trực tiếp', 'Đưa cổ phiếu hiện có lên sàn, không phát hành mới, không huy động vốn.'],
    spac: ['Special purpose acquisition company (SPAC)', 'Công ty mục đích đặc biệt', 'Công ty vỏ IPO để huy động tiền nhằm sáp nhập với một công ty tư nhân, đưa công ty đó lên sàn.'],
    lbo: ['Leveraged buyout (LBO)', 'Mua lại bằng vốn vay', 'Mua toàn bộ công ty, tài trợ chủ yếu bằng nợ; thường đưa công ty đại chúng về tư nhân.'],
    mbo: ['Management buyout (MBO)', 'Ban điều hành mua lại', 'LBO trong đó người mua là ban điều hành hiện tại của công ty.'],
    vc: ['Venture capital', 'Đầu tư mạo hiểm', 'Vốn cổ phần đầu tư vào doanh nghiệp giai đoạn đầu, rủi ro và kỳ vọng lợi nhuận cao.'],
    pe: ['Private equity', 'Đầu tư tư nhân', 'Vốn cổ phần đầu tư vào công ty không niêm yết, thường mua cổ phần chi phối ở công ty trưởng thành.'],
  };

  const practice = [
    { q: 'Đặc điểm nào ĐÚNG với doanh nghiệp một chủ (sole proprietorship)?', choices: ['Chủ sở hữu chịu trách nhiệm vô hạn và lợi nhuận chịu thuế ở cấp cá nhân', 'Doanh nghiệp là pháp nhân riêng, tách biệt với chủ sở hữu', 'Chủ sở hữu chỉ mất tối đa số vốn đã góp'], answer: 0, explain: 'Doanh nghiệp một chủ không tách biệt pháp lý với chủ: chủ chịu trách nhiệm vô hạn và lợi nhuận cộng vào thu nhập cá nhân. Pháp nhân riêng và trách nhiệm giới hạn ở số vốn đã góp là đặc điểm của công ty.' },
    { q: 'Trong một hợp danh hữu hạn (limited partnership), limited partner:', choices: ['Điều hành hoạt động hằng ngày và chịu trách nhiệm vô hạn', 'Góp vốn, không tham gia điều hành và chỉ mất tối đa số vốn đã góp', 'Chịu thuế hai lần trên phần lợi nhuận được chia'], answer: 1, explain: 'LP là nhà đầu tư thụ động, trách nhiệm hữu hạn. Điều hành hằng ngày và chịu trách nhiệm vô hạn mô tả general partner. Phương án "chịu thuế hai lần" sai vì hợp danh hữu hạn là pass-through, không bị đánh thuế hai lần.' },
    { q: 'Hình thức nào thường được dùng làm cấu trúc pháp lý của quỹ private equity, trong đó công ty quản lý quỹ ra quyết định và nhà đầu tư tổ chức góp vốn thụ động?', choices: ['General partnership', 'Sole proprietorship', 'Limited partnership'], answer: 2, explain: 'Quỹ PE, VC, hedge fund thường là limited partnership: công ty quản lý là GP, nhà đầu tư là LP. General partnership buộc mọi thành viên chịu trách nhiệm vô hạn, không phù hợp với nhà đầu tư thụ động.' },
    { q: 'Công ty có lợi nhuận trước thuế 200, thuế doanh nghiệp 20%, thuế cổ tức 10%, chia toàn bộ lợi nhuận sau thuế. Thuế suất tổng hợp mà cổ đông gánh chịu gần nhất với:', choices: ['30%', '28%', '20%'], answer: 1, explain: 'Sau thuế công ty: 200 x 0,8 = 160. Thuế cổ tức 16, cổ đông nhận 144. Thuế suất tổng hợp = 1 - 144/200 = 28%. Lựa chọn 30% cộng thẳng 20% + 10%, quên rằng thuế cổ tức chỉ đánh trên phần còn lại sau thuế công ty. Lựa chọn 20% bỏ qua thuế cổ tức.' },
    { q: 'Đặc điểm nào KHÔNG phải là đặc điểm chính của công ty (corporation)?', choices: ['Lợi nhuận được chuyển thẳng về chủ sở hữu và chỉ chịu thuế một lần', 'Có thể tồn tại độc lập với việc thay đổi cổ đông', 'Cổ đông bầu hội đồng quản trị để giám sát ban điều hành'], answer: 0, explain: 'Pass-through là đặc điểm của hợp danh. Công ty là pháp nhân riêng, tồn tại độc lập với việc thay đổi cổ đông, có tách biệt sở hữu và điều hành qua hội đồng quản trị (hai phương án này đúng) và lợi nhuận thường bị đánh thuế ở cấp công ty.' },
    { q: 'Một công ty đã phát hành 500 triệu cổ phiếu, mua lại 20 triệu làm cổ phiếu quỹ. Người nội bộ nắm 180 triệu. Free float gần nhất với:', choices: ['64,0%', '60,0%', '62,5%'], answer: 2, explain: 'Đang lưu hành = 500 - 20 = 480 triệu. Free float = (480 - 180)/480 = 62,5%. Lựa chọn 64,0% lấy (500 - 180)/500 = 64%, quên trừ cổ phiếu quỹ. Lựa chọn 60,0% lấy (500 - 20 - 180)/500 = 60%, dùng sai mẫu số là cổ phiếu đã phát hành.' },
    { q: 'So với công ty đại chúng, công ty tư nhân thường:', choices: ['Có cổ phiếu thanh khoản cao hơn và nghĩa vụ công bố thông tin nhiều hơn', 'Có sở hữu tập trung hơn và ít nghĩa vụ công bố thông tin hơn', 'Huy động vốn chủ yếu qua chào bán cổ phiếu ra công chúng'], answer: 1, explain: 'Công ty tư nhân sở hữu tập trung, không niêm yết nên thanh khoản kém, ít nghĩa vụ công bố, và tăng vốn qua phát hành riêng lẻ. Thanh khoản cao, công bố nhiều và huy động qua chào bán ra công chúng mô tả công ty đại chúng.' },
    { q: 'Phương thức nào đưa công ty tư nhân lên sàn mà KHÔNG phát hành cổ phiếu mới và không cần tổ chức bảo lãnh?', choices: ['IPO', 'Sáp nhập với SPAC', 'Direct listing'], answer: 2, explain: 'Direct listing chỉ đưa cổ phiếu hiện có lên sàn. IPO phát hành cổ phiếu mới qua underwriter. SPAC đã huy động tiền qua IPO của chính nó rồi dùng tiền đó sáp nhập.' },
    { q: 'Một quỹ private equity mua toàn bộ cổ phiếu của một công ty niêm yết, tài trợ 70% bằng nợ, rồi hủy niêm yết. Giao dịch này là:', choices: ['Leveraged buyout', 'Direct listing', 'Private placement'], answer: 0, explain: 'LBO dùng nhiều nợ để mua công ty và đưa công ty đại chúng về tư nhân. Direct listing đi theo chiều ngược lại. Private placement là bán chứng khoán cho nhóm nhỏ nhà đầu tư, không phải mua lại toàn bộ công ty.' },
    { q: 'Nhận định nào về công ty phi lợi nhuận (nonprofit) là đúng nhất?', choices: ['Phải chia thặng dư cho các nhà tài trợ hằng năm', 'Thường được miễn thuế và không có cổ đông', 'Không được phép vay nợ hay phát hành trái phiếu'], answer: 1, explain: 'Công ty phi lợi nhuận thường được miễn thuế, không có cổ đông, giữ lại thặng dư cho sứ mệnh. Chúng vẫn có thể vay nợ, ví dụ trái phiếu bệnh viện, trường học, nên phương án "không được phép vay nợ" sai.' },
    { q: "Bình và Cường là hai thành viên hợp danh (general partner) của một công ty tư vấn. Cường ký một hợp đồng thua lỗ khiến công ty nợ vượt quá tài sản. Nhận định nào đúng nhất?", choices: ["Bình có thể phải dùng tài sản cá nhân để trả khoản nợ do Cường gây ra", "Bình chỉ mất tối đa số vốn đã góp vì không trực tiếp ký hợp đồng", "Chủ nợ chỉ được đòi tài sản của công ty, không đòi được tài sản cá nhân của thành viên"], answer: 0, explain: "Trong hợp danh, mỗi thành viên hợp danh chịu trách nhiệm vô hạn, kể cả với khoản nợ do thành viên khác gây ra. Lựa chọn \"chỉ mất tối đa số vốn đã góp\" mô tả limited partner hoặc cổ đông công ty. Lựa chọn \"chủ nợ chỉ được đòi tài sản của công ty\" mô tả trách nhiệm hữu hạn của công ty, không đúng với hợp danh." },
    { q: "Các nhà sáng lập muốn lợi nhuận chỉ chịu thuế một lần ở cấp thành viên, đồng thời mọi thành viên đều có trách nhiệm hữu hạn và đều được tham gia điều hành. Hình thức nào phù hợp nhất?", choices: ["Hợp danh (general partnership)", "Công ty trách nhiệm hữu hạn dạng LLC hoặc hợp danh trách nhiệm hữu hạn (LLP)", "Công ty cổ phần thông thường chịu thuế ở cấp công ty"], answer: 1, explain: "LLC và LLP là các dạng lai: giữ thuế pass-through nhưng cho thành viên trách nhiệm hữu hạn. Hợp danh có thuế pass-through nhưng thành viên chịu trách nhiệm vô hạn. Công ty cổ phần thông thường cho trách nhiệm hữu hạn nhưng lợi nhuận bị đánh thuế hai lần." },
    { q: "Hạn chế lớn nhất của doanh nghiệp một chủ (sole proprietorship) khi muốn mở rộng quy mô là:", choices: ["Lợi nhuận bị đánh thuế hai lần ở cấp doanh nghiệp và cấp chủ sở hữu", "Chủ sở hữu không được trực tiếp ra quyết định kinh doanh", "Vốn chỉ đến từ tiền của chủ và vay cá nhân, nên khả năng huy động vốn thấp"], answer: 2, explain: "Doanh nghiệp một chủ chỉ dựa vào tiền của chủ và khoản vay cá nhân, nên quy mô bị giới hạn. Lựa chọn \"đánh thuế hai lần\" sai vì lợi nhuận chỉ chịu thuế một lần ở cấp cá nhân. Lựa chọn \"không được trực tiếp ra quyết định\" sai vì chủ vừa sở hữu vừa tự điều hành." },
    { q: "Một doanh nghiệp có lợi nhuận trước thuế 500. Nếu tổ chức theo hình thức hợp danh, lợi nhuận pass-through chịu thuế thu nhập cá nhân 30%. Nếu là công ty, thuế doanh nghiệp 21%, thuế cổ tức 15% và toàn bộ lợi nhuận sau thuế được chia cổ tức. So sánh số tiền chủ sở hữu thực nhận, kết luận nào đúng?", choices: ["Công ty nhiều hơn 45,00", "Hợp danh nhiều hơn 30,00", "Hợp danh nhiều hơn 14,25"], answer: 2, explain: "Hợp danh: 500 x (1 - 30%) = 350,00. Công ty: 500 x (1 - 21%) x (1 - 15%) = 335,75. Hợp danh nhiều hơn 14,25. Lựa chọn 30,00 cộng thẳng hai thuế suất thành 36% thay vì nhân (1 - t). Lựa chọn \"công ty nhiều hơn 45,00\" quên thuế cổ tức ở cấp cổ đông." },
    { q: "Nhận định nào về limited partner (LP) trong một quỹ private equity là đúng nhất?", choices: ["Vốn của LP thường bị khóa nhiều năm và khó rút ra trước hạn", "LP được quyền quyết định các khoản đầu tư của quỹ", "Lợi nhuận phân bổ cho LP bị đánh thuế ở cấp quỹ rồi đánh thuế thêm ở cấp LP"], answer: 0, explain: "LP góp vốn thụ động và thường bị khóa vốn nhiều năm. Lựa chọn \"được quyền quyết định các khoản đầu tư\" sai vì việc điều hành thuộc về GP; LP tham gia điều hành có thể mất bảo vệ trách nhiệm hữu hạn. Lựa chọn \"đánh thuế ở cấp quỹ\" sai vì hợp danh hữu hạn là pass-through." },
    { q: "Nhận định nào về cấu trúc của hợp danh hữu hạn (limited partnership) là đúng?", choices: ["Mọi thành viên đều là limited partner nên không ai chịu trách nhiệm vô hạn", "Phải có ít nhất một general partner chịu trách nhiệm vô hạn và điều hành", "General partner chỉ góp vốn, còn limited partner điều hành hoạt động"], answer: 1, explain: "Hợp danh hữu hạn luôn có ít nhất một GP điều hành và chịu trách nhiệm vô hạn, cùng các LP góp vốn thụ động. Lựa chọn \"mọi thành viên đều là limited partner\" sai vì thiếu GP thì không phải hợp danh hữu hạn. Lựa chọn \"GP chỉ góp vốn, LP điều hành\" đảo ngược vai trò hai bên." },
    { q: "Nhà sáng lập kiêm cổ đông lớn nhất của một công ty cổ phần qua đời và cổ phần được chuyển cho người thừa kế. Hệ quả đối với công ty là:", choices: ["Công ty phải giải thể vì mất chủ sở hữu chính", "Các hợp đồng công ty đã ký mất hiệu lực cho đến khi người thừa kế ký lại", "Công ty tiếp tục hoạt động bình thường vì là pháp nhân riêng, tồn tại độc lập với cổ đông"], answer: 2, explain: "Công ty là pháp nhân riêng, có thể tồn tại vô thời hạn; việc cổ đông thay đổi không ảnh hưởng đến sự tồn tại hay hợp đồng của công ty. Lựa chọn \"phải giải thể\" và lựa chọn \"hợp đồng mất hiệu lực\" nhầm công ty với doanh nghiệp một chủ hoặc hợp danh, nơi doanh nghiệp gắn liền với người chủ." },
    { q: "Trong một công ty, cổ đông thực hiện quyền kiểm soát chủ yếu bằng cách:", choices: ["Bầu hội đồng quản trị, hội đồng này thuê và giám sát ban điều hành", "Trực tiếp điều hành hoạt động kinh doanh hằng ngày", "Ký hợp đồng nhân danh công ty theo tỷ lệ sở hữu"], answer: 0, explain: "Do sở hữu và điều hành tách biệt, cổ đông dùng quyền biểu quyết để bầu hội đồng quản trị; hội đồng quản trị thuê và giám sát ban điều hành. Lựa chọn \"trực tiếp điều hành\" mô tả doanh nghiệp một chủ hoặc hợp danh. Lựa chọn \"ký hợp đồng nhân danh công ty\" sai vì cổ đông không phải người đại diện của công ty." },
    { q: "Đặc điểm nào của công ty giúp nhà đầu tư sẵn sàng mua cổ phiếu của doanh nghiệp mà họ không tham gia điều hành?", choices: ["Lợi nhuận được chuyển thẳng về cổ đông và chỉ chịu thuế một lần", "Trách nhiệm hữu hạn: cổ đông mất tối đa số tiền đã đầu tư", "Cổ đông có quyền rút vốn góp bất cứ lúc nào từ công ty"], answer: 1, explain: "Trách nhiệm hữu hạn bảo đảm chủ nợ không đòi được tài sản riêng của cổ đông, nên người không điều hành vẫn dám đầu tư. Lựa chọn \"chuyển thẳng và chỉ chịu thuế một lần\" mô tả hợp danh, không phải công ty. Lựa chọn \"rút vốn góp bất cứ lúc nào\" sai: cổ đông muốn thu hồi tiền phải bán cổ phiếu cho người khác." },
    { q: "Nhận định nào về sự tách biệt giữa sở hữu và điều hành trong công ty là chính xác nhất?", choices: ["Đây chỉ có lợi vì cho phép thuê người quản lý chuyên nghiệp", "Đây chỉ có hại vì làm phát sinh chi phí đại diện", "Đây cho phép thuê người quản lý chuyên nghiệp và nhiều người cùng sở hữu, nhưng tạo ra xung đột lợi ích giữa cổ đông và ban điều hành"], answer: 2, explain: "Sự tách biệt có cả hai mặt: thuê được người giỏi, huy động được đông đảo chủ sở hữu, nhưng phát sinh xung đột lợi ích và chi phí đại diện. Lựa chọn \"chỉ có lợi\" và lựa chọn \"chỉ có hại\" mỗi bên bỏ qua một mặt của vấn đề." },
    { q: "Điều lệ công ty cho phép phát hành tối đa 800 triệu cổ phiếu. Công ty đã phát hành 600 triệu cổ phiếu và đang nắm giữ 45 triệu cổ phiếu quỹ. Số cổ phiếu đang lưu hành gần nhất với:", choices: ["755 triệu", "555 triệu", "600 triệu"], answer: 1, explain: "Cổ phiếu đang lưu hành = đã phát hành - cổ phiếu quỹ = 600 - 45 = 555 triệu. Lựa chọn 755 triệu lấy số được phép phát hành trừ cổ phiếu quỹ. Lựa chọn 600 triệu quên trừ cổ phiếu quỹ." },
    { q: "Công ty được phép phát hành 800 triệu cổ phiếu, đã phát hành 600 triệu, trong đó 45 triệu là cổ phiếu quỹ. Một nhà đầu tư nắm 66,6 triệu cổ phiếu. Tỷ lệ quyền biểu quyết của nhà đầu tư này gần nhất với:", choices: ["12,0%", "11,1%", "8,3%"], answer: 0, explain: "Cổ phiếu quỹ không có quyền biểu quyết, nên mẫu số là cổ phiếu đang lưu hành = 600 - 45 = 555 triệu. Tỷ lệ = 66,6/555 = 12,0%. Lựa chọn 11,1% chia cho số đã phát hành, tính cả cổ phiếu quỹ. Lựa chọn 8,3% chia cho số được phép phát hành." },
    { q: "Một công ty tư nhân muốn tăng vốn chủ sở hữu mà không chào bán ra công chúng. Cách phù hợp nhất là:", choices: ["Direct listing trên sở giao dịch", "IPO qua tổ chức bảo lãnh phát hành", "Phát hành riêng lẻ (private placement) cho một nhóm nhà đầu tư chuyên nghiệp"], answer: 2, explain: "Công ty tư nhân tăng vốn qua phát hành riêng lẻ cho nhà đầu tư chuyên nghiệp, không cần chào bán ra công chúng. IPO là chào bán ra công chúng. Direct listing đưa cổ phiếu hiện có lên sàn và không huy động vốn mới, đồng thời biến công ty thành đại chúng." },
    { q: "Nhận định nào mô tả đúng nhất một SPAC (special purpose acquisition company)?", choices: ["Công ty vỏ IPO để huy động tiền, giữ tiền trong tài khoản ký quỹ, sau đó sáp nhập với một công ty tư nhân để đưa công ty này lên sàn", "Quỹ private equity dùng nợ để mua lại và hủy niêm yết một công ty đại chúng", "Công ty đã niêm yết đưa cổ phiếu hiện có lên một sở giao dịch khác mà không phát hành thêm"], answer: 0, explain: "SPAC IPO trước, giữ tiền trong tài khoản ký quỹ, rồi tìm một công ty tư nhân để sáp nhập. Lựa chọn \"dùng nợ để mua lại và hủy niêm yết\" mô tả LBO. Lựa chọn \"đưa cổ phiếu hiện có lên sàn mà không phát hành thêm\" gần với direct listing, không phải SPAC." },
    { q: "Ban điều hành hiện tại của một công ty niêm yết, cùng với một ngân hàng cho vay, mua lại toàn bộ cổ phiếu của công ty và hủy niêm yết. Giao dịch này được gọi là:", choices: ["Direct listing", "Management buyout (MBO)", "Private placement"], answer: 1, explain: "MBO là một dạng LBO trong đó người mua là chính ban điều hành hiện tại, thường tài trợ nhiều bằng nợ, đưa công ty đại chúng về tư nhân. Direct listing đi theo chiều ngược lại. Private placement là bán chứng khoán cho một nhóm nhỏ nhà đầu tư, không phải mua lại toàn bộ công ty." },
    { q: "Xu hướng nào là đúng nhất ở các thị trường phát triển trong vài thập kỷ gần đây?", choices: ["Số công ty niêm yết tăng mạnh, còn thị trường vốn tư nhân thu hẹp", "Cả số công ty niêm yết và quy mô thị trường vốn tư nhân đều giảm", "Số công ty niêm yết giảm dần, còn thị trường vốn tư nhân (VC, PE, private debt) tăng mạnh"], answer: 2, explain: "Công ty ở lại tư nhân lâu hơn vì có thể huy động vốn lớn từ VC, PE, private debt mà không chịu chi phí và nghĩa vụ của công ty đại chúng, nên số công ty niêm yết giảm. Hai lựa chọn còn lại mô tả sai chiều của ít nhất một xu hướng." },
    { q: "Lợi ích nào là của việc trở thành công ty đại chúng?", choices: ["Chi phí tuân thủ và công bố thông tin thấp hơn công ty tư nhân", "Cổ phiếu có thanh khoản và giá thị trường, có thể dùng làm phương tiện thanh toán khi mua lại công ty khác", "Ban điều hành ít chịu áp lực về kết quả kinh doanh ngắn hạn"], answer: 1, explain: "Cổ phiếu niêm yết có thanh khoản và giá tham chiếu, nên dùng được để trả tiền mua bán sáp nhập hay thưởng cổ phiếu cho nhân viên. Lựa chọn \"chi phí tuân thủ thấp hơn\" sai: công ty đại chúng phải công bố nhiều hơn, tốn kém hơn. Lựa chọn \"ít áp lực ngắn hạn\" sai: công ty đại chúng chịu áp lực kết quả từng quý." },
    { q: "Nhận định nào phân biệt đúng quỹ đầu tư mạo hiểm (venture capital) và quỹ private equity?", choices: ["VC đầu tư vào doanh nghiệp giai đoạn đầu, rủi ro cao; PE thường mua cổ phần chi phối ở công ty đã trưởng thành, kể cả qua LBO", "VC chủ yếu cho vay trực tiếp, còn PE chỉ mua cổ phiếu niêm yết", "VC thường mua lại công ty đã trưởng thành bằng nợ, còn PE đầu tư vào startup"], answer: 0, explain: "VC rót vốn vào doanh nghiệp giai đoạn đầu để đổi lấy cổ phần; PE thường mua cổ phần chi phối ở công ty đã trưởng thành, thường qua LBO. Lựa chọn \"VC chủ yếu cho vay trực tiếp\" nhầm VC với private debt. Lựa chọn \"VC mua lại công ty trưởng thành bằng nợ\" đảo ngược vai trò của VC và PE." },
    { q: "Một công ty tư nhân cần huy động thêm vốn lớn để xây nhà máy và muốn có tổ chức hỗ trợ định giá, phân phối cổ phiếu. Phương thức lên sàn phù hợp nhất là:", choices: ["IPO", "Direct listing", "Leveraged buyout"], answer: 0, explain: "IPO phát hành cổ phiếu mới nên huy động được vốn, và có tổ chức bảo lãnh định giá, phân phối, dù chi phí cao hơn. Direct listing không huy động vốn mới và không có bảo lãnh. Leveraged buyout là giao dịch đưa công ty đại chúng về tư nhân, không phải cách lên sàn." },
    { q: "Nhận định nào về cổ phiếu quỹ (treasury shares) là đúng?", choices: ["Cổ phiếu quỹ được tính vào cổ phiếu đang lưu hành và nhận cổ tức", "Cổ phiếu quỹ là cổ phiếu được phép phát hành nhưng chưa bao giờ bán ra", "Cổ phiếu quỹ là cổ phiếu công ty đã mua lại, không có quyền biểu quyết và không nhận cổ tức"], answer: 2, explain: "Cổ phiếu quỹ là cổ phiếu đã phát hành rồi được công ty mua lại; chúng không có quyền biểu quyết, không nhận cổ tức và bị trừ khỏi số đang lưu hành. Lựa chọn \"tính vào cổ phiếu đang lưu hành\" sai vì đang lưu hành = đã phát hành - cổ phiếu quỹ. Lựa chọn \"chưa bao giờ bán ra\" mô tả phần được phép phát hành nhưng chưa phát hành." },
  ];

  window.LESSONS['CF-01'] = {
    moduleId: 'CF-01',
    calculator: 'Không cần máy tính',
    warmup: [
      'Nếu bạn mở một quán cà phê cùng hai người bạn, bạn có sẵn sàng đem nhà riêng ra bảo đảm cho khoản nợ của quán không? Vì sao?',
      'Kể tên 3 công ty Việt Nam đang niêm yết và 1 công ty lớn chưa niêm yết mà bạn biết.',
      'Theo bạn, tại sao một công ty đã có lãi lại muốn IPO?',
    ],
    sections,
    glossary,
    practice,
    widgets: {},
    slides: [],
    wrapup: [
      'Vẽ lại bảng so sánh 4 hình thức tổ chức theo 5 tiêu chí mà không nhìn tài liệu.',
      'Giải thích bằng lời của bạn sự khác nhau giữa IPO, direct listing và SPAC.',
      'Còn câu hỏi nào chưa rõ? Ghi lại để hỏi.',
    ],
  };
}());
