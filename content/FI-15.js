// Bài giảng FI-15 - Credit Analysis for Government Issuers (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t, frac } = window.CFAH;

  const sections = [
    {
      title: '1. Bức tranh lớn: chính phủ vay nợ khác doanh nghiệp ở đâu?',
      minutes: 3,
      html: `
<p>Khung POD và LGD của FI-14 vẫn đúng, nhưng chính phủ có ba điểm đặc biệt:</p>
<ul>
  <li><b>Nguồn trả nợ là quyền đánh thuế</b> lên hoạt động kinh tế trong lãnh thổ, không phải lợi nhuận kinh doanh.</li>
  <li>Với nợ bằng <b>nội tệ</b>, chính phủ trung ương (qua ngân hàng trung ương) có thể in tiền, nên rủi ro vỡ nợ thấp hơn nhiều so với nợ bằng ngoại tệ.</li>
  <li>Chủ nợ <b>khó cưỡng chế</b>: không có tòa phá sản cho một quốc gia, nên <b>thiện chí trả nợ (willingness to pay)</b> quan trọng ngang khả năng trả nợ (ability to pay).</li>
</ul>
<p>LOS duy nhất của module: giải thích các điểm cần lưu ý khi đánh giá tín dụng của ${t('sovereign', 'chính phủ trung ương (sovereign)')} và ${t('nonsov', 'chính quyền cấp dưới, tổ chức gần chính phủ (non-sovereign)')}.</p>
<p class="tip">Ở FI-05 (Fixed-Income Markets for Government Issuers, do module khác soạn) bạn đã gặp các loại tổ chức phát hành. Ở đây ta hỏi câu khác: <b>họ có trả được nợ không</b>.</p>`,
    },
    {
      title: '2. Sovereign: các yếu tố định tính',
      minutes: 6,
      html: `
<table class="plain"><thead><tr><th>Yếu tố</th><th>Câu hỏi then chốt</th></tr></thead><tbody>
<tr><td>${t('inst', 'Thể chế và chính sách (institutional and policy)')}</td><td>Chính trị có ổn định không? Có pháp quyền, minh bạch, kiểm soát tham nhũng, cơ chế kiểm soát quyền lực không? Lịch sử có từng vỡ nợ không (thiện chí trả nợ)?</td></tr>
<tr><td>${t('fiscalflex', 'Linh hoạt tài khóa (fiscal flexibility)')}</td><td>Chính phủ có thể tăng thu hoặc cắt chi khi cần không, cả về khả năng lẫn sự ủng hộ của dân?</td></tr>
<tr><td>${t('monetary', 'Hiệu quả tiền tệ (monetary effectiveness)')}</td><td>Ngân hàng trung ương có độc lập và đáng tin không? Chính sách tiền tệ có truyền dẫn tốt không? Chế độ tỷ giá có linh hoạt không?</td></tr>
<tr><td>${t('econflex', 'Linh hoạt kinh tế (economic flexibility)')}</td><td>Nền kinh tế có đa dạng, thu nhập bình quân cao, tăng trưởng bền vững không? Phụ thuộc một mặt hàng xuất khẩu là điểm yếu.</td></tr>
<tr><td>${t('external', 'Vị thế đối ngoại (external status)')}</td><td>Đồng tiền có phải ${t('reserve', 'đồng tiền dự trữ')} không? Quốc gia có vị thế quốc tế, quan hệ đồng minh tốt không?</td></tr>
</tbody></table>
<div class="key">Quốc gia có đồng tiền dự trữ (USD, EUR, JPY...) có thể vay nhiều hơn bằng chính đồng nội tệ của mình, vì nhà đầu tư toàn cầu luôn muốn nắm giữ đồng tiền đó.</div>`,
    },
    {
      title: '3. Sovereign: các yếu tố định lượng',
      minutes: 7,
      html: `
<table class="plain"><thead><tr><th>Nhóm</th><th>Chỉ tiêu tiêu biểu</th><th>Tốt khi</th></tr></thead><tbody>
<tr><td>${t('fiscal', 'Sức mạnh tài khóa (fiscal strength)')}</td><td>Nợ chính phủ / GDP (gánh nặng nợ); chi trả lãi / thu ngân sách (khả năng chi trả)</td><td>Thấp</td></tr>
<tr><td>Tăng trưởng và ổn định kinh tế</td><td>Quy mô GDP, GDP bình quân đầu người, tăng trưởng thực, độ biến động tăng trưởng</td><td>Lớn, cao, ổn định</td></tr>
<tr><td>${t('extstab', 'Ổn định đối ngoại (external stability)')}</td><td>Dự trữ ngoại hối / nợ nước ngoài ngắn hạn; nợ nước ngoài / GDP; cán cân vãng lai / GDP</td><td>Dự trữ cao, nợ nước ngoài thấp</td></tr>
</tbody></table>

<div class="example"><div class="ex-h">Ví dụ 3.1 - So sánh hai quốc gia (đơn vị: tỷ USD)</div>
<table class="plain"><thead><tr><th></th><th>Quốc gia A</th><th>Quốc gia B</th></tr></thead><tbody>
<tr><td>GDP</td><td>800</td><td>1.000</td></tr>
<tr><td>Nợ chính phủ</td><td>480</td><td>1.100</td></tr>
<tr><td>Thu ngân sách</td><td>200</td><td>220</td></tr>
<tr><td>Chi trả lãi</td><td>16</td><td>66</td></tr>
<tr><td>Dự trữ ngoại hối</td><td>90</td><td>30</td></tr>
<tr><td>Nợ nước ngoài ngắn hạn</td><td>60</td><td>75</td></tr>
</tbody></table>
<details><summary>Xem lời giải</summary>
<p>Nợ / GDP: A = 480 / 800 = <b>60%</b>; B = 1.100 / 1.000 = <b>110%</b>.<br>
Lãi / thu ngân sách: A = 16 / 200 = <b>8%</b>; B = 66 / 220 = <b>30%</b>.<br>
Dự trữ / nợ nước ngoài ngắn hạn: A = 90 / 60 = <b>1,5 lần</b>; B = 30 / 75 = <b>0,4 lần</b>.</p>
<p>Trên số liệu, A an toàn hơn rõ rệt. Nhưng nếu B có đồng tiền dự trữ và phần lớn nợ bằng nội tệ do người trong nước nắm giữ, B vẫn có thể được xếp hạng cao: định lượng phải đi cùng định tính.</p></details></div>
<p class="warn"><b>Bẫy:</b> nợ / GDP cao không tự động nghĩa là xếp hạng thấp. Khả năng chi trả (lãi / thu ngân sách), đồng tiền của khoản nợ và người nắm giữ nợ cũng quan trọng.</p>`,
    },
    {
      title: '4. Nợ nội tệ và nợ ngoại tệ',
      minutes: 3,
      html: `
<p>Tổ chức xếp hạng thường cho sovereign <b>hai xếp hạng</b>: ${t('lcrating', 'local currency rating')} và ${t('fcrating', 'foreign currency rating')}.</p>
<ul>
  <li>Nợ nội tệ: chính phủ có thể tăng thuế hoặc in tiền để trả (đổi lại là rủi ro lạm phát), nên POD thấp hơn.</li>
  <li>Nợ ngoại tệ: phải có ngoại tệ từ xuất khẩu hoặc dự trữ; không in được USD. Vì vậy foreign currency rating thường <b>bằng hoặc thấp hơn</b> local currency rating.</li>
</ul>
<p>Lịch sử cho thấy phần lớn các vụ vỡ nợ của sovereign xảy ra với nợ bằng ngoại tệ. Đó cũng là lý do các nước đang phát triển chịu rủi ro lớn khi vay nhiều bằng USD trong lúc đồng nội tệ mất giá.</p>`,
    },
    {
      title: '5. Non-sovereign: GO bonds và revenue bonds',
      minutes: 4,
      html: `
<p>Nhóm non-sovereign gồm ${t('agency', 'tổ chức gần chính phủ (agencies, quasi-government)')}, ${t('supra', 'tổ chức đa quốc gia (supranational)')} như World Bank, và ${t('regional', 'chính quyền địa phương, vùng')}. Với chính quyền địa phương có hai loại trái phiếu chính:</p>
<table class="plain"><thead><tr><th></th><th>${t('go', 'General obligation (GO) bond')}</th><th>${t('revenue', 'Revenue bond')}</th></tr></thead><tbody>
<tr><td>Nguồn trả nợ</td><td>Thu thuế chung của địa phương</td><td>Doanh thu của một dự án cụ thể (đường thu phí, sân bay, nhà máy nước)</td></tr>
<tr><td>Phân tích giống</td><td>Sovereign, nhưng không in được tiền và thường bị ràng buộc cân bằng ngân sách</td><td>Doanh nghiệp: dự án có tạo đủ tiền không</td></tr>
<tr><td>Chỉ tiêu</td><td>Nợ / đầu người, nợ / thu nhập cá nhân, nợ / giá trị bất động sản chịu thuế, cơ sở kinh tế địa phương</td><td>${t('dscr', 'Debt service coverage ratio (DSCR)')} = doanh thu ròng / nghĩa vụ trả nợ</td></tr>
<tr><td>Rủi ro</td><td>Thấp hơn</td><td>Cao hơn (phụ thuộc một dự án), nên lợi suất thường cao hơn</td></tr>
</tbody></table>
<div class="example"><div class="ex-h">Ví dụ 5.1</div>
<p>Đường cao tốc thu phí có doanh thu ròng (sau chi phí vận hành) 48 triệu USD/năm, nghĩa vụ trả lãi và gốc 32 triệu USD/năm. Tính DSCR.</p>
<details><summary>Xem lời giải</summary><p>DSCR = 48 / 32 = <b>1,5 lần</b>. Doanh thu ròng đủ trả nợ và còn dư 50% làm đệm an toàn. DSCR dưới 1 nghĩa là phải bù từ nguồn khác.</p></details></div>
<p class="tip">Chính quyền địa phương <b>không có ngân hàng trung ương</b>, nên giống sovereign vay bằng ngoại tệ hơn là sovereign vay bằng nội tệ. Tuy nhiên họ có thể được chính phủ trung ương hỗ trợ ngầm.</p>`,
    },
    {
      title: '6. Tóm tắt và bẫy thường gặp',
      minutes: 2,
      html: `
<table class="plain"><thead><tr><th>Tình huống</th><th>Nhớ</th></tr></thead><tbody>
<tr><td>Nguồn trả nợ sovereign</td><td>Khả năng đánh thuế; thiện chí trả nợ quan trọng vì khó cưỡng chế</td></tr>
<tr><td>5 yếu tố định tính</td><td>Thể chế và chính sách, linh hoạt tài khóa, hiệu quả tiền tệ, linh hoạt kinh tế, vị thế đối ngoại</td></tr>
<tr><td>3 nhóm định lượng</td><td>Sức mạnh tài khóa, tăng trưởng và ổn định kinh tế, ổn định đối ngoại</td></tr>
<tr><td>Đồng tiền dự trữ</td><td>Vay nhiều hơn bằng nội tệ</td></tr>
<tr><td>Nội tệ và ngoại tệ</td><td>Foreign currency rating thường bằng hoặc thấp hơn local currency rating</td></tr>
<tr><td>GO và revenue bond</td><td>GO dựa vào thuế chung; revenue dựa vào dự án, dùng DSCR, rủi ro cao hơn</td></tr>
</tbody></table>
<p>Tiếp theo: tab <b>Luyện tập</b> 10 câu (rút ngẫu nhiên từ ngân hàng 30 câu, mỗi lần làm một bộ khác), rồi FI-16 (doanh nghiệp).</p>`,
    },
  ];

  const glossary = {
    sovereign: ['Sovereign issuer', 'Chính phủ trung ương', 'Chính phủ quốc gia phát hành nợ; trả nợ bằng nguồn thu thuế và, với nợ nội tệ, có thể in tiền.'],
    nonsov: ['Non-sovereign government issuer', 'Tổ chức phát hành ngoài chính phủ trung ương', 'Chính quyền vùng, địa phương, tổ chức gần chính phủ, tổ chức đa quốc gia.'],
    inst: ['Institutional and policy considerations', 'Thể chế và chính sách', 'Ổn định chính trị, pháp quyền, minh bạch, tham nhũng, lịch sử trả nợ.'],
    fiscalflex: ['Fiscal flexibility', 'Linh hoạt tài khóa', 'Khả năng và thiện chí tăng thu, cắt chi để giữ nợ bền vững.'],
    monetary: ['Monetary effectiveness', 'Hiệu quả tiền tệ', 'Ngân hàng trung ương độc lập, đáng tin, chính sách truyền dẫn tốt, tỷ giá linh hoạt.'],
    econflex: ['Economic flexibility', 'Linh hoạt kinh tế', 'Nền kinh tế đa dạng, thu nhập cao, tăng trưởng bền vững.'],
    external: ['External status', 'Vị thế đối ngoại', 'Đồng tiền có vai trò dự trữ và vị thế quốc tế của quốc gia.'],
    reserve: ['Reserve currency', 'Đồng tiền dự trữ', 'Đồng tiền được các ngân hàng trung ương và nhà đầu tư toàn cầu nắm giữ rộng rãi (USD, EUR, JPY...).'],
    fiscal: ['Fiscal strength', 'Sức mạnh tài khóa', 'Đo bằng nợ / GDP (gánh nặng) và lãi / thu ngân sách (khả năng chi trả).'],
    extstab: ['External stability', 'Ổn định đối ngoại', 'Dự trữ ngoại hối so với nợ nước ngoài, nợ nước ngoài / GDP, cán cân vãng lai.'],
    lcrating: ['Local currency rating', 'Xếp hạng nợ nội tệ', 'Xếp hạng cho nợ bằng đồng tiền của chính quốc gia.'],
    fcrating: ['Foreign currency rating', 'Xếp hạng nợ ngoại tệ', 'Xếp hạng cho nợ bằng ngoại tệ; thường bằng hoặc thấp hơn xếp hạng nội tệ.'],
    agency: ['Agency / quasi-government entity', 'Tổ chức gần chính phủ', 'Tổ chức do chính phủ lập hoặc bảo trợ, thường có hỗ trợ ngầm hoặc rõ ràng của chính phủ.'],
    supra: ['Supranational organization', 'Tổ chức đa quốc gia', 'Tổ chức do nhiều quốc gia sở hữu như World Bank, ADB; thường xếp hạng rất cao.'],
    regional: ['Regional / local government', 'Chính quyền vùng, địa phương', 'Tỉnh, thành phố phát hành trái phiếu; không có ngân hàng trung ương riêng.'],
    go: ['General obligation (GO) bond', 'Trái phiếu nghĩa vụ chung', 'Trả bằng nguồn thu thuế chung của chính quyền địa phương.'],
    revenue: ['Revenue bond', 'Trái phiếu doanh thu', 'Trả bằng doanh thu của một dự án cụ thể; rủi ro cao hơn GO bond.'],
    dscr: ['Debt service coverage ratio (DSCR)', 'Hệ số khả năng trả nợ', 'Doanh thu ròng của dự án / nghĩa vụ trả lãi và gốc trong kỳ.'],
  };

  const practice = [
    { q: 'Khả năng trả nợ của một chính phủ trung ương chủ yếu phụ thuộc vào:', choices: ['khả năng thu thuế từ hoạt động kinh tế trong lãnh thổ', 'giá trị vốn hóa của thị trường chứng khoán', 'tỷ lệ sở hữu nước ngoài trong các doanh nghiệp'], answer: 0, explain: 'Nguồn trả nợ của sovereign là thu ngân sách, chủ yếu từ thuế. Vốn hóa thị trường chứng khoán và tỷ lệ sở hữu nước ngoài có thể liên quan gián tiếp đến nền kinh tế nhưng không phải nguồn trả nợ.' },
    { q: 'Yếu tố nào sau đây là yếu tố định tính khi đánh giá tín dụng sovereign?', choices: ['Nợ chính phủ / GDP', 'Mức độ minh bạch, pháp quyền và ổn định chính trị', 'Dự trữ ngoại hối / nợ nước ngoài ngắn hạn'], answer: 1, explain: 'Thể chế và chính sách là yếu tố định tính. Nợ chính phủ / GDP thuộc sức mạnh tài khóa và dự trữ ngoại hối / nợ nước ngoài ngắn hạn thuộc ổn định đối ngoại, đều là yếu tố định lượng.' },
    { q: 'Một quốc gia có GDP 600, nợ chính phủ 420, thu ngân sách 150 và chi trả lãi 18 (tỷ USD). Chỉ tiêu khả năng chi trả nợ (lãi / thu ngân sách) gần nhất với:', choices: ['70%', '3%', '12%'], answer: 2, explain: '18 / 150 = 12%. Lựa chọn 70% là nợ / GDP (gánh nặng nợ, không phải khả năng chi trả). Lựa chọn 3% là lãi / GDP.' },
    { q: 'So với các quốc gia khác, quốc gia có đồng tiền dự trữ thường:', choices: ['có khả năng vay nợ bằng nội tệ lớn hơn', 'có dự trữ ngoại hối thấp hơn nên rủi ro cao hơn', 'không cần quan tâm đến kỷ luật tài khóa'], answer: 0, explain: 'Nhu cầu toàn cầu với đồng tiền dự trữ cho phép quốc gia đó vay nhiều hơn bằng chính đồng tiền của mình. Phương án "dự trữ ngoại hối thấp hơn" không có quan hệ tất yếu. Phương án "không cần quan tâm đến kỷ luật tài khóa" sai: nợ vẫn phải bền vững.' },
    { q: 'Một sân bay phát hành revenue bond. Doanh thu 60 triệu, chi phí vận hành 15 triệu, nghĩa vụ trả lãi và gốc 30 triệu mỗi năm. DSCR gần nhất với:', choices: ['2,00 lần', '1,50 lần', '0,67 lần'], answer: 1, explain: 'Doanh thu ròng = 60 - 15 = 45; DSCR = 45 / 30 = 1,50. Lựa chọn 2,00 lần dùng doanh thu gộp. Lựa chọn 0,67 lần đảo ngược tử và mẫu.' },
    { q: 'Phát biểu nào về xếp hạng nội tệ và ngoại tệ của sovereign là đúng nhất?', choices: ['Xếp hạng ngoại tệ luôn cao hơn vì ngoại tệ ổn định hơn', 'Hai xếp hạng luôn bằng nhau vì cùng một tổ chức phát hành', 'Xếp hạng ngoại tệ thường bằng hoặc thấp hơn xếp hạng nội tệ'], answer: 2, explain: 'Chính phủ có thể tăng thuế hoặc in tiền để trả nợ nội tệ, nhưng không in được ngoại tệ, nên rủi ro nợ ngoại tệ cao hơn. Phương án "ngoại tệ luôn cao hơn" ngược lại. Phương án "luôn bằng nhau" sai vì tổ chức xếp hạng tách riêng hai xếp hạng.' },
    { q: 'Vì sao khi đánh giá tín dụng sovereign, thiện chí trả nợ (willingness to pay) được coi trọng gần ngang khả năng trả nợ (ability to pay)?', choices: ['Vì chính phủ không bao giờ có thể vỡ nợ với nợ nội tệ', 'Vì chủ nợ khó cưỡng chế thu nợ: không có tòa phá sản cho một quốc gia', 'Vì trái phiếu chính phủ luôn có tài sản bảo đảm'], answer: 1, explain: 'Chủ nợ không thể đưa một quốc gia ra tòa phá sản hay thu giữ tài sản như với doanh nghiệp, nên một chính phủ có khả năng trả nhưng không muốn trả vẫn có thể vỡ nợ. Phương án "không bao giờ vỡ nợ với nợ nội tệ" quá tuyệt đối: rủi ro thấp hơn chứ không bằng 0. Phương án "luôn có tài sản bảo đảm" sai: trái phiếu chính phủ thường không có bảo đảm.' },
    { q: 'Một quốc gia có GDP 1.250, nợ chính phủ 900, thu ngân sách 300 và chi trả lãi 27 (tỷ USD). Chỉ tiêu gánh nặng nợ (nợ chính phủ / GDP) gần nhất với:', choices: ['72%', '9%', '300%'], answer: 0, explain: 'Nợ / GDP = 900 / 1.250 = 72%. Lựa chọn 9% là lãi / thu ngân sách, một chỉ tiêu khả năng chi trả chứ không phải gánh nặng nợ. Lựa chọn 300% là nợ / thu ngân sách.' },
    { q: 'Một quốc gia có dự trữ ngoại hối 45 tỷ USD, nợ nước ngoài ngắn hạn 60 tỷ USD và tổng nợ nước ngoài 150 tỷ USD. Tỷ lệ dự trữ ngoại hối / nợ nước ngoài ngắn hạn gần nhất với:', choices: ['1,33 lần', '0,30 lần', '0,75 lần'], answer: 2, explain: '45 / 60 = 0,75 lần: dự trữ chỉ đủ trả 75% nợ nước ngoài đến hạn trong ngắn hạn, một dấu hiệu yếu về ổn định đối ngoại. Lựa chọn 1,33 lần đảo ngược tử và mẫu. Lựa chọn 0,30 lần dùng tổng nợ nước ngoài thay vì nợ ngắn hạn.' },
    { q: 'Quốc gia M có dự trữ ngoại hối 120 và nợ nước ngoài ngắn hạn 80 (tỷ USD), thâm hụt vãng lai 1% GDP. Quốc gia N có dự trữ 50 và nợ nước ngoài ngắn hạn 100, thâm hụt vãng lai 6% GDP. Về ổn định đối ngoại:', choices: ['M mạnh hơn: dự trữ bằng 1,5 lần nợ ngắn hạn so với 0,5 lần của N', 'N mạnh hơn vì nợ nước ngoài ngắn hạn lớn hơn cho thấy được thị trường tin tưởng', 'Hai quốc gia như nhau vì ổn định đối ngoại chỉ là yếu tố định tính'], answer: 0, explain: 'M: 120 / 80 = 1,5 lần; N: 50 / 100 = 0,5 lần. M còn có thâm hụt vãng lai nhỏ hơn, nên ổn định đối ngoại mạnh hơn. Phương án "N mạnh hơn" nhầm nợ nhiều là điểm mạnh. Phương án "chỉ là yếu tố định tính" sai: ổn định đối ngoại là nhóm chỉ tiêu định lượng.' },
    { q: 'Chính phủ một nước có thể tăng thuế giá trị gia tăng và cắt giảm chi tiêu khi cần mà không gặp phản đối lớn từ người dân. Điều này thể hiện yếu tố định tính nào mạnh?', choices: ['Hiệu quả tiền tệ (monetary effectiveness)', 'Linh hoạt tài khóa (fiscal flexibility)', 'Vị thế đối ngoại (external status)'], answer: 1, explain: 'Linh hoạt tài khóa là khả năng và sự sẵn sàng (kể cả sự ủng hộ của dân) tăng thu hoặc cắt chi để giữ nợ bền vững. Hiệu quả tiền tệ liên quan đến ngân hàng trung ương và chế độ tỷ giá. Vị thế đối ngoại liên quan đến đồng tiền dự trữ và vị thế quốc tế.' },
    { q: 'Ngân hàng trung ương của một quốc gia thường xuyên phải in tiền tài trợ thâm hụt ngân sách theo yêu cầu của chính phủ, và tỷ giá bị neo cứng. Đánh giá nào sau đây hợp lý nhất?', choices: ['Hiệu quả tiền tệ yếu', 'Linh hoạt kinh tế mạnh', 'Hiệu quả tiền tệ mạnh vì chính phủ luôn có tiền trả nợ'], answer: 0, explain: 'Ngân hàng trung ương thiếu độc lập và chế độ tỷ giá kém linh hoạt làm chính sách tiền tệ kém tin cậy: hiệu quả tiền tệ yếu. Phương án "linh hoạt kinh tế mạnh" không liên quan (linh hoạt kinh tế là đa dạng, thu nhập, tăng trưởng). Phương án "hiệu quả tiền tệ mạnh" nhầm việc in tiền tài trợ thâm hụt là điểm mạnh; thực ra nó gây lạm phát và mất niềm tin.' },
    { q: 'Một quốc gia có 70% kim ngạch xuất khẩu đến từ dầu thô. Khi đánh giá tín dụng sovereign, đặc điểm này nhiều khả năng là điểm yếu về:', choices: ['thể chế và chính sách', 'hiệu quả tiền tệ', 'linh hoạt kinh tế'], answer: 2, explain: 'Linh hoạt kinh tế xét mức độ đa dạng của nền kinh tế; phụ thuộc một mặt hàng xuất khẩu làm thu ngân sách và tăng trưởng dễ bị sốc giá. Thể chế và chính sách liên quan đến ổn định chính trị, pháp quyền, minh bạch. Hiệu quả tiền tệ liên quan đến ngân hàng trung ương.' },
    { q: 'Yếu tố nào sau đây cho phép một quốc gia vay nợ bằng nội tệ ở quy mô lớn hơn các quốc gia khác?', choices: ['Đồng tiền của quốc gia đó là đồng tiền dự trữ quốc tế', 'Quốc gia đó có tỷ lệ nợ / GDP cao', 'Quốc gia đó neo cứng tỷ giá với USD'], answer: 0, explain: 'Vị thế đối ngoại mạnh, đặc biệt đồng tiền dự trữ (USD, EUR, JPY), tạo nhu cầu toàn cầu với tài sản bằng đồng tiền đó. Tỷ lệ nợ / GDP cao là điểm yếu chứ không giúp vay thêm. Neo tỷ giá làm giảm hiệu quả tiền tệ và không tạo nhu cầu với đồng nội tệ.' },
    { q: 'Quốc gia X có nợ / GDP 120% và lãi / thu ngân sách 6%, phần lớn nợ bằng nội tệ do người trong nước nắm giữ. Quốc gia Y có nợ / GDP 60% và lãi / thu ngân sách 22%, phần lớn nợ bằng ngoại tệ. Phát biểu nào đúng nhất?', choices: ['X chắc chắn rủi ro hơn vì nợ / GDP gấp đôi Y', 'X có khả năng chi trả nợ tốt hơn và cơ cấu nợ an toàn hơn Y, dù gánh nặng nợ cao hơn', 'Hai quốc gia có rủi ro như nhau vì tích hai chỉ tiêu xấp xỉ nhau'], answer: 1, explain: 'Nợ / GDP cao không tự động nghĩa là rủi ro cao hơn: X chỉ dùng 6% thu ngân sách để trả lãi (so với 22% của Y) và nợ bằng nội tệ, do người trong nước nắm giữ. Phương án "chắc chắn rủi ro hơn" chỉ nhìn một chỉ tiêu. Phương án "tích hai chỉ tiêu" là cách tính không có cơ sở.' },
    { q: 'Một chính phủ được xếp hạng AA cho nợ nội tệ nhưng chỉ A cho nợ ngoại tệ. Lý do hợp lý nhất là:', choices: ['nợ ngoại tệ có kỳ hạn dài hơn', 'nợ ngoại tệ luôn có tài sản bảo đảm', 'chính phủ có thể tăng thuế hoặc in tiền để trả nợ nội tệ, nhưng phải có ngoại tệ từ xuất khẩu hoặc dự trữ để trả nợ ngoại tệ'], answer: 2, explain: 'Với nợ nội tệ, chính phủ (qua ngân hàng trung ương) có thể in tiền; với nợ ngoại tệ thì không, nên POD cao hơn và xếp hạng ngoại tệ thường thấp hơn. Kỳ hạn không phải lý do tách hai xếp hạng. Phương án "luôn có tài sản bảo đảm" sai, và nếu có bảo đảm thì xếp hạng phải cao hơn chứ không thấp hơn.' },
    { q: 'Nhà đầu tư nước ngoài nắm trái phiếu nội tệ của một chính phủ có ngân hàng trung ương sẵn sàng in tiền để trả nợ. Rủi ro lớn nhất với nhà đầu tư này nhiều khả năng là:', choices: ['lạm phát và đồng nội tệ mất giá làm giảm giá trị thực của khoản thanh toán', 'chính phủ không có nội tệ để trả lãi và gốc', 'trái phiếu bị chuyển đổi bắt buộc thành ngoại tệ'], answer: 0, explain: 'In tiền giúp chính phủ tránh vỡ nợ danh nghĩa nhưng đổi lại là lạm phát và đồng nội tệ mất giá; nhà đầu tư nước ngoài nhận đủ nội tệ nhưng giá trị thực và giá trị quy đổi giảm. Phương án "không có nội tệ" sai vì chính phủ in được nội tệ. Phương án "chuyển đổi bắt buộc thành ngoại tệ" không phải đặc điểm của nợ nội tệ.' },
    { q: 'Một nước đang phát triển có nợ nước ngoài 40 tỷ USD và GDP 4.000 nghìn tỷ đơn vị nội tệ (LC). Tỷ giá thay đổi từ 20 LC/USD lên 25 LC/USD, GDP tính bằng nội tệ không đổi. Tỷ lệ nợ nước ngoài / GDP sau khi tỷ giá thay đổi gần nhất với:', choices: ['20%', '25%', '16%'], answer: 1, explain: 'Trước: 40 x 20 = 800 nghìn tỷ LC, bằng 20% GDP. Sau: 40 x 25 = 1.000 nghìn tỷ LC, bằng 1.000 / 4.000 = 25% GDP. Nội tệ mất giá làm gánh nặng nợ ngoại tệ tăng dù không vay thêm. Lựa chọn 20% bỏ qua tác động tỷ giá. Lựa chọn 16% đảo chiều tác động (20% x 20 / 25).' },
    { q: 'General obligation (GO) bond của chính quyền địa phương được trả nợ chủ yếu từ:', choices: ['doanh thu của một dự án cụ thể như đường thu phí', 'thu thuế chung của chính quyền địa phương', 'ngân sách của chính phủ trung ương theo bảo lãnh pháp lý'], answer: 1, explain: 'GO bond dựa vào quyền đánh thuế chung của địa phương. Doanh thu từ một dự án cụ thể là nguồn trả nợ của revenue bond. GO bond không đương nhiên được chính phủ trung ương bảo lãnh; hỗ trợ (nếu có) thường là ngầm định.' },
    { q: 'Một nhà máy nước phát hành revenue bond. Doanh thu hằng năm 90 triệu USD, chi phí vận hành 30 triệu USD, nghĩa vụ trả lãi và gốc 48 triệu USD. Debt service coverage ratio (DSCR) gần nhất với:', choices: ['1,88 lần', '0,80 lần', '1,25 lần'], answer: 2, explain: 'Doanh thu ròng = 90 - 30 = 60; DSCR = 60 / 48 = 1,25 lần. Lựa chọn 1,88 lần dùng doanh thu gộp 90 / 48, chưa trừ chi phí vận hành. Lựa chọn 0,80 lần đảo ngược tử và mẫu (48 / 60).' },
    { q: 'So với GO bond của cùng một chính quyền địa phương, revenue bond nhiều khả năng có:', choices: ['lợi suất cao hơn vì chỉ dựa vào dòng tiền của một dự án', 'lợi suất thấp hơn vì dự án có doanh thu riêng', 'lợi suất bằng nhau vì cùng tổ chức phát hành'], answer: 0, explain: 'Revenue bond chỉ được trả từ một dự án; nếu dự án không tạo đủ tiền, trái chủ không có quyền với thuế chung, nên rủi ro và lợi suất thường cao hơn GO bond. Phương án "thấp hơn" ngược lại. Phương án "bằng nhau" bỏ qua khác biệt về nguồn trả nợ.' },
    { q: 'Một thành phố có dân số 1,2 triệu người và nợ GO bond 1,8 tỷ USD. Nợ bình quân đầu người gần nhất với:', choices: ['1.500 USD', '667 USD', '150 USD'], answer: 0, explain: '1.800.000.000 / 1.200.000 = 1.500 USD mỗi người, một chỉ tiêu gánh nặng nợ của GO bond. Lựa chọn 667 USD đảo ngược phép chia (1,2 / 1,8 x 1.000). Lựa chọn 150 USD sai bậc đơn vị khi quy đổi tỷ và triệu.' },
    { q: 'Điểm khác biệt quan trọng nhất giữa chính quyền địa phương và chính phủ trung ương khi phân tích tín dụng là chính quyền địa phương:', choices: ['không có quyền thu thuế', 'không thể dùng chính sách tiền tệ hay in tiền để trả nợ, và thường bị ràng buộc cân bằng ngân sách', 'luôn được chính phủ trung ương bảo lãnh nên rủi ro thấp hơn'], answer: 1, explain: 'Chính quyền địa phương không có ngân hàng trung ương nên giống sovereign vay bằng ngoại tệ hơn; nhiều nơi còn bị luật yêu cầu cân bằng ngân sách. Phương án "không có quyền thu thuế" sai: GO bond dựa chính vào thuế địa phương. Phương án "luôn được bảo lãnh" sai: hỗ trợ của trung ương thường chỉ là ngầm định.' },
    { q: 'World Bank và Asian Development Bank được xếp vào nhóm tổ chức phát hành nào?', choices: ['Sovereign', 'Chính quyền địa phương', 'Tổ chức đa quốc gia (supranational)'], answer: 2, explain: 'Các tổ chức do nhiều quốc gia cùng sở hữu như World Bank, ADB là supranational, một loại non-sovereign. Sovereign là chính phủ trung ương của một quốc gia. Chính quyền địa phương là tỉnh, thành phố, vùng.' },
    { q: 'Một quasi-government agency (tổ chức gần chính phủ) có tình hình tài chính riêng ở mức trung bình nhưng được xếp hạng gần bằng chính phủ trung ương. Lý do hợp lý nhất là:', choices: ['tổ chức xếp hạng tính đến khả năng được chính phủ hỗ trợ (ngầm định hoặc rõ ràng)', 'agency có quyền in tiền như ngân hàng trung ương', 'trái phiếu agency luôn được bảo đảm bằng thu thuế quốc gia'], answer: 0, explain: 'Xếp hạng của các tổ chức gần chính phủ thường được nâng lên nhờ khả năng chính phủ hỗ trợ khi khó khăn, do vai trò chính sách của tổ chức đó. Agency không có quyền in tiền. Trái phiếu agency không được bảo đảm bằng thu thuế quốc gia, trừ khi có bảo lãnh rõ ràng.' },
    { q: 'Revenue bond tài trợ cho một cây cầu thu phí có DSCR 0,90 lần trong năm vừa qua. Điều này nhiều khả năng có nghĩa là:', choices: ['doanh thu ròng dư 10% so với nghĩa vụ trả nợ', 'doanh thu ròng không đủ trả nợ; phải dùng quỹ dự phòng hoặc nguồn khác để bù phần thiếu', 'chính quyền địa phương bắt buộc phải dùng thu thuế chung để trả'], answer: 1, explain: 'DSCR = doanh thu ròng / nghĩa vụ trả nợ; 0,90 nghĩa là doanh thu ròng chỉ trang trải 90% nghĩa vụ, phải bù từ quỹ dự phòng hoặc nguồn khác. Phương án "dư 10%" nhầm chiều. Phương án "bắt buộc dùng thu thuế chung" sai vì trái chủ revenue bond không có quyền với thuế chung.' },
    { q: 'Một chính phủ có nợ 500 tỷ USD và thu ngân sách 125 tỷ USD. Lãi suất bình quân trên nợ tăng từ 3% lên 5% khi nợ được tái cấp vốn. Tỷ lệ lãi / thu ngân sách sau khi lãi suất tăng gần nhất với:', choices: ['5%', '12%', '20%'], answer: 2, explain: 'Lãi mới = 500 x 5% = 25; 25 / 125 = 20% (trước đó 15 / 125 = 12%). Khả năng chi trả xấu đi rõ rệt dù nợ không đổi. Lựa chọn 5% chia lãi cho nợ, tức chỉ là lãi suất bình quân. Lựa chọn 12% là tỷ lệ trước khi lãi suất tăng.' },
    { q: 'Khi đánh giá tín dụng sovereign, lịch sử từng vỡ nợ hoặc tái cơ cấu nợ của quốc gia thường được xem xét trong nhóm yếu tố nào?', choices: ['Thể chế và chính sách (bao gồm thiện chí trả nợ)', 'Linh hoạt kinh tế', 'Ổn định đối ngoại'], answer: 0, explain: 'Lịch sử vỡ nợ phản ánh thiện chí trả nợ và chất lượng thể chế, thuộc nhóm thể chế và chính sách. Linh hoạt kinh tế xét mức đa dạng, thu nhập, tăng trưởng. Ổn định đối ngoại là các chỉ tiêu định lượng về dự trữ ngoại hối và nợ nước ngoài.' },
    { q: 'Chỉ tiêu nào sau đây phù hợp nhất để phân tích khả năng trả nợ của một revenue bond tài trợ cho sân bay?', choices: ['Nợ chính phủ / GDP của quốc gia', 'Debt service coverage ratio của sân bay', 'Dự trữ ngoại hối / nợ nước ngoài ngắn hạn'], answer: 1, explain: 'Revenue bond được phân tích giống doanh nghiệp: dự án có tạo đủ doanh thu ròng để trả nợ không, nên DSCR là chỉ tiêu then chốt. Nợ / GDP và dự trữ ngoại hối / nợ nước ngoài ngắn hạn là chỉ tiêu của sovereign.' },
    { q: 'Quốc gia nào sau đây nhiều khả năng được đánh giá cao hơn về tăng trưởng và ổn định kinh tế (yếu tố định lượng)?', choices: ['Tăng trưởng GDP thực bình quân 7%/năm nhưng dao động từ -4% đến +15%', 'GDP bình quân đầu người thấp, tăng trưởng 5%/năm phụ thuộc kiều hối', 'GDP bình quân đầu người cao, tăng trưởng thực 2,5%/năm ổn định'], answer: 2, explain: 'Nhóm tăng trưởng và ổn định kinh tế ưa chuộng quy mô lớn, thu nhập bình quân cao, tăng trưởng bền vững và ít biến động. Tăng trưởng cao nhưng dao động mạnh làm thu ngân sách khó dự báo. Thu nhập bình quân thấp và phụ thuộc kiều hối là điểm yếu.' },
  ];

  window.LESSONS['FI-15'] = {
    moduleId: 'FI-15',
    calculator: 'Không cần máy tính',
    warmup: [
      'Ôn FI-14: expected loss bằng gì? POD gắn với người vay hay khoản nợ?',
      'Vì sao một chính phủ vay bằng đồng nội tệ khó vỡ nợ hơn một doanh nghiệp?',
      'Đoán trước: chủ nợ có thể kiện một quốc gia ra tòa phá sản không?',
    ],
    sections,
    glossary,
    practice,
    widgets: {},
    slides: [],
    wrapup: [
      'Liệt kê 5 yếu tố định tính và 3 nhóm định lượng khi đánh giá sovereign.',
      'Vì sao xếp hạng nợ ngoại tệ thường thấp hơn xếp hạng nợ nội tệ?',
      'So sánh GO bond và revenue bond: nguồn trả nợ, chỉ tiêu phân tích, mức rủi ro.',
    ],
  };
}());
