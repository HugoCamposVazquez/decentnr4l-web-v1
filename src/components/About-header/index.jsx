import React from "react";
import Link from "next/link";

const AboutHeader = () => {
  return (
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
                <div className="path">
                <Link href="#contact"><a>CONTÁCTANOS</a></Link>
                </div>
              </div>
            </div>
          </div>
      </div>  

    </header>
  );
};

export default AboutHeader;
