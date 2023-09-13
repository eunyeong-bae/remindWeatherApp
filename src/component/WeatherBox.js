import React, { useState } from 'react';

const WeatherBox = ({ weatherInfo}) => {
  const Celsius = weatherInfo && weatherInfo.main.temp;
  const Fahrenheit = ((Celsius * 1.8) + 32).toFixed(2);
  
  const [moreInfo, setMoreInfo] = useState(false);

  return (
    <div className={'d-flex weather-box'+ (moreInfo?' h-400':'')}>
      <h3>{weatherInfo?.name}</h3>
      <div>
        <div className='d-flex temperature-wrap'>
          <h1>{`${Celsius}°C / ${Fahrenheit}°F`}</h1>
          <button 
            className='weather-plusBtn'
            onClick={() => setMoreInfo(!moreInfo)}
          >
            {moreInfo ? '닫기' :'+ 더보기'}
          </button>
        </div>
        { moreInfo &&
          <div className='weather-more-data'>
            <p>체감기온: {weatherInfo?.main.feels_like} °C</p>
            <p>습도: {weatherInfo?.main.humidity} %</p>
            <p>최고온도: {weatherInfo?.main.temp_max} °C</p>
            <p>최저온도: {weatherInfo?.main.temp_min} °C</p>
          </div>
        }
      </div>
      <p className='main-weather'>{weatherInfo && weatherInfo.weather[0].description}</p>
    </div>
  )
}

export default WeatherBox
