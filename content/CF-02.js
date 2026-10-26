// Bài giảng CF-02 - Investors and Other Stakeholders (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t } = window.CFAH;

  // Biểu đồ payoff của chủ nợ và cổ đông khi nợ phải trả = 600.
  const payoff = (() => {
    const W = 560, H = 260, l = 50, r = 540, tp = 20, b = 220, vmax = 1200;
    const X = v => l + (v / vmax) * (r - l), Y = v => b - (v / vmax) * (b - tp);
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv" style="max-height:300px" role="img" aria-label="Payoff của chủ nợ và cổ đông theo giá trị công ty">`;
    [0, 300, 600, 900, 1200].forEach(v => { s += `<line x1="${l}" y1="${Y(v)}" x2="${r}" y2="${Y(v)}" class="sv-grid"/><text x="${l - 8}" y="${Y(v) + 5}" class="sv-muted" text-anchor="end">${v}</text><text x="${X(v)}" y="${b + 20}" class="sv-muted">${v}</text>`; });
    s += `<line x1="${l}" y1="${b}" x2="${r}" y2="${b}" class="sv-axis"/><line x1="${l}" y1="${tp}" x2="${l}" y2="${b}" class="sv-axis"/>`;
    s += `<polyline points="${X(0)},${Y(0)} ${X(600)},${Y(600)} ${X(1200)},${Y(600)}" class="sv-up" style="fill:none"/>`;
    s += `<polyline points="${X(0)},${Y(0) - 2} ${X(600)},${Y(0) - 2} ${X(1200)},${Y(600)}" class="sv-down" style="fill:none"/>`;
    s += `<line x1="${X(600)}" y1="${tp}" x2="${X(600)}" y2="${b}" class="sv-dash"/>`;
    s += `<text x="${X(950)}" y="${Y(600) - 12}" class="sv-txt sv-t-up">Chủ nợ: tối đa 600</text><text x="${X(1000)}" y="${Y(250)}" class="sv-txt sv-t-down">Cổ đông: V - 600</text>`;
    s += `<text x="${(l + r) / 2}" y="${H - 2}" class="sv-muted">Giá trị công ty khi nợ đáo hạn (V)</text>`;
    return `${s}</svg>`;
  })();

  const sections = [
    {
      title: '1. Bức tranh lớn',
      minutes: 5,
      html: `
<p>CF-01 cho biết công ty là pháp nhân riêng do cổ đông sở hữu. Nhưng công ty không chỉ phục vụ cổ đông: nó vay tiền của chủ nợ, thuê nhân viên, mua hàng của nhà cung cấp, bán cho khách hàng và nộp thuế cho Nhà nước. Mỗi nhóm có quyền lợi riêng.</p>
<div class="key">Mỗi ${t('stakeholder', 'bên liên quan (stakeholder)')} đóng góp một thứ cho công ty và đòi lại một thứ. Hiểu <b>ai đòi gì, ưu tiên ra sao, và khi nào lợi ích của họ va chạm</b> là nền tảng để phân tích quản trị (CF-03) và rủi ro tín dụng, cổ phiếu sau này.</div>
<ol>
  <li><b>Chủ nợ và cổ đông</b>: hai nhóm cấp vốn, quyền đòi và động cơ ngược nhau. Ứng với LOS 1 (phần 2, 3).</li>
  <li><b>Các nhóm bên liên quan</b> và lợi ích của họ. Ứng với LOS 2 (phần 4).</li>
  <li><b>Yếu tố ESG</b> mà nhà đầu tư xem xét khi phân tích công ty. Ứng với LOS 3 (phần 5).</li>
</ol>`,
    },
    {
      title: '2. Quyền đòi tài chính của chủ nợ và cổ đông',
      minutes: 18,
      html: `
<p>Cả chủ nợ (lenders, debtholders) và cổ đông (shareholders) đều đưa tiền cho công ty, nhưng hợp đồng của họ khác hẳn nhau:</p>
<table class="plain"><thead><tr><th>Tiêu chí</th><th>Chủ nợ</th><th>Cổ đông</th></tr></thead><tbody>
<tr><td>Bản chất quyền đòi</td><td>${t('contractual', 'Quyền đòi theo hợp đồng (contractual claim)')}: lãi và gốc đã định trước</td><td>${t('residual', 'Quyền đòi phần còn lại (residual claim)')}: những gì còn lại sau khi trả hết nợ</td></tr>
<tr><td>Thứ tự ưu tiên</td><td>${t('priority', 'Ưu tiên')} cao hơn khi công ty phá sản</td><td>Được trả sau cùng</td></tr>
<tr><td>Lợi nhuận</td><td>Cố định, có trần: tối đa là lãi + gốc</td><td>Biến động, không có trần</td></tr>
<tr><td>Rủi ro và chi phí vốn</td><td>Thấp hơn, nên lãi suất yêu cầu thấp hơn</td><td>Cao hơn, nên lợi suất yêu cầu cao hơn</td></tr>
<tr><td>Độ nhạy với giá trị công ty</td><td>Ít thay đổi, trừ khi công ty gặp khó khăn tài chính</td><td>Hấp thụ gần như toàn bộ biến động giá trị công ty</td></tr>
<tr><td>Quyền kiểm soát</td><td>Không biểu quyết; bảo vệ qua ${t('covenant', 'điều khoản ràng buộc (covenant)')} và tài sản bảo đảm</td><td>Biểu quyết bầu HĐQT và các vấn đề lớn</td></tr>
</tbody></table>
<div class="example"><div class="ex-h">Ví dụ 2.1 - Ai nhận bao nhiêu?</div>
<p>Công ty phải trả chủ nợ 600 (gốc và lãi) vào cuối năm. Giá trị công ty cuối năm có thể là 400, 600, 800 hoặc 1.200. Chủ nợ và cổ đông nhận bao nhiêu trong từng trường hợp?</p>
<details><summary>Xem lời giải</summary>
<table class="plain"><thead><tr><th>Giá trị công ty</th><th>400</th><th>600</th><th>800</th><th>1.200</th></tr></thead><tbody>
<tr><td>Chủ nợ = min(V; 600)</td><td>400</td><td>600</td><td>600</td><td>600</td></tr>
<tr><td>Cổ đông = max(V - 600; 0)</td><td>0</td><td>0</td><td>200</td><td>600</td></tr></tbody></table>
<p>Khi công ty làm ăn tốt (800 lên 1.200), toàn bộ phần tăng thêm thuộc về cổ đông; chủ nợ vẫn chỉ nhận 600. Khi công ty khó khăn (400), chủ nợ chịu lỗ 200 (mất 33% số phải thu), còn cổ đông mất hết nhưng không phải bù thêm nhờ trách nhiệm hữu hạn.</p></details></div>
${payoff}
<p>Hình dạng payoff giải thích <b>động cơ</b> của mỗi bên:</p>
<ul>
<li><b>Chủ nợ</b> chỉ lo phần đuôi xấu: họ quan tâm đến khả năng trả nợ, dòng tiền ổn định, tài sản bảo đảm, đòn bẩy thấp. Họ không được lợi gì thêm khi công ty tăng trưởng vượt kỳ vọng.</li>
<li><b>Cổ đông</b> có lợi không giới hạn ở phía trên và lỗ bị chặn ở 0. Họ quan tâm đến tăng trưởng, lợi nhuận và giá cổ phiếu, và có động cơ <b>chấp nhận rủi ro cao hơn</b>, dùng nhiều nợ hơn, chia cổ tức nhiều hơn.</li>
</ul>
<p class="tip"><b>Liên hệ phái sinh:</b> payoff của cổ đông giống payoff của ${t('callopt', 'quyền chọn mua (call option)')} trên tài sản công ty, giá thực hiện bằng số nợ phải trả. Rủi ro càng cao, quyền chọn mua càng có giá. Bạn sẽ gặp lại ý này ở phần Derivatives và Fixed Income.</p>
<h4>Chủ nợ công và chủ nợ tư</h4>
<p>Người nắm ${t('bond', 'trái phiếu')} niêm yết (public debt) thường phân tán, chỉ có thông tin công khai và bảo vệ mình bằng điều khoản trong hợp đồng phát hành. Ngân hàng và quỹ cho vay trực tiếp (private debt) thường có quan hệ gần với công ty, được xem thông tin nội bộ và giám sát chặt hơn.</p>`,
    },
    {
      title: '3. Khi lợi ích của chủ nợ và cổ đông va chạm',
      minutes: 10,
      html: `
<p>Vì payoff khác nhau, cùng một quyết định có thể làm cổ đông giàu lên trong khi chủ nợ nghèo đi.</p>
<div class="example"><div class="ex-h">Ví dụ 3.1 - Chọn dự án an toàn hay rủi ro</div>
<p>Công ty nợ 600 đáo hạn cuối năm. Có hai dự án loại trừ nhau:</p>
<ul><li>Dự án An toàn: giá trị công ty chắc chắn là 800.</li><li>Dự án Rủi ro: giá trị công ty là 300 hoặc 1.100, xác suất mỗi khả năng 50%.</li></ul>
<p>Dự án nào tạo nhiều giá trị hơn? Cổ đông thích dự án nào?</p>
<details><summary>Xem lời giải</summary>
<table class="plain"><thead><tr><th></th><th>Giá trị kỳ vọng công ty</th><th>Chủ nợ (kỳ vọng)</th><th>Cổ đông (kỳ vọng)</th></tr></thead><tbody>
<tr><td>An toàn</td><td>800</td><td>600</td><td>200</td></tr>
<tr><td>Rủi ro</td><td>0,5 × 300 + 0,5 × 1.100 = 700</td><td>0,5 × 300 + 0,5 × 600 = 450</td><td>0,5 × 0 + 0,5 × 500 = 250</td></tr></tbody></table>
<p>Dự án Rủi ro <b>làm giảm</b> giá trị công ty 100, nhưng cổ đông vẫn thích nó vì phần kỳ vọng của họ tăng từ 200 lên 250. Chủ nợ mất 150: một phần được chuyển sang cổ đông (50), phần còn lại (100) là giá trị bị phá hủy.</p></details></div>
<p>Các tình huống va chạm điển hình:</p>
<ul>
<li><b>Tăng rủi ro kinh doanh</b> sau khi đã vay (như ví dụ trên).</li>
<li><b>Vay thêm nợ</b> làm giảm khả năng trả các khoản nợ cũ.</li>
<li><b>Chia cổ tức lớn hoặc mua lại cổ phiếu</b>: tiền rời công ty, tài sản bảo đảm cho chủ nợ giảm.</li>
</ul>
<p class="warn"><b>Bẫy:</b> nhiều người nghĩ cổ đông luôn muốn giá trị công ty lớn nhất. Khi công ty có nhiều nợ, cổ đông có thể thích một quyết định <b>làm giảm</b> tổng giá trị nhưng chuyển giá trị từ chủ nợ sang mình. Đó là lý do chủ nợ đòi covenant hạn chế cổ tức, nợ mới và bán tài sản. Cơ chế bảo vệ chi tiết học ở CF-03.</p>`,
    },
    {
      title: '4. Các nhóm bên liên quan và lợi ích của họ',
      minutes: 20,
      html: `
<p>Ngoài người cấp vốn, công ty có các bên liên quan nội bộ và bên ngoài:</p>
<table class="plain"><thead><tr><th>Nhóm</th><th>Đóng góp / vai trò</th><th>Lợi ích chính</th></tr></thead><tbody>
<tr><td>Cổ đông</td><td>Vốn chủ sở hữu; quyền biểu quyết</td><td>Lợi nhuận, tăng trưởng, giá cổ phiếu dài hạn</td></tr>
<tr><td>Chủ nợ (ngân hàng, trái chủ)</td><td>Vốn vay</td><td>Nhận lãi và gốc đúng hạn, rủi ro vỡ nợ thấp</td></tr>
<tr><td>${t('board', 'Hội đồng quản trị')}</td><td>Giám sát ban điều hành, định chiến lược, thuê và sa thải CEO</td><td>Bảo vệ lợi ích cổ đông (và cân nhắc các bên khác); danh tiếng, thù lao</td></tr>
<tr><td>Ban điều hành cấp cao</td><td>Ra quyết định hằng ngày</td><td>Thù lao, thưởng, quyền lực, an toàn công việc, uy tín nghề nghiệp</td></tr>
<tr><td>Nhân viên</td><td>Sức lao động, kỹ năng (vốn con người)</td><td>Lương, phúc lợi, việc làm ổn định, môi trường làm việc, phát triển nghề nghiệp</td></tr>
<tr><td>Khách hàng</td><td>Doanh thu</td><td>Sản phẩm an toàn, chất lượng, giá hợp lý, dịch vụ sau bán, bảo mật dữ liệu</td></tr>
<tr><td>Nhà cung cấp</td><td>Nguyên liệu, dịch vụ; thường cấp ${t('tradecredit', 'tín dụng thương mại')}</td><td>Được thanh toán đúng hạn, quan hệ lâu dài, nhu cầu ổn định</td></tr>
<tr><td>Chính phủ, cơ quan quản lý</td><td>Luật lệ, hạ tầng, giấy phép</td><td>Thuế, việc làm, tuân thủ pháp luật, ổn định hệ thống</td></tr>
</tbody></table>
<h4>Bên liên quan trong và ngoài</h4>
<p>Nhóm nội bộ gồm HĐQT, ban điều hành và nhân viên; nhóm bên ngoài gồm khách hàng, nhà cung cấp, chính phủ và cộng đồng. Cổ đông và chủ nợ là người cấp vốn. Có thể xếp nhân viên, khách hàng, nhà cung cấp vào nhóm có <b>quan hệ hợp đồng</b> với công ty: họ là "chủ nợ ngầm" theo nghĩa công ty cam kết trả lương, giao hàng, thanh toán.</p>
<h4>Hai quan điểm về mục tiêu của công ty</h4>
<ul>
<li>${t('shtheory', 'Lý thuyết cổ đông (shareholder theory)')}: mục tiêu chính là tối đa hóa giá trị cho cổ đông; các bên khác được bảo vệ bằng hợp đồng và luật.</li>
<li>${t('stktheory', 'Lý thuyết các bên liên quan (stakeholder theory)')}: công ty nên cân bằng lợi ích của mọi bên liên quan, không chỉ cổ đông.</li>
</ul>
<p>Trong dài hạn, hai quan điểm thường gặp nhau: đối xử tệ với nhân viên, khách hàng hay nhà cung cấp cuối cùng sẽ làm giảm giá trị cổ đông. Xung đột thật sự thường xuất hiện trong <b>ngắn hạn</b>, ví dụ cắt giảm lương để tăng lợi nhuận quý.</p>
<div class="example"><div class="ex-h">Ví dụ 4.1 - So sánh lợi ích</div>
<p>Công ty định kéo dài thời hạn thanh toán cho nhà cung cấp từ 30 lên 90 ngày. Nhóm nào được lợi, nhóm nào chịu thiệt?</p>
<details><summary>Xem lời giải</summary><p>Cổ đông được lợi trước mắt (công ty giữ tiền lâu hơn, nhu cầu vay giảm). Nhà cung cấp chịu thiệt (vốn bị chiếm dụng lâu hơn, rủi ro không được trả tăng). Chủ nợ có thể được lợi nhẹ vì thanh khoản công ty tốt hơn. Nếu nhà cung cấp phản ứng bằng cách tăng giá hoặc cắt hàng, cả cổ đông và khách hàng đều thiệt. Phần chi phí tín dụng thương mại học ở CF-04.</p></details></div>`,
    },
    {
      title: '5. Yếu tố ESG nhà đầu tư xem xét',
      minutes: 19,
      html: `
<p>${t('esg', 'ESG')} là ba nhóm yếu tố phi tài chính có thể tác động đến dòng tiền, rủi ro và chi phí vốn của công ty. Nhà đầu tư cả cổ phiếu lẫn trái phiếu đều xem xét ESG, nhưng góc nhìn khác nhau: cổ đông quan tâm cả rủi ro lẫn cơ hội tăng trưởng, chủ nợ chủ yếu lo rủi ro giảm giá.</p>
<h4>E - Môi trường (Environmental)</h4>
<ul>
<li>Vấn đề: biến đổi khí hậu, phát thải khí nhà kính, ô nhiễm, sử dụng tài nguyên và nước, chất thải, đa dạng sinh học.</li>
<li>${t('physical', 'Rủi ro vật lý (physical risk)')}: thiệt hại trực tiếp từ bão, lũ, hạn hán, nước biển dâng lên tài sản và hoạt động.</li>
<li>${t('transition', 'Rủi ro chuyển đổi (transition risk)')}: thay đổi chính sách, công nghệ, sở thích người tiêu dùng khi nền kinh tế chuyển sang ít carbon, ví dụ thuế carbon.</li>
<li>${t('stranded', 'Tài sản mắc kẹt (stranded assets)')}: tài sản mất giá trị trước thời hạn, ví dụ mỏ than hay nhà máy nhiệt điện không còn được phép khai thác.</li>
</ul>
<h4>S - Xã hội (Social)</h4>
<ul>
<li>Cách công ty đối xử với nhân viên, khách hàng, cộng đồng và chuỗi cung ứng.</li>
<li>Vấn đề: quản lý vốn con người, an toàn lao động, quan hệ lao động, đa dạng và hòa nhập, an toàn sản phẩm, bảo mật dữ liệu khách hàng, lao động trẻ em trong chuỗi cung ứng, quan hệ với cộng đồng địa phương.</li>
<li>Làm tốt giúp tăng năng suất, giữ chân nhân tài, tăng lòng trung thành của khách hàng; làm kém dẫn đến kiện tụng, đình công, thu hồi sản phẩm, mất uy tín.</li>
</ul>
<h4>G - Quản trị (Governance)</h4>
<ul>
<li>Cách công ty được điều hành và giám sát.</li>
<li>Vấn đề: cơ cấu và tính độc lập của HĐQT, thù lao lãnh đạo, quyền cổ đông, cơ cấu sở hữu (cổ đông chi phối, cổ phiếu hai loại), kiểm soát nội bộ, kiểm toán, chất lượng báo cáo, đạo đức kinh doanh, chống tham nhũng, giao dịch bên liên quan.</li>
<li>Quản trị kém làm tăng rủi ro gian lận, xung đột đại diện và rủi ro pháp lý. Chi tiết học ở CF-03.</li>
</ul>
<h4>Tính trọng yếu (materiality)</h4>
<p>Không phải yếu tố ESG nào cũng quan trọng với mọi công ty. Một yếu tố là ${t('material', 'trọng yếu (material)')} nếu nó có thể ảnh hưởng đáng kể đến kết quả tài chính hoặc giá trị công ty. Mức độ trọng yếu <b>khác nhau theo ngành</b>:</p>
<table class="plain"><thead><tr><th>Ngành</th><th>Yếu tố thường trọng yếu</th></tr></thead><tbody>
<tr><td>Dầu khí, than, điện</td><td>Phát thải, rủi ro chuyển đổi, tài sản mắc kẹt, an toàn vận hành</td></tr>
<tr><td>Ngân hàng</td><td>Bảo mật dữ liệu, cho vay có trách nhiệm, quản trị rủi ro, đạo đức bán hàng</td></tr>
<tr><td>Dệt may, giày dép</td><td>Điều kiện lao động trong chuỗi cung ứng, sử dụng nước, hóa chất</td></tr>
<tr><td>Dược phẩm</td><td>An toàn sản phẩm, giá thuốc, tiếp cận thuốc, đạo đức thử nghiệm</td></tr>
<tr><td>Công nghệ</td><td>Bảo mật và quyền riêng tư dữ liệu, giữ chân nhân tài, tiêu thụ năng lượng của trung tâm dữ liệu</td></tr>
</tbody></table>
<h4>ESG tác động đến định giá thế nào?</h4>
<ul>
<li><b>Dòng tiền</b>: tiền phạt, chi phí làm sạch, bồi thường, đầu tư bắt buộc, mất doanh thu.</li>
<li><b>Rủi ro và chi phí vốn</b>: công ty có rủi ro ESG cao có thể bị yêu cầu lãi suất, lợi suất cao hơn.</li>
<li><b>Nhà đầu tư</b> đưa ESG vào phân tích bằng nhiều cách: tích hợp vào dự báo và lãi suất chiết khấu (ESG integration), loại trừ ngành (exclusionary screening), chọn công ty tốt nhất ngành, đầu tư theo chủ đề hoặc tác động. Các phương pháp này học kỹ ở phần Portfolio Management.</li>
</ul>
<p class="tip"><b>Ví dụ:</b> một công ty khai thác mỏ bị vỡ đập chứa chất thải. Hậu quả ESG chuyển thành con số tài chính: tiền phạt và bồi thường (dòng tiền ra), đình chỉ mỏ (doanh thu giảm), xếp hạng tín nhiệm bị hạ (chi phí nợ tăng), giá cổ phiếu giảm mạnh.</p>`,
    },
    {
      title: '6. Tóm tắt và bẫy thường gặp',
      minutes: 8,
      html: `
<table class="plain"><thead><tr><th>Tình huống</th><th>Nhớ</th></tr></thead><tbody>
<tr><td>Chủ nợ</td><td>Quyền đòi hợp đồng, ưu tiên trước, lợi nhuận có trần, lo phần đuôi xấu</td></tr>
<tr><td>Cổ đông</td><td>Quyền đòi phần còn lại, trả sau cùng, lợi nhuận không trần, lỗ chặn ở 0</td></tr>
<tr><td>Ai hấp thụ biến động giá trị?</td><td>Cổ đông, trừ khi công ty gần vỡ nợ (lúc đó chủ nợ chịu lỗ)</td></tr>
<tr><td>Cổ đông thích rủi ro</td><td>Có thể chọn dự án giá trị thấp hơn nhưng rủi ro hơn, chuyển giá trị từ chủ nợ</td></tr>
<tr><td>Chủ nợ tự bảo vệ</td><td>Covenant, tài sản bảo đảm, hạn chế cổ tức và nợ mới</td></tr>
<tr><td>Bên liên quan</td><td>Cổ đông, chủ nợ, HĐQT, ban điều hành, nhân viên, khách hàng, nhà cung cấp, chính phủ</td></tr>
<tr><td>Shareholder và stakeholder theory</td><td>Tối đa giá trị cổ đông và cân bằng lợi ích mọi bên</td></tr>
<tr><td>Rủi ro vật lý và chuyển đổi</td><td>Thiệt hại do thời tiết và thiệt hại do chính sách, công nghệ hướng đến ít carbon</td></tr>
<tr><td>Trọng yếu</td><td>Yếu tố ESG quan trọng khác nhau theo ngành</td></tr>
</tbody></table>
<p>Tiếp theo: tab <b>Luyện tập</b> 10 câu. CF-03 sẽ học các cơ chế quản trị để xử lý những xung đột vừa thấy.</p>`,
    },
  ];

  const glossary = {
    stakeholder: ['Stakeholder', 'Bên liên quan', 'Cá nhân hay nhóm có quyền lợi gắn với hoạt động và kết quả của công ty.'],
    contractual: ['Contractual claim', 'Quyền đòi theo hợp đồng', 'Quyền nhận các khoản đã định trước (lãi, gốc) theo hợp đồng.'],
    residual: ['Residual claim', 'Quyền đòi phần còn lại', 'Quyền với phần giá trị còn lại sau khi đã trả mọi nghĩa vụ khác; của cổ đông.'],
    priority: ['Priority of claims', 'Thứ tự ưu tiên', 'Thứ tự được trả khi công ty thanh lý: chủ nợ trước, cổ đông sau cùng.'],
    covenant: ['Covenant', 'Điều khoản ràng buộc', 'Điều khoản trong hợp đồng vay buộc công ty làm hoặc cấm công ty làm một số việc để bảo vệ chủ nợ.'],
    callopt: ['Call option', 'Quyền chọn mua', 'Quyền mua tài sản ở giá thực hiện; payoff max(S - K, 0), giống payoff của cổ đông.'],
    bond: ['Bond', 'Trái phiếu', 'Chứng khoán nợ trả lãi định kỳ và gốc khi đáo hạn.'],
    board: ['Board of directors', 'Hội đồng quản trị', 'Do cổ đông bầu, giám sát ban điều hành và định hướng chiến lược.'],
    tradecredit: ['Trade credit', 'Tín dụng thương mại', 'Nhà cung cấp cho công ty mua hàng trước, trả tiền sau.'],
    shtheory: ['Shareholder theory', 'Lý thuyết cổ đông', 'Mục tiêu chính của công ty là tối đa hóa giá trị cho cổ đông.'],
    stktheory: ['Stakeholder theory', 'Lý thuyết các bên liên quan', 'Công ty nên cân bằng lợi ích của mọi bên liên quan, không chỉ cổ đông.'],
    esg: ['Environmental, social, and governance (ESG)', 'Môi trường, xã hội, quản trị', 'Ba nhóm yếu tố phi tài chính có thể ảnh hưởng đến rủi ro và giá trị công ty.'],
    physical: ['Physical risk', 'Rủi ro vật lý', 'Thiệt hại trực tiếp do thời tiết cực đoan và biến đổi khí hậu gây ra.'],
    transition: ['Transition risk', 'Rủi ro chuyển đổi', 'Rủi ro từ thay đổi chính sách, công nghệ, thị trường khi chuyển sang nền kinh tế ít carbon.'],
    stranded: ['Stranded assets', 'Tài sản mắc kẹt', 'Tài sản mất giá trị hoặc không thể sử dụng trước thời hạn do thay đổi môi trường, quy định.'],
    material: ['Materiality', 'Tính trọng yếu', 'Yếu tố đủ lớn để ảnh hưởng đáng kể đến kết quả tài chính hoặc giá trị công ty.'],
  };

  const practice = [
    { q: 'So với cổ đông, chủ nợ của một công ty:', choices: ['Có quyền đòi phần còn lại và lợi nhuận không giới hạn', 'Được ưu tiên trả trước và có lợi nhuận tối đa cố định', 'Hấp thụ phần lớn biến động giá trị công ty'], answer: 1, explain: 'Chủ nợ có quyền đòi theo hợp đồng, ưu tiên trước, lợi nhuận có trần là lãi cộng gốc. Quyền đòi phần còn lại với lợi nhuận không giới hạn và việc hấp thụ phần lớn biến động giá trị mô tả cổ đông.' },
    { q: 'Công ty nợ 500 đáo hạn cuối năm. Giá trị công ty cuối năm là 350. Chủ nợ và cổ đông nhận lần lượt:', choices: ['350 và 0', '500 và -150', '350 và -150'], answer: 0, explain: 'Chủ nợ nhận min(350; 500) = 350, cổ đông nhận max(350 - 500; 0) = 0. Nhờ trách nhiệm hữu hạn, cổ đông không phải bù thêm 150 nên các lựa chọn có -150 sai.' },
    { q: 'Công ty nợ 500. Dự án An toàn cho giá trị công ty chắc chắn 750. Dự án Rủi ro cho 300 hoặc 1.100 với xác suất bằng nhau. Giá trị kỳ vọng của cổ phần nếu chọn dự án Rủi ro là:', choices: ['200', '250', '300'], answer: 2, explain: 'Cổ phần = 0,5 x max(300 - 500; 0) + 0,5 x (1.100 - 500) = 300. Lựa chọn 200 lấy giá trị kỳ vọng công ty 700 trừ 500, bỏ qua trách nhiệm hữu hạn. Lựa chọn 250 là cổ phần của dự án An toàn. Cổ đông thích dự án Rủi ro dù nó làm giảm giá trị công ty.' },
    { q: 'Quyết định nào có khả năng làm lợi cho cổ đông nhưng gây thiệt cho chủ nợ hiện hữu?', choices: ['Phát hành cổ phiếu mới để trả bớt nợ', 'Giữ lại toàn bộ lợi nhuận, không chia cổ tức', 'Vay thêm nợ để chi trả cổ tức đặc biệt'], answer: 2, explain: 'Vay thêm để chia cổ tức vừa tăng đòn bẩy vừa đưa tiền ra khỏi công ty, làm giảm khả năng trả nợ cũ. Phát hành cổ phiếu để trả nợ và giữ lại lợi nhuận làm công ty an toàn hơn, có lợi cho chủ nợ.' },
    { q: 'Lý thuyết các bên liên quan (stakeholder theory) cho rằng:', choices: ['Công ty nên cân bằng lợi ích của cổ đông, nhân viên, khách hàng, nhà cung cấp và các bên khác', 'Mục tiêu duy nhất của công ty là tối đa hóa giá cổ phiếu', 'Chỉ người cấp vốn mới là bên liên quan'], answer: 0, explain: 'Stakeholder theory mở rộng mục tiêu ra mọi bên liên quan. "Mục tiêu duy nhất là tối đa hóa giá cổ phiếu" là shareholder theory. Phương án "chỉ người cấp vốn" sai vì nhân viên, khách hàng, nhà cung cấp, chính phủ cũng là bên liên quan.' },
    { q: 'Lợi ích chính của nhà cung cấp đối với công ty là:', choices: ['Giá cổ phiếu tăng mạnh', 'Được thanh toán đúng hạn và có quan hệ kinh doanh ổn định', 'Quyền bầu thành viên hội đồng quản trị'], answer: 1, explain: 'Nhà cung cấp thường cấp tín dụng thương mại nên quan tâm đến việc được trả đúng hạn và nhu cầu ổn định. Giá cổ phiếu tăng là lợi ích của cổ đông; quyền bầu hội đồng quản trị là quyền của cổ đông.' },
    { q: 'Chính phủ ban hành thuế carbon làm chi phí của nhà máy nhiệt điện than tăng mạnh. Đây là ví dụ về:', choices: ['Rủi ro chuyển đổi', 'Rủi ro vật lý', 'Rủi ro quản trị'], answer: 0, explain: 'Thay đổi chính sách trên con đường chuyển sang kinh tế ít carbon là rủi ro chuyển đổi. Rủi ro vật lý là thiệt hại trực tiếp do thời tiết. Không liên quan đến quản trị công ty.' },
    { q: 'Yếu tố nào được xếp vào nhóm Xã hội (S) trong ESG?', choices: ['Tỷ lệ thành viên độc lập trong hội đồng quản trị', 'Lượng nước tiêu thụ trên mỗi đơn vị sản phẩm', 'Bảo mật dữ liệu khách hàng'], answer: 2, explain: 'Bảo mật dữ liệu khách hàng thuộc về cách công ty đối xử với khách hàng (S). Tỷ lệ thành viên độc lập trong hội đồng quản trị thuộc quản trị (G), lượng nước tiêu thụ thuộc môi trường (E).' },
    { q: 'Nhận định nào về tính trọng yếu (materiality) của yếu tố ESG là đúng nhất?', choices: ['Mọi yếu tố ESG đều trọng yếu như nhau với mọi công ty', 'Yếu tố trọng yếu khác nhau theo ngành, ví dụ phát thải quan trọng với công ty dầu khí hơn với ngân hàng', 'Chỉ yếu tố môi trường mới có thể trọng yếu'], answer: 1, explain: 'Một yếu tố trọng yếu khi nó ảnh hưởng đáng kể đến kết quả tài chính, và điều này phụ thuộc ngành. Yếu tố xã hội và quản trị cũng có thể trọng yếu, nên phương án "chỉ yếu tố môi trường" sai.' },
    { q: 'So với cổ đông, chủ nợ khi đánh giá ESG của công ty thường chú trọng hơn vào:', choices: ['Cơ hội tăng trưởng từ sản phẩm xanh', 'Mức tăng giá cổ phiếu khi xếp hạng ESG cải thiện', 'Các rủi ro ESG có thể làm giảm khả năng trả nợ'], answer: 2, explain: 'Lợi nhuận của chủ nợ có trần, nên họ quan tâm chủ yếu đến rủi ro giảm giá như tiền phạt, kiện tụng, tài sản mắc kẹt làm giảm khả năng trả nợ. Cơ hội tăng trưởng từ sản phẩm xanh và mức tăng giá cổ phiếu là mối quan tâm của cổ đông.' },
  ];

  window.LESSONS['CF-02'] = {
    moduleId: 'CF-02',
    calculator: 'Không cần máy tính',
    warmup: [
      'Ôn CF-01: vì sao cổ đông công ty chỉ chịu trách nhiệm hữu hạn? Điều đó ảnh hưởng gì đến chủ nợ?',
      'Nếu công ty bạn cho vay tiền làm ăn rất tốt, lợi nhuận tăng gấp đôi, bạn được lợi thêm bao nhiêu?',
      'Kể tên ít nhất 5 nhóm người có quyền lợi gắn với một ngân hàng thương mại.',
    ],
    sections,
    glossary,
    practice,
    widgets: {},
    slides: [],
    wrapup: [
      'Vẽ lại hai đường payoff của chủ nợ và cổ đông, giải thích vì sao cổ đông có thể thích rủi ro.',
      'Chọn một công ty bạn biết và nêu 2 yếu tố ESG trọng yếu nhất với nó.',
      'Còn câu hỏi nào chưa rõ? Ghi lại để hỏi.',
    ],
  };
}());
