// Bài giảng FI-14 - Credit Risk (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t, frac, keys } = window.CFAH;

  const sections = [
    {
      title: '1. Bức tranh lớn: rủi ro không được trả đủ, đúng hạn',
      minutes: 5,
      html: `
<p>Ở FI-13 bạn đã thấy: mọi thước đo duration phân tích đều giả định ${t('spread', 'credit spread')} không đổi. Module này mở "hộp đen" spread đó ra.</p>
<div class="key">${t('creditrisk', 'Credit risk')} là rủi ro tổn thất khi người vay <b>không trả đủ hoặc không trả đúng hạn</b> lãi và gốc theo hợp đồng. Nó có hai thành phần: <b>khả năng</b> vỡ nợ và <b>mức thiệt hại</b> nếu vỡ nợ.</div>
<p>Module có 3 LOS:</p>
<ol>
  <li>Credit risk và hai thành phần: ${t('pod', 'probability of default (POD)')} và ${t('lgd', 'loss given default (LGD)')}. (LOS 1)</li>
  <li>Công dụng và hạn chế của ${t('rating', 'xếp hạng tín nhiệm (credit rating)')}. (LOS 2)</li>
  <li>Các yếu tố vĩ mô, thị trường và riêng của tổ chức phát hành ảnh hưởng đến <b>mức</b> và <b>độ biến động</b> của yield spread. (LOS 3)</li>
</ol>
<p>Hai module tiếp theo áp dụng khung này cho chính phủ (FI-15) và doanh nghiệp (FI-16).</p>
<p class="tip"><b>Ví dụ quen thuộc:</b> bạn cho một người bạn vay 10 triệu. "Khả năng bạn ấy không trả" là POD; "nếu không trả thì mình mất bao nhiêu sau khi đòi lại được một phần" là LGD. Chủ nợ chuyên nghiệp chỉ làm đúng việc này, nhưng có số liệu.</p>`,
    },
    {
      title: '2. POD, LGD và expected loss (LOS 1)',
      minutes: 12,
      html: `
<table class="plain"><thead><tr><th>Khái niệm</th><th>Ý nghĩa</th></tr></thead><tbody>
<tr><td>${t('pod', 'Probability of default (POD)')}</td><td>Xác suất người vay không trả lãi hoặc gốc khi đến hạn trong một khoảng thời gian (thường là 1 năm)</td></tr>
<tr><td>${t('ee', 'Expected exposure (EE)')}</td><td>Số tiền nhà đầu tư dự kiến bị "phơi nhiễm" (đang được nợ) tại thời điểm vỡ nợ</td></tr>
<tr><td>${t('rr', 'Recovery rate (RR)')}</td><td>Tỷ lệ phần trăm số nợ thu hồi được sau vỡ nợ</td></tr>
<tr><td>${t('ls', 'Loss severity')}</td><td>1 - RR: tỷ lệ phần trăm mất đi</td></tr>
<tr><td>${t('lgd', 'Loss given default (LGD)')}</td><td>Số tiền mất đi khi vỡ nợ = EE × (1 - RR)</td></tr>
</tbody></table>
<div class="formula">LGD = EE × (1 - RR) &nbsp;&nbsp;&nbsp;&nbsp; ${t('el', 'Expected loss')} = POD × LGD</div>

<div class="example"><div class="ex-h">Ví dụ 2.1</div>
<p>Bạn nắm trái phiếu mệnh giá 1.000 USD. POD trong năm tới là 2%, tỷ lệ thu hồi dự kiến 40%. Tính LGD và expected loss.</p>
<details><summary>Xem lời giải</summary>
<p>LGD = 1.000 × (1 - 0,40) = <b>600 USD</b>.<br>
Expected loss = 2% × 600 = <b>12 USD</b>, tức 1,2% giá trị phơi nhiễm.</p>
<p class="warn">Đáp án nhiễu hay gặp: lấy POD × RR × EE = 2% × 40% × 1.000 = 8. Nhớ: thiệt hại dùng <b>1 - RR</b>, không dùng RR.</p></details></div>

<h4>POD và LGD phụ thuộc vào cái gì?</h4>
<ul>
  <li><b>POD</b> phụ thuộc vào <b>người vay</b>: khả năng tạo dòng tiền, đòn bẩy, ngành nghề, chu kỳ kinh tế. Mọi khoản nợ của cùng một tổ chức thường có cùng POD (vỡ nợ một khoản thường kéo theo vỡ nợ chéo các khoản khác).</li>
  <li><b>LGD</b> phụ thuộc vào <b>từng khoản nợ</b>: có tài sản bảo đảm không, thứ tự ưu tiên khi phá sản (seniority, học ở FI-16), và giá trị tài sản lúc vỡ nợ.</li>
</ul>
<div class="example"><div class="ex-h">Ví dụ 2.2 - Cùng tổ chức phát hành, khác khoản nợ</div>
<p>Cùng POD 2%. Trái phiếu senior secured có RR 70%; trái phiếu subordinated có RR 20%. Expected loss trên mỗi 100 mệnh giá?</p>
<details><summary>Xem lời giải</summary>
<p>Secured: 2% × 100 × 30% = <b>0,60</b>. Subordinated: 2% × 100 × 80% = <b>1,60</b>.<br>POD giống nhau, khác nhau hoàn toàn do LGD. Đó là lý do trái phiếu cấp thấp hơn có spread cao hơn dù cùng một công ty.</p></details></div>
<p class="tip">Recovery rate cũng <b>biến động theo chu kỳ</b>: trong suy thoái, tài sản bảo đảm mất giá và nhiều công ty cùng phá sản, nên RR thấp hơn đúng lúc POD cao hơn. Hai thành phần cùng xấu đi một lúc.</p>`,
    },
    {
      title: '3. Credit spread xấp xỉ POD × LGD',
      minutes: 8,
      html: `
<p>Nếu nhà đầu tư chỉ đòi bù cho tổn thất kỳ vọng (bỏ qua phần bù rủi ro và thanh khoản), thì phần lợi suất cao hơn trái phiếu phi rủi ro phải xấp xỉ bằng expected loss hằng năm tính theo %:</p>
<div class="formula">Credit spread ≈ POD × LGD (theo % mỗi năm) = POD × (1 - RR)</div>
<div class="example"><div class="ex-h">Ví dụ 3.1</div>
<p>Một trái phiếu có POD hằng năm 2%, RR 40%, đang giao dịch với spread 1,50% so với trái phiếu chính phủ. Nhà đầu tư có được bù đủ không?</p>
<details><summary>Xem lời giải</summary>
<p>Spread ước tính = 2% × 60% = <b>1,20%</b>. Spread thực tế 1,50% &gt; 1,20%, nên nhà đầu tư được bù <b>nhiều hơn mức hợp lý</b> cho rủi ro tín dụng (trái phiếu có thể đang rẻ).</p>
<p>Nếu spread thực tế chỉ là 0,90%, nhà đầu tư <b>không được bù đủ</b>.</p></details></div>
<p class="warn">Đây chỉ là xấp xỉ. Spread thực tế còn chứa phần bù thanh khoản và phần bù cho sự bất định của chính POD và RR (nhà đầu tư ghét rủi ro), nên spread quan sát thường <b>lớn hơn</b> expected loss thuần.</p>

<h4>Thử ngay: kéo POD và recovery rate</h4>
<div class="widget" data-widget="expLoss"></div>`,
    },
    {
      title: '4. Xếp hạng tín nhiệm: công dụng và hạn chế (LOS 2)',
      minutes: 12,
      html: `
<p>Ba ${t('cra', 'tổ chức xếp hạng tín nhiệm')} lớn là Moody's, S&amp;P Global và Fitch. Họ đánh giá chủ yếu <b>POD</b> (và với xếp hạng khoản nợ, cả khả năng thu hồi), rồi tóm thành một ký hiệu.</p>
<table class="plain"><thead><tr><th>Nhóm</th><th>S&amp;P, Fitch</th><th>Moody's</th></tr></thead><tbody>
<tr><td rowspan="2">${t('ig', 'Investment grade')}</td><td>AAA, AA+, AA, AA-, A+, A, A-</td><td>Aaa, Aa1, Aa2, Aa3, A1, A2, A3</td></tr>
<tr><td>BBB+, BBB, <b>BBB-</b></td><td>Baa1, Baa2, <b>Baa3</b></td></tr>
<tr><td>${t('hy', 'High yield (speculative, junk)')}</td><td>BB+ ... B-, CCC+ ... C</td><td>Ba1 ... B3, Caa1 ... C</td></tr>
<tr><td>Vỡ nợ</td><td>D</td><td>(C thường là đã vỡ nợ)</td></tr>
</tbody></table>
<p class="tip"><b>Ranh giới cần nhớ:</b> BBB- / Baa3 là bậc investment grade thấp nhất. Rơi xuống BB+ / Ba1 thì gọi là ${t('fallen', 'fallen angel')}, nhiều quỹ bắt buộc phải bán.</p>

<h4>Xếp hạng tổ chức phát hành và xếp hạng khoản nợ</h4>
<p>${t('issuerrating', 'Issuer rating')} (Moody's gọi là ${t('cfr', 'corporate family rating, CFR')}) phản ánh khả năng vỡ nợ chung, thường gắn với nợ senior unsecured. ${t('issuerating', 'Issue rating')} của từng khoản nợ có thể được nâng hoặc hạ vài bậc (${t('notching', 'notching')}) tùy thứ tự ưu tiên và tài sản bảo đảm. Chi tiết ở FI-16.</p>

<h4>Công dụng</h4>
<ul>
  <li><b>So sánh</b> rủi ro tín dụng giữa các tổ chức phát hành và loại trái phiếu khác nhau bằng một thang chung.</li>
  <li>Theo dõi ${t('migration', 'credit migration (rủi ro bị hạ bậc)')}: khả năng xếp hạng thay đổi làm giá trái phiếu thay đổi, kể cả khi chưa vỡ nợ.</li>
  <li><b>Đáp ứng quy định và hợp đồng</b>: yêu cầu vốn của ngân hàng, bảo hiểm; điều lệ quỹ chỉ được mua investment grade; điều khoản trong hợp đồng vay gắn với xếp hạng.</li>
</ul>
<h4>Hạn chế</h4>
<ul>
  <li><b>Chậm hơn thị trường</b>: giá và spread phản ứng trước, xếp hạng thay đổi sau.</li>
  <li>Một số rủi ro <b>khó dự báo</b>: kiện tụng, thiên tai, thâu tóm bằng vay nợ (LBO), gian lận.</li>
  <li>Các tổ chức có thể cho xếp hạng khác nhau (${t('split', 'split rating')}).</li>
  <li>Tổ chức xếp hạng <b>có thể sai</b> (ví dụ chứng khoán thế chấp năm 2007-2009), và có xung đột lợi ích vì tổ chức phát hành trả phí xếp hạng.</li>
  <li><b>Cùng xếp hạng không có nghĩa là cùng lợi suất</b>: spread còn phụ thuộc thanh khoản, kỳ hạn, điều khoản.</li>
</ul>

<div class="example"><div class="ex-h">Ví dụ 4.1 - Credit migration</div>
<p>Trái phiếu BBB có spread duration 7,0. Xác suất xếp hạng sau 1 năm và thay đổi spread tương ứng: lên A (5%, spread -0,50%); giữ BBB (90%, 0); xuống BB (4%, +1,20%); xuống B (1%, +3,00%). Ước tính % thay đổi giá kỳ vọng do credit migration.</p>
<details><summary>Xem lời giải</summary>
<p>% thay đổi giá ở mỗi kịch bản ≈ -7,0 × Δspread: +3,5%; 0; -8,4%; -21,0%.<br>
Kỳ vọng = 5% × 3,5% + 90% × 0 + 4% × (-8,4%) + 1% × (-21,0%) = 0,175% - 0,336% - 0,21% = <b>-0,37%</b>.</p>
<p>Dù 90% khả năng không có gì xảy ra, kỳ vọng vẫn âm: hạ bậc xảy ra thường hơn nâng bậc và làm spread nới rộng nhiều hơn. Lợi suất kỳ vọng thực tế thấp hơn YTM.</p></details></div>`,
    },
    {
      title: '5. Các yếu tố ảnh hưởng đến yield spread (LOS 3)',
      minutes: 13,
      html: `
<div class="formula">Yield spread = lợi suất trái phiếu - lợi suất chuẩn ≈ phần bù tín dụng + phần bù thanh khoản</div>
<table class="plain"><thead><tr><th>Nhóm yếu tố</th><th>Ví dụ</th><th>Tác động</th></tr></thead><tbody>
<tr><td><b>Vĩ mô</b></td><td>${t('cycle', 'Chu kỳ tín dụng')}, tăng trưởng GDP, thất nghiệp, lãi suất chính sách</td><td>Suy thoái: POD tăng, RR giảm, spread nới rộng, nhất là trái phiếu xếp hạng thấp. Phục hồi: spread thu hẹp</td></tr>
<tr><td><b>Thị trường</b></td><td>Thanh khoản, cung cầu, tâm lý ưa/ngại rủi ro, năng lực của nhà tạo lập thị trường</td><td>Nhiều đợt phát hành mới hoặc thị trường căng thẳng: spread tăng. Trái phiếu ít giao dịch: phần bù thanh khoản cao</td></tr>
<tr><td><b>Riêng tổ chức phát hành</b></td><td>Kết quả kinh doanh, đòn bẩy, thay đổi xếp hạng, sự kiện (M&amp;A, mua lại cổ phiếu bằng vay nợ)</td><td>Kết quả xấu hoặc bị hạ bậc: spread nới rộng</td></tr>
</tbody></table>
<div class="key">Trái phiếu xếp hạng càng thấp thì spread <b>càng cao</b> và <b>càng biến động</b>. Khi kinh tế xấu đi, spread high-yield nới rộng nhiều hơn hẳn spread investment grade ("flight to quality").</div>

<h4>Tách spread thành phần thanh khoản và phần tín dụng</h4>
<p>Chênh lệch giá mua - bán (bid-offer) phản ánh thanh khoản. Lợi suất tại giá bid trừ lợi suất tại giá offer là ${t('liq', 'liquidity spread')}.</p>
<div class="example"><div class="ex-h">Ví dụ 5.1</div>
<p>Trái phiếu 7 năm, coupon 6% trả hằng năm, yết giá 99,25 / 100,75. Lợi suất chuẩn 7 năm là 4%. Tách yield spread.</p>
<details><summary>Xem lời giải</summary>
<p>Giá giữa = (99,25 + 100,75) / 2 = 100 = mệnh giá, nên lợi suất = coupon = 6%. Yield spread = 6% - 4% = <b>2,00%</b>.</p>
${keys([
  ['Lợi suất tại giá bid', '7 [N] 99.25 [+/-] [PV] 6 [PMT] 100 [FV] [CPT] [I/Y]', 'I/Y = 6.1350'],
  ['Lợi suất tại giá offer', '100.75 [+/-] [PV] [CPT] [I/Y]', 'I/Y = 5.8663'],
])}
<p>Liquidity spread = 6,1350% - 5,8663% = <b>0,27%</b>. Phần tín dụng = 2,00% - 0,27% = <b>1,73%</b>.</p></details></div>

<h4>Spread thay đổi thì giá thay đổi bao nhiêu?</h4>
<div class="formula">%ΔPV ≈ -(ModDur × ΔSpread) + ${frac('1', '2')} × Convexity × (ΔSpread)<sup>2</sup></div>
<p>Công thức giống FI-12, chỉ thay thay đổi lợi suất bằng thay đổi spread. Duration dùng ở đây đôi khi gọi là ${t('spreaddur', 'spread duration')}.</p>
<div class="example"><div class="ex-h">Ví dụ 5.2</div>
<p>Trái phiếu doanh nghiệp có modified duration 6,5 và convexity 55. Spread nới rộng 50 bps (lợi suất chuẩn không đổi).</p>
<details><summary>Xem lời giải</summary>
<p>%ΔPV ≈ -6,5 × 0,005 + 0,5 × 55 × 0,005<sup>2</sup> = -3,25% + 0,07% = <b>-3,18%</b>.<br>Nếu spread thu hẹp 50 bps: +3,25% + 0,07% = <b>+3,32%</b>.</p></details></div>`,
    },
    {
      title: '6. Tóm tắt và bẫy thường gặp',
      minutes: 5,
      html: `
<table class="plain"><thead><tr><th>Tình huống</th><th>Nhớ</th></tr></thead><tbody>
<tr><td>LGD</td><td>EE × (1 - RR); dùng loss severity, không dùng recovery rate</td></tr>
<tr><td>Expected loss</td><td>POD × LGD</td></tr>
<tr><td>Credit spread ước tính</td><td>≈ POD × (1 - RR); spread thực tế &gt; ước tính thì được bù nhiều hơn mức hợp lý</td></tr>
<tr><td>POD và LGD</td><td>POD gắn với người vay; LGD gắn với từng khoản nợ</td></tr>
<tr><td>Ranh giới investment grade</td><td>BBB- (S&amp;P, Fitch), Baa3 (Moody's)</td></tr>
<tr><td>Hạn chế của xếp hạng</td><td>Chậm hơn thị trường, có rủi ro khó dự báo, có thể khác nhau và có thể sai</td></tr>
<tr><td>Credit migration</td><td>Kỳ vọng lệch về phía âm: hạ bậc làm giá giảm nhiều</td></tr>
<tr><td>Yếu tố spread</td><td>Vĩ mô, thị trường, riêng tổ chức phát hành; xếp hạng thấp thì spread cao và biến động hơn</td></tr>
<tr><td>Liquidity spread</td><td>Lợi suất tại giá bid - lợi suất tại giá offer</td></tr>
</tbody></table>
<p>Tiếp theo: tab <b>Luyện tập</b> 10 câu, rồi sang FI-15 (chính phủ) và FI-16 (doanh nghiệp).</p>`,
    },
  ];

  const glossary = {
    spread: ['Credit spread / yield spread', 'Chênh lệch lợi suất tín dụng', 'Phần lợi suất của trái phiếu cao hơn lợi suất chuẩn cùng kỳ hạn, bù cho rủi ro tín dụng và thanh khoản.'],
    creditrisk: ['Credit risk', 'Rủi ro tín dụng', 'Rủi ro tổn thất do người vay không trả đủ hoặc không trả đúng hạn lãi và gốc.'],
    pod: ['Probability of default (POD)', 'Xác suất vỡ nợ', 'Xác suất người vay không thực hiện nghĩa vụ thanh toán trong một khoảng thời gian.'],
    lgd: ['Loss given default (LGD)', 'Tổn thất khi vỡ nợ', 'Số tiền mất đi nếu vỡ nợ = expected exposure × (1 - recovery rate).'],
    ee: ['Expected exposure', 'Giá trị phơi nhiễm dự kiến', 'Số tiền nhà đầu tư dự kiến đang được nợ tại thời điểm vỡ nợ.'],
    rr: ['Recovery rate', 'Tỷ lệ thu hồi', 'Phần trăm số nợ thu hồi được sau khi vỡ nợ.'],
    ls: ['Loss severity', 'Mức độ tổn thất', '1 - recovery rate: phần trăm số nợ bị mất.'],
    el: ['Expected loss', 'Tổn thất kỳ vọng', 'POD × LGD; tính theo % mỗi năm thì xấp xỉ credit spread.'],
    rating: ['Credit rating', 'Xếp hạng tín nhiệm', 'Ký hiệu tóm tắt đánh giá rủi ro tín dụng của tổ chức xếp hạng.'],
    cra: ['Credit rating agency', 'Tổ chức xếp hạng tín nhiệm', 'Moody\'s, S&P Global, Fitch: đánh giá và công bố xếp hạng tín nhiệm.'],
    ig: ['Investment grade', 'Hạng đầu tư', 'Xếp hạng từ BBB- / Baa3 trở lên.'],
    hy: ['High yield / speculative grade', 'Hạng đầu cơ (lợi suất cao)', 'Xếp hạng từ BB+ / Ba1 trở xuống; còn gọi là junk bond.'],
    fallen: ['Fallen angel', 'Thiên thần sa ngã', 'Trái phiếu bị hạ từ investment grade xuống high yield.'],
    issuerrating: ['Issuer rating', 'Xếp hạng tổ chức phát hành', 'Đánh giá khả năng vỡ nợ chung của tổ chức phát hành.'],
    cfr: ['Corporate family rating (CFR)', 'Xếp hạng nhóm doanh nghiệp', 'Tên của Moody\'s cho xếp hạng tổ chức phát hành, thường áp dụng cho nợ senior unsecured.'],
    issuerating: ['Issue rating', 'Xếp hạng khoản nợ', 'Xếp hạng của một trái phiếu cụ thể, tính đến thứ tự ưu tiên và tài sản bảo đảm.'],
    notching: ['Notching', 'Điều chỉnh bậc', 'Nâng hoặc hạ xếp hạng khoản nợ so với xếp hạng tổ chức phát hành.'],
    migration: ['Credit migration / downgrade risk', 'Rủi ro thay đổi xếp hạng', 'Rủi ro xếp hạng bị hạ làm spread nới rộng và giá trái phiếu giảm.'],
    split: ['Split rating', 'Xếp hạng không đồng nhất', 'Các tổ chức xếp hạng cho cùng một trái phiếu những mức xếp hạng khác nhau.'],
    cycle: ['Credit cycle', 'Chu kỳ tín dụng', 'Giai đoạn mở rộng và thu hẹp tín dụng, gắn với chu kỳ kinh tế; ảnh hưởng mạnh đến POD và spread.'],
    liq: ['Liquidity spread', 'Phần bù thanh khoản', 'Lợi suất tại giá bid trừ lợi suất tại giá offer; phần spread do thanh khoản kém.'],
    spreaddur: ['Spread duration', 'Duration theo spread', 'Độ nhạy giá của trái phiếu theo thay đổi credit spread.'],
  };

  const practice = [
    { q: 'Nhà đầu tư nắm khoản nợ có expected exposure 500.000 USD, POD 3% và recovery rate 35%. Expected loss gần nhất với:', choices: ['5.250 USD', '9.750 USD', '15.000 USD'], answer: 1, explain: 'LGD = 500.000 x (1 - 0,35) = 325.000; EL = 3% x 325.000 = 9.750. A dùng recovery rate thay vì loss severity. C là POD x exposure, bỏ qua phần thu hồi.' },
    { q: 'Một trái phiếu có POD hằng năm 1,5% và recovery rate 45%. Credit spread ước tính theo xấp xỉ POD x LGD gần nhất với:', choices: ['0,83%', '0,68%', '1,50%'], answer: 0, explain: '1,5% x (1 - 0,45) = 0,825%. B nhân với recovery rate. C chỉ là POD, giả định mất toàn bộ.' },
    { q: 'Xếp hạng nào của S&P là bậc investment grade thấp nhất?', choices: ['BB+', 'A-', 'BBB-'], answer: 2, explain: 'BBB- (tương đương Baa3 của Moody\'s) là bậc thấp nhất của investment grade. BB+ là bậc high yield cao nhất. A- vẫn còn cách 3 bậc.' },
    { q: 'Hạn chế nào sau đây của xếp hạng tín nhiệm là đúng nhất?', choices: ['Xếp hạng không cho phép so sánh giữa các tổ chức phát hành', 'Thay đổi xếp hạng thường chậm hơn thay đổi giá thị trường', 'Trái phiếu cùng xếp hạng luôn có cùng lợi suất'], answer: 1, explain: 'Thị trường phản ứng trước, xếp hạng điều chỉnh sau. A sai: so sánh chính là công dụng của xếp hạng. C sai: cùng xếp hạng vẫn có thể khác lợi suất do thanh khoản, kỳ hạn, điều khoản.' },
    { q: 'Trái phiếu có modified duration 5,0 và convexity 40. Nếu credit spread nới rộng 80 bps trong khi lợi suất chuẩn không đổi, % thay đổi giá ước tính gần nhất với:', choices: ['-4,00%', '-4,13%', '-3,87%'], answer: 2, explain: '-5,0 x 0,008 + 0,5 x 40 x 0,008^2 = -4,00% + 0,128% = -3,87%. A bỏ qua convexity. B trừ hiệu ứng convexity thay vì cộng.' },
    { q: 'Khi nền kinh tế bước vào suy thoái, yield spread nhiều khả năng:', choices: ['nới rộng, và nới rộng nhiều hơn với trái phiếu xếp hạng thấp', 'thu hẹp, vì lãi suất chính sách giảm', 'nới rộng như nhau cho mọi mức xếp hạng'], answer: 0, explain: 'Suy thoái làm POD tăng và recovery rate giảm, nhà đầu tư chuyển sang tài sản an toàn; trái phiếu xếp hạng thấp chịu tác động mạnh nhất. B nhầm lợi suất chuẩn với spread. C bỏ qua việc spread trái phiếu xếp hạng thấp biến động mạnh hơn.' },
    { q: 'Trái phiếu 5 năm, coupon 4,5% trả hằng năm, yết giá bid / offer 98,80 / 99,60. Liquidity spread gần nhất với:', choices: ['0,09%', '0,18%', '0,80%'], answer: 1, explain: 'Lợi suất tại giá bid 98,80 là 4,775%; tại giá offer 99,60 là 4,591%. Chênh lệch = 0,18%. A chia đôi chênh lệch. C lấy chênh lệch giá 0,80 coi như lợi suất.' },
    { q: 'Yếu tố nào sau đây là yếu tố thị trường (market factor) ảnh hưởng đến yield spread?', choices: ['Thanh khoản và cung cầu trái phiếu', 'Đòn bẩy tài chính của tổ chức phát hành', 'Tốc độ tăng trưởng GDP'], answer: 0, explain: 'Thanh khoản, cung cầu, tâm lý thị trường là yếu tố thị trường. B là yếu tố riêng của tổ chức phát hành. C là yếu tố vĩ mô.' },
    { q: 'So với trái phiếu subordinated của cùng một công ty, trái phiếu senior secured nhiều khả năng có:', choices: ['POD thấp hơn và LGD cao hơn', 'POD cao hơn và LGD như nhau', 'POD như nhau và LGD thấp hơn'], answer: 2, explain: 'POD gắn với người vay nên giống nhau cho các khoản nợ của cùng công ty (do vỡ nợ chéo); tài sản bảo đảm và thứ tự ưu tiên làm recovery cao hơn, LGD thấp hơn. A và B nhầm POD là đặc điểm của khoản nợ.' },
    { q: 'Trái phiếu BBB có spread duration 6,0. Xác suất sau 1 năm: nâng bậc 4% (spread -0,40%), giữ nguyên 88%, hạ một bậc 6% (spread +1,00%), hạ hai bậc 2% (spread +2,50%). % thay đổi giá kỳ vọng do credit migration gần nhất với:', choices: ['-0,66%', '-0,56%', '0,00%'], answer: 1, explain: 'Kỳ vọng = 4% x 2,4% + 6% x (-6,0%) + 2% x (-15,0%) = 0,096% - 0,36% - 0,30% = -0,56%. A bỏ qua khả năng nâng bậc. C chỉ nhìn kịch bản có xác suất cao nhất.' },
  ];

  const widgets = {
    expLoss(el) {
      el.innerHTML = `
        <div class="w-row"><label>POD hằng năm: <b data-o="p">2,0%</b><input type="range" min="0" max="15" step="0.1" value="2" data-i="p"></label>
        <label>Recovery rate: <b data-o="r">40%</b><input type="range" min="0" max="100" step="5" value="40" data-i="r"></label>
        <label>Spread thực tế: <b data-o="s">1,50%</b><input type="range" min="0" max="10" step="0.05" value="1.5" data-i="s"></label></div>
        <div class="w-out"><div class="w-price" data-o="o"></div><div class="w-bar"><span data-o="bar"></span><i></i></div><div class="w-note" data-o="note"></div></div>`;
      const q = s => el.querySelector(s);
      const f = (x, k = 2) => x.toFixed(k).replace('.', ',');
      const upd = () => {
        const p = +q('[data-i="p"]').value, r = +q('[data-i="r"]').value, s = +q('[data-i="s"]').value;
        const el2 = p * (1 - r / 100);
        q('[data-o="p"]').textContent = `${f(p, 1)}%`;
        q('[data-o="r"]').textContent = `${r}%`;
        q('[data-o="s"]').textContent = `${f(s)}%`;
        q('[data-o="o"]').textContent = `Spread ước tính ≈ POD × (1 - RR) = ${f(el2)}%`;
        q('[data-o="bar"]').style.width = `${Math.min(100, el2 * 10)}%`;
        q('[data-o="note"]').textContent = Math.abs(s - el2) < 0.005 ? 'Spread thực tế bằng mức ước tính: được bù vừa đủ.'
          : s > el2 ? `Spread thực tế cao hơn ${f(s - el2)} điểm %: được bù nhiều hơn mức hợp lý (phần dư có thể là phần bù thanh khoản, phần bù rủi ro).`
            : `Spread thực tế thấp hơn ${f(el2 - s)} điểm %: nhà đầu tư không được bù đủ cho tổn thất kỳ vọng.`;
      };
      el.addEventListener('input', upd);
      upd();
    },
  };

  window.LESSONS['FI-14'] = {
    moduleId: 'FI-14',
    calculator: 'BA II Plus',
    warmup: [
      'Ôn FI-13: analytical duration giả định gì về credit spread khi lợi suất chuẩn thay đổi?',
      'Bạn cho vay 10 triệu, ước tính 5% khả năng không đòi được, và nếu không đòi được thì chỉ lấy lại 3 triệu. Bạn kỳ vọng mất bao nhiêu?',
      'Kể tên 3 tổ chức xếp hạng tín nhiệm lớn mà bạn biết.',
    ],
    sections,
    glossary,
    practice,
    widgets,
    slides: [],
    wrapup: [
      'Viết công thức LGD, expected loss và credit spread xấp xỉ, kèm một ví dụ số của riêng bạn.',
      'Nêu 3 công dụng và 3 hạn chế của xếp hạng tín nhiệm.',
      'Phân loại các yếu tố sau vào nhóm vĩ mô, thị trường, riêng tổ chức phát hành: GDP, bid-offer, đòn bẩy, phát hành mới, bị hạ bậc.',
    ],
  };
}());
