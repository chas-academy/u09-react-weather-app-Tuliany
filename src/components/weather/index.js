import React, { useState, } from 'react';
import './styles.css';
import { Card } from 'semantic-ui-react'
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
      <Card style={{
        backgroundImage: "linear-gradient(#d9a7c7, #fffcdc)",
        width: "600px",
        borderRadius: "20px",
        padding:"25px",
        marginTop:"50px",
      }}>
        <Card.Content>
          <header>{weatherData.name} Weather</header>
          
          <main className="weather-info">
            <section className="weather-temp">
              <img src={`${process.env.REACT_APP_ICON_URL}/${icon}@2x.png`} alt="weather-icon" height="200px" width="200px" />
              <>
                <div>
                  <h1><i class="fa fa-thermometer-three-quarters" aria-hidden="true"></i> {unit}&deg; </h1>
                  <h3>  {weatherData.weather[0].main}</h3>
                </div>
                <div className="sun-hours">
                  <h3><i class="fa fa-sun-o" title="sunrise" aria-hidden="true"></i> {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</h3>
                  <h3><i class="fa fa-moon-o" title="sunset" aria-hidden="true"></i> {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</h3>
                </div>
              </>
            </section>
            <section className="weather-etx">
              <h4><i class="fa fa-tint" title="humidity" aria-hidden="true"></i> {weatherData.main.humidity} </h4>
              <h4><i class="fas fa-wind" title="wind"></i> {weatherData.wind.speed} </h4>
              <h4><i class="fas fa-calendar-day" title="week day"></i> {moment().format('dddd')}</h4>
              <h4><i class="fas fa-calendar-alt" title="calender"></i> {moment().format('LL')}</h4>
            </section>
            <button className="convert" title={`convert to ${oppositeUnit}`} onClick={handleConvert}> {oppositeUnit}</button>

          </main>
        </Card.Content>

      </Card >
    </>
  )
}
