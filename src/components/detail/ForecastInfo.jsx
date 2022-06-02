import React from "react";
import { useHistory } from "react-router-dom";
// 引入工具函数
import { picMatch } from "../../utils";
// 引入图片资源
import BackArrow from "../../assets/pics/back-arrow.png";

function ForecastInfo({ data }) {
  const { temp, humidity, precip, windSpeed, text, obsTime } = data;

  // 初始化温度、湿度、风速数据
  const details = [
    {
      icon: require(`../../assets/pics/dark-humidity.png`),
      title: "humidity",
      value: `${precip}mm`,
    },
    {
      icon: require(`../../assets/pics/dark-rain.png`),
      title: "rain",
      value: `${humidity}%`,
    },
    {
      icon: require(`../../assets/pics/dark-wind.png`),
      title: "wind",
      value: `${windSpeed}km/h`,
    },
  ];

  // 匹配天气图标
  const picType = picMatch(text, obsTime)
  const picUrl = require(`../../assets/pics/${picType}.png`)

  // 点击事件-返回首页
  let history = useHistory();
  const handelClickToHome = () => {
    history.push("/");
  };

  return (
    <div className="forecast-info">
      <img
        src={BackArrow}
        className="arrow"
        alt=""
        onClick={handelClickToHome}
      />
      <img src={picUrl} className="weather-pic" alt="" />
      <div className="location">
        <p className="city">杭州市，</p>
        <p className="province">浙江省</p>
      </div>
      <div className="now-tmp">
        {temp}
        <sup>&deg;C</sup>
      </div>
      <div className="details">
        {details.map((item, index) => (
          <div key={index} className={"detail " + item.title}>
            <img className="icon" src={item.icon} alt="" />
            <div className="detail-value">{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ForecastInfo;
