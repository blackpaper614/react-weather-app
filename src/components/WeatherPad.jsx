import React from "react";
import { Link } from "react-router-dom";
// 引入工具函数
import { picMatch } from "../utils";

// 组合时间格式为：”周三，11am“
const formatDate = (date) => {
  const weekday = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
  let now = new Date(date);
  let day = now.getDay();
  let hour = now.getHours();
  return weekday[day] + "," + (hour % 12) + (now.getHours() > 12 ? "pm" : "am");
};

// 初始化温度、湿度、风速数据
function WeatherPad({ data }) {
  const { temp, windDir, text, obsTime, humidity, precip, windSpeed } = data;
  const details = [
    {
      icon: require(`../assets/pics/light-humidity.png`),
      title: "降水量",
      value: `${precip}mm`,
    },
    {
      icon: require(`../assets/pics/light-rain.png`),
      title: "湿度",
      value: `${humidity}%`,
    },
    {
      icon: require(`../assets/pics/light-wind.png`),
      title: "风速",
      value: `${windSpeed}km/h`,
    },
  ];

  // 匹配当前天气图片
  const nowTime = formatDate(obsTime);
  const picType = picMatch(text, obsTime)
  const picUrl = require(`../assets/pics/${picType}.png`)
  return (
    <div className="weather-pad">
      {/* 首页-信息模块 */}
      <div className="weather-info">
        <img
          className="weather-icon"
          src={picUrl}
          alt=""
        />
        <div className="info-wrap">
          <p className="location">杭州市, 浙江省</p>
          <div className="info-content">
            <div className="tmp-content">
              <div className="now-tmp">
                {temp}
                <sup>&deg;C</sup>
              </div>
              <div className="now-date">{nowTime}</div>
            </div>
            <div className="windy-cloudy">
              <div className="windy">{windDir}</div>
              <div className="cloudy">{text}</div>
            </div>
          </div>
        </div>
        <Link to="/detail" className="detail-link">
          详情
        </Link>
      </div>
      {/* 首页-湿度、温度、风速 */}
      <div className="details">
        {details.map((item, index) => (
          <div key={index} className="detail">
            <img className="icon" src={item.icon} alt="" />
            <div className="detail-title">{item.title}</div>
            <div className="detail-value">{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeatherPad;
