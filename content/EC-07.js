// Bài giảng EC-07 - Capital Flows and the FX Market (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t, frac, keys } = window.CFAH;

  const sections = [
    {
      title: '1. Bức tranh lớn',
      minutes: 4,
      html: `
<p>EC-06 nói về dòng <b>hàng hóa</b> qua biên giới. Mỗi dòng hàng hóa và mỗi dòng đầu tư đều cần đổi tiền, nên đằng sau thương mại luôn có ${t('fxm', 'thị trường ngoại hối (FX market)')}. Module này trả lời 3 câu hỏi theo 3 LOS:</p>
<table class="plain"><thead><tr><th>LOS 2027</th><th>Câu hỏi</th><th>Phần</th></tr></thead><tbody>
<tr><td>FX market; nominal và real exchange rate; % thay đổi</td><td>Ai mua bán ngoại tệ, đọc tỷ giá thế nào, đồng tiền tăng giá bao nhiêu phần trăm?</td><td>2, 3, 4</td></tr>
<tr><td>Exchange rate regimes; tác động lên thương mại và dòng vốn</td><td>Nhà nước quản lý tỷ giá theo những kiểu nào? Tỷ giá thay đổi thì cán cân thương mại và dòng vốn phản ứng ra sao?</td><td>5, 6</td></tr>
<tr><td>Capital restrictions</td><td>Vì sao chính phủ hạn chế dòng vốn?</td><td>7</td></tr>
</tbody></table>
<div class="key">Quy ước xuyên suốt (giống QM-04): tỷ giá <b>P/B</b> là <b>số đơn vị đồng định giá P cho 1 đơn vị đồng cơ sở B</b>. VND/USD = 25.400 nghĩa là 1 USD = 25.400 VND. Tỷ giá P/B tăng thì <b>đồng cơ sở B tăng giá</b>.</div>
<p>Phần tính tỷ giá chéo và tỷ giá kỳ hạn để dành cho EC-08.</p>`,
    },
    {
      title: '2. Thị trường ngoại hối: chức năng và người tham gia',
      minutes: 8,
      html: `
<h4>Chức năng</h4>
<ul>
<li><b>Phục vụ thương mại và đầu tư:</b> doanh nghiệp, cá nhân mua bán hàng hóa, dịch vụ, tài sản thực và chứng khoán nước ngoài đều phải đổi tiền.</li>
<li><b>Phòng hộ (hedging):</b> dùng hợp đồng kỳ hạn để giảm hoặc loại bỏ rủi ro tỷ giá của một giao dịch xuyên biên giới. Ví dụ doanh nghiệp may xuất khẩu sẽ nhận USD sau 3 tháng, bán kỳ hạn USD ngay hôm nay để chốt số VND sẽ nhận.</li>
<li><b>Đầu cơ (speculation):</b> nhà đầu tư, doanh nghiệp, ngân hàng, quỹ chủ động nắm giữ vị thế ngoại tệ để kiếm lời từ biến động tỷ giá.</li>
</ul>
<p>Giao dịch chính: ${t('spot', 'giao ngay (spot)')}, thường thanh toán sau 2 ngày làm việc (T+2); ${t('fwd', 'kỳ hạn (forward)')}, chốt hôm nay một tỷ giá để trao đổi vào một ngày tương lai; hoán đổi ngoại tệ (FX swap), gồm một giao dịch spot và một giao dịch forward ngược chiều. Ngoài ra còn hợp đồng tương lai và quyền chọn tiền tệ.</p>

<h4>Người tham gia</h4>
<table class="plain"><thead><tr><th>Nhóm</th><th>Gồm ai</th></tr></thead><tbody>
<tr><td>${t('sellside', 'Bên bán (sell side)')}</td><td>Các ngân hàng lớn làm nhà tạo lập thị trường: báo giá mua bán, phát hành hợp đồng forward cho khách hàng</td></tr>
<tr><td rowspan="1">${t('buyside', 'Bên mua (buy side)')}</td><td>
<b>Doanh nghiệp</b> (xuất nhập khẩu, đầu tư ra nước ngoài);<br>
<b>${t('realmoney', 'Real money accounts')}</b>: quỹ hưu trí, bảo hiểm, quỹ đầu tư, ít dùng đòn bẩy;<br>
<b>${t('leveraged', 'Leveraged accounts')}</b>: quỹ phòng hộ, bộ phận tự doanh, dùng đòn bẩy và giao dịch chủ động;<br>
<b>Nhà đầu tư nhỏ lẻ</b> (hộ gia đình, du khách, kiều hối);<br>
<b>Chính phủ và tổ chức nhà nước</b>: ngân hàng trung ương can thiệp tỷ giá và quản lý dự trữ, quỹ đầu tư quốc gia</td></tr>
</tbody></table>
<p class="tip">Đề hay hỏi: quỹ phòng hộ là <b>leveraged account</b>; quỹ hưu trí là <b>real money account</b>; ngân hàng lớn báo giá là <b>sell side</b>.</p>`,
    },
    {
      title: '3. Đọc tỷ giá và tính phần trăm thay đổi',
      minutes: 10,
      html: `
<h4>Yết giá trực tiếp và gián tiếp</h4>
<ul>
<li>${t('direct', 'Yết giá trực tiếp (direct quote)')}: đồng nội tệ là <b>đồng định giá</b> (P). Với người Việt Nam, VND/USD = 25.400 là yết giá trực tiếp: 1 USD bằng bao nhiêu VND.</li>
<li>${t('indirect', 'Yết giá gián tiếp (indirect quote)')}: đồng nội tệ là <b>đồng cơ sở</b> (B). Với người Việt Nam, USD/VND = 1/25.400 ≈ 0,00003937.</li>
</ul>
<p>Cùng một tỷ giá có thể là trực tiếp với người này và gián tiếp với người khác. USD/EUR = 1,0850 là yết giá trực tiếp với nhà đầu tư Mỹ, gián tiếp với nhà đầu tư châu Âu. Đổi chiều: EUR/USD = 1/1,0850.</p>

<h4>Phần trăm thay đổi</h4>
<div class="formula">% thay đổi của đồng cơ sở B = ${frac('S<sub>1</sub>', 'S<sub>0</sub>')} - 1 &nbsp;&nbsp;&nbsp;&nbsp; % thay đổi của đồng định giá P = ${frac('S<sub>0</sub>', 'S<sub>1</sub>')} - 1</div>
<p>với S là tỷ giá P/B. Muốn tính cho đồng nào thì <b>đặt đồng đó làm đồng cơ sở</b> trước, rồi lấy mới chia cũ trừ 1.</p>

<div class="example"><div class="ex-h">Ví dụ 3.1</div>
<p>Tỷ giá VND/USD tăng từ 24.500 lên 25.480. USD tăng giá bao nhiêu so với VND? VND giảm giá bao nhiêu so với USD?</p>
<details><summary>Xem lời giải</summary>
<p>USD là đồng cơ sở: 25.480 / 24.500 - 1 = <b>+4,00%</b>.<br>
VND là đồng định giá: 24.500 / 25.480 - 1 = <b>-3,85%</b>.</p>
${keys([['USD so với VND', '25480 [÷] 24500 [-] 1 [=]', '0.0400'], ['VND so với USD', '24500 [÷] 25480 [-] 1 [=]', '-0.0385']])}
<p>Hai con số <b>không đối xứng</b>: USD tăng 4% không có nghĩa VND giảm 4%.</p></details></div>
<div class="example"><div class="ex-h">Ví dụ 3.2</div>
<p>JPY/USD giảm từ 150 xuống 140. Tính phần trăm thay đổi của USD và của JPY.</p>
<details><summary>Xem lời giải</summary><p>USD (đồng cơ sở): 140/150 - 1 = <b>-6,67%</b>. JPY (đồng định giá): 150/140 - 1 = <b>+7,14%</b>. Tỷ giá P/B giảm nghĩa là đồng cơ sở mất giá và đồng định giá lên giá.</p></details></div>
<p class="warn"><b>Bẫy số 1:</b> lấy phần trăm thay đổi của đồng này đổi dấu thành phần trăm thay đổi của đồng kia. Đáp án nhiễu kiểu "-4,00%" luôn có mặt.</p>`,
    },
    {
      title: '4. Tỷ giá danh nghĩa và tỷ giá thực',
      minutes: 9,
      html: `
<p>${t('nominal', 'Tỷ giá danh nghĩa (nominal exchange rate)')} là tỷ giá niêm yết. ${t('real', 'Tỷ giá thực (real exchange rate)')} điều chỉnh thêm chênh lệch giá cả giữa hai nước, cho biết <b>sức mua thực</b>: một giỏ hàng nước cơ sở đổi được bao nhiêu giỏ hàng nước định giá.</p>
<div class="formula">Tỷ giá thực<sub>P/B</sub> = S<sub>P/B</sub> × ${frac('CPI<sub>B</sub>', 'CPI<sub>P</sub>')}</div>
<ul>
<li>Giá cả ở nước định giá P tăng nhanh hơn (CPI<sub>P</sub> tăng) → tỷ giá thực P/B <b>giảm</b> → đồng P có sức mua lớn hơn với hàng nước B; hàng nước P trở nên đắt hơn tương đối, kém cạnh tranh hơn.</li>
<li>Tỷ giá thực P/B <b>tăng</b> → đồng cơ sở B lên giá thực; hàng nước B đắt lên tương đối so với hàng nước P.</li>
</ul>
<div class="example"><div class="ex-h">Ví dụ 4.1</div>
<p>Năm gốc: VND/USD = 24.000, CPI Việt Nam và Mỹ đều bằng 100. Sau 2 năm: VND/USD = 25.200, CPI Việt Nam 108, CPI Mỹ 103. Tính tỷ giá thực VND/USD và diễn giải.</p>
<details><summary>Xem lời giải</summary>
<p>VND là đồng định giá (P), USD là đồng cơ sở (B).<br>
Tỷ giá thực = 25.200 × 103 / 108 = <b>24.033,33</b>.</p>
<p>Tỷ giá danh nghĩa tăng 5% (25.200/24.000 - 1), nhưng tỷ giá thực chỉ tăng 24.033,33/24.000 - 1 = <b>0,14%</b>. Lạm phát Việt Nam cao hơn Mỹ đã "ăn" gần hết phần mất giá danh nghĩa của VND. Lợi thế cạnh tranh về giá của hàng Việt Nam gần như không đổi.</p></details></div>
<p class="warn"><b>Bẫy:</b> đặt ngược tỷ lệ CPI. Mẹo nhớ: CPI đi "chéo" với ký hiệu: trong P/B đồng B nằm dưới, nhưng CPI<sub>B</sub> nằm trên tử. Chắc nhất là kiểm tra bằng trực giác: lạm phát nước P cao hơn thì tỷ giá thực P/B phải thấp hơn tỷ giá danh nghĩa.</p>`,
    },
    {
      title: '5. Các chế độ tỷ giá (exchange rate regimes)',
      minutes: 10,
      html: `
<p>Xếp từ cứng nhất đến linh hoạt nhất:</p>
<table class="plain"><thead><tr><th>Chế độ</th><th>Đặc điểm</th><th>Ví dụ</th></tr></thead><tbody>
<tr><td>Không có đồng tiền riêng: ${t('dollarization', 'đô la hóa chính thức (formal dollarization)')}</td><td>Dùng đồng tiền của nước khác làm tiền pháp định; mất hoàn toàn chính sách tiền tệ độc lập</td><td>Ecuador, El Salvador dùng USD</td></tr>
<tr><td>Không có đồng tiền riêng: liên minh tiền tệ</td><td>Dùng đồng tiền chung, chính sách tiền tệ do ngân hàng trung ương chung quyết định</td><td>Khu vực euro</td></tr>
<tr><td>${t('cba', 'Hội đồng tiền tệ (currency board)')}</td><td>Cam kết pháp lý đổi nội tệ lấy một ngoại tệ ở tỷ giá cố định; nội tệ phát hành được <b>bảo đảm hoàn toàn</b> bằng dự trữ ngoại tệ</td><td>Hồng Kông (HKD neo USD)</td></tr>
<tr><td>${t('peg', 'Neo cố định truyền thống (conventional fixed peg)')}</td><td>Neo vào một đồng tiền hoặc một rổ tiền, cho dao động hẹp trong khoảng ±1%; ngân hàng trung ương can thiệp để giữ</td><td>Một số nước vùng Vịnh</td></tr>
<tr><td>Biên độ mục tiêu (target zone)</td><td>Như neo cố định nhưng biên độ rộng hơn, khoảng ±2%</td><td></td></tr>
<tr><td>${t('crawl', 'Neo trượt (crawling peg)')}</td><td>Tỷ giá neo được điều chỉnh định kỳ, thường để bù chênh lệch lạm phát với nước được neo</td><td></td></tr>
<tr><td>${t('managed', 'Thả nổi có quản lý (managed floating)')}</td><td>Ngân hàng trung ương can thiệp theo các chỉ báo (cán cân thanh toán, lạm phát, việc làm) nhưng không có mục tiêu tỷ giá cụ thể</td><td></td></tr>
<tr><td>Thả nổi tự do (independently floating)</td><td>Tỷ giá do thị trường quyết định, can thiệp chỉ để làm dịu biến động</td><td>USD, JPY, GBP</td></tr>
</tbody></table>
<p>Việt Nam: Ngân hàng Nhà nước công bố tỷ giá trung tâm hằng ngày và cho phép ngân hàng thương mại giao dịch trong một biên độ quanh tỷ giá đó, tức một dạng tỷ giá có quản lý với biên độ, không thuộc nhóm thả nổi tự do.</p>
<div class="key">Đánh đổi: chế độ càng cứng thì tỷ giá càng ổn định và lạm phát dễ kỷ luật hơn, nhưng nước đó <b>càng mất quyền tự chủ chính sách tiền tệ</b> và phải có dự trữ ngoại hối lớn để bảo vệ tỷ giá. Không nước nào có cùng lúc tỷ giá cố định, vốn tự do và chính sách tiền tệ độc lập (${t('trinity', 'bộ ba bất khả thi')}).</div>`,
    },
    {
      title: '6. Tỷ giá tác động đến thương mại và dòng vốn',
      minutes: 10,
      html: `
<h4>Kênh thương mại</h4>
<p>Khi nội tệ <b>mất giá</b>: hàng xuất khẩu rẻ hơn tính bằng ngoại tệ (xuất khẩu tăng), hàng nhập khẩu đắt hơn tính bằng nội tệ (nhập khẩu giảm). Nhưng cán cân thương mại có cải thiện hay không còn phụ thuộc vào <b>độ co giãn</b> của cầu:</p>
<div class="formula">${t('ml', 'Điều kiện Marshall-Lerner')} (khi thương mại ban đầu cân bằng): ε<sub>X</sub> + ε<sub>M</sub> &gt; 1</div>
<p>ε<sub>X</sub>, ε<sub>M</sub> là độ co giãn theo giá (trị tuyệt đối) của cầu xuất khẩu và cầu nhập khẩu. Nếu tổng nhỏ hơn 1, mất giá làm cán cân thương mại <b>xấu đi</b>: lượng thay đổi quá ít, trong khi mỗi đơn vị nhập khẩu đắt hơn.</p>
<p>${t('jcurve', 'Hiệu ứng tuyến J (J-curve)')}: ngay sau khi mất giá, hợp đồng đã ký theo giá cũ và người mua chưa kịp đổi thói quen, nên độ co giãn ngắn hạn thấp và cán cân thường <b>xấu đi trước</b>, sau đó mới cải thiện.</p>

<h4>Cách nhìn từ tiết kiệm và đầu tư</h4>
<div class="formula">X - M = (S - I) + (T - G)</div>
<p>Cán cân thương mại bằng tiết kiệm tư nhân trừ đầu tư, cộng cán cân ngân sách. Mất giá chỉ cải thiện cán cân bền vững nếu nó làm <b>tiết kiệm trong nước tăng so với chi tiêu</b> (cách tiếp cận hấp thụ, absorption). Nếu nền kinh tế đã ở mức toàn dụng, mất giá chủ yếu gây lạm phát.</p>
<div class="example"><div class="ex-h">Ví dụ 6.1</div>
<p>Tiết kiệm tư nhân thấp hơn đầu tư 2% GDP, ngân sách thâm hụt 3% GDP. Cán cân thương mại là bao nhiêu? Được tài trợ thế nào?</p>
<details><summary>Xem lời giải</summary><p>X - M = (-2%) + (-3%) = <b>-5% GDP</b>. Thâm hụt này phải được bù bằng <b>thặng dư tài khoản vốn và tài chính</b>: nước ngoài đầu tư vào hoặc cho vay 5% GDP.</p></details></div>

<h4>Kênh dòng vốn</h4>
<ul>
<li>Thâm hụt tài khoản vãng lai luôn đi kèm <b>dòng vốn ròng chảy vào</b> (thặng dư tài khoản tài chính) và ngược lại.</li>
<li>Dòng vốn vào mạnh (lãi suất cao, kỳ vọng tăng trưởng) làm nội tệ <b>lên giá</b>, có thể đẩy giá tài sản lên cao và làm xuất khẩu kém cạnh tranh.</li>
<li>Dòng vốn có thể <b>đảo chiều đột ngột</b> khi tâm lý thay đổi: nội tệ mất giá mạnh, giá tài sản lao dốc, nợ bằng ngoại tệ phình to. Chế độ neo cố định dễ bị tấn công khi dự trữ không đủ.</li>
</ul>`,
    },
    {
      title: '7. Hạn chế vốn (capital restrictions)',
      minutes: 5,
      html: `
<p>${t('caprest', 'Hạn chế vốn')} là các biện pháp kiểm soát dòng vốn tài chính qua biên giới: cấm hoặc giới hạn nhà đầu tư nước ngoài vào một số ngành, đánh thuế thu nhập từ đầu tư của người nước ngoài, hạn chế chuyển lợi nhuận về nước. Ví dụ ở Việt Nam: giới hạn tỷ lệ sở hữu nước ngoài ("room ngoại") ở ngân hàng và một số ngành.</p>
<h4>Bốn mục tiêu phổ biến</h4>
<table class="plain"><thead><tr><th>Mục tiêu</th><th>Lý giải</th></tr></thead><tbody>
<tr><td>Giảm biến động giá tài sản trong nước</td><td>Ngăn "vốn nóng" ồ ạt vào rồi rút ra</td></tr>
<tr><td>Duy trì tỷ giá cố định</td><td>Vốn tự do sẽ tấn công tỷ giá neo khi lãi suất hoặc kỳ vọng thay đổi</td></tr>
<tr><td>Giữ lãi suất trong nước thấp</td><td>Không có kiểm soát vốn, lãi suất thấp hơn nước ngoài sẽ khiến vốn chảy ra; kiểm soát vốn giúp vừa neo tỷ giá vừa tự chủ lãi suất (phá thế bộ ba bất khả thi)</td></tr>
<tr><td>Bảo vệ ngành chiến lược</td><td>Giữ quyền sở hữu trong nước với ngân hàng, năng lượng, viễn thông, quốc phòng</td></tr>
</tbody></table>
<p class="warn">Hạn chế vốn thường <b>làm giảm phúc lợi kinh tế</b> (vốn không chảy tới nơi hiệu quả nhất, chi phí vốn cao hơn). Tuy vậy, trong ngắn hạn chúng từng giúp một số nước đang phát triển tránh được cú sốc dòng vốn vào ra ồ ạt.</p>`,
    },
    {
      title: '8. Tóm tắt và bẫy thường gặp',
      minutes: 4,
      html: `
<table class="plain"><thead><tr><th>Tình huống</th><th>Nhớ</th></tr></thead><tbody>
<tr><td>Tỷ giá P/B</td><td>Số đơn vị P cho 1 B; P/B tăng thì B lên giá</td></tr>
<tr><td>Yết giá trực tiếp</td><td>Nội tệ là đồng định giá</td></tr>
<tr><td>% thay đổi của B / của P</td><td>S<sub>1</sub>/S<sub>0</sub> - 1 / S<sub>0</sub>/S<sub>1</sub> - 1; không đối xứng</td></tr>
<tr><td>Tỷ giá thực P/B</td><td>S × CPI<sub>B</sub> / CPI<sub>P</sub>; lạm phát nước P cao thì tỷ giá thực giảm</td></tr>
<tr><td>Người tham gia</td><td>Sell side: ngân hàng lớn. Buy side: doanh nghiệp, real money, leveraged, nhỏ lẻ, chính phủ</td></tr>
<tr><td>Currency board</td><td>Nội tệ bảo đảm 100% bằng ngoại tệ dự trữ; khác neo thông thường</td></tr>
<tr><td>Fixed peg / target zone</td><td>±1% / ±2%</td></tr>
<tr><td>Mất giá cải thiện cán cân?</td><td>Cần ε<sub>X</sub> + ε<sub>M</sub> &gt; 1; ngắn hạn có thể xấu đi (J-curve)</td></tr>
<tr><td>X - M</td><td>= (S - I) + (T - G); thâm hụt vãng lai đi kèm vốn ròng chảy vào</td></tr>
<tr><td>Mục tiêu hạn chế vốn</td><td>Giảm biến động giá tài sản, giữ tỷ giá cố định, giữ lãi suất thấp, bảo vệ ngành chiến lược</td></tr>
</tbody></table>
<p>Tiếp theo: tab <b>Luyện tập</b> 10 câu, rồi sang EC-08 để tính tỷ giá chéo và tỷ giá kỳ hạn.</p>`,
    },
  ];

  const glossary = {
    fxm: ['Foreign exchange (FX) market', 'Thị trường ngoại hối', 'Thị trường mua bán các đồng tiền, lớn nhất thế giới theo giá trị giao dịch.'],
    spot: ['Spot exchange rate', 'Tỷ giá giao ngay', 'Tỷ giá cho giao dịch thanh toán ngay, với đa số đồng tiền là sau 2 ngày làm việc.'],
    fwd: ['Forward exchange rate', 'Tỷ giá kỳ hạn', 'Tỷ giá chốt hôm nay cho một giao dịch đổi tiền vào ngày tương lai.'],
    sellside: ['Sell side', 'Bên bán', 'Các ngân hàng lớn làm nhà tạo lập thị trường, báo giá và phát hành hợp đồng ngoại hối.'],
    buyside: ['Buy side', 'Bên mua', 'Khách hàng mua dịch vụ ngoại hối: doanh nghiệp, quỹ, nhà đầu tư nhỏ lẻ, chính phủ.'],
    realmoney: ['Real money accounts', 'Tài khoản tiền thật', 'Nhà đầu tư tổ chức ít dùng đòn bẩy như quỹ hưu trí, bảo hiểm, quỹ đầu tư.'],
    leveraged: ['Leveraged accounts', 'Tài khoản dùng đòn bẩy', 'Quỹ phòng hộ, bộ phận tự doanh: dùng đòn bẩy, giao dịch chủ động.'],
    direct: ['Direct quote', 'Yết giá trực tiếp', 'Nội tệ là đồng định giá: 1 đơn vị ngoại tệ bằng bao nhiêu nội tệ.'],
    indirect: ['Indirect quote', 'Yết giá gián tiếp', 'Nội tệ là đồng cơ sở: 1 đơn vị nội tệ bằng bao nhiêu ngoại tệ.'],
    nominal: ['Nominal exchange rate', 'Tỷ giá danh nghĩa', 'Tỷ giá niêm yết trên thị trường, chưa điều chỉnh giá cả.'],
    real: ['Real exchange rate', 'Tỷ giá thực', 'Tỷ giá danh nghĩa điều chỉnh theo mức giá hai nước: S(P/B) x CPI_B / CPI_P.'],
    dollarization: ['Formal dollarization', 'Đô la hóa chính thức', 'Một nước dùng đồng tiền của nước khác làm tiền pháp định.'],
    cba: ['Currency board arrangement', 'Hội đồng tiền tệ', 'Cam kết pháp lý đổi nội tệ lấy một ngoại tệ ở tỷ giá cố định, nội tệ được bảo đảm hoàn toàn bằng dự trữ.'],
    peg: ['Conventional fixed peg', 'Neo tỷ giá cố định truyền thống', 'Neo vào một đồng tiền hoặc rổ tiền với biên độ hẹp khoảng ±1%.'],
    crawl: ['Crawling peg', 'Neo trượt', 'Tỷ giá neo được điều chỉnh định kỳ, thường theo chênh lệch lạm phát.'],
    managed: ['Managed floating', 'Thả nổi có quản lý', 'Ngân hàng trung ương can thiệp theo các chỉ báo kinh tế nhưng không có mục tiêu tỷ giá cụ thể.'],
    trinity: ['Impossible trinity', 'Bộ ba bất khả thi', 'Không thể cùng lúc có tỷ giá cố định, vốn tự do lưu chuyển và chính sách tiền tệ độc lập.'],
    ml: ['Marshall-Lerner condition', 'Điều kiện Marshall-Lerner', 'Mất giá cải thiện cán cân thương mại khi tổng độ co giãn cầu xuất khẩu và nhập khẩu lớn hơn 1 (thương mại ban đầu cân bằng).'],
    jcurve: ['J-curve effect', 'Hiệu ứng tuyến J', 'Sau khi mất giá, cán cân thương mại xấu đi trước rồi mới cải thiện vì độ co giãn ngắn hạn thấp.'],
    caprest: ['Capital restrictions', 'Hạn chế vốn', 'Biện pháp kiểm soát dòng vốn tài chính qua biên giới: cấm, giới hạn, đánh thuế đầu tư nước ngoài, hạn chế chuyển lợi nhuận.'],
  };

  const practice = [
    { q: 'Tỷ giá USD/EUR giảm từ 1,1000 xuống 1,0450. Phần trăm thay đổi của USD so với EUR gần nhất với:', choices: ['-5,00%', '+5,00%', '+5,26%'], answer: 2, explain: 'USD là đồng định giá: 1,1000 / 1,0450 - 1 = +5,26%. Con số -5,00% là phần trăm thay đổi của EUR (đồng cơ sở). Đáp án B chỉ đổi dấu con số của EUR, sai vì hai phần trăm không đối xứng.' },
    { q: 'Với một nhà đầu tư tại Việt Nam, tỷ giá VND/USD = 25.400 là:', choices: ['Yết giá trực tiếp', 'Yết giá gián tiếp', 'Tỷ giá chéo'], answer: 0, explain: 'VND (nội tệ) là đồng định giá nên đây là yết giá trực tiếp. Yết giá gián tiếp có nội tệ làm đồng cơ sở. Tỷ giá chéo là tỷ giá suy ra qua đồng tiền thứ ba.' },
    { q: 'Năm gốc, USD/GBP = 1,30 và CPI hai nước đều bằng 100. Hiện tại USD/GBP = 1,25, CPI Mỹ 106, CPI Anh 103. Tỷ giá thực USD/GBP hiện tại gần nhất với:', choices: ['1,2500', '1,2146', '1,2864'], answer: 1, explain: 'Tỷ giá thực = 1,25 x CPI Anh / CPI Mỹ = 1,25 x 103/106 = 1,2146 (GBP là đồng cơ sở nên CPI Anh ở tử). Đáp án A là tỷ giá danh nghĩa. Đáp án C đặt ngược tỷ lệ CPI.' },
    { q: 'Nếu tỷ giá thực USD/GBP giảm, phát biểu nào đúng nhất?', choices: ['Sức mua của USD đối với hàng hóa Anh giảm', 'Sức mua của USD đối với hàng hóa Anh tăng', 'Sức mua không đổi vì chỉ tỷ giá danh nghĩa mới ảnh hưởng sức mua'], answer: 1, explain: 'Tỷ giá thực P/B giảm nghĩa là cần ít giỏ hàng Mỹ hơn để đổi một giỏ hàng Anh, tức đồng định giá USD mạnh lên về sức mua với hàng Anh.' },
    { q: 'Một nước cam kết theo luật đổi nội tệ lấy USD ở tỷ giá cố định, và lượng nội tệ phát hành được bảo đảm hoàn toàn bằng dự trữ USD. Đây là chế độ:', choices: ['Neo cố định truyền thống', 'Biên độ mục tiêu', 'Hội đồng tiền tệ'], answer: 2, explain: 'Cam kết pháp lý và bảo đảm 100% bằng dự trữ là đặc trưng của currency board (ví dụ Hồng Kông). Neo cố định truyền thống không đòi hỏi bảo đảm hoàn toàn, biên độ khoảng ±1%. Target zone có biên độ rộng hơn.' },
    { q: 'Thương mại của nước A đang cân bằng. Độ co giãn theo giá của cầu xuất khẩu là 0,3 và của cầu nhập khẩu là 0,4. Nếu nội tệ của A mất giá, cán cân thương mại nhiều khả năng sẽ:', choices: ['Xấu đi', 'Cải thiện', 'Không đổi'], answer: 0, explain: 'Điều kiện Marshall-Lerner: 0,3 + 0,4 = 0,7 < 1, nên mất giá làm cán cân xấu đi. Muốn cải thiện, tổng độ co giãn phải lớn hơn 1.' },
    { q: 'Tiết kiệm tư nhân thấp hơn đầu tư 2% GDP và ngân sách chính phủ thâm hụt 3% GDP. Cán cân thương mại (X - M) gần nhất với:', choices: ['-5% GDP', '+1% GDP', '-1% GDP'], answer: 0, explain: 'X - M = (S - I) + (T - G) = -2% + (-3%) = -5%. Đáp án B và C là lấy hiệu thay vì tổng, hoặc sai dấu thâm hụt ngân sách.' },
    { q: 'Mục tiêu nào ít có khả năng là lý do một chính phủ áp đặt hạn chế vốn nhất?', choices: ['Giảm biến động giá tài sản trong nước', 'Tăng mức độ cạnh tranh của nhà đầu tư nước ngoài trong các ngành chiến lược', 'Duy trì tỷ giá cố định'], answer: 1, explain: 'Hạn chế vốn thường nhằm bảo vệ ngành chiến lược khỏi sở hữu nước ngoài, không phải tăng cạnh tranh của nhà đầu tư nước ngoài. Giảm biến động giá tài sản và giữ tỷ giá cố định đều là mục tiêu phổ biến.' },
    { q: 'Một quỹ phòng hộ dùng đòn bẩy để giao dịch ngoại tệ kiếm lời từ biến động tỷ giá được xếp vào nhóm:', choices: ['Real money account', 'Sell side', 'Leveraged account'], answer: 2, explain: 'Quỹ phòng hộ thuộc buy side, nhóm leveraged accounts. Real money accounts (quỹ hưu trí, bảo hiểm) ít dùng đòn bẩy. Sell side là các ngân hàng lớn tạo lập thị trường.' },
    { q: 'Tỷ giá JPY/USD giảm từ 150 xuống 140. Phần trăm thay đổi của JPY so với USD gần nhất với:', choices: ['-6,67%', '+7,14%', '+6,67%'], answer: 1, explain: 'JPY là đồng định giá: 150/140 - 1 = +7,14%. Con số -6,67% là phần trăm thay đổi của USD; +6,67% là đổi dấu sai cách.' },
  ];

  window.LESSONS['EC-07'] = {
    moduleId: 'EC-07',
    calculator: 'BA II Plus',
    warmup: [
      'Ôn QM-04: trong ký hiệu tỷ giá USD/GBP, đồng nào là đồng định giá, đồng nào là đồng cơ sở? 1,25 USD/GBP nghĩa là gì?',
      'Ôn EC-06: thâm hụt thương mại nghĩa là gì? Nếu một nước nhập nhiều hơn xuất, tiền để trả lấy từ đâu?',
      'Đoán trước: nếu VND mất giá so với USD, doanh nghiệp xuất khẩu thủy sản và doanh nghiệp nhập khẩu xăng dầu ai được lợi?',
    ],
    sections,
    glossary,
    practice,
    widgets: {},
    slides: [],
    wrapup: [
      'Viết hai công thức phần trăm thay đổi (đồng cơ sở, đồng định giá) và tự đặt một ví dụ cho mỗi công thức.',
      'Viết công thức tỷ giá thực và giải thích bằng lời vì sao lạm phát cao ở nước định giá làm tỷ giá thực giảm.',
      'Xếp các chế độ tỷ giá từ cứng đến linh hoạt và nêu 4 mục tiêu của hạn chế vốn.',
    ],
  };
}());
