import React from "react";
import Calendar from "./Calendar";
import WeatherIcon from "./WeatherIcon";
import WeatherUnit from "./WeatherUnit";


export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.info.city}</h1>
      <ul>
        <li className="date">
          <Calendar date={props.info.date} />
        </li>
        <li className="description">{props.info.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <div className="float-left">
            <WeatherIcon code={props.info.icon} />  
            </div>
           
            <div className="float-left">
              <WeatherUnit celsius={props.info.temperature}/>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul className ="prediction">
            <li>Humidity: {props.info.humidity} % </li>
            <li>Wind: {Math.round(props.info.wind)} km/h</li>
          </ul>
        </div>
      </div>
      </div>
  );
}