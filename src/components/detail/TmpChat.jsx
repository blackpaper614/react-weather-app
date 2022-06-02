import React from "react";
// 引入echarts图片插件
import ReactEcharts from "echarts-for-react";
import "echarts/lib/chart/line";

function TmpChat({ data }) {
  let dateArray = [];
  let tempArray = [];

  // 初始化图表所需信息
  const weekday = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
  const list = data.map(({ fxDate, tempMin, tempMax }) => {
    let day = new Date(fxDate).getDay();
    day = weekday[day];
    let calTemp = Math.floor((+tempMin + +tempMax) / 2);
    dateArray.push(day);
    tempArray.push(calTemp);
    return {
      day,
      calTemp
    };
  });

  // 根据样式调整数据结构，使得图标symbol可以居中
  dateArray = ["", ...dateArray.slice(), ""];
  tempArray = [tempArray[0], ...tempArray.slice(), tempArray[2]];

  // 初始化echarts
  const option = {
    width: 375,
    height: 87,
    xAxis: {
      type: "category",
      boundaryGap: false,
      axisTick: { show: false },
      axisLine: { show: false },
      axisLabel: {
        textStyle: {
          color: "rgba(51, 40, 33, 0.5)",
          fontSize: 12,
        },
      },
      data: dateArray,
    },
    yAxis: {
      axisTick: { show: false },
      axisLine: { show: false },
      show: false,
    },
    splitLine: {
      show: false,
    },
    series: [
      {
        data: tempArray,
        type: "line",
        smooth: true,
        symbol: "none",
        areaStyle: {},
        itemStyle: {
          normal: {
            color: "rgba(233, 201, 57, 0.25)",
            lineStyle: {
              color: "#E9C939",
            },
          },
        },
      },
    ],
    grid: {
      top: "0px",
      left: "0px",
      right: "0px",
      bottom: "0px",
    },
  };
  return (
    <div className="tmp-chart">
      <div id="chart-days">
        <ReactEcharts option={option} />
      </div> 
      <div className="three-days">
        {list.map((item, index) => (
          <div className="single-day" key={index}>
            <div className="now-tmp">
              {item.calTemp}
              <sup>&deg;C</sup>
            </div>
            <div className="now-date">{item.day}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TmpChat;
