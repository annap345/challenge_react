import React, { useState } from "react";
import "./Weather.css";
import "bootstrap";
import axios from "axios";
import Dates from "./Dates";
import Icon from "./Icon";
import Celcius from "./Celcius"
import Forecast from "./Forecast";

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
      weathIc:response.data.weather[0].main,
      coordinates: response.data.coord
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
                  autoFocus="on"
                onChange={nowCity}
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
                  <Icon image={dataw.weathIc}/>
                </div>
              </div>
              <div className="col-1 main">
                  <Celcius temp={dataw.temp} tempMin={dataw.min} tempMax={dataw.max}/>
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
          <Forecast coordin={dataw.coordinates} />
        <div className="credit">
          <p>
            coded by Anna Popovych <br />
            <a
              href="https://github.com/annap345/challenge_react"
              target="_blank"
              rel="noreferrer"
            >
              Code on GitHub
            </a>
          </p>
        </div>
        <script src="src/script.js"></script>
      </div>
      </div>
    );
  } else {
    searching();
    return "Loading...";
  }
}
