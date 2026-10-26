// Bài giảng FSA-09 - Analysis of Income Taxes (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t, frac } = window.CFAH;

  const sections = [
    {
      title: '1. Bức tranh lớn',
      minutes: 5,
      html: `
<p>Mỗi doanh nghiệp làm <b>hai bộ sổ</b> về thuế thu nhập: một bộ theo chuẩn mực kế toán (IFRS hoặc US GAAP) để lập báo cáo tài chính cho nhà đầu tư, một bộ theo luật thuế để nộp tờ khai. Hai bộ sổ có mục tiêu khác nhau nên con số lợi nhuận khác nhau.</p>
<div class="key">Chênh lệch giữa hai bộ sổ chia làm hai loại: chênh lệch <b>sẽ đảo ngược</b> trong tương lai (tạo ra ${t('dtl', 'thuế hoãn lại phải trả (DTL)')} hoặc ${t('dta', 'tài sản thuế hoãn lại (DTA)')}) và chênh lệch <b>không bao giờ đảo ngược</b> (làm thuế suất hiệu dụng khác thuế suất luật định).</div>
<p>Module này trả lời 4 câu hỏi, tương ứng 4 LOS:</p>
<ol>
  <li>Lợi nhuận kế toán, thu nhập chịu thuế, thuế phải nộp và chi phí thuế khác nhau thế nào? Chênh lệch tạm thời khác chênh lệch vĩnh viễn ra sao? (LOS 1, phần 2 và 4)</li>
  <li>DTL và DTA hình thành thế nào, và nhà phân tích nên coi chúng là nợ, vốn chủ hay bỏ qua? (LOS 2, phần 3, 5 và 6)</li>
  <li>Thuế suất hiệu dụng, thuế suất luật định và thuế suất tiền mặt khác nhau thế nào? (LOS 3, phần 7)</li>
  <li>Đọc thuyết minh thuế và bảng đối chiếu thuế suất hiệu dụng để rút ra điều gì? (LOS 4, phần 7 và 8)</li>
</ol>
<p class="tip">Module này nối tiếp phần tài sản dài hạn và khấu hao (FSA-07) và nợ dài hạn (FSA-08). Bạn chỉ cần biết khấu hao đường thẳng và khấu hao nhanh là đủ.</p>`,
    },
    {
      title: '2. Hai bộ sổ: thuật ngữ cần phân biệt',
      minutes: 8,
      html: `
<table class="plain"><thead><tr><th>Phía tờ khai thuế</th><th>Phía báo cáo tài chính</th></tr></thead><tbody>
<tr><td>${t('taxable', 'Thu nhập chịu thuế (taxable income)')}: thu nhập tính thuế theo luật thuế</td><td>${t('acctprofit', 'Lợi nhuận kế toán (accounting profit)')}: lợi nhuận trước thuế theo chuẩn mực kế toán</td></tr>
<tr><td>${t('payable', 'Thuế phải nộp (taxes payable)')}: thu nhập chịu thuế × thuế suất, là nghĩa vụ thuế của kỳ hiện tại</td><td>${t('taxexp', 'Chi phí thuế thu nhập (income tax expense)')}: số ghi trên báo cáo kết quả kinh doanh, gồm thuế hiện hành và thuế hoãn lại</td></tr>
<tr><td>${t('taxpaid', 'Thuế đã nộp bằng tiền (income tax paid)')}: tiền thực chi trong kỳ</td><td>${t('carrying', 'Giá trị ghi sổ (carrying amount)')}: giá trị tài sản hoặc nợ trên bảng cân đối kế toán</td></tr>
<tr><td>${t('taxbase', 'Cơ sở tính thuế (tax base)')}: giá trị của tài sản hoặc nợ theo luật thuế</td><td>DTL, DTA, ${t('va', 'dự phòng giảm giá DTA (valuation allowance)')}</td></tr>
<tr><td>${t('nol', 'Lỗ tính thuế chuyển sang kỳ sau (tax loss carryforward)')}</td><td>Tạo ra DTA vì giúp giảm thuế trong tương lai</td></tr>
</tbody></table>
<div class="key">Chi phí thuế = Thuế phải nộp + ΔDTL - ΔDTA<br>DTL tăng làm chi phí thuế lớn hơn thuế phải nộp; DTA tăng làm chi phí thuế nhỏ hơn thuế phải nộp.</div>
<p>Thuế phải nộp (taxes payable) và thuế đã nộp (tax paid) cũng có thể khác nhau, vì doanh nghiệp có thể nộp tạm tính, nộp bù hoặc được hoàn thuế. Phân biệt này sẽ dùng ở phần 7 khi tính thuế suất tiền mặt.</p>
<div class="example"><div class="ex-h">Ví dụ 2.1</div>
<p>Năm nay công ty có lợi nhuận kế toán 500, khấu hao trên báo cáo tài chính 80 nhưng khấu hao theo luật thuế 120. Thuế suất 30%, không có chênh lệch nào khác. Tính thuế phải nộp và chi phí thuế.</p>
<details><summary>Xem lời giải</summary>
<p>Thu nhập chịu thuế = 500 - (120 - 80) = 460. Thuế phải nộp = 460 × 30% = <b>138</b>.<br>
Vì chênh lệch khấu hao là tạm thời (cuối đời tài sản tổng khấu hao hai bên bằng nhau), chi phí thuế = 500 × 30% = <b>150</b>. Phần chênh 12 là ΔDTL: 150 = 138 + 12.</p></details></div>`,
    },
    {
      title: '3. Cơ sở tính thuế và cách DTL, DTA hình thành',
      minutes: 12,
      html: `
<p>Chuẩn mực tiếp cận từ <b>bảng cân đối</b>: so sánh giá trị ghi sổ với cơ sở tính thuế của từng tài sản và nợ. Chênh lệch giữa hai con số là ${t('tempdiff', 'chênh lệch tạm thời (temporary difference)')}.</p>
<h4>Cơ sở tính thuế</h4>
<ul>
<li><b>Tài sản:</b> số tiền sẽ được khấu trừ khi tính thuế trong tương lai. Ví dụ máy móc nguyên giá 120.000, luật thuế đã cho khấu hao 40.000, thì tax base = 80.000.</li>
<li><b>Nợ phải trả:</b> giá trị ghi sổ trừ đi số tiền sẽ được khấu trừ thuế trong tương lai. Ví dụ dự phòng bảo hành 3.000 chỉ được trừ khi thực chi, nên tax base = 3.000 - 3.000 = 0.</li>
</ul>
<div class="formula">Chênh lệch tạm thời × thuế suất = DTL hoặc DTA</div>
<table class="plain"><thead><tr><th></th><th>Giá trị ghi sổ &gt; tax base</th><th>Giá trị ghi sổ &lt; tax base</th></tr></thead><tbody>
<tr><td><b>Tài sản</b></td><td>DTL</td><td>DTA</td></tr>
<tr><td><b>Nợ phải trả</b></td><td>DTA</td><td>DTL</td></tr>
</tbody></table>
<h4>Trực giác theo báo cáo kết quả kinh doanh</h4>
<ul>
<li><b>DTL</b>: doanh thu ghi nhận trên sổ kế toán <b>trước</b> khi bị đánh thuế, hoặc chi phí được trừ thuế <b>trước</b> khi ghi nhận trên sổ kế toán. Điển hình: luật thuế cho khấu hao nhanh hơn kế toán. Hôm nay nộp ít, sau này nộp nhiều.</li>
<li><b>DTA</b>: doanh thu bị đánh thuế <b>trước</b> khi ghi nhận trên sổ kế toán (doanh thu nhận trước), hoặc chi phí ghi nhận trên sổ kế toán <b>trước</b> khi được trừ thuế (bảo hành, nghĩa vụ phúc lợi sau nghỉ việc, dự phòng nợ xấu), và lỗ tính thuế chuyển sang kỳ sau. Hôm nay nộp nhiều, sau này nộp ít.</li>
</ul>
<div class="example"><div class="ex-h">Ví dụ 3.1 - Bảo hành tạo DTA</div>
<p>Năm 1 công ty trích chi phí bảo hành 5.000 trên báo cáo tài chính, thực chi 2.000. Luật thuế chỉ cho trừ khi thực chi. Thuế suất 25%.</p>
<details><summary>Xem lời giải</summary>
<p>Dự phòng bảo hành cuối năm = 5.000 - 2.000 = 3.000 (giá trị ghi sổ của nợ). Tax base = 3.000 - 3.000 = 0.<br>
Nợ có giá trị ghi sổ lớn hơn tax base nên tạo <b>DTA</b> = 3.000 × 25% = <b>750</b>. Khi công ty thực chi 3.000 trong các năm sau, khoản này được trừ thuế và DTA đảo ngược.</p></details></div>
<div class="example"><div class="ex-h">Ví dụ 3.2 - Lỗ tính thuế</div>
<p>Công ty khởi nghiệp lỗ tính thuế 40.000, luật cho chuyển lỗ sang các năm sau, thuế suất 25%.</p>
<details><summary>Xem lời giải</summary><p>DTA = 40.000 × 25% = <b>10.000</b>, với điều kiện công ty có khả năng có lãi chịu thuế trong tương lai để dùng khoản lỗ này (xem valuation allowance ở phần 6).</p></details></div>`,
    },
    {
      title: '4. Chênh lệch tạm thời và chênh lệch vĩnh viễn',
      minutes: 7,
      html: `
<p>${t('permdiff', 'Chênh lệch vĩnh viễn (permanent difference)')} là khoản chênh giữa lợi nhuận kế toán và thu nhập chịu thuế <b>không bao giờ đảo ngược</b>. Nó không tạo DTL hay DTA, mà làm ${t('etr', 'thuế suất hiệu dụng')} khác ${t('statutory', 'thuế suất luật định')}.</p>
<table class="plain"><thead><tr><th></th><th>Chênh lệch tạm thời</th><th>Chênh lệch vĩnh viễn</th></tr></thead><tbody>
<tr><td>Có đảo ngược?</td><td>Có, ở kỳ sau</td><td>Không bao giờ</td></tr>
<tr><td>Tạo DTL/DTA?</td><td>Có</td><td>Không</td></tr>
<tr><td>Ảnh hưởng thuế suất hiệu dụng?</td><td>Không (chi phí thuế vẫn tính theo lợi nhuận kế toán)</td><td>Có</td></tr>
<tr><td>Ví dụ</td><td>Khấu hao nhanh cho thuế, bảo hành, doanh thu nhận trước, lỗ chuyển sang kỳ sau</td><td>Thu nhập miễn thuế (lãi trái phiếu chính quyền địa phương ở Mỹ), chi phí không được trừ (tiền phạt), ${t('credit', 'tín dụng thuế (tax credit)')}</td></tr>
</tbody></table>
<div class="example"><div class="ex-h">Ví dụ 4.1</div>
<p>Lợi nhuận kế toán 1.000, trong đó có 80 lãi trái phiếu miễn thuế. Thuế suất luật định 25%, không có chênh lệch tạm thời. Tính chi phí thuế và thuế suất hiệu dụng.</p>
<details><summary>Xem lời giải</summary><p>Thu nhập chịu thuế = 1.000 - 80 = 920. Thuế phải nộp = chi phí thuế = 920 × 25% = <b>230</b> (không có thuế hoãn lại). Thuế suất hiệu dụng = 230 / 1.000 = <b>23%</b>, thấp hơn 25% vì có thu nhập miễn thuế.</p></details></div>
<p class="warn"><b>Bẫy:</b> không tạo DTL cho chênh lệch vĩnh viễn. Nếu đề hỏi "khoản nào làm thuế suất hiệu dụng khác thuế suất luật định", đáp án là chênh lệch vĩnh viễn (hoặc thuế suất ở nước ngoài khác), không phải khấu hao nhanh.</p>`,
    },
    {
      title: '5. Ví dụ đầy đủ: khấu hao nhanh tạo DTL rồi đảo ngược',
      minutes: 10,
      html: `
<p>Công ty mua máy 120.000 đầu năm 1, không có giá trị thanh lý. Kế toán khấu hao đường thẳng 4 năm (30.000/năm); luật thuế cho khấu hao đường thẳng 3 năm (40.000/năm). Lợi nhuận trước khấu hao và thuế mỗi năm là 100.000. Thuế suất 25%.</p>
<table class="plain"><thead><tr><th>Cuối năm</th><th>1</th><th>2</th><th>3</th><th>4</th></tr></thead><tbody>
<tr><td>Giá trị ghi sổ</td><td>90.000</td><td>60.000</td><td>30.000</td><td>0</td></tr>
<tr><td>Tax base</td><td>80.000</td><td>40.000</td><td>0</td><td>0</td></tr>
<tr><td>Chênh lệch tạm thời</td><td>10.000</td><td>20.000</td><td>30.000</td><td>0</td></tr>
<tr><td><b>DTL (× 25%)</b></td><td>2.500</td><td>5.000</td><td>7.500</td><td>0</td></tr>
<tr><td>Lợi nhuận kế toán</td><td>70.000</td><td>70.000</td><td>70.000</td><td>70.000</td></tr>
<tr><td>Thu nhập chịu thuế</td><td>60.000</td><td>60.000</td><td>60.000</td><td>100.000</td></tr>
<tr><td>Thuế phải nộp</td><td>15.000</td><td>15.000</td><td>15.000</td><td>25.000</td></tr>
<tr><td>ΔDTL</td><td>+2.500</td><td>+2.500</td><td>+2.500</td><td>-7.500</td></tr>
<tr><td><b>Chi phí thuế</b></td><td>17.500</td><td>17.500</td><td>17.500</td><td>17.500</td></tr>
</tbody></table>
<p>Ba năm đầu công ty nộp ít hơn chi phí thuế ghi nhận, DTL tích lũy lên 7.500. Năm 4 luật thuế không còn khấu hao để trừ, thuế phải nộp tăng lên 25.000 và DTL đảo ngược về 0. Tổng thuế phải nộp 4 năm = 70.000 = tổng chi phí thuế 4 năm: chênh lệch chỉ là <b>thời điểm</b>.</p>
<div class="key">Chi phí thuế được "làm phẳng" theo lợi nhuận kế toán (17.500 = 25% × 70.000 mỗi năm), còn thuế phải nộp dao động theo luật thuế. DTL là khoản thuế đã hoãn, sẽ phải nộp khi chênh lệch đảo ngược.</div>
<p class="tip"><b>Kiểm tra nhanh:</b> DTL cuối kỳ = (giá trị ghi sổ - tax base) × thuế suất. Đừng cộng dồn ΔDTL nếu đề đã cho đủ số liệu bảng cân đối, tính thẳng cho nhanh và ít sai.</p>`,
    },
    {
      title: '6. Thay đổi thuế suất, valuation allowance và cách nhà phân tích xử lý DTL/DTA',
      minutes: 10,
      html: `
<h4>a) Thay đổi thuế suất</h4>
<p>DTL và DTA được đo lường theo thuế suất <b>sẽ áp dụng khi chênh lệch đảo ngược</b>. Khi thuế suất mới được ban hành, toàn bộ số dư DTL/DTA được đánh giá lại ngay, phần thay đổi đi vào chi phí thuế của kỳ đó.</p>
<div class="example"><div class="ex-h">Ví dụ 6.1</div>
<p>Tiếp ví dụ phần 5: cuối năm 2 chênh lệch tạm thời là 20.000, DTL = 5.000 ở thuế suất 25%. Luật mới giảm thuế suất xuống 20%.</p>
<details><summary>Xem lời giải</summary><p>DTL mới = 20.000 × 20% = <b>4.000</b>, giảm 1.000. Khoản giảm này làm <b>chi phí thuế giảm 1.000</b> và lợi nhuận ròng tăng. Ngược lại, công ty có DTA lớn sẽ bị giảm lợi nhuận khi thuế suất giảm, vì lợi ích thuế tương lai của DTA nhỏ đi.</p></details></div>
<table class="plain"><thead><tr><th>Thuế suất</th><th>DTL</th><th>DTA</th><th>Chi phí thuế (nếu DTL &gt; DTA)</th></tr></thead><tbody>
<tr><td>Tăng</td><td>Tăng</td><td>Tăng</td><td>Tăng</td></tr>
<tr><td>Giảm</td><td>Giảm</td><td>Giảm</td><td>Giảm</td></tr>
</tbody></table>
<h4>b) Valuation allowance</h4>
<p>DTA chỉ có giá trị nếu công ty có đủ thu nhập chịu thuế trong tương lai để dùng nó. Theo US GAAP, DTA được ghi nhận đầy đủ rồi trừ đi ${t('va', 'valuation allowance')} nếu <b>nhiều khả năng hơn không (more likely than not, trên 50%)</b> là một phần DTA sẽ không dùng được. Theo IFRS, DTA chỉ được ghi nhận trong phạm vi <b>có khả năng (probable)</b> dùng được, không có tài khoản dự phòng riêng.</p>
<ul>
<li>Tăng valuation allowance → DTA ròng giảm, chi phí thuế tăng, lợi nhuận ròng giảm. Thường là tín hiệu ban lãnh đạo bi quan về lợi nhuận tương lai.</li>
<li>Giảm valuation allowance → lợi nhuận tăng. Nếu cùng lúc công ty không có dấu hiệu kinh doanh tốt lên, đó có thể là cách <b>làm đẹp lợi nhuận</b> (xem FSA-10).</li>
</ul>
<h4>c) DTL là nợ hay vốn chủ?</h4>
<table class="plain"><thead><tr><th>Tình huống</th><th>Cách xử lý khi phân tích</th></tr></thead><tbody>
<tr><td>DTL được kỳ vọng đảo ngược (phải nộp thuế thật)</td><td>Coi là <b>nợ phải trả</b> (lý tưởng là theo giá trị hiện tại)</td></tr>
<tr><td>DTL không được kỳ vọng đảo ngược, ví dụ công ty tăng trưởng liên tục đầu tư tài sản mới nên chênh lệch khấu hao không bao giờ hết</td><td>Coi là <b>vốn chủ sở hữu</b></td></tr>
<tr><td>Thời điểm và số tiền không chắc chắn</td><td>Loại khỏi cả nợ và vốn chủ</td></tr>
</tbody></table>
<p>Cách xử lý ảnh hưởng trực tiếp đến tỷ lệ nợ trên vốn chủ (debt-to-equity): chuyển DTL từ nợ sang vốn chủ làm D/E giảm. Tương tự, DTA khó thu hồi nên bị nhà phân tích loại trừ hoặc chiết khấu mạnh.</p>`,
    },
    {
      title: '7. Thuế suất luật định, hiệu dụng, tiền mặt và bảng đối chiếu',
      minutes: 10,
      html: `
<div class="formula">Thuế suất hiệu dụng (ETR) = ${frac('Chi phí thuế thu nhập', 'Lợi nhuận trước thuế')} &nbsp;&nbsp;&nbsp; Thuế suất tiền mặt = ${frac('Thuế đã nộp bằng tiền', 'Lợi nhuận trước thuế')}</div>
<ul>
<li>${t('statutory', 'Thuế suất luật định (statutory tax rate)')}: thuế suất ghi trong luật của quốc gia nơi công ty đặt trụ sở.</li>
<li>${t('etr', 'Thuế suất hiệu dụng (effective tax rate)')}: khác thuế suất luật định do chênh lệch vĩnh viễn, thu nhập ở nước có thuế suất khác, tín dụng thuế, thay đổi thuế suất và valuation allowance.</li>
<li>${t('cashrate', 'Thuế suất tiền mặt (cash tax rate)')}: phản ánh tiền thuế thật sự chi ra; khác ETR do chênh lệch tạm thời và chênh lệch thời điểm nộp thuế.</li>
</ul>
<div class="example"><div class="ex-h">Ví dụ 7.1 - Bảng đối chiếu thuế suất hiệu dụng</div>
<p>Lợi nhuận trước thuế 200.000, thuế suất luật định 25%. Trong năm có: 8.000 thu nhập miễn thuế; 4.000 tiền phạt không được trừ; 40.000 lợi nhuận từ công ty con ở nước có thuế suất 15%; tín dụng thuế 3.000. Thuế đã nộp bằng tiền 36.000.</p>
<details><summary>Xem lời giải</summary>
<table class="plain"><thead><tr><th>Khoản mục</th><th>Số tiền</th><th>% lợi nhuận trước thuế</th></tr></thead><tbody>
<tr><td>Thuế theo thuế suất luật định (200.000 × 25%)</td><td>50.000</td><td>25,0%</td></tr>
<tr><td>Thu nhập miễn thuế (8.000 × 25%)</td><td>-2.000</td><td>-1,0%</td></tr>
<tr><td>Chi phí không được trừ (4.000 × 25%)</td><td>+1.000</td><td>+0,5%</td></tr>
<tr><td>Chênh lệch thuế suất nước ngoài (40.000 × 10%)</td><td>-4.000</td><td>-2,0%</td></tr>
<tr><td>Tín dụng thuế</td><td>-3.000</td><td>-1,5%</td></tr>
<tr><td><b>Chi phí thuế</b></td><td><b>42.000</b></td><td><b>21,0%</b></td></tr>
</tbody></table>
<p>ETR = 21%. Thuế suất tiền mặt = 36.000 / 200.000 = <b>18%</b>. Thuế suất tiền mặt thấp hơn ETR nghĩa là công ty đang hoãn thuế (DTL ròng tăng hoặc DTA ròng giảm trong năm).</p></details></div>
<h4>Đọc bảng đối chiếu như thế nào?</h4>
<ul>
<li>Khoản nào <b>lặp lại</b> (thuế suất nước ngoài thấp do cơ cấu hoạt động) có thể giữ khi dự báo ETR; khoản <b>một lần</b> (thay đổi thuế suất, hoàn nhập valuation allowance) nên loại ra.</li>
<li>So sánh nhiều năm: ETR giảm dần nhờ lợi nhuận dịch chuyển sang nước thuế thấp có bền vững không, hay chỉ là ưu đãi sắp hết hạn?</li>
<li>Bảng đối chiếu có thể trình bày bằng số tiền hoặc bằng phần trăm; cả hai đều bắt đầu từ thuế suất luật định.</li>
</ul>`,
    },
    {
      title: '8. Thuyết minh thuế hoãn lại, ảnh hưởng đến tỷ số và IFRS so với US GAAP',
      minutes: 8,
      html: `
<p>Thuyết minh thuế thường có ba phần: (1) chi phí thuế tách thành thuế hiện hành và thuế hoãn lại; (2) bảng các khoản mục tạo DTL và DTA (khấu hao, bảo hành, phúc lợi hưu trí, lỗ chuyển sang kỳ sau, valuation allowance); (3) bảng đối chiếu thuế suất hiệu dụng.</p>
<h4>Thuyết minh nói gì với nhà phân tích?</h4>
<ul>
<li><b>DTL khấu hao tăng đều</b>: công ty vẫn đầu tư mạnh, luật thuế cho khấu hao nhanh. DTL có thể không đảo ngược, nên cân nhắc coi là vốn chủ.</li>
<li><b>DTA từ lỗ chuyển sang kỳ sau lớn kèm valuation allowance tăng</b>: lãnh đạo không chắc có lãi trong tương lai, rủi ro cao.</li>
<li><b>Thuế hoãn lại chiếm tỷ trọng lớn trong chi phí thuế</b>: lợi nhuận kế toán vượt xa thu nhập chịu thuế, nên kiểm tra chất lượng lợi nhuận.</li>
<li><b>Tỷ số bị ảnh hưởng</b>: D/E, ROE (vốn chủ thay đổi nếu điều chỉnh DTL), biên lợi nhuận ròng (qua ETR), dòng tiền hoạt động (thuế hoãn lại là khoản điều chỉnh không bằng tiền khi lập CFO theo phương pháp gián tiếp).</li>
</ul>
<h4>IFRS so với US GAAP (mức Level I)</h4>
<table class="plain"><thead><tr><th>Vấn đề</th><th>IFRS (IAS 12)</th><th>US GAAP (ASC 740)</th></tr></thead><tbody>
<tr><td>Ghi nhận DTA</td><td>Chỉ ghi nhận phần <b>có khả năng</b> (probable) dùng được</td><td>Ghi nhận đầy đủ, trừ valuation allowance nếu <b>more likely than not</b> không dùng được</td></tr>
<tr><td>Thuế suất dùng để đo lường</td><td>Đã ban hành hoặc <b>về cơ bản đã ban hành</b> (substantively enacted)</td><td>Chỉ thuế suất <b>đã ban hành</b> (enacted)</td></tr>
<tr><td>Đánh giá lại tài sản cố định</td><td>Được phép; thuế hoãn lại liên quan ghi vào vốn chủ (OCI)</td><td>Không cho đánh giá lại tăng nên không phát sinh</td></tr>
<tr><td>Trình bày trên bảng cân đối</td><td colspan="2">Cả hai: DTL/DTA trình bày là khoản <b>dài hạn</b>; được bù trừ khi cùng cơ quan thuế và có quyền bù trừ</td></tr>
</tbody></table>`,
    },
    {
      title: '9. Tóm tắt và bẫy thường gặp',
      minutes: 5,
      html: `
<table class="plain"><thead><tr><th>Tình huống</th><th>Nhớ</th></tr></thead><tbody>
<tr><td>Chi phí thuế và thuế phải nộp</td><td>Chi phí thuế = thuế phải nộp + ΔDTL - ΔDTA</td></tr>
<tr><td>Tài sản: ghi sổ &gt; tax base</td><td>DTL (luật thuế đã cho trừ nhiều hơn)</td></tr>
<tr><td>Nợ: ghi sổ &gt; tax base</td><td>DTA (bảo hành, doanh thu nhận trước)</td></tr>
<tr><td>Chênh lệch vĩnh viễn</td><td>Không tạo DTL/DTA, làm ETR khác thuế suất luật định</td></tr>
<tr><td>Thuế suất thay đổi</td><td>Đánh giá lại toàn bộ DTL/DTA ngay, chênh lệch vào chi phí thuế</td></tr>
<tr><td>Valuation allowance tăng</td><td>DTA ròng giảm, chi phí thuế tăng, lợi nhuận giảm; tín hiệu xấu</td></tr>
<tr><td>DTL không đảo ngược</td><td>Coi là vốn chủ; đảo ngược thì coi là nợ</td></tr>
<tr><td>Ba thuế suất</td><td>ETR = chi phí thuế / LNTT; cash tax rate = thuế nộp bằng tiền / LNTT</td></tr>
<tr><td>IFRS và US GAAP</td><td>Probable so với more likely than not; substantively enacted so với enacted</td></tr>
</tbody></table>
<p>Tiếp theo: bấm sang tab <b>Luyện tập</b> để làm 10 câu.</p>`,
    },
  ];

  const glossary = {
    dtl: ['Deferred tax liability (DTL)', 'Thuế hoãn lại phải trả', 'Thuế sẽ phải nộp trong tương lai khi chênh lệch tạm thời chịu thuế đảo ngược.'],
    dta: ['Deferred tax asset (DTA)', 'Tài sản thuế hoãn lại', 'Lợi ích giảm thuế trong tương lai từ chênh lệch tạm thời được khấu trừ hoặc lỗ tính thuế chuyển sang kỳ sau.'],
    taxable: ['Taxable income', 'Thu nhập chịu thuế', 'Thu nhập tính theo luật thuế trên tờ khai thuế.'],
    acctprofit: ['Accounting profit', 'Lợi nhuận kế toán', 'Lợi nhuận trước thuế theo chuẩn mực kế toán (pretax income).'],
    payable: ['Taxes payable', 'Thuế phải nộp', 'Nghĩa vụ thuế hiện hành = thu nhập chịu thuế × thuế suất.'],
    taxexp: ['Income tax expense', 'Chi phí thuế thu nhập', 'Số ghi trên báo cáo kết quả kinh doanh, gồm thuế hiện hành và thay đổi thuế hoãn lại.'],
    taxpaid: ['Income tax paid', 'Thuế đã nộp bằng tiền', 'Số tiền thuế thực chi (hoặc được hoàn) trong kỳ.'],
    carrying: ['Carrying amount', 'Giá trị ghi sổ', 'Giá trị của tài sản hoặc nợ trên bảng cân đối kế toán.'],
    taxbase: ['Tax base', 'Cơ sở tính thuế', 'Giá trị của tài sản hoặc nợ theo luật thuế.'],
    va: ['Valuation allowance', 'Dự phòng giảm giá DTA', 'Theo US GAAP: khoản giảm trừ DTA khi more likely than not một phần DTA không dùng được.'],
    nol: ['Tax loss carryforward', 'Lỗ tính thuế chuyển sang kỳ sau', 'Khoản lỗ được dùng để giảm thu nhập chịu thuế tương lai; tạo DTA.'],
    tempdiff: ['Temporary difference', 'Chênh lệch tạm thời', 'Chênh lệch giữa giá trị ghi sổ và tax base, sẽ đảo ngược trong tương lai.'],
    permdiff: ['Permanent difference', 'Chênh lệch vĩnh viễn', 'Chênh lệch giữa lợi nhuận kế toán và thu nhập chịu thuế không bao giờ đảo ngược; không tạo thuế hoãn lại.'],
    credit: ['Tax credit', 'Tín dụng thuế', 'Khoản được trừ thẳng vào số thuế phải nộp, gây chênh lệch vĩnh viễn.'],
    statutory: ['Statutory tax rate', 'Thuế suất luật định', 'Thuế suất ghi trong luật thuế của quốc gia sở tại.'],
    etr: ['Effective tax rate (ETR)', 'Thuế suất hiệu dụng', 'Chi phí thuế thu nhập chia lợi nhuận trước thuế.'],
    cashrate: ['Cash tax rate', 'Thuế suất tiền mặt', 'Thuế đã nộp bằng tiền chia lợi nhuận trước thuế.'],
  };

  const practice = [
    { q: 'Lợi nhuận kế toán 500, khấu hao trên báo cáo tài chính 80, khấu hao theo luật thuế 120, thuế suất 30%, không có chênh lệch khác. Thuế phải nộp gần nhất với:', choices: ['138', '150', '162'], answer: 0, explain: 'Thu nhập chịu thuế = 500 - 40 = 460; thuế phải nộp = 460 x 30% = 138. Lựa chọn 150 là chi phí thuế, tính trên lợi nhuận kế toán. Lựa chọn 162 cộng chênh lệch khấu hao thay vì trừ.' },
    { q: 'Một tài sản có giá trị ghi sổ 400 và tax base 300. Thuế suất 25%. Công ty ghi nhận:', choices: ['DTA 25', 'DTL 25', 'DTL 100'], answer: 1, explain: 'Tài sản có giá trị ghi sổ lớn hơn tax base: luật thuế đã cho trừ nhiều hơn, sau này phải nộp thêm, nên là DTL = 100 x 25% = 25. Lựa chọn DTL 100 quên nhân thuế suất. Lựa chọn DTA 25 nhầm chiều (DTA chỉ xuất hiện khi tax base của tài sản lớn hơn giá trị ghi sổ).' },
    { q: 'Khoản nào sau đây nhiều khả năng tạo ra tài sản thuế hoãn lại (DTA)?', choices: ['Luật thuế cho khấu hao nhanh hơn kế toán', 'Thu nhập lãi trái phiếu được miễn thuế', 'Chi phí bảo hành trích trước, chỉ được trừ thuế khi thực chi'], answer: 2, explain: 'Bảo hành ghi nhận chi phí trên sổ kế toán trước khi được trừ thuế: hôm nay nộp nhiều, sau này nộp ít, tạo DTA. Khấu hao thuế nhanh hơn kế toán tạo DTL. Lãi trái phiếu miễn thuế là chênh lệch vĩnh viễn, không tạo thuế hoãn lại.' },
    { q: 'Thuế phải nộp năm nay 2.000. Trong năm DTL tăng 300 và DTA tăng 100. Chi phí thuế thu nhập là:', choices: ['2.200', '2.400', '1.800'], answer: 0, explain: 'Chi phí thuế = 2.000 + 300 - 100 = 2.200. Lựa chọn 2.400 cộng cả ΔDTA. Lựa chọn 1.800 đảo dấu cả hai.' },
    { q: 'Lợi nhuận kế toán 1.000 gồm 80 lãi trái phiếu miễn thuế. Thuế suất luật định 25%, không có chênh lệch tạm thời. Thuế suất hiệu dụng là:', choices: ['25%', '23%', '27%'], answer: 1, explain: 'Chi phí thuế = (1.000 - 80) x 25% = 230; ETR = 230/1.000 = 23%. Lựa chọn 25% bỏ qua chênh lệch vĩnh viễn. Lựa chọn 27% cộng 80 thay vì trừ.' },
    { q: 'Theo US GAAP, công ty tăng valuation allowance đối với DTA. Ảnh hưởng là:', choices: ['DTA ròng tăng và lợi nhuận ròng tăng', 'Không ảnh hưởng báo cáo kết quả kinh doanh, chỉ trình bày trong thuyết minh', 'DTA ròng giảm và lợi nhuận ròng giảm'], answer: 2, explain: 'Tăng valuation allowance làm giảm DTA ròng; bút toán đối ứng là tăng chi phí thuế, nên lợi nhuận ròng giảm. Đây thường là tín hiệu lãnh đạo bi quan về thu nhập chịu thuế tương lai.' },
    { q: 'Công ty có DTL 600 tính theo thuế suất 30% và không có DTA. Luật mới giảm thuế suất xuống 25%. Ảnh hưởng là:', choices: ['DTL tăng 100 và chi phí thuế tăng 100', 'DTL giảm 100 và chi phí thuế giảm 100', 'DTL không đổi vì thuế suất mới chỉ áp dụng cho thu nhập tương lai'], answer: 1, explain: 'Chênh lệch tạm thời = 600/30% = 2.000; DTL mới = 2.000 x 25% = 500, giảm 100. DTL được đánh giá lại ngay theo thuế suất mới và phần giảm làm chi phí thuế giảm. Phương án "DTL không đổi" sai vì DTL đo lường theo thuế suất sẽ áp dụng khi đảo ngược.' },
    { q: 'Lợi nhuận trước thuế 800, chi phí thuế 200, thuế đã nộp bằng tiền 160. Thuế suất tiền mặt (cash tax rate) là:', choices: ['20%', '25%', '80%'], answer: 0, explain: 'Cash tax rate = 160/800 = 20%. Lựa chọn 25% là thuế suất hiệu dụng (200/800). Lựa chọn 80% chia thuế đã nộp cho chi phí thuế, không phải cho lợi nhuận trước thuế.' },
    { q: 'Một công ty tăng trưởng đều, đầu tư tài sản mới mỗi năm, DTL từ khấu hao nhanh tăng liên tục trong 10 năm và không có dấu hiệu đảo ngược. Khi tính tỷ lệ nợ trên vốn chủ, nhà phân tích nên:', choices: ['Coi DTL là nợ phải trả theo giá trị sổ sách', 'Loại DTL khỏi cả nợ và vốn chủ vì không có thông tin', 'Coi DTL là vốn chủ sở hữu'], answer: 2, explain: 'DTL không được kỳ vọng đảo ngược thì thực chất không phải nghĩa vụ phải trả, nên coi là vốn chủ (D/E giảm). Coi DTL là nợ phải trả phù hợp khi DTL được kỳ vọng đảo ngược. Loại DTL khỏi cả nợ và vốn chủ dùng khi thời điểm và số tiền không chắc chắn.' },
    { q: 'Phát biểu nào về IFRS và US GAAP là ĐÚNG?', choices: ['IFRS đo lường thuế hoãn lại theo thuế suất đã ban hành hoặc về cơ bản đã ban hành; US GAAP chỉ dùng thuế suất đã ban hành', 'IFRS dùng valuation allowance riêng, US GAAP ghi nhận trực tiếp phần DTA có khả năng dùng được', 'Theo cả hai chuẩn mực, DTL được trình bày là nợ ngắn hạn'], answer: 0, explain: 'IFRS dùng thuế suất đã ban hành hoặc về cơ bản đã ban hành; US GAAP chỉ dùng thuế suất đã ban hành. Phương án về valuation allowance đảo ngược: valuation allowance là đặc trưng của US GAAP. Phương án "trình bày là nợ ngắn hạn" sai: cả hai chuẩn mực trình bày thuế hoãn lại là khoản dài hạn.' },
  ];

  window.LESSONS['FSA-09'] = {
    moduleId: 'FSA-09',
    calculator: 'BA II Plus',
    warmup: [
      'Ôn FSA-07: khấu hao nhanh (accelerated) làm lợi nhuận những năm đầu cao hơn hay thấp hơn khấu hao đường thẳng?',
      'Theo bạn, vì sao luật thuế lại muốn cho doanh nghiệp khấu hao nhanh hơn chuẩn mực kế toán?',
      'Lợi nhuận trước thuế 100, thuế suất 20%. Nếu không có chênh lệch nào, chi phí thuế và thuế phải nộp là bao nhiêu?',
    ],
    sections,
    glossary,
    practice,
    widgets: {},
    slides: [],
    wrapup: [
      'Vẽ bảng 2 x 2 (tài sản/nợ, ghi sổ lớn hơn/nhỏ hơn tax base) và điền DTL hoặc DTA vào từng ô.',
      'Giải thích bằng lời vì sao chênh lệch vĩnh viễn làm ETR khác thuế suất luật định còn chênh lệch tạm thời thì không.',
      'Còn câu hỏi nào chưa rõ? Ghi lại để hỏi.',
    ],
  };
}());
