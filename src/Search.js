import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import WeatherIcon from "react-icons-weather";
import FormattedDate from "./FormattedDate";
import "./Search.css";

export default function Search(props) {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState({ ready: false });

  function setTemp(response) {
    setWeatherData({
      ready: true,
      data: new DataTransfer(response.data.dt * 1000),
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      iconUrl: response.data,
    });
  }
  function handleInputChange(event) {
    setCity(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
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
                      value={weatherData.city}
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
              {temp && (
                <div className="overview">
                  <h1>{weatherData.city}</h1>
                  <div className="container">
                    <div className="row">
                      <div className="col-3">
                        <div>
                          <h2>{Math.round(weatherData.temp)}</h2>°C
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="  weather-temperature">
                          <div>
                            <WeatherIcon
                              name="owm"
                              iconId={weatherData.id}
                              flip="horizontal"
                              rotate="90"
                              className="weather-icon"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <ul className="mt-3">
                    <li>
                      Last updated: <FormattedDate date={weatherData.date} />
                    </li>
                    <li>
                      <strong className="text-capitalize">
                        Description: {weatherData.description}
                      </strong>
                    </li>
                  </ul>
                  <ul>
                    <li>Humidity: {weatherData.humidity}%</li>
                    <li>Wind: {weatherData.wind}</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "3a94f3778290bfeee61278505dbbe51";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}d&units=metric`;

    axios.get(url).then(setTemp);

    return "Loading...";
  }
}
