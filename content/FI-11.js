// Bài giảng FI-11 - Yield-Based Bond Duration Measures and Properties (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t, frac, keys } = window.CFAH;

  const sections = [
    {
      title: '1. Bức tranh lớn: từ "thời gian" sang "độ nhạy giá"',
      minutes: 4,
      html: `
<p>FI-10 định nghĩa Macaulay duration như một <b>thời gian</b> (thời gian bình quân nhận dòng tiền, điểm cân bằng giữa rủi ro giá và rủi ro tái đầu tư). Module này biến nó thành thước đo <b>độ nhạy của giá</b> khi lợi suất thay đổi, thứ mà nhà quản lý danh mục dùng hằng ngày:</p>
<div class="key">${t('moddur', 'Modified duration')}: lợi suất tăng 1% thì giá giảm khoảng bao nhiêu <b>phần trăm</b>.<br>
${t('moneydur', 'Money duration')}: lợi suất tăng 1 (đơn vị thập phân) thì giá trị giảm khoảng bao nhiêu <b>tiền</b>.<br>
${t('pvbp', 'PVBP')}: lợi suất tăng <b>1 điểm cơ bản</b> (0,01%) thì giá giảm bao nhiêu tiền.</div>
<p>Các thước đo này gọi là <b>yield-based</b> (dựa trên YTM của chính trái phiếu): giả định dòng tiền không đổi khi lợi suất thay đổi. Trái phiếu có quyền chọn (callable, putable) cần thước đo dựa trên đường cong như effective duration, học ở FI-13.</p>
<p>Ứng với 2 LOS: định nghĩa, tính, giải thích modified duration, money duration, PVBP (LOS 1); giải thích ảnh hưởng của kỳ hạn, coupon, mức lợi suất đến rủi ro lãi suất (LOS 2).</p>
<p class="tip">Tiếp tục dùng trái phiếu của FI-10: <b>5 năm, coupon 6% hằng năm, YTM 7%, giá 95,8998, Macaulay duration 4,4523</b>.</p>`,
    },
    {
      title: '2. Modified duration và approximate modified duration',
      minutes: 12,
      html: `
<div class="formula">ModDur = ${frac('MacDur', '1 + r')} &nbsp;&nbsp;&nbsp;&nbsp; %ΔP ≈ -ModDur × Δy</div>
<p>r là YTM <b>mỗi kỳ</b>. Ví dụ: ModDur = 4,4523/1,07 = <b>4,1610</b>. Nếu YTM tăng 50 điểm cơ bản (Δy = 0,005), giá giảm khoảng 4,1610 × 0,5% = <b>2,08%</b>. Giá chính xác khi YTM = 7,5% là 93,9312, tức giảm 2,05%. Phần sai lệch nhỏ đến từ độ cong của đường giá - lợi suất, xử lý ở FI-12.</p>
<p>Về mặt hình học, modified duration là <b>độ dốc của tiếp tuyến</b> với đường giá - lợi suất tại điểm hiện tại, chia cho giá. Vì là đường thẳng, nó chỉ chính xác khi Δy nhỏ.</p>

<h4>${t('amd', 'Approximate modified duration')}</h4>
<p>Khi không có sẵn MacDur (hoặc dòng tiền phức tạp), tính lại giá ở lợi suất thấp hơn và cao hơn một chút:</p>
<div class="formula">ApproxModDur = ${frac('PV<sub>-</sub> - PV<sub>+</sub>', '2 × Δy × PV<sub>0</sub>')} &nbsp;&nbsp;&nbsp;&nbsp; ApproxMacDur = ApproxModDur × (1 + r)</div>
<div class="example"><div class="ex-h">Ví dụ 2.1 - Approximate modified duration</div>
<p>Trái phiếu ví dụ, dùng Δy = 10 điểm cơ bản (0,001).</p>
<details><summary>Xem lời giải</summary>
${keys([
  ['Giá ở 7%', '[2ND] [FV] 5 [N] 7 [I/Y] 6 [PMT] 100 [FV] [CPT] [PV]', 'PV = -95.8998'],
  ['Giá ở 6,9%', '6.9 [I/Y] [CPT] [PV]', 'PV = -96.2999'],
  ['Giá ở 7,1%', '7.1 [I/Y] [CPT] [PV]', 'PV = -95.5018'],
])}
<p>ApproxModDur = (96,2999 - 95,5018)/(2 × 0,001 × 95,8998) = <b>4,1610</b>. ApproxMacDur = 4,1610 × 1,07 = <b>4,4523</b>. Khớp với kết quả tính bằng bảng ở FI-10.</p></details></div>
<p class="warn"><b>Bẫy:</b> nhớ số 2 ở mẫu (khoảng cách từ PV<sub>-</sub> đến PV<sub>+</sub> là 2 × Δy) và nhập Δy dạng thập phân (10 bp = 0,001).</p>

<h4>Trái phiếu trả nửa năm: đổi sang năm</h4>
<p>Công thức cho ra duration theo <b>số kỳ</b>. Chia cho số kỳ mỗi năm để được ${t('annual', 'duration năm hóa (annualized)')}, và dùng r = YTM/2 khi chia (1 + r).</p>
<div class="example"><div class="ex-h">Ví dụ 2.2 - Trái phiếu bán niên</div>
<p>Trái phiếu 4 năm, coupon 5% trả nửa năm, YTM 6%. Giá 96,4902; MacDur = 7,3352 kỳ nửa năm.</p>
<details><summary>Xem lời giải</summary>
<p>MacDur năm = 7,3352/2 = 3,6676. ModDur năm = 3,6676/1,03 = <b>3,5608</b>.</p>
<p>Kiểm tra bằng approximate: giá ở YTM 5,9% là 96,8345, ở 6,1% là 96,1473 (nhập I/Y = 2,95 và 3,05 với N = 8, PMT = 2,5). ApproxModDur = (96,8345 - 96,1473)/(2 × 0,001 × 96,4902) = 3,5608.</p>
<p>Đáp án nhiễu hay gặp: chia cho 1,06 (dùng YTM năm) ra 3,46.</p></details></div>
<p class="tip"><b>BA II Plus:</b> worksheet BOND (<kbd>2ND</kbd> <kbd>9</kbd>) có dòng DUR cho modified duration sau khi tính giá, nhưng phải nhập ngày theo định dạng của máy. Trong đề, cách nhanh và chắc nhất vẫn là bấm TVM ba lần như trên.</p>`,
    },
    {
      title: '3. Money duration và PVBP',
      minutes: 10,
      html: `
<p>Modified duration cho biết thay đổi theo <b>phần trăm</b>. Nhà quản lý quỹ hay quan tâm thay đổi theo <b>tiền</b>, để biết vị thế lỗ bao nhiêu và cần phòng hộ bao nhiêu.</p>
<div class="formula">${t('moneydur', 'Money duration')} = ModDur × Giá trị thị trường (full price) &nbsp;&nbsp;&nbsp;&nbsp; ΔV ≈ -Money duration × Δy</div>
<p>Money duration còn gọi là <b>dollar duration</b>. Có thể tính cho mỗi 100 mệnh giá hoặc cho cả vị thế.</p>
<div class="formula">${t('pvbp', 'PVBP')} = ${frac('PV<sub>-</sub> - PV<sub>+</sub>', '2')} &nbsp;(với Δy = 1 bp) &nbsp;&nbsp;≈&nbsp; Money duration × 0,0001</div>
<p>PVBP (price value of a basis point) còn gọi là <b>DV01</b> hoặc BPV. Là thay đổi giá khi lợi suất thay đổi 1 điểm cơ bản.</p>
<div class="example"><div class="ex-h">Ví dụ 3.1 - Vị thế 10 triệu mệnh giá</div>
<p>Quỹ nắm 10.000.000 USD mệnh giá của trái phiếu ví dụ (giá 95,8998 mỗi 100). (a) Money duration? (b) Ước lượng thay đổi giá trị khi lợi suất tăng 50 bp. (c) PVBP của vị thế.</p>
<details><summary>Xem lời giải</summary>
<p>Giá trị thị trường = 10.000.000 × 95,8998/100 = 9.589.980.</p>
<p>(a) Money duration = 4,1610 × 9.589.980 = <b>39.904.137</b>.<br>
(b) ΔV ≈ -39.904.137 × 0,005 = <b>-199.521</b>. Giá trị chính xác khi YTM = 7,5% giảm 196.863 (ước lượng lệch do convexity).<br>
(c) PVBP mỗi 100 mệnh giá: giá ở 6,99% là 95,9397, ở 7,01% là 95,8599, PVBP = (95,9397 - 95,8599)/2 = 0,0399. Cả vị thế: 0,0399 × 100.000 = <b>3.990</b> USD mỗi bp, cũng bằng 39.904.137 × 0,0001.</p></details></div>
<p class="warn"><b>Bẫy:</b> (1) Money duration dùng <b>full price</b> (gồm lãi tích lũy), không dùng mệnh giá. (2) Khi nhân với Δy, Δy phải ở dạng thập phân: 50 bp = 0,005. (3) PVBP chia 2 vì lấy trung bình hai phía.</p>`,
    },
    {
      title: '4. Kỳ hạn, coupon, mức lợi suất ảnh hưởng thế nào đến rủi ro lãi suất',
      minutes: 10,
      html: `
<p>Ba quy tắc cần thuộc (các yếu tố khác giữ nguyên):</p>
<table class="plain"><thead><tr><th>Yếu tố tăng</th><th>Duration</th><th>Vì sao</th></tr></thead><tbody>
<tr><td>Kỳ hạn dài hơn</td><td><b>Thường tăng</b></td><td>Gốc nhận muộn hơn</td></tr>
<tr><td>Coupon cao hơn</td><td><b>Giảm</b></td><td>Nhiều giá trị được nhận sớm hơn qua coupon</td></tr>
<tr><td>Lợi suất cao hơn</td><td><b>Giảm</b></td><td>Dòng tiền xa bị chiết khấu mạnh hơn, trọng số dồn về dòng tiền gần</td></tr>
</tbody></table>
<div class="example"><div class="ex-h">Ví dụ 4.1 - Số liệu minh họa (Macaulay duration, trả lãi năm)</div>
<details><summary>Xem bảng</summary>
<table class="plain"><thead><tr><th>Thay đổi</th><th>Các trường hợp</th></tr></thead><tbody>
<tr><td>Coupon (10 năm, YTM 7%)</td><td>0%: 10,00 · 3%: 8,52 · 6%: 7,71 · 10%: 7,07</td></tr>
<tr><td>Kỳ hạn (coupon 6%, YTM 7%)</td><td>2 năm: 1,94 · 5 năm: 4,45 · 10 năm: 7,71 · 20 năm: 11,69 · 30 năm: 13,64 · vĩnh viễn: 15,29</td></tr>
<tr><td>Lợi suất (coupon 6%, 10 năm)</td><td>4%: 7,98 · 7%: 7,71 · 10%: 7,42</td></tr>
</tbody></table></details></div>
<h4>Các trường hợp đặc biệt</h4>
<ul>
<li><b>Zero-coupon:</b> MacDur = kỳ hạn, cao nhất trong các trái phiếu cùng kỳ hạn và lợi suất.</li>
<li><b>Trái phiếu vĩnh viễn:</b> MacDur = (1 + r)/r. Ở r = 7%, MacDur = 15,29: đây là "trần" mà trái phiếu coupon kỳ hạn rất dài tiến tới.</li>
<li><b>Ngoại lệ kỳ hạn:</b> trái phiếu chiết khấu sâu (coupon thấp hơn nhiều so với lợi suất), kỳ hạn rất dài, có duration tăng đến đỉnh rồi <b>giảm</b> dần về (1 + r)/r. Ví dụ coupon 3%, YTM 10%: 20 năm 12,10; 30 năm 12,69; 50 năm 11,67; vĩnh viễn 11,00. Đề Level I thường chỉ hỏi quy tắc chung.</li>
<li><b>Trái phiếu lãi suất thả nổi (FRN):</b> coupon được đặt lại theo lãi suất thị trường mỗi kỳ, nên duration xấp xỉ <b>thời gian đến lần đặt lại tiếp theo</b> (ví dụ dưới 0,25 năm nếu đặt lại hằng quý), dù kỳ hạn có thể 5-10 năm.</li>
</ul>
<p class="tip">Cách nhớ: bất cứ điều gì làm tiền về <b>muộn hơn</b> (kỳ hạn dài, coupon thấp) hoặc làm tiền xa <b>nặng ký hơn</b> (lợi suất thấp) đều làm duration và rủi ro lãi suất tăng.</p>`,
    },
    {
      title: '5. Tóm tắt và bẫy thường gặp',
      minutes: 4,
      html: `
<table class="plain"><thead><tr><th>Tình huống</th><th>Nhớ</th></tr></thead><tbody>
<tr><td>ModDur</td><td>MacDur/(1 + r), r là YTM mỗi kỳ</td></tr>
<tr><td>%ΔP</td><td>≈ -ModDur × Δy (Δy dạng thập phân)</td></tr>
<tr><td>ApproxModDur</td><td>(PV<sub>-</sub> - PV<sub>+</sub>)/(2 × Δy × PV<sub>0</sub>); nhân (1 + r) ra ApproxMacDur</td></tr>
<tr><td>Bán niên</td><td>Kỳ chia 2 ra năm; chia cho (1 + YTM/2)</td></tr>
<tr><td>Money duration</td><td>ModDur × full price; ΔV ≈ -MoneyDur × Δy</td></tr>
<tr><td>PVBP</td><td>(PV<sub>-</sub> - PV<sub>+</sub>)/2 với 1 bp; ≈ MoneyDur × 0,0001</td></tr>
<tr><td>Rủi ro lãi suất tăng khi</td><td>Kỳ hạn dài hơn, coupon thấp hơn, lợi suất thấp hơn</td></tr>
<tr><td>Đặc biệt</td><td>Zero: MacDur = kỳ hạn. Vĩnh viễn: (1 + r)/r. FRN: thời gian đến lần đặt lại</td></tr>
</tbody></table>
<p>Tiếp theo: làm 10 câu (rút ngẫu nhiên từ ngân hàng 30 câu, mỗi lần làm một bộ khác) ở tab <b>Luyện tập</b>.</p>`,
    },
  ];

  const glossary = {
    moddur: ['Modified duration', 'Duration điều chỉnh', 'MacDur/(1 + r); phần trăm thay đổi giá xấp xỉ khi lợi suất thay đổi 1 (100%) theo chiều ngược lại.'],
    amd: ['Approximate modified duration', 'Duration điều chỉnh xấp xỉ', '(PV- - PV+)/(2 x Δy x PV0); tính bằng cách định giá lại ở lợi suất cao hơn và thấp hơn.'],
    annual: ['Annualized duration', 'Duration năm hóa', 'Duration tính theo số kỳ chia cho số kỳ mỗi năm.'],
    moneydur: ['Money duration (dollar duration)', 'Money duration', 'ModDur x giá trị thị trường (full price); thay đổi giá trị theo tiền xấp xỉ khi lợi suất đổi 1 đơn vị.'],
    pvbp: ['Price value of a basis point (PVBP, DV01)', 'Giá trị của một điểm cơ bản', 'Thay đổi giá khi lợi suất thay đổi 1 bp (0,01%); = (PV- - PV+)/2.'],
  };

  const practice = [
    { q: 'Trái phiếu trả coupon hằng năm có Macaulay duration 8,50 và YTM 5%. Modified duration gần nhất với:', choices: ['8,10', '8,50', '8,93'], answer: 0, explain: 'ModDur = 8,50/1,05 = 8,10. Lựa chọn 8,50 là Macaulay duration; lựa chọn 8,93 nhân thay vì chia cho (1 + r).' },
    { q: 'Giá trái phiếu hiện tại 100,00. Khi YTM giảm 50 bp giá là 103,50; khi YTM tăng 50 bp giá là 96,70. Approximate modified duration gần nhất với:', choices: ['3,40', '13,60', '6,80'], answer: 2, explain: '(103,50 - 96,70)/(2 x 0,005 x 100) = 6,80. Lựa chọn 3,40 dùng Δy = 0,01 (lấy cả khoảng 100 bp làm Δy) thay vì 0,005; lựa chọn 13,60 quên số 2 ở mẫu.' },
    { q: 'Trái phiếu có modified duration 6,2. Nếu YTM tăng 75 bp, phần trăm thay đổi giá ước lượng gần nhất với:', choices: ['+4,65%', '-4,65%', '-46,50%'], answer: 1, explain: '%ΔP ≈ -6,2 x 0,0075 = -4,65%. Lợi suất tăng thì giá giảm, nên lựa chọn +4,65% sai dấu; lựa chọn -46,50% nhập Δy là 0,075.' },
    { q: 'Vị thế trái phiếu có giá trị thị trường 5.000.000 USD và modified duration 7,0. Lợi suất tăng 25 bp, thay đổi giá trị ước lượng gần nhất với:', choices: ['-87.500 USD', '-8.750 USD', '-875.000 USD'], answer: 0, explain: 'Money duration = 7 x 5.000.000 = 35.000.000; ΔV ≈ -35.000.000 x 0,0025 = -87.500. Lựa chọn -8.750 USD dùng Δy = 0,00025; lựa chọn -875.000 USD dùng 0,025.' },
    { q: 'Trái phiếu giá 98,4705 mỗi 100 mệnh giá. Lợi suất tăng 1 bp thì giá là 98,3948, giảm 1 bp thì giá là 98,5463. PVBP của vị thế 2.000.000 USD mệnh giá gần nhất với:', choices: ['3.029 USD', '151.468 USD', '1.515 USD'], answer: 2, explain: 'PVBP mỗi 100 = (98,5463 - 98,3948)/2 = 0,0757 (tính chính xác 0,075734); vị thế = 0,075734 x 2.000.000/100 = 1.515. Lựa chọn 3.029 USD quên chia 2; lựa chọn 151.468 USD quên rằng giá được báo trên 100 mệnh giá.' },
    { q: 'Các trái phiếu cùng YTM 6%. Trái phiếu nào có rủi ro lãi suất (duration) cao nhất?', choices: ['Zero-coupon 10 năm', 'Coupon 3%, 10 năm', 'Coupon 3%, 5 năm'], answer: 0, explain: 'Cùng kỳ hạn 10 năm, coupon thấp hơn thì duration cao hơn, và zero-coupon có MacDur = 10 (bằng kỳ hạn). Trái phiếu 5 năm có kỳ hạn ngắn hơn nên duration thấp nhất.' },
    { q: 'Trái phiếu vĩnh viễn có YTM 4% (trả lãi năm). Modified duration của nó là:', choices: ['26,0', '25,0', 'Vô hạn vì không có ngày đáo hạn'], answer: 1, explain: 'MacDur = (1 + r)/r = 1,04/0,04 = 26; ModDur = 26/1,04 = 25 (= 1/r). Lựa chọn 26,0 là Macaulay duration. Phương án "vô hạn" sai: dòng tiền xa có trọng số PV rất nhỏ nên duration hữu hạn.' },
    { q: 'Trái phiếu 4 năm, coupon 5% trả nửa năm, YTM 6%. Macaulay duration là 7,3352 kỳ nửa năm. Modified duration năm hóa gần nhất với:', choices: ['3,46', '7,12', '3,56'], answer: 2, explain: 'MacDur năm = 7,3352/2 = 3,6676; ModDur = 3,6676/1,03 = 3,56. Lựa chọn 3,46 chia cho 1,06 (YTM năm thay vì YTM mỗi kỳ); lựa chọn 7,12 quên đổi sang năm.' },
    { q: 'Trái phiếu 7 năm, coupon 4% trả hằng năm, YTM 5% (giá 94,21). Macaulay duration là 6,22. Modified duration gần nhất với:', choices: ['6,22', '5,92', '6,67'], answer: 1, explain: 'ModDur = MacDur/(1 + r) = 6,2151/1,05 = 5,92. Lựa chọn 6,22 là Macaulay duration, chưa chia (1 + r). Lựa chọn 6,67 lấy kỳ hạn 7/1,05, như thể đây là zero-coupon.' },
    { q: 'Trái phiếu 6 năm, coupon 5% trả hằng năm, YTM 6%, giá 95,0827. Ở YTM 5,8% giá là 96,0413; ở YTM 6,2% giá là 94,1361. Approximate Macaulay duration gần nhất với:', choices: ['10,62', '5,31', '5,01'], answer: 1, explain: 'ApproxModDur = (96,0413 - 94,1361)/(2 x 0,002 x 95,0827) = 5,01; ApproxMacDur = 5,01 x 1,06 = 5,31. Lựa chọn 5,01 là approximate modified duration, chưa nhân (1 + r). Lựa chọn 10,62 quên số 2 ở mẫu.' },
    { q: 'Quỹ nắm 3.000.000 USD mệnh giá một trái phiếu có full price 102,40 mỗi 100 mệnh giá và modified duration 6,5. Money duration của vị thế gần nhất với:', choices: ['19.500.000 USD', '1.997 USD', '19.968.000 USD'], answer: 2, explain: 'Giá trị thị trường = 3.000.000 x 102,40/100 = 3.072.000. Money duration = 6,5 x 3.072.000 = 19.968.000 USD. Lựa chọn 19.500.000 USD nhân với mệnh giá thay vì full price. Lựa chọn 1.997 USD nhân thêm 0,0001, đó là PVBP của vị thế.' },
    { q: 'Một danh mục có money duration 45.000.000 EUR. PVBP của danh mục gần nhất với:', choices: ['4.500 EUR', '450 EUR', '45.000 EUR'], answer: 0, explain: 'PVBP ≈ money duration x 0,0001 = 45.000.000 x 0,0001 = 4.500 EUR mỗi điểm cơ bản. Lựa chọn 45.000 EUR nhân với 0,001 (10 bp). Lựa chọn 450 EUR nhân với 0,00001.' },
    { q: 'Vị thế trái phiếu có money duration 8.200.000 USD. Nếu lợi suất giảm 30 bp, thay đổi giá trị ước lượng gần nhất với:', choices: ['-24.600 USD', '+24.600 USD', '+246.000 USD'], answer: 1, explain: 'ΔV ≈ -money duration x Δy = -8.200.000 x (-0,003) = +24.600 USD. Lựa chọn -24.600 USD sai dấu: lợi suất giảm thì giá trị tăng. Lựa chọn +246.000 USD nhập Δy là 0,03.' },
    { q: 'Trái phiếu có full price 98,50 và modified duration 5,4. Lợi suất tăng 40 bp. Giá mới ước lượng bằng modified duration gần nhất với:', choices: ['77,22', '100,63', '96,37'], answer: 2, explain: '%ΔP ≈ -5,4 x 0,004 = -2,16%; giá mới = 98,50 x (1 - 0,0216) = 96,37. Lựa chọn 100,63 sai dấu (lợi suất tăng thì giá giảm). Lựa chọn 77,22 nhập Δy = 0,04.' },
    { q: 'Hai trái phiếu 10 năm cùng tổ chức phát hành và cùng YTM 5%, một có coupon 2%, một có coupon 6%. Phát biểu nào đúng nhất?', choices: ['Trái phiếu coupon 2% có duration cao hơn', 'Trái phiếu coupon 6% có duration cao hơn', 'Hai trái phiếu có cùng duration vì cùng kỳ hạn và YTM'], answer: 0, explain: 'Coupon thấp hơn thì tỷ trọng giá trị dồn về dòng tiền gốc ở cuối, nên duration (và rủi ro lãi suất) cao hơn. Coupon cao trả nhiều giá trị sớm hơn nên duration thấp hơn. Cùng kỳ hạn và YTM không đủ để có cùng duration.' },
    { q: 'Cùng một trái phiếu không có quyền chọn được định giá ở YTM 3% và ở YTM 8%. Các yếu tố khác không đổi, duration của trái phiếu:', choices: ['như nhau ở hai mức lợi suất', 'cao hơn ở YTM 3%', 'cao hơn ở YTM 8%'], answer: 1, explain: 'Lợi suất thấp hơn thì dòng tiền xa bị chiết khấu ít hơn, trọng số PV dồn về các dòng tiền xa, nên duration cao hơn. Lợi suất cao làm trọng số dồn về dòng tiền gần, duration thấp hơn. Duration thay đổi theo lợi suất nên phương án "như nhau" sai.' },
    { q: 'Với trái phiếu chiết khấu sâu (coupon thấp hơn nhiều so với lợi suất thị trường), khi kỳ hạn đã rất dài và tiếp tục tăng, Macaulay duration nhiều khả năng:', choices: ['luôn tăng tương ứng với kỳ hạn', 'bằng kỳ hạn', 'có thể giảm dần về (1 + r)/r'], answer: 2, explain: 'Đây là ngoại lệ của quy tắc "kỳ hạn dài hơn thì duration cao hơn": với trái phiếu chiết khấu sâu, duration tăng đến đỉnh rồi giảm dần về mức của trái phiếu vĩnh viễn (1 + r)/r. Phương án "luôn tăng" là quy tắc chung, không đúng ở trường hợp này. Duration chỉ bằng kỳ hạn với zero-coupon.' },
    { q: 'Một FRN kỳ hạn 8 năm có coupon đặt lại hằng quý theo lãi suất thị trường; lần đặt lại tiếp theo sau 1 tháng. Duration lãi suất của FRN gần nhất với:', choices: ['khoảng 0,08 năm (thời gian đến lần đặt lại tiếp theo)', 'gần với duration của trái phiếu coupon cố định 8 năm', 'khoảng 0,25 năm (độ dài một kỳ)'], answer: 0, explain: 'Coupon FRN được đặt lại theo lãi suất thị trường, nên giá chỉ nhạy với lãi suất cho đến lần đặt lại tiếp theo: 1/12 năm, khoảng 0,08 năm. Lựa chọn 0,25 năm lấy độ dài cả kỳ, quên rằng đã trôi qua 2 tháng. Phương án "gần với trái phiếu cố định 8 năm" bỏ qua cơ chế đặt lại coupon.' },
    { q: 'Trái phiếu zero-coupon 15 năm, YTM 6% (trả lãi năm). Modified duration gần nhất với:', choices: ['15,00', '14,15', '15,90'], answer: 1, explain: 'MacDur của zero-coupon = kỳ hạn = 15; ModDur = 15/1,06 = 14,15. Lựa chọn 15,00 là Macaulay duration. Lựa chọn 15,90 nhân thay vì chia cho (1 + r).' },
    { q: 'Trái phiếu có full price 101,20 mỗi 100 mệnh giá và modified duration 7,8. PVBP mỗi 100 mệnh giá gần nhất với:', choices: ['0,7894', '0,0780', '0,0789'], answer: 2, explain: 'PVBP ≈ ModDur x full price x 0,0001 = 7,8 x 101,20 x 0,0001 = 0,0789. Lựa chọn 0,0780 dùng mệnh giá 100 thay vì full price. Lựa chọn 0,7894 dùng 0,001 (10 bp) thay vì 1 bp.' },
    { q: 'Hai trái phiếu cùng modified duration 6,0. Trái phiếu X có full price 110 và trái phiếu Y có full price 90 (mỗi 100 mệnh giá). So sánh PVBP mỗi 100 mệnh giá:', choices: ['PVBP của X lớn hơn', 'PVBP của Y lớn hơn', 'PVBP bằng nhau vì cùng modified duration'], answer: 0, explain: 'PVBP là thay đổi giá tính theo tiền: ModDur x full price x 0,0001. X: 6 x 110 x 0,0001 = 0,066; Y: 6 x 90 x 0,0001 = 0,054. Cùng modified duration chỉ có nghĩa cùng thay đổi theo phần trăm, không cùng thay đổi theo tiền.' },
    { q: 'Giả định chính khiến modified duration (yield duration) không phù hợp để đo rủi ro lãi suất của trái phiếu callable là:', choices: ['trái phiếu được giữ đến đáo hạn', 'dòng tiền của trái phiếu không thay đổi khi lợi suất thay đổi', 'lợi suất của mọi kỳ hạn bằng nhau'], answer: 1, explain: 'Yield duration giả định dòng tiền cố định, chỉ lãi suất chiết khấu thay đổi. Với callable bond, lãi suất giảm làm khả năng bị call tăng nên dòng tiền thay đổi; cần effective duration. Giả định "lợi suất mọi kỳ hạn bằng nhau" không phải giả định của modified duration. Duration không yêu cầu giữ đến đáo hạn.' },
    { q: 'Với trái phiếu thông thường không có quyền chọn, nếu lợi suất tăng 200 bp, ước lượng mức giảm giá chỉ dựa trên modified duration so với mức giảm thực tế sẽ:', choices: ['nhỏ hơn mức giảm thực tế', 'đúng bằng mức giảm thực tế', 'lớn hơn mức giảm thực tế'], answer: 2, explain: 'Modified duration là đường tiếp tuyến, còn đường giá - lợi suất lồi nằm phía trên tiếp tuyến. Vì vậy duration dự báo giá mới thấp hơn giá thực, tức phóng đại mức giảm khi lợi suất tăng. Sai lệch càng lớn khi Δy càng lớn. Ước lượng chỉ chính xác với thay đổi rất nhỏ.' },
    { q: 'Trái phiếu 3 năm, coupon 5% trả hằng năm, YTM 4% (giá 102,7751). Dùng Δy = 10 bp: giá ở YTM 3,9% là 103,0584, ở 4,1% là 102,4928. Approximate modified duration gần nhất với:', choices: ['2,75', '2,86', '5,50'], answer: 0, explain: 'ApproxModDur = (103,0584 - 102,4928)/(2 x 0,001 x 102,7751) = 0,5656/0,2056 = 2,75. Lựa chọn 5,50 quên số 2 ở mẫu. Lựa chọn 2,86 là approximate Macaulay duration (2,75 x 1,04).' },
    { q: 'Vị thế 2.000.000 USD mệnh giá trái phiếu có giá yết (flat price) 99,00, lãi tích lũy 1,50 mỗi 100 mệnh giá, modified duration 5,0. Money duration của vị thế gần nhất với:', choices: ['9.900.000 USD', '10.050.000 USD', '10.000.000 USD'], answer: 1, explain: 'Full price = 99,00 + 1,50 = 100,50; giá trị thị trường = 2.010.000. Money duration = 5,0 x 2.010.000 = 10.050.000 USD. Lựa chọn 9.900.000 USD dùng flat price, bỏ lãi tích lũy. Lựa chọn 10.000.000 USD dùng mệnh giá.' },
    { q: 'Trái phiếu trả coupon nửa năm có modified duration năm hóa 9,2 và YTM 6%. Macaulay duration năm hóa gần nhất với:', choices: ['8,93', '9,75', '9,48'], answer: 2, explain: 'MacDur = ModDur x (1 + r), với r là YTM mỗi kỳ = 3%: 9,2 x 1,03 = 9,48. Lựa chọn 9,75 nhân với 1,06 (YTM năm thay vì mỗi kỳ). Lựa chọn 8,93 chia cho 1,03 thay vì nhân.' },
    { q: 'Nhà quản lý muốn phòng hộ một vị thế có PVBP 5.000 USD bằng cách bán khống một trái phiếu có PVBP 0,085 mỗi 100 mệnh giá. Mệnh giá trái phiếu cần bán gần nhất với:', choices: ['5.882.353 USD', '58.824 USD', '425 USD'], answer: 0, explain: 'PVBP mỗi 1 USD mệnh giá = 0,085/100. Mệnh giá cần = 5.000/(0,085/100) = 5.882.353 USD. Lựa chọn 58.824 USD quên rằng PVBP được báo trên 100 mệnh giá. Lựa chọn 425 USD nhân thay vì chia.' },
    { q: 'Trái phiếu 5 năm, coupon 3% trả hằng năm, YTM 4%. Giá ở YTM 3,99% là 95,5915; ở YTM 4,01% là 95,5049. PVBP mỗi 100 mệnh giá gần nhất với:', choices: ['0,0453', '0,0433', '0,0866'], answer: 1, explain: 'PVBP = (PV- - PV+)/2 = (95,5915 - 95,5049)/2 = 0,0433. Lựa chọn 0,0866 quên chia 2 (đó là thay đổi giá cho 2 bp). Lựa chọn 0,0453 nhân modified duration (4,53) với mệnh giá 100 thay vì giá 95,55.' },
    { q: 'Vị thế X có giá trị thị trường 10 triệu USD, modified duration 4,0; vị thế Y có giá trị thị trường 5 triệu USD, modified duration 7,0. Khi lợi suất của cả hai tăng 1 bp, vị thế nào mất nhiều tiền hơn?', choices: ['Y', 'Hai vị thế mất như nhau', 'X'], answer: 2, explain: 'So sánh money duration: X = 4,0 x 10 triệu = 40 triệu; Y = 7,0 x 5 triệu = 35 triệu. PVBP: X mất 4.000 USD, Y mất 3.500 USD mỗi bp. Chọn Y là chỉ nhìn modified duration (phần trăm) mà bỏ qua quy mô vị thế.' },
    { q: 'Trái phiếu trả coupon theo quý có Macaulay duration 18 kỳ quý, YTM 8% (năm). Modified duration năm hóa gần nhất với:', choices: ['4,41', '17,65', '4,17'], answer: 0, explain: 'MacDur năm = 18/4 = 4,5; r mỗi kỳ = 8%/4 = 2%; ModDur = 4,5/1,02 = 4,41. Lựa chọn 4,17 chia cho 1,08 (YTM năm thay vì mỗi kỳ). Lựa chọn 17,65 quên đổi số kỳ sang năm (18/1,02).' },
  ];

  window.LESSONS['FI-11'] = {
    moduleId: 'FI-11',
    calculator: 'BA II Plus',
    warmup: [
      'Ôn FI-10: Macaulay duration của trái phiếu 5 năm, coupon 6%, YTM 7% là bao nhiêu? Vì sao nhỏ hơn 5?',
      'Ôn FI-10: zero-coupon 7 năm có Macaulay duration bằng bao nhiêu?',
      'Đoán trước: trái phiếu coupon 2% và coupon 8% cùng kỳ hạn 10 năm, cái nào giảm giá mạnh hơn khi lãi suất tăng?',
    ],
    sections,
    glossary,
    practice,
    widgets: {},
    slides: [],
    wrapup: [
      'Viết công thức ModDur, ApproxModDur, money duration và PVBP mà không nhìn tài liệu.',
      'Nêu 3 quy tắc về kỳ hạn, coupon, lợi suất và một ngoại lệ.',
      'Vì sao duration của FRN chỉ xấp xỉ thời gian đến lần đặt lại coupon?',
    ],
  };
}());
