import React from "react";
import DarkTheme from "../layouts/Dark";
import NavbarFullMenu from "../components/Navbar-full-menu/navbar-full-menu";
import BlogStanderd from "../components/Blog-standerd";

const BlogDark = () => {

  return (
    <DarkTheme>
       <NavbarFullMenu />
      <section className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-9">
              <div className="cont">
                <h1 className="extra-title mb-10">Our Blog.</h1>
                <p>
                  All the most current news and events of our creative team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BlogStanderd />
    </DarkTheme>
  );
};

export default BlogDark;
