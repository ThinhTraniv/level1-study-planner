// Bài giảng QM-05 - Statistical Characteristics of Asset Returns (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
(function () {
  const { term: t, frac, keys, pages } = window.CFAH;

  const sections = [
    {
      title: '1. Bức tranh lớn',
      minutes: 5,
      html: `
<p>Ở QM-01 bạn đã tính lợi suất của <b>một</b> kỳ. Module này hỏi tiếp: khi có <b>cả một chuỗi</b> lợi suất (10 năm, 60 tháng...), làm sao tóm tắt nó bằng vài con số mà vẫn giữ được thông tin quan trọng cho quyết định đầu tư?</p>
<div class="key">Một chuỗi lợi suất được mô tả bằng 4 nhóm thước đo:<br>
1. <b>Vị trí</b>: lợi suất "điển hình" ở đâu (mean, median, mode, quantile).<br>
2. <b>Độ phân tán</b>: lợi suất dao động rộng hay hẹp (range, MAD, variance, standard deviation, downside deviation, CV).<br>
3. <b>Hình dạng</b>: lệch về phía nào, đuôi dày hay mỏng (skewness, kurtosis).<br>
4. <b>Quan hệ giữa hai tài sản</b>: cùng chiều hay ngược chiều (covariance, correlation).</div>
<table class="plain"><thead><tr><th>LOS 2027</th><th>Phần trong bài</th></tr></thead><tbody>
<tr><td>Central tendency, location và dispersion</td><td>Phần 2, 3, 4, 5</td></tr>
<tr><td>Skewness và kurtosis</td><td>Phần 7, 8</td></tr>
<tr><td>Covariance và correlation</td><td>Phần 9</td></tr>
<tr><td>Semi-deviation và coefficient of variation</td><td>Phần 6</td></tr>
</tbody></table>
<p class="tip"><b>Vì sao nhà đầu tư quan tâm?</b> Hai quỹ cùng lợi suất bình quân 8% có thể rất khác nhau: một quỹ dao động đều quanh 8%, quỹ kia thỉnh thoảng mất 30%. Chỉ nhìn trung bình là chưa đủ, phải nhìn cả độ phân tán, hình dạng phân phối và mức tương quan với phần còn lại của danh mục.</p>`,
    },
    {
      title: '2. Xu hướng trung tâm: mean, median, mode',
      minutes: 13,
      html: `
<p>${t('mean', 'Trung bình cộng (arithmetic mean)')} là tổng các quan sát chia cho số quan sát:</p>
<div class="formula">X̄ = ${frac('Σ X<sub>i</sub>', 'n')}</div>
<p>${t('median', 'Trung vị (median)')} là giá trị đứng giữa sau khi <b>sắp xếp tăng dần</b> (n chẵn thì lấy trung bình hai giá trị giữa). ${t('mode', 'Yếu vị (mode)')} là giá trị xuất hiện nhiều nhất; một tập dữ liệu có thể có 0, 1 hoặc nhiều mode.</p>

<div class="example"><div class="ex-h">Ví dụ 2.1 - Một năm "bất thường"</div>
<p>Lợi suất 10 năm của một quỹ (%): 6, -2, 9, 4, 6, 11, 3, 7, 6, 40. Tính mean, median, mode.</p>
<details><summary>Xem lời giải</summary>
<p>Sắp xếp: -2, 3, 4, 6, 6, 6, 7, 9, 11, 40.<br>
Mean = 90 / 10 = <b>9%</b>. Median = (6 + 6) / 2 = <b>6%</b>. Mode = <b>6%</b> (xuất hiện 3 lần).</p>
<p>Mean bị năm 40% kéo lên cao hơn hẳn 9 trong 10 năm còn lại. Median và mode không bị ảnh hưởng. Đây là lý do median thường được dùng khi dữ liệu có ${t('outlier', 'giá trị ngoại lai (outlier)')}.</p></details></div>

<h4>Xử lý giá trị ngoại lai</h4>
<p>Có ba lựa chọn khi gặp outlier: (1) giữ nguyên nếu nó là dữ liệu thật và có ý nghĩa (ví dụ năm khủng hoảng); (2) loại bỏ; (3) thay thế. Hai cách tính trung bình "chống outlier":</p>
<table class="plain"><thead><tr><th>Thước đo</th><th>Cách làm</th><th>Ví dụ 2.1 (20%)</th></tr></thead><tbody>
<tr><td>${t('trimmed', 'Trimmed mean')}</td><td>Bỏ hẳn x% quan sát ở hai đầu (mỗi đầu x/2%), rồi tính trung bình phần còn lại</td><td>Bỏ -2 và 40: 52 / 8 = <b>6,50%</b></td></tr>
<tr><td>${t('winsorized', 'Winsorized mean')}</td><td>Thay các quan sát ở hai đầu bằng giá trị gần nhất còn giữ lại, giữ nguyên n</td><td>-2 thành 3, 40 thành 11: 66 / 10 = <b>6,60%</b></td></tr>
</tbody></table>
<p class="warn"><b>Bẫy:</b> trimmed mean làm <b>giảm n</b> (chia cho 8), còn winsorized mean <b>giữ nguyên n</b> (chia cho 10). "20% trimmed" nghĩa là bỏ tổng cộng 20%, tức 10% mỗi đầu, không phải 20% mỗi đầu.</p>
<p class="tip">Geometric mean và harmonic mean đã học ở QM-01 (Rates and Returns). Nhắc lại: với lợi suất nhiều kỳ, geometric mean ≤ arithmetic mean, chênh lệch càng lớn khi lợi suất càng biến động.</p>`,
    },
    {
      title: '3. Thước đo vị trí: quartile, quintile, decile, percentile',
      minutes: 12,
      html: `
<p>${t('quantile', 'Quantile')} là giá trị chia dữ liệu đã sắp xếp thành các phần bằng nhau: ${t('quartile', 'quartile')} (4 phần), quintile (5 phần), decile (10 phần), percentile (100 phần). Q<sub>1</sub> = P<sub>25</sub>, median = Q<sub>2</sub> = P<sub>50</sub>, Q<sub>3</sub> = P<sub>75</sub>.</p>
<h4>Công thức vị trí</h4>
<div class="formula">L<sub>y</sub> = (n + 1) × ${frac('y', '100')}</div>
<p>L<sub>y</sub> là <b>số thứ tự</b> (vị trí) của percentile thứ y trong dãy đã sắp xếp tăng dần, không phải giá trị. Nếu L<sub>y</sub> không nguyên, ${t('interp', 'nội suy tuyến tính')} giữa hai quan sát kề nhau:</p>
<div class="formula">P<sub>y</sub> = X<sub>(phần nguyên)</sub> + (phần lẻ) × [X<sub>(phần nguyên + 1)</sub> - X<sub>(phần nguyên)</sub>]</div>

<div class="example"><div class="ex-h">Ví dụ 3.1</div>
<p>Dùng dữ liệu đã sắp xếp của ví dụ 2.1: -2, 3, 4, 6, 6, 6, 7, 9, 11, 40 (n = 10). Tìm Q<sub>1</sub>, Q<sub>3</sub> và percentile 90.</p>
<details><summary>Xem lời giải</summary>
<p>Q<sub>1</sub>: L = 11 × 0,25 = 2,75 → giữa quan sát thứ 2 (3) và thứ 3 (4): 3 + 0,75 × (4 - 3) = <b>3,75%</b>.<br>
Q<sub>3</sub>: L = 11 × 0,75 = 8,25 → giữa quan sát thứ 8 (9) và thứ 9 (11): 9 + 0,25 × (11 - 9) = <b>9,50%</b>.<br>
P<sub>90</sub>: L = 11 × 0,90 = 9,9 → 11 + 0,9 × (40 - 11) = <b>37,10%</b>.</p></details></div>

<h4>Interquartile range và box-and-whisker</h4>
<p>${t('iqr', 'Interquartile range (IQR)')} = Q<sub>3</sub> - Q<sub>1</sub> = 9,50 - 3,75 = <b>5,75%</b>: độ rộng của 50% quan sát ở giữa, không bị outlier ảnh hưởng. Biểu đồ ${t('boxplot', 'box-and-whisker')} vẽ hộp từ Q<sub>1</sub> đến Q<sub>3</sub>, vạch median trong hộp, và "râu" kéo ra hai phía. Một quy ước phổ biến coi quan sát nằm ngoài Q<sub>3</sub> + 1,5 × IQR hoặc Q<sub>1</sub> - 1,5 × IQR là outlier: ở đây ngưỡng trên là 9,50 + 8,625 = 18,125%, nên năm 40% là outlier.</p>
<p class="warn"><b>Bẫy hay gặp:</b> dùng n × y/100 thay cho (n + 1) × y/100 (ra vị trí 7,5 thay vì 8,25), hoặc quên sắp xếp dữ liệu trước khi đếm vị trí.</p>
<p class="tip">Ứng dụng thực tế: xếp hạng quỹ theo quartile (quỹ "top quartile"), chia cổ phiếu theo decile P/E, hay báo cáo lỗ ở percentile thứ 5 (gần với ý tưởng VaR ở phần Portfolio Management).</p>`,
    },
    {
      title: '4. Độ phân tán: range, MAD, phương sai, độ lệch chuẩn',
      minutes: 15,
      html: `
<p>${t('dispersion', 'Độ phân tán (dispersion)')} đo mức dao động của dữ liệu quanh giá trị trung tâm. Trong đầu tư, phân tán chính là <b>rủi ro</b>.</p>
<table class="plain"><thead><tr><th>Thước đo</th><th>Công thức</th><th>Nhận xét</th></tr></thead><tbody>
<tr><td>${t('range', 'Range')}</td><td>Max - Min</td><td>Dễ tính, chỉ dùng 2 quan sát cực trị</td></tr>
<tr><td>${t('mad', 'Mean absolute deviation (MAD)')}</td><td>${frac('Σ |X<sub>i</sub> - X̄|', 'n')}</td><td>Dùng mọi quan sát; chia cho n</td></tr>
<tr><td>${t('svar', 'Sample variance')}</td><td>s<sup>2</sup> = ${frac('Σ (X<sub>i</sub> - X̄)<sup>2</sup>', 'n - 1')}</td><td>Đơn vị là %<sup>2</sup>, khó diễn giải</td></tr>
<tr><td>${t('ssd', 'Sample standard deviation')}</td><td>s = √s<sup>2</sup></td><td>Cùng đơn vị với dữ liệu; thước đo rủi ro phổ biến nhất</td></tr>
</tbody></table>

<h4>Mẫu (sample) hay tổng thể (population)?</h4>
<p>Với ${t('population', 'tổng thể')}, phương sai σ<sup>2</sup> chia cho N. Với ${t('sample', 'mẫu')}, chia cho <b>n - 1</b>. Lý do: X̄ được ước lượng từ chính mẫu đó nên các độ lệch bị "kéo" về gần X̄ hơn thực tế; chia cho n - 1 (số ${t('df', 'bậc tự do')}) bù lại để s<sup>2</sup> không bị ước lượng thấp. Lợi suất lịch sử gần như luôn là <b>mẫu</b>, nên mặc định dùng n - 1.</p>

<div class="example"><div class="ex-h">Ví dụ 4.1 - Dữ liệu dùng cho cả phần 4, 5, 6</div>
<p>Lợi suất 6 năm của cổ phiếu B (%): 12, -5, 8, 20, -3, 10. Tính range, MAD, s<sup>2</sup>, s và σ (nếu coi đây là tổng thể).</p>
<details><summary>Xem lời giải</summary>
<p>X̄ = 42 / 6 = 7%. Range = 20 - (-5) = <b>25%</b>.</p>
<table class="plain"><thead><tr><th>X<sub>i</sub></th><th>X<sub>i</sub> - X̄</th><th>|X<sub>i</sub> - X̄|</th><th>(X<sub>i</sub> - X̄)<sup>2</sup></th></tr></thead><tbody>
<tr><td>12</td><td>5</td><td>5</td><td>25</td></tr>
<tr><td>-5</td><td>-12</td><td>12</td><td>144</td></tr>
<tr><td>8</td><td>1</td><td>1</td><td>1</td></tr>
<tr><td>20</td><td>13</td><td>13</td><td>169</td></tr>
<tr><td>-3</td><td>-10</td><td>10</td><td>100</td></tr>
<tr><td>10</td><td>3</td><td>3</td><td>9</td></tr>
<tr><td><b>Tổng</b></td><td>0</td><td>44</td><td>448</td></tr>
</tbody></table>
<p>MAD = 44 / 6 = <b>7,33%</b>. s<sup>2</sup> = 448 / 5 = <b>89,6</b> (%<sup>2</sup>). s = √89,6 = <b>9,47%</b>.<br>
Nếu coi là tổng thể: σ<sup>2</sup> = 448 / 6 = 74,67, σ = <b>8,64%</b>.</p>
<p>Tổng các độ lệch luôn bằng 0, vì thế phải lấy trị tuyệt đối (MAD) hoặc bình phương (variance) thì mới đo được độ phân tán.</p></details></div>
<p class="tip">MAD luôn ≤ độ lệch chuẩn (ở đây 7,33 &lt; 9,47), vì bình phương làm các độ lệch lớn có trọng số lớn hơn.</p>`,
    },
    {
      title: '5. BA II Plus: chế độ DATA và STAT',
      minutes: 12,
      html: `
<p>Máy BA II Plus tính nhanh mean, độ lệch chuẩn mẫu và tổng thể, và cả hệ số tương quan cho hai biến. Máy <b>không</b> tính median, mode, MAD, skewness hay kurtosis: những thứ này phải tính tay.</p>
<h4>a) Một biến (1-V): dữ liệu cổ phiếu B</h4>
${keys([
  ['Mở bảng dữ liệu (DATA)', '[2ND] [7]', 'X01'],
  ['Xóa dữ liệu cũ (CLR WORK)', '[2ND] [CE/C]', 'X01 = 0'],
  ['Nhập năm 1, xuống 2 dòng (bỏ qua Y01)', '12 [ENTER] [↓] [↓]', 'X02'],
  ['Nhập số âm', '5 [+/-] [ENTER] [↓] [↓]', 'X03'],
  ['Nhập tiếp 8, 20, -3, 10 theo cách trên', '...', 'X07'],
  ['Mở thống kê (STAT)', '[2ND] [8]', 'LIN hoặc 1-V'],
  ['Chọn chế độ 1 biến', '[2ND] [ENTER] bấm lặp đến khi thấy 1-V', '1-V'],
  ['Xem kết quả', '[↓]', 'n = 6.0000'],
  ['', '[↓]', 'x̄ = 7.0000'],
  ['Độ lệch chuẩn mẫu', '[↓]', 'Sx = 9.4657'],
  ['Độ lệch chuẩn tổng thể', '[↓]', 'σx = 8.6410'],
  ['Tổng và tổng bình phương', '[↓] [↓]', 'Σx = 42, Σx² = 742'],
])}
<p>Khi nhập X01 rồi bấm <kbd>ENTER</kbd>, máy tự đặt Y01 = 1 (tần suất 1 lần). Ở chế độ 1-V, Y đóng vai trò <b>tần suất</b>: nếu một giá trị lặp lại 3 lần, bạn có thể nhập X = giá trị đó, Y = 3 thay vì gõ 3 lần.</p>
<p class="warn"><b>Ba lỗi hay gặp:</b> (1) quên <kbd>2ND</kbd> <kbd>CE/C</kbd> nên máy cộng dồn dữ liệu bài trước (kiểm tra n!); (2) đọc nhầm σx thay vì Sx khi đề hỏi "sample"; (3) nhập số âm bằng phím <kbd>+/-</kbd> sau khi gõ số, không dùng phím trừ.</p>

<h4>b) Hai biến (LIN): tính tương quan và hiệp phương sai</h4>
<p>Nhập cặp X01, Y01, X02, Y02... (bấm <kbd>ENTER</kbd> sau mỗi số rồi <kbd>↓</kbd>). Trong STAT chọn LIN, rồi bấm <kbd>↓</kbd> lần lượt qua n, x̄, Sx, σx, ȳ, Sy, σy, a, b, <b>r</b>. Máy không hiện covariance; tính bằng:</p>
<div class="formula">s<sub>XY</sub> = r × S<sub>x</sub> × S<sub>y</sub></div>
<p>Ví dụ ở phần 9 cho r = 0.9733, Sx = 6.0000, Sy = 3.0822 nên s<sub>XY</sub> = 18,00.</p>`,
    },
    {
      title: '6. Rủi ro phía dưới và rủi ro tương đối: downside deviation, semi-deviation, CV',
      minutes: 14,
      html: `
<p>Độ lệch chuẩn phạt cả biến động <b>tốt</b> (lãi nhiều hơn kỳ vọng) lẫn biến động <b>xấu</b>. Nhà đầu tư thường chỉ lo phần xấu. Hai thước đo chỉ nhìn phía dưới:</p>
<div class="formula">s<sub>Target</sub> = √[ ${frac('Σ<sub>X<sub>i</sub> ≤ B</sub> (X<sub>i</sub> - B)<sup>2</sup>', 'n - 1')} ]</div>
<ul>
<li>${t('tdd', 'Target downside deviation (target semideviation)')}: B là mức mục tiêu do nhà đầu tư chọn (0%, lãi suất phi rủi ro, lợi suất tối thiểu yêu cầu...).</li>
<li>${t('semidev', 'Semi-deviation')}: trường hợp đặc biệt với B = X̄, chỉ dùng các quan sát dưới trung bình.</li>
</ul>
<p class="warn"><b>Hai bẫy chết người:</b> (1) Tử số chỉ cộng các quan sát <b>≤ B</b>, nhưng mẫu số vẫn là <b>n - 1 của toàn bộ mẫu</b>, không phải số quan sát dưới B trừ 1. (2) Độ lệch tính so với <b>B</b>, không phải so với X̄.</p>

<div class="example"><div class="ex-h">Ví dụ 6.1 - Cổ phiếu B (12, -5, 8, 20, -3, 10)</div>
<p>Tính target downside deviation với B = 5% và semi-deviation.</p>
<details><summary>Xem lời giải</summary>
<p><b>B = 5%:</b> quan sát ≤ 5 là -5 và -3. Tử số = (-5 - 5)<sup>2</sup> + (-3 - 5)<sup>2</sup> = 100 + 64 = 164. s<sub>Target</sub> = √(164 / 5) = √32,8 = <b>5,73%</b>.<br>
Nếu chia nhầm cho 2 (số quan sát dưới B) bạn được 9,06%; chia cho n = 6 được 5,23%. Cả hai đều sai.</p>
<p><b>Semi-deviation (B = X̄ = 7%):</b> quan sát ≤ 7 là -5 và -3: (-12)<sup>2</sup> + (-10)<sup>2</sup> = 244. √(244 / 5) = <b>6,99%</b>. Nhỏ hơn độ lệch chuẩn 9,47% vì bỏ qua các năm lãi tốt.</p></details></div>

<h4>Hệ số biến thiên (coefficient of variation)</h4>
<div class="formula">CV = ${frac('s', 'X̄')}</div>
<p>${t('cv', 'CV')} đo <b>rủi ro trên mỗi đơn vị lợi suất</b>. Vì không có đơn vị, CV cho phép so sánh các tài sản có mức lợi suất khác nhau. <b>CV càng thấp càng tốt</b>.</p>
<div class="example"><div class="ex-h">Ví dụ 6.2</div>
<p>Quỹ trái phiếu: X̄ = 4%, s = 3%. Quỹ cổ phiếu: X̄ = 11%, s = 18%. Cổ phiếu B ở ví dụ 4.1: X̄ = 7%, s = 9,47%.</p>
<details><summary>Xem lời giải</summary>
<p>CV<sub>trái phiếu</sub> = 3 / 4 = <b>0,75</b>. CV<sub>cổ phiếu</sub> = 18 / 11 = <b>1,64</b>. CV<sub>B</sub> = 9,47 / 7 = <b>1,35</b>.<br>
Quỹ trái phiếu chịu ít rủi ro nhất cho mỗi 1% lợi suất. Lưu ý: CV vô nghĩa khi X̄ gần 0 hoặc âm.</p></details></div>
<p class="tip">CV là "nghịch đảo họ hàng" của Sharpe ratio: Sharpe = (R<sub>p</sub> - R<sub>f</sub>) / σ, càng cao càng tốt; CV = σ / X̄, càng thấp càng tốt. Đề hay hỏi "MOST efficient risk-adjusted" → chọn CV nhỏ nhất.</p>`,
    },
    {
      title: '7. Skewness: phân phối lệch về phía nào?',
      minutes: 13,
      html: `
<p>${t('skew', 'Skewness (độ lệch)')} đo mức <b>không đối xứng</b> của phân phối. Phân phối đối xứng (ví dụ normal) có skewness = 0.</p>
<div class="formula">Skewness ≈ ${frac('1', 'n')} × ${frac('Σ (X<sub>i</sub> - X̄)<sup>3</sup>', 's<sup>3</sup>')}</div>
<p>Lũy thừa 3 giữ nguyên dấu và khuếch đại độ lệch lớn, nên một vài quan sát cực đoan ở một phía sẽ quyết định dấu của skewness. (Công thức mẫu chính xác nhân thêm hệ số n/[(n - 1)(n - 2)] thay cho 1/n; với n lớn hai công thức gần như bằng nhau. Đề thi chủ yếu hỏi diễn giải.)</p>
<table class="plain"><thead><tr><th></th><th>${t('posskew', 'Lệch phải (positive skew)')}</th><th>${t('negskew', 'Lệch trái (negative skew)')}</th></tr></thead><tbody>
<tr><td>Hình dạng</td><td>Đuôi dài bên phải</td><td>Đuôi dài bên trái</td></tr>
<tr><td>Thứ tự (unimodal)</td><td><b>Mode &lt; Median &lt; Mean</b></td><td><b>Mean &lt; Median &lt; Mode</b></td></tr>
<tr><td>Lợi suất điển hình</td><td>Nhiều khoản lỗ nhỏ, thỉnh thoảng lãi rất lớn</td><td>Nhiều khoản lãi nhỏ, thỉnh thoảng lỗ rất lớn</td></tr>
<tr><td>Ví dụ</td><td>Mua quyền chọn, cổ phiếu khởi nghiệp, xổ số</td><td>Bán quyền chọn, trái phiếu có rủi ro vỡ nợ, chiến lược "nhặt tiền lẻ trước xe lu"</td></tr>
</tbody></table>
<p class="tip"><b>Mẹo nhớ:</b> mean bị đuôi "kéo đi", median đứng giữa, mode ở đỉnh. Vậy mean luôn nằm về phía đuôi dài. Nhà đầu tư nhìn chung <b>thích lệch phải</b> và ngại lệch trái, vì lệch trái giấu rủi ro thua lỗ lớn mà độ lệch chuẩn không thể hiện hết.</p>

<div class="example"><div class="ex-h">Ví dụ 7.1 - Quỹ bán quyền chọn</div>
<p>Lợi suất 8 quý (%): 3, 4, 2, 5, 3, 4, 3, -18. Xác định mean, median, mode và dấu của skewness.</p>
<details><summary>Xem lời giải</summary>
<p>Mean = 6 / 8 = <b>0,75%</b>. Sắp xếp: -18, 2, 3, 3, 3, 4, 4, 5 → median = <b>3%</b>, mode = <b>3%</b>.<br>
Mean &lt; median = mode, đuôi trái do quý -18%. s = 7,63%, skewness xấp xỉ <b>-1,80</b>: lệch trái rõ rệt. 7 trên 8 quý lãi đều đặn nhưng một quý xóa sạch lợi nhuận.</p></details></div>
<h4>Thử ngay: nhập dữ liệu của bạn</h4>
<div class="widget" data-widget="returnStats"></div>`,
    },
    {
      title: '8. Kurtosis: đuôi dày hay mỏng?',
      minutes: 10,
      html: `
<p>${t('kurt', 'Kurtosis')} đo mức "dày" của hai đuôi (và độ nhọn của đỉnh) so với phân phối chuẩn. Phân phối chuẩn có kurtosis = 3, nên người ta dùng ${t('excess', 'excess kurtosis')} = kurtosis - 3 để so sánh.</p>
<div class="formula">Kurtosis ≈ ${frac('1', 'n')} × ${frac('Σ (X<sub>i</sub> - X̄)<sup>4</sup>', 's<sup>4</sup>')} &nbsp;&nbsp;&nbsp; Excess kurtosis = Kurtosis - 3</div>
<table class="plain"><thead><tr><th>Loại</th><th>Kurtosis</th><th>Excess</th><th>Đặc điểm</th></tr></thead><tbody>
<tr><td>${t('lepto', 'Leptokurtic')}</td><td>&gt; 3</td><td>&gt; 0</td><td>Đỉnh nhọn, đuôi dày (fat tails): nhiều quan sát sát trung bình <b>và</b> nhiều quan sát cực đoan hơn normal</td></tr>
<tr><td>Mesokurtic</td><td>= 3</td><td>= 0</td><td>Giống phân phối chuẩn</td></tr>
<tr><td>${t('platy', 'Platykurtic')}</td><td>&lt; 3</td><td>&lt; 0</td><td>Đỉnh bẹt, đuôi mỏng: ít biến cố cực đoan</td></tr>
</tbody></table>
<p>Lợi suất tài sản tài chính thực tế thường <b>leptokurtic</b> (và hay lệch trái): khủng hoảng 1987, 2008, 2020 xảy ra thường xuyên hơn nhiều so với dự báo của phân phối chuẩn. Nếu mô hình rủi ro giả định normal, nó sẽ <b>đánh giá thấp</b> xác suất thua lỗ lớn.</p>
<div class="example"><div class="ex-h">Ví dụ 8.1</div>
<p>Quỹ ở ví dụ 7.1 có kurtosis xấp xỉ 4,58. Diễn giải?</p>
<details><summary>Xem lời giải</summary><p>Excess kurtosis = 4,58 - 3 = <b>1,58 &gt; 0</b> → leptokurtic. Kết hợp với skewness -1,80: quỹ này có đuôi trái dày, tức xác suất thua lỗ nặng cao hơn nhiều so với những gì độ lệch chuẩn 7,63% gợi ý.</p></details></div>
<p class="warn"><b>Bẫy:</b> đề cho "kurtosis = 2" hay "excess kurtosis = 2"? Kurtosis 2 là platykurtic (đuôi mỏng); excess kurtosis 2 là leptokurtic (đuôi dày). Đọc thật kỹ chữ "excess".</p>`,
    },
    {
      title: '9. Covariance và correlation',
      minutes: 15,
      html: `
<p>Hai thước đo mức độ hai biến <b>cùng di chuyển</b>:</p>
<div class="formula">s<sub>XY</sub> = ${frac('Σ (X<sub>i</sub> - X̄)(Y<sub>i</sub> - Ȳ)', 'n - 1')} &nbsp;&nbsp;&nbsp;&nbsp; r<sub>XY</sub> = ${frac('s<sub>XY</sub>', 's<sub>X</sub> × s<sub>Y</sub>')}</div>
<ul>
<li>${t('cov', 'Covariance')} dương: hai biến thường cùng ở trên (hoặc cùng ở dưới) trung bình. Âm: một biến trên thì biến kia dưới. Đơn vị là %<sup>2</sup>, độ lớn phụ thuộc thang đo nên <b>khó diễn giải độ mạnh</b>.</li>
<li>${t('corr', 'Correlation')} chuẩn hóa covariance về khoảng <b>[-1; +1]</b>, không có đơn vị: +1 là tuyến tính đồng biến hoàn hảo, -1 là nghịch biến hoàn hảo, 0 là không có quan hệ <b>tuyến tính</b>.</li>
</ul>

<div class="example"><div class="ex-h">Ví dụ 9.1</div>
<p>Lợi suất 5 năm (%) của cổ phiếu X: 10, 5, -2, 14, 8 và cổ phiếu Y: 6, 3, 1, 9, 6. Tính sample covariance và correlation.</p>
<details><summary>Xem lời giải</summary>
<p>X̄ = 35/5 = 7%, Ȳ = 25/5 = 5%.</p>
<table class="plain"><thead><tr><th>X - X̄</th><th>Y - Ȳ</th><th>Tích</th><th>(X - X̄)<sup>2</sup></th><th>(Y - Ȳ)<sup>2</sup></th></tr></thead><tbody>
<tr><td>3</td><td>1</td><td>3</td><td>9</td><td>1</td></tr>
<tr><td>-2</td><td>-2</td><td>4</td><td>4</td><td>4</td></tr>
<tr><td>-9</td><td>-4</td><td>36</td><td>81</td><td>16</td></tr>
<tr><td>7</td><td>4</td><td>28</td><td>49</td><td>16</td></tr>
<tr><td>1</td><td>1</td><td>1</td><td>1</td><td>1</td></tr>
<tr><td><b>Tổng</b></td><td></td><td>72</td><td>144</td><td>38</td></tr>
</tbody></table>
<p>s<sub>XY</sub> = 72 / 4 = <b>18</b> (%<sup>2</sup>). s<sub>X</sub> = √(144/4) = 6%; s<sub>Y</sub> = √(38/4) = 3,08%.<br>
r = 18 / (6 × 3,08) = <b>0,97</b>: quan hệ đồng biến rất mạnh. (Chia cho n = 5 sẽ ra covariance tổng thể 14,4: sai nếu đề hỏi sample.)</p></details></div>

<h4>Giới hạn của correlation</h4>
<ul>
<li><b>Chỉ đo quan hệ tuyến tính:</b> Y = X<sup>2</sup> có quan hệ hoàn hảo nhưng correlation có thể bằng 0.</li>
<li><b>Nhạy với outlier:</b> một điểm cực đoan có thể tạo ra hoặc xóa đi tương quan.</li>
<li>${t('spurious', 'Tương quan giả (spurious correlation)')}: tương quan do ngẫu nhiên, hoặc do cả hai biến cùng chịu tác động của biến thứ ba (ví dụ lạm phát, quy mô nền kinh tế, xu hướng thời gian).</li>
<li><b>Tương quan không phải nhân quả.</b></li>
</ul>
<p class="tip">Correlation là nguyên liệu chính của đa dạng hóa ở QM-08: hai tài sản có r càng thấp thì kết hợp lại càng giảm được rủi ro danh mục.</p>`,
    },
    {
      title: '10. Tóm tắt và bẫy thường gặp',
      minutes: 6,
      html: `
<table class="plain"><thead><tr><th>Tình huống</th><th>Nhớ</th></tr></thead><tbody>
<tr><td>Có outlier</td><td>Median, trimmed mean, winsorized mean ít bị ảnh hưởng hơn mean. Trimmed giảm n; winsorized giữ n</td></tr>
<tr><td>Vị trí percentile</td><td>L<sub>y</sub> = (n + 1) × y/100 trên dữ liệu <b>đã sắp xếp</b>, rồi nội suy</td></tr>
<tr><td>Sample hay population</td><td>Lợi suất lịch sử là mẫu: chia n - 1. BA II Plus: đọc <b>Sx</b>, không phải σx</td></tr>
<tr><td>MAD</td><td>Chia cho n; luôn ≤ độ lệch chuẩn</td></tr>
<tr><td>Target downside deviation</td><td>Chỉ cộng quan sát ≤ B, độ lệch so với B, nhưng chia cho <b>n - 1 của cả mẫu</b></td></tr>
<tr><td>CV</td><td>s / X̄; càng thấp càng tốt (rủi ro trên mỗi đơn vị lợi suất)</td></tr>
<tr><td>Skewness dương</td><td>Đuôi phải; mode &lt; median &lt; mean</td></tr>
<tr><td>Skewness âm</td><td>Đuôi trái; mean &lt; median &lt; mode; nhiều lãi nhỏ, ít lỗ lớn</td></tr>
<tr><td>Kurtosis</td><td>Normal = 3. Excess &gt; 0 là leptokurtic, đuôi dày, nhiều biến cố cực đoan</td></tr>
<tr><td>Covariance và correlation</td><td>r = s<sub>XY</sub> / (s<sub>X</sub>s<sub>Y</sub>) trong [-1; 1]; chỉ đo quan hệ tuyến tính; không phải nhân quả</td></tr>
</tbody></table>
<p>Tiếp theo: tab <b>Luyện tập</b> (10 câu), rồi làm các câu Topic 3 trong slide Quant Review.</p>`,
    },
  ];

  const glossary = {
    mean: ['Arithmetic mean', 'Trung bình cộng', 'Tổng các quan sát chia cho số quan sát; bị ảnh hưởng mạnh bởi outlier.'],
    median: ['Median', 'Trung vị', 'Giá trị đứng giữa của dữ liệu đã sắp xếp; ít bị ảnh hưởng bởi outlier.'],
    mode: ['Mode', 'Yếu vị', 'Giá trị xuất hiện nhiều nhất trong dữ liệu.'],
    outlier: ['Outlier', 'Giá trị ngoại lai', 'Quan sát khác biệt rất xa so với phần lớn dữ liệu.'],
    trimmed: ['Trimmed mean', 'Trung bình cắt bỏ', 'Trung bình sau khi bỏ hẳn một tỷ lệ quan sát nhỏ nhất và lớn nhất; số quan sát giảm.'],
    winsorized: ['Winsorized mean', 'Trung bình thay thế (winsorized)', 'Thay các quan sát cực trị bằng giá trị gần nhất còn giữ lại rồi tính trung bình; giữ nguyên n.'],
    quantile: ['Quantile', 'Phân vị', 'Giá trị chia dữ liệu đã sắp xếp thành các phần bằng nhau.'],
    quartile: ['Quartile', 'Tứ phân vị', 'Ba giá trị chia dữ liệu thành 4 phần bằng nhau: Q1, Q2 (median), Q3.'],
    interp: ['Linear interpolation', 'Nội suy tuyến tính', 'Ước lượng giá trị nằm giữa hai quan sát kề nhau theo tỷ lệ phần lẻ của vị trí.'],
    iqr: ['Interquartile range (IQR)', 'Khoảng tứ phân vị', 'Q3 - Q1; độ rộng của 50% quan sát ở giữa.'],
    boxplot: ['Box-and-whisker plot', 'Biểu đồ hộp', 'Biểu đồ thể hiện Q1, median, Q3 và các giá trị ở hai đầu của dữ liệu.'],
    dispersion: ['Dispersion', 'Độ phân tán', 'Mức dao động của dữ liệu quanh giá trị trung tâm; trong đầu tư là thước đo rủi ro.'],
    range: ['Range', 'Khoảng biến thiên', 'Giá trị lớn nhất trừ giá trị nhỏ nhất.'],
    mad: ['Mean absolute deviation (MAD)', 'Độ lệch tuyệt đối trung bình', 'Trung bình của |Xi - X̄|; chia cho n.'],
    svar: ['Sample variance', 'Phương sai mẫu', 'Tổng bình phương độ lệch so với trung bình mẫu chia cho n - 1.'],
    ssd: ['Sample standard deviation', 'Độ lệch chuẩn mẫu', 'Căn bậc hai của phương sai mẫu; cùng đơn vị với dữ liệu.'],
    population: ['Population', 'Tổng thể', 'Toàn bộ các phần tử cần nghiên cứu; phương sai tổng thể chia cho N.'],
    sample: ['Sample', 'Mẫu', 'Tập con lấy từ tổng thể; phương sai mẫu chia cho n - 1.'],
    df: ['Degrees of freedom', 'Bậc tự do', 'Số quan sát được tự do thay đổi sau khi đã ước lượng tham số; với phương sai mẫu là n - 1.'],
    tdd: ['Target downside deviation', 'Độ lệch phía dưới mục tiêu', 'Căn của tổng bình phương độ lệch so với mục tiêu B (chỉ các quan sát ≤ B), chia cho n - 1.'],
    semidev: ['Semi-deviation', 'Bán độ lệch chuẩn', 'Downside deviation với mục tiêu là trung bình mẫu; chỉ đo rủi ro phía dưới trung bình.'],
    cv: ['Coefficient of variation (CV)', 'Hệ số biến thiên', 's / X̄; rủi ro trên mỗi đơn vị lợi suất, càng thấp càng tốt.'],
    skew: ['Skewness', 'Độ lệch (bất đối xứng)', 'Đo mức không đối xứng của phân phối; normal có skewness = 0.'],
    posskew: ['Positive (right) skew', 'Lệch phải', 'Đuôi dài bên phải; mean > median > mode.'],
    negskew: ['Negative (left) skew', 'Lệch trái', 'Đuôi dài bên trái; mean < median < mode; rủi ro lỗ lớn hiếm nhưng nặng.'],
    kurt: ['Kurtosis', 'Độ nhọn', 'Đo độ dày của đuôi phân phối so với normal; normal có kurtosis = 3.'],
    excess: ['Excess kurtosis', 'Độ nhọn vượt chuẩn', 'Kurtosis - 3; dương là đuôi dày hơn normal.'],
    lepto: ['Leptokurtic', 'Đuôi dày (nhọn)', 'Kurtosis > 3: đỉnh nhọn, đuôi dày, nhiều biến cố cực đoan hơn normal.'],
    platy: ['Platykurtic', 'Đuôi mỏng (bẹt)', 'Kurtosis < 3: đỉnh bẹt, đuôi mỏng hơn normal.'],
    cov: ['Covariance', 'Hiệp phương sai', 'Đo mức hai biến cùng di chuyển; dấu cho biết chiều, độ lớn khó diễn giải.'],
    corr: ['Correlation coefficient', 'Hệ số tương quan', 'Covariance chia cho tích hai độ lệch chuẩn; nằm trong [-1; 1], đo quan hệ tuyến tính.'],
    spurious: ['Spurious correlation', 'Tương quan giả', 'Tương quan xuất hiện do ngẫu nhiên hoặc do biến thứ ba, không phản ánh quan hệ thật.'],
  };

  const practice = [
    { q: 'Lợi suất 7 năm của một quỹ (%): 4, 10, -3, 7, 10, 2, 15. Median và mode lần lượt là:', choices: ['7% và 10%', '6,43% và 10%', '10% và 7%'], answer: 0, explain: 'Sắp xếp: -3, 2, 4, 7, 10, 10, 15. Median là quan sát thứ 4 = 7%; mode = 10% (xuất hiện 2 lần). Đáp án B nhầm mean (45/7 = 6,43%) với median; đáp án C đảo ngược hai khái niệm.' },
    { q: '12 quan sát lợi suất đã sắp xếp (%): 5, 8, 9, 11, 12, 14, 15, 17, 18, 21, 24, 30. Quartile thứ ba (Q3) gần nhất với:', choices: ['18,00%', '20,25%', '21,00%'], answer: 1, explain: 'L = (12 + 1) x 0,75 = 9,75 → giữa quan sát thứ 9 (18) và thứ 10 (21): 18 + 0,75 x 3 = 20,25%. Đáp án A dùng n x 0,75 = 9; đáp án C làm tròn vị trí lên 10 mà không nội suy.' },
    { q: 'Lợi suất 5 năm (%): 14, -6, 9, 22, 1. Độ lệch chuẩn mẫu gần nhất với:', choices: ['9,78%', '119,50%', '10,93%'], answer: 2, explain: 'Mean = 8; tổng bình phương độ lệch = 478; s² = 478/4 = 119,5; s = 10,93%. Đáp án A chia cho n = 5 (độ lệch chuẩn tổng thể); đáp án B là phương sai, chưa lấy căn.' },
    { q: 'Lợi suất 5 năm (%): 6, -2, 10, 4, 7. Mean absolute deviation (MAD) gần nhất với:', choices: ['3,20%', '4,00%', '4,47%'], answer: 0, explain: 'Mean = 5; các |độ lệch| = 1, 7, 5, 1, 2, tổng 16; MAD = 16/5 = 3,20%. Đáp án B chia cho n - 1 (MAD chia cho n); đáp án C là độ lệch chuẩn mẫu.' },
    { q: 'Lợi suất 6 năm (%): 8, -4, 11, 2, -7, 6. Target downside deviation với mục tiêu 0% gần nhất với:', choices: ['5,70%', '3,29%', '3,61%'], answer: 2, explain: 'Chỉ -4 và -7 ≤ 0: 16 + 49 = 65. s = √(65/(6 - 1)) = 3,61%. Đáp án A chia cho 2 là số quan sát dưới mục tiêu (√32,5 = 5,70); đáp án B chia cho n = 6 thay vì n - 1.' },
    { q: 'Ba danh mục: X (lợi suất bình quân 10%, độ lệch chuẩn 16%), Y (8%, 12%), Z (6%, 10%). Dựa trên hệ số biến thiên, danh mục có rủi ro trên mỗi đơn vị lợi suất thấp nhất là:', choices: ['X', 'Y', 'Z'], answer: 1, explain: 'CV: X = 1,60; Y = 1,50; Z = 1,67. Y thấp nhất. Z có độ lệch chuẩn nhỏ nhất nhưng CV cao nhất; X có lợi suất cao nhất nhưng không hiệu quả nhất.' },
    { q: 'Một danh mục cổ phiếu khởi nghiệp có nhiều năm lỗ nhẹ và vài năm lãi rất lớn. Phân phối lợi suất (một đỉnh) của danh mục MOST likely có:', choices: ['Skewness dương và mean > median', 'Skewness âm và mean < median', 'Skewness dương và mean < mode'], answer: 0, explain: 'Vài năm lãi rất lớn tạo đuôi phải dài → lệch phải, mode < median < mean. Đáp án B mô tả lệch trái (nhiều lãi nhỏ, ít lỗ lớn). Đáp án C sai thứ tự: lệch phải thì mean lớn nhất.' },
    { q: 'Phân phối lợi suất của một quỹ phòng hộ có excess kurtosis = 2,1. So với phân phối chuẩn, phân phối này:', choices: ['là platykurtic, ít biến cố cực đoan hơn vì 2,1 < 3', 'có cùng xác suất biến cố cực đoan vì skewness bằng 0', 'là leptokurtic, xác suất biến cố cực đoan cao hơn'], answer: 2, explain: 'Excess kurtosis > 0 nghĩa là kurtosis = 5,1 > 3: đuôi dày, leptokurtic. Đáp án A so sánh excess kurtosis với 3 (nhầm với kurtosis). Đáp án B: kurtosis không liên quan đến skewness, và đề không cho skewness.' },
    { q: 'Covariance giữa lợi suất hai tài sản là -45 (%²); độ lệch chuẩn lần lượt là 15% và 10%. Hệ số tương quan là:', choices: ['-0,002', '-0,30', '-3,00'], answer: 1, explain: 'r = -45 / (15 x 10) = -0,30. Đáp án A chia cho tích hai phương sai (225 x 100); đáp án C chỉ chia cho 15, và mọi hệ số tương quan phải nằm trong [-1; 1].' },
    { q: 'Lợi suất 4 năm (%) của X: 5, -3, 9, 1 và của Y: 2, -4, 6, 0. Sample covariance gần nhất với:', choices: ['16,00', '0,99', '21,33'], answer: 2, explain: 'X̄ = 3, Ȳ = 1. Tích độ lệch: 2 x 1 = 2; (-6)(-5) = 30; 6 x 5 = 30; (-2)(-1) = 2; tổng 64. s_XY = 64/3 = 21,33. Đáp án A chia cho n = 4 (tổng thể); đáp án B là hệ số tương quan.' },
  ];

  // Widget: thống kê mô tả cho chuỗi lợi suất do người học nhập.
  const widgets = {
    returnStats(el) {
      el.innerHTML = `
        <div class="w-row"><label>Lợi suất (%), cách nhau bởi dấu cách hoặc dấu chấm phẩy<input type="text" value="3 4 2 5 3 4 3 -18" data-i="x"></label>
        <label>Mục tiêu B cho downside deviation (%)<input type="number" step="0.5" value="0" data-i="b"></label>
        <label>Gợi ý thử<span class="w-note">12 -5 8 20 -3 10 (ví dụ 4.1); thêm một số rất lớn để xem mean và skewness thay đổi.</span></label></div>
        <div class="w-out"><div class="w-price" data-o="head"></div><div data-o="tbl"></div><div class="w-note" data-o="note"></div></div>`;
      const q = s => el.querySelector(s);
      const f = (v, d = 2) => (isFinite(v) ? v.toFixed(d).replace('.', ',') : '-');
      const upd = () => {
        const xs = q('[data-i="x"]').value.split(/[\s;]+/).map(s => s.replace(',', '.')).filter(s => s !== '').map(Number).filter(v => isFinite(v));
        const B = +q('[data-i="b"]').value || 0;
        const n = xs.length;
        if (n < 3) { q('[data-o="head"]').textContent = 'Nhập ít nhất 3 số'; q('[data-o="tbl"]').innerHTML = ''; q('[data-o="note"]').textContent = ''; return; }
        const s = [...xs].sort((a, b) => a - b);
        const m = xs.reduce((a, b) => a + b, 0) / n;
        const med = n % 2 ? s[(n - 1) / 2] : (s[n / 2 - 1] + s[n / 2]) / 2;
        const ss = xs.reduce((a, x) => a + (x - m) ** 2, 0);
        const sd = Math.sqrt(ss / (n - 1)), pop = Math.sqrt(ss / n);
        const mad = xs.reduce((a, x) => a + Math.abs(x - m), 0) / n;
        const tdd = Math.sqrt(xs.filter(x => x <= B).reduce((a, x) => a + (x - B) ** 2, 0) / (n - 1));
        const sk = sd > 0 ? xs.reduce((a, x) => a + (x - m) ** 3, 0) / n / sd ** 3 : 0;
        const ku = sd > 0 ? xs.reduce((a, x) => a + (x - m) ** 4, 0) / n / sd ** 4 : 0;
        q('[data-o="head"]').textContent = `n = ${n} · Mean = ${f(m)}% · Median = ${f(med)}% · s = ${f(sd)}%`;
        q('[data-o="tbl"]').innerHTML = `<table class="plain"><tbody>
          <tr><td>Range</td><td>${f(s[n - 1] - s[0])}%</td><td>MAD</td><td>${f(mad)}%</td></tr>
          <tr><td>s (mẫu, n - 1)</td><td>${f(sd)}%</td><td>σ (tổng thể, n)</td><td>${f(pop)}%</td></tr>
          <tr><td>Downside deviation (B = ${f(B, 1)}%)</td><td>${f(tdd)}%</td><td>CV = s / mean</td><td>${Math.abs(m) < 1e-9 ? '-' : f(sd / m)}</td></tr>
          <tr><td>Skewness (xấp xỉ)</td><td>${f(sk)}</td><td>Excess kurtosis (xấp xỉ)</td><td>${f(ku - 3)}</td></tr></tbody></table>`;
        const sTxt = Math.abs(sk) < 0.25 ? 'gần đối xứng' : sk > 0 ? 'lệch phải: mean > median, đuôi lãi lớn' : 'lệch trái: mean < median, đuôi lỗ lớn';
        const kTxt = ku - 3 > 0 ? 'đuôi dày hơn normal (leptokurtic)' : 'đuôi mỏng hơn normal (platykurtic)';
        q('[data-o="note"]').textContent = `Phân phối ${sTxt}; ${kTxt}. Với mẫu nhỏ, skewness và kurtosis chỉ mang tính minh họa.`;
      };
      el.addEventListener('input', upd);
      upd();
    },
  };

  window.LESSONS['QM-05'] = {
    moduleId: 'QM-05',
    calculator: 'BA II Plus',
    warmup: [
      'Ôn QM-04: trái phiếu coupon 4%, lợi suất thị trường 5% thì giao dịch premium hay discount?',
      'Ôn QM-01: vì sao geometric mean của lợi suất nhiều kỳ luôn nhỏ hơn hoặc bằng arithmetic mean?',
      'Đoán trước: hai quỹ cùng lợi suất bình quân 8%/năm. Bạn cần thêm thông tin gì để chọn quỹ ít rủi ro hơn?',
    ],
    sections,
    glossary,
    practice,
    widgets,
    slides: [],
    wrapup: [
      'Viết 4 nhóm thước đo (vị trí, phân tán, hình dạng, quan hệ) và một ví dụ cho mỗi nhóm.',
      'Target downside deviation khác độ lệch chuẩn ở 2 điểm nào? Mẫu số là gì?',
      'Một quỹ có skewness âm và excess kurtosis dương: giải thích bằng lời cho một nhà đầu tư không học thống kê.',
    ],
  };
}());
