import axios from "axios";
import React, { useState } from "react";
import DailyForecast from "./DailyForecast";


export default function Forecast(props) {
const [now, setNow]= useState(false);
let [forecasted, setForecast] = useState({})

   
function forecasting(response){
    setNow(true)
    console.log(response.data);

    setForecast({
        first: response.data.list[1].main.temp,
        second: response.data.list[2].main.temp,
        third: response.data.list[3].main.temp,
        fourth: response.data.list[4].main.temp,
        fifth: response.data.list[5].main.temp,
        iconF:response.data.list[1].weather[0].main,
        iconS:response.data.list[2].weather[0].main,
        iconT:response.data.list[3].weather[0].main,
        iconFo:response.data.list[4].weather[0].main,
        iconFi:response.data.list[5].weather[0].main,
        dateF: response.data.list[0].dt,
        dateS: response.data.list[1].dt
    })
}




function forecastSearch () {
let forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.cityNow}&appid=d2e3511352e3ff24514830ca0f6b94b4&units=metric`;
axios.get(forecastUrl).then(forecasting);
}


if (now) 
{return <div className="forecast">
    <DailyForecast data={forecasted} />
</div>}
else {
    forecastSearch();
    return "Loading"
}


}