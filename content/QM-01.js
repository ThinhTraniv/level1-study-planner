// Bài giảng QM-01 - Returns of Financial Assets and Instruments (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t, frac, keys, timeline, pages } = window.CFAH;

  const sections = [
    {
      title: '1. Bức tranh lớn: return là phần thưởng cho cái gì?',
      minutes: 5,
      html: `
<p>Ba module đầu của Quant đều xoay quanh một chữ: <b>return</b>. Module này trả lời câu hỏi <b>"return đến từ đâu và nên đòi bao nhiêu?"</b>. Hai module sau trả lời <b>"tính return thế nào"</b> (QM-02) và <b>"so sánh return với ai"</b> (QM-03).</p>
<div class="key">Nhà đầu tư bỏ tiền hôm nay để nhận tiền trong tương lai. Họ đòi được bù cho 3 thứ:<br>
1. <b>Thời gian</b>: hoãn tiêu dùng → ${t('rfreal', 'lãi suất phi rủi ro thực (real risk-free rate)')}.<br>
2. <b>Lạm phát</b>: tiền mất sức mua → ${t('inflation', 'lạm phát kỳ vọng (expected inflation)')}.<br>
3. <b>Rủi ro</b>: có thể không nhận đủ, khó bán, kỳ hạn dài → các ${t('riskprem', 'phần bù rủi ro (risk premia)')}.</div>
<p>Học xong module này, bạn cần làm được 2 việc ứng với 2 LOS:</p>
<ol>
  <li><b>LOS 1 - Mô tả, so sánh, diễn giải return</b>: return gồm những phần nào (thu nhập và lãi vốn), return đã thực hiện khác return kỳ vọng và return yêu cầu ra sao, lãi đơn khác lãi kép thế nào.</li>
  <li><b>LOS 2 - Lợi suất yêu cầu, lãi suất phi rủi ro, phần bù rủi ro và lạm phát</b>: dựng lãi suất danh nghĩa từ các "viên gạch", phân biệt lãi suất thực và danh nghĩa.</li>
</ol>
<p class="tip"><b>Cách học module này:</b> ít công thức, nhiều khái niệm. Câu hỏi thi thường là "phần bù nào giải thích chênh lệch này?" hoặc "lãi suất thực là bao nhiêu?". Hãy hiểu từng viên gạch thay vì học thuộc.</p>`,
    },
    {
      title: '2. Lãi suất: ba cách hiểu, lãi đơn và lãi kép',
      minutes: 10,
      html: `
<p>Cùng một con số, ví dụ 6%/năm, có thể được hiểu theo 3 cách. Đề thi hay hỏi "cách hiểu nào phù hợp nhất trong tình huống này".</p>
<table class="plain"><thead><tr><th>Cách hiểu</th><th>Ý nghĩa</th><th>Khi nào dùng</th></tr></thead><tbody>
<tr><td>${t('required', 'Lợi suất yêu cầu (required rate of return)')}</td><td>Mức return tối thiểu nhà đầu tư cần để chấp nhận bỏ tiền</td><td>Ra quyết định có đầu tư hay không</td></tr>
<tr><td>${t('discount', 'Lãi suất chiết khấu (discount rate)')}</td><td>Lãi suất dùng để đưa dòng tiền tương lai về hiện tại</td><td>Định giá tài sản (QM-04)</td></tr>
<tr><td>${t('opportunity', 'Chi phí cơ hội (opportunity cost)')}</td><td>Phần return bỏ lỡ khi chọn tiêu dùng hôm nay thay vì đầu tư</td><td>So sánh hai lựa chọn dùng tiền</td></tr>
</tbody></table>

<h4>Lãi đơn và lãi kép</h4>
<p>${t('simple', 'Lãi đơn (simple interest)')} chỉ tính lãi trên <b>vốn gốc</b>. ${t('compound', 'Lãi kép (compound interest)')} tính lãi trên <b>cả gốc lẫn lãi đã nhận</b> (lãi được tái đầu tư).</p>
<div class="formula">Lãi đơn: FV = PV × (1 + r × N) &nbsp;&nbsp;&nbsp;&nbsp; Lãi kép: FV = PV × (1 + r)<sup>N</sup></div>
${timeline(3, [{ t: 0, label: 'PV = 100', up: true, cls: 'pv' }, { t: 1, label: '110 | 110' }, { t: 2, label: '120 | 121' }, { t: 3, label: '130 | 133,1' }], 'Lãi 10%/năm: số bên trái là lãi đơn, bên phải là lãi kép. Chênh lệch là "lãi trên lãi".')}

<div class="example"><div class="ex-h">Ví dụ 2.1</div>
<p>Gửi 10.000 USD, lãi suất 6%/năm trong 5 năm. Giá trị cuối kỳ theo lãi đơn và lãi kép là bao nhiêu?</p>
<details><summary>Xem lời giải</summary>
<p>Lãi đơn: 10.000 × (1 + 0,06 × 5) = <b>13.000</b>.<br>
Lãi kép: 10.000 × 1,06<sup>5</sup> = <b>13.382,26</b>.<br>
Chênh lệch 382,26 chính là phần lãi phát sinh trên lãi đã tái đầu tư. Thời gian càng dài, khoảng cách này càng lớn.</p>
${keys([['Lãi kép bằng TVM', '[2ND] [FV] 5 [N] 6 [I/Y] 10000 [+/-] [PV] 0 [PMT] [CPT] [FV]', 'FV = 13,382.2558']])}</details></div>
<p class="warn"><b>Bẫy:</b> đề ghi "simple interest" thì <b>không</b> dùng phím TVM (máy luôn tính lãi kép). Tính tay: gốc × (1 + r × N).</p>`,
    },
    {
      title: '3. Return gồm những gì? Thực hiện, kỳ vọng và yêu cầu',
      minutes: 10,
      html: `
<p>Return của một kỳ nắm giữ (gọi là ${t('hpr', 'holding period return (HPR)')}) đến từ hai nguồn:</p>
<div class="formula">Return = ${frac('P<sub>1</sub> - P<sub>0</sub>', 'P<sub>0</sub>')} + ${frac('D<sub>1</sub>', 'P<sub>0</sub>')} = lãi/lỗ vốn + thu nhập</div>
<ul>
<li>${t('capgain', 'Lãi vốn (capital gain)')}: phần thay đổi giá. Có thể âm (lỗ vốn).</li>
<li>${t('income', 'Thu nhập (income yield)')}: cổ tức của cổ phiếu, coupon của trái phiếu, tiền thuê của bất động sản. Không bao giờ âm.</li>
</ul>
<div class="example"><div class="ex-h">Ví dụ 3.1</div>
<p>Mua cổ phiếu giá 40, nhận cổ tức 1,2 trong năm, cuối năm bán giá 43. Tách return thành hai phần.</p>
<details><summary>Xem lời giải</summary>
<p>Thu nhập: 1,2 / 40 = <b>3%</b>. Lãi vốn: (43 - 40) / 40 = <b>7,5%</b>. Tổng return = <b>10,5%</b>.<br>
Nhà đầu tư cần dòng tiền đều đặn (ví dụ người nghỉ hưu) quan tâm phần thu nhập. Nhà đầu tư tăng trưởng quan tâm phần lãi vốn. Cách tính chi tiết HPR nhiều kỳ học ở QM-02.</p></details></div>

<h4>Ba "phiên bản" của return</h4>
<table class="plain"><thead><tr><th>Loại</th><th>Câu hỏi</th><th>Đặc điểm</th></tr></thead><tbody>
<tr><td>${t('realized', 'Return đã thực hiện (realized, ex post)')}</td><td>Đã kiếm được bao nhiêu?</td><td>Nhìn về quá khứ, đo được chính xác</td></tr>
<tr><td>${t('expected', 'Return kỳ vọng (expected, ex ante)')}</td><td>Tôi dự báo sẽ kiếm được bao nhiêu?</td><td>Nhìn về tương lai, phụ thuộc dự báo của từng người</td></tr>
<tr><td>Return yêu cầu (required)</td><td>Tôi cần ít nhất bao nhiêu để chấp nhận rủi ro này?</td><td>Phụ thuộc rủi ro của tài sản, xây từ các viên gạch ở phần 4, 5</td></tr>
</tbody></table>
<div class="key">So sánh return kỳ vọng với return yêu cầu:<br>
Kỳ vọng &gt; yêu cầu → tài sản đang <b>rẻ</b> (undervalued), nên mua.<br>
Kỳ vọng &lt; yêu cầu → tài sản đang <b>đắt</b> (overvalued), nên tránh hoặc bán.<br>
Kỳ vọng = yêu cầu → định giá hợp lý.</div>
<p class="warn"><b>Bẫy:</b> return đã thực hiện cao trong quá khứ <b>không</b> có nghĩa return kỳ vọng cao. Một cổ phiếu vừa tăng 50% có thể đã quá đắt, khiến return kỳ vọng từ đây trở đi thấp hơn.</p>`,
    },
    {
      title: '4. Lãi suất phi rủi ro thực, danh nghĩa và lạm phát',
      minutes: 12,
      html: `
<p>${t('rfreal', 'Lãi suất phi rủi ro thực')} là phần thưởng thuần túy cho việc <b>hoãn tiêu dùng</b> trong một thế giới không có lạm phát và không có rủi ro. Nó phản ánh sở thích thời gian của xã hội, không quan sát trực tiếp được.</p>
<p>Trên thị trường, ta chỉ thấy ${t('rfnominal', 'lãi suất phi rủi ro danh nghĩa (nominal risk-free rate)')}, ví dụ lợi suất tín phiếu kho bạc ngắn hạn. Nó đã bao gồm bù đắp lạm phát kỳ vọng.</p>
<div class="formula">Chính xác: (1 + r<sub>danh nghĩa</sub>) = (1 + r<sub>thực</sub>) × (1 + π) &nbsp;&nbsp;&nbsp;&nbsp; Gần đúng: r<sub>danh nghĩa</sub> ≈ r<sub>thực</sub> + π</div>
<p>Quan hệ này gọi là ${t('fisher', 'hiệu ứng Fisher (Fisher relation)')}. π là lạm phát <b>kỳ vọng</b>, không phải lạm phát đã xảy ra.</p>

<div class="example"><div class="ex-h">Ví dụ 4.1</div>
<p>Lãi suất phi rủi ro thực là 1,5%, lạm phát kỳ vọng 3,2%. Lãi suất phi rủi ro danh nghĩa là bao nhiêu?</p>
<details><summary>Xem lời giải</summary>
<p>Chính xác: 1,015 × 1,032 - 1 = <b>4,748%</b>. Gần đúng: 1,5% + 3,2% = 4,7%.<br>
Chênh lệch 0,048% chính là tích 1,5% × 3,2%. Khi lạm phát thấp, hai cách cho kết quả gần nhau; khi lạm phát cao (ví dụ 20%), phải dùng công thức nhân.</p></details></div>

<div class="example"><div class="ex-h">Ví dụ 4.2 - Làm ngược</div>
<p>Tín phiếu kho bạc 1 năm có lợi suất 5%, lạm phát kỳ vọng 3,5%. Lãi suất thực là bao nhiêu?</p>
<details><summary>Xem lời giải</summary>
<p>r<sub>thực</sub> = 1,05 / 1,035 - 1 = <b>1,449%</b> (gần đúng: 1,5%). Nhớ là <b>chia</b>, không phải trừ, khi đề yêu cầu chính xác.</p></details></div>

<div class="key">Lãi suất thực đo <b>sức mua</b> tăng thêm. Nếu gửi tiết kiệm 5% mà lạm phát 6%, bạn có nhiều tiền hơn nhưng mua được ít hàng hơn: lãi suất thực âm.</div>
<p class="tip"><b>Vì sao gọi là "phi rủi ro"?</b> Tín phiếu kho bạc ngắn hạn của chính phủ có uy tín gần như không có rủi ro vỡ nợ, thanh khoản rất cao và kỳ hạn ngắn, nên lợi suất của nó chỉ gồm r<sub>thực</sub> và lạm phát kỳ vọng.</p>`,
    },
    {
      title: '5. Phần bù rủi ro: dựng lãi suất từ các viên gạch',
      minutes: 13,
      html: `
<p>Mọi tài sản rủi ro hơn tín phiếu kho bạc phải trả thêm ${t('riskprem', 'phần bù rủi ro')}. Với công cụ nợ, có 3 loại phần bù chính:</p>
<div class="formula">Lãi suất danh nghĩa ≈ r<sub>thực</sub> + π + phần bù vỡ nợ + phần bù thanh khoản + phần bù kỳ hạn</div>
<table class="plain"><thead><tr><th>Phần bù</th><th>Bù cho rủi ro gì</th><th>Lớn hơn khi</th></tr></thead><tbody>
<tr><td>${t('default', 'Phần bù vỡ nợ (default risk premium)')}</td><td>Người vay không trả đủ gốc lãi đúng hạn</td><td>Xếp hạng tín nhiệm thấp, đòn bẩy cao</td></tr>
<tr><td>${t('liquidity', 'Phần bù thanh khoản (liquidity premium)')}</td><td>Khó bán nhanh mà không phải giảm giá nhiều</td><td>Ít giao dịch, quy mô phát hành nhỏ</td></tr>
<tr><td>${t('maturity', 'Phần bù kỳ hạn (maturity premium)')}</td><td>Giá biến động mạnh hơn khi lãi suất thay đổi, do kỳ hạn dài</td><td>Kỳ hạn càng dài</td></tr>
</tbody></table>

<h4>Thử ngay: kéo các viên gạch</h4>
<div class="widget" data-widget="requiredRate"></div>

<div class="example"><div class="ex-h">Ví dụ 5.1</div>
<p>r<sub>thực</sub> = 1,5%, lạm phát kỳ vọng 2,5%. Trái phiếu doanh nghiệp 10 năm có phần bù vỡ nợ 1,2%, thanh khoản 0,5%, kỳ hạn 0,8%. Trái phiếu chính phủ 10 năm chỉ có phần bù kỳ hạn 0,8%. Ước tính lợi suất của từng loại và chênh lệch giữa chúng.</p>
<details><summary>Xem lời giải</summary>
<p>Doanh nghiệp: 1,5 + 2,5 + 1,2 + 0,5 + 0,8 = <b>6,5%</b>.<br>
Chính phủ 10 năm: 1,5 + 2,5 + 0,8 = <b>4,8%</b>.<br>
Chênh lệch (${t('spread', 'spread')}) = <b>1,7%</b> = phần bù vỡ nợ + thanh khoản. Phần bù kỳ hạn bị triệt tiêu vì hai trái phiếu cùng kỳ hạn.</p></details></div>

<p class="warn"><b>Bẫy hay gặp:</b> so sánh hai trái phiếu <b>cùng tổ chức phát hành, khác kỳ hạn</b> → chênh lệch chủ yếu là phần bù kỳ hạn. So sánh hai trái phiếu <b>cùng kỳ hạn, khác tổ chức phát hành</b> → chênh lệch là phần bù vỡ nợ và thanh khoản. Xác định viên gạch nào <b>khác nhau</b> giữa hai tài sản.</p>

<h4>Với cổ phiếu</h4>
<p>Cổ phiếu không có ngày đáo hạn và cổ tức không được cam kết, nên rủi ro được gộp thành ${t('erp', 'phần bù rủi ro vốn cổ phần (equity risk premium)')}:</p>
<div class="formula">Lợi suất yêu cầu của cổ phiếu ≈ lãi suất phi rủi ro danh nghĩa + phần bù rủi ro vốn cổ phần</div>
<p>Cổ phiếu thường có lợi suất yêu cầu cao hơn trái phiếu của cùng công ty vì cổ đông chỉ được nhận phần còn lại sau khi đã trả hết cho chủ nợ.</p>`,
    },
    {
      title: '6. So sánh và diễn giải return giữa các tài sản',
      minutes: 14,
      html: `
<p>Khi đặt hai mức return cạnh nhau, hãy kiểm tra 4 điều trước khi kết luận "cái nào tốt hơn":</p>
<ol>
<li><b>Cùng khoảng thời gian chưa?</b> 3% trong 3 tháng khác 3% trong 1 năm. Phải đưa về cùng chu kỳ, thường là một năm (cách làm ở QM-02).</li>
<li><b>Cùng loại return chưa?</b> Trước hay sau phí, trước hay sau thuế, danh nghĩa hay thực (QM-02).</li>
<li><b>Cùng mức rủi ro chưa?</b> Return cao hơn có thể chỉ là phần thưởng cho rủi ro cao hơn. Phải so với lợi suất yêu cầu tương ứng.</li>
<li><b>Có điểm chuẩn chưa?</b> Một quỹ cổ phiếu lãi 12% có tốt không? Tùy chỉ số thị trường cùng kỳ tăng bao nhiêu (QM-03).</li>
</ol>

<h4>Đánh đổi rủi ro và return</h4>
<p>Xếp các tài sản theo rủi ro từ thấp đến cao, return yêu cầu cũng tăng dần theo cùng thứ tự:</p>
<table class="plain"><thead><tr><th>Tài sản</th><th>Viên gạch chính trong return yêu cầu</th></tr></thead><tbody>
<tr><td>Tín phiếu kho bạc ngắn hạn</td><td>r<sub>thực</sub> + lạm phát</td></tr>
<tr><td>Trái phiếu chính phủ dài hạn</td><td>+ phần bù kỳ hạn</td></tr>
<tr><td>Trái phiếu doanh nghiệp</td><td>+ phần bù vỡ nợ và thanh khoản</td></tr>
<tr><td>Cổ phiếu</td><td>+ phần bù rủi ro vốn cổ phần</td></tr>
</tbody></table>
<p>Về dài hạn, tài sản rủi ro hơn <b>thường</b> cho return trung bình cao hơn, nhưng biến động mạnh hơn và có những giai đoạn thua lỗ kéo dài. Return trung bình cao không bảo đảm năm nào cũng cao.</p>

<div class="example"><div class="ex-h">Ví dụ 6.1</div>
<p>Một nhà phân tích ước tính cổ phiếu X có return kỳ vọng 9%. Lãi suất phi rủi ro danh nghĩa 4%, phần bù rủi ro vốn cổ phần phù hợp cho X là 6,5%. Nên đánh giá X thế nào?</p>
<details><summary>Xem lời giải</summary>
<p>Return yêu cầu = 4% + 6,5% = <b>10,5%</b>. Return kỳ vọng 9% &lt; 10,5% → X đang <b>đắt</b> (overvalued). Dù 9% nghe có vẻ cao, nó không đủ bù cho rủi ro của X.</p></details></div>

<p class="tip"><b>Nhớ:</b> "return cao" chỉ có ý nghĩa khi đặt cạnh rủi ro và lợi suất yêu cầu. Câu hỏi thi thường cài đáp án nhiễu kiểu "chọn tài sản có return cao nhất" mà bỏ qua rủi ro.</p>`,
    },
    {
      title: '7. Tóm tắt và bẫy thường gặp',
      minutes: 6,
      html: `
<table class="plain"><thead><tr><th>Tình huống</th><th>Nhớ</th></tr></thead><tbody>
<tr><td>Ba cách hiểu lãi suất</td><td>Lợi suất yêu cầu, lãi suất chiết khấu, chi phí cơ hội</td></tr>
<tr><td>Đề ghi simple interest</td><td>FV = PV × (1 + r × N), không bấm TVM</td></tr>
<tr><td>Thành phần return</td><td>Lãi/lỗ vốn (có thể âm) + thu nhập (không âm)</td></tr>
<tr><td>Kỳ vọng so với yêu cầu</td><td>Kỳ vọng &gt; yêu cầu → rẻ; kỳ vọng &lt; yêu cầu → đắt</td></tr>
<tr><td>Lãi suất thực chính xác</td><td>(1 + danh nghĩa)/(1 + lạm phát) - 1, không phải phép trừ</td></tr>
<tr><td>Lạm phát trong công thức</td><td>Là lạm phát <b>kỳ vọng</b></td></tr>
<tr><td>Chênh lệch cùng kỳ hạn, khác nhà phát hành</td><td>Phần bù vỡ nợ + thanh khoản</td></tr>
<tr><td>Chênh lệch cùng nhà phát hành, khác kỳ hạn</td><td>Phần bù kỳ hạn</td></tr>
<tr><td>Return quá khứ cao</td><td>Không suy ra return kỳ vọng cao</td></tr>
</tbody></table>
<p>Tiếp theo: tab <b>Luyện tập</b> 8 câu. Module QM-02 sẽ dạy cách tính các loại return (HPR nhiều kỳ, trung bình, annualized, sau thuế, đòn bẩy).</p>`,
    },
  ];

  const glossary = {
    rfreal: ['Real risk-free rate', 'Lãi suất phi rủi ro thực', 'Phần thưởng thuần túy cho việc hoãn tiêu dùng, khi không có lạm phát và rủi ro.'],
    rfnominal: ['Nominal risk-free rate', 'Lãi suất phi rủi ro danh nghĩa', 'Lãi suất thực cộng lạm phát kỳ vọng; xấp xỉ bằng lợi suất tín phiếu kho bạc ngắn hạn.'],
    inflation: ['Expected inflation', 'Lạm phát kỳ vọng', 'Mức tăng giá dự kiến trong kỳ đầu tư; nhà đầu tư đòi bù để giữ sức mua.'],
    riskprem: ['Risk premium', 'Phần bù rủi ro', 'Phần return thêm so với lãi suất phi rủi ro để bù cho rủi ro của tài sản.'],
    required: ['Required rate of return', 'Lợi suất yêu cầu', 'Return tối thiểu nhà đầu tư cần để chấp nhận một khoản đầu tư với rủi ro cho trước.'],
    discount: ['Discount rate', 'Lãi suất chiết khấu', 'Lãi suất dùng để đưa dòng tiền tương lai về hiện tại.'],
    opportunity: ['Opportunity cost', 'Chi phí cơ hội', 'Giá trị của lựa chọn tốt nhất bị bỏ qua, ví dụ return bỏ lỡ khi tiêu dùng thay vì đầu tư.'],
    simple: ['Simple interest', 'Lãi đơn', 'Lãi chỉ tính trên vốn gốc, không tái đầu tư lãi.'],
    compound: ['Compound interest', 'Lãi kép', 'Lãi tính trên cả gốc và lãi đã tích lũy (lãi trên lãi).'],
    hpr: ['Holding period return (HPR)', 'Lợi suất kỳ nắm giữ', 'Return trong suốt thời gian nắm giữ = (P1 - P0 + D1)/P0.'],
    capgain: ['Capital gain / loss', 'Lãi / lỗ vốn', 'Phần return đến từ thay đổi giá tài sản.'],
    income: ['Income yield', 'Lợi suất thu nhập', 'Phần return đến từ cổ tức, coupon hoặc tiền thuê, chia cho giá đầu kỳ.'],
    realized: ['Realized (ex post) return', 'Return đã thực hiện', 'Return đã xảy ra, đo bằng dữ liệu quá khứ.'],
    expected: ['Expected (ex ante) return', 'Return kỳ vọng', 'Return dự báo cho tương lai, dựa trên ước tính của nhà đầu tư.'],
    fisher: ['Fisher relation', 'Quan hệ Fisher', '(1 + danh nghĩa) = (1 + thực)(1 + lạm phát kỳ vọng).'],
    default: ['Default risk premium', 'Phần bù vỡ nợ', 'Bù cho khả năng người vay không trả đủ gốc lãi đúng hạn.'],
    liquidity: ['Liquidity premium', 'Phần bù thanh khoản', 'Bù cho việc khó bán nhanh tài sản ở giá hợp lý.'],
    maturity: ['Maturity premium', 'Phần bù kỳ hạn', 'Bù cho việc giá công cụ nợ kỳ hạn dài nhạy hơn với thay đổi lãi suất.'],
    spread: ['Yield spread', 'Chênh lệch lợi suất', 'Hiệu số lợi suất giữa hai công cụ nợ, thường so với trái phiếu chính phủ cùng kỳ hạn.'],
    erp: ['Equity risk premium', 'Phần bù rủi ro vốn cổ phần', 'Return thêm mà nhà đầu tư đòi khi nắm cổ phiếu thay vì tài sản phi rủi ro.'],
  };

  const practice = [
    { q: 'Lãi suất phi rủi ro thực là 2%, lạm phát kỳ vọng 3%. Dùng công thức chính xác, lãi suất phi rủi ro danh nghĩa gần nhất với:', choices: ['5,06%', '5,00%', '0,98%'], answer: 0, explain: '1,02 x 1,03 - 1 = 5,06%. Lựa chọn 5,00% là cách cộng gần đúng, không phải công thức chính xác đề yêu cầu. Lựa chọn 0,98% là 1,03/1,02 - 1, nhầm chiều phép chia.' },
    { q: 'Tín phiếu kho bạc 1 năm có lợi suất 6%, lạm phát kỳ vọng 4%. Lãi suất phi rủi ro thực (chính xác) gần nhất với:', choices: ['2,00%', '10,24%', '1,92%'], answer: 2, explain: '1,06 / 1,04 - 1 = 1,92%. Lựa chọn 2,00% là phép trừ gần đúng. Lựa chọn 10,24% nhân thay vì chia.' },
    { q: 'Hai trái phiếu doanh nghiệp có cùng xếp hạng tín nhiệm và cùng kỳ hạn. Trái phiếu ít được giao dịch hơn có lợi suất cao hơn. Phần chênh lệch này chủ yếu là:', choices: ['Phần bù vỡ nợ', 'Phần bù thanh khoản', 'Phần bù kỳ hạn'], answer: 1, explain: 'Cùng tín nhiệm nên phần bù vỡ nợ như nhau; cùng kỳ hạn nên phần bù kỳ hạn như nhau. Khác biệt duy nhất là mức độ giao dịch, tức thanh khoản.' },
    { q: 'Chênh lệch lợi suất giữa trái phiếu doanh nghiệp 10 năm và trái phiếu chính phủ 10 năm phản ánh chủ yếu:', choices: ['Phần bù vỡ nợ và phần bù thanh khoản', 'Phần bù kỳ hạn và lạm phát kỳ vọng', 'Lãi suất thực và phần bù kỳ hạn'], answer: 0, explain: 'Cùng kỳ hạn và cùng nền kinh tế nên lãi suất thực, lạm phát và phần bù kỳ hạn bị triệt tiêu. Chỉ còn rủi ro vỡ nợ và thanh khoản mà trái phiếu chính phủ gần như không có.' },
    { q: 'Nhà phân tích ước tính cổ phiếu Y có return kỳ vọng 8%. Lợi suất yêu cầu của Y là 10%. Kết luận phù hợp nhất:', choices: ['Y bị định giá thấp vì return kỳ vọng dương', 'Y được định giá hợp lý vì chênh lệch nhỏ', 'Y bị định giá cao, nên tránh hoặc bán'], answer: 2, explain: 'Return kỳ vọng thấp hơn return yêu cầu nghĩa là giá hiện tại quá cao so với rủi ro. Return dương chưa đủ, phải so với mức yêu cầu.' },
    { q: 'Gửi 5.000 USD, lãi suất 7%/năm trong 4 năm. Giá trị theo lãi kép cao hơn giá trị theo lãi đơn khoảng:', choices: ['0', '153,98', '1.553,98'], answer: 1, explain: 'Lãi kép: 5.000 x 1,07^4 = 6.553,98. Lãi đơn: 5.000 x 1,28 = 6.400. Chênh lệch 153,98. Lựa chọn 1.553,98 là toàn bộ tiền lãi theo lãi kép, không phải chênh lệch.' },
    { q: 'Mua cổ phiếu giá 80, nhận cổ tức 2, cuối năm bán giá 76. Return của kỳ nắm giữ là:', choices: ['-2,50%', '-5,00%', '2,50%'], answer: 0, explain: '(76 - 80 + 2)/80 = -2,5%. Lựa chọn -5,00% quên cổ tức (chỉ tính lỗ vốn). Lựa chọn 2,50% chỉ tính phần cổ tức.' },
    { q: 'Lãi suất thực 1%, lạm phát kỳ vọng 2,5%, phần bù vỡ nợ 1,5%, phần bù thanh khoản 0,4%, phần bù kỳ hạn 0,6%. Lợi suất (gần đúng, cộng dồn) của trái phiếu này là:', choices: ['5,40%', '6,00%', '3,50%'], answer: 1, explain: '1 + 2,5 + 1,5 + 0,4 + 0,6 = 6,0%. Lựa chọn 5,40% bỏ sót phần bù kỳ hạn. Lựa chọn 3,50% chỉ là lãi suất phi rủi ro danh nghĩa.' },
  ];

  const widgets = {
    requiredRate(el) {
      const items = [['real', 'Lãi suất thực', 1.5, 0, 5], ['inf', 'Lạm phát kỳ vọng', 3, 0, 15], ['def', 'Phần bù vỡ nợ', 1, 0, 6], ['liq', 'Phần bù thanh khoản', 0.5, 0, 3], ['mat', 'Phần bù kỳ hạn', 0.5, 0, 3]];
      el.innerHTML = `<div class="w-row">${items.map(([k, lab, v, lo, hi]) => `<label>${lab}: <b data-o="${k}">${v}%</b><input type="range" min="${lo}" max="${hi}" step="0.1" value="${v}" data-i="${k}"></label>`).join('')}</div>
        <div class="w-out"><div class="w-price" data-o="p"></div><div class="w-bar"><span data-o="bar"></span></div><div class="w-note" data-o="note"></div></div>`;
      const q = s => el.querySelector(s);
      const f = x => x.toFixed(2).replace('.', ',');
      const upd = () => {
        const v = {};
        items.forEach(([k]) => { v[k] = +q(`[data-i="${k}"]`).value; q(`[data-o="${k}"]`).textContent = `${f(v[k])}%`; });
        const nomExact = ((1 + v.real / 100) * (1 + v.inf / 100) - 1) * 100;
        const nomApprox = v.real + v.inf;
        const total = nomApprox + v.def + v.liq + v.mat;
        q('[data-o="p"]').textContent = `Lợi suất yêu cầu ≈ ${f(total)}%`;
        q('[data-o="bar"]').style.width = `${Math.min(100, total * 4)}%`;
        q('[data-o="note"]').textContent = `Phi rủi ro danh nghĩa: ${f(nomApprox)}% (cộng gần đúng), ${f(nomExact)}% (công thức nhân). Phần bù rủi ro cộng thêm: ${f(v.def + v.liq + v.mat)}%.`;
      };
      el.addEventListener('input', upd);
      upd();
    },
  };

  window.LESSONS['QM-01'] = {
    moduleId: 'QM-01',
    calculator: 'BA II Plus',
    warmup: [
      'Bạn gửi tiết kiệm lãi 5%/năm, lạm phát năm đó 4%. Sức mua của bạn tăng khoảng bao nhiêu?',
      'Vì sao trái phiếu doanh nghiệp thường có lợi suất cao hơn trái phiếu chính phủ cùng kỳ hạn?',
      'Kiểm tra máy tính: đặt 4 chữ số thập phân và P/Y = 1 (xem hướng dẫn ở module QM-04 nếu chưa biết).',
    ],
    sections,
    glossary,
    practice,
    widgets,
    slides: [],
    wrapup: [
      'Kể tên các viên gạch tạo nên lợi suất của một trái phiếu doanh nghiệp dài hạn.',
      'Khi nào dùng công thức Fisher chính xác thay vì cộng gần đúng?',
      'Cho một ví dụ tài sản có return kỳ vọng cao nhưng vẫn bị định giá cao.',
    ],
  };
}());
