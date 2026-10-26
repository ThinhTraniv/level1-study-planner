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
<p>Tiếp theo: tab <b>Luyện tập</b> 8 câu. QM-03 sẽ dùng HPR và trung bình nhân để tính TWR.</p>`,
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
