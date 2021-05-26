import React, { useState, } from 'react';
import './styles.css';
import moment from 'moment';


export const Weather = ({ weatherData }) => {
  const [convert, setConvert] = useState(false)
  const [unit, setUnit] = useState(`${weatherData.main.temp} C`)

  const Farenheit = `${Math.round(weatherData.main.temp * 2 + 30)} F`
  const Celcius = `${Math.round(weatherData.main.temp)} C`

  const oppositeUnit = unit === Celcius ? "farenheit" : "celsius";

  const handleConvert = () => {
    setConvert(!convert)
    convert ? setUnit(Celcius) : setUnit(Farenheit)
  }

  const { icon } = weatherData.weather[0]

  return (
    <>
      <main>
        
        <section className="weather-info">
          <header className="header">{weatherData.name} Weather</header>
          <section className="weather-temp">
            <img src={`${process.env.REACT_APP_ICON_URL}/${icon}@2x.png`} alt="weather-icon" height="200px" width="200px" />
            <>
              <div>
                <h1><i class="fa fa-thermometer-three-quarters" aria-hidden="true"></i> {unit}&deg; </h1>
                <h3>  {weatherData.weather[0].main}</h3>
              </div>
              <div className="sun-hours">
                <h2><i class="fa fa-sun-o" title="sunrise" aria-hidden="true"></i> {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</h2>
                <h2><i class="fa fa-moon-o" title="sunset" aria-hidden="true"></i> {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</h2>
              </div>
            </>
          </section>
          <section className="weather-etx">
            <h3><i class="fa fa-tint" title="humidity" aria-hidden="true"></i> {weatherData.main.humidity} </h3>
            <h3><i class="fas fa-wind" title="wind"></i> {weatherData.wind.speed} </h3>
            <h3><i class="fas fa-calendar-day" title="week day"></i> {moment().format('dddd')}</h3>
            <h3><i class="fas fa-calendar-alt" title="calender"></i> {moment().format('LL')}</h3>
          </section>
          <button className="convert" title={`convert to ${oppositeUnit}`} onClick={handleConvert}> {oppositeUnit}</button>

        </section>
      </main>
    </>
  )
}
