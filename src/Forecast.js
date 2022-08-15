import axios from "axios";
import React, { useState } from "react";
import Icon from "./Icon";

export default function Forecast(props) {
const [now, setNow]= useState(false);
let [forecasted, setForecast] = useState({})

let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];


    
function forecasting(response){
    setNow(true)
    console.log(response.data);

    setForecast({
        first: response.data.list[0].main.temp,
        second: response.data.list[1].main.temp,
        third: response.data.list[2].main.temp,
        fourth: response.data.list[3].main.temp,
        fifth: response.data.list[4].main.temp,
        iconF:response.data.list[0].weather[0].main,
        iconS:response.data.list[1].weather[0].main,
        iconT:response.data.list[2].weather[0].main,
        iconFo:response.data.list[3].weather[0].main,
        iconFi:response.data.list[4].weather[0].main,
    })
}


function forecastSearch () {
let forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.cityNow}&appid=d2e3511352e3ff24514830ca0f6b94b4&units=metric`;
axios.get(forecastUrl).then(forecasting);
}

if (now) 
{return <div className="forecast">
<div className="row align-items-center">
  <div className="col">
    <h3 className="day" id="day-one">
      
    </h3>
    <div>
      <p className="degree" id="first-day">
        {Math.round(forecasted.first)}°C
      </p>
    </div>
    <span id="weather-one">
      <Icon switch={forecasted.iconF}/>
    </span>
  </div>
  <div className="col">
    <h3 className="day" id="day-two">

    </h3>
    <div>
      <p className="degree" id="second-day">
      {Math.round(forecasted.second)}°C
      </p>
    </div>
    <span id="weather-two">
    <Icon switch={forecasted.iconS}/>
    </span>
  </div>
  <div className="col">
    <h3 className="day" id="day-three">

    </h3>
    <div>
      <p className="degree" id="third-day">
      {Math.round(forecasted.third)}°C
      </p>
    </div>
    <span id="weather-three">
    <Icon switch={forecasted.iconT}/>
    </span>
  </div>
  <div className="col">
    <h3 className="day" id="day-four">

    </h3>
    <div>
      <p className="degree" id="fourth-day">
      {Math.round(forecasted.fourth)}°C
      </p>
    </div>
    <span id="weather-four">
    <Icon switch={forecasted.iconFo}/>
    </span>
  </div>
  <div className="col">
    <h3 className="day" id="day-five">

    </h3>
    <div>
      <p className="degree" id="fifth-day">
      {Math.round(forecasted.fifth)}°C
      </p>
    </div>
    <span id="weather-five">
    <Icon switch={forecasted.iconFi}/>
    </span>
  </div>
</div>
</div>}
else {
    forecastSearch();
    return "Loading"
}


}