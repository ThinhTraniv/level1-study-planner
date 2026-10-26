// Bài giảng QM-07 - Estimation and Hypothesis Testing (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
// Mọi giá trị tới hạn (z, t, chi-square, F) đã kiểm tra bằng scipy.stats.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t, frac, keys, pages } = window.CFAH;

  // Đường phân phối chuẩn tắc với vùng bác bỏ tô màu.
  // o: {tails: 'two'|'right'|'left', c: giá trị tới hạn (dương), lab: nhãn tới hạn, mark: thống kê kiểm định (tùy chọn), caption}
  function normFig(o) {
    const W = 560, H = 200, x0 = 30, x1 = 530, base = 150, peak = 120;
    const X = z => x0 + ((z + 4) / 8) * (x1 - x0);
    const Y = z => base - peak * Math.exp(-z * z / 2);
    const curve = (a, b) => { let p = ''; for (let z = a; z <= b + 1e-9; z += 0.05) p += `${X(z).toFixed(1)},${Y(z).toFixed(1)} `; return p; };
    const region = (a, b) => `<polygon points="${X(a).toFixed(1)},${base} ${curve(a, b)}${X(b).toFixed(1)},${base}" style="fill:var(--bad-soft);stroke:none"/>`;
    let s = `<figure class="tl"><svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${o.caption}">`;
    if (o.tails !== 'right') s += region(-4, -o.c);
    if (o.tails !== 'left') s += region(o.c, 4);
    s += `<polyline points="${curve(-4, 4)}" class="flow" style="fill:none"/>`;
    s += `<line x1="${x0}" y1="${base}" x2="${x1}" y2="${base}" class="axis"/>`;
    const cl = [];
    if (o.tails !== 'right') cl.push(-o.c);
    if (o.tails !== 'left') cl.push(o.c);
    cl.forEach(z => {
      s += `<line x1="${X(z)}" y1="${base - 6}" x2="${X(z)}" y2="${base + 6}" class="axis"/>`;
      s += `<text x="${X(z)}" y="${base + 22}" class="tick">${z < 0 ? '-' : ''}${o.lab}</text>`;
      s += `<text x="${X(z < 0 ? -3.2 : 3.2)}" y="${base - 30}" class="pv">Bác bỏ H0</text>`;
    });
    s += `<text x="${X(0)}" y="${base - 50}">Không bác bỏ H0</text>`;
    s += `<text x="${X(0)}" y="${base + 22}" class="tick">0</text>`;
    if (o.mark !== undefined) {
      s += `<line x1="${X(o.mark)}" y1="${base}" x2="${X(o.mark)}" y2="${base - 90}" class="pv"/><text x="${X(o.mark)}" y="${base - 96}" class="pv">${o.markLab}</text>`;
    }
    return `${s}</svg><figcaption>${o.caption}</figcaption></figure>`;
  }

  const sections = [
    {
      title: '1. Bức tranh lớn: từ mẫu suy ra tổng thể',
      minutes: 5,
      html: `
<p>Ta gần như không bao giờ quan sát được toàn bộ ${t('population', 'tổng thể (population)')}: không biết lợi suất "thật" của một quỹ, không biết hệ số tương quan "thật" giữa hai cổ phiếu. Ta chỉ có một ${t('sample', 'mẫu (sample)')} dữ liệu quá khứ. Module này trả lời câu hỏi:</p>
<div class="key">Từ một mẫu, ta nói được gì về tổng thể, và nói với mức tin cậy bao nhiêu?</div>
<ol>
  <li><b>Lấy mẫu và ước lượng</b>: chọn mẫu thế nào cho đại diện, sai số chọn mẫu, ${t('clt', 'định lý giới hạn trung tâm')}, ${t('se', 'sai số chuẩn')} và ${t('ci', 'khoảng tin cậy')}. Ứng với LOS 1.</li>
  <li><b>Kiểm định giả thuyết</b>: đặt H0 và Ha, chọn thống kê kiểm định, mức ý nghĩa, sai lầm loại I/II, power, p-value; kiểm định trung bình, hiệu hai trung bình, phương sai, tương quan. Ứng với LOS 2.</li>
  <li><b>Tham số và phi tham số</b>: khi giả định phân phối không đứng vững hoặc dữ liệu là thứ hạng, dùng kiểm định phi tham số (Spearman); kiểm định tính độc lập bằng bảng tương liên. Ứng với LOS 3.</li>
</ol>
<p class="tip"><b>Một công thức dùng cho gần hết module:</b> thống kê kiểm định = (giá trị mẫu - giá trị giả thuyết) / sai số chuẩn. Nắm chắc "sai số chuẩn" là nắm được nửa bài.</p>`,
    },
    {
      title: '2. Phương pháp chọn mẫu và sai số chọn mẫu',
      minutes: 10,
      html: `
<p>Có hai nhóm phương pháp chọn mẫu:</p>
<table class="plain"><thead><tr><th>Nhóm</th><th>Phương pháp</th><th>Cách làm</th><th>Khi nào dùng</th></tr></thead><tbody>
<tr><td rowspan="4">${t('probsamp', 'Chọn mẫu xác suất')}<br><small>mỗi phần tử có xác suất được chọn biết trước, khác 0</small></td><td>${t('srs', 'Simple random')}</td><td>Mọi phần tử có cùng xác suất, chọn ngẫu nhiên hoàn toàn</td><td>Tổng thể khá đồng nhất</td></tr>
<tr><td>${t('systematic', 'Systematic')}</td><td>Chọn mỗi phần tử thứ k trong danh sách</td><td>Danh sách dài, không có chu kỳ ẩn</td></tr>
<tr><td>${t('stratified', 'Stratified random')}</td><td>Chia tổng thể thành các nhóm con (strata) theo đặc điểm, rồi chọn ngẫu nhiên trong <b>từng</b> nhóm, thường theo tỷ trọng</td><td>Mô phỏng chỉ số trái phiếu theo xếp hạng và kỳ hạn</td></tr>
<tr><td>${t('cluster', 'Cluster')}</td><td>Chia thành các cụm, mỗi cụm là "bản thu nhỏ" của tổng thể; chọn ngẫu nhiên <b>một số cụm</b> và lấy cả cụm (one-stage) hoặc lấy mẫu trong cụm (two-stage)</td><td>Tiết kiệm chi phí, nhưng kém chính xác hơn</td></tr>
<tr><td rowspan="2">${t('nonprob', 'Chọn mẫu phi xác suất')}</td><td>${t('convenience', 'Convenience')}</td><td>Lấy dữ liệu dễ lấy nhất</td><td>Khảo sát sơ bộ, nhanh, rẻ</td></tr>
<tr><td>${t('judgmental', 'Judgmental')}</td><td>Người nghiên cứu tự chọn theo kinh nghiệm</td><td>Kiểm toán chọn giao dịch rủi ro; chất lượng phụ thuộc người chọn</td></tr>
</tbody></table>
<p class="warn"><b>Bẫy hay gặp: stratified hay cluster?</b> Stratified chọn <b>từ mọi nhóm</b> (các nhóm khác nhau, bên trong đồng nhất). Cluster chọn <b>một vài cụm</b> (mỗi cụm giống tổng thể, bên trong đa dạng).</p>

<h4>Sai số chọn mẫu</h4>
<div class="formula">${t('samplingerror', 'Sampling error')} của trung bình = X̄ - μ</div>
<p>Đây là chênh lệch tự nhiên do ta chỉ quan sát một phần tổng thể; nó giảm khi mẫu lớn hơn. Khác với ${t('samplingbias', 'thiên lệch chọn mẫu')} (ví dụ chỉ hỏi những người ngồi gần mình, hay chỉ dùng các quỹ còn tồn tại): thiên lệch <b>không</b> biến mất khi tăng cỡ mẫu.</p>
<div class="example"><div class="ex-h">Ví dụ 2.1</div>
<p>Một nhà phân tích muốn mô phỏng chỉ số trái phiếu gồm 3.000 trái phiếu. Anh chia chỉ số thành 12 ô theo 3 mức xếp hạng tín nhiệm và 4 nhóm kỳ hạn, rồi chọn ngẫu nhiên trái phiếu trong mỗi ô theo tỷ trọng của ô trong chỉ số. Đây là phương pháp gì?</p>
<details><summary>Xem lời giải</summary><p><b>Stratified random sampling.</b> Mỗi ô là một stratum, mẫu chọn từ <b>tất cả</b> các ô. Nếu anh chỉ chọn ngẫu nhiên 3 ô rồi lấy toàn bộ trái phiếu trong 3 ô đó, đó mới là cluster sampling.</p></details></div>`,
    },
    {
      title: '3. Định lý giới hạn trung tâm và sai số chuẩn',
      minutes: 10,
      html: `
<p>Nếu lấy rất nhiều mẫu cỡ n và tính trung bình của mỗi mẫu, các trung bình đó tạo thành ${t('samplingdist', 'phân phối mẫu (sampling distribution)')} của X̄.</p>
<div class="key"><b>${t('clt', 'Central limit theorem')}</b>: với n đủ lớn (quy ước n ≥ 30), phân phối của X̄ <b>xấp xỉ chuẩn</b>, <b>bất kể</b> tổng thể có phân phối gì (miễn có phương sai hữu hạn). Trung bình của X̄ bằng μ, phương sai của X̄ bằng σ²/n.</div>
<h4>Sai số chuẩn của trung bình mẫu</h4>
<div class="formula">σ<sub>X̄</sub> = ${frac('σ', '√n')} (biết σ) &nbsp;&nbsp;&nbsp;&nbsp; s<sub>X̄</sub> = ${frac('s', '√n')} (không biết σ, dùng độ lệch chuẩn mẫu s)</div>
<p>${t('se', 'Standard error')} là độ lệch chuẩn của X̄, đo mức "dao động" của trung bình mẫu quanh μ. Nó giảm theo <b>căn bậc hai</b> của n: muốn sai số chuẩn giảm một nửa, phải tăng cỡ mẫu <b>gấp 4</b>.</p>
<table class="plain"><thead><tr><th>n (σ = 20%)</th><th>25</th><th>100</th><th>400</th><th>1.600</th></tr></thead><tbody>
<tr><td>Sai số chuẩn</td><td>4%</td><td>2%</td><td>1%</td><td>0,5%</td></tr></tbody></table>
<div class="example"><div class="ex-h">Ví dụ 3.1</div>
<p>Một quỹ có 36 tháng dữ liệu, lợi suất trung bình tháng 1,5%, độ lệch chuẩn mẫu 4,8%. Tính và giải thích sai số chuẩn.</p>
<details><summary>Xem lời giải</summary><p>s<sub>X̄</sub> = 4,8% / √36 = 4,8% / 6 = <b>0,8%</b>. Nếu lặp lại việc lấy mẫu 36 tháng nhiều lần, trung bình mẫu sẽ dao động quanh lợi suất thật với độ lệch chuẩn khoảng 0,8%. Đừng nhầm với 4,8%: đó là độ biến động của <b>từng tháng</b>, không phải của <b>trung bình</b>.</p></details></div>
<div class="example"><div class="ex-h">Ví dụ 3.2 - Bấm máy</div>
<p>Lợi suất 5 tháng: 2%, -1%, 3%, 1,5%, 0,5%. Tính trung bình, độ lệch chuẩn mẫu và sai số chuẩn.</p>
<details><summary>Xem lời giải</summary>
${keys([
  ['Mở DATA, xóa dữ liệu cũ', '[2ND] [7] [2ND] [CE/C]', 'X01 = 0'],
  ['Nhập giá trị 1 (bỏ qua Y01)', '2 [ENTER] [↓] [↓]', 'X02'],
  ['Nhập tiếp các giá trị', '1 [+/-] [ENTER] [↓] [↓] 3 [ENTER] [↓] [↓] 1.5 [ENTER] [↓] [↓] 0.5 [ENTER]', 'X05 = 0.5'],
  ['Mở STAT, chọn 1-V', '[2ND] [8] (bấm [2ND] [ENTER] đến khi hiện 1-V)', '1-V'],
  ['Xem kết quả', '[↓] [↓] [↓]', 'n = 5, x̄ = 1.2, Sx = 1.5248'],
])}
<p>X̄ = 1,2%; s = 1,5248%; s<sub>X̄</sub> = 1,5248 / √5 = <b>0,6819%</b>. Lưu ý dùng <b>Sx</b> (chia n - 1), không dùng σx (chia n).</p></details></div>`,
    },
    {
      title: '4. Khoảng tin cậy: z hay t?',
      minutes: 10,
      html: `
<div class="formula">${t('ci', 'Khoảng tin cậy')} = ước lượng điểm ± ${t('reliability', 'hệ số tin cậy')} × sai số chuẩn</div>
<p>Khoảng tin cậy 95% nghĩa là: nếu lặp lại việc lấy mẫu và lập khoảng theo cùng cách nhiều lần, khoảng 95% số khoảng sẽ chứa μ thật. Hệ số tin cậy z thường gặp:</p>
<table class="plain"><thead><tr><th>Mức tin cậy</th><th>90%</th><th>95%</th><th>99%</th></tr></thead><tbody>
<tr><td>z<sub>α/2</sub></td><td>1,645</td><td>1,960</td><td>2,576</td></tr></tbody></table>
<h4>Chọn z hay ${t('tdist', 't')}?</h4>
<table class="plain"><thead><tr><th>Tình huống</th><th>Mẫu nhỏ (n &lt; 30)</th><th>Mẫu lớn (n ≥ 30)</th></tr></thead><tbody>
<tr><td>Tổng thể chuẩn, biết σ</td><td>z</td><td>z</td></tr>
<tr><td>Tổng thể chuẩn, không biết σ</td><td>t (df = n - 1)</td><td>t (z chấp nhận được)</td></tr>
<tr><td>Tổng thể không chuẩn, biết σ</td><td>Không có công thức</td><td>z (nhờ CLT)</td></tr>
<tr><td>Tổng thể không chuẩn, không biết σ</td><td>Không có công thức</td><td>t (z chấp nhận được)</td></tr>
</tbody></table>
<p>Phân phối t có đuôi dày hơn chuẩn, nên hệ số tin cậy lớn hơn và khoảng rộng hơn. Khi df tăng, t tiến về z (df = 35: 2,030; df = 120: khoảng 1,98; vô cùng: 1,96).</p>
<div class="example"><div class="ex-h">Ví dụ 4.1</div>
<p>(a) Biết σ = 24%, mẫu 64 năm có trung bình 10%. Lập khoảng tin cậy 95% cho μ.<br>(b) Quỹ ở ví dụ 3.1 (n = 36, X̄ = 1,5%, s = 4,8%, không biết σ). Lập khoảng tin cậy 95%.</p>
<details><summary>Xem lời giải</summary>
<p>(a) Sai số chuẩn = 24% / 8 = 3%. Khoảng = 10% ± 1,96 × 3% = <b>4,12% đến 15,88%</b>.</p>
<p>(b) Sai số chuẩn = 0,8%; t<sub>0,025; 35</sub> = 2,030. Khoảng = 1,5% ± 2,030 × 0,8% = 1,5% ± 1,624% = <b>-0,124% đến 3,124%</b>. Khoảng chứa 0, nên ở mức 5% ta <b>không</b> khẳng định được lợi suất trung bình thật khác 0. Nếu dùng z (1,96) thì khoảng là -0,068% đến 3,068%, hơi hẹp hơn.</p></details></div>
<h4>Ước lượng sai số chuẩn bằng tái chọn mẫu (resampling)</h4>
<p>Khi không có công thức cho sai số chuẩn (ví dụ của trung vị hay hệ số Sharpe), có thể dùng máy tính:</p>
<ul>
<li>${t('bootstrap', 'Bootstrap')}: rút lặp lại <b>có hoàn lại</b> từ chính mẫu, mỗi lần n quan sát, tính thống kê; độ lệch chuẩn của các kết quả là ước lượng sai số chuẩn. Học kỹ ở QM-09.</li>
<li>${t('jackknife', 'Jackknife')}: lần lượt <b>bỏ ra 1 quan sát</b>, tính lại thống kê trên n - 1 quan sát còn lại; được n kết quả, dùng để ước lượng sai số chuẩn và độ chệch.</li>
</ul>
<p class="warn">Khoảng tin cậy rộng hơn khi: mức tin cậy cao hơn, mẫu nhỏ hơn, dùng t thay cho z, độ phân tán lớn hơn.</p>`,
    },
    {
      title: '5. Quy trình kiểm định giả thuyết, H0 và Ha, một phía và hai phía',
      minutes: 12,
      html: `
<h4>Sáu bước</h4>
<ol>
<li>Phát biểu giả thuyết: ${t('h0', 'H0')} và ${t('ha', 'Ha')}.</li>
<li>Xác định ${t('teststat', 'thống kê kiểm định')} và phân phối của nó.</li>
<li>Chọn ${t('alpha', 'mức ý nghĩa α')}.</li>
<li>Phát biểu ${t('decisionrule', 'quy tắc quyết định')} (giá trị tới hạn).</li>
<li>Thu thập dữ liệu, tính thống kê kiểm định.</li>
<li>Ra quyết định thống kê: bác bỏ hoặc không bác bỏ H0.</li>
</ol>
<p>Sau bước 6 còn một quyết định kinh tế/đầu tư: kết quả có ý nghĩa thống kê chưa chắc có ý nghĩa kinh tế (sau chi phí giao dịch, thuế, rủi ro).</p>
<h4>H0 và Ha</h4>
<div class="key">H0 là điều ta muốn <b>bác bỏ</b>, luôn chứa dấu bằng (=, ≤, ≥). Ha là điều ta muốn <b>chứng minh</b> (≠, &gt;, &lt;). Ta chỉ "bác bỏ" hoặc "không bác bỏ" H0, <b>không bao giờ "chấp nhận" H0</b>.</div>
<table class="plain"><thead><tr><th>Niềm tin của nhà phân tích</th><th>H0</th><th>Ha</th><th>Loại kiểm định</th></tr></thead><tbody>
<tr><td>Lợi suất khác 0</td><td>μ = 0</td><td>μ ≠ 0</td><td>${t('twotail', 'Hai phía')}: bác bỏ ở cả hai đuôi</td></tr>
<tr><td>Lợi suất lớn hơn 2%</td><td>μ ≤ 2%</td><td>μ &gt; 2%</td><td>${t('onetail', 'Một phía')}: bác bỏ ở đuôi phải</td></tr>
<tr><td>Chi phí nhỏ hơn 1%</td><td>μ ≥ 1%</td><td>μ &lt; 1%</td><td>Một phía: bác bỏ ở đuôi trái</td></tr>
</tbody></table>
${normFig({ tails: 'two', c: 1.96, lab: '1,96', caption: 'Hai phía, α = 5%: mỗi đuôi 2,5%. Bác bỏ H0 nếu |z| > 1,96.' })}
${normFig({ tails: 'right', c: 1.645, lab: '1,645', caption: 'Một phía (đuôi phải), α = 5%: toàn bộ 5% nằm ở một đuôi. Bác bỏ H0 nếu z > 1,645.' })}
<table class="plain"><thead><tr><th>Giá trị tới hạn z</th><th>α = 10%</th><th>α = 5%</th><th>α = 1%</th></tr></thead><tbody>
<tr><td>Một phía</td><td>1,282</td><td>1,645</td><td>2,326</td></tr>
<tr><td>Hai phía</td><td>±1,645</td><td>±1,960</td><td>±2,576</td></tr></tbody></table>
<p class="tip"><b>Mẹo:</b> đuôi bác bỏ nằm theo chiều của Ha. Ha có "&gt;" thì bác bỏ ở đuôi phải; "&lt;" thì đuôi trái; "≠" thì cả hai đuôi, mỗi đuôi α/2.</p>`,
    },
    {
      title: '6. Thống kê kiểm định, sai lầm loại I và II, power, p-value',
      minutes: 12,
      html: `
<div class="formula">Thống kê kiểm định = ${frac('giá trị mẫu - giá trị theo H0', 'sai số chuẩn')} &nbsp;&nbsp;&nbsp; ví dụ: t = ${frac('X̄ - μ<sub>0</sub>', 's / √n')}</div>
<h4>Hai loại sai lầm</h4>
<table class="plain"><thead><tr><th>Quyết định \\ Thực tế</th><th>H0 đúng</th><th>H0 sai</th></tr></thead><tbody>
<tr><td>Không bác bỏ H0</td><td>Đúng (xác suất 1 - α)</td><td><b>${t('type2', 'Sai lầm loại II')}</b> (xác suất β)</td></tr>
<tr><td>Bác bỏ H0</td><td><b>${t('type1', 'Sai lầm loại I')}</b> (xác suất α)</td><td>Đúng: ${t('power', 'power')} = 1 - β</td></tr>
</tbody></table>
<ul>
<li>Mức ý nghĩa α = xác suất sai lầm loại I (bác bỏ một H0 đúng).</li>
<li>${t('power', 'Power')} = xác suất bác bỏ đúng một H0 sai = 1 - β.</li>
<li>Với n cố định, giảm α thì β tăng (power giảm). Cách duy nhất giảm <b>cả hai</b> là tăng cỡ mẫu.</li>
</ul>
<p class="warn"><b>Ví dụ dễ nhầm:</b> H0 "nhà quản lý quỹ không có kỹ năng". Kết luận quỹ có kỹ năng trong khi thực ra không có: bác bỏ H0 đúng, là <b>loại I</b>. Bỏ sót một nhà quản lý thực sự giỏi: <b>loại II</b>.</p>
<h4>p-value</h4>
<p>${t('pvalue', 'p-value')} là mức ý nghĩa <b>nhỏ nhất</b> mà tại đó ta bác bỏ được H0; cũng là xác suất (khi H0 đúng) quan sát được thống kê cực đoan bằng hoặc hơn giá trị đã tính.</p>
<div class="key">p-value &lt; α → bác bỏ H0. &nbsp;&nbsp; p-value ≥ α → không bác bỏ H0.</div>
<div class="example"><div class="ex-h">Ví dụ 6.1</div>
<p>Kiểm định hai phía cho z = 2,10. Tính p-value và kết luận ở mức 5% và 1%.</p>
<details><summary>Xem lời giải</summary><p>Diện tích đuôi phải bên ngoài 2,10 là 1,79%; hai phía nên p-value = 2 × 1,79% = <b>3,57%</b>. Bác bỏ H0 ở mức 5% (3,57% &lt; 5%) nhưng không bác bỏ ở mức 1%. Nếu là kiểm định một phía (Ha: μ &gt; μ0), p-value chỉ là 1,79%.</p></details></div>
<h4>Thử ngay: kéo thống kê kiểm định</h4>
<div class="widget" data-widget="hypoTest"></div>
<p class="tip">Kiểm định bằng khoảng tin cậy cho cùng kết luận với kiểm định hai phía: nếu giá trị μ0 trong H0 nằm <b>ngoài</b> khoảng tin cậy (1 - α), bác bỏ H0.</p>`,
    },
    {
      title: '7. Kiểm định trung bình: một mẫu, hai mẫu độc lập, mẫu cặp',
      minutes: 14,
      html: `
<h4>a) Một trung bình (one-sample t-test)</h4>
<div class="formula">t = ${frac('X̄ - μ<sub>0</sub>', 's / √n')} &nbsp;&nbsp; df = n - 1</div>
<div class="example"><div class="ex-h">Ví dụ 7.1</div>
<p>Một quỹ có 49 tháng alpha, trung bình 0,6%/tháng, độ lệch chuẩn mẫu 1,75%. Ở mức 5%, alpha trung bình có khác 0 không?</p>
<details><summary>Xem lời giải</summary>
<p>H0: μ = 0; Ha: μ ≠ 0. Sai số chuẩn = 1,75% / 7 = 0,25%. t = 0,6 / 0,25 = <b>2,40</b>.<br>
Giá trị tới hạn t<sub>0,025; 48</sub> = ±2,011. Vì 2,40 &gt; 2,011, <b>bác bỏ H0</b>: alpha khác 0 có ý nghĩa thống kê (p-value hai phía khoảng 2,0%).</p></details></div>

<h4>b) Hiệu hai trung bình, hai mẫu độc lập (giả định phương sai bằng nhau)</h4>
<div class="formula">t = ${frac('(X̄<sub>1</sub> - X̄<sub>2</sub>) - (μ<sub>1</sub> - μ<sub>2</sub>)', '√(s<sub>p</sub>²/n<sub>1</sub> + s<sub>p</sub>²/n<sub>2</sub>)')} &nbsp;&nbsp; s<sub>p</sub>² = ${frac('(n<sub>1</sub> - 1)s<sub>1</sub>² + (n<sub>2</sub> - 1)s<sub>2</sub>²', 'n<sub>1</sub> + n<sub>2</sub> - 2')} &nbsp;&nbsp; df = n<sub>1</sub> + n<sub>2</sub> - 2</div>
<p>s<sub>p</sub>² là ${t('pooled', 'phương sai gộp')}. Điều kiện: hai mẫu <b>độc lập</b>, tổng thể xấp xỉ chuẩn.</p>
<div class="example"><div class="ex-h">Ví dụ 7.2</div>
<p>Ngành A: 25 tháng, trung bình 1,2%, s = 2,0%. Ngành B: 31 tháng, trung bình 0,4%, s = 2,4%. Ở mức 5%, lợi suất trung bình hai ngành có khác nhau không?</p>
<details><summary>Xem lời giải</summary>
<p>s<sub>p</sub>² = (24 × 4 + 30 × 5,76) / 54 = <b>4,9778</b>. Sai số chuẩn = √(4,9778/25 + 4,9778/31) = <b>0,5997%</b>.<br>
t = (1,2 - 0,4) / 0,5997 = <b>1,334</b>; df = 54, giá trị tới hạn ±2,005. Vì 1,334 &lt; 2,005, <b>không bác bỏ H0</b>: chênh lệch 0,8%/tháng chưa đủ bằng chứng thống kê.</p></details></div>

<h4>c) Mẫu cặp (paired comparisons test)</h4>
<p>Khi hai mẫu <b>phụ thuộc</b> (cùng công ty trước và sau sự kiện, hai quỹ trong cùng các tháng), tính hiệu d<sub>i</sub> của từng cặp rồi kiểm định trung bình của d:</p>
<div class="formula">t = ${frac('d̄ - μ<sub>d0</sub>', 's<sub>d</sub> / √n')} &nbsp;&nbsp; df = n - 1 (n = số cặp)</div>
<div class="example"><div class="ex-h">Ví dụ 7.3</div>
<p>16 tháng, chênh lệch lợi suất giữa quỹ chủ động và chỉ số: d̄ = 0,75%, s<sub>d</sub> = 1,2%. Kiểm định hai phía ở mức 5%.</p>
<details><summary>Xem lời giải</summary>
<p>Sai số chuẩn = 1,2 / 4 = 0,3%. t = 0,75 / 0,3 = <b>2,50</b>; df = 15, giá trị tới hạn ±2,131. <b>Bác bỏ H0</b> (p-value khoảng 2,5%).</p></details></div>
<p class="warn"><b>Chọn test nào?</b> Cùng thời kỳ, cùng đối tượng, hai chuỗi tương quan với nhau → <b>paired</b>. Hai nhóm tách biệt (hai ngành, hai giai đoạn không chồng nhau) → <b>difference in means</b>. Dùng nhầm test độc lập cho dữ liệu cặp sẽ bỏ qua tương quan và làm sai lệch sai số chuẩn.</p>`,
    },
    {
      title: '8. Kiểm định phương sai: chi-square và F',
      minutes: 10,
      html: `
<h4>a) Một phương sai: ${t('chisq', 'chi-square')}</h4>
<div class="formula">χ² = ${frac('(n - 1) s²', 'σ<sub>0</sub>²')} &nbsp;&nbsp; df = n - 1</div>
<p>Phân phối chi-square không âm và lệch phải, nên giá trị tới hạn hai phía <b>không đối xứng</b>: phải tra riêng đuôi trái và đuôi phải.</p>
<div class="example"><div class="ex-h">Ví dụ 8.1</div>
<p>Mẫu 25 tháng có độ lệch chuẩn 5,2%. Kiểm định H0: σ = 4% (tức σ² = 16) với Ha: σ ≠ 4% ở mức 5%.</p>
<details><summary>Xem lời giải</summary>
<p>χ² = 24 × 5,2² / 4² = 24 × 27,04 / 16 = <b>40,56</b>. df = 24, giá trị tới hạn: đuôi trái 12,401, đuôi phải 39,364.<br>
40,56 &gt; 39,364 → <b>bác bỏ H0</b>. (Nếu Ha: σ &gt; 4%, giá trị tới hạn một phía là 36,415, càng bác bỏ.)</p></details></div>

<h4>b) So sánh hai phương sai: ${t('ftest', 'F-test')}</h4>
<div class="formula">F = ${frac('s<sub>1</sub>²', 's<sub>2</sub>²')} &nbsp;&nbsp; df = (n<sub>1</sub> - 1, n<sub>2</sub> - 1)</div>
<p>Quy ước: đặt <b>phương sai lớn hơn ở tử số</b>, chỉ cần so với giá trị tới hạn đuôi phải (với kiểm định hai phía, dùng α/2 ở đuôi phải). Hai mẫu phải độc lập, tổng thể chuẩn.</p>
<div class="example"><div class="ex-h">Ví dụ 8.2</div>
<p>Quỹ X: 31 tháng, s = 6%. Quỹ Y: 41 tháng, s = 4,5%. Ở mức 5%, (a) phương sai hai quỹ có khác nhau không? (b) phương sai X có lớn hơn Y không?</p>
<details><summary>Xem lời giải</summary>
<p>F = 36 / 20,25 = <b>1,778</b>, df = (30, 40).<br>
(a) Hai phía: giá trị tới hạn F<sub>0,025</sub> = 1,943. 1,778 &lt; 1,943 → <b>không bác bỏ</b>.<br>
(b) Một phía: giá trị tới hạn F<sub>0,05</sub> = 1,744. 1,778 &gt; 1,744 → <b>bác bỏ</b>, phương sai X lớn hơn.<br>Cùng dữ liệu, kết luận khác nhau chỉ vì cách đặt Ha.</p></details></div>`,
    },
    {
      title: '9. Tương quan; tham số và phi tham số',
      minutes: 10,
      html: `
<h4>a) Kiểm định hệ số tương quan Pearson (tham số)</h4>
<div class="formula">t = ${frac('r √(n - 2)', '√(1 - r²)')} &nbsp;&nbsp; df = n - 2 &nbsp;&nbsp; (H0: ρ = 0)</div>
<div class="example"><div class="ex-h">Ví dụ 9.1</div>
<p>Tương quan mẫu giữa lợi suất hai cổ phiếu là 0,30 với n = 50. Kiểm định H0: ρ = 0 ở mức 5% hai phía.</p>
<details><summary>Xem lời giải</summary>
<p>t = 0,30 × √48 / √(1 - 0,09) = 0,30 × 6,928 / 0,954 = <b>2,179</b>. df = 48, giá trị tới hạn ±2,011 → <b>bác bỏ H0</b>, tương quan dương có ý nghĩa. Bẫy: dùng df = n - 1 hoặc quên mẫu số √(1 - r²).</p></details></div>
<p>Cùng một r, mẫu càng lớn thì t càng lớn: r = 0,1 rất yếu nhưng vẫn có thể "có ý nghĩa" với vài nghìn quan sát.</p>

<h4>b) ${t('parametric', 'Tham số')} hay ${t('nonparam', 'phi tham số')}?</h4>
<p>Kiểm định tham số kiểm định một <b>tham số</b> (μ, σ², ρ) và cần <b>giả định phân phối</b> (thường là chuẩn). Kiểm định phi tham số dùng khi:</p>
<ol>
<li>Dữ liệu không thỏa giả định phân phối (lệch mạnh, có ${t('outlier', 'giá trị ngoại lai')}) và mẫu nhỏ.</li>
<li>Dữ liệu là <b>thứ hạng</b> (ordinal), ví dụ xếp hạng quỹ.</li>
<li>Câu hỏi không xoay quanh một tham số, ví dụ: dãy số có ngẫu nhiên không, hai biến có độc lập không.</li>
</ol>
<p>Đánh đổi: phi tham số ít giả định hơn nhưng dùng ít thông tin hơn, nên khi giả định tham số đúng thì kiểm định tham số mạnh hơn (power cao hơn).</p>
<table class="plain"><thead><tr><th>Mục đích</th><th>Tham số</th><th>Phi tham số tương ứng</th></tr></thead><tbody>
<tr><td>Một trung bình</td><td>t-test</td><td>Wilcoxon signed-rank</td></tr>
<tr><td>Hai trung bình độc lập</td><td>t-test (pooled)</td><td>Mann-Whitney U</td></tr>
<tr><td>Mẫu cặp</td><td>Paired t-test</td><td>Wilcoxon signed-rank, sign test</td></tr>
<tr><td>Tương quan</td><td>Pearson (t, df = n - 2)</td><td>${t('spearman', 'Spearman rank correlation')}</td></tr>
</tbody></table>

<h4>c) Hệ số tương quan hạng Spearman</h4>
<div class="formula">r<sub>S</sub> = 1 - ${frac('6 Σ d<sub>i</sub>²', 'n (n² - 1)')}</div>
<p>Xếp hạng từng biến, d<sub>i</sub> là chênh lệch thứ hạng của quan sát i. Mẫu nhỏ: tra bảng riêng của Spearman. Mẫu lớn (n &gt; 30): dùng đúng công thức t ở trên với r<sub>S</sub>, df = n - 2.</p>
<div class="example"><div class="ex-h">Ví dụ 9.2</div>
<p>10 quỹ được xếp hạng theo Sharpe năm ngoái (1 đến 10) và năm nay lần lượt là 2, 1, 4, 3, 6, 5, 8, 10, 7, 9. (a) Tính r<sub>S</sub>. (b) Nếu một nghiên cứu khác có r<sub>S</sub> = 0,35 với n = 40, kết luận ở mức 5%?</p>
<details><summary>Xem lời giải</summary>
<p>(a) d = -1, 1, -1, 1, -1, 1, -1, -2, 2, 1; Σd² = 16. r<sub>S</sub> = 1 - 6 × 16 / (10 × 99) = <b>0,903</b>: xếp hạng rất ổn định.<br>
(b) t = 0,35 × √38 / √(1 - 0,1225) = <b>2,303</b>; df = 38, giá trị tới hạn 2,024 → bác bỏ H0, có tương quan hạng.</p></details></div>`,
    },
    {
      title: '10. Kiểm định tính độc lập bằng bảng tương liên',
      minutes: 8,
      html: `
<p>Khi hai biến là <b>phân loại</b> (categorical), ví dụ phong cách quỹ và xếp hạng ESG, ta xếp số quan sát vào ${t('contingency', 'bảng tương liên (contingency table)')} và kiểm định H0: hai biến <b>độc lập</b>. Đây là kiểm định phi tham số.</p>
<div class="formula">E<sub>ij</sub> = ${frac('tổng hàng i × tổng cột j', 'tổng số quan sát')} &nbsp;&nbsp; χ² = Σ ${frac('(O<sub>ij</sub> - E<sub>ij</sub>)²', 'E<sub>ij</sub>')} &nbsp;&nbsp; df = (r - 1)(c - 1)</div>
<p>O là tần số quan sát, E là tần số kỳ vọng nếu H0 đúng; r, c là số hàng và số cột. Luôn là kiểm định <b>một phía, đuôi phải</b> (chênh lệch càng lớn, χ² càng lớn).</p>
<div class="example"><div class="ex-h">Ví dụ 10.1</div>
<table class="plain"><thead><tr><th>Quan sát (O)</th><th>ESG thấp</th><th>ESG trung bình</th><th>ESG cao</th><th>Tổng</th></tr></thead><tbody>
<tr><td>Growth</td><td>30</td><td>50</td><td>40</td><td>120</td></tr>
<tr><td>Value</td><td>40</td><td>25</td><td>15</td><td>80</td></tr>
<tr><td>Tổng</td><td>70</td><td>75</td><td>55</td><td>200</td></tr></tbody></table>
<p>Ở mức 5%, phong cách quỹ và xếp hạng ESG có độc lập không?</p>
<details><summary>Xem lời giải</summary>
<p>Tần số kỳ vọng: Growth-thấp = 120 × 70 / 200 = 42; tương tự được hàng Growth: 42, 45, 33; hàng Value: 28, 30, 22.</p>
<p>χ² = (30-42)²/42 + (50-45)²/45 + (40-33)²/33 + (40-28)²/28 + (25-30)²/30 + (15-22)²/22<br>
= 3,429 + 0,556 + 1,485 + 5,143 + 0,833 + 2,227 = <b>13,67</b>.</p>
<p>df = (2 - 1)(3 - 1) = 2; giá trị tới hạn 5% là 5,991. 13,67 &gt; 5,991 → <b>bác bỏ H0</b>: phong cách quỹ và xếp hạng ESG không độc lập.</p></details></div>
<p class="warn">Bẫy: df không phải "số ô - 1" (= 5) mà là (r - 1)(c - 1) = 2.</p>`,
    },
    {
      title: '11. Bảng tổng hợp, tóm tắt và bẫy thường gặp',
      minutes: 6,
      html: `
<h4>Test nào - thống kê nào - bậc tự do</h4>
<table class="plain"><thead><tr><th>Kiểm định</th><th>Thống kê</th><th>Công thức</th><th>Bậc tự do</th></tr></thead><tbody>
<tr><td>Một trung bình (không biết σ)</td><td>t</td><td>(X̄ - μ0) / (s/√n)</td><td>n - 1</td></tr>
<tr><td>Một trung bình, biết σ hoặc n lớn</td><td>z</td><td>(X̄ - μ0) / (σ/√n)</td><td>-</td></tr>
<tr><td>Hiệu hai trung bình, mẫu độc lập</td><td>t</td><td>(X̄1 - X̄2) / √(sp²/n1 + sp²/n2)</td><td>n1 + n2 - 2</td></tr>
<tr><td>Mẫu cặp</td><td>t</td><td>d̄ / (sd/√n)</td><td>n - 1</td></tr>
<tr><td>Một phương sai</td><td>χ²</td><td>(n - 1)s² / σ0²</td><td>n - 1</td></tr>
<tr><td>Hai phương sai</td><td>F</td><td>s1² / s2² (lớn trên)</td><td>n1 - 1, n2 - 1</td></tr>
<tr><td>Tương quan (Pearson hoặc Spearman, n lớn)</td><td>t</td><td>r√(n - 2) / √(1 - r²)</td><td>n - 2</td></tr>
<tr><td>Tính độc lập (bảng tương liên)</td><td>χ²</td><td>Σ (O - E)² / E</td><td>(r - 1)(c - 1)</td></tr>
</tbody></table>
<h4>Bẫy thường gặp</h4>
<table class="plain"><thead><tr><th>Tình huống</th><th>Nhớ</th></tr></thead><tbody>
<tr><td>Stratified và cluster</td><td>Stratified lấy từ mọi nhóm; cluster lấy vài cụm</td></tr>
<tr><td>Sai số chuẩn</td><td>Chia cho √n, không chia n; tăng n gấp 4 thì SE giảm một nửa</td></tr>
<tr><td>Hai phía</td><td>Mỗi đuôi α/2: 5% hai phía dùng 1,96, không phải 1,645</td></tr>
<tr><td>H0</td><td>Luôn chứa dấu bằng; "không bác bỏ" chứ không "chấp nhận"</td></tr>
<tr><td>Loại I và loại II</td><td>Loại I = bác bỏ H0 đúng (α); loại II = không bác bỏ H0 sai (β); power = 1 - β</td></tr>
<tr><td>p-value</td><td>p &lt; α thì bác bỏ</td></tr>
<tr><td>Paired hay độc lập</td><td>Cùng đối tượng/cùng thời kỳ → paired</td></tr>
<tr><td>Chi-square phương sai</td><td>Tới hạn hai phía không đối xứng</td></tr>
<tr><td>Tương quan</td><td>df = n - 2</td></tr>
<tr><td>Phi tham số</td><td>Dữ liệu thứ hạng, ngoại lai, không chuẩn với mẫu nhỏ, hoặc không kiểm định tham số</td></tr>
</tbody></table>
<p>Tiếp theo: bấm sang tab <b>Luyện tập</b> để làm 10 câu, rồi làm các câu Topic 7-9 trong slide Quant Review ở tab <b>Slide của tôi</b>.</p>`,
    },
  ];

  const glossary = {
    population: ['Population', 'Tổng thể', 'Toàn bộ các phần tử mà ta muốn kết luận; tham số của nó (μ, σ) thường không quan sát được.'],
    sample: ['Sample', 'Mẫu', 'Một tập con của tổng thể dùng để ước lượng tham số.'],
    probsamp: ['Probability sampling', 'Chọn mẫu xác suất', 'Mọi phần tử có xác suất được chọn biết trước và khác 0; cho phép suy luận thống kê.'],
    nonprob: ['Non-probability sampling', 'Chọn mẫu phi xác suất', 'Chọn theo sự tiện lợi hoặc phán đoán; nhanh, rẻ nhưng dễ không đại diện.'],
    srs: ['Simple random sampling', 'Chọn mẫu ngẫu nhiên đơn giản', 'Mọi phần tử có cùng xác suất được chọn.'],
    systematic: ['Systematic sampling', 'Chọn mẫu hệ thống', 'Chọn mỗi phần tử thứ k trong danh sách.'],
    stratified: ['Stratified random sampling', 'Chọn mẫu phân tầng', 'Chia tổng thể thành các nhóm theo đặc điểm, rồi chọn ngẫu nhiên trong từng nhóm.'],
    cluster: ['Cluster sampling', 'Chọn mẫu theo cụm', 'Chia thành các cụm giống tổng thể, chọn ngẫu nhiên một số cụm.'],
    convenience: ['Convenience sampling', 'Chọn mẫu thuận tiện', 'Lấy những dữ liệu dễ tiếp cận nhất.'],
    judgmental: ['Judgmental sampling', 'Chọn mẫu theo phán đoán', 'Người nghiên cứu chọn phần tử dựa trên kinh nghiệm.'],
    samplingerror: ['Sampling error', 'Sai số chọn mẫu', 'Chênh lệch giữa thống kê mẫu và tham số tổng thể, ví dụ X̄ - μ.'],
    samplingbias: ['Sampling bias', 'Thiên lệch chọn mẫu', 'Mẫu lệch có hệ thống so với tổng thể; không giảm khi tăng cỡ mẫu.'],
    samplingdist: ['Sampling distribution', 'Phân phối mẫu', 'Phân phối của một thống kê (như X̄) qua mọi mẫu cùng cỡ có thể có.'],
    clt: ['Central limit theorem', 'Định lý giới hạn trung tâm', 'Với n lớn, X̄ xấp xỉ chuẩn với trung bình μ và phương sai σ²/n, bất kể phân phối tổng thể.'],
    se: ['Standard error', 'Sai số chuẩn', 'Độ lệch chuẩn của một thống kê mẫu; với trung bình là σ/√n hoặc s/√n.'],
    ci: ['Confidence interval', 'Khoảng tin cậy', 'Ước lượng điểm ± hệ số tin cậy × sai số chuẩn.'],
    reliability: ['Reliability factor', 'Hệ số tin cậy', 'Giá trị z hoặc t ứng với mức tin cậy, ví dụ 1,96 cho 95%.'],
    tdist: ["Student's t-distribution", 'Phân phối t', 'Đối xứng, đuôi dày hơn chuẩn; dùng khi không biết σ; tiến về z khi df tăng.'],
    bootstrap: ['Bootstrap', 'Bootstrap', 'Rút lặp lại có hoàn lại từ mẫu để ước lượng sai số chuẩn của một thống kê.'],
    jackknife: ['Jackknife', 'Jackknife', 'Lần lượt bỏ từng quan sát và tính lại thống kê để ước lượng sai số chuẩn và độ chệch.'],
    h0: ['Null hypothesis (H0)', 'Giả thuyết không', 'Giả thuyết cần kiểm định, muốn bác bỏ; luôn chứa dấu bằng.'],
    ha: ['Alternative hypothesis (Ha)', 'Giả thuyết đối', 'Điều được kết luận nếu bác bỏ H0.'],
    teststat: ['Test statistic', 'Thống kê kiểm định', '(Thống kê mẫu - giá trị theo H0) / sai số chuẩn.'],
    alpha: ['Level of significance (α)', 'Mức ý nghĩa', 'Xác suất sai lầm loại I mà ta chấp nhận.'],
    decisionrule: ['Decision rule', 'Quy tắc quyết định', 'So thống kê kiểm định với giá trị tới hạn để quyết định bác bỏ H0 hay không.'],
    twotail: ['Two-tailed test', 'Kiểm định hai phía', 'Ha dạng ≠; vùng bác bỏ ở cả hai đuôi, mỗi đuôi α/2.'],
    onetail: ['One-tailed test', 'Kiểm định một phía', 'Ha dạng > hoặc <; toàn bộ α nằm ở một đuôi.'],
    type1: ['Type I error', 'Sai lầm loại I', 'Bác bỏ H0 khi H0 đúng; xác suất bằng α.'],
    type2: ['Type II error', 'Sai lầm loại II', 'Không bác bỏ H0 khi H0 sai; xác suất là β.'],
    power: ['Power of a test', 'Lực kiểm định', 'Xác suất bác bỏ đúng một H0 sai = 1 - β.'],
    pvalue: ['p-value', 'Giá trị p', 'Mức ý nghĩa nhỏ nhất để bác bỏ H0; p < α thì bác bỏ.'],
    pooled: ['Pooled variance', 'Phương sai gộp', 'Trung bình có trọng số (theo df) của hai phương sai mẫu, dùng khi giả định phương sai bằng nhau.'],
    chisq: ['Chi-square test', 'Kiểm định chi bình phương', 'Kiểm định một phương sai, hoặc tính độc lập trong bảng tương liên; phân phối không âm, lệch phải.'],
    ftest: ['F-test', 'Kiểm định F', 'So sánh hai phương sai bằng tỷ số s1²/s2² với df (n1 - 1, n2 - 1).'],
    parametric: ['Parametric test', 'Kiểm định tham số', 'Kiểm định về tham số tổng thể, dựa trên giả định phân phối.'],
    nonparam: ['Nonparametric test', 'Kiểm định phi tham số', 'Ít hoặc không giả định phân phối, hoặc không kiểm định tham số; thường dùng thứ hạng.'],
    outlier: ['Outlier', 'Giá trị ngoại lai', 'Quan sát rất khác phần còn lại, có thể làm sai lệch trung bình và phương sai.'],
    spearman: ['Spearman rank correlation', 'Tương quan hạng Spearman', 'Hệ số tương quan tính trên thứ hạng: 1 - 6Σd²/(n(n² - 1)).'],
    contingency: ['Contingency table', 'Bảng tương liên', 'Bảng hai chiều đếm số quan sát theo tổ hợp hai đặc điểm phân loại.'],
  };

  const practice = [
    { q: 'Một nhà phân tích chia các cổ phiếu trong chỉ số thành 11 ngành, rồi chọn ngẫu nhiên cổ phiếu trong từng ngành theo tỷ trọng vốn hóa của ngành. Phương pháp này là:', choices: ['Cluster sampling', 'Convenience sampling', 'Stratified random sampling'], answer: 2, explain: 'Chọn ngẫu nhiên trong TỪNG nhóm là stratified. Cluster chỉ chọn một vài cụm. Convenience là lấy dữ liệu dễ lấy, không ngẫu nhiên.' },
    { q: 'Một mẫu 64 quan sát có độ lệch chuẩn mẫu 16%. Sai số chuẩn của trung bình mẫu gần nhất với:', choices: ['2,00%', '0,25%', '2,02%'], answer: 0, explain: 's/√n = 16%/8 = 2,00%. Lựa chọn 0,25% chia cho n thay vì √n. Lựa chọn 2,02% chia cho √(n - 1) - sai: sai số chuẩn dùng √n.' },
    { q: 'Mẫu 25 năm có lợi suất trung bình 8%, độ lệch chuẩn mẫu 10%, tổng thể xấp xỉ chuẩn, không biết σ. Khoảng tin cậy 95% cho lợi suất trung bình gần nhất với:', choices: ['4,08% đến 11,92%', '3,87% đến 12,13%', '4,58% đến 11,42%'], answer: 1, explain: 'SE = 10/5 = 2%; mẫu nhỏ, không biết σ nên dùng t(24) = 2,064: 8 ± 4,13. Lựa chọn 4,08% đến 11,92% dùng z = 1,96. Lựa chọn 4,58% đến 11,42% dùng t một phía 1,711.' },
    { q: 'Nhà phân tích tin rằng lợi suất trung bình của chiến lược lớn hơn 2%. Cặp giả thuyết phù hợp là:', choices: ['H0: μ ≤ 2%; Ha: μ > 2%', 'H0: μ > 2%; Ha: μ ≤ 2%', 'H0: μ = 2%; Ha: μ ≠ 2%'], answer: 0, explain: 'Điều muốn chứng minh đặt ở Ha; H0 chứa dấu bằng. Cặp H0: μ > 2%; Ha: μ ≤ 2% đảo ngược hai giả thuyết. Cặp H0: μ = 2%; Ha: μ ≠ 2% là kiểm định hai phía, không phản ánh niềm tin có hướng.' },
    { q: 'Giữ nguyên cỡ mẫu, nếu giảm mức ý nghĩa từ 5% xuống 1% thì:', choices: ['Xác suất sai lầm loại II giảm', 'Power của kiểm định tăng', 'Xác suất sai lầm loại II tăng'], answer: 2, explain: 'Giảm α làm vùng bác bỏ hẹp lại, khó bác bỏ H0 hơn, nên β tăng và power (1 - β) giảm. Muốn giảm cả α và β phải tăng cỡ mẫu.' },
    { q: 'Một kiểm định có p-value 3,2%. Nhà phân tích sẽ bác bỏ H0 ở mức ý nghĩa:', choices: ['1%, nhưng không bác bỏ ở 5%', '5%, nhưng không bác bỏ ở 1%', 'Cả 1% và 5%'], answer: 1, explain: 'Bác bỏ khi p < α: 3,2% < 5% nên bác bỏ ở 5%; 3,2% > 1% nên không bác bỏ ở 1%.' },
    { q: 'So sánh lợi suất của cùng 36 cổ phiếu trước và sau một sự kiện: trung bình chênh lệch 0,5%, độ lệch chuẩn chênh lệch 1,5%. Kiểm định hai phía ở mức 5%, kết luận đúng là:', choices: ['Bác bỏ H0 vì t = 2,0 > 1,96', 'Không bác bỏ H0 vì t = 2,0 < 2,030', 'Bác bỏ H0 vì t = 2,0 > 1,690'], answer: 1, explain: 'Paired t = 0,5/(1,5/6) = 2,0; df = 35, giá trị tới hạn hai phía 2,030 nên không bác bỏ. Phương án so với 1,96 dùng z thay cho t. Phương án so với 1,690 dùng giá trị tới hạn một phía.' },
    { q: 'Mẫu 21 tháng có độ lệch chuẩn 5%. Kiểm định H0: σ = 4%. Thống kê kiểm định và phân phối là:', choices: ['F = 1,5625 với df (20, 20)', 'χ² = 32,81 với df 21', 'χ² = 31,25 với df 20'], answer: 2, explain: 'χ² = (n - 1)s²/σ0² = 20 × 25/16 = 31,25, df = n - 1 = 20. Lựa chọn F = 1,5625 là tỷ số phương sai, dùng cho hai mẫu. Lựa chọn χ² = 32,81 dùng n thay cho n - 1.' },
    { q: 'Tương quan mẫu giữa hai chuỗi lợi suất là 0,30, n = 40. Thống kê t để kiểm định H0: ρ = 0 gần nhất với:', choices: ['1,94', '1,99', '1,85'], answer: 0, explain: 't = 0,30 × √38 / √(1 - 0,09) = 1,94 (df = 38, tới hạn 2,024 nên không bác bỏ ở 5%). Lựa chọn 1,99 dùng √n thay cho √(n - 2). Lựa chọn 1,85 quên mẫu số √(1 - r²).' },
    { q: 'Nhà phân tích có xếp hạng của 15 quỹ theo hai tiêu chí, phân phối dữ liệu gốc lệch mạnh và có ngoại lai. Kiểm định phù hợp nhất cho mối liên hệ giữa hai xếp hạng là:', choices: ['Kiểm định t cho hệ số tương quan Pearson', 'Kiểm định F', 'Hệ số tương quan hạng Spearman'], answer: 2, explain: 'Dữ liệu thứ hạng, mẫu nhỏ, không chuẩn và có ngoại lai: dùng phi tham số Spearman. Pearson cần giả định chuẩn. F-test so sánh hai phương sai, không đo mối liên hệ.' },
  ];

  // Widget: kéo thống kê z, chọn α và loại kiểm định, xem p-value và quyết định.
  const widgets = {
    hypoTest(el) {
      el.innerHTML = `
        <div class="w-row"><label>Thống kê z: <b data-o="z">2.10</b><input type="range" min="-4" max="4" step="0.01" value="2.1" data-i="z"></label>
        <label>Mức ý nghĩa α: <b data-o="a">5%</b><input type="range" min="0" max="2" step="1" value="1" data-i="a"></label>
        <label>Loại kiểm định: <b data-o="k">Hai phía</b><input type="range" min="0" max="2" step="1" value="0" data-i="k"></label></div>
        <div class="w-out"><div class="w-price" data-o="p"></div><div class="w-bar"><span data-o="bar"></span><i></i></div><div class="w-note" data-o="note"></div></div>`;
      const q = s => el.querySelector(s);
      const A = [0.10, 0.05, 0.01];
      const C1 = [1.282, 1.645, 2.326]; // một phía
      const C2 = [1.645, 1.960, 2.576]; // hai phía
      const K = ['Hai phía (Ha: ≠)', 'Đuôi phải (Ha: >)', 'Đuôi trái (Ha: <)'];
      // Hàm phân phối chuẩn tích lũy (xấp xỉ Abramowitz-Stegun, sai số < 1e-6).
      const ncdf = x => {
        const s = x < 0 ? -1 : 1, a = Math.abs(x) / Math.SQRT2, u = 1 / (1 + 0.3275911 * a);
        const y = 1 - (((((1.061405429 * u - 1.453152027) * u) + 1.421413741) * u - 0.284496736) * u + 0.254829592) * u * Math.exp(-a * a);
        return 0.5 * (1 + s * y);
      };
      const f = (x, d) => x.toFixed(d).replace('.', ',');
      const upd = () => {
        const z = +q('[data-i="z"]').value, ai = +q('[data-i="a"]').value, k = +q('[data-i="k"]').value;
        const p = k === 0 ? 2 * (1 - ncdf(Math.abs(z))) : k === 1 ? 1 - ncdf(z) : ncdf(z);
        const crit = k === 0 ? `±${f(C2[ai], 3)}` : k === 1 ? `+${f(C1[ai], 3)}` : `-${f(C1[ai], 3)}`;
        const rej = p < A[ai];
        q('[data-o="z"]').textContent = f(z, 2);
        q('[data-o="a"]').textContent = `${A[ai] * 100}%`;
        q('[data-o="k"]').textContent = K[k];
        q('[data-o="p"]').textContent = `p-value = ${f(p * 100, 2)}%`;
        q('[data-o="bar"]').style.width = `${Math.min(100, p * 100)}%`;
        q('[data-o="note"]').textContent = `Giá trị tới hạn: ${crit}. ${rej ? 'p-value < α, thống kê nằm trong vùng bác bỏ: BÁC BỎ H0.' : 'p-value ≥ α: KHÔNG bác bỏ H0.'}`;
      };
      el.addEventListener('input', upd);
      upd();
    },
  };

  window.LESSONS['QM-07'] = {
    moduleId: 'QM-07',
    calculator: 'BA II Plus',
    warmup: [
      'Ôn QM-06: phân phối chuẩn có bao nhiêu phần trăm xác suất nằm trong khoảng μ ± 1,96σ?',
      'Ôn QM-05: độ lệch chuẩn mẫu chia cho n hay n - 1? Vì sao?',
      'Đoán trước: nếu một quỹ có lợi suất trung bình 1%/tháng trong 12 tháng, bạn đã đủ tin rằng lợi suất thật lớn hơn 0 chưa? Cần thêm thông tin gì?',
    ],
    sections,
    glossary,
    practice,
    widgets,
    slides: [],
    wrapup: [
      'Viết lại 6 bước kiểm định giả thuyết và áp dụng cho một câu hỏi đầu tư của riêng bạn.',
      'Không nhìn bảng: test nào dùng χ², test nào dùng F, test nào có df = n - 2?',
      'Giải thích bằng lời của bạn sự khác nhau giữa α, β, power và p-value.',
    ],
  };
}());
