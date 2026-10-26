// Bài giảng PC-05 - The Behavioral Biases of Individuals (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t, frac } = window.CFAH;

  const sections = [
    {
      title: '1. Bức tranh lớn',
      minutes: 5,
      html: `
<p>Tài chính truyền thống giả định nhà đầu tư <b>lý trí</b>: xử lý mọi thông tin đúng cách, cập nhật niềm tin theo quy tắc Bayes, chọn danh mục tối đa hóa độ thỏa dụng. ${t('bf', 'Tài chính hành vi (behavioral finance)')} hỏi lại: con người thật có làm vậy không?</p>
<div class="key">${t('bias', 'Thiên lệch hành vi (behavioral bias)')} là xu hướng lệch <b>có hệ thống</b> khỏi quyết định lý trí. Chúng chia thành hai nhóm:<br>
- ${t('cognitive', 'Lỗi nhận thức (cognitive errors)')}: sai do <b>suy nghĩ</b> - thiếu thông tin, xử lý thông tin sai, nhớ sai.<br>
- ${t('emotional', 'Thiên lệch cảm xúc (emotional biases)')}: sai do <b>cảm xúc</b> - nỗi sợ, sự tự tin, sự gắn bó.</div>
<p>Module có 3 LOS:</p>
<ol>
  <li>So sánh lỗi nhận thức và thiên lệch cảm xúc. LOS 1.</li>
  <li>Nhận diện từng thiên lệch thường gặp và hậu quả của nó: 9 lỗi nhận thức và 6 thiên lệch cảm xúc. LOS 2.</li>
  <li>Thiên lệch cá nhân cộng lại tạo ra hiện tượng thị trường mà tài chính truyền thống khó giải thích: momentum, bong bóng và sụp đổ, cổ phiếu giá trị vượt trội. LOS 3.</li>
</ol>
<p class="tip">Ở PC-04, việc đánh giá <b>willingness</b> của khách hàng chính là chỗ các thiên lệch này lộ ra. Đề thi gần như luôn ra dạng: "một tình huống ngắn, hỏi đây là thiên lệch nào".</p>`,
    },
    {
      title: '2. Lỗi nhận thức và thiên lệch cảm xúc',
      minutes: 8,
      html: `
<table class="plain"><thead><tr><th></th><th>Lỗi nhận thức (cognitive)</th><th>Thiên lệch cảm xúc (emotional)</th></tr></thead><tbody>
<tr><td>Nguồn gốc</td><td>Lập luận sai, xử lý thông tin sai, ghi nhớ sai</td><td>Cảm xúc, trực giác, cảm giác bị đe dọa</td></tr>
<tr><td>Hai nhóm con</td><td>${t('bp', 'Bảo thủ niềm tin (belief perseverance)')} và ${t('ip', 'lỗi xử lý thông tin (information-processing)')}</td><td>Không chia nhóm con</td></tr>
<tr><td>Sửa được không?</td><td><b>Dễ sửa hơn</b>: thông tin tốt hơn, giáo dục, tư vấn</td><td><b>Khó sửa hơn</b>: cảm xúc tự phát, biết mình sai vẫn làm</td></tr>
<tr><td>Cách xử lý thường gặp</td><td>${t('moderate', 'Điều chỉnh (moderate)')}: giúp khách hàng giảm thiên lệch</td><td>${t('adapt', 'Thích nghi (adapt)')}: chấp nhận và điều chỉnh danh mục theo thiên lệch</td></tr>
</tbody></table>
<div class="key">Mẹo phân loại: hỏi "nếu người này được giải thích rõ ràng, họ có tự sửa không?". Nếu có, nhiều khả năng là lỗi nhận thức. Nếu họ vẫn làm vì <b>cảm giác</b> (sợ, tiếc, tự hào), đó là thiên lệch cảm xúc.</div>
<p class="warn"><b>Lưu ý:</b> nhiều thiên lệch có cả yếu tố nhận thức lẫn cảm xúc. Chương trình CFA xếp ${t('overconf', 'overconfidence')} vào nhóm <b>cảm xúc</b> (dù có thành phần nhận thức). Khi làm bài, theo cách phân loại của chương trình.</p>`,
    },
    {
      title: '3. Lỗi nhận thức: bảo thủ niềm tin',
      minutes: 14,
      html: `
<p>Nhóm này có chung gốc rễ là ${t('dissonance', 'bất hòa nhận thức (cognitive dissonance)')}: cảm giác khó chịu khi thông tin mới mâu thuẫn với điều mình đang tin. Để bớt khó chịu, con người bám lấy niềm tin cũ.</p>
<table class="plain"><thead><tr><th>Thiên lệch</th><th>Biểu hiện</th><th>Hậu quả đầu tư</th></tr></thead><tbody>
<tr><td>${t('conservatism', 'Conservatism')}</td><td>Giữ quan điểm cũ, cập nhật quá chậm khi có thông tin mới</td><td>Phản ứng chậm với tin tức; giữ danh mục cũ dù kinh tế đã đổi</td></tr>
<tr><td>${t('confirmation', 'Confirmation')}</td><td>Chỉ tìm và tin thông tin ủng hộ quan điểm của mình</td><td>Tập trung quá mức vào cổ phiếu "yêu thích"; sàng lọc chỉ để xác nhận</td></tr>
<tr><td>${t('represent', 'Representativeness')}</td><td>Phân loại theo khuôn mẫu, dựa vào mẫu nhỏ; bỏ qua tỷ lệ nền</td><td>Mua quỹ vừa thắng 2-3 năm; coi công ty tốt là cổ phiếu tốt</td></tr>
<tr><td>${t('control', 'Illusion of control')}</td><td>Tin mình kiểm soát được kết quả hơn thực tế</td><td>Giao dịch quá nhiều; dồn tiền vào cổ phiếu công ty mình làm việc</td></tr>
<tr><td>${t('hindsight', 'Hindsight')}</td><td>"Tôi biết từ trước rồi": nhớ lại quá khứ như thể đã dự đoán được</td><td>Đánh giá quá cao khả năng dự báo; trách nhà quản lý vô lý</td></tr>
</tbody></table>

<h4>Representativeness: hai dạng hay gặp</h4>
<ul>
  <li><b>Bỏ qua tỷ lệ nền (base-rate neglect):</b> chỉ nhìn "câu chuyện" cụ thể, quên mất xác suất chung.</li>
  <li><b>Bỏ qua cỡ mẫu (sample-size neglect):</b> kết luận từ vài quan sát như thể đó là quy luật.</li>
</ul>
<div class="example"><div class="ex-h">Ví dụ 3.1 - Quỹ thắng 3 năm liền có giỏi thật không?</div>
<p>Giả sử chỉ 10% quỹ có kỹ năng thật. Quỹ giỏi thắng thị trường 80% số năm; quỹ không giỏi thắng 50% (may rủi), các năm độc lập. Một quỹ vừa thắng 3 năm liền. Xác suất nó là quỹ giỏi?</p>
<details><summary>Xem lời giải</summary>
<p>P(thắng 3 năm | giỏi) = 0,8<sup>3</sup> = 0,512. P(thắng 3 năm | không giỏi) = 0,5<sup>3</sup> = 0,125.</p>
<p>P(giỏi | thắng 3 năm) = ${frac('0,1 × 0,512', '0,1 × 0,512 + 0,9 × 0,125')} = ${frac('0,0512', '0,1637')} = <b>31,28%</b>.</p>
<p>Người mắc representativeness sẽ nghĩ "chắc chắn giỏi" (hoặc nghĩ đến con số 51,2%), trong khi thực tế gần 70% khả năng đó chỉ là may mắn. Nguyên nhân: bỏ qua tỷ lệ nền 10% và cỡ mẫu chỉ 3 năm.</p></details></div>
<p class="tip">Phân biệt <b>conservatism</b> và <b>confirmation</b>: conservatism là có thông tin mới nhưng cập nhật <b>quá chậm</b>; confirmation là <b>chủ động tìm</b> thông tin ủng hộ và lờ thông tin trái chiều.</p>`,
    },
    {
      title: '4. Lỗi nhận thức: xử lý thông tin',
      minutes: 12,
      html: `
<p>Nhóm này không phải do bám niềm tin, mà do <b>cách bộ não tiếp nhận và xử lý</b> thông tin bị sai lệch.</p>
<table class="plain"><thead><tr><th>Thiên lệch</th><th>Biểu hiện</th><th>Hậu quả đầu tư</th></tr></thead><tbody>
<tr><td>${t('anchoring', 'Anchoring and adjustment')}</td><td>Lấy một con số ban đầu làm "mỏ neo", rồi điều chỉnh quá ít</td><td>Dự báo EPS bám sát năm trước; neo vào giá mua để quyết định bán</td></tr>
<tr><td>${t('mental', 'Mental accounting')}</td><td>Chia tiền vào các "tài khoản tâm lý" riêng theo nguồn gốc hoặc mục đích</td><td>Bỏ qua tương quan giữa các phần; tiêu "tiền thưởng" mạo hiểm hơn tiền lương</td></tr>
<tr><td>${t('framing', 'Framing')}</td><td>Cùng một thông tin nhưng trình bày khác nhau thì quyết định khác nhau</td><td>Chọn khác nhau giữa "90% thành công" và "10% thất bại"; đánh giá rủi ro theo cách đặt câu hỏi</td></tr>
<tr><td>${t('availability', 'Availability')}</td><td>Đánh giá xác suất theo mức dễ nhớ, dễ nghĩ đến</td><td>Mua theo tin nóng trên mạng xã hội; chọn quỹ quảng cáo nhiều; danh mục thiếu đa dạng</td></tr>
</tbody></table>

<div class="example"><div class="ex-h">Ví dụ 4.1 - Nhận diện</div>
<p>(a) Ông Tuấn gửi tiết kiệm lãi 5% cho "quỹ học của con" nhưng vẫn để dư nợ thẻ tín dụng lãi 25%. (b) Chị Mai được hỏi nên mua cổ phiếu ở giá nào, chị lấy giá đỉnh năm ngoái 80.000 đồng làm điểm khởi đầu. (c) Sau một vụ phá sản ngân hàng được báo chí đưa tin dày đặc, anh Bình ước tính xác suất ngân hàng phá sản cao hơn nhiều so với thống kê.</p>
<details><summary>Xem lời giải</summary><p>(a) <b>Mental accounting</b>: coi hai khoản là riêng biệt, trong khi trả nợ thẻ có lợi hơn hẳn. (b) <b>Anchoring</b>. (c) <b>Availability</b>: sự kiện gần đây, gây ấn tượng mạnh được đánh giá quá cao.</p></details></div>
<p class="tip">Mental accounting giải thích vì sao nhiều người xây danh mục theo "từng tầng" mục tiêu (an toàn, thu nhập, tăng trưởng) mà không nhìn tương quan tổng thể. Ở PC-01 bạn đã thấy rủi ro danh mục phụ thuộc tương quan, nên chia tầng như vậy có thể làm danh mục kém hiệu quả.</p>`,
    },
    {
      title: '5. Thiên lệch cảm xúc',
      minutes: 14,
      html: `
<table class="plain"><thead><tr><th>Thiên lệch</th><th>Biểu hiện</th><th>Hậu quả đầu tư</th></tr></thead><tbody>
<tr><td>${t('lossav', 'Loss aversion')}</td><td>Nỗi đau khi lỗ lớn hơn niềm vui khi lãi cùng mức (khoảng 2 lần)</td><td>${t('disposition', 'Hiệu ứng disposition')}: bán cổ phiếu lãi quá sớm, giữ cổ phiếu lỗ quá lâu; có khi tăng rủi ro để "gỡ"</td></tr>
<tr><td>${t('overconf', 'Overconfidence')}</td><td>Đánh giá quá cao hiểu biết và khả năng dự báo của mình</td><td>Giao dịch quá nhiều, đa dạng hóa kém, đánh giá thấp rủi ro</td></tr>
<tr><td>${t('selfcontrol', 'Self-control')}</td><td>Ưu tiên hưởng thụ trước mắt hơn mục tiêu dài hạn</td><td>Tiết kiệm không đủ cho nghỉ hưu; sau đó dồn vào tài sản rủi ro để bù</td></tr>
<tr><td>${t('statusquo', 'Status quo')}</td><td>Không làm gì, giữ nguyên hiện trạng</td><td>Giữ phân bổ mặc định trong quỹ hưu trí nhiều năm dù không còn phù hợp</td></tr>
<tr><td>${t('endowment', 'Endowment')}</td><td>Định giá tài sản mình đang sở hữu cao hơn chỉ vì đó là của mình</td><td>Không bán cổ phiếu được thừa kế; giữ tài sản không phù hợp</td></tr>
<tr><td>${t('regret', 'Regret aversion')}</td><td>Né tránh quyết định vì sợ sau này hối tiếc</td><td>Quá thận trọng sau thua lỗ; ${t('herding', 'chạy theo đám đông (herding)')} vì "sai cùng mọi người thì đỡ tiếc"</td></tr>
</tbody></table>

<h4>Loss aversion và prospect theory</h4>
<p>Theo ${t('prospect', 'lý thuyết triển vọng (prospect theory)')}, người ta đánh giá kết quả theo <b>lãi và lỗ so với một điểm tham chiếu</b> (thường là giá mua), không theo tổng tài sản. Đường giá trị dốc hơn ở phía lỗ.</p>
<div class="example"><div class="ex-h">Ví dụ 5.1</div>
<p>Trò chơi tung đồng xu: ngửa được 150 USD, sấp mất 100 USD. Giả sử nỗi đau khi lỗ gấp 2 lần niềm vui khi lãi. Người chơi cảm nhận trò chơi này thế nào?</p>
<details><summary>Xem lời giải</summary><p>Giá trị kỳ vọng = 0,5 × 150 - 0,5 × 100 = <b>+25 USD</b>, người lý trí trung tính rủi ro nên chơi.<br>Giá trị cảm nhận = 0,5 × 150 - 0,5 × 2 × 100 = <b>-25</b>, nên người ngại lỗ từ chối, dù trò chơi có lợi.</p></details></div>

<h4>Overconfidence có hai dạng</h4>
<ul>
  <li><b>Dự báo quá tự tin (prediction overconfidence):</b> khoảng dự báo quá hẹp. Ví dụ: người ta nói "chắc 90%" nhưng thực tế chỉ đúng khoảng 60% lần.</li>
  <li><b>Chắc chắn quá mức (certainty overconfidence):</b> gán xác suất quá cao cho điều mình tin.</li>
</ul>
<p>Overconfidence thường được nuôi bởi ${t('selfattr', 'thiên lệch quy công (self-attribution)')}: thắng là nhờ tài, thua là do xui.</p>
<p class="warn"><b>Bẫy hay gặp:</b> <b>status quo</b> (không làm gì vì quán tính), <b>endowment</b> (định giá cao thứ mình có) và <b>regret aversion</b> (sợ hối tiếc) đều dẫn tới "không bán". Đọc kỹ <b>lý do</b> trong tình huống để phân biệt. "Cổ phiếu của bố để lại" là endowment; "đổi thì phiền" là status quo; "lỡ bán xong nó tăng thì sao" là regret aversion.</p>`,
    },
    {
      title: '6. Thiên lệch hành vi và đặc điểm của thị trường',
      minutes: 9,
      html: `
<p>Khi nhiều nhà đầu tư cùng mắc một thiên lệch, tác động không còn triệt tiêu nhau mà cộng dồn, tạo ra các hiện tượng thị trường khó giải thích bằng tài chính truyền thống (LOS 3).</p>
<p>${t('anomaly', 'Bất thường thị trường (market anomaly)')} là chênh lệch lợi suất kéo dài so với mô hình định giá hợp lý. Cần thận trọng: nhiều "bất thường" biến mất khi được công bố, hoặc chỉ là kết quả của ${t('datamining', 'đào bới dữ liệu (data mining)')}, hoặc là bù đắp cho một rủi ro chưa được đo.</p>
<table class="plain"><thead><tr><th>Hiện tượng</th><th>Mô tả</th><th>Giải thích hành vi</th></tr></thead><tbody>
<tr><td>${t('momentum', 'Momentum')}</td><td>Cổ phiếu tăng (giảm) gần đây có xu hướng tiếp tục tăng (giảm) trong ngắn hạn</td><td>Herding, availability, hindsight, regret: sợ bỏ lỡ nên đuổi theo cổ phiếu vừa tăng; phản ứng chậm (conservatism) lúc đầu rồi phản ứng thái quá</td></tr>
<tr><td>Bong bóng và sụp đổ (bubbles and crashes)</td><td>Giá tăng vượt xa giá trị cơ bản rồi sụp đổ nhanh</td><td>Overconfidence, confirmation, self-attribution khi giá tăng; regret aversion và herding kéo thêm người vào; khi đảo chiều, loss aversion và hoảng loạn làm sụp đổ nhanh. Disposition effect làm chậm việc chốt lỗ</td></tr>
<tr><td>Cổ phiếu giá trị và tăng trưởng (value vs growth)</td><td>Cổ phiếu giá trị (P/E, P/B thấp) dài hạn có lợi suất cao hơn tăng trưởng</td><td>${t('halo', 'Hiệu ứng hào quang (halo effect)')}: công ty tốt bị coi là cổ phiếu tốt, nên cổ phiếu tăng trưởng bị trả giá quá cao; dạng của representativeness</td></tr>
<tr><td>${t('homebias', 'Thiên lệch nội địa (home bias)')}</td><td>Đầu tư quá nhiều vào thị trường trong nước</td><td>Quen thuộc, cảm giác kiểm soát, overconfidence về hiểu biết thị trường nhà</td></tr>
</tbody></table>
<div class="example"><div class="ex-h">Ví dụ 6.1 - Cơn sốt cổ phiếu AI</div>
<p>Một nhà đầu tư xem nhiều video ca ngợi một cổ phiếu AI vừa tăng mạnh 2 năm, chỉ đọc bài tích cực, bán quỹ ETF đa dạng để dồn vào cổ phiếu đó vì "mọi người đều mua và nó sẽ còn tăng". Những thiên lệch nào?</p>
<details><summary>Xem lời giải</summary><p><b>Availability</b> (tin tức dày đặc), <b>confirmation</b> (chỉ đọc bài tích cực), <b>representativeness</b> (ngoại suy 2 năm tăng), <b>herding / regret aversion</b> (sợ bỏ lỡ khi mọi người đều mua), <b>overconfidence</b> (dồn tập trung). Khi nhiều người cùng làm vậy, giá bị đẩy xa giá trị cơ bản: đó là cơ chế hình thành bong bóng.</p></details></div>`,
    },
    {
      title: '7. Tóm tắt và bẫy thường gặp',
      minutes: 3,
      html: `
<table class="plain"><thead><tr><th>Nhóm</th><th>Thiên lệch</th><th>Từ khóa nhận diện</th></tr></thead><tbody>
<tr><td>Bảo thủ niềm tin</td><td>Conservatism, confirmation, representativeness, illusion of control, hindsight</td><td>Cập nhật chậm, chỉ tìm tin ủng hộ, mẫu nhỏ, "tôi kiểm soát", "biết từ trước"</td></tr>
<tr><td>Xử lý thông tin</td><td>Anchoring, mental accounting, framing, availability</td><td>Mỏ neo, tài khoản riêng, cách trình bày, dễ nhớ</td></tr>
<tr><td>Cảm xúc</td><td>Loss aversion, overconfidence, self-control, status quo, endowment, regret aversion</td><td>Giữ lỗ bán lãi, quá tự tin, tiêu trước, quán tính, "của tôi", sợ hối tiếc</td></tr>
<tr><td>Xử lý</td><td>Cognitive: moderate. Emotional: adapt</td><td>Cognitive dễ sửa bằng giáo dục hơn</td></tr>
<tr><td>Thị trường</td><td>Momentum, bong bóng và sụp đổ, value vs growth, home bias</td><td>Thiên lệch cá nhân cộng dồn</td></tr>
</tbody></table>
<p>Tiếp theo: tab <b>Luyện tập</b> - 10 câu tình huống (rút ngẫu nhiên từ ngân hàng 30 câu, mỗi lần làm một bộ khác). Module sau (PC-06) chuyển sang khung quản lý rủi ro của tổ chức.</p>`,
    },
  ];

  const glossary = {
    bf: ['Behavioral finance', 'Tài chính hành vi', 'Ngành nghiên cứu cách con người thật sự ra quyết định tài chính, kể cả khi không lý trí.'],
    bias: ['Behavioral bias', 'Thiên lệch hành vi', 'Xu hướng lệch có hệ thống khỏi quyết định lý trí.'],
    cognitive: ['Cognitive errors', 'Lỗi nhận thức', 'Thiên lệch do lập luận, xử lý thông tin hoặc ghi nhớ sai; dễ sửa hơn bằng thông tin và giáo dục.'],
    emotional: ['Emotional biases', 'Thiên lệch cảm xúc', 'Thiên lệch do cảm xúc và trực giác; khó sửa, thường phải thích nghi.'],
    bp: ['Belief perseverance biases', 'Thiên lệch bảo thủ niềm tin', 'Xu hướng bám lấy niềm tin cũ dù có bằng chứng ngược lại.'],
    ip: ['Information-processing biases', 'Lỗi xử lý thông tin', 'Thông tin bị tiếp nhận, xử lý hoặc sử dụng không đúng cách.'],
    moderate: ['Moderate (a bias)', 'Điều chỉnh thiên lệch', 'Giúp khách hàng giảm thiên lệch, thường áp dụng cho lỗi nhận thức.'],
    adapt: ['Adapt to (a bias)', 'Thích nghi với thiên lệch', 'Chấp nhận thiên lệch và điều chỉnh danh mục cho phù hợp, thường áp dụng cho thiên lệch cảm xúc.'],
    dissonance: ['Cognitive dissonance', 'Bất hòa nhận thức', 'Cảm giác khó chịu khi thông tin mới mâu thuẫn với niềm tin hiện tại; gốc rễ của nhóm bảo thủ niềm tin.'],
    conservatism: ['Conservatism bias', 'Thiên lệch bảo thủ', 'Giữ quan điểm cũ và cập nhật quá chậm trước thông tin mới.'],
    confirmation: ['Confirmation bias', 'Thiên lệch xác nhận', 'Chỉ tìm và tin thông tin ủng hộ quan điểm sẵn có.'],
    represent: ['Representativeness bias', 'Thiên lệch tính đại diện', 'Phân loại theo khuôn mẫu, bỏ qua tỷ lệ nền và cỡ mẫu.'],
    control: ['Illusion of control bias', 'Ảo tưởng kiểm soát', 'Tin rằng mình kiểm soát được kết quả nhiều hơn thực tế.'],
    hindsight: ['Hindsight bias', 'Thiên lệch nhìn lại', 'Nhìn lại thì thấy sự việc như đã dự đoán được ("tôi biết từ trước").'],
    anchoring: ['Anchoring and adjustment bias', 'Thiên lệch mỏ neo', 'Bám vào một con số ban đầu và điều chỉnh quá ít khi có thông tin mới.'],
    mental: ['Mental accounting bias', 'Kế toán tâm lý', 'Coi tiền khác nhau tùy nguồn gốc hoặc mục đích, thay vì nhìn tổng thể danh mục.'],
    framing: ['Framing bias', 'Thiên lệch khung', 'Quyết định thay đổi theo cách trình bày cùng một thông tin.'],
    availability: ['Availability bias', 'Thiên lệch sẵn có', 'Đánh giá xác suất theo mức độ dễ nhớ, dễ nghĩ đến của sự kiện.'],
    lossav: ['Loss-aversion bias', 'Ngại thua lỗ', 'Nỗi đau khi lỗ lớn hơn niềm vui khi lãi cùng mức.'],
    disposition: ['Disposition effect', 'Hiệu ứng disposition', 'Bán cổ phiếu lãi quá sớm và giữ cổ phiếu lỗ quá lâu.'],
    overconf: ['Overconfidence bias', 'Quá tự tin', 'Đánh giá quá cao hiểu biết và khả năng dự báo của mình.'],
    selfattr: ['Self-attribution bias', 'Thiên lệch quy công', 'Thành công là nhờ tài, thất bại là do yếu tố bên ngoài.'],
    selfcontrol: ['Self-control bias', 'Thiếu tự chủ', 'Ưu tiên hưởng thụ trước mắt hơn mục tiêu dài hạn.'],
    statusquo: ['Status quo bias', 'Thiên lệch giữ hiện trạng', 'Xu hướng không làm gì, giữ nguyên lựa chọn hiện có.'],
    endowment: ['Endowment bias', 'Hiệu ứng sở hữu', 'Định giá tài sản đang sở hữu cao hơn chỉ vì đó là của mình.'],
    regret: ['Regret-aversion bias', 'Sợ hối tiếc', 'Né tránh quyết định vì sợ sau này hối tiếc.'],
    herding: ['Herding', 'Hành vi bầy đàn', 'Làm theo đám đông thay vì tự phân tích.'],
    prospect: ['Prospect theory', 'Lý thuyết triển vọng', 'Người ta đánh giá lãi, lỗ so với điểm tham chiếu; đường giá trị dốc hơn ở phía lỗ.'],
    anomaly: ['Market anomaly', 'Bất thường thị trường', 'Chênh lệch lợi suất kéo dài không giải thích được bằng mô hình định giá hợp lý.'],
    datamining: ['Data mining', 'Đào bới dữ liệu', 'Thử nhiều mô hình trên cùng dữ liệu cho đến khi tìm ra quy luật, thường là ngẫu nhiên.'],
    momentum: ['Momentum effect', 'Hiệu ứng quán tính giá', 'Cổ phiếu vừa tăng (giảm) có xu hướng tiếp tục tăng (giảm) trong ngắn hạn.'],
    halo: ['Halo effect', 'Hiệu ứng hào quang', 'Một đặc điểm tốt (công ty tốt) khiến mọi thứ liên quan (cổ phiếu) bị coi là tốt.'],
    homebias: ['Home bias', 'Thiên lệch nội địa', 'Đầu tư quá nhiều vào thị trường trong nước so với tỷ trọng hợp lý.'],
  };

  const practice = [
    { q: 'Phát biểu nào đúng nhất khi so sánh lỗi nhận thức và thiên lệch cảm xúc?', choices: ['Lỗi nhận thức đến từ suy luận hoặc xử lý thông tin sai nên dễ điều chỉnh hơn bằng thông tin và giáo dục.', 'Thiên lệch cảm xúc dễ sửa hơn vì chỉ cần giải thích cho khách hàng hiểu.', 'Hai loại như nhau, đều xử lý tốt nhất bằng cách cung cấp thêm thông tin.'], answer: 0, explain: 'Lỗi nhận thức thường được điều chỉnh (moderate) bằng giáo dục; thiên lệch cảm xúc khó sửa nên thường phải thích nghi (adapt). Phương án \'thiên lệch cảm xúc dễ sửa hơn\' đảo ngược. Phương án \'hai loại như nhau\' bỏ qua khác biệt cốt lõi.' },
    { q: 'Một nhà phân tích dự báo EPS năm tới bằng cách lấy EPS năm nay rồi cộng thêm một chút, dù công ty vừa mất khách hàng lớn nhất. Đây là thiên lệch:', choices: ['Availability', 'Hindsight', 'Anchoring and adjustment'], answer: 2, explain: 'EPS năm nay là mỏ neo, điều chỉnh quá ít trước thông tin mới. Availability là dựa vào thông tin dễ nhớ. Hindsight là "biết từ trước" sau khi sự việc xảy ra.' },
    { q: 'Anh Phong trúng số 50.000 USD và để riêng vào một tài khoản "tiền chơi" để mua cổ phiếu đầu cơ, trong khi tiền lương anh chỉ gửi tiết kiệm. Đây là thiên lệch:', choices: ['Framing', 'Mental accounting', 'Self-control'], answer: 1, explain: 'Đối xử với tiền khác nhau theo nguồn gốc là mental accounting. Framing là phụ thuộc cách trình bày. Self-control là ưu tiên hưởng thụ trước mắt.' },
    { q: 'Nhà đầu tư thường bán ngay cổ phiếu vừa lãi 10% nhưng giữ rất lâu cổ phiếu đang lỗ 40% với hy vọng "về bờ". Thiên lệch chính là:', choices: ['Loss aversion', 'Overconfidence', 'Representativeness'], answer: 0, explain: 'Đây là disposition effect, hệ quả của loss aversion: chốt lỗ quá đau nên né tránh. Overconfidence là đánh giá quá cao khả năng của mình. Representativeness là phân loại theo khuôn mẫu.' },
    { q: 'Chỉ 10% quỹ có kỹ năng thật. Quỹ giỏi thắng thị trường 80% số năm, quỹ không giỏi thắng 50%, các năm độc lập. Một quỹ vừa thắng 3 năm liền. Xác suất quỹ đó giỏi gần nhất với:', choices: ['51,20%', '10,00%', '31,28%'], answer: 2, explain: 'P = 0,1 x 0,512 / (0,1 x 0,512 + 0,9 x 0,125) = 0,0512 / 0,1637 = 31,28%. Lựa chọn 51,20% là P(thắng 3 năm | giỏi), nhầm chiều xác suất. Lựa chọn 10,00% là tỷ lệ nền, bỏ qua bằng chứng. Coi kết quả 3 năm là bằng chứng chắc chắn là representativeness.' },
    { q: 'Thiên lệch nào được chương trình CFA xếp vào nhóm cảm xúc?', choices: ['Framing', 'Status quo', 'Availability'], answer: 1, explain: 'Status quo là thiên lệch cảm xúc. Framing và availability là lỗi xử lý thông tin (nhận thức).' },
    { q: 'Bà Hoa nhất định tự đặt lệnh giao dịch thay vì để nhà quản lý làm, vì tin rằng tự tay bấm lệnh thì kết quả sẽ tốt hơn. Thiên lệch:', choices: ['Illusion of control', 'Endowment', 'Regret aversion'], answer: 0, explain: 'Tin rằng mình tác động được vào kết quả nhiều hơn thực tế là illusion of control. Endowment là định giá cao tài sản đang có. Regret aversion là né quyết định vì sợ hối tiếc.' },
    { q: 'Một khách hàng giàu có mắc thiên lệch cảm xúc mạnh (sợ hối tiếc) và đã nhiều lần không chịu theo danh mục được đề xuất. Cách xử lý phù hợp nhất thường là:', choices: ['Điều chỉnh (moderate) bằng cách giáo dục cho đến khi khách hàng bỏ được thiên lệch.', 'Thích nghi (adapt): điều chỉnh danh mục gần hơn với mong muốn của khách hàng mà vẫn đáp ứng mục tiêu.', 'Bỏ qua thiên lệch và giữ nguyên danh mục tối ưu theo lý thuyết.'], answer: 1, explain: 'Thiên lệch cảm xúc khó sửa, nên thường thích nghi. Khách hàng giàu có khả năng chịu được danh mục kém tối ưu hơn. Điều chỉnh bằng giáo dục phù hợp hơn với lỗi nhận thức. Bỏ qua thiên lệch khiến khách hàng không tuân thủ kế hoạch.' },
    { q: 'Hiện tượng momentum (cổ phiếu vừa tăng tiếp tục tăng ngắn hạn) được giải thích bằng tài chính hành vi chủ yếu là do:', choices: ['Loss aversion khiến nhà đầu tư bán cổ phiếu tăng giá nên giá giảm.', 'Chỉ là phần bù rủi ro hợp lý, không liên quan hành vi.', 'Herding, availability và regret aversion khiến nhà đầu tư đuổi theo cổ phiếu vừa tăng.'], answer: 2, explain: 'Sợ bỏ lỡ, làm theo đám đông và chú ý tới cổ phiếu "nổi" kéo giá tiếp tục theo xu hướng. Phương án loss aversion khiến bán cổ phiếu tăng giá mô tả tác động ngược lại. Phương án \'chỉ là phần bù rủi ro hợp lý\' là cách giải thích truyền thống, không phải hành vi.' },
    { q: 'Giải thích hành vi cho việc cổ phiếu giá trị (value) có lợi suất dài hạn cao hơn cổ phiếu tăng trưởng (growth) là:', choices: ['Halo effect: nhà đầu tư coi công ty tốt là cổ phiếu tốt nên trả giá quá cao cho cổ phiếu tăng trưởng.', 'Home bias: nhà đầu tư thích cổ phiếu trong nước.', 'Mental accounting: nhà đầu tư chia danh mục thành nhiều tầng.'], answer: 0, explain: 'Halo effect (một dạng representativeness) làm cổ phiếu tăng trưởng bị định giá quá cao, lợi suất về sau thấp hơn. Home bias giải thích tập trung nội địa. Mental accounting không liên quan trực tiếp tới value và growth.' },
    { q: "Thiên lệch nào thuộc nhóm lỗi xử lý thông tin (information-processing errors)?", choices: ["Hindsight", "Framing", "Regret aversion"], answer: 1, explain: "Framing (quyết định thay đổi theo cách trình bày thông tin) thuộc nhóm xử lý thông tin, cùng anchoring, mental accounting và availability. Hindsight là lỗi nhận thức nhưng thuộc nhóm bảo thủ niềm tin (belief perseverance). Regret aversion là thiên lệch cảm xúc." },
    { q: "Gốc rễ chung của nhóm thiên lệch bảo thủ niềm tin (belief perseverance) là:", choices: ["Nỗi đau khi lỗ lớn hơn niềm vui khi lãi cùng mức", "Thiếu khả năng tính toán xác suất", "Bất hòa nhận thức: khó chịu khi thông tin mới mâu thuẫn với niềm tin hiện có, nên bám lấy niềm tin cũ"], answer: 2, explain: "Các thiên lệch bảo thủ niềm tin (conservatism, confirmation, representativeness, illusion of control, hindsight) xuất phát từ bất hòa nhận thức (cognitive dissonance). Nỗi đau khi lỗ lớn hơn niềm vui khi lãi mô tả loss aversion, một thiên lệch cảm xúc. Thiếu khả năng tính xác suất có thể góp phần vào một số lỗi, nhưng không phải gốc rễ chung của nhóm này." },
    { q: "Công ty công bố lợi nhuận quý tăng mạnh ngoài dự kiến nhờ hợp đồng dài hạn mới. Nhà phân tích chỉ nâng dự báo rất ít vì \"một quý chưa nói lên điều gì\", dù thông tin là đáng tin cậy. Thiên lệch chính là:", choices: ["Conservatism", "Confirmation", "Availability"], answer: 0, explain: "Conservatism là có thông tin mới đáng tin cậy nhưng cập nhật quan điểm quá chậm. Confirmation là chủ động tìm thông tin ủng hộ và lờ thông tin trái chiều; ở đây nhà phân tích không đi tìm thông tin mà chỉ phản ứng chậm. Availability là đánh giá theo mức dễ nhớ; ở đây vấn đề là cập nhật chậm, không phải đánh giá quá cao thông tin gây ấn tượng." },
    { q: "Anh Khoa rất thích cổ phiếu XYZ. Anh đọc kỹ mọi báo cáo khuyến nghị mua, nhưng bỏ qua các báo cáo cảnh báo về nợ vay tăng nhanh vì cho rằng \"người viết không hiểu công ty\". Thiên lệch chính là:", choices: ["Hindsight", "Confirmation", "Endowment"], answer: 1, explain: "Confirmation: chỉ tìm và tin thông tin ủng hộ quan điểm của mình, lờ thông tin trái chiều; hậu quả thường là tập trung quá mức vào cổ phiếu yêu thích. Hindsight là cho rằng mình đã biết trước kết quả sau khi sự việc xảy ra. Endowment là định giá cao tài sản chỉ vì mình sở hữu; tình huống nhấn mạnh việc chọn lọc thông tin, không phải việc sở hữu." },
    { q: "Sau khi thị trường giảm 30%, chị Ngọc nói \"tôi biết trước mà\" dù trước đó chị vẫn giữ toàn bộ cổ phiếu. Chị cũng trách nhà quản lý quỹ vì \"không thấy điều hiển nhiên\". Hậu quả đầu tư chính của thiên lệch này là:", choices: ["Bán cổ phiếu lãi quá sớm và giữ cổ phiếu lỗ quá lâu", "Bám vào giá mua làm mỏ neo khi quyết định bán", "Đánh giá quá cao khả năng dự báo của bản thân và đánh giá nhà quản lý không công bằng"], answer: 2, explain: "Hindsight (\"tôi biết trước mà\") khiến người ta nhớ lại quá khứ như thể đã dự đoán được, dẫn tới đánh giá quá cao khả năng dự báo và trách nhà quản lý vô lý. Bán lãi sớm, giữ lỗ lâu là hiệu ứng disposition của loss aversion. Bám giá mua làm mỏ neo là anchoring." },
    { q: "Khi được giới thiệu \"danh mục này có 80% khả năng không lỗ trong năm\", khách hàng đồng ý. Khi cùng danh mục được mô tả \"có 20% khả năng lỗ trong năm\", khách hàng từ chối. Thiên lệch chính là:", choices: ["Framing", "Anchoring and adjustment", "Conservatism"], answer: 0, explain: "Hai câu chứa cùng một thông tin, chỉ khác cách trình bày, nhưng dẫn đến quyết định khác nhau: đó là framing. Anchoring là bám vào một con số ban đầu rồi điều chỉnh quá ít. Conservatism là cập nhật chậm khi có thông tin mới; ở đây không có thông tin mới nào." },
    { q: "Ông Long chọn quỹ đầu tư mà ông thấy quảng cáo nhiều nhất trên truyền hình và mạng xã hội, không so sánh phí hay kết quả với các quỹ khác. Thiên lệch chính là:", choices: ["Illusion of control", "Availability", "Self-control"], answer: 1, explain: "Availability: đánh giá và lựa chọn dựa trên mức độ dễ nhớ, dễ nghĩ đến (quỹ được quảng cáo nhiều), không dựa trên phân tích. Illusion of control là tin mình kiểm soát được kết quả. Self-control là ưu tiên hưởng thụ trước mắt hơn mục tiêu dài hạn, không liên quan cách chọn quỹ." },
    { q: "Một nhà đầu tư kết luận nhà quản lý quỹ mới \"rất giỏi\" sau khi quỹ vượt chỉ số trong 2 quý đầu tiên, rồi chuyển toàn bộ tiền sang quỹ này. Thiên lệch chính là:", choices: ["Mental accounting", "Status quo", "Representativeness, cụ thể là bỏ qua cỡ mẫu"], answer: 2, explain: "Kết luận về kỹ năng từ vài quan sát như thể đó là quy luật là bỏ qua cỡ mẫu (sample-size neglect), một dạng của representativeness. Mental accounting là chia tiền vào các tài khoản tâm lý riêng. Status quo là không làm gì; ở đây nhà đầu tư lại hành động mạnh." },
    { q: "Chỉ 20% quỹ có kỹ năng thật. Quỹ giỏi thắng thị trường 70% số năm, quỹ không giỏi thắng 50%, các năm độc lập. Một quỹ vừa thắng thị trường 4 năm liền. Xác suất quỹ đó giỏi gần nhất với:", choices: ["48,99%", "24,01%", "20,00%"], answer: 0, explain: "P(thắng 4 năm | giỏi) = 0,7⁴ = 0,2401; P(thắng 4 năm | không giỏi) = 0,5⁴ = 0,0625. P(giỏi | thắng) = 0,2 x 0,2401/(0,2 x 0,2401 + 0,8 x 0,0625) = 0,04802/0,09802 = 48,99%. Lựa chọn 24,01% là P(thắng 4 năm | giỏi), nhầm chiều xác suất có điều kiện. Lựa chọn 20,00% là tỷ lệ nền, bỏ qua bằng chứng 4 năm thắng." },
    { q: "Nhà đầu tư chia tài sản thành ba tầng riêng: \"an toàn\", \"thu nhập\" và \"tăng trưởng\", mỗi tầng được quản lý độc lập. Hậu quả đáng lo ngại nhất của cách làm này là:", choices: ["Danh mục luôn có rủi ro thấp hơn danh mục tối ưu", "Bỏ qua tương quan giữa các tầng nên danh mục tổng thể có thể kém hiệu quả", "Nhà đầu tư không thể đáp ứng nhu cầu thanh khoản"], answer: 1, explain: "Mental accounting khiến nhà đầu tư nhìn từng tầng riêng lẻ mà bỏ qua tương quan giữa chúng, trong khi rủi ro danh mục phụ thuộc vào tương quan, nên tổng thể có thể nằm dưới đường biên hiệu quả. Phương án \"luôn có rủi ro thấp hơn\" sai: chia tầng không bảo đảm rủi ro thấp hơn. Phương án về thanh khoản sai: tầng \"an toàn\" thường lại đáp ứng tốt nhu cầu thanh khoản." },
    { q: "Trò chơi tung đồng xu: ngửa được 200 USD, sấp mất 120 USD. Giả sử nỗi đau khi lỗ gấp 2,25 lần niềm vui khi lãi cùng mức. Giá trị cảm nhận của trò chơi gần nhất với:", choices: ["+40 USD", "-20 USD", "-35 USD"], answer: 2, explain: "Giá trị cảm nhận = 0,5 x 200 - 0,5 x 2,25 x 120 = 100 - 135 = -35 USD, nên người ngại lỗ từ chối dù trò chơi có lợi. Lựa chọn +40 USD là giá trị kỳ vọng (0,5 x 200 - 0,5 x 120), cách nhìn của người lý trí trung tính rủi ro. Lựa chọn -20 USD dùng hệ số 2 thay cho 2,25." },
    { q: "Anh Quân 45 tuổi, nhiều năm chi tiêu gần hết thu nhập cho du lịch và xe mới, nay nhận ra tiết kiệm hưu trí quá ít nên dồn tiền vào cổ phiếu đầu cơ để \"bắt kịp\". Thiên lệch chính là:", choices: ["Self-control", "Endowment", "Hindsight"], answer: 0, explain: "Self-control: ưu tiên hưởng thụ trước mắt hơn mục tiêu dài hạn, dẫn đến tiết kiệm không đủ rồi chấp nhận rủi ro cao để bù. Endowment là định giá cao tài sản mình đang sở hữu. Hindsight là cho rằng mình đã biết trước kết quả; không liên quan đến thói quen tiết kiệm." },
    { q: "Một nhân viên giữ nguyên phân bổ mặc định 100% quỹ thị trường tiền tệ trong tài khoản hưu trí suốt 15 năm vì \"thay đổi thì phiền\". Thiên lệch chính là:", choices: ["Regret aversion", "Status quo", "Loss aversion"], answer: 1, explain: "Lý do \"thay đổi thì phiền\" cho thấy quán tính: không làm gì, giữ nguyên hiện trạng, đó là status quo. Regret aversion là né quyết định vì sợ hối tiếc nếu kết quả xấu (\"lỡ đổi xong lại lỗ thì sao\"). Loss aversion liên quan đến cảm nhận lãi lỗ so với điểm tham chiếu, không phải quán tính với lựa chọn mặc định." },
    { q: "Bà Liên được thừa kế một lô cổ phiếu ngân hàng chiếm 60% tài sản. Bà từ chối bán bớt để đa dạng hóa vì \"đây là cổ phiếu mẹ tôi để lại, nó đáng giá hơn mức thị trường trả\". Thiên lệch chính là:", choices: ["Availability", "Illusion of control", "Endowment"], answer: 2, explain: "Endowment: định giá tài sản mình sở hữu cao hơn giá thị trường chỉ vì đó là của mình (nhất là tài sản thừa kế). Availability là đánh giá theo mức dễ nhớ của thông tin. Illusion of control là tin mình kiểm soát được kết quả; bà Liên không tin mình điều khiển được giá, mà gắn bó với tài sản." },
    { q: "Sau khi lỗ nặng với một cổ phiếu năm ngoái, chị Trang để toàn bộ tiền ở tiền gửi và chỉ mua những cổ phiếu mà \"ai cũng đang mua\", vì nếu có sai thì cũng sai cùng mọi người. Thiên lệch chính là:", choices: ["Regret aversion", "Overconfidence", "Conservatism"], answer: 0, explain: "Regret aversion: né tránh quyết định vì sợ hối tiếc, dẫn đến quá thận trọng sau thua lỗ và chạy theo đám đông (herding) vì \"sai cùng mọi người thì đỡ tiếc\". Overconfidence sẽ dẫn đến giao dịch nhiều và tập trung, ngược với tình huống. Conservatism là cập nhật chậm khi có thông tin mới, không giải thích hành vi theo đám đông." },
    { q: "Một nhà phân tích nói chắc 90% giá cổ phiếu cuối năm sẽ nằm trong khoảng 48 - 52 nghìn đồng, nhưng qua nhiều năm khoảng dự báo kiểu này chỉ đúng khoảng 55% số lần. Anh cho rằng các lần đúng là nhờ năng lực, các lần sai là do thị trường bất thường. Các thiên lệch thể hiện rõ nhất là:", choices: ["Anchoring và framing", "Dự báo quá tự tin (prediction overconfidence) và thiên lệch quy công (self-attribution)", "Loss aversion và status quo"], answer: 1, explain: "Khoảng dự báo quá hẹp so với độ chính xác thực tế (90% so với 55%) là dự báo quá tự tin; quy thành công cho năng lực và thất bại cho hoàn cảnh là self-attribution, thứ nuôi dưỡng overconfidence. Anchoring và framing liên quan đến mỏ neo con số và cách trình bày thông tin. Loss aversion và status quo liên quan đến cảm nhận lỗ và quán tính, không phải độ rộng khoảng dự báo." },
    { q: "Một khách hàng có tài sản trung bình mắc thiên lệch nhận thức (bỏ qua tỷ lệ nền khi chọn quỹ). Cách xử lý phù hợp nhất thường là:", choices: ["Thích nghi (adapt): xây danh mục theo đúng lựa chọn của khách hàng", "Không cần xử lý vì thiên lệch nhận thức không ảnh hưởng đến kết quả đầu tư", "Điều chỉnh (moderate): cung cấp thông tin và giáo dục để khách hàng giảm thiên lệch"], answer: 2, explain: "Lỗi nhận thức đến từ xử lý thông tin sai nên dễ sửa hơn bằng thông tin, giáo dục: cách thường dùng là điều chỉnh (moderate). Thích nghi phù hợp hơn với thiên lệch cảm xúc mạnh, nhất là ở khách hàng giàu có. Phương án \"không cần xử lý\" sai vì thiên lệch nhận thức có thể khiến khách hàng chọn quỹ kém hoặc danh mục không phù hợp." },
    { q: "Giải thích hành vi nào phù hợp nhất cho giai đoạn hình thành và sụp đổ của bong bóng giá?", choices: ["Nhà đầu tư lý trí định giá đúng giá trị cơ bản ở mọi thời điểm, sụp đổ chỉ do tin tức bất ngờ", "Overconfidence, confirmation và self-attribution khi giá tăng; khi đảo chiều, loss aversion và hoảng loạn làm giá sụp nhanh, còn disposition effect làm chậm việc chốt lỗ", "Mental accounting khiến nhà đầu tư bán hết tài sản rủi ro ngay khi giá vượt giá trị cơ bản"], answer: 1, explain: "Khi giá tăng, nhà đầu tư quá tự tin, chỉ tìm tin ủng hộ và quy lợi nhuận cho năng lực; herding và regret aversion kéo thêm người vào. Khi đảo chiều, loss aversion và hoảng loạn làm giá sụp nhanh, trong khi disposition effect khiến nhiều người chậm chốt lỗ. Phương án \"nhà đầu tư lý trí\" là quan điểm tài chính truyền thống, không giải thích được giá vượt xa giá trị cơ bản. Phương án mental accounting sai vì nếu nhà đầu tư bán ngay khi giá vượt giá trị cơ bản thì bong bóng đã không hình thành." },
    { q: "Nhà đầu tư ở một nước có vốn hóa chỉ chiếm 2% thị trường toàn cầu nhưng đặt 90% danh mục cổ phiếu vào thị trường trong nước. Giải thích hành vi phù hợp nhất là:", choices: ["Halo effect khiến nhà đầu tư trả giá quá cao cho cổ phiếu tăng trưởng", "Hindsight khiến nhà đầu tư cho rằng đã dự đoán đúng thị trường nước ngoài", "Home bias, xuất phát từ cảm giác quen thuộc, ảo tưởng kiểm soát và quá tự tin về hiểu biết thị trường nhà"], answer: 2, explain: "Đầu tư quá nhiều vào thị trường trong nước so với tỷ trọng toàn cầu là home bias, được giải thích bằng sự quen thuộc, cảm giác kiểm soát và overconfidence về hiểu biết thị trường nhà. Halo effect giải thích chênh lệch giữa cổ phiếu giá trị và tăng trưởng. Hindsight là cho rằng mình đã biết trước kết quả, không giải thích việc thiên về thị trường trong nước." },
    { q: "Một nghiên cứu phát hiện chiến lược mua cổ phiếu vào thứ Hai đầu tháng cho lợi suất vượt trội trong 10 năm. Nhận định thận trọng nhất về \"bất thường thị trường\" này là:", choices: ["Đây chắc chắn là bằng chứng thị trường không hiệu quả và sẽ tiếp tục sinh lời", "Kết quả có thể do đào bới dữ liệu, có thể biến mất sau khi được công bố, hoặc là bù đắp cho một rủi ro chưa được đo", "Mọi bất thường đều được giải thích đầy đủ bằng một thiên lệch hành vi duy nhất"], answer: 1, explain: "Nhiều \"bất thường\" chỉ là kết quả của đào bới dữ liệu (data mining), biến mất khi được công bố và khai thác, hoặc thực chất là phần bù cho rủi ro mà mô hình chưa đo được. Phương án \"chắc chắn sẽ tiếp tục sinh lời\" bỏ qua các khả năng đó. Phương án \"một thiên lệch duy nhất\" sai: các hiện tượng thị trường thường do nhiều thiên lệch cộng dồn, và không phải bất thường nào cũng có nguồn gốc hành vi." },
  ];

  window.LESSONS['PC-05'] = {
    moduleId: 'PC-05',
    calculator: 'Không cần máy tính',
    warmup: [
      'Ở PC-04, willingness và ability khác nhau thế nào? Cái nào chịu ảnh hưởng của cảm xúc?',
      'Bạn đã bao giờ không chịu bán một cổ phiếu đang lỗ vì "chưa bán thì chưa lỗ"? Vì sao?',
      'Tài chính truyền thống giả định nhà đầu tư như thế nào khi xử lý thông tin?',
    ],
    sections,
    glossary,
    practice,
    widgets: {},
    slides: [],
    wrapup: [
      'Viết tên 9 lỗi nhận thức (chia 2 nhóm) và 6 thiên lệch cảm xúc mà không nhìn tài liệu.',
      'Phân biệt status quo, endowment và regret aversion bằng một ví dụ của bạn.',
      'Chọn một hiện tượng thị trường và giải thích nó bằng 2 thiên lệch.',
    ],
  };
}());
