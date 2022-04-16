import React from "react";
import DarkTheme from "../../layouts/Dark";
import GridContent from "../../components/Blog/GridContent";
import NavbarFullMenu from "../../components/Navbar-full-menu/navbar-full-menu";


const BlogGrid = () => {
  return (
    <>
    <DarkTheme>
      <NavbarFullMenu/>
      <section className="page-header">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-9">
                <div className="cont">
                   <h1>Últimas publicaciones</h1>
               </div>  
              </div>    
            </div>      
          </div>
        </section>  
      <GridContent />
    </DarkTheme> 
    </>
  );
};

export default BlogGrid;
