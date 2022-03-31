import React from "react";
import appData from "../../data/app.json";

const MenuBackground = () => {
  return (
    <img className="isologofloat" src={`${appData.isoLogo}`} alt="logo" />

  );
};

export default MenuBackground;
