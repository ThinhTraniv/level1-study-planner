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
<p>Tiếp theo: tab <b>Luyện tập</b> 10 câu (rút ngẫu nhiên từ ngân hàng 30 câu, mỗi lần làm một bộ khác). FI-09 sẽ học spot, par và forward curve.</p>`,
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
    { q: 'FRN mệnh giá 1.000.000 USD trả lãi theo quý, coupon = MRR + 1,10%. MRR tại ngày reset đầu kỳ là 3,85%. Tiền coupon nhận được cuối kỳ gần nhất với:', choices: ['49.500 USD', '9.625 USD', '12.375 USD'], answer: 2, explain: 'Lãi suất năm = 3,85% + 1,10% = 4,95%; mỗi quý = 4,95%/4. Coupon = 1.000.000 x 4,95%/4 = 12.375 USD. Lựa chọn 49.500 USD là lãi cả năm, quên chia 4. Lựa chọn 9.625 USD chỉ dùng MRR, bỏ quên quoted margin.' },
    { q: 'Với FRN thông thường, lãi suất coupon của một kỳ được xác định và thanh toán như thế nào?', choices: ['Cố định tại ngày phát hành cho mọi kỳ', 'Xác định theo MRR tại đầu kỳ (ngày reset), trả vào cuối kỳ', 'Xác định theo MRR tại cuối kỳ, trả ngay lúc đó'], answer: 1, explain: 'FRN trả lãi "in arrears": lãi suất được đặt lại theo MRR ở đầu kỳ, tiền lãi trả vào cuối kỳ. Phương án "xác định theo MRR tại cuối kỳ" đảo thời điểm reset. Phương án "cố định tại ngày phát hành" mô tả trái phiếu coupon cố định; với FRN chỉ quoted margin là cố định.' },
    { q: 'Kể từ khi phát hành, xếp hạng tín nhiệm của tổ chức phát hành một FRN đã được nâng lên và thị trường giờ chỉ đòi spread thấp hơn quoted margin. Tại ngày reset tiếp theo, FRN này nhiều khả năng giao dịch:', choices: ['bằng mệnh giá vì coupon đã được đặt lại theo MRR', 'dưới mệnh giá', 'trên mệnh giá'], answer: 2, explain: 'Tín nhiệm tốt lên làm discount margin giảm xuống dưới quoted margin (QM > DM): coupon hợp đồng hào phóng hơn mức thị trường cần, nên giá trên mệnh giá. Việc reset theo MRR chỉ xử lý thay đổi của lãi suất tham chiếu, không xử lý thay đổi spread, nên phương án "bằng mệnh giá" sai. "Dưới mệnh giá" ứng với tín nhiệm suy giảm (QM < DM).' },
    { q: 'Một FRN trả lãi theo quý có quoted margin bằng discount margin. Tại ngày reset, MRR tăng 100 bps so với kỳ trước, discount margin không đổi. Giá FRN tại ngày reset nhiều khả năng:', choices: ['xấp xỉ bằng mệnh giá', 'tăng lên trên mệnh giá vì coupon cao hơn', 'giảm mạnh như trái phiếu coupon cố định cùng kỳ hạn'], answer: 0, explain: 'Coupon được đặt lại theo MRR mới nên cả tử số (coupon) và mẫu số (lãi suất chiết khấu) cùng tăng; với QM = DM giá về mệnh giá tại ngày reset. Rủi ro lãi suất của FRN rất thấp, nên phương án "giảm mạnh như trái phiếu cố định" sai. Phương án "tăng lên trên mệnh giá" quên rằng lãi suất chiết khấu cũng tăng cùng mức.' },
    { q: 'FRN 5 năm trả lãi theo quý, coupon = MRR + 1,25%. MRR hiện tại là 2,40%, discount margin thị trường đòi hỏi là 0,90%. Giả định MRR không đổi, giá FRN (mệnh giá 100) gần nhất với:', choices: ['98,41', '101,61', '105,87'], answer: 1, explain: 'N = 20, I/Y = (2,40 + 0,90)/4 = 0,825, PMT = (2,40 + 1,25)/4 = 0,9125, FV = 100, suy ra PV = 101,61. QM 125 bps > DM 90 bps nên giá trên mệnh giá. Lựa chọn 98,41 đảo vai trò QM và DM. Lựa chọn 105,87 chiết khấu chỉ bằng MRR, quên cộng DM.' },
    { q: 'FRN 3 năm trả lãi nửa năm, coupon = MRR + 0,50%, MRR hiện tại 4,10%, giá 100,80. Giả định MRR không đổi, discount margin gần nhất với:', choices: ['11 bps', '50 bps', '21 bps'], answer: 2, explain: 'N = 6, PV = -100,80, PMT = (4,10 + 0,50)/2 = 2,30, FV = 100, suy ra I/Y = 2,1564% mỗi nửa năm, tức 4,3128%/năm. DM = 4,3128% - 4,10% = 0,2128%, khoảng 21 bps; giá trên mệnh giá nên DM < QM là hợp lý. Lựa chọn 50 bps là quoted margin. Lựa chọn 11 bps lấy lãi suất nửa năm trừ MRR/2, quên nhân 2 để ra spread năm.' },
    { q: 'Sau khi phát hành, tín nhiệm của tổ chức phát hành FRN suy giảm. Quoted margin của FRN sẽ:', choices: ['không đổi, vì được cố định trong hợp đồng', 'tăng lên bằng discount margin mới', 'giảm xuống để bù cho giá thấp hơn'], answer: 0, explain: 'Quoted margin là spread ghi trong hợp đồng, cố định suốt đời trái phiếu. Thứ thay đổi là discount margin (spread thị trường đòi hỏi), và giá FRN giảm xuống dưới mệnh giá để phản ánh QM < DM. Phương án "tăng lên bằng discount margin" nhầm QM với DM. Phương án "giảm xuống" không có cơ sở.' },
    { q: 'FRN 4 năm trả lãi theo quý, coupon = MRR + 0,80%, MRR = 3,00%. Do tín nhiệm suy giảm, discount margin tăng từ 0,80% lên 1,30%. Giả định MRR không đổi, giá FRN mới (mệnh giá 100) gần nhất với:', choices: ['101,85', '98,17', '100,00'], answer: 1, explain: 'N = 16, I/Y = (3,00 + 1,30)/4 = 1,075, PMT = (3,00 + 0,80)/4 = 0,95, FV = 100, suy ra PV = 98,17. Lựa chọn 100,00 cho rằng giá FRN luôn về mệnh giá tại ngày reset, nhưng điều đó chỉ đúng khi QM = DM. Lựa chọn 101,85 đảo QM và DM (cho giá trên mệnh giá).' },
    { q: 'So với lợi suất thực mà nhà đầu tư nhận được trên số tiền bỏ ra, discount rate yết cho T-bill (năm 360 ngày) nhiều khả năng:', choices: ['cao hơn, vì chia lãi cho giá mua', 'bằng nhau, vì cả hai đều là lãi suất năm', 'thấp hơn, vì chia lãi cho mệnh giá và dùng năm 360 ngày'], answer: 2, explain: 'Discount rate = (Year/Days) x (FV - PV)/FV: mẫu số là mệnh giá, lớn hơn số tiền thực bỏ ra (PV), và năm 360 ngày làm hệ số năm hóa nhỏ hơn 365. Cả hai đều làm con số yết thấp hơn lợi suất thực. Phương án "chia lãi cho giá mua" mô tả add-on rate, không phải discount rate. Phương án "bằng nhau" bỏ qua khác biệt mẫu số.' },
    { q: 'Commercial paper kỳ hạn 270 ngày yết discount rate 5,20% (năm 360). Giá trên mệnh giá 100 gần nhất với:', choices: ['96,10', '96,25', '96,15'], answer: 0, explain: 'PV = 100 x (1 - 270/360 x 0,052) = 100 x (1 - 0,039) = 96,10. Lựa chọn 96,15 dùng năm 365 ngày, sai quy ước. Lựa chọn 96,25 coi 5,20% là add-on rate: 100/(1 + 0,039).' },
    { q: 'Một công cụ thị trường tiền tệ được mua với giá 98,75 và trả 100 sau 150 ngày. Add-on rate tính trên năm 365 ngày (bond equivalent yield) gần nhất với:', choices: ['3,0417%', '3,0802%', '3,0380%'], answer: 1, explain: 'AOR = 365/150 x (100 - 98,75)/98,75 = 2,4333 x 0,012658 = 3,0802%. Lựa chọn 3,0417% chia lãi cho mệnh giá 100 (cách tính discount rate). Lựa chọn 3,0380% chia đúng cho giá nhưng dùng năm 360 ngày.' },
    { q: 'Một hợp đồng repo yết add-on rate 4,40% trên năm 360 ngày. Quy đổi sang add-on rate trên năm 365 ngày (bond equivalent yield) gần nhất với:', choices: ['4,40%', '4,34%', '4,46%'], answer: 2, explain: 'AOR(365) = AOR(360) x 365/360 = 4,40% x 1,013889 = 4,46%. Lựa chọn 4,34% nhân ngược 360/365. Lựa chọn 4,40% cho rằng không cần quy đổi, nhưng cùng một khoản lãi tính trên năm dài hơn cho lãi suất năm cao hơn.' },
    { q: 'T-bill 60 ngày yết discount rate 3,60% (năm 360). Add-on rate tương đương, vẫn trên năm 360 ngày, gần nhất với:', choices: ['3,6217%', '3,5785%', '3,6720%'], answer: 0, explain: 'AOR = DR/(1 - Days/Year x DR) = 0,036/(1 - 60/360 x 0,036) = 0,036/0,994 = 3,6217%. Lựa chọn 3,5785% chia cho (1 + Days/Year x DR), sai dấu trong mẫu số (add-on luôn cao hơn discount). Lựa chọn 3,6720% đổi thêm sang năm 365, trong khi đề hỏi năm 360.' },
    { q: 'Một doanh nghiệp gửi 500.000 GBP tiền gửi kỳ hạn 90 ngày, add-on rate 3,60% trên năm 365 ngày. Số tiền nhận được khi đáo hạn gần nhất với:', choices: ['518.000 GBP', '504.438 GBP', '504.500 GBP'], answer: 1, explain: 'Số tiền đáo hạn = 500.000 x (1 + 0,036 x 90/365) = 504.438 GBP. Lựa chọn 504.500 GBP dùng năm 360 ngày, sai quy ước của khoản tiền gửi này. Lựa chọn 518.000 GBP tính lãi cả năm.' },
    { q: 'Một công cụ trả 100 khi đáo hạn sau 120 ngày, yết add-on rate 5,00% (năm 360). Giá hôm nay gần nhất với:', choices: ['98,3333', '98,3827', '98,3607'], answer: 2, explain: 'PV = FV/(1 + Days/Year x AOR) = 100/(1 + 120/360 x 0,05) = 100/1,016667 = 98,3607. Lựa chọn 98,3333 xử lý 5,00% như discount rate: 100 x (1 - 0,016667). Lựa chọn 98,3827 dùng năm 365 ngày.' },
    { q: 'T-bill 91 ngày có giá 99,00 trên mệnh giá 100. Lợi suất hiệu dụng năm (ghép lãi với periodicity 365/91) gần nhất với:', choices: ['4,11%', '3,96%', '4,05%'], answer: 0, explain: 'Lợi nhuận kỳ = 100/99 - 1 = 1,0101%. Lợi suất hiệu dụng = (100/99)^(365/91) - 1 = 4,11%. Lựa chọn 4,05% là bond equivalent yield 365/91 x 1/99, chỉ năm hóa bằng lãi đơn. Lựa chọn 3,96% là discount rate 360/91 x 1/100.' },
    { q: 'Công cụ nào sau đây thường được yết bằng discount rate thay vì add-on rate?', choices: ['Chứng chỉ tiền gửi (CD)', 'Commercial paper', 'Hợp đồng repo'], answer: 1, explain: 'Commercial paper (giống T-bill) được bán dưới mệnh giá và yết bằng discount rate. CD và repo là khoản đầu tư gốc cộng lãi khi đáo hạn nên yết bằng add-on rate.' },
    { q: 'T-bill 150 ngày có bond equivalent yield (add-on, năm 365) là 4,50%. Discount rate yết theo năm 360 gần nhất với:', choices: ['4,42%', '4,44%', '4,36%'], answer: 2, explain: 'Giá = 100/(1 + 150/365 x 0,045) = 98,1843. DR = 360/150 x (100 - 98,1843)/100 = 4,36%. Lựa chọn 4,44% chỉ nhân 4,50% với 360/365, quên đổi mẫu số từ giá sang mệnh giá. Lựa chọn 4,42% chia lãi cho mệnh giá nhưng giữ năm 365.' },
    { q: 'Điểm khác biệt chính giữa lãi suất yết của công cụ thị trường tiền tệ và lợi suất đáo hạn của trái phiếu là:', choices: ['lãi suất thị trường tiền tệ được năm hóa theo lãi đơn, không ghép lãi', 'lãi suất thị trường tiền tệ luôn tính trên năm 365 ngày', 'lãi suất thị trường tiền tệ luôn yết dưới dạng discount rate'], answer: 0, explain: 'Lãi suất thị trường tiền tệ năm hóa lợi nhuận kỳ bằng cách nhân Year/Days (lãi đơn), trong khi YTM của trái phiếu ghép lãi theo periodicity. Phương án "luôn năm 365" sai vì nhiều thị trường dùng năm 360. Phương án "luôn yết discount rate" sai vì CD, repo yết bằng add-on rate.' },
    { q: 'FRN 7 năm trả lãi nửa năm, coupon = MRR + 1,00%, MRR = 5,50%, discount margin thị trường là 1,00%. Giả định MRR không đổi, giá tại ngày reset (mệnh giá 100) gần nhất với:', choices: ['94,45', '100,00', '105,75'], answer: 1, explain: 'Coupon (5,50% + 1,00%)/2 = 3,25 bằng đúng lãi suất chiết khấu (5,50% + 1,00%)/2, nên PV = 100,00. Khi QM = DM, giá FRN tại ngày reset bằng mệnh giá bất kể MRR là bao nhiêu. Lựa chọn 105,75 chiết khấu chỉ bằng MRR (quên DM). Lựa chọn 94,45 tính coupon chỉ bằng MRR (quên QM).' },
    { q: 'Nhà đầu tư mua commercial paper 180 ngày yết discount rate 6,00% (năm 360) và giữ đến đáo hạn. Lợi nhuận nắm giữ (holding period return) cho 180 ngày gần nhất với:', choices: ['3,00%', '6,19%', '3,09%'], answer: 2, explain: 'Giá = 100 x (1 - 180/360 x 0,06) = 97,00. HPR = (100 - 97)/97 = 3,09%. Lựa chọn 3,00% chia lãi cho mệnh giá (DR x 180/360). Lựa chọn 6,19% là add-on rate năm hóa 360/180 x 3/97, không phải lợi nhuận của 180 ngày.' },
    { q: 'Trong mô hình định giá FRN đơn giản ở Level I (dùng để tính discount margin), giả định nào được sử dụng?', choices: ['MRR giữ nguyên ở mức hiện tại cho mọi kỳ còn lại', 'Discount margin luôn bằng quoted margin', 'MRR đi theo đường forward rate cho từng kỳ'], answer: 0, explain: 'Mô hình đơn giản giả định MRR không đổi, định giá tại ngày reset, các kỳ dài đều nhau; khi đó FRN giống trái phiếu coupon với coupon MRR + QM và lãi suất chiết khấu MRR + DM. Dùng forward rate là cách làm thực tế chi tiết hơn, không phải giả định của mô hình này. Nếu DM luôn bằng QM thì không cần tính DM.' },
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
