import React, { useState } from "react";
export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsuis");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsuis(event) {
    event.preventDefault();
    setUnit("celsuis");
  }
  function fahrenheit() {
    return (props.celsuis * 9) / 5 + 32;
  }
  if (unit === "celsuis") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          °C {""} <a href="/" onClick={showFahrenheit}></a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(fahrenheit())}</span>
        <span className="unit">
          <a href="/" onClick={showCelsuis}>
            °C
          </a>
          {""}
          °F{" "}
        </span>
      </div>
    );
  }
}
