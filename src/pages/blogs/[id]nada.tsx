import React from "react";
import DetailsContent from "../../components/Blog/BlogDetails/DetailsContent";
/* import GetStarted from "../components/Common/GetStarted"; */
import baseApiUrl from "../../../utils/baseApiUrl";
import DarkTheme from "../../layouts/Dark";
import NavbarFullMenu from "../../components/Navbar-full-menu/navbar-full-menu";
import axios from "axios";
import Head from "next/head";
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await axios.get(`${baseApiUrl}/blogs/${params.id}`);


const ServicesDetails = ({ blog: { data } }) => {

  const [blogs, setBlogs] = React.useState();
  React.useEffect(() => {
    const getBlogs = async () => {
      const response = await axios.get(`${baseApiUrl}/api/blogs?populate=*`);
      setBlogs(response.data);
      // console.log(response.data)
    };
    getBlogs();
  }, []);
  return (
    <>
    <DarkTheme>
      <Head>
      {blogs && (
         <>
      {blogs.data.map((blog) => (
        <title>{data[0].attributes.title}</title>
        
        ))}
        </>
         )}
      </Head>
      <NavbarFullMenu/>
      {blogs && (
        <div className="blog-area ptb-100">
          <div className="container">
            <div className="row justify-content-center">
              {blogs.data.map((blog) => (
                  <div className="single-blog-post">
                    <div className="image">
                          <img
                            src={blog.attributes.image.data.attributes.url}
                            alt={
                              blog.attributes.image.data.attributes
                                .alternativeText
                            }
                          />
  
                    </div>
                    <div className="content">
                      <ul className="meta">
                      <li>
                          <i className="bx bx-purchase-tag-alt"></i>
                          {blog.attributes.title}
                        </li>
                        <li>
                          <i className="bx bx-purchase-tag-alt"></i>
                          {blog.attributes.category}
                        </li>
                        <li>
                          <i className="bx bx-calendar-check"></i>
                          {blog.attributes.date}
                        </li>
                        <li>
                          <i className="bx bx-calendar-check"></i>
                          {blog.attributes.detailsText}
                        </li>
                      </ul>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </DarkTheme>  
    </>
  );
};



export default ServicesDetails;
