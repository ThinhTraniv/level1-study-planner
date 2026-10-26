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
<p>Tiếp theo: tab <b>Luyện tập</b> 10 câu (rút ngẫu nhiên từ ngân hàng 30 câu, mỗi lần làm một bộ khác). Module QM-02 sẽ dạy cách tính các loại return (HPR nhiều kỳ, trung bình, annualized, sau thuế, đòn bẩy).</p>`,
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
    { q: "Gửi 8.000 USD với lãi suất đơn (simple interest) 5,5%/năm trong 6 năm. Giá trị cuối kỳ gần nhất với:", choices: ["11.030,74", "2.640,00", "10.640,00"], answer: 2, explain: "Lãi đơn chỉ tính lãi trên vốn gốc: 8.000 x (1 + 0,055 x 6) = 10.640,00. Lựa chọn 11.030,74 là 8.000 x 1,055^6, tức lãi kép, không đúng với giả thiết lãi đơn. Lựa chọn 2.640,00 chỉ là tiền lãi (8.000 x 0,055 x 6), quên cộng vốn gốc." },
    { q: "Chị Lan quyết định dùng 10.000 USD để đi du lịch thay vì gửi tiết kiệm với lãi suất 6%/năm. Đối với chị Lan, mức 6% được hiểu phù hợp nhất là:", choices: ["Chi phí cơ hội", "Lãi suất chiết khấu", "Phần bù rủi ro"], answer: 0, explain: "Chị Lan bỏ lỡ 6% khi chọn tiêu dùng hôm nay thay vì đầu tư, nên 6% là chi phí cơ hội. \"Lãi suất chiết khấu\" là cách hiểu khi dùng lãi suất để đưa dòng tiền tương lai về hiện tại, không phải tình huống ở đây. \"Phần bù rủi ro\" là phần cộng thêm cho rủi ro trên lãi suất phi rủi ro, không phải toàn bộ lãi suất tiết kiệm bị bỏ lỡ." },
    { q: "Một quỹ hưu trí chỉ mua trái phiếu khi lợi suất đạt tối thiểu 6,5% để bù cho rủi ro của trái phiếu đó. Mức 6,5% được hiểu phù hợp nhất là:", choices: ["Lãi suất phi rủi ro thực", "Lợi suất yêu cầu", "Lạm phát kỳ vọng"], answer: 1, explain: "Mức return tối thiểu nhà đầu tư cần để chấp nhận bỏ tiền là lợi suất yêu cầu. \"Lãi suất phi rủi ro thực\" chỉ bù cho việc hoãn tiêu dùng, không bao gồm bù rủi ro và lạm phát. \"Lạm phát kỳ vọng\" chỉ là một viên gạch trong lợi suất yêu cầu, không phải toàn bộ mức tối thiểu." },
    { q: "Mua cổ phiếu giá 62, nhận cổ tức 1,86 trong năm, cuối năm bán giá 58,9. Return thu nhập (income yield) và lãi/lỗ vốn (capital gain) lần lượt là:", choices: ["3,00% và 5,00%", "3,00% và -5,00%", "-2,00% và 3,00%"], answer: 1, explain: "Thu nhập: 1,86 / 62 = 3,00%. Lãi/lỗ vốn: (58,9 - 62) / 62 = -5,00%. Tổng return = -2,00%. Lựa chọn có lãi vốn 5,00% bỏ mất dấu âm dù giá giảm. Lựa chọn có -2,00% lấy tổng return làm thu nhập." },
    { q: "Phát biểu nào về các thành phần của return là chính xác nhất?", choices: ["Return của kỳ nắm giữ chỉ gồm thay đổi giá, không tính cổ tức", "Thu nhập có thể âm khi giá tài sản giảm trong kỳ", "Lãi vốn có thể âm, còn thu nhập (cổ tức, coupon, tiền thuê) không thể âm"], answer: 2, explain: "Return = lãi/lỗ vốn + thu nhập. Giá có thể giảm nên lãi vốn có thể âm; cổ tức, coupon hay tiền thuê thì không âm. Phương án \"chỉ gồm thay đổi giá\" bỏ sót phần thu nhập. Phương án \"thu nhập có thể âm\" nhầm phần giảm giá (thuộc lãi/lỗ vốn) với thu nhập." },
    { q: "Phát biểu nào về return đã thực hiện (realized) và return kỳ vọng (expected) là chính xác nhất?", choices: ["Return kỳ vọng là dự báo về tương lai và có thể khác nhau giữa các nhà đầu tư", "Return đã thực hiện cao trong quá khứ cho thấy return kỳ vọng cũng cao", "Return đã thực hiện phụ thuộc vào dự báo của từng nhà đầu tư"], answer: 0, explain: "Return kỳ vọng nhìn về tương lai (ex ante) nên tùy dự báo của từng người. Phương án \"return quá khứ cao thì kỳ vọng cao\" sai: tài sản vừa tăng mạnh có thể đã đắt, làm return kỳ vọng từ đây thấp hơn. Phương án \"return đã thực hiện phụ thuộc dự báo\" sai vì return đã thực hiện (ex post) là con số đo được chính xác." },
    { q: "Lãi suất phi rủi ro thực là 1,5%, lạm phát kỳ vọng 2,0%, phần bù rủi ro vốn cổ phần phù hợp cho cổ phiếu K là 5,5%. Nhà phân tích dự báo return kỳ vọng của K là 8,4%. Kết luận phù hợp nhất (dùng cách cộng gần đúng):", choices: ["K bị định giá cao vì 8,4% thấp hơn return yêu cầu 9,0%", "K bị định giá thấp vì 8,4% cao hơn lãi suất phi rủi ro danh nghĩa 3,5%", "K bị định giá thấp vì 8,4% cao hơn phần bù rủi ro 5,5%"], answer: 0, explain: "Return yêu cầu = 1,5% + 2,0% + 5,5% = 9,0%. Kỳ vọng 8,4% < 9,0% nên K đang đắt. Hai lựa chọn \"định giá thấp\" so return kỳ vọng với một viên gạch riêng lẻ (lãi suất phi rủi ro danh nghĩa 3,5% hoặc phần bù 5,5%) thay vì với toàn bộ return yêu cầu." },
    { q: "Trái phiếu chính phủ 2 năm có lợi suất 3,1%, trái phiếu chính phủ 10 năm của cùng chính phủ có lợi suất 4,4%. Phần chênh lệch 1,3% chủ yếu phản ánh:", choices: ["Phần bù vỡ nợ", "Phần bù kỳ hạn", "Phần bù thanh khoản"], answer: 1, explain: "Cùng tổ chức phát hành (cùng rủi ro vỡ nợ), trái phiếu chính phủ đều thanh khoản cao, chỉ khác kỳ hạn: chênh lệch chủ yếu là phần bù kỳ hạn, bù cho giá biến động mạnh hơn khi lãi suất thay đổi. \"Phần bù vỡ nợ\" không khác nhau vì cùng nhà phát hành. \"Phần bù thanh khoản\" gần như bằng nhau với trái phiếu chính phủ." },
    { q: "Tín phiếu kho bạc 1 năm có lợi suất 3,0%. Trái phiếu chính phủ 5 năm có lợi suất 3,6%. Trái phiếu doanh nghiệp 5 năm có lợi suất 5,4%, trong đó phần bù thanh khoản ước tính 0,5%. Phần bù vỡ nợ của trái phiếu doanh nghiệp gần nhất với:", choices: ["1,9%", "1,8%", "1,3%"], answer: 2, explain: "So với trái phiếu chính phủ cùng kỳ hạn 5 năm (đã chứa phần bù kỳ hạn): 5,4% - 3,6% - 0,5% = 1,3%. Lựa chọn 1,9% so với tín phiếu 1 năm (5,4% - 3,0% - 0,5%), lẫn cả phần bù kỳ hạn vào phần bù vỡ nợ. Lựa chọn 1,8% quên trừ phần bù thanh khoản." },
    { q: "Ở một nền kinh tế lạm phát cao, tiền gửi 1 năm trả lãi danh nghĩa 25%, lạm phát kỳ vọng 20%. Lãi suất thực (công thức chính xác) gần nhất với:", choices: ["5,00%", "50,00%", "4,17%"], answer: 2, explain: "1,25 / 1,20 - 1 = 4,17%. Lựa chọn 5,00% là phép trừ gần đúng; khi lạm phát cao, sai số gần 0,8 điểm % là đáng kể nên phải dùng phép chia. Lựa chọn 50,00% nhân 1,25 x 1,20 thay vì chia." },
    { q: "Trong quan hệ Fisher (1 + lãi suất danh nghĩa) = (1 + lãi suất thực) x (1 + π), π là:", choices: ["Lạm phát kỳ vọng trong kỳ đầu tư", "Lạm phát thực tế của năm vừa qua", "Chênh lệch lợi suất giữa trái phiếu doanh nghiệp và trái phiếu chính phủ"], answer: 0, explain: "Lãi suất được đặt hôm nay cho kỳ tới nên phải bù cho lạm phát kỳ vọng trong kỳ đó. \"Lạm phát thực tế năm vừa qua\" là số liệu quá khứ, chỉ là một căn cứ để dự báo. \"Chênh lệch lợi suất doanh nghiệp và chính phủ\" là phần bù vỡ nợ và thanh khoản, không liên quan đến π." },
    { q: "Lợi suất tín phiếu kho bạc ngắn hạn của chính phủ có uy tín thường được dùng làm lãi suất phi rủi ro danh nghĩa, chủ yếu vì tín phiếu này:", choices: ["Đã loại bỏ lạm phát kỳ vọng nên bằng lãi suất phi rủi ro thực", "Gần như không có rủi ro vỡ nợ, thanh khoản rất cao và kỳ hạn ngắn", "Chứa phần bù kỳ hạn lớn nhất trên thị trường"], answer: 1, explain: "Không có phần bù vỡ nợ, thanh khoản hay kỳ hạn đáng kể nên lợi suất chỉ còn lãi suất thực + lạm phát kỳ vọng, đúng định nghĩa lãi suất phi rủi ro danh nghĩa. Phương án \"bằng lãi suất phi rủi ro thực\" sai vì lợi suất tín phiếu vẫn chứa lạm phát kỳ vọng. Phương án \"phần bù kỳ hạn lớn nhất\" sai vì kỳ hạn ngắn nên phần bù kỳ hạn gần như bằng 0." },
    { q: "Lãi suất phi rủi ro thực là 1,5%, lạm phát kỳ vọng 2,3%. Trái phiếu chính phủ 10 năm (coi như không có rủi ro vỡ nợ và thanh khoản) có lợi suất 4,6%. Dùng cách cộng gần đúng, phần bù kỳ hạn gần nhất với:", choices: ["3,1%", "0,8%", "2,3%"], answer: 1, explain: "4,6% - 1,5% - 2,3% = 0,8%. Lựa chọn 3,1% quên trừ lạm phát kỳ vọng. Lựa chọn 2,3% quên trừ lãi suất thực." },
    { q: "Với cùng vốn gốc và cùng lãi suất, khi thời gian đầu tư dài hơn, chênh lệch giữa giá trị cuối kỳ theo lãi kép và theo lãi đơn sẽ:", choices: ["Không đổi, vì lãi suất mỗi năm như nhau", "Giảm dần, vì lãi đơn tăng tuyến tính theo thời gian", "Tăng dần, vì lãi kép có thêm phần lãi trên lãi"], answer: 2, explain: "Lãi kép tính lãi trên cả lãi đã tái đầu tư, nên phần \"lãi trên lãi\" lớn dần theo thời gian. Phương án \"không đổi\" bỏ qua việc vốn tính lãi của lãi kép lớn dần mỗi năm. Phương án \"giảm dần\" sai vì lãi đơn tăng tuyến tính còn lãi kép tăng theo lũy thừa, nên khoảng cách nới rộng." },
    { q: "Cổ phiếu thường của một công ty thường có lợi suất yêu cầu cao hơn trái phiếu của chính công ty đó, chủ yếu vì:", choices: ["Cổ đông chỉ nhận phần còn lại sau khi đã trả hết cho chủ nợ và cổ tức không được cam kết", "Cổ phiếu có ngày đáo hạn xa hơn nên chịu phần bù kỳ hạn lớn hơn", "Cổ phiếu luôn kém thanh khoản hơn trái phiếu của cùng công ty"], answer: 0, explain: "Cổ đông đứng sau chủ nợ và cổ tức không được cam kết, nên rủi ro cao hơn và đòi phần bù rủi ro vốn cổ phần. Phương án \"ngày đáo hạn xa hơn\" sai vì cổ phiếu không có ngày đáo hạn. Phương án \"luôn kém thanh khoản hơn\" sai: cổ phiếu niêm yết thường giao dịch sôi động hơn trái phiếu doanh nghiệp." },
    { q: "Sắp xếp theo lợi suất yêu cầu tăng dần, thứ tự hợp lý nhất là:", choices: ["Tín phiếu kho bạc, trái phiếu chính phủ dài hạn, trái phiếu doanh nghiệp, cổ phiếu", "Tín phiếu kho bạc, trái phiếu doanh nghiệp, trái phiếu chính phủ dài hạn, cổ phiếu", "Trái phiếu chính phủ dài hạn, tín phiếu kho bạc, cổ phiếu, trái phiếu doanh nghiệp"], answer: 0, explain: "Mỗi bậc thêm một viên gạch: tín phiếu (lãi suất thực + lạm phát), trái phiếu chính phủ dài hạn (+ phần bù kỳ hạn), trái phiếu doanh nghiệp (+ phần bù vỡ nợ và thanh khoản), cổ phiếu (+ phần bù rủi ro vốn cổ phần). Thứ tự đặt trái phiếu doanh nghiệp trước trái phiếu chính phủ dài hạn bỏ qua phần bù vỡ nợ. Thứ tự đặt trái phiếu chính phủ dài hạn trước tín phiếu và cổ phiếu trước trái phiếu doanh nghiệp đảo ngược quan hệ rủi ro - return." },
    { q: "Năm qua, quỹ X đạt return 14%, quỹ Y đạt 9%. Phát biểu nào phù hợp nhất?", choices: ["X tốt hơn vì return cao hơn 5 điểm %", "Chưa thể kết luận X tốt hơn khi chưa xét rủi ro và lợi suất yêu cầu của mỗi quỹ", "Y tốt hơn vì return thấp hơn nghĩa là rủi ro thấp hơn"], answer: 1, explain: "Return cao hơn có thể chỉ là phần thưởng cho rủi ro cao hơn; phải so với lợi suất yêu cầu (và benchmark) tương ứng. Phương án \"X tốt hơn vì return cao hơn\" bỏ qua rủi ro. Phương án \"Y tốt hơn vì return thấp\" sai vì return thấp không chứng minh rủi ro thấp." },
    { q: "Lãi suất phi rủi ro thực 1,2%, lạm phát kỳ vọng 2,5%. Lợi suất yêu cầu của một cổ phiếu là 10,9%. Dùng cách cộng gần đúng, phần bù rủi ro vốn cổ phần ngầm định gần nhất với:", choices: ["8,4%", "9,7%", "7,2%"], answer: 2, explain: "Lãi suất phi rủi ro danh nghĩa ≈ 1,2% + 2,5% = 3,7%. Phần bù = 10,9% - 3,7% = 7,2%. Lựa chọn 8,4% chỉ trừ lạm phát, quên lãi suất thực. Lựa chọn 9,7% chỉ trừ lãi suất thực, quên lạm phát." },
    { q: "Một doanh nghiệp bị hạ xếp hạng tín nhiệm; các yếu tố khác không đổi. Lợi suất yêu cầu trên trái phiếu của doanh nghiệp này nhiều khả năng:", choices: ["Tăng, do phần bù kỳ hạn tăng", "Không đổi, vì lãi suất phi rủi ro không đổi", "Tăng, do phần bù vỡ nợ tăng"], answer: 2, explain: "Xếp hạng thấp hơn nghĩa là rủi ro không trả đủ gốc lãi cao hơn, nên phần bù vỡ nợ tăng. \"Phần bù kỳ hạn tăng\" sai vì kỳ hạn trái phiếu không đổi. \"Không đổi\" sai vì lợi suất yêu cầu gồm cả phần bù rủi ro, không chỉ lãi suất phi rủi ro." },
    { q: "Đầu tư 50.000 USD trong 3 năm với lãi suất danh nghĩa 7%/năm (lãi kép), lạm phát 4%/năm. Giá trị cuối kỳ tính theo sức mua của hôm nay gần nhất với:", choices: ["54.452,94", "54.636,35", "61.252,15"], answer: 0, explain: "Lãi suất thực mỗi năm = 1,07 / 1,04 - 1. Giá trị thực = 50.000 x (1,07 / 1,04)^3 = 54.452,94. Lựa chọn 54.636,35 dùng lãi suất thực gần đúng 3% (50.000 x 1,03^3). Lựa chọn 61.252,15 là giá trị danh nghĩa 50.000 x 1,07^3, chưa loại lạm phát." },
    { q: "Một khoản sẽ nhận 10.000 USD sau 4 năm. Với lãi suất chiết khấu 6%/năm (lãi kép), giá trị hôm nay gần nhất với:", choices: ["8.064,52", "7.920,94", "7.600,00"], answer: 1, explain: "10.000 / 1,06^4 = 7.920,94. Lựa chọn 8.064,52 chiết khấu theo lãi đơn 10.000 / (1 + 0,06 x 4). Lựa chọn 7.600,00 trừ thẳng 24% khỏi 10.000, không phải chiết khấu." },
    { q: "Nhà đầu tư nhiều khả năng đòi phần bù thanh khoản cao nhất đối với:", choices: ["Tín phiếu kho bạc 3 tháng", "Trái phiếu chính phủ 10 năm mới phát hành", "Trái phiếu của một doanh nghiệp nhỏ, quy mô phát hành nhỏ, hiếm khi được giao dịch"], answer: 2, explain: "Phần bù thanh khoản bù cho việc khó bán nhanh mà không phải giảm giá nhiều; nó lớn khi quy mô phát hành nhỏ và ít giao dịch. Tín phiếu kho bạc 3 tháng và trái phiếu chính phủ mới phát hành đều được giao dịch rất sôi động nên phần bù thanh khoản gần như bằng 0." },
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
