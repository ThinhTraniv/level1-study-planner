// Bài giảng DE-04 - Arbitrage, Replication, and the Cost of Carry in Pricing Derivatives (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t, frac, keys, timeline } = window.CFAH;

  const sections = [
    {
      title: '1. Bức tranh lớn',
      minutes: 4,
      html: `
<p>Các module DE-05 đến DE-10 đều định giá phái sinh bằng <b>cùng một lập luận</b>, và module này đặt nền móng cho lập luận đó:</p>
<div class="key">Nếu một phái sinh có thể được <b>sao chép</b> bằng tài sản cơ sở và việc vay/cho vay phi rủi ro, thì giá của nó phải bằng chi phí của danh mục sao chép. Nếu không, sẽ có <b>arbitrage</b>: lời chắc chắn mà không cần vốn và không chịu rủi ro.</div>
<table class="plain"><thead><tr><th>LOS</th><th>Phần</th></tr></thead><tbody>
<tr><td>Giải thích cách arbitrage và sao chép (replication) được dùng để định giá phái sinh</td><td>2, 3, 4</td></tr>
<tr><td>Phân biệt giá giao ngay và giá kỳ vọng trong tương lai của tài sản cơ sở; chi phí nắm giữ (cost of carry)</td><td>5, 6</td></tr>
</tbody></table>
<p class="tip">Nhớ lại QM-04 (phần 7): "cùng dòng tiền thì cùng giá". Module này áp dụng đúng ý đó cho hợp đồng kỳ hạn.</p>`,
    },
    {
      title: '2. Arbitrage và luật một giá',
      minutes: 8,
      html: `
<p>${t('arb', 'Arbitrage')} theo nghĩa chặt chẽ là giao dịch thỏa cả ba điều kiện:</p>
<ol><li><b>Không cần vốn ròng</b> ban đầu (hoặc nhận tiền ngay hôm nay).</li><li><b>Không có rủi ro</b>: kết quả biết trước trong mọi kịch bản.</li><li><b>Lời dương</b>.</li></ol>
<p>Ở thị trường hoạt động tốt, cơ hội như vậy biến mất rất nhanh: ai cũng mua thứ rẻ, bán thứ đắt cho đến khi hai giá bằng nhau. Kết quả là ${t('lop', 'luật một giá (law of one price)')}: hai tài sản hoặc danh mục có cùng dòng tiền tương lai trong mọi kịch bản phải có cùng giá hôm nay.</p>
<div class="formula">Danh mục phi rủi ro → phải sinh lợi đúng bằng lãi suất phi rủi ro r</div>
<p>Hệ quả quan trọng: một danh mục <b>không có rủi ro</b> thì chỉ được phép sinh lợi bằng lãi suất phi rủi ro. Nếu nó sinh lợi cao hơn, mọi người sẽ vay ở r để mua nó; nếu thấp hơn, mọi người sẽ bán nó để cho vay ở r.</p>
<h4>Giới hạn của arbitrage (limits to arbitrage)</h4>
<p>Trên thực tế, arbitrage không phải lúc nào cũng thực hiện được hoặc chỉ kéo giá về gần chứ không đúng giá lý thuyết, vì:</p>
<ul>
<li>Chi phí giao dịch, thuế, chênh lệch giá mua - bán.</li>
<li>Không phải lúc nào cũng <b>huy động đủ vốn</b> hoặc vay được ở lãi suất phi rủi ro.</li>
<li>Hạn chế bán khống, hoặc tài sản khó lưu kho, khó vay (ví dụ hàng hóa dễ hỏng).</li>
<li>Rủi ro mô hình và rủi ro đối tác khiến giao dịch không thật sự "phi rủi ro".</li>
</ul>
<p class="warn"><b>Bẫy:</b> trong đề thi, "arbitrage" luôn hiểu là <b>không rủi ro</b>. Một giao dịch "kỳ vọng có lời cao" nhưng có thể lỗ là đầu cơ, không phải arbitrage.</p>`,
    },
    {
      title: '3. Sao chép (replication)',
      minutes: 10,
      html: `
<p>${t('repl', 'Sao chép (replication)')} là tạo ra dòng tiền giống hệt một phái sinh bằng cách kết hợp tài sản cơ sở với vay hoặc cho vay phi rủi ro. Vì cùng dòng tiền thì cùng giá, giá phái sinh = chi phí của danh mục sao chép.</p>
<h4>Ba "phương trình" sao chép cơ bản của forward</h4>
<table class="plain"><thead><tr><th>Danh mục</th><th>Tương đương với</th><th>Vì sao</th></tr></thead><tbody>
<tr><td>Long tài sản + short forward</td><td>Long trái phiếu phi rủi ro (cho vay)</td><td>Đã chốt giá bán F<sub>0</sub>(T): chắc chắn nhận F<sub>0</sub>(T) tại T</td></tr>
<tr><td>Long tài sản + vay tiền (short trái phiếu)</td><td>Long forward</td><td>Tại T có tài sản và nợ F<sub>0</sub>(T), giống mua tài sản ở F<sub>0</sub>(T)</td></tr>
<tr><td>Long forward + cho vay PV của F<sub>0</sub>(T)</td><td>Long tài sản</td><td>Tiền cho vay đủ trả F<sub>0</sub>(T) để nhận tài sản</td></tr>
</tbody></table>
<p>Quy tắc "đại số" để tự suy ra: <b>tài sản = phái sinh + trái phiếu</b>. Chuyển một vế sang bên kia thì đổi dấu long/short.</p>
${timeline(1, [{ t: 0, label: 'Trả S0', up: true, cls: 'pv' }, { t: 1, label: 'Nhận F0(T)' }], 'Long tài sản + short forward = khoản cho vay phi rủi ro: bỏ ra S0, nhận về F0(T).')}
<p>Vì danh mục "long tài sản + short forward" phi rủi ro, nó phải sinh lợi đúng bằng r:</p>
<div class="formula">S<sub>0</sub> × (1 + r)<sup>T</sup> = F<sub>0</sub>(T)</div>
<p class="tip"><b>Vì sao phái sinh định giá được mà không cần biết kỳ vọng của ai?</b> Vì phái sinh có thể được phòng hộ hoàn toàn bằng tài sản cơ sở, nên giá của nó chỉ phụ thuộc vào S<sub>0</sub>, r, T và chi phí/lợi ích nắm giữ, <b>không phụ thuộc</b> vào việc nhà đầu tư lạc quan hay bi quan, ngại rủi ro hay không. Đây là ý tưởng ${t('rn', 'định giá trung lập rủi ro (risk-neutral pricing)')}, sẽ dùng lại ở DE-10.</p>`,
    },
    {
      title: '4. Giá kỳ hạn không chênh lệch giá và chiến lược arbitrage',
      minutes: 12,
      html: `
<div class="formula">F<sub>0</sub>(T) = S<sub>0</sub> × (1 + r)<sup>T</sup> &nbsp;&nbsp;&nbsp; (không có lợi ích, chi phí nắm giữ)</div>
<p>T tính bằng năm, r là lãi suất phi rủi ro năm (ghép lãi hằng năm). Ý nghĩa: mua kỳ hạn = mua ngay hôm nay nhưng <b>trả tiền sau</b>, nên giá kỳ hạn phải cộng thêm tiền lãi của số tiền được "hoãn trả".</p>
<div class="example"><div class="ex-h">Ví dụ 4.1 - Giá kỳ hạn</div>
<p>Gà giá giao ngay 100 USD, lãi suất phi rủi ro 10%/năm, không có chi phí lưu giữ. Giá kỳ hạn 1 năm? Nếu cổ phiếu không trả cổ tức giá 50, r = 4%, kỳ hạn 6 tháng thì sao?</p>
<details><summary>Xem lời giải</summary>
<p>Gà: F<sub>0</sub>(1) = 100 × 1,10 = <b>110</b>.<br>Cổ phiếu: F<sub>0</sub>(0,5) = 50 × 1,04<sup>0,5</sup> = 50 × 1,0198 = <b>50,99</b>.</p>
${keys([['1,04 mũ 0,5 rồi nhân 50', '1.04 [y^x] 0.5 [×] 50 [=]', '50.9902']])}</details></div>

<h4>Khi giá thị trường cao hơn: cash-and-carry</h4>
<p>Nếu F<sub>thị trường</sub> &gt; S<sub>0</sub>(1 + r)<sup>T</sup>, forward <b>đắt</b>. Bán cái đắt (short forward), mua cái rẻ (mua tài sản bằng tiền vay). Gọi là ${t('cnc', 'cash-and-carry arbitrage')}.</p>
<div class="example"><div class="ex-h">Ví dụ 4.2 - Forward bị định giá cao</div>
<p>Vẫn gà: S<sub>0</sub> = 100, r = 10%, giá lý thuyết 110, nhưng thị trường đang chào giá kỳ hạn 1 năm là 115.</p>
<details><summary>Xem lời giải</summary>
<table class="plain"><thead><tr><th>Bước</th><th>t = 0</th><th>T = 1</th></tr></thead><tbody>
<tr><td>Vay 100 ở 10%</td><td>+100</td><td>-110</td></tr>
<tr><td>Mua gà</td><td>-100</td><td>(giao gà)</td></tr>
<tr><td>Short forward ở 115</td><td>0</td><td>+115</td></tr>
<tr><td><b>Tổng</b></td><td><b>0</b></td><td><b>+5</b></td></tr>
</tbody></table>
<p>Không bỏ vốn, không rủi ro (giá gà lúc T là bao nhiêu cũng không ảnh hưởng), lời chắc chắn <b>5</b> = 115 - 110.</p></details></div>

<h4>Khi giá thị trường thấp hơn: reverse cash-and-carry</h4>
<p>Nếu F<sub>thị trường</sub> &lt; S<sub>0</sub>(1 + r)<sup>T</sup>, forward <b>rẻ</b>. Long forward, bán khống tài sản và cho vay số tiền thu được. Gọi là ${t('rcnc', 'reverse cash-and-carry')}.</p>
<div class="example"><div class="ex-h">Ví dụ 4.3 - Forward bị định giá thấp</div>
<p>Cổ phiếu không trả cổ tức giá 80, r = 3%, kỳ hạn 9 tháng (T = 0,75). Thị trường chào giá kỳ hạn 81,00.</p>
<details><summary>Xem lời giải</summary>
<p>Giá lý thuyết: 80 × 1,03<sup>0,75</sup> = 80 × 1,02242 = <b>81,79</b> &gt; 81,00, forward đang rẻ.</p>
<table class="plain"><thead><tr><th>Bước</th><th>t = 0</th><th>T = 0,75</th></tr></thead><tbody>
<tr><td>Bán khống 1 cổ phiếu</td><td>+80</td><td>(trả lại cổ phiếu)</td></tr>
<tr><td>Cho vay 80 ở 3%</td><td>-80</td><td>+81,79</td></tr>
<tr><td>Long forward ở 81,00</td><td>0</td><td>-81,00 (nhận cổ phiếu để trả)</td></tr>
<tr><td><b>Tổng</b></td><td><b>0</b></td><td><b>+0,79</b></td></tr>
</tbody></table></details></div>
<div class="key">Mẹo nhớ: <b>forward đắt → short forward + mua tài sản</b> (vay tiền); <b>forward rẻ → long forward + bán khống tài sản</b> (cho vay tiền). Lợi nhuận arbitrage tại T = |F<sub>thị trường</sub> - F<sub>0</sub>(T)|.</div>`,
    },
    {
      title: '5. Giá giao ngay, giá kỳ vọng tương lai và trung lập rủi ro',
      minutes: 8,
      html: `
<p>Hãy phân biệt ba con số dễ nhầm:</p>
<ul>
<li>S<sub>0</sub>: ${t('spot', 'giá giao ngay (spot price)')} hôm nay.</li>
<li>E(S<sub>T</sub>): ${t('exp', 'giá kỳ vọng tương lai (expected future spot price)')}, tức dự báo của nhà đầu tư về giá tại T.</li>
<li>F<sub>0</sub>(T): giá kỳ hạn chốt hôm nay.</li>
</ul>
<p>Nhà đầu tư nắm tài sản rủi ro đòi hỏi lợi suất bằng lãi suất phi rủi ro cộng ${t('rp', 'phần bù rủi ro (risk premium, λ)')}. Vì vậy giá giao ngay hôm nay là giá trị hiện tại của giá kỳ vọng, chiết khấu ở mức có rủi ro:</p>
<div class="formula">S<sub>0</sub> = ${frac('E(S<sub>T</sub>)', '(1 + r + λ)<sup>T</sup>')} &nbsp;&nbsp;&nbsp;&nbsp; trong khi &nbsp;&nbsp;&nbsp;&nbsp; F<sub>0</sub>(T) = S<sub>0</sub>(1 + r)<sup>T</sup></div>
<div class="example"><div class="ex-h">Ví dụ 5.1</div>
<p>Cổ phiếu không trả cổ tức giá 100. Lãi suất phi rủi ro 5%, nhà đầu tư đòi phần bù rủi ro 4%. Tính giá kỳ vọng sau 1 năm và giá kỳ hạn 1 năm.</p>
<details><summary>Xem lời giải</summary>
<p>E(S<sub>1</sub>) = 100 × (1 + 5% + 4%) = <b>109</b>. F<sub>0</sub>(1) = 100 × 1,05 = <b>105</b>.</p>
<p>Giá kỳ hạn <b>thấp hơn</b> giá kỳ vọng đúng bằng phần bù rủi ro. Giá kỳ hạn không phải là dự báo của thị trường về giá tương lai; nó chỉ là giá không chênh lệch giá.</p></details></div>
<p><b>Vì sao F<sub>0</sub>(T) không chứa λ?</b> Người short forward có thể phòng hộ hoàn toàn bằng cách vay tiền mua tài sản (phần 3). Khi rủi ro đã bị loại bỏ, không ai được trả phần bù rủi ro, nên chỉ còn lãi suất phi rủi ro. Kết quả: giá phái sinh được tính <b>như thể</b> mọi nhà đầu tư trung lập rủi ro, dù thật ra họ không như vậy.</p>
<p class="warn"><b>Bẫy:</b> đề cho cả lợi suất kỳ vọng của tài sản (ví dụ 9%) và lãi suất phi rủi ro (5%). Giá kỳ hạn chỉ dùng <b>lãi suất phi rủi ro</b>. Dùng 9% là đáp án nhiễu.</p>`,
    },
    {
      title: '6. Chi phí nắm giữ (cost of carry): lợi ích và chi phí',
      minutes: 10,
      html: `
<p>Người mua tài sản ngay hôm nay rồi "giữ" (carry) đến T sẽ: (1) mất tiền lãi trên số tiền bỏ ra, (2) <b>nhận</b> các ${t('benefit', 'lợi ích nắm giữ (I)')}, (3) <b>chịu</b> các ${t('cost', 'chi phí nắm giữ (C)')}. Người long forward không giữ tài sản nên không nhận I và không chịu C. Giá kỳ hạn phải điều chỉnh cho đúng phần chênh lệch đó.</p>
<table class="plain"><thead><tr><th>Loại</th><th>Ví dụ</th><th>Tác động lên F<sub>0</sub>(T)</th></tr></thead><tbody>
<tr><td>Lợi ích bằng tiền</td><td>Cổ tức, coupon, lãi ngoại tệ</td><td>Giảm</td></tr>
<tr><td>Lợi ích phi tiền tệ</td><td>${t('cy', 'Lợi suất tiện ích (convenience yield)')}: lợi ích của việc có sẵn hàng trong kho khi khan hiếm</td><td>Giảm</td></tr>
<tr><td>Chi phí</td><td>Lưu kho, bảo hiểm, hao hụt</td><td>Tăng</td></tr>
</tbody></table>
<div class="formula">F<sub>0</sub>(T) = (S<sub>0</sub> - PV<sub>0</sub>(I) + PV<sub>0</sub>(C)) × (1 + r)<sup>T</sup></div>
<p>Với lợi ích/chi phí tính theo tỷ lệ liên tục (ví dụ tỷ suất cổ tức của chỉ số i, chi phí lưu kho c, lãi suất liên tục r):</p>
<div class="formula">F<sub>0</sub>(T) = S<sub>0</sub> × e<sup>(r + c - i)T</sup></div>

<div class="example"><div class="ex-h">Ví dụ 6.1 - Cổ phiếu có cổ tức</div>
<p>Cổ phiếu giá 60, sẽ trả cổ tức 1,50 sau 3 tháng. Lãi suất phi rủi ro 4%/năm. Tính giá kỳ hạn 6 tháng.</p>
<details><summary>Xem lời giải</summary>
<p>PV(I) = 1,50 / 1,04<sup>0,25</sup> = 1,4854. F<sub>0</sub>(0,5) = (60 - 1,4854) × 1,04<sup>0,5</sup> = 58,5146 × 1,0198 = <b>59,67</b>.</p>
<p>Nếu bỏ qua cổ tức sẽ ra 60 × 1,04<sup>0,5</sup> = 61,19 (cao hơn 1,51). Cổ tức thuộc về người cầm cổ phiếu, không thuộc về người long forward, nên giá kỳ hạn thấp hơn.</p>
${keys([
  ['Giá trừ PV cổ tức (chế độ AOS)', '60 [-] 1.5 [÷] 1.04 [y^x] 0.25 [=]', '58.5146'],
  ['Nhân hệ số lãi 6 tháng', '[×] 1.04 [y^x] 0.5 [=]', '59.6735'],
])}</details></div>
<div class="example"><div class="ex-h">Ví dụ 6.2 - Hàng hóa có chi phí lưu kho</div>
<p>Vàng giá giao ngay 2.000 USD/ounce. Giá trị hiện tại của chi phí lưu kho và bảo hiểm trong 1 năm là 12 USD. r = 5%. (a) Giá kỳ hạn 1 năm? (b) Nếu thị trường chào 2.130 USD thì arbitrage thế nào?</p>
<details><summary>Xem lời giải</summary>
<p>(a) F<sub>0</sub>(1) = (2.000 + 12) × 1,05 = <b>2.112,60</b> (cao hơn 2.100 nếu không tính chi phí lưu kho).</p>
<p>(b) 2.130 &gt; 2.112,60: forward đắt. Vay 2.012 (mua vàng 2.000 và trả trước chi phí lưu kho 12), short forward ở 2.130. Tại T giao vàng nhận 2.130, trả nợ 2.012 × 1,05 = 2.112,60, lời chắc chắn <b>17,40</b>.</p></details></div>
<div class="example"><div class="ex-h">Ví dụ 6.3 - Chỉ số có tỷ suất cổ tức liên tục</div>
<p>Chỉ số ở mức 1.000, tỷ suất cổ tức liên tục 1,5%, lãi suất liên tục 4%. Giá kỳ hạn 6 tháng?</p>
<details><summary>Xem lời giải</summary><p>F<sub>0</sub>(0,5) = 1.000 × e<sup>(0,04 - 0,015) × 0,5</sup> = 1.000 × e<sup>0,0125</sup> = <b>1.012,58</b>.</p></details></div>
<p class="tip"><b>Convenience yield</b> lớn (ví dụ dầu khi khan hiếm) có thể làm giá kỳ hạn <b>thấp hơn</b> giá giao ngay. Thị trường khi đó ở trạng thái ${t('back', 'backwardation')}; ngược lại, giá kỳ hạn cao hơn giá giao ngay gọi là ${t('contango', 'contango')}.</p>`,
    },
    {
      title: '7. Tóm tắt và bẫy thường gặp',
      minutes: 3,
      html: `
<table class="plain"><thead><tr><th>Tình huống</th><th>Nhớ</th></tr></thead><tbody>
<tr><td>Arbitrage</td><td>Không vốn, không rủi ro, lời dương. Có rủi ro thì là đầu cơ</td></tr>
<tr><td>Sao chép</td><td>Tài sản = phái sinh + trái phiếu; long tài sản + short forward = cho vay phi rủi ro</td></tr>
<tr><td>Giá kỳ hạn cơ bản</td><td>F<sub>0</sub>(T) = S<sub>0</sub>(1 + r)<sup>T</sup>, chỉ dùng lãi suất phi rủi ro</td></tr>
<tr><td>Forward đắt</td><td>Cash-and-carry: vay tiền, mua tài sản, short forward</td></tr>
<tr><td>Forward rẻ</td><td>Reverse: bán khống tài sản, cho vay, long forward</td></tr>
<tr><td>E(S<sub>T</sub>) và F<sub>0</sub>(T)</td><td>E(S<sub>T</sub>) chứa phần bù rủi ro; F<sub>0</sub>(T) không. Forward không phải dự báo giá</td></tr>
<tr><td>Lợi ích (cổ tức, coupon, convenience yield)</td><td>Làm <b>giảm</b> giá kỳ hạn: trừ PV(I)</td></tr>
<tr><td>Chi phí (lưu kho, bảo hiểm)</td><td>Làm <b>tăng</b> giá kỳ hạn: cộng PV(C)</td></tr>
<tr><td>Giới hạn arbitrage</td><td>Chi phí giao dịch, thiếu vốn, hạn chế bán khống, rủi ro mô hình</td></tr>
</tbody></table>
<p>Tiếp theo: tab <b>Luyện tập</b> - 10 câu. DE-05 sẽ dùng các công thức này để định giá forward <b>trong suốt thời hạn</b> hợp đồng.</p>`,
    },
  ];

  const glossary = {
    arb: ['Arbitrage', 'Kinh doanh chênh lệch giá', 'Giao dịch không cần vốn ròng, không rủi ro mà vẫn có lời dương.'],
    lop: ['Law of one price', 'Luật một giá', 'Hai tài sản có dòng tiền tương lai giống hệt nhau phải có cùng giá hôm nay.'],
    repl: ['Replication', 'Sao chép', 'Tạo dòng tiền giống hệt phái sinh bằng tài sản cơ sở và vay/cho vay phi rủi ro.'],
    rn: ['Risk-neutral pricing', 'Định giá trung lập rủi ro', 'Định giá phái sinh như thể nhà đầu tư không đòi phần bù rủi ro: chiết khấu ở lãi suất phi rủi ro.'],
    cnc: ['Cash-and-carry arbitrage', 'Arbitrage mua giao ngay - bán kỳ hạn', 'Khi forward đắt: vay tiền mua tài sản, giữ đến T và short forward.'],
    rcnc: ['Reverse cash-and-carry arbitrage', 'Arbitrage ngược', 'Khi forward rẻ: bán khống tài sản, cho vay tiền thu được và long forward.'],
    spot: ['Spot price', 'Giá giao ngay', 'Giá mua bán tài sản để giao nhận ngay hôm nay.'],
    exp: ['Expected future spot price', 'Giá giao ngay kỳ vọng tương lai', 'Dự báo của nhà đầu tư về giá tài sản tại thời điểm T.'],
    rp: ['Risk premium', 'Phần bù rủi ro', 'Phần lợi suất vượt lãi suất phi rủi ro mà nhà đầu tư đòi hỏi khi nắm tài sản rủi ro.'],
    benefit: ['Carry benefits (I)', 'Lợi ích nắm giữ', 'Thu nhập hoặc lợi ích từ việc giữ tài sản: cổ tức, coupon, convenience yield.'],
    cost: ['Carry costs (C)', 'Chi phí nắm giữ', 'Chi phí phải trả khi giữ tài sản: lưu kho, bảo hiểm, hao hụt.'],
    cy: ['Convenience yield', 'Lợi suất tiện ích', 'Lợi ích phi tiền tệ của việc có sẵn hàng hóa trong tay, nhất là khi khan hiếm.'],
    back: ['Backwardation', 'Trạng thái giá kỳ hạn thấp hơn giao ngay', 'Giá kỳ hạn thấp hơn giá giao ngay, thường do lợi ích nắm giữ (convenience yield) lớn.'],
    contango: ['Contango', 'Trạng thái giá kỳ hạn cao hơn giao ngay', 'Giá kỳ hạn cao hơn giá giao ngay, thường khi chi phí nắm giữ lớn hơn lợi ích.'],
  };

  const practice = [
    { q: 'Cổ phiếu không trả cổ tức giá 25. Lãi suất phi rủi ro 6%/năm. Giá kỳ hạn 1 năm không chênh lệch giá gần nhất với:', choices: ['26,50', '25,00', '23,58'], answer: 0, explain: 'F = 25 x 1,06 = 26,50. B bỏ qua chi phí vốn; C là chiết khấu (25/1,06) thay vì ghép lãi.' },
    { q: 'Tài sản giá 200, không có lợi ích hay chi phí nắm giữ, lãi suất phi rủi ro 3%/năm. Giá kỳ hạn 6 tháng gần nhất với:', choices: ['206,00', '202,98', '197,07'], answer: 1, explain: 'F = 200 x 1,03^0,5 = 202,98. A dùng cả năm (T = 1); C chia thay vì nhân.' },
    { q: 'Hàng hóa giá giao ngay 1.500, giá trị hiện tại của chi phí lưu kho trong 1 năm là 20, lãi suất phi rủi ro 4%. Giá kỳ hạn 1 năm gần nhất với:', choices: ['1.560,00', '1.539,20', '1.580,80'], answer: 2, explain: 'F = (1.500 + 20) x 1,04 = 1.580,80. A bỏ qua chi phí lưu kho; B trừ chi phí như thể đó là lợi ích.' },
    { q: 'Cổ phiếu không trả cổ tức giá 40, lãi suất phi rủi ro 5%. Giá kỳ hạn 1 năm trên thị trường là 43. Chiến lược arbitrage và lợi nhuận tại đáo hạn là:', choices: ['Vay 40, mua cổ phiếu, short forward; lời 1,00', 'Bán khống cổ phiếu, cho vay 40, long forward; lời 1,00', 'Vay 40, mua cổ phiếu, short forward; lời 3,00'], answer: 0, explain: 'Giá lý thuyết 40 x 1,05 = 42 < 43: forward đắt, dùng cash-and-carry. Lời = 43 - 42 = 1. B là chiến lược khi forward rẻ. C quên trả lãi vay (43 - 40).' },
    { q: 'Tài sản giá 100, r = 5%, không có lợi ích/chi phí nắm giữ. Giá kỳ hạn 1 năm trên thị trường là 103. Nhà arbitrage nên:', choices: ['Vay tiền mua tài sản và short forward; lời 2', 'Bán khống tài sản, cho vay tiền thu được và long forward; lời 2', 'Không làm gì vì 103 cao hơn giá giao ngay'], answer: 1, explain: 'Giá lý thuyết 105 > 103: forward rẻ, dùng reverse cash-and-carry. Tại T nhận 105 từ khoản cho vay, trả 103 qua forward: lời 2. A làm ngược chiều sẽ lỗ 2. C so sai mốc: phải so với 105, không phải 100.' },
    { q: 'Cổ phiếu giá 120 sẽ trả cổ tức 2 sau 6 tháng. Lãi suất phi rủi ro 5%. Giá kỳ hạn 1 năm gần nhất với:', choices: ['126,00', '128,05', '123,95'], answer: 2, explain: 'PV(I) = 2/1,05^0,5 = 1,95; F = (120 - 1,95) x 1,05 = 123,95. A bỏ qua cổ tức; B cộng cổ tức như thể đó là chi phí.' },
    { q: 'Nếu lợi suất tiện ích (convenience yield) của một hàng hóa tăng lên, giá kỳ hạn của hàng hóa đó NHIỀU KHẢ NĂNG:', choices: ['Tăng', 'Giảm', 'Không đổi'], answer: 1, explain: 'Convenience yield là lợi ích phi tiền tệ của người giữ hàng, mà người long forward không nhận được, nên làm giảm giá kỳ hạn.' },
    { q: 'Cổ phiếu không trả cổ tức giá 50. Lãi suất phi rủi ro 4%, nhà đầu tư đòi phần bù rủi ro 6%. Giá kỳ hạn 1 năm không chênh lệch giá là:', choices: ['55,00', '52,00', '53,00'], answer: 1, explain: 'Giá kỳ hạn chỉ dùng lãi suất phi rủi ro: 50 x 1,04 = 52. A là giá kỳ vọng E(S1) = 50 x 1,10. C chỉ dùng phần bù rủi ro.' },
    { q: 'Danh mục nào sau đây tương đương với một khoản cho vay phi rủi ro?', choices: ['Long tài sản cơ sở và short forward trên tài sản đó', 'Long tài sản cơ sở và long forward', 'Short tài sản cơ sở và short forward'], answer: 0, explain: 'Short forward chốt giá bán tài sản đang nắm, nên chắc chắn nhận F0(T) tại T: giống trái phiếu phi rủi ro. B và C đều nhân đôi rủi ro giá thay vì triệt tiêu.' },
    { q: 'Yếu tố nào sau đây là một giới hạn của arbitrage?', choices: ['Phái sinh luôn được định giá theo kỳ vọng của nhà đầu tư', 'CCP cấm các giao dịch arbitrage trên sàn', 'Không phải lúc nào cũng huy động đủ vốn hoặc bán khống được tài sản'], answer: 2, explain: 'Thiếu vốn, chi phí giao dịch, hạn chế bán khống là các giới hạn của arbitrage. A sai: giá phái sinh không phụ thuộc kỳ vọng của nhà đầu tư. B sai: CCP không cấm arbitrage.' },
  ];

  window.LESSONS['DE-04'] = {
    moduleId: 'DE-04',
    calculator: 'BA II Plus',
    warmup: [
      'Ôn QM-04: vì sao hai danh mục có cùng dòng tiền phải có cùng giá?',
      'Ôn DE-02: payoff khi đáo hạn của long forward là gì?',
      'Đoán trước: mua vàng kỳ hạn 1 năm nên đắt hơn hay rẻ hơn mua vàng hôm nay? Vì sao?',
    ],
    sections,
    glossary,
    practice,
    widgets: {},
    slides: [],
    wrapup: [
      'Viết công thức giá kỳ hạn có lợi ích và chi phí nắm giữ, giải thích dấu của từng thành phần.',
      'Mô tả từng bước chiến lược cash-and-carry và reverse cash-and-carry.',
      'Vì sao giá kỳ hạn không phải là dự báo của thị trường về giá tương lai?',
    ],
  };
}());
