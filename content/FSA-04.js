// Bài giảng FSA-04 - Analyzing Statements of Cash Flows I (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t } = window.CFAH;

  const sections = [
    {
      title: '1. Bức tranh lớn: ba nhóm dòng tiền',
      minutes: 9,
      html: `
<p>Lợi nhuận theo dồn tích có thể "đẹp" trong khi doanh nghiệp cạn tiền. ${t('cfs', 'Báo cáo lưu chuyển tiền tệ')} cho biết <b>tiền thật</b> đến từ đâu và đi đâu, chia thành ba nhóm:</p>
<table class="plain"><thead><tr><th>Nhóm</th><th>Tiền vào</th><th>Tiền ra</th></tr></thead><tbody>
<tr><td>${t('cfo', 'Hoạt động kinh doanh (CFO)')}</td><td>Thu từ khách hàng; (US GAAP) lãi và cổ tức nhận được</td><td>Trả nhà cung cấp, nhân viên, chi phí khác, thuế; (US GAAP) lãi vay</td></tr>
<tr><td>${t('cfi', 'Hoạt động đầu tư (CFI)')}</td><td>Bán tài sản cố định, bán chứng khoán đầu tư (không phải kinh doanh), thu hồi cho vay</td><td>Mua tài sản cố định (capex), mua chứng khoán đầu tư, cho vay, mua công ty</td></tr>
<tr><td>${t('cff', 'Hoạt động tài chính (CFF)')}</td><td>Phát hành cổ phiếu, đi vay, phát hành trái phiếu</td><td>Trả nợ gốc, mua lại cổ phiếu, (US GAAP) trả cổ tức</td></tr>
</tbody></table>
<div class="formula">Thay đổi tiền trong kỳ = CFO + CFI + CFF</div>
<p>Hai loại giao dịch cần nhớ:</p>
<ul>
<li>Mua bán ${t('trading', 'chứng khoán kinh doanh')} (mua để bán ngắn hạn) thường thuộc <b>CFO</b>, không phải CFI.</li>
<li>${t('noncash', 'Giao dịch không bằng tiền')} như mua tài sản bằng cách phát hành nợ hay cổ phiếu, chuyển trái phiếu thành cổ phiếu: <b>không</b> xuất hiện trên báo cáo, nhưng phải thuyết minh riêng.</li>
</ul>
<div class="key">Bốn LOS của module: (1) liên kết với BCKQKD và BCĐKT, (2) các bước lập CFO theo phương pháp trực tiếp và gián tiếp, tính CFI, CFF từ số liệu hai báo cáo, (3) chuyển từ gián tiếp sang trực tiếp, (4) so sánh IFRS và US GAAP. Phân tích dòng tiền tự do và tỷ số dòng tiền là nội dung của FSA-05.</div>`,
    },
    {
      title: '2. Liên kết với báo cáo kết quả kinh doanh và bảng cân đối',
      minutes: 8,
      html: `
<p>Báo cáo lưu chuyển tiền tệ là <b>cầu nối</b>: nó giải thích vì sao tiền trên bảng cân đối đầu kỳ thành tiền cuối kỳ. Mỗi khoản trên BCKQKD gắn với một hoặc vài tài khoản trên BCĐKT:</p>
<table class="plain"><thead><tr><th>BCKQKD</th><th>Tài khoản BCĐKT liên quan</th><th>Dòng tiền</th></tr></thead><tbody>
<tr><td>Doanh thu</td><td>Phải thu, doanh thu chưa thực hiện</td><td>Thu từ khách hàng</td></tr>
<tr><td>Giá vốn</td><td>Hàng tồn kho, phải trả người bán</td><td>Trả nhà cung cấp</td></tr>
<tr><td>Chi phí lương</td><td>Lương phải trả</td><td>Trả nhân viên</td></tr>
<tr><td>Chi phí khác</td><td>Chi phí trả trước, chi phí phải trả</td><td>Trả chi phí khác</td></tr>
<tr><td>Chi phí lãi vay</td><td>Lãi vay phải trả</td><td>Trả lãi</td></tr>
<tr><td>Chi phí thuế</td><td>Thuế phải nộp, thuế hoãn lại</td><td>Nộp thuế</td></tr>
<tr><td>Khấu hao, lãi lỗ bán tài sản</td><td>Tài sản cố định, khấu hao lũy kế</td><td>CFI (bán, mua tài sản)</td></tr>
<tr><td>Lợi nhuận ròng, cổ tức</td><td>Lợi nhuận giữ lại</td><td>CFF (trả cổ tức)</td></tr>
</tbody></table>
<div class="key">Quy tắc "tài khoản chữ T": <b>Số đầu kỳ + Tăng - Giảm = Số cuối kỳ</b>. Ví dụ phải thu: đầu kỳ + doanh thu bán chịu - tiền thu được = cuối kỳ. Biết 3 số thì tìm được số còn lại.</div>
<h4>Dữ liệu ví dụ dùng cho cả module: Công ty Minh An (nghìn USD)</h4>
<table class="plain"><thead><tr><th>BCKQKD năm 20X7</th><th></th></tr></thead><tbody>
<tr><td>Doanh thu</td><td>2.000</td></tr>
<tr><td>Giá vốn hàng bán</td><td>(1.200)</td></tr>
<tr><td>Chi phí lương</td><td>(220)</td></tr>
<tr><td>Khấu hao</td><td>(90)</td></tr>
<tr><td>Chi phí hoạt động khác</td><td>(60)</td></tr>
<tr><td>Chi phí lãi vay</td><td>(40)</td></tr>
<tr><td>Lãi bán thiết bị</td><td>10</td></tr>
<tr><td>Chi phí thuế (25%)</td><td>(100)</td></tr>
<tr><td><b>Lợi nhuận ròng</b></td><td><b>300</b></td></tr>
</tbody></table>
<table class="plain"><thead><tr><th>BCĐKT</th><th>20X6</th><th>20X7</th><th>Thay đổi</th></tr></thead><tbody>
<tr><td>Tiền</td><td>50</td><td>207</td><td>+157</td></tr>
<tr><td>Phải thu</td><td>180</td><td>230</td><td>+50</td></tr>
<tr><td>Hàng tồn kho</td><td>300</td><td>270</td><td>-30</td></tr>
<tr><td>Chi phí trả trước</td><td>20</td><td>25</td><td>+5</td></tr>
<tr><td>Nguyên giá TSCĐ</td><td>1.000</td><td>1.150</td><td>+150</td></tr>
<tr><td>Khấu hao lũy kế</td><td>(300)</td><td>(350)</td><td>-50</td></tr>
<tr><td>Phải trả người bán</td><td>150</td><td>170</td><td>+20</td></tr>
<tr><td>Lương phải trả</td><td>30</td><td>25</td><td>-5</td></tr>
<tr><td>Lãi vay phải trả</td><td>10</td><td>12</td><td>+2</td></tr>
<tr><td>Thuế phải nộp</td><td>40</td><td>35</td><td>-5</td></tr>
<tr><td>Doanh thu chưa thực hiện</td><td>40</td><td>60</td><td>+20</td></tr>
<tr><td>Nợ vay dài hạn</td><td>400</td><td>450</td><td>+50</td></tr>
<tr><td>Vốn cổ phần</td><td>500</td><td>520</td><td>+20</td></tr>
<tr><td>Lợi nhuận giữ lại</td><td>80</td><td>260</td><td>+180</td></tr>
</tbody></table>
<p>Thông tin thêm: trong năm bán một thiết bị có nguyên giá 100, khấu hao lũy kế 40; vay mới 100, trả nợ gốc 50; phát hành cổ phiếu 20; trả cổ tức 120 (không có cổ tức phải trả).</p>`,
    },
    {
      title: '3. Lập CFO theo phương pháp trực tiếp',
      minutes: 14,
      html: `
<p>${t('direct', 'Phương pháp trực tiếp (direct method)')} liệt kê từng dòng tiền thu và chi bằng tiền. Cách làm: lấy từng khoản trên BCKQKD, điều chỉnh bằng thay đổi của tài khoản BCĐKT liên quan.</p>
<table class="plain"><thead><tr><th>Dòng</th><th>Công thức</th><th>Minh An</th></tr></thead><tbody>
<tr><td>Thu từ khách hàng</td><td>Doanh thu - tăng phải thu + tăng doanh thu chưa thực hiện</td><td>2.000 - 50 + 20 = <b>1.970</b></td></tr>
<tr><td>Trả nhà cung cấp</td><td>Mua hàng - tăng phải trả, với mua hàng = giá vốn + tăng tồn kho</td><td>(1.200 - 30) - 20 = <b>1.150</b></td></tr>
<tr><td>Trả nhân viên</td><td>Chi phí lương - tăng lương phải trả</td><td>220 + 5 = <b>225</b></td></tr>
<tr><td>Trả chi phí khác</td><td>Chi phí khác + tăng chi phí trả trước - tăng chi phí phải trả</td><td>60 + 5 = <b>65</b></td></tr>
<tr><td>Trả lãi vay</td><td>Chi phí lãi vay - tăng lãi vay phải trả</td><td>40 - 2 = <b>38</b></td></tr>
<tr><td>Nộp thuế</td><td>Chi phí thuế - tăng thuế phải nộp - tăng thuế hoãn lại phải trả</td><td>100 + 5 = <b>105</b></td></tr>
<tr><td><b>CFO</b></td><td></td><td>1.970 - 1.150 - 225 - 65 - 38 - 105 = <b>387</b></td></tr>
</tbody></table>
<p class="tip"><b>Mẹo dấu:</b> tài sản ngắn hạn tăng nghĩa là tiền <b>bị giữ lại</b> (bán chịu nhiều hơn thu được, mua hàng nhiều hơn bán ra), nên tiền thu giảm hoặc tiền chi tăng. Nợ ngắn hạn tăng nghĩa là doanh nghiệp <b>chưa phải trả</b>, nên tiền chi giảm. Doanh thu chưa thực hiện tăng nghĩa là đã thu trước, nên tiền thu tăng.</p>
<p><b>Không</b> đưa vào phương pháp trực tiếp: khấu hao (không phải tiền), lãi bán thiết bị (tiền bán thiết bị nằm ở CFI).</p>
<div class="example"><div class="ex-h">Ví dụ 3.1</div>
<p>Giá vốn 3.000; tồn kho tăng từ 600 lên 680; phải trả người bán tăng từ 300 lên 360. Tiền trả nhà cung cấp?</p>
<details><summary>Xem lời giải</summary><p>Mua hàng = 3.000 + 80 = 3.080 (bán hết hàng giá vốn 3.000 và còn để dành thêm 80 trong kho). Tiền trả = 3.080 - 60 = <b>3.020</b> (60 chưa trả, vẫn còn nợ). Đáp án bẫy: 2.860 (trừ cả hai) hoặc 3.140 (cộng cả hai).</p></details></div>
<p>Ưu điểm của phương pháp trực tiếp: cho thấy <b>các nguồn thu chi cụ thể</b>, hữu ích để dự báo dòng tiền. Cả IFRS và US GAAP đều <b>khuyến khích</b> phương pháp này, nhưng trên thực tế phần lớn doanh nghiệp dùng phương pháp gián tiếp.</p>`,
    },
    {
      title: '4. Lập CFO theo phương pháp gián tiếp',
      minutes: 11,
      html: `
<p>${t('indirect', 'Phương pháp gián tiếp (indirect method)')} bắt đầu từ lợi nhuận ròng rồi loại bỏ mọi khoản làm lợi nhuận khác tiền. Kết quả CFO <b>luôn bằng</b> phương pháp trực tiếp; chỉ cách trình bày khác.</p>
<div class="formula">CFO = Lợi nhuận ròng + Chi phí không bằng tiền - Lãi (hoặc + lỗ) không thuộc CFO - Tăng TS ngắn hạn hoạt động + Tăng nợ ngắn hạn hoạt động</div>
<table class="plain"><thead><tr><th>Bước</th><th>Khoản</th><th>Minh An</th></tr></thead><tbody>
<tr><td>Bắt đầu</td><td>Lợi nhuận ròng</td><td>300</td></tr>
<tr><td>1. Cộng chi phí không bằng tiền</td><td>Khấu hao, phân bổ, suy giảm giá trị</td><td>+90</td></tr>
<tr><td>2. Loại lãi lỗ thuộc hoạt động đầu tư, tài chính</td><td>Lãi bán thiết bị (trừ đi; nếu lỗ thì cộng lại)</td><td>-10</td></tr>
<tr><td rowspan="3">3. Thay đổi tài sản ngắn hạn hoạt động</td><td>Phải thu tăng</td><td>-50</td></tr>
<tr><td>Tồn kho giảm</td><td>+30</td></tr>
<tr><td>Chi phí trả trước tăng</td><td>-5</td></tr>
<tr><td rowspan="5">4. Thay đổi nợ ngắn hạn hoạt động</td><td>Phải trả người bán tăng</td><td>+20</td></tr>
<tr><td>Lương phải trả giảm</td><td>-5</td></tr>
<tr><td>Lãi vay phải trả tăng</td><td>+2</td></tr>
<tr><td>Thuế phải nộp giảm</td><td>-5</td></tr>
<tr><td>Doanh thu chưa thực hiện tăng</td><td>+20</td></tr>
<tr><td><b>CFO</b></td><td></td><td><b>387</b></td></tr>
</tbody></table>
<p class="warn"><b>Bẫy hay gặp:</b> (1) Cộng lãi bán tài sản thay vì trừ. (2) Đảo dấu thay đổi vốn lưu động: tài sản tăng thì <b>trừ</b>, nợ tăng thì <b>cộng</b>. (3) Đưa thay đổi của vay ngắn hạn hoặc cổ tức phải trả vào CFO (chúng thuộc CFF). (4) Quên lãi chưa thực hiện của chứng khoán kinh doanh: đây là khoản không bằng tiền nên phải <b>trừ</b> đi; thuế hoãn lại phải trả tăng thì <b>cộng</b>.</p>
<div class="example"><div class="ex-h">Ví dụ 4.1</div>
<p>Lợi nhuận ròng 200; khấu hao 40; lãi bán thiết bị 12; phải thu tăng 30; tồn kho giảm 18; phải trả người bán giảm 9; chi phí phải trả tăng 6; thuế hoãn lại phải trả tăng 5. CFO?</p>
<details><summary>Xem lời giải</summary><p>CFO = 200 + 40 - 12 - 30 + 18 - 9 + 6 + 5 = <b>218</b>.</p></details></div>
<p>Ưu điểm của phương pháp gián tiếp: cho thấy <b>vì sao lợi nhuận khác tiền</b>, giúp phát hiện lợi nhuận "kém chất lượng" (lợi nhuận tăng nhưng phải thu và tồn kho phình to).</p>`,
    },
    {
      title: '5. Tính CFI và CFF từ số liệu hai báo cáo',
      minutes: 10,
      html: `
<h4>CFI: dựng lại tài khoản tài sản cố định</h4>
<div class="formula">Nguyên giá đầu kỳ + Mua mới - Nguyên giá tài sản bán = Nguyên giá cuối kỳ</div>
<div class="formula">KH lũy kế đầu kỳ + Chi phí khấu hao - KH lũy kế của tài sản bán = KH lũy kế cuối kỳ</div>
<div class="formula">Tiền bán tài sản = Giá trị còn lại của tài sản bán + Lãi (hoặc - Lỗ)</div>
<div class="example"><div class="ex-h">Ví dụ 5.1 - Minh An</div>
<details><summary>Xem lời giải</summary>
<p>Mua mới: 1.000 + capex - 100 = 1.150, nên capex = <b>250</b>.<br>
Kiểm tra khấu hao lũy kế: 300 + 90 - 40 = 350, khớp với cuối kỳ.<br>
Giá trị còn lại thiết bị bán = 100 - 40 = 60; tiền bán = 60 + 10 = <b>70</b>.<br>
CFI = -250 + 70 = <b>-180</b>.</p></details></div>
<h4>CFF: nợ vay và vốn chủ</h4>
<ul>
<li>Nợ vay: vay mới - trả gốc. Nếu chỉ biết số đầu và cuối kỳ, thay đổi ròng = vay mới - trả gốc.</li>
<li>Vốn cổ phần: phát hành - mua lại cổ phiếu.</li>
<li>Cổ tức đã trả = Cổ tức công bố - tăng cổ tức phải trả. Cổ tức công bố có thể suy ra từ lợi nhuận giữ lại: đầu kỳ + lợi nhuận ròng - cổ tức công bố = cuối kỳ.</li>
</ul>
<div class="example"><div class="ex-h">Ví dụ 5.2 - Minh An</div>
<details><summary>Xem lời giải</summary>
<p>Lợi nhuận giữ lại: 80 + 300 - cổ tức = 260, nên cổ tức = 120 (không có cổ tức phải trả, nên đã trả 120).<br>
CFF = +100 (vay mới) - 50 (trả gốc) + 20 (phát hành) - 120 (cổ tức) = <b>-50</b>.<br>
Tổng: 387 - 180 - 50 = <b>157</b> = thay đổi tiền 207 - 50. Báo cáo khớp.</p></details></div>
<div class="example"><div class="ex-h">Ví dụ 5.3</div>
<p>Nguyên giá TSCĐ đầu kỳ 800, cuối kỳ 900, mua mới 250. Khấu hao lũy kế đầu kỳ 300, cuối kỳ 330, chi phí khấu hao 90. Lãi bán tài sản 15. Tiền bán tài sản?</p>
<details><summary>Xem lời giải</summary><p>Nguyên giá tài sản bán = 800 + 250 - 900 = 150. KH lũy kế của tài sản bán = 300 + 90 - 330 = 60. Giá trị còn lại = 90. Tiền bán = 90 + 15 = <b>105</b>.</p></details></div>`,
    },
    {
      title: '6. Chuyển từ phương pháp gián tiếp sang trực tiếp',
      minutes: 8,
      html: `
<p>Đề thi hay cho báo cáo theo phương pháp gián tiếp (cùng BCKQKD) và yêu cầu tìm một dòng của phương pháp trực tiếp. Cách làm: <b>ghép từng dòng điều chỉnh với khoản BCKQKD liên quan</b>.</p>
<table class="plain"><thead><tr><th>Dòng trực tiếp</th><th>Lấy từ BCKQKD</th><th>Cộng các dòng điều chỉnh gián tiếp liên quan</th><th>Kết quả</th></tr></thead><tbody>
<tr><td>Thu từ khách hàng</td><td>Doanh thu 2.000</td><td>Phải thu -50, doanh thu chưa thực hiện +20</td><td>1.970</td></tr>
<tr><td>Trả nhà cung cấp</td><td>Giá vốn -1.200</td><td>Tồn kho +30, phải trả người bán +20</td><td>-1.150</td></tr>
<tr><td>Trả nhân viên</td><td>Chi phí lương -220</td><td>Lương phải trả -5</td><td>-225</td></tr>
<tr><td>Trả chi phí khác</td><td>Chi phí khác -60</td><td>Chi phí trả trước -5</td><td>-65</td></tr>
<tr><td>Trả lãi vay</td><td>Chi phí lãi vay -40</td><td>Lãi vay phải trả +2</td><td>-38</td></tr>
<tr><td>Nộp thuế</td><td>Chi phí thuế -100</td><td>Thuế phải nộp -5</td><td>-105</td></tr>
<tr><td>Không dùng</td><td>Khấu hao -90, lãi bán TS +10</td><td>+90, -10 (triệt tiêu nhau)</td><td>0</td></tr>
</tbody></table>
<p>Quy trình 3 bước:</p>
<ol>
<li>Viết BCKQKD với <b>doanh thu dương, chi phí âm</b>.</li>
<li>Loại các khoản không bằng tiền và lãi lỗ không thuộc CFO (khấu hao, phân bổ, lãi lỗ bán tài sản).</li>
<li>Với mỗi khoản còn lại, <b>cộng nguyên dấu</b> dòng điều chỉnh vốn lưu động tương ứng từ báo cáo gián tiếp. Vì dấu đã đúng sẵn trong báo cáo gián tiếp, không cần nghĩ lại.</li>
</ol>
<div class="example"><div class="ex-h">Ví dụ 6.1</div>
<p>Chi phí thuế 250. Trên báo cáo gián tiếp: "tăng thuế phải nộp +10", "tăng thuế hoãn lại phải trả +15". Thuế đã nộp?</p>
<details><summary>Xem lời giải</summary><p>-250 + 10 + 15 = <b>-225</b>, tức nộp 225. Bẫy: quên dòng thuế hoãn lại (240) hoặc trừ ngược dấu (275).</p></details></div>`,
    },
    {
      title: '7. Khác biệt IFRS và US GAAP',
      minutes: 11,
      html: `
<table class="plain"><thead><tr><th>Khoản</th><th>IFRS (IAS 7)</th><th>US GAAP</th></tr></thead><tbody>
<tr><td>Lãi nhận được</td><td>CFO hoặc CFI</td><td>CFO</td></tr>
<tr><td>Cổ tức nhận được</td><td>CFO hoặc CFI</td><td>CFO</td></tr>
<tr><td>Lãi vay đã trả</td><td>CFO hoặc CFF</td><td>CFO</td></tr>
<tr><td>Cổ tức đã trả</td><td>CFO hoặc CFF</td><td>CFF</td></tr>
<tr><td>Thuế thu nhập đã nộp</td><td>CFO, trừ khi gắn cụ thể với hoạt động đầu tư hoặc tài chính</td><td>CFO</td></tr>
<tr><td>${t('overdraft', 'Thấu chi ngân hàng (bank overdraft)')}</td><td>Có thể tính vào tiền và tương đương tiền (nếu trả khi có yêu cầu và là một phần quản lý tiền)</td><td>Không tính vào tiền; là khoản vay, thuộc CFF</td></tr>
<tr><td>Phương pháp</td><td>Trực tiếp hoặc gián tiếp, khuyến khích trực tiếp</td><td>Trực tiếp hoặc gián tiếp, khuyến khích trực tiếp; nếu dùng trực tiếp thì <b>phải kèm bảng đối chiếu</b> lợi nhuận ròng với CFO (tức gián tiếp)</td></tr>
<tr><td>Thuyết minh</td><td>Trình bày riêng tiền lãi, cổ tức, thuế</td><td>Thuyết minh tiền lãi và thuế đã trả</td></tr>
</tbody></table>
<p class="tip"><b>Cách nhớ:</b> US GAAP cứng nhắc, chỉ có <b>cổ tức đã trả</b> là ở CFF, còn lãi nhận, cổ tức nhận, lãi trả đều ở CFO. IFRS cho chọn, "nhận" thì CFO hoặc CFI, "trả" thì CFO hoặc CFF. Một khi đã chọn, phải áp dụng nhất quán qua các kỳ.</p>
<div class="example"><div class="ex-h">Ví dụ 7.1 - Minh An nếu báo cáo theo IFRS</div>
<p>CFO theo US GAAP là 387 (đã trừ lãi vay trả 38; cổ tức trả 120 ở CFF). Nếu theo IFRS, CFO là bao nhiêu khi công ty (a) xếp lãi vay đã trả vào CFF, (b) xếp cổ tức đã trả vào CFO, (c) làm cả hai?</p>
<details><summary>Xem lời giải</summary>
<p>(a) 387 + 38 = <b>425</b>. (b) 387 - 120 = <b>267</b>. (c) 387 + 38 - 120 = <b>305</b>.<br>
Tổng thay đổi tiền vẫn là 157 trong mọi trường hợp; chỉ <b>phân loại</b> thay đổi. Hệ quả: khi so sánh CFO (và các tỷ số dựa trên CFO) giữa công ty theo IFRS và US GAAP, phải <b>đưa về cùng cách phân loại</b> trước.</p></details></div>
<p class="warn"><b>Theo dõi chuẩn mực mới:</b> IFRS 18 (hiệu lực cho kỳ bắt đầu từ 1/1/2027) sửa IAS 7: với phần lớn doanh nghiệp phi tài chính, lãi và cổ tức nhận được xếp vào CFI, lãi vay và cổ tức đã trả xếp vào CFF, và phương pháp gián tiếp bắt đầu từ <b>lợi nhuận hoạt động</b> thay vì lợi nhuận ròng. Đề thi Level I truyền thống vẫn hỏi theo bảng IAS 7 ở trên; hãy đọc kỹ đề nói chuẩn mực nào.</p>`,
    },
    {
      title: '8. Tóm tắt và bẫy thường gặp',
      minutes: 4,
      html: `
<table class="plain"><thead><tr><th>Tình huống</th><th>Nhớ</th></tr></thead><tbody>
<tr><td>Ba nhóm</td><td>CFO + CFI + CFF = thay đổi tiền. Giao dịch không bằng tiền: chỉ thuyết minh</td></tr>
<tr><td>Thu từ khách hàng</td><td>Doanh thu - tăng phải thu + tăng doanh thu chưa thực hiện</td></tr>
<tr><td>Trả nhà cung cấp</td><td>Giá vốn + tăng tồn kho - tăng phải trả</td></tr>
<tr><td>Nộp thuế</td><td>Chi phí thuế - tăng thuế phải nộp - tăng thuế hoãn lại phải trả</td></tr>
<tr><td>Gián tiếp</td><td>+ khấu hao; - lãi bán TS; TS ngắn hạn tăng thì trừ; nợ ngắn hạn tăng thì cộng</td></tr>
<tr><td>Tiền bán TSCĐ</td><td>Giá trị còn lại + lãi; dựng lại nguyên giá và khấu hao lũy kế</td></tr>
<tr><td>Cổ tức đã trả</td><td>Cổ tức công bố - tăng cổ tức phải trả</td></tr>
<tr><td>Gián tiếp sang trực tiếp</td><td>Khoản BCKQKD (chi phí mang dấu âm) cộng nguyên dấu dòng điều chỉnh liên quan</td></tr>
<tr><td>US GAAP</td><td>Lãi nhận, cổ tức nhận, lãi trả: CFO. Cổ tức trả: CFF. Thấu chi: CFF</td></tr>
<tr><td>IFRS (IAS 7)</td><td>Nhận: CFO hoặc CFI. Trả: CFO hoặc CFF. Thấu chi có thể là tiền</td></tr>
</tbody></table>
<p>Tiếp theo: FSA-05 Analyzing Statements of Cash Flows II (dòng tiền tự do, tỷ số dòng tiền).</p>`,
    },
  ];

  const glossary = {
    cfs: ['Statement of cash flows', 'Báo cáo lưu chuyển tiền tệ', 'Báo cáo dòng tiền vào ra trong kỳ, chia ba nhóm kinh doanh, đầu tư, tài chính.'],
    cfo: ['Cash flow from operating activities (CFO)', 'Lưu chuyển tiền từ hoạt động kinh doanh', 'Dòng tiền từ các hoạt động tạo doanh thu chính của doanh nghiệp.'],
    cfi: ['Cash flow from investing activities (CFI)', 'Lưu chuyển tiền từ hoạt động đầu tư', 'Mua bán tài sản dài hạn và các khoản đầu tư không thuộc tương đương tiền hay chứng khoán kinh doanh.'],
    cff: ['Cash flow from financing activities (CFF)', 'Lưu chuyển tiền từ hoạt động tài chính', 'Giao dịch với chủ nợ và chủ sở hữu: vay, trả nợ, phát hành, mua lại cổ phiếu, cổ tức.'],
    trading: ['Trading securities', 'Chứng khoán kinh doanh', 'Chứng khoán mua để bán trong ngắn hạn; dòng tiền mua bán thường thuộc CFO.'],
    noncash: ['Non-cash investing and financing activities', 'Giao dịch đầu tư, tài chính không bằng tiền', 'Ví dụ mua tài sản bằng phát hành nợ; không vào báo cáo, phải thuyết minh.'],
    direct: ['Direct method', 'Phương pháp trực tiếp', 'Trình bày CFO bằng các dòng thu chi tiền cụ thể: thu từ khách hàng, trả nhà cung cấp...'],
    indirect: ['Indirect method', 'Phương pháp gián tiếp', 'Trình bày CFO bằng cách điều chỉnh lợi nhuận ròng cho các khoản không bằng tiền và thay đổi vốn lưu động.'],
    overdraft: ['Bank overdraft', 'Thấu chi ngân hàng', 'Khoản chi vượt số dư tài khoản; IFRS có thể coi là một phần tiền, US GAAP coi là khoản vay.'],
  };

  const practice = [
    { q: 'Theo US GAAP, tiền lãi nhận được từ trái phiếu đầu tư được phân loại vào:', choices: ['CFO', 'CFI', 'CFF'], answer: 0, explain: 'US GAAP xếp lãi nhận, cổ tức nhận và lãi vay trả vào CFO. CFI là lựa chọn được phép theo IFRS, không phải US GAAP.' },
    { q: 'Một công ty theo IFRS xếp 300 lãi vay đã trả vào CFF. So với một công ty giống hệt theo US GAAP, CFO của công ty IFRS:', choices: ['Thấp hơn 300', 'Cao hơn 300', 'Bằng nhau'], answer: 1, explain: 'US GAAP trừ lãi vay trong CFO. Công ty IFRS đưa khoản này sang CFF nên CFO cao hơn 300, CFF thấp hơn 300; tổng thay đổi tiền không đổi.' },
    { q: 'Doanh thu 5.000; phải thu tăng từ 400 lên 520; doanh thu chưa thực hiện giảm từ 100 xuống 60. Tiền thu từ khách hàng là:', choices: ['5.120', '4.880', '4.840'], answer: 2, explain: 'Thu = 5.000 - 120 - 40 = 4.840. Doanh thu chưa thực hiện giảm nghĩa là doanh thu năm nay có một phần đã thu tiền từ năm trước. A cộng phần tăng phải thu thay vì trừ. B bỏ quên doanh thu chưa thực hiện.' },
    { q: 'Giá vốn 3.000; tồn kho tăng từ 600 lên 680; phải trả người bán tăng từ 300 lên 360. Tiền trả nhà cung cấp là:', choices: ['3.020', '2.860', '3.140'], answer: 0, explain: 'Mua hàng = 3.000 + 80 = 3.080; tiền trả = 3.080 - 60 = 3.020. B trừ cả phần tăng tồn kho. C cộng cả phần tăng phải trả.' },
    { q: 'Lợi nhuận ròng 200; khấu hao 40; lãi bán thiết bị 12; phải thu tăng 30; tồn kho giảm 18; phải trả người bán giảm 9; chi phí phải trả tăng 6; thuế hoãn lại phải trả tăng 5. CFO theo phương pháp gián tiếp là:', choices: ['242', '218', '248'], answer: 1, explain: 'CFO = 200 + 40 - 12 - 30 + 18 - 9 + 6 + 5 = 218. A cộng lãi bán thiết bị thay vì trừ (tiền bán thiết bị thuộc CFI). C đảo dấu các thay đổi vốn lưu động.' },
    { q: 'Nguyên giá TSCĐ đầu kỳ 800, cuối kỳ 900, mua mới 250. Khấu hao lũy kế đầu kỳ 300, cuối kỳ 330, chi phí khấu hao 90. Công ty ghi lãi bán tài sản 15. Tiền thu từ bán tài sản là:', choices: ['90', '75', '105'], answer: 2, explain: 'Nguyên giá tài sản bán = 800 + 250 - 900 = 150; KH lũy kế của nó = 300 + 90 - 330 = 60; giá trị còn lại 90; tiền bán = 90 + 15 = 105. A là giá trị còn lại, quên lãi. B trừ lãi thay vì cộng.' },
    { q: 'Công ty công bố cổ tức 80; cổ tức phải trả tăng từ 20 lên 30. Cổ tức đã trả và cách phân loại theo US GAAP là:', choices: ['70, CFF', '90, CFF', '70, CFO'], answer: 0, explain: 'Cổ tức đã trả = 80 - 10 = 70, US GAAP xếp vào CFF. B cộng phần tăng cổ tức phải trả thay vì trừ. C là cách xếp chỉ được phép theo IFRS.' },
    { q: 'Theo IFRS (IAS 7), cặp khoản nào được phép xếp vào CFO hoặc CFF?', choices: ['Lãi và cổ tức nhận được', 'Lãi vay và cổ tức đã trả', 'Thuế thu nhập đã nộp và tiền mua TSCĐ'], answer: 1, explain: 'Các khoản "trả" (lãi vay, cổ tức) được chọn CFO hoặc CFF. Các khoản "nhận" (lãi, cổ tức) được chọn CFO hoặc CFI. Thuế thường ở CFO; mua TSCĐ luôn ở CFI.' },
    { q: 'Nhận định nào về thấu chi ngân hàng là chính xác nhất?', choices: ['Cả IFRS và US GAAP đều luôn coi là khoản vay thuộc CFF', 'US GAAP có thể tính vào tiền, IFRS coi là khoản vay', 'IFRS có thể tính vào tiền và tương đương tiền, US GAAP coi là khoản vay'], answer: 2, explain: 'Theo IFRS, thấu chi trả khi có yêu cầu và là một phần quản lý tiền có thể được trừ vào tiền và tương đương tiền. US GAAP không cho phép, coi là khoản vay (CFF). A và B sai ở ít nhất một chuẩn mực.' },
    { q: 'Chi phí thuế thu nhập 250. Báo cáo gián tiếp có dòng "tăng thuế phải nộp +10" và "tăng thuế hoãn lại phải trả +15". Số thuế đã nộp bằng tiền là:', choices: ['225', '240', '275'], answer: 0, explain: 'Thuế đã nộp = 250 - 10 - 15 = 225: một phần chi phí thuế chưa phải trả (còn nợ) hoặc hoãn lại. B quên thuế hoãn lại. C cộng thay vì trừ.' },
  ];

  window.LESSONS['FSA-04'] = {
    moduleId: 'FSA-04',
    calculator: 'Không cần máy tính',
    warmup: [
      'Ôn FSA-02: một công ty bán chịu 100 và chưa thu được tiền. Lợi nhuận và tiền thay đổi thế nào?',
      'Ôn FSA-03: lỗ suy giảm lợi thế thương mại có làm giảm tiền không?',
      'Theo bạn, một công ty có lãi nhiều năm liền có thể phá sản không? Vì sao?',
    ],
    sections,
    glossary,
    practice,
    widgets: {},
    slides: [],
    wrapup: [
      'Tự lập lại CFO của Minh An theo cả hai phương pháp mà không xem bảng.',
      'Viết bảng IFRS và US GAAP cho lãi nhận, cổ tức nhận, lãi trả, cổ tức trả, thấu chi.',
      'Giải thích vì sao tiền bán thiết bị không nằm trong CFO dù lãi bán thiết bị nằm trong lợi nhuận.',
    ],
  };
}());
