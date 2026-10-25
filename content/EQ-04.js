// Bài giảng EQ-04 - Sources of Equity Returns (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t, frac, keys, timeline } = window.CFAH;

  const sections = [
    {
      title: '1. Bức tranh lớn',
      minutes: 4,
      html: `
<p>Nhà đầu tư cổ phiếu chỉ có hai nguồn lợi suất: <b>tiền công ty trả ra</b> và <b>thay đổi giá</b>. Module này trả lời: công ty trả tiền ra bằng những cách nào, khi nào thì ai được nhận, và đo tổng lợi suất ra sao.</p>
<div class="key">${t('tr', 'Tổng lợi suất (total return)')} = ${t('pr', 'lợi suất giá (price return)')} + lợi suất cổ tức. Công ty có thể trả tiền cho cổ đông bằng <b>cổ tức tiền mặt</b> hoặc <b>mua lại cổ phiếu</b>; còn <b>cổ tức bằng cổ phiếu, chia tách và gộp cổ phiếu</b> chỉ chia lại "chiếc bánh" thành nhiều hoặc ít miếng hơn, không làm bánh to hơn.</div>
<p>Ba LOS của module:</p>
<ol>
  <li><b>Đặc điểm và công dụng của cổ tức, mua lại cổ phiếu, chia tách và gộp cổ phiếu</b>: phần 2, 3, 4.</li>
  <li><b>Trình tự chi trả cổ tức</b>: phần 5.</li>
  <li><b>Tính price return và total return</b>: phần 6.</li>
</ol>
<p class="tip"><b>Liên hệ:</b> QM-01 đã dạy holding period return, QM-03 dạy price return và total return của <b>chỉ số</b>. Ở đây ta áp dụng cho <b>một cổ phiếu</b>, có thêm các tình huống chia tách, tái đầu tư cổ tức và tỷ giá.</p>`,
    },
    {
      title: '2. Cổ tức tiền mặt',
      minutes: 10,
      html: `
<table class="plain"><thead><tr><th>Loại</th><th>Đặc điểm</th></tr></thead><tbody>
<tr><td>${t('regular', 'Cổ tức thường kỳ (regular cash dividend)')}</td><td>Trả đều đặn (quý, nửa năm, năm). Công ty rất ngại cắt giảm vì thị trường coi đó là tín hiệu xấu, nên cổ tức thường "dính" (sticky): chỉ tăng khi tin rằng lợi nhuận tăng bền vững</td></tr>
<tr><td>${t('special', 'Cổ tức đặc biệt (special, extra dividend)')}</td><td>Trả một lần, ngoài cổ tức thường kỳ, khi có lợi nhuận bất thường hoặc tiền mặt dư. Không tạo kỳ vọng sẽ lặp lại</td></tr>
<tr><td>${t('liquidating', 'Cổ tức thanh lý (liquidating dividend)')}</td><td>Trả lại vốn khi công ty bán một mảng kinh doanh, thu hẹp hoặc giải thể; vượt quá lợi nhuận giữ lại</td></tr>
</tbody></table>
<h4>Hai tỷ số cơ bản</h4>
<div class="formula">${t('payout', 'Tỷ lệ chi trả (payout ratio)')} = ${frac('Cổ tức mỗi cổ phiếu (DPS)', 'EPS')} &nbsp;&nbsp;&nbsp;&nbsp; ${t('dy', 'Lợi suất cổ tức (dividend yield)')} = ${frac('DPS', 'Giá cổ phiếu')}</div>
<div class="example"><div class="ex-h">Ví dụ 2.1</div>
<p>(a) Công ty có EPS 4, trả cổ tức 1,60, giá cổ phiếu 40. Tính payout ratio và dividend yield. (b) Một công ty Việt Nam công bố "cổ tức tiền mặt 15%", giá cổ phiếu 30.000 đồng. Mỗi cổ phiếu nhận bao nhiêu và lợi suất cổ tức là bao nhiêu?</p>
<details><summary>Xem lời giải</summary><p>(a) Payout = 1,60 / 4 = <b>40%</b>; dividend yield = 1,60 / 40 = <b>4%</b>.<br>
(b) Ở Việt Nam, tỷ lệ cổ tức tính trên <b>mệnh giá 10.000 đồng</b>: 15% × 10.000 = <b>1.500 đồng</b>/cổ phiếu. Lợi suất cổ tức = 1.500 / 30.000 = <b>5%</b>, không phải 15%.</p></details></div>
<h4>Vì sao công ty trả cổ tức?</h4>
<ul>
<li><b>Tín hiệu:</b> tăng cổ tức cho thấy ban điều hành tin vào lợi nhuận tương lai; cắt cổ tức thường làm giá giảm mạnh.</li>
<li><b>Nhóm nhà đầu tư (clientele):</b> quỹ hưu trí, người nghỉ hưu cần dòng tiền đều.</li>
<li><b>Kỷ luật:</b> trả bớt tiền dư giảm nguy cơ ban điều hành đầu tư lãng phí (vấn đề đại diện, CF-03).</li>
<li><b>Nhược điểm:</b> ở nhiều nước cổ tức bị đánh thuế ngay, trong khi lãi vốn chỉ bị đánh thuế khi bán; công ty mất tính linh hoạt vì khó cắt giảm.</li>
</ul>`,
    },
    {
      title: '3. Cổ tức bằng cổ phiếu, chia tách và gộp cổ phiếu',
      minutes: 12,
      html: `
<ul>
<li>${t('stockdiv', 'Cổ tức bằng cổ phiếu (stock dividend)')}: công ty phát hành thêm cổ phiếu cho cổ đông theo tỷ lệ, ví dụ 10% (cứ 10 cổ phiếu nhận thêm 1). Ở Việt Nam gọi là trả cổ tức bằng cổ phiếu hoặc thưởng cổ phiếu.</li>
<li>${t('split', 'Chia tách cổ phiếu (stock split)')}: mỗi cổ phiếu tách thành nhiều cổ phiếu, ví dụ 2-for-1 (1 thành 2), 3-for-2 (2 thành 3).</li>
<li>${t('reverse', 'Gộp cổ phiếu (reverse stock split)')}: nhiều cổ phiếu gộp thành một, ví dụ 1-for-10 (10 thành 1).</li>
</ul>
<div class="key">Cả ba <b>không làm thay đổi giá trị công ty</b>, tỷ lệ sở hữu và tài sản của cổ đông. Giá mỗi cổ phiếu điều chỉnh tỷ lệ nghịch với số cổ phiếu. Khác biệt duy nhất về kế toán: stock dividend chuyển một phần lợi nhuận giữ lại sang vốn góp, còn split chỉ đổi mệnh giá và số cổ phiếu.</div>
<div class="example"><div class="ex-h">Ví dụ 3.1</div>
<p>(a) Bạn có 1.000 cổ phiếu giá 33. Công ty trả cổ tức bằng cổ phiếu 10%. (b) Cổ phiếu giá 90 chia tách 2-for-1. (c) Cổ phiếu giá 60 chia tách 3-for-2. (d) Công ty có 200 triệu cổ phiếu giá 0,80 gộp 1-for-10. Tính giá và số cổ phiếu sau sự kiện.</p>
<details><summary>Xem lời giải</summary><p>(a) 1.100 cổ phiếu, giá lý thuyết 33 / 1,1 = <b>30</b>; tài sản 1.000 × 33 = 1.100 × 30 = <b>33.000</b>, không đổi.<br>
(b) Giá 90 / 2 = <b>45</b>; số cổ phiếu gấp đôi.<br>
(c) Giá 60 / 1,5 = <b>40</b>; số cổ phiếu tăng 50%.<br>
(d) 200 / 10 = <b>20 triệu</b> cổ phiếu, giá 0,80 × 10 = <b>8,00</b>.</p></details></div>
<table class="plain"><thead><tr><th>Chỉ tiêu</th><th>Stock dividend, split</th><th>Reverse split</th><th>Cổ tức tiền mặt</th></tr></thead><tbody>
<tr><td>Số cổ phiếu</td><td>Tăng</td><td>Giảm</td><td>Không đổi</td></tr>
<tr><td>Giá mỗi cổ phiếu</td><td>Giảm theo tỷ lệ</td><td>Tăng theo tỷ lệ</td><td>Giảm khoảng bằng cổ tức</td></tr>
<tr><td>EPS, BVPS</td><td>Giảm theo tỷ lệ</td><td>Tăng theo tỷ lệ</td><td>EPS không đổi; BVPS giảm</td></tr>
<tr><td>Vốn hóa, tài sản cổ đông</td><td>Không đổi</td><td>Không đổi</td><td>Vốn hóa giảm, cổ đông nhận tiền: tổng không đổi</td></tr>
<tr><td>Tỷ lệ sở hữu</td><td>Không đổi</td><td>Không đổi</td><td>Không đổi</td></tr>
<tr><td>Tiền ra khỏi công ty</td><td>Không</td><td>Không</td><td>Có</td></tr>
</tbody></table>
<h4>Vì sao làm?</h4>
<ul>
<li><b>Split, stock dividend:</b> đưa giá về "khoảng giao dịch" dễ mua hơn cho nhà đầu tư nhỏ (nhất là nơi giao dịch theo lô), có thể tăng thanh khoản; giữ lại tiền mặt mà vẫn "chia" gì đó cho cổ đông. Nghiên cứu cho thấy split thường đi sau giai đoạn tăng giá và mang tín hiệu tích cực, nhưng bản thân nó không tạo giá trị.</li>
<li><b>Reverse split:</b> nâng giá lên trên mức tối thiểu để giữ niêm yết, tránh hình ảnh "cổ phiếu xu", giúp quỹ tổ chức được phép mua. Thường gắn với công ty gặp khó khăn.</li>
</ul>
<p class="warn"><b>Bẫy:</b> "cổ tức bằng cổ phiếu là thu nhập" là sai. Bạn có nhiều cổ phiếu hơn, nhưng mỗi cổ phiếu đáng giá ít hơn đúng bằng phần đó. Khi tính lợi suất qua một đợt chia tách, phải điều chỉnh số cổ phiếu (xem phần 6).</p>`,
    },
    {
      title: '4. Mua lại cổ phiếu (share repurchase)',
      minutes: 16,
      html: `
<p>${t('buyback', 'Mua lại cổ phiếu (share repurchase, buyback)')} là cách thứ hai để trả tiền cho cổ đông. Cổ phiếu mua lại thường trở thành ${t('treasury', 'cổ phiếu quỹ (treasury shares)')}: không có quyền biểu quyết, không nhận cổ tức, không tính vào số lưu hành.</p>
<h4>Bốn cách mua lại</h4>
<table class="plain"><thead><tr><th>Cách</th><th>Đặc điểm</th></tr></thead><tbody>
<tr><td>${t('openmkt', 'Mua trên thị trường (open market)')}</td><td>Phổ biến nhất; linh hoạt về thời điểm và khối lượng; chi phí thấp</td></tr>
<tr><td>${t('tender', 'Chào mua giá cố định (fixed-price tender offer)')}</td><td>Mua một số lượng định trước ở một giá cố định, thường cao hơn giá thị trường; nhanh</td></tr>
<tr><td>${t('dutch', 'Đấu giá kiểu Hà Lan (Dutch auction tender offer)')}</td><td>Công ty đưa khoảng giá; cổ đông đăng ký giá và số lượng muốn bán; công ty chọn <b>giá thấp nhất</b> đủ để mua được số lượng mục tiêu và trả giá đó cho mọi người bán ở mức giá đó hoặc thấp hơn</td></tr>
<tr><td>${t('direct', 'Thỏa thuận trực tiếp (direct negotiation)')}</td><td>Mua một khối lớn từ một cổ đông cụ thể, đôi khi với giá cao hơn thị trường (rủi ro bất công với cổ đông khác)</td></tr>
</tbody></table>
<h4>Tác động lên EPS</h4>
<div class="key">Mua lại bằng nợ (hoặc tiền mặt) làm EPS <b>tăng</b> nếu chi phí sau thuế của nguồn tiền <b>thấp hơn</b> ${t('ey', 'lợi suất lợi nhuận (earnings yield = EPS / giá)')}, <b>giảm</b> nếu cao hơn, <b>không đổi</b> nếu bằng.</div>
<div class="example"><div class="ex-h">Ví dụ 4.1</div>
<p>Công ty có lợi nhuận ròng 10 triệu USD, 5 triệu cổ phiếu (EPS = 2,00), giá 40 (earnings yield = 5%). Công ty vay 20 triệu để mua lại 500.000 cổ phiếu ở giá 40. Tính EPS mới nếu chi phí nợ sau thuế là (a) 4%, (b) 5%, (c) 6%.</p>
<details><summary>Xem lời giải</summary>
<p>Số cổ phiếu còn lại = 4,5 triệu.<br>
(a) Lợi nhuận = 10 - 4% × 20 = 9,2 triệu → EPS = 9,2 / 4,5 = <b>2,0444</b> (tăng).<br>
(b) 10 - 1,0 = 9,0 → EPS = <b>2,0000</b> (không đổi).<br>
(c) 10 - 1,2 = 8,8 → EPS = <b>1,9556</b> (giảm).</p>
<p>EPS tăng không có nghĩa giá trị tăng: công ty đã vay thêm nợ nên rủi ro cho cổ đông cũng tăng.</p></details></div>
<h4>Tác động lên giá trị sổ sách mỗi cổ phiếu (BVPS)</h4>
<p>Mua lại ở giá <b>cao hơn</b> BVPS làm BVPS <b>giảm</b>; mua ở giá <b>thấp hơn</b> BVPS làm BVPS <b>tăng</b>.</p>
<div class="example"><div class="ex-h">Ví dụ 4.2</div>
<p>Vốn chủ sở hữu 100 triệu, 5 triệu cổ phiếu (BVPS = 20). Công ty dùng 20 triệu mua lại cổ phiếu ở giá (a) 40, (b) 15. BVPS mới?</p>
<details><summary>Xem lời giải</summary><p>(a) Mua 500.000 cổ phiếu: (100 - 20) / 4,5 = <b>17,78</b> (giảm).<br>
(b) Mua 1,333 triệu cổ phiếu: (100 - 20) / 3,667 = <b>21,82</b> (tăng).</p></details></div>
<h4>Mua lại và cổ tức tiền mặt: tương đương về tài sản</h4>
<div class="example"><div class="ex-h">Ví dụ 4.3</div>
<p>Công ty ở ví dụ 4.1 có 20 triệu tiền mặt dư (giá 40, 5 triệu cổ phiếu). Bạn nắm 100 cổ phiếu. So sánh tài sản của bạn nếu công ty (a) trả cổ tức 4/cổ phiếu, (b) mua lại cổ phiếu ở giá thị trường và bạn không bán. Bỏ qua thuế và tín hiệu.</p>
<details><summary>Xem lời giải</summary><p>(a) Giá giảm còn 40 - 4 = 36; tài sản = 100 × 36 + 400 tiền mặt = <b>4.000</b>.<br>
(b) Giá trị công ty giảm 20 triệu nhưng số cổ phiếu cũng giảm tương ứng, giá vẫn 40; tài sản = 100 × 40 = <b>4.000</b>. Tỷ lệ sở hữu của bạn tăng nhẹ.</p></details></div>
<h4>Vì sao công ty mua lại thay vì trả cổ tức?</h4>
<ul>
<li><b>Linh hoạt:</b> không tạo kỳ vọng phải lặp lại như cổ tức thường kỳ.</li>
<li><b>Tín hiệu:</b> ban điều hành cho rằng cổ phiếu đang bị định giá thấp.</li>
<li><b>Bù pha loãng</b> từ quyền chọn cổ phiếu của nhân viên.</li>
<li><b>Thuế:</b> ở nhiều nước, cổ đông không bán thì chưa chịu thuế; cổ đông chọn bán hay không.</li>
<li><b>Thay đổi cấu trúc vốn:</b> vay để mua lại làm tăng tỷ lệ nợ (CF-06).</li>
</ul>
<p class="warn"><b>Bẫy:</b> công ty công bố chương trình mua lại không bắt buộc phải mua hết; còn cổ tức đã công bố là nghĩa vụ phải trả.</p>`,
    },
    {
      title: '5. Trình tự chi trả cổ tức',
      minutes: 10,
      html: `
${timeline(3, [{ t: 0, label: 'Công bố', up: true }, { t: 1, label: 'Ex-date', up: false, cls: 'pv' }, { t: 2, label: 'Chốt danh sách', up: true }, { t: 3, label: 'Thanh toán', up: false }], 'Bốn mốc của một lần chi trả cổ tức (khoảng cách không theo tỷ lệ).')}
<table class="plain"><thead><tr><th>Mốc</th><th>Ý nghĩa</th></tr></thead><tbody>
<tr><td>${t('declaration', 'Ngày công bố (declaration date)')}</td><td>HĐQT công bố số tiền, ngày chốt, ngày thanh toán. Từ đây cổ tức thành nợ phải trả của công ty</td></tr>
<tr><td>${t('exdate', 'Ngày giao dịch không hưởng quyền (ex-dividend date)')}</td><td>Người mua từ ngày này trở đi <b>không</b> được nhận cổ tức đợt này. Giá mở cửa thường giảm khoảng bằng cổ tức</td></tr>
<tr><td>${t('holderrec', 'Ngày chốt danh sách (holder-of-record date)')}</td><td>Cổ đông có tên trong sổ vào ngày này được nhận cổ tức</td></tr>
<tr><td>${t('paydate', 'Ngày thanh toán (payment date)')}</td><td>Tiền được chuyển cho cổ đông</td></tr>
</tbody></table>
<div class="key">Ngày giao dịch không hưởng quyền được xác định từ ngày chốt và <b>chu kỳ thanh toán</b>: mua ngày T thì T + 2 (hoặc T + 1) mới có tên trong sổ. Với T + 2 (Việt Nam), ex-date là <b>1 ngày làm việc trước</b> ngày chốt. Với T + 1 (Mỹ từ tháng 5/2024), ex-date <b>trùng</b> ngày chốt. Muốn nhận cổ tức, phải mua <b>trước</b> ex-date.</div>
<div class="example"><div class="ex-h">Ví dụ 5.1</div>
<p>Công ty Việt Nam (thanh toán T + 2) công bố thứ Hai 2/3/2026: cổ tức 800 đồng/cổ phiếu, ngày chốt thứ Sáu 20/3, thanh toán thứ Sáu 10/4. Giá đóng cửa ngày trước ex-date là 40.000 đồng. (a) Ex-date là ngày nào? (b) Giá tham chiếu ngày ex-date? (c) Bạn mua thứ Năm 19/3 có được nhận cổ tức không?</p>
<details><summary>Xem lời giải</summary><p>(a) 1 ngày làm việc trước ngày chốt: <b>thứ Năm 19/3/2026</b>.<br>
(b) 40.000 - 800 = <b>39.200 đồng</b> (sở điều chỉnh giá tham chiếu).<br>
(c) <b>Không</b>. Mua 19/3 thì 23/3 cổ phiếu mới về tài khoản, sau ngày chốt 20/3. Phải mua chậm nhất thứ Tư 18/3.</p></details></div>
<p class="tip"><b>Không có bữa trưa miễn phí:</b> mua ngay trước ex-date để "ăn cổ tức" không tạo lợi nhuận, vì giá giảm khoảng bằng cổ tức vào ngày ex-date, và cổ tức còn bị đánh thuế (Việt Nam: 5% thu nhập cá nhân).</p>`,
    },
    {
      title: '6. Tính price return và total return',
      minutes: 20,
      html: `
<h4>Một kỳ</h4>
<div class="formula">Price return = ${frac('P<sub>1</sub> - P<sub>0</sub>', 'P<sub>0</sub>')} &nbsp;&nbsp;&nbsp; Total return = ${frac('P<sub>1</sub> - P<sub>0</sub> + D<sub>1</sub>', 'P<sub>0</sub>')} = price return + ${frac('D<sub>1</sub>', 'P<sub>0</sub>')}</div>
<div class="example"><div class="ex-h">Ví dụ 6.1</div>
<p>Mua cổ phiếu giá 50, nhận cổ tức 1,50 trong năm, cuối năm giá 54. Tính price return, dividend yield, total return.</p>
<details><summary>Xem lời giải</summary><p>Price return = 4 / 50 = <b>8%</b>; dividend yield = 1,5 / 50 = <b>3%</b>; total return = <b>11%</b>.</p></details></div>
<h4>Có chia tách cổ phiếu trong kỳ</h4>
<p>Phải so sánh <b>giá trị khoản đầu tư</b>, không so sánh giá mỗi cổ phiếu trước và sau chia tách.</p>
<div class="example"><div class="ex-h">Ví dụ 6.2</div>
<p>Mua 100 cổ phiếu giá 80. Công ty chia tách 2-for-1, sau đó trả cổ tức 0,50 mỗi cổ phiếu mới. Cuối năm giá 44. Total return?</p>
<details><summary>Xem lời giải</summary><p>Sau chia tách có 200 cổ phiếu. Giá trị cuối = 200 × 44 + 200 × 0,50 = 8.900. Total return = 8.900 / 8.000 - 1 = <b>11,25%</b>. Nếu quên chia tách: (44 - 80 + 0,5) / 80 = -44,38%, sai hoàn toàn.</p></details></div>
<h4>Nhiều kỳ: ghép lãi và tái đầu tư cổ tức</h4>
<p>Total return nhiều kỳ giả định cổ tức được <b>tái đầu tư</b> vào chính cổ phiếu đó. Lợi suất tích lũy là tích của (1 + R) từng kỳ; lợi suất bình quân năm là trung bình nhân.</p>
<div class="formula">1 + R<sub>tích lũy</sub> = (1 + R<sub>1</sub>)(1 + R<sub>2</sub>)...(1 + R<sub>n</sub>) &nbsp;&nbsp;&nbsp; R<sub>năm</sub> = (1 + R<sub>tích lũy</sub>)<sup>1/n</sup> - 1</div>
<div class="example"><div class="ex-h">Ví dụ 6.3</div>
<p>Giá cổ phiếu cuối các năm 0 đến 3: 50; 54; 49; 58. Cổ tức nhận cuối năm 1, 2, 3: 1,50; 1,60; 1,70. Tính total return từng năm, total return tích lũy và bình quân năm, so với price return.</p>
<details><summary>Xem lời giải</summary>
<table class="plain"><thead><tr><th>Năm</th><th>Price return</th><th>Total return</th></tr></thead><tbody>
<tr><td>1</td><td>(54 - 50) / 50 = 8,00%</td><td>(54 - 50 + 1,5) / 50 = 11,00%</td></tr>
<tr><td>2</td><td>(49 - 54) / 54 = -9,26%</td><td>(49 - 54 + 1,6) / 54 = -6,30%</td></tr>
<tr><td>3</td><td>(58 - 49) / 49 = 18,37%</td><td>(58 - 49 + 1,7) / 49 = 21,84%</td></tr>
</tbody></table>
<p>Total return tích lũy = 1,11 × 0,93704 × 1,21837 - 1 = <b>26,72%</b>; bình quân năm = 1,26724<sup>1/3</sup> - 1 = <b>8,21%</b>.<br>
Price return tích lũy = 58 / 50 - 1 = <b>16,00%</b>; bình quân năm = <b>5,07%</b>.</p>
<p>10.000 USD đầu tư ban đầu (tái đầu tư cổ tức) thành <b>12.672,37</b>. Cổ tức chỉ khoảng 3%/năm nhưng sau 3 năm tạo khoảng cách hơn 10 điểm phần trăm nhờ ghép lãi.</p></details></div>
${keys([
  ['Xóa TVM', '[2ND] [FV]', '0.0000'],
  ['Số năm', '3 [N]', 'N = 3.0000'],
  ['Giá trị đầu', '10000 [+/-] [PV]', 'PV = -10,000.0000'],
  ['Không có dòng tiền giữa kỳ', '0 [PMT]', 'PMT = 0.0000'],
  ['Giá trị cuối', '12672.37 [FV]', 'FV = 12,672.3700'],
  ['Lợi suất bình quân năm', '[CPT] [I/Y]', 'I/Y = 8.2146'],
])}
<h4>Cổ phiếu nước ngoài: thêm lợi suất tỷ giá</h4>
<div class="formula">1 + R<sub>nội tệ nhà đầu tư</sub> = (1 + R<sub>nội địa của cổ phiếu</sub>) × (1 + R<sub>ngoại tệ</sub>)</div>
<div class="example"><div class="ex-h">Ví dụ 6.4</div>
<p>Nhà đầu tư Mỹ mua cổ phiếu Đức giá 80 EUR, nhận cổ tức 2 EUR, cuối năm giá 86 EUR. Tỷ giá đi từ 1,10 xuống 1,05 USD/EUR. Total return tính bằng USD?</p>
<details><summary>Xem lời giải</summary><p>Lợi suất bằng EUR = (86 - 80 + 2) / 80 = 10%. Lợi suất của EUR = 1,05 / 1,10 - 1 = -4,55%. Lợi suất bằng USD = 1,10 × (1 - 0,04545) - 1 = <b>5,00%</b>. Cộng đơn giản 10% - 4,55% = 5,45% chỉ là xấp xỉ, bỏ qua phần tương tác.</p></details></div>
<p class="warn"><b>Bẫy:</b> (1) Dùng giá <b>đầu kỳ</b> làm mẫu số cho cả cổ tức. (2) Total return nhiều kỳ phải nhân, không cộng. (3) Khi có chia tách, theo dõi giá trị khoản đầu tư hoặc dùng giá đã điều chỉnh.</p>`,
    },
    {
      title: '7. Tóm tắt và bẫy thường gặp',
      minutes: 8,
      html: `
<table class="plain"><thead><tr><th>Tình huống</th><th>Nhớ</th></tr></thead><tbody>
<tr><td>Payout, dividend yield</td><td>DPS / EPS; DPS / giá</td></tr>
<tr><td>Cổ tức % ở Việt Nam</td><td>Tính trên mệnh giá 10.000 đồng, không phải trên giá thị trường</td></tr>
<tr><td>Cổ tức thường kỳ và đặc biệt</td><td>Thường kỳ "dính", ngại cắt; đặc biệt trả một lần, không tạo kỳ vọng</td></tr>
<tr><td>Stock dividend, split, reverse split</td><td>Không đổi giá trị công ty, tài sản và tỷ lệ sở hữu; giá điều chỉnh theo tỷ lệ</td></tr>
<tr><td>3-for-2</td><td>Giá chia 1,5; số cổ phiếu nhân 1,5</td></tr>
<tr><td>Reverse split</td><td>Nâng giá lên trên ngưỡng niêm yết; thường ở công ty khó khăn</td></tr>
<tr><td>Mua lại và EPS</td><td>EPS tăng nếu chi phí vốn sau thuế &lt; earnings yield</td></tr>
<tr><td>Mua lại và BVPS</td><td>Giá mua &gt; BVPS → BVPS giảm</td></tr>
<tr><td>Dutch auction</td><td>Giá thấp nhất đủ mua được số lượng mục tiêu, trả chung cho mọi người bán</td></tr>
<tr><td>Ex-date</td><td>Mua từ ex-date không nhận cổ tức; T + 2: trước ngày chốt 1 ngày làm việc; T + 1: trùng ngày chốt</td></tr>
<tr><td>Total return</td><td>(P<sub>1</sub> - P<sub>0</sub> + D) / P<sub>0</sub>; nhiều kỳ: nhân các (1 + R)</td></tr>
<tr><td>Tỷ giá</td><td>(1 + R nội địa)(1 + R ngoại tệ) - 1, không cộng</td></tr>
</tbody></table>
<p>Tiếp theo: tab <b>Luyện tập</b> 10 câu. Module sau (EQ-05) bắt đầu phần định giá: phân biệt giá và giá trị.</p>`,
    },
  ];

  const glossary = {
    tr: ['Total return', 'Tổng lợi suất', 'Lợi suất gồm cả thay đổi giá và thu nhập (cổ tức), giả định tái đầu tư khi tính nhiều kỳ.'],
    pr: ['Price return', 'Lợi suất giá', 'Lợi suất chỉ từ thay đổi giá, không tính cổ tức.'],
    regular: ['Regular cash dividend', 'Cổ tức thường kỳ', 'Cổ tức tiền mặt trả đều đặn theo kỳ.'],
    special: ['Special (extra) dividend', 'Cổ tức đặc biệt', 'Cổ tức trả một lần ngoài cổ tức thường kỳ.'],
    liquidating: ['Liquidating dividend', 'Cổ tức thanh lý', 'Khoản trả lại vốn cho cổ đông khi công ty thu hẹp, bán mảng kinh doanh hoặc giải thể.'],
    payout: ['Payout ratio', 'Tỷ lệ chi trả', 'Cổ tức mỗi cổ phiếu chia EPS.'],
    dy: ['Dividend yield', 'Lợi suất cổ tức', 'Cổ tức mỗi cổ phiếu chia giá cổ phiếu.'],
    stockdiv: ['Stock dividend', 'Cổ tức bằng cổ phiếu', 'Phát hành thêm cổ phiếu cho cổ đông theo tỷ lệ, không trả tiền.'],
    split: ['Stock split', 'Chia tách cổ phiếu', 'Tách mỗi cổ phiếu thành nhiều cổ phiếu; giá giảm theo tỷ lệ.'],
    reverse: ['Reverse stock split', 'Gộp cổ phiếu', 'Gộp nhiều cổ phiếu thành một; giá tăng theo tỷ lệ.'],
    buyback: ['Share repurchase (buyback)', 'Mua lại cổ phiếu', 'Công ty dùng tiền mua lại cổ phiếu của chính mình từ cổ đông.'],
    treasury: ['Treasury shares', 'Cổ phiếu quỹ', 'Cổ phiếu công ty đã mua lại; không biểu quyết, không nhận cổ tức.'],
    openmkt: ['Open market repurchase', 'Mua lại trên thị trường', 'Mua lại cổ phiếu dần trên sàn theo giá thị trường.'],
    tender: ['Fixed-price tender offer', 'Chào mua giá cố định', 'Đề nghị mua một số lượng cổ phiếu ở một giá cố định trong thời hạn nhất định.'],
    dutch: ['Dutch auction', 'Đấu giá kiểu Hà Lan', 'Cổ đông đăng ký giá bán; công ty chọn giá thấp nhất đủ mua số lượng mục tiêu và trả giá đó cho mọi người bán được chọn.'],
    direct: ['Direct negotiation', 'Thỏa thuận trực tiếp', 'Mua lại một khối cổ phiếu lớn từ một cổ đông cụ thể.'],
    ey: ['Earnings yield', 'Lợi suất lợi nhuận', 'EPS chia giá cổ phiếu; nghịch đảo của P/E.'],
    declaration: ['Declaration date', 'Ngày công bố', 'Ngày HĐQT công bố chi trả cổ tức; cổ tức trở thành nợ phải trả.'],
    exdate: ['Ex-dividend date', 'Ngày giao dịch không hưởng quyền', 'Từ ngày này người mua không được nhận cổ tức đợt đó.'],
    holderrec: ['Holder-of-record date', 'Ngày chốt danh sách', 'Ngày xác định cổ đông có tên trong sổ được nhận cổ tức.'],
    paydate: ['Payment date', 'Ngày thanh toán', 'Ngày công ty chuyển tiền cổ tức cho cổ đông.'],
  };

  const practice = [
    { q: 'Cổ phiếu đang giao dịch ở giá 60 chia tách 3-for-2. Giá lý thuyết sau chia tách là:', choices: ['40', '30', '90'], answer: 0, explain: '3-for-2: 2 cổ phiếu thành 3, số cổ phiếu nhân 1,5 nên giá chia 1,5: 60 / 1,5 = 40. Đáp án B là chia tách 2-for-1; đáp án C nhân thay vì chia.' },
    { q: 'Công ty trả cổ tức bằng cổ phiếu 10%. Bỏ qua thuế và tín hiệu, tài sản của một cổ đông nắm 1.000 cổ phiếu:', choices: ['Tăng 10% vì có thêm 100 cổ phiếu', 'Giảm vì giá cổ phiếu giảm', 'Không đổi'], answer: 2, explain: 'Số cổ phiếu tăng 10% nhưng giá giảm theo tỷ lệ (chia 1,1), giá trị công ty và tỷ lệ sở hữu không đổi. A chỉ nhìn số cổ phiếu; B chỉ nhìn giá.' },
    { q: 'Công ty có lợi nhuận ròng 10 triệu, 5 triệu cổ phiếu, giá 40. Công ty vay 20 triệu với chi phí sau thuế 6% để mua lại cổ phiếu ở giá 40. EPS sau mua lại gần nhất với:', choices: ['2,0000', '1,9556', '2,2222'], answer: 1, explain: 'Mua được 0,5 triệu cổ phiếu; lợi nhuận = 10 - 6% x 20 = 8,8; EPS = 8,8 / 4,5 = 1,9556. Chi phí vay 6% cao hơn earnings yield 5% nên EPS giảm. Đáp án C quên trừ lãi vay.' },
    { q: 'Thị trường thanh toán T + 2, ngày chốt danh sách là thứ Sáu. Nhà đầu tư mua vào thứ Năm (ngày giao dịch không hưởng quyền):', choices: ['Được nhận cổ tức vì mua trước ngày chốt', 'Không được nhận cổ tức', 'Được nhận một nửa cổ tức'], answer: 1, explain: 'Mua ngày ex-date thì cổ phiếu về sau ngày chốt, nên người bán vẫn có tên trong sổ và nhận cổ tức. Phải mua trước ex-date. Không có chuyện chia đôi cổ tức.' },
    { q: 'Mua cổ phiếu giá 25, nhận cổ tức 0,75 trong năm, cuối năm bán giá 27. Total return là:', choices: ['11,0%', '8,0%', '3,0%'], answer: 0, explain: '(27 - 25 + 0,75) / 25 = 11%. Đáp án B là price return (bỏ cổ tức); đáp án C chỉ là dividend yield.' },
    { q: 'Mua 100 cổ phiếu giá 80. Công ty chia tách 2-for-1 rồi trả cổ tức 0,50 mỗi cổ phiếu mới. Cuối năm giá 44. Total return là:', choices: ['-44,38%', '10,00%', '11,25%'], answer: 2, explain: '200 cổ phiếu x 44 + 200 x 0,50 = 8.900; 8.900 / 8.000 - 1 = 11,25%. Đáp án A quên điều chỉnh chia tách; đáp án B quên cổ tức.' },
    { q: 'Nhà đầu tư Mỹ có lợi suất 10% bằng EUR trên cổ phiếu Đức. Trong cùng kỳ, EUR giảm giá 4,545% so với USD. Lợi suất bằng USD gần nhất với:', choices: ['14,55%', '5,00%', '5,45%'], answer: 1, explain: '1,10 x (1 - 0,04545) - 1 = 5,00%. Đáp án C cộng đơn giản 10% - 4,545%; đáp án A cộng ngược dấu tỷ giá.' },
    { q: 'Lý do phổ biến nhất để một công ty gộp cổ phiếu (reverse split) là:', choices: ['Nâng giá cổ phiếu lên trên mức tối thiểu để duy trì niêm yết', 'Tăng giá trị thị trường của công ty', 'Trả tiền mặt cho cổ đông mà không bị đánh thuế'], answer: 0, explain: 'Gộp cổ phiếu chỉ đổi số cổ phiếu và giá theo tỷ lệ, không tạo giá trị (B sai) và không có tiền ra khỏi công ty (C sai). Mục đích thường là đáp ứng ngưỡng giá niêm yết hoặc tránh hình ảnh cổ phiếu xu.' },
    { q: 'Công ty có BVPS 20 mua lại cổ phiếu ở giá thị trường 40. Sau mua lại, BVPS sẽ:', choices: ['Tăng', 'Không đổi', 'Giảm'], answer: 2, explain: 'Mua lại ở giá cao hơn BVPS làm vốn chủ sở hữu giảm nhiều hơn tỷ lệ giảm số cổ phiếu, nên BVPS giảm (ví dụ 100 - 20 = 80 triệu chia 4,5 triệu cổ phiếu = 17,78). BVPS chỉ tăng nếu mua dưới BVPS.' },
    { q: 'Trong đợt mua lại theo kiểu đấu giá Hà Lan (Dutch auction), công ty:', choices: ['Chọn mức giá thấp nhất đủ để mua được số lượng mục tiêu và trả giá đó cho mọi cổ đông bán được chấp nhận', 'Mua dần trên thị trường theo giá khớp lệnh hằng ngày', 'Trả mỗi cổ đông đúng mức giá họ đã đăng ký'], answer: 0, explain: 'Dutch auction: một mức giá chung (giá thanh toán) là giá thấp nhất cho phép mua đủ số lượng. B mô tả mua trên thị trường; C sai vì mọi người bán được chấp nhận nhận cùng một giá.' },
  ];

  window.LESSONS['EQ-04'] = {
    moduleId: 'EQ-04',
    calculator: 'BA II Plus',
    warmup: [
      'Ôn QM-01: holding period return của cổ phiếu mua 20, bán 22, nhận cổ tức 1 là bao nhiêu?',
      'Ôn EQ-03: ngày chốt danh sách quyết định điều gì?',
      'Một cổ phiếu bạn biết vừa chia cổ tức bằng cổ phiếu hoặc thưởng cổ phiếu: giá tham chiếu hôm đó thay đổi thế nào?',
    ],
    sections,
    glossary,
    practice,
    widgets: {},
    slides: [],
    wrapup: [
      'So sánh cổ tức tiền mặt, mua lại cổ phiếu và chia tách theo 4 tiêu chí: tiền ra khỏi công ty, số cổ phiếu, giá, tài sản cổ đông.',
      'Tự đặt số liệu 3 năm và tính total return tích lũy, bình quân năm bằng BA II Plus.',
      'Còn câu hỏi nào chưa rõ? Ghi lại để hỏi.',
    ],
  };
}());
