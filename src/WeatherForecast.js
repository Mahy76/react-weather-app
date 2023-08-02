import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";
export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [dailyForecast, setDailyForecast] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoaded(false);
    setError(null);

    if (props.coordinates) {
      const apiKey = "e41f2813890986f64c4235b2e59d0608"; // Replace with your API key
      const longitude = props.coordinates.lon;
      const latitude = props.coordinates.lat;
      const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

      axios
        .get(apiUrl)
        .then((response) => {
          const forecastData = response.data.list;
          const dailyData = groupForecastByDay(forecastData);
          setDailyForecast(dailyData);
          setLoaded(true);
        })
        .catch((error) => {
          if (error.response && error.response.status === 404) {
            setError("Please enter a valid city name");
          } else {
            setError("An error occurred while fetching data");
          }
        });
    }
  }, [props.coordinates]);

  function groupForecastByDay(forecastData) {
    const groupedData = {};

    forecastData.forEach((item) => {
      const date = new Date(item.dt * 1000).toDateString();
      if (!groupedData[date]) {
        groupedData[date] = {
          minTemp: item.main.temp,
          maxTemp: item.main.temp,
          data: [item],
        };
      } else {
        const { minTemp, maxTemp } = groupedData[date];
        if (item.main.temp < minTemp) {
          groupedData[date].minTemp = item.main.temp;
        }
        if (item.main.temp > maxTemp) {
          groupedData[date].maxTemp = item.main.temp;
        }
        groupedData[date].data.push(item);
      }
    });

    return groupedData;
  }

  return (
    <div className="WeatherForecast">
      {error && <div className="error-message">Error: {error}</div>}
      {!loaded && !error && <div className="loading-message">Loading...</div>}
      {loaded && !error && (
        <div className="row">
          {Object.entries(dailyForecast).map(([date, data]) => (
            <div className="col" key={date}>
              <WeatherForecastDay data={data} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
