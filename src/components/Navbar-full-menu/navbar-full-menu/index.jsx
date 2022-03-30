/* eslint-disable @next/next/no-img-element */
import React from "react";
import Split from "../../Split";
import Link from "next/link";
import appData from "../../../data/app.json";
import handleFullScreenNavbar from "../../../common/handleFullScreenNavbar";
import MenuBackground from "../../MenuBackground";
import { FaTelegramPlane , FaTwitter, FaDiscord , FaLinkedinIn } from "react-icons/fa";


const NavbarFullMenu = ({ theme, lr }) => {
  React.useEffect(() => {
    handleFullScreenNavbar();
  }, []);
  return (
    <>
      <div
        id="navi"
        className={`topnav ${theme ? (theme === "light" ? "light" : "") : ""}`}
      >
        <div className="container-fluid">
          <div className="logo">
            <a href="#0">
              {theme ? (
                theme === "light" ? (
                  <img src={`${appData.darkLogo}`} alt="log o" />
                ) : (
                  <img src={`${appData.lightLogo}`} alt="logo" />
                )
              ) : (
                <img src={`${appData.lightLogo}`} alt="logo" />
              )}
            </a>
          </div>
          <div className="menu-icon">
            <Split>
              <span className="text" data-splitting>
                <span className="menu-text"><i></i>
              <i></i></span>
              </span>
            </Split>
          </div>
        </div>
      </div>


      <div className="hamenu">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-9 col-md-8">
              <div className="menu-links">
                <ul className="main-menu">
                  <li>
                  <div className="o-hidden">
                      <Link href="/about/about-dark">
                        <a className="link">
                         HOME
                        </a>
                      </Link>
                    </div>
                    <div className="sub-menu">
                      <ul>
                        <li>
                          <div className="o-hidden">
                            <span className="sub-link back">
                              <i className="pe-7s-angle-left"></i> Go Back
                            </span>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href="/home/home1-dark">
                              <a className="sub-link">
                                Main Home
                              </a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href="/home/home2-dark">
                              <a className="sub-link">
                                Creative Studio
                              </a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href="/home/home3-dark">
                              <a className="sub-link">
                                Business Startup
                              </a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href="/home/home4-dark">
                              <a className="sub-link">
                                One Page
                              </a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href="/home/home5-dark">
                              <a className="sub-link">
                                Freelancer
                              </a>
                            </Link>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="o-hidden">
                      <Link href="/about/about-dark">
                        <a className="link">
                         About Us
                        </a>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="o-hidden">
                    <Link href="/about/about-dark">
                        <a className="link">
                         PORTFOLIO
                        </a>
                      </Link>
                    </div>
                    <div className="sub-menu">
                      <ul>
                        <li>
                          <div className="o-hidden">
                            <span className="sub-link back">
                              <i className="pe-7s-angle-left"></i> Go Back
                            </span>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href="/works/works-dark">
                              <a className="sub-link">
                                <span className="nm">01.</span>Mouse Info
                              </a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href="/works2/works2-dark">
                              <a className="sub-link">
                                Masonry 3 Columns
                              </a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href="/works3/works3-dark">
                              <a className="sub-link">
                                Masonry 2 Columns
                              </a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href="/works4/works4-dark">
                              <a className="sub-link">
                                Pinterest List
                              </a>
                            </Link>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>

                  <li>
                    <div className="o-hidden">
                    <Link href="/about/about-dark">
                        <a className="link">
                         SHOWCASES
                        </a>
                      </Link>
                    </div>
                    <div className="sub-menu">
                      <ul>
                        <li>
                          <div className="o-hidden">
                            <span className="sub-link back">
                              <i className="pe-7s-angle-left"></i> Go Back
                            </span>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href="/showcase/showcase-dark">
                              <a className="sub-link">
                                Full Screen
                              </a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href="/showcase2/showcase2-dark">
                              <a className="sub-link">
                                Creative Carousel
                              </a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href="/showcase3/showcase3-dark">
                              <a className="sub-link">
                                Radius Carousel
                              </a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href="/showcase4/showcase4-dark">
                              <a className="sub-link">
                                Columns Carousel
                              </a>
                            </Link>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>

                  <li>
                    <div className="">
                      <Link href="/contact/contact-dark">
                        <a className="link">
                          Contact
                        </a>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="cont-info">
                <nav className="social-nav"> <span className="social-nav-text">Follow us:</span>
                  <ul className="social-list">
                    <li><a className="glyphicon" rel="noopener noreferrer" href="https://t.me/Decentr4l" target="_blank" title="Telegram"><FaTelegramPlane/></a></li>
                    <li><a className="glyphicon" rel="noopener noreferrer" href="https://twitter.com/Decentr4l_ofi/" target="_blank" title="Twitter"><FaTwitter/></a></li>
                    <li><a className="glyphicon" rel="noopener noreferrer" href="https://discord.com/invite/Kmp5Yxzc7a" target="_blank" title="Discord"><FaDiscord/></a></li>
                    <li><a className="glyphicon" rel="noopener noreferrer" href="https://www.linkedin.com/company/decentr4l/about/" target="_blank" title="Linkedin"><FaLinkedinIn/></a></li>
                  </ul>
                </nav>
              </div>

            </div>
          </div>
        </div>
        <MenuBackground/>
      </div>
    </>
  );
};

export default NavbarFullMenu;
