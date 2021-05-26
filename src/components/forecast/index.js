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
        <header className="forecast-header">Todays  <i class="fa fa-clock-o" aria-hidden="true"></i> Forecast</header>
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
                <h2><i class="fa fa-thermometer-three-quarters" aria-hidden="true"></i> {days.main.temp}&deg;</h2>
              </div>
            ))}
          </div>
        ))}
      </section>
      <section className="forecast">
        <header className="forecast-header"> <i class="fas fa-calendar-week"></i> 5 days Forecast </header>
        <div className="forecast-container">
          {Object.values(dailyData).map((items) =>
            <>
              {Object.values(items).map((days, index) => {
                const getWeekDays = new Date(days.dt_txt)
                const weekdayStr = getWeekDays.toString()
                const weekday = weekdayStr.substring(0, 3)

                return (
                  index === 4 && (
                    <div className="daily">
                      <h2>{weekday}</h2>
                      <img src={`${process.env.REACT_APP_ICON_URL}/${days.weather[0].icon}@2x.png`} alt="weather-icon" width="200" height="200" />
                      <h3><i class="fa fa-thermometer-three-quarters" aria-hidden="true"></i> {days.main.temp}&deg;</h3>
                    </div>
                  )
                )
              })}
            </>)}
        </div>
      </section>
    </main>

  )
}