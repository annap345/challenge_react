import React from "react";
import "./Weather.css";
import "bootstrap";

export default function Weather() {
  return (
    <body>
      <h1 class="heading">Weather</h1>
      <div class="app">
        <div class="container">
          <p class="input-search" id="search">
            <form id="search-form">
              <input type="text" placeholder="Enter a city" id="search-input" />
              <input type="submit" value="search" class="submit" />
            </form>
          </p>
          <div class="row align-items-start main-forecast">
            <div class="col-1 city">
              <h2 id="main-city">Kyiv</h2>
              <div id="main-weather">
                <i class="fa-solid fa-sun sun"></i>
              </div>
            </div>
            <div class="col-1 main">
              <h2 class="degree">
                <span id="main-degree">16 </span>
                <span id="celcius">°C </span> /<span id="fahrenheit">°F</span>
              </h2>
              <p class="small-degree" id="small-degrees">
                <span id="degree-max">20</span>°C ~{" "}
                <span id="degree-min">13</span>°C
              </p>
            </div>
          </div>
        </div>
        <div class="more">
          <p class="weather" id="visibility">
            sunny
          </p>
          <p class="wind" id="wind-speed">
            wind: 20 km/h
          </p>
        </div>
        <div class="forecast">
          <div class="row align-items-center">
            <div class="col">
              <h3 class="day" id="day-one">
                W
              </h3>
              <div>
                <p class="degree" id="first-day">
                  19°
                </p>
              </div>
              <span id="weather-one">
                <i class="fa-solid fa-sun sun"></i>
              </span>
            </div>
            <div class="col">
              <h3 class="day" id="day-two">
                Th
              </h3>
              <div>
                <p class="degree" id="second-day">
                  14°
                </p>
              </div>
              <span id="weather-two">
                <i class="fa-solid fa-cloud-sun cloud"></i>
              </span>
            </div>
            <div class="col">
              <h3 class="day" id="day-three">
                F
              </h3>
              <div>
                <p class="degree" id="third-day">
                  17°
                </p>
              </div>
              <span id="weather-three">
                <i class="fa-solid fa-cloud-rain rain"></i>
              </span>
            </div>
            <div class="col">
              <h3 class="day" id="day-four">
                St
              </h3>
              <div>
                <p class="degree" id="fourth-day">
                  23°
                </p>
              </div>
              <span id="weather-four">
                <i class="fa-solid fa-cloud-rain rain"></i>
              </span>
            </div>
            <div class="col">
              <h3 class="day" id="day-five">
                S
              </h3>
              <div>
                <p class="degree" id="fifth-day">
                  18°
                </p>
              </div>
              <span id="weather-five">
                <i class="fa-solid fa-cloud-sun cloud"></i>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="credit">
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
