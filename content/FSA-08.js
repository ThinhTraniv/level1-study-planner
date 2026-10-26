// Bài giảng FSA-08 - Topics in Long-Term Liabilities and Equity (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t, frac, keys, timeline } = window.CFAH;

  const sections = [
    {
      title: '1. Bức tranh lớn',
      minutes: 4,
      html: `
<p>Module này gom ba loại nghĩa vụ dài hạn <b>không giống khoản vay thông thường</b>, nhưng nhà phân tích thường coi chúng như nợ:</p>
<ol>
<li><b>Thuê tài sản (leases)</b>: bên đi thuê ghi nhận tài sản quyền sử dụng và nợ thuê; bên cho thuê ghi nhận khoản phải thu hoặc giữ tài sản. Ứng với LOS 1 (phần 2, 3, 4, 5).</li>
<li><b>Phúc lợi sau nghỉ việc</b>: kế hoạch đóng góp xác định và kế hoạch phúc lợi xác định (lương hưu). Ứng với LOS 2 (phần 6).</li>
<li><b>Thù lao bằng cổ phiếu</b>: cổ phiếu thưởng, quyền chọn cổ phiếu, quyền hưởng tăng giá. Ứng với LOS 2 (phần 7).</li>
</ol>
<p>LOS 3 (trình bày và thuyết minh) được lồng vào từng phần và tổng hợp ở phần 8.</p>
<div class="key">Câu hỏi chung cho cả ba: <b>nghĩa vụ này lớn bao nhiêu, đã nằm trên bảng cân đối chưa, và chi phí của nó chảy vào báo cáo kết quả kinh doanh, OCI, dòng tiền theo cách nào?</b></div>`,
    },
    {
      title: '2. Thuê tài sản: định nghĩa, lý do và phân loại',
      minutes: 7,
      html: `
<p>Một hợp đồng là ${t('lease', 'hợp đồng thuê (lease)')} khi nó chuyển cho bên đi thuê <b>quyền kiểm soát việc sử dụng một tài sản xác định</b> trong một khoảng thời gian, để đổi lấy khoản thanh toán. Bên đi thuê (lessee) được hưởng gần như toàn bộ lợi ích kinh tế từ việc dùng tài sản và quyết định cách sử dụng.</p>
<h4>Vì sao thuê thay vì mua?</h4>
<ul>
<li>Ít tiền trả trước hơn, thường lãi suất ngầm định thấp hơn vay để mua.</li>
<li>Giảm rủi ro lỗi thời và rủi ro giá trị thanh lý (rủi ro đó nằm ở bên cho thuê).</li>
<li>Linh hoạt: hợp đồng có thể thiết kế theo nhu cầu (thời hạn, quyền gia hạn, quyền mua).</li>
</ul>
<h4>Năm tiêu chí của thuê tài chính</h4>
<p>Hợp đồng là ${t('finlease', 'thuê tài chính (finance lease)')} nếu thỏa <b>bất kỳ một</b> trong năm tiêu chí sau; nếu không thì là ${t('oplease', 'thuê hoạt động (operating lease)')}:</p>
<ol>
<li>Quyền sở hữu chuyển cho bên đi thuê khi hết hạn.</li>
<li>Bên đi thuê có quyền mua tài sản và chắc chắn hợp lý sẽ thực hiện.</li>
<li>Thời hạn thuê chiếm phần lớn thời gian sử dụng kinh tế còn lại của tài sản.</li>
<li>PV của các khoản thanh toán (và giá trị thanh lý được bảo lãnh) bằng gần như toàn bộ giá trị hợp lý của tài sản.</li>
<li>Tài sản chuyên biệt đến mức chỉ bên đi thuê dùng được nếu không sửa đổi lớn.</li>
</ol>
<table class="plain"><thead><tr><th></th><th>IFRS 16</th><th>US GAAP (ASC 842)</th></tr></thead><tbody>
<tr><td>Bên đi thuê</td><td><b>Một mô hình</b>: mọi hợp đồng ghi như thuê tài chính</td><td><b>Hai mô hình</b>: finance lease và operating lease, cả hai đều lên bảng cân đối</td></tr>
<tr><td>Miễn trừ</td><td>Thuê ngắn hạn (≤ 12 tháng) và tài sản giá trị thấp</td><td>Chỉ thuê ngắn hạn (≤ 12 tháng)</td></tr>
<tr><td>Bên cho thuê</td><td>Finance lease hoặc operating lease</td><td>Sales-type, direct financing hoặc operating lease</td></tr>
</tbody></table>
<p class="tip">Hợp đồng được miễn trừ không ghi tài sản và nợ: khoản tiền thuê ghi thành chi phí thuê (thường đường thẳng) trong báo cáo kết quả kinh doanh, như cách cũ.</p>`,
    },
    {
      title: '3. Bên đi thuê theo IFRS 16',
      minutes: 10,
      html: `
<p>Ngày bắt đầu thuê, bên đi thuê ghi nhận:</p>
<div class="formula">${t('rou', 'Tài sản quyền sử dụng (ROU asset)')} = ${t('leaseliab', 'Nợ thuê (lease liability)')} = PV các khoản thanh toán tiền thuê</div>
<p>Chiết khấu bằng lãi suất ngầm định trong hợp đồng (nếu xác định được) hoặc lãi suất vay tăng thêm của bên đi thuê. Sau đó:</p>
<ul>
<li><b>Tài sản ROU</b>: khấu hao (thường đường thẳng) qua thời hạn thuê.</li>
<li><b>Nợ thuê</b>: mỗi khoản thanh toán tách thành <b>lãi</b> (= nợ đầu kỳ × lãi suất) và <b>gốc</b> (phần còn lại, làm giảm nợ).</li>
<li><b>Dòng tiền</b>: phần gốc ở CFF; phần lãi ở CFO hoặc CFF theo chính sách của công ty (giống lãi vay thông thường theo IFRS).</li>
</ul>
${timeline(4, [{ t: 0, label: 'PV = 35.459,51', up: true, cls: 'pv' }, { t: 1, label: '10.000' }, { t: 2, label: '10.000' }, { t: 3, label: '10.000' }, { t: 4, label: '10.000' }], 'Thuê máy 4 năm, trả 10.000 cuối mỗi năm, lãi suất ngầm định 5%.')}
<div class="example"><div class="ex-h">Ví dụ 3.1 - Thuê máy 4 năm</div>
<p>Công ty An Phát thuê một máy trong 4 năm (gần như toàn bộ thời gian sử dụng), trả 10.000 cuối mỗi năm, lãi suất ngầm định 5%. Lập bảng theo IFRS.</p>
<details><summary>Xem lời giải</summary>
${keys([
  ['Xóa TVM', '[2ND] [FV]', '0'],
  ['Nhập dữ liệu', '4 [N] 5 [I/Y] 10000 [PMT] 0 [FV]', ''],
  ['Tính PV', '[CPT] [PV]', 'PV = -35,459.51'],
])}
<p>Tài sản ROU = Nợ thuê = <b>35.459,51</b>. Khấu hao mỗi năm = 35.459,51 / 4 = <b>8.864,88</b>.</p>
<table class="plain"><thead><tr><th>Năm</th><th>Nợ đầu năm</th><th>Lãi (5%)</th><th>Gốc</th><th>Nợ cuối năm</th><th>Tổng chi phí (lãi + khấu hao)</th></tr></thead><tbody>
<tr><td>1</td><td>35.459,51</td><td>1.772,98</td><td>8.227,02</td><td>27.232,48</td><td>10.637,85</td></tr>
<tr><td>2</td><td>27.232,48</td><td>1.361,62</td><td>8.638,38</td><td>18.594,10</td><td>10.226,50</td></tr>
<tr><td>3</td><td>18.594,10</td><td>929,71</td><td>9.070,29</td><td>9.523,81</td><td>9.794,58</td></tr>
<tr><td>4</td><td>9.523,81</td><td>476,19</td><td>9.523,81</td><td>0</td><td>9.341,07</td></tr>
</tbody></table>
<p>Tổng chi phí 4 năm = 40.000, đúng bằng tổng tiền trả. Nhưng chi phí <b>giảm dần</b> (front-loaded) vì lãi giảm khi nợ giảm. Năm 1: CFF -8.227,02; lãi 1.772,98 ở CFO hoặc CFF.</p></details></div>
<p class="warn"><b>Bẫy:</b> theo IFRS 16, CFO của bên đi thuê <b>cao hơn</b> so với khi trả tiền thuê như chi phí, vì phần gốc chuyển sang CFF. EBITDA cũng cao hơn (khấu hao và lãi nằm dưới EBITDA). Nợ và tổng tài sản tăng, nên D/E tăng và vòng quay tài sản giảm.</p>`,
    },
    {
      title: '4. Bên đi thuê theo US GAAP: finance và operating',
      minutes: 9,
      html: `
<p>Theo US GAAP, cả hai loại đều ghi tài sản ROU và nợ thuê bằng PV các khoản thanh toán. Khác nhau ở <b>chi phí</b> và <b>dòng tiền</b>:</p>
<table class="plain"><thead><tr><th></th><th>Finance lease (US GAAP)</th><th>Operating lease (US GAAP)</th></tr></thead><tbody>
<tr><td>Bảng cân đối</td><td>ROU và nợ thuê</td><td>ROU và nợ thuê</td></tr>
<tr><td>Báo cáo KQKD</td><td>Khấu hao ROU + chi phí lãi (giảm dần)</td><td><b>Một khoản chi phí thuê đơn nhất</b>, đều mỗi năm (đường thẳng)</td></tr>
<tr><td>Dòng tiền</td><td>Lãi ở CFO, gốc ở CFF</td><td><b>Toàn bộ</b> ở CFO</td></tr>
<tr><td>Giá trị ROU sau đó</td><td>Giá gốc - khấu hao lũy kế</td><td>Bằng nợ thuê (nếu không có chi phí trực tiếp ban đầu, ưu đãi)</td></tr>
</tbody></table>
<h4>Operating lease: ROU được "cân" theo nợ thuê</h4>
<p>Chi phí thuê đường thẳng = 10.000/năm. Nợ thuê vẫn giảm theo bảng lãi và gốc như phần 3. Phần hao mòn ROU là số "cân bằng":</p>
<div class="formula">Hao mòn ROU = Chi phí thuê đường thẳng - Lãi trên nợ thuê</div>
<div class="example"><div class="ex-h">Ví dụ 4.1 - Máy của An Phát, nếu là operating lease theo US GAAP</div>
<details><summary>Xem lời giải</summary>
<p>Năm 1: chi phí thuê <b>10.000</b> (một dòng trong chi phí hoạt động). Lãi trên nợ = 1.772,98; hao mòn ROU = 10.000 - 1.772,98 = 8.227,02. ROU cuối năm 1 = 35.459,51 - 8.227,02 = <b>27.232,48</b>, đúng bằng nợ thuê.<br>
Dòng tiền: CFO -10.000, không có gì ở CFF.</p>
<p>So với finance lease (cùng số liệu): năm 1 chi phí 10.637,85 so với 10.000; tổng 4 năm như nhau (40.000).</p></details></div>
<table class="plain"><thead><tr><th>So sánh (bên đi thuê)</th><th>IFRS 16 và US GAAP finance</th><th>US GAAP operating</th></tr></thead><tbody>
<tr><td>EBITDA, lợi nhuận hoạt động</td><td>Cao hơn</td><td>Thấp hơn (chi phí thuê nằm trên EBIT)</td></tr>
<tr><td>Lợi nhuận ròng những năm đầu</td><td>Thấp hơn (chi phí giảm dần)</td><td>Cao hơn (đều)</td></tr>
<tr><td>CFO</td><td>Cao hơn</td><td>Thấp hơn</td></tr>
<tr><td>CFF</td><td>Thấp hơn (trả gốc)</td><td>Không ảnh hưởng</td></tr>
<tr><td>Tổng tiền</td><td colspan="2">Như nhau</td></tr>
</tbody></table>
<p class="tip">Cách nhớ: <b>operating lease theo US GAAP</b> giữ cách trình bày báo cáo KQKD và dòng tiền "giống thuê cũ" (chi phí đều, toàn bộ ở CFO), chỉ đưa tài sản và nợ lên bảng cân đối.</p>`,
    },
    {
      title: '5. Bên cho thuê',
      minutes: 7,
      html: `
<table class="plain"><thead><tr><th>Loại</th><th>Ghi nhận</th></tr></thead><tbody>
<tr><td><b>Finance lease</b> (IFRS) / <b>sales-type</b> (US GAAP)</td><td>Bỏ tài sản khỏi sổ, ghi ${t('netinv', 'khoản đầu tư thuần vào hợp đồng thuê (net investment in the lease)')} = PV khoản thanh toán + PV giá trị thanh lý chưa bảo lãnh. Nếu bên cho thuê là nhà sản xuất hoặc đại lý: ghi doanh thu, giá vốn và <b>lợi nhuận bán hàng ngay</b> lúc bắt đầu. Sau đó ghi thu nhập lãi.</td></tr>
<tr><td><b>Direct financing</b> (chỉ US GAAP)</td><td>Bên cho thuê chủ yếu là tổ chức tài chính; lợi nhuận bán hàng <b>không</b> ghi ngay mà phân bổ vào thu nhập lãi qua thời hạn thuê.</td></tr>
<tr><td><b>Operating lease</b></td><td>Giữ tài sản trên sổ và khấu hao; ghi doanh thu cho thuê (thường đường thẳng).</td></tr>
</tbody></table>
<div class="example"><div class="ex-h">Ví dụ 5.1 - Bên cho thuê máy của An Phát</div>
<p>Bên cho thuê là nhà sản xuất, giá trị ghi sổ của máy (trong tồn kho) 30.000. Tiền thuê 10.000 cuối mỗi năm trong 4 năm, lãi suất ngầm định 5%. Máy được trả lại khi hết hạn, giá trị thanh lý ước tính (chưa bảo lãnh) 2.000.</p>
<details><summary>Xem lời giải</summary>
<p><b>Nếu là finance lease (sales-type):</b><br>
PV khoản thanh toán = 35.459,51 → <b>doanh thu</b>.<br>
PV giá trị thanh lý = 2.000 / 1,05<sup>4</sup> = 1.645,40.<br>
Giá vốn = 30.000 - 1.645,40 = 28.354,60. Lợi nhuận gộp ngay năm 0 = 35.459,51 - 28.354,60 = <b>7.104,91</b>.<br>
Đầu tư thuần = 35.459,51 + 1.645,40 = <b>37.104,91</b>. Thu nhập lãi năm 1 = 5% × 37.104,91 = <b>1.855,25</b>; đầu tư thuần cuối năm 1 = 28.960,16. Cuối năm 4 còn đúng 2.000 (giá trị thanh lý).</p>
<p><b>Nếu là operating lease:</b> giữ máy trên sổ, khấu hao (30.000 - 2.000) / 4 = 7.000/năm; doanh thu cho thuê 10.000/năm; lợi nhuận <b>3.000</b>/năm.</p>
<p>Tổng lợi nhuận 4 năm: finance lease = 7.104,91 + tổng lãi 4.895,09 = 12.000; operating = 4 × 3.000 = 12.000. Lại chỉ là chuyện thời điểm.</p></details></div>
<p class="tip">Finance lease làm bên cho thuê ghi lợi nhuận <b>sớm</b> hơn và thay tài sản cố định bằng khoản phải thu. Operating lease giữ lợi nhuận đều và tài sản cố định trên sổ.</p>`,
    },
    {
      title: '6. Phúc lợi sau nghỉ việc: DC và DB',
      minutes: 9,
      html: `
<table class="plain"><thead><tr><th></th><th>${t('dc', 'Kế hoạch đóng góp xác định (defined contribution, DC)')}</th><th>${t('db', 'Kế hoạch phúc lợi xác định (defined benefit, DB)')}</th></tr></thead><tbody>
<tr><td>Công ty cam kết</td><td>Số tiền <b>đóng góp</b> mỗi kỳ</td><td>Mức <b>phúc lợi</b> trả cho nhân viên khi nghỉ hưu (theo lương, số năm làm việc)</td></tr>
<tr><td>Ai chịu rủi ro đầu tư</td><td>Nhân viên</td><td>Công ty</td></tr>
<tr><td>Chi phí</td><td>= Số phải đóng trong kỳ</td><td>Phức tạp, dựa trên ước tính actuarial</td></tr>
<tr><td>Bảng cân đối</td><td>Chỉ khoản đóng góp chưa trả</td><td>Tài sản hoặc nợ phúc lợi thuần (funded status)</td></tr>
</tbody></table>
<h4>Kế hoạch DB: hai con số lớn</h4>
<div class="formula">${t('funded', 'Tình trạng quỹ (funded status)')} = Giá trị hợp lý tài sản quỹ - PV nghĩa vụ phúc lợi (${t('dbo', 'DBO / PBO')})</div>
<p>Âm thì ghi <b>nợ phúc lợi thuần</b>, dương thì ghi tài sản thuần (IFRS giới hạn tài sản thuần ở mức trần). Nghĩa vụ tăng do ${t('svc', 'chi phí dịch vụ (service cost)')} và chi phí lãi (nghĩa vụ đầu kỳ × lãi suất chiết khấu), tăng giảm theo lãi lỗ actuarial, giảm khi trả phúc lợi.</p>
<table class="plain"><thead><tr><th>Cấu phần chi phí</th><th>IFRS</th><th>US GAAP</th></tr></thead><tbody>
<tr><td>Chi phí dịch vụ hiện tại</td><td>Lãi lỗ</td><td>Lãi lỗ (trong lợi nhuận hoạt động)</td></tr>
<tr><td>Chi phí dịch vụ quá khứ (sửa đổi kế hoạch)</td><td>Lãi lỗ ngay</td><td>OCI, sau đó phân bổ dần vào lãi lỗ</td></tr>
<tr><td>Lãi</td><td><b>Lãi thuần</b> = lãi suất chiết khấu × nợ thuần đầu kỳ, vào lãi lỗ</td><td>Chi phí lãi trên nghĩa vụ trừ <b>lợi suất kỳ vọng</b> trên tài sản quỹ, vào lãi lỗ</td></tr>
<tr><td>Đánh giá lại: lãi lỗ actuarial, chênh lệch lợi suất tài sản</td><td>OCI, <b>không bao giờ</b> chuyển vào lãi lỗ</td><td>OCI, có thể phân bổ dần vào lãi lỗ (phương pháp hành lang)</td></tr>
</tbody></table>
<div class="example"><div class="ex-h">Ví dụ 6.1</div>
<p>Đầu năm: PBO 10.000, tài sản quỹ 8.500. Trong năm: chi phí dịch vụ 600, lãi suất chiết khấu 5%, lợi suất thực tế trên tài sản 700 (US GAAP: lợi suất kỳ vọng 7%), lỗ actuarial làm PBO tăng 200, công ty đóng góp 900, trả phúc lợi 400. Không có chi phí dịch vụ quá khứ, không có khoản phân bổ từ OCI.</p>
<details><summary>Xem lời giải</summary>
<p>PBO cuối năm = 10.000 + 600 + 500 + 200 - 400 = <b>10.900</b>. Tài sản cuối năm = 8.500 + 700 + 900 - 400 = <b>9.700</b>. Nợ thuần giảm từ 1.500 xuống <b>1.200</b>.</p>
<p><b>IFRS:</b> lãi lỗ = 600 + 5% × 1.500 = <b>675</b>. OCI: lỗ actuarial -200; tài sản vượt lãi suất chiết khấu 700 - 5% × 8.500 = +275; OCI thuần +75. Tổng chi phí = 675 - 75 = 600.</p>
<p><b>US GAAP:</b> lãi lỗ = 600 + 500 - 7% × 8.500 = 600 + 500 - 595 = <b>505</b>. OCI: -200 + (700 - 595) = -95. Tổng chi phí = 505 + 95 = 600.</p>
<p>Kiểm tra: ${t('tppc', 'tổng chi phí phúc lợi kỳ (total periodic pension cost)')} = đóng góp - thay đổi funded status = 900 - (-1.200 - (-1.500)) = <b>600</b>, như nhau theo hai chuẩn mực. Chỉ cách chia giữa lãi lỗ và OCI khác nhau.</p></details></div>
<h4>Giả định ảnh hưởng thế nào?</h4>
<ul>
<li>Lãi suất chiết khấu <b>tăng</b> → PBO <b>giảm</b>, chi phí dịch vụ giảm.</li>
<li>Tốc độ tăng lương <b>tăng</b> → PBO và chi phí dịch vụ <b>tăng</b>. Tuổi thọ dài hơn → PBO tăng.</li>
<li>US GAAP: lợi suất kỳ vọng trên tài sản <b>tăng</b> → chi phí lương hưu trong lãi lỗ <b>giảm</b> (đây là chỗ dễ bị lợi dụng).</li>
</ul>`,
    },
    {
      title: '7. Thù lao bằng cổ phiếu (share-based compensation)',
      minutes: 7,
      html: `
<p>Trả thù lao bằng cổ phiếu gắn lợi ích của nhân viên với cổ đông và không tốn tiền mặt ngay, nhưng làm ${t('dilution', 'pha loãng (dilution)')} quyền sở hữu và vẫn là một chi phí thật.</p>
<div class="key">Nguyên tắc chung (IFRS và US GAAP): chi phí = <b>giá trị hợp lý tại ${t('grantdate', 'ngày cấp (grant date)')}</b>, phân bổ đều qua ${t('vesting', 'thời gian hưởng quyền (vesting / service period)')}.</div>
<table class="plain"><thead><tr><th>Hình thức</th><th>Giá trị hợp lý</th><th>Ghi chú</th></tr></thead><tbody>
<tr><td>Cổ phiếu thưởng (stock grant), cổ phiếu hạn chế chuyển nhượng (restricted stock), cổ phiếu theo hiệu quả (performance shares)</td><td>Giá thị trường cổ phiếu tại ngày cấp</td><td>Performance shares: số lượng phụ thuộc chỉ tiêu (ROE, EPS...)</td></tr>
<tr><td>${t('eso', 'Quyền chọn cổ phiếu cho nhân viên (stock options)')}</td><td>Mô hình định giá quyền chọn (Black-Scholes, nhị thức)</td><td>Không định lại sau ngày cấp (thanh toán bằng cổ phiếu)</td></tr>
<tr><td>${t('sar', 'Quyền hưởng tăng giá cổ phiếu (SARs)')}, cổ phiếu ảo (phantom shares)</td><td>Giá trị hợp lý, <b>định lại mỗi kỳ</b></td><td>Thanh toán bằng tiền → ghi nợ phải trả; nhân viên không sở hữu cổ phiếu, không pha loãng</td></tr>
</tbody></table>
<div class="example"><div class="ex-h">Ví dụ 7.1</div>
<p>Ngày 1/1, công ty cấp 100.000 quyền chọn cho nhân viên, giá trị hợp lý 6 mỗi quyền, thời gian hưởng quyền 4 năm.</p>
<details><summary>Xem lời giải</summary>
<p>Tổng chi phí = 100.000 × 6 = 600.000, ghi <b>150.000</b> mỗi năm trong 4 năm (ghi tăng chi phí, ghi tăng vốn góp bổ sung trong vốn chủ). Giá cổ phiếu sau đó lên hay xuống không làm thay đổi con số này.</p></details></div>
<p><b>Giả định định giá quyền chọn</b> (do ban lãnh đạo chọn, ảnh hưởng chi phí): biến động giá cao hơn, thời gian dự kiến dài hơn, lãi suất phi rủi ro cao hơn → giá trị quyền chọn cao hơn → chi phí cao hơn. Tỷ suất cổ tức cao hơn → giá trị quyền chọn thấp hơn.</p>
<p class="warn"><b>Bẫy:</b> chi phí thù lao bằng cổ phiếu là chi phí <b>không bằng tiền</b> (cộng lại khi tính CFO), nhưng vẫn là chi phí kinh tế thật. Khi công ty mua lại cổ phiếu để chống pha loãng, tiền thật đi ra ở CFF.</p>`,
    },
    {
      title: '8. Trình bày, thuyết minh và điều chỉnh của nhà phân tích',
      minutes: 4,
      html: `
<table class="plain"><thead><tr><th>Chủ đề</th><th>Thuyết minh chính</th><th>Nhà phân tích dùng để</th></tr></thead><tbody>
<tr><td>Thuê tài sản</td><td>Phân tích đáo hạn: các khoản thanh toán chưa chiết khấu theo từng năm, đối chiếu với nợ thuê; thời hạn còn lại và lãi suất chiết khấu bình quân; cấu phần chi phí thuê; hợp đồng ngắn hạn, khoản thanh toán biến đổi</td><td>Đưa nợ thuê vào tỷ số nợ; so sánh công ty IFRS và US GAAP (điều chỉnh EBITDA, CFO)</td></tr>
<tr><td>Phúc lợi DB</td><td>Đối chiếu PBO và tài sản quỹ đầu kỳ, cuối kỳ; funded status; giả định (lãi suất chiết khấu, tăng lương, US GAAP: lợi suất kỳ vọng); độ nhạy (IFRS); đóng góp dự kiến</td><td>Coi nợ phúc lợi thuần như nợ; so sánh giả định giữa các công ty; tách chi phí dịch vụ (hoạt động) khỏi phần lãi (tài chính)</td></tr>
<tr><td>Thù lao bằng cổ phiếu</td><td>Mô tả kế hoạch, số quyền chọn đang lưu hành và có thể thực hiện, giá thực hiện bình quân, giả định định giá, chi phí ghi nhận, chi phí chưa ghi nhận và thời gian phân bổ còn lại</td><td>Ước tính pha loãng tương lai; so sánh giả định; dự báo chi phí các năm tới</td></tr>
</tbody></table>
<p class="tip">Một công ty có lãi suất chiết khấu lương hưu cao hơn hẳn đối thủ, hoặc giả định biến động giá thấp bất thường khi định giá quyền chọn, đang làm lợi nhuận đẹp hơn. Đọc thuyết minh là cách duy nhất để phát hiện.</p>`,
    },
    {
      title: '9. Tóm tắt và bẫy thường gặp',
      minutes: 3,
      html: `
<table class="plain"><thead><tr><th>Tình huống</th><th>Nhớ</th></tr></thead><tbody>
<tr><td>Ghi nhận ban đầu (bên đi thuê)</td><td>ROU = nợ thuê = PV khoản thanh toán; trừ ngắn hạn (và giá trị thấp theo IFRS)</td></tr>
<tr><td>IFRS 16 / US GAAP finance</td><td>Khấu hao + lãi, chi phí giảm dần; gốc ở CFF</td></tr>
<tr><td>US GAAP operating</td><td>Chi phí thuê đều; toàn bộ tiền ở CFO; ROU = nợ thuê</td></tr>
<tr><td>Bên cho thuê sales-type / finance</td><td>Đầu tư thuần = PV thanh toán + PV thanh lý; lợi nhuận bán hàng ghi ngay</td></tr>
<tr><td>Direct financing</td><td>Chỉ US GAAP; lợi nhuận phân bổ vào thu nhập lãi</td></tr>
<tr><td>DC</td><td>Chi phí = đóng góp; nhân viên chịu rủi ro</td></tr>
<tr><td>DB</td><td>Funded status = tài sản quỹ - PBO; IFRS lãi thuần, đánh giá lại vào OCI; US GAAP lợi suất kỳ vọng</td></tr>
<tr><td>Giả định DB</td><td>Lãi suất chiết khấu tăng → PBO giảm; tăng lương nhanh → PBO tăng</td></tr>
<tr><td>Cổ phiếu, quyền chọn</td><td>Giá trị hợp lý ngày cấp, phân bổ qua thời gian hưởng quyền; SARs định lại mỗi kỳ</td></tr>
</tbody></table>
<p>Tiếp theo: tab <b>Luyện tập</b> - 10 câu (rút ngẫu nhiên từ ngân hàng 30 câu, mỗi lần làm một bộ khác). Module sau: FSA-09 Analysis of Income Taxes.</p>`,
    },
  ];

  const glossary = {
    lease: ['Lease', 'Hợp đồng thuê', 'Hợp đồng chuyển quyền kiểm soát việc sử dụng một tài sản xác định trong một thời gian để đổi lấy thanh toán.'],
    finlease: ['Finance lease', 'Thuê tài chính', 'Hợp đồng thỏa ít nhất một trong 5 tiêu chí; về bản chất như mua tài sản bằng tiền vay.'],
    oplease: ['Operating lease', 'Thuê hoạt động', 'Hợp đồng không thỏa tiêu chí thuê tài chính; US GAAP: chi phí thuê đều, tiền ở CFO.'],
    rou: ['Right-of-use (ROU) asset', 'Tài sản quyền sử dụng', 'Tài sản thể hiện quyền dùng tài sản thuê trong thời hạn thuê.'],
    leaseliab: ['Lease liability', 'Nợ thuê', 'PV các khoản thanh toán tiền thuê chưa trả.'],
    netinv: ['Net investment in the lease', 'Đầu tư thuần vào hợp đồng thuê', 'Khoản phải thu của bên cho thuê = PV khoản thanh toán + PV giá trị thanh lý chưa bảo lãnh.'],
    dc: ['Defined contribution plan', 'Kế hoạch đóng góp xác định', 'Công ty cam kết số tiền đóng góp; nhân viên chịu rủi ro đầu tư.'],
    db: ['Defined benefit plan', 'Kế hoạch phúc lợi xác định', 'Công ty cam kết mức phúc lợi trong tương lai; công ty chịu rủi ro.'],
    funded: ['Funded status', 'Tình trạng quỹ', 'Giá trị hợp lý tài sản quỹ trừ PV nghĩa vụ phúc lợi; âm là thiếu quỹ.'],
    dbo: ['Defined benefit obligation (DBO) / projected benefit obligation (PBO)', 'Nghĩa vụ phúc lợi xác định', 'PV phúc lợi đã tích lũy, tính theo mức lương dự kiến tương lai.'],
    svc: ['Service cost', 'Chi phí dịch vụ', 'Phần nghĩa vụ phúc lợi tăng thêm do nhân viên làm việc thêm một kỳ (hiện tại) hoặc do sửa đổi kế hoạch (quá khứ).'],
    tppc: ['Total periodic pension cost', 'Tổng chi phí phúc lợi kỳ', 'Đóng góp trừ thay đổi funded status; gồm phần trong lãi lỗ và phần trong OCI.'],
    dilution: ['Dilution', 'Pha loãng', 'Giảm tỷ lệ sở hữu và EPS của cổ đông hiện hữu khi phát hành thêm cổ phiếu.'],
    grantdate: ['Grant date', 'Ngày cấp', 'Ngày công ty và nhân viên thống nhất điều khoản thưởng cổ phiếu hoặc quyền chọn.'],
    vesting: ['Vesting (service) period', 'Thời gian hưởng quyền', 'Thời gian nhân viên phải làm việc trước khi được toàn quyền với cổ phiếu hoặc quyền chọn.'],
    eso: ['Employee stock options', 'Quyền chọn cổ phiếu cho nhân viên', 'Quyền mua cổ phiếu công ty ở giá thực hiện định trước; định giá bằng mô hình quyền chọn.'],
    sar: ['Stock appreciation rights (SARs)', 'Quyền hưởng tăng giá cổ phiếu', 'Nhân viên nhận tiền theo mức tăng giá cổ phiếu; ghi nợ phải trả, định lại mỗi kỳ.'],
  };

  const practice = [
    { q: 'Theo IFRS 16, công ty thuê một tài sản 5 năm, trả 20.000 vào cuối mỗi năm, lãi suất chiết khấu 6%. Nợ thuê ban đầu gần nhất với:', choices: ['84.247', '100.000', '89.302'], answer: 0, explain: 'N = 5, I/Y = 6, PMT = 20.000, FV = 0, CPT PV = 84.247,28. Lựa chọn 100.000 là tổng chưa chiết khấu. Lựa chọn 89.302 tính như khoản trả đầu kỳ (annuity due) dù đề nói trả cuối năm.' },
    { q: 'Theo IFRS 16, công ty thuê một tài sản 5 năm, trả 20.000 vào cuối mỗi năm, lãi suất chiết khấu 6%; tài sản quyền sử dụng (ROU) khấu hao đường thẳng 5 năm. Tổng chi phí liên quan đến hợp đồng thuê trong năm 1 gần nhất với:', choices: ['20.000', '16.849', '21.904'], answer: 2, explain: 'Khấu hao = 84.247,28 / 5 = 16.849,46; lãi = 6% x 84.247,28 = 5.054,84; tổng = 21.904,29. Lựa chọn 20.000 là chi phí thuê đường thẳng của operating lease theo US GAAP. Lựa chọn 16.849 quên chi phí lãi.' },
    { q: 'Theo US GAAP, với một operating lease, các khoản tiền thuê bên đi thuê đã trả được trình bày:', choices: ['Phần lãi ở CFO, phần gốc ở CFF', 'Toàn bộ ở CFO', 'Toàn bộ ở CFF'], answer: 1, explain: 'Operating lease theo US GAAP: một khoản chi phí thuê đơn nhất và toàn bộ tiền ở CFO. Phương án "phần lãi ở CFO, phần gốc ở CFF" là cách làm của finance lease theo US GAAP.' },
    { q: 'Hai công ty giống hệt nhau thuê cùng một tài sản; công ty X theo IFRS 16, công ty Y theo US GAAP và hợp đồng được phân loại là operating lease. Năm đầu tiên, so với Y, X nhiều khả năng báo cáo:', choices: ['EBITDA cao hơn và CFO cao hơn', 'Lợi nhuận ròng cao hơn và CFO thấp hơn', 'Nợ phải trả thấp hơn'], answer: 0, explain: 'X ghi khấu hao và lãi (nằm dưới EBITDA) và đưa phần gốc sang CFF, nên EBITDA và CFO cao hơn. Lợi nhuận ròng năm đầu của X thấp hơn (chi phí giảm dần), nên phương án "lợi nhuận ròng cao hơn" sai. Cả hai đều ghi nợ thuê như nhau (phương án "nợ phải trả thấp hơn" sai).' },
    { q: 'Công ty thuê thiết bị văn phòng 2 năm, thời gian sử dụng của thiết bị 10 năm, không chuyển quyền sở hữu, không có quyền mua, PV tiền thuê nhỏ hơn nhiều so với giá trị hợp lý, thiết bị không chuyên biệt và không thuộc loại giá trị thấp. Theo US GAAP, hợp đồng được hạch toán là:', choices: ['Không ghi lên bảng cân đối, tiền thuê ghi chi phí khi trả', 'Finance lease', 'Operating lease, ghi nhận tài sản ROU và nợ thuê'], answer: 2, explain: 'Không thỏa tiêu chí nào của thuê tài chính nên là operating lease. Thời hạn 2 năm > 12 tháng nên không được miễn trừ: vẫn ghi ROU và nợ thuê (phương án "không ghi lên bảng cân đối" sai).' },
    { q: 'Nhà sản xuất cho thuê máy (sales-type lease): tiền thuê 12.000 cuối mỗi năm trong 3 năm, lãi suất ngầm định 6%, giá trị thanh lý chưa bảo lãnh 3.000, giá trị ghi sổ của máy 30.000. Lợi nhuận gộp ghi nhận lúc bắt đầu thuê gần nhất với:', choices: ['2.076', '4.595', '6.000'], answer: 1, explain: 'Doanh thu = PV tiền thuê = 32.076,14. Giá vốn = 30.000 - PV thanh lý (3.000 / 1,06^3 = 2.518,86) = 27.481,14. Lợi nhuận gộp = 4.595,00. Lựa chọn 2.076 trừ toàn bộ giá trị ghi sổ, quên giá trị thanh lý. Lựa chọn 6.000 dùng số chưa chiết khấu (36.000 - 30.000).' },
    { q: 'Trong một kế hoạch đóng góp xác định (DC), phát biểu nào đúng?', choices: ['Chi phí của công ty bằng số tiền phải đóng góp trong kỳ, và nhân viên chịu rủi ro đầu tư', 'Công ty ghi nợ phúc lợi thuần bằng PBO trừ tài sản quỹ', 'Lãi lỗ actuarial được ghi vào OCI'], answer: 0, explain: 'Với DC, công ty chỉ cam kết đóng góp; không có PBO, không có lãi lỗ actuarial. Ghi nợ phúc lợi thuần (PBO trừ tài sản quỹ) và ghi lãi lỗ actuarial vào OCI là đặc điểm của kế hoạch DB.' },
    { q: 'Kế hoạch DB: PBO đầu năm 12.000, tài sản quỹ đầu năm 10.500, chi phí dịch vụ 700, lãi suất chiết khấu 4%, lợi suất kỳ vọng trên tài sản 7%. Theo IFRS, chi phí phúc lợi ghi vào lãi lỗ là:', choices: ['445', '760', '1.180'], answer: 1, explain: 'IFRS: chi phí dịch vụ + lãi thuần = 700 + 4% x (12.000 - 10.500) = 760. Lựa chọn 445 là US GAAP (700 + 480 - 735), dùng lợi suất kỳ vọng. Lựa chọn 1.180 quên phần thu nhập lãi trên tài sản quỹ.' },
    { q: 'Thay đổi giả định nào sau đây làm GIẢM nghĩa vụ phúc lợi xác định (PBO)?', choices: ['Tăng tốc độ tăng lương dự kiến', 'Tăng tuổi thọ dự kiến của người nghỉ hưu', 'Tăng lãi suất chiết khấu'], answer: 2, explain: 'Lãi suất chiết khấu cao hơn làm PV của phúc lợi tương lai nhỏ hơn. Tăng lương nhanh hơn và sống lâu hơn đều làm phúc lợi tương lai lớn hơn nên PBO tăng.' },
    { q: 'Ngày 1/1/2027, công ty cấp 200.000 quyền chọn cổ phiếu cho nhân viên, giá trị hợp lý tại ngày cấp 4,50 mỗi quyền, thời gian hưởng quyền 3 năm. Cuối năm 2027 giá trị hợp lý quyền chọn tăng lên 6,00. Chi phí thù lao ghi nhận năm 2027 là:', choices: ['300.000', '400.000', '900.000'], answer: 0, explain: 'Chi phí = giá trị hợp lý tại ngày cấp, phân bổ qua thời gian hưởng quyền: 200.000 x 4,50 / 3 = 300.000. Lựa chọn 400.000 dùng giá trị hợp lý cuối năm (chỉ làm vậy với khoản thanh toán bằng tiền như SARs). Lựa chọn 900.000 ghi toàn bộ ngay năm đầu.' },
    { q: "Theo IFRS 16, công ty thuê một tài sản 3 năm, trả 15.000 vào cuối mỗi năm, lãi suất chiết khấu 7%. Nợ thuê cuối năm 1 gần nhất với:", choices: ["24.364,74", "27.120,27", "30.000"], answer: 1, explain: "Nợ ban đầu = PV(3 khoản 15.000, 7%) = 39.364,74. Lãi năm 1 = 7% × 39.364,74 = 2.755,53; nợ cuối năm 1 = 39.364,74 + 2.755,53 - 15.000 = 27.120,27. Lựa chọn 24.364,74 trừ cả khoản thanh toán vào gốc, quên phần lãi. Lựa chọn 30.000 là tổng tiền thuê còn lại chưa chiết khấu." },
    { q: "Theo IFRS 16, công ty thuê xe tải 4 năm, trả 8.000 vào ĐẦU mỗi năm, lãi suất ngầm định 6%. Nợ thuê ghi nhận ban đầu (trước khi trả khoản đầu tiên) gần nhất với:", choices: ["27.721", "32.000", "29.384"], answer: 2, explain: "Thanh toán đầu kỳ là annuity due: PV = 8.000 × [1 - 1,06^-4] / 0,06 × 1,06 = 29.384. Lựa chọn 27.721 chiết khấu như thanh toán cuối kỳ. Lựa chọn 32.000 là tổng tiền thuê chưa chiết khấu." },
    { q: "Theo US GAAP, bên đi thuê có một operating lease 4 năm, trả 25.000 cuối mỗi năm, lãi suất chiết khấu 8%. Phần hao mòn tài sản ROU năm 1 gần nhất với:", choices: ["18.376", "20.701", "25.000"], answer: 0, explain: "Nợ thuê ban đầu = PV = 82.803; lãi năm 1 = 8% × 82.803 = 6.624. Với operating lease, chi phí thuê đường thẳng 25.000/năm; hao mòn ROU là số cân bằng = 25.000 - 6.624 = 18.376. Lựa chọn 20.701 là khấu hao đường thẳng của finance lease (82.803 / 4). Lựa chọn 25.000 là toàn bộ chi phí thuê đơn nhất, không phải phần hao mòn ROU." },
    { q: "Phát biểu nào chính xác nhất về cách trình bày dòng tiền của bên đi thuê?", choices: ["Theo IFRS 16, phần lãi có thể ở CFO hoặc CFF; phần gốc ở CFF", "Theo US GAAP, phần lãi của finance lease ở CFF", "Theo US GAAP, toàn bộ tiền thuê của operating lease ở CFF"], answer: 0, explain: "IFRS 16: phần gốc ở CFF, phần lãi ở CFO hoặc CFF theo chính sách (như lãi vay). US GAAP finance lease: lãi ở CFO (không phải CFF), gốc ở CFF. US GAAP operating lease: toàn bộ tiền thuê ở CFO, không phải CFF." },
    { q: "Công ty thuê 200 máy tính bảng giá trị thấp trong 3 năm. Phát biểu nào chính xác nhất về cách hạch toán của bên đi thuê?", choices: ["Cả IFRS và US GAAP đều cho phép ghi chi phí thuê, không ghi tài sản ROU", "IFRS cho phép ghi chi phí thuê, không ghi ROU; US GAAP vẫn ghi ROU và nợ thuê", "US GAAP cho phép ghi chi phí thuê; IFRS bắt buộc ghi ROU và nợ thuê"], answer: 1, explain: "IFRS 16 có hai miễn trừ: thuê ngắn hạn (≤ 12 tháng) và tài sản giá trị thấp. US GAAP chỉ miễn trừ thuê ngắn hạn, nên hợp đồng 3 năm vẫn phải ghi ROU và nợ thuê. Phát biểu \"cả hai đều cho phép\" bỏ qua khác biệt này; phát biểu còn lại đảo ngược hai chuẩn mực." },
    { q: "Theo US GAAP, đặc điểm nào sau đây nhiều khả năng khiến bên đi thuê phân loại hợp đồng là finance lease?", choices: ["Thời hạn thuê 2 năm cho một tài sản dùng được 15 năm", "Tài sản được trả lại bên cho thuê khi hết hạn, không có quyền mua", "Thời hạn thuê 9 năm cho một tài sản có thời gian sử dụng kinh tế còn lại 10 năm"], answer: 2, explain: "Thời hạn thuê chiếm phần lớn thời gian sử dụng kinh tế còn lại (9/10 năm) là một trong năm tiêu chí của thuê tài chính. Thuê 2 trên 15 năm là phần nhỏ thời gian sử dụng. Trả lại tài sản và không có quyền mua là đặc điểm của operating lease (trừ khi thỏa tiêu chí khác)." },
    { q: "Bên cho thuê ký operating lease cho một máy giá gốc 60.000, giá trị thanh lý 6.000, thời gian sử dụng 9 năm (khấu hao đường thẳng). Tiền thuê nhận 9.500 mỗi năm. Ảnh hưởng của hợp đồng lên lợi nhuận trước thuế hằng năm của bên cho thuê là:", choices: ["9.500", "3.500", "2.833"], answer: 1, explain: "Với operating lease, bên cho thuê giữ máy trên sổ và khấu hao (60.000 - 6.000) / 9 = 6.000; ghi doanh thu cho thuê 9.500. Lợi nhuận = 9.500 - 6.000 = 3.500. Lựa chọn 9.500 quên khấu hao. Lựa chọn 2.833 quên trừ giá trị thanh lý khi tính khấu hao." },
    { q: "Bên cho thuê ghi nhận một hợp đồng sales-type (US GAAP) với tiền thuê 15.000 cuối mỗi năm trong 5 năm, lãi suất ngầm định 8%, không có giá trị thanh lý. Thu nhập lãi năm 1 gần nhất với:", choices: ["6.000", "4.791", "3.022"], answer: 1, explain: "Đầu tư thuần ban đầu = PV(5 khoản 15.000, 8%) = 59.891. Thu nhập lãi năm 1 = 8% × 59.891 = 4.791. Lựa chọn 6.000 tính lãi trên tổng tiền thuê chưa chiết khấu. Lựa chọn 3.022 chia đều phần chênh lệch giữa tiền thuê và PV theo đường thẳng thay vì phương pháp lãi suất thực." },
    { q: "Theo US GAAP, một công ty cho thuê tài chính (không phải nhà sản xuất hay đại lý) mua thiết bị đúng bằng giá trị hợp lý rồi cho thuê; hợp đồng không thỏa tiêu chí sales-type nhưng có giá trị thanh lý được bên thứ ba bảo lãnh, nên thu hồi được gần như toàn bộ giá trị. Hợp đồng nhiều khả năng được phân loại là:", choices: ["Sales-type lease, ghi lợi nhuận bán hàng ngay khi bắt đầu thuê", "Operating lease, giữ tài sản trên sổ và khấu hao", "Direct financing lease, không ghi lợi nhuận bán hàng ngay mà ghi thu nhập lãi qua thời hạn thuê"], answer: 2, explain: "Direct financing lease chỉ có trong US GAAP, thường gặp ở bên cho thuê là tổ chức tài chính: không có lợi nhuận bán hàng ghi ngay; lợi nhuận phân bổ vào thu nhập lãi. Sales-type không phù hợp vì hợp đồng không thỏa tiêu chí sales-type và không có lợi nhuận bán hàng. Operating lease không phù hợp vì bên cho thuê thu hồi gần như toàn bộ giá trị tài sản qua tiền thuê và bảo lãnh." },
    { q: "So với phân loại operating lease, khi bên cho thuê là nhà sản xuất phân loại hợp đồng là finance lease (IFRS), bên cho thuê nhiều khả năng:", choices: ["Ghi nhận lợi nhuận sớm hơn và thay tài sản cố định bằng khoản đầu tư thuần vào hợp đồng thuê", "Giữ tài sản cố định trên sổ và ghi doanh thu cho thuê đều mỗi năm", "Ghi nhận tổng lợi nhuận trên toàn bộ thời hạn thuê cao hơn"], answer: 0, explain: "Finance lease (nhà sản xuất): bỏ tài sản khỏi sổ, ghi khoản đầu tư thuần (phải thu), ghi lợi nhuận bán hàng ngay khi bắt đầu thuê rồi thu nhập lãi giảm dần, nên lợi nhuận đến sớm hơn. Giữ tài sản và ghi doanh thu đều là đặc điểm của operating lease. Tổng lợi nhuận qua toàn bộ thời hạn như nhau; chỉ khác thời điểm." },
    { q: "Kế hoạch DB: PBO đầu năm 24.000, tài sản quỹ đầu năm 20.500. Trong năm: chi phí dịch vụ 1.100, lãi suất chiết khấu 5%, lợi suất thực tế trên tài sản quỹ 1.300, công ty đóng góp 1.000, trả phúc lợi 900, không có lãi lỗ actuarial. Nợ phúc lợi thuần cuối năm là:", choices: ["2.300", "2.600", "3.500"], answer: 2, explain: "PBO cuối năm = 24.000 + 1.100 + 5% × 24.000 - 900 = 25.400. Tài sản quỹ cuối năm = 20.500 + 1.300 + 1.000 - 900 = 21.900. Nợ thuần = 25.400 - 21.900 = 3.500. Lựa chọn 2.300 quên chi phí lãi (1.200). Lựa chọn 2.600 quên trừ phúc lợi đã trả khỏi tài sản quỹ." },
    { q: "Theo IFRS, tài sản quỹ phúc lợi DB đầu năm 8.000, lãi suất chiết khấu 5%, lợi suất thực tế trên tài sản quỹ 300. Trong năm có lãi actuarial (làm DBO giảm) 150. Tổng số đánh giá lại (remeasurement) ghi vào OCI là:", choices: ["50", "-100", "450"], answer: 0, explain: "IFRS: phần lợi suất tài sản quỹ vượt lãi suất chiết khấu = 300 - 5% × 8.000 = -100; cộng lãi actuarial 150: OCI = 50. Lựa chọn -100 quên lãi actuarial. Lựa chọn 450 đưa toàn bộ lợi suất thực tế vào OCI, trong khi phần tính theo lãi suất chiết khấu đã nằm trong lãi thuần ở lãi lỗ." },
    { q: "Theo US GAAP, kế hoạch DB có: chi phí dịch vụ 900, PBO đầu năm 15.000, lãi suất chiết khấu 4%, tài sản quỹ đầu năm 13.000, lợi suất kỳ vọng 6%, lợi suất thực tế 500, phân bổ chi phí dịch vụ quá khứ từ OCI 80. Chi phí lương hưu ghi vào lãi lỗ là:", choices: ["1.080", "800", "980"], answer: 1, explain: "US GAAP: chi phí dịch vụ + chi phí lãi - lợi suất KỲ VỌNG + phân bổ = 900 + 600 - 780 + 80 = 800. Lựa chọn 1.080 dùng lợi suất thực tế thay vì kỳ vọng. Lựa chọn 980 là cách tính IFRS (chi phí dịch vụ + lãi thuần trên nợ thuần), không áp dụng cho US GAAP." },
    { q: "Theo kế hoạch đóng góp xác định (DC), công ty phải đóng 5% tổng lương 2.400.000 của nhân viên trong năm. Đến cuối năm công ty mới chuyển 100.000 vào quỹ. Chi phí phúc lợi trong năm và nợ phải trả cuối năm là:", choices: ["Chi phí 100.000; không có nợ phải trả", "Chi phí 120.000; nợ phúc lợi thuần bằng PBO trừ tài sản quỹ", "Chi phí 120.000; nợ phải trả 20.000"], answer: 2, explain: "Kế hoạch DC: chi phí = số phải đóng trong kỳ = 5% × 2.400.000 = 120.000; phần chưa đóng 120.000 - 100.000 = 20.000 là nợ phải trả. Lựa chọn chi phí 100.000 ghi theo tiền đã trả (cơ sở tiền mặt). PBO và tài sản quỹ chỉ có ở kế hoạch DB." },
    { q: "Một công ty sửa đổi kế hoạch DB, làm tăng nghĩa vụ phúc lợi cho thời gian làm việc trước đây của nhân viên (chi phí dịch vụ quá khứ). Phát biểu nào chính xác nhất?", choices: ["IFRS ghi ngay toàn bộ vào lãi lỗ; US GAAP ghi vào OCI rồi phân bổ dần vào lãi lỗ", "IFRS ghi vào OCI và không bao giờ chuyển vào lãi lỗ; US GAAP ghi ngay vào lãi lỗ", "Cả IFRS và US GAAP đều ghi vào OCI rồi phân bổ dần vào lãi lỗ"], answer: 0, explain: "IFRS: chi phí dịch vụ quá khứ ghi ngay vào lãi lỗ. US GAAP: ghi vào OCI, sau đó phân bổ dần vào lãi lỗ. Phát biểu \"IFRS ghi vào OCI và không chuyển\" nhầm với cách IFRS xử lý phần đánh giá lại (lãi lỗ actuarial). Phát biểu \"cả hai đều ghi vào OCI\" chỉ đúng với US GAAP." },
    { q: "Một công ty theo US GAAP nâng giả định lợi suất kỳ vọng trên tài sản quỹ lương hưu từ 6% lên 8%. Các yếu tố khác không đổi, thay đổi này nhiều khả năng:", choices: ["Làm giảm PBO", "Làm giảm chi phí lương hưu ghi vào lãi lỗ, không ảnh hưởng PBO", "Làm tăng chi phí lương hưu ghi vào lãi lỗ"], answer: 1, explain: "Theo US GAAP, lợi suất kỳ vọng được trừ khi tính chi phí lương hưu trong lãi lỗ, nên giả định cao hơn làm chi phí thấp hơn và lợi nhuận cao hơn. PBO phụ thuộc lãi suất chiết khấu, tăng lương, tuổi thọ, không phụ thuộc lợi suất kỳ vọng trên tài sản. Theo IFRS giả định này không tồn tại (lãi thuần dùng lãi suất chiết khấu)." },
    { q: "Ngày 1/1, công ty cấp 50.000 cổ phiếu hạn chế chuyển nhượng (restricted stock) cho nhân viên, giá thị trường tại ngày cấp 28, thời gian hưởng quyền 4 năm. Cuối năm giá cổ phiếu là 32. Chi phí thù lao ghi nhận năm đầu là:", choices: ["400.000", "1.400.000", "350.000"], answer: 2, explain: "Chi phí = giá trị hợp lý tại ngày cấp, phân bổ đều qua thời gian hưởng quyền: 50.000 × 28 / 4 = 350.000. Lựa chọn 400.000 dùng giá cuối năm, nhưng cổ phiếu thưởng không định giá lại sau ngày cấp. Lựa chọn 1.400.000 ghi toàn bộ ngay năm đầu, quên phân bổ qua thời gian hưởng quyền." },
    { q: "Ngày 1/1 năm 1, công ty cấp 20.000 quyền hưởng tăng giá cổ phiếu (SARs) thanh toán bằng tiền, thời gian hưởng quyền 2 năm. Giá trị hợp lý mỗi SAR là 5 cuối năm 1 và 7 cuối năm 2. Chi phí thù lao ghi nhận năm 2 là:", choices: ["70.000", "90.000", "140.000"], answer: 1, explain: "SARs thanh toán bằng tiền là nợ phải trả, định lại theo giá trị hợp lý mỗi kỳ. Lũy kế cuối năm 1 = 20.000 × 5 × 1/2 = 50.000; lũy kế cuối năm 2 = 20.000 × 7 × 2/2 = 140.000. Chi phí năm 2 = 140.000 - 50.000 = 90.000. Lựa chọn 70.000 chỉ lấy một nửa giá trị mới, bỏ qua phần điều chỉnh cho năm 1. Lựa chọn 140.000 là tổng lũy kế, không phải chi phí riêng năm 2." },
    { q: "Khi định giá quyền chọn cổ phiếu cho nhân viên bằng mô hình Black-Scholes, thay đổi giả định nào sau đây làm GIẢM chi phí thù lao ghi nhận?", choices: ["Tăng biến động giá dự kiến của cổ phiếu", "Kéo dài thời gian dự kiến nắm giữ quyền chọn", "Tăng tỷ suất cổ tức dự kiến"], answer: 2, explain: "Tỷ suất cổ tức cao hơn làm giá trị quyền chọn mua thấp hơn (cổ tức làm giảm giá cổ phiếu, người giữ quyền chọn không nhận cổ tức), nên chi phí thấp hơn. Biến động giá cao hơn và thời gian dự kiến dài hơn đều làm giá trị quyền chọn và chi phí cao hơn." },
    { q: "Một công ty có nợ vay 3.000, nợ phúc lợi DB thuần (kế hoạch thiếu quỹ) 600 và vốn chủ 6.000. Nhà phân tích coi nợ phúc lợi thuần như một khoản nợ. Tỷ số nợ trên vốn chủ sau điều chỉnh là:", choices: ["0,60", "0,50", "0,67"], answer: 0, explain: "D/E điều chỉnh = (3.000 + 600) / 6.000 = 0,60. Lựa chọn 0,50 là tỷ số trước điều chỉnh. Lựa chọn 0,67 trừ thêm nợ phúc lợi khỏi vốn chủ, tính trùng vì funded status đã được ghi trên bảng cân đối." },
  ];

  window.LESSONS['FSA-08'] = {
    moduleId: 'FSA-08',
    calculator: 'BA II Plus',
    warmup: [
      'Ôn FSA-07: chi phí khấu hao ảnh hưởng thế nào đến CFO theo phương pháp gián tiếp?',
      'Bấm máy: PV của 4 khoản 10.000 trả cuối mỗi năm, lãi suất 5%, bằng bao nhiêu?',
      'Theo bạn, công ty đi thuê 100 cửa hàng trong 10 năm có thực sự "không có nợ" không?',
    ],
    sections,
    glossary,
    practice,
    widgets: {},
    slides: [],
    wrapup: [
      'Vẽ bảng so sánh IFRS 16, US GAAP finance và US GAAP operating: chi phí, CFO, CFF.',
      'Viết công thức funded status và kể 3 giả định ảnh hưởng đến PBO cùng chiều tác động.',
      'Giải thích vì sao chi phí quyền chọn cổ phiếu không đổi khi giá cổ phiếu biến động sau ngày cấp.',
    ],
  };
}());
