import React from 'react';
//import './styles.css';
import { Card } from 'semantic-ui-react'

export const Forecast = ({ forecastData }) => {


  var dailyData = {};

  forecastData.list.forEach((item => {
    const dateTime = new Date(item.dt * 1000);
    const day = dateTime.getDate();
    const time = dateTime.getHours();
    // check if dailyData map has it
    if (!dailyData[day])
      dailyData[day] = [];
    dailyData[day].push({ ...item, day, time });
  }));

  

  return (
    <div>
      <Card>
        <Card.Content>
          <Card.Header className="header">Forecast</Card.Header>
          {Object.values(dailyData).map((items, index) => index === 0 &&(
            <p>
              {Object.values(items).map((days) => (
                <>
                  <h4 key={days.main}>{days.dt_txt}</h4>
                  <p>{days.main.temp}&deg;</p>
                  <p>{days.weather.icon}</p>
                  
                </>
              ))}
            </p>))}
         
            
        </Card.Content>
        <Card.Content>
          <Card.Header className="header">5 days Forecast</Card.Header>
          {Object.values(dailyData).map((items) => 
            <p>
              {Object.values(items).map((days, index) => index === 4 && (
                
                <>
                  <h3>{days.day}</h3>
                  <p>{days.main.temp}&deg;</p>
                   <img src={`${process.env.REACT_APP_ICON_URL}/${days.weather[0].icon}@2x.png`} alt="weather-icon" />
                 </>
              ))}
            </p>)}
        </Card.Content>
      </Card>
    </div>
  )
}