import React, { useState } from "react";
import axios from "axios";
export default function Search() {
  let [city, setCity] = useState("");
  let [temp, setTemp] = useState("");

  function getCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }
  function showTemp(event) {
    event.preventDefault();
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3a94f3778290bfeee61278505dbbe51d&units=metric`;
    axios.get(url).then(function (response) {
      setTemp(response.data);
      console.log(response.data);
    });
  }

  return (
    <div className="search">
      <form onSubmit={showTemp}>
        <label htmlFor="search">Search for a city:</label>
        <br />
        <input type="search" id="search" onChange={getCity} />
        <button type="submit">Search</button>
      </form>
      <ul>
        {temp && temp.weather && (
          <div>
            <li>Temperature: {Math.round(temp.main.temp)}°C</li>
            <li>Description: {temp.weather[0].description}</li>

            <li>Humidity: {temp.main.humidity}%</li>
            <li>Wind: {temp.wind.speed}</li>

            <img
              src={`http://openweathermap.org/img/wn/${temp.weather[0].icon}.png`}
              alt="Weather Icon"
            />
          </div>
        )}
      </ul>
    </div>
  );
}
