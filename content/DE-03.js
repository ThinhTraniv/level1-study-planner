// Bài giảng DE-03 - Derivative Benefits, Risks, and Issuer and Investor Uses (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t } = window.CFAH;

  const sections = [
    {
      title: '1. Bức tranh lớn',
      minutes: 4,
      html: `
<p>DE-01 và DE-02 trả lời "phái sinh là gì". Module này trả lời "<b>vì sao người ta dùng, và dùng thì có nguy hiểm gì</b>".</p>
<div class="key">Phái sinh là công cụ <b>tách rủi ro ra khỏi tài sản</b> và chuyển nó cho người muốn gánh. Lợi ích và rủi ro đều đến từ cùng một đặc điểm: <b>đòn bẩy cao, chi phí thấp, linh hoạt</b>.</div>
<table class="plain"><thead><tr><th>LOS</th><th>Phần</th></tr></thead><tbody>
<tr><td>Mô tả lợi ích và rủi ro của phái sinh</td><td>2, 3</td></tr>
<tr><td>So sánh cách dùng phái sinh của doanh nghiệp phát hành (issuer) và nhà đầu tư (investor)</td><td>4, 5, 6</td></tr>
</tbody></table>
<p class="tip">Đề thi ở module này thường là câu khái niệm: "lợi ích nào KHÔNG phải của phái sinh", "rủi ro nào minh họa cho basis risk", "doanh nghiệp dùng swap để làm gì". Hãy học theo <b>danh sách và ví dụ</b>.</p>`,
    },
    {
      title: '2. Lợi ích của phái sinh',
      minutes: 12,
      html: `
<h4>a) Phân bổ, chuyển giao và quản lý rủi ro</h4>
<p>Đây là lợi ích quan trọng nhất. Phái sinh cho phép tách một rủi ro cụ thể (giá dầu, tỷ giá, lãi suất, rủi ro tín dụng) để giữ lại, giảm đi hoặc bán đi, mà <b>không phải mua bán chính tài sản</b>. Hãng hàng không có thể phòng hộ giá nhiên liệu mà không cần xây bồn chứa dầu.</p>

<h4>b) Phát hiện thông tin (information discovery)</h4>
<p>Giá phái sinh chứa thông tin về kỳ vọng của thị trường: ${t('pdisc', 'phát hiện giá (price discovery)')} thường diễn ra trên thị trường futures trước vì chi phí giao dịch thấp và thanh khoản cao; giá quyền chọn cho biết ${t('iv', 'biến động ngầm định (implied volatility)')}, tức mức độ bất định mà thị trường đang kỳ vọng.</p>

<h4>c) Lợi thế vận hành (operational advantages)</h4>
<ul>
<li><b>Chi phí giao dịch thấp hơn</b> so với mua bán tài sản cơ sở tương đương.</li>
<li><b>Thanh khoản cao hơn</b>: nhiều hợp đồng futures chỉ số giao dịch nhiều hơn chính rổ cổ phiếu.</li>
<li><b>Dễ bán khống</b>: short một futures dễ hơn nhiều so với đi vay cổ phiếu để bán.</li>
<li>${t('leverage', 'Đòn bẩy')}: vốn bỏ ra nhỏ so với quy mô rủi ro nắm giữ.</li>
</ul>

<h4>d) Thị trường hiệu quả hơn</h4>
<p>Vì giao dịch phái sinh rẻ và nhanh, nhà đầu tư dễ khai thác khi giá tài sản bị định sai. Hoạt động ${t('arb', 'kinh doanh chênh lệch giá (arbitrage)')} kéo giá về đúng giá trị, làm thị trường ${t('eff', 'hiệu quả (efficient)')} hơn.</p>

<div class="example"><div class="ex-h">Ví dụ 2.1 - Bán khống bằng futures</div>
<p>Quỹ nắm danh mục cổ phiếu 50 tỷ đồng mô phỏng VN30 và lo thị trường giảm trong 1 tháng. Cách nào nhanh và rẻ hơn: bán 50 tỷ cổ phiếu rồi mua lại, hay short hợp đồng tương lai VN30?</p>
<details><summary>Xem lời giải</summary>
<p>Short futures: chỉ cần ký quỹ, phí giao dịch thấp, không phải bán hàng chục mã cổ phiếu (chịu phí, thuế, tác động giá), không làm mất vị thế cổ phiếu dài hạn. Nếu thị trường giảm, lãi từ futures bù lỗ danh mục. Đây là minh họa cho cả lợi ích <b>quản lý rủi ro</b> và <b>lợi thế vận hành</b>.</p></details></div>
<p class="warn"><b>Bẫy:</b> "phái sinh cho payoff giống hệt tài sản cơ sở" không phải là lợi ích được nhấn mạnh. Lợi ích là phái sinh cho phép <b>tạo ra những hình dạng payoff mà tài sản cơ sở không có</b> (ví dụ quyền chọn cắt bỏ phần lỗ).</p>`,
    },
    {
      title: '3. Rủi ro của phái sinh',
      minutes: 12,
      html: `
<table class="plain"><thead><tr><th>Rủi ro</th><th>Bản chất</th></tr></thead><tbody>
<tr><td>Thiếu minh bạch, phức tạp</td><td>Hợp đồng OTC phức tạp khó hiểu, khó định giá, khó biết ai đang gánh rủi ro gì.</td></tr>
<tr><td>${t('basis', 'Rủi ro cơ sở (basis risk)')}</td><td>Công cụ phòng hộ không biến động khớp hoàn toàn với tài sản cần phòng hộ (khác tài sản, khác ngày, khác địa điểm).</td></tr>
<tr><td>${t('liq', 'Rủi ro thanh khoản (liquidity risk)')}</td><td>Phái sinh có thể đòi <b>tiền mặt ngay</b> (ký quỹ, thanh toán) trong khi khoản lời bù đắp trên tài sản phòng hộ chưa thành tiền.</td></tr>
<tr><td>${t('cptyrisk', 'Rủi ro đối tác')}</td><td>Bên kia không trả khi hợp đồng có lợi cho mình; lớn nhất ở OTC không bù trừ trung tâm.</td></tr>
<tr><td>${t('sys', 'Rủi ro hệ thống, gây mất ổn định')}</td><td>Đòn bẩy quá mức và các định chế nối với nhau qua phái sinh có thể làm một cú sốc lan ra cả thị trường (khủng hoảng 2008).</td></tr>
</tbody></table>

<div class="example"><div class="ex-h">Ví dụ 3.1 - Rủi ro cơ sở</div>
<p>Hãng hàng không sẽ mua 1.000.000 gallon nhiên liệu bay. Không có futures nhiên liệu bay đủ thanh khoản nên hãng long futures dầu sưởi (heating oil) trên cùng khối lượng. Sau đó giá nhiên liệu bay tăng 0,50 USD/gallon, giá futures dầu sưởi chỉ tăng 0,35 USD/gallon. Phần chi phí tăng thêm không được phòng hộ là bao nhiêu?</p>
<details><summary>Xem lời giải</summary>
<p>Chi phí tăng thêm: 1.000.000 × 0,50 = 500.000 USD. Lời từ futures: 1.000.000 × 0,35 = 350.000 USD. Phần hở: <b>150.000 USD</b>. Đó là <b>rủi ro cơ sở</b>: tài sản phòng hộ và tài sản cần phòng hộ không đi cùng nhịp.</p></details></div>

<div class="example"><div class="ex-h">Ví dụ 3.2 - Rủi ro thanh khoản</div>
<p>Một công ty khai thác vàng short 100 hợp đồng tương lai vàng (100 ounce/hợp đồng) ở 2.000 USD để chốt giá bán sản lượng năm sau. Giá futures tăng lên 2.150 USD. Chuyện gì xảy ra với dòng tiền?</p>
<details><summary>Xem lời giải</summary>
<p>Lỗ trên futures = 100 × 100 × 150 = <b>1.500.000 USD</b>, phải nộp ký quỹ <b>bằng tiền mặt ngay</b>. Vàng dưới lòng đất tăng giá tương ứng, nhưng chưa khai thác, chưa bán thì chưa có tiền. Phòng hộ đúng về kinh tế vẫn có thể gây <b>thiếu hụt tiền mặt</b>.</p></details></div>
<p class="warn"><b>Bẫy:</b> rủi ro thanh khoản ở đây không chỉ là "khó bán hợp đồng", mà còn là <b>nhu cầu tiền mặt</b> phát sinh từ ký quỹ và thanh toán.</p>`,
    },
    {
      title: '4. Doanh nghiệp phát hành (issuer) dùng phái sinh như thế nào',
      minutes: 10,
      html: `
<p>Doanh nghiệp (issuer) dùng phái sinh chủ yếu để <b>giảm biến động của lợi nhuận và dòng tiền</b> do các rủi ro ngoài hoạt động cốt lõi: lãi suất, tỷ giá, giá hàng hóa. Họ thường dùng hợp đồng <b>OTC</b> để khớp đúng số tiền và ngày.</p>
<p>Để lời lỗ của phái sinh và khoản mục được phòng hộ được ghi nhận cùng kỳ, doanh nghiệp áp dụng ${t('hacc', 'kế toán phòng hộ (hedge accounting)')}, gồm ba loại:</p>
<table class="plain"><thead><tr><th>Loại phòng hộ</th><th>Mục tiêu</th><th>Ví dụ</th></tr></thead><tbody>
<tr><td>${t('fvh', 'Phòng hộ giá trị hợp lý (fair value hedge)')}</td><td>Giảm biến động <b>giá trị</b> của tài sản/nợ có lãi suất cố định</td><td>Nợ trái phiếu cố định 5%, ký swap nhận cố định - trả thả nổi</td></tr>
<tr><td>${t('cfh', 'Phòng hộ dòng tiền (cash flow hedge)')}</td><td>Giảm biến động <b>dòng tiền</b> tương lai</td><td>Nợ vay thả nổi, ký swap trả cố định; hoặc forward ngoại tệ cho doanh thu xuất khẩu dự kiến</td></tr>
<tr><td>${t('nih', 'Phòng hộ khoản đầu tư thuần ở nước ngoài (net investment hedge)')}</td><td>Giảm rủi ro tỷ giá của <b>vốn đầu tư vào công ty con</b> nước ngoài</td><td>Forward bán ngoại tệ hoặc swap tiền tệ tương ứng giá trị công ty con</td></tr>
</tbody></table>

<div class="example"><div class="ex-h">Ví dụ 4.1 - Biến nợ cố định thành thả nổi</div>
<p>Công ty đã phát hành trái phiếu lãi cố định 5,00%. Ban điều hành dự báo lãi suất sẽ giảm nên muốn trả lãi thả nổi. Công ty ký swap: <b>nhận cố định 4,60%, trả MRR</b>. Chi phí vay ròng là bao nhiêu?</p>
<details><summary>Xem lời giải</summary>
<p>Chi phí ròng = trả 5,00% (trái phiếu) - nhận 4,60% (swap) + trả MRR (swap) = <b>MRR + 0,40%</b>. Nợ cố định đã được "đổi" thành nợ thả nổi; về kế toán đây là một <b>fair value hedge</b> vì nó ổn định giá trị khoản nợ theo lãi suất thị trường.</p></details></div>
<div class="example"><div class="ex-h">Ví dụ 4.2 - Biến nợ thả nổi thành cố định</div>
<p>Công ty vay ngân hàng lãi MRR + 1,20%, lo lãi suất tăng nên ký swap <b>trả cố định 3,80%, nhận MRR</b>. Chi phí vay ròng?</p>
<details><summary>Xem lời giải</summary><p>MRR + 1,20% + 3,80% - MRR = <b>5,00%</b> cố định. Đây là <b>cash flow hedge</b>: tiền lãi phải trả mỗi kỳ không còn biến động.</p></details></div>
<p class="tip"><b>Mẹo nhớ:</b> fair value hedge thường gắn với khoản mục <b>cố định</b> (giá trị biến động khi lãi suất đổi); cash flow hedge gắn với khoản mục <b>thả nổi</b> hoặc giao dịch dự kiến (dòng tiền biến động).</p>`,
    },
    {
      title: '5. Nhà đầu tư (investor) dùng phái sinh như thế nào',
      minutes: 10,
      html: `
<p>Nhà đầu tư (quỹ đầu tư, quỹ hưu trí, cá nhân, ngân hàng ở vai trò đầu tư) dùng cả phái sinh <b>niêm yết và OTC</b> với nhiều mục đích hơn doanh nghiệp:</p>
<ul>
<li><b>Sao chép vị thế giao ngay rẻ hơn</b>: mua futures chỉ số và giữ tiền ở tín phiếu thay vì mua toàn bộ rổ cổ phiếu.</li>
<li><b>Chiến lược chủ động</b>: thể hiện quan điểm về giá, lãi suất, biến động (đầu cơ), tăng hoặc giảm tỷ trọng một loại tài sản nhanh chóng.</li>
<li><b>Thay đổi rủi ro danh mục</b>: dùng futures/swap lãi suất để chỉnh ${t('dur', 'thời lượng (duration)')}, dùng forward ngoại tệ để phòng hộ tỷ giá danh mục nước ngoài.</li>
<li><b>Bảo vệ hoặc tạo thu nhập</b> bằng quyền chọn: ${t('pput', 'protective put')} (cổ phiếu + mua put) và ${t('ccall', 'covered call')} (cổ phiếu + bán call).</li>
</ul>

<div class="example"><div class="ex-h">Ví dụ 5.1 - Protective put</div>
<p>Nhà đầu tư mua cổ phiếu giá 80 và mua put X = 75, phí 2. Tính lợi nhuận khi đáo hạn nếu giá là 70; 80; 95. Lỗ tối đa và điểm hòa vốn?</p>
<details><summary>Xem lời giải</summary>
<table class="plain"><thead><tr><th>S<sub>T</sub></th><th>Giá trị vị thế = max(S<sub>T</sub>, 75)</th><th>Lợi nhuận = giá trị - 80 - 2</th></tr></thead><tbody>
<tr><td>70</td><td>75</td><td>-7</td></tr><tr><td>80</td><td>80</td><td>-2</td></tr><tr><td>95</td><td>95</td><td>13</td></tr></tbody></table>
<p>Lỗ tối đa = 80 + 2 - 75 = <b>7</b> dù giá giảm bao nhiêu. Hòa vốn = 80 + 2 = <b>82</b>. Đây là "bảo hiểm" cho cổ phiếu, phí bảo hiểm là 2.</p></details></div>
<div class="example"><div class="ex-h">Ví dụ 5.2 - Covered call</div>
<p>Nhà đầu tư giữ cổ phiếu mua giá 40 và bán call X = 45, nhận phí 1,50. Lợi nhuận khi đáo hạn nếu giá là 35; 44; 50?</p>
<details><summary>Xem lời giải</summary>
<p>Giá trị vị thế = S<sub>T</sub> - max(0, S<sub>T</sub> - 45), tức là bị chặn trên ở 45.<br>
S<sub>T</sub> = 35: 35 - 40 + 1,50 = <b>-3,50</b>. S<sub>T</sub> = 44: 44 - 40 + 1,50 = <b>5,50</b>. S<sub>T</sub> = 50: 45 - 40 + 1,50 = <b>6,50</b> (lời tối đa).</p>
<p>Covered call đổi phần tăng giá trên 45 lấy thu nhập phí ngay hôm nay.</p></details></div>`,
    },
    {
      title: '6. So sánh issuer và investor',
      minutes: 4,
      html: `
<table class="plain"><thead><tr><th>Tiêu chí</th><th>Doanh nghiệp phát hành (issuer)</th><th>Nhà đầu tư (investor)</th></tr></thead><tbody>
<tr><td>Mục tiêu chính</td><td>Phòng hộ: ổn định lợi nhuận, dòng tiền, giá trị nợ</td><td>Phòng hộ và cả tạo vị thế, sao chép, đầu cơ, tạo thu nhập</td></tr>
<tr><td>Rủi ro được quản lý</td><td>Rủi ro ngoài hoạt động cốt lõi: lãi suất, tỷ giá, hàng hóa</td><td>Rủi ro thị trường của danh mục: cổ phiếu, lãi suất, tỷ giá, tín dụng, biến động</td></tr>
<tr><td>Thị trường thường dùng</td><td>Chủ yếu OTC (may đo theo khoản nợ, giao dịch cụ thể)</td><td>Cả sàn và OTC</td></tr>
<tr><td>Kế toán</td><td>Thường áp dụng hedge accounting (fair value, cash flow, net investment)</td><td>Thường ghi nhận theo giá trị hợp lý</td></tr>
<tr><td>Công cụ tiêu biểu</td><td>Swap lãi suất, forward ngoại tệ, swap tiền tệ, forward hàng hóa</td><td>Futures chỉ số, futures trái phiếu, quyền chọn, CDS</td></tr>
</tbody></table>`,
    },
    {
      title: '7. Tóm tắt và bẫy thường gặp',
      minutes: 3,
      html: `
<table class="plain"><thead><tr><th>Tình huống</th><th>Nhớ</th></tr></thead><tbody>
<tr><td>Lợi ích</td><td>Chuyển giao rủi ro · phát hiện giá · chi phí thấp, thanh khoản, dễ short, đòn bẩy · thị trường hiệu quả hơn</td></tr>
<tr><td>Basis risk</td><td>Công cụ phòng hộ không khớp hoàn toàn với tài sản (khác tài sản, khác ngày)</td></tr>
<tr><td>Liquidity risk</td><td>Phải trả tiền mặt (ký quỹ) trước khi khoản bù đắp thành tiền</td></tr>
<tr><td>Systemic risk</td><td>Đòn bẩy và liên kết giữa các định chế; cú sốc lan truyền</td></tr>
<tr><td>Fair value hedge</td><td>Khoản mục cố định; ví dụ swap nhận cố định cho nợ cố định</td></tr>
<tr><td>Cash flow hedge</td><td>Khoản mục thả nổi hoặc giao dịch dự kiến; ví dụ swap trả cố định cho nợ thả nổi</td></tr>
<tr><td>Net investment hedge</td><td>Rủi ro tỷ giá của vốn trong công ty con nước ngoài</td></tr>
<tr><td>Protective put / covered call</td><td>Put chặn dưới lỗ (tốn phí); call bán đi phần tăng trên X (nhận phí)</td></tr>
</tbody></table>
<p>Tiếp theo: tab <b>Luyện tập</b> - 10 câu. Module sau (DE-04) giải thích vì sao giá phái sinh được quyết định bởi arbitrage.</p>`,
    },
  ];

  const glossary = {
    pdisc: ['Price discovery', 'Phát hiện giá', 'Quá trình thông tin mới được phản ánh vào giá; thường diễn ra trên thị trường phái sinh trước.'],
    iv: ['Implied volatility', 'Biến động ngầm định', 'Mức biến động của tài sản cơ sở được suy ra từ giá quyền chọn.'],
    leverage: ['Leverage', 'Đòn bẩy', 'Nắm giữ rủi ro lớn với số vốn nhỏ; khuếch đại cả lời và lỗ.'],
    arb: ['Arbitrage', 'Kinh doanh chênh lệch giá', 'Kiếm lời không rủi ro, không cần vốn, từ việc cùng một thứ có hai giá khác nhau.'],
    eff: ['Market efficiency', 'Thị trường hiệu quả', 'Giá phản ánh nhanh và đầy đủ thông tin sẵn có.'],
    basis: ['Basis risk', 'Rủi ro cơ sở', 'Rủi ro công cụ phòng hộ và tài sản được phòng hộ biến động không khớp nhau.'],
    liq: ['Liquidity risk', 'Rủi ro thanh khoản', 'Rủi ro phải trả tiền mặt (ký quỹ, thanh toán) hoặc không đóng được vị thế khi cần.'],
    cptyrisk: ['Counterparty credit risk', 'Rủi ro đối tác', 'Rủi ro bên kia không thanh toán khi hợp đồng có lợi cho mình.'],
    sys: ['Systemic risk', 'Rủi ro hệ thống', 'Rủi ro một cú sốc lan rộng làm mất ổn định cả hệ thống tài chính.'],
    hacc: ['Hedge accounting', 'Kế toán phòng hộ', 'Quy định cho phép ghi nhận lời lỗ của công cụ phòng hộ cùng kỳ với khoản mục được phòng hộ.'],
    fvh: ['Fair value hedge', 'Phòng hộ giá trị hợp lý', 'Phòng hộ biến động giá trị của tài sản hoặc nợ, thường là khoản mục lãi suất cố định.'],
    cfh: ['Cash flow hedge', 'Phòng hộ dòng tiền', 'Phòng hộ biến động dòng tiền tương lai: nợ thả nổi, doanh thu ngoại tệ dự kiến.'],
    nih: ['Net investment hedge', 'Phòng hộ khoản đầu tư thuần nước ngoài', 'Phòng hộ rủi ro tỷ giá của vốn đầu tư vào công ty con ở nước ngoài.'],
    dur: ['Duration', 'Thời lượng (duration)', 'Độ nhạy của giá trái phiếu/danh mục với lãi suất.'],
    pput: ['Protective put', 'Chiến lược put bảo vệ', 'Nắm cổ phiếu và mua put: chặn mức lỗ tối đa, đổi lại tốn phí.'],
    ccall: ['Covered call', 'Chiến lược bán call có tài sản bảo đảm', 'Nắm cổ phiếu và bán call: nhận phí, đổi lại mất phần tăng giá trên X.'],
  };

  const practice = [
    { q: 'Đặc điểm nào sau đây ÍT có khả năng là lợi ích của việc sử dụng phái sinh?', choices: ['Quản lý rủi ro hiệu quả hơn', 'Tạo ra payoff giống hệt payoff của tài sản cơ sở', 'Bán khống dễ dàng hơn so với thị trường giao ngay'], answer: 1, explain: 'Lợi ích của phái sinh là tạo ra những dạng payoff mà tài sản cơ sở không có, cùng với chi phí thấp. Quản lý rủi ro hiệu quả hơn và bán khống dễ dàng hơn đều là lợi ích chính (quản lý rủi ro, lợi thế vận hành).' },
    { q: 'Một hãng hàng không phòng hộ giá nhiên liệu bay bằng futures dầu thô. Giá nhiên liệu bay tăng mạnh hơn giá dầu thô. Đây là ví dụ của:', choices: ['Rủi ro cơ sở', 'Rủi ro đối tác', 'Rủi ro hệ thống'], answer: 0, explain: 'Công cụ phòng hộ (dầu thô) không biến động khớp với tài sản cần phòng hộ (nhiên liệu bay): basis risk. Rủi ro đối tác cần đối tác vỡ nợ; rủi ro hệ thống là cú sốc lan khắp thị trường.' },
    { q: 'Công ty mỏ short futures để phòng hộ giá bán sản lượng tương lai. Giá tăng mạnh và công ty phải nộp ký quỹ lớn bằng tiền mặt dù sản lượng chưa bán được. Rủi ro này là:', choices: ['Rủi ro cơ sở', 'Rủi ro minh bạch', 'Rủi ro thanh khoản'], answer: 2, explain: 'Phòng hộ đúng về kinh tế nhưng tạo nhu cầu tiền mặt trước khi khoản bù đắp thành tiền: liquidity risk. Không có sự lệch giữa hai tài sản nên không phải rủi ro cơ sở.' },
    { q: 'Công ty có nợ trái phiếu lãi cố định 6,0% và ký swap nhận cố định 5,3%, trả MRR. Chi phí vay ròng của công ty là:', choices: ['MRR + 0,7%', 'MRR - 0,7%', '11,3%'], answer: 0, explain: 'Trả 6,0% - nhận 5,3% + trả MRR = MRR + 0,7%. Lựa chọn MRR - 0,7% đảo dấu chênh lệch; lựa chọn 11,3% cộng hai mức cố định và quên MRR.' },
    { q: 'Theo kế toán phòng hộ, một swap trả cố định - nhận thả nổi dùng để cố định chi phí lãi của khoản vay thả nổi NHIỀU KHẢ NĂNG được phân loại là:', choices: ['Phòng hộ giá trị hợp lý', 'Phòng hộ dòng tiền', 'Phòng hộ khoản đầu tư thuần ở nước ngoài'], answer: 1, explain: 'Mục tiêu là ổn định dòng tiền lãi tương lai của khoản mục thả nổi: cash flow hedge. Phòng hộ giá trị hợp lý dùng cho khoản mục cố định; phòng hộ khoản đầu tư thuần dùng cho vốn ở công ty con nước ngoài.' },
    { q: 'Tập đoàn Việt Nam có công ty con ở Nhật và ký forward bán JPY tương ứng giá trị vốn chủ sở hữu tại công ty con đó. Đây là:', choices: ['Phòng hộ dòng tiền', 'Phòng hộ giá trị hợp lý', 'Phòng hộ khoản đầu tư thuần ở nước ngoài'], answer: 2, explain: 'Phòng hộ rủi ro tỷ giá trên vốn đầu tư vào công ty con nước ngoài là net investment hedge.' },
    { q: 'Nhà đầu tư mua cổ phiếu giá 100 và mua put X = 95, phí 3. Khi đáo hạn giá cổ phiếu là 90. Lợi nhuận của vị thế là:', choices: ['-13', '-8', '-3'], answer: 1, explain: 'Giá trị = max(90, 95) = 95; lợi nhuận = 95 - 100 - 3 = -8 (cũng là lỗ tối đa). Lựa chọn -13 bỏ quên put; lựa chọn -3 chỉ tính phí.' },
    { q: 'Nhà đầu tư giữ cổ phiếu mua giá 50 và bán call X = 55, nhận phí 2. Khi đáo hạn giá là 60. Lợi nhuận của covered call là:', choices: ['12', '10', '7'], answer: 2, explain: 'Cổ phiếu bị "gọi" ở 55: 55 - 50 + 2 = 7. Lựa chọn 12 quên rằng phần tăng trên 55 thuộc về người mua call; lựa chọn 10 bỏ cả phí lẫn giới hạn.' },
    { q: 'So với doanh nghiệp phát hành, nhà đầu tư NHIỀU KHẢ NĂNG:', choices: ['Dùng phái sinh cho nhiều mục đích hơn, cả trên sàn lẫn OTC', 'Chỉ dùng phái sinh OTC để khớp chính xác khoản nợ', 'Chủ yếu áp dụng kế toán phòng hộ cho khoản đầu tư thuần ở nước ngoài'], answer: 0, explain: 'Nhà đầu tư dùng phái sinh để phòng hộ, sao chép, đầu cơ, tạo thu nhập, trên cả sàn và OTC. Hai phương án còn lại ("chỉ dùng OTC để khớp khoản nợ", "kế toán phòng hộ cho khoản đầu tư thuần") mô tả doanh nghiệp phát hành.' },
    { q: 'Khủng hoảng 2008 cho thấy rủi ro nào của phái sinh rõ nhất?', choices: ['Rủi ro cơ sở', 'Rủi ro hệ thống do đòn bẩy và liên kết giữa các định chế', 'Rủi ro do phí giao dịch quá cao'], answer: 1, explain: 'Các định chế nối với nhau qua phái sinh OTC (CDS) với đòn bẩy lớn khiến cú sốc lan rộng: systemic risk. Phương án "phí giao dịch quá cao" sai: chi phí thấp là lợi ích của phái sinh.' },
  ];

  window.LESSONS['DE-03'] = {
    moduleId: 'DE-03',
    calculator: 'Không cần máy tính',
    warmup: [
      'Ôn DE-02: lỗ tối đa của long put và short call là bao nhiêu?',
      'Ôn DE-02: trong swap lãi suất, bên trả cố định được lợi khi lãi suất tăng hay giảm?',
      'Đoán trước: vì sao một doanh nghiệp đang lời từ phòng hộ vẫn có thể thiếu tiền mặt?',
    ],
    sections,
    glossary,
    practice,
    widgets: {},
    slides: [],
    wrapup: [
      'Liệt kê 4 nhóm lợi ích và 5 rủi ro của phái sinh, mỗi cái một ví dụ.',
      'Phân biệt fair value hedge, cash flow hedge và net investment hedge bằng một câu cho mỗi loại.',
      'So sánh cách doanh nghiệp phát hành và nhà đầu tư dùng phái sinh trong 3 dòng.',
    ],
  };
}());
