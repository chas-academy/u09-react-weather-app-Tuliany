import React from 'react';
import './styles.css';


export const Forecast = ({ forecastData }) => {
  const dailyData = {};

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
      <main>
        <section className="forecast">
          <header className="header">Todays  <i class="fa fa-clock-o" aria-hidden="true"></i> Forecast</header>
          {Object.values(dailyData).map((items, index) => index === 0 && (
            <div className="forecast-container">
              {Object.values(items).map((days) => (
                <div className="hourly">
                  <h2 key={days.main}>
                    {days.dt_txt.includes('06:00:00') && ('Early morning')}
                    {days.dt_txt.includes('09:00:00') && ('Morning')}
                    {days.dt_txt.includes('12:00:00') && ('Noon')}
                    {days.dt_txt.includes('15:00:00') && ('Afternoon')}
                    {days.dt_txt.includes('18:00:00') && ('Evening')}
                    {days.dt_txt.includes('21:00:00') && ('Night')}
                    {days.dt_txt.includes('00:00:00') && ('Midnight')}
                    {days.dt_txt.includes('03:00:00') && ('😴 Zzz')}
                  </h2>
                  <img src={`${process.env.REACT_APP_ICON_URL}/${days.weather[0].icon}@2x.png`} alt="weather-icon" width="200" height="200" />
                  <p><i class="fa fa-thermometer-three-quarters" aria-hidden="true"></i> {days.main.temp}&deg;</p>
                </div>
              ))}
              </div>
            ))}  
        </section>
        <section className="forecast">
          <header className="forecast-header">5 days Forecast</header>
          <div className="forecast-container">
          {Object.values(dailyData).map((items) =>
            <>
              {Object.values(items).map((days, index) => index === 4 && (
                <div className="daily">
                  <h2>{days.day}</h2>
                  <img src={`${process.env.REACT_APP_ICON_URL}/${days.weather[0].icon}@2x.png`} alt="weather-icon" />
                  <p>{days.main.temp}&deg;</p>
                </div>
              ))}
            </>)}
            </div>
        </section>
      </main>
 
  )
}