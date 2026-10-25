// Bài giảng FI-01 - Fixed-Income Instrument Features (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t, frac, keys, timeline } = window.CFAH;

  const sections = [
    {
      title: '1. Bức tranh lớn',
      minutes: 4,
      html: `
<p>Topic Fixed Income chiếm 11-14% đề thi và có 19 module. Module đầu tiên này trả lời câu hỏi: <b>một trái phiếu được "mô tả" bằng những thông tin gì</b>, và bản hợp đồng đứng sau nó quy định những gì.</p>
<div class="key">Một ${t('fi', 'chứng khoán thu nhập cố định (fixed-income security)')} là một khoản vay được chứng khoán hóa: ${t('issuer', 'tổ chức phát hành (issuer)')} nhận tiền hôm nay và <b>cam kết</b> trả cho người nắm giữ một chuỗi dòng tiền xác định trong tương lai (lãi và gốc).</div>
<p>Người đi vay là tổ chức phát hành; người cho vay là ${t('bondholder', 'trái chủ (bondholder)')}. Khác với cổ đông, trái chủ <b>không sở hữu</b> doanh nghiệp: họ có quyền đòi nợ theo hợp đồng, không có phần lợi nhuận tăng thêm khi doanh nghiệp làm ăn tốt.</p>
${timeline(4, [{ t: 0, label: 'Trả giá mua', up: true, cls: 'pv' }, { t: 1, label: 'Coupon' }, { t: 2, label: 'Coupon' }, { t: 3, label: 'Coupon' }, { t: 4, label: 'Coupon + gốc' }], 'Dòng tiền của một trái phiếu coupon cố định 4 năm, nhìn từ phía nhà đầu tư.')}
<p>Lộ trình các module đầu của topic:</p>
<table class="plain"><thead><tr><th>Module</th><th>Câu hỏi chính</th></tr></thead><tbody>
<tr><td><b>FI-01</b> (bài này)</td><td>Đặc điểm của trái phiếu; hợp đồng phát hành (indenture) và các cam kết (covenants)</td></tr>
<tr><td>FI-02</td><td>Các cấu trúc dòng tiền (bullet, amortizing, FRN, zero...) và quyền chọn đi kèm; pháp lý, thuế</td></tr>
<tr><td>FI-03, FI-04, FI-05</td><td>Thị trường: phát hành, giao dịch; doanh nghiệp và chính phủ huy động vốn ra sao</td></tr>
<tr><td>FI-06 trở đi</td><td>Định giá, lợi suất, đường cong lãi suất, duration, rủi ro tín dụng, chứng khoán hóa</td></tr>
</tbody></table>
<p class="tip"><b>Mẹo học:</b> module này là "từ điển" cho cả topic. Đề thi hỏi dạng định nghĩa và phân loại: covenant nào là affirmative, nợ nào được trả trước, quyền chọn nào có lợi cho ai.</p>`,
    },
    {
      title: '2. Các đặc điểm cơ bản của một trái phiếu',
      minutes: 10,
      html: `
<p>Đọc một bản tóm tắt điều khoản (term sheet) của trái phiếu, bạn luôn gặp các thông tin sau:</p>
<h4>2.1. Tổ chức phát hành (issuer)</h4>
<table class="plain"><thead><tr><th>Nhóm</th><th>Ví dụ</th><th>Ghi chú</th></tr></thead><tbody>
<tr><td>${t('sovereign', 'Chính phủ trung ương (sovereign)')}</td><td>Trái phiếu Kho bạc Mỹ, trái phiếu Chính phủ Việt Nam</td><td>Trả nợ từ thuế, có thể in tiền nội tệ</td></tr>
<tr><td>Chính quyền địa phương và tổ chức gần chính phủ</td><td>Bang, thành phố; cơ quan nhà nước (agency)</td><td>Gọi chung là non-sovereign và quasi-government (FI-05)</td></tr>
<tr><td>Tổ chức siêu quốc gia (supranational)</td><td>World Bank, ADB, IMF</td><td>Do nhiều quốc gia sở hữu</td></tr>
<tr><td>Doanh nghiệp (corporate)</td><td>Ngân hàng, công ty phi tài chính</td><td>Trả nợ từ dòng tiền hoạt động</td></tr>
<tr><td>Pháp nhân đặc biệt (special purpose entity, SPE)</td><td>Pháp nhân phát hành chứng khoán đảm bảo bằng tài sản</td><td>Trả nợ từ một nhóm tài sản (FI-17 đến FI-19)</td></tr>
</tbody></table>

<h4>2.2. Kỳ hạn (maturity)</h4>
<p>${t('maturity', 'Ngày đáo hạn (maturity date)')} là ngày trả gốc lần cuối. Thời gian còn lại đến ngày đó gọi là ${t('tenor', 'kỳ hạn còn lại (tenor)')}.</p>
<ul>
<li>Kỳ hạn gốc từ 1 năm trở xuống: ${t('mm', 'chứng khoán thị trường tiền tệ (money market securities)')}.</li>
<li>Kỳ hạn gốc trên 1 năm: ${t('capm', 'chứng khoán thị trường vốn (capital market securities)')}.</li>
<li>Không có ngày đáo hạn: ${t('perp', 'trái phiếu vĩnh viễn (perpetual bond)')}, chỉ trả lãi mãi mãi (đã định giá ở QM-04: PV = coupon / r).</li>
</ul>

<h4>2.3. Mệnh giá (principal, par value) và cách yết giá</h4>
<p>${t('par', 'Mệnh giá (par value / face value / principal)')} là số tiền tổ chức phát hành cam kết trả khi đáo hạn, đồng thời là cơ sở để tính coupon. Giá trái phiếu thường được ${t('quote', 'yết theo phần trăm mệnh giá (price quoted per 100 of par)')}: giá 98,50 nghĩa là 98,50% mệnh giá.</p>
<ul><li>Giá &lt; 100: trái phiếu bán ${t('discount', 'dưới mệnh giá (discount)')}; giá = 100: ngang mệnh giá (par); giá &gt; 100: ${t('premium', 'trên mệnh giá (premium)')}.</li></ul>

<h4>2.4. Lãi suất coupon và tần suất trả</h4>
<p>${t('coupon', 'Lãi suất coupon (coupon rate)')} là lãi suất danh nghĩa hằng năm tính trên mệnh giá. Tiền coupon mỗi kỳ = coupon rate × mệnh giá / số kỳ trong năm. Coupon có thể trả năm, nửa năm (phổ biến với trái phiếu Mỹ), quý hoặc tháng.</p>
<ul>
<li>Coupon cố định (fixed-rate): không đổi suốt đời trái phiếu.</li>
<li>${t('frn', 'Trái phiếu lãi suất thả nổi (floating-rate note, FRN)')}: coupon = ${t('mrr', 'lãi suất tham chiếu thị trường (MRR)')} + một biên cố định, được điều chỉnh định kỳ (chi tiết ở FI-02).</li>
<li>${t('zero', 'Trái phiếu không trả lãi (zero-coupon)')}: không có coupon, phát hành dưới mệnh giá, trả đúng mệnh giá khi đáo hạn.</li>
</ul>
<p>Trái phiếu cũng ghi rõ ${t('currency', 'đồng tiền thanh toán (currency denomination)')}: lãi và gốc có thể bằng nội tệ hoặc ngoại tệ (ví dụ một công ty Việt Nam phát hành trái phiếu USD).</p>

<div class="example"><div class="ex-h">Ví dụ 2.1 - Đọc term sheet</div>
<p>Trái phiếu doanh nghiệp: mệnh giá 1.000 USD, coupon 5%/năm trả nửa năm một lần, kỳ hạn 10 năm. Mỗi kỳ trái chủ nhận bao nhiêu? Có tất cả bao nhiêu lần trả coupon, và tổng số tiền nhận được (chưa chiết khấu) là bao nhiêu?</p>
<details><summary>Xem lời giải</summary>
<p>Coupon mỗi kỳ = 5% × 1.000 / 2 = <b>25 USD</b>. Số kỳ = 10 × 2 = <b>20</b>. Tổng tiền nhận = 20 × 25 + 1.000 = <b>1.500 USD</b>.</p></details></div>

<div class="example"><div class="ex-h">Ví dụ 2.2 - Giá yết</div>
<p>Một quỹ mua trái phiếu có tổng mệnh giá 2.000.000 USD với giá yết 98,50. Quỹ phải trả bao nhiêu (bỏ qua lãi dồn tích)?</p>
<details><summary>Xem lời giải</summary>
<p>98,50% × 2.000.000 = <b>1.970.000 USD</b>. Trái phiếu đang bán dưới mệnh giá.</p></details></div>
<p class="warn"><b>Bẫy:</b> coupon luôn tính trên <b>mệnh giá</b>, không tính trên giá mua. Trái phiếu coupon 5% mua giá 98,50 vẫn trả 5 trên mỗi 100 mệnh giá.</p>`,
    },
    {
      title: '3. Thứ tự ưu tiên (seniority) và điều khoản tùy chọn',
      minutes: 8,
      html: `
<h4>3.1. Seniority: ai được trả trước khi phá sản?</h4>
<p>Khi tổ chức phát hành vỡ nợ, tài sản được dùng để trả các chủ nợ theo thứ tự ưu tiên:</p>
<ol>
<li>${t('secured', 'Nợ có bảo đảm (secured debt)')}: có tài sản cụ thể làm ${t('collateral', 'tài sản đảm bảo (collateral)')}.</li>
<li>${t('senior', 'Nợ ưu tiên (senior debt)')} không bảo đảm.</li>
<li>${t('subord', 'Nợ thứ cấp (subordinated / junior debt)')}: chỉ được trả sau khi nợ senior đã được trả đủ.</li>
</ol>
<p>Thứ tự ưu tiên cao hơn → rủi ro thấp hơn → lợi suất đòi hỏi thấp hơn. Nợ thứ cấp phải trả lãi cao hơn để bù cho rủi ro thu hồi thấp.</p>
<div class="example"><div class="ex-h">Ví dụ 3.1 - Ai nhận được bao nhiêu?</div>
<p>Một công ty phá sản, tài sản thanh lý được 60 triệu USD. Nợ: senior secured 40, senior unsecured 30, subordinated 20 (triệu USD). Giả sử trả đúng thứ tự ưu tiên, tỷ lệ thu hồi của từng nhóm là bao nhiêu?</p>
<details><summary>Xem lời giải</summary>
<p>Secured nhận đủ 40 → <b>100%</b>. Còn 20 cho senior unsecured: 20 / 30 = <b>66,7%</b>. Subordinated nhận <b>0%</b>.</p>
<p>Đây là lý do nợ thứ cấp có lợi suất cao nhất. Thứ tự ưu tiên và tỷ lệ thu hồi được học sâu ở FI-14 và FI-16.</p></details></div>

<h4>3.2. Điều khoản tùy chọn (contingency provisions)</h4>
<p>Một ${t('contingency', 'điều khoản tùy chọn (contingency provision)')} là điều khoản cho phép thay đổi dòng tiền khi một sự kiện xảy ra hoặc khi một bên quyết định thực hiện quyền. Ba loại ${t('embedded', 'quyền chọn gắn kèm (embedded option)')} chính:</p>
<table class="plain"><thead><tr><th>Quyền</th><th>Ai nắm quyền</th><th>Có lợi cho</th><th>Tác động lên giá so với trái phiếu thường</th></tr></thead><tbody>
<tr><td><b>Call</b>: mua lại trước hạn</td><td>Tổ chức phát hành</td><td>Tổ chức phát hành</td><td>Giá thấp hơn, lợi suất cao hơn</td></tr>
<tr><td><b>Put</b>: bán lại cho tổ chức phát hành</td><td>Trái chủ</td><td>Trái chủ</td><td>Giá cao hơn, lợi suất thấp hơn</td></tr>
<tr><td><b>Conversion</b>: đổi sang cổ phiếu</td><td>Trái chủ</td><td>Trái chủ</td><td>Giá cao hơn, lợi suất thấp hơn</td></tr>
</tbody></table>
<p>Trái phiếu không có quyền chọn nào gọi là ${t('straight', 'trái phiếu thường (straight / option-free bond)')}. Chi tiết cách vận hành từng quyền ở FI-02.</p>
<p class="tip"><b>Ghi nhớ:</b> ai nắm quyền thì người đó có lợi, và người kia đòi được bù. Quyền thuộc tổ chức phát hành → nhà đầu tư đòi lợi suất cao hơn. Quyền thuộc trái chủ → trái chủ chấp nhận lợi suất thấp hơn.</p>`,
    },
    {
      title: '4. Hai thước đo lợi suất đầu tiên: current yield và YTM',
      minutes: 6,
      html: `
<p>Coupon rate chỉ cho biết tiền lãi trên mệnh giá. Nhà đầu tư quan tâm đến lợi suất <b>trên số tiền thực sự bỏ ra</b>.</p>
<div class="formula">${t('cy', 'Current yield')} = ${frac('Coupon hằng năm', 'Giá trái phiếu')}</div>
<p>Current yield bỏ qua phần lời hoặc lỗ khi giá kéo về mệnh giá lúc đáo hạn và bỏ qua giá trị thời gian của tiền. Thước đo đầy đủ hơn là ${t('ytm', 'lợi suất đáo hạn (yield-to-maturity, YTM)')}: lãi suất chiết khấu làm cho PV của mọi dòng tiền tương lai bằng giá hiện tại. Đây chính là IRR của trái phiếu, với giả định giữ đến đáo hạn, không vỡ nợ và tái đầu tư coupon tại đúng YTM.</p>
<div class="example"><div class="ex-h">Ví dụ 4.1 - Trái phiếu premium</div>
<p>Trái phiếu 4 năm, coupon 6% trả hằng năm, giá 103,50. Tính current yield và YTM.</p>
<details><summary>Xem lời giải</summary>
<p>Current yield = 6 / 103,50 = <b>5,80%</b>.</p>
${keys([['Xóa TVM, nhập dữ liệu', '[2ND] [FV] 4 [N] 103.5 [+/-] [PV] 6 [PMT] 100 [FV]', ''], ['Tính YTM', '[CPT] [I/Y]', 'I/Y = 5.0127']])}
<p>YTM = <b>5,01%</b>. Thứ tự: coupon 6% &gt; current yield 5,80% &gt; YTM 5,01%. Mua trên mệnh giá thì phần chênh 3,50 sẽ "mất dần" khi giá về 100, nên lợi suất toàn phần thấp hơn coupon.</p></details></div>
<div class="key">Premium: coupon &gt; current yield &gt; YTM.<br>Par: coupon = current yield = YTM.<br>Discount: coupon &lt; current yield &lt; YTM.</div>
<p class="tip">Cách bấm máy định giá trái phiếu đã học ở QM-04. Các thước đo lợi suất khác (theo tần suất ghép lãi, yield-to-call, spread) học ở FI-06 và FI-07.</p>`,
    },
    {
      title: '5. Hợp đồng phát hành (bond indenture) và các cam kết (covenants)',
      minutes: 8,
      html: `
<p>${t('indenture', 'Hợp đồng phát hành (bond indenture / trust deed)')} là văn bản pháp lý giữa tổ chức phát hành và trái chủ, ghi mọi quyền và nghĩa vụ của hai bên. Vì trái chủ rất đông và phân tán, hợp đồng chỉ định một ${t('trustee', 'đại diện người sở hữu trái phiếu (trustee)')}, thường là ngân hàng hoặc công ty trust, có nghĩa vụ ủy thác (fiduciary duty) giám sát tổ chức phát hành tuân thủ hợp đồng và thay mặt trái chủ hành động khi vi phạm.</p>
<h4>5.1. Nội dung chính của indenture</h4>
<ul>
<li>Các đặc điểm ở phần 2: tổ chức phát hành, mệnh giá, coupon, kỳ hạn, đồng tiền; các quyền chọn (phần 3).</li>
<li>${t('proceeds', 'Mục đích sử dụng vốn (use of proceeds)')}: ví dụ tài trợ dự án, đảo nợ, mục đích chung của doanh nghiệp.</li>
<li>${t('source', 'Nguồn trả nợ (source of repayment)')}: phụ thuộc loại tổ chức phát hành (bảng dưới).</li>
<li>Tài sản đảm bảo (nếu có), các biện pháp ${t('enhance', 'tăng cường tín dụng (credit enhancement)')} như bảo lãnh của bên thứ ba.</li>
<li>Các ${t('covenant', 'cam kết (covenants)')} của tổ chức phát hành.</li>
</ul>
<table class="plain"><thead><tr><th>Tổ chức phát hành</th><th>Nguồn trả nợ</th></tr></thead><tbody>
<tr><td>Chính phủ trung ương</td><td>Thuế, và khả năng in tiền nội tệ</td></tr>
<tr><td>Chính quyền địa phương</td><td>Thuế địa phương (general obligation) hoặc doanh thu của một dự án như cầu, đường thu phí (revenue bond)</td></tr>
<tr><td>Doanh nghiệp</td><td>Dòng tiền hoạt động; nếu có bảo đảm thì thêm tài sản đảm bảo</td></tr>
<tr><td>SPE (chứng khoán hóa)</td><td>Dòng tiền từ nhóm tài sản cơ sở (khoản vay, khoản phải thu)</td></tr>
</tbody></table>

<h4>5.2. Affirmative và negative covenants</h4>
<table class="plain"><thead><tr><th></th><th>${t('affirm', 'Cam kết chủ động (affirmative covenants)')}</th><th>${t('negcov', 'Cam kết hạn chế (negative covenants)')}</th></tr></thead><tbody>
<tr><td>Bản chất</td><td>Những việc tổ chức phát hành <b>phải làm</b></td><td>Những việc tổ chức phát hành <b>không được làm</b> (hoặc chỉ được làm trong giới hạn)</td></tr>
<tr><td>Ví dụ</td><td>Trả lãi, gốc đúng hạn; nộp thuế, tuân thủ pháp luật; duy trì bảo hiểm và bảo dưỡng tài sản; nộp báo cáo tài chính định kỳ; ${t('crossdef', 'điều khoản vỡ nợ chéo (cross-default)')}; ${t('pari', 'điều khoản ngang hàng (pari passu)')}</td><td>Giới hạn vay thêm nợ; ${t('negpledge', 'không cầm cố tài sản cho chủ nợ khác (negative pledge)')}; giới hạn chia cổ tức, mua lại cổ phiếu; giới hạn bán tài sản, sáp nhập; không dùng cùng một tài sản đảm bảo cho nhiều đợt nợ</td></tr>
<tr><td>Tác động lên tổ chức phát hành</td><td>Thường mang tính hành chính, ít tốn kém</td><td>Có thể hạn chế đáng kể hoạt động kinh doanh</td></tr>
</tbody></table>
<p><b>Cross-default</b>: nếu tổ chức phát hành vỡ nợ một khoản nợ khác thì cũng được coi là vỡ nợ trái phiếu này. <b>Pari passu</b>: trái phiếu này được xếp hạng ngang với các khoản nợ cùng hạng khác của tổ chức phát hành.</p>
<div class="example"><div class="ex-h">Ví dụ 5.1 - Kiểm tra covenant</div>
<p>Indenture quy định: tổng nợ / EBITDA không vượt quá 3,0 lần. Công ty có EBITDA 200 triệu, nợ hiện tại 500 triệu, muốn vay thêm 150 triệu. Có vi phạm không? Công ty được vay thêm tối đa bao nhiêu?</p>
<details><summary>Xem lời giải</summary>
<p>Sau khi vay: (500 + 150) / 200 = <b>3,25 lần</b> &gt; 3,0 → vi phạm. Nợ tối đa = 3,0 × 200 = 600, nên chỉ vay thêm được <b>100 triệu</b>. Đây là một negative covenant (giới hạn vay thêm).</p></details></div>
<p class="warn"><b>Bẫy:</b> covenant càng chặt thì trái chủ càng được bảo vệ và chấp nhận lãi suất thấp hơn, nhưng tổ chức phát hành mất linh hoạt. Đừng nhầm cross-default và pari passu là negative covenants: CFA xếp chúng vào <b>affirmative</b>.</p>`,
    },
    {
      title: '6. Tóm tắt và bẫy thường gặp',
      minutes: 4,
      html: `
<table class="plain"><thead><tr><th>Chủ đề</th><th>Nhớ</th></tr></thead><tbody>
<tr><td>Đặc điểm</td><td>Issuer, kỳ hạn, mệnh giá, coupon và tần suất, đồng tiền, seniority, quyền chọn</td></tr>
<tr><td>Kỳ hạn</td><td>≤ 1 năm: money market; &gt; 1 năm: capital market; không đáo hạn: perpetual</td></tr>
<tr><td>Giá yết</td><td>% mệnh giá; coupon luôn tính trên mệnh giá</td></tr>
<tr><td>Seniority</td><td>Secured → senior unsecured → subordinated; ưu tiên thấp hơn thì lợi suất cao hơn</td></tr>
<tr><td>Quyền chọn</td><td>Call: có lợi cho issuer (giá thấp hơn). Put, conversion: có lợi cho trái chủ (giá cao hơn)</td></tr>
<tr><td>Lợi suất</td><td>Premium: coupon &gt; CY &gt; YTM; discount thì ngược lại</td></tr>
<tr><td>Indenture</td><td>Hợp đồng pháp lý; trustee giám sát thay trái chủ</td></tr>
<tr><td>Affirmative</td><td>Phải làm: trả nợ, báo cáo, bảo hiểm, cross-default, pari passu</td></tr>
<tr><td>Negative</td><td>Không được làm: vay thêm quá mức, negative pledge, chia cổ tức, bán tài sản</td></tr>
</tbody></table>
<p>Tiếp theo: tab <b>Luyện tập</b> - 8 câu. Module sau (FI-02) đi vào các cấu trúc dòng tiền và quyền chọn.</p>`,
    },
  ];

  const glossary = {
    fi: ['Fixed-income security', 'Chứng khoán thu nhập cố định', 'Công cụ nợ trong đó tổ chức phát hành cam kết trả một chuỗi dòng tiền lãi và gốc xác định.'],
    issuer: ['Issuer', 'Tổ chức phát hành', 'Bên đi vay, phát hành trái phiếu để huy động vốn.'],
    bondholder: ['Bondholder', 'Trái chủ', 'Nhà đầu tư nắm giữ trái phiếu, tức là bên cho vay.'],
    sovereign: ['Sovereign issuer', 'Chính phủ trung ương', 'Chính phủ quốc gia phát hành trái phiếu, trả nợ chủ yếu từ thuế.'],
    maturity: ['Maturity date', 'Ngày đáo hạn', 'Ngày tổ chức phát hành trả khoản gốc cuối cùng.'],
    tenor: ['Tenor', 'Kỳ hạn còn lại', 'Thời gian còn lại đến ngày đáo hạn.'],
    mm: ['Money market securities', 'Chứng khoán thị trường tiền tệ', 'Công cụ nợ có kỳ hạn gốc từ 1 năm trở xuống.'],
    capm: ['Capital market securities', 'Chứng khoán thị trường vốn', 'Công cụ nợ có kỳ hạn gốc trên 1 năm.'],
    perp: ['Perpetual bond', 'Trái phiếu vĩnh viễn', 'Trái phiếu không có ngày đáo hạn, chỉ trả lãi mãi mãi.'],
    par: ['Par value / principal', 'Mệnh giá', 'Số tiền trả khi đáo hạn và là cơ sở tính coupon.'],
    quote: ['Price quoted per 100 of par', 'Giá yết theo % mệnh giá', 'Giá trái phiếu thể hiện bằng phần trăm mệnh giá, ví dụ 98,50.'],
    discount: ['Discount bond', 'Trái phiếu dưới mệnh giá', 'Trái phiếu có giá thấp hơn mệnh giá; khi đó coupon thấp hơn lợi suất thị trường.'],
    premium: ['Premium bond', 'Trái phiếu trên mệnh giá', 'Trái phiếu có giá cao hơn mệnh giá; khi đó coupon cao hơn lợi suất thị trường.'],
    coupon: ['Coupon rate', 'Lãi suất coupon', 'Lãi suất danh nghĩa hằng năm tính trên mệnh giá.'],
    frn: ['Floating-rate note (FRN)', 'Trái phiếu lãi suất thả nổi', 'Coupon bằng lãi suất tham chiếu cộng biên cố định, điều chỉnh định kỳ.'],
    mrr: ['Market reference rate (MRR)', 'Lãi suất tham chiếu thị trường', 'Lãi suất ngắn hạn làm chuẩn cho công cụ thả nổi, ví dụ SOFR.'],
    zero: ['Zero-coupon bond', 'Trái phiếu không trả lãi', 'Không trả coupon, phát hành dưới mệnh giá và trả đủ mệnh giá khi đáo hạn.'],
    currency: ['Currency denomination', 'Đồng tiền thanh toán', 'Đồng tiền dùng để trả lãi và gốc của trái phiếu.'],
    secured: ['Secured debt', 'Nợ có bảo đảm', 'Nợ có tài sản cụ thể làm đảm bảo, được ưu tiên trên tài sản đó khi vỡ nợ.'],
    collateral: ['Collateral', 'Tài sản đảm bảo', 'Tài sản cầm cố cho chủ nợ, có thể bị xử lý nếu tổ chức phát hành vỡ nợ.'],
    senior: ['Senior debt', 'Nợ ưu tiên', 'Nợ được trả trước nợ thứ cấp khi phá sản.'],
    subord: ['Subordinated (junior) debt', 'Nợ thứ cấp', 'Nợ chỉ được trả sau khi nợ ưu tiên đã được trả đủ.'],
    contingency: ['Contingency provision', 'Điều khoản tùy chọn', 'Điều khoản cho phép thay đổi dòng tiền khi có sự kiện hoặc khi một bên thực hiện quyền.'],
    embedded: ['Embedded option', 'Quyền chọn gắn kèm', 'Quyền chọn nằm sẵn trong trái phiếu: call, put, chuyển đổi.'],
    straight: ['Straight (option-free) bond', 'Trái phiếu thường', 'Trái phiếu không có quyền chọn gắn kèm.'],
    cy: ['Current yield', 'Lợi suất hiện hành', 'Coupon hằng năm chia cho giá trái phiếu.'],
    ytm: ['Yield-to-maturity (YTM)', 'Lợi suất đáo hạn', 'Lãi suất chiết khấu làm PV các dòng tiền bằng giá; là IRR của trái phiếu nếu giữ đến đáo hạn.'],
    indenture: ['Bond indenture / trust deed', 'Hợp đồng phát hành', 'Văn bản pháp lý ghi quyền và nghĩa vụ của tổ chức phát hành và trái chủ.'],
    trustee: ['Trustee', 'Đại diện người sở hữu trái phiếu', 'Tổ chức được chỉ định giám sát việc tuân thủ indenture thay cho trái chủ.'],
    proceeds: ['Use of proceeds', 'Mục đích sử dụng vốn', 'Tổ chức phát hành sẽ dùng tiền huy động vào việc gì.'],
    source: ['Source of repayment', 'Nguồn trả nợ', 'Dòng tiền dùng để trả lãi và gốc: thuế, doanh thu dự án, dòng tiền hoạt động, nhóm tài sản.'],
    enhance: ['Credit enhancement', 'Tăng cường tín dụng', 'Biện pháp giảm rủi ro tín dụng cho trái chủ, ví dụ bảo lãnh của bên thứ ba.'],
    covenant: ['Covenants', 'Cam kết', 'Các điều khoản ràng buộc hành vi của tổ chức phát hành trong indenture.'],
    affirm: ['Affirmative covenants', 'Cam kết chủ động', 'Những việc tổ chức phát hành phải làm.'],
    negcov: ['Negative covenants', 'Cam kết hạn chế', 'Những việc tổ chức phát hành không được làm hoặc bị giới hạn.'],
    crossdef: ['Cross-default clause', 'Điều khoản vỡ nợ chéo', 'Vỡ nợ một khoản nợ khác cũng bị coi là vỡ nợ trái phiếu này.'],
    pari: ['Pari passu clause', 'Điều khoản ngang hàng', 'Trái phiếu được xếp ngang hàng với các khoản nợ cùng hạng khác.'],
    negpledge: ['Negative pledge', 'Cam kết không cầm cố', 'Không dùng tài sản làm đảm bảo cho chủ nợ khác theo cách làm giảm quyền của trái chủ hiện tại.'],
  };

  const practice = [
    { q: 'Một công cụ nợ doanh nghiệp có kỳ hạn gốc 9 tháng được xếp vào nhóm:', choices: ['Chứng khoán thị trường tiền tệ', 'Chứng khoán thị trường vốn', 'Trái phiếu vĩnh viễn'], answer: 0, explain: 'Kỳ hạn gốc từ 1 năm trở xuống là money market. B sai: capital market là kỳ hạn trên 1 năm. C sai: perpetual là không có ngày đáo hạn.' },
    { q: 'Nhà đầu tư mua trái phiếu tổng mệnh giá 500.000 USD với giá yết 101,25. Số tiền phải trả (bỏ qua lãi dồn tích) là:', choices: ['101.250 USD', '506.250 USD', '493.750 USD'], answer: 1, explain: 'Giá yết là % mệnh giá: 101,25% × 500.000 = 506.250. A là nhầm giá yết thành số tiền trên mỗi 100.000 mệnh giá. C là trừ 1,25% thay vì cộng: giá trên 100 nghĩa là trái phiếu premium.' },
    { q: 'Điều khoản nào sau đây là một negative covenant?', choices: ['Tổ chức phát hành phải duy trì bảo hiểm cho tài sản', 'Tổ chức phát hành phải nộp báo cáo tài chính kiểm toán hằng năm cho trustee', 'Tổ chức phát hành không được dùng tài sản đã đảm bảo cho đợt trái phiếu này để đảm bảo cho khoản vay khác'], answer: 2, explain: 'C là negative pledge, một điều không được làm. A và B là những việc phải làm, tức affirmative covenants.' },
    { q: 'Trái phiếu 4 năm, coupon 6% trả hằng năm, giá 103,50. Current yield gần nhất với:', choices: ['5,80%', '6,00%', '5,01%'], answer: 0, explain: 'Current yield = 6 / 103,50 = 5,80%. B là coupon rate (tính trên mệnh giá chứ không phải giá). C là YTM, thước đo có tính cả phần lỗ 3,50 khi giá kéo về mệnh giá.' },
    { q: 'Công ty phá sản, tài sản thanh lý 50 triệu. Nợ senior secured 30, senior unsecured 30, subordinated 10 (triệu). Theo thứ tự ưu tiên tuyệt đối, tỷ lệ thu hồi của nợ senior unsecured là:', choices: ['100%', '0%', '66,7%'], answer: 2, explain: 'Secured nhận đủ 30, còn 20 cho senior unsecured: 20 / 30 = 66,7%. Subordinated nhận 0. A là nhầm unsecured được trả ngang secured. B là nhầm unsecured xếp sau subordinated.' },
    { q: 'Điều khoản tùy chọn nào chủ yếu mang lại lợi ích cho tổ chức phát hành?', choices: ['Quyền bán lại (put)', 'Quyền mua lại trước hạn (call)', 'Quyền chuyển đổi sang cổ phiếu'], answer: 1, explain: 'Call cho tổ chức phát hành quyền trả nợ sớm, ví dụ khi lãi suất giảm, nên trái phiếu callable có giá thấp hơn. Put và chuyển đổi (A, C) là quyền của trái chủ.' },
    { q: 'Vai trò của trustee trong một đợt phát hành trái phiếu là:', choices: ['Giám sát tổ chức phát hành tuân thủ indenture và hành động thay mặt trái chủ', 'Bảo lãnh thanh toán lãi và gốc nếu tổ chức phát hành vỡ nợ', 'Quyết định lãi suất coupon của trái phiếu'], answer: 0, explain: 'Trustee có nghĩa vụ ủy thác đối với trái chủ, giám sát và thực thi hợp đồng. B sai: trustee không bảo lãnh, đó là credit enhancement của bên thứ ba. C sai: coupon do tổ chức phát hành và thị trường quyết định khi phát hành.' },
    { q: 'Với một trái phiếu đang giao dịch trên mệnh giá (premium), quan hệ nào là đúng?', choices: ['YTM > current yield > coupon rate', 'Coupon rate = current yield = YTM', 'Coupon rate > current yield > YTM'], answer: 2, explain: 'Giá > 100 nên current yield = coupon / giá nhỏ hơn coupon; YTM còn tính thêm khoản lỗ khi giá kéo về mệnh giá nên nhỏ nhất. A là trường hợp discount. B chỉ đúng khi giá = mệnh giá.' },
  ];

  window.LESSONS['FI-01'] = {
    moduleId: 'FI-01',
    calculator: 'BA II Plus',
    warmup: [
      'Nhớ lại QM-04: trái phiếu 3 năm coupon 4%, lãi suất thị trường 5% thì giá trên hay dưới mệnh giá? Vì sao?',
      'Theo bạn, người mua trái phiếu và người mua cổ phiếu của cùng một công ty khác nhau ở quyền lợi gì?',
      'Đoán trước: nếu bạn cho một công ty vay tiền, bạn muốn ghi những điều kiện gì vào hợp đồng để tự bảo vệ?',
    ],
    sections,
    glossary,
    practice,
    widgets: {},
    slides: [],
    wrapup: [
      'Liệt kê 7 đặc điểm cần đọc trên term sheet của một trái phiếu.',
      'Cho 3 ví dụ affirmative covenant và 3 ví dụ negative covenant.',
      'Vì sao trái phiếu callable có lợi suất cao hơn trái phiếu thường tương đương? Viết bằng một câu.',
    ],
  };
}());
