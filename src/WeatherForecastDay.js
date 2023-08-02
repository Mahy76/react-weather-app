import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  const { minTemp, maxTemp, data } = props.data;

  function maxTemperature() {
    return `${Math.round(maxTemp)}°`;
  }

  function minTemperature() {
    return `${Math.round(minTemp)}°`;
  }

  function day() {
    const date = new Date(data[0].dt * 1000);
    const day = date.toLocaleDateString(undefined, { weekday: "short" });

    return day;
  }

  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
      <WeatherIcon code={data[0].weather[0].icon} size={36} />
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-max">
          {maxTemperature()}
        </span>
        <span className="WeatherForecast-temperature-min">
          {minTemperature()}
        </span>
      </div>
    </div>
  );
}
