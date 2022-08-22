import axios from "axios";
import React from "react";

export default function Forecast(props){

    function getResponse(response){
        console.log(response.data)
    }
    
    let lat = props.coordin.lat;
    let lon = props.coordin.lon; 
    let key = 'd2e3511352e3ff24514830ca0f6b94b4';
    let url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}&units=metric`
    axios.get(url).then(getResponse)

    
    return   <div className="forecast">
    <div className="row align-items-center">
       <div className="col">
            <h3 className="day" id="day-one">W</h3>
             <div><p className="degree" id="first-day">19°</p></div>
        </div>
        <div className="col">
            <h3 className="day" id="day-two">Th</h3>
            <div ><p className="degree"id="second-day">14°</p></div>
        </div>
        <div className="col">
            <h3 className="day" id="day-three">F</h3>
             <div ><p className="degree"id="third-day">17°</p></div>
        </div>
         <div className="col">
            <h3 className="day" id="day-four">St</h3>
             <div ><p className="degree"id="fourth-day">23°</p></div>
        </div>
       <div className="col">
            <h3 className="day" id="day-five">S</h3>
             <div><p className="degree" id="fifth-day">18°</p></div>
       </div>
  </div>
</div>

}