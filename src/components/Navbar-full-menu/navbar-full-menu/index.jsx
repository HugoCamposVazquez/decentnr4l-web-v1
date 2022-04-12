/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react"
import Split from "../../Split";
import Link from "next/link";
import appData from "../../../data/app.json";
import handleFullScreenNavbar from "../../../common/handleFullScreenNavbar";
import MenuBackground from "../../MenuBackground";
import { FaTelegramPlane , FaTwitter, FaDiscord , FaLinkedinIn } from "react-icons/fa";





const NavbarFullMenu = ({ theme, lr }) => {
   //navbar scroll when active state
   const [topnav, setNavbar] = useState(false)


 
   //navbar scroll changeBackground function
   const changeBackground = () => {
     console.log(window.scrollY)
     if (window.scrollY >= 66) {
       setNavbar(true)
     } else {
       setNavbar(false)
     }
   }
 
   useEffect(() => {
     changeBackground()
     // adding the event when scroll change background
     window.addEventListener("scroll", changeBackground)
   })
 
  React.useEffect(() => {
    handleFullScreenNavbar();
  }, []);
  return (
    <>
       <div
        id="navi"
        className={topnav ? "topnav active" : "topnav"}>
   {/*    <div
        id="navi"
        className={navbar ? "navbar active" : "navbar"}> */}
        <div className="container-fluid">
          <div className="logo">
            <a href="/">
     
                <><img className="logotipo" src={`${appData.lightLogo}`} alt="logo" />{/* <span className="letrasLogo">Decentr4l</span> */}
                <ul id="list">
                  <li>D</li>
                  <li>E</li>
                  <li>C</li>
                  <li>E</li>
                  <li>N</li>
                  <li>T</li>
                  <li>R</li>
                  <li>4</li>
                  <li>L</li>
                </ul></>

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
                      <Link href="/">
                        <a className="link">
                         HOME
                        </a>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="o-hidden">
                      <Link href="/about/about-dark">
                        <a className="link">
                         COMPETENCI4S
                        </a>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="o-hidden">
                    <Link href="/#trabajos">
                        <a className="link">
                         TR4BAJOS
                        </a>
                      </Link>
                    </div>
                  </li>

                  <li>
                    <div className="o-hidden">
                    <Link href="/about/about-dark">
                        <a className="link">
                         EQUIPO
                        </a>
                      </Link>
                    </div>
                  </li>

                  <li>
                    <div className="">
                      <Link href="/blog">
                        <a className="link">
                          Contacto
                        </a>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 soc">
              <div className="cont-info">
                <nav className="social-nav"> <span className="social-nav-text">Follow us:</span>
                  <ul className="social-list">
                    <li><a className="glyphicon" rel="noopener noreferrer" href="https://t.me/Decentr4l" target="_blank" title="Telegram"><FaTelegramPlane/></a></li>
                    <li><a className="glyphicon" rel="noopener noreferrer" href="https://twitter.com/Decentr4l_ofi/" target="_blank" title="Twitter"><FaTwitter/></a></li>
                    <li><a className="glyphicon" rel="noopener noreferrer" href="https://discord.com/invite/Kmp5Yxzc7a" target="_blank" title="Discord"><FaDiscord/></a></li>
                    <li><a className="glyphicon" rel="noopener noreferrer" href="https://www.linkedin.com/company/decentr4l/about/" target="_blank" title="Linkedin"><FaLinkedinIn/></a></li>
                  </ul>
                </nav>
                <span className="version">V. 1.0</span>
              </div>

            </div>
          </div>
        </div>
       {/*  <MenuBackground/> */}
      </div>
    </>
  );
};

export default NavbarFullMenu;
