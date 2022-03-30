import React, { useRef, useState } from "react";
import DarkTheme from "../../layouts/Dark";
import NavbarFullMenu from "../../components/Navbar-full-menu/navbar-full-menu";
import AboutHeader from "../About-header";
import AboutIntro from "../../components/About-intro";
import CallToAction from "../../components/Call-to-action";
import Team1 from "../../components/Team1";
import Footer from "../Footer";
import Link from "next/link";

import ReactDOM from "react-dom";
// import "fullpage.js/vendors/scrolloverflow"; Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";
import Contacto from "../../pages/contact/contact";

//import "./styles.css";

class FullpageWrapper extends React.Component {
  onLeave(origin, destination, direction) {
    console.log("Leaving section " + origin.index);
  }
  afterLoad(origin, destination, direction) {
    console.log("After load: " + destination.index);
  }
  render() {
    return (
        <DarkTheme> 
            <NavbarFullMenu/>     
                <ReactFullpage
                    licenseKey={"232313123"}
                    scrollOverflow={true}
                    onLeave={this.onLeave.bind(this)}
                    afterLoad={this.afterLoad.bind(this)}
                    render={({ state, fullpageApi }) => {
                    return (
                        <div id="fullpage-wrapper">
                            <div className="section section1">
                                <header
                                    className="pages-header bg-img valign parallaxie"
                                    style={{ backgroundImage: "url(/img/slid/video.gif)" }}
                                    data-overlay-dark="5"
                                    >
                                    <div className="container inicio">
                                        <div className="row">
                                        <div className="col-lg-12">
                                        <h1 className="inicio-texto">SERVICIOS BLOKCHAIN</h1>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="container segundo">  
                                        <div className="row">
                                            <div className="col-lg-12">
                                            <div className="cont text-center">
                                                <button className="boton-inicio" onClick={() => fullpageApi.moveTo(4, 0)}>
                                                CONTÁCTANOS
                                                </button>
                                            </div>
                                            </div>
                                        </div>
                                    </div>  
                                </header>
                            </div>
                            <div className="section section2">
                                <Team1 subBG/>
                            </div>
                        </div>
                    );
                    }}
                />
                                        
                              
                          
      </DarkTheme>  
    );
  }
}



export default FullpageWrapper;
