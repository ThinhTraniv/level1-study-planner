// Bộ slide tự thiết kế cho QM-03 Benchmarking Returns.
// Gắn vào LESSONS['QM-03'].slides.
(function () {
  const { slide, addDeck, frac, tl } = window.CFAH;
  const K = { kicker: 'QM-03 · Benchmarking' };
  const S = (title, body) => slide(title, body, K);
  const fmt = (x, d = 2) => x.toFixed(d).replace('.', ',');

  // Dữ liệu rổ 3 cổ phiếu dùng chung với bài giảng.
  const ST = [{ n: 'X', p0: 20, p1: 22, sh: 100, fl: 60, eps: 150 }, { n: 'Y', p0: 50, p1: 45, sh: 20, fl: 20, eps: 120 }, { n: 'Z', p0: 100, p1: 110, sh: 5, fl: 4, eps: 30 }];
  const sum = a => a.reduce((x, y) => x + y, 0);
  const ret = ST.map(s => s.p1 / s.p0 - 1);
  const wPW = ST.map(s => s.p0 / sum(ST.map(z => z.p0)));
  const wMC = ST.map(s => (s.p0 * s.sh) / sum(ST.map(z => z.p0 * z.sh)));
  const wFL = ST.map(s => (s.p0 * s.fl) / sum(ST.map(z => z.p0 * z.fl)));
  const wFU = ST.map(s => s.eps / sum(ST.map(z => z.eps)));
  const wEW = ST.map(() => 1 / 3);
  const R = w => sum(w.map((x, i) => x * ret[i])) * 100;

  const bars = (rows, max) => `<div class="sd-bars">${rows.map(([lab, v]) => `<div class="sd-bar"><span class="sd-bar-l">${lab}</span><span class="sd-bar-t"><i style="width:${(v / max) * 100}%"></i></span><b>${fmt(v)}%</b></div>`).join('')}</div>`;

  // Price return index và total return index theo thời gian (minh họa: giá +5%/năm, cổ tức 2%/năm).
  function prTr() {
    const l = 70, r = 580, t = 20, b = 220, n = 10, lo = 1000, hi = 2000;
    const xs = i => l + (i / n) * (r - l);
    const ys = v => b - ((v - lo) / (hi - lo)) * (b - t);
    const line = g => Array.from({ length: n + 1 }, (_, i) => `${xs(i).toFixed(1)},${ys(1000 * (1 + g) ** i).toFixed(1)}`).join(' ');
    let s = `<svg viewBox="0 0 600 260" class="sv" role="img" aria-label="Total return index vượt price return index theo thời gian">`;
    [[1000, '1.000'], [1500, '1.500'], [2000, '2.000']].forEach(([v, lab]) => { s += `<line x1="${l}" y1="${ys(v)}" x2="${r}" y2="${ys(v)}" class="sv-grid"/><text x="${l - 8}" y="${ys(v) + 5}" class="sv-muted" text-anchor="end">${lab}</text>`; });
    [0, 5, 10].forEach(i => { s += `<text x="${xs(i)}" y="${b + 22}" class="sv-muted">năm ${i}</text>`; });
    s += `<polyline points="${line(0.05)}" class="sv-dash" fill="none"/><polyline points="${line(0.07)}" class="sv-curve"/>`;
    s += `<text x="${xs(10) - 4}" y="${ys(1000 * 1.07 ** 10) - 10}" class="sv-txt" text-anchor="end">Total return 1.967</text>`;
    s += `<text x="${xs(10) - 4}" y="${ys(1000 * 1.05 ** 10) + 24}" class="sv-muted" text-anchor="end">Price return 1.629</text>`;
    s += `<text x="${(l + r) / 2}" y="256" class="sv-muted">Minh họa: giá tăng 5%/năm, cổ tức 2%/năm tái đầu tư</text>`;
    return `${s}</svg>`;
  }

  const slides = [
    slide('Giới thiệu', `<div class="sd-cover">
      <div class="sd-k">CFA Level I 2027 · Quantitative Methods · QM-03</div>
      <h2>Benchmarking<br>Returns</h2>
      <p>Đo return đúng cách, rồi so với điểm chuẩn</p>
      <div class="sd-chips"><span>LOS 1 · MWR và TWR</span><span>LOS 2 · Xây dựng chỉ số và trọng số</span></div></div>`, { cover: true, cls: 'sd-cover-wrap' }),

    S('Quỹ lãi 12%: tốt hay không?', `<div class="sd-cols2">
      <div class="sd-card"><div class="sd-n">1</div><b>Đo bằng cách nào?</b><p>Có nộp/rút tiền giữa kỳ → MWR hay TWR?</p></div>
      <div class="sd-card acc"><div class="sd-n">2</div><b>So với cái gì?</b><p>Chỉ số tham chiếu cùng kỳ. Chỉ số tăng 15% → quỹ kém 3%.</p></div></div>
      <p class="sd-note">Đánh giá nhà quản lý = <b>TWR của quỹ</b> so với <b>total return của benchmark</b>.</p>`),

    S('MWR = IRR của dòng tiền nhà đầu tư', `<div class="sd-f">0 = Σ ${frac('CF<sub>t</sub>', '(1 + MWR)<sup>t</sup>')}</div>
      ${tl(2, [{ t: 0, label: '-100 (mua 2 CP)', cls: 'down' }, { t: 1, label: '+2 - 60 = -58', cls: 'down' }, { t: 2, label: '+3 + 174 = +177' }], { h: 140, ticks: ['t = 0', 't = 1', 't = 2'] })}
      <p class="sd-note">Bỏ tiền vào: <b>âm</b>. Cổ tức, rút, giá trị cuối: <b>dương</b>. Gộp các dòng tiền cùng thời điểm.</p>`),

    S('BA II Plus: CF và IRR', `<div class="sd-keys"><span><kbd>CF</kbd> <kbd>2ND</kbd> <kbd>CE/C</kbd></span><span>100 <kbd>+/-</kbd> <kbd>ENTER</kbd></span><span><kbd>↓</kbd> 58 <kbd>+/-</kbd> <kbd>ENTER</kbd></span><span><kbd>↓</kbd> F01 = 1</span><span><kbd>↓</kbd> 177 <kbd>ENTER</kbd></span><span><kbd>IRR</kbd> <kbd>CPT</kbd></span></div>
      <div class="sd-big">MWR = 7,17%</div>
      <p class="sd-note">Luôn xóa bằng CLR WORK trước. F0x = số lần lặp lại của dòng tiền; để mặc định 1.</p>`),

    S('TWR: cắt kỳ con tại mỗi dòng tiền', `${tl(2, [{ t: 0, label: '100', cls: 'pv' }, { t: 1, label: '110 + nộp 50 = 160', cls: 'up' }, { t: 2, label: '152', cls: 'up' }], { h: 140, ticks: ['đầu', 'năm 1', 'năm 2'] })}
      <div class="sd-steps"><span>HPR<sub>1</sub> = 110/100 - 1 = 10% &nbsp;·&nbsp; HPR<sub>2</sub> = 152/<b>160</b> - 1 = -5%</span><span>TWR = (1,10 × 0,95)<sup>1/2</sup> - 1 = <b>2,23%</b>/năm &nbsp;·&nbsp; MWR = <b>0,80%</b></span></div>`),

    S('Cùng dữ liệu, hai con số', `<div class="sd-cols2 wide-left"><div><p class="sd-cap">Ví dụ cổ phiếu (mua thêm tại t = 1, trước năm giảm giá):</p>
      ${bars([['MWR', 7.1653], ['TWR', 9.5293]], 10)}
      <p class="sd-cap">Ví dụ danh mục (nộp 50 trước năm -5%):</p>${bars([['MWR', 0.7975], ['TWR', 2.2252]], 10)}</div>
      <div><div class="sd-rule down">Nộp tiền trước giai đoạn xấu <b>MWR &lt; TWR</b></div><div class="sd-rule up">Nộp tiền trước giai đoạn tốt <b>MWR &gt; TWR</b></div><div class="sd-rule">Không có dòng tiền <b>MWR = TWR</b></div></div></div>`),

    S('MWR hay TWR?', `<div class="sd-cols2">
      <div class="sd-card"><b>MWR</b><p>Trải nghiệm của <b>nhà đầu tư</b>.</p><p>Dùng khi nhà quản lý quyết định dòng tiền (private equity gọi vốn).</p><small>Chỉ cần dòng tiền và giá trị cuối.</small></div>
      <div class="sd-card acc"><b>TWR</b><p>Kỹ năng của <b>nhà quản lý</b>.</p><p>Chuẩn ngành cho quỹ mở: khách hàng tự nộp/rút.</p><small>Cần định giá danh mục mỗi lần có dòng tiền.</small></div></div>`),

    S('Chỉ số: price return và total return', `<div class="sd-cols2 wide-left"><div>${prTr()}</div>
      <div><div class="sd-f sm">PR<sub>I</sub> = Σ w<sub>i</sub> PR<sub>i</sub></div><div class="sd-f sm">TR<sub>I</sub> = Σ w<sub>i</sub> TR<sub>i</sub></div><div class="sd-f sm">V<sub>1</sub> = V<sub>0</sub>(1 + R<sub>I</sub>)</div>
      <p class="sd-note">Quỹ nhận cổ tức → so với <b>total return index</b>.</p></div></div>`),

    S('Một rổ, năm con số return', `<div class="sd-cols2">
      <div><div class="sd-tbl"><div><span>X: 20 → 22 · 100 tr CP (float 60)</span><span>+10%</span></div><div><span>Y: 50 → 45 · 20 tr CP (float 20)</span><span>-10%</span></div><div><span>Z: 100 → 110 · 5 tr CP (float 4)</span><span>+10%</span></div></div>
      <p class="sd-note">Lợi nhuận X, Y, Z: 150 / 120 / 30.</p></div>
      <div>${bars([['Price-weighted', R(wPW)], ['Equal', R(wEW)], ['Market-cap', R(wMC)], ['Float-adjusted', R(wFL)], ['Fundamental', R(wFU)]], 5)}</div></div>`),

    S('Price-weighted: giá cao thì nặng ký', `<div class="sd-cols2">
      <div><p class="sd-cap">Trọng số theo giá đầu kỳ:</p>${bars(ST.map((s, i) => [`${s.n} (giá ${s.p0})`, wPW[i] * 100]), 60)}
      <p class="sd-note">Chỉ số = 170 / 3 = 56,67 → 177 / 3 = 59</p></div>
      <div><div class="sd-card acc"><b>Z tách 2:1</b><p>110 → 55. Giữ chỉ số ở 59:</p><div class="sd-f sm">divisor = ${frac('22 + 45 + 55', '59')} = 2,0678</div><p>Trọng số Z giảm một nửa dù không có gì thay đổi về kinh tế.</p></div></div></div>`),

    S('Market-cap và float-adjusted', `<div class="sd-cols2">
      <div><p class="sd-cap">Market-cap (tổng 3.500):</p>${bars(ST.map((s, i) => [s.n, wMC[i] * 100]), 60)}</div>
      <div><p class="sd-cap">Float-adjusted (tổng 2.600):</p>${bars(ST.map((s, i) => [s.n, wFL[i] * 100]), 60)}</div></div>
      <p class="sd-note">Float loại cổ phiếu do cổ đông chiến lược, nhà nước nắm giữ → chỉ đo phần nhà đầu tư <b>mua được</b>. Market-cap <b>tự cân bằng</b> khi giá đổi.</p>`),

    S('Equal-weighted và fundamental', `<div class="sd-cols2">
      <div class="sd-card"><b>Equal-weighted</b><div class="sd-f sm">(10% - 10% + 10%) / 3 = 3,33%</div><p>Không bị vài mã lớn chi phối.</p><small>Nghiêng cổ phiếu nhỏ; phải tái cân bằng thường xuyên.</small></div>
      <div class="sd-card acc"><b>Fundamental (theo lợi nhuận)</b><div class="sd-f sm">0,5 × 10% + 0,4 × (-10%) + 0,1 × 10% = 2,0%</div><p>Không dồn tiền vào mã đã tăng nóng.</p><small>Nghiêng về cổ phiếu giá trị.</small></div></div>`),

    S('Ưu và nhược của bốn cách', `<div class="sd-grid4">
      <div class="sd-card"><b>Price</b><p>+ Đơn giản, lịch sử dài</p><p>- Trọng số tùy tiện; tách CP đổi trọng số</p></div>
      <div class="sd-card"><b>Equal</b><p>+ Đa dạng hóa</p><p>- Nghiêng mã nhỏ; tái cân bằng nhiều</p></div>
      <div class="sd-card acc"><b>Market-cap / float</b><p>+ Phản ánh thị trường; tự cân bằng</p><p>- Dồn vào mã đắt, tập trung</p></div>
      <div class="sd-card"><b>Fundamental</b><p>+ Tránh mã đắt</p><p>- Cần dữ liệu kế toán; lệch thị trường</p></div></div>`),

    S('Rebalancing và reconstitution', `<div class="sd-cols2">
      <div class="sd-card"><b>Rebalancing</b><p>Đưa <b>trọng số</b> về mục tiêu. Danh sách giữ nguyên.</p><p>Equal-weighted: bán mã đã tăng, mua mã đã giảm.</p></div>
      <div class="sd-card acc"><b>Reconstitution</b><p>Đổi <b>danh sách</b>: thêm mã đủ tiêu chí, loại mã không còn đủ.</p><p>Áp lực mua/bán lên mã được thêm/loại.</p></div></div>
      <p class="sd-note">Quỹ chỉ số chịu chi phí giao dịch khi chỉ số thay đổi → thường thấp hơn chỉ số một chút.</p>`),

    S('Tổng kết: 8 điều mang vào phòng thi', `<div class="sd-check">
      <span>MWR = IRR: CF → IRR → CPT</span><span>Gộp dòng tiền cùng thời điểm</span>
      <span>TWR: cắt kỳ con, nhân, lấy căn số năm</span><span>Mẫu số HPR: giá trị sau dòng tiền</span>
      <span>Đánh giá nhà quản lý: TWR</span><span>Price-weighted: giá cao chi phối</span>
      <span>Equal: rebalance; market-cap: tự cân bằng</span><span>Benchmark công bằng: total return</span></div>
      <p class="sd-note">Tiếp theo: tab <b>Luyện tập</b> - 10 câu, mục tiêu ≥ 7 câu đúng.</p>`),
  ];

  addDeck('QM-03', `Slide Benchmarking - bản thiết kế riêng (${slides.length} slide)`, slides);
}());
