import React from 'react'

const cities = ['Current', 'New York', 'Vancouver', 'Japan', 'Taipei'];

const WeatherButton = ({ handleGeographicalWeather, currSelectedBtn}) => {
    
  return (
    <div className='d-flex weather-button'>
        {
            cities.map(city => {
                return (
                    <button 
                        onClick={handleGeographicalWeather.bind(this, city)}
                        className={'button ' + (currSelectedBtn &&
                            currSelectedBtn === city ? 'selected' : '')}
                    >
                        {city}
                    </button>
                )
            })
        }
    </div>
  )
}

export default WeatherButton
