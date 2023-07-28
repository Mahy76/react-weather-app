import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "react-icons-weather";
import WeatherIcon from "./WeatherIcon";
export default function Info(props) {
  return (
    <div className="overview">
      <h1>{props.data.city}</h1>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div>
              <h2>{Math.round(props.data.temp)}</h2>°C
            </div>
          </div>
          <div className="col-6">
            <div className="  weather-temperature">
              <div className="float-left">
                <WeatherIcon
                  code={props.data.icon}
                  alt={props.data.description}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <ul className="mt-3">
        <li>
          Last updated: <FormattedDate date={props.data.date} />
        </li>
        <li>
          <strong className="text-capitalize">
            Description: {props.data.description}
          </strong>
        </li>
      </ul>
      <ul>
        <li>Humidity: {props.data.humidity}%</li>
        <li>Wind: {props.data.wind}</li>
      </ul>
    </div>
  );
}