import React from "react";
import Icon from "./Icon";

export default function DailyForecast(props){
    let dayss =['Sn', 'M', 'Tue','Wd', 'Th', 'Fr', 'St']

function dayFirst(){
    let dates = new Date (props.data.dateF * 1000);
    let day = dates.getDay()

   return dayss[day];
}




    return <><div className="row align-items-center">
        <div className="col">
        <h3 className="day" id="day-one">
{dayFirst()}
    </h3>
        <div>
            <p className="degree" id="first-day">
                {Math.round(props.data.first)}°C
            </p>
        </div>
        <span id="weather-one">
            <Icon switch={props.data.iconF} />
        </span>
    </div>
    <div className="col">
            <h3 className="day" id="day-two">
            {}
            </h3>
            <div>
                <p className="degree" id="second-day">
                    {Math.round(props.data.second)}°C
                </p>
            </div>
            <span id="weather-two">
                <Icon switch={props.data.iconS} />
            </span>
        </div><div className="col">
            <h3 className="day" id="day-three">
            {props.data.dateT}
            </h3>
            <div>
                <p className="degree" id="third-day">
                    {Math.round(props.data.third)}°C
                </p>
            </div>
            <span id="weather-three">
                <Icon switch={props.data.iconT} />
            </span>
        </div><div className="col">
            <h3 className="day" id="day-four">
            {props.data.dateFou}
            </h3>
            <div>
                <p className="degree" id="fourth-day">
                    {Math.round(props.data.fourth)}°C
                </p>
            </div>
            <span id="weather-four">
                <Icon switch={props.data.iconFo} />
            </span>
        </div><div className="col">
            <h3 className="day" id="day-five">
            {props.data.dateFr}
            </h3>
            <div>
                <p className="degree" id="fifth-day">
                    {Math.round(props.data.fifth)}°C
                </p>
            </div>
            <span id="weather-five">
                <Icon switch={props.data.iconFi} />
            </span></div>

            </div>
            </>
}