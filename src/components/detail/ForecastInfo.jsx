import React, { useState } from "react";
import BackArrow from '../../assets/pics/back-arrow.png';
import Sun from '../../assets/pics/day-peace.png';
const details = [
  {
    icon: require(`../../assets/pics/dark-rain.png`),
    title: 'rain',
    value: "90%"
  },
  {
    icon: require(`../../assets/pics/dark-humidity.png`),
    title: 'humidity',
    value: "6%",
  },
  {
    icon: require(`../../assets/pics/dark-wind.png`),
    title: 'wind',
    value: "19km/h"
  }
];
function ForecastInfo({}) {
  return (
    <div className="forecast-info">
      <img src={BackArrow} className="arrow" alt="" />
      <img src={Sun} className="weather-pic" alt="" />
      <div className="location">
          <p className="city">杭州市，</p>
          <p className="province">浙江省</p>
        </div>
      <div className="now-tmp">
        15
        <sup>&deg;C</sup>
      </div>
      <div className="details">
        {details.map((item, index) => (
          <div key={index} className={"detail " + item.title}>
            <img className="icon" src={item.icon} />
            <div className="detail-value">{item.value}</div>          
          </div>
        ))}
      </div>
    </div>
  );
}

export default ForecastInfo;
