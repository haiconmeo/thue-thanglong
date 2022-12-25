import { Fragment } from "react";
import PageTitle from "../layout/PageTitle";

const TeamPage = () => {
  return (
    <Fragment>
      <PageTitle pageName={"Team Member"} />
      <section className="skill-section section-gap section-blob-bg-four">
        <div className="container">
          <div className="content-x-spacing">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-6 col-md-9">
                <div className="skill-image content-mb-md-50 wow fadeInLeft">
                  <img src="../assets/img/skill-image.jpg" alt="Image" />
                </div>
              </div>
              <div className="col-lg-6 col-md-10">
                <div className="skill-content pl-xl-3">
                  <div className="section-heading mb-20">
                    <h2 className="title">
                    Nguyễn Công Nhã 
                    </h2>
                    <span className="tagline">
                    Chủ tịch Hội đồng thành viên 
                    </span>
                  </div>
                  <p>
                  Kinh nghiệm trên mười năm Giám đốc điều hành, vận hành doanh nghiệp; tư vấn thuế cho các doanh nghiệp khác.
                  </p>
                  <div className="skill-progress-bars">
                    <div className="progress-bar-item mt-35">
                      <div className="progress-bar-top">
                        <h5 className="title">Busines Consulting</h5>
                        <span className="counter">85%</span>
                      </div>
                      <div className="progress-line" data-percentage={85}>
                        <div className="line" />
                      </div>
                    </div>
                    <div className="progress-bar-item mt-35">
                      <div className="progress-bar-top">
                        <h5 className="title">Digital Marketing</h5>
                        <span className="counter">65%</span>
                      </div>
                      <div className="progress-line" data-percentage={65}>
                        <div className="line" />
                      </div>
                    </div>
                    <div className="progress-bar-item mt-35">
                      <div className="progress-bar-top">
                        <h5 className="title">Financial Investment</h5>
                        <span className="counter">79%</span>
                      </div>
                      <div className="progress-line" data-percentage={79}>
                        <div className="line" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== Skills Section End ======*/}
      {/*====== Team Section Start ======*/}
      <section className="team-section section-gap bg-color-primary-7 section-blob-bg-five">
        <div className="container">
          <div className="section-heading text-center mb-30">
            <h2 className="title">Meet Our Team Member</h2>
            <span className="tagline">Best Digital Agency Solutions</span>
          </div>
          <div className="row team-member-items">
            <div className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp">
              <div className="member-item mt-30">
                <div className="member-photo">
                  <img src="../assets/img/team-member/01.jpg" alt="Image One" />
                  <ul className="social-icons">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a>
                    </li>
                  </ul>
                </div>
                <h4 className="name">
                  <a href="#">Trần Đình Khôi</a>
                </h4>
                <span className="title">Thành viên Hội đồng thành viên, Ban cố vấn</span>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp">
              <div className="member-item mt-30">
                <div className="member-photo">
                  <img src="../assets/img/team-member/02.jpg" alt="Image One" />
                  <ul className="social-icons">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a>
                    </li>
                  </ul>
                </div>
                <h4 className="name">
                  <a href="#">Dương Minh Đức</a>
                </h4>
                <span className="title">Ban cố vấn</span>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp">
              <div className="member-item mt-30">
                <div className="member-photo">
                  <img src="../assets/img/team-member/03.jpg" alt="Image One" />
                  <ul className="social-icons">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a>
                    </li>
                  </ul>
                </div>
                <h4 className="name">
                  <a href="#">Nguyễn Thanh Quý </a>
                </h4>
                <span className="title">Kế toán trưởng</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default TeamPage;
