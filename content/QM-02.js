// Bài giảng QM-02 - Types of Financial Returns (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t, frac, keys, timeline, pages } = window.CFAH;

  const sections = [
    {
      title: '1. Bức tranh lớn: một khoản đầu tư, nhiều con số return',
      minutes: 3,
      html: `
<p>QM-01 giải thích return <b>đến từ đâu</b>. Module này dạy cách <b>tính</b> và <b>so sánh</b> các loại return. LOS duy nhất: tính, so sánh và diễn giải các loại return khác nhau.</p>
<p>Cùng một quỹ trong cùng một năm có thể báo nhiều con số: 9,5% trước phí, 8,3% sau phí, 6,79% sau thuế, 3,68% sau thuế và lạm phát (ví dụ 6.1)... Tất cả đều đúng, chỉ trả lời các câu hỏi khác nhau.</p>
<table class="plain"><thead><tr><th>Nhóm</th><th>Câu hỏi</th><th>Phần</th></tr></thead><tbody>
<tr><td>HPR và các loại trung bình</td><td>Lãi bao nhiêu trong cả kỳ? Trung bình mỗi năm?</td><td>2, 3, 4</td></tr>
<tr><td>Annualized, continuously compounded</td><td>Quy về cùng thước đo thời gian thế nào?</td><td>5</td></tr>
<tr><td>Gross/net, trước/sau thuế, danh nghĩa/thực</td><td>Nhà đầu tư thực sự giữ lại được bao nhiêu?</td><td>6</td></tr>
<tr><td>Leveraged return</td><td>Vay tiền đầu tư thì return trên vốn tự có ra sao?</td><td>7</td></tr>
</tbody></table>
<p class="tip">MWR và TWR (đo return khi có tiền nộp vào, rút ra) được dành riêng cho QM-03.</p>`,
    },
    {
      title: '2. Holding period return (HPR): một kỳ và nhiều kỳ',
      minutes: 6,
      html: `
<div class="formula">HPR = ${frac('P<sub>1</sub> - P<sub>0</sub> + D<sub>1</sub>', 'P<sub>0</sub>')}</div>
<p>${t('hpr', 'HPR')} đo return trong <b>toàn bộ</b> thời gian nắm giữ, dù là 1 ngày hay 5 năm. Nó chưa quy về năm.</p>
<div class="example"><div class="ex-h">Ví dụ 2.1</div>
<p>Mua cổ phiếu giá 50, nhận cổ tức 1,5, bán giá 54. HPR?</p>
<details><summary>Xem lời giải</summary><p>(54 - 50 + 1,5) / 50 = <b>11%</b>. Quên cổ tức sẽ ra 8%, một đáp án bẫy rất phổ biến.</p></details></div>

<h4>Nối nhiều kỳ: nhân, không cộng</h4>
<div class="formula">1 + HPR<sub>cả kỳ</sub> = (1 + R<sub>1</sub>)(1 + R<sub>2</sub>)...(1 + R<sub>N</sub>)</div>
${timeline(3, [{ t: 0, label: '100', up: true, cls: 'pv' }, { t: 1, label: '108 (+8%)' }, { t: 2, label: '95,04 (-12%)' }, { t: 3, label: '109,30 (+15%)' }], 'Ba năm return 8%, -12%, 15%: 100 đồng trở thành 109,30 đồng.')}
<div class="example"><div class="ex-h">Ví dụ 2.2</div>
<p>Return ba năm liên tiếp: 8%, -12%, 15%. HPR cả 3 năm?</p>
<details><summary>Xem lời giải</summary><p>1,08 × 0,88 × 1,15 - 1 = <b>9,296%</b>. Cộng thẳng 8 - 12 + 15 = 11% là sai vì bỏ qua việc năm sau tính trên số vốn đã thay đổi.</p></details></div>`,
    },
    {
      title: '3. Trung bình cộng và trung bình nhân',
      minutes: 7,
      html: `
<div class="formula">${t('am', 'Trung bình cộng')}: R̄ = ${frac('R<sub>1</sub> + ... + R<sub>N</sub>', 'N')} &nbsp;&nbsp;&nbsp;&nbsp; ${t('gm', 'Trung bình nhân')}: R̄<sub>G</sub> = [(1 + R<sub>1</sub>)...(1 + R<sub>N</sub>)]<sup>1/N</sup> - 1</div>
<div class="example"><div class="ex-h">Ví dụ 3.1 (tiếp ví dụ 2.2)</div>
<p>Với 8%, -12%, 15%: tính trung bình cộng và trung bình nhân.</p>
<details><summary>Xem lời giải</summary>
<p>Trung bình cộng = (8 - 12 + 15)/3 = <b>3,667%</b>.<br>Trung bình nhân = 1,09296<sup>1/3</sup> - 1 = <b>3,007%</b>.<br>
Kiểm tra: 100 × 1,03007<sup>3</sup> = 109,30, đúng bằng số tiền cuối kỳ. Còn 100 × 1,03667<sup>3</sup> = 111,41, cao hơn thực tế.</p>
${keys([['Tích các (1 + R)', '1.08 [×] 0.88 [×] 1.15 [=]', '1.0930'], ['Căn bậc 3', '[y^x] 3 [1/x] [=]', '1.0301'], ['Trừ 1', '[-] 1 [=]', '0.0301']])}</details></div>
<div class="key">Trung bình nhân ≤ trung bình cộng. Chỉ bằng nhau khi mọi kỳ có return như nhau. Return càng biến động, khoảng cách càng lớn.</div>
<table class="plain"><thead><tr><th>Dùng khi</th><th>Chọn</th></tr></thead><tbody>
<tr><td>Đo hiệu quả <b>đã đạt được</b> qua nhiều kỳ (tăng trưởng gộp)</td><td>Trung bình nhân</td></tr>
<tr><td>Ước tính return <b>của một kỳ đơn lẻ</b> sắp tới</td><td>Trung bình cộng</td></tr>
</tbody></table>
<p class="warn"><b>Ví dụ kinh điển:</b> +100% rồi -50%. Trung bình cộng 25%, nhưng tiền quay về đúng vốn: trung bình nhân 0%.</p>`,
    },
    {
      title: '4. Trung bình điều hòa, trimmed và winsorized',
      minutes: 5,
      html: `
<h4>Trung bình điều hòa: giá vốn bình quân khi mua đều tiền</h4>
<div class="formula">X̄<sub>H</sub> = ${frac('N', 'Σ (1/X<sub>i</sub>)')}</div>
<p>${t('harmonic', 'Trung bình điều hòa (harmonic mean)')} dùng cho chiến lược ${t('dca', 'mua đều tiền (cost averaging)')}: mỗi kỳ bỏ <b>cùng số tiền</b>, giá thấp thì mua được nhiều cổ phiếu hơn.</p>
<div class="example"><div class="ex-h">Ví dụ 4.1</div>
<p>Mỗi tháng mua 1.000 USD cổ phiếu, giá lần lượt 20, 25, 40. Giá vốn bình quân?</p>
<details><summary>Xem lời giải</summary>
<p>Số cổ phiếu: 50 + 40 + 25 = 115. Giá vốn = 3.000 / 115 = <b>26,09</b> = 3 / (1/20 + 1/25 + 1/40). Trung bình cộng giá là 28,33, cao hơn.</p>
${keys([['Tổng nghịch đảo', '20 [1/x] [+] 25 [1/x] [+] 40 [1/x] [=]', '0.1150'], ['Nghịch đảo, nhân N', '[1/x] [×] 3 [=]', '26.0870']])}</details></div>
<div class="key">Với dữ liệu dương không bằng nhau: điều hòa &lt; nhân &lt; cộng.</div>

<h4>Xử lý giá trị ngoại lai (outliers)</h4>
<ul>
<li>${t('trimmed', 'Trimmed mean')}: <b>bỏ</b> một tỷ lệ quan sát ở hai đầu. 20% trimmed: bỏ 10% thấp nhất và 10% cao nhất.</li>
<li>${t('winsor', 'Winsorized mean')}: <b>thay</b> các giá trị cực đoan bằng giá trị ở ngưỡng. 80% winsorized: giá trị dưới phân vị 10 thay bằng phân vị 10, trên phân vị 90 thay bằng phân vị 90.</li>
</ul>
<div class="example"><div class="ex-h">Ví dụ 4.2</div>
<p>10 return tháng (%): -2, 1, 3, 4, 5, 6, 7, 8, 9, 79. Tính trung bình cộng, 20% trimmed mean và 80% winsorized mean.</p>
<details><summary>Xem lời giải</summary>
<p>Trung bình cộng = 120/10 = <b>12%</b> (bị kéo lên bởi 79).<br>
20% trimmed: bỏ -2 và 79, còn 8 số có tổng 43 → <b>5,375%</b>.<br>
80% winsorized: thay -2 bằng 1 và 79 bằng 9, tổng 53 trên 10 số → <b>5,3%</b>.</p></details></div>
<p class="warn"><b>Bẫy:</b> trimmed chia cho số quan sát <b>còn lại</b> (8); winsorized vẫn chia cho <b>toàn bộ</b> (10).</p>`,
    },
    {
      title: '5. Annualized return và continuously compounded return',
      minutes: 9,
      html: `
<h4>Quy về năm</h4>
<div class="formula">R<sub>năm</sub> = (1 + HPR)<sup>c</sup> - 1, &nbsp; c = số kỳ trong một năm (ví dụ 365/số ngày, 52 tuần, 12 tháng, 1/số năm)</div>
<p>${t('annualized', 'Annualized return')} giúp so sánh các khoản đầu tư có thời gian nắm giữ khác nhau. Giả định ngầm: return được lặp lại và tái đầu tư với cùng tốc độ.</p>
<div class="example"><div class="ex-h">Ví dụ 5.1</div>
<p>(a) HPR 2,4% trong 120 ngày. (b) HPR 25% trong 3 năm. (c) 0,4% mỗi tuần. Quy về năm.</p>
<details><summary>Xem lời giải</summary>
<p>(a) 1,024<sup>365/120</sup> - 1 = <b>7,48%</b>.<br>(b) 1,25<sup>1/3</sup> - 1 = <b>7,72%</b> (không phải 25/3 = 8,33%).<br>(c) 1,004<sup>52</sup> - 1 = <b>23,07%</b>.</p>
${keys([['(a)', '1.024 [y^x] [(] 365 [÷] 120 [)] [=]', '1.0748']])}</details></div>
<p class="warn">Quy kỳ ngắn lên năm có thể phóng đại: một tuần may mắn 3% thành khoảng 365% một năm (1,03<sup>52</sup> - 1). Kết quả chỉ có nghĩa khi return đó có thể lặp lại.</p>

<h4>Continuously compounded return</h4>
<div class="formula">r<sub>cc</sub> = ln(1 + HPR) = ln(${frac('P<sub>1</sub>', 'P<sub>0</sub>')}) &nbsp;&nbsp;&nbsp; HPR = e<sup>r<sub>cc</sub></sup> - 1</div>
<p>${t('cc', 'Continuously compounded return')} luôn nhỏ hơn HPR tương ứng (khi HPR dương). Ưu điểm lớn: <b>cộng được theo thời gian</b>.</p>
<div class="example"><div class="ex-h">Ví dụ 5.2</div>
<p>Giá đi từ 50 lên 55 rồi xuống 49,5. Tính r<sub>cc</sub> từng kỳ và cả kỳ.</p>
<details><summary>Xem lời giải</summary>
<p>Kỳ 1: ln(55/50) = <b>9,531%</b>. Kỳ 2: ln(49,5/55) = <b>-10,536%</b>.<br>
Cả kỳ: 9,531% - 10,536% = <b>-1,005%</b> = ln(49,5/50). Cộng trực tiếp được, không cần nhân.<br>
Để ý: HPR là +10% rồi -10%, nhưng tổng không bằng 0.</p>
${keys([['Kỳ 1', '55 [÷] 50 [=] [LN]', '0.0953']])}</details></div>`,
    },
    {
      title: '6. Gross và net, trước và sau thuế, danh nghĩa và thực',
      minutes: 8,
      html: `
<table class="plain"><thead><tr><th>Cặp</th><th>Khác nhau ở</th><th>Ai dùng</th></tr></thead><tbody>
<tr><td>${t('gross', 'Gross return')} / ${t('net', 'net return')}</td><td>Gross: sau chi phí giao dịch, <b>trước</b> phí quản lý và hành chính. Net: sau tất cả các phí</td><td>Gross để đánh giá kỹ năng nhà quản lý; net là cái nhà đầu tư nhận</td></tr>
<tr><td>${t('pretax', 'Pre-tax')} / ${t('aftertax', 'after-tax')}</td><td>Thuế trên cổ tức, lãi và lãi vốn đã bán</td><td>Nhà đầu tư chịu thuế</td></tr>
<tr><td>Danh nghĩa / ${t('real', 'thực (real)')}</td><td>Đã loại lạm phát hay chưa</td><td>So sánh sức mua qua thời gian, giữa các nước</td></tr>
</tbody></table>

<div class="example"><div class="ex-h">Ví dụ 6.1 - Một quỹ, bốn con số</div>
<p>Quỹ đạt 9,5% sau chi phí giao dịch, phí quản lý 1,2%. Trong return net, 3% là cổ tức (thuế 15%) và phần còn lại là lãi vốn đã bán (thuế 20%). Lạm phát 3%. Tính net, sau thuế và sau thuế thực.</p>
<details><summary>Xem lời giải</summary>
<p>Net = 9,5% - 1,2% = <b>8,3%</b>.<br>
Sau thuế = 3% × 0,85 + 5,3% × 0,80 = 2,55% + 4,24% = <b>6,79%</b>.<br>
Thực (sau thuế) = 1,0679 / 1,03 - 1 = <b>3,68%</b>.</p></details></div>
<p class="tip">Thuế lãi vốn thường chỉ đánh khi <b>bán</b> (realized). Lãi vốn chưa bán được hoãn thuế, nên sau thuế của chiến lược ít giao dịch thường tốt hơn.</p>
<p>Công thức lãi suất thực dùng lại quan hệ Fisher ở QM-01: R<sub>thực</sub> = ${frac('1 + R<sub>danh nghĩa</sub>', '1 + π')} - 1. Ví dụ: danh nghĩa 8%, lạm phát 3% → thực <b>4,854%</b>.</p>`,
    },
    {
      title: '7. Leveraged return: vay để đầu tư',
      minutes: 4,
      html: `
<div class="formula">R<sub>L</sub> = R + ${frac('V<sub>B</sub>', 'V<sub>E</sub>')} × (R - r<sub>D</sub>)</div>
<p>R: return của toàn bộ tài sản; V<sub>B</sub>: tiền vay; V<sub>E</sub>: vốn tự có; r<sub>D</sub>: lãi vay. ${t('lev', 'Đòn bẩy')} khuếch đại return trên vốn tự có theo <b>cả hai chiều</b>.</p>
<div class="example"><div class="ex-h">Ví dụ 7.1</div>
<p>Danh mục 1.000.000 USD, gồm 400.000 vốn tự có và 600.000 vay với lãi 5%. Return của danh mục (a) 9%, (b) -4%. Return trên vốn tự có?</p>
<details><summary>Xem lời giải</summary>
<p>V<sub>B</sub>/V<sub>E</sub> = 1,5.<br>(a) 9% + 1,5 × (9% - 5%) = <b>15%</b>.<br>(b) -4% + 1,5 × (-4% - 5%) = <b>-17,5%</b>.<br>
Kiểm tra (a): lãi tài sản 90.000, trả lãi vay 30.000, còn 60.000 trên 400.000 = 15%.</p></details></div>
<p class="warn">Đòn bẩy chỉ có lợi khi R &gt; r<sub>D</sub>. Khi R &lt; r<sub>D</sub>, return trên vốn tự có còn thấp hơn return tài sản.</p>`,
    },
    {
      title: '8. Tóm tắt và bẫy thường gặp',
      minutes: 3,
      html: `
<table class="plain"><thead><tr><th>Tình huống</th><th>Nhớ</th></tr></thead><tbody>
<tr><td>HPR</td><td>Cộng cổ tức/coupon vào tử số</td></tr>
<tr><td>Nối nhiều kỳ</td><td>Nhân (1 + R), không cộng R</td></tr>
<tr><td>Trung bình nhân và cộng</td><td>Nhân ≤ cộng; nhân cho hiệu quả quá khứ nhiều kỳ</td></tr>
<tr><td>Mua đều tiền</td><td>Giá vốn bình quân = trung bình điều hòa</td></tr>
<tr><td>Trimmed và winsorized</td><td>Trimmed bỏ đi; winsorized thay thế, vẫn chia cho N</td></tr>
<tr><td>Annualize</td><td>(1 + HPR)<sup>c</sup> - 1, không nhân tuyến tính</td></tr>
<tr><td>Continuously compounded</td><td>ln(1 + HPR); cộng được theo thời gian</td></tr>
<tr><td>Gross và net</td><td>Gross đã trừ chi phí giao dịch nhưng chưa trừ phí quản lý</td></tr>
<tr><td>Return thực</td><td>Chia (1 + danh nghĩa)/(1 + π)</td></tr>
<tr><td>Đòn bẩy</td><td>R + (V<sub>B</sub>/V<sub>E</sub>)(R - r<sub>D</sub>); khuếch đại cả lãi lẫn lỗ</td></tr>
</tbody></table>
<p>Tiếp theo: tab <b>Luyện tập</b> 10 câu (rút ngẫu nhiên từ ngân hàng 30 câu, mỗi lần làm một bộ khác). QM-03 sẽ dùng HPR và trung bình nhân để tính TWR.</p>`,
    },
  ];

  const glossary = {
    hpr: ['Holding period return (HPR)', 'Lợi suất kỳ nắm giữ', 'Return trong toàn bộ thời gian nắm giữ, gồm cả lãi vốn và thu nhập.'],
    am: ['Arithmetic mean return', 'Trung bình cộng', 'Tổng các return chia số kỳ; ước tính tốt cho return một kỳ.'],
    gm: ['Geometric mean return', 'Trung bình nhân', 'Tốc độ tăng trưởng gộp đều mỗi kỳ cho cùng giá trị cuối kỳ.'],
    harmonic: ['Harmonic mean', 'Trung bình điều hòa', 'N chia tổng nghịch đảo; giá vốn bình quân khi mua cùng số tiền mỗi kỳ.'],
    dca: ['Cost averaging', 'Mua đều tiền', 'Đầu tư cùng một số tiền mỗi kỳ bất kể giá.'],
    trimmed: ['Trimmed mean', 'Trung bình cắt bỏ', 'Bỏ một tỷ lệ quan sát cực đoan ở hai đầu rồi tính trung bình phần còn lại.'],
    winsor: ['Winsorized mean', 'Trung bình winsorized', 'Thay giá trị cực đoan bằng giá trị ở phân vị ngưỡng rồi tính trung bình toàn bộ.'],
    annualized: ['Annualized return', 'Return quy năm', 'Return quy đổi về một năm có ghép lãi: (1 + HPR)^c - 1.'],
    cc: ['Continuously compounded return', 'Return ghép lãi liên tục', 'ln(1 + HPR); cộng được qua các kỳ.'],
    gross: ['Gross return', 'Return gộp', 'Return sau chi phí giao dịch, trước phí quản lý và chi phí hành chính.'],
    net: ['Net return', 'Return ròng', 'Return sau tất cả phí, là phần nhà đầu tư thực nhận.'],
    pretax: ['Pre-tax nominal return', 'Return trước thuế', 'Return chưa trừ thuế thu nhập và thuế lãi vốn.'],
    aftertax: ['After-tax nominal return', 'Return sau thuế', 'Return sau khi trừ thuế trên cổ tức, lãi và lãi vốn đã thực hiện.'],
    real: ['Real return', 'Return thực', 'Return sau khi loại lạm phát: (1 + danh nghĩa)/(1 + lạm phát) - 1.'],
    lev: ['Leveraged return', 'Return có đòn bẩy', 'Return trên vốn tự có khi một phần danh mục được tài trợ bằng vay nợ.'],
  };

  const practice = [
    { q: 'Mua cổ phiếu giá 25, nhận cổ tức 0,8, sau một năm bán giá 27,2. HPR gần nhất với:', choices: ['8,80%', '12,00%', '3,20%'], answer: 1, explain: '(27,2 - 25 + 0,8)/25 = 12%. Lựa chọn 8,80% quên cổ tức. Lựa chọn 3,20% chỉ là tỷ suất cổ tức.' },
    { q: 'Một quỹ có return ba năm: 15%, -10%, 6%. Trung bình nhân hằng năm gần nhất với:', choices: ['3,67%', '9,71%', '3,14%'], answer: 2, explain: '(1,15 x 0,90 x 1,06)^(1/3) - 1 = 3,14%. Lựa chọn 3,67% là trung bình cộng. Lựa chọn 9,71% là HPR cả 3 năm, chưa lấy căn.' },
    { q: 'Phát biểu nào về trung bình cộng và trung bình nhân của cùng một chuỗi return là đúng?', choices: ['Trung bình nhân luôn nhỏ hơn hoặc bằng trung bình cộng; bằng nhau khi mọi return như nhau', 'Trung bình nhân lớn hơn trung bình cộng khi return biến động mạnh', 'Trung bình cộng phù hợp hơn để đo hiệu quả gộp nhiều năm trong quá khứ'], answer: 0, explain: 'Biến động càng lớn, trung bình nhân càng thấp hơn trung bình cộng. Hiệu quả gộp quá khứ nhiều kỳ phải dùng trung bình nhân, nên phương án nói trung bình cộng phù hợp hơn là sai.' },
    { q: 'Nhà đầu tư mua cùng số tiền cổ phiếu ở ba thời điểm với giá 24, 30 và 48. Giá vốn bình quân mỗi cổ phiếu gần nhất với:', choices: ['31,30', '34,00', '30,00'], answer: 0, explain: 'Mua cùng số tiền → trung bình điều hòa: 3/(1/24 + 1/30 + 1/48) = 31,30. Lựa chọn 34,00 là trung bình cộng giá; lựa chọn 30,00 là trung vị.' },
    { q: 'Một khoản đầu tư có HPR 3,5% trong 200 ngày. Return quy năm (dùng 365 ngày, có ghép lãi) gần nhất với:', choices: ['6,39%', '6,48%', '1,90%'], answer: 1, explain: '1,035^(365/200) - 1 = 6,48%. Lựa chọn 6,39% nhân tuyến tính 3,5% x 365/200, không ghép lãi. Lựa chọn 1,90% đảo ngược số mũ (200/365).' },
    { q: 'Giá cổ phiếu giảm từ 40 xuống 36. Continuously compounded return gần nhất với:', choices: ['-10,00%', '10,54%', '-10,54%'], answer: 2, explain: 'ln(36/40) = ln(0,9) = -10,54%. Lựa chọn -10,00% là HPR thường. Lựa chọn 10,54% (dương) là ln(40/36), sai chiều.' },
    { q: 'Return danh nghĩa của một danh mục là 9%, lạm phát 3%. Return thực gần nhất với:', choices: ['5,83%', '6,00%', '12,27%'], answer: 0, explain: '1,09/1,03 - 1 = 5,83%. Lựa chọn 6,00% là phép trừ gần đúng. Lựa chọn 12,27% nhân thay vì chia.' },
    { q: 'Nhà đầu tư có 300.000 USD vốn tự có, vay thêm 200.000 USD lãi 6% để mua danh mục 500.000 USD. Danh mục đạt return 10%. Return trên vốn tự có gần nhất với:', choices: ['11,60%', '12,67%', '16,67%'], answer: 1, explain: '10% + (200/300) x (10% - 6%) = 12,67%. Lựa chọn 11,60% dùng V_B/(tổng tài sản) thay vì V_B/V_E. Lựa chọn 16,67% quên trừ chi phí lãi vay.' },
    { q: "Một quỹ có return ba năm liên tiếp: 12%, -8%, 5%. HPR của cả giai đoạn 3 năm gần nhất với:", choices: ["9,00%", "2,66%", "8,19%"], answer: 2, explain: "1,12 x 0,92 x 1,05 - 1 = 8,19%. Lựa chọn 9,00% cộng thẳng 12 - 8 + 5, bỏ qua việc mỗi năm tính trên số vốn đã thay đổi. Lựa chọn 2,66% là trung bình nhân mỗi năm, không phải HPR cả kỳ." },
    { q: "Return 4 năm của một cổ phiếu: 20%, -15%, 10%, 5%. Không có thông tin nào khác, ước tính phù hợp nhất cho return của một năm đơn lẻ sắp tới gần nhất với:", choices: ["5,00%", "4,18%", "17,81%"], answer: 0, explain: "Ước tính return của một kỳ đơn lẻ sắp tới dùng trung bình cộng: (20 - 15 + 10 + 5)/4 = 5,00%. Lựa chọn 4,18% là trung bình nhân, phù hợp để đo tăng trưởng gộp đã đạt nhiều kỳ. Lựa chọn 17,81% là HPR của cả 4 năm." },
    { q: "Một cổ phiếu tăng 60% năm thứ nhất rồi giảm 37,5% năm thứ hai. Trung bình cộng và trung bình nhân của return hằng năm lần lượt là:", choices: ["11,25% và 11,25%", "11,25% và 0,00%", "0,00% và 11,25%"], answer: 1, explain: "Trung bình cộng = (60 - 37,5)/2 = 11,25%. Trung bình nhân = (1,6 x 0,625)^(1/2) - 1 = 0,00%: 100 thành 160 rồi về đúng 100. Lựa chọn hai số bằng nhau sai vì trung bình nhân chỉ bằng trung bình cộng khi mọi kỳ có return như nhau. Lựa chọn đảo thứ tự sai vì trung bình nhân không thể lớn hơn trung bình cộng." },
    { q: "Với một tập dữ liệu gồm các giá trị dương không bằng nhau, quan hệ giữa trung bình cộng (AM), trung bình nhân (GM) và trung bình điều hòa (HM) là:", choices: ["AM < GM < HM", "HM < GM < AM", "GM < HM < AM"], answer: 1, explain: "Với dữ liệu dương không bằng nhau: trung bình điều hòa nhỏ nhất, trung bình cộng lớn nhất, trung bình nhân ở giữa. Thứ tự \"AM < GM < HM\" đảo ngược hoàn toàn. Thứ tự \"GM < HM < AM\" đặt sai vị trí của trung bình điều hòa." },
    { q: "10 return tháng (%): -9, 2, 3, 4, 4, 5, 6, 7, 8, 31. 20% trimmed mean gần nhất với:", choices: ["3,90%", "6,10%", "4,88%"], answer: 2, explain: "20% trimmed bỏ 10% thấp nhất (-9) và 10% cao nhất (31); 8 số còn lại có tổng 39, nên trimmed mean = 39/8 = 4,88%. Lựa chọn 3,90% vẫn chia cho 10 dù đã bỏ 2 quan sát. Lựa chọn 6,10% là trung bình cộng của cả 10 số, bị outlier 31 kéo lên." },
    { q: "10 return tháng (%): -15, -1, 2, 3, 4, 5, 6, 7, 9, 25. 80% winsorized mean gần nhất với:", choices: ["4,30%", "4,38%", "4,50%"], answer: 0, explain: "80% winsorized thay giá trị thấp nhất -15 bằng -1 và giá trị cao nhất 25 bằng 9, rồi chia cho cả 10 quan sát: (-1 - 1 + 2 + 3 + 4 + 5 + 6 + 7 + 9 + 9)/10 = 4,30%. Lựa chọn 4,38% là 20% trimmed mean (bỏ hai đầu, chia 8). Lựa chọn 4,50% là trung bình cộng chưa xử lý outlier." },
    { q: "Một khoản đầu tư có HPR 40% trong 4 năm. Return quy năm (annualized) gần nhất với:", choices: ["8,78%", "10,00%", "8,41%"], answer: 0, explain: "1,40^(1/4) - 1 = 8,78%. Lựa chọn 10,00% chia tuyến tính 40/4, bỏ qua ghép lãi. Lựa chọn 8,41% là ln(1,40)/4, tức continuously compounded return mỗi năm, không phải annualized return thông thường." },
    { q: "Một chiến lược có return trung bình 0,35% mỗi tuần. Return quy năm (52 tuần, có ghép lãi) gần nhất với:", choices: ["18,20%", "19,92%", "4,28%"], answer: 1, explain: "1,0035^52 - 1 = 19,92%. Lựa chọn 18,20% nhân tuyến tính 0,35 x 52. Lựa chọn 4,28% dùng số mũ 12 như thể đây là return tháng." },
    { q: "Khoản đầu tư A có HPR 1,8% trong 90 ngày. Return quy năm của A (365 ngày, có ghép lãi) gần nhất với:", choices: ["7,30%", "0,44%", "7,50%"], answer: 2, explain: "1,018^(365/90) - 1 = 7,50%. Lựa chọn 7,30% nhân tuyến tính 1,8 x 365/90, bỏ qua ghép lãi. Lựa chọn 0,44% dùng số mũ ngược 90/365, làm return nhỏ đi thay vì quy lên năm." },
    { q: "Continuously compounded return của một cổ phiếu trong ba ngày liên tiếp là 1,2%, -0,5% và 0,8%. HPR của cả ba ngày gần nhất với:", choices: ["1,500%", "1,489%", "1,511%"], answer: 2, explain: "Continuously compounded return cộng được theo thời gian: 1,2 - 0,5 + 0,8 = 1,500%. HPR = e^0,015 - 1 = 1,511%. Lựa chọn 1,500% dừng ở tổng continuously compounded return, chưa đổi sang HPR. Lựa chọn 1,489% lấy ln(1,015) thay vì e^0,015, tức đổi theo chiều ngược lại." },
    { q: "HPR một năm của một khoản đầu tư là 25%. Continuously compounded return tương ứng gần nhất với:", choices: ["22,31%", "25,00%", "28,40%"], answer: 0, explain: "r_cc = ln(1,25) = 22,31%, nhỏ hơn HPR khi HPR dương. Lựa chọn 25,00% coi hai thước đo là một. Lựa chọn 28,40% là e^0,25 - 1, tức đi ngược chiều công thức." },
    { q: "Continuously compounded return của một quỹ là 4% mỗi quý trong cả 4 quý của năm. HPR của cả năm gần nhất với:", choices: ["16,00%", "17,35%", "16,99%"], answer: 1, explain: "Tổng continuously compounded return của năm = 4 x 4% = 16%. HPR = e^0,16 - 1 = 17,35%. Lựa chọn 16,00% chưa đổi tổng continuously compounded return sang HPR. Lựa chọn 16,99% là 1,04^4 - 1, coi 4% là HPR rời rạc mỗi quý." },
    { q: "Phát biểu nào về gross return của một quỹ là chính xác nhất?", choices: ["Gross return đã trừ mọi loại phí nên là số nhà đầu tư thực nhận", "Gross return đã trừ chi phí giao dịch nhưng chưa trừ phí quản lý và phí hành chính", "Gross return chưa trừ cả chi phí giao dịch lẫn phí quản lý"], answer: 1, explain: "Gross return tính sau chi phí giao dịch (gắn với quyết định đầu tư) nhưng trước phí quản lý và hành chính, nên dùng để đánh giá kỹ năng nhà quản lý. Phương án \"đã trừ mọi loại phí\" mô tả net return. Phương án \"chưa trừ cả chi phí giao dịch\" sai vì chi phí giao dịch đã được trừ trong gross return." },
    { q: "Một quỹ đạt gross return 10,2%. Phí quản lý là 0,9% và phí hành chính 0,3% giá trị tài sản. Net return gần nhất với:", choices: ["9,30%", "10,20%", "9,00%"], answer: 2, explain: "Net return = 10,2% - 0,9% - 0,3% = 9,00%. Lựa chọn 9,30% quên trừ phí hành chính. Lựa chọn 10,20% là gross return, chưa trừ phí." },
    { q: "Return năm của một nhà đầu tư là 9%, gồm 2,5% cổ tức (thuế 20%) và 6,5% lãi vốn đã bán (thuế 15%). Return sau thuế gần nhất với:", choices: ["7,525%", "7,200%", "7,650%"], answer: 0, explain: "2,5% x 0,80 + 6,5% x 0,85 = 2,00% + 5,525% = 7,525%. Lựa chọn 7,200% áp thuế 20% cho toàn bộ 9%. Lựa chọn 7,650% áp thuế 15% cho toàn bộ 9%. Mỗi phần thu nhập phải chịu đúng thuế suất của nó." },
    { q: "Return năm của một nhà đầu tư là 10%, gồm 3% cổ tức (thuế 25%) và 7% lãi vốn chưa bán (thuế lãi vốn 20%, chỉ đánh khi bán). Return sau thuế của năm gần nhất với:", choices: ["9,25%", "7,85%", "7,50%"], answer: 0, explain: "Cổ tức sau thuế: 3% x 0,75 = 2,25%. Lãi vốn chưa bán chưa bị đánh thuế: 7%. Tổng = 9,25%. Lựa chọn 7,85% đánh thuế 20% lên lãi vốn chưa bán (2,25% + 5,6%). Lựa chọn 7,50% áp thuế 25% cho toàn bộ 10%." },
    { q: "Return sau thuế danh nghĩa của một nhà đầu tư là 6,2%, lạm phát trong năm 2,4%. Return thực sau thuế gần nhất với:", choices: ["3,80%", "3,71%", "8,75%"], answer: 1, explain: "1,062 / 1,024 - 1 = 3,71%. Lựa chọn 3,80% là phép trừ gần đúng. Lựa chọn 8,75% nhân 1,062 x 1,024 thay vì chia." },
    { q: "Danh mục 2.000.000 USD gồm 800.000 USD vốn tự có và 1.200.000 USD vay với lãi 4,5%. Return của danh mục là -3%. Return trên vốn tự có gần nhất với:", choices: ["-7,50%", "-0,75%", "-14,25%"], answer: 2, explain: "V_B/V_E = 1.200.000 / 800.000 = 1,5. R_L = -3% + 1,5 x (-3% - 4,5%) = -14,25%. Kiểm tra: lỗ tài sản 60.000 + lãi vay 54.000 = 114.000 trên 800.000. Lựa chọn -7,50% quên chi phí lãi vay. Lựa chọn -0,75% đảo dấu lãi vay thành (R + r_D)." },
    { q: "Một nhà đầu tư dùng tiền vay để mua thêm tài sản. Return trên vốn tự có sẽ thấp hơn return của toàn bộ tài sản khi:", choices: ["Lãi suất vay thấp hơn return của tài sản", "Tỷ lệ vay trên vốn tự có lớn hơn 1", "Return của tài sản thấp hơn lãi suất vay"], answer: 2, explain: "R_L = R + (V_B/V_E)(R - r_D): khi R < r_D, phần thứ hai âm nên R_L < R. Phương án \"lãi vay thấp hơn return tài sản\" là trường hợp đòn bẩy có lợi (R_L > R). Phương án \"tỷ lệ vay lớn hơn 1\" chỉ quyết định mức khuếch đại, không quyết định chiều; chiều phụ thuộc dấu của R - r_D." },
    { q: "Một khoản đầu tư có HPR 9% trong 18 tháng. Return quy năm (có ghép lãi) gần nhất với:", choices: ["5,91%", "6,00%", "13,80%"], answer: 0, explain: "c = 12/18 kỳ mỗi năm: 1,09^(12/18) - 1 = 5,91%. Lựa chọn 6,00% chia tuyến tính 9/1,5. Lựa chọn 13,80% dùng số mũ ngược 18/12." },
    { q: "Loại return nào có thể cộng trực tiếp qua các kỳ để ra return của cả giai đoạn?", choices: ["Holding period return", "Continuously compounded return", "Annualized return"], answer: 1, explain: "ln(P_T/P_0) = ln(P_1/P_0) + ... + ln(P_T/P_T-1), nên continuously compounded return cộng được theo thời gian. Holding period return phải nối bằng phép nhân (1 + R). Annualized return là một tỷ lệ quy năm, cũng không cộng dồn được." },
    { q: "Mua cổ phiếu giá 50. Cuối năm 1 nhận cổ tức 1,0, giá 55. Cuối năm 2 nhận cổ tức 1,2, giá 52. Giả định cổ tức được tái đầu tư vào cổ phiếu, HPR của cả 2 năm gần nhất với:", choices: ["8,40%", "4,00%", "8,33%"], answer: 2, explain: "HPR năm 1 = (55 + 1)/50 - 1 = 12,00%. HPR năm 2 = (52 + 1,2)/55 - 1 = -3,27%. Cả kỳ = (1 + 12,00%)(1 + -3,27%) - 1 = 8,33%. Lựa chọn 8,40% cộng cổ tức không tái đầu tư ((52 - 50 + 1 + 1,2)/50), trái với giả định. Lựa chọn 4,00% chỉ tính thay đổi giá, bỏ cổ tức." },
  ];

  window.LESSONS['QM-02'] = {
    moduleId: 'QM-02',
    calculator: 'BA II Plus',
    warmup: [
      'Ôn QM-01: return gồm hai phần nào? Phần nào có thể âm?',
      'Một cổ phiếu tăng 100% rồi giảm 50%. Nhà đầu tư lãi hay lỗ? Trung bình cộng hai return là bao nhiêu?',
      'Tìm trên máy BA II Plus các phím y^x, 1/x và LN.',
    ],
    sections,
    glossary,
    practice,
    widgets: {},
    slides: [],
    wrapup: [
      'Khi nào dùng trung bình nhân, khi nào dùng trung bình cộng?',
      'Viết công thức annualized return và continuously compounded return.',
      'Vì sao đòn bẩy làm return trên vốn tự có biến động mạnh hơn?',
    ],
  };
}());
