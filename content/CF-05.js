// Bài giảng CF-05 - Capital Investments and Capital Allocation (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t, frac, keys, timeline } = window.CFAH;

  const sections = [
    {
      title: '1. Bức tranh lớn',
      minutes: 6,
      html: `
<p>CF-04 bàn về tiền cho hoạt động <b>ngắn hạn</b> (vốn lưu động, thanh khoản). Module này chuyển sang câu hỏi lớn nhất của tài chính doanh nghiệp: <b>nên bỏ tiền dài hạn vào đâu?</b> Xây nhà máy, mở chi nhánh, mua lại công ty khác hay thay dây chuyền cũ.</p>
<div class="key">Một khoản ${t('capinv', 'đầu tư vốn (capital investment)')} chỉ tạo ra giá trị cho cổ đông khi lợi suất của nó <b>cao hơn chi phí cơ hội của vốn</b>. Công cụ đo chính là ${t('npv', 'NPV')}: NPV &gt; 0 nghĩa là dự án làm giàu thêm cho chủ sở hữu.</div>
<p>Bốn câu hỏi của module, ứng với 4 LOS:</p>
<ol>
  <li><b>Có những loại dự án nào?</b> Mỗi loại cần mức phân tích khác nhau. Ứng với LOS 1.</li>
  <li><b>Quy trình ra quyết định và công cụ đo lường</b>: NPV, ${t('irr', 'IRR')} và ${t('roic', 'ROIC')}, khi nào dùng cái nào. Ứng với LOS 2.</li>
  <li><b>Nguyên tắc và sai lầm thường gặp</b>: dòng tiền nào được tính, dòng tiền nào không, và những thiên lệch hành vi làm hỏng quyết định. Ứng với LOS 3.</li>
  <li><b>Quyền chọn thực (real options)</b>: giá trị của sự linh hoạt mà NPV truyền thống bỏ sót. Ứng với LOS 4.</li>
</ol>
<p class="tip"><b>Nối với Quant:</b> NPV và IRR chính là TVM (QM-04) và MWR (QM-03) áp dụng cho dự án. Nếu bạn đã quen hàm <kbd>CF</kbd> của BA II Plus thì module này rất nhẹ phần tính toán; điểm khó nằm ở <b>diễn giải</b> và <b>bẫy khái niệm</b>.</p>`,
    },
    {
      title: '2. Các loại dự án đầu tư vốn',
      minutes: 10,
      html: `
<p>Không phải dự án nào cũng cần phân tích kỹ như nhau. Dự án càng xa hoạt động hiện tại thì càng bất định, càng cần nhiều dữ liệu và nhiều người tham gia quyết định.</p>
<table class="plain"><thead><tr><th>Loại</th><th>Ví dụ</th><th>Đặc điểm phân tích</th></tr></thead><tbody>
<tr><td>${t('goingconcern', 'Duy trì hoạt động (going concern)')}</td><td>Thay máy móc hỏng, nâng cấp phần mềm, cải thiện hiệu suất</td><td>Dễ ước tính vì dựa trên dữ liệu hiện có; thường không tạo thêm doanh thu mà giữ hoặc giảm chi phí. Nhiều quyết định nhỏ, lặp lại</td></tr>
<tr><td>${t('regulatory', 'Tuân thủ quy định (regulatory/compliance)')}</td><td>Hệ thống xử lý khí thải, thiết bị an toàn theo luật mới</td><td>Bắt buộc do bên ngoài áp đặt (nhà nước, cơ quan quản lý). Thường không tạo doanh thu; câu hỏi là "làm thế nào rẻ nhất" chứ không phải "có làm không". Chi phí lớn có thể khiến cả mảng kinh doanh không còn đáng giữ</td></tr>
<tr><td>${t('expansion', 'Mở rộng (expansion)')}</td><td>Thêm dòng sản phẩm, vào thị trường mới, mua lại đối thủ (M&amp;A)</td><td>Tăng quy mô doanh nghiệp. Bất định hơn, tốn thời gian và vốn hơn; cần dự báo nhu cầu, đội ngũ ra quyết định đa dạng. M&amp;A có rủi ro trả giá quá cao và tích hợp kém</td></tr>
<tr><td>${t('newline', 'Ngành mới và dự án khác')}</td><td>Công nghệ mới, ý tưởng kinh doanh ngoài lĩnh vực cốt lõi</td><td>Rủi ro rất cao, khó định giá bằng kỹ thuật chuẩn; đôi khi là dự án "tâm huyết" của chủ sở hữu và được duyệt mà không qua đánh giá rủi ro thông thường</td></tr>
</tbody></table>
<div class="key">Đi từ trên xuống dưới bảng: <b>mức bất định tăng dần</b>, nhu cầu vốn và thời gian phân tích tăng dần, dữ liệu nội bộ ít hữu ích dần.</div>
<div class="example"><div class="ex-h">Ví dụ 2.1 - Phân loại nhanh</div>
<p>Một công ty thép (a) thay lò cao đã hết tuổi thọ, (b) lắp hệ thống lọc bụi theo tiêu chuẩn môi trường mới, (c) xây nhà máy tôn mạ ở tỉnh khác, (d) đầu tư vào startup pin xe điện. Phân loại từng khoản.</p>
<details><summary>Xem lời giải</summary>
<p>(a) Duy trì hoạt động. (b) Tuân thủ quy định. (c) Mở rộng (thêm công suất và thị trường). (d) Ngành mới, ngoài năng lực cốt lõi của công ty thép, khó phân tích bằng NPV thông thường.</p></details></div>
<p class="warn"><b>Bẫy:</b> dự án tuân thủ có NPV âm vẫn có thể là quyết định đúng, vì lựa chọn thay thế (bị phạt, bị đóng cửa) còn tệ hơn. Khi đó ta so sánh <b>NPV của cả công ty khi làm và khi không làm</b>, không chỉ NPV riêng của dự án.</p>`,
    },
    {
      title: '3. Quy trình phân bổ vốn',
      minutes: 8,
      html: `
<p>${t('capalloc', 'Phân bổ vốn (capital allocation)')} là quy trình công ty dùng để quyết định đầu tư vào dự án dài hạn. Quy trình có 4 bước:</p>
<table class="plain"><thead><tr><th>Bước</th><th>Nội dung chính</th></tr></thead><tbody>
<tr><td><b>1. Tạo ý tưởng</b></td><td>Bước quan trọng nhất. Ý tưởng có thể đến từ mọi cấp, mọi phòng ban, thậm chí bên ngoài công ty. Cần hiểu rõ cạnh tranh và hoạt động của chính mình</td></tr>
<tr><td><b>2. Phân tích đầu tư</b></td><td>Dự báo dòng tiền: <b>quy mô, thời điểm, thời gian kéo dài và mức biến động</b>. Đánh giá bằng NPV, IRR</td></tr>
<tr><td><b>3. Lập kế hoạch và xếp ưu tiên</b></td><td>Chọn dự án có lợi suất vượt chi phí cơ hội của nhà đầu tư; cân nhắc chiến lược, thời điểm và nguồn vốn có hạn</td></tr>
<tr><td><b>4. Theo dõi và hậu kiểm</b></td><td>${t('postaudit', 'Hậu kiểm (post-investment review)')}: so kết quả thực tế với dự báo, giải thích chênh lệch. Giúp kiểm chứng giả định, tạo kỷ luật dự báo và sinh ý tưởng mới. Rút vốn khỏi mảng kém hiệu quả, dồn vốn vào mảng sinh lời</td></tr>
</tbody></table>
<h4>Dự án độc lập, loại trừ và giới hạn vốn</h4>
<ul>
<li>${t('independent', 'Dự án độc lập (independent)')}: quyết định dự án này không ảnh hưởng dự án kia. Nhận mọi dự án có NPV &gt; 0.</li>
<li>${t('mutex', 'Dự án loại trừ lẫn nhau (mutually exclusive)')}: chỉ chọn được một (ví dụ hai phương án dùng cùng một mảnh đất). Chọn dự án có <b>NPV cao nhất</b>.</li>
<li>${t('rationing', 'Giới hạn vốn (capital rationing)')}: ngân sách có hạn, không làm hết các dự án NPV dương được. Chọn tổ hợp dự án có <b>tổng NPV lớn nhất</b> trong phạm vi ngân sách.</li>
</ul>
<p class="tip">Kết quả hậu kiểm không dùng để "phạt" người dự báo, mà để <b>cải thiện dự báo lần sau</b>. Nếu dự báo luôn lạc quan hơn thực tế, đó là dấu hiệu của thiên lệch có hệ thống (xem phần 8).</p>`,
    },
    {
      title: '4. Giá trị hiện tại ròng (NPV)',
      minutes: 14,
      html: `
<div class="formula">NPV = CF<sub>0</sub> + ${frac('CF<sub>1</sub>', '(1 + r)<sup>1</sup>')} + ${frac('CF<sub>2</sub>', '(1 + r)<sup>2</sup>')} + ... + ${frac('CF<sub>N</sub>', '(1 + r)<sup>N</sup>')} = Σ ${frac('CF<sub>t</sub>', '(1 + r)<sup>t</sup>')}</div>
<p>CF<sub>0</sub> thường âm (khoản đầu tư ban đầu). r là ${t('hurdle', 'lợi suất yêu cầu (required rate of return)')}, phản ánh rủi ro của dự án; với dự án có rủi ro như công ty, thường dùng ${t('wacc', 'WACC')} (học kỹ ở CF-06).</p>
<div class="key"><b>Quy tắc:</b> nhận dự án nếu NPV &gt; 0, bỏ nếu NPV &lt; 0. NPV = 0 nghĩa là dự án vừa đủ bù chi phí cơ hội: không tạo thêm, không phá hủy giá trị.<br><b>Diễn giải:</b> NPV là mức tăng (dự kiến) của giá trị tài sản cổ đông khi thực hiện dự án.</div>
${timeline(4, [{ t: 0, label: '-1.000', up: true, cls: 'pv' }, { t: 1, label: '300' }, { t: 2, label: '400' }, { t: 3, label: '400' }, { t: 4, label: '300' }], 'Dự án A: đầu tư 1.000, dòng tiền sau thuế 4 năm, lợi suất yêu cầu 10%.')}
<div class="example"><div class="ex-h">Ví dụ 4.1 - NPV của dự án A</div>
<p>Dự án A có dòng tiền như trục thời gian trên, r = 10%. Tính NPV và cho biết có nên làm không.</p>
<details><summary>Xem lời giải</summary>
${keys([
  ['Mở CF, xóa dữ liệu cũ', '[CF] [2ND] [CE/C]', 'CF0 = 0'],
  ['CF0', '1000 [+/-] [ENTER]', 'CF0 = -1,000'],
  ['C01', '[↓] 300 [ENTER]', 'C01 = 300'],
  ['F01 giữ 1', '[↓]', 'F01 = 1'],
  ['C02 = 400, lặp 2 lần', '[↓] 400 [ENTER] [↓] 2 [ENTER]', 'F02 = 2'],
  ['C03 = 300', '[↓] 300 [ENTER]', 'C03 = 300'],
  ['Nhập lãi suất', '[NPV] 10 [ENTER]', 'I = 10'],
  ['Tính NPV', '[↓] [CPT]', 'NPV = 108.7357'],
])}
<p>NPV = <b>108,74</b> &gt; 0, nên nhận dự án. Nghĩa là: sau khi đã bù đủ 10% mỗi năm cho nhà đầu tư, dự án còn tạo thêm khoảng 108,74 giá trị hiện tại.</p>
<p>Lưu ý ô tần suất F02 = 2 vì năm 2 và năm 3 cùng là 400 và đứng liền nhau. Dòng tiền giống nhau nhưng <b>không liền nhau</b> thì phải nhập riêng.</p></details></div>
<div class="example"><div class="ex-h">Ví dụ 4.2 - Dòng tiền đều</div>
<p>Dự án B đầu tư 2.000, thu về 550 mỗi năm trong 5 năm, r = 9%. NPV?</p>
<details><summary>Xem lời giải</summary>
${keys([['', '[CF] [2ND] [CE/C] 2000 [+/-] [ENTER] [↓] 550 [ENTER] [↓] 5 [ENTER] [NPV] 9 [ENTER] [↓] [CPT]', 'NPV = 139.3082']])}
<p>NPV = <b>139,31</b>. Cũng có thể dùng TVM: N = 5, I/Y = 9, PMT = 550, FV = 0, CPT PV = -2.139,31, rồi trừ 2.000.</p></details></div>
<h4>Ưu và nhược điểm</h4>
<table class="plain"><thead><tr><th>Ưu điểm</th><th>Nhược điểm</th></tr></thead><tbody>
<tr><td>Đo trực tiếp giá trị tạo thêm cho cổ đông (bằng tiền); cộng được giữa các dự án; giả định tái đầu tư ở r, hợp lý hơn</td><td>Không cho biết <b>quy mô tương đối</b> (NPV 100 trên vốn 1.000 khác NPV 100 trên vốn 100.000); phụ thuộc vào ước tính r; không phản ánh tính linh hoạt (real options)</td></tr>
</tbody></table>
<p class="warn"><b>Bẫy bấm máy:</b> quên <kbd>2ND</kbd> <kbd>CE/C</kbd> nên dòng tiền bài cũ còn sót; nhập CF0 dương; nhập I = 0.10 thay vì 10.</p>`,
    },
    {
      title: '5. Tỷ suất hoàn vốn nội bộ (IRR) và mâu thuẫn với NPV',
      minutes: 18,
      html: `
<p>${t('irr', 'IRR (internal rate of return)')} là lãi suất chiết khấu làm NPV bằng 0:</p>
<div class="formula">0 = CF<sub>0</sub> + Σ ${frac('CF<sub>t</sub>', '(1 + IRR)<sup>t</sup>')}</div>
<div class="key"><b>Quy tắc:</b> nhận dự án nếu IRR &gt; r (lợi suất yêu cầu), bỏ nếu IRR &lt; r. IRR là lợi suất kỳ vọng của chính dự án, cùng bản chất với MWR ở QM-03.</div>
<p>Với dự án A ở ví dụ 4.1, sau khi đã nhập dòng tiền, bấm <kbd>IRR</kbd> <kbd>CPT</kbd> được IRR = 14.8950, tức <b>14,90%</b> &gt; 10%: nhận. Với dự án độc lập và dòng tiền thông thường, NPV và IRR luôn cho <b>cùng kết luận</b>.</p>

<h4>Đường NPV profile</h4>
<p>${t('npvprofile', 'NPV profile')} là đồ thị NPV theo lãi suất chiết khấu. Điểm đường cắt trục hoành chính là IRR. Lãi suất càng cao, NPV càng giảm (với dòng tiền thông thường).</p>

<h4>Khi NPV và IRR mâu thuẫn</h4>
<p>Với dự án <b>loại trừ lẫn nhau</b>, hai phương pháp có thể xếp hạng ngược nhau do khác biệt về <b>quy mô</b> hoặc <b>thời điểm dòng tiền</b>.</p>
<div class="example"><div class="ex-h">Ví dụ 5.1 - Dự án S (thu sớm) và L (thu muộn)</div>
<table class="plain"><thead><tr><th>Dự án</th><th>t = 0</th><th>t = 1</th><th>t = 2</th><th>t = 3</th></tr></thead><tbody>
<tr><td>S</td><td>-1.000</td><td>800</td><td>350</td><td>100</td></tr>
<tr><td>L</td><td>-1.000</td><td>100</td><td>300</td><td>1.100</td></tr>
</tbody></table>
<p>r = 10%. Chỉ được chọn một dự án. Chọn dự án nào?</p>
<details><summary>Xem lời giải</summary>
<table class="plain"><thead><tr><th></th><th>NPV ở 10%</th><th>IRR</th></tr></thead><tbody>
<tr><td>S</td><td>91,66</td><td><b>17,16%</b></td></tr>
<tr><td>L</td><td><b>165,29</b></td><td>16,61%</td></tr>
</tbody></table>
<p>IRR chọn S, NPV chọn L. <b>Chọn L</b> vì mục tiêu là tối đa hóa giá trị cho cổ đông, và NPV đo trực tiếp giá trị đó.</p>
<p>${t('crossover', 'Lãi suất giao cắt (crossover rate)')} là lãi suất mà hai dự án có NPV bằng nhau. Tìm bằng IRR của dòng tiền chênh lệch L - S = (0; -700; -50; 1.000): crossover = <b>16,00%</b>. Với r &lt; 16,00%, L có NPV cao hơn; với r &gt; 16,00%, S có NPV cao hơn.</p></details></div>
<div class="widget" data-widget="npvProfile"></div>
<p><b>Vì sao NPV đáng tin hơn?</b> IRR ngầm giả định dòng tiền trung gian được tái đầu tư ở chính mức IRR, trong khi NPV giả định tái đầu tư ở r (chi phí vốn). Với dự án IRR cao, giả định của IRR thường quá lạc quan.</p>

<h4>Nhiều IRR hoặc không có IRR</h4>
<p>Dòng tiền ${t('multiirr', 'không thông thường')} (đổi dấu nhiều hơn một lần) có thể có nhiều IRR. Ví dụ dòng tiền (-100; 230; -132) có NPV = 0 ở cả <b>10%</b> và <b>20%</b>; ở r = 15% thì NPV = 0,19 &gt; 0, ở r = 0% thì NPV = -2. Khi đó IRR vô nghĩa, phải dùng NPV.</p>
<table class="plain"><thead><tr><th>Tình huống</th><th>Dùng</th></tr></thead><tbody>
<tr><td>Dự án độc lập, dòng tiền thông thường</td><td>NPV và IRR cho cùng kết luận</td></tr>
<tr><td>Dự án loại trừ, khác quy mô hoặc thời điểm</td><td>NPV</td></tr>
<tr><td>Dòng tiền đổi dấu nhiều lần</td><td>NPV (IRR có thể không duy nhất)</td></tr>
</tbody></table>
<p class="tip">IRR vẫn phổ biến trong thực tế vì dễ truyền đạt ("dự án sinh lời 15%/năm") và không cần chọn trước r. Đề thi hay hỏi "phương pháp nào ưu tiên khi mâu thuẫn": luôn là <b>NPV</b>.</p>`,
    },
    {
      title: '6. Lợi suất trên vốn đầu tư (ROIC)',
      minutes: 10,
      html: `
<p>NPV và IRR dùng để đánh giá <b>một dự án trước khi làm</b>. Để đánh giá <b>cả công ty đã phân bổ vốn tốt hay chưa</b>, nhà phân tích bên ngoài thường dùng ${t('roic', 'ROIC')}:</p>
<div class="formula">ROIC = ${frac('NOPAT', 'Vốn đầu tư bình quân (nợ + vốn chủ, giá trị sổ sách)')} &nbsp;&nbsp;&nbsp; ${t('nopat', 'NOPAT')} = EBIT × (1 - t)</div>
<p>Tách thành hai động lực:</p>
<div class="formula">ROIC = ${frac('NOPAT', 'Doanh thu')} × ${frac('Doanh thu', 'Vốn đầu tư')} = biên lợi nhuận sau thuế × vòng quay vốn</div>
<div class="key">So ROIC với chi phí vốn (WACC): <b>ROIC &gt; WACC</b> thì công ty đang tạo giá trị; ROIC &lt; WACC thì đang phá hủy giá trị dù vẫn có lãi kế toán.</div>
<div class="example"><div class="ex-h">Ví dụ 6.1</div>
<p>Công ty có EBIT 150, thuế suất 20%, doanh thu 800. Tổng nợ và vốn chủ (sổ sách) đầu năm 950, cuối năm 1.050. WACC 9%. Tính ROIC, tách thành biên lợi nhuận và vòng quay, và nhận xét.</p>
<details><summary>Xem lời giải</summary>
<p>NOPAT = 150 × 0,8 = 120. Vốn đầu tư bình quân = (950 + 1.050)/2 = 1.000.<br>
ROIC = 120 / 1.000 = <b>12%</b> = biên NOPAT 15% (120/800) × vòng quay 0,8 (800/1.000).<br>
ROIC 12% &gt; WACC 9%: công ty đang tạo giá trị trên vốn đã bỏ ra.</p></details></div>
<table class="plain"><thead><tr><th></th><th>NPV / IRR</th><th>ROIC</th></tr></thead><tbody>
<tr><td>Dùng cho</td><td>Từng dự án, trước khi đầu tư</td><td>Cả công ty hoặc mảng kinh doanh, sau khi đầu tư</td></tr>
<tr><td>Dữ liệu</td><td>Dòng tiền dự báo</td><td>Số liệu kế toán đã công bố</td></tr>
<tr><td>Người dùng</td><td>Ban quản lý (có dữ liệu nội bộ)</td><td>Nhà phân tích bên ngoài</td></tr>
</tbody></table>
<p class="warn"><b>Hạn chế của ROIC:</b> dựa trên số liệu kế toán (không phải dòng tiền), nhìn về quá khứ, biến động theo năm, và mỗi người tính một kiểu (EBIT có điều chỉnh không, vốn đầu tư gồm những gì). ROIC ở mức công ty cũng không cho biết dự án mới cụ thể nào tốt.</p>
<p class="tip"><b>Bẫy tính toán:</b> tử số là NOPAT (lợi nhuận hoạt động sau thuế, trước lãi vay), không phải lợi nhuận ròng; mẫu số là <b>bình quân</b> đầu kỳ và cuối kỳ, gồm cả nợ và vốn chủ.</p>`,
    },
    {
      title: '7. Nguyên tắc phân bổ vốn: dòng tiền nào được tính?',
      minutes: 12,
      html: `
<div class="key">Chỉ tính ${t('incremental', 'dòng tiền tăng thêm (incremental cash flow)')}: chênh lệch dòng tiền của <b>cả công ty</b> giữa "có dự án" và "không có dự án", <b>sau thuế</b>, đúng thời điểm phát sinh.</div>
<table class="plain"><thead><tr><th>Khoản mục</th><th>Tính vào?</th><th>Lý do</th></tr></thead><tbody>
<tr><td>${t('sunk', 'Chi phí chìm (sunk cost)')}: khảo sát thị trường đã trả</td><td><b>Không</b></td><td>Đã chi dù làm hay không; không thay đổi được</td></tr>
<tr><td>${t('opportunity', 'Chi phí cơ hội')}: nhà xưởng sẵn có lẽ ra cho thuê được</td><td><b>Có</b></td><td>Làm dự án thì mất khoản thu cho thuê</td></tr>
<tr><td>${t('cannibal', 'Ăn mòn doanh thu (cannibalization)')}: sản phẩm mới làm giảm doanh số sản phẩm cũ</td><td><b>Có</b> (trừ ra)</td><td>${t('externality', 'Ngoại tác')} tiêu cực lên phần còn lại của công ty</td></tr>
<tr><td>Hiệu ứng cộng hưởng: sản phẩm mới kéo doanh số sản phẩm cũ</td><td><b>Có</b> (cộng vào)</td><td>Ngoại tác tích cực</td></tr>
<tr><td>Chi phí tài trợ: lãi vay, cổ tức</td><td><b>Không</b> (trong dòng tiền)</td><td>Đã nằm trong lãi suất chiết khấu; trừ thêm là tính hai lần</td></tr>
<tr><td>Thay đổi vốn lưu động, thuế, khấu hao (qua lá chắn thuế)</td><td><b>Có</b></td><td>Ảnh hưởng thật đến dòng tiền sau thuế</td></tr>
</tbody></table>
<h4>Ba nguyên tắc cốt lõi</h4>
<ol>
<li><b>Dùng dòng tiền sau thuế</b>, không dùng lợi nhuận kế toán. Thuế ảnh hưởng thật đến tiền về tay nhà đầu tư; cần xét cả tác động thuế lên toàn công ty.</li>
<li><b>Chỉ dòng tiền tăng thêm</b>: bỏ chi phí chìm, tính chi phí cơ hội và ngoại tác (cả tốt lẫn xấu).</li>
<li><b>Thời điểm dòng tiền quan trọng</b>: tiền đến sớm có giá trị hơn; cùng tổng tiền nhưng phân bố khác thì NPV và IRR khác.</li>
</ol>
<div class="example"><div class="ex-h">Ví dụ 7.1</div>
<p>Một chuỗi cà phê cân nhắc mở dòng sản phẩm đóng chai. Năm ngoái đã chi 200 triệu thuê tư vấn. Dự án dùng một kho đang cho thuê 50 triệu/năm. Dự kiến bán thêm 3 tỷ/năm đồ uống đóng chai nhưng doanh số tại quán giảm 400 triệu/năm. Dự án vay ngân hàng, lãi 300 triệu/năm. Khoản nào đưa vào dòng tiền dự án?</p>
<details><summary>Xem lời giải</summary>
<p>Bỏ: 200 triệu tư vấn (chìm) và 300 triệu lãi vay (đã nằm trong r).<br>Tính: 3 tỷ doanh thu mới, <b>trừ</b> 400 triệu doanh thu bị ăn mòn, <b>trừ</b> 50 triệu tiền thuê kho bị mất (chi phí cơ hội), rồi tính thuế trên phần chênh lệch.</p></details></div>`,
    },
    {
      title: '8. Sai lầm thường gặp trong phân bổ vốn',
      minutes: 8,
      html: `
<p>Kỹ thuật NPV không khó; điều làm hỏng quyết định thường là <b>dữ liệu đầu vào sai</b> và <b>thiên lệch của con người</b>.</p>
<h4>Lỗi nhận thức khi phân tích</h4>
<table class="plain"><thead><tr><th>Lỗi</th><th>Biểu hiện</th></tr></thead><tbody>
<tr><td>Sai lầm dự báo nội bộ</td><td>Ước tính sai chi phí, doanh thu, lợi suất; quên rằng đối thủ sẽ phản ứng (giảm giá, bắt chước) làm lợi nhuận vượt trội biến mất nhanh</td></tr>
<tr><td>Coi nguồn vốn nội bộ là "miễn phí"</td><td>Dùng lợi nhuận giữ lại mà không tính chi phí cơ hội, dẫn đến nhận dự án có lợi suất thấp hơn chi phí vốn</td></tr>
<tr><td>Xử lý lạm phát không nhất quán</td><td>Dòng tiền danh nghĩa phải chiết khấu bằng lãi suất danh nghĩa; dòng tiền thực bằng lãi suất thực. Trộn lẫn làm sai NPV</td></tr>
</tbody></table>
<div class="example"><div class="ex-h">Ví dụ 8.1 - Lạm phát</div>
<p>Lãi suất thực 5%, lạm phát kỳ vọng 3%. Lãi suất danh nghĩa tương ứng?</p>
<details><summary>Xem lời giải</summary><p>(1 + 5%)(1 + 3%) - 1 = <b>8,15%</b>. Nếu chiết khấu dòng tiền <b>thực</b> bằng 8,15%, NPV bị đánh giá <b>thấp</b>; nếu chiết khấu dòng tiền <b>danh nghĩa</b> bằng 5%, NPV bị đánh giá <b>cao</b>.</p></details></div>
<h4>Thiên lệch hành vi</h4>
<ul>
<li>${t('inertia', 'Quán tính (inertia)')}: năm nào cũng phân bổ vốn cho các mảng như năm trước, dù lợi suất biên đã giảm.</li>
<li><b>Tập trung lợi nhuận kế toán ngắn hạn</b>: chọn dự án làm đẹp EPS năm nay thay vì dự án tạo giá trị dài hạn (ví dụ cắt R&amp;D).</li>
<li>${t('petproject', 'Dự án tâm huyết (pet project)')}: lãnh đạo ưu ái một dự án, bỏ qua phân tích hoặc dùng dự báo quá lạc quan.</li>
<li><b>Bỏ qua phương án thay thế và kịch bản</b>: chỉ xem "làm hay không làm" mà không so với các cách khác, không phân tích kịch bản xấu.</li>
</ul>
<p class="tip">Đề thi thường cho một đoạn mô tả hành vi và hỏi đó là lỗi gì. Mẹo nhận diện: "giữ nguyên ngân sách như mọi năm" là inertia; "CEO rất thích dự án này" là pet project; "để đạt mục tiêu EPS quý" là short-term accounting focus.</p>`,
    },
    {
      title: '9. Quyền chọn thực (real options)',
      minutes: 10,
      html: `
<p>${t('realopt', 'Quyền chọn thực (real option)')} là quyền, không phải nghĩa vụ, điều chỉnh dự án sau này khi có thêm thông tin. Giống quyền chọn tài chính nhưng tài sản cơ sở là tài sản thực (nhà máy, mỏ, dự án). Chỉ thực hiện khi có lợi, nên quyền chọn luôn có giá trị không âm.</p>
<table class="plain"><thead><tr><th>Nhóm</th><th>Loại</th><th>Ý nghĩa</th></tr></thead><tbody>
<tr><td>${t('timingopt', 'Thời điểm (timing)')}</td><td>Trì hoãn đầu tư</td><td>Chờ thêm thông tin (giá, nhu cầu) rồi mới quyết định</td></tr>
<tr><td rowspan="2">Quy mô (sizing)</td><td>${t('abandon', 'Từ bỏ (abandonment)')}</td><td>Dừng dự án, bán thanh lý tài sản nếu kết quả xấu</td></tr>
<tr><td>${t('growthopt', 'Mở rộng (growth/expansion)')}</td><td>Đầu tư thêm nếu kết quả tốt</td></tr>
<tr><td rowspan="2">${t('flexopt', 'Linh hoạt (flexibility)')}</td><td>Định giá (price-setting)</td><td>Tăng giá khi nhu cầu vượt công suất</td></tr>
<tr><td>Sản xuất (production)</td><td>Làm thêm giờ, đổi nguyên liệu đầu vào, đổi sản phẩm đầu ra</td></tr>
<tr><td>${t('fundopt', 'Cơ bản (fundamental)')}</td><td>Cả dự án là một quyền chọn</td><td>Chỉ khoan giếng dầu nếu giá dầu đủ cao; mỏ vàng chỉ khai thác khi giá vàng vượt chi phí</td></tr>
</tbody></table>
<div class="formula">NPV có quyền chọn = NPV không có quyền chọn - chi phí quyền chọn + giá trị quyền chọn</div>
<div class="example"><div class="ex-h">Ví dụ 9.1 - Quyền từ bỏ</div>
<p>Đầu tư 100 hôm nay. Sau 1 năm, dự án trị giá 150 (xác suất 50%) hoặc 60 (xác suất 50%). r = 10%. Nếu có điều khoản cho phép bán lại thiết bị với giá 90 sau 1 năm thì sao?</p>
<details><summary>Xem lời giải</summary>
<p>Không có quyền chọn: NPV = (0,5 × 150 + 0,5 × 60)/1,1 - 100 = 95,45 - 100 = <b>-4,55</b>: bỏ.<br>
Có quyền từ bỏ: nhánh xấu chọn bán được 90 thay vì giữ 60. NPV = (0,5 × 150 + 0,5 × 90)/1,1 - 100 = <b>9,09</b>: nhận.<br>
Giá trị quyền chọn = 9,09 - (-4,55) = <b>13,64</b>.</p></details></div>
<p class="tip">Các cách đánh giá real options từ đơn giản đến phức tạp: (1) tính NPV không có quyền chọn, nếu đã dương thì không cần định giá quyền chọn; (2) cây quyết định như ví dụ trên; (3) mô hình định giá quyền chọn. Ở Level I chỉ cần nhận diện loại quyền chọn và hiểu nó <b>làm tăng</b> giá trị dự án.</p>`,
    },
    {
      title: '10. Tóm tắt và bẫy thường gặp',
      minutes: 4,
      html: `
<table class="plain"><thead><tr><th>Tình huống</th><th>Nhớ</th></tr></thead><tbody>
<tr><td>Phân loại dự án</td><td>Going concern → regulatory → expansion → ngành mới: bất định tăng dần</td></tr>
<tr><td>Quy tắc NPV / IRR</td><td>NPV &gt; 0; IRR &gt; r. Dự án độc lập thì cùng kết luận</td></tr>
<tr><td>Mâu thuẫn xếp hạng</td><td>Dự án loại trừ: chọn theo NPV</td></tr>
<tr><td>Dòng tiền đổi dấu nhiều lần</td><td>Có thể nhiều IRR, dùng NPV</td></tr>
<tr><td>Crossover rate</td><td>IRR của dòng tiền chênh lệch giữa hai dự án</td></tr>
<tr><td>ROIC</td><td>NOPAT / vốn đầu tư bình quân (nợ + vốn chủ); so với WACC</td></tr>
<tr><td>Dòng tiền dự án</td><td>Bỏ chi phí chìm và chi phí tài trợ; tính chi phí cơ hội, ăn mòn, sau thuế</td></tr>
<tr><td>Lạm phát</td><td>Danh nghĩa với danh nghĩa, thực với thực</td></tr>
<tr><td>Real options</td><td>Chỉ làm tăng giá trị; nhận diện timing, abandonment, expansion, flexibility, fundamental</td></tr>
<tr><td>Máy tính</td><td>Xóa CF bằng 2ND CE/C; CF0 âm; dùng F01 cho dòng tiền lặp liền nhau</td></tr>
</tbody></table>
<p>Tiếp theo: bấm sang tab <b>Luyện tập</b> để làm 10 câu (rút ngẫu nhiên từ ngân hàng 30 câu, mỗi lần làm một bộ khác). Module sau (CF-06) học cách tính r cho dự án: WACC và cấu trúc vốn.</p>`,
    },
  ];

  const glossary = {
    capinv: ['Capital investment', 'Đầu tư vốn', 'Khoản chi dài hạn cho tài sản hoặc dự án tạo dòng tiền trong nhiều năm.'],
    npv: ['Net present value (NPV)', 'Giá trị hiện tại ròng', 'Tổng PV của mọi dòng tiền vào và ra của dự án, chiết khấu ở lợi suất yêu cầu.'],
    irr: ['Internal rate of return (IRR)', 'Tỷ suất hoàn vốn nội bộ', 'Lãi suất chiết khấu làm NPV bằng 0; lợi suất kỳ vọng của dự án.'],
    roic: ['Return on invested capital (ROIC)', 'Lợi suất trên vốn đầu tư', 'NOPAT chia vốn đầu tư bình quân (nợ + vốn chủ); so với WACC để biết công ty có tạo giá trị không.'],
    nopat: ['Net operating profit after tax (NOPAT)', 'Lợi nhuận hoạt động sau thuế', 'EBIT x (1 - t): lợi nhuận hoạt động trước lãi vay, sau thuế.'],
    goingconcern: ['Going concern project', 'Dự án duy trì hoạt động', 'Thay thế, bảo trì hoặc nâng cấp tài sản để giữ hoạt động hiện tại hiệu quả.'],
    regulatory: ['Regulatory/compliance project', 'Dự án tuân thủ quy định', 'Dự án bắt buộc do cơ quan quản lý hoặc bên ngoài yêu cầu, thường không tạo doanh thu.'],
    expansion: ['Expansion project', 'Dự án mở rộng', 'Tăng quy mô: sản phẩm mới, thị trường mới, mua lại công ty.'],
    newline: ['New lines of business and other projects', 'Ngành kinh doanh mới', 'Dự án ngoài lĩnh vực cốt lõi, rủi ro cao, khó phân tích bằng kỹ thuật chuẩn.'],
    capalloc: ['Capital allocation', 'Phân bổ vốn', 'Quy trình công ty chọn và tài trợ các dự án đầu tư dài hạn.'],
    postaudit: ['Post-investment review', 'Hậu kiểm đầu tư', 'So sánh kết quả thực tế với dự báo sau khi dự án đã triển khai.'],
    independent: ['Independent projects', 'Dự án độc lập', 'Quyết định về dự án này không ảnh hưởng đến dự án khác.'],
    mutex: ['Mutually exclusive projects', 'Dự án loại trừ lẫn nhau', 'Chỉ có thể chọn một trong các dự án.'],
    rationing: ['Capital rationing', 'Giới hạn vốn', 'Ngân sách đầu tư có hạn, không thực hiện hết được các dự án NPV dương.'],
    hurdle: ['Required rate of return / hurdle rate', 'Lợi suất yêu cầu', 'Lợi suất tối thiểu dự án phải đạt để bù chi phí cơ hội và rủi ro.'],
    wacc: ['Weighted average cost of capital (WACC)', 'Chi phí vốn bình quân gia quyền', 'Trung bình có trọng số của chi phí nợ sau thuế và chi phí vốn chủ; học ở CF-06.'],
    npvprofile: ['NPV profile', 'Đường NPV theo lãi suất', 'Đồ thị NPV của dự án theo lãi suất chiết khấu; cắt trục hoành tại IRR.'],
    crossover: ['Crossover rate', 'Lãi suất giao cắt', 'Lãi suất làm NPV của hai dự án bằng nhau; bằng IRR của dòng tiền chênh lệch.'],
    multiirr: ['Nonconventional cash flows / multiple IRR', 'Dòng tiền không thông thường', 'Dòng tiền đổi dấu nhiều lần, có thể có nhiều IRR hoặc không có IRR.'],
    incremental: ['Incremental cash flow', 'Dòng tiền tăng thêm', 'Chênh lệch dòng tiền của công ty giữa có và không có dự án.'],
    sunk: ['Sunk cost', 'Chi phí chìm', 'Chi phí đã phát sinh, không thu hồi được, không đổi theo quyết định; không tính vào dự án.'],
    opportunity: ['Opportunity cost', 'Chi phí cơ hội', 'Giá trị của phương án tốt nhất bị bỏ qua khi dùng nguồn lực cho dự án.'],
    externality: ['Externality', 'Ngoại tác', 'Tác động của dự án lên các hoạt động khác của công ty, có thể tích cực hoặc tiêu cực.'],
    cannibal: ['Cannibalization', 'Ăn mòn doanh thu', 'Sản phẩm mới lấy bớt doanh số của sản phẩm hiện có của chính công ty.'],
    inertia: ['Inertia', 'Quán tính', 'Giữ mức phân bổ vốn như cũ dù lợi suất biên đã thay đổi.'],
    petproject: ['Pet project', 'Dự án tâm huyết', 'Dự án được lãnh đạo ưu ái, duyệt mà không qua phân tích đầy đủ.'],
    realopt: ['Real option', 'Quyền chọn thực', 'Quyền điều chỉnh dự án đầu tư thực trong tương lai; không bắt buộc thực hiện.'],
    timingopt: ['Timing option', 'Quyền chọn thời điểm', 'Quyền trì hoãn đầu tư để chờ thêm thông tin.'],
    abandon: ['Abandonment option', 'Quyền từ bỏ', 'Quyền dừng dự án và thanh lý tài sản khi kết quả xấu.'],
    growthopt: ['Growth (expansion) option', 'Quyền mở rộng', 'Quyền đầu tư thêm khi dự án thành công.'],
    flexopt: ['Flexibility option', 'Quyền chọn linh hoạt', 'Quyền điều chỉnh giá bán hoặc cách sản xuất khi điều kiện thay đổi.'],
    fundopt: ['Fundamental option', 'Quyền chọn cơ bản', 'Cả dự án là một quyền chọn, phụ thuộc vào giá một tài sản (dầu, vàng...).'],
  };

  const practice = [
    { q: 'Dự án có dòng tiền: t0 = -500, t1 = 150, t2 = 200, t3 = 250. Lợi suất yêu cầu 8%. NPV gần nhất với:', choices: ['8,81', '100,00', '8,16'], answer: 0, explain: 'CF0 = -500, C01 = 150, C02 = 200, C03 = 250, I = 8, CPT NPV = 8,81. Lựa chọn 100,00 là tổng dòng tiền chưa chiết khấu. Lựa chọn 8,16 chiết khấu cả CF0 thêm một kỳ (mọi dòng tiền lùi 1 năm), lỗi khi dùng hàm NPV của Excel mà quên CF0 ở t = 0.' },
    { q: 'Dự án đầu tư 1.000, thu về 400 mỗi năm trong 3 năm. IRR của dự án gần nhất với:', choices: ['6,67%', '9,70%', '6,27%'], answer: 1, explain: 'CF0 = -1.000, C01 = 400, F01 = 3, CPT IRR = 9,70%. Lựa chọn 6,67% là lợi nhuận bình quân (200/3) chia vốn đầu tư; lựa chọn 6,27% là (1.200/1.000)^(1/3) - 1, coi như toàn bộ tiền nhận ở cuối năm 3. Cả hai đều bỏ qua thời điểm dòng tiền.' },
    { q: 'Hai dự án loại trừ lẫn nhau, r = 8%. Dự án X: NPV = 60,10, IRR = 17,16%. Dự án Y: NPV = 111,50, IRR = 16,61%. Công ty nên:', choices: ['Chọn X vì IRR cao hơn', 'Chọn Y vì NPV cao hơn', 'Chọn cả hai vì cả hai có NPV dương'], answer: 1, explain: 'Với dự án loại trừ, khi NPV và IRR mâu thuẫn thì chọn theo NPV vì NPV đo trực tiếp giá trị tạo thêm cho cổ đông. Phương án chọn cả hai sai vì dự án loại trừ chỉ chọn được một. Phương án chọn X theo IRR sai vì IRR giả định tái đầu tư ở mức IRR và không phản ánh quy mô giá trị.' },
    { q: 'Dòng tiền nào sau đây có khả năng có NHIỀU HƠN MỘT IRR?', choices: ['-100; +50; +60; +70', '+100; -40; -40; -40', '-100; +230; -132'], answer: 2, explain: 'Dòng tiền -100; +230; -132 đổi dấu hai lần (âm, dương, âm), có hai IRR là 10% và 20%. Hai dòng tiền còn lại chỉ đổi dấu một lần nên có tối đa một IRR. Dòng tiền +100; -40; -40; -40 là dòng tiền của một khoản vay (nhận trước, trả sau), vẫn chỉ có một IRR.' },
    { q: 'Công ty có EBIT 80, thuế suất 25%. Vốn đầu tư (nợ + vốn chủ, sổ sách) đầu năm 500, cuối năm 700. ROIC gần nhất với:', choices: ['10,00%', '13,33%', '8,57%'], answer: 0, explain: 'NOPAT = 80 x 0,75 = 60; vốn đầu tư bình quân = (500 + 700)/2 = 600; ROIC = 60/600 = 10%. Lựa chọn 13,33% quên trừ thuế (80/600). Lựa chọn 8,57% dùng vốn cuối năm 700 thay vì bình quân.' },
    { q: 'Khi đánh giá dự án sản phẩm mới, khoản nào sau đây NÊN đưa vào dòng tiền dự án?', choices: ['Chi phí khảo sát thị trường 50.000 đã trả năm ngoái', 'Tiền thuê 20.000/năm bị mất do dùng nhà xưởng hiện có thay vì cho thuê', 'Chi phí lãi vay của khoản vay tài trợ dự án'], answer: 1, explain: 'Tiền thuê bị mất là chi phí cơ hội, phải tính. Chi phí khảo sát thị trường đã trả là chi phí chìm, đã chi dù làm hay không. Chi phí lãi vay là chi phí tài trợ, đã phản ánh trong lãi suất chiết khấu; trừ thêm sẽ tính hai lần.' },
    { q: 'Một nhà máy hóa chất phải lắp hệ thống xử lý nước thải để đáp ứng quy định môi trường mới. Đây là loại dự án:', choices: ['Mở rộng (expansion)', 'Duy trì hoạt động (going concern)', 'Tuân thủ quy định (regulatory/compliance)'], answer: 2, explain: 'Dự án bắt buộc do cơ quan quản lý áp đặt, thường không tạo doanh thu: regulatory/compliance. Không làm tăng quy mô nên không phải expansion; không phải thay thế tài sản cũ để duy trì hiệu suất nên không phải going concern.' },
    { q: 'Một công ty dầu khí chỉ khoan giếng nếu giá dầu vượt 70 USD/thùng; nếu không thì giữ nguyên quyền khai thác. Đây là dạng quyền chọn thực nào?', choices: ['Fundamental option', 'Abandonment option', 'Price-setting option'], answer: 0, explain: 'Cả dự án phụ thuộc vào giá một tài sản (dầu) nên bản thân dự án là một quyền chọn: fundamental option. Abandonment là dừng một dự án đang chạy; price-setting là tăng giá bán khi nhu cầu cao.' },
    { q: 'Dự án đầu tư 200 hôm nay. Sau 1 năm, dự án trị giá 260 hoặc 150 với xác suất bằng nhau; r = 10%. Nếu công ty có quyền bán lại tài sản với giá 190 sau 1 năm, NPV của dự án (có quyền chọn) gần nhất với:', choices: ['-13,64', '18,18', '4,55'], answer: 2, explain: 'Nhánh xấu chọn bán 190 thay vì giữ 150. NPV = (0,5 x 260 + 0,5 x 190)/1,1 - 200 = 4,55. Lựa chọn -13,64 là NPV không có quyền chọn; lựa chọn 18,18 là giá trị của riêng quyền từ bỏ (4,55 - (-13,64)), không phải NPV dự án.' },
    { q: 'Dự án đầu tư 250, tạo dòng tiền thực (chưa tính lạm phát) 100 mỗi năm trong 3 năm. Lãi suất thực 5%, lạm phát 3% (lãi suất danh nghĩa 8,15%). NPV đúng gần nhất với:', choices: ['22,32', '7,01', '50,00'], answer: 0, explain: 'Dòng tiền thực chiết khấu bằng lãi suất thực 5%: NPV = 22,32. Lựa chọn 7,01 chiết khấu dòng tiền thực bằng lãi suất danh nghĩa (lỗi không nhất quán về lạm phát) nên NPV bị đánh giá thấp. Lựa chọn 50,00 là tổng dòng tiền chưa chiết khấu.' },
    { q: "Một hãng hàng không thay thế động cơ đã hết tuổi thọ trên các máy bay đang khai thác, không mở thêm đường bay mới. Đây là loại dự án:", choices: ["Mở rộng (expansion)", "Duy trì hoạt động (going concern)", "Ngành mới (new line of business)"], answer: 1, explain: "Thay thế tài sản hết tuổi thọ để giữ hoạt động hiện tại là dự án duy trì hoạt động: dễ ước tính vì dựa trên dữ liệu sẵn có, không tạo thêm doanh thu mới. Mở rộng làm tăng quy mô, như thêm đường bay. Ngành mới là hoạt động ngoài lĩnh vực cốt lõi." },
    { q: "Xét các loại dự án đầu tư vốn, nhận định nào là chính xác nhất?", choices: ["Dự án ngành mới thường bất định nhất, cần nhiều thời gian phân tích và khó định giá bằng kỹ thuật chuẩn", "Dự án duy trì hoạt động bất định nhất vì không tạo thêm doanh thu", "Dự án tuân thủ quy định chỉ nên làm khi NPV riêng của dự án dương"], answer: 0, explain: "Đi từ duy trì hoạt động, tuân thủ, mở rộng đến ngành mới, mức bất định và nhu cầu phân tích tăng dần. Lựa chọn \"duy trì hoạt động bất định nhất\" đảo ngược thứ tự: loại này dễ ước tính nhất. Lựa chọn về dự án tuân thủ sai vì dự án tuân thủ có NPV âm vẫn có thể đúng nếu không làm thì bị phạt hay bị đóng cửa; cần so NPV của cả công ty khi làm và không làm." },
    { q: "Mục đích chính của bước hậu kiểm (post-investment review) trong quy trình phân bổ vốn là:", choices: ["Xác định người dự báo sai để kỷ luật", "Tính lại IRR để thay thế NPV khi xếp hạng dự án", "So kết quả thực tế với dự báo để kiểm chứng giả định, cải thiện dự báo sau này và phát hiện thiên lệch có hệ thống"], answer: 2, explain: "Hậu kiểm so thực tế với dự báo, giải thích chênh lệch để cải thiện dự báo lần sau, tạo kỷ luật và sinh ý tưởng mới. Lựa chọn \"xác định người dự báo sai để kỷ luật\" đi ngược mục đích: hậu kiểm không dùng để phạt. Lựa chọn \"tính lại IRR thay thế NPV\" không liên quan đến hậu kiểm." },
    { q: "Công ty có ngân sách đầu tư 1.000 và bốn dự án độc lập, không thể chia nhỏ: A (đầu tư 700, NPV 100), B (đầu tư 500, NPV 75), C (đầu tư 500, NPV 70), D (đầu tư 300, NPV 30). Công ty nên chọn:", choices: ["A và D", "Cả bốn dự án vì đều có NPV dương", "B và C"], answer: 2, explain: "Với giới hạn vốn, chọn tổ hợp có tổng NPV lớn nhất trong ngân sách. B + C dùng 1.000, NPV 145; A + D dùng 1.000, NPV 130; các tổ hợp khác thấp hơn. Lựa chọn \"A và D\" bắt đầu từ dự án có NPV lớn nhất rồi lấp phần còn lại, bỏ qua tổ hợp tốt hơn. Lựa chọn \"cả bốn dự án\" cần 2.000, vượt ngân sách." },
    { q: "Dự án có dòng tiền: t0 = -800, t1 = 200, t2 = 300, t3 = 350, t4 = 250. Lợi suất yêu cầu 9%. NPV gần nhất với:", choices: ["76,48", "83,36", "300,00"], answer: 1, explain: "NPV = -800 + 200/1,09 + 300/1,09^2 + 350/1,09^3 + 250/1,09^4 = 83,36. Lựa chọn 76,48 chiết khấu cả CF0 một năm (coi khoản đầu tư xảy ra ở t = 1), lỗi hay gặp khi dùng hàm NPV của bảng tính. Lựa chọn 300,00 là tổng dòng tiền chưa chiết khấu." },
    { q: "Dự án đầu tư 1.200 và thu về 300, 500, 700 lần lượt vào cuối năm 1, 2, 3. IRR của dự án gần nhất với:", choices: ["8,33%", "14,07%", "10,49%"], answer: 2, explain: "IRR là lãi suất làm NPV = 0: CF0 = -1.200, C01 = 300, C02 = 500, C03 = 700, CPT IRR = 10,49%. Lựa chọn 14,07% nhập dòng tiền sai thứ tự (700, 500, 300), bỏ qua tầm quan trọng của thời điểm dòng tiền. Lựa chọn 8,33% lấy lợi nhuận chưa chiết khấu 300/1.200 chia đều cho 3 năm, không phải IRR." },
    { q: "Hai dự án loại trừ lẫn nhau. Dự án M: -1.000; 600; 400; 300. Dự án N: -1.000; 100; 300; 1.050 (t = 0 đến 3). Lãi suất giao cắt (crossover rate) mà tại đó hai dự án có NPV bằng nhau gần nhất với:", choices: ["12,88%", "15,19%", "16,46%"], answer: 0, explain: "Crossover rate là IRR của dòng tiền chênh lệch N - M = (0; -500; -100; 750), bằng 12,88%. Dưới mức này N có NPV cao hơn, trên mức này M cao hơn. Lựa chọn 16,46% là IRR của M và 15,19% là IRR của N; tại các mức đó NPV của từng dự án bằng 0, không phải hai NPV bằng nhau." },
    { q: "Khi NPV và IRR xếp hạng ngược nhau với hai dự án loại trừ lẫn nhau, lý do chính khiến NPV được ưu tiên là:", choices: ["IRR không tính đến giá trị thời gian của tiền", "NPV giả định dòng tiền trung gian được tái đầu tư ở chi phí vốn, hợp lý hơn giả định tái đầu tư ở chính IRR, và NPV đo trực tiếp giá trị tạo thêm cho cổ đông", "NPV luôn cho kết quả cao hơn IRR"], answer: 1, explain: "NPV giả định tái đầu tư ở r, thực tế hơn giả định tái đầu tư ở IRR (thường quá lạc quan với dự án IRR cao), và NPV đo bằng tiền giá trị tăng thêm cho cổ đông. Lựa chọn \"IRR không tính giá trị thời gian\" sai vì IRR cũng chiết khấu dòng tiền. Lựa chọn \"NPV luôn cao hơn IRR\" vô nghĩa vì một bên là số tiền, một bên là tỷ lệ phần trăm." },
    { q: "Dự án có dòng tiền -1.000; 400; 500; 300 (t = 0 đến 3). Trên đồ thị NPV profile, đường NPV cắt trục tung (lãi suất chiết khấu bằng 0) tại mức NPV gần nhất với:", choices: ["200", "10,13%", "0"], answer: 0, explain: "Tại lãi suất 0%, NPV bằng tổng dòng tiền chưa chiết khấu: -1.000 + 400 + 500 + 300 = 200. Lựa chọn 10,13% là IRR, tức điểm đường NPV cắt trục hoành, không phải trục tung. Lựa chọn 0 là giá trị NPV tại IRR." },
    { q: "Công ty có EBIT 240, thuế suất 25%, doanh thu 1.500. Tổng nợ và vốn chủ (sổ sách) đầu năm 1.100, cuối năm 1.300. ROIC gần nhất với:", choices: ["13,85%", "15,00%", "20,00%"], answer: 1, explain: "NOPAT = 240 x (1 - 25%) = 180. Vốn đầu tư bình quân = (1.100 + 1.300)/2 = 1.200. ROIC = 180/1.200 = 15,00% = biên NOPAT 12% x vòng quay vốn 1,25. Lựa chọn 13,85% dùng vốn cuối năm thay vì bình quân. Lựa chọn 20,00% dùng EBIT trước thuế thay vì NOPAT." },
    { q: "Một công ty liên tục có lợi nhuận ròng dương, nhưng ROIC chỉ 6% trong khi WACC là 9%. Nhận định nào đúng nhất?", choices: ["Công ty đang tạo giá trị vì có lãi kế toán", "Công ty tạo giá trị nếu tăng vòng quay vốn, bất kể biên lợi nhuận", "Công ty đang phá hủy giá trị trên vốn đã đầu tư dù vẫn có lãi kế toán"], answer: 2, explain: "ROIC < WACC nghĩa là lợi suất trên vốn thấp hơn chi phí cơ hội của vốn, nên công ty phá hủy giá trị dù có lãi kế toán. Lựa chọn \"có lãi kế toán nên tạo giá trị\" bỏ qua chi phí vốn chủ sở hữu. Lựa chọn về vòng quay vốn sai vì ROIC = biên NOPAT x vòng quay; điều quan trọng là tích của hai yếu tố so với WACC." },
    { q: "So với NPV và IRR, ROIC có đặc điểm nào?", choices: ["ROIC dùng dòng tiền dự báo để đánh giá từng dự án trước khi đầu tư", "ROIC dựa trên số liệu kế toán đã công bố, thường được nhà phân tích bên ngoài dùng để đánh giá việc phân bổ vốn của cả công ty sau khi đầu tư", "ROIC cho biết chính xác dự án mới cụ thể nào nên làm"], answer: 1, explain: "ROIC dùng số liệu kế toán, nhìn về quá khứ, ở mức công ty hay mảng kinh doanh, phù hợp với nhà phân tích bên ngoài. Lựa chọn \"dùng dòng tiền dự báo cho từng dự án\" mô tả NPV và IRR. Lựa chọn \"cho biết dự án mới cụ thể nào nên làm\" là hạn chế của ROIC: con số ở mức công ty không đánh giá được từng dự án mới." },
    { q: "Một dự án sản phẩm mới dự kiến trong năm 1: doanh thu tăng thêm 4.000, chi phí hoạt động tăng thêm 2.500; sản phẩm cũ bị ăn mòn làm lợi nhuận gộp giảm 300; dùng kho hiện có nên mất tiền cho thuê 100. Năm ngoái công ty đã chi 150 khảo sát thị trường, và khoản vay tài trợ dự án có lãi 200/năm. Thuế suất 20%, bỏ qua khấu hao và vốn lưu động. Dòng tiền sau thuế tăng thêm của năm 1 gần nhất với:", choices: ["880", "1.200", "600"], answer: 0, explain: "Dòng tiền tăng thêm = (4.000 - 2.500 - 300 - 100) x (1 - 20%) = 880: trừ phần ăn mòn và chi phí cơ hội. Bỏ 150 (chi phí chìm) và 200 lãi vay (chi phí tài trợ đã nằm trong lãi suất chiết khấu). Lựa chọn 1.200 bỏ qua ăn mòn và chi phí cơ hội. Lựa chọn 600 trừ thêm chi phí chìm và lãi vay." },
    { q: "Một công ty có nhiều lợi nhuận giữ lại nên chấp thuận các dự án có IRR 6% với lý do \"dùng tiền của mình thì không tốn chi phí vốn\", dù WACC là 10%. Đây là sai lầm:", choices: ["Coi nguồn vốn nội bộ là miễn phí, bỏ qua chi phí cơ hội của lợi nhuận giữ lại", "Xử lý lạm phát không nhất quán", "Quán tính trong phân bổ vốn"], answer: 0, explain: "Lợi nhuận giữ lại thuộc về cổ đông và có chi phí cơ hội; nhận dự án có lợi suất thấp hơn chi phí vốn là phá hủy giá trị. Lạm phát không nhất quán là trộn dòng tiền danh nghĩa với lãi suất thực hoặc ngược lại. Quán tính là phân bổ vốn như các năm trước dù lợi suất biên đã thay đổi." },
    { q: "Năm nào công ty cũng chia ngân sách đầu tư cho các mảng kinh doanh theo đúng tỷ lệ như năm trước, dù lợi suất của mảng truyền thống đã giảm mạnh còn mảng mới đang tăng trưởng. Đây là thiên lệch:", choices: ["Dự án tâm huyết (pet project)", "Quán tính (inertia)", "Tập trung lợi nhuận kế toán ngắn hạn"], answer: 1, explain: "Giữ nguyên tỷ lệ phân bổ như mọi năm bất kể lợi suất biên thay đổi là quán tính. Pet project là lãnh đạo ưu ái một dự án cụ thể và bỏ qua phân tích. Tập trung lợi nhuận kế toán ngắn hạn là chọn dự án làm đẹp EPS trước mắt." },
    { q: "Để đạt mục tiêu EPS của quý, ban điều hành hoãn một dự án R&D có NPV dương lớn vì chi phí R&D làm giảm lợi nhuận kế toán năm nay. Đây là sai lầm:", choices: ["Quán tính (inertia)", "Bỏ qua chi phí chìm", "Tập trung vào lợi nhuận kế toán ngắn hạn"], answer: 2, explain: "Hy sinh dự án tạo giá trị dài hạn để làm đẹp EPS trước mắt là tập trung lợi nhuận kế toán ngắn hạn. Quán tính là lặp lại phân bổ vốn như các năm trước. Chi phí chìm là khoản đã chi, không liên quan đến quyết định hoãn R&D vì lý do EPS." },
    { q: "Một nhà phân tích dự báo dòng tiền danh nghĩa (đã bao gồm lạm phát 4%) nhưng chiết khấu bằng lãi suất thực 6%. NPV tính được nhiều khả năng:", choices: ["Bị đánh giá cao hơn thực tế", "Bị đánh giá thấp hơn thực tế", "Chính xác vì lạm phát tác động như nhau lên tử và mẫu"], answer: 0, explain: "Dòng tiền danh nghĩa phải chiết khấu bằng lãi suất danh nghĩa (1,06 x 1,04 - 1 = 10,24%). Dùng lãi suất thực 6% thấp hơn làm NPV bị thổi phồng. Lựa chọn \"đánh giá thấp hơn\" là trường hợp ngược lại: chiết khấu dòng tiền thực bằng lãi suất danh nghĩa. Lựa chọn \"chính xác\" sai vì lạm phát chỉ có trong tử số, không có trong mẫu số." },
    { q: "Dự án có NPV không kèm quyền chọn là -50. Công ty có quyền mở rộng sau 1 năm: nếu nhu cầu cao (xác suất 50%), đầu tư thêm 400 để nhận dòng tiền có giá trị 700 tại thời điểm năm 1; nếu nhu cầu thấp (50%), phần mở rộng chỉ đáng 200 nên sẽ không thực hiện. Lợi suất yêu cầu 10%. NPV của dự án khi tính cả quyền mở rộng gần nhất với:", choices: ["-4,55", "100,00", "86,36"], answer: 2, explain: "Quyền chọn chỉ được thực hiện khi có lợi: giá trị = 0,5 x (700 - 400)/1,1 = 136,36. NPV có quyền chọn = -50 + 136,36 = 86,36. Lựa chọn -4,55 buộc mở rộng ở cả hai trạng thái, kể cả khi lỗ 200; bỏ qua bản chất quyền chứ không phải nghĩa vụ. Lựa chọn 100,00 quên chiết khấu giá trị quyền chọn về hiện tại." },
    { q: "Một nhà máy nhiệt điện được thiết kế để có thể chuyển đổi giữa khí tự nhiên và dầu, tùy nhiên liệu nào rẻ hơn tại từng thời điểm. Đây là quyền chọn thực dạng:", choices: ["Quyền chọn thời điểm (timing option)", "Quyền chọn linh hoạt sản xuất (production flexibility option)", "Quyền chọn từ bỏ (abandonment option)"], answer: 1, explain: "Khả năng đổi nguyên liệu đầu vào hoặc sản phẩm đầu ra là quyền chọn linh hoạt sản xuất. Quyền chọn thời điểm là trì hoãn quyết định đầu tư để chờ thêm thông tin. Quyền chọn từ bỏ là dừng dự án, thanh lý tài sản khi kết quả xấu." },
    { q: "Một công ty bất động sản đã mua đất nhưng quyết định chờ 2 năm để xem nhu cầu thị trường trước khi xây dựng. Giá trị của khả năng chờ này là:", choices: ["Quyền chọn mở rộng, luôn làm NPV giảm", "Quyền chọn định giá, cho phép tăng giá bán", "Quyền chọn thời điểm (timing option), làm tăng hoặc ít nhất không làm giảm giá trị dự án"], answer: 2, explain: "Trì hoãn đầu tư để chờ thêm thông tin là quyền chọn thời điểm; như mọi quyền chọn, nó có giá trị không âm vì chỉ thực hiện khi có lợi. Lựa chọn \"quyền chọn mở rộng, luôn làm NPV giảm\" vừa sai loại vừa sai tác động. Lựa chọn \"quyền chọn định giá\" là tăng giá khi nhu cầu vượt công suất, không phải chờ đợi trước khi đầu tư." },
  ];

  // Widget: NPV profile của dự án S và L (ví dụ 5.1).
  const widgets = {
    npvProfile(el) {
      el.innerHTML = `
        <div class="w-row"><label>Lãi suất chiết khấu r: <b data-o="r">10%</b><input type="range" min="0" max="25" step="0.5" value="10" data-i="r"></label>
        <label>S: -1.000; 800; 350; 100<br>L: -1.000; 100; 300; 1.100</label></div>
        <div class="w-out"><div data-o="svg"></div><div class="w-price" data-o="p"></div><div class="w-note" data-o="note"></div></div>`;
      const q = s => el.querySelector(s);
      const fmt = (x, d = 2) => x.toFixed(d).replace('.', ',');
      const S = [-1000, 800, 350, 100], Lc = [-1000, 100, 300, 1100];
      const npv = (r, c) => c.reduce((a, x, i) => a + x / (1 + r) ** i, 0);
      const W = 600, H = 300, l = 60, rr = 580, tp = 20, b = 250;
      const xs = r => l + (r / 0.25) * (rr - l);
      const ys = v => b - ((v + 200) / 700) * (b - tp);
      const line = c => { let p = ''; for (let i = 0; i <= 50; i++) { const r = i / 200; p += `${xs(r).toFixed(1)},${ys(npv(r, c)).toFixed(1)} `; } return p; };
      const upd = () => {
        const r = +q('[data-i="r"]').value / 100;
        const a = npv(r, S), c = npv(r, Lc);
        let s = `<svg viewBox="0 0 ${W} ${H}" class="sv" style="max-height:340px" role="img" aria-label="NPV profile của hai dự án">`;
        [-200, 0, 200, 400].forEach(v => { s += `<line x1="${l}" y1="${ys(v)}" x2="${rr}" y2="${ys(v)}" class="${v === 0 ? 'sv-axis' : 'sv-grid'}"/><text x="${l - 8}" y="${ys(v) + 5}" class="sv-muted" text-anchor="end">${v}</text>`; });
        [0, 0.05, 0.10, 0.15, 0.20, 0.25].forEach(x => { s += `<text x="${xs(x)}" y="${b + 22}" class="sv-muted">${Math.round(x * 100)}%</text>`; });
        s += `<line x1="${l}" y1="${tp}" x2="${l}" y2="${b}" class="sv-axis"/>`;
        s += `<line x1="${xs(r)}" y1="${tp}" x2="${xs(r)}" y2="${b}" class="sv-dash"/>`;
        s += `<polyline points="${line(S)}" class="sv-curve"/><polyline points="${line(Lc)}" class="sv-down" fill="none"/>`;
        s += `<circle cx="${xs(r)}" cy="${ys(a)}" r="6" class="sv-node up"/><circle cx="${xs(r)}" cy="${ys(c)}" r="6" class="sv-node down"/>`;
        s += `<text x="${xs(0.01)}" y="${ys(250) + 20}" class="sv-txt" text-anchor="start">S</text><text x="${xs(0.01)}" y="${ys(500) - 8}" class="sv-txt sv-t-down" text-anchor="start">L</text>`;
        s += `<text x="${(l + rr) / 2}" y="${H - 4}" class="sv-muted">Lãi suất chiết khấu (trục ngang) - NPV (trục dọc)</text></svg>`;
        q('[data-o="svg"]').innerHTML = s;
        q('[data-o="r"]').textContent = `${fmt(r * 100, 1)}%`;
        q('[data-o="p"]').textContent = `NPV(S) = ${fmt(a)} ; NPV(L) = ${fmt(c)}`;
        const best = Math.max(a, c) < 0 ? 'Cả hai NPV âm: không chọn dự án nào.' : a > c ? 'S có NPV cao hơn: chọn S.' : 'L có NPV cao hơn: chọn L.';
        q('[data-o="note"]').textContent = `${best} IRR(S) = 17,16%, IRR(L) = 16,61%, crossover = 16,00%. L thu tiền muộn nên NPV của L nhạy với r hơn (đường dốc hơn).`;
      };
      el.addEventListener('input', upd);
      upd();
    },
  };

  window.LESSONS['CF-05'] = {
    moduleId: 'CF-05',
    calculator: 'BA II Plus',
    warmup: [
      'Ôn CF-04: vì sao một công ty có lãi vẫn có thể thiếu tiền mặt? Kể hai nguồn thanh khoản sơ cấp.',
      'Ôn QM-03/QM-04: MWR là gì và tính bằng phím nào trên BA II Plus?',
      'Đoán trước: một dự án đầu tư 1.000 và thu về tổng cộng 1.200 sau 3 năm. Vì sao chưa thể kết luận dự án có lãi?',
    ],
    sections,
    glossary,
    practice,
    widgets,
    slides: [],
    wrapup: [
      'Không nhìn tài liệu: viết quy tắc quyết định của NPV và IRR. Khi nào hai phương pháp mâu thuẫn và khi đó chọn theo cái nào?',
      'Liệt kê 3 khoản KHÔNG được đưa vào dòng tiền dự án và 3 khoản PHẢI đưa vào.',
      'Kể tên 5 loại quyền chọn thực và cho mỗi loại một ví dụ của riêng bạn.',
    ],
  };
}());
