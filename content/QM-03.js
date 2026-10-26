// Bài giảng QM-03 - Benchmarking Returns (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t, frac, keys, timeline, pages } = window.CFAH;

  const sections = [
    {
      title: '1. Bức tranh lớn: đo return đúng cách, rồi so với điểm chuẩn',
      minutes: 5,
      html: `
<p>Một quỹ báo lãi 12% năm qua. Câu hỏi đầu tiên: 12% này <b>đo bằng cách nào</b>? Câu hỏi thứ hai: <b>so với cái gì</b> thì 12% là tốt?</p>
<ol>
<li><b>LOS 1 - MWR và TWR</b>: khi nhà đầu tư nộp thêm hoặc rút tiền giữa kỳ, có hai cách đo return. ${t('mwr', 'MWR')} đo trải nghiệm của <b>nhà đầu tư</b>; ${t('twr', 'TWR')} đo kỹ năng của <b>nhà quản lý</b>.</li>
<li><b>LOS 2 - Chỉ số (index)</b>: điểm chuẩn phổ biến nhất là một chỉ số thị trường. Cách chọn trọng số (theo giá, bằng nhau, theo vốn hóa, theo cơ bản) làm cùng một rổ cổ phiếu cho ra return khác nhau.</li>
</ol>
<div class="key">Đánh giá nhà quản lý quỹ: dùng TWR của quỹ, so với return của chỉ số tham chiếu (${t('benchmark', 'benchmark')}) cùng kỳ. Ví dụ quỹ lãi 12% khi chỉ số tăng 15% là <b>kém</b> hơn thị trường 3%.</div>
<p class="tip">Kiến thức dùng lại: HPR và trung bình nhân (QM-02), dòng tiền và IRR trên BA II Plus (QM-04 dùng chung hàm <kbd>CF</kbd>).</p>`,
    },
    {
      title: '2. Money-weighted return (MWR) = IRR',
      minutes: 11,
      html: `
<p>${t('mwr', 'Money-weighted rate of return')} là lãi suất làm <b>PV dòng tiền vào = PV dòng tiền ra</b> của nhà đầu tư. Đó chính là ${t('irr', 'IRR')}.</p>
<div class="formula">0 = CF<sub>0</sub> + ${frac('CF<sub>1</sub>', '(1 + MWR)')} + ${frac('CF<sub>2</sub>', '(1 + MWR)<sup>2</sup>')} + ... + ${frac('CF<sub>N</sub>', '(1 + MWR)<sup>N</sup>')}</div>
<p>Quy ước dấu theo góc nhìn nhà đầu tư: tiền bỏ vào (mua, nộp thêm) là <b>âm</b>; tiền nhận về (cổ tức, rút ra, giá trị cuối kỳ) là <b>dương</b>. Tại cùng một thời điểm, cộng gộp các dòng tiền lại.</p>

<div class="example"><div class="ex-h">Ví dụ 2.1</div>
<p>t = 0: mua 2 cổ phiếu giá 50. Cuối năm 1: nhận cổ tức 1/cổ phiếu, mua thêm 1 cổ phiếu giá 60. Cuối năm 2: nhận cổ tức 1/cổ phiếu, bán cả 3 cổ phiếu giá 58. Tính MWR.</p>
${timeline(2, [{ t: 0, label: '-100', up: true, cls: 'pv' }, { t: 1, label: '+2 - 60 = -58' }, { t: 2, label: '+3 + 174 = +177' }], 'Dòng tiền ròng của nhà đầu tư tại mỗi thời điểm.')}
<details><summary>Xem lời giải</summary>
${keys([
  ['Mở CF, xóa dữ liệu cũ', '[CF] [2ND] [CE/C]', 'CF0 = 0'],
  ['CF0', '100 [+/-] [ENTER]', 'CF0 = -100'],
  ['C01', '[↓] 58 [+/-] [ENTER]', 'C01 = -58'],
  ['F01 giữ 1', '[↓]', 'F01 = 1'],
  ['C02', '[↓] 177 [ENTER]', 'C02 = 177'],
  ['Tính IRR', '[IRR] [CPT]', 'IRR = 7.1653'],
])}
<p>MWR = <b>7,17%</b>/năm. Kiểm tra: -100 - 58/1,0717 + 177/1,0717<sup>2</sup> ≈ 0.</p></details></div>
<p class="warn"><b>Bẫy:</b> quên cổ tức ở t = 1 (để -60 thay vì -58), hoặc quên cổ tức trên <b>cả 3</b> cổ phiếu ở t = 2. Luôn vẽ trục thời gian và tính số cổ phiếu đang nắm tại mỗi thời điểm.</p>
<p class="tip">MWR phụ thuộc vào <b>thời điểm và quy mô</b> tiền nộp thêm/rút ra. Nó trả lời: "với cách tôi nộp/rút tiền, tôi thực sự kiếm được bao nhiêu?"</p>`,
    },
    {
      title: '3. Time-weighted return (TWR)',
      minutes: 12,
      html: `
<p>${t('twr', 'Time-weighted rate of return')} loại bỏ ảnh hưởng của dòng tiền vào/ra. Cách làm 3 bước:</p>
<ol>
<li>Chia thời gian thành các ${t('subperiod', 'kỳ con (subperiod)')}, mỗi lần có dòng tiền vào/ra thì cắt một kỳ.</li>
<li>Tính HPR từng kỳ con.</li>
<li>Nối lại bằng phép nhân; nếu tổng thời gian dài hơn 1 năm thì lấy trung bình nhân để quy về năm.</li>
</ol>
<div class="formula">1 + TWR<sub>cả kỳ</sub> = (1 + HPR<sub>1</sub>)(1 + HPR<sub>2</sub>)...(1 + HPR<sub>N</sub>) &nbsp;&nbsp;&nbsp; TWR<sub>năm</sub> = (1 + TWR<sub>cả kỳ</sub>)<sup>1/số năm</sup> - 1</div>

<div class="example"><div class="ex-h">Ví dụ 3.1 (cùng dữ liệu ví dụ 2.1)</div>
<details><summary>Xem lời giải</summary>
<p>Năm 1 (tính trên 1 cổ phiếu): (60 + 1)/50 - 1 = <b>22%</b>.<br>
Năm 2: (58 + 1)/60 - 1 = <b>-1,667%</b>.<br>
TWR cả 2 năm = 1,22 × 0,98333 - 1 = 19,97%; TWR năm = 1,1997<sup>1/2</sup> - 1 = <b>9,53%</b>.</p>
<p>So sánh: MWR 7,17% &lt; TWR 9,53%. Vì nhà đầu tư mua thêm ngay <b>trước</b> năm cổ phiếu giảm giá, nhiều tiền hơn chịu return xấu.</p></details></div>

<div class="example"><div class="ex-h">Ví dụ 3.2 - Danh mục có nộp thêm tiền</div>
<p>Danh mục đầu năm 1 trị giá 100. Cuối năm 1 trị giá 110, khách hàng nộp thêm 50 (thành 160). Cuối năm 2 trị giá 152. Tính TWR năm và MWR.</p>
<details><summary>Xem lời giải</summary>
<p>HPR<sub>1</sub> = 110/100 - 1 = 10%. HPR<sub>2</sub> = 152/160 - 1 = -5%.<br>
TWR cả kỳ = 1,10 × 0,95 - 1 = 4,5%; TWR năm = 1,045<sup>1/2</sup> - 1 = <b>2,23%</b>.<br>
MWR: CF0 = -100, CF1 = -50, CF2 = +152 → IRR = <b>0,80%</b>.</p>
<p class="warn">Chú ý: HPR<sub>2</sub> tính trên giá trị <b>sau khi</b> nộp thêm (160), không phải 110.</p></details></div>`,
    },
    {
      title: '4. So sánh MWR và TWR: dùng cái nào?',
      minutes: 7,
      html: `
<table class="plain"><thead><tr><th></th><th>MWR</th><th>TWR</th></tr></thead><tbody>
<tr><td>Bản chất</td><td>IRR của dòng tiền nhà đầu tư</td><td>Trung bình nhân của HPR các kỳ con</td></tr>
<tr><td>Bị ảnh hưởng bởi dòng tiền vào/ra?</td><td>Có</td><td>Không</td></tr>
<tr><td>Đo cái gì</td><td>Trải nghiệm của nhà đầu tư</td><td>Kỹ năng nhà quản lý</td></tr>
<tr><td>Dùng khi</td><td>Nhà quản lý quyết định thời điểm và quy mô dòng tiền (ví dụ quỹ private equity gọi vốn)</td><td>Khách hàng tự quyết nộp/rút; chuẩn ngành cho quỹ mở</td></tr>
<tr><td>Dữ liệu cần</td><td>Chỉ dòng tiền và giá trị cuối</td><td>Giá trị danh mục tại mỗi lần có dòng tiền</td></tr>
</tbody></table>
<div class="key">Nộp tiền <b>trước</b> giai đoạn tốt (hoặc rút trước giai đoạn xấu) → MWR &gt; TWR.<br>Nộp tiền <b>trước</b> giai đoạn xấu (hoặc rút trước giai đoạn tốt) → MWR &lt; TWR.<br>Không có dòng tiền giữa kỳ → MWR = TWR.</div>
<p class="tip">Nếu nhà quản lý không kiểm soát được việc khách hàng nộp/rút tiền, phạt hay thưởng họ theo MWR là không công bằng. Vì vậy ngành quản lý quỹ ưu tiên TWR.</p>`,
    },
    {
      title: '5. Chỉ số: giá trị, price return và total return',
      minutes: 10,
      html: `
<p>Một ${t('index', 'chỉ số (index)')} là một danh mục giả định gồm các chứng khoán thành phần với trọng số w<sub>i</sub>. Return của chỉ số là trung bình có trọng số return của các thành phần:</p>
<div class="formula">PR<sub>I</sub> = Σ w<sub>i</sub> × ${frac('P<sub>i,1</sub> - P<sub>i,0</sub>', 'P<sub>i,0</sub>')} &nbsp;&nbsp;&nbsp;&nbsp; TR<sub>I</sub> = Σ w<sub>i</sub> × ${frac('P<sub>i,1</sub> - P<sub>i,0</sub> + D<sub>i</sub>', 'P<sub>i,0</sub>')}</div>
<div class="formula">V<sub>1</sub> = V<sub>0</sub> × (1 + R<sub>I</sub>)</div>
<ul>
<li>${t('pri', 'Price return index')}: chỉ phản ánh thay đổi giá. Phần lớn chỉ số báo chí đăng (ví dụ VN-Index) là loại này. VN-Index còn là chỉ số đặt trọng số theo vốn hóa thị trường (market-cap weighted).</li>
<li>${t('tri', 'Total return index')}: giả định cổ tức/lãi được <b>tái đầu tư</b> vào chỉ số. Đây mới là điểm chuẩn công bằng cho quỹ, vì quỹ có nhận cổ tức.</li>
</ul>
<p>Hai chỉ số bắt đầu cùng giá trị. Theo thời gian total return index luôn cao hơn (khi có cổ tức), và khoảng cách tăng dần do tái đầu tư ghép lãi.</p>
<div class="example"><div class="ex-h">Ví dụ 5.1</div>
<p>Chỉ số theo vốn hóa (dữ liệu bảng ở phần 6) có price return 4,286% và tổng cổ tức bằng 2% vốn hóa đầu kỳ. Cả hai chỉ số bắt đầu ở 1.000. Giá trị cuối kỳ?</p>
<details><summary>Xem lời giải</summary><p>Price return index: 1.000 × 1,04286 = <b>1.042,86</b>.<br>Total return: 4,286% + 2% = 6,286% → total return index = <b>1.062,86</b>.</p></details></div>
<p class="warn"><b>Bẫy:</b> so quỹ (đã nhận cổ tức) với price return index làm quỹ trông tốt hơn thực tế.</p>`,
    },
    {
      title: '6. Bốn cách đặt trọng số cho chỉ số',
      minutes: 15,
      html: `
<p>Dùng chung một rổ 3 cổ phiếu (số lượng tính bằng triệu):</p>
<table class="plain"><thead><tr><th>Cổ phiếu</th><th>Giá đầu</th><th>Giá cuối</th><th>Cổ tức</th><th>CP lưu hành</th><th>CP tự do chuyển nhượng</th><th>Lợi nhuận</th></tr></thead><tbody>
<tr><td>X</td><td>20</td><td>22</td><td>0,5</td><td>100</td><td>60</td><td>150</td></tr>
<tr><td>Y</td><td>50</td><td>45</td><td>1,0</td><td>20</td><td>20</td><td>120</td></tr>
<tr><td>Z</td><td>100</td><td>110</td><td>0</td><td>5</td><td>4</td><td>30</td></tr>
</tbody></table>
<p>Price return từng cổ phiếu: X +10%, Y -10%, Z +10%.</p>

<h4>a) ${t('pw', 'Price-weighted')}</h4>
<div class="formula">Giá trị chỉ số = ${frac('Σ P<sub>i</sub>', 'divisor')} &nbsp;&nbsp; w<sub>i</sub> = ${frac('P<sub>i</sub>', 'Σ P<sub>i</sub>')}</div>
<p>Đầu kỳ (170)/3 = 56,667; cuối kỳ (177)/3 = 59. Return = 177/170 - 1 = <b>4,118%</b>. Z có trọng số 58,8% chỉ vì <b>giá cao nhất</b>, dù vốn hóa nhỏ nhất.</p>
<p>Khi Z tách 2:1 (giá 110 → 55), phải đổi ${t('divisor', 'divisor')} để chỉ số không nhảy: divisor mới = (22 + 45 + 55)/59 = <b>2,0678</b>. Sau khi tách, trọng số của Z giảm một nửa dù không có gì thay đổi về kinh tế.</p>

<h4>b) ${t('ew', 'Equal-weighted')}</h4>
<p>Mỗi cổ phiếu 1/3: return = (10% - 10% + 10%)/3 = <b>3,333%</b>. Đơn giản, không bị vài mã lớn chi phối, nhưng nghiêng về cổ phiếu nhỏ và phải ${t('rebal', 'tái cân bằng')} thường xuyên vì trọng số trôi theo giá.</p>

<h4>c) ${t('mcw', 'Market-cap weighted')} và ${t('float', 'float-adjusted')}</h4>
<p>Vốn hóa đầu kỳ: X 2.000, Y 1.000, Z 500 (tổng 3.500) → trọng số 57,1% / 28,6% / 14,3%. Cuối kỳ 3.650 → return = <b>4,286%</b>.</p>
<p>Float-adjusted chỉ tính cổ phiếu tự do chuyển nhượng: 1.200 / 1.000 / 400 (tổng 2.600) → cuối kỳ 2.660 → return = <b>2,308%</b>. Y chiếm tỷ trọng lớn hơn vì toàn bộ cổ phiếu Y đều tự do chuyển nhượng.</p>

<h4>d) ${t('fund', 'Fundamental weighting')}</h4>
<p>Trọng số theo chỉ tiêu cơ bản như lợi nhuận, doanh thu, giá trị sổ sách, cổ tức. Theo lợi nhuận: 150/120/30 → 50% / 40% / 10% → return = 0,5 × 10% + 0,4 × (-10%) + 0,1 × 10% = <b>2,0%</b>.</p>

<h4>Thử ngay: đổi giá cuối kỳ</h4>
<div class="widget" data-widget="indexWeights"></div>

<table class="plain"><thead><tr><th>Phương pháp</th><th>Ưu điểm</th><th>Nhược điểm</th></tr></thead><tbody>
<tr><td>Price-weighted</td><td>Đơn giản, lịch sử dài (Dow Jones, Nikkei 225)</td><td>Trọng số tùy tiện theo giá; tách cổ phiếu làm đổi trọng số</td></tr>
<tr><td>Equal-weighted</td><td>Đơn giản, đa dạng hóa</td><td>Nghiêng cổ phiếu nhỏ, kém thanh khoản; tái cân bằng thường xuyên</td></tr>
<tr><td>Market-cap / float</td><td>Phản ánh giá trị thị trường; tự cân bằng khi giá đổi</td><td>Dồn trọng số vào cổ phiếu đã tăng giá mạnh (có thể đang đắt), dễ tập trung</td></tr>
<tr><td>Fundamental</td><td>Tránh dồn vào cổ phiếu đắt; nghiêng về cổ phiếu giá trị</td><td>Cần dữ liệu kế toán; khác biệt lớn với thị trường</td></tr>
</tbody></table>`,
    },
    {
      title: '7. Tái cân bằng và tái cấu trúc chỉ số',
      minutes: 5,
      html: `
<ul>
<li>${t('rebal', 'Rebalancing')} (tái cân bằng): <b>điều chỉnh lại trọng số</b> về mục tiêu theo định kỳ, giữ nguyên danh sách thành phần. Quan trọng nhất với chỉ số equal-weighted: cổ phiếu tăng giá sẽ có trọng số vượt 1/N, phải bán bớt cổ phiếu đã tăng và mua thêm cổ phiếu đã giảm.</li>
<li>${t('recon', 'Reconstitution')} (tái cấu trúc): <b>thay đổi danh sách thành phần</b>: thêm cổ phiếu mới đủ tiêu chí, loại cổ phiếu không còn đủ tiêu chí.</li>
</ul>
<div class="key">Chỉ số market-cap weighted <b>tự cân bằng</b>: khi giá đổi, vốn hóa đổi theo, trọng số tự cập nhật. Nó chỉ cần điều chỉnh khi có phát hành thêm, mua lại cổ phiếu hoặc tái cấu trúc.</div>
<p>Hệ quả: tái cân bằng và tái cấu trúc làm phát sinh giao dịch thực tế cho các quỹ mô phỏng chỉ số (chi phí giao dịch, áp lực mua/bán lên cổ phiếu được thêm vào hoặc loại ra). Chỉ số thì không chịu chi phí này, nên quỹ chỉ số thường thấp hơn chỉ số một chút.</p>`,
    },
    {
      title: '8. Tóm tắt và bẫy thường gặp',
      minutes: 5,
      html: `
<table class="plain"><thead><tr><th>Tình huống</th><th>Nhớ</th></tr></thead><tbody>
<tr><td>MWR</td><td>IRR của dòng tiền nhà đầu tư; bấm <kbd>CF</kbd> rồi <kbd>IRR</kbd> <kbd>CPT</kbd></td></tr>
<tr><td>Dấu dòng tiền MWR</td><td>Mua/nộp: âm; cổ tức, rút, giá trị cuối: dương; gộp cùng thời điểm</td></tr>
<tr><td>TWR</td><td>Cắt kỳ con tại mỗi dòng tiền, nhân (1 + HPR), lấy căn số năm</td></tr>
<tr><td>HPR kỳ con</td><td>Mẫu số là giá trị <b>sau</b> dòng tiền vào/ra</td></tr>
<tr><td>MWR &lt; TWR</td><td>Tiền vào trước giai đoạn xấu</td></tr>
<tr><td>Đánh giá nhà quản lý</td><td>TWR (họ không kiểm soát dòng tiền khách hàng)</td></tr>
<tr><td>Price-weighted</td><td>Cổ phiếu giá cao chi phối; tách cổ phiếu → đổi divisor</td></tr>
<tr><td>Equal-weighted</td><td>Trung bình cộng return; cần tái cân bằng thường xuyên</td></tr>
<tr><td>Market-cap</td><td>Tự cân bằng; float-adjusted chỉ tính cổ phiếu tự do chuyển nhượng</td></tr>
<tr><td>Total và price return</td><td>Total cộng thêm cổ tức tái đầu tư; benchmark công bằng cho quỹ</td></tr>
</tbody></table>
<p>Tiếp theo: tab <b>Luyện tập</b> 10 câu (rút ngẫu nhiên từ ngân hàng 30 câu, mỗi lần làm một bộ khác).</p>`,
    },
  ];

  const glossary = {
    mwr: ['Money-weighted rate of return (MWR)', 'Return gia quyền theo tiền', 'IRR của các dòng tiền vào/ra của nhà đầu tư; chịu ảnh hưởng bởi thời điểm và quy mô dòng tiền.'],
    twr: ['Time-weighted rate of return (TWR)', 'Return gia quyền theo thời gian', 'Trung bình nhân HPR các kỳ con; loại bỏ ảnh hưởng của dòng tiền vào/ra.'],
    irr: ['Internal rate of return (IRR)', 'Tỷ suất hoàn vốn nội bộ', 'Lãi suất làm NPV của chuỗi dòng tiền bằng 0.'],
    subperiod: ['Subperiod', 'Kỳ con', 'Khoảng thời gian giữa hai lần có dòng tiền vào/ra, dùng để tính TWR.'],
    benchmark: ['Benchmark', 'Điểm chuẩn', 'Danh mục hoặc chỉ số dùng để so sánh hiệu quả của nhà quản lý.'],
    index: ['Security market index', 'Chỉ số thị trường', 'Danh mục giả định đại diện cho một thị trường hoặc phân khúc, với quy tắc chọn thành phần và trọng số.'],
    pri: ['Price return index', 'Chỉ số lợi suất giá', 'Chỉ số chỉ phản ánh thay đổi giá của thành phần.'],
    tri: ['Total return index', 'Chỉ số tổng lợi suất', 'Chỉ số phản ánh thay đổi giá cộng thu nhập (cổ tức, lãi) được tái đầu tư.'],
    pw: ['Price weighting', 'Gia quyền theo giá', 'Trọng số tỷ lệ với giá cổ phiếu; giá trị chỉ số = tổng giá / divisor.'],
    divisor: ['Divisor', 'Số chia', 'Mẫu số của chỉ số price-weighted, được điều chỉnh khi tách cổ phiếu hoặc thay thành phần để chỉ số không bị nhảy.'],
    ew: ['Equal weighting', 'Gia quyền bằng nhau', 'Mỗi thành phần có cùng trọng số 1/N.'],
    mcw: ['Market-capitalization weighting', 'Gia quyền theo vốn hóa', 'Trọng số tỷ lệ với giá × số cổ phiếu lưu hành.'],
    float: ['Float-adjusted market-cap weighting', 'Gia quyền theo vốn hóa tự do chuyển nhượng', 'Chỉ tính cổ phiếu sẵn sàng giao dịch, loại phần cổ đông chiến lược, nhà nước nắm giữ.'],
    fund: ['Fundamental weighting', 'Gia quyền theo chỉ tiêu cơ bản', 'Trọng số theo lợi nhuận, doanh thu, giá trị sổ sách hoặc cổ tức thay vì giá thị trường.'],
    rebal: ['Rebalancing', 'Tái cân bằng', 'Điều chỉnh trọng số về mục tiêu theo định kỳ, giữ nguyên danh sách thành phần.'],
    recon: ['Reconstitution', 'Tái cấu trúc', 'Thay đổi danh sách thành phần: thêm hoặc loại chứng khoán.'],
  };

  const practice = [
    { q: 'Nhà đầu tư mua 1 cổ phiếu giá 40 tại t = 0. Tại t = 1 nhận cổ tức 1 và mua thêm 1 cổ phiếu giá 45. Tại t = 2 nhận cổ tức 1/cổ phiếu và bán cả 2 cổ phiếu giá 50. MWR mỗi kỳ gần nhất với:', choices: ['14,16%', '11,57%', '13,89%'], answer: 2, explain: 'CF0 = -40, CF1 = 1 - 45 = -44, CF2 = 2 + 100 = 102 → IRR = 13,89%. Lựa chọn 14,16% là TWR. Lựa chọn 11,57% bỏ qua cổ tức (-40, -45, 100).' },
    { q: 'Nhà đầu tư mua 1 cổ phiếu giá 40 tại t = 0. Tại t = 1 nhận cổ tức 1 và mua thêm 1 cổ phiếu giá 45. Tại t = 2 nhận cổ tức 1/cổ phiếu và bán cả 2 cổ phiếu giá 50. TWR mỗi kỳ (đã quy về một kỳ) gần nhất với:', choices: ['14,16%', '30,33%', '13,89%'], answer: 0, explain: 'HPR1 = 46/40 - 1 = 15%; HPR2 = 51/45 - 1 = 13,33%. TWR = (1,15 x 1,1333)^(1/2) - 1 = 14,16%. Lựa chọn 30,33% là TWR cả 2 kỳ chưa lấy căn. Lựa chọn 13,89% là MWR.' },
    { q: 'Thước đo nào phù hợp nhất để đánh giá nhà quản lý quỹ mở, khi khách hàng tự quyết định thời điểm nộp và rút tiền?', choices: ['Money-weighted return', 'Time-weighted return', 'Trung bình cộng giá trị danh mục'], answer: 1, explain: 'TWR loại bỏ ảnh hưởng của dòng tiền mà nhà quản lý không kiểm soát. MWR phù hợp khi chính nhà quản lý quyết định dòng tiền.' },
    { q: 'MWR của một khách hàng cao hơn đáng kể so với TWR của danh mục. Giải thích hợp lý nhất:', choices: ['Khách hàng nộp thêm tiền ngay trước giai đoạn danh mục tăng mạnh', 'Khách hàng nộp thêm tiền ngay trước giai đoạn danh mục giảm mạnh', 'Không có dòng tiền vào ra trong kỳ'], answer: 0, explain: 'Nhiều tiền hơn được đầu tư vào giai đoạn tốt → MWR cao hơn TWR. Nộp tiền ngay trước giai đoạn giảm mạnh thì MWR thấp hơn TWR. Không có dòng tiền vào ra thì MWR = TWR.' },
    { q: 'Danh mục đầu năm trị giá 200. Cuối quý 2 trị giá 220, khách hàng nộp thêm 30. Cuối năm danh mục trị giá 240. TWR của năm gần nhất với:', choices: ['20,00%', '2,30%', '5,60%'], answer: 2, explain: 'HPR1 = 220/200 - 1 = 10%; HPR2 = 240/250 - 1 = -4%. TWR = 1,10 x 0,96 - 1 = 5,6%. Lựa chọn 20,00% là 240/200 - 1, tính cả tiền nộp thêm như lợi nhuận. Lựa chọn 2,30% là MWR tính cho mỗi nửa năm (IRR của -200, -30, 240): vừa là MWR chứ không phải TWR, vừa chưa quy về năm.' },
    { q: 'Chỉ số gồm 3 cổ phiếu, giá đầu kỳ 10, 40, 90 và cuối kỳ 12, 38, 99. Price return của chỉ số price-weighted gần nhất với:', choices: ['10,00%', '6,43%', '8,33%'], answer: 1, explain: '(12 + 38 + 99)/(10 + 40 + 90) - 1 = 149/140 - 1 = 6,43%. Lựa chọn 8,33% là equal-weighted; lựa chọn 10,00% là market-cap weighted.' },
    { q: 'Chỉ số gồm 3 cổ phiếu, giá đầu kỳ 10, 40, 90 và cuối kỳ 12, 38, 99. Price return của chỉ số equal-weighted gần nhất với:', choices: ['8,33%', '6,43%', '10,00%'], answer: 0, explain: 'Return từng cổ phiếu: 20%, -5%, 10%. Trung bình = 8,33%. Lựa chọn 6,43% là price-weighted.' },
    { q: 'Chỉ số gồm 3 cổ phiếu, giá đầu kỳ 10, 40, 90 và cuối kỳ 12, 38, 99; số cổ phiếu lưu hành lần lượt 300, 50, 20 (triệu). Chỉ số market-cap weighted bắt đầu ở 500. Giá trị cuối kỳ gần nhất với:', choices: ['532,14', '541,67', '550,00'], answer: 2, explain: 'Vốn hóa đầu 3.000 + 2.000 + 1.800 = 6.800; cuối 3.600 + 1.900 + 1.980 = 7.480 → return 10%. Chỉ số = 500 x 1,10 = 550. Lựa chọn 532,14 dùng return price-weighted, lựa chọn 541,67 dùng return equal-weighted.' },
    { q: 'Loại chỉ số nào phải tái cân bằng định kỳ để giữ trọng số mục tiêu, ngay cả khi danh sách thành phần không đổi?', choices: ['Price-weighted', 'Equal-weighted', 'Market-cap weighted'], answer: 1, explain: 'Khi giá thay đổi, trọng số equal-weighted lệch khỏi 1/N nên phải tái cân bằng. Market-cap weighted tự cân bằng. Price-weighted không có trọng số mục tiêu cần giữ, chỉ điều chỉnh divisor khi tách cổ phiếu.' },
    { q: 'Chỉ số market-cap weighted gồm 3 cổ phiếu: giá đầu kỳ 10, 40, 90; giá cuối kỳ 12, 38, 99; số cổ phiếu lưu hành 300, 50, 20 (triệu); cổ tức trong kỳ lần lượt 0,2; 1,0; 0 mỗi cổ phiếu. Total return của chỉ số gần nhất với:', choices: ['11,62%', '10,00%', '1,62%'], answer: 0, explain: 'Tổng cổ tức = 0,2 x 300 + 1 x 50 = 110. Total return = (7.480 + 110)/6.800 - 1 = 11,62%. Lựa chọn 10,00% là price return. Lựa chọn 1,62% chỉ là phần cổ tức.' },
    { q: "Nhà đầu tư nộp 1.000 USD vào quỹ tại t = 0 và nộp thêm 500 USD tại t = 1 (cuối năm 1). Cuối năm 2 tài khoản trị giá 1.720 USD. Không có khoản rút nào. MWR hằng năm gần nhất với:", choices: ["7,33%", "58,51%", "8,51%"], answer: 2, explain: "MWR là IRR của: CF0 = -1.000, CF1 = -500, CF2 = +1.720, giải ra 8,51%. Lựa chọn 7,33% lấy (1.720 - 1.500)/1.500 rồi chia 2, bỏ qua thời điểm của các dòng tiền. Lựa chọn 58,51% nhập khoản nộp thêm thành +500 như thể là khoản rút." },
    { q: "Danh mục đầu năm trị giá 500. Giữa năm danh mục trị giá 540 và khách hàng rút 100. Cuối năm danh mục trị giá 462. TWR của năm gần nhất với:", choices: ["13,40%", "-7,60%", "12,40%"], answer: 0, explain: "Kỳ con 1: 540/500 - 1 = 8%. Kỳ con 2 tính trên giá trị sau khi rút: 462/440 - 1 = 5%. TWR = 1,08 x 1,05 - 1 = 13,40%. Lựa chọn -7,60% dùng 540 (trước khi rút) làm mẫu số kỳ con 2. Lựa chọn 12,40% cộng lại khoản rút rồi chia cho vốn đầu kỳ, không tách kỳ con." },
    { q: "Trong 2 năm, một danh mục có ba kỳ con (cắt tại mỗi lần có dòng tiền vào/ra) với HPR lần lượt 6%, -2% và 8%. TWR quy năm gần nhất với:", choices: ["12,19%", "5,92%", "4,00%"], answer: 1, explain: "TWR cả kỳ = 1,06 x 0,98 x 1,08 - 1 = 12,19%. Vì kéo dài 2 năm: (1 + 12,19%)^(1/2) - 1 = 5,92%. Lựa chọn 12,19% chưa quy về năm. Lựa chọn 4,00% là trung bình cộng của ba HPR, không nối bằng phép nhân và không quy năm đúng cách." },
    { q: "Trong trường hợp nào MWR và TWR của một danh mục bằng nhau?", choices: ["Khách hàng nộp thêm tiền ngay trước giai đoạn danh mục tăng mạnh", "Không có dòng tiền vào hoặc ra giữa kỳ", "Danh mục được đánh giá lại mỗi ngày"], answer: 1, explain: "Không có dòng tiền giữa kỳ thì IRR chỉ phụ thuộc giá trị đầu và cuối, đúng bằng HPR nối các kỳ con, nên MWR = TWR. Nộp tiền trước giai đoạn tăng mạnh làm MWR > TWR. Đánh giá lại hằng ngày giúp tính TWR chính xác hơn nhưng không làm hai thước đo bằng nhau khi vẫn có dòng tiền." },
    { q: "Một quỹ private equity tự quyết định thời điểm gọi vốn và phân phối tiền cho nhà đầu tư. Thước đo phù hợp nhất để đánh giá nhà quản lý quỹ này là:", choices: ["Time-weighted return", "Price return của chỉ số tham chiếu", "Money-weighted return"], answer: 2, explain: "Khi nhà quản lý kiểm soát thời điểm và quy mô dòng tiền, ảnh hưởng của dòng tiền là một phần kỹ năng của họ, nên MWR (IRR) phù hợp. TWR loại bỏ ảnh hưởng dòng tiền, phù hợp khi khách hàng tự quyết nộp/rút. Price return của chỉ số là điểm chuẩn để so sánh, không phải thước đo return của nhà quản lý." },
    { q: "Khách hàng rút phần lớn tiền khỏi danh mục ngay trước giai đoạn danh mục tăng mạnh. So với TWR của danh mục, MWR của khách hàng nhiều khả năng:", choices: ["Thấp hơn", "Cao hơn", "Bằng nhau"], answer: 0, explain: "Sau khi rút, chỉ còn ít tiền được hưởng giai đoạn tăng mạnh, nên return tính theo tiền thực tế của khách hàng (MWR) thấp hơn TWR. \"Cao hơn\" là trường hợp nộp tiền trước giai đoạn tốt hoặc rút trước giai đoạn xấu. \"Bằng nhau\" chỉ xảy ra khi không có dòng tiền giữa kỳ." },
    { q: "Tại t = 0 mua 3 cổ phiếu giá 30. Tại t = 1 nhận cổ tức 0,5/cổ phiếu và bán 1 cổ phiếu giá 33. Tại t = 2 nhận cổ tức 0,5/cổ phiếu và bán 2 cổ phiếu còn lại giá 35. MWR mỗi kỳ gần nhất với:", choices: ["10,03%", "8,41%", "9,36%"], answer: 0, explain: "Dòng tiền: CF0 = -90; CF1 = 3 x 0,5 + 33 = 34,5; CF2 = 2 x 0,5 + 2 x 35 = 71. IRR = 10,03%. Lựa chọn 8,41% quên cổ tức (CF1 = 33, CF2 = 70). Lựa chọn 9,36% là IRR khi chỉ tính cổ tức trên 1 cổ phiếu tại t = 1 (CF1 = 33,5)." },
    { q: "So với MWR, việc tính TWR chính xác đòi hỏi thêm dữ liệu nào?", choices: ["Chỉ cần giá trị đầu kỳ và cuối kỳ của danh mục", "Giá trị danh mục tại mỗi thời điểm có dòng tiền vào/ra", "Lãi suất phi rủi ro trong từng kỳ con"], answer: 1, explain: "TWR cắt kỳ con tại mỗi dòng tiền và tính HPR từng kỳ, nên cần định giá danh mục ngay tại các thời điểm đó. \"Chỉ cần giá trị đầu và cuối\" không đủ khi có dòng tiền giữa kỳ (MWR mới chỉ cần dòng tiền và giá trị cuối). Lãi suất phi rủi ro không xuất hiện trong công thức TWR." },
    { q: "Chỉ số price-weighted gồm 3 cổ phiếu giá 30, 45 và 120, divisor hiện tại là 3. Cổ phiếu giá 120 tách 3:1. Divisor mới gần nhất với:", choices: ["3,0000", "1,0000", "1,7692"], answer: 2, explain: "Giá trị chỉ số trước tách = 195/3 = 65,00. Sau tách giá còn 40, tổng giá 115. Divisor mới = 115 / 65,00 = 1,7692, để chỉ số không nhảy. Lựa chọn 3,0000 giữ nguyên divisor, làm chỉ số giảm giả tạo xuống 38,33. Lựa chọn 1,0000 chia divisor cũ cho 3 theo tỷ lệ tách, sai vì chỉ một cổ phiếu tách." },
    { q: "Chỉ số float-adjusted market-cap weighted gồm 2 cổ phiếu. A: giá 40 lên 44, 100 triệu cổ phiếu lưu hành, 50 triệu tự do chuyển nhượng. B: giá 20 xuống 19, 150 triệu cổ phiếu lưu hành, toàn bộ tự do chuyển nhượng. Price return của chỉ số gần nhất với:", choices: ["3,57%", "2,50%", "1,00%"], answer: 2, explain: "Giá trị float đầu kỳ: 40 x 50 + 20 x 150 = 5.000; cuối kỳ: 44 x 50 + 19 x 150 = 5.050. Return = 1,00%. Lựa chọn 3,57% dùng toàn bộ cổ phiếu lưu hành (chỉ số market-cap không điều chỉnh float). Lựa chọn 2,50% là trung bình cộng của +10% và -5% (equal-weighted)." },
    { q: "Ba cổ phiếu X, Y, Z có price return 6%, -2%, 9%; doanh thu 300, 500, 200; vốn hóa đầu kỳ 1.000, 400, 600. Price return của chỉ số fundamental-weighted theo doanh thu gần nhất với:", choices: ["2,60%", "5,30%", "4,33%"], answer: 0, explain: "Trọng số theo doanh thu: 30% / 50% / 20%. Return = 0,3 x 6% + 0,5 x (-2%) + 0,2 x 9% = 2,60%. Lựa chọn 5,30% dùng trọng số vốn hóa (50% / 20% / 30%). Lựa chọn 4,33% là equal-weighted." },
    { q: "So với chỉ số market-cap weighted, chỉ số fundamental-weighted (theo lợi nhuận, doanh thu, giá trị sổ sách...) có đặc điểm nào?", choices: ["Tự cân bằng khi giá thay đổi nên không cần tái cân bằng", "Nghiêng về cổ phiếu giá trị và tránh dồn trọng số vào cổ phiếu đã tăng giá quá mạnh", "Dồn nhiều trọng số hơn vào cổ phiếu có P/E cao"], answer: 1, explain: "Trọng số không phụ thuộc giá, nên cổ phiếu có lợi nhuận lớn so với giá (P/E thấp) được trọng số cao hơn so với chỉ số vốn hóa: nghiêng về giá trị. \"Tự cân bằng\" là đặc điểm của chỉ số market-cap; chỉ số cơ bản phải tái cân bằng khi giá trôi khỏi trọng số cơ bản. \"Nhiều trọng số hơn cho P/E cao\" là ngược lại." },
    { q: "Nhược điểm chính của chỉ số market-cap weighted là:", choices: ["Phải tái cân bằng mỗi khi giá cổ phiếu thay đổi", "Dồn trọng số vào các cổ phiếu đã tăng giá mạnh, có thể đang bị định giá cao", "Trọng số bị thay đổi tùy tiện khi một cổ phiếu tách"], answer: 1, explain: "Cổ phiếu tăng giá thì vốn hóa và trọng số tăng theo, nên chỉ số dễ tập trung vào cổ phiếu đắt. \"Phải tái cân bằng khi giá đổi\" sai vì chỉ số vốn hóa tự cân bằng. \"Trọng số thay đổi khi tách cổ phiếu\" là nhược điểm của chỉ số price-weighted; tách cổ phiếu không đổi vốn hóa." },
    { q: "Một chỉ số bắt đầu năm ở mức 1.500 (cả price return index và total return index). Trong năm, price return là 6,2% và cổ tức của các thành phần bằng 2,1% giá trị đầu kỳ. Giá trị cuối năm của total return index gần nhất với:", choices: ["1.593,00", "1.531,50", "1.624,50"], answer: 2, explain: "Total return = 6,2% + 2,1% = 8,3%, nên total return index = 1.500 x 1,083 = 1.624,50. Lựa chọn 1.593,00 là price return index, bỏ cổ tức. Lựa chọn 1.531,50 chỉ tính cổ tức, bỏ thay đổi giá." },
    { q: "Một quỹ cổ phiếu tái đầu tư toàn bộ cổ tức nhận được. Nếu so sánh return của quỹ với price return index thay vì total return index, kết quả nhiều khả năng:", choices: ["Làm quỹ trông tốt hơn thực tế", "Làm quỹ trông kém hơn thực tế", "Không ảnh hưởng vì hai chỉ số luôn có cùng return"], answer: 0, explain: "Quỹ có nhận cổ tức, còn price return index thì không, nên điểm chuẩn bị thấp đi và quỹ trông vượt trội hơn thực tế. \"Kém hơn thực tế\" ngược chiều. \"Không ảnh hưởng\" sai vì khi có cổ tức, total return index luôn cao hơn price return index." },
    { q: "Định kỳ, nhà cung cấp chỉ số thêm các cổ phiếu mới đủ tiêu chí và loại các cổ phiếu không còn đủ tiêu chí. Hoạt động này gọi là:", choices: ["Reconstitution (tái cấu trúc)", "Rebalancing (tái cân bằng)", "Điều chỉnh divisor"], answer: 0, explain: "Thay đổi danh sách thành phần là reconstitution. Rebalancing chỉ điều chỉnh trọng số về mục tiêu, giữ nguyên danh sách. Điều chỉnh divisor là kỹ thuật giữ giá trị chỉ số liên tục khi có tách cổ phiếu hoặc thay thành phần, không phải tên của việc chọn thành phần." },
    { q: "Chỉ số market-cap weighted cần điều chỉnh trọng số chủ động khi nào?", choices: ["Mỗi khi giá cổ phiếu thành phần thay đổi", "Khi có phát hành thêm, mua lại cổ phiếu hoặc tái cấu trúc thành phần", "Định kỳ hằng quý để đưa mọi trọng số về bằng nhau"], answer: 1, explain: "Khi giá thay đổi, vốn hóa và trọng số tự cập nhật theo, nên chỉ số vốn hóa tự cân bằng; chỉ cần điều chỉnh khi số cổ phiếu thay đổi hoặc danh sách thay đổi. \"Mỗi khi giá thay đổi\" sai vì đó chính là điều chỉ số tự xử lý. \"Đưa mọi trọng số về bằng nhau\" là việc của chỉ số equal-weighted." },
    { q: "Chỉ số price-weighted gồm 3 cổ phiếu có giá đầu kỳ 18, 42, 90 và giá cuối kỳ 20, 40, 99. Divisor là 2,4 và không đổi trong kỳ. Giá trị chỉ số cuối kỳ gần nhất với:", choices: ["53,00", "65,91", "66,25"], answer: 2, explain: "Giá trị cuối = (20 + 40 + 99) / 2,4 = 159 / 2,4 = 66,25. Lựa chọn 53,00 chia cho số cổ phiếu (3) thay vì divisor. Lựa chọn 65,91 lấy giá trị đầu kỳ 62,50 nhân (1 + return equal-weighted), không phải cách tính chỉ số price-weighted." },
    { q: "Chỉ số equal-weighted gồm 2 cổ phiếu, mỗi cổ phiếu 50% đầu kỳ. Trong kỳ, cổ phiếu A tăng 20% và cổ phiếu B giảm 10%. Trước khi tái cân bằng, trọng số của A gần nhất với:", choices: ["60,00%", "50,00%", "57,14%"], answer: 2, explain: "Giá trị A: 0,5 x 1,2 = 0,60; B: 0,5 x 0,9 = 0,45; tổng 1,05. Trọng số A = 0,60/1,05 = 57,14%, nên khi tái cân bằng phải bán bớt A và mua thêm B. Lựa chọn 60,00% chia 0,60 cho giá trị đầu kỳ 1,00 thay vì giá trị cuối kỳ. Lựa chọn 50,00% là trọng số mục tiêu sau khi đã tái cân bằng." },
    { q: "Hai quỹ mở, khách hàng tự quyết định nộp và rút tiền. Quỹ A có TWR 8% và MWR 5%; quỹ B có TWR 7% và MWR 9%. Nhà quản lý nào thể hiện kỹ năng đầu tư tốt hơn?", choices: ["Nhà quản lý quỹ B, vì MWR cao hơn", "Nhà quản lý quỹ A, vì TWR cao hơn", "Không thể so sánh vì MWR và TWR của mỗi quỹ khác nhau"], answer: 1, explain: "Nhà quản lý không kiểm soát dòng tiền của khách hàng, nên kỹ năng được đo bằng TWR: 8% > 7%. MWR của B cao chủ yếu nhờ khách hàng nộp/rút đúng lúc, không phải kỹ năng của nhà quản lý. Hai quỹ vẫn so sánh được bằng TWR." },
  ];

  const widgets = {
    indexWeights(el) {
      const st = [['X', 20, 100, 60], ['Y', 50, 20, 20], ['Z', 100, 5, 4]];
      el.innerHTML = `<div class="w-row">${st.map(([n, p0]) => `<label>Giá cuối ${n} (đầu ${p0}): <b data-o="${n}">${p0}</b><input type="range" min="${p0 * 0.5}" max="${p0 * 1.5}" step="${p0 / 100}" value="${p0}" data-i="${n}"></label>`).join('')}</div>
        <div class="w-out"><div class="w-price" data-o="p"></div><div class="w-note" data-o="note"></div></div>`;
      const q = s => el.querySelector(s);
      const f = x => (x * 100).toFixed(2).replace('.', ',');
      const upd = () => {
        const p1 = st.map(([n]) => +q(`[data-i="${n}"]`).value);
        st.forEach(([n], i) => { q(`[data-o="${n}"]`).textContent = p1[i].toFixed(1).replace('.', ','); });
        const pw = p1.reduce((a, c) => a + c, 0) / st.reduce((a, s) => a + s[1], 0) - 1;
        const ew = st.reduce((a, s, i) => a + (p1[i] / s[1] - 1), 0) / 3;
        const mc = st.reduce((a, s, i) => a + p1[i] * s[2], 0) / st.reduce((a, s) => a + s[1] * s[2], 0) - 1;
        const fl = st.reduce((a, s, i) => a + p1[i] * s[3], 0) / st.reduce((a, s) => a + s[1] * s[3], 0) - 1;
        q('[data-o="p"]').textContent = `Price-weighted ${f(pw)}% · Equal ${f(ew)}% · Market-cap ${f(mc)}% · Float ${f(fl)}%`;
        q('[data-o="note"]').textContent = 'Thử tăng giá Z: price-weighted nhảy mạnh nhất vì Z có giá cao nhất. Thử giảm giá X: market-cap bị ảnh hưởng mạnh nhất vì X có vốn hóa lớn nhất.';
      };
      el.addEventListener('input', upd);
      upd();
    },
  };

  window.LESSONS['QM-03'] = {
    moduleId: 'QM-03',
    calculator: 'BA II Plus',
    warmup: [
      'Ôn QM-02: return ba năm 10%, -5%, 8%. Viết biểu thức trung bình nhân (chưa cần bấm máy).',
      'Bạn nộp thêm tiền vào quỹ ngay trước khi thị trường giảm mạnh. Theo bạn, return "của bạn" so với return "của quỹ" sẽ cao hơn hay thấp hơn?',
      'VN-Index được tính theo giá, theo vốn hóa hay bằng nhau? Đoán trước khi học.',
    ],
    sections,
    glossary,
    practice,
    widgets,
    slides: [],
    wrapup: [
      'Khi nào MWR thấp hơn TWR? Cho ví dụ bằng lời.',
      'Nêu một ưu điểm và một nhược điểm của từng cách đặt trọng số chỉ số.',
      'Khác nhau giữa rebalancing và reconstitution là gì?',
    ],
  };
}());
