// Bài giảng DE-08 - Pricing and Valuation of Options (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t, frac, keys } = window.CFAH;

  const sections = [
    {
      title: '1. Bức tranh lớn',
      minutes: 4,
      html: `
<p>Ở DE-02 bạn đã biết payoff của call và put <b>khi đáo hạn</b>. Module này trả lời câu hỏi khó hơn: <b>trước</b> đáo hạn, một quyền chọn đáng giá bao nhiêu, và giá đó thay đổi thế nào khi thị trường thay đổi?</p>
<div class="key">Giá quyền chọn = <b>giá trị thực hiện</b> (nếu thực hiện ngay bây giờ được bao nhiêu) + <b>giá trị thời gian</b> (phần trả thêm cho khả năng mọi thứ còn tốt hơn trước khi đáo hạn). Không cần mô hình, arbitrage vẫn cho ta <b>cận dưới</b> và <b>cận trên</b> của giá.</div>
<table class="plain"><thead><tr><th>LOS</th><th>Phần</th></tr></thead><tbody>
<tr><td>Giải thích giá trị thực hiện (exercise value), trạng thái moneyness và giá trị thời gian (time value) của quyền chọn</td><td>2, 3</td></tr>
<tr><td>So sánh cách dùng arbitrage và sao chép khi định giá forward commitment và contingent claim</td><td>4, 5</td></tr>
<tr><td>Nhận diện các yếu tố quyết định giá quyền chọn và tác động của từng yếu tố</td><td>6</td></tr>
</tbody></table>
<p class="tip">Ký hiệu dùng xuyên suốt DE-08 đến DE-10: S<sub>0</sub> giá tài sản cơ sở hôm nay, X giá thực hiện, T thời gian đến đáo hạn (năm), r lãi suất phi rủi ro năm, c<sub>0</sub> và p<sub>0</sub> giá call và put châu Âu hôm nay, PV(X) = X / (1 + r)<sup>T</sup>.</p>`,
    },
    {
      title: '2. Giá trị thực hiện và trạng thái moneyness',
      minutes: 12,
      html: `
<p>${t('ev', 'Giá trị thực hiện (exercise value, còn gọi intrinsic value)')} là số tiền người nắm quyền chọn nhận được nếu thực hiện <b>ngay lập tức</b>, và không bao giờ âm vì không ai bị buộc phải thực hiện:</p>
<div class="formula">Call: max(0, S<sub>t</sub> - X) &nbsp;&nbsp;&nbsp;&nbsp; Put: max(0, X - S<sub>t</sub>)</div>
<p>Từ đó có ${t('moneyness', 'trạng thái moneyness')}, tức vị trí của giá tài sản so với giá thực hiện:</p>
<table class="plain"><thead><tr><th>Trạng thái</th><th>Call</th><th>Put</th><th>Giá trị thực hiện</th></tr></thead><tbody>
<tr><td>${t('itm', 'In the money (ITM)')}</td><td>S &gt; X</td><td>S &lt; X</td><td>Dương</td></tr>
<tr><td>${t('atm', 'At the money (ATM)')}</td><td>S = X</td><td>S = X</td><td>0</td></tr>
<tr><td>${t('otm', 'Out of the money (OTM)')}</td><td>S &lt; X</td><td>S &gt; X</td><td>0</td></tr>
</tbody></table>
<div class="example"><div class="ex-h">Ví dụ 2.1 - Cùng giá thực hiện 50</div>
<p>Giá thực hiện X = 50. Xét ba mức giá cổ phiếu 45, 50 và 55. Call và put lần lượt ở trạng thái nào, giá trị thực hiện bao nhiêu?</p>
<details><summary>Xem lời giải</summary>
<table class="plain"><thead><tr><th>S</th><th>Call</th><th>Put</th></tr></thead><tbody>
<tr><td>45</td><td>OTM, giá trị thực hiện 0</td><td>ITM, giá trị thực hiện 5</td></tr>
<tr><td>50</td><td>ATM, 0</td><td>ATM, 0</td></tr>
<tr><td>55</td><td>ITM, 5</td><td>OTM, 0</td></tr>
</tbody></table>
<p>Call và put cùng X luôn "ngược chiều": khi một bên ITM thì bên kia OTM.</p></details></div>
<p class="warn"><b>Bẫy:</b> moneyness chỉ so S với X, <b>không trừ phí quyền chọn</b>. Call X = 50 khi S = 52 là ITM dù người mua đã trả phí 4 và đang lỗ nếu thực hiện. Lãi/lỗ (profit) là chuyện khác moneyness.</p>`,
    },
    {
      title: '3. Giá trị thời gian (time value)',
      minutes: 8,
      html: `
<div class="formula">Giá quyền chọn = Giá trị thực hiện + ${t('tv', 'Giá trị thời gian (time value)')}</div>
<p>Giá trị thời gian là phần giá cao hơn giá trị thực hiện. Nó tồn tại vì trước đáo hạn, giá tài sản còn có thể đi theo hướng có lợi, trong khi lỗ của người mua quyền chọn bị chặn ở mức phí. Đây là tính <b>bất đối xứng</b> của quyền chọn.</p>
<div class="example"><div class="ex-h">Ví dụ 3.1</div>
<p>Cổ phiếu giá 52. Call và put châu Âu cùng X = 50, còn 6 tháng, đang giao dịch ở 4,10 và 1,13. Tách giá trị thực hiện và giá trị thời gian.</p>
<details><summary>Xem lời giải</summary>
<p>Call: giá trị thực hiện = 52 - 50 = 2; giá trị thời gian = 4,10 - 2 = <b>2,10</b>.<br>Put: OTM nên giá trị thực hiện = 0; toàn bộ 1,13 là giá trị thời gian.</p>
<p>Quyền chọn OTM hoặc ATM chỉ có giá trị thời gian.</p></details></div>
<ul>
<li>Giá trị thời gian <b>giảm dần về 0</b> khi đến gần đáo hạn (${t('decay', 'time value decay')}). Tại đáo hạn, giá quyền chọn = giá trị thực hiện.</li>
<li>Giá trị thời gian thường lớn nhất khi quyền chọn ở gần ATM, vì khi đó kết quả cuối cùng bất định nhất.</li>
<li>Với call châu Âu trên tài sản không có lợi ích nắm giữ, giá trị thời gian luôn dương.</li>
<li>Ngoại lệ: <b>put châu Âu sâu ITM</b> có thể có giá trị thời gian <b>âm</b>. Người nắm put chỉ nhận X ở đáo hạn, mà tiền nhận muộn thì kém giá trị hơn tiền nhận ngay (xem phần 5).</li>
</ul>
<div class="example"><div class="ex-h">Ví dụ 3.2 - Put sâu ITM</div>
<p>Cổ phiếu giá 20, put châu Âu X = 50, còn 1 năm, r = 4%, giá put 28,08. Tính giá trị thời gian.</p>
<details><summary>Xem lời giải</summary>
<p>Giá trị thực hiện = 50 - 20 = 30. Giá trị thời gian = 28,08 - 30 = <b>-1,92</b>. Nếu là put kiểu Mỹ, người nắm sẽ thực hiện ngay để nhận 30, nên put Mỹ không bao giờ có giá thấp hơn giá trị thực hiện.</p></details></div>`,
    },
    {
      title: '4. Arbitrage và sao chép: forward commitment khác contingent claim thế nào',
      minutes: 12,
      html: `
<p>DE-04 đã cho thấy forward được định giá hoàn toàn bằng sao chép: mua tài sản bằng tiền vay. Với quyền chọn, ý tưởng vẫn vậy nhưng có ba khác biệt lớn:</p>
<table class="plain"><thead><tr><th>Tiêu chí</th><th>Forward commitment</th><th>Contingent claim (quyền chọn)</th></tr></thead><tbody>
<tr><td>Payoff</td><td>Tuyến tính theo S<sub>T</sub></td><td>Phi tuyến (gãy khúc tại X)</td></tr>
<tr><td>Danh mục sao chép</td><td>Tĩnh: 1 đơn vị tài sản + vay, giữ nguyên đến T</td><td>Động: chỉ nắm một <b>tỷ lệ</b> tài sản (${t('hr', 'hedge ratio')}), tỷ lệ này thay đổi khi S thay đổi</td></tr>
<tr><td>Thông tin cần để định giá</td><td>S<sub>0</sub>, r, T, lợi ích/chi phí nắm giữ</td><td>Thêm X và giả định về <b>phân phối giá</b> (đặc biệt là biến động σ)</td></tr>
<tr><td>Arbitrage cho ta</td><td>Một mức giá duy nhất F<sub>0</sub>(T)</td><td>Không có mô hình: chỉ cho <b>cận trên, cận dưới</b>. Có mô hình (DE-10): một mức giá</td></tr>
<tr><td>Giá trị khi ký</td><td>Thường bằng 0</td><td>Dương: người mua trả phí</td></tr>
</tbody></table>
<h4>Danh mục sao chép của call và put</h4>
<ul>
<li>Long call ≈ <b>mua một phần</b> tài sản cơ sở (0 &lt; h &lt; 1) bằng <b>tiền vay</b>. Giá tăng thì cần nắm nhiều tài sản hơn.</li>
<li>Long put ≈ <b>bán khống một phần</b> tài sản cơ sở và <b>cho vay</b> số tiền thu được.</li>
</ul>
<p>Vì tỷ lệ phải điều chỉnh liên tục theo giá, người sao chép cần biết giá có thể đi xa đến đâu: đó là lý do giá quyền chọn phụ thuộc vào ${t('vol', 'biến động (volatility)')}. Cách tính cụ thể h và giá quyền chọn trong mô hình một kỳ học ở <b>DE-10</b>.</p>
<p class="tip">Giống forward, giá quyền chọn <b>không phụ thuộc</b> vào lợi suất kỳ vọng của tài sản hay khẩu vị rủi ro của nhà đầu tư, vì danh mục sao chép triệt tiêu rủi ro. Tuy nhiên, nó phụ thuộc vào <b>mức độ</b> biến động của giá.</p>`,
    },
    {
      title: '5. Cận dưới và cận trên của giá quyền chọn châu Âu',
      minutes: 14,
      html: `
<p>Không cần biết σ, chỉ bằng lập luận không chênh lệch giá ta đã có khoảng giá hợp lệ cho quyền chọn ${t('euro', 'kiểu châu Âu (European)')} trên tài sản không có lợi ích/chi phí nắm giữ:</p>
<table class="plain"><thead><tr><th></th><th>Cận dưới</th><th>Cận trên</th></tr></thead><tbody>
<tr><td>Call châu Âu</td><td>c<sub>0</sub> ≥ max(0, S<sub>0</sub> - PV(X))</td><td>c<sub>0</sub> ≤ S<sub>0</sub></td></tr>
<tr><td>Put châu Âu</td><td>p<sub>0</sub> ≥ max(0, PV(X) - S<sub>0</sub>)</td><td>p<sub>0</sub> ≤ PV(X)</td></tr>
</tbody></table>
<h4>Vì sao?</h4>
<ul>
<li><b>Cận trên của call:</b> call chỉ cho quyền mua tài sản, nên không thể đắt hơn chính tài sản đó.</li>
<li><b>Cận trên của put:</b> put trả nhiều nhất là X (khi S<sub>T</sub> = 0), nhận vào lúc T, nên không thể đắt hơn PV(X). Put kiểu Mỹ có thể thực hiện ngay nên cận trên là X.</li>
<li><b>Cận dưới của call:</b> so sánh "long call + trái phiếu trả X" với "long tài sản". Khi đáo hạn danh mục đầu luôn ≥ danh mục sau (bằng max(S<sub>T</sub>, X)), nên c<sub>0</sub> + PV(X) ≥ S<sub>0</sub>.</li>
<li><b>Cận dưới của put:</b> lập luận tương tự với "long put + long tài sản" ≥ "trái phiếu trả X", nên p<sub>0</sub> + S<sub>0</sub> ≥ PV(X).</li>
</ul>
<p class="tip">Cận dưới dùng <b>PV(X)</b>, không dùng X. Vì vậy cận dưới của call châu Âu (S<sub>0</sub> - PV(X)) <b>cao hơn</b> giá trị thực hiện S<sub>0</sub> - X, còn cận dưới của put (PV(X) - S<sub>0</sub>) <b>thấp hơn</b> giá trị thực hiện X - S<sub>0</sub>. Đó chính là lý do put châu Âu sâu ITM có thể có giá trị thời gian âm.</p>
<div class="example"><div class="ex-h">Ví dụ 5.1 - Tính cận và tìm arbitrage</div>
<p>S<sub>0</sub> = 50, X = 45, r = 5%, T = 1. (a) Tính cận dưới, cận trên của call và put châu Âu. (b) Call đang giao dịch ở 6,50. Có arbitrage không?</p>
<details><summary>Xem lời giải</summary>
<p>(a) PV(X) = 45 / 1,05 = 42,86. Call: 50 - 42,86 = <b>7,14</b> ≤ c<sub>0</sub> ≤ <b>50</b>. Put: max(0; 42,86 - 50) = <b>0</b> ≤ p<sub>0</sub> ≤ <b>42,86</b>.</p>
${keys([['PV của giá thực hiện', '45 [÷] 1.05 [=]', '42.857143'], ['Cận dưới của call', '[+/-] [+] 50 [=]', '7.142857']])}
<p>(b) 6,50 &lt; 7,14: call quá rẻ. Mua call, bán khống cổ phiếu, gửi PV(X) vào trái phiếu:</p>
<table class="plain"><thead><tr><th>Bước</th><th>t = 0</th><th>T: S<sub>T</sub> &gt; 45</th><th>T: S<sub>T</sub> ≤ 45</th></tr></thead><tbody>
<tr><td>Mua call</td><td>-6,50</td><td>S<sub>T</sub> - 45</td><td>0</td></tr>
<tr><td>Bán khống cổ phiếu</td><td>+50,00</td><td>-S<sub>T</sub></td><td>-S<sub>T</sub></td></tr>
<tr><td>Mua trái phiếu trả 45</td><td>-42,86</td><td>+45</td><td>+45</td></tr>
<tr><td><b>Tổng</b></td><td><b>+0,64</b></td><td><b>0</b></td><td><b>45 - S<sub>T</sub> ≥ 0</b></td></tr>
</tbody></table>
<p>Thu ngay 0,64 và không bao giờ lỗ: arbitrage. Lưu ý đáp án nhiễu: so 6,50 với S<sub>0</sub> - X = 5 sẽ kết luận sai là "không có arbitrage".</p></details></div>`,
    },
    {
      title: '6. Các yếu tố quyết định giá quyền chọn',
      minutes: 16,
      html: `
<p>Sáu yếu tố, mỗi yếu tố giải thích được bằng trực giác về payoff:</p>
<table class="plain"><thead><tr><th>Yếu tố tăng</th><th>Call</th><th>Put</th><th>Trực giác</th></tr></thead><tbody>
<tr><td>Giá tài sản cơ sở S</td><td>Tăng</td><td>Giảm</td><td>Call lợi khi giá cao, put lợi khi giá thấp</td></tr>
<tr><td>Giá thực hiện X</td><td>Giảm</td><td>Tăng</td><td>Call phải trả nhiều hơn để mua; put bán được giá cao hơn</td></tr>
<tr><td>Thời gian đến đáo hạn T</td><td>Tăng</td><td>Thường tăng (*)</td><td>Thêm thời gian, thêm cơ hội giá đi theo hướng có lợi</td></tr>
<tr><td>Biến động σ</td><td>Tăng</td><td>Tăng</td><td>Lỗ bị chặn ở phí, lãi không giới hạn: biến động chỉ có lợi</td></tr>
<tr><td>Lãi suất phi rủi ro r</td><td>Tăng</td><td>Giảm</td><td>PV(X) giảm: call trả X muộn là lợi, put nhận X muộn là thiệt</td></tr>
<tr><td>Lợi ích nắm giữ (cổ tức, coupon)</td><td>Giảm</td><td>Tăng</td><td>Lợi ích làm giá tài sản giảm và chỉ thuộc về người giữ tài sản</td></tr>
<tr><td>Chi phí nắm giữ (lưu kho)</td><td>Tăng</td><td>Giảm</td><td>Ngược với lợi ích: người long call tránh được chi phí</td></tr>
</tbody></table>
<p>(*) Với put châu Âu sâu ITM, thời gian dài hơn có thể làm put <b>giảm giá</b>: người nắm put phải chờ lâu hơn mới nhận X, và giá tài sản đã gần 0 nên không còn nhiều chỗ để giảm thêm. Ví dụ 3.2: kéo kỳ hạn từ 1 lên 2 năm, giá put giảm từ 28,08 xuống 26,34.</p>
<div class="example"><div class="ex-h">Ví dụ 6.1 - Thay từng yếu tố một</div>
<p>Trường hợp gốc: S = 50, X = 50, T = 1, σ = 30%, r = 4%, không có cổ tức. Giá tính bằng mô hình Black-Scholes-Merton (học ở Level II, ở đây chỉ dùng để minh họa chiều tác động).</p>
<details><summary>Xem bảng</summary>
<table class="plain"><thead><tr><th>Thay đổi</th><th>Call</th><th>Put</th></tr></thead><tbody>
<tr><td>Gốc</td><td>6,86</td><td>4,94</td></tr>
<tr><td>S = 55</td><td>10,21 ↑</td><td>3,29 ↓</td></tr>
<tr><td>X = 55</td><td>4,80 ↓</td><td>7,68 ↑</td></tr>
<tr><td>T = 2</td><td>10,10 ↑</td><td>6,33 ↑</td></tr>
<tr><td>σ = 40%</td><td>8,77 ↑</td><td>6,85 ↑</td></tr>
<tr><td>r = 6%</td><td>7,32 ↑</td><td>4,49 ↓</td></tr>
<tr><td>Tỷ suất cổ tức 2%</td><td>6,27 ↓</td><td>5,33 ↑</td></tr>
</tbody></table>
<p>Chỉ có σ và (thường là) T làm call và put cùng tăng. Các yếu tố khác đẩy call và put ngược chiều nhau.</p></details></div>
<div class="widget" data-widget="optFactors"></div>
<p class="warn"><b>Bẫy:</b> "Biến động tăng làm put tăng nhưng call giảm" là sai. Biến động tăng làm <b>cả hai</b> tăng giá. Tương tự, lãi suất tăng làm call tăng chứ không giảm: đừng lẫn với giá trái phiếu.</p>`,
    },
    {
      title: '7. Tóm tắt và bẫy thường gặp',
      minutes: 4,
      html: `
<table class="plain"><thead><tr><th>Chủ đề</th><th>Nhớ</th></tr></thead><tbody>
<tr><td>Giá trị thực hiện</td><td>Call max(0, S - X); put max(0, X - S). Không trừ phí</td></tr>
<tr><td>Moneyness</td><td>Call ITM khi S &gt; X; put ITM khi S &lt; X; ATM khi S = X</td></tr>
<tr><td>Giá trị thời gian</td><td>Giá quyền chọn - giá trị thực hiện; về 0 khi đáo hạn; put châu Âu sâu ITM có thể âm</td></tr>
<tr><td>Forward và quyền chọn</td><td>Forward: sao chép tĩnh, một giá. Quyền chọn: sao chép động, cần giả định về biến động</td></tr>
<tr><td>Cận dưới</td><td>c<sub>0</sub> ≥ max(0, S<sub>0</sub> - PV(X)); p<sub>0</sub> ≥ max(0, PV(X) - S<sub>0</sub>)</td></tr>
<tr><td>Cận trên</td><td>c<sub>0</sub> ≤ S<sub>0</sub>; p<sub>0</sub> ≤ PV(X) (put Mỹ: ≤ X)</td></tr>
<tr><td>Yếu tố cùng chiều cho call và put</td><td>σ (luôn), T (thường)</td></tr>
<tr><td>Yếu tố ngược chiều</td><td>S, X, r, lợi ích và chi phí nắm giữ</td></tr>
<tr><td>Bẫy hay gặp</td><td>Dùng X thay PV(X) trong cận; cho rằng σ tăng làm một loại giảm; nhầm moneyness với lãi/lỗ</td></tr>
</tbody></table>
<p>Tiếp theo: tab <b>Luyện tập</b> - 10 câu (rút ngẫu nhiên từ ngân hàng 30 câu, mỗi lần làm một bộ khác). DE-09 ghép call, put, tài sản và trái phiếu thành put-call parity.</p>`,
    },
  ];

  const glossary = {
    ev: ['Exercise value (intrinsic value)', 'Giá trị thực hiện (giá trị nội tại)', 'Giá trị nếu thực hiện quyền chọn ngay: call max(0, S - X), put max(0, X - S).'],
    moneyness: ['Moneyness', 'Trạng thái quyền chọn', 'Quan hệ giữa giá tài sản cơ sở và giá thực hiện: in, at hoặc out of the money.'],
    itm: ['In the money', 'Có lãi nội tại', 'Giá trị thực hiện dương: call khi S > X, put khi S < X.'],
    atm: ['At the money', 'Ngang giá', 'Giá tài sản cơ sở bằng giá thực hiện.'],
    otm: ['Out of the money', 'Không có lãi nội tại', 'Thực hiện ngay sẽ không có lợi: call khi S < X, put khi S > X.'],
    tv: ['Time value', 'Giá trị thời gian', 'Phần giá quyền chọn vượt giá trị thực hiện, phản ánh khả năng giá còn biến động có lợi trước đáo hạn.'],
    decay: ['Time value decay', 'Hao mòn giá trị thời gian', 'Giá trị thời gian giảm dần và bằng 0 tại đáo hạn.'],
    hr: ['Hedge ratio', 'Tỷ lệ phòng hộ', 'Số đơn vị tài sản cơ sở cần nắm để sao chép (hoặc phòng hộ) một quyền chọn.'],
    vol: ['Volatility', 'Biến động', 'Độ lớn dao động của giá (hoặc lợi suất) tài sản cơ sở; biến động tăng làm cả call và put tăng giá.'],
    euro: ['European option', 'Quyền chọn kiểu châu Âu', 'Chỉ được thực hiện vào ngày đáo hạn. Kiểu Mỹ được thực hiện bất cứ lúc nào trước đáo hạn.'],
  };

  const practice = [
    { q: 'Cổ phiếu giá 47. Put với giá thực hiện 50 đang giao dịch ở 4,20. Giá trị thực hiện và giá trị thời gian của put lần lượt là:', choices: ['3,00 và 1,20', '0 và 4,20', '3,00 và 7,20'], answer: 0, explain: 'Put ITM: giá trị thực hiện = 50 - 47 = 3; giá trị thời gian = 4,20 - 3 = 1,20. Lựa chọn "0 và 4,20" coi put là OTM (dùng công thức của call). Lựa chọn "3,00 và 7,20" cộng thay vì trừ.' },
    { q: 'Cổ phiếu giá 38. Một call có giá thực hiện 40 đang ở trạng thái:', choices: ['In the money', 'At the money', 'Out of the money'], answer: 2, explain: 'Call chỉ ITM khi S > X. Ở đây S = 38 < 40 nên call OTM; put cùng X mới là ITM.' },
    { q: 'Cổ phiếu không trả cổ tức giá 60, call châu Âu X = 55 còn 6 tháng, r = 4%/năm. Cận dưới của giá call gần nhất với:', choices: ['5,00', '6,07', '0'], answer: 1, explain: 'Cận dưới = S0 - PV(X) = 60 - 55/1,04^0,5 = 6,07. Lựa chọn 5,00 dùng X thay vì PV(X) (đó là giá trị thực hiện). Lựa chọn 0 chỉ đúng khi S0 < PV(X).' },
    { q: 'Cổ phiếu giá 30, put châu Âu X = 36 còn 1 năm, r = 5%. Cận dưới của giá put gần nhất với:', choices: ['4,29', '6,00', '0'], answer: 0, explain: 'Cận dưới = PV(X) - S0 = 36/1,05 - 30 = 4,29. Lựa chọn 6,00 dùng X thay vì PV(X): put châu Âu có thể rẻ hơn giá trị thực hiện 6. Lựa chọn 0 sai vì PV(X) > S0.' },
    { q: 'Yếu tố nào sau đây, khi tăng lên, làm GIẢM giá của call?', choices: ['Biến động của tài sản cơ sở', 'Lãi suất phi rủi ro', 'Cổ tức của tài sản cơ sở'], answer: 2, explain: 'Cổ tức làm giá cổ phiếu giảm khi chia và chỉ thuộc về người giữ cổ phiếu nên làm call giảm giá. Biến động và lãi suất tăng đều làm call tăng giá.' },
    { q: 'Các yếu tố khác không đổi, lãi suất phi rủi ro tăng sẽ làm giá put châu Âu:', choices: ['Tăng', 'Giảm', 'Không đổi'], answer: 1, explain: 'Người nắm put nhận X ở đáo hạn; lãi suất tăng làm PV(X) giảm nên put giảm giá. Call thì ngược lại (tăng).' },
    { q: 'Phát biểu nào về giá trị thời gian là ĐÚNG?', choices: ['Call OTM có giá trị thời gian bằng 0', 'Giá trị thời gian tăng dần khi đến gần đáo hạn', 'Put châu Âu sâu ITM có thể có giá trị thời gian âm'], answer: 2, explain: 'Cận dưới của put châu Âu là PV(X) - S0, thấp hơn X - S0, nên put sâu ITM có thể rẻ hơn giá trị thực hiện. Phương án "call OTM có giá trị thời gian bằng 0" sai: call OTM chỉ có giá trị thời gian (dương). Phương án "tăng dần khi đến gần đáo hạn" sai: giá trị thời gian giảm về 0 khi đáo hạn.' },
    { q: 'Put châu Âu X = 50, còn 1 năm, r = 4%. Cận trên của giá put gần nhất với:', choices: ['48,08', '50,00', 'Giá cổ phiếu S0'], answer: 0, explain: 'Put châu Âu trả nhiều nhất X vào lúc T nên p0 ≤ PV(X) = 50/1,04 = 48,08. Lựa chọn 50,00 là cận trên của put kiểu Mỹ. Lựa chọn S0 là cận trên của call.' },
    { q: 'So với việc định giá forward, việc định giá quyền chọn bằng sao chép khác ở chỗ:', choices: ['Forward cần giả định về biến động của giá tài sản cơ sở', 'Danh mục sao chép quyền chọn có tỷ lệ tài sản thay đổi theo giá, nên cần giả định về phân phối giá', 'Quyền chọn được định giá chỉ bằng S0, r và T như forward'], answer: 1, explain: 'Payoff quyền chọn phi tuyến nên tỷ lệ phòng hộ thay đổi theo S; muốn định giá cần biết giá biến động thế nào. Phương án "forward cần giả định về biến động" đảo ngược: forward không cần σ. Phương án "chỉ bằng S0, r và T" sai: thiếu X và σ, và arbitrage thuần túy chỉ cho cận giá.' },
    { q: 'Cổ phiếu không trả cổ tức giá 80, call châu Âu X = 75 còn 1 năm, r = 4%, đang giao dịch ở 7,20. Kết luận đúng là:', choices: ['Có arbitrage: mua call, bán khống cổ phiếu, mua trái phiếu PV(X); thu ngay khoảng 0,68', 'Không có arbitrage vì 7,20 lớn hơn S0 - X = 5', 'Có arbitrage: bán call, mua cổ phiếu, vay PV(X); thu ngay khoảng 0,68'], answer: 0, explain: 'Cận dưới = 80 - 75/1,04 = 7,88 > 7,20 nên call quá rẻ: mua call. Thu ngay 80 - 7,20 - 72,12 = 0,68, và tại T không bao giờ lỗ. Phương án "không có arbitrage" so với X thay vì PV(X). Phương án bán call, mua cổ phiếu làm ngược chiều.' },
    { q: "Cổ phiếu giá 63. Call có giá thực hiện 58 đang giao dịch ở 8,40. Giá trị thực hiện và giá trị thời gian của call lần lượt là:", choices: ["5,00 và 3,40", "0 và 8,40", "5,00 và 13,40"], answer: 0, explain: "Call ITM vì S > X: giá trị thực hiện = 63 - 58 = 5; giá trị thời gian = 8,40 - 5 = 3,40. Lựa chọn \"0 và 8,40\" dùng công thức của put (X - S âm nên lấy 0). Lựa chọn \"5,00 và 13,40\" cộng giá trị thực hiện vào giá thay vì trừ." },
    { q: "Cổ phiếu giá 27. Call có giá thực hiện 30 đang giao dịch ở 1,15. Giá trị thực hiện và giá trị thời gian của call lần lượt là:", choices: ["-3,00 và 4,15", "3,00 và -1,85", "0 và 1,15"], answer: 2, explain: "Call OTM vì S < X: giá trị thực hiện = max(0; 27 - 30) = 0, nên toàn bộ 1,15 là giá trị thời gian. Lựa chọn \"-3,00 và 4,15\" quên rằng giá trị thực hiện không bao giờ âm. Lựa chọn \"3,00 và -1,85\" dùng X - S, tức công thức của put." },
    { q: "Một nhà đầu tư đã trả phí 5,00 để mua put có giá thực hiện 70. Cổ phiếu hiện giá 66. Phát biểu nào đúng nhất?", choices: ["Put đang OTM vì nhà đầu tư đang lỗ", "Put đang ITM, nhưng nếu thực hiện ngay nhà đầu tư lỗ 1,00", "Put đang ITM và nếu thực hiện ngay nhà đầu tư lãi 4,00"], answer: 1, explain: "Put ITM khi S < X (66 < 70), giá trị thực hiện = 4. Lãi/lỗ phải trừ phí: 4 - 5 = -1. Moneyness chỉ so S với X, không phụ thuộc phí, nên kết luận \"OTM vì đang lỗ\" sai. Lựa chọn lãi 4,00 quên trừ phí đã trả." },
    { q: "Cổ phiếu không trả cổ tức giá 45. Call châu Âu có X = 40, còn 2 năm đến đáo hạn, r = 3%/năm. Cận dưới của giá call gần nhất với:", choices: ["5,00", "7,30", "6,17"], answer: 1, explain: "Cận dưới = S0 - X/(1 + r)^T = 45 - 40/1,03^2 = 45 - 37,70 = 7,30. Lựa chọn 5,00 dùng X thay vì PV(X), tức giá trị thực hiện. Lựa chọn 6,17 chỉ chiết khấu X một năm thay vì hai năm." },
    { q: "Cổ phiếu giá 52. Put châu Âu có X = 60, còn 9 tháng đến đáo hạn, r = 6%/năm. Cận dưới của giá put gần nhất với:", choices: ["5,43", "8,00", "4,60"], answer: 0, explain: "Cận dưới = PV(X) - S0 = 60/1,06^0,75 - 52 = 57,43 - 52 = 5,43. Lựa chọn 8,00 dùng X thay vì PV(X): put châu Âu có thể có giá thấp hơn giá trị thực hiện. Lựa chọn 4,60 chiết khấu cả năm thay vì 0,75 năm." },
    { q: "Cổ phiếu giá 58. Put châu Âu có X = 55, còn 1 năm, r = 5%. Cận dưới của giá put gần nhất với:", choices: ["5,62", "3,00", "0"], answer: 2, explain: "PV(X) = 55/1,05 = 52,38 < 58, nên PV(X) - S0 âm và cận dưới là max(0; PV(X) - S0) = 0. Lựa chọn 5,62 là S0 - PV(X), tức cận dưới của call. Lựa chọn 3,00 là S0 - X, cũng là công thức của call và còn dùng X thay vì PV(X)." },
    { q: "Cổ phiếu giá 40. Call châu Âu có X = 35, còn 1 năm, r = 5%. Cận trên của giá call là:", choices: ["33,33", "35,00", "40,00"], answer: 2, explain: "Call chỉ cho quyền mua cổ phiếu nên không thể đắt hơn chính cổ phiếu: c0 ≤ S0 = 40. Lựa chọn 33,33 là PV(X), cận trên của put châu Âu. Lựa chọn 35,00 là X, cận trên của put kiểu Mỹ." },
    { q: "Cổ phiếu giá 70. Put kiểu Mỹ có X = 80, còn 1 năm, r = 5%. Cận trên của giá put là:", choices: ["76,19", "80,00", "70,00"], answer: 1, explain: "Put kiểu Mỹ có thể thực hiện ngay để nhận X, nên cận trên là X = 80. Lựa chọn 76,19 là PV(X), cận trên của put châu Âu (chỉ nhận X ở đáo hạn). Lựa chọn 70,00 là S0, cận trên của call." },
    { q: "Cổ phiếu không trả cổ tức giá 40. Put châu Âu có X = 50, còn 1 năm, r = 5%, đang giao dịch ở 7,20. Kết luận đúng là:", choices: ["Có arbitrage: mua put, mua cổ phiếu, vay PV(X); thu ngay khoảng 0,42", "Không có arbitrage vì put châu Âu được phép giao dịch thấp hơn giá trị thực hiện 10", "Có arbitrage: bán put, bán khống cổ phiếu, cho vay PV(X); thu ngay khoảng 0,42"], answer: 0, explain: "Cận dưới = 50/1,05 - 40 = 7,62 > 7,20 nên put quá rẻ: mua put, mua cổ phiếu và vay 47,62. Thu ngay 47,62 - 40 - 7,20 = 0,42; tại T danh mục long put + long cổ phiếu luôn có giá trị ít nhất 50 để trả nợ. Đúng là put châu Âu có thể thấp hơn giá trị thực hiện 10, nhưng không được thấp hơn PV(X) - S0. Bán put và bán khống cổ phiếu là làm ngược chiều." },
    { q: "Cổ phiếu giá 15. Put châu Âu có X = 40, còn 1 năm, r = 6%, và đang giao dịch đúng bằng cận dưới của nó. Giá trị thời gian của put gần nhất với:", choices: ["-2,26", "0", "2,26"], answer: 0, explain: "Giá put = PV(X) - S0 = 40/1,06 - 15 = 22,74. Giá trị thực hiện = 40 - 15 = 25. Giá trị thời gian = 22,74 - 25 = -2,26: put châu Âu sâu ITM có thể có giá trị thời gian âm. Lựa chọn 0 cho rằng giá trị thời gian không thể âm (chỉ đúng với put kiểu Mỹ ở cận dưới). Lựa chọn 2,26 nhầm dấu khi lấy giá trị thực hiện trừ giá put." },
    { q: "Tại ngày đáo hạn, cổ phiếu giá 34 và call có giá thực hiện 30. Giá của call bằng:", choices: ["Lớn hơn 4,00, vì call vẫn còn giá trị thời gian", "0, vì quyền chọn đã hết hạn", "4,00, vì giá trị thời gian tại đáo hạn bằng 0"], answer: 2, explain: "Tại đáo hạn không còn thời gian để giá đi theo hướng có lợi, nên giá trị thời gian bằng 0 và giá call bằng giá trị thực hiện max(0; 34 - 30) = 4. Giá trị thời gian giảm dần về 0 khi đến gần đáo hạn, không còn lại ở ngày đáo hạn. Call ITM tại đáo hạn vẫn có giá trị 4, không phải 0." },
    { q: "Các yếu tố khác như nhau, giá trị thời gian của một quyền chọn thường LỚN NHẤT khi quyền chọn:", choices: ["Ở trạng thái sâu in the money", "Ở gần trạng thái at the money", "Ở trạng thái sâu out of the money"], answer: 1, explain: "Khi S gần X, kết quả cuối cùng bất định nhất (có thể kết thúc ITM hoặc OTM), nên khả năng giá đi theo hướng có lợi có giá trị lớn nhất. Quyền chọn sâu ITM chủ yếu là giá trị thực hiện và gần giống nắm tài sản. Quyền chọn sâu OTM có rất ít khả năng kết thúc ITM nên giá trị thời gian nhỏ." },
    { q: "Các yếu tố khác không đổi, biến động của tài sản cơ sở tăng sẽ làm giá call và put châu Âu:", choices: ["Call tăng, put giảm", "Cùng tăng", "Call giảm, put tăng"], answer: 1, explain: "Lỗ của người nắm quyền chọn bị chặn ở mức phí còn lãi tiềm năng lớn hơn khi giá biến động mạnh, nên biến động tăng làm cả call và put tăng giá. Hai lựa chọn còn lại đều cho rằng biến động có lợi cho một loại và bất lợi cho loại kia, là lỗi thường gặp: biến động không mang hướng." },
    { q: "Hai quyền chọn châu Âu trên cùng một cổ phiếu, cùng ngày đáo hạn, chỉ khác giá thực hiện: X = 45 và X = 50. So với quyền chọn X = 45, quyền chọn X = 50:", choices: ["Call có giá thấp hơn, put có giá cao hơn", "Call có giá cao hơn, put có giá thấp hơn", "Cả call và put đều có giá cao hơn"], answer: 0, explain: "Giá thực hiện cao hơn nghĩa là người nắm call phải trả nhiều hơn để mua (call rẻ hơn), còn người nắm put bán được giá cao hơn (put đắt hơn). Lựa chọn \"call cao hơn, put thấp hơn\" đảo ngược chiều tác động. Chỉ biến động (và thường là thời gian) mới làm call và put cùng tăng." },
    { q: "Với một put châu Âu sâu in the money, việc kéo dài thời gian đến đáo hạn (các yếu tố khác không đổi) có thể:", choices: ["Luôn làm tăng giá put, như với mọi quyền chọn", "Không ảnh hưởng đến giá put, vì giá trị thực hiện không đổi", "Làm giảm giá put, vì người nắm put phải chờ lâu hơn mới nhận X"], answer: 2, explain: "Khi giá tài sản đã gần 0, put còn ít chỗ để lời thêm, trong khi thời gian dài hơn làm PV(X) nhỏ hơn. Vì vậy put châu Âu sâu ITM có thể giảm giá khi kỳ hạn dài hơn. \"Luôn tăng\" chỉ đúng với call (và với put kiểu Mỹ). Giá quyền chọn trước đáo hạn không chỉ phụ thuộc giá trị thực hiện." },
    { q: "Chi phí lưu kho của một hàng hóa tăng lên (các yếu tố khác không đổi). Tác động lên giá call và put châu Âu trên hàng hóa đó là:", choices: ["Call giảm, put tăng", "Cả call và put đều không đổi", "Call tăng, put giảm"], answer: 2, explain: "Người long call được hưởng biến động giá mà không phải chịu chi phí lưu kho của người giữ hàng hóa, nên call có giá trị hơn; put ngược lại. Lựa chọn \"call giảm, put tăng\" là tác động của lợi ích nắm giữ (như cổ tức), không phải chi phí nắm giữ. Chi phí nắm giữ có ảnh hưởng đến giá quyền chọn, nên \"không đổi\" sai." },
    { q: "Danh mục sao chép một long call châu Âu bao gồm:", choices: ["Bán khống một phần tài sản cơ sở và cho vay số tiền thu được", "Mua một phần (dưới 1 đơn vị) tài sản cơ sở bằng tiền vay", "Mua đúng 1 đơn vị tài sản cơ sở bằng tiền vay và giữ nguyên đến đáo hạn"], answer: 1, explain: "Call được sao chép bằng cách nắm hedge ratio h (0 < h < 1) đơn vị tài sản, tài trợ một phần bằng vay, và h phải điều chỉnh khi S thay đổi. Bán khống một phần tài sản và cho vay là danh mục sao chép long put. Mua 1 đơn vị tài sản bằng tiền vay và giữ nguyên là danh mục sao chép tĩnh của long forward." },
    { q: "Theo lập luận sao chép và không chênh lệch giá, giá của một quyền chọn KHÔNG phụ thuộc trực tiếp vào:", choices: ["Lợi suất kỳ vọng của tài sản cơ sở", "Biến động của tài sản cơ sở", "Lãi suất phi rủi ro"], answer: 0, explain: "Danh mục sao chép triệt tiêu rủi ro nên giá quyền chọn không phụ thuộc lợi suất kỳ vọng hay khẩu vị rủi ro của nhà đầu tư, giống như forward. Biến động là yếu tố then chốt vì tỷ lệ phòng hộ phải điều chỉnh theo mức giá có thể đi xa. Lãi suất phi rủi ro ảnh hưởng qua PV(X) và chi phí vay trong danh mục sao chép." },
    { q: "Phát biểu nào đúng nhất về giá trị lúc ký của forward commitment và contingent claim?", choices: ["Cả forward và quyền chọn đều có giá trị bằng 0 lúc ký", "Quyền chọn có giá trị bằng 0 lúc ký; forward có giá trị dương nên bên long phải trả phí", "Forward thường có giá trị bằng 0 lúc ký; quyền chọn có giá trị dương nên người mua phải trả phí"], answer: 2, explain: "Giá forward được chọn để giá trị lúc ký bằng 0, nên không bên nào trả tiền. Quyền chọn cho người mua quyền mà không có nghĩa vụ, nên có giá trị dương và người mua trả phí cho người bán. Hai lựa chọn còn lại bỏ qua tính bất đối xứng của quyền chọn hoặc đảo ngược vai trò." },
    { q: "Không dùng mô hình giá (chỉ bằng lập luận không chênh lệch giá, không giả định về biến động), đối với quyền chọn châu Âu ta có thể xác định:", choices: ["Một mức giá duy nhất, giống như giá forward", "Cận dưới và cận trên của giá quyền chọn", "Không có thông tin nào về giá quyền chọn"], answer: 1, explain: "Vì payoff phi tuyến và danh mục sao chép là động, arbitrage thuần túy chỉ cho khoảng giá: ví dụ max(0; S0 - PV(X)) ≤ c0 ≤ S0. Muốn có một mức giá duy nhất cần thêm giả định về phân phối giá, như mô hình nhị thức. \"Không có thông tin nào\" sai vì các cận vẫn ràng buộc giá và giúp phát hiện arbitrage." },
  ];

  // Widget: tác động của từng yếu tố lên giá call và put (minh họa bằng Black-Scholes-Merton, r ghép lãi năm).
  const widgets = {
    optFactors(el) {
      el.innerHTML = `
        <div class="w-row"><label>Giá tài sản S: <b data-o="S">50</b><input type="range" min="20" max="80" step="1" value="50" data-i="S"></label>
        <label>Biến động σ: <b data-o="v">30%</b><input type="range" min="5" max="80" step="1" value="30" data-i="v"></label>
        <label>Thời gian T: <b data-o="T">1 năm</b><input type="range" min="0.05" max="3" step="0.05" value="1" data-i="T"></label></div>
        <div class="w-row"><label>Lãi suất r: <b data-o="r">4%</b><input type="range" min="0" max="12" step="0.5" value="4" data-i="r"></label>
        <label>Tỷ suất cổ tức: <b data-o="q">0%</b><input type="range" min="0" max="8" step="0.5" value="0" data-i="q"></label>
        <label>Giá thực hiện X: <b>50</b> (cố định)</label></div>
        <div class="w-out"><div class="w-price" data-o="p"></div><div class="w-bar"><span data-o="bar"></span><i></i></div><div class="w-note" data-o="note"></div></div>`;
      const q = s => el.querySelector(s);
      const vn = x => x.toFixed(2).replace('.', ',');
      const N = x => { const k = 1 / (1 + 0.2316419 * Math.abs(x)); const d = 0.3989423 * Math.exp(-x * x / 2); const p = d * k * (0.3193815 + k * (-0.3565638 + k * (1.781478 + k * (-1.821256 + k * 1.330274)))); return x > 0 ? 1 - p : p; };
      const upd = () => {
        const S = +q('[data-i="S"]').value, v = +q('[data-i="v"]').value / 100, T = +q('[data-i="T"]').value, r = +q('[data-i="r"]').value / 100, dy = +q('[data-i="q"]').value / 100, X = 50;
        const rc = Math.log(1 + r), d1 = (Math.log(S / X) + (rc - dy + v * v / 2) * T) / (v * Math.sqrt(T)), d2 = d1 - v * Math.sqrt(T);
        const c = S * Math.exp(-dy * T) * N(d1) - X * Math.exp(-rc * T) * N(d2), p = X * Math.exp(-rc * T) * N(-d2) - S * Math.exp(-dy * T) * N(-d1);
        const evc = Math.max(0, S - X), evp = Math.max(0, X - S);
        q('[data-o="S"]').textContent = S; q('[data-o="v"]').textContent = `${Math.round(v * 100)}%`;
        q('[data-o="T"]').textContent = `${T.toFixed(2).replace('.', ',')} năm`;
        q('[data-o="r"]').textContent = `${(r * 100).toFixed(1).replace('.', ',')}%`; q('[data-o="q"]').textContent = `${(dy * 100).toFixed(1).replace('.', ',')}%`;
        q('[data-o="p"]').textContent = `Call = ${vn(c)} · Put = ${vn(p)}`;
        q('[data-o="bar"]').style.width = `${Math.min(100, (c / (c + p)) * 100)}%`;
        q('[data-o="note"]').textContent = `Call: giá trị thực hiện ${vn(evc)}, giá trị thời gian ${vn(c - evc)}. Put: giá trị thực hiện ${vn(evp)}, giá trị thời gian ${vn(p - evp)}.${p - evp < 0 ? ' Put châu Âu sâu ITM đang có giá trị thời gian âm.' : ''} Thanh màu: tỷ trọng call trong tổng call + put.`;
      };
      el.addEventListener('input', upd);
      upd();
    },
  };

  window.LESSONS['DE-08'] = {
    moduleId: 'DE-08',
    calculator: 'BA II Plus',
    warmup: [
      'Ôn DE-02: payoff khi đáo hạn của long call và long put với giá thực hiện X là gì?',
      'Ôn DE-04: vì sao giá forward chỉ dùng lãi suất phi rủi ro mà không dùng lợi suất kỳ vọng?',
      'Đoán trước: nếu giá cổ phiếu biến động mạnh hơn, call đắt lên hay rẻ đi? Còn put?',
    ],
    sections,
    glossary,
    practice,
    widgets,
    slides: [],
    wrapup: [
      'Phân biệt giá trị thực hiện, giá trị thời gian và moneyness bằng một ví dụ của bạn.',
      'Viết cận dưới và cận trên của call và put châu Âu, giải thích vì sao dùng PV(X).',
      'Liệt kê các yếu tố làm call và put thay đổi cùng chiều, và các yếu tố làm chúng thay đổi ngược chiều.',
    ],
  };
}());
