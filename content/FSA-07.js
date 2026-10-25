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
<p>Tiếp theo: tab <b>Luyện tập</b> - 10 câu. Module sau: FSA-08 Topics in Long-Term Liabilities and Equity.</p>`,
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
    { q: 'So với ghi ngay là chi phí, việc vốn hóa một khoản chi trong năm phát sinh nhiều khả năng làm:', choices: ['Lợi nhuận ròng thấp hơn và CFO cao hơn', 'Lợi nhuận ròng cao hơn và CFO thấp hơn', 'Lợi nhuận ròng cao hơn, CFO cao hơn và CFI thấp hơn (âm hơn)'], answer: 2, explain: 'Vốn hóa: khoản chi không trừ vào lợi nhuận ngay (chỉ trừ khấu hao) nên lợi nhuận cao hơn; khoản chi nằm ở CFI thay vì CFO nên CFO cao hơn, CFI âm hơn. A và B sai một trong hai chiều.' },
    { q: 'Một công ty theo IFRS chi 2 triệu cho nghiên cứu và 3 triệu cho phát triển sau khi dự án đã đạt đủ điều kiện vốn hóa. Chi phí ghi nhận trong năm (chưa tính hao mòn) là:', choices: ['2 triệu', '5 triệu', '0'], answer: 0, explain: 'IFRS: nghiên cứu ghi chi phí (2 triệu), phát triển đủ điều kiện được vốn hóa (3 triệu). Đáp án B là cách làm US GAAP (R&D ghi chi phí toàn bộ).' },
    { q: 'P mua Q với giá 900. Giá trị sổ sách tài sản thuần của Q là 500; giá trị hợp lý tài sản hữu hình thuần là 550; Q có một danh sách khách hàng tự xây dựng (chưa ghi sổ) với giá trị hợp lý 100. Goodwill là:', choices: ['350', '250', '400'], answer: 1, explain: 'Goodwill = 900 - (550 + 100) = 250. Danh sách khách hàng là tài sản vô hình xác định được, ghi riêng theo giá trị hợp lý trong hợp nhất. A bỏ sót nó. C dùng giá trị sổ sách thay vì giá trị hợp lý.' },
    { q: 'Phát biểu nào đúng về thương hiệu?', choices: ['Thương hiệu tự xây dựng được vốn hóa theo tổng chi phí quảng cáo đã chi', 'Thương hiệu mua qua hợp nhất kinh doanh được gộp chung vào goodwill', 'Thương hiệu mua riêng được vốn hóa theo giá mua; thương hiệu có được qua hợp nhất kinh doanh được ghi riêng theo giá trị hợp lý'], answer: 2, explain: 'Chi phí xây dựng thương hiệu nội bộ ghi chi phí (A sai). Thương hiệu là tài sản vô hình xác định được nên ghi riêng, không gộp vào goodwill (B sai).' },
    { q: 'Theo IFRS, một máy có giá trị ghi sổ 1.200; giá trị hợp lý trừ chi phí bán 1.000; giá trị sử dụng 1.050; dòng tiền tương lai chưa chiết khấu 1.300. Lỗ suy giảm là:', choices: ['150', '200', '0'], answer: 0, explain: 'Giá trị có thể thu hồi = max(1.000; 1.050) = 1.050; lỗ = 1.200 - 1.050 = 150. B chỉ dùng giá trị hợp lý trừ chi phí bán. C áp dụng nhầm bước 1 của US GAAP (dòng tiền chưa chiết khấu).' },
    { q: 'Theo US GAAP, tài sản đang sử dụng có giá trị ghi sổ 800; dòng tiền tương lai chưa chiết khấu 760; PV dòng tiền 720; giá trị hợp lý 690. Lỗ suy giảm là:', choices: ['40', '110', '80'], answer: 1, explain: '800 > 760 nên không vượt qua kiểm tra khả năng thu hồi. Lỗ = giá trị ghi sổ - giá trị hợp lý = 800 - 690 = 110. A dùng dòng tiền chưa chiết khấu để đo lỗ. C dùng PV dòng tiền (giống IFRS giá trị sử dụng).' },
    { q: 'Theo mô hình đánh giá lại (IFRS), lô đất giá gốc 500 được đánh giá lại lên 600 ở năm 1, rồi xuống 450 ở năm 2. Khoản lỗ ghi vào lãi lỗ năm 2 là:', choices: ['50', '150', '0'], answer: 0, explain: 'Giảm 150: 100 đầu tiên xóa thặng dư đánh giá lại (ghi giảm OCI), 50 còn lại (xuống dưới giá gốc) ghi lỗ. B ghi toàn bộ vào lãi lỗ. C ghi toàn bộ vào OCI.' },
    { q: 'Phát biểu nào đúng về hoàn nhập lỗ suy giảm?', choices: ['US GAAP cho phép hoàn nhập lỗ suy giảm của tài sản đang sử dụng nếu giá trị hồi phục', 'IFRS cho phép hoàn nhập lỗ suy giảm goodwill', 'IFRS cho phép hoàn nhập lỗ suy giảm PP&E, nhưng không vượt giá trị ghi sổ nếu chưa từng suy giảm'], answer: 2, explain: 'US GAAP cấm hoàn nhập với tài sản đang sử dụng (A sai). Cả hai bộ chuẩn mực cấm hoàn nhập lỗ goodwill (B sai).' },
    { q: 'Nguyên giá PP&E 6.000, khấu hao lũy kế 2.400, chi phí khấu hao năm 400 (đường thẳng). Thời gian sử dụng còn lại ước tính là:', choices: ['6 năm', '9 năm', '15 năm'], answer: 1, explain: 'Thời gian còn lại = (6.000 - 2.400) / 400 = 9 năm. A là tuổi bình quân (2.400 / 400). C là tổng thời gian sử dụng (6.000 / 400).' },
    { q: 'Máy giá gốc 80.000, khấu hao lũy kế 50.000, bán được 24.000 tiền mặt. Ảnh hưởng lên báo cáo lưu chuyển tiền tệ (phương pháp gián tiếp):', choices: ['CFI tăng 24.000; khoản lỗ 6.000 được cộng lại khi tính CFO', 'CFI giảm 6.000', 'CFO giảm 6.000 và CFI tăng 30.000'], answer: 0, explain: 'Giá trị ghi sổ 30.000, lỗ 6.000. Toàn bộ tiền thu 24.000 là dòng vào CFI. Lỗ là khoản không bằng tiền đã trừ trong lợi nhuận, nên cộng lại khi tính CFO. B và C nhầm lỗ kế toán với dòng tiền.' },
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
