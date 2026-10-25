// Bài giảng QM-11 - Introduction to Financial Data Science (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027 (một LOS, mức độ mô tả). Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t, pages } = window.CFAH;

  const sections = [
    {
      title: '1. Bức tranh lớn: fintech và khoa học dữ liệu tài chính',
      minutes: 5,
      html: `
<p>Module này chỉ có <b>một LOS</b> ở mức "describe": mô tả cách ${t('bigdata', 'big data')}, ${t('ml', 'machine learning')} và ${t('ai', 'trí tuệ nhân tạo (AI)')} được dùng trong khoa học dữ liệu tài chính, ${t('fintech', 'fintech')} và quản lý đầu tư. Không có tính toán; đề thi hỏi định nghĩa, phân loại và ví dụ ứng dụng.</p>
<div class="key">Chuỗi logic cần nhớ: <b>dữ liệu</b> (big data, gồm cả dữ liệu thay thế) → <b>xử lý</b> (khoa học dữ liệu: thu thập, làm sạch, lưu trữ, tìm kiếm, truyền tải, trực quan hóa) → <b>học từ dữ liệu</b> (machine learning, AI, NLP) → <b>ứng dụng</b> (phân tích văn bản, quản trị rủi ro, giao dịch thuật toán, robo-advisor).</div>
<p>${t('fintech', 'Fintech')} là việc ứng dụng công nghệ vào dịch vụ tài chính, đặc biệt ở khâu thu thập và phân tích dữ liệu. Ba động lực chính: lượng dữ liệu bùng nổ, chi phí lưu trữ và tính toán giảm mạnh, và thuật toán (AI, ML) đủ mạnh để rút ra thông tin từ dữ liệu phức tạp.</p>
<p>Cấu trúc bài: phần 2 nói về dữ liệu, phần 3 về AI và machine learning, phần 4 về văn bản và ngôn ngữ, phần 5 về ứng dụng trong đầu tư và fintech, phần 6 tóm tắt bẫy.</p>`,
    },
    {
      title: '2. Big data: đặc điểm, nguồn dữ liệu và quy trình xử lý',
      minutes: 10,
      html: `
<h4>Các đặc điểm "V"</h4>
<table class="plain"><thead><tr><th>Đặc điểm</th><th>Ý nghĩa</th><th>Ví dụ</th></tr></thead><tbody>
<tr><td><b>Volume</b> (khối lượng)</td><td>Lượng dữ liệu cực lớn, tính bằng terabyte, petabyte trở lên.</td><td>Toàn bộ lệnh khớp trên mọi sàn trong 10 năm</td></tr>
<tr><td><b>Velocity</b> (tốc độ)</td><td>Dữ liệu sinh ra và cần xử lý rất nhanh, nhiều khi theo thời gian thực (độ trễ thấp).</td><td>Dữ liệu giá theo từng mili giây</td></tr>
<tr><td><b>Variety</b> (đa dạng)</td><td>Nhiều dạng: có cấu trúc, bán cấu trúc, ${t('unstructured', 'phi cấu trúc')}.</td><td>Bảng giá, file JSON, văn bản, ảnh, giọng nói</td></tr>
<tr><td><b>Veracity</b> (độ tin cậy)</td><td>Mức độ chính xác, đáng tin của dữ liệu; nguồn càng đa dạng càng nhiều nhiễu, sai lệch.</td><td>Tin đồn trên mạng xã hội, tài khoản ảo</td></tr>
</tbody></table>
<p class="tip">Một số tài liệu thêm <b>Value</b> (giá trị khai thác được). Khi đề hỏi về "độ tin cậy, chất lượng dữ liệu", đáp án là <b>veracity</b>, không phải variety.</p>

<h4>Nguồn dữ liệu</h4>
<p>Big data gồm <b>dữ liệu truyền thống</b> (báo cáo tài chính, giá và khối lượng giao dịch, dữ liệu vĩ mô) và ${t('altdata', 'dữ liệu thay thế (alternative data)')}. Dữ liệu thay thế đến từ ba nhóm nguồn:</p>
<table class="plain"><thead><tr><th>Nguồn</th><th>Ví dụ</th></tr></thead><tbody>
<tr><td><b>Cá nhân</b> (individuals)</td><td>Bài đăng mạng xã hội, đánh giá sản phẩm, lượt tìm kiếm, email</td></tr>
<tr><td><b>Quy trình kinh doanh</b> (${t('exhaust', 'corporate exhaust')})</td><td>Dữ liệu quẹt thẻ, máy quét mã vạch ở quầy thu ngân, hồ sơ chuỗi cung ứng, giao dịch ngân hàng</td></tr>
<tr><td><b>Cảm biến</b> (sensors, ${t('iot', 'Internet of Things')})</td><td>Ảnh vệ tinh (đếm xe ở bãi đỗ siêu thị), định vị GPS điện thoại, thiết bị thông minh, camera</td></tr>
</tbody></table>
<p>Dữ liệu thay thế thường phi cấu trúc và cần xử lý nhiều trước khi dùng; nó có thể cho tín hiệu <b>sớm hơn</b> số liệu chính thức (ví dụ ước doanh thu bán lẻ trước khi công ty công bố).</p>

<h4>Khoa học dữ liệu: các bước xử lý</h4>
<ol>
<li><b>Capture</b> (thu thập): lấy dữ liệu từ nguồn và chuyển về định dạng dùng được.</li>
<li><b>Curation</b> (làm sạch, chọn lọc): xử lý dữ liệu thiếu, sai, trùng lặp để đảm bảo chất lượng.</li>
<li><b>Storage</b> (lưu trữ): chọn cơ sở dữ liệu, kiến trúc phù hợp với khối lượng và loại dữ liệu.</li>
<li><b>Search</b> (tìm kiếm): truy vấn để lấy đúng thông tin cần.</li>
<li><b>Transfer</b> (truyền tải): đưa dữ liệu từ nơi lưu trữ đến công cụ phân tích.</li>
</ol>
<p>Cuối cùng là ${t('viz', 'trực quan hóa (visualization)')}: biểu đồ, bản đồ nhiệt, đám mây từ (tag cloud) với dữ liệu văn bản, giúp con người đọc được kết quả.</p>`,
    },
    {
      title: '3. AI và machine learning',
      minutes: 12,
      html: `
<p>${t('ai', 'AI')} là các hệ thống máy tính được thiết kế để mô phỏng nhận thức của con người (nhận diện, suy luận, ra quyết định). ${t('ml', 'Machine learning (ML)')} là một nhánh của AI: thuật toán <b>tự học quy luật từ dữ liệu</b>, không cần người lập trình đặt sẵn quy tắc hay giả định về phân phối xác suất.</p>

<h4>Ba nhóm phương pháp</h4>
<table class="plain"><thead><tr><th>Nhóm</th><th>Dữ liệu đầu vào</th><th>Mục tiêu</th><th>Ví dụ đầu tư</th></tr></thead><tbody>
<tr><td>${t('supervised', 'Supervised learning')} (có giám sát)</td><td>Có <b>nhãn</b>: biết cả input và output</td><td>Dự báo output cho dữ liệu mới (phân loại hoặc hồi quy)</td><td>Dự báo doanh nghiệp vỡ nợ hay không từ các chỉ số tài chính</td></tr>
<tr><td>${t('unsupervised', 'Unsupervised learning')} (không giám sát)</td><td><b>Không có nhãn</b></td><td>Tự tìm cấu trúc: gom cụm, giảm chiều dữ liệu</td><td>Gom cổ phiếu thành nhóm có hành vi giống nhau, không dựa vào phân ngành</td></tr>
<tr><td>${t('deep', 'Deep learning')} (học sâu)</td><td>Thường rất lớn, phức tạp (ảnh, giọng nói, văn bản)</td><td>Dùng ${t('nn', 'mạng nơ-ron')} nhiều lớp để nhận diện mẫu ngày càng phức tạp</td><td>Nhận diện hình ảnh vệ tinh, xử lý ngôn ngữ</td></tr>
</tbody></table>
<p class="tip">Mẹo phân biệt: câu hỏi có "biết trước kết quả / dữ liệu đã gắn nhãn" → supervised. Có "tìm nhóm / cấu trúc ẩn / không có nhãn" → unsupervised. Có "nhiều lớp mạng nơ-ron" → deep learning. Hồi quy tuyến tính ở QM-10 thực chất là một dạng supervised learning.</p>

<h4>Huấn luyện, kiểm định và kiểm tra</h4>
<p>Dữ liệu thường được chia ba phần:</p>
<ul>
<li>${t('train', 'Training set')}: để mô hình học (ước lượng tham số).</li>
<li><b>Validation set</b>: để đánh giá và tinh chỉnh mô hình (chọn độ phức tạp, tham số điều chỉnh).</li>
<li><b>Test set</b>: dữ liệu mô hình chưa từng thấy, dùng <b>một lần cuối</b> để đo hiệu quả ngoài mẫu (out-of-sample).</li>
</ul>

<h4>Overfitting và underfitting</h4>
<table class="plain"><thead><tr><th></th><th>${t('overfit', 'Overfitting')}</th><th>${t('underfit', 'Underfitting')}</th></tr></thead><tbody>
<tr><td>Nguyên nhân</td><td>Mô hình quá phức tạp, học cả <b>nhiễu</b> như thể là quy luật</td><td>Mô hình quá đơn giản, bỏ sót quy luật thật</td></tr>
<tr><td>Dấu hiệu</td><td>Rất khớp dữ liệu huấn luyện, nhưng dự báo kém trên dữ liệu mới</td><td>Kém cả trên dữ liệu huấn luyện lẫn dữ liệu mới</td></tr>
<tr><td>Khắc phục</td><td>Giảm độ phức tạp, thêm dữ liệu, kiểm định ngoài mẫu</td><td>Thêm biến, dùng mô hình linh hoạt hơn</td></tr>
</tbody></table>
<p class="warn"><b>Bẫy:</b> độ chính xác rất cao <b>trong mẫu huấn luyện</b> không chứng minh mô hình tốt; đó thường là dấu hiệu overfitting. Luôn hỏi: kết quả trên test set thế nào?</p>
<p>Một hạn chế khác của ML: nhiều mô hình (nhất là deep learning) là ${t('blackbox', '"hộp đen" (black box)')}: cho kết quả tốt nhưng khó giải thích vì sao. Trong đầu tư, điều này gây khó cho việc giải trình với khách hàng và cơ quan quản lý.</p>`,
    },
    {
      title: '4. Phân tích văn bản và xử lý ngôn ngữ tự nhiên (NLP)',
      minutes: 5,
      html: `
<p>Phần lớn thông tin tài chính nằm ở dạng chữ và lời nói: báo cáo thường niên, hồ sơ gửi cơ quan quản lý, biên bản họp báo kết quả kinh doanh, tin tức, mạng xã hội.</p>
<ul>
<li>${t('textan', 'Text analytics')} (phân tích văn bản): dùng máy tính phân tích dữ liệu văn bản hoặc giọng nói phi cấu trúc, để <b>tự động hóa</b> việc đọc hồ sơ và phát hiện mẫu từ ngữ, tần suất, sắc thái.</li>
<li>${t('nlp', 'NLP (natural language processing)')}: giúp máy tính <b>hiểu và diễn giải ngôn ngữ con người</b>, kể cả ngữ cảnh, đồng nghĩa, phủ định.</li>
</ul>
<table class="plain"><thead><tr><th>Ứng dụng</th><th>Cách làm</th></tr></thead><tbody>
<tr><td>${t('sentiment', 'Phân tích sắc thái (sentiment analysis)')}</td><td>Chấm điểm tích cực / tiêu cực của biên bản họp, báo cáo phân tích, tin tức để dự báo phản ứng giá</td></tr>
<tr><td>Giám sát tuân thủ</td><td>Quét email, chat, ghi âm của nhân viên để phát hiện giao dịch nội gián, gian lận</td></tr>
<tr><td>Đọc hồ sơ tự động</td><td>Theo dõi thay đổi từ ngữ giữa các kỳ báo cáo (ví dụ mục rủi ro dài thêm bất thường)</td></tr>
<tr><td>Tóm tắt, dịch</td><td>Tóm tắt hàng nghìn báo cáo, dịch tài liệu đa ngôn ngữ</td></tr>
</tbody></table>`,
    },
    {
      title: '5. Ứng dụng trong quản lý đầu tư và fintech',
      minutes: 8,
      html: `
<table class="plain"><thead><tr><th>Lĩnh vực</th><th>Công nghệ dùng</th><th>Mô tả</th></tr></thead><tbody>
<tr><td><b>Phân tích đầu tư</b></td><td>Dữ liệu thay thế, ML</td><td>Ước doanh thu, phát hiện tín hiệu sớm (ảnh vệ tinh, dữ liệu thẻ), sàng lọc cổ phiếu</td></tr>
<tr><td><b>Quản trị rủi ro</b> (risk governance)</td><td>Big data, mô phỏng, ML</td><td>Mô hình hóa, kiểm tra sức chịu đựng (stress test) và giám sát rủi ro, thường theo thời gian thực</td></tr>
<tr><td>${t('algo', 'Giao dịch thuật toán')}</td><td>Quy tắc định sẵn, dữ liệu giá - khối lượng thời gian thực</td><td>Tự động chia nhỏ lệnh, tối ưu điểm vào lệnh, giảm chi phí và tác động giá</td></tr>
<tr><td>${t('hft', 'Giao dịch tần suất cao (HFT)')}</td><td>Tốc độ cực nhanh, độ trễ thấp</td><td>Khai thác sai lệch giá rất ngắn trong ngày</td></tr>
<tr><td>${t('robo', 'Robo-advisor')}</td><td>Thuật toán phân bổ tài sản</td><td>Tư vấn và quản lý danh mục tự động, chi phí thấp, phục vụ nhà đầu tư nhỏ</td></tr>
<tr><td>Tuân thủ, chống gian lận</td><td>NLP, ML</td><td>Giám sát giao tiếp, phát hiện giao dịch bất thường</td></tr>
<tr><td>${t('dlt', 'Sổ cái phân tán (DLT)')}</td><td>Blockchain</td><td>Ghi nhận và thanh toán giao dịch không cần trung gian tập trung, ví dụ token hóa tài sản</td></tr>
</tbody></table>
<div class="example"><div class="ex-h">Ví dụ 5.1 - Phân loại tình huống</div>
<p>Một quỹ dùng ảnh vệ tinh đếm số xe ở bãi đỗ của chuỗi siêu thị, đưa vào mô hình đã huấn luyện trên dữ liệu doanh thu quá khứ để dự báo doanh thu quý tới. Hãy xác định: (a) loại dữ liệu và nguồn, (b) loại machine learning.</p>
<details><summary>Xem lời giải</summary>
<p>(a) Dữ liệu thay thế, nguồn <b>cảm biến</b> (vệ tinh), phi cấu trúc (ảnh), nên cần deep learning hoặc xử lý ảnh để đếm xe.<br>
(b) Dự báo doanh thu từ dữ liệu quá khứ đã biết kết quả (doanh thu thật) là <b>supervised learning</b> (dạng hồi quy).</p></details></div>
<p class="tip">Nhà phân tích không bị thay thế mà được hỗ trợ: máy xử lý khối lượng lớn, con người đánh giá chất lượng dữ liệu, giải thích kết quả và chịu trách nhiệm đạo đức (ví dụ quyền riêng tư khi dùng dữ liệu cá nhân).</p>`,
    },
    {
      title: '6. Tóm tắt và bẫy thường gặp',
      minutes: 5,
      html: `
<table class="plain"><thead><tr><th>Khái niệm</th><th>Nhớ</th></tr></thead><tbody>
<tr><td>Volume / Velocity / Variety / Veracity</td><td>Khối lượng / tốc độ / đa dạng định dạng / độ tin cậy</td></tr>
<tr><td>Dữ liệu thay thế</td><td>3 nguồn: cá nhân, quy trình kinh doanh (corporate exhaust), cảm biến (IoT)</td></tr>
<tr><td>Quy trình khoa học dữ liệu</td><td>Capture, curation, storage, search, transfer, rồi visualization</td></tr>
<tr><td>Supervised</td><td>Dữ liệu có nhãn, dự báo output</td></tr>
<tr><td>Unsupervised</td><td>Không nhãn, tìm cấu trúc (gom cụm)</td></tr>
<tr><td>Deep learning</td><td>Mạng nơ-ron nhiều lớp, mẫu phức tạp</td></tr>
<tr><td>Overfitting</td><td>Quá phức tạp, học cả nhiễu: tốt trong mẫu, kém ngoài mẫu</td></tr>
<tr><td>Underfitting</td><td>Quá đơn giản: kém cả trong lẫn ngoài mẫu</td></tr>
<tr><td>Training / validation / test</td><td>Học / tinh chỉnh / đánh giá cuối ngoài mẫu</td></tr>
<tr><td>Text analytics và NLP</td><td>Sentiment, giám sát tuân thủ, đọc hồ sơ tự động</td></tr>
<tr><td>Algorithmic trading và HFT</td><td>Quy tắc định sẵn tối ưu thực thi; HFT khai thác sai lệch rất ngắn</td></tr>
</tbody></table>
<p>Tiếp theo: tab <b>Luyện tập</b> 8 câu. Module này nhẹ, hãy dùng thời gian còn lại để ôn lại QM-10.</p>`,
    },
  ];

  const glossary = {
    bigdata: ['Big data', 'Dữ liệu lớn', 'Tập dữ liệu rất lớn, nhanh, đa dạng, gồm cả dữ liệu truyền thống và dữ liệu thay thế.'],
    ml: ['Machine learning (ML)', 'Học máy', 'Thuật toán tự học quy luật từ dữ liệu, không cần quy tắc hay giả định phân phối đặt sẵn.'],
    ai: ['Artificial intelligence (AI)', 'Trí tuệ nhân tạo', 'Hệ thống máy tính mô phỏng nhận thức con người: nhận diện, suy luận, ra quyết định.'],
    fintech: ['Fintech', 'Công nghệ tài chính', 'Ứng dụng công nghệ vào dịch vụ tài chính, nhất là thu thập và phân tích dữ liệu.'],
    unstructured: ['Unstructured data', 'Dữ liệu phi cấu trúc', 'Dữ liệu không nằm sẵn trong bảng hàng - cột: văn bản, ảnh, âm thanh, video.'],
    altdata: ['Alternative data', 'Dữ liệu thay thế', 'Dữ liệu ngoài nguồn truyền thống: mạng xã hội, giao dịch thẻ, ảnh vệ tinh, cảm biến.'],
    exhaust: ['Corporate exhaust', 'Dữ liệu từ quy trình kinh doanh', 'Dữ liệu phát sinh khi doanh nghiệp vận hành: quẹt thẻ, máy quét mã vạch, chuỗi cung ứng.'],
    iot: ['Internet of Things (IoT)', 'Internet vạn vật', 'Mạng thiết bị có cảm biến kết nối Internet, tạo dữ liệu liên tục.'],
    viz: ['Data visualization', 'Trực quan hóa dữ liệu', 'Trình bày dữ liệu bằng hình ảnh (biểu đồ, bản đồ nhiệt, đám mây từ) để dễ hiểu.'],
    supervised: ['Supervised learning', 'Học có giám sát', 'Học từ dữ liệu có nhãn (biết input và output) để dự báo output cho dữ liệu mới.'],
    unsupervised: ['Unsupervised learning', 'Học không giám sát', 'Học từ dữ liệu không nhãn, tự tìm cấu trúc như gom cụm.'],
    deep: ['Deep learning', 'Học sâu', 'ML dùng mạng nơ-ron nhiều lớp để nhận diện mẫu ngày càng phức tạp.'],
    nn: ['Neural network', 'Mạng nơ-ron', 'Mô hình gồm các lớp nút liên kết, lấy cảm hứng từ não người; kỹ thuật AI chủ chốt.'],
    train: ['Training set', 'Tập huấn luyện', 'Phần dữ liệu để mô hình học; tách biệt với validation set và test set.'],
    overfit: ['Overfitting', 'Quá khớp', 'Mô hình quá phức tạp, học cả nhiễu: rất khớp trong mẫu nhưng dự báo kém ngoài mẫu.'],
    underfit: ['Underfitting', 'Chưa khớp', 'Mô hình quá đơn giản, bỏ sót quy luật thật: kém cả trong và ngoài mẫu.'],
    blackbox: ['Black box', 'Hộp đen', 'Mô hình cho kết quả nhưng khó giải thích cách đi đến kết quả đó.'],
    textan: ['Text analytics', 'Phân tích văn bản', 'Dùng máy tính phân tích văn bản, giọng nói phi cấu trúc để tự động hóa và tìm mẫu.'],
    nlp: ['Natural language processing (NLP)', 'Xử lý ngôn ngữ tự nhiên', 'Giúp máy tính hiểu và diễn giải ngôn ngữ con người.'],
    sentiment: ['Sentiment analysis', 'Phân tích sắc thái', 'Đo mức tích cực hay tiêu cực của văn bản, ví dụ biên bản họp kết quả kinh doanh.'],
    algo: ['Algorithmic trading', 'Giao dịch thuật toán', 'Dùng máy tính với quy tắc định sẵn để đặt và thực thi lệnh.'],
    hft: ['High-frequency trading (HFT)', 'Giao dịch tần suất cao', 'Giao dịch thuật toán tốc độ cực cao, khai thác sai lệch giá rất ngắn trong ngày.'],
    robo: ['Robo-advisor', 'Cố vấn tự động', 'Dịch vụ tư vấn và quản lý danh mục tự động bằng thuật toán, chi phí thấp.'],
    dlt: ['Distributed ledger technology (DLT)', 'Công nghệ sổ cái phân tán', 'Cơ sở dữ liệu dùng chung giữa nhiều bên, ghi nhận giao dịch không cần trung gian; blockchain là một dạng.'],
  };

  const practice = [
    { q: 'Một nhà phân tích lo ngại rằng dữ liệu thu thập từ mạng xã hội chứa nhiều tài khoản ảo và thông tin sai lệch. Đặc điểm nào của big data đang được nhắc đến?', choices: ['Veracity', 'Variety', 'Velocity'], answer: 0, explain: 'Veracity là độ tin cậy, chất lượng của dữ liệu. Variety nói về sự đa dạng định dạng (văn bản, ảnh...), velocity nói về tốc độ dữ liệu sinh ra và cần xử lý.' },
    { q: 'Dữ liệu từ máy quét mã vạch tại quầy thu ngân của một chuỗi bán lẻ thuộc nhóm nguồn dữ liệu thay thế nào?', choices: ['Cá nhân (individuals)', 'Quy trình kinh doanh (corporate exhaust)', 'Cảm biến (sensors)'], answer: 1, explain: 'Dữ liệu phát sinh khi doanh nghiệp vận hành (bán hàng, quẹt thẻ, chuỗi cung ứng) là corporate exhaust. Nguồn cá nhân là nội dung do người dùng tạo ra như bài đăng, đánh giá; nguồn cảm biến là vệ tinh, GPS, thiết bị IoT.' },
    { q: 'Một ngân hàng dùng dữ liệu 10 năm về các khoản vay, trong đó mỗi khoản đã được ghi rõ "vỡ nợ" hoặc "không vỡ nợ", để xây mô hình dự báo khả năng vỡ nợ của khách hàng mới. Đây là:', choices: ['Unsupervised learning', 'Deep learning bắt buộc', 'Supervised learning'], answer: 2, explain: 'Dữ liệu có nhãn (biết kết quả vỡ nợ) và mục tiêu là dự báo nhãn cho dữ liệu mới, nên là supervised learning (bài toán phân loại). Unsupervised dùng dữ liệu không nhãn. Deep learning có thể dùng nhưng không bắt buộc và không phải là cách phân loại theo nhãn.' },
    { q: 'Một quỹ muốn nhóm 500 cổ phiếu thành các cụm có biến động giá giống nhau mà không dựa vào phân ngành có sẵn. Phương pháp phù hợp nhất là:', choices: ['Unsupervised learning', 'Supervised learning', 'Giao dịch tần suất cao'], answer: 0, explain: 'Không có nhãn cho trước, mục tiêu là tìm cấu trúc ẩn (gom cụm), nên là unsupervised learning. Supervised cần biết output đúng để học; HFT là chiến lược giao dịch, không phải phương pháp phân tích dữ liệu.' },
    { q: 'Một mô hình machine learning dự báo đúng 99% trên tập huấn luyện nhưng chỉ đúng 52% trên tập kiểm tra. Nhiều khả năng mô hình bị:', choices: ['Underfitting vì quá đơn giản', 'Overfitting vì học cả nhiễu', 'Thiếu dữ liệu có cấu trúc'], answer: 1, explain: 'Rất tốt trong mẫu nhưng kém ngoài mẫu là dấu hiệu điển hình của overfitting: mô hình quá phức tạp, coi nhiễu là quy luật. Underfitting thì kém cả trong mẫu.' },
    { q: 'Trong quá trình xây dựng mô hình, phần dữ liệu dùng một lần cuối để đánh giá hiệu quả ngoài mẫu, sau khi đã chọn xong mô hình, là:', choices: ['Training set', 'Validation set', 'Test set'], answer: 2, explain: 'Test set là dữ liệu mô hình chưa từng thấy, dùng để đánh giá cuối cùng. Training set để học tham số; validation set để tinh chỉnh và chọn mô hình.' },
    { q: 'Ứng dụng nào sau đây là ví dụ điển hình của xử lý ngôn ngữ tự nhiên (NLP) trong quản lý đầu tư?', choices: ['Chấm điểm sắc thái tích cực hay tiêu cực của biên bản họp công bố kết quả kinh doanh', 'Đếm số xe trong ảnh vệ tinh bãi đỗ siêu thị', 'Chia nhỏ lệnh lớn để giảm tác động giá'], answer: 0, explain: 'Sentiment analysis trên văn bản là ứng dụng NLP. Đếm xe trong ảnh vệ tinh là xử lý ảnh (thường bằng deep learning); chia nhỏ lệnh là giao dịch thuật toán.' },
    { q: 'Phát biểu nào về deep learning là đúng nhất?', choices: ['Chỉ dùng được với dữ liệu đã gắn nhãn và có cấu trúc', 'Dùng mạng nơ-ron nhiều lớp để nhận diện các mẫu ngày càng phức tạp', 'Luôn dễ giải thích hơn hồi quy tuyến tính'], answer: 1, explain: 'Deep learning dùng nhiều lớp mạng nơ-ron, rất mạnh với dữ liệu phức tạp như ảnh, văn bản. Nó không bị giới hạn ở dữ liệu có cấu trúc, và thường là "hộp đen", khó giải thích hơn hồi quy.' },
  ];

  window.LESSONS['QM-11'] = {
    moduleId: 'QM-11',
    calculator: 'Không cần máy tính',
    warmup: [
      'Ôn QM-10: trong hồi quy, R² rất cao trên dữ liệu dùng để ước lượng có đảm bảo dự báo tốt cho dữ liệu mới không? Vì sao?',
      'Kể 3 loại dữ liệu bạn nghĩ một quỹ đầu tư có thể dùng ngoài báo cáo tài chính và giá cổ phiếu.',
      'Bạn đã từng dùng ứng dụng tài chính nào có "AI" hoặc tư vấn tự động? Nó làm gì?',
    ],
    sections,
    glossary,
    practice,
    widgets: {},
    slides: [],
    wrapup: [
      'Viết 4 chữ V của big data và một ví dụ cho mỗi chữ.',
      'Phân biệt supervised, unsupervised và deep learning bằng một câu cho mỗi loại.',
      'Overfitting là gì, nhận biết thế nào, và vì sao cần test set riêng?',
    ],
  };
}());
