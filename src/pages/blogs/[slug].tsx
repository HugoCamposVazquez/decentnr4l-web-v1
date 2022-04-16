
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import axios from "axios";
import baseApiUrl from "../../../utils/baseApiUrl";
import DarkTheme from "../../layouts/Dark";
import NavbarFullMenu from "../../components/Navbar-full-menu/navbar-full-menu";




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


const ServicesDetails = ({ blog: { data } }) => {
  const router = useRouter();

  return (
    <>
        <DarkTheme>
       <NavbarFullMenu theme={undefined} lr={undefined}/>
        <img src={data[0].attributes.image.data.attributes.url} alt={data[0].attributes.image.data.attributes.alternativeText}/>
        <div><h1>{data[0].attributes.title}</h1></div>
        <div><p>{data[0].attributes.detailsText}</p></div>
        </DarkTheme>
    </>
  );
};

export default ServicesDetails;
