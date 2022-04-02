import React from "react";
import Link from "next/link";

const AboutHeader = () => {
  return (
    <section className="inicio">
      <div className="container-fluid inicio">
        <div className="row">
          <div className="col-lg-12">
          <span className="izquierda">BLOCK</span>
          <span className="derecha">CHAIN</span>
          {/* <h1 className="inicio-texto"><span className="uno">SERVICIOS</span><span className="dos">BLOKCHAIN</span></h1> */}
            <h1 className="inicio-texto">
          {/*   <div id="container">
              <div id="flip">
                <div><div className="prim">Pladuring</div></div>
                <div><div className="sec">Desescombring</div></div>
                <div><div className="ter">Painting</div></div>
              </div>
            </div> */}
            <div className="container-text">    
                <div>Designing</div>
                <div>Developing</div>
                <div>Incuvating</div>
                <div>Acelerating</div>
            </div>
            <span className="dos">BLOCK</span><span className="tres">CHAIN</span></h1>
          </div>
        </div>
      </div>
      <div className="container segundo">  
          <div className="row">
            <div className="col-lg-12">
              <div className="cont text-center">
                <div className="center">
                  <div className="textopulse">Contáctanos<Link href="#contact"><a className="pulse">Contáctanos</a></Link></div>
              </div>
              </div>
            </div>
          </div>
      </div>  

    </section>
  );
};

export default AboutHeader;
