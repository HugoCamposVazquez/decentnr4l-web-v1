import React from "react";
import DetailsContent from "../../components/Blog/BlogDetails/DetailsContent";
/* import GetStarted from "../components/Common/GetStarted"; */
import baseApiUrl from "../../../utils/baseApiUrl";
import DarkTheme from "../../layouts/Dark";
import NavbarFullMenu from "../../components/Navbar-full-menu/navbar-full-menu";

const ServicesDetails = ({ blog: { data } }) => {
  return (
    <>
   <DarkTheme>
    <NavbarFullMenu/>  
      <div className="page-title-area">
        <div className="container">
          <div className="page-title-content">
            <span className="sub-title green-color">Blog Details</span>
            <h1>{data[0].attributes.title}</h1>
          </div>
        </div>
      </div>
      <DetailsContent {...data[0]} />
      <div className="pb-100">
        {/* <GetStarted /> */}
      </div>
     </DarkTheme>
    </>
  );
};

export async function getStaticPaths() {
  const res = await fetch(`${baseApiUrl}/api/blogs`);
  const { data } = await res.json();

  // console.log(data);

  const paths = data.map((blog) => ({
    params: { slug: blog.attributes.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // console.log(params);
  // Call an external API endpoint to get products.
  // You can use any data fetching library
  const res = await fetch(
    `${baseApiUrl}/api/blogs?filters[slug][$eq]=${params.slug}&populate=*`
  );
  const blog = await res.json();

  // By returning { props: { blog } }, the Blog component
  // will receive `blog` as a prop at build time
  return {
    props: {
      blog,
    },
  };
}

export default ServicesDetails;
