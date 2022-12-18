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
          <h5 className="canvas-widget-title">About Us</h5>
          <p>
            Sed perspiciatis unde omnis iste natus error voluptatem accusantium
            doloremque laudantium totam rem aperams eaque ipsa quae abillo.
          </p>
        </div>
        <div className="contact-us">
          <h5 className="canvas-widget-title">Contact Us</h5>
          <ul>
            <li>
              <i className="far fa-map-marker-alt" />
              Số 14 Ngõ 178 Đường Đại Mỗ, Đai Mỗ, Nam Từ Liêm, Hà Nội
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
