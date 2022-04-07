import React from "react";
import AboutHeader from "../../components/About-header";
import AboutIntro from "../../components/About-intro";
import CallToAction from "../../components/Call-to-action";
import Clients1 from "../../components/Clients1";
import Footer from "../../components/Footer";
import MinimalArea from "../../components/Minimal-area";
import Navbar from "../../components/Navbar";
import Services4 from "../../components/Services4";
import Services3 from "../../components/Services3";
import Numbers1 from "../../components/Numbers";
import NumbersWithVideo from "../../components/Numbers";
import SkillsCircle from "../../components/Skills-circle";
import Testimonials1 from "../../components/Testimonials1";
import Team1 from "../../components/Team1";
import VideoWithTestimonials from "../../components/Video-with-testimonials";
import DarkTheme from "../../layouts/Dark";
import NavbarFullMenu from "../../components/Navbar-full-menu/navbar-full-menu";
import ShowcasesOneCenter from "../../components/Showcases-one-center";
import Maarquee from "../../components/marquee";
import FullpageWrapper from "../../components/FullPage";
import Contacto from "../contact/contact";
import ClientsBrands from "../../components/Clients-brands";
import ProjectDetails2Dark from "../project-details2/project-details2-dark";
import Example from "../../components/About-us2";

const INICIO = () => {
/*   const navbarRef = React.useRef(null);
  React.useEffect(() => {
    var navbar = navbarRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]); */
  return (
    <DarkTheme>
      {/* <Navbar nr={navbarRef} /> */}
      <AboutHeader />
      <Example/>
    {/*   <CallToAction subBG /> */}
     {/*  <AboutIntro /> */}
     {/*  <Services4 withPadding withOutTitle /> */}
      {/* <VideoWithTestimonials /> */}
     {/*  <SkillsCircle subBG theme="dark" /> */}
      {/* <Maarquee/> */}
      {/* <ShowcasesOneCenter /> */}
      <Team1 />
     
     {/*  <MinimalArea /> */}
     {/*  <Numbers1/> */}
     {/*  <Testimonials1/> */}
     {/*  <ClientsBrands/> */}
{/*       <ProjectDetails2Dark/> */}
      <Clients1 theme="dark" />
      <Contacto/> {/* esto , tamaños de fuente, creo delicado en mobile */}
    </DarkTheme>
  );
};

export default INICIO;
