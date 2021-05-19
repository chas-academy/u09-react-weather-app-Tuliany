import React, { useState, } from 'react';
//import './styles.css';
import { Card } from 'semantic-ui-react'
import moment from 'moment';


export const Weather = ({ weatherData }) => {
  const [convert, setConvert] = useState(false)
  const [unit, setUnit] = useState(`${ weatherData.main.temp } C`)

  const Farenheit = `${Math.round(weatherData.main.temp * 2 + 30)} F`
  const Celcius = `${weatherData.main.temp} C`

  const oppositeUnit = unit === Celcius ? "Farenheit" : "Celcius";

  const handleConvert = () => {
    setConvert(!convert)
    convert ? setUnit(Celcius) : setUnit(Farenheit)
    }

  return (
    <Card>
      <Card.Content>
        <Card.Header className="header">City Name: {weatherData.name}</Card.Header>
        <p>Temperature: {unit}&deg; </p>
        <p>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
        <p>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
        <p>Description: {weatherData.weather[0].main}</p>
        <p>Humidity: {weatherData.main.humidity} </p>
        <p>Wind speed: {weatherData.wind.speed} </p>
        <p>Day: {moment().format('dddd')}</p>
        <p>Date: {moment().format('LL')}</p>
      </Card.Content>
      <button onClick={handleConvert}> Convert to {oppositeUnit}</button>
    </Card>
  )
}
