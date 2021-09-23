import React from "react";
import moment from "moment";
import styles from "./Main.module.css";

function Main(props) {
  let img_url;
  const today = moment().format("dddd");
  const weather = props.weather.weather;
  const temp_unfix = props.weather.temp - 273.15;
  const temp = temp_unfix.toFixed(2);
  const minTemp = (props.weather.minTemp - 273.15).toFixed(2);
  const maxTemp = (props.weather.maxTemp - 273.15).toFixed(2);

  switch (weather) {
    case "Clear":
      img_url = " http://openweathermap.org/img/wn/01d.png";
      break;
    case "Few clouds":
      img_url = " http://openweathermap.org/img/wn/02d.png";
      break;
    case "Clouds":
      img_url = " http://openweathermap.org/img/wn/02d.png";
      break;
    case "Scattered clouds":
      img_url = " http://openweathermap.org/img/wn/03d.png";
      break;
    case "Broken clouds":
      img_url = " http://openweathermap.org/img/wn/04d.png";
      break;
    case "Shower rain":
      img_url = " http://openweathermap.org/img/wn/09d.png";
      break;
    case "Rain":
      img_url = " http://openweathermap.org/img/wn/10d.png";
      break;
    case "Thunderstorm":
      img_url = " http://openweathermap.org/img/wn/11d.png";
      break;
    case "Snow":
      img_url = " http://openweathermap.org/img/wn/13d.png";
      break;
    case "Mist":
      img_url = " http://openweathermap.org/img/wn/50d.png";
      break;

    default:
      img_url = "";
  }

  return (
    <div className={styles.main}>
      <p> {today}</p>
      <p> {weather}</p>
      <img src={img_url} alt={weather}></img>
      <div className={styles.displayTemp}>
        <p className={styles.minTemp}>
          {minTemp}
          <span>&#176;</span>C
        </p>
        <p className={styles.maxTemp}>
          {maxTemp}
          <span>&#176;</span>C
        </p>
      </div>
    </div>
  );
}

export default Main;
