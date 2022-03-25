import React from "react";
import AboutHeader from "../../components/About-header";
import AboutIntro from "../../components/About-intro";
import CallToAction from "../../components/Call-to-action";
import Clients1 from "../../components/Clients1";
import Footer from "../../components/Footer";
import MinimalArea from "../../components/Minimal-area";
import Navbar from "../../components/Navbar";
import Services4 from "../../components/Services4";
import SkillsCircle from "../../components/Skills-circle";
import Team1 from "../../components/Team1";
import VideoWithTestimonials from "../../components/Video-with-testimonials";
import DarkTheme from "../../layouts/Dark";
import NavbarFullMenu from "../../components/Navbar-full-menu/navbar-full-menu";
import ShowcasesOneCenter from "../../components/Showcases-one-center";

const AboutDark = () => {
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
      <NavbarFullMenu />
      <AboutHeader />
      <CallToAction subBG />
      <AboutIntro />
      <Services4 withPadding withOutTitle />
      <VideoWithTestimonials />
      <SkillsCircle subBG theme="dark" />
      <ShowcasesOneCenter />
      <Team1 />
      <MinimalArea />
      <Clients1 theme="dark" />
      <Footer />
    </DarkTheme>
  );
};

export default AboutDark;
