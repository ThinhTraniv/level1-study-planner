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
<p>Tiếp theo: tab <b>Luyện tập</b> 10 câu.</p>`,
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
    { q: 'Nhà đầu tư mua 1 cổ phiếu giá 40 tại t = 0. Tại t = 1 nhận cổ tức 1 và mua thêm 1 cổ phiếu giá 45. Tại t = 2 nhận cổ tức 1/cổ phiếu và bán cả 2 cổ phiếu giá 50. MWR mỗi kỳ gần nhất với:', choices: ['14,16%', '11,57%', '13,89%'], answer: 2, explain: 'CF0 = -40, CF1 = 1 - 45 = -44, CF2 = 2 + 100 = 102 → IRR = 13,89%. Đáp án A là TWR. Đáp án B bỏ qua cổ tức (-40, -45, 100).' },
    { q: 'Cùng dữ liệu câu trên. TWR mỗi kỳ (đã quy về một kỳ) gần nhất với:', choices: ['14,16%', '30,33%', '13,89%'], answer: 0, explain: 'HPR1 = 46/40 - 1 = 15%; HPR2 = 51/45 - 1 = 13,33%. TWR = (1,15 x 1,1333)^(1/2) - 1 = 14,16%. Đáp án B là TWR cả 2 kỳ chưa lấy căn. Đáp án C là MWR.' },
    { q: 'Thước đo nào phù hợp nhất để đánh giá nhà quản lý quỹ mở, khi khách hàng tự quyết định thời điểm nộp và rút tiền?', choices: ['Money-weighted return', 'Time-weighted return', 'Trung bình cộng giá trị danh mục'], answer: 1, explain: 'TWR loại bỏ ảnh hưởng của dòng tiền mà nhà quản lý không kiểm soát. MWR phù hợp khi chính nhà quản lý quyết định dòng tiền.' },
    { q: 'MWR của một khách hàng cao hơn đáng kể so với TWR của danh mục. Giải thích hợp lý nhất:', choices: ['Khách hàng nộp thêm tiền ngay trước giai đoạn danh mục tăng mạnh', 'Khách hàng nộp thêm tiền ngay trước giai đoạn danh mục giảm mạnh', 'Không có dòng tiền vào ra trong kỳ'], answer: 0, explain: 'Nhiều tiền hơn được đầu tư vào giai đoạn tốt → MWR cao hơn TWR. Đáp án B cho MWR thấp hơn. Đáp án C cho MWR = TWR.' },
    { q: 'Danh mục đầu năm trị giá 200. Cuối quý 2 trị giá 220, khách hàng nộp thêm 30. Cuối năm danh mục trị giá 240. TWR của năm gần nhất với:', choices: ['20,00%', '2,30%', '5,60%'], answer: 2, explain: 'HPR1 = 220/200 - 1 = 10%; HPR2 = 240/250 - 1 = -4%. TWR = 1,10 x 0,96 - 1 = 5,6%. Đáp án A là 240/200 - 1, tính cả tiền nộp thêm như lợi nhuận. Đáp án B là MWR tính cho mỗi nửa năm (IRR của -200, -30, 240): vừa là MWR chứ không phải TWR, vừa chưa quy về năm.' },
    { q: 'Chỉ số gồm 3 cổ phiếu, giá đầu kỳ 10, 40, 90 và cuối kỳ 12, 38, 99. Price return của chỉ số price-weighted gần nhất với:', choices: ['10,00%', '6,43%', '8,33%'], answer: 1, explain: '(12 + 38 + 99)/(10 + 40 + 90) - 1 = 149/140 - 1 = 6,43%. Đáp án C là equal-weighted; đáp án A là market-cap weighted (câu sau).' },
    { q: 'Cùng dữ liệu câu trên. Price return của chỉ số equal-weighted gần nhất với:', choices: ['8,33%', '6,43%', '10,00%'], answer: 0, explain: 'Return từng cổ phiếu: 20%, -5%, 10%. Trung bình = 8,33%. Đáp án B là price-weighted.' },
    { q: 'Cùng dữ liệu, số cổ phiếu lưu hành lần lượt 300, 50, 20 (triệu). Chỉ số market-cap weighted bắt đầu ở 500. Giá trị cuối kỳ gần nhất với:', choices: ['532,14', '541,67', '550,00'], answer: 2, explain: 'Vốn hóa đầu 3.000 + 2.000 + 1.800 = 6.800; cuối 3.600 + 1.900 + 1.980 = 7.480 → return 10%. Chỉ số = 500 x 1,10 = 550. Đáp án A dùng return price-weighted, đáp án B dùng equal-weighted.' },
    { q: 'Loại chỉ số nào phải tái cân bằng định kỳ để giữ trọng số mục tiêu, ngay cả khi danh sách thành phần không đổi?', choices: ['Price-weighted', 'Equal-weighted', 'Market-cap weighted'], answer: 1, explain: 'Khi giá thay đổi, trọng số equal-weighted lệch khỏi 1/N nên phải tái cân bằng. Market-cap weighted tự cân bằng. Price-weighted không có trọng số mục tiêu cần giữ, chỉ điều chỉnh divisor khi tách cổ phiếu.' },
    { q: 'Cùng dữ liệu câu 8, cổ tức trong kỳ lần lượt 0,2; 1,0; 0 mỗi cổ phiếu. Total return của chỉ số market-cap weighted gần nhất với:', choices: ['11,62%', '10,00%', '1,62%'], answer: 0, explain: 'Tổng cổ tức = 0,2 x 300 + 1 x 50 = 110. Total return = (7.480 + 110)/6.800 - 1 = 11,62%. Đáp án B là price return. Đáp án C chỉ là phần cổ tức.' },
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
