import React, {useState} from "react";

function Competencias() {
    const [hover1, setHover1] = useState(false);
    const [hover2, setHover2] = useState(false);
    const [hover3, setHover3] = useState(false);
    const [hover4, setHover4] = useState(false);
    const [hover5, setHover5] = useState(false);
    const [hover6, setHover6] = useState(false);
    
    
  return (
    <>
         <div id="competencias" className="main-content">
            <div className="row cont-uno">
            <span className="pre">Nuestras</span>
            </div>
            <div className='row cont-dos'>
                <span className="dos-contact">COM</span><span className="tres-competencias">PETENCI4S</span>  
            </div>
            <ul className='row content compe'>
                <li onMouseEnter={()=> setHover1(true)} onMouseLeave={()=> setHover1(false)}>
                    <h2 className={`${hover1 ? "amarillo" : ""}`}>PROYECTOS EN WEB3</h2>
                    <p>Integración de proyectos en web3, conexión con wallets, interoperatividilidad en redes, auditorías web ...</p>
                </li>
                <li onMouseEnter={()=> setHover2(true)} onMouseLeave={()=> setHover2(false)}>
                    <h2 className={`${hover2 ? "amarillo" : ""}`}>PROYECTOS EN WEB3</h2>
                    <p>Desarrollo de smart contracts inteligentes, para todo tipo de proyectos y DAPPs, sobre diferentes redes de Blockchain (Ethereum, BSC, Polygon ...)</p>
                </li>
                <li onMouseEnter={()=> setHover3(true)} onMouseLeave={()=> setHover3(false)}>
                     <h2 className={`${hover3 ? "amarillo" : ""}`}>PROYECTOS EN WEB3</h2>
                     <p>Estudiamos y desarrollamos tokenómicas personalizadas para cada tipo de proyecto, adaptándose en cada caso al mejor de los usos.</p>
                </li>
                <li onMouseEnter={()=> setHover4(true)} onMouseLeave={()=> setHover4(false)}>
                    <h2 className={`${hover4 ? "amarillo" : ""}`}>PROYECTOS EN WEB3</h2>
                    <p>Análisis y desarrollo de diferentes tokens para un proyecto. Estudiaremos en cada caso cual es la mejor oportunidad (utilidad, gobernanza, equity)</p>
                </li>
                <li onMouseEnter={()=> setHover5(true)} onMouseLeave={()=> setHover5(false)}>
                    <h2 className={`${hover5 ? "amarillo" : ""}`}>PROYECTOS EN WEB3</h2>
                    <p>Creamos modelos económicos vinculados a la tokenómica y a los tokens, desarrollamos oráculos y controlamos modelos inflaccionarios.</p>
                </li>
                <li onMouseEnter={()=> setHover6(true)} onMouseLeave={()=> setHover6(false)}>
                    <h2 className={`${hover6 ? "amarillo" : ""}`}>PROYECTOS EN WEB3</h2>
                    <p>Aceleramos proyectos para llevarlos al blockchain con todos los mejores recursos y ayudamos a encontrar capital inicial (Venture capitals, launchaps ..)</p>
                </li>
            </ul>
        </div>    
    </>
  )
}

export default Competencias