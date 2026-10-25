// Bài giảng FI-02 - Fixed-Income Cash Flows and Types (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t, frac, keys, timeline } = window.CFAH;

  const sections = [
    {
      title: '1. Bức tranh lớn',
      minutes: 3,
      html: `
<p>FI-01 cho biết trái phiếu có những "ô thông tin" nào. Module này điền nội dung vào hai ô quan trọng nhất: <b>gốc được trả khi nào</b> và <b>lãi được tính thế nào</b>, sau đó xem các quyền chọn làm thay đổi dòng tiền ra sao và luật, thuế ảnh hưởng thế nào đến việc phát hành, giao dịch.</p>
<table class="plain"><thead><tr><th>Câu hỏi</th><th>Các lựa chọn</th></tr></thead><tbody>
<tr><td>Trả gốc thế nào?</td><td>Bullet, amortizing toàn phần, amortizing một phần (balloon), sinking fund</td></tr>
<tr><td>Trả lãi thế nào?</td><td>Cố định, thả nổi (FRN), step-up, credit-linked, PIK, deferred, gắn chỉ số (lạm phát), zero-coupon</td></tr>
<tr><td>Ai được thay đổi dòng tiền?</td><td>Issuer: call (và CoCo). Trái chủ: put, chuyển đổi</td></tr>
<tr><td>Phát hành ở đâu, đánh thuế ra sao?</td><td>Domestic, foreign, Eurobond, global; bearer và registered; thuế lãi, lãi vốn, OID</td></tr>
</tbody></table>
<div class="key">Mọi cấu trúc trong bài đều trả lời một câu: <b>rủi ro nào được chuyển từ bên này sang bên kia</b> (rủi ro tín dụng, rủi ro lãi suất, rủi ro tái đầu tư, rủi ro lạm phát), và bên nhận rủi ro được bù bằng gì.</div>`,
    },
    {
      title: '2. Cấu trúc trả gốc: bullet, amortizing, sinking fund',
      minutes: 9,
      html: `
<h4>2.1. Bullet</h4>
<p>${t('bullet', 'Trái phiếu bullet')} trả coupon định kỳ và trả <b>toàn bộ gốc một lần</b> khi đáo hạn. Đây là cấu trúc phổ biến nhất của trái phiếu chính phủ và doanh nghiệp.</p>
<h4>2.2. Amortizing toàn phần và một phần</h4>
<p>${t('amort', 'Trái phiếu trả dần gốc (amortizing bond)')} trả mỗi kỳ một khoản gồm cả lãi và một phần gốc. <b>Toàn phần</b> (fully amortizing): gốc về 0 ở kỳ cuối, như khoản vay mua nhà. <b>Một phần</b> (partially amortizing): còn một khoản gốc lớn trả ở cuối gọi là ${t('balloon', 'khoản gốc cuối kỳ (balloon payment)')}.</p>
<div class="example"><div class="ex-h">Ví dụ 2.1 - So sánh ba cấu trúc</div>
<p>Vay 1.000, kỳ hạn 5 năm, lãi suất 6%/năm, trả hằng năm. Tính khoản trả mỗi năm trong ba trường hợp: bullet, amortizing toàn phần, amortizing một phần với balloon 400.</p>
<details><summary>Xem lời giải</summary>
<p><b>Bullet:</b> năm 1-4 trả 60; năm 5 trả 60 + 1.000 = 1.060. Tổng lãi = 300.</p>
${keys([['Xóa TVM', '[2ND] [FV]', ''], ['Toàn phần', '5 [N] 6 [I/Y] 1000 [PV] 0 [FV] [CPT] [PMT]', 'PMT = -237.3964'], ['Một phần (balloon 400)', '400 [+/-] [FV] [CPT] [PMT]', 'PMT = -166.4378']])}
<p><b>Toàn phần:</b> 237,40 mỗi năm, tổng lãi = 5 × 237,40 - 1.000 = 186,98. <b>Một phần:</b> 166,44 mỗi năm và năm 5 trả thêm 400, tổng lãi = 232,19.</p>
<table class="plain"><thead><tr><th>Năm (toàn phần)</th><th>Lãi</th><th>Gốc</th><th>Dư nợ cuối năm</th></tr></thead><tbody>
<tr><td>1</td><td>60,00</td><td>177,40</td><td>822,60</td></tr>
<tr><td>2</td><td>49,36</td><td>188,04</td><td>634,56</td></tr>
<tr><td>3</td><td>38,07</td><td>199,32</td><td>435,24</td></tr>
<tr><td>4</td><td>26,11</td><td>211,28</td><td>223,96</td></tr>
<tr><td>5</td><td>13,44</td><td>223,96</td><td>0</td></tr>
</tbody></table>
<p>Lãi giảm dần vì tính trên dư nợ còn lại, phần gốc tăng dần. Có thể xem từng dòng bằng bảng AMORT:</p>
${keys([['Mở AMORT, năm 1', '[2ND] [PV] 1 [ENTER] [↓] 1 [ENTER] [↓]', 'BAL = 822.6036'], ['Gốc, lãi năm 1', '[↓] [↓]', 'PRN = -177.3964, INT = -60.0000']])}
</details></div>
${timeline(5, [{ t: 0, label: '1.000', up: true, cls: 'pv' }, { t: 1, label: '237,40' }, { t: 2, label: '237,40' }, { t: 3, label: '237,40' }, { t: 4, label: '237,40' }, { t: 5, label: '237,40' }], 'Amortizing toàn phần: 5 khoản bằng nhau, không còn gốc ở cuối.')}

<h4>2.3. Sinking fund</h4>
<p>${t('sinking', 'Điều khoản quỹ chìm (sinking fund provision)')} buộc tổ chức phát hành mua lại hoặc trả dần một phần gốc theo lịch định trước, thường chọn ngẫu nhiên các trái phiếu để mua lại ở mệnh giá, hoặc mua trên thị trường nếu giá thấp hơn.</p>
<div class="example"><div class="ex-h">Ví dụ 2.2 - Sinking fund</div>
<p>Đợt phát hành 200 triệu USD kỳ hạn 10 năm, yêu cầu mua lại 20 triệu mỗi năm bắt đầu từ năm 6. Khi đáo hạn còn bao nhiêu gốc phải trả?</p>
<details><summary>Xem lời giải</summary><p>Năm 6 đến năm 10 là 5 lần × 20 = 100 triệu được mua lại trước, nên khoản balloon khi đáo hạn là 200 - 100 = <b>100 triệu</b>.</p></details></div>
<div class="key">Trả gốc sớm hơn (amortizing, sinking fund) → <b>rủi ro tín dụng thấp hơn</b> vì dư nợ giảm dần, nhưng nhà đầu tư chịu <b>${t('reinv', 'rủi ro tái đầu tư (reinvestment risk)')}</b>: tiền nhận sớm có thể phải đầu tư lại ở lãi suất thấp hơn. Bullet thì ngược lại: rủi ro tín dụng tập trung ở cuối.</div>
<p class="warn"><b>Bẫy:</b> sinking fund mua lại ở mệnh giá có thể bất lợi cho trái chủ khi lãi suất giảm (giá trái phiếu đang trên 100 nhưng bị mua lại ở 100). Đây là một chi tiết làm sinking fund vừa có lợi (tín dụng) vừa có hại (tái đầu tư) cho nhà đầu tư.</p>`,
    },
    {
      title: '3. Cấu trúc trả lãi: từ cố định đến thả nổi và gắn chỉ số',
      minutes: 8,
      html: `
<h4>3.1. Lãi suất thả nổi (FRN)</h4>
<p>Coupon của FRN = MRR + ${t('qm', 'biên cố định (quoted margin / spread)')}. MRR (ví dụ SOFR) được xác định ở <b>đầu kỳ</b>, còn tiền lãi được trả ở <b>cuối kỳ</b> (trả sau, in arrears). Biên phản ánh rủi ro tín dụng của tổ chức phát hành tại lúc phát hành và thường không đổi.</p>
<div class="example"><div class="ex-h">Ví dụ 3.1 - Coupon FRN</div>
<p>FRN mệnh giá 1.000 trả lãi theo quý, coupon = MRR + 110 điểm cơ bản (bps). MRR hằng năm đầu kỳ là 3,2%. Tiền lãi kỳ này là bao nhiêu, nhận khi nào?</p>
<details><summary>Xem lời giải</summary><p>Lãi suất năm = 3,2% + 1,1% = 4,3%. Lãi suất quý = 4,3% / 4 = 1,075%. Tiền lãi = 1.000 × 1,075% = <b>10,75</b>, nhận vào <b>cuối quý</b>.</p></details></div>
<p>FRN có thể có ${t('cap', 'trần lãi suất (cap)')} (có lợi cho issuer) và ${t('floor', 'sàn lãi suất (floor)')} (có lợi cho trái chủ). Một ${t('inverse', 'FRN nghịch (inverse floater)')} có coupon giảm khi MRR tăng. Vì coupon theo kịp lãi suất thị trường, giá FRN ít biến động hơn trái phiếu coupon cố định.</p>

<h4>3.2. Các kiểu coupon "có điều kiện"</h4>
<table class="plain"><thead><tr><th>Loại</th><th>Cách vận hành</th><th>Có lợi / bảo vệ ai</th></tr></thead><tbody>
<tr><td>${t('stepup', 'Step-up coupon')}</td><td>Coupon tăng theo lịch định trước (ví dụ 4% năm 1-2, 5% năm 3-4); thường đi kèm call</td><td>Trái chủ: bù khi issuer không call</td></tr>
<tr><td>${t('clc', 'Credit-linked coupon')}</td><td>Coupon tăng khi xếp hạng tín dụng của issuer bị hạ, giảm khi được nâng</td><td>Trái chủ: bù cho tín dụng xấu đi (nhưng làm issuer khó khăn hơn đúng lúc yếu)</td></tr>
<tr><td>${t('pik', 'Payment-in-kind (PIK)')}</td><td>Issuer được trả lãi bằng thêm trái phiếu thay vì tiền mặt</td><td>Issuer: giữ tiền mặt; trái chủ đòi lãi cao hơn</td></tr>
<tr><td>${t('deferred', 'Deferred coupon')}</td><td>Không trả lãi vài năm đầu, sau đó trả lãi cao hơn</td><td>Issuer: dự án cần thời gian tạo dòng tiền</td></tr>
<tr><td>${t('zero', 'Zero-coupon')}</td><td>Không trả lãi, mua dưới mệnh giá; lợi nhuận = mệnh giá - giá mua</td><td>Nhà đầu tư không chịu rủi ro tái đầu tư coupon</td></tr>
</tbody></table>
<div class="example"><div class="ex-h">Ví dụ 3.2 - PIK</div>
<p>Trái phiếu PIK 100 triệu USD, lãi 8%/năm trả bằng trái phiếu mới trong 3 năm đầu. Sau 3 năm dư nợ gốc là bao nhiêu?</p>
<details><summary>Xem lời giải</summary><p>Lãi được nhập vào gốc mỗi năm: 100 × 1,08<sup>3</sup> = <b>125,97 triệu</b>. Nợ phình to nhanh, nên PIK thường gặp ở doanh nghiệp đòn bẩy cao và có lợi suất cao.</p></details></div>

<h4>3.3. Trái phiếu gắn chỉ số (index-linked) và trái phiếu lạm phát</h4>
<p>${t('linker', 'Trái phiếu gắn lạm phát (inflation-linked bond, linker)')} điều chỉnh dòng tiền theo chỉ số giá (CPI) để bảo vệ nhà đầu tư khỏi ${t('infrisk', 'rủi ro lạm phát')}. Bốn cách gắn:</p>
<ul>
<li><b>Zero-coupon-indexed:</b> chỉ có gốc, gốc được điều chỉnh theo lạm phát.</li>
<li><b>Interest-indexed:</b> gốc cố định, coupon rate điều chỉnh theo lạm phát.</li>
<li>${t('capidx', 'Capital-indexed')}: coupon rate cố định, <b>gốc</b> điều chỉnh theo lạm phát, nên tiền coupon (= coupon rate × gốc đã điều chỉnh) cũng tăng. TIPS của Mỹ thuộc loại này.</li>
<li><b>Indexed-annuity:</b> trả dần toàn phần, mỗi khoản được điều chỉnh theo lạm phát.</li>
</ul>
<div class="example"><div class="ex-h">Ví dụ 3.3 - Capital-indexed</div>
<p>Mệnh giá 1.000, coupon thực 2% trả hằng năm. Lạm phát năm 1 là 3%, năm 2 là 4%. Tính gốc điều chỉnh và tiền coupon mỗi năm.</p>
<details><summary>Xem lời giải</summary>
<p>Năm 1: gốc = 1.000 × 1,03 = 1.030; coupon = 2% × 1.030 = <b>20,60</b>.<br>Năm 2: gốc = 1.030 × 1,04 = 1.071,20; coupon = 2% × 1.071,20 = <b>21,42</b>.</p></details></div>
<p class="tip">Ngoài lạm phát, trái phiếu có thể gắn với chỉ số khác (giá hàng hóa, chỉ số cổ phiếu). Các khoản ${t('levloan', 'vay đòn bẩy (leveraged loan)')} cho doanh nghiệp tín dụng thấp thường dùng lãi suất thả nổi. Định giá FRN và lợi suất học ở FI-08.</p>`,
    },
    {
      title: '4. Điều khoản tùy chọn: call, put, chuyển đổi',
      minutes: 9,
      html: `
<h4>4.1. Callable bond: quyền của tổ chức phát hành</h4>
<p>${t('callable', 'Trái phiếu có quyền mua lại (callable bond)')} cho issuer quyền trả nợ trước hạn theo ${t('callprice', 'giá mua lại (call price)')}. Issuer thường thực hiện khi lãi suất giảm để vay lại rẻ hơn, đúng lúc nhà đầu tư không muốn bị trả tiền (rủi ro tái đầu tư). Vì vậy callable bond có <b>giá thấp hơn, lợi suất cao hơn</b> trái phiếu thường.</p>
<ul>
<li>${t('callprot', 'Thời gian bảo vệ (call protection / lockout period)')}: thời gian đầu không được call.</li>
<li>Lịch call (call schedule): ví dụ được call sau năm 3 ở giá 102, sau năm 4 ở 101, từ năm 5 ở 100. Phần trên 100 là phí mua lại (call premium), giảm dần.</li>
<li>Kiểu thực hiện: <b>American</b> (bất kỳ lúc nào sau thời gian bảo vệ), <b>European</b> (chỉ một ngày), <b>Bermudan</b> (vào các ngày định trước, thường là ngày trả coupon).</li>
<li>${t('makewhole', 'Make-whole call')}: giá call = PV các dòng tiền còn lại chiết khấu ở lợi suất chuẩn cộng một spread nhỏ. Giá này thường rất cao nên issuer hiếm khi call chỉ để vay lại rẻ hơn, và trái chủ ít bị thiệt.</li>
</ul>
<h4>4.2. Putable bond: quyền của trái chủ</h4>
<p>${t('putable', 'Trái phiếu có quyền bán lại (putable bond)')} cho trái chủ quyền bán lại trái phiếu cho issuer ở giá định trước (thường là mệnh giá) vào các ngày định trước. Trái chủ dùng quyền khi lãi suất tăng hoặc tín dụng issuer xấu đi. Giá cao hơn, lợi suất thấp hơn trái phiếu thường.</p>
<h4>4.3. Convertible bond: quyền đổi sang cổ phiếu</h4>
<p>${t('convertible', 'Trái phiếu chuyển đổi (convertible bond)')} cho trái chủ quyền đổi mỗi trái phiếu thành một số cổ phiếu cố định của issuer.</p>
<div class="formula">${t('convratio', 'Tỷ lệ chuyển đổi (conversion ratio)')} = ${frac('Mệnh giá', 'Giá chuyển đổi')} ; ${t('convvalue', 'Giá trị chuyển đổi')} = tỷ lệ chuyển đổi × giá cổ phiếu</div>
<div class="example"><div class="ex-h">Ví dụ 4.1 - Chuyển đổi</div>
<p>Trái phiếu chuyển đổi mệnh giá 1.000, giá chuyển đổi 40. Cổ phiếu đang giá 36, trái phiếu đang giá 980. Tính tỷ lệ chuyển đổi, giá trị chuyển đổi và phần bù chuyển đổi. Nếu cổ phiếu lên 48 thì sao?</p>
<details><summary>Xem lời giải</summary>
<p>Tỷ lệ = 1.000 / 40 = <b>25 cổ phiếu</b>. Giá trị chuyển đổi = 25 × 36 = <b>900</b>. Phần bù (conversion premium) = 980 - 900 = <b>80</b>, tức 80 / 900 = 8,89% trên giá trị chuyển đổi: chưa nên chuyển đổi.</p>
<p>Cổ phiếu 48: giá trị chuyển đổi = 25 × 48 = <b>1.200</b>, cao hơn mệnh giá; trái phiếu sẽ giao dịch quanh mức này và chuyển đổi trở nên hấp dẫn.</p></details></div>
<p>Các biến thể: ${t('warrant', 'chứng quyền (warrant)')} đi kèm trái phiếu, cho quyền mua cổ phiếu ở giá cố định nhưng tách rời được khỏi trái phiếu; ${t('coco', 'trái phiếu chuyển đổi dự phòng (contingent convertible, CoCo)')} của ngân hàng tự động chuyển thành cổ phiếu (hoặc bị xóa nợ) khi vốn chủ sở hữu giảm dưới một ngưỡng quy định. CoCo có lợi cho issuer (tự động tăng vốn khi khó khăn), nên trả lãi cao.</p>
<table class="plain"><thead><tr><th>Điều khoản</th><th>Ai có lợi</th><th>So với trái phiếu thường</th></tr></thead><tbody>
<tr><td>Call, make-whole call</td><td>Issuer</td><td>Giá thấp hơn, lợi suất cao hơn</td></tr>
<tr><td>CoCo</td><td>Issuer (ngân hàng)</td><td>Lợi suất cao hơn</td></tr>
<tr><td>Put</td><td>Trái chủ</td><td>Giá cao hơn, lợi suất thấp hơn</td></tr>
<tr><td>Chuyển đổi, warrant</td><td>Trái chủ</td><td>Giá cao hơn, coupon thấp hơn</td></tr>
</tbody></table>`,
    },
    {
      title: '5. Pháp lý, quy định và thuế',
      minutes: 7,
      html: `
<h4>5.1. Nơi phát hành và luật áp dụng</h4>
<table class="plain"><thead><tr><th>Loại</th><th>Định nghĩa</th><th>Ví dụ</th></tr></thead><tbody>
<tr><td>${t('domestic', 'Trái phiếu trong nước (domestic bond)')}</td><td>Issuer trong nước, phát hành và giao dịch ở thị trường trong nước, bằng nội tệ</td><td>Doanh nghiệp Việt Nam phát hành trái phiếu VND tại Việt Nam</td></tr>
<tr><td>${t('foreign', 'Trái phiếu nước ngoài (foreign bond)')}</td><td>Issuer nước ngoài phát hành ở thị trường trong nước của một quốc gia khác, theo luật nước đó</td><td>Yankee (Mỹ), Samurai (Nhật), Panda (Trung Quốc), Bulldog (Anh)</td></tr>
<tr><td>${t('eurobond', 'Eurobond')}</td><td>Phát hành bên ngoài thẩm quyền của bất kỳ một quốc gia nào, thường qua tổ hợp quốc tế; tên gọi theo đồng tiền chứ không theo châu Âu</td><td>Eurodollar bond: trái phiếu USD phát hành ngoài nước Mỹ</td></tr>
<tr><td>${t('global', 'Trái phiếu toàn cầu (global bond)')}</td><td>Phát hành đồng thời trên thị trường Eurobond và ít nhất một thị trường trong nước</td><td>Đợt phát hành lớn của chính phủ, supranational</td></tr>
</tbody></table>
<p>Eurobond thường ít bị quản lý hơn trái phiếu trong nước và trước đây thường ở dạng ${t('bearer', 'vô danh (bearer bond)')}: ai cầm chứng chỉ là chủ sở hữu, không ghi tên. Ngược lại, ${t('registered', 'trái phiếu ghi danh (registered bond)')} ghi tên chủ sở hữu trong sổ đăng ký. Ngày nay hầu hết trái phiếu được ghi sổ điện tử.</p>
<p>${t('sukuk', 'Sukuk')} là công cụ tài chính Hồi giáo: vì luật Sharia cấm lãi, nhà đầu tư nhận lợi nhuận từ quyền sở hữu hoặc thuê tài sản cơ sở thay cho coupon.</p>
<p>Quy định cũng phân biệt <b>phát hành ra công chúng</b> (phải đăng ký, công bố thông tin với cơ quan quản lý) và <b>phát hành riêng lẻ</b> cho nhà đầu tư chuyên nghiệp (thủ tục nhẹ hơn, kém thanh khoản hơn). Chi tiết ở FI-03.</p>

<h4>5.2. Thuế</h4>
<ul>
<li>Tiền lãi (coupon) thường bị đánh thuế như thu nhập thông thường. Một số trái phiếu được miễn thuế, ví dụ phần lớn trái phiếu chính quyền địa phương ở Mỹ (municipal bonds), nên chấp nhận lợi suất thấp hơn.</li>
<li>Lãi vốn khi bán trái phiếu có thể chịu thuế suất khác (thường thấp hơn nếu nắm giữ dài hạn).</li>
<li>Trái phiếu phát hành dưới mệnh giá (zero-coupon, ${t('oid', 'original issue discount, OID')}): ở một số nước, phần chiết khấu được phân bổ và đánh thuế dần từng năm như tiền lãi, dù nhà đầu tư chưa nhận tiền mặt.</li>
<li>Thuế khấu trừ tại nguồn (withholding tax) đối với nhà đầu tư nước ngoài ảnh hưởng đến lựa chọn nơi phát hành.</li>
</ul>
<div class="example"><div class="ex-h">Ví dụ 5.1 - Lợi suất tương đương trước thuế</div>
<p>Trái phiếu miễn thuế có lợi suất 3%. Nhà đầu tư có thuế suất thu nhập 35%. Trái phiếu chịu thuế cần lợi suất bao nhiêu để tương đương?</p>
<details><summary>Xem lời giải</summary><p>3% / (1 - 0,35) = <b>4,62%</b>. Miễn thuế làm cho trái phiếu có lợi suất thấp vẫn hấp dẫn với nhà đầu tư chịu thuế suất cao.</p></details></div>
<p class="warn"><b>Bẫy:</b> "Eurobond là trái phiếu bằng EUR" là sai. Eurobond được đặt tên theo đồng tiền (Eurodollar, Euroyen) và được phát hành <b>ngoài</b> thị trường của đồng tiền đó.</p>`,
    },
    {
      title: '6. Tóm tắt và bẫy thường gặp',
      minutes: 4,
      html: `
<table class="plain"><thead><tr><th>Chủ đề</th><th>Nhớ</th></tr></thead><tbody>
<tr><td>Bullet</td><td>Gốc trả một lần cuối kỳ; rủi ro tín dụng cao nhất trong các cấu trúc trả gốc</td></tr>
<tr><td>Amortizing, sinking fund</td><td>Gốc giảm dần → rủi ro tín dụng thấp hơn, rủi ro tái đầu tư cao hơn; balloon = gốc còn lại cuối kỳ</td></tr>
<tr><td>FRN</td><td>MRR đầu kỳ + biên cố định, trả cuối kỳ; cap có lợi cho issuer, floor có lợi cho trái chủ</td></tr>
<tr><td>Step-up, credit-linked</td><td>Coupon tăng theo lịch / khi tín dụng xấu đi: bảo vệ trái chủ</td></tr>
<tr><td>PIK, deferred</td><td>Issuer giữ tiền mặt; trái chủ đòi lãi cao hơn</td></tr>
<tr><td>Capital-indexed (TIPS)</td><td>Gốc theo lạm phát, coupon rate cố định → tiền coupon tăng</td></tr>
<tr><td>Call, CoCo</td><td>Có lợi cho issuer → lợi suất cao hơn</td></tr>
<tr><td>Put, chuyển đổi</td><td>Có lợi cho trái chủ → lợi suất thấp hơn; tỷ lệ chuyển đổi = mệnh giá / giá chuyển đổi</td></tr>
<tr><td>Nơi phát hành</td><td>Foreign: issuer ngoại ở thị trường nội địa khác; Eurobond: ngoài mọi thẩm quyền; global: cả hai</td></tr>
<tr><td>Thuế</td><td>Lãi thường chịu thuế thu nhập; trái phiếu miễn thuế có lợi suất thấp hơn; OID có thể bị đánh thuế dần</td></tr>
</tbody></table>
<p>Tiếp theo: tab <b>Luyện tập</b> - 8 câu. FI-03 chuyển sang thị trường: ai phát hành, ai mua, giao dịch ở đâu.</p>`,
    },
  ];

  const glossary = {
    bullet: ['Bullet bond', 'Trái phiếu bullet', 'Trả coupon định kỳ và trả toàn bộ gốc một lần khi đáo hạn.'],
    amort: ['Amortizing bond', 'Trái phiếu trả dần gốc', 'Mỗi kỳ trả cả lãi và một phần gốc.'],
    balloon: ['Balloon payment', 'Khoản gốc cuối kỳ', 'Phần gốc còn lại trả một lần khi đáo hạn của khoản trả dần một phần.'],
    sinking: ['Sinking fund provision', 'Điều khoản quỹ chìm', 'Issuer phải mua lại hoặc trả dần một phần gốc theo lịch định trước.'],
    reinv: ['Reinvestment risk', 'Rủi ro tái đầu tư', 'Rủi ro dòng tiền nhận được phải đầu tư lại ở lãi suất thấp hơn.'],
    qm: ['Quoted margin', 'Biên cố định', 'Phần cộng thêm vào MRR để ra coupon của FRN, phản ánh rủi ro tín dụng của issuer.'],
    cap: ['Cap', 'Trần lãi suất', 'Mức coupon tối đa của FRN; có lợi cho issuer.'],
    floor: ['Floor', 'Sàn lãi suất', 'Mức coupon tối thiểu của FRN; có lợi cho trái chủ.'],
    inverse: ['Inverse floater', 'FRN nghịch', 'FRN có coupon giảm khi lãi suất tham chiếu tăng.'],
    stepup: ['Step-up coupon bond', 'Trái phiếu coupon tăng dần', 'Coupon tăng theo một lịch định trước.'],
    clc: ['Credit-linked coupon bond', 'Trái phiếu coupon gắn tín dụng', 'Coupon thay đổi theo xếp hạng tín dụng của issuer.'],
    pik: ['Payment-in-kind (PIK) bond', 'Trái phiếu trả lãi bằng hiện vật', 'Issuer được trả lãi bằng thêm trái phiếu thay vì tiền mặt.'],
    deferred: ['Deferred coupon bond', 'Trái phiếu hoãn trả lãi', 'Không trả lãi trong vài năm đầu, sau đó trả lãi.'],
    zero: ['Zero-coupon bond', 'Trái phiếu không trả lãi', 'Mua dưới mệnh giá, nhận đủ mệnh giá khi đáo hạn, không có coupon.'],
    linker: ['Inflation-linked bond (linker)', 'Trái phiếu gắn lạm phát', 'Dòng tiền được điều chỉnh theo chỉ số giá để bảo vệ sức mua.'],
    infrisk: ['Inflation risk', 'Rủi ro lạm phát', 'Rủi ro lạm phát làm giảm sức mua của dòng tiền danh nghĩa cố định.'],
    capidx: ['Capital-indexed bond', 'Trái phiếu gắn lạm phát vào gốc', 'Gốc điều chỉnh theo lạm phát, coupon rate cố định; ví dụ TIPS.'],
    levloan: ['Leveraged loan', 'Khoản vay đòn bẩy', 'Khoản vay, thường lãi thả nổi, cho doanh nghiệp tín dụng thấp hoặc đòn bẩy cao.'],
    callable: ['Callable bond', 'Trái phiếu có quyền mua lại', 'Issuer có quyền trả nợ trước hạn theo giá call.'],
    callprice: ['Call price', 'Giá mua lại', 'Giá issuer phải trả khi thực hiện quyền call.'],
    callprot: ['Call protection / lockout period', 'Thời gian bảo vệ', 'Giai đoạn đầu issuer không được thực hiện quyền call.'],
    makewhole: ['Make-whole call', 'Quyền call bồi hoàn đầy đủ', 'Giá call bằng PV dòng tiền còn lại chiết khấu ở lợi suất chuẩn cộng spread nhỏ.'],
    putable: ['Putable bond', 'Trái phiếu có quyền bán lại', 'Trái chủ có quyền bán lại trái phiếu cho issuer ở giá định trước.'],
    convertible: ['Convertible bond', 'Trái phiếu chuyển đổi', 'Trái chủ có quyền đổi trái phiếu thành một số cổ phiếu cố định.'],
    convratio: ['Conversion ratio', 'Tỷ lệ chuyển đổi', 'Số cổ phiếu nhận được cho mỗi trái phiếu = mệnh giá / giá chuyển đổi.'],
    convvalue: ['Conversion value', 'Giá trị chuyển đổi', 'Tỷ lệ chuyển đổi nhân giá cổ phiếu hiện tại.'],
    warrant: ['Warrant', 'Chứng quyền', 'Quyền mua cổ phiếu của issuer ở giá cố định, có thể tách khỏi trái phiếu.'],
    coco: ['Contingent convertible bond (CoCo)', 'Trái phiếu chuyển đổi dự phòng', 'Tự động chuyển thành cổ phiếu hoặc bị xóa nợ khi vốn của ngân hàng giảm dưới ngưỡng.'],
    domestic: ['Domestic bond', 'Trái phiếu trong nước', 'Issuer trong nước phát hành và giao dịch ở thị trường trong nước.'],
    foreign: ['Foreign bond', 'Trái phiếu nước ngoài', 'Issuer nước ngoài phát hành trên thị trường trong nước của quốc gia khác.'],
    eurobond: ['Eurobond', 'Eurobond', 'Trái phiếu phát hành ngoài thẩm quyền của bất kỳ quốc gia nào, đặt tên theo đồng tiền.'],
    global: ['Global bond', 'Trái phiếu toàn cầu', 'Phát hành đồng thời trên thị trường Eurobond và ít nhất một thị trường trong nước.'],
    bearer: ['Bearer bond', 'Trái phiếu vô danh', 'Ai cầm chứng chỉ là chủ sở hữu; không ghi tên chủ sở hữu.'],
    registered: ['Registered bond', 'Trái phiếu ghi danh', 'Tên chủ sở hữu được ghi trong sổ đăng ký.'],
    sukuk: ['Sukuk', 'Sukuk', 'Công cụ tài chính Hồi giáo, lợi nhuận đến từ quyền sở hữu hoặc thuê tài sản thay cho lãi.'],
    oid: ['Original issue discount (OID)', 'Chiết khấu khi phát hành', 'Phần chênh lệch giữa mệnh giá và giá phát hành; có thể bị đánh thuế dần như tiền lãi.'],
  };

  const practice = [
    { q: 'FRN mệnh giá 1.000 trả lãi nửa năm một lần, coupon = MRR + 90 bps. MRR hằng năm đầu kỳ là 4,1%. Tiền lãi kỳ này là:', choices: ['50,00, trả cuối kỳ', '25,00, trả cuối kỳ', '20,50, trả đầu kỳ'], answer: 1, explain: '(4,1% + 0,9%) / 2 = 2,5% × 1.000 = 25,00, MRR xác định đầu kỳ nhưng tiền lãi trả cuối kỳ. A quên chia 2 cho kỳ nửa năm. C bỏ quên biên 90 bps và nhầm thời điểm trả.' },
    { q: 'Với cùng issuer, kỳ hạn và lãi suất, cấu trúc nào khiến nhà đầu tư chịu rủi ro tín dụng CAO NHẤT?', choices: ['Bullet', 'Amortizing toàn phần', 'Có sinking fund'], answer: 0, explain: 'Bullet giữ nguyên toàn bộ gốc đến ngày đáo hạn nên phần tiền đang rủi ro lớn nhất. B và C trả gốc dần nên dư nợ giảm theo thời gian, đổi lại nhà đầu tư chịu rủi ro tái đầu tư.' },
    { q: 'Trái phiếu chuyển đổi mệnh giá 1.000, giá chuyển đổi 25. Cổ phiếu đang giá 30. Giá trị chuyển đổi là:', choices: ['750', '1.000', '1.200'], answer: 2, explain: 'Tỷ lệ chuyển đổi = 1.000 / 25 = 40 cổ phiếu; giá trị chuyển đổi = 40 × 30 = 1.200. A là nhân nhầm 25 × 30 (lấy giá chuyển đổi làm tỷ lệ). B là mệnh giá, không phải giá trị chuyển đổi.' },
    { q: 'Trái phiếu PIK 50 triệu, lãi 10%/năm trả bằng trái phiếu mới trong 2 năm. Dư nợ gốc sau 2 năm là:', choices: ['50,0 triệu', '60,0 triệu', '60,5 triệu'], answer: 2, explain: 'Lãi PIK nhập vào gốc và năm sau tính lãi trên gốc mới: 50 × 1,1² = 60,5. A coi như lãi đã trả bằng tiền mặt. B tính lãi đơn, bỏ qua lãi trên phần trái phiếu PIK năm 1.' },
    { q: 'Trái phiếu gắn lạm phát kiểu capital-indexed có đặc điểm:', choices: ['Gốc điều chỉnh theo lạm phát, coupon rate cố định nên tiền coupon tăng theo lạm phát', 'Coupon rate điều chỉnh theo lạm phát, gốc giữ nguyên', 'Cả coupon rate và gốc đều cố định'], answer: 0, explain: 'Capital-indexed (như TIPS) điều chỉnh gốc; coupon = rate cố định × gốc đã điều chỉnh. B là interest-indexed. C là trái phiếu thường, không bảo vệ lạm phát.' },
    { q: 'So với trái phiếu thường tương đương, trái phiếu putable NHIỀU KHẢ NĂNG có:', choices: ['Giá thấp hơn, lợi suất cao hơn', 'Giá cao hơn, lợi suất thấp hơn', 'Giá và lợi suất như nhau'], answer: 1, explain: 'Quyền put thuộc trái chủ nên trái chủ trả thêm cho quyền đó: giá cao hơn, lợi suất thấp hơn. A là đặc điểm của callable bond (quyền thuộc issuer). C bỏ qua giá trị của quyền chọn.' },
    { q: 'Một công ty Nhật phát hành trái phiếu bằng USD tại thị trường Mỹ, đăng ký theo luật chứng khoán Mỹ. Đây là:', choices: ['Eurobond', 'Global bond', 'Foreign bond'], answer: 2, explain: 'Issuer nước ngoài phát hành trên thị trường trong nước của nước khác theo luật nước đó là foreign bond (Yankee bond). A sai: Eurobond phát hành ngoài thẩm quyền của nước có đồng tiền đó. B sai: global bond phải phát hành đồng thời trên thị trường Eurobond và thị trường trong nước.' },
    { q: 'Điều nào mô tả ĐÚNG một make-whole call?', choices: ['Giá call bằng PV các dòng tiền còn lại chiết khấu ở lợi suất chuẩn cộng một spread nhỏ, nên issuer ít khi call chỉ để vay lại rẻ hơn', 'Giá call luôn bằng mệnh giá trong suốt đời trái phiếu', 'Cho phép trái chủ yêu cầu issuer trả nợ sớm'], answer: 0, explain: 'Make-whole bồi hoàn gần như đủ giá trị cho trái chủ nên làm giảm động cơ call khi lãi suất giảm. B mô tả call ở mệnh giá thông thường. C là quyền put.' },
  ];

  window.LESSONS['FI-02'] = {
    moduleId: 'FI-02',
    calculator: 'BA II Plus',
    warmup: [
      'Nhớ lại FI-01: điều khoản tùy chọn nào có lợi cho issuer, điều khoản nào có lợi cho trái chủ?',
      'Nhớ lại QM-04: khoản vay trả góp đều (amortizing) có FV bằng bao nhiêu khi bấm TVM?',
      'Đoán trước: nếu bạn lo lạm phát tăng mạnh, bạn muốn trái phiếu của mình có đặc điểm gì?',
    ],
    sections,
    glossary,
    practice,
    widgets: {},
    slides: [],
    wrapup: [
      'Vẽ dòng tiền của bullet, amortizing toàn phần và amortizing có balloon cho cùng khoản vay 1.000, 5 năm.',
      'Liệt kê các điều khoản có lợi cho issuer và các điều khoản có lợi cho trái chủ.',
      'Phân biệt domestic, foreign, Eurobond và global bond bằng một ví dụ cho mỗi loại.',
    ],
  };
}());
