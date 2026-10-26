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
<p>Tiếp theo: làm 10 câu (rút ngẫu nhiên từ ngân hàng 30 câu, mỗi lần làm một bộ khác) ở tab <b>Luyện tập</b>. FI-11 dùng lại Macaulay duration để đo độ nhạy của giá.</p>`,
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
    { q: 'Horizon yield của một trái phiếu bằng đúng YTM lúc mua khi nào?', choices: ['Khi nhà đầu tư giữ trái phiếu đến đáo hạn, bất kể lãi suất biến động', 'Khi coupon được tái đầu tư ở đúng YTM và trái phiếu được bán ở giá trị ghi sổ (lãi suất không đổi)', 'Khi trái phiếu được mua ở mệnh giá'], answer: 1, explain: 'YTM ngầm giả định coupon tái đầu tư ở chính YTM và không có lãi/lỗ vốn. Phương án "giữ đến đáo hạn" sai: giữ đến đáo hạn vẫn chịu rủi ro tái đầu tư (tình huống 3, 5 trong bài). Phương án mua ở mệnh giá không liên quan.' },
    { q: 'Mua trái phiếu 4 năm, coupon 5% hằng năm ở giá 100. Ngay sau đó lãi suất tăng lên 6% và giữ nguyên. Giữ đến đáo hạn, horizon yield gần nhất với:', choices: ['5,07%', '5,00%', '6,00%'], answer: 0, explain: 'FV coupon ở 6% = 21,8731; tổng = 121,8731; (121,8731/100)^(1/4) - 1 = 5,07%. Lựa chọn 5,00% bỏ qua lợi ích tái đầu tư. Lựa chọn 6,00% giả định cả trái phiếu sinh lời 6%, nhưng chỉ có coupon được hưởng lãi suất mới.' },
    { q: 'Mua trái phiếu 4 năm, coupon 5% hằng năm ở giá 100. Ngay sau đó lãi suất tăng lên 6% và giữ nguyên. Nếu bán trái phiếu sau 1 năm, lợi nhuận 1 năm gần nhất với:', choices: ['5,00%', '-2,67%', '2,33%'], answer: 2, explain: 'Giá bán (còn 3 năm, YTM 6%) = 97,3270. Lợi nhuận = (5 + 97,3270)/100 - 1 = 2,33%. Lựa chọn -2,67% quên coupon; lựa chọn 5,00% bỏ qua lỗ giá.' },
    { q: 'Trái phiếu 3 năm, coupon 4% hằng năm, YTM 5%. Macaulay duration gần nhất với:', choices: ['2,75', '2,88', '3,00'], answer: 1, explain: 'Giá 97,2768; trọng số PV: 0,0392; 0,0373; 0,9235. MacDur = 0,0392 + 2 x 0,0373 + 3 x 0,9235 = 2,88. Lựa chọn 2,75 là modified duration (2,88/1,05); lựa chọn 3,00 là kỳ hạn, chỉ đúng với zero-coupon.' },
    { q: 'Nhà đầu tư có thời hạn đầu tư 2 năm, mua trái phiếu có Macaulay duration 6 năm. Phát biểu nào đúng?', choices: ['Rủi ro giá chi phối; nhà đầu tư thiệt nếu lãi suất tăng', 'Rủi ro tái đầu tư chi phối; nhà đầu tư thiệt nếu lãi suất giảm', 'Hai rủi ro triệt tiêu nhau'], answer: 0, explain: 'Duration gap = 6 - 2 = 4 > 0: thời hạn ngắn hơn MacDur, phải bán trái phiếu khi còn nhạy với lãi suất, nên lỗ giá lớn hơn lời tái đầu tư khi lãi suất tăng. Phương án rủi ro tái đầu tư chi phối đúng khi gap âm; phương án hai rủi ro triệt tiêu nhau đúng khi gap bằng 0.' },
    { q: 'Thời hạn đầu tư bằng Macaulay duration của trái phiếu. Ngay sau khi mua, lãi suất thay đổi song song một lần. Horizon yield sẽ:', choices: ['Tăng mạnh nếu lãi suất tăng', 'Giảm mạnh nếu lãi suất tăng', 'Xấp xỉ bằng YTM lúc mua'], answer: 2, explain: 'Khi H = MacDur, lỗ (lời) giá được bù gần đúng bởi lời (lỗ) tái đầu tư. Trong bài, với H = 4,45 năm, horizon yield là 7,00% dù lãi suất lên 8% hay xuống 6%.' },
    { q: 'Mua trái phiếu 5 năm coupon 6% ở 95,90 (YTM 7%). Sau 3 năm bán ở 96,43 khi lãi suất thị trường là 8%. Giá trị ghi sổ theo YTM 7% lúc đó là 98,19. Lãi/lỗ vốn gần nhất với:', choices: ['+0,53', '-3,57', '-1,76'], answer: 2, explain: 'Lãi/lỗ vốn = giá bán - giá trị ghi sổ = 96,43 - 98,19 = -1,76. Lựa chọn +0,53 so với giá mua (lẫn phần trôi về par là thu nhập lãi). Lựa chọn -3,57 so với mệnh giá.' },
    { q: 'Trái phiếu trả coupon 6 mỗi năm trong 5 năm, coupon được tái đầu tư ở 8% đến lúc đáo hạn. Thu nhập tái đầu tư (phần lãi trên lãi) gần nhất với:', choices: ['5,20', '2,40', '35,20'], answer: 0, explain: 'FV 5 coupon ở 8% = 35,1996; trừ 30 tiền coupon gốc được 5,20. Lựa chọn 35,20 là tổng FV gồm cả coupon; lựa chọn 2,40 chỉ tính lãi đơn 8% trên 30.' },
    { q: 'Trái phiếu zero-coupon đáo hạn sau 7 năm, YTM 4%. Macaulay duration là:', choices: ['6,73 năm', '7,00 năm', 'Không tính được vì không có coupon'], answer: 1, explain: 'Chỉ có một dòng tiền ở năm 7 với trọng số 100%, nên MacDur = 7 năm, bất kể YTM. Lựa chọn 6,73 năm là modified duration 7/1,04.' },
    { q: 'Trái phiếu trả coupon hằng năm có Macaulay duration 4,45 tính tại ngày trả coupon. Ba tháng sau, YTM không đổi. Macaulay duration gần nhất với:', choices: ['4,45', '4,20', '4,70'], answer: 1, explain: 'Mọi dòng tiền gần thêm 0,25 năm nên MacDur giảm đúng t/T = 0,25: 4,45 - 0,25 = 4,20. Lựa chọn 4,45 quên điều chỉnh; lựa chọn 4,70 cộng thay vì trừ.' },
    { q: 'Nhà đầu tư mua trái phiếu 10 năm, coupon 5% trả hằng năm, ở YTM 6% (giá 92,64). Sau 4 năm, giá trị ghi sổ (carrying value) của trái phiếu theo YTM ban đầu gần nhất với:', choices: ['95,08', '92,64', '100,00'], answer: 0, explain: 'Giá trị ghi sổ = giá của trái phiếu còn 6 năm, chiết khấu ở YTM lúc mua 6%: N = 6, I/Y = 6, PMT = 5, FV = 100, PV = 95,08. Giá trị này trôi dần từ giá mua về mệnh giá. Lựa chọn 92,64 là giá mua, bỏ qua phần trôi giá. Lựa chọn 100,00 là mệnh giá, chỉ đạt được khi đáo hạn.' },
    { q: 'Nhà đầu tư mua trái phiếu 10 năm, coupon 5% hằng năm, ở YTM 6% (giá 92,64). Sau 4 năm, YTM thị trường là 5% và nhà đầu tư bán trái phiếu ở 100,00. Giá trị ghi sổ theo YTM 6% lúc đó là 95,08. Lãi vốn (capital gain) gần nhất với:', choices: ['0,00', '7,36', '4,92'], answer: 2, explain: 'Lãi vốn = giá bán - giá trị ghi sổ = 100,00 - 95,08 = 4,92. Lựa chọn 7,36 so với giá mua 92,64, gộp cả phần trôi giá 2,44 vốn là thu nhập lãi. Lựa chọn 0,00 nghĩ rằng bán ở mệnh giá thì không có lãi vốn, nhưng giá bán cao hơn giá trị ghi sổ do lãi suất giảm.' },
    { q: 'Mua trái phiếu 6 năm, coupon 4% hằng năm ở giá 100. Ngay sau đó lãi suất giảm xuống 3% và giữ nguyên. Giữ đến đáo hạn, horizon yield gần nhất với:', choices: ['4,00%', '3,00%', '3,91%'], answer: 2, explain: 'FV 6 coupon ở 3% = 25,8736; tổng tiền cuối năm 6 = 125,8736; horizon yield = (125,8736/100)^(1/6) - 1 = 3,91%. Giữ đến đáo hạn nên chỉ còn rủi ro tái đầu tư: lãi suất giảm làm horizon yield thấp hơn YTM. Lựa chọn 4,00% bỏ qua tác động tái đầu tư. Lựa chọn 3,00% cho rằng cả trái phiếu sinh lời ở lãi suất mới, nhưng chỉ coupon được tái đầu tư ở 3%.' },
    { q: 'Mua trái phiếu 6 năm, coupon 4% hằng năm ở giá 100. Ngay sau đó lãi suất giảm xuống 3% và giữ nguyên. Nhà đầu tư bán trái phiếu sau 2 năm. Horizon yield gần nhất với:', choices: ['5,75%', '3,98%', '5,70%'], answer: 0, explain: 'Coupon tái đầu tư: 4 x 1,03 + 4 = 8,12. Giá bán (còn 4 năm, YTM 3%) = 103,7171. Tổng = 111,8371; horizon yield = (111,8371/100)^(1/2) - 1 = 5,75%. Thời hạn ngắn hơn MacDur nên lãi giá chi phối khi lãi suất giảm. Lựa chọn 5,70% bỏ qua lãi trên coupon tái đầu tư. Lựa chọn 3,98% giả định bán ở mệnh giá, bỏ qua lãi giá.' },
    { q: 'Trái phiếu 4 năm, coupon 8% trả hằng năm, YTM 6%. Macaulay duration gần nhất với:', choices: ['3,39', '3,59', '4,00'], answer: 1, explain: 'Giá = 106,9302. MacDur = Σ t x PV(CFt)/giá = (1 x 7,5472 + 2 x 7,1200 + 3 x 6,7170 + 4 x 85,5461)/106,9302 = 3,59. Lựa chọn 3,39 là modified duration (3,59/1,06). Lựa chọn 4,00 là kỳ hạn, chỉ đúng với zero-coupon.' },
    { q: 'Trái phiếu 2 năm, coupon 6%/năm trả nửa năm, YTM 5%. Macaulay duration (tính theo năm) gần nhất với:', choices: ['1,87', '3,83', '1,92'], answer: 2, explain: 'Mỗi kỳ: r = 2,5%, coupon 3, N = 4. MacDur = 3,8304 kỳ nửa năm; chia 2 được 1,92 năm. Lựa chọn 3,83 quên đổi số kỳ sang năm. Lựa chọn 1,87 là modified duration năm hóa (1,92/1,025).' },
    { q: 'Trái phiếu vĩnh viễn (perpetuity) trả coupon hằng năm, YTM 5%. Macaulay duration là:', choices: ['21,0 năm', '20,0 năm', 'vô hạn vì không có ngày đáo hạn'], answer: 0, explain: 'MacDur của trái phiếu vĩnh viễn = (1 + r)/r = 1,05/0,05 = 21,0 năm. Lựa chọn 20,0 năm là 1/r, chính là modified duration. Phương án "vô hạn" sai vì dòng tiền rất xa có trọng số PV gần bằng 0.' },
    { q: 'Nhà đầu tư có thời hạn đầu tư 10 năm nắm trái phiếu có Macaulay duration 7,2. Duration gap và rủi ro chi phối là:', choices: ['gap -2,8; rủi ro giá, thiệt nếu lãi suất tăng', 'gap -2,8; rủi ro tái đầu tư, thiệt nếu lãi suất giảm', 'gap +2,8; rủi ro giá, thiệt nếu lãi suất tăng'], answer: 1, explain: 'Duration gap = MacDur - thời hạn = 7,2 - 10 = -2,8. Gap âm: thời hạn dài hơn MacDur, coupon được tái đầu tư lâu, nên rủi ro tái đầu tư chi phối và nhà đầu tư thiệt khi lãi suất giảm. Phương án "+2,8" lấy thời hạn trừ MacDur (đảo dấu). Phương án "gap -2,8; rủi ro giá" tính đúng gap nhưng diễn giải sai rủi ro.' },
    { q: 'Một công ty bảo hiểm phải trả một khoản cố định sau 6 năm và muốn giảm thiểu ảnh hưởng của một lần thay đổi lãi suất song song ngay sau khi mua. Trái phiếu phù hợp nhất là:', choices: ['trái phiếu kỳ hạn 6 năm có Macaulay duration 5,3', 'trái phiếu kỳ hạn 10 năm có Macaulay duration 8,3', 'trái phiếu kỳ hạn 7 năm có Macaulay duration 6,0'], answer: 2, explain: 'Rủi ro giá và rủi ro tái đầu tư triệt tiêu nhau khi Macaulay duration bằng thời hạn đầu tư (duration gap = 0), nên chọn trái phiếu có MacDur 6,0. Trái phiếu kỳ hạn 6 năm khớp kỳ hạn nhưng MacDur 5,3 < 6, còn gap âm và chịu rủi ro tái đầu tư. Trái phiếu MacDur 8,3 có gap dương, chịu rủi ro giá.' },
    { q: 'Trái phiếu 3 năm, coupon 10% hằng năm, YTM 10% (giá 100). Trọng số PV của dòng tiền năm 3 trong phép tính Macaulay duration gần nhất với:', choices: ['0,8264', '0,3333', '0,8462'], answer: 0, explain: 'w3 = [110/1,10^3]/100 = 82,6446/100 = 0,8264. Lựa chọn 0,8462 lấy 110/130, tỷ trọng theo dòng tiền chưa chiết khấu. Lựa chọn 0,3333 chia đều cho 3 năm, bỏ qua độ lớn và PV của dòng tiền.' },
    { q: 'Mua trái phiếu ở giá 92,00. Sau 3 năm, tổng tiền nhà đầu tư có (coupon, thu nhập tái đầu tư và giá bán) là 112,50. Horizon yield gần nhất với:', choices: ['7,43%', '6,94%', '22,28%'], answer: 1, explain: 'Horizon yield = (112,50/92,00)^(1/3) - 1 = 6,94%. Lựa chọn 7,43% chia lợi nhuận 22,28% cho 3 (lãi đơn, bỏ qua ghép lãi). Lựa chọn 22,28% là lợi nhuận cả 3 năm, chưa năm hóa.' },
    { q: 'Ngay sau khi mua trái phiếu, lãi suất tăng và giữ nguyên ở mức cao hơn. Nhà đầu tư nào nhiều khả năng đạt horizon yield cao hơn YTM lúc mua?', choices: ['Nhà đầu tư có thời hạn đúng bằng Macaulay duration', 'Nhà đầu tư có thời hạn ngắn hơn Macaulay duration của trái phiếu', 'Nhà đầu tư có thời hạn dài hơn Macaulay duration của trái phiếu'], answer: 2, explain: 'Thời hạn dài hơn MacDur (gap âm): lợi ích tái đầu tư coupon ở lãi suất cao hơn lấn át lỗ giá, nên horizon yield tăng. Thời hạn ngắn hơn MacDur thì lỗ giá chi phối, horizon yield giảm. Thời hạn bằng MacDur thì hai hiệu ứng gần như triệt tiêu, horizon yield xấp xỉ YTM.' },
    { q: 'Một trái phiếu có Macaulay duration 4,45 năm. Cách diễn giải nào đúng?', choices: ['Thời gian bình quân nhận dòng tiền, trọng số theo PV; cũng là thời hạn mà rủi ro giá và rủi ro tái đầu tư triệt tiêu nhau', 'Giá trái phiếu giảm khoảng 4,45% khi lợi suất tăng 1 điểm phần trăm', 'Thời điểm nhà đầu tư nhận được một nửa tổng số tiền chưa chiết khấu'], answer: 0, explain: 'Macaulay duration là bình quân có trọng số PV của thời điểm nhận dòng tiền và là thời hạn "miễn nhiễm" với một lần thay đổi lãi suất. Phương án "giá giảm 4,45% khi lợi suất tăng 1%" mô tả modified duration (MacDur/(1 + r)). Phương án "một nửa tổng tiền chưa chiết khấu" không dùng trọng số PV.' },
    { q: 'Trái phiếu trả coupon 7 mỗi năm trong 4 năm; coupon được tái đầu tư ở 3% đến lúc đáo hạn. Phần lãi trên lãi (interest on interest) gần nhất với:', choices: ['0,84', '1,29', '29,29'], answer: 1, explain: 'FV 4 coupon ở 3% = 7 x (1,03^3 + 1,03^2 + 1,03 + 1) = 29,2854; trừ 28 tiền coupon gốc còn 1,29. Lựa chọn 29,29 là tổng FV gồm cả coupon. Lựa chọn 0,84 chỉ tính 3% trên tổng coupon 28 một lần, bỏ qua số năm tái đầu tư khác nhau.' },
    { q: 'Khớp Macaulay duration với thời hạn đầu tư để "miễn nhiễm" rủi ro lãi suất có hạn chế nào?', choices: ['Chỉ áp dụng cho trái phiếu zero-coupon', 'Chỉ bảo vệ khi lãi suất tăng, không bảo vệ khi lãi suất giảm', 'Chỉ đúng với một lần thay đổi lãi suất song song ngay sau khi mua; theo thời gian cần tái cân bằng'], answer: 2, explain: 'Kết quả triệt tiêu giả định một lần dịch chuyển song song xảy ra ngay; khi thời gian trôi và lãi suất đổi, MacDur thay đổi khác với thời hạn còn lại nên phải tái cân bằng. Phương án "chỉ cho zero-coupon" sai: trái phiếu coupon cũng dùng được (đó là điểm chính của MacDur). Phương án "chỉ bảo vệ khi lãi suất tăng" sai: khi gap bằng 0, cả hai chiều đều được bù trừ.' },
    { q: 'Mua trái phiếu 8 năm, coupon 3% hằng năm ở YTM 5% (giá 87,07). Lãi suất giữ nguyên 5%, coupon tái đầu tư ở 5%, nhà đầu tư bán sau 3 năm ở giá trị ghi sổ 91,34. Horizon yield gần nhất với:', choices: ['5,00%', '3,45%', '4,84%'], answer: 0, explain: 'Coupon tái đầu tư = 3 x (1,05^2 + 1,05 + 1) = 9,4575; tổng = 9,4575 + 91,3410 = 100,7985; (100,7985/87,0736)^(1/3) - 1 = 5,00%. Lãi suất không đổi và coupon tái đầu tư ở YTM thì horizon yield bằng YTM, bất kể thời hạn. Lựa chọn 4,84% bỏ qua lãi trên coupon tái đầu tư. Lựa chọn 3,45% là current yield 3/87,07.' },
    { q: 'Mua trái phiếu ở giá 104,50 (trên mệnh giá). Lãi suất không đổi; sau 2 năm nhà đầu tư bán ở giá trị ghi sổ 103,10. Khoản chênh lệch 1,40 giữa giá mua và giá bán nên được hiểu là:', choices: ['lỗ vốn 1,40', 'phần phân bổ premium làm giảm thu nhập lãi, không phải lỗ vốn', 'lỗ do rủi ro tái đầu tư'], answer: 1, explain: 'Lãi/lỗ vốn đo bằng giá bán trừ giá trị ghi sổ: 103,10 - 103,10 = 0. Giá trái phiếu premium tự trôi dần về mệnh giá; phần giảm này là phân bổ premium, làm thu nhập lãi thấp hơn coupon. Phương án "lỗ vốn 1,40" so với giá mua thay vì giá trị ghi sổ. Rủi ro tái đầu tư không liên quan vì lãi suất không đổi.' },
    { q: 'Mua trái phiếu ở giá 97,00, dưới mệnh giá. Lãi suất không đổi; trái phiếu được giữ đến đáo hạn và nhận 100. Phần chênh lệch 3,00 nên được xếp vào nguồn lợi nhuận nào?', choices: ['thu nhập tái đầu tư', 'lãi vốn', 'thu nhập lãi (accretion of discount)'], answer: 2, explain: 'Khi lãi suất không đổi, giá trái phiếu chiết khấu trôi dần về mệnh giá theo đúng YTM lúc mua; phần này là một phần của lợi suất đã cam kết, tức thu nhập lãi. Lãi vốn chỉ phát sinh khi giá bán khác giá trị ghi sổ. Thu nhập tái đầu tư là lãi kiếm được từ coupon đem đi đầu tư tiếp.' },
    { q: 'Trái phiếu trả coupon nửa năm có Macaulay duration 9,0 kỳ nửa năm. Nhà đầu tư có thời hạn đầu tư 5 năm. Duration gap và rủi ro chi phối là:', choices: ['-0,5 năm; rủi ro tái đầu tư', '+4,0 năm; rủi ro giá', '+0,5 năm; rủi ro giá'], answer: 0, explain: 'MacDur năm = 9,0/2 = 4,5 năm; gap = 4,5 - 5 = -0,5. Gap âm nên rủi ro tái đầu tư chi phối (thiệt khi lãi suất giảm). Lựa chọn "+4,0 năm" quên đổi kỳ sang năm (9 - 5). Lựa chọn "+0,5 năm" lấy thời hạn trừ MacDur, đảo dấu gap và đảo luôn rủi ro chi phối.' },
    { q: 'Mua trái phiếu 4 năm, coupon 6% hằng năm ở giá 100. Ngay sau đó lãi suất tăng lên 7% và giữ nguyên. Nhà đầu tư bán sau 2 năm. Tổng tiền có ở năm 2 (coupon, tái đầu tư và giá bán) gần nhất với:', choices: ['112,42', '110,61', '110,19'], answer: 1, explain: 'Coupon tái đầu tư = 6 x 1,07 + 6 = 12,42. Giá bán (còn 2 năm, YTM 7%) = 98,1920. Tổng = 110,61. Lựa chọn 110,19 bỏ qua lãi 0,42 từ tái đầu tư coupon năm 1. Lựa chọn 112,42 giả định bán ở mệnh giá, bỏ qua lỗ giá.' },
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
