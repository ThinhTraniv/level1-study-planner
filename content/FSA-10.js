// Bài giảng FSA-10 - Financial Reporting Quality (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t } = window.CFAH;

  const sections = [
    {
      title: '1. Bức tranh lớn',
      minutes: 6,
      html: `
<p>Các module FSA trước dạy cách <b>đọc</b> báo cáo tài chính. Module này dạy cách <b>nghi ngờ</b> chúng một cách có hệ thống. Chuẩn mực kế toán cho phép nhiều lựa chọn và ước tính, nên cùng một thực tế kinh doanh có thể được kể theo nhiều cách.</p>
<div class="key">Hai câu hỏi tách bạch: (1) Báo cáo có <b>phản ánh trung thực</b> thực tế kinh doanh không? (${t('frq', 'chất lượng báo cáo tài chính')}) (2) Bản thân thực tế kinh doanh đó có <b>tốt và bền vững</b> không? (${t('eq', 'chất lượng kết quả, hay chất lượng lợi nhuận')})</div>
<ol>
  <li>Chất lượng báo cáo so với chất lượng kết quả (LOS 1, phần 2).</li>
  <li>Phổ chất lượng từ cao nhất đến gian lận (LOS 2, phần 3).</li>
  <li>Kế toán thận trọng và kế toán tích cực (LOS 3, phần 4).</li>
  <li>Động cơ và điều kiện dẫn đến báo cáo kém chất lượng (LOS 4, phần 5).</li>
  <li>Cơ chế kỷ luật và giới hạn của chúng (LOS 5, phần 6).</li>
  <li>Lựa chọn trình bày, gồm chỉ tiêu non-GAAP (LOS 6, phần 7).</li>
  <li>Lựa chọn phương pháp và ước tính kế toán để quản trị lợi nhuận, dòng tiền, bảng cân đối (LOS 7, phần 8).</li>
  <li>Dấu hiệu cảnh báo và cách phát hiện (LOS 8, phần 9).</li>
</ol>
<p class="tip">Module này gần như không có công thức. Đề thi hỏi dạng tình huống: "công ty làm X, đây là loại gì, ảnh hưởng thế nào". Hãy học theo <b>chiều tác động</b> (lợi nhuận hiện tại tăng hay giảm, tài sản tăng hay giảm).</p>`,
    },
    {
      title: '2. Chất lượng báo cáo và chất lượng kết quả',
      minutes: 16,
      html: `
<h4>Chất lượng báo cáo tài chính (financial reporting quality)</h4>
<p>Báo cáo chất lượng cao là báo cáo <b>hữu ích cho việc ra quyết định</b>: ${t('relevant', 'thích hợp (relevant)')} và ${t('faithful', 'trình bày trung thực (faithful representation)')}, tức đầy đủ, trung lập và không có sai sót. Tuân thủ GAAP là điều kiện cần nhưng chưa đủ: công ty vẫn có thể chọn các phương án trong khuôn khổ GAAP sao cho bức tranh đẹp hơn thực tế.</p>
<h4>Chất lượng kết quả (quality of reported results)</h4>
<ul>
<li><b>Chất lượng lợi nhuận</b>: lợi nhuận cao chất lượng là lợi nhuận <b>bền vững</b> (lặp lại được, đến từ hoạt động cốt lõi) và <b>đủ lớn</b> để tạo ra lợi suất tương xứng với vốn đầu tư. Lợi nhuận từ bán tài sản một lần, hoàn nhập dự phòng hay lãi tỷ giá là chất lượng thấp.</li>
<li><b>Chất lượng dòng tiền</b>: dòng tiền hoạt động (CFO) đến từ hoạt động kinh doanh bền vững, không phải từ việc trì hoãn trả nhà cung cấp hay bán khoản phải thu.</li>
<li><b>Chất lượng bảng cân đối</b>: không có nợ ngoài bảng, tài sản được đo lường hợp lý, cơ cấu vốn và thanh khoản phù hợp.</li>
</ul>
<h4>Ma trận hai chiều</h4>
<table class="plain"><thead><tr><th></th><th>Kết quả chất lượng cao</th><th>Kết quả chất lượng thấp</th></tr></thead><tbody>
<tr><td><b>Báo cáo chất lượng cao</b></td><td>Lý tưởng: báo cáo trung thực một doanh nghiệp tốt</td><td>Báo cáo trung thực một doanh nghiệp yếu. Nhà phân tích biết rõ thực trạng để định giá</td></tr>
<tr><td><b>Báo cáo chất lượng thấp</b></td><td colspan="2">Không đánh giá được chất lượng kết quả, vì con số đã bị bóp méo. Kết quả thật có thể tốt hoặc xấu</td></tr>
</tbody></table>
<div class="example"><div class="ex-h">Ví dụ 2.1</div>
<p>Công ty A tuân thủ IFRS, thuyết minh đầy đủ. Lợi nhuận năm nay tăng 40%, nhưng 70% phần tăng đến từ lãi bán một tòa nhà. Đánh giá?</p>
<details><summary>Xem lời giải</summary><p>Chất lượng báo cáo <b>cao</b> (trung thực, đầy đủ), nhưng chất lượng lợi nhuận <b>thấp</b> vì phần lớn tăng trưởng không lặp lại. Khi dự báo, cần loại lãi bán tòa nhà khỏi lợi nhuận cốt lõi.</p></details></div>`,
    },
    {
      title: '3. Phổ chất lượng báo cáo tài chính',
      minutes: 12,
      html: `
<p>Chất lượng không phải "có hoặc không" mà là một ${t('spectrum', 'phổ (spectrum)')} từ cao xuống thấp:</p>
<table class="plain"><thead><tr><th>Mức</th><th>Mô tả</th><th>Ví dụ</th></tr></thead><tbody>
<tr><td>1 (cao nhất)</td><td>Tuân thủ GAAP, hữu ích cho quyết định; lợi nhuận bền vững và đủ lớn</td><td>Doanh nghiệp tốt, báo cáo trung thực</td></tr>
<tr><td>2</td><td>Tuân thủ GAAP, hữu ích cho quyết định; nhưng lợi nhuận <b>thấp hoặc không bền vững</b></td><td>Báo cáo trung thực một năm lãi nhờ khoản thu bất thường</td></tr>
<tr><td>3</td><td>Tuân thủ GAAP nhưng có <b>lựa chọn thiên lệch</b> (biased choices)</td><td>Chọn ước tính lạc quan, trình bày gây hiểu nhầm</td></tr>
<tr><td>4</td><td>Tuân thủ GAAP nhưng <b>quản trị lợi nhuận</b> (earnings management)</td><td>Cố ý làm phẳng lợi nhuận bằng ước tính hoặc giao dịch thật (đẩy hàng, cắt R&amp;D)</td></tr>
<tr><td>5</td><td><b>Vi phạm GAAP</b>: kế toán không tuân thủ</td><td>Không trích khấu hao, ghi nhận doanh thu trái chuẩn mực</td></tr>
<tr><td>6 (thấp nhất)</td><td>Vi phạm GAAP: <b>giao dịch giả</b> (fictitious transactions)</td><td>Hóa đơn ảo, tài sản không tồn tại</td></tr>
</tbody></table>
<ul>
<li>${t('biased', 'Lựa chọn thiên lệch')} có thể là <b>tích cực</b> (làm đẹp kết quả hiện tại) hoặc <b>thận trọng</b> (làm xấu kết quả hiện tại). Cả hai đều làm giảm chất lượng, vì không trung lập.</li>
<li>Thiên lệch cũng có thể nằm ở <b>cách trình bày</b>: đặt chỉ tiêu non-GAAP lên trước, thuyết minh mơ hồ, chia nhỏ khoản lỗ vào nhiều dòng.</li>
<li>${t('em', 'Quản trị lợi nhuận')} gồm hai loại: qua <b>hoạt động thật</b> (real earnings management, ví dụ giảm chi quảng cáo cuối năm) và qua <b>lựa chọn kế toán</b> (ví dụ giảm dự phòng). Khó phân biệt với quyết định kinh doanh bình thường.</li>
</ul>
<p class="warn"><b>Bẫy:</b> mức 3 và 4 vẫn <b>tuân thủ GAAP</b>. Đề có thể mô tả một công ty "tuân thủ chuẩn mực" nhưng chọn ước tính để vừa đủ đạt kế hoạch lợi nhuận: đó là earnings management, không phải vi phạm GAAP.</p>`,
    },
    {
      title: '4. Kế toán thận trọng và kế toán tích cực',
      minutes: 14,
      html: `
<table class="plain"><thead><tr><th></th><th>${t('conservative', 'Thận trọng (conservative)')}</th><th>${t('aggressive', 'Tích cực (aggressive)')}</th></tr></thead><tbody>
<tr><td>Lợi nhuận và tài sản hiện tại</td><td>Thấp hơn</td><td>Cao hơn</td></tr>
<tr><td>Lợi nhuận tương lai</td><td>Cao hơn (chi phí đã ghi trước)</td><td>Thấp hơn (chi phí bị đẩy về sau)</td></tr>
<tr><td>Ví dụ</td><td>Thời gian sử dụng hữu ích ngắn, dự phòng nợ xấu cao, ghi chi phí R&amp;D ngay</td><td>Thời gian sử dụng dài, dự phòng thấp, vốn hóa chi phí, ghi nhận doanh thu sớm</td></tr>
</tbody></table>
<p>Kế toán thận trọng <b>không phải</b> lúc nào cũng tốt. Chuẩn mực hiện hành đòi hỏi ${t('neutral', 'tính trung lập (neutrality)')}, và thận trọng quá mức cũng là một dạng thiên lệch. Một số quy định mang tính thận trọng có sẵn trong chuẩn mực (ví dụ R&amp;D theo US GAAP ghi chi phí ngay, hàng tồn kho ghi nhận theo giá thấp hơn giữa giá gốc và giá trị thuần có thể thực hiện).</p>
<h4>Thận trọng hôm nay để tích cực ngày mai</h4>
<ul>
<li>${t('cookie', 'Cookie jar reserves')}: năm lợi nhuận tốt, trích dự phòng (bảo hành, tái cơ cấu, nợ xấu) quá mức; năm xấu hoàn nhập để "rút bánh từ hũ". Kết quả là lợi nhuận phẳng giả tạo: ${t('smooth', 'làm phẳng lợi nhuận (earnings smoothing)')}.</li>
<li>${t('bigbath', 'Big bath')}: năm đã chắc chắn lỗ (thường khi đổi CEO), ghi giảm tài sản và trích dự phòng thật lớn để dọn sạch, giúp các năm sau đẹp hơn.</li>
</ul>
<div class="example"><div class="ex-h">Ví dụ 4.1</div>
<p>Công ty mua máy 1.000.000, không có giá trị thanh lý. Ban lãnh đạo có thể chọn thời gian sử dụng 5 năm hoặc 8 năm. EBIT trước khấu hao máy này là 500.000. Mỗi lựa chọn ảnh hưởng thế nào đến EBIT năm 1?</p>
<details><summary>Xem lời giải</summary><p>5 năm: khấu hao 200.000. 8 năm: khấu hao 125.000. Chọn 8 năm làm khấu hao giảm 75.000, tức EBIT cao hơn một khoản bằng <b>15%</b> của 500.000. Nếu đối thủ cùng ngành dùng 5 năm, lựa chọn 8 năm là <b>tích cực</b>. Lưu ý: tổng khấu hao cả đời tài sản như nhau, chỉ khác thời điểm.</p></details></div>`,
    },
    {
      title: '5. Động cơ và điều kiện dẫn đến báo cáo kém chất lượng',
      minutes: 14,
      html: `
<h4>Động cơ (motivations)</h4>
<ul>
<li><b>Đạt hoặc vượt kỳ vọng lợi nhuận</b> (dự báo của chuyên gia phân tích, kế hoạch nội bộ, lợi nhuận năm trước). Đây là động cơ phổ biến nhất: thị trường phạt nặng công ty hụt dự báo dù chỉ một chút.</li>
<li><b>Sự nghiệp và uy tín</b> của ban lãnh đạo.</li>
<li><b>Thù lao</b>: thưởng gắn với lợi nhuận, quyền chọn cổ phiếu.</li>
<li><b>Tránh vi phạm điều khoản vay (debt covenants)</b>, đặc biệt ở công ty đòn bẩy cao.</li>
<li><b>Giữ niềm tin</b> của nhà đầu tư, khách hàng, nhà cung cấp; đáp ứng yêu cầu vốn của cơ quan quản lý (ngân hàng, bảo hiểm).</li>
<li>Ngược lại, có lúc công ty muốn <b>giảm</b> lợi nhuận: để dành cho năm sau, để được hưởng ưu đãi thuế, hoặc để giảm sức ép đòi tăng lương hay giảm giá bán.</li>
</ul>
<h4>Điều kiện: tam giác gian lận (fraud triangle)</h4>
<table class="plain"><thead><tr><th>Yếu tố</th><th>Ý nghĩa</th><th>Biểu hiện</th></tr></thead><tbody>
<tr><td>${t('opportunity', 'Cơ hội (opportunity)')}</td><td>Môi trường cho phép làm sai mà khó bị phát hiện</td><td>Kiểm soát nội bộ yếu, HĐQT giám sát kém, chuẩn mực có nhiều lựa chọn, chế tài nhẹ</td></tr>
<tr><td>${t('motivation', 'Động cơ / áp lực (motivation)')}</td><td>Lý do để làm sai</td><td>Áp lực tài chính, thưởng, kỳ vọng thị trường</td></tr>
<tr><td>${t('rational', 'Hợp lý hóa (rationalization)')}</td><td>Người làm tự biện minh</td><td>"Chỉ tạm thời, quý sau sẽ bù lại", "ai cũng làm thế"</td></tr>
</tbody></table>
<div class="example"><div class="ex-h">Ví dụ 5.1</div>
<p>Một công ty có CEO kiêm chủ tịch HĐQT, ủy ban kiểm toán không có thành viên độc lập, kế toán trưởng mới nghỉ việc. Đây là yếu tố nào của tam giác gian lận?</p>
<details><summary>Xem lời giải</summary><p><b>Cơ hội</b>: cấu trúc giám sát yếu tạo điều kiện để thao túng mà không bị phát hiện. Động cơ là lý do (ví dụ sắp phát hành cổ phiếu), còn hợp lý hóa là thái độ của người thực hiện.</p></details></div>`,
    },
    {
      title: '6. Cơ chế kỷ luật chất lượng báo cáo và giới hạn',
      minutes: 12,
      html: `
<table class="plain"><thead><tr><th>Cơ chế</th><th>Vai trò</th><th>Giới hạn</th></tr></thead><tbody>
<tr><td><b>Thị trường</b></td><td>Công ty cần vốn, báo cáo kém làm chi phí vốn tăng</td><td>Chỉ có tác dụng khi thông tin xấu bị lộ</td></tr>
<tr><td><b>Cơ quan quản lý</b> (thành viên IOSCO, ví dụ SEC)</td><td>Quy định đăng ký, công bố thông tin bắt buộc, yêu cầu xác nhận của lãnh đạo về báo cáo và kiểm soát nội bộ, rà soát hồ sơ, xử phạt</td><td>Nguồn lực có hạn; quy định khác nhau giữa các nước</td></tr>
<tr><td><b>${t('audit', 'Kiểm toán độc lập')}</b></td><td>Đưa ra ý kiến về việc báo cáo có trình bày trung thực, hợp lý theo chuẩn mực; với công ty niêm yết ở Mỹ còn có ý kiến về kiểm soát nội bộ</td><td>Chỉ cho <b>sự đảm bảo hợp lý</b>, kiểm toán dựa trên chọn mẫu; kiểm toán viên do công ty trả phí; không được thiết kế để phát hiện mọi gian lận</td></tr>
<tr><td><b>Hợp đồng tư nhân</b></td><td>Chủ nợ và nhà đầu tư đặt điều khoản, tự kiểm tra số liệu</td><td>Chính điều khoản vay lại tạo động cơ để làm đẹp số</td></tr>
</tbody></table>
<h4>Hồ sơ công bố thông tin ở Mỹ cần biết tên</h4>
<ul>
<li>Form 10-K (báo cáo năm), 10-Q (báo cáo quý), 8-K (sự kiện quan trọng), proxy statement (DEF 14A: thù lao lãnh đạo, bầu HĐQT), 20-F và 40-F (công ty nước ngoài), Form 144 và Forms 3, 4, 5 (giao dịch của người nội bộ).</li>
</ul>
<h4>Ý kiến kiểm toán</h4>
<p>${t('unqual', 'Ý kiến chấp nhận toàn phần (unqualified / clean opinion)')}: báo cáo trình bày hợp lý trên các khía cạnh trọng yếu. Ngoài ra có ý kiến ngoại trừ (qualified), ý kiến trái ngược (adverse) và từ chối đưa ra ý kiến (disclaimer).</p>
<p class="warn"><b>Bẫy:</b> ý kiến chấp nhận toàn phần <b>không</b> có nghĩa là không có gian lận. Nhiều vụ gian lận lớn có báo cáo được kiểm toán "sạch" nhiều năm liền.</p>`,
    },
    {
      title: '7. Lựa chọn trình bày và chỉ tiêu non-GAAP',
      minutes: 14,
      html: `
<p>Không đổi một con số nào, công ty vẫn có thể ảnh hưởng đến nhận định của nhà phân tích bằng <b>cách trình bày</b>:</p>
<ul>
<li>Nhấn mạnh ${t('nongaap', 'chỉ tiêu non-GAAP')} (adjusted EBITDA, core earnings, pro forma EPS) ở đầu thông cáo báo chí; con số theo chuẩn mực để ở cuối.</li>
<li>Định nghĩa chỉ tiêu thay đổi giữa các kỳ, loại bỏ các chi phí "không thường xuyên" năm nào cũng xuất hiện.</li>
<li>Chia khoản lỗ vào nhiều dòng nhỏ, hoặc gộp khoản lãi bất thường vào doanh thu.</li>
<li>Chỉ tiêu đặc thù tự đặt ra (ví dụ "doanh thu trên mỗi khách hàng hoạt động") không có định nghĩa chuẩn.</li>
</ul>
<h4>Quy định với non-GAAP</h4>
<ul>
<li>Tại Mỹ, SEC yêu cầu: trình bày chỉ tiêu GAAP tương ứng gần nhất với <b>mức độ nổi bật ít nhất ngang bằng</b>, kèm <b>bảng đối chiếu</b> và giải thích vì sao chỉ tiêu non-GAAP hữu ích.</li>
<li>Theo IFRS, thông lệ tương tự (hướng dẫn của ESMA tại châu Âu): định nghĩa rõ, đối chiếu với chỉ tiêu IFRS, không nổi bật hơn. IFRS 18 (áp dụng từ kỳ báo cáo năm 2027) yêu cầu công bố các chỉ tiêu do ban lãnh đạo tự định nghĩa (management-defined performance measures) trong thuyết minh, có đối chiếu.</li>
</ul>
<div class="example"><div class="ex-h">Ví dụ 7.1 - Đọc bảng đối chiếu</div>
<p>Lợi nhuận hoạt động theo GAAP là 150. Công ty cộng lại: chi phí tái cơ cấu 30 (đã xuất hiện 3 năm liền), chi phí thù lao bằng cổ phiếu 25, khấu hao tài sản vô hình từ thâu tóm 15, lỗ suy giảm giá trị 40. "Adjusted operating income" là bao nhiêu và nên nhìn thế nào?</p>
<details><summary>Xem lời giải</summary><p>Adjusted = 150 + 30 + 25 + 15 + 40 = <b>260</b>, gấp <b>1,73 lần</b> con số GAAP. Tái cơ cấu lặp lại 3 năm là chi phí <b>thường xuyên</b>; thù lao bằng cổ phiếu là chi phí kinh tế thật (pha loãng cổ đông). Nhà phân tích nên giữ các khoản này trong chi phí, nhiều nhất chỉ cân nhắc loại lỗ suy giảm giá trị nếu thật sự không lặp lại.</p></details></div>`,
    },
    {
      title: '8. Lựa chọn phương pháp và ước tính kế toán',
      minutes: 16,
      html: `
<h4>a) Lợi nhuận và bảng cân đối</h4>
<table class="plain"><thead><tr><th>Lựa chọn</th><th>Cách làm đẹp lợi nhuận hiện tại</th></tr></thead><tbody>
<tr><td>Ghi nhận doanh thu</td><td>Điều khoản giao hàng FOB shipping point (ghi doanh thu khi hàng rời kho) thay vì FOB destination; đẩy hàng sớm cuối kỳ; ${t('channel', 'nhồi kênh phân phối (channel stuffing)')}; ${t('billhold', 'bill-and-hold')} (ghi doanh thu nhưng hàng vẫn giữ ở kho người bán)</td></tr>
<tr><td>Dự phòng tổn thất tín dụng</td><td>Trích thấp: phải thu ròng cao hơn, chi phí thấp hơn. Ví dụ phải thu 2.000: trích 2% thay vì 4% làm chi phí giảm từ 80 xuống 40</td></tr>
<tr><td>Hàng tồn kho</td><td>Khi giá tăng, FIFO cho giá vốn thấp và tồn kho cao hơn bình quân gia quyền; trì hoãn ghi giảm giá trị hàng lỗi thời</td></tr>
<tr><td>Khấu hao</td><td>Thời gian sử dụng dài hơn, giá trị thanh lý cao hơn, phương pháp đường thẳng thay vì khấu hao nhanh</td></tr>
<tr><td>Vốn hóa hay ghi chi phí</td><td>${t('capitalize', 'Vốn hóa')} chi phí (phát triển phần mềm, lãi vay, chi phí quảng cáo) làm tài sản tăng, chi phí hiện tại giảm</td></tr>
<tr><td>Suy giảm giá trị, lợi thế thương mại</td><td>Trì hoãn ghi nhận suy giảm giá trị; phân bổ giá mua thâu tóm nhiều vào lợi thế thương mại (không khấu hao) thay vì tài sản phải khấu hao</td></tr>
<tr><td>Thuế hoãn lại</td><td>Giảm valuation allowance của DTA làm chi phí thuế giảm (xem FSA-09)</td></tr>
<tr><td>Ngoài bảng cân đối</td><td>Cấu trúc giao dịch để nợ không xuất hiện trên bảng cân đối, làm đòn bẩy trông thấp hơn</td></tr>
</tbody></table>
<h4>b) Dòng tiền hoạt động (CFO)</h4>
<ul>
<li><b>Kéo dài thời gian trả nhà cung cấp</b> qua ngày khóa sổ: CFO tăng tạm thời, kỳ sau giảm lại.</li>
<li><b>Bán hoặc chiết khấu khoản phải thu</b> (factoring, chứng khoán hóa): thu tiền sớm, CFO tăng.</li>
<li><b>Lựa chọn phân loại theo IFRS</b>: lãi vay đã trả có thể đưa vào dòng tiền tài chính thay vì hoạt động; lãi và cổ tức nhận được có thể đưa vào đầu tư.</li>
<li><b>Vốn hóa chi phí</b>: khoản chi chuyển từ CFO sang dòng tiền đầu tư (CFI), CFO trông tốt hơn dù tổng tiền chi không đổi.</li>
</ul>
<p class="tip"><b>Nhớ chiều tác động:</b> mọi lựa chọn "làm đẹp" lợi nhuận hôm nay đều phải trả giá bằng lợi nhuận thấp hơn ngày mai (trừ gian lận bị phát hiện thì trả giá ngay). Các thủ thuật CFO thường không bền: khoản phải trả kéo dài rồi cũng phải trả.</p>`,
    },
    {
      title: '9. Dấu hiệu cảnh báo và cách phát hiện',
      minutes: 12,
      html: `
<table class="plain"><thead><tr><th>Khu vực</th><th>Dấu hiệu cảnh báo</th></tr></thead><tbody>
<tr><td>Doanh thu</td><td>Thay đổi chính sách ghi nhận doanh thu; phải thu tăng nhanh hơn doanh thu (DSO tăng); doanh thu tăng vọt trong quý 4; giao dịch hàng đổi hàng, bill-and-hold; doanh thu ghi gộp (gross) thay vì ròng (net) khi chỉ làm đại lý</td></tr>
<tr><td>Hàng tồn kho</td><td>Tồn kho tăng nhanh hơn doanh thu, số ngày tồn kho tăng; giảm tồn kho LIFO (US GAAP) làm lợi nhuận tăng đột biến</td></tr>
<tr><td>Tài sản</td><td>Vòng quay tổng tài sản giảm dần; vốn hóa nhiều chi phí, chi phí trả trước tăng</td></tr>
<tr><td>Dòng tiền</td><td>CFO thấp hơn lợi nhuận ròng nhiều năm liền, hoặc tỷ lệ CFO/lợi nhuận ròng giảm dần</td></tr>
<tr><td>Ước tính</td><td>Thời gian khấu hao dài hơn đối thủ; dự phòng giảm khi phải thu tăng</td></tr>
<tr><td>Khác</td><td>Giao dịch bên liên quan; xếp chi phí thường xuyên vào "không thường xuyên"; thuyết minh sơ sài; đổi kiểm toán viên, lãnh đạo tài chính nghỉ việc; quá nhấn mạnh non-GAAP; luôn vừa khít dự báo</td></tr>
</tbody></table>
<div class="example"><div class="ex-h">Ví dụ 9.1 - Ba năm của một công ty</div>
<table class="plain"><thead><tr><th>Năm</th><th>1</th><th>2</th><th>3</th></tr></thead><tbody>
<tr><td>Doanh thu</td><td>1.000</td><td>1.100</td><td>1.250</td></tr>
<tr><td>Phải thu</td><td>100</td><td>130</td><td>190</td></tr>
<tr><td>Lợi nhuận ròng</td><td>100</td><td>120</td><td>145</td></tr>
<tr><td>CFO</td><td>95</td><td>80</td><td>60</td></tr>
</tbody></table>
<details><summary>Xem lời giải</summary>
<p>DSO = phải thu / doanh thu × 365: <b>36,5 → 43,1 → 55,5 ngày</b>. Phải thu tăng 30% rồi 46,2% trong khi doanh thu chỉ tăng 10% rồi 13,6%.<br>
CFO / lợi nhuận ròng: <b>0,95 → 0,67 → 0,41</b>. Phần lợi nhuận không có tiền (accruals = lợi nhuận - CFO) tăng từ 5 lên 85.<br>
Lợi nhuận tăng đều nhưng tiền thu về giảm: dấu hiệu điển hình của ghi nhận doanh thu sớm hoặc nới lỏng tín dụng để đẩy doanh số.</p></details></div>
<h4>Công cụ định lượng</h4>
<p>${t('mscore', 'Beneish M-score')} là mô hình 8 biến (DSO, biên lợi nhuận gộp, chất lượng tài sản, tăng trưởng doanh thu, khấu hao, SG&amp;A, đòn bẩy, accruals) ước lượng xác suất thao túng lợi nhuận. M-score lớn hơn -1,78 được coi là có nguy cơ thao túng cao. Giới hạn: dựa trên dữ liệu quá khứ, và khi ai cũng biết mô hình thì người thao túng có thể né.</p>
<p class="tip">Cách tiếp cận thực tế: (1) so sánh với đối thủ cùng ngành, (2) xem xu hướng nhiều năm, (3) đọc kỹ thuyết minh chính sách kế toán và thay đổi ước tính, (4) đối chiếu lợi nhuận với dòng tiền.</p>`,
    },
    {
      title: '10. Tóm tắt và bẫy thường gặp',
      minutes: 4,
      html: `
<table class="plain"><thead><tr><th>Tình huống</th><th>Nhớ</th></tr></thead><tbody>
<tr><td>Báo cáo trung thực một năm kinh doanh tệ</td><td>Chất lượng báo cáo cao, chất lượng kết quả thấp</td></tr>
<tr><td>Báo cáo chất lượng thấp</td><td>Không đánh giá được chất lượng kết quả</td></tr>
<tr><td>Phổ chất lượng</td><td>Mức 1-4 trong GAAP; mức 5-6 vi phạm GAAP; giao dịch giả là thấp nhất</td></tr>
<tr><td>Thận trọng</td><td>Lợi nhuận hôm nay thấp, ngày mai cao; vẫn là thiên lệch</td></tr>
<tr><td>Cookie jar, big bath</td><td>Thận trọng hôm nay để làm đẹp lợi nhuận tương lai</td></tr>
<tr><td>Tam giác gian lận</td><td>Cơ hội (kiểm soát yếu), động cơ, hợp lý hóa</td></tr>
<tr><td>Kiểm toán</td><td>Đảm bảo hợp lý, không đảm bảo không có gian lận</td></tr>
<tr><td>Non-GAAP</td><td>Phải đối chiếu với chỉ tiêu GAAP, không nổi bật hơn</td></tr>
<tr><td>Thủ thuật CFO</td><td>Kéo dài phải trả, bán phải thu, phân loại lãi vay, vốn hóa chi phí</td></tr>
<tr><td>Cảnh báo kinh điển</td><td>DSO tăng, CFO/lợi nhuận giảm, doanh thu dồn quý 4</td></tr>
</tbody></table>
<p>Tiếp theo: bấm sang tab <b>Luyện tập</b> để làm 10 câu tình huống.</p>`,
    },
  ];

  const glossary = {
    frq: ['Financial reporting quality', 'Chất lượng báo cáo tài chính', 'Mức độ báo cáo hữu ích cho quyết định: thích hợp và trình bày trung thực.'],
    eq: ['Earnings quality / quality of reported results', 'Chất lượng lợi nhuận, chất lượng kết quả', 'Lợi nhuận bền vững, đến từ hoạt động cốt lõi và đủ lớn để tạo lợi suất tương xứng.'],
    relevant: ['Relevance', 'Thích hợp', 'Thông tin có khả năng làm thay đổi quyết định của người dùng, có tính trọng yếu.'],
    faithful: ['Faithful representation', 'Trình bày trung thực', 'Thông tin đầy đủ, trung lập và không có sai sót.'],
    spectrum: ['Spectrum of financial reporting quality', 'Phổ chất lượng báo cáo', 'Thang 6 mức từ báo cáo trung thực với lợi nhuận bền vững xuống đến giao dịch giả.'],
    biased: ['Biased accounting choices', 'Lựa chọn kế toán thiên lệch', 'Lựa chọn trong khuôn khổ GAAP nhưng cố ý làm kết quả đẹp hơn hoặc xấu hơn thực tế.'],
    em: ['Earnings management', 'Quản trị lợi nhuận', 'Cố ý tác động đến lợi nhuận báo cáo bằng giao dịch thật hoặc lựa chọn kế toán.'],
    conservative: ['Conservative accounting', 'Kế toán thận trọng', 'Lựa chọn làm lợi nhuận và tài sản hiện tại thấp hơn, lợi nhuận tương lai cao hơn.'],
    aggressive: ['Aggressive accounting', 'Kế toán tích cực', 'Lựa chọn làm lợi nhuận và tài sản hiện tại cao hơn, lợi nhuận tương lai thấp hơn.'],
    neutral: ['Neutrality', 'Tính trung lập', 'Thông tin không thiên lệch theo hướng tốt hay xấu.'],
    cookie: ['Cookie jar reserve accounting', 'Dự phòng "hũ bánh"', 'Trích dự phòng quá mức năm tốt để hoàn nhập năm xấu, làm phẳng lợi nhuận.'],
    smooth: ['Earnings smoothing', 'Làm phẳng lợi nhuận', 'Xen kẽ thận trọng và tích cực để lợi nhuận trông ổn định.'],
    bigbath: ['Big bath accounting', 'Dọn sạch một lần', 'Ghi nhận lỗ thật lớn trong một năm xấu để các năm sau trông tốt hơn.'],
    opportunity: ['Opportunity', 'Cơ hội', 'Yếu tố tam giác gian lận: môi trường cho phép làm sai, ví dụ kiểm soát nội bộ yếu.'],
    motivation: ['Motivation / pressure', 'Động cơ, áp lực', 'Yếu tố tam giác gian lận: lý do để làm sai, ví dụ áp lực đạt kế hoạch.'],
    rational: ['Rationalization', 'Hợp lý hóa', 'Yếu tố tam giác gian lận: người làm sai tự biện minh cho hành vi.'],
    audit: ['External audit', 'Kiểm toán độc lập', 'Kiểm toán viên độc lập đưa ra ý kiến về việc báo cáo có trình bày hợp lý theo chuẩn mực.'],
    unqual: ['Unqualified (clean) opinion', 'Ý kiến chấp nhận toàn phần', 'Báo cáo trình bày hợp lý trên các khía cạnh trọng yếu; chỉ là sự đảm bảo hợp lý.'],
    nongaap: ['Non-GAAP financial measure', 'Chỉ tiêu non-GAAP', 'Chỉ tiêu không được chuẩn mực định nghĩa, như adjusted EBITDA; phải đối chiếu với chỉ tiêu GAAP gần nhất.'],
    channel: ['Channel stuffing', 'Nhồi kênh phân phối', 'Đẩy lượng hàng vượt nhu cầu cho nhà phân phối cuối kỳ để tăng doanh thu.'],
    billhold: ['Bill-and-hold', 'Bán nhưng giữ hộ', 'Ghi nhận doanh thu khi hàng vẫn nằm ở kho người bán; dễ bị lạm dụng.'],
    capitalize: ['Capitalization', 'Vốn hóa chi phí', 'Ghi khoản chi thành tài sản và phân bổ dần thay vì ghi chi phí ngay.'],
    mscore: ['Beneish M-score', 'Chỉ số M của Beneish', 'Mô hình 8 biến ước lượng xác suất thao túng lợi nhuận; M lớn hơn -1,78 là cảnh báo.'],
  };

  const practice = [
    { q: 'Công ty tuân thủ IFRS, thuyết minh đầy đủ, nhưng phần lớn lợi nhuận năm nay đến từ lãi bán một nhà máy. Đánh giá phù hợp nhất:', choices: ['Chất lượng báo cáo cao, chất lượng lợi nhuận thấp', 'Chất lượng báo cáo thấp, chất lượng lợi nhuận cao', 'Cả chất lượng báo cáo và chất lượng lợi nhuận đều thấp'], answer: 0, explain: 'Báo cáo trung thực và đầy đủ nên chất lượng báo cáo cao. Lợi nhuận đến từ khoản một lần, không bền vững, nên chất lượng lợi nhuận thấp. Tuân thủ chuẩn mực không làm lợi nhuận bất thường trở thành bền vững.' },
    { q: 'Trên phổ chất lượng báo cáo tài chính, mức THẤP NHẤT là:', choices: ['Tuân thủ GAAP nhưng có lựa chọn kế toán thiên lệch', 'Tuân thủ GAAP nhưng quản trị lợi nhuận', 'Vi phạm GAAP bằng giao dịch giả'], answer: 2, explain: 'Giao dịch giả (fictitious transactions) nằm ở đáy phổ. Lựa chọn kế toán thiên lệch và quản trị lợi nhuận vẫn trong khuôn khổ GAAP nên ở mức cao hơn, dù đều làm giảm chất lượng.' },
    { q: 'Lựa chọn nào là kế toán THẬN TRỌNG (conservative)?', choices: ['Kéo dài thời gian sử dụng hữu ích của máy móc so với đối thủ', 'Ước tính thời gian sử dụng hữu ích ngắn hơn và dự phòng nợ xấu cao hơn', 'Vốn hóa chi phí phát triển phần mềm'], answer: 1, explain: 'Thời gian sử dụng ngắn và dự phòng cao làm chi phí hiện tại tăng, lợi nhuận và tài sản hiện tại giảm: thận trọng. Kéo dài thời gian sử dụng và vốn hóa chi phí phát triển phần mềm làm lợi nhuận hiện tại cao hơn: tích cực.' },
    { q: 'Năm lợi nhuận vượt kế hoạch, công ty trích dự phòng tái cơ cấu lớn hơn nhu cầu; hai năm sau lợi nhuận kém, công ty hoàn nhập phần dư. Hành vi này phù hợp nhất với:', choices: ['Làm phẳng lợi nhuận bằng dự phòng cookie jar', 'Kế toán thận trọng trung lập, không làm giảm chất lượng báo cáo', 'Vi phạm GAAP bằng giao dịch giả'], answer: 0, explain: 'Trích thừa khi tốt, hoàn nhập khi xấu là cookie jar, dùng để làm phẳng lợi nhuận. Thận trọng có chủ đích như vậy là thiên lệch, không trung lập. Không có giao dịch giả.' },
    { q: 'Công ty có HĐQT ít thành viên độc lập và kiểm soát nội bộ yếu. Theo tam giác gian lận, đây là yếu tố:', choices: ['Động cơ', 'Cơ hội', 'Hợp lý hóa'], answer: 1, explain: 'Kiểm soát yếu và giám sát kém tạo cơ hội thực hiện sai phạm mà khó bị phát hiện. Động cơ là áp lực hay lợi ích; hợp lý hóa là cách người làm sai tự biện minh.' },
    { q: 'Phát biểu nào về kiểm toán độc lập là ĐÚNG?', choices: ['Ý kiến chấp nhận toàn phần xác nhận báo cáo không có gian lận', 'Kiểm toán viên được cơ quan quản lý trả phí nên luôn độc lập hoàn toàn', 'Kiểm toán chỉ cung cấp sự đảm bảo hợp lý và dựa trên chọn mẫu'], answer: 2, explain: 'Kiểm toán cho sự đảm bảo hợp lý, không tuyệt đối, và không được thiết kế để phát hiện mọi gian lận. Kiểm toán viên do chính công ty trả phí, đây là một giới hạn về tính độc lập.' },
    { q: 'Theo quy định của SEC, khi công bố một chỉ tiêu non-GAAP, công ty phải:', choices: ['Trình bày chỉ tiêu GAAP gần nhất ít nhất nổi bật ngang bằng và đối chiếu giữa hai chỉ tiêu', 'Được kiểm toán viên xác nhận chỉ tiêu non-GAAP là hợp lý', 'Chỉ được công bố chỉ tiêu non-GAAP trong thuyết minh báo cáo tài chính'], answer: 0, explain: 'SEC yêu cầu trình bày chỉ tiêu GAAP gần nhất với mức nổi bật ít nhất ngang bằng, kèm bảng đối chiếu và giải thích. Không có yêu cầu kiểm toán viên xác nhận chỉ tiêu non-GAAP, và non-GAAP thường xuất hiện ngoài báo cáo tài chính (thông cáo báo chí).' },
    { q: 'EBITDA của công ty là 100. Công ty công bố adjusted EBITDA bằng cách cộng lại chi phí tái cơ cấu 18; chi phí tái cơ cấu lần lượt là 12, 15 và 18 trong ba năm gần nhất. Kết luận phù hợp nhất:', choices: ['Adjusted EBITDA cao hơn khoảng 15%; chấp nhận vì tái cơ cấu là khoản bất thường', 'Adjusted EBITDA cao hơn 18%; chấp nhận vì công ty đã đối chiếu với chỉ tiêu GAAP', 'Adjusted EBITDA cao hơn 18%; nên coi tái cơ cấu là chi phí lặp lại và không cộng lại'], answer: 2, explain: 'Adjusted EBITDA = 118, cao hơn 18/100 = 18%. Khoảng 15% là chia 18 cho 118, sai gốc so sánh. Chi phí xuất hiện ba năm liền và tăng dần là chi phí thường xuyên; có bảng đối chiếu không làm điều chỉnh trở nên hợp lý.' },
    { q: 'Hành động nào làm dòng tiền hoạt động (CFO) năm nay tăng mà KHÔNG phản ánh hoạt động kinh doanh tốt lên?', choices: ['Kéo dài thời gian sử dụng hữu ích của tài sản cố định', 'Trì hoãn thanh toán cho nhà cung cấp đến sau ngày khóa sổ', 'Tăng tỷ lệ trích dự phòng nợ phải thu khó đòi'], answer: 1, explain: 'Trì hoãn trả nhà cung cấp làm tiền chi ra trong kỳ giảm nên CFO tăng tạm thời. Kéo dài thời gian sử dụng và tăng tỷ lệ trích dự phòng chỉ thay đổi chi phí không bằng tiền, không làm thay đổi CFO.' },
    { q: 'Năm 1: phải thu 60, doanh thu 500. Năm 2: phải thu 90, doanh thu 550. Số ngày thu tiền (DSO) năm 2 và cách hiểu phù hợp nhất:', choices: ['59,7 ngày; có thể là dấu hiệu ghi nhận doanh thu sớm hoặc nới lỏng tín dụng', '43,8 ngày; công ty thu tiền hiệu quả hơn', '59,7 ngày; chất lượng lợi nhuận được cải thiện'], answer: 0, explain: 'DSO năm 2 = 90/550 x 365 = 59,7 ngày, tăng từ 43,8 ngày năm 1. Phải thu tăng 50% trong khi doanh thu tăng 10% là dấu hiệu cảnh báo. Lựa chọn 43,8 ngày là DSO năm 1. Phương án "chất lượng lợi nhuận được cải thiện" kết luận ngược chiều.' },
  ];

  window.LESSONS['FSA-10'] = {
    moduleId: 'FSA-10',
    calculator: 'Không cần máy tính',
    warmup: [
      'Ôn FSA-09: giảm valuation allowance của DTA ảnh hưởng thế nào đến lợi nhuận ròng?',
      'Theo bạn, vì sao ban lãnh đạo lại muốn lợi nhuận "đều đặn" qua các năm thay vì lúc cao lúc thấp?',
      'Nếu lợi nhuận ròng tăng 20% nhưng dòng tiền hoạt động giảm, bạn sẽ đặt câu hỏi gì?',
    ],
    sections,
    glossary,
    practice,
    widgets: {},
    slides: [],
    wrapup: [
      'Vẽ lại phổ chất lượng 6 mức và cho mỗi mức một ví dụ của riêng bạn.',
      'Liệt kê 4 cách làm CFO tăng mà không cải thiện kinh doanh.',
      'Còn câu hỏi nào chưa rõ? Ghi lại để hỏi.',
    ],
  };
}());
