const Sidebar = ({ active, close }) => {
  return (
    <div
      className={`slide-panel off-canvas-panel ${active ? "show-panel" : ""}`}
    >
      <div className="panel-overlay" onClick={() => close()} />
      <div className="panel-inner">
        <div className="canvas-logo">
          <img src="/assets/img/logo.png" alt="" />
        </div>
        <div className="about-us">
          <h5 className="canvas-widget-title">VỀ CHÚNG TÔI</h5>
          <p>
          Công ty TNHH Tư vấn và Đại lý thuế Thăng Long được thành lập năm 2019, ra đời mang trong mình sứ mệnh mang đến các dịch vụ chuyên sâu trong lĩnh vực kế toán, thuế. Với danh mục dịch vụ đa dạng cùng với đội ngũ lãnh đạo cho tới nhân sự tâm huyết, có chuyên môn cao, chúng tôi cam kết trở thành nơi gửi gắm sự tin tưởng, là sự lựa chọn hàng đầu của các đối tác, doanh nghiệp.

          </p>
        </div>
        <div className="contact-us">
          <h5 className="canvas-widget-title">LIÊN HỆ</h5>
          <ul>
            <li>
              <i className="far fa-map-marker-alt" />
              Nhà số 8, ngách 105/2a, ngõ 75 đường Phú Diễn, Phường Phú Diễn, Quận Bắc Từ Liêm, Thành phố Hà Nội, Việt Nam
            </li>
            <li>
              <i className="far fa-envelope-open" />
              <a href="mailto:support@Qolle.com">dichvuthue.thanglong@gmail.com</a>
            </li>
            <li>
              <i className="far fa-phone" />
              <a href="tel:+01234567899">092 158 31 67</a>
              <br />
            </li>
          </ul>
        </div>
        <a href="#" className="panel-close" onClick={() => close()}>
          <i className="fal fa-times" />
        </a>
      </div>
    </div>
  );
};
export default Sidebar;
