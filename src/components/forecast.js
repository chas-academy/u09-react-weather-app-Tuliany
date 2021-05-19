import React, { useState, useEffect } from 'react';
//import './styles.css';
import { Card } from 'semantic-ui-react'
import moment from 'moment';



export const Forecast = ({ forecastData }) => {
  var dailyData = {};

  forecastData.list.map(item => {
    const dateTime = new Date(item.dt * 1000);
    const day = dateTime.getDate();
    const time = dateTime.getHours();
    // check if dailyData map has it
    if (!dailyData[day])
      dailyData[day] = [];
    dailyData[day].push({ ...item, day, time });
    console.log(dailyData)
  });

  return (
    <div>
       <Card>
         <Card.Content>
          <Card.Header className="header">Forecast</Card.Header>
          
        
        </Card.Content>
        <Card.Content>
          <Card.Header className="header">5 days Forecast</Card.Header>
     
        </Card.Content>
      </Card> 
    </div>
  )
}