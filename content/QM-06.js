// Bài giảng QM-06 - Statistical Distributions for Financial Asset Prices and Returns (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
(function () {
  const { term: t, frac, keys, pages } = window.CFAH;

  const sections = [
    {
      title: '1. Bức tranh lớn',
      minutes: 5,
      html: `
<p>QM-05 mô tả lợi suất <b>đã xảy ra</b> (dữ liệu lịch sử, mẫu). Module này nhìn về <b>tương lai</b>: lợi suất năm tới là một ${t('rv', 'biến ngẫu nhiên')}, có thể nhận nhiều giá trị với các xác suất khác nhau. Câu hỏi là: kỳ vọng bao nhiêu, rủi ro bao nhiêu, và thay đổi thế nào khi có thông tin mới?</p>
<div class="key">Bốn công cụ của module:<br>
1. <b>Kỳ vọng, phương sai, hiệp phương sai không điều kiện</b> từ bảng kịch bản xác suất.<br>
2. <b>Các phân phối xác suất quen thuộc</b> (normal, lognormal, binomial, Student t, chi-square, F) và các moment của chúng.<br>
3. <b>Kỳ vọng và phương sai có điều kiện</b> bằng cây xác suất (probability tree).<br>
4. <b>Cập nhật Bayes</b>: điều chỉnh niềm tin khi có thông tin mới.</div>
<table class="plain"><thead><tr><th>LOS 2027</th><th>Phần trong bài</th></tr></thead><tbody>
<tr><td>Unconditional expected value, variance, covariance</td><td>Phần 2, 3</td></tr>
<tr><td>Principal moments của các phân phối chính</td><td>Phần 6, 7</td></tr>
<tr><td>Conditional expectations, variances, covariances</td><td>Phần 4, 5</td></tr>
<tr><td>Bayesian updating cho bài toán đầu tư</td><td>Phần 8, 9</td></tr>
</tbody></table>
<p class="tip"><b>Khác biệt quan trọng với QM-05:</b> ở đây ta có <b>xác suất</b> cho từng kịch bản, nên trung bình và phương sai được <b>gia quyền theo xác suất</b>, không chia cho n hay n - 1.</p>`,
    },
    {
      title: '2. Kỳ vọng và phương sai không điều kiện',
      minutes: 14,
      html: `
<p>Khi biết các kịch bản có thể xảy ra và xác suất của chúng (tổng xác suất = 1):</p>
<div class="formula">E(X) = Σ P(X<sub>i</sub>) × X<sub>i</sub> &nbsp;&nbsp;&nbsp;&nbsp; σ<sup>2</sup>(X) = Σ P(X<sub>i</sub>) × [X<sub>i</sub> - E(X)]<sup>2</sup></div>
<p>${t('ev', 'Giá trị kỳ vọng (expected value)')} là trung bình gia quyền theo xác suất. ${t('var', 'Phương sai')} là kỳ vọng của bình phương độ lệch. Gọi là "không điều kiện" (${t('uncond', 'unconditional')}) vì ta chưa biết kịch bản nào sẽ xảy ra.</p>

<div class="example"><div class="ex-h">Ví dụ 2.1 - Cổ phiếu A</div>
<table class="plain"><thead><tr><th>Kịch bản</th><th>Xác suất</th><th>Lợi suất A</th></tr></thead><tbody>
<tr><td>Tăng trưởng</td><td>25%</td><td>20%</td></tr><tr><td>Bình thường</td><td>50%</td><td>10%</td></tr><tr><td>Suy thoái</td><td>25%</td><td>-8%</td></tr></tbody></table>
<details><summary>Xem lời giải</summary>
<p>E(R<sub>A</sub>) = 0,25 × 20 + 0,50 × 10 + 0,25 × (-8) = 5 + 5 - 2 = <b>8%</b>.<br>
Độ lệch: 12, 2, -16. σ<sup>2</sup> = 0,25 × 144 + 0,50 × 4 + 0,25 × 256 = 36 + 2 + 64 = <b>102</b> (%<sup>2</sup>).<br>
σ = √102 = <b>10,10%</b>.</p>
<p>Nếu tính trung bình cộng đơn giản (20 + 10 - 8)/3 = 7,33% là sai, vì kịch bản "bình thường" có xác suất gấp đôi.</p></details></div>

<h4>BA II Plus: dùng xác suất làm tần suất</h4>
<p>Nhập xác suất × 100 vào cột Y (tần suất), rồi đọc <b>σx</b> (không phải Sx):</p>
${keys([
  ['Mở DATA, xóa dữ liệu cũ', '[2ND] [7] [2ND] [CE/C]', 'X01 = 0'],
  ['Kịch bản 1: lợi suất, tần suất 25', '20 [ENTER] [↓] 25 [ENTER] [↓]', 'X02'],
  ['Kịch bản 2', '10 [ENTER] [↓] 50 [ENTER] [↓]', 'X03'],
  ['Kịch bản 3', '8 [+/-] [ENTER] [↓] 25 [ENTER]', 'Y03 = 25'],
  ['STAT, chọn 1-V', '[2ND] [8] rồi [2ND] [ENTER] đến khi thấy 1-V', '1-V'],
  ['Đọc kết quả', '[↓] [↓]', 'n = 100, x̄ = 8.0000'],
  ['Bỏ qua Sx, đọc σx', '[↓] [↓]', 'σx = 10.0995'],
])}
<p class="warn"><b>Bẫy:</b> với bảng xác suất, phương sai đã gia quyền theo xác suất nên <b>không</b> có chuyện chia n - 1. Trên máy, Sx (chia cho 99) cho 10,15: sai. Phải đọc σx.</p>`,
    },
    {
      title: '3. Hiệp phương sai và tương quan từ bảng kịch bản',
      minutes: 13,
      html: `
<div class="formula">Cov(R<sub>A</sub>, R<sub>B</sub>) = Σ P(s) × [R<sub>A,s</sub> - E(R<sub>A</sub>)] × [R<sub>B,s</sub> - E(R<sub>B</sub>)] &nbsp;&nbsp;&nbsp; ρ = ${frac('Cov(R<sub>A</sub>, R<sub>B</sub>)', 'σ<sub>A</sub> × σ<sub>B</sub>')}</div>
<p>Cùng ý tưởng với ${t('cov', 'covariance')} ở QM-05, chỉ khác: mỗi tích độ lệch được nhân với xác suất của kịch bản thay vì chia cho n - 1.</p>
<div class="example"><div class="ex-h">Ví dụ 3.1 - Cổ phiếu A và trái phiếu B</div>
<table class="plain"><thead><tr><th>Kịch bản</th><th>P</th><th>R<sub>A</sub></th><th>R<sub>B</sub></th></tr></thead><tbody>
<tr><td>Tăng trưởng</td><td>25%</td><td>20%</td><td>2%</td></tr><tr><td>Bình thường</td><td>50%</td><td>10%</td><td>6%</td></tr><tr><td>Suy thoái</td><td>25%</td><td>-8%</td><td>7%</td></tr></tbody></table>
<details><summary>Xem lời giải</summary>
<p>E(R<sub>B</sub>) = 0,5 + 3 + 1,75 = 5,25%. σ<sup>2</sup><sub>B</sub> = 0,25 × 3,25<sup>2</sup> + 0,5 × 0,75<sup>2</sup> + 0,25 × 1,75<sup>2</sup> = 3,6875; σ<sub>B</sub> = 1,92%.</p>
<table class="plain"><thead><tr><th>P</th><th>R<sub>A</sub> - 8</th><th>R<sub>B</sub> - 5,25</th><th>P × tích</th></tr></thead><tbody>
<tr><td>0,25</td><td>12</td><td>-3,25</td><td>-9,75</td></tr><tr><td>0,50</td><td>2</td><td>0,75</td><td>0,75</td></tr><tr><td>0,25</td><td>-16</td><td>1,75</td><td>-7,00</td></tr>
<tr><td colspan="3"><b>Cov</b></td><td><b>-16,00</b></td></tr></tbody></table>
<p>ρ = -16 / (10,10 × 1,92) = <b>-0,82</b>. Trái phiếu B làm tốt khi cổ phiếu A làm kém: một cặp đa dạng hóa tốt.</p></details></div>
<p class="tip">Bảng ${t('joint', 'xác suất đồng thời (joint probability)')} là dạng tổng quát hơn: mỗi ô là P(R<sub>A</sub> = a và R<sub>B</sub> = b). Công thức không đổi: cộng P(ô) × (độ lệch A) × (độ lệch B) trên mọi ô có xác suất khác 0.</p>`,
    },
    {
      title: '4. Xác suất có điều kiện, cây xác suất và kỳ vọng có điều kiện',
      minutes: 16,
      html: `
<h4>Ba quy tắc nền tảng</h4>
<table class="plain"><thead><tr><th>Quy tắc</th><th>Công thức</th></tr></thead><tbody>
<tr><td>${t('condp', 'Xác suất có điều kiện')}</td><td>P(A | B) = ${frac('P(AB)', 'P(B)')}</td></tr>
<tr><td>Quy tắc nhân (joint probability)</td><td>P(AB) = P(A | B) × P(B)</td></tr>
<tr><td>${t('totalp', 'Quy tắc xác suất toàn phần')}</td><td>P(A) = Σ P(A | S<sub>i</sub>) × P(S<sub>i</sub>), với các S<sub>i</sub> loại trừ nhau và bao phủ mọi khả năng</td></tr>
</tbody></table>
<p>Áp dụng cho giá trị kỳ vọng, ta có ${t('totalev', 'quy tắc kỳ vọng toàn phần')}:</p>
<div class="formula">E(X) = Σ E(X | S<sub>i</sub>) × P(S<sub>i</sub>)</div>
<p>E(X | S) là ${t('condev', 'kỳ vọng có điều kiện')}: kỳ vọng của X <b>khi đã biết</b> S xảy ra. Công cụ trực quan nhất là ${t('tree', 'cây xác suất')}: nhánh đầu là kịch bản, nhánh sau là kết quả có điều kiện.</p>

<div class="example"><div class="ex-h">Ví dụ 4.1 - EPS năm tới</div>
<p>Kinh tế tốt (60%): EPS = 2,40 với xác suất 70%, hoặc 2,00 với xác suất 30%. Kinh tế xấu (40%): EPS = 1,60 với xác suất 40%, hoặc 1,20 với xác suất 60%. Tính EPS kỳ vọng.</p>
<details><summary>Xem lời giải</summary>
<p><b>Bước 1 - kỳ vọng có điều kiện:</b><br>
E(EPS | tốt) = 0,7 × 2,40 + 0,3 × 2,00 = <b>2,28</b><br>
E(EPS | xấu) = 0,4 × 1,60 + 0,6 × 1,20 = <b>1,36</b></p>
<p><b>Bước 2 - kỳ vọng không điều kiện:</b> E(EPS) = 0,6 × 2,28 + 0,4 × 1,36 = <b>1,912</b>.</p>
<p>Kiểm tra bằng xác suất đồng thời của 4 nhánh cuối: 0,42; 0,18; 0,16; 0,24 (tổng = 1). 0,42 × 2,40 + 0,18 × 2,00 + 0,16 × 1,60 + 0,24 × 1,20 = 1,912.</p></details></div>
<p class="warn"><b>Bẫy:</b> lấy trung bình cộng của 4 kết quả cuối (1,80) hoặc quên nhân xác suất nhánh đầu. Mỗi kết quả cuối có xác suất = <b>tích các xác suất trên đường đi</b> đến nó.</p>
<p class="tip">Bài toán "probability of positive returns" trong Quant Review chính là quy tắc xác suất toàn phần: P(lợi suất dương) = Σ P(dương | kịch bản) × P(kịch bản).</p>`,
    },
    {
      title: '5. Phương sai và hiệp phương sai có điều kiện',
      minutes: 10,
      html: `
<p>${t('condvar', 'Phương sai có điều kiện')} đo độ phân tán <b>bên trong</b> một kịch bản, dùng xác suất có điều kiện của kịch bản đó:</p>
<div class="formula">σ<sup>2</sup>(X | S) = Σ P(X<sub>i</sub> | S) × [X<sub>i</sub> - E(X | S)]<sup>2</sup></div>
<div class="example"><div class="ex-h">Ví dụ 5.1 - Tiếp ví dụ 4.1</div>
<details><summary>Xem lời giải</summary>
<p>σ<sup>2</sup>(EPS | tốt) = 0,7 × (2,40 - 2,28)<sup>2</sup> + 0,3 × (2,00 - 2,28)<sup>2</sup> = 0,0101 + 0,0235 = <b>0,0336</b>; σ = 0,18.<br>
σ<sup>2</sup>(EPS | xấu) = 0,4 × (1,60 - 1,36)<sup>2</sup> + 0,6 × (1,20 - 1,36)<sup>2</sup> = 0,0230 + 0,0154 = <b>0,0384</b>; σ = 0,20.</p>
<p>Phương sai không điều kiện (dùng 4 nhánh cuối, quanh 1,912) = <b>0,2387</b>; σ = 0,49. Lớn hơn nhiều so với từng phương sai có điều kiện.</p></details></div>
<p>Vì sao? Phương sai tổng gồm hai phần:</p>
<div class="formula">σ<sup>2</sup>(X) = E[σ<sup>2</sup>(X | S)] + σ<sup>2</sup>[E(X | S)] &nbsp;&nbsp;→&nbsp;&nbsp; 0,2387 = 0,0355 + 0,2031</div>
<p>Phần lớn rủi ro EPS đến từ việc <b>chưa biết nền kinh tế tốt hay xấu</b> (0,2031), chỉ một phần nhỏ đến từ biến động bên trong mỗi kịch bản. Biết thêm thông tin (kịch bản) thì rủi ro còn lại giảm mạnh: đó là giá trị của thông tin.</p>
<p>${t('condcov', 'Hiệp phương sai có điều kiện')} Cov(X, Y | S) tính tương tự: chỉ dùng các kết quả trong kịch bản S, xác suất có điều kiện và kỳ vọng có điều kiện. Ứng dụng: tương quan giữa cổ phiếu và trái phiếu có thể khác hẳn trong suy thoái so với lúc bình thường; mô hình rủi ro tốt phải xét theo từng trạng thái thị trường.</p>`,
    },
    {
      title: '6. Phân phối chuẩn và lognormal',
      minutes: 13,
      html: `
<h4>Phân phối chuẩn (normal)</h4>
<p>${t('normal', 'Phân phối chuẩn')} được xác định hoàn toàn bởi hai tham số: mean μ và variance σ<sup>2</sup>. Đối xứng nên skewness = 0, kurtosis = 3 (excess = 0). Mean = median = mode. Tổ hợp tuyến tính của các biến chuẩn cũng có phân phối chuẩn, nên rất tiện cho danh mục.</p>
<table class="plain"><thead><tr><th>Khoảng</th><th>Xác suất xấp xỉ</th></tr></thead><tbody>
<tr><td>μ ± 1σ</td><td>68%</td></tr><tr><td>μ ± 1,65σ</td><td>90%</td></tr><tr><td>μ ± 1,96σ</td><td>95%</td></tr><tr><td>μ ± 2,58σ</td><td>99%</td></tr></tbody></table>
<p>${t('zscore', 'Chuẩn hóa')}: z = (X - μ) / σ đưa mọi phân phối chuẩn về ${t('stdnormal', 'phân phối chuẩn tắc')} (mean 0, độ lệch chuẩn 1) để tra bảng.</p>
<div class="example"><div class="ex-h">Ví dụ 6.1</div>
<p>Lợi suất năm của quỹ có phân phối chuẩn, μ = 8%, σ = 15%. Tìm khoảng 95% và xác suất lỗ.</p>
<details><summary>Xem lời giải</summary>
<p>Khoảng 95%: 8 ± 1,96 × 15 = <b>-21,4% đến 37,4%</b>.<br>
Lỗ nghĩa là R &lt; 0: z = (0 - 8) / 15 = -0,53. Tra bảng N(-0,53) ≈ <b>29,7%</b>. Gần 3 năm trong 10 năm quỹ sẽ lỗ.</p></details></div>

<h4>Phân phối lognormal</h4>
<p>Nếu ln(X) có phân phối chuẩn thì X có ${t('lognormal', 'phân phối lognormal')}. Trong tài chính: nếu ${t('ccret', 'lợi suất ghép lãi liên tục')} r = ln(P<sub>1</sub>/P<sub>0</sub>) có phân phối chuẩn thì <b>giá</b> P<sub>1</sub> = P<sub>0</sub> × e<sup>r</sup> có phân phối lognormal.</p>
<ul>
<li><b>Bị chặn dưới bởi 0</b>: giá cổ phiếu không thể âm (normal thì có thể). Đây là lý do lognormal hợp với giá.</li>
<li><b>Lệch phải</b> (positive skew): mean &gt; median.</li>
<li>Moments (với μ, σ là tham số của ln X): E(X) = e<sup>μ + σ²/2</sup>, median = e<sup>μ</sup>.</li>
<li>Lợi suất liên tục <b>cộng được theo thời gian</b>: r<sub>0,T</sub> = r<sub>1</sub> + ... + r<sub>T</sub>. Nếu các r<sub>t</sub> độc lập, cùng phân phối thì mean T × μ, phương sai T × σ<sup>2</sup> (độ lệch chuẩn tăng theo √T).</li>
</ul>
<div class="example"><div class="ex-h">Ví dụ 6.2</div>
<p>Giá hôm nay 100. Lợi suất liên tục 1 năm có phân phối chuẩn, μ = 8%, σ = 20%. Giá kỳ vọng và giá trung vị sau 1 năm?</p>
<details><summary>Xem lời giải</summary><p>E(P<sub>1</sub>) = 100 × e<sup>0,08 + 0,02</sup> = <b>110,52</b>. Median = 100 × e<sup>0,08</sup> = <b>108,33</b>. Mean &gt; median: dấu hiệu lệch phải.</p></details></div>`,
    },
    {
      title: '7. Các phân phối khác: binomial, uniform, Student t, chi-square, F',
      minutes: 12,
      html: `
<table class="plain"><thead><tr><th>Phân phối</th><th>Dùng khi</th><th>Mean</th><th>Variance</th><th>Hình dạng</th></tr></thead><tbody>
<tr><td>${t('bernoulli', 'Bernoulli')}</td><td>Một phép thử 2 kết quả (vỡ nợ/không, tăng/giảm)</td><td>p</td><td>p(1 - p)</td><td>Rời rạc</td></tr>
<tr><td>${t('binomial', 'Binomial')}</td><td>Số lần "thành công" trong n phép thử độc lập</td><td>np</td><td>np(1 - p)</td><td>Rời rạc; đối xứng khi p = 0,5</td></tr>
<tr><td>${t('uniform', 'Uniform')} liên tục [a; b]</td><td>Mọi giá trị trong khoảng có khả năng như nhau</td><td>(a + b)/2</td><td>(b - a)<sup>2</sup>/12</td><td>Phẳng</td></tr>
<tr><td>${t('tdist', 'Student t')} (df)</td><td>Suy luận về mean khi chưa biết σ, mẫu nhỏ</td><td>0</td><td>df/(df - 2), df &gt; 2</td><td>Đối xứng, đuôi dày hơn normal; df tăng thì tiến về normal</td></tr>
<tr><td>${t('chisq', 'Chi-square')} (k)</td><td>Kiểm định phương sai; tổng bình phương k biến chuẩn tắc</td><td>k</td><td>2k</td><td>Không âm, lệch phải; k tăng thì bớt lệch</td></tr>
<tr><td>${t('fdist', 'F')} (df<sub>1</sub>, df<sub>2</sub>)</td><td>So sánh hai phương sai (tỷ số hai chi-square chia df)</td><td>df<sub>2</sub>/(df<sub>2</sub> - 2)</td><td>(công thức phức tạp, không cần nhớ)</td><td>Không âm, lệch phải</td></tr>
</tbody></table>
<div class="example"><div class="ex-h">Ví dụ 7.1 - Binomial</div>
<p>Một chiến lược giao dịch có xác suất thắng 60% mỗi lệnh, các lệnh độc lập. Với 10 lệnh, tìm số lệnh thắng kỳ vọng, phương sai và xác suất thắng đúng 8 lệnh.</p>
<details><summary>Xem lời giải</summary>
<p>Mean = 10 × 0,6 = <b>6</b>. Variance = 10 × 0,6 × 0,4 = <b>2,4</b>; σ = 1,55.<br>
P(X = 8) = C(10, 8) × 0,6<sup>8</sup> × 0,4<sup>2</sup> = 45 × 0,6<sup>8</sup> × 0,16 = <b>12,09%</b>.</p>
<p class="tip">C(10, 8) = 10! / (8! × 2!) = 45. BA II Plus có hàm nCr (phím phụ, xem nhãn trên máy của bạn) và hàm giai thừa x! để tính nhanh.</p></details></div>
<div class="example"><div class="ex-h">Ví dụ 7.2 - Student t</div>
<p>Phân phối t với df = 10 có phương sai bao nhiêu? So với phân phối chuẩn tắc?</p>
<details><summary>Xem lời giải</summary><p>Variance = 10 / (10 - 2) = <b>1,25</b> &gt; 1: phân tán hơn và đuôi dày hơn chuẩn tắc. Với df = 30 phương sai chỉ còn 1,07: gần như normal.</p></details></div>
<p class="tip">t, chi-square và F sẽ được dùng thật sự ở QM-07 (kiểm định giả thuyết) và QM-10 (hồi quy). Ở module này chỉ cần nắm hình dạng và các moment chính.</p>`,
    },
    {
      title: '8. Công thức Bayes',
      minutes: 15,
      html: `
<p>Từ quy tắc nhân: P(AB) = P(A | B) × P(B) = P(B | A) × P(A). Đặt A là sự kiện ta quan tâm (event) và B là thông tin mới quan sát được (information):</p>
<div class="formula">P(Event | Info) = ${frac('P(Info | Event) × P(Event)', 'P(Info)')}</div>
<table class="plain"><thead><tr><th>Thành phần</th><th>Ý nghĩa</th></tr></thead><tbody>
<tr><td>P(Event)</td><td>${t('prior', 'Xác suất tiên nghiệm (prior)')}: niềm tin trước khi có thông tin</td></tr>
<tr><td>P(Info | Event)</td><td>${t('likelihood', 'Likelihood')}: nếu event đúng thì khả năng thấy thông tin này là bao nhiêu</td></tr>
<tr><td>P(Info)</td><td>Xác suất không điều kiện của thông tin, tính bằng <b>xác suất toàn phần</b></td></tr>
<tr><td>P(Event | Info)</td><td>${t('posterior', 'Xác suất hậu nghiệm (posterior)')}: niềm tin đã cập nhật</td></tr>
</tbody></table>
<div class="example"><div class="ex-h">Ví dụ 8.1 - Nhà quản lý quỹ có tài không?</div>
<p>Bạn ước tính 20% nhà quản lý quỹ thực sự có tài. Người có tài vượt chỉ số chuẩn trong một năm với xác suất 70%; người không có tài vẫn vượt với xác suất 45% (nhờ may mắn). Một nhà quản lý vừa vượt chỉ số năm nay. Xác suất người này có tài?</p>
<details><summary>Xem lời giải</summary>
<p>P(vượt) = 0,2 × 0,7 + 0,8 × 0,45 = 0,14 + 0,36 = <b>0,50</b>.<br>
P(có tài | vượt) = 0,14 / 0,50 = <b>28%</b>.</p>
<p>Chỉ tăng từ 20% lên 28%: một năm vượt chỉ số là bằng chứng yếu, vì người không có tài cũng thường xuyên vượt.</p></details></div>
<h4>Cách nghĩ bằng tần suất tự nhiên</h4>
<p>Hình dung 1.000 nhà quản lý: 200 có tài, 140 trong số đó vượt chỉ số; 800 không có tài, 360 vẫn vượt. Trong 500 người vượt, chỉ 140 có tài: 140/500 = 28%. Giống ví dụ kinh điển về xét nghiệm bệnh hiếm: khi event hiếm, nhóm "báo nhầm" áp đảo nhóm "đúng".</p>
<p class="warn"><b>Bẫy kinh điển:</b> nhầm P(Info | Event) = 70% với P(Event | Info) = 28%. Đề cho P(dấu hiệu | vỡ nợ) nhưng hỏi P(vỡ nợ | dấu hiệu): phải dùng Bayes.</p>`,
    },
    {
      title: '9. Cập nhật Bayes trong bài toán đầu tư',
      minutes: 12,
      html: `
<p>${t('bayesupd', 'Bayesian updating')} là một vòng lặp: prior → quan sát thông tin → posterior → posterior trở thành prior cho lần sau.</p>
<div class="example"><div class="ex-h">Ví dụ 9.1 - Năm thứ hai</div>
<p>Tiếp ví dụ 8.1: nhà quản lý vượt chỉ số thêm năm thứ hai (giả sử kết quả các năm độc lập khi biết họ có tài hay không). Xác suất có tài bây giờ?</p>
<details><summary>Xem lời giải</summary>
<p>Prior mới = 28%. P(vượt) = 0,28 × 0,7 + 0,72 × 0,45 = 0,196 + 0,324 = 0,52.<br>
Posterior = 0,196 / 0,52 = <b>37,69%</b>.</p>
<p>Nếu năm đầu <b>không</b> vượt: P(có tài | không vượt) = 0,2 × 0,3 / (0,2 × 0,3 + 0,8 × 0,55) = 0,06 / 0,50 = <b>12%</b>. Thông tin xấu kéo xác suất xuống.</p></details></div>
<div class="example"><div class="ex-h">Ví dụ 9.2 - Cảnh báo tín dụng</div>
<p>5% doanh nghiệp trong danh mục sẽ vỡ nợ. Mô hình cảnh báo bật lên với 85% doanh nghiệp sẽ vỡ nợ và 15% doanh nghiệp không vỡ nợ. Một doanh nghiệp vừa bị cảnh báo. Xác suất vỡ nợ?</p>
<details><summary>Xem lời giải</summary>
<p>P(cảnh báo) = 0,05 × 0,85 + 0,95 × 0,15 = 0,0425 + 0,1425 = <b>0,185</b>.<br>
P(vỡ nợ | cảnh báo) = 0,0425 / 0,185 = <b>22,97%</b>.</p>
<p>Gấp hơn 4 lần prior 5%, nhưng vẫn còn 77% khả năng doanh nghiệp không vỡ nợ. Quyết định hợp lý: tăng giám sát hoặc giảm tỷ trọng, chưa cần bán tháo.</p></details></div>
<h4>Thử ngay: kéo các thanh xác suất</h4>
<div class="widget" data-widget="bayes"></div>
<p class="tip"><b>Quy trình 4 bước cho mọi bài Bayes:</b> (1) xác định event và info; (2) ghi prior và 2 likelihood (khi event đúng và khi sai); (3) tính P(info) bằng xác suất toàn phần; (4) chia nhánh "event và info" cho P(info).</p>`,
    },
    {
      title: '10. Tóm tắt và bẫy thường gặp',
      minutes: 5,
      html: `
<table class="plain"><thead><tr><th>Tình huống</th><th>Nhớ</th></tr></thead><tbody>
<tr><td>Bảng kịch bản có xác suất</td><td>E(X) = ΣP × X; σ² = ΣP × (X - E)²; không chia n - 1. BA II Plus: Y = xác suất × 100, đọc σx</td></tr>
<tr><td>Covariance từ kịch bản</td><td>ΣP × (độ lệch A) × (độ lệch B); ρ = Cov / (σ<sub>A</sub>σ<sub>B</sub>)</td></tr>
<tr><td>Cây xác suất</td><td>Xác suất nhánh cuối = tích xác suất trên đường đi; E(X) = Σ E(X | S) × P(S)</td></tr>
<tr><td>Phương sai có điều kiện</td><td>Dùng xác suất và kỳ vọng có điều kiện; phương sai tổng = E[phương sai có điều kiện] + phương sai của kỳ vọng có điều kiện</td></tr>
<tr><td>Normal</td><td>Skew 0, kurtosis 3; 90% ↔ 1,65σ; 95% ↔ 1,96σ; 99% ↔ 2,58σ</td></tr>
<tr><td>Lognormal</td><td>Không âm, lệch phải; dùng cho giá. ln(giá) chuẩn ↔ lợi suất liên tục chuẩn</td></tr>
<tr><td>Binomial</td><td>Mean np, variance np(1 - p)</td></tr>
<tr><td>t, chi-square, F</td><td>t: đối xứng, đuôi dày, df ↑ → normal. Chi-square và F: không âm, lệch phải</td></tr>
<tr><td>Bayes</td><td>Đừng nhầm P(Info | Event) với P(Event | Info); mẫu số tính bằng xác suất toàn phần</td></tr>
</tbody></table>
<p>Tiếp theo: tab <b>Luyện tập</b> (10 câu), rồi làm Topic 4 trong slide Quant Review và các bài tập scan.</p>`,
    },
  ];

  const glossary = {
    rv: ['Random variable', 'Biến ngẫu nhiên', 'Đại lượng có giá trị chưa biết trước, nhận các giá trị khác nhau với các xác suất khác nhau.'],
    ev: ['Expected value', 'Giá trị kỳ vọng', 'Trung bình gia quyền theo xác suất của các kết quả có thể xảy ra.'],
    var: ['Variance (of a random variable)', 'Phương sai', 'Kỳ vọng của bình phương độ lệch so với giá trị kỳ vọng: ΣP × (X - E)².'],
    uncond: ['Unconditional', 'Không điều kiện', 'Tính trên toàn bộ các kịch bản, khi chưa biết kịch bản nào xảy ra.'],
    cov: ['Covariance', 'Hiệp phương sai', 'ΣP × (độ lệch X) × (độ lệch Y); đo mức hai biến cùng di chuyển.'],
    joint: ['Joint probability', 'Xác suất đồng thời', 'Xác suất hai sự kiện cùng xảy ra, P(AB).'],
    condp: ['Conditional probability', 'Xác suất có điều kiện', 'P(A | B) = P(AB) / P(B): xác suất của A khi đã biết B xảy ra.'],
    totalp: ['Total probability rule', 'Quy tắc xác suất toàn phần', 'P(A) = Σ P(A | Si) × P(Si) với các kịch bản Si loại trừ nhau và đầy đủ.'],
    totalev: ['Total probability rule for expected value', 'Quy tắc kỳ vọng toàn phần', 'E(X) = Σ E(X | Si) × P(Si).'],
    condev: ['Conditional expected value', 'Kỳ vọng có điều kiện', 'Kỳ vọng của X khi đã biết một kịch bản hoặc sự kiện xảy ra.'],
    tree: ['Probability tree', 'Cây xác suất', 'Sơ đồ nhánh thể hiện kịch bản, xác suất có điều kiện và kết quả cuối.'],
    condvar: ['Conditional variance', 'Phương sai có điều kiện', 'Phương sai của X trong một kịch bản, dùng xác suất và kỳ vọng có điều kiện.'],
    condcov: ['Conditional covariance', 'Hiệp phương sai có điều kiện', 'Hiệp phương sai của hai biến trong một kịch bản cụ thể.'],
    normal: ['Normal distribution', 'Phân phối chuẩn', 'Đối xứng hình chuông, xác định bởi μ và σ²; skewness 0, kurtosis 3.'],
    zscore: ['Standardization (z-score)', 'Chuẩn hóa', 'z = (X - μ) / σ: số độ lệch chuẩn mà X cách mean.'],
    stdnormal: ['Standard normal distribution', 'Phân phối chuẩn tắc', 'Phân phối chuẩn với mean 0 và độ lệch chuẩn 1.'],
    lognormal: ['Lognormal distribution', 'Phân phối lognormal', 'Phân phối của X khi ln(X) chuẩn; không âm, lệch phải; dùng mô tả giá tài sản.'],
    ccret: ['Continuously compounded return', 'Lợi suất ghép lãi liên tục', 'r = ln(P1/P0); cộng được qua các kỳ.'],
    bernoulli: ['Bernoulli random variable', 'Biến Bernoulli', 'Biến chỉ có 2 kết quả: 1 (xác suất p) và 0 (xác suất 1 - p).'],
    binomial: ['Binomial distribution', 'Phân phối nhị thức', 'Số lần thành công trong n phép thử Bernoulli độc lập; mean np, variance np(1 - p).'],
    uniform: ['Uniform distribution', 'Phân phối đều', 'Mọi giá trị trong khoảng có khả năng như nhau.'],
    tdist: ["Student's t-distribution", 'Phân phối t', 'Đối xứng, đuôi dày hơn normal; xác định bởi bậc tự do; tiến về normal khi df tăng.'],
    chisq: ['Chi-square distribution', 'Phân phối chi bình phương', 'Tổng bình phương k biến chuẩn tắc độc lập; không âm, lệch phải; mean k, variance 2k.'],
    fdist: ['F-distribution', 'Phân phối F', 'Tỷ số của hai biến chi-square đã chia bậc tự do; không âm, lệch phải.'],
    prior: ['Prior probability', 'Xác suất tiên nghiệm', 'Xác suất của sự kiện trước khi có thông tin mới.'],
    likelihood: ['Likelihood', 'Khả năng (likelihood)', 'P(Info | Event): xác suất quan sát được thông tin nếu sự kiện là đúng.'],
    posterior: ['Posterior probability', 'Xác suất hậu nghiệm', 'Xác suất của sự kiện sau khi đã cập nhật bằng thông tin mới.'],
    bayesupd: ['Bayesian updating', 'Cập nhật Bayes', 'Dùng công thức Bayes để điều chỉnh niềm tin mỗi khi có thông tin mới; posterior trở thành prior lần sau.'],
  };

  const practice = [
    { q: 'Lợi suất cổ phiếu năm tới: 15% (xác suất 30%), 6% (50%), -10% (20%). Lợi suất kỳ vọng gần nhất với:', choices: ['3,67%', '9,50%', '5,50%'], answer: 2, explain: 'E(R) = 0,3 x 15 + 0,5 x 6 + 0,2 x (-10) = 4,5 + 3 - 2 = 5,50%. Đáp án A là trung bình cộng không gia quyền; đáp án B bỏ dấu âm của kịch bản -10%.' },
    { q: 'Tiếp câu trước, độ lệch chuẩn của lợi suất gần nhất với:', choices: ['8,67%', '75,25%', '10,50%'], answer: 0, explain: 'Độ lệch: 9,5; 0,5; -15,5. σ² = 0,3 x 90,25 + 0,5 x 0,25 + 0,2 x 240,25 = 75,25; σ = 8,67%. Đáp án B là phương sai; đáp án C coi 3 kịch bản đồng xác suất.' },
    { q: 'Hai kịch bản: P = 40% thì R_X = 12%, R_Y = 6%; P = 60% thì R_X = -2%, R_Y = 2%. Covariance giữa X và Y gần nhất với:', choices: ['14,00', '13,44', '3,60'], answer: 1, explain: 'E(R_X) = 3,6; E(R_Y) = 3,6. Cov = 0,4 x 8,4 x 2,4 + 0,6 x (-5,6) x (-1,6) = 8,064 + 5,376 = 13,44. Đáp án A coi hai kịch bản xác suất 50/50; đáp án C là lợi suất kỳ vọng, không phải covariance.' },
    { q: '25% cổ phiếu là cổ phiếu giá trị (value). 60% cổ phiếu giá trị vượt chỉ số; 40% cổ phiếu còn lại vượt chỉ số. Xác suất một cổ phiếu chọn ngẫu nhiên vượt chỉ số là:', choices: ['45%', '50%', '15%'], answer: 0, explain: 'Xác suất toàn phần: 0,25 x 0,6 + 0,75 x 0,4 = 0,15 + 0,30 = 45%. Đáp án B là trung bình hai xác suất có điều kiện (bỏ qua tỷ trọng 25/75); đáp án C chỉ là P(value và vượt).' },
    { q: 'Xác suất công ty tăng trưởng cao là 70%. Nếu tăng trưởng cao, EPS là 3,00 hoặc 2,40 (mỗi khả năng 50%). Nếu tăng trưởng thấp, EPS là 2,00 (30%) hoặc 1,50 (70%). EPS kỳ vọng là:', choices: ['2,225', '2,700', '2,385'], answer: 2, explain: 'E(EPS | cao) = 2,70; E(EPS | thấp) = 0,3 x 2,00 + 0,7 x 1,50 = 1,65. E(EPS) = 0,7 x 2,70 + 0,3 x 1,65 = 2,385. Đáp án A là trung bình cộng 4 kết quả; đáp án B chỉ là kỳ vọng có điều kiện của nhánh tăng trưởng cao.' },
    { q: '10% doanh nghiệp có hành vi xào nấu lợi nhuận. Một mô hình gắn cờ 80% doanh nghiệp xào nấu và 25% doanh nghiệp trung thực. Một doanh nghiệp bị gắn cờ; xác suất nó xào nấu lợi nhuận gần nhất với:', choices: ['80,00%', '26,23%', '8,00%'], answer: 1, explain: 'P(cờ) = 0,1 x 0,8 + 0,9 x 0,25 = 0,305. P(xào nấu | cờ) = 0,08 / 0,305 = 26,23%. Đáp án A nhầm P(cờ | xào nấu) với P(xào nấu | cờ); đáp án C là xác suất đồng thời, chưa chia cho P(cờ).' },
    { q: 'Vì sao phân phối lognormal thường được dùng để mô hình hóa giá cổ phiếu thay vì phân phối chuẩn?', choices: ['Lognormal bị chặn dưới bởi 0 và lệch phải, phù hợp với giá không thể âm', 'Lognormal đối xứng nên mean bằng median', 'Lognormal có đuôi trái dày, phản ánh rủi ro sụp đổ giá'], answer: 0, explain: 'Giá = P0 x e^r nên luôn dương; phân phối lognormal lệch phải (mean > median). Đáp án B sai: lognormal không đối xứng. Đáp án C sai: lognormal lệch phải, không có đuôi trái dày.' },
    { q: 'So với phân phối chuẩn tắc, phân phối Student t:', choices: ['có đuôi mỏng hơn và phương sai nhỏ hơn 1', 'có phương sai bằng 1 với mọi bậc tự do', 'có đuôi dày hơn và tiến dần về phân phối chuẩn khi bậc tự do tăng'], answer: 2, explain: 'Phương sai của t = df/(df - 2) > 1, đuôi dày hơn; df càng lớn thì càng gần normal. Đáp án A ngược lại; đáp án B sai vì phương sai phụ thuộc df (ví dụ df = 10 cho 1,25).' },
    { q: 'Mỗi trái phiếu trong danh mục 20 trái phiếu có xác suất vỡ nợ 15%, độc lập với nhau. Số trái phiếu vỡ nợ có mean và variance lần lượt là:', choices: ['3 và 0,1275', '3 và 2,55', '3 và 3'], answer: 1, explain: 'Binomial: mean = np = 20 x 0,15 = 3; variance = np(1 - p) = 3 x 0,85 = 2,55. Đáp án A là variance của một trái phiếu p(1 - p); đáp án C nhầm variance bằng mean.' },
    { q: 'Lợi suất năm của một quỹ có phân phối chuẩn với mean 6% và độ lệch chuẩn 12%. Khoảng chứa khoảng 90% lợi suất là:', choices: ['-13,74% đến 25,74%', '-17,52% đến 29,52%', '-6,00% đến 18,00%'], answer: 0, explain: '90% ứng với ±1,65σ (chính xác 1,645): 6 ± 1,645 x 12 = -13,74% đến 25,74%. Đáp án B dùng 1,96σ (khoảng 95%); đáp án C dùng ±1σ (khoảng 68%).' },
  ];

  // Widget: cập nhật Bayes với prior và hai likelihood.
  const widgets = {
    bayes(el) {
      el.innerHTML = `
        <div class="w-row"><label>Prior P(Event): <b data-o="p">20%</b><input type="range" min="1" max="99" step="1" value="20" data-i="p"></label>
        <label>P(Info | Event): <b data-o="a">70%</b><input type="range" min="1" max="99" step="1" value="70" data-i="a"></label>
        <label>P(Info | không Event): <b data-o="b">45%</b><input type="range" min="1" max="99" step="1" value="45" data-i="b"></label></div>
        <div class="w-out"><div class="w-price" data-o="post"></div><div class="w-bar"><span data-o="bar"></span><i data-o="mark"></i></div><div class="w-note" data-o="note"></div></div>`;
      const q = s => el.querySelector(s);
      const f = (v, d = 2) => v.toFixed(d).replace('.', ',');
      const upd = () => {
        const p = +q('[data-i="p"]').value / 100, a = +q('[data-i="a"]').value / 100, b = +q('[data-i="b"]').value / 100;
        const pi = p * a + (1 - p) * b, post = (p * a) / pi;
        q('[data-o="p"]').textContent = `${Math.round(p * 100)}%`;
        q('[data-o="a"]').textContent = `${Math.round(a * 100)}%`;
        q('[data-o="b"]').textContent = `${Math.round(b * 100)}%`;
        q('[data-o="post"]').textContent = `Posterior P(Event | Info) = ${f(post * 100)}%`;
        q('[data-o="bar"]').style.width = `${post * 100}%`;
        q('[data-o="mark"]').style.left = `${p * 100}%`;
        const n1 = 1000 * p * a, n0 = 1000 * (1 - p) * b;
        q('[data-o="note"]').textContent = `Trên 1.000 trường hợp: ${f(n1, 0)} trường hợp "Event và Info" và ${f(n0, 0)} trường hợp "Info nhưng không Event". P(Info) = ${f(pi * 100)}%. Vạch đứng là prior; thanh màu là posterior. ${a > b ? 'Info xảy ra thường hơn khi Event đúng nên posterior > prior.' : a < b ? 'Info xảy ra thường hơn khi Event sai nên posterior < prior.' : 'Hai likelihood bằng nhau: thông tin không có giá trị, posterior = prior.'}`;
      };
      el.addEventListener('input', upd);
      upd();
    },
  };

  window.LESSONS['QM-06'] = {
    moduleId: 'QM-06',
    calculator: 'BA II Plus',
    warmup: [
      'Ôn QM-05: sample variance chia cho n hay n - 1? Vì sao?',
      'Ôn QM-05: phân phối lệch phải thì mean, median, mode xếp theo thứ tự nào?',
      'Đoán trước: một xét nghiệm "chính xác 95%" cho kết quả dương tính với bệnh rất hiếm. Xác suất bạn thật sự mắc bệnh cao hay thấp?',
    ],
    sections,
    glossary,
    practice,
    widgets,
    slides: [],
    wrapup: [
      'Vẽ lại cây xác suất của ví dụ 4.1 từ trí nhớ và tính E(EPS).',
      'Viết công thức Bayes và gọi tên từng thành phần (prior, likelihood, posterior).',
      'Phân phối nào không âm và lệch phải? Phân phối nào đối xứng nhưng đuôi dày hơn normal?',
    ],
  };
}());
