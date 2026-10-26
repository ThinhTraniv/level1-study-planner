// Bài giảng FSA-11 - Financial Analysis Techniques (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t, frac } = window.CFAH;

  // Bảng số liệu dùng chung cho cả bài (đơn vị: triệu).
  const data = `
<table class="plain"><thead><tr><th>Báo cáo kết quả kinh doanh năm 2</th><th>Số tiền</th><th>Bảng cân đối</th><th>Năm 1</th><th>Năm 2</th></tr></thead><tbody>
<tr><td>Doanh thu</td><td>5.000</td><td>Tiền</td><td>200</td><td>250</td></tr>
<tr><td>Giá vốn (COGS)</td><td>3.000</td><td>Phải thu</td><td>500</td><td>600</td></tr>
<tr><td>Lợi nhuận gộp</td><td>2.000</td><td>Hàng tồn kho</td><td>600</td><td>650</td></tr>
<tr><td>Chi phí bán hàng và quản lý (SG&amp;A)</td><td>1.200</td><td>TSCĐ ròng</td><td>2.700</td><td>3.000</td></tr>
<tr><td>EBIT (lợi nhuận hoạt động)</td><td>800</td><td><b>Tổng tài sản</b></td><td><b>4.000</b></td><td><b>4.500</b></td></tr>
<tr><td>Chi phí lãi vay</td><td>100</td><td>Phải trả người bán</td><td>350</td><td>400</td></tr>
<tr><td>Lợi nhuận trước thuế (EBT)</td><td>700</td><td>Vay ngắn hạn</td><td>250</td><td>200</td></tr>
<tr><td>Thuế (25%)</td><td>175</td><td>Vay dài hạn</td><td>1.200</td><td>1.400</td></tr>
<tr><td><b>Lợi nhuận ròng</b></td><td><b>525</b></td><td>Vốn chủ sở hữu</td><td>2.200</td><td>2.500</td></tr>
</tbody></table>
<p class="tip">Khấu hao 300 nằm trong giá vốn và SG&amp;A. Năm 1 doanh thu 4.500, giá vốn 2.750. Mọi tỷ số có dùng số bình quân đều lấy trung bình năm 1 và năm 2.</p>`;

  const sections = [
    {
      title: '1. Bức tranh lớn: phân tích để ra quyết định',
      minutes: 5,
      html: `
<p>Tỷ số tài chính không phải là đáp án mà là <b>câu hỏi</b>. Một tỷ số chỉ có ý nghĩa khi được so sánh: với chính công ty trong quá khứ, với đối thủ, với trung bình ngành, hoặc với mục tiêu của ban lãnh đạo.</p>
<div class="key">Quy trình phân tích: xác định mục đích → thu thập dữ liệu → xử lý (tính tỷ số, common-size, biểu đồ) → <b>phân tích, diễn giải</b> → kết luận, khuyến nghị → theo dõi và cập nhật.</div>
<ol>
  <li>Công cụ phân tích và giới hạn của chúng (LOS 1, phần 2 và 9).</li>
  <li>Tính và diễn giải các nhóm tỷ số hoạt động, thanh khoản, khả năng thanh toán dài hạn, sinh lời (LOS 2, phần 3 đến 6).</li>
  <li>Quan hệ giữa các tỷ số và đánh giá tổng thể công ty (LOS 3, phần 9).</li>
  <li>Phân tích DuPont (LOS 4, phần 7).</li>
  <li>Tỷ số đặc thù ngành, kèm tỷ số định giá và phân tích bộ phận (LOS 5, phần 8).</li>
  <li>Dùng tỷ số để lập mô hình và dự báo lợi nhuận (LOS 6, phần 9).</li>
</ol>
<p>Cả bài dùng một bộ số liệu (đơn vị: triệu):</p>
${data}`,
    },
    {
      title: '2. Công cụ phân tích: tỷ số, common-size, biểu đồ, hồi quy',
      minutes: 12,
      html: `
<ul>
<li><b>Tỷ số</b>: chuẩn hóa quy mô để so sánh. Phân tích theo thời gian (${t('timeseries', 'time-series')}) và so với đối thủ (${t('cross', 'cross-sectional')}).</li>
<li>${t('commonsize', 'Báo cáo common-size')}: <b>theo chiều dọc</b> (vertical) chia mỗi khoản cho doanh thu (báo cáo kết quả kinh doanh) hoặc tổng tài sản (bảng cân đối); <b>theo chiều ngang</b> (horizontal) chia mỗi khoản cho chính nó ở năm gốc để thấy xu hướng.</li>
<li><b>Biểu đồ</b>: cơ cấu (biểu đồ tròn, cột chồng) và xu hướng (biểu đồ đường).</li>
<li><b>Hồi quy</b>: tìm quan hệ giữa các biến, ví dụ doanh thu theo GDP, để dự báo.</li>
</ul>
<div class="example"><div class="ex-h">Ví dụ 2.1 - Common-size</div>
<p>Lập common-size theo chiều dọc cho năm 2 và đọc vài điểm chính.</p>
<details><summary>Xem lời giải</summary>
<table class="plain"><thead><tr><th>Báo cáo KQKD (% doanh thu)</th><th>Năm 2</th><th>Bảng cân đối (% tổng tài sản)</th><th>Năm 1</th><th>Năm 2</th></tr></thead><tbody>
<tr><td>Giá vốn</td><td>60,0%</td><td>Tiền</td><td>5,0%</td><td>5,6%</td></tr>
<tr><td>Lợi nhuận gộp</td><td>40,0%</td><td>Phải thu</td><td>12,5%</td><td>13,3%</td></tr>
<tr><td>SG&amp;A</td><td>24,0%</td><td>Hàng tồn kho</td><td>15,0%</td><td>14,4%</td></tr>
<tr><td>EBIT</td><td>16,0%</td><td>TSCĐ ròng</td><td>67,5%</td><td>66,7%</td></tr>
<tr><td>Lãi vay</td><td>2,0%</td><td>Vay ngắn hạn</td><td>6,3%</td><td>4,4%</td></tr>
<tr><td>Lợi nhuận ròng</td><td>10,5%</td><td>Vốn chủ</td><td>55,0%</td><td>55,6%</td></tr>
</tbody></table>
<p>Biên lợi nhuận gộp năm 1 là (4.500 - 2.750)/4.500 = 38,9%, năm 2 lên 40,0%: doanh thu tăng 11,1% nhưng giá vốn chỉ tăng 9,1%. Cơ cấu tài sản gần như không đổi; nợ vay ngắn hạn giảm tỷ trọng, chuyển sang vay dài hạn.</p></details></div>
<h4>Giới hạn của công cụ</h4>
<ul>
<li>Tỷ số chỉ là con số so sánh, cần thêm thông tin để biết <b>vì sao</b>.</li>
<li>Khác biệt chính sách kế toán (FIFO và bình quân gia quyền, IFRS và US GAAP, thuê tài sản) làm giảm khả năng so sánh.</li>
<li>Công ty đa ngành khó tìm "ngành" để so sánh; cần phân tích theo bộ phận.</li>
<li>Không có mức "đúng" tuyệt đối: hệ số thanh toán hiện hành quá cao có thể là lãng phí vốn.</li>
<li>Định nghĩa tỷ số không thống nhất giữa các nguồn dữ liệu: luôn kiểm tra công thức.</li>
</ul>`,
    },
    {
      title: '3. Tỷ số hoạt động (activity ratios)',
      minutes: 15,
      html: `
<p>${t('activity', 'Tỷ số hoạt động')} đo mức hiệu quả quản lý tài sản: bao nhiêu doanh thu được tạo ra trên mỗi đồng tài sản, và tài sản lưu động quay vòng nhanh thế nào. Tỷ số này lấy số liệu báo cáo kết quả kinh doanh (dòng chảy cả năm) chia cho số liệu bảng cân đối, nên dùng <b>số bình quân</b>.</p>
<table class="plain"><thead><tr><th>Tỷ số</th><th>Công thức</th><th>Kết quả</th></tr></thead><tbody>
<tr><td>Vòng quay hàng tồn kho</td><td>Giá vốn / tồn kho bình quân = 3.000 / 625</td><td>4,80 lần</td></tr>
<tr><td>${t('doh', 'Số ngày tồn kho (DOH)')}</td><td>365 / vòng quay tồn kho</td><td>76,0 ngày</td></tr>
<tr><td>Vòng quay phải thu</td><td>Doanh thu / phải thu bình quân = 5.000 / 550</td><td>9,09 lần</td></tr>
<tr><td>${t('dso', 'Số ngày thu tiền (DSO)')}</td><td>365 / vòng quay phải thu</td><td>40,2 ngày</td></tr>
<tr><td>Vòng quay phải trả</td><td>Mua hàng / phải trả bình quân = 3.050 / 375</td><td>8,13 lần</td></tr>
<tr><td>${t('dpo', 'Số ngày trả tiền (DPO)')}</td><td>365 / vòng quay phải trả</td><td>44,9 ngày</td></tr>
<tr><td>Vòng quay vốn lưu động</td><td>Doanh thu / vốn lưu động bình quân = 5.000 / 800</td><td>6,25 lần</td></tr>
<tr><td>Vòng quay TSCĐ</td><td>Doanh thu / TSCĐ bình quân = 5.000 / 2.850</td><td>1,75 lần</td></tr>
<tr><td>Vòng quay tổng tài sản</td><td>Doanh thu / tổng tài sản bình quân = 5.000 / 4.250</td><td>1,18 lần</td></tr>
</tbody></table>
<p>Mua hàng = giá vốn + tồn kho cuối - tồn kho đầu = 3.000 + 650 - 600 = 3.050. Vốn lưu động = tài sản ngắn hạn - nợ ngắn hạn: năm 1 là 1.300 - 600 = 700, năm 2 là 1.500 - 600 = 900.</p>
<h4>Diễn giải</h4>
<ul>
<li>Vòng quay tồn kho <b>cao</b>: quản lý tồn kho tốt, nhưng cũng có thể do tồn kho quá ít, dễ thiếu hàng (xem doanh thu có tăng cùng chiều không). Vòng quay <b>thấp</b>: hàng chậm luân chuyển, có thể lỗi thời.</li>
<li>DSO cao hơn đối thủ: chính sách tín dụng lỏng hoặc khó thu nợ. DPO cao: tận dụng tín dụng nhà cung cấp, hoặc gặp khó khăn thanh toán.</li>
<li>Vòng quay TSCĐ thấp có thể do công ty mới đầu tư lớn (tài sản mới, chưa chạy hết công suất) chứ không hẳn kém hiệu quả.</li>
</ul>
<p class="warn"><b>Bẫy:</b> vòng quay tồn kho dùng <b>giá vốn</b>, vòng quay phải thu dùng <b>doanh thu</b>, vòng quay phải trả dùng <b>mua hàng</b>. Đề có thể cho đủ cả ba để gài.</p>`,
    },
    {
      title: '4. Tỷ số thanh khoản (liquidity ratios)',
      minutes: 10,
      html: `
<p>${t('liquidity', 'Tỷ số thanh khoản')} đo khả năng đáp ứng nghĩa vụ ngắn hạn. Các tỷ số này dùng số liệu <b>cuối kỳ</b> của bảng cân đối.</p>
<table class="plain"><thead><tr><th>Tỷ số</th><th>Công thức</th><th>Kết quả năm 2</th></tr></thead><tbody>
<tr><td>Hệ số thanh toán hiện hành (current ratio)</td><td>Tài sản ngắn hạn / nợ ngắn hạn = 1.500 / 600</td><td>2,50</td></tr>
<tr><td>${t('quick', 'Hệ số thanh toán nhanh (quick ratio)')}</td><td>(Tiền + chứng khoán ngắn hạn + phải thu) / nợ ngắn hạn = 850 / 600</td><td>1,42</td></tr>
<tr><td>Hệ số tiền mặt (cash ratio)</td><td>(Tiền + chứng khoán ngắn hạn) / nợ ngắn hạn = 250 / 600</td><td>0,42</td></tr>
<tr><td>${t('defensive', 'Khoảng thời gian phòng vệ (defensive interval)')}</td><td>(Tiền + chứng khoán ngắn hạn + phải thu) / chi tiêu tiền mặt bình quân ngày</td><td>79,6 ngày</td></tr>
<tr><td>${t('ccc', 'Chu kỳ chuyển đổi tiền (cash conversion cycle)')}</td><td>DOH + DSO - DPO = 76,0 + 40,2 - 44,9</td><td>71,3 ngày</td></tr>
</tbody></table>
<p>Chi tiêu tiền mặt bình quân ngày = (giá vốn + SG&amp;A - khấu hao) / 365 = (3.000 + 1.200 - 300) / 365 = 10,68. Defensive interval = 850 / 10,68 = 79,6 ngày: không có thêm tiền thu vào, công ty vẫn trả được chi phí hoạt động gần 80 ngày.</p>
<ul>
<li>Quick ratio loại hàng tồn kho vì tồn kho khó chuyển thành tiền nhanh mà không mất giá.</li>
<li>Chu kỳ chuyển đổi tiền <b>ngắn</b> là tốt: tiền bị "giam" trong vốn lưu động ít ngày hơn. Quá dài nghĩa là cần nhiều vốn lưu động hơn để vận hành.</li>
</ul>`,
    },
    {
      title: '5. Tỷ số khả năng thanh toán dài hạn (solvency ratios)',
      minutes: 10,
      html: `
<p>${t('solvency', 'Tỷ số solvency')} đo khả năng đáp ứng nghĩa vụ dài hạn, gồm tỷ số <b>đòn bẩy</b> (bảng cân đối) và tỷ số <b>khả năng trả lãi</b> (báo cáo kết quả kinh doanh). Nợ ở đây là <b>nợ chịu lãi</b> (vay ngắn hạn + vay dài hạn, kể cả nợ thuê tài sản); năm 2 nợ vay = 200 + 1.400 = 1.600.</p>
<table class="plain"><thead><tr><th>Tỷ số</th><th>Công thức</th><th>Kết quả năm 2</th></tr></thead><tbody>
<tr><td>Nợ / tài sản (debt-to-assets)</td><td>1.600 / 4.500</td><td>35,6%</td></tr>
<tr><td>Nợ / vốn (debt-to-capital)</td><td>Nợ / (nợ + vốn chủ) = 1.600 / 4.100</td><td>39,0%</td></tr>
<tr><td>Nợ / vốn chủ (debt-to-equity)</td><td>1.600 / 2.500</td><td>0,64</td></tr>
<tr><td>${t('finlev', 'Đòn bẩy tài chính (financial leverage)')}</td><td>Tổng tài sản bình quân / vốn chủ bình quân = 4.250 / 2.350</td><td>1,81</td></tr>
<tr><td>Nợ / EBITDA</td><td>1.600 / (800 + 300)</td><td>1,45 lần</td></tr>
<tr><td>Khả năng trả lãi (interest coverage)</td><td>EBIT / chi phí lãi vay = 800 / 100</td><td>8,0 lần</td></tr>
<tr><td>${t('fcc', 'Khả năng trả chi phí cố định (fixed charge coverage)')}</td><td>(EBIT + tiền thuê) / (lãi vay + tiền thuê)</td><td>Không có tiền thuê riêng</td></tr>
</tbody></table>
<ul>
<li>Đòn bẩy cao làm ROE tăng khi kinh doanh tốt nhưng làm rủi ro tăng: lợi nhuận biến động mạnh hơn, khó vay thêm.</li>
<li>Khả năng trả lãi thấp, hoặc giảm dần, là dấu hiệu rủi ro tín dụng tăng. Chủ nợ thường đặt điều khoản (covenant) theo các tỷ số này.</li>
</ul>`,
    },
    {
      title: '6. Tỷ số sinh lời (profitability ratios)',
      minutes: 10,
      html: `
<h4>Biên lợi nhuận (trên doanh thu)</h4>
<table class="plain"><thead><tr><th>Tỷ số</th><th>Công thức</th><th>Kết quả</th></tr></thead><tbody>
<tr><td>Biên lợi nhuận gộp</td><td>2.000 / 5.000</td><td>40,0%</td></tr>
<tr><td>Biên lợi nhuận hoạt động</td><td>800 / 5.000</td><td>16,0%</td></tr>
<tr><td>Biên lợi nhuận trước thuế</td><td>700 / 5.000</td><td>14,0%</td></tr>
<tr><td>Biên lợi nhuận ròng</td><td>525 / 5.000</td><td>10,5%</td></tr>
</tbody></table>
<h4>Tỷ suất lợi nhuận (trên vốn đầu tư, dùng số bình quân)</h4>
<table class="plain"><thead><tr><th>Tỷ số</th><th>Công thức</th><th>Kết quả</th></tr></thead><tbody>
<tr><td>${t('roa', 'ROA')}</td><td>Lợi nhuận ròng / tổng tài sản bình quân = 525 / 4.250</td><td>12,4%</td></tr>
<tr><td>ROA hoạt động</td><td>EBIT / tổng tài sản bình quân = 800 / 4.250</td><td>18,8%</td></tr>
<tr><td>Tỷ suất trên tổng vốn (return on total capital)</td><td>EBIT / (nợ vay + vốn chủ) bình quân = 800 / 3.875</td><td>20,6%</td></tr>
<tr><td>${t('roe', 'ROE')}</td><td>Lợi nhuận ròng / vốn chủ bình quân = 525 / 2.350</td><td>22,3%</td></tr>
</tbody></table>
<ul>
<li>ROA dùng lợi nhuận ròng là sau chi phí lãi vay, nên chịu ảnh hưởng của cơ cấu vốn. Một biến thể cộng lại lãi vay sau thuế: (lợi nhuận ròng + lãi vay × (1 - t)) / tài sản bình quân.</li>
<li>ROE của cổ đông thường (return on common equity) = (lợi nhuận ròng - cổ tức ưu đãi) / vốn chủ thường bình quân.</li>
<li>Biên lợi nhuận gộp phản ánh <b>sức mạnh định giá và chi phí sản xuất</b>; biên lợi nhuận hoạt động thêm hiệu quả kiểm soát chi phí bán hàng và quản lý.</li>
</ul>`,
    },
    {
      title: '7. Phân tích DuPont: ROE 3 và 5 thành phần',
      minutes: 15,
      html: `
<div class="formula">ROE = ${frac('LN ròng', 'Doanh thu')} × ${frac('Doanh thu', 'Tài sản BQ')} × ${frac('Tài sản BQ', 'Vốn chủ BQ')} = biên LN ròng × vòng quay tài sản × đòn bẩy</div>
<p>Hai thừa số đầu nhân lại là ROA. Ba thừa số trả lời ba câu hỏi: công ty <b>lãi bao nhiêu</b> trên mỗi đồng doanh thu, <b>dùng tài sản hiệu quả</b> đến đâu, và <b>vay nợ</b> nhiều đến mức nào.</p>
<div class="formula">ROE = ${frac('LN ròng', 'EBT')} × ${frac('EBT', 'EBIT')} × ${frac('EBIT', 'Doanh thu')} × ${frac('Doanh thu', 'Tài sản BQ')} × ${frac('Tài sản BQ', 'Vốn chủ BQ')}</div>
<p>Năm thừa số: ${t('taxburden', 'gánh nặng thuế (tax burden)')}, ${t('intburden', 'gánh nặng lãi vay (interest burden)')}, biên EBIT, vòng quay tài sản, đòn bẩy tài chính.</p>
<div class="example"><div class="ex-h">Ví dụ 7.1 - DuPont cho bộ số liệu chung</div>
<details><summary>Xem lời giải</summary>
<p><b>3 thành phần:</b> 10,5% × 1,1765 × 1,8085 = <b>22,34%</b>.<br>
<b>5 thành phần:</b> 525/700 = 0,75; 700/800 = 0,875; 800/5.000 = 16%; 1,1765; 1,8085.<br>
0,75 × 0,875 × 16% × 1,1765 × 1,8085 = <b>22,34%</b>, khớp với 525 / 2.350.</p></details></div>
<div class="example"><div class="ex-h">Ví dụ 7.2 - Cùng ROE, khác chất lượng</div>
<p>Đối thủ B có biên lợi nhuận ròng 6%, vòng quay tài sản 1,5, đòn bẩy 2,5. So sánh với công ty của chúng ta.</p>
<details><summary>Xem lời giải</summary><p>ROE của B = 6% × 1,5 × 2,5 = <b>22,5%</b>, gần bằng 22,34%. Nhưng ROA của B chỉ 9%, so với 12,35% của chúng ta: B đạt ROE nhờ <b>vay nhiều hơn</b>, rủi ro cao hơn. ROE nhờ biên lợi nhuận và hiệu quả tài sản thường bền vững hơn ROE nhờ đòn bẩy.</p></details></div>
<div class="example"><div class="ex-h">Ví dụ 7.3 - Thay đổi thành phần</div>
<p>Công ty vay thêm để mua lại cổ phiếu: đòn bẩy tăng từ 1,81 lên 2,20, nhưng lãi vay nhiều hơn làm gánh nặng lãi vay giảm từ 0,875 xuống 0,80. Các thành phần khác giữ nguyên. ROE mới?</p>
<details><summary>Xem lời giải</summary><p>ROE = 0,75 × 0,80 × 16% × 1,1765 × 2,20 = <b>24,85%</b>, tăng khoảng 2,5 điểm phần trăm. Đòn bẩy tăng lấn át lãi vay tăng, vì ROA hoạt động 18,8% cao hơn lãi suất vay. Nếu lãi suất vay vượt ROA hoạt động, tăng đòn bẩy sẽ <b>làm giảm</b> ROE.</p></details></div>
<p class="warn"><b>Bẫy:</b> gánh nặng thuế và gánh nặng lãi vay càng <b>gần 1</b> càng tốt (thuế ít, lãi ít). Thuế suất tăng thì tax burden <b>giảm</b>.</p>
<h4>Thử ngay: thay đổi từng thành phần</h4>
<div class="widget" data-widget="dupont"></div>`,
    },
    {
      title: '8. Tỷ số định giá, tỷ số đặc thù ngành và phân tích bộ phận',
      minutes: 10,
      html: `
<h4>Tỷ số định giá và cổ tức</h4>
<p>Giả sử công ty có 100 triệu cổ phiếu, giá 63, cổ tức 2,10 mỗi cổ phiếu, CFO 700.</p>
<table class="plain"><thead><tr><th>Tỷ số</th><th>Công thức</th><th>Kết quả</th></tr></thead><tbody>
<tr><td>EPS</td><td>525 / 100</td><td>5,25</td></tr>
<tr><td>P/E</td><td>63 / 5,25</td><td>12,0</td></tr>
<tr><td>P/CF</td><td>63 / (700 / 100)</td><td>9,0</td></tr>
<tr><td>P/S</td><td>63 / (5.000 / 100)</td><td>1,26</td></tr>
<tr><td>P/B</td><td>63 / (2.500 / 100)</td><td>2,52</td></tr>
<tr><td>Tỷ lệ chi trả cổ tức (payout)</td><td>2,10 / 5,25</td><td>40%</td></tr>
<tr><td>${t('retention', 'Tỷ lệ giữ lại (b)')}</td><td>1 - payout</td><td>60%</td></tr>
<tr><td>${t('sgr', 'Tăng trưởng bền vững (g)')}</td><td>b × ROE = 60% × 22,34%</td><td>13,4%</td></tr>
</tbody></table>
<h4>Tỷ số đặc thù ngành</h4>
<table class="plain"><thead><tr><th>Ngành</th><th>Tỷ số</th></tr></thead><tbody>
<tr><td>Ngân hàng</td><td>Hệ số an toàn vốn (capital adequacy), dự trữ bắt buộc, tỷ lệ tài sản thanh khoản, biên lãi ròng (net interest margin)</td></tr>
<tr><td>Bán lẻ</td><td>Tăng trưởng doanh thu cửa hàng hiện hữu (same-store sales), doanh thu trên mỗi mét vuông</td></tr>
<tr><td>Dịch vụ, tư vấn</td><td>Doanh thu và lợi nhuận trên mỗi nhân viên</td></tr>
<tr><td>Khách sạn</td><td>Giá phòng bình quân (average daily rate), tỷ lệ lấp đầy (occupancy rate)</td></tr>
<tr><td>Rủi ro kinh doanh chung</td><td>Hệ số biến thiên (độ lệch chuẩn / trung bình) của doanh thu, lợi nhuận hoạt động, lợi nhuận ròng</td></tr>
</tbody></table>
<h4>Phân tích bộ phận (segment analysis)</h4>
<p>Công ty phải công bố thông tin theo ${t('segment', 'bộ phận')} (doanh thu, lợi nhuận, tài sản). Ví dụ:</p>
<table class="plain"><thead><tr><th>Bộ phận</th><th>Doanh thu</th><th>LN hoạt động</th><th>Tài sản</th><th>Biên LN</th><th>LN / tài sản</th></tr></thead><tbody>
<tr><td>X</td><td>3.000</td><td>450</td><td>2.000</td><td>15,0%</td><td>22,5%</td></tr>
<tr><td>Y</td><td>2.000</td><td>350</td><td>2.500</td><td>17,5%</td><td>14,0%</td></tr>
</tbody></table>
<p>Y có biên lợi nhuận cao hơn nhưng dùng nhiều tài sản hơn hẳn, nên tỷ suất lợi nhuận trên tài sản thấp hơn X. Chỉ nhìn số tổng của công ty sẽ không thấy điều này.</p>`,
    },
    {
      title: '9. Quan hệ giữa các tỷ số, đánh giá tổng thể và dự báo',
      minutes: 12,
      html: `
<h4>Các tỷ số liên kết với nhau</h4>
<ul>
<li>ROE = ROA × đòn bẩy; ROA = biên lợi nhuận ròng × vòng quay tài sản.</li>
<li>Chu kỳ chuyển đổi tiền nối ba tỷ số hoạt động; nó ảnh hưởng thanh khoản và nhu cầu vốn lưu động.</li>
<li>Vòng quay phải thu cao (DSO thấp) có thể do chính sách tín dụng chặt, nhưng nếu doanh thu cũng giảm thì chính sách đó đang làm mất khách hàng.</li>
<li>Hệ số thanh toán hiện hành tăng mà quick ratio không đổi: phần tăng nằm ở hàng tồn kho, cần xem DOH.</li>
</ul>
<div class="key">Đánh giá tổng thể: đọc các tỷ số <b>cùng nhau</b> và theo <b>xu hướng</b>, đặt trong bối cảnh chiến lược (cạnh tranh bằng giá rẻ thì biên thấp, vòng quay cao; hàng cao cấp thì ngược lại) và chu kỳ kinh tế.</div>
<h4>Dùng tỷ số để lập mô hình và dự báo lợi nhuận</h4>
<p>Dự báo thường bắt đầu từ doanh thu, rồi dùng tỷ số (biên lợi nhuận, vòng quay, tỷ lệ chi phí trên doanh thu) để suy ra các dòng còn lại. Chi tiết mô hình ở FSA-12. Có ba kỹ thuật đánh giá độ bất định:</p>
<ul>
<li>${t('sensitivity', 'Phân tích độ nhạy (sensitivity analysis)')}: thay đổi <b>một</b> giả định, giữ nguyên các giả định khác.</li>
<li>${t('scenario', 'Phân tích kịch bản (scenario analysis)')}: thay đổi <b>đồng thời</b> nhiều giả định theo một câu chuyện nhất quán (tốt, cơ sở, xấu).</li>
<li>${t('simulation', 'Mô phỏng (simulation, Monte Carlo)')}: gán phân phối xác suất cho các biến đầu vào, chạy hàng nghìn lần để được phân phối kết quả.</li>
</ul>
<div class="example"><div class="ex-h">Ví dụ 9.1 - Độ nhạy theo biên lợi nhuận ròng</div>
<p>Năm 3 doanh thu dự báo tăng 8%. Lợi nhuận ròng là bao nhiêu nếu biên lợi nhuận ròng là 9,5%, 10,5% hoặc 11,5%?</p>
<details><summary>Xem lời giải</summary><p>Doanh thu năm 3 = 5.000 × 1,08 = 5.400. Lợi nhuận ròng: <b>513</b>; <b>567</b>; <b>621</b>. Mỗi 1 điểm phần trăm biên lợi nhuận tương ứng 54, tức khoảng 9,5% lợi nhuận kịch bản cơ sở.</p></details></div>`,
    },
    {
      title: '10. Tóm tắt và bẫy thường gặp',
      minutes: 6,
      html: `
<table class="plain"><thead><tr><th>Tình huống</th><th>Nhớ</th></tr></thead><tbody>
<tr><td>Tỷ số dòng chảy / số dư</td><td>Dùng số dư bình quân (vòng quay, ROA, ROE)</td></tr>
<tr><td>Ba vòng quay vốn lưu động</td><td>Tồn kho: giá vốn; phải thu: doanh thu; phải trả: mua hàng</td></tr>
<tr><td>Chu kỳ chuyển đổi tiền</td><td>DOH + DSO - DPO; ngắn là tốt</td></tr>
<tr><td>Quick ratio</td><td>Loại hàng tồn kho (và chi phí trả trước)</td></tr>
<tr><td>Nợ trong tỷ số solvency</td><td>Nợ chịu lãi, không phải tổng nợ phải trả</td></tr>
<tr><td>DuPont 3</td><td>Biên LN ròng × vòng quay tài sản × đòn bẩy</td></tr>
<tr><td>DuPont 5</td><td>Thuế × lãi vay × biên EBIT × vòng quay × đòn bẩy</td></tr>
<tr><td>Tax burden, interest burden</td><td>Gần 1 là tốt; thuế suất tăng thì tax burden giảm</td></tr>
<tr><td>Tăng trưởng bền vững</td><td>g = b × ROE, với b = 1 - payout</td></tr>
<tr><td>Độ nhạy và kịch bản</td><td>Độ nhạy: một biến; kịch bản: nhiều biến cùng lúc</td></tr>
</tbody></table>
<p>Tiếp theo: bấm sang tab <b>Luyện tập</b> để làm 10 câu (rút ngẫu nhiên từ ngân hàng 30 câu, mỗi lần làm một bộ khác).</p>`,
    },
  ];

  const glossary = {
    timeseries: ['Time-series analysis', 'Phân tích theo thời gian', 'So sánh tỷ số của cùng công ty qua nhiều kỳ.'],
    cross: ['Cross-sectional analysis', 'Phân tích chéo', 'So sánh tỷ số với các công ty khác hoặc trung bình ngành cùng thời điểm.'],
    commonsize: ['Common-size statements', 'Báo cáo quy đổi tỷ trọng', 'Chia các khoản cho doanh thu hoặc tổng tài sản (dọc) hoặc cho năm gốc (ngang).'],
    activity: ['Activity ratios', 'Tỷ số hoạt động', 'Đo hiệu quả sử dụng tài sản: vòng quay tồn kho, phải thu, phải trả, tài sản.'],
    doh: ['Days of inventory on hand (DOH)', 'Số ngày tồn kho', '365 / vòng quay hàng tồn kho.'],
    dso: ['Days of sales outstanding (DSO)', 'Số ngày thu tiền', '365 / vòng quay phải thu.'],
    dpo: ['Number of days of payables (DPO)', 'Số ngày trả tiền', '365 / vòng quay phải trả; vòng quay phải trả dùng mua hàng.'],
    liquidity: ['Liquidity ratios', 'Tỷ số thanh khoản', 'Đo khả năng đáp ứng nghĩa vụ ngắn hạn.'],
    quick: ['Quick ratio', 'Hệ số thanh toán nhanh', '(Tiền + chứng khoán ngắn hạn + phải thu) / nợ ngắn hạn.'],
    defensive: ['Defensive interval ratio', 'Khoảng thời gian phòng vệ', 'Số ngày công ty trả được chi phí hoạt động bằng tài sản thanh khoản hiện có.'],
    ccc: ['Cash conversion cycle', 'Chu kỳ chuyển đổi tiền', 'DOH + DSO - DPO: số ngày tiền bị giam trong vốn lưu động.'],
    solvency: ['Solvency ratios', 'Tỷ số khả năng thanh toán dài hạn', 'Đo khả năng đáp ứng nghĩa vụ dài hạn: đòn bẩy và khả năng trả lãi.'],
    finlev: ['Financial leverage ratio (equity multiplier)', 'Đòn bẩy tài chính', 'Tổng tài sản bình quân / vốn chủ bình quân.'],
    fcc: ['Fixed charge coverage', 'Khả năng trả chi phí cố định', '(EBIT + tiền thuê) / (lãi vay + tiền thuê).'],
    roa: ['Return on assets (ROA)', 'Tỷ suất lợi nhuận trên tài sản', 'Lợi nhuận ròng / tổng tài sản bình quân.'],
    roe: ['Return on equity (ROE)', 'Tỷ suất lợi nhuận trên vốn chủ', 'Lợi nhuận ròng / vốn chủ bình quân.'],
    taxburden: ['Tax burden', 'Gánh nặng thuế', 'Lợi nhuận ròng / EBT = 1 - thuế suất hiệu dụng.'],
    intburden: ['Interest burden', 'Gánh nặng lãi vay', 'EBT / EBIT; bằng 1 nếu không có lãi vay.'],
    retention: ['Retention rate', 'Tỷ lệ lợi nhuận giữ lại', '1 - tỷ lệ chi trả cổ tức.'],
    sgr: ['Sustainable growth rate', 'Tăng trưởng bền vững', 'g = b × ROE: tốc độ tăng trưởng tự tài trợ không cần phát hành thêm cổ phiếu.'],
    segment: ['Segment reporting', 'Báo cáo bộ phận', 'Thông tin doanh thu, lợi nhuận, tài sản theo mảng kinh doanh hoặc khu vực địa lý.'],
    sensitivity: ['Sensitivity analysis', 'Phân tích độ nhạy', 'Thay đổi một giả định để xem kết quả thay đổi thế nào.'],
    scenario: ['Scenario analysis', 'Phân tích kịch bản', 'Thay đổi đồng thời nhiều giả định theo các kịch bản nhất quán.'],
    simulation: ['Simulation (Monte Carlo)', 'Mô phỏng', 'Chạy mô hình nhiều lần với đầu vào ngẫu nhiên theo phân phối để có phân phối kết quả.'],
  };

  const practice = [
    { q: 'Công ty có biên lợi nhuận ròng 8%, vòng quay tổng tài sản 1,5 và đòn bẩy tài chính (tài sản / vốn chủ) 2,0. ROE là:', choices: ['12,0%', '24,0%', '11,5%'], answer: 1, explain: 'ROE = 8% x 1,5 x 2,0 = 24%. Lựa chọn 12,0% là ROA (thiếu đòn bẩy). Lựa chọn 11,5% cộng ba thừa số thay vì nhân.' },
    { q: 'Doanh thu 7.300, phải thu đầu năm 470 và cuối năm 730. Số ngày thu tiền (DSO) dựa trên phải thu bình quân là:', choices: ['30,0 ngày', '12,2 ngày', '36,5 ngày'], answer: 0, explain: 'Phải thu bình quân = 600; vòng quay = 7.300/600 = 12,17; DSO = 365/12,17 = 30,0 ngày. Lựa chọn 12,2 ngày là vòng quay, chưa đổi sang ngày. Lựa chọn 36,5 ngày dùng phải thu cuối kỳ.' },
    { q: 'DOH = 60 ngày, DSO = 45 ngày, DPO = 35 ngày. Chu kỳ chuyển đổi tiền là:', choices: ['140 ngày', '50 ngày', '70 ngày'], answer: 2, explain: 'CCC = 60 + 45 - 35 = 70 ngày. Lựa chọn 140 ngày cộng cả DPO. Lựa chọn 50 ngày lấy DOH - DSO + DPO, sai dấu.' },
    { q: 'Tiền 100, chứng khoán ngắn hạn 50, phải thu 250, hàng tồn kho 400, nợ ngắn hạn 500. Hệ số thanh toán nhanh (quick ratio) là:', choices: ['1,60', '0,80', '0,30'], answer: 1, explain: 'Quick = (100 + 50 + 250)/500 = 0,80. Lựa chọn 1,60 là current ratio (có hàng tồn kho). Lựa chọn 0,30 là cash ratio (không có phải thu).' },
    { q: 'Gánh nặng thuế 0,70, gánh nặng lãi vay 0,90, biên EBIT 10%, vòng quay tài sản 1,2, đòn bẩy 2,0. Công ty vay thêm: đòn bẩy lên 2,5 và gánh nặng lãi vay giảm còn 0,80; các thành phần khác không đổi. ROE mới là:', choices: ['15,12%', '13,44%', '16,80%'], answer: 2, explain: 'ROE mới = 0,70 x 0,80 x 10% x 1,2 x 2,5 = 16,80% (ROE cũ 15,12%). Lựa chọn 15,12% là ROE cũ. Lựa chọn 13,44% chỉ đổi gánh nặng lãi vay mà quên đòn bẩy tăng.' },
    { q: 'Doanh thu không đổi trong ba năm nhưng số ngày tồn kho tăng từ 45 lên 80 ngày. Cách hiểu phù hợp nhất:', choices: ['Hàng chậm luân chuyển, có rủi ro tồn kho lỗi thời', 'Quản lý tồn kho hiệu quả hơn', 'Thanh khoản được cải thiện vì tài sản ngắn hạn tăng'], answer: 0, explain: 'Tồn kho tăng trong khi doanh thu không tăng là dấu hiệu hàng bán chậm, có thể lỗi thời. Current ratio có thể tăng nhưng đó không phải thanh khoản tốt lên thật, vì tồn kho khó chuyển thành tiền.' },
    { q: 'Nợ vay 400, vốn chủ sở hữu 600. Tỷ lệ nợ trên vốn (debt-to-capital) là:', choices: ['66,7%', '40,0%', '60,0%'], answer: 1, explain: 'Debt-to-capital = 400/(400 + 600) = 40%. Lựa chọn 66,7% là debt-to-equity. Lựa chọn 60,0% là tỷ lệ vốn chủ trên tổng vốn.' },
    { q: 'Tỷ số đặc thù nào phù hợp nhất để phân tích một chuỗi khách sạn?', choices: ['Hệ số an toàn vốn', 'Tăng trưởng doanh thu cửa hàng hiện hữu', 'Tỷ lệ lấp đầy phòng và giá phòng bình quân'], answer: 2, explain: 'Khách sạn dùng occupancy rate và average daily rate. Hệ số an toàn vốn dành cho ngân hàng. Tăng trưởng doanh thu cửa hàng hiện hữu dành cho bán lẻ.' },
    { q: 'ROE 15%, tỷ lệ chi trả cổ tức 40%. Tốc độ tăng trưởng bền vững là:', choices: ['9,0%', '6,0%', '15,0%'], answer: 0, explain: 'g = b x ROE = (1 - 40%) x 15% = 9%. Lựa chọn 6,0% nhân với tỷ lệ chi trả thay vì tỷ lệ giữ lại. Lựa chọn 15,0% bỏ qua phần lợi nhuận chia cổ tức.' },
    { q: 'Hạn chế nào của phân tích tỷ số là quan trọng nhất khi so sánh hai công ty cùng ngành ở hai quốc gia khác nhau?', choices: ['Tỷ số luôn so sánh được nếu cùng ngành', 'Khác biệt chuẩn mực và lựa chọn phương pháp kế toán làm giảm khả năng so sánh', 'Tỷ số càng cao thì công ty càng tốt'], answer: 1, explain: 'Khác biệt IFRS và US GAAP, phương pháp tồn kho, khấu hao làm tỷ số khó so sánh; cần điều chỉnh trước khi so sánh. Phương án "luôn so sánh được nếu cùng ngành" sai vì cùng ngành chưa đủ. Phương án "tỷ số càng cao càng tốt" sai: nhiều tỷ số có mức tối ưu, quá cao cũng không tốt (ví dụ current ratio).' },
    { q: "Doanh thu 6.000, giá vốn hàng bán 4.200, hàng tồn kho đầu năm 500 và cuối năm 700. Vòng quay hàng tồn kho (dùng tồn kho bình quân) là:", choices: ["7,0 lần", "10,0 lần", "6,0 lần"], answer: 0, explain: "Vòng quay tồn kho = giá vốn / tồn kho bình quân = 4.200 / 600 = 7,0 lần. Lựa chọn 10,0 lần dùng doanh thu thay vì giá vốn. Lựa chọn 6,0 lần dùng tồn kho cuối năm thay vì bình quân." },
    { q: "Giá vốn hàng bán 2.400; hàng tồn kho đầu năm 300, cuối năm 360; phải trả người bán đầu năm 200, cuối năm 240. Số ngày trả tiền (DPO), dùng phải trả bình quân và 365 ngày, gần nhất với:", choices: ["33,5 ngày", "32,6 ngày", "35,6 ngày"], answer: 1, explain: "Mua hàng = giá vốn + tồn kho cuối - tồn kho đầu = 2.400 + 360 - 300 = 2.460. Vòng quay phải trả = 2.460 / 220 = 11,18; DPO = 365 / 11,18 = 32,6 ngày. Lựa chọn 33,5 ngày dùng giá vốn thay vì mua hàng. Lựa chọn 35,6 ngày dùng phải trả cuối năm thay vì bình quân." },
    { q: "Tiền 80, chứng khoán ngắn hạn 40, phải thu 180, hàng tồn kho 300. Chi phí hoạt động bằng tiền cả năm (đã loại khấu hao 365) là 2.190. Khoảng thời gian phòng vệ (defensive interval), dùng 365 ngày, là:", choices: ["100,0 ngày", "42,9 ngày", "50,0 ngày"], answer: 2, explain: "Chi tiêu tiền mặt bình quân ngày = 2.190 / 365 = 6,00. Defensive interval = (80 + 40 + 180) / 6,00 = 50,0 ngày. Lựa chọn 100,0 ngày cộng cả hàng tồn kho (tỷ số này chỉ dùng tài sản phòng vệ như quick ratio). Lựa chọn 42,9 ngày cộng lại khấu hao vào chi tiêu, dù khấu hao không phải chi tiền." },
    { q: "EBIT 900, chi phí lãi vay 150, tiền thuê tài sản 100. Hệ số khả năng trả chi phí cố định (fixed charge coverage) là:", choices: ["4,00 lần", "6,00 lần", "3,60 lần"], answer: 0, explain: "Fixed charge coverage = (EBIT + tiền thuê) / (lãi vay + tiền thuê) = (900 + 100) / (150 + 100) = 4,00 lần. Lựa chọn 6,00 lần là hệ số khả năng trả lãi (EBIT / lãi vay). Lựa chọn 3,60 lần quên cộng tiền thuê vào tử số." },
    { q: "Tổng tài sản 8.000. Nợ phải trả gồm: vay ngắn hạn 600, vay dài hạn 2.400, nợ thuê tài sản 400, phải trả người bán 900, nợ khác không chịu lãi 700. Tỷ số nợ trên tài sản (debt-to-assets) là:", choices: ["62,5%", "42,5%", "37,5%"], answer: 1, explain: "Nợ trong tỷ số solvency là nợ chịu lãi, kể cả nợ thuê: 600 + 2.400 + 400 = 3.400; tỷ số = 3.400 / 8.000 = 42,5%. Lựa chọn 62,5% dùng tổng nợ phải trả (5.000). Lựa chọn 37,5% bỏ sót nợ thuê tài sản." },
    { q: "Một công ty có ROA 6,0% và tỷ số tổng nợ phải trả trên vốn chủ 1,5 (dùng số bình quân, không có cổ phần ưu đãi). ROE là:", choices: ["9,0%", "6,0%", "15,0%"], answer: 2, explain: "Đòn bẩy tài chính = tài sản / vốn chủ = (nợ phải trả + vốn chủ) / vốn chủ = 1 + 1,5 = 2,5. ROE = ROA × đòn bẩy = 6,0% × 2,5 = 15,0%. Lựa chọn 9,0% nhân ROA với tỷ số nợ trên vốn chủ thay vì tài sản trên vốn chủ. Lựa chọn 6,0% bỏ qua đòn bẩy." },
    { q: "Lợi nhuận ròng 300, chi phí lãi vay 80, thuế suất 25%, tổng tài sản bình quân 4.000. ROA tính theo biến thể cộng lại lãi vay sau thuế (để loại ảnh hưởng của cơ cấu vốn) là:", choices: ["7,50%", "9,00%", "9,50%"], answer: 1, explain: "ROA điều chỉnh = (lợi nhuận ròng + lãi vay × (1 - t)) / tài sản bình quân = (300 + 80 × 0,75) / 4.000 = 9,00%. Lựa chọn 7,50% là ROA thông thường, chưa cộng lại lãi vay. Lựa chọn 9,50% cộng lại lãi vay trước thuế, quên lá chắn thuế." },
    { q: "Lợi nhuận ròng 1.000, cổ tức ưu đãi 100, vốn chủ sở hữu thường bình quân 6.000, cổ phần ưu đãi 1.000. Tỷ suất lợi nhuận trên vốn chủ sở hữu thường (return on common equity) là:", choices: ["15,00%", "16,67%", "12,86%"], answer: 0, explain: "Return on common equity = (lợi nhuận ròng - cổ tức ưu đãi) / vốn chủ thường bình quân = (1.000 - 100) / 6.000 = 15,00%. Lựa chọn 16,67% quên trừ cổ tức ưu đãi. Lựa chọn 12,86% cộng cổ phần ưu đãi vào mẫu số." },
    { q: "Theo DuPont 5 thành phần: lợi nhuận ròng 600, EBT 800, EBIT 1.000, doanh thu 5.000, tổng tài sản bình quân 4.000, vốn chủ bình quân 2.500. ROE là:", choices: ["30,0%", "15,0%", "24,0%"], answer: 2, explain: "Gánh nặng thuế = 600/800 = 0,75; gánh nặng lãi vay = 800/1.000 = 0,80; biên EBIT = 20%; vòng quay tài sản = 1,25; đòn bẩy = 1,60. ROE = 0,75 × 0,80 × 20% × 1,25 × 1,60 = 24,0% (khớp 600 / 2.500). Lựa chọn 30,0% bỏ sót gánh nặng lãi vay. Lựa chọn 15,0% bỏ sót đòn bẩy (đó là ROA)." },
    { q: "Công ty A: biên lợi nhuận ròng 4%, vòng quay tài sản 2,5, đòn bẩy 1,5. Công ty B: biên lợi nhuận ròng 6%, vòng quay tài sản 1,0, đòn bẩy 2,5. Phát biểu nào chính xác nhất?", choices: ["Hai công ty có cùng ROE 15%, nhưng ROE của B dựa nhiều hơn vào đòn bẩy; ROA của A là 10% so với 6% của B", "B có ROE cao hơn vì biên lợi nhuận ròng cao hơn", "Hai công ty có cùng ROE 15% và cùng ROA, nên rủi ro như nhau"], answer: 0, explain: "ROE A = 4% × 2,5 × 1,5 = 15%; ROE B = 6% × 1,0 × 2,5 = 15%. ROA A = 10%, ROA B = 6%: B đạt cùng ROE nhờ vay nhiều hơn, rủi ro cao hơn. Biên lợi nhuận cao hơn không làm ROE của B cao hơn vì vòng quay thấp. ROA hai công ty khác nhau nên phát biểu \"cùng ROA, rủi ro như nhau\" sai." },
    { q: "Doanh thu 6.000. Vốn lưu động (tài sản ngắn hạn - nợ ngắn hạn) đầu năm 700, cuối năm 900. Vòng quay vốn lưu động (dùng số bình quân) là:", choices: ["6,67 lần", "7,50 lần", "8,57 lần"], answer: 1, explain: "Vòng quay vốn lưu động = doanh thu / vốn lưu động bình quân = 6.000 / 800 = 7,50 lần. Lựa chọn 6,67 lần dùng số cuối năm. Lựa chọn 8,57 lần dùng số đầu năm." },
    { q: "So với năm trước, số ngày tồn kho (DOH) của công ty giảm 10 ngày, số ngày thu tiền (DSO) tăng 5 ngày, số ngày trả tiền (DPO) tăng 8 ngày. Chu kỳ chuyển đổi tiền thay đổi:", choices: ["Tăng 3 ngày", "Giảm 5 ngày", "Giảm 13 ngày"], answer: 2, explain: "Chu kỳ chuyển đổi tiền = DOH + DSO - DPO. Thay đổi = -10 + 5 - 8 = -13 ngày, tức giảm 13 ngày: tiền bị giam trong vốn lưu động ít hơn. Lựa chọn tăng 3 ngày cộng DPO thay vì trừ. Lựa chọn giảm 5 ngày bỏ qua DPO." },
    { q: "Một chuỗi bán lẻ mở thêm nhiều cửa hàng mới mỗi năm. Tỷ số nào phù hợp nhất để đánh giá tăng trưởng doanh thu từ chính các cửa hàng đã hoạt động?", choices: ["Tăng trưởng doanh thu cửa hàng hiện hữu (same-store sales)", "Biên lãi ròng (net interest margin)", "Tỷ lệ lấp đầy (occupancy rate)"], answer: 0, explain: "Same-store sales so sánh doanh thu của các cửa hàng đã hoạt động ít nhất một năm, loại ảnh hưởng của việc mở cửa hàng mới. Biên lãi ròng là tỷ số đặc thù ngân hàng. Tỷ lệ lấp đầy là tỷ số đặc thù ngành khách sạn." },
    { q: "Lợi nhuận hoạt động 5 năm của công ty X có trung bình 200, độ lệch chuẩn 50; của công ty Y có trung bình 400, độ lệch chuẩn 80. Dựa trên hệ số biến thiên, công ty có rủi ro kinh doanh cao hơn là:", choices: ["Y, vì độ lệch chuẩn 80 lớn hơn", "X, với hệ số biến thiên 0,25 so với 0,20 của Y", "Y, với hệ số biến thiên 5,00 so với 4,00 của X"], answer: 1, explain: "Hệ số biến thiên = độ lệch chuẩn / trung bình: X = 50/200 = 0,25; Y = 80/400 = 0,20. X biến động tương đối lớn hơn nên rủi ro kinh doanh cao hơn. Chỉ so độ lệch chuẩn bỏ qua khác biệt quy mô. Lựa chọn 5,00 đảo ngược công thức (trung bình / độ lệch chuẩn)." },
    { q: "Bộ phận A: doanh thu 2.500, lợi nhuận hoạt động 300, tài sản 1.500. Bộ phận B: doanh thu 2.100, lợi nhuận hoạt động 420, tài sản 3.000. Phát biểu nào chính xác nhất?", choices: ["A có cả biên lợi nhuận hoạt động và lợi nhuận trên tài sản cao hơn B", "B hiệu quả hơn A trên mọi tiêu chí vì lợi nhuận hoạt động lớn hơn", "B có biên lợi nhuận hoạt động cao hơn (20,0% so với 12,0%) nhưng lợi nhuận trên tài sản thấp hơn (14,0% so với 20,0%)"], answer: 2, explain: "Biên lợi nhuận: A = 300/2.500 = 12,0%; B = 420/2.100 = 20,0%. Lợi nhuận trên tài sản: A = 300/1.500 = 20,0%; B = 420/3.000 = 14,0%. B lãi nhiều hơn trên mỗi đồng doanh thu nhưng dùng nhiều tài sản hơn hẳn. Phát biểu A cao hơn ở cả hai tiêu chí sai vì biên của A (12,0%) thấp hơn của B. Lợi nhuận tuyệt đối lớn hơn không có nghĩa B hiệu quả hơn trên mọi tiêu chí." },
    { q: "Nhà phân tích dự báo lợi nhuận theo ba trường hợp \"suy thoái\", \"cơ sở\" và \"tăng trưởng\"; mỗi trường hợp thay đổi đồng thời tăng trưởng doanh thu, biên lợi nhuận và lãi suất theo một câu chuyện nhất quán. Kỹ thuật này là:", choices: ["Phân tích kịch bản (scenario analysis)", "Phân tích độ nhạy (sensitivity analysis)", "Mô phỏng Monte Carlo (simulation)"], answer: 0, explain: "Phân tích kịch bản thay đổi đồng thời nhiều giả định theo từng câu chuyện nhất quán. Phân tích độ nhạy chỉ thay đổi một giả định, giữ nguyên các giả định khác. Mô phỏng gán phân phối xác suất cho các biến đầu vào và chạy hàng nghìn lần để được phân phối kết quả." },
    { q: "Doanh thu năm nay 10.000, dự báo tăng 6% năm sau. Biên EBIT dự kiến giữ ở 12%, chi phí lãi vay năm sau 150, thuế suất 25%. Lợi nhuận ròng dự báo năm sau là:", choices: ["787,5", "954,0", "841,5"], answer: 2, explain: "Doanh thu năm sau = 10.000 × 1,06 = 10.600; EBIT = 12% × 10.600 = 1.272; EBT = 1.272 - 150 = 1.122; lợi nhuận ròng = 1.122 × 0,75 = 841,5. Lựa chọn 787,5 quên tăng trưởng doanh thu. Lựa chọn 954,0 quên trừ lãi vay." },
    { q: "Giá cổ phiếu 30, có 100 triệu cổ phiếu đang lưu hành. Lợi nhuận ròng 400 triệu, dòng tiền hoạt động (CFO) 600 triệu. Tỷ số giá trên dòng tiền (P/CF) là:", choices: ["7,5", "6,0", "5,0"], answer: 2, explain: "CFO mỗi cổ phiếu = 600 / 100 = 6,0; P/CF = 30 / 6,0 = 5,0. Lựa chọn 7,5 là P/E (30 / 4,0). Lựa chọn 6,0 là dòng tiền mỗi cổ phiếu, chưa chia giá." },
    { q: "Trong năm, hệ số thanh toán hiện hành của công ty tăng từ 1,8 lên 2,4, còn hệ số thanh toán nhanh gần như không đổi ở 0,9 (nợ ngắn hạn không đổi). Kết luận phù hợp nhất là:", choices: ["Thanh khoản cải thiện rõ rệt nhờ tiền và phải thu tăng", "Phần tăng chủ yếu nằm ở hàng tồn kho; nên kiểm tra số ngày tồn kho", "Công ty đã giảm nợ ngắn hạn"], answer: 1, explain: "Quick ratio loại hàng tồn kho; khi current ratio tăng mà quick ratio không đổi và nợ ngắn hạn không đổi, phần tăng nằm ở hàng tồn kho (hoặc chi phí trả trước), nên cần xem DOH để biết có phải hàng chậm bán. Nếu tiền và phải thu tăng, quick ratio cũng phải tăng. Đề cho nợ ngắn hạn không đổi." },
    { q: "Giá vốn hàng bán năm 1 (năm gốc) là 480 và năm 3 là 630; doanh thu năm 1 là 800 và năm 3 là 1.000. Trên báo cáo common-size theo chiều ngang (horizontal), giá vốn năm 3 được trình bày là:", choices: ["131,25%", "63,00%", "125,00%"], answer: 0, explain: "Common-size theo chiều ngang chia mỗi khoản cho chính nó ở năm gốc: 630 / 480 = 131,25%. Lựa chọn 63,00% là common-size theo chiều dọc (giá vốn / doanh thu năm 3). Lựa chọn 125,00% là chỉ số ngang của doanh thu, không phải giá vốn. So sánh hai chỉ số cho thấy giá vốn tăng nhanh hơn doanh thu." },
  ];

  const widgets = {
    dupont(el) {
      el.innerHTML = `
        <div class="w-row"><label>Gánh nặng thuế: <b data-o="tb">0,75</b><input type="range" min="0.5" max="1" step="0.01" value="0.75" data-i="tb"></label>
        <label>Gánh nặng lãi vay: <b data-o="ib">0,875</b><input type="range" min="0.5" max="1" step="0.005" value="0.875" data-i="ib"></label>
        <label>Biên EBIT: <b data-o="em">16%</b><input type="range" min="2" max="30" step="0.5" value="16" data-i="em"></label>
        <label>Vòng quay tài sản: <b data-o="at">1,18</b><input type="range" min="0.3" max="3" step="0.0005" value="1.1765" data-i="at"></label>
        <label>Đòn bẩy tài chính: <b data-o="lv">1,81</b><input type="range" min="1" max="5" step="0.0005" value="1.8085" data-i="lv"></label></div>
        <div class="w-out"><div class="w-price" data-o="p"></div><div class="w-bar"><span data-o="bar"></span><i></i></div><div class="w-note" data-o="note"></div></div>`;
      const q = s => el.querySelector(s);
      const fmt = (x, d = 2) => x.toFixed(d).replace('.', ',');
      const upd = () => {
        const tb = +q('[data-i="tb"]').value, ib = +q('[data-i="ib"]').value, em = +q('[data-i="em"]').value / 100;
        const at = +q('[data-i="at"]').value, lv = +q('[data-i="lv"]').value;
        const npm = tb * ib * em, roa = npm * at, roe = roa * lv;
        q('[data-o="tb"]').textContent = fmt(tb);
        q('[data-o="ib"]').textContent = fmt(ib, 3);
        q('[data-o="em"]').textContent = `${fmt(em * 100, 1)}%`;
        q('[data-o="at"]').textContent = fmt(at);
        q('[data-o="lv"]').textContent = fmt(lv);
        q('[data-o="p"]').textContent = `ROE = ${fmt(roe * 100)}%`;
        q('[data-o="bar"]').style.width = `${Math.min(100, (roe / 0.5) * 100)}%`;
        q('[data-o="note"]').textContent = `Biên LN ròng = ${fmt(npm * 100)}% ; ROA = ${fmt(roa * 100)}% ; ROE = ROA × đòn bẩy. ${lv >= 2.5 ? 'Đòn bẩy cao: ROE phụ thuộc nhiều vào vay nợ, rủi ro lớn hơn.' : roa >= 0.12 ? 'ROA cao: ROE đến chủ yếu từ hiệu quả hoạt động, bền vững hơn.' : 'Thử tăng đòn bẩy và xem ROE tăng mà ROA không đổi.'}`;
      };
      el.addEventListener('input', upd);
      upd();
    },
  };

  window.LESSONS['FSA-11'] = {
    moduleId: 'FSA-11',
    calculator: 'BA II Plus',
    warmup: [
      'Ôn FSA-10: nếu phải thu tăng nhanh hơn doanh thu nhiều năm liền, đó là dấu hiệu gì?',
      'Hai công ty cùng ROE 20%. Bạn cần thêm thông tin gì để biết công ty nào tốt hơn?',
      'Kể tên ba khoản mục bảng cân đối bạn nghĩ sẽ dùng để đo thanh khoản ngắn hạn.',
    ],
    sections,
    glossary,
    practice,
    widgets,
    slides: [],
    wrapup: [
      'Viết lại DuPont 5 thành phần và giải thích mỗi thành phần đo điều gì.',
      'Với bộ số liệu chung, tính lại DSO, DOH, DPO và CCC mà không nhìn bài.',
      'Còn câu hỏi nào chưa rõ? Ghi lại để hỏi.',
    ],
  };
}());
