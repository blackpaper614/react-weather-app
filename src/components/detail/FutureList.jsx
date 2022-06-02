import React from "react";
// 引入工具函数
import { picMatch } from "../../utils";

function FutureList({ data }) {
  const weekday = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
  // 初始化未来天气列表
  const list = data.map(({ fxDate, tempMin, tempMax, textDay }) => {
    let day = new Date(fxDate).getDay();
    // 日期格式化
    day = weekday[day];
    // 匹配天气图标，默认选取白天图标
    const dayPic = picMatch(textDay,'', 2)
    const picUrl = require(`../../assets/pics/${dayPic}.png`)
    return {
      day,
      tempMin,
      tempMax,
      picUrl
    };
  });
  return (
    <div className="future-list">
      {/* 遍历天气列表 */}
      {list.map((item, index) => (
        <div className="single-day" key={index}>
          <div className="week-day">{item.day}</div>
          <img src={item.picUrl} className="weather-pic" alt="" />
          <div className="tmp-wrap">
            <div className="tmp high">
              {item.tempMax}
              <sup>&deg;C</sup>
            </div>
            <div className="tmp low">
              {item.tempMin}
              <sup>&deg;C</sup>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FutureList;
