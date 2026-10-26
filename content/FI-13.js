// Bài giảng FI-13 - Curve-Based and Empirical Fixed-Income Risk Measures (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t, frac, keys } = window.CFAH;

  const sections = [
    {
      title: '1. Bức tranh lớn: khi dòng tiền không còn cố định',
      minutes: 6,
      html: `
<p>Ở FI-11 và FI-12 (do module khác soạn) bạn đã học ${t('moddur', 'modified duration')}, Macaulay duration, money duration và convexity tính <b>theo lợi suất đáo hạn (yield-based)</b>. Các thước đo này có một giả định ngầm rất mạnh:</p>
<div class="key">Duration theo lợi suất giả định <b>dòng tiền của trái phiếu không đổi</b> khi lợi suất thay đổi. Chỉ có mẫu số (lãi suất chiết khấu) thay đổi.</div>
<p>Giả định này đúng với trái phiếu thường (option-free bond). Nhưng với trái phiếu có ${t('embedded', 'quyền chọn nhúng (embedded option)')} như ${t('callable', 'callable bond')}, ${t('putable', 'putable bond')} hay chứng khoán thế chấp (MBS), khi lãi suất đổi thì <b>chính dòng tiền cũng đổi</b>: tổ chức phát hành mua lại sớm, nhà đầu tư bán lại sớm, người vay nhà trả nợ trước hạn.</p>
<p>Module này trả lời 4 câu hỏi, ứng với 4 LOS:</p>
<ol>
  <li>Vì sao ${t('effdur', 'effective duration')} và ${t('effcon', 'effective convexity')} là thước đo phù hợp nhất cho trái phiếu có quyền chọn? (LOS 1)</li>
  <li>Dùng effective duration và convexity để ước tính % thay đổi giá khi đường lợi suất chuẩn dịch chuyển. (LOS 2)</li>
  <li>${t('krd', 'Key rate duration')} đo rủi ro khi đường cong <b>không</b> dịch chuyển song song như thế nào? (LOS 3)</li>
  <li>${t('empdur', 'Empirical duration')} khác ${t('analdur', 'analytical duration')} ở đâu? (LOS 4)</li>
</ol>
<p class="tip"><b>Một câu để nhớ cả module:</b> FI-11/FI-12 hỏi "giá đổi bao nhiêu khi <i>YTM của chính trái phiếu</i> đổi"; FI-13 hỏi "giá đổi bao nhiêu khi <i>đường lợi suất chuẩn (benchmark curve)</i> đổi", có tính đến việc dòng tiền phản ứng theo.</p>`,
    },
    {
      title: '2. Effective duration và effective convexity (LOS 1)',
      minutes: 14,
      html: `
<p>Với trái phiếu có quyền chọn, ta không có công thức đóng cho dòng tiền. Thay vào đó, dùng một ${t('model', 'mô hình định giá')} (ví dụ cây nhị thức lãi suất, sẽ học ở Level II) để tính giá ở 3 kịch bản của ${t('benchcurve', 'đường lợi suất chuẩn (benchmark yield curve)')}:</p>
<ul>
  <li>PV<sub>0</sub>: giá với đường cong hiện tại.</li>
  <li>PV<sub>-</sub>: giá khi cả đường cong <b>giảm</b> song song một lượng ΔCurve.</li>
  <li>PV<sub>+</sub>: giá khi cả đường cong <b>tăng</b> song song một lượng ΔCurve.</li>
</ul>
<p>Ở mỗi kịch bản, mô hình tự quyết định khi nào quyền chọn được thực hiện, nên dòng tiền được phép thay đổi. Credit spread được giữ nguyên.</p>
<div class="formula">EffDur = ${frac('(PV<sub>-</sub>) - (PV<sub>+</sub>)', '2 × ΔCurve × PV<sub>0</sub>')} &nbsp;&nbsp;&nbsp;&nbsp; EffCon = ${frac('(PV<sub>-</sub>) + (PV<sub>+</sub>) - 2 × PV<sub>0</sub>', '(ΔCurve)<sup>2</sup> × PV<sub>0</sub>')}</div>
<p class="warn"><b>ΔCurve nhập dạng thập phân</b>: 30 bps = 0,003. Effective duration có mẫu số 2 × ΔCurve, còn effective convexity có mẫu số (ΔCurve)<sup>2</sup>, <b>không có số 2</b>. Hai lỗi này là đáp án nhiễu kinh điển.</p>

<div class="example"><div class="ex-h">Ví dụ 2.1 - Trái phiếu thường: effective duration gần bằng modified duration</div>
<p>Trái phiếu 6 năm, coupon 5% trả hằng năm, đường lợi suất phẳng 5%, nên PV<sub>0</sub> = 100. Dịch đường cong ±30 bps: PV<sub>-</sub> (4,7%) = 101,5374; PV<sub>+</sub> (5,3%) = 98,4918. Tính EffDur và EffCon.</p>
<details><summary>Xem lời giải</summary>
<p>EffDur = (101,5374 - 98,4918) / (2 × 0,003 × 100) = <b>5,08</b>.<br>
EffCon = (101,5374 + 98,4918 - 200) / (0,003<sup>2</sup> × 100) = <b>32,47</b>.</p>
<p>Modified duration tính theo YTM của trái phiếu này cũng là 5,08. Với trái phiếu thường và đường cong phẳng, hai thước đo gần như trùng nhau, vì dòng tiền không phụ thuộc lãi suất.</p>
<p class="tip">BA II Plus: tính từng giá bằng TVM, ví dụ PV<sub>-</sub>: 6 <kbd>N</kbd> 4.7 <kbd>I/Y</kbd> 5 <kbd>PMT</kbd> 100 <kbd>FV</kbd> <kbd>CPT</kbd> <kbd>PV</kbd> được -101.5374. Đổi I/Y thành 5.3 rồi <kbd>CPT</kbd> <kbd>PV</kbd> lại để có PV<sub>+</sub>.</p></details></div>

<div class="example"><div class="ex-h">Ví dụ 2.2 - Trái phiếu callable</div>
<p>Mô hình định giá cho một callable bond: PV<sub>0</sub> = 101,50; PV<sub>-</sub> = 102,60 (đường cong giảm 30 bps); PV<sub>+</sub> = 100,35 (đường cong tăng 30 bps).</p>
<details><summary>Xem lời giải</summary>
<p>EffDur = (102,60 - 100,35) / (2 × 0,003 × 101,50) = 2,25 / 0,609 = <b>3,69</b>.<br>
EffCon = (102,60 + 100,35 - 203,00) / (0,000009 × 101,50) = -0,05 / 0,0009135 = <b>-54,73</b>.</p>
<p>Convexity <b>âm</b>: khi lãi suất giảm, giá chỉ tăng 1,10, còn khi lãi suất tăng, giá giảm 1,15. Lý do: lãi suất càng thấp thì tổ chức phát hành càng dễ mua lại (call) ở giá call, nên giá trái phiếu bị "chặn trần".</p></details></div>

<h4>Vì sao effective duration là thước đo phù hợp nhất?</h4>
<table class="plain"><thead><tr><th></th><th>Yield duration (FI-11)</th><th>Effective duration (FI-13)</th></tr></thead><tbody>
<tr><td>Biến số gây sốc</td><td>YTM của chính trái phiếu</td><td>Đường lợi suất chuẩn (benchmark curve)</td></tr>
<tr><td>Dòng tiền</td><td>Cố định</td><td>Thay đổi theo lãi suất (mô hình quyết định)</td></tr>
<tr><td>Cần mô hình?</td><td>Không, chỉ cần công thức</td><td>Có, cần mô hình định giá</td></tr>
<tr><td>Dùng cho</td><td>Trái phiếu thường</td><td>Callable, putable, MBS, và cả trái phiếu thường</td></tr>
</tbody></table>
<p>Với trái phiếu có quyền chọn, YTM không có nghĩa rõ ràng (không biết trái phiếu sẽ sống đến bao giờ), nên "thay đổi YTM" cũng không có nghĩa. Ngược lại, đường lợi suất chuẩn luôn quan sát được, nên ta sốc nó. Đó là lý do effective duration là thước đo ${t('curvedur', 'curve duration')}.</p>
<p class="tip"><b>Một điểm hay hỏi:</b> độ chính xác của effective duration phụ thuộc vào <b>mô hình và giả định</b> (biến động lãi suất, hành vi trả trước...). Hai nhà phân tích dùng mô hình khác nhau có thể ra effective duration khác nhau cho cùng một trái phiếu.</p>`,
    },
    {
      title: '3. Callable và putable: hình dạng đường giá - lợi suất',
      minutes: 10,
      html: `
<p>Nhớ quy tắc: <b>quyền chọn thuộc về ai thì có lợi cho người đó</b>.</p>
<ul>
  <li><b>Callable bond</b>: tổ chức phát hành nắm quyền mua lại. Giá = giá trái phiếu thường - giá trị quyền call. Khi lãi suất giảm mạnh, quyền call có giá trị lớn, giá trái phiếu bị chặn gần giá call. Hiện tượng này gọi là ${t('compress', 'price compression')} và tạo ra ${t('negcon', 'negative convexity')}.</li>
  <li><b>Putable bond</b>: nhà đầu tư nắm quyền bán lại. Giá = giá trái phiếu thường + giá trị quyền put. Khi lãi suất tăng mạnh, quyền put có giá trị lớn, giá trái phiếu được "đỡ sàn" gần giá put. Convexity <b>dương và lớn hơn</b> trái phiếu thường.</li>
</ul>
<table class="plain"><thead><tr><th>Môi trường lãi suất</th><th>Callable so với trái phiếu thường</th><th>Putable so với trái phiếu thường</th></tr></thead><tbody>
<tr><td>Lãi suất cao (quyền chọn ít giá trị)</td><td>Gần như giống nhau, duration gần bằng</td><td>Quyền put có lợi: duration <b>ngắn hơn</b> nhiều</td></tr>
<tr><td>Lãi suất thấp</td><td>Quyền call có lợi: duration <b>ngắn hơn</b>, convexity âm</td><td>Gần như giống nhau</td></tr>
<tr><td>Kết luận</td><td colspan="2">Effective duration của trái phiếu có quyền chọn <b>không lớn hơn</b> effective duration của trái phiếu thường tương đương</td></tr>
</tbody></table>
<div class="key">Callable: lãi suất giảm, giá tăng ít (bị chặn trần), convexity có thể âm.<br>Putable: lãi suất tăng, giá giảm ít (được đỡ sàn), convexity dương lớn hơn.</div>
<p class="warn"><b>Bẫy:</b> "Callable bond có effective convexity âm" chỉ đúng khi lãi suất đủ thấp để quyền call có giá trị đáng kể. Khi lãi suất rất cao, callable bond hành xử gần như trái phiếu thường và convexity vẫn dương.</p>
<p>Ngoài ra, ${t('frn', 'floating-rate note (FRN)')} có effective duration rất nhỏ (xấp xỉ thời gian đến kỳ điều chỉnh lãi suất tiếp theo), vì coupon tự điều chỉnh theo lãi suất thị trường.</p>`,
    },
    {
      title: '4. Ước tính % thay đổi giá theo đường cong chuẩn (LOS 2)',
      minutes: 12,
      html: `
<div class="formula">%ΔPV ≈ -EffDur × ΔCurve + ${frac('1', '2')} × EffCon × (ΔCurve)<sup>2</sup></div>
<p>Công thức có dạng y hệt FI-12 (chỉ thay ΔYield bằng ΔCurve). Phần đầu là <b>hiệu ứng duration</b> (tuyến tính), phần sau là <b>hiệu ứng convexity</b> (luôn cùng dấu với EffCon vì (ΔCurve)<sup>2</sup> luôn dương).</p>

<div class="example"><div class="ex-h">Ví dụ 4.1 - Trái phiếu putable / trái phiếu thường convexity dương</div>
<p>Một trái phiếu có EffDur = 6,8 và EffCon = 95. Ước tính % thay đổi giá nếu đường cong chuẩn (a) tăng 75 bps, (b) giảm 75 bps.</p>
<details><summary>Xem lời giải</summary>
<p>Hiệu ứng duration: -6,8 × 0,0075 = -5,10%. Hiệu ứng convexity: 0,5 × 95 × 0,0075<sup>2</sup> = +0,27%.<br>
(a) -5,10% + 0,27% = <b>-4,83%</b>.<br>
(b) +5,10% + 0,27% = <b>+5,37%</b>.</p>
<p>Convexity dương làm giá tăng nhiều hơn khi lãi suất giảm và giảm ít hơn khi lãi suất tăng. Đây là đặc tính có lợi cho người nắm giữ.</p></details></div>

<div class="example"><div class="ex-h">Ví dụ 4.2 - Callable bond ở ví dụ 2.2</div>
<p>EffDur = 3,69; EffCon = -54,73. Đường cong chuẩn (a) tăng 100 bps, (b) giảm 100 bps.</p>
<details><summary>Xem lời giải</summary>
<p>Hiệu ứng duration: ∓3,69%. Hiệu ứng convexity: 0,5 × (-54,73) × 0,01<sup>2</sup> = -0,27%.<br>
(a) -3,69% - 0,27% = <b>-3,97%</b>.<br>
(b) +3,69% - 0,27% = <b>+3,42%</b>.</p>
<p>Với convexity âm, người nắm giữ chịu thiệt ở <b>cả hai chiều</b>: lãi suất tăng thì lỗ nhiều hơn mức duration dự báo, lãi suất giảm thì lời ít hơn.</p></details></div>

<h4>Thử ngay: kéo thanh thay đổi đường cong</h4>
<div class="widget" data-widget="effChange"></div>
<p class="tip">Trong đề thi, nếu đề cho "effective convexity" mà không nói gì thêm, cứ áp dụng đúng công thức trên với ΔCurve dạng thập phân. Nếu đề cho convexity theo quy ước khác (ví dụ đã chia 100), đề sẽ cho kết quả gần với đáp án nào hợp lý: kiểm tra độ lớn hiệu ứng convexity, nó thường chỉ cỡ 0,1% đến 0,5%.</p>`,
    },
    {
      title: '5. Key rate duration: khi đường cong đổi hình dạng (LOS 3)',
      minutes: 14,
      html: `
<p>Effective duration giả định đường cong dịch <b>song song</b>. Trong thực tế đường cong hay dốc lên (steepening), phẳng đi (flattening) hoặc cong thêm. Rủi ro từ thay đổi hình dạng này gọi là ${t('shaping', 'shaping risk')}.</p>
<p>${t('krd', 'Key rate duration')} (còn gọi là ${t('partialdur', 'partial duration')}) đo độ nhạy của giá khi <b>chỉ một kỳ hạn</b> trên đường lợi suất chuẩn thay đổi, các kỳ hạn khác giữ nguyên:</p>
<div class="formula">KeyRateDur<sub>k</sub> = -${frac('1', 'PV')} × ${frac('ΔPV', 'Δr<sub>k</sub>')} &nbsp;&nbsp;&nbsp;&nbsp; Σ KeyRateDur<sub>k</sub> = EffDur</div>
<div class="formula">%ΔPV ≈ -Σ KeyRateDur<sub>k</sub> × Δr<sub>k</sub></div>
<p>Tổng các key rate duration bằng effective duration: nếu tất cả các kỳ hạn cùng dịch một lượng như nhau thì ta quay về trường hợp song song.</p>

<div class="example"><div class="ex-h">Ví dụ 5.1 - Danh mục hai trái phiếu zero-coupon</div>
<p>Danh mục chia đều 50/50 vào trái phiếu zero-coupon 5 năm (lợi suất 4%) và zero-coupon 10 năm (lợi suất 5%), lợi suất tính theo năm. Lợi suất 5 năm tăng 50 bps, lợi suất 10 năm giảm 20 bps. Ước tính thay đổi giá trị danh mục.</p>
<details><summary>Xem lời giải</summary>
<p>Modified duration của zero-coupon = N / (1 + r): 5 / 1,04 = 4,808 và 10 / 1,05 = 9,524.<br>
Key rate duration của danh mục (nhân tỷ trọng): KRD<sub>5</sub> = 0,5 × 4,808 = 2,404; KRD<sub>10</sub> = 0,5 × 9,524 = 4,762. Tổng = 7,166 = effective duration của danh mục.<br>
%ΔPV ≈ -(2,404 × 0,50% + 4,762 × (-0,20%)) = -1,202% + 0,952% = <b>-0,25%</b>.</p>
<p>Nếu chỉ dùng effective duration và giả định cả đường cong tăng 50 bps, bạn sẽ dự báo -3,58%, sai rất xa. Định giá lại chính xác hai trái phiếu cho -0,22%; chênh lệch nhỏ là do convexity.</p></details></div>

<div class="example"><div class="ex-h">Ví dụ 5.2 - Đọc bảng key rate duration</div>
<table class="plain"><thead><tr><th>Kỳ hạn</th><th>2 năm</th><th>5 năm</th><th>10 năm</th><th>30 năm</th><th>Tổng</th></tr></thead><tbody>
<tr><td>Key rate duration</td><td>0,40</td><td>1,50</td><td>2,60</td><td>1,00</td><td>5,50</td></tr>
<tr><td>Thay đổi lợi suất</td><td>+20 bps</td><td>+10 bps</td><td>-5 bps</td><td>-15 bps</td><td></td></tr>
</tbody></table>
<details><summary>Xem lời giải</summary>
<p>%ΔPV ≈ -(0,40 × 0,20 + 1,50 × 0,10 + 2,60 × (-0,05) + 1,00 × (-0,15))% = -(0,08 + 0,15 - 0,13 - 0,15)% = <b>+0,05%</b>.</p>
<p>Đây là một kịch bản đường cong <b>phẳng đi</b> (ngắn hạn tăng, dài hạn giảm). Danh mục có phần lớn rủi ro ở kỳ hạn 10 năm, nên hưởng lợi nhẹ. Effective duration 5,50 không cho bạn biết điều này.</p></details></div>
<p class="tip"><b>Ứng dụng:</b> nhà quản lý dùng key rate duration để (1) biết danh mục nhạy nhất với điểm nào trên đường cong, (2) so khớp từng kỳ hạn với benchmark hoặc với nợ phải trả, (3) phòng ngừa đúng điểm rủi ro bằng hợp đồng tương lai hoặc swap đúng kỳ hạn.</p>`,
    },
    {
      title: '6. Empirical duration và analytical duration (LOS 4)',
      minutes: 9,
      html: `
<p>Tất cả các thước đo đã học (Macaulay, modified, effective, key rate) đều là ${t('analdur', 'analytical duration')}: tính ra từ <b>công thức hoặc mô hình</b>, với giả định quan trọng là <b>credit spread không đổi</b> khi lãi suất chuẩn thay đổi (lợi suất chuẩn và spread độc lập với nhau).</p>
<p>${t('empdur', 'Empirical duration')} được ước lượng từ <b>dữ liệu lịch sử</b>: hồi quy % thay đổi giá trái phiếu theo thay đổi lợi suất chuẩn. Hệ số góc (đổi dấu) chính là empirical duration.</p>
<div class="formula">%ΔP<sub>t</sub> = a + b × ΔYield<sub>chuẩn, t</sub> + e<sub>t</sub> &nbsp;&nbsp;→&nbsp;&nbsp; Empirical duration = -b</div>
<div class="example"><div class="ex-h">Ví dụ 6.1</div>
<p>Một trái phiếu lợi suất cao (high-yield) có effective duration 4,50. Sáu tháng gần đây: thay đổi lợi suất chuẩn (điểm %) là +0,20; -0,15; +0,30; -0,25; +0,10; -0,05; lợi suất của trái phiếu (%) lần lượt là -0,55; +0,50; -0,95; +0,70; -0,35; +0,10. Ước lượng empirical duration.</p>
<details><summary>Xem lời giải</summary>
<p>Hồi quy cho hệ số góc b = -3,0, nên empirical duration = <b>3,0</b>, thấp hơn analytical 4,50.</p>
<p class="tip">BA II Plus: <kbd>2ND</kbd> <kbd>7</kbd> (DATA) nhập X = thay đổi lợi suất, Y = lợi suất trái phiếu; rồi <kbd>2ND</kbd> <kbd>8</kbd> (STAT), chọn LIN, cuộn xuống đến b, được -3.0000.</p></details></div>
<h4>Vì sao hai con số khác nhau?</h4>
<p>Khi kinh tế xấu đi, lợi suất trái phiếu chính phủ thường <b>giảm</b> (dòng tiền tìm nơi an toàn) trong khi credit spread của trái phiếu rủi ro lại <b>nới rộng</b>. Khi kinh tế tốt lên thì ngược lại. Hai biến động này bù trừ nhau, nên giá trái phiếu high-yield phản ứng với lãi suất chuẩn <b>yếu hơn</b> mức duration phân tích dự báo.</p>
<table class="plain"><thead><tr><th>Loại trái phiếu</th><th>Quan hệ empirical so với analytical</th></tr></thead><tbody>
<tr><td>Trái phiếu chính phủ (không có spread đáng kể)</td><td>Gần bằng nhau</td></tr>
<tr><td>Trái phiếu doanh nghiệp xếp hạng cao</td><td>Thấp hơn một chút</td></tr>
<tr><td>Trái phiếu high-yield</td><td>Thấp hơn đáng kể (spread bù trừ lãi suất chuẩn)</td></tr>
</tbody></table>
<p class="warn"><b>Bẫy:</b> empirical duration không phải là "duration chính xác hơn" trong mọi trường hợp. Nó phụ thuộc vào giai đoạn dữ liệu, và quan hệ lịch sử giữa spread với lãi suất có thể thay đổi. Analytical duration vẫn là thước đo chuẩn để so sánh và phòng ngừa.</p>`,
    },
    {
      title: '7. Tóm tắt và bẫy thường gặp',
      minutes: 5,
      html: `
<table class="plain"><thead><tr><th>Tình huống</th><th>Nhớ</th></tr></thead><tbody>
<tr><td>Trái phiếu có quyền chọn</td><td>Dùng effective duration/convexity, vì dòng tiền thay đổi theo lãi suất</td></tr>
<tr><td>Công thức EffDur</td><td>(PV<sub>-</sub> - PV<sub>+</sub>) / (2 × ΔCurve × PV<sub>0</sub>), ΔCurve dạng thập phân</td></tr>
<tr><td>Công thức EffCon</td><td>(PV<sub>-</sub> + PV<sub>+</sub> - 2PV<sub>0</sub>) / ((ΔCurve)<sup>2</sup> × PV<sub>0</sub>), không có số 2 ở mẫu</td></tr>
<tr><td>Callable bond, lãi suất thấp</td><td>Price compression, convexity âm, duration ngắn hơn trái phiếu thường</td></tr>
<tr><td>Putable bond, lãi suất cao</td><td>Giá được đỡ sàn, duration ngắn hơn, convexity dương lớn hơn</td></tr>
<tr><td>%ΔPV</td><td>-EffDur × ΔCurve + ½ × EffCon × (ΔCurve)<sup>2</sup>; hiệu ứng convexity cùng dấu với EffCon</td></tr>
<tr><td>Key rate duration</td><td>Tổng các KRD = EffDur; dùng cho đường cong dịch chuyển không song song</td></tr>
<tr><td>Empirical duration</td><td>Hồi quy dữ liệu lịch sử; với high-yield thường thấp hơn analytical</td></tr>
</tbody></table>
<p>Tiếp theo: tab <b>Luyện tập</b> 10 câu (rút ngẫu nhiên từ ngân hàng 30 câu, mỗi lần làm một bộ khác). Sau đó sang FI-14 Credit Risk, nơi bạn sẽ thấy credit spread chính là phần mà analytical duration giả định là không đổi.</p>`,
    },
  ];

  const glossary = {
    moddur: ['Modified duration', 'Duration điều chỉnh', 'Thước đo theo lợi suất (FI-11): % thay đổi giá xấp xỉ khi YTM thay đổi 1%, giả định dòng tiền không đổi.'],
    embedded: ['Embedded option', 'Quyền chọn nhúng', 'Quyền chọn gắn trong điều khoản trái phiếu (call, put, chuyển đổi, trả trước) khiến dòng tiền phụ thuộc lãi suất.'],
    callable: ['Callable bond', 'Trái phiếu có quyền mua lại', 'Tổ chức phát hành được mua lại trước hạn ở giá call; có lợi cho tổ chức phát hành khi lãi suất giảm.'],
    putable: ['Putable bond', 'Trái phiếu có quyền bán lại', 'Nhà đầu tư được bán lại cho tổ chức phát hành ở giá put; có lợi cho nhà đầu tư khi lãi suất tăng.'],
    effdur: ['Effective duration', 'Duration hiệu dụng', 'Độ nhạy giá theo dịch chuyển song song của đường lợi suất chuẩn, tính bằng mô hình cho phép dòng tiền thay đổi.'],
    effcon: ['Effective convexity', 'Độ lồi hiệu dụng', 'Thước đo độ cong theo đường lợi suất chuẩn; có thể âm với callable bond.'],
    model: ['Option pricing / valuation model', 'Mô hình định giá', 'Mô hình (ví dụ cây nhị thức lãi suất) xác định giá trái phiếu và thời điểm thực hiện quyền chọn ở từng kịch bản lãi suất.'],
    benchcurve: ['Benchmark yield curve', 'Đường lợi suất chuẩn', 'Đường lợi suất của trái phiếu chính phủ hoặc lãi suất swap, dùng làm chuẩn để đo spread và sốc lãi suất.'],
    curvedur: ['Curve duration', 'Duration theo đường cong', 'Nhóm thước đo duration sốc đường lợi suất chuẩn thay vì YTM của trái phiếu; effective duration là ví dụ chính.'],
    compress: ['Price compression', 'Nén giá', 'Giá callable bond khó tăng vượt giá call khi lãi suất giảm, vì khả năng bị mua lại tăng.'],
    negcon: ['Negative convexity', 'Độ lồi âm', 'Giá tăng ít hơn khi lãi suất giảm so với mức giảm giá khi lãi suất tăng cùng một lượng.'],
    frn: ['Floating-rate note (FRN)', 'Trái phiếu lãi suất thả nổi', 'Coupon điều chỉnh định kỳ theo lãi suất tham chiếu; duration rất ngắn.'],
    shaping: ['Shaping risk', 'Rủi ro hình dạng đường cong', 'Rủi ro giá do đường lợi suất thay đổi độ dốc hoặc độ cong, không dịch chuyển song song.'],
    krd: ['Key rate duration', 'Duration theo kỳ hạn then chốt', 'Độ nhạy giá khi chỉ lợi suất của một kỳ hạn chuẩn thay đổi; tổng các KRD bằng effective duration.'],
    partialdur: ['Partial duration', 'Duration từng phần', 'Tên khác của key rate duration.'],
    empdur: ['Empirical duration', 'Duration thực nghiệm', 'Ước lượng từ hồi quy dữ liệu lịch sử giữa % thay đổi giá và thay đổi lợi suất chuẩn.'],
    analdur: ['Analytical duration', 'Duration phân tích', 'Duration tính bằng công thức hoặc mô hình, giả định spread không đổi khi lãi suất chuẩn thay đổi.'],
  };

  const practice = [
    { q: 'Lý do chính khiến effective duration phù hợp hơn modified duration để đo rủi ro lãi suất của trái phiếu callable là:', choices: ['dòng tiền của trái phiếu callable thay đổi khi lãi suất thay đổi', 'trái phiếu callable luôn có convexity âm', 'modified duration không áp dụng được cho trái phiếu trả coupon'], answer: 0, explain: 'Modified duration giả định dòng tiền cố định; với callable bond, thời điểm và số tiền nhận được phụ thuộc vào việc có bị call hay không. Phương án "luôn có convexity âm" sai vì convexity chỉ âm khi lãi suất đủ thấp. Phương án "không áp dụng được cho trái phiếu trả coupon" sai: modified duration dùng tốt cho trái phiếu coupon thường.' },
    { q: 'Một trái phiếu có PV0 = 96,60. Khi đường lợi suất chuẩn giảm 30 bps, giá là 99,10; khi tăng 30 bps, giá là 94,30. Effective duration gần nhất với:', choices: ['16,56', '4,14', '8,28'], answer: 2, explain: '(99,10 - 94,30) / (2 x 0,003 x 96,60) = 4,80 / 0,5796 = 8,28. Lựa chọn 16,56 quên số 2 ở mẫu. Lựa chọn 4,14 dùng nhầm ΔCurve = 0,006 (cả khoảng 60 bps) thay vì 0,003.' },
    { q: 'Một trái phiếu có PV0 = 96,60. Khi đường lợi suất chuẩn giảm 30 bps, giá là 99,10; khi tăng 30 bps, giá là 94,30. Effective convexity gần nhất với:', choices: ['115,02', '230,04', '0,69'], answer: 1, explain: '(99,10 + 94,30 - 2 x 96,60) / (0,003^2 x 96,60) = 0,20 / 0,0008694 = 230,04. Lựa chọn 115,02 thêm số 2 vào mẫu như công thức duration. Lựa chọn 0,69 quên bình phương ΔCurve.' },
    { q: 'Một trái phiếu callable có effective duration 5,2 và effective convexity -80. Nếu đường lợi suất chuẩn tăng 60 bps, % thay đổi giá ước tính gần nhất với:', choices: ['-3,26%', '-3,12%', '-2,98%'], answer: 0, explain: '-5,2 x 0,006 + 0,5 x (-80) x 0,006^2 = -3,12% - 0,144% = -3,26%. Lựa chọn -3,12% bỏ qua convexity. Lựa chọn -2,98% cộng hiệu ứng convexity như thể convexity dương.' },
    { q: 'Khi lãi suất thị trường giảm mạnh xuống dưới coupon, so với một trái phiếu thường tương đương, trái phiếu callable có nhiều khả năng:', choices: ['tăng giá nhiều hơn vì convexity cao hơn', 'tăng giá ít hơn do price compression', 'có effective duration dài hơn'], answer: 1, explain: 'Lãi suất thấp làm quyền call có giá trị, giá bị chặn gần giá call (price compression), convexity âm và duration ngắn lại. Hai phương án "tăng giá nhiều hơn vì convexity cao hơn" và "effective duration dài hơn" mô tả ngược lại.' },
    { q: 'Khi lãi suất tăng mạnh, effective duration của trái phiếu putable so với trái phiếu thường tương đương sẽ:', choices: ['dài hơn, vì nhà đầu tư nắm giữ lâu hơn', 'bằng nhau, vì quyền put không ảnh hưởng duration', 'ngắn hơn, vì khả năng nhà đầu tư bán lại sớm tăng lên'], answer: 2, explain: 'Lãi suất cao làm quyền put có giá trị; trái phiếu hành xử như trái phiếu đáo hạn ở ngày put, nên duration ngắn hơn và giá được đỡ sàn. Hai phương án "dài hơn" và "bằng nhau" sai vì bỏ qua giá trị quyền chọn.' },
    { q: 'Phát biểu nào về key rate duration là đúng?', choices: ['Tổng các key rate duration bằng effective duration của trái phiếu hoặc danh mục', 'Key rate duration chỉ dùng được khi đường cong dịch chuyển song song', 'Key rate duration đo độ nhạy của giá theo thay đổi credit spread'], answer: 0, explain: 'Key rate duration chia effective duration ra theo từng kỳ hạn, nên tổng bằng effective duration. Phương án "chỉ dùng được khi đường cong dịch chuyển song song" sai: mục đích chính là đo dịch chuyển không song song (shaping risk). Phương án đo độ nhạy theo credit spread sai: đó là spread duration (FI-14).' },
    { q: 'Danh mục có key rate duration: 2 năm 1,2; 5 năm 2,5; 10 năm 0,8. Lợi suất 2 năm tăng 30 bps, 5 năm tăng 10 bps, 10 năm giảm 20 bps. % thay đổi giá trị danh mục ước tính gần nhất với:', choices: ['+0,45%', '-0,77%', '-0,45%'], answer: 2, explain: '-(1,2 x 0,30 + 2,5 x 0,10 + 0,8 x (-0,20))% = -(0,36 + 0,25 - 0,16)% = -0,45%. Lựa chọn -0,77% coi cả ba thay đổi đều là tăng. Lựa chọn +0,45% sai dấu.' },
    { q: 'Với trái phiếu doanh nghiệp high-yield, empirical duration thường thấp hơn analytical duration vì:', choices: ['mô hình phân tích bỏ qua coupon', 'credit spread có xu hướng thu hẹp khi lợi suất chuẩn tăng và nới rộng khi lợi suất chuẩn giảm', 'trái phiếu high-yield có kỳ hạn dài hơn'], answer: 1, explain: 'Analytical duration giả định spread không đổi. Thực tế spread biến động ngược chiều lợi suất chuẩn, bù trừ một phần ảnh hưởng, nên độ nhạy quan sát được thấp hơn. Phương án "bỏ qua coupon" sai: mô hình có tính coupon. Phương án "kỳ hạn dài hơn" không liên quan và kỳ hạn dài hơn còn làm duration lớn hơn.' },
    { q: 'Empirical duration được xác định bằng cách:', choices: ['hồi quy % thay đổi giá trái phiếu theo thay đổi lợi suất chuẩn trên dữ liệu lịch sử', 'tính trung bình có trọng số thời gian của các dòng tiền', 'sốc đường lợi suất chuẩn lên xuống trong mô hình định giá'], answer: 0, explain: 'Empirical duration dựa trên dữ liệu quan sát. Trung bình có trọng số thời gian của các dòng tiền là Macaulay duration (FI-10). Sốc đường lợi suất chuẩn trong mô hình định giá là cách tính effective duration (analytical).' },
    { q: 'Mô hình định giá cho một trái phiếu putable: PV0 = 101,20; khi đường lợi suất chuẩn giảm 25 bps giá là 103,40; khi tăng 25 bps giá là 99,30. Effective duration gần nhất với:', choices: ['16,21', '8,10', '0,81'], answer: 1, explain: 'EffDur = (103,40 - 99,30)/(2 x 0,0025 x 101,20) = 4,10/0,506 = 8,10. Lựa chọn 16,21 quên số 2 ở mẫu. Lựa chọn 0,81 nhập ΔCurve = 0,025 thay vì 0,0025.' },
    { q: 'Mô hình định giá cho một trái phiếu callable: PV0 = 99,80; khi đường lợi suất chuẩn giảm 50 bps giá là 101,30; khi tăng 50 bps giá là 98,20. Effective convexity gần nhất với:', choices: ['+40,08', '-20,04', '-40,08'], answer: 2, explain: 'EffCon = (101,30 + 98,20 - 2 x 99,80)/(0,005^2 x 99,80) = -0,10/0,002495 = -40,08. Convexity âm: giá tăng 1,50 khi lãi suất giảm nhưng giảm 1,60 khi lãi suất tăng (price compression). Lựa chọn -20,04 thêm số 2 vào mẫu như công thức duration. Lựa chọn +40,08 sai dấu tử số.' },
    { q: 'Một trái phiếu có effective duration 4,5 và effective convexity 60. Đường lợi suất chuẩn giảm 120 bps. % thay đổi giá ước tính gần nhất với:', choices: ['+4,97%', '+5,40%', '+5,83%'], answer: 2, explain: '%ΔPV ≈ -4,5 x (-0,012) + ½ x 60 x 0,012^2 = 5,40% + 0,43% = +5,83%. Lựa chọn +4,97% trừ hiệu ứng convexity dù EffCon dương. Lựa chọn +5,40% bỏ qua convexity.' },
    { q: 'Một trái phiếu callable có effective duration 3,2 và effective convexity -150. Đường lợi suất chuẩn giảm 100 bps. % thay đổi giá ước tính gần nhất với:', choices: ['+2,45%', '+3,20%', '+3,95%'], answer: 0, explain: '%ΔPV ≈ -3,2 x (-0,01) + ½ x (-150) x 0,01^2 = 3,20% - 0,75% = +2,45%. Convexity âm làm giá tăng ít hơn mức duration dự báo. Lựa chọn +3,95% cộng hiệu ứng convexity như thể EffCon dương. Lựa chọn +3,20% bỏ qua convexity.' },
    { q: 'Khi tính effective duration, nhà phân tích dịch chuyển đường lợi suất chuẩn lên và xuống trong mô hình định giá. Yếu tố nào được giữ nguyên trong các kịch bản đó?', choices: ['Dòng tiền của trái phiếu', 'Credit spread của trái phiếu', 'Giá trị của quyền chọn nhúng'], answer: 1, explain: 'Effective duration sốc đường lợi suất chuẩn và giữ credit spread không đổi. Dòng tiền và giá trị quyền chọn được phép thay đổi theo kịch bản lãi suất, đó chính là điểm khác biệt với yield duration. Hai phương án "dòng tiền" và "giá trị quyền chọn" vì vậy sai.' },
    { q: 'Hai nhà phân tích tính effective duration của cùng một trái phiếu callable và ra kết quả khác nhau. Lý do có nhiều khả năng nhất là:', choices: ['effective duration chỉ áp dụng cho trái phiếu không có quyền chọn', 'một người dùng YTM, người kia dùng current yield', 'họ dùng mô hình định giá hoặc giả định khác nhau (ví dụ biến động lãi suất)'], answer: 2, explain: 'Effective duration phụ thuộc vào mô hình xác định khi nào quyền chọn được thực hiện; giả định về biến động lãi suất hay hành vi trả trước khác nhau cho giá PV-, PV+ khác nhau. Effective duration không dùng YTM hay current yield. Phương án "chỉ cho trái phiếu không có quyền chọn" ngược với mục đích chính của thước đo.' },
    { q: 'Với trái phiếu không có quyền chọn và đường lợi suất chuẩn phẳng, effective duration so với modified duration nhiều khả năng:', choices: ['gần như bằng nhau', 'lớn hơn nhiều', 'nhỏ hơn nhiều'], answer: 0, explain: 'Dòng tiền của trái phiếu thường không phụ thuộc lãi suất, và khi đường cong phẳng, sốc đường cong tương đương sốc YTM. Vì vậy hai thước đo gần như trùng nhau. Khác biệt lớn chỉ xuất hiện với trái phiếu có quyền chọn.' },
    { q: 'Với chứng khoán đảm bảo bằng thế chấp (MBS), nơi người vay có thể trả nợ trước hạn khi lãi suất giảm, thước đo rủi ro lãi suất phù hợp nhất là:', choices: ['Macaulay duration', 'effective duration', 'modified duration'], answer: 1, explain: 'Trả nợ trước hạn làm dòng tiền MBS thay đổi theo lãi suất, nên cần thước đo cho phép dòng tiền thay đổi: effective duration (curve duration). Modified và Macaulay duration giả định dòng tiền cố định nên không phù hợp.' },
    { q: 'Khi lãi suất thị trường cao hơn nhiều so với coupon, effective duration của trái phiếu callable so với trái phiếu thường tương đương nhiều khả năng:', choices: ['ngắn hơn nhiều', 'dài hơn nhiều', 'gần như bằng nhau'], answer: 2, explain: 'Lãi suất cao làm quyền call gần như vô giá trị (khó có khả năng bị mua lại), nên callable bond hành xử gần như trái phiếu thường, duration gần bằng. Phương án "ngắn hơn nhiều" đúng khi lãi suất thấp và quyền call có giá trị. Effective duration của trái phiếu có quyền chọn không lớn hơn của trái phiếu thường tương đương, nên "dài hơn nhiều" sai.' },
    { q: 'Khi lãi suất thị trường thấp hơn nhiều so với coupon, trái phiếu putable so với trái phiếu thường tương đương nhiều khả năng:', choices: ['hành xử gần như giống nhau vì quyền put ít giá trị', 'có convexity âm', 'có duration ngắn hơn nhiều vì nhà đầu tư sẽ bán lại'], answer: 0, explain: 'Lãi suất thấp làm giá trái phiếu cao hơn nhiều so với giá put, nên nhà đầu tư không bán lại và quyền put gần như vô giá trị: putable hành xử như trái phiếu thường. Duration ngắn hơn xảy ra khi lãi suất cao. Putable bond có convexity dương, không âm.' },
    { q: 'Một trái phiếu có key rate duration: 2 năm 0,3; 5 năm 1,2; 10 năm 2,5; 30 năm 3,0. Nếu toàn bộ đường lợi suất chuẩn tăng song song 50 bps, % thay đổi giá ước tính gần nhất với:', choices: ['-0,88%', '-3,50%', '-1,50%'], answer: 1, explain: 'Tổng KRD = effective duration = 0,3 + 1,2 + 2,5 + 3,0 = 7,0. Với dịch chuyển song song: %ΔPV ≈ -7,0 x 0,005 = -3,50%. Lựa chọn -0,88% dùng KRD trung bình 1,75 thay vì tổng. Lựa chọn -1,50% chỉ dùng KRD lớn nhất 3,0.' },
    { q: 'Danh mục có key rate duration: 2 năm 1,0; 10 năm 4,0; 30 năm 2,0. Đường cong dốc thêm: lợi suất 2 năm giảm 20 bps, 10 năm tăng 10 bps, 30 năm tăng 30 bps. % thay đổi giá trị danh mục ước tính gần nhất với:', choices: ['-1,20%', '+0,80%', '-0,80%'], answer: 2, explain: '%ΔPV ≈ -(1,0 x (-0,20) + 4,0 x 0,10 + 2,0 x 0,30)% = -(-0,20 + 0,40 + 0,60)% = -0,80%. Lựa chọn +0,80% sai dấu tổng thể. Lựa chọn -1,20% coi lợi suất 2 năm cũng tăng 20 bps.' },
    { q: 'Rủi ro giá trái phiếu phát sinh khi đường lợi suất thay đổi độ dốc hoặc độ cong (không dịch chuyển song song) được gọi là:', choices: ['shaping risk', 'rủi ro tái đầu tư', 'rủi ro tín dụng'], answer: 0, explain: 'Shaping risk là rủi ro do hình dạng đường cong thay đổi; key rate duration được dùng để đo nó. Rủi ro tái đầu tư liên quan đến lãi suất tái đầu tư coupon. Rủi ro tín dụng liên quan đến khả năng vỡ nợ và spread.' },
    { q: 'Một trái phiếu zero-coupon 10 năm không có quyền chọn. Key rate duration của nó tại các kỳ hạn chuẩn 2 năm và 5 năm nhiều khả năng:', choices: ['bằng effective duration của trái phiếu', 'xấp xỉ bằng 0', 'mỗi kỳ hạn bằng một nửa effective duration'], answer: 1, explain: 'Zero-coupon chỉ có một dòng tiền ở năm 10, nên giá chỉ nhạy với lãi suất kỳ hạn 10 năm; key rate duration ở các kỳ hạn khác xấp xỉ 0, và toàn bộ effective duration nằm ở kỳ hạn 10 năm. Hai phương án còn lại chia effective duration cho các kỳ hạn không có dòng tiền.' },
    { q: 'Danh mục có giá trị 100,00. Khi chỉ lợi suất chuẩn 5 năm tăng 10 bps (các kỳ hạn khác giữ nguyên), giá trị danh mục giảm còn 99,85. Key rate duration 5 năm gần nhất với:', choices: ['0,75', '15,00', '1,50'], answer: 2, explain: 'KRD5 = -(1/PV) x ΔPV/Δr5 = -(1/100) x (-0,15)/0,001 = 1,50. Lựa chọn 0,75 thêm số 2 vào mẫu như công thức effective duration dùng hai phía, trong khi ở đây chỉ có một kịch bản. Lựa chọn 15,00 nhập Δr = 0,0001 (1 bp) thay vì 0,001.' },
    { q: 'Một trái phiếu doanh nghiệp có effective duration 5,50. Bốn tháng gần đây, thay đổi lợi suất chuẩn (điểm %) là +0,10; -0,20; +0,30; -0,20, và % thay đổi giá trái phiếu là -0,45; +0,70; -1,15; +0,90. Empirical duration ước lượng bằng hồi quy gần nhất với:', choices: ['3,94', '5,50', '-3,94'], answer: 0, explain: 'Trung bình X và Y đều bằng 0. Hệ số góc b = Σxy/Σx^2 = (-0,045 - 0,14 - 0,345 - 0,18)/(0,01 + 0,04 + 0,09 + 0,04) = -0,71/0,18 = -3,94. Empirical duration = -b = 3,94, thấp hơn analytical 5,50. Lựa chọn -3,94 quên đổi dấu hệ số góc. Lựa chọn 5,50 là effective (analytical) duration, không phải ước lượng từ dữ liệu.' },
    { q: 'Với trái phiếu chính phủ không có rủi ro tín dụng đáng kể, empirical duration so với analytical duration nhiều khả năng:', choices: ['thấp hơn đáng kể', 'gần bằng nhau', 'cao hơn đáng kể'], answer: 1, explain: 'Khác biệt giữa empirical và analytical duration chủ yếu đến từ việc credit spread biến động ngược chiều lợi suất chuẩn. Trái phiếu chính phủ gần như không có spread, nên hai thước đo gần bằng nhau. "Thấp hơn đáng kể" là đặc điểm của trái phiếu high-yield. Không có lý do để empirical cao hơn đáng kể.' },
    { q: 'Trong một giai đoạn suy thoái, lợi suất trái phiếu chính phủ giảm 50 bps trong khi credit spread của một trái phiếu high-yield tăng 80 bps. Trái phiếu có analytical duration 4,0. Bỏ qua convexity, % thay đổi giá thực tế gần nhất với:', choices: ['-5,20%', '+2,00%', '-1,20%'], answer: 2, explain: 'Lợi suất của trái phiếu thay đổi -0,50% + 0,80% = +0,30%, nên %ΔP ≈ -4,0 x 0,003 = -1,20%. Lựa chọn +2,00% chỉ dùng thay đổi lợi suất chuẩn, đúng giả định spread không đổi của analytical duration. Lựa chọn -5,20% cộng độ lớn hai thay đổi (1,30%) mà bỏ qua chiều ngược nhau. Ví dụ này cho thấy vì sao empirical duration của trái phiếu high-yield thấp hơn analytical.' },
    { q: 'Thước đo nào sau đây KHÔNG phải là một dạng analytical duration?', choices: ['Empirical duration', 'Effective duration', 'Key rate duration'], answer: 0, explain: 'Empirical duration được ước lượng từ dữ liệu giá lịch sử bằng hồi quy. Effective duration và key rate duration (cũng như Macaulay, modified duration) được tính từ công thức hoặc mô hình định giá, nên đều là analytical duration.' },
    { q: 'Vị thế trái phiếu có giá trị 2.000.000 USD, effective duration 6,0 và effective convexity 50. Đường lợi suất chuẩn tăng 40 bps. Thay đổi giá trị ước tính gần nhất với:', choices: ['-48.800 USD', '-47.200 USD', '-48.000 USD'], answer: 1, explain: '%ΔPV ≈ -6,0 x 0,004 + ½ x 50 x 0,004^2 = -2,40% + 0,04% = -2,36%; ΔV = 2.000.000 x (-2,36%) = -47.200 USD. Lựa chọn -48.000 USD bỏ qua convexity. Lựa chọn -48.800 USD trừ hiệu ứng convexity dù EffCon dương.' },
  ];

  const widgets = {
    effChange(el) {
      el.innerHTML = `
        <div class="w-row"><label>Effective duration: <b data-o="d">6,8</b><input type="range" min="0" max="15" step="0.1" value="6.8" data-i="d"></label>
        <label>Effective convexity: <b data-o="c">95</b><input type="range" min="-150" max="300" step="5" value="95" data-i="c"></label>
        <label>ΔCurve: <b data-o="y">+75 bps</b><input type="range" min="-200" max="200" step="5" value="75" data-i="y"></label></div>
        <div class="w-out"><div class="w-price" data-o="p"></div><div class="w-bar"><span data-o="bar"></span><i></i></div><div class="w-note" data-o="note"></div></div>`;
      const q = s => el.querySelector(s);
      const f = (x, k = 2) => x.toFixed(k).replace('.', ',');
      const upd = () => {
        const d = +q('[data-i="d"]').value, c = +q('[data-i="c"]').value, bp = +q('[data-i="y"]').value, y = bp / 10000;
        const de = -d * y * 100, ce = 0.5 * c * y * y * 100, tot = de + ce;
        q('[data-o="d"]').textContent = f(d, 1);
        q('[data-o="c"]').textContent = String(c);
        q('[data-o="y"]').textContent = `${bp > 0 ? '+' : ''}${bp} bps`;
        q('[data-o="p"]').textContent = `%ΔPV ≈ ${f(tot)}%`;
        q('[data-o="bar"]').style.width = `${Math.min(100, Math.max(0, 50 + tot * 2.5))}%`;
        q('[data-o="note"]').textContent = `Hiệu ứng duration ${f(de)}% · hiệu ứng convexity ${f(ce)}%. ${c < 0 ? 'Convexity âm (kiểu callable): thiệt ở cả hai chiều.' : 'Convexity dương: có lợi cho người nắm giữ ở cả hai chiều.'}`;
      };
      el.addEventListener('input', upd);
      upd();
    },
  };

  window.LESSONS['FI-13'] = {
    moduleId: 'FI-13',
    calculator: 'BA II Plus',
    warmup: [
      'Ôn FI-11/FI-12: viết công thức ước tính % thay đổi giá theo modified duration và convexity.',
      'Vì sao một công ty phát hành trái phiếu callable lại muốn mua lại trái phiếu khi lãi suất giảm?',
      'Đoán trước: nếu đường lợi suất ngắn hạn tăng còn dài hạn giảm, một con số duration duy nhất có đủ để đo rủi ro không?',
    ],
    sections,
    glossary,
    practice,
    widgets,
    slides: [],
    wrapup: [
      'Viết lại hai công thức effective duration và effective convexity, đánh dấu chỗ khác nhau ở mẫu số.',
      'Vẽ phác đường giá - lợi suất của callable và putable bond so với trái phiếu thường.',
      'Giải thích bằng lời của bạn vì sao empirical duration của trái phiếu high-yield thấp hơn analytical duration.',
    ],
  };
}());
