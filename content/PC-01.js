// Bài giảng PC-01 - Portfolio Risk and Return: Part I (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t, frac, keys } = window.CFAH;

  const sections = [
    {
      title: '1. Bức tranh lớn',
      minutes: 6,
      html: `
<p>Topic Portfolio Construction mở đầu bằng câu hỏi mà mọi nhà đầu tư phải trả lời: <b>nên bỏ tiền vào những gì, theo tỷ lệ nào?</b> Module này xây nền móng định lượng cho câu trả lời đó.</p>
<div class="key">Không đánh giá từng tài sản riêng lẻ, mà đánh giá <b>đóng góp của nó vào danh mục</b>. Lợi suất danh mục là trung bình có trọng số, nhưng rủi ro danh mục phụ thuộc vào cách các tài sản <b>cùng biến động</b>. Mỗi nhà đầu tư chọn một điểm khác nhau tùy mức ${t('ra', 'ngại rủi ro')}.</div>
<p>Bảy LOS của module, gom thành 4 bước:</p>
<ol>
  <li><b>Nguyên liệu</b>: đặc điểm lợi suất, rủi ro của các ${t('assetclass', 'lớp tài sản')} chính. LOS 1.</li>
  <li><b>Khẩu vị</b>: ngại rủi ro là gì, hàm hữu dụng, đường bàng quan và cách chọn danh mục tối ưu trên CAL. LOS 2 và 3.</li>
  <li><b>Đo lường</b>: trung bình, phương sai, hiệp phương sai, tương quan từ <b>dữ liệu lịch sử</b>, rồi độ lệch chuẩn danh mục. LOS 4 và 5.</li>
  <li><b>Đa dạng hóa và đường biên</b>: tương quan thấp làm giảm rủi ro ra sao, đường biên phương sai nhỏ nhất, đường biên hiệu quả và danh mục phương sai nhỏ nhất toàn cục. LOS 6 và 7.</li>
</ol>
<p class="tip"><b>Liên hệ với Quant:</b> QM-08 đã dạy danh mục 2 tài sản theo <b>xác suất</b>, MVP, đường biên hiệu quả, CAL, CML và hàm hữu dụng. Ở đây ta chỉ ôn nhanh các công thức đó và tập trung vào phần mới: lớp tài sản, thái độ với rủi ro, thống kê từ <b>dữ liệu lịch sử</b> (chia n - 1) và đa dạng hóa với nhiều tài sản. Nếu quên công thức nào, mở lại QM-08.</p>`,
    },
    {
      title: '2. Đặc điểm các lớp tài sản chính',
      minutes: 16,
      html: `
<p>Nhà đầu tư thường xây danh mục từ các lớp tài sản truyền thống: <b>tiền và tương đương tiền</b> (tín phiếu kho bạc - T-bills), <b>trái phiếu</b> (chính phủ, doanh nghiệp) và <b>cổ phiếu</b> (vốn hóa lớn, vốn hóa nhỏ, trong nước, quốc tế). Ngoài ra còn các tài sản thay thế như bất động sản, hàng hóa, quỹ đầu tư tư nhân (module AI).</p>
<h4>Bức tranh dài hạn: lợi suất cao hơn đi kèm rủi ro cao hơn</h4>
<p>Số liệu lịch sử dài hạn của thị trường Mỹ (gần một thế kỷ) cho một trật tự rất ổn định. Bảng dưới đây làm tròn, chỉ để nhớ <b>thứ tự</b>, không cần thuộc từng con số:</p>
<table class="plain"><thead><tr><th>Lớp tài sản</th><th>Lợi suất bình quân năm (≈)</th><th>Độ lệch chuẩn năm (≈)</th></tr></thead><tbody>
<tr><td>Cổ phiếu vốn hóa nhỏ (small-cap)</td><td>≈ 12%</td><td>≈ 30%</td></tr>
<tr><td>Cổ phiếu vốn hóa lớn (large-cap)</td><td>≈ 10%</td><td>≈ 20%</td></tr>
<tr><td>Trái phiếu dài hạn (doanh nghiệp, chính phủ)</td><td>≈ 5% - 6%</td><td>≈ 8% - 10%</td></tr>
<tr><td>Tín phiếu kho bạc (T-bills)</td><td>≈ 3%</td><td>≈ 3%</td></tr>
<tr><td>Lạm phát</td><td>≈ 3%</td><td></td></tr>
</tbody></table>
<div class="key"><b>Đánh đổi rủi ro - lợi suất (risk-return trade-off):</b> lớp tài sản nào có lợi suất trung bình cao hơn thì cũng biến động mạnh hơn. Phần lợi suất cao hơn T-bills gọi là ${t('riskpremium', 'phần bù rủi ro (risk premium)')}: tiền thưởng cho việc chấp nhận rủi ro.</div>
<p>Dữ liệu quốc tế cho kết luận tương tự: trong dài hạn, ở hầu hết các nước, cổ phiếu có lợi suất cao hơn trái phiếu, trái phiếu cao hơn tín phiếu, và thứ tự rủi ro cũng giống như vậy.</p>

<h4>Lợi suất danh nghĩa và lợi suất thực</h4>
<p>${t('nominal', 'Lợi suất danh nghĩa (nominal return)')} là con số ta đọc được. ${t('real', 'Lợi suất thực (real return)')} đã loại bỏ lạm phát (công thức ở QM-01):</p>
<div class="formula">1 + r<sub>thực</sub> = ${frac('1 + r<sub>danh nghĩa</sub>', '1 + lạm phát')}</div>
<p>Ví dụ: cổ phiếu vốn hóa lớn 10%/năm, lạm phát 3% thì lợi suất thực = 1,10 / 1,03 - 1 = <b>6,80%</b>. Với T-bills (≈ 3%), lợi suất thực gần bằng <b>0</b>: tiền mặt chỉ giữ được sức mua, không làm giàu.</p>

<h4>Trung bình cộng và trung bình nhân</h4>
<p>Với cùng một chuỗi dữ liệu, trung bình nhân (geometric) luôn nhỏ hơn hoặc bằng trung bình cộng (arithmetic), và khoảng cách càng lớn khi biến động càng mạnh. Xấp xỉ hữu ích: G ≈ A - σ<sup>2</sup>/2. Ví dụ A = 12%, σ = 20% thì G ≈ 12% - 0,04/2 = <b>10%</b>. Vì vậy tài sản biến động mạnh "mất" nhiều lợi suất hơn khi ghép lãi qua nhiều năm.</p>

<h4>Ngoài lợi suất trung bình và độ lệch chuẩn</h4>
<ul>
  <li><b>Hình dạng phân phối:</b> lợi suất thực tế không hoàn toàn chuẩn. Cổ phiếu thường có ${t('skew', 'độ lệch âm (negative skewness)')} và ${t('kurt', 'đuôi dày (excess kurtosis)')}: các cú sập lớn xảy ra thường hơn mức mà phân phối chuẩn dự báo. Chỉ dùng σ sẽ <b>đánh giá thấp</b> rủi ro thua lỗ cực đoan.</li>
  <li><b>Đặc điểm thị trường - ${t('liquidity', 'thanh khoản (liquidity)')}:</b> cổ phiếu vốn hóa lớn ở thị trường phát triển dễ mua bán với chi phí thấp. Cổ phiếu vốn hóa nhỏ, thị trường mới nổi, bất động sản, quỹ tư nhân kém thanh khoản hơn: chi phí giao dịch và tác động giá lớn hơn, nên lợi suất ròng thấp hơn lợi suất trên giấy.</li>
  <li><b>Tài sản thay thế:</b> giá thường dựa trên định giá (appraisal) chứ không phải giao dịch hằng ngày, nên σ đo được bị <b>làm mượt</b>, thấp hơn rủi ro thật.</li>
</ul>
<p class="warn"><b>Bẫy:</b> "trái phiếu chính phủ dài hạn là không rủi ro" là sai. Chúng không có rủi ro vỡ nợ (với chính phủ phát hành bằng nội tệ) nhưng giá vẫn biến động mạnh theo lãi suất. Tài sản gần nhất với "phi rủi ro" là tín phiếu kho bạc ngắn hạn.</p>`,
    },
    {
      title: '3. Ngại rủi ro (risk aversion)',
      minutes: 12,
      html: `
<p>Hai công việc có cùng thu nhập kỳ vọng 20 triệu đồng/tháng:</p>
<table class="plain"><thead><tr><th></th><th>Kịch bản (mỗi kịch bản 50%)</th><th>Kỳ vọng</th><th>Độ lệch chuẩn</th></tr></thead><tbody>
<tr><td>Việc 1</td><td>25 triệu hoặc 15 triệu</td><td>20 triệu</td><td>5 triệu</td></tr>
<tr><td>Việc 2</td><td>40 triệu hoặc 0</td><td>20 triệu</td><td>20 triệu</td></tr>
</tbody></table>
<p>Bạn chọn việc nào? Câu trả lời phân loại bạn vào một trong ba nhóm:</p>
<table class="plain"><thead><tr><th>Thái độ</th><th>Khi lợi suất kỳ vọng bằng nhau</th><th>Hệ số A</th></tr></thead><tbody>
<tr><td>${t('riskaverse', 'Ngại rủi ro (risk-averse)')}</td><td>Chọn phương án ít rủi ro hơn (Việc 1)</td><td>A &gt; 0</td></tr>
<tr><td>${t('riskneutral', 'Trung lập với rủi ro (risk-neutral)')}</td><td>Bàng quan, chỉ nhìn kỳ vọng</td><td>A = 0</td></tr>
<tr><td>${t('riskseeking', 'Ưa rủi ro (risk-seeking)')}</td><td>Chọn phương án rủi ro hơn (Việc 2)</td><td>A &lt; 0</td></tr>
</tbody></table>
<p>Cách định nghĩa chuẩn dùng ${t('fairgamble', 'trò chơi công bằng (fair gamble)')}: một canh bạc có giá trị kỳ vọng bằng 0 (ví dụ tung đồng xu, thắng 1 triệu hoặc thua 1 triệu). Người ngại rủi ro <b>từ chối</b>, người trung lập <b>bàng quan</b>, người ưa rủi ro <b>chấp nhận</b>.</p>
<div class="key">Ngại rủi ro <b>không có nghĩa</b> là tránh mọi rủi ro. Người ngại rủi ro vẫn mua cổ phiếu, miễn là được bù đủ bằng lợi suất kỳ vọng cao hơn. A càng lớn thì đòi bù càng nhiều. CFA giả định nhà đầu tư điển hình là ngại rủi ro.</div>

<div class="example"><div class="ex-h">Ví dụ 3.1 - Cùng một cơ hội, bốn quyết định</div>
<p>Một khoản đầu tư có 50% khả năng lãi 25% và 50% khả năng lỗ 5%, nên E(R) = 10% và σ = 15%. Lựa chọn khác là gửi phi rủi ro 7%. Dùng U = E(R) - ½Aσ<sup>2</sup>, mỗi nhà đầu tư chọn gì nếu A = 4, 2, 0, -2?</p>
<details><summary>Xem lời giải</summary>
<table class="plain"><thead><tr><th>A</th><th>U của khoản rủi ro</th><th>So với 7% phi rủi ro</th></tr></thead><tbody>
<tr><td>4</td><td>0,10 - 2 × 0,0225 = 5,50%</td><td>Thấp hơn: <b>gửi phi rủi ro</b></td></tr>
<tr><td>2</td><td>0,10 - 1 × 0,0225 = 7,75%</td><td>Cao hơn: <b>đầu tư</b></td></tr>
<tr><td>0</td><td>10,00%</td><td>Đầu tư (chỉ nhìn kỳ vọng)</td></tr>
<tr><td>-2</td><td>0,10 + 0,0225 = 12,25%</td><td>Đầu tư, và rủi ro còn làm tăng U</td></tr>
</tbody></table>
<p>Cả bốn người cùng nhìn một cơ hội, nhưng chỉ người ngại rủi ro nhiều (A = 4) từ chối. Người A = 2 vẫn là người ngại rủi ro nhưng thấy phần bù 3% (10% - 7%) là đủ.</p></details></div>
<p><b>Hàm ý cho việc chọn danh mục:</b> nhà đầu tư ngại rủi ro chỉ quan tâm đến các danh mục <b>hiệu quả</b> (rủi ro thấp nhất cho mỗi mức lợi suất). Người trung lập với rủi ro chọn danh mục có E(R) cao nhất bất kể σ. Người ưa rủi ro có thể chọn cả danh mục không hiệu quả nếu nó đủ "hấp dẫn" về biến động.</p>`,
    },
    {
      title: '4. Hàm hữu dụng, đường bàng quan và danh mục tối ưu trên CAL',
      minutes: 16,
      html: `
<p>Ôn nhanh từ QM-08 (phần 7 và 8):</p>
<div class="formula">U = E(R) - ½ × A × σ<sup>2</sup> &nbsp;&nbsp;&nbsp; CAL: E(R<sub>C</sub>) = R<sub>f</sub> + ${frac('E(R<sub>P</sub>) - R<sub>f</sub>', 'σ<sub>P</sub>')} × σ<sub>C</sub> &nbsp;&nbsp;&nbsp; y<sup>*</sup> = ${frac('E(R<sub>P</sub>) - R<sub>f</sub>', 'A × σ<sub>P</sub><sup>2</sup>')}</div>
<ul>
  <li>${t('utility', 'Hàm hữu dụng (utility)')} chấm điểm mỗi danh mục; giá trị U chính là ${t('ce', 'lợi suất tương đương chắc chắn')}.</li>
  <li>${t('indiff', 'Đường bàng quan (indifference curve)')} nối các điểm có cùng U. Hình dạng phụ thuộc thái độ: người ngại rủi ro có đường <b>dốc lên và lồi</b> (A càng lớn càng dốc); người trung lập có đường <b>nằm ngang</b>; người ưa rủi ro có đường <b>dốc xuống</b>.</li>
  <li>Đường bàng quan càng cao (về phía trên bên trái) thì càng được ưa thích. Hai đường bàng quan của cùng một người <b>không bao giờ cắt nhau</b>.</li>
</ul>

<h4>Hai bước chọn danh mục tối ưu</h4>
<ol>
  <li><b>Chọn danh mục rủi ro tốt nhất</b> (giống nhau cho mọi người): CAL có độ dốc lớn nhất là đường tiếp xúc với đường biên hiệu quả. Điểm tiếp xúc là ${t('optrisky', 'danh mục rủi ro tối ưu (optimal risky portfolio)')}. Bước này <b>không cần biết A</b>.</li>
  <li><b>Chọn điểm trên CAL</b> (khác nhau cho từng người): ${t('optimal', 'danh mục tối ưu của nhà đầu tư')} là điểm mà đường bàng quan cao nhất <b>tiếp xúc</b> với CAL. Bước này chỉ phụ thuộc A.</li>
</ol>

<div class="example"><div class="ex-h">Ví dụ 4.1 - Hai nhà đầu tư, một CAL</div>
<p>R<sub>f</sub> = 4%. Danh mục rủi ro tối ưu có E = 11%, σ = 20%. Nhà đầu tư Lan có A = 2, nhà đầu tư Minh có A = 5. Mỗi người phân bổ thế nào và đạt hữu dụng bao nhiêu?</p>
<details><summary>Xem lời giải</summary>
<p>Độ dốc CAL = (11% - 4%) / 20% = 0,35 (cả hai dùng chung).</p>
<table class="plain"><thead><tr><th></th><th>Lan (A = 2)</th><th>Minh (A = 5)</th></tr></thead><tbody>
<tr><td>y<sup>*</sup> = 0,07 / (A × 0,04)</td><td><b>87,5%</b></td><td><b>35,0%</b></td></tr>
<tr><td>E(R<sub>C</sub>) = 4% + y<sup>*</sup> × 7%</td><td>10,125%</td><td>6,45%</td></tr>
<tr><td>σ<sub>C</sub> = y<sup>*</sup> × 20%</td><td>17,5%</td><td>7,0%</td></tr>
<tr><td>U tại điểm tối ưu</td><td>7,06%</td><td>5,23%</td></tr>
</tbody></table>
<p>Kiểm tra với Minh: nếu dồn 100% vào danh mục rủi ro, U = 0,11 - 2,5 × 0,04 = 1%, thấp hơn cả gửi phi rủi ro (4%). Điểm 35% cho U = 5,23% cao hơn cả hai thái cực. Đó là ý nghĩa của "tiếp xúc": không điểm nào khác trên CAL cho U cao hơn.</p></details></div>
<p class="warn"><b>Bẫy:</b> so sánh U giữa <b>hai người khác nhau</b> không có ý nghĩa (U của Lan cao hơn không có nghĩa Lan "giàu" hơn). U chỉ dùng để xếp hạng các lựa chọn của <b>cùng một</b> người.</p>
<p class="tip">Người ngại rủi ro hơn nằm <b>gần R<sub>f</sub></b> trên CAL (cho vay nhiều hơn); người ít ngại rủi ro nằm xa hơn, có thể vượt qua danh mục rủi ro (vay ở R<sub>f</sub>, y &gt; 1). Chi tiết vay - cho vay học ở PC-02.</p>`,
    },
    {
      title: '5. Trung bình, phương sai, hiệp phương sai từ dữ liệu lịch sử',
      minutes: 18,
      html: `
<p>QM-08 tính E(R), σ, Cov từ <b>xác suất kịch bản</b>. Trong thực tế ta thường chỉ có <b>chuỗi lợi suất quá khứ</b>, và dùng thống kê mẫu để ước lượng:</p>
<div class="formula">R̄ = ${frac('Σ R<sub>t</sub>', 'T')} &nbsp;&nbsp;&nbsp; s<sup>2</sup> = ${frac('Σ (R<sub>t</sub> - R̄)<sup>2</sup>', 'T - 1')} &nbsp;&nbsp;&nbsp; Cov<sub>A,B</sub> = ${frac('Σ (R<sub>A,t</sub> - R̄<sub>A</sub>)(R<sub>B,t</sub> - R̄<sub>B</sub>)', 'T - 1')} &nbsp;&nbsp;&nbsp; ρ<sub>A,B</sub> = ${frac('Cov<sub>A,B</sub>', 's<sub>A</sub> × s<sub>B</sub>')}</div>
<p>T là số quan sát. ${t('samplevar', 'Phương sai mẫu (sample variance)')} và ${t('samplecov', 'hiệp phương sai mẫu (sample covariance)')} chia cho <b>T - 1</b> để ước lượng không chệch. ${t('corr', 'Hệ số tương quan')} không phụ thuộc chia T hay T - 1 (hai mẫu số triệt tiêu nhau).</p>

<div class="example"><div class="ex-h">Ví dụ 5.1 - Quỹ cổ phiếu và quỹ trái phiếu, 5 năm</div>
<table class="plain"><thead><tr><th>Năm</th><th>Cổ phiếu (A)</th><th>Trái phiếu (B)</th><th>A - R̄<sub>A</sub></th><th>B - R̄<sub>B</sub></th><th>Tích</th></tr></thead><tbody>
<tr><td>1</td><td>18%</td><td>-4%</td><td>0,08</td><td>-0,09</td><td>-0,0072</td></tr>
<tr><td>2</td><td>-6%</td><td>3%</td><td>-0,16</td><td>-0,02</td><td>0,0032</td></tr>
<tr><td>3</td><td>12%</td><td>8%</td><td>0,02</td><td>0,03</td><td>0,0006</td></tr>
<tr><td>4</td><td>25%</td><td>12%</td><td>0,15</td><td>0,07</td><td>0,0105</td></tr>
<tr><td>5</td><td>1%</td><td>6%</td><td>-0,09</td><td>0,01</td><td>-0,0009</td></tr>
</tbody></table>
<p>Tính trung bình, độ lệch chuẩn mẫu, hiệp phương sai mẫu và hệ số tương quan.</p>
<details><summary>Xem lời giải</summary>
<p>R̄<sub>A</sub> = 50% / 5 = <b>10%</b>; R̄<sub>B</sub> = 25% / 5 = <b>5%</b>.</p>
<p>Tổng bình phương độ lệch: A = 0,0064 + 0,0256 + 0,0004 + 0,0225 + 0,0081 = 0,063; B = 0,0081 + 0,0004 + 0,0009 + 0,0049 + 0,0001 = 0,0144.</p>
<p>s<sub>A</sub><sup>2</sup> = 0,063 / 4 = 0,01575, s<sub>A</sub> = <b>12,55%</b>; s<sub>B</sub><sup>2</sup> = 0,0144 / 4 = 0,0036, s<sub>B</sub> = <b>6,00%</b>.</p>
<p>Cov<sub>A,B</sub> = (tổng cột Tích) / 4 = 0,0062 / 4 = <b>0,00155</b>.</p>
<p>ρ = 0,00155 / (0,1255 × 0,06) = <b>0,21</b>: tương quan dương nhưng yếu, nên kết hợp hai quỹ sẽ giảm rủi ro đáng kể (phần 6).</p></details></div>

<h4>BA II Plus: nhập hai cột dữ liệu một lần, đọc tất cả</h4>
${keys([
  ['Mở chế độ nhập dữ liệu', '[2ND] [7]', 'X01'],
  ['Xóa dữ liệu cũ', '[2ND] [CE/C]', 'X01 = 0'],
  ['Năm 1: X = cổ phiếu, Y = trái phiếu', '18 [ENTER] [↓] 4 [+/-] [ENTER] [↓]', 'Y01 = -4'],
  ['Năm 2', '6 [+/-] [ENTER] [↓] 3 [ENTER] [↓]', 'Y02 = 3'],
  ['Năm 3 đến 5 tương tự', '12, 8 ; 25, 12 ; 1, 6', 'Y05 = 6'],
  ['Mở STAT, chọn hồi quy tuyến tính', '[2ND] [8] rồi [2ND] [ENTER] đến khi hiện LIN', 'LIN'],
  ['Đọc kết quả bằng phím mũi tên', '[↓] nhiều lần', 'x̄ = 10, Sx = 12.5499, ȳ = 5, Sy = 6, r = 0.2058'],
])}
<p>Máy không hiện hiệp phương sai. Tính lại: Cov = r × S<sub>x</sub> × S<sub>y</sub> = 0,2058 × 12,5499 × 6 = 15,5 (đơn vị %<sup>2</sup>), tức <b>0,00155</b> ở dạng thập phân.</p>
<p class="warn"><b>Bẫy Sx và σx:</b> với dữ liệu lịch sử (mẫu), đọc <b>Sx</b> (chia n - 1). σx là độ lệch chuẩn tổng thể (chia n): ở ví dụ trên σx = 11,22%, là đáp án nhiễu hay gặp. Ngược lại, trong bài toán theo xác suất của QM-08 thì dùng σx.</p>
<p class="tip"><b>Đơn vị:</b> nếu nhập lợi suất dạng phần trăm (18 thay vì 0,18), phương sai và hiệp phương sai ra đơn vị %<sup>2</sup>: chia cho 10.000 để về thập phân (15,5 thành 0,00155).</p>`,
    },
    {
      title: '6. Độ lệch chuẩn của danh mục',
      minutes: 16,
      html: `
<div class="formula">σ<sub>P</sub><sup>2</sup> = w<sub>A</sub><sup>2</sup>σ<sub>A</sub><sup>2</sup> + w<sub>B</sub><sup>2</sup>σ<sub>B</sub><sup>2</sup> + 2w<sub>A</sub>w<sub>B</sub>Cov<sub>A,B</sub> &nbsp;&nbsp;&nbsp; với Cov<sub>A,B</sub> = ρ<sub>A,B</sub>σ<sub>A</sub>σ<sub>B</sub></div>
<p>Đây là công thức ${t('portsd', 'phương sai danh mục')} đã học ở QM-08, áp dụng với σ và Cov ước lượng từ dữ liệu lịch sử. Với N tài sản: σ<sub>P</sub><sup>2</sup> = Σ<sub>i</sub>Σ<sub>j</sub> w<sub>i</sub>w<sub>j</sub>Cov<sub>i,j</sub> (xem ví dụ ma trận 3 tài sản ở QM-08 phần 5).</p>

<div class="example"><div class="ex-h">Ví dụ 6.1 - Danh mục 60/40 từ dữ liệu ví dụ 5.1</div>
<p>60% quỹ cổ phiếu, 40% quỹ trái phiếu. Dùng s<sub>A</sub><sup>2</sup> = 0,01575, s<sub>B</sub><sup>2</sup> = 0,0036, Cov = 0,00155. Tính E(R<sub>P</sub>) và σ<sub>P</sub>.</p>
<details><summary>Xem lời giải</summary>
<p>E(R<sub>P</sub>) = 0,6 × 10% + 0,4 × 5% = <b>8,00%</b>.</p>
<p>σ<sub>P</sub><sup>2</sup> = 0,36 × 0,01575 + 0,16 × 0,0036 + 2 × 0,6 × 0,4 × 0,00155 = 0,00567 + 0,000576 + 0,000744 = 0,00699.</p>
<p>σ<sub>P</sub> = √0,00699 = <b>8,36%</b>, thấp hơn trung bình có trọng số 0,6 × 12,55% + 0,4 × 6% = 9,93%.</p></details></div>

<div class="example"><div class="ex-h">Ví dụ 6.2 - Kiểm tra bằng cách thứ hai</div>
<p>Tính lợi suất danh mục 60/40 từng năm rồi lấy độ lệch chuẩn mẫu của chuỗi đó. Kết quả có khớp ví dụ 6.1 không?</p>
<details><summary>Xem lời giải</summary>
<p>R<sub>P</sub> từng năm = 0,6R<sub>A</sub> + 0,4R<sub>B</sub>: 9,2%; -2,4%; 10,4%; 19,8%; 3,0%. Trung bình 8,00%, độ lệch chuẩn mẫu = <b>8,36%</b>, khớp hoàn toàn.</p>
<p>Bài học: công thức phương sai danh mục chỉ là cách tính "gián tiếp" từ các thống kê của từng tài sản. Trên BA II Plus, nếu đề cho chuỗi lợi suất, cách thứ hai thường nhanh hơn (nhập 5 giá trị R<sub>P</sub> vào DATA, đọc Sx ở chế độ 1-V).</p></details></div>
<p class="warn"><b>Ba lỗi hay gặp (nhắc lại):</b> quên bình phương trọng số; quên số 2 ở số hạng hiệp phương sai; thế ρ vào chỗ của Cov. Thêm lỗi thứ tư khi dùng dữ liệu lịch sử: trộn σ tổng thể (chia n) của tài sản này với s mẫu (chia n - 1) của tài sản kia.</p>`,
    },
    {
      title: '7. Tương quan thấp hơn hoàn hảo và lợi ích đa dạng hóa',
      minutes: 14,
      html: `
<p>Giữ tỷ trọng 60/40 và σ của ví dụ 6.1, chỉ thay đổi ρ:</p>
<table class="plain"><thead><tr><th>ρ</th><th>σ<sub>P</sub></th><th>Nhận xét</th></tr></thead><tbody>
<tr><td>+1</td><td>9,93%</td><td>= trung bình có trọng số: không có lợi ích</td></tr>
<tr><td>+0,21</td><td>8,36%</td><td>Dữ liệu thực tế của ví dụ</td></tr>
<tr><td>0</td><td>7,90%</td><td></td></tr>
<tr><td>-0,5</td><td>6,66%</td><td></td></tr>
<tr><td>-1</td><td>5,13%</td><td>= |0,6 × 12,55% - 0,4 × 6%|</td></tr>
</tbody></table>
<div class="key">Chỉ cần ρ &lt; +1, σ<sub>P</sub> đã <b>nhỏ hơn</b> trung bình có trọng số các σ, trong khi E(R<sub>P</sub>) không đổi. Đó là ${t('diversify', 'lợi ích đa dạng hóa')}: "bữa trưa miễn phí" duy nhất trong tài chính.</div>

<h4>Danh mục nhiều tài sản, tỷ trọng bằng nhau</h4>
<p>Giả sử N tài sản có cùng σ, cùng hệ số tương quan ρ với nhau, mỗi tài sản tỷ trọng 1/N:</p>
<div class="formula">σ<sub>P</sub><sup>2</sup> = ${frac('σ<sup>2</sup>', 'N')} + ${frac('N - 1', 'N')} × ρσ<sup>2</sup> &nbsp;&nbsp; → &nbsp;&nbsp; khi N rất lớn: σ<sub>P</sub><sup>2</sup> → ρσ<sup>2</sup> = ${t('avgcov', 'hiệp phương sai trung bình')}</div>
<div class="example"><div class="ex-h">Ví dụ 7.1</div>
<p>Mỗi cổ phiếu có σ = 30%, tương quan giữa các cặp ρ = 0,3. σ<sub>P</sub> thay đổi thế nào khi N tăng?</p>
<details><summary>Xem lời giải</summary>
<table class="plain"><thead><tr><th>N</th><th>1</th><th>2</th><th>5</th><th>10</th><th>20</th><th>50</th><th>Rất lớn</th></tr></thead><tbody>
<tr><td>σ<sub>P</sub></td><td>30,00%</td><td>24,19%</td><td>19,90%</td><td>18,25%</td><td>17,36%</td><td>16,81%</td><td>16,43%</td></tr>
</tbody></table>
<p>Giới hạn = √(0,3 × 0,09) = √0,027 = <b>16,43%</b>. Từ 1 lên 10 cổ phiếu, rủi ro giảm mạnh; sau đó thêm cổ phiếu chỉ giảm rất ít. Nếu ρ = 0, σ<sub>P</sub> = σ/√N và tiến về 0.</p></details></div>
<p>Phần rủi ro <b>biến mất</b> khi N tăng (số hạng σ<sup>2</sup>/N) là rủi ro riêng của từng công ty. Phần <b>còn lại</b> (ρσ<sup>2</sup>) đến từ các yếu tố chung mà mọi cổ phiếu cùng chịu, không đa dạng hóa được. Đây chính là cầu nối sang rủi ro hệ thống và phi hệ thống ở PC-02.</p>

<h4>Thử ngay: kéo số tài sản và hệ số tương quan</h4>
<div class="widget" data-widget="diversN"></div>
<p class="warn"><b>Giới hạn của đa dạng hóa:</b> trong khủng hoảng, tương quan giữa các tài sản rủi ro thường <b>tăng vọt</b>, nên lợi ích đa dạng hóa nhỏ đi đúng lúc nhà đầu tư cần nó nhất.</p>`,
    },
    {
      title: '8. Đường biên phương sai nhỏ nhất, đường biên hiệu quả và GMV',
      minutes: 14,
      html: `
<p>Với nhiều tài sản rủi ro, có vô số cách chia tỷ trọng. Tập hợp mọi cặp (σ, E(R)) có thể đạt được gọi là ${t('oppset', 'tập cơ hội đầu tư (investment opportunity set)')}. Trong tập đó:</p>
<ul>
  <li>${t('mvf', 'Đường biên phương sai nhỏ nhất (minimum-variance frontier)')}: với mỗi mức E(R), danh mục có σ nhỏ nhất. Mọi danh mục khác nằm bên phải đường này.</li>
  <li>${t('gmv', 'Danh mục phương sai nhỏ nhất toàn cục (global minimum-variance portfolio, GMV)')}: điểm xa nhất bên trái của đường biên.</li>
  <li>${t('ef', 'Đường biên hiệu quả (efficient frontier)')}: phần đường biên <b>phía trên</b> GMV. Phần phía dưới bị lấn át: cùng σ, luôn có danh mục phía trên cho E(R) cao hơn.</li>
</ul>
<div class="example"><div class="ex-h">Ví dụ 8.1 - GMV từ dữ liệu lịch sử</div>
<p>Dùng dữ liệu ví dụ 5.1 (s<sub>A</sub><sup>2</sup> = 0,01575, s<sub>B</sub><sup>2</sup> = 0,0036, Cov = 0,00155). Tìm GMV của hai quỹ.</p>
<details><summary>Xem lời giải</summary>
<p>w<sub>A</sub> = (s<sub>B</sub><sup>2</sup> - Cov) / (s<sub>A</sub><sup>2</sup> + s<sub>B</sub><sup>2</sup> - 2Cov) = (0,0036 - 0,00155) / (0,01575 + 0,0036 - 0,0031) = 0,00205 / 0,01625 = <b>12,62%</b> cổ phiếu, 87,38% trái phiếu.</p>
<p>E(R) = 0,1262 × 10% + 0,8738 × 5% = <b>5,63%</b>; σ = <b>5,78%</b>.</p>
<p>So với 100% trái phiếu (E = 5%, σ = 6%): GMV vừa có lợi suất <b>cao hơn</b> vừa có rủi ro <b>thấp hơn</b>. Vậy danh mục 100% trái phiếu nằm ở phần không hiệu quả: không nhà đầu tư ngại rủi ro nào nên chọn nó.</p></details></div>

<h4>Đường biên thay đổi khi nào?</h4>
<ul>
  <li><b>Thêm tài sản hoặc lớp tài sản mới</b> (đặc biệt là tài sản tương quan thấp): đường biên dịch sang <b>trái và lên trên</b>, không bao giờ xấu đi, vì luôn có thể đặt tỷ trọng 0 cho tài sản mới.</li>
  <li><b>Cho phép bán khống</b>: mở rộng đường biên ra ngoài khoảng giữa các tài sản.</li>
  <li><b>Thêm tài sản phi rủi ro</b>: đường biên hiệu quả của toàn bộ danh mục trở thành một <b>đường thẳng</b> (CAL tốt nhất) tiếp xúc đường biên tại danh mục rủi ro tối ưu. Đây là điểm xuất phát của PC-02.</li>
</ul>
<p class="tip"><b>Diễn giải:</b> GMV là lựa chọn của người cực kỳ ngại rủi ro <b>khi không có tài sản phi rủi ro</b>. Độ dốc của đường biên hiệu quả giảm dần khi đi lên: mỗi đơn vị rủi ro thêm vào mang lại ít lợi suất hơn đơn vị trước.</p>`,
    },
    {
      title: '9. Tóm tắt và bẫy thường gặp',
      minutes: 8,
      html: `
<table class="plain"><thead><tr><th>Tình huống</th><th>Nhớ</th></tr></thead><tbody>
<tr><td>Lớp tài sản</td><td>Small-cap &gt; large-cap &gt; trái phiếu dài hạn &gt; T-bills, cả về lợi suất lẫn rủi ro; T-bills có lợi suất thực ≈ 0</td></tr>
<tr><td>Phân phối lợi suất</td><td>Cổ phiếu lệch âm, đuôi dày: σ đánh giá thấp rủi ro cực đoan</td></tr>
<tr><td>Ngại rủi ro</td><td>Từ chối fair gamble; vẫn nhận rủi ro nếu được bù. A &gt; 0 ngại, A = 0 trung lập, A &lt; 0 ưa rủi ro</td></tr>
<tr><td>Đường bàng quan</td><td>Ngại rủi ro: dốc lên, lồi; trung lập: nằm ngang; không cắt nhau</td></tr>
<tr><td>Danh mục tối ưu</td><td>Tiếp xúc giữa đường bàng quan cao nhất và CAL; y<sup>*</sup> = (E - R<sub>f</sub>)/(Aσ<sup>2</sup>)</td></tr>
<tr><td>Dữ liệu lịch sử</td><td>Chia T - 1; trên máy đọc Sx, Sy (không phải σx); Cov = r × Sx × Sy</td></tr>
<tr><td>σ danh mục</td><td>Bình phương trọng số, nhân 2 ở Cov, dùng Cov chứ không dùng ρ</td></tr>
<tr><td>Đa dạng hóa</td><td>ρ &lt; +1 là có lợi ích; N lớn thì σ<sub>P</sub><sup>2</sup> → hiệp phương sai trung bình</td></tr>
<tr><td>Đường biên</td><td>Hiệu quả = phía trên GMV; thêm tài sản thì đường biên chỉ tốt lên</td></tr>
</tbody></table>
<p>Tiếp theo: tab <b>Luyện tập</b> 10 câu, rồi sang PC-02 (CML, beta, CAPM).</p>`,
    },
  ];

  const glossary = {
    ra: ['Risk aversion', 'Mức ngại rủi ro', 'Hệ số A trong hàm hữu dụng; A càng lớn thì càng đòi bù nhiều lợi suất cho mỗi đơn vị rủi ro.'],
    assetclass: ['Asset class', 'Lớp tài sản', 'Nhóm tài sản có đặc điểm rủi ro - lợi suất tương tự: tiền, trái phiếu, cổ phiếu, tài sản thay thế.'],
    riskpremium: ['Risk premium', 'Phần bù rủi ro', 'Phần lợi suất kỳ vọng cao hơn lãi suất phi rủi ro, bù cho việc chấp nhận rủi ro.'],
    nominal: ['Nominal return', 'Lợi suất danh nghĩa', 'Lợi suất đo bằng tiền, chưa loại bỏ lạm phát.'],
    real: ['Real return', 'Lợi suất thực', 'Lợi suất sau khi loại bỏ lạm phát: (1 + danh nghĩa)/(1 + lạm phát) - 1.'],
    skew: ['Skewness', 'Độ lệch', 'Mức bất đối xứng của phân phối; lệch âm nghĩa là đuôi thua lỗ dài hơn đuôi lãi.'],
    kurt: ['Excess kurtosis', 'Độ nhọn vượt (đuôi dày)', 'Phân phối có đuôi dày hơn phân phối chuẩn: biến cố cực đoan xảy ra thường hơn dự báo.'],
    liquidity: ['Liquidity', 'Thanh khoản', 'Khả năng mua bán nhanh với chi phí thấp và ít tác động đến giá.'],
    riskaverse: ['Risk-averse investor', 'Nhà đầu tư ngại rủi ro', 'Với cùng lợi suất kỳ vọng thì chọn phương án ít rủi ro hơn; từ chối fair gamble.'],
    riskneutral: ['Risk-neutral investor', 'Nhà đầu tư trung lập với rủi ro', 'Chỉ quan tâm lợi suất kỳ vọng, bàng quan với rủi ro; A = 0.'],
    riskseeking: ['Risk-seeking investor', 'Nhà đầu tư ưa rủi ro', 'Với cùng lợi suất kỳ vọng thì thích phương án rủi ro hơn; A < 0.'],
    fairgamble: ['Fair gamble', 'Trò chơi công bằng', 'Canh bạc có giá trị kỳ vọng bằng 0; dùng để phân loại thái độ với rủi ro.'],
    utility: ['Utility function', 'Hàm hữu dụng', 'U = E(R) - 0,5 x A x σ^2: điểm số dùng để xếp hạng các danh mục của một nhà đầu tư.'],
    ce: ['Certainty equivalent', 'Lợi suất tương đương chắc chắn', 'Lợi suất không rủi ro mà nhà đầu tư thấy ngang bằng với danh mục rủi ro; bằng giá trị U.'],
    indiff: ['Indifference curve', 'Đường bàng quan', 'Tập các cặp rủi ro - lợi suất cho cùng mức hữu dụng; dốc hơn khi A lớn hơn.'],
    optrisky: ['Optimal risky portfolio', 'Danh mục rủi ro tối ưu', 'Điểm tiếp xúc giữa CAL dốc nhất và đường biên hiệu quả; giống nhau với mọi nhà đầu tư cùng kỳ vọng.'],
    optimal: ['Optimal investor portfolio', 'Danh mục tối ưu của nhà đầu tư', 'Điểm trên CAL mà đường bàng quan cao nhất của nhà đầu tư tiếp xúc.'],
    samplevar: ['Sample variance', 'Phương sai mẫu', 'Tổng bình phương độ lệch so với trung bình mẫu, chia cho T - 1.'],
    samplecov: ['Sample covariance', 'Hiệp phương sai mẫu', 'Tổng tích độ lệch của hai chuỗi lợi suất, chia cho T - 1.'],
    corr: ['Correlation coefficient', 'Hệ số tương quan', 'Cov chia cho tích hai độ lệch chuẩn; nằm trong khoảng -1 đến +1.'],
    portsd: ['Portfolio variance / standard deviation', 'Phương sai / độ lệch chuẩn danh mục', 'Tổng w_i x w_j x Cov_ij trên mọi cặp tài sản; độ lệch chuẩn là căn bậc hai.'],
    diversify: ['Diversification benefit', 'Lợi ích đa dạng hóa', 'Rủi ro danh mục nhỏ hơn trung bình có trọng số rủi ro từng tài sản khi tương quan dưới +1.'],
    avgcov: ['Average covariance', 'Hiệp phương sai trung bình', 'Mức rủi ro còn lại của danh mục tỷ trọng đều khi số tài sản rất lớn; không đa dạng hóa được.'],
    oppset: ['Investment opportunity set', 'Tập cơ hội đầu tư', 'Mọi cặp rủi ro - lợi suất có thể đạt được bằng cách kết hợp các tài sản sẵn có.'],
    mvf: ['Minimum-variance frontier', 'Đường biên phương sai nhỏ nhất', 'Tập danh mục có phương sai nhỏ nhất ứng với mỗi mức lợi suất kỳ vọng.'],
    gmv: ['Global minimum-variance portfolio', 'Danh mục phương sai nhỏ nhất toàn cục', 'Danh mục tài sản rủi ro có phương sai thấp nhất; điểm xa nhất bên trái của đường biên.'],
    ef: ['Efficient frontier', 'Đường biên hiệu quả', 'Phần đường biên phương sai nhỏ nhất nằm phía trên GMV.'],
  };

  const practice = [
    { q: 'Theo số liệu lịch sử dài hạn, xếp các lớp tài sản theo độ lệch chuẩn từ cao xuống thấp, thứ tự nào đúng nhất?', choices: ['Cổ phiếu vốn hóa nhỏ, cổ phiếu vốn hóa lớn, trái phiếu dài hạn, tín phiếu kho bạc', 'Cổ phiếu vốn hóa lớn, cổ phiếu vốn hóa nhỏ, tín phiếu kho bạc, trái phiếu dài hạn', 'Trái phiếu dài hạn, cổ phiếu vốn hóa nhỏ, cổ phiếu vốn hóa lớn, tín phiếu kho bạc'], answer: 0, explain: 'Lớp tài sản lợi suất cao hơn thì biến động mạnh hơn: small-cap > large-cap > trái phiếu dài hạn > T-bills. Đáp án B đảo vị trí hai nhóm cổ phiếu và đặt T-bills trên trái phiếu dài hạn. Đáp án C nhầm rằng trái phiếu dài hạn rủi ro hơn cổ phiếu chỉ vì nhạy với lãi suất.' },
    { q: 'Một nhà đầu tư ngại rủi ro được mời tham gia một canh bạc có giá trị kỳ vọng bằng 0. Nhà đầu tư này sẽ:', choices: ['Chấp nhận nếu khoản thắng tối đa đủ lớn', 'Bàng quan giữa tham gia và không tham gia', 'Từ chối tham gia'], answer: 2, explain: 'Người ngại rủi ro từ chối fair gamble vì chịu thêm rủi ro mà không được bù thêm lợi suất kỳ vọng. Bàng quan (B) là hành vi của người trung lập với rủi ro. Chấp nhận (A) là hành vi của người ưa rủi ro.' },
    { q: 'Nhà đầu tư có A = 3 chọn giữa: P (E = 8%, σ = 12%), Q (E = 11%, σ = 20%), R (lợi suất chắc chắn 5%). Theo U = E(R) - 0,5Aσ², nhà đầu tư chọn:', choices: ['R', 'P', 'Q'], answer: 1, explain: 'UP = 0,08 - 1,5 x 0,0144 = 5,84%; UQ = 0,11 - 1,5 x 0,04 = 5,00%; UR = 5,00%. Chọn P. Nếu quên hệ số 0,5 thì UP = 3,68%, UQ = -1%, UR = 5% và sẽ chọn nhầm R (đáp án A). Đáp án C chỉ nhìn lợi suất kỳ vọng cao nhất.' },
    { q: 'Rf = 3%; danh mục rủi ro tối ưu có E = 9%, σ = 15%. Nhà đầu tư có A = 4 nên đặt bao nhiêu phần trăm tài sản vào danh mục rủi ro?', choices: ['66,7%', '100,0%', '10,0%'], answer: 0, explain: 'y* = (9% - 3%)/(4 x 0,0225) = 0,06/0,09 = 66,7%. Đáp án B dùng E = 9% thay cho phần bù 6% ở tử số. Đáp án C dùng σ thay cho σ² ở mẫu số (0,06/0,60).' },
    { q: 'Lợi suất 4 năm của một cổ phiếu: 10%, -2%, 6%, 14%. Độ lệch chuẩn mẫu gần nhất với:', choices: ['5,92%', '6,83%', '11,83%'], answer: 1, explain: 'Trung bình 7%. Tổng bình phương độ lệch = 0,0009 + 0,0081 + 0,0001 + 0,0049 = 0,014. s² = 0,014/3 = 0,004667, s = 6,83%. Đáp án A chia cho 4 (độ lệch chuẩn tổng thể, tức σx trên máy). Đáp án C quên chia cho T - 1 (lấy căn của 0,014).' },
    { q: 'Lợi suất 3 năm của A: 8%, 12%, -2%; của B: 4%, 6%, 2%. Hiệp phương sai mẫu giữa A và B gần nhất với:', choices: ['0,0009', '0,0028', '0,0014'], answer: 2, explain: 'Trung bình A = 6%, B = 4%. Tích độ lệch: 0,02 x 0 + 0,06 x 0,02 + (-0,08) x (-0,02) = 0 + 0,0012 + 0,0016 = 0,0028. Chia T - 1 = 2 được 0,0014. Đáp án A chia cho 3 (công thức tổng thể). Đáp án B quên chia.' },
    { q: 'Danh mục 40% tài sản A (σ = 25%) và 60% tài sản B (σ = 15%), tương quan -0,2. Độ lệch chuẩn danh mục gần nhất với:', choices: ['12,04%', '19,00%', '13,45%'], answer: 0, explain: 'σ² = 0,16 x 0,0625 + 0,36 x 0,0225 + 2 x 0,4 x 0,6 x (-0,2) x 0,25 x 0,15 = 0,01 + 0,0081 - 0,0036 = 0,0145, σ = 12,04%. Đáp án B là trung bình có trọng số (chỉ đúng khi ρ = +1). Đáp án C bỏ quên số hạng hiệp phương sai (coi như ρ = 0).' },
    { q: 'Một danh mục tỷ trọng đều gồm rất nhiều cổ phiếu, mỗi cổ phiếu có σ = 35% và tương quan giữa các cặp là 0,25. Độ lệch chuẩn danh mục tiến tới khoảng:', choices: ['0%', '17,50%', '8,75%'], answer: 1, explain: 'Khi N rất lớn, σP² → ρσ² = 0,25 x 0,1225 = 0,030625, σP = 17,50%. Đáp án A chỉ đúng khi ρ = 0. Đáp án C lấy ρ x σ mà quên rằng giới hạn là căn của ρσ² (√ρ x σ).' },
    { q: 'Phát biểu nào về đa dạng hóa giữa hai tài sản rủi ro với tỷ trọng cố định là đúng nhất?', choices: ['Lợi ích đa dạng hóa chỉ xuất hiện khi hệ số tương quan âm', 'Khi tương quan giảm, lợi suất kỳ vọng danh mục giảm theo độ lệch chuẩn', 'Khi tương quan nhỏ hơn +1, độ lệch chuẩn danh mục nhỏ hơn trung bình có trọng số các độ lệch chuẩn'], answer: 2, explain: 'Chỉ cần ρ < +1 là σP đã thấp hơn trung bình có trọng số. Đáp án A sai vì ρ dương nhưng nhỏ hơn 1 (ví dụ 0,21) vẫn có lợi ích. Đáp án B sai vì E(RP) chỉ phụ thuộc trọng số và E(R) từng tài sản, không phụ thuộc ρ.' },
    { q: 'Danh mục X nằm trên đường biên phương sai nhỏ nhất nhưng ở phía dưới danh mục phương sai nhỏ nhất toàn cục (GMV). Phát biểu nào đúng nhất về X?', choices: ['Có một danh mục khác với cùng độ lệch chuẩn nhưng lợi suất kỳ vọng cao hơn X', 'X là lựa chọn tối ưu của nhà đầu tư ngại rủi ro nhất', 'X có phương sai thấp nhất trong mọi danh mục rủi ro'], answer: 0, explain: 'Phần đường biên dưới GMV không hiệu quả: với cùng σ, điểm đối xứng ở nửa trên cho E(R) cao hơn. Người ngại rủi ro nhất (khi không có tài sản phi rủi ro) chọn chính GMV chứ không phải X (B). Phương sai thấp nhất thuộc về GMV (C).' },
  ];

  // Widget: rủi ro danh mục tỷ trọng đều theo số tài sản N và tương quan ρ.
  const widgets = {
    diversN(el) {
      el.innerHTML = `
        <div class="w-row"><label>Số tài sản N: <b data-o="n">10</b><input type="range" min="1" max="60" step="1" value="10" data-i="n"></label>
        <label>σ mỗi tài sản: <b data-o="s">30%</b><input type="range" min="10" max="50" step="1" value="30" data-i="s"></label>
        <label>Tương quan ρ: <b data-o="r">0,30</b><input type="range" min="0" max="1" step="0.05" value="0.3" data-i="r"></label></div>
        <div class="w-out"><div class="w-price" data-o="p"></div><div class="w-bar"><span data-o="bar"></span><i></i></div><div class="w-note" data-o="note"></div></div>`;
      const q = s => el.querySelector(s);
      const fmt = (x, d = 2) => x.toFixed(d).replace('.', ',');
      const upd = () => {
        const n = +q('[data-i="n"]').value, s = +q('[data-i="s"]').value / 100, r = +q('[data-i="r"]').value;
        const v = (s * s) / n + ((n - 1) / n) * r * s * s;
        const sp = Math.sqrt(v), lim = Math.sqrt(r) * s;
        q('[data-o="n"]').textContent = `${n}`;
        q('[data-o="s"]').textContent = `${Math.round(s * 100)}%`;
        q('[data-o="r"]').textContent = fmt(r);
        q('[data-o="p"]').textContent = `σ danh mục = ${fmt(sp * 100)}% (bằng ${fmt((sp / s) * 100, 0)}% rủi ro của một tài sản)`;
        q('[data-o="bar"]').style.width = `${(sp / s) * 100}%`;
        q('[data-o="note"]').textContent = `Giới hạn khi N rất lớn: √ρ x σ = ${fmt(lim * 100)}%. Phần đã loại bỏ được: ${fmt((s - sp) * 100)} điểm phần trăm. ${r === 0 ? 'Với ρ = 0, rủi ro tiến về 0.' : r === 1 ? 'Với ρ = 1, đa dạng hóa không có tác dụng.' : 'Phần còn lại là rủi ro chung không đa dạng hóa được.'}`;
      };
      el.addEventListener('input', upd);
      upd();
    },
  };

  window.LESSONS['PC-01'] = {
    moduleId: 'PC-01',
    calculator: 'BA II Plus',
    warmup: [
      'Ôn QM-08: viết lại công thức độ lệch chuẩn danh mục 2 tài sản. Nếu ρ = +1 thì σ danh mục bằng gì?',
      'Hai việc làm cùng thu nhập kỳ vọng 20 triệu/tháng: một việc dao động 15 - 25 triệu, một việc 0 - 40 triệu. Bạn chọn việc nào, và điều đó nói gì về bạn?',
      'Khi tính phương sai từ 5 năm dữ liệu lịch sử, bạn chia cho 5 hay cho 4? Vì sao?',
    ],
    sections,
    glossary,
    practice,
    widgets,
    slides: [],
    wrapup: [
      'Giải thích bằng lời của bạn vì sao rủi ro của danh mục 30 cổ phiếu không giảm về 0 dù đã đa dạng hóa.',
      'Vẽ nhanh: đường biên hiệu quả, GMV, CAL tiếp tuyến và đường bàng quan của hai người A = 2 và A = 5. Đánh dấu điểm tối ưu của từng người.',
      'Lỗi nào bạn dễ mắc nhất khi bấm máy (Sx hay σx, đơn vị % hay thập phân)? Ghi lại.',
    ],
  };
}());
