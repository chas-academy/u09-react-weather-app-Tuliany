import './App.css';
import React, { useEffect, useState } from "react";
import { Weather } from './components/weather/index'
import { Forecast } from './components/forecast/index'

export default function App() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [forecast, setForecast] = useState([])
  const [convert, setConvert] = useState(true)

  const handleConvert = () => {
    setConvert(!convert)
  }


  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });
      await fetch(`${process.env.REACT_APP_API_URL}/forecast?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(result => {
          setForecast(result)
        });
    }
    fetchData();
  }, [lat, long])

  return (
    <div className="App">
      <main>
        {(typeof forecast.list != 'undefined') ? (
          <>
            <Weather weatherData={forecast} handleConvert={() => handleConvert()} convert={convert}/>
            <Forecast forecastData={forecast} convert={convert}/>
          </>
        ) : (
          <div></div>
        )}
      </main>
    </div>
  );
}
