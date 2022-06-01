import React, { useState } from "react";
import Sun from '../../assets/pics/day-peace.png';
function FutureList({}) {
  return (
    <div className="future-list">
      <div className="single-day">
        <div className="week-day">周一</div>
        <img src={Sun} className="weather-pic" alt="" />
        <div className="tmp-wrap">
        <div className="tmp high">
            15
            <sup>&deg;C</sup>           
          </div>
          <div className="tmp low">
            12
            <sup>&deg;C</sup>
          </div>
        </div>
      </div>
      <div className="single-day">
        <div className="week-day">周一</div>
        <img src={Sun} className="weather-pic" alt="" />
        <div className="tmp-wrap">
          <div className="tmp high">
            15
            <sup>&deg;C</sup>           
          </div>
          <div className="tmp low">
            12
            <sup>&deg;C</sup>
          </div>
        </div>
      </div>
      <div className="single-day">
        <div className="week-day">周一</div>
        <img src={Sun} className="weather-pic" alt="" />
        <div className="tmp-wrap">
          <div className="tmp high">
            15
            <sup>&deg;C</sup>           
          </div>
          <div className="tmp low">
            12
            <sup>&deg;C</sup>
          </div>
        </div>
      </div>
      <div className="single-day">
        <div className="week-day">周一</div>
        <img src={Sun} className="weather-pic" alt="" />
        <div className="tmp-wrap">
          <div className="tmp high">
            15
            <sup>&deg;C</sup>           
          </div>
          <div className="tmp low">
            12
            <sup>&deg;C</sup>
          </div>
        </div>
      </div>
      <div className="single-day">
        <div className="week-day">周一</div>
        <img src={Sun} className="weather-pic" alt="" />
        <div className="tmp-wrap">
          <div className="tmp high">
            15
            <sup>&deg;C</sup>           
          </div>
          <div className="tmp low">
            12
            <sup>&deg;C</sup>
          </div>
        </div>
      </div>

    </div>
  );
}

export default FutureList;