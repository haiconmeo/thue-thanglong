import Link from "next/link";
import { Fragment, useState } from "react";
import rtl from "../../rtl";
import MobileMenu from "./MobileMenu";
import Nav from "./Nav";

const Header3 = () => {
  const [mobileToggle, setMobileToggle] = useState(false);
  return (
    <Fragment>
      <header className="template-header absolute-header navbar-left sticky-header">
        <div className="topbar">
          <p>Let's make something great together.</p>
        </div>
        <div className="container">
          <div className="header-inner">
            <div className="header-left">
              <div className="site-logo">
                <Link href={`${rtl()}`}>
                  <a>
                    <img src="/assets/img/logo.png" alt="Qolle" />
                  </a>
                </Link>
              </div>
              <Nav />
            </div>
            <div className="header-right">
              <ul className="header-extra">
                <li className="header-btns d-none d-md-block">
                  <a href="#" className="template-btn">
                    Let’s Talk
                    <i className="far fa-long-arrow-right" />
                  </a>
                </li>
                <li className="d-xl-none">
                  <div
                    className="navbar-toggler"
                    onClick={() => setMobileToggle(true)}
                  >
                    <span />
                    <span />
                    <span />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <MobileMenu active={mobileToggle} close={() => setMobileToggle(false)} />
    </Fragment>
  );
};
export default Header3;
