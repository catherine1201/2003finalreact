import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [ city, setCity ] = useState(props.defaultCity);
  const [ weatherData, setWeatherData ] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      icon: response.data.weather[0].icon,
      temperature: response.data.main.temp,
      description: response.data.weather[ 0 ].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed
    });
  }

  function search() {
    const apiKey = "33a27a2db7d3c694b8bdd5af74a470fc";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleChange(event) {
    setCity(event.target.value);
}

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit = {handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input tupe="search" placeholder="Enter a city" className="SearchForm" autoFocus="on" onChange ={handleChange}>
              </input>
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn w-100">
              </input>
            </div>
          </div>
        </form>
        <WeatherInfo info={weatherData}/>
      </div>
    )
  } else {
    
    search();
    return (
    
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input tupe="search" placeholder="Enter a city" className="SearchForm" autoFocus="on" onChange={handleChange}>
              </input>
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn w-100">
              </input>
            </div>
          </div>
        </form>
        <WeatherInfo info={weatherData} />
      </div>
    );
  }
}