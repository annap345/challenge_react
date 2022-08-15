import React, {useState} from "react";

export default function Celcius(props){
const [def, setDefault] = useState("C");

function fahr(event){
    event.preventDefault();
    setDefault("F")
}

function cel(event){
    event.preventDefault();
    setDefault("C")
}

if (def === "C") {
    return (<div>
        <h2 className="degree"><span id="main-degree">{Math.round(props.temp)} </span>°C /<a id="fahrenheit" href="/" onClick={fahr}>°F</a></h2>
    <p className="small-degree" id="small-degrees"><span id="degree-max">{Math.round(props.tempMax)}</span>°C ~ <span id="degree-min">{Math.round(props.tempMin)}</span>°C</p>
    </div>
    )
} else {
    let setFahr = Math.round(props.temp * 9/5) +32;
    let setFahrMax = Math.round(props.tempMax * 9/5)+32;
    let setFahrMin = Math.round(props.tempMin * 9/5)+32;
    return (<div>
        <h2 className="degree"><span id="main-degree">{setFahr} </span><a href="/" onClick={cel}>°C </a>/°F</h2>
    <p className="small-degree" id="small-degrees"><span id="degree-max">{Math.round(setFahrMax)}</span>°F ~ <span id="degree-min">{setFahrMin}</span>°F</p>
    </div>
    )
 } 
}