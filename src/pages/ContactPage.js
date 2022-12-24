import { Fragment } from "react";
import PageTitle from "../layout/PageTitle";

const ContactPage = () => {
  return (
    <Fragment>
      <PageTitle pageName={"Contact Us"} />
      <section className="contact-info-section section-gap">
        <div className="container">
          <div className="row justify-content-lg-between justify-content-center">
            <div className="col-xl-5 col-lg-6 col-md-10">
              <div className="section-heading mb-30">
                <h2 className="title">
                Sẵn sàng   kết nối, tư vấn, gặp gỡ, hợp tác
                </h2>
                <span className="tagline">Best consultancy and Tax Agent</span>
              </div>
              <div className="contact-info-box wow fadeInUp">
                <div className="single-contact-info">
                  <div className="icon">
                    <i className="fal fa-map-marker-alt" />
                  </div>
                  <div className="content">
                    <h4 className="info-title">Địa Chỉ</h4>
                    <p>
                    Nhà số 8, ngách 105/2a, ngõ 75 đường Phú Diễn, Phường Phú Diễn, <br /> Quận Bắc Từ Liêm, Thành phố Hà Nội, Việt Nam
                    </p>
                  </div>
                </div>
                <div className="single-contact-info">
                  <div className="icon">
                    <i className="fal fa-envelope-open" />
                  </div>
                  <div className="content">
                    <h4 className="info-title">Email</h4>
                    <p>
                    dichvuthue.thanglong@gmail.com <br /> dailythuethanglong.com
                    </p>
                  </div>
                </div>
                <div className="single-contact-info">
                  <div className="icon">
                    <i className="fal fa-phone" />
                  </div>
                  <div className="content">
                    <h4 className="info-title">Số Điện Thoại</h4>
                    <p>
                    092 158 31 67 <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-9">
              <div className="contact-img text-lg-right text-center content-mt-md-50">
                <img
                  src="../assets/img/illustrations/about-illustration.png"
                  alt="Image"
                  className="animate-float-bob-y"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== Contact Info End ======*/}
      {/*====== Contact Maps Start ======*/}
      <section className="contact-map-area overflow-hidden">
        <h2 className="d-none">title</h2>
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.6783441776097!2d105.75794601538554!3d21.045552492579713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454c229275305%3A0xfc1baff3a430760c!2zTmcuIDc1IMSQLiBQaMO6IERp4buFbiwgUGjDuiBEaeG7hW4sIFThu6sgTGnDqm0sIEjDoCBO4buZaSwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1671892611037!5m2!1sen!2s"
            loading="lazy"
          />
        </div>
      </section>
      {/*====== Contact Maps End ======*/}
      {/*====== Contact Form Start ======*/}
      <section className="contact-from-area section-gap">
        <div className="container">
          <div className="contact-from">
            <div className="section-heading text-center mb-60">
              <h2 className="title">Send Us Message</h2>
              <span className="tagline">Best Digital Agency Solutions</span>
            </div>
            <form action="#" onSubmit={(e) => e.preventDefault()}>
              <div className="row">
                <div className="col-md-4 col-sm-6">
                  <div className="input-field">
                    <input type="text" placeholder="Your Full Name" />
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="input-field">
                    <input type="text" placeholder="Phone Number" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="input-field">
                    <input type="email" placeholder="Email Address" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-field">
                    <input type="text" placeholder="Website" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-field">
                    <input type="text" placeholder="Subject" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="input-field">
                    <textarea placeholder="Message" defaultValue={""} />
                  </div>
                </div>
                <div className="col-12">
                  <button className="template-btn w-100">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default ContactPage;
