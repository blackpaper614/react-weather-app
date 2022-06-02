import React, { useCallback, useState, useEffect } from "react";
// 引入组件
import ForecastInfo from "../components/detail/ForecastInfo";
import FutureList from "../components/detail/FutureList";
import TmpChat from "../components/detail/TmpChat";
// 引入天气api
import fetchWeather from "../api/fetchWeather";
// 引入样式
import "../style/detail.scss";

function Detail() {
  const [DailyWeather, setDailyWeather] = useState("");
  const [CurrentWeather, setCurrentWeather] = useState("");

  // 从缓存中初始化当前天气信息
  useEffect(() => {
    let current = localStorage.getItem("CurrentWeather");
    current = JSON.parse(current);
    if (current) setCurrentWeather({ ...current });
    setTimeout(() => fetchForecast(), 0);
  }, []);

  // 请求未来三天天气列表
  const fetchForecast = useCallback(async () => {
    const data = await fetchWeather("3d");
    setDailyWeather(data.daily);
    if (data.daily)
      localStorage.setItem("DailyWeather", JSON.stringify(data.daily));
  });

  return (
    <div className="detail-content">
      {CurrentWeather ? <ForecastInfo data={CurrentWeather} /> : <></>}
      {DailyWeather ? <TmpChat data={DailyWeather} /> : <></>}
      {DailyWeather ? <FutureList data={DailyWeather} /> : <></>}
    </div>
  );
}

export default Detail;
