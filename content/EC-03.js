// Bài giảng EC-03 - Fiscal Policy (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t, frac } = window.CFAH;

  const sections = [
    {
      title: '1. Bức tranh lớn',
      minutes: 4,
      html: `
<p>EC-02 cho thấy nền kinh tế dao động theo chu kỳ. Hai công cụ chính để làm phẳng chu kỳ là ${t('fiscal', 'chính sách tài khóa (fiscal policy)')} của chính phủ và ${t('monetary', 'chính sách tiền tệ (monetary policy)')} của ngân hàng trung ương. Module này bàn về công cụ thứ nhất.</p>
<div class="key">Chính sách tài khóa = chính phủ dùng <b>chi tiêu (G)</b> và <b>thuế (T)</b> để tác động tới tổng cầu, phân phối thu nhập và phân bổ nguồn lực. Câu hỏi thi quan trọng nhất: một chính sách là <b>mở rộng hay thắt chặt</b>, và vì sao nó có thể <b>không hiệu quả</b>.</div>
<p>Bốn LOS của module:</p>
<ol>
  <li>So sánh chính sách tài khóa và tiền tệ. Ứng với LOS 1 (phần 2).</li>
  <li>Vai trò, mục tiêu của tài khóa; nợ công so với GDP có đáng lo không. Ứng với LOS 2 (phần 3, 4).</li>
  <li>Công cụ tài khóa và ưu nhược điểm. Ứng với LOS 3 (phần 5, 6).</li>
  <li>Triển khai, khó khăn, và cách nhận biết chính sách mở rộng hay thắt chặt. Ứng với LOS 4 (phần 7).</li>
</ol>`,
    },
    {
      title: '2. Chính sách tài khóa và chính sách tiền tệ',
      minutes: 8,
      html: `
<table class="plain"><thead><tr><th></th><th>Tài khóa</th><th>Tiền tệ</th></tr></thead><tbody>
<tr><td>Ai thực hiện</td><td>Chính phủ và quốc hội</td><td>Ngân hàng trung ương</td></tr>
<tr><td>Công cụ</td><td>Chi tiêu chính phủ, thuế, chuyển giao</td><td>Lãi suất chính sách, nghiệp vụ thị trường mở, dự trữ bắt buộc</td></tr>
<tr><td>Mở rộng</td><td>Tăng G, giảm T: thâm hụt tăng (hoặc thặng dư giảm)</td><td>Tăng cung tiền, giảm lãi suất</td></tr>
<tr><td>Thắt chặt</td><td>Giảm G, tăng T: thâm hụt giảm (hoặc thặng dư tăng)</td><td>Giảm cung tiền, tăng lãi suất</td></tr>
<tr><td>Thế mạnh</td><td>Nhắm được ngành, nhóm dân cư cụ thể; phân phối lại thu nhập; tác động trực tiếp lên tổng cầu (G là một phần của GDP)</td><td>Quyết định nhanh, điều chỉnh liên tục, ít phụ thuộc chính trị</td></tr>
<tr><td>Điểm yếu</td><td>Quy trình lập pháp chậm, chịu áp lực chính trị</td><td>Công cụ "thô", tác động lan tỏa toàn nền kinh tế; khó nhắm từng nhóm</td></tr>
</tbody></table>
<p>${t('budget', 'Cán cân ngân sách')} = T - G. G &gt; T: ${t('deficit', 'thâm hụt ngân sách')}; G &lt; T: thặng dư; G = T: cân bằng.</p>
<div class="formula">(G - T) = (S - I) - (X - M)</div>
<p>Đẳng thức này (từ cách tính GDP theo chi tiêu và theo thu nhập) cho biết: thâm hụt ngân sách phải được tài trợ bằng tiết kiệm tư nhân dư thừa (S &gt; I) và/hoặc thâm hụt thương mại (vay nước ngoài).</p>
<p class="tip">Hai chính sách không độc lập: tác động phối hợp của chúng được bàn ở cuối EC-04.</p>`,
    },
    {
      title: '3. Vai trò và mục tiêu của chính sách tài khóa',
      minutes: 9,
      html: `
<h4>Ba mục tiêu</h4>
<ol>
<li><b>Ổn định kinh tế:</b> tác động lên tổng cầu để giảm biến động sản lượng, việc làm, giá cả.</li>
<li><b>Phân phối lại</b> thu nhập và của cải giữa các nhóm dân cư (thuế lũy tiến, trợ cấp xã hội). Đây là việc chính sách tiền tệ gần như không làm được.</li>
<li><b>Phân bổ nguồn lực</b> giữa các ngành, khu vực (ưu đãi thuế, trợ giá, đầu tư hạ tầng, giáo dục).</li>
</ol>
<h4>Chủ động và tự động</h4>
<table class="plain"><thead><tr><th></th><th>${t('discretionary', 'Chính sách chủ động (discretionary)')}</th><th>${t('stabilizer', 'Bộ ổn định tự động (automatic stabilizers)')}</th></tr></thead><tbody>
<tr><td>Cơ chế</td><td>Chính phủ quyết định thay đổi chi tiêu, thuế</td><td>Tự điều chỉnh theo trạng thái nền kinh tế, không cần quyết định mới</td></tr>
<tr><td>Ví dụ</td><td>Gói kích thích, giảm thuế VAT tạm thời</td><td>Thuế thu nhập lũy tiến, trợ cấp thất nghiệp, trợ cấp xã hội</td></tr>
<tr><td>Trong suy thoái</td><td>Phải chờ nhận ra vấn đề và thông qua</td><td>Thu thuế tự giảm, chi trợ cấp tự tăng → thâm hụt tăng ngay</td></tr>
</tbody></table>
<p class="warn"><b>Bẫy:</b> trong suy thoái thâm hụt ngân sách tăng chủ yếu do bộ ổn định tự động. Thâm hụt tăng <b>không chứng tỏ</b> chính phủ đang chủ động nới lỏng. Phần 7 sẽ dùng thâm hụt cơ cấu để tách hai phần này.</p>`,
    },
    {
      title: '4. Nợ công so với GDP có đáng lo không?',
      minutes: 12,
      html: `
<p>Thâm hụt được tài trợ bằng vay nợ, nên thâm hụt kéo dài làm tăng ${t('debtratio', 'tỷ lệ nợ công/GDP')}. Tỷ lệ này tăng hay giảm phụ thuộc chủ yếu vào so sánh giữa <b>lãi suất thực trên nợ (r)</b> và <b>tốc độ tăng GDP thực (g)</b>:</p>
<div class="formula">d<sub>1</sub> = d<sub>0</sub> × ${frac('1 + r', '1 + g')} - cán cân ngân sách sơ cấp (% GDP)</div>
<p>${t('primary', 'Cán cân sơ cấp (primary balance)')} là cán cân ngân sách chưa tính chi trả lãi vay. Khi cán cân sơ cấp bằng 0: r &gt; g thì tỷ lệ nợ tăng; r &lt; g thì tỷ lệ nợ giảm dần.</p>
<div class="example"><div class="ex-h">Ví dụ 4.1</div>
<p>Nợ công bằng 60% GDP, lãi suất thực trên nợ 4%, GDP thực tăng 1,5%/năm. Tỷ lệ nợ sau 1 năm là bao nhiêu nếu (a) cán cân sơ cấp bằng 0; (b) thặng dư sơ cấp 1% GDP? (c) Nếu r = 2%, g = 3% và cán cân sơ cấp bằng 0?</p>
<details><summary>Xem lời giải</summary><p>(a) 60% × 1,04/1,015 = <b>61,48%</b>.<br>(b) 61,48% - 1% = <b>60,48%</b>: cần thặng dư sơ cấp mới giữ được tỷ lệ nợ gần như không đổi.<br>(c) 60% × 1,02/1,03 = <b>59,42%</b>: tăng trưởng nhanh hơn lãi suất giúp tỷ lệ nợ tự giảm.</p></details></div>
<table class="plain"><thead><tr><th>Lý do NÊN lo ngại</th><th>Lý do KHÔNG nên quá lo</th></tr></thead><tbody>
<tr><td>Nợ cao → thuế tương lai cao → giảm động lực làm việc, kinh doanh → tăng trưởng dài hạn thấp hơn</td><td>Nợ do chính công dân trong nước nắm giữ: một phần là chuyển giao trong nội bộ nền kinh tế</td></tr>
<tr><td>Nhà đầu tư mất niềm tin → khó đảo nợ → nguy cơ vỡ nợ hoặc phải in tiền (lạm phát)</td><td>Vay để đầu tư dự án sinh lời (hạ tầng, giáo dục): lợi ích tương lai trả được nợ</td></tr>
<tr><td>Chính phủ vay nhiều đẩy lãi suất lên → đầu tư tư nhân giảm (${t('crowding', 'chèn lấn - crowding out')})</td><td>Cải cách thuế có thể tăng thu ngân sách</td></tr>
<tr><td></td><td>Tiết kiệm tư nhân có thể tăng bù cho vay nợ chính phủ (Ricardian)</td></tr>
<tr><td></td><td>Khi nền kinh tế dưới mức toàn dụng, thâm hụt giúp tăng sản lượng và việc làm</td></tr>
</tbody></table>`,
    },
    {
      title: '5. Công cụ tài khóa: chi và thu',
      minutes: 10,
      html: `
<h4>Công cụ chi tiêu</h4>
<table class="plain"><thead><tr><th>Loại</th><th>Nội dung</th></tr></thead><tbody>
<tr><td>${t('transfer', 'Chi chuyển giao (transfer payments)')}</td><td>Lương hưu, trợ cấp thất nghiệp, an sinh. Không phải mua hàng hóa dịch vụ nên <b>không tính trực tiếp vào G trong GDP</b>; dùng để phân phối lại thu nhập</td></tr>
<tr><td>Chi thường xuyên (current spending)</td><td>Mua hàng hóa, dịch vụ định kỳ: lương công chức, y tế, giáo dục, quốc phòng</td></tr>
<tr><td>Chi đầu tư (capital spending)</td><td>Hạ tầng (đường, cầu, sân bay), bệnh viện, trường học; tác động kéo dài nhiều năm</td></tr>
</tbody></table>
<p>Lý do chính phủ chi tiêu: cung cấp ${t('publicgood', 'hàng hóa công')} mà tư nhân không cung cấp đủ (quốc phòng, đèn đường), hạ tầng, hỗ trợ nghiên cứu và giáo dục (có ngoại ứng tích cực), phân phối lại thu nhập, và ổn định tổng cầu.</p>
<h4>Công cụ thu</h4>
<ul>
<li>${t('direct', 'Thuế trực thu (direct taxes)')}: đánh vào thu nhập, của cải, lợi nhuận: thuế thu nhập cá nhân, thuế thu nhập doanh nghiệp, thuế tài sản, thuế thừa kế, đóng góp an sinh.</li>
<li>${t('indirect', 'Thuế gián thu (indirect taxes)')}: đánh vào hàng hóa dịch vụ: VAT, thuế tiêu thụ đặc biệt (rượu, thuốc lá, xăng), thuế nhập khẩu.</li>
</ul>
<h4>Bốn tiêu chí của một hệ thống thuế tốt</h4>
<table class="plain"><thead><tr><th>Tiêu chí</th><th>Ý nghĩa</th></tr></thead><tbody>
<tr><td>Đơn giản (simplicity)</td><td>Dễ tuân thủ, dễ quản lý thu</td></tr>
<tr><td>Hiệu quả (efficiency)</td><td>Ít làm méo quyết định kinh tế (làm việc, tiết kiệm, đầu tư)</td></tr>
<tr><td>Công bằng (fairness)</td><td>${t('horizontal', 'Công bằng ngang')}: người hoàn cảnh như nhau nộp như nhau. ${t('vertical', 'Công bằng dọc')}: người thu nhập cao nộp nhiều hơn</td></tr>
<tr><td>Đủ thu (revenue sufficiency)</td><td>Thu đủ cho nhu cầu chi tiêu; mâu thuẫn được với tiêu chí hiệu quả</td></tr>
</tbody></table>
<h4>Ưu nhược điểm của các công cụ</h4>
<table class="plain"><thead><tr><th>Công cụ</th><th>Ưu điểm</th><th>Nhược điểm</th></tr></thead><tbody>
<tr><td>Thuế gián thu</td><td>Điều chỉnh được gần như ngay; tác động nhanh tới chi tiêu; thu được nhiều với chi phí quản lý thấp; định hướng hành vi (giảm tiêu dùng thuốc lá, rượu)</td><td>Mang tính lũy thoái (người nghèo chịu tỷ lệ cao hơn trên thu nhập)</td></tr>
<tr><td>Thuế trực thu và chi chuyển giao</td><td>Phân phối lại thu nhập, nhắm được nhóm đối tượng</td><td>Cần nhiều thời gian để ban hành và triển khai</td></tr>
<tr><td>Chi đầu tư (dự án lớn)</td><td>Nâng năng lực sản xuất dài hạn (tác động cả phía cung)</td><td>Lập kế hoạch và triển khai rất lâu; có thể tác động khi chu kỳ đã đổi chiều</td></tr>
</tbody></table>`,
    },
    {
      title: '6. Số nhân tài khóa và Ricardian equivalence',
      minutes: 12,
      html: `
<p>Một đồng chi tiêu của chính phủ trở thành thu nhập của người khác, người đó nộp thuế, tiêu một phần, phần tiêu lại thành thu nhập của người tiếp theo... Tổng tác động lên tổng cầu lớn hơn khoản chi ban đầu: đó là ${t('multiplier', 'số nhân tài khóa (fiscal multiplier)')}.</p>
<div class="formula">Số nhân = ${frac('1', '1 - MPC × (1 - t)')}</div>
<p>${t('mpc', 'MPC')} là xu hướng tiêu dùng cận biên (phần thu nhập khả dụng tăng thêm được tiêu), t là thuế suất. MPC càng cao, t càng thấp thì số nhân càng lớn.</p>
<div class="example"><div class="ex-h">Ví dụ 6.1</div>
<p>MPC = 0,8, t = 20%. Chính phủ tăng chi 100. Tác động lên tổng cầu?</p>
<details><summary>Xem lời giải</summary>
<p>Vòng 1: người nhận có thu nhập khả dụng 100 × 0,8 = 80, tiêu 80 × 0,8 = 64. Vòng 2: thu nhập khả dụng 64 × 0,8 = 51,2, tiêu 40,96... Mỗi vòng nhân thêm 0,8 × 0,8 = 0,64.</p>
<p>Số nhân = 1 / (1 - 0,8 × 0,8) = 1 / 0,36 = <b>2,78</b>. Tổng cầu tăng 100 × 2,78 = <b>277,78</b>.</p></details></div>
<h4>Số nhân ngân sách cân bằng (balanced budget multiplier)</h4>
<p>Nếu chính phủ tăng chi 100 và đồng thời tăng thuế (dạng một khoản cố định) 100 để giữ ngân sách cân bằng, tổng cầu vẫn <b>tăng</b>: toàn bộ 100 chi tiêu đi vào nền kinh tế, còn 100 tiền thuế chỉ làm giảm tiêu dùng MPC × 100 (phần còn lại lẽ ra được tiết kiệm).</p>
<div class="example"><div class="ex-h">Ví dụ 6.2</div>
<p>Cùng MPC = 0,8, t = 20%. Chính phủ tăng chi 100 và tăng thuế 100.</p>
<details><summary>Xem lời giải</summary><p>Tác động của chi: +100 × 2,78 = +277,78. Tác động của thuế: -0,8 × 100 × 2,78 = -222,22. Ròng: <b>+55,56</b>. Muốn tác động ròng của thuế triệt tiêu hoàn toàn chi tiêu, thuế phải tăng 100 / 0,8 = 125.</p></details></div>
<h4>${t('ricardian', 'Ricardian equivalence')}</h4>
<p>Lập luận: nếu chính phủ giảm thuế hôm nay và vay nợ để bù, người dân dự đoán thuế tương lai sẽ tăng để trả nợ. Họ <b>tiết kiệm toàn bộ</b> phần giảm thuế để chuẩn bị, nên tiêu dùng và tổng cầu <b>không đổi</b>: chính sách tài khóa mất tác dụng.</p>
<p>Thực tế equivalence không hoàn toàn đúng vì: người dân không nhìn xa đến vậy, bị giới hạn vay mượn, hoặc nghĩ thế hệ sau mới phải trả. Mức độ đúng của nó càng cao thì số nhân thực tế càng nhỏ.</p>
<h4>Thử ngay: số nhân tài khóa</h4>
<div class="widget" data-widget="multiplier"></div>`,
    },
    {
      title: '7. Triển khai chính sách và các khó khăn',
      minutes: 14,
      html: `
<h4>Mở rộng hay thắt chặt? Nhìn thâm hụt cơ cấu</h4>
<p>Thâm hụt thực tế lẫn cả tác động của chu kỳ (bộ ổn định tự động). Để đánh giá lập trường chủ động của chính phủ, dùng ${t('structural', 'thâm hụt cơ cấu (structural / cyclically adjusted budget deficit)')}: thâm hụt ước tính nếu nền kinh tế ở mức toàn dụng.</p>
<div class="key">Thâm hụt cơ cấu <b>tăng</b> → chính sách tài khóa <b>mở rộng</b>.<br>Thâm hụt cơ cấu <b>giảm</b> (hoặc thặng dư cơ cấu tăng) → chính sách <b>thắt chặt</b>.<br>Chỉ nhìn thay đổi của thâm hụt thực tế có thể dẫn đến kết luận sai.</div>
<div class="example"><div class="ex-h">Ví dụ 7.1</div>
<p>Năm 1 nền kinh tế ở mức tiềm năng, thâm hụt 2% GDP. Năm 2 suy thoái, thâm hụt thực tế lên 5% GDP; ước tính 3 điểm phần trăm là do thu thuế giảm và trợ cấp thất nghiệp tăng tự động. Lập trường tài khóa năm 2?</p>
<details><summary>Xem lời giải</summary><p>Thâm hụt cơ cấu năm 2 = 5% - 3% = 2%, bằng năm 1. Lập trường chủ động <b>trung tính</b>: chính phủ chưa thực sự kích thích, dù thâm hụt thực tế tăng mạnh. Nếu phần do chu kỳ chỉ là 2 điểm, thâm hụt cơ cấu lên 3%: <b>mở rộng</b>.</p></details></div>
<h4>Ba độ trễ</h4>
<table class="plain"><thead><tr><th>Độ trễ</th><th>Ý nghĩa</th></tr></thead><tbody>
<tr><td>${t('recoglag', 'Recognition lag')}</td><td>Thời gian để nhận ra nền kinh tế cần can thiệp (số liệu công bố chậm, còn điều chỉnh lại)</td></tr>
<tr><td>${t('actionlag', 'Action lag')}</td><td>Thời gian để soạn, tranh luận, thông qua và bắt đầu thực hiện</td></tr>
<tr><td>${t('impactlag', 'Impact lag')}</td><td>Thời gian để biện pháp thực sự tác động lên nền kinh tế</td></tr>
</tbody></table>
<p>Tổng các độ trễ có thể khiến biện pháp kích thích phát huy tác dụng đúng lúc kinh tế đã tự phục hồi, làm chu kỳ dao động mạnh hơn.</p>
<h4>Các khó khăn khác</h4>
<ul>
<li><b>Dự báo sai</b> trạng thái nền kinh tế, hoặc <b>đọc sai số liệu</b> (ví dụ nhầm thất nghiệp tự nhiên cao là thất nghiệp chu kỳ).</li>
<li><b>Chèn lấn (crowding out):</b> vay nợ đẩy lãi suất lên, đầu tư tư nhân giảm, làm giảm hiệu quả kích thích.</li>
<li><b>Hạn chế phía cung:</b> nếu tăng trưởng chậm do thiếu lao động, vốn, công nghệ chứ không do thiếu cầu, kích cầu chỉ gây lạm phát.</li>
<li><b>Giới hạn thâm hụt:</b> nợ đã cao thì không còn dư địa; thị trường có thể phạt bằng lãi suất cao.</li>
<li><b>Nhiều mục tiêu mâu thuẫn:</b> thất nghiệp cao đi kèm lạm phát cao (đình lạm) thì kích cầu làm lạm phát tệ hơn, thắt chặt làm thất nghiệp tệ hơn.</li>
<li><b>Yếu tố chính trị:</b> chính sách có thể theo chu kỳ bầu cử hơn là chu kỳ kinh tế.</li>
<li><b>Ricardian equivalence</b> (phần 6) làm số nhân nhỏ hơn dự kiến.</li>
</ul>`,
    },
    {
      title: '8. Tóm tắt và bẫy thường gặp',
      minutes: 6,
      html: `
<table class="plain"><thead><tr><th>Tình huống</th><th>Nhớ</th></tr></thead><tbody>
<tr><td>Mở rộng / thắt chặt</td><td>Theo thay đổi của <b>thâm hụt cơ cấu</b>, không phải thâm hụt thực tế</td></tr>
<tr><td>Bộ ổn định tự động</td><td>Thuế lũy tiến, trợ cấp thất nghiệp; không cần quyết định mới</td></tr>
<tr><td>Tỷ lệ nợ/GDP</td><td>r &gt; g: tăng; r &lt; g: giảm (khi cán cân sơ cấp = 0)</td></tr>
<tr><td>Số nhân</td><td>1 / [1 - MPC(1 - t)]; MPC cao, t thấp → số nhân lớn</td></tr>
<tr><td>Ngân sách cân bằng</td><td>Tăng G và T bằng nhau vẫn làm tổng cầu tăng</td></tr>
<tr><td>Ricardian</td><td>Giảm thuế bằng vay nợ → dân tiết kiệm hết → tổng cầu không đổi</td></tr>
<tr><td>Thuế gián thu</td><td>Điều chỉnh nhanh nhất; chi đầu tư chậm nhất</td></tr>
<tr><td>Chi chuyển giao</td><td>Không tính trực tiếp vào G trong GDP</td></tr>
<tr><td>Độ trễ</td><td>Recognition → action → impact</td></tr>
</tbody></table>
<p>Tiếp theo: tab <b>Luyện tập</b> 10 câu. Module sau EC-04: chính sách tiền tệ và sự phối hợp với tài khóa.</p>`,
    },
  ];

  const glossary = {
    fiscal: ['Fiscal policy', 'Chính sách tài khóa', 'Chính phủ dùng chi tiêu và thuế để tác động tới hoạt động kinh tế.'],
    monetary: ['Monetary policy', 'Chính sách tiền tệ', 'Ngân hàng trung ương điều chỉnh tiền và tín dụng, lãi suất để tác động tới hoạt động kinh tế.'],
    budget: ['Budget balance', 'Cán cân ngân sách', 'Thu thuế trừ chi tiêu chính phủ (T - G).'],
    deficit: ['Budget deficit', 'Thâm hụt ngân sách', 'Chi tiêu chính phủ lớn hơn thu (G > T).'],
    discretionary: ['Discretionary fiscal policy', 'Chính sách tài khóa chủ động', 'Thay đổi chi tiêu, thuế do chính phủ quyết định nhằm ổn định kinh tế.'],
    stabilizer: ['Automatic stabilizers', 'Bộ ổn định tự động', 'Khoản thu chi tự điều chỉnh ngược chu kỳ mà không cần quyết định mới (thuế lũy tiến, trợ cấp thất nghiệp).'],
    debtratio: ['Debt-to-GDP ratio', 'Tỷ lệ nợ công/GDP', 'Tổng nợ chính phủ chia GDP.'],
    primary: ['Primary budget balance', 'Cán cân ngân sách sơ cấp', 'Cán cân ngân sách không tính chi trả lãi vay.'],
    crowding: ['Crowding-out effect', 'Hiệu ứng chèn lấn', 'Chính phủ vay nhiều đẩy lãi suất lên, làm giảm đầu tư tư nhân.'],
    transfer: ['Transfer payments', 'Chi chuyển giao', 'Khoản chính phủ trả cho cá nhân không đổi lấy hàng hóa dịch vụ (lương hưu, trợ cấp).'],
    publicgood: ['Public goods', 'Hàng hóa công', 'Hàng hóa không loại trừ và không cạnh tranh trong sử dụng, như quốc phòng.'],
    direct: ['Direct taxes', 'Thuế trực thu', 'Thuế đánh vào thu nhập, lợi nhuận, của cải.'],
    indirect: ['Indirect taxes', 'Thuế gián thu', 'Thuế đánh vào hàng hóa dịch vụ: VAT, tiêu thụ đặc biệt, thuế nhập khẩu.'],
    horizontal: ['Horizontal equity', 'Công bằng ngang', 'Người có hoàn cảnh như nhau nộp thuế như nhau.'],
    vertical: ['Vertical equity', 'Công bằng dọc', 'Người có thu nhập cao hơn nộp thuế nhiều hơn.'],
    multiplier: ['Fiscal multiplier', 'Số nhân tài khóa', 'Mức tăng tổng cầu trên mỗi đồng chi tiêu chính phủ tăng thêm: 1/[1 - MPC(1 - t)].'],
    mpc: ['Marginal propensity to consume (MPC)', 'Xu hướng tiêu dùng cận biên', 'Phần thu nhập khả dụng tăng thêm được dùng để tiêu dùng.'],
    ricardian: ['Ricardian equivalence', 'Tương đương Ricardo', 'Người dân tiết kiệm phần giảm thuế để trả thuế tương lai, nên giảm thuế bằng vay nợ không làm tăng tổng cầu.'],
    structural: ['Structural (cyclically adjusted) budget deficit', 'Thâm hụt cơ cấu', 'Thâm hụt ước tính khi nền kinh tế ở mức toàn dụng; dùng để đánh giá lập trường tài khóa.'],
    recoglag: ['Recognition lag', 'Độ trễ nhận biết', 'Thời gian để nhận ra cần can thiệp.'],
    actionlag: ['Action lag', 'Độ trễ hành động', 'Thời gian để quyết định, thông qua và triển khai biện pháp.'],
    impactlag: ['Impact lag', 'Độ trễ tác động', 'Thời gian để biện pháp tác động lên nền kinh tế.'],
  };

  const practice = [
    { q: 'Dấu hiệu nào cho thấy rõ nhất chính sách tài khóa đang được nới lỏng (mở rộng) một cách chủ động?', choices: ['Thâm hụt ngân sách cơ cấu tăng', 'Thâm hụt ngân sách thực tế tăng trong suy thoái', 'Thu thuế giảm do thu nhập giảm'], answer: 0, explain: 'Thâm hụt cơ cấu loại bỏ tác động của chu kỳ, nên nó tăng nghĩa là chính phủ chủ động nới lỏng. B và C có thể chỉ là bộ ổn định tự động hoạt động trong suy thoái.' },
    { q: 'Công cụ nào là bộ ổn định tự động?', choices: ['Gói đầu tư hạ tầng được quốc hội thông qua', 'Thuế thu nhập lũy tiến và trợ cấp thất nghiệp', 'Quyết định giảm thuế VAT tạm thời 2%'], answer: 1, explain: 'Thuế lũy tiến tự giảm và trợ cấp thất nghiệp tự tăng khi kinh tế suy giảm, không cần quyết định mới. A và C là chính sách chủ động (discretionary).' },
    { q: 'MPC = 0,75 và thuế suất 20%. Chính phủ tăng chi 40. Tổng cầu tăng khoảng:', choices: ['160', '40', '100'], answer: 2, explain: 'Số nhân = 1/[1 - 0,75 × 0,8] = 1/0,4 = 2,5; tác động = 40 × 2,5 = 100. A dùng 1/(1 - MPC) = 4, quên thuế. B bỏ qua hiệu ứng số nhân.' },
    { q: 'Nợ công 80% GDP, lãi suất thực trên nợ 5%, tăng trưởng GDP thực 2%, cán cân sơ cấp bằng 0. Tỷ lệ nợ/GDP sau 1 năm gần nhất với:', choices: ['77,71%', '82,35%', '85,00%'], answer: 1, explain: 'd1 = 80% × 1,05/1,02 = 82,35%. Vì r > g nên tỷ lệ nợ tăng. A đảo ngược r và g. C chỉ cộng lãi mà quên GDP cũng tăng.' },
    { q: 'Theo Ricardian equivalence, một đợt giảm thuế được tài trợ bằng vay nợ sẽ:', choices: ['Không làm thay đổi tổng cầu vì người dân tiết kiệm phần giảm thuế để trả thuế tương lai', 'Làm tổng cầu tăng gấp số nhân lần', 'Làm lãi suất giảm và đầu tư tư nhân tăng'], answer: 0, explain: 'Người dân dự đoán thuế tương lai tăng để trả nợ, nên tăng tiết kiệm đúng bằng phần giảm thuế, tiêu dùng không đổi. B là kết quả khi không có Ricardian. C không liên quan: vay nợ thường đẩy lãi suất lên.' },
    { q: 'Chính phủ vay nhiều để tài trợ thâm hụt, lãi suất tăng và đầu tư tư nhân giảm. Đây là:', choices: ['Ricardian equivalence', 'Độ trễ tác động', 'Hiệu ứng chèn lấn (crowding out)'], answer: 2, explain: 'Crowding out: cầu vay của chính phủ cạnh tranh nguồn vốn với tư nhân, lãi suất tăng, đầu tư tư nhân giảm. Ricardian nói về tiết kiệm của hộ gia đình; độ trễ tác động nói về thời gian.' },
    { q: 'Nhược điểm chính của dùng chi đầu tư hạ tầng để ổn định chu kỳ là:', choices: ['Lập kế hoạch và triển khai lâu, có thể tác động khi chu kỳ đã đổi chiều', 'Không có tác động gì tới năng lực sản xuất dài hạn', 'Có thể điều chỉnh gần như ngay lập tức'], answer: 0, explain: 'Dự án vốn cần nhiều năm chuẩn bị nên dễ phát huy tác dụng sai thời điểm. B sai: hạ tầng nâng năng lực sản xuất dài hạn. C là ưu điểm của thuế gián thu.' },
    { q: 'MPC = 0,9, không có thuế thu nhập tỷ lệ (t = 0). Chính phủ tăng chi 20 và tăng thuế một khoản cố định 20. Tổng cầu thay đổi:', choices: ['0', '+20', '+200'], answer: 1, explain: 'Số nhân = 1/(1 - 0,9) = 10. Chi: +20 × 10 = +200. Thuế: -0,9 × 20 × 10 = -180. Ròng +20. A cho rằng hai tác động triệt tiêu nhau; C quên tác động của thuế.' },
    { q: 'Lập luận nào ủng hộ quan điểm KHÔNG nên quá lo về nợ công cao?', choices: ['Nợ cao dẫn tới thuế tương lai cao, làm giảm động lực làm việc', 'Vay nợ nhiều đẩy lãi suất lên và chèn lấn đầu tư tư nhân', 'Phần lớn nợ do công dân trong nước nắm giữ'], answer: 2, explain: 'Nợ trong nước một phần là chuyển giao giữa các nhóm trong nền kinh tế, nên gánh nặng bị phóng đại. A và B là lý do nên lo ngại.' },
    { q: 'Mục tiêu nào chính sách tài khóa thực hiện được còn chính sách tiền tệ gần như không?', choices: ['Phân phối lại thu nhập và của cải giữa các nhóm dân cư', 'Tác động tới tổng cầu', 'Ảnh hưởng tới lãi suất ngắn hạn'], answer: 0, explain: 'Thuế lũy tiến, chi chuyển giao nhắm được nhóm cụ thể. Cả hai chính sách đều tác động tổng cầu (B). Lãi suất ngắn hạn là địa hạt chính của chính sách tiền tệ (C).' },
  ];

  // Widget: số nhân tài khóa.
  const widgets = {
    multiplier(el) {
      el.innerHTML = `
        <div class="w-row"><label>MPC: <b data-o="c">0,80</b><input type="range" min="0.5" max="0.95" step="0.05" value="0.8" data-i="c"></label>
        <label>Thuế suất t: <b data-o="t">20%</b><input type="range" min="0" max="50" step="5" value="20" data-i="t"></label>
        <label>Tăng chi tiêu G: <b data-o="g">100</b><input type="range" min="10" max="200" step="10" value="100" data-i="g"></label></div>
        <div class="w-out"><div class="w-price" data-o="p"></div><div class="w-bar"><span data-o="bar"></span><i></i></div><div class="w-note" data-o="note"></div></div>`;
      const q = s => el.querySelector(s);
      const f = (x, d) => x.toFixed(d).replace('.', ',');
      const upd = () => {
        const c = +q('[data-i="c"]').value, tx = +q('[data-i="t"]').value / 100, g = +q('[data-i="g"]').value;
        const k = 1 / (1 - c * (1 - tx));
        q('[data-o="c"]').textContent = f(c, 2);
        q('[data-o="t"]').textContent = `${Math.round(tx * 100)}%`;
        q('[data-o="g"]').textContent = String(g);
        q('[data-o="p"]').textContent = `Số nhân = ${f(k, 2)}  →  tổng cầu tăng ${f(k * g, 1)}`;
        q('[data-o="bar"]').style.width = `${Math.min(100, (k / 10) * 100)}%`;
        q('[data-o="note"]').textContent = `Mỗi vòng chi tiêu giữ lại ${f(c * (1 - tx) * 100, 0)}% của vòng trước. Tăng MPC hoặc giảm thuế suất làm số nhân lớn hơn.`;
      };
      el.addEventListener('input', upd);
      upd();
    },
  };

  window.LESSONS['EC-03'] = {
    moduleId: 'EC-03',
    calculator: 'BA II Plus',
    warmup: [
      'Ôn EC-02: trong pha suy giảm, thu nhập và tiêu dùng hộ gia đình thay đổi thế nào? Loại chi tiêu nào giảm mạnh nhất?',
      'Nếu được nhận thêm 1 triệu đồng, bạn tiêu bao nhiêu và tiết kiệm bao nhiêu? Con số đó gần với khái niệm nào trong bài hôm nay?',
      'Đoán trước: khi kinh tế suy thoái, vì sao thâm hụt ngân sách tăng dù chính phủ không làm gì mới?',
    ],
    sections,
    glossary,
    practice,
    widgets,
    slides: [],
    wrapup: [
      'Viết công thức số nhân tài khóa và giải thích vì sao thuế suất cao làm số nhân nhỏ lại.',
      'Kể 3 lý do nên lo ngại và 3 lý do không nên quá lo về nợ công cao.',
      'Vì sao phải dùng thâm hụt cơ cấu thay vì thâm hụt thực tế để đánh giá chính sách tài khóa?',
    ],
  };
}());
