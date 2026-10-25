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
<p>Tiếp theo: tab <b>Luyện tập</b> - 10 câu. Module sau: FSA-09 Analysis of Income Taxes.</p>`,
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
    { q: 'Theo IFRS 16, công ty thuê một tài sản 5 năm, trả 20.000 vào cuối mỗi năm, lãi suất chiết khấu 6%. Nợ thuê ban đầu gần nhất với:', choices: ['84.247', '100.000', '89.302'], answer: 0, explain: 'N = 5, I/Y = 6, PMT = 20.000, FV = 0, CPT PV = 84.247,28. B là tổng chưa chiết khấu. C tính như khoản trả đầu kỳ (annuity due) dù đề nói trả cuối năm.' },
    { q: 'Tiếp câu trên (IFRS, ROU khấu hao đường thẳng 5 năm). Tổng chi phí liên quan đến hợp đồng thuê trong năm 1 gần nhất với:', choices: ['20.000', '16.849', '21.904'], answer: 2, explain: 'Khấu hao = 84.247,28 / 5 = 16.849,46; lãi = 6% x 84.247,28 = 5.054,84; tổng = 21.904,29. A là chi phí thuê đường thẳng của operating lease theo US GAAP. B quên chi phí lãi.' },
    { q: 'Theo US GAAP, với một operating lease, các khoản tiền thuê bên đi thuê đã trả được trình bày:', choices: ['Phần lãi ở CFO, phần gốc ở CFF', 'Toàn bộ ở CFO', 'Toàn bộ ở CFF'], answer: 1, explain: 'Operating lease theo US GAAP: một khoản chi phí thuê đơn nhất và toàn bộ tiền ở CFO. A là cách làm của finance lease theo US GAAP.' },
    { q: 'Hai công ty giống hệt nhau thuê cùng một tài sản; công ty X theo IFRS 16, công ty Y theo US GAAP và hợp đồng được phân loại là operating lease. Năm đầu tiên, so với Y, X nhiều khả năng báo cáo:', choices: ['EBITDA cao hơn và CFO cao hơn', 'Lợi nhuận ròng cao hơn và CFO thấp hơn', 'Nợ phải trả thấp hơn'], answer: 0, explain: 'X ghi khấu hao và lãi (nằm dưới EBITDA) và đưa phần gốc sang CFF, nên EBITDA và CFO cao hơn. Lợi nhuận ròng năm đầu của X thấp hơn (chi phí giảm dần), nên B sai. Cả hai đều ghi nợ thuê như nhau (C sai).' },
    { q: 'Công ty thuê thiết bị văn phòng 2 năm, thời gian sử dụng của thiết bị 10 năm, không chuyển quyền sở hữu, không có quyền mua, PV tiền thuê nhỏ hơn nhiều so với giá trị hợp lý, thiết bị không chuyên biệt và không thuộc loại giá trị thấp. Theo US GAAP, hợp đồng được hạch toán là:', choices: ['Không ghi lên bảng cân đối, tiền thuê ghi chi phí khi trả', 'Finance lease', 'Operating lease, ghi nhận tài sản ROU và nợ thuê'], answer: 2, explain: 'Không thỏa tiêu chí nào của thuê tài chính nên là operating lease. Thời hạn 2 năm > 12 tháng nên không được miễn trừ: vẫn ghi ROU và nợ thuê (A sai).' },
    { q: 'Nhà sản xuất cho thuê máy (sales-type lease): tiền thuê 12.000 cuối mỗi năm trong 3 năm, lãi suất ngầm định 6%, giá trị thanh lý chưa bảo lãnh 3.000, giá trị ghi sổ của máy 30.000. Lợi nhuận gộp ghi nhận lúc bắt đầu thuê gần nhất với:', choices: ['2.076', '4.595', '6.000'], answer: 1, explain: 'Doanh thu = PV tiền thuê = 32.076,14. Giá vốn = 30.000 - PV thanh lý (3.000 / 1,06^3 = 2.518,86) = 27.481,14. Lợi nhuận gộp = 4.595,00. A trừ toàn bộ giá trị ghi sổ, quên giá trị thanh lý. C dùng số chưa chiết khấu (36.000 - 30.000).' },
    { q: 'Trong một kế hoạch đóng góp xác định (DC), phát biểu nào đúng?', choices: ['Chi phí của công ty bằng số tiền phải đóng góp trong kỳ, và nhân viên chịu rủi ro đầu tư', 'Công ty ghi nợ phúc lợi thuần bằng PBO trừ tài sản quỹ', 'Lãi lỗ actuarial được ghi vào OCI'], answer: 0, explain: 'Với DC, công ty chỉ cam kết đóng góp; không có PBO, không có lãi lỗ actuarial. B và C là đặc điểm của kế hoạch DB.' },
    { q: 'Kế hoạch DB: PBO đầu năm 12.000, tài sản quỹ đầu năm 10.500, chi phí dịch vụ 700, lãi suất chiết khấu 4%, lợi suất kỳ vọng trên tài sản 7%. Theo IFRS, chi phí phúc lợi ghi vào lãi lỗ là:', choices: ['445', '760', '1.180'], answer: 1, explain: 'IFRS: chi phí dịch vụ + lãi thuần = 700 + 4% x (12.000 - 10.500) = 760. A là US GAAP (700 + 480 - 735), dùng lợi suất kỳ vọng. C quên phần thu nhập lãi trên tài sản quỹ.' },
    { q: 'Thay đổi giả định nào sau đây làm GIẢM nghĩa vụ phúc lợi xác định (PBO)?', choices: ['Tăng tốc độ tăng lương dự kiến', 'Tăng tuổi thọ dự kiến của người nghỉ hưu', 'Tăng lãi suất chiết khấu'], answer: 2, explain: 'Lãi suất chiết khấu cao hơn làm PV của phúc lợi tương lai nhỏ hơn. Tăng lương nhanh hơn và sống lâu hơn đều làm phúc lợi tương lai lớn hơn nên PBO tăng.' },
    { q: 'Ngày 1/1/2027, công ty cấp 200.000 quyền chọn cổ phiếu cho nhân viên, giá trị hợp lý tại ngày cấp 4,50 mỗi quyền, thời gian hưởng quyền 3 năm. Cuối năm 2027 giá trị hợp lý quyền chọn tăng lên 6,00. Chi phí thù lao ghi nhận năm 2027 là:', choices: ['300.000', '400.000', '900.000'], answer: 0, explain: 'Chi phí = giá trị hợp lý tại ngày cấp, phân bổ qua thời gian hưởng quyền: 200.000 x 4,50 / 3 = 300.000. B dùng giá trị hợp lý cuối năm (chỉ làm vậy với khoản thanh toán bằng tiền như SARs). C ghi toàn bộ ngay năm đầu.' },
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
