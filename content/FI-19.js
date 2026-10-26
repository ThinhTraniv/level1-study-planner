// Bài giảng FI-19 - Mortgage-Backed Security (MBS) Instrument and Market Features (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t, frac, keys } = window.CFAH;

  const sections = [
    {
      title: '1. Bức tranh lớn',
      minutes: 4,
      html: `
<p>Khoản vay mua nhà là loại tài sản được chứng khoán hóa nhiều nhất thế giới. Chứng khoán đảm bảo bằng khoản vay thế chấp nhà ở gọi là ${t('rmbs', 'RMBS (residential mortgage-backed securities)')}; bằng khoản vay bất động sản thương mại gọi là ${t('cmbs', 'CMBS')}.</p>
<div class="key">Điều làm MBS khác hẳn trái phiếu thông thường: người vay mua nhà có <b>quyền trả nợ trước hạn bất cứ lúc nào</b>. Nhà đầu tư MBS thực chất đã <b>bán một quyền chọn mua</b> cho người vay. Vì vậy dòng tiền MBS không chắc chắn về <b>thời điểm</b>, và đó là ${t('prepay', 'rủi ro trả trước (prepayment risk)')}.</div>
<p>Module có 4 LOS:</p>
<ol>
  <li>Đặc điểm cơ bản của khoản vay thế chấp nhà ở được chứng khoán hóa. LOS 2 - phần 2.</li>
  <li>Chứng khoán chuyển tiếp (pass-through): dòng tiền, WAC, WAM. LOS 3 - phần 3.</li>
  <li>Rủi ro trả trước: đo bằng SMM, CPR, PSA; rủi ro co ngắn và kéo dài. LOS 1 - phần 4.</li>
  <li>CMO và phân tầng theo thời gian (sequential, PAC/support). LOS 1 và LOS 3 - phần 5.</li>
  <li>CMBS. LOS 4 - phần 6.</li>
</ol>
<p class="tip">FI-18 dùng phân tầng để chia <b>rủi ro tín dụng</b>. Module này dùng phân tầng để chia <b>rủi ro trả trước</b> - gọi là phân tầng theo thời gian (time tranching).</p>`,
    },
    {
      title: '2. Khoản vay thế chấp nhà ở',
      minutes: 12,
      html: `
<p>Một ${t('mortgage', 'khoản vay thế chấp (mortgage)')} là khoản vay được bảo đảm bằng chính bất động sản nhà ở. Nếu người vay không trả, bên cho vay có quyền ${t('foreclose', 'tịch biên (foreclosure)')} và bán nhà để thu hồi nợ. Các đặc điểm cần nắm:</p>
<table class="plain"><thead><tr><th>Đặc điểm</th><th>Các lựa chọn</th></tr></thead><tbody>
<tr><td>Kỳ hạn</td><td>Ở Mỹ phổ biến 15 đến 30 năm; một số nước dài hơn</td></tr>
<tr><td>Lãi suất</td><td><b>Cố định</b> (fixed-rate); <b>thả nổi</b> (${t('arm', 'adjustable-rate, ARM')}: lãi = chỉ số tham chiếu + biên, có trần điều chỉnh); <b>hybrid</b> (cố định vài năm đầu rồi thả nổi); <b>convertible</b> (được đổi giữa cố định và thả nổi)</td></tr>
<tr><td>Trả gốc</td><td><b>Trả dần toàn bộ</b> (fully amortizing); <b>trả dần một phần</b>, phần còn lại trả một lần cuối kỳ (${t('balloon', 'balloon payment')}); <b>chỉ trả lãi</b> (interest-only) trong một thời gian</td></tr>
<tr><td>Trả trước</td><td>Người vay được trả trước một phần hoặc toàn bộ; một số khoản vay có ${t('ppenalty', 'phạt trả trước (prepayment penalty)')}</td></tr>
<tr><td>Quyền của bên cho vay khi vỡ nợ</td><td>${t('recourse', 'Có truy đòi (recourse)')}: nếu bán nhà không đủ trả nợ, bên cho vay đòi phần thiếu từ tài sản khác của người vay. ${t('nonrecourse', 'Không truy đòi (nonrecourse)')}: chỉ được lấy căn nhà</td></tr>
</tbody></table>
<p class="warn"><b>Vì sao recourse quan trọng?</b> Với khoản vay nonrecourse, khi giá nhà giảm xuống dưới dư nợ, người vay có động lực "bỏ nhà" (strategic default) dù vẫn đủ khả năng trả. Khoản vay nonrecourse vì thế rủi ro tín dụng cao hơn cho bên cho vay.</p>
<h4>Chỉ tiêu chất lượng tín dụng</h4>
<p>${t('ltv', 'Tỷ lệ cho vay trên giá trị (LTV)')} = dư nợ / giá trị nhà: LTV càng thấp, người vay càng có nhiều vốn tự có trong nhà, rủi ro càng thấp. Thêm vào đó là tỷ lệ nợ trên thu nhập (DTI) và điểm tín dụng. Khoản vay <b>prime</b> có chất lượng cao; <b>subprime</b> có chất lượng thấp.</p>
<div class="example"><div class="ex-h">Ví dụ 2.1 - Khoản vay thế chấp trả dần</div>
<p>Vay 300.000 USD mua nhà, 30 năm, lãi suất cố định 6%/năm, trả hằng tháng. Tìm khoản trả hằng tháng, phần lãi và phần gốc của tháng đầu.</p>
<details><summary>Xem lời giải</summary>
${keys([
  ['Xóa TVM (đã đặt P/Y = 1)', '[2ND] [FV]', '0'],
  ['Số kỳ: 30 × 12', '360 [N]', 'N = 360'],
  ['Lãi suất tháng', '0.5 [I/Y]', 'I/Y = 0.5'],
  ['Số tiền vay', '300000 [PV]', 'PV = 300,000'],
  ['Trả hết', '0 [FV]', 'FV = 0'],
  ['Tính', '[CPT] [PMT]', 'PMT = -1,798.65'],
])}
<p>Khoản trả = <b>1.798,65 USD/tháng</b>. Tháng đầu: lãi = 0,5% × 300.000 = 1.500,00; gốc = 1.798,65 - 1.500,00 = <b>298,65</b>; dư nợ còn 299.701,35. Những năm đầu phần lớn khoản trả là lãi. Cả đời khoản vay, tổng lãi là 347.514,57 USD.</p></details></div>
<h4>Agency và non-agency RMBS</h4>
<table class="plain"><thead><tr><th></th><th>${t('agency', 'Agency RMBS')}</th><th>Non-agency RMBS</th></tr></thead><tbody>
<tr><td>Người bảo lãnh</td><td>Cơ quan chính phủ (Ginnie Mae, có bảo lãnh đầy đủ của Chính phủ Mỹ) hoặc doanh nghiệp được chính phủ bảo trợ - GSE (Fannie Mae, Freddie Mac)</td><td>Tổ chức tư nhân phát hành, không có bảo lãnh chính phủ</td></tr>
<tr><td>Khoản vay</td><td>Phải đạt chuẩn (${t('conforming', 'conforming loans')}): giới hạn quy mô, LTV, DTI, hồ sơ</td><td>Khoản vay không đạt chuẩn: quy mô lớn, subprime...</td></tr>
<tr><td>Rủi ro tín dụng</td><td>Rất thấp</td><td>Đáng kể, cần tăng cường tín dụng (subordination, bảo hiểm, thư tín dụng - xem FI-18)</td></tr>
</tbody></table>`,
    },
    {
      title: '3. Chứng khoán chuyển tiếp (mortgage pass-through)',
      minutes: 10,
      html: `
<p>${t('passthru', 'Chứng khoán chuyển tiếp (pass-through)')} là dạng MBS đơn giản nhất: nhà đầu tư sở hữu một tỷ lệ của danh mục khoản vay và nhận <b>đúng tỷ lệ đó</b> của dòng tiền hằng tháng, gồm:</p>
<ul><li>lãi,</li><li>gốc theo lịch,</li><li>gốc trả trước,</li></ul>
<p>sau khi trừ <b>phí servicing</b> và <b>phí bảo lãnh</b> (với agency MBS). Vì thế ${t('ptrate', 'lãi suất chuyển tiếp (pass-through rate)')} luôn <b>thấp hơn</b> lãi suất bình quân của các khoản vay.</p>
<div class="formula">Pass-through rate = lãi suất khoản vay - phí servicing - phí bảo lãnh</div>
<p>Ví dụ: khoản vay 6%, phí servicing 0,25%, phí bảo lãnh 0,25% → pass-through rate = <b>5,5%</b>.</p>
<h4>WAC và WAM</h4>
<p>Danh mục có hàng nghìn khoản vay với lãi suất và kỳ hạn còn lại khác nhau. Hai thước đo tóm tắt, cùng dùng <b>dư nợ</b> làm trọng số:</p>
<ul>
<li>${t('wac', 'Lãi suất bình quân gia quyền (WAC)')}: bình quân lãi suất các khoản vay.</li>
<li>${t('wam', 'Kỳ hạn bình quân gia quyền (WAM)')}: bình quân số tháng còn lại đến đáo hạn.</li>
</ul>
<div class="formula">WAC = Σ ${frac('dư nợ<sub>i</sub>', 'tổng dư nợ')} × lãi suất<sub>i</sub> &nbsp;&nbsp;&nbsp; WAM = Σ ${frac('dư nợ<sub>i</sub>', 'tổng dư nợ')} × số tháng còn lại<sub>i</sub></div>
<div class="example"><div class="ex-h">Ví dụ 3.1</div>
<table class="plain"><thead><tr><th>Khoản vay</th><th>Dư nợ (USD)</th><th>Lãi suất</th><th>Số tháng còn lại</th></tr></thead><tbody>
<tr><td>1</td><td>100.000</td><td>5,5%</td><td>240</td></tr>
<tr><td>2</td><td>250.000</td><td>6,0%</td><td>300</td></tr>
<tr><td>3</td><td>150.000</td><td>6,5%</td><td>180</td></tr>
</tbody></table>
<details><summary>Xem lời giải</summary>
<p>Tổng dư nợ 500.000; trọng số 0,2; 0,5; 0,3.<br>
WAC = 0,2 × 5,5% + 0,5 × 6,0% + 0,3 × 6,5% = <b>6,05%</b>.<br>
WAM = 0,2 × 240 + 0,5 × 300 + 0,3 × 180 = <b>252 tháng</b> (21 năm).<br>
Nếu bình quân đơn giản (không trọng số), bạn được 6,00% và 240 tháng: đáp án bẫy.</p></details></div>
<p class="tip">Kỳ hạn bình quân gia quyền (WAM) là kỳ hạn <b>theo hợp đồng</b>. Thời gian thực tế nhà đầu tư nhận lại gốc ngắn hơn nhiều vì có trả trước; thước đo đó là ${t('wal', 'kỳ hạn bình quân thực tế (weighted average life, WAL)')}, học ở phần 4.</p>`,
    },
    {
      title: '4. Rủi ro trả trước: SMM, CPR, PSA',
      minutes: 14,
      html: `
<p>Người vay trả trước vì: bán nhà, <b>tái cấp vốn khi lãi suất giảm</b> (lý do quan trọng nhất), trả bớt nợ khi có tiền, hoặc vỡ nợ (nhà bị tịch biên, tiền thu về coi như trả trước). Rủi ro trả trước là rủi ro tốc độ trả trước <b>khác với kỳ vọng</b>, theo hai hướng:</p>
<table class="plain"><thead><tr><th></th><th>${t('contraction', 'Rủi ro co ngắn (contraction risk)')}</th><th>${t('extension', 'Rủi ro kéo dài (extension risk)')}</th></tr></thead><tbody>
<tr><td>Khi nào</td><td>Lãi suất <b>giảm</b> → tái cấp vốn → trả trước <b>nhanh hơn</b> kỳ vọng</td><td>Lãi suất <b>tăng</b> → ít ai trả trước → trả trước <b>chậm hơn</b> kỳ vọng</td></tr>
<tr><td>Thời gian nắm giữ</td><td>Ngắn lại</td><td>Dài ra</td></tr>
<tr><td>Thiệt hại</td><td>Nhận lại gốc đúng lúc phải tái đầu tư ở lãi suất thấp; giá MBS tăng ít hơn trái phiếu thường</td><td>Vốn bị "kẹt" ở lãi suất thấp đúng lúc lãi suất thị trường cao; giá giảm mạnh hơn</td></tr>
</tbody></table>
<div class="key">Cả hai hướng đều <b>bất lợi</b> cho nhà đầu tư: lãi suất giảm thì gốc về sớm, lãi suất tăng thì gốc về muộn. Đây là hệ quả của quyền chọn trả trước mà nhà đầu tư đã bán cho người vay (MBS có độ lồi âm - negative convexity).</div>
<h4>Đo tốc độ trả trước</h4>
<ul>
<li>${t('smm', 'SMM (single monthly mortality rate)')}: tỷ lệ dư nợ được trả trước trong một tháng, tính trên dư nợ <b>sau khi trừ gốc theo lịch</b>.</li>
<li>${t('cpr', 'CPR (conditional prepayment rate)')}: SMM quy đổi ra năm.</li>
</ul>
<div class="formula">SMM = 1 - (1 - CPR)<sup>1/12</sup> &nbsp;&nbsp;&nbsp; CPR = 1 - (1 - SMM)<sup>12</sup></div>
<div class="example"><div class="ex-h">Ví dụ 4.1</div>
<p>CPR = 6%. Đầu tháng dư nợ danh mục 100 triệu USD, gốc theo lịch tháng này 0,2 triệu. Gốc trả trước trong tháng?</p>
<details><summary>Xem lời giải</summary><p>SMM = 1 - 0,94<sup>1/12</sup> = <b>0,5143%</b> (không phải 6% / 12 = 0,5%).<br>Trả trước = 0,5143% × (100 - 0,2) = <b>0,513 triệu USD</b>.</p></details></div>
<h4>Chuẩn PSA</h4>
<p>${t('psa', 'Chuẩn PSA (PSA prepayment benchmark)')} giả định khoản vay mới ít trả trước, rồi tăng dần: <b>100 PSA</b> nghĩa là CPR = 0,2% ở tháng 1, tăng 0,2% mỗi tháng đến <b>6% ở tháng 30</b>, sau đó giữ 6%. Tốc độ khác được nói theo bội số: 150 PSA là gấp 1,5 lần.</p>
<div class="formula">CPR<sub>t</sub> = ${frac('PSA', '100')} × 0,2% × min(t, 30)</div>
<table class="plain"><thead><tr><th>Tốc độ</th><th>Tháng</th><th>CPR</th><th>SMM</th></tr></thead><tbody>
<tr><td>100 PSA</td><td>10</td><td>2,0%</td><td>0,1682%</td></tr>
<tr><td>150 PSA</td><td>10</td><td>3,0%</td><td>0,2535%</td></tr>
<tr><td>150 PSA</td><td>40</td><td>9,0%</td><td>0,7828%</td></tr>
<tr><td>200 PSA</td><td>20</td><td>8,0%</td><td>0,6924%</td></tr>
</tbody></table>
<p class="warn"><b>Bẫy:</b> sau tháng 30, CPR <b>không tăng nữa</b>. 150 PSA ở tháng 40 là 1,5 × 6% = 9%, không phải 1,5 × 0,2% × 40 = 12%.</p>
<h4>Kỳ hạn bình quân thực tế (WAL)</h4>
<p>WAL là thời gian bình quân (trọng số theo gốc) đến khi nhận lại gốc. Trả trước càng nhanh, WAL càng ngắn. Với một danh mục 30 năm, lãi suất 6%, mô hình hóa theo PSA: 0 PSA cho WAL 19,31 năm; 100 PSA: 11,36 năm; 165 PSA: 8,68 năm; 300 PSA: 5,74 năm.</p>
<h4>Thử ngay: kéo thanh tốc độ PSA</h4>
<div class="widget" data-widget="psa"></div>`,
    },
    {
      title: '5. CMO: phân tầng theo thời gian',
      minutes: 16,
      html: `
<p>Pass-through buộc mọi nhà đầu tư chịu cùng một rủi ro trả trước. Nhưng ngân hàng thương mại muốn tài sản ngắn hạn, công ty bảo hiểm nhân thọ muốn tài sản dài hạn. ${t('cmo', 'CMO (collateralized mortgage obligation)')} lấy dòng tiền của danh mục pass-through và chia thành nhiều tầng với quy tắc trả gốc khác nhau. Đây là ${t('timetr', 'phân tầng theo thời gian (time tranching)')}.</p>
<div class="key">Mục đích của phân tầng theo thời gian: <b>phân phối lại</b> rủi ro co ngắn và kéo dài giữa các tầng cho phù hợp với nhu cầu của từng nhóm nhà đầu tư. Nó <b>không loại bỏ</b> rủi ro trả trước: tổng rủi ro của danh mục không đổi.</div>
<h4>a) Sequential-pay CMO</h4>
<p>Mọi tầng đều nhận <b>lãi</b> trên dư nợ của mình, nhưng <b>gốc</b> (lịch + trả trước) đổ vào tầng A cho đến khi A trả hết, rồi mới sang B, rồi C.</p>
<div class="example"><div class="ex-h">Ví dụ 5.1 - Ba tầng nối tiếp</div>
<p>Danh mục 300 triệu USD chia thành A 150, B 100, C 50. Gốc danh mục thu về từng năm (triệu USD) theo hai kịch bản:</p>
<table class="plain"><thead><tr><th>Năm</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th></tr></thead><tbody>
<tr><td>Kịch bản cơ sở</td><td>50</td><td>60</td><td>60</td><td>50</td><td>40</td><td>40</td></tr>
<tr><td>Lãi suất giảm, trả trước nhanh</td><td>100</td><td>90</td><td>60</td><td>30</td><td>15</td><td>5</td></tr>
</tbody></table>
<p>Tính kỳ hạn bình quân (WAL, theo năm) của từng tầng trong hai kịch bản.</p>
<details><summary>Xem lời giải</summary>
<p><b>Cơ sở:</b> A nhận 50, 60, 40 (năm 1-3); B nhận 20, 50, 30 (năm 3-5); C nhận 10, 40 (năm 5-6).<br>
WAL<sub>A</sub> = (1 × 50 + 2 × 60 + 3 × 40) / 150 = <b>1,93</b>; WAL<sub>B</sub> = (3 × 20 + 4 × 50 + 5 × 30) / 100 = <b>4,10</b>; WAL<sub>C</sub> = (5 × 10 + 6 × 40) / 50 = <b>5,80</b>.</p>
<p><b>Trả trước nhanh:</b> A nhận 100, 50; B nhận 40, 60; C nhận 30, 15, 5.<br>
WAL<sub>A</sub> = <b>1,33</b>; WAL<sub>B</sub> = <b>2,60</b>; WAL<sub>C</sub> = <b>4,50</b>. Toàn danh mục: 3,30 → 2,28 năm.</p>
<p>Mọi tầng đều ngắn lại, nhưng tầng sau được tầng trước "che" một phần: tầng C vẫn chưa nhận đồng gốc nào trong 3 năm đầu dù trả trước rất nhanh.</p></details></div>
<p class="tip">Tầng đầu (ngắn) được bảo vệ tốt hơn trước <b>rủi ro kéo dài</b> (nó luôn nhận gốc đầu tiên); tầng cuối (dài) được bảo vệ tốt hơn trước <b>rủi ro co ngắn</b> (gốc trả trước phải trả hết tầng trước mới đến lượt nó).</p>
<h4>b) PAC và support tranche</h4>
<p>${t('pac', 'Tầng PAC (planned amortization class)')} có <b>lịch trả gốc định sẵn</b>, được giữ đúng miễn là tốc độ trả trước nằm trong một khoảng gọi là ${t('collar', 'biên PAC (PAC collar)')}, ví dụ 100 đến 300 PSA. ${t('support', 'Tầng hỗ trợ (support, companion tranche)')} hấp thụ phần chênh lệch:</p>
<ul>
<li>Trả trước <b>nhanh hơn</b> lịch: phần gốc dư đổ vào tầng support (support chịu rủi ro co ngắn).</li>
<li>Trả trước <b>chậm hơn</b> lịch: tầng support nhận gốc sau, PAC được ưu tiên trả đủ lịch (support chịu rủi ro kéo dài).</li>
</ul>
<div class="example"><div class="ex-h">Ví dụ 5.2 - Mô phỏng PAC 100-300 PSA</div>
<p>Danh mục 400 triệu, 30 năm, lãi 6%. Lịch PAC là mức gốc <b>nhỏ hơn</b> giữa kịch bản 100 PSA và 300 PSA mỗi tháng. Kết quả mô phỏng:</p>
<table class="plain"><thead><tr><th>Tốc độ thực tế</th><th>50 PSA</th><th>100 PSA</th><th>165 PSA</th><th>300 PSA</th><th>500 PSA</th></tr></thead><tbody>
<tr><td>WAL tầng PAC (261,01 triệu)</td><td>9,43</td><td>7,09</td><td>7,09</td><td>7,09</td><td>4,92</td></tr>
<tr><td>WAL tầng support (138,99 triệu)</td><td>24,11</td><td>19,39</td><td>11,68</td><td>3,20</td><td>1,90</td></tr>
</tbody></table>
<p>Trong biên 100-300 PSA, WAL của PAC đứng yên 7,09 năm; mọi biến động dồn sang tầng support (từ 19,39 xuống 3,20 năm). Ngoài biên, PAC cũng bắt đầu thay đổi: khi tầng support đã trả hết, PAC nhận toàn bộ gốc trả trước còn lại (busted PAC).</p></details></div>
<p class="warn"><b>Đổi lại:</b> PAC ổn định hơn nên lợi suất thấp hơn; support rủi ro trả trước rất cao nên lợi suất cao hơn. Muốn PAC ổn định hơn (biên rộng hơn) thì phải có tầng support lớn hơn.</p>
<p>Ngoài ra, CMO có thể có tầng <b>lãi suất thả nổi</b> (floater) và <b>thả nổi nghịch đảo</b> (inverse floater) được tạo ra từ một tầng lãi suất cố định, phục vụ nhà đầu tư muốn coupon thả nổi.</p>`,
    },
    {
      title: '6. CMBS: chứng khoán đảm bảo bằng bất động sản thương mại',
      minutes: 10,
      html: `
<p>Tài sản đảm bảo của ${t('cmbs', 'CMBS')} là khoản vay cho bất động sản tạo thu nhập: văn phòng, trung tâm thương mại, khách sạn, kho bãi, nhà ở cho thuê nhiều căn. Khác biệt lớn với RMBS:</p>
<ul>
<li>Khoản vay thường là <b>nonrecourse</b>: bên cho vay chỉ trông vào <b>thu nhập và giá trị của bất động sản</b>, không vào người vay.</li>
<li>Vì vậy phân tích tín dụng tập trung vào hai tỷ lệ:</li>
</ul>
<div class="formula">${t('dscr', 'DSCR')} = ${frac('thu nhập hoạt động ròng (NOI)', 'nghĩa vụ trả nợ (gốc + lãi)')} &nbsp;&nbsp;&nbsp; LTV = ${frac('dư nợ vay', 'giá trị thẩm định của bất động sản')}</div>
<div class="example"><div class="ex-h">Ví dụ 6.1</div>
<p>Tòa văn phòng có NOI 900.000 USD/năm, nghĩa vụ trả nợ 750.000 USD/năm, dư nợ 6 triệu USD, giá trị thẩm định 8 triệu USD.</p>
<details><summary>Xem lời giải</summary><p>DSCR = 900.000 / 750.000 = <b>1,20 lần</b>: thu nhập đủ trả nợ với 20% dư địa. LTV = 6 / 8 = <b>75%</b>. DSCR cao hơn và LTV thấp hơn nghĩa là rủi ro tín dụng thấp hơn.</p></details></div>
<h4>Bảo vệ chống trả trước (call protection)</h4>
<p>Nhà đầu tư CMBS ít chịu rủi ro trả trước hơn RMBS nhờ hai lớp bảo vệ:</p>
<table class="plain"><thead><tr><th>Cấp</th><th>Cơ chế</th></tr></thead><tbody>
<tr><td>Cấp khoản vay</td><td>${t('lockoutp', 'Thời kỳ cấm trả trước (prepayment lockout)')}; ${t('defeasance', 'defeasance')}: người vay muốn trả trước phải mua danh mục trái phiếu chính phủ tạo đúng dòng tiền còn lại để thay thế; ${t('penpoints', 'điểm phạt trả trước (prepayment penalty points)')}; ${t('ym', 'phí duy trì lợi suất (yield maintenance)')}: bù cho nhà đầu tư phần lợi suất bị mất</td></tr>
<tr><td>Cấp cấu trúc</td><td>CMBS được phân tầng theo <b>tín dụng</b>: tầng AAA nhận gốc trước, tầng thấp nhất chịu lỗ trước. Tầng cao được bảo vệ khỏi cả vỡ nợ lẫn một phần trả trước</td></tr>
</tbody></table>
<h4>Rủi ro balloon</h4>
<p>Nhiều khoản vay thương mại chỉ trả dần một phần, phần lớn gốc trả một lần khi đáo hạn (balloon). Nếu đến hạn mà người vay không tái cấp vốn hay bán được tài sản, khoản vay bị kéo dài trong lúc bên cho vay xử lý: đây là ${t('balloonrisk', 'rủi ro balloon (balloon risk)')}, một dạng <b>rủi ro kéo dài</b>.</p>
<p class="tip">Nhớ nhanh: RMBS → rủi ro chính là <b>trả trước</b>. CMBS → rủi ro chính là <b>tín dụng của bất động sản</b> và <b>balloon (kéo dài)</b>.</p>`,
    },
    {
      title: '7. Tóm tắt và bẫy thường gặp',
      minutes: 4,
      html: `
<table class="plain"><thead><tr><th>Chủ đề</th><th>Điều cần nhớ</th><th>Bẫy</th></tr></thead><tbody>
<tr><td>Khoản vay thế chấp</td><td>Cố định, ARM, hybrid; trả dần, balloon, interest-only; recourse và nonrecourse; LTV</td><td>Nonrecourse: chỉ lấy được căn nhà</td></tr>
<tr><td>Agency và non-agency</td><td>Agency có bảo lãnh của chính phủ hoặc GSE, khoản vay đạt chuẩn</td><td>Non-agency cần tăng cường tín dụng</td></tr>
<tr><td>Pass-through</td><td>Lãi + gốc lịch + trả trước, trừ phí; pass-through rate &lt; lãi khoản vay</td><td>Không phải coupon cố định được bảo đảm</td></tr>
<tr><td>WAC, WAM</td><td>Trọng số là <b>dư nợ</b></td><td>Không bình quân đơn giản</td></tr>
<tr><td>SMM, CPR</td><td>SMM = 1 - (1 - CPR)<sup>1/12</sup>, trên dư nợ sau gốc lịch</td><td>Không phải CPR / 12</td></tr>
<tr><td>PSA</td><td>100 PSA: 0,2%/tháng tới 6% ở tháng 30</td><td>Sau tháng 30 CPR không tăng</td></tr>
<tr><td>Contraction và extension</td><td>Lãi giảm → trả nhanh (co ngắn); lãi tăng → trả chậm (kéo dài)</td><td>Cả hai đều bất lợi cho nhà đầu tư</td></tr>
<tr><td>CMO</td><td>Phân phối lại rủi ro trả trước; sequential, PAC/support, floater</td><td>Không loại bỏ rủi ro trả trước</td></tr>
<tr><td>CMBS</td><td>Nonrecourse, DSCR, LTV, call protection, balloon risk</td><td>Balloon risk là rủi ro kéo dài</td></tr>
</tbody></table>
<p>Tiếp theo: tab <b>Luyện tập</b> - 10 câu.</p>`,
    },
  ];

  const glossary = {
    rmbs: ['Residential mortgage-backed securities (RMBS)', 'Chứng khoán đảm bảo bằng thế chấp nhà ở', 'MBS có tài sản đảm bảo là khoản vay mua nhà ở.'],
    cmbs: ['Commercial mortgage-backed securities (CMBS)', 'Chứng khoán đảm bảo bằng thế chấp thương mại', 'MBS có tài sản đảm bảo là khoản vay bất động sản tạo thu nhập (văn phòng, khách sạn...).'],
    prepay: ['Prepayment risk', 'Rủi ro trả trước', 'Rủi ro tốc độ trả nợ trước hạn khác kỳ vọng, gồm rủi ro co ngắn và rủi ro kéo dài.'],
    mortgage: ['Mortgage loan', 'Khoản vay thế chấp', 'Khoản vay được bảo đảm bằng bất động sản.'],
    foreclose: ['Foreclosure', 'Tịch biên', 'Bên cho vay thu giữ và bán bất động sản khi người vay vỡ nợ.'],
    arm: ['Adjustable-rate mortgage (ARM)', 'Khoản vay lãi suất thả nổi', 'Lãi suất được điều chỉnh định kỳ theo chỉ số tham chiếu cộng biên, thường có trần.'],
    balloon: ['Balloon payment', 'Khoản trả cuối kỳ lớn', 'Phần gốc chưa trả dần, phải trả một lần khi đáo hạn.'],
    ppenalty: ['Prepayment penalty', 'Phạt trả trước', 'Khoản phí người vay phải trả nếu trả nợ trước hạn trong một giai đoạn.'],
    recourse: ['Recourse loan', 'Khoản vay có truy đòi', 'Nếu bán tài sản không đủ trả nợ, bên cho vay đòi phần thiếu từ tài sản khác của người vay.'],
    nonrecourse: ['Nonrecourse loan', 'Khoản vay không truy đòi', 'Bên cho vay chỉ có quyền với tài sản đảm bảo.'],
    ltv: ['Loan-to-value ratio (LTV)', 'Tỷ lệ cho vay trên giá trị', 'Dư nợ chia giá trị tài sản; càng thấp càng an toàn cho bên cho vay.'],
    agency: ['Agency RMBS', 'RMBS của cơ quan, GSE', 'RMBS được Ginnie Mae (bảo lãnh của chính phủ) hoặc GSE như Fannie Mae, Freddie Mac bảo lãnh.'],
    conforming: ['Conforming loans', 'Khoản vay đạt chuẩn', 'Khoản vay đáp ứng tiêu chuẩn (quy mô, LTV, DTI, hồ sơ) để đưa vào agency RMBS.'],
    passthru: ['Mortgage pass-through security', 'Chứng khoán chuyển tiếp', 'Nhà đầu tư nhận tỷ lệ tương ứng của dòng tiền danh mục (lãi, gốc, trả trước) trừ phí.'],
    ptrate: ['Pass-through rate', 'Lãi suất chuyển tiếp', 'Lãi suất nhà đầu tư nhận: lãi khoản vay trừ phí servicing và phí bảo lãnh.'],
    wac: ['Weighted average coupon (WAC)', 'Lãi suất bình quân gia quyền', 'Bình quân lãi suất các khoản vay, trọng số là dư nợ.'],
    wam: ['Weighted average maturity (WAM)', 'Kỳ hạn bình quân gia quyền', 'Bình quân số tháng còn lại đến đáo hạn, trọng số là dư nợ.'],
    wal: ['Weighted average life (WAL)', 'Kỳ hạn bình quân thực tế', 'Thời gian bình quân đến khi nhận lại gốc, trọng số là gốc; phụ thuộc tốc độ trả trước.'],
    contraction: ['Contraction risk', 'Rủi ro co ngắn', 'Lãi suất giảm, trả trước nhanh hơn kỳ vọng, gốc về sớm phải tái đầu tư ở lãi suất thấp.'],
    extension: ['Extension risk', 'Rủi ro kéo dài', 'Lãi suất tăng, trả trước chậm hơn kỳ vọng, vốn bị giữ lâu ở lãi suất thấp.'],
    smm: ['Single monthly mortality rate (SMM)', 'Tỷ lệ trả trước tháng', 'Phần trăm dư nợ (sau gốc theo lịch) được trả trước trong một tháng.'],
    cpr: ['Conditional prepayment rate (CPR)', 'Tỷ lệ trả trước năm', 'SMM quy đổi ra năm: CPR = 1 - (1 - SMM) mũ 12.'],
    psa: ['PSA prepayment benchmark', 'Chuẩn trả trước PSA', '100 PSA: CPR 0,2% tháng 1, tăng 0,2% mỗi tháng đến 6% ở tháng 30 rồi giữ nguyên.'],
    cmo: ['Collateralized mortgage obligation (CMO)', 'Nghĩa vụ thế chấp có đảm bảo', 'Cấu trúc chia dòng tiền danh mục MBS thành nhiều tầng với quy tắc trả gốc khác nhau.'],
    timetr: ['Time tranching', 'Phân tầng theo thời gian', 'Tạo các tầng có kỳ hạn và mức chịu rủi ro trả trước khác nhau; phân phối lại chứ không loại bỏ rủi ro.'],
    pac: ['Planned amortization class (PAC) tranche', 'Tầng PAC', 'Tầng có lịch trả gốc định sẵn, giữ được khi tốc độ trả trước nằm trong biên PAC.'],
    collar: ['PAC collar', 'Biên PAC', 'Khoảng tốc độ trả trước (ví dụ 100-300 PSA) mà lịch trả gốc của PAC được bảo đảm.'],
    support: ['Support (companion) tranche', 'Tầng hỗ trợ', 'Tầng hấp thụ chênh lệch trả trước để bảo vệ PAC; chịu cả rủi ro co ngắn và kéo dài lớn.'],
    dscr: ['Debt service coverage ratio (DSCR)', 'Hệ số khả năng trả nợ', 'NOI chia nghĩa vụ trả nợ (gốc + lãi); lớn hơn 1 là thu nhập đủ trả nợ.'],
    lockoutp: ['Prepayment lockout', 'Thời kỳ cấm trả trước', 'Giai đoạn người vay không được trả trước khoản vay.'],
    defeasance: ['Defeasance', 'Thay thế bằng trái phiếu chính phủ', 'Người vay muốn trả trước phải mua danh mục trái phiếu chính phủ tạo dòng tiền thay thế cho nhà đầu tư.'],
    penpoints: ['Prepayment penalty points', 'Điểm phạt trả trước', 'Phí trả trước tính theo điểm phần trăm dư nợ, thường giảm dần theo thời gian.'],
    ym: ['Yield maintenance charge', 'Phí duy trì lợi suất', 'Phí bù cho bên cho vay phần lợi suất bị mất khi người vay trả trước.'],
    balloonrisk: ['Balloon risk', 'Rủi ro balloon', 'Người vay không tái cấp vốn được khi khoản balloon đến hạn, khoản vay bị kéo dài; một dạng rủi ro kéo dài.'],
  };

  const practice = [
    { q: 'So với khoản vay không truy đòi (nonrecourse), khoản vay thế chấp có truy đòi (recourse) cho phép bên cho vay:', choices: ['Chỉ có quyền đối với căn nhà thế chấp.', 'Đòi phần thiếu hụt từ tài sản khác của người vay nếu bán nhà không đủ trả nợ.', 'Không có quyền gì khi người vay vỡ nợ.'], answer: 1, explain: 'Recourse cho phép đòi phần thiếu từ tài sản khác. Phương án "chỉ có quyền đối với căn nhà thế chấp" mô tả nonrecourse. Phương án "không có quyền gì" sai: cả hai loại đều cho phép tịch biên nhà.' },
    { q: 'Khoản vay 300.000 USD, 30 năm, lãi suất cố định 6%/năm, trả hằng tháng. Khoản trả hằng tháng gần nhất với:', choices: ['1.798,65 USD', '1.500,00 USD', '833,33 USD'], answer: 0, explain: 'N = 360, I/Y = 0,5, PV = 300.000, FV = 0, CPT PMT = 1.798,65. Lựa chọn 1.500,00 USD chỉ là lãi tháng đầu (0,5% × 300.000), quên phần gốc. Lựa chọn 833,33 USD là gốc chia đều 360 tháng, quên lãi.' },
    { q: 'Danh mục gồm ba khoản vay: 100.000 USD lãi 5,5%; 250.000 USD lãi 6,0%; 150.000 USD lãi 6,5%. WAC của danh mục là:', choices: ['6,00%', '6,50%', '6,05%'], answer: 2, explain: 'Trọng số theo dư nợ 0,2; 0,5; 0,3: WAC = 1,1% + 3,0% + 1,95% = 6,05%. Lựa chọn 6,00% là bình quân đơn giản, sai trọng số. Lựa chọn 6,50% là lãi suất cao nhất.' },
    { q: 'Một danh mục MBS có CPR 9%. SMM tương ứng gần nhất với:', choices: ['0,7828%', '0,7500%', '0,7207%'], answer: 0, explain: 'SMM = 1 - (1 - 0,09)^(1/12) = 0,7828%. Lựa chọn 0,7500% là CPR / 12, bỏ qua tính chất lũy kế. Lựa chọn 0,7207% dùng nhầm công thức (1 + 0,09)^(1/12) - 1.' },
    { q: 'Theo chuẩn PSA, CPR ở tháng 40 với tốc độ 150 PSA là:', choices: ['6,0%', '12,0%', '9,0%'], answer: 2, explain: 'Sau tháng 30, 100 PSA giữ CPR 6%; 150 PSA là 1,5 × 6% = 9%. Lựa chọn 6,0% là CPR của 100 PSA. Lựa chọn 12,0% tiếp tục tăng sau tháng 30 (1,5 × 0,2% × 40), sai quy ước.' },
    { q: 'Rủi ro co ngắn (contraction risk) của nhà đầu tư MBS xảy ra khi:', choices: ['Lãi suất tăng và người vay trả trước chậm hơn kỳ vọng.', 'Lãi suất giảm và người vay tái cấp vốn, trả trước nhanh hơn kỳ vọng.', 'Tỷ lệ vỡ nợ của người vay tăng mạnh.'], answer: 1, explain: 'Lãi suất giảm → tái cấp vốn → gốc về sớm, phải tái đầu tư ở lãi suất thấp. Lãi suất tăng, trả trước chậm hơn là rủi ro kéo dài. Tỷ lệ vỡ nợ tăng là rủi ro tín dụng (dù vỡ nợ cũng tạo dòng tiền giống trả trước, nó không phải định nghĩa của contraction risk).' },
    { q: 'Lãi suất thị trường tăng mạnh. Nhà đầu tư MBS pass-through nhiều khả năng đối mặt với:', choices: ['Rủi ro kéo dài: trả trước chậm lại, kỳ hạn bình quân dài ra đúng lúc lãi suất thị trường cao.', 'Rủi ro co ngắn: gốc về sớm hơn kỳ vọng.', 'Không có rủi ro nào vì dòng tiền pass-through được bảo đảm.'], answer: 0, explain: 'Lãi suất tăng làm ít người tái cấp vốn, gốc về chậm, vốn bị giữ ở lãi suất thấp. Rủi ro co ngắn xảy ra khi lãi suất giảm. Phương án "không có rủi ro nào" sai: pass-through chuyển nguyên rủi ro trả trước cho nhà đầu tư.' },
    { q: 'Mục đích chính của phân tầng theo thời gian trong CMO là:', choices: ['Loại bỏ hoàn toàn rủi ro trả trước của danh mục.', 'Bảo đảm dòng tiền cố định cho mọi tầng.', 'Phân phối lại rủi ro co ngắn và kéo dài giữa các tầng theo nhu cầu nhà đầu tư.'], answer: 2, explain: 'CMO chỉ chia lại rủi ro, tổng rủi ro của danh mục không đổi. Hai phương án "loại bỏ hoàn toàn rủi ro trả trước" và "bảo đảm dòng tiền cố định" sai vì dòng tiền danh mục vẫn phụ thuộc trả trước; ngay cả PAC cũng chỉ ổn định trong biên.' },
    { q: 'Một CMO có tầng PAC với biên 100-300 PSA và một tầng support. Tốc độ trả trước thực tế tăng từ 150 lên 250 PSA. Nhiều khả năng:', choices: ['Kỳ hạn bình quân của PAC giảm mạnh, của support gần như không đổi.', 'PAC vẫn theo lịch; tầng support nhận phần gốc trả trước dư và kỳ hạn bình quân của nó ngắn lại.', 'Cả hai tầng ngắn lại theo cùng tỷ lệ.'], answer: 1, explain: 'Trong biên PAC, tầng support hấp thụ chênh lệch nên chỉ support thay đổi (trong mô phỏng ở bài, WAL support giảm mạnh còn WAL PAC giữ 7,09 năm). Phương án "kỳ hạn bình quân của PAC giảm mạnh" đảo ngược vai trò. Phương án "cả hai tầng ngắn lại theo cùng tỷ lệ" mô tả pass-through không phân tầng.' },
    { q: 'Khoản vay thương mại trong CMBS trả balloon khi đáo hạn, nhưng người vay không tái cấp vốn được và khoản vay bị gia hạn. Đây là:', choices: ['Rủi ro co ngắn', 'Rủi ro tái đầu tư do trả trước', 'Rủi ro balloon, một dạng rủi ro kéo dài'], answer: 2, explain: 'Không trả được balloon khiến thời gian nhận gốc dài ra: balloon risk là extension risk. Rủi ro co ngắn và rủi ro tái đầu tư do trả trước gắn với gốc về sớm, ngược với tình huống này.' },
  ];

  // Mô hình danh mục 400 triệu, 30 năm, lãi 6%, trả trước theo PSA.
  function poolWal(psa) {
    let bal = 400, num = 0, tot = 0;
    const r = 0.06 / 12;
    for (let m = 1; m <= 360; m++) {
      const pmt = (bal * r) / (1 - Math.pow(1 + r, -(361 - m)));
      const sch = pmt - bal * r, cpr = (psa / 100) * Math.min(m, 30) * 0.002, smm = 1 - Math.pow(1 - cpr, 1 / 12);
      const p = sch + smm * (bal - sch);
      bal -= p; num += m * p; tot += p;
    }
    return num / tot / 12;
  }

  const widgets = {
    psa(el) {
      el.innerHTML = `
        <div class="w-row"><label>Tốc độ: <b data-o="p">100 PSA</b><input type="range" min="0" max="500" step="5" value="100" data-i="p"></label>
        <label>Tháng: <b data-o="m">40</b><input type="range" min="1" max="360" step="1" value="40" data-i="m"></label></div>
        <div class="w-out"><div class="w-price" data-o="main"></div><div class="w-bar"><span data-o="bar"></span><i></i></div><div class="w-note" data-o="note"></div></div>`;
      const q = s => el.querySelector(s);
      const f = (x, d = 2) => x.toFixed(d).replace('.', ',');
      const upd = () => {
        const p = +q('[data-i="p"]').value, m = +q('[data-i="m"]').value;
        const cpr = (p / 100) * Math.min(m, 30) * 0.002, smm = 1 - Math.pow(1 - cpr, 1 / 12), w = poolWal(p);
        q('[data-o="p"]').textContent = `${p} PSA`;
        q('[data-o="m"]').textContent = m;
        q('[data-o="main"]').textContent = `CPR = ${f(cpr * 100)}% · SMM = ${f(smm * 100, 4)}% · WAL danh mục = ${f(w)} năm`;
        q('[data-o="bar"]').style.width = `${(w / 20) * 100}%`;
        q('[data-o="note"]').textContent = `Danh mục 30 năm, lãi 6%. ${m >= 30 ? 'Từ tháng 30, CPR không tăng nữa.' : 'Trước tháng 30, CPR tăng dần theo tuổi khoản vay.'} Trả trước nhanh hơn → WAL ngắn hơn (rủi ro co ngắn khi lãi suất giảm).`;
      };
      el.addEventListener('input', upd);
      upd();
    },
  };

  window.LESSONS['FI-19'] = {
    moduleId: 'FI-19',
    calculator: 'BA II Plus',
    warmup: [
      'Ôn FI-18: trong thác nước phân bổ lỗ, tầng nào chịu lỗ trước? Phân tầng đó chia loại rủi ro nào?',
      'Ôn Quant: dùng BA II Plus tính khoản trả hằng tháng của một khoản vay trả dần cần nhập những phím nào?',
      'Nếu lãi suất cho vay mua nhà giảm từ 9% xuống 6%, bạn đang vay ở 9% sẽ làm gì? Điều đó ảnh hưởng thế nào đến người đang nắm khoản vay của bạn?',
    ],
    sections,
    glossary,
    practice,
    widgets,
    slides: [],
    wrapup: [
      'Giải thích bằng lời của bạn vì sao cả lãi suất tăng lẫn lãi suất giảm đều bất lợi cho nhà đầu tư MBS.',
      'Tính CPR và SMM ở tháng 15 và tháng 45 với tốc độ 200 PSA.',
      'So sánh sequential-pay và PAC/support: tầng nào chịu rủi ro co ngắn, tầng nào chịu rủi ro kéo dài?',
    ],
  };
}());
