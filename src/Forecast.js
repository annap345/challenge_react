import axios from "axios";
import React, { useState, useEffect } from "react";
import Daily from "./Daily";

export default function Forecast(props){
 let [loaded, setLoaded]=useState(false)
 let [forecast, setForecast]= useState(null)

useEffect(() => {setLoaded(false)}, [props.coordin])



    function getResponse(response){
        console.log(response.data)
        setForecast(response.data)
        setLoaded(true)
    }

    if(loaded){ 
        return <Daily data={forecast}/>
} else {
let lat = props.coordin.lat;
let lon = props.coordin.lon; 
let key = 'd2e3511352e3ff24514830ca0f6b94b4';
let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly&appid=${key}&units=metric`
axios.get(url).then(getResponse)
return null
}


}