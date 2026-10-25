// Bài giảng PC-04 - Basics of Portfolio Planning and Construction (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t, frac } = window.CFAH;

  const sections = [
    {
      title: '1. Bức tranh lớn',
      minutes: 8,
      html: `
<p>Ở PC-03 bạn đã thấy quy trình quản lý danh mục gồm 3 bước: <b>lập kế hoạch (planning)</b>, <b>thực hiện (execution)</b> và <b>phản hồi (feedback)</b>. Module này đi sâu vào bước đầu tiên, và cũng là bước quan trọng nhất: hiểu khách hàng rồi viết ra "luật chơi" cho danh mục.</p>
<div class="key">Sản phẩm trung tâm của bước lập kế hoạch là ${t('ips', 'bản chính sách đầu tư (IPS)')}: văn bản ghi rõ khách hàng muốn đạt gì (<b>mục tiêu lợi suất và rủi ro</b>), bị giới hạn bởi điều gì (<b>các ràng buộc</b>), và danh mục sẽ được xây dựng, theo dõi ra sao. Từ IPS mới suy ra ${t('saa', 'phân bổ tài sản chiến lược')}, rồi mới đến chọn chứng khoán.</div>
<p>Thứ tự học của module, ứng với 8 LOS:</p>
<ol>
  <li>Vì sao cần IPS viết thành văn bản, và IPS gồm những phần nào. LOS 1, 2.</li>
  <li>Mục tiêu lợi suất và rủi ro; phân biệt <b>mức sẵn lòng</b> và <b>khả năng</b> chịu rủi ro. LOS 3, 4.</li>
  <li>Năm ràng buộc: thanh khoản, thời hạn, thuế, pháp lý và hoàn cảnh riêng. LOS 5.</li>
  <li>Xác định nhóm tài sản, nguyên tắc xây dựng danh mục và vai trò của phân bổ tài sản. LOS 6, 7.</li>
  <li>Đưa yếu tố ESG vào lập kế hoạch và xây dựng danh mục. LOS 8.</li>
</ol>
<p class="tip"><b>Cách nhớ khung IPS:</b> "RR TTLLU" - <b>R</b>eturn, <b>R</b>isk (2 mục tiêu) và <b>T</b>ime horizon, <b>T</b>ax, <b>L</b>iquidity, <b>L</b>egal and regulatory, <b>U</b>nique circumstances (5 ràng buộc). Đề thi thường hỏi: một chi tiết của khách hàng thuộc mục tiêu hay ràng buộc nào.</p>`,
    },
    {
      title: '2. IPS: vì sao cần viết ra và gồm những phần nào',
      minutes: 14,
      html: `
<h4>Vì sao phải có IPS bằng văn bản (LOS 1)</h4>
<ul>
  <li><b>Buộc hai bên hiểu nhau:</b> khi phải viết ra, khách hàng và nhà quản lý phải nói rõ mục tiêu, khẩu vị rủi ro, nhu cầu rút tiền. Nhiều hiểu lầm lộ ra ngay ở bước này.</li>
  <li><b>Kỷ luật khi thị trường biến động:</b> lúc thị trường giảm mạnh, cả hai bên đều dễ hành động theo cảm xúc. IPS là "bản cam kết" đã thống nhất lúc bình tĩnh.</li>
  <li><b>Tính liên tục:</b> nếu đổi nhà quản lý, người mới đọc IPS là biết phải làm gì, không phải bắt đầu lại.</li>
  <li><b>Cơ sở đánh giá:</b> IPS ghi ${t('benchmark', 'chuẩn so sánh (benchmark)')} và cách đo kết quả, nên có thể đánh giá nhà quản lý một cách khách quan.</li>
</ul>
<p class="warn"><b>Bẫy:</b> IPS <b>không bảo đảm</b> đạt được lợi suất mục tiêu, và cũng không phải là danh sách cổ phiếu cụ thể. Nó là khung chính sách, được xem xét lại định kỳ (thường mỗi năm) hoặc khi hoàn cảnh khách hàng thay đổi lớn (kết hôn, nghỉ hưu, thừa kế...).</p>

<h4>Các thành phần chính của IPS (LOS 2)</h4>
<table class="plain"><thead><tr><th>Thành phần</th><th>Nội dung</th></tr></thead><tbody>
<tr><td>Giới thiệu (introduction)</td><td>Mô tả khách hàng là ai</td></tr>
<tr><td>Mục đích (statement of purpose)</td><td>IPS này nhằm làm gì</td></tr>
<tr><td>Trách nhiệm (duties and responsibilities)</td><td>Ai làm gì: khách hàng, nhà quản lý, bên lưu ký</td></tr>
<tr><td>Thủ tục (procedures)</td><td>Cách cập nhật IPS và xử lý tình huống phát sinh</td></tr>
<tr><td><b>Mục tiêu đầu tư</b></td><td>Lợi suất cần đạt và mức rủi ro chấp nhận được</td></tr>
<tr><td><b>Ràng buộc đầu tư</b></td><td>Thanh khoản, thời hạn, thuế, pháp lý, hoàn cảnh riêng</td></tr>
<tr><td>Hướng dẫn đầu tư (investment guidelines)</td><td>Cách thực hiện: có dùng đòn bẩy, phái sinh không, loại tài sản bị loại trừ</td></tr>
<tr><td>Đánh giá và báo cáo (evaluation and review)</td><td>Benchmark, tần suất báo cáo</td></tr>
<tr><td>Phụ lục (appendices)</td><td>Phân bổ tài sản chiến lược, chính sách ${t('rebal', 'tái cân bằng')}</td></tr>
</tbody></table>
<p class="tip">Trọng tâm của đề thi là hai phần in đậm: <b>mục tiêu</b> và <b>ràng buộc</b>. Phần phụ lục thường chứa tỷ trọng mục tiêu của từng nhóm tài sản, ví dụ cổ phiếu 60% ± 5%.</p>`,
    },
    {
      title: '3. Mục tiêu lợi suất',
      minutes: 18,
      html: `
<p>${t('returnobj', 'Mục tiêu lợi suất (return objective)')} có thể nêu theo hai cách:</p>
<ul>
  <li><b>Tuyệt đối (absolute):</b> ví dụ "đạt 7%/năm" hoặc "lợi suất thực 3%".</li>
  <li><b>Tương đối (relative):</b> so với một benchmark, ví dụ "vượt chỉ số MSCI ACWI 1%/năm" hoặc ngân hàng muốn "cao hơn chi phí huy động".</li>
</ul>
<p>Mục tiêu phải <b>nhất quán với rủi ro</b>: muốn lợi suất cao thì phải chấp nhận rủi ro cao. Nhà tư vấn cần phân biệt <b>lợi suất mong muốn</b> (khách hàng "thích" đạt) và <b>lợi suất cần thiết</b> (bắt buộc đạt để đáp ứng chi tiêu). Nếu khách hàng kỳ vọng phi thực tế, việc của nhà tư vấn là giải thích và điều chỉnh kỳ vọng.</p>

<h4>Tính lợi suất cần thiết</h4>
<p>Cách làm thường gặp: lấy nhu cầu chi tiêu chia cho giá trị danh mục, rồi điều chỉnh lạm phát (để giữ sức mua) và phí.</p>
<div class="formula">Cộng (xấp xỉ): r = ${frac('Chi tiêu', 'Danh mục')} + lạm phát &nbsp;&nbsp;&nbsp; Nhân (chính xác hơn): r = (1 + ${frac('Chi tiêu', 'Danh mục')}) × (1 + lạm phát) - 1</div>

<div class="example"><div class="ex-h">Ví dụ 3.1 - Bà Lan nghỉ hưu</div>
<p>Bà Lan 60 tuổi, danh mục 2.000.000 USD, cần rút 90.000 USD mỗi năm để sinh hoạt. Lạm phát dự kiến 3%. Bà muốn giữ nguyên giá trị thực của danh mục. Lợi suất cần thiết là bao nhiêu?</p>
<details><summary>Xem lời giải</summary>
<p>Tỷ lệ chi tiêu = 90.000 / 2.000.000 = 4,5%.<br>
Cách cộng: 4,5% + 3% = <b>7,5%</b>.<br>
Cách nhân: 1,045 × 1,03 - 1 = <b>7,635%</b>.</p>
<p>Đề thi thường chấp nhận cả hai; nếu đề hỏi "multiplicative" thì dùng cách nhân. Chú ý đọc kỹ đề: chi tiêu tính trên giá trị danh mục <b>sau</b> khi trừ khoản rút đầu tiên hay không.</p></details></div>

<h4>Lợi suất trước thuế và sau thuế</h4>
<div class="formula">r<sub>trước thuế</sub> = ${frac('r<sub>sau thuế</sub>', '1 - thuế suất')}</div>
<div class="example"><div class="ex-h">Ví dụ 3.2</div>
<p>Khách hàng cần lợi suất sau thuế 6%, thuế suất 30% áp lên toàn bộ lợi suất. Lợi suất trước thuế cần đạt?</p>
<details><summary>Xem lời giải</summary><p>6% / (1 - 0,30) = <b>8,57%</b>. Đáp án bẫy là 6% × 1,30 = 7,8%: nhân thêm thuế suất là sai.</p></details></div>

<h4>Thử ngay: lợi suất cần thiết</h4>
<div class="widget" data-widget="reqReturn"></div>`,
    },
    {
      title: '4. Mục tiêu rủi ro: sẵn lòng và khả năng chịu rủi ro',
      minutes: 20,
      html: `
<p>${t('riskobj', 'Mục tiêu rủi ro (risk objective)')} cũng có dạng tuyệt đối hoặc tương đối:</p>
<ul>
  <li><b>Tuyệt đối:</b> "độ lệch chuẩn không quá 12%", "xác suất lỗ hơn 10% trong một năm không quá 5%" (chính là ý tưởng ${t('shortfall', 'rủi ro thiếu hụt (shortfall risk)')}).</li>
  <li><b>Tương đối:</b> theo ${t('te', 'tracking error')} so với benchmark, ví dụ "tracking error không quá 2%".</li>
</ul>

<div class="example"><div class="ex-h">Ví dụ 4.1 - Kiểm tra mục tiêu rủi ro</div>
<p>IPS ghi: xác suất lợi suất năm thấp hơn -10% không được quá 5%. Giả sử lợi suất phân phối chuẩn. Danh mục X có E(R) = 7%, σ = 12%. Danh mục Y có E(R) = 5,5%, σ = 8%. Danh mục nào phù hợp?</p>
<details><summary>Xem lời giải</summary>
<p>Ngưỡng 5% phía dưới = E(R) - 1,645σ.<br>
X: 7% - 1,645 × 12% = <b>-12,74%</b>, thấp hơn -10%, nên X vi phạm (xác suất lỗ quá 10% khoảng 7,8%).<br>
Y: 5,5% - 1,645 × 8% = <b>-7,66%</b>, cao hơn -10%, nên Y đạt yêu cầu (xác suất chỉ khoảng 2,6%).</p></details></div>

<h4>Willingness và ability (LOS 4)</h4>
<p>Mức chịu rủi ro tổng thể của khách hàng được ghép từ hai thành phần:</p>
<table class="plain"><thead><tr><th></th><th>${t('willingness', 'Sẵn lòng chịu rủi ro (willingness)')}</th><th>${t('ability', 'Khả năng chịu rủi ro (ability/capacity)')}</th></tr></thead><tbody>
<tr><td>Bản chất</td><td>Tâm lý, thái độ: khách hàng <b>muốn</b> chịu bao nhiêu rủi ro</td><td>Tài chính, khách quan: khách hàng <b>có thể</b> chịu được bao nhiêu thua lỗ mà không ảnh hưởng mục tiêu</td></tr>
<tr><td>Đánh giá bằng</td><td>Bảng hỏi tâm lý, hành vi đầu tư trong quá khứ, lời nói của khách hàng</td><td>Thời hạn đầu tư, quy mô tài sản so với nhu cầu, độ ổn định thu nhập, bảo hiểm, nghĩa vụ chi tiêu</td></tr>
<tr><td>Tăng khi</td><td>Khách hàng tự tin, có kinh nghiệm, ít lo lắng khi giá giảm</td><td>Thời hạn dài, tài sản lớn hơn nhiều so với nhu cầu, thu nhập ổn định</td></tr>
</tbody></table>

<div class="key">Khi hai thành phần <b>mâu thuẫn</b>:<br>
- Willingness <b>cao</b> nhưng ability <b>thấp</b>: ability thắng. Không thể để khách hàng chịu rủi ro mà tài chính không gánh nổi.<br>
- Willingness <b>thấp</b> nhưng ability <b>cao</b>: thường chọn mức <b>thấp hơn</b> (thận trọng), đồng thời <b>giáo dục khách hàng</b> về cái giá của việc quá thận trọng. Nếu thay đổi được nhận thức thì có thể nâng dần.</div>

<div class="example"><div class="ex-h">Ví dụ 4.2</div>
<p>Anh Minh 30 tuổi, bác sĩ thu nhập cao và ổn định, đã có quỹ dự phòng, chưa có nghĩa vụ chi tiêu lớn trong 25 năm tới. Nhưng anh nói "mất 5% là tôi mất ngủ" và đã bán hết cổ phiếu năm ngoái khi thị trường giảm. Đánh giá mức chịu rủi ro?</p>
<details><summary>Xem lời giải</summary><p>Ability: <b>trên trung bình</b> (trẻ, thời hạn dài, thu nhập ổn định). Willingness: <b>dưới trung bình</b> (lời nói và hành vi đều cho thấy sợ rủi ro). Tổng thể: đặt ở mức thận trọng hơn và giải thích để anh hiểu rằng giữ quá nhiều tiền mặt trong 25 năm có thể khiến anh không đạt mục tiêu.</p></details></div>
<p class="warn"><b>Bẫy:</b> lời nói "tôi chấp nhận rủi ro cao" chưa chắc phản ánh đúng willingness. Hành vi thực tế (bán tháo khi thị trường giảm) là bằng chứng mạnh hơn.</p>`,
    },
    {
      title: '5. Năm ràng buộc đầu tư',
      minutes: 20,
      html: `
<p>Ràng buộc là những giới hạn bên ngoài mục tiêu, có ảnh hưởng trực tiếp tới việc được chọn tài sản nào (LOS 5).</p>
<table class="plain"><thead><tr><th>Ràng buộc</th><th>Hỏi gì</th><th>Ảnh hưởng tới lựa chọn tài sản</th></tr></thead><tbody>
<tr><td>${t('liquidity', 'Thanh khoản (liquidity)')}</td><td>Khi nào cần rút tiền, rút bao nhiêu, có khoản bất ngờ không?</td><td>Nhu cầu cao: giữ nhiều tiền mặt, trái phiếu ngắn hạn; hạn chế bất động sản, private equity</td></tr>
<tr><td>${t('horizon', 'Thời hạn (time horizon)')}</td><td>Tiền đầu tư trong bao lâu? Một giai đoạn hay nhiều giai đoạn?</td><td>Thời hạn dài thường cho phép nhiều tài sản rủi ro và kém thanh khoản hơn</td></tr>
<tr><td>${t('tax', 'Thuế (tax concerns)')}</td><td>Thuế suất bao nhiêu, cổ tức, lãi và lãi vốn bị đánh thuế khác nhau không?</td><td>Ưu tiên tài khoản ưu đãi thuế, tài sản có lợi suất chủ yếu từ lãi vốn, trái phiếu miễn thuế</td></tr>
<tr><td>${t('legal', 'Pháp lý (legal and regulatory)')}</td><td>Luật nào giới hạn danh mục?</td><td>Quỹ hưu trí, công ty bảo hiểm, ngân hàng bị giới hạn tỷ trọng tài sản rủi ro; người nội bộ bị hạn chế giao dịch cổ phiếu công ty mình</td></tr>
<tr><td>${t('unique', 'Hoàn cảnh riêng (unique circumstances)')}</td><td>Còn điều gì đặc biệt?</td><td>Loại trừ ngành vì lý do đạo đức, tôn giáo; tài sản tập trung (cổ phiếu công ty gia đình); sở thích ESG</td></tr>
</tbody></table>

<h4>Lưu ý từng ràng buộc</h4>
<ul>
  <li><b>Thanh khoản</b> gồm nhu cầu đã biết (học phí sau 2 năm) và dự phòng bất ngờ. Nhu cầu thanh khoản lớn làm <b>giảm</b> khả năng chịu rủi ro.</li>
  <li><b>Thời hạn nhiều giai đoạn (multistage):</b> ví dụ người 50 tuổi có giai đoạn tích lũy 15 năm trước nghỉ hưu, sau đó là giai đoạn nghỉ hưu 20-25 năm. Không phải "chỉ còn 15 năm".</li>
  <li><b>Thuế</b> ảnh hưởng cả vị trí tài sản (asset location): để tài sản trả lãi nhiều vào tài khoản hoãn thuế.</li>
  <li><b>Pháp lý</b> với cá nhân thường ít; với tổ chức (quỹ hưu trí, bảo hiểm) rất nặng. Người được ủy thác có nghĩa vụ ${t('fiduciary', 'ủy thác (fiduciary duty)')}.</li>
  <li><b>Hoàn cảnh riêng</b> là "giỏ chứa" mọi thứ không thuộc 4 loại trên: sức khỏe, cam kết từ thiện, giới hạn đạo đức, cổ phần lớn ở công ty của chính mình.</li>
</ul>
<div class="example"><div class="ex-h">Ví dụ 5.1 - Phân loại</div>
<p>Xếp từng chi tiết vào mục tiêu hoặc ràng buộc: (a) cần 150.000 USD sau 18 tháng để mua nhà; (b) không đầu tư công ty thuốc lá; (c) muốn vượt lạm phát 4%/năm; (d) thuế lãi vốn 20%; (e) là giám đốc công ty niêm yết X.</p>
<details><summary>Xem lời giải</summary><p>(a) Thanh khoản (cũng tạo ra một giai đoạn của thời hạn). (b) Hoàn cảnh riêng. (c) Mục tiêu lợi suất. (d) Thuế. (e) Pháp lý: là người nội bộ nên bị hạn chế giao dịch cổ phiếu X.</p></details></div>`,
    },
    {
      title: '6. Xác định các nhóm tài sản',
      minutes: 12,
      html: `
<p>Trước khi phân bổ, phải chia vũ trụ đầu tư thành các ${t('assetclass', 'nhóm tài sản (asset classes)')} (LOS 6). Một cách chia tốt thỏa mãn các tiêu chí:</p>
<ol>
  <li><b>Đồng nhất bên trong:</b> các tài sản trong cùng nhóm có đặc điểm và rủi ro giống nhau, nên tương quan với nhau <b>cao</b>.</li>
  <li><b>Khác biệt giữa các nhóm:</b> tương quan giữa các nhóm <b>thấp</b>, nhờ đó phân bổ giữa các nhóm mới đa dạng hóa được.</li>
  <li><b>Loại trừ lẫn nhau:</b> một tài sản chỉ thuộc một nhóm.</li>
  <li><b>Đủ bao quát:</b> các nhóm cộng lại chiếm phần lớn tài sản có thể đầu tư.</li>
  <li><b>Đủ lớn và đủ thanh khoản</b> để có thể đầu tư một lượng đáng kể.</li>
</ol>
<table class="plain"><thead><tr><th>Cấp độ</th><th>Ví dụ</th></tr></thead><tbody>
<tr><td>Nhóm rộng</td><td>Cổ phiếu, trái phiếu, tiền mặt, tài sản thay thế (alternative)</td></tr>
<tr><td>Chia nhỏ cổ phiếu</td><td>Trong nước và quốc tế; thị trường phát triển và mới nổi; vốn hóa lớn và nhỏ; giá trị và tăng trưởng</td></tr>
<tr><td>Chia nhỏ trái phiếu</td><td>Chính phủ và doanh nghiệp; xếp hạng đầu tư và lợi suất cao; danh nghĩa và chỉ số hóa lạm phát</td></tr>
<tr><td>Tài sản thay thế</td><td>Bất động sản, private equity, hedge fund, hàng hóa</td></tr>
</tbody></table>
<p class="tip"><b>Cách nhìn mới:</b> nhiều tổ chức không chia theo tên tài sản mà theo <b>${t('factor', 'yếu tố rủi ro (risk factors)')}</b>, ví dụ tăng trưởng kinh tế, lạm phát, lãi suất, thanh khoản. Lý do: hai nhóm tài sản có "tên" khác nhau nhưng có thể chịu chung một yếu tố rủi ro, nên khi khủng hoảng chúng cùng giảm.</p>`,
    },
    {
      title: '7. Nguyên tắc xây dựng danh mục và vai trò của phân bổ tài sản',
      minutes: 16,
      html: `
<p>IPS cho biết "luật chơi". Bước tiếp theo là biến luật chơi thành một danh mục cụ thể (LOS 7).</p>
<h4>Phân bổ tài sản chiến lược (SAA)</h4>
<p>${t('saa', 'Phân bổ tài sản chiến lược (strategic asset allocation)')} là tỷ trọng <b>dài hạn</b> mục tiêu của từng nhóm tài sản, được chọn sao cho kết hợp với kỳ vọng thị trường dài hạn (capital market expectations) thì đáp ứng mục tiêu và ràng buộc trong IPS. Đây là quyết định tác động lớn nhất đến biến động lợi suất của danh mục theo thời gian.</p>
<h4>Ba lớp quyết định</h4>
<ol>
  <li><b>SAA:</b> ví dụ 60% cổ phiếu, 35% trái phiếu, 5% tiền mặt.</li>
  <li>${t('taa', 'Phân bổ tài sản chiến thuật (tactical asset allocation)')}: cố tình lệch ngắn hạn khỏi SAA để khai thác dự báo, ví dụ tăng cổ phiếu lên 65% vì cho rằng thị trường đang rẻ. Đây là một dạng quản lý chủ động, có rủi ro sai lầm.</li>
  <li><b>Chọn chứng khoán (security selection):</b> trong mỗi nhóm, chọn mua cái gì. Có thể thụ động (theo chỉ số) hoặc chủ động.</li>
</ol>
<p>Kết hợp thụ động và chủ động thường gặp là cách ${t('coresat', 'lõi và vệ tinh (core-satellite)')}: phần lõi lớn đầu tư thụ động, các phần vệ tinh nhỏ đầu tư chủ động. Mức độ chủ động có thể được quản lý bằng ${t('riskbudget', 'ngân sách rủi ro (risk budget)')} - ví dụ giới hạn tracking error cho từng nhà quản lý.</p>

<h4>Tái cân bằng (rebalancing)</h4>
<p>Giá tài sản thay đổi làm tỷ trọng thực tế trôi khỏi SAA. IPS thường quy định một ${t('corridor', 'biên dao động (corridor)')}: khi tỷ trọng ra ngoài biên thì phải tái cân bằng.</p>
<div class="example"><div class="ex-h">Ví dụ 7.1</div>
<p>Danh mục 1.000.000 USD, SAA 60% cổ phiếu và 40% trái phiếu, biên ±5%. Sau một năm cổ phiếu tăng 30%, trái phiếu tăng 2%. Có cần tái cân bằng không?</p>
<details><summary>Xem lời giải</summary>
<p>Cổ phiếu: 600.000 × 1,30 = 780.000. Trái phiếu: 400.000 × 1,02 = 408.000. Tổng 1.188.000.<br>
Tỷ trọng cổ phiếu = 780.000 / 1.188.000 = <b>65,66%</b>, vượt biên trên 65%, nên phải tái cân bằng.<br>
Đưa về 60%: cổ phiếu mục tiêu = 0,60 × 1.188.000 = 712.800, tức <b>bán 67.200 USD</b> cổ phiếu và mua trái phiếu.</p>
<p>Nếu cổ phiếu chỉ tăng 20% thì tỷ trọng là 720.000 / 1.128.000 = 63,83%, vẫn trong biên, không cần làm gì.</p></details></div>
<p class="tip">Tái cân bằng mang tính "ngược xu hướng": bán bớt cái đã tăng, mua thêm cái đã giảm. Nó giữ rủi ro danh mục đúng như IPS, chứ không nhằm dự báo thị trường.</p>`,
    },
    {
      title: '8. Tích hợp ESG vào lập kế hoạch và xây dựng danh mục',
      minutes: 8,
      html: `
<p>${t('esg', 'ESG')} (môi trường, xã hội, quản trị) có thể đi vào danh mục ở hai chỗ (LOS 8):</p>
<ul>
  <li><b>Lập kế hoạch:</b> sở thích ESG của khách hàng được ghi vào IPS, thường ở phần ràng buộc (hoàn cảnh riêng) hoặc hướng dẫn đầu tư. Với tổ chức, có thể đến từ yêu cầu của các bên liên quan hoặc pháp luật.</li>
  <li><b>Xây dựng danh mục:</b> chọn một hoặc kết hợp các cách tiếp cận dưới đây.</li>
</ul>
<table class="plain"><thead><tr><th>Cách tiếp cận</th><th>Làm gì</th></tr></thead><tbody>
<tr><td>${t('exclusion', 'Sàng lọc loại trừ (negative/exclusionary screening)')}</td><td>Loại bỏ ngành hoặc công ty: thuốc lá, vũ khí, than</td></tr>
<tr><td>${t('bestclass', 'Sàng lọc tích cực (positive screening / best-in-class)')}</td><td>Chọn công ty có điểm ESG tốt nhất trong từng ngành, nên vẫn giữ được đa dạng ngành</td></tr>
<tr><td>${t('integration', 'Tích hợp ESG (ESG integration)')}</td><td>Đưa rủi ro và cơ hội ESG vào phân tích tài chính truyền thống, ví dụ điều chỉnh dòng tiền hoặc lãi suất chiết khấu</td></tr>
<tr><td>${t('thematic', 'Đầu tư theo chủ đề (thematic investing)')}</td><td>Tập trung vào một chủ đề: năng lượng sạch, nước sạch</td></tr>
<tr><td>${t('impact', 'Đầu tư tác động (impact investing)')}</td><td>Nhắm tới tác động xã hội hoặc môi trường <b>đo lường được</b>, cùng với lợi nhuận tài chính</td></tr>
<tr><td>${t('engagement', 'Tham gia chủ động (engagement / active ownership)')}</td><td>Dùng quyền cổ đông (bỏ phiếu, đối thoại) để thúc đẩy công ty cải thiện ESG</td></tr>
</tbody></table>
<p class="warn"><b>Đánh đổi:</b> loại trừ thu hẹp vũ trụ đầu tư, có thể làm tăng tracking error so với benchmark thông thường và giảm đa dạng hóa. Best-in-class giảm bớt vấn đề này vì vẫn giữ đủ các ngành.</p>`,
    },
    {
      title: '9. Tóm tắt và bẫy thường gặp',
      minutes: 4,
      html: `
<table class="plain"><thead><tr><th>Tình huống</th><th>Nhớ</th></tr></thead><tbody>
<tr><td>IPS</td><td>Là khung chính sách, không bảo đảm lợi suất; xem lại định kỳ và khi hoàn cảnh đổi</td></tr>
<tr><td>Khung IPS</td><td>2 mục tiêu (return, risk) + 5 ràng buộc (TTLLU)</td></tr>
<tr><td>Lợi suất cần thiết</td><td>Chi tiêu / danh mục, cộng hoặc nhân với lạm phát</td></tr>
<tr><td>Trước thuế</td><td>Chia cho (1 - thuế suất), không nhân (1 + thuế suất)</td></tr>
<tr><td>Willingness cao, ability thấp</td><td>Ability thắng</td></tr>
<tr><td>Willingness thấp, ability cao</td><td>Chọn mức thận trọng hơn và giáo dục khách hàng</td></tr>
<tr><td>Nhu cầu tiền sắp tới</td><td>Ràng buộc thanh khoản, không phải mục tiêu lợi suất</td></tr>
<tr><td>Nhóm tài sản</td><td>Tương quan cao bên trong, thấp giữa các nhóm, loại trừ lẫn nhau</td></tr>
<tr><td>SAA và TAA</td><td>SAA dài hạn từ IPS; TAA là lệch ngắn hạn có chủ đích</td></tr>
<tr><td>ESG</td><td>Loại trừ, best-in-class, integration, thematic, impact, engagement</td></tr>
</tbody></table>
<p>Tiếp theo: tab <b>Luyện tập</b> - 10 câu. Module sau (PC-05) giải thích vì sao khách hàng hay nói một đằng làm một nẻo: các thiên lệch hành vi.</p>`,
    },
  ];

  const glossary = {
    ips: ['Investment policy statement (IPS)', 'Bản chính sách đầu tư', 'Văn bản thống nhất giữa khách hàng và nhà quản lý về mục tiêu, ràng buộc và cách quản lý danh mục.'],
    benchmark: ['Benchmark', 'Chuẩn so sánh', 'Danh mục hoặc chỉ số dùng để đánh giá kết quả của nhà quản lý.'],
    rebal: ['Rebalancing', 'Tái cân bằng', 'Mua bán để đưa tỷ trọng thực tế về lại tỷ trọng mục tiêu.'],
    returnobj: ['Return objective', 'Mục tiêu lợi suất', 'Lợi suất cần hoặc muốn đạt, nêu dạng tuyệt đối hoặc tương đối so với benchmark.'],
    riskobj: ['Risk objective', 'Mục tiêu rủi ro', 'Mức rủi ro chấp nhận được, đo bằng độ lệch chuẩn, xác suất thua lỗ, tracking error...'],
    shortfall: ['Shortfall risk', 'Rủi ro thiếu hụt', 'Xác suất lợi suất danh mục thấp hơn một ngưỡng tối thiểu.'],
    te: ['Tracking error', 'Sai số bám', 'Độ lệch chuẩn của chênh lệch lợi suất giữa danh mục và benchmark.'],
    willingness: ['Willingness to take risk', 'Mức sẵn lòng chịu rủi ro', 'Thái độ tâm lý của khách hàng đối với rủi ro; mang tính chủ quan.'],
    ability: ['Ability (capacity) to take risk', 'Khả năng chịu rủi ro', 'Mức thua lỗ khách hàng gánh được về mặt tài chính mà không ảnh hưởng mục tiêu; mang tính khách quan.'],
    liquidity: ['Liquidity constraint', 'Ràng buộc thanh khoản', 'Nhu cầu rút tiền mặt từ danh mục, đã biết trước hoặc bất ngờ.'],
    horizon: ['Time horizon', 'Thời hạn đầu tư', 'Khoảng thời gian đến khi cần dùng tiền; có thể gồm nhiều giai đoạn.'],
    tax: ['Tax concerns', 'Vấn đề thuế', 'Thuế suất và cách đánh thuế khác nhau với lãi, cổ tức, lãi vốn; ảnh hưởng lựa chọn tài sản và tài khoản.'],
    legal: ['Legal and regulatory factors', 'Yếu tố pháp lý', 'Luật lệ giới hạn danh mục, đặc biệt nặng với quỹ hưu trí, bảo hiểm, ngân hàng.'],
    unique: ['Unique circumstances', 'Hoàn cảnh riêng', 'Mọi yếu tố đặc biệt khác: đạo đức, tôn giáo, sức khỏe, tài sản tập trung.'],
    fiduciary: ['Fiduciary duty', 'Nghĩa vụ ủy thác', 'Nghĩa vụ hành động vì lợi ích tốt nhất của người thụ hưởng khi quản lý tài sản của họ.'],
    assetclass: ['Asset class', 'Nhóm tài sản', 'Tập tài sản có đặc điểm và rủi ro tương tự, tương quan cao với nhau.'],
    factor: ['Risk factor', 'Yếu tố rủi ro', 'Nguồn rủi ro chung như tăng trưởng, lạm phát, lãi suất, ảnh hưởng nhiều nhóm tài sản cùng lúc.'],
    saa: ['Strategic asset allocation (SAA)', 'Phân bổ tài sản chiến lược', 'Tỷ trọng dài hạn mục tiêu của từng nhóm tài sản, suy ra từ IPS.'],
    taa: ['Tactical asset allocation (TAA)', 'Phân bổ tài sản chiến thuật', 'Lệch ngắn hạn có chủ đích khỏi SAA để khai thác dự báo thị trường.'],
    coresat: ['Core-satellite approach', 'Cách tiếp cận lõi và vệ tinh', 'Phần lõi đầu tư thụ động, các phần vệ tinh nhỏ hơn đầu tư chủ động.'],
    riskbudget: ['Risk budget', 'Ngân sách rủi ro', 'Tổng rủi ro được phép, phân bổ cho các phần của danh mục.'],
    corridor: ['Rebalancing corridor', 'Biên dao động tái cân bằng', 'Khoảng cho phép quanh tỷ trọng mục tiêu, ra ngoài thì phải tái cân bằng.'],
    esg: ['Environmental, social and governance (ESG)', 'Môi trường, xã hội và quản trị', 'Các yếu tố phi tài chính được xem xét khi đầu tư.'],
    exclusion: ['Negative / exclusionary screening', 'Sàng lọc loại trừ', 'Loại bỏ ngành hoặc công ty không phù hợp tiêu chí ESG hoặc đạo đức.'],
    bestclass: ['Positive screening / best-in-class', 'Sàng lọc tích cực', 'Chọn các công ty có điểm ESG cao nhất trong từng ngành.'],
    integration: ['ESG integration', 'Tích hợp ESG', 'Đưa yếu tố ESG vào phân tích và định giá tài chính.'],
    thematic: ['Thematic investing', 'Đầu tư theo chủ đề', 'Tập trung vào một chủ đề ESG như năng lượng sạch.'],
    impact: ['Impact investing', 'Đầu tư tác động', 'Đầu tư nhằm tạo tác động xã hội hoặc môi trường đo lường được, kèm lợi nhuận.'],
    engagement: ['Engagement / active ownership', 'Tham gia chủ động', 'Dùng quyền cổ đông để thúc đẩy công ty cải thiện ESG.'],
  };

  const practice = [
    { q: 'Lý do quan trọng nhất để có một IPS bằng văn bản là:', choices: ['IPS bảo đảm danh mục đạt lợi suất mục tiêu.', 'IPS ghi lại mục tiêu, ràng buộc và cách đánh giá, giúp hai bên giữ kỷ luật và tạo tính liên tục khi đổi nhà quản lý.', 'Luật bắt buộc mọi khách hàng cá nhân phải có IPS.'], answer: 1, explain: 'IPS là khung chính sách: làm rõ kỳ vọng, giữ kỷ luật, tạo tính liên tục và là cơ sở đánh giá. A sai vì không gì bảo đảm được lợi suất. C sai vì IPS là thông lệ tốt, không phải yêu cầu pháp lý chung.' },
    { q: 'Danh mục 1.500.000 USD, khách hàng cần chi 60.000 USD mỗi năm và muốn giữ giá trị thực trước lạm phát 2%. Lợi suất cần thiết tính theo cách nhân gần nhất với:', choices: ['6,08%', '6,00%', '4,00%'], answer: 0, explain: 'Tỷ lệ chi tiêu = 60.000 / 1.500.000 = 4%. Cách nhân: 1,04 x 1,02 - 1 = 6,08%. B là cách cộng (xấp xỉ). C quên lạm phát.' },
    { q: 'Chị Hà 32 tuổi, thu nhập cao và ổn định, chưa có nghĩa vụ chi tiêu lớn trong 25 năm. Chị đã bán hết cổ phiếu khi thị trường giảm 8% năm ngoái và nói rất sợ thua lỗ. Nhận định phù hợp nhất:', choices: ['Mức chịu rủi ro tổng thể cao vì khả năng (ability) luôn quyết định.', 'Mức chịu rủi ro tổng thể cao vì thời hạn đầu tư dài.', 'Willingness dưới trung bình, ability trên trung bình; nên chọn mức thận trọng hơn và giáo dục khách hàng.'], answer: 2, explain: 'Ability cao (trẻ, thu nhập ổn định, thời hạn dài) nhưng willingness thấp (lời nói và hành vi). Khi willingness thấp hơn ability, thông lệ là chọn mức thận trọng hơn và giáo dục khách hàng. A và B bỏ qua mặt tâm lý.' },
    { q: 'Khách hàng cần lợi suất sau thuế 5,1%. Toàn bộ lợi suất chịu thuế 15%. Lợi suất trước thuế cần đạt gần nhất với:', choices: ['5,10%', '5,87%', '6,00%'], answer: 2, explain: '5,1% / (1 - 0,15) = 6,00%. B là 5,1% x 1,15 - nhân thêm thuế suất là sai. A bỏ qua thuế.' },
    { q: 'Chi tiết nào sau đây là một ràng buộc (constraint) chứ không phải mục tiêu (objective) trong IPS?', choices: ['Cần rút 200.000 USD sau 6 tháng để mua nhà.', 'Muốn đạt lợi suất 7% mỗi năm.', 'Không chấp nhận lỗ quá 10% trong một năm.'], answer: 0, explain: 'Khoản rút sắp tới là ràng buộc thanh khoản. B là mục tiêu lợi suất, C là mục tiêu rủi ro (dạng tuyệt đối).' },
    { q: 'Một cách chia nhóm tài sản (asset class) tốt nên có đặc điểm nào?', choices: ['Các tài sản trong cùng nhóm có tương quan thấp với nhau để đa dạng hóa bên trong nhóm.', 'Tài sản trong nhóm đồng nhất (tương quan cao), giữa các nhóm tương quan thấp, các nhóm loại trừ lẫn nhau.', 'Mỗi tài sản có thể thuộc nhiều nhóm để tăng linh hoạt.'], answer: 1, explain: 'Tiêu chí: đồng nhất bên trong, khác biệt giữa các nhóm, loại trừ lẫn nhau, bao quát và đủ thanh khoản. A đảo ngược tiêu chí đồng nhất. C vi phạm tính loại trừ lẫn nhau.' },
    { q: 'Phân bổ tài sản chiến lược (SAA) được mô tả đúng nhất là:', choices: ['Tỷ trọng dài hạn mục tiêu của các nhóm tài sản, được chọn để đáp ứng mục tiêu và ràng buộc trong IPS.', 'Lệch ngắn hạn khỏi tỷ trọng mục tiêu để khai thác dự báo thị trường.', 'Việc chọn chứng khoán cụ thể trong từng nhóm tài sản.'], answer: 0, explain: 'SAA là tỷ trọng dài hạn suy ra từ IPS và kỳ vọng thị trường dài hạn. B là TAA. C là security selection.' },
    { q: 'Danh mục 1.000.000 USD, SAA 60% cổ phiếu / 40% trái phiếu, biên ±5%. Sau một năm cổ phiếu tăng 30%, trái phiếu tăng 2%. Tỷ trọng cổ phiếu và hành động phù hợp:', choices: ['63,83%; không cần làm gì.', '65,66%; mua thêm cổ phiếu.', '65,66%; bán khoảng 67.200 USD cổ phiếu.'], answer: 2, explain: '780.000 / 1.188.000 = 65,66% > 65%, phải bán cổ phiếu về 60% x 1.188.000 = 712.800, tức bán 67.200. A là kết quả nếu cổ phiếu chỉ tăng 20%. B làm ngược hướng tái cân bằng.' },
    { q: 'Một quỹ loại bỏ toàn bộ công ty thuốc lá và vũ khí khỏi vũ trụ đầu tư. Đây là cách tiếp cận ESG nào?', choices: ['Đầu tư tác động (impact investing)', 'Sàng lọc loại trừ (negative screening)', 'Sàng lọc tích cực (best-in-class)'], answer: 1, explain: 'Loại bỏ ngành theo tiêu chí là sàng lọc loại trừ. A cần mục tiêu tác động đo lường được. C chọn công ty tốt nhất trong mỗi ngành, không loại bỏ cả ngành.' },
    { q: 'Ví dụ nào thuộc ràng buộc "hoàn cảnh riêng" (unique circumstances)?', choices: ['Khách hàng không muốn đầu tư vào công ty sản xuất rượu bia vì lý do tôn giáo.', 'Thuế suất thu nhập của khách hàng là 30%.', 'Khách hàng cần tiền học phí cho con sau 2 năm.'], answer: 0, explain: 'Giới hạn vì lý do tôn giáo, đạo đức là hoàn cảnh riêng. B là ràng buộc thuế. C là ràng buộc thanh khoản (và thời hạn).' },
  ];

  // Widget: lợi suất cần thiết theo chi tiêu, quy mô danh mục và lạm phát.
  const widgets = {
    reqReturn(el) {
      el.innerHTML = `
        <div class="w-row"><label>Chi tiêu mỗi năm: <b data-o="s">90.000 USD</b><input type="range" min="20000" max="200000" step="5000" value="90000" data-i="s"></label>
        <label>Giá trị danh mục: <b data-o="p">2.000.000 USD</b><input type="range" min="500000" max="5000000" step="100000" value="2000000" data-i="p"></label>
        <label>Lạm phát: <b data-o="i">3%</b><input type="range" min="0" max="8" step="0.25" value="3" data-i="i"></label></div>
        <div class="w-out"><div class="w-price" data-o="r"></div><div class="w-bar"><span data-o="bar"></span><i></i></div><div class="w-note" data-o="note"></div></div>`;
      const q = s => el.querySelector(s);
      const vn = (x, d) => x.toLocaleString('vi-VN', { minimumFractionDigits: d, maximumFractionDigits: d });
      const upd = () => {
        const s = +q('[data-i="s"]').value, p = +q('[data-i="p"]').value, i = +q('[data-i="i"]').value / 100;
        const sp = s / p, add = sp + i, mul = (1 + sp) * (1 + i) - 1;
        q('[data-o="s"]').textContent = `${vn(s, 0)} USD`;
        q('[data-o="p"]').textContent = `${vn(p, 0)} USD`;
        q('[data-o="i"]').textContent = `${vn(i * 100, 2)}%`;
        q('[data-o="r"]').textContent = `Lợi suất cần thiết (nhân) = ${vn(mul * 100, 2)}%`;
        q('[data-o="bar"]').style.width = `${Math.min(100, mul * 100 * 5)}%`;
        q('[data-o="note"]').textContent = `Tỷ lệ chi tiêu ${vn(sp * 100, 2)}%; cách cộng cho ${vn(add * 100, 2)}%. `
          + (mul > 0.09 ? 'Mức này đòi hỏi danh mục khá rủi ro: cần kiểm tra lại với khả năng chịu rủi ro của khách hàng.' : 'Mức này có thể đạt được với danh mục cân bằng.');
      };
      el.addEventListener('input', upd);
      upd();
    },
  };

  window.LESSONS['PC-04'] = {
    moduleId: 'PC-04',
    calculator: 'BA II Plus',
    warmup: [
      'Nhắc lại 3 bước của quy trình quản lý danh mục (PC-03). IPS nằm ở bước nào?',
      'Một quỹ hưu trí và một người 25 tuổi khác nhau thế nào về thời hạn đầu tư và nhu cầu thanh khoản?',
      'Theo bạn, vì sao một khách hàng nói "tôi chịu rủi ro tốt" mà vẫn bán tháo khi thị trường giảm?',
    ],
    sections,
    glossary,
    practice,
    widgets,
    slides: [],
    wrapup: [
      'Liệt kê 2 mục tiêu và 5 ràng buộc của IPS mà không nhìn tài liệu.',
      'Khi willingness và ability mâu thuẫn, xử lý thế nào trong từng trường hợp?',
      'Viết lại công thức lợi suất cần thiết (cách nhân) và công thức quy đổi trước thuế.',
    ],
  };
}());
