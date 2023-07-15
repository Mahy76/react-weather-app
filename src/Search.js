import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./Search.css";

export default function Search() {
  const [city, setCity] = useState("");
  const [temp, setTemp] = useState(null);

  function handleInputChange(event) {
    setCity(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3a94f3778290bfeee61278505dbbe51d&units=metric`;

    axios
      .get(url)
      .then(function (response) {
        setTemp(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.error("Error fetching weather data:", error);
      });
  }

  return (
    <div className="container">
      <div className="kinky-weather-wrapper">
        <div className="kinky-weather">
          <div className="search">
            <form className="mb-3" onSubmit={handleFormSubmit}>
              <div className="row">
                <div className="col-9">
                  <input
                    type="search"
                    id="search"
                    placeholder="Type a city..."
                    className="form-control"
                    autoComplete="off"
                    value={city}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-3">
                  <button
                    type="submit"
                    value="search"
                    className="btn btn-info w-100"
                  >
                    Search
                  </button>
                </div>
              </div>
            </form>
            <div className="overview">
              <h1>{city}</h1>
              <div className="container">
                <div className="row">
                  <div className="col-6">
                    <div>
                      <h2>{Math.round(temp.main.temp)}</h2>°C
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex  weather-temperature">
                      {temp.weather[0] && (
                        <img
                          src={`http://openweathermap.org/img/wn/${temp.weather[0].icon}.png`}
                          alt="Weather Icon"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <ul className="mt-3">
                <li>Last updated: {new Date().toLocaleString()}</li>
                <li>
                  <strong>Description: {temp.weather[0].description}</strong>
                </li>
              </ul>
              <ul>
                <li>Humidity: {temp.main.humidity}%</li>
                <li>Wind: {temp.wind?.speed}</li>
              </ul>
            </div>
          </div>
        </div>
        <small>
          <a
            href="https://github.com/Mahy76/kinky-weather"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-source code
          </a>
          by Mahsa Nosrati
        </small>
      </div>
    </div>
  );
}
