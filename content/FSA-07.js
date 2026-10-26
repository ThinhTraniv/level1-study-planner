// Bài giảng FSA-07 - Analysis of Long-Term Assets (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t, frac } = window.CFAH;

  const sections = [
    {
      title: '1. Bức tranh lớn',
      minutes: 4,
      html: `
<p>Tài sản dài hạn (máy móc, nhà xưởng, bằng sáng chế, thương hiệu, lợi thế thương mại) mang lại lợi ích trong nhiều năm. Kế toán phải trả lời bốn câu hỏi trong suốt "vòng đời" của chúng:</p>
<ol>
<li><b>Ghi nhận ban đầu:</b> chi phí này được vốn hóa thành tài sản hay ghi ngay là chi phí? (phần 2, 4)</li>
<li><b>Phân bổ:</b> khấu hao, hao mòn theo phương pháp nào, trong bao lâu? (phần 3)</li>
<li><b>Đo lường lại:</b> đánh giá lại (IFRS) và ${t('impair', 'suy giảm giá trị (impairment)')}. (phần 5, 6)</li>
<li><b>Dừng ghi nhận:</b> bán, thanh lý, trao đổi. (phần 7)</li>
</ol>
<div class="key">Mọi lựa chọn kế toán ở đây đều chỉ <b>dịch chuyển lợi nhuận giữa các kỳ</b>; tổng lợi nhuận qua toàn bộ vòng đời không đổi. Nhưng chúng làm thay đổi tỷ số, xu hướng và cách chia dòng tiền giữa CFO và CFI, nên nhà phân tích phải điều chỉnh khi so sánh.</div>
<p>Ứng với LOS 2027: LOS 1 so sánh ba loại tài sản vô hình (phần 4); LOS 2 suy giảm giá trị và dừng ghi nhận (phần 6, 7); LOS 3 phân tích thuyết minh PP&amp;E và tài sản vô hình (phần 8, có dùng kiến thức phần 2, 3, 5).</p>`,
    },
    {
      title: '2. Vốn hóa hay ghi nhận chi phí',
      minutes: 8,
      html: `
<p>Một khoản chi được ${t('capitalize', 'vốn hóa (capitalize)')} khi nó mang lại lợi ích kinh tế trong <b>nhiều kỳ</b>: ghi vào tài sản trên bảng cân đối rồi khấu hao dần. Nếu chỉ có lợi ích trong kỳ hiện tại hoặc lợi ích không chắc chắn, nó được <b>ghi ngay là chi phí (expense)</b>. Chi phí đi vay trong thời gian xây dựng tài sản dài hạn cũng được vốn hóa (xem FSA-02).</p>
<div class="example"><div class="ex-h">Ví dụ 2.1</div>
<p>Đầu năm 1, công ty chi 300 cho một khoản có thể vốn hóa, thời gian sử dụng 3 năm, khấu hao đường thẳng. Mỗi năm thu tiền ròng từ kinh doanh 500 (bỏ qua thuế). So sánh hai cách.</p>
<details><summary>Xem lời giải</summary>
<table class="plain"><thead><tr><th></th><th>Năm 1</th><th>Năm 2</th><th>Năm 3</th><th>Tổng</th></tr></thead><tbody>
<tr><td>Lợi nhuận - ghi chi phí</td><td>200</td><td>500</td><td>500</td><td>1.200</td></tr>
<tr><td>Lợi nhuận - vốn hóa</td><td>400</td><td>400</td><td>400</td><td>1.200</td></tr>
<tr><td>CFO - ghi chi phí</td><td>200</td><td>500</td><td>500</td><td>1.200</td></tr>
<tr><td>CFO - vốn hóa</td><td>500</td><td>500</td><td>500</td><td>1.500</td></tr>
<tr><td>CFI - vốn hóa</td><td>-300</td><td>0</td><td>0</td><td>-300</td></tr>
</tbody></table>
<p>Tổng lợi nhuận và tổng tiền như nhau (1.200), nhưng vốn hóa làm lợi nhuận <b>mượt</b> hơn và chuyển khoản chi 300 từ CFO sang CFI.</p></details></div>
<table class="plain"><thead><tr><th>Vốn hóa so với ghi chi phí</th><th>Kỳ đầu</th><th>Các kỳ sau</th></tr></thead><tbody>
<tr><td>Lợi nhuận ròng</td><td>Cao hơn</td><td>Thấp hơn (do khấu hao)</td></tr>
<tr><td>Tổng tài sản, vốn chủ</td><td>Cao hơn</td><td>Cao hơn (giảm dần)</td></tr>
<tr><td>Biến động lợi nhuận</td><td colspan="2">Thấp hơn (mượt hơn)</td></tr>
<tr><td>CFO / CFI</td><td colspan="2">CFO cao hơn, CFI thấp hơn (âm hơn); tổng tiền không đổi</td></tr>
<tr><td>ROA, ROE</td><td>Thường cao hơn ở kỳ đầu (lợi nhuận tăng nhiều hơn tài sản)</td><td>Thấp hơn khi lợi nhuận bị khấu hao kéo xuống</td></tr>
<tr><td>Nợ / vốn chủ</td><td colspan="2">Thấp hơn (vốn chủ cao hơn)</td></tr>
</tbody></table>
<p class="warn"><b>Bẫy:</b> vốn hóa làm CFO cao hơn, nên so sánh CFO của công ty hay vốn hóa với công ty hay ghi chi phí là không công bằng. Nhà phân tích nên so sánh <b>FCFF</b> (đã trừ capex) hoặc điều chỉnh về cùng một cách.</p>`,
    },
    {
      title: '3. Khấu hao và hao mòn',
      minutes: 7,
      html: `
<p>${t('dep', 'Khấu hao (depreciation)')} phân bổ giá gốc trừ ${t('salvage', 'giá trị thanh lý ước tính (residual / salvage value)')} của tài sản hữu hình qua thời gian sử dụng hữu ích. Với tài sản vô hình có thời hạn, gọi là ${t('amort', 'hao mòn (amortization)')}.</p>
<table class="plain"><thead><tr><th>Phương pháp</th><th>Công thức</th><th>Đặc điểm</th></tr></thead><tbody>
<tr><td>Đường thẳng (straight-line)</td><td>(Giá gốc - giá trị thanh lý) / số năm</td><td>Chi phí đều mỗi năm</td></tr>
<tr><td>Số dư giảm dần kép (double-declining balance, DDB)</td><td>(2 / số năm) × giá trị còn lại đầu năm</td><td>Khấu hao nhanh: chi phí cao ở đầu, không trừ giá trị thanh lý trong công thức nhưng không khấu hao xuống dưới giá trị thanh lý</td></tr>
<tr><td>Theo sản lượng (units of production)</td><td>(Giá gốc - giá trị thanh lý) × sản lượng kỳ / tổng sản lượng</td><td>Chi phí theo mức sử dụng thực tế</td></tr>
</tbody></table>
<div class="example"><div class="ex-h">Ví dụ 3.1</div>
<p>Máy giá 100.000, giá trị thanh lý 10.000, dùng 5 năm (hoặc tổng 45.000 sản phẩm; năm 1 sản xuất 12.000). Tính khấu hao năm 1 và năm 2.</p>
<details><summary>Xem lời giải</summary>
<p>Đường thẳng: (100.000 - 10.000) / 5 = <b>18.000</b> mỗi năm.<br>
DDB (tỷ lệ 40%): năm 1 = 40% × 100.000 = <b>40.000</b>; năm 2 = 40% × 60.000 = <b>24.000</b>; năm 3 = 14.400; năm 4 = 8.640; năm 5 chỉ còn 2.960 để giá trị còn lại đúng bằng 10.000.<br>
Theo sản lượng: 90.000 / 45.000 = 2 mỗi sản phẩm; năm 1 = 12.000 × 2 = <b>24.000</b>.</p></details></div>
<ul>
<li><b>Khấu hao theo cấu phần (component depreciation):</b> IFRS <b>yêu cầu</b> khấu hao riêng từng bộ phận quan trọng có thời gian sử dụng khác nhau (ví dụ động cơ máy bay và thân máy bay). US GAAP cho phép nhưng hiếm dùng.</li>
<li><b>Thay đổi ước tính</b> (thời gian sử dụng, giá trị thanh lý, phương pháp): áp dụng <b>phi hồi tố</b>, từ kỳ hiện tại trở đi.</li>
<li>Thời gian sử dụng dài hơn hoặc giá trị thanh lý cao hơn → khấu hao thấp hơn → lợi nhuận cao hơn. Đây là chỗ ban lãnh đạo có thể "làm đẹp" lợi nhuận.</li>
</ul>
<p class="tip">Khấu hao nhanh so với đường thẳng: những năm đầu lợi nhuận thấp hơn, tài sản thấp hơn, nhưng <b>không ảnh hưởng tiền</b> (nếu bỏ qua thuế). Khi so sánh hai công ty, kiểm tra thuyết minh về phương pháp và thời gian sử dụng.</p>`,
    },
    {
      title: '4. Tài sản vô hình: mua riêng, tự tạo, mua qua hợp nhất',
      minutes: 10,
      html: `
<p>${t('intang', 'Tài sản vô hình (intangible asset)')} là tài sản không có hình thái vật chất. Một tài sản vô hình ${t('ident', 'xác định được (identifiable)')} phải tách riêng được hoặc phát sinh từ quyền pháp lý, do công ty kiểm soát, và có khả năng mang lại lợi ích kinh tế trong tương lai. ${t('goodwill', 'Lợi thế thương mại (goodwill)')} thì <b>không</b> xác định được.</p>
<table class="plain"><thead><tr><th>Cách có được</th><th>Ghi nhận ban đầu</th><th>Ghi chú</th></tr></thead><tbody>
<tr><td><b>Mua riêng lẻ</b> (mua bằng sáng chế, bản quyền, giấy phép)</td><td>Vốn hóa theo giá mua (giá gốc)</td><td>Giống mua tài sản hữu hình</td></tr>
<tr><td><b>Tự tạo ra</b> (tự nghiên cứu, xây dựng thương hiệu)</td><td>Phần lớn ghi ngay là chi phí</td><td>IFRS: chi phí <b>nghiên cứu</b> ghi chi phí, chi phí <b>phát triển</b> vốn hóa khi đạt đủ điều kiện. US GAAP: R&amp;D nói chung ghi chi phí</td></tr>
<tr><td><b>Mua qua hợp nhất kinh doanh</b></td><td>Từng tài sản vô hình xác định được ghi theo <b>giá trị hợp lý</b>; phần dư là goodwill</td><td>Kể cả tài sản mà bên bị mua chưa từng ghi trên sổ (thương hiệu, danh sách khách hàng)</td></tr>
</tbody></table>

<h4>Chi phí phát triển và phần mềm</h4>
<ul>
<li><b>IFRS:</b> chi phí phát triển được vốn hóa khi chứng minh được khả thi về kỹ thuật, có ý định và khả năng hoàn thành, sử dụng hoặc bán, có khả năng tạo lợi ích kinh tế, có đủ nguồn lực và đo lường được chi phí.</li>
<li><b>US GAAP:</b> R&amp;D ghi chi phí. Ngoại lệ: phần mềm <b>để bán</b> được vốn hóa sau khi đạt ${t('techfeas', 'khả thi về kỹ thuật (technological feasibility)')}; phần mềm <b>dùng nội bộ</b> được vốn hóa ở giai đoạn phát triển ứng dụng.</li>
</ul>

<div class="example"><div class="ex-h">Ví dụ 4.1 - Goodwill</div>
<p>Công ty P mua toàn bộ công ty Q với giá 1.000. Giá trị sổ sách tài sản thuần của Q là 500. Giá trị hợp lý của tài sản hữu hình thuần là 550. Ngoài ra Q có thương hiệu tự xây dựng (giá trị hợp lý 150) và danh sách khách hàng (giá trị hợp lý 100), chưa ghi trên sổ của Q. Tính goodwill.</p>
<details><summary>Xem lời giải</summary>
<p>Tài sản thuần xác định được theo giá trị hợp lý = 550 + 150 + 100 = 800.<br>Goodwill = 1.000 - 800 = <b>200</b>.</p>
<p>Lưu ý: thương hiệu không được ghi trên sổ của Q (vì Q tự tạo ra), nhưng <b>được</b> ghi trên báo cáo hợp nhất của P theo giá trị hợp lý. Đây là lý do hai công ty giống nhau có thể có bảng cân đối rất khác nhau: một bên tự xây thương hiệu, một bên đi mua.</p></details></div>

<h4>Sau ghi nhận ban đầu</h4>
<ul>
<li>Tài sản vô hình <b>có thời hạn hữu ích xác định</b> (bằng sáng chế 10 năm): hao mòn qua thời gian sử dụng, kiểm tra suy giảm khi có dấu hiệu.</li>
<li>Tài sản vô hình <b>không xác định thời hạn</b> (một số thương hiệu, giấy phép gia hạn được) và goodwill: <b>không hao mòn</b>, kiểm tra suy giảm ít nhất hằng năm.</li>
</ul>
<p class="warn"><b>Bẫy:</b> công ty tự xây thương hiệu ghi chi phí quảng cáo ngay, nên tài sản thấp và ROA trông cao; công ty mua thương hiệu có tài sản lớn hơn. Khi so sánh, nhà phân tích có thể loại goodwill và tài sản vô hình khỏi tài sản, hoặc vốn hóa lại chi phí R&amp;D.</p>`,
    },
    {
      title: '5. Mô hình đánh giá lại (IFRS)',
      minutes: 7,
      html: `
<p>Sau ghi nhận ban đầu, IFRS cho phép chọn giữa ${t('costmodel', 'mô hình giá gốc (cost model)')} và ${t('revmodel', 'mô hình đánh giá lại (revaluation model)')} cho từng nhóm PP&amp;E. US GAAP <b>chỉ</b> cho phép mô hình giá gốc. Với tài sản vô hình, IFRS chỉ cho đánh giá lại khi có thị trường hoạt động (hiếm).</p>
<table class="plain"><thead><tr><th>Đánh giá lại làm giá trị</th><th>Ghi vào đâu</th></tr></thead><tbody>
<tr><td><b>Tăng</b></td><td>OCI, cộng dồn vào ${t('surplus', 'thặng dư đánh giá lại (revaluation surplus)')} trong vốn chủ. Ngoại lệ: phần đảo ngược một khoản giảm trước đó đã ghi vào lãi lỗ thì ghi vào <b>lãi lỗ</b></td></tr>
<tr><td><b>Giảm</b></td><td>Lãi lỗ. Ngoại lệ: phần đảo ngược thặng dư đã có của chính tài sản đó thì ghi giảm <b>OCI</b> (giảm thặng dư)</td></tr>
</tbody></table>
<div class="example"><div class="ex-h">Ví dụ 5.1 - Hai lô đất, giá gốc 1.000 mỗi lô</div>
<p>Lô A: cuối năm 1 đánh giá lại 1.200, cuối năm 2 là 900. Lô B: cuối năm 1 là 900, cuối năm 2 là 1.150.</p>
<details><summary>Xem lời giải</summary>
<p><b>Lô A:</b> năm 1 tăng 200, ghi OCI (thặng dư 200). Năm 2 giảm 300: 200 đầu tiên xóa hết thặng dư (OCI), <b>100</b> còn lại ghi lỗ vào lãi lỗ.<br>
<b>Lô B:</b> năm 1 giảm 100, ghi <b>lỗ</b> vào lãi lỗ. Năm 2 tăng 250: <b>100</b> đầu tiên đảo ngược khoản lỗ trước, ghi lãi vào lãi lỗ; 150 còn lại ghi OCI.</p></details></div>
<ul>
<li><b>Ảnh hưởng tỷ số:</b> đánh giá tăng làm tài sản và vốn chủ cao hơn → D/E thấp hơn, nhưng ROA và ROE thấp hơn (mẫu số lớn hơn, và khấu hao tính trên giá trị mới cao hơn).</li>
<li>Thặng dư đánh giá lại không "quay vòng" qua lãi lỗ; khi bán tài sản, nó được chuyển thẳng sang lợi nhuận giữ lại.</li>
<li>Phân biệt với ${t('invprop', 'bất động sản đầu tư (investment property)')} theo IFRS: nếu chọn mô hình giá trị hợp lý, <b>mọi</b> thay đổi giá trị ghi vào lãi lỗ và không khấu hao.</li>
</ul>`,
    },
    {
      title: '6. Suy giảm giá trị (impairment)',
      minutes: 11,
      html: `
<p>Tài sản bị suy giảm giá trị khi giá trị ghi sổ cao hơn số tiền công ty có thể thu hồi được từ nó. Quy trình khác nhau giữa IFRS và US GAAP.</p>
<table class="plain"><thead><tr><th></th><th>IFRS</th><th>US GAAP (tài sản đang sử dụng)</th></tr></thead><tbody>
<tr><td>Khi nào xem xét</td><td>Mỗi kỳ báo cáo đánh giá có dấu hiệu hay không</td><td>Khi có sự kiện cho thấy giá trị ghi sổ có thể không thu hồi được</td></tr>
<tr><td>Kiểm tra</td><td>Giá trị ghi sổ &gt; ${t('recov', 'giá trị có thể thu hồi (recoverable amount)')} = max(giá trị hợp lý trừ chi phí bán; ${t('viu', 'giá trị sử dụng (value in use)')})</td><td>Bước 1 (${t('recovtest', 'kiểm tra khả năng thu hồi')}): giá trị ghi sổ &gt; tổng dòng tiền tương lai <b>chưa chiết khấu</b></td></tr>
<tr><td>Mức lỗ</td><td>Giá trị ghi sổ - giá trị có thể thu hồi</td><td>Bước 2: giá trị ghi sổ - <b>giá trị hợp lý</b></td></tr>
<tr><td>Hoàn nhập</td><td><b>Được</b> (trừ goodwill), tối đa về mức giá trị ghi sổ nếu chưa từng suy giảm</td><td><b>Không</b> được</td></tr>
</tbody></table>
<p>Giá trị sử dụng là PV của dòng tiền tương lai từ việc tiếp tục dùng tài sản.</p>

<div class="example"><div class="ex-h">Ví dụ 6.1 - Cùng một máy, hai bộ chuẩn mực</div>
<p>Giá trị ghi sổ 500.000. Dòng tiền tương lai chưa chiết khấu 550.000; giá trị sử dụng (PV) 460.000; giá trị hợp lý 450.000; giá trị hợp lý trừ chi phí bán 440.000. Công ty tiếp tục sử dụng máy.</p>
<details><summary>Xem lời giải</summary>
<p><b>IFRS:</b> giá trị có thể thu hồi = max(440.000; 460.000) = 460.000 &lt; 500.000. Lỗ suy giảm = <b>40.000</b>.<br>
<b>US GAAP:</b> 500.000 &lt; 550.000 (dòng tiền chưa chiết khấu), vượt qua bước 1: <b>không</b> suy giảm.</p>
<p>Nếu dòng tiền chưa chiết khấu chỉ là 480.000: US GAAP thấy suy giảm, lỗ = 500.000 - 450.000 = <b>50.000</b>. Bước 1 của US GAAP dễ "qua" hơn (vì không chiết khấu), nhưng một khi đã suy giảm thì mức lỗ có thể lớn hơn.</p></details></div>

<h4>Tài sản vô hình và goodwill</h4>
<ul>
<li>Vô hình không xác định thời hạn: kiểm tra hằng năm. US GAAP: lỗ = giá trị ghi sổ - giá trị hợp lý (không có bước chưa chiết khấu).</li>
<li>Goodwill: IFRS kiểm tra ở cấp ${t('cgu', 'đơn vị tạo tiền (cash-generating unit)')}, lỗ ghi giảm goodwill trước rồi đến tài sản khác; US GAAP kiểm tra ở cấp ${t('reportunit', 'đơn vị báo cáo (reporting unit)')}: lỗ = giá trị ghi sổ - giá trị hợp lý của đơn vị, tối đa bằng goodwill. Cả hai <b>cấm hoàn nhập</b> lỗ goodwill.</li>
<li>Tài sản ${t('hfs', 'nắm giữ để bán (held for sale)')}: ngừng khấu hao, đo theo giá thấp hơn giữa giá trị ghi sổ và giá trị hợp lý trừ chi phí bán; cả IFRS và US GAAP cho hoàn nhập tối đa bằng lỗ đã ghi.</li>
</ul>

<h4>Ảnh hưởng lên báo cáo và tỷ số</h4>
<table class="plain"><thead><tr><th>Khoản mục</th><th>Năm ghi suy giảm</th><th>Các năm sau</th></tr></thead><tbody>
<tr><td>Tài sản, vốn chủ</td><td>Giảm</td><td>Vẫn thấp hơn</td></tr>
<tr><td>Lợi nhuận ròng</td><td>Giảm (lỗ suy giảm)</td><td>Cao hơn (khấu hao thấp hơn)</td></tr>
<tr><td>ROA, ROE, vòng quay tài sản</td><td>ROA, ROE giảm</td><td>Cao hơn (lợi nhuận cao hơn, mẫu số nhỏ hơn)</td></tr>
<tr><td>Nợ / vốn chủ</td><td colspan="2">Cao hơn</td></tr>
<tr><td>CFO</td><td colspan="2">Không đổi: suy giảm là bút toán không bằng tiền (cộng lại khi tính CFO gián tiếp)</td></tr>
</tbody></table>
<p class="warn"><b>Bẫy:</b> suy giảm giá trị không làm giảm tiền. Một khoản lỗ suy giảm lớn có thể là thông tin trễ: nó xác nhận rằng khoản đầu tư trước đây đã không hiệu quả. Cũng cần cảnh giác "big bath": ghi lỗ thật lớn một lần để các năm sau lợi nhuận trông đẹp hơn.</p>`,
    },
    {
      title: '7. Dừng ghi nhận (derecognition)',
      minutes: 5,
      html: `
<p>Tài sản dài hạn bị loại khỏi bảng cân đối khi được bán, thanh lý (bỏ đi), trao đổi, hoặc tách ra (spin-off).</p>
<div class="formula">Lãi (lỗ) khi bán = Tiền thu về - Giá trị ghi sổ</div>
<ul>
<li><b>Bán:</b> lãi lỗ ghi vào báo cáo kết quả kinh doanh (thường trong lợi nhuận hoạt động hoặc "lãi lỗ khác"). Tiền thu về là dòng tiền vào <b>CFI</b>. Theo phương pháp gián tiếp, lãi được <b>trừ ra</b>, lỗ được <b>cộng lại</b> khi tính CFO.</li>
<li><b>Bỏ đi (abandon):</b> không có tiền thu; giá trị ghi sổ ghi nhận hết là lỗ.</li>
<li><b>Trao đổi:</b> tài sản mới thường ghi theo giá trị hợp lý; chênh lệch so với giá trị ghi sổ của tài sản cũ là lãi lỗ.</li>
<li><b>Spin-off:</b> cổ đông nhận cổ phiếu của công ty tách ra; công ty mẹ thôi hợp nhất, thường không ghi lãi lỗ.</li>
</ul>
<div class="example"><div class="ex-h">Ví dụ 7.1</div>
<p>Máy giá gốc 80.000, khấu hao lũy kế 50.000, bán được 36.000.</p>
<details><summary>Xem lời giải</summary>
<p>Giá trị ghi sổ = 80.000 - 50.000 = 30.000. Lãi = 36.000 - 30.000 = <b>6.000</b> (báo cáo KQKD).<br>CFI: <b>+36.000</b>. CFO (gián tiếp): trừ 6.000 lãi để không tính trùng.<br>Nếu bỏ máy đi: lỗ 30.000, không có tiền vào.</p></details></div>
<p class="tip">Lãi khi bán tài sản thường cho thấy trước đây công ty khấu hao <b>quá nhanh</b> (giá trị ghi sổ thấp hơn giá trị thật); lỗ thường cho thấy khấu hao <b>quá chậm</b>. Cả hai đều không lặp lại, nên loại ra khi đánh giá lợi nhuận cốt lõi.</p>`,
    },
    {
      title: '8. Thuyết minh và phân tích PP&E, tài sản vô hình',
      minutes: 5,
      html: `
<h4>Công ty thuyết minh gì?</h4>
<ul>
<li><b>PP&amp;E:</b> cơ sở đo lường, phương pháp khấu hao, thời gian sử dụng hoặc tỷ lệ khấu hao, nguyên giá và khấu hao lũy kế đầu kỳ, cuối kỳ cùng bảng đối chiếu, tài sản thế chấp, cam kết mua sắm. IFRS theo mô hình đánh giá lại: ngày đánh giá, có thuê định giá độc lập không, giá trị ghi sổ nếu theo mô hình giá gốc.</li>
<li><b>Tài sản vô hình:</b> có thời hạn hay không xác định thời hạn, phương pháp và thời gian hao mòn. US GAAP: ước tính chi phí hao mòn của từng năm trong 5 năm tới.</li>
<li><b>Suy giảm:</b> sự kiện dẫn đến suy giảm, số tiền, bộ phận kinh doanh liên quan; IFRS: số hoàn nhập.</li>
</ul>

<h4>Ba con số từ thuyết minh PP&amp;E (giả định khấu hao đường thẳng)</h4>
<div class="formula">Tuổi bình quân = ${frac('Khấu hao lũy kế', 'Chi phí khấu hao')} &nbsp;&nbsp; Tổng thời gian sử dụng = ${frac('Nguyên giá', 'Chi phí khấu hao')} &nbsp;&nbsp; Thời gian còn lại = ${frac('Giá trị còn lại (net PP&amp;E)', 'Chi phí khấu hao')}</div>
<div class="example"><div class="ex-h">Ví dụ 8.1</div>
<p>Nguyên giá PP&amp;E 4.800, khấu hao lũy kế 1.800, chi phí khấu hao năm nay 600, capex năm nay 900.</p>
<details><summary>Xem lời giải</summary>
<p>Tuổi bình quân = 1.800 / 600 = <b>3 năm</b>. Tổng thời gian sử dụng = 4.800 / 600 = <b>8 năm</b>. Thời gian còn lại = (4.800 - 1.800) / 600 = <b>5 năm</b> (kiểm tra: 3 + 5 = 8).<br>
Capex / khấu hao = 900 / 600 = <b>1,5</b>: công ty đầu tư nhiều hơn mức hao mòn, tức đang mở rộng năng lực.</p></details></div>
<p class="tip">Tài sản "già" (tuổi bình quân cao so với tổng thời gian) báo hiệu sắp phải chi capex lớn, ảnh hưởng FCF tương lai. Tỷ số capex / khấu hao dưới 1 trong nhiều năm có thể là dấu hiệu công ty đang "ăn" vào tài sản. Các ước tính này chỉ gần đúng: chúng bị ảnh hưởng bởi phương pháp khấu hao, tài sản không khấu hao (đất) và các thương vụ mua bán.</p>`,
    },
    {
      title: '9. Tóm tắt và bẫy thường gặp',
      minutes: 3,
      html: `
<table class="plain"><thead><tr><th>Tình huống</th><th>Nhớ</th></tr></thead><tbody>
<tr><td>Vốn hóa so với ghi chi phí</td><td>Lợi nhuận kỳ đầu cao, mượt hơn; CFO cao, CFI thấp; tổng không đổi</td></tr>
<tr><td>DDB</td><td>Tỷ lệ 2/N nhân giá trị còn lại; không khấu hao dưới giá trị thanh lý</td></tr>
<tr><td>Vô hình tự tạo</td><td>Ghi chi phí; IFRS vốn hóa chi phí phát triển đủ điều kiện</td></tr>
<tr><td>Hợp nhất kinh doanh</td><td>Vô hình xác định được theo giá trị hợp lý; goodwill = phần dư</td></tr>
<tr><td>Đánh giá lại (chỉ IFRS)</td><td>Tăng vào OCI (trừ đảo ngược lỗ cũ); giảm vào lãi lỗ (trừ đảo ngược thặng dư)</td></tr>
<tr><td>Suy giảm IFRS</td><td>So với max(FV - chi phí bán; giá trị sử dụng); được hoàn nhập (trừ goodwill)</td></tr>
<tr><td>Suy giảm US GAAP</td><td>Bước 1 dòng tiền chưa chiết khấu; lỗ = ghi sổ - giá trị hợp lý; không hoàn nhập</td></tr>
<tr><td>Ảnh hưởng suy giảm</td><td>Không bằng tiền; năm sau khấu hao thấp, ROA cao hơn</td></tr>
<tr><td>Tuổi bình quân</td><td>KH lũy kế / chi phí KH; còn lại = net PP&amp;E / chi phí KH</td></tr>
</tbody></table>
<p>Tiếp theo: tab <b>Luyện tập</b> - 10 câu (rút ngẫu nhiên từ ngân hàng 30 câu, mỗi lần làm một bộ khác). Module sau: FSA-08 Topics in Long-Term Liabilities and Equity.</p>`,
    },
  ];

  const glossary = {
    impair: ['Impairment', 'Suy giảm giá trị', 'Ghi giảm tài sản khi giá trị ghi sổ cao hơn số có thể thu hồi.'],
    capitalize: ['Capitalization', 'Vốn hóa', 'Ghi khoản chi thành tài sản trên bảng cân đối rồi phân bổ dần thành chi phí.'],
    dep: ['Depreciation', 'Khấu hao', 'Phân bổ giá gốc trừ giá trị thanh lý của tài sản hữu hình qua thời gian sử dụng.'],
    salvage: ['Residual (salvage) value', 'Giá trị thanh lý ước tính', 'Số tiền dự kiến thu được khi hết thời gian sử dụng tài sản.'],
    amort: ['Amortization', 'Hao mòn (tài sản vô hình)', 'Phân bổ giá gốc của tài sản vô hình có thời hạn qua thời gian sử dụng.'],
    intang: ['Intangible asset', 'Tài sản vô hình', 'Tài sản dài hạn không có hình thái vật chất, ví dụ bằng sáng chế, thương hiệu.'],
    ident: ['Identifiable intangible', 'Tài sản vô hình xác định được', 'Tách riêng được hoặc phát sinh từ quyền pháp lý, được kiểm soát, có lợi ích tương lai.'],
    goodwill: ['Goodwill', 'Lợi thế thương mại', 'Phần giá mua vượt giá trị hợp lý tài sản thuần xác định được trong hợp nhất kinh doanh.'],
    techfeas: ['Technological feasibility', 'Khả thi về kỹ thuật', 'Mốc từ đó US GAAP cho vốn hóa chi phí phát triển phần mềm để bán.'],
    costmodel: ['Cost model', 'Mô hình giá gốc', 'Giá gốc trừ khấu hao lũy kế và suy giảm; bắt buộc theo US GAAP.'],
    revmodel: ['Revaluation model', 'Mô hình đánh giá lại', 'IFRS: ghi tài sản theo giá trị hợp lý tại ngày đánh giá trừ khấu hao và suy giảm sau đó.'],
    surplus: ['Revaluation surplus', 'Thặng dư đánh giá lại', 'Khoản tăng giá trị do đánh giá lại tích lũy trong vốn chủ qua OCI.'],
    invprop: ['Investment property', 'Bất động sản đầu tư', 'Bất động sản nắm giữ để cho thuê hoặc chờ tăng giá; IFRS cho dùng mô hình giá trị hợp lý qua lãi lỗ.'],
    recov: ['Recoverable amount', 'Giá trị có thể thu hồi', 'IFRS: giá trị cao hơn giữa giá trị hợp lý trừ chi phí bán và giá trị sử dụng.'],
    viu: ['Value in use', 'Giá trị sử dụng', 'PV của dòng tiền tương lai từ việc tiếp tục sử dụng tài sản.'],
    recovtest: ['Recoverability test', 'Kiểm tra khả năng thu hồi', 'US GAAP bước 1: so giá trị ghi sổ với tổng dòng tiền tương lai chưa chiết khấu.'],
    cgu: ['Cash-generating unit (CGU)', 'Đơn vị tạo tiền', 'Nhóm tài sản nhỏ nhất tạo ra dòng tiền độc lập; IFRS kiểm tra goodwill ở cấp này.'],
    reportunit: ['Reporting unit', 'Đơn vị báo cáo', 'Cấp kiểm tra suy giảm goodwill theo US GAAP (bộ phận hoặc cấp dưới bộ phận).'],
    hfs: ['Held for sale', 'Nắm giữ để bán', 'Tài sản dự kiến bán; ngừng khấu hao, đo theo min(giá trị ghi sổ; FV trừ chi phí bán).'],
  };

  const practice = [
    { q: 'So với ghi ngay là chi phí, việc vốn hóa một khoản chi trong năm phát sinh nhiều khả năng làm:', choices: ['Lợi nhuận ròng thấp hơn và CFO cao hơn', 'Lợi nhuận ròng cao hơn và CFO thấp hơn', 'Lợi nhuận ròng cao hơn, CFO cao hơn và CFI thấp hơn (âm hơn)'], answer: 2, explain: 'Vốn hóa: khoản chi không trừ vào lợi nhuận ngay (chỉ trừ khấu hao) nên lợi nhuận cao hơn; khoản chi nằm ở CFI thay vì CFO nên CFO cao hơn, CFI âm hơn. Hai lựa chọn còn lại sai một trong hai chiều.' },
    { q: 'Một công ty theo IFRS chi 2 triệu cho nghiên cứu và 3 triệu cho phát triển sau khi dự án đã đạt đủ điều kiện vốn hóa. Chi phí ghi nhận trong năm (chưa tính hao mòn) là:', choices: ['2 triệu', '5 triệu', '0'], answer: 0, explain: 'IFRS: nghiên cứu ghi chi phí (2 triệu), phát triển đủ điều kiện được vốn hóa (3 triệu). Lựa chọn 5 triệu là cách làm US GAAP (R&D ghi chi phí toàn bộ).' },
    { q: 'P mua Q với giá 900. Giá trị sổ sách tài sản thuần của Q là 500; giá trị hợp lý tài sản hữu hình thuần là 550; Q có một danh sách khách hàng tự xây dựng (chưa ghi sổ) với giá trị hợp lý 100. Goodwill là:', choices: ['350', '250', '400'], answer: 1, explain: 'Goodwill = 900 - (550 + 100) = 250. Danh sách khách hàng là tài sản vô hình xác định được, ghi riêng theo giá trị hợp lý trong hợp nhất. Lựa chọn 350 bỏ sót nó. Lựa chọn 400 dùng giá trị sổ sách thay vì giá trị hợp lý.' },
    { q: 'Phát biểu nào đúng về thương hiệu?', choices: ['Thương hiệu tự xây dựng được vốn hóa theo tổng chi phí quảng cáo đã chi', 'Thương hiệu mua qua hợp nhất kinh doanh được gộp chung vào goodwill', 'Thương hiệu mua riêng được vốn hóa theo giá mua; thương hiệu có được qua hợp nhất kinh doanh được ghi riêng theo giá trị hợp lý'], answer: 2, explain: 'Chi phí xây dựng thương hiệu nội bộ ghi chi phí (phương án "vốn hóa theo tổng chi phí quảng cáo" sai). Thương hiệu là tài sản vô hình xác định được nên ghi riêng, không gộp vào goodwill (phương án "gộp chung vào goodwill" sai).' },
    { q: 'Theo IFRS, một máy có giá trị ghi sổ 1.200; giá trị hợp lý trừ chi phí bán 1.000; giá trị sử dụng 1.050; dòng tiền tương lai chưa chiết khấu 1.300. Lỗ suy giảm là:', choices: ['150', '200', '0'], answer: 0, explain: 'Giá trị có thể thu hồi = max(1.000; 1.050) = 1.050; lỗ = 1.200 - 1.050 = 150. Lựa chọn 200 chỉ dùng giá trị hợp lý trừ chi phí bán. Lựa chọn 0 áp dụng nhầm bước 1 của US GAAP (dòng tiền chưa chiết khấu).' },
    { q: 'Theo US GAAP, tài sản đang sử dụng có giá trị ghi sổ 800; dòng tiền tương lai chưa chiết khấu 760; PV dòng tiền 720; giá trị hợp lý 690. Lỗ suy giảm là:', choices: ['40', '110', '80'], answer: 1, explain: '800 > 760 nên không vượt qua kiểm tra khả năng thu hồi. Lỗ = giá trị ghi sổ - giá trị hợp lý = 800 - 690 = 110. Lựa chọn 40 dùng dòng tiền chưa chiết khấu để đo lỗ. Lựa chọn 80 dùng PV dòng tiền (giống IFRS giá trị sử dụng).' },
    { q: 'Theo mô hình đánh giá lại (IFRS), lô đất giá gốc 500 được đánh giá lại lên 600 ở năm 1, rồi xuống 450 ở năm 2. Khoản lỗ ghi vào lãi lỗ năm 2 là:', choices: ['50', '150', '0'], answer: 0, explain: 'Giảm 150: 100 đầu tiên xóa thặng dư đánh giá lại (ghi giảm OCI), 50 còn lại (xuống dưới giá gốc) ghi lỗ. Lựa chọn 150 ghi toàn bộ vào lãi lỗ. Lựa chọn 0 ghi toàn bộ vào OCI.' },
    { q: 'Phát biểu nào đúng về hoàn nhập lỗ suy giảm?', choices: ['US GAAP cho phép hoàn nhập lỗ suy giảm của tài sản đang sử dụng nếu giá trị hồi phục', 'IFRS cho phép hoàn nhập lỗ suy giảm goodwill', 'IFRS cho phép hoàn nhập lỗ suy giảm PP&E, nhưng không vượt giá trị ghi sổ nếu chưa từng suy giảm'], answer: 2, explain: 'US GAAP cấm hoàn nhập với tài sản đang sử dụng (phương án nói US GAAP cho phép hoàn nhập sai). Cả hai bộ chuẩn mực cấm hoàn nhập lỗ goodwill (phương án nói IFRS cho phép hoàn nhập goodwill sai).' },
    { q: 'Nguyên giá PP&E 6.000, khấu hao lũy kế 2.400, chi phí khấu hao năm 400 (đường thẳng). Thời gian sử dụng còn lại ước tính là:', choices: ['6 năm', '9 năm', '15 năm'], answer: 1, explain: 'Thời gian còn lại = (6.000 - 2.400) / 400 = 9 năm. Lựa chọn 6 năm là tuổi bình quân (2.400 / 400). Lựa chọn 15 năm là tổng thời gian sử dụng (6.000 / 400).' },
    { q: 'Máy giá gốc 80.000, khấu hao lũy kế 50.000, bán được 24.000 tiền mặt. Ảnh hưởng lên báo cáo lưu chuyển tiền tệ (phương pháp gián tiếp):', choices: ['CFI tăng 24.000; khoản lỗ 6.000 được cộng lại khi tính CFO', 'CFI giảm 6.000', 'CFO giảm 6.000 và CFI tăng 30.000'], answer: 0, explain: 'Giá trị ghi sổ 30.000, lỗ 6.000. Toàn bộ tiền thu 24.000 là dòng vào CFI. Lỗ là khoản không bằng tiền đã trừ trong lợi nhuận, nên cộng lại khi tính CFO. Hai lựa chọn còn lại nhầm lỗ kế toán với dòng tiền.' },
    { q: "Một máy có giá gốc 50.000, giá trị thanh lý ước tính 5.000, thời gian sử dụng 5 năm. Theo phương pháp số dư giảm dần kép (DDB), chi phí khấu hao năm 2 là:", choices: ["10.800", "12.000", "9.000"], answer: 1, explain: "Tỷ lệ DDB = 2/5 = 40%. Năm 1: 40% × 50.000 = 20.000; năm 2: 40% × (50.000 - 20.000) = 12.000. Lựa chọn 10.800 trừ giá trị thanh lý trước khi nhân tỷ lệ (DDB không trừ giá trị thanh lý trong công thức). Lựa chọn 9.000 là khấu hao đường thẳng." },
    { q: "Thiết bị giá gốc 260.000, giá trị thanh lý 20.000, dự kiến vận hành tổng cộng 120.000 giờ trong 5 năm. Năm đầu thiết bị chạy 18.000 giờ. Khấu hao năm đầu theo phương pháp sản lượng (units of production) là:", choices: ["39.000", "48.000", "36.000"], answer: 2, explain: "Khấu hao mỗi giờ = (260.000 - 20.000) / 120.000 = 2; năm đầu = 18.000 × 2 = 36.000. Lựa chọn 39.000 quên trừ giá trị thanh lý. Lựa chọn 48.000 là khấu hao đường thẳng, không phản ánh mức sử dụng thực tế." },
    { q: "Một tài sản giá gốc 120.000, không có giá trị thanh lý, khấu hao đường thẳng 10 năm. Sau 4 năm, công ty ước tính lại rằng tài sản còn dùng được 8 năm nữa. Chi phí khấu hao năm thứ 5 là:", choices: ["9.000", "10.000", "12.000"], answer: 0, explain: "Thay đổi ước tính áp dụng phi hồi tố: giá trị còn lại 120.000 - 48.000 = 72.000 được khấu hao trong 8 năm còn lại, mỗi năm 9.000. Lựa chọn 10.000 tính lại từ đầu với tổng thời gian 12 năm (cách làm hồi tố, sai). Lựa chọn 12.000 bỏ qua ước tính mới." },
    { q: "Hai công ty giống hệt nhau, chỉ khác ở chỗ công ty X vốn hóa một khoản chi lớn còn công ty Y ghi ngay là chi phí. Trong năm phát sinh khoản chi, so với Y, X nhiều khả năng có:", choices: ["Tỷ số nợ trên vốn chủ cao hơn", "ROA cao hơn", "CFO thấp hơn"], answer: 1, explain: "Ở năm đầu, X chỉ trừ khấu hao thay vì toàn bộ khoản chi, nên lợi nhuận tăng tương đối nhiều hơn tài sản: ROA cao hơn. Vốn chủ của X cao hơn nên tỷ số nợ trên vốn chủ thấp hơn, không cao hơn. Khoản chi của X nằm ở CFI nên CFO của X cao hơn, không thấp hơn." },
    { q: "Một công ty theo US GAAP phát triển phần mềm để bán. Trong năm, công ty chi 4,0 triệu trước khi đạt khả thi về kỹ thuật (technological feasibility) và 1,5 triệu sau thời điểm đó. Chi phí ghi nhận vào báo cáo kết quả kinh doanh trong năm (chưa tính hao mòn) là:", choices: ["4,0 triệu", "5,5 triệu", "1,5 triệu"], answer: 0, explain: "US GAAP: chi phí phần mềm để bán trước khi đạt khả thi về kỹ thuật ghi chi phí (4,0 triệu); sau đó được vốn hóa (1,5 triệu). Lựa chọn 5,5 triệu áp dụng quy tắc R&D chung (ghi chi phí toàn bộ), bỏ qua ngoại lệ phần mềm. Lựa chọn 1,5 triệu đảo ngược hai giai đoạn." },
    { q: "Công ty M mua toàn bộ công ty N với giá 2.400. Giá trị hợp lý tài sản hữu hình thuần của N là 1.500. N có bằng sáng chế ghi sổ 120, giá trị hợp lý 300. M ước tính đội ngũ nhân viên lành nghề của N (assembled workforce) có giá trị 200. Goodwill ghi nhận là:", choices: ["400", "780", "600"], answer: 2, explain: "Bằng sáng chế là tài sản vô hình xác định được, ghi theo giá trị hợp lý 300. Đội ngũ nhân viên không tách riêng được và không phát sinh từ quyền pháp lý nên không ghi riêng, mà nằm trong goodwill. Goodwill = 2.400 - 1.500 - 300 = 600. Lựa chọn 400 trừ thêm đội ngũ nhân viên. Lựa chọn 780 dùng giá trị sổ sách của bằng sáng chế." },
    { q: "Một công ty mua giấy phép phát sóng có thể gia hạn vô thời hạn với chi phí không đáng kể, và công ty dự định gia hạn mãi. Sau ghi nhận ban đầu, giấy phép này nhiều khả năng được:", choices: ["Hao mòn đường thẳng theo thời hạn của giấy phép hiện tại", "Không hao mòn, kiểm tra suy giảm giá trị ít nhất hằng năm", "Ghi giảm toàn bộ vào chi phí ngay năm mua"], answer: 1, explain: "Tài sản vô hình có thời hạn hữu ích không xác định không hao mòn; nó được kiểm tra suy giảm ít nhất hằng năm (cả IFRS và US GAAP). Hao mòn theo thời hạn giấy phép hiện tại bỏ qua việc gia hạn gần như chắc chắn. Ghi chi phí ngay là cách xử lý tài sản vô hình tự tạo, không áp dụng cho tài sản mua." },
    { q: "Ngày 1/1, công ty mua một bằng sáng chế với giá 900.000. Thời hạn pháp lý còn lại là 12 năm, nhưng công ty dự kiến công nghệ chỉ mang lại lợi ích trong 6 năm. Chi phí hao mòn năm đầu (đường thẳng, không có giá trị thanh lý) là:", choices: ["75.000", "0", "150.000"], answer: 2, explain: "Hao mòn theo thời gian sử dụng hữu ích, là thời gian ngắn hơn giữa thời hạn pháp lý và thời gian mang lại lợi ích kinh tế: 900.000 / 6 = 150.000. Lựa chọn 75.000 dùng thời hạn pháp lý 12 năm. Lựa chọn 0 coi nhầm bằng sáng chế là tài sản không xác định thời hạn." },
    { q: "Theo IFRS, một máy giá gốc 1.000, khấu hao đường thẳng 10 năm, không có giá trị thanh lý. Cuối năm 2, máy bị ghi giảm xuống giá trị có thể thu hồi 600, sau đó tiếp tục khấu hao đường thẳng trong 8 năm còn lại. Cuối năm 4, giá trị có thể thu hồi tăng lên 700. Khoản hoàn nhập lỗ suy giảm ghi nhận cuối năm 4 là:", choices: ["150", "250", "0"], answer: 0, explain: "Sau suy giảm, khấu hao = 600 / 8 = 75/năm; giá trị ghi sổ cuối năm 4 = 600 - 2 × 75 = 450. Nếu chưa từng suy giảm, giá trị ghi sổ cuối năm 4 = 1.000 - 4 × 100 = 600; IFRS chỉ cho hoàn nhập tối đa đến mức này: 600 - 450 = 150. Lựa chọn 250 hoàn nhập lên đến giá trị có thể thu hồi, vượt trần. Lựa chọn 0 là quy định US GAAP (cấm hoàn nhập với tài sản đang sử dụng)." },
    { q: "So với trường hợp không ghi suy giảm, trong các năm sau năm ghi lỗ suy giảm một tài sản dài hạn, công ty nhiều khả năng có:", choices: ["Vòng quay tổng tài sản thấp hơn", "ROA cao hơn", "Lợi nhuận ròng thấp hơn"], answer: 1, explain: "Sau suy giảm, giá trị ghi sổ thấp hơn nên khấu hao các năm sau thấp hơn: lợi nhuận ròng cao hơn trong khi tổng tài sản nhỏ hơn, nên ROA cao hơn. Vòng quay tài sản (doanh thu / tài sản) tăng chứ không giảm vì mẫu số nhỏ hơn. Lợi nhuận ròng thấp hơn chỉ đúng ở năm ghi lỗ, không đúng ở các năm sau." },
    { q: "Trong năm một công ty ghi nhận lỗ suy giảm giá trị lớn đối với nhà máy (bỏ qua thuế), phát biểu nào chính xác nhất?", choices: ["CFO giảm đúng bằng khoản lỗ suy giảm", "ROE tăng vì vốn chủ giảm", "Tỷ số nợ trên vốn chủ tăng, còn CFO không bị ảnh hưởng"], answer: 2, explain: "Lỗ suy giảm làm giảm tài sản và vốn chủ nên nợ trên vốn chủ tăng; đây là bút toán không bằng tiền nên CFO không đổi (được cộng lại theo phương pháp gián tiếp). Phát biểu \"CFO giảm\" nhầm lỗ kế toán với dòng tiền. ROE năm ghi lỗ giảm vì lợi nhuận giảm mạnh, không tăng." },
    { q: "Một công ty phân loại một tòa nhà văn phòng là nắm giữ để bán (held for sale). Giá trị ghi sổ 500, giá trị hợp lý 430, chi phí bán ước tính 20. Lỗ ghi nhận (theo cả IFRS và US GAAP) và cách xử lý khấu hao sau đó là:", choices: ["Lỗ 70; tiếp tục khấu hao", "Lỗ 90; ngừng khấu hao", "Lỗ 90; tiếp tục khấu hao"], answer: 1, explain: "Tài sản nắm giữ để bán đo theo giá thấp hơn giữa giá trị ghi sổ và giá trị hợp lý trừ chi phí bán: 430 - 20 = 410; lỗ = 500 - 410 = 90, và ngừng khấu hao. Lựa chọn lỗ 70 quên trừ chi phí bán. Lựa chọn \"tiếp tục khấu hao\" sai vì tài sản nắm giữ để bán không còn được khấu hao." },
    { q: "Theo US GAAP, một đơn vị báo cáo (reporting unit) có giá trị ghi sổ 5.200, trong đó goodwill là 800. Giá trị hợp lý của đơn vị là 4.200. Lỗ suy giảm goodwill là:", choices: ["800", "1.000", "200"], answer: 0, explain: "US GAAP: lỗ = giá trị ghi sổ - giá trị hợp lý của đơn vị = 5.200 - 4.200 = 1.000, nhưng tối đa bằng goodwill 800. Vậy lỗ là 800. Lựa chọn 1.000 bỏ qua mức trần. Lựa chọn 200 lấy phần chênh lệch vượt goodwill, không có ý nghĩa trong phép thử này." },
    { q: "Một công ty bỏ đi (abandon) một thiết bị cũ có nguyên giá 40.000 và khấu hao lũy kế 32.000, không thu được tiền. Ảnh hưởng của giao dịch là:", choices: ["Lỗ 40.000; không ảnh hưởng dòng tiền", "Không có lãi lỗ; CFI giảm 8.000", "Lỗ 8.000; không ảnh hưởng dòng tiền"], answer: 2, explain: "Khi bỏ tài sản, toàn bộ giá trị ghi sổ 40.000 - 32.000 = 8.000 được ghi nhận là lỗ, và không có dòng tiền vì không thu được gì. Lựa chọn lỗ 40.000 dùng nguyên giá thay vì giá trị ghi sổ. Lựa chọn CFI giảm 8.000 nhầm khoản lỗ kế toán là dòng tiền." },
    { q: "Một công ty liên tục ghi nhận lãi khi bán thiết bị cũ qua nhiều năm. Điều này nhiều khả năng cho thấy:", choices: ["Công ty dùng thời gian sử dụng ước tính quá ngắn hoặc giá trị thanh lý quá thấp", "Công ty khấu hao quá chậm so với mức hao mòn thực tế", "Lợi nhuận hoạt động cốt lõi của công ty đang tăng bền vững"], answer: 0, explain: "Lãi khi bán nghĩa là giá trị ghi sổ thấp hơn giá bán, tức trước đó tài sản đã bị khấu hao quá nhanh (thời gian sử dụng ngắn hoặc giá trị thanh lý thấp). Khấu hao quá chậm sẽ tạo ra lỗ khi bán. Lãi bán tài sản không lặp lại và nên loại khỏi lợi nhuận cốt lõi, nên không chứng minh lợi nhuận cốt lõi tăng." },
    { q: "Thuyết minh PP&E: nguyên giá 9.000, trong đó đất 1.500; khấu hao lũy kế 4.200; chi phí khấu hao năm 600; công ty khấu hao đường thẳng. Thời gian sử dụng còn lại bình quân ước tính của tài sản được khấu hao là:", choices: ["8 năm", "5,5 năm", "7 năm"], answer: 1, explain: "Đất không khấu hao nên loại khỏi nguyên giá: (9.000 - 1.500 - 4.200) / 600 = 5,5 năm. Lựa chọn 8 năm quên loại đất. Lựa chọn 7 năm là tuổi bình quân (4.200 / 600)." },
    { q: "Trong ba năm liên tiếp, một công ty có capex khoảng 450 mỗi năm và chi phí khấu hao khoảng 600 mỗi năm. Tỷ số capex / khấu hao và cách diễn giải phù hợp nhất là:", choices: ["1,33; công ty đang mở rộng năng lực sản xuất", "0,75; công ty đang mở rộng năng lực sản xuất", "0,75; công ty có thể đang đầu tư thấp hơn mức hao mòn, tài sản già đi"], answer: 2, explain: "Capex / khấu hao = 450 / 600 = 0,75 < 1: đầu tư mới không bù được hao mòn, tài sản già dần và có thể sắp phải chi capex lớn. Lựa chọn 1,33 đảo ngược phép chia. Diễn giải \"mở rộng năng lực\" chỉ phù hợp khi tỷ số lớn hơn 1." },
    { q: "Theo IFRS, so với mô hình giá gốc, một công ty đánh giá tăng nhà xưởng theo mô hình đánh giá lại nhiều khả năng có:", choices: ["Tỷ số nợ trên vốn chủ thấp hơn", "ROA cao hơn", "Vòng quay tài sản cố định cao hơn"], answer: 0, explain: "Đánh giá tăng làm tài sản và vốn chủ (thặng dư đánh giá lại) tăng, nên nợ trên vốn chủ thấp hơn. ROA thấp hơn vì tài sản lớn hơn và khấu hao tính trên giá trị mới cao hơn làm lợi nhuận giảm. Vòng quay tài sản cố định thấp hơn vì mẫu số lớn hơn. Lưu ý US GAAP không cho phép mô hình đánh giá lại." },
    { q: "Theo mô hình đánh giá lại (IFRS), một lô đất giá gốc 800 được đánh giá lại xuống 700 cuối năm 1, rồi lên 880 cuối năm 2. Số tiền ghi vào OCI ở năm 2 là:", choices: ["180", "80", "0"], answer: 1, explain: "Năm 1 giảm 100 ghi lỗ vào lãi lỗ. Năm 2 tăng 180: 100 đầu tiên đảo ngược khoản lỗ trước nên ghi lãi vào lãi lỗ; phần còn lại 880 - 800 = 80 ghi vào OCI (thặng dư đánh giá lại). Lựa chọn 180 ghi toàn bộ vào OCI. Lựa chọn 0 ghi toàn bộ vào lãi lỗ." },
    { q: "Một hãng hàng không mua máy bay; động cơ cần thay sau 8 năm, thân máy bay dùng được 25 năm. Phát biểu nào chính xác nhất về khấu hao theo cấu phần (component depreciation)?", choices: ["US GAAP bắt buộc khấu hao riêng động cơ và thân máy bay, còn IFRS chỉ cho phép", "Cả IFRS và US GAAP đều yêu cầu khấu hao toàn bộ máy bay theo một thời gian sử dụng bình quân", "IFRS yêu cầu khấu hao riêng động cơ và thân máy bay; US GAAP cho phép nhưng hiếm dùng"], answer: 2, explain: "IFRS yêu cầu khấu hao riêng từng bộ phận quan trọng có thời gian sử dụng khác nhau; US GAAP cho phép cách này nhưng ít công ty áp dụng. Phát biểu cho rằng US GAAP bắt buộc đã đảo ngược hai chuẩn mực. Khấu hao theo một thời gian bình quân bỏ qua yêu cầu của IFRS." },
  ];

  window.LESSONS['FSA-07'] = {
    moduleId: 'FSA-07',
    calculator: 'BA II Plus',
    warmup: [
      'Ôn FSA-06: khi tồn kho bị ghi giảm theo IFRS, năm sau có được hoàn nhập không? US GAAP thì sao?',
      'Một khoản chi mua máy được ghi vào CFO hay CFI?',
      'Theo bạn, vì sao một công ty tự xây dựng thương hiệu lại có tổng tài sản nhỏ hơn công ty đi mua thương hiệu?',
    ],
    sections,
    glossary,
    practice,
    widgets: {},
    slides: [],
    wrapup: [
      'Lập bảng so sánh IFRS và US GAAP về kiểm tra suy giảm và hoàn nhập.',
      'Phân biệt cách ghi nhận tài sản vô hình mua riêng, tự tạo và mua qua hợp nhất.',
      'Tự đặt số liệu và tính tuổi bình quân, tổng thời gian và thời gian còn lại của PP&E.',
    ],
  };
}());
