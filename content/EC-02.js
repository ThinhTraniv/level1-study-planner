// Bài giảng EC-02 - Understanding Business Cycles (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t, frac } = window.CFAH;

  // Đồ thị chu kỳ: chênh lệch sản lượng (output gap) dạng sóng sin, chia 4 pha.
  function cycleFig() {
    const W = 600, H = 260, l = 40, r = 580, y0 = 125, A = 70;
    const X = u => l + u * (r - l);
    // u từ 0 (đáy) đến 1 (đáy kế tiếp): gap = -cos(2πu)
    const G = u => y0 + A * Math.cos(2 * Math.PI * u);
    let pts = '';
    for (let i = 0; i <= 200; i++) { const u = i / 200; pts += `${X(u).toFixed(1)},${G(u).toFixed(1)} `; }
    let s = `<svg viewBox="0 0 ${W} ${H}" class="sv" style="max-height:280px" role="img" aria-label="Bốn pha của chu kỳ kinh doanh">`;
    s += `<line x1="${l}" y1="${y0}" x2="${r}" y2="${y0}" class="sv-dash"/><line x1="${l}" y1="20" x2="${l}" y2="${H - 30}" class="sv-axis"/>`;
    s += `<text x="${r}" y="${y0 - 8}" class="sv-muted" text-anchor="end">sản lượng tiềm năng (gap = 0)</text>`;
    [0.25, 0.5, 0.75].forEach(u => { s += `<line x1="${X(u)}" y1="30" x2="${X(u)}" y2="${H - 34}" class="sv-grid"/>`; });
    s += `<polyline points="${pts}" class="sv-curve" fill="none"/>`;
    s += `<circle cx="${X(0)}" cy="${G(0)}" r="6" class="sv-dot"/><circle cx="${X(0.5)}" cy="${G(0.5)}" r="6" class="sv-dot"/><circle cx="${X(1)}" cy="${G(1)}" r="6" class="sv-dot"/>`;
    s += `<text x="${X(0.5)}" y="${G(0.5) - 12}" class="sv-txt">Đỉnh (peak)</text><text x="${X(0) + 8}" y="${G(0) + 22}" class="sv-txt" text-anchor="start">Đáy (trough)</text><text x="${X(1) - 8}" y="${G(1) + 22}" class="sv-txt" text-anchor="end">Đáy</text>`;
    const ph = [['Phục hồi', 'recovery', 'sv-t-up'], ['Mở rộng', 'expansion', 'sv-t-up'], ['Chậm lại', 'slowdown', 'sv-t-down'], ['Suy giảm', 'contraction', 'sv-t-down']];
    ph.forEach(([v, e, c], i) => { s += `<text x="${X(0.125 + i * 0.25)}" y="${H - 14}" class="sv-txt ${c}">${v}</text><text x="${X(0.125 + i * 0.25)}" y="${H - 30}" class="sv-muted">${e}</text>`; });
    s += `<text x="${l + 6}" y="30" class="sv-muted" text-anchor="start">Output gap</text>`;
    return `<figure style="margin:12px 0">${s}</svg><figcaption style="text-align:center;font-size:13px">Pha được xác định theo vị trí của sản lượng thực so với tiềm năng (dấu của output gap) và hướng đi của nó.</figcaption></figure>`;
  }

  const sections = [
    {
      title: '1. Bức tranh lớn',
      minutes: 4,
      html: `
<p>EC-01 nhìn vào một hãng. Từ module này, ta nhìn cả nền kinh tế: sản lượng, việc làm, lạm phát <b>không tăng đều</b> mà dao động quanh xu hướng dài hạn. Dao động đó là ${t('cycle', 'chu kỳ kinh doanh (business cycle)')}.</p>
<div class="key">Nhà đầu tư cần biết nền kinh tế đang ở <b>pha nào</b> và sắp chuyển sang pha nào, vì lợi nhuận doanh nghiệp, lãi suất, rủi ro tín dụng và hiệu suất của từng ngành đều thay đổi theo chu kỳ.</div>
<p>Ba LOS của module:</p>
<ol>
  <li><b>Chu kỳ kinh doanh và các pha</b>: cách đo, bốn pha, điểm đỉnh và đáy. Ứng với LOS 1 (phần 2).</li>
  <li><b>Chu kỳ tín dụng (credit cycle)</b> và quan hệ với chu kỳ kinh doanh. Ứng với LOS 2 (phần 3).</li>
  <li><b>Từng khu vực biến động ra sao qua chu kỳ</b> (tồn kho, lao động, vốn, tiêu dùng, nhà ở, ngoại thương) và cách đo bằng ${t('indicator', 'chỉ báo kinh tế')}. Ứng với LOS 3 (phần 4 đến 7).</li>
</ol>
<p class="tip">Module này gần như không có tính toán. Trọng tâm thi là <b>nhận diện</b>: một chỉ báo là dẫn dắt, trùng hay trễ; một hiện tượng xảy ra ở pha nào.</p>`,
    },
    {
      title: '2. Chu kỳ kinh doanh và các pha',
      minutes: 12,
      html: `
<p>Chu kỳ kinh doanh là sự dao động lặp lại (nhưng không đều đặn về độ dài và biên độ) của hoạt động kinh tế tổng thể, thường kéo dài từ khoảng 1 đến hơn 10 năm. Các biến số di chuyển <b>cùng lúc</b> trên nhiều khu vực: sản lượng, việc làm, thu nhập, doanh số.</p>
<h4>Ba cách đo chu kỳ</h4>
<table class="plain"><thead><tr><th>Cách đo</th><th>Nhìn vào</th><th>Đặc điểm</th></tr></thead><tbody>
<tr><td>${t('classical', 'Classical cycle')}</td><td>Mức GDP thực (tăng hay giảm tuyệt đối)</td><td>Đỉnh là lúc GDP bắt đầu giảm; ít dùng vì nhiều nước đang tăng trưởng hiếm khi có GDP giảm tuyệt đối</td></tr>
<tr><td>${t('growthcycle', 'Growth cycle')}</td><td>Chênh lệch giữa GDP thực và xu hướng dài hạn (${t('gap', 'output gap')})</td><td>Gắn với khái niệm sản lượng tiềm năng; cách CFA dùng để định nghĩa các pha</td></tr>
<tr><td>${t('growthrate', 'Growth rate cycle')}</td><td>Tốc độ tăng GDP thực (thường quy năm)</td><td>Cho tín hiệu đỉnh và đáy <b>sớm nhất</b>; được nhà kinh tế và nhà hoạch định chính sách ưa dùng</td></tr>
</tbody></table>
<div class="example"><div class="ex-h">Ví dụ 2.1 - Cùng dữ liệu, ba cách đo</div>
<p>Chỉ số GDP thực theo quý (Q0 đến Q8): 100; 101,2; 102,0; 102,3; 102,1; 101,6; 101,5; 101,9; 102,8. Xu hướng dài hạn tăng 0,6%/quý. Mỗi cách đo xác định đỉnh ở quý nào?</p>
<details><summary>Xem lời giải</summary>
<table class="plain"><thead><tr><th>Quý</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th></tr></thead><tbody>
<tr><td>Tăng trưởng so quý trước</td><td>1,20%</td><td>0,79%</td><td>0,29%</td><td>-0,20%</td><td>-0,49%</td><td>-0,10%</td><td>0,39%</td><td>0,88%</td></tr>
<tr><td>Chênh lệch so xu hướng</td><td>0,60%</td><td>0,79%</td><td>0,48%</td><td>-0,31%</td><td>-1,39%</td><td>-2,08%</td><td>-2,28%</td><td>-2,00%</td></tr>
</tbody></table>
<p><b>Growth rate cycle:</b> tốc độ tăng cao nhất ở Q1, thấp nhất ở Q5. <b>Growth cycle:</b> chênh lệch lớn nhất ở Q2, thấp nhất ở Q7. <b>Classical:</b> mức GDP cao nhất ở Q3 (102,3), thấp nhất ở Q6 (101,5).</p>
<p>Đỉnh xuất hiện theo thứ tự growth rate (Q1) → growth (Q2) → classical (Q3). Đây là lý do growth rate cycle "báo trước" sớm nhất.</p></details></div>

<h4>Bốn pha (theo growth cycle)</h4>
${cycleFig()}
<table class="plain"><thead><tr><th>Pha</th><th>Output gap</th><th>Hoạt động kinh tế</th><th>Việc làm</th><th>Lạm phát</th></tr></thead><tbody>
<tr><td>${t('recovery', 'Phục hồi (recovery)')}</td><td>Âm nhưng thu hẹp</td><td>Tăng trưởng chuyển từ âm sang dương, thấp hơn xu hướng</td><td>Sa thải chậm lại; thất nghiệp vẫn cao, tăng giờ làm và lao động tạm thời trước</td><td>Thấp, có thể tiếp tục giảm</td></tr>
<tr><td>Mở rộng (expansion)</td><td>Dương và tăng</td><td>Tăng trưởng trên xu hướng; đầu tư, tiêu dùng mạnh</td><td>Tuyển dụng tăng, thất nghiệp giảm</td><td>Bắt đầu tăng</td></tr>
<tr><td>${t('slowdown', 'Chậm lại (slowdown)')}</td><td>Dương nhưng thu hẹp</td><td>Tăng trưởng chậm dần sau đỉnh</td><td>Tuyển dụng chậm lại</td><td>Tiếp tục tăng (trễ)</td></tr>
<tr><td>Suy giảm (contraction)</td><td>Âm và mở rộng</td><td>Tăng trưởng dưới xu hướng hoặc âm; suy thoái nếu GDP giảm tuyệt đối</td><td>Giảm giờ làm, rồi sa thải; thất nghiệp tăng</td><td>Giảm, với độ trễ</td></tr>
</tbody></table>
<p>${t('recession', 'Suy thoái (recession)')} thường được hiểu là GDP thực giảm <b>hai quý liên tiếp</b>. ${t('peak', 'Đỉnh')} và ${t('trough', 'đáy')} là các điểm chuyển, không phải pha.</p>
<p class="warn"><b>Bẫy:</b> lạm phát và thất nghiệp <b>đi trễ</b> so với sản lượng. Ngay sau đáy, thất nghiệp có thể vẫn tăng thêm một thời gian; ngay sau đỉnh, lạm phát vẫn còn tăng.</p>`,
    },
    {
      title: '3. Chu kỳ tín dụng (credit cycle)',
      minutes: 9,
      html: `
<p>${t('creditcycle', 'Chu kỳ tín dụng')} là sự mở rộng và thu hẹp luân phiên của <b>khả năng tiếp cận và chi phí tín dụng</b> trong nền kinh tế.</p>
<ul>
<li><b>Giai đoạn mở rộng tín dụng:</b> kinh tế tốt, tài sản tăng giá, giá trị tài sản thế chấp cao, người cho vay đánh giá rủi ro thấp → nới tiêu chuẩn cho vay, spread tín dụng hẹp, vay nhiều hơn → chi tiêu và giá tài sản tăng tiếp.</li>
<li><b>Giai đoạn thu hẹp tín dụng:</b> nợ xấu tăng, tài sản giảm giá, người cho vay sợ rủi ro → siết tiêu chuẩn, spread rộng ra → chi tiêu giảm, tài sản giảm giá tiếp.</li>
</ul>
<div class="key">Tín dụng có tính <b>thuận chu kỳ (procyclical)</b>: nó khuếch đại chu kỳ kinh doanh. Khi suy thoái trùng với thu hẹp tín dụng (nhất là gắn với bất động sản), suy thoái thường <b>sâu hơn và dài hơn</b>; khi mở rộng kinh tế trùng với bùng nổ tín dụng, đà tăng mạnh hơn.</div>
<table class="plain"><thead><tr><th></th><th>Chu kỳ kinh doanh</th><th>Chu kỳ tín dụng</th></tr></thead><tbody>
<tr><td>Đo bằng</td><td>GDP thực, việc làm</td><td>Tăng trưởng tín dụng, giá bất động sản, tỷ lệ tín dụng/GDP, spread</td></tr>
<tr><td>Độ dài</td><td>Ngắn hơn</td><td>Thường <b>dài hơn</b> và biên độ <b>lớn hơn</b></td></tr>
<tr><td>Hệ quả</td><td>Biến động sản lượng, việc làm</td><td>Bong bóng tài sản, khủng hoảng tài chính khi đảo chiều</td></tr>
</tbody></table>
<p>Ứng dụng: nhà hoạch định chính sách dùng chu kỳ tín dụng để đánh giá rủi ro hệ thống (ví dụ áp dụng các biện pháp an toàn vĩ mô khi tín dụng tăng quá nhanh). Nhà đầu tư trái phiếu doanh nghiệp theo dõi nó để dự báo spread và tỷ lệ vỡ nợ.</p>
<p class="tip"><b>Liên hệ thực tế:</b> giai đoạn bùng nổ tín dụng bất động sản rồi siết lại thường kéo theo nhiều năm tăng trưởng chậm, vì hộ gia đình và doanh nghiệp phải giảm nợ (deleveraging) trước khi chi tiêu trở lại.</p>`,
    },
    {
      title: '4. Sử dụng nguồn lực: tồn kho, lao động, vốn',
      minutes: 9,
      html: `
<h4>Tồn kho</h4>
<p>${t('isratio', 'Tỷ lệ tồn kho/doanh số (inventory-sales ratio)')} là tín hiệu quan trọng, vì doanh nghiệp điều chỉnh tồn kho trước khi điều chỉnh lao động và vốn.</p>
<table class="plain"><thead><tr><th>Giai đoạn</th><th>Diễn biến</th><th>Tỷ lệ tồn kho/doanh số</th></tr></thead><tbody>
<tr><td>Đầu phục hồi</td><td>Doanh số tăng bất ngờ, tồn kho bị rút nhanh</td><td>Dưới mức bình thường → doanh nghiệp tăng sản xuất để bổ sung kho</td></tr>
<tr><td>Mở rộng</td><td>Doanh số và tồn kho cùng tăng</td><td>Về mức bình thường</td></tr>
<tr><td>Gần đỉnh / chậm lại</td><td>Doanh số chậm lại bất ngờ, hàng tồn tích lũy ngoài ý muốn</td><td>Trên mức bình thường → cắt giảm sản xuất</td></tr>
<tr><td>Suy giảm</td><td>Giảm sản xuất, xả kho</td><td>Giảm dần về bình thường</td></tr>
</tbody></table>
<div class="example"><div class="ex-h">Ví dụ 4.1</div>
<p>Một nhà bán lẻ có tồn kho 1,5 tỷ, doanh số tháng 1,0 tỷ. Quý sau doanh số giảm còn 0,9 tỷ, tồn kho tăng lên 1,6 tỷ. Tỷ lệ tồn kho/doanh số thay đổi thế nào và báo hiệu gì?</p>
<details><summary>Xem lời giải</summary><p>Trước: 1,5/1,0 = <b>1,50</b>. Sau: 1,6/0,9 = <b>1,78</b>. Hàng tồn tích lũy ngoài ý muốn là dấu hiệu điển hình của giai đoạn <b>chậm lại hoặc đầu suy giảm</b>; doanh nghiệp sắp cắt sản xuất, làm suy giảm sâu thêm. Đây là ${t('invcycle', 'chu kỳ tồn kho')}.</p></details></div>
<h4>Lao động và vốn</h4>
<p>Thuê và sa thải tốn kém, mua và bán máy móc cũng vậy. Vì thế doanh nghiệp điều chỉnh theo trình tự:</p>
<ol>
<li><b>Trước tiên:</b> thay đổi cường độ sử dụng nguồn lực sẵn có, tức <b>giờ làm</b> (làm thêm giờ, giảm ca), lao động tạm thời, ${t('capu', 'hệ số sử dụng công suất')} của máy móc.</li>
<li><b>Khi xu hướng kéo dài:</b> mới tuyển hoặc sa thải nhân viên chính thức, đầu tư mới hoặc thanh lý nhà máy, thiết bị.</li>
</ol>
<p>Hệ quả: <b>giờ làm việc bình quân là chỉ báo dẫn dắt</b>, còn số việc làm và đầu tư phản ứng chậm hơn. Trong phục hồi, đầu tư thường bắt đầu từ thiết bị có vòng đời ngắn (công nghệ, phần mềm); nhà xưởng mới chỉ đến khi công suất hiện có được dùng gần hết.</p>`,
    },
    {
      title: '5. Khu vực tiêu dùng và nhà ở',
      minutes: 8,
      html: `
<h4>Tiêu dùng</h4>
<p>Chi tiêu hộ gia đình phụ thuộc thu nhập hiện tại <b>và kỳ vọng về thu nhập tương lai</b> (thu nhập thường xuyên). Hộ gia đình có xu hướng làm phẳng tiêu dùng: không cắt mọi thứ khi thu nhập giảm tạm thời.</p>
<table class="plain"><thead><tr><th>Loại chi tiêu</th><th>Độ nhạy với chu kỳ</th><th>Lý do</th></tr></thead><tbody>
<tr><td>${t('durable', 'Hàng lâu bền')} (ô tô, đồ gia dụng, nội thất)</td><td><b>Cao nhất</b></td><td>Giá trị lớn, thường mua trả góp, dễ hoãn việc thay mới khi khó khăn</td></tr>
<tr><td>Dịch vụ tùy ý (du lịch, nhà hàng)</td><td>Khá cao</td><td>Có thể cắt giảm; nhưng dịch vụ thiết yếu (y tế, điện nước) ổn định</td></tr>
<tr><td>Hàng không lâu bền (thực phẩm, đồ dùng hằng ngày)</td><td>Thấp</td><td>Nhu cầu thiết yếu, khó cắt</td></tr>
</tbody></table>
<p>Đo bằng: doanh số bán lẻ, chi tiêu tiêu dùng cá nhân, đơn hàng hàng lâu bền, ${t('confidence', 'chỉ số niềm tin người tiêu dùng')}, thu nhập khả dụng và tỷ lệ tiết kiệm. Tỷ lệ tiết kiệm thường <b>tăng</b> khi tâm lý bất an (đầu suy giảm) và giảm khi lạc quan.</p>
<h4>Nhà ở</h4>
<p>Nhà ở là khu vực <b>rất nhạy với lãi suất</b> và có thể biến động mạnh hơn cả nền kinh tế. Các yếu tố:</p>
<ul>
<li><b>Lãi suất vay mua nhà:</b> lãi suất thấp → mua nhà và xây dựng tăng.</li>
<li><b>Chi phí nhà so với thu nhập:</b> thu nhập tăng nhanh hơn giá nhà → nhu cầu tăng; giá nhà tăng nhanh hơn thu nhập → nhu cầu chững lại.</li>
<li><b>Đầu cơ:</b> giá tăng thu hút người mua kỳ vọng tăng tiếp, tạo bong bóng; khi đảo chiều thì giảm mạnh (gắn chặt với chu kỳ tín dụng).</li>
<li><b>Nhân khẩu học:</b> tỷ trọng dân số độ tuổi lập gia đình (khoảng 25 đến 40 tuổi), tốc độ đô thị hóa.</li>
</ul>
<p>Đo bằng: số giấy phép xây dựng (building permits), số căn nhà khởi công (housing starts), doanh số nhà, giá nhà.</p>`,
    },
    {
      title: '6. Khu vực ngoại thương',
      minutes: 4,
      html: `
<p>Ba yếu tố quan trọng nhất quyết định xuất nhập khẩu:</p>
<table class="plain"><thead><tr><th>Yếu tố</th><th>Tác động</th></tr></thead><tbody>
<tr><td>GDP trong nước tăng</td><td><b>Nhập khẩu</b> tăng (người dân và doanh nghiệp mua nhiều hơn, kể cả hàng ngoại)</td></tr>
<tr><td>GDP của đối tác thương mại tăng</td><td><b>Xuất khẩu</b> tăng</td></tr>
<tr><td>Nội tệ tăng giá</td><td>Xuất khẩu giảm, nhập khẩu tăng (tác động có độ trễ)</td></tr>
</tbody></table>
<p>Vì nhập khẩu tăng trong pha mở rộng, ${t('netexports', 'xuất khẩu ròng')} của một nước thường xấu đi khi kinh tế trong nước tăng trưởng mạnh hơn đối tác, và cải thiện khi kinh tế trong nước suy yếu. Với nền kinh tế mở như Việt Nam, chu kỳ của các đối tác lớn (Mỹ, Trung Quốc, EU) truyền vào trong nước chủ yếu qua kênh xuất khẩu.</p>
<p class="tip">Tỷ giá được bàn kỹ ở các module EC-06 và EC-07. Ở đây chỉ cần nhớ chiều tác động.</p>`,
    },
    {
      title: '7. Chỉ báo kinh tế (economic indicators)',
      minutes: 10,
      html: `
<table class="plain"><thead><tr><th>Loại</th><th>Đổi hướng</th><th>Dùng để</th></tr></thead><tbody>
<tr><td>${t('leading', 'Chỉ báo dẫn dắt (leading)')}</td><td><b>Trước</b> đỉnh, đáy của chu kỳ</td><td>Dự báo</td></tr>
<tr><td>${t('coincident', 'Chỉ báo trùng (coincident)')}</td><td><b>Cùng lúc</b> với đỉnh, đáy</td><td>Xác định đang ở pha nào</td></tr>
<tr><td>${t('lagging', 'Chỉ báo trễ (lagging)')}</td><td><b>Sau</b> khi chu kỳ đã đổi hướng</td><td>Xác nhận điểm chuyển</td></tr>
</tbody></table>
<h4>Ví dụ thường gặp trong đề (theo bộ chỉ báo kiểu Conference Board của Mỹ)</h4>
<table class="plain"><thead><tr><th>Dẫn dắt</th><th>Trùng</th><th>Trễ</th></tr></thead><tbody>
<tr><td>Giờ làm bình quân/tuần trong sản xuất</td><td>Số lao động phi nông nghiệp (nonfarm payrolls)</td><td>Thời gian thất nghiệp bình quân</td></tr>
<tr><td>Số đơn xin trợ cấp thất nghiệp lần đầu</td><td>Thu nhập cá nhân thực (trừ trợ cấp)</td><td>Tỷ lệ tồn kho/doanh số</td></tr>
<tr><td>Đơn hàng mới (hàng tiêu dùng, ISM new orders, hàng vốn phi quốc phòng)</td><td>Chỉ số sản xuất công nghiệp</td><td>Thay đổi chi phí lao động trên mỗi đơn vị sản phẩm</td></tr>
<tr><td>Giấy phép xây dựng nhà</td><td>Doanh số sản xuất và thương mại</td><td>Lãi suất cho vay cơ bản (prime rate) bình quân</td></tr>
<tr><td>Chỉ số chứng khoán (S&amp;P 500)</td><td></td><td>Dư nợ vay thương mại và công nghiệp</td></tr>
<tr><td>Chênh lệch lãi suất dài - ngắn (10 năm trừ lãi suất chính sách)</td><td></td><td>Tỷ lệ nợ tiêu dùng trả góp/thu nhập</td></tr>
<tr><td>Kỳ vọng của người tiêu dùng về điều kiện kinh doanh; chỉ số tín dụng dẫn dắt</td><td></td><td>Thay đổi CPI dịch vụ</td></tr>
</tbody></table>
<p class="tip"><b>Mẹo phân loại:</b> hỏi "chỉ số này phản ánh <b>quyết định/kỳ vọng</b> (đơn hàng, giấy phép, giá cổ phiếu) hay <b>kết quả hiện tại</b> (sản lượng, thu nhập, số việc làm) hay <b>hệ quả tích lũy</b> (thời gian thất nghiệp, tồn kho, chi phí lao động, dư nợ)?". Lần lượt là dẫn dắt, trùng, trễ.</p>
<p>Chỉ báo tổng hợp (composite index) gộp nhiều chỉ báo thành một số. ${t('diffusion', 'Chỉ số khuếch tán (diffusion index)')} cho biết bao nhiêu phần trăm thành phần đang tăng; giá trị trên 50 cho thấy đa số đang cải thiện. Các chỉ số khảo sát như PMI cũng là chỉ báo dẫn dắt phổ biến (trên 50 là mở rộng).</p>
<p class="warn"><b>Hạn chế:</b> chỉ báo dẫn dắt có thể phát tín hiệu sai; số liệu thường được điều chỉnh lại sau công bố; quan hệ giữa chỉ báo và chu kỳ có thể thay đổi theo thời gian và khác nhau giữa các nước.</p>`,
    },
    {
      title: '8. Tóm tắt và bẫy thường gặp',
      minutes: 4,
      html: `
<table class="plain"><thead><tr><th>Tình huống</th><th>Nhớ</th></tr></thead><tbody>
<tr><td>Cách đo chu kỳ</td><td>Growth rate cycle báo đỉnh, đáy sớm nhất; classical muộn nhất</td></tr>
<tr><td>Bốn pha</td><td>Phục hồi (gap âm, thu hẹp) → mở rộng → chậm lại (gap dương, thu hẹp) → suy giảm</td></tr>
<tr><td>Suy thoái</td><td>Thường hiểu là GDP thực giảm hai quý liên tiếp</td></tr>
<tr><td>Chu kỳ tín dụng</td><td>Thuận chu kỳ, dài hơn, khuếch đại suy thoái (nhất là gắn với bất động sản)</td></tr>
<tr><td>Tồn kho/doanh số</td><td>Cao bất thường gần đỉnh, thấp bất thường đầu phục hồi; là chỉ báo trễ</td></tr>
<tr><td>Lao động</td><td>Giờ làm đổi trước (dẫn dắt), số việc làm theo sau</td></tr>
<tr><td>Tiêu dùng</td><td>Hàng lâu bền nhạy nhất, hàng thiết yếu ổn định nhất</td></tr>
<tr><td>Ngoại thương</td><td>GDP trong nước → nhập khẩu; GDP đối tác → xuất khẩu</td></tr>
<tr><td>Chỉ báo</td><td>Giấy phép xây dựng, đơn hàng, chứng khoán: dẫn dắt. Sản xuất công nghiệp: trùng. Thời gian thất nghiệp, prime rate: trễ</td></tr>
</tbody></table>
<p>Tiếp theo: tab <b>Luyện tập</b> 10 câu (rút ngẫu nhiên từ ngân hàng 30 câu, mỗi lần làm một bộ khác). Module sau EC-03 bàn về cách chính phủ dùng ngân sách để làm phẳng chu kỳ.</p>`,
    },
  ];

  const glossary = {
    cycle: ['Business cycle', 'Chu kỳ kinh doanh', 'Dao động lặp lại nhưng không đều của hoạt động kinh tế tổng thể quanh xu hướng dài hạn.'],
    indicator: ['Economic indicator', 'Chỉ báo kinh tế', 'Biến số kinh tế dùng để theo dõi và dự báo chu kỳ.'],
    classical: ['Classical cycle', 'Chu kỳ cổ điển', 'Đo chu kỳ theo mức tuyệt đối của GDP thực.'],
    growthcycle: ['Growth cycle', 'Chu kỳ tăng trưởng', 'Đo chu kỳ theo chênh lệch giữa GDP thực và xu hướng dài hạn.'],
    growthrate: ['Growth rate cycle', 'Chu kỳ tốc độ tăng trưởng', 'Đo chu kỳ theo tốc độ tăng GDP thực; cho tín hiệu điểm chuyển sớm nhất.'],
    gap: ['Output gap', 'Chênh lệch sản lượng', 'GDP thực trừ GDP tiềm năng (thường tính theo % GDP tiềm năng).'],
    recovery: ['Recovery', 'Pha phục hồi', 'Sau đáy: output gap còn âm nhưng đang thu hẹp.'],
    slowdown: ['Slowdown', 'Pha chậm lại', 'Sau đỉnh: output gap còn dương nhưng đang thu hẹp.'],
    recession: ['Recession', 'Suy thoái', 'Giai đoạn GDP thực giảm; quy ước phổ biến là hai quý giảm liên tiếp.'],
    peak: ['Peak', 'Đỉnh chu kỳ', 'Điểm chuyển từ mở rộng sang chậm lại/suy giảm.'],
    trough: ['Trough', 'Đáy chu kỳ', 'Điểm chuyển từ suy giảm sang phục hồi.'],
    creditcycle: ['Credit cycle', 'Chu kỳ tín dụng', 'Sự mở rộng và thu hẹp luân phiên của khả năng tiếp cận và chi phí tín dụng.'],
    isratio: ['Inventory-sales ratio', 'Tỷ lệ tồn kho/doanh số', 'Tồn kho chia doanh số; tăng cao bất thường khi doanh số chậm lại bất ngờ.'],
    invcycle: ['Inventory cycle', 'Chu kỳ tồn kho', 'Dao động sản xuất do doanh nghiệp tích lũy hoặc xả tồn kho để đưa tỷ lệ tồn kho/doanh số về mức mong muốn.'],
    capu: ['Capacity utilization', 'Hệ số sử dụng công suất', 'Tỷ lệ công suất sản xuất đang được sử dụng; cao thì doanh nghiệp có động cơ đầu tư mới.'],
    durable: ['Durable goods', 'Hàng lâu bền', 'Hàng có thời gian sử dụng dài (thường trên 3 năm) như ô tô, đồ gia dụng; nhạy nhất với chu kỳ.'],
    confidence: ['Consumer confidence index', 'Chỉ số niềm tin người tiêu dùng', 'Khảo sát kỳ vọng của hộ gia đình về thu nhập và kinh tế; mang tính dẫn dắt.'],
    netexports: ['Net exports', 'Xuất khẩu ròng', 'Xuất khẩu trừ nhập khẩu (X - M).'],
    leading: ['Leading indicator', 'Chỉ báo dẫn dắt', 'Đổi hướng trước điểm chuyển của chu kỳ; dùng để dự báo.'],
    coincident: ['Coincident indicator', 'Chỉ báo trùng', 'Đổi hướng cùng lúc với chu kỳ; cho biết hiện tại đang ở đâu.'],
    lagging: ['Lagging indicator', 'Chỉ báo trễ', 'Đổi hướng sau khi chu kỳ đã đổi; dùng để xác nhận.'],
    diffusion: ['Diffusion index', 'Chỉ số khuếch tán', 'Tỷ lệ phần trăm các thành phần đang tăng; trên 50 cho thấy đa số cải thiện.'],
  };

  const practice = [
    { q: 'Cách đo chu kỳ kinh doanh nào thường cho tín hiệu đỉnh và đáy sớm nhất?', choices: ['Classical cycle', 'Growth cycle', 'Growth rate cycle'], answer: 2, explain: 'Growth rate cycle nhìn vào tốc độ tăng của GDP thực, nên đổi hướng khi tăng trưởng bắt đầu chậm lại, trước khi GDP rời khỏi xu hướng (growth cycle) và trước khi GDP giảm tuyệt đối (classical cycle).' },
    { q: 'Nền kinh tế có GDP thực cao hơn tiềm năng nhưng tốc độ tăng trưởng đang chậm dần, lạm phát vẫn tiếp tục tăng. Nền kinh tế đang ở pha:', choices: ['Chậm lại (slowdown)', 'Phục hồi (recovery)', 'Suy giảm (contraction)'], answer: 0, explain: 'Output gap dương nhưng thu hẹp là pha chậm lại; lạm phát đi trễ nên vẫn tăng. Phục hồi có output gap âm. Suy giảm có output gap âm và đang mở rộng.' },
    { q: 'Chỉ báo nào sau đây là chỉ báo trễ (lagging)?', choices: ['Số giấy phép xây dựng nhà mới', 'Thời gian thất nghiệp bình quân', 'Chỉ số sản xuất công nghiệp'], answer: 1, explain: 'Thời gian thất nghiệp bình quân chỉ giảm khi phục hồi đã diễn ra một thời gian (doanh nghiệp tăng giờ làm trước khi tuyển). Giấy phép xây dựng là dẫn dắt; sản xuất công nghiệp là trùng.' },
    { q: 'Khi doanh số bất ngờ chậm lại gần đỉnh chu kỳ, tỷ lệ tồn kho/doanh số thường:', choices: ['Giảm xuống dưới mức bình thường', 'Không đổi vì doanh nghiệp điều chỉnh ngay', 'Tăng lên trên mức bình thường, dẫn tới cắt giảm sản xuất'], answer: 2, explain: 'Hàng sản xuất theo kế hoạch cũ bị tồn lại ngoài ý muốn, tỷ lệ tăng; doanh nghiệp phải cắt sản xuất để xả kho, làm suy giảm sâu thêm. Lựa chọn "giảm xuống dưới mức bình thường" đúng với đầu pha phục hồi (doanh số tăng bất ngờ rút kho).' },
    { q: 'Khi cầu bắt đầu giảm, doanh nghiệp thường phản ứng ĐẦU TIÊN bằng cách:', choices: ['Giảm giờ làm và giảm cường độ sử dụng máy móc', 'Sa thải nhân viên chính thức', 'Bán bớt nhà xưởng và thiết bị'], answer: 0, explain: 'Thuê, sa thải và mua bán tài sản cố định tốn kém, nên doanh nghiệp điều chỉnh cường độ sử dụng nguồn lực sẵn có trước; chỉ khi xu hướng kéo dài mới sa thải hoặc thanh lý tài sản. Vì vậy giờ làm bình quân là chỉ báo dẫn dắt.' },
    { q: 'Loại chi tiêu tiêu dùng nào nhạy nhất với chu kỳ kinh doanh?', choices: ['Thực phẩm và đồ dùng hằng ngày', 'Ô tô và đồ gia dụng', 'Dịch vụ y tế thiết yếu'], answer: 1, explain: 'Hàng lâu bền có giá trị lớn, thường mua bằng tín dụng và có thể hoãn thay mới, nên tăng mạnh khi mở rộng và giảm mạnh khi suy giảm. Hàng thiết yếu và dịch vụ y tế ổn định qua chu kỳ.' },
    { q: 'Phát biểu nào đúng về chu kỳ tín dụng?', choices: ['Chu kỳ tín dụng thường ngắn hơn và biên độ nhỏ hơn chu kỳ kinh doanh', 'Tín dụng có tính nghịch chu kỳ nên làm giảm biến động kinh tế', 'Suy thoái trùng với giai đoạn thu hẹp tín dụng thường sâu và kéo dài hơn'], answer: 2, explain: 'Tín dụng thuận chu kỳ: khi tài sản giảm giá, giá trị thế chấp giảm và người cho vay siết lại, khuếch đại suy giảm. Chu kỳ tín dụng thường dài hơn và biên độ lớn hơn, nên hai phát biểu "ngắn hơn, biên độ nhỏ hơn" và "nghịch chu kỳ" đều sai.' },
    { q: 'Kinh tế của các đối tác thương mại chính tăng trưởng mạnh trong khi kinh tế trong nước đi ngang. Điều nào có khả năng xảy ra nhất?', choices: ['Xuất khẩu tăng, xuất khẩu ròng cải thiện', 'Nhập khẩu tăng mạnh, xuất khẩu ròng xấu đi', 'Nội tệ chắc chắn mất giá'], answer: 0, explain: 'GDP của đối tác quyết định nhu cầu với hàng xuất khẩu. Nhập khẩu phụ thuộc chủ yếu GDP trong nước (đang đi ngang), nên xuất khẩu ròng cải thiện. Lựa chọn "nhập khẩu tăng mạnh" nhầm chiều tác động; lựa chọn "nội tệ chắc chắn mất giá" không có căn cứ.' },
    { q: 'Một chỉ số khuếch tán của 10 chỉ báo dẫn dắt bằng 30. Điều này cho thấy:', choices: ['Nền kinh tế tăng trưởng 30%', 'Chỉ 30% thành phần đang tăng, đa số đang xấu đi', '30% thành phần đang ở mức cao kỷ lục'], answer: 1, explain: 'Diffusion index đo tỷ lệ phần trăm thành phần đang cải thiện. Dưới 50 nghĩa là đa số đang giảm, một tín hiệu cảnh báo suy yếu. Nó không đo mức tăng trưởng hay mức tuyệt đối.' },
    { q: 'Ngay sau đáy của chu kỳ, điều nào thường đúng?', choices: ['Thất nghiệp đã giảm mạnh và lạm phát tăng nhanh', 'Đầu tư vào nhà xưởng mới bùng nổ ngay lập tức', 'Tăng trưởng chuyển sang dương nhưng thất nghiệp vẫn cao, doanh nghiệp tăng giờ làm trước khi tuyển mới'], answer: 2, explain: 'Thất nghiệp và lạm phát đi trễ; doanh nghiệp còn nhiều công suất nhàn rỗi nên chưa xây nhà xưởng mới. Họ tăng giờ làm và dùng lao động tạm thời trước. Lựa chọn "thất nghiệp đã giảm mạnh và lạm phát tăng nhanh" mô tả giai đoạn muộn của mở rộng.' },
    { q: "Chỉ số GDP thực theo quý từ Q0 đến Q5 lần lượt là 100,0; 101,5; 102,4; 102,9; 102,6; 102,0. Đỉnh theo classical cycle và đỉnh theo growth rate cycle lần lượt ở quý nào?", choices: ["Classical ở Q1, growth rate ở Q3", "Classical ở Q3, growth rate ở Q1", "Cả hai đều ở Q3"], answer: 1, explain: "Tốc độ tăng so với quý trước từ Q1 đến Q5: 1,50%; 0,89%; 0,49%; -0,29%; -0,58%. Tốc độ tăng cao nhất ở Q1, nên đỉnh growth rate cycle ở Q1. Mức GDP cao nhất là 102,9 ở Q3, nên đỉnh classical cycle ở Q3. Lựa chọn \"classical ở Q1, growth rate ở Q3\" đảo ngược hai cách đo. Lựa chọn \"cả hai đều ở Q3\" bỏ qua việc tốc độ tăng đã giảm từ Q2: growth rate cycle báo đỉnh sớm hơn." },
    { q: "Output gap của một nền kinh tế thu hẹp từ -2,5% xuống -1,5% GDP tiềm năng, tăng trưởng vừa chuyển từ âm sang dương. Nền kinh tế nhiều khả năng đang ở pha:", choices: ["Phục hồi (recovery)", "Mở rộng (expansion)", "Suy giảm (contraction)"], answer: 0, explain: "Output gap âm nhưng đang thu hẹp là pha phục hồi. Mở rộng đòi hỏi output gap dương và tăng. Suy giảm là khi output gap âm và đang rộng ra." },
    { q: "Năm trước output gap của một nền kinh tế là +1,00%. Năm nay GDP thực là 490 và GDP tiềm năng là 500. Output gap năm nay và pha của chu kỳ nhiều khả năng là:", choices: ["-2,00%; suy giảm", "-2,00%; phục hồi", "-2,04%; suy giảm"], answer: 0, explain: "Output gap = (490 - 500)/500 = -2,00%. Gap chuyển từ dương sang âm và đang rộng ra nên là pha suy giảm. Lựa chọn \"phục hồi\" sai vì phục hồi là gap âm nhưng đang thu hẹp. Lựa chọn -2,04% chia cho GDP thực thay vì GDP tiềm năng." },
    { q: "Suy thoái (recession) thường được hiểu là:", choices: ["Tăng trưởng GDP thực thấp hơn xu hướng trong hai quý liên tiếp", "GDP thực giảm trong hai quý liên tiếp", "Output gap âm trong bất kỳ quý nào"], answer: 1, explain: "Định nghĩa thông dụng của suy thoái là GDP thực giảm tuyệt đối hai quý liên tiếp. Tăng trưởng dưới xu hướng hoặc output gap âm là dấu hiệu của pha suy giảm theo growth cycle, nhưng GDP vẫn có thể tăng nên chưa chắc là suy thoái." },
    { q: "Phát biểu nào đúng nhất về chu kỳ kinh doanh?", choices: ["Các pha lặp lại nhưng không đều đặn về độ dài và biên độ", "Mỗi chu kỳ kéo dài cố định khoảng 4 năm", "Đỉnh và đáy là các pha kéo dài nhiều quý"], answer: 0, explain: "Chu kỳ kinh doanh lặp lại nhưng độ dài (từ khoảng 1 đến hơn 10 năm) và biên độ không đều. Phương án \"cố định khoảng 4 năm\" sai vì không có độ dài cố định. Đỉnh và đáy là điểm chuyển, không phải pha." },
    { q: "Pha nào của chu kỳ có output gap dương và đang tăng, tuyển dụng tăng, thất nghiệp giảm và lạm phát bắt đầu tăng?", choices: ["Chậm lại (slowdown)", "Mở rộng (expansion)", "Phục hồi (recovery)"], answer: 1, explain: "Output gap dương và tăng, tuyển dụng mạnh, lạm phát bắt đầu tăng là đặc trưng của pha mở rộng. Chậm lại có output gap dương nhưng đang thu hẹp. Phục hồi có output gap âm và thất nghiệp vẫn cao." },
    { q: "Trong giai đoạn mở rộng tín dụng của chu kỳ tín dụng, điều nào nhiều khả năng xảy ra nhất?", choices: ["Tiêu chuẩn cho vay được nới lỏng và spread tín dụng thu hẹp", "Spread tín dụng nới rộng vì người cho vay đánh giá rủi ro cao hơn", "Giá trị tài sản thế chấp giảm khiến người cho vay dễ dãi hơn"], answer: 0, explain: "Khi kinh tế tốt, tài sản tăng giá, tài sản thế chấp có giá trị cao, người cho vay đánh giá rủi ro thấp nên nới tiêu chuẩn và spread thu hẹp. Spread nới rộng là đặc điểm của giai đoạn thu hẹp tín dụng. Tài sản thế chấp giảm giá làm người cho vay thận trọng hơn chứ không dễ dãi hơn." },
    { q: "Nhóm chỉ tiêu nào phù hợp nhất để theo dõi chu kỳ tín dụng?", choices: ["Tăng trưởng tín dụng, tỷ lệ tín dụng/GDP, giá bất động sản và spread tín dụng", "Tỷ lệ thất nghiệp và số giờ làm việc bình quân", "Chỉ số giá tiêu dùng và lạm phát cơ bản"], answer: 0, explain: "Chu kỳ tín dụng đo khả năng tiếp cận và chi phí tín dụng: tăng trưởng tín dụng, tín dụng/GDP, giá bất động sản (tài sản thế chấp) và spread. Thất nghiệp và giờ làm là chỉ tiêu của thị trường lao động trong chu kỳ kinh doanh. CPI đo lạm phát, không đo tín dụng." },
    { q: "Sau khi một đợt bùng nổ tín dụng bất động sản đảo chiều, tăng trưởng kinh tế thường chậm trong nhiều năm, chủ yếu vì:", choices: ["Giá nhà giảm làm hộ gia đình cảm thấy giàu hơn và tiết kiệm nhiều hơn", "Chu kỳ tín dụng thường ngắn hơn chu kỳ kinh doanh nên tác động kết thúc nhanh", "Hộ gia đình và doanh nghiệp phải giảm nợ trước khi chi tiêu trở lại"], answer: 2, explain: "Suy thoái trùng với thu hẹp tín dụng gắn với bất động sản thường sâu và dài vì phải giảm nợ (deleveraging) trước khi chi tiêu phục hồi. Giá nhà giảm làm hộ gia đình thấy nghèo đi, không phải giàu hơn. Chu kỳ tín dụng thường dài hơn, không ngắn hơn, chu kỳ kinh doanh." },
    { q: "Một nhà sản xuất có tồn kho 2,4 tỷ đồng và doanh số tháng 1,6 tỷ đồng, tương ứng mức bình thường của ngành. Doanh số bất ngờ tăng lên 2,0 tỷ đồng, tồn kho giảm còn 2,2 tỷ đồng. Tỷ lệ tồn kho/doanh số thay đổi thế nào và báo hiệu gì?", choices: ["Từ 1,50 xuống 1,10; doanh nghiệp sẽ cắt giảm sản xuất", "Từ 0,67 lên 0,91; hàng tồn tích lũy ngoài ý muốn", "Từ 1,50 xuống 1,10; doanh nghiệp sẽ tăng sản xuất để bổ sung kho"], answer: 2, explain: "Tỷ lệ = tồn kho/doanh số: 2,4/1,6 = 1,50, sau đó 2,2/2,0 = 1,10. Tỷ lệ xuống dưới mức bình thường do doanh số tăng bất ngờ, điển hình của đầu pha phục hồi: doanh nghiệp tăng sản xuất để bổ sung kho. Lựa chọn \"cắt giảm sản xuất\" là phản ứng khi tỷ lệ cao bất thường. Lựa chọn 0,67 lên 0,91 lấy doanh số chia tồn kho (đảo ngược tỷ lệ)." },
    { q: "Ở đầu pha phục hồi, chi đầu tư của doanh nghiệp thường bắt đầu tăng ở hạng mục nào trước?", choices: ["Nhà xưởng mới quy mô lớn", "Thiết bị có vòng đời ngắn như công nghệ và phần mềm", "Máy móc hạng nặng có vòng đời dài"], answer: 1, explain: "Khi phục hồi, doanh nghiệp còn công suất dư nên trước hết đầu tư vào thiết bị vòng đời ngắn (công nghệ, phần mềm) để nâng năng suất. Nhà xưởng mới và máy móc hạng nặng chỉ được đầu tư khi công suất hiện có được dùng gần hết, thường ở cuối pha mở rộng." },
    { q: "Chỉ báo nào sau đây là chỉ báo trùng (coincident)?", choices: ["Số đơn xin trợ cấp thất nghiệp lần đầu", "Thay đổi chi phí lao động trên mỗi đơn vị sản phẩm", "Số lao động phi nông nghiệp (nonfarm payrolls)"], answer: 2, explain: "Số việc làm phi nông nghiệp phản ánh hoạt động hiện tại nên là chỉ báo trùng. Đơn xin trợ cấp thất nghiệp lần đầu thay đổi trước chu kỳ nên là chỉ báo dẫn dắt. Chi phí lao động trên mỗi đơn vị sản phẩm là hệ quả tích lũy nên là chỉ báo trễ." },
    { q: "Chỉ báo nào sau đây là chỉ báo dẫn dắt (leading)?", choices: ["Chênh lệch giữa lợi suất trái phiếu 10 năm và lãi suất chính sách", "Lãi suất cho vay cơ bản (prime rate) bình quân", "Thu nhập cá nhân thực (trừ trợ cấp)"], answer: 0, explain: "Chênh lệch lãi suất dài - ngắn phản ánh kỳ vọng nên đổi hướng trước chu kỳ: chỉ báo dẫn dắt. Prime rate bình quân là chỉ báo trễ. Thu nhập cá nhân thực là chỉ báo trùng." },
    { q: "Nhà phân tích muốn xác nhận một điểm chuyển của chu kỳ đã xảy ra. Chỉ báo nào sau đây là chỉ báo trễ (lagging) phù hợp cho mục đích này?", choices: ["Chỉ số chứng khoán S&P 500", "Chỉ số sản xuất công nghiệp", "Thay đổi chỉ số CPI dịch vụ"], answer: 2, explain: "Lạm phát dịch vụ đổi hướng sau khi chu kỳ đã chuyển nên là chỉ báo trễ. Chỉ số chứng khoán phản ánh kỳ vọng nên là chỉ báo dẫn dắt. Sản xuất công nghiệp phản ánh hoạt động hiện tại nên là chỉ báo trùng." },
    { q: "Chỉ số PMI ngành sản xuất giảm từ 52 xuống 47. Diễn giải phù hợp nhất là:", choices: ["Sản lượng ngành sản xuất giảm 5%", "Khu vực sản xuất chuyển từ mở rộng sang thu hẹp, và đây là một tín hiệu dẫn dắt", "Khu vực sản xuất vẫn mở rộng nhưng với tốc độ chậm hơn"], answer: 1, explain: "PMI trên 50 là mở rộng, dưới 50 là thu hẹp; PMI là chỉ báo khảo sát dẫn dắt. Phương án \"giảm 5%\" nhầm điểm chỉ số với phần trăm thay đổi sản lượng. Phương án \"vẫn mở rộng nhưng chậm hơn\" chỉ đúng nếu PMI giảm nhưng vẫn trên 50." },
    { q: "Phát biểu nào đúng nhất về việc sử dụng chỉ báo kinh tế?", choices: ["Chỉ báo trễ được dùng chủ yếu để dự báo đỉnh của chu kỳ", "Quan hệ giữa một chỉ báo và chu kỳ là cố định qua thời gian và giống nhau giữa các nước", "Chỉ báo dẫn dắt có thể phát tín hiệu sai, và số liệu thường được điều chỉnh lại sau khi công bố"], answer: 2, explain: "Hạn chế chính: tín hiệu sai, số liệu bị điều chỉnh lại, quan hệ thay đổi theo thời gian và khác nhau giữa các nước. Chỉ báo trễ dùng để xác nhận điểm chuyển, không phải để dự báo. Phương án \"cố định và giống nhau giữa các nước\" trái với hạn chế đã nêu." },
    { q: "Tỷ lệ tiết kiệm của hộ gia đình thường diễn biến thế nào qua chu kỳ?", choices: ["Tăng khi tâm lý bất an ở đầu pha suy giảm", "Tăng khi người tiêu dùng lạc quan trong pha mở rộng", "Không đổi qua chu kỳ vì hộ gia đình làm phẳng tiêu dùng"], answer: 0, explain: "Khi bất an về việc làm và thu nhập ở đầu pha suy giảm, hộ gia đình tiết kiệm phòng thân nên tỷ lệ tiết kiệm tăng; khi lạc quan thì tỷ lệ này giảm. Làm phẳng tiêu dùng không có nghĩa tỷ lệ tiết kiệm cố định: chính tiết kiệm thay đổi để làm phẳng tiêu dùng." },
    { q: "Yếu tố nào sau đây nhiều khả năng làm nhu cầu nhà ở giảm?", choices: ["Lãi suất vay mua nhà giảm", "Giá nhà tăng nhanh hơn thu nhập trong nhiều năm", "Tỷ trọng dân số trong độ tuổi 25 đến 40 tăng"], answer: 1, explain: "Khi giá nhà tăng nhanh hơn thu nhập, nhà kém vừa túi tiền nên nhu cầu chững lại. Lãi suất vay mua nhà giảm và dân số trong độ tuổi lập gia đình tăng đều làm nhu cầu nhà ở tăng." },
    { q: "Kinh tế trong nước tăng trưởng mạnh hơn hẳn các đối tác thương mại, đồng thời nội tệ tăng giá. Xuất khẩu ròng nhiều khả năng sẽ:", choices: ["Cải thiện", "Không đổi vì hai tác động triệt tiêu nhau", "Xấu đi"], answer: 2, explain: "GDP trong nước tăng nhanh làm nhập khẩu tăng; nội tệ tăng giá làm hàng xuất khẩu đắt hơn và hàng nhập khẩu rẻ hơn. Cả hai cùng làm xuất khẩu ròng xấu đi, không triệt tiêu nhau." },
    { q: "Thu nhập của một hộ gia đình giảm 10% trong một năm do cắt giảm giờ làm, nhưng họ kỳ vọng thu nhập sẽ trở lại bình thường năm sau. Theo lập luận thu nhập thường xuyên, tiêu dùng của hộ nhiều khả năng:", choices: ["Giảm đúng 10%", "Giảm ít hơn 10%", "Giảm nhiều hơn 10%"], answer: 1, explain: "Tiêu dùng phụ thuộc thu nhập thường xuyên (kỳ vọng dài hạn). Thu nhập giảm tạm thời nên hộ gia đình làm phẳng tiêu dùng, dùng tiết kiệm hoặc vay để bù, tiêu dùng giảm ít hơn thu nhập. Giảm đúng hoặc nhiều hơn 10% bỏ qua hành vi làm phẳng tiêu dùng." },
  ];

  window.LESSONS['EC-02'] = {
    moduleId: 'EC-02',
    calculator: 'Không cần máy tính',
    warmup: [
      'Ôn EC-01: trong ngắn hạn, khi nào một hãng đang lỗ vẫn nên tiếp tục sản xuất?',
      'Theo bạn, khi kinh tế đi xuống, người dân cắt giảm chi tiêu nào trước: ăn uống hằng ngày hay mua xe máy mới? Vì sao?',
      'Kể tên một số liệu kinh tế được công bố hằng tháng ở Việt Nam mà bạn từng đọc (PMI, CPI, chỉ số sản xuất công nghiệp...).',
    ],
    sections,
    glossary,
    practice,
    widgets: {},
    slides: [],
    wrapup: [
      'Vẽ lại sóng chu kỳ và ghi tên 4 pha cùng dấu của output gap ở mỗi pha.',
      'Liệt kê 3 chỉ báo dẫn dắt, 2 chỉ báo trùng, 3 chỉ báo trễ mà không nhìn tài liệu.',
      'Giải thích bằng lời của bạn vì sao chu kỳ tín dụng làm suy thoái sâu hơn.',
    ],
  };
}());
