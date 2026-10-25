// Bài giảng DE-06 - Pricing and Valuation of Futures Contracts (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t, keys } = window.CFAH;

  const sections = [
    {
      title: '1. Bức tranh lớn',
      minutes: 4,
      html: `
<p>Futures có kinh tế giống forward (DE-02): cam kết mua/bán tài sản ở giá chốt trước. Khác biệt nằm ở chỗ futures niêm yết trên sàn, bù trừ qua CCP và được ${t('mtm', 'thanh toán lãi lỗ hằng ngày (mark-to-market)')}. Chính cơ chế hằng ngày đó làm thay đổi hai thứ:</p>
<ul>
<li><b>Giá trị</b>: giá trị forward tích lũy dần đến đáo hạn, còn giá trị futures được "trả bằng tiền" mỗi cuối ngày rồi quay về 0.</li>
<li><b>Giá</b>: khi lãi suất biến động và có tương quan với giá futures, ${t('fut', 'giá futures (futures price)')} có thể khác giá forward cùng kỳ hạn.</li>
</ul>
<table class="plain"><thead><tr><th>LOS</th><th>Phần</th></tr></thead><tbody>
<tr><td>So sánh giá trị và giá của hợp đồng forward và futures</td><td>2, 3, 4, 5</td></tr>
<tr><td>Giải thích vì sao giá forward và giá futures khác nhau</td><td>6</td></tr>
</tbody></table>
<p class="tip">Cơ chế ký quỹ (initial margin, maintenance margin, margin call) đã có ví dụ ở DE-02 phần 3. Ở đây ta chỉ dùng lại nó để hiểu <b>giá trị</b> của futures. Ký hiệu: f<sub>0</sub>(T) là giá futures, F<sub>0</sub>(T) là giá forward.</p>`,
    },
    {
      title: '2. Giá futures lúc ký',
      minutes: 6,
      html: `
<p>Lập luận cost of carry ở DE-04 vẫn đúng cho futures. Nếu lãi suất <b>không đổi</b> (hoặc biết trước), giá futures bằng giá forward:</p>
<div class="formula">f<sub>0</sub>(T) = F<sub>0</sub>(T) = (S<sub>0</sub> - PV<sub>0</sub>(I) + PV<sub>0</sub>(C)) × (1 + r)<sup>T</sup></div>
<p>Giống forward, giá futures được chọn để <b>giá trị lúc mở vị thế bằng 0</b>: không ai trả tiền cho ai (tiền ký quỹ ban đầu là tài sản đảm bảo của chính bạn, không phải giá mua hợp đồng).</p>
<div class="example"><div class="ex-h">Ví dụ 2.1</div>
<p>Cổ phiếu không trả cổ tức giá 85, lãi suất phi rủi ro 1% cho mọi kỳ hạn (không đổi). Giá futures 6 tháng?</p>
<details><summary>Xem lời giải</summary>
<p>f<sub>0</sub>(0,5) = 85 × 1,01<sup>0,5</sup> = <b>85,42</b>, bằng đúng giá forward 6 tháng.</p>
${keys([['Giá futures', '85 [×] 1.01 [y^x] 0.5 [=]', '85.4239']])}</details></div>
<p class="warn"><b>Bẫy:</b> ký quỹ ban đầu <b>không phải</b> giá của futures và cũng không phải giá trị của nó. Một hợp đồng futures mới mở có giá trị 0 dù bạn đã nộp ký quỹ.</p>`,
    },
    {
      title: '3. Mark-to-market: giá trị futures quay về 0 mỗi ngày',
      minutes: 12,
      html: `
<p>Cuối mỗi ngày, sàn lấy ${t('settle', 'giá thanh toán (settlement price)')} để ghi lời/lỗ vào tài khoản ký quỹ, rồi coi như hợp đồng được <b>ký lại</b> ở giá mới. Hệ quả:</p>
<div class="formula">Giá trị futures trong ngày t = (f<sub>t</sub> - f<sub>t-1</sub>) × quy mô hợp đồng &nbsp;&nbsp; ⟹ &nbsp;&nbsp; ngay sau thanh toán: giá trị = 0</div>
<p>Trong ngày, futures có giá trị bằng phần lời/lỗ <b>kể từ lần thanh toán gần nhất</b>. Khi lời/lỗ đã được chuyển vào tài khoản, hợp đồng lại có giá trị 0. Lời/lỗ của hôm qua nằm trong tài khoản ký quỹ, không còn nằm trong hợp đồng.</p>
<div class="example"><div class="ex-h">Ví dụ 3.1 - Theo dõi tài khoản ký quỹ</div>
<p>Long 1 hợp đồng futures 100 cổ phiếu ở giá 85,42. Ký quỹ ban đầu 1.000, ký quỹ duy trì 750. Giá thanh toán 4 ngày: 86,10; 84,90; 82,80; 84,60.</p>
<details><summary>Xem lời giải</summary>
<table class="plain"><thead><tr><th>Ngày</th><th>Giá</th><th>Lời/lỗ ngày</th><th>Số dư</th><th>Nộp thêm</th><th>Giá trị HĐ sau thanh toán</th></tr></thead><tbody>
<tr><td>0</td><td>85,42</td><td></td><td>1.000</td><td></td><td>0</td></tr>
<tr><td>1</td><td>86,10</td><td>+68</td><td>1.068</td><td></td><td>0</td></tr>
<tr><td>2</td><td>84,90</td><td>-120</td><td>948</td><td></td><td>0</td></tr>
<tr><td>3</td><td>82,80</td><td>-210</td><td>738 &lt; 750</td><td>262</td><td>0</td></tr>
<tr><td>4</td><td>84,60</td><td>+180</td><td>1.180</td><td></td><td>0</td></tr>
</tbody></table>
<p>Tổng lời/lỗ sau 4 ngày: 68 - 120 - 210 + 180 = <b>-82</b> = (84,60 - 85,42) × 100. Kiểm tra: đã nộp 1.000 + 262 = 1.262, còn lại 1.180, mất đúng 82.</p>
<p>Ngày 3 phải nộp về <b>ký quỹ ban đầu</b> (1.000 - 738 = 262), không phải về ký quỹ duy trì (12).</p></details></div>
<div class="key">Tổng lời/lỗ của futures từ lúc mở đến lúc đóng luôn bằng (f<sub>cuối</sub> - f<sub>0</sub>) × quy mô, giống forward. Điểm khác chỉ là <b>thời điểm</b> nhận/trả tiền: futures trả dần mỗi ngày, forward trả một lần khi đáo hạn.</div>`,
    },
    {
      title: '4. So sánh giá trị forward và futures',
      minutes: 8,
      html: `
<table class="plain"><thead><tr><th></th><th>Forward</th><th>Futures</th></tr></thead><tbody>
<tr><td>Giá lúc ký</td><td>F<sub>0</sub>(T) theo cost of carry</td><td>f<sub>0</sub>(T); bằng F<sub>0</sub>(T) nếu lãi suất không đổi</td></tr>
<tr><td>Giá trị lúc ký</td><td>0</td><td>0</td></tr>
<tr><td>Giá trị trong kỳ hạn</td><td>Tích lũy: PV của F<sub>t</sub>(T) - F<sub>0</sub>(T); là lời/lỗ <b>chưa thực hiện</b></td><td>Chỉ là lời/lỗ từ lần thanh toán gần nhất; sau thanh toán về 0</td></tr>
<tr><td>Lời/lỗ được trả khi nào</td><td>Một lần tại T</td><td>Mỗi ngày, vào tài khoản ký quỹ</td></tr>
<tr><td>Rủi ro đối tác</td><td>Có, tăng dần khi giá trị tích lũy</td><td>Gần như không (CCP, ký quỹ)</td></tr>
</tbody></table>
<div class="example"><div class="ex-h">Ví dụ 4.1 - Tin tốt làm giá nhảy vọt</div>
<p>Tiếp Ví dụ 2.1: một khách hàng long forward 6 tháng trên 100 cổ phiếu ở 85,42; ngân hàng phòng hộ bằng long futures cùng điều kiện ở 85,42. Sau 3 tháng, giá cổ phiếu nhảy lên 100 (r vẫn 1%). So sánh hai vị thế long.</p>
<details><summary>Xem lời giải</summary>
<p>Giá kỳ hạn/futures mới cho 3 tháng còn lại: 100 × 1,01<sup>0,25</sup> = 100,2491.</p>
<p><b>Futures:</b> lời tích lũy (100,2491 - 85,4239) × 100 = <b>1.482,51</b>, đã được ghi có vào tài khoản ký quỹ qua các ngày. Sau thanh toán cuối ngày, giá trị hợp đồng = 0.</p>
<p><b>Forward:</b> giá trị = 100 - 85,4239/1,01<sup>0,25</sup> = 14,7883 mỗi cổ phiếu, tức <b>1.478,83</b> cho 100 cổ phiếu. Đây là lời chưa thực hiện, chỉ nhận được tiền khi đáo hạn, và chênh nhẹ so với futures vì là giá trị hiện tại của khoản (100,2491 - 85,4239) × 100 nhận sau 3 tháng.</p></details></div>
<p class="warn"><b>Bẫy:</b> "giá trị futures sau thanh toán cuối ngày là bao nhiêu?" Đáp án là <b>0</b>, không phải tổng lời tích lũy. Lời tích lũy nằm trong tài khoản ký quỹ.</p>`,
    },
    {
      title: '5. Futures lãi suất',
      minutes: 9,
      html: `
<p>${t('irf', 'Futures lãi suất (interest rate futures)')} trên MRR là phiên bản niêm yết của FRA (DE-05). Giá được yết theo quy ước "100 trừ lãi suất":</p>
<div class="formula">Giá futures = 100 - (100 × MRR ngầm định) &nbsp;&nbsp;&nbsp;&nbsp; ví dụ MRR 3,25% ⟹ giá 96,75</div>
<p>Vì cách yết này, <b>giá futures tăng khi lãi suất giảm</b>. Bên long futures lãi suất lời khi lãi suất giảm, ngược với long FRA (lời khi lãi suất tăng).</p>
<p>Mỗi điểm cơ bản (0,01%) thay đổi lãi suất làm thay đổi giá trị hợp đồng một lượng cố định, gọi là ${t('bpv', 'giá trị một điểm cơ bản (basis point value, BPV)')}:</p>
<div class="formula">BPV = Notional × 0,01% × (số tháng / 12) &nbsp;&nbsp;&nbsp;&nbsp; hợp đồng 3 tháng, 1 triệu USD: 1.000.000 × 0,0001 × 0,25 = 25 USD</div>
<div class="example"><div class="ex-h">Ví dụ 5.1</div>
<p>Một quỹ long 1 hợp đồng futures MRR 3 tháng (notional 1 triệu USD) ở giá 96,75. Lãi suất ngầm định giảm còn 3,10%. Lời/lỗ?</p>
<details><summary>Xem lời giải</summary><p>Giá mới 96,90, tăng 15 điểm cơ bản. Lời = 15 × 25 = <b>375 USD</b>. Quỹ long futures lời khi lãi suất <b>giảm</b>.</p></details></div>
<table class="plain"><thead><tr><th>Muốn phòng hộ</th><th>Dùng FRA</th><th>Dùng futures lãi suất</th></tr></thead><tbody>
<tr><td>Sắp đi vay, sợ lãi suất tăng</td><td>Long FRA</td><td><b>Short</b> futures</td></tr>
<tr><td>Sắp đầu tư/cho vay, sợ lãi suất giảm</td><td>Short FRA</td><td><b>Long</b> futures</td></tr>
</tbody></table>
<p class="tip">FRA thanh toán số tiền đã chiết khấu nên lời/lỗ không tuyến tính hoàn toàn theo lãi suất, còn futures lãi suất có BPV cố định. Sự khác biệt này (cộng với thanh toán hằng ngày) làm lãi suất ngầm định của futures thường cao hơn lãi suất FRA một chút, gọi là ${t('cbias', 'convexity bias')}. Ở Level I chỉ cần biết tên và hướng.</p>`,
    },
    {
      title: '6. Vì sao giá forward và futures khác nhau',
      minutes: 12,
      html: `
<p>Tổng lời/lỗ bằng nhau, nhưng futures nhận/trả tiền <b>sớm hơn</b>. Tiền nhận sớm được đem đầu tư; tiền trả sớm phải đi vay. Nếu lãi suất biến động <b>có tương quan</b> với giá futures, cơ chế này có lợi cho một bên:</p>
<div class="example"><div class="ex-h">Ví dụ 6.1 - Tương quan dương có lợi cho bên long futures</div>
<p>Sau 6 tháng (còn 6 tháng đến đáo hạn), có hai kịch bản đồng khả năng. (a) Giá tăng 10 và lãi suất tăng lên 6%. (b) Giá giảm 10 và lãi suất giảm còn 2%. So sánh long futures với long forward tại T.</p>
<details><summary>Xem lời giải</summary>
<p>(a) Futures nhận 10 ngay, đầu tư ở 6% đến T: 10 × 1,06<sup>0,5</sup> = <b>10,30</b>. Forward nhận 10 tại T.</p>
<p>(b) Futures phải nộp 10 ngay, vay ở 2%: -10 × 1,02<sup>0,5</sup> = <b>-10,10</b>. Forward trả 10 tại T.</p>
<p>Trung bình futures +0,10 so với forward 0: được lời khi lãi suất cao, chịu lỗ khi lãi suất thấp. Ai cũng muốn long futures hơn long forward, nên họ chấp nhận trả giá futures <b>cao hơn</b>.</p></details></div>
<table class="plain"><thead><tr><th>Tương quan giữa giá futures và lãi suất</th><th>Bên long thích</th><th>Kết quả</th></tr></thead><tbody>
<tr><td>Dương</td><td>Futures</td><td>f<sub>0</sub>(T) &gt; F<sub>0</sub>(T)</td></tr>
<tr><td>Âm (ví dụ futures lãi suất, futures trái phiếu)</td><td>Forward</td><td>f<sub>0</sub>(T) &lt; F<sub>0</sub>(T)</td></tr>
<tr><td>Bằng 0, hoặc lãi suất không đổi/biết trước</td><td>Không khác biệt</td><td>f<sub>0</sub>(T) = F<sub>0</sub>(T)</td></tr>
</tbody></table>
<h4>Các lý do khác</h4>
<ul>
<li><b>Rủi ro tín dụng đối tác</b>: forward OTC có rủi ro đối tác, futures gần như không, nên giá forward có thể kèm điều chỉnh rủi ro tín dụng.</li>
<li><b>Thanh khoản và chi phí</b>: futures thanh khoản hơn; forward tùy chỉnh. Chi phí cơ hội của tiền ký quỹ cũng khác nhau.</li>
<li><b>Ký quỹ thế chấp ở OTC</b>: ngày nay nhiều forward OTC cũng phải ký quỹ và trao đổi tài sản đảm bảo, nên khác biệt thực tế thường nhỏ.</li>
</ul>
<p class="warn"><b>Bẫy:</b> phần bù rủi ro hay kỳ vọng của nhà đầu tư <b>không phải</b> lý do giá futures khác forward. Lý do chính trong đề thi là <b>tương quan giữa giá futures và lãi suất</b>. Ở hầu hết câu hỏi tính toán, cứ coi f<sub>0</sub>(T) = F<sub>0</sub>(T).</p>`,
    },
    {
      title: '7. Tóm tắt và bẫy thường gặp',
      minutes: 4,
      html: `
<table class="plain"><thead><tr><th>Chủ đề</th><th>Nhớ</th></tr></thead><tbody>
<tr><td>Giá futures lúc ký</td><td>Cost of carry; bằng giá forward khi lãi suất không đổi</td></tr>
<tr><td>Giá trị lúc ký</td><td>0 với cả forward và futures; ký quỹ không phải giá hay giá trị</td></tr>
<tr><td>Giá trị futures</td><td>(f<sub>t</sub> - f<sub>t-1</sub>) × quy mô trong ngày; <b>0</b> ngay sau thanh toán</td></tr>
<tr><td>Giá trị forward</td><td>Tích lũy, PV của F<sub>t</sub>(T) - F<sub>0</sub>(T), chưa thực hiện đến T</td></tr>
<tr><td>Margin call</td><td>Nộp về ký quỹ <b>ban đầu</b></td></tr>
<tr><td>Futures lãi suất</td><td>Giá = 100 - MRR; long lời khi lãi suất giảm; BPV 3 tháng, 1 triệu = 25</td></tr>
<tr><td>Tương quan dương giá - lãi suất</td><td>Futures đắt hơn forward</td></tr>
<tr><td>Tương quan âm</td><td>Futures rẻ hơn forward</td></tr>
<tr><td>Lãi suất không đổi hoặc không tương quan</td><td>Futures = forward</td></tr>
</tbody></table>
<p>Tiếp theo: tab <b>Luyện tập</b> - 10 câu. DE-07 sẽ xem swap như một chuỗi forward.</p>`,
    },
  ];

  const glossary = {
    mtm: ['Mark-to-market', 'Thanh toán lãi lỗ hằng ngày', 'Cuối mỗi ngày, lời/lỗ theo giá thanh toán được ghi vào tài khoản ký quỹ và hợp đồng coi như ký lại ở giá mới.'],
    fut: ['Futures price', 'Giá futures', 'Giá chốt của hợp đồng futures; được chọn để giá trị lúc mở bằng 0, thay đổi mỗi ngày trên sàn.'],
    settle: ['Settlement price', 'Giá thanh toán', 'Giá do sàn công bố cuối ngày để tính lời/lỗ mark-to-market.'],
    irf: ['Interest rate futures', 'Futures lãi suất', 'Futures trên lãi suất tham chiếu (MRR), yết giá bằng 100 trừ lãi suất ngầm định.'],
    bpv: ['Basis point value (BPV)', 'Giá trị một điểm cơ bản', 'Mức thay đổi giá trị hợp đồng khi lãi suất thay đổi 0,01%: notional × 0,0001 × kỳ hạn (năm).'],
    cbias: ['Convexity bias', 'Độ lệch do độ lồi', 'Chênh lệch giữa lãi suất ngầm định của futures và lãi suất FRA do khác biệt về cách thanh toán.'],
  };

  const practice = [
    { q: 'Ngay sau khi thanh toán mark-to-market cuối ngày, giá trị của một hợp đồng futures đối với bên long là:', choices: ['Giá futures nhân quy mô hợp đồng', 'Bằng 0', 'Tổng lời/lỗ tích lũy kể từ khi mở vị thế'], answer: 1, explain: 'Lời/lỗ đã được chuyển vào tài khoản ký quỹ và hợp đồng coi như ký lại ở giá mới, nên giá trị về 0. C là đặc điểm của forward (giá trị tích lũy); A nhầm giá với giá trị.' },
    { q: 'Long 1 hợp đồng futures 100 đơn vị ở giá 60,00. Ký quỹ ban đầu 800, ký quỹ duy trì 600. Giá thanh toán ngày 1 là 58,40 và ngày 2 là 57,50. Số tiền phải nộp thêm cuối ngày 2 là:', choices: ['250', '50', '90'], answer: 0, explain: 'Số dư: 800 - 160 = 640 (ngày 1), 640 - 90 = 550 < 600 (ngày 2). Phải nộp về ký quỹ ban đầu: 800 - 550 = 250. B chỉ nộp về ký quỹ duy trì; C là khoản lỗ trong ngày.' },
    { q: 'Nếu giá futures có tương quan dương với lãi suất, so với giá forward cùng điều kiện, giá futures nhiều khả năng:', choices: ['Thấp hơn', 'Bằng nhau', 'Cao hơn'], answer: 2, explain: 'Bên long futures nhận lời khi lãi suất cao (đầu tư được nhiều hơn) và trả lỗ khi lãi suất thấp (vay rẻ hơn), nên futures hấp dẫn hơn forward và có giá cao hơn. A đúng cho tương quan âm; B đúng khi lãi suất không đổi.' },
    { q: 'Khi lãi suất không đổi trong suốt thời hạn hợp đồng, quan hệ giữa giá futures và giá forward cùng kỳ hạn là:', choices: ['Futures cao hơn forward', 'Futures thấp hơn forward', 'Bằng nhau'], answer: 2, explain: 'Không có biến động lãi suất thì việc nhận/trả tiền sớm không tạo lợi thế cho bên nào, nên f0(T) = F0(T).' },
    { q: 'Một hợp đồng futures lãi suất 3 tháng đang có giá 97,40. Lãi suất MRR ngầm định (năm hóa) là:', choices: ['97,40%', '2,60%', '0,65%'], answer: 1, explain: 'Giá = 100 - lãi suất, nên lãi suất = 100 - 97,40 = 2,60%/năm. C là lãi suất cho riêng kỳ 3 tháng (2,60% / 4), không phải mức yết năm hóa.' },
    { q: 'Một quỹ long 4 hợp đồng futures MRR 3 tháng, notional 1 triệu USD mỗi hợp đồng. Giá futures tăng từ 96,80 lên 96,92. Lời của quỹ là:', choices: ['1.200 USD', '4.800 USD', '300 USD'], answer: 0, explain: 'BPV = 1.000.000 × 0,0001 × 0,25 = 25; giá tăng 12 điểm cơ bản: 4 × 12 × 25 = 1.200. B quên nhân 0,25 (dùng BPV 100); C chỉ tính cho 1 hợp đồng.' },
    { q: 'Một công ty sẽ phát hành khoản vay lãi suất thả nổi sau 3 tháng và lo lãi suất tăng. Nếu dùng futures lãi suất, công ty nên:', choices: ['Long futures lãi suất', 'Short futures lãi suất', 'Không thể phòng hộ bằng futures lãi suất'], answer: 1, explain: 'Lãi suất tăng làm giá futures (100 - MRR) giảm, nên vị thế short lời đúng lúc chi phí vay tăng. A là chiều của người sẽ đầu tư sợ lãi suất giảm. Lưu ý chiều ngược với FRA: người đi vay long FRA nhưng short futures.' },
    { q: 'Hai hợp đồng long cùng điều kiện, một forward và một futures, mở cách đây 3 tháng. Giá tài sản cơ sở tăng mạnh kể từ đó. Phát biểu nào đúng nhất?', choices: ['Lời của futures chỉ được nhận khi đáo hạn', 'Giá trị của forward được thanh toán bằng tiền mỗi ngày', 'Lời của futures đã vào tài khoản ký quỹ, còn lời của forward là chưa thực hiện cho đến đáo hạn'], answer: 2, explain: 'Futures mark-to-market hằng ngày; forward tích lũy giá trị và chỉ thanh toán tại T. A và B mô tả ngược hai loại hợp đồng.' },
    { q: 'Cổ phiếu không trả cổ tức giá 120, lãi suất phi rủi ro không đổi 2%/năm. Giá futures 9 tháng gần nhất với:', choices: ['121,80', '122,40', '120,00'], answer: 0, explain: 'Lãi suất không đổi nên giá futures = giá forward = 120 × 1,02^0,75 = 121,80. B dùng cả 1 năm; C bỏ qua chi phí vốn.' },
    { q: 'Ngoài tương quan giữa giá futures và lãi suất, yếu tố nào có thể làm giá futures khác giá forward?', choices: ['Phần bù rủi ro mà nhà đầu tư đòi hỏi trên tài sản cơ sở', 'Khác biệt về thanh khoản và rủi ro tín dụng đối tác', 'Mức giá giao ngay hiện tại của tài sản'], answer: 1, explain: 'Forward OTC có rủi ro đối tác và kém thanh khoản hơn futures, nên giá có thể khác. A sai vì cả forward và futures đều không chứa phần bù rủi ro; C ảnh hưởng như nhau tới cả hai giá.' },
  ];

  window.LESSONS['DE-06'] = {
    moduleId: 'DE-06',
    calculator: 'BA II Plus',
    warmup: [
      'Ôn DE-02: khi số dư ký quỹ rơi dưới mức duy trì, phải nộp thêm về mức nào?',
      'Ôn DE-05: giá trị của long forward trong kỳ hạn tính theo công thức nào?',
      'Đoán trước: nếu được chọn, bạn muốn nhận một khoản lời ngay hôm nay hay nhận cùng số tiền đó sau 6 tháng? Điều này liên quan gì đến futures?',
    ],
    sections,
    glossary,
    practice,
    widgets: {},
    slides: [],
    wrapup: [
      'So sánh giá trị của forward và futures tại lúc ký, trong kỳ hạn và ngay sau thanh toán cuối ngày.',
      'Giải thích vì sao tương quan dương giữa giá futures và lãi suất làm futures đắt hơn forward.',
      'Người sắp đi vay phòng hộ bằng FRA và bằng futures lãi suất thì chọn chiều long hay short?',
    ],
  };
}());
