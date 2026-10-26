// Bài giảng EQ-11 - Equity Analyst Research Reports (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t, frac } = window.CFAH;

  const sections = [
    {
      title: '1. Bức tranh lớn',
      minutes: 5,
      html: `
<p>Toàn bộ công việc ở EQ-05 đến EQ-10 (phân tích ngành, phân tích công ty, dự báo, định giá) cuối cùng phải được <b>truyền đạt</b> cho người ra quyết định. Sản phẩm đó là ${t('report', 'báo cáo phân tích cổ phiếu (equity research report)')}.</p>
<div class="key">Một báo cáo tốt trả lời ba câu hỏi theo thứ tự: <b>Nên làm gì?</b> (khuyến nghị, giá mục tiêu) → <b>Vì sao?</b> (luận điểm đầu tư dựa trên ngành, công ty, dự báo, định giá) → <b>Điều gì có thể sai?</b> (rủi ro, kịch bản, độ nhạy).</div>
<ol>
  <li>Các thành phần của một báo cáo phân tích công ty đầy đủ (LOS 1, phần 2).</li>
  <li>So sánh báo cáo bên bán (sell-side) và bên mua (buy-side), và kết luận của chúng (LOS 2, phần 3).</li>
  <li>Vì sao cùng một mô hình định giá mà các nhà phân tích ra giá trị khác nhau (LOS 3, phần 4 và 5).</li>
</ol>
<p class="tip">Module này ít công thức, nhưng phần 4 có ví dụ DCF đầy đủ: hãy tự làm lại một lần để thấy một vài điểm phần trăm trong giả định có thể làm giá trị thay đổi gấp đôi.</p>`,
    },
    {
      title: '2. Các thành phần của một báo cáo phân tích công ty',
      minutes: 20,
      html: `
<table class="plain"><thead><tr><th>Phần</th><th>Nội dung chính</th></tr></thead><tbody>
<tr><td><b>Trang đầu, tóm tắt</b></td><td>${t('rating', 'Khuyến nghị (rating)')} như mua, giữ, bán; ${t('tp', 'giá mục tiêu (target price)')} và thời hạn (thường 12 tháng); giá hiện tại và mức tăng giá kỳ vọng; ${t('thesis', 'luận điểm đầu tư (investment thesis)')} trong vài gạch đầu dòng; bảng số liệu chính (vốn hóa, dự báo doanh thu, EPS, P/E, EV/EBITDA)</td></tr>
<tr><td><b>Mô tả công ty</b></td><td>Mô hình kinh doanh, sản phẩm, khách hàng, cơ cấu doanh thu theo bộ phận và địa bàn, cơ cấu sở hữu</td></tr>
<tr><td><b>Ngành và vị thế cạnh tranh</b></td><td>Quy mô, tăng trưởng, năm lực, PESTLE, chiến lược và lợi thế của công ty (EQ-09, EQ-10)</td></tr>
<tr><td><b>Phân tích tài chính</b></td><td>Kết quả lịch sử: động lực doanh thu, biên lợi nhuận, vốn lưu động, capex, cấu trúc vốn; điều chỉnh khoản bất thường</td></tr>
<tr><td><b>Dự báo</b></td><td>Giả định chính và lý do; báo cáo tài chính dự phóng (EQ-08); so sánh với ${t('consensus', 'dự báo đồng thuận (consensus)')}</td></tr>
<tr><td><b>Định giá</b></td><td>Phương pháp (DCF, bội số), giả định (chi phí vốn, tăng trưởng dài hạn, nhóm so sánh), kết quả, ${t('sens', 'phân tích độ nhạy')}; giá mục tiêu được suy ra thế nào</td></tr>
<tr><td><b>Rủi ro và kịch bản</b></td><td>Những gì có thể làm luận điểm sai; kịch bản lạc quan, cơ sở, bi quan; ${t('catalyst', 'chất xúc tác (catalyst)')}: sự kiện có thể khiến giá thị trường tiến về giá trị ước tính</td></tr>
<tr><td><b>ESG và quản trị</b></td><td>Các yếu tố môi trường, xã hội, quản trị trọng yếu với công ty và ảnh hưởng của chúng tới dự báo, rủi ro</td></tr>
<tr><td><b>Công bố thông tin (disclosures)</b></td><td>Định nghĩa các mức khuyến nghị, xung đột lợi ích (quan hệ ngân hàng đầu tư, sở hữu cổ phiếu), cam kết của nhà phân tích</td></tr>
</tbody></table>

<h4>Phẩm chất của một báo cáo tốt</h4>
<ul>
  <li><b>Kịp thời, rõ ràng, súc tích:</b> người đọc nắm được kết luận trong một phút đọc trang đầu.</li>
  <li><b>Phân biệt sự thật và ý kiến:</b> "doanh thu quý 3 tăng 12%" là sự thật; "biên lợi nhuận sẽ hồi phục" là ý kiến (đây cũng là yêu cầu của Standard V(B) ở phần Ethics).</li>
  <li><b>Nhất quán nội bộ:</b> khuyến nghị phải khớp với định giá; dự báo tăng trưởng phải khớp với mức đầu tư; giả định phải khớp với phân tích ngành.</li>
  <li><b>Minh bạch giả định</b> và chỉ ra giả định nào quan trọng nhất (độ nhạy).</li>
  <li><b>Có quan điểm riêng:</b> nêu rõ mình khác thị trường ở điểm nào và vì sao.</li>
</ul>

<div class="example"><div class="ex-h">Ví dụ 2.1 - Từ giá mục tiêu đến khuyến nghị</div>
<p>Cổ phiếu đang giao dịch ở 40.000 đồng. Nhà phân tích đặt giá mục tiêu 12 tháng là 48.000 đồng và dự báo cổ tức trong 12 tháng là 1.200 đồng. Công ty chứng khoán quy định: tổng lợi suất kỳ vọng trên 15% là MUA, từ -5% đến 15% là GIỮ, dưới -5% là BÁN. Khuyến nghị là gì?</p>
<details><summary>Xem lời giải</summary>
<p>Tổng lợi suất kỳ vọng = (48.000 - 40.000 + 1.200) / 40.000 = <b>23%</b> (riêng phần giá là 20%). Lớn hơn 15% nên khuyến nghị <b>MUA</b>.</p>
<p>Lưu ý: định nghĩa mức khuyến nghị khác nhau giữa các công ty (có nơi dùng tăng tỷ trọng, trung lập, giảm tỷ trọng so với chỉ số), nên phải đọc phần công bố thông tin.</p></details></div>`,
    },
    {
      title: '3. Báo cáo bên bán và bên mua',
      minutes: 20,
      html: `
<p>${t('sellside', 'Nhà phân tích bên bán (sell-side)')} làm cho công ty chứng khoán, ngân hàng đầu tư; ${t('buyside', 'nhà phân tích bên mua (buy-side)')} làm cho quỹ đầu tư, công ty quản lý tài sản, quỹ hưu trí, công ty bảo hiểm.</p>
<table class="plain"><thead><tr><th></th><th>Sell-side</th><th>Buy-side</th></tr></thead><tbody>
<tr><td>Người đọc</td><td>Khách hàng bên ngoài: nhà đầu tư tổ chức, cá nhân</td><td>Nội bộ: nhà quản lý danh mục, ủy ban đầu tư</td></tr>
<tr><td>Mục đích</td><td>Cung cấp nghiên cứu cho khách, hỗ trợ hoạt động môi giới, giao dịch</td><td>Ra quyết định đầu tư cho danh mục của chính tổ chức</td></tr>
<tr><td>Hình thức</td><td>Chuẩn hóa, đầy đủ, xuất bản chính thức; cập nhật sau mỗi kỳ báo cáo, sự kiện</td><td>Linh hoạt, thường ngắn gọn; tập trung vào điểm khác biệt so với thị trường</td></tr>
<tr><td>Phạm vi</td><td>Thường theo dõi sâu một ngành, khoảng 10-25 công ty</td><td>Thường bao quát rộng hơn, nhiều ngành; dùng báo cáo sell-side làm nguồn đầu vào</td></tr>
<tr><td>Kết luận</td><td>Khuyến nghị tuyệt đối (mua, giữ, bán) và giá mục tiêu, thường 12 tháng</td><td>Có đưa vào danh mục không, tỷ trọng bao nhiêu so với chuẩn, so với các cơ hội khác ra sao, mức độ tin tưởng (conviction), rủi ro đóng góp cho danh mục</td></tr>
<tr><td>Quy định</td><td>Chặt: phải công bố xung đột lợi ích, định nghĩa khuyến nghị, tách biệt với ngân hàng đầu tư</td><td>Không công bố ra ngoài nên ít yêu cầu công bố, nhưng vẫn chịu chuẩn mực đạo đức nghề nghiệp</td></tr>
<tr><td>Áp lực, thiên lệch</td><td>Quan hệ ngân hàng đầu tư, giữ quan hệ với ban lãnh đạo công ty, phí giao dịch → dễ ${t('optbias', 'thiên lệch lạc quan')}: tỷ lệ khuyến nghị bán thường rất thấp</td><td>Được đánh giá theo kết quả đầu tư thực tế của danh mục, nên ít động cơ lạc quan; nhưng vẫn có thể có thiên lệch hành vi (bám ý kiến cũ, tự tin thái quá)</td></tr>
</tbody></table>
<div class="key"><b>Khác biệt cốt lõi về kết luận:</b> sell-side trả lời "cổ phiếu này đáng giá bao nhiêu, nên mua hay bán?"; buy-side trả lời "cổ phiếu này có xứng đáng chiếm chỗ trong danh mục <b>của chúng ta</b>, với tỷ trọng bao nhiêu, so với các lựa chọn khác?". Một cổ phiếu được sell-side khuyến nghị MUA vẫn có thể bị buy-side bỏ qua nếu nó làm danh mục tập trung rủi ro hoặc có lựa chọn tốt hơn.</div>
<p class="tip"><b>Đọc báo cáo sell-side như một nhà đầu tư chuyên nghiệp:</b> giá trị lớn nhất thường nằm ở dữ liệu, mô hình và hiểu biết ngành, không nằm ở khuyến nghị. Hãy xem giả định của họ khác của bạn ở đâu, và chú ý khi nhiều nhà phân tích cùng đổi dự báo (thông tin mới) hơn là khi họ giữ nguyên khuyến nghị.</p>`,
    },
    {
      title: '4. Vì sao cùng mô hình mà giá trị khác nhau',
      minutes: 25,
      html: `
<p>Hai nhà phân tích dùng <b>cùng</b> mô hình DCF dòng tiền tự do cho doanh nghiệp (FCFF, EQ-06) vẫn có thể ra hai giá trị rất xa nhau, vì giá trị phụ thuộc vào bốn nhóm ${t('assume', 'giả định')}:</p>
<table class="plain"><thead><tr><th>Nhóm giả định</th><th>Ví dụ</th><th>Đến từ phân tích nào</th></tr></thead><tbody>
<tr><td><b>Doanh thu</b></td><td>Tăng trưởng thị trường, thị phần, giá bán</td><td>Ngành (EQ-09), động lực doanh thu (EQ-10)</td></tr>
<tr><td><b>Khả năng sinh lời</b></td><td>Biên lợi nhuận hoạt động, thuế suất</td><td>Cấu trúc chi phí, sức mạnh định giá</td></tr>
<tr><td><b>Đầu tư</b></td><td>Capex, vốn lưu động cần để đạt tăng trưởng</td><td>Phân tích vốn lưu động, capex</td></tr>
<tr><td><b>Tài trợ</b></td><td>Chi phí vốn (WACC), cấu trúc vốn mục tiêu, số cổ phiếu</td><td>Cấu trúc vốn, CAPM (EQ-12)</td></tr>
</tbody></table>
<p>Ngoài ra còn tăng trưởng dài hạn trong giá trị cuối kỳ (terminal value), và với định giá bằng bội số là cách chọn nhóm so sánh, chọn bội số.</p>

<div class="example"><div class="ex-h">Ví dụ 4.1 - Hai nhà phân tích, một mô hình</div>
<p>Doanh thu năm vừa qua 1.000 tỷ. Dự báo 5 năm, sau đó FCFF tăng 3% mãi mãi. Thuế 20%. FCFF = EBIT × (1 - thuế) × (1 - tỷ lệ tái đầu tư). Nợ ròng 400 tỷ, 50 triệu cổ phiếu, giá hiện tại 20.000 đồng.</p>
<table class="plain"><thead><tr><th>Giả định</th><th>Analyst A</th><th>Analyst B</th></tr></thead><tbody>
<tr><td>Tăng trưởng doanh thu năm 1-5</td><td>8%</td><td>5%</td></tr>
<tr><td>Biên EBIT</td><td>15%</td><td>13%</td></tr>
<tr><td>Tỷ lệ tái đầu tư (% NOPAT)</td><td>30%</td><td>40%</td></tr>
<tr><td>WACC</td><td>9%</td><td>10%</td></tr>
</tbody></table>
<details><summary>Xem lời giải</summary>
<p><b>Analyst A:</b> doanh thu năm 5 = 1.469,33; FCFF năm 1 đến 5 = 90,72; 97,98; 105,82; 114,28; 123,42. PV năm 1-5 = 408,58.<br>
Giá trị cuối kỳ năm 5 = 123,42 × 1,03 / (9% - 3%) = 2.118,77; PV = 1.377,06.<br>
EV = 1.785,64; vốn chủ = 1.385,64; giá trị mỗi cổ phiếu = <b>27.710 đồng</b> (cao hơn giá 38,6% → MUA).</p>
<p><b>Analyst B:</b> FCFF năm 1 đến 5 = 65,52; 68,80; 72,24; 75,85; 79,64. PV = 271,95. Giá trị cuối kỳ = 1.171,85; PV = 727,62. EV = 999,57; vốn chủ = 599,57; mỗi cổ phiếu = <b>11.990 đồng</b> (thấp hơn giá 40,0% → BÁN).</p>
<p>Cùng mô hình, cùng công ty, giá trị chênh nhau hơn hai lần. Giá trị cuối kỳ chiếm 77% EV của A và 73% của B: phần lớn giá trị nằm sau năm 5.</p></details></div>

<div class="example"><div class="ex-h">Ví dụ 4.2 - Giả định nào gây ra chênh lệch?</div>
<p>Bắt đầu từ mô hình của A, lần lượt thay từng giả định bằng của B.</p>
<details><summary>Xem lời giải</summary>
<table class="plain"><thead><tr><th>Bước</th><th>Giá trị mỗi cổ phiếu (nghìn đồng)</th><th>Thay đổi</th></tr></thead><tbody>
<tr><td>Mô hình A</td><td>27,71</td><td></td></tr>
<tr><td>+ doanh thu của B (5%)</td><td>23,44</td><td>-4,27</td></tr>
<tr><td>+ biên EBIT của B (13%)</td><td>19,25</td><td>-4,19</td></tr>
<tr><td>+ tái đầu tư của B (40%)</td><td>15,36</td><td>-3,89</td></tr>
<tr><td>+ WACC của B (10%)</td><td>11,99</td><td>-3,37</td></tr>
</tbody></table>
<p>Không có giả định nào "điên rồ", nhưng bốn khác biệt nhỏ cùng chiều cộng dồn lại. Thứ tự thay đổi ảnh hưởng đến con số của từng bước (vì các giả định nhân với nhau), nhưng tổng chênh lệch luôn là 15,72.</p></details></div>

<h4>Phân tích độ nhạy: WACC và tăng trưởng dài hạn</h4>
<p>Giữ các giả định khác của A, giá trị mỗi cổ phiếu (nghìn đồng):</p>
<table class="plain"><thead><tr><th>WACC \\ g dài hạn</th><th>2%</th><th>3%</th><th>4%</th></tr></thead><tbody>
<tr><td>8%</td><td>28,96</td><td>35,01</td><td>44,08</td></tr>
<tr><td>9%</td><td>23,55</td><td><b>27,71</b></td><td>33,54</td></tr>
<tr><td>10%</td><td>19,50</td><td>22,51</td><td>26,52</td></tr>
</tbody></table>
<p class="warn"><b>Bài học:</b> khoảng cách WACC - g càng hẹp thì giá trị càng nhạy. Một báo cáo tốt luôn trình bày bảng độ nhạy để người đọc thấy giá mục tiêu phụ thuộc vào đâu. Khi đề hỏi "vì sao hai nhà phân tích dùng cùng mô hình mà ra giá trị khác", câu trả lời là <b>giả định đầu vào</b>, không phải mô hình.</p>
<p class="tip"><b>Kiểm tra nhất quán:</b> tăng trưởng cao phải đi kèm tái đầu tư cao (tăng trưởng ≈ tỷ lệ tái đầu tư × ROIC). Analyst A giả định tăng 8% với chỉ 30% tái đầu tư, tức ngầm định ROIC mới rất cao. Đây là chỗ nên chất vấn.</p>`,
    },
    {
      title: '5. Kịch bản và cách dùng nhiều ước tính',
      minutes: 5,
      html: `
<p>Thay vì một con số, nhiều báo cáo đưa ra ${t('scenario', 'phân tích kịch bản (scenario analysis)')}: giá trị trong kịch bản lạc quan (bull), cơ sở (base), bi quan (bear), kèm xác suất. Giá trị kỳ vọng là bình quân gia quyền theo xác suất.</p>
<div class="example"><div class="ex-h">Ví dụ 5.1</div>
<p>Bull: 60.000 đồng (xác suất 25%); base: 45.000 (50%); bear: 28.000 (25%). Giá trị kỳ vọng?</p>
<details><summary>Xem lời giải</summary><p>0,25 × 60.000 + 0,5 × 45.000 + 0,25 × 28.000 = <b>44.500 đồng</b>. Khoảng cách giữa bull và bear (32.000) cho người đọc thấy mức độ không chắc chắn, điều mà một con số duy nhất không thể hiện được.</p></details></div>
<ul>
  <li>So sánh ước tính của mình với <b>đồng thuận</b> (consensus): lợi nhuận đầu tư đến từ việc đúng khi thị trường sai, nên phải nói rõ mình khác ở giả định nào.</li>
  <li>Khi đọc nhiều báo cáo về cùng công ty, đừng lấy trung bình giá mục tiêu một cách máy móc; hãy so giả định doanh thu, biên, đầu tư, chi phí vốn.</li>
</ul>`,
    },
    {
      title: '6. Tóm tắt và bẫy thường gặp',
      minutes: 5,
      html: `
<table class="plain"><thead><tr><th>Chủ đề</th><th>Nhớ</th></tr></thead><tbody>
<tr><td>Trang đầu</td><td>Khuyến nghị, giá mục tiêu, thời hạn, luận điểm, số liệu chính</td></tr>
<tr><td>Thân báo cáo</td><td>Công ty, ngành, tài chính, dự báo, định giá, rủi ro, ESG, công bố thông tin</td></tr>
<tr><td>Phẩm chất</td><td>Phân biệt sự thật và ý kiến; khuyến nghị nhất quán với định giá</td></tr>
<tr><td>Tổng lợi suất kỳ vọng</td><td>(Giá mục tiêu - giá + cổ tức) / giá; đừng quên cổ tức</td></tr>
<tr><td>Sell-side</td><td>Bên ngoài, chuẩn hóa, khuyến nghị tuyệt đối, nhiều quy định, thiên lệch lạc quan</td></tr>
<tr><td>Buy-side</td><td>Nội bộ, ngắn gọn, kết luận theo danh mục: có mua không, tỷ trọng, so với lựa chọn khác</td></tr>
<tr><td>Cùng mô hình, khác giá trị</td><td>Do giả định: doanh thu, sinh lời, đầu tư, tài trợ (WACC), tăng trưởng dài hạn</td></tr>
<tr><td>Độ nhạy</td><td>WACC - g hẹp thì giá trị rất nhạy; giá trị cuối kỳ thường chiếm phần lớn</td></tr>
</tbody></table>
<p>Tiếp theo: tab <b>Luyện tập</b> (10 câu). EQ-12 sẽ học cách ước tính chi phí vốn cổ phần, một đầu vào gây ra nhiều khác biệt nhất.</p>`,
    },
  ];

  const glossary = {
    report: ['Equity research report', 'Báo cáo phân tích cổ phiếu', 'Tài liệu trình bày phân tích, dự báo, định giá và khuyến nghị về một cổ phiếu.'],
    rating: ['Rating / recommendation', 'Khuyến nghị', 'Kết luận như mua, giữ, bán (hoặc tăng, giảm tỷ trọng) kèm định nghĩa của từng mức.'],
    tp: ['Target price', 'Giá mục tiêu', 'Giá mà nhà phân tích kỳ vọng cổ phiếu đạt trong một thời hạn, thường 12 tháng.'],
    thesis: ['Investment thesis', 'Luận điểm đầu tư', 'Lập luận cốt lõi vì sao cổ phiếu bị định giá sai và điều gì sẽ thay đổi.'],
    consensus: ['Consensus estimate', 'Dự báo đồng thuận', 'Trung bình (hoặc trung vị) dự báo của các nhà phân tích theo dõi cổ phiếu.'],
    sens: ['Sensitivity analysis', 'Phân tích độ nhạy', 'Thay đổi từng giả định để xem giá trị thay đổi bao nhiêu.'],
    catalyst: ['Catalyst', 'Chất xúc tác', 'Sự kiện có thể khiến giá thị trường tiến về giá trị ước tính (kết quả kinh doanh, sản phẩm mới, thay đổi chính sách).'],
    sellside: ['Sell-side analyst', 'Nhà phân tích bên bán', 'Làm cho công ty chứng khoán, ngân hàng đầu tư; xuất bản báo cáo cho khách hàng bên ngoài.'],
    buyside: ['Buy-side analyst', 'Nhà phân tích bên mua', 'Làm cho quỹ, công ty quản lý tài sản; phân tích để ra quyết định đầu tư nội bộ.'],
    optbias: ['Optimism bias', 'Thiên lệch lạc quan', 'Xu hướng đưa ra dự báo, khuyến nghị quá tích cực, thường do xung đột lợi ích.'],
    assume: ['Valuation assumptions', 'Giả định định giá', 'Các đầu vào của mô hình: tăng trưởng, biên lợi nhuận, đầu tư, chi phí vốn, tăng trưởng dài hạn.'],
    scenario: ['Scenario analysis', 'Phân tích kịch bản', 'Ước tính giá trị trong các kịch bản khác nhau và gán xác suất cho từng kịch bản.'],
  };

  const practice = [
    { q: 'Phần nào sau đây thường nằm ở trang đầu của một báo cáo phân tích công ty của bên bán?', choices: ['Khuyến nghị, giá mục tiêu và luận điểm đầu tư tóm tắt.', 'Toàn bộ báo cáo tài chính dự phóng 5 năm.', 'Bảng phân tích độ nhạy chi tiết của mô hình DCF.'], answer: 0, explain: 'Trang đầu cho người đọc kết luận nhanh: khuyến nghị, giá mục tiêu, thời hạn, luận điểm, số liệu chính. Báo cáo tài chính dự phóng đầy đủ thường ở phụ lục. Bảng độ nhạy chi tiết nằm trong phần định giá.' },
    { q: 'Cổ phiếu giá 50, giá mục tiêu 12 tháng là 56, cổ tức dự kiến 1,5. Tổng lợi suất kỳ vọng là:', choices: ['12%', '15%', '112%'], answer: 1, explain: '(56 - 50 + 1,5)/50 = 15%. Lựa chọn 12% quên cổ tức. Lựa chọn 112% là tỷ lệ giá mục tiêu/giá hiện tại, chưa trừ 1.' },
    { q: 'So với báo cáo bên bán, báo cáo bên mua thường:', choices: ['được xuất bản rộng rãi và phải công bố chi tiết xung đột lợi ích.', 'luôn dài và chuẩn hóa hơn vì phục vụ nhiều khách hàng.', 'dùng nội bộ và kết luận theo góc nhìn danh mục, như tỷ trọng và so sánh với các cơ hội khác.'], answer: 2, explain: 'Buy-side phục vụ quyết định đầu tư nội bộ, nên kết luận gắn với danh mục. Xuất bản rộng rãi, công bố xung đột lợi ích, dài và chuẩn hóa là đặc điểm của sell-side.' },
    { q: 'Nguyên nhân nào giải thích tốt nhất vì sao khuyến nghị BÁN rất hiếm trong báo cáo bên bán?', choices: ['Áp lực từ quan hệ ngân hàng đầu tư và nhu cầu giữ quan hệ với ban lãnh đạo công ty.', 'Quy định cấm nhà phân tích bên bán đưa khuyến nghị bán.', 'Cổ phiếu được theo dõi thường bị định giá thấp.'], answer: 0, explain: 'Xung đột lợi ích tạo thiên lệch lạc quan. Không có quy định nào cấm khuyến nghị bán. Cho rằng cổ phiếu được theo dõi thường bị định giá thấp là không có cơ sở.' },
    { q: 'Một nhà phân tích bên bán khuyến nghị MUA cổ phiếu X. Nhà quản lý quỹ bên mua đồng ý X bị định giá thấp nhưng vẫn không mua. Lý do hợp lý nhất là:', choices: ['Báo cáo bên bán luôn sai.', 'Danh mục đã có tỷ trọng lớn ở các cổ phiếu tương quan cao với X, hoặc có cơ hội tốt hơn.', 'Bên mua chỉ được mua cổ phiếu có khuyến nghị GIỮ.'], answer: 1, explain: 'Kết luận bên mua xét cả rủi ro đóng góp vào danh mục và chi phí cơ hội so với lựa chọn khác. Hai phương án "báo cáo bên bán luôn sai" và "chỉ được mua cổ phiếu có khuyến nghị GIỮ" là phát biểu cực đoan, không đúng.' },
    { q: 'Hai nhà phân tích dùng cùng mô hình FCFF cho một công ty. Mọi giả định giống nhau, ngoại trừ nhà phân tích B dự báo tỷ lệ tái đầu tư cao hơn mà tăng trưởng doanh thu không đổi. So với A, giá trị của B sẽ:', choices: ['cao hơn, vì đầu tư nhiều hơn tạo ra giá trị.', 'bằng nhau, vì tăng trưởng không đổi.', 'thấp hơn, vì FCFF mỗi năm thấp hơn mà không đổi lại tăng trưởng.'], answer: 2, explain: 'FCFF = NOPAT × (1 - tỷ lệ tái đầu tư). Tái đầu tư nhiều hơn với cùng tăng trưởng làm FCFF giảm, giá trị giảm. Phương án "cao hơn" chỉ đúng nếu đầu tư mang lại tăng trưởng với ROIC > WACC. Phương án "bằng nhau" bỏ qua dòng tiền.' },
    { q: 'Theo mô hình Gordon cho doanh nghiệp, FCFF năm tới 100, tăng trưởng mãi mãi 3%. Nếu WACC tăng từ 9% lên 10%, giá trị doanh nghiệp thay đổi khoảng:', choices: ['-10,0%', '-14,3%', '-1,0%'], answer: 1, explain: 'EV = 100/(9% - 3%) = 1.666,67; với 10%: 100/7% = 1.428,57; thay đổi -14,3%. Khoảng cách WACC - g hẹp làm giá trị rất nhạy. Lựa chọn -10,0% coi thay đổi tỷ lệ với WACC tăng 1/10; lựa chọn -1,0% nhầm 1 điểm phần trăm thành 1% giá trị.' },
    { q: 'Các kịch bản giá trị: lạc quan 70 (xác suất 30%), cơ sở 52 (50%), bi quan 30 (20%). Giá trị kỳ vọng là:', choices: ['53,0', '50,7', '52,0'], answer: 0, explain: '0,3 × 70 + 0,5 × 52 + 0,2 × 30 = 21 + 26 + 6 = 53,0. Lựa chọn 50,7 là trung bình cộng không gán xác suất. Lựa chọn 52,0 chỉ dùng kịch bản cơ sở.' },
    { q: 'Câu nào trong báo cáo thể hiện đúng yêu cầu phân biệt sự thật và ý kiến?', choices: ['"Biên lợi nhuận sẽ tăng lên 18% vào năm 2028."', '"Doanh thu quý 3 tăng 12%; chúng tôi cho rằng biên lợi nhuận có thể tăng lên 18% vào năm 2028 nhờ giá nguyên liệu giảm."', '"Cổ phiếu chắc chắn đạt giá mục tiêu trong 12 tháng."'], answer: 1, explain: 'Câu đúng nêu sự thật (doanh thu quý 3) và nói rõ phần còn lại là ý kiến kèm lý do. Câu "Biên lợi nhuận sẽ tăng lên 18%..." trình bày dự báo như sự thật. Câu "chắc chắn đạt giá mục tiêu" hứa hẹn kết quả, vi phạm chuẩn mực.' },
    { q: 'Nhà phân tích A định giá cổ phiếu cao hơn nhiều so với nhà phân tích B dù cùng dùng DCF. Giả định nào sau đây của A có thể giải thích chênh lệch?', choices: ['WACC cao hơn B.', 'Biên lợi nhuận hoạt động thấp hơn B.', 'Tăng trưởng dài hạn trong giá trị cuối kỳ cao hơn B.'], answer: 2, explain: 'Tăng trưởng dài hạn cao hơn làm giá trị cuối kỳ (thường là phần lớn giá trị) tăng mạnh. WACC cao hơn hay biên lợi nhuận hoạt động thấp hơn đều làm giá trị của nhà phân tích A thấp hơn, ngược với dữ kiện.' },
  ];

  window.LESSONS['EQ-11'] = {
    moduleId: 'EQ-11',
    calculator: 'BA II Plus',
    warmup: [
      'Ôn EQ-06: viết công thức giá trị cuối kỳ theo mô hình tăng trưởng không đổi. Điều kiện gì phải thỏa mãn?',
      'Ôn EQ-10: nêu bốn mắt xích của chuỗi phân tích công ty, từ chiến lược đến tài trợ.',
      'Đoán trước: vì sao các báo cáo của công ty chứng khoán hiếm khi khuyến nghị BÁN?',
    ],
    sections,
    glossary,
    practice,
    widgets: {},
    slides: [],
    wrapup: [
      'Liệt kê các phần của một báo cáo phân tích công ty đầy đủ theo thứ tự.',
      'So sánh kết luận của báo cáo bên bán và bên mua trong hai câu.',
      'Bốn nhóm giả định nào khiến cùng một mô hình DCF cho ra giá trị khác nhau? Giả định nào thường nhạy nhất?',
    ],
  };
}());
