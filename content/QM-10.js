// Bài giảng QM-10 - Applications of Simple Linear Regression in Finance (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t, frac, keys, pages } = window.CFAH;

  // Biểu đồ phần dư nhỏ trong bài giảng. kind: 'ok' | 'funnel' | 'curve'
  const residPlot = (kind, caption) => {
    let seed = kind === 'ok' ? 7 : kind === 'funnel' ? 11 : 5;
    const rnd = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
    const W = 260, H = 160, l = 20, r = 250, y0 = 80;
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv" style="max-height:200px" role="img" aria-label="${caption}">`;
    s += `<line x1="${l}" y1="${y0}" x2="${r}" y2="${y0}" class="sv-dash"/><line x1="${l}" y1="10" x2="${l}" y2="150" class="sv-axis"/>`;
    for (let i = 0; i < 36; i++) {
      const x = i / 35;
      const z = (rnd() + rnd() + rnd() - 1.5) * 2;
      const e = kind === 'ok' ? z * 18 : kind === 'funnel' ? z * (1 + 45 * x) : (55 * (x - 0.5) ** 2 * 4 - 25) + z * 6;
      s += `<circle cx="${(l + 8 + x * (r - l - 16)).toFixed(1)}" cy="${(y0 - Math.max(-68, Math.min(68, e))).toFixed(1)}" r="3.5" class="sv-dot"/>`;
    }
    s += `<text x="${(l + r) / 2}" y="${H - 2}" class="sv-muted">${caption}</text></svg>`;
    return s;
  };

  const sections = [
    {
      title: '1. Bức tranh lớn',
      minutes: 5,
      html: `
<p>Module trước (QM-09) đo mức độ cùng biến động của hai biến bằng ${t('corr', 'hệ số tương quan')}. Hồi quy đi thêm một bước: <b>dùng X để giải thích và dự báo Y</b>.</p>
<div class="key">Hồi quy tuyến tính đơn tìm đường thẳng Ŷ = b̂<sub>0</sub> + b̂<sub>1</sub>X "khớp nhất" với dữ liệu, rồi hỏi: đường thẳng giải thích được bao nhiêu phần biến động của Y, hệ số có ý nghĩa thống kê không, và dự báo tin cậy đến đâu?</div>
<p>Bốn LOS của module đi theo đúng trình tự một bài phân tích thực tế:</p>
<ol>
  <li><b>Ước lượng</b>: mô hình, ý nghĩa hệ số, phương pháp bình phương nhỏ nhất (OLS). Ứng với LOS 1 (phần 2).</li>
  <li><b>Kiểm tra</b>: giả định, phân tích phần dư, ANOVA, R², F-test, t-test cho hệ số. Ứng với LOS 2 (phần 3, 4, 5).</li>
  <li><b>Dùng mô hình</b>: giá trị dự báo, sai số chuẩn ước lượng (SEE), khoảng dự báo, các dạng hàm log. Ứng với LOS 3 (phần 6, 7).</li>
  <li><b>Ứng dụng tài chính</b>: ước lượng beta và alpha của CAPM. Ứng với LOS 4 (phần 8).</li>
</ol>
<p>Ví dụ xuyên suốt: 10 học viên, X = số giờ ôn thi, Y = điểm thi CFA (thang 10).</p>
<table class="plain"><thead><tr><th>Học viên</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th><th>10</th></tr></thead><tbody>
<tr><td>Giờ học (X)</td><td>120</td><td>100</td><td>90</td><td>150</td><td>50</td><td>70</td><td>110</td><td>40</td><td>30</td><td>95</td></tr>
<tr><td>Điểm (Y)</td><td>8,0</td><td>7,5</td><td>7,2</td><td>8,6</td><td>6,5</td><td>6,9</td><td>7,1</td><td>5,8</td><td>5,3</td><td>7,6</td></tr>
</tbody></table>`,
    },
    {
      title: '2. Mô hình và ước lượng bằng bình phương nhỏ nhất (OLS)',
      minutes: 15,
      html: `
<h4>Mô hình</h4>
<div class="formula">Y<sub>i</sub> = b<sub>0</sub> + b<sub>1</sub>X<sub>i</sub> + ε<sub>i</sub>, &nbsp; i = 1, ..., n</div>
<ul>
<li>Y là ${t('dep', 'biến phụ thuộc (dependent variable)')}: biến cần giải thích, còn gọi là explained / endogenous / predicted variable.</li>
<li>X là ${t('indep', 'biến độc lập (independent variable)')}: biến dùng để giải thích, còn gọi là explanatory / exogenous / predicting variable.</li>
<li>b<sub>0</sub> là ${t('intercept', 'hệ số chặn (intercept)')}: giá trị dự báo của Y khi X = 0.</li>
<li>b<sub>1</sub> là ${t('slope', 'hệ số độ dốc (slope coefficient)')}: Y thay đổi bao nhiêu khi X tăng 1 đơn vị.</li>
<li>ε<sub>i</sub> là sai số; sau khi ước lượng, e<sub>i</sub> = Y<sub>i</sub> - Ŷ<sub>i</sub> gọi là ${t('residual', 'phần dư (residual)')}.</li>
</ul>

<h4>Tiêu chí bình phương nhỏ nhất</h4>
<p>${t('ols', 'OLS (ordinary least squares)')} chọn b̂<sub>0</sub>, b̂<sub>1</sub> sao cho <b>tổng bình phương phần dư</b> Σ(Y<sub>i</sub> - Ŷ<sub>i</sub>)<sup>2</sup> nhỏ nhất. Kết quả:</p>
<div class="formula">b̂<sub>1</sub> = ${frac('Cov(X, Y)', 'Var(X)')} = ${frac('Σ(X<sub>i</sub> - X̄)(Y<sub>i</sub> - Ȳ)', 'Σ(X<sub>i</sub> - X̄)<sup>2</sup>')} &nbsp;&nbsp;&nbsp; b̂<sub>0</sub> = Ȳ - b̂<sub>1</sub>X̄</div>
<p>Hệ quả quan trọng: đường hồi quy <b>luôn đi qua điểm trung bình (X̄, Ȳ)</b>, và tổng phần dư luôn bằng 0. Một dạng khác hay dùng trong đề: b̂<sub>1</sub> = r × s<sub>Y</sub> / s<sub>X</sub>.</p>

<div class="example"><div class="ex-h">Ví dụ 2.1 - Giờ học và điểm thi</div>
<p>Từ bảng ở phần 1, ước lượng đường hồi quy và giải thích ý nghĩa hệ số.</p>
<details><summary>Xem lời giải</summary>
<p>X̄ = 85,5; Ȳ = 7,05; Σ(X - X̄)<sup>2</sup> = 12.922,5; Σ(X - X̄)(Y - Ȳ) = 322,25.<br>
b̂<sub>1</sub> = 322,25 / 12.922,5 = <b>0,0249</b> (chia cùng n - 1 cho cả tử và mẫu thì vẫn vậy: Cov = 35,81, Var(X) = 1.435,83).<br>
b̂<sub>0</sub> = 7,05 - 0,0249 × 85,5 = <b>4,918</b>.</p>
<p><b>Ý nghĩa:</b> mỗi giờ ôn thêm gắn với điểm cao hơn khoảng 0,025 (tức 100 giờ thêm khoảng 2,5 điểm). Hệ số chặn 4,92 là điểm dự báo khi không học giờ nào, nhưng X = 0 nằm ngoài vùng dữ liệu (30 đến 150 giờ), nên không nên diễn giải quá mức.</p></details></div>

<h4>BA II Plus: chế độ DATA và STAT</h4>
${keys([
  ['Mở bảng dữ liệu', '[2ND] [7]', 'X01'],
  ['Xóa dữ liệu cũ', '[2ND] [CE/C]', 'X01 = 0'],
  ['Nhập cặp thứ nhất', '120 [ENTER] [↓] 8 [ENTER] [↓]', 'X02'],
  ['Nhập tiếp 9 cặp còn lại', '100 [ENTER] [↓] 7.5 [ENTER] [↓] ...', ''],
  ['Mở STAT, chọn hồi quy tuyến tính', '[2ND] [8] rồi [2ND] [ENTER] đến khi hiện LIN', 'LIN'],
  ['Cuộn xuống đọc kết quả', '[↓] nhiều lần', 'n, X̄, Sx, σx, Ȳ, Sy, σy, a, b, r'],
])}
<p>Màn hình cho a = 4.9179 (hệ số chặn), b = 0.0249 (độ dốc), r = 0.9564. Cuộn tiếp sẽ thấy X', nhập 100 [ENTER], cuộn xuống Y' và bấm <kbd>CPT</kbd> để có giá trị dự báo 7.4116.</p>
<p class="tip">Máy dùng ký hiệu <b>a là hệ số chặn, b là độ dốc</b>, ngược với thói quen "b<sub>0</sub>, b<sub>1</sub>". Đừng đọc nhầm.</p>

<h4>Thử ngay: kéo độ nhiễu và độ dốc</h4>
<div class="widget" data-widget="regFit"></div>`,
    },
    {
      title: '3. Bốn giả định và phân tích phần dư',
      minutes: 15,
      html: `
<p>Kết quả kiểm định (t, F) và khoảng dự báo chỉ đáng tin khi các giả định sau đúng:</p>
<table class="plain"><thead><tr><th>Giả định</th><th>Nội dung</th><th>Vi phạm thường gặp trong tài chính</th></tr></thead><tbody>
<tr><td><b>Linearity</b> (tuyến tính)</td><td>Quan hệ giữa Y và X là tuyến tính theo tham số; X không ngẫu nhiên.</td><td>Quan hệ thật là cong (ví dụ tăng trưởng lũy kế), cần đổi dạng hàm.</td></tr>
<tr><td><b>${t('homo', 'Homoskedasticity')}</b> (phương sai đồng nhất)</td><td>Phương sai của sai số như nhau ở mọi quan sát.</td><td>Thời kỳ biến động mạnh xen thời kỳ yên ắng: ${t('hetero', 'heteroskedasticity')}.</td></tr>
<tr><td><b>Independence</b> (độc lập)</td><td>Các cặp quan sát (X, Y) không tương quan với nhau; phần dư không tự tương quan.</td><td>Dữ liệu chuỗi thời gian có tính mùa vụ hoặc quán tính.</td></tr>
<tr><td><b>Normality</b> (chuẩn)</td><td>Sai số có phân phối chuẩn.</td><td>Lợi suất có đuôi dày; với mẫu lớn, vấn đề nhẹ hơn nhờ định lý giới hạn trung tâm.</td></tr>
</tbody></table>
<p class="warn"><b>Bẫy:</b> giả định chuẩn áp dụng cho <b>sai số</b>, không phải cho X hay Y. Đề hay cho đáp án "biến độc lập phải phân phối chuẩn" để bẫy.</p>

<h4>Đọc biểu đồ phần dư</h4>
<p>Vẽ phần dư e<sub>i</sub> theo X (hoặc theo thời gian). Nếu mô hình tốt, các điểm là một <b>dải ngẫu nhiên đều quanh 0</b>.</p>
<table class="plain"><tbody><tr>
<td>${residPlot('ok', 'Dải đều: ổn')}</td>
<td>${residPlot('funnel', 'Hình phễu: heteroskedasticity')}</td>
<td>${residPlot('curve', 'Hình cong: sai dạng hàm')}</td>
</tr></tbody></table>
<ul>
<li><b>Hình phễu</b> (độ phân tán tăng theo X): vi phạm homoskedasticity. Hệ số vẫn không chệch nhưng sai số chuẩn sai, nên t-test và F-test không đáng tin.</li>
<li><b>Hình cong / hình chữ U</b>: vi phạm linearity. Thử dạng log ở phần 7.</li>
<li><b>Chuỗi dương liên tiếp rồi âm liên tiếp theo thời gian</b>, hoặc lặp theo quý: vi phạm independence (ví dụ tính mùa vụ).</li>
<li><b>Một điểm cách xa hẳn</b>: ${t('outlier', 'ngoại lai (outlier)')} có thể kéo lệch đường hồi quy.</li>
</ul>
<p>Trong ví dụ giờ học, phần dư lớn nhất là học viên 7 (110 giờ, điểm 7,1): e = 7,1 - 7,661 = -0,561. Các phần dư còn lại nằm trong khoảng -0,37 đến +0,34, không thấy hình phễu rõ ràng.</p>`,
    },
    {
      title: '4. ANOVA: chia tổng biến động, R² và SEE',
      minutes: 18,
      html: `
<p>Mỗi quan sát lệch khỏi trung bình một khoảng (Y<sub>i</sub> - Ȳ). Khoảng này tách thành phần mô hình giải thích được (Ŷ<sub>i</sub> - Ȳ) và phần còn lại (Y<sub>i</sub> - Ŷ<sub>i</sub>). Bình phương rồi cộng lại:</p>
<div class="formula">${t('sst', 'SST')} = ${t('ssr', 'SSR')} + ${t('sse', 'SSE')} &nbsp;&nbsp;⇔&nbsp;&nbsp; Σ(Y<sub>i</sub> - Ȳ)<sup>2</sup> = Σ(Ŷ<sub>i</sub> - Ȳ)<sup>2</sup> + Σ(Y<sub>i</sub> - Ŷ<sub>i</sub>)<sup>2</sup></div>
<p>SSR (sum of squares regression, một số tài liệu viết RSS) là biến động được giải thích; SSE là biến động không giải thích được.</p>

<h4>Bảng ANOVA (k = 1 biến độc lập)</h4>
<table class="plain"><thead><tr><th>Nguồn</th><th>Bậc tự do (df)</th><th>Tổng bình phương</th><th>Bình phương trung bình</th><th>F</th></tr></thead><tbody>
<tr><td>Hồi quy</td><td>k = 1</td><td>SSR</td><td>MSR = SSR / k</td><td rowspan="2">${frac('MSR', 'MSE')}</td></tr>
<tr><td>Phần dư</td><td>n - k - 1 = n - 2</td><td>SSE</td><td>MSE = SSE / (n - 2)</td></tr>
<tr><td>Tổng</td><td>n - 1</td><td>SST</td><td></td><td></td></tr>
</tbody></table>

<h4>Hai thước đo độ khớp</h4>
<div class="formula">${t('r2', 'R²')} = ${frac('SSR', 'SST')} = 1 - ${frac('SSE', 'SST')} &nbsp;&nbsp;&nbsp;&nbsp; ${t('see', 'SEE')} = √MSE = √${frac('SSE', 'n - 2')}</div>
<ul>
<li><b>R²</b> (coefficient of determination): tỷ lệ biến động của Y được X giải thích. Trong hồi quy đơn, R² = r<sup>2</sup>.</li>
<li><b>SEE</b> (standard error of the estimate): độ lệch chuẩn của phần dư, đo theo <b>đơn vị của Y</b>. SEE càng nhỏ, điểm càng sát đường hồi quy.</li>
</ul>

<div class="example"><div class="ex-h">Ví dụ 4.1 - ANOVA cho dữ liệu giờ học</div>
<p>Lập bảng ANOVA, tính R² và SEE.</p>
<details><summary>Xem lời giải</summary>
<table class="plain"><thead><tr><th>Nguồn</th><th>df</th><th>SS</th><th>MS</th><th>F</th></tr></thead><tbody>
<tr><td>Hồi quy</td><td>1</td><td>8,0360</td><td>8,0360</td><td rowspan="2">85,83</td></tr>
<tr><td>Phần dư</td><td>8</td><td>0,7490</td><td>0,0936</td></tr>
<tr><td>Tổng</td><td>9</td><td>8,7850</td><td></td></tr></tbody></table>
<p>R² = 8,0360 / 8,7850 = <b>91,47%</b>: số giờ học giải thích khoảng 91% biến động điểm thi. Kiểm tra: r = 0,9564, r<sup>2</sup> = 0,9147.<br>
SEE = √0,0936 = <b>0,306</b> điểm.</p></details></div>
<p class="warn"><b>Bẫy hay gặp:</b> (1) chia SSE cho n thay vì n - 2 khi tính SEE; (2) nói "R² = 0,64 nghĩa là hệ số tương quan bằng 0,64" (sai: |r| = 0,8); (3) dấu của r lấy theo dấu của b̂<sub>1</sub>, không suy được từ R².</p>`,
    },
    {
      title: '5. Kiểm định: F-test và t-test cho hệ số',
      minutes: 18,
      html: `
<h4>F-test: mô hình có giải thích được gì không?</h4>
<div class="formula">H<sub>0</sub>: b<sub>1</sub> = 0 &nbsp; vs &nbsp; H<sub>a</sub>: b<sub>1</sub> ≠ 0 &nbsp;&nbsp;&nbsp; ${t('ftest', 'F')} = ${frac('MSR', 'MSE')} = ${frac('SSR / k', 'SSE / (n - k - 1)')}</div>
<p>F-test <b>luôn là kiểm định một đuôi (bên phải)</b>, bậc tự do (k, n - k - 1). Bác bỏ H<sub>0</sub> khi F &gt; F<sub>c</sub>. Trong hồi quy đơn, F = t<sup>2</sup> của hệ số độ dốc, nên F-test và t-test cho b<sub>1</sub> luôn cho cùng kết luận.</p>
<p>Ví dụ giờ học: F = 85,83; F<sub>c</sub>(1, 8) ở mức 5% là 5,32. Bác bỏ H<sub>0</sub>: giờ học có quan hệ tuyến tính có ý nghĩa với điểm thi.</p>

<h4>t-test cho hệ số độ dốc</h4>
<div class="formula">t = ${frac('b̂<sub>1</sub> - B<sub>1</sub>', 's<sub>b̂1</sub>')}, &nbsp; df = n - 2, &nbsp;&nbsp; ${t('sb1', 's<sub>b̂1</sub>')} = ${frac('SEE', '√Σ(X<sub>i</sub> - X̄)<sup>2</sup>')}</div>
<p>B<sub>1</sub> là giá trị giả thuyết: thường là 0 (X có tác động không?), nhưng có thể là số khác, ví dụ beta = 1 trong CAPM. Kiểm định hai đuôi: bác bỏ khi |t| &gt; t<sub>c</sub>. Khi B<sub>1</sub> = 0 còn có cách tính nhanh từ tương quan: t = ${frac('r√(n - 2)', '√(1 - r<sup>2</sup>)')}.</p>
<p>Kiểm định tương tự cho hệ số chặn: t = (b̂<sub>0</sub> - B<sub>0</sub>) / s<sub>b̂0</sub>, với s<sub>b̂0</sub> = SEE × √(1/n + X̄<sup>2</sup> / Σ(X<sub>i</sub> - X̄)<sup>2</sup>).</p>

<div class="example"><div class="ex-h">Ví dụ 5.1 - Kiểm định hệ số giờ học</div>
<p>Với SEE = 0,306 và Σ(X - X̄)<sup>2</sup> = 12.922,5: (a) kiểm định b<sub>1</sub> = 0 ở mức 5%; (b) kiểm định b<sub>1</sub> = 0,02; (c) lập khoảng tin cậy 95% cho b<sub>1</sub>. Biết t<sub>c</sub>(df = 8) = 2,306.</p>
<details><summary>Xem lời giải</summary>
<p>s<sub>b̂1</sub> = 0,306 / √12.922,5 = 0,00269.<br>
(a) t = 0,02494 / 0,00269 = <b>9,26</b> &gt; 2,306: bác bỏ H<sub>0</sub>. Kiểm tra: 9,26<sup>2</sup> = 85,83 = F. Cách nhanh: 0,9564 × √8 / √(1 - 0,9147) = 9,26.<br>
(b) t = (0,02494 - 0,02) / 0,00269 = <b>1,83</b> &lt; 2,306: không bác bỏ. Dữ liệu không đủ bằng chứng để nói độ dốc khác 0,02.<br>
(c) 0,02494 ± 2,306 × 0,00269 = <b>0,0187 đến 0,0311</b>. Khoảng này chứa 0,02 nhưng không chứa 0, khớp với (a) và (b).</p></details></div>
<p class="tip"><b>Đọc output phần mềm:</b> bảng hệ số thường có 4 cột: Coefficient, Standard error, t-statistic, p-value. t = Coefficient / Standard error (khi kiểm định với 0). p-value &lt; mức ý nghĩa thì bác bỏ H<sub>0</sub>.</p>`,
    },
    {
      title: '6. Dự báo và khoảng dự báo',
      minutes: 15,
      html: `
<div class="formula">${t('pred', 'Ŷ')} = b̂<sub>0</sub> + b̂<sub>1</sub>X<sub>p</sub></div>
<p>Giá trị dự báo là <b>một điểm</b>. Nhưng Y thực tế sẽ lệch khỏi điểm đó vì hai lý do: sai số ngẫu nhiên ε (đo bằng SEE) và sai số ước lượng các hệ số. Gộp lại thành ${t('sf', 'sai số chuẩn của dự báo (s<sub>f</sub>)')}:</p>
<div class="formula">s<sub>f</sub><sup>2</sup> = SEE<sup>2</sup> × [1 + ${frac('1', 'n')} + ${frac('(X<sub>p</sub> - X̄)<sup>2</sup>', '(n - 1)s<sub>X</sub><sup>2</sup>')}] &nbsp;&nbsp;&nbsp;&nbsp; Khoảng dự báo: Ŷ ± t<sub>c</sub> × s<sub>f</sub></div>
<ul>
<li>(n - 1)s<sub>X</sub><sup>2</sup> chính là Σ(X<sub>i</sub> - X̄)<sup>2</sup>.</li>
<li>s<sub>f</sub> luôn <b>lớn hơn</b> SEE, và càng lớn khi X<sub>p</sub> càng xa X̄: khoảng dự báo loe rộng ra hai đầu.</li>
<li>t<sub>c</sub> là giá trị t hai đuôi với df = n - 2.</li>
</ul>

<div class="example"><div class="ex-h">Ví dụ 6.1 - Dự báo điểm cho người học 100 giờ</div>
<p>Dùng kết quả phần 2 và 4, lập khoảng dự báo 95% cho điểm của người học 100 giờ.</p>
<details><summary>Xem lời giải</summary>
<p>Ŷ = 4,918 + 0,02494 × 100 = <b>7,41</b>.<br>
s<sub>f</sub><sup>2</sup> = 0,0936 × [1 + 0,1 + (100 - 85,5)<sup>2</sup> / 12.922,5] = 0,0936 × 1,1163, nên s<sub>f</sub> = <b>0,323</b> (lớn hơn SEE = 0,306).<br>
Khoảng 95%: 7,41 ± 2,306 × 0,323 = <b>6,67 đến 8,16</b>.</p>
<p>Với 160 giờ: Ŷ = 8,91; s<sub>f</sub> = 0,378; khoảng rộng hơn (8,04 đến 9,78). Hơn nữa 160 giờ nằm ngoài vùng dữ liệu (30 đến 150): đây là ${t('extrap', 'ngoại suy (extrapolation)')}, mô hình có thể không còn đúng.</p></details></div>
<p class="warn"><b>Bẫy:</b> dùng SEE thay cho s<sub>f</sub> làm khoảng quá hẹp; dùng z = 1,96 thay cho t<sub>c</sub> khi mẫu nhỏ. Nếu đề đã cho sẵn s<sub>f</sub> thì dùng luôn, không tính lại.</p>`,
    },
    {
      title: '7. Các dạng hàm: log-lin, lin-log, log-log',
      minutes: 12,
      html: `
<p>Khi biểu đồ phần dư có hình cong, ta biến đổi Y, X hoặc cả hai bằng logarit tự nhiên để quan hệ trở nên tuyến tính. Điều quan trọng nhất là <b>đọc đúng ý nghĩa b<sub>1</sub></b>:</p>
<table class="plain"><thead><tr><th>Mô hình</th><th>Phương trình</th><th>Ý nghĩa b<sub>1</sub></th><th>Khi nào dùng</th></tr></thead><tbody>
<tr><td>${t('loglin', 'Log-lin')}</td><td>ln Y = b<sub>0</sub> + b<sub>1</sub>X</td><td>X tăng 1 đơn vị → Y thay đổi khoảng b<sub>1</sub> × 100%</td><td>Y tăng trưởng theo tỷ lệ (doanh thu, giá theo thời gian)</td></tr>
<tr><td>${t('linlog', 'Lin-log')}</td><td>Y = b<sub>0</sub> + b<sub>1</sub>ln X</td><td>X tăng 1% → Y thay đổi khoảng b<sub>1</sub> / 100 đơn vị</td><td>Tác động của X giảm dần (ví dụ quy mô công ty)</td></tr>
<tr><td>${t('loglog', 'Log-log')} (double-log)</td><td>ln Y = b<sub>0</sub> + b<sub>1</sub>ln X</td><td>X tăng 1% → Y thay đổi khoảng b<sub>1</sub>% (độ co giãn)</td><td>Ước lượng độ co giãn (giá, quảng cáo)</td></tr>
</tbody></table>

<div class="example"><div class="ex-h">Ví dụ 7.1 - Mô hình log-lin</div>
<p>Một công ty ước lượng ln(Doanh thu) = 1,8 + 0,06 × (Chi quảng cáo). Dự báo doanh thu khi chi quảng cáo là 10, và diễn giải hệ số 0,06.</p>
<details><summary>Xem lời giải</summary>
<p>ln Ŷ = 1,8 + 0,06 × 10 = 2,4, nên Ŷ = e<sup>2,4</sup> = <b>11,02</b>. Phải lấy e mũ, không trả lời 2,4.<br>
Chi quảng cáo tăng 1 đơn vị thì doanh thu tăng khoảng <b>6%</b> (chính xác: e<sup>0,06</sup> - 1 = 6,18%). Không phải "tăng 0,06 đơn vị" và cũng không phải "tăng 0,06%".</p></details></div>
<p>Với log-log ln Y = 1 + 0,8 ln X: X tăng 10% thì Y tăng khoảng 8% (chính xác 1,1<sup>0,8</sup> - 1 = 7,92%).</p>
<p class="tip">So sánh độ khớp giữa các dạng hàm bằng R², F và SEE <b>chỉ có ý nghĩa khi biến phụ thuộc giống nhau</b>. Không so R² của mô hình Y với R² của mô hình ln Y.</p>`,
    },
    {
      title: '8. Ước lượng beta và alpha của CAPM bằng hồi quy',
      minutes: 12,
      html: `
<p>CAPM nói lợi suất vượt trội của một tài sản tỷ lệ với lợi suất vượt trội của thị trường. Viết dưới dạng hồi quy:</p>
<div class="formula">R<sub>i,t</sub> - R<sub>f,t</sub> = α<sub>i</sub> + β<sub>i</sub>(R<sub>m,t</sub> - R<sub>f,t</sub>) + ε<sub>i,t</sub></div>
<ul>
<li>${t('beta', 'Beta (β)')} là hệ số độ dốc: β̂ = Cov(R<sub>i</sub> - R<sub>f</sub>, R<sub>m</sub> - R<sub>f</sub>) / Var(R<sub>m</sub> - R<sub>f</sub>) = ρ × σ<sub>i</sub> / σ<sub>m</sub>. Đo rủi ro hệ thống: β = 1,4 nghĩa là thị trường tăng (vượt trội) 1% thì tài sản tăng khoảng 1,4%.</li>
<li>${t('alpha', 'Alpha (α)')} là hệ số chặn: lợi suất vượt trội không giải thích được bởi thị trường. Theo CAPM, α phải bằng 0; α &gt; 0 có ý nghĩa thống kê gợi ý tài sản hoạt động tốt hơn mức rủi ro của nó.</li>
<li>R² của hồi quy này là tỷ lệ rủi ro tổng (phương sai) đến từ thị trường (rủi ro hệ thống); 1 - R² là rủi ro riêng (phần dư).</li>
</ul>

<div class="example"><div class="ex-h">Ví dụ 8.1 - Ước lượng và kiểm định beta</div>
<p>Dữ liệu 60 tháng: Cov(lợi suất vượt trội cổ phiếu, của thị trường) = 0,0024; Var(lợi suất vượt trội thị trường) = 0,0016. Trung bình lợi suất vượt trội: cổ phiếu 1,2%/tháng, thị trường 0,7%/tháng. Sai số chuẩn của β̂ là 0,20, của α̂ là 0,25%. Với df = 58, t<sub>c</sub> 5% hai đuôi ≈ 2,00.</p>
<details><summary>Xem lời giải</summary>
<p>β̂ = 0,0024 / 0,0016 = <b>1,50</b>. α̂ = 1,2% - 1,5 × 0,7% = <b>0,15%/tháng</b> (đường hồi quy đi qua điểm trung bình).<br>
Kiểm định β = 1: t = (1,50 - 1) / 0,20 = <b>2,5</b> &gt; 2,00, bác bỏ: cổ phiếu rủi ro hệ thống cao hơn thị trường.<br>
Kiểm định β = 0: t = 7,5, bác bỏ rất rõ.<br>
Kiểm định α = 0: t = 0,15 / 0,25 = <b>0,6</b> &lt; 2,00, không bác bỏ: không có bằng chứng về lợi suất bất thường.</p></details></div>
<p class="warn"><b>Bẫy:</b> nhớ kiểm định "beta khác 1" dùng B<sub>1</sub> = 1 ở tử số, không phải 0. Và beta tính từ ρ: β = ρσ<sub>i</sub>/σ<sub>m</sub> (độ lệch chuẩn của tài sản ở tử số).</p>`,
    },
    {
      title: '9. Tóm tắt và bẫy thường gặp',
      minutes: 5,
      html: `
<table class="plain"><thead><tr><th>Chủ đề</th><th>Nhớ</th></tr></thead><tbody>
<tr><td>Hệ số OLS</td><td>b̂<sub>1</sub> = Cov/Var(X) = r × s<sub>Y</sub>/s<sub>X</sub>; b̂<sub>0</sub> = Ȳ - b̂<sub>1</sub>X̄. Đường đi qua (X̄, Ȳ)</td></tr>
<tr><td>BA II Plus LIN</td><td>a = hệ số chặn, b = độ dốc, r = tương quan</td></tr>
<tr><td>Giả định</td><td>Linearity, homoskedasticity, independence, normality của <b>sai số</b></td></tr>
<tr><td>Phần dư hình phễu</td><td>Heteroskedasticity; hình cong là sai dạng hàm</td></tr>
<tr><td>ANOVA</td><td>SST = SSR + SSE; df: 1, n - 2, n - 1</td></tr>
<tr><td>R² và SEE</td><td>R² = SSR/SST = r<sup>2</sup>; SEE = √(SSE/(n - 2)), đơn vị của Y</td></tr>
<tr><td>F-test</td><td>F = MSR/MSE, một đuôi; hồi quy đơn: F = t<sup>2</sup></td></tr>
<tr><td>t-test hệ số</td><td>t = (b̂<sub>1</sub> - B<sub>1</sub>)/s<sub>b̂1</sub>, df = n - 2; B<sub>1</sub> có thể khác 0</td></tr>
<tr><td>Khoảng dự báo</td><td>Ŷ ± t<sub>c</sub>s<sub>f</sub>; s<sub>f</sub> &gt; SEE, rộng dần khi X xa X̄</td></tr>
<tr><td>Log-lin</td><td>X +1 đơn vị → Y khoảng +b<sub>1</sub> × 100%; dự báo phải lấy e mũ</td></tr>
<tr><td>Log-log</td><td>b<sub>1</sub> là độ co giãn (%/%)</td></tr>
<tr><td>CAPM</td><td>β = độ dốc, α = hệ số chặn; kiểm định β = 1 khi hỏi "khác thị trường"</td></tr>
</tbody></table>
<p>Tiếp theo: tab <b>Luyện tập</b> 10 câu (rút ngẫu nhiên từ ngân hàng 30 câu, mỗi lần làm một bộ khác).</p>`,
    },
  ];

  const glossary = {
    corr: ['Correlation coefficient', 'Hệ số tương quan', 'Đo mức độ quan hệ tuyến tính giữa hai biến, từ -1 đến +1.'],
    dep: ['Dependent variable', 'Biến phụ thuộc', 'Biến cần giải thích (Y); còn gọi là explained, endogenous, predicted variable.'],
    indep: ['Independent variable', 'Biến độc lập', 'Biến dùng để giải thích Y (X); còn gọi là explanatory, exogenous, predicting variable.'],
    intercept: ['Intercept', 'Hệ số chặn', 'Giá trị dự báo của Y khi X = 0; trên máy BA II Plus là a.'],
    slope: ['Slope coefficient', 'Hệ số độ dốc', 'Mức thay đổi của Y khi X tăng 1 đơn vị; trên máy BA II Plus là b.'],
    residual: ['Residual', 'Phần dư', 'Chênh lệch giữa giá trị thực tế và giá trị dự báo: e = Y - Ŷ.'],
    ols: ['Ordinary least squares (OLS)', 'Bình phương nhỏ nhất', 'Chọn hệ số để tổng bình phương phần dư nhỏ nhất.'],
    homo: ['Homoskedasticity', 'Phương sai đồng nhất', 'Phương sai của sai số như nhau ở mọi quan sát.'],
    hetero: ['Heteroskedasticity', 'Phương sai thay đổi', 'Phương sai sai số thay đổi theo quan sát; biểu đồ phần dư thường có hình phễu.'],
    outlier: ['Outlier', 'Giá trị ngoại lai', 'Quan sát nằm xa hẳn phần còn lại, có thể kéo lệch đường hồi quy.'],
    sst: ['Total sum of squares (SST)', 'Tổng bình phương toàn phần', 'Σ(Y - Ȳ)²: tổng biến động của Y quanh trung bình.'],
    ssr: ['Sum of squares regression (SSR / RSS)', 'Tổng bình phương hồi quy', 'Σ(Ŷ - Ȳ)²: phần biến động được mô hình giải thích.'],
    sse: ['Sum of squared errors (SSE)', 'Tổng bình phương phần dư', 'Σ(Y - Ŷ)²: phần biến động không giải thích được.'],
    r2: ['Coefficient of determination (R²)', 'Hệ số xác định', 'SSR/SST: tỷ lệ biến động của Y được X giải thích; bằng r² trong hồi quy đơn.'],
    see: ['Standard error of the estimate (SEE)', 'Sai số chuẩn của ước lượng', '√MSE = √(SSE/(n - 2)): độ phân tán của điểm quanh đường hồi quy, đơn vị của Y.'],
    ftest: ['F-statistic', 'Thống kê F', 'MSR/MSE; kiểm định một đuôi xem các biến độc lập có giải thích được Y không.'],
    sb1: ['Standard error of the slope', 'Sai số chuẩn của độ dốc', 'SEE / √Σ(X - X̄)²; dùng làm mẫu số của t-test cho b1.'],
    pred: ['Predicted value', 'Giá trị dự báo', 'Ŷ = b0 + b1 × Xp, với Xp là giá trị dự kiến của X.'],
    sf: ['Standard error of the forecast', 'Sai số chuẩn của dự báo', 'Gộp sai số ngẫu nhiên và sai số ước lượng hệ số; luôn lớn hơn SEE.'],
    extrap: ['Extrapolation', 'Ngoại suy', 'Dự báo với X nằm ngoài vùng dữ liệu đã dùng để ước lượng; kém tin cậy.'],
    loglin: ['Log-lin model', 'Mô hình log-tuyến tính', 'ln Y = b0 + b1X; X tăng 1 đơn vị thì Y đổi khoảng b1 × 100%.'],
    linlog: ['Lin-log model', 'Mô hình tuyến tính-log', 'Y = b0 + b1 ln X; X tăng 1% thì Y đổi khoảng b1/100 đơn vị.'],
    loglog: ['Log-log (double-log) model', 'Mô hình log-log', 'ln Y = b0 + b1 ln X; b1 là độ co giãn của Y theo X.'],
    beta: ['Beta', 'Hệ số beta', 'Độ dốc của hồi quy lợi suất vượt trội tài sản theo thị trường; đo rủi ro hệ thống.'],
    alpha: ['Alpha (Jensen\'s alpha)', 'Hệ số alpha', 'Hệ số chặn của hồi quy CAPM; lợi suất vượt trội không do thị trường giải thích.'],
  };

  const practice = [
    { q: 'Cov(X, Y) = 0,0018; Var(X) = 0,0012; trung bình Y là 8% và trung bình X là 5%. Hệ số chặn ước lượng b0 gần nhất với:', choices: ['0,50%', '3,00%', '4,67%'], answer: 0, explain: 'b1 = 0,0018/0,0012 = 1,5; b0 = 8% - 1,5 x 5% = 0,5%. Lựa chọn 3,00% là lấy Ȳ - X̄ (quên nhân b1). Lựa chọn 4,67% dùng b1 đảo ngược Var/Cov = 0,667.' },
    { q: 'Hồi quy đơn với 32 quan sát có SSR = 60 và SSE = 40. Thống kê F gần nhất với:', choices: ['1,50', '45,00', '46,50'], answer: 1, explain: 'MSR = 60/1 = 60; MSE = 40/(32 - 2) = 1,3333; F = 60/1,3333 = 45. Lựa chọn 1,50 là SSR/SSE, quên chia bậc tự do. Lựa chọn 46,50 dùng df = n - 1 = 31.' },
    { q: 'Hồi quy đơn với 32 quan sát có SSR = 60 và SSE = 40. Sai số chuẩn của ước lượng (SEE) gần nhất với:', choices: ['1,12', '1,33', '1,15'], answer: 2, explain: 'SEE = √(SSE/(n - 2)) = √(40/30) = 1,15. Lựa chọn 1,12 chia cho n = 32. Lựa chọn 1,33 là MSE, quên lấy căn.' },
    { q: 'Biểu đồ phần dư theo X cho thấy các điểm ngày càng tản rộng khi X tăng (hình phễu). Giả định nào nhiều khả năng bị vi phạm?', choices: ['Homoskedasticity', 'Independence', 'Linearity'], answer: 0, explain: 'Phương sai phần dư tăng theo X là heteroskedasticity, vi phạm giả định phương sai đồng nhất. Independence liên quan đến tương quan giữa các quan sát (ví dụ mùa vụ theo thời gian); linearity bị vi phạm khi phần dư có dạng cong.' },
    { q: 'Hồi quy với 40 quan sát cho b1 = 0,64 và sai số chuẩn của b1 là 0,25. Giá trị t tới hạn (5%, hai đuôi, df = 38) là 2,024. Kết luận về H0: b1 = 0 là:', choices: ['t = 0,39; không bác bỏ H0', 't = 2,56; bác bỏ H0', 'Không kết luận được vì chưa biết R²'], answer: 1, explain: 't = 0,64/0,25 = 2,56 > 2,024 nên bác bỏ H0. Lựa chọn t = 0,39 chia ngược sai số chuẩn cho hệ số. t-test cho hệ số không cần R².' },
    { q: 'Mô hình ước lượng Ŷ = 1,2% + 0,9X. Dự kiến X = 6%, n = 27, SEE = 1,8% và sai số chuẩn của dự báo sf = 2,0%. Với tc (df = 25, 5% hai đuôi) = 2,060, khoảng dự báo 95% của Y gần nhất với:', choices: ['2,89% đến 10,31%', '2,68% đến 10,52%', '2,48% đến 10,72%'], answer: 2, explain: 'Ŷ = 1,2 + 0,9 x 6 = 6,6%. Khoảng = 6,6 ± 2,060 x 2,0 = 2,48% đến 10,72%. Lựa chọn 2,89% đến 10,31% dùng SEE thay vì sf (khoảng quá hẹp). Lựa chọn 2,68% đến 10,52% dùng z = 1,96 thay vì tc.' },
    { q: 'Một mô hình được ước lượng là ln Y = 2,1 + 0,05X. Diễn giải đúng nhất của hệ số 0,05 là:', choices: ['X tăng 1 đơn vị thì Y tăng khoảng 5%', 'X tăng 1% thì Y tăng khoảng 0,05%', 'X tăng 1 đơn vị thì Y tăng 0,05 đơn vị'], answer: 0, explain: 'Log-lin: X tuyến tính, Y dạng log nên b1 x 100% là phần trăm thay đổi của Y khi X tăng 1 đơn vị (chính xác e^0,05 - 1 = 5,13%). Phương án "X tăng 1% thì Y tăng khoảng 0,05%" là cách đọc của log-log; phương án "Y tăng 0,05 đơn vị" là cách đọc của mô hình tuyến tính.' },
    { q: 'Ước lượng ln(Doanh số) = 3,0 + 1,2 ln(Chi quảng cáo). Nếu chi quảng cáo tăng 1%, doanh số thay đổi khoảng:', choices: ['Tăng 0,012 đơn vị', 'Tăng 1,2%', 'Tăng 120%'], answer: 1, explain: 'Log-log: b1 là độ co giãn, 1% thay đổi của X gắn với b1% thay đổi của Y, tức 1,2%. Lựa chọn "tăng 0,012 đơn vị" là cách đọc lin-log (b1/100 đơn vị). Lựa chọn "tăng 120%" nhầm b1 thành 120%.' },
    { q: 'Tương quan giữa lợi suất vượt trội của cổ phiếu và của thị trường là 0,7; độ lệch chuẩn tương ứng là 24% và 16%. Beta ước lượng bằng hồi quy gần nhất với:', choices: ['0,47', '1,50', '1,05'], answer: 2, explain: 'β = ρ x σi/σm = 0,7 x 24/16 = 1,05. Lựa chọn 0,47 đặt ngược σm/σi. Lựa chọn 1,50 là σi/σm, quên nhân tương quan.' },
    { q: 'Hồi quy đơn có R² = 0,49 và hệ số độ dốc ước lượng mang dấu âm. Hệ số tương quan giữa X và Y là:', choices: ['-0,70', '0,70', '0,49'], answer: 0, explain: 'Trong hồi quy đơn |r| = √R² = 0,70, và dấu của r cùng dấu với b1 nên r = -0,70. Lựa chọn 0,70 bỏ qua dấu; lựa chọn 0,49 nhầm R² với r.' },
    { q: 'Năm cặp quan sát (X, Y): (2; 1), (4; 4), (6; 4), (8; 6), (10; 9). Đường hồi quy ước lượng bằng OLS là:', choices: ['Ŷ = -1,87 + 1,11X', 'Ŷ = -0,60 + 0,90X', 'Ŷ = -1,20 + 0,90X'], answer: 1, explain: 'X̄ = 6; Ȳ = 4,8; Σ(X - X̄)(Y - Ȳ) = 36; Σ(X - X̄)² = 40. b̂1 = 36/40 = 0,90; b̂0 = 4,8 - 0,90 × 6 = -0,60. Lựa chọn có độ dốc 1,11 đảo ngược thành Var(X)/Cov. Lựa chọn hệ số chặn -1,20 lấy Ȳ - X̄, quên nhân b̂1.' },
    { q: 'Phát biểu nào về đường hồi quy ước lượng bằng phương pháp bình phương nhỏ nhất (OLS) là CHÍNH XÁC nhất?', choices: ['Đường hồi quy luôn đi qua điểm (X̄, Ȳ) và tổng các phần dư bằng 0', 'OLS tối thiểu hóa tổng giá trị tuyệt đối của phần dư', 'OLS tối thiểu hóa tổng bình phương khoảng cách theo phương ngang từ điểm dữ liệu đến đường hồi quy'], answer: 0, explain: 'OLS chọn b̂0, b̂1 để tối thiểu hóa Σ(Yi - Ŷi)², tổng bình phương phần dư theo phương THẲNG ĐỨNG (theo Y). Hệ quả: b̂0 = Ȳ - b̂1X̄ nên đường đi qua (X̄, Ȳ), và tổng phần dư bằng 0. Tối thiểu hóa tổng giá trị tuyệt đối là phương pháp khác; khoảng cách theo phương ngang là sai hướng.' },
    { q: 'Một nhà phân tích ước lượng Ŷ = 2,5 + 0,8X, trong đó Y là tăng trưởng doanh thu ngành bán lẻ (%) và X là tăng trưởng GDP (%). Diễn giải đúng nhất là:', choices: ['Doanh thu ngành tăng 0,8% mỗi năm bất kể GDP', 'Khi tăng trưởng doanh thu tăng 1 điểm phần trăm, tăng trưởng GDP tăng 0,8 điểm phần trăm', 'Khi tăng trưởng GDP tăng 1 điểm phần trăm, tăng trưởng doanh thu dự báo tăng 0,8 điểm phần trăm; khi GDP không tăng trưởng, dự báo là 2,5%'], answer: 2, explain: 'b̂1 = 0,8 là thay đổi của Y khi X tăng 1 đơn vị; b̂0 = 2,5 là giá trị dự báo của Y khi X = 0. Phương án "tăng 0,8% bất kể GDP" nhầm độ dốc với hệ số chặn. Phương án đảo chiều nhầm Y là biến giải thích.' },
    { q: 'Trong mô hình hồi quy tuyến tính đơn, giả định về phân phối chuẩn áp dụng cho:', choices: ['Biến độc lập X', 'Sai số (phần dư) của mô hình', 'Biến phụ thuộc Y'], answer: 1, explain: 'Giả định normality là sai số ε có phân phối chuẩn; nó cần cho kiểm định t, F và khoảng dự báo. Không có giả định X hay Y phải phân phối chuẩn: X thậm chí được giả định là không ngẫu nhiên. Đây là bẫy hay gặp trong đề.' },
    { q: 'Hồi quy doanh thu quý của một chuỗi bán lẻ theo chi phí quảng cáo. Biểu đồ phần dư theo thời gian cho thấy phần dư quý 4 hầu như luôn dương và lớn, các quý khác âm. Giả định nào nhiều khả năng bị vi phạm?', choices: ['Independence', 'Homoskedasticity', 'Normality'], answer: 0, explain: 'Phần dư lặp lại theo mùa (quý 4 luôn dương) nghĩa là các quan sát có tương quan với nhau theo thời gian: vi phạm giả định độc lập. Homoskedasticity bị vi phạm khi độ phân tán phần dư thay đổi (hình phễu). Normality liên quan đến hình dạng phân phối của sai số, không phải mẫu hình lặp theo quý.' },
    { q: 'Biểu đồ phần dư theo X có dạng chữ U: phần dư dương ở hai đầu và âm ở giữa. Cách xử lý phù hợp nhất là:', choices: ['Bỏ các quan sát ở hai đầu vì là ngoại lai', 'Giữ nguyên mô hình vì tổng phần dư vẫn bằng 0', 'Thử biến đổi dạng hàm, ví dụ dùng logarit cho Y hoặc X'], answer: 2, explain: 'Phần dư hình cong cho thấy quan hệ không tuyến tính: vi phạm giả định linearity, nên thử dạng hàm log-lin, lin-log hoặc log-log. Tổng phần dư luôn bằng 0 với OLS, không chứng minh mô hình đúng. Các điểm ở hai đầu là một mẫu hình có hệ thống, không phải ngoại lai riêng lẻ.' },
    { q: 'Một hồi quy đơn có tổng bình phương toàn phần (SST) là 250 và tổng bình phương phần dư (SSE) là 90. Hệ số xác định R² là:', choices: ['36%', '64%', '80%'], answer: 1, explain: 'R² = 1 - SSE/SST = 1 - 90/250 = 64% (SSR = 160, R² = 160/250). Lựa chọn 36% là SSE/SST, tỷ lệ KHÔNG được giải thích. Lựa chọn 80% là √R², tức |r|, không phải R².' },
    { q: 'Hồi quy đơn với 42 quan sát có SST = 500 và R² = 0,30. Thống kê F gần nhất với:', choices: ['17,14', '17,57', '0,43'], answer: 0, explain: 'SSR = 0,30 × 500 = 150; SSE = 350. MSR = 150/1 = 150; MSE = 350/(42 - 2) = 8,75. F = 150/8,75 = 17,14. Lựa chọn 17,57 chia SSE cho n - 1 = 41. Lựa chọn 0,43 là R²/(1 - R²), quên nhân với bậc tự do (n - 2).' },
    { q: 'Trong một hồi quy tuyến tính đơn, thống kê t của hệ số độ dốc (kiểm định b1 = 0) là 3,2. Thống kê F của hồi quy là:', choices: ['1,79', '6,40', '10,24'], answer: 2, explain: 'Với một biến độc lập, F-test và t-test cho b1 kiểm định cùng giả thuyết, và F = t² = 3,2² = 10,24. Lựa chọn 1,79 là √3,2. Lựa chọn 6,40 là 2t.' },
    { q: 'Hồi quy đơn với 30 quan sát cho b̂1 = 0,64 và sai số chuẩn của b̂1 là 0,20. Khoảng tin cậy 95% cho b1 gần nhất với:', choices: ['0,248 đến 1,032', '0,230 đến 1,050', '0,300 đến 0,980'], answer: 1, explain: 'df = n - 2 = 28; tc (5%, hai đuôi) = 2,048. Khoảng = 0,64 ± 2,048 × 0,20 = 0,230 đến 1,050. Khoảng không chứa 0 nên b1 khác 0 có ý nghĩa ở mức 5%. Lựa chọn 0,248 đến 1,032 dùng z = 1,96. Lựa chọn 0,300 đến 0,980 dùng t một đuôi 1,701.' },
    { q: 'Output hồi quy (42 quan sát) cho hệ số độ dốc: Coefficient 0,45; Standard error 0,30; t-statistic 1,50; p-value 0,14. Kết luận đúng nhất về H0: b1 = 0 là:', choices: ['Không bác bỏ H0 ở cả mức 5% và 10%', 'Bác bỏ H0 ở mức 10% nhưng không bác bỏ ở mức 5%', 'Bác bỏ H0 vì hệ số 0,45 lớn hơn sai số chuẩn 0,30'], answer: 0, explain: 'p-value = 0,14 lớn hơn cả 0,05 và 0,10, nên không bác bỏ H0 ở cả hai mức: X không có ý nghĩa thống kê. Phương án bác bỏ ở 10% cần p-value < 0,10. Hệ số lớn hơn sai số chuẩn chỉ cho t = 1,50, chưa vượt giá trị tới hạn (khoảng 2,02 ở mức 5%).' },
    { q: 'Một hồi quy đơn có sai số chuẩn của ước lượng SEE = 2,4 và Σ(Xi - X̄)² = 144. Sai số chuẩn của hệ số độ dốc gần nhất với:', choices: ['0,0167', '0,1291', '0,2000'], answer: 2, explain: 'sb̂1 = SEE/√Σ(Xi - X̄)² = 2,4/√144 = 2,4/12 = 0,2000. Lựa chọn 0,0167 chia cho 144, quên lấy căn mẫu số. Lựa chọn 0,1291 lấy căn của cả phân số.' },
    { q: 'Mô hình 1 hồi quy Y theo X có R² = 0,62. Mô hình 2 hồi quy ln Y theo X có R² = 0,71. Kết luận phù hợp nhất là:', choices: ['Mô hình 2 tốt hơn vì R² cao hơn', 'Không thể kết luận bằng cách so sánh trực tiếp R² vì hai mô hình có biến phụ thuộc khác nhau', 'Mô hình 1 tốt hơn vì mô hình tuyến tính luôn đáng tin hơn'], answer: 1, explain: 'R², F và SEE chỉ so sánh được giữa các mô hình có cùng biến phụ thuộc. Y và ln Y có tổng biến động khác nhau, nên R² = 0,71 và 0,62 không cùng thước đo. Phương án "mô hình tuyến tính luôn đáng tin hơn" sai: khi quan hệ cong, dạng log thường phù hợp hơn.' },
    { q: 'Mô hình ước lượng ln Y = 1,5 + 0,04X. Với X = 20, giá trị dự báo của Y gần nhất với:', choices: ['9,97', '2,30', '5,28'], answer: 0, explain: 'ln Ŷ = 1,5 + 0,04 × 20 = 2,3, nên Ŷ = e^2,3 = 9,97. Lựa chọn 2,30 là ln Ŷ, quên lấy e mũ. Lựa chọn 5,28 chỉ lấy e mũ của hệ số chặn rồi cộng 0,04 × 20.' },
    { q: 'Mô hình ước lượng Y = 5 + 2,4 ln X, trong đó Y là biên lợi nhuận (%) và X là tổng tài sản. Nếu tổng tài sản tăng 1%, biên lợi nhuận dự báo thay đổi khoảng:', choices: ['Tăng 2,4 điểm phần trăm', 'Tăng 2,4%', 'Tăng 0,024 điểm phần trăm'], answer: 2, explain: 'Lin-log: X tăng 1% thì Y thay đổi khoảng b1/100 = 2,4/100 = 0,024 đơn vị của Y (ở đây là 0,024 điểm phần trăm). "Tăng 2,4 điểm phần trăm" là cách đọc khi X tăng 1 đơn vị trong mô hình tuyến tính. "Tăng 2,4%" là cách đọc log-log (độ co giãn).' },
    { q: 'Hồi quy đơn với n = 25, SEE = 1,5, X̄ = 8 và Σ(Xi - X̄)² = 400. Sai số chuẩn của dự báo sf khi Xp = 12 gần nhất với:', choices: ['1,500', '1,559', '2,430'], answer: 1, explain: 'sf² = SEE² × [1 + 1/n + (Xp - X̄)²/Σ(Xi - X̄)²] = 2,25 × [1 + 0,04 + 16/400] = 2,25 × 1,08 = 2,430; sf = 1,559. Lựa chọn 1,500 là SEE, bỏ qua sai số ước lượng hệ số (sf luôn lớn hơn SEE). Lựa chọn 2,430 là sf², quên lấy căn.' },
    { q: 'Nhà phân tích muốn ước lượng trực tiếp độ co giãn của lượng bán theo giá: lượng bán thay đổi bao nhiêu phần trăm khi giá tăng 1%. Dạng hàm phù hợp nhất là:', choices: ['Log-log: ln Y = b0 + b1 ln X', 'Log-lin: ln Y = b0 + b1X', 'Lin-log: Y = b0 + b1 ln X'], answer: 0, explain: 'Trong log-log, b1 là độ co giãn: X tăng 1% thì Y thay đổi khoảng b1%. Log-lin cho phần trăm thay đổi của Y khi X tăng 1 ĐƠN VỊ. Lin-log cho thay đổi tuyệt đối của Y (b1/100 đơn vị) khi X tăng 1%.' },
    { q: 'Hồi quy lợi suất vượt trội của một cổ phiếu theo lợi suất vượt trội thị trường (50 tháng) cho β̂ = 1,25 với sai số chuẩn 0,10. Ở mức ý nghĩa 5% (giá trị tới hạn t hai đuôi với df = 48 là 2,011), kiểm định beta của cổ phiếu có khác 1 không cho kết quả:', choices: ['t = 12,50; bác bỏ H0: β = 1', 't = 2,50; bác bỏ H0: β = 1', 't = 2,50; không bác bỏ H0: β = 1 vì nhỏ hơn 2,682'], answer: 1, explain: 't = (β̂ - 1)/sβ̂ = (1,25 - 1)/0,10 = 2,50 > 2,011, nên bác bỏ H0: rủi ro hệ thống của cổ phiếu khác thị trường. Lựa chọn t = 12,50 kiểm định với 0 thay vì 1. Lựa chọn so với 2,682 dùng giá trị tới hạn của mức 1%, không phải 5%.' },
    { q: 'Trong 60 tháng, lợi suất vượt trội trung bình của một quỹ là 0,9%/tháng và của thị trường là 0,5%/tháng. Beta ước lượng từ hồi quy là 1,3. Alpha ước lượng (hệ số chặn) gần nhất với:', choices: ['0,40%/tháng', '1,55%/tháng', '0,25%/tháng'], answer: 2, explain: 'Đường hồi quy đi qua điểm trung bình: α̂ = 0,9% - 1,3 × 0,5% = 0,25%/tháng. Lựa chọn 0,40% lấy 0,9% - 0,5%, ngầm coi β = 1. Lựa chọn 1,55% cộng thay vì trừ phần 1,3 × 0,5%.' },
    { q: 'Hồi quy CAPM của một cổ phiếu có R² = 0,36. Độ lệch chuẩn lợi suất vượt trội của cổ phiếu là 30%. Độ lệch chuẩn của phần rủi ro riêng (phi hệ thống) gần nhất với:', choices: ['19,20%', '18,00%', '24,00%'], answer: 2, explain: 'R² là tỷ lệ PHƯƠNG SAI đến từ thị trường. Phương sai tổng = 0,09; phần riêng = (1 - 0,36) × 0,09 = 0,0576, nên σ riêng = 24,00%. Lựa chọn 19,20% nhân 0,64 trực tiếp với độ lệch chuẩn thay vì với phương sai. Lựa chọn 18,00% là độ lệch chuẩn của phần rủi ro hệ thống (√(0,36 × 0,09)).' },
  ];

  // Widget: dữ liệu giả lập cố định, kéo nhiễu, độ dốc thật và heteroskedasticity để thấy R², SEE, t thay đổi.
  const widgets = {
    regFit(el) {
      let seed = 20270;
      const rnd = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
      const N = 30;
      const xs = Array.from({ length: N }, (_, i) => 0.5 + (9.5 * i) / (N - 1));
      const zs = xs.map(() => Math.sqrt(-2 * Math.log(rnd())) * Math.cos(2 * Math.PI * rnd()));
      el.innerHTML = `
        <div class="w-row"><label>Độ dốc thật b1: <b data-o="b">0,8</b><input type="range" min="-1" max="2" step="0.1" value="0.8" data-i="b"></label>
        <label>Độ nhiễu σ: <b data-o="s">1,0</b><input type="range" min="0" max="4" step="0.1" value="1" data-i="s"></label>
        <label>Heteroskedasticity: <b data-o="h">0</b><input type="range" min="0" max="1" step="0.1" value="0" data-i="h"></label></div>
        <div class="w-out"><div data-o="svg"></div><div class="w-price" data-o="p"></div><div class="w-bar"><span data-o="bar"></span></div><div class="w-note" data-o="note"></div></div>`;
      const q = s => el.querySelector(s);
      const f = (v, d) => v.toFixed(d).replace('.', ',');
      const upd = () => {
        const b = +q('[data-i="b"]').value, sg = +q('[data-i="s"]').value, h = +q('[data-i="h"]').value;
        const ys = xs.map((x, i) => 2 + b * x + sg * zs[i] * (1 - h + (h * 2 * x) / 10));
        const xb = xs.reduce((a, v) => a + v, 0) / N, yb = ys.reduce((a, v) => a + v, 0) / N;
        let sxx = 0, sxy = 0, sst = 0;
        xs.forEach((x, i) => { sxx += (x - xb) ** 2; sxy += (x - xb) * (ys[i] - yb); sst += (ys[i] - yb) ** 2; });
        const b1 = sxy / sxx, b0 = yb - b1 * xb;
        const sse = xs.reduce((a, x, i) => a + (ys[i] - b0 - b1 * x) ** 2, 0);
        const r2 = sst > 0 ? 1 - sse / sst : 1, see = Math.sqrt(sse / (N - 2));
        const tt = see > 0 ? b1 / (see / Math.sqrt(sxx)) : Infinity;
        const W = 600, H = 260, l = 40, r = 590, tp = 10, bt = 235, ylo = -12, yhi = 26;
        const X = x => l + (x / 10) * (r - l), Y = y => bt - ((Math.max(ylo, Math.min(yhi, y)) - ylo) / (yhi - ylo)) * (bt - tp);
        let s = `<svg viewBox="0 0 ${W} ${H}" class="sv" style="max-height:300px" role="img" aria-label="Biểu đồ phân tán và đường hồi quy">`;
        [-10, 0, 10, 20].forEach(v => { s += `<line x1="${l}" y1="${Y(v)}" x2="${r}" y2="${Y(v)}" class="sv-grid"/><text x="${l - 6}" y="${Y(v) + 5}" class="sv-muted" text-anchor="end">${v}</text>`; });
        s += `<line x1="${l}" y1="${bt}" x2="${r}" y2="${bt}" class="sv-axis"/><line x1="${l}" y1="${tp}" x2="${l}" y2="${bt}" class="sv-axis"/>`;
        xs.forEach((x, i) => { s += `<line x1="${X(x)}" y1="${Y(ys[i])}" x2="${X(x)}" y2="${Y(b0 + b1 * x)}" class="sv-dash"/><circle cx="${X(x)}" cy="${Y(ys[i])}" r="4.5" class="sv-dot"/>`; });
        s += `<line x1="${X(0)}" y1="${Y(b0)}" x2="${X(10)}" y2="${Y(b0 + b1 * 10)}" class="sv-down"/>`;
        s += `<text x="${(l + r) / 2}" y="${H - 4}" class="sv-muted">X (đường đỏ: đường hồi quy OLS; nét đứt: phần dư)</text></svg>`;
        q('[data-o="svg"]').innerHTML = s;
        q('[data-o="b"]').textContent = f(b, 1);
        q('[data-o="s"]').textContent = f(sg, 1);
        q('[data-o="h"]').textContent = f(h, 1);
        q('[data-o="p"]').textContent = `Ŷ = ${f(b0, 2)} + ${f(b1, 3)}X   ·   R² = ${f(r2 * 100, 1)}%   ·   SEE = ${f(see, 2)}   ·   t(b1) = ${Number.isFinite(tt) ? f(tt, 1) : 'rất lớn'}`;
        q('[data-o="bar"]').style.width = `${Math.max(0, Math.min(100, r2 * 100))}%`;
        q('[data-o="note"]').textContent = h > 0.4 ? 'Phần dư loe rộng theo X: heteroskedasticity. b1 vẫn gần giá trị thật, nhưng sai số chuẩn và t-test không còn đáng tin.'
          : Math.abs(b) < 0.15 ? 'Độ dốc thật gần 0: R² rất thấp, t nhỏ, thường không bác bỏ được H0: b1 = 0.'
            : 'Thanh ngang là R². Nhiễu càng lớn thì R² càng thấp, SEE càng cao và t càng nhỏ; độ dốc ước lượng vẫn dao động quanh giá trị thật.';
      };
      el.addEventListener('input', upd);
      upd();
    },
  };

  window.LESSONS['QM-10'] = {
    moduleId: 'QM-10',
    calculator: 'BA II Plus',
    warmup: [
      'Nhắc lại công thức hệ số tương quan r từ hiệp phương sai và hai độ lệch chuẩn (QM-09). r = 0 có nghĩa là hai biến độc lập không?',
      'Trong kiểm định hai đuôi ở mức 5%, khi nào ta bác bỏ H0 dựa trên thống kê t và dựa trên p-value?',
      'Đoán trước: nếu vẽ lợi suất một cổ phiếu theo lợi suất VN-Index rồi kẻ đường thẳng khớp nhất, độ dốc của đường thẳng đó gọi là gì?',
    ],
    sections,
    glossary,
    practice,
    widgets,
    slides: [],
    wrapup: [
      'Không nhìn tài liệu: viết công thức b1, b0, R², SEE và F. Bậc tự do của từng dòng trong bảng ANOVA là bao nhiêu?',
      'Vì sao khoảng dự báo dùng sf mà không dùng SEE, và vì sao nó rộng ra khi X xa trung bình?',
      'Nêu cách diễn giải b1 trong mô hình log-lin, lin-log và log-log. Trong hồi quy CAPM, kiểm định nào cho biết cổ phiếu rủi ro hơn thị trường?',
    ],
  };
}());
