import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";

function Equipo() {
  return (
    <>
         <div id="equipo" className="main-content">
            <div className="row cont-uno">
                <span className="pre">Nuestro</span>
            </div>
            <div className='row cont-dos'>
                <span className="dos-contact">EQU</span><span className="tres-contact">IPO</span>  
            </div>
            <div className='row content'>
                <div className="col-sm-3 alex">
                     <div className="card team">
                        <div className="contentbx">
                            <div className="content-team">
                                <h3>Alex Rivas</h3>
                                <h4>CEO</h4>
                                <span><a className="glyphicon" rel="noopener noreferrer" href="https://www.linkedin.com/company/decentr4l/about/" target="_blank" title="Linkedin"><FaLinkedinIn/></a></span> 
                            </div>    
                         </div>
                    </div>                    
                </div> 
                <div className="col-sm-3 hugo">
                     <div className='card team'>
                        <div className="contentbx">
                            <div className='content-team'>
                                <h3>Hugo Campos</h3>
                                <h4>CTO</h4>
                                <span><a className="glyphicon" rel="noopener noreferrer" href="https://www.linkedin.com/company/decentr4l/about/" target="_blank" title="Linkedin"><FaLinkedinIn/></a></span> 
                            </div>    
                         </div>
                    </div>                    
                </div> 
                <div className="col-sm-3 alberto">
                     <div className='card team'>
                        <div className="contentbx">
                            <div className='content-team'>
                                <h3>Alberto Lamas</h3>
                                <h4>CFO</h4>
                                <span><a className="glyphicon" rel="noopener noreferrer" href="https://www.linkedin.com/company/decentr4l/about/" target="_blank" title="Linkedin"><FaLinkedinIn/></a></span> 
                            </div>    
                         </div>
                    </div>                    
                </div> 
                <div className="col-sm-3 frederic">
                     <div className='card team'>
                        <div className="contentbx">
                            <div className='content-team'>
                                <h3>Frederic Fernández</h3>
                                <h4>CMO</h4>
                                <span><a className="glyphicon" rel="noopener noreferrer" href="https://www.linkedin.com/company/decentr4l/about/" target="_blank" title="Linkedin"><FaLinkedinIn/></a></span> 
                            </div>    
                         </div>
                    </div>                    
                </div> 
                
            </div>
        </div>    
    </>
  )
}

export default Equipo



