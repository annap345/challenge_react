import React from "react";
import "./Weather.css";
import "bootstrap";

export default function Weather() {
  return (
    <body>
      <h1 className="heading">Weather</h1>
      <div className="app">
        <div className="container">
          <p className="input-search" id="search">
            <form id="search-form">
              <input type="text" placeholder="Enter a city" id="search-input" />
              <input type="submit" value="search" className="submit" />
            </form>
          </p>
          <div className="row align-items-start main-forecast">
            <div className="col-1 city">
              <h2 id="main-city">Kyiv</h2>
              <div id="main-weather">
                <i className="fa-solid fa-sun sun"></i>
              </div>
            </div>
            <div className="col-1 main">
              <h2 className="degree">
                <span id="main-degree">16 </span>
                <span id="celcius">°C </span> /<span id="fahrenheit">°F</span>
              </h2>
              <p className="small-degree" id="small-degrees">
                <span id="degree-max">20</span>°C ~{" "}
                <span id="degree-min">13</span>°C
              </p>
            </div>
          </div>
        </div>
        <div className="more">
          <p className="weather" id="visibility">
            sunny
          </p>
          <p className="wind" id="wind-speed">
            wind: 20 km/h
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
    </body>
  );
}
