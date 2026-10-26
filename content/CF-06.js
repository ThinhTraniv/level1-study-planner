// Bài giảng CF-06 - Capital Structure (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t, frac } = window.CFAH;

  const sections = [
    {
      title: '1. Bức tranh lớn',
      minutes: 5,
      html: `
<p>CF-05 dùng lợi suất yêu cầu r để chiết khấu dòng tiền dự án. Module này trả lời: <b>r đó lấy từ đâu</b>, và <b>công ty nên vay bao nhiêu</b>?</p>
<div class="key">${t('capstruct', 'Cấu trúc vốn (capital structure)')} là tỷ lệ giữa nợ và vốn chủ sở hữu công ty dùng để tài trợ tài sản. Chi phí trung bình của các nguồn vốn này là ${t('wacc', 'WACC')}. Câu hỏi trung tâm: <b>thay đổi tỷ lệ nợ có làm thay đổi giá trị công ty không?</b></div>
<p>Bốn bước của module, ứng với 4 LOS:</p>
<ol>
  <li><b>Tính và diễn giải WACC</b>. Ứng với LOS 1.</li>
  <li><b>Các yếu tố ảnh hưởng</b> đến cấu trúc vốn và WACC: đặc điểm kinh doanh, vòng đời doanh nghiệp, thị trường. Ứng với LOS 2.</li>
  <li><b>Lý thuyết Modigliani-Miller</b>: trong thế giới hoàn hảo, cấu trúc vốn không quan trọng; thêm thuế thì nợ có lợi. Ứng với LOS 3.</li>
  <li><b>Cấu trúc vốn tối ưu và mục tiêu</b>: đánh đổi giữa lá chắn thuế và chi phí kiệt quệ tài chính, cùng các lý thuyết về thông tin bất cân xứng. Ứng với LOS 4.</li>
</ol>
<p class="tip"><b>Trực giác cần giữ suốt bài:</b> nợ rẻ hơn vốn chủ (vì chủ nợ được trả trước và lãi vay được trừ thuế), nhưng mỗi đồng nợ thêm làm vốn chủ <b>rủi ro hơn</b> và tăng nguy cơ kiệt quệ. Toàn bộ module là cuộc giằng co giữa hai lực này.</p>`,
    },
    {
      title: '2. WACC: tính và diễn giải',
      minutes: 14,
      html: `
<div class="formula">WACC = w<sub>d</sub> × r<sub>d</sub> × (1 - t) + w<sub>p</sub> × r<sub>p</sub> + w<sub>e</sub> × r<sub>e</sub></div>
<ul>
<li>w<sub>d</sub>, w<sub>p</sub>, w<sub>e</sub>: tỷ trọng nợ, cổ phiếu ưu đãi, vốn chủ (cộng lại bằng 1).</li>
<li>r<sub>d</sub> × (1 - t): ${t('afterdebt', 'chi phí nợ sau thuế')}. Lãi vay được trừ khi tính thuế nên chi phí thật của nợ thấp hơn lãi suất danh nghĩa.</li>
<li>r<sub>p</sub> = cổ tức ưu đãi / giá cổ phiếu ưu đãi. Cổ tức không được trừ thuế, nên không nhân (1 - t).</li>
<li>r<sub>e</sub>: ${t('costequity', 'chi phí vốn chủ')}, thường ước tính bằng CAPM: r<sub>e</sub> = r<sub>f</sub> + β × (E(R<sub>m</sub>) - r<sub>f</sub>).</li>
</ul>
<div class="key"><b>Diễn giải:</b> WACC là lợi suất tối thiểu công ty phải tạo ra trên tài sản để thỏa mãn <b>tất cả</b> nhà cung cấp vốn. Nó là lãi suất chiết khấu đúng cho dự án có rủi ro <b>giống rủi ro trung bình</b> của công ty. Dự án rủi ro hơn cần lãi suất cao hơn.</div>
<div class="example"><div class="ex-h">Ví dụ 2.1</div>
<p>Công ty có cấu trúc vốn mục tiêu 40% nợ, 60% vốn chủ. Lãi suất vay trước thuế 6%, thuế suất 25%, chi phí vốn chủ 12%. Tính WACC.</p>
<details><summary>Xem lời giải</summary>
<p>WACC = 0,40 × 6% × (1 - 0,25) + 0,60 × 12% = 1,80% + 7,20% = <b>9,00%</b>.<br>Nếu quên (1 - t): 0,40 × 6% + 7,20% = 9,60%. Đây là đáp án bẫy kinh điển.</p></details></div>
<div class="example"><div class="ex-h">Ví dụ 2.2 - Có cổ phiếu ưu đãi và CAPM</div>
<p>Giá trị thị trường: nợ 300, cổ phiếu ưu đãi 100, vốn chủ 600. r<sub>d</sub> = 7%, t = 20%, r<sub>p</sub> = 8%. Vốn chủ: r<sub>f</sub> = 4%, β = 1,2, phần bù rủi ro thị trường 6%. Tính WACC.</p>
<details><summary>Xem lời giải</summary>
<p>r<sub>e</sub> = 4% + 1,2 × 6% = 11,2%. Tỷ trọng: nợ 30%, ưu đãi 10%, vốn chủ 60%.<br>
WACC = 0,30 × 7% × 0,8 + 0,10 × 8% + 0,60 × 11,2% = 1,68% + 0,80% + 6,72% = <b>9,20%</b>.</p></details></div>
<h4>Dùng tỷ trọng nào?</h4>
<ul>
<li><b>Ưu tiên ${t('targetcs', 'cấu trúc vốn mục tiêu (target capital structure)')}</b> nếu biết, vì WACC dùng để chiết khấu dòng tiền tương lai.</li>
<li>Nếu không biết mục tiêu, ước tính bằng: (1) cấu trúc vốn <b>hiện tại theo giá trị thị trường</b>; (2) xu hướng hoặc tuyên bố chính sách của công ty; (3) trung bình của các công ty cùng ngành.</li>
<li>Lý thuyết dùng <b>giá trị thị trường</b>; thực tế ban quản lý hay đặt mục tiêu theo <b>giá trị sổ sách</b> (ổn định hơn, gắn với điều khoản vay và hạn mức tín dụng).</li>
</ul>
<p class="warn"><b>Bẫy:</b> đề cho cả giá trị sổ sách và giá trị thị trường. Khi tính tỷ trọng cho WACC, dùng <b>giá trị thị trường</b> cho cả nợ và vốn chủ (giá cổ phiếu × số cổ phiếu), trừ khi đề nói rõ mục tiêu theo sổ sách. Không trộn nợ sổ sách với vốn chủ thị trường.</p>`,
    },
    {
      title: '3. Các yếu tố ảnh hưởng đến cấu trúc vốn và WACC',
      minutes: 12,
      html: `
<p>Không có tỷ lệ nợ "chuẩn" cho mọi công ty. Khả năng gánh nợ phụ thuộc vào việc công ty có <b>trả được nợ ổn định</b> hay không.</p>
<h4>Yếu tố nội tại</h4>
<table class="plain"><thead><tr><th>Yếu tố</th><th>Ảnh hưởng đến khả năng vay</th></tr></thead><tbody>
<tr><td>Tăng trưởng và độ ổn định doanh thu</td><td>Doanh thu lớn, ổn định hoặc tăng đều → vay được nhiều hơn</td></tr>
<tr><td>Tăng trưởng và khả năng dự báo dòng tiền</td><td>Dòng tiền dương, lớn, dễ dự báo → trả lãi đều đặn → vay nhiều hơn</td></tr>
<tr><td>${t('busrisk', 'Rủi ro kinh doanh')} (rủi ro hoạt động và rủi ro nhu cầu)</td><td>Lợi nhuận, dòng tiền biến động mạnh → vay ít hơn</td></tr>
<tr><td>Quy mô và tính thanh khoản của tài sản</td><td>Tài sản hữu hình, dễ bán, giá ổn định làm tài sản đảm bảo tốt → vay rẻ và nhiều hơn. Công ty "nhẹ tài sản" (phần mềm, dịch vụ) khó thế chấp</td></tr>
<tr><td>Chi phí và khả năng tiếp cận vốn vay</td><td>Lãi suất thấp, chủ nợ sẵn lòng cho vay → nợ hấp dẫn hơn</td></tr>
<tr><td>Chính sách cấu trúc vốn của công ty</td><td>Mục tiêu về tỷ lệ đòn bẩy, xếp hạng tín nhiệm muốn giữ (ví dụ hạng đầu tư)</td></tr>
</tbody></table>
<h4>Yếu tố bên ngoài</h4>
<ul>
<li><b>Điều kiện thị trường và chu kỳ kinh tế</b>: lãi suất, khẩu vị rủi ro của nhà đầu tư thay đổi chi phí nợ và vốn chủ.</li>
<li><b>Quy định pháp lý</b>: ngân hàng, bảo hiểm, tiện ích công cộng chịu giới hạn đòn bẩy hoặc vốn tối thiểu.</li>
<li><b>Chuẩn mực ngành</b>: công ty thường so với đối thủ cùng ngành; chủ nợ và tổ chức xếp hạng cũng so sánh như vậy.</li>
</ul>
<h4>Thước đo đòn bẩy thường dùng</h4>
<p>Nợ/vốn chủ (D/E), nợ/tổng vốn (D/V), nợ/EBITDA, khả năng trả lãi (EBIT/lãi vay hoặc EBITDA/lãi vay). Tổ chức xếp hạng và điều khoản vay (covenant) thường gắn với các tỷ lệ này.</p>
<div class="example"><div class="ex-h">Ví dụ 3.1</div>
<p>So sánh hai công ty: (a) một công ty điện có hợp đồng bán điện dài hạn, nhà máy lớn; (b) một công ty phần mềm mới niêm yết, doanh thu tăng nhanh nhưng biến động, ít tài sản hữu hình. Công ty nào nên có tỷ lệ nợ cao hơn?</p>
<details><summary>Xem lời giải</summary><p>(a) dòng tiền ổn định, dễ dự báo, tài sản hữu hình làm tài sản đảm bảo tốt: đòn bẩy cao hợp lý. (b) rủi ro kinh doanh cao, tài sản vô hình: nên dựa chủ yếu vào vốn chủ.</p></details></div>`,
    },
    {
      title: '4. Vòng đời doanh nghiệp và cấu trúc vốn',
      minutes: 8,
      html: `
<p>Cấu trúc vốn thay đổi theo ${t('lifecycle', 'giai đoạn vòng đời')} của công ty:</p>
<table class="plain"><thead><tr><th>Giai đoạn</th><th>Dòng tiền và rủi ro</th><th>Cấu trúc vốn điển hình</th></tr></thead><tbody>
<tr><td><b>Khởi nghiệp (start-up)</b></td><td>Doanh thu nhỏ hoặc chưa có, dòng tiền âm, rủi ro kinh doanh rất cao</td><td>Gần như toàn vốn chủ (nhà sáng lập, quỹ đầu tư mạo hiểm). Vay rất hạn chế và đắt</td></tr>
<tr><td><b>Tăng trưởng (growth)</b></td><td>Doanh thu tăng nhanh, dòng tiền cải thiện, có thể dương</td><td>Vốn chủ vẫn chiếm ưu thế. Bắt đầu vay được ở mức thấp, thường có tài sản đảm bảo. Doanh nghiệp "nhẹ tài sản" có thể không cần vay</td></tr>
<tr><td><b>Trưởng thành (mature)</b></td><td>Dòng tiền dương, lớn, dễ dự báo; nhu cầu đầu tư giảm</td><td>Nợ rẻ hơn và chiếm tỷ trọng lớn hơn, có thể vay không đảm bảo. Thường tăng đòn bẩy để trả cổ tức, mua lại cổ phiếu</td></tr>
</tbody></table>
<div class="key">Đi từ khởi nghiệp đến trưởng thành: rủi ro kinh doanh giảm, khả năng vay tăng, tỷ lệ nợ tăng và WACC thường giảm.</div>
<p class="tip">Ở công ty trưởng thành, "đòn bẩy hóa" (vay để trả tiền cho cổ đông) là hiện tượng phổ biến. Dòng tiền ổn định cho phép gánh nợ, và trả tiền cho cổ đông tránh để ban quản lý tiêu tiền vào dự án kém (giảm chi phí đại diện).</p>`,
    },
    {
      title: '5. Modigliani-Miller khi không có thuế',
      minutes: 16,
      html: `
<p>Năm 1958, Modigliani và Miller chứng minh: trong một thế giới "hoàn hảo", cách chia chiếc bánh (nợ và vốn chủ) <b>không làm chiếc bánh to hơn</b>. Giá trị công ty chỉ phụ thuộc vào dòng tiền từ tài sản.</p>
<h4>Giả định</h4>
<ul>
<li>Nhà đầu tư có <b>kỳ vọng đồng nhất</b> về dòng tiền.</li>
<li>Thị trường vốn hoàn hảo: không thuế, không chi phí giao dịch, không chi phí phá sản, mọi người có cùng thông tin.</li>
<li>Nhà đầu tư vay và cho vay ở lãi suất phi rủi ro (cùng mức với công ty).</li>
<li>Không có chi phí đại diện.</li>
<li>Quyết định tài trợ và quyết định đầu tư độc lập với nhau.</li>
</ul>
<div class="key"><b>${t('mm1', 'MM Proposition I')} (không thuế):</b> V<sub>L</sub> = V<sub>U</sub>. Giá trị công ty có vay bằng giá trị công ty không vay. Ban quản lý không tạo ra giá trị bằng cách thay đổi cấu trúc vốn.<br>
<b>${t('mm2', 'MM Proposition II')} (không thuế):</b> chi phí vốn chủ tăng tuyến tính theo D/E:</div>
<div class="formula">r<sub>e</sub> = r<sub>0</sub> + (r<sub>0</sub> - r<sub>d</sub>) × ${frac('D', 'E')}</div>
<p>r<sub>0</sub> là chi phí vốn của công ty không vay (bằng WACC khi không có thuế). Phần tăng thêm của r<sub>e</sub> chính là phần bù cho ${t('finrisk', 'rủi ro tài chính')} mà cổ đông gánh. Nợ rẻ hơn, nhưng mỗi đồng nợ làm vốn chủ đắt lên vừa đủ để <b>WACC giữ nguyên</b>.</p>
<div class="example"><div class="ex-h">Ví dụ 5.1</div>
<p>Công ty có EBIT 100 mỗi năm mãi mãi, không thuế, r<sub>0</sub> = 10%. Công ty vay 400 ở lãi suất 6% để mua lại cổ phiếu. Tính giá trị công ty, giá trị vốn chủ, r<sub>e</sub> và WACC sau khi vay.</p>
<details><summary>Xem lời giải</summary>
<p>V<sub>U</sub> = 100 / 10% = 1.000. Theo MM I: V<sub>L</sub> = <b>1.000</b>. E = 1.000 - 400 = <b>600</b>.<br>
r<sub>e</sub> = 10% + (10% - 6%) × 400/600 = <b>12,67%</b>.<br>
WACC = 0,4 × 6% + 0,6 × 12,67% = 2,40% + 7,60% = <b>10,00%</b>, đúng bằng r<sub>0</sub>.</p>
<p>Kiểm tra bằng dòng tiền: cổ đông nhận 100 - 24 (lãi) = 76; 76 / 12,67% = 600. Khớp.</p></details></div>
<p class="tip"><b>Vì sao MM I đúng?</b> Nếu công ty có vay được định giá cao hơn, nhà đầu tư có thể tự vay cá nhân để tạo ra đòn bẩy "tự chế" với cổ phiếu công ty không vay, thu cùng dòng tiền với giá rẻ hơn: một dạng arbitrage. Áp lực đó kéo hai giá trị về bằng nhau.</p>`,
    },
    {
      title: '6. Modigliani-Miller khi có thuế',
      minutes: 14,
      html: `
<p>Thêm thuế thu nhập doanh nghiệp: lãi vay được trừ trước khi tính thuế, nên vay nợ giúp công ty <b>nộp thuế ít hơn</b>. Phần thuế tiết kiệm được là ${t('taxshield', 'lá chắn thuế (tax shield)')}.</p>
<div class="formula">MM I (có thuế): V<sub>L</sub> = V<sub>U</sub> + t × D</div>
<div class="formula">MM II (có thuế): r<sub>e</sub> = r<sub>0</sub> + (r<sub>0</sub> - r<sub>d</sub>) × (1 - t) × ${frac('D', 'E')}</div>
<ul>
<li>t × D là giá trị hiện tại của lá chắn thuế (với nợ vĩnh viễn): mỗi năm tiết kiệm t × r<sub>d</sub> × D, chiết khấu ở r<sub>d</sub>.</li>
<li>r<sub>e</sub> vẫn tăng theo D/E nhưng <b>chậm hơn</b> trường hợp không thuế (nhân thêm 1 - t).</li>
<li>WACC <b>giảm</b> khi tăng nợ. Kết luận cực đoan: giá trị lớn nhất và WACC nhỏ nhất ở <b>100% nợ</b>.</li>
</ul>
<div class="example"><div class="ex-h">Ví dụ 6.1</div>
<p>Công ty có EBIT 100 mãi mãi, thuế suất 25%, r<sub>0</sub> = 10%. Công ty vay 300 (vĩnh viễn) ở 6%. Tính V<sub>U</sub>, V<sub>L</sub>, E, r<sub>e</sub> và WACC.</p>
<details><summary>Xem lời giải</summary>
<p>V<sub>U</sub> = 100 × (1 - 0,25) / 10% = <b>750</b>.<br>
V<sub>L</sub> = 750 + 0,25 × 300 = <b>825</b>; E = 825 - 300 = <b>525</b>.<br>
r<sub>e</sub> = 10% + (10% - 6%) × 0,75 × 300/525 = <b>11,71%</b>.<br>
WACC = (300/825) × 6% × 0,75 + (525/825) × 11,71% = 1,64% + 7,45% = <b>9,09%</b>.<br>
Kiểm tra: EBIT × (1 - t) / WACC = 75 / 9,09% = 825. Khớp.</p></details></div>
<h4>Thử ngay: kéo thanh nợ và thuế suất</h4>
<div class="widget" data-widget="mmLever"></div>
<table class="plain"><thead><tr><th></th><th>Không thuế</th><th>Có thuế</th></tr></thead><tbody>
<tr><td>Giá trị công ty</td><td>V<sub>L</sub> = V<sub>U</sub></td><td>V<sub>L</sub> = V<sub>U</sub> + tD</td></tr>
<tr><td>Chi phí vốn chủ</td><td>Tăng theo (r<sub>0</sub> - r<sub>d</sub>) D/E</td><td>Tăng theo (r<sub>0</sub> - r<sub>d</sub>)(1 - t) D/E</td></tr>
<tr><td>WACC khi tăng nợ</td><td>Không đổi</td><td>Giảm</td></tr>
<tr><td>Cấu trúc vốn tối ưu</td><td>Không có (không quan trọng)</td><td>100% nợ</td></tr>
</tbody></table>
<p class="warn"><b>Bẫy:</b> dùng công thức không thuế khi đề có thuế (hoặc ngược lại). Đọc kỹ đề có nhắc thuế suất không. Và nhớ: r<sub>0</sub> trong MM II là chi phí vốn của công ty <b>không vay</b>, không phải WACC của công ty có vay khi có thuế.</p>`,
    },
    {
      title: '7. Chi phí kiệt quệ tài chính và chi phí đại diện',
      minutes: 8,
      html: `
<p>Thực tế không công ty nào vay 100%. Lý do: nợ càng nhiều, nguy cơ không trả được nợ càng cao, kéo theo ${t('distress', 'chi phí kiệt quệ tài chính (costs of financial distress)')}.</p>
<table class="plain"><thead><tr><th>Loại</th><th>Ví dụ</th></tr></thead><tbody>
<tr><td><b>Trực tiếp</b></td><td>Chi phí thực tế khi phá sản hoặc tái cơ cấu: luật sư, tư vấn, tòa án, thanh lý tài sản dưới giá</td></tr>
<tr><td><b>Gián tiếp</b></td><td>Mất khách hàng và nhà cung cấp (sợ công ty không tồn tại), nhân viên giỏi nghỉ việc, bỏ lỡ cơ hội đầu tư, ban quản lý bận đối phó chủ nợ; xung đột giữa cổ đông và chủ nợ</td></tr>
</tbody></table>
<p><b>Chi phí kỳ vọng</b> = xác suất kiệt quệ × chi phí nếu kiệt quệ. Xác suất phụ thuộc mức đòn bẩy, rủi ro kinh doanh, chất lượng quản trị và ban quản lý. Chi phí nếu xảy ra thấp hơn ở công ty có <b>tài sản hữu hình dễ bán</b> (bất động sản) và cao hơn ở công ty có tài sản vô hình (thương hiệu, nhân sự, công nghệ).</p>
<h4>Chi phí đại diện</h4>
<p>${t('agency', 'Chi phí đại diện (agency costs)')} phát sinh từ xung đột lợi ích giữa ban quản lý và chủ sở hữu (cổ đông, chủ nợ). Nợ có hai mặt: nghĩa vụ trả lãi cố định <b>kỷ luật</b> ban quản lý, giảm tiền mặt "thừa" để tiêu xài; nhưng nợ quá cao làm cổ đông có động cơ chọn dự án rủi ro (vì chủ nợ gánh phần lỗ), và chủ nợ đòi lãi cao hơn hoặc điều khoản chặt hơn.</p>`,
    },
    {
      title: '8. Lý thuyết đánh đổi tĩnh và cấu trúc vốn tối ưu',
      minutes: 10,
      html: `
<p>${t('tradeoff', 'Lý thuyết đánh đổi tĩnh (static trade-off theory)')} gộp MM có thuế với chi phí kiệt quệ:</p>
<div class="formula">V<sub>L</sub> = V<sub>U</sub> + t × D - PV(chi phí kiệt quệ tài chính)</div>
<div class="key">Ở mức nợ thấp, lợi ích lá chắn thuế lớn hơn chi phí kiệt quệ, nên vay thêm làm tăng giá trị. Đến một mức nào đó, chi phí kiệt quệ biên tăng nhanh hơn lợi ích thuế biên. ${t('optimalcs', 'Cấu trúc vốn tối ưu (optimal capital structure)')} là điểm hai lực cân bằng: <b>giá trị công ty lớn nhất và WACC nhỏ nhất</b>.</div>
<div class="example"><div class="ex-h">Ví dụ 8.1 - Minh họa</div>
<p>Tiếp ví dụ 6.1 (V<sub>U</sub> = 750, t = 25%). Giả sử PV chi phí kiệt quệ = 0,0004 × D<sup>2</sup>. So sánh giá trị công ty ở D = 0, 300 và 600.</p>
<details><summary>Xem lời giải</summary>
<table class="plain"><thead><tr><th>D</th><th>V<sub>U</sub> + tD</th><th>PV kiệt quệ</th><th>V<sub>L</sub></th></tr></thead><tbody>
<tr><td>0</td><td>750</td><td>0</td><td>750</td></tr>
<tr><td>300</td><td>825</td><td>36</td><td><b>789</b></td></tr>
<tr><td>600</td><td>900</td><td>144</td><td>756</td></tr>
</tbody></table>
<p>Giá trị tăng rồi giảm. Với giả định này, điểm tối ưu là D = 312,5 (nơi lợi ích thuế biên 0,25 bằng chi phí kiệt quệ biên 0,0008 × D), V<sub>L</sub> = 789,06.</p></details></div>
<h4>Tối ưu và mục tiêu khác nhau thế nào?</h4>
<p>Cấu trúc vốn tối ưu là điểm lý thuyết, khó xác định chính xác. ${t('targetcs', 'Cấu trúc vốn mục tiêu')} là tỷ lệ công ty hướng tới trong thời gian dài. Cấu trúc thực tế có thể lệch khỏi mục tiêu vì:</p>
<ul>
<li>Giá trị thị trường của nợ và vốn chủ biến động liên tục.</li>
<li>Ban quản lý tận dụng cơ hội tài trợ (ví dụ phát hành cổ phiếu khi giá cao, vay khi lãi suất thấp).</li>
<li>Chi phí phát hành (flotation cost) khiến việc điều chỉnh liên tục không đáng.</li>
</ul>
<p class="tip">Ban quản lý thường đặt mục tiêu theo <b>giá trị sổ sách</b> hoặc theo xếp hạng tín nhiệm muốn giữ, vì giá thị trường biến động mạnh, và chủ nợ, tổ chức xếp hạng quan tâm đến số vốn đã đầu tư hơn là giá cổ phiếu hôm nay.</p>`,
    },
    {
      title: '9. Thông tin bất cân xứng và lý thuyết trật tự phân hạng',
      minutes: 9,
      html: `
<p>${t('asym', 'Thông tin bất cân xứng (information asymmetry)')}: ban quản lý biết về triển vọng công ty nhiều hơn nhà đầu tư bên ngoài. Hệ quả: chi phí đại diện cao hơn và nhà đầu tư đòi lợi suất cao hơn để bù cho việc "không biết".</p>
<h4>Tín hiệu từ quyết định tài trợ</h4>
<ul>
<li><b>Phát hành cổ phiếu mới</b>: nhà đầu tư suy luận ban quản lý cho rằng cổ phiếu đang bị <b>định giá cao</b> (bán khi đắt), nên giá thường giảm khi công bố.</li>
<li><b>Vay nợ</b>: cam kết trả lãi cố định là ${t('signal', 'tín hiệu')} ban quản lý tự tin vào dòng tiền tương lai. Tín hiệu tích cực hơn phát hành cổ phiếu.</li>
</ul>
<div class="key"><b>${t('pecking', 'Lý thuyết trật tự phân hạng (pecking order theory)')}:</b> công ty ưu tiên nguồn vốn <b>tiết lộ ít thông tin nhất</b>:<br>1. Vốn nội bộ (lợi nhuận giữ lại) → 2. Nợ → 3. Phát hành cổ phiếu mới (cuối cùng).</div>
<p>Theo pecking order, cấu trúc vốn là <b>kết quả</b> của nhu cầu vốn qua thời gian chứ không phải một mục tiêu được chọn. Công ty có lãi nhiều thường có ít nợ vì không cần vay.</p>
<table class="plain"><thead><tr><th>Lý thuyết</th><th>Ý chính</th><th>Hàm ý</th></tr></thead><tbody>
<tr><td>MM không thuế</td><td>Cấu trúc vốn không quan trọng</td><td>WACC không đổi</td></tr>
<tr><td>MM có thuế</td><td>Lá chắn thuế làm nợ có lợi</td><td>100% nợ</td></tr>
<tr><td>Static trade-off</td><td>Lá chắn thuế đối trọng với chi phí kiệt quệ</td><td>Có một điểm tối ưu</td></tr>
<tr><td>Pecking order</td><td>Thông tin bất cân xứng</td><td>Nội bộ → nợ → cổ phiếu mới</td></tr>
</tbody></table>`,
    },
    {
      title: '10. Tóm tắt và bẫy thường gặp',
      minutes: 4,
      html: `
<table class="plain"><thead><tr><th>Tình huống</th><th>Nhớ</th></tr></thead><tbody>
<tr><td>WACC</td><td>Nợ nhân (1 - t); cổ phiếu ưu đãi không nhân</td></tr>
<tr><td>Tỷ trọng</td><td>Mục tiêu nếu biết; không thì giá trị thị trường hiện tại, xu hướng, trung bình ngành</td></tr>
<tr><td>Ai vay được nhiều</td><td>Dòng tiền ổn định, tài sản hữu hình, rủi ro kinh doanh thấp, giai đoạn trưởng thành</td></tr>
<tr><td>MM I / II không thuế</td><td>V<sub>L</sub> = V<sub>U</sub>; r<sub>e</sub> = r<sub>0</sub> + (r<sub>0</sub> - r<sub>d</sub>)D/E; WACC không đổi</td></tr>
<tr><td>MM có thuế</td><td>V<sub>L</sub> = V<sub>U</sub> + tD; nhân thêm (1 - t) trong MM II; WACC giảm, tối ưu 100% nợ</td></tr>
<tr><td>Static trade-off</td><td>V<sub>L</sub> = V<sub>U</sub> + tD - PV(kiệt quệ); tối ưu khi lợi ích biên = chi phí biên</td></tr>
<tr><td>Pecking order</td><td>Lợi nhuận giữ lại → nợ → cổ phiếu mới</td></tr>
<tr><td>Phát hành cổ phiếu</td><td>Tín hiệu tiêu cực: cổ phiếu có thể đang đắt</td></tr>
</tbody></table>
<p>Tiếp theo: tab <b>Luyện tập</b> để làm 10 câu. Module sau (CF-07) chuyển sang mô hình kinh doanh.</p>`,
    },
  ];

  const glossary = {
    capstruct: ['Capital structure', 'Cấu trúc vốn', 'Tỷ lệ nợ, cổ phiếu ưu đãi và vốn chủ dùng để tài trợ tài sản của công ty.'],
    wacc: ['Weighted average cost of capital (WACC)', 'Chi phí vốn bình quân gia quyền', 'wd x rd x (1 - t) + wp x rp + we x re; lợi suất tối thiểu trên tài sản để thỏa mãn mọi nhà cung cấp vốn.'],
    afterdebt: ['After-tax cost of debt', 'Chi phí nợ sau thuế', 'rd x (1 - t); thấp hơn lãi suất vay vì lãi vay được trừ thuế.'],
    costequity: ['Cost of equity', 'Chi phí vốn chủ sở hữu', 'Lợi suất cổ đông yêu cầu; thường ước tính bằng CAPM.'],
    targetcs: ['Target capital structure', 'Cấu trúc vốn mục tiêu', 'Tỷ lệ nợ/vốn chủ mà công ty hướng tới trong dài hạn; dùng làm tỷ trọng trong WACC.'],
    busrisk: ['Business risk', 'Rủi ro kinh doanh', 'Biến động của lợi nhuận hoạt động do nhu cầu, giá bán và cơ cấu chi phí; không phụ thuộc vào nợ.'],
    lifecycle: ['Company life cycle', 'Vòng đời doanh nghiệp', 'Các giai đoạn khởi nghiệp, tăng trưởng, trưởng thành; mỗi giai đoạn có khả năng vay khác nhau.'],
    mm1: ['MM Proposition I', 'Mệnh đề MM thứ nhất', 'Không thuế: VL = VU. Có thuế: VL = VU + tD.'],
    mm2: ['MM Proposition II', 'Mệnh đề MM thứ hai', 'Chi phí vốn chủ tăng tuyến tính theo D/E: re = r0 + (r0 - rd)(1 - t)D/E (t = 0 nếu không thuế).'],
    finrisk: ['Financial risk', 'Rủi ro tài chính', 'Rủi ro thêm cho cổ đông do dùng nợ (nghĩa vụ trả lãi cố định).'],
    taxshield: ['Debt tax shield', 'Lá chắn thuế từ nợ', 'Thuế tiết kiệm được nhờ lãi vay được trừ; giá trị bằng t x D với nợ vĩnh viễn.'],
    distress: ['Costs of financial distress', 'Chi phí kiệt quệ tài chính', 'Chi phí trực tiếp và gián tiếp phát sinh khi công ty có nguy cơ không trả được nợ.'],
    agency: ['Agency costs', 'Chi phí đại diện', 'Chi phí do xung đột lợi ích giữa ban quản lý và cổ đông, chủ nợ.'],
    tradeoff: ['Static trade-off theory', 'Lý thuyết đánh đổi tĩnh', 'VL = VU + tD - PV(chi phí kiệt quệ); có một mức nợ tối ưu.'],
    optimalcs: ['Optimal capital structure', 'Cấu trúc vốn tối ưu', 'Tỷ lệ nợ làm giá trị công ty lớn nhất và WACC nhỏ nhất.'],
    asym: ['Information asymmetry', 'Thông tin bất cân xứng', 'Ban quản lý biết nhiều thông tin hơn nhà đầu tư bên ngoài.'],
    signal: ['Signaling', 'Phát tín hiệu', 'Quyết định tài trợ truyền đạt thông tin của ban quản lý ra thị trường.'],
    pecking: ['Pecking order theory', 'Lý thuyết trật tự phân hạng', 'Ưu tiên vốn nội bộ, rồi nợ, cuối cùng là cổ phiếu mới.'],
  };

  const practice = [
    { q: 'Cấu trúc vốn mục tiêu 40% nợ, 60% vốn chủ. Lãi suất vay trước thuế 6%, thuế suất 25%, chi phí vốn chủ 13%. WACC gần nhất với:', choices: ['9,60%', '10,20%', '8,40%'], answer: 0, explain: 'WACC = 0,4 x 6% x 0,75 + 0,6 x 13% = 1,8% + 7,8% = 9,6%. Lựa chọn 10,20% quên (1 - t). Lựa chọn 8,40% nhân chi phí nợ với t thay vì (1 - t): 0,4 x 6% x 0,25 + 7,8%.' },
    { q: 'Công ty có trái phiếu mệnh giá (sổ sách) 400, giá trị thị trường 380; 50 cổ phiếu giá 12 (vốn chủ sổ sách 300). Không biết cấu trúc vốn mục tiêu. Tỷ trọng nợ dùng cho WACC gần nhất với:', choices: ['57,14%', '40,00%', '38,78%'], answer: 2, explain: 'Dùng giá trị thị trường: 380 / (380 + 50 x 12) = 380/980 = 38,78%. Lựa chọn 57,14% dùng giá trị sổ sách cả hai (400/700). Lựa chọn 40,00% trộn nợ sổ sách với vốn chủ thị trường (400/1.000).' },
    { q: 'Theo MM khi không có thuế, công ty có r0 = 11%, chi phí nợ 5%, D/E = 0,5. Chi phí vốn chủ gần nhất với:', choices: ['11,00%', '14,00%', '16,50%'], answer: 1, explain: 're = 11% + (11% - 5%) x 0,5 = 14%. Lựa chọn 11,00% là r0 (bỏ qua rủi ro tài chính). Lựa chọn 16,50% nhân r0 với (1 + D/E), không phải công thức MM II.' },
    { q: 'Công ty không vay có giá trị 2.000. Công ty vay nợ vĩnh viễn 800 để mua lại cổ phiếu. Thuế suất 25%, các giả định khác của MM giữ nguyên. Giá trị công ty sau khi vay gần nhất với:', choices: ['2.200', '2.000', '2.800'], answer: 0, explain: 'MM I có thuế: VL = VU + tD = 2.000 + 0,25 x 800 = 2.200. Lựa chọn 2.000 là kết luận MM không thuế. Lựa chọn 2.800 cộng cả khoản nợ vào giá trị (nhầm việc vay tiền tự tạo ra giá trị).' },
    { q: 'Theo MM có thuế: r0 = 10%, chi phí nợ 6%, thuế suất 25%, D/E = 1. Chi phí vốn chủ gần nhất với:', choices: ['13,00%', '14,00%', '10,00%'], answer: 0, explain: 're = 10% + (10% - 6%) x (1 - 0,25) x 1 = 13%. Lựa chọn 14,00% dùng công thức không thuế. Lựa chọn 10,00% là r0.' },
    { q: 'Theo MM Proposition I không có thuế, khi công ty tăng tỷ lệ nợ thì WACC:', choices: ['Giảm vì nợ rẻ hơn vốn chủ', 'Tăng vì vốn chủ trở nên rủi ro hơn', 'Không đổi'], answer: 2, explain: 'Không thuế, chi phí vốn chủ tăng vừa đủ bù cho phần nợ rẻ hơn, nên WACC không đổi và giá trị công ty không đổi. Phương án "giảm vì nợ rẻ hơn" đúng khi có thuế (MM có thuế). Phương án "tăng vì vốn chủ rủi ro hơn" chỉ nhìn một vế: r_e tăng nhưng tỷ trọng nợ rẻ cũng tăng.' },
    { q: 'Theo lý thuyết đánh đổi tĩnh, cấu trúc vốn tối ưu đạt được khi:', choices: ['Công ty dùng 100% nợ để tối đa lá chắn thuế', 'Lợi ích thuế biên của nợ bằng chi phí kiệt quệ tài chính biên', 'Chi phí nợ trước thuế thấp nhất'], answer: 1, explain: 'Static trade-off cân bằng lá chắn thuế với chi phí kiệt quệ; tại điểm tối ưu lợi ích biên bằng chi phí biên, giá trị lớn nhất và WACC nhỏ nhất. Dùng 100% nợ là kết luận MM có thuế khi bỏ qua chi phí kiệt quệ. Chi phí nợ trước thuế thấp nhất không liên quan trực tiếp đến tối đa giá trị.' },
    { q: 'Theo lý thuyết trật tự phân hạng (pecking order), thứ tự ưu tiên nguồn vốn của công ty là:', choices: ['Lợi nhuận giữ lại, nợ, cổ phiếu mới', 'Cổ phiếu mới, nợ, lợi nhuận giữ lại', 'Nợ, lợi nhuận giữ lại, cổ phiếu mới'], answer: 0, explain: 'Công ty ưu tiên nguồn tiết lộ ít thông tin nhất: vốn nội bộ trước, rồi nợ, phát hành cổ phiếu mới là cuối cùng vì gửi tín hiệu cổ phiếu có thể đang bị định giá cao.' },
    { q: 'Một công ty công nghệ khởi nghiệp, dòng tiền hoạt động âm, ít tài sản hữu hình. Cấu trúc vốn điển hình nhất là:', choices: ['Chủ yếu vay ngân hàng có tài sản đảm bảo', 'Chủ yếu trái phiếu dài hạn không đảm bảo', 'Chủ yếu vốn chủ sở hữu, ví dụ từ quỹ đầu tư mạo hiểm'], answer: 2, explain: 'Giai đoạn khởi nghiệp rủi ro kinh doanh rất cao, dòng tiền âm, không có tài sản đảm bảo nên khó vay; vốn chủ chiếm gần hết. Nợ có đảm bảo thường xuất hiện ở giai đoạn tăng trưởng; nợ không đảm bảo dài hạn phổ biến ở giai đoạn trưởng thành.' },
    { q: 'Theo quan điểm thông tin bất cân xứng, khi công ty công bố phát hành thêm cổ phiếu, giá cổ phiếu thường:', choices: ['Tăng vì công ty có thêm vốn để đầu tư', 'Giảm vì nhà đầu tư suy luận ban quản lý cho rằng cổ phiếu đang bị định giá cao', 'Không đổi vì theo MM cấu trúc vốn không ảnh hưởng giá trị'], answer: 1, explain: 'Ban quản lý biết nhiều hơn và có xu hướng bán cổ phiếu khi giá cao, nên phát hành cổ phiếu là tín hiệu tiêu cực. Phương án "không đổi" dựa vào MM, nhưng MM giả định thông tin đồng nhất, trái với tình huống đang xét.' },
  ];

  // Widget: MM với nợ và thuế suất thay đổi. EBIT 100 mãi mãi, r0 = 10%, rd = 6%.
  const widgets = {
    mmLever(el) {
      el.innerHTML = `
        <div class="w-row"><label>Nợ D: <b data-o="d">300</b><input type="range" min="0" max="600" step="25" value="300" data-i="d"></label>
        <label>Thuế suất t: <b data-o="t">25%</b><input type="range" min="0" max="40" step="5" value="25" data-i="t"></label>
        <label>EBIT 100 mãi mãi<br>r0 = 10%, rd = 6%</label></div>
        <div class="w-out"><div class="w-price" data-o="p"></div><div class="w-bar"><span data-o="bar"></span><i></i></div><div class="w-note" data-o="note"></div></div>`;
      const q = s => el.querySelector(s);
      const fmt = (x, d = 2) => x.toFixed(d).replace('.', ',');
      const upd = () => {
        const D = +q('[data-i="d"]').value, tx = +q('[data-i="t"]').value / 100;
        const VU = (100 * (1 - tx)) / 0.10, VL = VU + tx * D, E = VL - D;
        const re = 0.10 + (0.10 - 0.06) * (1 - tx) * (D / E), w = (D / VL) * 0.06 * (1 - tx) + (E / VL) * re;
        q('[data-o="d"]').textContent = D;
        q('[data-o="t"]').textContent = `${Math.round(tx * 100)}%`;
        q('[data-o="p"]').textContent = `VU = ${fmt(VU, 0)} ; VL = ${fmt(VL, 0)} ; E = ${fmt(E, 0)}`;
        q('[data-o="bar"]').style.width = `${Math.min(100, (D / VL) * 100)}%`;
        q('[data-o="note"]').textContent = `Tỷ lệ nợ D/V = ${fmt((D / VL) * 100, 1)}% (thanh trên). re = ${fmt(re * 100)}%, WACC = ${fmt(w * 100)}%. ${tx === 0 ? 'Không thuế: WACC luôn bằng 10% dù vay bao nhiêu.' : 'Có thuế: vay càng nhiều thì WACC càng giảm và VL càng tăng (chưa tính chi phí kiệt quệ).'}`;
      };
      el.addEventListener('input', upd);
      upd();
    },
  };

  window.LESSONS['CF-06'] = {
    moduleId: 'CF-06',
    calculator: 'BA II Plus',
    warmup: [
      'Ôn CF-05: lãi suất chiết khấu trong NPV phản ánh điều gì? Vì sao không trừ lãi vay khỏi dòng tiền dự án?',
      'Ôn kiến thức nền: viết công thức CAPM. Beta 1,2 nghĩa là gì?',
      'Đoán trước: nợ rẻ hơn vốn chủ. Vậy công ty có nên vay càng nhiều càng tốt không? Ghi lại lý do của bạn rồi kiểm tra sau bài.',
    ],
    sections,
    glossary,
    practice,
    widgets,
    slides: [],
    wrapup: [
      'Không nhìn tài liệu: viết MM I và MM II cho cả hai trường hợp không thuế và có thuế.',
      'Giải thích bằng lời vì sao WACC không đổi khi không có thuế nhưng lại giảm khi có thuế.',
      'So sánh static trade-off và pecking order: mỗi lý thuyết dự đoán gì về một công ty rất có lãi?',
    ],
  };
}());
