// Bài giảng QM-04 - The Time Value of Money in Finance (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const t = (key, text) => `<span class="term" data-term="${key}">${text}</span>`;
  const frac = (a, b) => `<span class="frac"><span>${a}</span><span>${b}</span></span>`;
  const keys = rows => `<table class="keys"><thead><tr><th>Bước</th><th>Bấm</th><th>Màn hình</th></tr></thead><tbody>${
    rows.map(r => `<tr><td>${r[0]}</td><td>${r[1].split(' ').map(k => (k.startsWith('[') ? `<kbd>${k.slice(1, -1).replace(/_/g, ' ')}</kbd>` : k)).join(' ')}</td><td>${r[2]}</td></tr>`).join('')}</tbody></table>`;

  // Timeline drawn with inline SVG. flows: [{t, label, up}] ; up=true arrow above axis.
  const timeline = (n, flows, caption) => {
    const W = 560, x0 = 40, x1 = 520, y = 70;
    const x = i => x0 + ((x1 - x0) * i) / n;
    let s = `<figure class="tl"><svg viewBox="0 0 ${W} 130" role="img" aria-label="${caption}">`;
    s += `<line x1="${x0}" y1="${y}" x2="${x1}" y2="${y}" class="axis"/>`;
    for (let i = 0; i <= n; i++) s += `<line x1="${x(i)}" y1="${y - 5}" x2="${x(i)}" y2="${y + 5}" class="axis"/><text x="${x(i)}" y="${y + 22}" class="tick">t=${i}</text>`;
    flows.forEach(f => {
      const yy = f.up ? y - 42 : y + 50;
      s += `<line x1="${x(f.t)}" y1="${f.up ? y - 8 : y + 30}" x2="${x(f.t)}" y2="${f.up ? y - 30 : y + 34}" class="${f.cls || 'flow'}"/>`;
      s += `<text x="${x(f.t)}" y="${yy}" class="flabel ${f.cls || ''}">${f.label}</text>`;
    });
    s += `</svg><figcaption>${caption}</figcaption></figure>`;
    return s;
  };

  const sections = [
    {
      title: '1. Bức tranh lớn',
      minutes: 5,
      html: `
<p>Toàn bộ module này xoay quanh <b>một ý tưởng duy nhất</b>:</p>
<div class="key">Giá trị hôm nay của một tài sản = tổng ${t('pv', 'giá trị hiện tại (PV)')} của mọi dòng tiền mà tài sản đó sẽ tạo ra, chiết khấu theo ${t('discount', 'lãi suất chiết khấu')} phù hợp với rủi ro.</div>
<p>Trái phiếu, cổ phiếu, khoản vay, hợp đồng kỳ hạn hay quyền chọn đều chỉ là <b>các chuỗi dòng tiền khác nhau</b>. Học xong module này, bạn sẽ dùng cùng một cách nghĩ để:</p>
<ol>
  <li><b>Định giá</b>: biết dòng tiền và lãi suất, tìm giá (PV). Ứng với LOS 1.</li>
  <li><b>Tìm lợi suất ngầm định</b>: biết giá và dòng tiền, tìm lãi suất hoặc tăng trưởng mà thị trường đang "ngầm" giả định. Ứng với LOS 2.</li>
  <li><b>Cộng dòng tiền và không chênh lệch giá</b>: hai cách tạo ra cùng một dòng tiền thì phải có cùng giá. Từ đó suy ra lãi suất kỳ hạn, tỷ giá kỳ hạn và giá quyền chọn. Ứng với LOS 3.</li>
</ol>
${timeline(4, [{ t: 0, label: 'PV = ?', up: true, cls: 'pv' }, { t: 1, label: 'CF1' }, { t: 2, label: 'CF2' }, { t: 3, label: 'CF3' }, { t: 4, label: 'CF4' }], 'Mọi bài TVM: vẽ trục thời gian, đặt dòng tiền lên, rồi đưa về cùng một thời điểm.')}
<p class="tip"><b>Thói quen nên có:</b> với mọi bài TVM, <b>vẽ trục thời gian trước khi bấm máy</b>. Phần lớn lỗi sai trong đề thi là đặt dòng tiền sai thời điểm, không phải sai công thức.</p>`,
    },
    {
      title: '2. Công thức nền tảng: FV, PV và tần suất ghép lãi',
      minutes: 10,
      html: `
<h4>Ghép lãi hằng năm</h4>
<div class="formula">FV<sub>N</sub> = PV × (1 + r)<sup>N</sup> &nbsp;&nbsp;⇔&nbsp;&nbsp; PV = ${frac('FV<sub>N</sub>', '(1 + r)<sup>N</sup>')}</div>
<p>r là lãi suất mỗi kỳ, N là số kỳ. Hệ số ${frac('1', '(1 + r)<sup>N</sup>')} gọi là ${t('df', 'hệ số chiết khấu (discount factor)')}.</p>

<h4>Ghép lãi m lần mỗi năm</h4>
<div class="formula">FV<sub>N</sub> = PV × (1 + ${frac('r<sub>s</sub>', 'm')})<sup>m × N</sup></div>
<p>r<sub>s</sub> là ${t('stated', 'lãi suất danh nghĩa năm (stated annual rate)')}. Chia lãi suất cho m và nhân số năm với m.</p>

<h4>Ghép lãi liên tục</h4>
<div class="formula">FV<sub>N</sub> = PV × e<sup>r<sub>s</sub> × N</sup> &nbsp;&nbsp;⇔&nbsp;&nbsp; PV = FV<sub>N</sub> × e<sup>-r<sub>s</sub> × N</sup></div>

<div class="example"><div class="ex-h">Ví dụ 2.1</div>
<p>Gửi 1.000 USD trong 3 năm, lãi suất danh nghĩa 5%/năm. FV là bao nhiêu nếu ghép lãi (a) hằng năm, (b) hằng quý, (c) liên tục?</p>
<details><summary>Xem lời giải</summary>
<p>(a) 1.000 × 1,05<sup>3</sup> = <b>1.157,63</b><br>
(b) 1.000 × (1 + 0,05/4)<sup>12</sup> = <b>1.160,75</b><br>
(c) 1.000 × e<sup>0,15</sup> = <b>1.161,83</b></p>
<p>Ghép lãi càng dày thì FV càng lớn, nhưng tăng chậm dần: liên tục chỉ hơn hằng quý khoảng 1 USD.</p></details></div>

<h4>Lãi suất hiệu dụng (EAR)</h4>
<div class="formula">EAR = (1 + ${frac('r<sub>s</sub>', 'm')})<sup>m</sup> - 1 &nbsp;&nbsp;&nbsp; EAR<sub>liên tục</sub> = e<sup>r<sub>s</sub></sup> - 1</div>
<p>Ví dụ: 5% ghép lãi hằng quý có ${t('ear', 'EAR')} = 1,0125<sup>4</sup> - 1 = <b>5,0945%</b>. EAR dùng để <b>so sánh</b> các mức lãi suất có tần suất ghép lãi khác nhau.</p>
<p class="tip"><b>BA II Plus:</b> dùng ${'<kbd>2ND</kbd> <kbd>2</kbd>'} (ICONV): nhập NOM = 5, C/Y = 4, rồi di chuyển đến EFF và bấm <kbd>CPT</kbd>, được 5,0945.</p>`,
    },
    {
      title: '3. Máy tính BA II Plus: 5 phím TVM',
      minutes: 8,
      html: `
<p>Hàng phím thứ 3 của máy: <kbd>N</kbd> <kbd>I/Y</kbd> <kbd>PV</kbd> <kbd>PMT</kbd> <kbd>FV</kbd>. Nhập 4 giá trị đã biết, rồi bấm <kbd>CPT</kbd> + phím còn lại để tính.</p>
<h4>Cài đặt một lần (làm ngay hôm nay)</h4>
${keys([
  ['Hiển thị 4 số thập phân', '[2ND] [.] 4 [ENTER] [2ND] [CPT]', 'DEC = 4.0000'],
  ['Đặt P/Y = 1 (rất quan trọng)', '[2ND] [I/Y] 1 [ENTER] [2ND] [CPT]', 'P/Y = 1.0000'],
  ['Kiểm tra chế độ AOS (nhân chia trước)', '[2ND] [.] rồi bấm ↓ đến Chn/AOS', 'AOS'],
])}
<p>Máy mới thường để P/Y = 12. Nếu không đổi về 1, mọi bài tính hằng năm đều sai mà bạn không nhận ra. Khi đặt P/Y = 1 thì C/Y tự động bằng 1.</p>

<h4>3 quy tắc vàng</h4>
<ol>
  <li><b>Xóa bộ nhớ TVM trước mỗi bài:</b> <kbd>2ND</kbd> <kbd>FV</kbd> (CLR TVM). Máy nhớ giá trị của bài trước.</li>
  <li><b>Quy ước dấu:</b> tiền ra là số âm, tiền vào là số dương. Nếu PV và FV cùng dấu, máy báo <i>Error 5</i>.</li>
  <li><b>I/Y nhập dạng phần trăm:</b> 5% thì nhập <kbd>5</kbd>, không nhập 0.05. Nếu trả theo tháng thì tự chia lãi suất cho 12 và nhân N với 12.</li>
</ol>

<div class="example"><div class="ex-h">Ví dụ 3.1 - Khoản vay trả góp</div>
<p>Vay 100.000 USD, trả đều cuối mỗi năm trong 5 năm, lãi suất 6%. Mỗi năm trả bao nhiêu?</p>
<details><summary>Xem lời giải</summary>
${keys([
  ['Xóa TVM', '[2ND] [FV]', '0'],
  ['Số kỳ', '5 [N]', 'N = 5'],
  ['Lãi suất', '6 [I/Y]', 'I/Y = 6'],
  ['Số tiền vay (nhận vào)', '100000 [PV]', 'PV = 100,000'],
  ['Trả hết nợ', '0 [FV]', 'FV = 0'],
  ['Tính', '[CPT] [PMT]', 'PMT = -23,739.64'],
])}
<p>Mỗi năm trả <b>23.739,64 USD</b>. Số âm vì đây là tiền bạn trả ra.</p></details></div>
<p class="tip"><b>Annuity due</b> (dòng tiền ở <b>đầu</b> kỳ, ví dụ tiền thuê nhà): bật chế độ BGN bằng <kbd>2ND</kbd> <kbd>PMT</kbd> <kbd>2ND</kbd> <kbd>ENTER</kbd>. Màn hình hiện chữ BGN nhỏ. Làm xong nhớ chuyển lại END, nếu không các bài sau sẽ sai hết.</p>`,
    },
    {
      title: '4. Định giá công cụ nợ (fixed income)',
      minutes: 12,
      html: `
<p>Có 4 dạng dòng tiền nợ cần nhớ, khác nhau ở <b>thời điểm trả gốc</b>:</p>
<table class="plain"><thead><tr><th>Loại</th><th>Dòng tiền</th><th>Công thức PV</th></tr></thead><tbody>
<tr><td>${t('zero', 'Trái phiếu chiết khấu (zero-coupon)')}</td><td>Chỉ trả FV khi đáo hạn</td><td>${frac('FV', '(1 + r)<sup>N</sup>')}</td></tr>
<tr><td>${t('coupon', 'Trái phiếu có coupon')}</td><td>Coupon đều mỗi kỳ, cộng gốc ở kỳ cuối</td><td>Σ ${frac('PMT', '(1 + r)<sup>t</sup>')} + ${frac('FV', '(1 + r)<sup>N</sup>')}</td></tr>
<tr><td>${t('perpetual', 'Trái phiếu vĩnh viễn (perpetual)')}</td><td>Coupon mãi mãi, không trả gốc</td><td>${frac('PMT', 'r')}</td></tr>
<tr><td>${t('amortizing', 'Khoản vay trả dần (amortizing)')}</td><td>Mỗi kỳ trả cả lãi lẫn một phần gốc, FV = 0</td><td>PMT × ${frac('1 - (1 + r)<sup>-N</sup>', 'r')}</td></tr>
</tbody></table>

${timeline(3, [{ t: 0, label: 'PV = 97,28', up: true, cls: 'pv' }, { t: 1, label: '4' }, { t: 2, label: '4' }, { t: 3, label: '4 + 100' }], 'Trái phiếu 3 năm, coupon 4%/năm, mệnh giá 100, chiết khấu ở mức 5%.')}

<div class="example"><div class="ex-h">Ví dụ 4.1 - Trái phiếu chiết khấu</div>
<p>Trái phiếu zero-coupon mệnh giá 1.000, đáo hạn sau 3 năm, lãi suất chiết khấu 5%. Giá là bao nhiêu?</p>
<details><summary>Xem lời giải</summary><p>PV = 1.000 / 1,05<sup>3</sup> = <b>863,84</b>. Giá thấp hơn mệnh giá vì không có coupon: toàn bộ lợi nhuận đến từ phần chênh lệch 1.000 - 863,84.</p></details></div>

<div class="example"><div class="ex-h">Ví dụ 4.2 - Trái phiếu có coupon</div>
<p>Trái phiếu 3 năm, coupon 4% trả hằng năm, mệnh giá 100, lãi suất thị trường 5%.</p>
<details><summary>Xem lời giải</summary>
${keys([['', '[2ND] [FV] 3 [N] 5 [I/Y] 4 [PMT] 100 [FV] [CPT] [PV]', 'PV = -97.2768']])}
<p>Giá = <b>97,28</b>, thấp hơn mệnh giá vì <b>coupon (4%) &lt; lãi suất thị trường (5%)</b>. Người mua phải được bù bằng giá rẻ hơn.</p></details></div>

<div class="key">Coupon &lt; lãi suất thị trường → giá &lt; mệnh giá (${t('discountbond', 'discount')}).<br>Coupon = lãi suất thị trường → giá = mệnh giá (par).<br>Coupon &gt; lãi suất thị trường → giá &gt; mệnh giá (${t('premium', 'premium')}).</div>

<h4>Thử ngay: kéo thanh lãi suất thị trường</h4>
<div class="widget" data-widget="bondPrice"></div>

<p><b>Trái phiếu vĩnh viễn:</b> coupon 4 mỗi năm mãi mãi, r = 5%, PV = 4 / 0,05 = <b>80</b>.</p>`,
    },
    {
      title: '5. Định giá cổ phiếu',
      minutes: 10,
      html: `
<p>Cổ phiếu không có ngày đáo hạn, nên phải đưa ra giả định về cổ tức trong tương lai. Có 3 trường hợp:</p>
<h4>a) Cổ tức không đổi (cổ phiếu ưu đãi): giống perpetuity</h4>
<div class="formula">V<sub>0</sub> = ${frac('D', 'r')}</div>

<h4>b) Cổ tức tăng trưởng đều g mãi mãi: ${t('gordon', 'mô hình Gordon')}</h4>
<div class="formula">V<sub>0</sub> = ${frac('D<sub>1</sub>', 'r - g')} = ${frac('D<sub>0</sub> × (1 + g)', 'r - g')} &nbsp;&nbsp; (điều kiện r &gt; g)</div>
<p class="warn"><b>Bẫy số 1 trong đề thi:</b> đề cho D<sub>0</sub> (cổ tức <b>vừa trả</b>) hay D<sub>1</sub> (cổ tức <b>năm tới</b>)? Tử số luôn là D<sub>1</sub>. Nếu đề cho D<sub>0</sub>, phải nhân thêm (1 + g).</p>

<div class="example"><div class="ex-h">Ví dụ 5.1</div>
<p>Công ty vừa trả cổ tức 1,50. Cổ tức tăng 5%/năm mãi mãi, lợi suất yêu cầu 10%. Giá trị cổ phiếu?</p>
<details><summary>Xem lời giải</summary><p>D<sub>1</sub> = 1,50 × 1,05 = 1,575. V<sub>0</sub> = 1,575 / (0,10 - 0,05) = <b>31,50</b>.<br>Nếu quên nhân (1 + g), bạn được 30,00. Đây chính là đáp án bẫy hay gặp.</p></details></div>

<h4>c) Tăng trưởng hai giai đoạn</h4>
<p>Giai đoạn đầu tăng nhanh, sau đó ổn định. Cách làm: <b>chiết khấu từng cổ tức của giai đoạn đầu</b>, cộng với <b>giá trị cuối kỳ (terminal value)</b> tính bằng Gordon tại thời điểm bắt đầu tăng trưởng ổn định.</p>
${timeline(3, [{ t: 0, label: 'V0 = ?', up: true, cls: 'pv' }, { t: 1, label: '1,20' }, { t: 2, label: '1,44 + V2' }, { t: 3, label: '1,512 ...' }], 'D0 = 1, tăng 20% trong 2 năm, sau đó 5% mãi mãi, r = 11%.')}
<div class="example"><div class="ex-h">Ví dụ 5.2</div>
<details><summary>Xem lời giải</summary>
<p>D<sub>1</sub> = 1,20; D<sub>2</sub> = 1,44; D<sub>3</sub> = 1,44 × 1,05 = 1,512.<br>
V<sub>2</sub> = D<sub>3</sub> / (r - g) = 1,512 / 0,06 = 25,20 (giá trị tại t = 2 của toàn bộ cổ tức từ năm 3 trở đi).<br>
V<sub>0</sub> = 1,20 / 1,11 + (1,44 + 25,20) / 1,11<sup>2</sup> = 1,081 + 21,622 = <b>22,70</b>.</p>
<p class="tip">BA II Plus: dùng hàm Cash Flow (<kbd>CF</kbd>): CF0 = 0, C01 = 1.2, C02 = 26.64, rồi bấm <kbd>NPV</kbd>, nhập I = 11, <kbd>CPT</kbd>, được 22.7027.</p></details></div>`,
    },
    {
      title: '6. Lợi suất ngầm định (implied return và implied growth)',
      minutes: 8,
      html: `
<p>Làm ngược lại phần 4 và 5: <b>biết giá thị trường, tìm r hoặc g</b>. Đây là cách nhà phân tích "đọc" kỳ vọng của thị trường.</p>
<h4>Công cụ nợ</h4>
<ul>
<li>Zero-coupon: r = (${frac('FV', 'PV')})<sup>1/N</sup> - 1. Ví dụ: giá 90, mệnh giá 100, 3 năm, r = (100/90)<sup>1/3</sup> - 1 = <b>3,57%</b>.</li>
<li>Trái phiếu có coupon: không giải tay được, phải dùng máy. Nhập N, PV (âm), PMT, FV rồi bấm <kbd>CPT</kbd> <kbd>I/Y</kbd>. Kết quả gọi là ${t('ytm', 'lợi suất đáo hạn (YTM)')}.</li>
</ul>
${keys([['Giá 97,28 ở ví dụ 4.2', '[2ND] [FV] 3 [N] 97.2768 [+/-] [PV] 4 [PMT] 100 [FV] [CPT] [I/Y]', 'I/Y = 5.0000']])}

<h4>Cổ phiếu (từ mô hình Gordon)</h4>
<div class="formula">r = ${frac('D<sub>1</sub>', 'P<sub>0</sub>')} + g &nbsp;&nbsp;&nbsp;&nbsp; g = r - ${frac('D<sub>1</sub>', 'P<sub>0</sub>')}</div>
<p>Lợi suất yêu cầu = ${t('divyield', 'tỷ suất cổ tức')} + tăng trưởng.</p>
<div class="example"><div class="ex-h">Ví dụ 6.1</div>
<p>Giá cổ phiếu 40, cổ tức năm tới 1,60. (a) Nếu g = 5%, lợi suất yêu cầu ngầm định là bao nhiêu? (b) Nếu nhà đầu tư yêu cầu 10%, thị trường đang ngầm giả định mức tăng trưởng bao nhiêu?</p>
<details><summary>Xem lời giải</summary><p>(a) r = 1,60/40 + 5% = 4% + 5% = <b>9%</b>.<br>(b) g = 10% - 4% = <b>6%</b>. Nếu bạn tin công ty chỉ tăng trưởng được 4%, thì giá 40 đang quá đắt.</p></details></div>`,
    },
    {
      title: '7. Cộng dòng tiền và nguyên tắc không chênh lệch giá',
      minutes: 12,
      html: `
<div class="key"><b>${t('additivity', 'Cash flow additivity')}:</b> PV của tổng các dòng tiền = tổng PV của từng dòng tiền.<br><b>${t('noarb', 'No arbitrage')}:</b> hai danh mục tạo ra dòng tiền giống hệt nhau thì phải có cùng giá. Nếu khác giá, người ta mua cái rẻ, bán cái đắt và hưởng lời không rủi ro, cho đến khi giá cân bằng lại.</div>
<p>Từ hai nguyên tắc này suy ra được 3 ứng dụng:</p>

<h4>a) Lãi suất kỳ hạn ngầm định (implied forward rate)</h4>
<p>Đầu tư 2 năm theo lãi suất spot 2 năm phải cho kết quả bằng đầu tư 1 năm, rồi tái đầu tư 1 năm tiếp theo ở ${t('forward', 'lãi suất kỳ hạn')} f<sub>1,1</sub>:</p>
<div class="formula">(1 + r<sub>2</sub>)<sup>2</sup> = (1 + r<sub>1</sub>) × (1 + f<sub>1,1</sub>)</div>
<div class="example"><div class="ex-h">Ví dụ 7.1</div><p>r<sub>1</sub> = 2%, r<sub>2</sub> = 3%. Tìm f<sub>1,1</sub>.</p>
<details><summary>Xem lời giải</summary><p>f<sub>1,1</sub> = 1,03<sup>2</sup> / 1,02 - 1 = <b>4,01%</b>. Mẹo kiểm tra: lãi suất kỳ hạn phải "kéo" trung bình lên 3%, nên nó phải lớn hơn 3% khá nhiều. Câu trả lời 4% (trung bình cộng) là đáp án bẫy.</p></details></div>

<h4>b) Tỷ giá kỳ hạn (forward exchange rate)</h4>
<div class="formula">F<sub>P/B</sub> = S<sub>P/B</sub> × ${frac('1 + i<sub>P</sub>', '1 + i<sub>B</sub>')}</div>
<p>P là đồng tiền định giá (price currency), B là đồng tiền cơ sở (base currency). Tỷ giá USD/GBP nghĩa là <b>số USD cho 1 GBP</b>.</p>
<div class="example"><div class="ex-h">Ví dụ 7.2</div><p>Spot 1,2500 USD/GBP, lãi suất 1 năm của USD là 4%, của GBP là 5%. Tỷ giá kỳ hạn 1 năm?</p>
<details><summary>Xem lời giải</summary><p>F = 1,25 × 1,04 / 1,05 = <b>1,2381</b>. GBP có lãi suất cao hơn nên phải <b>giảm giá kỳ hạn</b> so với USD. Nếu không, người ta sẽ vay USD, đổi sang GBP gửi lấy lãi cao, rồi bán GBP kỳ hạn để chốt lời không rủi ro.</p></details></div>

<h4>c) Giá quyền chọn bằng danh mục sao chép (mô hình nhị thức 1 kỳ)</h4>
<p>Cổ phiếu giá 100, sau 1 năm lên 120 hoặc xuống 90. Lãi suất phi rủi ro 4%. ${t('call', 'Quyền chọn mua')} giá thực hiện 100 trả 20 (nếu giá lên) hoặc 0 (nếu giá xuống).</p>
<p>Lập danh mục <b>mua h cổ phiếu và vay tiền</b> sao cho dòng tiền giống hệt quyền chọn:</p>
<ul><li>h = (20 - 0) / (120 - 90) = <b>0,6667</b> (${t('hedge', 'hedge ratio')})</li>
<li>Vay PV của 0,6667 × 90 = 60 / 1,04 = 57,69 (khi giá xuống, danh mục trị giá 60, vừa đủ trả nợ, giống quyền chọn trả 0)</li>
<li>Giá quyền chọn = 0,6667 × 100 - 57,69 = <b>8,97</b></li></ul>
<p class="tip">Cách nhanh tương đương: xác suất trung lập rủi ro q = (1,04 × 100 - 90)/(120 - 90) = 0,4667, giá quyền chọn = q × 20 / 1,04 = 8,97. Phần này sẽ học kỹ hơn ở module Derivatives (DE-10). Ở đây chỉ cần hiểu <b>vì sao</b> nó đúng: cùng dòng tiền thì cùng giá.</p>`,
    },
    {
      title: '8. Tóm tắt và bẫy thường gặp',
      minutes: 5,
      html: `
<table class="plain"><thead><tr><th>Tình huống</th><th>Nhớ</th></tr></thead><tbody>
<tr><td>Ghép lãi m lần/năm</td><td>Chia r cho m, nhân N với m</td></tr>
<tr><td>Gordon</td><td>Tử số là D<sub>1</sub>, không phải D<sub>0</sub>. Điều kiện r &gt; g</td></tr>
<tr><td>Perpetuity bắt đầu ở năm k</td><td>PMT/r cho giá trị tại t = k - 1, rồi chiết khấu thêm k - 1 năm</td></tr>
<tr><td>Annuity due</td><td>Bật BGN, hoặc lấy kết quả ordinary × (1 + r)</td></tr>
<tr><td>Coupon và lãi suất thị trường</td><td>Coupon &lt; lãi suất thị trường thì giá &lt; mệnh giá</td></tr>
<tr><td>Lãi suất kỳ hạn</td><td>Không phải trung bình cộng. Dùng (1 + r<sub>2</sub>)<sup>2</sup> = (1 + r<sub>1</sub>)(1 + f)</td></tr>
<tr><td>Tỷ giá kỳ hạn</td><td>Đồng tiền nào lãi suất cao hơn thì giảm giá kỳ hạn</td></tr>
<tr><td>Máy tính</td><td>P/Y = 1, xóa TVM, quy ước dấu, nhớ trở lại END</td></tr>
</tbody></table>
<p>Tiếp theo: bấm sang tab <b>Luyện tập</b> để làm 10 câu, rồi làm thêm các câu TVM trong slide Quant Review ở tab <b>Slide của tôi</b>.</p>`,
    },
  ];

  const glossary = {
    pv: ['Present value (PV)', 'Giá trị hiện tại', 'Giá trị hôm nay của dòng tiền tương lai, sau khi chiết khấu.'],
    discount: ['Discount rate', 'Lãi suất chiết khấu', 'Lợi suất yêu cầu dùng để đưa dòng tiền tương lai về hiện tại; rủi ro càng cao thì lãi suất này càng cao.'],
    df: ['Discount factor', 'Hệ số chiết khấu', '1/(1+r)^N - giá trị hôm nay của 1 đồng nhận được sau N kỳ.'],
    stated: ['Stated annual rate', 'Lãi suất danh nghĩa năm', 'Lãi suất công bố, chưa tính hiệu ứng ghép lãi trong năm.'],
    ear: ['Effective annual rate (EAR)', 'Lãi suất hiệu dụng năm', 'Lãi suất thực nhận sau 1 năm khi đã tính ghép lãi; dùng để so sánh các mức lãi suất.'],
    zero: ['Zero-coupon / discount bond', 'Trái phiếu chiết khấu', 'Không trả lãi định kỳ; bán dưới mệnh giá và trả mệnh giá khi đáo hạn.'],
    coupon: ['Coupon bond', 'Trái phiếu có lãi coupon', 'Trả lãi cố định mỗi kỳ (coupon) và trả gốc khi đáo hạn.'],
    perpetual: ['Perpetual bond / perpetuity', 'Trái phiếu vĩnh viễn', 'Trả lãi mãi mãi, không có ngày đáo hạn; PV = PMT/r.'],
    amortizing: ['Amortizing loan', 'Khoản vay trả dần', 'Mỗi kỳ trả một khoản đều gồm lãi và một phần gốc; hết hạn thì dư nợ bằng 0.'],
    discountbond: ['Discount (bond)', 'Giao dịch dưới mệnh giá', 'Giá trái phiếu thấp hơn mệnh giá, xảy ra khi coupon thấp hơn lãi suất thị trường.'],
    premium: ['Premium (bond)', 'Giao dịch trên mệnh giá', 'Giá trái phiếu cao hơn mệnh giá, xảy ra khi coupon cao hơn lãi suất thị trường.'],
    gordon: ['Gordon growth model', 'Mô hình tăng trưởng Gordon', 'V0 = D1/(r - g); định giá cổ phiếu có cổ tức tăng đều mãi mãi.'],
    ytm: ['Yield to maturity (YTM)', 'Lợi suất đáo hạn', 'Lãi suất chiết khấu duy nhất làm PV dòng tiền trái phiếu bằng giá thị trường.'],
    divyield: ['Dividend yield', 'Tỷ suất cổ tức', 'D1/P0 - phần lợi suất đến từ cổ tức.'],
    additivity: ['Cash flow additivity principle', 'Nguyên tắc cộng dòng tiền', 'PV của tổng các dòng tiền bằng tổng PV của từng dòng tiền.'],
    noarb: ['No-arbitrage condition', 'Điều kiện không chênh lệch giá', 'Hai tài sản có dòng tiền giống nhau phải có cùng giá, nếu không sẽ có lời không rủi ro.'],
    forward: ['Implied forward rate', 'Lãi suất kỳ hạn ngầm định', 'Lãi suất cho một giai đoạn tương lai, suy ra từ các lãi suất spot hiện tại.'],
    call: ['Call option', 'Quyền chọn mua', 'Quyền (không phải nghĩa vụ) mua tài sản ở giá thực hiện; trả max(S - K, 0).'],
    hedge: ['Hedge ratio', 'Tỷ lệ phòng hộ', 'Số cổ phiếu cần nắm giữ để sao chép 1 quyền chọn = chênh lệch payoff quyền chọn / chênh lệch giá cổ phiếu.'],
  };

  const practice = [
    { q: 'Một trái phiếu zero-coupon mệnh giá 1.000, đáo hạn sau 6 năm. Lãi suất chiết khấu 4,5%/năm. Giá trái phiếu gần nhất với:', choices: ['730,00', '767,90', '802,45'], answer: 1, explain: 'PV = 1.000 / 1,045^6 = 767,90. Đáp án A là 1.000 x (1 - 6 x 4,5%), tức lãi đơn - sai cách.' },
    { q: 'Trái phiếu 5 năm, coupon 6% trả hằng năm, mệnh giá 100. Lãi suất thị trường 7%. Giá trái phiếu gần nhất với:', choices: ['95,90', '100,00', '104,21'], answer: 0, explain: 'N=5, I/Y=7, PMT=6, FV=100, CPT PV = -95,90. Coupon thấp hơn lãi suất thị trường nên giá thấp hơn mệnh giá.' },
    { q: 'Một khoản đầu tư trả 10 mỗi năm mãi mãi, khoản đầu tiên nhận vào cuối năm 4. Lãi suất 8%. Giá trị hôm nay gần nhất với:', choices: ['91,88', '125,00', '99,23'], answer: 2, explain: 'PMT/r = 125 là giá trị tại t = 3 (một năm trước khoản đầu tiên). PV0 = 125 / 1,08^3 = 99,23. Đáp án A chiết khấu thừa 1 năm.' },
    { q: 'Công ty vừa trả cổ tức 2,00. Cổ tức tăng 4%/năm mãi mãi, lợi suất yêu cầu 9%. Giá trị cổ phiếu gần nhất với:', choices: ['40,00', '41,60', '43,26'], answer: 1, explain: 'D1 = 2,00 x 1,04 = 2,08; V0 = 2,08 / (9% - 4%) = 41,60. Đáp án A dùng D0, đáp án C dùng D2.' },
    { q: 'Trái phiếu zero-coupon mệnh giá 100, đáo hạn sau 5 năm, đang giao dịch ở giá 82. Lợi suất ngầm định hằng năm gần nhất với:', choices: ['3,60%', '4,39%', '4,05%'], answer: 2, explain: 'r = (100/82)^(1/5) - 1 = 4,05%. Các đáp án khác là lãi đơn, không tính ghép lãi.' },
    { q: 'Cổ phiếu giá 50, cổ tức dự kiến năm tới 2,00, lợi suất yêu cầu 10%. Tốc độ tăng trưởng cổ tức mà thị trường ngầm giả định là:', choices: ['6%', '4%', '14%'], answer: 0, explain: 'g = r - D1/P0 = 10% - 4% = 6%. Đáp án C là cộng thay vì trừ.' },
    { q: 'Trái phiếu 4 năm, coupon 5% trả hằng năm, mệnh giá 100, đang giao dịch ở giá 104. Lợi suất đáo hạn (YTM) gần nhất với:', choices: ['3,90%', '4,81%', '5,00%'], answer: 0, explain: 'N=4, PV=-104, PMT=5, FV=100, CPT I/Y = 3,90%. Giá trên mệnh giá nên YTM phải thấp hơn coupon 5%.' },
    { q: 'Lãi suất spot 1 năm là 3%, spot 2 năm là 4%. Lãi suất kỳ hạn 1 năm, bắt đầu sau 1 năm (f1,1) gần nhất với:', choices: ['4,50%', '5,50%', '5,01%'], answer: 2, explain: 'f = 1,04^2 / 1,03 - 1 = 5,01%.' },
    { q: 'Tỷ giá spot là 1,1000 USD/EUR. Lãi suất 1 năm của USD là 5%, của EUR là 3%. Tỷ giá kỳ hạn 1 năm (USD/EUR) gần nhất với:', choices: ['1,0790', '1,1214', '1,1220'], answer: 1, explain: 'F = 1,10 x 1,05/1,03 = 1,1214. USD là đồng tiền định giá. Đáp án A đảo ngược tử và mẫu; đáp án C là cộng chênh lệch lãi suất kiểu gần đúng.' },
    { q: 'Cổ phiếu giá 50, sau 1 năm lên 60 hoặc xuống 40. Lãi suất phi rủi ro 5%. Giá quyền chọn mua với giá thực hiện 50 gần nhất với:', choices: ['5,00', '5,95', '6,25'], answer: 1, explain: 'Hedge ratio = 10/20 = 0,5. Giá = 0,5 x 50 - (0,5 x 40)/1,05 = 25 - 19,05 = 5,95. Đáp án C: q = 0,625, nhưng quên chiết khấu.' },
  ];

  // Interactive widget: bond price vs market rate.
  const widgets = {
    bondPrice(el) {
      el.innerHTML = `
        <div class="w-row"><label>Coupon: <b data-o="c">4%</b><input type="range" min="0" max="10" step="0.5" value="4" data-i="c"></label>
        <label>Kỳ hạn: <b data-o="n">10 năm</b><input type="range" min="1" max="30" step="1" value="10" data-i="n"></label>
        <label>Lãi suất thị trường: <b data-o="r">5%</b><input type="range" min="0.5" max="12" step="0.25" value="5" data-i="r"></label></div>
        <div class="w-out"><div class="w-price" data-o="p"></div><div class="w-bar"><span data-o="bar"></span><i></i></div><div class="w-note" data-o="note"></div></div>`;
      const q = s => el.querySelector(s);
      const upd = () => {
        const c = +q('[data-i="c"]').value, n = +q('[data-i="n"]').value, r = +q('[data-i="r"]').value / 100;
        let p = 0;
        for (let k = 1; k <= n; k++) p += c / Math.pow(1 + r, k);
        p += 100 / Math.pow(1 + r, n);
        q('[data-o="c"]').textContent = `${c}%`;
        q('[data-o="n"]').textContent = `${n} năm`;
        q('[data-o="r"]').textContent = `${(r * 100).toFixed(2)}%`;
        q('[data-o="p"]').textContent = `Giá = ${p.toFixed(2)}`;
        q('[data-o="bar"]').style.width = `${Math.min(100, p / 2)}%`;
        const d = Math.abs(c - r * 100) < 1e-9;
        q('[data-o="note"]').textContent = d ? 'Coupon = lãi suất thị trường, nên giá = mệnh giá (par).'
          : c < r * 100 ? 'Coupon < lãi suất thị trường, nên giá < 100 (discount). Kỳ hạn càng dài thì giá càng giảm mạnh.'
            : 'Coupon > lãi suất thị trường, nên giá > 100 (premium).';
      };
      el.addEventListener('input', upd);
      upd();
    },
  };

  window.LESSONS['QM-04'] = {
    moduleId: 'QM-04',
    calculator: 'BA II Plus',
    warmup: [
      'Không xem tài liệu: lãi suất yêu cầu gồm những thành phần nào? (gợi ý: lãi suất thực, lạm phát, phần bù rủi ro)',
      'Holding period return của một cổ phiếu mua giá 20, bán giá 22 và nhận cổ tức 1 là bao nhiêu?',
      'Kiểm tra máy tính: P/Y đang là bao nhiêu? Màn hình có hiện chữ BGN không?',
    ],
    sections,
    glossary,
    practice,
    widgets,
    slides: [],
    wrapup: [
      'Viết 3 ý chính của buổi học bằng lời của bạn.',
      'Công thức nào bạn dễ nhầm nhất? Viết lại nó.',
      'Còn câu hỏi nào chưa rõ? Ghi lại để hỏi.',
    ],
  };
}());
