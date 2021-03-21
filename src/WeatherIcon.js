import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  const iconlist = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03d": "PARTLY_CLOUDY_DAY",
    "03n": "PARTLY_CLOUDY_NIGHT",
    "04d": "CLOUDY",
    "04n": "CLOUDY",
    "05d": "RAIN",
    "05n": "RAIN",
    "06d": "RAIN",
    "06n": "RAIN",
    "07d": "RAIN",
    "07n": "RAIN",
    "08d": "RAIN",
    "08n": "RAIN",
    "09d": "RAIN",
    "09n": "RAIN",
    "10d": "RAIN",
    "10n": "RAIN",
    "11d": "RAIN",
    "11n": "RAIN",
    "13d": "SNOW",
    "13n": "SNOW",
    "50d": "FOG",
    "50n": "FOG"
  };

  return (
    <ReactAnimatedWeather
      icon={iconlist[props.code]}
      color="blue"
      size={45}
      animated={true}
    />
  );
}