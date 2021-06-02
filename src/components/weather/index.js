import React, { useState, } from 'react';
import './styles.css';
import moment from 'moment';

export const Weather = ({ weatherData }) => {
  const [convert, setConvert] = useState(true)
  const Farenheit = `${Math.round(weatherData.list[0].main.temp * 2 + 30)} F`
  const Celcius = `${Math.round(weatherData.list[0].main.temp)} C`
  const [unit, setUnit] = useState(Celcius)

  const oppositeUnit = unit === Celcius ? "farenheit" : "celsius";

  const handleConvert = () => {
    setConvert(!convert)
    convert ? setUnit(Celcius) : setUnit(Farenheit)
  }

  const { icon } = weatherData.list[0].weather[0]

  return (
    <>
      <main>
        <section className="weather-info">
          <header className="header" id="city-header">{weatherData.list[0].name} Weather</header>
          <section className="weather-temp">
            <img src={`${process.env.REACT_APP_ICON_URL}/${icon}@2x.png`} alt="weather-icon" height="250px" width="250px" />
            <>
              <div>
                <h1><i class="fa fa-thermometer-three-quarters" aria-hidden="true"></i> {unit}&deg; </h1>
                <h2 class="description">  {weatherData.list[0].weather[0].main}</h2>
              </div>
              <div className="sun-hours">
                <h2><i class="fa fa-sun-o" title="sunrise" aria-hidden="true"></i> {new Date(weatherData.city.sunrise * 1000).toLocaleTimeString('en-IN')}</h2>
                <h2><i class="fa fa-moon-o" title="sunset" aria-hidden="true"></i> {new Date(weatherData.city.sunset * 1000).toLocaleTimeString('en-IN')}</h2>
              </div>
            </>
          </section>
          <section className="weather-etx">
            <h3><i class="fa fa-tint" title="humidity" aria-hidden="true"></i> {weatherData.list[0].main.humidity} </h3>
            <h3><i class="fas fa-wind" title="wind"></i> {weatherData.list[0].wind.speed} </h3>
            <h3><i class="fas fa-calendar-day" title="week day"></i> {moment().format('dddd')}</h3>
            <h3><i class="fas fa-calendar-alt" title="calender"></i> {moment().format('LL')}</h3>
          </section>
          <button className="convert" title={`convert to ${oppositeUnit}`} onClick={handleConvert}> {oppositeUnit}</button>
        </section>
      </main>
    </>
  )
}
