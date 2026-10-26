// Bài giảng DE-09 - Option Replication Using Put-Call Parity (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t, frac, keys } = window.CFAH;

  const sections = [
    {
      title: '1. Bức tranh lớn',
      minutes: 3,
      html: `
<p>DE-08 cho biết giá quyền chọn nằm trong khoảng nào. Module này cho một quan hệ <b>chính xác</b>, không cần mô hình hay biến động: nếu biết giá call thì suy ra được giá put (cùng X, cùng T) và ngược lại.</p>
<div class="key">Bốn "viên gạch": <b>tài sản cơ sở, call, put, trái phiếu phi rủi ro</b>. Biết giá ba viên thì viên thứ tư bị khóa giá bởi arbitrage. Đó là ${t('pcp', 'put-call parity')}.</div>
<table class="plain"><thead><tr><th>LOS</th><th>Phần</th></tr></thead><tbody>
<tr><td>Giải thích put-call parity cho quyền chọn châu Âu</td><td>2, 3, 4, 6</td></tr>
<tr><td>Giải thích put-call forward parity cho quyền chọn châu Âu</td><td>5</td></tr>
</tbody></table>
<p class="tip">Toàn bộ module chỉ áp dụng cho quyền chọn <b>châu Âu</b>, cùng tài sản cơ sở, cùng giá thực hiện X và cùng ngày đáo hạn T. PV(X) = X / (1 + r)<sup>T</sup>.</p>`,
    },
    {
      title: '2. Fiduciary call và protective put',
      minutes: 12,
      html: `
<p>Xét hai danh mục:</p>
<ul>
<li>${t('fcall', 'Fiduciary call')}: long call (giá thực hiện X) + long trái phiếu zero-coupon phi rủi ro trả đúng X lúc đáo hạn. Chi phí: c<sub>0</sub> + PV(X).</li>
<li>${t('pput', 'Protective put')}: long tài sản + long put (giá thực hiện X). Chi phí: S<sub>0</sub> + p<sub>0</sub>.</li>
</ul>
<table class="plain"><thead><tr><th>Giá trị tại T</th><th>S<sub>T</sub> &lt; X</th><th>S<sub>T</sub> ≥ X</th></tr></thead><tbody>
<tr><td>Call</td><td>0</td><td>S<sub>T</sub> - X</td></tr>
<tr><td>Trái phiếu</td><td>X</td><td>X</td></tr>
<tr><td><b>Fiduciary call</b></td><td><b>X</b></td><td><b>S<sub>T</sub></b></td></tr>
<tr><td>Tài sản</td><td>S<sub>T</sub></td><td>S<sub>T</sub></td></tr>
<tr><td>Put</td><td>X - S<sub>T</sub></td><td>0</td></tr>
<tr><td><b>Protective put</b></td><td><b>X</b></td><td><b>S<sub>T</sub></b></td></tr>
</tbody></table>
<p>Cả hai đều trả max(S<sub>T</sub>, X) trong <b>mọi</b> kịch bản. Cùng dòng tiền thì cùng giá:</p>
<div class="formula">S<sub>0</sub> + p<sub>0</sub> = c<sub>0</sub> + PV(X) &nbsp;&nbsp;&nbsp;&nbsp; với PV(X) = ${frac('X', '(1 + r)<sup>T</sup>')}</div>
<div class="example"><div class="ex-h">Ví dụ 2.1 - Suy giá put từ giá call</div>
<p>Cổ phiếu không trả cổ tức giá 50. Call châu Âu X = 50, còn 1 năm, giá 6,00. Lãi suất phi rủi ro 4%. Put châu Âu cùng X và T phải có giá bao nhiêu?</p>
<details><summary>Xem lời giải</summary>
<p>PV(X) = 50 / 1,04 = 48,08. p<sub>0</sub> = c<sub>0</sub> + PV(X) - S<sub>0</sub> = 6,00 + 48,08 - 50 = <b>4,08</b>.</p>
${keys([['PV(X) cộng giá call, trừ giá cổ phiếu', '50 [÷] 1.04 [+] 6 [-] 50 [=]', '4.076923']])}
<p>Kiểm tra: protective put tốn 50 + 4,08 = 54,08; fiduciary call tốn 6 + 48,08 = 54,08.</p></details></div>
<p class="warn"><b>Bẫy:</b> dùng X thay cho PV(X). Với ví dụ trên sẽ ra p<sub>0</sub> = 6,00, sai 1,92.</p>`,
    },
    {
      title: '3. Vị thế tổng hợp (synthetic positions)',
      minutes: 10,
      html: `
<p>Put-call parity là một phương trình, nên có thể "chuyển vế" để tạo ra bất kỳ viên gạch nào từ ba viên còn lại. Quy tắc: <b>dấu + là long, dấu - là short</b>; chuyển sang vế kia thì đổi dấu. Trái phiếu dương là cho vay, âm là đi vay.</p>
<table class="plain"><thead><tr><th>Muốn tạo</th><th>Công thức</th><th>Cách làm</th></tr></thead><tbody>
<tr><td>${t('synth', 'Synthetic')} call</td><td>c<sub>0</sub> = S<sub>0</sub> + p<sub>0</sub> - PV(X)</td><td>Long tài sản, long put, vay PV(X)</td></tr>
<tr><td>Synthetic put</td><td>p<sub>0</sub> = c<sub>0</sub> - S<sub>0</sub> + PV(X)</td><td>Long call, bán khống tài sản, cho vay PV(X)</td></tr>
<tr><td>Synthetic tài sản</td><td>S<sub>0</sub> = c<sub>0</sub> - p<sub>0</sub> + PV(X)</td><td>Long call, short put, cho vay PV(X)</td></tr>
<tr><td>Synthetic trái phiếu</td><td>PV(X) = S<sub>0</sub> + p<sub>0</sub> - c<sub>0</sub></td><td>Long tài sản, long put, short call</td></tr>
<tr><td>Synthetic short call</td><td>-c<sub>0</sub> = -S<sub>0</sub> - p<sub>0</sub> + PV(X)</td><td>Bán khống tài sản, short put, cho vay PV(X)</td></tr>
<tr><td>Synthetic short put</td><td>-p<sub>0</sub> = -c<sub>0</sub> + S<sub>0</sub> - PV(X)</td><td>Short call, long tài sản, vay PV(X)</td></tr>
</tbody></table>
<h4>Danh mục phi rủi ro</h4>
<p>Dòng thứ tư rất hay gặp trong đề: <b>long tài sản + long put + short call</b> (cùng X) luôn trả đúng X tại T, bất kể giá. Danh mục này phi rủi ro nên phải sinh lợi đúng bằng r. Lý do: put chặn giá dưới ở X, short call chặn giá trên ở X, nên giá trị bị "kẹp" đúng tại X.</p>
<p class="tip">Long call + short put (cùng X, cùng T) có payoff S<sub>T</sub> - X: giống hệt một <b>long forward</b> với giá kỳ hạn X. Đây là cầu nối sang phần 5.</p>`,
    },
    {
      title: '4. Arbitrage khi put-call parity bị vi phạm',
      minutes: 10,
      html: `
<p>Khi hai vế không bằng nhau: <b>mua vế rẻ, bán vế đắt</b>. Vì hai vế trả cùng một dòng tiền tại T, phần chênh lệch nhận được hôm nay là lời chắc chắn.</p>
<div class="example"><div class="ex-h">Ví dụ 4.1 - Put bị định giá thấp</div>
<p>Vẫn dữ liệu Ví dụ 2.1 (S<sub>0</sub> = 50, X = 50, T = 1, r = 4%, c<sub>0</sub> = 6,00), nhưng put đang giao dịch ở 3,50 thay vì 4,08.</p>
<details><summary>Xem lời giải</summary>
<p>Protective put = 50 + 3,50 = 53,50; fiduciary call = 6,00 + 48,08 = 54,08. Protective put rẻ hơn: mua protective put, bán fiduciary call.</p>
<table class="plain"><thead><tr><th>Bước</th><th>t = 0</th><th>T: S<sub>T</sub> &lt; 50</th><th>T: S<sub>T</sub> ≥ 50</th></tr></thead><tbody>
<tr><td>Mua cổ phiếu</td><td>-50,00</td><td>S<sub>T</sub></td><td>S<sub>T</sub></td></tr>
<tr><td>Mua put</td><td>-3,50</td><td>50 - S<sub>T</sub></td><td>0</td></tr>
<tr><td>Bán call</td><td>+6,00</td><td>0</td><td>-(S<sub>T</sub> - 50)</td></tr>
<tr><td>Vay PV(X)</td><td>+48,08</td><td>-50</td><td>-50</td></tr>
<tr><td><b>Tổng</b></td><td><b>+0,58</b></td><td><b>0</b></td><td><b>0</b></td></tr>
</tbody></table>
<p>Thu ngay 0,58 = 54,08 - 53,50 và không còn nghĩa vụ nào tại T.</p></details></div>
<div class="key">Cách xử lý nhanh: tính giá lý thuyết của công cụ bị nghi lệch giá bằng parity. Công cụ đó rẻ thì <b>mua nó</b> và bán vị thế tổng hợp của nó; đắt thì làm ngược lại.</div>`,
    },
    {
      title: '5. Put-call forward parity',
      minutes: 10,
      html: `
<p>Thay vì nắm tài sản ngay, ta có thể tạo ${t('synasset', 'tài sản tổng hợp')} bằng <b>long forward</b> (giá F<sub>0</sub>(T)) + <b>trái phiếu</b> trả F<sub>0</sub>(T) lúc T. Tại T, tiền trái phiếu vừa đủ trả cho forward và ta nhận tài sản trị giá S<sub>T</sub>. Chi phí hôm nay là PV(F<sub>0</sub>(T)), vì forward không tốn tiền khi ký.</p>
<p>Thay S<sub>0</sub> trong put-call parity bằng PV(F<sub>0</sub>(T)) được ${t('pcfp', 'put-call forward parity')}:</p>
<div class="formula">F<sub>0</sub>(T)(1 + r)<sup>-T</sup> + p<sub>0</sub> = c<sub>0</sub> + X(1 + r)<sup>-T</sup> &nbsp;&nbsp;&nbsp;&nbsp; hay &nbsp;&nbsp;&nbsp;&nbsp; c<sub>0</sub> - p<sub>0</sub> = ${frac('F<sub>0</sub>(T) - X', '(1 + r)<sup>T</sup>')}</div>
<ul>
<li>Nếu tài sản không có lợi ích/chi phí nắm giữ, F<sub>0</sub>(T) = S<sub>0</sub>(1 + r)<sup>T</sup> nên PV(F<sub>0</sub>(T)) = S<sub>0</sub>: quay về put-call parity thông thường.</li>
<li>Nếu tài sản có cổ tức, F<sub>0</sub>(T) đã trừ sẵn lợi ích (DE-04), nên dùng dạng forward rất tiện: không phải tự điều chỉnh S<sub>0</sub>.</li>
<li>Khi X = F<sub>0</sub>(T): c<sub>0</sub> = p<sub>0</sub>. Long call + short put khi đó là một long forward không tốn chi phí.</li>
</ul>
<div class="example"><div class="ex-h">Ví dụ 5.1</div>
<p>Giá kỳ hạn 6 tháng của một tài sản là 81,20. Call châu Âu X = 80, cùng kỳ hạn, giá 5,50. Lãi suất phi rủi ro 3%. Tìm giá put châu Âu cùng X và T.</p>
<details><summary>Xem lời giải</summary>
<p>PV(F - X) = (81,20 - 80) / 1,03<sup>0,5</sup> = 1,20 / 1,0149 = 1,18. p<sub>0</sub> = c<sub>0</sub> - PV(F - X) = 5,50 - 1,18 = <b>4,32</b>.</p>
${keys([['Chênh lệch F - X chiết khấu 6 tháng', '1.2 [÷] 1.03 [y^x] 0.5 [=]', '1.182395'], ['Giá put', '[+/-] [+] 5.5 [=]', '4.317605']])}</details></div>
<div class="example"><div class="ex-h">Ví dụ 5.2 - Cổ phiếu có cổ tức</div>
<p>Cổ phiếu giá 50, giá trị hiện tại của cổ tức trả trong năm là 1. r = 5%, call châu Âu X = 50 kỳ hạn 1 năm giá 4,00. Giá put?</p>
<details><summary>Xem lời giải</summary>
<p>F<sub>0</sub>(1) = (50 - 1) × 1,05 = 51,45, nên PV(F) = 49. p<sub>0</sub> = 4,00 - 49 + 50/1,05 = 4,00 - 49 + 47,62 = <b>2,62</b>. Nếu bỏ qua cổ tức sẽ ra 1,62: thấp hơn đúng 1, vì cổ tức làm put có giá trị hơn.</p></details></div>`,
    },
    {
      title: '6. Ứng dụng: protective put, covered call và giá trị công ty',
      minutes: 7,
      html: `
<h4>Protective put và covered call</h4>
<p>DE-03 đã giới thiệu hai chiến lược này. Put-call parity cho thấy mỗi chiến lược tương đương một tổ hợp khác:</p>
<table class="plain"><thead><tr><th>Chiến lược</th><th>Tương đương</th><th>Ý nghĩa</th></tr></thead><tbody>
<tr><td>Protective put: S + p</td><td>c + PV(X)</td><td>Như giữ trái phiếu an toàn và một quyền mua: có sàn X, giữ phần tăng giá</td></tr>
<tr><td>${t('ccall', 'Covered call')}: S - c</td><td>PV(X) - p</td><td>Như giữ trái phiếu và <b>bán put</b>: thu nhập cố định, chịu rủi ro giảm giá</td></tr>
</tbody></table>
<p>Ví dụ 2.1: covered call tốn 50 - 6,00 = 44,00, đúng bằng 48,08 - 4,08 = 44,00.</p>
<h4>Giá trị công ty dưới góc nhìn quyền chọn</h4>
<p>Công ty có tài sản trị giá V<sub>T</sub> và khoản nợ zero-coupon mệnh giá D đến hạn tại T. Cổ đông chịu trách nhiệm hữu hạn: nếu V<sub>T</sub> &lt; D thì giao công ty cho chủ nợ và nhận 0.</p>
<ul>
<li><b>Vốn chủ sở hữu</b> = max(0, V<sub>T</sub> - D): một <b>call</b> trên tài sản công ty với giá thực hiện D.</li>
<li><b>Nợ</b> = min(V<sub>T</sub>, D) = D - max(0, D - V<sub>T</sub>): trái phiếu phi rủi ro <b>trừ</b> một <b>put</b> mà chủ nợ đã bán cho cổ đông.</li>
<li>Parity: V<sub>0</sub> = c<sub>0</sub> + PV(D) - p<sub>0</sub> = vốn chủ + nợ. Giá trị put chính là "chi phí" rủi ro tín dụng.</li>
</ul>
<div class="example"><div class="ex-h">Ví dụ 6.1</div>
<p>Tài sản công ty trị giá 100, nợ zero-coupon mệnh giá 80 đáo hạn sau 1 năm, r = 5%. Put trên tài sản công ty (X = 80, T = 1) trị giá 3. Tính giá trị nợ và vốn chủ.</p>
<details><summary>Xem lời giải</summary>
<p>Nợ = 80/1,05 - 3 = 76,19 - 3 = <b>73,19</b>. Vốn chủ = 100 - 73,19 = <b>26,81</b>. Lợi suất của nợ = 80/73,19 - 1 = 9,30%, cao hơn r = 5% do chủ nợ đã bán put (chịu rủi ro vỡ nợ).</p></details></div>`,
    },
    {
      title: '7. Tóm tắt và bẫy thường gặp',
      minutes: 3,
      html: `
<table class="plain"><thead><tr><th>Chủ đề</th><th>Nhớ</th></tr></thead><tbody>
<tr><td>Put-call parity</td><td>S<sub>0</sub> + p<sub>0</sub> = c<sub>0</sub> + PV(X): protective put = fiduciary call</td></tr>
<tr><td>Điều kiện</td><td>Châu Âu, cùng tài sản, cùng X, cùng T</td></tr>
<tr><td>Vị thế tổng hợp</td><td>Chuyển vế đổi dấu; trái phiếu + là cho vay, - là đi vay</td></tr>
<tr><td>Danh mục phi rủi ro</td><td>Long tài sản + long put + short call = trái phiếu trả X</td></tr>
<tr><td>Arbitrage</td><td>Mua vế rẻ, bán vế đắt; lời hôm nay = chênh lệch hai vế</td></tr>
<tr><td>Put-call forward parity</td><td>PV(F<sub>0</sub>(T)) + p<sub>0</sub> = c<sub>0</sub> + PV(X); X = F<sub>0</sub>(T) thì c<sub>0</sub> = p<sub>0</sub></td></tr>
<tr><td>Covered call</td><td>S - c = PV(X) - p: như bán put có bảo đảm bằng tiền</td></tr>
<tr><td>Công ty</td><td>Vốn chủ = call trên tài sản; nợ = trái phiếu phi rủi ro - put</td></tr>
<tr><td>Bẫy hay gặp</td><td>Dùng X thay PV(X); quên chiết khấu F - X; nhầm dấu khi chuyển vế</td></tr>
</tbody></table>
<p>Tiếp theo: tab <b>Luyện tập</b> - 10 câu. DE-10 dùng mô hình nhị thức để tìm <b>giá riêng</b> của call và put, và kiểm tra lại parity.</p>`,
    },
  ];

  const glossary = {
    pcp: ['Put-call parity', 'Ngang giá quyền chọn mua - bán', 'Quan hệ S0 + p0 = c0 + PV(X) giữa quyền chọn châu Âu cùng X và T.'],
    fcall: ['Fiduciary call', 'Call ủy thác', 'Long call cộng trái phiếu zero-coupon trả X khi đáo hạn; giá trị tại T là max(ST, X).'],
    pput: ['Protective put', 'Put bảo vệ', 'Long tài sản cộng long put; giá trị tại T là max(ST, X).'],
    synth: ['Synthetic position', 'Vị thế tổng hợp', 'Tổ hợp các công cụ khác tạo ra cùng payoff với một công cụ, suy ra từ put-call parity.'],
    synasset: ['Synthetic asset', 'Tài sản tổng hợp', 'Long forward cộng trái phiếu trả F0(T) tại T; tương đương nắm tài sản.'],
    pcfp: ['Put-call forward parity', 'Ngang giá quyền chọn - kỳ hạn', 'F0(T)(1 + r)^-T + p0 = c0 + X(1 + r)^-T: dùng forward thay cho tài sản giao ngay.'],
    ccall: ['Covered call', 'Bán call có tài sản bảo đảm', 'Long tài sản và short call; tương đương long trái phiếu PV(X) và short put.'],
  };

  const practice = [
    { q: 'Cổ phiếu không trả cổ tức giá 40. Call châu Âu X = 40 còn 1 năm giá 4,50, r = 5%. Theo put-call parity, giá put châu Âu cùng X và T gần nhất với:', choices: ['2,60', '4,50', '6,40'], answer: 0, explain: 'p0 = c0 + PV(X) - S0 = 4,50 + 40/1,05 - 40 = 2,60. Lựa chọn 4,50 cho rằng call ATM và put ATM bằng giá (chỉ đúng khi X = F0(T)). Lựa chọn 6,40 đảo dấu: c0 + S0 - PV(X).' },
    { q: 'Vị thế nào sau đây tạo ra một synthetic put?', choices: ['Long call, long tài sản, vay PV(X)', 'Long call, bán khống tài sản, cho vay PV(X)', 'Short call, long tài sản, cho vay PV(X)'], answer: 1, explain: 'p0 = c0 - S0 + PV(X): long call, short tài sản, long trái phiếu (cho vay). Phương án long tài sản, vay PV(X) sai dấu tài sản và trái phiếu. Phương án short call, long tài sản đảo dấu của call và tài sản.' },
    { q: 'Theo put-call parity, danh mục nào sau đây phi rủi ro?', choices: ['Long call, long put, short tài sản', 'Long tài sản, long call, short trái phiếu', 'Long tài sản, long put, short call'], answer: 2, explain: 'S + p - c = PV(X): put chặn dưới, short call chặn trên, giá trị tại T luôn bằng X. Hai danh mục còn lại vẫn còn phụ thuộc giá tài sản.' },
    { q: 'Fiduciary call gồm:', choices: ['Long call và trái phiếu zero-coupon trả X khi đáo hạn', 'Long put và long tài sản cơ sở', 'Long call và short put cùng giá thực hiện'], answer: 0, explain: 'Fiduciary call = call + trái phiếu trả X, trị giá max(ST, X) tại T. Long put và long tài sản cơ sở là protective put. Long call và short put cùng giá thực hiện là synthetic long forward.' },
    { q: 'Cổ phiếu giá 60, r = 4%. Call và put châu Âu X = 60, còn 6 tháng, có giá lần lượt 5,00 và 3,00. Chiến lược arbitrage đúng là:', choices: ['Bán put, bán khống cổ phiếu, mua call, cho vay PV(X)', 'Mua put, mua cổ phiếu, bán call, vay PV(X); thu ngay khoảng 0,83', 'Không có arbitrage vì giá call lớn hơn giá put'], answer: 1, explain: 'Giá put lý thuyết = 5 + 60/1,04^0,5 - 60 = 3,83 > 3,00: put rẻ, protective put (63,00) rẻ hơn fiduciary call (63,83). Mua vế rẻ, bán vế đắt: thu 0,83. Phương án bán put, mua call làm ngược chiều nên lỗ. Phương án "không có arbitrage": với X = S0, call đắt hơn put là bình thường.' },
    { q: 'Giá kỳ hạn 1 năm của một tài sản là 102. Put châu Âu X = 100 kỳ hạn 1 năm giá 5,00, r = 4%. Theo put-call forward parity, giá call châu Âu cùng X và T gần nhất với:', choices: ['7,00', '3,08', '6,92'], answer: 2, explain: 'c0 = p0 + (F - X)/(1 + r)^T = 5 + 2/1,04 = 6,92. Lựa chọn 7,00 quên chiết khấu F - X. Lựa chọn 3,08 trừ thay vì cộng (nhầm dấu).' },
    { q: 'Nếu giá thực hiện X bằng giá kỳ hạn F0(T) của tài sản, thì chênh lệch c0 - p0 của call và put châu Âu cùng kỳ hạn bằng:', choices: ['S0 - X', '0', 'PV(F0(T))'], answer: 1, explain: 'c0 - p0 = PV(F0(T) - X) = 0 khi X = F0(T). Lựa chọn S0 - X nhầm với giá trị thực hiện. Lựa chọn PV(F0(T)) là chi phí của tài sản tổng hợp, không phải c0 - p0.' },
    { q: 'Theo put-call parity, covered call (long tài sản + short call) tương đương với:', choices: ['Short put và long trái phiếu trả X', 'Long put và short trái phiếu trả X', 'Long call và long trái phiếu trả X'], answer: 0, explain: 'S - c = PV(X) - p: long trái phiếu, short put. Long put và short trái phiếu đảo ngược toàn bộ dấu. Long call và long trái phiếu là fiduciary call (tương đương protective put).' },
    { q: 'Dưới góc nhìn quyền chọn, chủ nợ của một công ty có nợ zero-coupon mệnh giá D có vị thế tương đương:', choices: ['Long call trên tài sản công ty với giá thực hiện D', 'Long trái phiếu phi rủi ro trả D và short put trên tài sản công ty', 'Long put trên tài sản công ty và short trái phiếu phi rủi ro'], answer: 1, explain: 'Nợ = min(VT, D) = D - max(0, D - VT): trái phiếu phi rủi ro trừ một put đã bán cho cổ đông. Long call trên tài sản công ty là vị thế của cổ đông. Long put và short trái phiếu đảo dấu.' },
    { q: 'Cổ phiếu giá 50, giá trị hiện tại của cổ tức trả trước đáo hạn là 1. Call châu Âu X = 50, kỳ hạn 1 năm giá 4,00, r = 5%. Giá put châu Âu cùng X và T gần nhất với:', choices: ['1,62', '4,00', '2,62'], answer: 2, explain: 'F0(1) = (50 - 1) x 1,05 = 51,45, PV(F) = 49. p0 = c0 - PV(F) + PV(X) = 4 - 49 + 47,62 = 2,62. Lựa chọn 1,62 bỏ qua cổ tức (dùng S0 = 50). Lựa chọn 4,00 cho rằng call và put ATM bằng giá.' },
  ];

  window.LESSONS['DE-09'] = {
    moduleId: 'DE-09',
    calculator: 'BA II Plus',
    warmup: [
      'Ôn DE-08: cận dưới của call và put châu Âu là gì? Vì sao dùng PV(X)?',
      'Ôn DE-04: long tài sản + short forward tương đương với công cụ nào?',
      'Đoán trước: ghép một cổ phiếu với một put bảo vệ, payoff khi đáo hạn trông giống tổ hợp nào khác?',
    ],
    sections,
    glossary,
    practice,
    widgets: {},
    slides: [],
    wrapup: [
      'Viết put-call parity, giải thích bằng bảng payoff của fiduciary call và protective put.',
      'Tạo synthetic call và synthetic tài sản từ parity, nói rõ long/short từng thành phần.',
      'Viết put-call forward parity và giải thích vì sao khi X = F0(T) thì c0 = p0.',
    ],
  };
}());
