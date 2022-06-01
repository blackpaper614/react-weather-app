import React, { useCallback, useState, useEffect } from "react";
import Header from "../components/Header";
import WeatherPad from "../components/WeatherPad";
import MenuBar from "../components/MenuBar";
import "../style/main.scss";

function MainPage() {
  return (
    <div className="main-content">
      <Header/>
      <WeatherPad />
      <MenuBar />
    </div>
  );
}

export default MainPage;
