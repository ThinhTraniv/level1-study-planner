// Bài giảng EQ-07 - Relative Value Equity Valuation Approaches (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t, frac } = window.CFAH;

  const sections = [
    {
      title: '1. Bức tranh lớn',
      minutes: 5,
      html: `
<p>Khi đi mua nhà, bạn hiếm khi tính PV của tiền thuê nhà 50 năm. Bạn hỏi: "căn bên cạnh, cùng diện tích, bán bao nhiêu tiền một mét vuông?". Định giá cổ phiếu bằng ${t('multiple', 'bội số (multiple)')} cũng vậy.</p>
<div class="key">Bội số = Giá (hoặc EV) / một chỉ tiêu cơ bản (lợi nhuận, book value, doanh thu, dòng tiền, EBITDA). Bội số chuẩn hóa giá để so sánh được các công ty có quy mô khác nhau. Có hai cách dùng: so với <b>công ty tương tự</b>, hoặc so với <b>bội số hợp lý tính từ cơ bản</b>.</div>
<ol>
  <li><b>Hai phương pháp</b>: so sánh (comparables) và dự báo cơ bản (forecasted fundamentals). Ứng với LOS 1 (phần 2, 3).</li>
  <li><b>Tính và diễn giải</b> các bội số giá (P/E, P/B, P/S, P/CF) và bội số EV (EV/EBITDA...), biết khi nào dùng bội số nào. Ứng với LOS 2 (phần 3, 4, 5).</li>
  <li><b>Chọn nhóm so sánh</b> theo phân ngành hoặc theo các yếu tố quyết định lợi suất. Ứng với LOS 3 (phần 6).</li>
  <li><b>Bội số quá khứ, hiện tại và dự phóng</b>. Ứng với LOS 4 (phần 3, 7).</li>
</ol>
<p class="tip">Module này dùng lại Gordon ở EQ-06 để tính bội số hợp lý. Tính toán chỉ là phép chia và nhân, không cần hàm đặc biệt của BA II Plus.</p>`,
    },
    {
      title: '2. Hai phương pháp dùng bội số',
      minutes: 12,
      html: `
<table class="plain"><thead><tr><th></th><th>${t('comparables', 'Method of comparables')}</th><th>${t('fundamentals', 'Method of forecasted fundamentals')}</th></tr></thead><tbody>
<tr><td>Ý tưởng</td><td>${t('lawone', 'Luật một giá')}: tài sản tương tự nên có giá tương tự</td><td>Bội số "đáng có" suy ra từ mô hình DCF với dự báo về tăng trưởng, rủi ro, chi trả</td></tr>
<tr><td>Chuẩn so sánh</td><td>Bội số của nhóm công ty cùng ngành, của chỉ số thị trường, hoặc của chính công ty trong quá khứ</td><td>${t('justified', 'Bội số hợp lý (justified multiple)')} của chính công ty</td></tr>
<tr><td>Kết luận</td><td>Đắt hay rẻ <b>tương đối</b> so với chuẩn</td><td>Đắt hay rẻ so với giá trị <b>nội tại</b></td></tr>
<tr><td>Rủi ro chính</td><td>Cả nhóm bị định giá sai thì kết luận sai theo</td><td>Nhạy với đầu vào, nhất là (r - g)</td></tr>
</tbody></table>
<h4>Quy trình dùng phương pháp so sánh</h4>
<ol>
<li>Chọn bội số phù hợp với loại công ty (phần 3 - 5).</li>
<li>Chọn nhóm so sánh và tính bội số chuẩn, thường là <b>trung vị</b> (phần 6).</li>
<li>So bội số của công ty mục tiêu với chuẩn: cao hơn chuẩn thì có thể đắt, thấp hơn thì có thể rẻ.</li>
<li><b>Giải thích chênh lệch</b> bằng cơ bản: tăng trưởng cao hơn, rủi ro thấp hơn, ROE cao hơn đều xứng đáng bội số cao hơn.</li>
</ol>
<p class="warn"><b>Đừng kết luận quá nhanh:</b> P/E thấp hơn ngành <b>không</b> tự động nghĩa là rẻ. Có thể thị trường đang đúng khi trả ít hơn cho một công ty tăng trưởng chậm hoặc rủi ro cao. Bước 4 là bước mà đề thi hay kiểm tra.</p>
<p>Khi so với chính công ty trong quá khứ (${t('timeseries', 'so sánh theo thời gian')}), cần kiểm tra xem điều kiện có thay đổi không: lãi suất, cơ cấu kinh doanh, tốc độ tăng trưởng hiện tại khác thời điểm trước thì bội số lịch sử không còn là chuẩn đúng.</p>`,
    },
    {
      title: '3. P/E: trailing, forward và P/E hợp lý',
      minutes: 20,
      html: `
<div class="formula">${t('pe', 'P/E')} = ${frac('Giá cổ phiếu', 'EPS')}</div>
<p>P/E là bội số phổ biến nhất: cho biết nhà đầu tư trả bao nhiêu đồng cho <b>1 đồng lợi nhuận</b>. Lý do dùng rộng rãi: lợi nhuận là động lực chính của giá trị, và P/E dễ hiểu, dễ có dữ liệu.</p>
<h4>Trailing và forward</h4>
<table class="plain"><thead><tr><th>Loại</th><th>Mẫu số</th><th>Ưu</th><th>Nhược</th></tr></thead><tbody>
<tr><td>${t('trailing', 'Trailing P/E')}</td><td>EPS 4 quý / 12 tháng gần nhất (đã công bố)</td><td>Số thực tế, khách quan</td><td>Nhìn về quá khứ; lệch nếu năm qua có khoản bất thường hoặc công ty thay đổi nhanh</td></tr>
<tr><td>${t('forward', 'Forward (leading) P/E')}</td><td>EPS dự báo 12 tháng tới (hoặc năm tài chính tới)</td><td>Gắn với giá trị (giá phản ánh tương lai); tốt cho công ty tăng trưởng</td><td>Phụ thuộc vào dự báo, có thể quá lạc quan</td></tr>
</tbody></table>
<div class="example"><div class="ex-h">Ví dụ 3.1</div>
<p>Cổ phiếu giá 48, EPS 12 tháng qua 4,00, EPS dự báo năm tới 4,80. Tính P/E trailing và forward.</p>
<details><summary>Xem lời giải</summary><p>Trailing = 48 / 4,00 = <b>12,0</b>. Forward = 48 / 4,80 = <b>10,0</b>. Lợi nhuận dự kiến tăng nên forward P/E thấp hơn trailing. So sánh giữa các công ty phải dùng <b>cùng một loại</b> P/E.</p></details></div>

<h4>Các vấn đề với EPS</h4>
<ul>
<li><b>Khoản bất thường</b> (lãi bán tài sản, chi phí tái cấu trúc): dùng ${t('underlying', 'EPS cốt lõi (underlying / persistent earnings)')}, loại các khoản không lặp lại.</li>
<li><b>Công ty chu kỳ</b>: EPS dao động mạnh, nên dùng ${t('normalized', 'EPS chuẩn hóa (normalized)')}, ví dụ bình quân EPS qua cả chu kỳ (xem phần 7).</li>
<li><b>EPS âm</b>: P/E vô nghĩa. Có thể dùng ${t('ey', 'tỷ suất lợi nhuận (earnings yield) E/P')}: EPS -2, giá 50 thì E/P = -4%. E/P xếp hạng được cả công ty lỗ.</li>
<li>Khác biệt <b>chính sách kế toán</b> giữa công ty làm EPS khó so sánh.</li>
</ul>

<h4>P/E hợp lý từ Gordon (forecasted fundamentals)</h4>
<p>Chia hai vế của V<sub>0</sub> = D<sub>1</sub>/(r - g) cho E<sub>1</sub> hoặc E<sub>0</sub>:</p>
<div class="formula">P/E hợp lý leading = ${frac('P<sub>0</sub>', 'E<sub>1</sub>')} = ${frac('D<sub>1</sub>/E<sub>1</sub>', 'r - g')} &nbsp;&nbsp;&nbsp; P/E hợp lý trailing = ${frac('P<sub>0</sub>', 'E<sub>0</sub>')} = ${frac('(D<sub>0</sub>/E<sub>0</sub>) × (1 + g)', 'r - g')}</div>
<p>Tử số là ${t('payout', 'tỷ lệ chi trả')}. Từ công thức đọc ra ngay: P/E hợp lý <b>tăng</b> khi tỷ lệ chi trả tăng (giữ g không đổi), khi g tăng, và khi r giảm.</p>
<div class="example"><div class="ex-h">Ví dụ 3.2</div>
<p>Công ty có tỷ lệ chi trả ổn định 40%, r = 11%, g = 6%. Tính P/E hợp lý leading và trailing. Nếu cổ phiếu đang giao dịch ở P/E leading 10, nhận xét?</p>
<details><summary>Xem lời giải</summary>
<p>Leading = 0,40 / (11% - 6%) = <b>8,0</b>. Trailing = 0,40 × 1,06 / 0,05 = <b>8,48</b>.<br>P/E thực tế 10 &gt; 8,0 hợp lý, nên theo phương pháp dự báo cơ bản, cổ phiếu có vẻ <b>bị định giá cao</b>. Hoặc thị trường đang kỳ vọng g cao hơn 6%: giải 0,40/(11% - g) = 10 được g = 7%.</p></details></div>
<h4>Thử ngay: P/E hợp lý</h4>
<div class="widget" data-widget="justifiedPE"></div>
<p class="tip"><b>${t('peg', 'PEG')}</b> = P/E / tốc độ tăng EPS (tính theo %). Ví dụ P/E 20, tăng trưởng 15% thì PEG = 1,33. PEG thấp hơn có vẻ rẻ hơn khi tính tới tăng trưởng, nhưng nó bỏ qua khác biệt về rủi ro và độ dài tăng trưởng.</p>`,
    },
    {
      title: '4. P/B, P/S và P/CF',
      minutes: 16,
      html: `
<table class="plain"><thead><tr><th>Bội số</th><th>Công thức</th><th>Phù hợp khi</th><th>Hạn chế</th></tr></thead><tbody>
<tr><td>${t('pb', 'P/B')}</td><td>Giá / book value mỗi cổ phiếu</td><td>Ngân hàng, bảo hiểm (tài sản theo giá trị hợp lý); công ty có EPS âm; book value ổn định hơn EPS</td><td>Bỏ qua tài sản vô hình tự tạo; chính sách kế toán và mua lại cổ phiếu làm méo book value; kém ý nghĩa với công ty dịch vụ, công nghệ</td></tr>
<tr><td>${t('ps', 'P/S')}</td><td>Giá / doanh thu mỗi cổ phiếu</td><td>Công ty mới, đang lỗ; công ty chu kỳ; doanh thu khó bị "làm đẹp" hơn lợi nhuận và luôn dương</td><td>Doanh thu cao không có nghĩa là có lãi; bỏ qua khác biệt chi phí và biên lợi nhuận; vẫn có thể bị ghi nhận doanh thu sai</td></tr>
<tr><td>${t('pcf', 'P/CF')}</td><td>Giá / dòng tiền mỗi cổ phiếu (CFO, FCFE, hoặc EPS + khấu hao)</td><td>Dòng tiền khó bị điều chỉnh hơn lợi nhuận; ổn định hơn EPS</td><td>Nhiều định nghĩa dòng tiền khác nhau; "EPS + khấu hao" bỏ qua vốn lưu động và capex</td></tr>
</tbody></table>
<div class="example"><div class="ex-h">Ví dụ 4.1</div>
<p>Cổ phiếu giá 30. Book value mỗi cổ phiếu 20, doanh thu mỗi cổ phiếu 60, CFO mỗi cổ phiếu 5. Tính P/B, P/S, P/CF.</p>
<details><summary>Xem lời giải</summary><p>P/B = 30/20 = <b>1,5</b>; P/S = 30/60 = <b>0,5</b>; P/CF = 30/5 = <b>6,0</b>. Một mình các con số này không nói lên đắt hay rẻ, phải so với chuẩn (nhóm so sánh hoặc bội số hợp lý).</p></details></div>
<h4>Bội số hợp lý theo cơ bản</h4>
<div class="formula">P/B hợp lý = ${frac('ROE - g', 'r - g')} &nbsp;&nbsp;&nbsp;&nbsp; P/S hợp lý (leading) = ${frac('Biên lợi nhuận × Tỷ lệ chi trả', 'r - g')}</div>
<div class="example"><div class="ex-h">Ví dụ 4.2</div>
<p>Ngân hàng có ROE bền vững 14%, g = 5%, r = 10%. Cổ phiếu giao dịch ở P/B 1,5. Nhận xét.</p>
<details><summary>Xem lời giải</summary><p>P/B hợp lý = (14% - 5%) / (10% - 5%) = <b>1,8</b>. P/B thực tế 1,5 &lt; 1,8, nên cổ phiếu có vẻ <b>bị định giá thấp</b>. Trực giác: ROE &gt; r nghĩa là ngân hàng tạo lợi nhuận vượt chi phí vốn, nên đáng giá hơn book value. Nếu ROE = r thì P/B hợp lý = 1.</p></details></div>
<p>Tương tự, công ty có biên lợi nhuận 8%, tỷ lệ chi trả 40%, r = 10%, g = 5% có P/S hợp lý leading = 8% × 40% / 5% = <b>0,64</b>. P/S hợp lý cao hơn khi biên lợi nhuận cao hơn: hai công ty cùng P/S nhưng biên lợi nhuận khác nhau thì không "rẻ như nhau".</p>`,
    },
    {
      title: '5. Bội số giá trị doanh nghiệp (EV multiples)',
      minutes: 14,
      html: `
<div class="formula">${t('evebitda', 'EV/EBITDA')} = ${frac('Vốn hóa + Ưu đãi + Nợ + Lợi ích không kiểm soát - Tiền', 'EBITDA')}</div>
<p>Tử số và mẫu số phải <b>nhất quán</b>: EV thuộc về mọi người cấp vốn, nên mẫu số phải là chỉ tiêu <b>trước lãi vay</b> (EBITDA, EBIT, doanh thu). Ghép EV với EPS hay vốn hóa với EBITDA là sai.</p>
<h4>Vì sao dùng EV/EBITDA?</h4>
<ul>
<li>So sánh được công ty có <b>đòn bẩy khác nhau</b> (EBITDA trước lãi vay, EV gồm cả nợ).</li>
<li>So sánh được công ty có <b>chính sách khấu hao khác nhau</b> (EBITDA trước khấu hao), phù hợp với ngành thâm dụng vốn: viễn thông, thép, điện.</li>
<li>EBITDA thường dương ngay cả khi EPS âm.</li>
</ul>
<p><b>Hạn chế:</b> EBITDA bỏ qua nhu cầu đầu tư (capex) và vốn lưu động, nên phóng đại dòng tiền thật của công ty cần tái đầu tư nhiều. ${t('evsales', 'EV/Sales')} dùng cho công ty đang lỗ ở cấp EBITDA; EV/EBIT khi khấu hao phản ánh đúng chi phí thay thế tài sản.</p>

<div class="example"><div class="ex-h">Ví dụ 5.1 - Từ EV/EBITDA của nhóm về giá mỗi cổ phiếu</div>
<p>Công ty Đông Á: vốn hóa 2.000 (100 cổ phiếu, giá 20), nợ 800, tiền 300, EBITDA 400. Trung vị EV/EBITDA của nhóm so sánh là 7,0. Tính EV/EBITDA của Đông Á và giá trị mỗi cổ phiếu suy ra từ nhóm.</p>
<details><summary>Xem lời giải</summary>
<p>EV = 2.000 + 800 - 300 = 2.500; EV/EBITDA = 2.500 / 400 = <b>6,25</b> (thấp hơn nhóm).<br>
EV suy ra = 7,0 × 400 = 2.800.<br>Giá trị vốn chủ = 2.800 - 800 + 300 = 2.300; mỗi cổ phiếu = <b>23,0</b> so với giá 20.</p>
<p class="warn">Bước hay quên: EV suy ra phải <b>trừ nợ, cộng tiền</b> mới ra vốn chủ. Lấy 2.800/100 = 28 là sai.</p></details></div>`,
    },
    {
      title: '6. Chọn nhóm so sánh (peer group)',
      minutes: 15,
      html: `
<p>Kết quả phương pháp so sánh tốt đến đâu phụ thuộc vào việc các công ty trong nhóm có thật sự "tương tự" không. Có hai cách tìm:</p>
<h4>a) Theo phân ngành</h4>
<p>Bắt đầu từ các hệ thống ${t('gics', 'phân ngành (GICS, ICB...)')}: chọn các công ty cùng ngành hoặc cùng phân ngành hẹp. Ưu điểm: nhanh, khách quan. Nhưng cùng ngành chưa chắc cùng đặc điểm: một hãng hàng không giá rẻ và một hãng truyền thống cùng mã ngành nhưng mô hình kinh doanh khác hẳn. Chi tiết về phân ngành học ở EQ-09.</p>
<h4>b) Theo các yếu tố quyết định lợi suất kỳ vọng</h4>
<p>Từ công thức bội số hợp lý, bội số phụ thuộc vào <b>tăng trưởng</b>, <b>rủi ro</b> (r) và <b>khả năng sinh lời</b> (ROE, biên lợi nhuận, tỷ lệ chi trả). Công ty tương tự là công ty tương tự về các yếu tố này:</p>
<ul>
<li>Tốc độ tăng trưởng doanh thu và lợi nhuận kỳ vọng.</li>
<li>Rủi ro: beta, đòn bẩy, độ biến động lợi nhuận.</li>
<li>Khả năng sinh lời: ROE, biên lợi nhuận.</li>
<li>Quy mô, thị trường hoạt động (quốc gia), mô hình kinh doanh, giai đoạn vòng đời.</li>
</ul>

<h4>Tính chuẩn: trung vị hay trung bình?</h4>
<div class="example"><div class="ex-h">Ví dụ 6.1 - Công ty Minh Long</div>
<p>Năm công ty so sánh có P/E forward lần lượt 14, 16, 18, 15 và 40 (công ty cuối có EPS năm nay rất thấp do một khoản chi phí bất thường). EPS forward của Minh Long là 3,50, giá 50. Ước tính giá trị bằng P/E trung vị và trung bình.</p>
<details><summary>Xem lời giải</summary>
<p>Trung vị = <b>16</b>; trung bình = 103/5 = <b>20,6</b>.<br>Theo trung vị: 16 × 3,50 = <b>56,00</b>. Theo trung bình: 20,6 × 3,50 = 72,10.</p>
<p>Một giá trị ngoại lai (40) kéo trung bình lên mạnh, làm Minh Long trông rẻ hơn thực tế. Vì vậy thường dùng <b>trung vị</b>. Với giá 50, theo trung vị Minh Long có P/E forward 14,3, thấp hơn nhóm. Trước khi kết luận "rẻ", hãy so tăng trưởng và rủi ro của Minh Long với nhóm. Có thể loại công ty có P/E 40 nếu nó không thật sự tương tự.</p></details></div>
<p class="tip">Chuẩn so sánh có thể là: nhóm công ty cùng ngành, trung bình ngành, chỉ số thị trường (ví dụ VN-Index, S&amp;P 500), hoặc bội số lịch sử của chính công ty. Mỗi chuẩn trả lời một câu hỏi khác nhau, nên nói rõ đang so với cái gì.</p>`,
    },
    {
      title: '7. Bội số theo số liệu quá khứ, hiện tại và dự phóng',
      minutes: 12,
      html: `
<table class="plain"><thead><tr><th>Mẫu số dựa trên</th><th>Ví dụ</th><th>Khi nào hợp</th></tr></thead><tbody>
<tr><td>Quá khứ (trailing, LTM)</td><td>EPS 12 tháng gần nhất; book value cuối quý gần nhất</td><td>Công ty ổn định; cần số liệu đã kiểm toán, khách quan</td></tr>
<tr><td>Hiện tại</td><td>Book value hiện tại, doanh thu năm tài chính đang diễn ra</td><td>Chỉ tiêu bảng cân đối (P/B) luôn dùng số gần nhất</td></tr>
<tr><td>Dự phóng (forward)</td><td>EPS dự báo năm tới, EBITDA năm sau</td><td>Công ty tăng trưởng nhanh hoặc đang thay đổi (tái cấu trúc, mua bán sáp nhập); giá trị gắn với tương lai</td></tr>
<tr><td>Chuẩn hóa (normalized)</td><td>EPS bình quân qua một chu kỳ</td><td>Công ty chu kỳ, công ty có năm bất thường</td></tr>
</tbody></table>
<div class="example"><div class="ex-h">Ví dụ 7.1 - Công ty chu kỳ</div>
<p>Công ty thép có EPS 5 năm qua: 3,00; 4,50; 1,00; -0,50; 2,50. Giá hiện tại 40. Tính P/E trailing và P/E chuẩn hóa (dùng EPS bình quân 5 năm).</p>
<details><summary>Xem lời giải</summary><p>P/E trailing = 40 / 2,50 = <b>16,0</b>. EPS chuẩn hóa = (3,00 + 4,50 + 1,00 - 0,50 + 2,50)/5 = 2,10; P/E chuẩn hóa = 40 / 2,10 = <b>19,05</b>.</p>
<p>Với công ty chu kỳ, P/E trailing thường <b>thấp ở đỉnh chu kỳ</b> (EPS cao bất thường) và <b>cao ở đáy</b>, ngược với trực giác. Mua vì "P/E thấp" ở đỉnh chu kỳ là bẫy kinh điển.</p></details></div>
<h4>Quy tắc khi dùng</h4>
<ul>
<li><b>Nhất quán</b>: công ty mục tiêu và nhóm so sánh phải dùng cùng thời điểm (cùng trailing hoặc cùng forward), cùng định nghĩa chỉ tiêu.</li>
<li>Số dự phóng nên lấy từ <b>cùng một nguồn</b> (cùng một nhà phân tích hoặc đồng thuận) để tránh khác biệt về giả định.</li>
<li>Bội số dự phóng cũng dùng để tính <b>giá trị cuối kỳ</b> trong mô hình DCF (EQ-06): V<sub>n</sub> = bội số kỳ vọng × chỉ tiêu năm n hoặc n + 1.</li>
</ul>`,
    },
    {
      title: '8. Tóm tắt và bẫy thường gặp',
      minutes: 6,
      html: `
<table class="plain"><thead><tr><th>Tình huống</th><th>Nhớ</th></tr></thead><tbody>
<tr><td>Comparables vs fundamentals</td><td>So với nhóm (tương đối) · so với bội số hợp lý từ DCF (nội tại)</td></tr>
<tr><td>P/E hợp lý</td><td>Leading = chi trả / (r - g); trailing nhân thêm (1 + g)</td></tr>
<tr><td>Trailing vs forward</td><td>Forward thấp hơn khi EPS tăng; so sánh phải cùng loại</td></tr>
<tr><td>EPS âm</td><td>Dùng E/P, P/S, P/B, EV/Sales</td></tr>
<tr><td>P/B hợp lý</td><td>(ROE - g)/(r - g); ROE &gt; r thì P/B &gt; 1</td></tr>
<tr><td>EV/EBITDA</td><td>Tử và mẫu nhất quán; EV suy ra trừ nợ, cộng tiền mới ra vốn chủ</td></tr>
<tr><td>Chuẩn của nhóm</td><td>Dùng trung vị để tránh giá trị ngoại lai</td></tr>
<tr><td>Bội số thấp hơn nhóm</td><td>Chưa chắc rẻ: kiểm tra tăng trưởng, rủi ro, ROE</td></tr>
<tr><td>Công ty chu kỳ</td><td>Dùng EPS chuẩn hóa; P/E trailing thấp ở đỉnh chu kỳ</td></tr>
</tbody></table>
<p>Tiếp theo: tab <b>Luyện tập</b> 10 câu, rồi EQ-08 để xem các dự báo (EPS, EBITDA, dòng tiền) được tạo ra từ mô hình báo cáo tài chính như thế nào.</p>`,
    },
  ];

  const glossary = {
    multiple: ['Valuation multiple', 'Bội số định giá', 'Tỷ số giữa giá (hoặc EV) và một chỉ tiêu cơ bản; chuẩn hóa giá để so sánh.'],
    comparables: ['Method of comparables', 'Phương pháp so sánh', 'Định giá bằng bội số của công ty hoặc chuẩn tương tự, dựa trên luật một giá.'],
    fundamentals: ['Method of forecasted fundamentals', 'Phương pháp dự báo cơ bản', 'Bội số hợp lý tính từ mô hình DCF với dự báo tăng trưởng, rủi ro, chi trả.'],
    lawone: ['Law of one price', 'Luật một giá', 'Hai tài sản giống hệt nhau phải có cùng giá.'],
    justified: ['Justified multiple', 'Bội số hợp lý', 'Bội số mà cổ phiếu "đáng có" theo các yếu tố cơ bản của nó.'],
    timeseries: ['Time-series comparison', 'So sánh theo thời gian', 'So bội số hiện tại với bội số lịch sử của chính công ty.'],
    pe: ['Price-to-earnings ratio (P/E)', 'Tỷ số giá trên lợi nhuận', 'Giá cổ phiếu chia EPS; số đồng nhà đầu tư trả cho 1 đồng lợi nhuận.'],
    trailing: ['Trailing P/E', 'P/E quá khứ', 'Giá chia EPS 12 tháng gần nhất đã công bố.'],
    forward: ['Forward (leading) P/E', 'P/E dự phóng', 'Giá chia EPS dự báo 12 tháng hoặc năm tài chính tới.'],
    underlying: ['Underlying (persistent) earnings', 'Lợi nhuận cốt lõi', 'Lợi nhuận đã loại các khoản bất thường, không lặp lại.'],
    normalized: ['Normalized EPS', 'EPS chuẩn hóa', 'EPS ước tính ở giữa chu kỳ kinh doanh, ví dụ bình quân qua một chu kỳ.'],
    ey: ['Earnings yield', 'Tỷ suất lợi nhuận', 'E/P, nghịch đảo của P/E; dùng được khi EPS âm.'],
    payout: ['Dividend payout ratio', 'Tỷ lệ chi trả cổ tức', 'Cổ tức chia lợi nhuận.'],
    peg: ['PEG ratio', 'Tỷ số PEG', 'P/E chia tốc độ tăng EPS kỳ vọng (theo %).'],
    pb: ['Price-to-book ratio (P/B)', 'Tỷ số giá trên giá trị sổ sách', 'Giá chia book value mỗi cổ phiếu; hợp lý = (ROE - g)/(r - g).'],
    ps: ['Price-to-sales ratio (P/S)', 'Tỷ số giá trên doanh thu', 'Giá chia doanh thu mỗi cổ phiếu; dùng được cho công ty đang lỗ.'],
    pcf: ['Price-to-cash-flow ratio (P/CF)', 'Tỷ số giá trên dòng tiền', 'Giá chia dòng tiền mỗi cổ phiếu (CFO, FCFE hoặc EPS + khấu hao).'],
    evebitda: ['EV/EBITDA', 'Bội số EV trên EBITDA', 'Giá trị doanh nghiệp chia lợi nhuận trước lãi vay, thuế và khấu hao.'],
    evsales: ['EV/Sales', 'Bội số EV trên doanh thu', 'Giá trị doanh nghiệp chia doanh thu; dùng khi EBITDA âm.'],
    gics: ['Industry classification (GICS, ICB)', 'Hệ thống phân ngành', 'Hệ thống xếp công ty vào ngành theo hoạt động kinh doanh chính.'],
  };

  const practice = [
    { q: 'Cổ phiếu giá 54. EPS 12 tháng qua là 4,50; EPS dự báo năm tới là 5,40. P/E forward gần nhất với:', choices: ['12,0', '10,0', '0,10'], answer: 1, explain: 'Forward P/E = 54 / 5,40 = 10,0. Đáp án A là P/E trailing (54/4,50). Đáp án C là earnings yield forward (5,40/54), nghịch đảo của P/E.' },
    { q: 'Công ty có tỷ lệ chi trả 35%, lợi suất yêu cầu 12%, tăng trưởng 7% mãi mãi. P/E hợp lý leading gần nhất với:', choices: ['7,00', '7,49', '13,00'], answer: 0, explain: 'P0/E1 = 0,35 / (12% - 7%) = 7,00. Đáp án B là P/E hợp lý trailing (nhân thêm 1,07). Đáp án C dùng tỷ lệ giữ lại 65% thay cho tỷ lệ chi trả.' },
    { q: 'Công ty có vốn hóa 3.000, nợ 1.000, cổ phiếu ưu đãi 200, tiền 400, EBITDA 500. EV/EBITDA gần nhất với:', choices: ['6,0', '9,2', '7,6'], answer: 2, explain: 'EV = 3.000 + 1.000 + 200 - 400 = 3.800; EV/EBITDA = 7,6. Đáp án B cộng tiền thay vì trừ. Đáp án A dùng vốn hóa thay cho EV (không nhất quán với EBITDA).' },
    { q: 'Trung vị EV/EBITDA của nhóm so sánh là 8,0. Công ty mục tiêu có EBITDA 250, nợ 1.000, tiền 200, 50 cổ phiếu. Giá trị mỗi cổ phiếu suy ra gần nhất với:', choices: ['24,00', '40,00', '16,00'], answer: 0, explain: 'EV = 8 x 250 = 2.000; vốn chủ = 2.000 - 1.000 + 200 = 1.200; mỗi cổ phiếu = 24,00. Đáp án B coi EV là vốn chủ. Đáp án C trừ cả tiền (sai dấu).' },
    { q: 'Năm công ty so sánh có P/E 12, 13, 15, 16 và 35. EPS dự báo của công ty mục tiêu là 2,80. Dùng chuẩn phù hợp nhất, giá trị ước tính gần nhất với:', choices: ['50,96', '42,00', '33,60'], answer: 1, explain: 'Trung vị (15) ít bị ảnh hưởng bởi giá trị ngoại lai 35: 15 x 2,80 = 42,00. Đáp án A dùng trung bình 18,2, bị kéo lên bởi ngoại lai. Đáp án C dùng P/E thấp nhất.' },
    { q: 'Ngân hàng có ROE bền vững 15%, tăng trưởng 6%, lợi suất yêu cầu 11%. P/B hợp lý gần nhất với:', choices: ['1,36', '0,82', '1,80'], answer: 2, explain: 'P/B hợp lý = (ROE - g)/(r - g) = 9%/5% = 1,80. Đáp án A là ROE/r, bỏ qua tăng trưởng. Đáp án B chia (ROE - g) cho r.' },
    { q: 'Với một công ty công nghệ mới niêm yết, doanh thu tăng nhanh nhưng lợi nhuận và EBITDA vẫn âm, bội số phù hợp NHẤT là:', choices: ['P/S hoặc EV/Sales', 'P/E trailing', 'EV/EBITDA'], answer: 0, explain: 'Doanh thu luôn dương nên P/S và EV/Sales dùng được khi lợi nhuận âm. P/E và EV/EBITDA vô nghĩa khi mẫu số âm.' },
    { q: 'Khi xây dựng nhóm so sánh dựa trên các yếu tố quyết định lợi suất kỳ vọng, nhà phân tích nên ưu tiên các công ty:', choices: ['Có cùng giá cổ phiếu và cùng số cổ phiếu lưu hành', 'Có tốc độ tăng trưởng, rủi ro và khả năng sinh lời tương tự', 'Niêm yết trên cùng sàn giao dịch, bất kể ngành'], answer: 1, explain: 'Bội số hợp lý phụ thuộc vào tăng trưởng (g), rủi ro (r) và khả năng sinh lời (ROE, chi trả), nên công ty tương tự về các yếu tố này mới là so sánh đúng. Giá cổ phiếu tuyệt đối và sàn niêm yết không quyết định bội số.' },
    { q: 'Một công ty xi măng đang ở đỉnh chu kỳ, EPS 12 tháng qua cao bất thường. P/E trailing của công ty này nhiều khả năng:', choices: ['Phản ánh chính xác giá trị dài hạn', 'Cao bất thường, khiến cổ phiếu trông đắt', 'Thấp bất thường, khiến cổ phiếu trông rẻ; nên dùng EPS chuẩn hóa'], answer: 2, explain: 'EPS đỉnh chu kỳ làm mẫu số lớn, nên P/E trailing thấp và cổ phiếu trông rẻ giả tạo. EPS chuẩn hóa qua chu kỳ cho bội số đáng tin hơn. B mô tả tình huống ở đáy chu kỳ.' },
    { q: 'Cổ phiếu đang giao dịch ở P/E leading 14. Dựa trên tỷ lệ chi trả, tăng trưởng và lợi suất yêu cầu, P/E hợp lý leading là 11. Theo phương pháp dự báo cơ bản, cổ phiếu:', choices: ['Có vẻ bị định giá cao', 'Có vẻ bị định giá thấp', 'Được định giá hợp lý vì cùng dùng P/E leading'], answer: 0, explain: 'P/E thực tế (14) cao hơn P/E hợp lý (11), tức thị trường trả nhiều hơn mức cơ bản cho phép: có vẻ bị định giá cao. B đảo ngược quan hệ.' },
  ];

  // Widget: P/E hợp lý leading và trailing từ Gordon.
  const widgets = {
    justifiedPE(el) {
      el.innerHTML = `
        <div class="w-row"><label>Tỷ lệ chi trả: <b data-o="p">40%</b><input type="range" min="10" max="100" step="5" value="40" data-i="p"></label>
        <label>Lợi suất yêu cầu r: <b data-o="r">11%</b><input type="range" min="6" max="16" step="0.5" value="11" data-i="r"></label>
        <label>Tăng trưởng g: <b data-o="g">6%</b><input type="range" min="0" max="10" step="0.5" value="6" data-i="g"></label></div>
        <div class="w-out"><div class="w-price" data-o="v"></div><div class="w-bar"><span data-o="bar"></span><i></i></div><div class="w-note" data-o="note"></div></div>`;
      const q = s => el.querySelector(s);
      const f = (x, k = 2) => x.toFixed(k).replace('.', ',');
      const upd = () => {
        const p = +q('[data-i="p"]').value / 100, r = +q('[data-i="r"]').value / 100, g = +q('[data-i="g"]').value / 100;
        q('[data-o="p"]').textContent = `${f(p * 100, 0)}%`;
        q('[data-o="r"]').textContent = `${f(r * 100, 1)}%`;
        q('[data-o="g"]').textContent = `${f(g * 100, 1)}%`;
        if (r <= g) {
          q('[data-o="v"]').textContent = 'r phải lớn hơn g';
          q('[data-o="bar"]').style.width = '0%';
          q('[data-o="note"]').textContent = '';
          return;
        }
        const lead = p / (r - g), trail = lead * (1 + g);
        q('[data-o="v"]').textContent = `P/E hợp lý leading = ${f(lead)} · trailing = ${f(trail)}`;
        q('[data-o="bar"]').style.width = `${Math.min(100, lead * 2.5)}%`;
        q('[data-o="note"]').textContent = 'P/E hợp lý tăng khi g tăng, khi r giảm, và khi tỷ lệ chi trả tăng (với g giữ nguyên).';
      };
      el.addEventListener('input', upd);
      upd();
    },
  };

  window.LESSONS['EQ-07'] = {
    moduleId: 'EQ-07',
    calculator: 'BA II Plus',
    warmup: [
      'Ôn EQ-06: viết công thức Gordon và g = b x ROE.',
      'Ôn EQ-05: EV gồm những khoản nào? Khoản nào trừ?',
      'Nếu hai căn hộ giống hệt nhau, một căn rao 50 triệu/m2 và một căn 40 triệu/m2, bạn cần biết thêm gì trước khi kết luận căn thứ hai rẻ?',
    ],
    sections,
    glossary,
    practice,
    widgets,
    slides: [],
    wrapup: [
      'Phân biệt method of comparables và method of forecasted fundamentals bằng ví dụ của bạn.',
      'Viết công thức P/E hợp lý leading, trailing và P/B hợp lý.',
      'Vì sao nên dùng trung vị của nhóm so sánh, và vì sao P/E trailing của công ty chu kỳ dễ đánh lừa?',
    ],
  };
}());
