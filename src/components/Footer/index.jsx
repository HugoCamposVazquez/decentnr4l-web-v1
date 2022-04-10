/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Formik, Form, Field } from "formik";
import appData from "../../data/app.json";
import { FaTelegramPlane , FaTwitter, FaDiscord , FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-half sub-bg section-padding pb-0">
      <div className="container-fluid">
          <div className="col-lg-12">
            <div className="cont text-center">
              <div className="logo">
                <a href="#0">
                  <img src={`${appData.isoLogo}`} alt="" />
                </a>
              </div>
              <div className="con-info custom-font">
                <ul>
                  <li>
                    <span>HOME</span> 
                  </li>
                  <li>
                    <span>ABOUT US</span> 
                  </li>
                  <li>
                    <span>PROYECTOS</span>
                  </li>
                  <li>
                    <span>EQUIPO</span> 
                  </li>
                  <li>
                    <span>CONTACTO</span> 
                  </li>
                  <li>
                    <span>TRABAJA CON NOSOTOS</span>
                  </li>
                </ul>
              </div>
              <div className="con-info-dos custom-font desktop">
                <ul>
                  <li>
                    <span>  <a className="glyphicon" rel="noopener noreferrer" href="https://discord.com/invite/Kmp5Yxzc7a" target="_blank" title="Discord"><FaDiscord/></a></span> 
                    
                  </li>
                  <li>
                    <span><a className="glyphicon" rel="noopener noreferrer" href="https://t.me/Decentr4l" target="_blank" title="Telegram"><FaTelegramPlane/></a></span> 

                  </li>
                  <li>
                  <span>  <a className="glyphicon" rel="noopener noreferrer" href="https://twitter.com/Decentr4l_ofi/" target="_blank" title="Twitter"><FaTwitter/></a></span> 
                  </li>
                  <li>
                    <span><a className="glyphicon" rel="noopener noreferrer" href="https://www.linkedin.com/company/decentr4l/about/" target="_blank" title="Linkedin"><FaLinkedinIn/></a></span> 
                  </li>
                  <li>
                    <span>Términos de uso</span> 
                  </li>
                  <li>
                    <span>Política de privacidad</span> 
                  </li>
                  <li>
                    <span>Cookies</span>
                  </li>
                  <li>
                    <span>Sitemap</span> 
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="con-info-dos custom-font mobile">
                  <ul>
                    <li>
                      <span>  <a className="glyphicon" rel="noopener noreferrer" href="https://discord.com/invite/Kmp5Yxzc7a" target="_blank" title="Discord"><FaDiscord/></a></span> 
                      
                    </li>
                    <li>
                      <span><a className="glyphicon" rel="noopener noreferrer" href="https://t.me/Decentr4l" target="_blank" title="Telegram"><FaTelegramPlane/></a></span> 

                    </li>
                    <li>
                    <span>  <a className="glyphicon" rel="noopener noreferrer" href="https://twitter.com/Decentr4l_ofi/" target="_blank" title="Twitter"><FaTwitter/></a></span> 
                    </li>
                    <li>
                      <span><a className="glyphicon" rel="noopener noreferrer" href="https://www.linkedin.com/company/decentr4l/about/" target="_blank" title="Linkedin"><FaLinkedinIn/></a></span> 
                    </li>
                  </ul>
                </div>  
                  <ul className="second-file">
                    <li>
                      <span>Términos de uso</span> 
                    </li>
                    <li>
                      <span>Política de privacidad</span> 
                    </li>
                    <li>
                      <span>Cookies</span>
                    </li>
                    <li>
                      <span>Sitemap</span> 
                    </li>
                </ul>
        <div className="copyrights text-center">
          <p>Mintado desde A Coruña<br></br>
            © 2022 DECENTR4L S.L. Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
