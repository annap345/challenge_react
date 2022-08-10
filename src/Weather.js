import React, { useState } from "react";
import "./Weather.css";
import "bootstrap";
import axios from "axios";
import Dates from "./Dates";

export default function Weather() {
  let [ready, setReady] = useState(false);
  let [dataw, setData] = useState({});
  const [city, newCity] = useState("Kyiv");

  function searching() {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d2e3511352e3ff24514830ca0f6b94b4&units=metric`;
    axios.get(url).then(searchWeather);
  }

  function searchWeather(response) {
    console.log(response.data);

    setData({
      temp: response.data.main.temp,
      min: response.data.main.temp_min,
      max: response.data.main.temp_max,
      weath: response.data.weather[0].description,
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
    });
    setReady(true);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searching();
  }

  function nowCity(event) {
    newCity(event.target.value);
  }

  if (ready) {
    return (
      <div>
        <h1 className="heading">Weather</h1>
        <div className="app">
          <div className="container">
            <span className="input-search" id="search">
              <form id="search-form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Enter a city"
                  id="search-input"
                  onBlur={nowCity}
                />
                <input type="submit" value="search" className="submit" />
              </form>
            </span>
            <div className="date">
              <p>
                <Dates dateNew={dataw.date} />
              </p>
            </div>
            <div className="row align-items-start main-forecast">
              <div className="col-1 city">
                <h2 id="main-city">{city}</h2>
                <div id="main-weather">
                  <i className="fa-solid fa-sun sun"></i>
                </div>
              </div>
              <div className="col-1 main">
                <h2 className="degree">
                  <span id="main-degree">{Math.round(dataw.temp)}</span>
                  <span id="celcius">°C </span> /<span id="fahrenheit">°F</span>
                </h2>
                <p className="small-degree" id="small-degrees">
                  <span id="degree-max">{Math.round(dataw.max)}</span>°C ~{" "}
                  <span id="degree-min">{Math.round(dataw.min)}</span>°C
                </p>
              </div>
            </div>
          </div>
          <div className="more">
            <p className="weather" id="visibility">
              {dataw.weath}
            </p>
            <p className="wind" id="wind-speed">
              wind: {Math.round(dataw.wind)} km/h
            </p>
          </div>
          <div className="forecast">
            <div className="row align-items-center">
              <div className="col">
                <h3 className="day" id="day-one">
                  W
                </h3>
                <div>
                  <p className="degree" id="first-day">
                    19°
                  </p>
                </div>
                <span id="weather-one">
                  <i className="fa-solid fa-sun sun"></i>
                </span>
              </div>
              <div className="col">
                <h3 className="day" id="day-two">
                  Th
                </h3>
                <div>
                  <p className="degree" id="second-day">
                    14°
                  </p>
                </div>
                <span id="weather-two">
                  <i className="fa-solid fa-cloud-sun cloud"></i>
                </span>
              </div>
              <div className="col">
                <h3 className="day" id="day-three">
                  F
                </h3>
                <div>
                  <p className="degree" id="third-day">
                    17°
                  </p>
                </div>
                <span id="weather-three">
                  <i className="fa-solid fa-cloud-rain rain"></i>
                </span>
              </div>
              <div className="col">
                <h3 className="day" id="day-four">
                  St
                </h3>
                <div>
                  <p className="degree" id="fourth-day">
                    23°
                  </p>
                </div>
                <span id="weather-four">
                  <i className="fa-solid fa-cloud-rain rain"></i>
                </span>
              </div>
              <div className="col">
                <h3 className="day" id="day-five">
                  S
                </h3>
                <div>
                  <p className="degree" id="fifth-day">
                    18°
                  </p>
                </div>
                <span id="weather-five">
                  <i className="fa-solid fa-cloud-sun cloud"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="credit">
          <p>
            coded by Anna Popovych <br />
            <a
              href="https://github.com/annap345/weather-app"
              target="_blank"
              rel="noreferrer"
            >
              Code on GitHub
            </a>
          </p>
        </div>
        <script src="src/script.js"></script>
      </div>
    );
  } else {
    searching();
    return "Loading...";
  }
}
