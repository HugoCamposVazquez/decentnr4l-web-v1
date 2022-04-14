import DarkTheme from "../layouts/Dark";
import NavbarFullMenu from "../components/Navbar-full-menu/navbar-full-menu";
import Link from "next/link";




const BlogDark = ({ posts }) => {
  console.log(posts);
  return (
    <>
      <DarkTheme>
      <NavbarFullMenu theme={DarkTheme} lr={undefined}/>
       <section className="page-header">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-9">
                <div className="cont">
                  <div>
                   <h1>My Blog</h1>
 
                  </div>
                </div>  
              </div>    
            </div>      
          </div>
        </section>    
      </DarkTheme>  
    </>
  );
};

export default BlogDark;