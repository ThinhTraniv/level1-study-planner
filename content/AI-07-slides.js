// Bộ slide tự thiết kế cho AI-07 Introduction to Digital Assets.
(function () {
  const L = window.LESSONS && window.LESSONS['AI-07'];
  if (!L) return;
  const { slide, addDeck } = window.CFAH;
  const K = 'AI-07 · Digital Assets';
  const S = (title, body, opt = {}) => slide(title, body, Object.assign({ kicker: K }, opt));
  const fmt = (x, d = 2) => x.toFixed(d).replace('.', ',');

  const bars = (rows, lo, hi) => `<div class="sd-bars">${rows.map(([lab, v, txt]) => `<div class="sd-bar"><span class="sd-bar-l">${lab}</span><span class="sd-bar-t"><i style="width:${Math.min(100, Math.max(2, ((v - lo) / (hi - lo)) * 100))}%"></i></span><b>${txt}</b></div>`).join('')}</div>`;

  // Sổ cái tập trung và phân tán.
  function networks() {
    const ring = (cx, cy, r, n) => Array.from({ length: n }, (_, i) => [cx + r * Math.cos((2 * Math.PI * i) / n - Math.PI / 2), cy + r * Math.sin((2 * Math.PI * i) / n - Math.PI / 2)]);
    const A = ring(150, 135, 85, 6), B = ring(450, 135, 85, 6);
    let s = `<svg viewBox="0 0 600 270" class="sv big" role="img" aria-label="Sổ cái tập trung so với sổ cái phân tán">`;
    A.forEach(p => { s += `<line x1="150" y1="135" x2="${p[0].toFixed(1)}" y2="${p[1].toFixed(1)}" class="sv-axis"/>`; });
    B.forEach((p, i) => B.forEach((q, j) => { if (j > i) s += `<line x1="${p[0].toFixed(1)}" y1="${p[1].toFixed(1)}" x2="${q[0].toFixed(1)}" y2="${q[1].toFixed(1)}" class="sv-grid"/>`; }));
    A.forEach(p => { s += `<circle cx="${p[0].toFixed(1)}" cy="${p[1].toFixed(1)}" r="13" class="sv-node"/>`; });
    B.forEach(p => { s += `<circle cx="${p[0].toFixed(1)}" cy="${p[1].toFixed(1)}" r="13" class="sv-node up"/>`; });
    s += `<circle cx="150" cy="135" r="28" class="sv-node down"/><text x="150" y="141" class="sv-txt">Sổ gốc</text>`;
    s += `<text x="150" y="258" class="sv-txt">Tập trung: tin vào trung gian</text><text x="450" y="258" class="sv-txt sv-t-up">Phân tán: mỗi node một bản sao</text>`;
    return `${s}</svg>`;
  }

  // Chuỗi khối nối bằng hash.
  const chain = (() => {
    let s = `<svg viewBox="0 0 600 200" class="sv big" role="img" aria-label="Các khối nối với nhau bằng hash của khối trước">`;
    ['Khối 1', 'Khối 2', 'Khối 3'].forEach((b, i) => {
      const x = 20 + i * 200;
      s += `<rect x="${x}" y="30" width="160" height="130" rx="12" class="sv-panel"/><text x="${x + 80}" y="58" class="sv-txt">${b}</text>`;
      s += `<text x="${x + 80}" y="88" class="sv-muted">hash trước: ${i === 0 ? '0000' : ['', 'a3f9', '7c21'][i]}</text><text x="${x + 80}" y="112" class="sv-muted">giao dịch...</text><text x="${x + 80}" y="140" class="sv-txt sv-t-up">hash: ${['a3f9', '7c21', 'e05b'][i]}</text>`;
      if (i < 2) s += `<line x1="${x + 162}" y1="95" x2="${x + 198}" y2="95" class="sv-up"/>`;
    });
    s += `<text x="300" y="190" class="sv-muted">Sửa khối 1 → hash đổi → khối 2, 3 không còn khớp</text>`;
    return `${s}</svg>`;
  })();

  const slides = [
    S('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Alternative Investments · AI-07</div>
      <h2>Introduction to<br>Digital Assets</h2>
      <p>Công nghệ sổ cái và một lớp tài sản mới</p>
      <div class="sd-chips"><span>LOS 1 · Ứng dụng DLT</span><span>LOS 2 · Đặc điểm, so sánh</span><span>LOS 3 · Hình thức, phương tiện</span><span>LOS 4 · Rủi ro, lợi nhuận, đa dạng hóa</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Hai chuyện khác nhau', `<div class="sd-cols2">
      <div class="sd-card"><b>Công nghệ: DLT</b><p>Sổ cái chia sẻ, bất biến, chạy 24/7.</p><small>Token hóa, thanh toán chứng khoán, smart contract, CBDC</small></div>
      <div class="sd-card acc"><b>Tài sản: tiền mã hóa, token</b><p>Không dòng tiền, biến động rất cao, quy định đang hình thành.</p><small>Bitcoin, ether, stablecoin, NFT</small></div></div>
      <p class="sd-note">DLT có thể hữu ích ngay cả khi bạn không bao giờ mua bitcoin.</p>`),

    S('Sổ cái tập trung và phân tán', `<div class="sd-cols2 wide-left"><div>${networks()}</div>
      <div><div class="sd-rule">Tập trung: ngân hàng, lưu ký giữ sổ gốc</div><div class="sd-rule up">Phân tán: mỗi node giữ bản sao giống hệt</div><div class="sd-rule up">Thay đổi chỉ khi mạng đồng thuận</div></div></div>`),

    S('Blockchain: khối nối khối', `<div class="sd-cols2 wide-left"><div>${chain}</div>
      <div><div class="sd-rule up">Bất biến, chỉ ghi thêm</div><div class="sd-rule">Khóa công khai = địa chỉ</div><div class="sd-rule">Khóa riêng = chữ ký</div><div class="sd-rule down">Mất khóa riêng = mất tài sản</div></div></div>`),

    S('Proof of work và proof of stake', `<div class="sd-tbl grid"><div class="head"><span></span><span>Proof of work</span><span>Proof of stake</span></div>
      <div><span>Ai thêm khối</span><span>Thợ đào, sức tính toán</span><span>Validator, theo lượng stake</span></div>
      <div><span>Chống gian lận</span><span>Chi phí điện, máy</span><span>Bị phạt mất stake</span></div>
      <div><span>Năng lượng</span><span>Rất cao</span><span>Thấp</span></div>
      <div><span>Ví dụ</span><span>Bitcoin</span><span>Ethereum (từ 2022)</span></div></div>
      <p class="sd-note">Kiểm soát &gt; 50% sức mạnh xác thực → <b>tấn công 51%</b>.</p>`),

    S('Permissionless và permissioned', `<div class="sd-cols2">
      <div class="sd-card"><b>Permissionless</b><p>Ai cũng tham gia, xác thực, xem.</p><small>Bitcoin, Ethereum</small></div>
      <div class="sd-card acc"><b>Permissioned</b><p>Chỉ thành viên được duyệt; giới hạn quyền xem, ghi.</p><small>Liên minh ngân hàng, CBDC</small></div></div>
      <div class="sd-cols2"><div><div class="sd-rule up">Chính xác, minh bạch, bất biến</div><div class="sd-rule up">Chuyển sở hữu nhanh, P2P</div></div>
      <div><div class="sd-rule down">Quyền riêng tư, dữ liệu</div><div class="sd-rule down">Năng lượng, khả năng mở rộng</div></div></div>`),

    S('Ứng dụng tài chính của DLT', `<div class="sd-grid4">
      <div><b>Token hóa</b><p>Tòa nhà 20 triệu USD = 2 triệu token × 10 USD: sở hữu từng phần</p></div>
      <div><b>Thanh toán sau giao dịch</b><p>Sổ cái chung: nhanh hơn, ít đối chiếu, giảm rủi ro đối tác</p></div>
      <div><b>Smart contract</b><p>Tự trả coupon, tự giải ngân khi đủ điều kiện</p></div>
      <div><b>Tuân thủ, DeFi</b><p>Hồ sơ KYC dùng chung; vay, cho vay, sàn phi tập trung</p></div></div>
      <p class="sd-note">Vẫn cần pháp lý công nhận token; smart contract có thể có lỗi.</p>`),

    S('Bản đồ tài sản số', `<div class="sd-tbl grid"><div class="head"><span>Loại</span><span>Bản chất</span></div>
      <div><span>Cryptocurrency</span><span>Tiền số tư nhân, không ai bảo đảm</span></div>
      <div><span>Stablecoin</span><span>Neo theo USD hoặc tài sản khác</span></div>
      <div><span>CBDC</span><span>Nợ của ngân hàng trung ương</span></div>
      <div><span>Utility / governance token</span><span>Quyền dùng dịch vụ / quyền biểu quyết</span></div>
      <div><span>Security token</span><span>Quyền với tài sản thật, dòng tiền</span></div>
      <div><span>NFT</span><span>Duy nhất, không thay thế lẫn nhau</span></div></div>`),

    S('Ba loại stablecoin', `<div class="sd-cols3">
      <div class="sd-card"><b>Fiat-backed</b><p>Dự trữ tiền mặt, tín phiếu</p><small>Rủi ro: chất lượng dự trữ</small></div>
      <div class="sd-card"><b>Crypto-backed</b><p>Bảo đảm <b>vượt mức</b> bằng coin khác</p><small>1.500 USD ether cho 1.000 stablecoin; ether -30% → còn <b>${fmt(1500 * 0.7 / 1000 * 100, 0)}%</b></small></div>
      <div class="sd-card acc"><b>Algorithmic</b><p>Thuật toán điều chỉnh cung</p><small>Rủi ro mất neo <b>cao nhất</b> (TerraUSD 2022)</small></div></div>`),

    S('So với các lớp tài sản khác', `<div class="sd-tbl grid"><div class="head"><span></span><span>Bitcoin</span><span>Cổ phiếu</span><span>Vàng</span></div>
      <div><span>Dòng tiền</span><span>Không</span><span>Có</span><span>Không</span></div>
      <div><span>Nguồn giá trị</span><span>Chấp nhận, mạng lưới, khan hiếm</span><span>Lợi nhuận</span><span>Khan hiếm, lịch sử</span></div>
      <div><span>Định giá DCF</span><span>Không</span><span>Có</span><span>Không</span></div>
      <div><span>Biến động</span><span>Rất cao</span><span>Trung bình</span><span>Trung bình</span></div>
      <div><span>Giao dịch</span><span>24/7, sàn phân mảnh</span><span>Giờ sàn</span><span>Gần 24/5</span></div></div>`),

    S('Đầu tư trực tiếp: sàn và ví', `<div class="sd-cols2">
      <div><div class="sd-rule down">Sàn tập trung: tiện, nhưng rủi ro đối tác (FTX 2022)</div><div class="sd-rule">Sàn phi tập trung: ví với ví, rủi ro smart contract</div><div class="sd-rule up">Staking: khóa coin trên mạng PoS, thưởng bằng coin</div></div>
      <div><div class="sd-tbl"><div><span>Ví nóng</span><span>tiện, dễ bị tấn công</span></div><div><span>Ví lạnh</span><span>ngoại tuyến, an toàn</span></div><div><span>Lưu ký hộ</span><span>rủi ro bên giữ</span></div><div><span>Tự lưu ký</span><span>mất khóa = mất hết</span></div></div></div></div>`),

    S('Đầu tư gián tiếp', `<div class="sd-tbl grid"><div class="head"><span>Phương tiện</span><span>Ưu điểm</span><span>Lưu ý</span></div>
      <div><span>Futures (CME)</span><span>Không giữ coin, bán khống được</span><span>Roll return</span></div>
      <div><span>Spot ETF (Mỹ, 2024)</span><span>Coin thật, tài khoản chứng khoán</span><span>Phí, giờ sàn</span></div>
      <div><span>Trust</span><span>Nắm coin thật</span><span>Premium / discount NAV</span></div>
      <div><span>Cổ phiếu liên quan</span><span>Thanh khoản</span><span>Không thuần, rủi ro kinh doanh</span></div>
      <div><span>Hedge fund, VC</span><span>Chủ động</span><span>Phí, lockup</span></div></div>`),

    S('Trust: chiết khấu so với NAV', `<div class="sd-cols2 wide-left"><div><p class="sd-cap">NAV 30 USD, giá chứng chỉ 24 USD:</p>${bars([['NAV', 30, '30'], ['Giá thị trường', 24, '24']], 0, 30)}</div>
      <div><div class="sd-rule down">Discount = 24/30 - 1 = <b>${fmt((24 / 30 - 1) * 100, 0)}%</b></div><div class="sd-rule up">Về NAV: 30/24 - 1 = <b>+${fmt((30 / 24 - 1) * 100, 0)}%</b></div><p class="sd-note">Không có cơ chế tạo lập, mua lại liên tục như ETF → chênh lệch kéo dài.</p></div></div>`),

    S('Lợi nhuận và rủi ro', `<div class="sd-cols2">
      <div><p class="sd-cap"><b>Nguồn lợi nhuận</b></p><div class="sd-rule up">Tăng giá: chấp nhận, cung giới hạn, halving</div><div class="sd-rule up">Staking, cho vay: trả bằng coin</div>
      <p class="sd-note">100 token × 10 USD, staking 5%, giá về 8: 105 × 8 = 840 → <b>-16%</b></p></div>
      <div><div class="sd-check"><span>Biến động</span><span>Quy định, thuế</span><span>Lưu ký, khóa riêng</span><span>Sàn, đối tác</span><span>Hack, smart contract</span><span>Thao túng, mất neo</span></div></div></div>`),

    S('Tỷ trọng nhỏ, rủi ro không nhỏ', `<div class="sd-cols2 wide-left"><div><p class="sd-cap">Danh mục 60/40 thêm bitcoin (σ 60%, ρ với cổ phiếu 0,3):</p>${bars([['σ danh mục, 0% BTC', 10.35, '10,35%'], ['σ danh mục, 5% BTC', 11.05, '11,05%'], ['Tỷ trọng BTC', 5, '5%'], ['Phần rủi ro do BTC', 14.1, '14,1%']], 0, 15)}</div>
      <div><div class="sd-rule down">Tương quan tăng dần theo thời gian</div><div class="sd-rule down">Tăng vọt khi căng thẳng</div><div class="sd-rule">"Vàng kỹ thuật số": chưa nhất quán</div></div></div>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>DLT: sổ cái chia sẻ, bất biến</span><span>PoW tốn năng lượng; PoS theo stake</span>
      <span>Permissioned: thành viên được duyệt</span><span>Token hóa: sở hữu từng phần</span>
      <span>Algorithmic stablecoin rủi ro nhất</span><span>Không dòng tiền → không DCF</span>
      <span>Trust: premium/discount; futures: roll</span><span>Tỷ trọng nhỏ, phần rủi ro lớn</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 10 câu, mục tiêu ≥ 7 câu đúng.</p>`),
  ];

  addDeck('AI-07', `Slide Digital Assets - bản thiết kế riêng (${slides.length} slide)`, slides);
}());
