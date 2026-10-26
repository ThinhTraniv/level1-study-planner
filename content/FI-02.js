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
<p>Tiếp theo: tab <b>Luyện tập</b> - 10 câu (rút ngẫu nhiên từ ngân hàng 30 câu, mỗi lần làm một bộ khác). FI-03 chuyển sang thị trường: ai phát hành, ai mua, giao dịch ở đâu.</p>`,
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
    { q: 'FRN mệnh giá 1.000 trả lãi nửa năm một lần, coupon = MRR + 90 bps. MRR hằng năm đầu kỳ là 4,1%. Tiền lãi kỳ này là:', choices: ['50,00, trả cuối kỳ', '25,00, trả cuối kỳ', '20,50, trả đầu kỳ'], answer: 1, explain: '(4,1% + 0,9%) / 2 = 2,5% × 1.000 = 25,00, MRR xác định đầu kỳ nhưng tiền lãi trả cuối kỳ. Lựa chọn 50,00 quên chia 2 cho kỳ nửa năm. Lựa chọn 20,50 trả đầu kỳ bỏ quên biên 90 bps và nhầm thời điểm trả.' },
    { q: 'Với cùng issuer, kỳ hạn và lãi suất, cấu trúc nào khiến nhà đầu tư chịu rủi ro tín dụng CAO NHẤT?', choices: ['Bullet', 'Amortizing toàn phần', 'Có sinking fund'], answer: 0, explain: 'Bullet giữ nguyên toàn bộ gốc đến ngày đáo hạn nên phần tiền đang rủi ro lớn nhất. Amortizing toàn phần và sinking fund đều trả gốc dần nên dư nợ giảm theo thời gian, đổi lại nhà đầu tư chịu rủi ro tái đầu tư.' },
    { q: 'Trái phiếu chuyển đổi mệnh giá 1.000, giá chuyển đổi 25. Cổ phiếu đang giá 30. Giá trị chuyển đổi là:', choices: ['750', '1.000', '1.200'], answer: 2, explain: 'Tỷ lệ chuyển đổi = 1.000 / 25 = 40 cổ phiếu; giá trị chuyển đổi = 40 × 30 = 1.200. Lựa chọn 750 là nhân nhầm 25 × 30 (lấy giá chuyển đổi làm tỷ lệ). Lựa chọn 1.000 là mệnh giá, không phải giá trị chuyển đổi.' },
    { q: 'Trái phiếu PIK 50 triệu, lãi 10%/năm trả bằng trái phiếu mới trong 2 năm. Dư nợ gốc sau 2 năm là:', choices: ['50,0 triệu', '60,0 triệu', '60,5 triệu'], answer: 2, explain: 'Lãi PIK nhập vào gốc và năm sau tính lãi trên gốc mới: 50 × 1,1² = 60,5. Lựa chọn 50,0 triệu coi như lãi đã trả bằng tiền mặt. Lựa chọn 60,0 triệu tính lãi đơn, bỏ qua lãi trên phần trái phiếu PIK năm 1.' },
    { q: 'Trái phiếu gắn lạm phát kiểu capital-indexed có đặc điểm:', choices: ['Gốc điều chỉnh theo lạm phát, coupon rate cố định nên tiền coupon tăng theo lạm phát', 'Coupon rate điều chỉnh theo lạm phát, gốc giữ nguyên', 'Cả coupon rate và gốc đều cố định'], answer: 0, explain: 'Capital-indexed (như TIPS) điều chỉnh gốc; coupon = rate cố định × gốc đã điều chỉnh. Phương án coupon rate điều chỉnh, gốc giữ nguyên là interest-indexed. Phương án coupon rate và gốc đều cố định là trái phiếu thường, không bảo vệ lạm phát.' },
    { q: 'So với trái phiếu thường tương đương, trái phiếu putable NHIỀU KHẢ NĂNG có:', choices: ['Giá thấp hơn, lợi suất cao hơn', 'Giá cao hơn, lợi suất thấp hơn', 'Giá và lợi suất như nhau'], answer: 1, explain: 'Quyền put thuộc trái chủ nên trái chủ trả thêm cho quyền đó: giá cao hơn, lợi suất thấp hơn. Giá thấp hơn, lợi suất cao hơn là đặc điểm của callable bond (quyền thuộc issuer). Phương án giá và lợi suất như nhau bỏ qua giá trị của quyền chọn.' },
    { q: 'Một công ty Nhật phát hành trái phiếu bằng USD tại thị trường Mỹ, đăng ký theo luật chứng khoán Mỹ. Đây là:', choices: ['Eurobond', 'Global bond', 'Foreign bond'], answer: 2, explain: 'Issuer nước ngoài phát hành trên thị trường trong nước của nước khác theo luật nước đó là foreign bond (Yankee bond). Eurobond sai: loại này phát hành ngoài thẩm quyền của nước có đồng tiền đó. Global bond sai: loại này phải phát hành đồng thời trên thị trường Eurobond và thị trường trong nước.' },
    { q: 'Điều nào mô tả ĐÚNG một make-whole call?', choices: ['Giá call bằng PV các dòng tiền còn lại chiết khấu ở lợi suất chuẩn cộng một spread nhỏ, nên issuer ít khi call chỉ để vay lại rẻ hơn', 'Giá call luôn bằng mệnh giá trong suốt đời trái phiếu', 'Cho phép trái chủ yêu cầu issuer trả nợ sớm'], answer: 0, explain: 'Make-whole bồi hoàn gần như đủ giá trị cho trái chủ nên làm giảm động cơ call khi lãi suất giảm. Phương án giá call luôn bằng mệnh giá mô tả call ở mệnh giá thông thường. Phương án trái chủ yêu cầu trả nợ sớm là quyền put.' },
    { q: "Một trái phiếu amortizing toàn phần mệnh giá 5.000.000 USD, kỳ hạn 4 năm, lãi suất 7%/năm, trả hằng năm các khoản bằng nhau. Khoản trả mỗi năm gần nhất với:", choices: ["1.600.000 USD", "1.476.141 USD", "350.000 USD"], answer: 1, explain: "N = 4, I/Y = 7, PV = 5.000.000, FV = 0 → PMT = 1.476.141 USD. Lựa chọn 1.600.000 USD lấy gốc chia đều 1.250.000 cộng lãi năm đầu 350.000, nhưng lãi năm đầu không giữ nguyên trong các năm sau nên khoản trả không bằng nhau. Lựa chọn 350.000 USD chỉ là tiền lãi, như một trái phiếu bullet." },
    { q: "Một khoản nợ amortizing toàn phần 2.000, kỳ hạn 3 năm, lãi suất 5%/năm, trả hằng năm các khoản bằng nhau. Phần gốc được trả trong năm thứ nhất gần nhất với:", choices: ["666,67", "634,42", "734,42"], answer: 1, explain: "PMT = 734,42 (N = 3, I/Y = 5, PV = 2.000). Lãi năm 1 = 5% × 2.000 = 100, nên gốc năm 1 = 734,42 - 100 = 634,42. Lựa chọn 666,67 chia đều gốc cho 3 năm, không phải cấu trúc khoản trả bằng nhau. Lựa chọn 734,42 là cả khoản trả, quên tách phần lãi." },
    { q: "Trái phiếu amortizing một phần: mệnh giá 1.000, kỳ hạn 5 năm, lãi suất 8%/năm, trả hằng năm, với khoản balloon 500 trả cùng kỳ cuối. Khoản trả định kỳ mỗi năm (không kể balloon) gần nhất với:", choices: ["250,46", "335,68", "165,23"], answer: 2, explain: "N = 5, I/Y = 8, PV = 1.000, FV = -500 → PMT = 165,23. Lựa chọn 250,46 là khoản trả của trái phiếu amortizing toàn phần (FV = 0), bỏ qua balloon. Lựa chọn 335,68 nhập sai dấu balloon, như thể khoản 500 được cộng thêm vào nợ phải trả dần." },
    { q: "Đợt phát hành 400 triệu USD, kỳ hạn 12 năm, có sinking fund yêu cầu mua lại 30 triệu USD vào cuối mỗi năm từ năm 5 đến hết năm 11. Gốc còn phải trả khi đáo hạn cuối năm 12 là:", choices: ["190 triệu USD", "160 triệu USD", "220 triệu USD"], answer: 0, explain: "Từ năm 5 đến năm 11 có 7 lần mua lại: 7 × 30 = 210 triệu, nên gốc còn lại khi đáo hạn = 400 - 210 = 190 triệu USD. Lựa chọn 160 triệu USD đếm 8 lần (tính cả năm 12). Lựa chọn 220 triệu USD đếm 6 lần (lấy 11 - 5), quên cộng 1 khi đếm cả hai đầu." },
    { q: "Nhận định nào đúng nhất về điều khoản sinking fund đối với nhà đầu tư?", choices: ["Tăng rủi ro tín dụng vì toàn bộ gốc chỉ được trả khi đáo hạn", "Giảm rủi ro tín dụng vì dư nợ giảm dần, nhưng nhà đầu tư chịu rủi ro tái đầu tư nếu trái phiếu bị mua lại ở mệnh giá khi lãi suất đã giảm", "Loại bỏ hoàn toàn rủi ro tái đầu tư cho nhà đầu tư"], answer: 1, explain: "Sinking fund buộc issuer trả dần gốc nên rủi ro tín dụng giảm. Nhưng khi lãi suất giảm, giá trái phiếu trên 100 mà issuer vẫn được mua lại ở mệnh giá, nhà đầu tư phải tái đầu tư ở lãi suất thấp hơn. Phương án \"toàn bộ gốc chỉ được trả khi đáo hạn\" mô tả bullet. Phương án \"loại bỏ hoàn toàn rủi ro tái đầu tư\" ngược lại: nhận tiền sớm làm tăng rủi ro này." },
    { q: "FRN mệnh giá 10.000.000 USD trả lãi theo quý, coupon = MRR + 120 bps, có trần lãi suất (cap) 6,00%/năm. MRR đầu kỳ là 5,40%/năm. Tiền lãi kỳ này là:", choices: ["165.000 USD", "135.000 USD", "150.000 USD"], answer: 2, explain: "MRR + biên = 5,40% + 1,20% = 6,60% vượt trần, nên coupon áp dụng 6,00%/năm: 6,00% / 4 × 10.000.000 = 150.000 USD. Lựa chọn 165.000 USD bỏ qua cap. Lựa chọn 135.000 USD chỉ dùng MRR, quên cộng biên. Cap có lợi cho issuer vì giới hạn chi phí lãi khi lãi suất tăng." },
    { q: "Một inverse floater mệnh giá 1.000.000 USD trả lãi hằng năm với coupon = 12% - MRR. MRR đầu kỳ tăng từ 3% lên 4%. Tiền lãi của kỳ này là:", choices: ["80.000 USD", "90.000 USD", "160.000 USD"], answer: 0, explain: "Coupon = 12% - 4% = 8%, tiền lãi = 8% × 1.000.000 = 80.000 USD. Coupon của inverse floater giảm khi MRR tăng. Lựa chọn 90.000 USD dùng MRR cũ 3%. Lựa chọn 160.000 USD cộng MRR như một FRN thông thường (12% + 4%)." },
    { q: "Một trái phiếu callable có coupon step-up: 4% trong năm 1-3, tăng lên 6% từ năm 4 nếu chưa bị call. Điều khoản step-up này chủ yếu nhằm:", choices: ["Giúp issuer giảm chi phí lãi vay về sau", "Bù cho trái chủ khi issuer không call trái phiếu, đồng thời tạo động lực để issuer call", "Bảo vệ trái chủ khỏi rủi ro lạm phát bằng cách gắn coupon với CPI"], answer: 1, explain: "Coupon tăng theo lịch định trước làm việc giữ trái phiếu đắt dần với issuer, nên issuer có động lực call; nếu không call, trái chủ được bù bằng coupon cao hơn. Phương án \"giảm chi phí lãi vay\" ngược chiều: coupon tăng chứ không giảm. Phương án gắn coupon với CPI mô tả trái phiếu gắn lạm phát, không phải step-up." },
    { q: "Trái phiếu mệnh giá 2.000.000 USD có coupon credit-linked: coupon cơ sở 5%/năm, tăng 50 bps cho mỗi bậc xếp hạng bị hạ. Issuer vừa bị hạ hai bậc trước kỳ trả lãi. Tiền coupon năm đó là:", choices: ["110.000 USD", "100.000 USD", "120.000 USD"], answer: 2, explain: "Coupon = 5% + 2 × 0,50% = 6,00%, tiền lãi = 6% × 2.000.000 = 120.000 USD. Lựa chọn 110.000 USD chỉ cộng một bậc. Lựa chọn 100.000 USD giữ coupon gốc, bỏ qua điều khoản credit-linked. Lưu ý: điều khoản này bảo vệ trái chủ nhưng làm issuer khó khăn hơn đúng lúc tín dụng đang xấu đi." },
    { q: "Với cùng issuer, kỳ hạn và lợi suất, cấu trúc nào khiến nhà đầu tư chịu rủi ro tái đầu tư THẤP NHẤT?", choices: ["Trái phiếu zero-coupon", "Trái phiếu amortizing toàn phần", "Trái phiếu bullet trả coupon hằng năm"], answer: 0, explain: "Zero-coupon không có dòng tiền nào trước đáo hạn nên không phải tái đầu tư coupon hay gốc. Amortizing toàn phần trả cả lãi lẫn gốc mỗi kỳ, nên có nhiều tiền phải tái đầu tư nhất. Bullet trả coupon định kỳ nên vẫn có rủi ro tái đầu tư coupon." },
    { q: "Một trái phiếu gắn lạm phát kiểu interest-indexed, mệnh giá 1.000, coupon thực 1,5%/năm trả hằng năm; coupon rate được điều chỉnh theo lạm phát. Lạm phát năm qua là 4%. Tiền coupon năm nay gần nhất với:", choices: ["15,60", "55,00", "15,00"], answer: 1, explain: "Interest-indexed giữ nguyên gốc và điều chỉnh coupon rate: 1,5% + 4% = 5,5%, tiền coupon = 5,5% × 1.000 = 55,00. Lựa chọn 15,60 là cách tính của capital-indexed (coupon 1,5% trên gốc điều chỉnh 1.040). Lựa chọn 15,00 bỏ qua điều chỉnh lạm phát." },
    { q: "Trái phiếu capital-indexed mệnh giá 1.000, coupon thực 3%/năm trả hằng năm. Lạm phát năm 1 là 6%, năm 2 là 5%. Tiền coupon năm 2 gần nhất với:", choices: ["30,00", "80,00", "33,39"], answer: 2, explain: "Capital-indexed điều chỉnh gốc theo lạm phát và giữ coupon rate cố định. Gốc cuối năm 2 = 1.000 × 1,06 × 1,05 = 1.113,00; coupon = 3% × 1.113,00 = 33,39. Lựa chọn 30,00 bỏ qua điều chỉnh lạm phát. Lựa chọn 80,00 cộng lạm phát vào coupon rate (3% + 5%) như kiểu interest-indexed." },
    { q: "Trái phiếu chuyển đổi mệnh giá 1.000, giá chuyển đổi 50. Cổ phiếu đang giá 42 và trái phiếu đang giá 920. Phần bù chuyển đổi (conversion premium) tính trên giá trị chuyển đổi gần nhất với:", choices: ["9,52%", "8,70%", "19,05%"], answer: 0, explain: "Tỷ lệ chuyển đổi = 1.000 / 50 = 20; giá trị chuyển đổi = 20 × 42 = 840; phần bù = 920 - 840 = 80, tức 80 / 840 = 9,52%. Lựa chọn 8,70% chia cho giá trái phiếu thay vì giá trị chuyển đổi. Lựa chọn 19,05% dùng mệnh giá 1.000 thay cho giá thị trường 920." },
    { q: "Trái phiếu chuyển đổi mệnh giá 1.000 USD có giá chuyển đổi 62,50 USD. Cổ phiếu hiện có giá 50 USD. Tỷ lệ chuyển đổi (conversion ratio) là:", choices: ["20 cổ phiếu", "16 cổ phiếu", "62,5 cổ phiếu"], answer: 1, explain: "Tỷ lệ chuyển đổi = mệnh giá / giá chuyển đổi = 1.000 / 62,50 = 16 cổ phiếu, cố định theo hợp đồng và không phụ thuộc giá cổ phiếu hiện tại. Lựa chọn 20 cổ phiếu chia cho giá thị trường 50. Lựa chọn 62,5 nhầm giá chuyển đổi với số cổ phiếu." },
    { q: "Nhận định nào đúng nhất về trái phiếu chuyển đổi dự phòng (contingent convertible, CoCo) do ngân hàng phát hành?", choices: ["Trái chủ được quyền chọn thời điểm chuyển đổi, nên lợi suất thấp hơn trái phiếu thường", "Được ưu tiên trả trước tiền gửi khi ngân hàng phá sản", "Tự động chuyển thành cổ phiếu hoặc bị xóa nợ khi vốn của ngân hàng giảm dưới ngưỡng quy định, nên có lợi cho issuer và trả lợi suất cao hơn"], answer: 2, explain: "CoCo chuyển đổi tự động khi vốn chủ sở hữu giảm dưới ngưỡng, giúp ngân hàng tăng vốn đúng lúc khó khăn; trái chủ gánh rủi ro này nên đòi lợi suất cao. Phương án \"trái chủ được quyền chọn thời điểm\" mô tả trái phiếu chuyển đổi thông thường. Phương án \"ưu tiên trả trước tiền gửi\" sai: CoCo xếp sau, gần với vốn chủ sở hữu." },
    { q: "Một trái phiếu callable có lịch call: sau năm 3 ở giá 102, sau năm 4 ở giá 101, từ năm 5 trở đi ở giá 100. Vào thời điểm 4 năm 6 tháng sau phát hành, issuer call toàn bộ 20 triệu USD mệnh giá. Số tiền issuer phải trả (bỏ qua lãi dồn tích) là:", choices: ["20,2 triệu USD", "20,4 triệu USD", "20,0 triệu USD"], answer: 0, explain: "Thời điểm 4,5 năm nằm trong giai đoạn sau năm 4 và trước năm 5, nên giá call là 101: 101% × 20 = 20,2 triệu USD. Lựa chọn 20,4 triệu USD dùng giá 102 của giai đoạn trước. Lựa chọn 20,0 triệu USD dùng giá 100, chỉ áp dụng từ năm 5. Phần trên 100 là phí mua lại (call premium) giảm dần theo thời gian." },
    { q: "Trái phiếu callable có thời gian bảo vệ 2 năm; sau đó issuer chỉ được call vào các ngày trả coupon. Kiểu quyền call này là:", choices: ["American", "Bermudan", "European"], answer: 1, explain: "Bermudan-style cho phép thực hiện vào một loạt ngày định trước, thường là ngày trả coupon, sau thời gian bảo vệ. American-style cho phép call bất kỳ lúc nào sau thời gian bảo vệ. European-style chỉ cho phép call vào một ngày duy nhất." },
    { q: "Một doanh nghiệp Việt Nam phát hành trái phiếu bằng USD thông qua tổ hợp ngân hàng quốc tế, bán cho nhà đầu tư ở Singapore và London, không đăng ký tại Mỹ. Trái phiếu này là:", choices: ["Foreign bond (Yankee bond)", "Global bond", "Eurobond (Eurodollar bond)"], answer: 2, explain: "Trái phiếu bằng USD phát hành ngoài nước Mỹ, ngoài thẩm quyền của một quốc gia cụ thể là Eurodollar bond, một dạng Eurobond. Yankee bond là trái phiếu của issuer nước ngoài phát hành tại thị trường Mỹ theo luật Mỹ. Global bond phải phát hành đồng thời trên thị trường Eurobond và ít nhất một thị trường trong nước." },
    { q: "So với trái phiếu ghi danh (registered bond), trái phiếu vô danh (bearer bond) có đặc điểm:", choices: ["Người cầm giữ chứng chỉ là chủ sở hữu, tên chủ sở hữu không được ghi trong sổ đăng ký", "Tên chủ sở hữu được ghi trong sổ đăng ký của issuer hoặc đơn vị đăng ký", "Chỉ được phát hành ra công chúng tại thị trường trong nước"], answer: 0, explain: "Bearer bond: ai cầm chứng chỉ thì là chủ sở hữu, không ghi tên; trước đây phổ biến trên thị trường Eurobond vì tính ẩn danh. Phương án ghi tên trong sổ đăng ký mô tả registered bond. Phương án \"chỉ phát hành ra công chúng tại thị trường trong nước\" sai: bearer bond gắn với thị trường Eurobond." },
    { q: "Trái phiếu chính quyền địa phương được miễn thuế có lợi suất 2,80%. Nhà đầu tư có thuế suất thu nhập 30%. Lợi suất trước thuế mà một trái phiếu chịu thuế cần có để tương đương là:", choices: ["1,96%", "4,00%", "3,64%"], answer: 1, explain: "Lợi suất tương đương trước thuế = 2,80% / (1 - 0,30) = 4,00%. Lựa chọn 1,96% nhân với (1 - 0,30), tức tính lợi suất sau thuế của một trái phiếu chịu thuế 2,80%. Lựa chọn 3,64% nhân với 1,30, xấp xỉ sai cho phép chia." },
    { q: "Ở một số quốc gia, nhà đầu tư nắm giữ trái phiếu zero-coupon phát hành dưới mệnh giá (original issue discount, OID) bị đánh thuế như thế nào?", choices: ["Không phải nộp thuế cho đến khi bán hoặc đáo hạn, và toàn bộ phần chênh được đánh thuế như lãi vốn", "Được miễn thuế hoàn toàn vì trái phiếu không trả coupon", "Phần chiết khấu được phân bổ và đánh thuế dần mỗi năm như tiền lãi, dù chưa nhận tiền mặt"], answer: 2, explain: "Với OID, phần chênh giữa mệnh giá và giá phát hành được coi là tiền lãi và ở một số nước bị đánh thuế dần từng năm, dù nhà đầu tư chưa nhận tiền mặt. Phương án chỉ đánh thuế khi bán như lãi vốn bỏ qua quy định phân bổ OID. Phương án miễn thuế hoàn toàn sai: không trả coupon không có nghĩa là không có thu nhập lãi." },
    { q: "Sukuk khác với trái phiếu truyền thống chủ yếu ở điểm:", choices: ["Nhà đầu tư nhận lợi nhuận từ quyền sở hữu hoặc cho thuê tài sản cơ sở thay vì tiền lãi, để tuân thủ luật Sharia", "Sukuk luôn được chính phủ bảo lãnh", "Sukuk trả lãi thả nổi theo MRR cộng biên"], answer: 0, explain: "Luật Sharia cấm thu lãi, nên sukuk cấu trúc dòng tiền dưới dạng lợi nhuận từ sở hữu hoặc thuê tài sản cơ sở. Phương án \"luôn được chính phủ bảo lãnh\" sai: sukuk có thể do doanh nghiệp phát hành không có bảo lãnh. Phương án lãi thả nổi theo MRR vẫn là trả lãi, trái với nguyên tắc của sukuk." },
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
