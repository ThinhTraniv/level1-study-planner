// Bài giảng AI-02 - Alternative Investment Performance and Returns (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t, frac, keys, timeline } = window.CFAH;

  const sections = [
    {
      title: '1. Bức tranh lớn',
      minutes: 4,
      html: `
<p>Với cổ phiếu niêm yết, đo thành quả rất dễ: lấy giá cuối kỳ, cộng cổ tức, chia giá đầu kỳ. Với tài sản thay thế thì không đơn giản vậy, vì bốn lý do:</p>
<ol>
<li><b>Dòng tiền không đều:</b> vốn được gọi dần và trả lại dần trong nhiều năm.</li>
<li><b>Đòn bẩy:</b> nhiều quỹ vay nợ để khuếch đại lợi suất (và thua lỗ).</li>
<li><b>Định giá khó:</b> không có giá thị trường, phải dùng mô hình hoặc thẩm định.</li>
<li><b>Phí phức tạp:</b> phí quản lý, phí thành quả, hurdle, high-water mark, waterfall làm lợi suất <b>trước phí</b> và <b>sau phí</b> khác xa nhau.</li>
</ol>
<div class="key">LOS 1: mô tả cách <b>đánh giá thành quả</b> (vòng đời quỹ, IRR và MOIC, đòn bẩy, định giá, thanh khoản).<br>LOS 2: <b>tính và diễn giải</b> lợi suất trước phí và sau phí.</div>
<p class="tip">Module này nối tiếp AI-01 (nơi đã giới thiệu các điều khoản phí). Ở đây ta <b>bấm số</b>. Đề thi hay cho một quỹ với 3-4 điều khoản phí và hỏi lợi suất ròng của nhà đầu tư: đọc kỹ phí tính trên giá trị nào và phí thành quả tính trước hay sau phí quản lý.</p>`,
    },
    {
      title: '2. Vòng đời quỹ và đường cong J',
      minutes: 8,
      html: `
<p>Một quỹ private capital điển hình (thời hạn khoảng 10 năm) trải qua ba giai đoạn:</p>
<table class="plain"><thead><tr><th>Giai đoạn</th><th>Điều gì xảy ra</th><th>Lợi suất của LP</th></tr></thead><tbody>
<tr><td>${t('commitph', 'Cam kết vốn (capital commitment)')}</td><td>LP cam kết vốn; GP tìm thương vụ, gọi vốn dần (capital call, drawdown)</td><td>Âm: đã trả phí quản lý, chi phí lập quỹ, chưa có lợi nhuận</td></tr>
<tr><td>${t('deployph', 'Triển khai vốn (capital deployment)')}</td><td>Vốn được đầu tư vào doanh nghiệp, tài sản; GP cải thiện hoạt động</td><td>Vẫn âm hoặc gần 0, bắt đầu cải thiện</td></tr>
<tr><td>${t('distribph', 'Phân phối (capital distribution)')}</td><td>Thoái vốn, nhận cổ tức, trả tiền về LP</td><td>Dương, lợi suất lũy kế tăng nhanh</td></tr>
</tbody></table>
<p>Vẽ lợi suất lũy kế theo thời gian ta được hình chữ J: đi xuống trước, rồi đi lên. Đó là ${t('jcurve', 'đường cong J (J-curve)')}.</p>

<div class="example"><div class="ex-h">Ví dụ 2.1 - Dòng tiền của một LP</div>
<p>LP góp 40 ở t = 0, 30 ở t = 1, 30 ở t = 2 (tổng 100), nhận lại 20 ở t = 3, 50 ở t = 4, 90 ở t = 5 (đơn vị: triệu USD). Tính dòng tiền lũy kế, MOIC và IRR.</p>
${timeline(5, [{ t: 0, label: '-40', cls: 'pv' }, { t: 1, label: '-30', cls: 'pv' }, { t: 2, label: '-30', cls: 'pv' }, { t: 3, label: '+20', up: true }, { t: 4, label: '+50', up: true }, { t: 5, label: '+90', up: true }], 'Vốn gọi dần (dưới trục) và phân phối dần (trên trục).')}
<details><summary>Xem lời giải</summary>
<p>Lũy kế: -40; -70; -100; -80; -30; <b>+60</b>. Đáy ở t = 2, đến t = 5 mới dương: đúng hình chữ J.</p>
<p>${t('moic', 'MOIC')} = tổng nhận về / tổng góp = 160 / 100 = <b>1,6x</b>.</p>
${keys([
  ['Mở và xóa bảng CF', '[CF] [2ND] [CE/C]', 'CF0 = 0'],
  ['CF0', '40 [+/-] [ENTER] [↓]', 'CF0 = -40'],
  ['C01, F01', '30 [+/-] [ENTER] [↓] [↓]', 'C01 = -30'],
  ['C02', '30 [+/-] [ENTER] [↓] [↓]', 'C02 = -30'],
  ['C03', '20 [ENTER] [↓] [↓]', 'C03 = 20'],
  ['C04', '50 [ENTER] [↓] [↓]', 'C04 = 50'],
  ['C05', '90 [ENTER]', 'C05 = 90'],
  ['Tính IRR', '[IRR] [CPT]', 'IRR = 14.1598'],
])}
<p>IRR = <b>14,16%</b>/năm.</p></details></div>`,
    },
    {
      title: '3. Thước đo thành quả: IRR, MOIC và các tỷ số rủi ro',
      minutes: 8,
      html: `
<table class="plain"><thead><tr><th>Thước đo</th><th>Cách tính</th><th>Ưu điểm</th><th>Hạn chế</th></tr></thead><tbody>
<tr><td>${t('irr', 'IRR')} (tỷ suất hoàn vốn nội bộ, từ khi thành lập)</td><td>Lãi suất làm NPV của mọi dòng góp và nhận bằng 0</td><td>Tính đến <b>thời điểm</b> dòng tiền; phù hợp khi GP kiểm soát lúc gọi và trả vốn</td><td>Giả định tái đầu tư ở IRR; nhạy với thời điểm; có thể bị "làm đẹp" bằng cách trả sớm</td></tr>
<tr><td>${t('moic', 'MOIC')} (multiple of invested capital)</td><td>${frac('Giá trị đã nhận + giá trị còn lại', 'Vốn đã góp')}</td><td>Đơn giản, cho biết "gấp bao nhiêu lần"</td><td><b>Bỏ qua thời gian</b>: 2x sau 3 năm khác xa 2x sau 10 năm</td></tr>
</tbody></table>
<div class="key">IRR là lợi suất <b>theo tiền (money-weighted)</b>. Dùng cho private equity, private debt, nơi GP quyết định khi nào gọi và trả vốn. Với quỹ mở như hedge fund, nhà đầu tư tự quyết định nạp, rút, nên dùng lợi suất <b>theo thời gian (time-weighted)</b>.</div>

<h4>Các tỷ số rủi ro điều chỉnh</h4>
<ul>
<li>${t('sharpe', 'Sharpe ratio')} = (R<sub>p</sub> - R<sub>f</sub>) / σ<sub>p</sub>. Với alternatives, Sharpe thường <b>bị thổi phồng</b> vì σ bị đánh giá thấp (lợi suất làm mượt) và lợi suất không phân phối chuẩn (lệch trái, đuôi dày).</li>
<li>${t('sortino', 'Sortino ratio')} = (R<sub>p</sub> - R<sub>f</sub>) / độ lệch chuẩn phía dưới (downside deviation): chỉ phạt biến động xấu, phù hợp hơn khi phân phối bất đối xứng.</li>
<li>Một số nhà phân tích còn dùng Calmar ratio (lợi suất trung bình năm chia mức sụt giảm tối đa, maximum drawdown) cho hedge fund.</li>
</ul>
<p class="warn"><b>Bẫy:</b> MOIC cao chưa chắc là tốt. Hai quỹ cùng MOIC 1,6x, quỹ trả tiền về sau 5 năm có IRR cao hơn nhiều so với quỹ trả về sau 10 năm.</p>`,
    },
    {
      title: '4. Đòn bẩy: khuếch đại cả hai chiều',
      minutes: 5,
      html: `
<p>Nhiều quỹ (buyout, bất động sản, hedge fund) vay nợ để mua thêm tài sản. Gọi V<sub>c</sub> là vốn tự có, V<sub>b</sub> là vốn vay, r là lợi suất của tài sản, r<sub>b</sub> là lãi vay:</p>
<div class="formula">r<sub>L</sub> = ${frac('r × (V<sub>c</sub> + V<sub>b</sub>) - V<sub>b</sub> × r<sub>b</sub>', 'V<sub>c</sub>')}</div>
<div class="example"><div class="ex-h">Ví dụ 4.1</div>
<p>Quỹ có 100 vốn tự có, vay thêm 50 với lãi suất 5%, đầu tư toàn bộ 150. Tính lợi suất trên vốn tự có nếu tài sản sinh lời (a) +10%, (b) -10%.</p>
<details><summary>Xem lời giải</summary>
<p>(a) r<sub>L</sub> = (10% × 150 - 50 × 5%) / 100 = (15 - 2,5) / 100 = <b>12,5%</b>.<br>
(b) r<sub>L</sub> = (-10% × 150 - 2,5) / 100 = <b>-17,5%</b>.</p>
<p>Lãi vay phải trả <b>dù tài sản lời hay lỗ</b>, nên đòn bẩy làm lợi suất tốt hơn khi r &gt; r<sub>b</sub> và tệ hơn nhiều khi r &lt; r<sub>b</sub>.</p></details></div>
<p class="tip">Ngoài vay ngân hàng, hedge fund còn tạo đòn bẩy qua giao dịch ký quỹ (margin), bán khống và phái sinh. Khi thua lỗ, bên cho vay có thể gọi ký quỹ, buộc quỹ bán tài sản ở giá xấu.</p>`,
    },
    {
      title: '5. Định giá: thứ bậc giá trị hợp lý và các sai lệch dữ liệu',
      minutes: 6,
      html: `
<p>Kế toán chia đầu vào định giá thành ba cấp, gọi là ${t('fvh', 'thứ bậc giá trị hợp lý (fair value hierarchy)')}:</p>
<table class="plain"><thead><tr><th>Cấp</th><th>Đầu vào</th><th>Ví dụ</th></tr></thead><tbody>
<tr><td>Level 1</td><td>Giá niêm yết trên thị trường hoạt động cho tài sản <b>giống hệt</b></td><td>Cổ phiếu niêm yết, hợp đồng tương lai</td></tr>
<tr><td>Level 2</td><td>Đầu vào <b>quan sát được</b> nhưng không phải giá niêm yết của chính tài sản đó</td><td>Trái phiếu ít giao dịch định giá theo đường lợi suất; swap</td></tr>
<tr><td>Level 3</td><td>Đầu vào <b>không quan sát được</b>, dựa trên mô hình và giả định của nhà quản lý (${t('mtm', 'mark to model')})</td><td>Cổ phần công ty tư nhân, bất động sản, nợ tư nhân</td></tr>
</tbody></table>
<p>Phần lớn tài sản của private capital và bất động sản thuộc Level 3: định giá mang tính chủ quan, cập nhật thưa (theo quý), dễ bị làm mượt.</p>
<h4>Hệ quả cho dữ liệu thành quả</h4>
<ul>
<li>${t('smooth', 'Làm mượt lợi suất (return smoothing)')}: biến động và tương quan báo cáo thấp hơn thực tế, Sharpe bị thổi phồng.</li>
<li>${t('survivor', 'Sai lệch sống sót (survivorship bias)')}: quỹ thua lỗ đóng cửa và biến mất khỏi chỉ số, nên lợi suất chỉ số bị đẩy lên.</li>
<li>${t('backfill', 'Sai lệch điền ngược (backfill bias)')}: quỹ chỉ tự nguyện báo cáo cho chỉ số sau khi đã có thành tích tốt, kèm theo dữ liệu quá khứ đẹp.</li>
</ul>
<p class="warn">Cả ba đều khiến alternatives trông <b>tốt hơn</b> thực tế: lợi suất cao hơn, rủi ro thấp hơn, đa dạng hóa nhiều hơn.</p>`,
    },
    {
      title: '6. Thanh khoản: khóa vốn và rút vốn',
      minutes: 4,
      html: `
<p>Quỹ mở như hedge fund cho phép rút vốn, nhưng có điều kiện để quỹ không phải bán tháo tài sản kém thanh khoản:</p>
<ul>
<li>${t('lockup', 'Thời gian khóa vốn (lockup period)')}: khoảng thời gian sau khi góp vốn mà LP không được rút, hoặc rút phải chịu phí rất cao (hard lockup và soft lockup).</li>
<li>${t('notice', 'Thời gian báo trước (notice period)')}: LP phải báo trước bao lâu (ví dụ 30-90 ngày) để quỹ chuẩn bị tiền.</li>
<li>${t('redfee', 'Phí rút vốn (redemption fee)')}: phí khi rút, thường trả lại cho quỹ để bù chi phí cho các LP ở lại.</li>
<li>${t('gate', 'Cổng rút vốn (gate)')}: giới hạn tổng số tiền được rút mỗi kỳ (ví dụ 10-25% NAV).</li>
</ul>
<div class="example"><div class="ex-h">Ví dụ 6.1</div>
<p>LP rút 5 triệu USD trong thời gian soft lockup, phí rút vốn 2%. LP thực nhận bao nhiêu?</p>
<details><summary>Xem lời giải</summary><p>Phí = 2% × 5.000.000 = 100.000 USD. LP nhận <b>4.900.000 USD</b>. Phí này làm giảm lợi suất thực tế của LP so với lợi suất NAV công bố.</p></details></div>`,
    },
    {
      title: '7. Tính lợi suất sau phí: phí quản lý, phí thành quả, hurdle, high-water mark',
      minutes: 12,
      html: `
<p>Đề thi luôn nói rõ các quy ước. Hãy trả lời 3 câu hỏi trước khi tính:</p>
<ol>
<li>Phí quản lý tính trên giá trị <b>đầu năm</b> hay <b>cuối năm</b>?</li>
<li>Phí thành quả tính trên lợi nhuận <b>sau phí quản lý</b> (net of management fee) hay <b>độc lập</b> (trên lợi nhuận gộp)?</li>
<li>Có hurdle (hard hay soft) và high-water mark không?</li>
</ol>

<div class="example"><div class="ex-h">Ví dụ 7.1 - Cơ bản</div>
<p>Quỹ có 100 triệu USD đầu năm, lợi suất gộp 15% (cuối năm 115 trước phí). Phí quản lý 2% trên giá trị cuối năm, phí thành quả 20%. Tính lợi suất ròng nếu phí thành quả (a) tính sau phí quản lý, (b) tính độc lập.</p>
<details><summary>Xem lời giải</summary>
<p>Phí quản lý = 2% × 115 = <b>2,3</b>.<br>
(a) Phí thành quả = 20% × (115 - 2,3 - 100) = 20% × 12,7 = <b>2,54</b>. Tổng phí 4,84. Lợi suất ròng = (115 - 4,84 - 100)/100 = <b>10,16%</b>.<br>
(b) Phí thành quả = 20% × (115 - 100) = <b>3,0</b>. Tổng phí 5,3. Lợi suất ròng = <b>9,70%</b>.</p>
<p>Tính độc lập có lợi cho GP: phí thành quả được tính cả trên phần lợi nhuận đã dùng để trả phí quản lý.</p></details></div>

<div class="example"><div class="ex-h">Ví dụ 7.2 - Hurdle 8%</div>
<p>Dùng số liệu ví dụ 7.1 (a), thêm hurdle 8% tính trên lợi nhuận sau phí quản lý. So sánh hard và soft hurdle.</p>
<details><summary>Xem lời giải</summary>
<p>Lợi nhuận sau phí quản lý 12,7 &gt; hurdle 8.<br>
<b>Soft:</b> phí thành quả = 20% × 12,7 = 2,54. Lợi suất ròng <b>10,16%</b>.<br>
<b>Hard:</b> phí thành quả = 20% × (12,7 - 8) = 0,94. Lợi suất ròng = (12,7 - 0,94)/100 = <b>11,76%</b>.</p>
<p>Nếu lợi suất gộp chỉ 9%: phí quản lý 2% × 109 = 2,18, lợi nhuận còn 6,82 &lt; 8, nên <b>không có</b> phí thành quả với cả hai loại hurdle. Lợi suất ròng 6,82%.</p></details></div>

<div class="example"><div class="ex-h">Ví dụ 7.3 - High-water mark qua hai năm</div>
<p>Quỹ bắt đầu ở 100. Năm 1 lợi suất gộp -10%, năm 2 lợi suất gộp +25%. Phí quản lý 2% trên giá trị cuối năm, phí thành quả 20% sau phí quản lý, có high-water mark (100).</p>
<details><summary>Xem lời giải</summary>
<p><b>Năm 1:</b> 100 × 0,9 = 90; phí quản lý 1,8; NAV cuối năm <b>88,2</b>. Không có phí thành quả. High-water mark vẫn là 100.<br>
<b>Năm 2:</b> 88,2 × 1,25 = 110,25; phí quản lý 2,205; còn 108,045. Phí thành quả chỉ tính trên phần vượt 100: 20% × 8,045 = <b>1,609</b>. NAV cuối năm <b>106,436</b>.<br>
Lợi suất ròng năm 2 của LP = 106,436 / 88,2 - 1 = <b>20,68%</b>.</p>
<p>Nếu <b>không có</b> high-water mark: phí thành quả = 20% × (108,045 - 88,2) = 3,969, và LP phải trả phí cho phần chỉ là "lấy lại khoản lỗ" năm 1. Lợi suất ròng năm 2 khi đó chỉ 18,00%.</p></details></div>

<h4>Thử ngay: máy tính phí hedge fund</h4>
<div class="widget" data-widget="feeCalc"></div>
<p class="tip">Quy ước của công cụ: vốn đầu năm 100, phí quản lý tính trên giá trị cuối năm trước phí, phí thành quả tính trên lợi nhuận sau phí quản lý, hurdle so với lợi nhuận sau phí quản lý.</p>`,
    },
    {
      title: '8. Private equity: waterfall, catch-up và clawback',
      minutes: 9,
      html: `
<p>Trong private equity, phí thành quả (${t('carry', 'carried interest')}) được chia theo một ${t('waterfall', 'waterfall')}: thứ tự ưu tiên khi chia tiền thoái vốn.</p>
<h4>Waterfall European (whole of fund) với full catch-up</h4>
<div class="formula">① Trả lại toàn bộ vốn góp cho LP → ② Trả ${t('pref', 'preferred return')} (hurdle) cho LP → ③ ${t('catchup', 'Catch-up')}: 100% cho GP đến khi GP có 20% lợi nhuận đã chia → ④ Phần còn lại chia 80/20</div>
<div class="example"><div class="ex-h">Ví dụ 8.1</div>
<p>LP góp 100. Sau 3 năm quỹ thoái vốn, thu về 160 (lợi nhuận 60). Hurdle 8%/năm ghép lãi, carry 20%, full catch-up. Chia tiền thế nào?</p>
<details><summary>Xem lời giải</summary>
<p>① Trả vốn: LP nhận 100.<br>
② Preferred return: 100 × (1,08<sup>3</sup> - 1) = <b>25,97</b> cho LP.<br>
③ Catch-up: GP nhận X sao cho X = 20% × (25,97 + X), tức X = 25,97 / 4 = <b>6,49</b>.<br>
④ Còn lại 160 - 100 - 25,97 - 6,49 = 27,54: LP nhận 80% = 22,03, GP nhận 20% = 5,51.</p>
<p>Tổng GP = 6,49 + 5,51 = <b>12,0</b> = đúng 20% × 60. LP nhận lợi nhuận 48. <b>Không có catch-up</b> (hard hurdle), GP chỉ nhận 20% × (60 - 25,97) = 6,81.</p></details></div>

<h4>European và American: thời điểm nhận carry</h4>
<div class="example"><div class="ex-h">Ví dụ 8.2</div>
<p>Quỹ đầu tư 50 vào thương vụ A và 50 vào thương vụ B. Năm 2 bán A được 80 (lời 30). Năm 4 bán B được 30 (lỗ 20). Carry 20%, bỏ qua hurdle.</p>
<details><summary>Xem lời giải</summary>
<p><b>American (deal by deal):</b> năm 2 GP nhận ngay 20% × 30 = <b>6</b>. Năm 4 cả quỹ chỉ lời 110 - 100 = 10, GP chỉ xứng đáng 20% × 10 = 2. Nhờ ${t('clawback', 'clawback')}, LP đòi lại <b>4</b>.<br>
<b>European (whole of fund):</b> LP nhận lại đủ 100 vốn trước. GP chỉ nhận carry trên tổng lợi nhuận 10 khi kết thúc: <b>2</b>. Không cần clawback.</p></details></div>
<p class="warn">American waterfall cho GP nhận tiền <b>sớm hơn</b>, nên có lợi cho GP; clawback là "lưới an toàn" cho LP, nhưng đòi lại tiền đã chi cho GP (và đã nộp thuế) trên thực tế không dễ. Một số quỹ giữ lại một phần carry trong tài khoản ký quỹ (escrow) để bảo đảm.</p>`,
    },
    {
      title: '9. Tóm tắt và bẫy thường gặp',
      minutes: 4,
      html: `
<table class="plain"><thead><tr><th>Tình huống</th><th>Nhớ</th></tr></thead><tbody>
<tr><td>J-curve</td><td>Lợi suất đầu đời quỹ âm do phí và chi phí trước khi tài sản sinh lời</td></tr>
<tr><td>IRR và MOIC</td><td>IRR tính thời điểm (money-weighted); MOIC bỏ qua thời gian</td></tr>
<tr><td>Đòn bẩy</td><td>r<sub>L</sub> = [r(V<sub>c</sub> + V<sub>b</sub>) - V<sub>b</sub>r<sub>b</sub>] / V<sub>c</sub>; nhớ trừ lãi vay</td></tr>
<tr><td>Level 3</td><td>Đầu vào không quan sát được, mark to model</td></tr>
<tr><td>Làm mượt, survivorship, backfill</td><td>Đều làm alternatives trông tốt hơn thực tế</td></tr>
<tr><td>Phí thành quả "net of" và "independent"</td><td>Net: trừ phí quản lý trước rồi mới tính. Independent: tính trên lợi nhuận gộp, có lợi cho GP</td></tr>
<tr><td>Hard và soft hurdle</td><td>Hard: phí trên phần vượt. Soft: phí trên toàn bộ khi đã vượt</td></tr>
<tr><td>High-water mark</td><td>Phí chỉ trên phần vượt đỉnh NAV cũ, không trên phần lấy lại lỗ</td></tr>
<tr><td>Full catch-up</td><td>Cuối cùng GP nhận đúng 20% tổng lợi nhuận</td></tr>
<tr><td>Waterfall</td><td>American: carry từng thương vụ, cần clawback. European: trả đủ vốn LP trước</td></tr>
</tbody></table>
<p>Tiếp theo: tab <b>Luyện tập</b> - 10 câu, nhiều câu tính phí.</p>`,
    },
  ];

  const glossary = {
    commitph: ['Capital commitment phase', 'Giai đoạn cam kết vốn', 'LP cam kết vốn, GP tìm thương vụ và gọi vốn dần.'],
    deployph: ['Capital deployment phase', 'Giai đoạn triển khai vốn', 'Vốn được đầu tư và GP gia tăng giá trị tài sản.'],
    distribph: ['Capital distribution phase', 'Giai đoạn phân phối', 'Thoái vốn và trả tiền về cho LP.'],
    jcurve: ['J-curve', 'Đường cong J', 'Lợi suất lũy kế âm những năm đầu (phí, chi phí) rồi tăng dần khi thoái vốn.'],
    moic: ['Multiple of invested capital (MOIC)', 'Bội số vốn đầu tư', '(Giá trị đã nhận + giá trị còn lại) / vốn đã góp; không tính đến thời gian.'],
    irr: ['Internal rate of return (IRR)', 'Tỷ suất hoàn vốn nội bộ', 'Lãi suất làm NPV các dòng tiền bằng 0; là lợi suất theo tiền (money-weighted).'],
    sharpe: ['Sharpe ratio', 'Tỷ số Sharpe', 'Lợi suất vượt phi rủi ro chia độ lệch chuẩn; dễ bị thổi phồng với alternatives.'],
    sortino: ['Sortino ratio', 'Tỷ số Sortino', 'Lợi suất vượt chia độ lệch chuẩn phía dưới; chỉ phạt biến động xấu.'],
    fvh: ['Fair value hierarchy', 'Thứ bậc giá trị hợp lý', 'Level 1 giá niêm yết, Level 2 đầu vào quan sát được, Level 3 đầu vào không quan sát được.'],
    mtm: ['Mark to model', 'Định giá theo mô hình', 'Định giá bằng mô hình và giả định khi không có giá thị trường.'],
    smooth: ['Return smoothing', 'Làm mượt lợi suất', 'Định giá thẩm định thưa và trễ làm biến động, tương quan báo cáo thấp hơn thực tế.'],
    survivor: ['Survivorship bias', 'Sai lệch sống sót', 'Quỹ thất bại bị loại khỏi dữ liệu, làm lợi suất trung bình bị đẩy lên.'],
    backfill: ['Backfill bias', 'Sai lệch điền ngược', 'Quỹ chỉ đưa dữ liệu quá khứ vào chỉ số khi thành tích đã tốt.'],
    lockup: ['Lockup period', 'Thời gian khóa vốn', 'Khoảng thời gian LP không được rút vốn hoặc rút phải chịu phí cao.'],
    notice: ['Notice period', 'Thời gian báo trước', 'Thời gian LP phải báo trước khi rút để quỹ chuẩn bị tiền.'],
    redfee: ['Redemption fee', 'Phí rút vốn', 'Phí LP trả khi rút vốn, thường để bù chi phí cho LP ở lại.'],
    gate: ['Gate', 'Cổng rút vốn', 'Giới hạn tổng số tiền được rút khỏi quỹ trong một kỳ.'],
    carry: ['Carried interest', 'Lợi nhuận chia cho GP', 'Phí thành quả trong private equity, thường 20% lợi nhuận.'],
    waterfall: ['Distribution waterfall', 'Thứ tự phân phối', 'Quy tắc chia tiền thoái vốn; European (cả quỹ) hoặc American (từng thương vụ).'],
    pref: ['Preferred return', 'Lợi suất ưu tiên', 'Hurdle trong PE: LP nhận mức lợi suất này trước khi GP nhận carry.'],
    catchup: ['Catch-up clause', 'Điều khoản bắt kịp', 'Sau preferred return, GP nhận phần lớn (đến 100%) lợi nhuận đến khi đạt đủ tỷ lệ carry.'],
    clawback: ['Clawback provision', 'Điều khoản thu hồi', 'LP đòi lại phần carry GP đã nhận vượt mức xứng đáng trên toàn quỹ.'],
  };

  const practice = [
    { q: 'Lợi suất lũy kế của một quỹ private equity thường âm trong những năm đầu chủ yếu vì:', choices: ['Phí quản lý và chi phí lập quỹ phát sinh trước khi các khoản đầu tư sinh lời', 'GP thoái vốn sớm các thương vụ thua lỗ', 'LP rút vốn nhiều trong thời gian khóa vốn'], answer: 0, explain: 'Đó là J-curve: giai đoạn cam kết và triển khai vốn chịu phí, chi phí mà chưa có lợi nhuận. Việc GP thoái vốn sớm thương vụ lỗ hay LP rút vốn đều không phải nguyên nhân điển hình; LP không được rút vốn từ quỹ PE đóng.' },
    { q: 'Cổ phần của một công ty chưa niêm yết, định giá bằng mô hình DCF với giả định của nhà quản lý, được xếp vào cấp nào trong thứ bậc giá trị hợp lý?', choices: ['Level 1', 'Level 3', 'Level 2'], answer: 1, explain: 'Đầu vào không quan sát được, dựa trên giả định của nhà quản lý: Level 3 (mark to model). Level 1 cần giá niêm yết của chính tài sản; Level 2 cần đầu vào quan sát được trên thị trường.' },
    { q: 'Lợi suất bị làm mượt do định giá thẩm định thưa và trễ nhiều khả năng dẫn đến:', choices: ['Độ lệch chuẩn đo được cao hơn thực tế', 'Tương quan với cổ phiếu niêm yết cao hơn thực tế', 'Tỷ số Sharpe báo cáo cao hơn thực tế'], answer: 2, explain: 'Làm mượt khiến độ lệch chuẩn và tương quan đo được thấp hơn thực tế, nên Sharpe (chia cho σ) bị thổi phồng. Hai lựa chọn nói độ lệch chuẩn hoặc tương quan cao hơn thực tế đều ngược chiều.' },
    { q: 'LP góp 100 ở t = 0, nhận 30 ở năm 2 và 120 ở năm 4. IRR của LP gần nhất với:', choices: ['12,50%', '12,06%', '10,67%'], answer: 1, explain: 'CF0 = -100, C01 = 0, C02 = 30, C03 = 0, C04 = 120, CPT IRR = 12,06%. Lựa chọn 12,50% là lợi suất đơn bình quân (50%/4). Lựa chọn 10,67% là 1,5^(1/4) - 1, coi như toàn bộ 150 nhận ở năm 4 nên bỏ qua việc 30 về sớm.' },
    { q: 'Quỹ có 100 vốn tự có, vay thêm 60 với lãi suất 4%, đầu tư toàn bộ. Tài sản sinh lời 8%. Lợi suất trên vốn tự có gần nhất với:', choices: ['10,4%', '12,8%', '5,6%'], answer: 0, explain: 'r_L = (8% × 160 - 60 × 4%)/100 = (12,8 - 2,4)/100 = 10,4%. Lựa chọn 12,8% quên trừ lãi vay. Lựa chọn 5,6% chỉ tính lợi suất trên 100 vốn tự có rồi trừ lãi vay.' },
    { q: 'Hedge fund có 200 triệu USD đầu năm, lợi suất gộp 20%. Phí quản lý 2% trên giá trị cuối năm (trước phí), phí thành quả 20% tính trên lợi nhuận sau phí quản lý. Lợi suất ròng của nhà đầu tư gần nhất với:', choices: ['13,60%', '16,00%', '14,08%'], answer: 2, explain: 'Cuối năm 240; phí quản lý 4,8; phí thành quả 20% × (240 - 4,8 - 200) = 7,04; lợi suất ròng = (240 - 4,8 - 7,04 - 200)/200 = 14,08%. Lựa chọn 13,60% tính phí thành quả độc lập (20% × 40). Lựa chọn 16,00% quên phí quản lý.' },
    { q: 'Quỹ 100 triệu USD, lợi suất gộp 15%, phí quản lý 1,5% trên giá trị đầu năm, phí thành quả 20% trên lợi nhuận sau phí quản lý, hard hurdle 6%. Lợi suất ròng gần nhất với:', choices: ['12,0%', '10,8%', '11,7%'], answer: 0, explain: 'Lợi nhuận sau phí quản lý = 15 - 1,5 = 13,5. Phí thành quả = 20% × (13,5 - 6) = 1,5. Ròng = 12,0%. Lựa chọn 10,8% là soft hurdle (20% × 13,5). Lựa chọn 11,7% tính phần vượt hurdle trên lợi nhuận gộp (20% × 9).' },
    { q: 'Đỉnh NAV trước đây của quỹ là 110. Đầu năm NAV là 100, cuối năm NAV sau phí quản lý là 115. Phí thành quả 20%, có high-water mark. Phí thành quả năm nay là:', choices: ['3', '1', '0'], answer: 1, explain: 'Chỉ tính trên phần vượt high-water mark: 20% × (115 - 110) = 1. Lựa chọn 3 tính trên toàn bộ lợi nhuận năm (20% × 15), bỏ qua high-water mark. Lựa chọn 0 sai vì NAV đã vượt đỉnh cũ.' },
    { q: 'Quỹ PE dùng American waterfall, carry 20%, có clawback, bỏ qua hurdle. Thương vụ 1: đầu tư 100, bán 150. Thương vụ 2: đầu tư 100, bán 70. Khi quỹ kết thúc, GP phải hoàn trả bao nhiêu?', choices: ['10', '4', '6'], answer: 2, explain: 'GP đã nhận 20% × 50 = 10 từ thương vụ 1. Tổng lợi nhuận quỹ = 220 - 200 = 20, GP chỉ xứng đáng 4. Clawback = 10 - 4 = 6. Lựa chọn 10 là carry đã nhận; lựa chọn 4 là carry xứng đáng.' },
    { q: 'LP góp 100, quỹ thu về 130. Preferred return 8 (tổng cộng), carry 20%, full catch-up. Tổng số tiền GP nhận gần nhất với:', choices: ['6,0', '4,4', '1,6'], answer: 0, explain: 'Trả vốn 100, pref 8; catch-up X = 8/4 = 2; còn 20 chia 80/20, GP nhận 4. Tổng GP = 6 = 20% × 30. Lựa chọn 4,4 là không có catch-up: 20% × (30 - 8). Lựa chọn 1,6 là 20% × 8.' },
  ];

  // Máy tính phí hedge fund: vốn đầu năm 100.
  const widgets = {
    feeCalc(el) {
      el.innerHTML = `
        <div class="w-row"><label>Lợi suất gộp: <b data-o="g">15%</b><input type="range" min="-20" max="40" step="1" value="15" data-i="g"></label>
        <label>Phí quản lý: <b data-o="m">2%</b><input type="range" min="0" max="3" step="0.25" value="2" data-i="m"></label>
        <label>Phí thành quả: <b data-o="p">20%</b><input type="range" min="0" max="30" step="1" value="20" data-i="p"></label>
        <label>Hurdle: <b data-o="h">8%</b><input type="range" min="0" max="12" step="0.5" value="8" data-i="h"></label>
        <label>Loại hurdle: <select data-i="k"><option value="hard">Hard</option><option value="soft">Soft</option></select></label></div>
        <div class="w-out"><div class="w-price" data-o="net"></div><div class="w-bar"><span data-o="bar"></span><i></i></div><div class="w-note" data-o="note"></div></div>`;
      const q = s => el.querySelector(s);
      const f = x => x.toFixed(2).replace('.', ',');
      const upd = () => {
        const g = +q('[data-i="g"]').value, m = +q('[data-i="m"]').value, p = +q('[data-i="p"]').value, h = +q('[data-i="h"]').value;
        const hard = q('[data-i="k"]').value === 'hard';
        const end = 100 + g, mf = (m / 100) * end, prof = end - mf - 100;
        let inc = 0;
        if (prof > h && prof > 0) inc = (p / 100) * (hard ? prof - h : prof);
        const net = prof - inc;
        q('[data-o="g"]').textContent = `${g}%`;
        q('[data-o="m"]').textContent = `${m}%`;
        q('[data-o="p"]').textContent = `${p}%`;
        q('[data-o="h"]').textContent = `${h}%`;
        q('[data-o="net"]').textContent = `Lợi suất ròng = ${f(net)}%`;
        q('[data-o="bar"]').style.width = `${Math.max(0, Math.min(100, (net + 20) * 100 / 60))}%`;
        q('[data-o="note"]').textContent = `Phí quản lý ${f(mf)}; lợi nhuận sau phí quản lý ${f(prof)}; phí thành quả ${f(inc)}; tổng phí ${f(mf + inc)}.${prof <= h ? ' Chưa vượt hurdle nên không có phí thành quả.' : ''}`;
      };
      el.addEventListener('input', upd);
      el.addEventListener('change', upd);
      upd();
    },
  };

  window.LESSONS['AI-02'] = {
    moduleId: 'AI-02',
    calculator: 'BA II Plus',
    warmup: [
      'Ôn AI-01: hard hurdle và soft hurdle khác nhau thế nào? High-water mark bảo vệ ai?',
      'Ôn Quant: lợi suất theo tiền (money-weighted) và theo thời gian (time-weighted) khác nhau ở điểm nào?',
      'Một quỹ báo cáo lợi suất 15% mỗi năm với độ biến động chỉ 4%. Bạn sẽ hỏi lại câu gì trước khi tin?',
    ],
    sections,
    glossary,
    practice,
    widgets,
    slides: [],
    wrapup: [
      'Viết lại 3 câu hỏi cần trả lời trước khi tính phí hedge fund (phí trên giá trị nào, net hay independent, hurdle và high-water mark).',
      'Tự làm lại ví dụ catch-up 8.1 mà không nhìn lời giải. GP có nhận đúng 20% tổng lợi nhuận không?',
      'Giải thích bằng lời: vì sao American waterfall cần clawback còn European thì thường không?',
    ],
  };
}());
