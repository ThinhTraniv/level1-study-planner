// Bài giảng QM-08 - The Return and Risk of a Financial Portfolio (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t, frac, keys, pages } = window.CFAH;

  const sections = [
    {
      title: '1. Bức tranh lớn',
      minutes: 5,
      html: `
<p>Module trước bạn đo lợi suất và rủi ro của <b>từng tài sản</b>. Module này trả lời câu hỏi thực tế hơn: khi <b>gộp nhiều tài sản</b> vào một danh mục thì lợi suất và rủi ro thay đổi thế nào, và nhà đầu tư nên chọn danh mục nào?</p>
<div class="key">Lợi suất danh mục = trung bình có trọng số của lợi suất từng tài sản.<br>Rủi ro danh mục <b>nhỏ hơn</b> trung bình có trọng số của rủi ro từng tài sản, trừ khi các tài sản tương quan hoàn hảo (ρ = +1). Phần "biến mất" đó chính là lợi ích của ${t('diversify', 'đa dạng hóa')}.</div>
<p>Ba bước của module, ứng với 3 LOS:</p>
<ol>
  <li><b>Đo lường</b>: ${t('er', 'lợi suất kỳ vọng')}, ${t('variance', 'phương sai')}, độ lệch chuẩn, ${t('cov', 'hiệp phương sai')} và ${t('corr', 'hệ số tương quan')} của danh mục. Ứng với LOS 1.</li>
  <li><b>Tìm tập danh mục tốt nhất</b>: ${t('mvp', 'danh mục phương sai nhỏ nhất')} và ${t('ef', 'đường biên hiệu quả')}. Ứng với LOS 2.</li>
  <li><b>Chọn một danh mục cho từng người</b>: dựa vào mức ${t('ra', 'ngại rủi ro')}, ${t('cal', 'đường phân bổ vốn (CAL)')}, rồi mở rộng thành ${t('market', 'danh mục thị trường')} và ${t('cml', 'đường thị trường vốn (CML)')}. Ứng với LOS 3.</li>
</ol>
<p class="tip"><b>Lưu ý đơn vị:</b> trong mọi công thức phương sai, hãy dùng lợi suất ở dạng <b>thập phân</b> (20% = 0,20, nên σ² = 0,04). Nếu dùng dạng phần trăm (σ² = 400 "phần trăm bình phương") thì cũng được, nhưng phải nhất quán từ đầu đến cuối. Trộn hai kiểu là lỗi rất phổ biến.</p>`,
    },
    {
      title: '2. Lợi suất kỳ vọng và rủi ro của một tài sản',
      minutes: 9,
      html: `
<p>Khi biết các kịch bản có thể xảy ra và xác suất của chúng, ta tính:</p>
<div class="formula">E(R) = Σ P<sub>i</sub> × R<sub>i</sub> &nbsp;&nbsp;&nbsp; σ<sup>2</sup>(R) = Σ P<sub>i</sub> × [R<sub>i</sub> - E(R)]<sup>2</sup> &nbsp;&nbsp;&nbsp; σ(R) = √σ<sup>2</sup></div>
<p>${t('er', 'Lợi suất kỳ vọng (expected return)')} là trung bình có trọng số theo xác suất. ${t('variance', 'Phương sai (variance)')} là trung bình có trọng số của <b>bình phương độ lệch</b> so với E(R). ${t('stdev', 'Độ lệch chuẩn (standard deviation)')} là căn bậc hai của phương sai, có cùng đơn vị với lợi suất nên dễ diễn giải hơn.</p>

<div class="example"><div class="ex-h">Ví dụ 2.1</div>
<p>Một cổ phiếu có 3 kịch bản: tăng trưởng mạnh (xác suất 25%, lợi suất 25%), bình thường (50%, 10%), suy thoái (25%, -10%). Tính E(R) và σ.</p>
<details><summary>Xem lời giải</summary>
<p>E(R) = 0,25 × 25% + 0,50 × 10% + 0,25 × (-10%) = <b>8,75%</b>.</p>
<p>σ<sup>2</sup> = 0,25 × (0,25 - 0,0875)<sup>2</sup> + 0,50 × (0,10 - 0,0875)<sup>2</sup> + 0,25 × (-0,10 - 0,0875)<sup>2</sup> = <b>0,015469</b>.</p>
<p>σ = √0,015469 = <b>12,44%</b>.</p></details></div>

<p class="warn"><b>Bẫy:</b> đây là phương sai theo xác suất (dữ liệu tương lai), <b>không chia cho n - 1</b>. Chỉ khi tính từ mẫu dữ liệu lịch sử (sample) mới chia cho n - 1.</p>
<p class="tip"><b>BA II Plus:</b> dùng chế độ DATA với X là lợi suất và Y là "tần suất". Máy chỉ nhận Y nguyên, nên nhập xác suất nhân 100: X01 = 25, Y01 = 25; X02 = 10, Y02 = 50; X03 = -10, Y03 = 25. Sau đó <kbd>2ND</kbd> <kbd>8</kbd> (STAT), chọn chế độ 1-V và đọc x̄ = 8,75 và σx = 12,44 (dùng <b>σx</b>, không dùng Sx).</p>`,
    },
    {
      title: '3. Hiệp phương sai và hệ số tương quan',
      minutes: 10,
      html: `
<p>${t('cov', 'Hiệp phương sai (covariance)')} đo hai tài sản <b>cùng biến động</b> như thế nào:</p>
<div class="formula">Cov(R<sub>A</sub>, R<sub>B</sub>) = Σ P<sub>i</sub> × [R<sub>A,i</sub> - E(R<sub>A</sub>)] × [R<sub>B,i</sub> - E(R<sub>B</sub>)]</div>
<ul>
  <li>Cov &gt; 0: hai tài sản thường cùng tăng, cùng giảm. Cov &lt; 0: tài sản này tăng thì tài sản kia thường giảm.</li>
  <li>Cov(R<sub>A</sub>, R<sub>A</sub>) = σ<sup>2</sup>(R<sub>A</sub>): hiệp phương sai của một tài sản với chính nó là phương sai.</li>
  <li>Cov chạy từ âm vô cùng đến dương vô cùng và phụ thuộc đơn vị, nên <b>khó diễn giải độ mạnh</b>.</li>
</ul>
<p>Vì vậy ta chuẩn hóa thành ${t('corr', 'hệ số tương quan (correlation)')}:</p>
<div class="formula">ρ<sub>A,B</sub> = ${frac('Cov(R<sub>A</sub>, R<sub>B</sub>)', 'σ<sub>A</sub> × σ<sub>B</sub>')} &nbsp;&nbsp;⇔&nbsp;&nbsp; Cov = ρ × σ<sub>A</sub> × σ<sub>B</sub> &nbsp;&nbsp;&nbsp; (-1 ≤ ρ ≤ +1)</div>
<p>ρ = +1: cùng chiều hoàn hảo; ρ = 0: không có quan hệ <b>tuyến tính</b>; ρ = -1: ngược chiều hoàn hảo.</p>

<div class="example"><div class="ex-h">Ví dụ 3.1 - Bảng xác suất đồng thời</div>
<p>Ba trạng thái kinh tế với xác suất 30%, 50%, 20%. Lợi suất của A lần lượt là 20%, 8%, -4%; của B là 6%, 10%, 2%. Tính Cov và ρ.</p>
<details><summary>Xem lời giải</summary>
<p>Bước 1: E(R<sub>A</sub>) = 0,3 × 20% + 0,5 × 8% + 0,2 × (-4%) = 9,2%; E(R<sub>B</sub>) = 0,3 × 6% + 0,5 × 10% + 0,2 × 2% = 7,2%.</p>
<table class="plain"><thead><tr><th>Trạng thái</th><th>P</th><th>R<sub>A</sub> - E(R<sub>A</sub>)</th><th>R<sub>B</sub> - E(R<sub>B</sub>)</th><th>P × tích</th></tr></thead><tbody>
<tr><td>1</td><td>0,3</td><td>0,108</td><td>-0,012</td><td>-0,0003888</td></tr>
<tr><td>2</td><td>0,5</td><td>-0,012</td><td>0,028</td><td>-0,000168</td></tr>
<tr><td>3</td><td>0,2</td><td>-0,132</td><td>-0,052</td><td>0,0013728</td></tr>
</tbody></table>
<p>Bước 2: Cov = tổng cột cuối = <b>0,000816</b>.</p>
<p>Bước 3: σ<sub>A</sub> = 8,40%, σ<sub>B</sub> = 3,12% (tính như phần 2). ρ = 0,000816 / (0,084 × 0,03124) = <b>0,31</b>: tương quan dương nhưng yếu.</p></details></div>
<p class="warn"><b>Bẫy:</b> nếu đề cho bảng xác suất đồng thời mà chỉ có các ô trên đường chéo khác 0, nghĩa là A và B luôn xảy ra theo cặp, mỗi cặp có một xác suất. Đừng cộng các ô bằng 0 vào.</p>`,
    },
    {
      title: '4. Lợi suất và rủi ro của danh mục 2 tài sản',
      minutes: 12,
      html: `
<div class="formula">E(R<sub>P</sub>) = w<sub>A</sub>E(R<sub>A</sub>) + w<sub>B</sub>E(R<sub>B</sub>)</div>
<div class="formula">σ<sub>P</sub><sup>2</sup> = w<sub>A</sub><sup>2</sup>σ<sub>A</sub><sup>2</sup> + w<sub>B</sub><sup>2</sup>σ<sub>B</sub><sup>2</sup> + 2w<sub>A</sub>w<sub>B</sub>Cov(R<sub>A</sub>, R<sub>B</sub>) &nbsp;&nbsp; với Cov = ρσ<sub>A</sub>σ<sub>B</sub></div>
<p>Trọng số w<sub>A</sub> + w<sub>B</sub> = 1. Lợi suất là phép tính tuyến tính, nhưng rủi ro thì không: số hạng hiệp phương sai quyết định danh mục rủi ro đến đâu.</p>

<div class="example"><div class="ex-h">Ví dụ 4.1 - Danh mục cổ phiếu và trái phiếu</div>
<p>60% vào quỹ cổ phiếu (E = 10%, σ = 20%) và 40% vào quỹ trái phiếu (E = 4%, σ = 8%). Tương quan ρ = 0,2. Tính E(R<sub>P</sub>) và σ<sub>P</sub>.</p>
<details><summary>Xem lời giải</summary>
<p>E(R<sub>P</sub>) = 0,6 × 10% + 0,4 × 4% = <b>7,60%</b>.</p>
<p>Cov = 0,2 × 0,20 × 0,08 = 0,0032.</p>
<p>σ<sub>P</sub><sup>2</sup> = 0,6<sup>2</sup> × 0,04 + 0,4<sup>2</sup> × 0,0064 + 2 × 0,6 × 0,4 × 0,0032 = 0,0144 + 0,001024 + 0,001536 = 0,01696.</p>
<p>σ<sub>P</sub> = √0,01696 = <b>13,02%</b>, thấp hơn mức trung bình có trọng số 0,6 × 20% + 0,4 × 8% = 15,20%.</p></details></div>
<p class="warn"><b>Ba lỗi hay gặp:</b> (1) quên bình phương trọng số; (2) quên nhân 2 ở số hạng hiệp phương sai; (3) dùng ρ thay vì Cov trong công thức (phải nhân ρ với σ<sub>A</sub>σ<sub>B</sub>).</p>

<h4>Thử ngay: kéo hệ số tương quan</h4>
<div class="widget" data-widget="frontier2"></div>
<p>Kéo ρ từ +1 xuống -1: đường cong các danh mục (mỗi điểm là một tỷ trọng từ 0% đến 100% cổ phiếu) <b>cong dần về bên trái</b>. Với ρ = +1, nó là một đoạn thẳng; với ρ = -1, nó chạm trục tung, tức có danh mục không rủi ro.</p>`,
    },
    {
      title: '5. Lợi ích đa dạng hóa và ma trận hiệp phương sai',
      minutes: 10,
      html: `
<p>Giữ nguyên tỷ trọng 60/40 ở ví dụ 4.1, chỉ thay đổi ρ:</p>
<table class="plain"><thead><tr><th>ρ</th><th>σ<sub>P</sub></th><th>Nhận xét</th></tr></thead><tbody>
<tr><td>+1,0</td><td>15,20%</td><td>Bằng trung bình có trọng số: không có lợi ích đa dạng hóa</td></tr>
<tr><td>+0,5</td><td>13,88%</td><td></td></tr>
<tr><td>+0,2</td><td>13,02%</td><td>Ví dụ 4.1</td></tr>
<tr><td>0</td><td>12,42%</td><td></td></tr>
<tr><td>-0,5</td><td>10,76%</td><td></td></tr>
<tr><td>-1,0</td><td>8,80%</td><td>= |0,6 × 20% - 0,4 × 8%|: lợi ích lớn nhất</td></tr>
</tbody></table>
<div class="key">E(R<sub>P</sub>) <b>không đổi</b> (vẫn 7,60%) khi ρ thay đổi, nhưng σ<sub>P</sub> giảm khi ρ giảm. ρ càng thấp, ${t('diversify', 'lợi ích đa dạng hóa')} càng lớn. Chỉ cần ρ &lt; +1 là đã có lợi ích.</div>

<h4>Danh mục nhiều tài sản: ma trận hiệp phương sai</h4>
<div class="formula">σ<sub>P</sub><sup>2</sup> = Σ<sub>i</sub> Σ<sub>j</sub> w<sub>i</sub>w<sub>j</sub>Cov(R<sub>i</sub>, R<sub>j</sub>)</div>
<p>Với N tài sản, ${t('covmatrix', 'ma trận hiệp phương sai')} có N × N ô: N ô trên đường chéo là phương sai, N(N - 1) ô còn lại là hiệp phương sai (đối xứng, nên chỉ có N(N - 1)/2 giá trị khác nhau). Mỗi ô đóng góp w<sub>i</sub>w<sub>j</sub>Cov<sub>ij</sub> vào σ<sub>P</sub><sup>2</sup>.</p>
<div class="example"><div class="ex-h">Ví dụ 5.1 - Danh mục 3 tài sản</div>
<p>Tỷ trọng: cổ phiếu 50%, trái phiếu doanh nghiệp 30%, tiền gửi ngắn hạn 20%. σ lần lượt 18%, 10%, 5%. ρ(cổ phiếu, trái phiếu) = 0,4; ρ(trái phiếu, tiền gửi) = 0,2; ρ(cổ phiếu, tiền gửi) = 0. E(R) lần lượt 9%, 5%, 3%.</p>
<details><summary>Xem lời giải</summary>
<p>Ma trận hiệp phương sai (dạng thập phân):</p>
<table class="plain"><thead><tr><th></th><th>Cổ phiếu</th><th>Trái phiếu</th><th>Tiền gửi</th></tr></thead><tbody>
<tr><td>Cổ phiếu</td><td>0,0324</td><td>0,0072</td><td>0</td></tr>
<tr><td>Trái phiếu</td><td>0,0072</td><td>0,0100</td><td>0,0010</td></tr>
<tr><td>Tiền gửi</td><td>0</td><td>0,0010</td><td>0,0025</td></tr>
</tbody></table>
<p>σ<sub>P</sub><sup>2</sup> = 0,5<sup>2</sup> × 0,0324 + 0,3<sup>2</sup> × 0,01 + 0,2<sup>2</sup> × 0,0025 + 2 × 0,5 × 0,3 × 0,0072 + 2 × 0,3 × 0,2 × 0,001 + 2 × 0,5 × 0,2 × 0<br>
= 0,0081 + 0,0009 + 0,0001 + 0,00216 + 0,00012 + 0 = <b>0,01138</b>.</p>
<p>σ<sub>P</sub> = <b>10,67%</b>; E(R<sub>P</sub>) = 0,5 × 9% + 0,3 × 5% + 0,2 × 3% = <b>6,60%</b>.</p></details></div>
<p class="tip">Khi số tài sản tăng, số ô hiệp phương sai tăng nhanh hơn nhiều so với số ô phương sai. Vì vậy rủi ro của danh mục lớn được quyết định chủ yếu bởi <b>hiệp phương sai trung bình</b> giữa các tài sản, không phải phương sai riêng của từng tài sản.</p>`,
    },
    {
      title: '6. Danh mục phương sai nhỏ nhất và đường biên hiệu quả',
      minutes: 11,
      html: `
<p>Xét mọi danh mục có thể tạo từ các tài sản rủi ro. Với mỗi mức lợi suất kỳ vọng, chọn danh mục có phương sai <b>nhỏ nhất</b>: tập hợp các danh mục đó là ${t('mvf', 'đường biên phương sai nhỏ nhất (minimum-variance frontier)')}.</p>
<ul>
  <li>Điểm xa nhất về bên trái của đường biên là ${t('mvp', 'danh mục phương sai nhỏ nhất toàn cục (global minimum-variance portfolio)')}.</li>
  <li>Phần đường biên <b>phía trên</b> danh mục này là ${t('ef', 'đường biên hiệu quả (efficient frontier)')}: không danh mục nào cho lợi suất cao hơn với cùng rủi ro.</li>
  <li>Phần <b>phía dưới</b> là không hiệu quả: luôn có một danh mục trên đường biên hiệu quả với cùng σ nhưng E(R) cao hơn.</li>
</ul>
<h4>Công thức tỷ trọng danh mục phương sai nhỏ nhất (2 tài sản)</h4>
<div class="formula">w<sub>A</sub><sup>*</sup> = ${frac('σ<sub>B</sub><sup>2</sup> - Cov(R<sub>A</sub>, R<sub>B</sub>)', 'σ<sub>A</sub><sup>2</sup> + σ<sub>B</sub><sup>2</sup> - 2Cov(R<sub>A</sub>, R<sub>B</sub>)')} &nbsp;&nbsp;&nbsp; w<sub>B</sub><sup>*</sup> = 1 - w<sub>A</sub><sup>*</sup></div>
<div class="example"><div class="ex-h">Ví dụ 6.1</div>
<p>Dùng dữ liệu ví dụ 4.1 (cổ phiếu σ = 20%, trái phiếu σ = 8%, ρ = 0,2). Tìm danh mục phương sai nhỏ nhất.</p>
<details><summary>Xem lời giải</summary>
<p>w<sub>cổ phiếu</sub> = (0,0064 - 0,0032) / (0,04 + 0,0064 - 2 × 0,0032) = 0,0032 / 0,04 = <b>8%</b>; w<sub>trái phiếu</sub> = <b>92%</b>.</p>
<p>E(R) = 0,08 × 10% + 0,92 × 4% = 4,48%; σ<sup>2</sup> = 0,006144, σ = <b>7,84%</b>.</p>
<p>Điều thú vị: σ = 7,84% <b>thấp hơn cả trái phiếu đứng một mình</b> (8%), dù đã thêm 8% cổ phiếu rủi ro gấp 2,5 lần. Đó là sức mạnh của tương quan thấp.</p></details></div>
<p class="tip"><b>Trường hợp đặc biệt ρ = -1:</b> có thể triệt tiêu hoàn toàn rủi ro với w<sub>A</sub> = σ<sub>B</sub> / (σ<sub>A</sub> + σ<sub>B</sub>). Ví dụ σ<sub>A</sub> = 20%, σ<sub>B</sub> = 8% thì w<sub>A</sub> = 8/28 = 28,57%.</p>
<p class="warn"><b>Bẫy:</b> nếu ρ cao (ví dụ ρ = 0,5 với số liệu trên), công thức cho w<sub>A</sub><sup>*</sup> âm, nghĩa là phải <b>bán khống</b> cổ phiếu mới đạt phương sai nhỏ nhất. Nếu đề không cho bán khống, danh mục phương sai nhỏ nhất là 100% tài sản ít rủi ro hơn.</p>`,
    },
    {
      title: '7. Ngại rủi ro và hàm hữu dụng',
      minutes: 9,
      html: `
<p>Đường biên hiệu quả có vô số danh mục. Danh mục nào "tốt nhất" phụ thuộc vào <b>từng người</b>. CFA dùng ${t('utility', 'hàm hữu dụng (utility)')}:</p>
<div class="formula">U = E(R) - ½ × A × σ<sup>2</sup></div>
<ul>
  <li>A là hệ số ${t('ra', 'ngại rủi ro (risk aversion)')}. A &gt; 0: ngại rủi ro (đa số nhà đầu tư); A = 0: trung lập với rủi ro (chỉ nhìn E(R)); A &lt; 0: ưa rủi ro.</li>
  <li>A càng lớn, nhà đầu tư càng bị "phạt" nặng vì rủi ro.</li>
  <li>U có thể hiểu là ${t('ce', 'lợi suất tương đương chắc chắn (certainty equivalent)')}: mức lợi suất không rủi ro mà nhà đầu tư thấy ngang bằng với danh mục rủi ro.</li>
</ul>
<p class="warn"><b>Đơn vị:</b> E(R) và σ phải ở dạng thập phân. Nếu dùng phần trăm (E = 10, σ = 20) thì phải viết U = E(R) - 0,005 × A × σ<sup>2</sup>.</p>
<div class="example"><div class="ex-h">Ví dụ 7.1</div>
<p>Ba danh mục: X (E = 6%, σ = 10%), Y (E = 9%, σ = 18%), Z (E = 12%, σ = 28%). Nhà đầu tư nào chọn danh mục nào nếu (a) A = 4; (b) A = 2?</p>
<details><summary>Xem lời giải</summary>
<table class="plain"><thead><tr><th>Danh mục</th><th>U với A = 4</th><th>U với A = 2</th></tr></thead><tbody>
<tr><td>X</td><td>0,06 - 2 × 0,01 = <b>4,00%</b></td><td>5,00%</td></tr>
<tr><td>Y</td><td>0,09 - 2 × 0,0324 = 2,52%</td><td><b>5,76%</b></td></tr>
<tr><td>Z</td><td>0,12 - 2 × 0,0784 = -3,68%</td><td>4,16%</td></tr>
</tbody></table>
<p>Người ngại rủi ro nhiều (A = 4) chọn X; người ngại rủi ro ít (A = 2) chọn Y. Không ai chọn Z dù Z có lợi suất cao nhất.</p></details></div>
<h4>Đường bàng quan (indifference curve)</h4>
<p>${t('indiff', 'Đường bàng quan')} nối các cặp (σ, E(R)) có <b>cùng mức U</b>. Với nhà đầu tư ngại rủi ro, đường này dốc lên và cong lồi: muốn nhận thêm rủi ro thì phải được bù thêm lợi suất, và càng rủi ro thì đòi bù càng nhiều. A càng lớn, đường càng dốc. Đường nằm càng cao (về phía trên bên trái) thì U càng lớn.</p>`,
    },
    {
      title: '8. Đường phân bổ vốn (CAL) và danh mục tối ưu',
      minutes: 12,
      html: `
<p>Bây giờ thêm một ${t('rf', 'tài sản phi rủi ro (risk-free asset)')} với lợi suất R<sub>f</sub> và σ = 0. Kết hợp tỷ trọng y vào danh mục rủi ro P và (1 - y) vào tài sản phi rủi ro:</p>
<div class="formula">E(R<sub>C</sub>) = R<sub>f</sub> + y[E(R<sub>P</sub>) - R<sub>f</sub>] &nbsp;&nbsp;&nbsp; σ<sub>C</sub> = y × σ<sub>P</sub></div>
<p>Vì Cov với tài sản phi rủi ro bằng 0, rủi ro chỉ tỷ lệ thuận với y. Khử y ta được một đường thẳng, gọi là ${t('cal', 'đường phân bổ vốn (capital allocation line - CAL)')}:</p>
<div class="formula">E(R<sub>C</sub>) = R<sub>f</sub> + ${frac('E(R<sub>P</sub>) - R<sub>f</sub>', 'σ<sub>P</sub>')} × σ<sub>C</sub></div>
<p>Độ dốc của CAL chính là ${t('sharpe', 'tỷ số Sharpe')} của danh mục rủi ro. y &lt; 1: vừa cho vay (gửi tiền phi rủi ro) vừa đầu tư; y &gt; 1: vay tiền ở R<sub>f</sub> để đầu tư thêm (đòn bẩy).</p>
<div class="key">Trong mọi CAL có thể vẽ, CAL tốt nhất là đường <b>tiếp xúc</b> với đường biên hiệu quả: nó có độ dốc (Sharpe) lớn nhất. Điểm tiếp xúc là ${t('tangency', 'danh mục tiếp tuyến (tangency portfolio)')}, và mọi nhà đầu tư nên dùng cùng danh mục rủi ro này.</div>
<h4>Chọn điểm trên CAL: danh mục tối ưu của từng người</h4>
<p>${t('optimal', 'Danh mục tối ưu')} là điểm đường bàng quan cao nhất chạm vào CAL. Tối đa hóa U theo y cho:</p>
<div class="formula">y<sup>*</sup> = ${frac('E(R<sub>P</sub>) - R<sub>f</sub>', 'A × σ<sub>P</sub><sup>2</sup>')}</div>
<div class="example"><div class="ex-h">Ví dụ 8.1</div>
<p>R<sub>f</sub> = 3%; danh mục rủi ro có E = 10%, σ = 18%. Tính độ dốc CAL và tỷ trọng tối ưu cho nhà đầu tư có (a) A = 4; (b) A = 2.</p>
<details><summary>Xem lời giải</summary>
<p>Độ dốc CAL = (10% - 3%) / 18% = <b>0,389</b>.</p>
<p>(a) y<sup>*</sup> = 0,07 / (4 × 0,0324) = <b>54,0%</b> vào danh mục rủi ro, 46,0% gửi phi rủi ro. E(R<sub>C</sub>) = 3% + 0,54 × 7% = 6,78%; σ<sub>C</sub> = 0,54 × 18% = 9,72%.</p>
<p>(b) y<sup>*</sup> = 0,07 / (2 × 0,0324) = <b>108,0%</b>: vay thêm 8% vốn để đầu tư. E(R<sub>C</sub>) = 10,56%; σ<sub>C</sub> = 19,44%.</p></details></div>
<p class="warn"><b>Bẫy:</b> mẫu số là σ<sup>2</sup> (phương sai), không phải σ. Và tử số là <b>lợi suất vượt trội</b> E(R<sub>P</sub>) - R<sub>f</sub>, không phải E(R<sub>P</sub>).</p>`,
    },
    {
      title: '9. Danh mục thị trường và đường thị trường vốn (CML)',
      minutes: 7,
      html: `
<p>Nếu <b>mọi nhà đầu tư</b> có cùng kỳ vọng về E(R), σ và ρ (kỳ vọng đồng nhất - homogeneous expectations), tất cả sẽ vẽ ra cùng một đường biên hiệu quả và cùng một danh mục tiếp tuyến. Khi thị trường cân bằng, danh mục tiếp tuyến đó phải chứa mọi tài sản rủi ro theo tỷ trọng giá trị vốn hóa: đó là ${t('market', 'danh mục thị trường (market portfolio)')}.</p>
<p>CAL đi qua danh mục thị trường gọi là ${t('cml', 'đường thị trường vốn (capital market line - CML)')}:</p>
<div class="formula">E(R<sub>P</sub>) = R<sub>f</sub> + ${frac('E(R<sub>M</sub>) - R<sub>f</sub>', 'σ<sub>M</sub>')} × σ<sub>P</sub></div>
<div class="key"><b>${t('twofund', 'Tách biệt hai quỹ (two-fund separation)')}:</b> mọi nhà đầu tư chỉ cần hai "quỹ": tài sản phi rủi ro và danh mục thị trường. Mức ngại rủi ro A chỉ quyết định <b>tỷ lệ chia</b> giữa hai quỹ, không làm thay đổi danh mục rủi ro.</div>
<div class="example"><div class="ex-h">Ví dụ 9.1</div>
<p>R<sub>f</sub> = 3%, E(R<sub>M</sub>) = 9%, σ<sub>M</sub> = 16%. Một nhà đầu tư muốn σ = 12%; một người khác muốn σ = 20%. Lợi suất kỳ vọng và cách phân bổ?</p>
<details><summary>Xem lời giải</summary>
<p>Độ dốc CML = 6% / 16% = 0,375.</p>
<p>σ = 12%: E = 3% + 0,375 × 12% = <b>7,50%</b>, tỷ trọng thị trường 12/16 = 75%, còn 25% cho vay phi rủi ro.</p>
<p>σ = 20%: E = 3% + 0,375 × 20% = <b>10,50%</b>, tỷ trọng thị trường 20/16 = 125%, tức vay thêm 25% ở R<sub>f</sub>.</p></details></div>
<p class="tip">CML dùng <b>tổng rủi ro σ</b> và chỉ áp dụng cho danh mục hiệu quả (kết hợp R<sub>f</sub> với thị trường). Đường SML dùng beta sẽ học ở mảng Portfolio Management. Đừng nhầm hai đường này.</p>`,
    },
    {
      title: '10. Bổ sung: shortfall risk và Roy\'s safety-first',
      minutes: 5,
      html: `
<p>Phần bổ sung này (không còn là LOS riêng của 2027 nhưng là ứng dụng trực tiếp của E(R) và σ danh mục, nên nắm nhanh).</p>
<p>${t('shortfall', 'Rủi ro thiếu hụt (shortfall risk)')} là xác suất lợi suất danh mục rơi xuống dưới một ngưỡng tối thiểu R<sub>L</sub>. Nếu lợi suất có phân phối chuẩn, tối thiểu hóa rủi ro này tương đương tối đa hóa ${t('sfr', 'tỷ số safety-first (SFRatio)')}:</p>
<div class="formula">SFRatio = ${frac('E(R<sub>P</sub>) - R<sub>L</sub>', 'σ<sub>P</sub>')}</div>
<div class="example"><div class="ex-h">Ví dụ 10.1</div>
<p>Khách hàng không muốn lợi suất dưới 3%. A: E = 9%, σ = 12%; B: E = 6%, σ = 5%; C: E = 12%, σ = 20%. Chọn danh mục nào?</p>
<details><summary>Xem lời giải</summary><p>SFR<sub>A</sub> = 6/12 = 0,50; SFR<sub>B</sub> = 3/5 = <b>0,60</b>; SFR<sub>C</sub> = 9/20 = 0,45. Chọn <b>B</b>, dù B có lợi suất thấp nhất. Khi R<sub>L</sub> = R<sub>f</sub>, SFRatio chính là tỷ số Sharpe.</p></details></div>`,
    },
    {
      title: '11. Tóm tắt và bẫy thường gặp',
      minutes: 5,
      html: `
<table class="plain"><thead><tr><th>Tình huống</th><th>Nhớ</th></tr></thead><tbody>
<tr><td>Phương sai theo xác suất</td><td>Nhân với P<sub>i</sub>, không chia n - 1. Dùng dạng thập phân</td></tr>
<tr><td>Cov và ρ</td><td>Cov = ρσ<sub>A</sub>σ<sub>B</sub>; ρ nằm trong [-1; +1], Cov thì không bị chặn</td></tr>
<tr><td>σ<sub>P</sub> 2 tài sản</td><td>Bình phương trọng số, nhân 2 ở số hạng Cov, dùng Cov chứ không dùng ρ</td></tr>
<tr><td>Đa dạng hóa</td><td>ρ giảm thì σ<sub>P</sub> giảm, E(R<sub>P</sub>) không đổi; ρ = +1 thì σ<sub>P</sub> = trung bình có trọng số</td></tr>
<tr><td>ρ = -1</td><td>w<sub>A</sub> = σ<sub>B</sub>/(σ<sub>A</sub> + σ<sub>B</sub>) cho σ<sub>P</sub> = 0</td></tr>
<tr><td>Đường biên hiệu quả</td><td>Chỉ phần phía trên danh mục phương sai nhỏ nhất toàn cục</td></tr>
<tr><td>Hàm hữu dụng</td><td>U = E(R) - ½Aσ<sup>2</sup>; A lớn thì chọn danh mục ít rủi ro hơn</td></tr>
<tr><td>Tỷ trọng tối ưu</td><td>y<sup>*</sup> = [E(R<sub>P</sub>) - R<sub>f</sub>] / (Aσ<sub>P</sub><sup>2</sup>); y &gt; 1 nghĩa là vay</td></tr>
<tr><td>CAL và CML</td><td>CML là CAL đi qua danh mục thị trường; độ dốc = Sharpe; dùng σ, không dùng beta</td></tr>
<tr><td>Two-fund separation</td><td>Mọi người cùng danh mục rủi ro, chỉ khác tỷ lệ với tài sản phi rủi ro</td></tr>
</tbody></table>
<p>Tiếp theo: tab <b>Luyện tập</b> 10 câu (rút ngẫu nhiên từ ngân hàng 30 câu, mỗi lần làm một bộ khác).</p>`,
    },
  ];

  const glossary = {
    er: ['Expected return', 'Lợi suất kỳ vọng', 'Trung bình có trọng số theo xác suất của các lợi suất có thể xảy ra.'],
    variance: ['Variance', 'Phương sai', 'Trung bình có trọng số theo xác suất của bình phương độ lệch so với giá trị kỳ vọng.'],
    stdev: ['Standard deviation', 'Độ lệch chuẩn', 'Căn bậc hai của phương sai; cùng đơn vị với lợi suất.'],
    cov: ['Covariance', 'Hiệp phương sai', 'Kỳ vọng của tích hai độ lệch; dương khi hai tài sản cùng chiều, âm khi ngược chiều. Không bị chặn.'],
    corr: ['Correlation coefficient', 'Hệ số tương quan', 'Cov chia cho tích hai độ lệch chuẩn; nằm trong khoảng -1 đến +1, đo độ mạnh quan hệ tuyến tính.'],
    diversify: ['Diversification benefit', 'Lợi ích đa dạng hóa', 'Phần rủi ro giảm đi khi kết hợp các tài sản tương quan dưới +1; σ danh mục nhỏ hơn trung bình có trọng số các σ.'],
    covmatrix: ['Covariance matrix', 'Ma trận hiệp phương sai', 'Bảng N x N: đường chéo là phương sai, các ô còn lại là hiệp phương sai từng cặp tài sản.'],
    mvf: ['Minimum-variance frontier', 'Đường biên phương sai nhỏ nhất', 'Tập các danh mục có phương sai nhỏ nhất ứng với mỗi mức lợi suất kỳ vọng.'],
    mvp: ['Global minimum-variance portfolio', 'Danh mục phương sai nhỏ nhất toàn cục', 'Danh mục tài sản rủi ro có phương sai thấp nhất; điểm xa nhất bên trái của đường biên.'],
    ef: ['Efficient frontier', 'Đường biên hiệu quả', 'Phần đường biên phương sai nhỏ nhất nằm phía trên danh mục phương sai nhỏ nhất toàn cục.'],
    ra: ['Risk aversion', 'Mức ngại rủi ro', 'Hệ số A trong hàm hữu dụng; A càng lớn thì nhà đầu tư đòi bù càng nhiều cho mỗi đơn vị rủi ro.'],
    utility: ['Utility function', 'Hàm hữu dụng', 'U = E(R) - 0,5 x A x σ^2: điểm số nhà đầu tư dùng để xếp hạng các danh mục.'],
    ce: ['Certainty equivalent', 'Lợi suất tương đương chắc chắn', 'Lợi suất không rủi ro mà nhà đầu tư thấy ngang bằng với một danh mục rủi ro; bằng giá trị U.'],
    indiff: ['Indifference curve', 'Đường bàng quan', 'Tập các cặp rủi ro - lợi suất cho cùng một mức hữu dụng; dốc hơn khi A lớn hơn.'],
    rf: ['Risk-free asset', 'Tài sản phi rủi ro', 'Tài sản có lợi suất chắc chắn Rf, độ lệch chuẩn bằng 0 và hiệp phương sai với mọi tài sản bằng 0.'],
    cal: ['Capital allocation line (CAL)', 'Đường phân bổ vốn', 'Đường thẳng mô tả mọi kết hợp giữa tài sản phi rủi ro và một danh mục rủi ro; độ dốc là tỷ số Sharpe.'],
    sharpe: ['Sharpe ratio', 'Tỷ số Sharpe', '(E(R) - Rf)/σ: lợi suất vượt trội trên mỗi đơn vị tổng rủi ro.'],
    tangency: ['Tangency portfolio', 'Danh mục tiếp tuyến', 'Danh mục rủi ro trên đường biên hiệu quả mà CAL tiếp xúc; có tỷ số Sharpe cao nhất.'],
    optimal: ['Optimal investor portfolio', 'Danh mục tối ưu của nhà đầu tư', 'Điểm trên CAL mà đường bàng quan cao nhất của nhà đầu tư chạm vào.'],
    market: ['Market portfolio', 'Danh mục thị trường', 'Danh mục chứa mọi tài sản rủi ro theo tỷ trọng giá trị thị trường; là danh mục tiếp tuyến khi mọi người có cùng kỳ vọng.'],
    cml: ['Capital market line (CML)', 'Đường thị trường vốn', 'CAL đi qua danh mục thị trường: E(R) = Rf + [(E(RM) - Rf)/σM] x σ.'],
    twofund: ['Two-fund separation theorem', 'Định lý tách biệt hai quỹ', 'Mọi nhà đầu tư nắm cùng danh mục rủi ro (thị trường) và tài sản phi rủi ro; chỉ khác tỷ lệ phân bổ.'],
    shortfall: ['Shortfall risk', 'Rủi ro thiếu hụt', 'Xác suất lợi suất hoặc giá trị danh mục thấp hơn một ngưỡng tối thiểu trong một kỳ.'],
    sfr: ["Roy's safety-first ratio", 'Tỷ số safety-first của Roy', '(E(RP) - RL)/σP; chọn danh mục có tỷ số cao nhất để giảm xác suất rơi dưới ngưỡng RL.'],
  };

  const practice = [
    { q: 'Một danh mục gồm 70% quỹ cổ phiếu (lợi suất kỳ vọng 11%) và 30% trái phiếu chính phủ (lợi suất kỳ vọng 4%). Lợi suất kỳ vọng của danh mục gần nhất với:', choices: ['8,90%', '7,50%', '9,60%'], answer: 0, explain: 'E(RP) = 0,7 x 11% + 0,3 x 4% = 8,90%. Lựa chọn 7,50% là trung bình cộng đơn giản (bỏ qua trọng số). Lựa chọn 9,60% không tương ứng với cách tính đúng nào.' },
    { q: 'Danh mục 50% cổ phiếu A (σ = 20%) và 50% cổ phiếu B (σ = 10%), hệ số tương quan 0,3. Độ lệch chuẩn của danh mục gần nhất với:', choices: ['15,00%', '11,18%', '12,45%'], answer: 2, explain: 'σ² = 0,25 x 0,04 + 0,25 x 0,01 + 2 x 0,5 x 0,5 x 0,3 x 0,20 x 0,10 = 0,0155, σ = 12,45%. Lựa chọn 15,00% là trung bình có trọng số (chỉ đúng khi ρ = +1). Lựa chọn 11,18% bỏ quên số hạng hiệp phương sai.' },
    { q: 'Hiệp phương sai giữa lợi suất hai tài sản là 0,012; độ lệch chuẩn của chúng là 20% và 15%. Hệ số tương quan là:', choices: ['0,034', '0,40', '2,50'], answer: 1, explain: 'ρ = Cov/(σA x σB) = 0,012/(0,20 x 0,15) = 0,40. Lựa chọn 0,034 chia cho tổng σ thay vì tích. Lựa chọn 2,50 đảo ngược phép chia, và ρ không thể lớn hơn 1.' },
    { q: 'Hai tài sản có σ lần lượt 20% và 10% và tương quan -1. Để danh mục có độ lệch chuẩn bằng 0, tỷ trọng vào tài sản có σ = 20% phải là:', choices: ['33,3%', '50,0%', '66,7%'], answer: 0, explain: 'Với ρ = -1: wA = σB/(σA + σB) = 10/30 = 33,3%. Kiểm tra: 0,333 x 20% - 0,667 x 10% = 0. Lựa chọn 66,7% đảo ngược tử số (dùng σA). Lựa chọn 50,0% chia đều không triệt tiêu được rủi ro vì hai σ khác nhau.' },
    { q: 'Tài sản A có σ = 15%, tài sản B có σ = 10%, tương quan bằng 0. Tỷ trọng của A trong danh mục phương sai nhỏ nhất gần nhất với:', choices: ['40,00%', '30,77%', '69,23%'], answer: 1, explain: 'wA = (σB² - Cov)/(σA² + σB² - 2Cov) = 0,01/(0,0225 + 0,01) = 30,77%. Lựa chọn 40,00% dùng σB/(σA + σB), chỉ đúng khi ρ = -1. Lựa chọn 69,23% là tỷ trọng của tài sản B (nhầm tử số σA²).' },
    { q: 'Nhà đầu tư có hệ số ngại rủi ro A = 3 cân nhắc ba danh mục: P (E = 7%, σ = 10%), Q (E = 10%, σ = 16%), R (E = 13%, σ = 25%). Theo hàm hữu dụng U = E(R) - 0,5Aσ², nhà đầu tư chọn:', choices: ['P', 'R', 'Q'], answer: 2, explain: 'UP = 0,07 - 1,5 x 0,01 = 5,50%; UQ = 0,10 - 1,5 x 0,0256 = 6,16%; UR = 0,13 - 1,5 x 0,0625 = 3,63%. Chọn Q. Nếu quên hệ số 0,5 thì P có U cao nhất (4,0%), dẫn đến chọn P. Chọn R là chỉ nhìn lợi suất kỳ vọng.' },
    { q: 'Rf = 4%; danh mục rủi ro có E = 12%, σ = 20%. Nhà đầu tư có A = 5. Tỷ trọng tối ưu vào danh mục rủi ro là:', choices: ['40%', '60%', '8%'], answer: 0, explain: 'y* = (E - Rf)/(Aσ²) = 0,08/(5 x 0,04) = 40%. Lựa chọn 60% dùng E thay vì lợi suất vượt trội (0,12/0,20). Lựa chọn 8% dùng σ thay vì σ² ở mẫu số.' },
    { q: 'Rf = 2%, danh mục thị trường có E = 8% và σ = 15%. Một danh mục nằm trên CML có σ = 9% sẽ có lợi suất kỳ vọng gần nhất với:', choices: ['4,80%', '6,80%', '5,60%'], answer: 2, explain: 'E = 2% + (6%/15%) x 9% = 5,60% (60% thị trường, 40% phi rủi ro). Lựa chọn 4,80% bỏ quên phần Rf (0,6 x 8%). Lựa chọn 6,80% cộng Rf với 0,6 x 8% thay vì 0,6 x phần bù rủi ro.' },
    { q: 'Theo định lý tách biệt hai quỹ, hai nhà đầu tư có kỳ vọng giống nhau nhưng mức ngại rủi ro khác nhau sẽ khác nhau ở:', choices: ['Thành phần danh mục rủi ro mà họ nắm giữ', 'Tỷ lệ phân bổ giữa tài sản phi rủi ro và danh mục thị trường', 'Độ dốc của CML mà họ sử dụng'], answer: 1, explain: 'Cả hai cùng nắm danh mục thị trường và cùng một CML (cùng độ dốc). Mức ngại rủi ro chỉ quyết định điểm nằm trên CML, tức tỷ lệ chia giữa Rf và danh mục thị trường.' },
    { q: 'Một danh mục 2 tài sản rủi ro có tỷ trọng cố định. Nếu hệ số tương quan giữa hai tài sản giảm từ 0,6 xuống 0,1 thì:', choices: ['Lợi suất kỳ vọng không đổi, độ lệch chuẩn giảm', 'Lợi suất kỳ vọng giảm, độ lệch chuẩn giảm', 'Lợi suất kỳ vọng không đổi, độ lệch chuẩn không đổi'], answer: 0, explain: 'E(RP) chỉ phụ thuộc trọng số và E(R) từng tài sản nên không đổi. σP giảm vì số hạng 2wAwBρσAσB nhỏ đi. Phương án "lợi suất kỳ vọng giảm" nhầm rằng đa dạng hóa phải "trả giá" bằng lợi suất.' },
    { q: 'Một cổ phiếu có ba kịch bản: tăng trưởng (xác suất 20%, lợi suất 18%), ổn định (50%, 9%), suy thoái (30%, -6%). Độ lệch chuẩn lợi suất của cổ phiếu gần nhất với:', choices: ['12,12%', '8,74%', '9,90%'], answer: 1, explain: 'E(R) = 0,2 × 18% + 0,5 × 9% + 0,3 × (-6%) = 6,30%. σ² = 0,2 × (0,18 - 0,063)² + 0,5 × (0,09 - 0,063)² + 0,3 × (-0,06 - 0,063)² = 0,007641; σ = 8,74%. Lựa chọn 9,90% tính độ lệch chuẩn của ba lợi suất như thể xác suất bằng nhau. Lựa chọn 12,12% còn chia cho n - 1 như dữ liệu mẫu, trong khi đây là phương sai theo xác suất.' },
    { q: 'Ba trạng thái kinh tế có xác suất 30%, 40%, 30%. Lợi suất của tài sản A lần lượt là 15%, 5%, -5%; của tài sản B là 2%, 6%, 8%. Hiệp phương sai giữa lợi suất A và B gần nhất với:', choices: ['-0,0060', '-0,9785', '-0,0018'], answer: 2, explain: 'E(RA) = 5,00%, E(RB) = 5,40%. Cov = 0,3 × (0,10)(-0,034) + 0,4 × (0)(0,006) + 0,3 × (-0,10)(0,026) = -0,0018. Lựa chọn -0,0060 cộng các tích độ lệch mà quên nhân với xác suất. Lựa chọn -0,9785 là hệ số tương quan (Cov chia cho σAσB), không phải hiệp phương sai.' },
    { q: 'Hệ số tương quan giữa lợi suất hai tài sản là -0,4; độ lệch chuẩn lần lượt là 30% và 15%. Hiệp phương sai (dạng thập phân) gần nhất với:', choices: ['-0,0180', '-0,0360', '-8,8889'], answer: 0, explain: 'Cov = ρ × σA × σB = -0,4 × 0,30 × 0,15 = -0,0180. Lựa chọn -0,0360 nhân thêm 2, nhầm với số hạng 2wAwBCov trong công thức phương sai danh mục. Lựa chọn -8,8889 lấy ρ chia cho σAσB thay vì nhân.' },
    { q: 'Danh mục gồm 40% tài sản A (σ = 25%) và 60% tài sản B (σ = 15%). Hiệp phương sai giữa A và B là 0,0075. Độ lệch chuẩn của danh mục gần nhất với:', choices: ['14,11%', '13,45%', '14,73%'], answer: 2, explain: 'σP² = 0,4² × 0,0625 + 0,6² × 0,0225 + 2 × 0,4 × 0,6 × 0,0075 = 0,01 + 0,0081 + 0,0036 = 0,0217; σP = 14,73%. Lựa chọn 14,11% quên nhân 2 ở số hạng hiệp phương sai. Lựa chọn 13,45% bỏ hẳn số hạng hiệp phương sai.' },
    { q: 'Danh mục chia đều cho ba tài sản, mỗi tài sản có độ lệch chuẩn 20%, hệ số tương quan giữa mọi cặp là 0,5. Độ lệch chuẩn của danh mục gần nhất với:', choices: ['20,00%', '16,33%', '11,55%'], answer: 1, explain: 'Mỗi phương sai = 0,04, mỗi hiệp phương sai = 0,5 × 0,2 × 0,2 = 0,02. σP² = 3 × (1/3)² × 0,04 + 6 × (1/3)² × 0,02 = 0,01333 + 0,01333 = 0,02667; σP = 16,33%. Lựa chọn 20,00% là trung bình có trọng số các σ, chỉ đúng khi ρ = +1. Lựa chọn 11,55% bỏ qua 6 ô hiệp phương sai ngoài đường chéo.' },
    { q: 'Để tính phương sai của một danh mục gồm 20 tài sản bằng ma trận hiệp phương sai, số hiệp phương sai khác nhau (không tính phương sai) cần ước lượng là:', choices: ['190', '380', '400'], answer: 0, explain: 'Ma trận 20 × 20 có 20 ô phương sai trên đường chéo và 20 × 19 = 380 ô hiệp phương sai, nhưng ma trận đối xứng (CovAB = CovBA) nên chỉ có 380/2 = 190 giá trị khác nhau. Lựa chọn 380 đếm mỗi cặp hai lần. Lựa chọn 400 là toàn bộ số ô, gồm cả phương sai.' },
    { q: 'Khi số tài sản trong một danh mục chia đều tăng rất lớn, phương sai của danh mục chủ yếu được quyết định bởi:', choices: ['Phương sai trung bình của từng tài sản', 'Lợi suất kỳ vọng trung bình của các tài sản', 'Hiệp phương sai trung bình giữa các cặp tài sản'], answer: 2, explain: 'Với N tài sản, có N ô phương sai nhưng N(N - 1) ô hiệp phương sai. Khi N tăng, trọng số của mỗi ô phương sai (1/N²) làm phần phương sai riêng tiến về 0, còn phần hiệp phương sai tiến về hiệp phương sai trung bình. Phương sai riêng của từng tài sản bị đa dạng hóa đi; lợi suất kỳ vọng không quyết định rủi ro.' },
    { q: 'Một danh mục nằm trên đường biên phương sai nhỏ nhất nhưng ở phía DƯỚI danh mục phương sai nhỏ nhất toàn cục. Phát biểu nào đúng nhất?', choices: ['Danh mục này hiệu quả vì có phương sai nhỏ nhất ở mức lợi suất của nó', 'Danh mục này không hiệu quả vì có danh mục khác cùng độ lệch chuẩn nhưng lợi suất kỳ vọng cao hơn', 'Danh mục này là danh mục tiếp tuyến'], answer: 1, explain: 'Đường biên hiệu quả chỉ là phần phía trên danh mục phương sai nhỏ nhất toàn cục. Với mỗi danh mục ở phần dưới, có một danh mục ở phần trên cùng σ nhưng E(R) cao hơn, nên nó bị vượt trội. "Phương sai nhỏ nhất ở mức lợi suất của nó" chỉ đúng nghĩa đường biên phương sai nhỏ nhất, chưa đủ để hiệu quả. Danh mục tiếp tuyến luôn nằm trên đường biên hiệu quả.' },
    { q: 'Tài sản A có σ = 25%, tài sản B có σ = 15%, hệ số tương quan 0,3. Tỷ trọng của A trong danh mục phương sai nhỏ nhất toàn cục (không giới hạn bán khống) gần nhất với:', choices: ['18,00%', '37,50%', '82,00%'], answer: 0, explain: 'Cov = 0,3 × 0,25 × 0,15 = 0,01125. wA = (σB² - Cov)/(σA² + σB² - 2Cov) = (0,0225 - 0,01125)/(0,0625 + 0,0225 - 0,0225) = 0,01125/0,0625 = 18,00%. Lựa chọn 37,50% dùng σB/(σA + σB), công thức chỉ đúng khi ρ = -1. Lựa chọn 82,00% là tỷ trọng của B.' },
    { q: 'Tài sản A có σ = 20%, tài sản B có σ = 10%, hệ số tương quan 0,6. Nếu được phép bán khống, tỷ trọng của A trong danh mục phương sai nhỏ nhất toàn cục gần nhất với:', choices: ['33,33%', '-7,69%', '20,00%'], answer: 1, explain: 'Cov = 0,6 × 0,2 × 0,1 = 0,012. wA = (0,01 - 0,012)/(0,04 + 0,01 - 0,024) = -0,002/0,026 = -7,69%: phải bán khống A để đạt phương sai nhỏ nhất (nếu cấm bán khống, danh mục phương sai nhỏ nhất là 100% B). Lựa chọn 33,33% dùng σB/(σA + σB), chỉ đúng khi ρ = -1. Lựa chọn 20,00% bỏ qua hiệp phương sai (coi ρ = 0).' },
    { q: 'Một danh mục có lợi suất kỳ vọng 11% và độ lệch chuẩn 22%. Với nhà đầu tư có hệ số ngại rủi ro A = 3, lợi suất tương đương chắc chắn (U = E(R) - 0,5Aσ²) gần nhất với:', choices: ['-3,52%', '-22,00%', '3,74%'], answer: 2, explain: 'U = 0,11 - 0,5 × 3 × 0,22² = 0,11 - 1,5 × 0,0484 = 0,0374 = 3,74%: nhà đầu tư thấy danh mục này ngang với lợi suất phi rủi ro 3,74%. Lựa chọn -3,52% quên hệ số 0,5. Lựa chọn -22,00% dùng σ thay vì σ².' },
    { q: 'Phát biểu nào về đường bàng quan của nhà đầu tư ngại rủi ro là CHÍNH XÁC nhất?', choices: ['Nhà đầu tư càng ngại rủi ro thì đường bàng quan càng dốc', 'Đường bàng quan nằm càng thấp thì mức hữu dụng càng cao', 'Đường bàng quan của nhà đầu tư ngại rủi ro là đường nằm ngang'], answer: 0, explain: 'A lớn hơn nghĩa là đòi bù nhiều lợi suất hơn cho mỗi đơn vị rủi ro tăng thêm, nên đường bàng quan dốc hơn. Đường nằm cao hơn (phía trên bên trái) mới có hữu dụng cao hơn. Đường nằm ngang ứng với nhà đầu tư trung lập rủi ro (A = 0), chỉ quan tâm E(R).' },
    { q: 'Rf = 4%; danh mục rủi ro có E(R) = 12% và σ = 20%. Nhà đầu tư đặt 75% vào danh mục rủi ro và 25% vào tài sản phi rủi ro. Lợi suất kỳ vọng và độ lệch chuẩn của danh mục tổng hợp là:', choices: ['9,00%; 15,00%', '10,00%; 15,00%', '10,00%; 11,25%'], answer: 1, explain: 'E(RC) = Rf + y[E(RP) - Rf] = 4% + 0,75 × 8% = 10,00%. Tài sản phi rủi ro có σ = 0 và Cov = 0, nên σC = y × σP = 0,75 × 20% = 15,00%. Lựa chọn 9,00% quên phần lợi suất 25% × 4% của tài sản phi rủi ro. Lựa chọn 11,25% bình phương tỷ trọng (0,75² × 20%).' },
    { q: 'Rf = 3%; danh mục rủi ro có E(R) = 11% và σ = 16%. Một nhà đầu tư muốn đạt lợi suất kỳ vọng 14% bằng cách vay ở Rf để đầu tư thêm vào danh mục rủi ro. Độ lệch chuẩn của danh mục tổng hợp gần nhất với:', choices: ['20,36%', '6,00%', '22,00%'], answer: 2, explain: 'y = (14% - 3%)/(11% - 3%) = 1,375, tức đầu tư 137,5% vốn vào danh mục rủi ro, vay 37,5%. σC = 1,375 × 16% = 22,00%. Lựa chọn 20,36% nhân σ với tỷ lệ 14/11, bỏ qua Rf. Lựa chọn 6,00% chỉ tính rủi ro của phần vay thêm.' },
    { q: 'Rf = 3%. Ba danh mục rủi ro trên đường biên hiệu quả: X (E = 9%, σ = 12%), Y (E = 14%, σ = 20%), Z (E = 7%, σ = 7%). Danh mục rủi ro nên kết hợp với tài sản phi rủi ro để có CAL tốt nhất là:', choices: ['Y', 'X', 'Z'], answer: 2, explain: 'Độ dốc CAL = tỷ số Sharpe: X = 6/12 = 0,50; Y = 11/20 = 0,55; Z = 4/7 = 0,571. Z cho CAL dốc nhất, mọi mức rủi ro mong muốn đều đạt được với lợi suất cao nhất bằng cách vay hoặc cho vay ở Rf. Chọn Y là nhìn lợi suất kỳ vọng cao nhất; chọn X không dựa trên tiêu chí đúng nào.' },
    { q: 'Rf = 3%; danh mục rủi ro tối ưu có E(R) = 11% và σ = 16%. Nhà đầu tư có A = 2,5. Tỷ trọng tối ưu vào danh mục rủi ro là:', choices: ['125%, tức vay 25% vốn ở Rf', '20%, phần còn lại gửi phi rủi ro', '171,88%, tức vay 71,88% vốn ở Rf'], answer: 0, explain: 'y* = [E(RP) - Rf]/(Aσ²) = 0,08/(2,5 × 0,0256) = 1,25: đầu tư 125% vào danh mục rủi ro, vay 25% ở Rf. Lựa chọn 20% dùng σ thay vì σ² ở mẫu số. Lựa chọn 171,88% dùng E(RP) thay vì lợi suất vượt trội ở tử số.' },
    { q: 'Rf = 3%; danh mục thị trường có E(RM) = 10% và σM = 18%. Một nhà đầu tư muốn danh mục trên CML có lợi suất kỳ vọng 12%. Tỷ trọng vào danh mục thị trường gần nhất với:', choices: ['120,00%', '128,57%', '77,78%'], answer: 1, explain: 'Trên CML: E = Rf + w × (E(RM) - Rf), nên w = (12% - 3%)/(10% - 3%) = 9/7 = 128,57% (vay 28,57% ở Rf); σ = 1,2857 × 18% = 23,14%. Lựa chọn 120,00% lấy 12%/10%, bỏ qua Rf. Lựa chọn 77,78% đảo ngược tử số và mẫu số.' },
    { q: 'Phát biểu nào về đường thị trường vốn (CML) là CHÍNH XÁC nhất?', choices: ['CML là CAL có danh mục rủi ro là danh mục thị trường, dựa trên giả định kỳ vọng đồng nhất', 'CML đo rủi ro bằng beta và áp dụng cho mọi tài sản riêng lẻ', 'Mỗi nhà đầu tư có một CML riêng tùy mức ngại rủi ro'], answer: 0, explain: 'Khi mọi nhà đầu tư có cùng kỳ vọng, danh mục tiếp tuyến chung là danh mục thị trường, và CAL đi qua nó là CML. CML dùng tổng rủi ro σ và chỉ áp dụng cho danh mục hiệu quả; đường dùng beta cho mọi tài sản là SML. Mọi nhà đầu tư dùng chung một CML; mức ngại rủi ro chỉ quyết định điểm họ chọn trên đường.' },
    { q: 'Khách hàng muốn tối thiểu hóa xác suất lợi suất danh mục thấp hơn 4%. Ba lựa chọn: A (E = 10%, σ = 15%), B (E = 7%, σ = 6%), C (E = 13%, σ = 20%). Theo tiêu chí safety-first của Roy, nên chọn:', choices: ['C', 'B', 'A'], answer: 1, explain: 'SFRatio = [E(RP) - RL]/σP: A = 6/15 = 0,40; B = 3/6 = 0,50; C = 9/20 = 0,45. B có tỷ số cao nhất, nên có xác suất rơi dưới 4% thấp nhất (với giả định phân phối chuẩn). Chọn C là chỉ nhìn E(R) - RL mà quên chia cho σ. A có tỷ số thấp nhất.' },
    { q: 'Ba danh mục: P (E = 8%, σ = 10%), Q (E = 10%, σ = 18%), R (E = 12%, σ = 30%). Một nhà đầu tư trung lập với rủi ro (A = 0) sẽ chọn:', choices: ['P, vì có tỷ lệ lợi suất trên rủi ro cao nhất', 'Q, vì cân bằng giữa lợi suất và rủi ro', 'R, vì có lợi suất kỳ vọng cao nhất'], answer: 2, explain: 'Với A = 0, U = E(R) - 0 = E(R): nhà đầu tư trung lập rủi ro chỉ xếp hạng theo lợi suất kỳ vọng, nên chọn R (12%). Lập luận chọn P hay Q dựa trên rủi ro, chỉ phù hợp với nhà đầu tư ngại rủi ro (A > 0).' },
  ];

  // Widget: đường cong danh mục 2 tài sản (cổ phiếu E 10%, σ 20%; trái phiếu E 4%, σ 8%).
  const widgets = {
    frontier2(el) {
      el.innerHTML = `
        <div class="w-row"><label>Hệ số tương quan ρ: <b data-o="rho">0,20</b><input type="range" min="-1" max="1" step="0.05" value="0.2" data-i="rho"></label>
        <label>Tỷ trọng cổ phiếu: <b data-o="w">60%</b><input type="range" min="0" max="100" step="5" value="60" data-i="w"></label>
        <label>Cổ phiếu: E = 10%, σ = 20%<br>Trái phiếu: E = 4%, σ = 8%</label></div>
        <div class="w-out"><div data-o="svg"></div><div class="w-price" data-o="p"></div><div class="w-note" data-o="note"></div></div>`;
      const q = s => el.querySelector(s);
      const fmt = (x, d = 2) => x.toFixed(d).replace('.', ',').replace(/^-/, '-');
      const Es = 0.10, ss = 0.20, Eb = 0.04, sb = 0.08;
      const port = (w, rho) => {
        const v = w * w * ss * ss + (1 - w) * (1 - w) * sb * sb + 2 * w * (1 - w) * rho * ss * sb;
        return { E: w * Es + (1 - w) * Eb, s: Math.sqrt(Math.max(v, 0)) };
      };
      const W = 600, H = 300, l = 60, r = 580, tp = 20, b = 250;
      const xs = s => l + (s / 0.22) * (r - l);
      const ys = e => b - ((e - 0.03) / 0.08) * (b - tp);
      const upd = () => {
        const rho = +q('[data-i="rho"]').value, w = +q('[data-i="w"]').value / 100;
        let pts = '';
        for (let i = 0; i <= 100; i++) { const p = port(i / 100, rho); pts += `${xs(p.s).toFixed(1)},${ys(p.E).toFixed(1)} `; }
        const c = rho * ss * sb;
        let wm = (sb * sb - c) / (ss * ss + sb * sb - 2 * c);
        if (!isFinite(wm)) wm = 0;
        wm = Math.min(1, Math.max(0, wm));
        const m = port(wm, rho), p = port(w, rho);
        let s = `<svg viewBox="0 0 ${W} ${H}" class="sv" style="max-height:340px" role="img" aria-label="Đường cong danh mục 2 tài sản">`;
        s += `<line x1="${l}" y1="${b}" x2="${r}" y2="${b}" class="sv-axis"/><line x1="${l}" y1="${tp}" x2="${l}" y2="${b}" class="sv-axis"/>`;
        [0.04, 0.06, 0.08, 0.10].forEach(e => { s += `<line x1="${l}" y1="${ys(e)}" x2="${r}" y2="${ys(e)}" class="sv-grid"/><text x="${l - 8}" y="${ys(e) + 5}" class="sv-muted" text-anchor="end">${e * 100}%</text>`; });
        [0, 0.05, 0.10, 0.15, 0.20].forEach(x => { s += `<text x="${xs(x)}" y="${b + 22}" class="sv-muted">${Math.round(x * 100)}%</text>`; });
        s += `<line x1="${xs(sb)}" y1="${ys(Eb)}" x2="${xs(ss)}" y2="${ys(Es)}" class="sv-dash"/>`;
        s += `<polyline points="${pts}" class="sv-curve"/>`;
        s += `<circle cx="${xs(sb)}" cy="${ys(Eb)}" r="5" class="sv-dot"/><text x="${xs(sb) + 10}" y="${ys(Eb) + 18}" class="sv-muted" text-anchor="start">Trái phiếu</text>`;
        s += `<circle cx="${xs(ss)}" cy="${ys(Es)}" r="5" class="sv-dot"/><text x="${xs(ss) - 8}" y="${ys(Es) - 10}" class="sv-muted" text-anchor="end">Cổ phiếu</text>`;
        s += `<circle cx="${xs(m.s)}" cy="${ys(m.E)}" r="7" class="sv-node down"/><text x="${xs(m.s) + 12}" y="${ys(m.E) - 8}" class="sv-txt sv-t-down" text-anchor="start">MVP</text>`;
        s += `<circle cx="${xs(p.s)}" cy="${ys(p.E)}" r="7" class="sv-node up"/>`;
        s += `<text x="${(l + r) / 2}" y="${H - 4}" class="sv-muted">Độ lệch chuẩn σ (trục ngang) - lợi suất kỳ vọng (trục dọc)</text></svg>`;
        q('[data-o="svg"]').innerHTML = s;
        q('[data-o="rho"]').textContent = fmt(rho);
        q('[data-o="w"]').textContent = `${Math.round(w * 100)}%`;
        q('[data-o="p"]').textContent = `Danh mục chọn: E = ${fmt(p.E * 100)}%, σ = ${fmt(p.s * 100)}% (trung bình có trọng số các σ: ${fmt((w * ss + (1 - w) * sb) * 100)}%)`;
        q('[data-o="note"]').textContent = `Danh mục phương sai nhỏ nhất (không bán khống): ${fmt(wm * 100, 1)}% cổ phiếu, E = ${fmt(m.E * 100)}%, σ = ${fmt(m.s * 100)}%. Đường nét đứt là trường hợp ρ = +1.`;
      };
      el.addEventListener('input', upd);
      upd();
    },
  };

  window.LESSONS['QM-08'] = {
    moduleId: 'QM-08',
    calculator: 'BA II Plus',
    warmup: [
      'Ôn module trước: công thức độ lệch chuẩn mẫu chia cho n hay n - 1? Vì sao?',
      'Nếu hai cổ phiếu luôn tăng giảm cùng lúc, việc nắm cả hai có giúp giảm rủi ro không? Nếu chúng luôn ngược chiều thì sao?',
      'Bạn sẵn sàng hy sinh bao nhiêu % lợi suất kỳ vọng để giảm một nửa độ biến động của danh mục? Câu trả lời nói lên mức ngại rủi ro của bạn.',
    ],
    sections,
    glossary,
    practice,
    widgets,
    slides: [],
    wrapup: [
      'Viết lại công thức σ của danh mục 2 tài sản mà không nhìn tài liệu, rồi giải thích bằng lời vì sao ρ thấp làm giảm rủi ro.',
      'Vẽ nhanh trên giấy: đường biên hiệu quả, CAL tiếp tuyến và hai đường bàng quan (A lớn và A nhỏ). Đánh dấu danh mục tối ưu của từng người.',
      'Phân biệt CAL và CML trong một câu. Còn điểm nào chưa rõ? Ghi lại để hỏi.',
    ],
  };
}());
