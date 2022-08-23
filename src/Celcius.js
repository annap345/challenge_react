import React from "react";

export default function Celcius(props){
    return (<div>
        <h2 className="degree"><span id="main-degree">{Math.round(props.temp)} </span><span id="celcius">°C </span></h2>
    <p className="small-degree" id="small-degrees"><span id="degree-max">{Math.round(props.tempMax)}</span>°C ~ <span id="degree-min">{Math.round(props.tempMin)}</span>°C</p>
    </div>
    )

}