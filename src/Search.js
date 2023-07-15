import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./Search.css";

export default function Search() {
  const [city, setCity] = useState("");
  const [temp, setTemp] = useState(null);

  function getCity(event) {
    setCity(event.target.value);
  }

  function showTemp(event) {
    event.preventDefault();
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3a94f3778290bfeee61278505dbbe51d&units=metric`;

    axios.get(url).then(function (response) {
      setTemp(response.data);
    });
  }

  return (
    <div className="container">
      <div className="kinky-weather-wrapper">
        <div className="kinky-weather">
          {temp && temp.weather && (
            <div className="overview">
              <h1>{temp.name}</h1>
              <ul>
                <li>Last updated: {new Date().toLocaleString()}</li>
                <li>{temp.weather[0].description}</li>
              </ul>
            </div>
          )}

          <div className="row">
            <div className="col-6">
              {temp && temp.weather && (
                <div className="d-flex temp-image weather-temperature">
                  <img
                    src={`http://openweathermap.org/img/wn/${temp.weather[0].icon}.png`}
                    alt="Weather Icon"
                  />
                  <div className="d-flex">
                    <strong>{Math.round(temp.main.temp)}°C</strong>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="search">
            <form className="mb-3" onSubmit={showTemp}>
              <div className="row">
                <div className="col-9">
                  <input
                    type="search"
                    id="search"
                    placeholder="Type a city..."
                    className="form-control"
                    autoComplete="off"
                    onChange={getCity}
                  />
                </div>
                <div className="col-3">
                  <button
                    type="submit"
                    value="search"
                    className="btn btn-primary w-100"
                  >
                    Search
                  </button>
                </div>
              </div>
            </form>

            {temp && temp.weather && (
              <ul>
                <li>Humidity: {temp.main.humidity}%</li>
                <li>Wind: {temp.wind.speed}</li>
              </ul>
            )}

            <small>
              <a
                href="https://github.com/Mahy76/kinky-weather"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open-source code
              </a>{" "}
              by Mahsa Nosrati
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}
