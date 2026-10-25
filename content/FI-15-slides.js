// Bộ slide tự thiết kế cho FI-15 Credit Analysis for Government Issuers.
(function () {
  const L = window.LESSONS && window.LESSONS['FI-15'];
  if (!L) return;
  const { slide, addDeck } = window.CFAH;
  const K = 'FI-15 · Government Issuers';
  const S = (title, body, opt = {}) => slide(title, body, Object.assign({ kicker: K }, opt));

  const slides = [
    S('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Fixed Income · FI-15</div>
      <h2>Credit Analysis for<br>Government Issuers</h2>
      <p>Khi người vay có quyền đánh thuế</p>
      <div class="sd-chips"><span>Sovereign</span><span>Non-sovereign</span><span>GO và revenue bond</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Chính phủ khác doanh nghiệp ở đâu', `<div class="sd-cols3">
      <div class="sd-card"><div class="sd-n">1</div><b>Nguồn trả nợ</b><p>Quyền đánh thuế, không phải lợi nhuận</p></div>
      <div class="sd-card"><div class="sd-n">2</div><b>Nợ nội tệ</b><p>Có thể in tiền để trả</p><small>Đổi lại là lạm phát</small></div>
      <div class="sd-card acc"><div class="sd-n">3</div><b>Khó cưỡng chế</b><p>Không có tòa phá sản quốc gia</p><small>Thiện chí trả nợ quan trọng</small></div></div>`),

    S('Năm yếu tố định tính', `<div class="sd-check">
      <span><b>Thể chế, chính sách</b>: ổn định, pháp quyền, minh bạch</span><span><b>Linh hoạt tài khóa</b>: tăng thu, cắt chi được không</span>
      <span><b>Hiệu quả tiền tệ</b>: NHTW độc lập, đáng tin</span><span><b>Linh hoạt kinh tế</b>: đa dạng, thu nhập cao</span>
      <span><b>Vị thế đối ngoại</b>: đồng tiền dự trữ</span><span>Lịch sử trả nợ → thiện chí</span></div>`),

    S('Ba nhóm định lượng', `<div class="sd-cols3">
      <div class="sd-card"><b>Sức mạnh tài khóa</b><p>Nợ / GDP</p><p>Lãi / thu ngân sách</p><small>Thấp là tốt</small></div>
      <div class="sd-card"><b>Tăng trưởng, ổn định</b><p>Quy mô GDP, GDP / người</p><p>Tăng trưởng thực, biến động</p><small>Lớn, ổn định là tốt</small></div>
      <div class="sd-card"><b>Ổn định đối ngoại</b><p>Dự trữ / nợ nước ngoài ngắn hạn</p><p>Nợ nước ngoài / GDP</p><small>Dự trữ cao là tốt</small></div></div>`),

    S('Ví dụ: hai quốc gia', `<div class="sd-tbl grid"><div class="head"><span>Chỉ tiêu (tỷ USD)</span><span>Quốc gia A</span><span>Quốc gia B</span></div>
      <div><span>Nợ / GDP</span><span>480 / 800 = <b>60%</b></span><span>1.100 / 1.000 = <b>110%</b></span></div>
      <div><span>Lãi / thu ngân sách</span><span>16 / 200 = <b>8%</b></span><span>66 / 220 = <b>30%</b></span></div>
      <div><span>Dự trữ / nợ NN ngắn hạn</span><span>90 / 60 = <b>1,5 lần</b></span><span>30 / 75 = <b>0,4 lần</b></span></div></div>
      <p class="sd-note">Số liệu nghiêng về A. Nhưng nếu B có đồng tiền dự trữ và nợ chủ yếu bằng nội tệ, xếp hạng vẫn có thể cao.</p>`),

    S('Nợ nội tệ và nợ ngoại tệ', `<div class="sd-cols2">
      <div class="sd-rule up">Nội tệ: tăng thuế hoặc <b>in tiền</b></div>
      <div class="sd-rule down">Ngoại tệ: cần <b>dự trữ, xuất khẩu</b></div></div>
      <div class="sd-big">Foreign currency rating ≤ local currency rating</div>
      <p class="sd-note">Phần lớn vụ vỡ nợ sovereign xảy ra với nợ bằng ngoại tệ.</p>`),

    S('Non-sovereign: ai phát hành', `<div class="sd-cols3">
      <div class="sd-card"><b>Agency, quasi-government</b><p>Có hỗ trợ ngầm hoặc rõ của chính phủ</p></div>
      <div class="sd-card"><b>Supranational</b><p>World Bank, ADB: nhiều quốc gia sở hữu</p></div>
      <div class="sd-card acc"><b>Chính quyền địa phương</b><p>Không có NHTW, thường phải cân bằng ngân sách</p></div></div>`),

    S('GO bond và revenue bond', `<div class="sd-tbl grid"><div class="head"><span></span><span>GO bond</span><span>Revenue bond</span></div>
      <div><span>Trả bằng</span><span>Thuế chung</span><span>Doanh thu dự án</span></div>
      <div><span>Phân tích như</span><span>Sovereign (không in tiền)</span><span>Doanh nghiệp</span></div>
      <div><span>Chỉ tiêu</span><span>Nợ / người, nợ / thu nhập</span><span>DSCR</span></div>
      <div><span>Rủi ro</span><span>Thấp hơn</span><span>Cao hơn</span></div></div>
      <p class="sd-note">Đường thu phí: doanh thu ròng 48, trả nợ 32 → DSCR = <b>1,5 lần</b>.</p>`),

    S('Tổng kết: 6 điều mang vào phòng thi', `<div class="sd-check">
      <span>Sovereign trả nợ bằng thuế</span><span>Thiện chí trả nợ quan trọng</span>
      <span>5 định tính, 3 nhóm định lượng</span><span>Đồng tiền dự trữ → vay nội tệ nhiều hơn</span>
      <span>Ngoại tệ ≤ nội tệ về xếp hạng</span><span>Revenue bond: DSCR, rủi ro cao hơn GO</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 6 câu, rồi FI-16.</p>`),
  ];

  addDeck('FI-15', 'Slide Government Issuers - bản thiết kế riêng (9 slide)', slides);
}());
