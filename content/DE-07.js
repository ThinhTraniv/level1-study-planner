// Bài giảng DE-07 - Pricing and Valuation of Interest Rate and Other Swaps (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t, frac, keys } = window.CFAH;

  const sections = [
    {
      title: '1. Bức tranh lớn',
      minutes: 4,
      html: `
<p>DE-02 đã giới thiệu ${t('irs', 'swap lãi suất (interest rate swap)')}: bên trả cố định trả lãi suất cố định, nhận MRR thả nổi, trên một notional không trao đổi. Module này trả lời hai câu hỏi định giá:</p>
<ol>
<li><b>Giá</b> của swap là gì? Đó là ${t('swaprate', 'lãi suất swap (swap rate)')}, mức lãi suất cố định làm cho giá trị swap lúc ký bằng 0.</li>
<li><b>Giá trị</b> của swap sau khi ký thay đổi thế nào khi lãi suất thị trường biến động?</li>
</ol>
<div class="key">Chìa khóa: swap là một <b>chuỗi FRA</b> (DE-05) nối tiếp nhau, nhưng tất cả dùng <b>chung một</b> lãi suất cố định. Mọi công cụ đã học (spot rate, hệ số chiết khấu, lãi suất kỳ hạn) đều dùng lại ở đây.</div>
<table class="plain"><thead><tr><th>LOS</th><th>Phần</th></tr></thead><tbody>
<tr><td>Mô tả swap giống và khác một chuỗi hợp đồng kỳ hạn như thế nào</td><td>2</td></tr>
<tr><td>Phân biệt giá trị và giá của swap</td><td>3, 4, 5, 6</td></tr>
</tbody></table>`,
    },
    {
      title: '2. Swap như một chuỗi forward',
      minutes: 10,
      html: `
<p>Xét swap 3 năm, thanh toán hằng năm, bên A trả cố định s và nhận MRR. Ở mỗi ngày thanh toán, A nhận (MRR - s) × notional. Đây chính là payoff của một <b>long FRA</b> với lãi suất chốt s. Vậy:</p>
<div class="formula">Swap trả cố định 3 kỳ = FRA kỳ 1 + FRA kỳ 2 + FRA kỳ 3, &nbsp; tất cả cùng lãi suất chốt s</div>
<h4>Giống nhau</h4>
<ul>
<li>Đều là forward commitment: cả hai bên có nghĩa vụ, payoff tuyến tính, thường không trả tiền lúc ký.</li>
<li>Đều định giá bằng không chênh lệch giá: giá được chọn để giá trị lúc ký bằng 0.</li>
<li>Đều là OTC (swap ngày nay thường được bù trừ qua CCP và ký quỹ, nhưng vẫn là thỏa thuận tùy chỉnh).</li>
</ul>
<h4>Khác nhau</h4>
<ul>
<li>Nếu ký riêng từng FRA ở đúng giá hợp lý, mỗi FRA có lãi suất chốt <b>khác nhau</b> (bằng lãi suất kỳ hạn của kỳ đó) và mỗi cái có giá trị 0. Swap dùng <b>một</b> lãi suất s cho mọi kỳ, nên từng "FRA thành phần" là ${t('offmkt', 'hợp đồng lệch thị trường (off-market)')}: có cái giá trị dương, có cái âm, chỉ <b>tổng</b> bằng 0.</li>
<li>Swap thanh toán <b>định kỳ nhiều lần</b>, nằm giữa forward (một lần tại T) và futures (hằng ngày). Mỗi lần thanh toán giống một lần "mark-to-market" một phần, làm giảm rủi ro tín dụng tích lũy.</li>
<li>Thanh toán ròng (netting) trên một notional chung, gộp trong một hợp đồng, nên chi phí giao dịch thấp hơn ký nhiều FRA.</li>
</ul>
<p class="warn"><b>Bẫy:</b> "swap tương đương một chuỗi forward, mỗi forward ký ở giá kỳ hạn riêng của nó" là <b>sai</b>. Đúng là: mỗi forward ký ở <b>cùng một giá</b> là swap rate.</p>`,
    },
    {
      title: '3. Giá của swap: swap rate',
      minutes: 12,
      html: `
<p>Lãi suất swap s được chọn để PV các khoản trả cố định bằng PV các khoản thả nổi kỳ vọng. Các khoản thả nổi được "khóa" bằng lãi suất kỳ hạn (DE-05) và chiết khấu bằng ${t('df', 'hệ số chiết khấu (discount factor)')} DF<sub>i</sub> = 1/(1 + z<sub>i</sub>)<sup>i</sup>:</p>
<div class="formula">Σ s × DF<sub>i</sub> = Σ F<sub>i-1,1</sub> × DF<sub>i</sub> &nbsp;&nbsp;⟹&nbsp;&nbsp; s = ${frac('Σ F<sub>i-1,1</sub> × DF<sub>i</sub>', 'Σ DF<sub>i</sub>')} = ${frac('1 - DF<sub>N</sub>', 'DF<sub>1</sub> + DF<sub>2</sub> + ... + DF<sub>N</sub>')}</div>
<p>Hai cách viết cho cùng kết quả. Cách thứ nhất cho thấy swap rate là <b>trung bình có trọng số</b> của các lãi suất kỳ hạn. Cách thứ hai nhanh hơn khi thi: nó đến từ góc nhìn trái phiếu, swap rate chính là coupon của một trái phiếu có giá bằng mệnh giá (par) theo đường spot hiện hành.</p>
<div class="example"><div class="ex-h">Ví dụ 3.1 - Tính swap rate 3 năm</div>
<p>Spot rate: z<sub>1</sub> = 2,0%, z<sub>2</sub> = 2,5%, z<sub>3</sub> = 3,0%. Tính swap rate của swap 3 năm thanh toán hằng năm.</p>
<details><summary>Xem lời giải</summary>
<p>DF<sub>1</sub> = 1/1,02 = 0,980392; DF<sub>2</sub> = 1/1,025<sup>2</sup> = 0,951814; DF<sub>3</sub> = 1/1,03<sup>3</sup> = 0,915142. Tổng = 2,847348.</p>
<p>s = (1 - 0,915142) / 2,847348 = 0,084858 / 2,847348 = <b>2,98%</b>.</p>
<p>Kiểm tra bằng lãi suất kỳ hạn: F<sub>0,1</sub> = 2,00%, F<sub>1,1</sub> = 3,00%, F<sub>2,1</sub> = 4,01%. Trung bình có trọng số DF cũng ra 2,98%.</p>
${keys([['DF3 (lưu vào bộ nhớ)', '1.03 [y^x] 3 [=] [1/x] [STO] 3', '0.9151'], ['DF2', '1.025 [x²] [1/x] [STO] 2', '0.9518'], ['DF1', '1.02 [1/x] [STO] 1', '0.9804'], ['Tổng DF', '[RCL] 1 [+] [RCL] 2 [+] [RCL] 3 [=]', '2.8473'], ['Lưu tổng DF', '[STO] 4', '2.8473'], ['Swap rate', '1 [-] [RCL] 3 [=] [÷] [RCL] 4 [=]', '0.0298']])}</details></div>
<div class="example"><div class="ex-h">Ví dụ 3.2 - Từng "FRA thành phần" lệch thị trường</div>
<p>Vẫn swap trên, notional 10 triệu USD. Giá trị từng kỳ với bên trả cố định?</p>
<details><summary>Xem lời giải</summary>
<table class="plain"><thead><tr><th>Kỳ</th><th>F (kỳ vọng MRR)</th><th>Ròng (F - s) × 10 triệu</th><th>PV</th></tr></thead><tbody>
<tr><td>1</td><td>2,00%</td><td>-98.026</td><td>-96.104</td></tr>
<tr><td>2</td><td>3,00%</td><td>+2.219</td><td>+2.112</td></tr>
<tr><td>3</td><td>4,01%</td><td>+102.707</td><td>+93.991</td></tr>
<tr><td><b>Tổng</b></td><td></td><td></td><td><b>0</b></td></tr>
</tbody></table>
<p>Đường lãi suất dốc lên: bên trả cố định "trả nhiều hơn" ở kỳ đầu (giá trị âm) và "nhận lại" ở kỳ sau (giá trị dương). Tổng PV bằng 0: đó là ý nghĩa của swap rate. Lưu ý: hướng giá trị từng kỳ cũng có nghĩa bên trả cố định chịu rủi ro tín dụng của đối tác ở các kỳ cuối.</p></details></div>
<p class="tip">Góc nhìn trái phiếu: swap trả cố định = <b>long trái phiếu lãi suất thả nổi (FRN) + short trái phiếu lãi suất cố định</b> cùng notional (gốc ở hai bên triệt tiêu). Tại ngày điều chỉnh lãi suất, FRN có giá bằng mệnh giá, nên swap rate phải là coupon làm trái phiếu cố định cũng bằng mệnh giá: Σ s × DF<sub>i</sub> + DF<sub>N</sub> = 1.</p>`,
    },
    {
      title: '4. Giá trị swap lúc ký và trong thời hạn',
      minutes: 14,
      html: `
<p>Giống forward: <b>giá</b> (swap rate s<sub>0</sub>) chốt một lần; <b>giá trị</b> bắt đầu từ 0 rồi thay đổi. Sau khi ký, swap rate của swap <b>mới</b> cùng ngày đáo hạn (s<sub>t</sub>) thay đổi theo thị trường. Bên trả cố định đang trả s<sub>0</sub> trong khi thị trường đòi s<sub>t</sub>; chênh lệch trên các kỳ còn lại chính là giá trị:</p>
<div class="formula">V<sub>trả cố định</sub> = (s<sub>t</sub> - s<sub>0</sub>) × Σ DF<sub>i</sub> (các kỳ còn lại) × Notional &nbsp;&nbsp;&nbsp;&nbsp; V<sub>nhận cố định</sub> = -V<sub>trả cố định</sub></div>
<p>Logic giống "hợp đồng bù trừ" của forward ở DE-05: bên trả cố định có thể ký một swap mới <b>nhận</b> cố định ở s<sub>t</sub>. Phần thả nổi triệt tiêu, còn lại một chuỗi chắc chắn (s<sub>t</sub> - s<sub>0</sub>) × notional mỗi kỳ, đem chiết khấu.</p>
<div class="example"><div class="ex-h">Ví dụ 4.1 - Một năm sau, lãi suất tăng</div>
<p>Swap ở Ví dụ 3.1 (s<sub>0</sub> = 2,9803%, notional 10 triệu USD). Một năm sau, ngay sau kỳ thanh toán đầu tiên, spot rate mới là z<sub>1</sub> = 3,0% và z<sub>2</sub> = 3,4%. Tính giá trị swap với bên trả cố định.</p>
<details><summary>Xem lời giải</summary>
<p>DF mới: 1/1,03 = 0,970874; 1/1,034<sup>2</sup> = 0,935317; tổng 1,906191.</p>
<p>Swap rate 2 năm mới: s<sub>t</sub> = (1 - 0,935317) / 1,906191 = <b>3,3933%</b>.</p>
<p>V = (3,3933% - 2,9803%) × 1,906191 × 10.000.000 = <b>78.734 USD</b> với bên trả cố định; bên nhận cố định là <b>-78.734</b>.</p>
<p><b>Cách 2 (trái phiếu):</b> PV của "trái phiếu cố định" coupon 2,9803% còn 2 năm = (0,029803 × 1,906191 + 0,935317) × 10 triệu = 9.921.266. FRN ở ngày điều chỉnh = 10.000.000. V = 10.000.000 - 9.921.266 = <b>78.734</b>. Hai cách khớp nhau.</p></details></div>
<table class="plain"><thead><tr><th>Thời điểm</th><th>Giá (swap rate trong hợp đồng)</th><th>Giá trị</th></tr></thead><tbody>
<tr><td>Lúc ký</td><td>s<sub>0</sub>, tính từ đường spot</td><td>0</td></tr>
<tr><td>Trong thời hạn</td><td>Không đổi s<sub>0</sub></td><td>(s<sub>t</sub> - s<sub>0</sub>) × Σ DF × notional, đổi theo lãi suất</td></tr>
<tr><td>Đáo hạn</td><td>Không đổi</td><td>Không còn kỳ nào: 0 sau kỳ thanh toán cuối</td></tr>
</tbody></table>
<p class="warn"><b>Bẫy:</b> (1) quên chiết khấu, lấy (s<sub>t</sub> - s<sub>0</sub>) × số kỳ × notional; (2) dùng DF của đường cũ thay vì đường <b>hiện hành</b>; (3) nhầm dấu: lãi suất tăng có lợi cho bên <b>trả</b> cố định.</p>`,
    },
    {
      title: '5. Điều gì làm giá trị swap thay đổi',
      minutes: 6,
      html: `
<ul>
<li><b>Lãi suất thay đổi</b>: lãi suất tăng làm giá trị bên trả cố định tăng (giống short trái phiếu cố định), bên nhận cố định giảm (giống long trái phiếu cố định).</li>
<li><b>Thời gian trôi qua</b>: ngay cả khi đường lãi suất không đổi, mỗi kỳ thanh toán đi qua làm thay đổi tổ hợp "FRA thành phần" còn lại. Với đường dốc lên, sau các kỳ đầu (giá trị âm với bên trả cố định), phần còn lại nghiêng về giá trị dương cho bên trả cố định.</li>
<li><b>Thanh toán định kỳ</b>: mỗi kỳ trao đổi tiền ròng giống một lần "trả bớt" giá trị đã tích lũy.</li>
</ul>
<p>Swap có giá trị dương với một bên là <b>tài sản</b> của bên đó và là <b>khoản nợ</b> của bên kia. Bên có giá trị dương chịu ${t('cpr', 'rủi ro tín dụng đối tác (counterparty credit risk)')}: nếu đối tác vỡ nợ, mất phần giá trị đó. Vì vậy swap ngày nay thường được bù trừ qua CCP hoặc trao đổi tài sản đảm bảo (collateral) theo giá trị mark-to-market.</p>
<div class="example"><div class="ex-h">Ví dụ 5.1 - Ai lo về đối tác?</div>
<p>Ở Ví dụ 4.1, sau 1 năm swap có giá trị 78.734 với bên trả cố định. Bên nào chịu rủi ro tín dụng lớn hơn?</p>
<details><summary>Xem lời giải</summary><p>Bên <b>trả cố định</b>: đối tác đang "nợ" họ 78.734 (theo giá trị hiện tại). Nếu đối tác vỡ nợ, họ mất khoản này. Bên nhận cố định đang có giá trị âm nên rủi ro tín dụng hiện tại thấp.</p></details></div>`,
    },
    {
      title: '6. Các loại swap khác',
      minutes: 5,
      html: `
<p>Cùng nguyên tắc (giá làm giá trị lúc ký bằng 0; giá trị = PV các dòng tiền ròng còn lại), áp dụng cho các loại swap khác:</p>
<table class="plain"><thead><tr><th>Loại</th><th>Hai chân thanh toán</th><th>Điểm cần nhớ</th></tr></thead><tbody>
<tr><td>${t('ccs', 'Swap tiền tệ (currency swap)')}</td><td>Lãi suất ở đồng tiền A đổi lấy lãi suất ở đồng tiền B</td><td>Thường <b>trao đổi gốc</b> lúc đầu và lúc cuối; giá trị phụ thuộc cả lãi suất hai đồng tiền và tỷ giá</td></tr>
<tr><td>${t('eqs', 'Swap cổ phiếu (equity swap)')}</td><td>Lợi suất cổ phiếu/chỉ số đổi lấy lãi suất cố định, thả nổi hoặc lợi suất cổ phiếu khác</td><td>Chân cổ phiếu có thể âm (bên nhận lợi suất cổ phiếu phải trả khi giá giảm)</td></tr>
<tr><td>Swap hàng hóa</td><td>Giá hàng hóa thả nổi đổi lấy giá cố định</td><td>Giá cố định là trung bình có trọng số của các giá kỳ hạn hàng hóa</td></tr>
</tbody></table>
<p class="tip">Ở Level I, câu hỏi về các swap khác chủ yếu là khái niệm. Tính toán định giá chi tiết của swap tiền tệ và swap cổ phiếu thuộc Level II.</p>`,
    },
    {
      title: '7. Tóm tắt và bẫy thường gặp',
      minutes: 4,
      html: `
<table class="plain"><thead><tr><th>Chủ đề</th><th>Nhớ</th></tr></thead><tbody>
<tr><td>Swap và chuỗi forward</td><td>Chuỗi FRA dùng <b>chung</b> một lãi suất s; từng FRA lệch thị trường, tổng giá trị lúc ký = 0</td></tr>
<tr><td>Khác forward</td><td>Nhiều kỳ thanh toán, netting, rủi ro tín dụng giảm dần sau mỗi kỳ</td></tr>
<tr><td>Giá swap</td><td>s = (1 - DF<sub>N</sub>) / Σ DF<sub>i</sub> = trung bình có trọng số các lãi suất kỳ hạn</td></tr>
<tr><td>Trả cố định</td><td>= long FRN + short trái phiếu cố định; lời khi lãi suất tăng</td></tr>
<tr><td>Giá trị lúc ký</td><td>0</td></tr>
<tr><td>Giá trị trong kỳ</td><td>(s<sub>t</sub> - s<sub>0</sub>) × Σ DF (đường hiện hành, các kỳ còn lại) × notional</td></tr>
<tr><td>Giá và giá trị</td><td>Swap rate trong hợp đồng cố định; giá trị thay đổi theo lãi suất và thời gian</td></tr>
<tr><td>Rủi ro tín dụng</td><td>Bên có giá trị dương chịu rủi ro đối tác</td></tr>
</tbody></table>
<p>Tiếp theo: tab <b>Luyện tập</b> - 10 câu. DE-08 chuyển sang định giá quyền chọn.</p>`,
    },
  ];

  const glossary = {
    irs: ['Interest rate swap', 'Swap lãi suất', 'Thỏa thuận trao đổi lãi suất cố định lấy lãi suất thả nổi trên một notional, không trao đổi gốc.'],
    swaprate: ['Swap rate', 'Lãi suất swap', 'Lãi suất cố định làm cho giá trị swap lúc ký bằng 0; là "giá" của swap.'],
    offmkt: ['Off-market forward', 'Hợp đồng kỳ hạn lệch thị trường', 'Forward có giá chốt khác giá hợp lý nên giá trị lúc ký khác 0.'],
    df: ['Discount factor', 'Hệ số chiết khấu', 'Giá trị hiện tại của 1 đồng nhận tại thời điểm i: 1/(1 + z_i)^i.'],
    cpr: ['Counterparty credit risk', 'Rủi ro tín dụng đối tác', 'Rủi ro đối tác không thực hiện nghĩa vụ khi hợp đồng đang có giá trị dương với mình.'],
    ccs: ['Currency swap', 'Swap tiền tệ', 'Trao đổi dòng lãi (và thường cả gốc) ở hai đồng tiền khác nhau.'],
    eqs: ['Equity swap', 'Swap cổ phiếu', 'Trao đổi lợi suất của cổ phiếu hoặc chỉ số lấy lãi suất hoặc lợi suất tài sản khác.'],
  };

  const practice = [
    { q: 'Một swap lãi suất trả cố định tương đương với một chuỗi:', choices: ['FRA, mỗi FRA có giá trị bằng 0 lúc ký', 'Futures lãi suất thanh toán hằng ngày', 'Forward cùng một mức giá cố định (swap rate), từng forward có thể có giá trị khác 0'], answer: 2, explain: 'Mọi kỳ dùng chung swap rate nên từng forward thành phần là lệch thị trường; chỉ tổng giá trị lúc ký bằng 0. A chỉ đúng nếu mỗi forward ký ở giá kỳ hạn riêng của nó; B sai vì swap thanh toán định kỳ, không phải hằng ngày.' },
    { q: 'Tại thời điểm ký, giá trị của một swap lãi suất được định giá hợp lý là:', choices: ['Bằng 0', 'Bằng notional', 'Bằng PV các khoản trả cố định'], answer: 0, explain: 'Swap rate được chọn để PV chân cố định bằng PV chân thả nổi, nên giá trị ròng bằng 0. C chỉ là một chân, chưa trừ chân thả nổi.' },
    { q: 'Hệ số chiết khấu 1, 2, 3 năm lần lượt là 0,97; 0,93; 0,89. Swap rate của swap 3 năm thanh toán hằng năm gần nhất với:', choices: ['3,67%', '3,94%', '3,96%'], answer: 1, explain: 's = (1 - 0,89)/(0,97 + 0,93 + 0,89) = 0,11/2,79 = 3,94%. A chia cho số kỳ (3) thay vì tổng DF; C là spot rate 3 năm (0,89^(-1/3) - 1), không phải swap rate.' },
    { q: 'Sau khi ký một swap, lãi suất swap trên thị trường tăng lên. Giá trị swap với bên trả cố định:', choices: ['Trở nên dương', 'Trở nên âm', 'Không đổi vì swap rate đã chốt'], answer: 0, explain: 'Bên trả cố định đang trả mức cũ thấp hơn mức thị trường mới, nên có lợi (giống short trái phiếu cố định khi lãi suất tăng). C nhầm giá (cố định) với giá trị (thay đổi).' },
    { q: 'Một swap trả cố định 2,5%, notional 50 triệu USD, còn 2 kỳ thanh toán hằng năm. Swap rate 2 năm hiện hành là 3,0%, hệ số chiết khấu hiện hành là 0,971 và 0,942. Giá trị với bên trả cố định gần nhất với:', choices: ['500.000 USD', '-478.250 USD', '478.250 USD'], answer: 2, explain: 'V = (3,0% - 2,5%) × (0,971 + 0,942) × 50.000.000 = 478.250, dương vì lãi suất tăng có lợi cho bên trả cố định. A quên chiết khấu; B nhầm dấu (đó là giá trị của bên nhận cố định).' },
    { q: 'Với một swap đang tồn tại, phát biểu nào đúng về giá và giá trị?', choices: ['Swap rate trong hợp đồng thay đổi mỗi ngày theo thị trường', 'Swap rate trong hợp đồng cố định; chỉ giá trị thay đổi', 'Giá trị luôn bằng 0 vì swap được định giá hợp lý'], answer: 1, explain: 'Giá (swap rate) chốt một lần lúc ký; giá trị bắt đầu từ 0 rồi thay đổi theo lãi suất và thời gian. C chỉ đúng tại lúc ký.' },
    { q: 'Điểm nào là KHÁC BIỆT giữa một swap và một chuỗi hợp đồng kỳ hạn được ký riêng lẻ ở giá hợp lý?', choices: ['Swap dùng một lãi suất cố định cho mọi kỳ, còn các forward riêng lẻ có giá chốt khác nhau', 'Swap không có rủi ro đối tác', 'Swap luôn được niêm yết trên sàn'], answer: 0, explain: 'Forward riêng lẻ ở giá hợp lý có giá chốt bằng lãi suất kỳ hạn của từng kỳ; swap dùng chung swap rate. B sai: swap có rủi ro đối tác (giảm nhờ CCP, ký quỹ). C sai: swap là OTC.' },
    { q: 'Đường lãi suất kỳ hạn dốc lên. Trong một swap trả cố định mới ký, kỳ thanh toán ĐẦU TIÊN, xét riêng, có giá trị với bên trả cố định là:', choices: ['Dương', 'Bằng 0', 'Âm'], answer: 2, explain: 'Swap rate là trung bình các lãi suất kỳ hạn; với đường dốc lên, lãi suất kỳ hạn kỳ đầu thấp hơn swap rate, nên bên trả cố định trả nhiều hơn nhận ở kỳ đầu (giá trị âm), bù lại các kỳ cuối có giá trị dương.' },
    { q: 'Vị thế trả cố định, nhận thả nổi trong swap lãi suất tương đương với:', choices: ['Long trái phiếu cố định và short trái phiếu thả nổi (FRN)', 'Long FRN và short trái phiếu lãi suất cố định', 'Long trái phiếu cố định và long FRN'], answer: 1, explain: 'Nhận thả nổi = nắm FRN; trả cố định = đã phát hành (short) trái phiếu cố định. Gốc hai bên triệt tiêu. A là vị thế nhận cố định.' },
    { q: 'Giá trị của một swap tại một thời điểm trong thời hạn bằng giá trị hiện tại của:', choices: ['Các khoản trả cố định còn lại', 'Tài sản cơ sở tại ngày đáo hạn', 'Các dòng tiền ròng còn lại, tính theo đường lãi suất hiện hành'], answer: 2, explain: 'Giá trị swap = PV(nhận) - PV(trả), tức PV các dòng tiền ròng còn lại. A chỉ là một chân; B không áp dụng cho swap lãi suất.' },
  ];

  window.LESSONS['DE-07'] = {
    moduleId: 'DE-07',
    calculator: 'BA II Plus',
    warmup: [
      'Ôn DE-02: trong swap lãi suất, bên trả cố định nhận gì và lời khi lãi suất đi theo hướng nào?',
      'Ôn DE-05: z1 = 2%, z2 = 2,5%. Lãi suất kỳ hạn F1,1 là bao nhiêu?',
      'Đoán trước: nếu ghép 3 FRA thành một swap, vì sao không thể giữ 3 lãi suất chốt khác nhau mà phải dùng một?',
    ],
    sections,
    glossary,
    practice,
    widgets: {},
    slides: [],
    wrapup: [
      'Nêu hai điểm giống và hai điểm khác giữa swap và một chuỗi forward.',
      'Viết công thức swap rate theo hệ số chiết khấu và giải thích vì sao nó là "giá" của swap.',
      'Lãi suất tăng sau khi ký: giá trị swap của bên trả cố định thay đổi thế nào, và tính bằng công thức nào?',
    ],
  };
}());
