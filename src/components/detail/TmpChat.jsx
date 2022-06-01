import React, { useState } from "react";

function TmpChat({}) {
  return (
    <div className="tmp-chart">
      <div className="chart"></div>
      <div className="three-days">
        <div className="single-day">
          <div className="now-tmp">
            15
            <sup>&deg;C</sup>
          </div>
          <div className="now-date">
            11am
          </div>
        </div>
        <div className="single-day">
          <div className="now-tmp">
            15
            <sup>&deg;C</sup>
          </div>
          <div className="now-date">
            11am
          </div>
        </div>
        <div className="single-day">
          <div className="now-tmp">
            15
            <sup>&deg;C</sup>
          </div>
          <div className="now-date">
            11am
          </div>
        </div>
      </div>

    </div>
  );
}

export default TmpChat;
