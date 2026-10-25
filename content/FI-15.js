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
<p>Tiếp theo: tab <b>Luyện tập</b> 6 câu, rồi FI-16 (doanh nghiệp).</p>`,
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
    { q: 'Khả năng trả nợ của một chính phủ trung ương chủ yếu phụ thuộc vào:', choices: ['khả năng thu thuế từ hoạt động kinh tế trong lãnh thổ', 'giá trị vốn hóa của thị trường chứng khoán', 'tỷ lệ sở hữu nước ngoài trong các doanh nghiệp'], answer: 0, explain: 'Nguồn trả nợ của sovereign là thu ngân sách, chủ yếu từ thuế. B và C có thể liên quan gián tiếp đến nền kinh tế nhưng không phải nguồn trả nợ.' },
    { q: 'Yếu tố nào sau đây là yếu tố định tính khi đánh giá tín dụng sovereign?', choices: ['Nợ chính phủ / GDP', 'Mức độ minh bạch, pháp quyền và ổn định chính trị', 'Dự trữ ngoại hối / nợ nước ngoài ngắn hạn'], answer: 1, explain: 'Thể chế và chính sách là yếu tố định tính. A thuộc sức mạnh tài khóa và C thuộc ổn định đối ngoại, đều là yếu tố định lượng.' },
    { q: 'Một quốc gia có GDP 600, nợ chính phủ 420, thu ngân sách 150 và chi trả lãi 18 (tỷ USD). Chỉ tiêu khả năng chi trả nợ (lãi / thu ngân sách) gần nhất với:', choices: ['70%', '3%', '12%'], answer: 2, explain: '18 / 150 = 12%. A là nợ / GDP (gánh nặng nợ, không phải khả năng chi trả). B là lãi / GDP.' },
    { q: 'So với các quốc gia khác, quốc gia có đồng tiền dự trữ thường:', choices: ['có khả năng vay nợ bằng nội tệ lớn hơn', 'có dự trữ ngoại hối thấp hơn nên rủi ro cao hơn', 'không cần quan tâm đến kỷ luật tài khóa'], answer: 0, explain: 'Nhu cầu toàn cầu với đồng tiền dự trữ cho phép quốc gia đó vay nhiều hơn bằng chính đồng tiền của mình. B không có quan hệ tất yếu. C sai: nợ vẫn phải bền vững.' },
    { q: 'Một sân bay phát hành revenue bond. Doanh thu 60 triệu, chi phí vận hành 15 triệu, nghĩa vụ trả lãi và gốc 30 triệu mỗi năm. DSCR gần nhất với:', choices: ['2,00 lần', '1,50 lần', '0,67 lần'], answer: 1, explain: 'Doanh thu ròng = 60 - 15 = 45; DSCR = 45 / 30 = 1,50. A dùng doanh thu gộp. C đảo ngược tử và mẫu.' },
    { q: 'Phát biểu nào về xếp hạng nội tệ và ngoại tệ của sovereign là đúng nhất?', choices: ['Xếp hạng ngoại tệ luôn cao hơn vì ngoại tệ ổn định hơn', 'Hai xếp hạng luôn bằng nhau vì cùng một tổ chức phát hành', 'Xếp hạng ngoại tệ thường bằng hoặc thấp hơn xếp hạng nội tệ'], answer: 2, explain: 'Chính phủ có thể tăng thuế hoặc in tiền để trả nợ nội tệ, nhưng không in được ngoại tệ, nên rủi ro nợ ngoại tệ cao hơn. A ngược lại. B sai vì tổ chức xếp hạng tách riêng hai xếp hạng.' },
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
