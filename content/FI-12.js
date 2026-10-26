// Bài giảng FI-12 - Yield-Based Bond Convexity and Portfolio Properties (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t, frac, keys } = window.CFAH;

  const sections = [
    {
      title: '1. Bức tranh lớn: duration là đường thẳng, giá là đường cong',
      minutes: 5,
      html: `
<p>Ở FI-11, modified duration ước lượng %ΔP bằng một <b>đường tiếp tuyến</b>. Nhưng đường giá - lợi suất của trái phiếu thông thường là đường <b>cong lồi</b> (convex): nằm phía trên tiếp tuyến ở cả hai phía. Hệ quả:</p>
<div class="key">Chỉ dùng duration thì <b>luôn đánh giá thấp</b> giá mới: ước lượng mức giảm giá quá lớn khi lợi suất tăng, và ước lượng mức tăng giá quá nhỏ khi lợi suất giảm. Sai lệch càng lớn khi Δy càng lớn.</div>
<p>${t('convexity', 'Convexity')} đo độ cong này và cho ta một số hạng sửa sai bậc hai. Module này ứng với 3 LOS:</p>
<ol>
  <li>Tính và giải thích convexity, mô tả convexity adjustment (LOS 1).</li>
  <li>Tính %ΔP khi biết duration, convexity và Δy (LOS 2).</li>
  <li>Tính duration và convexity của danh mục, nêu giới hạn của các thước đo này (LOS 3).</li>
</ol>
<p class="tip">Ví dụ chính: trái phiếu <b>20 năm, coupon 5% hằng năm, YTM 5%, giá 100</b>. MacDur 13,0853; ModDur 12,4622; convexity 211,33. Trái phiếu dài nên độ cong thấy rõ hơn trái phiếu 5 năm ở FI-11.</p>`,
    },
    {
      title: '2. Convexity: định nghĩa và cách tính',
      minutes: 12,
      html: `
<p>Convexity là thước đo bậc hai của độ nhạy giá: duration đo <b>độ dốc</b>, convexity đo <b>độ cong</b> (tốc độ thay đổi của độ dốc). Có hai cách tính ở Level I:</p>
<h4>a) ${t('aconv', 'Approximate convexity')} (dùng nhiều nhất trong đề)</h4>
<div class="formula">ApproxCon = ${frac('PV<sub>-</sub> + PV<sub>+</sub> - 2 × PV<sub>0</sub>', '(Δy)<sup>2</sup> × PV<sub>0</sub>')}</div>
<p>Dùng chính ba mức giá đã tính cho approximate modified duration. Tử số là "phần lồi": nếu đường giá thẳng thì PV<sub>-</sub> + PV<sub>+</sub> đúng bằng 2 × PV<sub>0</sub> và convexity bằng 0.</p>
<div class="example"><div class="ex-h">Ví dụ 2.1 - Approximate duration và convexity</div>
<p>Trái phiếu 20 năm coupon 5%, YTM 5%, giá 100. Dùng Δy = 10 bp.</p>
<details><summary>Xem lời giải</summary>
${keys([
  ['Giá ở 4,9%', '[2ND] [FV] 20 [N] 4.9 [I/Y] 5 [PMT] 100 [FV] [CPT] [PV]', 'PV = -101.256856'],
  ['Giá ở 5,1%', '5.1 [I/Y] [CPT] [PV]', 'PV = -98.764278'],
])}
<p>ApproxModDur = (101,256856 - 98,764278)/(2 × 0,001 × 100) = <b>12,4629</b><br>
ApproxCon = (101,256856 + 98,764278 - 200)/(0,001<sup>2</sup> × 100) = 0,021134/0,0001 = <b>211,34</b></p>
<p>Lưu ý: tử số rất nhỏ nên phải giữ <b>đủ số lẻ</b> (đặt máy hiển thị 6 chữ số thập phân). Làm tròn giá còn 4 số lẻ sẽ ra 212,00, sai lệch đáng kể.</p></details></div>
<h4>b) Convexity tính từ dòng tiền</h4>
<div class="formula">Convexity (theo kỳ) = ${frac('1', 'PV')} × Σ ${frac('t(t + 1) × CF<sub>t</sub>', '(1 + r)<sup>t + 2</sup>')} &nbsp;&nbsp;&nbsp; AnnConvexity = ${frac('Convexity theo kỳ', 'm<sup>2</sup>')}</div>
<p>Với trái phiếu bán niên (m = 2), phải chia cho <b>4</b> (không phải 2) để năm hóa, vì convexity gắn với (Δy)<sup>2</sup>. Zero-coupon kỳ hạn T trả lãi năm có convexity = T(T + 1)/(1 + r)<sup>2</sup>.</p>
<p>${t('moneycon', 'Money convexity')} = AnnConvexity × full price, dùng khi muốn đổi số hạng convexity ra tiền.</p>`,
    },
    {
      title: '3. Ước lượng %ΔP bằng duration và convexity',
      minutes: 13,
      html: `
<div class="formula">%ΔP ≈ (-AnnModDur × Δy) + ½ × AnnConvexity × (Δy)<sup>2</sup></div>
<p>Số hạng thứ hai là ${t('convadj', 'convexity adjustment')}. Với convexity dương, nó <b>luôn dương</b> dù lợi suất tăng hay giảm (vì (Δy)<sup>2</sup> &gt; 0): nó làm mức giảm nhỏ lại và mức tăng lớn hơn. Tương tự với tiền: ΔV ≈ -MoneyDur × Δy + ½ × MoneyCon × (Δy)<sup>2</sup>.</p>
<div class="example"><div class="ex-h">Ví dụ 3.1 - So sánh ước lượng với giá thực</div>
<p>Trái phiếu 20 năm coupon 5%, YTM 5%: ModDur 12,4629; convexity 211,34 (từ Ví dụ 2.1). Ước lượng %ΔP khi lợi suất tăng 100 bp, rồi so với giá thực.</p>
<details><summary>Xem lời giải</summary>
<p>Phần duration: -12,4629 × 0,01 = -12,46%.<br>
Convexity adjustment: ½ × 211,34 × 0,01<sup>2</sup> = +1,06%.<br>
Ước lượng: -12,46% + 1,06% = <b>-11,41%</b>. Giá thực ở YTM 6% là 88,5301, tức <b>-11,47%</b>.</p></details></div>
<table class="plain"><thead><tr><th>Δy</th><th>Giá thực</th><th>%ΔP thực</th><th>Chỉ duration</th><th>Duration + convexity</th></tr></thead><tbody>
<tr><td>-200 bp</td><td>129,7549</td><td>+29,75%</td><td>+24,93%</td><td>+29,15%</td></tr>
<tr><td>-100 bp</td><td>113,5903</td><td>+13,59%</td><td>+12,46%</td><td>+13,52%</td></tr>
<tr><td>+100 bp</td><td>88,5301</td><td>-11,47%</td><td>-12,46%</td><td>-11,41%</td></tr>
<tr><td>+200 bp</td><td>78,8120</td><td>-21,19%</td><td>-24,93%</td><td>-20,70%</td></tr>
</tbody></table>
<p>Ba nhận xét: (1) duration đơn thuần sai nhiều khi Δy lớn; (2) thêm convexity gần đúng hơn hẳn nhưng vẫn còn sai lệch nhỏ (các bậc cao hơn); (3) lợi suất <b>giảm</b> 100 bp thì giá tăng 13,59%, nhiều hơn mức giảm 11,47% khi lợi suất <b>tăng</b> 100 bp: đó là lợi ích của convexity dương.</p>
<h4>Thử ngay: giá thực và giá ước lượng</h4>
<div class="widget" data-widget="convexity"></div>
<p class="warn"><b>Bẫy:</b> (1) quên ½; (2) đổi dấu số hạng convexity khi lợi suất tăng (nó vẫn cộng vào); (3) nhập Δy dạng phần trăm (1 thay vì 0,01) khiến số hạng bình phương sai hoàn toàn. Nếu đề cho convexity dạng "đã chia 100" (ví dụ 2,11 thay vì 211), hãy nhìn độ lớn của convexity adjustment cho hợp lý: với Δy 100 bp, nó thường chỉ cỡ dưới 2%.</p>`,
    },
    {
      title: '4. Điều gì làm convexity lớn hơn',
      minutes: 6,
      html: `
<p>Các yếu tố khác không đổi, convexity <b>cao hơn</b> khi:</p>
<ul>
<li><b>Kỳ hạn dài hơn</b> (và duration cao hơn): trái phiếu 5 năm coupon 6% ở FI-11 chỉ có convexity 22,41, trong khi trái phiếu 20 năm ở đây có 211,34.</li>
<li><b>Coupon thấp hơn</b> và <b>lợi suất thấp hơn</b>: cùng hướng với duration.</li>
<li><b>Dòng tiền phân tán hơn</b> với cùng duration: zero-coupon kỳ hạn 13,0853 năm (cùng MacDur với trái phiếu 20 năm, YTM 5%) chỉ có convexity 13,0853 × 14,0853/1,05<sup>2</sup> = <b>167,18</b>, thấp hơn 211,34 của trái phiếu coupon. Đây là lý do danh mục "barbell" (ngắn + dài) có convexity cao hơn danh mục "bullet" (tập trung một kỳ hạn) cùng duration.</li>
</ul>
<p class="tip">Convexity cao là điều tốt với người nắm giữ trái phiếu (lời nhiều hơn khi lợi suất giảm, lỗ ít hơn khi lợi suất tăng), nên thị trường thường "định giá" nó: trái phiếu convexity cao hơn có thể có lợi suất thấp hơn một chút. Trái phiếu callable có thể có <b>convexity âm</b> khi lợi suất thấp; phần đó dùng effective convexity ở FI-13.</p>`,
    },
    {
      title: '5. Duration và convexity của danh mục',
      minutes: 14,
      html: `
<p>Có hai cách tính duration của một danh mục trái phiếu:</p>
<ol>
<li><b>Bình quân gia quyền</b> duration (hoặc convexity) của từng trái phiếu, trọng số là <b>giá trị thị trường</b>. Cách này dễ tính, được dùng phổ biến.</li>
<li>Tính từ ${t('cfy', 'cash flow yield')}: gộp toàn bộ dòng tiền của danh mục, tìm lợi suất nội tại (IRR) của cả dòng tiền đó, rồi tính duration như một trái phiếu. Chính xác hơn về lý thuyết, nhưng khó tính và cash flow yield không phải là bình quân gia quyền của các YTM.</li>
</ol>
<div class="formula">PortDur = Σ w<sub>i</sub> × Dur<sub>i</sub> &nbsp;&nbsp;&nbsp;&nbsp; PortCon = Σ w<sub>i</sub> × Con<sub>i</sub> &nbsp;&nbsp;&nbsp;&nbsp; w<sub>i</sub> = ${frac('Giá trị thị trường i', 'Tổng giá trị danh mục')}</div>
<div class="example"><div class="ex-h">Ví dụ 5.1 - Danh mục 3 trái phiếu (trả lãi năm)</div>
<table class="plain"><thead><tr><th>Trái phiếu</th><th>Giá trị thị trường</th><th>Trọng số</th><th>ModDur</th><th>Convexity</th></tr></thead><tbody>
<tr><td>A: zero-coupon 3 năm, YTM 4%</td><td>2.000.000</td><td>0,20</td><td>2,8846</td><td>11,0947</td></tr>
<tr><td>B: 10 năm, coupon 4%, YTM 5%</td><td>3.000.000</td><td>0,30</td><td>7,9615</td><td>78,2942</td></tr>
<tr><td>C: 20 năm, coupon 5%, YTM 5,5%</td><td>5.000.000</td><td>0,50</td><td>12,1826</td><td>204,2297</td></tr>
</tbody></table>
<p>Tính ModDur, convexity của danh mục và ước lượng %ΔP nếu mọi lợi suất cùng tăng 100 bp.</p>
<details><summary>Xem lời giải</summary>
<p>PortModDur = 0,2 × 2,8846 + 0,3 × 7,9615 + 0,5 × 12,1826 = <b>9,0567</b><br>
PortCon = 0,2 × 11,0947 + 0,3 × 78,2942 + 0,5 × 204,2297 = <b>127,82</b><br>
%ΔP ≈ -9,0567 × 0,01 + ½ × 127,82 × 0,0001 = -9,06% + 0,64% = <b>-8,42%</b></p>
<p>Định giá lại từng trái phiếu ở lợi suất mới cho kết quả chính xác -8,45%, rất gần ước lượng.</p>
<p>Đổi ra tiền: PortMoneyDur = 9,0567 × 10.000.000 = 90.566.639; mỗi bp danh mục mất khoảng 9.057 USD.</p></details></div>
<h4>Giới hạn của các thước đo</h4>
<ul>
<li>Cách bình quân gia quyền ngầm giả định ${t('parallel', 'dịch chuyển song song')}: lợi suất của <b>mọi</b> trái phiếu thay đổi cùng một lượng. Trong ví dụ, ba trái phiếu có YTM khác nhau (4%, 5%, 5,5%) và kỳ hạn khác nhau; nếu đường cong dốc thêm (lợi suất dài tăng nhiều hơn ngắn), ước lượng sẽ sai. Rủi ro này gọi là rủi ro đường cong; key rate duration ở FI-13 xử lý nó.</li>
<li>Yield duration và convexity giả định <b>dòng tiền không đổi</b> khi lợi suất thay đổi, nên không áp dụng tốt cho trái phiếu có quyền chọn hoặc MBS (cần effective duration và effective convexity).</li>
<li>Duration + convexity vẫn chỉ là <b>xấp xỉ bậc hai</b>, sai số tăng khi Δy rất lớn.</li>
<li>Duration thay đổi theo thời gian và theo lợi suất, nên danh mục cần tái cân bằng để giữ duration mục tiêu.</li>
</ul>`,
    },
    {
      title: '6. Tóm tắt và bẫy thường gặp',
      minutes: 5,
      html: `
<table class="plain"><thead><tr><th>Tình huống</th><th>Nhớ</th></tr></thead><tbody>
<tr><td>ApproxCon</td><td>(PV<sub>-</sub> + PV<sub>+</sub> - 2PV<sub>0</sub>)/((Δy)<sup>2</sup> × PV<sub>0</sub>); giữ nhiều số lẻ</td></tr>
<tr><td>%ΔP</td><td>-ModDur × Δy + ½ × Con × (Δy)<sup>2</sup></td></tr>
<tr><td>Convexity adjustment</td><td>Luôn cộng (convexity dương), dù lợi suất tăng hay giảm</td></tr>
<tr><td>Chỉ dùng duration</td><td>Luôn ước lượng giá mới thấp hơn giá thực (với trái phiếu thông thường)</td></tr>
<tr><td>Năm hóa convexity</td><td>Chia cho m<sup>2</sup> (bán niên chia 4)</td></tr>
<tr><td>Convexity cao hơn khi</td><td>Kỳ hạn dài, coupon thấp, lợi suất thấp, dòng tiền phân tán</td></tr>
<tr><td>Danh mục</td><td>Bình quân theo giá trị thị trường; giả định dịch chuyển song song</td></tr>
<tr><td>Có quyền chọn</td><td>Không dùng yield duration/convexity; dùng effective (FI-13)</td></tr>
</tbody></table>
<p>Tiếp theo: làm 10 câu (rút ngẫu nhiên từ ngân hàng 30 câu, mỗi lần làm một bộ khác) ở tab <b>Luyện tập</b>.</p>`,
    },
  ];

  const glossary = {
    convexity: ['Convexity', 'Độ lồi', 'Thước đo bậc hai của độ nhạy giá trái phiếu theo lợi suất; đo độ cong của đường giá - lợi suất.'],
    aconv: ['Approximate convexity', 'Độ lồi xấp xỉ', '(PV- + PV+ - 2PV0)/((Δy)^2 x PV0).'],
    moneycon: ['Money convexity', 'Money convexity', 'AnnConvexity x full price; dùng để tính số hạng convexity theo tiền.'],
    convadj: ['Convexity adjustment', 'Điều chỉnh độ lồi', '½ x Convexity x (Δy)^2; số hạng cộng thêm vào ước lượng của duration.'],
    cfy: ['Cash flow yield', 'Lợi suất dòng tiền', 'IRR của toàn bộ dòng tiền danh mục; không bằng bình quân gia quyền YTM các trái phiếu.'],
    parallel: ['Parallel shift', 'Dịch chuyển song song', 'Lợi suất ở mọi kỳ hạn thay đổi cùng một lượng.'],
  };

  const practice = [
    { q: 'Trái phiếu giá 100,0000. Khi YTM giảm 50 bp giá là 106,5040; khi YTM tăng 50 bp giá là 94,0248. Approximate convexity gần nhất với:', choices: ['211,52', '105,76', '0,02'], answer: 0, explain: '(106,5040 + 94,0248 - 200)/(0,005^2 x 100) = 0,5288/0,0025 = 211,52. Lựa chọn 105,76 nhân thêm ½ (nhầm với convexity adjustment). Lựa chọn 0,02 nhập Δy = 0,5 thay vì 0,005.' },
    { q: 'Trái phiếu có ModDur 12,46 và convexity 211,34. Lợi suất tăng 100 bp. %ΔP ước lượng gần nhất với:', choices: ['-12,46%', '-11,40%', '-13,52%'], answer: 1, explain: '-12,46 x 0,01 + ½ x 211,34 x 0,0001 = -12,46% + 1,06% = -11,40%. Lựa chọn -12,46% bỏ convexity; lựa chọn -13,52% trừ convexity adjustment thay vì cộng.' },
    { q: 'Trái phiếu có ModDur 12,46 và convexity 211,34. Lợi suất giảm 200 bp. %ΔP ước lượng gần nhất với:', choices: ['+24,92%', '+33,37%', '+29,15%'], answer: 2, explain: '12,46 x 0,02 + ½ x 211,34 x 0,0004 = 24,92% + 4,23% = 29,15%. Lựa chọn +24,92% bỏ convexity; lựa chọn +33,37% quên ½.' },
    { q: 'Với trái phiếu không có quyền chọn (convexity dương), khi lợi suất thay đổi cùng một lượng theo hai chiều:', choices: ['Giá tăng (khi lợi suất giảm) nhiều hơn giá giảm (khi lợi suất tăng)', 'Giá tăng và giảm cùng một lượng', 'Giá giảm (khi lợi suất tăng) nhiều hơn giá tăng (khi lợi suất giảm)'], answer: 0, explain: 'Đường giá - lợi suất lồi nên nằm trên tiếp tuyến; convexity adjustment luôn cộng vào. Ví dụ trái phiếu 20 năm: -100 bp thì +13,59%, +100 bp thì -11,47%. Phương án "tăng và giảm cùng một lượng" là kết quả nếu chỉ dùng duration.' },
    { q: 'Trái phiếu có convexity 80. Lợi suất tăng 150 bp. Convexity adjustment gần nhất với:', choices: ['-0,90%', '+0,90%', '+1,80%'], answer: 1, explain: '½ x 80 x 0,015^2 = 0,009 = +0,90%. Số hạng này dương dù lợi suất tăng, nên lựa chọn -0,90% sai dấu. Lựa chọn +1,80% quên ½.' },
    { q: 'Danh mục gồm trái phiếu X (giá trị 4 triệu, ModDur 3,0) và trái phiếu Y (giá trị 6 triệu, ModDur 8,0). Modified duration của danh mục là:', choices: ['5,5', '11,0', '6,0'], answer: 2, explain: '0,4 x 3,0 + 0,6 x 8,0 = 6,0. Lựa chọn 5,5 là trung bình cộng không trọng số; lựa chọn 11,0 cộng hai duration.' },
    { q: 'Hạn chế chính của cách tính duration danh mục bằng bình quân gia quyền theo giá trị thị trường là:', choices: ['Ngầm giả định lợi suất của mọi trái phiếu thay đổi cùng một lượng (dịch chuyển song song)', 'Không dùng được khi danh mục có hơn hai trái phiếu', 'Luôn cho kết quả lớn hơn cách cash flow yield'], answer: 0, explain: 'Bình quân gia quyền chỉ đúng khi mọi lợi suất cùng đổi một lượng. Nếu đường cong dốc thêm hay xoắn, ước lượng sai. Hai phương án "không dùng được khi có hơn hai trái phiếu" và "luôn lớn hơn cách cash flow yield" đều không đúng.' },
    { q: 'Hai danh mục cùng giá trị và cùng modified duration 7. Danh mục P gồm trái phiếu 2 năm và 15 năm; danh mục Q gồm trái phiếu 7 năm. Phát biểu nào đúng nhất?', choices: ['Q có convexity cao hơn vì dòng tiền tập trung', 'P có convexity cao hơn vì dòng tiền phân tán hơn', 'Hai danh mục có cùng convexity vì cùng duration'], answer: 1, explain: 'Với cùng duration, dòng tiền càng phân tán quanh duration thì convexity càng cao (barbell > bullet). Cùng duration không có nghĩa cùng convexity.' },
    { q: 'Các trái phiếu cùng YTM 5% và không có quyền chọn. Trái phiếu nào có convexity cao nhất?', choices: ['Zero-coupon 10 năm', 'Coupon 8%, 30 năm', 'Zero-coupon 30 năm'], answer: 2, explain: 'Kỳ hạn dài hơn và coupon thấp hơn đều làm convexity tăng; zero-coupon 30 năm có cả hai. Zero-coupon 30 năm có convexity 30 x 31/1,05^2 = 843,5, lớn hơn nhiều so với zero-coupon 10 năm (99,8).' },
    { q: 'Trái phiếu có full price 102,00, ModDur 7,0, convexity 60. Lợi suất tăng 50 bp. Giá mới ước lượng gần nhất với:', choices: ['98,51', '98,43', '98,35'], answer: 0, explain: '%ΔP = -7 x 0,005 + ½ x 60 x 0,000025 = -3,5% + 0,075% = -3,425%; giá = 102 x (1 - 0,03425) = 98,51. Lựa chọn 98,43 bỏ convexity; lựa chọn 98,35 trừ convexity adjustment.' },
    { q: 'Trái phiếu 10 năm, coupon 4% trả hằng năm, YTM 5%, giá 92,278265. Ở YTM 4,9% giá là 93,016566; ở YTM 5,1% giá là 91,547190. Approximate convexity gần nhất với:', choices: ['39,15', '78,31', '19,58'], answer: 1, explain: 'ApproxCon = (93,016566 + 91,547190 - 2 x 92,278265)/(0,001^2 x 92,278265) = 0,007226/0,0000922783 = 78,31. Lựa chọn 39,15 nhân thêm ½ (nhầm với convexity adjustment) hoặc thêm số 2 vào mẫu. Lựa chọn 19,58 dùng Δy = 0,002 (cả khoảng 20 bp).' },
    { q: 'Trái phiếu zero-coupon 8 năm, YTM 5% (trả lãi năm). Convexity gần nhất với:', choices: ['32,65', '72,00', '65,31'], answer: 2, explain: 'Convexity của zero-coupon = T(T + 1)/(1 + r)^2 = 8 x 9/1,05^2 = 72/1,1025 = 65,31. Lựa chọn 72,00 quên chia (1 + r)^2. Lựa chọn 32,65 nhân thêm ½.' },
    { q: 'Convexity tính theo kỳ của một trái phiếu trả coupon nửa năm là 240. Convexity năm hóa gần nhất với:', choices: ['120', '240', '60'], answer: 2, explain: 'Convexity gắn với (Δy)^2 nên năm hóa bằng cách chia m^2 = 4: 240/4 = 60. Lựa chọn 120 chia 2 như khi năm hóa duration. Lựa chọn 240 quên năm hóa.' },
    { q: 'Vị thế trái phiếu có giá trị thị trường 4.000.000 USD, modified duration 6,0 và convexity 85. Lợi suất tăng 50 bp. Thay đổi giá trị ước lượng (dùng cả duration và convexity) gần nhất với:', choices: ['-115.750 USD', '-120.000 USD', '-124.250 USD'], answer: 0, explain: 'ΔV ≈ -6,0 x 4.000.000 x 0,005 + ½ x 85 x 4.000.000 x 0,005^2 = -120.000 + 4.250 = -115.750 USD. Lựa chọn -124.250 USD trừ convexity adjustment thay vì cộng. Lựa chọn -120.000 USD bỏ qua convexity.' },
    { q: 'Trái phiếu có modified duration 9,0 và convexity 110. Lợi suất giảm 75 bp. %ΔP ước lượng gần nhất với:', choices: ['+6,44%', '+7,06%', '+6,75%'], answer: 1, explain: '%ΔP ≈ -9,0 x (-0,0075) + ½ x 110 x 0,0075^2 = 6,75% + 0,31% = +7,06%. Lựa chọn +6,44% trừ convexity adjustment (nghĩ rằng nó đổi dấu theo Δy). Lựa chọn +6,75% bỏ qua convexity.' },
    { q: 'Với trái phiếu không có quyền chọn, khi lợi suất giảm mạnh, mức tăng giá ước lượng chỉ bằng modified duration so với mức tăng thực tế sẽ:', choices: ['đúng bằng mức tăng thực tế', 'lớn hơn mức tăng thực tế', 'nhỏ hơn mức tăng thực tế'], answer: 2, explain: 'Đường giá - lợi suất lồi nằm phía trên tiếp tuyến (duration). Khi lợi suất giảm, giá thực tăng nhiều hơn đường tiếp tuyến dự báo, nên duration đánh giá thấp mức tăng giá; convexity adjustment dương bù phần thiếu này. Phương án "lớn hơn" ngược với tính lồi. "Đúng bằng" chỉ xấp xỉ với Δy rất nhỏ.' },
    { q: 'Các yếu tố khác không đổi, thay đổi nào sau đây làm convexity của trái phiếu không có quyền chọn giảm xuống?', choices: ['Coupon cao hơn', 'Kỳ hạn dài hơn', 'Lợi suất thấp hơn'], answer: 0, explain: 'Convexity đi cùng hướng với duration: coupon cao hơn dồn giá trị về các dòng tiền sớm, làm cả duration và convexity giảm. Kỳ hạn dài hơn và lợi suất thấp hơn đều làm convexity tăng.' },
    { q: 'Danh mục gồm ba trái phiếu: giá trị 2 triệu (convexity 15), 3 triệu (convexity 60) và 5 triệu (convexity 150). Convexity của danh mục gần nhất với:', choices: ['225', '96', '75'], answer: 1, explain: 'Trọng số theo giá trị thị trường: 0,2, 0,3, 0,5. PortCon = 0,2 x 15 + 0,3 x 60 + 0,5 x 150 = 3 + 18 + 75 = 96. Lựa chọn 75 là trung bình cộng không trọng số. Lựa chọn 225 cộng thẳng ba convexity.' },
    { q: 'Danh mục gồm trái phiếu A (giá trị 6 triệu, modified duration 4, convexity 25) và trái phiếu B (giá trị 4 triệu, modified duration 9, convexity 120). Mọi lợi suất cùng tăng 80 bp. %ΔP ước lượng của danh mục gần nhất với:', choices: ['-4,80%', '-5,00%', '-4,60%'], answer: 2, explain: 'PortDur = 0,6 x 4 + 0,4 x 9 = 6,0; PortCon = 0,6 x 25 + 0,4 x 120 = 63. %ΔP ≈ -6,0 x 0,008 + ½ x 63 x 0,008^2 = -4,80% + 0,20% = -4,60%. Lựa chọn -4,80% bỏ qua convexity. Lựa chọn -5,00% trừ convexity adjustment thay vì cộng.' },
    { q: 'Phát biểu nào về cash flow yield của một danh mục trái phiếu là đúng nhất?', choices: ['Là IRR của toàn bộ dòng tiền danh mục và thường không bằng bình quân gia quyền YTM của các trái phiếu', 'Là YTM của trái phiếu có kỳ hạn dài nhất trong danh mục', 'Luôn bằng bình quân gia quyền YTM theo giá trị thị trường'], answer: 0, explain: 'Cash flow yield là lãi suất nội tại làm PV của toàn bộ dòng tiền danh mục bằng giá trị danh mục; do quan hệ phi tuyến, nó nói chung khác bình quân gia quyền các YTM. Phương án "luôn bằng bình quân gia quyền" là ngộ nhận phổ biến. Phương án "YTM của trái phiếu dài nhất" không có cơ sở.' },
    { q: 'Ưu điểm chính của cách tính duration danh mục bằng bình quân gia quyền duration từng trái phiếu, so với cách dùng cash flow yield, là:', choices: ['không cần giả định lợi suất mọi trái phiếu thay đổi cùng một lượng', 'dễ tính và áp dụng được cho danh mục có trái phiếu có quyền chọn (dùng effective duration)', 'chính xác hơn về mặt lý thuyết'], answer: 1, explain: 'Cách bình quân gia quyền dễ tính, dùng phổ biến và có thể kết hợp effective duration của trái phiếu có quyền chọn, trong khi cash flow yield không xử lý được dòng tiền không chắc chắn. Nhược điểm của nó chính là giả định dịch chuyển song song, nên phương án "không cần giả định" sai. Về lý thuyết, cách cash flow yield mới là cách chính xác hơn.' },
    { q: 'Một nhà quản lý duy trì danh mục ở modified duration mục tiêu 6,0. Sáu tháng sau, dù không mua bán gì, duration của danh mục đã khác 6,0. Lý do phù hợp nhất là:', choices: ['convexity của danh mục đã trở thành âm', 'duration danh mục chỉ được tính một lần lúc mua', 'duration thay đổi theo thời gian và theo mức lợi suất, nên danh mục cần tái cân bằng'], answer: 2, explain: 'Khi thời gian trôi qua, các dòng tiền gần hơn; khi lợi suất đổi, trọng số PV đổi. Cả hai làm duration thay đổi, vì vậy duy trì duration mục tiêu đòi hỏi tái cân bằng định kỳ. Phương án "chỉ tính một lần" không phải lý do. Danh mục trái phiếu thông thường không tự chuyển sang convexity âm.' },
    { q: 'Danh mục gồm trái phiếu A (giá trị 15 triệu USD, modified duration 5) và trái phiếu B (giá trị 10 triệu USD, modified duration 9). PVBP của danh mục gần nhất với:', choices: ['16.500 USD', '17.500 USD', '1.650 USD'], answer: 0, explain: 'Money duration = 5 x 15 triệu + 9 x 10 triệu = 165 triệu; PVBP = 165 triệu x 0,0001 = 16.500 USD (tương đương PortDur 6,6 x 25 triệu x 0,0001). Lựa chọn 17.500 USD dùng duration trung bình cộng 7 thay vì bình quân gia quyền. Lựa chọn 1.650 USD nhân với 0,00001.' },
    { q: 'Trái phiếu 2 năm, coupon 6% trả hằng năm, YTM 6% (giá 100). Convexity tính từ dòng tiền, (1/PV) x Σ t(t + 1) x CFt/(1 + r)^(t + 2), gần nhất với:', choices: ['2,57', '5,14', '5,77'], answer: 1, explain: 'Năm 1: 1 x 2 x 6/1,06^3 = 10,0754. Năm 2: 2 x 3 x 106/1,06^4 = 503,7716. Tổng 513,8470; chia giá 100 được 5,14. Lựa chọn 5,77 chiết khấu với số mũ t thay vì t + 2 (quên chia (1 + r)^2). Lựa chọn 2,57 nhân thêm ½.' },
    { q: 'Trái phiếu có full price 95,00, modified duration 8,0 và convexity 90. Lợi suất giảm 150 bp. Giá mới ước lượng gần nhất với:', choices: ['106,40', '105,44', '107,36'], answer: 2, explain: '%ΔP ≈ -8,0 x (-0,015) + ½ x 90 x 0,015^2 = 12,00% + 1,01% = 13,01%; giá mới = 95,00 x 1,130125 = 107,36. Lựa chọn 106,40 bỏ qua convexity. Lựa chọn 105,44 trừ convexity adjustment.' },
    { q: 'Trái phiếu P và Q có cùng giá, cùng YTM và cùng modified duration; P có convexity cao hơn Q. Nếu lợi suất thay đổi lớn (tăng hoặc giảm), phát biểu nào đúng nhất?', choices: ['P có kết quả tốt hơn Q ở cả hai chiều', 'Hai trái phiếu thay đổi giá như nhau vì cùng duration', 'P tốt hơn khi lợi suất giảm nhưng kém hơn khi lợi suất tăng'], answer: 0, explain: 'Convexity adjustment luôn dương và lớn hơn với P, nên P tăng giá nhiều hơn khi lợi suất giảm và giảm giá ít hơn khi lợi suất tăng. Phương án "kém hơn khi lợi suất tăng" quên rằng số hạng convexity cộng vào ở cả hai chiều. Cùng duration chỉ cho kết quả giống nhau với thay đổi nhỏ.' },
    { q: 'Giá trái phiếu là 100,00; khi lợi suất giảm 50 bp giá là 102,10, khi tăng 50 bp giá là 97,98. Dùng approximate modified duration và approximate convexity, %ΔP ước lượng khi lợi suất tăng 100 bp gần nhất với:', choices: ['-4,28%', '-3,96%', '-4,12%'], answer: 1, explain: 'ApproxModDur = (102,10 - 97,98)/(2 x 0,005 x 100) = 4,12. ApproxCon = (102,10 + 97,98 - 200)/(0,005^2 x 100) = 32. %ΔP ≈ -4,12 x 0,01 + ½ x 32 x 0,01^2 = -4,12% + 0,16% = -3,96%. Lựa chọn -4,28% trừ convexity adjustment. Lựa chọn -4,12% bỏ qua convexity.' },
    { q: 'Với trái phiếu không có quyền chọn (convexity dương), khi lợi suất tăng, modified duration của trái phiếu:', choices: ['không đổi', 'tăng', 'giảm'], answer: 2, explain: 'Convexity dương nghĩa là đường giá - lợi suất dốc ít dần khi lợi suất tăng: độ nhạy của giá (duration) giảm. Đó cũng là lý do giá giảm chậm dần khi lợi suất tiếp tục tăng. Phương án "tăng" ứng với convexity âm. Duration chỉ không đổi nếu đường giá là đường thẳng (convexity bằng 0).' },
    { q: 'Vị thế 5.000.000 USD mệnh giá một trái phiếu có full price 103,00 mỗi 100 mệnh giá và convexity năm hóa 120. Money convexity của vị thế gần nhất với:', choices: ['618.000.000 USD', '600.000.000 USD', '309.000.000 USD'], answer: 0, explain: 'Giá trị thị trường = 5.000.000 x 1,03 = 5.150.000. Money convexity = 120 x 5.150.000 = 618.000.000 USD. Lựa chọn 600.000.000 USD dùng mệnh giá thay vì full price. Lựa chọn 309.000.000 USD nhân thêm ½ (½ chỉ xuất hiện khi tính convexity adjustment).' },
    { q: 'Danh mục gồm 60% (theo giá trị) trái phiếu có modified duration 3,0, phần còn lại là trái phiếu Z. Để duration danh mục bằng 6,0, modified duration của Z phải gần nhất với:', choices: ['7,5', '10,5', '9,0'], answer: 1, explain: '6,0 = 0,6 x 3,0 + 0,4 x D, suy ra D = (6,0 - 1,8)/0,4 = 10,5. Lựa chọn 9,0 coi hai trái phiếu có tỷ trọng bằng nhau (2 x 6 - 3). Lựa chọn 7,5 lấy (6,0 - 3,0)/0,4, quên nhân duration 3,0 với tỷ trọng 0,6.' },
  ];

  // Widget: giá thực so với ước lượng bằng duration và duration + convexity.
  const widgets = {
    convexity(el) {
      el.innerHTML = `
        <div class="w-row"><label>Coupon: <b data-o="c">5%</b><input type="range" min="0" max="10" step="0.5" value="5" data-i="c"></label>
        <label>Kỳ hạn: <b data-o="n">20 năm</b><input type="range" min="1" max="30" step="1" value="20" data-i="n"></label>
        <label>Thay đổi lợi suất Δy: <b data-o="d">+100 bp</b><input type="range" min="-300" max="300" step="25" value="100" data-i="d"></label></div>
        <div class="w-out"><div class="w-price" data-o="p"></div><div data-o="svg"></div><div class="w-note" data-o="note"></div></div>`;
      const q = s => el.querySelector(s);
      const f2 = x => x.toFixed(2).replace('.', ',');
      const y0 = 0.05;
      const price = (c, n, y) => { let p = 0; for (let k = 1; k <= n; k++) p += c / (1 + y) ** k; return p + 100 / (1 + y) ** n; };
      const upd = () => {
        const c = +q('[data-i="c"]').value, n = +q('[data-i="n"]').value, d = +q('[data-i="d"]').value / 10000;
        const P0 = price(c, n, y0);
        let s1 = 0, s2 = 0;
        for (let k = 1; k <= n; k++) {
          const cf = c + (k === n ? 100 : 0);
          s1 += (k * cf) / (1 + y0) ** k; s2 += (k * (k + 1) * cf) / (1 + y0) ** (k + 2);
        }
        const md = s1 / P0 / (1 + y0), cv = s2 / P0;
        const est = dy => P0 * (1 - md * dy + 0.5 * cv * dy * dy), estD = dy => P0 * (1 - md * dy);
        const W = 560, H = 250, l = 50, r = 540, tp = 15, bt = 210;
        const pts = [];
        for (let k = -300; k <= 300; k += 10) pts.push(k / 10000);
        const vals = pts.map(dy => price(c, n, y0 + dy)).concat(pts.map(estD));
        const lo = Math.min(...vals), hi = Math.max(...vals);
        const xs = dy => l + ((dy + 0.03) / 0.06) * (r - l), ys = v => bt - ((v - lo) / (hi - lo || 1)) * (bt - tp);
        const pl = (f, cls) => `<polyline points="${pts.map(dy => `${xs(dy).toFixed(1)},${ys(f(dy)).toFixed(1)}`).join(' ')}" class="${cls}" style="fill:none"/>`;
        let s = `<svg viewBox="0 0 ${W} ${H}" class="sv" style="max-height:none;max-width:620px" role="img" aria-label="Giá thực và ước lượng">`;
        [-300, -150, 0, 150, 300].forEach(k => { s += `<text x="${xs(k / 10000)}" y="${bt + 20}" class="sv-muted">${k > 0 ? '+' : ''}${k} bp</text>`; });
        s += `<line x1="${l}" y1="${bt}" x2="${r}" y2="${bt}" class="sv-axis"/>`;
        s += pl(estD, 'sv-down') + pl(est, 'sv-pv') + pl(dy => price(c, n, y0 + dy), 'sv-curve');
        s += `<line x1="${xs(d)}" y1="${tp}" x2="${xs(d)}" y2="${bt}" class="sv-dash"/><circle cx="${xs(d)}" cy="${ys(price(c, n, y0 + d))}" r="5" class="sv-dot"/>`;
        s += `<text x="${l + 4}" y="${tp + 12}" class="sv-txt" text-anchor="start">giá thực</text><text x="${l + 90}" y="${tp + 12}" class="sv-txt sv-t-pv" text-anchor="start">duration + convexity</text><text x="${l + 290}" y="${tp + 12}" class="sv-txt sv-t-down" text-anchor="start">chỉ duration</text>`;
        q('[data-o="svg"]').innerHTML = `${s}</svg>`;
        const P1 = price(c, n, y0 + d), pct = v => `${v >= 0 ? '+' : ''}${f2((v / P0 - 1) * 100)}%`;
        q('[data-o="c"]').textContent = `${c}%`;
        q('[data-o="n"]').textContent = `${n} năm`;
        q('[data-o="d"]').textContent = `${d > 0 ? '+' : ''}${Math.round(d * 10000)} bp`;
        q('[data-o="p"]').textContent = `Giá gốc ${f2(P0)} (YTM 5%) → giá thực ${f2(P1)} (${pct(P1)})`;
        q('[data-o="note"]').textContent = `ModDur ${f2(md)}, convexity ${f2(cv)}. Chỉ duration: ${f2(estD(d))} (${pct(estD(d))}). Duration + convexity: ${f2(est(d))} (${pct(est(d))}). Sai số còn lại: ${f2(est(d) - P1)}.`;
      };
      el.addEventListener('input', upd);
      upd();
    },
  };

  window.LESSONS['FI-12'] = {
    moduleId: 'FI-12',
    calculator: 'BA II Plus',
    warmup: [
      'Ôn FI-11: viết công thức approximate modified duration. Ba mức giá nào cần tính?',
      'Ôn FI-11: ModDur 4,16, lợi suất tăng 50 bp, giá thay đổi khoảng bao nhiêu phần trăm?',
      'Đoán trước: chỉ dùng duration thì ước lượng giá mới cao hơn hay thấp hơn giá thực?',
    ],
    sections,
    glossary,
    practice,
    widgets,
    slides: [],
    wrapup: [
      'Viết công thức %ΔP có convexity và giải thích vì sao số hạng thứ hai luôn dương.',
      'Nêu 4 yếu tố làm convexity cao hơn.',
      'Nêu 2 giới hạn của duration danh mục tính bằng bình quân gia quyền.',
    ],
  };
}());
