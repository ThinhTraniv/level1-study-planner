// Bài giảng DE-10 - Valuing a Derivative Using a One-Period Binomial Model (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t, frac, keys } = window.CFAH;

  const sections = [
    {
      title: '1. Bức tranh lớn',
      minutes: 3,
      html: `
<p>QM-04 (phần 7c) đã giới thiệu ý tưởng: dùng cổ phiếu và tiền vay để sao chép một call trong mô hình một kỳ. DE-08 cho cận giá, DE-09 cho quan hệ giữa call và put. Module này đi đến <b>giá cụ thể</b> của từng quyền chọn, bằng hai cách cho cùng một kết quả:</p>
<div class="key"><b>Cách 1 - Sao chép:</b> tìm danh mục (h đơn vị tài sản + vay/cho vay) có payoff giống hệt quyền chọn; giá quyền chọn = chi phí danh mục.<br><b>Cách 2 - Trung lập rủi ro:</b> tính payoff kỳ vọng theo ${t('rnp', 'xác suất trung lập rủi ro')} π, rồi chiết khấu ở lãi suất phi rủi ro.</div>
<table class="plain"><thead><tr><th>LOS</th><th>Phần</th></tr></thead><tbody>
<tr><td>Giải thích cách định giá phái sinh bằng mô hình nhị thức một kỳ</td><td>2, 3, 4, 6</td></tr>
<tr><td>Mô tả khái niệm trung lập rủi ro (risk neutrality) trong định giá phái sinh</td><td>5</td></tr>
</tbody></table>`,
    },
    {
      title: '2. Thiết lập mô hình nhị thức một kỳ',
      minutes: 6,
      html: `
<p>Trong ${t('binom', 'mô hình nhị thức một kỳ (one-period binomial model)')}, sau một kỳ giá tài sản chỉ có thể đi theo hai hướng:</p>
<ul>
<li>Lên: S<sub>1</sub><sup>u</sup> = u × S<sub>0</sub>, với u &gt; 1 là ${t('ud', 'hệ số tăng (up factor)')}.</li>
<li>Xuống: S<sub>1</sub><sup>d</sup> = d × S<sub>0</sub>, với d &lt; 1 là hệ số giảm.</li>
</ul>
<p>Ví dụ xuyên suốt module: S<sub>0</sub> = 50, u = 1,20, d = 0,90, lãi suất phi rủi ro r = 5% cho một kỳ (1 năm), quyền chọn châu Âu X = 50.</p>
<table class="plain"><thead><tr><th>Trạng thái</th><th>Giá cổ phiếu</th><th>Call X = 50</th><th>Put X = 50</th></tr></thead><tbody>
<tr><td>Lên</td><td>50 × 1,20 = 60</td><td>c<sub>1</sub><sup>u</sup> = 10</td><td>p<sub>1</sub><sup>u</sup> = 0</td></tr>
<tr><td>Xuống</td><td>50 × 0,90 = 45</td><td>c<sub>1</sub><sup>d</sup> = 0</td><td>p<sub>1</sub><sup>d</sup> = 5</td></tr>
</tbody></table>
<p class="warn"><b>Điều kiện không chênh lệch giá:</b> d &lt; 1 + r &lt; u. Nếu 1 + r ≥ u, cổ phiếu luôn sinh lợi không hơn trái phiếu: bán khống cổ phiếu, cho vay tiền thu được là lời chắc. Nếu 1 + r ≤ d, vay tiền mua cổ phiếu là lời chắc. Ví dụ: 0,90 &lt; 1,05 &lt; 1,20 nên mô hình hợp lệ.</p>`,
    },
    {
      title: '3. Sao chép một call',
      minutes: 12,
      html: `
<p>Lập danh mục: <b>mua h cổ phiếu</b> và <b>vay</b> một khoản B (giá trị hiện tại) ở lãi suất r. Chọn h và B sao cho danh mục trả đúng như call ở cả hai trạng thái:</p>
<div class="formula">Lên: 60h - 1,05B = 10 &nbsp;&nbsp;&nbsp;&nbsp; Xuống: 45h - 1,05B = 0</div>
<p>Trừ hai phương trình cho nhau, khoản nợ biến mất, còn lại ${t('hr', 'hedge ratio')}:</p>
<div class="formula">h = ${frac('c<sub>1</sub><sup>u</sup> - c<sub>1</sub><sup>d</sup>', 'S<sub>1</sub><sup>u</sup> - S<sub>1</sub><sup>d</sup>')} = ${frac('10 - 0', '60 - 45')} = 0,6667</div>
<p>Từ trạng thái xuống: 1,05B = 45 × 0,6667 - 0 = 30, nên B = 30/1,05 = 28,57. Giá call bằng chi phí danh mục:</p>
<div class="formula">c<sub>0</sub> = hS<sub>0</sub> - PV(hS<sub>1</sub><sup>d</sup> - c<sub>1</sub><sup>d</sup>) = 0,6667 × 50 - 28,57 = 33,33 - 28,57 = <b>4,76</b></div>
<div class="example"><div class="ex-h">Ví dụ 3.1 - Kiểm tra danh mục sao chép</div>
<p>Kiểm tra rằng 0,6667 cổ phiếu và khoản vay 28,57 thật sự cho payoff giống call.</p>
<details><summary>Xem lời giải</summary>
<table class="plain"><thead><tr><th></th><th>Giá lên (60)</th><th>Giá xuống (45)</th></tr></thead><tbody>
<tr><td>0,6667 cổ phiếu</td><td>40,00</td><td>30,00</td></tr>
<tr><td>Trả nợ 28,57 × 1,05</td><td>-30,00</td><td>-30,00</td></tr>
<tr><td><b>Danh mục</b></td><td><b>10,00</b></td><td><b>0</b></td></tr>
<tr><td>Call</td><td>10</td><td>0</td></tr>
</tbody></table></details></div>
<h4>Cùng ý tưởng, nhìn dưới góc phòng hộ</h4>
<p>Đảo lại: <b>mua h cổ phiếu và bán 1 call</b>. Danh mục trị giá 40 - 10 = 30 khi giá lên và 30 - 0 = 30 khi giá xuống: <b>phi rủi ro</b>. Nó tốn 33,33 - c<sub>0</sub> hôm nay và phải sinh lợi đúng r:</p>
<div class="formula">(33,33 - c<sub>0</sub>) × 1,05 = 30 &nbsp;&nbsp;⇒&nbsp;&nbsp; c<sub>0</sub> = 33,33 - 28,57 = 4,76</div>
<p class="tip">h chính là số cổ phiếu cần nắm để phòng hộ 1 call bán ra. Với call, 0 &lt; h &lt; 1: call giống một vị thế cổ phiếu "có đòn bẩy" (mua một phần cổ phiếu bằng tiền vay).</p>`,
    },
    {
      title: '4. Sao chép một put và kiểm tra put-call parity',
      minutes: 10,
      html: `
<p>Cùng công thức hedge ratio, áp dụng cho put X = 50 (p<sub>1</sub><sup>u</sup> = 0, p<sub>1</sub><sup>d</sup> = 5):</p>
<div class="formula">h = ${frac('0 - 5', '60 - 45')} = -0,3333</div>
<p>h âm nghĩa là <b>bán khống</b> 1/3 cổ phiếu. Tiền thu được cùng với một khoản <b>cho vay</b> L sao cho danh mục khớp put:</p>
<ul>
<li>Lên: -0,3333 × 60 + 1,05L = 0 ⇒ 1,05L = 20 ⇒ L = 19,05.</li>
<li>Xuống: -0,3333 × 45 + 1,05 × 19,05 = -15 + 20 = 5. Khớp p<sub>1</sub><sup>d</sup>.</li>
</ul>
<div class="formula">p<sub>0</sub> = hS<sub>0</sub> + L = -0,3333 × 50 + 19,05 = -16,67 + 19,05 = <b>2,38</b></div>
<table class="plain"><thead><tr><th></th><th>Call</th><th>Put</th></tr></thead><tbody>
<tr><td>Hedge ratio h</td><td>+0,6667 (mua cổ phiếu)</td><td>-0,3333 (bán khống)</td></tr>
<tr><td>Trái phiếu</td><td>Vay 28,57</td><td>Cho vay 19,05</td></tr>
<tr><td>Giá</td><td>4,76</td><td>2,38</td></tr>
</tbody></table>
<div class="example"><div class="ex-h">Ví dụ 4.1 - Kiểm tra bằng put-call parity (DE-09)</div>
<p>Giá call và put từ mô hình có thỏa S<sub>0</sub> + p<sub>0</sub> = c<sub>0</sub> + PV(X) không?</p>
<details><summary>Xem lời giải</summary>
<p>S<sub>0</sub> + p<sub>0</sub> = 50 + 2,38 = 52,38. c<sub>0</sub> + PV(X) = 4,76 + 50/1,05 = 4,76 + 47,62 = 52,38. Thỏa mãn. Mô hình nhị thức không bao giờ mâu thuẫn với parity, vì cả hai đều dựa trên không chênh lệch giá.</p>
<p>Lưu ý: h<sub>call</sub> - h<sub>put</sub> = 0,6667 - (-0,3333) = 1. Call trừ put tương đương 1 cổ phiếu cộng trái phiếu, đúng như synthetic tài sản ở DE-09.</p></details></div>`,
    },
    {
      title: '5. Xác suất trung lập rủi ro và khái niệm trung lập rủi ro',
      minutes: 12,
      html: `
<p>Giải hệ phương trình sao chép tổng quát rồi sắp xếp lại, giá quyền chọn luôn viết được dưới dạng:</p>
<div class="formula">c<sub>0</sub> = ${frac('π × c<sub>1</sub><sup>u</sup> + (1 - π) × c<sub>1</sub><sup>d</sup>', '1 + r')} &nbsp;&nbsp;&nbsp;&nbsp; với &nbsp;&nbsp; π = ${frac('1 + r - d', 'u - d')}</div>
<div class="example"><div class="ex-h">Ví dụ 5.1 - Định giá nhanh bằng π</div>
<p>Dùng π để tính lại call và put X = 50 trong ví dụ xuyên suốt.</p>
<details><summary>Xem lời giải</summary>
<p>π = (1,05 - 0,90)/(1,20 - 0,90) = 0,15/0,30 = <b>0,50</b>.</p>
<p>c<sub>0</sub> = (0,5 × 10 + 0,5 × 0)/1,05 = <b>4,76</b>. p<sub>0</sub> = (0,5 × 0 + 0,5 × 5)/1,05 = <b>2,38</b>. Trùng với kết quả sao chép.</p>
${keys([['Tính π', '1.05 [-] 0.9 [=] [÷] 0.3 [=]', '0.5'], ['Giá call', '0.5 [×] 10 [÷] 1.05 [=]', '4.761905'], ['Giá put', '0.5 [×] 5 [÷] 1.05 [=]', '2.380952']])}</details></div>
<h4>π có ý nghĩa gì?</h4>
<ul>
<li>π <b>không phải</b> xác suất thực tế giá tăng. Nó là xác suất "giả định" làm cho lợi suất kỳ vọng của cổ phiếu đúng bằng r: 0,5 × 60 + 0,5 × 45 = 52,5 = 50 × 1,05.</li>
<li>π chỉ phụ thuộc u, d và r. Xác suất thực tế, lợi suất kỳ vọng và khẩu vị rủi ro của nhà đầu tư <b>không xuất hiện</b> trong công thức.</li>
<li>${t('rn', 'Trung lập rủi ro (risk neutrality)')} trong định giá phái sinh nghĩa là: vì phái sinh có thể được phòng hộ hoàn toàn, ta được phép tính giá <b>như thể</b> mọi người trung lập rủi ro (dùng π và chiết khấu ở r). Nó <b>không</b> giả định nhà đầu tư thật sự trung lập rủi ro.</li>
</ul>
<div class="example"><div class="ex-h">Ví dụ 5.2 - Vì sao không dùng xác suất thực?</div>
<p>Giả sử xác suất thực tế giá tăng là 0,60. Một học viên tính giá call = (0,6 × 10)/1,05. Sai ở đâu?</p>
<details><summary>Xem lời giải</summary>
<p>Với xác suất 0,60, giá kỳ vọng của cổ phiếu là 0,6 × 60 + 0,4 × 45 = 54, tức lợi suất kỳ vọng 8% (gồm phần bù rủi ro). Payoff kỳ vọng của call là 6, và chiết khấu ở r cho 5,71: <b>sai</b>, cao hơn giá không chênh lệch giá 4,76.</p>
<p>Nếu đã dùng xác suất thực thì phải chiết khấu ở lãi suất có rủi ro của call. Lãi suất đó là 6/4,76 - 1 = <b>26%</b>, rất cao vì call là vị thế có đòn bẩy, và không ai biết trước con số này. Cách trung lập rủi ro tránh được bài toán đó: điều chỉnh xác suất thay vì điều chỉnh lãi suất chiết khấu.</p></details></div>
<p class="tip">Cùng logic với DE-04: giá forward không chứa phần bù rủi ro λ. Ở đây, giá quyền chọn không chứa xác suất thực tế.</p>
<div class="widget" data-widget="binTree"></div>`,
    },
    {
      title: '6. Khi giá thị trường lệch khỏi mô hình: arbitrage',
      minutes: 7,
      html: `
<p>Nếu call trên thị trường khác 4,76, danh mục "h cổ phiếu và trái phiếu" cho phép kiếm lời không rủi ro.</p>
<div class="example"><div class="ex-h">Ví dụ 6.1 - Call bị định giá cao (5,50)</div>
<details><summary>Xem lời giải</summary>
<p>Call đắt: <b>bán call</b>, mua danh mục sao chép (mua 0,6667 cổ phiếu, vay 28,57).</p>
<table class="plain"><thead><tr><th>Bước</th><th>t = 0</th><th>Giá lên</th><th>Giá xuống</th></tr></thead><tbody>
<tr><td>Bán 1 call</td><td>+5,50</td><td>-10</td><td>0</td></tr>
<tr><td>Mua 0,6667 cổ phiếu</td><td>-33,33</td><td>+40</td><td>+30</td></tr>
<tr><td>Vay ở 5%</td><td>+28,57</td><td>-30</td><td>-30</td></tr>
<tr><td><b>Tổng</b></td><td><b>+0,74</b></td><td><b>0</b></td><td><b>0</b></td></tr>
</tbody></table>
<p>Nhìn cách khác: bỏ ra 33,33 - 5,50 = 27,83 cho danh mục "mua h cổ phiếu, bán call", chắc chắn nhận 30. Lợi suất 30/27,83 - 1 = 7,78% &gt; r = 5%. Đó là ý "vay ở r, bán call, mua tài sản" trong đề thi.</p></details></div>
<div class="example"><div class="ex-h">Ví dụ 6.2 - Call bị định giá thấp (4,00)</div>
<details><summary>Xem lời giải</summary>
<p>Call rẻ: <b>mua call</b>, bán danh mục sao chép (bán khống 0,6667 cổ phiếu, cho vay 28,57). Dòng tiền hôm nay: -4,00 + 33,33 - 28,57 = <b>+0,76</b>; tại kỳ sau các khoản bù trừ hết về 0.</p></details></div>
<div class="key">Quy tắc: quyền chọn <b>đắt</b> hơn mô hình → bán quyền chọn, mua danh mục sao chép. <b>Rẻ</b> hơn → mua quyền chọn, bán danh mục sao chép. Lời hôm nay = |giá thị trường - giá mô hình|.</div>`,
    },
    {
      title: '7. Tóm tắt và bẫy thường gặp',
      minutes: 5,
      html: `
<table class="plain"><thead><tr><th>Chủ đề</th><th>Nhớ</th></tr></thead><tbody>
<tr><td>Cây một kỳ</td><td>S<sub>1</sub><sup>u</sup> = uS<sub>0</sub>, S<sub>1</sub><sup>d</sup> = dS<sub>0</sub>; điều kiện d &lt; 1 + r &lt; u</td></tr>
<tr><td>Hedge ratio</td><td>h = (V<sub>1</sub><sup>u</sup> - V<sub>1</sub><sup>d</sup>)/(S<sub>1</sub><sup>u</sup> - S<sub>1</sub><sup>d</sup>); call dương, put âm</td></tr>
<tr><td>Sao chép call</td><td>Mua h tài sản + vay PV(hS<sub>1</sub><sup>d</sup> - c<sub>1</sub><sup>d</sup>)</td></tr>
<tr><td>Sao chép put</td><td>Bán khống |h| tài sản + cho vay</td></tr>
<tr><td>Xác suất trung lập rủi ro</td><td>π = (1 + r - d)/(u - d); giá = payoff kỳ vọng theo π chiết khấu ở r</td></tr>
<tr><td>Trung lập rủi ro</td><td>Không phải giả định về nhà đầu tư; xác suất thực tế không ảnh hưởng giá</td></tr>
<tr><td>Kiểm tra</td><td>Giá call và put từ mô hình luôn thỏa put-call parity</td></tr>
<tr><td>Arbitrage</td><td>Đắt: bán quyền chọn, mua h tài sản bằng tiền vay. Rẻ: làm ngược lại</td></tr>
<tr><td>Bẫy hay gặp</td><td>Dùng xác suất thực; quên chiết khấu; dùng nhầm 1 - π; tính h bằng payoff chia S<sub>0</sub></td></tr>
</tbody></table>
<p>Tiếp theo: tab <b>Luyện tập</b> - 10 câu. Đây là module cuối của topic Derivatives: hãy ôn lại chuỗi DE-04 (forward), DE-08 (cận giá), DE-09 (parity), DE-10 (giá cụ thể).</p>`,
    },
  ];

  const glossary = {
    rnp: ['Risk-neutral probability (π)', 'Xác suất trung lập rủi ro', 'π = (1 + r - d)/(u - d): xác suất làm lợi suất kỳ vọng của tài sản bằng lãi suất phi rủi ro.'],
    binom: ['One-period binomial model', 'Mô hình nhị thức một kỳ', 'Mô hình giả định sau một kỳ giá tài sản chỉ lên (uS0) hoặc xuống (dS0).'],
    ud: ['Up factor (u), down factor (d)', 'Hệ số tăng, hệ số giảm', 'Tỷ lệ giá sau một kỳ so với giá hiện tại ở trạng thái lên (u > 1) và xuống (d < 1).'],
    hr: ['Hedge ratio', 'Tỷ lệ phòng hộ', 'h = chênh lệch payoff phái sinh / chênh lệch giá tài sản giữa hai trạng thái: số đơn vị tài sản trong danh mục sao chép.'],
    rn: ['Risk neutrality', 'Trung lập rủi ro', 'Định giá phái sinh như thể nhà đầu tư không đòi phần bù rủi ro: dùng π và chiết khấu ở r, không giả định họ thật sự trung lập rủi ro.'],
  };

  const practice = [
    { q: 'Trong mô hình nhị thức một kỳ, u = 1,15, d = 0,90 và lãi suất phi rủi ro một kỳ là 3%. Xác suất trung lập rủi ro của trạng thái giá lên là:', choices: ['0,52', '0,48', '0,60'], answer: 0, explain: 'π = (1,03 - 0,90)/(1,15 - 0,90) = 0,13/0,25 = 0,52. Lựa chọn 0,48 là 1 - π (xác suất trạng thái xuống). Lựa chọn 0,60 dùng (u - 1)/(u - d), bỏ qua lãi suất.' },
    { q: 'Cổ phiếu giá 80, sau một kỳ lên 100 hoặc xuống 64. Hedge ratio của call châu Âu X = 80 là:', choices: ['0,25', '0,56', '1,00'], answer: 1, explain: 'h = (20 - 0)/(100 - 64) = 0,56. Lựa chọn 0,25 chia payoff cho S0 (20/80). Lựa chọn 1,00 cho rằng cần nắm trọn 1 cổ phiếu.' },
    { q: 'Cổ phiếu giá 80, sau một kỳ lên 100 hoặc xuống 64, lãi suất phi rủi ro 4%. Giá call châu Âu X = 80 gần nhất với:', choices: ['10,67', '9,62', '10,26'], answer: 2, explain: 'π = (1,04 - 0,80)/(1,25 - 0,80) = 0,5333. c0 = 0,5333 x 20/1,04 = 10,26. Lựa chọn 10,67 quên chiết khấu. Lựa chọn 9,62 dùng xác suất 0,5 tùy tiện.' },
    { q: 'Cổ phiếu giá 80, sau một kỳ lên 100 hoặc xuống 64, lãi suất phi rủi ro 4%. Giá put châu Âu X = 80 gần nhất với:', choices: ['7,18', '7,47', '8,21'], answer: 0, explain: 'Put trả 16 ở trạng thái xuống: p0 = (1 - 0,5333) x 16/1,04 = 7,18. Kiểm tra parity: 10,26 - 7,18 = 3,08 = 80 - 80/1,04. Lựa chọn 7,47 quên chiết khấu. Lựa chọn 8,21 dùng nhầm π thay cho 1 - π.' },
    { q: 'Phát biểu nào về xác suất trung lập rủi ro là ĐÚNG?', choices: ['Đó là xác suất thực tế giá tài sản tăng', 'Đó là xác suất làm lợi suất kỳ vọng của tài sản bằng lãi suất phi rủi ro', 'Dùng nó đòi hỏi giả định mọi nhà đầu tư thật sự trung lập rủi ro'], answer: 1, explain: 'Theo π, E(S1) = S0(1 + r). Phương án "xác suất thực tế" sai: π khác xác suất thực. Phương án "mọi nhà đầu tư thật sự trung lập rủi ro" sai: định giá "như thể" trung lập rủi ro nhờ phòng hộ được, không cần nhà đầu tư thật sự trung lập rủi ro.' },
    { q: 'Trong mô hình nhị thức một kỳ, nếu xác suất THỰC TẾ của trạng thái giá lên tăng (S0, u, d, r không đổi), giá call theo mô hình sẽ:', choices: ['Tăng', 'Giảm', 'Không đổi'], answer: 2, explain: 'Giá chỉ phụ thuộc S0, u, d, r và X qua π = (1 + r - d)/(u - d). Xác suất thực tế không xuất hiện trong công thức.' },
    { q: 'Nếu một call đang được giao dịch ở giá cao hơn giá theo mô hình nhị thức, nhà đầu tư có thể kiếm lợi suất cao hơn lãi suất phi rủi ro bằng cách:', choices: ['Đầu tư ở lãi suất phi rủi ro, bán call và bán khống tài sản', 'Vay ở lãi suất phi rủi ro, mua call và mua tài sản', 'Vay ở lãi suất phi rủi ro, bán call và mua tài sản'], answer: 2, explain: 'Call đắt: bán call và mua danh mục sao chép (mua h tài sản bằng tiền vay). Phương án bán khống tài sản là chiều của put/call rẻ. Phương án vay để mua call và tài sản thì mua phải call đắt nên lỗ.' },
    { q: 'Danh mục sao chép một put châu Âu trong mô hình nhị thức một kỳ gồm:', choices: ['Bán khống một phần tài sản cơ sở và cho vay phi rủi ro', 'Mua một phần tài sản cơ sở và vay phi rủi ro', 'Mua một đơn vị tài sản cơ sở và bán một call'], answer: 0, explain: 'Hedge ratio của put âm: bán khống |h| tài sản và cho vay. Mua một phần tài sản và vay là danh mục sao chép call. Mua tài sản và bán call là covered call.' },
    { q: 'Cổ phiếu giá 80, lên 100 hoặc xuống 64, r = 4%. Danh mục gồm mua 0,5556 cổ phiếu và bán 1 call X = 80. Giá trị hôm nay của danh mục gần nhất với:', choices: ['35,56', '34,19', '44,44'], answer: 1, explain: 'Danh mục trị giá 0,5556 x 64 = 35,56 ở cả hai trạng thái (100 x 0,5556 - 20 cũng = 35,56), nên phi rủi ro: giá hôm nay = 35,56/1,04 = 34,19. Lựa chọn 35,56 quên chiết khấu. Lựa chọn 44,44 là giá trị phần cổ phiếu (0,5556 x 80), chưa trừ call.' },
    { q: 'Mô hình nhị thức một kỳ có u = 1,10, d = 0,95 và lãi suất phi rủi ro một kỳ 12%. Kết luận đúng là:', choices: ['Vay ở lãi suất phi rủi ro để mua cổ phiếu sẽ lời chắc chắn', 'Không có arbitrage vì u > 1 > d', 'Bán khống cổ phiếu và cho vay ở lãi suất phi rủi ro sẽ lời chắc chắn'], answer: 2, explain: '1 + r = 1,12 > u = 1,10: ngay cả khi giá lên, cổ phiếu vẫn sinh lợi kém trái phiếu, vi phạm d < 1 + r < u. Bán khống cổ phiếu, cho vay tiền: lời ở cả hai trạng thái. Vay để mua cổ phiếu là chiều đúng khi 1 + r < d. Phương án "không có arbitrage vì u > 1 > d" bỏ qua điều kiện so với 1 + r.' },
  ];

  // Widget: cây nhị phân một kỳ cho call và put.
  const widgets = {
    binTree(el) {
      el.innerHTML = `
        <div class="w-row"><label>Giá hôm nay S0: <b data-o="S">50</b><input type="range" min="20" max="100" step="1" value="50" data-i="S"></label>
        <label>Hệ số tăng u: <b data-o="u">1,20</b><input type="range" min="1.01" max="1.60" step="0.01" value="1.20" data-i="u"></label>
        <label>Hệ số giảm d: <b data-o="d">0,90</b><input type="range" min="0.50" max="0.99" step="0.01" value="0.90" data-i="d"></label></div>
        <div class="w-row"><label>Lãi suất r một kỳ: <b data-o="r">5%</b><input type="range" min="0" max="20" step="0.5" value="5" data-i="r"></label>
        <label>Giá thực hiện X: <b data-o="X">50</b><input type="range" min="20" max="100" step="1" value="50" data-i="X"></label><label></label></div>
        <div class="w-out"><div data-o="tree"></div><div class="w-price" data-o="p"></div><div class="w-note" data-o="note"></div></div>`;
      const q = s => el.querySelector(s);
      const vn = (x, k = 2) => x.toFixed(k).replace('.', ',');
      const upd = () => {
        const S = +q('[data-i="S"]').value, u = +q('[data-i="u"]').value, d = +q('[data-i="d"]').value, r = +q('[data-i="r"]').value / 100, X = +q('[data-i="X"]').value;
        const Su = S * u, Sd = S * d, cu = Math.max(0, Su - X), cd = Math.max(0, Sd - X), pu = Math.max(0, X - Su), pd = Math.max(0, X - Sd);
        const pi = (1 + r - d) / (u - d), c = (pi * cu + (1 - pi) * cd) / (1 + r), p = (pi * pu + (1 - pi) * pd) / (1 + r);
        const hc = (cu - cd) / (Su - Sd), hp = (pu - pd) / (Su - Sd);
        q('[data-o="S"]').textContent = S; q('[data-o="u"]').textContent = vn(u); q('[data-o="d"]').textContent = vn(d);
        q('[data-o="r"]').textContent = `${vn(r * 100, 1)}%`; q('[data-o="X"]').textContent = X;
        const node = (x, y, cls, a, b) => `<circle cx="${x}" cy="${y}" r="10" class="sv-node ${cls}"/><text x="${x + 18}" y="${y - 4}" text-anchor="start" class="sv-txt">${a}</text><text x="${x + 18}" y="${y + 18}" text-anchor="start" class="sv-muted">${b}</text>`;
        q('[data-o="tree"]').innerHTML = `<svg viewBox="0 0 520 200" class="sv" style="max-height:none;max-width:520px" role="img" aria-label="Cây nhị phân một kỳ">
          <line x1="80" y1="100" x2="300" y2="40" class="sv-up"/><line x1="80" y1="100" x2="300" y2="160" class="sv-down"/>
          <text x="180" y="54" class="sv-muted" text-anchor="end">π = ${vn(pi, 4)}</text><text x="180" y="160" class="sv-muted" text-anchor="end">1 - π = ${vn(1 - pi, 4)}</text>
          <circle cx="80" cy="100" r="10" class="sv-node"/><text x="80" y="132" class="sv-txt">S = ${vn(S)}</text><text x="80" y="152" class="sv-muted">c = ${vn(c)} · p = ${vn(p)}</text>
          ${node(300, 40, 'up', `S = ${vn(Su)}`, `c = ${vn(cu)} · p = ${vn(pu)}`)}
          ${node(300, 160, 'down', `S = ${vn(Sd)}`, `c = ${vn(cd)} · p = ${vn(pd)}`)}</svg>`;
        const ok = d < 1 + r && 1 + r < u;
        q('[data-o="p"]').textContent = ok ? `Call = ${vn(c)} · Put = ${vn(p)}` : 'Vi phạm điều kiện d < 1 + r < u: có arbitrage, mô hình không dùng được';
        q('[data-o="note"]').textContent = ok ? `Hedge ratio: call ${vn(hc, 4)}, put ${vn(hp, 4)}. Kiểm tra parity: S0 + p = ${vn(S + p)}; c + PV(X) = ${vn(c + X / (1 + r))}.` : (1 + r >= u ? 'Lãi suất cao hơn cả trạng thái lên: bán khống cổ phiếu và cho vay.' : 'Lãi suất thấp hơn cả trạng thái xuống: vay tiền mua cổ phiếu.');
      };
      el.addEventListener('input', upd);
      upd();
    },
  };

  window.LESSONS['DE-10'] = {
    moduleId: 'DE-10',
    calculator: 'BA II Plus',
    warmup: [
      'Ôn QM-04 (phần 7c): danh mục nào sao chép được một call trong mô hình một kỳ?',
      'Ôn DE-09: viết put-call parity cho call và put châu Âu cùng X, cùng T.',
      'Đoán trước: nếu ai cũng tin giá cổ phiếu sẽ tăng, call có nhất thiết đắt hơn không?',
    ],
    sections,
    glossary,
    practice,
    widgets,
    slides: [],
    wrapup: [
      'Tự lập một cây một kỳ, tính hedge ratio, danh mục sao chép và giá của cả call và put.',
      'Giải thích vì sao π không phải xác suất thực tế, và trung lập rủi ro không phải giả định về nhà đầu tư.',
      'Call trên thị trường đắt hơn giá mô hình: mô tả từng bước giao dịch arbitrage.',
    ],
  };
}());
