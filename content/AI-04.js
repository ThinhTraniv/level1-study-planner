// Bài giảng AI-04 - Real Estate and Infrastructure (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t, frac } = window.CFAH;

  const sections = [
    {
      title: '1. Bức tranh lớn: tài sản thực tạo ra dòng tiền',
      minutes: 8,
      html: `
<p>Bất động sản (real estate) và hạ tầng (infrastructure) là hai nhóm ${t('realasset', 'tài sản thực (real assets)')} lớn nhất trong danh mục đầu tư thay thế. Điểm chung: đó là tài sản vật chất, sống lâu, cần vốn lớn, và tạo ra <b>dòng tiền định kỳ</b> (tiền thuê, phí sử dụng) cộng với khả năng <b>tăng giá</b> theo thời gian.</p>
<div class="key">Bốn LOS của module chia thành hai cặp giống nhau:
<ul>
<li><b>LOS 1, LOS 2 (bất động sản)</b>: đặc điểm của bất động sản (loại tài sản, hình thức sở hữu, tính chất riêng) và đặc điểm đầu tư (nguồn lợi nhuận, rủi ro, đa dạng hóa, định giá).</li>
<li><b>LOS 3, LOS 4 (hạ tầng)</b>: đặc điểm của hạ tầng (phân loại, giai đoạn, nguồn doanh thu) và đặc điểm đầu tư (hình thức, rủi ro, lợi nhuận, đa dạng hóa).</li>
</ul></div>
<p>Một cách nhớ: <b>bất động sản giống lai giữa trái phiếu và cổ phiếu</b>. Hợp đồng thuê dài hạn tạo dòng tiền đều như coupon (phần giống trái phiếu); giá trị tài sản lên xuống theo kinh tế và thị trường (phần giống cổ phiếu). Hạ tầng còn "giống trái phiếu" hơn nữa, vì nhiều dự án có doanh thu được hợp đồng hoặc nhà nước bảo đảm trong hàng chục năm.</p>
<p>Cấu trúc bài: phần 2 - 3 mô tả bất động sản (loại tài sản, hình thức, REIT, trực tiếp và gián tiếp), phần 4 nói về lợi nhuận, rủi ro và chỉ số, phần 5 là phần tính toán duy nhất (định giá bằng ${t('caprate', 'cap rate')} và đòn bẩy), phần 6 - 7 dành cho hạ tầng, phần 8 tóm tắt bẫy.</p>
<p class="tip">Phí quản lý, phí thưởng, waterfall và cách tính lợi nhuận sau phí của quỹ đã học ở AI-01 và AI-02; ở đây không nhắc lại. Quỹ bất động sản tư nhân và quỹ hạ tầng dùng đúng các cấu trúc đó (GP/LP, hurdle, carried interest).</p>`,
    },
    {
      title: '2. Bất động sản: loại tài sản và bốn góc đầu tư',
      minutes: 14,
      html: `
<h4>a) Loại bất động sản</h4>
<table class="plain"><thead><tr><th>Nhóm</th><th>Ví dụ</th><th>Đặc điểm dòng tiền</th></tr></thead><tbody>
<tr><td><b>Nhà ở</b> (residential)</td><td>Nhà riêng chủ sở hữu tự ở, nhà cho thuê</td><td>Phần lớn do hộ gia đình sở hữu, mua bằng vay thế chấp. Với hộ gia đình đây là khoản đầu tư lớn nhất.</td></tr>
<tr><td rowspan="5"><b>Thương mại</b> (commercial)</td><td>Văn phòng (office)</td><td>Hợp đồng thuê dài (thường 5 - 10 năm), phụ thuộc việc làm văn phòng</td></tr>
<tr><td>Công nghiệp, kho vận (industrial, logistics)</td><td>Phụ thuộc thương mại điện tử, sản xuất, xuất nhập khẩu</td></tr>
<tr><td>Bán lẻ (retail)</td><td>Có thể có ${t('pctlease', 'tiền thuê theo doanh thu (percentage rent)')}, nhạy với chi tiêu tiêu dùng</td></tr>
<tr><td>Căn hộ cho thuê (multifamily)</td><td>Hợp đồng ngắn (khoảng 1 năm), nhu cầu ở ổn định theo dân số</td></tr>
<tr><td>Khách sạn (hospitality)</td><td>"Hợp đồng" theo đêm, biến động mạnh nhất theo chu kỳ kinh tế</td></tr>
</tbody></table>
<p>Ngoài ra còn bất động sản chuyên biệt: y tế, trung tâm dữ liệu, kho lạnh, nhà dưỡng lão... Đất trống, đất rừng, đất nông nghiệp thuộc module AI-05.</p>
<p class="tip">Quy luật chung: <b>hợp đồng thuê càng ngắn thì dòng tiền càng nhạy với kinh tế</b>. Khách sạn (theo đêm) rủi ro nhất; văn phòng, kho vận có hợp đồng dài nên ổn định hơn. Căn hộ cho thuê dù hợp đồng ngắn nhưng nhu cầu ở là thiết yếu, nên khá ổn định.</p>

<h4>b) Hợp đồng thuê: ai trả chi phí vận hành?</h4>
<ul>
<li>${t('grosslease', 'Gross lease')}: người thuê trả một khoản cố định, <b>chủ nhà</b> chịu chi phí vận hành (bảo trì, thuế, bảo hiểm). Chủ nhà chịu rủi ro chi phí tăng.</li>
<li>${t('netlease', 'Net lease')}: <b>người thuê</b> trả tiền thuê cộng (phần lớn hoặc toàn bộ) chi phí vận hành. Dòng tiền của chủ nhà ổn định hơn, tiền thuê danh nghĩa thấp hơn.</li>
</ul>

<h4>c) Bốn góc đầu tư bất động sản</h4>
<p>Hai câu hỏi: đầu tư <b>vốn chủ (equity)</b> hay <b>cho vay (debt)</b>? Qua thị trường <b>tư nhân (private)</b> hay <b>niêm yết (public)</b>?</p>
<table class="plain"><thead><tr><th></th><th>Equity (chủ sở hữu)</th><th>Debt (chủ nợ)</th></tr></thead><tbody>
<tr><td><b>Private</b></td><td>Sở hữu trực tiếp, liên doanh (joint venture), quỹ bất động sản tư nhân (private RE fund)</td><td>Cho vay thế chấp trực tiếp (mortgage), khoản vay xây dựng, nợ mezzanine</td></tr>
<tr><td><b>Public</b></td><td>Cổ phiếu ${t('reit', 'REIT')}, ${t('reoc', 'REOC')}, ETF bất động sản</td><td>${t('mbs', 'Chứng khoán đảm bảo bằng thế chấp (MBS)')}: RMBS (nhà ở), ${t('cmbs', 'CMBS')} (thương mại), trái phiếu có bảo đảm (covered bond)</td></tr>
</tbody></table>
<p>Người cho vay nhận lãi cố định và có tài sản bảo đảm, nên lợi nhuận thấp hơn và ít biến động hơn người sở hữu; người sở hữu nhận phần còn lại (tiền thuê trừ chi phí, trừ lãi vay) cộng phần tăng giá.</p>
<div class="example"><div class="ex-h">Ví dụ 2.1 - Xếp vào góc nào?</div>
<p>(a) Một quỹ hưu trí mua cả tòa văn phòng; (b) một nhà đầu tư cá nhân mua chứng chỉ quỹ ETF theo chỉ số REIT; (c) một ngân hàng cho chủ đầu tư vay để xây trung tâm thương mại; (d) một công ty bảo hiểm mua trái phiếu CMBS trên thị trường.</p>
<details><summary>Xem lời giải</summary>
<p>(a) Private equity (sở hữu trực tiếp). (b) Public equity. (c) Private debt. (d) Public debt.</p></details></div>`,
    },
    {
      title: '3. Đặc điểm riêng của bất động sản; trực tiếp hay gián tiếp; REIT',
      minutes: 15,
      html: `
<h4>a) Tám đặc điểm làm bất động sản khác cổ phiếu, trái phiếu</h4>
<table class="plain"><thead><tr><th>Đặc điểm</th><th>Ý nghĩa với nhà đầu tư</th></tr></thead><tbody>
<tr><td>${t('hetero', 'Không đồng nhất (heterogeneity)')}</td><td>Không có hai bất động sản giống hệt: vị trí, kiến trúc, người thuê đều khác. Khó so sánh, khó định giá.</td></tr>
<tr><td>Giá trị mỗi đơn vị lớn, không chia nhỏ được</td><td>Cần vốn lớn; danh mục ít tài sản thì rủi ro tập trung.</td></tr>
<tr><td>Cần quản lý nhiều (management intensive)</td><td>Phải tìm người thuê, bảo trì, thu tiền; nhà đầu tư trực tiếp phải tự làm hoặc thuê đơn vị quản lý.</td></tr>
<tr><td>Chi phí giao dịch cao</td><td>Môi giới, pháp lý, thuế chuyển nhượng, thẩm định, khảo sát.</td></tr>
<tr><td>Khấu hao và lỗi thời (depreciation, obsolescence)</td><td>Công trình xuống cấp theo thời gian, có thể lỗi thời về công năng (văn phòng cũ không phù hợp làm việc kết hợp).</td></tr>
<tr><td>Nhạy với thị trường tín dụng</td><td>Phần lớn giao dịch dùng vay nợ; lãi suất tăng hoặc tín dụng thắt chặt làm giá giảm.</td></tr>
<tr><td>Kém thanh khoản (illiquidity)</td><td>Bán mất nhiều tháng; giá bán phụ thuộc người mua cụ thể.</td></tr>
<tr><td>Khó xác định giá trị</td><td>Ít giao dịch, giá thường dựa vào ${t('appraisal', 'thẩm định (appraisal)')} thay vì giá khớp lệnh.</td></tr>
</tbody></table>

<h4>b) Đầu tư trực tiếp và gián tiếp</h4>
<table class="plain"><thead><tr><th>Trực tiếp (direct)</th><th>Gián tiếp (indirect: REIT, quỹ, cổ phiếu công ty bất động sản)</th></tr></thead><tbody>
<tr><td>(+) <b>Kiểm soát</b>: tự quyết định cho thuê, cải tạo, bán</td><td>(+) Thanh khoản cao hơn (nhất là REIT niêm yết), vốn nhỏ cũng tham gia được</td></tr>
<tr><td>(+) Lợi ích thuế (khấu trừ khấu hao, lãi vay), chọn đúng tài sản muốn đa dạng hóa</td><td>(+) Quản lý chuyên nghiệp, danh mục đa dạng nhiều tài sản</td></tr>
<tr><td>(-) Kém thanh khoản, giá thiếu minh bạch</td><td>(-) Không có quyền kiểm soát tài sản cụ thể</td></tr>
<tr><td>(-) Quản lý phức tạp, cần hiểu biết chuyên sâu về thị trường địa phương</td><td>(-) Có phí quản lý; REIT niêm yết biến động theo thị trường cổ phiếu</td></tr>
<tr><td>(-) Vốn ban đầu lớn, rủi ro tập trung nếu chỉ có một vài tài sản</td><td>(-) Đòn bẩy và chiến lược do người quản lý quyết định</td></tr>
</tbody></table>

<h4>c) REIT và REOC</h4>
<p>${t('reit', 'REIT (real estate investment trust)')} là công ty hoặc quỹ sở hữu (equity REIT) hoặc cho vay (mortgage REIT) bất động sản tạo thu nhập. Đổi lại việc <b>phân phối phần lớn thu nhập chịu thuế</b> cho nhà đầu tư (ở Mỹ ít nhất 90%), REIT được <b>miễn thuế thu nhập doanh nghiệp</b> trên phần đã phân phối, nên tránh được đánh thuế hai lần.</p>
<ul>
<li>Hệ quả 1: REIT có <b>tỷ suất cổ tức cao</b>, nhưng giữ lại ít lợi nhuận, nên muốn mở rộng thường phải phát hành thêm cổ phiếu hoặc vay nợ.</li>
<li>Hệ quả 2: thu nhập phải đến chủ yếu từ cho thuê, lãi thế chấp; hoạt động phát triển dự án bị hạn chế.</li>
</ul>
<p>${t('reoc', 'REOC (real estate operating company)')} là công ty bất động sản bình thường: <b>không được ưu đãi thuế</b> nhưng được giữ lại lợi nhuận và tự do phát triển, mua bán dự án.</p>
<p class="warn"><b>Bẫy:</b> mortgage REIT là REIT đầu tư vào <b>khoản vay</b> (góc public debt về bản chất kinh tế, nhưng nhà đầu tư nắm cổ phiếu). Lợi nhuận của nó nhạy với lãi suất như trái phiếu, khác hẳn equity REIT.</p>`,
    },
    {
      title: '4. Đặc điểm đầu tư bất động sản: lợi nhuận, rủi ro, đa dạng hóa',
      minutes: 15,
      html: `
<h4>a) Hai nguồn lợi nhuận</h4>
<div class="formula">Lợi nhuận = ${frac('Thu nhập ròng (NOI) + (Giá cuối kỳ - Giá đầu kỳ)', 'Giá đầu kỳ')}</div>
<ul>
<li><b>Thu nhập</b> từ cho thuê: ổn định nhờ hợp đồng, giống coupon.</li>
<li><b>Tăng giá vốn</b> (capital appreciation): theo tăng trưởng tiền thuê, cung cầu khu vực, lãi suất.</li>
</ul>
<p>Bất động sản thường được xem là ${t('inflhedge', 'công cụ chống lạm phát')} <b>một phần</b>: nhiều hợp đồng có điều khoản tăng tiền thuê theo CPI, và chi phí xây mới (giá trị thay thế) tăng theo lạm phát. Nhưng khi lạm phát đi kèm lãi suất tăng mạnh, giá trị có thể giảm trong ngắn hạn.</p>

<h4>b) Chiến lược theo mức rủi ro</h4>
<table class="plain"><thead><tr><th>Chiến lược</th><th>Tài sản điển hình</th><th>Nguồn lợi nhuận chính</th><th>Đòn bẩy, rủi ro</th></tr></thead><tbody>
<tr><td>${t('core', 'Core')}</td><td>Tòa nhà đã ổn định, tỷ lệ lấp đầy cao, người thuê tốt, vị trí đẹp</td><td>Thu nhập cho thuê</td><td>Thấp</td></tr>
<tr><td>Core-plus</td><td>Như core nhưng cần cải thiện nhỏ</td><td>Thu nhập, một ít tăng giá</td><td>Thấp - trung bình</td></tr>
<tr><td>${t('valueadd', 'Value-add')}</td><td>Cần cải tạo, tái định vị, cho thuê lại</td><td>Tăng giá sau cải tạo</td><td>Trung bình - cao</td></tr>
<tr><td>${t('opport', 'Opportunistic')}</td><td>Phát triển mới, tài sản bỏ trống, tài sản khó khăn (distressed)</td><td>Gần như toàn bộ là tăng giá</td><td>Cao nhất</td></tr>
</tbody></table>
<p>Chu kỳ sống của một dự án: <b>phát triển → cho thuê → ổn định → xuống cấp, cải tạo</b>. Giai đoạn càng sớm thì rủi ro càng cao (chưa có người thuê, rủi ro chi phí xây dựng và thời gian).</p>

<h4>c) Rủi ro chính</h4>
<ul>
<li>Điều kiện kinh doanh: suy thoái làm giảm nhu cầu thuê, tăng tỷ lệ trống.</li>
<li>Độ trễ khi phát triển (lead time): từ lúc quyết định xây đến lúc hoàn thành, thị trường có thể đã đổi chiều.</li>
<li>Chi phí và khả năng tiếp cận vốn; lãi suất; đòn bẩy (phần 5).</li>
<li>Lạm phát bất ngờ (nếu hợp đồng không điều chỉnh theo lạm phát), nhân khẩu học, chính sách quy hoạch, môi trường.</li>
<li>Thanh khoản kém, khó định giá, rủi ro người thuê vỡ nợ, rủi ro người quản lý.</li>
</ul>

<h4>d) Chỉ số bất động sản và đa dạng hóa</h4>
<table class="plain"><thead><tr><th>Loại chỉ số</th><th>Cách xây dựng</th><th>Vấn đề</th></tr></thead><tbody>
<tr><td>${t('appraisalidx', 'Appraisal-based')}</td><td>Dựa trên giá trị thẩm định định kỳ của các tài sản</td><td>Thẩm định dựa vào giá cũ nên bị ${t('smoothing', 'làm trơn (smoothing)')}, trễ so với thị trường</td></tr>
<tr><td>Transaction-based</td><td>Dựa trên giao dịch thật: repeat sales (tài sản bán nhiều lần), hedonic (hồi quy theo đặc điểm)</td><td>Cần đủ giao dịch; tài sản bán ra có thể không đại diện</td></tr>
<tr><td>REIT index</td><td>Giá cổ phiếu REIT niêm yết</td><td>Phản ánh nhanh nhưng biến động như cổ phiếu, chịu đòn bẩy của REIT</td></tr>
</tbody></table>
<p class="warn"><b>Bẫy quan trọng:</b> chỉ số dựa trên thẩm định <b>đánh giá thấp độ biến động</b> và <b>đánh giá thấp tương quan</b> với cổ phiếu, trái phiếu. Vì vậy lợi ích đa dạng hóa của bất động sản tư nhân trông "đẹp hơn thực tế". Ngược lại, REIT trong ngắn hạn tương quan khá cao với thị trường cổ phiếu, nhưng trong dài hạn lợi nhuận REIT bám sát bất động sản tư nhân.</p>
<p>Nhìn chung, bất động sản có tương quan <b>thấp đến trung bình</b> với cổ phiếu và trái phiếu, nên thêm vào danh mục truyền thống vẫn giúp đa dạng hóa, kể cả sau khi đã điều chỉnh hiện tượng làm trơn.</p>`,
    },
    {
      title: '5. Định giá bất động sản: cap rate, ba phương pháp và đòn bẩy',
      minutes: 18,
      html: `
<h4>a) Ba phương pháp định giá</h4>
<table class="plain"><thead><tr><th>Phương pháp</th><th>Ý tưởng</th><th>Phù hợp khi</th></tr></thead><tbody>
<tr><td>${t('incomeapp', 'Income approach')}</td><td>Giá trị = PV của thu nhập tương lai: ${t('directcap', 'direct capitalization')} hoặc DCF</td><td>Bất động sản tạo thu nhập (văn phòng, kho, căn hộ cho thuê)</td></tr>
<tr><td>${t('costapp', 'Cost approach')}</td><td>Giá trị đất + chi phí xây mới (replacement cost) - hao mòn</td><td>Tài sản đặc thù ít giao dịch (bệnh viện, trường học), tài sản mới</td></tr>
<tr><td>${t('salesapp', 'Sales comparison approach')}</td><td>So với giá bán của tài sản tương tự gần đây, điều chỉnh khác biệt (diện tích, vị trí, tuổi)</td><td>Thị trường nhiều giao dịch, nhất là nhà ở</td></tr>
</tbody></table>

<h4>b) NOI và cap rate</h4>
<p>${t('noi', 'NOI (net operating income)')} là thu nhập từ vận hành tài sản, <b>trước</b> lãi vay, thuế thu nhập và khấu hao:</p>
<div class="formula">NOI = Tiền thuê tiềm năng - Phần trống và nợ khó đòi - Chi phí vận hành</div>
<p>Tiền thuê tiềm năng trừ phần trống gọi là ${t('egi', 'thu nhập gộp hiệu dụng (EGI)')}. Chi phí vận hành gồm bảo trì, thuế tài sản, bảo hiểm, phí quản lý; <b>không</b> gồm lãi vay và khấu hao.</p>
<div class="formula">Cap rate = ${frac('NOI năm tới', 'Giá trị')} &nbsp;&nbsp;⇔&nbsp;&nbsp; Giá trị = ${frac('NOI năm tới', 'Cap rate')}</div>
<p>Cap rate lấy từ các giao dịch tương tự gần đây: ${frac('NOI của tài sản so sánh', 'Giá bán của tài sản so sánh')}. Cap rate giống "tỷ suất lợi nhuận hiện hành" của bất động sản: cap rate thấp nghĩa là giá đắt (giống P/E cao).</p>

<div class="example"><div class="ex-h">Ví dụ 5.1 - Định giá tòa văn phòng bằng direct capitalization</div>
<p>Tòa văn phòng có tiền thuê tiềm năng năm tới 2.400.000 USD, tỷ lệ trống dự kiến 5%, chi phí vận hành 700.000 USD. Một tòa tương tự trong khu vực vừa bán giá 30.000.000 USD với NOI 1.950.000 USD. Ước tính giá trị tòa nhà.</p>
<details><summary>Xem lời giải</summary>
<p>EGI = 2.400.000 × (1 - 5%) = 2.280.000 USD.<br>
NOI = 2.280.000 - 700.000 = <b>1.580.000 USD</b>.<br>
Cap rate từ giao dịch so sánh = 1.950.000 / 30.000.000 = <b>6,5%</b>.<br>
Giá trị = 1.580.000 / 0,065 = <b>24.307.692 USD</b> (khoảng 24,3 triệu USD).</p>
<p class="warn">Hai lỗi hay gặp: (1) chia tiền thuê tiềm năng cho cap rate (quên trừ trống và chi phí): 2.400.000 / 0,065 = 36,9 triệu USD; (2) trừ cả lãi vay vào NOI. NOI luôn là con số <b>trước</b> chi phí tài chính, vì cap rate định giá cả tài sản, không phải phần vốn chủ.</p></details></div>

<p><b>Độ nhạy với cap rate:</b> NOI không đổi nhưng cap rate tăng từ 6,5% lên 7,0% thì giá trị giảm từ 24,31 xuống 22,57 triệu USD, tức <b>giảm 7,14%</b>. Cap rate tăng khi lãi suất tăng hoặc thị trường đòi hỏi phần bù rủi ro cao hơn: giống quan hệ giá - lợi suất của trái phiếu.</p>

<h4>c) Liên hệ cap rate với DCF</h4>
<p>Nếu NOI tăng đều g mỗi năm mãi mãi và lợi suất yêu cầu là r, giá trị theo DCF là mô hình Gordon (QM-04):</p>
<div class="formula">V = ${frac('NOI<sub>1</sub>', 'r - g')} &nbsp;&nbsp;→&nbsp;&nbsp; Cap rate = r - g</div>
<p>Ví dụ: r = 9%, g = 2,5% thì cap rate = 6,5%, cho đúng giá trị 24.307.692 USD như trên. Từ đó: cap rate thấp có thể do <b>rủi ro thấp</b> (r thấp) hoặc <b>kỳ vọng tăng trưởng tiền thuê cao</b> (g cao).</p>
<div class="widget" data-widget="capRate"></div>

<h4>d) Đòn bẩy phóng đại cả lãi lẫn lỗ</h4>
<div class="example"><div class="ex-h">Ví dụ 5.2 - Mua có vay và không vay</div>
<p>Bất động sản giá 10.000.000 USD, NOI năm đầu 650.000 USD. Phương án vay: vay 60% giá trị (LTV 60%), lãi 5%/năm, chỉ trả lãi. Tính lợi nhuận một năm trên vốn chủ nếu giá trị (a) tăng 4%, (b) giảm 4%.</p>
<details><summary>Xem lời giải</summary>
<p>Vốn chủ khi vay = 4.000.000 USD; lãi vay = 6.000.000 × 5% = 300.000 USD.</p>
<table class="plain"><thead><tr><th></th><th>Không vay</th><th>Có vay (LTV 60%)</th></tr></thead><tbody>
<tr><td>(a) Giá +4%</td><td>(650.000 + 400.000) / 10.000.000 = <b>10,50%</b></td><td>(650.000 - 300.000 + 400.000) / 4.000.000 = <b>18,75%</b></td></tr>
<tr><td>(b) Giá -4%</td><td>(650.000 - 400.000) / 10.000.000 = <b>2,50%</b></td><td>(650.000 - 300.000 - 400.000) / 4.000.000 = <b>-1,25%</b></td></tr>
</tbody></table>
<p>Đòn bẩy làm khoảng chênh giữa hai kịch bản tăng từ 8 điểm % lên 20 điểm %. Đòn bẩy chỉ có lợi khi lợi nhuận của tài sản cao hơn chi phí vay (ở đây 10,5% so với 5%).</p></details></div>`,
    },
    {
      title: '6. Hạ tầng: đặc điểm và phân loại',
      minutes: 12,
      html: `
<p>${t('infra', 'Hạ tầng (infrastructure)')} là các tài sản thực <b>thâm dụng vốn, tuổi thọ dài</b>, cung cấp dịch vụ thiết yếu cho xã hội. Trước đây chủ yếu do nhà nước đầu tư; ngày nay nhà đầu tư tư nhân (quỹ hưu trí, quỹ đầu tư quốc gia, công ty bảo hiểm) tham gia ngày càng nhiều, thường qua ${t('ppp', 'hợp tác công tư (PPP)')}.</p>

<h4>a) Phân loại theo chức năng</h4>
<table class="plain"><thead><tr><th>Nhóm</th><th>Ví dụ</th></tr></thead><tbody>
<tr><td rowspan="3">${t('econinfra', 'Hạ tầng kinh tế (economic)')}</td><td><b>Giao thông</b>: đường cao tốc, cầu, sân bay, cảng biển, đường sắt</td></tr>
<tr><td><b>Tiện ích</b> (utilities): phân phối khí, phát và truyền tải điện, cấp nước, xử lý chất thải</td></tr>
<tr><td><b>Thông tin và truyền thông</b>: trạm phát sóng, cáp quang, vệ tinh, trung tâm dữ liệu</td></tr>
<tr><td>${t('socinfra', 'Hạ tầng xã hội (social)')}</td><td>Trường học, bệnh viện, nhà ở xã hội, trại giam</td></tr>
</tbody></table>

<h4>b) Phân loại theo giai đoạn</h4>
<table class="plain"><thead><tr><th></th><th>${t('greenfield', 'Greenfield')}</th><th>${t('brownfield', 'Brownfield')}</th></tr></thead><tbody>
<tr><td>Là gì</td><td>Tài sản <b>chưa xây</b>, đầu tư từ đầu</td><td>Tài sản <b>đã hoạt động</b>: mua lại, tư nhân hóa, mở rộng</td></tr>
<tr><td>Rủi ro chính</td><td>Rủi ro xây dựng (chậm tiến độ, vượt chi phí), rủi ro nhu cầu khi chưa có lịch sử</td><td>Rủi ro vận hành, quy định; có lịch sử hoạt động để đánh giá</td></tr>
<tr><td>Nguồn lợi nhuận</td><td>Chủ yếu <b>tăng giá vốn</b> khi dự án đi vào hoạt động</td><td>Chủ yếu <b>thu nhập</b> ổn định</td></tr>
<tr><td>Rủi ro, lợi nhuận kỳ vọng</td><td>Cao hơn</td><td>Thấp hơn</td></tr>
</tbody></table>
<p>Ngoài ra còn phân loại theo <b>vị trí địa lý</b>: trong nước hay nước ngoài (nước ngoài thêm rủi ro tỷ giá, chính trị, pháp lý).</p>

<h4>c) Nguồn doanh thu</h4>
<table class="plain"><thead><tr><th>Mô hình</th><th>Ai trả, trả thế nào</th><th>Rủi ro nhu cầu</th></tr></thead><tbody>
<tr><td>${t('availpay', 'Availability payment')}</td><td>Nhà nước trả định kỳ miễn là tài sản <b>sẵn sàng sử dụng</b> đạt chuẩn, không phụ thuộc lượng người dùng (ví dụ bệnh viện, đường không thu phí)</td><td>Thấp nhất</td></tr>
<tr><td>${t('regulated', 'Regulated (theo quy định)')}</td><td>Cơ quan quản lý cho phép một mức lợi nhuận hoặc giá trần (điện, nước, khí)</td><td>Thấp, nhưng rủi ro quy định cao</td></tr>
<tr><td>Contracted (hợp đồng dài hạn)</td><td>Bên mua cam kết mua sản lượng theo hợp đồng, ví dụ hợp đồng mua bán điện (PPA)</td><td>Thấp - trung bình, rủi ro đối tác</td></tr>
<tr><td>${t('userfee', 'User fee / demand-based')}</td><td>Người dùng trả theo lượng sử dụng: phí cầu đường, phí sân bay, cảng</td><td>Cao nhất</td></tr>
</tbody></table>

<h4>d) Đặc điểm kinh tế chung</h4>
<ul>
<li><b>Gần độc quyền, rào cản gia nhập cao</b>: không ai xây thêm sân bay thứ hai cạnh sân bay sẵn có.</li>
<li><b>Nhu cầu ít co giãn</b>: điện, nước, giao thông vẫn được dùng khi kinh tế suy giảm.</li>
<li><b>Dòng tiền dài hạn, ổn định</b>, nhiều hợp đồng gắn với lạm phát.</li>
<li>Thường dùng <b>đòn bẩy cao</b> qua tài trợ dự án (project finance) bằng công ty dự án riêng (SPV).</li>
<li>Theo ${t('concession', 'hợp đồng nhượng quyền (concession)')} có thời hạn: hết hạn, tài sản có thể chuyển về nhà nước (ví dụ mô hình BOT: xây dựng - vận hành - chuyển giao).</li>
</ul>`,
    },
    {
      title: '7. Đặc điểm đầu tư hạ tầng: hình thức, rủi ro, lợi nhuận, đa dạng hóa',
      minutes: 12,
      html: `
<h4>a) Hình thức đầu tư</h4>
<table class="plain"><thead><tr><th>Hình thức</th><th>Ưu điểm</th><th>Nhược điểm</th></tr></thead><tbody>
<tr><td><b>Trực tiếp</b> (mua cổ phần dự án, đồng đầu tư)</td><td>Kiểm soát, không phí trung gian, khớp kỳ hạn với nợ dài hạn của quỹ hưu trí, bảo hiểm</td><td>Vốn rất lớn, tập trung rủi ro, cần năng lực chuyên môn; chỉ nhà đầu tư rất lớn làm được</td></tr>
<tr><td><b>Quỹ hạ tầng tư nhân</b> (unlisted funds, thường đóng, kỳ hạn dài)</td><td>Đa dạng nhiều dự án, quản lý chuyên nghiệp</td><td>Kém thanh khoản, phí cao, định giá theo thẩm định</td></tr>
<tr><td><b>Niêm yết</b>: cổ phiếu công ty hạ tầng, quỹ hạ tầng niêm yết, ETF, MLP (Mỹ)</td><td>Thanh khoản, minh bạch, vốn nhỏ tham gia được</td><td>Biến động theo thị trường cổ phiếu, tương quan cao hơn với cổ phiếu</td></tr>
</tbody></table>
<p>Nhà đầu tư cũng có thể cho vay hạ tầng (nợ dự án, trái phiếu hạ tầng): lợi nhuận thấp hơn, ổn định hơn người sở hữu, giống quan hệ debt - equity ở bất động sản.</p>

<h4>b) Rủi ro</h4>
<ul>
<li><b>Rủi ro xây dựng</b> (greenfield): chậm tiến độ, vượt dự toán, kỹ thuật.</li>
<li><b>Rủi ro nhu cầu</b> (user fee): lưu lượng xe, hành khách thấp hơn dự báo.</li>
<li><b>Rủi ro quy định và chính trị</b>: cơ quan quản lý hạ giá trần, thay đổi điều khoản, thậm chí quốc hữu hóa. Rủi ro này lớn vì dịch vụ thiết yếu luôn nhạy cảm về chính trị.</li>
<li><b>Rủi ro vận hành</b>, rủi ro đối tác (bên mua theo hợp đồng), rủi ro tái tài trợ khi đòn bẩy cao.</li>
<li><b>Rủi ro lãi suất</b>: dòng tiền dài và ổn định nên giá trị nhạy với lãi suất như trái phiếu dài hạn.</li>
<li>Kém thanh khoản, rủi ro tỷ giá (dự án nước ngoài), rủi ro môi trường, khí hậu (ESG).</li>
</ul>

<h4>c) Lợi nhuận và đa dạng hóa</h4>
<ul>
<li>Brownfield, availability payment, regulated: lợi nhuận chủ yếu từ <b>thu nhập</b>, biến động thấp, giống trái phiếu dài hạn có điều chỉnh lạm phát.</li>
<li>Greenfield, user fee: lợi nhuận kỳ vọng cao hơn, nhiều phần <b>tăng giá vốn</b>, rủi ro gần với cổ phiếu.</li>
<li>Tương quan thấp với cổ phiếu và trái phiếu (với hạ tầng tư nhân), một phần do dòng tiền ổn định và một phần do định giá thẩm định (làm trơn, như bất động sản).</li>
<li>Bảo vệ trước lạm phát nhờ giá dịch vụ thường điều chỉnh theo CPI.</li>
</ul>
<div class="example"><div class="ex-h">Ví dụ 7.1 - So sánh hai dự án</div>
<p>Dự án X: xây mới đường cao tốc, doanh thu từ phí thu theo lượt xe. Dự án Y: bệnh viện đã hoạt động 5 năm, nhà nước trả phí cố định hằng năm miễn là bệnh viện đạt chuẩn vận hành. Dự án nào có rủi ro cao hơn và lợi nhuận đến chủ yếu từ đâu?</p>
<details><summary>Xem lời giải</summary>
<p>X là greenfield (rủi ro xây dựng) và user fee (rủi ro nhu cầu), nên rủi ro cao hơn, lợi nhuận kỳ vọng cao hơn, phần lớn đến từ tăng giá vốn khi dự án hoàn thành. Y là brownfield, hạ tầng xã hội, availability payment: dòng tiền ổn định, lợi nhuận chủ yếu là thu nhập; rủi ro chính còn lại là vận hành và đối tác nhà nước.</p></details></div>`,
    },
    {
      title: '8. Tóm tắt và bẫy thường gặp',
      minutes: 6,
      html: `
<table class="plain"><thead><tr><th>Chủ đề</th><th>Nhớ</th><th>Bẫy</th></tr></thead><tbody>
<tr><td>Bốn góc bất động sản</td><td>Private/public × equity/debt</td><td>CMBS, RMBS là public debt; mortgage REIT nắm khoản vay</td></tr>
<tr><td>Gross và net lease</td><td>Gross: chủ nhà trả chi phí; net: người thuê trả</td><td>Không nhầm chiều</td></tr>
<tr><td>REIT</td><td>Miễn thuế doanh nghiệp, phải phân phối phần lớn thu nhập</td><td>REOC không được ưu đãi thuế nhưng giữ lại lợi nhuận</td></tr>
<tr><td>Trực tiếp và gián tiếp</td><td>Trực tiếp: kiểm soát, thuế; gián tiếp: thanh khoản, đa dạng</td><td>Trực tiếp có rủi ro tập trung</td></tr>
<tr><td>Core → opportunistic</td><td>Rủi ro, đòn bẩy và phần tăng giá tăng dần</td><td>Phát triển mới là opportunistic</td></tr>
<tr><td>NOI</td><td>Tiền thuê - trống - chi phí vận hành</td><td>Không trừ lãi vay, khấu hao, thuế thu nhập</td></tr>
<tr><td>Cap rate</td><td>V = NOI / cap rate; cap rate = r - g</td><td>Cap rate tăng → giá trị giảm</td></tr>
<tr><td>Đòn bẩy</td><td>Phóng đại cả lãi lẫn lỗ trên vốn chủ</td><td>Trừ lãi vay, chia cho vốn chủ (không phải giá tài sản)</td></tr>
<tr><td>Chỉ số thẩm định</td><td>Bị làm trơn, trễ</td><td>Đánh giá thấp biến động và tương quan</td></tr>
<tr><td>Greenfield và brownfield</td><td>Mới xây: rủi ro xây dựng, tăng giá; sẵn có: thu nhập</td><td>Mở rộng, tư nhân hóa tài sản cũ là brownfield</td></tr>
<tr><td>Nguồn doanh thu hạ tầng</td><td>Availability &lt; regulated, contracted &lt; user fee (rủi ro nhu cầu)</td><td>Regulated ít rủi ro nhu cầu nhưng nhiều rủi ro quy định</td></tr>
<tr><td>Hạ tầng niêm yết</td><td>Thanh khoản</td><td>Tương quan cao hơn với cổ phiếu</td></tr>
</tbody></table>
<p>Tiếp theo: tab <b>Luyện tập</b> 10 câu. Module sau (AI-05) chuyển sang tài nguyên thiên nhiên: đất, rừng, nông nghiệp và hàng hóa.</p>`,
    },
  ];

  const glossary = {
    realasset: ['Real assets', 'Tài sản thực', 'Tài sản vật chất hữu hình như bất động sản, hạ tầng, đất, hàng hóa; khác tài sản tài chính.'],
    caprate: ['Capitalization rate (cap rate)', 'Tỷ suất vốn hóa', 'NOI năm tới chia cho giá trị bất động sản; xấp xỉ r - g.'],
    pctlease: ['Percentage rent', 'Tiền thuê theo doanh thu', 'Phần tiền thuê tính theo tỷ lệ doanh thu của người thuê, hay gặp ở bất động sản bán lẻ.'],
    grosslease: ['Gross lease', 'Hợp đồng thuê gộp', 'Người thuê trả tiền thuê cố định; chủ nhà chịu chi phí vận hành.'],
    netlease: ['Net lease', 'Hợp đồng thuê ròng', 'Người thuê trả tiền thuê cộng phần lớn chi phí vận hành (thuế, bảo hiểm, bảo trì).'],
    reit: ['Real estate investment trust (REIT)', 'Quỹ tín thác đầu tư bất động sản', 'Sở hữu hoặc cho vay bất động sản tạo thu nhập; phân phối phần lớn thu nhập để được miễn thuế doanh nghiệp.'],
    reoc: ['Real estate operating company (REOC)', 'Công ty vận hành bất động sản', 'Công ty bất động sản thông thường, không ưu đãi thuế, được giữ lại lợi nhuận và phát triển dự án.'],
    mbs: ['Mortgage-backed securities (MBS)', 'Chứng khoán đảm bảo bằng thế chấp', 'Chứng khoán nợ có dòng tiền từ một nhóm khoản vay thế chấp.'],
    cmbs: ['Commercial MBS (CMBS)', 'MBS thương mại', 'MBS có tài sản bảo đảm là khoản vay thế chấp bất động sản thương mại.'],
    hetero: ['Heterogeneity', 'Tính không đồng nhất', 'Mỗi bất động sản là duy nhất về vị trí và đặc điểm, nên khó so sánh và định giá.'],
    appraisal: ['Appraisal', 'Thẩm định giá', 'Ước tính giá trị bất động sản bởi chuyên gia khi không có giá giao dịch thường xuyên.'],
    inflhedge: ['Inflation hedge', 'Công cụ chống lạm phát', 'Tài sản có giá trị hoặc thu nhập tăng theo lạm phát.'],
    core: ['Core strategy', 'Chiến lược core', 'Đầu tư tài sản ổn định, lấp đầy cao, đòn bẩy thấp; lợi nhuận chủ yếu từ thu nhập.'],
    valueadd: ['Value-add strategy', 'Chiến lược gia tăng giá trị', 'Cải tạo, tái định vị, cho thuê lại để tăng giá trị; rủi ro trung bình đến cao.'],
    opport: ['Opportunistic strategy', 'Chiến lược cơ hội', 'Phát triển mới, tài sản trống hoặc khó khăn, đòn bẩy cao; lợi nhuận gần như toàn bộ từ tăng giá.'],
    appraisalidx: ['Appraisal-based index', 'Chỉ số dựa trên thẩm định', 'Chỉ số bất động sản tính từ giá trị thẩm định định kỳ; bị làm trơn và trễ.'],
    smoothing: ['Appraisal smoothing', 'Hiện tượng làm trơn', 'Giá trị thẩm định dựa vào giá cũ nên dao động ít hơn thực tế, làm thấp độ biến động và tương quan đo được.'],
    incomeapp: ['Income approach', 'Phương pháp thu nhập', 'Định giá bằng PV của thu nhập tương lai: direct capitalization hoặc DCF.'],
    directcap: ['Direct capitalization', 'Vốn hóa trực tiếp', 'Giá trị = NOI năm tới / cap rate.'],
    costapp: ['Cost approach', 'Phương pháp chi phí', 'Giá trị = đất + chi phí xây mới thay thế - hao mòn.'],
    salesapp: ['Sales comparison approach', 'Phương pháp so sánh', 'Định giá theo giá bán của tài sản tương tự, có điều chỉnh khác biệt.'],
    noi: ['Net operating income (NOI)', 'Thu nhập hoạt động ròng', 'Tiền thuê thực thu trừ chi phí vận hành; trước lãi vay, khấu hao và thuế thu nhập.'],
    egi: ['Effective gross income (EGI)', 'Thu nhập gộp hiệu dụng', 'Tiền thuê tiềm năng trừ phần trống và nợ khó đòi.'],
    infra: ['Infrastructure', 'Hạ tầng', 'Tài sản thực thâm dụng vốn, tuổi thọ dài, cung cấp dịch vụ thiết yếu.'],
    ppp: ['Public-private partnership (PPP)', 'Hợp tác công tư', 'Nhà nước và tư nhân hợp tác: tư nhân góp vốn, xây dựng, vận hành tài sản công theo hợp đồng.'],
    econinfra: ['Economic infrastructure', 'Hạ tầng kinh tế', 'Giao thông, tiện ích (điện, nước, khí), thông tin và truyền thông.'],
    socinfra: ['Social infrastructure', 'Hạ tầng xã hội', 'Trường học, bệnh viện, nhà ở xã hội, trại giam.'],
    greenfield: ['Greenfield investment', 'Đầu tư mới (greenfield)', 'Đầu tư vào tài sản hạ tầng chưa xây; rủi ro xây dựng, lợi nhuận chủ yếu từ tăng giá.'],
    brownfield: ['Brownfield investment', 'Đầu tư tài sản sẵn có (brownfield)', 'Mua lại, tư nhân hóa hoặc mở rộng tài sản đã hoạt động; lợi nhuận chủ yếu từ thu nhập.'],
    availpay: ['Availability payment', 'Thanh toán theo tính sẵn sàng', 'Nhà nước trả định kỳ nếu tài sản sẵn sàng đạt chuẩn, không phụ thuộc lượng sử dụng.'],
    regulated: ['Regulated revenue', 'Doanh thu theo quy định', 'Cơ quan quản lý cho phép một mức lợi nhuận hoặc giá trần, như điện, nước, khí.'],
    userfee: ['User fee (demand-based)', 'Phí người sử dụng', 'Doanh thu theo lượng sử dụng thực tế (phí cầu đường, sân bay); rủi ro nhu cầu cao.'],
    concession: ['Concession agreement', 'Hợp đồng nhượng quyền', 'Hợp đồng cho phép tư nhân khai thác tài sản công trong một thời hạn, sau đó có thể chuyển giao lại.'],
  };

  const practice = [
    { q: 'Một tòa nhà có tiền thuê tiềm năng năm tới 1.500.000 USD, tỷ lệ trống 10%, chi phí vận hành 450.000 USD. Cap rate thị trường là 6%. Giá trị ước tính bằng direct capitalization gần nhất với:', choices: ['15,0 triệu USD', '17,5 triệu USD', '22,5 triệu USD'], answer: 0, explain: 'NOI = 1.500.000 × 90% - 450.000 = 900.000; V = 900.000 / 6% = 15,0 triệu. 17,5 triệu là quên trừ phần trống (1.050.000 / 6%); 22,5 triệu là quên trừ chi phí vận hành (1.350.000 / 6%).' },
    { q: 'Một công ty bảo hiểm mua trái phiếu CMBS trên thị trường. Khoản đầu tư này thuộc góc nào của bất động sản?', choices: ['Private debt', 'Public debt', 'Public equity'], answer: 1, explain: 'CMBS là chứng khoán nợ giao dịch trên thị trường, nên là public debt. Private debt là cho vay thế chấp trực tiếp; public equity là cổ phiếu REIT, REOC.' },
    { q: 'So với lợi nhuận thực của bất động sản, một chỉ số bất động sản dựa trên thẩm định (appraisal-based) có xu hướng:', choices: ['Đánh giá quá cao độ biến động vì chuyên gia phản ứng thái quá', 'Phản ánh chính xác tương quan với cổ phiếu', 'Đánh giá thấp cả độ biến động lẫn tương quan với tài sản khác'], answer: 2, explain: 'Thẩm định dựa vào giá trị và giao dịch cũ nên chuỗi giá trị bị làm trơn và trễ: độ biến động và tương quan đo được thấp hơn thực tế, làm lợi ích đa dạng hóa trông tốt hơn.' },
    { q: 'NOI của một bất động sản dự kiến không đổi. Nếu cap rate thị trường tăng từ 6,5% lên 7,0%, giá trị bất động sản sẽ:', choices: ['Giảm khoảng 7,1%', 'Giảm 0,5%', 'Tăng khoảng 7,7%'], answer: 0, explain: 'V tỷ lệ nghịch với cap rate: V mới / V cũ = 6,5 / 7,0 = 0,9286, tức giảm 7,14%. 0,5% chỉ là chênh lệch cap rate; tăng 7,7% là nhầm chiều (7,0 / 6,5 - 1).' },
    { q: 'Nhà đầu tư mua bất động sản 5.000.000 USD, vay 70% với lãi 6%/năm chỉ trả lãi. NOI năm đầu 350.000 USD, giá trị cuối năm không đổi. Lợi nhuận trên vốn chủ là:', choices: ['7,00%', '23,33%', '9,33%'], answer: 2, explain: 'Vốn chủ = 1.500.000; lãi vay = 3.500.000 × 6% = 210.000; lợi nhuận = (350.000 - 210.000) / 1.500.000 = 9,33%. 7,00% là lợi nhuận không vay (350.000 / 5.000.000); 23,33% là quên trừ lãi vay.' },
    { q: 'Phát biểu nào đúng về đầu tư hạ tầng greenfield so với brownfield?', choices: ['Greenfield có lịch sử hoạt động dài nên dễ dự báo dòng tiền hơn', 'Greenfield chịu rủi ro xây dựng và lợi nhuận đến nhiều hơn từ tăng giá vốn', 'Tư nhân hóa một sân bay đang hoạt động là đầu tư greenfield'], answer: 1, explain: 'Greenfield là tài sản chưa xây: có rủi ro xây dựng, chưa có lịch sử, lợi nhuận chủ yếu là tăng giá khi đi vào hoạt động. Tài sản đã hoạt động (kể cả tư nhân hóa, mở rộng) là brownfield.' },
    { q: 'Mô hình doanh thu hạ tầng nào khiến nhà đầu tư chịu ít rủi ro nhu cầu (lượng sử dụng) nhất?', choices: ['Availability payment do nhà nước trả', 'Phí thu theo lượt xe qua trạm', 'Phí cảng tính theo lượng container'], answer: 0, explain: 'Availability payment được trả miễn là tài sản sẵn sàng đạt chuẩn, không phụ thuộc lượng người dùng. Hai lựa chọn còn lại là user fee, doanh thu phụ thuộc trực tiếp vào nhu cầu.' },
    { q: 'Một nhà đầu tư muốn tự quyết định việc cải tạo và cho thuê, đồng thời hưởng lợi ích thuế từ khấu hao. Hình thức phù hợp nhất là:', choices: ['Mua cổ phiếu REIT niêm yết', 'Sở hữu trực tiếp bất động sản', 'Mua trái phiếu CMBS'], answer: 1, explain: 'Kiểm soát và lợi ích thuế là ưu điểm của sở hữu trực tiếp. Cổ đông REIT không kiểm soát tài sản; CMBS là chủ nợ, không phải chủ sở hữu.' },
    { q: 'Một quỹ mua một tòa văn phòng đang trống phần lớn diện tích, dự định phá dỡ một phần và xây lại, dùng đòn bẩy cao. Chiến lược này là:', choices: ['Core', 'Core-plus', 'Opportunistic'], answer: 2, explain: 'Tài sản trống, tái phát triển lớn và đòn bẩy cao là đặc trưng của opportunistic: lợi nhuận gần như toàn bộ từ tăng giá. Core và core-plus là tài sản ổn định, lấp đầy cao, đòn bẩy thấp.' },
    { q: 'Một bất động sản được giao dịch giá 18 triệu USD, NOI năm tới dự kiến 1,08 triệu USD. Nếu lợi suất yêu cầu là 8,5%, tốc độ tăng NOI dài hạn mà thị trường ngầm định là:', choices: ['2,5%', '6,0%', '14,5%'], answer: 0, explain: 'Cap rate = 1,08 / 18 = 6,0% = r - g, nên g = 8,5% - 6,0% = 2,5%. 6,0% là cap rate, không phải g; 14,5% là cộng nhầm r và cap rate.' },
  ];

  const fmtN = (x, d = 0) => {
    const s = Math.abs(x).toFixed(d).split('.');
    return (x < 0 ? '-' : '') + s[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.') + (s[1] ? ',' + s[1] : '');
  };

  const widgets = {
    capRate(el) {
      el.innerHTML = `
        <div class="w-row"><label>Tiền thuê tiềm năng: <b data-o="g">2.400.000</b><input type="range" min="1000000" max="4000000" step="50000" value="2400000" data-i="g"></label>
        <label>Tỷ lệ trống: <b data-o="v">5%</b><input type="range" min="0" max="30" step="1" value="5" data-i="v"></label>
        <label>Chi phí vận hành: <b data-o="o">700.000</b><input type="range" min="0" max="1500000" step="25000" value="700000" data-i="o"></label>
        <label>Cap rate: <b data-o="c">6,5%</b><input type="range" min="3" max="12" step="0.25" value="6.5" data-i="c"></label></div>
        <div class="w-out"><div class="w-price" data-o="p"></div><div class="w-bar"><span data-o="bar"></span><i></i></div><div class="w-note" data-o="note"></div></div>`;
      const q = s => el.querySelector(s);
      const upd = () => {
        const g = +q('[data-i="g"]').value, v = +q('[data-i="v"]').value / 100, o = +q('[data-i="o"]').value, c = +q('[data-i="c"]').value / 100;
        const noi = g * (1 - v) - o, val = noi / c;
        q('[data-o="g"]').textContent = fmtN(g);
        q('[data-o="v"]').textContent = `${Math.round(v * 100)}%`;
        q('[data-o="o"]').textContent = fmtN(o);
        q('[data-o="c"]').textContent = `${fmtN(c * 100, 2)}%`;
        q('[data-o="p"]').textContent = `Giá trị = ${fmtN(val)} USD`;
        q('[data-o="bar"]').style.width = `${Math.max(0, Math.min(100, val / 600000))}%`;
        q('[data-o="note"]').textContent = noi <= 0 ? 'NOI âm hoặc bằng 0: chi phí vượt thu nhập, direct capitalization không dùng được.'
          : `NOI = ${fmtN(g * (1 - v))} - ${fmtN(o)} = ${fmtN(noi)} USD. Thử tăng cap rate: giá trị giảm, giống giá trái phiếu khi lợi suất tăng.`;
      };
      el.addEventListener('input', upd);
      upd();
    },
  };

  window.LESSONS['AI-04'] = {
    moduleId: 'AI-04',
    calculator: 'BA II Plus',
    warmup: [
      'Ôn AI-01: ba cách tiếp cận đầu tư thay thế (fund investment, co-investment, direct investment) khác nhau ở điểm nào?',
      'Ôn QM-04: theo mô hình Gordon, nếu D1 = 2, r = 9%, g = 3% thì giá trị là bao nhiêu? Ghi nhớ kết quả, phần 5 sẽ dùng lại ý tưởng này.',
      'Bạn nghĩ một tòa văn phòng cho thuê giống trái phiếu ở điểm nào, giống cổ phiếu ở điểm nào?',
    ],
    sections,
    glossary,
    practice,
    widgets,
    slides: [],
    wrapup: [
      'Vẽ bảng bốn góc đầu tư bất động sản và cho một ví dụ mỗi góc.',
      'Viết công thức NOI và direct capitalization; cap rate liên hệ với r và g thế nào?',
      'Phân biệt greenfield và brownfield, availability payment và user fee: cái nào rủi ro hơn và vì sao?',
    ],
  };
}());
