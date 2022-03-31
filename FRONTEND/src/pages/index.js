import React from "react";
import Footer from '../components/Footer';
import DarkTheme from "../layouts/Dark";
import NavbarFullMenu from "../components/Navbar-full-menu/navbar-full-menu";
import INICIO from "./about/about-dark";




export default function Home() {
  return (
    <DarkTheme>
      <NavbarFullMenu />
      <INICIO/>
      <Footer/>
    </DarkTheme>  
  )
}
