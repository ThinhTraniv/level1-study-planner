// Bài giảng EQ-06 - Discounted Cash Flow (DCF) and Growth Models (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t, frac, keys, timeline } = window.CFAH;

  const sections = [
    {
      title: '1. Bức tranh lớn',
      minutes: 5,
      html: `
<p>EQ-05 đã giới thiệu nhóm mô hình hiện tại hóa dòng tiền. Module này biến nó thành <b>con số cụ thể</b>:</p>
<div class="key">Giá trị nội tại của cổ phiếu = PV của các dòng tiền mà cổ đông (hoặc toàn doanh nghiệp) sẽ nhận, chiết khấu ở lợi suất yêu cầu phù hợp. Khác biệt giữa các mô hình chỉ nằm ở <b>dòng tiền nào</b> và <b>giả định tăng trưởng nào</b>.</div>
<ol>
  <li><b>Chọn dòng tiền</b>: cổ tức, FCFE, FCFF hay lợi nhuận thặng dư, và quy trình dùng mô hình. Ứng với LOS 1 (phần 2, 6).</li>
  <li><b>Tính giá trị</b> khi dòng tiền tăng đều mãi mãi (Gordon) hoặc tăng theo nhiều giai đoạn. Ứng với LOS 2 (phần 3, 4, 5, 6).</li>
  <li><b>Hạn chế</b> của giả định tăng trưởng không đổi và nhiều giai đoạn. Ứng với LOS 3 (phần 7).</li>
  <li><b>Cổ phiếu ưu đãi</b> và ảnh hưởng của các điều khoản mua lại, bán lại, chuyển đổi. Ứng với LOS 4 (phần 8).</li>
</ol>
<p class="tip">QM-04 đã dạy Gordon và mô hình hai giai đoạn ở mức cơ bản (D<sub>1</sub>/(r - g), giá trị cuối kỳ). Ở đây ta đi sâu hơn: g lấy từ đâu (g = b × ROE), mô hình ba giai đoạn, độ nhạy, dòng tiền tự do và các điểm yếu của mô hình. Module này cần <b>BA II Plus</b>, chủ yếu là hàm <kbd>CF</kbd> / <kbd>NPV</kbd>.</p>`,
    },
    {
      title: '2. Bốn mô hình hiện tại hóa và đầu vào của chúng',
      minutes: 16,
      html: `
<table class="plain"><thead><tr><th>Mô hình</th><th>Dòng tiền chiết khấu</th><th>Lãi suất chiết khấu</th><th>Kết quả</th></tr></thead><tbody>
<tr><td>${t('ddm', 'DDM')}</td><td>Cổ tức dự kiến</td><td>${t('re', 'Lợi suất yêu cầu vốn chủ (r<sub>e</sub>)')}</td><td>Giá trị vốn chủ</td></tr>
<tr><td>${t('fcfe', 'FCFE')}</td><td>Dòng tiền tự do cho cổ đông</td><td>r<sub>e</sub></td><td>Giá trị vốn chủ</td></tr>
<tr><td>${t('fcff', 'FCFF')}</td><td>Dòng tiền tự do cho mọi người cấp vốn</td><td>${t('wacc', 'WACC')}</td><td>Giá trị doanh nghiệp; trừ nợ để ra vốn chủ</td></tr>
<tr><td>${t('ri', 'Residual income')}</td><td>Lợi nhuận vượt chi phí vốn chủ: RI<sub>t</sub> = E<sub>t</sub> - r<sub>e</sub> × B<sub>t-1</sub></td><td>r<sub>e</sub></td><td>Book value hiện tại + PV(RI) = giá trị vốn chủ</td></tr>
</tbody></table>
<div class="key">Quy tắc nhất quán: dòng tiền <b>cho cổ đông</b> (cổ tức, FCFE, RI) thì chiết khấu ở <b>r<sub>e</sub></b>. Dòng tiền <b>cho toàn doanh nghiệp</b> (FCFF) thì chiết khấu ở <b>WACC</b>. Trộn lẫn là sai.</div>

<h4>Hai định nghĩa dòng tiền tự do</h4>
<div class="formula">FCFE = CFO - FCInv + Vay mới ròng</div>
<div class="formula">FCFF = CFO + Lãi vay × (1 - t) - FCInv</div>
<p>CFO là dòng tiền từ hoạt động kinh doanh, FCInv là ${t('fcinv', 'đầu tư vốn cố định')} (capex trừ tiền thu từ thanh lý). FCFE trừ thêm phần trả cho chủ nợ (lãi vay đã nằm trong CFO, trả gốc nằm trong vay ròng), nên nó là phần <b>còn lại thuộc về cổ đông</b>.</p>

<h4>Khi nào dùng mô hình nào?</h4>
<table class="plain"><thead><tr><th>Mô hình</th><th>Phù hợp khi</th></tr></thead><tbody>
<tr><td>DDM</td><td>Công ty trả cổ tức, chính sách cổ tức ổn định và gắn với lợi nhuận; nhà đầu tư nhỏ lẻ nắm thiểu số (chỉ nhận cổ tức, không quyết định được dòng tiền)</td></tr>
<tr><td>FCFE</td><td>Không trả hoặc trả cổ tức khác xa khả năng chi trả; dòng tiền tự do dương; đòn bẩy ổn định; góc nhìn của cổ đông kiểm soát</td></tr>
<tr><td>FCFF</td><td>Đòn bẩy cao hoặc đang thay đổi; FCFE âm do trả nợ lớn; định giá toàn doanh nghiệp (mua lại)</td></tr>
<tr><td>Residual income</td><td>Không trả cổ tức, dòng tiền tự do âm nhiều năm, nhưng có book value và lợi nhuận đáng tin (ví dụ ngân hàng)</td></tr>
</tbody></table>

<h4>Quy trình dùng mô hình hiện tại hóa</h4>
<ol>
<li><b>Hiểu doanh nghiệp</b>: ngành, chiến lược, vị thế cạnh tranh (EQ-09, EQ-10).</li>
<li><b>Dự báo</b> dòng tiền và chọn giả định tăng trưởng (EQ-08).</li>
<li><b>Ước tính lợi suất yêu cầu</b>: r<sub>e</sub> thường dùng CAPM, r<sub>e</sub> = r<sub>f</sub> + β × (E(R<sub>m</sub>) - r<sub>f</sub>) (EQ-12); WACC cho FCFF.</li>
<li><b>Chọn mô hình</b> phù hợp với đặc điểm công ty và tính giá trị.</li>
<li><b>Diễn giải</b>: so với giá thị trường, kiểm tra độ nhạy, đưa ra kết luận.</li>
</ol>`,
    },
    {
      title: '3. DDM với thời gian nắm giữ hữu hạn',
      minutes: 9,
      html: `
<p>Nhà đầu tư nắm cổ phiếu n năm nhận được cổ tức trong n năm cộng với giá bán ở cuối năm n:</p>
<div class="formula">V<sub>0</sub> = ${frac('D<sub>1</sub>', '(1 + r<sub>e</sub>)')} + ${frac('D<sub>2</sub>', '(1 + r<sub>e</sub>)<sup>2</sup>')} + ... + ${frac('D<sub>n</sub> + P<sub>n</sub>', '(1 + r<sub>e</sub>)<sup>n</sup>')}</div>
<div class="example"><div class="ex-h">Ví dụ 3.1 - Nắm giữ 1 năm</div>
<p>Cổ tức vừa trả D<sub>0</sub> = 2,00, dự kiến tăng 10% trong năm tới. Giá bán dự kiến cuối năm 38. r<sub>f</sub> = 4%, beta 1,3, phần bù rủi ro thị trường 5%. Giá trị cổ phiếu hôm nay?</p>
<details><summary>Xem lời giải</summary>
<p>r<sub>e</sub> = 4% + 1,3 × 5% = 10,5%. D<sub>1</sub> = 2,00 × 1,10 = 2,20.<br>V<sub>0</sub> = (2,20 + 38) / 1,105 = <b>36,38</b>.</p></details></div>
<div class="example"><div class="ex-h">Ví dụ 3.2 - Nắm giữ 3 năm</div>
<p>D<sub>0</sub> = 1,50, cổ tức tăng 8%/năm, r<sub>e</sub> = 12%, dự kiến bán ở cuối năm 3 với giá 40. Giá trị hôm nay?</p>
<details><summary>Xem lời giải</summary>
<p>D<sub>1</sub> = 1,62; D<sub>2</sub> = 1,7496; D<sub>3</sub> = 1,8896.</p>
${keys([
  ['Mở CF, xóa dữ liệu cũ', '[CF] [2ND] [CE/C]', 'CF0 = 0'],
  ['CF0 = 0', '0 [ENTER]', 'CF0 = 0'],
  ['C01', '[↓] 1.62 [ENTER] [↓]', 'F01 = 1'],
  ['C02', '[↓] 1.7496 [ENTER] [↓]', 'F02 = 1'],
  ['C03 = D3 + P3', '[↓] 41.8896 [ENTER]', 'C03 = 41.8896'],
  ['Lãi suất', '[NPV] 12 [ENTER]', 'I = 12'],
  ['Tính', '[↓] [CPT]', 'NPV = 32.6574'],
])}
<p>V<sub>0</sub> = <b>32,66</b>. Nhớ cộng giá bán vào dòng tiền <b>cùng năm</b> với cổ tức năm đó.</p></details></div>
<p class="tip">Giá bán P<sub>n</sub> lấy từ đâu? Chính là giá trị của toàn bộ cổ tức từ năm n + 1 trở đi. Vì vậy, kéo dài thời gian nắm giữ ra vô hạn, ta được: giá trị = PV của <b>toàn bộ</b> cổ tức tương lai. Đó là DDM tổng quát.</p>`,
    },
    {
      title: '4. Gordon và tốc độ tăng trưởng bền vững g = b × ROE',
      minutes: 16,
      html: `
<div class="formula">V<sub>0</sub> = ${frac('D<sub>1</sub>', 'r<sub>e</sub> - g')} = ${frac('D<sub>0</sub> × (1 + g)', 'r<sub>e</sub> - g')} &nbsp;&nbsp; (cần r<sub>e</sub> &gt; g)</div>
<p>Giả định của ${t('gordon', 'mô hình Gordon')}: cổ tức tăng với tốc độ <b>không đổi g mãi mãi</b>, và r<sub>e</sub> không đổi. Phù hợp với công ty trưởng thành, tăng trưởng ổn định, ngang hoặc thấp hơn tốc độ tăng GDP danh nghĩa.</p>

<h4>g lấy từ đâu?</h4>
<p>Nếu công ty giữ lại một phần lợi nhuận và tái đầu tư với tỷ suất sinh lời ROE, thì vốn chủ (và lợi nhuận) tăng thêm đúng bằng phần giữ lại nhân ROE:</p>
<div class="formula">${t('sgr', 'g = b × ROE')} &nbsp;&nbsp; với b = ${t('retention', 'tỷ lệ giữ lại')} = 1 - ${t('payout', 'tỷ lệ chi trả cổ tức')}</div>
<p>Đây là ${t('sgr', 'tốc độ tăng trưởng bền vững')}: tốc độ công ty có thể duy trì mà không cần phát hành thêm cổ phiếu và không thay đổi cơ cấu vốn.</p>

<div class="example"><div class="ex-h">Ví dụ 4.1</div>
<p>Công ty Hòa Bình vừa công bố EPS = 4,00 và trả cổ tức 1,60. ROE ổn định 15%, r<sub>e</sub> = 12%. Định giá bằng Gordon.</p>
<details><summary>Xem lời giải</summary>
<p>Tỷ lệ chi trả = 1,60 / 4,00 = 40%, nên b = 60%.<br>g = 60% × 15% = <b>9%</b>.<br>D<sub>1</sub> = 1,60 × 1,09 = 1,744.<br>V<sub>0</sub> = 1,744 / (12% - 9%) = <b>58,13</b>.</p>
<p class="warn">Bẫy: dùng tỷ lệ chi trả thay cho tỷ lệ giữ lại (40% × 15% = 6%) sẽ ra g sai. g đến từ phần <b>giữ lại</b> để tái đầu tư.</p></details></div>

<h4>Độ nhạy: điểm yếu chết người của Gordon</h4>
<table class="plain"><thead><tr><th>Hòa Bình (D<sub>0</sub> = 1,60)</th><th>r<sub>e</sub> = 11%</th><th>r<sub>e</sub> = 12%</th><th>r<sub>e</sub> = 13%</th></tr></thead><tbody>
<tr><td>g = 9%</td><td>87,20</td><td>58,13</td><td>43,60</td></tr>
</tbody></table>
<p>Chỉ thay đổi r<sub>e</sub> 1 điểm phần trăm, giá trị nhảy từ 43,60 lên 87,20. Tương tự, giữ r<sub>e</sub> = 12% và đổi g thành 8% hay 10% thì giá trị là 43,20 hay 88,00. Lý do: mẫu số (r<sub>e</sub> - g) rất nhỏ, chỉ 3%. Khi g tiến gần r<sub>e</sub>, giá trị tiến tới vô cùng.</p>

<h4>Đảo ngược Gordon: lợi suất yêu cầu ngầm định</h4>
<div class="formula">r<sub>e</sub> = ${frac('D<sub>1</sub>', 'P<sub>0</sub>')} + g</div>
<p>Ví dụ: P<sub>0</sub> = 50, D<sub>1</sub> = 2, g = 6% thì r<sub>e</sub> = 4% + 6% = <b>10%</b>. Lợi suất = tỷ suất cổ tức + tăng trưởng (lãi vốn).</p>

<h4>Giá trị tăng trưởng</h4>
<p>Nếu công ty trả hết lợi nhuận (b = 0, g = 0), giá trị là E<sub>1</sub>/r<sub>e</sub>. Phần chênh giữa giá trị thực và E<sub>1</sub>/r<sub>e</sub> chính là giá trị của các cơ hội tăng trưởng. Tăng trưởng chỉ tạo giá trị khi <b>ROE &gt; r<sub>e</sub></b>. Nếu ROE &lt; r<sub>e</sub>, giữ lại lợi nhuận để tái đầu tư làm <b>giảm</b> giá trị, dù g tăng.</p>`,
    },
    {
      title: '5. Mô hình nhiều giai đoạn',
      minutes: 18,
      html: `
<p>Công ty tăng trưởng nhanh không thể giữ tốc độ đó mãi: lợi nhuận cao sẽ thu hút cạnh tranh và tốc độ tăng trưởng sẽ giảm về mức bền vững. Mô hình ${t('multistage', 'nhiều giai đoạn')} chia tương lai thành các giai đoạn:</p>
<div class="formula">V<sub>0</sub> = Σ<sub>t=1..n</sub> ${frac('D<sub>t</sub>', '(1 + r<sub>e</sub>)<sup>t</sup>')} + ${frac('V<sub>n</sub>', '(1 + r<sub>e</sub>)<sup>n</sup>')} &nbsp;&nbsp; với V<sub>n</sub> = ${frac('D<sub>n+1</sub>', 'r<sub>e</sub> - g<sub>L</sub>')}</div>
<p>V<sub>n</sub> là ${t('tv', 'giá trị cuối kỳ (terminal value)')}: giá trị tại thời điểm n của mọi cổ tức từ năm n + 1 trở đi. g<sub>L</sub> là tốc độ tăng trưởng dài hạn.</p>

${timeline(4, [{ t: 0, label: 'V0 = ?', up: true, cls: 'pv' }, { t: 1, label: '2,30' }, { t: 2, label: '2,645' }, { t: 3, label: '3,042 + V3' }, { t: 4, label: '3,194 ...' }], 'D0 = 2, tăng 15% trong 3 năm, sau đó 5% mãi mãi, r = 11%.')}
<div class="example"><div class="ex-h">Ví dụ 5.1 - Hai giai đoạn</div>
<p>Công ty Phương Nam vừa trả cổ tức 2,00. Cổ tức dự kiến tăng 15%/năm trong 3 năm, sau đó 5%/năm mãi mãi. r<sub>e</sub> = 11%. Giá trị cổ phiếu?</p>
<details><summary>Xem lời giải</summary>
<p>D<sub>1</sub> = 2,30; D<sub>2</sub> = 2,645; D<sub>3</sub> = 3,0418; D<sub>4</sub> = 3,0418 × 1,05 = 3,1938.<br>
V<sub>3</sub> = 3,1938 / (11% - 5%) = 53,2306.<br>Dòng tiền năm 3 = 3,0418 + 53,2306 = 56,2724.</p>
${keys([
  ['Mở CF, xóa dữ liệu cũ', '[CF] [2ND] [CE/C]', 'CF0 = 0'],
  ['C01', '[↓] 2.3 [ENTER] [↓]', 'F01 = 1'],
  ['C02', '[↓] 2.645 [ENTER] [↓]', 'F02 = 1'],
  ['C03 = D3 + V3', '[↓] 56.272375 [ENTER]', 'C03 = 56.2724'],
  ['Lãi suất', '[NPV] 11 [ENTER]', 'I = 11'],
  ['Tính', '[↓] [CPT]', 'NPV = 45.3647'],
])}
<p>V<sub>0</sub> = <b>45,36</b>. Trong đó PV của giá trị cuối kỳ = 53,2306 / 1,11<sup>3</sup> = 38,92, chiếm khoảng <b>86%</b> tổng giá trị. PV của 3 năm cổ tức đầu chỉ là 6,44.</p></details></div>
<p class="warn"><b>Ba bẫy kinh điển:</b> (1) V<sub>n</sub> tính bằng D<sub>n+1</sub>, không phải D<sub>n</sub>. (2) V<sub>n</sub> nằm ở thời điểm <b>n</b>, chiết khấu n năm, không phải n + 1. (3) Dùng g<sub>L</sub> của giai đoạn cuối trong mẫu số, không dùng g giai đoạn đầu.</p>

<div class="example"><div class="ex-h">Ví dụ 5.2 - Ba giai đoạn</div>
<p>D<sub>0</sub> = 1,20. Cổ tức tăng 25% trong 2 năm, 12% trong 2 năm tiếp theo, sau đó 5% mãi mãi. r<sub>e</sub> = 10%.</p>
<details><summary>Xem lời giải</summary>
<p>D<sub>1</sub> = 1,50; D<sub>2</sub> = 1,875; D<sub>3</sub> = 2,10; D<sub>4</sub> = 2,352; D<sub>5</sub> = 2,352 × 1,05 = 2,4696.<br>
V<sub>4</sub> = 2,4696 / (10% - 5%) = 49,392. Dòng tiền năm 4 = 2,352 + 49,392 = 51,744.</p>
${keys([['', '[CF] [2ND] [CE/C] [↓] 1.5 [ENTER] [↓] [↓] 1.875 [ENTER] [↓] [↓] 2.1 [ENTER] [↓] [↓] 51.744 [ENTER] [NPV] 10 [ENTER] [↓] [CPT]', 'NPV = 39.8328']])}
<p>V<sub>0</sub> = <b>39,83</b>.</p></details></div>

<h4>Thử ngay: mô hình hai giai đoạn</h4>
<div class="widget" data-widget="twoStage"></div>
<p class="tip">Giá trị cuối kỳ cũng có thể ước tính bằng bội số, ví dụ V<sub>n</sub> = P/E dự kiến × E<sub>n</sub> (xem EQ-07). Dù dùng cách nào, hãy kiểm tra xem giá trị cuối kỳ chiếm bao nhiêu phần trăm tổng giá trị.</p>`,
    },
    {
      title: '6. Mô hình dòng tiền tự do: FCFE và FCFF',
      minutes: 12,
      html: `
<p>Cổ tức là thứ ban giám đốc <b>quyết định trả</b>; dòng tiền tự do là thứ công ty <b>có khả năng trả</b>. Khi hai con số này khác xa nhau, mô hình dòng tiền tự do phản ánh giá trị tốt hơn.</p>
<div class="formula">FCFE = Lợi nhuận ròng + Khấu hao - Tăng vốn lưu động - FCInv + (Vay mới - Trả nợ gốc)</div>
<div class="example"><div class="ex-h">Ví dụ 6.1 - FCFE</div>
<p>Công ty Thái Sơn năm nay: lợi nhuận ròng 500, khấu hao 120, vốn lưu động tăng 40, đầu tư tài sản cố định 200, vay mới 60 (sau khi trừ trả gốc). Có 100 cổ phiếu. FCFE dự kiến tăng 4%/năm mãi mãi, r<sub>e</sub> = 11%. Giá trị mỗi cổ phiếu?</p>
<details><summary>Xem lời giải</summary>
<p>FCFE<sub>0</sub> = 500 + 120 - 40 - 200 + 60 = <b>440</b>, mỗi cổ phiếu 4,40.<br>
V<sub>0</sub> = 4,40 × 1,04 / (11% - 4%) = <b>65,37</b>.</p>
<p>Cách dùng giống hệt Gordon, chỉ thay cổ tức bằng FCFE. Chú ý dấu: vốn lưu động <b>tăng</b> làm giảm FCFE (tiền bị giữ lại trong kinh doanh); vay ròng <b>dương</b> làm tăng FCFE.</p></details></div>
<div class="example"><div class="ex-h">Ví dụ 6.2 - FCFF</div>
<p>FCFF năm tới dự kiến 600, tăng 3%/năm mãi mãi, WACC 9%. Nợ vay (giá thị trường) 3.000, có 200 cổ phiếu. Giá trị vốn chủ mỗi cổ phiếu?</p>
<details><summary>Xem lời giải</summary>
<p>Giá trị doanh nghiệp = 600 / (9% - 3%) = 10.000.<br>Giá trị vốn chủ = 10.000 - 3.000 = 7.000; mỗi cổ phiếu = <b>35</b>.</p>
<p class="warn">FCFF chiết khấu ở WACC cho ra giá trị <b>toàn doanh nghiệp</b>. Quên trừ nợ là lỗi rất hay gặp.</p></details></div>
<p><b>Residual income</b> (giới thiệu): nếu book value đầu năm là 20, EPS năm tới 3 và r<sub>e</sub> = 10%, thì lợi nhuận thặng dư năm tới = 3 - 10% × 20 = <b>1</b>. Giá trị = 20 + PV của các khoản RI tương lai. Công ty chỉ có giá trị cao hơn book value khi tạo ra lợi nhuận <b>vượt</b> chi phí vốn chủ. Mô hình này học sâu ở Level II.</p>`,
    },
    {
      title: '7. Hạn chế của giả định tăng trưởng',
      minutes: 8,
      html: `
<h4>Tăng trưởng không đổi (Gordon)</h4>
<ul>
<li><b>Chỉ dùng được khi r<sub>e</sub> &gt; g</b>. Với công ty đang tăng trưởng nhanh (g ≥ r<sub>e</sub>), công thức cho giá trị vô nghĩa (âm hoặc vô cùng).</li>
<li><b>Rất nhạy</b> với r<sub>e</sub> và g vì mẫu số nhỏ. Sai số nhỏ ở đầu vào thành sai số lớn ở giá trị.</li>
<li>Giả định g không đổi <b>mãi mãi</b>: không công ty nào tăng nhanh hơn nền kinh tế mãi được, nên g dài hạn nên ở mức gần tăng trưởng GDP danh nghĩa.</li>
<li>Không phù hợp với công ty không trả cổ tức hoặc có cổ tức thất thường.</li>
</ul>
<h4>Nhiều giai đoạn</h4>
<ul>
<li><b>Giá trị cuối kỳ chiếm phần lớn</b> tổng giá trị (86% trong ví dụ 5.1), nên mọi điểm yếu của Gordon quay lại qua V<sub>n</sub>.</li>
<li><b>Chuyển giai đoạn đột ngột</b> (15% xuống 5% ngay lập tức) thường không thực tế; tăng trưởng thường giảm dần.</li>
<li>Khó ước tính <b>độ dài</b> của giai đoạn tăng trưởng cao và tốc độ ở mỗi giai đoạn.</li>
<li>Càng nhiều giai đoạn, càng nhiều đầu vào phải đoán, càng nhiều chỗ để sai.</li>
</ul>
<p class="tip">Cách giảm rủi ro: chạy <b>bảng độ nhạy</b> (r<sub>e</sub> × g), dùng nhiều kịch bản, so giá trị cuối kỳ với bội số hợp lý của ngành, và đối chiếu với mô hình bội số (EQ-07).</p>`,
    },
    {
      title: '8. Cổ phiếu ưu đãi',
      minutes: 10,
      html: `
<h4>Không có đáo hạn, không mua lại, không chuyển đổi: perpetuity</h4>
<div class="formula">V<sub>0</sub> = ${frac('D<sub>p</sub>', 'r<sub>p</sub>')}</div>
<p>D<sub>p</sub> là cổ tức ưu đãi cố định mỗi năm, r<sub>p</sub> là lợi suất yêu cầu của cổ phiếu ưu đãi. Đây là Gordon với g = 0.</p>
<div class="example"><div class="ex-h">Ví dụ 8.1</div>
<p>Cổ phiếu ưu đãi ${t('pref', '(preferred stock)')} mệnh giá 100, cổ tức 6% mệnh giá mỗi năm. Lợi suất yêu cầu 7,5%. (a) Không đáo hạn: giá trị? (b) Nếu đáo hạn sau 10 năm (trả lại mệnh giá)?</p>
<details><summary>Xem lời giải</summary>
<p>(a) D<sub>p</sub> = 6; V<sub>0</sub> = 6 / 7,5% = <b>80,00</b>.<br>(b) Giống trái phiếu:</p>
${keys([['', '[2ND] [FV] 10 [N] 7.5 [I/Y] 6 [PMT] 100 [FV] [CPT] [PV]', 'PV = -89.7039']])}
<p>V<sub>0</sub> = <b>89,70</b>. Có đáo hạn thì giá kéo về mệnh giá nhanh hơn, nên cao hơn trường hợp vĩnh viễn khi cổ tức thấp hơn lợi suất yêu cầu.</p></details></div>

<h4>Ảnh hưởng của các điều khoản (contingency features)</h4>
<table class="plain"><thead><tr><th>Điều khoản</th><th>Ai có lợi</th><th>Ảnh hưởng tới giá trị</th></tr></thead><tbody>
<tr><td>${t('callable', 'Callable (công ty được mua lại)')}</td><td>Công ty phát hành</td><td><b>Giảm</b>: giá trị = cổ phiếu thường không điều khoản - giá trị quyền mua lại</td></tr>
<tr><td>${t('putable', 'Putable / retractable (người nắm giữ được bán lại)')}</td><td>Nhà đầu tư</td><td><b>Tăng</b>: giá trị = không điều khoản + giá trị quyền bán lại</td></tr>
<tr><td>${t('convertible', 'Convertible (chuyển đổi sang cổ phiếu thường)')}</td><td>Nhà đầu tư</td><td><b>Tăng</b>: cộng thêm giá trị quyền chuyển đổi</td></tr>
<tr><td>${t('cumulative', 'Cumulative (cộng dồn cổ tức chưa trả)')}</td><td>Nhà đầu tư</td><td><b>Tăng</b> so với non-cumulative: cổ tức bị bỏ lỡ phải trả bù trước khi trả cổ đông thường</td></tr>
</tbody></table>
<div class="example"><div class="ex-h">Ví dụ 8.2 - Vì sao callable làm giảm giá trị</div>
<p>Cổ phiếu ưu đãi ở ví dụ 8.1 (a) có thể bị công ty mua lại ở giá 100. Nếu lợi suất yêu cầu giảm xuống 5%, giá trị nếu không có điều khoản mua lại là bao nhiêu? Vì sao giá thực tế không thể cao như vậy?</p>
<details><summary>Xem lời giải</summary>
<p>Không có điều khoản: 6 / 5% = <b>120</b>. Nhưng công ty sẽ mua lại ở 100 rồi phát hành mới với cổ tức thấp hơn. Không ai trả 120 cho thứ có thể bị mua lại ở 100, nên giá bị "chặn trên" quanh giá mua lại. Đúng lúc lợi suất giảm (điều có lợi cho người nắm giữ) thì quyền mua lại lấy mất phần lợi đó.</p></details></div>
<p class="tip">Nguyên tắc chung: điều khoản nào <b>có lợi cho nhà đầu tư</b> (put, chuyển đổi, cộng dồn) làm giá trị <b>tăng</b>; điều khoản <b>có lợi cho công ty</b> (call) làm giá trị <b>giảm</b>, hay tương đương lợi suất yêu cầu cao hơn.</p>`,
    },
    {
      title: '9. Tóm tắt và bẫy thường gặp',
      minutes: 6,
      html: `
<table class="plain"><thead><tr><th>Tình huống</th><th>Nhớ</th></tr></thead><tbody>
<tr><td>Cổ tức, FCFE, RI</td><td>Chiết khấu ở r<sub>e</sub> → giá trị vốn chủ</td></tr>
<tr><td>FCFF</td><td>Chiết khấu ở WACC → giá trị doanh nghiệp, <b>trừ nợ</b> để ra vốn chủ</td></tr>
<tr><td>Gordon</td><td>D<sub>1</sub> = D<sub>0</sub>(1 + g); cần r<sub>e</sub> &gt; g; rất nhạy với (r<sub>e</sub> - g)</td></tr>
<tr><td>g bền vững</td><td>g = b × ROE, b = 1 - tỷ lệ chi trả (không phải tỷ lệ chi trả × ROE)</td></tr>
<tr><td>Nhiều giai đoạn</td><td>V<sub>n</sub> = D<sub>n+1</sub>/(r - g<sub>L</sub>), đặt tại t = n, cộng với D<sub>n</sub> rồi chiết khấu</td></tr>
<tr><td>BA II Plus</td><td>CF0 = 0, nhập từng D<sub>t</sub>, năm cuối = D<sub>n</sub> + V<sub>n</sub>, NPV ở r<sub>e</sub></td></tr>
<tr><td>FCFE</td><td>Vốn lưu động tăng: trừ; vay ròng dương: cộng</td></tr>
<tr><td>Hạn chế</td><td>Gordon: r &gt; g, nhạy; nhiều giai đoạn: TV chiếm phần lớn, chuyển giai đoạn đột ngột</td></tr>
<tr><td>Cổ phiếu ưu đãi</td><td>D<sub>p</sub>/r<sub>p</sub>; call làm giảm, put / chuyển đổi / cộng dồn làm tăng giá trị</td></tr>
</tbody></table>
<p>Tiếp theo: tab <b>Luyện tập</b> 10 câu (rút ngẫu nhiên từ ngân hàng 30 câu, mỗi lần làm một bộ khác). Mục tiêu: làm được các câu nhiều giai đoạn bằng hàm CF trong dưới 2 phút mỗi câu.</p>`,
    },
  ];

  const glossary = {
    ddm: ['Dividend discount model (DDM)', 'Mô hình chiết khấu cổ tức', 'Giá trị cổ phiếu = PV của cổ tức tương lai, chiết khấu ở r_e.'],
    re: ['Required return on equity', 'Lợi suất yêu cầu vốn chủ', 'Lợi suất tối thiểu cổ đông đòi hỏi để chịu rủi ro; thường ước tính bằng CAPM.'],
    fcfe: ['Free cash flow to equity (FCFE)', 'Dòng tiền tự do cho cổ đông', 'CFO - FCInv + vay ròng; tiền còn lại cho cổ đông sau đầu tư và nghĩa vụ nợ.'],
    fcff: ['Free cash flow to the firm (FCFF)', 'Dòng tiền tự do cho doanh nghiệp', 'CFO + lãi vay x (1 - t) - FCInv; tiền dành cho mọi người cấp vốn.'],
    wacc: ['Weighted average cost of capital (WACC)', 'Chi phí vốn bình quân gia quyền', 'Bình quân chi phí nợ sau thuế và chi phí vốn chủ theo tỷ trọng giá trị thị trường.'],
    ri: ['Residual income', 'Lợi nhuận thặng dư', 'Lợi nhuận ròng trừ chi phí vốn chủ tính trên book value đầu kỳ: E - r_e x B.'],
    fcinv: ['Fixed capital investment (FCInv)', 'Đầu tư vốn cố định', 'Chi đầu tư tài sản cố định (capex) trừ tiền thu từ bán tài sản cố định.'],
    gordon: ['Gordon growth model', 'Mô hình tăng trưởng Gordon', 'V0 = D1/(r - g); cổ tức tăng đều g mãi mãi, cần r > g.'],
    sgr: ['Sustainable growth rate', 'Tốc độ tăng trưởng bền vững', 'g = b x ROE; tốc độ tăng duy trì được mà không phát hành thêm cổ phiếu, không đổi cơ cấu vốn.'],
    retention: ['Earnings retention rate (b)', 'Tỷ lệ giữ lại lợi nhuận', 'Phần lợi nhuận giữ lại để tái đầu tư = 1 - tỷ lệ chi trả cổ tức.'],
    payout: ['Dividend payout ratio', 'Tỷ lệ chi trả cổ tức', 'Cổ tức chia lợi nhuận (DPS/EPS).'],
    multistage: ['Multistage DDM', 'Mô hình cổ tức nhiều giai đoạn', 'Cổ tức tăng theo các tốc độ khác nhau ở từng giai đoạn, cuối cùng tăng đều mãi mãi.'],
    tv: ['Terminal value', 'Giá trị cuối kỳ', 'Giá trị tại cuối giai đoạn dự báo chi tiết của mọi dòng tiền về sau; V_n = D_(n+1)/(r - g_L).'],
    pref: ['Preferred stock', 'Cổ phiếu ưu đãi', 'Cổ phiếu có cổ tức cố định, được ưu tiên trả trước cổ phiếu thường.'],
    callable: ['Callable preferred', 'Cổ phiếu ưu đãi có quyền mua lại', 'Công ty được mua lại ở giá định trước; làm giảm giá trị với nhà đầu tư.'],
    putable: ['Putable (retractable) preferred', 'Cổ phiếu ưu đãi có quyền bán lại', 'Nhà đầu tư được bán lại cho công ty ở giá định trước; làm tăng giá trị.'],
    convertible: ['Convertible preferred', 'Cổ phiếu ưu đãi chuyển đổi', 'Được đổi sang cổ phiếu thường theo tỷ lệ định trước; làm tăng giá trị.'],
    cumulative: ['Cumulative preferred', 'Cổ phiếu ưu đãi cộng dồn', 'Cổ tức chưa trả được cộng dồn và phải trả hết trước khi trả cổ tức cổ phiếu thường.'],
  };

  const practice = [
    { q: 'Công ty vừa trả cổ tức 2,50. Cổ tức dự kiến tăng 5%/năm mãi mãi, lợi suất yêu cầu 11%. Giá trị cổ phiếu theo Gordon gần nhất với:', choices: ['41,67', '45,94', '43,75'], answer: 2, explain: 'D1 = 2,50 x 1,05 = 2,625; V0 = 2,625 / (11% - 5%) = 43,75. Lựa chọn 41,67 dùng D0 thay vì D1. Lựa chọn 45,94 dùng D2 (nhân 1,05 hai lần).' },
    { q: 'Công ty có ROE 18% và tỷ lệ chi trả cổ tức 30%. Tốc độ tăng trưởng bền vững gần nhất với:', choices: ['12,6%', '5,4%', '18,0%'], answer: 0, explain: 'g = b x ROE = (1 - 30%) x 18% = 12,6%. Lựa chọn 5,4% nhân tỷ lệ chi trả với ROE (sai: tăng trưởng đến từ phần giữ lại). Lựa chọn 18,0% giả định giữ lại toàn bộ lợi nhuận.' },
    { q: 'Cổ phiếu ưu đãi không đáo hạn, không mua lại, không chuyển đổi, mệnh giá 100, cổ tức 5% mệnh giá mỗi năm. Lợi suất yêu cầu 6,5%. Giá trị gần nhất với:', choices: ['76,92', '100,00', '130,00'], answer: 0, explain: 'V0 = Dp / rp = 5 / 6,5% = 76,92. Lựa chọn 100,00 là mệnh giá, chỉ đúng khi lợi suất yêu cầu bằng tỷ lệ cổ tức. Lựa chọn 130,00 đảo ngược tỷ số (6,5/5 x 100).' },
    { q: 'D0 = 1,00. Cổ tức tăng 20% trong 2 năm, sau đó 4%/năm mãi mãi. Lợi suất yêu cầu 10%. Giá trị cổ phiếu hôm nay gần nhất với:', choices: ['21,03', '22,91', '22,12'], answer: 1, explain: 'D1 = 1,20; D2 = 1,44; D3 = 1,4976; V2 = 1,4976/6% = 24,96. V0 = 1,20/1,10 + (1,44 + 24,96)/1,10^2 = 22,91. Lựa chọn 21,03 chiết khấu V2 thêm một năm (đặt ở t = 3). Lựa chọn 22,12 tính V2 bằng D2 thay vì D3.' },
    { q: 'Năm nay một công ty có lợi nhuận ròng 300, khấu hao 80, vốn lưu động tăng 30, đầu tư tài sản cố định 150, vay ròng 40. FCFE gần nhất với:', choices: ['300', '240', '200'], answer: 1, explain: 'FCFE = 300 + 80 - 30 - 150 + 40 = 240. Lựa chọn 300 cộng phần tăng vốn lưu động (sai dấu). Lựa chọn 200 quên cộng vay ròng.' },
    { q: 'Cổ phiếu giá 40, vừa trả cổ tức 1,50, cổ tức tăng 5%/năm mãi mãi. Lợi suất yêu cầu ngầm định gần nhất với:', choices: ['8,75%', '1,06%', '8,94%'], answer: 2, explain: 'D1 = 1,575; r = D1/P0 + g = 3,9375% + 5% = 8,94%. Lựa chọn 8,75% dùng D0. Lựa chọn 1,06% trừ g thay vì cộng.' },
    { q: 'Một nhà phân tích dùng FCFF để định giá. Để ra giá trị vốn chủ, cô ấy nên:', choices: ['Chiết khấu FCFF ở WACC rồi trừ giá trị thị trường của nợ', 'Chiết khấu FCFF ở lợi suất yêu cầu vốn chủ', 'Chiết khấu FCFF ở WACC và dùng luôn kết quả làm giá trị vốn chủ'], answer: 0, explain: 'FCFF là dòng tiền cho mọi người cấp vốn nên chiết khấu ở WACC, cho ra giá trị doanh nghiệp; trừ nợ mới ra vốn chủ. Chiết khấu FCFF ở lợi suất yêu cầu vốn chủ là trộn dòng tiền doanh nghiệp với lãi suất của cổ đông. Dùng luôn kết quả làm giá trị vốn chủ là quên trừ nợ.' },
    { q: 'So với một cổ phiếu ưu đãi giống hệt nhưng không có điều khoản, cổ phiếu ưu đãi có quyền mua lại (callable) sẽ có giá trị:', choices: ['Cao hơn, vì nhà đầu tư có thêm lựa chọn', 'Thấp hơn, vì quyền mua lại thuộc về công ty phát hành', 'Bằng nhau, vì cổ tức như nhau'], answer: 1, explain: 'Quyền mua lại thuộc về công ty và được thực hiện khi có lợi cho công ty (lợi suất giảm), tức bất lợi cho nhà đầu tư. Giá trị = không điều khoản - giá trị quyền mua lại. Lập luận "cao hơn vì nhà đầu tư có thêm lựa chọn" đúng với putable hoặc convertible.' },
    { q: 'Nhận định nào mô tả ĐÚNG NHẤT hạn chế của mô hình cổ tức nhiều giai đoạn?', choices: ['Không dùng được cho công ty có tăng trưởng cao trong ngắn hạn', 'Không cần giả định tốc độ tăng trưởng dài hạn', 'Giá trị cuối kỳ thường chiếm phần lớn tổng giá trị và rất nhạy với giả định'], answer: 2, explain: 'Trong ví dụ hai giai đoạn, giá trị cuối kỳ chiếm khoảng 86% giá trị, nên sai số ở g dài hạn và r ảnh hưởng mạnh. Phương án "không dùng được cho công ty có tăng trưởng cao" sai: mô hình nhiều giai đoạn chính là để xử lý tăng trưởng cao tạm thời. Phương án "không cần giả định tăng trưởng dài hạn" sai: vẫn cần g dài hạn cho giá trị cuối kỳ.' },
    { q: 'Cổ tức năm tới dự kiến 1,80; giá bán dự kiến sau 1 năm là 45. r_f = 3%, beta 1,2, phần bù rủi ro thị trường 6%. Giá trị cổ phiếu hôm nay gần nhất với:', choices: ['42,47', '45,44', '40,83'], answer: 0, explain: 'r_e = 3% + 1,2 x 6% = 10,2%; V0 = (1,80 + 45) / 1,102 = 42,47. Lựa chọn 45,44 chiết khấu ở lãi suất phi rủi ro. Lựa chọn 40,83 quên cộng cổ tức (45/1,102).' },
    { q: 'Cổ phiếu vừa trả cổ tức D0 = 2,00; cổ tức tăng 6%/năm. Nhà đầu tư dự định nắm giữ 2 năm và bán ở cuối năm 2 với giá 50. Lợi suất yêu cầu 11%. Giá trị cổ phiếu hôm nay gần nhất với:', choices: ['42,49', '44,31', '40,29'], answer: 1, explain: 'D1 = 2,12; D2 = 2,2472. V0 = 2,12 / 1,11 + (2,2472 + 50) / 1,11^2 = 44,31. Lựa chọn 42,49 quên cổ tức năm 2 (chỉ chiết khấu giá bán ở năm 2). Lựa chọn 40,29 chiết khấu giá bán thêm một năm (đặt ở t = 3), trong khi giá bán nhận cùng năm với D2.' },
    { q: 'Năm tới, công ty dự kiến có EPS 5,00 và tỷ lệ chi trả cổ tức 35%. ROE ổn định 12%, lợi suất yêu cầu 11%. Giá trị cổ phiếu theo Gordon, với g bền vững, gần nhất với:', choices: ['54,69', '25,74', '58,95'], answer: 0, explain: 'D1 = 35% x 5,00 = 1,75; g = b x ROE = 65% x 12% = 7,8%; V0 = 1,75 / (11% - 7,8%) = 54,69. Lựa chọn 25,74 dùng tỷ lệ chi trả thay cho tỷ lệ giữ lại (g = 4,2%). Lựa chọn 58,95 nhân D1 thêm (1 + g) dù EPS đã là của năm tới.' },
    { q: 'Cổ phiếu có D1 = 2,00 và g = 6%. Khi lợi suất yêu cầu là 10%, giá trị theo Gordon là 50. Nếu lợi suất yêu cầu tăng lên 11% (g không đổi), giá trị thay đổi:', choices: ['-10,00%', '-1,00%', '-20,00%'], answer: 2, explain: 'Giá trị mới = 2,00 / (11% - 6%) = 40; thay đổi = 40 / 50 - 1 = -20,00%. Mẫu số (r - g) tăng từ 4% lên 5%, tức tăng 25%, nên giá trị giảm mạnh: đây là độ nhạy của Gordon. Lựa chọn -10,00% giả định giá trị giảm cùng tỷ lệ với r (10% lên 11%). Lựa chọn -1,00% lấy thẳng mức tăng 1 điểm phần trăm của r.' },
    { q: 'Cổ phiếu giá 60. EPS năm tới dự kiến 4,00, lợi suất yêu cầu 10%. Giá trị hiện tại của các cơ hội tăng trưởng (phần giá trị vượt E1 / r) gần nhất với:', choices: ['40,00', '20,00', '56,00'], answer: 1, explain: 'Giá trị nếu không tăng trưởng (trả hết lợi nhuận) = E1 / r = 4,00 / 10% = 40; giá trị tăng trưởng = 60 - 40 = 20,00. Lựa chọn 40,00 là giá trị không tăng trưởng, không phải phần tăng trưởng. Lựa chọn 56,00 lấy giá trừ EPS (60 - 4).' },
    { q: 'Một công ty có ROE 8% trong khi lợi suất yêu cầu của cổ đông là 10%. Công ty quyết định tăng tỷ lệ giữ lại lợi nhuận. Tác động có khả năng NHẤT là:', choices: ['Tăng trưởng g tăng nhưng giá trị cổ phiếu giảm', 'Tăng trưởng g tăng và giá trị cổ phiếu tăng', 'Tăng trưởng g giảm và giá trị cổ phiếu giảm'], answer: 0, explain: 'g = b x ROE nên giữ lại nhiều hơn làm g tăng. Nhưng mỗi đồng giữ lại chỉ sinh lời 8%, thấp hơn 10% cổ đông đòi hỏi, nên tái đầu tư phá hủy giá trị; tăng trưởng chỉ tạo giá trị khi ROE > r. Lựa chọn "giá trị tăng" coi mọi tăng trưởng đều tốt. Lựa chọn "g giảm" sai vì b tăng thì g tăng.' },
    { q: 'FCFF năm nay là 400, dự kiến tăng 3%/năm mãi mãi. WACC 8%. Nợ vay (giá thị trường) 2.000; có 160 cổ phiếu. Giá trị vốn chủ mỗi cổ phiếu gần nhất với:', choices: ['51,50', '37,50', '39,00'], answer: 2, explain: 'FCFF1 = 400 x 1,03 = 412; giá trị doanh nghiệp = 412 / (8% - 3%) = 8.240; vốn chủ = 8.240 - 2.000 = 6.240; mỗi cổ phiếu = 39,00. Lựa chọn 51,50 quên trừ nợ (8.240 / 160). Lựa chọn 37,50 dùng FCFF năm nay thay cho năm tới (8.000 - 2.000 = 6.000).' },
    { q: 'Công ty có dòng tiền từ hoạt động kinh doanh (CFO) 800, đầu tư vốn cố định (FCInv) 300, chi phí lãi vay 100, thuế suất 25%, vay mới ròng 50. FCFF gần nhất với:', choices: ['550', '575', '600'], answer: 1, explain: 'FCFF = CFO + lãi vay x (1 - t) - FCInv = 800 + 100 x 0,75 - 300 = 575. Lựa chọn 550 là FCFE (800 - 300 + 50), dòng tiền cho cổ đông. Lựa chọn 600 cộng lại toàn bộ lãi vay, quên phần tiết kiệm thuế.' },
    { q: 'Giá trị sổ sách vốn chủ mỗi cổ phiếu đầu năm là 25, EPS năm tới dự kiến 3,50. Lợi suất yêu cầu vốn chủ 11%, WACC 9%. Lợi nhuận thặng dư (residual income) mỗi cổ phiếu năm tới là:', choices: ['0,75', '1,25', '2,75'], answer: 0, explain: 'RI = EPS - re x B0 = 3,50 - 11% x 25 = 0,75. Residual income đo lợi nhuận vượt chi phí vốn chủ nên dùng re. Lựa chọn 1,25 dùng WACC (3,50 - 9% x 25), trộn chi phí vốn của toàn doanh nghiệp với lợi nhuận của cổ đông. Lựa chọn 2,75 chỉ là chi phí vốn chủ (11% x 25).' },
    { q: 'Một nhà đầu tư cá nhân mua một lượng nhỏ cổ phiếu (thiểu số) của công ty trả cổ tức ổn định, gắn với lợi nhuận. Mô hình phù hợp NHẤT với góc nhìn của nhà đầu tư này là:', choices: ['FCFE, vì nhà đầu tư có thể quyết định dòng tiền tự do', 'FCFF, vì công ty có đòn bẩy', 'DDM, vì nhà đầu tư thiểu số chỉ nhận cổ tức, không kiểm soát việc dùng dòng tiền'], answer: 2, explain: 'Nhà đầu tư thiểu số không quyết định được chính sách phân phối, dòng tiền họ thực sự nhận là cổ tức; khi cổ tức ổn định và gắn với lợi nhuận, DDM là lựa chọn tự nhiên. FCFE phù hợp góc nhìn cổ đông kiểm soát. FCFF phù hợp khi đòn bẩy cao hoặc thay đổi, không chỉ vì công ty có nợ.' },
    { q: 'Trong quy trình định giá bằng mô hình hiện tại hóa, bước nào nên thực hiện TRƯỚC khi dự báo dòng tiền?', choices: ['So sánh giá trị ước tính với giá thị trường và đưa ra khuyến nghị', 'Chạy bảng độ nhạy theo r và g', 'Hiểu doanh nghiệp: ngành, chiến lược, vị thế cạnh tranh'], answer: 2, explain: 'Quy trình: hiểu doanh nghiệp, dự báo dòng tiền, ước tính lợi suất yêu cầu, chọn mô hình và tính giá trị, rồi diễn giải. Không hiểu doanh nghiệp thì không có cơ sở để dự báo. So sánh với giá thị trường và chạy độ nhạy là các bước diễn giải ở cuối quy trình.' },
    { q: 'D0 = 1,50. Cổ tức tăng 18%/năm trong 3 năm, sau đó 4%/năm mãi mãi. Lợi suất yêu cầu 10%. Giá trị cuối kỳ tại cuối năm 3 (V3) gần nhất với:', choices: ['41,08', '42,72', '32,10'], answer: 1, explain: 'D3 = 1,50 x 1,18^3 = 2,4645; D4 = 2,4645 x 1,04 = 2,5631; V3 = 2,5631 / (10% - 4%) = 42,72. Lựa chọn 41,08 dùng D3 thay vì D4 trong công thức giá trị cuối kỳ. Lựa chọn 32,10 là PV của V3 tại thời điểm 0, không phải giá trị tại cuối năm 3.' },
    { q: 'D0 = 1,00. Cổ tức tăng 30% trong năm 1, 15%/năm trong năm 2 và 3, sau đó 5%/năm mãi mãi. Lợi suất yêu cầu 12%. Giá trị cổ phiếu hôm nay gần nhất với:', choices: ['19,97', '21,06', '21,93'], answer: 2, explain: 'D1 = 1,30; D2 = 1,495; D3 = 1,71925; D4 = 1,8052; V3 = 1,8052 / 7% = 25,7887. V0 = 1,30 / 1,12 + 1,495 / 1,12^2 + (1,71925 + 25,7887) / 1,12^3 = 21,93. Lựa chọn 19,97 chiết khấu V3 bốn năm thay vì ba. Lựa chọn 21,06 tính V3 bằng D3 thay vì D4.' },
    { q: 'Cổ phiếu giá 50, vừa trả cổ tức D0 = 2,00, lợi suất yêu cầu 9%. Theo Gordon, tốc độ tăng trưởng cổ tức ngầm định trong giá gần nhất với:', choices: ['4,81%', '5,00%', '4,00%'], answer: 0, explain: '50 = 2,00 x (1 + g) / (9% - g), suy ra 4,5 - 50g = 2 + 2g, g = 2,5 / 52 = 4,81%. Lựa chọn 5,00% lấy 9% - 2,00 / 50, dùng D0 thay cho D1. Lựa chọn 4,00% chỉ là lợi suất cổ tức D0 / P0.' },
    { q: 'Một công ty công nghệ có tốc độ tăng trưởng cổ tức hiện tại 12%, trong khi lợi suất yêu cầu là 10%. Nhà phân tích muốn dùng mô hình Gordon một giai đoạn. Nhận định nào đúng NHẤT?', choices: ['Gordon cho giá trị âm, chứng tỏ cổ phiếu không có giá trị', 'Gordon vẫn dùng được, chỉ cần lấy giá trị tuyệt đối của kết quả', 'Gordon không áp dụng được vì cần r > g; nên dùng mô hình nhiều giai đoạn'], answer: 2, explain: 'Gordon chỉ có nghĩa khi r > g; với g ≥ r công thức cho kết quả âm hoặc vô cùng, không phản ánh giá trị. Tăng trưởng cao chỉ tạm thời nên dùng mô hình nhiều giai đoạn với g dài hạn thấp hơn r. Kết quả âm không có nghĩa cổ phiếu vô giá trị; lấy giá trị tuyệt đối là vô nghĩa.' },
    { q: 'Nhà phân tích dùng mô hình hai giai đoạn: tăng trưởng 20% trong 5 năm rồi lập tức giảm xuống 4% mãi mãi. Phê phán nào sau đây hợp lý NHẤT?', choices: ['Chuyển giai đoạn đột ngột thường không thực tế; tăng trưởng thường giảm dần, nên có thể dùng thêm giai đoạn chuyển tiếp', 'Mô hình hai giai đoạn không cần giá trị cuối kỳ', 'Tăng trưởng dài hạn 4% chắc chắn quá cao so với mọi nền kinh tế'], answer: 0, explain: 'Rơi từ 20% xuống 4% ngay lập tức hiếm khi xảy ra; mô hình ba giai đoạn hoặc giai đoạn giảm dần thường phản ánh tốt hơn. Mô hình hai giai đoạn vẫn cần giá trị cuối kỳ. Mức 4% có thể hợp lý nếu gần tăng trưởng GDP danh nghĩa, nên "chắc chắn quá cao" là sai.' },
    { q: 'Trong mô hình nhiều giai đoạn, nhà phân tích giả định tăng trưởng dài hạn của công ty là 9%/năm mãi mãi, trong khi tăng trưởng GDP danh nghĩa dài hạn của nền kinh tế khoảng 5%. Vấn đề chính của giả định này là:', choices: ['Không có vấn đề vì công ty tốt có thể tăng trưởng nhanh hơn nền kinh tế mãi mãi', 'Không công ty nào tăng nhanh hơn nền kinh tế mãi được, và g cao làm giá trị cuối kỳ (phần lớn tổng giá trị) bị thổi phồng', 'g dài hạn chỉ ảnh hưởng đến cổ tức giai đoạn đầu, không ảnh hưởng giá trị cuối kỳ'], answer: 1, explain: 'Nếu tăng nhanh hơn nền kinh tế mãi mãi, công ty cuối cùng sẽ lớn hơn cả nền kinh tế; vì vậy g dài hạn nên gần tăng trưởng GDP danh nghĩa. Giá trị cuối kỳ thường chiếm phần lớn tổng giá trị và rất nhạy với g. Lựa chọn "g dài hạn chỉ ảnh hưởng giai đoạn đầu" sai: g dài hạn nằm trong mẫu số của giá trị cuối kỳ.' },
    { q: 'Cổ phiếu ưu đãi mệnh giá 50, cổ tức 8% mệnh giá mỗi năm, đáo hạn sau 5 năm (trả lại mệnh giá), không có điều khoản mua lại hay chuyển đổi. Lợi suất yêu cầu 6%. Giá trị gần nhất với:', choices: ['50,00', '66,67', '54,21'], answer: 2, explain: 'Dp = 4; định giá như trái phiếu: PV của 5 khoản 4 cộng PV của 50 ở năm 5, chiết khấu 6% = 54,21. Lựa chọn 66,67 coi như vĩnh viễn (4 / 6%), bỏ qua đáo hạn. Lựa chọn 50,00 là mệnh giá, chỉ đúng khi lợi suất yêu cầu bằng tỷ lệ cổ tức 8%.' },
    { q: 'Cổ phiếu ưu đãi putable (retractable) cho người nắm giữ quyền bán lại cho công ty ở giá 25. Nếu lợi suất yêu cầu trên thị trường tăng mạnh, so với cổ phiếu ưu đãi tương đương không có quyền bán lại, giá của cổ phiếu putable sẽ:', choices: ['Giảm ít hơn, vì quyền bán lại tạo mức sàn quanh 25', 'Giảm nhiều hơn, vì công ty có thể mua lại', 'Giảm đúng bằng, vì cổ tức như nhau'], answer: 0, explain: 'Giá trị putable = giá trị không điều khoản + giá trị quyền bán lại. Khi lợi suất tăng và giá cổ phiếu thường giảm, người nắm giữ có thể bán lại ở 25, nên giá khó giảm sâu dưới mức đó. Lựa chọn "công ty có thể mua lại" mô tả callable. Lựa chọn "giảm đúng bằng" bỏ qua giá trị của quyền bán lại.' },
    { q: 'Hai cổ phiếu ưu đãi của cùng một công ty có cùng cổ tức và cùng thứ tự ưu tiên; một loại có quyền chuyển đổi sang cổ phiếu phổ thông. So với loại không chuyển đổi, loại có quyền chuyển đổi thường:', choices: ['Có giá thấp hơn vì rủi ro bị pha loãng', 'Có giá cao hơn (lợi suất cổ tức thấp hơn) vì có thêm giá trị của quyền chuyển đổi', 'Có giá bằng nhau vì cổ tức bằng nhau'], answer: 1, explain: 'Quyền chuyển đổi thuộc về nhà đầu tư nên làm giá trị tăng: giá trị = giá trị không điều khoản + giá trị quyền chuyển đổi, tương đương lợi suất cổ tức thấp hơn. Pha loãng ảnh hưởng cổ đông phổ thông hiện hữu, không làm giảm giá trị của người nắm quyền chuyển đổi. "Giá bằng nhau" bỏ qua giá trị của quyền.' },
    { q: 'Cổ phiếu ưu đãi vĩnh viễn trả cổ tức 5 mỗi năm, công ty có quyền mua lại ở giá 102. Lợi suất yêu cầu trên thị trường giảm xuống 4%. Giá thị trường của cổ phiếu này có khả năng gần nhất với:', choices: ['125,00', 'Khoảng 102', '100,00'], answer: 1, explain: 'Nếu không có điều khoản, giá trị = 5 / 4% = 125. Nhưng công ty sẽ mua lại ở 102 rồi phát hành mới với cổ tức thấp hơn, nên không ai trả 125 cho thứ có thể bị mua lại ở 102: giá bị chặn trên quanh giá mua lại. Lựa chọn 125,00 bỏ qua quyền mua lại. Lựa chọn 100,00 không dựa trên dữ kiện nào (mệnh giá không phải giá call).' },
  ];

  // Widget: mô hình hai giai đoạn, hiển thị tỷ trọng giá trị cuối kỳ.
  const widgets = {
    twoStage(el) {
      el.innerHTML = `
        <div class="w-row"><label>D0: <b data-o="d">2,00</b><input type="range" min="0.5" max="5" step="0.1" value="2" data-i="d"></label>
        <label>Tăng trưởng cao g1: <b data-o="g1">15%</b><input type="range" min="0" max="30" step="1" value="15" data-i="g1"></label>
        <label>Số năm tăng cao: <b data-o="n">3</b><input type="range" min="1" max="10" step="1" value="3" data-i="n"></label></div>
        <div class="w-row"><label>Tăng trưởng dài hạn gL: <b data-o="g2">5%</b><input type="range" min="0" max="8" step="0.5" value="5" data-i="g2"></label>
        <label>Lợi suất yêu cầu r: <b data-o="r">11%</b><input type="range" min="6" max="16" step="0.5" value="11" data-i="r"></label></div>
        <div class="w-out"><div class="w-price" data-o="p"></div><div class="w-bar"><span data-o="bar"></span><i></i></div><div class="w-note" data-o="note"></div></div>`;
      const q = s => el.querySelector(s);
      const f = (x, k = 2) => x.toFixed(k).replace('.', ',');
      const upd = () => {
        const d0 = +q('[data-i="d"]').value, g1 = +q('[data-i="g1"]').value / 100, n = +q('[data-i="n"]').value;
        const g2 = +q('[data-i="g2"]').value / 100, r = +q('[data-i="r"]').value / 100;
        q('[data-o="d"]').textContent = f(d0);
        q('[data-o="g1"]').textContent = `${f(g1 * 100, 0)}%`;
        q('[data-o="n"]').textContent = n;
        q('[data-o="g2"]').textContent = `${f(g2 * 100, 1)}%`;
        q('[data-o="r"]').textContent = `${f(r * 100, 1)}%`;
        if (r <= g2) {
          q('[data-o="p"]').textContent = 'r phải lớn hơn gL';
          q('[data-o="bar"]').style.width = '0%';
          q('[data-o="note"]').textContent = 'Khi r ≤ gL, công thức Gordon cho giá trị cuối kỳ không có nghĩa.';
          return;
        }
        let dv = d0, pvD = 0;
        for (let k = 1; k <= n; k++) { dv *= 1 + g1; pvD += dv / (1 + r) ** k; }
        const vn = (dv * (1 + g2)) / (r - g2), pvT = vn / (1 + r) ** n, v = pvD + pvT;
        q('[data-o="p"]').textContent = `V0 = ${f(v)}`;
        q('[data-o="bar"]').style.width = `${Math.min(100, (pvT / v) * 100)}%`;
        q('[data-o="note"]').textContent = `PV cổ tức giai đoạn đầu = ${f(pvD)}; PV giá trị cuối kỳ = ${f(pvT)} (chiếm ${f((pvT / v) * 100, 1)}% giá trị). Thử kéo gL gần r để thấy giá trị nhạy thế nào.`;
      };
      el.addEventListener('input', upd);
      upd();
    },
  };

  window.LESSONS['EQ-06'] = {
    moduleId: 'EQ-06',
    calculator: 'BA II Plus',
    warmup: [
      'Ôn QM-04: viết công thức Gordon và mô hình hai giai đoạn. Giá trị cuối kỳ đặt ở thời điểm nào?',
      'Ôn EQ-05: dòng tiền FCFE và FCFF khác nhau ở điểm nào? Mỗi loại chiết khấu ở lãi suất nào?',
      'Kiểm tra máy: bạn mở và xóa bảng CF bằng phím nào?',
    ],
    sections,
    glossary,
    practice,
    widgets,
    slides: [],
    wrapup: [
      'Viết công thức g = b x ROE và giải thích vì sao dùng tỷ lệ giữ lại, không dùng tỷ lệ chi trả.',
      'Tự làm lại ví dụ ba giai đoạn bằng hàm CF mà không nhìn lời giải.',
      'Liệt kê 4 điều khoản của cổ phiếu ưu đãi và chiều ảnh hưởng của từng điều khoản tới giá trị.',
    ],
  };
}());
