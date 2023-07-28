import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import WeatherInfo from "./Info";
import "./Search.css";

export default function Search(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function setTemp(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      data: new DataTransfer(response.data.dt * 1000),
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
    });
  }
  function search() {
    const apiKey = "3a94f3778290bfeee61278505dbbe51";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}d&units=metric`;

    axios.get(url).then(setTemp);
  }
  function handleFormSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleInputChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
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
              <WeatherInfo data={weatherData} />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
