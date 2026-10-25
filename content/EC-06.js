// Bài giảng EC-06 - International Trade (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t } = window.CFAH;
  const vn = (x, d = 0) => x.toFixed(d).replace('.', ',');

  // Thị trường nội địa trong ví dụ: Qd = 200 - 2P, Qs = P - 10, giá thế giới 50.
  const QD = p => 200 - 2 * p, QS = p => p - 10, PW = 50;

  // Đồ thị cung cầu có thuế quan (dùng class của figure.tl).
  const tariffFig = (() => {
    const l = 60, r = 540, tp = 15, b = 270;
    const X = q => l + (q / 120) * (r - l), Y = p => b - ((p - 20) / 70) * (b - tp);
    const P1 = 60;
    let s = `<figure class="tl"><svg viewBox="0 0 560 310" role="img" aria-label="Tác động của thuế quan">`;
    s += `<polygon points="${X(QS(PW))},${Y(PW)} ${X(QS(P1))},${Y(P1)} ${X(QS(P1))},${Y(PW)}" fill="currentColor" opacity="0.18"/>`;
    s += `<polygon points="${X(QD(P1))},${Y(P1)} ${X(QD(PW))},${Y(PW)} ${X(QD(P1))},${Y(PW)}" fill="currentColor" opacity="0.18"/>`;
    s += `<rect x="${X(QS(P1))}" y="${Y(P1)}" width="${X(QD(P1)) - X(QS(P1))}" height="${Y(PW) - Y(P1)}" fill="currentColor" opacity="0.08"/>`;
    s += `<line x1="${l}" y1="${b}" x2="${r}" y2="${b}" class="axis"/><line x1="${l}" y1="${tp}" x2="${l}" y2="${b}" class="axis"/>`;
    s += `<line x1="${X(QD(85))}" y1="${Y(85)}" x2="${X(QD(40))}" y2="${Y(40)}" class="flow"/><text x="${X(QD(44)) + 10}" y="${Y(44)}" class="tick" text-anchor="start">Cầu D</text>`;
    s += `<line x1="${X(QS(22))}" y1="${Y(22)}" x2="${X(QS(88))}" y2="${Y(88)}" class="pv"/><text x="${X(QS(86)) + 10}" y="${Y(86)}" class="tick" text-anchor="start">Cung S</text>`;
    s += `<line x1="${l}" y1="${Y(PW)}" x2="${r}" y2="${Y(PW)}" class="axis" stroke-dasharray="5 5"/><text x="${l - 6}" y="${Y(PW) + 5}" class="tick" text-anchor="end">50</text>`;
    s += `<line x1="${l}" y1="${Y(P1)}" x2="${r}" y2="${Y(P1)}" class="axis" stroke-dasharray="5 5"/><text x="${l - 6}" y="${Y(P1) + 5}" class="tick" text-anchor="end">60</text>`;
    [[QS(PW), '40'], [QS(P1), '50'], [QD(P1), '80'], [QD(PW), '100']].forEach(([q, lab]) => { s += `<line x1="${X(q)}" y1="${Y(PW)}" x2="${X(q)}" y2="${b}" class="axis" stroke-dasharray="2 4"/><text x="${X(q)}" y="${b + 18}" class="tick">${lab}</text>`; });
    s += `<text x="${(X(50) + X(80)) / 2}" y="${(Y(PW) + Y(P1)) / 2 + 5}" class="tick">thu thuế</text>`;
    s += `<text x="${r - 4}" y="${Y(P1) - 8}" class="tick" text-anchor="end">giá sau thuế = 50 + 10</text><text x="${r - 4}" y="${Y(PW) + 18}" class="tick" text-anchor="end">giá thế giới</text>`;
    s += `<text x="${(l + r) / 2}" y="305" class="tick">Lượng (nghìn sản phẩm)</text>`;
    return `${s}</svg><figcaption>Hai tam giác đậm là phần mất trắng (deadweight loss); hình chữ nhật nhạt là tiền thuế chính phủ thu.</figcaption></figure>`;
  })();

  const sections = [
    {
      title: '1. Bức tranh lớn',
      minutes: 4,
      html: `
<p>EC-05 cho thấy thương mại là một <b>công cụ địa chính trị</b>. Module này đi sâu vào kinh tế học của thương mại: vì sao các nước buôn bán với nhau, ai được ai mất, và điều gì xảy ra khi chính phủ dựng rào cản.</p>
<table class="plain"><thead><tr><th>LOS 2027</th><th>Câu hỏi</th><th>Phần</th></tr></thead><tbody>
<tr><td>Benefits and costs of international trade</td><td>Thương mại tạo ra lợi ích từ đâu, và ai chịu thiệt?</td><td>2, 3</td></tr>
<tr><td>Types of trade restrictions</td><td>Thuế quan, hạn ngạch, trợ cấp xuất khẩu... tác động thế nào?</td><td>4, 5, 6</td></tr>
<tr><td>Trading blocs, common markets, economic unions</td><td>Vì sao các nước lập khối thương mại?</td><td>7</td></tr>
</tbody></table>
<div class="key">Thông điệp của module: thương mại tự do làm <b>tổng phúc lợi</b> tăng, nhưng lợi ích <b>phân bổ không đều</b>. Mọi rào cản thương mại đều chuyển phúc lợi giữa các nhóm và tạo ra một phần <b>mất trắng</b> cho xã hội.</div>`,
    },
    {
      title: '2. Lợi thế tuyệt đối và lợi thế so sánh',
      minutes: 9,
      html: `
<ul>
<li>${t('absadv', 'Lợi thế tuyệt đối (absolute advantage)')}: sản xuất một hàng hóa với <b>chi phí nguồn lực thấp hơn</b> nước khác.</li>
<li>${t('compadv', 'Lợi thế so sánh (comparative advantage)')}: sản xuất một hàng hóa với <b>${t('oppcost', 'chi phí cơ hội')} thấp hơn</b>, tức phải hy sinh ít hàng hóa khác hơn.</li>
</ul>
<div class="key">Thương mại có lợi dựa trên <b>lợi thế so sánh</b>, không phải lợi thế tuyệt đối. Ngay cả khi một nước giỏi hơn ở mọi mặt hàng, cả hai nước vẫn được lợi nếu mỗi nước chuyên môn hóa vào hàng có chi phí cơ hội thấp.</div>

<div class="example"><div class="ex-h">Ví dụ 2.1 - Việt Nam và Hàn Quốc (số liệu giả định)</div>
<table class="plain"><thead><tr><th>Sản lượng một lao động / tháng</th><th>Gạo (tấn)</th><th>Máy móc (chiếc)</th></tr></thead><tbody>
<tr><td>Việt Nam</td><td>10</td><td>5</td></tr>
<tr><td>Hàn Quốc</td><td>12</td><td>15</td></tr>
</tbody></table>
<p>Nước nào có lợi thế tuyệt đối, lợi thế so sánh ở mặt hàng nào? Nếu Việt Nam chuyển 3 lao động từ máy móc sang gạo và Hàn Quốc chuyển 2 lao động từ gạo sang máy móc, tổng sản lượng thay đổi thế nào?</p>
<details><summary>Xem lời giải</summary>
<p><b>Lợi thế tuyệt đối:</b> Hàn Quốc ở cả hai mặt hàng (12 &gt; 10 và 15 &gt; 5).</p>
<p><b>Chi phí cơ hội của 1 tấn gạo:</b> Việt Nam = 5/10 = 0,5 máy; Hàn Quốc = 15/12 = 1,25 máy. Việt Nam rẻ hơn, nên có <b>lợi thế so sánh về gạo</b>.<br>
<b>Chi phí cơ hội của 1 máy:</b> Việt Nam = 10/5 = 2 tấn gạo; Hàn Quốc = 12/15 = 0,8 tấn. Hàn Quốc có <b>lợi thế so sánh về máy móc</b>.</p>
<p>Việt Nam: +3 × 10 = +30 tấn gạo, -3 × 5 = -15 máy. Hàn Quốc: -2 × 12 = -24 tấn gạo, +2 × 15 = +30 máy.<br>
Tổng: <b>+6 tấn gạo và +15 máy</b>, không tốn thêm lao động nào. Đó là "chiếc bánh lớn hơn" mà thương mại chia lại cho hai nước.</p>
<p>Giá trao đổi có lợi cho cả hai phải nằm giữa hai chi phí cơ hội: từ 0,8 đến 2 tấn gạo cho 1 máy.</p></details></div>
<p class="warn"><b>Bẫy:</b> "Nước A có lợi thế tuyệt đối ở cả hai mặt hàng nên không cần buôn bán" là <b>sai</b>. Luôn so sánh chi phí cơ hội.</p>`,
    },
    {
      title: '3. Lợi ích và chi phí của thương mại quốc tế',
      minutes: 8,
      html: `
<table class="plain"><thead><tr><th>Lợi ích</th><th>Chi phí</th></tr></thead><tbody>
<tr><td><b>Người tiêu dùng:</b> giá thấp hơn nhờ chuyên môn hóa, nhiều lựa chọn hơn, giảm sức mạnh định giá của doanh nghiệp độc quyền trong nước</td><td><b>Mất việc làm</b> ở các ngành phải cạnh tranh với hàng nhập khẩu</td></tr>
<tr><td><b>Doanh nghiệp xuất khẩu:</b> thị trường lớn hơn, lợi thế quy mô, lợi nhuận cao hơn</td><td><b>Bất bình đẳng tăng</b>, ít nhất trong ngắn hạn: lợi ích dồn về người tiêu dùng và ngành xuất khẩu, thiệt hại tập trung ở một nhóm lao động</td></tr>
<tr><td><b>Nền kinh tế:</b> phân bổ nguồn lực hiệu quả hơn, cạnh tranh thúc đẩy năng suất và lan tỏa công nghệ</td><td><b>Phụ thuộc vào nước ngoài</b> với một số hàng hóa quan trọng</td></tr>
</tbody></table>
<p>Về dài hạn, khi người lao động được đào tạo lại và chuyển sang ngành khác, chi phí ngắn hạn của thương mại tự do <b>giảm đáng kể</b>, thậm chí được bù lại hoàn toàn. Vì vậy đa số nhà kinh tế ủng hộ thương mại tự do kèm chính sách hỗ trợ người bị ảnh hưởng.</p>
<div class="key">Lợi ích của thương mại <b>phân tán</b> (hàng triệu người tiêu dùng, mỗi người lợi một ít) nên ít ai lên tiếng. Thiệt hại <b>tập trung</b> (một ngành, một địa phương) nên nhóm này vận động mạnh cho bảo hộ. Đây là lý do rào cản thương mại vẫn tồn tại.</div>`,
    },
    {
      title: '4. Các loại hạn chế thương mại và lý do áp dụng',
      minutes: 8,
      html: `
<table class="plain"><thead><tr><th>Công cụ</th><th>Nội dung</th></tr></thead><tbody>
<tr><td>${t('tariff', 'Thuế quan (tariff)')}</td><td>Thuế đánh vào hàng nhập khẩu, chính phủ thu</td></tr>
<tr><td>${t('quota', 'Hạn ngạch (quota)')}</td><td>Giới hạn số lượng nhập khẩu trong một khoảng thời gian</td></tr>
<tr><td>${t('subsidy', 'Trợ cấp xuất khẩu (export subsidy)')}</td><td>Chính phủ trả tiền cho doanh nghiệp theo lượng hàng xuất khẩu</td></tr>
<tr><td>${t('content', 'Yêu cầu nội địa hóa (minimum domestic content)')}</td><td>Một tỷ lệ tối thiểu giá trị sản phẩm phải sản xuất trong nước</td></tr>
<tr><td>${t('ver', 'Hạn chế xuất khẩu tự nguyện (VER)')}</td><td>Nước xuất khẩu <b>tự</b> giới hạn lượng xuất, thường để tránh bị nước nhập khẩu áp thuế hoặc hạn ngạch</td></tr>
</tbody></table>

<h4>Lý do bảo hộ: lý do nào được nhà kinh tế ủng hộ?</h4>
<table class="plain"><thead><tr><th>Có cơ sở (được nhiều nhà kinh tế chấp nhận)</th><th>Ít được ủng hộ</th></tr></thead><tbody>
<tr><td><b>Ngành non trẻ (infant industry):</b> bảo hộ tạm thời để ngành mới đủ quy mô cạnh tranh</td><td><b>Bảo vệ việc làm trong nước:</b> một số việc mất đi nhưng việc khác được tạo ra, người tiêu dùng hưởng giá thấp</td></tr>
<tr><td><b>An ninh quốc gia:</b> duy trì sản xuất hàng hóa thiết yếu cho quốc phòng phòng khi có xung đột</td><td><b>Bảo vệ doanh nghiệp trong nước:</b> thường do vận động chính trị, người tiêu dùng chịu giá cao hơn</td></tr>
</tbody></table>
<p class="tip">Khi đề hỏi lý do "most likely supported by economists", chọn <b>infant industry</b> hoặc <b>national security</b>.</p>`,
    },
    {
      title: '5. Thuế quan và hạn ngạch: ai được, ai mất?',
      minutes: 13,
      html: `
<p>Xét một <b>nước nhỏ</b> (không đủ lớn để làm thay đổi giá thế giới) nhập khẩu một mặt hàng. Cầu nội địa Q<sub>D</sub> = 200 - 2P, cung nội địa Q<sub>S</sub> = P - 10 (nghìn sản phẩm), giá thế giới 50 USD. Chính phủ áp thuế 10 USD mỗi sản phẩm.</p>
${tariffFig}
<div class="example"><div class="ex-h">Ví dụ 5.1 - Tính tác động của thuế quan</div>
<details><summary>Xem lời giải</summary>
<table class="plain"><thead><tr><th></th><th>Thương mại tự do (P = 50)</th><th>Có thuế (P = 60)</th></tr></thead><tbody>
<tr><td>Lượng cầu Q<sub>D</sub></td><td>100</td><td>80</td></tr>
<tr><td>Cung nội địa Q<sub>S</sub></td><td>40</td><td>50</td></tr>
<tr><td>Nhập khẩu</td><td>60</td><td>30</td></tr>
</tbody></table>
<ul>
<li>${t('cs', 'Thặng dư người tiêu dùng')} giảm: 10 × (100 + 80)/2 = <b>900</b></li>
<li>${t('ps', 'Thặng dư nhà sản xuất')} tăng: 10 × (40 + 50)/2 = <b>450</b></li>
<li>Thu thuế của chính phủ: 10 × 30 = <b>300</b></li>
<li>${t('dwl', 'Mất trắng (deadweight loss)')}: 900 - 450 - 300 = <b>150</b>, gồm méo mó sản xuất 0,5 × 10 × 10 = 50 và méo mó tiêu dùng 0,5 × 10 × 20 = 100</li>
</ul></details></div>
<div class="key">Thuế quan ở nước nhỏ: <b>giá trong nước tăng</b> đúng bằng mức thuế, <b>nhập khẩu giảm</b>, sản xuất trong nước tăng, tiêu dùng giảm, chính phủ có thu, <b>phúc lợi quốc gia giảm</b> (deadweight loss).</div>
<h4>Thử ngay: kéo thanh mức thuế</h4>
<div class="widget" data-widget="tariff"></div>

<h4>Hạn ngạch</h4>
<p>Hạn ngạch 30 nghìn sản phẩm tạo ra <b>cùng mức giá 60</b> như thuế 10. Khác biệt nằm ở hình chữ nhật 300: đó là ${t('rent', 'tô hạn ngạch (quota rent)')}, khoản lợi của người được quyền nhập khẩu (mua giá 50, bán giá 60).</p>
<ul>
<li>Nếu chính phủ <b>bán đấu giá giấy phép</b> nhập khẩu: chính phủ thu 300, tác động giống thuế quan.</li>
<li>Nếu giấy phép được <b>cấp miễn phí cho doanh nghiệp nước ngoài</b>: 300 chảy ra nước ngoài, nước nhập khẩu mất thêm phần này.</li>
</ul>
<h4>Nước lớn thì sao?</h4>
<p>Nếu nước nhập khẩu đủ lớn, thuế làm cầu thế giới giảm và <b>giá thế giới giảm</b>. Một phần thuế do nhà xuất khẩu nước ngoài gánh (cải thiện ${t('tot', 'tỷ lệ trao đổi (terms of trade)')}), nên về lý thuyết nước lớn có thể được lợi ròng. Nhưng phúc lợi thế giới vẫn giảm, và các nước khác thường trả đũa.</p>`,
    },
    {
      title: '6. Trợ cấp xuất khẩu, VER và nội địa hóa',
      minutes: 6,
      html: `
<h4>Trợ cấp xuất khẩu</h4>
<p>Doanh nghiệp được trợ cấp khi bán ra nước ngoài nên họ chỉ chịu bán trong nước nếu giá trong nước cũng cao như vậy. Ở <b>nước nhỏ</b>, giá trong nước tăng đúng bằng mức trợ cấp: giá thế giới + trợ cấp.</p>
<div class="example"><div class="ex-h">Ví dụ 6.1</div>
<p>Nước nhỏ xuất khẩu một mặt hàng: Q<sub>D</sub> = 100 - P, Q<sub>S</sub> = 2P - 20, giá thế giới 50. Chính phủ trợ cấp 8 cho mỗi sản phẩm xuất khẩu.</p>
<details><summary>Xem lời giải</summary>
<p>Giá trong nước tăng lên 58. Xuất khẩu tăng từ 80 - 50 = 30 lên 96 - 42 = 54.<br>
Người tiêu dùng mất 8 × (50 + 42)/2 = <b>368</b>; nhà sản xuất được 8 × (30 + 96)/2 = <b>704</b>; chính phủ chi 8 × 54 = <b>432</b>.<br>
Phúc lợi ròng: 704 - 368 - 432 = <b>-96</b> (deadweight loss).</p></details></div>
<p>Ở <b>nước lớn</b>, trợ cấp làm cung thế giới tăng, <b>giá thế giới giảm</b>: một phần lợi ích chảy sang người tiêu dùng nước ngoài, còn nhà sản xuất nước ngoài bị thiệt. Các nước bị ảnh hưởng thường đáp trả bằng thuế đối kháng.</p>
<h4>VER</h4>
<p>VER gây thiệt hại cho nước nhập khẩu <b>bằng một hạn ngạch tương đương mà giấy phép không thu tiền</b>: tô hạn ngạch rơi vào tay nhà xuất khẩu nước ngoài (họ bán ít hơn nhưng giá cao hơn).</p>
<h4>Yêu cầu nội địa hóa</h4>
<p>Buộc nhà sản xuất dùng linh kiện trong nước dù đắt hơn, làm chi phí và giá bán tăng. Đây cũng là một công cụ kinh tế không hợp tác đã gặp ở EC-05.</p>`,
    },
    {
      title: '7. Khối thương mại, thị trường chung và liên minh kinh tế',
      minutes: 8,
      html: `
<p>Các ${t('bloc', 'khối thương mại (trading blocs)')} là thỏa thuận giữa một nhóm nước. Mỗi bậc sau giữ mọi đặc điểm của bậc trước và thêm một mức hội nhập:</p>
<table class="plain"><thead><tr><th>Bậc</th><th>Thêm gì so với bậc trước</th><th>Ví dụ</th></tr></thead><tbody>
<tr><td>${t('fta', 'Khu vực thương mại tự do (FTA)')}</td><td>Xóa rào cản thương mại <b>giữa các thành viên</b>; mỗi nước tự đặt chính sách với bên ngoài</td><td>USMCA (Mỹ, Canada, Mexico), AFTA của ASEAN</td></tr>
<tr><td>${t('cu', 'Liên minh thuế quan (customs union)')}</td><td>+ <b>chính sách thương mại chung</b> với nước ngoài khối (biểu thuế chung)</td><td>Liên minh thuế quan EU</td></tr>
<tr><td>${t('cm', 'Thị trường chung (common market)')}</td><td>+ <b>tự do di chuyển lao động và vốn</b> giữa các thành viên</td><td>Thị trường chung của EU</td></tr>
<tr><td>${t('eu', 'Liên minh kinh tế (economic union)')}</td><td>+ <b>thể chế kinh tế chung</b>, phối hợp chính sách kinh tế</td><td>Liên minh châu Âu</td></tr>
<tr><td>${t('mu', 'Liên minh tiền tệ (monetary union)')}</td><td>+ <b>đồng tiền chung</b></td><td>Khu vực đồng euro</td></tr>
</tbody></table>
<p class="tip"><b>Mẹo nhớ thứ tự:</b> hàng hóa tự do → chung thuế với bên ngoài → người và vốn tự do → chung thể chế → chung tiền.</p>

<h4>Động cơ và lợi ích</h4>
<ul>
<li><b>Thị trường lớn hơn:</b> lợi thế quy mô, cạnh tranh mạnh hơn, năng suất tăng.</li>
<li><b>Thu hút FDI:</b> nhà đầu tư đặt nhà máy trong khối để phục vụ cả khối.</li>
<li><b>Giảm rủi ro xung đột</b>, tăng hợp tác chính trị giữa các thành viên.</li>
<li><b>Dễ đàm phán hơn</b> so với thỏa thuận toàn cầu (ít bên hơn, lợi ích gần nhau hơn).</li>
</ul>
<h4>Mặt trái</h4>
<ul>
<li>${t('diversion', 'Chuyển hướng thương mại (trade diversion)')}: nhập khẩu chuyển từ nước ngoài khối chi phí thấp sang nước trong khối chi phí cao hơn chỉ vì được miễn thuế. Ngược lại là <b>trade creation</b>: hàng trong khối rẻ hơn thay thế sản xuất nội địa kém hiệu quả.</li>
<li>Nếu khối <b>tăng</b> rào cản với nước ngoài khối, lợi ích phúc lợi bị thu hẹp, trường hợp cực đoan có thể bị chi phí vượt qua.</li>
<li>Càng hội nhập sâu càng <b>mất chủ quyền chính sách</b>. Liên minh tiền tệ khiến một nước không thể tự điều chỉnh lãi suất hay tỷ giá khi gặp cú sốc riêng (ví dụ khủng hoảng nợ Hy Lạp).</li>
</ul>`,
    },
    {
      title: '8. Tóm tắt và bẫy thường gặp',
      minutes: 4,
      html: `
<table class="plain"><thead><tr><th>Tình huống</th><th>Nhớ</th></tr></thead><tbody>
<tr><td>Lợi thế so sánh</td><td>So <b>chi phí cơ hội</b>, không so năng suất tuyệt đối</td></tr>
<tr><td>Ai thiệt khi mở cửa thương mại?</td><td>Lao động và doanh nghiệp ngành cạnh tranh nhập khẩu, chủ yếu trong ngắn hạn</td></tr>
<tr><td>Thuế quan ở nước nhỏ</td><td>Giá trong nước tăng bằng mức thuế; CS giảm, PS tăng, chính phủ thu, có deadweight loss</td></tr>
<tr><td>Hạn ngạch</td><td>Giống thuế quan về giá; tô hạn ngạch thuộc về ai tùy cách cấp giấy phép</td></tr>
<tr><td>VER</td><td>Như hạn ngạch mà tô hạn ngạch rơi vào nhà xuất khẩu nước ngoài</td></tr>
<tr><td>Trợ cấp xuất khẩu</td><td>Giá trong nước tăng; người tiêu dùng nước xuất khẩu thiệt; nước lớn làm giá thế giới giảm</td></tr>
<tr><td>Lý do bảo hộ có cơ sở</td><td>Infant industry, national security</td></tr>
<tr><td>Bậc thang khối thương mại</td><td>FTA → customs union → common market → economic union → monetary union</td></tr>
<tr><td>Trade diversion</td><td>Mua của thành viên đắt hơn thay vì nước ngoài khối rẻ hơn</td></tr>
</tbody></table>
<p>Tiếp theo: tab <b>Luyện tập</b> 10 câu. EC-07 sẽ chuyển sang mặt tài chính của quan hệ quốc tế: thị trường ngoại hối và dòng vốn.</p>`,
    },
  ];

  const glossary = {
    absadv: ['Absolute advantage', 'Lợi thế tuyệt đối', 'Sản xuất một hàng hóa với chi phí nguồn lực thấp hơn nước khác.'],
    compadv: ['Comparative advantage', 'Lợi thế so sánh', 'Sản xuất một hàng hóa với chi phí cơ hội thấp hơn nước khác; là cơ sở của lợi ích thương mại.'],
    oppcost: ['Opportunity cost', 'Chi phí cơ hội', 'Lượng hàng hóa khác phải hy sinh để sản xuất thêm một đơn vị hàng hóa này.'],
    tariff: ['Tariff', 'Thuế quan', 'Thuế đánh vào hàng nhập khẩu do chính phủ thu.'],
    quota: ['Import quota', 'Hạn ngạch nhập khẩu', 'Giới hạn số lượng hàng được nhập khẩu trong một khoảng thời gian.'],
    subsidy: ['Export subsidy', 'Trợ cấp xuất khẩu', 'Khoản chính phủ trả cho doanh nghiệp theo lượng hàng xuất khẩu.'],
    content: ['Minimum domestic content requirement', 'Yêu cầu nội địa hóa tối thiểu', 'Quy định một tỷ lệ tối thiểu giá trị sản phẩm phải sản xuất trong nước.'],
    ver: ['Voluntary export restraint (VER)', 'Hạn chế xuất khẩu tự nguyện', 'Nước xuất khẩu tự giới hạn lượng xuất để tránh bị áp thuế hay hạn ngạch; tô hạn ngạch thuộc nhà xuất khẩu.'],
    cs: ['Consumer surplus', 'Thặng dư người tiêu dùng', 'Chênh lệch giữa mức giá người mua sẵn sàng trả và giá thực trả, cộng trên mọi đơn vị mua.'],
    ps: ['Producer surplus', 'Thặng dư nhà sản xuất', 'Chênh lệch giữa giá bán và chi phí biên của nhà sản xuất, cộng trên mọi đơn vị bán.'],
    dwl: ['Deadweight loss', 'Mất trắng phúc lợi', 'Phần phúc lợi xã hội mất đi do méo mó sản xuất và tiêu dùng, không ai nhận được.'],
    rent: ['Quota rent', 'Tô hạn ngạch', '(Giá trong nước - giá thế giới) x lượng hạn ngạch: lợi của người được quyền nhập khẩu.'],
    tot: ['Terms of trade', 'Tỷ lệ trao đổi', 'Giá hàng xuất khẩu so với giá hàng nhập khẩu của một nước.'],
    bloc: ['Trading bloc / regional trading agreement', 'Khối thương mại', 'Thỏa thuận giữa một nhóm nước nhằm giảm rào cản thương mại giữa các thành viên.'],
    fta: ['Free trade area (FTA)', 'Khu vực thương mại tự do', 'Xóa rào cản thương mại giữa các thành viên; mỗi nước tự quyết chính sách với bên ngoài.'],
    cu: ['Customs union', 'Liên minh thuế quan', 'FTA cộng chính sách thương mại chung với nước ngoài khối.'],
    cm: ['Common market', 'Thị trường chung', 'Customs union cộng tự do di chuyển lao động và vốn.'],
    eu: ['Economic union', 'Liên minh kinh tế', 'Common market cộng thể chế kinh tế chung và phối hợp chính sách kinh tế.'],
    mu: ['Monetary union', 'Liên minh tiền tệ', 'Economic union cộng đồng tiền chung.'],
    diversion: ['Trade diversion', 'Chuyển hướng thương mại', 'Nhập khẩu chuyển từ nước ngoài khối chi phí thấp sang thành viên chi phí cao hơn do ưu đãi thuế.'],
  };

  const practice = [
    { q: 'Một lao động ở nước X làm được 8 áo hoặc 4 xe đạp mỗi ngày; ở nước Y làm được 6 áo hoặc 1 xe đạp. Phát biểu nào đúng nhất?', choices: ['Y nên chuyên môn hóa sản xuất xe đạp', 'X có lợi thế so sánh về xe đạp, Y có lợi thế so sánh về áo', 'Không có lợi ích từ thương mại vì X có lợi thế tuyệt đối ở cả hai mặt hàng'], answer: 1, explain: 'Chi phí cơ hội của 1 xe đạp: X = 8/4 = 2 áo, Y = 6/1 = 6 áo, nên X có lợi thế so sánh về xe đạp. Chi phí cơ hội của 1 áo: X = 0,5 xe, Y = 0,17 xe, nên Y có lợi thế so sánh về áo. Lợi thế tuyệt đối không quyết định có buôn bán hay không.' },
    { q: 'Một nước nhỏ áp thuế nhập khẩu. Tác động nào sau đây là đúng?', choices: ['Giá trong nước tăng, nhập khẩu giảm, chính phủ có thu và phát sinh deadweight loss', 'Giá thế giới giảm đúng bằng mức thuế', 'Thặng dư người tiêu dùng tăng do sản xuất trong nước tăng'], answer: 0, explain: 'Nước nhỏ không ảnh hưởng giá thế giới nên giá trong nước tăng đúng bằng mức thuế. Người tiêu dùng chịu giá cao hơn nên thặng dư của họ giảm, không tăng.' },
    { q: 'Cầu nội địa Qd = 150 - P, cung nội địa Qs = P - 30, giá thế giới 50. Một nước nhỏ áp thuế nhập khẩu 5 mỗi đơn vị. Deadweight loss gần nhất với:', choices: ['350,0', '112,5', '25,0'], answer: 2, explain: 'Giá lên 55: Qd từ 100 xuống 95, Qs từ 20 lên 25, nhập khẩu từ 80 xuống 70. CS giảm 5 x (100 + 95)/2 = 487,5; PS tăng 5 x (20 + 25)/2 = 112,5; thu thuế 5 x 70 = 350. DWL = 487,5 - 112,5 - 350 = 25. Đáp án A là tiền thuế, B là phần tăng thặng dư nhà sản xuất.' },
    { q: 'Một hạn ngạch nhập khẩu được thực hiện bằng cách cấp miễn phí giấy phép cho nhà xuất khẩu nước ngoài (tương tự VER). Tô hạn ngạch thuộc về:', choices: ['Chính phủ nước nhập khẩu', 'Người tiêu dùng nước nhập khẩu', 'Nhà xuất khẩu nước ngoài'], answer: 2, explain: 'Người nắm giấy phép mua theo giá thế giới và bán theo giá cao trong nước nên hưởng tô hạn ngạch. Chính phủ chỉ thu được nếu bán đấu giá giấy phép. Người tiêu dùng luôn thiệt vì giá tăng.' },
    { q: 'Một nước nhỏ xuất khẩu lúa mì áp dụng trợ cấp xuất khẩu. Phát biểu nào đúng nhất?', choices: ['Giá lúa mì trong nước tăng bằng mức trợ cấp và người tiêu dùng trong nước bị thiệt', 'Giá thế giới giảm bằng mức trợ cấp', 'Người tiêu dùng trong nước được lợi nhờ cung tăng'], answer: 0, explain: 'Nhà sản xuất chỉ bán trong nước khi giá bằng giá thế giới cộng trợ cấp, nên giá trong nước tăng. Giá thế giới chỉ giảm khi nước xuất khẩu đủ lớn; nước nhỏ không ảnh hưởng giá thế giới.' },
    { q: 'Lý do nào sau đây để hạn chế thương mại được nhiều nhà kinh tế ủng hộ nhất?', choices: ['Bảo vệ việc làm trong các ngành hiện có', 'Bảo hộ tạm thời một ngành non trẻ cho đến khi đủ sức cạnh tranh', 'Bảo vệ lợi nhuận của doanh nghiệp trong nước trước hàng nhập khẩu giá rẻ'], answer: 1, explain: 'Infant industry (cùng với national security) là lập luận có cơ sở. Bảo vệ việc làm và doanh nghiệp trong nước ít được ủng hộ vì người tiêu dùng chịu giá cao và việc làm mới được tạo ra ở ngành khác.' },
    { q: 'Các thành viên xóa thuế quan với nhau và áp dụng biểu thuế chung với nước ngoài khối, nhưng lao động và vốn chưa được tự do di chuyển. Đây là:', choices: ['Khu vực thương mại tự do', 'Liên minh thuế quan', 'Thị trường chung'], answer: 1, explain: 'Chính sách thương mại chung với bên ngoài là dấu hiệu của customs union. FTA không có biểu thuế chung. Common market còn có thêm tự do di chuyển lao động và vốn.' },
    { q: 'Một khối gồm thị trường chung cộng với thể chế kinh tế chung và phối hợp chính sách kinh tế, nhưng chưa dùng đồng tiền chung, được gọi là:', choices: ['Liên minh thuế quan', 'Liên minh tiền tệ', 'Liên minh kinh tế'], answer: 2, explain: 'Economic union = common market + thể chế kinh tế chung. Monetary union mới có thêm đồng tiền chung. Customs union còn thấp hơn common market.' },
    { q: 'Sau khi gia nhập một FTA, nước A chuyển từ nhập khẩu thép của nước ngoài khối (chi phí sản xuất thấp nhất) sang nhập của một thành viên có chi phí cao hơn nhưng được miễn thuế. Hiện tượng này là:', choices: ['Chuyển hướng thương mại (trade diversion)', 'Tạo lập thương mại (trade creation)', 'Hạn chế xuất khẩu tự nguyện'], answer: 0, explain: 'Chuyển sang nhà cung cấp kém hiệu quả hơn chỉ vì ưu đãi thuế là trade diversion, một chi phí của khối thương mại. Trade creation là khi hàng trong khối rẻ hơn thay thế sản xuất nội địa kém hiệu quả.' },
    { q: 'Khi một nước xóa bỏ thuế nhập khẩu ô tô, nhóm nào nhiều khả năng bị thiệt nhất trong ngắn hạn?', choices: ['Người mua ô tô trong nước', 'Doanh nghiệp xuất khẩu của nước đó', 'Lao động và doanh nghiệp sản xuất ô tô trong nước'], answer: 2, explain: 'Ngành cạnh tranh với hàng nhập khẩu chịu thiệt (mất việc, giảm lợi nhuận). Người mua được giá thấp hơn. Doanh nghiệp xuất khẩu có thể được lợi nếu đối tác cũng mở cửa.' },
  ];

  const widgets = {
    tariff(el) {
      el.innerHTML = `
        <div class="w-row"><label>Thuế mỗi sản phẩm: <b data-o="t">10</b><input type="range" min="0" max="25" step="1" value="10" data-i="t"></label></div>
        <div class="w-out"><div class="w-price" data-o="p"></div><div class="w-bar"><span data-o="bar"></span><i></i></div><div class="w-note" data-o="note"></div></div>`;
      const q = s => el.querySelector(s);
      const upd = () => {
        const T = +q('[data-i="t"]').value;
        const P = Math.min(PW + T, 70); // P = 70: nhập khẩu bằng 0 (thuế cấm đoán)
        const d = P - PW, qd = QD(P), qs = QS(P), m = Math.max(0, qd - qs);
        const cs = d * (QD(PW) + qd) / 2, ps = d * (QS(PW) + qs) / 2, rev = T * m, dwl = cs - ps - rev;
        q('[data-o="t"]').textContent = `${T} USD`;
        q('[data-o="p"]').textContent = `Giá trong nước ${vn(P)} · nhập khẩu ${vn(m)} (từ 60)`;
        q('[data-o="bar"]').style.width = `${(m / 60) * 100}%`;
        q('[data-o="note"]').textContent = `Người tiêu dùng mất ${vn(cs, 1)}; nhà sản xuất được ${vn(ps, 1)}; thu thuế ${vn(rev, 1)}; deadweight loss ${vn(dwl, 1)}.`
          + (T >= 20 ? ' Thuế từ 20 trở lên là thuế cấm đoán: không còn nhập khẩu, chính phủ không thu được gì.' : '');
      };
      el.addEventListener('input', upd);
      upd();
    },
  };

  window.LESSONS['EC-06'] = {
    moduleId: 'EC-06',
    calculator: 'Không cần máy tính',
    warmup: [
      'Ôn EC-05: thuế quan và yêu cầu nội địa hóa thuộc nhóm công cụ địa chính trị nào, dùng theo cách hợp tác hay không hợp tác?',
      'Nhắc lại khái niệm thặng dư người tiêu dùng và thặng dư nhà sản xuất trên đồ thị cung cầu.',
      'Đoán trước: nếu Việt Nam đánh thuế cao lên ô tô nhập khẩu, ai được lợi, ai bị thiệt?',
    ],
    sections,
    glossary,
    practice,
    widgets,
    slides: [],
    wrapup: [
      'Tự đặt một ví dụ 2 nước, 2 mặt hàng và chỉ ra lợi thế so sánh của từng nước.',
      'Vẽ đồ thị thuế quan, đánh dấu phần thặng dư người tiêu dùng mất, phần nhà sản xuất được, tiền thuế và deadweight loss.',
      'Xếp 5 bậc khối thương mại theo thứ tự hội nhập tăng dần và nêu một rủi ro của liên minh tiền tệ.',
    ],
  };
}());
