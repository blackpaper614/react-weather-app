import React, { useCallback, useState, useEffect } from "react";
// 引入组件
import Header from "../components/Header";
import WeatherPad from "../components/WeatherPad";
import MenuBar from "../components/MenuBar";
// 引入天气api
import fetchWeather from "../api/fetchWeather";
// 引入样式
import "../style/main.scss";

function MainPage() {
  const [weather, setWeather] = useState("");

  // 先从缓存中读取当前天气信息，然后接口请求覆盖
  useEffect(() => {
    let storage = localStorage.getItem("CurrentWeather");
    storage = JSON.parse(storage);
    if (storage) setWeather({ ...storage });
    setTimeout(() => fetchData(), 0);
  }, []);

  // 获取当前天气信息
  const fetchData = useCallback(async () => {
    const data = await fetchWeather();
    if (data && data.now) {
      setWeather({ ...data.now });
      // 返回数据存入缓存
      localStorage.setItem("CurrentWeather", JSON.stringify(data.now));
    }
  });

  return (
    <div className="main-content">
      <Header />
      {weather ? <WeatherPad data={weather} /> : <></>}
      <MenuBar />
    </div>
  );
}

export default MainPage;
