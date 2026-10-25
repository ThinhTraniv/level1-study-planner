// Bài giảng EQ-08 - Financial Statement Forecasting in Equity Valuation (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t, frac, keys } = window.CFAH;

  const sections = [
    {
      title: '1. Bức tranh lớn',
      minutes: 5,
      html: `
<p>Ở EQ-06 và EQ-07, đề bài luôn <b>cho sẵn</b> cổ tức năm tới, FCFE, EPS dự báo hay EBITDA. Trong thực tế, không ai cho bạn những con số đó. Nhà phân tích phải tự tạo ra chúng bằng một ${t('model', 'mô hình dự phóng báo cáo tài chính')}.</p>
<div class="key">Mô hình dự phóng = dự báo báo cáo kết quả kinh doanh, bảng cân đối và lưu chuyển tiền tệ cho vài năm tới, dựa trên các ${t('driver', 'yếu tố dẫn dắt (drivers)')} như tăng trưởng doanh thu, biên lợi nhuận, vốn lưu động, đầu tư. Đầu ra của mô hình (dòng tiền tự do, EPS, EBITDA) là <b>đầu vào</b> cho mô hình DCF và mô hình bội số.</div>
<ol>
  <li><b>Lý do, cách xây dựng và công dụng</b> của mô hình dự phóng. Ứng với LOS 1 (phần 2, 3).</li>
  <li><b>Đánh giá cấu trúc mô hình</b> theo đặc điểm của công ty. Ứng với LOS 2 (phần 4).</li>
  <li><b>Ước tính và diễn giải giá trị</b> từ đầu ra của mô hình. Ứng với LOS 3 (phần 5).</li>
</ol>
<p class="tip">Module FSA-12 (Introduction to Financial Statement Modeling) dạy kỹ thuật dự phóng từng khoản mục. Ở đây ta tập trung vào việc <b>dùng</b> mô hình để định giá cổ phiếu. Phần 5 dùng hàm <kbd>CF</kbd> / <kbd>NPV</kbd> của BA II Plus.</p>`,
    },
    {
      title: '2. Vì sao cần mô hình dự phóng?',
      minutes: 10,
      html: `
<h4>Lý do</h4>
<p>Giá trị cổ phiếu phụ thuộc vào <b>tương lai</b>, còn báo cáo tài chính chỉ kể về <b>quá khứ</b>. Mô hình dự phóng là cầu nối: nó biến hiểu biết của nhà phân tích về ngành, chiến lược, vị thế cạnh tranh (EQ-09, EQ-10) thành các con số cụ thể, nhất quán với nhau.</p>
<p>Ưu điểm lớn nhất của mô hình ba báo cáo là <b>tính nhất quán nội tại</b>: muốn doanh thu tăng 20% thì phải có thêm tồn kho, phải thu, nhà xưởng; muốn có thêm tài sản thì phải có nguồn tài trợ (lợi nhuận giữ lại, vay, phát hành). Nếu chỉ đoán EPS "bằng cảm giác", những ràng buộc này dễ bị bỏ qua.</p>
<h4>Công dụng</h4>
<table class="plain"><thead><tr><th>Công dụng</th><th>Ví dụ</th></tr></thead><tbody>
<tr><td>Tạo đầu vào cho định giá</td><td>FCFF, FCFE, cổ tức cho DCF; EPS, EBITDA dự phóng cho bội số forward</td></tr>
<tr><td>${t('scenario', 'Phân tích kịch bản')} và ${t('sensitivity', 'độ nhạy')}</td><td>Giá trị thay đổi bao nhiêu nếu tăng trưởng thấp hơn 2%, biên lợi nhuận giảm 1%?</td></tr>
<tr><td>Kiểm tra kỳ vọng của thị trường</td><td>Mức tăng trưởng nào thì mô hình cho đúng bằng giá hiện tại? Có hợp lý không?</td></tr>
<tr><td>Xác định ${t('catalyst', 'chất xúc tác (catalyst)')} và theo dõi</td><td>So kết quả thực tế từng quý với dự phóng để cập nhật quan điểm</td></tr>
<tr><td>Đánh giá khả năng tài chính</td><td>Công ty có đủ tiền cho kế hoạch đầu tư không? Có cần vay thêm, có vi phạm điều kiện vay không?</td></tr>
</tbody></table>
<p class="warn">Mô hình chỉ tốt bằng giả định của nó. Một bảng tính đẹp với 300 dòng không làm cho giả định tăng trưởng 25%/năm trong 10 năm trở nên hợp lý hơn. Đề thi hay hỏi: nhà phân tích nên tập trung vào <b>vài yếu tố dẫn dắt quan trọng nhất</b> thay vì dự báo chi tiết mọi dòng.</p>`,
    },
    {
      title: '3. Xây dựng mô hình',
      minutes: 22,
      html: `
<h4>Các bước</h4>
<ol>
<li><b>Phân tích lịch sử</b>: tốc độ tăng doanh thu, biên lợi nhuận, số ngày vốn lưu động, capex / doanh thu của 3 - 5 năm qua. Đây là điểm xuất phát, không phải câu trả lời.</li>
<li><b>Dự báo doanh thu</b>, khoản mục quan trọng nhất vì gần như mọi dòng khác dựa vào nó.</li>
<li><b>Dự báo chi phí</b>: giá vốn, chi phí bán hàng và quản lý (theo % doanh thu, hoặc tách định phí / biến phí), khấu hao.</li>
<li><b>Dự báo bảng cân đối</b>: vốn lưu động theo số ngày hoặc % doanh thu; tài sản cố định = đầu kỳ + capex - khấu hao.</li>
<li><b>Tài trợ, lãi vay, thuế</b>: nợ vay theo kế hoạch hoặc cơ cấu vốn mục tiêu; lãi vay = lãi suất × dư nợ; thuế theo thuế suất hiệu dụng.</li>
<li><b>Cân bằng và liên kết</b>: lợi nhuận giữ lại nối báo cáo kết quả kinh doanh với bảng cân đối; tiền (hoặc ${t('revolver', 'khoản vay hạn mức')}) là biến "cân bằng" để tài sản = nợ + vốn chủ.</li>
<li><b>Tính dòng tiền tự do</b> và đưa sang mô hình định giá.</li>
</ol>

<h4>Ba cách dự báo doanh thu</h4>
<table class="plain"><thead><tr><th>Cách</th><th>Ý tưởng</th><th>Ví dụ</th></tr></thead><tbody>
<tr><td>${t('topdown', 'Từ trên xuống (top-down)')}</td><td>Bắt đầu từ kinh tế vĩ mô hoặc quy mô thị trường</td><td>Doanh thu = quy mô thị trường × thị phần; hoặc tăng trưởng = tăng GDP danh nghĩa + chênh lệch</td></tr>
<tr><td>${t('bottomup', 'Từ dưới lên (bottom-up)')}</td><td>Bắt đầu từ hoạt động của chính công ty</td><td>Sản lượng × giá bán; số cửa hàng × doanh thu mỗi cửa hàng; năng lực sản xuất × công suất</td></tr>
<tr><td>Hỗn hợp (hybrid)</td><td>Kết hợp cả hai, đối chiếu chéo</td><td>Dự báo từng mảng bottom-up, rồi kiểm tra tổng thị phần ngầm định có hợp lý không</td></tr>
</tbody></table>
<div class="example"><div class="ex-h">Ví dụ 3.1 - Bottom-up</div>
<p>Một nhà máy bán 10 triệu sản phẩm năm 2025 với giá bình quân 100 (doanh thu 1.000). Năm 2026 sản lượng dự kiến tăng 5%, giá tăng 3%. Doanh thu 2026?</p>
<details><summary>Xem lời giải</summary><p>1.000 × 1,05 × 1,03 = <b>1.081,5</b>, tức tăng 8,15%, không phải 5% + 3% = 8%. Hai tác động nhân với nhau.</p></details></div>

<div class="example"><div class="ex-h">Ví dụ 3.2 - Mô hình rút gọn của công ty An Phát</div>
<p>Năm 2025: doanh thu 1.000, vốn lưu động 100. Giả định: doanh thu tăng 8%, 7%, 6% trong 2026 - 2028, từ 2029 tăng 3% mãi mãi. Biên lợi nhuận gộp 40%; chi phí bán hàng và quản lý 25% doanh thu (nên biên EBIT 15%); khấu hao 4% doanh thu (đã nằm trong chi phí); capex 6% doanh thu; vốn lưu động 10% doanh thu; thuế suất 20%. Dự phóng FCFF.</p>
<details><summary>Xem lời giải</summary>
<p>FCFF = EBIT × (1 - t) + Khấu hao - Capex - Tăng vốn lưu động.</p>
<table class="plain"><thead><tr><th></th><th>2026</th><th>2027</th><th>2028</th><th>2029</th></tr></thead><tbody>
<tr><td>Doanh thu</td><td>1.080,00</td><td>1.155,60</td><td>1.224,94</td><td>1.261,68</td></tr>
<tr><td>EBIT (15%)</td><td>162,00</td><td>173,34</td><td>183,74</td><td>189,25</td></tr>
<tr><td>EBITDA (19%)</td><td>205,20</td><td>219,56</td><td>232,74</td><td>239,72</td></tr>
<tr><td>EBIT × (1 - 20%)</td><td>129,60</td><td>138,67</td><td>146,99</td><td>151,40</td></tr>
<tr><td>+ Khấu hao (4%)</td><td>43,20</td><td>46,22</td><td>49,00</td><td>50,47</td></tr>
<tr><td>- Capex (6%)</td><td>64,80</td><td>69,34</td><td>73,50</td><td>75,70</td></tr>
<tr><td>- Tăng vốn lưu động</td><td>8,00</td><td>7,56</td><td>6,93</td><td>3,67</td></tr>
<tr><td><b>FCFF</b></td><td><b>100,00</b></td><td><b>108,00</b></td><td><b>115,56</b></td><td><b>122,49</b></td></tr>
</tbody></table>
<p>Tăng vốn lưu động 2026 = 10% × (1.080 - 1.000) = 8. Chú ý: vốn lưu động phụ thuộc vào <b>phần tăng</b> doanh thu, nên khi tăng trưởng chậm lại, FCFF tăng nhanh hơn doanh thu.</p></details></div>
<p class="tip">Trong mô hình đầy đủ còn có lãi vay và lợi nhuận ròng. Ví dụ An Phát có nợ 400, lãi suất 6%: lãi vay 2026 = 24, lợi nhuận ròng = (162 - 24) × 0,8 = 110,4, EPS (50 triệu cổ phiếu) = 2,21. Nếu lãi vay phụ thuộc vào dư nợ, mà dư nợ lại phụ thuộc vào dòng tiền sau lãi vay, mô hình có ${t('circular', 'vòng lặp (circular reference)')}; thường xử lý bằng cách tính lãi trên dư nợ đầu kỳ.</p>`,
    },
    {
      title: '4. Đánh giá cấu trúc mô hình theo đặc điểm công ty',
      minutes: 15,
      html: `
<p>Không có một mẫu mô hình cho mọi công ty. Một mô hình tốt đặt <b>nhiều chi tiết nhất vào những yếu tố quyết định giá trị</b> của chính công ty đó.</p>
<table class="plain"><thead><tr><th>Loại công ty</th><th>Yếu tố dẫn dắt nên mô hình hóa kỹ</th><th>Lưu ý cấu trúc</th></tr></thead><tbody>
<tr><td>Trưởng thành, ổn định (hàng tiêu dùng)</td><td>Tăng trưởng theo GDP, giá bán, biên lợi nhuận</td><td>Giai đoạn dự báo ngắn (3 - 5 năm) là đủ; dễ đạt trạng thái ổn định</td></tr>
<tr><td>Tăng trưởng cao (công nghệ)</td><td>Số người dùng, doanh thu mỗi khách hàng, tốc độ giảm tăng trưởng, biên lợi nhuận mục tiêu</td><td>Giai đoạn dự báo dài (10 năm trở lên) để tăng trưởng giảm dần về mức bền vững; nhiều kịch bản</td></tr>
<tr><td>Chu kỳ, thâm dụng vốn (thép, xi măng, hàng hóa)</td><td>Giá hàng hóa, công suất sử dụng, chi phí đầu vào, chu kỳ capex</td><td>Giai đoạn dự báo bao trọn ít nhất một chu kỳ; giá trị cuối kỳ dựa trên biên lợi nhuận <b>giữa chu kỳ</b>, không phải đỉnh</td></tr>
<tr><td>Ngân hàng, bảo hiểm</td><td>Dư nợ cho vay, tiền gửi, biên lãi ròng, chi phí dự phòng, vốn tự có</td><td>Không dùng doanh thu / giá vốn / vốn lưu động như công ty sản xuất; nợ là "nguyên liệu" kinh doanh nên thường định giá vốn chủ trực tiếp (FCFE, cổ tức, residual income, P/B)</td></tr>
<tr><td>Nhiều mảng kinh doanh</td><td>Từng mảng có tăng trưởng và biên khác nhau</td><td>Dự báo theo từng mảng (bottom-up) rồi cộng lại</td></tr>
</tbody></table>

<h4>Các câu hỏi kiểm tra một mô hình</h4>
<ul>
<li><b>Giai đoạn dự báo</b> có kéo dài đến khi công ty đạt ${t('steady', 'trạng thái ổn định (steady state)')} chưa: tăng trưởng, biên lợi nhuận, tỷ suất sinh lời trên vốn không còn thay đổi?</li>
<li><b>Giả định có nhất quán</b> không: tăng trưởng doanh thu cao nhưng capex thấp hơn khấu hao là đáng ngờ; ở trạng thái ổn định, capex thường lớn hơn khấu hao nếu công ty còn tăng trưởng.</li>
<li><b>So với lịch sử và đối thủ</b>: biên lợi nhuận vượt xa mức tốt nhất của ngành cần lý do rõ ràng (lợi thế cạnh tranh).</li>
<li><b>Tăng trưởng dài hạn</b> có vượt tăng trưởng GDP danh nghĩa không? Không công ty nào lớn hơn nền kinh tế mãi mãi.</li>
<li><b>Kỹ thuật</b>: bảng cân đối có cân không, dòng tiền có khớp với thay đổi của tiền không, có vòng lặp chưa xử lý không?</li>
</ul>
<p class="tip">Mô hình An Phát ở ví dụ 3.2 phù hợp với một công ty sản xuất trưởng thành: tăng trưởng giảm dần từ 8% về 3%, biên lợi nhuận ổn định, capex (6%) lớn hơn khấu hao (4%) vì công ty vẫn tăng trưởng. Nếu An Phát là ngân hàng, cấu trúc này hoàn toàn không phù hợp.</p>`,
    },
    {
      title: '5. Từ đầu ra của mô hình đến giá trị cổ phiếu',
      minutes: 20,
      html: `
<h4>Các bước</h4>
<ol>
<li>Chiết khấu FCFF các năm dự báo chi tiết ở WACC.</li>
<li>Tính ${t('tv', 'giá trị cuối kỳ')} ở cuối giai đoạn dự báo: Gordon trên FCFF năm kế tiếp, hoặc bội số (EV/EBITDA) × EBITDA.</li>
<li>Giá trị doanh nghiệp = PV(FCFF) + PV(giá trị cuối kỳ).</li>
<li>Giá trị vốn chủ = EV - nợ - cổ phiếu ưu đãi - lợi ích không kiểm soát + tiền (và tài sản ngoài hoạt động).</li>
<li>Chia cho số cổ phiếu đang lưu hành, so với giá thị trường.</li>
</ol>
<div class="example"><div class="ex-h">Ví dụ 5.1 - Định giá An Phát</div>
<p>Dùng FCFF ở ví dụ 3.2. WACC 9%, tăng trưởng dài hạn 3%. Nợ ròng (nợ 400 - tiền 100) là 300; có 50 triệu cổ phiếu; giá thị trường 27. Tính giá trị mỗi cổ phiếu.</p>
<details><summary>Xem lời giải</summary>
<p>Giá trị cuối kỳ tại 2028 = FCFF<sub>2029</sub> / (WACC - g) = 122,4936 / 6% = 2.041,56.<br>Dòng tiền năm 2028 trong bảng CF = 115,56 + 2.041,56 = 2.157,12.</p>
${keys([
  ['Mở CF, xóa dữ liệu cũ', '[CF] [2ND] [CE/C]', 'CF0 = 0'],
  ['C01 = FCFF 2026', '[↓] 100 [ENTER] [↓]', 'F01 = 1'],
  ['C02 = FCFF 2027', '[↓] 108 [ENTER] [↓]', 'F02 = 1'],
  ['C03 = FCFF 2028 + TV', '[↓] 2157.12 [ENTER]', 'C03 = 2,157.12'],
  ['WACC', '[NPV] 9 [ENTER]', 'I = 9'],
  ['Tính', '[↓] [CPT]', 'NPV = 1,848.3370'],
])}
<p>EV = <b>1.848,34</b>. Trong đó PV của giá trị cuối kỳ = 2.041,56 / 1,09<sup>3</sup> = 1.576,46, chiếm khoảng <b>85%</b>.<br>
Giá trị vốn chủ = 1.848,34 - 300 = 1.548,34; mỗi cổ phiếu = <b>30,97</b>.<br>
So với giá 27: giá trị cao hơn giá khoảng 14,7%, nên theo mô hình, An Phát có vẻ <b>bị định giá thấp</b>.</p></details></div>

<h4>Kiểm tra bằng bội số ngầm định</h4>
<p>Giá trị 30,97 tương đương EV / EBITDA 2026 = 1.848,34 / 205,2 = <b>9,0 lần</b> và P/E forward = 30,97 / 2,21 = <b>14,0 lần</b>. Nếu các công ty tương tự giao dịch ở EV/EBITDA khoảng 8 - 10, kết quả DCF là hợp lý. Nếu nhóm chỉ ở 5 lần, cần xem lại giả định. Đây là cách kết hợp EQ-06 và EQ-07.</p>

<h4>Bảng độ nhạy: giá trị mỗi cổ phiếu</h4>
<table class="plain"><thead><tr><th>WACC \\ g dài hạn</th><th>2%</th><th>3%</th><th>4%</th></tr></thead><tbody>
<tr><td>8%</td><td>31,95</td><td>38,43</td><td>48,16</td></tr>
<tr><td>9%</td><td>26,46</td><td><b>30,97</b></td><td>37,27</td></tr>
<tr><td>10%</td><td>22,35</td><td>25,63</td><td>30,02</td></tr>
</tbody></table>
<p>Với các giả định hợp lý, giá trị dao động từ 22,35 đến 48,16. Giá 27 nằm trong vùng này. Kết luận đúng: "ở giả định cơ sở, An Phát có vẻ rẻ khoảng 15%, nhưng nếu WACC là 10% thì cổ phiếu đã được định giá gần hợp lý". Kết quả mô hình là một <b>khoảng</b> và một lập luận, không phải một con số chắc chắn.</p>
<p class="warn"><b>Diễn giải đầu ra:</b> (1) giá trị cuối kỳ chiếm phần lớn thì giả định dài hạn quan trọng hơn chi tiết 3 năm đầu; (2) đối chiếu bội số ngầm định với nhóm so sánh; (3) xác định giả định nào thị trường phải tin để giá hiện tại là đúng; (4) báo cáo kịch bản xấu, cơ sở, tốt.</p>`,
    },
    {
      title: '6. Tóm tắt và bẫy thường gặp',
      minutes: 8,
      html: `
<table class="plain"><thead><tr><th>Tình huống</th><th>Nhớ</th></tr></thead><tbody>
<tr><td>Vì sao cần mô hình</td><td>Tạo đầu vào nhất quán cho DCF và bội số; phân tích kịch bản; kiểm tra kỳ vọng thị trường</td></tr>
<tr><td>Doanh thu</td><td>Top-down (thị trường × thị phần), bottom-up (sản lượng × giá), hybrid. Tăng sản lượng và giá thì nhân, không cộng</td></tr>
<tr><td>Vốn lưu động</td><td>Tăng vốn lưu động = tỷ lệ × <b>phần tăng</b> doanh thu</td></tr>
<tr><td>FCFF</td><td>EBIT(1 - t) + khấu hao - capex - tăng vốn lưu động</td></tr>
<tr><td>Cấu trúc theo công ty</td><td>Tăng trưởng cao: dự báo dài; chu kỳ: bao trọn chu kỳ, biên giữa chu kỳ; ngân hàng: dư nợ, biên lãi, dự phòng</td></tr>
<tr><td>Giai đoạn dự báo</td><td>Kéo dài đến trạng thái ổn định; g dài hạn không vượt GDP danh nghĩa</td></tr>
<tr><td>Từ EV đến giá mỗi cổ phiếu</td><td>Trừ nợ, ưu đãi, lợi ích không kiểm soát; cộng tiền; chia số cổ phiếu</td></tr>
<tr><td>Diễn giải</td><td>Bảng độ nhạy, bội số ngầm định, kịch bản; kết quả là một khoảng</td></tr>
</tbody></table>
<p>Tiếp theo: tab <b>Luyện tập</b> 10 câu. Các module EQ-09 và EQ-10 sẽ giúp bạn đặt giả định cho mô hình dựa trên phân tích ngành và công ty.</p>`,
    },
  ];

  const glossary = {
    model: ['Financial statement forecast model', 'Mô hình dự phóng báo cáo tài chính', 'Dự báo liên kết ba báo cáo tài chính cho các năm tới, dựa trên các yếu tố dẫn dắt.'],
    driver: ['Value / forecast driver', 'Yếu tố dẫn dắt', 'Biến số chính quyết định khoản mục dự báo: tăng trưởng, biên lợi nhuận, số ngày vốn lưu động, capex...'],
    scenario: ['Scenario analysis', 'Phân tích kịch bản', 'Tính giá trị trong các bộ giả định khác nhau (xấu, cơ sở, tốt).'],
    sensitivity: ['Sensitivity analysis', 'Phân tích độ nhạy', 'Đo giá trị thay đổi bao nhiêu khi thay đổi một hoặc hai giả định.'],
    catalyst: ['Catalyst', 'Chất xúc tác', 'Sự kiện có thể khiến thị trường điều chỉnh giá về gần giá trị nội tại.'],
    revolver: ['Revolving credit facility', 'Khoản vay hạn mức', 'Khoản vay rút ra hoặc trả lại linh hoạt; thường dùng làm biến cân bằng trong mô hình.'],
    topdown: ['Top-down forecasting', 'Dự báo từ trên xuống', 'Bắt đầu từ vĩ mô hoặc quy mô thị trường, rồi đến thị phần của công ty.'],
    bottomup: ['Bottom-up forecasting', 'Dự báo từ dưới lên', 'Bắt đầu từ hoạt động của công ty: sản lượng, giá, số cửa hàng, công suất.'],
    circular: ['Circular reference', 'Vòng lặp tham chiếu', 'Lãi vay phụ thuộc dư nợ, dư nợ phụ thuộc dòng tiền sau lãi vay; xử lý bằng dư nợ đầu kỳ hoặc lặp.'],
    steady: ['Steady state', 'Trạng thái ổn định', 'Khi tăng trưởng, biên lợi nhuận và tỷ suất sinh lời không còn thay đổi đáng kể; có thể dùng giá trị cuối kỳ.'],
    tv: ['Terminal value', 'Giá trị cuối kỳ', 'Giá trị tại cuối giai đoạn dự báo chi tiết của mọi dòng tiền về sau.'],
  };

  const practice = [
    { q: 'Mục đích nào KHÔNG phải là công dụng chính của mô hình dự phóng báo cáo tài chính trong định giá cổ phiếu?', choices: ['Tạo dòng tiền dự phóng để đưa vào mô hình DCF', 'Thay thế báo cáo tài chính đã kiểm toán của công ty', 'Phân tích kịch bản và độ nhạy của giá trị'], answer: 1, explain: 'Mô hình dự phóng là công cụ của nhà phân tích để ước tính tương lai; nó không thay thế báo cáo đã kiểm toán. A và C là hai công dụng chính.' },
    { q: 'Một nhà phân tích dự báo doanh thu bằng cách nhân quy mô thị trường dự kiến với thị phần dự kiến của công ty. Đây là cách tiếp cận:', choices: ['Từ trên xuống (top-down)', 'Từ dưới lên (bottom-up)', 'Dựa trên bảng cân đối'], answer: 0, explain: 'Bắt đầu từ quy mô thị trường (vĩ mô, ngành) rồi đến thị phần là top-down. Bottom-up bắt đầu từ hoạt động của công ty, ví dụ sản lượng x giá.' },
    { q: 'Vốn lưu động của công ty bằng 12% doanh thu. Doanh thu dự kiến tăng từ 500 lên 550. Phần tăng vốn lưu động (làm giảm FCFF) gần nhất với:', choices: ['66', '60', '6'], answer: 2, explain: 'Tăng vốn lưu động = 12% x (550 - 500) = 6. Đáp án A là toàn bộ vốn lưu động năm sau (12% x 550); đáp án B là vốn lưu động năm trước. Chỉ phần TĂNG mới làm giảm dòng tiền.' },
    { q: 'Dự phóng năm tới: EBIT 200, thuế suất 25%, khấu hao 40, capex 70, tăng vốn lưu động 10. FCFF gần nhất với:', choices: ['110', '160', '70'], answer: 0, explain: 'FCFF = 200 x (1 - 25%) + 40 - 70 - 10 = 110. Đáp án B quên trừ thuế. Đáp án C quên cộng lại khấu hao (chi phí không bằng tiền).' },
    { q: 'Khi xây dựng mô hình dự phóng cho một ngân hàng thương mại, các yếu tố dẫn dắt nên được mô hình hóa kỹ nhất là:', choices: ['Doanh thu, giá vốn hàng bán và số ngày tồn kho', 'Dư nợ cho vay, tiền gửi, biên lãi ròng và chi phí dự phòng', 'Capex theo phần trăm doanh thu và vốn lưu động hoạt động'], answer: 1, explain: 'Giá trị ngân hàng phụ thuộc vào quy mô cho vay, biên lãi và chất lượng tài sản. Các khoản mục kiểu công ty sản xuất (giá vốn, tồn kho, vốn lưu động) không phù hợp với cấu trúc ngân hàng.' },
    { q: 'Cấu trúc mô hình phù hợp NHẤT cho một công ty thép thâm dụng vốn, lợi nhuận biến động theo chu kỳ là:', choices: ['Dự báo 1 năm, giả định tăng trưởng bằng năm gần nhất mãi mãi', 'Giả định biên lợi nhuận ở đỉnh chu kỳ hiện tại kéo dài vĩnh viễn', 'Giai đoạn dự báo bao trọn ít nhất một chu kỳ, giá trị cuối kỳ dựa trên biên lợi nhuận giữa chu kỳ'], answer: 2, explain: 'Với công ty chu kỳ, giá trị cuối kỳ phải phản ánh mức "bình thường" qua chu kỳ. A và B ngoại suy một thời điểm của chu kỳ ra vô hạn, có thể làm giá trị sai lệch lớn.' },
    { q: 'Mô hình cho giá trị doanh nghiệp 3.000. Công ty có nợ 800, tiền 200, lợi ích cổ đông không kiểm soát 100 và 100 cổ phiếu. Giá trị mỗi cổ phiếu gần nhất với:', choices: ['23,00', '30,00', '19,00'], answer: 0, explain: 'Vốn chủ = 3.000 - 800 + 200 - 100 = 2.300; mỗi cổ phiếu = 23,00. Đáp án B coi EV là vốn chủ. Đáp án C trừ tiền thay vì cộng.' },
    { q: 'Giai đoạn dự báo chi tiết là 5 năm. FCFF năm 6 dự kiến 120, tăng 4%/năm mãi mãi, WACC 10%. Giá trị hiện tại (t = 0) của giá trị cuối kỳ gần nhất với:', choices: ['745,11', '1.128,95', '1.241,84'], answer: 2, explain: 'TV tại năm 5 = 120 / (10% - 4%) = 2.000; PV = 2.000 / 1,10^5 = 1.241,84. Đáp án B chiết khấu 6 năm (đặt TV sai thời điểm). Đáp án A bỏ qua tăng trưởng (120/10%).' },
    { q: 'Mô hình DCF cho giá trị 36, giá thị trường 30. Bảng độ nhạy với WACC và g hợp lý cho giá trị từ 26 đến 52. Diễn giải phù hợp NHẤT là:', choices: ['Cổ phiếu chắc chắn bị định giá thấp 20%, nên mua với tỷ trọng tối đa', 'Ở giả định cơ sở cổ phiếu có vẻ rẻ, nhưng kết luận phụ thuộc mạnh vào giả định; cần kiểm tra giả định chính và đối chiếu bội số ngầm định', 'Mô hình sai vì kết quả khác giá thị trường'], answer: 1, explain: 'Đầu ra của mô hình là một khoảng giá trị và một lập luận. Khoảng 26 - 52 bao cả giá 30, nên cần thận trọng và kiểm tra chéo. A bỏ qua độ bất định; C hiểu sai mục đích định giá (tìm chỗ giá khác giá trị).' },
    { q: 'Giai đoạn dự báo chi tiết của mô hình nên kéo dài đến khi:', choices: ['Công ty đạt trạng thái ổn định: tăng trưởng và biên lợi nhuận không còn thay đổi đáng kể', 'Đúng 3 năm, áp dụng cho mọi công ty', 'Giá trị cuối kỳ giảm về 0'], answer: 0, explain: 'Giá trị cuối kỳ (Gordon) giả định tăng trưởng không đổi, nên chỉ dùng được khi công ty đã ổn định. Độ dài tùy công ty: ngắn cho công ty trưởng thành, dài cho công ty tăng trưởng cao. C sai vì giá trị cuối kỳ thường là phần lớn giá trị.' },
  ];

  window.LESSONS['EQ-08'] = {
    moduleId: 'EQ-08',
    calculator: 'BA II Plus',
    warmup: [
      'Ôn EQ-06: viết công thức FCFF và giá trị cuối kỳ. FCFF chiết khấu ở lãi suất nào?',
      'Ôn EQ-07: từ EV, làm sao ra giá trị mỗi cổ phiếu?',
      'Nếu doanh thu một công ty tăng 20%, những khoản mục nào trên bảng cân đối nhiều khả năng cũng phải tăng?',
    ],
    sections,
    glossary,
    practice,
    widgets: {},
    slides: [],
    wrapup: [
      'Liệt kê 7 bước xây dựng mô hình dự phóng bằng lời của bạn.',
      'Cho 3 loại công ty (trưởng thành, tăng trưởng cao, ngân hàng), mỗi loại nêu 2 yếu tố dẫn dắt quan trọng nhất.',
      'Tự làm lại ví dụ định giá An Phát bằng hàm CF, rồi thử WACC 10% xem giá trị còn bao nhiêu.',
    ],
  };
}());
