// Bài giảng EC-04 - Monetary Policy (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t, frac } = window.CFAH;

  // Sơ đồ cơ chế truyền dẫn: lãi suất chính sách → 4 kênh → cầu → lạm phát.
  function transmission() {
    const W = 600, H = 300;
    const box = (x, y, w, h, txt, cls = '') => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" class="sv-panel"/><text x="${x + w / 2}" y="${y + h / 2 + 5}" class="sv-txt ${cls}">${txt}</text>`;
    const ln = (x1, y1, x2, y2) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="sv-axis"/>`;
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv" style="max-height:300px" role="img" aria-label="Cơ chế truyền dẫn chính sách tiền tệ">`;
    s += box(10, 125, 110, 50, 'Lãi suất CS', 'sv-t-pv');
    const ch = ['Lãi suất thị trường', 'Giá tài sản', 'Kỳ vọng, niềm tin', 'Tỷ giá'];
    ch.forEach((c, i) => { const y = 15 + i * 72; s += ln(120, 150, 160, y + 22) + box(160, y, 150, 44, c); s += ln(310, y + 22, 335, i < 3 ? 105 : 215); });
    s += box(335, 80, 140, 50, 'Cầu trong nước') + box(335, 190, 140, 50, 'Cầu nước ngoài');
    s += ln(475, 105, 490, 150) + ln(475, 215, 490, 150);
    s += box(490, 125, 105, 50, 'Tổng cầu');
    s += `<text x="542" y="206" class="sv-muted">+ giá nhập khẩu</text><text x="542" y="240" class="sv-txt sv-t-pv">→ lạm phát</text>`;
    return `<figure style="margin:12px 0">${s}</svg><figcaption style="text-align:center;font-size:13px">Tăng lãi suất chính sách: lãi suất thị trường tăng, giá tài sản giảm, kỳ vọng thắt chặt, nội tệ tăng giá → tổng cầu giảm → lạm phát giảm.</figcaption></figure>`;
  }

  const sections = [
    {
      title: '1. Bức tranh lớn',
      minutes: 4,
      html: `
<p>EC-03 bàn về công cụ ngân sách của chính phủ. Module này bàn về ${t('cb', 'ngân hàng trung ương (NHTW)')}: cơ quan quyết định ${t('policyrate', 'lãi suất chính sách')} và qua đó ảnh hưởng tới lãi suất, giá tài sản, tỷ giá mà nhà đầu tư quan sát hằng ngày.</p>
<div class="key">Chuỗi cần nắm: NHTW đổi lãi suất chính sách → lãi suất thị trường, giá tài sản, kỳ vọng, tỷ giá thay đổi → tổng cầu thay đổi → lạm phát và tăng trưởng thay đổi. Mọi câu hỏi của module đều nằm trên chuỗi này hoặc nói về lý do chuỗi bị <b>đứt</b>.</div>
<ol>
  <li>Vai trò và mục tiêu của NHTW. Ứng với LOS 1 (phần 2, 3).</li>
  <li>Công cụ, cơ chế truyền dẫn, quan hệ với tăng trưởng, lạm phát, lãi suất, tỷ giá. Ứng với LOS 2 (phần 4, 5).</li>
  <li>NHTW hiệu quả, các chế độ mục tiêu, hạn chế. Ứng với LOS 3 (phần 6, 7).</li>
  <li>Tương tác chính sách tiền tệ và tài khóa. Ứng với LOS 4 (phần 8).</li>
</ol>`,
    },
    {
      title: '2. Kiến thức nền: tiền, tạo tiền và lạm phát',
      minutes: 10,
      html: `
<p>Tiền có ba chức năng: <b>phương tiện trao đổi</b>, <b>đơn vị tính toán</b>, <b>phương tiện cất trữ giá trị</b>. Tiền hẹp (narrow money) gồm tiền mặt và tiền gửi thanh toán; tiền rộng (broad money) thêm các tài sản thanh khoản khác như tiền gửi tiết kiệm.</p>
<h4>Ngân hàng tạo tiền</h4>
<p>Ngân hàng chỉ giữ một phần tiền gửi làm dự trữ, phần còn lại cho vay; khoản vay được chi tiêu và lại thành tiền gửi ở ngân hàng khác...</p>
<div class="formula">${t('moneymult', 'Số nhân tiền')} = ${frac('1', 'tỷ lệ dự trữ bắt buộc')}</div>
<div class="example"><div class="ex-h">Ví dụ 2.1</div><p>Tỷ lệ dự trữ bắt buộc 10%, có 1.000 tiền dự trữ mới vào hệ thống ngân hàng. Tiền gửi có thể tăng tối đa bao nhiêu?</p>
<details><summary>Xem lời giải</summary><p>Số nhân = 1/0,10 = 10; tiền gửi tăng tối đa 1.000 × 10 = <b>10.000</b>. Thực tế nhỏ hơn vì ngân hàng giữ dự trữ dư và người dân giữ tiền mặt.</p></details></div>
<h4>Phương trình số lượng tiền</h4>
<div class="formula">M × V = P × Y</div>
<p>M: cung tiền, V: ${t('velocity', 'vòng quay tiền')}, P: mức giá, Y: sản lượng thực. Nếu V và Y không đổi, M tăng bao nhiêu phần trăm thì P tăng bấy nhiêu. Quan điểm cho rằng biến tiền tệ không ảnh hưởng biến thực trong dài hạn gọi là ${t('neutrality', 'tính trung lập của tiền')}.</p>
<div class="example"><div class="ex-h">Ví dụ 2.2</div><p>Cung tiền tăng 7%, GDP thực tăng 3%, vòng quay không đổi. Lạm phát xấp xỉ?</p>
<details><summary>Xem lời giải</summary><p>Xấp xỉ 7% - 3% = <b>4%</b> (chính xác: 1,07/1,03 - 1 = 3,88%).</p></details></div>
<h4>Lạm phát và lãi suất</h4>
<p>Phương trình Fisher: lãi suất danh nghĩa ≈ lãi suất thực + lạm phát kỳ vọng (cộng phần bù rủi ro nếu có). Ví dụ: lãi suất thực 2%, lạm phát kỳ vọng 3% → lãi suất danh nghĩa khoảng 5%.</p>
<p>Phân biệt: ${t('disinflation', 'giảm phát tốc (disinflation)')} là lạm phát giảm nhưng vẫn dương; ${t('deflation', 'giảm phát (deflation)')} là mức giá giảm (lạm phát âm); siêu lạm phát là lạm phát rất cao và tăng tốc. Lạm phát cơ bản (core) loại trừ lương thực và năng lượng; lạm phát tổng (headline) gồm tất cả.</p>`,
    },
    {
      title: '3. Vai trò và mục tiêu của ngân hàng trung ương',
      minutes: 9,
      html: `
<h4>Sáu vai trò</h4>
<ol>
<li>Độc quyền phát hành tiền.</li>
<li>Ngân hàng của chính phủ và của các ngân hàng.</li>
<li>Giám sát, điều tiết hệ thống ngân hàng và hệ thống thanh toán.</li>
<li>${t('lolr', 'Người cho vay cuối cùng (lender of last resort)')}: cấp thanh khoản cho ngân hàng gặp khó để tránh rút tiền hàng loạt.</li>
<li>Quản lý dự trữ vàng và ngoại hối.</li>
<li>Thực thi chính sách tiền tệ.</li>
</ol>
<h4>Mục tiêu</h4>
<p>Mục tiêu chính của hầu hết NHTW là <b>ổn định giá cả</b> (lạm phát thấp và ổn định, thường quanh 2% ở các nước phát triển). Một số NHTW có thêm mục tiêu: việc làm tối đa (Fed có "nhiệm vụ kép"), tăng trưởng bền vững, ổn định tỷ giá, lãi suất dài hạn vừa phải.</p>
<h4>Vì sao phải kiểm soát lạm phát?</h4>
<table class="plain"><thead><tr><th>Lạm phát dự kiến (expected)</th><th>Lạm phát không dự kiến (unexpected)</th></tr></thead><tbody>
<tr><td>Chi phí "thực đơn" (thay đổi bảng giá); chi phí "mòn giày" (giữ ít tiền mặt, đi rút nhiều lần)</td><td>Chi phí lớn hơn: phân phối lại của cải bất ngờ từ người cho vay sang người đi vay</td></tr>
<tr><td></td><td>Làm nhiễu tín hiệu giá: doanh nghiệp khó phân biệt giá tương đối tăng (cầu thật) với giá chung tăng → quyết định đầu tư sai</td></tr>
<tr><td></td><td>Tăng phần bù rủi ro lạm phát trong lãi suất</td></tr>
</tbody></table>
<p>Giảm phát cũng nguy hiểm: nợ thực tăng, người dân hoãn chi tiêu chờ giá rẻ hơn, và lãi suất danh nghĩa khó giảm dưới 0 để kích thích.</p>`,
    },
    {
      title: '4. Công cụ của chính sách tiền tệ',
      minutes: 10,
      html: `
<table class="plain"><thead><tr><th>Công cụ</th><th>Cách hoạt động</th><th>Nới lỏng</th></tr></thead><tbody>
<tr><td>${t('policyrate', 'Lãi suất chính sách')}</td><td>Lãi suất NHTW cho ngân hàng vay (ví dụ qua repo: NHTW mua chứng khoán của ngân hàng, ngân hàng cam kết mua lại với giá cao hơn). Ở Mỹ, mục tiêu là lãi suất fed funds liên ngân hàng; ở Anh là bank rate</td><td>Hạ lãi suất → chi phí vốn của ngân hàng giảm → lãi suất cho vay giảm</td></tr>
<tr><td>${t('rr', 'Dự trữ bắt buộc')}</td><td>Tỷ lệ tiền gửi ngân hàng phải giữ lại</td><td>Hạ tỷ lệ → nhiều tiền để cho vay hơn → cung tiền tăng</td></tr>
<tr><td>${t('omo', 'Nghiệp vụ thị trường mở (OMO)')}</td><td>NHTW mua bán chứng khoán (thường là trái phiếu chính phủ) với ngân hàng</td><td><b>Mua</b> chứng khoán → dự trữ ngân hàng tăng → cho vay và cung tiền tăng → lãi suất giảm</td></tr>
</tbody></table>
<p>Thắt chặt là làm ngược lại: tăng lãi suất, tăng dự trữ bắt buộc, <b>bán</b> chứng khoán (rút dự trữ khỏi hệ thống).</p>
<p class="tip">Dự trữ bắt buộc ngày nay ít được dùng ở các nước phát triển vì thay đổi nó gây xáo trộn lớn cho ngân hàng. Lãi suất chính sách là công cụ chính; OMO dùng để giữ lãi suất thị trường quanh mục tiêu.</p>
<p class="warn"><b>Bẫy chiều:</b> NHTW <b>mua</b> trái phiếu = <b>bơm</b> tiền = nới lỏng. Bán trái phiếu = hút tiền = thắt chặt.</p>`,
    },
    {
      title: '5. Cơ chế truyền dẫn và tác động lên nền kinh tế',
      minutes: 12,
      html: `
${transmission()}
<p>${t('transmission', 'Cơ chế truyền dẫn (transmission mechanism)')} khi NHTW <b>tăng</b> lãi suất chính sách:</p>
<ol>
<li><b>Lãi suất thị trường:</b> lãi suất liên ngân hàng, cho vay, tiền gửi tăng → vay để tiêu dùng và đầu tư giảm, tiết kiệm hấp dẫn hơn.</li>
<li><b>Giá tài sản:</b> dòng tiền tương lai được chiết khấu cao hơn → giá trái phiếu, cổ phiếu, nhà đất giảm → hộ gia đình "thấy nghèo đi" (hiệu ứng của cải), tiêu dùng giảm.</li>
<li><b>Kỳ vọng và niềm tin:</b> thị trường hiểu NHTW muốn hạ nhiệt → kỳ vọng tăng trưởng, lạm phát giảm → doanh nghiệp tăng giá, tăng lương ít hơn.</li>
<li><b>Tỷ giá:</b> lãi suất cao thu hút vốn ngoại → nội tệ tăng giá → xuất khẩu kém cạnh tranh, giá hàng nhập khẩu (tính bằng nội tệ) rẻ hơn.</li>
</ol>
<p>Kết quả: tổng cầu (trong nước và từ nước ngoài) giảm, áp lực giá giảm, giá nhập khẩu giảm → <b>lạm phát giảm</b>, tăng trưởng chậm lại trong ngắn hạn. Nới lỏng có tác động ngược lại.</p>
<h4>Lãi suất trung tính (neutral rate)</h4>
<p>${t('neutral', 'Lãi suất trung tính')} là mức lãi suất chính sách không kích thích cũng không kìm hãm nền kinh tế:</p>
<div class="formula">Lãi suất trung tính = tăng trưởng xu hướng (thực) + mục tiêu lạm phát</div>
<div class="key">Lãi suất chính sách &lt; trung tính → chính sách <b>mở rộng</b>.<br>Lãi suất chính sách &gt; trung tính → chính sách <b>thắt chặt</b>.</div>
<div class="example"><div class="ex-h">Ví dụ 5.1</div><p>Tăng trưởng xu hướng 2%, mục tiêu lạm phát 2%. Lãi suất chính sách hiện là 3%. Lập trường chính sách?</p>
<details><summary>Xem lời giải</summary><p>Lãi suất trung tính = 2% + 2% = 4%. Lãi suất chính sách 3% &lt; 4% → <b>mở rộng</b>, dù NHTW có thể vừa tăng lãi suất từ 2% lên 3%. Đừng nhầm "đang tăng lãi suất" với "đang thắt chặt".</p></details></div>
<p class="tip">Ước lượng lãi suất trung tính rất khó (tăng trưởng xu hướng không quan sát được), nên trên thực tế đây là một khoảng chứ không phải một con số chính xác.</p>`,
    },
    {
      title: '6. NHTW hiệu quả và các chế độ mục tiêu',
      minutes: 12,
      html: `
<h4>Ba phẩm chất</h4>
<table class="plain"><thead><tr><th>Phẩm chất</th><th>Nội dung</th></tr></thead><tbody>
<tr><td>${t('independence', 'Độc lập (independence)')}</td><td>Không bị can thiệp chính trị (chính phủ trước bầu cử thường muốn lãi suất thấp). ${t('opindep', 'Độc lập hoạt động')}: NHTW tự quyết lãi suất để đạt mục tiêu do chính phủ đặt (ví dụ Bank of England). ${t('tgtindep', 'Độc lập mục tiêu')}: NHTW tự định nghĩa cách đo lạm phát, mức mục tiêu và thời hạn đạt được (ví dụ ECB)</td></tr>
<tr><td>${t('credibility', 'Đáng tin cậy (credibility)')}</td><td>Làm đúng những gì đã tuyên bố. NHTW đáng tin thì mục tiêu lạm phát tự hiện thực hóa: người dân kỳ vọng 2% nên đòi tăng lương và tăng giá quanh 2%</td></tr>
<tr><td>${t('transparency', 'Minh bạch (transparency)')}</td><td>Công bố báo cáo lạm phát, biên bản họp, cách nhìn về kinh tế → thị trường dự đoán được hành động, chính sách tác động nhanh hơn</td></tr>
</tbody></table>
<h4>Ba chế độ mục tiêu</h4>
<table class="plain"><thead><tr><th>Chế độ</th><th>Cách làm</th><th>Mở rộng / thắt chặt</th></tr></thead><tbody>
<tr><td>${t('it', 'Lạm phát mục tiêu (inflation targeting)')}</td><td>Công bố mục tiêu (thường 2%, có thể có biên độ ±1%) và nhắm vào lạm phát dự báo khoảng 2 năm tới, vì chính sách tác động có độ trễ</td><td>Lạm phát dự báo dưới mục tiêu → hạ lãi suất; trên mục tiêu → tăng lãi suất</td></tr>
<tr><td>Mục tiêu lãi suất (interest rate targeting)</td><td>Giữ lãi suất thị trường trong một khoảng mục tiêu bằng cách điều chỉnh cung tiền</td><td>Lãi suất vượt trên khoảng → bơm tiền (mua chứng khoán); dưới khoảng → hút tiền</td></tr>
<tr><td>${t('fxtarget', 'Mục tiêu tỷ giá (exchange rate targeting)')}</td><td>Giữ tỷ giá với một đồng tiền neo (thường USD) bằng cách mua bán ngoại tệ. Nước neo về cơ bản "nhập khẩu" chính sách tiền tệ và lạm phát của nước được neo</td><td>Nội tệ mất giá quá mức → NHTW bán ngoại tệ, mua nội tệ → cung tiền giảm, lãi suất tăng (thắt chặt). Nội tệ tăng giá quá mức → làm ngược lại (nới lỏng)</td></tr>
</tbody></table>
<p class="warn"><b>Bẫy:</b> với mục tiêu tỷ giá, NHTW <b>mất quyền chủ động</b> dùng lãi suất cho mục tiêu trong nước. Bảo vệ tỷ giá khi nội tệ bị bán tháo buộc phải thắt chặt, kể cả khi kinh tế đang yếu; dự trữ ngoại hối có hạn nên neo có thể bị phá vỡ.</p>`,
    },
    {
      title: '7. Hạn chế của chính sách tiền tệ',
      minutes: 8,
      html: `
<ul>
<li><b>Lãi suất dài hạn không nghe lời:</b> NHTW kiểm soát lãi suất ngắn hạn. Nếu thị trường cho rằng nới lỏng sẽ gây lạm phát, nhà đầu tư trái phiếu đòi lợi suất cao hơn và bán trái phiếu dài hạn, làm lãi suất dài hạn <b>tăng</b>. Họ được gọi là ${t('vigilantes', 'bond market vigilantes')}. Ngược lại, NHTW thắt chặt nhưng lãi suất dài hạn có thể giảm nếu thị trường tin lạm phát sẽ hạ.</li>
<li><b>${t('liqtrap', 'Bẫy thanh khoản (liquidity trap)')}:</b> người dân và ngân hàng giữ tiền thay vì cho vay hoặc đầu tư (thường khi lãi suất đã rất thấp, tâm lý bi quan), nên bơm thêm tiền không làm lãi suất giảm hay cầu tăng.</li>
<li><b>Giảm phát và giới hạn lãi suất 0:</b> lãi suất danh nghĩa khó giảm sâu dưới 0, nên khi giảm phát lãi suất thực vẫn cao. NHTW phải dùng công cụ phi truyền thống như ${t('qe', 'nới lỏng định lượng (QE)')}: mua tài sản quy mô lớn (trái phiếu dài hạn, thậm chí trái phiếu doanh nghiệp) để hạ lãi suất dài hạn và bơm thanh khoản.</li>
<li><b>Ngân hàng và người vay không phản ứng:</b> ngân hàng có thể không cho vay nếu sợ rủi ro, doanh nghiệp không vay nếu không thấy cơ hội.</li>
<li><b>Các nước đang phát triển:</b> thị trường trái phiếu chính phủ kém thanh khoản (khó làm OMO), khu vực tài chính thay đổi nhanh nên khó xác định lãi suất trung tính, NHTW thiếu độc lập và tín nhiệm, dòng vốn ngoại biến động.</li>
<li><b>Độ trễ:</b> tác động đầy đủ lên lạm phát thường mất 1 đến 2 năm.</li>
</ul>`,
    },
    {
      title: '8. Tương tác chính sách tiền tệ và tài khóa',
      minutes: 6,
      html: `
<table class="plain"><thead><tr><th></th><th>Tiền tệ nới lỏng</th><th>Tiền tệ thắt chặt</th></tr></thead><tbody>
<tr><td><b>Tài khóa nới lỏng</b></td><td>Rất mở rộng: tổng cầu tăng mạnh, lãi suất thấp; cả khu vực công và tư cùng mở rộng</td><td>Sản lượng tăng, lãi suất tăng; tỷ trọng khu vực công trong GDP tăng (tư nhân bị chèn lấn)</td></tr>
<tr><td><b>Tài khóa thắt chặt</b></td><td>Lãi suất giảm; tiêu dùng và đầu tư tư nhân tăng, tỷ trọng khu vực tư nhân trong GDP tăng</td><td>Rất thu hẹp: lãi suất cao, tổng cầu giảm; cả khu vực công và tư thu hẹp</td></tr>
</tbody></table>
<ul>
<li>Khi chính phủ thâm hụt lớn và NHTW mua trái phiếu chính phủ (QE, hoặc tài trợ trực tiếp), ranh giới giữa hai chính sách mờ đi; rủi ro là mất độc lập và lạm phát cao.</li>
<li>Ricardian equivalence (EC-03) làm tài khóa kém hiệu quả; bẫy thanh khoản làm tiền tệ kém hiệu quả. Khi lãi suất đã ở mức 0, tài khóa thường phải gánh vai trò chính.</li>
<li>Hai chính sách ngược chiều nhau có thể triệt tiêu tác động lên tổng cầu nhưng thay đổi <b>cơ cấu</b> nền kinh tế (công hay tư, lãi suất cao hay thấp).</li>
</ul>`,
    },
    {
      title: '9. Tóm tắt và bẫy thường gặp',
      minutes: 4,
      html: `
<table class="plain"><thead><tr><th>Tình huống</th><th>Nhớ</th></tr></thead><tbody>
<tr><td>Mục tiêu chính</td><td>Ổn định giá cả (lạm phát thấp, ổn định)</td></tr>
<tr><td>OMO</td><td>NHTW mua trái phiếu = bơm tiền = nới lỏng</td></tr>
<tr><td>Số nhân tiền</td><td>1 / tỷ lệ dự trữ bắt buộc</td></tr>
<tr><td>MV = PY</td><td>V, Y không đổi → %ΔP ≈ %ΔM; nói chung %ΔP ≈ %ΔM - %ΔY</td></tr>
<tr><td>Lập trường</td><td>So lãi suất chính sách với lãi suất trung tính = tăng trưởng xu hướng + mục tiêu lạm phát</td></tr>
<tr><td>Tăng lãi suất</td><td>Giá tài sản giảm, nội tệ tăng giá, tổng cầu và lạm phát giảm</td></tr>
<tr><td>Độc lập</td><td>Hoạt động: tự đặt lãi suất. Mục tiêu: tự đặt cả mục tiêu lạm phát</td></tr>
<tr><td>Mục tiêu tỷ giá</td><td>Bảo vệ nội tệ = bán ngoại tệ = thắt chặt; mất chủ động chính sách</td></tr>
<tr><td>Hạn chế</td><td>Bond vigilantes, bẫy thanh khoản, giới hạn lãi suất 0, nước đang phát triển</td></tr>
<tr><td>Tài khóa lỏng + tiền tệ chặt</td><td>Lãi suất cao, khu vực công chiếm tỷ trọng lớn hơn</td></tr>
</tbody></table>
<p>Tiếp theo: tab <b>Luyện tập</b> 10 câu. Các module EC-05 đến EC-08 chuyển sang địa chính trị, thương mại quốc tế và tỷ giá.</p>`,
    },
  ];

  const glossary = {
    cb: ['Central bank', 'Ngân hàng trung ương', 'Cơ quan phát hành tiền và điều hành chính sách tiền tệ.'],
    policyrate: ['Policy rate', 'Lãi suất chính sách', 'Lãi suất NHTW cho ngân hàng vay hoặc lãi suất mục tiêu liên ngân hàng; công cụ chính của chính sách tiền tệ.'],
    moneymult: ['Money multiplier', 'Số nhân tiền', '1 / tỷ lệ dự trữ bắt buộc: mức tăng tối đa của tiền gửi trên mỗi đồng dự trữ mới.'],
    velocity: ['Velocity of money', 'Vòng quay tiền', 'Số lần bình quân mỗi đơn vị tiền được dùng để mua hàng hóa dịch vụ trong một năm.'],
    neutrality: ['Money neutrality', 'Tính trung lập của tiền', 'Trong dài hạn, cung tiền chỉ ảnh hưởng mức giá, không ảnh hưởng sản lượng thực.'],
    disinflation: ['Disinflation', 'Giảm tốc lạm phát', 'Lạm phát giảm dần nhưng vẫn dương.'],
    deflation: ['Deflation', 'Giảm phát', 'Mức giá chung giảm liên tục (lạm phát âm).'],
    lolr: ['Lender of last resort', 'Người cho vay cuối cùng', 'NHTW cấp thanh khoản cho ngân hàng gặp khó để giữ ổn định hệ thống.'],
    rr: ['Reserve requirement', 'Dự trữ bắt buộc', 'Tỷ lệ tiền gửi ngân hàng phải giữ làm dự trữ, không được cho vay.'],
    omo: ['Open market operations (OMO)', 'Nghiệp vụ thị trường mở', 'NHTW mua bán chứng khoán để thay đổi dự trữ ngân hàng và lãi suất.'],
    transmission: ['Monetary transmission mechanism', 'Cơ chế truyền dẫn tiền tệ', 'Chuỗi tác động từ lãi suất chính sách tới lãi suất, giá tài sản, kỳ vọng, tỷ giá, rồi tới tổng cầu và lạm phát.'],
    neutral: ['Neutral interest rate', 'Lãi suất trung tính', 'Lãi suất không kích thích cũng không kìm hãm: tăng trưởng xu hướng + mục tiêu lạm phát.'],
    independence: ['Central bank independence', 'Tính độc lập của NHTW', 'NHTW ra quyết định không bị can thiệp chính trị.'],
    opindep: ['Operational independence', 'Độc lập hoạt động', 'NHTW tự quyết công cụ (lãi suất) để đạt mục tiêu do chính phủ đặt.'],
    tgtindep: ['Target independence', 'Độc lập mục tiêu', 'NHTW tự đặt cả mục tiêu: cách đo lạm phát, mức mục tiêu, thời hạn.'],
    credibility: ['Credibility', 'Tín nhiệm', 'Mức độ công chúng tin NHTW sẽ làm đúng cam kết.'],
    transparency: ['Transparency', 'Minh bạch', 'Công bố rõ thông tin, lập luận và định hướng chính sách.'],
    it: ['Inflation targeting', 'Lạm phát mục tiêu', 'Chế độ NHTW công bố mục tiêu lạm phát và điều chỉnh lãi suất theo lạm phát dự báo.'],
    fxtarget: ['Exchange rate targeting', 'Mục tiêu tỷ giá', 'NHTW giữ tỷ giá với đồng tiền neo bằng mua bán ngoại tệ.'],
    vigilantes: ['Bond market vigilantes', 'Nhà đầu tư trái phiếu "cảnh giác"', 'Nhà đầu tư bán trái phiếu, đẩy lợi suất dài hạn lên khi lo chính sách gây lạm phát.'],
    liqtrap: ['Liquidity trap', 'Bẫy thanh khoản', 'Tình trạng bơm thêm tiền không làm lãi suất giảm hay cầu tăng vì mọi người giữ tiền.'],
    qe: ['Quantitative easing (QE)', 'Nới lỏng định lượng', 'NHTW mua tài sản quy mô lớn để hạ lãi suất dài hạn khi lãi suất ngắn hạn đã gần 0.'],
  };

  const practice = [
    { q: 'Mục tiêu chính của hầu hết các ngân hàng trung ương hiện nay là:', choices: ['Tối đa hóa tăng trưởng GDP', 'Ổn định giá cả', 'Giữ tỷ giá cố định với USD'], answer: 1, explain: 'Ổn định giá (lạm phát thấp, ổn định) là mục tiêu cốt lõi. Một số NHTW có thêm mục tiêu việc làm hay tỷ giá, nhưng đó là mục tiêu phụ hoặc của một số nước.' },
    { q: 'NHTW mua trái phiếu chính phủ từ các ngân hàng thương mại qua nghiệp vụ thị trường mở. Tác động nhiều khả năng nhất là:', choices: ['Dự trữ ngân hàng giảm, lãi suất tăng', 'Cung tiền không đổi vì chỉ là hoán đổi tài sản', 'Dự trữ ngân hàng tăng, cung tiền tăng, lãi suất giảm'], answer: 2, explain: 'NHTW trả tiền cho ngân hàng, dự trữ tăng, ngân hàng cho vay nhiều hơn, cung tiền tăng, lãi suất giảm: đây là nới lỏng. Lựa chọn "dự trữ giảm, lãi suất tăng" là tác động khi NHTW bán trái phiếu. Lựa chọn "cung tiền không đổi" sai vì dự trữ là tiền NHTW mới tạo ra.' },
    { q: 'Tăng trưởng xu hướng 2,5%, mục tiêu lạm phát 2%, lãi suất chính sách 3,5%. Lập trường chính sách tiền tệ là:', choices: ['Mở rộng', 'Trung tính', 'Thắt chặt'], answer: 0, explain: 'Lãi suất trung tính = 2,5% + 2% = 4,5%. Lãi suất chính sách 3,5% thấp hơn nên chính sách đang mở rộng. Lựa chọn "Thắt chặt" sai vì nhầm lẫn lãi suất dương cao với thắt chặt; phải so với mức trung tính.' },
    { q: 'Tỷ lệ dự trữ bắt buộc 8%. NHTW bơm thêm 400 dự trữ vào hệ thống ngân hàng. Tiền gửi có thể tăng tối đa:', choices: ['32', '432', '5.000'], answer: 2, explain: 'Số nhân tiền = 1/0,08 = 12,5; tiền gửi tăng tối đa 400 × 12,5 = 5.000. Lựa chọn 32 nhân với tỷ lệ dự trữ thay vì chia. Lựa chọn 432 cộng thêm 8% một lần, bỏ qua quá trình tạo tiền nhiều vòng.' },
    { q: 'Cung tiền tăng 6%/năm, GDP thực tăng 2%/năm, vòng quay tiền không đổi. Theo phương trình số lượng tiền, lạm phát xấp xỉ:', choices: ['8%', '4%', '3%'], answer: 1, explain: 'MV = PY → %ΔP ≈ %ΔM + %ΔV - %ΔY = 6% + 0 - 2% = 4% (chính xác 1,06/1,02 - 1 = 3,92%). Lựa chọn 8% cộng tăng trưởng thay vì trừ. Lựa chọn 3% chia 6 cho 2.' },
    { q: 'Chính phủ đặt mục tiêu lạm phát 2%, NHTW được tự quyết định lãi suất để đạt mục tiêu đó. NHTW này có:', choices: ['Độc lập hoạt động nhưng không độc lập mục tiêu', 'Độc lập mục tiêu nhưng không độc lập hoạt động', 'Cả độc lập hoạt động và độc lập mục tiêu'], answer: 0, explain: 'Độc lập hoạt động là tự chọn công cụ (lãi suất). Độc lập mục tiêu đòi hỏi NHTW tự đặt mục tiêu lạm phát, ở đây do chính phủ đặt. Vậy chỉ có độc lập hoạt động.' },
    { q: 'NHTW bơm rất nhiều tiền nhưng lãi suất không giảm và cho vay không tăng vì ngân hàng và người dân chỉ giữ tiền. Hiện tượng này là:', choices: ['Bond market vigilantes', 'Ricardian equivalence', 'Bẫy thanh khoản (liquidity trap)'], answer: 2, explain: 'Bẫy thanh khoản: cầu tiền gần như vô hạn ở lãi suất thấp, nên cung tiền thêm bị giữ lại. Bond market vigilantes nói về lãi suất dài hạn tăng do lo lạm phát. Ricardian equivalence là khái niệm tài khóa (tiết kiệm phần giảm thuế).' },
    { q: 'Một nước neo tỷ giá với USD. Nội tệ chịu áp lực mất giá vượt biên độ cho phép. Để bảo vệ tỷ giá, NHTW nhiều khả năng sẽ:', choices: ['Bán USD từ dự trữ, mua nội tệ, khiến cung tiền giảm và lãi suất tăng', 'Mua USD, bán nội tệ, khiến cung tiền tăng', 'Hạ lãi suất để kích thích xuất khẩu'], answer: 0, explain: 'Muốn nội tệ tăng giá trở lại, NHTW phải tạo cầu cho nội tệ: bán ngoại tệ, mua nội tệ. Nội tệ bị rút khỏi lưu thông nên cung tiền giảm, lãi suất tăng (thắt chặt). Mua USD bán nội tệ hay hạ lãi suất đều làm nội tệ mất giá thêm.' },
    { q: 'Chính sách tài khóa nới lỏng kết hợp với chính sách tiền tệ thắt chặt nhiều khả năng dẫn tới:', choices: ['Lãi suất thấp, khu vực tư nhân chiếm tỷ trọng lớn hơn', 'Lãi suất cao, khu vực công chiếm tỷ trọng lớn hơn trong GDP', 'Tổng cầu giảm mạnh, cả khu vực công và tư thu hẹp'], answer: 1, explain: 'Chính phủ chi nhiều làm khu vực công lớn lên; tiền tệ chặt giữ lãi suất cao, chèn lấn đầu tư tư nhân. Lựa chọn "lãi suất thấp, khu vực tư nhân chiếm tỷ trọng lớn hơn" là kết hợp tài khóa chặt và tiền tệ lỏng. Lựa chọn "tổng cầu giảm mạnh" là cả hai cùng thắt chặt.' },
    { q: 'NHTW tăng lãi suất chính sách. Tác động nào sau đây phù hợp với cơ chế truyền dẫn?', choices: ['Giá cổ phiếu và trái phiếu tăng', 'Nội tệ mất giá, giá hàng nhập khẩu tăng', 'Nội tệ tăng giá, giá hàng nhập khẩu giảm, xuất khẩu kém cạnh tranh'], answer: 2, explain: 'Lãi suất cao hơn thu hút vốn ngoại nên nội tệ tăng giá, hàng nhập khẩu rẻ hơn và xuất khẩu đắt hơn với người mua nước ngoài. Lựa chọn "giá cổ phiếu và trái phiếu tăng" sai vì chiết khấu cao hơn làm giá tài sản giảm. Lựa chọn "nội tệ mất giá" ngược chiều.' },
  ];

  window.LESSONS['EC-04'] = {
    moduleId: 'EC-04',
    calculator: 'BA II Plus',
    warmup: [
      'Ôn EC-03: vì sao chính sách tài khóa thường có độ trễ hành động (action lag) dài hơn chính sách tiền tệ?',
      'Gần đây Ngân hàng Nhà nước hoặc Fed tăng hay giảm lãi suất? Bạn đoán mục đích là gì?',
      'Đoán trước: nếu lãi suất tiền gửi tăng mạnh, bạn sẽ chi tiêu nhiều hơn hay ít hơn? Giá nhà và cổ phiếu sẽ ra sao?',
    ],
    sections,
    glossary,
    practice,
    widgets: {},
    slides: [],
    wrapup: [
      'Vẽ lại sơ đồ cơ chế truyền dẫn từ lãi suất chính sách đến lạm phát, ghi 4 kênh.',
      'Lập bảng 2 x 2 phối hợp tài khóa - tiền tệ và ghi kết quả về lãi suất, tỷ trọng khu vực công/tư.',
      'Nêu 3 hạn chế của chính sách tiền tệ và ví dụ thực tế bạn biết.',
    ],
  };
}());
