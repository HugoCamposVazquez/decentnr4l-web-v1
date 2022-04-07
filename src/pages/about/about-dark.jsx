import React from "react";
import AboutHeader from "../../components/About-header";
import VideoWithTestimonials from "../../components/Video-with-testimonials";
import DarkTheme from "../../layouts/Dark";
import NavbarFullMenu from "../../components/Navbar-full-menu/navbar-full-menu";
import Contacto from "../contact/contact";
import Equipo from "../../components/team";
import Trabajos from "../../components/trabajos";
import Competencias from "../../components/competencias";

const INICIO = () => {
  return (
    <DarkTheme>
      <AboutHeader />
      <Competencias/>
      <Trabajos/>
      <Equipo/>
      <Contacto/> {/* esto , tamaños de fuente, creo delicado en mobile */}
    </DarkTheme>
  );
};

export default INICIO;
