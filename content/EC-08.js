// Bài giảng EC-08 - Exchange Rate Calculations (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t, frac, keys } = window.CFAH;
  const vn = (x, d) => x.toFixed(d).replace('.', ',');

  const sections = [
    {
      title: '1. Bức tranh lớn và ôn quy ước',
      minutes: 4,
      html: `
<p>Đây là module "bấm máy" của phần Economics. Chỉ có 2 LOS nhưng gần như chắc chắn có câu tính toán trong đề:</p>
<ol>
<li><b>Tỷ giá chéo (cross rate):</b> biết tỷ giá của hai đồng tiền với một đồng tiền chung, tìm tỷ giá giữa chúng.</li>
<li><b>Tỷ giá kỳ hạn (forward rate):</b> tính từ điểm kỳ hạn, từ phần trăm, hoặc từ chênh lệch lãi suất qua ${t('cip', 'ngang giá lãi suất có phòng hộ (covered interest parity)')}; diễn giải ${t('premium', 'forward premium')} và ${t('discount', 'forward discount')}.</li>
</ol>
<div class="key">Quy ước như QM-04 và EC-07: tỷ giá <b>P/B</b> = số đơn vị đồng định giá P cho 1 đơn vị đồng cơ sở B. Mọi công thức trong module đều viết theo quy ước này. Trước khi bấm máy, luôn viết rõ <b>đồng nào là P, đồng nào là B</b>.</div>
<div class="formula">F<sub>P/B</sub> = S<sub>P/B</sub> × ${frac('1 + i<sub>P</sub> × (ngày/360)', '1 + i<sub>B</sub> × (ngày/360)')}</div>
<p>Đây là công thức quan trọng nhất của module. Lãi suất của đồng định giá ở tử, của đồng cơ sở ở mẫu, <b>khớp với vị trí P trên B</b> trong ký hiệu tỷ giá.</p>`,
    },
    {
      title: '2. Tỷ giá chéo (cross rates)',
      minutes: 10,
      html: `
<p>${t('cross', 'Tỷ giá chéo')} là tỷ giá giữa hai đồng tiền suy ra từ tỷ giá của mỗi đồng với một <b>đồng tiền thứ ba</b> (thường là USD). Cách làm: viết tỷ giá như phân số rồi <b>triệt tiêu đồng tiền chung</b>.</p>
<div class="formula">${frac('MXN', 'USD')} × ${frac('USD', 'AUD')} = ${frac('MXN', 'AUD')}</div>

<div class="example"><div class="ex-h">Ví dụ 2.1 - Nhân trực tiếp</div>
<p>MXN/USD = 18,40 và USD/AUD = 0,6550. Tính MXN/AUD.</p>
<details><summary>Xem lời giải</summary><p>USD nằm dưới ở tỷ giá thứ nhất và nằm trên ở tỷ giá thứ hai, nên nhân là triệt tiêu: MXN/AUD = 18,40 × 0,6550 = <b>12,0520</b>. Nghĩa là 1 AUD đổi được 12,052 MXN.</p></details></div>

<div class="example"><div class="ex-h">Ví dụ 2.2 - Nhân trực tiếp, đổi thứ tự</div>
<p>USD/EUR = 1,0850 và JPY/USD = 150,20. Tính JPY/EUR.</p>
<details><summary>Xem lời giải</summary><p>JPY/EUR = (JPY/USD) × (USD/EUR) = 150,20 × 1,0850 = <b>162,97</b>. Nếu lấy 150,20 / 1,0850 = 138,43 thì đơn vị là JPY/USD × EUR/USD, không triệt tiêu được: sai.</p></details></div>

<div class="example"><div class="ex-h">Ví dụ 2.3 - Phải chia (hai tỷ giá cùng đồng định giá)</div>
<p>USD/EUR = 1,0850 và USD/GBP = 1,2700. Tính EUR/GBP.</p>
<details><summary>Xem lời giải</summary><p>Cả hai đều có USD ở trên. Đảo một tỷ giá: EUR/USD = 1/1,0850. Khi đó EUR/GBP = (EUR/USD) × (USD/GBP) = 1,2700 / 1,0850 = <b>1,1705</b>.</p>
${keys([['EUR/GBP', '1.27 [÷] 1.085 [=]', '1.1705'], ['Kiểm tra chiều ngược GBP/EUR', '[1/x]', '0.8543']])}
<p>1 GBP đổi được 1,1705 EUR. Đáp án nhiễu 0,8543 là GBP/EUR (đảo chiều), 1,3780 là nhân thay vì chia.</p></details></div>

<p class="tip"><b>Quy trình 3 bước:</b> (1) viết cả hai tỷ giá dạng phân số có đơn vị; (2) đảo một tỷ giá nếu cần để đồng tiền chung nằm một trên, một dưới; (3) nhân. Kiểm tra cuối: đơn vị kết quả phải đúng là đồng cần tìm trên đồng còn lại.</p>
<p>Nếu tỷ giá chéo một ngân hàng báo khác với tỷ giá suy ra từ hai tỷ giá kia, sẽ có cơ hội ${t('triangular', 'chênh lệch giá tam giác (triangular arbitrage)')}: mua đồng tiền ở nơi rẻ, bán ở nơi đắt qua 3 giao dịch. Chính hoạt động này giữ các tỷ giá chéo nhất quán.</p>`,
    },
    {
      title: '3. Tỷ giá kỳ hạn yết theo điểm và theo phần trăm',
      minutes: 8,
      html: `
<p>Thị trường thường không báo trực tiếp tỷ giá kỳ hạn mà báo <b>chênh lệch so với tỷ giá giao ngay</b>:</p>
<ul>
<li>Theo ${t('points', 'điểm kỳ hạn (forward points)')}: F = S + điểm / 10.000 với tỷ giá yết 4 chữ số thập phân. Một điểm ứng với chữ số thập phân <b>cuối cùng</b> của tỷ giá. Với tỷ giá yết 2 chữ số thập phân như JPY, chia cho 100.</li>
<li>Theo phần trăm: F = S × (1 + %).</li>
</ul>
<div class="example"><div class="ex-h">Ví dụ 3.1</div>
<p>(a) USD/EUR spot 1,0850, điểm kỳ hạn 3 tháng +42,5. (b) Cùng spot, kỳ hạn 6 tháng yết -0,35%. (c) JPY/USD spot 150,20, điểm kỳ hạn 6 tháng -310. Tính các tỷ giá kỳ hạn.</p>
<details><summary>Xem lời giải</summary>
<p>(a) F = 1,0850 + 42,5/10.000 = 1,0850 + 0,00425 = <b>1,08925</b>.<br>
(b) F = 1,0850 × (1 - 0,0035) = <b>1,0812</b>.<br>
(c) JPY yết 2 chữ số thập phân: F = 150,20 - 310/100 = <b>147,10</b>.</p></details></div>
<p class="warn"><b>Bẫy:</b> cộng thẳng điểm vào tỷ giá (1,0850 + 42,5) hoặc chia sai thang (1,0850 + 0,0425). Luôn đổi điểm về cùng số chữ số thập phân với tỷ giá.</p>
<p>Điểm dương: F &gt; S, đồng cơ sở có forward premium. Điểm âm: F &lt; S, đồng cơ sở có forward discount.</p>`,
    },
    {
      title: '4. Ngang giá lãi suất có phòng hộ (covered interest parity)',
      minutes: 12,
      html: `
<h4>Lập luận không chênh lệch giá</h4>
<p>Có 1 đơn vị đồng B và muốn chắc chắn có đồng B sau một năm. Hai con đường <b>đều không rủi ro</b>:</p>
<ol>
<li>Gửi đồng B ở lãi suất i<sub>B</sub>: cuối kỳ có 1 + i<sub>B</sub>.</li>
<li>Đổi sang S đơn vị đồng P, gửi ở lãi suất i<sub>P</sub>, đồng thời <b>bán kỳ hạn</b> đồng P ở tỷ giá F: cuối kỳ có S(1 + i<sub>P</sub>)/F đơn vị B.</li>
</ol>
<p>Hai kết quả phải bằng nhau, nếu không sẽ có lời không rủi ro. Từ đó:</p>
<div class="formula">F<sub>P/B</sub> = S<sub>P/B</sub> × ${frac('1 + i<sub>P</sub> × (ngày/360)', '1 + i<sub>B</sub> × (ngày/360)')}</div>
<p>Lãi suất thị trường tiền tệ thường yết theo năm, quy ước ngày/360, nên với kỳ hạn dưới một năm phải nhân lãi suất với ngày/360 <b>trước</b> khi đưa vào công thức.</p>

<div class="example"><div class="ex-h">Ví dụ 4.1</div>
<p>USD/EUR spot 1,0850. Lãi suất USD 4,5%/năm, EUR 2,5%/năm. Tính tỷ giá kỳ hạn (a) 180 ngày, (b) 1 năm, kèm điểm kỳ hạn.</p>
<details><summary>Xem lời giải</summary>
<p>USD là đồng định giá (P), EUR là đồng cơ sở (B).</p>
<p>(a) F = 1,0850 × (1 + 0,045 × 180/360) / (1 + 0,025 × 180/360) = 1,0850 × 1,0225 / 1,0125 = <b>1,0957</b>; điểm kỳ hạn ≈ +107,2.</p>
${keys([['F 180 ngày', '1.085 [×] [(] 1 [+] 0.045 [×] 180 [÷] 360 [)] [÷] [(] 1 [+] 0.025 [×] 180 [÷] 360 [)] [=]', '1.0957']])}
<p>(b) F = 1,0850 × 1,045 / 1,025 = <b>1,1062</b>; điểm kỳ hạn ≈ +211,7.</p>
<p>EUR có lãi suất thấp hơn nên giao dịch ở <b>forward premium</b>: (1,1062/1,0850 - 1) = 1,95%, xấp xỉ chênh lệch lãi suất 4,5% - 2,5% = 2%.</p></details></div>

<div class="formula">Xấp xỉ: ${frac('F - S', 'S')} ≈ (i<sub>P</sub> - i<sub>B</sub>) × ${frac('ngày', '360')}</div>
<p>Dùng để kiểm tra nhanh đáp án, không dùng thay công thức chính xác khi đáp án gần nhau.</p>

<div class="example"><div class="ex-h">Ví dụ 4.2 - Khi giá kỳ hạn thị trường lệch</div>
<p>Vẫn số liệu trên, nhưng một ngân hàng báo tỷ giá kỳ hạn 1 năm là 1,1000 USD/EUR (thấp hơn mức 1,1062 theo CIP). Mô tả giao dịch chênh lệch giá với 1 triệu EUR đi vay.</p>
<details><summary>Xem lời giải</summary>
<p>Giá kỳ hạn của EUR <b>quá rẻ</b> nên ta <b>mua EUR kỳ hạn</b>, và làm ngược lại ở thị trường giao ngay:</p>
<ol>
<li>Vay 1.000.000 EUR ở 2,5%: cuối năm nợ 1.025.000 EUR.</li>
<li>Đổi sang USD giao ngay: 1.000.000 × 1,0850 = 1.085.000 USD.</li>
<li>Gửi USD ở 4,5%: cuối năm có 1.133.825 USD.</li>
<li>Hôm nay ký hợp đồng mua EUR kỳ hạn ở 1,1000: cuối năm đổi được 1.133.825 / 1,1000 = 1.030.750 EUR.</li>
</ol>
<p>Trả nợ 1.025.000 EUR, còn lại <b>5.750 EUR lời không rủi ro</b>, không cần bỏ vốn. Áp lực mua EUR kỳ hạn sẽ đẩy F lên về 1,1062.</p></details></div>
<p class="tip"><b>Mẹo chọn hướng:</b> so sánh F thị trường với F theo CIP. Đồng cơ sở đang rẻ ở kỳ hạn thì mua nó kỳ hạn, vay chính nó hôm nay. "Vay rẻ, cho vay đắt, khóa bằng forward."</p>

<h4>Thử ngay: kéo các thanh lãi suất và kỳ hạn</h4>
<div class="widget" data-widget="cip"></div>`,
    },
    {
      title: '5. Diễn giải forward premium và forward discount',
      minutes: 7,
      html: `
<div class="formula">Forward premium (+) hoặc discount (-) của đồng cơ sở = ${frac('F', 'S')} - 1</div>
<ul>
<li>F &gt; S: đồng <b>cơ sở</b> có forward premium, đồng định giá có forward discount.</li>
<li>F &lt; S: đồng cơ sở có forward discount.</li>
</ul>
<div class="key">Theo CIP, <b>đồng tiền có lãi suất cao hơn giao dịch ở forward discount</b>; đồng có lãi suất thấp hơn giao dịch ở forward premium. Phần lãi suất cao hơn được "trả lại" qua tỷ giá kỳ hạn kém hơn, nên không ai lời không rủi ro.</div>
<div class="example"><div class="ex-h">Ví dụ 5.1</div>
<p>CAD/USD spot 1,3600, kỳ hạn 1 năm 1,3532. Diễn giải.</p>
<details><summary>Xem lời giải</summary><p>Điểm kỳ hạn = (1,3532 - 1,3600) × 10.000 = -68. USD (cơ sở) có forward discount 1,3532/1,3600 - 1 = <b>-0,50%</b>. Theo CIP, điều này cho biết lãi suất USD <b>cao hơn</b> lãi suất CAD khoảng 0,5 điểm phần trăm.</p></details></div>
<p class="warn"><b>Forward không phải dự báo.</b> Tỷ giá kỳ hạn được quyết định bởi lập luận không chênh lệch giá (lãi suất và tỷ giá giao ngay hiện tại), không phải bởi kỳ vọng của ai đó về tỷ giá tương lai. Forward premium không có nghĩa là "thị trường dự đoán đồng tiền này sẽ tăng giá".</p>
<div class="example"><div class="ex-h">Ví dụ 5.2 - Doanh nghiệp Việt Nam</div>
<p>VND/USD spot 25.400, lãi suất VND 1 năm 5%, USD 4,5%. Doanh nghiệp nhập khẩu cần mua USD sau 1 năm nên chốt kỳ hạn. Tỷ giá kỳ hạn hợp lý?</p>
<details><summary>Xem lời giải</summary><p>F = 25.400 × 1,05 / 1,045 = <b>25.521,53</b> VND/USD. VND lãi suất cao hơn nên giao dịch ở forward discount; doanh nghiệp trả thêm khoảng 121,5 VND mỗi USD so với giá giao ngay để đổi lấy sự chắc chắn.</p></details></div>`,
    },
    {
      title: '6. Tóm tắt và bẫy thường gặp',
      minutes: 4,
      html: `
<table class="plain"><thead><tr><th>Tình huống</th><th>Nhớ</th></tr></thead><tbody>
<tr><td>Tỷ giá chéo</td><td>Viết dạng phân số, đảo nếu cần, nhân để triệt tiêu đồng chung; kiểm tra đơn vị kết quả</td></tr>
<tr><td>Hai tỷ giá cùng đồng định giá (USD/EUR, USD/GBP)</td><td>Chia: EUR/GBP = (USD/GBP) / (USD/EUR)</td></tr>
<tr><td>Điểm kỳ hạn</td><td>Chia 10.000 (tỷ giá 4 số thập phân) hoặc 100 (JPY)</td></tr>
<tr><td>CIP</td><td>F = S × (1 + i<sub>P</sub> × ngày/360) / (1 + i<sub>B</sub> × ngày/360); lãi suất P ở tử</td></tr>
<tr><td>Kỳ hạn dưới 1 năm</td><td>Nhân lãi suất với ngày/360 trước, không dùng lãi suất năm</td></tr>
<tr><td>Premium / discount</td><td>F/S - 1 là của đồng <b>cơ sở</b></td></tr>
<tr><td>Đồng tiền lãi suất cao</td><td>Forward discount</td></tr>
<tr><td>F thị trường thấp hơn F theo CIP</td><td>Vay đồng B, đổi sang P, gửi P, mua B kỳ hạn</td></tr>
<tr><td>Forward là dự báo?</td><td>Không, là kết quả của không chênh lệch giá</td></tr>
</tbody></table>
<p>Tiếp theo: tab <b>Luyện tập</b> 8 câu. Đây là phần dễ lấy điểm nhất của Economics nếu nắm chắc quy ước P/B.</p>`,
    },
  ];

  const glossary = {
    cip: ['Covered interest rate parity', 'Ngang giá lãi suất có phòng hộ', 'Quan hệ không chênh lệch giá: F = S x (1 + i_P x ngày/360)/(1 + i_B x ngày/360).'],
    premium: ['Forward premium', 'Phần bù kỳ hạn', 'Tỷ giá kỳ hạn cao hơn giao ngay: đồng cơ sở đắt hơn ở kỳ hạn; F/S - 1 > 0.'],
    discount: ['Forward discount', 'Chiết khấu kỳ hạn', 'Tỷ giá kỳ hạn thấp hơn giao ngay: đồng cơ sở rẻ hơn ở kỳ hạn; F/S - 1 < 0.'],
    cross: ['Cross rate', 'Tỷ giá chéo', 'Tỷ giá giữa hai đồng tiền suy ra từ tỷ giá của mỗi đồng với đồng tiền thứ ba.'],
    triangular: ['Triangular arbitrage', 'Chênh lệch giá tam giác', 'Kiếm lời không rủi ro qua 3 giao dịch khi tỷ giá chéo báo giá lệch với tỷ giá suy ra.'],
    points: ['Forward points', 'Điểm kỳ hạn', 'F - S tính theo đơn vị chữ số thập phân cuối cùng của tỷ giá (thường 1/10.000).'],
  };

  const practice = [
    { q: 'MXN/USD = 18,40 và USD/AUD = 0,6550. Tỷ giá MXN/AUD gần nhất với:', choices: ['12,0520', '28,0916', '0,0356'], answer: 0, explain: 'MXN/USD x USD/AUD = MXN/AUD = 18,40 x 0,6550 = 12,0520. Đáp án B là chia 18,40/0,6550, đơn vị không triệt tiêu. Đáp án C là 0,6550/18,40.' },
    { q: 'USD/EUR = 1,0850 và USD/GBP = 1,2700. Tỷ giá EUR/GBP gần nhất với:', choices: ['0,8543', '1,3780', '1,1705'], answer: 2, explain: 'EUR/GBP = (EUR/USD) x (USD/GBP) = 1,2700 / 1,0850 = 1,1705. Đáp án A là GBP/EUR (đảo chiều). Đáp án B là nhân hai tỷ giá, không triệt tiêu được USD.' },
    { q: 'Tỷ giá giao ngay USD/EUR là 1,0850, điểm kỳ hạn 3 tháng là -27,5. Tỷ giá kỳ hạn 3 tháng gần nhất với:', choices: ['1,0575', '1,0822', '1,0878'], answer: 1, explain: 'F = 1,0850 - 27,5/10.000 = 1,0850 - 0,00275 = 1,08225. Đáp án A chia sai thang (trừ 0,0275). Đáp án C cộng thay vì trừ.' },
    { q: 'Tỷ giá giao ngay CHF/USD là 0,8800, tỷ giá kỳ hạn 6 tháng được yết -0,45%. Tỷ giá kỳ hạn gần nhất với:', choices: ['0,8760', '0,8840', '0,8350'], answer: 0, explain: 'F = 0,8800 x (1 - 0,0045) = 0,87604. Đáp án B là cộng 0,45%. Đáp án C là trừ 0,045, nhầm 0,45% thành 4,5%.' },
    { q: 'USD/GBP giao ngay 1,2700. Lãi suất 90 ngày (năm hóa, ngày/360) của USD là 4%, của GBP là 5%. Tỷ giá kỳ hạn 90 ngày không chênh lệch giá gần nhất với:', choices: ['1,2579', '1,2731', '1,2669'], answer: 2, explain: 'USD là P, GBP là B: F = 1,27 x (1 + 0,04 x 90/360)/(1 + 0,05 x 90/360) = 1,27 x 1,01/1,0125 = 1,2669. Đáp án A dùng lãi suất cả năm. Đáp án B đặt ngược lãi suất ở tử và mẫu.' },
    { q: 'CAD/USD giao ngay 1,3600, kỳ hạn 1 năm 1,3532. Phát biểu nào đúng nhất?', choices: ['USD giao dịch ở forward premium 0,50%', 'USD giao dịch ở forward discount 0,50%, hàm ý lãi suất USD cao hơn lãi suất CAD', 'CAD giao dịch ở forward discount 0,50%'], answer: 1, explain: 'F/S - 1 = 1,3532/1,3600 - 1 = -0,50% là của đồng cơ sở USD, nên USD ở forward discount, CAD ở forward premium. Theo CIP, đồng có lãi suất cao hơn giao dịch ở forward discount, nên lãi suất USD cao hơn.' },
    { q: 'USD/EUR giao ngay 1,0850, lãi suất 1 năm USD 4,5%, EUR 2,5%, nên F theo CIP là 1,1062. Một ngân hàng báo F 1 năm là 1,1000. Giao dịch chênh lệch giá phù hợp là:', choices: ['Vay EUR, đổi sang USD giao ngay, gửi USD, đồng thời mua EUR kỳ hạn', 'Vay USD, đổi sang EUR giao ngay, gửi EUR, đồng thời bán EUR kỳ hạn', 'Không có cơ hội vì chênh lệch nhỏ hơn chênh lệch lãi suất'], answer: 0, explain: 'EUR kỳ hạn đang rẻ hơn mức CIP nên mua EUR kỳ hạn và vay EUR hôm nay. Với 1 triệu EUR: 1.085.000 USD x 1,045 / 1,1000 = 1.030.750 EUR, trả nợ 1.025.000 EUR, lời 5.750 EUR. Giao dịch B lỗ vì bán EUR kỳ hạn ở giá quá thấp.' },
    { q: 'JPY/USD giao ngay 150,00. Lãi suất 1 năm của JPY là 0,5%, của USD là 4,5%. Tỷ giá kỳ hạn 1 năm gần nhất với:', choices: ['155,97', '144,00', '144,26'], answer: 2, explain: 'JPY là P, USD là B: F = 150 x 1,005/1,045 = 144,26. Đáp án A đặt ngược lãi suất. Đáp án B dùng xấp xỉ 150 x (1 - 4%), chỉ gần đúng.' },
  ];

  const widgets = {
    cip(el) {
      el.innerHTML = `
        <div class="w-row"><label>Lãi suất USD (P): <b data-o="p">4,5%</b><input type="range" min="0" max="10" step="0.25" value="4.5" data-i="p"></label>
        <label>Lãi suất EUR (B): <b data-o="b">2,5%</b><input type="range" min="0" max="10" step="0.25" value="2.5" data-i="b"></label>
        <label>Kỳ hạn: <b data-o="d">180 ngày</b><input type="range" min="30" max="360" step="30" value="180" data-i="d"></label></div>
        <div class="w-out"><div class="w-price" data-o="f"></div><div class="w-bar"><span data-o="bar"></span><i></i></div><div class="w-note" data-o="note"></div></div>`;
      const q = s => el.querySelector(s);
      const S0 = 1.085;
      const upd = () => {
        const ip = +q('[data-i="p"]').value / 100, ib = +q('[data-i="b"]').value / 100, d = +q('[data-i="d"]').value;
        const F = S0 * (1 + ip * d / 360) / (1 + ib * d / 360), pts = (F - S0) * 10000, pr = F / S0 - 1;
        q('[data-o="p"]').textContent = `${vn(ip * 100, 2)}%`;
        q('[data-o="b"]').textContent = `${vn(ib * 100, 2)}%`;
        q('[data-o="d"]').textContent = `${d} ngày`;
        q('[data-o="f"]').textContent = `F = ${vn(F, 4)} USD/EUR · điểm kỳ hạn ${pts >= 0 ? '+' : ''}${vn(pts, 1)}`;
        q('[data-o="bar"]').style.width = `${Math.max(0, Math.min(100, 50 + pr * 1000))}%`;
        q('[data-o="note"]').textContent = Math.abs(pr) < 1e-9 ? 'Lãi suất bằng nhau: F = S, không có premium hay discount.'
          : pr > 0 ? `EUR (đồng cơ sở) có forward premium ${vn(pr * 100, 2)}% vì lãi suất EUR thấp hơn USD. Spot giữ nguyên 1,0850.`
            : `EUR (đồng cơ sở) có forward discount ${vn(-pr * 100, 2)}% vì lãi suất EUR cao hơn USD. Spot giữ nguyên 1,0850.`;
      };
      el.addEventListener('input', upd);
      upd();
    },
  };

  window.LESSONS['EC-08'] = {
    moduleId: 'EC-08',
    calculator: 'BA II Plus',
    warmup: [
      'Ôn EC-07: VND/USD tăng từ 25.000 lên 25.500. USD tăng bao nhiêu phần trăm so với VND? VND giảm bao nhiêu phần trăm?',
      'Ôn QM-04: viết công thức tỷ giá kỳ hạn F = S × (1 + i_P)/(1 + i_B). Đồng nào có lãi suất cao hơn thì giảm giá kỳ hạn?',
      'Đoán trước: nếu biết 1 USD = 25.400 VND và 1 EUR = 1,085 USD, làm sao tìm được 1 EUR bằng bao nhiêu VND?',
    ],
    sections,
    glossary,
    practice,
    widgets,
    slides: [],
    wrapup: [
      'Tự đặt một bài tỷ giá chéo cần phải chia (hai tỷ giá cùng đồng định giá) và giải nó.',
      'Viết công thức CIP cho kỳ hạn 90 ngày và giải thích bằng lời vì sao đồng tiền lãi suất cao giao dịch ở forward discount.',
      'Mô tả 4 bước của giao dịch chênh lệch giá khi F thị trường thấp hơn F theo CIP.',
    ],
  };
}());
