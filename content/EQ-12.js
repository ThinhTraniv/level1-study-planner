// Bài giảng EQ-12 - The Capital Asset Pricing Model, Market Model, and Other Factor-Based Equity Models (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t, frac, keys } = window.CFAH;

  const sections = [
    {
      title: '1. Bức tranh lớn',
      minutes: 4,
      html: `
<p>Mọi mô hình định giá ở EQ-06 đến EQ-08 đều cần một con số: ${t('re', 'lợi suất yêu cầu trên vốn cổ phần (required return on equity)')}, hay chi phí vốn cổ phần. Ở EQ-11 ta đã thấy chỉ 1 điểm phần trăm chênh lệch trong chi phí vốn có thể đổi giá trị hàng chục phần trăm. Module này trả lời: <b>con số đó lấy từ đâu?</b></p>
<div class="key">Ba công cụ, từ đơn giản đến phức tạp: <b>CAPM</b> (một yếu tố: thị trường) → <b>mô hình thị trường</b> (cách ước lượng beta từ dữ liệu) → <b>APT và mô hình đa yếu tố</b> (nhiều nguồn rủi ro hệ thống).</div>
<ol>
  <li>Dùng CAPM và mô hình thị trường để ước tính lợi suất yêu cầu (LOS 1, phần 2 và 3).</li>
  <li>APT và vai trò của mô hình đa yếu tố trong đầu tư cổ phiếu (LOS 2, phần 4 và 5).</li>
</ol>
<p class="tip"><b>Đã học ở đâu:</b> lý thuyết CAPM, SML, beta = Cov/σ<sup>2</sup> và mô hình thị trường để phân tách rủi ro ở <b>PC-02</b>; hồi quy beta, kiểm định β = 1 ở <b>QM-10</b>. Ở đây ta không học lại lý thuyết mà tập trung vào <b>các lựa chọn thực tế</b> khi ước tính từng đầu vào, và phần mới: APT, mô hình đa yếu tố.</p>`,
    },
    {
      title: '2. CAPM: ước tính chi phí vốn cổ phần',
      minutes: 14,
      html: `
<div class="formula">r<sub>e</sub> = R<sub>f</sub> + β<sub>i</sub> × [E(R<sub>M</sub>) - R<sub>f</sub>] = R<sub>f</sub> + β<sub>i</sub> × ERP</div>
<p>Ba đầu vào, mỗi đầu vào là một lựa chọn của nhà phân tích:</p>
<h4>a) Lãi suất phi rủi ro R<sub>f</sub></h4>
<ul>
  <li>Dùng lợi suất <b>trái phiếu chính phủ</b> cùng <b>đồng tiền</b> với dòng tiền được định giá.</li>
  <li>Cổ phiếu có dòng tiền rất dài hạn nên nhà phân tích thường dùng lợi suất trái phiếu chính phủ <b>dài hạn</b> (ví dụ 10 năm) thay vì tín phiếu ngắn hạn; kỳ hạn phải khớp với cách đo ERP.</li>
</ul>
<h4>b) Phần bù rủi ro vốn cổ phần (ERP)</h4>
<table class="plain"><thead><tr><th>Cách ước tính</th><th>Cách làm</th><th>Ưu, nhược</th></tr></thead><tbody>
<tr><td>${t('herp', 'Lịch sử (historical)')}</td><td>Trung bình lợi suất thị trường cổ phiếu trừ trung bình lợi suất trái phiếu chính phủ trong một giai đoạn dài</td><td>Khách quan, dễ tính; nhưng phụ thuộc giai đoạn chọn, trung bình cộng hay nhân, và giả định tương lai giống quá khứ. Thị trường mới nổi có dữ liệu ngắn</td></tr>
<tr><td>${t('ferp', 'Hướng tới tương lai (forward-looking)')}</td><td>Suy ra từ giá thị trường hiện tại, ví dụ mô hình Gordon cho cả chỉ số: E(R<sub>M</sub>) = D<sub>1</sub>/P<sub>0</sub> + g</td><td>Phản ánh điều kiện hiện tại; nhưng nhạy với giả định g dài hạn</td></tr>
<tr><td>Khảo sát (survey)</td><td>Hỏi nhà đầu tư, giám đốc tài chính, chuyên gia</td><td>Đơn giản; nhưng chủ quan, dao động theo tâm lý</td></tr>
</tbody></table>

<div class="example"><div class="ex-h">Ví dụ 2.1</div>
<p>(a) Lợi suất trái phiếu chính phủ 10 năm 4%, ERP 5,5%, beta 1,2. Chi phí vốn cổ phần là bao nhiêu?<br>(b) Tỷ suất cổ tức kỳ vọng của chỉ số là 2,0% và tăng trưởng dài hạn kỳ vọng 5,5%. ERP hướng tới tương lai là bao nhiêu?</p>
<details><summary>Xem lời giải</summary>
<p>(a) r<sub>e</sub> = 4% + 1,2 × 5,5% = <b>10,6%</b>.<br>
(b) E(R<sub>M</sub>) = 2,0% + 5,5% = 7,5%; ERP = 7,5% - 4% = <b>3,5%</b>. Với ERP này, chi phí vốn của cổ phiếu ở câu (a) chỉ còn 4% + 1,2 × 3,5% = 8,2%: lựa chọn phương pháp ERP thay đổi kết quả đáng kể.</p></details></div>
<p class="warn"><b>Bẫy số 1:</b> phân biệt <b>E(R<sub>M</sub>)</b> (lợi suất thị trường, ví dụ 9%) và <b>ERP</b> (phần bù, ví dụ 5%). Đề cho "lợi suất thị trường kỳ vọng" thì phải trừ R<sub>f</sub> trước khi nhân beta.</p>`,
    },
    {
      title: '3. Mô hình thị trường và ước lượng beta',
      minutes: 16,
      html: `
<div class="formula">${t('mm', 'Mô hình thị trường')}: R<sub>i,t</sub> = α<sub>i</sub> + β<sub>i</sub>R<sub>M,t</sub> + ε<sub>i,t</sub></div>
<p>Hồi quy lợi suất của cổ phiếu theo lợi suất của chỉ số thị trường; độ dốc là beta. Khác với dạng CAPM ở QM-10 (dùng lợi suất <b>vượt trội</b> R - R<sub>f</sub>), mô hình thị trường dùng lợi suất <b>thô</b>. Khi R<sub>f</sub> ít thay đổi, hai cách cho beta gần như nhau.</p>
<table class="plain"><thead><tr><th></th><th>CAPM</th><th>Mô hình thị trường</th></tr></thead><tbody>
<tr><td>Bản chất</td><td>Mô hình cân bằng: lợi suất <b>kỳ vọng</b> phải bằng bao nhiêu</td><td>Mô hình thống kê: lợi suất <b>thực tế</b> biến động theo thị trường thế nào</td></tr>
<tr><td>Hệ số chặn</td><td>Không có (α = 0 trong cân bằng)</td><td>α<sub>i</sub> ước lượng từ dữ liệu</td></tr>
<tr><td>Vai trò</td><td>Cho ra lợi suất yêu cầu</td><td>Cho ra beta để đưa vào CAPM</td></tr>
</tbody></table>
<p>Nếu CAPM đúng thì hệ số chặn của mô hình thị trường phải xấp xỉ <b>α<sub>i</sub> = R<sub>f</sub>(1 - β<sub>i</sub>)</b>. Phần α thực tế vượt mức này là lợi suất bất thường trong quá khứ, <b>không</b> được đưa vào lợi suất yêu cầu.</p>

<h4>Các lựa chọn khi ước lượng beta</h4>
<ul>
  <li><b>Chỉ số thị trường:</b> chỉ số rộng, phù hợp với nhà đầu tư cận biên (VN-Index, S&amp;P 500, MSCI World). Đổi chỉ số là đổi beta.</li>
  <li><b>Độ dài giai đoạn:</b> dài thì nhiều quan sát hơn nhưng công ty có thể đã thay đổi; thường 2 đến 5 năm.</li>
  <li><b>Tần suất:</b> tuần hoặc tháng (ví dụ 60 tháng). Cổ phiếu ${t('thin', 'giao dịch thưa (thinly traded)')} có lợi suất ngày "trễ" so với thị trường nên beta tính bằng dữ liệu ngày bị <b>kéo về 0</b>; dùng tần suất thấp hơn hoặc beta của nhóm so sánh.</li>
</ul>

<div class="example"><div class="ex-h">Ví dụ 3.1 - Ước lượng beta từ 8 tháng dữ liệu</div>
<p>Lợi suất tháng (%) của thị trường: 2,0; -1,5; 3,0; 0,5; -2,5; 1,5; 4,0; -1,0. Của cổ phiếu: 4,6; -1,5; 2,4; 2,4; -4,4; 0,0; 5,6; -0,3. R<sub>f</sub> tháng 0,3%. Ước lượng α, β, R<sup>2</sup>. CAPM ngầm định α bằng bao nhiêu?</p>
<details><summary>Xem lời giải</summary>
${keys([
  ['Mở bảng dữ liệu và xóa', '[2ND] [7] [2ND] [CE/C]', 'X01 = 0'],
  ['Nhập cặp 1 (X = thị trường, Y = cổ phiếu)', '2 [ENTER] [↓] 4.6 [ENTER] [↓]', 'X02'],
  ['Cặp 2 (số âm: nhập số rồi bấm +/-)', '1.5 [+/-] [ENTER] [↓] 1.5 [+/-] [ENTER] [↓]', 'X03'],
  ['Nhập tiếp 6 cặp còn lại', '3 [ENTER] [↓] 2.4 [ENTER] [↓] ...', ''],
  ['Mở STAT, chọn LIN', '[2ND] [8] rồi [2ND] [ENTER] đến khi hiện LIN', 'LIN'],
  ['Cuộn xuống đọc a, b, r', '[↓] nhiều lần', 'a = 0.1353 · b = 1.2863 · r = 0.8911'],
])}
<p>β = <b>1,2863</b>; α = <b>0,1353%</b>/tháng; R<sup>2</sup> = 0,8911<sup>2</sup> = <b>0,794</b> (79% biến động của cổ phiếu do thị trường).<br>
α theo CAPM = 0,3% × (1 - 1,2863) = <b>-0,0859%</b>. Cổ phiếu đã làm tốt hơn mức CAPM khoảng 0,22%/tháng trong mẫu này, nhưng 8 quan sát quá ít để kết luận, và α quá khứ không được cộng vào lợi suất yêu cầu.</p>
<p>Chi phí vốn cổ phần (R<sub>f</sub> năm 4%, ERP 5,5%): 4% + 1,2863 × 5,5% = <b>11,07%</b>.</p></details></div>

<h4>Beta điều chỉnh (adjusted beta)</h4>
<p>Beta ước lượng có xu hướng ${t('meanrev', 'quay về 1')} theo thời gian (công ty trưởng thành, đa dạng hóa). Nhiều nhà cung cấp dữ liệu dùng ${t('adjbeta', 'beta điều chỉnh')}:</p>
<div class="formula">β<sub>adj</sub> = ${frac('2', '3')} × β<sub>hồi quy</sub> + ${frac('1', '3')} × 1</div>
<p>Ví dụ 3.1: β<sub>adj</sub> = 2/3 × 1,2863 + 1/3 = <b>1,1909</b>, chi phí vốn còn 4% + 1,1909 × 5,5% = <b>10,55%</b>. Beta 0,70 điều chỉnh thành 0,80: beta thấp được kéo lên, beta cao bị kéo xuống.</p>

<h4>Công ty chưa niêm yết hoặc mới niêm yết</h4>
<p>Không có dữ liệu giá thì dùng beta của ${t('pureplay', 'công ty so sánh thuần túy (pure-play)')}: lấy beta vốn chủ của công ty so sánh, loại bỏ ảnh hưởng của đòn bẩy để ra beta tài sản, rồi gắn lại đòn bẩy của công ty cần định giá (cách làm chi tiết thuộc phần chi phí vốn ở Corporate Issuers). Ví dụ: beta vốn chủ của công ty so sánh 1,3; D/E 0,5; thuế 25% → beta tài sản = 1,3 / (1 + 0,75 × 0,5) = 0,9455; công ty mục tiêu có D/E 0,8 → beta = 0,9455 × (1 + 0,75 × 0,8) = <b>1,51</b>.</p>`,
    },
    {
      title: '4. Lý thuyết định giá kinh doanh chênh lệch (APT)',
      minutes: 12,
      html: `
<p>CAPM nói chỉ có <b>một</b> nguồn rủi ro hệ thống được trả công: thị trường. ${t('apt', 'Lý thuyết định giá kinh doanh chênh lệch (APT)')} của Ross cho phép <b>nhiều</b> yếu tố rủi ro hệ thống:</p>
<div class="formula">E(R<sub>i</sub>) = R<sub>f</sub> + β<sub>i,1</sub>λ<sub>1</sub> + β<sub>i,2</sub>λ<sub>2</sub> + ... + β<sub>i,K</sub>λ<sub>K</sub></div>
<ul>
  <li>β<sub>i,k</sub> là ${t('fsens', 'độ nhạy (factor sensitivity, factor loading)')} của tài sản với yếu tố k.</li>
  <li>λ<sub>k</sub> là ${t('frp', 'phần bù rủi ro của yếu tố (factor risk premium)')}: lợi suất kỳ vọng tăng thêm cho mỗi đơn vị độ nhạy với yếu tố đó.</li>
</ul>
<h4>Ba giả định</h4>
<ol>
  <li>Lợi suất được tạo ra bởi một mô hình yếu tố (factor model).</li>
  <li>Có đủ nhiều tài sản để đa dạng hóa hết rủi ro riêng (ε).</li>
  <li>Không tồn tại cơ hội ${t('arb', 'kinh doanh chênh lệch (arbitrage)')}: không thể có lợi nhuận không rủi ro mà không bỏ vốn.</li>
</ol>
<table class="plain"><thead><tr><th></th><th>CAPM</th><th>APT</th></tr></thead><tbody>
<tr><td>Số yếu tố</td><td>Một (thị trường)</td><td>Nhiều, không chỉ định trước là yếu tố nào</td></tr>
<tr><td>Giả định</td><td>Nhiều và chặt (kỳ vọng đồng nhất, một kỳ, danh mục thị trường)</td><td>Ít hơn: mô hình yếu tố, đa dạng hóa, không chênh lệch giá</td></tr>
<tr><td>Danh mục thị trường</td><td>Cần (và không quan sát được thật)</td><td>Không cần</td></tr>
<tr><td>Điểm yếu</td><td>Một yếu tố có thể bỏ sót rủi ro</td><td>Lý thuyết không nói yếu tố nào; phải tự xác định và ước lượng λ</td></tr>
</tbody></table>
<p>CAPM có thể xem là trường hợp đặc biệt của APT khi chỉ có một yếu tố là thị trường.</p>

<div class="example"><div class="ex-h">Ví dụ 4.1 - Lợi suất yêu cầu theo APT hai yếu tố</div>
<p>R<sub>f</sub> = 3%. Phần bù yếu tố tăng trưởng GDP λ<sub>1</sub> = 4%, yếu tố lạm phát λ<sub>2</sub> = 2%. Cổ phiếu có β<sub>1</sub> = 1,2 và β<sub>2</sub> = -0,5.</p>
<details><summary>Xem lời giải</summary><p>E(R) = 3% + 1,2 × 4% + (-0,5) × 2% = 3% + 4,8% - 1,0% = <b>6,8%</b>. Độ nhạy âm với lạm phát (cổ phiếu chịu lạm phát tốt hơn bình thường) làm <b>giảm</b> lợi suất yêu cầu.</p></details></div>

<div class="example"><div class="ex-h">Ví dụ 4.2 - Phát hiện cơ hội chênh lệch giá (một yếu tố)</div>
<p>Ba danh mục đa dạng hóa tốt: A có E(R) = 10%, β = 1,0; B có E(R) = 14%, β = 2,0; C có E(R) = 11%, β = 1,5. Có cơ hội chênh lệch giá không?</p>
<details><summary>Xem lời giải</summary>
<p>A và B xác định đường: E(R) = 6% + 4% × β. Với β = 1,5, lợi suất phải là 12%. C chỉ cho 11% → C bị <b>định giá cao</b> (quá đắt).</p>
<p>Lập danh mục 50% A + 50% B: β = 1,5, E(R) = 12%. <b>Mua</b> danh mục này, <b>bán khống</b> C cùng số tiền: vốn ròng 0, rủi ro yếu tố triệt tiêu (β 1,5 - 1,5 = 0), lợi nhuận <b>1%</b> trên số tiền giao dịch. Người ta làm vậy cho đến khi giá C giảm và lợi suất của C tăng lên 12%.</p></details></div>
<p class="tip">Mẹo: danh mục có lợi suất <b>cao hơn</b> đường APT là rẻ (mua); <b>thấp hơn</b> là đắt (bán). Giống cách đọc SML ở PC-02.</p>`,
    },
    {
      title: '5. Mô hình đa yếu tố trong đầu tư cổ phiếu',
      minutes: 10,
      html: `
<p>Trên thực tế, ${t('mf', 'mô hình đa yếu tố (multifactor model)')} chia thành ba loại theo cách chọn yếu tố:</p>
<table class="plain"><thead><tr><th>Loại</th><th>Yếu tố</th><th>Ví dụ</th></tr></thead><tbody>
<tr><td>${t('macro', 'Kinh tế vĩ mô (macroeconomic)')}</td><td><b>Bất ngờ</b> (surprise) của biến vĩ mô so với kỳ vọng</td><td>Tăng trưởng GDP, lạm phát, chênh lệch lãi suất tín dụng, độ dốc đường cong lợi suất</td></tr>
<tr><td>${t('fund', 'Cơ bản (fundamental)')}</td><td>Đặc điểm công ty, thường dưới dạng lợi suất của danh mục "dài - ngắn"</td><td>Quy mô, giá trị (P/B), quán tính, chất lượng lợi nhuận, mức đầu tư</td></tr>
<tr><td>Thống kê (statistical)</td><td>Tìm ra từ dữ liệu lợi suất (phân tích thành phần chính)</td><td>Yếu tố không có tên kinh tế rõ ràng</td></tr>
</tbody></table>

<h4>Các mô hình yếu tố cơ bản quen thuộc</h4>
<ul>
  <li>${t('ff3', 'Fama-French 3 yếu tố')}: thị trường (MKT = R<sub>M</sub> - R<sub>f</sub>), quy mô (SMB: nhỏ trừ lớn), giá trị (HML: P/B thấp trừ P/B cao).</li>
  <li>Carhart 4 yếu tố: thêm quán tính (momentum, WML hay UMD: thắng trừ thua trong 12 tháng qua).</li>
  <li>Fama-French 5 yếu tố: thêm khả năng sinh lời (RMW: mạnh trừ yếu) và đầu tư (CMA: đầu tư thận trọng trừ đầu tư mạnh).</li>
</ul>
<div class="formula">E(R<sub>i</sub>) = R<sub>f</sub> + β<sub>MKT</sub>λ<sub>MKT</sub> + β<sub>SMB</sub>λ<sub>SMB</sub> + β<sub>HML</sub>λ<sub>HML</sub></div>
<div class="example"><div class="ex-h">Ví dụ 5.1 - Fama-French 3 yếu tố</div>
<p>R<sub>f</sub> = 3%; phần bù: MKT 5%, SMB 2%, HML 3%. Cổ phiếu có β<sub>MKT</sub> = 1,1; β<sub>SMB</sub> = 0,4; β<sub>HML</sub> = -0,3. Lợi suất yêu cầu? Đây là cổ phiếu kiểu gì?</p>
<details><summary>Xem lời giải</summary><p>E(R) = 3% + 1,1 × 5% + 0,4 × 2% + (-0,3) × 3% = 3% + 5,5% + 0,8% - 0,9% = <b>8,4%</b> (CAPM với β 1,1 cho 8,5%).<br>β<sub>SMB</sub> dương: hành xử như cổ phiếu <b>nhỏ</b>; β<sub>HML</sub> âm: hành xử như cổ phiếu <b>tăng trưởng</b> (P/B cao).</p></details></div>

<div class="example"><div class="ex-h">Ví dụ 5.2 - Mô hình vĩ mô: yếu tố là "bất ngờ"</div>
<p>R<sub>i</sub> = E(R<sub>i</sub>) + b<sub>GDP</sub>F<sub>GDP</sub> + b<sub>INF</sub>F<sub>INF</sub> + ε. Cổ phiếu có E(R) = 9%, b<sub>GDP</sub> = 1,5, b<sub>INF</sub> = -2,0. GDP dự kiến tăng 2% nhưng thực tế tăng 3%; lạm phát dự kiến 3% nhưng thực tế 3,5%. Lợi suất dự báo (bỏ qua ε)?</p>
<details><summary>Xem lời giải</summary><p>Bất ngờ GDP = +1%, bất ngờ lạm phát = +0,5%. R = 9% + 1,5 × 1% - 2,0 × 0,5% = <b>9,5%</b>. Bẫy: nhân hệ số với mức GDP 3% (thay vì phần bất ngờ 1%) cho 9% + 4,5% - 7% = 6,5%.</p></details></div>

<h4>Vì sao mô hình đa yếu tố quan trọng</h4>
<ul>
  <li><b>Ước tính lợi suất yêu cầu</b> sát hơn khi rủi ro của cổ phiếu không chỉ đến từ thị trường.</li>
  <li><b>Hiểu và kiểm soát rủi ro:</b> biết danh mục đang "nghiêng" về yếu tố nào (nhỏ, giá trị, quán tính), tránh đặt cược ngoài ý muốn.</li>
  <li><b>Đánh giá kết quả:</b> tách lợi suất do tiếp xúc yếu tố khỏi lợi suất do chọn cổ phiếu thật sự (alpha). Một quỹ "đánh bại thị trường" có thể chỉ đơn giản là nghiêng về cổ phiếu nhỏ.</li>
  <li><b>Xây dựng danh mục và đầu tư theo yếu tố</b> (factor investing, smart beta): chủ động tạo danh mục có độ nhạy mong muốn, hoặc phòng hộ một yếu tố.</li>
</ul>`,
    },
    {
      title: '6. Tóm tắt và bẫy thường gặp',
      minutes: 4,
      html: `
<table class="plain"><thead><tr><th>Chủ đề</th><th>Nhớ</th></tr></thead><tbody>
<tr><td>CAPM</td><td>r<sub>e</sub> = R<sub>f</sub> + β × ERP; ERP = E(R<sub>M</sub>) - R<sub>f</sub>, không nhân β với E(R<sub>M</sub>)</td></tr>
<tr><td>R<sub>f</sub></td><td>Trái phiếu chính phủ, cùng đồng tiền, thường dài hạn</td></tr>
<tr><td>ERP</td><td>Lịch sử (phụ thuộc giai đoạn), hướng tới tương lai (D/P + g - R<sub>f</sub>), khảo sát</td></tr>
<tr><td>Mô hình thị trường</td><td>Hồi quy lợi suất thô; độ dốc = β; CAPM ngầm định α = R<sub>f</sub>(1 - β)</td></tr>
<tr><td>Lựa chọn khi ước lượng</td><td>Chỉ số, giai đoạn, tần suất; giao dịch thưa kéo beta về 0</td></tr>
<tr><td>Beta điều chỉnh</td><td>2/3 × β + 1/3: kéo về 1</td></tr>
<tr><td>APT</td><td>R<sub>f</sub> + Σ β<sub>k</sub>λ<sub>k</sub>; giả định ít hơn CAPM; không cần danh mục thị trường; không nói yếu tố nào</td></tr>
<tr><td>Chênh lệch giá</td><td>Lợi suất thấp hơn đường APT: đắt, bán; ghép danh mục cùng β để mua cái rẻ, bán cái đắt</td></tr>
<tr><td>Đa yếu tố</td><td>Vĩ mô dùng <b>bất ngờ</b>; cơ bản: Fama-French (SMB, HML), Carhart (+ quán tính); dùng cho lợi suất yêu cầu, rủi ro, đánh giá, xây danh mục</td></tr>
</tbody></table>
<p>Tiếp theo: tab <b>Luyện tập</b> 10 câu (rút ngẫu nhiên từ ngân hàng 30 câu, mỗi lần làm một bộ khác). Đây là module cuối của topic Equity.</p>`,
    },
  ];

  const glossary = {
    re: ['Required return on equity (cost of equity)', 'Lợi suất yêu cầu trên vốn cổ phần', 'Lợi suất tối thiểu nhà đầu tư đòi hỏi để nắm giữ cổ phiếu; dùng làm lãi suất chiết khấu.'],
    herp: ['Historical equity risk premium', 'ERP lịch sử', 'Chênh lệch trung bình giữa lợi suất cổ phiếu và trái phiếu chính phủ trong quá khứ.'],
    ferp: ['Forward-looking equity risk premium', 'ERP hướng tới tương lai', 'Suy ra từ giá hiện tại, ví dụ D1/P0 + g - Rf cho cả chỉ số.'],
    mm: ['Market model', 'Mô hình thị trường', 'Ri = αi + βi RM + εi; hồi quy lợi suất cổ phiếu theo lợi suất thị trường.'],
    thin: ['Thinly traded stock', 'Cổ phiếu giao dịch thưa', 'Ít giao dịch nên giá phản ứng chậm với thị trường; beta ước lượng bằng dữ liệu tần suất cao bị thấp.'],
    meanrev: ['Mean reversion of beta', 'Beta quay về trung bình', 'Beta có xu hướng tiến về 1 theo thời gian.'],
    adjbeta: ['Adjusted beta', 'Beta điều chỉnh', '2/3 × beta hồi quy + 1/3 × 1.'],
    pureplay: ['Pure-play method', 'Phương pháp công ty so sánh thuần túy', 'Dùng beta của công ty niêm yết chỉ hoạt động trong cùng lĩnh vực, điều chỉnh theo đòn bẩy.'],
    apt: ['Arbitrage pricing theory (APT)', 'Lý thuyết định giá kinh doanh chênh lệch', 'E(R) = Rf + Σ βk λk; nhiều yếu tố rủi ro hệ thống, dựa trên điều kiện không chênh lệch giá.'],
    fsens: ['Factor sensitivity (factor loading)', 'Độ nhạy với yếu tố', 'Mức thay đổi lợi suất tài sản khi yếu tố thay đổi một đơn vị.'],
    frp: ['Factor risk premium (λ)', 'Phần bù rủi ro của yếu tố', 'Lợi suất kỳ vọng tăng thêm cho mỗi đơn vị độ nhạy với yếu tố.'],
    arb: ['Arbitrage', 'Kinh doanh chênh lệch giá', 'Kiếm lợi nhuận không rủi ro, không bỏ vốn ròng, từ việc định giá sai.'],
    mf: ['Multifactor model', 'Mô hình đa yếu tố', 'Mô hình giải thích lợi suất bằng nhiều yếu tố rủi ro.'],
    macro: ['Macroeconomic factor model', 'Mô hình yếu tố vĩ mô', 'Yếu tố là phần bất ngờ của các biến vĩ mô so với kỳ vọng.'],
    fund: ['Fundamental factor model', 'Mô hình yếu tố cơ bản', 'Yếu tố dựa trên đặc điểm công ty như quy mô, P/B, quán tính.'],
    ff3: ['Fama-French three-factor model', 'Mô hình 3 yếu tố Fama-French', 'Thị trường, quy mô (SMB), giá trị (HML).'],
  };

  const practice = [
    { q: 'Lãi suất phi rủi ro 3,5%, lợi suất thị trường kỳ vọng 9%, beta 1,3. Chi phí vốn cổ phần theo CAPM là:', choices: ['15,20%', '11,70%', '10,65%'], answer: 2, explain: '3,5% + 1,3 × (9% - 3,5%) = 10,65%. Lựa chọn 15,20% nhân beta với lợi suất thị trường (quên trừ Rf). Lựa chọn 11,70% chỉ lấy 1,3 × 9%.' },
    { q: 'Tỷ suất cổ tức kỳ vọng của chỉ số thị trường là 2,5%, tăng trưởng dài hạn 5%, lợi suất trái phiếu chính phủ dài hạn 4,5%. ERP hướng tới tương lai là:', choices: ['3,0%', '7,5%', '2,5%'], answer: 0, explain: 'E(RM) = 2,5% + 5% = 7,5%; ERP = 7,5% - 4,5% = 3,0%. Lựa chọn 7,5% là lợi suất thị trường kỳ vọng, chưa trừ Rf. Lựa chọn 2,5% chỉ là tỷ suất cổ tức.' },
    { q: 'Beta hồi quy của một cổ phiếu là 1,6. Beta điều chỉnh theo cách phổ biến (2/3 và 1/3) là:', choices: ['1,60', '1,40', '1,30'], answer: 1, explain: '2/3 × 1,6 + 1/3 × 1 = 1,40. Lựa chọn 1,60 là beta chưa điều chỉnh. Lựa chọn 1,30 là trung bình đơn giản (1,6 + 1)/2.' },
    { q: 'Mô hình thị trường của một cổ phiếu có α = 0,2% và β = 1,2 (lợi suất tháng). Nếu thị trường tăng 2% trong tháng, lợi suất dự báo của cổ phiếu là:', choices: ['2,4%', '2,6%', '2,2%'], answer: 1, explain: 'R = 0,2% + 1,2 × 2% = 2,6%. Lựa chọn 2,4% bỏ qua α. Lựa chọn 2,2% cộng α vào lợi suất thị trường mà không nhân beta.' },
    { q: 'Phát biểu nào đúng về mô hình thị trường so với CAPM?', choices: ['Mô hình thị trường là mô hình thống kê dùng lợi suất thực tế để ước lượng beta, có hệ số chặn α.', 'Mô hình thị trường cho trực tiếp lợi suất yêu cầu, không cần CAPM.', 'CAPM dự báo hệ số chặn của mô hình thị trường luôn bằng 0 với mọi cổ phiếu.'], answer: 0, explain: 'Mô hình thị trường hồi quy lợi suất cổ phiếu theo thị trường để lấy beta đưa vào CAPM. Phương án "cho trực tiếp lợi suất yêu cầu" sai: mô hình thị trường mô tả lợi suất thực tế, không phải lợi suất yêu cầu. Phương án "hệ số chặn luôn bằng 0" sai: với lợi suất thô, CAPM ngầm định α = Rf(1 - β), chỉ bằng 0 khi β = 1.' },
    { q: 'Theo APT hai yếu tố, Rf = 2%, λ1 = 3%, λ2 = 1,5%. Cổ phiếu có β1 = 0,8 và β2 = 1,4. Lợi suất kỳ vọng là:', choices: ['4,5%', '7,4%', '6,5%'], answer: 2, explain: '2% + 0,8 × 3% + 1,4 × 1,5% = 2% + 2,4% + 2,1% = 6,5%. Lựa chọn 4,5% quên cộng Rf. Lựa chọn 7,4% ghép nhầm độ nhạy với phần bù: 2% + 0,8 × 1,5% + 1,4 × 3% = 7,4%.' },
    { q: 'So với CAPM, APT:', choices: ['đòi hỏi xác định được danh mục thị trường thật.', 'dựa trên ít giả định hơn và không chỉ ra trước các yếu tố rủi ro là gì.', 'chỉ cho phép một yếu tố rủi ro hệ thống.'], answer: 1, explain: 'APT chỉ cần mô hình yếu tố, đa dạng hóa và không chênh lệch giá; lý thuyết không nói yếu tố nào. Cần danh mục thị trường thật và chỉ có một yếu tố rủi ro hệ thống là đặc điểm của CAPM.' },
    { q: 'Ba danh mục đa dạng hóa tốt theo mô hình một yếu tố: A (β 0,8; E(R) 9%), B (β 1,6; E(R) 13%), C (β 1,2; E(R) 12%). Chiến lược chênh lệch giá phù hợp là:', choices: ['Mua C, bán 50% A + 50% B; lợi nhuận 1%.', 'Bán C, mua 50% A + 50% B; lợi nhuận 1%.', 'Không có cơ hội vì cả ba nằm trên cùng một đường.'], answer: 0, explain: '50% A + 50% B có β 1,2 và E(R) 11%. Danh mục C cùng β nhưng cho 12%: C rẻ. Mua C, bán danh mục ghép, lợi nhuận 1% không rủi ro. Phương án "bán C, mua 50% A + 50% B" đi ngược chiều. Phương án "không có cơ hội" sai vì C nằm phía trên đường nối A và B.' },
    { q: 'Rf = 3%; phần bù yếu tố: thị trường 6%, SMB 2,5%, HML 3%. Cổ phiếu có β thị trường 1,0; β SMB 0,5; β HML 0,6. Lợi suất yêu cầu theo Fama-French 3 yếu tố là:', choices: ['9,00%', '12,05%', '9,05%'], answer: 1, explain: '3% + 1,0 × 6% + 0,5 × 2,5% + 0,6 × 3% = 3% + 6% + 1,25% + 1,8% = 12,05%. Lựa chọn 9,00% chỉ dùng CAPM (bỏ qua SMB, HML). Lựa chọn 9,05% cộng đủ ba yếu tố nhưng quên Rf.' },
    { q: 'Một quỹ có lợi suất vượt chỉ số 3%/năm. Hồi quy đa yếu tố cho thấy quỹ có β SMB và β HML dương lớn, còn alpha xấp xỉ 0. Kết luận phù hợp nhất:', choices: ['Nhà quản lý có kỹ năng chọn cổ phiếu vượt trội.', 'Quỹ có rủi ro hệ thống thấp hơn thị trường.', 'Lợi suất vượt trội chủ yếu đến từ việc nghiêng về cổ phiếu nhỏ và cổ phiếu giá trị.'], answer: 2, explain: 'Mô hình đa yếu tố tách phần lợi suất do tiếp xúc yếu tố khỏi alpha. Alpha ≈ 0 nghĩa là không có bằng chứng về kỹ năng chọn cổ phiếu vượt trội. Kết luận quỹ có rủi ro hệ thống thấp hơn thị trường không suy ra được từ dữ kiện.' },
    { q: 'Lợi suất trái phiếu chính phủ dài hạn 4,2%, phần bù rủi ro vốn cổ phần (ERP) 6%, beta 0,85. Chi phí vốn cổ phần theo CAPM là:', choices: ['9,30%', '5,10%', '5,73%'], answer: 0, explain: 're = 4,2% + 0,85 × 6% = 9,30%. Lựa chọn 5,10% quên cộng Rf. Lựa chọn 5,73% trừ Rf khỏi ERP một lần nữa: đề đã cho phần bù (ERP), không phải lợi suất thị trường kỳ vọng.' },
    { q: 'Nhà phân tích định giá một công ty Việt Nam có dòng tiền bằng đồng Việt Nam kéo dài nhiều thập kỷ. Lãi suất phi rủi ro phù hợp NHẤT cho CAPM là:', choices: ['Lợi suất tín phiếu Kho bạc Mỹ 3 tháng', 'Lợi suất trái phiếu chính phủ Việt Nam kỳ hạn dài (ví dụ 10 năm)', 'Lãi suất tiền gửi kỳ hạn 1 tháng của một ngân hàng thương mại'], answer: 1, explain: 'Lãi suất phi rủi ro phải cùng đồng tiền với dòng tiền được định giá, và với dòng tiền dài hạn của cổ phiếu, thường dùng trái phiếu chính phủ dài hạn. Tín phiếu Mỹ khác đồng tiền và quá ngắn. Tiền gửi ngân hàng có rủi ro tín dụng và kỳ hạn quá ngắn.' },
    { q: 'Hạn chế chính của phương pháp ước tính ERP dựa trên dữ liệu lịch sử là:', choices: ['Kết quả dao động mạnh theo tâm lý của người được hỏi', 'Cần giả định tăng trưởng cổ tức dài hạn của chỉ số', 'Kết quả phụ thuộc vào giai đoạn chọn, cách lấy trung bình (cộng hay nhân) và giả định tương lai giống quá khứ'], answer: 2, explain: 'ERP lịch sử khách quan, dễ tính nhưng nhạy với giai đoạn mẫu và cách tính trung bình, và thị trường mới nổi có dữ liệu ngắn. Phụ thuộc tâm lý người được hỏi là hạn chế của phương pháp khảo sát. Cần giả định tăng trưởng dài hạn là hạn chế của ERP hướng tới tương lai (D1/P0 + g).' },
    { q: 'Phương pháp ước tính ERP nào phản ánh tốt NHẤT điều kiện thị trường hiện tại?', choices: ['Lịch sử, dùng trung bình 100 năm', 'Bình quân lợi suất trái phiếu chính phủ trong 10 năm qua', 'Hướng tới tương lai (forward-looking), suy ra từ giá hiện tại của chỉ số'], answer: 2, explain: 'ERP hướng tới tương lai dùng giá thị trường hiện tại (E(RM) = D1/P0 + g, rồi trừ Rf), nên phản ánh điều kiện hiện nay, đổi lại nhạy với giả định g. ERP lịch sử nhìn về quá khứ. Bình quân lợi suất trái phiếu không phải là phần bù rủi ro vốn cổ phần.' },
    { q: 'Mô hình thị trường được ước lượng trên lợi suất tháng (không trừ Rf). Lãi suất phi rủi ro tháng 0,4%, beta của cổ phiếu 0,75. Nếu CAPM đúng, hệ số chặn α kỳ vọng xấp xỉ:', choices: ['0,10%', '0,00%', '-0,10%'], answer: 0, explain: 'Với lợi suất thô, CAPM ngầm định α = Rf × (1 - β) = 0,4% × 0,25 = 0,10%. Lựa chọn 0,00% chỉ đúng khi β = 1 hoặc khi hồi quy trên lợi suất vượt trội. Lựa chọn -0,10% sai dấu (đúng cho cổ phiếu có β > 1, ví dụ β 1,25).' },
    { q: 'Trong hồi quy mô hình thị trường, hệ số tương quan giữa lợi suất cổ phiếu và lợi suất thị trường là 0,8. Tỷ lệ biến động lợi suất cổ phiếu được giải thích bởi thị trường gần nhất với:', choices: ['80%', '64%', '36%'], answer: 1, explain: 'R2 = r^2 = 0,8^2 = 64%: phần biến động do rủi ro hệ thống. Lựa chọn 80% dùng hệ số tương quan thay cho R2. Lựa chọn 36% là phần rủi ro riêng (không được giải thích bởi thị trường).' },
    { q: 'Một cổ phiếu vốn hóa nhỏ giao dịch rất thưa. Beta ước lượng bằng dữ liệu lợi suất ngày cho kết quả 0,35, thấp bất thường so với các công ty cùng ngành (khoảng 1,1). Cách xử lý phù hợp NHẤT là:', choices: ['Dùng beta 0,35 vì cổ phiếu ít rủi ro hơn ngành', 'Dùng dữ liệu tần suất thấp hơn (tuần, tháng) hoặc beta của nhóm so sánh', 'Tăng tần suất lên dữ liệu theo phút để có nhiều quan sát hơn'], answer: 1, explain: 'Giá của cổ phiếu giao dịch thưa phản ứng trễ so với thị trường nên beta tính từ dữ liệu ngày bị kéo về 0, không phản ánh rủi ro thật. Dữ liệu tuần, tháng hoặc beta của nhóm so sánh giảm thiên lệch này. Dữ liệu tần suất cao hơn làm vấn đề trầm trọng hơn.' },
    { q: 'Beta của một cổ phiếu niêm yết tại Việt Nam là 1,2 khi hồi quy theo VN-Index và 0,7 khi hồi quy theo chỉ số MSCI World. Phát biểu nào chính xác NHẤT?', choices: ['Một trong hai beta chắc chắn bị tính sai vì beta không phụ thuộc chỉ số', 'Luôn chọn beta thấp hơn để có chi phí vốn thận trọng', 'Đổi chỉ số là đổi beta; nên chọn chỉ số phù hợp với nhà đầu tư cận biên và dùng ERP tương ứng với chỉ số đó'], answer: 2, explain: 'Beta đo độ nhạy với một danh mục thị trường cụ thể, nên khác chỉ số thì khác beta. Lựa chọn chỉ số phải nhất quán với nhà đầu tư cận biên và với ERP dùng trong CAPM. Beta thấp hơn cho chi phí vốn thấp hơn và giá trị cao hơn, tức là kém thận trọng hơn.' },
    { q: 'Beta hồi quy của một công ty điện là 0,55. Rf = 3,5%, ERP = 5%. Chi phí vốn cổ phần dùng beta điều chỉnh (2/3 beta hồi quy + 1/3) gần nhất với:', choices: ['7,00%', '6,25%', '7,75%'], answer: 0, explain: 'Beta điều chỉnh = 2/3 × 0,55 + 1/3 = 0,70; re = 3,5% + 0,70 × 5% = 7,00%. Beta thấp được kéo lên về 1. Lựa chọn 6,25% dùng beta chưa điều chỉnh. Lựa chọn 7,75% đảo trọng số (1/3 beta hồi quy + 2/3), cho beta 0,85.' },
    { q: 'Công ty chưa niêm yết có D/E mục tiêu 1,0. Công ty so sánh thuần túy có beta vốn chủ 1,1 và D/E 0,4. Thuế suất của cả hai là 20%. Beta vốn chủ ước tính của công ty chưa niêm yết gần nhất với:', choices: ['1,10', '0,83', '1,50'], answer: 2, explain: 'Beta tài sản = 1,1 / (1 + 0,8 × 0,4) = 0,8333; gắn lại đòn bẩy: 0,8333 × (1 + 0,8 × 1,0) = 1,50. Lựa chọn 1,10 dùng nguyên beta của công ty so sánh, bỏ qua khác biệt đòn bẩy. Lựa chọn 0,83 là beta tài sản, chưa gắn lại đòn bẩy của công ty mục tiêu.' },
    { q: 'Theo APT hai yếu tố: Rf = 2,5%; phần bù yếu tố 1 là 5%, yếu tố 2 là 3%. Cổ phiếu có độ nhạy 0,9 với yếu tố 1 và -0,6 với yếu tố 2. Lợi suất kỳ vọng là:', choices: ['8,8%', '2,7%', '5,2%'], answer: 2, explain: '2,5% + 0,9 × 5% + (-0,6) × 3% = 2,5% + 4,5% - 1,8% = 5,2%. Lựa chọn 8,8% bỏ qua dấu âm của độ nhạy thứ hai. Lựa chọn 2,7% quên cộng Rf.' },
    { q: 'Điều nào sau đây KHÔNG phải là giả định của APT?', choices: ['Lợi suất được tạo ra bởi một mô hình yếu tố', 'Danh mục thị trường hiệu quả theo trung bình - phương sai và quan sát được', 'Không tồn tại cơ hội kinh doanh chênh lệch giá'], answer: 1, explain: 'APT chỉ cần ba giả định: lợi suất theo một mô hình yếu tố, có đủ tài sản để đa dạng hóa hết rủi ro riêng, và không có cơ hội chênh lệch giá. Yêu cầu về danh mục thị trường hiệu quả là của CAPM; APT không cần danh mục thị trường.' },
    { q: 'Trong mô hình APT một yếu tố, danh mục đa dạng hóa A có β = 0,5 và E(R) = 8%; danh mục B có β = 1,5 và E(R) = 16%. Phần bù rủi ro của yếu tố (λ) là:', choices: ['8,0%', '10,7%', '4,0%'], answer: 0, explain: 'λ = (16% - 8%) / (1,5 - 0,5) = 8,0%; khi đó Rf = 8% - 0,5 × 8% = 4,0%, và đường APT là E(R) = 4% + 8% × β. Lựa chọn 10,7% chia lợi suất của B cho β, bỏ qua Rf. Lựa chọn 4,0% là lãi suất phi rủi ro (hệ số chặn), không phải phần bù.' },
    { q: 'Mô hình vĩ mô: Ri = E(Ri) + bGDP × FGDP + bLS × FLS + ε, trong đó F là phần bất ngờ. Cổ phiếu có E(R) = 10%, bGDP = 0,8, bLS = -1,5. GDP dự kiến tăng 3% nhưng thực tế tăng 2%; lãi suất dự kiến 4% nhưng thực tế 4,5%. Lợi suất dự báo (bỏ qua ε) là:', choices: ['8,45%', '4,85%', '11,55%'], answer: 0, explain: 'Bất ngờ GDP = 2% - 3% = -1%; bất ngờ lãi suất = +0,5%. R = 10% + 0,8 × (-1%) + (-1,5) × 0,5% = 10% - 0,8% - 0,75% = 8,45%. Lựa chọn 4,85% nhân hệ số với mức thực tế (2% và 4,5%) thay vì phần bất ngờ. Lựa chọn 11,55% cộng cả hai tác động, bỏ qua dấu.' },
    { q: 'Yếu tố được đo bằng lợi suất của danh mục mua cổ phiếu có P/B thấp và bán cổ phiếu có P/B cao thuộc loại:', choices: ['Yếu tố cơ bản (fundamental)', 'Yếu tố kinh tế vĩ mô (macroeconomic)', 'Yếu tố thống kê (statistical)'], answer: 0, explain: 'Yếu tố dựa trên đặc điểm công ty (giá trị, quy mô, quán tính), thường dưới dạng danh mục "dài - ngắn", là yếu tố cơ bản; đây chính là HML trong Fama-French. Yếu tố vĩ mô là phần bất ngờ của các biến kinh tế như GDP, lạm phát. Yếu tố thống kê được trích xuất từ dữ liệu lợi suất, không gắn với đặc điểm cụ thể.' },
    { q: 'Nhược điểm chính của mô hình yếu tố thống kê (ví dụ phân tích thành phần chính) là:', choices: ['Các yếu tố thường không có ý nghĩa kinh tế rõ ràng', 'Phải dự báo bất ngờ của GDP và lạm phát', 'Chỉ áp dụng được cho một cổ phiếu duy nhất'], answer: 0, explain: 'Yếu tố thống kê được tìm ra từ cấu trúc hiệp phương sai của lợi suất, nên giải thích tốt dữ liệu nhưng khó đặt tên hay giải thích về kinh tế. Dự báo bất ngờ vĩ mô là việc của mô hình vĩ mô. Mô hình thống kê được ước lượng trên nhiều tài sản, không phải một cổ phiếu.' },
    { q: 'Mô hình 4 yếu tố của Carhart bổ sung yếu tố nào vào mô hình Fama-French 3 yếu tố?', choices: ['Khả năng sinh lời: công ty sinh lời mạnh trừ yếu', 'Quán tính (momentum): cổ phiếu thắng trừ cổ phiếu thua trong 12 tháng qua', 'Đầu tư: công ty đầu tư thận trọng trừ đầu tư mạnh'], answer: 1, explain: 'Carhart thêm yếu tố quán tính (WML hay UMD) vào thị trường, SMB và HML. Khả năng sinh lời (RMW) và đầu tư (CMA) là hai yếu tố mà mô hình Fama-French 5 yếu tố bổ sung.' },
    { q: 'Hồi quy Fama-French 3 yếu tố cho một cổ phiếu: βMKT = 1,0; βSMB = -0,4; βHML = 0,7. Cổ phiếu này hành xử giống loại nào?', choices: ['Cổ phiếu nhỏ, thiên về tăng trưởng (P/B cao)', 'Cổ phiếu nhỏ, thiên về giá trị', 'Cổ phiếu lớn, thiên về giá trị (P/B thấp)'], answer: 2, explain: 'βSMB âm nghĩa là cổ phiếu biến động ngược với yếu tố "nhỏ trừ lớn", tức giống cổ phiếu lớn. βHML dương nghĩa là giống cổ phiếu P/B thấp, tức cổ phiếu giá trị. Hai phương án còn lại đọc sai dấu của ít nhất một hệ số.' },
    { q: 'Phân tích bằng mô hình đa yếu tố cho thấy một danh mục được quản lý theo chiến lược "chọn cổ phiếu chất lượng" đang có độ nhạy rất lớn với yếu tố quán tính, điều nhà quản lý không chủ đích. Đây là ví dụ về việc dùng mô hình đa yếu tố để:', choices: ['Ước tính lãi suất phi rủi ro', 'Hiểu và kiểm soát rủi ro: phát hiện các đặt cược yếu tố ngoài ý muốn', 'Chứng minh nhà quản lý có alpha dương'], answer: 1, explain: 'Mô hình đa yếu tố cho biết danh mục đang nghiêng về yếu tố nào, giúp nhà quản lý tránh hoặc phòng hộ các rủi ro mình không định chấp nhận. Mô hình không ước tính Rf, và độ nhạy với quán tính không chứng minh alpha; ngược lại, một phần lợi suất có thể chỉ đến từ tiếp xúc yếu tố.' },
    { q: 'Rf = 3,5%; phần bù yếu tố: thị trường 5,5%, SMB 2%, HML 3,5%. Cổ phiếu có β thị trường 0,9; β SMB -0,3; β HML 0,5. Lợi suất yêu cầu theo Fama-French 3 yếu tố là:', choices: ['8,45%', '10,80%', '9,60%'], answer: 2, explain: '3,5% + 0,9 × 5,5% + (-0,3) × 2% + 0,5 × 3,5% = 3,5% + 4,95% - 0,6% + 1,75% = 9,60%. Lựa chọn 8,45% chỉ dùng CAPM, bỏ qua SMB và HML. Lựa chọn 10,80% bỏ qua dấu âm của β SMB.' },
  ];

  window.LESSONS['EQ-12'] = {
    moduleId: 'EQ-12',
    calculator: 'BA II Plus',
    warmup: [
      'Ôn PC-02: viết công thức CAPM và cho biết trục hoành của SML là gì.',
      'Ôn QM-10: trong hồi quy lợi suất cổ phiếu theo lợi suất thị trường, beta là hệ số nào? R² cho biết điều gì?',
      'Đoán trước: ngoài thị trường chung, còn những nguồn rủi ro nào có thể khiến nhà đầu tư đòi lợi suất cao hơn?',
    ],
    sections,
    glossary,
    practice,
    widgets: {},
    slides: [],
    wrapup: [
      'Nêu ba lựa chọn khi ước lượng beta và ảnh hưởng của giao dịch thưa.',
      'So sánh CAPM và APT về số yếu tố, giả định và danh mục thị trường.',
      'Kể tên ba loại mô hình đa yếu tố và hai công dụng của chúng trong đầu tư cổ phiếu.',
    ],
  };
}());
