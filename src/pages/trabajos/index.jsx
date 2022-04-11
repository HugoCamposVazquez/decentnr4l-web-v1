import React from 'react'
import Trabajos from '../../components/trabajos'
import DarkTheme from "../../layouts/Dark";
import NavbarFullMenu from "../../components/Navbar-full-menu/navbar-full-menu";

function TrabajosGrid() {
  return (
    <DarkTheme>
        <NavbarFullMenu/>
        <br></br><br></br>
         <Trabajos/>
    </DarkTheme>     
  )
}

export default TrabajosGrid