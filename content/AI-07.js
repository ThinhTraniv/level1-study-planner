// Bài giảng AI-07 - Introduction to Digital Assets (CFA Level I 2027).
// Nội dung tự soạn, bám theo LOS 2027. Chỉ dùng cá nhân.
window.LESSONS = window.LESSONS || {};

(function () {
  const { term: t, frac } = window.CFAH;

  const sections = [
    {
      title: '1. Bức tranh lớn: tài sản chỉ tồn tại trên sổ cái số',
      minutes: 6,
      html: `
<p>${t('digasset', 'Tài sản số (digital assets)')} là tài sản được tạo ra, lưu giữ và chuyển giao <b>hoàn toàn bằng điện tử</b>, thường ghi nhận trên một ${t('dlt', 'sổ cái phân tán (DLT)')}. Nhóm này gồm tiền mã hóa (bitcoin, ether), stablecoin, các loại token, NFT, và cả tiền số do ngân hàng trung ương phát hành (CBDC).</p>
<div class="key">Bốn LOS của module:
<ol>
<li>Ứng dụng tài chính của công nghệ sổ cái phân tán (phần 2, 3).</li>
<li>Đặc điểm đầu tư của tài sản số và so sánh với các lớp tài sản khác (phần 4).</li>
<li>Hình thức và phương tiện đầu tư vào tài sản số (phần 5).</li>
<li>Phân tích nguồn rủi ro, lợi nhuận và đa dạng hóa (phần 6, 7).</li>
</ol></div>
<p>Một câu để nhớ: <b>công nghệ</b> (DLT) và <b>tài sản</b> (tiền mã hóa) là hai chuyện khác nhau. DLT có thể hữu ích cho thanh toán chứng khoán, token hóa tài sản thật... ngay cả khi bạn không bao giờ mua bitcoin. Còn tiền mã hóa là một lớp tài sản mới với lợi nhuận và rủi ro rất đặc biệt.</p>
<p class="tip">QM-11 đã giới thiệu DLT như một ứng dụng fintech. Module này đi sâu hơn vào cơ chế và góc nhìn của nhà đầu tư.</p>`,
    },
    {
      title: '2. Sổ cái phân tán và blockchain hoạt động thế nào',
      minutes: 16,
      html: `
<h4>a) Từ sổ cái tập trung đến sổ cái phân tán</h4>
<p>Hệ thống tài chính truyền thống dùng <b>sổ cái tập trung</b>: ngân hàng, trung tâm lưu ký giữ bản ghi gốc; mọi bên tin vào trung gian đó. Một ${t('dlt', 'distributed ledger')} là cơ sở dữ liệu được <b>chia sẻ giữa nhiều bên tham gia (nodes)</b>; mỗi bên giữ một bản sao giống hệt, và bản ghi chỉ thay đổi khi mạng lưới đồng thuận.</p>

<h4>b) Blockchain</h4>
<p>${t('blockchain', 'Blockchain')} là dạng DLT phổ biến nhất: giao dịch được gom thành <b>khối (block)</b>; mỗi khối chứa ${t('hash', 'mã băm (hash)')} của khối trước, tạo thành một chuỗi. Sửa một giao dịch cũ sẽ làm thay đổi hash của khối đó và mọi khối sau, nên gần như không thể sửa mà không bị phát hiện: sổ cái có tính <b>bất biến (immutable)</b> và chỉ ghi thêm (append-only).</p>
<p>Quyền sở hữu được bảo vệ bằng ${t('crypto', 'mật mã khóa công khai')}: mỗi người có <b>khóa công khai</b> (như số tài khoản, ai cũng thấy) và <b>khóa riêng</b> (như chữ ký, chỉ chủ sở hữu biết). Ai nắm khóa riêng thì kiểm soát tài sản; <b>mất khóa riêng là mất tài sản</b>.</p>

<h4>c) Cơ chế đồng thuận</h4>
<table class="plain"><thead><tr><th></th><th>${t('pow', 'Proof of work (PoW)')}</th><th>${t('pos', 'Proof of stake (PoS)')}</th></tr></thead><tbody>
<tr><td>Ai được thêm khối</td><td>Thợ đào (miners) cạnh tranh giải bài toán mật mã bằng sức mạnh tính toán</td><td>Người xác thực (validators) được chọn theo lượng coin đã <b>khóa (stake)</b></td></tr>
<tr><td>Phần thưởng</td><td>Coin mới + phí giao dịch</td><td>Phí giao dịch + phần thưởng staking</td></tr>
<tr><td>Chống gian lận</td><td>Tấn công tốn chi phí điện và máy móc khổng lồ</td><td>Gian lận bị phạt mất phần coin đã khóa (slashing)</td></tr>
<tr><td>Năng lượng</td><td><b>Rất cao</b></td><td>Thấp hơn nhiều</td></tr>
<tr><td>Ví dụ</td><td>Bitcoin</td><td>Ethereum (chuyển sang PoS năm 2022)</td></tr>
</tbody></table>
<p>Nếu một nhóm kiểm soát hơn một nửa sức mạnh tính toán (hoặc lượng stake), họ có thể ghi đè giao dịch: gọi là ${t('attack51', 'tấn công 51%')}. Mạng càng lớn thì càng khó thực hiện.</p>

<h4>d) Permissionless và permissioned</h4>
<table class="plain"><thead><tr><th>${t('permless', 'Permissionless')} (công khai)</th><th>${t('permed', 'Permissioned')} (cấp phép)</th></tr></thead><tbody>
<tr><td>Ai cũng tham gia, xác thực, xem giao dịch được</td><td>Chỉ thành viên được duyệt mới tham gia; có thể giới hạn quyền xem, quyền ghi</td></tr>
<tr><td>Không cần tin vào một bên trung tâm</td><td>Một tổ chức hoặc liên minh quản lý</td></tr>
<tr><td>Ví dụ: Bitcoin, Ethereum</td><td>Ví dụ: liên minh ngân hàng dùng chung sổ cái thanh toán, hệ thống CBDC</td></tr>
</tbody></table>

<h4>e) Ưu và nhược điểm của DLT</h4>
<table class="plain"><thead><tr><th>Ưu điểm</th><th>Nhược điểm</th></tr></thead><tbody>
<tr><td>Chính xác, minh bạch, khó giả mạo (bất biến)</td><td>Lo ngại bảo vệ dữ liệu, quyền riêng tư (sổ cái công khai)</td></tr>
<tr><td>Chuyển quyền sở hữu nhanh, gần như tức thời</td><td>Cần năng lực tính toán và năng lượng lớn (nhất là PoW)</td></tr>
<tr><td>Giao dịch ngang hàng (P2P), không cần trung gian, giảm đối chiếu sổ sách</td><td>Khả năng mở rộng (số giao dịch mỗi giây) hạn chế; giao dịch sai khó đảo ngược</td></tr>
<tr><td>Hoạt động 24/7, có thể lập trình (smart contract)</td><td>Khung pháp lý chưa hoàn thiện, khó tích hợp với hệ thống cũ</td></tr>
</tbody></table>`,
    },
    {
      title: '3. Ứng dụng tài chính của DLT',
      minutes: 14,
      html: `
<table class="plain"><thead><tr><th>Ứng dụng</th><th>Mô tả</th><th>Lợi ích</th></tr></thead><tbody>
<tr><td><b>Tiền mã hóa</b> (cryptocurrency)</td><td>Tiền số do tư nhân phát hành, chuyển trực tiếp giữa hai bên</td><td>Không cần ngân hàng trung gian, chuyển xuyên biên giới</td></tr>
<tr><td>${t('tokenize', 'Token hóa (tokenization)')}</td><td>Biểu diễn quyền sở hữu tài sản thật (bất động sản, tác phẩm nghệ thuật, trái phiếu, quỹ) bằng token trên blockchain</td><td><b>Sở hữu từng phần</b>, chuyển nhượng nhanh, tăng thanh khoản cho tài sản khó chia nhỏ, minh bạch lịch sử sở hữu</td></tr>
<tr><td><b>Thanh toán bù trừ sau giao dịch</b> (post-trade clearing and settlement)</td><td>Ghi nhận giao dịch chứng khoán trực tiếp trên sổ cái chung</td><td>Rút ngắn thời gian thanh toán, giảm đối chiếu giữa các bên, giảm rủi ro đối tác và chi phí</td></tr>
<tr><td>${t('smartc', 'Smart contract')}</td><td>Chương trình tự thực hiện khi điều kiện được thỏa (ví dụ tự trả coupon, tự giải ngân khi hàng đến)</td><td>Tự động hóa, giảm chi phí trung gian và tranh chấp</td></tr>
<tr><td><b>Tuân thủ</b> (compliance, KYC/AML)</td><td>Lưu hồ sơ khách hàng, giao dịch dùng chung, không sửa được</td><td>Giảm chi phí kiểm tra lặp lại, dễ kiểm toán</td></tr>
<tr><td>${t('defi', 'DeFi (tài chính phi tập trung)')}</td><td>Cho vay, đi vay, sàn giao dịch phi tập trung chạy hoàn toàn bằng smart contract</td><td>Không cần trung gian, hoạt động 24/7, ai cũng tiếp cận được</td></tr>
<tr><td><b>CBDC</b></td><td>Tiền số do ngân hàng trung ương phát hành (thường trên sổ cái permissioned)</td><td>Thanh toán nhanh, rẻ, tăng tiếp cận tài chính</td></tr>
</tbody></table>
<div class="example"><div class="ex-h">Ví dụ 3.1 - Token hóa một tòa nhà</div>
<p>Một tòa văn phòng trị giá 20 triệu USD được token hóa thành 2.000.000 token. Mỗi token đại diện cho quyền gì và giá trị lý thuyết là bao nhiêu? Lợi ích so với cổ phần trong quỹ bất động sản tư nhân (AI-04)?</p>
<details><summary>Xem lời giải</summary>
<p>Mỗi token đại diện 1/2.000.000 quyền sở hữu (và dòng tiền cho thuê tương ứng), giá trị lý thuyết 20.000.000 / 2.000.000 = <b>10 USD</b>. Lợi ích: vốn tối thiểu rất nhỏ, chuyển nhượng nhanh 24/7, lịch sử sở hữu minh bạch. Nhưng giá trị kinh tế vẫn phụ thuộc tòa nhà; token không làm bất động sản bớt rủi ro, và thanh khoản thật chỉ có nếu có thị trường thứ cấp đủ người mua bán.</p></details></div>
<p class="warn"><b>Bẫy:</b> DLT không loại bỏ mọi trung gian và rủi ro. Token hóa vẫn cần khung pháp lý xác nhận token = quyền sở hữu; smart contract có thể có lỗi lập trình; sổ cái chỉ chính xác nếu dữ liệu đưa vào đúng ("rác vào, rác ra").</p>`,
    },
    {
      title: '4. Các loại tài sản số và so sánh với lớp tài sản khác',
      minutes: 16,
      html: `
<h4>a) Phân loại</h4>
<table class="plain"><thead><tr><th>Loại</th><th>Đặc điểm</th><th>Ví dụ</th></tr></thead><tbody>
<tr><td>${t('cryptocur', 'Cryptocurrency')}</td><td>Tiền số tư nhân phát hành, không có ngân hàng trung ương bảo đảm; giá theo cung cầu</td><td>Bitcoin (nguồn cung tối đa 21 triệu), ether</td></tr>
<tr><td>Altcoin, meme coin</td><td>Các đồng tiền mã hóa khác bitcoin; meme coin thuần túy dựa trên cộng đồng, đầu cơ</td><td>Hàng nghìn đồng, phần lớn thanh khoản thấp</td></tr>
<tr><td>${t('stable', 'Stablecoin')}</td><td>Neo giá theo một tài sản khác (thường là 1 USD), có tài sản bảo đảm hoặc thuật toán duy trì</td><td>Stablecoin USD</td></tr>
<tr><td>${t('cbdc', 'CBDC')}</td><td>Phiên bản số của tiền giấy, tiền xu, do ngân hàng trung ương phát hành; là nợ của ngân hàng trung ương</td><td>Nhân dân tệ số (thí điểm)</td></tr>
<tr><td>Utility token</td><td>Quyền sử dụng một dịch vụ hoặc mạng lưới (trả phí giao dịch, lưu trữ)</td><td>Token trả phí trên một nền tảng</td></tr>
<tr><td>Governance token</td><td>Quyền biểu quyết về thay đổi của giao thức</td><td>Token biểu quyết của nền tảng DeFi</td></tr>
<tr><td>${t('sectoken', 'Security token')}</td><td>Đại diện quyền với tài sản thật hoặc dòng tiền (cổ phần, trái phiếu token hóa); thường chịu luật chứng khoán</td><td>Trái phiếu phát hành trên blockchain</td></tr>
<tr><td>${t('nft', 'NFT (non-fungible token)')}</td><td>Token duy nhất, không thay thế lẫn nhau, chứng nhận sở hữu một tài sản số hoặc thật cụ thể</td><td>Tác phẩm nghệ thuật số, vật phẩm game</td></tr>
</tbody></table>
<p>Fungible (thay thế được) nghĩa là mọi đơn vị như nhau: một bitcoin bằng một bitcoin khác. NFT thì mỗi token là một bản duy nhất.</p>

<h4>b) Ba loại stablecoin</h4>
<table class="plain"><thead><tr><th>Loại</th><th>Cách giữ neo</th><th>Rủi ro chính</th></tr></thead><tbody>
<tr><td>Bảo đảm bằng tiền pháp định (fiat-backed)</td><td>Dự trữ tiền mặt, tín phiếu tương ứng tại tổ chức phát hành</td><td>Chất lượng và minh bạch của dự trữ, rủi ro tổ chức phát hành</td></tr>
<tr><td>Bảo đảm bằng tiền mã hóa (crypto-backed)</td><td><b>Bảo đảm vượt mức</b> (overcollateralized) bằng tiền mã hóa khác, tự thanh lý khi tài sản bảo đảm giảm giá</td><td>Giá tài sản bảo đảm sụp nhanh</td></tr>
<tr><td>Thuật toán (algorithmic)</td><td>Thuật toán tăng giảm nguồn cung, không có (hoặc ít) tài sản bảo đảm</td><td><b>Cao nhất</b>: có thể mất neo hoàn toàn (như TerraUSD năm 2022)</td></tr>
</tbody></table>
<div class="example"><div class="ex-h">Ví dụ 4.1 - Bảo đảm vượt mức</div>
<p>Để phát hành 1.000 stablecoin (1 USD mỗi đồng), nền tảng yêu cầu thế chấp ether trị giá 150% tức 1.500 USD. Nếu giá ether giảm 30%, tỷ lệ bảo đảm còn bao nhiêu?</p>
<details><summary>Xem lời giải</summary>
<p>Giá trị ether còn 1.500 × 0,7 = 1.050 USD; tỷ lệ bảo đảm = 1.050 / 1.000 = <b>105%</b>. Gần mức 100%, nên hệ thống sẽ thanh lý tài sản bảo đảm trước khi stablecoin bị thiếu bảo đảm. Đó là lý do phải bảo đảm vượt mức: tài sản thế chấp biến động rất mạnh.</p></details></div>

<h4>c) So sánh với các lớp tài sản khác</h4>
<table class="plain"><thead><tr><th></th><th>Tiền mã hóa (ví dụ bitcoin)</th><th>Cổ phiếu</th><th>Vàng</th><th>Tiền pháp định</th></tr></thead><tbody>
<tr><td>Dòng tiền</td><td><b>Không</b> (trừ phần thưởng staking ở PoS)</td><td>Cổ tức, lợi nhuận</td><td>Không</td><td>Lãi tiền gửi</td></tr>
<tr><td>Nguồn giá trị</td><td>Mức chấp nhận, hiệu ứng mạng lưới, khan hiếm theo lập trình</td><td>Lợi nhuận doanh nghiệp</td><td>Khan hiếm, lịch sử, nhu cầu công nghiệp</td><td>Uy tín nhà nước, luật pháp</td></tr>
<tr><td>Bên phát hành, bảo đảm</td><td>Không có bên trung tâm</td><td>Công ty</td><td>Không</td><td>Ngân hàng trung ương</td></tr>
<tr><td>Định giá DCF</td><td>Không dùng được</td><td>Dùng được</td><td>Không</td><td>Không cần</td></tr>
<tr><td>Biến động</td><td>Rất cao</td><td>Trung bình</td><td>Trung bình</td><td>Thấp (theo nội tệ)</td></tr>
<tr><td>Giao dịch</td><td>24/7, nhiều sàn phân mảnh toàn cầu</td><td>Giờ giao dịch của sàn</td><td>Gần 24/5</td><td>Liên tục</td></tr>
<tr><td>Quy định</td><td>Đang hình thành, khác nhau giữa các nước</td><td>Chặt</td><td>Rõ ràng</td><td>Chặt</td></tr>
</tbody></table>
<p class="warn"><b>Bẫy:</b> vì phần lớn tiền mã hóa không tạo dòng tiền, không thể định giá bằng DCF hay P/E. Giá phản ánh kỳ vọng về mức độ chấp nhận và cung cầu, nên rất nhạy với tâm lý, tin tức và thanh khoản.</p>`,
    },
    {
      title: '5. Hình thức và phương tiện đầu tư',
      minutes: 16,
      html: `
<h4>a) Đầu tư trực tiếp</h4>
<ul>
<li><b>Sàn tập trung</b> (centralized exchange, CEX): hoạt động như sàn môi giới, giữ tài sản hộ khách hàng. Tiện lợi, thanh khoản, nhưng có <b>rủi ro đối tác</b>: sàn phá sản hoặc bị hack thì khách hàng có thể mất tài sản (ví dụ FTX sụp đổ năm 2022).</li>
<li><b>Sàn phi tập trung</b> (decentralized exchange, DEX): giao dịch trực tiếp giữa các ví qua smart contract, không ai giữ tài sản hộ. Rủi ro: lỗi smart contract, thanh khoản thấp, ít bảo vệ nhà đầu tư.</li>
<li>${t('wallet', 'Ví (wallet)')} lưu khóa riêng:
  <ul><li><b>Ví nóng</b> (hot wallet): kết nối Internet, tiện cho giao dịch, dễ bị tấn công hơn.</li>
  <li><b>Ví lạnh</b> (cold wallet): thiết bị ngoại tuyến, an toàn hơn, kém tiện hơn.</li>
  <li><b>Lưu ký hộ</b> (custodial) hay <b>tự lưu ký</b> (self-custody): tự lưu ký thì không phụ thuộc bên thứ ba nhưng mất khóa riêng là mất vĩnh viễn.</li></ul></li>
<li>${t('staking', 'Staking')}: khóa coin trên mạng PoS để tham gia xác thực, nhận phần thưởng (tính bằng chính coin đó).</li>
</ul>

<h4>b) Đầu tư gián tiếp</h4>
<table class="plain"><thead><tr><th>Phương tiện</th><th>Đặc điểm</th><th>Lưu ý</th></tr></thead><tbody>
<tr><td><b>Futures</b> trên sàn được quản lý (ví dụ CME)</td><td>Tiếp xúc với giá mà không giữ coin; dùng được để bán khống, phòng hộ</td><td>Phải cuộn hợp đồng: roll return và chênh lệch với giá giao ngay (như AI-05)</td></tr>
<tr><td><b>ETF, ETP giao ngay</b> (spot ETF; ở Mỹ có từ năm 2024 cho bitcoin và ether)</td><td>Quỹ nắm coin thật qua tổ chức lưu ký; mua bán qua tài khoản chứng khoán thông thường</td><td>Phí quản lý; chỉ giao dịch trong giờ sàn chứng khoán trong khi coin giao dịch 24/7</td></tr>
<tr><td>ETF dựa trên futures</td><td>Nắm futures thay vì coin</td><td>Chịu roll return âm khi contango</td></tr>
<tr><td>${t('trust', 'Quỹ tín thác đóng (trust)')}</td><td>Nắm coin, chứng chỉ giao dịch trên thị trường OTC hoặc sàn</td><td>Giá có thể <b>chênh lệch lớn so với NAV</b> (premium hoặc discount) vì không có cơ chế tạo lập, mua lại liên tục như ETF</td></tr>
<tr><td>Cổ phiếu liên quan</td><td>Công ty đào coin, sàn giao dịch niêm yết, công ty nắm nhiều bitcoin trên bảng cân đối</td><td>Không phải tiếp xúc thuần: chịu rủi ro kinh doanh, đòn bẩy và thị trường cổ phiếu</td></tr>
<tr><td>Quỹ hedge fund, venture capital chuyên về tài sản số</td><td>Quản lý chủ động, đầu tư cả token và công ty khởi nghiệp blockchain</td><td>Phí, lockup, minh bạch thấp (như AI-06)</td></tr>
</tbody></table>
<div class="example"><div class="ex-h">Ví dụ 5.1 - Chiết khấu của trust</div>
<p>Một trust nắm bitcoin có NAV 30 USD/chứng chỉ nhưng chứng chỉ giao dịch ở 24 USD. Trust đang giao dịch ở mức premium hay discount bao nhiêu? Nếu sau đó trust được chuyển thành ETF và giá về sát NAV, nhà đầu tư mua ở 24 lãi bao nhiêu (giả sử giá bitcoin không đổi)?</p>
<details><summary>Xem lời giải</summary>
<p>Discount = 24 / 30 - 1 = <b>-20%</b> (chiết khấu 20% so với NAV). Nếu giá về NAV 30: lợi nhuận = 30 / 24 - 1 = <b>25%</b>, chỉ nhờ thu hẹp chiết khấu. Ngược lại, người mua ở mức premium có thể lỗ dù giá bitcoin không đổi. Chú ý mẫu số: chiết khấu tính trên NAV, lợi nhuận tính trên giá mua.</p></details></div>`,
    },
    {
      title: '6. Nguồn lợi nhuận và rủi ro',
      minutes: 14,
      html: `
<h4>a) Nguồn lợi nhuận</h4>
<ul>
<li><b>Tăng giá</b>: do mức chấp nhận, nhu cầu đầu cơ, dòng tiền vào các ETF, nguồn cung giới hạn. Ví dụ bitcoin có cơ chế "halving": khoảng 4 năm một lần, phần thưởng khối mới giảm một nửa (lần gần nhất năm 2024 xuống 3,125 BTC mỗi khối), làm chậm tốc độ phát hành mới.</li>
<li><b>Staking, cho vay</b>: phần thưởng staking trên mạng PoS, lãi cho vay coin trên nền tảng tập trung hoặc DeFi. Lãi trả bằng coin, nên lợi nhuận tính theo USD vẫn phụ thuộc giá coin.</li>
<li>Khác: airdrop (token phát miễn phí), phí cung cấp thanh khoản trên DEX.</li>
</ul>
<div class="example"><div class="ex-h">Ví dụ 6.1 - Staking khi giá giảm</div>
<p>Nhà đầu tư mua 100 token giá 10 USD và staking với phần thưởng 5%/năm trả bằng token. Cuối năm giá token còn 8 USD. Lợi nhuận tính theo USD?</p>
<details><summary>Xem lời giải</summary>
<p>Số token cuối năm = 100 × 1,05 = 105. Giá trị = 105 × 8 = 840 USD. Lợi nhuận = 840 / 1.000 - 1 = <b>-16%</b>. Cộng thẳng -20% + 5% = -15% là xấp xỉ; bỏ qua staking (-20%) là sai. Phần thưởng staking không bảo vệ được trước giá giảm.</p></details></div>

<h4>b) Rủi ro</h4>
<table class="plain"><thead><tr><th>Rủi ro</th><th>Ví dụ</th></tr></thead><tbody>
<tr><td>Biến động giá rất cao</td><td>Giảm hơn một nửa giá trị trong vài tháng là chuyện đã xảy ra nhiều lần</td></tr>
<tr><td>Quy định, pháp lý, thuế</td><td>Cấm giao dịch, thay đổi cách phân loại token là chứng khoán hay hàng hóa, thuế chưa rõ</td></tr>
<tr><td>Lưu ký, mất khóa riêng</td><td>Mất khóa riêng, gửi nhầm địa chỉ không đảo ngược được</td></tr>
<tr><td>Đối tác, sàn giao dịch</td><td>Sàn tập trung phá sản, gian lận, dùng tài sản khách hàng</td></tr>
<tr><td>Bảo mật, hack</td><td>Tấn công sàn, cầu nối giữa các blockchain (bridge), ví nóng</td></tr>
<tr><td>Smart contract, công nghệ</td><td>Lỗi lập trình trong giao thức DeFi; fork (chia tách chuỗi); tấn công 51%</td></tr>
<tr><td>Thao túng thị trường, gian lận</td><td>Pump and dump, giao dịch giả (wash trading), dự án lừa đảo</td></tr>
<tr><td>Stablecoin mất neo</td><td>Stablecoin thuật toán sụp đổ, dự trữ không đủ</td></tr>
<tr><td>Thanh khoản</td><td>Altcoin nhỏ có thể không bán được khi thị trường hoảng loạn</td></tr>
<tr><td>Môi trường (ESG)</td><td>Tiêu thụ năng lượng lớn của PoW</td></tr>
</tbody></table>`,
    },
    {
      title: '7. Đa dạng hóa: tỷ trọng nhỏ, rủi ro không nhỏ',
      minutes: 12,
      html: `
<ul>
<li>Trong giai đoạn đầu, tương quan của tiền mã hóa với cổ phiếu và trái phiếu <b>rất thấp</b>, nên được quảng bá là công cụ đa dạng hóa tốt.</li>
<li>Khi nhà đầu tư tổ chức tham gia nhiều hơn, tương quan với cổ phiếu (nhất là cổ phiếu công nghệ) đã <b>tăng lên</b>, và có xu hướng <b>tăng vọt trong giai đoạn căng thẳng</b>, đúng lúc nhà đầu tư cần đa dạng hóa nhất.</li>
<li>Luận điểm "vàng kỹ thuật số" (chống lạm phát, trú ẩn) chưa được chứng minh nhất quán: trong một số đợt lạm phát cao và lãi suất tăng, tiền mã hóa giảm mạnh cùng tài sản rủi ro.</li>
<li>Do biến động rất cao, một <b>tỷ trọng nhỏ</b> vẫn có thể đóng góp <b>phần lớn rủi ro</b> của danh mục.</li>
</ul>
<div class="example"><div class="ex-h">Ví dụ 7.1 - Thêm bitcoin vào danh mục 60/40</div>
<p>Giả định: cổ phiếu độ lệch chuẩn 16%, trái phiếu 6%, bitcoin 60%; tương quan cổ phiếu - trái phiếu 0,2; bitcoin - cổ phiếu 0,3; bitcoin - trái phiếu 0. Danh mục 60/40 thuần có độ lệch chuẩn bao nhiêu? Nếu dành 5% cho bitcoin (95% còn lại giữ tỷ lệ 60/40), độ lệch chuẩn và phần rủi ro do bitcoin đóng góp là bao nhiêu?</p>
<details><summary>Xem lời giải</summary>
<p>Dùng công thức độ lệch chuẩn danh mục nhiều tài sản (sẽ học kỹ ở Portfolio Management):</p>
<table class="plain"><thead><tr><th>Tỷ trọng bitcoin</th><th>Độ lệch chuẩn danh mục</th><th>Phần rủi ro do bitcoin</th></tr></thead><tbody>
<tr><td>0%</td><td>10,35%</td><td>0%</td></tr>
<tr><td>2%</td><td>10,54%</td><td>4,3%</td></tr>
<tr><td>5%</td><td>11,05%</td><td>14,1%</td></tr>
</tbody></table>
<p>Với 5% tỷ trọng, bitcoin chiếm khoảng <b>14%</b> rủi ro của danh mục, gần gấp ba tỷ trọng. Lợi ích đa dạng hóa chỉ đáng giá nếu lợi nhuận kỳ vọng đủ bù rủi ro tăng thêm; nhiều nhà đầu tư vì vậy giới hạn tỷ trọng tài sản số ở mức rất nhỏ và tái cân bằng định kỳ.</p></details></div>
<p class="tip">Với phần đóng góp rủi ro, chỉ cần nhớ trực giác: đóng góp ≈ ${frac('tỷ trọng × biến động × tương quan với danh mục', 'độ lệch chuẩn danh mục')}. Tài sản biến động gấp 4 - 6 lần cổ phiếu thì "nặng" hơn nhiều so với tỷ trọng của nó.</p>`,
    },
    {
      title: '8. Tóm tắt và bẫy thường gặp',
      minutes: 6,
      html: `
<table class="plain"><thead><tr><th>Chủ đề</th><th>Nhớ</th><th>Bẫy</th></tr></thead><tbody>
<tr><td>DLT, blockchain</td><td>Sổ cái chia sẻ, khối nối bằng hash, bất biến</td><td>DLT là công nghệ; tiền mã hóa là một ứng dụng</td></tr>
<tr><td>PoW và PoS</td><td>PoW: sức tính toán, tốn năng lượng; PoS: theo lượng stake, bị phạt nếu gian lận</td><td>Bitcoin PoW; Ethereum PoS từ 2022</td></tr>
<tr><td>Permissionless và permissioned</td><td>Công khai ai cũng tham gia; cấp phép chỉ thành viên được duyệt</td><td>Liên minh ngân hàng, CBDC thường permissioned</td></tr>
<tr><td>Ứng dụng</td><td>Token hóa, thanh toán sau giao dịch, smart contract, tuân thủ, DeFi</td><td>Không tự loại bỏ rủi ro pháp lý, lỗi lập trình</td></tr>
<tr><td>Stablecoin</td><td>Fiat-backed, crypto-backed (vượt mức), algorithmic</td><td>Algorithmic rủi ro mất neo cao nhất</td></tr>
<tr><td>CBDC</td><td>Nợ của ngân hàng trung ương</td><td>Không phải tiền mã hóa tư nhân</td></tr>
<tr><td>So sánh lớp tài sản</td><td>Không dòng tiền, giá theo chấp nhận và cung cầu</td><td>Không định giá bằng DCF</td></tr>
<tr><td>Trực tiếp</td><td>CEX (rủi ro đối tác), DEX, ví nóng, lạnh, tự lưu ký</td><td>Mất khóa riêng là mất tài sản</td></tr>
<tr><td>Gián tiếp</td><td>Futures, spot ETF, trust, cổ phiếu liên quan, quỹ</td><td>Trust có premium/discount; futures có roll return</td></tr>
<tr><td>Staking</td><td>Thưởng bằng coin</td><td>Lợi nhuận USD vẫn phụ thuộc giá coin</td></tr>
<tr><td>Đa dạng hóa</td><td>Tương quan tăng theo thời gian, tăng vọt khi căng thẳng</td><td>Tỷ trọng nhỏ, phần rủi ro lớn</td></tr>
</tbody></table>
<p>Tiếp theo: tab <b>Luyện tập</b> 10 câu. Đây là module cuối của Alternative Investments; hãy ôn lại AI-01 đến AI-07 bằng bảng tóm tắt của từng module.</p>`,
    },
  ];

  const glossary = {
    digasset: ['Digital assets', 'Tài sản số', 'Tài sản được tạo ra, lưu giữ và chuyển giao bằng điện tử, thường ghi trên sổ cái phân tán.'],
    dlt: ['Distributed ledger technology (DLT)', 'Công nghệ sổ cái phân tán', 'Cơ sở dữ liệu chia sẻ giữa nhiều bên, mỗi bên giữ bản sao giống hệt, thay đổi khi mạng đồng thuận.'],
    blockchain: ['Blockchain', 'Chuỗi khối', 'Dạng DLT gom giao dịch thành khối, mỗi khối chứa hash của khối trước tạo thành chuỗi khó sửa.'],
    hash: ['Hash', 'Mã băm', 'Chuỗi ký tự cố định sinh ra từ dữ liệu; dữ liệu đổi một chút thì hash đổi hoàn toàn.'],
    crypto: ['Public-key cryptography', 'Mật mã khóa công khai', 'Cặp khóa công khai (địa chỉ) và khóa riêng (chữ ký); ai giữ khóa riêng thì kiểm soát tài sản.'],
    pow: ['Proof of work (PoW)', 'Bằng chứng công việc', 'Cơ chế đồng thuận: thợ đào cạnh tranh giải bài toán bằng sức mạnh tính toán để thêm khối.'],
    pos: ['Proof of stake (PoS)', 'Bằng chứng cổ phần', 'Cơ chế đồng thuận: người xác thực được chọn theo lượng coin đã khóa, gian lận bị phạt.'],
    attack51: ['51% attack', 'Tấn công 51%', 'Một nhóm kiểm soát hơn nửa sức mạnh xác thực của mạng để ghi đè giao dịch.'],
    permless: ['Permissionless network', 'Mạng không cấp phép', 'Mạng công khai, ai cũng tham gia, xác thực và xem giao dịch.'],
    permed: ['Permissioned network', 'Mạng cấp phép', 'Mạng chỉ cho thành viên được duyệt tham gia, có thể giới hạn quyền xem và ghi.'],
    tokenize: ['Tokenization', 'Token hóa', 'Biểu diễn quyền sở hữu tài sản thật bằng token trên blockchain, cho phép sở hữu từng phần.'],
    smartc: ['Smart contract', 'Hợp đồng thông minh', 'Chương trình trên blockchain tự thực hiện khi điều kiện định sẵn được thỏa.'],
    defi: ['Decentralized finance (DeFi)', 'Tài chính phi tập trung', 'Dịch vụ tài chính (vay, cho vay, giao dịch) chạy bằng smart contract, không cần trung gian.'],
    cryptocur: ['Cryptocurrency', 'Tiền mã hóa', 'Tiền số do tư nhân phát hành, không có ngân hàng trung ương bảo đảm.'],
    stable: ['Stablecoin', 'Đồng tiền ổn định', 'Tiền mã hóa neo giá theo tài sản khác (thường là USD) nhờ tài sản bảo đảm hoặc thuật toán.'],
    cbdc: ['Central bank digital currency (CBDC)', 'Tiền số ngân hàng trung ương', 'Phiên bản số của tiền giấy, tiền xu do ngân hàng trung ương phát hành.'],
    sectoken: ['Security token', 'Token chứng khoán', 'Token đại diện quyền với tài sản thật hoặc dòng tiền; thường chịu luật chứng khoán.'],
    nft: ['Non-fungible token (NFT)', 'Token không thể thay thế', 'Token duy nhất chứng nhận sở hữu một tài sản số hoặc thật cụ thể.'],
    wallet: ['Digital wallet', 'Ví số', 'Phần mềm hoặc thiết bị lưu khóa riêng để quản lý và giao dịch tài sản số.'],
    staking: ['Staking', 'Staking (khóa coin)', 'Khóa coin trên mạng PoS để tham gia xác thực và nhận phần thưởng bằng coin.'],
    trust: ['Crypto trust', 'Quỹ tín thác tài sản số', 'Quỹ đóng nắm tiền mã hóa; chứng chỉ có thể giao dịch chênh lệch lớn so với NAV.'],
  };

  const practice = [
    { q: 'Một nhóm ngân hàng xây dựng sổ cái chung để thanh toán giao dịch liên ngân hàng; chỉ các ngân hàng được duyệt mới được tham gia xác thực và xem dữ liệu. Đây là:', choices: ['Mạng permissioned', 'Mạng permissionless', 'Mạng proof of work công khai'], answer: 0, explain: 'Chỉ thành viên được duyệt mới tham gia là đặc trưng của mạng permissioned. Mạng permissionless cho bất kỳ ai tham gia; PoW công khai như bitcoin cũng là permissionless.' },
    { q: 'Phát biểu nào đúng về proof of stake (PoS)?', choices: ['Thợ đào cạnh tranh giải bài toán mật mã bằng sức mạnh tính toán', 'PoS tiêu tốn năng lượng nhiều hơn proof of work', 'Người xác thực được chọn dựa trên lượng coin đã khóa và có thể bị phạt nếu gian lận'], answer: 2, explain: 'PoS chọn người xác thực theo lượng stake, gian lận bị phạt mất coin (slashing), tốn ít năng lượng hơn nhiều. Phương án \'thợ đào cạnh tranh giải bài toán mật mã\' mô tả proof of work; phương án \'PoS tiêu tốn năng lượng nhiều hơn\' ngược với thực tế.' },
    { q: 'Một trust bitcoin có NAV 50 USD/chứng chỉ, giá thị trường của chứng chỉ là 42 USD. Trust đang giao dịch ở mức:', choices: ['Premium 19,05%', 'Discount 16,00%', 'Discount 8,00%'], answer: 1, explain: 'Discount = 42 / 50 - 1 = -16,00% (tính trên NAV). 19,05% là 50 / 42 - 1, tức lợi nhuận nếu giá về NAV, và cũng sai chiều; 8,00 là chênh lệch tính bằng USD, không phải phần trăm.' },
    { q: 'Loại stablecoin nào có rủi ro mất neo cao nhất?', choices: ['Stablecoin bảo đảm bằng tiền mặt và tín phiếu', 'Stablecoin thuật toán, không có tài sản bảo đảm', 'Stablecoin bảo đảm vượt mức bằng tiền mã hóa'], answer: 1, explain: 'Stablecoin thuật toán chỉ dựa vào cơ chế tăng giảm nguồn cung, không có tài sản bảo đảm để đổi lại, nên có thể mất neo hoàn toàn khi niềm tin sụp đổ. Hai loại còn lại có tài sản bảo đảm (crypto-backed còn bảo đảm vượt mức).' },
    { q: 'Nhà đầu tư mua 100 token giá 10 USD và staking với phần thưởng 5%/năm trả bằng token. Cuối năm giá token là 8 USD. Lợi nhuận tính theo USD là:', choices: ['-16%', '-15%', '-20%'], answer: 0, explain: '100 × 1,05 = 105 token × 8 = 840 USD; lợi nhuận = 840 / 1.000 - 1 = -16%. -15% là cộng thẳng -20% + 5% (bỏ qua hiệu ứng nhân); -20% là quên phần thưởng staking.' },
    { q: 'Một nhà đầu tư muốn tiếp xúc với giá bitcoin giao ngay qua tài khoản chứng khoán thông thường, không muốn tự quản lý khóa riêng và không muốn chịu roll return. Phương tiện phù hợp nhất là:', choices: ['Ví lạnh tự lưu ký', 'Cổ phiếu công ty đào bitcoin', 'Spot bitcoin ETF'], answer: 2, explain: 'Spot ETF nắm bitcoin thật qua tổ chức lưu ký và giao dịch như cổ phiếu. Ví lạnh đòi hỏi tự giữ khóa riêng; cổ phiếu công ty đào chịu rủi ro kinh doanh và thị trường cổ phiếu, không phải tiếp xúc thuần.' },
    { q: 'Điểm khác biệt quan trọng giữa phần lớn tiền mã hóa và cổ phiếu là:', choices: ['Tiền mã hóa không tạo dòng tiền nên không định giá được bằng DCF', 'Tiền mã hóa được ngân hàng trung ương bảo đảm giá trị', 'Tiền mã hóa chỉ giao dịch trong giờ hành chính trên một sàn tập trung'], answer: 0, explain: 'Không có cổ tức hay lợi nhuận, giá tiền mã hóa phụ thuộc mức chấp nhận và cung cầu nên không dùng được DCF. Tiền mã hóa không có ngân hàng trung ương bảo đảm (đó là CBDC) và giao dịch 24/7 trên nhiều sàn.' },
    { q: 'Một nhà đầu tư để toàn bộ tiền mã hóa trên một sàn tập trung, và sàn này phá sản do dùng tài sản khách hàng sai mục đích. Rủi ro đã xảy ra chủ yếu là:', choices: ['Rủi ro thị trường do giá biến động', 'Rủi ro đối tác và lưu ký', 'Rủi ro fork của blockchain'], answer: 1, explain: 'Tài sản được sàn giữ hộ, nên khi sàn phá sản, nhà đầu tư chịu rủi ro đối tác và lưu ký, bất kể giá coin. Rủi ro thị trường là biến động giá; fork là chia tách chuỗi khối.' },
    { q: 'Phát biểu nào về lợi ích đa dạng hóa của tiền mã hóa là hợp lý nhất?', choices: ['Tương quan với cổ phiếu luôn âm nên luôn làm giảm rủi ro danh mục', 'Tỷ trọng nhỏ thì phần rủi ro đóng góp cũng nhỏ đúng bằng tỷ trọng', 'Do biến động rất cao, tỷ trọng nhỏ vẫn có thể đóng góp phần rủi ro lớn hơn nhiều so với tỷ trọng'], answer: 2, explain: 'Ví dụ trong bài: 5% bitcoin đóng góp khoảng 14% rủi ro danh mục 60/40. Tương quan với cổ phiếu không âm và còn tăng trong giai đoạn căng thẳng; đóng góp rủi ro phụ thuộc cả biến động và tương quan, không chỉ tỷ trọng.' },
    { q: 'Lợi ích chính của việc token hóa một tài sản như bất động sản thương mại là:', choices: ['Cho phép sở hữu từng phần và chuyển nhượng nhanh một tài sản vốn kém thanh khoản', 'Loại bỏ hoàn toàn nhu cầu về khung pháp lý cho quyền sở hữu', 'Đảm bảo giá tài sản không còn biến động'], answer: 0, explain: 'Token hóa chia tài sản thành nhiều đơn vị nhỏ, chuyển nhượng nhanh trên blockchain. Nó vẫn cần khung pháp lý để token được công nhận là quyền sở hữu, và giá trị vẫn biến động theo tài sản gốc.' },
  ];

  window.LESSONS['AI-07'] = {
    moduleId: 'AI-07',
    calculator: 'BA II Plus',
    warmup: [
      'Ôn AI-06: survivorship bias ảnh hưởng thế nào đến lợi nhuận trung bình trong cơ sở dữ liệu quỹ?',
      'Ôn AI-05: vì sao quỹ ETF dựa trên futures có thể thua giá giao ngay? Ý này sẽ dùng lại cho futures bitcoin.',
      'Theo bạn, điều gì tạo nên giá trị cho một đồng tiền mã hóa không có dòng tiền?',
    ],
    sections,
    glossary,
    practice,
    widgets: {},
    slides: [],
    wrapup: [
      'Giải thích blockchain bằng 3 câu: khối, hash, đồng thuận. PoW và PoS khác nhau thế nào?',
      'Kể 4 ứng dụng tài chính của DLT và 3 loại stablecoin.',
      'So sánh đầu tư trực tiếp (sàn, ví) và gián tiếp (ETF, trust, futures); vì sao tỷ trọng nhỏ tiền mã hóa vẫn có thể chiếm phần rủi ro lớn?',
    ],
  };
}());
