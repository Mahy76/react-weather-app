import React from "react";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";
export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div classsName="row ">
        <div classNAme="col">
          <div className="WeatherForecast-day"> Thu </div>
          <WeatherIcon code="01d" size={36} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">19°</span>
            <span className="WeatherForecast-temperature-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
