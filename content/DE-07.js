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
<p>Tiếp theo: tab <b>Luyện tập</b> - 10 câu (rút ngẫu nhiên từ ngân hàng 30 câu, mỗi lần làm một bộ khác). DE-08 chuyển sang định giá quyền chọn.</p>`,
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
    { q: 'Một swap lãi suất trả cố định tương đương với một chuỗi:', choices: ['FRA, mỗi FRA có giá trị bằng 0 lúc ký', 'Futures lãi suất thanh toán hằng ngày', 'Forward cùng một mức giá cố định (swap rate), từng forward có thể có giá trị khác 0'], answer: 2, explain: 'Mọi kỳ dùng chung swap rate nên từng forward thành phần là lệch thị trường; chỉ tổng giá trị lúc ký bằng 0. Phương án "mỗi FRA có giá trị bằng 0" chỉ đúng nếu mỗi forward ký ở giá kỳ hạn riêng của nó; phương án futures thanh toán hằng ngày sai vì swap thanh toán định kỳ, không phải hằng ngày.' },
    { q: 'Tại thời điểm ký, giá trị của một swap lãi suất được định giá hợp lý là:', choices: ['Bằng 0', 'Bằng notional', 'Bằng PV các khoản trả cố định'], answer: 0, explain: 'Swap rate được chọn để PV chân cố định bằng PV chân thả nổi, nên giá trị ròng bằng 0. PV các khoản trả cố định chỉ là một chân, chưa trừ chân thả nổi.' },
    { q: 'Hệ số chiết khấu 1, 2, 3 năm lần lượt là 0,97; 0,93; 0,89. Swap rate của swap 3 năm thanh toán hằng năm gần nhất với:', choices: ['3,67%', '3,94%', '3,96%'], answer: 1, explain: 's = (1 - 0,89)/(0,97 + 0,93 + 0,89) = 0,11/2,79 = 3,94%. Lựa chọn 3,67% chia cho số kỳ (3) thay vì tổng DF; lựa chọn 3,96% là spot rate 3 năm (0,89^(-1/3) - 1), không phải swap rate.' },
    { q: 'Sau khi ký một swap, lãi suất swap trên thị trường tăng lên. Giá trị swap với bên trả cố định:', choices: ['Trở nên dương', 'Trở nên âm', 'Không đổi vì swap rate đã chốt'], answer: 0, explain: 'Bên trả cố định đang trả mức cũ thấp hơn mức thị trường mới, nên có lợi (giống short trái phiếu cố định khi lãi suất tăng). Phương án "không đổi vì swap rate đã chốt" nhầm giá (cố định) với giá trị (thay đổi).' },
    { q: 'Một swap trả cố định 2,5%, notional 50 triệu USD, còn 2 kỳ thanh toán hằng năm. Swap rate 2 năm hiện hành là 3,0%, hệ số chiết khấu hiện hành là 0,971 và 0,942. Giá trị với bên trả cố định gần nhất với:', choices: ['500.000 USD', '-478.250 USD', '478.250 USD'], answer: 2, explain: 'V = (3,0% - 2,5%) × (0,971 + 0,942) × 50.000.000 = 478.250, dương vì lãi suất tăng có lợi cho bên trả cố định. Lựa chọn 500.000 USD quên chiết khấu; lựa chọn -478.250 USD nhầm dấu (đó là giá trị của bên nhận cố định).' },
    { q: 'Với một swap đang tồn tại, phát biểu nào đúng về giá và giá trị?', choices: ['Swap rate trong hợp đồng thay đổi mỗi ngày theo thị trường', 'Swap rate trong hợp đồng cố định; chỉ giá trị thay đổi', 'Giá trị luôn bằng 0 vì swap được định giá hợp lý'], answer: 1, explain: 'Giá (swap rate) chốt một lần lúc ký; giá trị bắt đầu từ 0 rồi thay đổi theo lãi suất và thời gian. Phương án "giá trị luôn bằng 0" chỉ đúng tại lúc ký.' },
    { q: 'Điểm nào là KHÁC BIỆT giữa một swap và một chuỗi hợp đồng kỳ hạn được ký riêng lẻ ở giá hợp lý?', choices: ['Swap dùng một lãi suất cố định cho mọi kỳ, còn các forward riêng lẻ có giá chốt khác nhau', 'Swap không có rủi ro đối tác', 'Swap luôn được niêm yết trên sàn'], answer: 0, explain: 'Forward riêng lẻ ở giá hợp lý có giá chốt bằng lãi suất kỳ hạn của từng kỳ; swap dùng chung swap rate. Phương án "không có rủi ro đối tác" sai: swap có rủi ro đối tác (giảm nhờ CCP, ký quỹ). Phương án "niêm yết trên sàn" sai: swap là OTC.' },
    { q: 'Đường lãi suất kỳ hạn dốc lên. Trong một swap trả cố định mới ký, kỳ thanh toán ĐẦU TIÊN, xét riêng, có giá trị với bên trả cố định là:', choices: ['Dương', 'Bằng 0', 'Âm'], answer: 2, explain: 'Swap rate là trung bình các lãi suất kỳ hạn; với đường dốc lên, lãi suất kỳ hạn kỳ đầu thấp hơn swap rate, nên bên trả cố định trả nhiều hơn nhận ở kỳ đầu (giá trị âm), bù lại các kỳ cuối có giá trị dương.' },
    { q: 'Vị thế trả cố định, nhận thả nổi trong swap lãi suất tương đương với:', choices: ['Long trái phiếu cố định và short trái phiếu thả nổi (FRN)', 'Long FRN và short trái phiếu lãi suất cố định', 'Long trái phiếu cố định và long FRN'], answer: 1, explain: 'Nhận thả nổi = nắm FRN; trả cố định = đã phát hành (short) trái phiếu cố định. Gốc hai bên triệt tiêu. Long trái phiếu cố định và short FRN là vị thế nhận cố định.' },
    { q: 'Giá trị của một swap tại một thời điểm trong thời hạn bằng giá trị hiện tại của:', choices: ['Các khoản trả cố định còn lại', 'Tài sản cơ sở tại ngày đáo hạn', 'Các dòng tiền ròng còn lại, tính theo đường lãi suất hiện hành'], answer: 2, explain: 'Giá trị swap = PV(nhận) - PV(trả), tức PV các dòng tiền ròng còn lại. Các khoản trả cố định chỉ là một chân; tài sản cơ sở tại ngày đáo hạn không áp dụng cho swap lãi suất.' },
    { q: "Lãi suất giao ngay: z1 = 1,5%, z2 = 2,0%, z3 = 2,5% (ghép lãi năm). Lãi suất swap của swap lãi suất 3 năm thanh toán hằng năm gần nhất với:", choices: ["2,48%", "2,00%", "7,14%"], answer: 0, explain: "DF1 = 1/1,015 = 0,9852; DF2 = 1/1,02^2 = 0,9612; DF3 = 1/1,025^3 = 0,9286. s = (1 - DF3)/(DF1 + DF2 + DF3) = 2,48%. Lựa chọn 2,00% là trung bình cộng các lãi suất giao ngay. Lựa chọn 7,14% là 1 - DF3 mà quên chia cho tổng hệ số chiết khấu." },
    { q: "Hệ số chiết khấu 1 năm và 2 năm lần lượt là 0,980 và 0,955. Lãi suất swap của swap 2 năm thanh toán hằng năm gần nhất với:", choices: ["4,50%", "2,62%", "2,33%"], answer: 2, explain: "s = (1 - 0,955)/(0,980 + 0,955) = 2,33%. Lựa chọn 4,50% là 1 - DF2, quên chia cho tổng DF. Lựa chọn 2,62% chỉ là lãi suất kỳ hạn của năm thứ hai, không phải trung bình có trọng số của cả hai kỳ." },
    { q: "Một swap trả cố định 2,0%, notional 25 triệu USD, còn 3 kỳ thanh toán hằng năm. Lãi suất swap hiện hành cho 3 năm là 2,6%; hệ số chiết khấu hiện hành là 0,975; 0,948 và 0,920. Giá trị swap với bên trả cố định gần nhất với:", choices: ["450.000 USD", "426.450 USD", "-426.450 USD"], answer: 1, explain: "V = (st - s0) x tổng DF x notional = (2,6% - 2,0%) x (0,975 + 0,948 + 0,920) x 25.000.000 = 426.450 USD, dương vì lãi suất tăng có lợi cho bên trả cố định. Lựa chọn 450.000 USD quên chiết khấu (0,6% x 3 x 25 triệu). Lựa chọn âm là giá trị của bên nhận cố định." },
    { q: "Một swap nhận cố định 3,5%, notional 40 triệu USD, còn 2 kỳ thanh toán hằng năm. Lãi suất swap hiện hành cho 2 năm là 3,0%; hệ số chiết khấu hiện hành là 0,971 và 0,943. Giá trị swap với bên nhận cố định gần nhất với:", choices: ["-382.800 USD", "+382.800 USD", "+400.000 USD"], answer: 1, explain: "Bên nhận cố định đang nhận 3,5% trong khi thị trường chỉ trả 3,0%: V = (3,5% - 3,0%) x (0,971 + 0,943) x 40.000.000 = +382.800 USD. Lựa chọn âm là giá trị bên trả cố định. Lựa chọn 400.000 USD quên chiết khấu." },
    { q: "Lãi suất swap (swap rate) được mô tả đúng nhất là:", choices: ["Trung bình có trọng số của các lãi suất kỳ hạn, với trọng số là các hệ số chiết khấu", "Trung bình cộng giản đơn của các lãi suất giao ngay", "Lãi suất giao ngay của kỳ hạn dài nhất"], answer: 0, explain: "Từ điều kiện PV chân cố định bằng PV chân thả nổi: s = tổng(F x DF)/tổng DF, tức trung bình có trọng số DF của các lãi suất kỳ hạn. Trung bình cộng lãi suất giao ngay và lãi suất giao ngay dài nhất đều không làm giá trị swap lúc ký bằng 0, trừ trường hợp đường lãi suất phẳng." },
    { q: "Các lãi suất kỳ hạn 1 năm cho năm 1, 2, 3 lần lượt là 2%, 3% và 4% (F0,1, F1,1, F2,1; ghép lãi năm). Lãi suất swap của swap 3 năm thanh toán hằng năm gần nhất với:", choices: ["4,00%", "2,00%", "2,98%"], answer: 2, explain: "DF1 = 1/1,02 = 0,9804; DF2 = DF1/1,03 = 0,9518; DF3 = DF2/1,04 = 0,9152. s = (1 - DF3)/tổng DF = 2,98%, là trung bình có trọng số của 2%, 3%, 4%. Lựa chọn 4,00% là lãi suất kỳ hạn của kỳ cuối. Lựa chọn 2,00% là lãi suất kỳ đầu." },
    { q: "Swap trả cố định 4%, notional 10 triệu USD, còn 2 kỳ thanh toán hằng năm; hôm nay là ngày điều chỉnh lãi suất. Hệ số chiết khấu hiện hành là 0,96 và 0,92. Dùng cách nhìn trái phiếu, giá trị swap với bên trả cố định là:", choices: ["-48.000 USD", "+80.000 USD", "+48.000 USD"], answer: 2, explain: "Chân thả nổi (FRN) tại ngày điều chỉnh có giá bằng mệnh giá: 10.000.000. Chân cố định = (0,04 x (0,96 + 0,92) + 0,92) x 10.000.000 = 9.952.000. Bên trả cố định = long FRN - short trái phiếu cố định = +48.000 USD. Lựa chọn âm là giá trị bên nhận cố định. Lựa chọn 80.000 USD lấy (1 - 0,92) x 10 triệu, quên giá trị các coupon cố định." },
    { q: "Sau khi ký swap lãi suất, lãi suất thị trường tăng mạnh. Bên nào chịu rủi ro tín dụng đối tác lớn hơn?", choices: ["Bên nhận cố định, vì swap có giá trị âm với họ", "Bên trả cố định, vì swap có giá trị dương với họ", "Hai bên chịu như nhau vì swap lúc ký có giá trị 0"], answer: 1, explain: "Lãi suất tăng làm swap có giá trị dương với bên trả cố định: đối tác đang \"nợ\" họ giá trị đó, nên nếu đối tác vỡ nợ họ mất khoản này. Bên có giá trị âm có rủi ro tín dụng hiện tại thấp. Giá trị lúc ký bằng 0 không quyết định rủi ro hiện tại, vì giá trị đã thay đổi." },
    { q: "Ngay sau kỳ thanh toán cuối cùng của một swap lãi suất, giá trị của swap là:", choices: ["0, vì không còn dòng tiền nào", "Bằng tổng các khoản thanh toán ròng đã nhận trong suốt thời hạn", "Bằng notional nhân lãi suất swap"], answer: 0, explain: "Giá trị swap là PV các dòng tiền ròng còn lại; sau kỳ cuối không còn dòng tiền nên giá trị bằng 0. Các khoản đã nhận là lời/lỗ đã thực hiện, không phải giá trị hiện tại của hợp đồng. Notional nhân lãi suất swap chỉ là khoản lãi cố định một kỳ." },
    { q: "So với một hợp đồng kỳ hạn chỉ thanh toán một lần khi đáo hạn, việc swap thanh toán định kỳ nhiều lần NHIỀU KHẢ NĂNG:", choices: ["Làm giảm rủi ro tín dụng tích lũy, vì giá trị được \"trả bớt\" sau mỗi kỳ", "Làm tăng rủi ro tín dụng, vì có nhiều ngày thanh toán", "Loại bỏ hoàn toàn rủi ro tín dụng như futures"], answer: 0, explain: "Swap nằm giữa forward (thanh toán một lần) và futures (hằng ngày): mỗi kỳ thanh toán giống một lần mark-to-market một phần, nên giá trị chưa thanh toán không tích lũy lớn. Nhiều ngày thanh toán không làm tăng rủi ro. Swap vẫn còn rủi ro tín dụng giữa các kỳ, không bị loại bỏ hoàn toàn." },
    { q: "Ưu điểm của một swap so với việc ký riêng nhiều FRA cho từng kỳ là:", choices: ["Swap không có rủi ro đối tác", "Mỗi kỳ của swap có giá trị bằng 0 lúc ký", "Gộp trong một hợp đồng với một notional chung và thanh toán ròng, nên chi phí giao dịch thấp hơn"], answer: 2, explain: "Một hợp đồng duy nhất, một notional, bù trừ ròng mỗi kỳ giúp giảm chi phí giao dịch và thủ tục. Swap vẫn có rủi ro đối tác. Mỗi \"FRA thành phần\" của swap thường có giá trị khác 0 lúc ký vì dùng chung một lãi suất; chỉ tổng giá trị bằng 0." },
    { q: "Loại swap nào thường có trao đổi gốc vào lúc bắt đầu và lúc kết thúc hợp đồng?", choices: ["Swap lãi suất cố định - thả nổi cùng một đồng tiền", "Swap tiền tệ (currency swap)", "Swap cổ phiếu (equity swap)"], answer: 1, explain: "Swap tiền tệ trao đổi lãi suất ở hai đồng tiền khác nhau và thường trao đổi gốc lúc đầu và lúc cuối, nên giá trị phụ thuộc cả tỷ giá. Swap lãi suất cùng một đồng tiền không trao đổi gốc vì gốc hai bên triệt tiêu. Swap cổ phiếu trao đổi lợi suất trên notional, thường không trao đổi gốc." },
    { q: "Trong một swap cổ phiếu, quỹ nhận lợi suất chỉ số cổ phiếu và trả lãi suất cố định 2%/năm trên notional 5 triệu USD, thanh toán hằng năm. Năm nay chỉ số giảm 4%. Khoản thanh toán ròng của quỹ là:", choices: ["Trả 100.000 USD", "Trả 300.000 USD", "Trả 200.000 USD"], answer: 1, explain: "Chân cổ phiếu âm: bên nhận lợi suất cổ phiếu phải trả phần giảm 4% x 5.000.000 = 200.000 USD, cộng thêm lãi cố định 2% x 5.000.000 = 100.000 USD, tổng trả 300.000 USD. Lựa chọn 100.000 USD chỉ tính lãi cố định, coi lợi suất âm như bằng 0. Lựa chọn 200.000 USD quên lãi cố định." },
    { q: "Swap hàng hóa 2 năm, thanh toán hằng năm. Giá kỳ hạn của hàng hóa cho năm 1 và năm 2 lần lượt là 80 và 84; hệ số chiết khấu là 0,97 và 0,94. Giá cố định của swap gần nhất với:", choices: ["81,97", "80,00", "84,00"], answer: 0, explain: "Giá cố định làm giá trị swap lúc ký bằng 0, tức trung bình có trọng số DF của các giá kỳ hạn: (80 x 0,97 + 84 x 0,94)/(0,97 + 0,94) = 81,97. Lựa chọn 80,00 chỉ dùng giá kỳ hạn năm 1. Lựa chọn 84,00 chỉ dùng giá kỳ hạn năm 2." },
    { q: "Đường lãi suất dốc lên và giữ nguyên sau khi ký swap. Sau vài kỳ thanh toán đầu, giá trị của swap với bên trả cố định NHIỀU KHẢ NĂNG:", choices: ["Trở thành âm", "Vẫn bằng 0 vì lãi suất không đổi", "Trở thành dương"], answer: 2, explain: "Với đường dốc lên, các kỳ đầu có lãi suất kỳ hạn thấp hơn swap rate (giá trị âm với bên trả cố định), các kỳ sau cao hơn (giá trị dương). Khi các kỳ đầu đã qua, phần còn lại nghiêng về giá trị dương. Giá trị swap thay đổi theo thời gian ngay cả khi đường lãi suất không đổi." },
    { q: "Để định giá một swap đang tồn tại tại thời điểm t, các hệ số chiết khấu cần dùng là:", choices: ["Hệ số chiết khấu từ đường lãi suất lúc ký hợp đồng", "Hệ số chiết khấu hiện hành cho tất cả các kỳ, kể cả các kỳ đã thanh toán", "Hệ số chiết khấu từ đường lãi suất hiện hành, chỉ cho các kỳ thanh toán còn lại"], answer: 2, explain: "Giá trị swap là PV các dòng tiền ròng còn lại theo điều kiện thị trường hiện tại, nên dùng DF hiện hành cho các kỳ còn lại. Dùng DF của đường cũ là lỗi thường gặp. Các kỳ đã thanh toán không còn dòng tiền nên không đưa vào." },
    { q: "Lãi suất swap bằng với lãi suất coupon của:", choices: ["Trái phiếu zero-coupon cùng kỳ hạn", "Trái phiếu lãi suất cố định có giá bằng mệnh giá theo đường lãi suất giao ngay hiện hành, cùng kỳ hạn và kỳ trả lãi", "Trái phiếu lãi suất thả nổi (FRN) cùng kỳ hạn"], answer: 1, explain: "Swap trả cố định = long FRN + short trái phiếu cố định; tại ngày điều chỉnh FRN bằng mệnh giá, nên swap rate phải là coupon làm trái phiếu cố định cũng bằng mệnh giá: tổng(s x DF) + DFN = 1. Trái phiếu zero-coupon không có coupon. FRN có coupon thả nổi, không phải một lãi suất cố định." },
    { q: "Swap trả cố định 3,0%, notional 20 triệu USD, còn 2 kỳ thanh toán hằng năm. Hệ số chiết khấu hiện hành là 0,970 và 0,935. Giá trị swap với bên trả cố định gần nhất với:", choices: ["157.000 USD", "164.829 USD", "-157.000 USD"], answer: 0, explain: "Swap rate hiện hành st = (1 - 0,935)/(0,970 + 0,935) = 3,4121%. V = (st - 3,0%) x 1,905 x 20.000.000 = 157.000 USD. Lựa chọn 164.829 USD nhân chênh lệch với số kỳ mà quên chiết khấu. Lựa chọn âm là giá trị bên nhận cố định." },
    { q: "Tại mỗi ngày thanh toán, khoản nhận ròng của bên trả cố định trong swap lãi suất tương đương với payoff của:", choices: ["Một long FRA có lãi suất chốt bằng lãi suất swap", "Một short FRA có lãi suất chốt bằng lãi suất swap", "Một long futures lãi suất MRR"], answer: 0, explain: "Bên trả cố định nhận (MRR - s) x notional, đúng là payoff của long FRA chốt ở s. Short FRA nhận (s - MRR). Long futures lãi suất lời khi lãi suất giảm, ngược chiều bên trả cố định." },
    { q: "Khi định giá swap trả cố định theo cách nhìn trái phiếu, tại ngày điều chỉnh lãi suất, chân thả nổi (FRN) có giá trị bằng:", choices: ["Giá trị hiện tại của các khoản lãi cố định", "Mệnh giá (notional)", "0"], answer: 1, explain: "Tại ngày điều chỉnh, FRN trả lãi theo đúng lãi suất thị trường cho kỳ tới nên được định giá bằng mệnh giá. PV các khoản lãi cố định là một phần của chân cố định. Chân thả nổi không bằng 0; chỉ giá trị ròng của swap lúc ký mới bằng 0." },
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
