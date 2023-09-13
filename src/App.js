import { useEffect, useState } from 'react';
import './App.css';
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';
import axios from 'axios';


function App() {
  const [location, setLocation] = useState({
    lan: null,
    lon: null
  });
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [currSelectedBtn, setCurrSelectedBtn] = useState('Current');
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      const data = position.coords;
      setLocation({lan: data.latitude, lon : data.longitude});
      callCurrentWeatherInfo(data.latitude, data.longitude);
    })

  }, []);

  const callApi = async(url) => {
    let result = await axios.get(url)
    .then((res) => {
      return res.data;
    })
    .catch(e => {
      alert('Error occur');
    })
    
    setWeatherInfo(result);
  };

  const callCurrentWeatherInfo = (lat, lon) => {
    const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=${'7fda0b9c7c3c4b2693bc7c2c28417b14'}`;
    callApi(weatherApiUrl);
    
  };

  const handleGeographicalWeather = (cityName) => {
    setCurrSelectedBtn(cityName);

    const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${'7fda0b9c7c3c4b2693bc7c2c28417b14'}`
    cityName === 'Current' ? callCurrentWeatherInfo(location.lan, location.lon) :callApi(weatherApiUrl);
  };

  return (
    <div className="d-flex container">
      <WeatherBox weatherInfo={weatherInfo} />
      <WeatherButton handleGeographicalWeather={handleGeographicalWeather} currSelectedBtn={currSelectedBtn}/>
    </div>
  );
}

export default App;
