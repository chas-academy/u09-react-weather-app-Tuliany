import React, { useState, } from 'react';
import './styles.css';
import { Card } from 'semantic-ui-react'
import moment from 'moment';


export const Weather = ({ weatherData }) => {
  const [convert, setConvert] = useState(false)
  const [unit, setUnit] = useState(`${weatherData.main.temp} C`)

  const Farenheit = `${Math.round(weatherData.main.temp * 2 + 30)} F`
  const Celcius = `${Math.round(weatherData.main.temp)} C`

  const oppositeUnit = unit === Celcius ? "Farenheit" : "Celcius";

  const handleConvert = () => {
    setConvert(!convert)
    convert ? setUnit(Celcius) : setUnit(Farenheit)
  }

  const { icon } = weatherData.weather[0]

  return (
    <Card className="card">
      <Card.Content className="card-content">
        <Card.Header className="header">{weatherData.name} Weather</Card.Header>
        <p><i class="fa fa-thermometer-three-quarters" aria-hidden="true"></i> {unit}&deg; </p>
        <p><i class="fa fa-sun-o" aria-hidden="true"></i> {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
        <p><i class="fa fa-moon-o" aria-hidden="true"></i> {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
        <p>Description: {weatherData.weather[0].main}</p>
        <p><i class="fa fa-tint" aria-hidden="true"></i> {weatherData.main.humidity} </p>
        <p><i class="fas fa-wind"></i> {weatherData.wind.speed} </p>
        <p><i class="fas fa-calendar-day"></i> {moment().format('dddd')}</p>
        <p><i class="fas fa-calendar-alt"></i> {moment().format('LL')}</p>
        <img src={`${process.env.REACT_APP_ICON_URL}/${icon}@2x.png`} alt="weather-icon" />
      </Card.Content>
      <button onClick={handleConvert}> Convert to {oppositeUnit}</button>
    </Card>
  )
}
