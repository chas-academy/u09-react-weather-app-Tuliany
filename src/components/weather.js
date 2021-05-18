import React, { useState } from 'react';
//import './styles.css';
import { Card } from 'semantic-ui-react'
import moment from 'moment';


export const Weather = ({ weatherData }) => {
  const [unit, setUnit]=useState("C")

  const Farenheit = weatherData.main.temp * 2 + 30
  
  return (
    <Card>
      <Card.Content>
        <Card.Header className="header">City Name: {weatherData.name}</Card.Header>
        <p>Temperature: {weatherData.main.temp}</p>
        <p>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
        <p>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
        <p>Description: {weatherData.weather[0].main}</p>
        <p>Humidity: {weatherData.main.humidity} </p>
        <p>Wind speed: {weatherData.wind.speed} </p>
        <p>Day: {moment().format('dddd')}</p>
        <p>Date: {moment().format('LL')}</p>
      </Card.Content>
    </Card>
  )
}
