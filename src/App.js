import "./App.css";
import React, { useState, useEffect } from "react";
import Main from "./Main.js";

const apiKey = process.env.REACT_APP_API_KEY;
function App() {
  const [city, setCity] = useState("");
  const [switcher, setSwitcher] = useState(false);
  const [weatherinfo, setWeatherinfo] = useState({
    weather: null,
    temp: 0,
    minTemp: 0,
    maxTemp: 0,
  });
  const [error, setError] = useState(null);

  const api_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  let display;

  const handleCityChange = (event) => {
    setCity(event.target.value);
    setSwitcher(false);
    setError(null);
  };
  const displayweather = (event) => {
    event.preventDefault();

    const getweather = async () => {
      try {
        const data = await fetch(api_url).then((response) => response.json());
        setWeatherinfo({
          ...weatherinfo,
          weather: data.weather[0].main,
          temp: data.main.temp,
          minTemp: data.main.temp_min,
          maxTemp: data.main.temp_max,
        });
        console.log(weatherinfo);

        setSwitcher(true);
        console.log(switcher);
      } catch (err) {
        setError(err);
      }
      // console.log(error);
    };

    getweather();
  };
  if (switcher) {
    display = <Main weather={weatherinfo}></Main>;
  }
  if (error) {
    display = (
      <p className="error">
        Sorry , we can't find the weatherinfo for the location
      </p>
    );
  }
  return (
    <div className="weatherApp">
      <h1>Welcome to weather app</h1>
      <form onSubmit={displayweather}>
        <label> City </label>
        <input
          type="text"
          className="city"
          name="city"
          onChange={handleCityChange}
          placeholder="Enter your City"
          value={city}
          // ref={inputRef}
        ></input>
        <button>Submit</button>
      </form>
      {display}
    </div>
  );
}

export default App;
