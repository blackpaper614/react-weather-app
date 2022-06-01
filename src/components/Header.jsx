import React, { useState } from "react";
import LogoImg from '../assets/pics/logo.png';

function Header({}) {
  return (
    <div className="header">
        <img src={LogoImg} className="app-logo" alt="" />
    </div>
  );
}

export default Header;
