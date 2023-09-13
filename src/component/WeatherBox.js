import React from 'react'

const WeatherBox = ({ weatherInfo}) => {
  const Celsius = weatherInfo && weatherInfo.main.temp;
  const Fahrenheit = ((Celsius * 1.8) + 32).toFixed(2);

  return (
    <div className='d-flex weather-box'>
      <h3>{weatherInfo?.name}</h3>
      <div className='d-flex temperature-wrap'>
        <h1>{`${Celsius}°C / ${Fahrenheit}°F`}</h1>
        <button className='weather-plusBtn'>+ 더보기</button>
      </div>
      <p>{weatherInfo && weatherInfo.weather[0].description}</p>
    </div>
  )
}

export default WeatherBox
