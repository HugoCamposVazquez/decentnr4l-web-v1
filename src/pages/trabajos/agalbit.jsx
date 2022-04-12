import React from 'react'
import DarkTheme from "../../layouts/Dark";
import NavbarFullMenu from "../../components/Navbar-full-menu/navbar-full-menu";
import Link from 'next/link';
import { useRouter } from "next/router";
import { FaTelegramPlane , FaTwitter, FaDiscord , FaLinkedinIn } from "react-icons/fa";

function TrabajosSingleAgalbit() {
  return (
    <DarkTheme>
        <NavbarFullMenu/>
            <div className="container-fluid">
                <section>
                  <div id="trabajos" className="single main-content">
                    <div className="col-lg-6">
                        <div className='row cont-dos'>
                            <span><h2>Web</h2></span>
                            <span className="dos-contact">AGA</span><span className="tres-contact">LBIT</span>  
                        </div>
                        <div className="texto-trabajos">
                          <p>
                          Trabajamos de mano con los mejores proyectos del sector Blockchain, ofreciendo soluciones a medida con los mejores partnerts tecnologicos si te interesa que trabajemos contigo no dejes de contactarnos y contarnos tu idea.
                          </p>
                          <br></br>
                          <p>
                          Trabajamos de mano con los mejores proyectos del sector Blockchain, ofreciendo soluciones a medida con los mejores partnerts tecnologicos si te interesa que trabajemos contigo no dejes de contactarnos y contarnos tu idea.
                          </p>
                       </div>  
                        <div className='row social'>
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
                    </div>
                      <div className="col-lg-6">
                        <img alt="agalbit" />  
                     </div>
                  </div>
               </section>
               <section>
                      <div id="trabajos" className="single second main-content">
                        <div className="col-lg-6">
                            <p>
                            Trabajamos de mano con los mejores proyectos del sector Blockchain, ofreciendo soluciones a medida con los mejores partnerts tecnologicos si te interesa que trabajemos contigo no dejes de contactarnos y contarnos tu idea.
                            </p>
                            <br></br>
                            <p>
                            Trabajamos de mano con los mejores proyectos del sector Blockchain, ofreciendo soluciones a medida con los mejores partnerts tecnologicos si te interesa que trabajemos contigo no dejes de contactarnos y contarnos tu idea.
                            </p>
                        </div>
                        <div className="col-lg-6">
                          ALGO
                        </div>       
                      </div>
              </section>           
            </div>  
    </DarkTheme>     
    )
}
export default TrabajosSingleAgalbit