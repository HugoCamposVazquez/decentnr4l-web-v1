import React from 'react'
import DarkTheme from "../layouts/Dark";
import NavbarFullMenu from "../components/Navbar-full-menu/navbar-full-menu";

function Custom404() {
  return (
    <DarkTheme>
        <NavbarFullMenu/>
        <section className="page-header">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="cont">
                  <div>
                   <h1 className='text-center'>Error 404</h1>
                   <h2 className='text-center'>Nothing foound here</h2>
                   <h2 className='text-center'>hay que joderse</h2>
                  </div>
                </div>  
              </div>    
            </div>      
          </div>
        </section> 
    </DarkTheme>     
  )
}

export default Custom404