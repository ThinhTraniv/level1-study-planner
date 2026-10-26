// Bài giảng FSA-03 - Analyzing Balance Sheets (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t, frac, keys } = window.CFAH;

  const sections = [
    {
      title: '1. Bức tranh lớn: bảng cân đối được đo bằng nhiều "thước"',
      minutes: 10,
      html: `
<div class="formula">Tài sản = Nợ phải trả + Vốn chủ sở hữu</div>
<p>${t('bs', 'Bảng cân đối kế toán')} là ảnh chụp tại một thời điểm. Điều quan trọng nhất cần hiểu: các dòng trên bảng <b>không được đo cùng một cách</b>. Tổng tài sản không phải là "giá trị doanh nghiệp".</p>
<table class="plain"><thead><tr><th>Cơ sở đo lường</th><th>Ví dụ</th></tr></thead><tbody>
<tr><td>${t('hc', 'Giá gốc (historical cost)')} trừ khấu hao, suy giảm</td><td>Nhà xưởng, máy móc, tài sản vô hình mua về</td></tr>
<tr><td>${t('amortcost', 'Giá trị phân bổ (amortized cost)')}</td><td>Trái phiếu nắm giữ đến đáo hạn, khoản vay, trái phiếu doanh nghiệp đã phát hành</td></tr>
<tr><td>${t('fv', 'Giá trị hợp lý (fair value)')}</td><td>Chứng khoán kinh doanh, công cụ phái sinh</td></tr>
<tr><td>Giá trị thấp hơn giữa giá gốc và giá trị thuần có thể thực hiện</td><td>Hàng tồn kho (FSA-06)</td></tr>
<tr><td>Không ghi nhận</td><td>Thương hiệu tự xây dựng, đội ngũ nhân sự, lợi thế thương mại tự tạo</td></tr>
</tbody></table>
<p><b>Trình bày:</b> thường chia ngắn hạn và dài hạn (classified). IFRS cho phép trình bày theo <b>thứ tự thanh khoản</b> khi thông tin đó đáng tin cậy và phù hợp hơn, ví dụ với ngân hàng.</p>
<div class="key">Năm LOS của module: tài sản vô hình (phần 2), lợi thế thương mại (phần 3), công cụ tài chính (phần 4), nợ dài hạn (phần 5), common-size và tỷ số (phần 6, 7). Câu hỏi xuyên suốt: <b>con số này được đo thế nào, điều gì không có trên bảng, và nó ảnh hưởng tỷ số ra sao?</b></div>`,
    },
    {
      title: '2. Tài sản vô hình',
      minutes: 15,
      html: `
<p>${t('intang', 'Tài sản vô hình (intangible assets)')} là tài sản phi tiền tệ, không có hình thái vật chất: bằng sáng chế, thương hiệu, bản quyền, phần mềm, danh sách khách hàng, giấy phép.</p>
<ul>
<li>${t('identifiable', 'Có thể xác định được (identifiable)')}: <b>tách riêng</b> được (bán, cho thuê, chuyển nhượng) hoặc phát sinh từ <b>quyền hợp đồng, pháp lý</b>; doanh nghiệp kiểm soát; có lợi ích kinh tế tương lai có thể xảy ra.</li>
<li>Không xác định được: lợi thế thương mại, không tách khỏi doanh nghiệp được (phần 3).</li>
</ul>
<h4>Cách ghi nhận phụ thuộc vào nguồn gốc</h4>
<table class="plain"><thead><tr><th>Nguồn gốc</th><th>Ghi nhận ban đầu</th></tr></thead><tbody>
<tr><td>Mua riêng lẻ</td><td>Theo giá mua (giá gốc)</td></tr>
<tr><td>Có được trong hợp nhất kinh doanh</td><td>Theo <b>giá trị hợp lý</b> tại ngày mua, ghi riêng khỏi lợi thế thương mại (kể cả khi bên bị mua chưa từng ghi nhận)</td></tr>
<tr><td>Tự tạo ra</td><td>Phần lớn <b>ghi chi phí</b>. IFRS: nghiên cứu ghi chi phí, phát triển vốn hóa khi đủ điều kiện. US GAAP: ghi chi phí R&amp;D (trừ một số chi phí phần mềm)</td></tr>
</tbody></table>
<div class="example"><div class="ex-h">Ví dụ 2.1 - Hai dự án R&amp;D theo IFRS (triệu EUR)</div>
<p>Dự án 1 (pin nhiên liệu hydro) chưa có mẫu thử, chưa chứng minh khả thi kỹ thuật. Dự án 2 (bộ chuyển đổi xúc tác) đã có mẫu thử hoạt động, đang làm bản thương mại, công ty có nguồn lực và ý định hoàn thành.</p>
<table class="plain"><thead><tr><th></th><th>Dự án 1</th><th>Dự án 2</th></tr></thead><tbody>
<tr><td>Nguyên vật liệu</td><td>150</td><td>120</td></tr>
<tr><td>Nhân công trực tiếp</td><td>80</td><td>60</td></tr>
<tr><td>Chi phí sản xuất chung</td><td>40</td><td>30</td></tr>
<tr><td>Chi phí quản lý chung</td><td>30</td><td>30</td></tr>
</tbody></table>
<details><summary>Xem lời giải</summary>
<p>Dự án 1 ở giai đoạn <b>nghiên cứu</b>: ghi chi phí toàn bộ 150 + 80 + 40 + 30 = <b>300</b>.<br>
Dự án 2 ở giai đoạn <b>phát triển</b>, đủ điều kiện: vốn hóa các chi phí trực tiếp liên quan 120 + 60 + 30 = <b>210</b>. Chi phí quản lý chung 30 không gắn trực tiếp với việc tạo tài sản nên ghi chi phí.<br>
Tổng chi phí trong năm = 330. Nếu theo US GAAP, ghi chi phí cả 540.</p></details></div>
<h4>Đo lường sau ghi nhận ban đầu</h4>
<ul>
<li>IFRS: chọn ${t('costmodel', 'mô hình giá gốc')} hoặc ${t('reval', 'mô hình đánh giá lại')}; đánh giá lại chỉ dùng được khi có <b>thị trường hoạt động</b> (hiếm với tài sản vô hình). US GAAP: <b>chỉ mô hình giá gốc</b>.</li>
<li>Thời gian sử dụng ${t('finite', 'hữu hạn')}: phân bổ (amortize) theo thời gian sử dụng, thường đường thẳng. Ví dụ mua bằng sáng chế 120, còn 10 năm: phân bổ 12 mỗi năm.</li>
<li>Thời gian sử dụng ${t('indefinite', 'không xác định')} (ví dụ thương hiệu gia hạn được mãi): <b>không phân bổ</b>, kiểm tra suy giảm giá trị ít nhất hằng năm.</li>
</ul>
<h4>Thuyết minh và hệ quả phân tích</h4>
<p>Doanh nghiệp thuyết minh: nhóm tài sản vô hình, thời gian sử dụng và phương pháp phân bổ, nguyên giá, phân bổ lũy kế, suy giảm giá trị, chi phí R&amp;D đã ghi vào chi phí trong kỳ.</p>
<p class="warn"><b>Hệ quả:</b> một công ty tự xây thương hiệu (ghi chi phí quảng cáo) và một công ty <b>mua</b> thương hiệu tương tự (ghi tài sản) có bảng cân đối rất khác nhau dù kinh tế giống nhau. Tổng tài sản, ROA, tỷ lệ nợ trên tài sản không so sánh trực tiếp được.</p>`,
    },
    {
      title: '3. Lợi thế thương mại (goodwill)',
      minutes: 14,
      html: `
<div class="formula">${t('goodwill', 'Lợi thế thương mại')} = Giá mua - Giá trị hợp lý của tài sản thuần có thể xác định được</div>
<p>Lợi thế thương mại chỉ phát sinh khi <b>mua một doanh nghiệp</b>, phản ánh phần trả thêm cho thương hiệu, quan hệ khách hàng chưa tách riêng được, đội ngũ, vị thế thị trường và ${t('synergy', 'lợi ích cộng hưởng')} kỳ vọng. ${t('internalgw', 'Lợi thế thương mại tự tạo')} <b>không được ghi nhận</b>.</p>
<div class="example"><div class="ex-h">Ví dụ 3.1</div>
<p>ABC mua 100% XYZ với giá 500. Giá trị sổ sách tài sản thuần của XYZ là 300. Giá trị hợp lý nhà xưởng cao hơn sổ sách 40. XYZ có danh sách khách hàng chưa ghi nhận, giá trị hợp lý 60.</p>
<details><summary>Xem lời giải</summary>
<p>Tài sản thuần xác định được theo giá trị hợp lý = 300 + 40 + 60 = 400.<br>
Lợi thế thương mại = 500 - 400 = <b>100</b>. Danh sách khách hàng 60 được ghi riêng thành tài sản vô hình (có thời gian sử dụng hữu hạn, sẽ phân bổ). Đáp án bẫy: 200 (lấy giá mua trừ giá trị sổ sách).</p>
<p>Nếu giá mua <b>thấp hơn</b> giá trị hợp lý tài sản thuần, phần chênh lệch là ${t('bargain', 'lãi từ giao dịch mua giá rẻ (bargain purchase)')}, ghi ngay vào lợi nhuận sau khi kiểm tra lại các giá trị.</p></details></div>
<h4>Sau khi ghi nhận: không phân bổ, kiểm tra suy giảm</h4>
<p>Theo cả IFRS và US GAAP (với công ty đại chúng), lợi thế thương mại <b>không phân bổ</b> mà ${t('impair', 'kiểm tra suy giảm giá trị')} ít nhất hằng năm và khi có dấu hiệu.</p>
<table class="plain"><thead><tr><th></th><th>IFRS</th><th>US GAAP</th></tr></thead><tbody>
<tr><td>Cấp kiểm tra</td><td>${t('cgu', 'Đơn vị tạo tiền (CGU)')} hoặc nhóm CGU</td><td>${t('ru', 'Đơn vị báo cáo (reporting unit)')}</td></tr>
<tr><td>So sánh</td><td>Giá trị ghi sổ của CGU với <b>giá trị có thể thu hồi</b> = max(giá trị hợp lý trừ chi phí bán, giá trị sử dụng)</td><td>Giá trị ghi sổ của đơn vị báo cáo với <b>giá trị hợp lý</b> của đơn vị (có thể đánh giá định tính trước)</td></tr>
<tr><td>Khoản lỗ</td><td>Phần chênh lệch, trừ vào lợi thế thương mại trước, phần còn lại phân bổ cho tài sản khác của CGU</td><td>Phần chênh lệch, tối đa bằng lợi thế thương mại</td></tr>
<tr><td>Hoàn nhập</td><td colspan="2">Không được hoàn nhập lỗ suy giảm lợi thế thương mại (cả hai chuẩn mực)</td></tr>
</tbody></table>
<div class="example"><div class="ex-h">Ví dụ 3.2</div>
<p>Đơn vị chứa lợi thế thương mại 100 nói trên có giá trị ghi sổ 900. Giá trị hợp lý của đơn vị là 840; giá trị hợp lý trừ chi phí bán là 820, giá trị sử dụng là 850. Lỗ suy giảm theo từng chuẩn mực?</p>
<details><summary>Xem lời giải</summary>
<p>US GAAP: 900 - 840 = <b>60</b> (nhỏ hơn 100 nên ghi đủ 60).<br>
IFRS: giá trị có thể thu hồi = max(820, 850) = 850, lỗ = 900 - 850 = <b>50</b>, trừ hết vào lợi thế thương mại.</p></details></div>
<p class="tip"><b>Hệ quả phân tích:</b> lỗ suy giảm làm giảm lợi nhuận và tài sản nhưng <b>không ảnh hưởng dòng tiền</b>; nó thường là dấu hiệu công ty đã trả giá quá cao trong thương vụ cũ. Khi so sánh, nhiều nhà phân tích <b>loại lợi thế thương mại</b> khỏi tài sản và vốn chủ (dùng tangible book value), và loại lỗ suy giảm khỏi lợi nhuận cốt lõi.</p>`,
    },
    {
      title: '4. Công cụ tài chính',
      minutes: 16,
      html: `
<p>${t('fininst', 'Công cụ tài chính (financial instrument)')} là hợp đồng tạo ra tài sản tài chính cho bên này và nợ phải trả tài chính hoặc công cụ vốn cho bên kia: tiền gửi, phải thu, trái phiếu, cổ phiếu đầu tư, khoản vay, phái sinh.</p>
<h4>Tài sản tài chính theo IFRS 9</h4>
<p>Phân loại dựa trên <b>mô hình kinh doanh</b> và đặc điểm dòng tiền hợp đồng (chỉ gồm gốc và lãi hay không).</p>
<table class="plain"><thead><tr><th>Nhóm</th><th>Khi nào</th><th>Trên bảng cân đối</th><th>Thay đổi giá trị chưa thực hiện</th></tr></thead><tbody>
<tr><td>Amortized cost</td><td>Công cụ nợ, giữ để <b>thu dòng tiền hợp đồng</b></td><td>Giá trị phân bổ</td><td>Không ghi nhận</td></tr>
<tr><td>${t('fvoci', 'FVOCI')}</td><td>Công cụ nợ, giữ để thu dòng tiền <b>và</b> có thể bán; hoặc cổ phiếu không kinh doanh mà doanh nghiệp chọn (không hủy ngang) đưa vào nhóm này</td><td>Giá trị hợp lý</td><td>Vào ${t('oci', 'OCI')}. Với công cụ nợ, khi bán thì chuyển lãi lỗ lũy kế sang lợi nhuận; với cổ phiếu thì không</td></tr>
<tr><td>${t('fvpl', 'FVPL')}</td><td>Mọi trường hợp còn lại: chứng khoán kinh doanh, phái sinh, cổ phiếu mặc định</td><td>Giá trị hợp lý</td><td>Vào <b>lợi nhuận</b></td></tr>
</tbody></table>
<h4>US GAAP</h4>
<table class="plain"><thead><tr><th>Nhóm</th><th>Áp dụng</th><th>Đo lường</th><th>Chưa thực hiện</th></tr></thead><tbody>
<tr><td>Held-to-maturity</td><td>Chứng khoán nợ, có ý định và khả năng giữ đến đáo hạn</td><td>Giá trị phân bổ</td><td>Không ghi nhận</td></tr>
<tr><td>Available-for-sale</td><td>Chứng khoán nợ, có thể bán</td><td>Giá trị hợp lý</td><td>OCI</td></tr>
<tr><td>Trading</td><td>Chứng khoán nợ mua để bán ngắn hạn</td><td>Giá trị hợp lý</td><td>Lợi nhuận</td></tr>
<tr><td>Cổ phiếu (không có ảnh hưởng đáng kể)</td><td>Hầu hết đầu tư cổ phiếu</td><td>Giá trị hợp lý</td><td>Lợi nhuận</td></tr>
</tbody></table>
<p>Ở mọi nhóm, <b>tiền lãi, cổ tức và lãi lỗ đã thực hiện</b> đều vào lợi nhuận. Khác biệt chỉ nằm ở phần lãi lỗ <b>chưa thực hiện</b>.</p>
<div class="example"><div class="ex-h">Ví dụ 4.1</div>
<p>Đầu năm mua trái phiếu mệnh giá 1.000 theo mệnh giá, coupon 5%/năm. Cuối năm giá trị hợp lý là 1.030. So sánh ba cách phân loại.</p>
<details><summary>Xem lời giải</summary>
<table class="plain"><thead><tr><th></th><th>Amortized cost (HTM)</th><th>FVOCI (AFS)</th><th>FVPL (trading)</th></tr></thead><tbody>
<tr><td>Giá trị trên BCĐKT</td><td>1.000</td><td>1.030</td><td>1.030</td></tr>
<tr><td>Ảnh hưởng lợi nhuận</td><td>+50</td><td>+50</td><td>+80</td></tr>
<tr><td>Ảnh hưởng OCI</td><td>0</td><td>+30</td><td>0</td></tr>
<tr><td>Ảnh hưởng vốn chủ</td><td>+50</td><td>+80</td><td>+80</td></tr>
</tbody></table>
<p>Cùng một trái phiếu, lợi nhuận khác nhau chỉ vì <b>ý định của ban điều hành</b>. Hai nhóm theo giá trị hợp lý có cùng tác động vốn chủ, nhưng đường đi khác nhau.</p></details></div>
<h4>Phái sinh, nợ tài chính và thứ bậc giá trị hợp lý</h4>
<ul>
<li>Phái sinh đo theo giá trị hợp lý, thay đổi vào lợi nhuận, trừ khi áp dụng ${t('hedge', 'kế toán phòng ngừa rủi ro (hedge accounting)')} thì một phần có thể vào OCI.</li>
<li>Nợ phải trả tài chính (vay, trái phiếu phát hành) chủ yếu đo theo giá trị phân bổ; nợ kinh doanh và phái sinh theo giá trị hợp lý.</li>
<li>${t('fvh', 'Thứ bậc giá trị hợp lý')}: Cấp 1 giá niêm yết trên thị trường hoạt động; Cấp 2 dữ liệu quan sát được khác; Cấp 3 dữ liệu không quan sát được (mô hình nội bộ). Tỷ trọng Cấp 3 cao nghĩa là nhiều xét đoán, nên thận trọng.</li>
</ul>`,
    },
    {
      title: '5. Nợ phải trả dài hạn',
      minutes: 13,
      html: `
<p>Nợ dài hạn là nghĩa vụ đến hạn sau hơn 12 tháng (hoặc sau chu kỳ kinh doanh). Phần đến hạn trong 12 tháng tới chuyển sang ${t('cpltd', 'nợ dài hạn đến hạn trả')} trong nợ ngắn hạn.</p>
<table class="plain"><thead><tr><th>Khoản</th><th>Đo lường chính</th><th>Chi tiết ở</th></tr></thead><tbody>
<tr><td>Trái phiếu, khoản vay dài hạn</td><td>Giá trị phân bổ theo ${t('eir', 'phương pháp lãi suất thực')}</td><td>FSA-08</td></tr>
<tr><td>Nợ thuê tài sản (bên đi thuê)</td><td>PV các khoản tiền thuê; ghi kèm ${t('rou', 'tài sản quyền sử dụng (right-of-use)')}</td><td>FSA-08</td></tr>
<tr><td>Thuế thu nhập hoãn lại phải trả</td><td>Chênh lệch tạm thời × thuế suất</td><td>FSA-09</td></tr>
<tr><td>Nợ phúc lợi sau nghỉ việc (lương hưu)</td><td>Nghĩa vụ trừ tài sản quỹ</td><td>FSA-08</td></tr>
<tr><td>${t('provision', 'Dự phòng phải trả (provisions)')}</td><td>Ước tính tốt nhất của nghĩa vụ (bảo hành, khôi phục môi trường, kiện tụng)</td><td>-</td></tr>
</tbody></table>
<div class="example"><div class="ex-h">Ví dụ 5.1 - Trái phiếu phát hành dưới mệnh giá</div>
<p>Công ty phát hành trái phiếu 5 năm, mệnh giá 1.000, coupon 5% trả hằng năm, khi lãi suất thị trường là 6%. Tính giá phát hành, chi phí lãi vay năm 1 và giá trị ghi sổ cuối năm 1.</p>
<details><summary>Xem lời giải</summary>
${keys([
  ['Xóa TVM', '[2ND] [FV]', '0'],
  ['Nhập dữ liệu', '5 [N] 6 [I/Y] 50 [PMT] 1000 [FV]', ''],
  ['Tính giá', '[CPT] [PV]', 'PV = -957.8764'],
])}
<p>Giá phát hành = <b>957,88</b>: công ty nhận 957,88 tiền mặt và ghi nợ 957,88 (không phải 1.000).<br>
Chi phí lãi vay năm 1 = 957,88 × 6% = <b>57,47</b>, lớn hơn coupon trả bằng tiền 50.<br>
Giá trị ghi sổ cuối năm 1 = 957,88 + 57,47 - 50 = <b>965,35</b>. Phần chiết khấu được "phân bổ dần" làm nợ tăng dần về 1.000 khi đáo hạn.</p></details></div>
<div class="example"><div class="ex-h">Ví dụ 5.2 - Thuê tài sản</div>
<p>Thuê thiết bị 3 năm, trả 100 cuối mỗi năm, lãi suất chiết khấu 5%. Bên đi thuê ghi gì khi bắt đầu thuê?</p>
<details><summary>Xem lời giải</summary><p>Nợ thuê = tài sản quyền sử dụng = 100 × [1 - 1,05<sup>-3</sup>]/0,05 = <b>272,32</b>. Bấm máy: 3 [N] 5 [I/Y] 100 [PMT] 0 [FV] [CPT] [PV]. Nợ phải trả và tài sản cùng tăng, tỷ lệ nợ tăng.</p></details></div>
<h4>Thuyết minh cần đọc</h4>
<ul>
<li>Lịch đáo hạn nợ theo từng năm (rủi ro tái cấp vốn), lãi suất, cố định hay thả nổi, đồng tiền.</li>
<li>${t('covenant', 'Điều khoản ràng buộc (covenants)')} và tài sản bảo đảm: vi phạm covenant có thể khiến nợ dài hạn phải xếp lại thành ngắn hạn.</li>
<li>Giá trị hợp lý của nợ so với giá trị ghi sổ; các nghĩa vụ tiềm tàng và cam kết.</li>
</ul>`,
    },
    {
      title: '6. Bảng cân đối quy mô chung (common-size)',
      minutes: 10,
      html: `
<p>${t('vcs', 'Bảng cân đối quy mô chung theo chiều dọc')} biểu diễn mỗi khoản mục theo <b>% tổng tài sản</b>. Nó cho thấy <b>cơ cấu tài sản và cơ cấu vốn</b>, so sánh được doanh nghiệp khác quy mô.</p>
<div class="example"><div class="ex-h">Ví dụ 6.1 - Nhà bán lẻ A và công ty phần mềm B</div>
<table class="plain"><thead><tr><th></th><th>A</th><th>% TTS</th><th>B</th><th>% TTS</th></tr></thead><tbody>
<tr><td>Tiền</td><td>50</td><td>5%</td><td>400</td><td>20%</td></tr>
<tr><td>Phải thu</td><td>100</td><td>10%</td><td>300</td><td>15%</td></tr>
<tr><td>Hàng tồn kho</td><td>250</td><td>25%</td><td>20</td><td>1%</td></tr>
<tr><td>Nhà xưởng, thiết bị</td><td>400</td><td>40%</td><td>80</td><td>4%</td></tr>
<tr><td>Lợi thế thương mại, vô hình</td><td>200</td><td>20%</td><td>1.200</td><td>60%</td></tr>
<tr><td><b>Tổng tài sản</b></td><td><b>1.000</b></td><td>100%</td><td><b>2.000</b></td><td>100%</td></tr>
<tr><td>Nợ ngắn hạn</td><td>250</td><td>25%</td><td>400</td><td>20%</td></tr>
<tr><td>trong đó vay ngắn hạn</td><td>70</td><td>7%</td><td>0</td><td>0%</td></tr>
<tr><td>Nợ vay dài hạn</td><td>350</td><td>35%</td><td>400</td><td>20%</td></tr>
<tr><td>Vốn chủ sở hữu</td><td>400</td><td>40%</td><td>1.200</td><td>60%</td></tr>
</tbody></table>
<p>Nợ ngắn hạn của A gồm phải trả người bán 180 và vay 70; của B gồm phải trả 100 và doanh thu chưa thực hiện 300.</p>
<details><summary>Xem nhận xét</summary>
<p>A thâm dụng tài sản hữu hình (tồn kho 25%, nhà xưởng 40%), dùng nhiều nợ (vốn chủ chỉ 40%). B gần như không có tài sản vật chất; 60% tài sản là vô hình và lợi thế thương mại, cho thấy B lớn lên nhờ <b>mua lại</b> công ty khác. Doanh thu chưa thực hiện lớn của B (khách trả trước thuê bao) là nợ "tốt": không phải trả bằng tiền mà bằng dịch vụ.</p></details></div>
<p class="tip">Common-size còn dùng theo hai cách khác: so sánh <b>qua thời gian</b> (một doanh nghiệp, nhiều năm) và <b>chéo ngành</b> (với trung bình ngành). Luôn hỏi: tỷ trọng thay đổi vì tử số hay vì tổng tài sản thay đổi?</p>`,
    },
    {
      title: '7. Tỷ số từ bảng cân đối: thanh khoản và khả năng thanh toán',
      minutes: 8,
      html: `
<h4>Thanh khoản (liquidity): trả được nợ ngắn hạn không?</h4>
<div class="formula">Current = ${frac('Tài sản ngắn hạn', 'Nợ ngắn hạn')} &nbsp;&nbsp; Quick = ${frac('Tiền + CK ngắn hạn + Phải thu', 'Nợ ngắn hạn')} &nbsp;&nbsp; Cash = ${frac('Tiền + CK ngắn hạn', 'Nợ ngắn hạn')}</div>
<h4>Khả năng thanh toán dài hạn (solvency): cấu trúc vốn có quá nhiều nợ không?</h4>
<div class="formula">Debt-to-assets = ${frac('Tổng nợ vay', 'Tổng tài sản')} &nbsp;&nbsp; Debt-to-capital = ${frac('Tổng nợ vay', 'Tổng nợ vay + Vốn chủ')} &nbsp;&nbsp; Debt-to-equity = ${frac('Tổng nợ vay', 'Vốn chủ')} &nbsp;&nbsp; ${t('levratio', 'Financial leverage')} = ${frac('Tổng tài sản bình quân', 'Vốn chủ bình quân')}</div>
<p>"Nợ vay" (debt) là các khoản <b>chịu lãi</b>: vay ngắn hạn, nợ dài hạn đến hạn, nợ dài hạn, thường cả nợ thuê. Không gồm phải trả người bán hay doanh thu chưa thực hiện.</p>
<table class="plain"><thead><tr><th>Tỷ số (dùng số cuối kỳ)</th><th>A</th><th>B</th></tr></thead><tbody>
<tr><td>Current ratio</td><td>400/250 = 1,60</td><td>720/400 = 1,80</td></tr>
<tr><td>Quick ratio</td><td>150/250 = 0,60</td><td>700/400 = 1,75</td></tr>
<tr><td>Cash ratio</td><td>50/250 = 0,20</td><td>400/400 = 1,00</td></tr>
<tr><td>Debt-to-assets</td><td>420/1.000 = 42,0%</td><td>400/2.000 = 20,0%</td></tr>
<tr><td>Debt-to-capital</td><td>420/820 = 51,2%</td><td>400/1.600 = 25,0%</td></tr>
<tr><td>Debt-to-equity</td><td>420/400 = 1,05</td><td>400/1.200 = 0,33</td></tr>
<tr><td>Financial leverage</td><td>1.000/400 = 2,50</td><td>2.000/1.200 = 1,67</td></tr>
</tbody></table>
<p class="warn"><b>Hai lưu ý:</b> (1) current ratio của A và B gần nhau, nhưng A dựa vào tồn kho, B dựa vào tiền: quick và cash ratio cho thấy B thanh khoản tốt hơn nhiều. (2) Nếu loại lợi thế thương mại và vô hình (1.200) khỏi vốn chủ, vốn chủ hữu hình của B gần như bằng 0. Tỷ số chỉ là điểm bắt đầu của câu hỏi.</p>`,
    },
    {
      title: '8. Tóm tắt và bẫy thường gặp',
      minutes: 4,
      html: `
<table class="plain"><thead><tr><th>Tình huống</th><th>Nhớ</th></tr></thead><tbody>
<tr><td>Vô hình tự tạo</td><td>Phần lớn ghi chi phí; IFRS vốn hóa chi phí phát triển đủ điều kiện</td></tr>
<tr><td>Vô hình mua về</td><td>IFRS: giá gốc hoặc đánh giá lại (cần thị trường hoạt động). US GAAP: chỉ giá gốc</td></tr>
<tr><td>Vô hình không xác định thời hạn</td><td>Không phân bổ; kiểm tra suy giảm hằng năm</td></tr>
<tr><td>Lợi thế thương mại</td><td>Giá mua - giá trị hợp lý tài sản thuần <b>xác định được</b> (không phải giá trị sổ sách)</td></tr>
<tr><td>Suy giảm lợi thế thương mại</td><td>IFRS: so với giá trị có thể thu hồi ở CGU. US GAAP: so với giá trị hợp lý đơn vị báo cáo, tối đa bằng lợi thế thương mại. Không hoàn nhập</td></tr>
<tr><td>Lỗ suy giảm</td><td>Giảm lợi nhuận, không ảnh hưởng dòng tiền</td></tr>
<tr><td>Chứng khoán nợ</td><td>Amortized cost: bỏ qua giá; FVOCI/AFS: chưa thực hiện vào OCI; FVPL/trading: vào lợi nhuận</td></tr>
<tr><td>Cổ phiếu đầu tư</td><td>US GAAP: giá trị hợp lý qua lợi nhuận. IFRS: FVPL hoặc chọn FVOCI không chuyển sang lợi nhuận</td></tr>
<tr><td>Trái phiếu phát hành dưới mệnh giá</td><td>Chi phí lãi vay &gt; coupon; giá trị ghi sổ tăng dần về mệnh giá</td></tr>
<tr><td>Tỷ số nợ</td><td>Chỉ tính nợ chịu lãi; quick ratio bỏ tồn kho và trả trước</td></tr>
</tbody></table>`,
    },
  ];

  const glossary = {
    bs: ['Balance sheet (statement of financial position)', 'Bảng cân đối kế toán', 'Tài sản, nợ phải trả và vốn chủ tại một thời điểm.'],
    hc: ['Historical cost', 'Giá gốc', 'Giá mua ban đầu, trừ khấu hao và suy giảm giá trị lũy kế.'],
    amortcost: ['Amortized cost', 'Giá trị phân bổ', 'Giá trị ban đầu điều chỉnh dần theo phương pháp lãi suất thực, trừ suy giảm.'],
    fv: ['Fair value', 'Giá trị hợp lý', 'Giá bán một tài sản hoặc chuyển giao một khoản nợ trong giao dịch thông thường tại ngày đo lường.'],
    intang: ['Intangible assets', 'Tài sản vô hình', 'Tài sản phi tiền tệ không có hình thái vật chất, ví dụ bằng sáng chế, thương hiệu.'],
    identifiable: ['Identifiable intangible', 'Tài sản vô hình xác định được', 'Tách riêng được hoặc phát sinh từ quyền hợp đồng, pháp lý.'],
    costmodel: ['Cost model', 'Mô hình giá gốc', 'Ghi theo giá gốc trừ phân bổ và suy giảm lũy kế.'],
    reval: ['Revaluation model', 'Mô hình đánh giá lại', 'Ghi theo giá trị hợp lý tại ngày đánh giá lại; chỉ IFRS cho phép.'],
    finite: ['Finite useful life', 'Thời gian sử dụng hữu hạn', 'Tài sản vô hình được phân bổ dần trong thời gian sử dụng.'],
    indefinite: ['Indefinite useful life', 'Thời gian sử dụng không xác định', 'Không có giới hạn thấy trước; không phân bổ, kiểm tra suy giảm hằng năm.'],
    goodwill: ['Goodwill', 'Lợi thế thương mại', 'Phần giá mua vượt giá trị hợp lý tài sản thuần xác định được trong hợp nhất kinh doanh.'],
    synergy: ['Synergies', 'Lợi ích cộng hưởng', 'Giá trị tăng thêm kỳ vọng khi kết hợp hai doanh nghiệp.'],
    internalgw: ['Internally generated goodwill', 'Lợi thế thương mại tự tạo', 'Giá trị do doanh nghiệp tự xây dựng; không được ghi nhận.'],
    bargain: ['Bargain purchase', 'Mua giá rẻ', 'Giá mua thấp hơn giá trị hợp lý tài sản thuần; chênh lệch ghi lãi ngay.'],
    impair: ['Impairment test', 'Kiểm tra suy giảm giá trị', 'So sánh giá trị ghi sổ với giá trị có thể thu hồi (IFRS) hoặc giá trị hợp lý (US GAAP).'],
    cgu: ['Cash-generating unit (CGU)', 'Đơn vị tạo tiền', 'Nhóm tài sản nhỏ nhất tạo dòng tiền vào độc lập; cấp kiểm tra suy giảm theo IFRS.'],
    ru: ['Reporting unit', 'Đơn vị báo cáo', 'Cấp kiểm tra suy giảm lợi thế thương mại theo US GAAP.'],
    fininst: ['Financial instrument', 'Công cụ tài chính', 'Hợp đồng tạo tài sản tài chính cho một bên và nợ tài chính hoặc công cụ vốn cho bên kia.'],
    fvoci: ['Fair value through OCI', 'Giá trị hợp lý qua OCI', 'Đo theo giá trị hợp lý, lãi lỗ chưa thực hiện vào thu nhập toàn diện khác.'],
    oci: ['Other comprehensive income', 'Thu nhập toàn diện khác', 'Lãi lỗ ghi thẳng vào vốn chủ, không qua lợi nhuận.'],
    fvpl: ['Fair value through profit or loss', 'Giá trị hợp lý qua lãi lỗ', 'Đo theo giá trị hợp lý, mọi thay đổi vào lợi nhuận.'],
    hedge: ['Hedge accounting', 'Kế toán phòng ngừa rủi ro', 'Cách ghi nhận cho phép khớp thời điểm lãi lỗ của công cụ phòng ngừa và khoản được phòng ngừa.'],
    fvh: ['Fair value hierarchy', 'Thứ bậc giá trị hợp lý', 'Cấp 1 giá niêm yết, Cấp 2 dữ liệu quan sát được, Cấp 3 dữ liệu không quan sát được.'],
    cpltd: ['Current portion of long-term debt', 'Nợ dài hạn đến hạn trả', 'Phần nợ dài hạn phải trả trong 12 tháng tới, xếp vào nợ ngắn hạn.'],
    eir: ['Effective interest method', 'Phương pháp lãi suất thực', 'Chi phí lãi = giá trị ghi sổ đầu kỳ × lãi suất thị trường lúc phát hành.'],
    rou: ['Right-of-use asset', 'Tài sản quyền sử dụng', 'Tài sản bên đi thuê ghi nhận cho quyền sử dụng tài sản thuê.'],
    provision: ['Provisions', 'Dự phòng phải trả', 'Nghĩa vụ chưa chắc chắn về thời điểm hoặc số tiền, ghi theo ước tính tốt nhất.'],
    covenant: ['Covenants', 'Điều khoản ràng buộc', 'Cam kết trong hợp đồng vay, ví dụ giới hạn tỷ lệ nợ; vi phạm có thể khiến nợ đến hạn ngay.'],
    vcs: ['Vertical common-size balance sheet', 'Bảng cân đối quy mô chung theo chiều dọc', 'Mỗi khoản mục biểu diễn theo % tổng tài sản.'],
    levratio: ['Financial leverage ratio', 'Hệ số đòn bẩy tài chính', 'Tổng tài sản bình quân chia vốn chủ bình quân.'],
  };

  const practice = [
    { q: 'Theo IFRS, chi phí quảng cáo để xây dựng một thương hiệu nội bộ mới được:', choices: ['Ghi chi phí khi phát sinh', 'Vốn hóa thành tài sản vô hình có thời gian sử dụng không xác định', 'Vốn hóa như chi phí phát triển nếu thương hiệu thành công'], answer: 0, explain: 'Thương hiệu tự tạo không được ghi nhận là tài sản; chi phí quảng cáo ghi chi phí. Chỉ thương hiệu mua riêng hoặc có được trong hợp nhất kinh doanh mới được ghi tài sản. Phương án "vốn hóa như chi phí phát triển" nhầm với điều kiện vốn hóa chi phí phát triển.' },
    { q: 'Theo US GAAP, tài sản vô hình mua riêng lẻ được đo lường sau ghi nhận ban đầu theo:', choices: ['Mô hình giá gốc hoặc mô hình đánh giá lại', 'Chỉ mô hình giá gốc', 'Giá trị hợp lý qua lợi nhuận'], answer: 1, explain: 'US GAAP chỉ cho phép mô hình giá gốc. Mô hình giá gốc hoặc đánh giá lại là lựa chọn của IFRS (đánh giá lại chỉ khi có thị trường hoạt động). Giá trị hợp lý qua lợi nhuận không áp dụng cho tài sản vô hình.' },
    { q: 'Công ty mua 100% một doanh nghiệp với giá 800. Giá trị sổ sách tài sản thuần của bên bị mua là 500; giá trị hợp lý nhà xưởng cao hơn sổ sách 60; bên bị mua có quan hệ khách hàng chưa ghi nhận, giá trị hợp lý 90. Lợi thế thương mại là:', choices: ['300', '240', '150'], answer: 2, explain: 'Tài sản thuần xác định được theo giá trị hợp lý = 500 + 60 + 90 = 650. Lợi thế thương mại = 800 - 650 = 150. Con số 300 lấy giá mua trừ giá trị sổ sách. Con số 240 quên ghi nhận riêng quan hệ khách hàng là tài sản vô hình xác định được.' },
    { q: 'Theo US GAAP, một đơn vị báo cáo có giá trị ghi sổ 1.200 (gồm lợi thế thương mại 200) và giá trị hợp lý 1.050. Lỗ suy giảm lợi thế thương mại là:', choices: ['150', '200', '0'], answer: 0, explain: 'Lỗ = giá trị ghi sổ - giá trị hợp lý = 150, không vượt quá lợi thế thương mại 200. Con số 200 xóa toàn bộ lợi thế thương mại. Con số 0 sai vì giá trị hợp lý thấp hơn giá trị ghi sổ nên có suy giảm.' },
    { q: 'Một thương hiệu mua về có thể gia hạn không giới hạn với chi phí nhỏ. Sau ghi nhận ban đầu, nó được:', choices: ['Phân bổ đường thẳng trong tối đa 40 năm', 'Không phân bổ, kiểm tra suy giảm giá trị ít nhất hằng năm', 'Đánh giá lại hằng năm theo giá trị hợp lý qua lợi nhuận'], answer: 1, explain: 'Tài sản vô hình có thời gian sử dụng không xác định không được phân bổ mà kiểm tra suy giảm hằng năm. Phân bổ đường thẳng áp dụng cho tài sản có thời gian hữu hạn (và không có mức trần 40 năm). Đánh giá lại theo giá trị hợp lý không phải cách đo tài sản vô hình.' },
    { q: 'Đầu năm, công ty mua trái phiếu mệnh giá 2.000 theo mệnh giá, coupon 4%; cuối năm giá trị hợp lý 2.060. Trái phiếu được phân loại FVOCI (IFRS). Ảnh hưởng đến lợi nhuận năm nay là:', choices: ['+140', '+60', '+80'], answer: 2, explain: 'Tiền lãi 2.000 × 4% = 80 vào lợi nhuận; lãi chưa thực hiện 60 vào OCI. Con số +140 là kết quả nếu phân loại FVPL (80 + 60). Con số +60 nhầm phần chưa thực hiện vào lợi nhuận và bỏ quên tiền lãi.' },
    { q: 'Theo US GAAP, khoản đầu tư 3% cổ phiếu của một công ty niêm yết (không có ảnh hưởng đáng kể) được đo lường:', choices: ['Giá trị hợp lý, thay đổi vào lợi nhuận', 'Giá trị hợp lý, thay đổi vào OCI', 'Giá gốc'], answer: 0, explain: 'US GAAP yêu cầu đầu tư cổ phiếu (không có ảnh hưởng đáng kể) đo theo giá trị hợp lý qua lợi nhuận. Lựa chọn FVOCI cho cổ phiếu chỉ có trong IFRS. AFS theo US GAAP nay chỉ dành cho chứng khoán nợ.' },
    { q: 'Công ty phát hành trái phiếu 5 năm, mệnh giá 10 triệu, coupon 4% trả hằng năm, khi lãi suất thị trường 5%. Chi phí lãi vay năm 1 gần nhất với:', choices: ['400.000', '478.353', '500.000'], answer: 1, explain: 'Giá phát hành = 9.567.052 (N = 5, I/Y = 5, PMT = 400.000, FV = 10.000.000). Chi phí lãi = 9.567.052 × 5% = 478.353. Con số 400.000 là coupon trả bằng tiền. Con số 500.000 lấy mệnh giá nhân lãi suất thị trường.' },
    { q: 'Tổng tài sản 2.000; nợ ngắn hạn 300 (trong đó vay ngắn hạn 100, còn lại là phải trả người bán); nợ vay dài hạn 700; vốn chủ 1.000. Tỷ lệ nợ trên vốn (debt-to-capital) gần nhất với:', choices: ['80,0%', '50,0%', '44,4%'], answer: 2, explain: 'Nợ vay = 100 + 700 = 800. Debt-to-capital = 800/(800 + 1.000) = 44,4%. Con số 80,0% là debt-to-equity (800/1.000). Con số 50,0% lấy tổng nợ phải trả 1.000 chia tổng tài sản, gộp cả phải trả người bán không chịu lãi.' },
    { q: 'Tiền 50, chứng khoán ngắn hạn 30, phải thu 120, hàng tồn kho 200, chi phí trả trước 20, nợ ngắn hạn 250. Quick ratio là:', choices: ['0,80', '1,68', '0,88'], answer: 0, explain: 'Quick = (50 + 30 + 120)/250 = 0,80. Con số 1,68 là current ratio (420/250). Con số 0,88 cộng cả chi phí trả trước, khoản không chuyển thành tiền để trả nợ.' },
    { q: "Theo IFRS, trong năm một công ty chi 200 cho giai đoạn nghiên cứu của một dự án. Một dự án khác đã ở giai đoạn phát triển và thỏa mọi điều kiện vốn hóa, với chi phí: nguyên vật liệu 90, nhân công trực tiếp 50, chi phí sản xuất chung phân bổ trực tiếp 20, chi phí quản lý chung 15. Số tiền được vốn hóa là:", choices: ["375", "175", "160"], answer: 2, explain: "Theo IFRS, chi phí nghiên cứu ghi chi phí; chi phí phát triển đủ điều kiện vốn hóa phần gắn trực tiếp với việc tạo tài sản: 90 + 50 + 20 = 160. Chi phí quản lý chung 15 không gắn trực tiếp nên ghi chi phí; lựa chọn 175 vốn hóa nhầm khoản này. Lựa chọn 375 vốn hóa cả chi phí nghiên cứu." },
    { q: "Khoản nào sau đây là tài sản vô hình có thể xác định được (identifiable)?", choices: ["Danh sách khách hàng có thể bán hoặc chuyển nhượng riêng", "Lợi thế thương mại phát sinh từ một thương vụ mua lại", "Đội ngũ nhân viên giàu kinh nghiệm của doanh nghiệp"], answer: 0, explain: "Tài sản vô hình xác định được nếu tách riêng được (bán, cho thuê, chuyển nhượng) hoặc phát sinh từ quyền hợp đồng, pháp lý; danh sách khách hàng chuyển nhượng được thỏa điều kiện này. Lợi thế thương mại không tách khỏi doanh nghiệp được. Đội ngũ nhân viên không do doanh nghiệp kiểm soát và không tách riêng được, nên không ghi nhận riêng." },
    { q: "Ngày 1/1 năm 1, công ty mua một bằng sáng chế giá 150, thời hạn pháp lý còn 15 năm, nhưng công ty ước tính chỉ thu được lợi ích trong 10 năm. Áp dụng phân bổ đường thẳng, giá trị ghi sổ cuối năm 2 là:", choices: ["130", "120", "135"], answer: 1, explain: "Tài sản vô hình có thời gian sử dụng hữu hạn được phân bổ theo thời gian sử dụng hữu ích, là thời gian ngắn hơn giữa thời hạn pháp lý và thời gian thu lợi ích: 150/10 = 15 mỗi năm; cuối năm 2 còn 150 - 30 = 120. Lựa chọn 130 phân bổ theo thời hạn pháp lý 15 năm. Lựa chọn 135 chỉ trừ phân bổ của một năm." },
    { q: "Theo IFRS, công ty chỉ được dùng mô hình đánh giá lại (revaluation model) cho một tài sản vô hình khi:", choices: ["Tài sản có thời gian sử dụng không xác định", "Công ty đồng thời niêm yết tại Mỹ", "Tồn tại thị trường hoạt động (active market) cho tài sản đó"], answer: 2, explain: "IFRS cho chọn mô hình giá gốc hoặc đánh giá lại, nhưng đánh giá lại tài sản vô hình chỉ dùng được khi có thị trường hoạt động để xác định giá trị hợp lý, điều này hiếm gặp. Thời gian sử dụng không xác định chỉ quyết định có phân bổ hay không. Niêm yết tại Mỹ không liên quan; US GAAP thậm chí không cho phép đánh giá lại." },
    { q: "Công ty P mua 100% công ty S. S có một thương hiệu tự xây dựng, chưa từng được ghi nhận trên bảng cân đối của S, giá trị hợp lý 80. Trên BCTC hợp nhất của P, thương hiệu này được:", choices: ["Ghi nhận riêng là tài sản vô hình theo giá trị hợp lý 80", "Không ghi nhận vì S chưa từng ghi nhận nó", "Gộp vào lợi thế thương mại"], answer: 0, explain: "Trong hợp nhất kinh doanh, tài sản vô hình xác định được của bên bị mua được ghi nhận riêng theo giá trị hợp lý tại ngày mua, kể cả khi bên bị mua chưa từng ghi nhận. Việc S không ghi nhận là do quy định với tài sản tự tạo, không áp dụng cho bên mua. Gộp vào lợi thế thương mại sai vì thương hiệu là tài sản xác định được, phải tách riêng." },
    { q: "Công ty mua 100% một doanh nghiệp với giá 450, trong khi giá trị hợp lý tài sản thuần có thể xác định được (đã kiểm tra lại) là 500. Bên mua xử lý phần chênh lệch 50 như thế nào?", choices: ["Ghi lợi thế thương mại âm 50 trên bảng cân đối", "Ghi nhận khoản lãi 50 vào lợi nhuận", "Không ghi nhận, giảm giá trị tài sản mua về theo giá mua"], answer: 1, explain: "Giá mua thấp hơn giá trị hợp lý tài sản thuần là giao dịch mua giá rẻ (bargain purchase): sau khi kiểm tra lại các giá trị, phần chênh lệch ghi ngay là lãi vào lợi nhuận. Không có khái niệm lợi thế thương mại âm trên bảng cân đối. Giảm giá trị tài sản để bỏ qua chênh lệch không phải cách xử lý theo chuẩn mực hiện hành." },
    { q: "Công ty mua 100% một doanh nghiệp với giá 1.000. Giá trị sổ sách tài sản thuần của bên bị mua là 700. Giá trị hợp lý hàng tồn kho cao hơn sổ sách 30; giá trị hợp lý khoản nợ vay cao hơn sổ sách 50; bên bị mua có bằng sáng chế chưa ghi nhận, giá trị hợp lý 120. Lợi thế thương mại là:", choices: ["300", "100", "200"], answer: 2, explain: "Tài sản thuần xác định được theo giá trị hợp lý = 700 + 30 - 50 + 120 = 800 (nợ phải trả cao hơn làm tài sản thuần giảm). Lợi thế thương mại = 1.000 - 800 = 200. Lựa chọn 300 lấy giá mua trừ giá trị sổ sách. Lựa chọn 100 cộng nhầm phần tăng giá trị khoản nợ vào tài sản thuần." },
    { q: "Theo IFRS, một đơn vị tạo tiền (CGU) có giá trị ghi sổ 1.500, trong đó lợi thế thương mại 120. Giá trị hợp lý trừ chi phí bán là 1.300, giá trị sử dụng là 1.340. Tổng lỗ suy giảm giá trị ghi nhận là:", choices: ["120", "160", "200"], answer: 1, explain: "Theo IFRS, giá trị có thể thu hồi = max(1.300; 1.340) = 1.340; lỗ = 1.500 - 1.340 = 160. Lỗ trừ hết 120 vào lợi thế thương mại, 40 còn lại phân bổ cho tài sản khác của CGU. Con số 120 giới hạn lỗ ở mức lợi thế thương mại như US GAAP. Con số 200 dùng giá trị hợp lý trừ chi phí bán thay vì giá trị cao hơn." },
    { q: "Theo US GAAP, một đơn vị báo cáo có giá trị ghi sổ 2.000, trong đó lợi thế thương mại 150. Giá trị hợp lý của đơn vị là 1.800. Lỗ suy giảm lợi thế thương mại là:", choices: ["150", "200", "0"], answer: 0, explain: "Theo US GAAP, lỗ = giá trị ghi sổ - giá trị hợp lý của đơn vị báo cáo = 2.000 - 1.800 = 200, nhưng tối đa bằng lợi thế thương mại, nên ghi 150. Lựa chọn 200 bỏ qua giới hạn này. Lựa chọn 0 sai vì giá trị hợp lý thấp hơn giá trị ghi sổ." },
    { q: "Năm trước, một công ty đã ghi lỗ suy giảm lợi thế thương mại. Năm nay, giá trị có thể thu hồi của đơn vị liên quan tăng mạnh. Phát biểu nào chính xác nhất?", choices: ["Được hoàn nhập theo IFRS nhưng không được theo US GAAP", "Không được hoàn nhập theo cả IFRS và US GAAP", "Được hoàn nhập theo cả hai chuẩn mực, tối đa bằng khoản lỗ đã ghi"], answer: 1, explain: "Cả IFRS và US GAAP đều cấm hoàn nhập lỗ suy giảm lợi thế thương mại. Lựa chọn \"được hoàn nhập theo IFRS\" nhầm với tài sản khác: IFRS cho hoàn nhập lỗ suy giảm của tài sản không phải lợi thế thương mại, nhưng lợi thế thương mại thì không." },
    { q: "Một công ty ghi lỗ suy giảm lợi thế thương mại lớn trong năm. Ảnh hưởng đến BCTC năm đó nhiều khả năng là:", choices: ["Lợi nhuận và dòng tiền từ hoạt động kinh doanh cùng giảm", "Tài sản giảm, lợi nhuận không đổi vì lỗ ghi vào OCI", "Lợi nhuận và tổng tài sản giảm, dòng tiền không bị ảnh hưởng"], answer: 2, explain: "Lỗ suy giảm là khoản không dùng tiền: giảm lợi nhuận và giá trị lợi thế thương mại, nhưng không ảnh hưởng dòng tiền. Lựa chọn \"dòng tiền giảm\" sai vì không có khoản tiền nào chi ra; theo phương pháp gián tiếp, lỗ suy giảm được cộng lại vào CFO. Lỗ suy giảm lợi thế thương mại ghi vào lợi nhuận, không vào OCI." },
    { q: "Một công ty có tổng vốn chủ sở hữu 900; tài sản của công ty gồm cả lợi thế thương mại 250 và tài sản vô hình khác 150. Giá trị sổ sách hữu hình (tangible book value) gần nhất với:", choices: ["500", "650", "750"], answer: 0, explain: "Giá trị sổ sách hữu hình = vốn chủ - lợi thế thương mại - tài sản vô hình khác = 900 - 250 - 150 = 500. Lựa chọn 650 chỉ loại lợi thế thương mại. Lựa chọn 750 chỉ loại tài sản vô hình khác." },
    { q: "Đầu năm, công ty mua trái phiếu mệnh giá 5.000 theo mệnh giá, coupon 6% trả hằng năm. Cuối năm, giá trị hợp lý của trái phiếu là 4.900. Trái phiếu được phân loại FVPL (IFRS). Ảnh hưởng đến lợi nhuận năm nay là:", choices: ["+300", "+200", "+400"], answer: 1, explain: "Với FVPL, cả tiền lãi và thay đổi giá trị hợp lý chưa thực hiện đều vào lợi nhuận: 5.000 × 6% - 100 = +200. Lựa chọn +300 chỉ tính tiền lãi, đúng với amortized cost hoặc FVOCI. Lựa chọn +400 cộng nhầm khoản giảm giá 100 thay vì trừ." },
    { q: "Trên bảng cân đối common-size, hàng tồn kho của một công ty tăng từ 20% lên 25% tổng tài sản, trong khi giá trị hàng tồn kho tuyệt đối không đổi. Giải thích hợp lý nhất là:", choices: ["Công ty mua thêm nhiều hàng tồn kho", "Tổng tài sản tăng", "Tổng tài sản giảm"], answer: 2, explain: "Tỷ trọng = tồn kho/tổng tài sản. Tử số không đổi mà tỷ trọng tăng thì mẫu số, tức tổng tài sản, phải giảm. \"Mua thêm hàng\" mâu thuẫn với dữ kiện tồn kho không đổi. \"Tổng tài sản tăng\" sẽ làm tỷ trọng giảm. Đây là lý do phải hỏi tỷ trọng thay đổi vì tử số hay vì mẫu số." },
    { q: "Theo IFRS 9, công ty mua cổ phiếu không nhằm mục đích kinh doanh giá 400 và chọn (không hủy ngang) đưa vào nhóm FVOCI. Cuối năm 1 giá trị hợp lý là 460. Năm 2 công ty bán với giá 480. Khoản lãi bán cổ phiếu ghi vào lợi nhuận năm 2 là:", choices: ["0", "80", "20"], answer: 0, explain: "Với cổ phiếu được chọn FVOCI theo IFRS 9, thay đổi giá trị hợp lý (kể cả khi bán) ghi vào OCI và không chuyển sang lợi nhuận (no recycling); chỉ cổ tức ghi vào lợi nhuận. Con số 80 là tổng lãi lũy kế, chỉ vào lợi nhuận nếu được chuyển như công cụ nợ FVOCI. Con số 20 là phần tăng giá trong năm 2, cũng ghi vào OCI chứ không vào lợi nhuận." },
    { q: "Một quỹ đầu tư nắm cổ phần ở một công ty chưa niêm yết và xác định giá trị hợp lý bằng mô hình chiết khấu dòng tiền nội bộ với dự báo của chính mình. Khoản đầu tư này thuộc cấp nào trong thứ bậc giá trị hợp lý?", choices: ["Cấp 1", "Cấp 2", "Cấp 3"], answer: 2, explain: "Dùng dữ liệu không quan sát được (dự báo nội bộ, mô hình riêng) là Cấp 3, cần nhiều xét đoán nhất. Cấp 1 dùng giá niêm yết của tài sản giống hệt trên thị trường hoạt động. Cấp 2 dùng dữ liệu quan sát được khác, như giá của tài sản tương tự hoặc lãi suất thị trường." },
    { q: "Công ty phát hành trái phiếu 4 năm, mệnh giá 1.000, coupon 7% trả hằng năm, khi lãi suất thị trường là 5%. Theo phương pháp lãi suất thực, giá trị ghi sổ của trái phiếu cuối năm 1 gần nhất với:", choices: ["1.070,92", "1.054,46", "1.087,37"], answer: 1, explain: "Giá phát hành = PV của coupon 70 và mệnh giá 1.000 chiết khấu 5% trong 4 năm = 1.070,92 (phát hành cao hơn mệnh giá). Chi phí lãi vay năm 1 = 1.070,92 × 5% = 53,55, nhỏ hơn coupon 70, nên giá trị ghi sổ giảm: 1.070,92 + 53,55 - 70 = 1.054,46. Con số 1.070,92 là giá phát hành, quên phân bổ phụ trội. Con số 1.087,37 cộng nhầm phần phân bổ thay vì trừ." },
    { q: "Bên đi thuê ký hợp đồng thuê thiết bị 5 năm, trả 200 vào cuối mỗi năm, lãi suất chiết khấu 6%. Nợ thuê ghi nhận ban đầu gần nhất với:", choices: ["842,47", "1.000,00", "747,26"], answer: 0, explain: "Nợ thuê = PV của 5 khoản 200 chiết khấu 6% = 200 × [1 - 1,06^-5]/0,06 = 842,47. Bấm máy: 5 [N] 6 [I/Y] 200 [PMT] 0 [FV] [CPT] [PV]. Con số 1.000 là tổng tiền thuê chưa chiết khấu. Con số 747,26 chiết khấu cả 1.000 như một khoản trả duy nhất vào năm 5." },
    { q: "Một công ty vi phạm điều khoản ràng buộc (covenant) của khoản vay dài hạn, khiến ngân hàng có quyền đòi trả nợ ngay. Nếu khoản vay phải xếp lại thành nợ ngắn hạn, ảnh hưởng nhiều khả năng là:", choices: ["Current ratio tăng vì tổng nợ không đổi", "Debt-to-equity giảm vì nợ dài hạn giảm", "Current ratio giảm, còn debt-to-equity không đổi"], answer: 2, explain: "Xếp lại nợ dài hạn thành ngắn hạn làm nợ ngắn hạn tăng nên current ratio giảm. Tổng nợ vay chịu lãi không đổi, nên debt-to-equity không đổi; lựa chọn \"debt-to-equity giảm\" quên rằng nợ chỉ chuyển nhóm chứ không mất đi. Đây là lý do cần đọc thuyết minh về covenant." },
    { q: "Tổng tài sản đầu năm 1.800, cuối năm 2.200; vốn chủ sở hữu đầu năm 800, cuối năm 1.000. Hệ số đòn bẩy tài chính (financial leverage) tính trên số bình quân gần nhất với:", choices: ["2,20", "2,22", "2,25"], answer: 1, explain: "Financial leverage = tổng tài sản bình quân/vốn chủ bình quân = 2.000/900 = 2,22. Con số 2,20 dùng số cuối kỳ (2.200/1.000). Con số 2,25 dùng số đầu kỳ (1.800/800)." },
  ];

  window.LESSONS['FSA-03'] = {
    moduleId: 'FSA-03',
    calculator: 'BA II Plus',
    warmup: [
      'Ôn FSA-02: theo IFRS, chi phí nghiên cứu và chi phí phát triển được xử lý khác nhau thế nào?',
      'Ôn FSA-02: so với ghi chi phí ngay, vốn hóa làm tổng tài sản cao hơn hay thấp hơn?',
      'Theo bạn, giá trị thương hiệu Coca-Cola có nằm trên bảng cân đối của Coca-Cola không?',
    ],
    sections,
    glossary,
    practice,
    widgets: {},
    slides: [],
    wrapup: [
      'Tính lại lợi thế thương mại và lỗ suy giảm theo IFRS và US GAAP trong ví dụ 3.1, 3.2 mà không xem lời giải.',
      'Lập bảng 3 nhóm chứng khoán nợ: giá trị trên bảng cân đối, lãi lỗ chưa thực hiện đi đâu.',
      'Giải thích vì sao current ratio của A và B gần nhau nhưng thanh khoản rất khác nhau.',
    ],
  };
}());
