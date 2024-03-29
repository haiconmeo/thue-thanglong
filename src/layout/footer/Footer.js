import ContactUs from "./footerLinks/ContactUs";
import CopyRight from "./footerLinks/CopyRight";
import Newsletters from "./footerLinks/Newsletters";
import QuickLink from "./footerLinks/QuickLink";
import Support from "./footerLinks/Support";

const Footer = () => {
  return (
    <footer className="template-footer bg-color-secondary text-white-version">
      <div className="footer-cta-area">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-7">
              <h2 className="cta-title">Are You Ready To Work Together ?</h2>
            </div>
            <div className="col-auto">
              <a href="#" className="template-btn">
                Let’s Talk With Us <i className="fas fa-long-arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="footer-widgets-area">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <ContactUs />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <QuickLink />
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6">
              <Support />
            </div>
            <div className="col-lg-4 col-md-6">
              <Newsletters />
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <CopyRight />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
