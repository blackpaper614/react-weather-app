import React, { useCallback, useState, useEffect } from "react";
import ForecastInfo from "../components/detail/ForecastInfo";
import FutureList from "../components/detail/FutureList";
import TmpChat from "../components/detail/TmpChat";
import "../style/detail.scss";

function Detail() {
  return (
    <div className="detail-content">
      <ForecastInfo/>
      <TmpChat />
      <FutureList />
    </div>
  );
}

export default Detail;
