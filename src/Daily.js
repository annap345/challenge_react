import React from "react";
import Icon from "./Icon";

export default function Daily(props){
    let days = ['Sn', 'M', 'T', 'Wd', 'Th', 'Fr', 'St']

function firstDay() {
    let date = new Date(props.data.daily[1].dt * 1000);
    let day = date.getDay();
    return days[day]
}

function secondDay() {
    let date = new Date(props.data.daily[2].dt * 1000);
    let day = date.getDay();
    return days[day]
}

function thirdDay() {
    let date = new Date(props.data.daily[3].dt * 1000);
    let day = date.getDay();
    return days[day]
}

function fourthDay() {
    let date = new Date(props.data.daily[4].dt * 1000);
    let day = date.getDay();
    return days[day]
}

function fifthDay() {
    let date = new Date(props.data.daily[5].dt * 1000);
    let day = date.getDay();
    return days[day]
}

    return   <div className="forecast">
        <div className="row align-items-center">
           <div className="col">
                <h3 className="day" id="day-one">{firstDay()}</h3>
                 <div><p className="degree" id="first-day">{Math.round(props.data.daily[1].temp.day)}°</p></div>
                 <Icon switch={props.data.daily[1].weather[0].main}/>
            </div>
            <div className="col">
                <h3 className="day" id="day-two">{secondDay()}</h3>
                <div ><p className="degree"id="second-day">{Math.round(props.data.daily[2].temp.day)}°</p>
                <Icon switch={props.data.daily[2].weather[0].main}/></div>
            </div>
            <div className="col">
                <h3 className="day" id="day-three">{thirdDay()}</h3>
                 <div ><p className="degree"id="third-day">{Math.round(props.data.daily[3].temp.day)}°</p>
                 <Icon switch={props.data.daily[3].weather[0].main}/></div>
            </div>
             <div className="col">
                <h3 className="day" id="day-four">{fourthDay()}</h3>
                 <div ><p className="degree"id="fourth-day">{Math.round(props.data.daily[4].temp.day)}°</p>
                 <Icon switch={props.data.daily[4].weather[0].main}/></div>
            </div>
           <div className="col">
                <h3 className="day" id="day-five">{fifthDay()}</h3>
                 <div><p className="degree" id="fifth-day">{Math.round(props.data.daily[5].temp.day)}°</p>
                 <Icon switch={props.data.daily[5].weather[0].main}/></div>
           </div>
      </div>
    </div>
}