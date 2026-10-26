// Bài giảng FI-08 - Yield and Yield Spread Measures for Floating-Rate Instruments (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t, frac, keys } = window.CFAH;

  const sections = [
    {
      title: '1. Bức tranh lớn',
      minutes: 3,
      html: `
<p>FI-07 đo lợi suất của trái phiếu coupon cố định. Module này xử lý hai nhóm công cụ có <b>lãi suất ngắn hạn</b>:</p>
<ol>
  <li>${t('frn', 'Trái phiếu lãi suất thả nổi (floating-rate note, FRN)')}: coupon thay đổi theo lãi suất tham chiếu, nên "lợi suất" của nó được đo bằng <b>spread</b>: quoted margin và discount margin. Ứng với LOS 1.</li>
  <li><b>Công cụ thị trường tiền tệ</b> (kỳ hạn ≤ 1 năm: T-bill, commercial paper, CD, repo): được yết theo những quy ước riêng (discount rate hay add-on rate, năm 360 hay 365 ngày). Phải quy đổi trước khi so sánh. Ứng với LOS 2.</li>
</ol>
<div class="key">Với FRN, <b>lãi suất tham chiếu (MRR)</b> đã tự điều chỉnh theo thị trường. Thứ duy nhất có thể "lệch" là <b>spread</b>: spread hợp đồng (cố định) so với spread thị trường đòi hỏi (thay đổi theo rủi ro tín dụng).</div>`,
    },
    {
      title: '2. FRN: quoted margin và discount margin',
      minutes: 8,
      html: `
<div class="formula">Coupon FRN = MRR + ${t('qm', 'quoted margin (QM)')}</div>
<p>${t('mrr', 'MRR (market reference rate)')} là lãi suất tham chiếu ngắn hạn, ví dụ SOFR kỳ hạn 3 tháng, được đặt lại (reset) đầu mỗi kỳ và trả cuối kỳ. Quoted margin là spread <b>ghi trong hợp đồng</b>, cố định suốt đời trái phiếu, phản ánh rủi ro tín dụng của tổ chức phát hành <b>tại lúc phát hành</b>.</p>
<p>${t('dm', 'Discount margin (DM)')}, còn gọi là required margin, là spread mà thị trường <b>đang đòi hỏi</b> hôm nay. Nó giống vai trò của YTM với trái phiếu cố định.</p>
<table class="plain"><thead><tr><th>Quan hệ (tại ngày reset)</th><th>Giá FRN</th><th>Tình huống thường gặp</th></tr></thead><tbody>
<tr><td>QM = DM</td><td>Bằng mệnh giá (par)</td><td>Tín nhiệm không đổi so với lúc phát hành</td></tr>
<tr><td>QM &lt; DM</td><td>Dưới mệnh giá (discount)</td><td>Tín nhiệm giảm: thị trường đòi spread cao hơn spread hợp đồng</td></tr>
<tr><td>QM &gt; DM</td><td>Trên mệnh giá (premium)</td><td>Tín nhiệm tăng: spread hợp đồng hào phóng hơn mức thị trường cần</td></tr>
</tbody></table>
<div class="example"><div class="ex-h">Ví dụ 2.1 - Coupon của một kỳ</div>
<p>FRN mệnh giá 1.000 USD trả lãi theo quý, coupon = MRR + 0,75%. MRR năm tại ngày reset là 2,30%. Coupon kỳ này bao nhiêu và trả khi nào?</p>
<details><summary>Xem lời giải</summary><p>Lãi suất năm = 2,30% + 0,75% = 3,05%; mỗi quý = 3,05%/4 = 0,7625%. Coupon = 1.000 × 0,7625% = <b>7,63 USD</b>, trả vào <b>cuối</b> quý (lãi suất xác định đầu kỳ, trả cuối kỳ).</p></details></div>
<p class="tip"><b>Vì sao giá FRN ổn định?</b> Coupon theo sát lãi suất thị trường, nên thay đổi của MRR hầu như không ảnh hưởng giá. Rủi ro lãi suất của FRN rất thấp; rủi ro chính còn lại là <b>rủi ro tín dụng</b> (thay đổi DM).</p>`,
    },
    {
      title: '3. Định giá FRN và tìm discount margin',
      minutes: 9,
      html: `
<p>Mô hình đơn giản của curriculum: giả định MRR giữ nguyên ở mức hiện tại cho mọi kỳ còn lại, định giá tại ngày reset, mỗi kỳ dài đều nhau.</p>
<div class="formula">PV = ${frac('(MRR + QM) × FV / m', '(1 + (MRR + DM) / m)<sup>1</sup>')} + ... + ${frac('(MRR + QM) × FV / m + FV', '(1 + (MRR + DM) / m)<sup>N</sup>')}</div>
<p>Tức là một trái phiếu coupon thường với <b>coupon = MRR + QM</b> và <b>lãi suất chiết khấu = MRR + DM</b>. Dùng ngay 5 phím TVM.</p>

<div class="example"><div class="ex-h">Ví dụ 3.1 - Tính giá</div>
<p>FRN 3 năm, trả lãi theo quý, coupon = MRR + 1,00%, MRR = 4,00%. Thị trường đòi discount margin 1,20%. Giá (trên mệnh giá 100) bao nhiêu?</p>
<details><summary>Xem lời giải</summary>
${keys([
  ['Xóa TVM', '[2ND] [FV]', '0'],
  ['Số kỳ 3 × 4', '12 [N]', 'N = 12'],
  ['Chiết khấu (4 + 1,2)/4', '1.3 [I/Y]', 'I/Y = 1.3'],
  ['Coupon (4 + 1)/4', '1.25 [PMT]', 'PMT = 1.25'],
  ['Mệnh giá', '100 [FV] [CPT] [PV]', 'PV = -99.4478'],
])}
<p>Giá = <b>99,45</b>. QM (100 bps) &lt; DM (120 bps) nên giá dưới mệnh giá, đúng như bảng ở phần 2.</p></details></div>

<div class="example"><div class="ex-h">Ví dụ 3.2 - Tìm discount margin</div>
<p>Cùng FRN trên, nhưng giá thị trường là 98,50. Discount margin là bao nhiêu?</p>
<details><summary>Xem lời giải</summary>
${keys([
  ['Nhập', '[2ND] [FV] 12 [N] 98.5 [+/-] [PV] 1.25 [PMT] 100 [FV]', ''],
  ['Lãi suất chiết khấu mỗi quý', '[CPT] [I/Y]', 'I/Y = 1.3865'],
])}
<p>Lãi suất năm = 1,38655% × 4 = 5,5462%. DM = 5,5462% - 4,00% = <b>1,5462% ≈ 155 bps</b>.</p>
<p>Bẫy: quên nhân 4, hoặc quên trừ MRR (báo 5,55% là DM).</p></details></div>
<p class="warn">Mô hình này bỏ qua đường cong lãi suất kỳ hạn của MRR và số ngày thực tế mỗi kỳ. Dùng đủ cho Level I; thực tế cần dự báo MRR từ forward rates.</p>`,
    },
    {
      title: '4. Thị trường tiền tệ: discount rate và add-on rate',
      minutes: 9,
      html: `
<p>Công cụ thị trường tiền tệ được yết bằng một trong hai kiểu lãi suất, tính trên năm 360 hoặc 365 ngày:</p>
<table class="plain"><thead><tr><th></th><th>${t('dr', 'Discount rate (DR)')}</th><th>${t('aor', 'Add-on rate (AOR)')}</th></tr></thead><tbody>
<tr><td>Cách trả</td><td>Mua dưới mệnh giá, nhận mệnh giá khi đáo hạn</td><td>Gửi số tiền gốc, nhận gốc + lãi khi đáo hạn</td></tr>
<tr><td>Giá</td><td>PV = FV × (1 - ${frac('Days', 'Year')} × DR)</td><td>PV = ${frac('FV', '1 + (Days/Year) × AOR')}</td></tr>
<tr><td>Lãi suất</td><td>DR = ${frac('Year', 'Days')} × ${frac('FV - PV', '<b>FV</b>')}</td><td>AOR = ${frac('Year', 'Days')} × ${frac('FV - PV', '<b>PV</b>')}</td></tr>
<tr><td>Ví dụ</td><td>T-bill Mỹ, commercial paper (năm 360)</td><td>CD, repo, khoản vay liên ngân hàng (360; Anh, Úc, Canada dùng 365)</td></tr>
</tbody></table>
<div class="key">Discount rate chia lãi cho <b>FV</b> (số lớn hơn số tiền thực bỏ ra) nên <b>đánh giá thấp</b> lợi suất thực của nhà đầu tư. Add-on rate chia cho <b>PV</b>, số tiền thực bỏ ra, nên phản ánh đúng hơn.</div>

<div class="example"><div class="ex-h">Ví dụ 4.1 - T-bill</div>
<p>T-bill 90 ngày, mệnh giá 100, yết discount rate 4,80% (năm 360). Tính giá và add-on rate tương đương (năm 360).</p>
<details><summary>Xem lời giải</summary>
<p>PV = 100 × (1 - 90/360 × 0,048) = 100 × (1 - 0,012) = <b>98,80</b>.<br>
AOR (360) = 360/90 × (100 - 98,80)/98,80 = 4 × 0,012146 = <b>4,8583%</b>.</p>
<p>Công thức đổi nhanh: AOR = DR / (1 - Days/Year × DR) = 0,048 / 0,988 = 4,8583%.</p></details></div>

<div class="example"><div class="ex-h">Ví dụ 4.2 - Chứng chỉ tiền gửi (CD)</div>
<p>Gửi 1.000.000 USD vào CD 180 ngày, add-on rate 4,5% (năm 360). Khi đáo hạn nhận bao nhiêu?</p>
<details><summary>Xem lời giải</summary><p>Lãi = 1.000.000 × 0,045 × 180/360 = 22.500. Nhận <b>1.022.500 USD</b>.</p></details></div>`,
    },
    {
      title: '5. So sánh: bond equivalent yield và quy đổi 360/365',
      minutes: 8,
      html: `
<p>Muốn so sánh các công cụ khác quy ước, đưa tất cả về cùng một chuẩn. Chuẩn hay dùng là ${t('bey', 'bond equivalent yield (BEY)')}: <b>add-on rate trên năm 365 ngày</b>.</p>
<div class="formula">BEY = ${frac('365', 'Days')} × ${frac('FV - PV', 'PV')} &nbsp;&nbsp;&nbsp; AOR<sub>365</sub> = AOR<sub>360</sub> × ${frac('365', '360')}</div>
<ol><li>Nếu là discount rate: tính giá PV trước.</li>
<li>Tính lợi nhuận kỳ (FV - PV)/PV.</li>
<li>Nhân với 365/Days.</li></ol>
<div class="example"><div class="ex-h">Ví dụ 5.1 - Ba lựa chọn 120 ngày</div>
<p>Nhà đầu tư có ba lựa chọn cùng kỳ hạn 120 ngày, cùng rủi ro: (a) commercial paper yết discount rate 5,10% (năm 360); (b) CD add-on rate 5,20% (năm 360); (c) tiền gửi add-on rate 5,25% (năm 365). Chọn cái nào?</p>
<details><summary>Xem lời giải</summary>
<table class="plain"><thead><tr><th>Công cụ</th><th>Quy đổi</th><th>BEY</th></tr></thead><tbody>
<tr><td>(a) CP</td><td>PV = 100 × (1 - 120/360 × 0,051) = 98,30; BEY = 365/120 × 1,70/98,30</td><td>5,2603%</td></tr>
<tr><td>(b) CD</td><td>5,20% × 365/360</td><td><b>5,2722%</b></td></tr>
<tr><td>(c) Tiền gửi</td><td>Đã là add-on 365</td><td>5,2500%</td></tr>
</tbody></table>
<p>Chọn <b>(b)</b>. Con số yết thấp nhất (5,10%) lại không phải tệ nhất, và con số yết cao nhất (5,25%) lại là thấp nhất sau quy đổi.</p></details></div>
<p class="tip">Muốn so sánh với trái phiếu có periodicity khác, có thể đổi tiếp sang lợi suất hiệu dụng năm: (1 + lợi nhuận kỳ)<sup>365/Days</sup> - 1. Với CP ở trên: (100/98,30)<sup>365/120</sup> - 1 = 5,3537%. Đây chính là quy đổi periodicity của FI-07, với periodicity = 365/Days.</p>
<p class="warn"><b>Bẫy:</b> trong công thức discount rate, mẫu số là <b>FV</b>; trong add-on, mẫu số là <b>PV</b>. Đề thường cho các đáp án nhiễu là kết quả dùng sai mẫu số hoặc sai năm 360/365.</p>`,
    },
    {
      title: '6. Tóm tắt và bẫy thường gặp',
      minutes: 3,
      html: `
<table class="plain"><thead><tr><th>Tình huống</th><th>Nhớ</th></tr></thead><tbody>
<tr><td>Coupon FRN</td><td>MRR + QM, xác định đầu kỳ, trả cuối kỳ, chia cho số kỳ trong năm</td></tr>
<tr><td>QM và DM</td><td>QM cố định trong hợp đồng; DM là spread thị trường đòi hôm nay</td></tr>
<tr><td>Giá FRN tại ngày reset</td><td>QM = DM → par; QM &lt; DM → discount; QM &gt; DM → premium</td></tr>
<tr><td>Định giá FRN</td><td>PMT = (MRR + QM)/m; I/Y = (MRR + DM)/m</td></tr>
<tr><td>Tìm DM</td><td>CPT I/Y, nhân m, trừ MRR</td></tr>
<tr><td>Discount rate</td><td>Chia cho FV; đánh giá thấp lợi suất thực</td></tr>
<tr><td>Add-on rate</td><td>Chia cho PV</td></tr>
<tr><td>BEY</td><td>Add-on trên năm 365; AOR<sub>360</sub> × 365/360</td></tr>
</tbody></table>
<p>Tiếp theo: tab <b>Luyện tập</b> 8 câu. FI-09 sẽ học spot, par và forward curve.</p>`,
    },
  ];

  const glossary = {
    frn: ['Floating-rate note (FRN)', 'Trái phiếu lãi suất thả nổi', 'Coupon = lãi suất tham chiếu + spread cố định, đặt lại mỗi kỳ.'],
    mrr: ['Market reference rate (MRR)', 'Lãi suất tham chiếu thị trường', 'Lãi suất ngắn hạn dùng làm cơ sở cho coupon FRN, ví dụ SOFR.'],
    qm: ['Quoted margin', 'Biên độ hợp đồng', 'Spread cố định cộng vào MRR ghi trong hợp đồng FRN.'],
    dm: ['Discount margin / required margin', 'Biên độ chiết khấu', 'Spread trên MRR mà thị trường hiện đòi hỏi; làm PV dòng tiền FRN bằng giá.'],
    dr: ['Discount rate (money market)', 'Lãi suất chiết khấu', 'Lãi tính trên mệnh giá: DR = (Year/Days) × (FV - PV)/FV.'],
    aor: ['Add-on rate', 'Lãi suất cộng thêm', 'Lãi tính trên số tiền gốc bỏ ra: AOR = (Year/Days) × (FV - PV)/PV.'],
    bey: ['Bond equivalent yield (BEY)', 'Lợi suất tương đương trái phiếu', 'Lợi suất thị trường tiền tệ quy về add-on rate trên năm 365 ngày.'],
  };

  const practice = [
    { q: 'Một FRN có quoted margin 80 bps. Tại ngày reset, discount margin thị trường đòi hỏi là 100 bps. Giá FRN:', choices: ['trên mệnh giá', 'dưới mệnh giá', 'bằng mệnh giá'], answer: 1, explain: 'QM < DM: coupon hợp đồng thấp hơn mức thị trường cần, nên giá phải dưới mệnh giá để bù. Thường xảy ra khi tín nhiệm của tổ chức phát hành giảm. Phương án bằng mệnh giá chỉ đúng khi QM = DM.' },
    { q: 'FRN 2 năm trả lãi nửa năm, coupon = MRR + 0,75%. MRR hiện tại 3,50%, discount margin 0,50%. Giả định MRR không đổi, giá FRN (mệnh giá 100) gần nhất với:', choices: ['100,00', '99,53', '100,48'], answer: 2, explain: 'N = 4, I/Y = (3,50 + 0,50)/2 = 2,00, PMT = (3,50 + 0,75)/2 = 2,125, FV = 100 → PV = 100,48. QM > DM nên giá trên par. Lựa chọn 99,53 đảo QM và DM. Lựa chọn 100,00 bỏ qua chênh lệch giữa QM và DM.' },
    { q: 'FRN 4 năm trả lãi theo quý, coupon = MRR + 0,60%, MRR = 3,20%, giá 99,10. Giả định MRR không đổi, discount margin gần nhất với:', choices: ['84 bps', '60 bps', '404 bps'], answer: 0, explain: 'N = 16, PV = -99,10, PMT = (3,20 + 0,60)/4 = 0,95, FV = 100 → I/Y = 1,0112 mỗi quý → 4,0448%/năm. DM = 4,0448% - 3,20% = 84 bps. Lựa chọn 60 bps là quoted margin. Lựa chọn 404 bps quên trừ MRR.' },
    { q: 'T-bill 180 ngày yết discount rate 4,50% (năm 360). Giá trên mệnh giá 100 gần nhất với:', choices: ['97,75', '97,78', '97,80'], answer: 0, explain: 'PV = 100 × (1 - 180/360 × 0,045) = 97,75. Lựa chọn 97,78 dùng năm 365. Lựa chọn 97,80 coi 4,50% là add-on rate (100/1,0225).' },
    { q: 'Một T-bill 120 ngày có giá 98,40 trên mệnh giá 100. Discount rate (năm 360) gần nhất với:', choices: ['4,88%', '4,80%', '4,95%'], answer: 1, explain: 'DR = 360/120 × (100 - 98,40)/100 = 4,80%. Lựa chọn 4,88% chia cho PV (đó là add-on rate năm 360). Lựa chọn 4,95% là add-on rate năm 365 (BEY).' },
    { q: 'T-bill 90 ngày yết discount rate 4,80% (năm 360). Bond equivalent yield gần nhất với:', choices: ['4,80%', '4,86%', '4,93%'], answer: 2, explain: 'PV = 98,80. BEY = 365/90 × 1,20/98,80 = 4,93%. Lựa chọn 4,86% là add-on rate năm 360 (chưa đổi sang 365). Lựa chọn 4,80% là discount rate gốc.' },
    { q: 'Ba công cụ 120 ngày cùng rủi ro: commercial paper discount rate 5,10% (năm 360); CD add-on 5,20% (năm 360); tiền gửi add-on 5,25% (năm 365). Công cụ có lợi suất cao nhất khi quy về cùng chuẩn là:', choices: ['commercial paper', 'CD', 'tiền gửi'], answer: 1, explain: 'BEY: CP = 5,2603% (giá 98,30); CD = 5,20% × 365/360 = 5,2722%; tiền gửi = 5,25%. CD cao nhất. Chọn tiền gửi là chọn theo con số yết lớn nhất mà không quy đổi.' },
    { q: 'Gửi 1.000.000 USD vào CD 180 ngày, add-on rate 4,5% (năm 360). Tiền lãi nhận khi đáo hạn gần nhất với:', choices: ['22.500', '22.192', '45.000'], answer: 0, explain: 'Lãi = 1.000.000 × 4,5% × 180/360 = 22.500. Lựa chọn 22.192 dùng năm 365, sai quy ước của CD này. Lựa chọn 45.000 tính lãi cả năm.' },
  ];

  window.LESSONS['FI-08'] = {
    moduleId: 'FI-08',
    calculator: 'BA II Plus',
    warmup: [
      'Ôn FI-07: G-spread và I-spread khác nhau ở mốc so sánh nào?',
      'Ôn FI-02: cấu trúc coupon của FRN gồm những thành phần nào?',
      'Đoán trước: khi lãi suất thị trường tăng mạnh, giá FRN và giá trái phiếu cố định, cái nào giảm nhiều hơn?',
    ],
    sections,
    glossary,
    practice,
    widgets: {},
    slides: [],
    wrapup: [
      'Giải thích bằng lời của bạn vì sao QM < DM thì FRN giao dịch dưới mệnh giá.',
      'Viết công thức discount rate và add-on rate; đánh dấu mẫu số khác nhau.',
      'Làm lại ví dụ 5.1: quy đổi ba công cụ về BEY không nhìn bài.',
    ],
  };
}());
