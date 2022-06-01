import React, { useState } from "react";
import NavIcon from '../assets/pics/nav-icon.png';

function MenuBar({}) {
  return (
    <div className="menu-bar">
      <img src={NavIcon} className="nav-icon" alt="" />
    </div>
  );
}

export default MenuBar;