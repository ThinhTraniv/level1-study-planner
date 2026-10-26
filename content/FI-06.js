// Bài giảng FI-06 - Fixed-Income Bond Valuation: Prices and Yields (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t, frac, keys, timeline } = window.CFAH;

  const sections = [
    {
      title: '1. Bức tranh lớn',
      minutes: 4,
      html: `
<p>Ở QM-04 bạn đã định giá một trái phiếu bằng 5 phím TVM. Module này đi sâu hơn ở 3 điểm mà đề thi Fixed Income rất hay hỏi:</p>
<ol>
  <li><b>Tính giá</b> khi biết lợi suất, cả <b>đúng ngày trả coupon</b> lẫn <b>giữa hai kỳ coupon</b> (full price, flat price, accrued interest). Ứng với LOS 1.</li>
  <li><b>Quan hệ</b> giữa giá, coupon, kỳ hạn và YTM: 5 tính chất cần thuộc. Ứng với LOS 2.</li>
  <li><b>Matrix pricing</b>: định giá trái phiếu không có giá thị trường. Ứng với LOS 3.</li>
</ol>
<div class="key">Giá trái phiếu = PV của mọi dòng tiền (coupon và gốc), chiết khấu bằng <b>một</b> lãi suất (${t('ytm', 'YTM')}) hoặc bằng <b>từng</b> lãi suất cho từng kỳ hạn (${t('spot', 'spot rates')}).</div>
${timeline(3, [{ t: 0, label: 'Giá = ?', up: true, cls: 'pv' }, { t: 1, label: 'C' }, { t: 2, label: 'C' }, { t: 3, label: 'C + 100' }], 'Một trái phiếu coupon: chuỗi coupon đều cộng mệnh giá ở kỳ cuối.')}
<p class="tip"><b>Ký hiệu dùng trong bài:</b> mệnh giá (par) = 100, giá yết theo % mệnh giá. C là coupon mỗi kỳ, r là YTM mỗi kỳ, N là số kỳ còn lại.</p>`,
    },
    {
      title: '2. Giá trái phiếu vào ngày trả coupon',
      minutes: 10,
      html: `
<div class="formula">PV = ${frac('C', '(1 + r)<sup>1</sup>')} + ${frac('C', '(1 + r)<sup>2</sup>')} + ... + ${frac('C + FV', '(1 + r)<sup>N</sup>')}</div>
<p>Với trái phiếu trả coupon m lần mỗi năm: C = coupon năm / m, r = YTM / m, N = số năm × m. Đây là quy ước thị trường: YTM của trái phiếu nửa năm được báo theo kiểu <b>lãi suất danh nghĩa năm</b> (gấp đôi lãi suất nửa năm), sẽ bàn kỹ ở FI-07.</p>

<div class="example"><div class="ex-h">Ví dụ 2.1 - Một trái phiếu, ba mức YTM</div>
<p>Trái phiếu 5 năm, coupon 6%, mệnh giá 100. Tính giá khi YTM là 5%, 6%, 7% với (a) coupon trả hằng năm, (b) coupon trả nửa năm.</p>
<details><summary>Xem lời giải</summary>
<table class="plain"><thead><tr><th>YTM</th><th>(a) Hằng năm: N = 5, PMT = 6</th><th>(b) Nửa năm: N = 10, PMT = 3, I/Y = YTM/2</th></tr></thead><tbody>
<tr><td>5%</td><td>104,33</td><td>104,38</td></tr>
<tr><td>6%</td><td>100,00</td><td>100,00</td></tr>
<tr><td>7%</td><td>95,90</td><td>95,84</td></tr></tbody></table>
${keys([
  ['Xóa TVM', '[2ND] [FV]', '0'],
  ['Nửa năm, YTM 7%', '10 [N] 3.5 [I/Y] 3 [PMT] 100 [FV]', ''],
  ['Tính giá', '[CPT] [PV]', 'PV = -95.8417'],
])}
<p>Khi YTM = coupon thì giá = 100 bất kể tần suất trả lãi. Khi YTM khác coupon, trả nửa năm làm giá lệch khỏi 100 nhiều hơn một chút.</p></details></div>

<h4>Làm ngược: biết giá, tìm YTM</h4>
<div class="example"><div class="ex-h">Ví dụ 2.2</div>
<p>Trái phiếu 5 năm, coupon 10% trả nửa năm, giá 105. YTM (theo quy ước nửa năm) là bao nhiêu?</p>
<details><summary>Xem lời giải</summary>
${keys([
  ['Nhập', '[2ND] [FV] 10 [N] 105 [+/-] [PV] 5 [PMT] 100 [FV]', ''],
  ['Tính lãi suất nửa năm', '[CPT] [I/Y]', 'I/Y = 4.3721'],
  ['Nhân 2', '[×] 2 [=]', '8.7441'],
])}
<p>YTM = <b>8,74%</b>. Bẫy: dừng ở 4,37% (quên nhân 2). Giá trên 100 nên YTM phải thấp hơn coupon 10%: dùng điều này để loại đáp án.</p></details></div>
<p class="warn"><b>Ba lỗi bấm máy hay gặp:</b> quên chia coupon cho 2, quên nhân số năm với 2, nhập YTM năm vào I/Y mà không chia 2. Giá trị PV và FV phải trái dấu khi tìm I/Y.</p>`,
    },
    {
      title: '3. Định giá bằng spot rates',
      minutes: 6,
      html: `
<p>YTM dùng <b>một</b> lãi suất cho mọi dòng tiền. Cách chính xác hơn: chiết khấu mỗi dòng tiền bằng ${t('spot', 'lãi suất spot')} đúng kỳ hạn của nó (lợi suất của trái phiếu zero-coupon kỳ hạn đó).</p>
<div class="formula">PV = ${frac('C', '(1 + Z<sub>1</sub>)<sup>1</sup>')} + ${frac('C', '(1 + Z<sub>2</sub>)<sup>2</sup>')} + ... + ${frac('C + FV', '(1 + Z<sub>N</sub>)<sup>N</sup>')}</div>
<div class="example"><div class="ex-h">Ví dụ 3.1</div>
<p>Trái phiếu 3 năm, coupon 5% trả hằng năm. Spot rates: Z<sub>1</sub> = 3%, Z<sub>2</sub> = 4%, Z<sub>3</sub> = 5%. Tính giá và YTM tương ứng.</p>
<details><summary>Xem lời giải</summary>
<p>PV = 5/1,03 + 5/1,04<sup>2</sup> + 105/1,05<sup>3</sup> = 4,8544 + 4,6228 + 90,7029 = <b>100,18</b>.<br>
YTM: <kbd>3</kbd> <kbd>N</kbd>, <kbd>100.18</kbd> <kbd>+/-</kbd> <kbd>PV</kbd>, <kbd>5</kbd> <kbd>PMT</kbd>, <kbd>100</kbd> <kbd>FV</kbd>, <kbd>CPT</kbd> <kbd>I/Y</kbd> = <b>4,93%</b>.</p>
<p>YTM là một dạng "bình quân" của các spot rate, nghiêng về spot rate 3 năm vì phần lớn giá trị nằm ở dòng tiền cuối.</p></details></div>
<p class="tip">Dùng spot rates là cách định giá <b>không chênh lệch giá (no-arbitrage)</b>: mỗi dòng tiền giống một zero-coupon riêng. Cách tìm spot rates, par rates và forward rates sẽ học ở FI-09.</p>`,
    },
    {
      title: '4. Giá giữa hai kỳ coupon: full price, flat price, accrued interest',
      minutes: 14,
      html: `
<p>Phần lớn giao dịch xảy ra <b>giữa</b> hai ngày trả coupon. Người bán đã giữ trái phiếu một phần kỳ nên được hưởng phần coupon tương ứng, gọi là ${t('ai', 'lãi dồn tích (accrued interest, AI)')}. Người mua trả cho người bán ${t('full', 'giá đầy đủ (full / dirty price)')}, bao gồm AI.</p>
${timeline(2, [{ t: 0, label: 'Coupon trước', up: true }, { t: 1, label: 'Ngày thanh toán', up: true, cls: 'pv' }, { t: 2, label: 'Coupon kế tiếp', up: true }], 'Từ coupon trước đến ngày thanh toán là t ngày; cả kỳ coupon là T ngày.')}
<div class="formula">PV<sup>Full</sup> = PV × (1 + r)<sup>t/T</sup> &nbsp;&nbsp;&nbsp; AI = ${frac('t', 'T')} × C &nbsp;&nbsp;&nbsp; PV<sup>Flat</sup> = PV<sup>Full</sup> - AI</div>
<p>PV là giá tính tại ngày trả coupon trước (như phần 2), r là YTM mỗi kỳ. ${t('flat', 'Giá sạch (flat / clean price)')} là giá được <b>yết trên thị trường</b>, vì nó không "nhảy" mỗi lần trả coupon.</p>

<h4>Quy ước đếm ngày (day count)</h4>
<table class="plain"><thead><tr><th>Quy ước</th><th>Cách đếm</th><th>Thường dùng cho</th></tr></thead><tbody>
<tr><td>${t('actact', 'Actual/actual')}</td><td>Đếm số ngày thực tế, cả t và T</td><td>Trái phiếu chính phủ</td></tr>
<tr><td>${t('d30', '30/360')}</td><td>Mỗi tháng coi như 30 ngày, năm 360 ngày</td><td>Trái phiếu doanh nghiệp</td></tr>
</tbody></table>
<div class="example"><div class="ex-h">Ví dụ 4.1 - Accrued interest theo hai quy ước</div>
<p>Trái phiếu coupon 5% trả hằng năm vào ngày 1/3. Giao dịch thanh toán ngày 18/6/2026. Tính AI (trên mệnh giá 100).</p>
<details><summary>Xem lời giải</summary>
<p><b>30/360:</b> t = (6 - 3) × 30 + (18 - 1) = 107 ngày. AI = 107/360 × 5 = <b>1,4861</b>.<br>
<b>Actual/actual:</b> t = 31 (tháng 3) + 30 (tháng 4) + 31 (tháng 5) + 17 = 109 ngày; T = 365 (1/3/2026 đến 1/3/2027). AI = 109/365 × 5 = <b>1,4932</b>.</p></details></div>

<div class="example"><div class="ex-h">Ví dụ 4.2 - Full price, AI, flat price</div>
<p>Trái phiếu coupon 6% trả nửa năm vào 1/4 và 1/10, đáo hạn 1/4/2029, YTM 5%. Thanh toán ngày 20/6/2026 (còn 6 kỳ coupon). Dùng actual/actual.</p>
<details><summary>Xem lời giải</summary>
<p><b>Bước 1 - đếm ngày:</b> t = 1/4 đến 20/6 = 80 ngày; T = 1/4 đến 1/10 = 183 ngày; t/T = 0,4372.</p>
<p><b>Bước 2 - PV tại ngày coupon trước (1/4/2026):</b></p>
${keys([['', '[2ND] [FV] 6 [N] 2.5 [I/Y] 3 [PMT] 100 [FV] [CPT] [PV]', 'PV = -102.7541']])}
<p><b>Bước 3 - full price:</b> 102,7541 × 1,025<sup>80/183</sup> = <b>103,8693</b>.<br>
<b>Bước 4 - AI:</b> 80/183 × 3 = <b>1,3115</b>.<br>
<b>Bước 5 - flat price:</b> 103,8693 - 1,3115 = <b>102,5578</b>.</p></details></div>

<h4>BA II Plus: BOND worksheet (làm ví dụ 4.2 trong một lần)</h4>
<p>Ngày nhập theo dạng <b>MM.DDYY</b> (mặc định kiểu Mỹ): 20/6/2026 nhập là 6.2026; 1/4/2029 nhập là 4.0129.</p>
${keys([
  ['Mở worksheet, xóa dữ liệu cũ', '[2ND] [9] [2ND] [CE/C]', 'SDT = ...'],
  ['Ngày thanh toán', '6.2026 [ENTER] [↓]', 'CPN = '],
  ['Coupon năm (%)', '6 [ENTER] [↓]', 'RDT = '],
  ['Ngày đáo hạn', '4.0129 [ENTER] [↓]', 'RV = 100'],
  ['Giá hoàn trả', '100 [ENTER] [↓]', 'ACT (nếu thấy 360 thì [2ND] [SET])'],
  ['Tần suất', '[↓]', '2/Y (nếu thấy 1/Y thì [2ND] [SET])'],
  ['Lợi suất', '[↓] 5 [ENTER]', 'YLD = 5.0000'],
  ['Tính giá sạch', '[↓] [CPT]', 'PRI = 102.5578'],
  ['Xem AI', '[↓]', 'AI = 1.3115'],
])}
<p>PRI của máy là <b>flat price</b>. Full price = PRI + AI = 103,8693. Phần lớn đề thi vẫn giải được bằng cách 5 bước ở trên; BOND worksheet giúp kiểm tra nhanh khi đề cho ngày cụ thể.</p>
<p class="warn"><b>Bẫy:</b> (1) Nhân PV với (1 + r)<sup>t/T</sup> chứ không phải với (1 + r × t/T). (2) AI tính bằng coupon <b>mỗi kỳ</b> (3), không phải coupon năm (6). (3) Đề hỏi "quoted price" là flat price.</p>

<h4>Thử ngay: giá thay đổi thế nào trong một kỳ coupon</h4>
<div class="widget" data-widget="fullFlat"></div>
<p>Kéo thanh "đã qua" từ 0% đến 100%: full price tăng dần rồi rơi xuống đúng một coupon vào ngày trả lãi, còn flat price gần như đứng yên. Đó là lý do thị trường yết flat price.</p>`,
    },
    {
      title: '5. Quan hệ giữa giá, coupon, kỳ hạn và YTM',
      minutes: 10,
      html: `
<table class="plain"><thead><tr><th>#</th><th>Tính chất</th><th>Minh họa (tính bằng công thức phần 2)</th></tr></thead><tbody>
<tr><td>1</td><td><b>Ngược chiều:</b> YTM tăng thì giá giảm</td><td>Coupon 6%, 5 năm: YTM 5% → 104,33; 7% → 95,90</td></tr>
<tr><td>2</td><td><b>Coupon và YTM:</b> coupon &gt; YTM → ${t('premium', 'premium')}; = → par; &lt; → ${t('discount', 'discount')}</td><td>Như trên: 104,33 / 100 / 95,90</td></tr>
<tr><td>3</td><td><b>Lồi (${t('convex', 'convexity')}):</b> cùng mức thay đổi YTM, giá tăng khi YTM giảm nhiều hơn giá giảm khi YTM tăng</td><td>YTM 6% → 5%: +4,33%; 6% → 7%: -4,10%</td></tr>
<tr><td>4</td><td><b>Coupon:</b> coupon thấp hơn → giá nhạy hơn với YTM</td><td>10 năm, YTM 5% → 6%: zero -9,04%; coupon 4% -7,58%; coupon 8% -6,86%</td></tr>
<tr><td>5</td><td><b>Kỳ hạn:</b> kỳ hạn dài hơn → giá nhạy hơn với YTM (thường gặp)</td><td>Coupon 5%, YTM 5% → 6%: 5 năm -4,21%; 10 năm -7,36%; 30 năm -13,76%</td></tr>
</tbody></table>

<h4>Giá kéo về mệnh giá (constant-yield price trajectory)</h4>
<p>Nếu YTM không đổi, giá trái phiếu premium <b>giảm dần</b> và giá trái phiếu discount <b>tăng dần</b> về 100 khi đến gần ngày đáo hạn (${t('pull', 'pull to par')}).</p>
<table class="plain"><thead><tr><th>Còn lại (năm)</th><th>5</th><th>4</th><th>3</th><th>2</th><th>1</th><th>0</th></tr></thead><tbody>
<tr><td>Coupon 8%, YTM 6%</td><td>108,42</td><td>106,93</td><td>105,35</td><td>103,67</td><td>101,89</td><td>100</td></tr>
<tr><td>Coupon 4%, YTM 6%</td><td>91,58</td><td>93,07</td><td>94,65</td><td>96,33</td><td>98,11</td><td>100</td></tr>
</tbody></table>
<div class="example"><div class="ex-h">Ví dụ 5.1</div>
<p>Hai trái phiếu cùng YTM 6%: X kỳ hạn 20 năm, coupon 3%; Y kỳ hạn 5 năm, coupon 8%. Nếu YTM tăng lên 7%, trái phiếu nào giảm giá theo phần trăm nhiều hơn?</p>
<details><summary>Xem lời giải</summary><p><b>X</b>: vừa dài hạn hơn vừa coupon thấp hơn, cả hai yếu tố đều làm giá nhạy hơn. Mức độ nhạy này sẽ được đo chính xác bằng duration ở FI-10 và FI-11.</p></details></div>
<p class="tip">Ngoại lệ hiếm của tính chất 5: với trái phiếu discount có coupon rất thấp và kỳ hạn rất dài, độ nhạy có thể giảm nhẹ khi kỳ hạn tăng thêm. Đề Level I thường chỉ hỏi quy tắc chung.</p>`,
    },
    {
      title: '6. Matrix pricing',
      minutes: 7,
      html: `
<p>Nhiều trái phiếu (mới phát hành, ít giao dịch, không có xếp hạng) <b>không có giá thị trường</b>. ${t('matrix', 'Matrix pricing')} ước tính giá bằng YTM của các trái phiếu <b>tương đương</b>: cùng mức tín nhiệm, kỳ hạn và coupon gần giống.</p>
<ol><li>Tính YTM của các trái phiếu tương đương từ giá của chúng.</li>
<li>Nội suy tuyến tính YTM cho đúng kỳ hạn của trái phiếu cần định giá.</li>
<li>Dùng YTM nội suy để chiết khấu dòng tiền của trái phiếu cần định giá.</li></ol>
<div class="example"><div class="ex-h">Ví dụ 6.1</div>
<p>Cần định giá trái phiếu 4 năm, coupon 4% hằng năm. Hai trái phiếu cùng hạng tín nhiệm: A (2 năm, coupon 5%, giá 102,00) và B (5 năm, coupon 3%, giá 94,50).</p>
<details><summary>Xem lời giải</summary>
<p>YTM của A: N = 2, PV = -102, PMT = 5, FV = 100 → <b>3,9405%</b>. YTM của B: N = 5, PV = -94,5, PMT = 3, FV = 100 → <b>4,2439%</b>.</p>
<p>Nội suy cho 4 năm (cách A 2 năm trên khoảng 3 năm): 3,9405% + (4,2439% - 3,9405%) × 2/3 = <b>4,1428%</b>.</p>
<p>Giá: N = 4, I/Y = 4,1428, PMT = 4, FV = 100 → <b>99,48</b>.</p></details></div>
<p class="warn"><b>Bẫy:</b> nội suy <b>lợi suất</b>, không nội suy giá. Giá phụ thuộc coupon nên trung bình giá của hai trái phiếu khác coupon không có ý nghĩa.</p>
<h4>Ước tính lợi suất cho đợt phát hành mới</h4>
<p>Cách làm tương tự với spread: spread của trái phiếu cùng hạng kỳ hạn 5 năm là 1,20%, kỳ hạn 10 năm là 1,60%. Đợt phát hành 7 năm cần spread ≈ 1,20% + (2/5) × 0,40% = <b>1,36%</b>. Nếu lợi suất chính phủ 7 năm là 3,50%, lợi suất đề xuất ≈ <b>4,86%</b>.</p>`,
    },
    {
      title: '7. Tóm tắt và bẫy thường gặp',
      minutes: 4,
      html: `
<table class="plain"><thead><tr><th>Tình huống</th><th>Nhớ</th></tr></thead><tbody>
<tr><td>Coupon nửa năm</td><td>PMT = coupon/2, N = năm × 2, I/Y = YTM/2; tìm YTM thì nhân kết quả với 2</td></tr>
<tr><td>Spot rates</td><td>Mỗi dòng tiền chiết khấu bằng spot rate của chính kỳ hạn đó</td></tr>
<tr><td>Full price</td><td>PV tại coupon trước × (1 + r)<sup>t/T</sup></td></tr>
<tr><td>Accrued interest</td><td>t/T × coupon mỗi kỳ; actual/actual cho chính phủ, 30/360 cho doanh nghiệp</td></tr>
<tr><td>Giá yết (quoted)</td><td>Flat price = full - AI; BA II Plus BOND trả về PRI = flat</td></tr>
<tr><td>Coupon và YTM</td><td>Coupon &gt; YTM → premium; coupon &lt; YTM → discount</td></tr>
<tr><td>Độ nhạy giá</td><td>Coupon thấp hơn, kỳ hạn dài hơn → nhạy hơn; giá tăng nhiều hơn giảm (lồi)</td></tr>
<tr><td>YTM không đổi</td><td>Giá kéo về 100 khi gần đáo hạn</td></tr>
<tr><td>Matrix pricing</td><td>Nội suy YTM (hoặc spread), không nội suy giá</td></tr>
</tbody></table>
<p>Tiếp theo: tab <b>Luyện tập</b> 10 câu (rút ngẫu nhiên từ ngân hàng 30 câu, mỗi lần làm một bộ khác). FI-07 sẽ học các thước đo lợi suất và spread.</p>`,
    },
  ];

  const glossary = {
    ytm: ['Yield to maturity (YTM)', 'Lợi suất đáo hạn', 'Lãi suất chiết khấu duy nhất làm PV dòng tiền trái phiếu bằng giá; giả định giữ đến đáo hạn, không vỡ nợ, tái đầu tư coupon ở YTM.'],
    spot: ['Spot rate', 'Lãi suất spot', 'Lợi suất của trái phiếu zero-coupon có kỳ hạn tương ứng; dùng chiết khấu dòng tiền tại đúng kỳ hạn đó.'],
    ai: ['Accrued interest', 'Lãi dồn tích', 'Phần coupon thuộc về người bán, tính theo tỷ lệ thời gian từ ngày coupon trước đến ngày thanh toán.'],
    full: ['Full price / dirty price / invoice price', 'Giá đầy đủ', 'Giá người mua thực trả = flat price + accrued interest.'],
    flat: ['Flat price / clean price / quoted price', 'Giá sạch', 'Giá yết trên thị trường, không gồm lãi dồn tích.'],
    actact: ['Actual/actual', 'Đếm ngày thực tế', 'Quy ước đếm ngày theo lịch thực tế; thường dùng cho trái phiếu chính phủ.'],
    d30: ['30/360', 'Quy ước 30/360', 'Mỗi tháng tính 30 ngày, mỗi năm 360 ngày; thường dùng cho trái phiếu doanh nghiệp.'],
    premium: ['Premium bond', 'Trái phiếu trên mệnh giá', 'Giá cao hơn mệnh giá; xảy ra khi coupon cao hơn YTM.'],
    discount: ['Discount bond', 'Trái phiếu dưới mệnh giá', 'Giá thấp hơn mệnh giá; xảy ra khi coupon thấp hơn YTM.'],
    convex: ['Convexity', 'Độ lồi', 'Đường giá - lợi suất cong lồi: giá tăng khi lợi suất giảm nhiều hơn giá giảm khi lợi suất tăng cùng mức.'],
    pull: ['Pull to par / constant-yield price trajectory', 'Giá kéo về mệnh giá', 'Với YTM không đổi, giá trái phiếu tiến dần về mệnh giá khi đến gần ngày đáo hạn.'],
    matrix: ['Matrix pricing', 'Định giá ma trận', 'Ước tính giá trái phiếu ít giao dịch bằng YTM nội suy từ các trái phiếu tương đương.'],
  };

  const practice = [
    { q: 'Trái phiếu 7 năm, coupon 5% trả hằng năm, mệnh giá 100, YTM 6%. Giá gần nhất với:', choices: ['94,42', '94,35', '100,00'], answer: 0, explain: 'N = 7, I/Y = 6, PMT = 5, FV = 100, CPT PV = -94,42. Lựa chọn 94,35 là kết quả nếu coi coupon trả nửa năm (N = 14, I/Y = 3, PMT = 2,5). Lựa chọn 100,00 bỏ qua chênh lệch giữa coupon và YTM.' },
    { q: 'Trái phiếu 10 năm, coupon 4,5% trả nửa năm, YTM 5,2% (quy ước nửa năm). Giá gần nhất với:', choices: ['94,65', '94,59', '63,85'], answer: 1, explain: 'N = 20, I/Y = 2,6, PMT = 2,25, FV = 100, CPT PV = -94,59. Lựa chọn 94,65 tính như trái phiếu trả lãi hằng năm. Lựa chọn 63,85 nhập I/Y = 5,2 cho mỗi kỳ nửa năm (quên chia 2).' },
    { q: 'Một trái phiếu coupon 6% đang giao dịch ở giá 97. YTM của nó:', choices: ['thấp hơn 6%', 'bằng 6%', 'cao hơn 6%'], answer: 2, explain: 'Giá dưới mệnh giá (discount) nghĩa là coupon thấp hơn YTM, nên YTM > 6%. Người mua được bù phần coupon thấp bằng giá rẻ và khoản lời vốn khi đáo hạn.' },
    { q: 'Ba trái phiếu không có quyền chọn, cùng YTM 5%. Trái phiếu nào có giá biến động theo phần trăm nhiều nhất khi YTM thay đổi?', choices: ['20 năm, coupon 3%', '20 năm, coupon 7%', '5 năm, coupon 3%'], answer: 0, explain: 'Kỳ hạn dài hơn và coupon thấp hơn đều làm giá nhạy hơn với lợi suất. Trái phiếu 20 năm, coupon 3% vừa dài nhất vừa có coupon thấp. Trái phiếu 20 năm, coupon 7% cùng kỳ hạn nhưng coupon cao nên kém nhạy hơn; trái phiếu 5 năm có kỳ hạn ngắn.' },
    { q: 'Trái phiếu chính phủ coupon 4% trả nửa năm vào 15/1 và 15/7. Giao dịch thanh toán ngày 3/3/2027. Dùng actual/actual, lãi dồn tích trên mệnh giá 100 gần nhất với:', choices: ['0,5333', '1,0387', '0,5193'], answer: 2, explain: 't = 15/1 đến 3/3 = 47 ngày; T = 15/1 đến 15/7 = 181 ngày. AI = 47/181 × 2 = 0,5193. Lựa chọn 0,5333 dùng 30/360 (48/180 × 2), quy ước của trái phiếu doanh nghiệp. Lựa chọn 1,0387 nhân với coupon năm 4 thay vì coupon kỳ 2.' },
    { q: 'Trái phiếu coupon 5% trả nửa năm, còn 8 kỳ coupon, YTM 4%. Đã qua 60 ngày của kỳ coupon 182 ngày. Flat price gần nhất với:', choices: ['104,34', '103,52', '103,66'], answer: 1, explain: 'PV tại coupon trước: N = 8, I/Y = 2, PMT = 2,5, FV = 100 → 103,66. Full = 103,66 × 1,02^(60/182) = 104,34. AI = 60/182 × 2,5 = 0,82. Flat = 104,34 - 0,82 = 103,52. Lựa chọn 104,34 là full price; lựa chọn 103,66 là giá tại ngày coupon trước, chưa điều chỉnh thời gian.' },
    { q: 'Trái phiếu 2 năm, coupon 4% trả hằng năm. Spot rate 1 năm 2,5%, spot rate 2 năm 3,5%. Giá gần nhất với:', choices: ['100,99', '100,95', '102,89'], answer: 0, explain: 'PV = 4/1,025 + 104/1,035^2 = 3,90 + 97,09 = 100,99. Lựa chọn 100,95 chiết khấu cả hai dòng tiền bằng 3,5%; lựa chọn 102,89 chiết khấu cả hai bằng 2,5%. Mỗi dòng tiền phải dùng spot rate của chính kỳ hạn của nó.' },
    { q: 'Cần định giá trái phiếu 5 năm, coupon 4,5% hằng năm. Hai trái phiếu tương đương cùng hạng tín nhiệm: X (3 năm, coupon 4%, giá 101,20) và Y (7 năm, coupon 5%, giá 99,00). Theo matrix pricing, giá gần nhất với:', choices: ['100,10', '104,19', '100,56'], answer: 2, explain: 'YTM của X = 3,571%, của Y = 5,174%. Nội suy cho 5 năm (giữa khoảng): 4,373%. Giá: N = 5, I/Y = 4,373, PMT = 4,5, FV = 100 → 100,56. Lựa chọn 100,10 lấy trung bình giá (sai: phải nội suy lợi suất). Lựa chọn 104,19 dùng YTM của trái phiếu 3 năm, bỏ qua kỳ hạn.' },
    { q: 'Một trái phiếu đang giao dịch dưới mệnh giá. Nếu YTM giữ nguyên đến ngày đáo hạn, giá của nó theo thời gian sẽ:', choices: ['giảm dần về 0', 'tăng dần về mệnh giá', 'không đổi'], answer: 1, explain: 'Pull to par: với YTM không đổi, giá discount tăng dần và giá premium giảm dần về 100 vào ngày đáo hạn. Phương án giá không đổi chỉ đúng với trái phiếu đang giao dịch ở đúng mệnh giá.' },
    { q: 'Trái phiếu 5 năm, coupon 6% trả hằng năm, đang ở giá 100. Nếu YTM giảm 100 bps, giá tăng 4,33%. Nếu YTM tăng 100 bps, phần trăm thay đổi giá gần nhất với:', choices: ['-4,10%', '-4,33%', '-4,56%'], answer: 0, explain: 'Giá ở YTM 7%: 95,90, tức -4,10%. Do độ lồi, giá giảm ít hơn mức tăng cho cùng thay đổi lợi suất. Lựa chọn -4,33% giả định đối xứng; lựa chọn -4,56% đi ngược tính chất lồi.' },
    { q: "Trái phiếu 8 năm, coupon 3,5% trả hằng năm, mệnh giá 100, YTM 4,2%. Giá gần nhất với:", choices: ["104,81", "95,33", "95,83"], answer: 1, explain: "N = 8, I/Y = 4,2, PMT = 3,5, FV = 100 → PV = 95,33. Coupon thấp hơn YTM nên giá dưới mệnh giá. Lựa chọn 104,81 đảo vị trí coupon và YTM (PMT = 4,2, I/Y = 3,5), cho ra giá trên mệnh giá. Lựa chọn 95,83 nhập N = 7, đếm thiếu một kỳ." },
    { q: "Trái phiếu 6 năm, coupon 7% trả nửa năm, YTM 5,5% (quy ước nửa năm). Giá gần nhất với:", choices: ["107,49", "82,76", "107,58"], answer: 2, explain: "N = 12, I/Y = 2,75, PMT = 3,5, FV = 100 → PV = 107,58. Lựa chọn 107,49 tính như trái phiếu trả hằng năm (N = 6, I/Y = 5,5, PMT = 7). Lựa chọn 82,76 nhập I/Y = 5,5 cho mỗi kỳ nửa năm, quên chia YTM cho 2." },
    { q: "Trái phiếu 8 năm, coupon 4% trả nửa năm, giá 92,50. YTM (quy ước nửa năm) gần nhất với:", choices: ["2,58%", "4,32%", "5,16%"], answer: 2, explain: "N = 16, PV = -92,5, PMT = 2, FV = 100 → I/Y = 2,58% mỗi nửa năm; YTM = 2 × 2,58% = 5,16%. Lựa chọn 2,58% dừng ở lãi suất nửa năm, quên nhân 2. Lựa chọn 4,32% là current yield 4 / 92,50, bỏ qua khoản lãi khi giá kéo về mệnh giá." },
    { q: "Trái phiếu 6 năm, coupon 7% trả hằng năm, giá 106,00. YTM gần nhất với:", choices: ["5,79%", "6,60%", "7,00%"], answer: 0, explain: "N = 6, PV = -106, PMT = 7, FV = 100 → I/Y = 5,79%. Lựa chọn 6,60% là current yield 7 / 106, bỏ qua khoản lỗ 6 khi giá kéo về mệnh giá. Lựa chọn 7,00% là coupon rate. Với trái phiếu premium: coupon > current yield > YTM." },
    { q: "Trái phiếu 3 năm, coupon 6% trả hằng năm. Spot rates: Z1 = 2,8%, Z2 = 3,6%, Z3 = 4,3%. Giá không chênh lệch giá (no-arbitrage) gần nhất với:", choices: ["104,69", "104,85", "106,81"], answer: 1, explain: "Giá = 6/1,028 + 6/1,036² + 106/1,043³ = 104,85. Lựa chọn 104,69 chiết khấu mọi dòng tiền bằng spot rate 3 năm, bỏ qua các spot rate ngắn hơn và thấp hơn. Lựa chọn 106,81 chiết khấu mọi dòng tiền bằng trung bình cộng ba spot rate, trong khi phần lớn giá trị nằm ở dòng tiền năm 3." },
    { q: "Đường cong spot rate dốc lên: Z1 = 2%, Z2 = 3%, Z3 = 4%. YTM của một trái phiếu coupon 3 năm trả lãi hằng năm, định giá bằng các spot rate này, nhiều khả năng:", choices: ["Bằng đúng 4%", "Bằng trung bình cộng 3%", "Thấp hơn 4% một chút"], answer: 2, explain: "YTM là một dạng bình quân của các spot rate, có trọng số nghiêng về spot rate 3 năm vì dòng tiền cuối (coupon + gốc) chiếm phần lớn giá trị. Các coupon năm 1, 2 được chiết khấu bằng spot rate thấp hơn nên YTM thấp hơn 4% một chút. YTM chỉ bằng 4% nếu là trái phiếu zero-coupon. Trung bình cộng 3% bỏ qua việc dòng tiền cuối lớn hơn nhiều." },
    { q: "Trái phiếu doanh nghiệp coupon 6,5% trả nửa năm vào ngày 15/3 và 15/9, dùng quy ước 30/360. Giao dịch thanh toán ngày 2/6. Lãi dồn tích trên mệnh giá 100 gần nhất với:", choices: ["1,3903", "2,7806", "1,3954"], answer: 0, explain: "30/360: t = (6 - 3) × 30 + (2 - 15) = 77 ngày; T = 180. AI = 77/180 × 3,25 = 1,3903. Lựa chọn 2,7806 dùng coupon năm 6,5 thay vì coupon mỗi kỳ 3,25. Lựa chọn 1,3954 đếm theo actual/actual (79/184), quy ước dùng cho trái phiếu chính phủ." },
    { q: "Trái phiếu coupon 6% trả nửa năm, còn 8 kỳ coupon, YTM 5%. Đã qua 90 ngày của kỳ coupon 182 ngày. Giá đầy đủ (full price) gần nhất với:", choices: ["103,59", "104,86", "106,17"], answer: 1, explain: "PV tại ngày coupon trước: N = 8, I/Y = 2,5, PMT = 3, FV = 100 → 103,59. Full price = 103,59 × 1,025^(90/182) = 104,86. Lựa chọn 103,59 là giá tại ngày coupon trước, chưa đưa về ngày thanh toán. Lựa chọn 106,17 ghép lãi cả kỳ (× 1,025), bỏ qua tỷ lệ t/T." },
    { q: "Trái phiếu coupon 4% trả nửa năm, còn 6 kỳ coupon, YTM 5%. Đã qua 45 ngày của kỳ coupon 181 ngày. Giá yết trên thị trường (flat price) gần nhất với:", choices: ["97,84", "96,85", "97,35"], answer: 2, explain: "PV tại coupon trước = 97,25 (N = 6, I/Y = 2,5, PMT = 2, FV = 100). Full = 97,25 × 1,025^(45/181) = 97,84. AI = 45/181 × 2 = 0,4972. Flat = 97,84 - 0,4972 = 97,35. Lựa chọn 97,84 là full price, chưa trừ lãi dồn tích. Lựa chọn 96,85 trừ AI tính bằng coupon năm 4 thay vì coupon kỳ 2." },
    { q: "Vì sao thị trường trái phiếu thường yết giá sạch (flat price) thay vì giá đầy đủ (full price)?", choices: ["Giá sạch không \"nhảy\" xuống mỗi lần trả coupon, nên phản ánh đúng thay đổi giá do lãi suất thị trường", "Giá sạch luôn bằng mệnh giá", "Người mua không phải trả lãi dồn tích cho người bán"], answer: 0, explain: "Full price tăng dần trong kỳ rồi rơi đúng một coupon vào ngày trả lãi, nên nếu yết full price, giá sẽ dao động dù lợi suất không đổi. Giá sạch loại bỏ lãi dồn tích nên ổn định hơn. Giá sạch không nhất thiết bằng mệnh giá. Người mua vẫn trả full price, tức vẫn trả lãi dồn tích cho người bán." },
    { q: "Giả sử YTM không đổi. Ngay sau ngày trả coupon, so với ngay trước ngày trả coupon, giá đầy đủ (full price) của trái phiếu:", choices: ["Tăng thêm một kỳ coupon", "Giảm xuống xấp xỉ bằng một kỳ coupon", "Không đổi vì lãi dồn tích đã được trả"], answer: 1, explain: "Ngay trước ngày trả coupon, full price đã gồm gần trọn một kỳ coupon dồn tích. Khi coupon được trả, người nắm giữ nhận tiền và lãi dồn tích về 0, nên full price giảm xấp xỉ một coupon. Flat price gần như không đổi qua thời điểm này. Phương án \"tăng thêm một kỳ coupon\" ngược chiều." },
    { q: "Quy ước đếm ngày nào thường được dùng để tính lãi dồn tích của trái phiếu chính phủ và trái phiếu doanh nghiệp?", choices: ["Chính phủ: 30/360; doanh nghiệp: actual/actual", "Cả hai đều dùng actual/360", "Chính phủ: actual/actual; doanh nghiệp: 30/360"], answer: 2, explain: "Trái phiếu chính phủ thường dùng actual/actual (đếm số ngày thực tế cả t và T); trái phiếu doanh nghiệp thường dùng 30/360 (mỗi tháng 30 ngày, năm 360 ngày). Phương án ngược lại đảo hai quy ước. Actual/360 là quy ước thường gặp ở công cụ thị trường tiền tệ như repo, không phải quy ước chuẩn của trái phiếu coupon." },
    { q: "Một trái phiếu không có quyền chọn đang giao dịch ở mệnh giá. Nhận định nào đúng nhất về thay đổi giá khi YTM tăng hoặc giảm cùng 100 bps?", choices: ["Mức tăng giá khi YTM giảm lớn hơn mức giảm giá khi YTM tăng", "Mức tăng giá khi YTM giảm nhỏ hơn mức giảm giá khi YTM tăng", "Hai mức thay đổi bằng nhau về độ lớn"], answer: 0, explain: "Quan hệ giá - lợi suất là đường cong lồi (convexity): cùng một mức thay đổi YTM, giá tăng khi YTM giảm nhiều hơn giá giảm khi YTM tăng. Ví dụ trái phiếu 5 năm coupon 6%: YTM 6% → 5% giá +4,33%, 6% → 7% giá -4,10%. Hai phương án còn lại mô tả quan hệ lõm hoặc tuyến tính." },
    { q: "Trái phiếu zero-coupon 10 năm, YTM 4% (ghép lãi hằng năm). Nếu YTM tăng lên 5%, phần trăm thay đổi giá gần nhất với:", choices: ["-6,17%", "-9,13%", "-10,00%"], answer: 1, explain: "Giá ban đầu = 100 / 1,04^10 = 67,56; giá mới = 100 / 1,05^10 = 61,39; thay đổi = 61,39 / 67,56 - 1 = -9,13%. Lựa chọn -6,17% lấy chênh lệch 6,17 điểm giá rồi coi là phần trăm, quên chia cho giá ban đầu. Lựa chọn -10,00% nhân kỳ hạn 10 năm với 1% thay đổi lợi suất, bỏ qua chiết khấu và tính lồi." },
    { q: "Ba trái phiếu không có quyền chọn có cùng YTM 5%. Trái phiếu nào có giá biến động theo phần trăm ÍT NHẤT khi YTM thay đổi?", choices: ["3 năm, zero-coupon", "12 năm, coupon 8%", "3 năm, coupon 8%"], answer: 2, explain: "Độ nhạy giá thấp hơn khi kỳ hạn ngắn hơn và coupon cao hơn. Trái phiếu 3 năm coupon 8% vừa ngắn hạn vừa coupon cao nên ít nhạy nhất. Zero-coupon 3 năm cùng kỳ hạn nhưng không có coupon nên nhạy hơn. Trái phiếu 12 năm coupon 8% cùng coupon nhưng kỳ hạn dài hơn nhiều nên nhạy hơn." },
    { q: "Trái phiếu 6 năm, coupon 7% trả hằng năm, YTM 5%, giá hiện tại 110,15. Nếu YTM giữ nguyên 5%, giá của trái phiếu một năm sau (ngay sau khi trả coupon) gần nhất với:", choices: ["108,66", "110,15", "108,15"], answer: 0, explain: "Một năm sau còn 5 năm: N = 5, I/Y = 5, PMT = 7, FV = 100 → 108,66. Giá premium giảm dần về mệnh giá khi đến gần đáo hạn (pull to par). Lựa chọn 110,15 cho rằng giá không đổi khi YTM không đổi. Lựa chọn 108,15 trừ thẳng chênh lệch coupon - YTM (2 điểm), bỏ qua giá trị thời gian." },
    { q: "Cần định giá một trái phiếu 6 năm không có giá thị trường. Hai trái phiếu tương đương cùng hạng tín nhiệm: kỳ hạn 4 năm có YTM 4,40% và kỳ hạn 9 năm có YTM 5,15%. Theo matrix pricing, YTM dùng để định giá trái phiếu 6 năm gần nhất với:", choices: ["4,78%", "4,70%", "4,85%"], answer: 1, explain: "Nội suy tuyến tính: 6 năm cách 4 năm 2 năm trên khoảng 5 năm, nên YTM = 4,40% + (5,15% - 4,40%) × 2/5 = 4,70%. Lựa chọn 4,78% lấy trung bình cộng hai YTM, bỏ qua vị trí của kỳ hạn 6 năm. Lựa chọn 4,85% đo khoảng cách 2/5 từ đầu 9 năm (5,15% - 0,30%), nhầm chiều nội suy." },
    { q: "Khi dùng matrix pricing với hai trái phiếu tương đương có coupon khác nhau, nhà phân tích nên:", choices: ["Lấy trung bình giá của hai trái phiếu tương đương", "Dùng coupon rate của trái phiếu tương đương có kỳ hạn gần nhất làm lãi suất chiết khấu", "Tính YTM của từng trái phiếu tương đương rồi nội suy lợi suất cho kỳ hạn cần định giá"], answer: 2, explain: "Matrix pricing nội suy lợi suất (hoặc spread), sau đó dùng lợi suất nội suy để chiết khấu dòng tiền của trái phiếu cần định giá. Trung bình giá vô nghĩa vì giá phụ thuộc coupon và kỳ hạn của từng trái phiếu. Coupon rate không phải lợi suất thị trường, trừ khi trái phiếu giao dịch đúng mệnh giá." },
    { q: "Một doanh nghiệp chuẩn bị phát hành trái phiếu 5 năm. Spread của trái phiếu cùng hạng tín nhiệm: kỳ hạn 3 năm là 0,90%, kỳ hạn 10 năm là 1,60%. Lợi suất trái phiếu chính phủ 5 năm là 3,20%. Lợi suất ước tính cho đợt phát hành mới gần nhất với:", choices: ["4,30%", "4,45%", "1,10%"], answer: 0, explain: "Nội suy spread: 0,90% + (1,60% - 0,90%) × 2/7 = 1,10%. Lợi suất = 3,20% + 1,10% = 4,30%. Lựa chọn 4,45% dùng trung bình cộng hai spread (1,25%), bỏ qua vị trí kỳ hạn 5 năm. Lựa chọn 1,10% chỉ là spread nội suy, quên cộng lợi suất chính phủ." },
    { q: "Trái phiếu zero-coupon 5 năm, mệnh giá 100, YTM 4% theo quy ước nửa năm (semi-annual bond basis). Giá gần nhất với:", choices: ["82,19", "82,03", "80,00"], answer: 1, explain: "Theo quy ước nửa năm: N = 10, I/Y = 2 → giá = 100 / 1,02^10 = 82,03. Lựa chọn 82,19 ghép lãi hằng năm (100 / 1,04^5), không đúng quy ước đề cho. Lựa chọn 80,00 trừ lãi đơn 4% × 5 năm, bỏ qua lãi kép." },
  ];

  // Widget: full price, AI và flat price trong một kỳ coupon (coupon nửa năm).
  const widgets = {
    fullFlat(el) {
      el.innerHTML = `
        <div class="w-row"><label>Coupon năm: <b data-o="c">6%</b><input type="range" min="0" max="10" step="0.5" value="6" data-i="c"></label>
        <label>YTM: <b data-o="y">5%</b><input type="range" min="1" max="10" step="0.25" value="5" data-i="y"></label>
        <label>Đã qua của kỳ coupon: <b data-o="f">44%</b><input type="range" min="0" max="100" step="1" value="44" data-i="f"></label></div>
        <div class="w-out"><div class="w-price" data-o="p"></div><div class="w-bar"><span data-o="bar"></span><i></i></div><div class="w-note" data-o="note"></div></div>`;
      const q = s => el.querySelector(s);
      const fmt = x => x.toFixed(4).replace('.', ',');
      const upd = () => {
        const c = +q('[data-i="c"]').value, y = +q('[data-i="y"]').value / 100, f = +q('[data-i="f"]').value / 100;
        const n = 6, r = y / 2, C = c / 2;
        let pv = 0;
        for (let k = 1; k <= n; k++) pv += C / Math.pow(1 + r, k);
        pv += 100 / Math.pow(1 + r, n);
        const full = pv * Math.pow(1 + r, f), ai = C * f, flat = full - ai;
        q('[data-o="c"]').textContent = `${c}%`;
        q('[data-o="y"]').textContent = `${(y * 100).toFixed(2)}%`;
        q('[data-o="f"]').textContent = `${Math.round(f * 100)}%`;
        q('[data-o="p"]').textContent = `Full = ${fmt(full)} · AI = ${fmt(ai)} · Flat = ${fmt(flat)}`;
        q('[data-o="bar"]').style.width = `${Math.min(100, full / 2)}%`;
        q('[data-o="note"]').textContent = `Còn 6 kỳ coupon nửa năm. PV tại coupon trước = ${fmt(pv)}; full = PV × (1 + ${fmt(r * 100)}%)^${f.toFixed(2)}. Thanh màu là full price (vạch giữa = 100).`;
      };
      el.addEventListener('input', upd);
      upd();
    },
  };

  window.LESSONS['FI-06'] = {
    moduleId: 'FI-06',
    calculator: 'BA II Plus',
    warmup: [
      'Ôn QM-04: trái phiếu 3 năm, coupon 4% hằng năm, lãi suất thị trường 5%. Giá trên hay dưới 100? Vì sao?',
      'Kiểm tra máy: P/Y = 1 chưa? Bạn có biết phím mở BOND worksheet không?',
      'Nếu bạn mua một trái phiếu 2 tháng sau ngày trả coupon, theo bạn ai được hưởng coupon của 2 tháng đó?',
    ],
    sections,
    glossary,
    practice,
    widgets,
    slides: [],
    wrapup: [
      'Viết 5 bước tính full price, AI và flat price mà không nhìn bài.',
      'Nêu 5 tính chất về quan hệ giá - coupon - kỳ hạn - YTM, mỗi tính chất một câu.',
      'Vì sao matrix pricing nội suy lợi suất chứ không nội suy giá?',
    ],
  };
}());
