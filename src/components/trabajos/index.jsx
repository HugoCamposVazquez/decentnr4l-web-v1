import React from 'react'

function Trabajos() {
  return (
    <>
         <div id="trabajos" className="main-content">
            <div className="row cont-uno">
            <span className="pre">Nuestros</span>
            </div>
            <div className='row cont-dos'>
                <span className="dos-contact">TRA</span><span className="tres-contact">BAJOS</span>  
            </div>
            <p>
            Trabajamos de mano con los mejores proyectos del sector Blockchain, ofreciendo soluciones a medida con los mejores partnerts tecnologicos si te interesa que trabajemos contigo no dejes de contactarnos y contarnos tu idea.
            </p>
            <div className='row content'>
                <div className="col-sm-3">
                  <div className='card team'>
                  <img className='logo-works' title="agalbit" alt="agalbit" src='img/clients/logo-agalbit.png'></img>
                    <div className="contentbx works">
                      <div className='content-team'>
                        <h3>ALGABIT</h3>
                        {/* <h4>www.algabit.org</h4> */}
                        <hr className='works'></hr>
                        <p className='works-desc'>Desarrollo web3 de la plataforma agalbit para la asociación gallega de blockchain.</p> 
                      </div>    
                    </div>
                  </div>                     
                </div>
                <div className="col-sm-3">
                  <div className='card team'>
                  <img className='logo-works' title="agalbit" alt="agalbit" src='img/clients/logo-dextools.png'></img>
                    <div className="contentbx works">
                      <div className='content-team'>
                        <h3>DEXTools</h3>
                        {/* <h4>www.dextools.io</h4> */}
                        <hr className='works'></hr>
                        <p className='works-desc'>Desarrollo web3 de la plataforma agalbit para la asociación gallega de blockchain.</p> 
                      </div>    
                    </div>
                  </div>                     
                </div>
                <div className="col-sm-3">
                  <div className='card team'>
                  <img className='logo-works' title="agalbit" alt="agalbit" src='img/clients/logo-skydream.png'></img>
                    <div className="contentbx works">
                      <div className='content-team'>
                        <h3>SKY DREAM</h3>
                        {/* <h4>www.skydream.org</h4> */}
                        <hr className='works'></hr>
                        <p className='works-desc'>Desarrollo web3 de la plataforma agalbit para la asociación gallega de blockchain.</p> 
                      </div>    
                    </div>
                  </div>                     
                </div>    <div className="col-sm-3">
                  <div className='card team'>
                  <img className='logo-works' title="agalbit" alt="agalbit" src='img/clients/logo-eetee.png'></img>
                    <div className="contentbx works">
                      <div className='content-team'>
                        <h3>EETEE</h3>
                        {/* <h4>www.eetee.org</h4> */}
                        <hr className='works'></hr>
                        <p className='works-desc'>Desarrollo web3 de la plataforma agalbit para la asociación gallega de blockchain.</p> 
                      </div>    
                    </div>
                  </div>                     
                </div>
            </div>
        </div>    
    </>
  )
}

export default Trabajos