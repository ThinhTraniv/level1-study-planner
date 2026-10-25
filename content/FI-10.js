// Bài giảng FI-10 - Interest Rate Risk and Return (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t, frac, keys, timeline } = window.CFAH;

  const sections = [
    {
      title: '1. Bức tranh lớn: lãi suất thay đổi thì ai được, ai mất?',
      minutes: 5,
      html: `
<p>Mua trái phiếu ở YTM 7% không có nghĩa là chắc chắn kiếm được 7%. Ngay sau khi mua, lãi suất thị trường có thể thay đổi, và nó tác động lên nhà đầu tư theo <b>hai hướng ngược nhau</b>:</p>
<div class="key">Lãi suất tăng: <b>giá trái phiếu giảm</b> (lỗ nếu bán sớm) nhưng <b>coupon được tái đầu tư ở mức cao hơn</b> (lời thêm).<br>
Lãi suất giảm: ngược lại, giá tăng nhưng tái đầu tư kém đi.</div>
<p>Hiệu ứng nào thắng phụ thuộc vào việc bạn giữ trái phiếu bao lâu (${t('horizon', 'thời hạn đầu tư - investment horizon')}). Thước đo cho biết điểm cân bằng giữa hai hiệu ứng chính là ${t('macdur', 'Macaulay duration')}.</p>
<p>Module này ứng với 3 LOS:</p>
<ol>
  <li>Tính và giải thích các nguồn lợi nhuận khi đầu tư trái phiếu lãi suất cố định (LOS 1).</li>
  <li>Mô tả quan hệ giữa lợi nhuận nắm giữ, Macaulay duration và thời hạn đầu tư (LOS 2).</li>
  <li>Định nghĩa, tính và giải thích Macaulay duration (LOS 3).</li>
</ol>
<p class="tip">Ví dụ xuyên suốt cả module (và FI-11): trái phiếu <b>5 năm, coupon 6% trả hằng năm, mệnh giá 100, mua ở YTM 7%</b>. Giá mua = <b>95,90</b>.</p>`,
    },
    {
      title: '2. Ba nguồn lợi nhuận của trái phiếu',
      minutes: 10,
      html: `
<p>Nhà đầu tư trái phiếu cố định có thể kiếm tiền từ ba nguồn:</p>
<ol>
  <li><b>Coupon và gốc</b> nhận đúng hạn (giả định không vỡ nợ).</li>
  <li>${t('reinv', 'Thu nhập tái đầu tư (reinvestment income)')}: lãi kiếm được khi đem coupon đi đầu tư tiếp cho đến hết thời hạn đầu tư.</li>
  <li>${t('capgain', 'Lãi/lỗ vốn (capital gain/loss)')} khi bán trái phiếu <b>trước</b> đáo hạn.</li>
</ol>
<h4>Giá trị ghi sổ và phần "lãi vốn" thật sự</h4>
<p>Trái phiếu mua dưới mệnh giá sẽ tự "trôi" dần về 100 khi tiến đến đáo hạn, kể cả khi lãi suất không đổi. Phần trôi này là <b>thu nhập lãi</b> (accretion of discount), không phải lãi vốn. Để tách bạch, dùng ${t('carrying', 'giá trị ghi sổ (carrying value)')}: giá trái phiếu tính lại bằng <b>YTM lúc mua</b> tại ngày bán.</p>
<div class="formula">Lãi/lỗ vốn = Giá bán - Giá trị ghi sổ (tính theo YTM ban đầu)</div>
<div class="example"><div class="ex-h">Ví dụ 2.1 - Tách nguồn lợi nhuận</div>
<p>Mua trái phiếu 5 năm coupon 6% ở giá 95,90 (YTM 7%). Ngay sau khi mua, lãi suất tăng lên 8% và giữ nguyên. Nhà đầu tư bán sau 3 năm. Tách các nguồn lợi nhuận.</p>
<details><summary>Xem lời giải</summary>
<table class="plain"><thead><tr><th>Thành phần</th><th>Cách tính</th><th>Giá trị</th></tr></thead><tbody>
<tr><td>Coupon</td><td>3 × 6</td><td>18,0000</td></tr>
<tr><td>Thu nhập tái đầu tư</td><td>FV 3 coupon ở 8% - 18 = 19,4784 - 18</td><td>1,4784</td></tr>
<tr><td>Trôi giá về par (thu nhập lãi)</td><td>Giá trị ghi sổ - giá mua = 98,1920 - 95,8998</td><td>2,2922</td></tr>
<tr><td>Lỗ vốn</td><td>Giá bán ở 8% - giá trị ghi sổ = 96,4335 - 98,1920</td><td>-1,7585</td></tr>
<tr><td colspan="2"><b>Tổng tiền có ở năm 3</b> (= 95,8998 + các dòng trên)</td><td><b>115,9119</b></td></tr></tbody></table>
<p>Giá bán 96,43 vẫn <b>cao hơn</b> giá mua 95,90, nhưng nhà đầu tư thực ra bị <b>lỗ vốn</b> 1,76 vì giá bán thấp hơn mức "đáng lẽ phải đạt" nếu lãi suất không đổi.</p></details></div>
${keys([
  ['FV các coupon tái đầu tư', '[2ND] [FV] 3 [N] 8 [I/Y] 0 [PV] 6 [PMT] [CPT] [FV]', 'FV = -19.4784'],
  ['Giá bán sau 3 năm (còn 2 năm, YTM 8%)', '[2ND] [FV] 2 [N] 8 [I/Y] 6 [PMT] 100 [FV] [CPT] [PV]', 'PV = -96.4335'],
  ['Giá trị ghi sổ (còn 2 năm, YTM 7%)', '7 [I/Y] [CPT] [PV]', 'PV = -98.1920'],
])}`,
    },
    {
      title: '3. Bốn tình huống: giữ đến đáo hạn hay bán sớm',
      minutes: 14,
      html: `
<p>${t('horizonyield', 'Lợi suất theo thời hạn đầu tư (horizon yield)')} là lợi suất kép hằng năm thực đạt được:</p>
<div class="formula">Horizon yield = (${frac('Tổng tiền có cuối thời hạn', 'Giá mua')})<sup>1/H</sup> - 1</div>
<p>Tổng tiền cuối thời hạn = coupon + thu nhập tái đầu tư + giá bán (hoặc mệnh giá nếu giữ đến đáo hạn). Áp dụng cho trái phiếu ví dụ, giá mua 95,8998:</p>
<table class="plain"><thead><tr><th>Tình huống</th><th>Coupon + tái đầu tư</th><th>Giá bán / gốc</th><th>Tổng</th><th>Horizon yield</th></tr></thead><tbody>
<tr><td>1. Giữ 5 năm, lãi suất giữ 7%</td><td>34,5044</td><td>100,0000</td><td>134,5044</td><td><b>7,00%</b></td></tr>
<tr><td>2. Bán sau 3 năm, lãi suất giữ 7%</td><td>19,2894</td><td>98,1920</td><td>117,4814</td><td><b>7,00%</b></td></tr>
<tr><td>3. Giữ 5 năm, lãi suất tăng lên 8%</td><td>35,1996</td><td>100,0000</td><td>135,1996</td><td><b>7,11%</b></td></tr>
<tr><td>4. Bán sau 3 năm, lãi suất tăng lên 8%</td><td>19,4784</td><td>96,4335</td><td>115,9119</td><td><b>6,52%</b></td></tr>
<tr><td>5. Giữ 5 năm, lãi suất giảm còn 6%</td><td>33,8226</td><td>100,0000</td><td>133,8226</td><td><b>6,89%</b></td></tr>
<tr><td>6. Bán sau 3 năm, lãi suất giảm còn 6%</td><td>19,1016</td><td>100,0000</td><td>119,1016</td><td><b>7,49%</b></td></tr>
</tbody></table>
${keys([['Horizon yield tình huống 4', '[2ND] [FV] 3 [N] 95.8998 [+|-] [PV] 0 [PMT] 115.9119 [FV] [CPT] [I/Y]', 'I/Y = 6.5214']])}
<div class="key">Kết luận rút ra:<br>
- Lãi suất không đổi: horizon yield = YTM lúc mua, với <b>bất kỳ</b> thời hạn nào (tình huống 1, 2). Điều kiện là coupon được tái đầu tư đúng ở YTM.<br>
- Nhà đầu tư <b>dài hạn</b> (giữ đến đáo hạn) có lợi khi lãi suất tăng: chỉ còn hiệu ứng tái đầu tư, vì gốc vẫn nhận đủ 100 (tình huống 3). Họ chịu ${t('reinvrisk', 'rủi ro tái đầu tư')}.<br>
- Nhà đầu tư <b>ngắn hạn</b> bị thiệt khi lãi suất tăng: lỗ giá lớn hơn phần lời tái đầu tư (tình huống 4). Họ chịu ${t('pricerisk', 'rủi ro giá (market price risk)')}.</div>
<p class="warn"><b>Bẫy:</b> ở tình huống 6, giá bán đúng 100 không phải vì trái phiếu đáo hạn, mà vì coupon 6% đúng bằng lãi suất thị trường mới 6% nên trái phiếu còn 2 năm có giá par.</p>`,
    },
    {
      title: '4. Macaulay duration: định nghĩa và cách tính',
      minutes: 12,
      html: `
<p>${t('macdur', 'Macaulay duration')} là <b>thời gian bình quân có trọng số</b> để nhận dòng tiền của trái phiếu, trọng số là tỷ trọng PV của từng dòng tiền trong giá (chiết khấu ở YTM).</p>
<div class="formula">MacDur = Σ t × w<sub>t</sub> &nbsp;&nbsp; với w<sub>t</sub> = ${frac('CF<sub>t</sub> / (1 + r)<sup>t</sup>', 'Giá')}</div>
<div class="example"><div class="ex-h">Ví dụ 4.1 - Bảng tính Macaulay duration</div>
<p>Trái phiếu 5 năm, coupon 6% hằng năm, YTM 7%, giá 95,8998.</p>
<details><summary>Xem lời giải</summary>
<table class="plain"><thead><tr><th>t</th><th>CF</th><th>PV ở 7%</th><th>Trọng số w</th><th>t × w</th></tr></thead><tbody>
<tr><td>1</td><td>6</td><td>5,6075</td><td>0,0585</td><td>0,0585</td></tr>
<tr><td>2</td><td>6</td><td>5,2406</td><td>0,0546</td><td>0,1093</td></tr>
<tr><td>3</td><td>6</td><td>4,8978</td><td>0,0511</td><td>0,1532</td></tr>
<tr><td>4</td><td>6</td><td>4,5774</td><td>0,0477</td><td>0,1909</td></tr>
<tr><td>5</td><td>106</td><td>75,5765</td><td>0,7881</td><td>3,9404</td></tr>
<tr><td colspan="2"><b>Tổng</b></td><td>95,8998</td><td>1,0000</td><td><b>4,4523</b></td></tr></tbody></table>
<p>MacDur = <b>4,45 năm</b>, ngắn hơn kỳ hạn 5 năm vì một phần giá trị được nhận sớm qua coupon.</p></details></div>
<h4>Công thức đóng (kiểm tra nhanh)</h4>
<div class="formula">MacDur = ${frac('1 + r', 'r')} - ${frac('1 + r + N(c - r)', 'c[(1 + r)<sup>N</sup> - 1] + r')} - ${frac('t', 'T')}</div>
<p>r, c là YTM và coupon <b>mỗi kỳ</b>, N là số kỳ, t/T là phần kỳ đã trôi qua kể từ ngày trả coupon gần nhất (bằng 0 nếu đang ở ngày trả coupon). Với ví dụ: 1,07/0,07 - (1,07 + 5 × (-0,01))/(0,06 × (1,07<sup>5</sup> - 1) + 0,07) = 15,2857 - 10,8334 = 4,4523. Kết quả tính ra là <b>số kỳ</b>; trái phiếu trả nửa năm thì chia 2 để ra năm.</p>
<p>Nếu đang ở giữa kỳ, trừ t/T: cùng trái phiếu đó, 3 tháng sau ngày trả coupon (t/T = 0,25) và YTM không đổi thì MacDur = 4,4523 - 0,25 = <b>4,2023</b>.</p>
<p class="tip"><b>Các trường hợp đặc biệt:</b> zero-coupon có MacDur = kỳ hạn (chỉ một dòng tiền). Trái phiếu coupon luôn có MacDur &lt; kỳ hạn. Trái phiếu vĩnh viễn có MacDur = (1 + r)/r.</p>`,
    },
    {
      title: '5. Thời hạn đầu tư, Macaulay duration và duration gap',
      minutes: 9,
      html: `
<p>Quay lại bảng ở phần 3: thời hạn 3 năm thì lãi suất tăng làm thiệt, thời hạn 5 năm thì lãi suất tăng làm lợi. Phải có một thời hạn ở giữa mà hai hiệu ứng <b>triệt tiêu nhau</b>. Thời hạn đó chính là Macaulay duration.</p>
<div class="example"><div class="ex-h">Ví dụ 5.1 - Thời hạn bằng MacDur</div>
<p>Thời hạn đầu tư 4,4523 năm. Lãi suất ngay sau khi mua chuyển sang 6%, giữ 7% hoặc lên 8%. Horizon yield là bao nhiêu?</p>
<details><summary>Xem lời giải</summary>
<p>Giá trị tại năm 4,4523 = coupon đã nhận tái đầu tư đến đó + PV các dòng tiền còn lại. Kết quả: 129,6192 (6%), 129,6113 (7%), 129,6191 (8%). Horizon yield lần lượt là <b>7,0015%, 7,0000%, 7,0014%</b>: gần như không đổi, thậm chí nhỉnh hơn một chút nhờ convexity (FI-12).</p></details></div>
<div class="formula">${t('gap', 'Duration gap')} = Macaulay duration - Thời hạn đầu tư</div>
<table class="plain"><thead><tr><th>Duration gap</th><th>Rủi ro chi phối</th><th>Thiệt khi</th><th>Ví dụ</th></tr></thead><tbody>
<tr><td>&gt; 0 (thời hạn ngắn hơn MacDur)</td><td>Rủi ro giá</td><td>Lãi suất <b>tăng</b></td><td>Thời hạn 3 năm: gap = 1,45; 8% cho 6,52%</td></tr>
<tr><td>= 0</td><td>Hai rủi ro triệt tiêu (immunized)</td><td>Gần như không</td><td>Thời hạn 4,45 năm</td></tr>
<tr><td>&lt; 0 (thời hạn dài hơn MacDur)</td><td>Rủi ro tái đầu tư</td><td>Lãi suất <b>giảm</b></td><td>Thời hạn 5 năm: gap = -0,55; 6% cho 6,89%</td></tr>
</tbody></table>
<p class="warn"><b>Giới hạn:</b> kết quả "triệt tiêu" chỉ đúng với <b>một lần thay đổi</b> lãi suất song song, xảy ra ngay sau khi mua. Thời gian trôi qua thì MacDur giảm khác với thời hạn còn lại, nên danh mục phải tái cân bằng. Chủ đề này học sâu hơn ở Level II/III (immunization).</p>
<p class="tip">Ứng dụng: quỹ hưu trí hay công ty bảo hiểm cần trả một khoản tiền sau 10 năm sẽ chọn trái phiếu có MacDur gần 10 năm để khóa lợi suất, bất kể lãi suất đi lên hay xuống.</p>`,
    },
    {
      title: '6. Tóm tắt và bẫy thường gặp',
      minutes: 5,
      html: `
<table class="plain"><thead><tr><th>Tình huống</th><th>Nhớ</th></tr></thead><tbody>
<tr><td>Ba nguồn lợi nhuận</td><td>Coupon và gốc, tái đầu tư coupon, lãi/lỗ vốn khi bán sớm</td></tr>
<tr><td>Lãi/lỗ vốn</td><td>So giá bán với giá trị ghi sổ theo YTM ban đầu, không so với giá mua</td></tr>
<tr><td>Horizon yield = YTM</td><td>Khi lãi suất không đổi và coupon tái đầu tư ở YTM</td></tr>
<tr><td>Nhà đầu tư dài hạn</td><td>Rủi ro tái đầu tư chi phối, sợ lãi suất giảm</td></tr>
<tr><td>Nhà đầu tư ngắn hạn</td><td>Rủi ro giá chi phối, sợ lãi suất tăng</td></tr>
<tr><td>Macaulay duration</td><td>Thời gian bình quân trọng số PV; zero-coupon = kỳ hạn</td></tr>
<tr><td>Duration gap = MacDur - H</td><td>Dương: sợ lãi suất tăng. Âm: sợ lãi suất giảm. Bằng 0: miễn nhiễm</td></tr>
<tr><td>Trái phiếu bán niên</td><td>Công thức cho ra số kỳ, chia 2 để ra năm</td></tr>
</tbody></table>
<p>Tiếp theo: làm 10 câu ở tab <b>Luyện tập</b>. FI-11 dùng lại Macaulay duration để đo độ nhạy của giá.</p>`,
    },
  ];

  const glossary = {
    horizon: ['Investment horizon', 'Thời hạn đầu tư', 'Khoảng thời gian nhà đầu tư dự định nắm giữ trái phiếu.'],
    macdur: ['Macaulay duration', 'Macaulay duration', 'Thời gian bình quân có trọng số (theo PV) để nhận dòng tiền trái phiếu; cũng là thời hạn mà rủi ro giá và rủi ro tái đầu tư triệt tiêu nhau.'],
    reinv: ['Reinvestment income', 'Thu nhập tái đầu tư', 'Lãi kiếm được từ việc đầu tư tiếp các coupon nhận được cho đến hết thời hạn đầu tư.'],
    capgain: ['Capital gain/loss', 'Lãi/lỗ vốn', 'Chênh lệch giữa giá bán và giá trị ghi sổ khi bán trái phiếu trước đáo hạn.'],
    carrying: ['Carrying value (amortized cost)', 'Giá trị ghi sổ', 'Giá trái phiếu tính theo YTM lúc mua tại một thời điểm sau đó; trôi dần về mệnh giá.'],
    horizonyield: ['Horizon yield', 'Lợi suất theo thời hạn đầu tư', 'Lợi suất kép hằng năm thực đạt được trong thời hạn đầu tư: (tổng tiền cuối kỳ/giá mua)^(1/H) - 1.'],
    reinvrisk: ['Reinvestment risk', 'Rủi ro tái đầu tư', 'Rủi ro coupon phải tái đầu tư ở lãi suất thấp hơn; quan trọng với nhà đầu tư dài hạn.'],
    pricerisk: ['Market price risk', 'Rủi ro giá', 'Rủi ro giá trái phiếu giảm khi lãi suất tăng; quan trọng khi bán trước đáo hạn.'],
    gap: ['Duration gap', 'Chênh lệch duration', 'Macaulay duration trừ thời hạn đầu tư; dấu cho biết rủi ro nào chi phối.'],
  };

  const practice = [
    { q: 'Horizon yield của một trái phiếu bằng đúng YTM lúc mua khi nào?', choices: ['Khi nhà đầu tư giữ trái phiếu đến đáo hạn, bất kể lãi suất biến động', 'Khi coupon được tái đầu tư ở đúng YTM và trái phiếu được bán ở giá trị ghi sổ (lãi suất không đổi)', 'Khi trái phiếu được mua ở mệnh giá'], answer: 1, explain: 'YTM ngầm giả định coupon tái đầu tư ở chính YTM và không có lãi/lỗ vốn. Đáp án A sai: giữ đến đáo hạn vẫn chịu rủi ro tái đầu tư (tình huống 3, 5 trong bài). Đáp án C không liên quan.' },
    { q: 'Mua trái phiếu 4 năm, coupon 5% hằng năm ở giá 100. Ngay sau đó lãi suất tăng lên 6% và giữ nguyên. Giữ đến đáo hạn, horizon yield gần nhất với:', choices: ['5,07%', '5,00%', '6,00%'], answer: 0, explain: 'FV coupon ở 6% = 21,8731; tổng = 121,8731; (121,8731/100)^(1/4) - 1 = 5,07%. Đáp án B bỏ qua lợi ích tái đầu tư. Đáp án C giả định cả trái phiếu sinh lời 6%, nhưng chỉ có coupon được hưởng lãi suất mới.' },
    { q: 'Cùng trái phiếu như câu trước (mua 100, lãi suất lên 6%), nhưng bán sau 1 năm. Lợi nhuận 1 năm gần nhất với:', choices: ['5,00%', '-2,67%', '2,33%'], answer: 2, explain: 'Giá bán (còn 3 năm, YTM 6%) = 97,3270. Lợi nhuận = (5 + 97,3270)/100 - 1 = 2,33%. Đáp án B quên coupon; đáp án A bỏ qua lỗ giá.' },
    { q: 'Trái phiếu 3 năm, coupon 4% hằng năm, YTM 5%. Macaulay duration gần nhất với:', choices: ['2,75', '2,88', '3,00'], answer: 1, explain: 'Giá 97,2768; trọng số PV: 0,0392; 0,0373; 0,9235. MacDur = 0,0392 + 2 x 0,0373 + 3 x 0,9235 = 2,88. Đáp án A là modified duration (2,88/1,05); đáp án C là kỳ hạn, chỉ đúng với zero-coupon.' },
    { q: 'Nhà đầu tư có thời hạn đầu tư 2 năm, mua trái phiếu có Macaulay duration 6 năm. Phát biểu nào đúng?', choices: ['Rủi ro giá chi phối; nhà đầu tư thiệt nếu lãi suất tăng', 'Rủi ro tái đầu tư chi phối; nhà đầu tư thiệt nếu lãi suất giảm', 'Hai rủi ro triệt tiêu nhau'], answer: 0, explain: 'Duration gap = 6 - 2 = 4 > 0: thời hạn ngắn hơn MacDur, phải bán trái phiếu khi còn nhạy với lãi suất, nên lỗ giá lớn hơn lời tái đầu tư khi lãi suất tăng. B đúng khi gap âm; C khi gap bằng 0.' },
    { q: 'Thời hạn đầu tư bằng Macaulay duration của trái phiếu. Ngay sau khi mua, lãi suất thay đổi song song một lần. Horizon yield sẽ:', choices: ['Tăng mạnh nếu lãi suất tăng', 'Giảm mạnh nếu lãi suất tăng', 'Xấp xỉ bằng YTM lúc mua'], answer: 2, explain: 'Khi H = MacDur, lỗ (lời) giá được bù gần đúng bởi lời (lỗ) tái đầu tư. Trong bài, với H = 4,45 năm, horizon yield là 7,00% dù lãi suất lên 8% hay xuống 6%.' },
    { q: 'Mua trái phiếu 5 năm coupon 6% ở 95,90 (YTM 7%). Sau 3 năm bán ở 96,43 khi lãi suất thị trường là 8%. Giá trị ghi sổ theo YTM 7% lúc đó là 98,19. Lãi/lỗ vốn gần nhất với:', choices: ['+0,53', '-3,57', '-1,76'], answer: 2, explain: 'Lãi/lỗ vốn = giá bán - giá trị ghi sổ = 96,43 - 98,19 = -1,76. Đáp án A so với giá mua (lẫn phần trôi về par là thu nhập lãi). Đáp án B so với mệnh giá.' },
    { q: 'Trái phiếu trả coupon 6 mỗi năm trong 5 năm, coupon được tái đầu tư ở 8% đến lúc đáo hạn. Thu nhập tái đầu tư (phần lãi trên lãi) gần nhất với:', choices: ['5,20', '2,40', '35,20'], answer: 0, explain: 'FV 5 coupon ở 8% = 35,1996; trừ 30 tiền coupon gốc được 5,20. Đáp án C là tổng FV gồm cả coupon; đáp án B chỉ tính lãi đơn 8% trên 30.' },
    { q: 'Trái phiếu zero-coupon đáo hạn sau 7 năm, YTM 4%. Macaulay duration là:', choices: ['6,73 năm', '7,00 năm', 'Không tính được vì không có coupon'], answer: 1, explain: 'Chỉ có một dòng tiền ở năm 7 với trọng số 100%, nên MacDur = 7 năm, bất kể YTM. Đáp án A là modified duration 7/1,04.' },
    { q: 'Trái phiếu trả coupon hằng năm có Macaulay duration 4,45 tính tại ngày trả coupon. Ba tháng sau, YTM không đổi. Macaulay duration gần nhất với:', choices: ['4,45', '4,20', '4,70'], answer: 1, explain: 'Mọi dòng tiền gần thêm 0,25 năm nên MacDur giảm đúng t/T = 0,25: 4,45 - 0,25 = 4,20. Đáp án A quên điều chỉnh; đáp án C cộng thay vì trừ.' },
  ];

  window.LESSONS['FI-10'] = {
    moduleId: 'FI-10',
    calculator: 'BA II Plus',
    warmup: [
      'Ôn FI-06: trái phiếu 5 năm, coupon 6%, YTM 7% có giá bao nhiêu? (bấm máy)',
      'Ôn QM-04: FV của 3 khoản 6 trả cuối mỗi năm, lãi suất 8%, là bao nhiêu?',
      'Đoán trước: bạn sẽ giữ trái phiếu 20 năm đến đáo hạn. Bạn mong lãi suất tăng hay giảm ngay sau khi mua?',
    ],
    sections,
    glossary,
    practice,
    widgets: {},
    slides: [],
    wrapup: [
      'Viết 3 nguồn lợi nhuận của trái phiếu và nói nguồn nào bị ảnh hưởng khi lãi suất tăng.',
      'Giải thích bằng lời vì sao khi thời hạn đầu tư bằng Macaulay duration thì hai rủi ro triệt tiêu nhau.',
      'Duration gap dương thì nên lo lãi suất tăng hay giảm? Tự cho một ví dụ số.',
    ],
  };
}());
