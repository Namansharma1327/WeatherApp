import React, { useState } from 'react'
import './Weather.css';
import axios from 'axios';

function Weather() {
    const [city, setCity] = useState();
    const [weather, setWeather] = useState();
    const CityChangeHandler = (event)=>{
        setCity(event.target.value);
    }
    const fetchWeather = async () =>{
        try{
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'fdaff81cb1cf87f2454bcea81178495d'}`);
            setWeather(response);
        }
        catch(error){
            if (error.response && error.response.status === 404) {
                alert('City not found. Please enter a valid city.');
            } else {
                console.log("Error found while fetching", error);
            }
        }
    }
    const handleClick = () =>{
        fetchWeather();
         
    }
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            fetchWeather();
        }
    };
  return (
    <div className='main-body'>
    <div className='weather-box'> 
    <input type='text' placeholder='Enter city name' value={city} onChange={CityChangeHandler}  onKeyDown={handleKeyDown} className='search-bar'></input>
    <button onClick={handleClick} className='get-weather'>get weather</button>
    {weather &&  <>
    <div className='weather-info'>
        <h3 className='name-box'>{weather.data.name}</h3>
        <h5 className='country'>{weather.data.sys.country}</h5>
        <p className='curr-temp'>Current Temp - {(weather.data.main.temp-273).toFixed(2)} °c</p>
        <p className='description'>{weather.data.weather[0].description}</p>
    </div>
    </>}
      
    </div>

    </div>

   
  )
}

export default Weather;
