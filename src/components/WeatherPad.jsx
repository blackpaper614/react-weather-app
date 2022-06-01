import React, { useState } from "react";
import {Link} from "react-router-dom";


const details = [
  {
    icon: require(`../assets/pics/light-humidity.png`),
    title: "降水量",
    value: "6%",
  },
  {
    icon: require(`../assets/pics/light-rain.png`),
    title: "湿度",
    value: "90%"
  },
  {
    icon: require(`../assets/pics/light-wind.png`),
    title: "风速",
    value: "19km/h"
  }
];
function WeatherPad({}) {
  return (
    <div className="weather-pad">
      <div className="weather-info">
        <img className="weather-icon" src={require('../assets/pics/day-peace.png')} alt=""/>
        <div className="info-wrap">
          <p className="location">杭州市, 浙江省</p>
          <div className="info-content">
            <div className="tmp-content">
              <div className="now-tmp">
                15
                <sup>&deg;C</sup>
              </div>
              <div className="now-date">
                周日，11am
              </div>
            </div>
            <div className="windy-cloudy">
              <div className="windy">强风</div>
              <div className="cloudy">多云</div>
            </div>
          </div>
        </div>
        <Link to="/detail" className="detail-link">详情</Link>
      </div>
      <div className="details">
        {details.map((item, index) => (
          <div key={index} className="detail">
            <img className="icon" src={item.icon} />
            <div className="detail-title">{item.title}</div>
            <div className="detail-value">{item.value}</div>          
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeatherPad;