// Bài giảng FI-09 - The Term Structure of Interest Rates: Spot, Par, and Forward Curves (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t, frac, keys, timeline } = window.CFAH;

  const sections = [
    {
      title: '1. Bức tranh lớn: một YTM là chưa đủ',
      minutes: 5,
      html: `
<p>Ở FI-06 và FI-07, mỗi trái phiếu được định giá bằng <b>một</b> lợi suất duy nhất (YTM). Cách này tiện, nhưng ẩn một giả định khá mạnh: tiền nhận sau 1 năm và tiền nhận sau 10 năm được chiết khấu cùng một mức lãi suất. Thực tế thị trường không như vậy: tiền ở mỗi kỳ hạn có "giá" riêng. Tập hợp các mức lãi suất theo kỳ hạn gọi là ${t('ts', 'cấu trúc kỳ hạn của lãi suất (term structure)')}.</p>
<div class="key">Cùng một cấu trúc kỳ hạn có thể được mô tả theo <b>ba cách tương đương</b>:<br>
1. ${t('spot', 'Lãi suất spot')}: lợi suất của trái phiếu zero-coupon theo từng kỳ hạn.<br>
2. ${t('par', 'Lãi suất par')}: coupon làm cho trái phiếu có giá đúng bằng mệnh giá theo từng kỳ hạn.<br>
3. ${t('forward', 'Lãi suất kỳ hạn (forward)')}: lãi suất cho một khoảng thời gian <b>trong tương lai</b>, khóa từ hôm nay.</div>
<p>Biết một đường thì suy ra được hai đường còn lại. Module này dạy đúng ba việc theo LOS:</p>
<ol>
  <li>Định nghĩa spot rate, đường spot, và định giá trái phiếu bằng spot rate (LOS 1).</li>
  <li>Tính par rate, forward rate từ spot, spot từ forward, và định giá bằng forward rate (LOS 2).</li>
  <li>So sánh hình dạng của ba đường cong (LOS 3).</li>
</ol>
<p class="tip">QM-04 đã giới thiệu implied forward rate f<sub>1,1</sub> bằng lập luận không chênh lệch giá. Ở đây ta tổng quát hóa cho mọi kỳ hạn và nối nó với spot và par.</p>`,
    },
    {
      title: '2. Spot rate, đường spot và định giá bằng spot rate',
      minutes: 12,
      html: `
<p><b>Spot rate kỳ hạn T</b> (ký hiệu S<sub>T</sub> hay Z<sub>T</sub>) là lợi suất của một trái phiếu zero-coupon không rủi ro tín dụng đáo hạn sau T năm, mua <b>hôm nay</b>. Vẽ S<sub>T</sub> theo T được ${t('spotcurve', 'đường spot (spot curve, zero curve)')}. Với chính phủ, đường này thường gọi là đường lợi suất trái phiếu chính phủ zero-coupon.</p>
<p>Mỗi spot rate cho một ${t('df', 'hệ số chiết khấu (discount factor)')}: DF<sub>T</sub> = 1/(1 + S<sub>T</sub>)<sup>T</sup>, tức giá hôm nay của 1 đồng nhận sau T năm.</p>
<div class="formula">PV = ${frac('PMT', '(1 + S<sub>1</sub>)<sup>1</sup>')} + ${frac('PMT', '(1 + S<sub>2</sub>)<sup>2</sup>')} + ... + ${frac('PMT + FV', '(1 + S<sub>N</sub>)<sup>N</sup>')}</div>
<p>Ý tưởng: một trái phiếu có coupon chính là <b>một rổ trái phiếu zero-coupon</b>, mỗi dòng tiền là một zero riêng. Theo nguyên tắc không chênh lệch giá, mỗi dòng tiền phải được chiết khấu bằng spot rate đúng kỳ hạn của nó.</p>
${timeline(3, [{ t: 0, label: 'PV = 102,96', up: true, cls: 'pv' }, { t: 1, label: '5 ÷ 1,02' }, { t: 2, label: '5 ÷ 1,03²' }, { t: 3, label: '105 ÷ 1,04³' }], 'Mỗi dòng tiền dùng spot rate của riêng kỳ hạn đó.')}

<div class="example"><div class="ex-h">Ví dụ 2.1 - Định giá bằng spot rate</div>
<p>Spot rate (trả lãi năm): S<sub>1</sub> = 2%, S<sub>2</sub> = 3%, S<sub>3</sub> = 4%. Định giá trái phiếu 3 năm, coupon 5% trả hằng năm, mệnh giá 100.</p>
<details><summary>Xem lời giải</summary>
<table class="plain"><thead><tr><th>Năm</th><th>Dòng tiền</th><th>Hệ số chiết khấu</th><th>PV</th></tr></thead><tbody>
<tr><td>1</td><td>5</td><td>1/1,02 = 0,980392</td><td>4,9020</td></tr>
<tr><td>2</td><td>5</td><td>1/1,03<sup>2</sup> = 0,942596</td><td>4,7130</td></tr>
<tr><td>3</td><td>105</td><td>1/1,04<sup>3</sup> = 0,888996</td><td>93,3446</td></tr>
<tr><td colspan="3"><b>Giá</b></td><td><b>102,96</b></td></tr></tbody></table>
<p>Giá 102,96 &gt; 100 vì coupon 5% cao hơn mọi spot rate.</p></details></div>

<h4>Quan hệ giữa YTM và spot rate</h4>
<p>Với giá 102,96, YTM của trái phiếu trên là nghiệm của N = 3, PV = -102,96, PMT = 5, FV = 100:</p>
${keys([['Tính YTM', '[2ND] [FV] 3 [N] 102.959558 [+|-] [PV] 5 [PMT] 100 [FV] [CPT] [I/Y]', 'I/Y = 3.9348']])}
<p>YTM = <b>3,93%</b>, nằm giữa 2% và 4% nhưng rất gần S<sub>3</sub> = 4%, vì phần lớn giá trị nằm ở dòng tiền năm 3. Có thể hiểu ${t('ytm', 'YTM')} là một dạng <b>trung bình có trọng số</b> của các spot rate.</p>
<p class="warn"><b>Bẫy:</b> khi đường spot dốc lên, YTM của trái phiếu coupon <b>thấp hơn</b> spot rate cùng kỳ hạn (3,93% &lt; 4%). Coupon càng cao thì khoảng cách càng lớn (coupon effect). Chỉ với zero-coupon thì YTM = spot rate.</p>`,
    },
    {
      title: '3. Par rate và bootstrapping',
      minutes: 12,
      html: `
<p><b>Par rate kỳ hạn N</b> là mức coupon làm trái phiếu N năm có giá <b>đúng bằng mệnh giá</b> khi chiết khấu bằng các spot rate hiện tại. Với trái phiếu giao dịch ở par thì coupon = YTM, nên par rate cũng là YTM của trái phiếu par. Vẽ par rate theo kỳ hạn được ${t('parcurve', 'đường par (par curve)')}. Trái phiếu chính phủ mới phát hành (on-the-run) thường được định giá gần par, nên đường par là thứ thị trường quan sát trực tiếp nhiều nhất.</p>
<div class="formula">100 = PMT × (DF<sub>1</sub> + DF<sub>2</sub> + ... + DF<sub>N</sub>) + 100 × DF<sub>N</sub> &nbsp;&nbsp;⇒&nbsp;&nbsp; par rate<sub>N</sub> = ${frac('1 - DF<sub>N</sub>', 'DF<sub>1</sub> + DF<sub>2</sub> + ... + DF<sub>N</sub>')}</div>

<div class="example"><div class="ex-h">Ví dụ 3.1 - Từ spot sang par</div>
<p>Dùng spot rate 2%, 3%, 4% ở Ví dụ 2.1. Tìm par rate 1, 2 và 3 năm.</p>
<details><summary>Xem lời giải</summary>
<p>DF<sub>1</sub> = 0,980392; DF<sub>2</sub> = 0,942596; DF<sub>3</sub> = 0,888996.</p>
<p>Par 1 năm = (1 - 0,980392)/0,980392 = <b>2,00%</b> (với 1 kỳ, par = spot).<br>
Par 2 năm = (1 - 0,942596)/(0,980392 + 0,942596) = <b>2,99%</b><br>
Par 3 năm = (1 - 0,888996)/(0,980392 + 0,942596 + 0,888996) = <b>3,95%</b></p>
<p>Đường spot dốc lên thì par rate <b>thấp hơn một chút</b> so với spot rate cùng kỳ hạn.</p></details></div>

<h4>${t('bootstrap', 'Bootstrapping')}: đi ngược từ par sang spot</h4>
<p>Thị trường thường cho ta đường par (hoặc giá các trái phiếu coupon), còn spot rate phải suy ra. Cách làm là giải lần lượt từ kỳ hạn ngắn đến dài, mỗi bước dùng các spot rate đã tìm ở bước trước:</p>
<ol>
  <li>Trái phiếu par 1 năm chỉ có một dòng tiền, nên S<sub>1</sub> = par rate 1 năm.</li>
  <li>Trái phiếu par 2 năm: 100 = PMT/(1 + S<sub>1</sub>) + (100 + PMT)/(1 + S<sub>2</sub>)<sup>2</sup>. Đã biết S<sub>1</sub>, giải ra S<sub>2</sub>.</li>
  <li>Tiếp tục cho 3 năm, 4 năm...</li>
</ol>
<div class="example"><div class="ex-h">Ví dụ 3.2 - Bootstrap</div>
<p>Par rate (trả lãi năm): 1 năm 2%, 2 năm 3%, 3 năm 4%. Tìm S<sub>1</sub>, S<sub>2</sub>, S<sub>3</sub>.</p>
<details><summary>Xem lời giải</summary>
<p>S<sub>1</sub> = <b>2,00%</b>.</p>
<p>100 = 3/1,02 + 103/(1 + S<sub>2</sub>)<sup>2</sup> ⇒ (1 + S<sub>2</sub>)<sup>2</sup> = 103/(100 - 2,941176) = 1,061212 ⇒ S<sub>2</sub> = <b>3,02%</b>.</p>
<p>100 = 4/1,02 + 4/1,030152<sup>2</sup> + 104/(1 + S<sub>3</sub>)<sup>3</sup> ⇒ (1 + S<sub>3</sub>)<sup>3</sup> = 104/(100 - 3,921569 - 3,769275) = 1,126649 ⇒ S<sub>3</sub> = <b>4,05%</b>.</p>
<p>Đường par dốc lên nên spot rate tìm được <b>cao hơn</b> par rate ở cùng kỳ hạn (3,02% &gt; 3%, 4,05% &gt; 4%).</p></details></div>
<p class="tip"><b>BA II Plus:</b> không có phím bootstrap. Bấm từng bước: tính PV các coupon đã biết, lấy 100 trừ đi, rồi (100 + PMT)/phần còn lại, mũ 1/N bằng <kbd>y<sup>x</sup></kbd> với số mũ (1 ÷ N), trừ 1.</p>`,
    },
    {
      title: '4. Forward rate: từ spot sang forward và ngược lại',
      minutes: 12,
      html: `
<p>${t('forward', 'Forward rate')} là lãi suất cho một khoản vay/đầu tư <b>bắt đầu trong tương lai</b>, thỏa thuận từ hôm nay. Ký hiệu f<sub>A,B-A</sub>: bắt đầu sau A năm, kéo dài B - A năm. Thị trường hay đọc là "AyBy": f<sub>1,1</sub> là "1y1y" (1 năm, bắt đầu sau 1 năm), f<sub>2,1</sub> là "2y1y".</p>
<div class="formula">(1 + S<sub>B</sub>)<sup>B</sup> = (1 + S<sub>A</sub>)<sup>A</sup> × (1 + f<sub>A,B-A</sub>)<sup>B-A</sup></div>
<p>Lập luận giống hệt QM-04: đầu tư B năm theo spot rate phải cho cùng kết quả với đầu tư A năm rồi tái đầu tư B - A năm ở forward rate khóa từ hôm nay. Nếu không, có cơ hội arbitrage.</p>

<div class="example"><div class="ex-h">Ví dụ 4.1 - Forward từ spot</div>
<p>S<sub>1</sub> = 2%, S<sub>2</sub> = 3%, S<sub>3</sub> = 4%. Tìm f<sub>1,1</sub>, f<sub>2,1</sub> và f<sub>1,2</sub>.</p>
<details><summary>Xem lời giải</summary>
<p>f<sub>1,1</sub> = 1,03<sup>2</sup>/1,02 - 1 = <b>4,01%</b><br>
f<sub>2,1</sub> = 1,04<sup>3</sup>/1,03<sup>2</sup> - 1 = <b>6,03%</b><br>
f<sub>1,2</sub> = (1,04<sup>3</sup>/1,02)<sup>1/2</sup> - 1 = <b>5,01%</b> (nhớ lấy căn bậc 2 vì khoảng thời gian dài 2 năm)</p>
<p>Mẹo kiểm tra nhanh: f<sub>2,1</sub> ≈ 3 × 4% - 2 × 3% = 6%. Con số gần đúng chỉ để kiểm tra, đáp án chính xác là 6,03%.</p></details></div>

<h4>Spot từ forward</h4>
<p>Ngược lại, spot rate là <b>trung bình nhân</b> của chuỗi forward 1 năm nối tiếp nhau:</p>
<div class="formula">(1 + S<sub>N</sub>)<sup>N</sup> = (1 + S<sub>1</sub>)(1 + f<sub>1,1</sub>)(1 + f<sub>2,1</sub>)...(1 + f<sub>N-1,1</sub>)</div>
<p>Kiểm tra: (1,02 × 1,0401 × 1,0603)<sup>1/3</sup> - 1 = 4,00% = S<sub>3</sub>.</p>

<h4>Định giá trái phiếu bằng forward rate</h4>
<p>Chiết khấu mỗi dòng tiền qua <b>từng chặng</b> forward: dòng tiền năm 3 chia cho (1 + S<sub>1</sub>)(1 + f<sub>1,1</sub>)(1 + f<sub>2,1</sub>).</p>
<div class="example"><div class="ex-h">Ví dụ 4.2 - Định giá bằng forward</div>
<p>Dùng forward ở Ví dụ 4.1, định giá lại trái phiếu 3 năm coupon 5%.</p>
<details><summary>Xem lời giải</summary>
<p>PV = 5/1,02 + 5/(1,02 × 1,040098) + 105/(1,02 × 1,040098 × 1,060292) = 4,9020 + 4,7130 + 93,3446 = <b>102,96</b>.</p>
<p>Đúng bằng giá tính bằng spot rate. Không thể khác được: spot và forward chỉ là hai cách viết của cùng một bộ hệ số chiết khấu.</p></details></div>
<p class="warn"><b>Bẫy:</b> f<sub>1,1</sub> không phải trung bình cộng hay hiệu số của spot rate. Với S<sub>1</sub> = 2%, S<sub>2</sub> = 3%, đáp án 4% (= 2 × 3% - 2%) chỉ là xấp xỉ; đáp án 1% (= hiệu) là sai hẳn.</p>
<p class="tip"><b>Lãi suất trả nửa năm:</b> nếu spot rate được báo theo năm với tần suất 2, chia rate cho 2 và tính số kỳ theo nửa năm. Ví dụ S<sub>1</sub> = 3,5% (bán niên) thì hệ số chiết khấu năm 1 là 1/1,0175<sup>2</sup>.</p>`,
    },
    {
      title: '5. So sánh đường spot, par và forward',
      minutes: 9,
      html: `
<p>Hình dạng đường cong thường gặp: <b>dốc lên</b> (upward sloping, phổ biến nhất), <b>bằng phẳng</b> (flat), <b>dốc xuống/đảo ngược</b> (inverted), và <b>có bướu</b> (humped). Quan hệ giữa ba đường phụ thuộc vào độ dốc:</p>
<table class="plain"><thead><tr><th>Đường spot</th><th>Thứ tự (với kỳ hạn &gt; 1 năm)</th><th>Vì sao</th></tr></thead><tbody>
<tr><td>Dốc lên</td><td><b>forward &gt; spot &gt; par</b></td><td>Spot là trung bình của các forward; muốn trung bình tăng thì forward cận biên phải cao hơn. Par là trung bình có trọng số của spot, kéo về phía spot ngắn hạn.</td></tr>
<tr><td>Bằng phẳng</td><td>forward = spot = par</td><td>Mọi kỳ hạn cùng một lãi suất</td></tr>
<tr><td>Dốc xuống</td><td><b>forward &lt; spot &lt; par</b></td><td>Ngược lại với trường hợp dốc lên</td></tr>
</tbody></table>
<p>Ở kỳ hạn 1 năm, cả ba bằng nhau (S<sub>1</sub> = par<sub>1</sub> = f<sub>0,1</sub>).</p>
<h4>Thử ngay: kéo spot ngắn hạn và dài hạn</h4>
<div class="widget" data-widget="curves"></div>
<div class="example"><div class="ex-h">Ví dụ 5.1 - Đường đảo ngược</div>
<p>Par rate: 1 năm 5%, 2 năm 4,5%, 3 năm 4%. Bootstrap ra spot và forward 1 năm.</p>
<details><summary>Xem lời giải</summary>
<p>Spot: 5,00%, 4,49%, 3,97%. Forward 1 năm: f<sub>0,1</sub> = 5,00%, f<sub>1,1</sub> = 3,98%, f<sub>2,1</sub> = 2,95%.</p>
<p>Ở kỳ hạn 3 năm: forward 2,95% &lt; spot 3,97% &lt; par 4,00%. Đúng quy tắc của đường dốc xuống.</p></details></div>
<p class="tip">Cách nhớ: forward là lãi suất <b>cận biên</b> (của năm tăng thêm), spot là <b>trung bình</b>, par là <b>trung bình của trung bình</b>. Giống điểm thi: điểm môn mới (forward) phải cao hơn điểm trung bình thì trung bình mới tăng.</p>
<p>Forward rate cũng được đọc như mức "hòa vốn": nếu nhà đầu tư tin rằng lãi suất tương lai sẽ thấp hơn forward rate hiện tại, họ sẽ thích trái phiếu dài hạn hơn (khóa lợi suất cao). Phần đường cong và rủi ro theo kỳ hạn được dùng tiếp ở FI-10 đến FI-13.</p>`,
    },
    {
      title: '6. Tóm tắt và bẫy thường gặp',
      minutes: 5,
      html: `
<table class="plain"><thead><tr><th>Tình huống</th><th>Nhớ</th></tr></thead><tbody>
<tr><td>Định giá bằng spot</td><td>Mỗi dòng tiền chiết khấu bằng spot rate đúng kỳ hạn của nó</td></tr>
<tr><td>YTM và spot</td><td>YTM là trung bình có trọng số của spot; đường dốc lên thì YTM coupon bond &lt; spot cùng kỳ hạn</td></tr>
<tr><td>Par rate</td><td>(1 - DF<sub>N</sub>)/(ΣDF); par 1 năm = spot 1 năm</td></tr>
<tr><td>Bootstrap</td><td>Giải từ ngắn đến dài, mỗi bước dùng spot đã tìm</td></tr>
<tr><td>Forward f<sub>A,B-A</sub></td><td>(1 + S<sub>B</sub>)<sup>B</sup>/(1 + S<sub>A</sub>)<sup>A</sup>, rồi lấy căn bậc (B - A)</td></tr>
<tr><td>Spot từ forward</td><td>Trung bình nhân, không phải trung bình cộng</td></tr>
<tr><td>Giá bằng forward</td><td>Bằng đúng giá tính bằng spot</td></tr>
<tr><td>Thứ tự đường cong</td><td>Dốc lên: forward &gt; spot &gt; par. Dốc xuống: ngược lại</td></tr>
<tr><td>Lãi suất bán niên</td><td>Chia rate cho 2, nhân số năm với 2</td></tr>
</tbody></table>
<p>Tiếp theo: làm 10 câu (rút ngẫu nhiên từ ngân hàng 30 câu, mỗi lần làm một bộ khác) ở tab <b>Luyện tập</b>.</p>`,
    },
  ];

  const glossary = {
    ts: ['Term structure of interest rates', 'Cấu trúc kỳ hạn của lãi suất', 'Quan hệ giữa lãi suất và kỳ hạn của các trái phiếu cùng chất lượng tín dụng.'],
    spot: ['Spot rate', 'Lãi suất spot', 'Lợi suất của trái phiếu zero-coupon (không rủi ro tín dụng) kỳ hạn T mua hôm nay.'],
    spotcurve: ['Spot curve / zero curve', 'Đường spot', 'Đồ thị spot rate theo kỳ hạn.'],
    df: ['Discount factor', 'Hệ số chiết khấu', '1/(1 + S_T)^T: giá hôm nay của 1 đồng nhận sau T năm.'],
    ytm: ['Yield to maturity (YTM)', 'Lợi suất đáo hạn', 'Lãi suất chiết khấu duy nhất làm PV dòng tiền bằng giá; là trung bình có trọng số của các spot rate.'],
    par: ['Par rate', 'Lãi suất par', 'Coupon làm trái phiếu có giá bằng mệnh giá khi chiết khấu bằng các spot rate.'],
    parcurve: ['Par curve', 'Đường par', 'Đồ thị par rate theo kỳ hạn; thường lấy từ trái phiếu chính phủ mới phát hành.'],
    bootstrap: ['Bootstrapping', 'Bootstrap (suy spot từ par)', 'Giải lần lượt từ kỳ hạn ngắn đến dài để tìm spot rate từ giá hoặc par rate của trái phiếu coupon.'],
    forward: ['Forward rate', 'Lãi suất kỳ hạn', 'Lãi suất cho một khoảng thời gian trong tương lai, ngầm định từ đường spot hôm nay; f(A,B-A) hay AyBy.'],
  };

  const practice = [
    { q: 'Spot rate 1 năm là 3%, spot rate 2 năm là 4,5%. Giá của trái phiếu 2 năm, coupon 6% trả hằng năm, mệnh giá 100, gần nhất với:', choices: ['102,89', '102,81', '105,74'], answer: 0, explain: 'PV = 6/1,03 + 106/1,045^2 = 5,8252 + 97,0674 = 102,89. Lựa chọn 102,81 chiết khấu cả hai dòng tiền bằng 4,5% (dùng một lãi suất duy nhất). Lựa chọn 105,74 chiết khấu cả hai bằng 3%.' },
    { q: 'Par rate 1 năm là 3%, par rate 2 năm là 4% (trả lãi năm). Spot rate 2 năm bootstrap được gần nhất với:', choices: ['4,00%', '5,05%', '4,02%'], answer: 2, explain: '100 = 4/1,03 + 104/(1 + S2)^2, suy ra (1 + S2)^2 = 104/96,1165 = 1,08202, S2 = 4,02%. Lựa chọn 4,00% nhầm spot với par. Lựa chọn 5,05% là forward f1,1 tính từ spot 3% và 4,02%.' },
    { q: 'S1 = 3%, S2 = 4,5%. Lãi suất kỳ hạn 1 năm bắt đầu sau 1 năm (1y1y) gần nhất với:', choices: ['6,02%', '3,75%', '1,50%'], answer: 0, explain: 'f1,1 = 1,045^2/1,03 - 1 = 6,02%. Lựa chọn 3,75% là trung bình cộng, lựa chọn 1,50% là hiệu số của hai spot rate.' },
    { q: 'S2 = 3%, S3 = 4,5%. Forward rate f2,1 (2y1y) gần nhất với:', choices: ['3,75%', '7,57%', '1,50%'], answer: 1, explain: 'f2,1 = 1,045^3/1,03^2 - 1 = 7,57%. Xấp xỉ nhanh 3 x 4,5% - 2 x 3% = 7,5% để kiểm tra. Lựa chọn 3,75% là trung bình cộng, lựa chọn 1,50% là hiệu số.' },
    { q: 'S1 = 2%, f1,1 = 4%, f2,1 = 7%. Giá trái phiếu zero-coupon 3 năm, mệnh giá 100, gần nhất với:', choices: ['81,63', '88,90', '88,10'], answer: 2, explain: 'PV = 100/(1,02 x 1,04 x 1,07) = 88,10. Lựa chọn 81,63 chiết khấu cả 3 năm bằng forward cuối 7%. Lựa chọn 88,90 chiết khấu bằng 4%/năm (lấy forward giữa làm spot 3 năm).' },
    { q: 'Khi đường spot dốc lên, với cùng kỳ hạn dài hơn 1 năm, thứ tự đúng là:', choices: ['par > spot > forward', 'spot > forward > par', 'forward > spot > par'], answer: 2, explain: 'Spot là trung bình nhân của các forward nên forward cận biên phải cao hơn spot thì spot mới tăng; par là trung bình có trọng số của spot nên thấp hơn spot cùng kỳ hạn. Thứ tự par > spot > forward là thứ tự của đường dốc xuống.' },
    { q: 'S1 = 2%, S2 = 4%. Par rate 2 năm gần nhất với:', choices: ['3,96%', '4,00%', '3,00%'], answer: 0, explain: 'Par = (1 - 1/1,04^2)/(1/1,02 + 1/1,04^2) = 0,075444/1,904948 = 3,96%. Lựa chọn 4,00% nhầm par với spot; lựa chọn 3,00% là trung bình cộng của hai spot. Đường dốc lên nên par thấp hơn spot một chút.' },
    { q: 'Spot rate báo theo năm, ghép lãi nửa năm: 0,5 năm 3,0%; 1 năm 3,5%. Trái phiếu 1 năm, coupon 4%/năm trả nửa năm, mệnh giá 100. Giá gần nhất với:', choices: ['97,16', '100,49', '100,00'], answer: 1, explain: 'PV = 2/1,015 + 102/1,0175^2 = 1,9704 + 98,5216 = 100,49. Lựa chọn 97,16 quên chia rate cho 2 (dùng 3% và 3,5% cho mỗi nửa năm). Lựa chọn 100,00 giả định coupon bằng lãi suất nên giá par, nhưng coupon 4% cao hơn cả hai spot rate.' },
    { q: 'Đường spot dốc lên. Một trái phiếu 10 năm coupon cao và một trái phiếu zero-coupon 10 năm cùng tổ chức phát hành. Phát biểu nào đúng?', choices: ['YTM của trái phiếu coupon thấp hơn spot rate 10 năm', 'YTM của trái phiếu coupon bằng spot rate 10 năm', 'YTM của trái phiếu coupon cao hơn spot rate 10 năm'], answer: 0, explain: 'YTM là trung bình có trọng số của các spot rate; trái phiếu coupon có một phần dòng tiền ở kỳ hạn ngắn (spot thấp hơn), nên YTM thấp hơn spot 10 năm. Chỉ zero-coupon mới có YTM = spot rate cùng kỳ hạn.' },
    { q: 'S1 = 3%, S3 = 5%. Lãi suất kỳ hạn 2 năm bắt đầu sau 1 năm (f1,2, tính theo năm) gần nhất với:', choices: ['4,00%', '6,01%', '12,39%'], answer: 1, explain: '(1 + f1,2)^2 = 1,05^3/1,03 = 1,12391, f1,2 = 6,01%. Lựa chọn 12,39% quên lấy căn bậc 2 (đó là lợi suất cả 2 năm). Lựa chọn 4,00% là trung bình cộng của hai spot.' },
    { q: 'Spot rate 3 năm (trả lãi năm) là 4,2%. Hệ số chiết khấu (discount factor) cho dòng tiền nhận sau 3 năm gần nhất với:', choices: ['0,8881', '0,8839', '0,9597'], answer: 1, explain: 'DF3 = 1/(1 + S3)^3 = 1/1,042^3 = 0,8839. Lựa chọn 0,8881 dùng lãi đơn 1/(1 + 3 x 0,042). Lựa chọn 0,9597 quên lũy thừa 3, chỉ chiết khấu một năm.' },
    { q: 'Spot rate (trả lãi năm): S1 = 1,5%, S2 = 2,5%, S3 = 3,5%. Giá trái phiếu 3 năm, coupon 3% trả hằng năm, mệnh giá 100, gần nhất với:', choices: ['101,43', '98,60', '98,71'], answer: 2, explain: 'PV = 3/1,015 + 3/1,025^2 + 103/1,035^3 = 2,9557 + 2,8554 + 92,9001 = 98,71. Lựa chọn 98,60 chiết khấu cả ba dòng tiền bằng S3 = 3,5%. Lựa chọn 101,43 chiết khấu cả ba bằng spot rate trung bình 2,5%.' },
    { q: 'Spot rate (trả lãi năm): S1 = 3%, S2 = 4%, S3 = 5%. Trái phiếu 3 năm, coupon 7% trả hằng năm được định giá bằng các spot rate này ở 105,70. YTM của trái phiếu gần nhất với:', choices: ['5,00%', '4,00%', '4,91%'], answer: 2, explain: 'Giải N = 3, PV = -105,70, PMT = 7, FV = 100, được I/Y = 4,91%. YTM là trung bình có trọng số của các spot rate, nghiêng về S3 vì phần lớn giá trị nằm ở năm 3, nhưng thấp hơn S3 do đường spot dốc lên. Lựa chọn 5,00% nhầm YTM với spot rate 3 năm. Lựa chọn 4,00% là trung bình cộng không trọng số.' },
    { q: 'Spot rate (trả lãi năm): S1 = 1%, S2 = 2%, S3 = 3%. Par rate 3 năm gần nhất với:', choices: ['2,96%', '2,00%', '3,00%'], answer: 0, explain: 'DF1 = 0,990099, DF2 = 0,961169, DF3 = 0,915142. Par = (1 - 0,915142)/(0,990099 + 0,961169 + 0,915142) = 0,084858/2,866409 = 2,96%. Lựa chọn 3,00% nhầm par rate với spot rate. Lựa chọn 2,00% là trung bình cộng của ba spot rate. Đường dốc lên nên par thấp hơn spot cùng kỳ hạn một chút.' },
    { q: 'Par rate (trả lãi năm): 1 năm 2,5%, 2 năm 3,0%, 3 năm 3,5%. Spot rate 3 năm bootstrap được gần nhất với:', choices: ['3,50%', '3,52%', '3,01%'], answer: 1, explain: 'S1 = 2,5%. Bước 2: 100 = 3/1,025 + 103/(1 + S2)^2, được S2 = 3,0075%. Bước 3: 100 = 3,5/1,025 + 3,5/1,030075^2 + 103,5/(1 + S3)^3, được (1 + S3)^3 = 103,5/(100 - 3,4146 - 3,2986) = 1,109482, S3 = 3,52%. Lựa chọn 3,50% nhầm spot với par. Lựa chọn 3,01% là S2, dừng lại ở bước 2.' },
    { q: 'Spot rate 1 năm là 1%, forward rate f1,1 = 4% và f2,1 = 8%. Spot rate 3 năm gần nhất với:', choices: ['8,00%', '13,44%', '4,29%'], answer: 2, explain: '(1 + S3)^3 = 1,01 x 1,04 x 1,08 = 1,134432, S3 = 1,134432^(1/3) - 1 = 4,29%. Spot rate là trung bình nhân của chuỗi forward 1 năm. Lựa chọn 13,44% quên lấy căn bậc 3 (đó là lợi nhuận cả 3 năm). Lựa chọn 8,00% lấy forward cuối cùng làm spot rate.' },
    { q: 'S2 = 3%, S4 = 4% (trả lãi năm). Forward rate 2 năm bắt đầu sau 2 năm (f2,2, tính theo năm) gần nhất với:', choices: ['5,01%', '10,27%', '3,50%'], answer: 0, explain: '(1 + f2,2)^2 = 1,04^4/1,03^2 = 1,102704, f2,2 = 1,102704^(1/2) - 1 = 5,01%. Lựa chọn 10,27% quên lấy căn bậc 2 (đó là lợi suất cả 2 năm). Lựa chọn 3,50% là trung bình cộng của hai spot rate.' },
    { q: 'Forward rate 1 năm: f0,1 = 3%, f1,1 = 4%, f2,1 = 5%. Giá trái phiếu 3 năm, coupon 4% trả hằng năm, mệnh giá 100, gần nhất với:', choices: ['100,00', '100,08', '97,42'], answer: 1, explain: 'PV = 4/1,03 + 4/(1,03 x 1,04) + 104/(1,03 x 1,04 x 1,05) = 3,8835 + 3,7341 + 92,4642 = 100,08. Lựa chọn 97,42 chiết khấu mỗi dòng tiền bằng forward của năm đó lũy thừa t (4/1,03 + 4/1,04^2 + 104/1,05^3), sai vì phải nhân chuỗi các forward. Lựa chọn 100,00 chiết khấu cả ba dòng tiền bằng 4%, mức forward ở giữa.' },
    { q: 'Nếu đường spot hoàn toàn bằng phẳng, quan hệ giữa spot rate, par rate và forward rate ở mọi kỳ hạn là:', choices: ['forward > spot > par', 'par > spot > forward', 'forward = spot = par'], answer: 2, explain: 'Đường phẳng nghĩa là mọi kỳ hạn cùng một lãi suất: mọi forward rate bằng spot rate, và trái phiếu par có coupon đúng bằng mức đó. Thứ tự forward > spot > par chỉ đúng khi đường spot dốc lên; par > spot > forward là trường hợp dốc xuống.' },
    { q: 'Đường spot dốc xuống (inverted). So với spot rate 5 năm, par rate 5 năm nhiều khả năng:', choices: ['cao hơn', 'bằng nhau', 'thấp hơn'], answer: 0, explain: 'Par rate là trung bình có trọng số của các spot rate từ 1 đến 5 năm. Khi đường dốc xuống, các spot ngắn hạn cao hơn spot 5 năm, kéo par lên trên spot 5 năm (thứ tự: par > spot > forward). "Thấp hơn" là kết quả của đường dốc lên. "Bằng nhau" chỉ đúng khi đường phẳng hoặc ở kỳ hạn 1 năm.' },
    { q: 'Spot rate báo theo năm, ghép lãi nửa năm: 0,5 năm 4,0%; 1 năm 4,4%. Forward rate 6 tháng bắt đầu sau 6 tháng, báo theo năm (ghép lãi nửa năm), gần nhất với:', choices: ['2,40%', '4,80%', '4,20%'], answer: 1, explain: 'Lãi suất mỗi nửa năm: 2,0% và 2,2%. Forward nửa năm = 1,022^2/1,02 - 1 = 2,4004%; nhân 2 được 4,80%/năm. Lựa chọn 2,40% là forward cho nửa năm, quên năm hóa. Lựa chọn 4,20% là trung bình cộng của hai spot rate.' },
    { q: 'Hôm nay forward rate 1 năm bắt đầu sau 1 năm (1y1y) là 5%. Một nhà đầu tư có thời hạn 2 năm tin rằng lãi suất 1 năm sau 1 năm nữa sẽ chỉ là 4%. Để tối đa lợi nhuận, nhà đầu tư nhiều khả năng sẽ:', choices: ['không phân biệt hai chiến lược', 'mua trái phiếu 1 năm rồi tái đầu tư sau 1 năm', 'mua trái phiếu zero-coupon 2 năm'], answer: 2, explain: 'Forward rate là mức hòa vốn giữa hai chiến lược. Trái phiếu 2 năm khóa được lợi suất ngầm định 5% cho năm thứ hai, trong khi nhà đầu tư kỳ vọng tái đầu tư chỉ được 4%. Vì vậy trái phiếu dài hạn tốt hơn. Chiến lược "mua 1 năm rồi tái đầu tư" chỉ hợp lý khi kỳ vọng lãi suất tương lai cao hơn forward. "Không phân biệt" chỉ khi kỳ vọng đúng bằng forward.' },
    { q: 'Trên thực tế, đường par của trái phiếu chính phủ thường được xây dựng từ:', choices: ['các trái phiếu mới phát hành (on-the-run), giao dịch gần mệnh giá', 'các trái phiếu doanh nghiệp có xếp hạng cao nhất', 'các forward rate do ngân hàng trung ương công bố'], answer: 0, explain: 'Trái phiếu chính phủ on-the-run được phát hành gần mệnh giá và có thanh khoản cao, nên lợi suất của chúng là quan sát trực tiếp của par rate; spot rate sau đó được bootstrap từ đường par. Trái phiếu doanh nghiệp có rủi ro tín dụng nên không dùng làm đường chuẩn. Forward rate là kết quả suy ra từ đường spot, không phải dữ liệu đầu vào.' },
    { q: 'Một trái phiếu chính phủ coupon được giao dịch ở giá thấp hơn tổng PV các dòng tiền chiết khấu bằng spot rate tương ứng. Theo lập luận không chênh lệch giá, nhà kinh doanh có thể:', choices: ['không làm gì, vì giá trái phiếu coupon được định bằng YTM chứ không bằng spot rate', 'mua trái phiếu coupon và bán các trái phiếu zero-coupon tương ứng từng dòng tiền', 'bán trái phiếu coupon và mua các trái phiếu zero-coupon tương ứng'], answer: 1, explain: 'Một trái phiếu coupon là rổ các trái phiếu zero-coupon. Nếu nó rẻ hơn tổng giá trị các zero, mua trái phiếu (tách dòng tiền) và bán các zero tương ứng sẽ có lãi phi rủi ro; chính áp lực này đưa giá về tổng PV theo spot. Phương án "bán trái phiếu coupon" làm ngược chiều. Phương án "không làm gì" sai: YTM chỉ là kết quả suy ra từ giá, không ngăn được chênh lệch giá.' },
    { q: 'Par rate (trả lãi năm): 1 năm 6%, 2 năm 5%. Spot rate 2 năm bootstrap được gần nhất với:', choices: ['5,00%', '3,96%', '4,98%'], answer: 2, explain: '100 = 5/1,06 + 105/(1 + S2)^2, suy ra (1 + S2)^2 = 105/(100 - 4,7170) = 1,101980, S2 = 4,98%. Đường par dốc xuống nên spot thấp hơn par cùng kỳ hạn. Lựa chọn 5,00% nhầm spot với par. Lựa chọn 3,96% là forward f1,1 = 1,101980/1,06 - 1.' },
    { q: 'Hệ số chiết khấu: DF1 = 0,97, DF2 = 0,94, DF3 = 0,90. Par rate 3 năm gần nhất với:', choices: ['3,56%', '3,70%', '3,33%'], answer: 0, explain: 'Par = (1 - DF3)/(DF1 + DF2 + DF3) = 0,10/2,81 = 3,56%. Lựa chọn 3,33% chia 0,10 cho 3 (số năm) thay vì tổng hệ số chiết khấu. Lựa chọn 3,70% là lợi nhuận năm theo lãi đơn của zero-coupon 3 năm, (1/0,90 - 1)/3, không phải par rate.' },
    { q: 'Spot rate (trả lãi năm): 2%, 3%, 4%, 4,5%, 5% cho các kỳ hạn 1 đến 5 năm. Hai trái phiếu 5 năm cùng tổ chức phát hành, một có coupon 2%, một có coupon 8%. Phát biểu nào đúng?', choices: ['Trái phiếu coupon 8% có YTM cao hơn', 'Trái phiếu coupon 2% có YTM cao hơn', 'Hai trái phiếu có cùng YTM vì cùng kỳ hạn và cùng đường spot'], answer: 1, explain: 'YTM là trung bình có trọng số của spot rate. Coupon cao đặt nhiều trọng số hơn vào các kỳ hạn ngắn (spot thấp), nên YTM thấp hơn: tính ra YTM của trái phiếu 2% là 4,95%, của trái phiếu 8% là 4,82% (coupon effect). Phương án "cùng YTM" bỏ qua khác biệt trọng số dòng tiền.' },
    { q: 'Trái phiếu zero-coupon 4 năm, mệnh giá 100, có giá 85,00. Spot rate 4 năm (trả lãi năm) gần nhất với:', choices: ['3,75%', '4,41%', '4,15%'], answer: 2, explain: 'S4 = (100/85)^(1/4) - 1 = 4,15%. Lựa chọn 4,41% lấy lợi nhuận 15/85 chia 4 (lãi đơn, bỏ qua ghép lãi). Lựa chọn 3,75% lấy 15/100 chia 4, vừa bỏ qua ghép lãi vừa chia cho mệnh giá.' },
    { q: 'Par rate (trả lãi năm): 1 năm 1%, 2 năm 4%. Forward rate 1 năm bắt đầu sau 1 năm (f1,1) gần nhất với:', choices: ['7,22%', '7,09%', '4,06%'], answer: 0, explain: 'Bootstrap trước: 100 = 4/1,01 + 104/(1 + S2)^2, (1 + S2)^2 = 104/96,0396 = 1,082887, S2 = 4,06%. Sau đó f1,1 = 1,082887/1,01 - 1 = 7,22%. Lựa chọn 7,09% dùng thẳng par 4% làm spot 2 năm (1,04^2/1,01 - 1). Lựa chọn 4,06% là spot rate S2, chưa tính forward.' },
    { q: 'Một trái phiếu 4 năm được định giá bằng các spot rate hiện tại ở 97,35. Nếu định giá lại cùng trái phiếu bằng chuỗi forward rate 1 năm ngầm định từ chính các spot rate đó, giá sẽ:', choices: ['thấp hơn 97,35 vì forward rate cao hơn spot rate', 'bằng 97,35', 'cao hơn 97,35 nếu đường spot dốc lên'], answer: 1, explain: 'Spot và forward ngầm định chỉ là hai cách viết của cùng một bộ hệ số chiết khấu: (1 + S_t)^t = (1 + S1)(1 + f1,1)...(1 + f_t-1,1). Vì vậy giá phải đúng bằng 97,35, bất kể hình dạng đường cong. Hai phương án "cao hơn" và "thấp hơn" bỏ qua việc forward rate được nhân chuỗi, không dùng riêng lẻ.' },
  ];

  // Widget: đường spot, par và forward 1 năm theo hai điểm neo spot 1 năm và 10 năm.
  const widgets = {
    curves(el) {
      el.innerHTML = `
        <div class="w-row"><label>Spot 1 năm: <b data-o="a">2,00%</b><input type="range" min="0.5" max="8" step="0.25" value="2" data-i="a"></label>
        <label>Spot 10 năm: <b data-o="b">5,00%</b><input type="range" min="0.5" max="8" step="0.25" value="5" data-i="b"></label>
        <label>Độ cong (bướu): <b data-o="h">0,00%</b><input type="range" min="-2" max="2" step="0.25" value="0" data-i="h"></label></div>
        <div class="w-out"><div data-o="svg"></div><div class="w-note" data-o="note"></div></div>`;
      const q = s => el.querySelector(s);
      const f2 = x => x.toFixed(2).replace('.', ',');
      const upd = () => {
        const a = +q('[data-i="a"]').value, b = +q('[data-i="b"]').value, h = +q('[data-i="h"]').value;
        const S = [], P = [], F = [];
        let sumDf = 0, prev = 1;
        for (let n = 1; n <= 10; n++) {
          const g = (1 - Math.exp(-(n - 1) / 3)) / (1 - Math.exp(-3));
          const s = (a + (b - a) * g + h * Math.sin((Math.PI * (n - 1)) / 9)) / 100;
          const df = 1 / (1 + s) ** n;
          sumDf += df;
          S.push(s * 100); P.push(((1 - df) / sumDf) * 100); F.push((prev / df - 1) * 100);
          prev = df;
        }
        const all = S.concat(P, F), lo = Math.floor(Math.min(...all) - 0.5), hi = Math.ceil(Math.max(...all) + 0.5);
        const W = 560, H = 250, l = 50, r = 540, tp = 15, bt = 210;
        const xs = n => l + ((n - 1) / 9) * (r - l), ys = v => bt - ((v - lo) / (hi - lo)) * (bt - tp);
        const line = (arr, cls) => `<polyline points="${arr.map((v, i) => `${xs(i + 1).toFixed(1)},${ys(v).toFixed(1)}`).join(' ')}" class="${cls}" style="fill:none"/>`;
        let s = `<svg viewBox="0 0 ${W} ${H}" class="sv" style="max-height:none;max-width:620px" role="img" aria-label="Đường spot, par và forward">`;
        const step = hi - lo > 6 ? 2 : 1;
        for (let v = lo; v <= hi; v += step) s += `<line x1="${l}" y1="${ys(v)}" x2="${r}" y2="${ys(v)}" class="sv-grid"/><text x="${l - 8}" y="${ys(v) + 5}" class="sv-muted" text-anchor="end">${v}%</text>`;
        for (let n = 1; n <= 10; n++) s += `<text x="${xs(n)}" y="${bt + 20}" class="sv-muted">${n}</text>`;
        s += `<text x="${(l + r) / 2}" y="${H - 4}" class="sv-muted">Kỳ hạn (năm)</text>`;
        s += line(F, 'sv-up') + line(S, 'sv-curve') + line(P, 'sv-pv');
        s += `<text x="${l + 10}" y="${tp + 12}" class="sv-txt sv-t-up" text-anchor="start">forward 1 năm</text><text x="${l + 160}" y="${tp + 12}" class="sv-txt" text-anchor="start">spot</text><text x="${l + 230}" y="${tp + 12}" class="sv-txt sv-t-pv" text-anchor="start">par</text>`;
        q('[data-o="svg"]').innerHTML = `${s}</svg>`;
        q('[data-o="a"]').textContent = `${f2(a)}%`;
        q('[data-o="b"]').textContent = `${f2(b)}%`;
        q('[data-o="h"]').textContent = `${f2(h)}%`;
        q('[data-o="note"]').textContent = `Kỳ hạn 10 năm: forward ${f2(F[9])}%, spot ${f2(S[9])}%, par ${f2(P[9])}%. ` + (Math.abs(b - a) < 1e-9 && h === 0 ? 'Đường phẳng: ba đường trùng nhau.'
          : 'Ở đoạn spot đi lên, forward nằm trên spot và par nằm dưới spot; ở đoạn spot đi xuống thì ngược lại.');
      };
      el.addEventListener('input', upd);
      upd();
    },
  };

  window.LESSONS['FI-09'] = {
    moduleId: 'FI-09',
    calculator: 'BA II Plus',
    warmup: [
      'Ôn FI-07/FI-08: YTM của một trái phiếu là gì? Giả định gì về lãi suất tái đầu tư?',
      'Ôn QM-04: với S1 = 2% và S2 = 3%, f1,1 bằng bao nhiêu? Vì sao không phải 2,5%?',
      'Đoán trước: trái phiếu coupon 10 năm và zero-coupon 10 năm, cái nào có YTM gần spot rate 10 năm hơn?',
    ],
    sections,
    glossary,
    practice,
    widgets,
    slides: [],
    wrapup: [
      'Viết lại 3 công thức: giá bằng spot, par rate từ spot, forward từ spot.',
      'Đường spot dốc xuống thì thứ tự forward, spot, par ra sao? Giải thích bằng lời của bạn.',
      'Tự đặt 3 spot rate bất kỳ, tính par và forward bằng máy, rồi kiểm tra quy tắc thứ tự.',
    ],
  };
}());
