// Bài giảng QM-09 - Simulation of Financial Asset Prices and Returns (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t, frac, keys, pages } = window.CFAH;

  const sections = [
    {
      title: '1. Bức tranh lớn: vì sao cần mô phỏng?',
      minutes: 5,
      html: `
<p>Nhiều câu hỏi trong đầu tư không có công thức đóng: "Xác suất quỹ hưu trí của tôi cạn tiền trước 85 tuổi là bao nhiêu?", "Một quyền chọn trả theo giá <b>trung bình</b> của cổ phiếu trong năm đáng giá bao nhiêu?", "Ngày xấu nhất trong 100 ngày, danh mục có thể lỗ bao nhiêu?".</p>
<div class="key">${t('sim', 'Mô phỏng (simulation)')}: tạo ra <b>rất nhiều kịch bản</b> có thể xảy ra cho các yếu tố rủi ro, tính kết quả cho từng kịch bản, rồi đọc <b>phân phối</b> của kết quả (trung bình, độ lệch chuẩn, phân vị).</div>
<p>Ba phương pháp của module, ứng với 3 LOS, khác nhau ở <b>nguồn của kịch bản</b>:</p>
<table class="plain"><thead><tr><th>Phương pháp</th><th>Kịch bản lấy từ đâu</th><th>LOS</th></tr></thead><tbody>
<tr><td>${t('hist', 'Historical simulation')}</td><td>Đúng các thay đổi đã xảy ra trong quá khứ, mỗi quan sát dùng một lần</td><td>LOS 1</td></tr>
<tr><td>${t('boot', 'Bootstrap resampling')}</td><td>Rút ngẫu nhiên <b>có hoàn lại</b> từ dữ liệu quá khứ</td><td>LOS 2</td></tr>
<tr><td>${t('mc', 'Monte Carlo simulation')}</td><td>Sinh ngẫu nhiên từ một <b>phân phối giả định</b> (ví dụ chuẩn, lognormal)</td><td>LOS 3</td></tr>
</tbody></table>
<p>Trước khi mô phỏng giá tài sản, cần một công cụ nền tảng: ${t('cc', 'lợi suất ghép liên tục')} và ${t('lognormal', 'phân phối lognormal')}. Đây là ngôn ngữ mà hầu hết mô hình mô phỏng giá dùng.</p>`,
    },
    {
      title: '2. Lợi suất ghép liên tục và phân phối lognormal',
      minutes: 14,
      html: `
<h4>Lợi suất ghép liên tục (continuously compounded return)</h4>
<div class="formula">r<sub>t,t+1</sub> = ln(${frac('P<sub>t+1</sub>', 'P<sub>t</sub>')}) = ln(1 + HPR) &nbsp;&nbsp;⇔&nbsp;&nbsp; P<sub>t+1</sub> = P<sub>t</sub> × e<sup>r</sup></div>
<p>Ưu điểm lớn nhất: lợi suất ghép liên tục <b>cộng được theo thời gian</b>. Lợi suất của cả T kỳ bằng tổng lợi suất từng kỳ:</p>
<div class="formula">r<sub>0,T</sub> = r<sub>0,1</sub> + r<sub>1,2</sub> + ... + r<sub>T-1,T</sub> = ln(${frac('P<sub>T</sub>', 'P<sub>0</sub>')})</div>
<div class="example"><div class="ex-h">Ví dụ 2.1</div>
<p>Cổ phiếu từ 50 lên 55, rồi xuống 52. Tính lợi suất ghép liên tục từng kỳ và cả giai đoạn.</p>
<details><summary>Xem lời giải</summary>
<p>r<sub>1</sub> = ln(55/50) = ln(1,10) = <b>9,53%</b>; r<sub>2</sub> = ln(52/55) = <b>-5,61%</b>.</p>
<p>Cả giai đoạn: 9,53% - 5,61% = <b>3,92%</b> = ln(52/50). Cộng thẳng được!</p>
<p>So sánh với lợi suất thường (HPR): +10% rồi -5,45%, cộng lại 4,55%, trong khi HPR thật của cả giai đoạn là 4,00%. HPR <b>không cộng được</b>, phải nhân (1 + r).</p>
${keys([
  ['ln(1,10)', '1.1 [LN]', '0.0953'],
  ['Ngược lại: e^0,0392', '0.0392 [2ND] [LN]', '1.0400'],
])}</details></div>

<h4>Từ phân phối chuẩn đến lognormal</h4>
<p>Nếu lợi suất ghép liên tục mỗi kỳ là ${t('iid', 'độc lập và cùng phân phối (i.i.d.)')} chuẩn với trung bình μ và phương sai σ<sup>2</sup>, thì:</p>
<ul>
  <li>Lợi suất T kỳ (là tổng) cũng có phân phối chuẩn, với trung bình <b>μT</b> và phương sai <b>σ<sup>2</sup>T</b>, tức độ lệch chuẩn <b>σ√T</b>.</li>
  <li>Giá P<sub>T</sub> = P<sub>0</sub> × e<sup>r<sub>0,T</sub></sup> có ${t('lognormal', 'phân phối lognormal')}: ln(P<sub>T</sub>) có phân phối chuẩn.</li>
</ul>
<div class="key">Đặc điểm của lognormal: <b>bị chặn dưới bởi 0</b> (giá không bao giờ âm) và <b>lệch phải</b> (đuôi dài về phía giá cao). Vì vậy dùng lognormal cho <b>giá</b>, còn phân phối chuẩn dùng cho <b>lợi suất ghép liên tục</b>. Nếu giả định chính giá có phân phối chuẩn, mô hình sẽ cho phép giá âm, điều vô lý với cổ phiếu (trách nhiệm hữu hạn).</div>
<div class="example"><div class="ex-h">Ví dụ 2.2 - Quy đổi theo thời gian</div>
<p>Lợi suất ghép liên tục hằng tháng i.i.d. với trung bình 0,8% và độ lệch chuẩn 5%. Trung bình và độ lệch chuẩn của lợi suất năm?</p>
<details><summary>Xem lời giải</summary><p>Trung bình năm = 0,8% × 12 = <b>9,6%</b>. Độ lệch chuẩn năm = 5% × √12 = <b>17,32%</b>.</p>
<p class="warn">Bẫy: nhân độ lệch chuẩn với 12 (ra 60%) là sai. Phương sai mới tỷ lệ với T; độ lệch chuẩn tỷ lệ với √T.</p></details></div>
<p class="tip">Ví dụ đời thường: chiều cao người dao động cộng trừ quanh 170 cm (chuẩn), còn tiền trong tài khoản thay đổi theo <b>phần trăm nhân dồn</b> và không thể âm (lognormal).</p>`,
    },
    {
      title: '3. Khung chung của một bài mô phỏng',
      minutes: 9,
      html: `
<p>Dù dùng phương pháp nào, một bài mô phỏng đều đi qua các bước sau:</p>
<ol>
  <li><b>Xác định đại lượng cần đo</b>: giá trị danh mục cuối kỳ, giá quyền chọn, khoản lỗ trong một ngày, xác suất cạn tiền...</li>
  <li><b>Xác định các ${t('rf', 'yếu tố rủi ro (risk factors)')}</b> ảnh hưởng đến đại lượng đó (giá cổ phiếu, lãi suất, tỷ giá, lạm phát) và mô hình nối chúng với kết quả.</li>
  <li><b>Chọn khung thời gian</b>: chia kỳ hạn thành bao nhiêu kỳ con (ngày, tuần, tháng).</li>
  <li><b>Chọn nguồn kịch bản</b>: dữ liệu lịch sử (historical), rút lại từ lịch sử (bootstrap), hay phân phối giả định với tham số ước lượng (Monte Carlo).</li>
  <li><b>Tạo một kịch bản</b> (một ${t('trial', 'lần thử (trial)')}): sinh giá trị cho từng yếu tố rủi ro qua từng kỳ con, rồi tính kết quả.</li>
  <li><b>Lặp lại</b> hàng nghìn lần.</li>
  <li><b>Tổng hợp</b>: trung bình, độ lệch chuẩn, phân vị của các kết quả. Với giá phái sinh: chiết khấu trung bình payoff về hiện tại.</li>
</ol>
<div class="key">Kết quả mô phỏng <b>chỉ tốt bằng giả định đầu vào</b> ("garbage in, garbage out"). Mô phỏng không loại bỏ ${t('modelrisk', 'rủi ro mô hình')}: nó chỉ cho biết điều gì xảy ra nếu mô hình và tham số là đúng.</div>`,
    },
    {
      title: '4. Historical simulation',
      minutes: 12,
      html: `
<p>${t('hist', 'Historical simulation (mô phỏng lịch sử)')} lấy các thay đổi <b>thực tế đã xảy ra</b> của các yếu tố rủi ro trong một giai đoạn quá khứ, rồi áp từng thay đổi đó lên <b>danh mục hiện tại</b> để xem danh mục hôm nay sẽ lãi lỗ bao nhiêu nếu ngày đó lặp lại.</p>
<ul>
  <li>Mỗi quan sát lịch sử là một kịch bản, dùng <b>đúng một lần</b>. 500 ngày lịch sử cho 500 kịch bản.</li>
  <li>Vì các yếu tố rủi ro được lấy <b>cùng một ngày</b>, mối tương quan thực tế giữa chúng (kể cả khi khủng hoảng) được giữ nguyên.</li>
  <li><b>Không cần giả định phân phối</b>: đuôi dày, độ lệch có trong dữ liệu thì có trong kết quả.</li>
</ul>
<h4>Ứng dụng tiêu biểu: Value at Risk (VaR)</h4>
<p>${t('var', 'VaR')} 5% một ngày là mức lỗ mà danh mục chỉ vượt quá trong 5% số ngày. Với historical simulation: tính lãi lỗ của danh mục hiện tại theo từng ngày lịch sử, sắp xếp từ tệ nhất, đọc phân vị 5%.</p>
<div class="example"><div class="ex-h">Ví dụ 4.1</div>
<p>Danh mục trị giá 10 triệu USD. Áp 200 ngày thay đổi lịch sử lên danh mục hiện tại, 12 kết quả tệ nhất (sắp xếp) là: -5,1%; -4,4%; -3,9%; -3,6%; -3,4%; -3,2%; -3,1%; -3,0%; -2,95%; -2,9%; -2,8%; -2,7%. Ước tính VaR 5% một ngày.</p>
<details><summary>Xem lời giải</summary>
<p>5% × 200 = 10 kịch bản. Theo quy ước đơn giản, VaR là kết quả tệ thứ 10: <b>-2,9%</b>, tức VaR = 2,9% × 10.000.000 = <b>290.000 USD</b>.</p>
<p>Diễn giải: trong 5% số ngày, danh mục được kỳ vọng lỗ <b>ít nhất</b> 290.000 USD (VaR không cho biết lỗ tối đa).</p>
<p class="tip">Có tài liệu lấy quan sát thứ 11 hoặc nội suy giữa thứ 10 và 11. Đề thi CFA sẽ nói rõ quy ước; ở Level I chỉ cần hiểu cách làm.</p></details></div>
<h4>Ưu và nhược điểm</h4>
<table class="plain"><thead><tr><th>Ưu điểm</th><th>Nhược điểm</th></tr></thead><tbody>
<tr><td>Đơn giản, dễ giải thích với lãnh đạo, khách hàng</td><td>Giả định <b>quá khứ lặp lại</b>: kết quả phụ thuộc mạnh vào giai đoạn dữ liệu chọn</td></tr>
<tr><td>Không cần giả định phân phối; giữ đuôi dày và tương quan thực tế</td><td><b>Không tạo được kịch bản chưa từng xảy ra</b>; số kịch bản bị giới hạn bởi độ dài lịch sử</td></tr>
<tr><td>Áp dụng được cho danh mục phi tuyến (có quyền chọn) vì định giá lại toàn bộ</td><td>Không làm được phân tích "nếu - thì" (what-if) bằng cách thay đổi tham số</td></tr>
</tbody></table>`,
    },
    {
      title: '5. Monte Carlo simulation: cơ chế',
      minutes: 15,
      html: `
<p>${t('mc', 'Monte Carlo simulation')} sinh <b>một số lượng lớn kịch bản ngẫu nhiên</b> cho các yếu tố rủi ro từ các <b>phân phối xác suất do người phân tích chỉ định</b>, rồi tính kết quả cho từng kịch bản.</p>
<h4>Từ số ngẫu nhiên đến biến rủi ro</h4>
<ul>
  <li>Máy tính sinh ${t('rng', 'số ngẫu nhiên')} u có phân phối đều trên (0; 1).</li>
  <li>Biến đổi u thành giá trị có phân phối mong muốn bằng ${t('inverse', 'phương pháp biến đổi ngược (inverse transformation)')}: x = F<sup>-1</sup>(u), với F là hàm phân phối tích lũy. Ví dụ u = 0,8413 cho z = +1,0 với phân phối chuẩn tắc.</li>
  <li>Với lợi suất ghép liên tục chuẩn: r = μ + σ × z.</li>
</ul>
<div class="example"><div class="ex-h">Ví dụ 5.1 - Một đường giá</div>
<p>Giá hiện tại 100. Lợi suất ghép liên tục hằng tháng ~ N(μ = 1%, σ = 5%). Ba số z rút từ chuẩn tắc: 0,8; -1,2; 0,3. Tính đường giá 3 tháng.</p>
<details><summary>Xem lời giải</summary>
<table class="plain"><thead><tr><th>Tháng</th><th>z</th><th>r = 1% + 5% × z</th><th>Giá = giá trước × e<sup>r</sup></th></tr></thead><tbody>
<tr><td>1</td><td>0,8</td><td>5,0%</td><td>105,13</td></tr>
<tr><td>2</td><td>-1,2</td><td>-5,0%</td><td>100,00</td></tr>
<tr><td>3</td><td>0,3</td><td>2,5%</td><td>102,53</td></tr>
</tbody></table>
<p>Kiểm tra bằng tính cộng: tổng r = 2,5%, P<sub>3</sub> = 100 × e<sup>0,025</sup> = <b>102,53</b>. Đây chỉ là <b>một</b> lần thử; mô phỏng thật lặp lại hàng chục nghìn lần.</p></details></div>
<h4>Thử ngay: mô phỏng vài đường giá</h4>
<div class="widget" data-widget="monteCarlo"></div>
<p>Hãy để ý: trung bình giá cuối kỳ luôn <b>cao hơn</b> trung vị. Đó là dấu hiệu của phân phối lognormal lệch phải: vài đường tăng rất mạnh kéo trung bình lên, trong khi giá không thể giảm dưới 0.</p>
<h4>Độ chính xác và số lần thử</h4>
<p>Ước lượng từ mô phỏng có ${t('se', 'sai số chuẩn')} tỷ lệ với ${frac('1', '√n')}, với n là số lần thử. Muốn giảm sai số đi một nửa thì phải tăng số lần thử <b>gấp 4</b>.</p>`,
    },
    {
      title: '6. Ứng dụng Monte Carlo trong đầu tư',
      minutes: 10,
      html: `
<table class="plain"><thead><tr><th>Ứng dụng</th><th>Cách dùng Monte Carlo</th></tr></thead><tbody>
<tr><td>${t('var', 'VaR')} và quản trị rủi ro</td><td>Mô phỏng hàng nghìn kịch bản cho các yếu tố rủi ro, định giá lại danh mục, đọc phân vị của phân phối lãi lỗ. Thay đổi tham số được (ví dụ tăng σ) để kiểm tra sức chịu đựng.</td></tr>
<tr><td>Định giá phái sinh phức tạp</td><td>Với quyền chọn ${t('pathdep', 'phụ thuộc đường đi (path-dependent)')}, như quyền chọn châu Á trả theo giá trung bình, không có công thức đơn giản. Mô phỏng nhiều đường giá (trong môi trường trung lập rủi ro), tính payoff mỗi đường, lấy trung bình rồi chiết khấu.</td></tr>
<tr><td>Kế hoạch hưu trí</td><td>Mô phỏng lợi suất danh mục từng năm cùng với dòng rút tiền, đếm tỷ lệ đường mà tiền cạn trước thời hạn: "xác suất thành công" của kế hoạch.</td></tr>
<tr><td>Kiểm định và thống kê</td><td>Tìm phân phối của một thống kê khi không có công thức (ví dụ phân phối mẫu khi dữ liệu không chuẩn).</td></tr>
</tbody></table>
<div class="example"><div class="ex-h">Ví dụ 6.1 - Quyền chọn châu Á</div>
<p>Quyền chọn mua trả max(giá trung bình trong năm - 100; 0). Mô phỏng (trung lập rủi ro) 5 đường giá cho giá trung bình lần lượt 108; 97; 112; 101; 95. Lãi suất phi rủi ro 4%. Ước tính giá quyền chọn.</p>
<details><summary>Xem lời giải</summary>
<p>Payoff: 8; 0; 12; 1; 0. Trung bình = 4,20. Chiết khấu: 4,20 / 1,04 = <b>4,04</b>.</p>
<p>Trong thực tế cần hàng chục nghìn đường để sai số đủ nhỏ; 5 đường chỉ để minh họa quy trình.</p></details></div>
<h4>Ưu và nhược điểm của Monte Carlo</h4>
<table class="plain"><thead><tr><th>Ưu điểm</th><th>Nhược điểm</th></tr></thead><tbody>
<tr><td>Linh hoạt: xử lý được bài toán phức tạp, phi tuyến, nhiều yếu tố rủi ro</td><td>Phụ thuộc hoàn toàn vào giả định phân phối và mô hình định giá</td></tr>
<tr><td>Tạo được kịch bản <b>chưa từng xảy ra</b>; làm được what-if bằng cách đổi tham số</td><td>Tốn nhiều tính toán; cần số lần thử lớn</td></tr>
<tr><td>Số kịch bản không bị giới hạn bởi dữ liệu</td><td>Là phương pháp thống kê, <b>không cho hiểu biết nhân quả</b> như phương pháp giải tích (không cho công thức về mối quan hệ giữa các biến)</td></tr>
</tbody></table>`,
    },
    {
      title: '7. Bootstrap resampling',
      minutes: 14,
      html: `
<p>Khi không biết phân phối tổng thể, ta có thể coi <b>mẫu dữ liệu hiện có</b> là đại diện tốt nhất cho tổng thể. ${t('boot', 'Bootstrap')} làm như sau:</p>
<ol>
  <li>Từ mẫu gốc n quan sát, rút ngẫu nhiên <b>có hoàn lại</b> (with replacement) n quan sát để tạo một ${t('resample', 'mẫu lặp (resample)')}. Một quan sát có thể xuất hiện nhiều lần, một số không xuất hiện.</li>
  <li>Tính thống kê cần quan tâm (trung bình, trung vị, Sharpe...) trên mẫu lặp.</li>
  <li>Lặp lại B lần (hàng nghìn lần).</li>
  <li>Phân phối của B giá trị thống kê cho biết <b>độ bất định</b> của ước lượng: sai số chuẩn = độ lệch chuẩn của B giá trị đó.</li>
</ol>
<div class="example"><div class="ex-h">Ví dụ 7.1</div>
<p>Mẫu gốc 5 lợi suất tháng: 4%, -2%, 6%, 1%, 3% (trung bình 2,4%). Năm mẫu lặp có hoàn lại:</p>
<table class="plain"><thead><tr><th>Mẫu lặp</th><th>Dữ liệu</th><th>Trung bình</th></tr></thead><tbody>
<tr><td>1</td><td>6, 6, -2, 3, 1</td><td>2,8%</td></tr>
<tr><td>2</td><td>4, 1, 1, 3, -2</td><td>1,4%</td></tr>
<tr><td>3</td><td>6, 3, 4, 6, 1</td><td>4,0%</td></tr>
<tr><td>4</td><td>-2, -2, 4, 1, 3</td><td>0,8%</td></tr>
<tr><td>5</td><td>3, 6, 4, 1, 4</td><td>3,6%</td></tr>
</tbody></table>
<details><summary>Xem lời giải: sai số chuẩn của trung bình</summary>
<p>Trung bình của 5 trung bình mẫu lặp = 2,52%. Độ lệch chuẩn của 5 giá trị (chia B - 1 = 4) = <b>1,38%</b>.</p>
<p>So sánh với công thức s/√n: s = 3,05%, s/√5 = <b>1,36%</b>. Hai kết quả rất gần nhau. Ưu điểm của bootstrap: vẫn dùng được cho các thống kê không có công thức sai số chuẩn (trung vị, tỷ số Sharpe...).</p>
${keys([['Nhập 5 trung bình mẫu lặp vào DATA (X01 = 2.8 ... X05 = 3.6), rồi xem STAT 1-V', '[2ND] [7] ... [2ND] [8]', 'Sx = 1.3828']])}</details></div>
<h4>Bootstrap trong mô phỏng đầu tư</h4>
<p>Thay vì giả định phân phối chuẩn, ta tạo đường lợi suất tương lai bằng cách rút ngẫu nhiên có hoàn lại các tháng lịch sử. Nếu danh mục có nhiều tài sản, rút <b>cả hàng</b> (mọi tài sản cùng tháng) để giữ tương quan.</p>
<ul>
  <li><b>Ưu điểm:</b> không giả định phân phối, giữ được đuôi dày và độ lệch thực tế; tạo được nhiều đường hơn hẳn historical simulation (mỗi đường là một tổ hợp mới của các tháng).</li>
  <li><b>Nhược điểm:</b> chỉ rút được những giá trị <b>đã quan sát</b> (không có tháng nào tệ hơn tháng tệ nhất trong lịch sử); rút độc lập từng tháng làm mất cấu trúc theo thời gian (tự tương quan, các giai đoạn biến động dồn cục); phụ thuộc vào chất lượng và độ dài mẫu gốc.</li>
</ul>
<p class="tip">Tóm gọn: Monte Carlo sinh dữ liệu từ <b>phân phối lý thuyết giả định</b>; bootstrap chỉ rút từ <b>kết quả thực tế đã quan sát</b> (phân phối thực nghiệm - empirical distribution).</p>`,
    },
    {
      title: '8. So sánh ba phương pháp',
      minutes: 9,
      html: `
<table class="plain"><thead><tr><th>Tiêu chí</th><th>Historical</th><th>Bootstrap</th><th>Monte Carlo</th></tr></thead><tbody>
<tr><td>Nguồn kịch bản</td><td>Lịch sử, đúng thứ tự, mỗi quan sát 1 lần</td><td>Lịch sử, rút ngẫu nhiên có hoàn lại</td><td>Phân phối giả định với tham số ước lượng</td></tr>
<tr><td>Giả định phân phối</td><td>Không</td><td>Không (dùng phân phối thực nghiệm)</td><td>Có</td></tr>
<tr><td>Số kịch bản</td><td>Bằng số quan sát lịch sử</td><td>Tùy ý</td><td>Tùy ý</td></tr>
<tr><td>Kịch bản chưa từng xảy ra (một kỳ)</td><td>Không</td><td>Không</td><td>Có</td></tr>
<tr><td>Phân tích what-if</td><td>Không</td><td>Hạn chế</td><td>Có (đổi tham số)</td></tr>
<tr><td>Rủi ro chính</td><td>Quá khứ không lặp lại</td><td>Mẫu gốc không đại diện</td><td>Giả định sai (rủi ro mô hình)</td></tr>
</tbody></table>
<div class="key">Câu hỏi để chọn phương pháp: "Tôi tin vào <b>dữ liệu quá khứ</b> hơn hay tin vào <b>mô hình</b> hơn?" Tin dữ liệu thì dùng historical hoặc bootstrap; cần linh hoạt, cần kịch bản mới, cần định giá phái sinh phức tạp thì dùng Monte Carlo.</div>`,
    },
    {
      title: '9. Tóm tắt và bẫy thường gặp',
      minutes: 7,
      html: `
<table class="plain"><thead><tr><th>Tình huống</th><th>Nhớ</th></tr></thead><tbody>
<tr><td>Lợi suất ghép liên tục</td><td>r = ln(P<sub>1</sub>/P<sub>0</sub>) = ln(1 + HPR); luôn nhỏ hơn HPR khi HPR &gt; 0</td></tr>
<tr><td>Cộng theo thời gian</td><td>Lợi suất ghép liên tục cộng được; HPR phải nhân (1 + r)</td></tr>
<tr><td>Quy đổi theo T kỳ</td><td>Trung bình × T, độ lệch chuẩn × √T</td></tr>
<tr><td>Lognormal</td><td>Dùng cho giá: chặn dưới bởi 0, lệch phải; ln(giá) có phân phối chuẩn</td></tr>
<tr><td>Historical simulation</td><td>Mỗi quan sát dùng 1 lần, không giả định phân phối, không tạo được kịch bản mới</td></tr>
<tr><td>Bootstrap</td><td>Rút <b>có hoàn lại</b>, mẫu lặp <b>cùng kích thước n</b> với mẫu gốc</td></tr>
<tr><td>Monte Carlo</td><td>Sinh từ phân phối giả định; linh hoạt nhưng chỉ tốt bằng giả định</td></tr>
<tr><td>Số lần thử</td><td>Sai số chuẩn ∝ 1/√n: giảm sai số một nửa cần gấp 4 số lần thử</td></tr>
<tr><td>VaR</td><td>Mức lỗ tối thiểu trong x% trường hợp xấu nhất, không phải lỗ tối đa</td></tr>
</tbody></table>
<p>Tiếp theo: tab <b>Luyện tập</b> 10 câu (rút ngẫu nhiên từ ngân hàng 30 câu, mỗi lần làm một bộ khác).</p>`,
    },
  ];

  const glossary = {
    sim: ['Simulation', 'Mô phỏng', 'Tạo nhiều kịch bản cho các yếu tố rủi ro, tính kết quả từng kịch bản để có phân phối kết quả.'],
    hist: ['Historical simulation', 'Mô phỏng lịch sử', 'Áp các thay đổi thực tế trong quá khứ của yếu tố rủi ro lên danh mục hiện tại; mỗi quan sát là một kịch bản.'],
    boot: ['Bootstrap resampling', 'Lấy mẫu lặp bootstrap', 'Rút ngẫu nhiên có hoàn lại từ mẫu gốc, cùng kích thước n, lặp nhiều lần để ước lượng phân phối của một thống kê.'],
    resample: ['Resample', 'Mẫu lặp', 'Một mẫu n quan sát được rút có hoàn lại từ mẫu gốc.'],
    mc: ['Monte Carlo simulation', 'Mô phỏng Monte Carlo', 'Sinh một số lượng lớn giá trị ngẫu nhiên từ các phân phối xác suất giả định để tạo phân phối kết quả.'],
    cc: ['Continuously compounded return', 'Lợi suất ghép liên tục', 'ln(P1/P0) = ln(1 + HPR); cộng được qua các kỳ.'],
    lognormal: ['Lognormal distribution', 'Phân phối lognormal', 'Phân phối của e^X khi X chuẩn; chặn dưới bởi 0, lệch phải; dùng mô hình hóa giá tài sản.'],
    iid: ['Independently and identically distributed (i.i.d.)', 'Độc lập và cùng phân phối', 'Các kỳ không ảnh hưởng nhau và có cùng phân phối (cùng μ, σ).'],
    rf: ['Risk factor', 'Yếu tố rủi ro', 'Biến ngẫu nhiên ảnh hưởng đến giá trị chứng khoán, như giá cổ phiếu, lãi suất, tỷ giá.'],
    trial: ['Trial', 'Lần thử', 'Một kịch bản hoàn chỉnh trong mô phỏng, cho một giá trị kết quả.'],
    modelrisk: ['Model risk', 'Rủi ro mô hình', 'Rủi ro kết quả sai do mô hình hoặc giả định phân phối, tham số không đúng.'],
    var: ['Value at Risk (VaR)', 'Giá trị chịu rủi ro', 'Mức lỗ tối thiểu kỳ vọng xảy ra với một xác suất cho trước (ví dụ 5%) trong một khoảng thời gian.'],
    rng: ['Random number generator', 'Bộ sinh số ngẫu nhiên', 'Thuật toán sinh số có phân phối đều trên (0, 1), làm đầu vào cho mô phỏng.'],
    inverse: ['Inverse transformation method', 'Phương pháp biến đổi ngược', 'Biến số ngẫu nhiên đều u thành x = F^-1(u) để có phân phối F mong muốn.'],
    se: ['Standard error', 'Sai số chuẩn', 'Độ lệch chuẩn của một ước lượng; trong mô phỏng giảm theo 1/√n.'],
    pathdep: ['Path-dependent option', 'Quyền chọn phụ thuộc đường đi', 'Payoff phụ thuộc cả đường giá chứ không chỉ giá cuối, ví dụ quyền chọn châu Á (Asian option).'],
  };

  const practice = [
    { q: 'Giá cổ phiếu tăng từ 40 lên 46 trong một năm, không có cổ tức. Lợi suất ghép liên tục gần nhất với:', choices: ['15,00%', '13,98%', '6,07%'], answer: 1, explain: 'r = ln(46/40) = ln(1,15) = 13,98%. Lựa chọn 15,00% là HPR thường. Lựa chọn 6,07% dùng log cơ số 10 thay vì ln.' },
    { q: 'Lợi suất ghép liên tục 4 tuần liên tiếp của một cổ phiếu là 0,5%; -1,2%; 0,9%; 0,4%. Lợi suất ghép liên tục của cả 4 tuần là:', choices: ['0,60%', '0,15%', '0,59%'], answer: 0, explain: 'Lợi suất ghép liên tục cộng được: 0,5 - 1,2 + 0,9 + 0,4 = 0,60%. Lựa chọn 0,15% là trung bình một tuần. Lựa chọn 0,59% nhân (1 + r) như lợi suất thường, sai với lợi suất ghép liên tục.' },
    { q: 'Phát biểu nào về phân phối lognormal là CHÍNH XÁC nhất?', choices: ['Đối xứng quanh giá trị trung bình', 'Có thể nhận giá trị âm khi độ biến động lớn', 'Lệch phải và bị chặn dưới bởi 0'], answer: 2, explain: 'Lognormal là phân phối của e^X nên luôn dương và lệch phải; vì vậy phù hợp mô hình hóa giá. Đối xứng là đặc điểm của phân phối chuẩn.' },
    { q: 'Lợi suất ghép liên tục hằng tháng i.i.d. có độ lệch chuẩn 4%. Độ lệch chuẩn của lợi suất năm gần nhất với:', choices: ['48,00%', '1,15%', '13,86%'], answer: 2, explain: 'σ năm = 4% x √12 = 13,86%. Lựa chọn 48,00% nhân với 12 (chỉ đúng cho trung bình hoặc phương sai). Lựa chọn 1,15% chia cho √12 (đi ngược chiều).' },
    { q: 'Hạn chế chính của historical simulation khi ước tính VaR là:', choices: ['Không tạo được kịch bản chưa từng xảy ra trong giai đoạn dữ liệu', 'Phải giả định lợi suất có phân phối chuẩn', 'Không giữ được tương quan giữa các yếu tố rủi ro'], answer: 0, explain: 'Historical simulation chỉ dùng những gì đã xảy ra. Nó không cần giả định phân phối chuẩn và giữ được tương quan thực tế vì mọi yếu tố được lấy cùng ngày, nên hai phương án còn lại sai.' },
    { q: 'Mô tả nào đúng nhất về bootstrap resampling?', choices: ['Rút ngẫu nhiên không hoàn lại một mẫu nhỏ hơn mẫu gốc', 'Rút ngẫu nhiên có hoàn lại một mẫu cùng kích thước với mẫu gốc, lặp nhiều lần', 'Sinh dữ liệu từ phân phối chuẩn có cùng trung bình và độ lệch chuẩn với mẫu gốc'], answer: 1, explain: 'Bootstrap rút có hoàn lại, kích thước n như mẫu gốc. Rút không hoàn lại mẫu nhỏ hơn là ý tưởng của phương pháp khác (ví dụ jackknife bỏ bớt quan sát). Phương án sinh dữ liệu từ phân phối chuẩn mô tả Monte Carlo.' },
    { q: 'Một mô phỏng Monte Carlo với 10.000 lần thử cho sai số chuẩn của ước lượng là 0,40. Để giảm sai số chuẩn xuống 0,10, cần khoảng bao nhiêu lần thử?', choices: ['40.000', '160.000', '20.000'], answer: 1, explain: 'Sai số chuẩn tỷ lệ với 1/√n. Giảm 4 lần cần tăng n lên 4² = 16 lần: 160.000. Lựa chọn 40.000 coi sai số tỷ lệ với 1/n. Lựa chọn 20.000 coi sai số tỷ lệ với 1/n².' },
    { q: 'Giá hiện tại 50. Lợi suất ghép liên tục hằng tháng r = μ + σz với μ = 0,5%, σ = 4%. Hai giá trị z rút được là 1,25 và -0,5. Giá sau 2 tháng gần nhất với:', choices: ['52,04', '51,96', '51,52'], answer: 0, explain: 'r1 = 0,5% + 5% = 5,5%; r2 = 0,5% - 2% = -1,5%. P2 = 50 x e^(0,04) = 52,04. Lựa chọn 51,96 dùng ghép lãi thường 50 x 1,055 x 0,985. Lựa chọn 51,52 bỏ quên μ.' },
    { q: 'Ứng dụng nào phù hợp NHẤT với Monte Carlo simulation thay vì công thức giải tích?', choices: ['Định giá trái phiếu coupon cố định không có quyền chọn', 'Tính lợi suất kỳ vọng của danh mục từ trọng số và lợi suất từng tài sản', 'Định giá quyền chọn châu Á có payoff phụ thuộc giá trung bình trong năm'], answer: 2, explain: 'Quyền chọn châu Á phụ thuộc đường đi của giá nên khó có công thức đóng; mô phỏng nhiều đường giá là cách tự nhiên. Định giá trái phiếu coupon cố định và tính lợi suất kỳ vọng danh mục đều có công thức trực tiếp (PV dòng tiền, trung bình có trọng số).' },
    { q: 'Phương pháp nào có thể tạo ra lợi suất một ngày tệ hơn ngày tệ nhất trong dữ liệu lịch sử?', choices: ['Historical simulation', 'Bootstrap resampling', 'Monte Carlo simulation'], answer: 2, explain: 'Monte Carlo sinh từ phân phối giả định nên có thể cho giá trị ngoài phạm vi đã quan sát. Historical simulation và bootstrap chỉ dùng các giá trị lịch sử nên lợi suất một ngày không thể tệ hơn mức tệ nhất đã xảy ra.' },
    { q: 'Danh mục trị giá 20 triệu USD. Áp 500 ngày thay đổi lịch sử của các yếu tố rủi ro lên danh mục hiện tại, 7 kết quả tệ nhất (đã sắp xếp) là: -4,6%; -3,8%; -3,3%; -3,1%; -2,7%; -2,6%; -2,4%. Theo quy ước lấy kết quả tệ thứ (1% × số kịch bản), VaR 1% một ngày gần nhất với:', choices: ['920.000 USD', '540.000 USD', '700.000 USD'], answer: 1, explain: '1% × 500 = 5 kịch bản, nên VaR là kết quả tệ thứ 5: -2,7% × 20.000.000 = 540.000 USD. Trong 1% số ngày, danh mục được kỳ vọng lỗ ít nhất mức này. Lựa chọn 920.000 USD là khoản lỗ tệ nhất (-4,6%), nhầm VaR với lỗ tối đa. Lựa chọn 700.000 USD lấy trung bình 5 kết quả tệ nhất (-3,5%), không phải phân vị.' },
    { q: 'Ưu điểm nào sau đây là của historical simulation?', choices: ['Không cần giả định phân phối và giữ được đuôi dày cũng như tương quan thực tế giữa các yếu tố rủi ro', 'Có thể tạo ra những kịch bản cực đoan chưa từng xảy ra trong dữ liệu', 'Số kịch bản có thể lớn tùy ý, không phụ thuộc độ dài dữ liệu'], answer: 0, explain: 'Historical simulation dùng đúng các thay đổi đã xảy ra, các yếu tố rủi ro lấy cùng một ngày, nên giữ nguyên đuôi dày và tương quan thực tế mà không cần giả định phân phối. Tạo kịch bản chưa từng xảy ra là ưu điểm của Monte Carlo. Số kịch bản của historical simulation bằng đúng số quan sát lịch sử, không tùy ý.' },
    { q: 'Giám đốc rủi ro muốn biết VaR của danh mục sẽ thay đổi thế nào nếu độ biến động của thị trường tăng gấp rưỡi so với mức lịch sử. Hạn chế của historical simulation trong tình huống này là:', choices: ['Nó đòi hỏi giả định lợi suất có phân phối chuẩn', 'Nó không xử lý được danh mục có quyền chọn', 'Nó không cho phép phân tích "nếu - thì" bằng cách thay đổi tham số'], answer: 2, explain: 'Historical simulation chỉ áp lại đúng các thay đổi đã xảy ra, nên không thể đổi tham số (như tăng σ) để làm phân tích what-if; Monte Carlo làm được. Historical simulation không cần giả định phân phối, và xử lý được danh mục có quyền chọn vì định giá lại toàn bộ danh mục theo từng kịch bản.' },
    { q: 'Từ một mẫu lợi suất tháng, nhà phân tích tạo 5 mẫu lặp bootstrap và tính được trung bình của từng mẫu lặp: 1,8%; 2,6%; 1,2%; 2,2%; 3,0%. Ước lượng bootstrap cho sai số chuẩn của trung bình mẫu gần nhất với:', choices: ['0,70%', '0,62%', '0,31%'], answer: 0, explain: 'Sai số chuẩn bootstrap là độ lệch chuẩn của các trung bình mẫu lặp: trung bình = 2,16%, độ lệch chuẩn (chia B - 1 = 4) = 0,70%. Lựa chọn 0,62% chia cho B = 5. Lựa chọn 0,31% còn chia thêm cho √5, nhưng các trung bình mẫu lặp đã là phân phối của X̄ nên không chia √n nữa. (Thực tế cần hàng nghìn mẫu lặp; 5 chỉ để minh họa.)' },
    { q: 'Nhà phân tích muốn ước lượng sai số chuẩn của tỷ số Sharpe ước tính từ 120 tháng dữ liệu, nhưng không có công thức đơn giản cho sai số chuẩn này. Cách phù hợp nhất là:', choices: ['Dùng công thức s/√n với s là độ lệch chuẩn lợi suất', 'Bootstrap: tính tỷ số Sharpe trên nhiều mẫu lặp rút có hoàn lại, rồi lấy độ lệch chuẩn của các giá trị đó', 'Historical simulation: áp 120 tháng lịch sử lên danh mục hiện tại'], answer: 1, explain: 'Bootstrap dùng được cho mọi thống kê, kể cả những thống kê không có công thức sai số chuẩn như trung vị hay tỷ số Sharpe. s/√n là sai số chuẩn của trung bình, không phải của tỷ số Sharpe. Historical simulation tạo phân phối lãi lỗ của danh mục, không ước lượng sai số chuẩn của một thống kê.' },
    { q: 'So với historical simulation dùng cùng 10 năm dữ liệu tháng, bootstrap resampling có ưu điểm là:', choices: ['Tạo được lợi suất một tháng tệ hơn tháng tệ nhất trong lịch sử', 'Không phụ thuộc vào chất lượng và độ dài của mẫu gốc', 'Tạo được số đường lợi suất nhiều hơn hẳn, mỗi đường là một tổ hợp mới của các tháng đã quan sát'], answer: 2, explain: 'Rút ngẫu nhiên có hoàn lại cho phép tạo hàng nghìn đường, mỗi đường là một tổ hợp mới, trong khi historical simulation chỉ có đúng số kịch bản bằng số quan sát. Bootstrap chỉ rút từ giá trị đã quan sát nên không tạo được tháng tệ hơn tháng tệ nhất, và vẫn phụ thuộc vào mẫu gốc.' },
    { q: 'Một hạn chế của bootstrap khi rút độc lập từng tháng lợi suất để mô phỏng đường lợi suất tương lai là:', choices: ['Phải giả định lợi suất có phân phối chuẩn', 'Làm mất cấu trúc theo thời gian như tự tương quan và các giai đoạn biến động dồn cục', 'Không giữ được độ lệch và đuôi dày của dữ liệu'], answer: 1, explain: 'Rút từng tháng một cách độc lập phá vỡ thứ tự thời gian, nên mất tự tương quan và hiện tượng biến động dồn cục (volatility clustering). Bootstrap không cần giả định chuẩn và giữ được độ lệch, đuôi dày vì dùng chính phân phối thực nghiệm.' },
    { q: 'Nhà phân tích dùng bootstrap để mô phỏng một danh mục gồm cổ phiếu, trái phiếu và vàng từ 240 tháng lịch sử. Để giữ được tương quan giữa ba tài sản, cô nên:', choices: ['Rút ngẫu nhiên cả hàng dữ liệu, tức lợi suất của cả ba tài sản trong cùng một tháng', 'Rút riêng lợi suất của từng tài sản từ các tháng khác nhau', 'Thay bootstrap bằng việc sinh từng tài sản từ phân phối chuẩn độc lập'], answer: 0, explain: 'Rút nguyên hàng (cùng tháng cho mọi tài sản) giữ được quan hệ đồng thời giữa chúng, nên giữ tương quan thực tế. Rút riêng từng tài sản từ các tháng khác nhau làm tương quan gần bằng 0. Sinh từ phân phối chuẩn độc lập là Monte Carlo và cũng bỏ mất tương quan.' },
    { q: 'Trong một mô phỏng Monte Carlo, lợi suất ghép liên tục tháng có phân phối chuẩn với μ = 0,6% và σ = 4%. Máy sinh số ngẫu nhiên đều u = 0,0228. Dùng phương pháp biến đổi ngược, lợi suất mô phỏng tháng đó gần nhất với:', choices: ['0,69%', '8,60%', '-7,40%'], answer: 2, explain: 'Biến đổi ngược: z = N^-1(0,0228) ≈ -2,00 (diện tích bên trái 2,28%). r = μ + σz = 0,6% + 4% × (-2,00) = -7,40%. Lựa chọn 0,69% dùng thẳng u thay cho z. Lựa chọn 8,60% lấy nhầm dấu z (+2,00), tức đuôi phải.' },
    { q: 'Giá hiện tại 80. Lợi suất ghép liên tục tháng r = μ + σz với μ = 0,5% và σ = 6%. Ba giá trị z rút được là 1,0; -0,5; 0,8. Giá mô phỏng sau 3 tháng gần nhất với:', choices: ['87,47', '87,80', '86,49'], answer: 1, explain: 'r = 6,5%; -2,5%; 5,3%; tổng = 9,3%. Lợi suất ghép liên tục cộng được: P3 = 80 × e^0,093 = 87,80. Lựa chọn 87,47 ghép như lợi suất thường 80 × 1,065 × 0,975 × 1,053. Lựa chọn 86,49 bỏ quên μ, chỉ dùng σz.' },
    { q: 'Một quyền chọn bán châu Âu kỳ hạn 1 năm có giá thực hiện 50. Mô phỏng Monte Carlo (trung lập rủi ro) cho 4 giá cuối kỳ: 44; 53; 47; 58. Lãi suất phi rủi ro 5%. Giá trị ước tính của quyền chọn gần nhất với:', choices: ['2,14', '2,25', '4,29'], answer: 0, explain: 'Payoff = max(50 - S; 0): 6; 0; 3; 0. Trung bình payoff = 2,25; chiết khấu: 2,25/1,05 = 2,14. Lựa chọn 2,25 quên chiết khấu về hiện tại. Lựa chọn 4,29 chỉ lấy trung bình hai đường có payoff dương, bỏ qua các đường payoff bằng 0. (4 đường chỉ để minh họa; thực tế cần hàng chục nghìn đường.)' },
    { q: 'Một kế hoạch hưu trí được mô phỏng Monte Carlo với 10.000 đường lợi suất và dòng rút tiền hằng năm. Có 1.350 đường mà tiền cạn trước khi khách hàng 90 tuổi. "Xác suất thành công" của kế hoạch là:', choices: ['13,50%', '1.350 trên 10.000 là quá ít để kết luận, cần historical simulation', '86,50%'], answer: 2, explain: 'Xác suất thành công = tỷ lệ đường không cạn tiền = (10.000 - 1.350)/10.000 = 86,50%. Lựa chọn 13,50% là xác suất thất bại. 10.000 lần thử là đủ lớn; historical simulation không phù hợp vì lịch sử không đủ dài để tạo hàng nghìn đường nhiều thập kỷ.' },
    { q: 'Lợi suất ghép liên tục của một quỹ trong ba năm lần lượt là 12%, -5% và 8%. Lợi suất nắm giữ (HPR) của cả giai đoạn ba năm gần nhất với:', choices: ['15,00%', '16,18%', '14,91%'], answer: 1, explain: 'Lợi suất ghép liên tục cộng được: 12% - 5% + 8% = 15% là lợi suất ghép liên tục của cả giai đoạn. HPR = e^0,15 - 1 = 16,18%. Lựa chọn 15,00% dừng ở tổng, quên đổi sang HPR. Lựa chọn 14,91% nhân (1 + r) như thể đây là lợi suất thường.' },
    { q: 'Một cổ phiếu giảm 20% trong năm (không có cổ tức). Lợi suất ghép liên tục của năm đó gần nhất với:', choices: ['-22,31%', '-20,00%', '-18,23%'], answer: 0, explain: 'r = ln(1 + HPR) = ln(0,80) = -22,31%. Khi HPR âm, lợi suất ghép liên tục âm nhiều hơn HPR. Lựa chọn -20,00% là HPR. Lựa chọn -18,23% lấy -ln(1,20), nhầm khi đổi dấu.' },
    { q: 'Trong một mô phỏng Monte Carlo giá cổ phiếu sau 5 năm, với lợi suất ghép liên tục i.i.d. chuẩn, nhà phân tích nhiều khả năng quan sát thấy:', choices: ['Trung bình giá cuối kỳ bằng trung vị vì phân phối đối xứng', 'Một số đường cho giá cuối kỳ âm khi độ biến động lớn', 'Trung bình giá cuối kỳ cao hơn trung vị'], answer: 2, explain: 'Giá cuối kỳ có phân phối lognormal: lệch phải, bị chặn dưới bởi 0. Vài đường tăng rất mạnh kéo trung bình lên trên trung vị. Đối xứng là đặc điểm của lợi suất ghép liên tục (chuẩn), không phải của giá. Giá = P0 × e^r luôn dương, nên không có đường nào cho giá âm.' },
    { q: 'Nếu lợi suất ghép liên tục hằng kỳ của một cổ phiếu độc lập và có cùng phân phối chuẩn, thì lợi suất ghép liên tục T kỳ và giá cổ phiếu sau T kỳ lần lượt có phân phối:', choices: ['Lognormal và chuẩn', 'Chuẩn và lognormal', 'Chuẩn và chuẩn'], answer: 1, explain: 'Lợi suất ghép liên tục T kỳ là tổng các lợi suất chuẩn i.i.d. nên cũng chuẩn (trung bình μT, phương sai σ²T). Giá PT = P0 × e^r, tức ln(PT) chuẩn, nên giá có phân phối lognormal. Phương án "lognormal và chuẩn" đảo ngược hai phân phối; phương án "chuẩn và chuẩn" cho phép giá âm.' },
    { q: 'Một quỹ muốn ước tính phân phối giá trị danh mục trái phiếu nếu lãi suất biến động mạnh hơn bất kỳ giai đoạn nào trong 15 năm dữ liệu, đồng thời giữ nguyên tương quan giữa các yếu tố rủi ro ở mức giả định. Phương pháp phù hợp nhất là:', choices: ['Historical simulation', 'Bootstrap resampling', 'Monte Carlo simulation'], answer: 2, explain: 'Cần kịch bản vượt ngoài lịch sử và có thể chủ động đặt tham số (độ biến động, tương quan): đó là Monte Carlo. Historical simulation và bootstrap chỉ dùng các thay đổi đã quan sát, nên không tạo được mức biến động lớn hơn lịch sử.' },
    { q: 'Nhà phân tích muốn tạo 5.000 đường lợi suất tháng trong 20 năm cho một danh mục, nhưng chỉ có 10 năm dữ liệu tháng và không muốn giả định bất kỳ phân phối lý thuyết nào. Phương pháp phù hợp nhất là:', choices: ['Historical simulation', 'Bootstrap resampling', 'Monte Carlo simulation với phân phối chuẩn'], answer: 1, explain: 'Bootstrap rút có hoàn lại từ phân phối thực nghiệm, nên tạo được bao nhiêu đường tùy ý, dài bao nhiêu tùy ý, mà không giả định phân phối. Historical simulation chỉ có 120 kịch bản tháng theo đúng thứ tự, không đủ cho 5.000 đường 20 năm. Monte Carlo với phân phối chuẩn vi phạm yêu cầu không giả định phân phối.' },
    { q: 'Phát biểu nào về Monte Carlo simulation là CHÍNH XÁC nhất?', choices: ['Kết quả chỉ tốt bằng giả định về phân phối và mô hình; phương pháp không cho hiểu biết về quan hệ nhân quả như lời giải giải tích', 'Phương pháp loại bỏ rủi ro mô hình vì dùng rất nhiều kịch bản', 'Phương pháp chỉ dùng được khi lợi suất có phân phối chuẩn'], answer: 0, explain: 'Monte Carlo là phương pháp thống kê: "garbage in, garbage out", và nó không đưa ra công thức cho thấy các biến tác động lẫn nhau thế nào. Tăng số kịch bản chỉ giảm sai số mô phỏng, không loại bỏ rủi ro mô hình. Monte Carlo dùng được với bất kỳ phân phối nào người phân tích chỉ định (lognormal, đuôi dày...).' },
    { q: 'Định giá quyền chọn châu Á kỳ hạn 1 năm, trả theo giá trung bình cuối mỗi tháng, bằng Monte Carlo với 1 yếu tố rủi ro và 20.000 lần thử. Mỗi lần thử cần bao nhiêu số ngẫu nhiên z?', choices: ['12', '1', '20.000'], answer: 0, explain: 'Mỗi lần thử là một đường giá đi qua 12 kỳ con (tháng), mỗi kỳ cần một z để sinh lợi suất tháng, nên cần 12 số z; tổng cộng 12 × 20.000 = 240.000 số. Lựa chọn 1 chỉ đủ sinh giá cuối kỳ, không đủ tính giá trung bình theo đường đi. Lựa chọn 20.000 là số lần thử, không phải số z trong một lần thử.' },
  ];

  // Widget: mô phỏng Monte Carlo vài đường giá (lợi suất ghép liên tục chuẩn, 52 tuần).
  const widgets = {
    monteCarlo(el) {
      el.innerHTML = `
        <div class="w-row"><label>Trung bình lợi suất năm μ: <b data-o="mu">8%</b><input type="range" min="-10" max="20" step="1" value="8" data-i="mu"></label>
        <label>Độ biến động năm σ: <b data-o="sg">25%</b><input type="range" min="5" max="60" step="5" value="25" data-i="sg"></label>
        <label>Số đường giá: <b data-o="n">20</b><input type="range" min="5" max="200" step="5" value="20" data-i="n"></label></div>
        <p><button type="button" class="btn small" data-i="run">Chạy lại mô phỏng</button></p>
        <div class="w-out"><div data-o="svg"></div><div class="w-price" data-o="p"></div><div class="w-note" data-o="note"></div></div>`;
      const q = s => el.querySelector(s);
      const fmt = (x, d = 2) => x.toFixed(d).replace('.', ',');
      const z = () => { let u = 0, v = 0; while (u === 0) u = Math.random(); while (v === 0) v = Math.random(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v); };
      const run = () => {
        const mu = +q('[data-i="mu"]').value / 100, sg = +q('[data-i="sg"]').value / 100, n = +q('[data-i="n"]').value;
        q('[data-o="mu"]').textContent = `${Math.round(mu * 100)}%`;
        q('[data-o="sg"]').textContent = `${Math.round(sg * 100)}%`;
        q('[data-o="n"]').textContent = `${n}`;
        const steps = 52, m = mu / steps, s = sg / Math.sqrt(steps), paths = [];
        for (let k = 0; k < n; k++) { const p = [100]; for (let i = 1; i <= steps; i++) p.push(p[i - 1] * Math.exp(m + s * z())); paths.push(p); }
        const fin = paths.map(p => p[steps]).sort((a, b) => a - b);
        const mean = fin.reduce((a, b) => a + b, 0) / n, med = n % 2 ? fin[(n - 1) / 2] : (fin[n / 2 - 1] + fin[n / 2]) / 2;
        const lo = Math.min(...paths.map(p => Math.min(...p))), hi = Math.max(...paths.map(p => Math.max(...p)));
        const W = 600, H = 280, l = 50, r = 590, tp = 15, b = 245;
        const xs = i => l + (i / steps) * (r - l), ys = v => b - ((v - lo) / (hi - lo || 1)) * (b - tp);
        let svg = `<svg viewBox="0 0 ${W} ${H}" class="sv" style="max-height:320px" role="img" aria-label="Các đường giá mô phỏng">`;
        svg += `<line x1="${l}" y1="${b}" x2="${r}" y2="${b}" class="sv-axis"/><line x1="${l}" y1="${tp}" x2="${l}" y2="${b}" class="sv-axis"/>`;
        svg += `<line x1="${l}" y1="${ys(100)}" x2="${r}" y2="${ys(100)}" class="sv-dash"/><text x="${l - 6}" y="${ys(100) + 5}" class="sv-muted" text-anchor="end">100</text>`;
        svg += `<text x="${l - 6}" y="${tp + 10}" class="sv-muted" text-anchor="end">${Math.round(hi)}</text><text x="${l - 6}" y="${b}" class="sv-muted" text-anchor="end">${Math.round(lo)}</text>`;
        paths.forEach(p => { svg += `<polyline points="${p.map((v, i) => `${xs(i).toFixed(1)},${ys(v).toFixed(1)}`).join(' ')}" fill="none" class="${p[steps] >= 100 ? 'sv-up' : 'sv-down'}" style="stroke-width:1.2;opacity:0.7"/>`; });
        svg += `<text x="${(l + r) / 2}" y="${H - 4}" class="sv-muted">Tuần 0 đến tuần 52 (giá ban đầu 100)</text></svg>`;
        q('[data-o="svg"]').innerHTML = svg;
        const below = fin.filter(v => v < 100).length / n;
        q('[data-o="p"]').textContent = `Giá cuối kỳ: trung bình ${fmt(mean)} · trung vị ${fmt(med)}`;
        q('[data-o="note"]').textContent = `${fmt(below * 100, 0)}% số đường kết thúc dưới 100. Lý thuyết: trung vị = 100 x e^μ = ${fmt(100 * Math.exp(mu))}; trung bình = 100 x e^(μ + σ²/2) = ${fmt(100 * Math.exp(mu + sg * sg / 2))}. Tăng số đường để kết quả mô phỏng tiến gần lý thuyết.`;
      };
      el.addEventListener('input', run);
      q('[data-i="run"]').addEventListener('click', run);
      run();
    },
  };

  window.LESSONS['QM-09'] = {
    moduleId: 'QM-09',
    calculator: 'BA II Plus',
    warmup: [
      'Ôn module trước: viết lại công thức độ lệch chuẩn của danh mục 2 tài sản. Hệ số tương quan thấp có tác dụng gì?',
      'Ôn QM-04: 1.000 USD ghép lãi liên tục 5% trong 3 năm thành bao nhiêu? Công thức nào có số e?',
      'Một cổ phiếu tăng 50% rồi giảm 50%. Bạn lãi hay lỗ? Vì sao lợi suất thường không "cộng" được?',
    ],
    sections,
    glossary,
    practice,
    widgets,
    slides: [],
    wrapup: [
      'Giải thích bằng lời cho một người không học tài chính: historical simulation, bootstrap và Monte Carlo khác nhau ở điểm nào?',
      'Vì sao giá dùng phân phối lognormal còn lợi suất ghép liên tục dùng phân phối chuẩn?',
      'Nếu phải ước tính xác suất kế hoạch hưu trí của bạn thất bại, bạn chọn phương pháp nào và cần những giả định gì? Ghi lại điểm chưa rõ.',
    ],
  };
}());
