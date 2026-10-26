// Bài giảng FI-07 - Yield and Yield Spread Measures for Fixed-Rate Bonds (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t, frac, keys } = window.CFAH;

  const sections = [
    {
      title: '1. Bức tranh lớn',
      minutes: 3,
      html: `
<p>FI-06 đi từ lợi suất ra giá. Module này đi chiều ngược lại và hỏi: <b>một con số lợi suất được đo như thế nào, và nó so với mốc nào?</b></p>
<ol>
  <li><b>Quy ước tần suất ghép lãi</b> (periodicity): cùng một trái phiếu có thể báo 5,67% hay 5,75% tùy cách tính năm. Phải quy về cùng quy ước trước khi so sánh. Ứng với LOS 1.</li>
  <li><b>Các thước đo lợi suất</b>: current yield, simple yield, YTM, yield-to-call, yield-to-worst, option-adjusted yield. Ứng với LOS 2.</li>
  <li><b>Các thước đo spread</b>: phần lợi suất cao hơn mốc chuẩn (benchmark), gồm G-spread, I-spread, Z-spread, OAS. Ứng với LOS 2.</li>
</ol>
<div class="key">Lợi suất trái phiếu = <b>lợi suất chuẩn</b> (lãi suất phi rủi ro, chủ yếu do kinh tế vĩ mô quyết định) + <b>spread</b> (bù rủi ro tín dụng, thanh khoản, thuế riêng của trái phiếu đó).</div>`,
    },
    {
      title: '2. Tần suất ghép lãi: quy đổi lợi suất năm',
      minutes: 9,
      html: `
<p>YTM của trái phiếu trả coupon m lần/năm được báo là lãi suất mỗi kỳ × m. Đây là một ${t('apr', 'lãi suất năm danh nghĩa (APR)')} với ${t('period', 'periodicity')} m. Hai lợi suất chỉ so sánh được khi cùng periodicity.</p>
<div class="formula">(1 + ${frac('APR<sub>m</sub>', 'm')})<sup>m</sup> = (1 + ${frac('APR<sub>n</sub>', 'n')})<sup>n</sup></div>
<p>Với n = 1 thì vế phải là lợi suất hiệu dụng năm (effective annual yield). Lợi suất với periodicity 2 còn gọi là ${t('sabb', 'semiannual bond basis yield')}, quy ước phổ biến nhất ở Mỹ.</p>

<div class="example"><div class="ex-h">Ví dụ 2.1 - Một trái phiếu, bốn cách báo lợi suất</div>
<p>Trái phiếu 7 năm, coupon 5% trả nửa năm, giá 96,20. Tìm YTM theo quy ước nửa năm, rồi đổi sang periodicity 1, 4 và 12.</p>
<details><summary>Xem lời giải</summary>
<p>TVM: N = 14, PV = -96,20, PMT = 2,5, FV = 100, CPT I/Y = 2,8326 → APR<sub>2</sub> = <b>5,6651%</b>.</p>
<table class="plain"><thead><tr><th>Periodicity</th><th>Công thức</th><th>Kết quả</th></tr></thead><tbody>
<tr><td>1 (hiệu dụng năm)</td><td>1,028326<sup>2</sup> - 1</td><td>5,7454%</td></tr>
<tr><td>2 (semiannual bond basis)</td><td>2 × 2,8326%</td><td>5,6651%</td></tr>
<tr><td>4 (quý)</td><td>4 × (1,028326<sup>1/2</sup> - 1)</td><td>5,6259%</td></tr>
<tr><td>12 (tháng)</td><td>12 × (1,028326<sup>1/6</sup> - 1)</td><td>5,5994%</td></tr>
</tbody></table>
<p>Ghép lãi càng dày, con số APR càng <b>nhỏ</b> cho cùng một khoản đầu tư.</p></details></div>

<h4>BA II Plus: ICONV</h4>
${keys([
  ['Mở ICONV', '[2ND] [2]', 'NOM = '],
  ['Nhập APR nửa năm', '5.6651 [ENTER] [↓] [↓]', 'C/Y = '],
  ['Tần suất 2', '2 [ENTER] [↑]', 'EFF = '],
  ['Tính hiệu dụng năm', '[CPT]', 'EFF = 5.7454'],
  ['Đổi sang quý: đặt C/Y = 4', '[↓] 4 [ENTER] [↑] [↑]', 'NOM = '],
  ['Tính APR quý', '[CPT]', 'NOM = 5.6259'],
])}

<div class="example"><div class="ex-h">Ví dụ 2.2</div>
<p>Trái phiếu trả lãi theo quý có YTM 6% (periodicity 4). Lợi suất tương đương theo semiannual bond basis là bao nhiêu để so với trái phiếu Mỹ?</p>
<details><summary>Xem lời giải</summary><p>(1 + 0,06/4)<sup>4</sup> = (1 + APR<sub>2</sub>/2)<sup>2</sup> → APR<sub>2</sub> = 2 × (1,015<sup>2</sup> - 1) = <b>6,045%</b>. Hiệu dụng năm: 1,015<sup>4</sup> - 1 = 6,1364%.</p></details></div>

<h4>Ba quy ước khác cần nhận diện</h4>
<ul>
  <li>${t('street', 'Street convention')}: YTM giả định coupon trả đúng ngày ghi trên lịch, kể cả khi rơi vào cuối tuần hay ngày lễ.</li>
  <li><b>True yield</b>: dùng ngày trả tiền thực tế (lùi sang ngày làm việc kế tiếp). Tiền đến muộn hơn nên true yield <b>thấp hơn hoặc bằng</b> street convention.</li>
  <li><b>Government equivalent yield</b>: quy đổi YTM của trái phiếu doanh nghiệp (30/360) sang cơ sở actual/actual để so sánh với trái phiếu chính phủ.</li>
</ul>`,
    },
    {
      title: '3. Current yield, simple yield và YTM',
      minutes: 6,
      html: `
<table class="plain"><thead><tr><th>Thước đo</th><th>Công thức</th><th>Đo gì?</th></tr></thead><tbody>
<tr><td>${t('cy', 'Current yield')}</td><td>${frac('Coupon năm', 'Flat price')}</td><td>Chỉ thu nhập coupon, bỏ qua lời/lỗ vốn và lãi tái đầu tư</td></tr>
<tr><td>${t('simple', 'Simple yield')}</td><td>${frac('Coupon năm ± phần lời/lỗ vốn chia đều mỗi năm', 'Flat price')}</td><td>Thêm lời/lỗ vốn (khấu hao tuyến tính), vẫn bỏ qua giá trị thời gian</td></tr>
<tr><td>${t('ytm', 'YTM')}</td><td>IRR của dòng tiền</td><td>Đầy đủ: coupon, lời/lỗ vốn, tái đầu tư coupon ở chính YTM</td></tr>
</tbody></table>
<div class="example"><div class="ex-h">Ví dụ 3.1</div>
<p>Trái phiếu 4 năm, coupon 5% hằng năm, flat price 96,00. Tính current yield, simple yield và YTM.</p>
<details><summary>Xem lời giải</summary>
<p>Current yield = 5 / 96 = <b>5,2083%</b>.<br>
Simple yield = (5 + 4/4) / 96 = <b>6,25%</b> (lời vốn 4 chia đều 4 năm).<br>
YTM: N = 4, PV = -96, PMT = 5, FV = 100 → <b>6,1586%</b>.</p>
<p>Với trái phiếu discount, thứ tự luôn là <b>coupon &lt; current yield &lt; YTM</b> (5% &lt; 5,21% &lt; 6,16%). Với trái phiếu premium thì ngược lại: coupon &gt; current yield &gt; YTM.</p></details></div>
<p class="warn"><b>YTM chỉ là lợi suất thực nhận khi cả 3 giả định đúng:</b> giữ đến đáo hạn, nhà phát hành trả đủ và đúng hạn, coupon được tái đầu tư ở đúng mức YTM. Phần này sẽ được phân tích kỹ ở FI-10.</p>`,
    },
    {
      title: '4. Trái phiếu có quyền mua lại: yield-to-call và yield-to-worst',
      minutes: 7,
      html: `
<p>Với ${t('callable', 'trái phiếu có quyền mua lại (callable bond)')}, nhà phát hành có thể trả nợ trước hạn ở giá mua lại (call price) vào các ngày định trước. ${t('ytc', 'Yield-to-call')} được tính như YTM, chỉ thay ngày đáo hạn bằng ngày call và mệnh giá bằng giá call.</p>
<div class="example"><div class="ex-h">Ví dụ 4.1</div>
<p>Trái phiếu 6 năm, coupon 7% hằng năm, giá 105. Lịch call: sau 2 năm ở 103, sau 3 năm ở 102, sau 4 năm ở 101, sau 5 năm ở 100. Tìm YTM, các yield-to-call và yield-to-worst.</p>
<details><summary>Xem lời giải</summary>
<table class="plain"><thead><tr><th>Kịch bản</th><th>N</th><th>FV</th><th>Lợi suất</th></tr></thead><tbody>
<tr><td>Call năm 2</td><td>2</td><td>103</td><td><b>5,7409%</b></td></tr>
<tr><td>Call năm 3</td><td>3</td><td>102</td><td>5,7672%</td></tr>
<tr><td>Call năm 4</td><td>4</td><td>101</td><td>5,7932%</td></tr>
<tr><td>Call năm 5</td><td>5</td><td>100</td><td>5,8189%</td></tr>
<tr><td>Đáo hạn</td><td>6</td><td>100</td><td>5,9837%</td></tr>
</tbody></table>
${keys([['Ví dụ: call năm 2', '[2ND] [FV] 2 [N] 105 [+/-] [PV] 7 [PMT] 103 [FV] [CPT] [I/Y]', 'I/Y = 5.7409']])}
<p>${t('ytw', 'Yield-to-worst')} = mức thấp nhất = <b>5,74%</b> (call năm 2). Đây là lợi suất "thận trọng" mà nhà đầu tư nên dùng để so sánh.</p></details></div>
<p class="tip">Yield-to-worst không nhất thiết rơi vào ngày call đầu tiên: nó phụ thuộc giá hiện tại và lịch giá call. Phải tính tất cả rồi lấy mức thấp nhất.</p>
<h4>Option-adjusted yield</h4>
<p>Yield-to-worst vẫn chưa định giá quyền chọn một cách đầy đủ. Cách tốt hơn: tách giá trị quyền call. Với callable bond, nhà đầu tư đã <b>bán</b> quyền call cho nhà phát hành, nên giá trái phiếu "không quyền chọn" tương ứng = flat price + giá trị quyền call. ${t('oay', 'Option-adjusted yield')} là lợi suất tính từ mức giá cao hơn đó, nên <b>thấp hơn</b> YTM của callable bond. Cần mô hình định giá quyền chọn (Level II), Level I chỉ cần hiểu khái niệm.</p>`,
    },
    {
      title: '5. Spread so với benchmark: G-spread và I-spread',
      minutes: 7,
      html: `
<p>${t('spread', 'Yield spread')} = lợi suất trái phiếu - lợi suất chuẩn có cùng kỳ hạn. Benchmark thường là trái phiếu chính phủ on-the-run (FI-05). Khi không có kỳ hạn khớp đúng, nội suy tuyến tính.</p>
<table class="plain"><thead><tr><th>Spread</th><th>Mốc so sánh</th><th>Ghi chú</th></tr></thead><tbody>
<tr><td>${t('gspread', 'G-spread')}</td><td>Lợi suất trái phiếu chính phủ cùng kỳ hạn</td><td>Dùng khi nhà đầu tư nghĩ theo trái phiếu chính phủ</td></tr>
<tr><td>${t('ispread', 'I-spread')}</td><td>Lãi suất swap cùng kỳ hạn (cùng đồng tiền)</td><td>Ngân hàng, nhà đầu tư dùng swap để phòng hộ; swap phản ánh rủi ro khu vực ngân hàng</td></tr>
</tbody></table>
<div class="example"><div class="ex-h">Ví dụ 5.1</div>
<p>Trái phiếu doanh nghiệp còn 6 năm, YTM 4,65%. Trái phiếu chính phủ: 5 năm 3,20%, 7 năm 3,60%. Lãi suất swap 6 năm: 3,55%. Tính G-spread và I-spread.</p>
<details><summary>Xem lời giải</summary>
<p>Lợi suất chính phủ 6 năm nội suy = 3,20% + (3,60% - 3,20%) × 1/2 = 3,40%.<br>
G-spread = 4,65% - 3,40% = <b>1,25% = 125 bps</b>.<br>
I-spread = 4,65% - 3,55% = <b>1,10% = 110 bps</b>.</p></details></div>
<p class="tip"><b>Đọc spread:</b> lợi suất tăng có thể do lãi suất chuẩn tăng (vĩ mô: lạm phát, chính sách tiền tệ) hoặc do spread nới rộng (rủi ro riêng của tổ chức phát hành, thanh khoản). Tách hai phần giúp biết nguyên nhân thực sự.</p>
<p class="warn"><b>Hạn chế:</b> G-spread và I-spread so sánh hai con số YTM, tức là dùng một lãi suất cho mọi dòng tiền, nên bỏ qua hình dạng đường cong lợi suất.</p>`,
    },
    {
      title: '6. Z-spread và OAS',
      minutes: 5,
      html: `
<p>${t('zspread', 'Z-spread (zero-volatility spread)')} là một mức spread <b>cố định</b> cộng vào <b>mọi</b> spot rate của chính phủ sao cho PV dòng tiền bằng giá trái phiếu:</p>
<div class="formula">Giá = ${frac('C', '(1 + z<sub>1</sub> + Z)<sup>1</sup>')} + ${frac('C', '(1 + z<sub>2</sub> + Z)<sup>2</sup>')} + ... + ${frac('C + FV', '(1 + z<sub>N</sub> + Z)<sup>N</sup>')}</div>
<div class="example"><div class="ex-h">Ví dụ 6.1</div>
<p>Trái phiếu doanh nghiệp 3 năm, coupon 6% hằng năm, giá 98,00. Spot rates chính phủ: 3,0%, 3,5%, 4,0%. Z-spread xấp xỉ bao nhiêu?</p>
<details><summary>Xem lời giải</summary>
<p>Giải bằng thử - sai (máy tính không có phím trực tiếp): Z ≈ <b>2,80% = 280 bps</b>.<br>
Kiểm tra: 6/1,058 + 6/1,063<sup>2</sup> + 106/1,068<sup>3</sup> = 5,6711 + 5,3099 + 87,0146 ≈ 98,00.</p>
<p>Trong đề thi, dạng hay gặp hơn là cho Z-spread và spot rates, yêu cầu tính giá (như dòng kiểm tra ở trên).</p></details></div>
<h4>Option-adjusted spread (OAS)</h4>
<div class="formula">OAS = Z-spread - chi phí quyền chọn (tính bằng bps)</div>
<ul>
  <li>Callable bond: nhà đầu tư bán quyền call → cần bù thêm → Z-spread &gt; OAS. OAS là phần spread thực sự bù cho rủi ro tín dụng và thanh khoản.</li>
  <li>Putable bond: nhà đầu tư mua quyền put → OAS &gt; Z-spread.</li>
  <li>Không có quyền chọn: OAS = Z-spread.</li>
</ul>
<p class="tip">OAS cần mô hình lãi suất có biến động (binomial tree), nên Level I chỉ hỏi khái niệm và phép trừ đơn giản. Khi so sánh hai callable bond, dùng OAS chứ không dùng Z-spread.</p>`,
    },
    {
      title: '7. Tóm tắt và bẫy thường gặp',
      minutes: 3,
      html: `
<table class="plain"><thead><tr><th>Tình huống</th><th>Nhớ</th></tr></thead><tbody>
<tr><td>So sánh hai lợi suất</td><td>Quy về cùng periodicity: (1 + APR<sub>m</sub>/m)<sup>m</sup> = (1 + APR<sub>n</sub>/n)<sup>n</sup></td></tr>
<tr><td>Ghép lãi dày hơn</td><td>APR nhỏ hơn cho cùng khoản đầu tư</td></tr>
<tr><td>True yield và street convention</td><td>True yield ≤ street (tiền đến muộn hơn vì cuối tuần, ngày lễ)</td></tr>
<tr><td>Current yield</td><td>Coupon năm / flat price; bỏ qua lời/lỗ vốn</td></tr>
<tr><td>Discount bond</td><td>Coupon &lt; current yield &lt; YTM</td></tr>
<tr><td>Yield-to-worst</td><td>Mức thấp nhất trong YTM và mọi YTC, không nhất thiết là call đầu tiên</td></tr>
<tr><td>G-spread / I-spread</td><td>So với chính phủ (nội suy) / so với swap</td></tr>
<tr><td>Z-spread</td><td>Spread cố định cộng vào mọi spot rate</td></tr>
<tr><td>OAS</td><td>Z-spread - chi phí quyền chọn; callable: OAS &lt; Z-spread</td></tr>
</tbody></table>
<p>Tiếp theo: tab <b>Luyện tập</b> 8 câu. FI-08 áp dụng các ý tưởng này cho FRN và công cụ thị trường tiền tệ.</p>`,
    },
  ];

  const glossary = {
    apr: ['Annual percentage rate (APR) / stated annual yield', 'Lãi suất năm danh nghĩa', 'Lãi suất mỗi kỳ nhân với số kỳ trong năm; chưa tính ghép lãi trong năm.'],
    period: ['Periodicity', 'Tần suất ghép lãi', 'Số kỳ ghép lãi giả định trong một năm khi báo một lợi suất năm.'],
    sabb: ['Semiannual bond basis yield', 'Lợi suất theo quy ước nửa năm', 'YTM có periodicity 2: lãi suất nửa năm nhân 2.'],
    street: ['Street convention / true yield', 'Quy ước thị trường / lợi suất thực', 'Street giả định trả đúng ngày lịch; true yield dùng ngày trả thực tế nên thấp hơn hoặc bằng.'],
    cy: ['Current yield', 'Lợi suất hiện hành', 'Coupon năm chia flat price; chỉ đo thu nhập coupon.'],
    simple: ['Simple yield', 'Lợi suất đơn', 'Coupon năm cộng/trừ lời/lỗ vốn chia đều theo năm, chia flat price.'],
    ytm: ['Yield to maturity (YTM)', 'Lợi suất đáo hạn', 'IRR của dòng tiền trái phiếu nếu giữ đến đáo hạn, không vỡ nợ, tái đầu tư ở YTM.'],
    callable: ['Callable bond', 'Trái phiếu có quyền mua lại', 'Nhà phát hành có quyền trả nợ trước hạn ở giá call vào các ngày định trước.'],
    ytc: ['Yield to call', 'Lợi suất đến ngày call', 'Lợi suất nếu trái phiếu bị mua lại ở một ngày call cụ thể với giá call tương ứng.'],
    ytw: ['Yield to worst', 'Lợi suất xấu nhất', 'Mức thấp nhất trong YTM và các yield-to-call.'],
    oay: ['Option-adjusted yield', 'Lợi suất điều chỉnh quyền chọn', 'Lợi suất tính sau khi loại bỏ giá trị quyền chọn nhúng; với callable bond thấp hơn YTM.'],
    spread: ['Yield spread', 'Chênh lệch lợi suất', 'Lợi suất trái phiếu trừ lợi suất chuẩn cùng kỳ hạn.'],
    gspread: ['G-spread', 'Spread so với trái phiếu chính phủ', 'YTM trái phiếu trừ YTM trái phiếu chính phủ cùng kỳ hạn (nội suy nếu cần).'],
    ispread: ['I-spread (interpolated spread)', 'Spread so với lãi suất swap', 'YTM trái phiếu trừ lãi suất swap cùng kỳ hạn, cùng đồng tiền.'],
    zspread: ['Z-spread (zero-volatility spread)', 'Spread cố định trên đường spot', 'Mức spread cộng đều vào mọi spot rate chính phủ để PV dòng tiền bằng giá.'],
  };

  const practice = [
    { q: 'Một trái phiếu có YTM 6% theo quy ước nửa năm (semiannual bond basis). Lợi suất hiệu dụng năm (periodicity 1) gần nhất với:', choices: ['6,00%', '6,14%', '6,09%'], answer: 2, explain: '(1 + 0,06/2)^2 - 1 = 6,09%. Lựa chọn 6,00% bỏ qua ghép lãi. Lựa chọn 6,14% là kết quả nếu ghép lãi theo quý (1,015^4 - 1), sai periodicity.' },
    { q: 'Trái phiếu trả lãi theo quý có YTM 8% (periodicity 4). Lợi suất tương đương theo semiannual bond basis gần nhất với:', choices: ['8,08%', '8,24%', '8,00%'], answer: 0, explain: '(1 + 0,08/4)^4 = (1 + y/2)^2 → y = 2 × (1,02^2 - 1) = 8,08%. Lựa chọn 8,24% là lợi suất hiệu dụng năm (periodicity 1). Lựa chọn 8,00% quên rằng đổi periodicity làm thay đổi con số APR.' },
    { q: 'Trái phiếu coupon 6% hằng năm có flat price 92,50 và lãi dồn tích 1,20. Current yield gần nhất với:', choices: ['6,00%', '6,49%', '6,40%'], answer: 1, explain: 'Current yield = coupon năm / flat price = 6 / 92,50 = 6,49%. Lựa chọn 6,40% chia cho full price 93,70. Lựa chọn 6,00% là coupon rate, không phản ánh giá.' },
    { q: 'Trái phiếu 5 năm, coupon 6% hằng năm, giá 103,50. Có thể bị mua lại sau 2 năm ở 102, sau 3 năm ở 101, sau 4 năm ở 100. Yield-to-worst gần nhất với:', choices: ['5,19%', '5,09%', '5,01%'], answer: 2, explain: 'YTM = 5,19%; YTC năm 2 = 5,09%; YTC năm 3 = 5,03%; YTC năm 4 = 5,01%. Yield-to-worst là mức thấp nhất: 5,01%. Lựa chọn 5,09% chỉ tính call đầu tiên; lựa chọn 5,19% là YTM.' },
    { q: 'Trái phiếu doanh nghiệp còn 8 năm, YTM 5,10%. Trái phiếu chính phủ 7 năm có lợi suất 3,80%, 10 năm có lợi suất 4,10%. G-spread gần nhất với:', choices: ['120 bps', '130 bps', '100 bps'], answer: 0, explain: 'Nội suy 8 năm: 3,80% + 0,30% × 1/3 = 3,90%. G-spread = 5,10% - 3,90% = 120 bps. Lựa chọn 130 bps so với kỳ hạn 7 năm, lựa chọn 100 bps so với kỳ hạn 10 năm, đều không khớp kỳ hạn.' },
    { q: 'Trái phiếu doanh nghiệp còn 8 năm, YTM 5,10%. Trái phiếu chính phủ 7 năm có lợi suất 3,80%, 10 năm có lợi suất 4,10%; lãi suất swap 8 năm là 4,05%. I-spread của trái phiếu doanh nghiệp gần nhất với:', choices: ['120 bps', '105 bps', '15 bps'], answer: 1, explain: 'I-spread = YTM - lãi suất swap cùng kỳ hạn = 5,10% - 4,05% = 105 bps. Lựa chọn 120 bps là G-spread. Lựa chọn 15 bps là chênh lệch giữa swap và lợi suất chính phủ 8 năm (4,05% - 3,90%).' },
    { q: 'Trái phiếu doanh nghiệp 2 năm, coupon 5% hằng năm. Spot rates chính phủ 1 năm 3,0%, 2 năm 3,6%. Z-spread 150 bps. Giá gần nhất với:', choices: ['99,84', '102,68', '99,91'], answer: 0, explain: 'Giá = 5/1,045 + 105/1,051^2 = 4,78 + 95,06 = 99,84. Lựa chọn 102,68 quên cộng Z-spread. Lựa chọn 99,91 chỉ cộng spread cho dòng tiền cuối; Z-spread phải cộng vào mọi spot rate.' },
    { q: 'Một callable bond có Z-spread 210 bps; chi phí quyền call ước tính 40 bps. OAS gần nhất với:', choices: ['250 bps', '170 bps', '210 bps'], answer: 1, explain: 'OAS = Z-spread - chi phí quyền chọn = 210 - 40 = 170 bps. Với callable bond, nhà đầu tư đã bán quyền call, nên OAS < Z-spread. Lựa chọn 250 bps cộng thay vì trừ (đúng hướng cho putable bond). Lựa chọn 210 bps bỏ qua quyền chọn.' },
  ];

  window.LESSONS['FI-07'] = {
    moduleId: 'FI-07',
    calculator: 'BA II Plus',
    warmup: [
      'Ôn FI-06: trái phiếu coupon 10% nửa năm, giá 105, máy cho I/Y = 4,3721. YTM báo bao nhiêu?',
      'Ôn QM-04: EAR của lãi suất 6% ghép lãi theo quý là bao nhiêu? Bấm thử bằng ICONV.',
      'Theo bạn, vì sao cùng kỳ hạn, trái phiếu doanh nghiệp có lợi suất cao hơn trái phiếu chính phủ?',
    ],
    sections,
    glossary,
    practice,
    widgets: {},
    slides: [],
    wrapup: [
      'Viết công thức quy đổi periodicity và làm lại ví dụ 2.2 không nhìn bài.',
      'Sắp xếp coupon, current yield, YTM cho một trái phiếu discount và một trái phiếu premium.',
      'Phân biệt G-spread, I-spread, Z-spread, OAS trong một câu mỗi loại.',
    ],
  };
}());
