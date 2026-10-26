// Bài giảng DE-02 - Forward Commitment and Contingent Claim Features and Instruments (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t, frac } = window.CFAH;

  // Payoff / lợi nhuận khi đáo hạn. Mỗi hàm trả về giá trị theo giá S tại đáo hạn.
  const PAY = {
    lf: (S, X) => S - X, sf: (S, X) => X - S,
    lc: (S, X) => Math.max(0, S - X), sc: (S, X) => -Math.max(0, S - X),
    lp: (S, X) => Math.max(0, X - S), sp: (S, X) => -Math.max(0, X - S),
  };
  const SIGN = { lf: 0, sf: 0, lc: -1, sc: 1, lp: -1, sp: 1 }; // lợi nhuận = payoff + SIGN × phí
  const NAME = { lf: 'Long forward', sf: 'Short forward', lc: 'Long call', sc: 'Short call', lp: 'Long put', sp: 'Short put' };
  const fmt = (x, d = 2) => (Math.abs(x) < 1e-9 ? 0 : x).toFixed(d).replace('.', ',');

  // Đồ thị payoff trong bài giảng (khung figure.tl). series: [{k, X, prem, cls, label}] ; S chạy 0..100.
  function pchart(series, caption, opt = {}) {
    const W = 560, H = 270, l = 50, r = 530, top = 20, bot = 230, ylo = opt.ylo ?? -50, yhi = opt.yhi ?? 50;
    const xs = S => l + (S / 100) * (r - l);
    const ys = v => bot - ((v - ylo) / (yhi - ylo)) * (bot - top);
    let s = `<figure class="tl"><svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${caption}">`;
    s += `<line x1="${l}" y1="${ys(0)}" x2="${r}" y2="${ys(0)}" class="axis"/><line x1="${l}" y1="${top}" x2="${l}" y2="${bot}" class="axis"/>`;
    [0, 25, 50, 75, 100].forEach(S => { s += `<text x="${xs(S)}" y="${bot + 20}" class="tick">${S}</text>`; });
    [ylo, ylo / 2, yhi / 2, yhi].forEach(v => { s += `<text x="${l - 8}" y="${ys(v) + 4}" class="tick" style="text-anchor:end">${v}</text>`; });
    s += `<text x="${l - 8}" y="${ys(0) + 4}" class="tick" style="text-anchor:end">0</text>`;
    series.forEach(o => {
      const f = S => PAY[o.k](S, o.X) + SIGN[o.k] * (o.prem || 0);
      const pts = [0, o.X, 100];
      for (let i = 0; i < 2; i++) s += `<line x1="${xs(pts[i])}" y1="${ys(f(pts[i]))}" x2="${xs(pts[i + 1])}" y2="${ys(f(pts[i + 1]))}" class="${o.cls || 'flow'}" style="stroke-width:3${o.dash ? ';stroke-dasharray:6 5' : ''}"/>`;
      if (o.label) s += `<text x="${xs(o.lx)}" y="${ys(f(o.lx)) + (o.ly || -10)}" class="${o.cls === 'pv' ? 'pv' : ''}">${o.label}</text>`;
    });
    s += `<text x="${(l + r) / 2}" y="${H - 4}" class="tick">Giá tài sản cơ sở khi đáo hạn (S<tspan baseline-shift="sub" font-size="9">T</tspan>)</text>`;
    return `${s}</svg><figcaption>${caption}</figcaption></figure>`;
  }

  const sections = [
    {
      title: '1. Bức tranh lớn: hai họ phái sinh',
      minutes: 5,
      html: `
<p>Mọi phái sinh cơ bản thuộc về một trong hai họ:</p>
<div class="key"><b>${t('fc', 'Cam kết kỳ hạn (forward commitment)')}</b>: cả hai bên đều <b>bắt buộc</b> giao dịch ở mức giá đã thỏa thuận. Gồm forward, futures, swap.<br><b>${t('cc', 'Trái quyền có điều kiện (contingent claim)')}</b>: một bên có <b>quyền</b> (không phải nghĩa vụ); khoản thanh toán chỉ xảy ra khi một điều kiện được thỏa. Gồm option và credit derivative (CDS).</div>
<p>Module này đi qua 5 loại hợp đồng, sau đó tập trung vào kỹ năng thi quan trọng nhất: <b>tính payoff và lợi nhuận khi đáo hạn</b> của call và put.</p>
<table class="plain"><thead><tr><th>LOS</th><th>Phần</th></tr></thead><tbody>
<tr><td>Định nghĩa và so sánh forward, futures, swap, option, credit derivative</td><td>2, 3, 4, 5, 7</td></tr>
<tr><td>Giá trị khi đáo hạn và lợi nhuận của long/short call, put</td><td>6</td></tr>
<tr><td>So sánh forward commitment và contingent claim</td><td>8</td></tr>
</tbody></table>
<p class="tip"><b>Ký hiệu dùng xuyên suốt:</b> S<sub>0</sub> là giá giao ngay hôm nay, S<sub>T</sub> là giá khi đáo hạn, F<sub>0</sub>(T) là giá kỳ hạn chốt hôm nay cho thời điểm T, X là giá thực hiện của quyền chọn, c<sub>0</sub> và p<sub>0</sub> là phí quyền chọn mua và bán.</p>`,
    },
    {
      title: '2. Hợp đồng kỳ hạn (forward)',
      minutes: 9,
      html: `
<p>Một ${t('forward', 'hợp đồng kỳ hạn (forward contract)')} là thỏa thuận OTC giữa hai bên: bên long cam kết <b>mua</b>, bên short cam kết <b>bán</b> tài sản cơ sở vào ngày T ở giá F<sub>0</sub>(T) chốt từ hôm nay.</p>
<ul>
<li>Không bên nào trả tiền khi ký (giá trị ban đầu bằng 0 nếu định giá đúng).</li>
<li>Điều khoản tùy chỉnh; chỉ thanh toán một lần khi đáo hạn.</li>
<li>Có ${t('cptyrisk', 'rủi ro đối tác')}: bên đang lời lo bên kia không trả.</li>
</ul>
<div class="formula">Payoff long = S<sub>T</sub> - F<sub>0</sub>(T) &nbsp;&nbsp;&nbsp;&nbsp; Payoff short = F<sub>0</sub>(T) - S<sub>T</sub></div>
${pchart([{ k: 'lf', X: 50, cls: 'flow', label: 'Long', lx: 85, ly: -12 }, { k: 'sf', X: 50, cls: 'pv', label: 'Short', lx: 85, ly: 22 }], 'Forward với F0(T) = 50: hai đường thẳng đối xứng, cắt trục hoành tại 50.')}
<p>Payoff là <b>đường thẳng</b> (tuyến tính) và <b>đối xứng</b>: giá lên 1 thì long lời 1, giá xuống 1 thì long lỗ 1. Vì không có phí ban đầu nên payoff cũng chính là lợi nhuận.</p>
<div class="example"><div class="ex-h">Ví dụ 2.1 - Người nuôi gà và nhà hàng</div>
<p>Người nuôi gà (short) ký với nhà hàng (long) bán gà sau 1 năm ở F<sub>0</sub>(T) = 110 USD/con. Tính payoff mỗi bên nếu giá gà khi đáo hạn là 125 hoặc 95.</p>
<details><summary>Xem lời giải</summary>
<p>S<sub>T</sub> = 125: long = 125 - 110 = <b>+15</b>; short = <b>-15</b>. Người nuôi gà "lỡ" 15 USD so với bán ra thị trường, nhưng đổi lại đã chắc chắn được giá từ trước.<br>
S<sub>T</sub> = 95: long = <b>-15</b>; short = <b>+15</b>.</p></details></div>
<p>Hợp đồng kỳ hạn có thể ${t('physical', 'giao nhận vật chất')} hoặc ${t('cashsettle', 'thanh toán bằng tiền')}. Hợp đồng kỳ hạn thanh toán bằng tiền trên ngoại tệ còn gọi là ${t('ndf', 'NDF (non-deliverable forward)')}, phổ biến với các đồng tiền bị hạn chế chuyển đổi.</p>`,
    },
    {
      title: '3. Hợp đồng tương lai (futures)',
      minutes: 11,
      html: `
<p>Một ${t('futures', 'hợp đồng tương lai (futures contract)')} có kinh tế giống forward (cam kết mua/bán ở giá chốt trước) nhưng <b>chuẩn hóa và niêm yết trên sàn</b>, bù trừ qua ${t('ccp', 'CCP')}, và lãi lỗ được thanh toán <b>mỗi ngày</b>.</p>
<h4>Cơ chế ký quỹ</h4>
<ul>
<li>${t('im', 'Ký quỹ ban đầu (initial margin)')}: số tiền phải nộp để mở vị thế.</li>
<li>${t('mtm', 'Thanh toán hằng ngày (mark-to-market)')}: cuối ngày, sàn lấy ${t('settleprice', 'giá thanh toán (settlement price)')} để ghi lời/lỗ vào tài khoản.</li>
<li>${t('mm', 'Ký quỹ duy trì (maintenance margin)')}: mức tối thiểu. Nếu số dư rơi <b>xuống dưới</b> mức này, nhà đầu tư nhận ${t('mcall', 'lệnh gọi ký quỹ (margin call)')} và phải nộp ${t('vm', 'ký quỹ biến động (variation margin)')} để đưa số dư <b>về lại mức ký quỹ ban đầu</b>.</li>
</ul>
<div class="example"><div class="ex-h">Ví dụ 3.1 - Tài khoản ký quỹ</div>
<p>Mua (long) 1 hợp đồng tương lai quy mô 100 đơn vị ở giá 50,00. Ký quỹ ban đầu 600, ký quỹ duy trì 450. Giá thanh toán 3 ngày tiếp theo: 48,80; 47,90; 49,10. Theo dõi tài khoản.</p>
<details><summary>Xem lời giải</summary>
<table class="plain"><thead><tr><th>Ngày</th><th>Giá</th><th>Lời/lỗ</th><th>Số dư cuối ngày</th><th>Nộp thêm</th></tr></thead><tbody>
<tr><td>0</td><td>50,00</td><td></td><td>600</td><td></td></tr>
<tr><td>1</td><td>48,80</td><td>-1,20 × 100 = -120</td><td>480</td><td>0 (vẫn ≥ 450)</td></tr>
<tr><td>2</td><td>47,90</td><td>-0,90 × 100 = -90</td><td>390 &lt; 450</td><td><b>210</b> (đưa về 600)</td></tr>
<tr><td>3</td><td>49,10</td><td>+1,20 × 100 = +120</td><td>720</td><td>0 (có thể rút 120)</td></tr>
</tbody></table>
<p class="warn"><b>Bẫy kinh điển:</b> khi bị gọi ký quỹ, phải nộp đủ để về <b>ký quỹ ban đầu</b> (600 - 390 = 210), không phải chỉ về ký quỹ duy trì (450 - 390 = 60).</p></details></div>
<h4>Forward và futures</h4>
<table class="plain"><thead><tr><th></th><th>Forward</th><th>Futures</th></tr></thead><tbody>
<tr><td>Nơi giao dịch</td><td>OTC, tùy chỉnh</td><td>Sàn, chuẩn hóa</td></tr>
<tr><td>Thanh toán lãi lỗ</td><td>Một lần khi đáo hạn</td><td>Hằng ngày (mark-to-market)</td></tr>
<tr><td>Rủi ro đối tác</td><td>Có</td><td>Gần như không (CCP)</td></tr>
<tr><td>Thanh khoản</td><td>Thấp</td><td>Cao, dễ đóng vị thế</td></tr>
<tr><td>Ký quỹ</td><td>Thường không bắt buộc</td><td>Bắt buộc</td></tr>
</tbody></table>
<p>Một số sàn còn đặt ${t('limit', 'giới hạn biên độ giá (price limit)')} mỗi ngày. Vì sao giá futures và giá forward có thể khác nhau khi lãi suất biến động sẽ học ở DE-06.</p>`,
    },
    {
      title: '4. Hợp đồng hoán đổi (swap)',
      minutes: 8,
      html: `
<p>Một ${t('swap', 'hợp đồng hoán đổi (swap)')} là thỏa thuận OTC để <b>trao đổi một chuỗi dòng tiền</b> trong tương lai, theo các ngày định trước. Có thể xem swap như <b>một chuỗi hợp đồng kỳ hạn</b> nối tiếp nhau (DE-07).</p>
<h4>Swap lãi suất cố định - thả nổi (plain vanilla interest rate swap)</h4>
<ul>
<li>Bên ${t('payfixed', 'trả cố định (fixed-rate payer)')} trả lãi suất cố định, nhận lãi suất thả nổi (${t('mrr', 'MRR')}). Bên kia ngược lại.</li>
<li>Lãi tính trên ${t('notional', 'giá trị danh nghĩa (notional principal)')}. Trong swap lãi suất, tiền gốc danh nghĩa <b>không được trao đổi</b>.</li>
<li>Mỗi kỳ chỉ bên nợ nhiều hơn trả <b>phần chênh lệch ròng (netting)</b>.</li>
</ul>
<div class="example"><div class="ex-h">Ví dụ 4.1</div>
<p>Swap 3 năm, notional 10 triệu USD, thanh toán hằng năm. Công ty A trả cố định 3,00% và nhận MRR. Kỳ này MRR = 3,50%. Ai trả ai bao nhiêu? Nếu MRR = 2,40% thì sao?</p>
<details><summary>Xem lời giải</summary>
<p>MRR = 3,50%: A nhận 3,50% - 3,00% = 0,50% × 10.000.000 = <b>50.000 USD</b> (ròng).<br>MRR = 2,40%: A trả (3,00% - 2,40%) × 10.000.000 = <b>60.000 USD</b>.</p>
<p>Bên trả cố định được lợi khi lãi suất <b>tăng</b>, giống như đang "long" lãi suất.</p></details></div>
<p>Các loại swap khác: ${t('ccs', 'swap tiền tệ (currency swap)')} (thường <b>có</b> trao đổi gốc ở đầu và cuối), swap cổ phiếu (equity swap: đổi lợi suất cổ phiếu/chỉ số lấy lãi suất), swap hàng hóa.</p>
<p class="tip">Giống forward, swap là <b>forward commitment</b>: hai bên đều có nghĩa vụ, thường không trả tiền khi ký, payoff tuyến tính theo biến số cơ sở.</p>`,
    },
    {
      title: '5. Quyền chọn (option): call và put',
      minutes: 9,
      html: `
<p>Một ${t('option', 'quyền chọn (option)')} cho người mua <b>quyền, không phải nghĩa vụ</b>, mua hoặc bán tài sản cơ sở ở ${t('strike', 'giá thực hiện (exercise / strike price, X)')} trong hoặc tại một thời điểm xác định. Để có quyền này, người mua trả cho người bán một khoản ${t('premium', 'phí quyền chọn (premium)')} ngay từ đầu.</p>
<table class="plain"><thead><tr><th></th><th>${t('call', 'Quyền chọn mua (call)')}</th><th>${t('put', 'Quyền chọn bán (put)')}</th></tr></thead><tbody>
<tr><td>Người mua (long)</td><td>Có quyền <b>mua</b> ở X; trả phí c<sub>0</sub></td><td>Có quyền <b>bán</b> ở X; trả phí p<sub>0</sub></td></tr>
<tr><td>Người bán (short, writer)</td><td>Nghĩa vụ bán ở X nếu long thực hiện; nhận phí</td><td>Nghĩa vụ mua ở X nếu long thực hiện; nhận phí</td></tr>
<tr><td>Long muốn giá cơ sở</td><td>Tăng</td><td>Giảm</td></tr>
</tbody></table>
<ul>
<li>${t('euro', 'Quyền chọn kiểu châu Âu (European)')}: chỉ thực hiện được <b>vào ngày đáo hạn</b>. ${t('amer', 'Kiểu Mỹ (American)')}: thực hiện được <b>bất kỳ lúc nào</b> đến ngày đáo hạn. Tên gọi không liên quan đến địa lý.</li>
<li>Option có thể niêm yết trên sàn (chuẩn hóa) hoặc OTC.</li>
<li>Người mua option chỉ có rủi ro mất phí; người bán option mới là bên có nghĩa vụ và có thể lỗ lớn.</li>
</ul>
<p class="warn"><b>Bẫy:</b> "long put" là <b>mua</b> quyền chọn bán, tức là kỳ vọng giá <b>giảm</b>. Đừng nhầm "bán" trong tên put với vị thế short.</p>
<p>Khái niệm ${t('moneyness', 'trạng thái quyền chọn (moneyness)')}: call có lãi nội tại khi S &gt; X (in the money), put khi S &lt; X. Chi tiết về giá trị nội tại và giá trị thời gian học ở DE-08.</p>`,
    },
    {
      title: '6. Giá trị khi đáo hạn và lợi nhuận của call, put',
      minutes: 14,
      html: `
<p>Đây là phần tính toán chính của module. Phân biệt rõ hai khái niệm:</p>
<ul><li>${t('payoff', 'Giá trị khi đáo hạn (payoff, value at expiration)')}: số tiền vị thế mang lại tại T, <b>chưa trừ phí</b>.</li>
<li>${t('profit', 'Lợi nhuận (profit)')}: payoff <b>trừ đi phí đã trả</b> (với long) hoặc <b>cộng phí đã nhận</b> (với short). Ở Level I, bỏ qua giá trị thời gian của phí.</li></ul>
<div class="formula">c<sub>T</sub> = max(0, S<sub>T</sub> - X) &nbsp;&nbsp;&nbsp;&nbsp; p<sub>T</sub> = max(0, X - S<sub>T</sub>)</div>
<div class="formula">Lợi nhuận long call = max(0, S<sub>T</sub> - X) - c<sub>0</sub> &nbsp;&nbsp;&nbsp; Lợi nhuận long put = max(0, X - S<sub>T</sub>) - p<sub>0</sub></div>
<p>Vị thế short luôn là <b>số đối</b> của long: lợi nhuận short call = c<sub>0</sub> - max(0, S<sub>T</sub> - X).</p>

${pchart([{ k: 'lc', X: 50, prem: 0, cls: 'flow', label: 'Payoff', lx: 88, ly: -12 }, { k: 'lc', X: 50, prem: 10, cls: 'pv', label: 'Lợi nhuận', lx: 88, ly: 26 }], 'Long call X = 50, phí 10: payoff gãy tại X, lợi nhuận dịch xuống đúng bằng phí; hòa vốn tại 60.')}
${pchart([{ k: 'lp', X: 50, prem: 0, cls: 'flow', label: 'Payoff', lx: 12, ly: -12 }, { k: 'lp', X: 50, prem: 10, cls: 'pv', label: 'Lợi nhuận', lx: 12, ly: 26 }], 'Long put X = 50, phí 10: lời khi giá giảm; hòa vốn tại 40; lời tối đa 40 khi giá về 0.')}

<h4>Bảng tóm tắt bốn vị thế quyền chọn</h4>
<table class="plain"><thead><tr><th>Vị thế</th><th>Lời tối đa</th><th>Lỗ tối đa</th><th>Điểm hòa vốn</th></tr></thead><tbody>
<tr><td>Long call</td><td>Không giới hạn</td><td>c<sub>0</sub></td><td>X + c<sub>0</sub></td></tr>
<tr><td>Short call</td><td>c<sub>0</sub></td><td>Không giới hạn</td><td>X + c<sub>0</sub></td></tr>
<tr><td>Long put</td><td>X - p<sub>0</sub></td><td>p<sub>0</sub></td><td>X - p<sub>0</sub></td></tr>
<tr><td>Short put</td><td>p<sub>0</sub></td><td>X - p<sub>0</sub></td><td>X - p<sub>0</sub></td></tr>
</tbody></table>

<div class="example"><div class="ex-h">Ví dụ 6.1 - Call</div>
<p>Call X = 50, phí 4. Khi đáo hạn S<sub>T</sub> = 62. Tính payoff long call, lợi nhuận long call và lợi nhuận short call.</p>
<details><summary>Xem lời giải</summary><p>Payoff = max(0, 62 - 50) = <b>12</b>. Lợi nhuận long = 12 - 4 = <b>8</b>. Lợi nhuận short = 4 - 12 = <b>-8</b>.</p></details></div>
<div class="example"><div class="ex-h">Ví dụ 6.2 - Put</div>
<p>Put X = 80, phí 6. Khi đáo hạn S<sub>T</sub> = 68. Tính payoff, lợi nhuận long put và short put.</p>
<details><summary>Xem lời giải</summary><p>Payoff = max(0, 80 - 68) = <b>12</b>. Lợi nhuận long = 12 - 6 = <b>6</b>. Lợi nhuận short = 6 - 12 = <b>-6</b>.</p></details></div>
<div class="example"><div class="ex-h">Ví dụ 6.3 - Làm ngược</div>
<p>(a) Mua call X = 100, phí 7. Hòa vốn ở giá nào? Giá đáo hạn bao nhiêu thì lời 13? (b) Mua put X = 120, phí 5, lời 20. Giá đáo hạn và payoff là bao nhiêu?</p>
<details><summary>Xem lời giải</summary>
<p>(a) Hòa vốn = 100 + 7 = <b>107</b>. Lời 13 cần payoff 20, nên S<sub>T</sub> = 100 + 20 = <b>120</b>.<br>
(b) Lời 20 nghĩa là payoff = 20 + 5 = <b>25</b> = 120 - S<sub>T</sub>, nên S<sub>T</sub> = <b>95</b>.</p></details></div>
<div class="example"><div class="ex-h">Ví dụ 6.4 - Kết hợp call và put</div>
<p>Cổ phiếu giá 90. Mua 1 call X = 95 (phí 3) và 1 put X = 95 (phí 4). Tính tổng payoff và lợi nhuận khi S<sub>T</sub> = 80; 95; 110.</p>
<details><summary>Xem lời giải</summary>
<table class="plain"><thead><tr><th>S<sub>T</sub></th><th>Payoff call</th><th>Payoff put</th><th>Tổng payoff</th><th>Lợi nhuận (trừ 7)</th></tr></thead><tbody>
<tr><td>80</td><td>0</td><td>15</td><td>15</td><td>8</td></tr>
<tr><td>95</td><td>0</td><td>0</td><td>0</td><td>-7</td></tr>
<tr><td>110</td><td>15</td><td>0</td><td>15</td><td>8</td></tr>
</tbody></table>
<p>Vị thế này lời khi giá biến động mạnh theo bất kỳ chiều nào, lỗ tối đa 7 khi giá đứng yên ở 95.</p></details></div>
<h4>Thử ngay: tính payoff và lợi nhuận</h4>
<div class="widget" data-widget="payoff"></div>
<p class="tip"><b>Mẹo làm bài:</b> luôn tính payoff trước (chỉ dùng max), rồi mới trừ/cộng phí. Nếu đề hỏi "value at expiration" thì <b>không trừ phí</b>.</p>`,
    },
    {
      title: '7. Phái sinh tín dụng (credit derivatives)',
      minutes: 6,
      html: `
<p>${t('creditd', 'Phái sinh tín dụng (credit derivative)')} chuyển <b>rủi ro vỡ nợ</b> của một bên tham chiếu (reference entity) từ người này sang người khác. Loại phổ biến nhất là ${t('cds', 'hợp đồng hoán đổi rủi ro tín dụng (credit default swap, CDS)')}.</p>
<ul>
<li>${t('pbuyer', 'Bên mua bảo hiểm (protection buyer)')} trả phí định kỳ (gọi là ${t('spread', 'CDS spread')}, tính trên notional).</li>
<li>${t('pseller', 'Bên bán bảo hiểm (protection seller)')} nhận phí; nếu xảy ra ${t('event', 'sự kiện tín dụng (credit event)')} như phá sản, không trả nợ, tái cơ cấu nợ, thì bồi thường phần tổn thất = notional × (1 - tỷ lệ thu hồi).</li>
</ul>
<div class="example"><div class="ex-h">Ví dụ 7.1</div>
<p>Quỹ nắm 10 triệu USD trái phiếu công ty Z, mua CDS notional 10 triệu, spread 1%/năm. Một năm sau Z phá sản, tỷ lệ thu hồi 40%.</p>
<details><summary>Xem lời giải</summary><p>Phí CDS mỗi năm = 1% × 10.000.000 = <b>100.000 USD</b>. Khi vỡ nợ, bên bán CDS trả (1 - 40%) × 10.000.000 = <b>6.000.000 USD</b>, bù đúng phần quỹ mất trên trái phiếu.</p></details></div>
<p class="tip">Dù tên có chữ "swap", CDS là <b>contingent claim</b>: bên bán chỉ trả khi sự kiện tín dụng xảy ra. Về kinh tế CDS giống một hợp đồng bảo hiểm, hay một put trên chất lượng tín dụng của bên tham chiếu.</p>`,
    },
    {
      title: '8. Forward commitment và contingent claim',
      minutes: 5,
      html: `
<table class="plain"><thead><tr><th>Tiêu chí</th><th>Forward commitment</th><th>Contingent claim</th></tr></thead><tbody>
<tr><td>Công cụ</td><td>Forward, futures, swap</td><td>Option, CDS</td></tr>
<tr><td>Nghĩa vụ</td><td>Cả hai bên bắt buộc thực hiện</td><td>Người mua có quyền; người bán có nghĩa vụ nếu người mua thực hiện</td></tr>
<tr><td>Thanh toán ban đầu</td><td>Thường bằng 0</td><td>Người mua trả phí (premium)</td></tr>
<tr><td>Hình dạng payoff</td><td>Tuyến tính, đối xứng</td><td>Phi tuyến (gãy khúc), bất đối xứng</td></tr>
<tr><td>Rủi ro của người mua</td><td>Lỗ khi giá đi ngược, có thể lớn</td><td>Tối đa bằng phí đã trả</td></tr>
</tbody></table>
<div class="key">Có thể hình dung: long call = "phần bên phải" của long forward (giữ lại phần lời khi giá tăng, bỏ phần lỗ khi giá giảm). Cái giá để bỏ được phần lỗ chính là <b>phí quyền chọn</b>.</div>
${pchart([{ k: 'lf', X: 50, cls: 'flow', label: 'Long forward', lx: 20, ly: 24, dash: true }, { k: 'lc', X: 50, cls: 'pv', label: 'Long call (payoff)', lx: 82, ly: -14 }], 'Cùng mức giá 50: forward lỗ khi giá giảm, call thì không (nhưng phải trả phí).')}`,
    },
    {
      title: '9. Tóm tắt và bẫy thường gặp',
      minutes: 3,
      html: `
<table class="plain"><thead><tr><th>Tình huống</th><th>Nhớ</th></tr></thead><tbody>
<tr><td>Payoff forward</td><td>Long = S<sub>T</sub> - F<sub>0</sub>(T); không có phí nên payoff = lợi nhuận</td></tr>
<tr><td>Margin call</td><td>Nộp về <b>ký quỹ ban đầu</b>, không phải ký quỹ duy trì</td></tr>
<tr><td>Swap lãi suất</td><td>Không trao đổi gốc; chỉ trả phần chênh lệch ròng</td></tr>
<tr><td>Payoff option</td><td>c<sub>T</sub> = max(0, S<sub>T</sub> - X); p<sub>T</sub> = max(0, X - S<sub>T</sub>); chưa trừ phí</td></tr>
<tr><td>Hòa vốn</td><td>Call: X + c<sub>0</sub>; put: X - p<sub>0</sub> (cho cả long và short)</td></tr>
<tr><td>Lỗ tối đa</td><td>Long option: phí; short call: không giới hạn; short put: X - p<sub>0</sub></td></tr>
<tr><td>Long put</td><td>Là <b>mua</b> quyền bán, kỳ vọng giá giảm</td></tr>
<tr><td>CDS</td><td>Contingent claim; bồi thường = notional × (1 - thu hồi)</td></tr>
<tr><td>European / American</td><td>Chỉ ngày đáo hạn / bất kỳ lúc nào; không liên quan địa lý</td></tr>
</tbody></table>
<p>Tiếp theo: tab <b>Luyện tập</b> - 10 câu.</p>`,
    },
  ];

  const glossary = {
    fc: ['Forward commitment', 'Cam kết kỳ hạn', 'Hợp đồng mà cả hai bên bắt buộc giao dịch ở giá đã thỏa thuận: forward, futures, swap.'],
    cc: ['Contingent claim', 'Trái quyền có điều kiện', 'Hợp đồng mà khoản thanh toán chỉ xảy ra khi một điều kiện được thỏa: option, CDS.'],
    forward: ['Forward contract', 'Hợp đồng kỳ hạn', 'Thỏa thuận OTC mua/bán tài sản vào ngày T ở giá chốt hôm nay; thanh toán một lần khi đáo hạn.'],
    cptyrisk: ['Counterparty credit risk', 'Rủi ro đối tác', 'Rủi ro bên kia không thực hiện nghĩa vụ khi hợp đồng có lợi cho mình.'],
    physical: ['Physical delivery', 'Giao nhận vật chất', 'Khi đáo hạn, tài sản thật được giao và giá thỏa thuận được trả.'],
    cashsettle: ['Cash settlement', 'Thanh toán bằng tiền', 'Chỉ trả phần chênh lệch giữa giá thị trường và giá thỏa thuận.'],
    ndf: ['Non-deliverable forward (NDF)', 'Hợp đồng kỳ hạn không giao nhận', 'Forward ngoại tệ thanh toán bằng tiền chênh lệch, thường cho đồng tiền hạn chế chuyển đổi.'],
    futures: ['Futures contract', 'Hợp đồng tương lai', 'Forward chuẩn hóa, niêm yết trên sàn, bù trừ qua CCP, thanh toán lãi lỗ hằng ngày.'],
    ccp: ['Central counterparty (CCP)', 'Đối tác bù trừ trung tâm', 'Tổ chức đứng giữa mọi người mua và người bán, bảo đảm thực hiện hợp đồng.'],
    im: ['Initial margin', 'Ký quỹ ban đầu', 'Số tiền phải nộp để mở một vị thế futures.'],
    mtm: ['Mark-to-market', 'Thanh toán lãi lỗ hằng ngày', 'Cuối mỗi ngày lời lỗ theo giá thanh toán được ghi vào tài khoản ký quỹ.'],
    settleprice: ['Settlement price', 'Giá thanh toán', 'Giá do sàn công bố cuối ngày (thường là giá bình quân cuối phiên) để tính lãi lỗ.'],
    mm: ['Maintenance margin', 'Ký quỹ duy trì', 'Số dư tối thiểu phải duy trì; thấp hơn mức này sẽ bị gọi ký quỹ.'],
    mcall: ['Margin call', 'Lệnh gọi ký quỹ', 'Yêu cầu nộp thêm tiền khi số dư rơi xuống dưới ký quỹ duy trì.'],
    vm: ['Variation margin', 'Ký quỹ biến động', 'Số tiền nộp thêm để đưa tài khoản về lại mức ký quỹ ban đầu.'],
    limit: ['Price limit', 'Giới hạn biên độ giá', 'Mức thay đổi giá tối đa mỗi ngày mà sàn cho phép đối với một hợp đồng tương lai.'],
    swap: ['Swap', 'Hợp đồng hoán đổi', 'Thỏa thuận OTC trao đổi một chuỗi dòng tiền trong tương lai; tương đương một chuỗi forward.'],
    payfixed: ['Fixed-rate payer', 'Bên trả lãi cố định', 'Trong swap lãi suất, bên trả cố định và nhận thả nổi; được lợi khi lãi suất tăng.'],
    mrr: ['Market reference rate (MRR)', 'Lãi suất tham chiếu thị trường', 'Lãi suất thả nổi chuẩn, ví dụ SOFR.'],
    notional: ['Notional principal', 'Giá trị danh nghĩa', 'Số tiền gốc dùng để tính lãi trong swap; không trao đổi trong swap lãi suất.'],
    ccs: ['Currency swap', 'Hợp đồng hoán đổi tiền tệ', 'Trao đổi dòng tiền ở hai đồng tiền khác nhau, thường có trao đổi gốc đầu và cuối kỳ.'],
    option: ['Option', 'Quyền chọn', 'Hợp đồng cho người mua quyền, không phải nghĩa vụ, mua hoặc bán tài sản ở giá thực hiện.'],
    strike: ['Exercise (strike) price', 'Giá thực hiện', 'Giá mà người nắm quyền chọn được mua (call) hoặc bán (put) tài sản cơ sở.'],
    premium: ['Option premium', 'Phí quyền chọn', 'Số tiền người mua trả cho người bán để có quyền chọn.'],
    call: ['Call option', 'Quyền chọn mua', 'Quyền mua tài sản ở giá X; payoff = max(0, S - X).'],
    put: ['Put option', 'Quyền chọn bán', 'Quyền bán tài sản ở giá X; payoff = max(0, X - S).'],
    euro: ['European option', 'Quyền chọn kiểu châu Âu', 'Chỉ thực hiện được vào ngày đáo hạn.'],
    amer: ['American option', 'Quyền chọn kiểu Mỹ', 'Thực hiện được vào bất kỳ ngày nào cho tới ngày đáo hạn.'],
    moneyness: ['Moneyness', 'Trạng thái quyền chọn', 'Quan hệ giữa giá cơ sở và giá thực hiện: in, at hoặc out of the money.'],
    payoff: ['Payoff / value at expiration', 'Giá trị khi đáo hạn', 'Số tiền vị thế mang lại tại đáo hạn, chưa tính phí ban đầu.'],
    profit: ['Profit', 'Lợi nhuận', 'Payoff trừ phí đã trả (long) hoặc cộng phí đã nhận (short).'],
    creditd: ['Credit derivative', 'Phái sinh tín dụng', 'Hợp đồng chuyển rủi ro vỡ nợ của một bên tham chiếu sang bên khác.'],
    cds: ['Credit default swap (CDS)', 'Hợp đồng hoán đổi rủi ro tín dụng', 'Bên mua trả phí định kỳ; bên bán bồi thường tổn thất khi có sự kiện tín dụng.'],
    pbuyer: ['Protection buyer', 'Bên mua bảo hiểm tín dụng', 'Bên trả phí CDS để được bồi thường nếu bên tham chiếu vỡ nợ.'],
    pseller: ['Protection seller', 'Bên bán bảo hiểm tín dụng', 'Bên nhận phí CDS và gánh rủi ro vỡ nợ của bên tham chiếu.'],
    spread: ['CDS spread', 'Phí CDS', 'Phí bảo hiểm tín dụng hằng năm, tính theo % notional.'],
    event: ['Credit event', 'Sự kiện tín dụng', 'Sự kiện kích hoạt bồi thường CDS: phá sản, không trả nợ, tái cơ cấu nợ...'],
  };

  const practice = [
    { q: 'Nhà đầu tư mua call X = 60 với phí 5. Khi đáo hạn giá cổ phiếu là 58. Lợi nhuận của nhà đầu tư là:', choices: ['-5', '-7', '0'], answer: 0, explain: 'Payoff = max(0, 58 - 60) = 0, lợi nhuận = 0 - 5 = -5. Lựa chọn -7 sai: tính 58 - 60 - 5 mà quên rằng call không bị thực hiện khi S < X. Lựa chọn 0 là payoff, chưa trừ phí.' },
    { q: 'Nhà đầu tư bán (short) put X = 40 và nhận phí 3. Khi đáo hạn giá cổ phiếu là 35. Lợi nhuận của người bán put là:', choices: ['+3', '-5', '-2'], answer: 2, explain: 'Put được thực hiện: người bán phải trả payoff 40 - 35 = 5, lợi nhuận = 3 - 5 = -2. Lựa chọn +3 quên payoff phải trả. Lựa chọn -5 quên phí đã nhận.' },
    { q: 'Long put X = 45, phí 4. Giá đáo hạn 38. Giá trị khi đáo hạn (payoff) và lợi nhuận lần lượt là:', choices: ['3 và 7', '7 và 3', '7 và 11'], answer: 1, explain: 'Payoff = 45 - 38 = 7; lợi nhuận = 7 - 4 = 3. Lựa chọn "3 và 7" đảo ngược hai khái niệm. Lựa chọn "7 và 11" cộng phí thay vì trừ.' },
    { q: 'Người bán call X = 70 nhận phí 6. Khi đáo hạn giá cổ phiếu là 81. Lợi nhuận của người bán call là:', choices: ['-11', '-5', '+5'], answer: 1, explain: 'Người bán trả payoff 81 - 70 = 11, cộng phí 6 đã nhận: 6 - 11 = -5. Lựa chọn -11 quên phí; lựa chọn +5 là lợi nhuận của người mua call.' },
    { q: 'Điểm hòa vốn khi đáo hạn của một long put X = 85, phí 4,5 là:', choices: ['89,5', '80,5', '85,0'], answer: 1, explain: 'Put hòa vốn khi payoff = phí: X - S = 4,5, nên S = 85 - 4,5 = 80,5. Lựa chọn 89,5 là công thức hòa vốn của call (X + phí).' },
    { q: 'Short 1 hợp đồng tương lai quy mô 1.000 đơn vị ở giá 4,50. Ký quỹ ban đầu 2.000, ký quỹ duy trì 1.500. Giá thanh toán ngày 1 là 4,62, ngày 2 là 5,05. Số tiền phải nộp thêm cuối ngày 2 là:', choices: ['50', '550', '0'], answer: 1, explain: 'Short lỗ khi giá tăng. Ngày 1: 2.000 - 120 = 1.880. Ngày 2: 1.880 - 430 = 1.450 < 1.500, phải nộp về ký quỹ ban đầu: 2.000 - 1.450 = 550. Lựa chọn 50 chỉ nộp về ký quỹ duy trì. Lựa chọn 0 quên rằng số dư đã thủng mức duy trì.' },
    { q: 'Công ty trả lãi cố định 2,8% và nhận MRR trong một swap notional 20 triệu USD, thanh toán hằng năm. Kỳ này MRR là 3,3%. Thanh toán ròng của công ty kỳ này là:', choices: ['Trả 100.000 USD', 'Nhận 660.000 USD', 'Nhận 100.000 USD'], answer: 2, explain: 'Công ty nhận 3,3% và trả 2,8%, ròng nhận 0,5% x 20.000.000 = 100.000. Lựa chọn nhận 660.000 USD là toàn bộ phần thả nổi, quên rằng swap chỉ trả chênh lệch ròng. Lựa chọn trả 100.000 USD sai chiều.' },
    { q: 'Công cụ nào sau đây là contingent claim?', choices: ['Hợp đồng hoán đổi lãi suất', 'Hợp đồng tương lai chỉ số', 'Hợp đồng hoán đổi rủi ro tín dụng (CDS)'], answer: 2, explain: 'CDS chỉ thanh toán khi xảy ra sự kiện tín dụng nên là contingent claim, dù tên có chữ "swap". Swap lãi suất và futures là forward commitment.' },
    { q: 'So với contingent claim, forward commitment NHIỀU KHẢ NĂNG:', choices: ['Không yêu cầu thanh toán phí khi ký và có payoff tuyến tính', 'Cho bên mua quyền lựa chọn có thực hiện hay không', 'Giới hạn lỗ tối đa của bên mua bằng khoản phí'], answer: 0, explain: 'Forward commitment ràng buộc cả hai bên, thường trị giá 0 khi ký, payoff là đường thẳng. Quyền lựa chọn có thực hiện hay không và lỗ tối đa bằng khoản phí là đặc điểm của quyền chọn.' },
    { q: 'Ngân hàng bán bảo hiểm CDS notional 5 triệu USD trên công ty Y. Công ty Y vỡ nợ, tỷ lệ thu hồi 30%. Ngân hàng phải trả:', choices: ['3,5 triệu USD', '1,5 triệu USD', '5,0 triệu USD'], answer: 0, explain: 'Bồi thường = notional x (1 - thu hồi) = 5 x 70% = 3,5 triệu. Lựa chọn 1,5 triệu USD là phần thu hồi. Lựa chọn 5,0 triệu USD bỏ qua phần thu hồi được.' },
  ];

  // Widget: tính payoff và lợi nhuận của 6 vị thế cơ bản, vẽ đồ thị lợi nhuận.
  const widgets = {
    payoff(el) {
      el.innerHTML = `
        <div class="w-row"><label>Vị thế<select data-i="k">${Object.keys(NAME).map(k => `<option value="${k}"${k === 'lc' ? ' selected' : ''}>${NAME[k]}</option>`).join('')}</select></label>
        <label>Giá thực hiện / giá kỳ hạn: <b data-o="X"></b><input type="range" min="20" max="80" step="1" value="50" data-i="X"></label>
        <label>Phí quyền chọn: <b data-o="c"></b><input type="range" min="0" max="15" step="0.5" value="5" data-i="c"></label></div>
        <div class="w-row"><label><span>Giá khi đáo hạn S<sub>T</sub>:</span><b data-o="S"></b><input type="range" min="0" max="100" step="1" value="62" data-i="S"></label></div>
        <div class="w-out"><div class="w-price" data-o="p"></div><div data-o="fig"></div><div class="w-note" data-o="note"></div></div>`;
      const q = s => el.querySelector(s);
      const upd = () => {
        const k = q('[data-i="k"]').value, X = +q('[data-i="X"]').value, S = +q('[data-i="S"]').value;
        const isOpt = SIGN[k] !== 0, c = isOpt ? +q('[data-i="c"]').value : 0;
        q('[data-i="c"]').disabled = !isOpt;
        const pay = PAY[k](S, X), prof = pay + SIGN[k] * c;
        q('[data-o="X"]').textContent = X;
        q('[data-o="c"]').textContent = isOpt ? fmt(c, 1) : 'không có';
        q('[data-o="S"]').textContent = S;
        q('[data-o="p"]').textContent = `Payoff = ${fmt(pay)} · Lợi nhuận = ${fmt(prof)}`;
        let fig = pchart([{ k, X, prem: 0, cls: 'flow', dash: true }, { k, X, prem: c, cls: 'pv' }], `${NAME[k]}: đường nét đứt là payoff, đường cam là lợi nhuận.`, { ylo: -60, yhi: 60 });
        const l = 50, r = 530, top = 20, bot = 230, cx = l + (S / 100) * (r - l), cy = bot - ((Math.max(-60, Math.min(60, prof)) + 60) / 120) * (bot - top);
        fig = fig.replace('</svg>', `<line x1="${cx}" y1="${top}" x2="${cx}" y2="${bot}" class="axis" style="stroke-dasharray:3 4;stroke-width:1"/><circle cx="${cx}" cy="${cy}" r="6" style="fill:var(--t-mock)"/></svg>`);
        q('[data-o="fig"]').innerHTML = fig;
        const be = k === 'lc' || k === 'sc' ? X + c : k === 'lp' || k === 'sp' ? X - c : X;
        q('[data-o="note"]').textContent = isOpt ? `Hòa vốn tại ${fmt(be, 1)}. ${k[0] === 'l' ? 'Lỗ tối đa = phí ' + fmt(c, 1) + '.' : 'Lời tối đa = phí ' + fmt(c, 1) + '.'}` : 'Forward không có phí, nên payoff = lợi nhuận.';
      };
      el.addEventListener('input', upd);
      el.addEventListener('change', upd);
      upd();
    },
  };

  window.LESSONS['DE-02'] = {
    moduleId: 'DE-02',
    calculator: 'Không cần máy tính',
    warmup: [
      'Ôn DE-01: nêu 3 khác biệt giữa phái sinh OTC và phái sinh niêm yết trên sàn.',
      'Nếu bạn là người nuôi gà sợ giá gà giảm, bạn sẽ ở vị thế long hay short trong hợp đồng kỳ hạn?',
      'Đoán trước: mua bảo hiểm xe máy giống quyền chọn mua hay quyền chọn bán? Vì sao?',
    ],
    sections,
    glossary,
    practice,
    widgets,
    slides: [],
    wrapup: [
      'Vẽ lại từ trí nhớ đồ thị lợi nhuận của long call và long put, đánh dấu điểm hòa vốn.',
      'Viết công thức payoff của 4 vị thế quyền chọn và lỗ tối đa của từng vị thế.',
      'Vì sao CDS được xếp vào contingent claim chứ không phải forward commitment?',
    ],
  };
}());
