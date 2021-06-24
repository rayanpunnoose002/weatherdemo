import React from 'react'
import {useState} from 'react'
import Display from './Display'
import '../componenets/Weather.css'
 function Weather() {
 const [weather, setWeather] = useState([]);
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');

  const APIKEY = "e7cdeac4b51b9d7bcb2908ed1df37098";
  async function weatherData(e) {
    e.preventDefault();
    if (city === " ") {
      alert("Enter city name");
    } else {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${APIKEY}`
      )
        .then((res) => res.json())
        .then((data) => data);
    setWeather({ data: data });
    }
  }
  
  return (
    <div className="weather">
      <span className="title">PPP Weather</span>
      <br />
      <form>
        <input
          type="text"
          placeholder="city"
          name="city"
          onChange={(e) => setCity(e.target.value)}
        />
        &nbsp; &nbsp; &nbsp;&nbsp;
        <input
          type="text"
          placeholder="Country"
          name="country"
          onChange={(e) => setCountry(e.target.value)}
        />
        <button className="getweather" onClick={(e) => weatherData(e)}>
          Submit
        </button>
      </form>

       {console.log(weather.data)} 
       
      {weather.data !== undefined ? (
        <div>
          <Display data={weather.data} />
        </div>
      ) : null}
    </div>
  );
}

export default Weather
