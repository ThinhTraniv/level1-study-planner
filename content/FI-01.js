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
<p>Tiếp theo: tab <b>Luyện tập</b> - 10 câu (rút ngẫu nhiên từ ngân hàng 30 câu, mỗi lần làm một bộ khác). Module sau (FI-02) đi vào các cấu trúc dòng tiền và quyền chọn.</p>`,
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
    { q: 'Một công cụ nợ doanh nghiệp có kỳ hạn gốc 9 tháng được xếp vào nhóm:', choices: ['Chứng khoán thị trường tiền tệ', 'Chứng khoán thị trường vốn', 'Trái phiếu vĩnh viễn'], answer: 0, explain: 'Kỳ hạn gốc từ 1 năm trở xuống là money market. Chứng khoán thị trường vốn sai: capital market là kỳ hạn trên 1 năm. Trái phiếu vĩnh viễn sai: perpetual là không có ngày đáo hạn.' },
    { q: 'Nhà đầu tư mua trái phiếu tổng mệnh giá 500.000 USD với giá yết 101,25. Số tiền phải trả (bỏ qua lãi dồn tích) là:', choices: ['101.250 USD', '506.250 USD', '493.750 USD'], answer: 1, explain: 'Giá yết là % mệnh giá: 101,25% × 500.000 = 506.250. Lựa chọn 101.250 USD là nhầm giá yết thành số tiền trên mỗi 100.000 mệnh giá. Lựa chọn 493.750 USD là trừ 1,25% thay vì cộng: giá trên 100 nghĩa là trái phiếu premium.' },
    { q: 'Điều khoản nào sau đây là một negative covenant?', choices: ['Tổ chức phát hành phải duy trì bảo hiểm cho tài sản', 'Tổ chức phát hành phải nộp báo cáo tài chính kiểm toán hằng năm cho trustee', 'Tổ chức phát hành không được dùng tài sản đã đảm bảo cho đợt trái phiếu này để đảm bảo cho khoản vay khác'], answer: 2, explain: 'Điều khoản cấm dùng tài sản đã đảm bảo cho đợt này để đảm bảo khoản vay khác là negative pledge, một điều không được làm. Duy trì bảo hiểm tài sản và nộp báo cáo tài chính kiểm toán là những việc phải làm, tức affirmative covenants.' },
    { q: 'Trái phiếu 4 năm, coupon 6% trả hằng năm, giá 103,50. Current yield gần nhất với:', choices: ['5,80%', '6,00%', '5,01%'], answer: 0, explain: 'Current yield = 6 / 103,50 = 5,80%. Lựa chọn 6,00% là coupon rate (tính trên mệnh giá chứ không phải giá). Lựa chọn 5,01% là YTM, thước đo có tính cả phần lỗ 3,50 khi giá kéo về mệnh giá.' },
    { q: 'Công ty phá sản, tài sản thanh lý 50 triệu. Nợ senior secured 30, senior unsecured 30, subordinated 10 (triệu). Theo thứ tự ưu tiên tuyệt đối, tỷ lệ thu hồi của nợ senior unsecured là:', choices: ['100%', '0%', '66,7%'], answer: 2, explain: 'Secured nhận đủ 30, còn 20 cho senior unsecured: 20 / 30 = 66,7%. Subordinated nhận 0. Lựa chọn 100% là nhầm unsecured được trả ngang secured. Lựa chọn 0% là nhầm unsecured xếp sau subordinated.' },
    { q: 'Điều khoản tùy chọn nào chủ yếu mang lại lợi ích cho tổ chức phát hành?', choices: ['Quyền bán lại (put)', 'Quyền mua lại trước hạn (call)', 'Quyền chuyển đổi sang cổ phiếu'], answer: 1, explain: 'Call cho tổ chức phát hành quyền trả nợ sớm, ví dụ khi lãi suất giảm, nên trái phiếu callable có giá thấp hơn. Quyền bán lại (put) và quyền chuyển đổi là quyền của trái chủ.' },
    { q: 'Vai trò của trustee trong một đợt phát hành trái phiếu là:', choices: ['Giám sát tổ chức phát hành tuân thủ indenture và hành động thay mặt trái chủ', 'Bảo lãnh thanh toán lãi và gốc nếu tổ chức phát hành vỡ nợ', 'Quyết định lãi suất coupon của trái phiếu'], answer: 0, explain: 'Trustee có nghĩa vụ ủy thác đối với trái chủ, giám sát và thực thi hợp đồng. Phương án "bảo lãnh thanh toán lãi và gốc" sai: trustee không bảo lãnh, đó là credit enhancement của bên thứ ba. Phương án "quyết định lãi suất coupon" sai: coupon do tổ chức phát hành và thị trường quyết định khi phát hành.' },
    { q: 'Với một trái phiếu đang giao dịch trên mệnh giá (premium), quan hệ nào là đúng?', choices: ['YTM > current yield > coupon rate', 'Coupon rate = current yield = YTM', 'Coupon rate > current yield > YTM'], answer: 2, explain: 'Giá > 100 nên current yield = coupon / giá nhỏ hơn coupon; YTM còn tính thêm khoản lỗ khi giá kéo về mệnh giá nên nhỏ nhất. Thứ tự YTM > current yield > coupon rate là trường hợp discount. Ba thước đo bằng nhau chỉ đúng khi giá = mệnh giá.' },
    { q: "Trái phiếu mệnh giá 1.000 USD, coupon 4,5%/năm trả theo quý. Tiền coupon mỗi kỳ là:", choices: ["45,00 USD", "11,25 USD", "22,50 USD"], answer: 1, explain: "Coupon mỗi kỳ = 4,5% × 1.000 / 4 = 11,25 USD. Lựa chọn 45,00 USD là coupon cả năm, quên chia cho số kỳ. Lựa chọn 22,50 USD chia cho 2, tức nhầm sang trả nửa năm." },
    { q: "Trái phiếu mệnh giá 1.000 USD, coupon 6%/năm trả nửa năm một lần, kỳ hạn 7 năm. Tổng số tiền trái chủ nhận được đến đáo hạn (chưa chiết khấu) là:", choices: ["420 USD", "1.420 USD", "1.840 USD"], answer: 1, explain: "Có 7 × 2 = 14 kỳ, mỗi kỳ 6% × 1.000 / 2 = 30 USD. Tổng = 14 × 30 + 1.000 = 1.420 USD. Lựa chọn 420 USD quên khoản gốc trả khi đáo hạn. Lựa chọn 1.840 USD dùng 14 kỳ nhưng lại trả cả coupon năm 60 USD mỗi kỳ." },
    { q: "Mô tả nào đúng nhất về một trái phiếu không trả lãi (zero-coupon bond)?", choices: ["Trả coupon bằng lãi suất tham chiếu cộng một biên cố định", "Phát hành trên mệnh giá và trả đúng mệnh giá khi đáo hạn", "Phát hành dưới mệnh giá và trả đúng mệnh giá khi đáo hạn"], answer: 2, explain: "Zero-coupon không trả lãi định kỳ; lợi tức của nhà đầu tư là phần chênh giữa giá mua dưới mệnh giá và mệnh giá nhận lại. Phương án \"lãi suất tham chiếu cộng một biên\" mô tả FRN. Phương án \"phát hành trên mệnh giá\" sai: không có coupon thì mua trên mệnh giá sẽ chắc chắn lỗ, nên không ai mua." },
    { q: "Một FRN mệnh giá 1.000.000 USD trả coupon theo quý bằng MRR + 150 điểm cơ bản. Đầu kỳ, MRR là 3,20%/năm. Tiền coupon cho kỳ quý đó là:", choices: ["11.750 USD", "47.000 USD", "8.000 USD"], answer: 0, explain: "Lãi suất coupon năm = 3,20% + 1,50% = 4,70%; mỗi quý = 4,70% / 4 × 1.000.000 = 11.750 USD. Lựa chọn 47.000 USD là coupon cả năm, quên chia 4. Lựa chọn 8.000 USD chỉ dùng MRR, quên cộng biên 150 điểm cơ bản." },
    { q: "Một quỹ mua trái phiếu có tổng mệnh giá 3.000.000 USD với giá yết 97,25. Số tiền quỹ phải trả (bỏ qua lãi dồn tích) là:", choices: ["3.082.500 USD", "2.917.500 USD", "291.750 USD"], answer: 1, explain: "Giá yết là phần trăm mệnh giá: 97,25% × 3.000.000 = 2.917.500 USD, trái phiếu đang bán dưới mệnh giá. Lựa chọn 3.082.500 USD cộng 2,75% thay vì trừ, như thể giá trên mệnh giá. Lựa chọn 291.750 USD sai một chữ số thập phân khi đổi phần trăm." },
    { q: "Trái phiếu coupon 5%/năm trả hằng năm, đang có giá 92,00. Current yield gần nhất với:", choices: ["5,00%", "4,60%", "5,43%"], answer: 2, explain: "Current yield = coupon năm / giá = 5 / 92 = 5,43%. Lựa chọn 5,00% là coupon rate, tính trên mệnh giá chứ không trên giá. Lựa chọn 4,60% nhân coupon với giá thay vì chia. Với trái phiếu discount, current yield phải lớn hơn coupon rate." },
    { q: "Trái phiếu 5 năm, coupon 4% trả hằng năm, giá 95,00. Lợi suất đáo hạn (YTM) gần nhất với:", choices: ["5,16%", "4,21%", "4,00%"], answer: 0, explain: "Giải N = 5, PV = -95, PMT = 4, FV = 100 → I/Y = 5,16%. Lựa chọn 4,21% là current yield 4 / 95, bỏ qua khoản lãi 5 khi giá kéo về mệnh giá. Lựa chọn 4,00% là coupon rate. Với trái phiếu discount: coupon < current yield < YTM." },
    { q: "Công ty phá sản, tài sản thanh lý được 100 triệu USD. Nợ: senior secured 50, senior unsecured 40, subordinated 25 (triệu USD). Theo thứ tự ưu tiên tuyệt đối, tỷ lệ thu hồi của nợ subordinated là:", choices: ["87,0%", "40,0%", "0,0%"], answer: 1, explain: "Secured nhận đủ 50, còn 50; senior unsecured nhận đủ 40, còn 10 cho subordinated: 10 / 25 = 40,0%. Lựa chọn 87,0% chia đều tài sản theo tỷ lệ cho mọi chủ nợ (100 / 115), bỏ qua thứ tự ưu tiên. Lựa chọn 0,0% mặc định nợ thứ cấp không nhận gì, nhưng ở đây vẫn còn tài sản sau khi trả nợ senior." },
    { q: "So với một trái phiếu thường (option-free) tương đương, trái phiếu có quyền bán lại (putable bond) nhiều khả năng có:", choices: ["Lợi suất cao hơn", "Lợi suất bằng nhau vì quyền put có lợi cho tổ chức phát hành", "Lợi suất thấp hơn"], answer: 2, explain: "Quyền put thuộc trái chủ: họ được bán lại trái phiếu cho tổ chức phát hành, thường khi lãi suất tăng. Trái chủ có thêm quyền nên chấp nhận lợi suất thấp hơn (giá cao hơn). Phương án \"lợi suất cao hơn\" là tác động của quyền call. Phương án nói put có lợi cho tổ chức phát hành là nhầm người nắm quyền." },
    { q: "Nhà đầu tư chấp nhận coupon thấp hơn trên trái phiếu chuyển đổi (convertible bond) so với trái phiếu thường cùng tổ chức phát hành chủ yếu vì:", choices: ["Trái chủ có quyền đổi trái phiếu sang cổ phiếu và hưởng lợi khi giá cổ phiếu tăng", "Tổ chức phát hành có quyền mua lại trái phiếu trước hạn", "Trái phiếu chuyển đổi luôn có thứ tự ưu tiên cao hơn nợ có bảo đảm"], answer: 0, explain: "Quyền chuyển đổi là quyền chọn của trái chủ, có giá trị, nên trái chủ \"trả\" cho nó bằng coupon thấp hơn. Phương án nói tổ chức phát hành có quyền mua lại mô tả call, khiến nhà đầu tư đòi lợi suất cao hơn chứ không thấp hơn. Phương án về thứ tự ưu tiên sai: trái phiếu chuyển đổi thường là nợ không bảo đảm, thậm chí thứ cấp." },
    { q: "Trái phiếu callable có lợi suất 6,20%, trong khi trái phiếu thường tương đương của cùng tổ chức phát hành có lợi suất 5,75%. Chênh lệch 45 điểm cơ bản chủ yếu bù đắp cho nhà đầu tư vì:", choices: ["Nhà đầu tư có quyền bán lại trái phiếu khi lãi suất tăng", "Tổ chức phát hành có quyền trả nợ sớm khi lãi suất giảm", "Trái phiếu callable có thứ tự ưu tiên thấp hơn khi phá sản"], answer: 1, explain: "Call là quyền của tổ chức phát hành: khi lãi suất giảm, họ mua lại trái phiếu và nhà đầu tư phải tái đầu tư ở lãi suất thấp. Nhà đầu tư đòi thêm lợi suất để bù. Phương án \"quyền bán lại\" mô tả put, làm lợi suất thấp hơn. Phương án về thứ tự ưu tiên sai: quyền call không thay đổi seniority, hai trái phiếu được giả định tương đương ở mọi điểm khác." },
    { q: "Nội dung nào ít có khả năng được ghi trong hợp đồng phát hành trái phiếu (indenture) nhất?", choices: ["Mục đích sử dụng vốn huy động", "Các cam kết (covenants) của tổ chức phát hành", "Giá giao dịch hằng ngày của trái phiếu trên thị trường thứ cấp"], answer: 2, explain: "Indenture là hợp đồng pháp lý ký khi phát hành, ghi các điều khoản cố định: đặc điểm trái phiếu, mục đích sử dụng vốn, nguồn trả nợ, tài sản đảm bảo, credit enhancement, covenants. Giá thị trường thay đổi hằng ngày nên không thể là điều khoản hợp đồng. Mục đích sử dụng vốn và covenants đều là nội dung chuẩn của indenture." },
    { q: "Một thành phố phát hành trái phiếu để xây cầu thu phí, và trái phiếu chỉ được trả từ tiền phí qua cầu. Nguồn trả nợ của trái phiếu này là:", choices: ["Doanh thu của dự án (revenue bond)", "Nguồn thuế chung của thành phố (general obligation bond)", "Khả năng in tiền nội tệ"], answer: 0, explain: "Trái phiếu được trả từ doanh thu của một dự án cụ thể là revenue bond. Phương án general obligation bond sai vì trái phiếu đó được trả từ nguồn thuế chung của chính quyền địa phương. Khả năng in tiền nội tệ là đặc điểm của chính phủ trung ương, không phải thành phố." },
    { q: "Một ngân hàng chuyển một nhóm khoản vay mua ô tô sang một pháp nhân đặc biệt (SPE), pháp nhân này phát hành chứng khoán đảm bảo bằng tài sản (ABS). Nguồn trả nợ chính của ABS là:", choices: ["Dòng tiền hoạt động của ngân hàng chuyển giao tài sản", "Dòng tiền thu từ nhóm khoản vay mua ô tô", "Nguồn thu thuế của chính phủ"], answer: 1, explain: "Với chứng khoán hóa, trái chủ được trả từ dòng tiền của nhóm tài sản cơ sở do SPE nắm giữ, tách biệt khỏi ngân hàng gốc. Phương án \"dòng tiền hoạt động của ngân hàng\" là nguồn trả nợ của trái phiếu doanh nghiệp thông thường. Thuế là nguồn trả nợ của chính phủ." },
    { q: "Điều khoản quy định rằng nếu tổ chức phát hành vỡ nợ bất kỳ khoản nợ nào khác thì cũng coi như vỡ nợ trái phiếu này (cross-default) được CFA xếp vào loại:", choices: ["Negative covenant", "Credit enhancement", "Affirmative covenant"], answer: 2, explain: "Cross-default và pari passu được xếp vào affirmative covenants: chúng không cấm tổ chức phát hành làm việc gì. Negative covenant là những điều cấm hoặc giới hạn như vay thêm, negative pledge, chia cổ tức. Credit enhancement là hỗ trợ tín dụng như bảo lãnh của bên thứ ba hay tài sản đảm bảo, không phải covenant." },
    { q: "Điều khoản pari passu trong indenture có nghĩa là:", choices: ["Trái phiếu được xếp hạng ưu tiên ngang với các khoản nợ cùng hạng khác của tổ chức phát hành", "Tổ chức phát hành không được cầm cố tài sản cho chủ nợ khác", "Trái phiếu được ưu tiên trả trước mọi khoản nợ khác của tổ chức phát hành"], answer: 0, explain: "Pari passu nghĩa là \"ngang hàng\": trái phiếu có cùng thứ tự ưu tiên với các khoản nợ cùng hạng khác. Phương án về cầm cố tài sản mô tả negative pledge, một negative covenant. Phương án \"ưu tiên trả trước mọi khoản nợ\" sai: pari passu không đẩy trái phiếu lên trên các khoản nợ khác." },
    { q: "Indenture yêu cầu EBIT / chi phí lãi vay không thấp hơn 4,0 lần. Công ty có EBIT 200 triệu USD, chi phí lãi vay hiện tại 30 triệu USD. Nếu vay thêm với lãi suất 8%, số nợ vay thêm tối đa mà không vi phạm covenant là:", choices: ["625 triệu USD", "250 triệu USD", "20 triệu USD"], answer: 1, explain: "Chi phí lãi vay tối đa = 200 / 4,0 = 50; lãi vay được tăng thêm 50 - 30 = 20; nợ thêm tối đa = 20 / 8% = 250 triệu USD. Lựa chọn 625 triệu USD quên trừ chi phí lãi vay hiện có (50 / 8%). Lựa chọn 20 triệu USD là phần lãi vay được tăng thêm, chưa đổi ra số nợ." },
    { q: "Indenture giới hạn tổng nợ / EBITDA tối đa 3,0 lần. Công ty có tổng nợ 450 triệu và EBITDA 175 triệu. Nếu nợ không đổi, EBITDA giảm bao nhiêu phần trăm thì công ty bắt đầu vi phạm covenant?", choices: ["16,67%", "85,71%", "14,29%"], answer: 2, explain: "EBITDA tối thiểu = 450 / 3,0 = 150, tức được giảm 175 - 150 = 25; tỷ lệ giảm = 25 / 175 = 14,29%. Lựa chọn 16,67% chia 25 cho 150, sai mẫu số (phải chia cho EBITDA hiện tại). Lựa chọn 85,71% là tỷ số 150 / 175, tức mức EBITDA còn lại chứ không phải mức giảm." },
    { q: "Trong indenture của một trái phiếu doanh nghiệp, cam kết nào sau đây được xếp vào loại negative covenant?", choices: ["Tổ chức phát hành không được chia cổ tức vượt quá 40% lợi nhuận sau thuế", "Tổ chức phát hành phải nộp thuế và tuân thủ pháp luật", "Tổ chức phát hành phải bảo dưỡng tài sản ở tình trạng tốt"], answer: 0, explain: "Giới hạn chia cổ tức là điều tổ chức phát hành không được làm (vượt ngưỡng), giúp giữ tiền trong doanh nghiệp để trả nợ, nên là negative covenant. Nộp thuế, tuân thủ pháp luật và bảo dưỡng tài sản là những việc phải làm, tức affirmative covenants." },
    { q: "Hai trái phiếu của cùng một công ty giống hệt nhau, chỉ khác là trái phiếu X có bộ negative covenants chặt hơn nhiều so với trái phiếu Y. Nhiều khả năng:", choices: ["Trái phiếu X có lợi suất cao hơn vì tổ chức phát hành bị hạn chế hoạt động", "Trái phiếu X có lợi suất thấp hơn trái phiếu Y", "Hai trái phiếu có lợi suất bằng nhau vì covenants không ảnh hưởng đến rủi ro tín dụng"], answer: 1, explain: "Covenants chặt hơn bảo vệ trái chủ tốt hơn (hạn chế vay thêm, chia cổ tức, bán tài sản), làm giảm rủi ro tín dụng, nên trái chủ chấp nhận lợi suất thấp hơn. Phương án lợi suất cao hơn nhìn từ góc tổ chức phát hành: họ mất linh hoạt, nhưng đó là cái giá họ trả để vay rẻ hơn. Phương án nói covenants không ảnh hưởng rủi ro là sai." },
    { q: "Một trái phiếu doanh nghiệp được công ty mẹ có xếp hạng tín nhiệm cao bảo lãnh thanh toán lãi và gốc. Khoản bảo lãnh này là một ví dụ của:", choices: ["Affirmative covenant", "Embedded option (quyền chọn gắn kèm)", "Credit enhancement (tăng cường tín dụng)"], answer: 2, explain: "Bảo lãnh của bên thứ ba là một hình thức credit enhancement, được ghi trong indenture, giúp giảm rủi ro tín dụng của trái phiếu. Affirmative covenant là cam kết của chính tổ chức phát hành về việc phải làm, không phải sự hỗ trợ từ bên khác. Embedded option là quyền như call, put, chuyển đổi, làm thay đổi dòng tiền." },
    { q: "Nhà đầu tư mua một trái phiếu mệnh giá 1.000 USD, coupon 5%/năm trả hằng năm, với giá yết 98,50. Tiền coupon nhà đầu tư nhận mỗi năm là:", choices: ["50,00 USD", "49,25 USD", "50,76 USD"], answer: 0, explain: "Coupon luôn tính trên mệnh giá: 5% × 1.000 = 50,00 USD, bất kể giá mua. Lựa chọn 49,25 USD tính coupon trên giá mua 985 USD. Lựa chọn 50,76 USD áp current yield 5,08% lên mệnh giá, nhầm giữa lợi suất và tiền coupon." },
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
