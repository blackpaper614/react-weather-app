import React from "react";
// 引入图片资源
import LogoImg from "../assets/pics/logo.png";

function Header() {
  return (
    <div className="header">
      <img src={LogoImg} className="app-logo" alt="" />
    </div>
  );
}

export default Header;
