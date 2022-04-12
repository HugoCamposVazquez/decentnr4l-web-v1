import React from 'react'
import Trabajos from '../../components/trabajos'
import DarkTheme from "../../layouts/Dark";
import NavbarFullMenu from "../../components/Navbar-full-menu/navbar-full-menu";
import { FaTelegramPlane , FaTwitter, FaDiscord , FaLinkedinIn } from "react-icons/fa";
import Link from 'next/link';

function TrabajosSingle() {
  return (
    <DarkTheme>
        <NavbarFullMenu/>
            <div id="trabajos" className="single main-content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className='row cont-dos'>
                                <span className="pre-tit-a">WEB</span>
                                <span><h2 className='pre-titulo'>WEB</h2></span>
                                <span className="pre-tit-b">AGALBIT</span>
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
                            <div className='social'>
                                <ul>
                                        <li>
                                            <span> <a className="glyphicon" rel="noopener noreferrer" href="https://discord.com/invite/Kmp5Yxzc7a" target="_blank" title="Discord"><FaDiscord/></a></span>
                                        </li>
                                        <li>
                                            <span><a className="glyphicon" rel="noopener noreferrer" href="https://t.me/Decentr4l" target="_blank" title="Telegram"><FaTelegramPlane/></a></span> 
                                        </li>
                                        <li>
                                            <span><a className="glyphicon" rel="noopener noreferrer" href="https://twitter.com/Decentr4l_ofi/" target="_blank" title="Twitter"><FaTwitter/></a></span> 
                                        </li>
                                        <li>
                                            <span><a className="glyphicon" rel="noopener noreferrer" href="https://www.linkedin.com/company/decentr4l/about/" target="_blank" title="Linkedin"><FaLinkedinIn/></a></span> 
                                        </li>
                                        <li className='site'>
                                            www.agalbit.org
                                         </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 blanco"><img src="" alt="" /></div>
                    </div>
                </div>
            </div>      
                <div className="container-fluid single blanco trabajo second main-content">
                    <div className="row">
                        <div className="col-sm-6 trabajo-single-uno">
                            <h2 className='tra-sing'>Nos hemos encargado</h2>
                            <ul className='trabajo-single'>
                                <li>
                                    Desarrollo de identidad corporativa
                                </li>
                                <li>
                                    Desarrollo y programación web
                                </li>
                                <li>
                                    Integración de Web3
                                </li>
                                <li>
                                    Desarrollo NFTs
                                </li>
                                <li>
                                    Marketplace NFTs
                                </li>
                            </ul>
                            <div className='tags'>
                                <div className="row">
                                    <span>#DESARROLLO</span><span>#WEB</span><span>#NFTs</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 trabajo-single-dos"><Link href="/about/about-dark"><a className="trabajos-boton" href="/trabajos">VER OTROS PROYECTOS</a></Link></div>
                    </div>
                </div>
              
    </DarkTheme>     
  )
}

export default TrabajosSingle