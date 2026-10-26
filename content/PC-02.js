// Bài giảng PC-02 - Portfolio Risk and Return: Part II (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t, frac, keys } = window.CFAH;

  const sections = [
    {
      title: '1. Bức tranh lớn',
      minutes: 5,
      html: `
<p>PC-01 dừng ở đường biên hiệu quả của tài sản rủi ro. Module này thêm tài sản phi rủi ro, rồi đi đến kết quả quan trọng nhất của lý thuyết danh mục: <b>thị trường chỉ trả công cho loại rủi ro không đa dạng hóa được</b>.</p>
<div class="key">Tổng rủi ro = ${t('sysrisk', 'rủi ro hệ thống')} + ${t('nonsys', 'rủi ro phi hệ thống')}. Rủi ro phi hệ thống có thể loại bỏ miễn phí bằng đa dạng hóa, nên không được bù. Lợi suất yêu cầu chỉ phụ thuộc vào rủi ro hệ thống, đo bằng ${t('beta', 'beta')}: đó là ${t('capm', 'CAPM')}.</div>
<p>Chín LOS, đi theo một mạch:</p>
<ol>
  <li><b>Tài sản phi rủi ro + danh mục rủi ro</b>: CAL, danh mục thị trường, CML, vay và cho vay. LOS 1 và 2.</li>
  <li><b>Phân tách rủi ro</b>: hệ thống và phi hệ thống; mô hình tạo lợi suất và mô hình thị trường. LOS 3 và 4.</li>
  <li><b>Beta và CAPM</b>: tính beta, giả định của CAPM, đường SML, tính lợi suất kỳ vọng và các ứng dụng. LOS 5 đến 8.</li>
  <li><b>Đánh giá hiệu quả</b>: Sharpe, Treynor, M<sup>2</sup>, Jensen's alpha. LOS 9.</li>
</ol>
<p class="tip">Hai đường dễ nhầm nhất của cả topic: <b>CML</b> (trục ngang là σ) và <b>SML</b> (trục ngang là beta). Hãy để ý mỗi lần chúng xuất hiện; phần 10 có bảng so sánh.</p>`,
    },
    {
      title: '2. Kết hợp tài sản phi rủi ro với danh mục rủi ro',
      minutes: 10,
      html: `
<p>Đặt w<sub>1</sub> vào ${t('rf', 'tài sản phi rủi ro')} (σ = 0, Cov với mọi tài sản = 0) và (1 - w<sub>1</sub>) vào danh mục rủi ro i:</p>
<div class="formula">E(R<sub>P</sub>) = w<sub>1</sub>R<sub>f</sub> + (1 - w<sub>1</sub>)E(R<sub>i</sub>) &nbsp;&nbsp;&nbsp; σ<sub>P</sub> = (1 - w<sub>1</sub>)σ<sub>i</sub></div>
<p>Vì số hạng hiệp phương sai bằng 0, rủi ro tỷ lệ thuận với tỷ trọng rủi ro. Mọi kết hợp nằm trên một đường thẳng: ${t('cal', 'đường phân bổ vốn (CAL)')}, độ dốc là tỷ số Sharpe của danh mục rủi ro (ôn QM-08 phần 8 và PC-01 phần 4).</p>
<div class="key"><b>Hàm ý:</b> (1) Với cùng các tài sản rủi ro, CAL tốt nhất là đường tiếp xúc đường biên hiệu quả; mọi điểm trên nó lấn át các điểm trên đường biên cong (trừ điểm tiếp xúc). (2) Quyết định đầu tư tách thành hai bước độc lập: chọn danh mục rủi ro tối ưu, rồi chọn tỷ lệ giữa nó và tài sản phi rủi ro.</div>

<h4>Khi lãi suất vay cao hơn lãi suất cho vay</h4>
<p>Thực tế nhà đầu tư cá nhân vay (margin) ở lãi suất cao hơn lãi suất gửi. CAL bị <b>gãy khúc</b> tại danh mục rủi ro: đoạn cho vay dốc hơn, đoạn vay thoải hơn.</p>
<div class="example"><div class="ex-h">Ví dụ 2.1</div>
<p>Danh mục rủi ro M có E = 10%, σ = 18%. Lãi suất gửi 3%, lãi suất vay 5%. Tính độ dốc hai đoạn CAL và lợi suất kỳ vọng nếu đầu tư 130% vào M.</p>
<details><summary>Xem lời giải</summary>
<p>Đoạn cho vay: (10% - 3%) / 18% = <b>0,389</b>. Đoạn vay: (10% - 5%) / 18% = <b>0,278</b>.</p>
<p>130% vào M, vay 30% ở 5%: E = 1,3 × 10% - 0,3 × 5% = <b>11,50%</b>; σ = 1,3 × 18% = 23,4%.</p>
<p>Nếu vay được ở 3% thì E = 1,3 × 10% - 0,3 × 3% = 12,10%. Chênh 0,60 điểm % là chi phí của việc vay đắt hơn.</p></details></div>
<p class="warn"><b>Bẫy:</b> khi vay, tỷ trọng tài sản phi rủi ro là <b>số âm</b> (w<sub>1</sub> = -30%). Nhiều bạn lấy 1,3 × 10% = 13% rồi quên trừ chi phí vay.</p>`,
    },
    {
      title: '3. Danh mục thị trường và đường thị trường vốn (CML)',
      minutes: 10,
      html: `
<p>Nếu mọi nhà đầu tư có ${t('homog', 'kỳ vọng đồng nhất (homogeneous expectations)')}, họ vẽ cùng một đường biên và cùng một danh mục tiếp tuyến. Khi thị trường cân bằng, danh mục đó phải chứa <b>mọi tài sản rủi ro theo tỷ trọng giá trị thị trường</b>: ${t('market', 'danh mục thị trường (market portfolio)')}. CAL đi qua nó là ${t('cml', 'đường thị trường vốn (CML)')}:</p>
<div class="formula">E(R<sub>P</sub>) = R<sub>f</sub> + ${frac('E(R<sub>M</sub>) - R<sub>f</sub>', 'σ<sub>M</sub>')} × σ<sub>P</sub></div>
<ul>
  <li>Độ dốc CML = ${t('mprice', 'giá thị trường của rủi ro')}: lợi suất vượt trội nhận thêm cho mỗi 1% tổng rủi ro.</li>
  <li>Về lý thuyết danh mục thị trường gồm cả bất động sản, vốn con người...; thực tế dùng chỉ số đại diện như S&amp;P 500 hay VN-Index.</li>
</ul>
<table class="plain"><thead><tr><th>Vị trí trên CML</th><th>Tỷ trọng M</th><th>Tên gọi</th></tr></thead><tbody>
<tr><td>Giữa R<sub>f</sub> và M</td><td>0% đến 100%</td><td>${t('lending', 'Danh mục cho vay (lending portfolio)')}</td></tr>
<tr><td>Tại M</td><td>100%</td><td>Danh mục thị trường</td></tr>
<tr><td>Bên phải M</td><td>&gt; 100% (vay ở R<sub>f</sub>)</td><td>${t('borrowing', 'Danh mục vay, có đòn bẩy (borrowing portfolio)')}</td></tr>
</tbody></table>
<div class="example"><div class="ex-h">Ví dụ 3.1</div>
<p>R<sub>f</sub> = 3%, E(R<sub>M</sub>) = 10%, σ<sub>M</sub> = 20%. Tính E và σ của (a) danh mục 60% M, 40% R<sub>f</sub>; (b) danh mục 125% M.</p>
<details><summary>Xem lời giải</summary>
<p>Độ dốc CML = 7% / 20% = 0,35.</p>
<p>(a) E = 0,4 × 3% + 0,6 × 10% = <b>7,20%</b>; σ = 0,6 × 20% = <b>12%</b>. Kiểm tra: 3% + 0,35 × 12% = 7,20%.</p>
<p>(b) E = -0,25 × 3% + 1,25 × 10% = <b>11,75%</b>; σ = <b>25%</b>.</p></details></div>
<p><b>Thụ động và chủ động:</b> mọi danh mục trên CML là kết hợp của R<sub>f</sub> và một quỹ chỉ số thị trường, tức ${t('passive', 'quản lý thụ động (passive)')}. Người tin rằng mình tìm được chứng khoán bị định giá sai sẽ lệch khỏi tỷ trọng thị trường: ${t('active', 'quản lý chủ động (active)')}. Nếu thị trường hiệu quả về thông tin, danh mục chủ động sau phí khó nằm trên CML.</p>`,
    },
    {
      title: '4. Rủi ro hệ thống và phi hệ thống',
      minutes: 12,
      html: `
<table class="plain"><thead><tr><th></th><th>${t('sysrisk', 'Rủi ro hệ thống (systematic)')}</th><th>${t('nonsys', 'Rủi ro phi hệ thống (nonsystematic)')}</th></tr></thead><tbody>
<tr><td>Tên khác</td><td>Rủi ro thị trường, không đa dạng hóa được</td><td>Rủi ro riêng, rủi ro đặc thù, đa dạng hóa được</td></tr>
<tr><td>Nguồn gốc</td><td>Lãi suất, lạm phát, chu kỳ kinh tế, chính trị vĩ mô</td><td>Kiện tụng, mất khách hàng lớn, đình công, CEO từ chức</td></tr>
<tr><td>Đa dạng hóa</td><td>Không loại bỏ được</td><td>Gần như biến mất khi N lớn (PC-01 phần 7)</td></tr>
<tr><td>Được bù bằng lợi suất?</td><td><b>Có</b></td><td><b>Không</b></td></tr>
</tbody></table>
<div class="key"><b>Vì sao rủi ro phi hệ thống không được bù?</b> Vì có thể loại bỏ nó <b>gần như không tốn chi phí</b> bằng cách nắm danh mục đa dạng. Giá tài sản do những nhà đầu tư đa dạng hóa quyết định; với họ, rủi ro riêng của một công ty không còn. Nếu thị trường trả thêm cho rủi ro riêng, ai cũng sẽ đa dạng hóa để "ăn" phần thưởng đó mà không chịu rủi ro, cho đến khi phần thưởng biến mất. Người nắm danh mục tập trung chịu thêm rủi ro <b>một cách tự nguyện mà không được trả công</b>.</div>

<h4>Phân tách phương sai</h4>
<div class="formula">σ<sub>i</sub><sup>2</sup> = β<sub>i</sub><sup>2</sup>σ<sub>M</sub><sup>2</sup> + σ<sub>ε</sub><sup>2</sup> &nbsp;&nbsp;&nbsp; (tổng = hệ thống + phi hệ thống)</div>
<div class="example"><div class="ex-h">Ví dụ 4.1</div>
<p>Cổ phiếu có β = 1,2 và σ = 40%. Thị trường có σ<sub>M</sub> = 20%. Phần phương sai nào là hệ thống?</p>
<details><summary>Xem lời giải</summary>
<p>Phương sai hệ thống = 1,2<sup>2</sup> × 0,04 = 0,0576. Tổng phương sai = 0,16. Phi hệ thống = 0,16 - 0,0576 = 0,1024.</p>
<p>Tỷ lệ hệ thống = 0,0576 / 0,16 = <b>36%</b>; phi hệ thống <b>64%</b>. Tỷ lệ 36% chính là R<sup>2</sup> của hồi quy cổ phiếu theo thị trường, và ρ<sub>i,M</sub> = √0,36 = 0,6.</p>
<p>Hàm ý: nắm riêng cổ phiếu này, bạn chịu σ = 40% nhưng chỉ được trả công cho phần tương ứng với β = 1,2.</p></details></div>
<p class="warn"><b>Bẫy:</b> hai cổ phiếu cùng σ chưa chắc có cùng lợi suất kỳ vọng. Cổ phiếu có σ lớn hơn có thể có lợi suất kỳ vọng <b>thấp hơn</b> nếu beta của nó thấp hơn.</p>`,
    },
    {
      title: '5. Mô hình tạo lợi suất và mô hình thị trường',
      minutes: 12,
      html: `
<p>${t('rgm', 'Mô hình tạo lợi suất (return generating model)')} ước lượng lợi suất của tài sản từ một hoặc nhiều yếu tố (factor). Dạng tổng quát nhiều yếu tố:</p>
<div class="formula">E(R<sub>i</sub>) - R<sub>f</sub> = Σ<sub>j</sub> β<sub>ij</sub> × E(F<sub>j</sub>) = β<sub>i1</sub>E(F<sub>1</sub>) + β<sub>i2</sub>E(F<sub>2</sub>) + ...</div>
<ul>
  <li>Yếu tố có thể là <b>vĩ mô</b> (tăng trưởng GDP, lạm phát, lãi suất), <b>cơ bản</b> (quy mô, P/B, đòn bẩy) hoặc <b>thống kê</b>.</li>
  <li>Ví dụ quen thuộc: mô hình 3 yếu tố Fama-French (thị trường, quy mô SMB, giá trị HML); thêm yếu tố quán tính (momentum) thành mô hình 4 yếu tố Carhart.</li>
  <li>Khi chỉ có một yếu tố là thị trường, ta được ${t('sim', 'mô hình chỉ số đơn (single-index model)')}: E(R<sub>i</sub>) - R<sub>f</sub> = β<sub>i</sub>[E(R<sub>M</sub>) - R<sub>f</sub>].</li>
</ul>

<h4>Mô hình thị trường (market model)</h4>
<div class="formula">R<sub>i</sub> = α<sub>i</sub> + β<sub>i</sub>R<sub>M</sub> + ε<sub>i</sub></div>
<p>${t('mm', 'Mô hình thị trường')} là phiên bản hồi quy của mô hình chỉ số đơn: α<sub>i</sub> là hệ số chặn, β<sub>i</sub> là hệ số góc, ε<sub>i</sub> là phần riêng của công ty (trung bình bằng 0, không tương quan với thị trường và với ε của công ty khác). Đường hồi quy này gọi là ${t('scl', 'đường đặc trưng chứng khoán (SCL)')}.</p>
<p><b>Công dụng:</b></p>
<ol>
  <li><b>Ước lượng beta</b> bằng hồi quy lợi suất tài sản theo lợi suất thị trường (phần 6).</li>
  <li><b>Dự báo lợi suất</b>: biết α, β và kịch bản R<sub>M</sub>.</li>
  <li><b>Đơn giản hóa hiệp phương sai</b>: Cov(R<sub>i</sub>, R<sub>j</sub>) = β<sub>i</sub>β<sub>j</sub>σ<sub>M</sub><sup>2</sup>. Với 100 cổ phiếu, thay vì ước lượng 4.950 hiệp phương sai, chỉ cần 100 beta và σ<sub>M</sub>.</li>
</ol>
<div class="example"><div class="ex-h">Ví dụ 5.1</div>
<p>(a) Cổ phiếu có α = 1%, β = 1,3. Nếu thị trường tăng 8%, lợi suất dự báo là bao nhiêu? (b) Hai cổ phiếu có β lần lượt 1,2 và 0,8; σ<sub>M</sub> = 20%; σ lần lượt 35% và 25%. Ước lượng hiệp phương sai và hệ số tương quan.</p>
<details><summary>Xem lời giải</summary>
<p>(a) R = 1% + 1,3 × 8% = <b>11,4%</b>.</p>
<p>(b) Cov = 1,2 × 0,8 × 0,04 = <b>0,0384</b>; ρ = 0,0384 / (0,35 × 0,25) = <b>0,44</b>.</p></details></div>`,
    },
    {
      title: '6. Beta: tính và diễn giải',
      minutes: 14,
      html: `
<div class="formula">β<sub>i</sub> = ${frac('Cov(R<sub>i</sub>, R<sub>M</sub>)', 'σ<sub>M</sub><sup>2</sup>')} = ${frac('ρ<sub>i,M</sub> × σ<sub>i</sub>', 'σ<sub>M</sub>')}</div>
<p>${t('beta', 'Beta')} đo độ nhạy của tài sản với thị trường, tức <b>lượng rủi ro hệ thống</b> mà tài sản đóng góp vào danh mục thị trường.</p>
<table class="plain"><thead><tr><th>Beta</th><th>Ý nghĩa</th></tr></thead><tbody>
<tr><td>β = 1</td><td>Biến động cùng mức thị trường (bản thân danh mục thị trường có β = 1)</td></tr>
<tr><td>β &gt; 1</td><td>Mạnh hơn thị trường (cổ phiếu chu kỳ, công nghệ): "tấn công"</td></tr>
<tr><td>0 &lt; β &lt; 1</td><td>Yếu hơn thị trường (tiện ích, hàng tiêu dùng thiết yếu): "phòng thủ"</td></tr>
<tr><td>β = 0</td><td>Không tương quan với thị trường (tài sản phi rủi ro)</td></tr>
<tr><td>β &lt; 0</td><td>Ngược chiều thị trường (hiếm; ví dụ một số hợp đồng bảo hiểm, quyền chọn bán)</td></tr>
</tbody></table>
<div class="example"><div class="ex-h">Ví dụ 6.1 - Từ tương quan</div>
<p>σ<sub>i</sub> = 35%, σ<sub>M</sub> = 20%, ρ<sub>i,M</sub> = 0,7. Tính beta.</p>
<details><summary>Xem lời giải</summary><p>β = 0,7 × 35% / 20% = <b>1,225</b>. Lưu ý: σ<sub>i</sub> lớn gấp 1,75 lần σ<sub>M</sub> nhưng β chỉ 1,225, vì một phần rủi ro của cổ phiếu là phi hệ thống.</p></details></div>
<div class="example"><div class="ex-h">Ví dụ 6.2 - Từ dữ liệu lịch sử</div>
<table class="plain"><thead><tr><th>Năm</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th></tr></thead><tbody>
<tr><td>Thị trường R<sub>M</sub></td><td>10%</td><td>-6%</td><td>18%</td><td>4%</td><td>14%</td></tr>
<tr><td>Cổ phiếu R<sub>i</sub></td><td>24%</td><td>-14%</td><td>14%</td><td>10%</td><td>16%</td></tr>
</tbody></table>
<details><summary>Xem lời giải</summary>
<p>R̄<sub>M</sub> = 8%, R̄<sub>i</sub> = 10%. Độ lệch của M: 0,02; -0,14; 0,10; -0,04; 0,06. Độ lệch của i: 0,14; -0,24; 0,04; 0; 0,06.</p>
<p>Cov = (0,0028 + 0,0336 + 0,004 + 0 + 0,0036) / 4 = 0,044 / 4 = 0,011. σ<sub>M</sub><sup>2</sup> = (0,0004 + 0,0196 + 0,01 + 0,0016 + 0,0036) / 4 = 0,0352 / 4 = 0,0088.</p>
<p>β = 0,011 / 0,0088 = <b>1,25</b>.</p>
${keys([
  ['Nhập dữ liệu: X = thị trường, Y = cổ phiếu', '[2ND] [7] [2ND] [CE/C] 10 [ENTER] [↓] 24 [ENTER] [↓] ...', 'X05 = 14, Y05 = 16'],
  ['Chọn hồi quy tuyến tính', '[2ND] [8] rồi [2ND] [ENTER] đến LIN', 'LIN'],
  ['Đọc hệ số góc và tương quan', '[↓] nhiều lần', 'a = 0, b = 1.2500, r = 0.8170'],
])}
<p>Hệ số góc b chính là beta (độ dốc SCL); hệ số chặn a là alpha của mô hình thị trường. R<sup>2</sup> = 0,817<sup>2</sup> = 0,667: khoảng 2/3 phương sai của cổ phiếu là hệ thống.</p></details></div>
<p class="warn"><b>Bẫy:</b> X phải là <b>thị trường</b>, Y là cổ phiếu. Đảo ngược thì b là một con số khác hẳn, không phải beta.</p>
<h4>Beta danh mục</h4>
<div class="formula">β<sub>P</sub> = Σ w<sub>i</sub>β<sub>i</sub></div>
<p>Ví dụ: 50% vào quỹ có β = 1,4, 30% vào quỹ có β = 0,9, 20% tín phiếu (β = 0): β<sub>P</sub> = 0,7 + 0,27 + 0 = <b>0,97</b>. Khác với σ, beta cộng tuyến tính được.</p>`,
    },
    {
      title: '7. CAPM: giả định và đường thị trường chứng khoán (SML)',
      minutes: 14,
      html: `
<h4>Các giả định của CAPM</h4>
<ol>
  <li>Nhà đầu tư <b>ngại rủi ro, lý trí, tối đa hóa hữu dụng</b>; chỉ quan tâm E(R) và σ.</li>
  <li><b>Thị trường không ma sát</b>: không thuế, không phí giao dịch, vay và cho vay không giới hạn ở R<sub>f</sub>, được bán khống.</li>
  <li>Cùng một <b>kỳ đầu tư duy nhất</b> (single holding period).</li>
  <li><b>Kỳ vọng đồng nhất</b> về E(R), σ, ρ của mọi tài sản.</li>
  <li>Mọi tài sản <b>chia nhỏ vô hạn</b> và có thể giao dịch.</li>
  <li>Nhà đầu tư là <b>người chấp nhận giá</b> (price taker): không ai đủ lớn để tác động giá.</li>
</ol>
<p>Các giả định này không thực tế, nhưng mô hình vẫn hữu ích như một chuẩn đối chiếu. Từ đó suy ra ${t('capm', 'CAPM')}:</p>
<div class="formula">E(R<sub>i</sub>) = R<sub>f</sub> + β<sub>i</sub> × [E(R<sub>M</sub>) - R<sub>f</sub>]</div>
<p>[E(R<sub>M</sub>) - R<sub>f</sub>] là ${t('mrp', 'phần bù rủi ro thị trường (market risk premium)')}. Vẽ E(R) theo β ta có ${t('sml', 'đường thị trường chứng khoán (SML)')}: cắt trục tung tại R<sub>f</sub>, đi qua điểm (β = 1, E(R<sub>M</sub>)), độ dốc = phần bù rủi ro thị trường.</p>
<div class="example"><div class="ex-h">Ví dụ 7.1</div>
<p>R<sub>f</sub> = 4%, E(R<sub>M</sub>) = 10%, β = 1,3. Lợi suất kỳ vọng theo CAPM?</p>
<details><summary>Xem lời giải</summary><p>E(R) = 4% + 1,3 × (10% - 4%) = <b>11,8%</b>. Bẫy: 4% + 1,3 × 10% = 17% (dùng E(R<sub>M</sub>) thay cho phần bù rủi ro).</p></details></div>
<p class="warn"><b>Đọc kỹ đề:</b> đề có thể cho "expected market return 10%" (phải trừ R<sub>f</sub>) hoặc "market risk premium 6%" (dùng thẳng). Nhầm hai cách cho là lỗi số 1 của phần này.</p>
<h4>Thử ngay: SML và định giá</h4>
<div class="widget" data-widget="sml"></div>`,
    },
    {
      title: '8. Ứng dụng của CAPM và SML',
      minutes: 13,
      html: `
<h4>a) Ước lượng lợi suất yêu cầu: định giá và lập ngân sách vốn</h4>
<p>CAPM cho ${t('coe', 'chi phí vốn chủ sở hữu (cost of equity)')} để chiết khấu dòng tiền khi định giá cổ phiếu (EQ), và để tính chi phí vốn của dự án (CF). Ví dụ: dự án có β = 1,4, R<sub>f</sub> = 3%, phần bù thị trường 6%: lợi suất yêu cầu = 3% + 1,4 × 6% = <b>11,4%</b>. Dự án chỉ đáng làm nếu IRR vượt mức này.</p>

<h4>b) Lựa chọn chứng khoán: trên hay dưới SML?</h4>
<p>So lợi suất <b>dự báo</b> (từ phân tích của bạn) với lợi suất <b>yêu cầu</b> (từ SML). Chênh lệch là alpha dự báo.</p>
<div class="example"><div class="ex-h">Ví dụ 8.1</div>
<p>R<sub>f</sub> = 3%, E(R<sub>M</sub>) = 9%. Nhà phân tích dự báo: X (β = 0,8) lợi suất 9%; Y (β = 1,2) lợi suất 9,5%; Z (β = 1,5) lợi suất 12%.</p>
<details><summary>Xem lời giải</summary>
<table class="plain"><thead><tr><th>Cổ phiếu</th><th>Yêu cầu (SML)</th><th>Dự báo</th><th>Alpha</th><th>Kết luận</th></tr></thead><tbody>
<tr><td>X</td><td>3% + 0,8 × 6% = 7,8%</td><td>9,0%</td><td>+1,2%</td><td>Nằm trên SML: <b>định giá thấp</b>, mua</td></tr>
<tr><td>Y</td><td>3% + 1,2 × 6% = 10,2%</td><td>9,5%</td><td>-0,7%</td><td>Nằm dưới SML: <b>định giá cao</b>, bán</td></tr>
<tr><td>Z</td><td>3% + 1,5 × 6% = 12,0%</td><td>12,0%</td><td>0</td><td>Nằm trên SML: <b>định giá hợp lý</b></td></tr>
</tbody></table>
<p>Y có lợi suất dự báo cao hơn X nhưng vẫn là cổ phiếu tệ hơn, vì nó không bù đủ cho beta cao.</p></details></div>
<div class="example"><div class="ex-h">Ví dụ 8.2 - Lợi suất dự báo từ giá</div>
<p>Giá hiện tại 50, dự báo giá sau 1 năm 54 và cổ tức 1,5. β = 1,2, R<sub>f</sub> = 3%, phần bù thị trường 6%.</p>
<details><summary>Xem lời giải</summary><p>Lợi suất dự báo = (54 + 1,5 - 50) / 50 = <b>11%</b>. Lợi suất yêu cầu = 3% + 1,2 × 6% = 10,2%. Alpha = +0,8%: định giá thấp.</p></details></div>
<div class="key">Trên SML (lợi suất dự báo &gt; yêu cầu) → giá hiện tại <b>quá thấp</b> → mua. Dưới SML → <b>quá cao</b> → bán. Khi mọi người cùng hành động, giá điều chỉnh cho đến khi tài sản trở về SML.</div>

<h4>c) Xây dựng danh mục và d) đánh giá hiệu quả</h4>
<p>Nhà quản lý chủ động thêm vào danh mục thị trường các chứng khoán có alpha dương, với tỷ trọng tăng theo alpha và giảm theo rủi ro phi hệ thống mà chúng mang thêm. CAPM cũng là chuẩn để chấm điểm nhà quản lý: Treynor và Jensen's alpha ở phần 9 đều dựa trên SML.</p>`,
    },
    {
      title: '9. Thước đo hiệu quả: Sharpe, Treynor, M² và Jensen\'s alpha',
      minutes: 20,
      html: `
<table class="plain"><thead><tr><th>Thước đo</th><th>Công thức</th><th>Rủi ro dùng</th><th>Đọc thế nào</th></tr></thead><tbody>
<tr><td>${t('sharpe', 'Sharpe ratio')}</td><td>${frac('R<sub>P</sub> - R<sub>f</sub>', 'σ<sub>P</sub>')}</td><td>Tổng rủi ro σ</td><td>Lợi suất vượt trội trên mỗi đơn vị tổng rủi ro; độ dốc CAL của danh mục</td></tr>
<tr><td>${t('m2', 'M² (Modigliani-Modigliani)')}</td><td>(R<sub>P</sub> - R<sub>f</sub>) × ${frac('σ<sub>M</sub>', 'σ<sub>P</sub>')} + R<sub>f</sub></td><td>Tổng rủi ro σ</td><td>Lợi suất của danh mục khi "co giãn" về cùng σ với thị trường; so trực tiếp với R<sub>M</sub></td></tr>
<tr><td>${t('treynor', 'Treynor ratio')}</td><td>${frac('R<sub>P</sub> - R<sub>f</sub>', 'β<sub>P</sub>')}</td><td>Rủi ro hệ thống β</td><td>Lợi suất vượt trội trên mỗi đơn vị beta</td></tr>
<tr><td>${t('jensen', "Jensen's alpha")}</td><td>R<sub>P</sub> - [R<sub>f</sub> + β<sub>P</sub>(R<sub>M</sub> - R<sub>f</sub>)]</td><td>Rủi ro hệ thống β</td><td>Khoảng cách theo chiều dọc từ danh mục đến SML</td></tr>
</tbody></table>
<p>M<sup>2</sup> - R<sub>M</sub> gọi là <b>M<sup>2</sup> alpha</b>. Sharpe và M<sup>2</sup> luôn xếp hạng giống nhau; M<sup>2</sup> chỉ đổi sang đơn vị phần trăm dễ hiểu. Danh mục có Sharpe lớn hơn thị trường ⇔ nằm trên CML ⇔ M<sup>2</sup> alpha dương.</p>

<div class="example"><div class="ex-h">Ví dụ 9.1 - Ba quỹ, bốn thước đo</div>
<p>R<sub>f</sub> = 3%; thị trường: R<sub>M</sub> = 10%, σ<sub>M</sub> = 18%. Quỹ P1: R = 13%, σ = 25%, β = 1,1. Quỹ P2: R = 9%, σ = 12%, β = 0,7. Quỹ P3: R = 15%, σ = 32%, β = 1,6.</p>
<details><summary>Xem lời giải</summary>
<table class="plain"><thead><tr><th></th><th>Sharpe</th><th>M²</th><th>Treynor</th><th>Jensen's α</th></tr></thead><tbody>
<tr><td>Thị trường</td><td>7/18 = 0,389</td><td>10,00%</td><td>7,00%</td><td>0</td></tr>
<tr><td>P1</td><td>10/25 = 0,400</td><td>3% + 0,4 × 18% = 10,20%</td><td>10/1,1 = 9,09%</td><td>13% - 10,7% = <b>+2,30%</b></td></tr>
<tr><td>P2</td><td>6/12 = <b>0,500</b></td><td><b>12,00%</b></td><td>6/0,7 = 8,57%</td><td>9% - 7,9% = +1,10%</td></tr>
<tr><td>P3</td><td>12/32 = 0,375</td><td>9,75%</td><td>12/1,6 = 7,50%</td><td>15% - 14,2% = +0,80%</td></tr>
</tbody></table>
<p><b>Xếp hạng theo tổng rủi ro</b> (Sharpe, M<sup>2</sup>): P2 &gt; P1 &gt; thị trường &gt; P3. <b>Theo rủi ro hệ thống</b> (Treynor, α): P1 &gt; P2 &gt; P3 &gt; thị trường.</p>
<p>P3 có alpha dương và Treynor cao hơn thị trường, nhưng Sharpe thấp hơn thị trường: quỹ này mang <b>nhiều rủi ro phi hệ thống</b> (σ = 32% so với phần hệ thống 1,6 × 18% = 28,8%). Nếu P3 là toàn bộ tài sản của khách hàng, nó thua thị trường; nếu P3 chỉ là một mảnh nhỏ trong danh mục lớn đã đa dạng hóa, nó vẫn thêm giá trị.</p>
<p>Kiểm tra M<sup>2</sup> của P2: để có σ = 18% cần 150% P2 và vay 50% ở R<sub>f</sub>: 1,5 × 9% - 0,5 × 3% = 12,00%.</p></details></div>
<div class="key"><b>Chọn thước đo nào?</b><br>Danh mục là <b>toàn bộ</b> tài sản của nhà đầu tư, hoặc <b>chưa đa dạng hóa tốt</b> → Sharpe hoặc M<sup>2</sup> (tổng rủi ro).<br>Danh mục <b>đa dạng hóa tốt</b>, hoặc là <b>một phần</b> của danh mục lớn hơn → Treynor hoặc Jensen's alpha (rủi ro hệ thống).</div>
<p class="warn"><b>Bẫy:</b> (1) Sharpe là tỷ số "trơn": chỉ có ý nghĩa khi <b>so sánh</b> với Sharpe của danh mục khác hoặc của thị trường. (2) Treynor và Sharpe cho kết quả cùng chiều chỉ khi danh mục đa dạng hóa tốt. (3) Jensen's alpha dùng <b>lợi suất thực tế</b> của thị trường trong kỳ, không phải lợi suất kỳ vọng. (4) Mọi thước đo dựa trên beta phụ thuộc vào việc chọn chỉ số đại diện cho thị trường.</p>`,
    },
    {
      title: '10. Tóm tắt: CML và SML, bẫy thường gặp',
      minutes: 10,
      html: `
<table class="plain"><thead><tr><th></th><th>CML</th><th>SML</th></tr></thead><tbody>
<tr><td>Trục ngang</td><td>Tổng rủi ro σ</td><td>Rủi ro hệ thống β</td></tr>
<tr><td>Công thức</td><td>R<sub>f</sub> + [(E(R<sub>M</sub>) - R<sub>f</sub>)/σ<sub>M</sub>] × σ<sub>P</sub></td><td>R<sub>f</sub> + β<sub>i</sub>[E(R<sub>M</sub>) - R<sub>f</sub>]</td></tr>
<tr><td>Độ dốc</td><td>Sharpe của thị trường</td><td>Phần bù rủi ro thị trường</td></tr>
<tr><td>Áp dụng cho</td><td>Chỉ danh mục hiệu quả (R<sub>f</sub> + M)</td><td>Mọi tài sản và danh mục, hiệu quả hay không</td></tr>
<tr><td>Dùng để</td><td>Phân bổ vốn giữa R<sub>f</sub> và M</td><td>Tính lợi suất yêu cầu, định giá, đánh giá</td></tr>
<tr><td>Điểm chung</td><td colspan="2">Đều cắt trục tung tại R<sub>f</sub> và đều đi qua danh mục thị trường</td></tr>
</tbody></table>
<table class="plain"><thead><tr><th>Tình huống</th><th>Nhớ</th></tr></thead><tbody>
<tr><td>Vay để đầu tư &gt; 100%</td><td>Tỷ trọng R<sub>f</sub> âm; trừ chi phí vay. Lãi vay cao hơn → CAL gãy khúc</td></tr>
<tr><td>Rủi ro phi hệ thống</td><td>Đa dạng hóa được miễn phí nên không được bù</td></tr>
<tr><td>Phân tách phương sai</td><td>σ<sub>i</sub><sup>2</sup> = β<sup>2</sup>σ<sub>M</sub><sup>2</sup> + σ<sub>ε</sub><sup>2</sup>; tỷ lệ hệ thống = R<sup>2</sup> = ρ<sup>2</sup></td></tr>
<tr><td>Beta</td><td>Cov/σ<sub>M</sub><sup>2</sup> = ρσ<sub>i</sub>/σ<sub>M</sub>; trên máy: X = thị trường, đọc b</td></tr>
<tr><td>CAPM</td><td>Phân biệt E(R<sub>M</sub>) và phần bù E(R<sub>M</sub>) - R<sub>f</sub></td></tr>
<tr><td>Trên / dưới SML</td><td>Trên: định giá thấp, mua. Dưới: định giá cao, bán</td></tr>
<tr><td>Thước đo hiệu quả</td><td>Sharpe, M<sup>2</sup>: σ, cho danh mục toàn bộ. Treynor, α: β, cho danh mục đa dạng hóa tốt</td></tr>
</tbody></table>
<p>Tiếp theo: tab <b>Luyện tập</b> 10 câu (rút ngẫu nhiên từ ngân hàng 30 câu, mỗi lần làm một bộ khác), rồi PC-03 (tổng quan quản lý danh mục).</p>`,
    },
  ];

  const glossary = {
    sysrisk: ['Systematic risk', 'Rủi ro hệ thống', 'Rủi ro chung của cả thị trường (lãi suất, lạm phát, chu kỳ); không loại bỏ được bằng đa dạng hóa và được bù bằng lợi suất.'],
    nonsys: ['Nonsystematic (unsystematic, idiosyncratic) risk', 'Rủi ro phi hệ thống', 'Rủi ro riêng của từng công ty; loại bỏ được bằng đa dạng hóa nên không được bù.'],
    beta: ['Beta', 'Hệ số beta', 'Cov(Ri, RM)/σM^2: độ nhạy của lợi suất tài sản với thị trường, thước đo rủi ro hệ thống.'],
    capm: ['Capital asset pricing model (CAPM)', 'Mô hình định giá tài sản vốn', 'E(Ri) = Rf + βi[E(RM) - Rf]: lợi suất yêu cầu chỉ phụ thuộc rủi ro hệ thống.'],
    rf: ['Risk-free asset', 'Tài sản phi rủi ro', 'Lợi suất chắc chắn Rf, độ lệch chuẩn 0, hiệp phương sai với mọi tài sản bằng 0.'],
    cal: ['Capital allocation line (CAL)', 'Đường phân bổ vốn', 'Đường thẳng mô tả mọi kết hợp giữa tài sản phi rủi ro và một danh mục rủi ro; độ dốc là tỷ số Sharpe.'],
    homog: ['Homogeneous expectations', 'Kỳ vọng đồng nhất', 'Giả định mọi nhà đầu tư có cùng ước lượng về lợi suất, rủi ro, tương quan.'],
    market: ['Market portfolio', 'Danh mục thị trường', 'Danh mục chứa mọi tài sản rủi ro theo tỷ trọng giá trị thị trường; là danh mục tiếp tuyến khi kỳ vọng đồng nhất.'],
    cml: ['Capital market line (CML)', 'Đường thị trường vốn', 'CAL đi qua danh mục thị trường; trục ngang là σ; chỉ áp dụng cho danh mục hiệu quả.'],
    mprice: ['Market price of risk', 'Giá thị trường của rủi ro', 'Độ dốc CML: (E(RM) - Rf)/σM.'],
    lending: ['Lending portfolio', 'Danh mục cho vay', 'Danh mục trên CML giữa Rf và M: một phần tiền đầu tư vào tài sản phi rủi ro.'],
    borrowing: ['Borrowing (leveraged) portfolio', 'Danh mục vay (có đòn bẩy)', 'Danh mục trên CML bên phải M: vay ở Rf để đầu tư hơn 100% vào M.'],
    passive: ['Passive management', 'Quản lý thụ động', 'Nắm danh mục chỉ số thị trường, không cố tìm chứng khoán định giá sai.'],
    active: ['Active management', 'Quản lý chủ động', 'Lệch khỏi tỷ trọng thị trường để khai thác chứng khoán mà nhà quản lý cho là định giá sai.'],
    rgm: ['Return generating model', 'Mô hình tạo lợi suất', 'Mô hình ước lượng lợi suất tài sản từ một hoặc nhiều yếu tố rủi ro.'],
    sim: ['Single-index model', 'Mô hình chỉ số đơn', 'Mô hình tạo lợi suất chỉ có một yếu tố là lợi suất vượt trội của thị trường.'],
    mm: ['Market model', 'Mô hình thị trường', 'Ri = αi + βiRM + εi; hồi quy lợi suất tài sản theo lợi suất thị trường.'],
    scl: ['Security characteristic line (SCL)', 'Đường đặc trưng chứng khoán', 'Đường hồi quy lợi suất (vượt trội) của tài sản theo thị trường; độ dốc là beta.'],
    mrp: ['Market risk premium', 'Phần bù rủi ro thị trường', 'E(RM) - Rf; độ dốc của SML.'],
    sml: ['Security market line (SML)', 'Đường thị trường chứng khoán', 'Biểu diễn CAPM: lợi suất yêu cầu theo beta; áp dụng cho mọi tài sản.'],
    coe: ['Cost of equity', 'Chi phí vốn chủ sở hữu', 'Lợi suất mà cổ đông yêu cầu; thường ước lượng bằng CAPM.'],
    sharpe: ['Sharpe ratio', 'Tỷ số Sharpe', '(RP - Rf)/σP: lợi suất vượt trội trên mỗi đơn vị tổng rủi ro.'],
    m2: ['M-squared (M²)', 'Thước đo M²', '(RP - Rf) x σM/σP + Rf: lợi suất của danh mục khi điều chỉnh về cùng σ với thị trường.'],
    treynor: ['Treynor ratio', 'Tỷ số Treynor', '(RP - Rf)/βP: lợi suất vượt trội trên mỗi đơn vị rủi ro hệ thống.'],
    jensen: ["Jensen's alpha", 'Alpha của Jensen', 'RP - [Rf + βP(RM - Rf)]: lợi suất vượt so với mức SML yêu cầu.'],
  };

  const practice = [
    { q: 'Rf = 4%, danh mục thị trường có E(RM) = 10% và σM = 16%. Nhà đầu tư vay ở Rf để đầu tư 130% tài sản vào danh mục thị trường. Lợi suất kỳ vọng gần nhất với:', choices: ['11,80%', '13,00%', '14,20%'], answer: 0, explain: 'E = -0,3 x 4% + 1,3 x 10% = 11,80% (σ = 20,8%). Lựa chọn 13,00% quên trừ chi phí vay. Lựa chọn 14,20% cộng thay vì trừ chi phí vay.' },
    { q: 'Lý do chính khiến nhà đầu tư không nên kỳ vọng được bù thêm lợi suất cho rủi ro phi hệ thống là:', choices: ['Rủi ro phi hệ thống luôn nhỏ hơn rủi ro hệ thống', 'Rủi ro phi hệ thống có thể loại bỏ gần như không tốn chi phí bằng đa dạng hóa', 'Rủi ro phi hệ thống không ảnh hưởng đến độ lệch chuẩn của cổ phiếu'], answer: 1, explain: 'Thị trường không trả công cho rủi ro có thể loại bỏ miễn phí. Phương án \'luôn nhỏ hơn rủi ro hệ thống\' sai: với nhiều cổ phiếu riêng lẻ, phần phi hệ thống còn lớn hơn phần hệ thống. Phương án \'không ảnh hưởng đến độ lệch chuẩn\' sai: rủi ro phi hệ thống là một phần của tổng phương sai.' },
    { q: 'Cổ phiếu có σ = 30%, β = 0,9; độ lệch chuẩn thị trường 20%. Tỷ lệ phương sai của cổ phiếu là rủi ro hệ thống gần nhất với:', choices: ['60%', '64%', '36%'], answer: 2, explain: 'Phương sai hệ thống = 0,9² x 0,04 = 0,0324; tổng = 0,09; tỷ lệ = 36%. Lựa chọn 60% là βσM/σi = 0,6, tức hệ số tương quan, chưa bình phương. Lựa chọn 64% là tỷ lệ phi hệ thống.' },
    { q: 'Hệ số tương quan giữa cổ phiếu và thị trường là 0,6; σ cổ phiếu 30%; σ thị trường 20%. Beta của cổ phiếu là:', choices: ['0,40', '0,90', '1,50'], answer: 1, explain: 'β = ρσi/σM = 0,6 x 30%/20% = 0,90. Lựa chọn 0,40 đảo σi và σM. Lựa chọn 1,50 quên nhân với hệ số tương quan.' },
    { q: 'Rf = 3,5%, lợi suất kỳ vọng thị trường 9,5%, beta cổ phiếu 1,4. Lợi suất kỳ vọng theo CAPM gần nhất với:', choices: ['11,90%', '13,30%', '16,80%'], answer: 0, explain: 'E(R) = 3,5% + 1,4 x (9,5% - 3,5%) = 11,90%. Lựa chọn 13,30% là 1,4 x 9,5% (bỏ Rf). Lựa chọn 16,80% dùng E(RM) thay cho phần bù rủi ro thị trường.' },
    { q: 'Rf = 4%, phần bù rủi ro thị trường 6%. Nhà phân tích dự báo cổ phiếu có β = 0,9 sẽ đạt lợi suất 10%. Cổ phiếu này:', choices: ['Nằm dưới SML và bị định giá cao', 'Nằm trên SML và được định giá hợp lý', 'Nằm trên SML và bị định giá thấp'], answer: 2, explain: 'Lợi suất yêu cầu = 4% + 0,9 x 6% = 9,4% < 10% dự báo: alpha +0,6%, điểm nằm phía trên SML, giá hiện tại quá thấp. Nếu nhầm 6% là E(RM) thì được 4% + 0,9 x 2% = 5,8%, vẫn kết luận định giá thấp nhưng sai con số; phương án \'nằm dưới SML và bị định giá cao\' đảo chiều quy tắc.' },
    { q: 'Danh mục gồm 60% quỹ cổ phiếu (β = 1,3), 25% quỹ khác (β = 0,8) và 15% tín phiếu kho bạc. Beta danh mục là:', choices: ['1,15', '0,98', '0,70'], answer: 1, explain: 'βP = 0,6 x 1,3 + 0,25 x 0,8 + 0,15 x 0 = 0,98. Lựa chọn 1,15 bỏ tín phiếu rồi chia lại trọng số cho 85%. Lựa chọn 0,70 là trung bình cộng đơn giản của 1,3; 0,8 và 0.' },
    { q: 'Một khách hàng đặt toàn bộ tài sản vào một quỹ tập trung chỉ gồm 8 cổ phiếu. Thước đo phù hợp nhất để đánh giá quỹ này cho khách hàng là:', choices: ['Treynor ratio', "Jensen's alpha", 'Sharpe ratio'], answer: 2, explain: 'Quỹ là toàn bộ tài sản và chưa đa dạng hóa tốt nên rủi ro liên quan là tổng rủi ro σ: dùng Sharpe (hoặc M²). Treynor và Jensen chỉ tính rủi ro hệ thống, bỏ qua phần rủi ro phi hệ thống lớn mà khách hàng đang chịu.' },
    { q: 'Quỹ đạt lợi suất 12% với β = 1,2. Rf = 3%, lợi suất thị trường 9%. Jensen\'s alpha gần nhất với:', choices: ['1,80%', '3,00%', '1,20%'], answer: 0, explain: 'α = 12% - [3% + 1,2 x (9% - 3%)] = 12% - 10,2% = 1,80%. Lựa chọn 3,00% so thẳng với lợi suất thị trường, bỏ qua beta. Lựa chọn 1,20% dùng 1,2 x 9% mà quên Rf.' },
    { q: 'Quỹ có lợi suất 11%, σ = 15%. Rf = 3%, σ thị trường 20%, lợi suất thị trường 10%. M² của quỹ gần nhất với:', choices: ['9,00%', '13,67%', '14,67%'], answer: 1, explain: 'Sharpe = 8%/15% = 0,5333; M² = 3% + 0,5333 x 20% = 13,67% (M² alpha = +3,67% so với thị trường). Lựa chọn 9,00% đảo tỷ số σP/σM. Lựa chọn 14,67% nhân cả lợi suất 11% với σM/σP mà không trừ và cộng lại Rf.' },
    { q: "Rf = 3%; danh mục rủi ro M có E = 11%, σ = 20%. Nhà đầu tư đặt 40% vào M và 60% vào tài sản phi rủi ro. Lợi suất kỳ vọng và độ lệch chuẩn của danh mục lần lượt gần nhất với:", choices: ["6,20% và 8,00%", "6,20% và 12,00%", "7,80% và 8,00%"], answer: 0, explain: "E = 0,6 x 3% + 0,4 x 11% = 6,20%; σ = 0,4 x 20% = 8,00% vì tài sản phi rủi ro có σ = 0 và hiệp phương sai bằng 0. Lựa chọn \"6,20% và 12,00%\" nhân σ với tỷ trọng phi rủi ro 60%. Lựa chọn \"7,80% và 8,00%\" đảo tỷ trọng khi tính lợi suất (0,4 x 3% + 0,6 x 11%)." },
    { q: "Danh mục rủi ro có E = 12%, σ = 20%. Lãi suất gửi phi rủi ro 3%, lãi suất vay 6%. Nhà đầu tư vay để đầu tư 150% tài sản vào danh mục rủi ro. Lợi suất kỳ vọng gần nhất với:", choices: ["16,50%", "15,00%", "18,00%"], answer: 1, explain: "Vay 50% ở lãi suất vay 6%: E = 1,5 x 12% - 0,5 x 6% = 15,00%. Lựa chọn 16,50% dùng lãi suất gửi 3% cho khoản vay, bỏ qua việc vay đắt hơn (CAL gãy khúc). Lựa chọn 18,00% quên trừ chi phí vay (1,5 x 12%)." },
    { q: "Khi lãi suất vay cao hơn lãi suất cho vay phi rủi ro, đường phân bổ vốn (CAL) của nhà đầu tư nhiều khả năng:", choices: ["Dịch song song lên trên ở cả hai phía danh mục rủi ro", "Dốc hơn ở đoạn bên phải danh mục rủi ro (vay) so với đoạn bên trái (cho vay)", "Gãy khúc tại danh mục rủi ro, đoạn vay thoải hơn đoạn cho vay"], answer: 2, explain: "Độ dốc mỗi đoạn là (E - lãi suất)/σ. Đoạn vay dùng lãi suất cao hơn nên độ dốc nhỏ hơn: CAL gãy khúc tại danh mục rủi ro, phần bên phải thoải hơn. Phương án \"đoạn vay dốc hơn\" nói ngược. Phương án \"dịch song song lên trên\" sai vì lãi vay cao làm giảm lợi suất của danh mục có đòn bẩy chứ không làm tăng." },
    { q: "Rf = 4%, E(RM) = 10%, σM = 15%. Một danh mục hiệu quả nằm trên CML có σ = 12%. Lợi suất kỳ vọng của danh mục gần nhất với:", choices: ["8,80%", "12,00%", "8,00%"], answer: 0, explain: "Độ dốc CML = (10% - 4%)/15% = 0,4. E = 4% + 0,4 x 12% = 8,80%. Lựa chọn 12,00% dùng độ dốc E(RM)/σM = 0,667 (quên trừ Rf ở tử số). Lựa chọn 8,00% lấy 10% x 12%/15%, bỏ qua phần lợi suất phi rủi ro." },
    { q: "Phát biểu nào về đường thị trường vốn (CML) là đúng nhất?", choices: ["CML áp dụng cho mọi tài sản riêng lẻ, kể cả tài sản không hiệu quả", "CML là trường hợp đặc biệt của CAL, trong đó danh mục rủi ro là danh mục thị trường, dựa trên giả định kỳ vọng đồng nhất", "Độ dốc của CML là phần bù rủi ro thị trường E(RM) - Rf"], answer: 1, explain: "Với kỳ vọng đồng nhất, mọi nhà đầu tư cùng chọn một danh mục tiếp tuyến, và khi cân bằng đó là danh mục thị trường; CAL đi qua nó là CML. Phương án \"áp dụng cho mọi tài sản\" mô tả SML; CML chỉ dành cho danh mục hiệu quả (kết hợp Rf và M). Phương án \"độ dốc là phần bù rủi ro thị trường\" là độ dốc của SML; độ dốc CML là (E(RM) - Rf)/σM." },
    { q: "Cổ phiếu có σ = 32% và β = 0,8; độ lệch chuẩn thị trường 20%. Độ lệch chuẩn của phần rủi ro phi hệ thống gần nhất với:", choices: ["16,00%", "7,68%", "27,71%"], answer: 2, explain: "Phương sai hệ thống = 0,8² x 0,04 = 0,0256. Phương sai phi hệ thống = 0,1024 - 0,0256 = 0,0768, độ lệch chuẩn = √0,0768 = 27,71%. Lựa chọn 16,00% trừ trực tiếp độ lệch chuẩn (32% - 0,8 x 20%), sai vì chỉ phương sai mới cộng được. Lựa chọn 7,68% là phương sai phi hệ thống 0,0768 đọc nhầm thành phần trăm, chưa lấy căn." },
    { q: "Cổ phiếu X có σ = 40%, β = 0,7; cổ phiếu Y có σ = 25%, β = 1,3. Theo CAPM, phát biểu nào đúng nhất?", choices: ["Y có lợi suất kỳ vọng cao hơn vì rủi ro hệ thống lớn hơn", "X có lợi suất kỳ vọng cao hơn vì tổng rủi ro lớn hơn", "Hai cổ phiếu có lợi suất kỳ vọng bằng nhau vì rủi ro phi hệ thống được bù như rủi ro hệ thống"], answer: 0, explain: "CAPM chỉ trả công cho rủi ro hệ thống (beta). Y có β = 1,3 > 0,7 nên lợi suất kỳ vọng cao hơn, dù σ của Y thấp hơn. Phương án \"X cao hơn vì tổng rủi ro lớn hơn\" nhầm σ với β: phần lớn rủi ro của X là phi hệ thống, không được bù. Phương án \"bằng nhau\" sai vì rủi ro phi hệ thống không được bù." },
    { q: "Sự kiện nào sau đây nhiều khả năng là nguồn rủi ro hệ thống?", choices: ["Tổng giám đốc của một công ty bất ngờ từ chức", "Ngân hàng trung ương tăng lãi suất điều hành ngoài dự kiến", "Một nhà máy của công ty bị đình công kéo dài"], answer: 1, explain: "Thay đổi lãi suất điều hành tác động đến hầu hết tài sản trong nền kinh tế, không thể loại bỏ bằng đa dạng hóa: đó là rủi ro hệ thống. Việc tổng giám đốc từ chức và đình công ở một nhà máy là sự kiện riêng của từng công ty (rủi ro phi hệ thống), gần như triệt tiêu trong danh mục đa dạng hóa." },
    { q: "Theo mô hình thị trường, cổ phiếu có α = -0,5% và β = 1,4. Nếu lợi suất thị trường là -6%, lợi suất dự báo của cổ phiếu gần nhất với:", choices: ["-8,40%", "-7,90%", "-8,90%"], answer: 2, explain: "Ri = αi + βiRM = -0,5% + 1,4 x (-6%) = -0,5% - 8,4% = -8,90%. Lựa chọn -8,40% bỏ qua hệ số chặn α. Lựa chọn -7,90% cộng α với dấu sai (+0,5%)." },
    { q: "Dùng mô hình thị trường: cổ phiếu i có β = 1,5 và σ = 40%; cổ phiếu j có β = 0,6 và σ = 20%; σM = 18%. Hệ số tương quan giữa i và j gần nhất với:", choices: ["0,90", "0,36", "0,0292"], answer: 1, explain: "Cov(i, j) = βiβjσM² = 1,5 x 0,6 x 0,0324 = 0,02916. ρ = 0,02916/(0,40 x 0,20) = 0,36. Lựa chọn 0,90 chỉ lấy tích hai beta. Lựa chọn 0,0292 là hiệp phương sai, chưa chia cho tích hai độ lệch chuẩn." },
    { q: "Phát biểu nào về mô hình tạo lợi suất là đúng nhất?", choices: ["Mô hình 3 yếu tố Fama-French dùng các yếu tố thị trường, quy mô (SMB) và giá trị (HML)", "Mô hình thị trường là mô hình nhiều yếu tố, gồm yếu tố thị trường và yếu tố quán tính", "Mô hình chỉ số đơn dùng tăng trưởng GDP làm yếu tố duy nhất thay cho lợi suất thị trường"], answer: 0, explain: "Fama-French dùng ba yếu tố: thị trường, quy mô (SMB) và giá trị (HML); Carhart thêm quán tính thành 4 yếu tố. Phương án \"mô hình thị trường là mô hình nhiều yếu tố\" sai: mô hình thị trường chỉ có một yếu tố là lợi suất thị trường. Phương án \"chỉ số đơn dùng GDP\" sai: yếu tố duy nhất của mô hình chỉ số đơn là lợi suất vượt trội của thị trường." },
    { q: "Hiệp phương sai giữa cổ phiếu và thị trường là 0,0168. Độ lệch chuẩn của cổ phiếu 28%, của thị trường 14%. Beta của cổ phiếu gần nhất với:", choices: ["0,43", "0,12", "0,86"], answer: 2, explain: "β = Cov/σM² = 0,0168/0,0196 = 0,86. Lựa chọn 0,43 là hệ số tương quan (0,0168/(0,28 x 0,14)), không phải beta. Lựa chọn 0,12 chia cho σM thay vì σM²." },
    { q: "Lợi suất 4 năm của thị trường: 6%, -4%, 12%, 2%; của cổ phiếu: 10%, -2%, 8%, 4%. Beta của cổ phiếu ước lượng từ dữ liệu này gần nhất với:", choices: ["0,68", "1,10", "0,51"], answer: 0, explain: "Trung bình thị trường 4%, cổ phiếu 5%. Tổng tích độ lệch = 0,001 + 0,0056 + 0,0024 + 0,0002 = 0,0092, Cov = 0,0092/3 = 0,003067. Phương sai thị trường = 0,0136/3 = 0,004533. β = 0,003067/0,004533 = 0,68. Lựa chọn 1,10 chia cho phương sai của cổ phiếu (hồi quy ngược, X là cổ phiếu). Lựa chọn 0,51 trộn Cov chia 4 với phương sai chia 3." },
    { q: "Giả định nào sau đây là giả định của CAPM?", choices: ["Nhà đầu tư có kỳ vọng khác nhau về lợi suất và rủi ro của tài sản", "Nhà đầu tư có thể vay và cho vay không giới hạn ở lãi suất phi rủi ro", "Nhà đầu tư có nhiều kỳ đầu tư khác nhau tùy mục tiêu"], answer: 1, explain: "CAPM giả định thị trường không ma sát, trong đó vay và cho vay không giới hạn ở Rf. Phương án \"kỳ vọng khác nhau\" ngược với giả định kỳ vọng đồng nhất (homogeneous expectations). Phương án \"nhiều kỳ đầu tư\" ngược với giả định một kỳ đầu tư duy nhất." },
    { q: "Hai cổ phiếu được định giá hợp lý nằm trên SML: A có β = 0,8 và lợi suất kỳ vọng 9,2%; B có β = 1,5 và lợi suất kỳ vọng 13,4%. Lợi suất kỳ vọng của thị trường gần nhất với:", choices: ["6,00%", "4,40%", "10,40%"], answer: 2, explain: "Độ dốc SML = (13,4% - 9,2%)/(1,5 - 0,8) = 6% (phần bù rủi ro thị trường). Rf = 9,2% - 0,8 x 6% = 4,4%. E(RM) = Rf + phần bù = 10,40% (điểm β = 1). Lựa chọn 6,00% là phần bù rủi ro thị trường, chưa cộng Rf. Lựa chọn 4,40% là Rf (điểm β = 0)." },
    { q: "Rf = 4%, lợi suất kỳ vọng thị trường 10%. Một tài sản có β = -0,3. Lợi suất kỳ vọng theo CAPM gần nhất với:", choices: ["2,20%", "5,80%", "1,00%"], answer: 0, explain: "E(R) = 4% + (-0,3) x (10% - 4%) = 4% - 1,8% = 2,20%. Tài sản có beta âm giúp phòng hộ rủi ro thị trường, nên nhà đầu tư chấp nhận lợi suất thấp hơn Rf. Lựa chọn 5,80% bỏ dấu âm của beta. Lựa chọn 1,00% dùng E(RM) = 10% thay cho phần bù rủi ro 6%." },
    { q: "Giá cổ phiếu hiện tại 40, dự báo giá sau 1 năm 43 và cổ tức 1,2. β = 0,9; Rf = 2,5%; phần bù rủi ro thị trường 7%. Kết luận nào đúng nhất?", choices: ["Bị định giá cao, alpha -1,30%", "Bị định giá thấp, alpha 1,70%", "Bị định giá thấp, alpha 3,95%"], answer: 1, explain: "Lợi suất dự báo = (43 + 1,2 - 40)/40 = 10,5%. Lợi suất yêu cầu = 2,5% + 0,9 x 7% = 8,8%. Alpha = +1,70%: nằm trên SML, định giá thấp. Lựa chọn \"alpha -1,30%\" quên cổ tức (lợi suất dự báo chỉ 7,5%). Lựa chọn \"alpha 3,95%\" coi 7% là lợi suất thị trường rồi trừ Rf lần nữa (phần bù 4,5%)." },
    { q: "Dự án có β = 0,7 và IRR 7,5%. Rf = 3,5%, lợi suất kỳ vọng thị trường 9,5%. Quyết định nào phù hợp nhất?", choices: ["Chấp nhận, vì IRR cao hơn lợi suất yêu cầu 6,65%", "Chấp nhận, vì IRR cao hơn lãi suất phi rủi ro", "Từ chối, vì lợi suất yêu cầu 7,70% cao hơn IRR"], answer: 2, explain: "Lợi suất yêu cầu theo CAPM = 3,5% + 0,7 x (9,5% - 3,5%) = 7,70% > IRR 7,5%, nên từ chối. Lựa chọn \"lợi suất yêu cầu 6,65%\" lấy 0,7 x 9,5%, coi lợi suất thị trường là phần bù rủi ro và quên cộng Rf. Lựa chọn \"cao hơn lãi suất phi rủi ro\" bỏ qua phần bù cho rủi ro hệ thống của dự án." },
    { q: "Quỹ có lợi suất 14%, β = 1,25, σ = 20%. Rf = 4%. Tỷ số Treynor của quỹ gần nhất với:", choices: ["8,00%", "11,20%", "0,50"], answer: 0, explain: "Treynor = (14% - 4%)/1,25 = 8,00% (lợi suất vượt trội trên mỗi đơn vị beta). Lựa chọn 11,20% quên trừ Rf (14%/1,25). Lựa chọn 0,50 là tỷ số Sharpe (10%/20%), dùng tổng rủi ro thay cho beta." },
    { q: "Quỹ có lợi suất 8%, σ = 10%. Rf = 2%; thị trường có lợi suất 10%, σ = 16%. M² alpha của quỹ (M² - RM) gần nhất với:", choices: ["-2,00%", "1,60%", "11,60%"], answer: 1, explain: "Sharpe của quỹ = (8% - 2%)/10% = 0,6. M² = 2% + 0,6 x 16% = 11,60%; M² alpha = 11,60% - 10% = 1,60%: sau khi điều chỉnh về cùng σ với thị trường, quỹ tốt hơn thị trường. Lựa chọn -2,00% so lợi suất thô 8% với 10%, bỏ qua việc quỹ ít rủi ro hơn. Lựa chọn 11,60% là M², chưa trừ lợi suất thị trường." },
  ];

  // Widget: SML - lợi suất yêu cầu, lợi suất dự báo và alpha.
  const widgets = {
    sml(el) {
      el.innerHTML = `
        <div class="w-row"><label>Beta: <b data-o="b">1,20</b><input type="range" min="-0.5" max="2.5" step="0.05" value="1.2" data-i="b"></label>
        <label>Lợi suất dự báo: <b data-o="f">11,0%</b><input type="range" min="0" max="20" step="0.25" value="11" data-i="f"></label>
        <label>Rf: <b data-o="rf">3,0%</b><input type="range" min="0" max="8" step="0.25" value="3" data-i="rf"></label>
        <label>Phần bù thị trường: <b data-o="m">6,0%</b><input type="range" min="2" max="10" step="0.25" value="6" data-i="m"></label></div>
        <div class="w-out"><div class="w-price" data-o="p"></div><div class="w-bar"><span data-o="bar"></span><i></i></div><div class="w-note" data-o="note"></div></div>`;
      const q = s => el.querySelector(s);
      const fmt = (x, d = 2) => x.toFixed(d).replace('.', ',');
      const upd = () => {
        const b = +q('[data-i="b"]').value, f = +q('[data-i="f"]').value, rf = +q('[data-i="rf"]').value, m = +q('[data-i="m"]').value;
        const req = rf + b * m, a = f - req;
        q('[data-o="b"]').textContent = fmt(b);
        q('[data-o="f"]').textContent = `${fmt(f, 2)}%`;
        q('[data-o="rf"]').textContent = `${fmt(rf, 2)}%`;
        q('[data-o="m"]').textContent = `${fmt(m, 2)}%`;
        q('[data-o="p"]').textContent = `Lợi suất yêu cầu (SML) = ${fmt(rf, 2)}% + ${fmt(b)} x ${fmt(m, 2)}% = ${fmt(req)}%`;
        q('[data-o="bar"]').style.width = `${Math.max(0, Math.min(100, (req / 25) * 100))}%`;
        q('[data-o="note"]').textContent = Math.abs(a) < 0.005 ? 'Alpha = 0: nằm trên SML, định giá hợp lý.'
          : a > 0 ? `Alpha = +${fmt(a)}%: nằm phía trên SML, cổ phiếu bị định giá thấp (nên mua).`
            : `Alpha = ${fmt(a)}%: nằm phía dưới SML, cổ phiếu bị định giá cao (nên bán).`;
      };
      el.addEventListener('input', upd);
      upd();
    },
  };

  window.LESSONS['PC-02'] = {
    moduleId: 'PC-02',
    calculator: 'BA II Plus',
    warmup: [
      'Ôn PC-01: khi số cổ phiếu trong danh mục tỷ trọng đều tăng rất lớn, phương sai danh mục tiến tới đại lượng nào?',
      'Rf = 3%, danh mục rủi ro E = 10%, σ = 20%. Độ dốc CAL là bao nhiêu? Đặt 50% vào danh mục rủi ro thì σ bằng bao nhiêu?',
      'Đoán trước: hai cổ phiếu cùng σ = 40%, một cổ phiếu là công ty điện lực, một là công ty công nghệ. Cổ phiếu nào nên có lợi suất yêu cầu cao hơn, và vì sao không thể trả lời chỉ bằng σ?',
    ],
    sections,
    glossary,
    practice,
    widgets,
    slides: [],
    wrapup: [
      'Vẽ CML và SML cạnh nhau, ghi rõ trục, điểm cắt trục tung, độ dốc và vị trí danh mục thị trường trên mỗi đường.',
      'Giải thích bằng lời vì sao quỹ P3 trong ví dụ 9.1 có alpha dương nhưng Sharpe thấp hơn thị trường.',
      'Viết lại 4 công thức Sharpe, Treynor, M², Jensen\'s alpha và ghi bên cạnh mỗi công thức: dùng σ hay β?',
    ],
  };
}());
