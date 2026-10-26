// Bài giảng DE-05 - Pricing and Valuation of Forward Contracts and for an Underlying with Varying Maturities (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t, frac, keys, timeline } = window.CFAH;

  const sections = [
    {
      title: '1. Bức tranh lớn',
      minutes: 4,
      html: `
<p>DE-04 đã trả lời câu hỏi "giá kỳ hạn F<sub>0</sub>(T) bằng bao nhiêu?". Module này trả lời hai câu hỏi tiếp theo:</p>
<ol>
<li>Sau khi ký, hợp đồng kỳ hạn <b>đáng giá bao nhiêu</b> với mỗi bên, tại lúc ký, trong kỳ hạn và khi đáo hạn?</li>
<li>Với tài sản cơ sở là <b>lãi suất</b> (có nhiều kỳ hạn khác nhau), giá kỳ hạn chính là <b>lãi suất kỳ hạn (forward rate)</b>. Tính nó thế nào và dùng để làm gì (FRA)?</li>
</ol>
<div class="key">Ý quan trọng nhất của module: <b>giá (price)</b> là mức F<sub>0</sub>(T) chốt trong hợp đồng và <b>không đổi</b>; <b>giá trị (value)</b> là số tiền hợp đồng đáng giá hôm nay, bắt đầu từ 0 và <b>thay đổi</b> theo giá tài sản cơ sở.</div>
<table class="plain"><thead><tr><th>LOS</th><th>Phần</th></tr></thead><tbody>
<tr><td>Giải thích cách xác định giá trị và giá của hợp đồng kỳ hạn tại lúc ký, trong thời hạn và khi đáo hạn</td><td>2, 3, 4</td></tr>
<tr><td>Giải thích cách xác định lãi suất kỳ hạn cho hợp đồng kỳ hạn lãi suất và mô tả công dụng của chúng</td><td>5, 6</td></tr>
</tbody></table>
<p class="tip">Ký hiệu dùng xuyên suốt: F<sub>0</sub>(T) là giá kỳ hạn chốt tại 0 cho ngày giao T; V<sub>t</sub>(T) là giá trị tại thời điểm t của hợp đồng đó (theo góc nhìn bên long).</p>`,
    },
    {
      title: '2. Giá và giá trị tại lúc ký',
      minutes: 8,
      html: `
<p>Khi hai bên ký hợp đồng kỳ hạn, không ai trả tiền cho ai. Nếu ${t('fprice', 'giá kỳ hạn (forward price)')} được đặt đúng mức không chênh lệch giá của DE-04:</p>
<div class="formula">F<sub>0</sub>(T) = (S<sub>0</sub> - PV<sub>0</sub>(I) + PV<sub>0</sub>(C)) × (1 + r)<sup>T</sup> &nbsp;&nbsp;⟹&nbsp;&nbsp; V<sub>0</sub>(T) = 0</div>
<p>thì ${t('fvalue', 'giá trị của hợp đồng (forward value)')} tại lúc ký bằng 0 với cả hai bên. Lý do: giá trị của long forward là "những gì sẽ nhận" trừ "những gì sẽ trả", quy về hôm nay:</p>
<div class="formula">V<sub>0</sub>(T) = S<sub>0</sub> - PV<sub>0</sub>(I) + PV<sub>0</sub>(C) - ${frac('F<sub>0</sub>(T)', '(1 + r)<sup>T</sup>')} = 0</div>
<p>Nói cách khác, <b>giá kỳ hạn chính là mức giá làm cho giá trị hợp đồng lúc ký bằng 0</b>. Đây là định nghĩa giá của mọi forward commitment (futures ở DE-06, swap ở DE-07 cũng vậy).</p>
<div class="example"><div class="ex-h">Ví dụ 2.1 - Giá kỳ hạn "lệch thị trường" (off-market)</div>
<p>Cổ phiếu không trả cổ tức giá 50, r = 4%, kỳ hạn 1 năm. (a) Giá kỳ hạn hợp lý? (b) Nếu hai bên thỏa thuận giá kỳ hạn chỉ là 50 thì giá trị hợp đồng với bên long ngay lúc ký là bao nhiêu?</p>
<details><summary>Xem lời giải</summary>
<p>(a) F<sub>0</sub>(1) = 50 × 1,04 = <b>52</b>, khi đó V<sub>0</sub> = 50 - 52/1,04 = 0.</p>
<p>(b) V<sub>0</sub> = 50 - 50/1,04 = 50 - 48,08 = <b>1,92</b>. Bên long được lợi ngay từ đầu (mua rẻ hơn mức hợp lý), nên bên long phải trả cho bên short 1,92 lúc ký thì hợp đồng mới công bằng.</p></details></div>
<p class="warn"><b>Bẫy:</b> "giá trị bằng 0" <b>không có nghĩa</b> giá kỳ hạn bằng 0 hay bằng S<sub>0</sub>. Giá F<sub>0</sub>(T) là một con số dương lớn (52); giá trị V<sub>0</sub> mới bằng 0.</p>`,
    },
    {
      title: '3. Giá trị trong thời hạn hợp đồng',
      minutes: 12,
      html: `
<p>Sau khi ký, F<sub>0</sub>(T) bị "đóng băng" trong hợp đồng, nhưng giá tài sản cơ sở thì thay đổi. Tại thời điểm t (0 &lt; t &lt; T), bên long vẫn sẽ nhận tài sản tại T và trả F<sub>0</sub>(T). Quy cả hai về thời điểm t:</p>
<div class="formula">V<sub>t</sub>(T) = S<sub>t</sub> - PV<sub>t</sub>(I) + PV<sub>t</sub>(C) - ${frac('F<sub>0</sub>(T)', '(1 + r)<sup>T - t</sup>')}</div>
<p>Không có carry thì gọn hơn: V<sub>t</sub>(T) = S<sub>t</sub> - F<sub>0</sub>(T)/(1 + r)<sup>T - t</sup>. Bên short có giá trị đúng bằng <b>-V<sub>t</sub>(T)</b> (trò chơi tổng bằng 0).</p>
${timeline(4, [{ t: 0, label: 'Ký: F0(T), V = 0', up: true }, { t: 3, label: 'Định giá: St', up: true, cls: 'pv' }, { t: 4, label: 'Trả F0(T), nhận tài sản' }], 'Tại t, chiết khấu F0(T) về t trong (T - t) năm còn lại rồi so với St.')}
<div class="example"><div class="ex-h">Ví dụ 3.1 - Định giá forward sau 9 tháng</div>
<p>Một nhà đầu tư long forward 1 năm với giá 35 trên tài sản không có carry, r = 3%. Sau 9 tháng, giá giao ngay là 36. Giá trị hợp đồng với bên long?</p>
<details><summary>Xem lời giải</summary>
<p>Thời gian còn lại T - t = 0,25 năm. PV của giá kỳ hạn: 35 / 1,03<sup>0,25</sup> = 34,7423.</p>
<p>V<sub>0,75</sub> = 36 - 34,7423 = <b>1,26</b> cho bên long; bên short là <b>-1,26</b>.</p>
${keys([['Chiết khấu F0 về t (chế độ AOS)', '36 [-] 35 [÷] 1.03 [y^x] 0.25 [=]', '1.2577']])}
<p>Lỗi thường gặp: lấy 36 - 35 = 1 (quên chiết khấu), hoặc chiết khấu cả 1 năm thay vì 0,25 năm.</p></details></div>
<div class="example"><div class="ex-h">Ví dụ 3.2 - Có cổ tức (nối tiếp DE-04)</div>
<p>Ở DE-04 (Ví dụ 6.1): cổ phiếu giá 60, cổ tức 1,50 trả sau 3 tháng, r = 4%, giá kỳ hạn 6 tháng F<sub>0</sub> = 59,6735. Sau 2 tháng, giá cổ phiếu là 62 và cổ tức chưa trả (còn 1 tháng). Giá trị forward với bên long?</p>
<details><summary>Xem lời giải</summary>
<p>PV<sub>t</sub>(I) = 1,50 / 1,04<sup>1/12</sup> = 1,4951. PV của F<sub>0</sub>: 59,6735 / 1,04<sup>4/12</sup> = 58,8984.</p>
<p>V<sub>t</sub> = 62 - 1,4951 - 58,8984 = <b>1,61</b>.</p>
<p><b>Cách 2 - hợp đồng bù trừ:</b> giá kỳ hạn mới tại t cho cùng ngày đáo hạn là F<sub>t</sub>(T) = (62 - 1,4951) × 1,04<sup>4/12</sup> = 61,3011. Bên long có thể short một forward mới ở 61,3011 để khóa lời 61,3011 - 59,6735 = 1,6276 tại T, PV về t: 1,6276 / 1,04<sup>4/12</sup> = <b>1,61</b>. Hai cách cho cùng kết quả.</p></details></div>
<div class="formula">V<sub>t</sub>(T) = ${frac('F<sub>t</sub>(T) - F<sub>0</sub>(T)', '(1 + r)<sup>T - t</sup>')}</div>
<p class="tip">Công thức "hợp đồng bù trừ" ở trên dùng được cho <b>mọi</b> loại forward (cổ phiếu, hàng hóa, ngoại tệ, lãi suất): giá trị = PV của chênh lệch giữa giá kỳ hạn hiện hành và giá đã chốt.</p>
<div class="widget" data-widget="forwardValue"></div>`,
    },
    {
      title: '4. Giá trị khi đáo hạn',
      minutes: 5,
      html: `
<p>Tại T không còn gì để chiết khấu, giá trị của hợp đồng chính là payoff đã học ở DE-02:</p>
<div class="formula">V<sub>T</sub>(T) = S<sub>T</sub> - F<sub>0</sub>(T) &nbsp;&nbsp; (long) &nbsp;&nbsp;&nbsp;&nbsp; -V<sub>T</sub>(T) = F<sub>0</sub>(T) - S<sub>T</sub> &nbsp;&nbsp; (short)</div>
<div class="example"><div class="ex-h">Ví dụ 4.1</div>
<p>Vẫn hợp đồng F<sub>0</sub> = 59,6735 ở Ví dụ 3.2. Khi đáo hạn, giá cổ phiếu là 58. Giá trị với mỗi bên?</p>
<details><summary>Xem lời giải</summary><p>Long: 58 - 59,6735 = <b>-1,67</b>; short: <b>+1,67</b>. Dù hợp đồng có giá trị dương 1,61 ở tháng thứ 2, bên long vẫn có thể lỗ khi đáo hạn: giá trị trong kỳ hạn chỉ là "lời/lỗ chưa thực hiện".</p></details></div>
<table class="plain"><thead><tr><th>Thời điểm</th><th>Giá F<sub>0</sub>(T)</th><th>Giá trị bên long</th></tr></thead><tbody>
<tr><td>t = 0 (ký)</td><td>Xác định bằng cost of carry</td><td>0</td></tr>
<tr><td>0 &lt; t &lt; T</td><td>Không đổi</td><td>S<sub>t</sub> - PV<sub>t</sub>(I) + PV<sub>t</sub>(C) - F<sub>0</sub>(T)/(1 + r)<sup>T - t</sup></td></tr>
<tr><td>t = T (đáo hạn)</td><td>Không đổi</td><td>S<sub>T</sub> - F<sub>0</sub>(T)</td></tr>
</tbody></table>
<p class="warn"><b>Bẫy:</b> câu hỏi "khi điều kiện thị trường thay đổi, cái gì biến động?". Với hợp đồng <b>đã ký</b>: chỉ <b>giá trị</b> biến động, giá chốt không đổi. Còn giá kỳ hạn của hợp đồng <b>mới</b> ký hôm nay (F<sub>t</sub>(T)) thì tất nhiên khác F<sub>0</sub>(T).</p>`,
    },
    {
      title: '5. Lãi suất kỳ hạn ngầm định (implied forward rates)',
      minutes: 10,
      html: `
<p>Với tài sản cơ sở là lãi suất, "giá giao ngay" là các ${t('spotrate', 'lãi suất giao ngay (spot rate, z)')} của trái phiếu zero-coupon ở các kỳ hạn khác nhau, còn "giá kỳ hạn" là ${t('ifr', 'lãi suất kỳ hạn ngầm định (implied forward rate)')}: lãi suất cho một khoản vay bắt đầu trong tương lai, chốt từ hôm nay.</p>
<p>Lập luận không chênh lệch giá: đầu tư 3 năm một lần phải cho cùng kết quả với đầu tư 2 năm rồi "chốt trước" lãi suất 1 năm tiếp theo.</p>
<div class="formula">(1 + z<sub>B</sub>)<sup>B</sup> = (1 + z<sub>A</sub>)<sup>A</sup> × (1 + F<sub>A,B-A</sub>)<sup>B - A</sup></div>
<p>F<sub>A,B-A</sub> là lãi suất kỳ hạn bắt đầu sau A năm, kéo dài B - A năm (curriculum viết IFR<sub>A,B-A</sub>). Ví dụ F<sub>2,1</sub> là lãi suất 1 năm, bắt đầu sau 2 năm.</p>
<div class="example"><div class="ex-h">Ví dụ 5.1 - Tính F<sub>2,1</sub></div>
<p>Trái phiếu zero-coupon 2 năm có z<sub>2</sub> = 2%, 3 năm có z<sub>3</sub> = 3%. Tính F<sub>2,1</sub>.</p>
<details><summary>Xem lời giải</summary>
<p>1 + F<sub>2,1</sub> = 1,03<sup>3</sup> / 1,02<sup>2</sup> = 1,092727 / 1,0404 = 1,050295 ⟹ F<sub>2,1</sub> = <b>5,03%</b>.</p>
${keys([['Tỷ số hai hệ số tích lũy', '1.03 [y^x] 3 [÷] 1.02 [x²] [=]', '1.0503'], ['Trừ 1 ra lãi suất', '[-] 1 [=]', '0.0503']])}
<p>Vì sao cao vậy? Lãi suất 3 năm 3%/năm là "trung bình" của 2 năm đầu ở 2% và năm thứ ba. Muốn trung bình kéo lên 3% thì năm thứ ba phải xấp xỉ 5%.</p></details></div>
<div class="example"><div class="ex-h">Ví dụ 5.2 - Kỳ hạn kéo dài nhiều năm</div>
<p>z<sub>1</sub> = 2%, z<sub>3</sub> = 3%. Tính F<sub>1,2</sub> (lãi suất 2 năm, bắt đầu sau 1 năm).</p>
<details><summary>Xem lời giải</summary><p>(1 + F<sub>1,2</sub>)<sup>2</sup> = 1,03<sup>3</sup> / 1,02 ⟹ F<sub>1,2</sub> = (1,071301)<sup>0,5</sup> - 1 = <b>3,50%</b>. Nhớ lấy căn bậc (B - A) vì đây là lãi suất năm.</p></details></div>
<h4>Công dụng của lãi suất kỳ hạn</h4>
<ul>
<li><b>Chốt chi phí vay hoặc lợi suất đầu tư</b> trong tương lai (qua FRA, phần 6).</li>
<li><b>Định giá trái phiếu</b>: chiết khấu bằng chuỗi lãi suất kỳ hạn cho cùng giá như chiết khấu bằng spot rate. Ví dụ trái phiếu 3 năm coupon 4% với z = 2%; 2,5%; 3% có giá 102,90 theo cả hai cách (F<sub>1,1</sub> = 3,00%, F<sub>2,1</sub> = 4,01%).</li>
<li><b>Mức hòa vốn</b>: F<sub>A,B-A</sub> là mức lãi suất tương lai mà tại đó nhà đầu tư thấy dài hạn hay ngắn hạn rồi tái đầu tư là như nhau. Nếu tin lãi suất tương lai thấp hơn forward rate, chọn kỳ hạn dài.</li>
<li><b>Định giá FRA, futures lãi suất và swap</b> (DE-06, DE-07).</li>
</ul>`,
    },
    {
      title: '6. Hợp đồng kỳ hạn lãi suất (FRA)',
      minutes: 12,
      html: `
<p>Một ${t('fra', 'hợp đồng kỳ hạn lãi suất (forward rate agreement, FRA)')} là forward OTC trên một lãi suất tham chiếu thả nổi (${t('mrr', 'MRR - market reference rate')}, ví dụ SOFR kỳ hạn). Hai bên không cho vay thật; họ chỉ thanh toán phần chênh lệch giữa MRR thực tế và lãi suất FRA chốt trước, tính trên giá trị danh nghĩa (notional).</p>
<table class="plain"><thead><tr><th>Bên</th><th>Tương đương</th><th>Lời khi</th><th>Ai dùng</th></tr></thead><tbody>
<tr><td>${t('longfra', 'Long FRA')}</td><td>Trả lãi cố định, nhận MRR</td><td>MRR tăng trên lãi suất FRA</td><td>Người sẽ <b>đi vay</b> sợ lãi suất tăng</td></tr>
<tr><td>Short FRA</td><td>Nhận lãi cố định, trả MRR</td><td>MRR giảm dưới lãi suất FRA</td><td>Người sẽ <b>cho vay/gửi tiền</b> sợ lãi suất giảm</td></tr>
</tbody></table>
<p>Cách gọi tên: FRA <b>3×9</b> bắt đầu sau 3 tháng, kết thúc sau 9 tháng, nên lãi suất cơ sở là MRR <b>6 tháng</b>. Ở thị trường tiền tệ, lãi suất là lãi đơn theo năm; với kỳ hạn tính bằng phần năm (tháng/12, hoặc ngày/360):</p>
<div class="formula">(1 + r<sub>B</sub> × t<sub>B</sub>) = (1 + r<sub>A</sub> × t<sub>A</sub>) × (1 + F × (t<sub>B</sub> - t<sub>A</sub>))</div>
<div class="example"><div class="ex-h">Ví dụ 6.1 - Lãi suất FRA 3×9</div>
<p>MRR 3 tháng hiện là 1,0%/năm, MRR 9 tháng là 1,2%/năm. Tính lãi suất kỳ hạn 6 tháng bắt đầu sau 3 tháng.</p>
<details><summary>Xem lời giải</summary>
<p>1 + F × 0,5 = (1 + 0,012 × 0,75) / (1 + 0,010 × 0,25) = 1,009 / 1,0025 = 1,006484.</p>
<p>F = 0,006484 / 0,5 = <b>1,30%</b>/năm. Đây là lãi suất làm cho FRA 3×9 có giá trị 0 lúc ký.</p></details></div>
<div class="example"><div class="ex-h">Ví dụ 6.2 - Nam vay tiền cưới</div>
<p>Đầu tháng 1, Nam biết sẽ cần vay 100 triệu đồng từ cuối tháng 3 đến cuối tháng 9 (6 tháng). Nam ký FRA với ngân hàng để chốt lãi suất 6%/năm. (a) Nam là long hay short FRA? (b) Cuối tháng 3, lãi suất 6 tháng tăng lên 8%. Nam được/mất bao nhiêu và chi phí vay thực tế là bao nhiêu? (c) Nếu lãi suất giảm còn 5% thì sao?</p>
<details><summary>Xem lời giải</summary>
<p>(a) Nam sắp đi vay, sợ lãi suất <b>tăng</b> ⟹ <b>long FRA</b> (đây là FRA 3×9). Ngân hàng (bên cho vay) sợ lãi suất giảm, đứng short.</p>
<p>(b) Thanh toán FRA cho Nam: (8% - 6%) × 0,5 × 100.000.000 = <b>1.000.000 đồng</b> nếu trả vào cuối kỳ vay (cuối tháng 9). Phần lớn FRA thực tế thanh toán ngay đầu kỳ vay (cuối tháng 3), khi đó chiết khấu theo MRR: 1.000.000 / (1 + 0,08 × 0,5) = <b>961.538 đồng</b>.</p>
<p>Nam vay thật ở 8%: lãi 4.000.000; trừ 1.000.000 nhận từ FRA còn 3.000.000 = 6% × 0,5 × 100 triệu. Chi phí vay được <b>khóa ở 6%</b>.</p>
<p>(c) MRR = 5%: Nam trả ngân hàng (6% - 5%) × 0,5 × 100 triệu = 500.000 đồng. Lãi vay thật 2.500.000 + 500.000 = 3.000.000, vẫn là 6%. FRA loại bỏ cả rủi ro lẫn cơ hội.</p></details></div>
<div class="formula">Thanh toán cho long FRA (đầu kỳ vay) = ${frac('(MRR - lãi suất FRA) × t × Notional', '1 + MRR × t')}</div>
<p><b>Giá trị FRA trong kỳ hạn</b> theo đúng logic phần 3: lấy lãi suất FRA mới cho cùng giai đoạn vay, tính chênh lệch với lãi suất đã chốt × t × notional, rồi chiết khấu về hôm nay. Lãi suất FRA mới cao hơn ⟹ long FRA có giá trị dương.</p>
<p class="warn"><b>Bẫy:</b> (1) quên nhân t (0,5 cho 6 tháng); (2) nhầm chiều: người <b>đi vay</b> long FRA, giống "mua" lãi suất; (3) chiết khấu bằng lãi suất FRA thay vì MRR thực tế khi thanh toán đầu kỳ.</p>`,
    },
    {
      title: '7. Tóm tắt và bẫy thường gặp',
      minutes: 4,
      html: `
<table class="plain"><thead><tr><th>Chủ đề</th><th>Nhớ</th></tr></thead><tbody>
<tr><td>Giá và giá trị</td><td>Giá F<sub>0</sub>(T) chốt lúc ký, không đổi; giá trị V<sub>t</sub> bắt đầu từ 0 rồi biến động</td></tr>
<tr><td>Lúc ký</td><td>V<sub>0</sub> = 0 khi F<sub>0</sub>(T) đúng giá cost of carry; giá lệch thị trường thì một bên phải trả tiền</td></tr>
<tr><td>Trong kỳ hạn</td><td>V<sub>t</sub> = S<sub>t</sub> - PV<sub>t</sub>(I) + PV<sub>t</sub>(C) - F<sub>0</sub>(T)/(1 + r)<sup>T - t</sup>; hoặc PV của F<sub>t</sub>(T) - F<sub>0</sub>(T)</td></tr>
<tr><td>Đáo hạn</td><td>V<sub>T</sub> = S<sub>T</sub> - F<sub>0</sub>(T); short = âm của long</td></tr>
<tr><td>Implied forward rate</td><td>(1 + z<sub>B</sub>)<sup>B</sup> = (1 + z<sub>A</sub>)<sup>A</sup>(1 + F<sub>A,B-A</sub>)<sup>B - A</sup>; nhớ lấy căn bậc B - A</td></tr>
<tr><td>FRA</td><td>Long FRA = trả cố định, nhận MRR, dùng cho người đi vay; 3×9 nghĩa là MRR 6 tháng bắt đầu sau 3 tháng</td></tr>
<tr><td>Thanh toán FRA</td><td>(MRR - FRA) × t × notional; thanh toán đầu kỳ thì chia cho (1 + MRR × t)</td></tr>
</tbody></table>
<p>Tiếp theo: tab <b>Luyện tập</b> - 10 câu (rút ngẫu nhiên từ ngân hàng 30 câu, mỗi lần làm một bộ khác). DE-06 sẽ cho thấy futures khác forward ở chỗ giá trị được "trả bằng tiền" mỗi ngày.</p>`,
    },
  ];

  const glossary = {
    fprice: ['Forward price', 'Giá kỳ hạn', 'Mức giá chốt trong hợp đồng để giao nhận tại T; được chọn sao cho giá trị hợp đồng lúc ký bằng 0.'],
    fvalue: ['Forward value', 'Giá trị hợp đồng kỳ hạn', 'Số tiền hợp đồng đáng giá tại một thời điểm: PV của khoản sẽ nhận trừ PV của khoản sẽ trả.'],
    spotrate: ['Spot rate (zero rate)', 'Lãi suất giao ngay', 'Lợi suất của trái phiếu zero-coupon cho một kỳ hạn bắt đầu từ hôm nay.'],
    ifr: ['Implied forward rate', 'Lãi suất kỳ hạn ngầm định', 'Lãi suất cho một kỳ vay bắt đầu trong tương lai, suy ra từ các spot rate để không có chênh lệch giá.'],
    fra: ['Forward rate agreement (FRA)', 'Hợp đồng kỳ hạn lãi suất', 'Forward OTC thanh toán chênh lệch giữa lãi suất tham chiếu thực tế và lãi suất chốt trước, tính trên notional.'],
    mrr: ['Market reference rate (MRR)', 'Lãi suất tham chiếu thị trường', 'Lãi suất thả nổi dùng làm cơ sở cho FRA, futures lãi suất và swap (ví dụ SOFR).'],
    longfra: ['Long FRA', 'Bên mua FRA', 'Bên trả lãi suất cố định và nhận MRR; lời khi MRR tăng; dùng để phòng hộ cho khoản vay tương lai.'],
  };

  const practice = [
    { q: 'Một hợp đồng kỳ hạn được định giá hợp lý (không chênh lệch giá). Tại thời điểm ký, giá trị của hợp đồng đối với bên long là:', choices: ['Bằng 0', 'Bằng giá giao ngay S0', 'Bằng giá kỳ hạn F0(T)'], answer: 0, explain: 'Giá kỳ hạn được chọn đúng để giá trị lúc ký bằng 0, nên không bên nào trả tiền cho bên nào. Hai lựa chọn S0 và F0(T) nhầm giữa giá trị và giá.' },
    { q: 'Nhà đầu tư long forward 1 năm trên cổ phiếu không trả cổ tức với giá 80. r = 5%. Sau 6 tháng, giá cổ phiếu là 84. Giá trị hợp đồng với bên long gần nhất với:', choices: ['4,00', '5,93', '7,81'], answer: 1, explain: 'V = 84 - 80/1,05^0,5 = 84 - 78,07 = 5,93. Lựa chọn 4,00 quên chiết khấu giá kỳ hạn; lựa chọn 7,81 chiết khấu cả 1 năm thay vì 0,5 năm còn lại.' },
    { q: 'Nhà đầu tư short forward 1 năm trên cổ phiếu không trả cổ tức với giá 80. r = 5%. Sau 6 tháng, giá cổ phiếu là 84. Giá trị hợp đồng với bên short gần nhất với:', choices: ['+5,93', '-4,00', '-5,93'], answer: 2, explain: 'Forward là trò chơi tổng bằng 0: giá trị bên short = -(84 - 80/1,05^0,5) = -5,93. Lựa chọn +5,93 lấy nhầm dấu của bên long; lựa chọn -4,00 quên chiết khấu.' },
    { q: 'Một long forward có giá kỳ hạn 52. Khi đáo hạn, giá giao ngay của tài sản là 49. Giá trị hợp đồng với bên long tại đáo hạn là:', choices: ['+3,00', '-3,00', '-2,86'], answer: 1, explain: 'Tại đáo hạn V = ST - F0(T) = 49 - 52 = -3. Lựa chọn +3,00 nhầm dấu; lựa chọn -2,86 chiết khấu thêm 1 kỳ trong khi tại T không còn gì để chiết khấu.' },
    { q: 'Long forward 1 năm giá 41,00 trên cổ phiếu, r = 4%. Sau 3 tháng, giá cổ phiếu 42 và còn một khoản cổ tức 0,80 sẽ trả sau 3 tháng nữa. Giá trị hợp đồng với bên long gần nhất với:', choices: ['1,40', '2,19', '2,98'], answer: 0, explain: 'V = 42 - 0,80/1,04^0,25 - 41/1,04^0,75 = 42 - 0,79 - 39,81 = 1,40. Lựa chọn 2,19 bỏ qua cổ tức (cổ tức thuộc người giữ cổ phiếu, không thuộc bên long forward); lựa chọn 2,98 cộng cổ tức như thể đó là chi phí.' },
    { q: 'Spot rate 1 năm là 3% và 2 năm là 4% (ghép lãi năm). Lãi suất kỳ hạn 1 năm bắt đầu sau 1 năm (F1,1) gần nhất với:', choices: ['3,50%', '1,00%', '5,01%'], answer: 2, explain: '1 + F1,1 = 1,04^2/1,03 = 1,0501, F1,1 = 5,01%. Lựa chọn 3,50% lấy trung bình hai spot rate; lựa chọn 1,00% lấy hiệu hai spot rate.' },
    { q: 'Một FRA 3×9 có lãi suất cơ sở là:', choices: ['Lãi suất 6 tháng, bắt đầu sau 3 tháng', 'Lãi suất 9 tháng, bắt đầu sau 3 tháng', 'Lãi suất 3 tháng, bắt đầu sau 9 tháng'], answer: 0, explain: 'Số đầu là thời điểm bắt đầu (3 tháng), số sau là thời điểm kết thúc (9 tháng), nên kỳ vay dài 9 - 3 = 6 tháng.' },
    { q: 'Một công ty long FRA với lãi suất 3,0%/năm, notional 20 triệu USD, kỳ vay 6 tháng. Tại ngày xác định lãi suất, MRR 6 tháng là 3,6%. Nếu thanh toán vào cuối kỳ vay, công ty:', choices: ['Nhận 120.000 USD', 'Nhận 60.000 USD', 'Trả 60.000 USD'], answer: 1, explain: '(3,6% - 3,0%) × 0,5 × 20.000.000 = 60.000; MRR cao hơn lãi suất FRA nên bên long nhận tiền. Lựa chọn nhận 120.000 USD quên nhân 0,5; lựa chọn trả 60.000 USD nhầm chiều thanh toán.' },
    { q: 'Một công ty biết sẽ cần vay 50 triệu USD trong 6 tháng, bắt đầu sau 3 tháng, và lo lãi suất tăng. Giao dịch phòng hộ phù hợp nhất là:', choices: ['Short FRA 3×9', 'Long FRA 6×9', 'Long FRA 3×9'], answer: 2, explain: 'Người đi vay sợ lãi suất tăng nên long FRA (trả cố định, nhận MRR), và kỳ vay từ tháng 3 đến tháng 9 là FRA 3×9. Short FRA 3×9 ngược chiều; long FRA 6×9 sai kỳ hạn (kỳ vay chỉ 3 tháng, bắt đầu sau 6 tháng).' },
    { q: 'MRR 6 tháng là 2,0%/năm và MRR 12 tháng là 2,5%/năm (lãi đơn). Lãi suất FRA 6×12 (năm hóa) gần nhất với:', choices: ['2,97%', '1,49%', '2,25%'], answer: 0, explain: '1 + F × 0,5 = (1 + 0,025 × 1)/(1 + 0,02 × 0,5) = 1,014851, F = 0,014851/0,5 = 2,97%. Lựa chọn 1,49% quên năm hóa (chia 0,5); lựa chọn 2,25% lấy trung bình hai lãi suất.' },
    { q: "Cổ phiếu không trả cổ tức giá 70, r = 5%, kỳ hạn 1 năm. Hai bên thỏa thuận giá kỳ hạn là 70 (lệch khỏi mức không chênh lệch giá). Giá trị của hợp đồng với bên long ngay lúc ký gần nhất với:", choices: ["3,33", "0", "3,50"], answer: 0, explain: "V0 = S0 - F0(T)/(1 + r)^T = 70 - 70/1,05 = 3,33. Lựa chọn 0 chỉ đúng khi giá kỳ hạn bằng mức không chênh lệch giá (73,50). Lựa chọn 3,50 lấy 73,50 - 70 mà quên chiết khấu về hôm nay." },
    { q: "Nhà đầu tư long forward 1 năm trên tài sản không có lợi ích hay chi phí nắm giữ, giá kỳ hạn 120, r = 4%. Sau 3 tháng, giá giao ngay là 118. Giá trị hợp đồng với bên long gần nhất với:", choices: ["-2,00", "2,62", "1,48"], answer: 2, explain: "Thời gian còn lại 0,75 năm: V = 118 - 120/1,04^0,75 = 1,48. Lựa chọn -2,00 lấy 118 - 120, quên chiết khấu giá kỳ hạn. Lựa chọn 2,62 chiết khấu cả 1 năm thay vì 0,75 năm còn lại." },
    { q: "Nhà đầu tư short forward 6 tháng trên cổ phiếu không trả cổ tức, giá kỳ hạn 45, r = 6%. Sau 2 tháng, giá cổ phiếu là 43. Giá trị hợp đồng với bên short gần nhất với:", choices: ["+2,00", "+1,13", "-1,13"], answer: 1, explain: "Giá trị bên long = 43 - 45/1,06^(4/12) = -1,13; bên short là số đối: +1,13. Lựa chọn +2,00 lấy 45 - 43, quên chiết khấu. Lựa chọn -1,13 là giá trị của bên long." },
    { q: "Một nhà đầu tư long forward với giá kỳ hạn 200, còn 6 tháng đến đáo hạn. Giá kỳ hạn hiện hành cho hợp đồng mới cùng ngày đáo hạn là 206, r = 3%/năm. Giá trị hợp đồng với bên long gần nhất với:", choices: ["6,00", "5,91", "-5,91"], answer: 1, explain: "Theo cách hợp đồng bù trừ: V = (Ft(T) - F0(T))/(1 + r)^(T - t) = (206 - 200)/1,03^0,5 = 5,91. Lựa chọn 6,00 quên chiết khấu chênh lệch về hôm nay. Lựa chọn -5,91 đảo dấu: giá kỳ hạn mới cao hơn nên long có giá trị dương." },
    { q: "Trong suốt thời hạn của một hợp đồng kỳ hạn đã ký, khi giá tài sản cơ sở thay đổi thì:", choices: ["Giá trị hợp đồng thay đổi, còn giá kỳ hạn ghi trong hợp đồng giữ nguyên", "Giá kỳ hạn trong hợp đồng thay đổi mỗi ngày, còn giá trị luôn bằng 0", "Cả giá kỳ hạn và giá trị đều giữ nguyên đến khi đáo hạn"], answer: 0, explain: "Giá F0(T) bị chốt lúc ký; giá trị Vt bắt đầu từ 0 rồi biến động theo giá tài sản cơ sở. Lựa chọn \"giá kỳ hạn thay đổi, giá trị luôn bằng 0\" nhầm hợp đồng đã ký với hợp đồng mới ký hôm nay. Lựa chọn \"cả hai giữ nguyên\" bỏ qua việc giá trị thay đổi theo thị trường." },
    { q: "Một bên long forward trên hàng hóa với giá kỳ hạn 530, còn 6 tháng đến đáo hạn. Hiện giá giao ngay là 510, giá trị hiện tại của chi phí lưu kho còn lại đến đáo hạn là 6, r = 4%/năm. Giá trị hợp đồng với bên long gần nhất với:", choices: ["-9,71", "-15,71", "-3,71"], answer: 2, explain: "Vt = St + PVt(chi phí lưu kho) - F0(T)/(1 + r)^(T - t) = 510 + 6 - 530/1,04^0,5 = -3,71. Lựa chọn -9,71 bỏ qua chi phí lưu kho. Lựa chọn -15,71 trừ chi phí lưu kho như thể đó là lợi ích." },
    { q: "Một bên long forward trên cổ phiếu với giá kỳ hạn 101, còn 6 tháng đến đáo hạn, r = 5%/năm. Hiện giá cổ phiếu là 103, và cổ phiếu sẽ trả cổ tức 1,50 sau 2 tháng nữa. Giá trị hợp đồng với bên long gần nhất với:", choices: ["4,43", "0,50", "2,95"], answer: 2, explain: "PVt(I) = 1,50/1,05^(2/12) = 1,4879. Vt = 103 - 1,4879 - 101/1,05^0,5 = 2,95. Lựa chọn 4,43 bỏ qua cổ tức. Lựa chọn 0,50 lấy 103 - 1,50 - 101, quên chiết khấu." },
    { q: "Hai bên ký hợp đồng kỳ hạn với giá kỳ hạn THẤP hơn mức không chênh lệch giá. Để hợp đồng công bằng lúc ký:", choices: ["Bên short phải trả cho bên long một khoản bằng V0", "Bên long phải trả cho bên short một khoản bằng giá trị V0 của hợp đồng", "Không bên nào trả gì, vì hợp đồng kỳ hạn luôn có giá trị 0 lúc ký"], answer: 1, explain: "Giá kỳ hạn thấp nghĩa là bên long được mua rẻ hơn mức hợp lý, hợp đồng có giá trị dương với bên long, nên bên long phải trả V0 cho bên short. Lựa chọn \"bên short trả\" đảo chiều. Giá trị bằng 0 lúc ký chỉ đúng khi giá kỳ hạn bằng mức không chênh lệch giá." },
    { q: "Cổ phiếu không trả cổ tức giá 40, r = 6%, kỳ hạn 1 năm. Hai bên thỏa thuận giá kỳ hạn là 43. Giá trị hợp đồng với bên short ngay lúc ký gần nhất với:", choices: ["+0,57", "-0,57", "+0,60"], answer: 0, explain: "Giá không chênh lệch giá là 40 x 1,06 = 42,40 < 43, nên bên short được bán đắt. Giá trị bên short = 43/1,06 - 40 = +0,57. Lựa chọn -0,57 là giá trị của bên long. Lựa chọn +0,60 lấy 43 - 42,40, quên chiết khấu về hôm nay." },
    { q: "Lãi suất giao ngay 2 năm là 3,5% và 3 năm là 4,0% (ghép lãi năm). Lãi suất kỳ hạn 1 năm bắt đầu sau 2 năm (F2,1) gần nhất với:", choices: ["5,01%", "3,75%", "0,50%"], answer: 0, explain: "1 + F2,1 = 1,04^3/1,035^2, nên F2,1 = 5,01%. Lựa chọn 3,75% lấy trung bình hai lãi suất giao ngay. Lựa chọn 0,50% lấy hiệu hai lãi suất giao ngay." },
    { q: "Lãi suất giao ngay 1 năm là 2,5% và 3 năm là 3,5% (ghép lãi năm). Lãi suất kỳ hạn 2 năm bắt đầu sau 1 năm (F1,2, tính theo năm) gần nhất với:", choices: ["8,17%", "1,00%", "4,00%"], answer: 2, explain: "(1 + F1,2)^2 = 1,035^3/1,025, nên F1,2 = 4,00%/năm. Lựa chọn 8,17% quên lấy căn bậc hai, cho ra lãi suất tích lũy 2 năm chứ không phải lãi suất năm. Lựa chọn 1,00% lấy hiệu hai lãi suất giao ngay." },
    { q: "Lãi suất giao ngay 1 năm là 3%, và lãi suất kỳ hạn 1 năm bắt đầu sau 1 năm (F1,1) là 5% (ghép lãi năm). Lãi suất giao ngay 2 năm gần nhất với:", choices: ["8,15%", "4,00%", "5,00%"], answer: 1, explain: "(1 + z2)^2 = 1,03 x 1,05, nên z2 = 4,00%. Lựa chọn 8,15% là lãi suất tích lũy 2 năm (1,03 x 1,05 - 1), chưa quy về năm. Lựa chọn 5,00% nhầm lãi suất kỳ hạn với lãi suất giao ngay 2 năm." },
    { q: "Một công ty sẽ có tiền nhàn rỗi để gửi trong 3 tháng, bắt đầu sau 6 tháng nữa, và lo ngại lãi suất sẽ giảm. Cách phòng hộ phù hợp nhất là:", choices: ["Long một FRA 6x9", "Short một FRA 6x9", "Short một FRA 3x6"], answer: 1, explain: "Người sẽ cho vay/gửi tiền sợ lãi suất giảm nên đứng short FRA (nhận cố định, trả MRR); giai đoạn bắt đầu sau 6 tháng, kéo dài 3 tháng là FRA 6x9. Long FRA là phòng hộ cho người đi vay sợ lãi suất tăng. FRA 3x6 bao phủ sai giai đoạn (từ tháng 3 đến tháng 6)." },
    { q: "MRR 3 tháng là 1,8%/năm và MRR 12 tháng là 2,4%/năm (lãi đơn). Lãi suất FRA 3x12 (tính theo năm) gần nhất với:", choices: ["2,59%", "1,94%", "0,60%"], answer: 0, explain: "1 + F x 0,75 = (1 + 0,024 x 1)/(1 + 0,018 x 0,25), nên F x 0,75 = 1,94% và F = 2,59%/năm. Lựa chọn 1,94% là lãi suất cho cả kỳ 9 tháng, chưa quy về năm. Lựa chọn 0,60% lấy hiệu 2,4% - 1,8%." },
    { q: "Công ty long FRA với lãi suất 2,5%/năm, notional 30 triệu USD, kỳ vay 3 tháng. Vào ngày chốt lãi suất, MRR 3 tháng là 3,1%/năm. Nếu FRA thanh toán vào đầu kỳ vay, công ty:", choices: ["Nhận 45.000 USD", "Trả 44.654 USD", "Nhận 44.654 USD"], answer: 2, explain: "Chênh lệch tại cuối kỳ: (3,1% - 2,5%) x 0,25 x 30.000.000 = 45.000 USD; thanh toán đầu kỳ nên chiết khấu theo MRR: 45.000/(1 + 0,031 x 0,25) = 44.654 USD, long nhận vì MRR cao hơn lãi suất FRA. Lựa chọn 45.000 USD quên chiết khấu. Lựa chọn \"trả\" đảo chiều." },
    { q: "Ngân hàng short FRA với lãi suất 4,0%/năm, notional 10 triệu USD, kỳ 6 tháng. Vào ngày chốt, MRR 6 tháng là 3,4%/năm. Nếu thanh toán vào cuối kỳ, ngân hàng:", choices: ["Trả 30.000 USD", "Nhận 60.000 USD", "Nhận 30.000 USD"], answer: 2, explain: "Short FRA nhận cố định, trả MRR nên lời khi MRR giảm: (4,0% - 3,4%) x 0,5 x 10.000.000 = 30.000 USD. Lựa chọn \"trả\" là góc nhìn của bên long. Lựa chọn 60.000 USD quên nhân 0,5 cho kỳ 6 tháng." },
    { q: "Công ty long FRA với lãi suất 5,0%/năm để phòng hộ một khoản vay thả nổi theo MRR trong tương lai. Vào ngày chốt, MRR là 6,5%. Chi phí vay thực tế (sau khi tính khoản thanh toán FRA) của công ty là:", choices: ["6,5%", "5,0%", "1,5%"], answer: 1, explain: "Công ty trả lãi vay 6,5% nhưng nhận (6,5% - 5,0%) từ FRA, nên chi phí ròng được khóa ở 5,0% bất kể MRR. Lựa chọn 6,5% bỏ qua khoản nhận từ FRA. Lựa chọn 1,5% chỉ là khoản thanh toán FRA." },
    { q: "Lãi suất kỳ hạn F2,1 là mức hòa vốn giữa đầu tư 3 năm và đầu tư 2 năm rồi tái đầu tư 1 năm. Nếu nhà đầu tư tin lãi suất 1 năm sau 2 năm nữa sẽ THẤP hơn F2,1, họ nên:", choices: ["Chọn trái phiếu zero-coupon 3 năm", "Chọn trái phiếu 2 năm rồi tái đầu tư 1 năm", "Không phân biệt, vì hai chiến lược luôn cho kết quả bằng nhau"], answer: 0, explain: "Nếu lãi suất tái đầu tư thực tế thấp hơn F2,1 thì chiến lược 2 năm rồi tái đầu tư sẽ kém hơn, nên chọn kỳ hạn dài 3 năm để khóa lợi suất. Chiến lược tái đầu tư chỉ tốt hơn khi lãi suất tương lai cao hơn F2,1. Hai chiến lược chỉ bằng nhau khi lãi suất tương lai đúng bằng F2,1." },
    { q: "Trái phiếu 2 năm, coupon 5% trả hằng năm, mệnh giá 100. Lãi suất giao ngay 1 năm là 3%, lãi suất kỳ hạn 1 năm bắt đầu sau 1 năm (F1,1) là 4,5%. Giá trái phiếu gần nhất với:", choices: ["100,94", "103,83", "102,41"], answer: 2, explain: "Chiết khấu bằng chuỗi lãi suất kỳ hạn: P = 5/1,03 + 105/(1,03 x 1,045) = 102,41. Lựa chọn 100,94 chiết khấu cả hai năm ở 4,5%. Lựa chọn 103,83 chiết khấu cả hai năm ở 3%, bỏ qua lãi suất kỳ hạn." },
    { q: "Một bên long FRA với lãi suất 3,0%/năm, notional 20 triệu USD, kỳ vay 6 tháng. Hiện lãi suất FRA mới cho đúng giai đoạn vay đó là 3,4%/năm. Khoản thanh toán sẽ diễn ra sau 1 năm nữa và lãi suất chiết khấu 1 năm là 3,6%. Giá trị hiện tại của FRA với bên long gần nhất với:", choices: ["40.000 USD", "38.610 USD", "-38.610 USD"], answer: 1, explain: "Chênh lệch khóa được: (3,4% - 3,0%) x 0,5 x 20.000.000 = 40.000 USD, chiết khấu về hôm nay: 40.000/1,036 = 38.610 USD. Lựa chọn 40.000 USD quên chiết khấu. Lựa chọn âm đảo dấu: lãi suất FRA mới cao hơn nên long có giá trị dương." },
  ];

  // Giá trị forward theo S_t và thời gian đã trôi qua: hợp đồng 1 năm ký với S0 = 100, r = 5% nên F0 = 105.
  const widgets = {
    forwardValue(el) {
      el.innerHTML = `
        <div class="w-row"><label>Giá giao ngay Sₜ: <b data-o="s">100</b><input type="range" min="80" max="130" step="1" value="100" data-i="s"></label>
        <label>Đã trôi qua: <b data-o="m">0 tháng</b><input type="range" min="0" max="12" step="1" value="0" data-i="m"></label>
        <label>Lãi suất r: <b data-o="r">5%</b><input type="range" min="0" max="10" step="0.5" value="5" data-i="r"></label></div>
        <div class="w-out"><div class="w-price" data-o="v"></div><div class="w-bar"><span data-o="bar"></span><i></i></div><div class="w-note" data-o="note"></div></div>`;
      const q = s => el.querySelector(s);
      const F0 = 105;
      const vn = (x, d = 2) => x.toFixed(d).replace('.', ',');
      const upd = () => {
        const S = +q('[data-i="s"]').value, m = +q('[data-i="m"]').value, r = +q('[data-i="r"]').value / 100;
        const left = (12 - m) / 12, pvF = F0 / Math.pow(1 + r, left), V = S - pvF;
        q('[data-o="s"]').textContent = `${S}`;
        q('[data-o="m"]').textContent = `${m} tháng`;
        q('[data-o="r"]').textContent = `${vn(r * 100, 1)}%`;
        q('[data-o="v"]').textContent = `Long: ${vn(V)} · Short: ${vn(-V)}`;
        q('[data-o="bar"]').style.width = `${Math.max(0, Math.min(100, 50 + V * 2))}%`;
        q('[data-o="note"]').textContent = `Hợp đồng chốt F0 = 105 (S0 = 100, r = 5%, T = 1 năm). PV của F0 với ${12 - m} tháng còn lại = ${vn(pvF)}. ` +
          (m === 12 ? 'Đáo hạn: giá trị = St - F0.' : 'Giá trị = St - PV(F0). Thanh ở giữa là 0.');
      };
      el.addEventListener('input', upd);
      upd();
    },
  };

  window.LESSONS['DE-05'] = {
    moduleId: 'DE-05',
    calculator: 'BA II Plus',
    warmup: [
      'Ôn DE-04: viết công thức giá kỳ hạn có lợi ích và chi phí nắm giữ.',
      'Ôn DE-04: cổ phiếu không cổ tức giá 50, r = 4%. Giá kỳ hạn 1 năm là bao nhiêu?',
      'Đoán trước: một tháng sau khi bạn long forward, giá cổ phiếu tăng mạnh. Hợp đồng của bạn có "đáng tiền" không? Giá kỳ hạn trong hợp đồng có đổi không?',
    ],
    sections,
    glossary,
    practice,
    widgets,
    slides: [],
    wrapup: [
      'Phân biệt giá và giá trị của một hợp đồng kỳ hạn tại lúc ký, trong kỳ hạn và khi đáo hạn.',
      'Viết công thức tính lãi suất kỳ hạn F(A, B-A) từ hai spot rate và nêu hai công dụng của nó.',
      'Người sắp đi vay nên long hay short FRA? Thanh toán FRA được tính thế nào?',
    ],
  };
}());
