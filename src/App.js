import hotBg from "./assests/hot.jpg";
import coldBg from "./assests/cold.jpg";
import Descriptions from "./components/Descriptions";
import {useEffect, useState } from "react";
import { getFormattedWeatherData } from "./weatherService";

function App() {

  const [weather, setWeather]= useState(null);
  useEffect(() => {
    try{
      const fetchWeatherData= async () =>{

      const data= await getFormattedWeatherData("paris");
      setWeather(data);
    };
     fetchWeatherData();
  }catch(e){
    console.log(e);
  }
  }, []);


  return (
    <div className="app" style={{backgroundImage: `url(${coldBg})`}}>
   <div className="overlay">
   {
    weather && (
      <div className="container">
      <div className="section section__inputs">
        <input type="text" name="city" placeholder="Enter city..."/>
        <button>°C</button>
      </div>
      <div className="section section__temperature">
        <div className="icon">
          <h3>London, GB</h3>
          <img src="https://openweathermap.org/img/wn/02d@2x.png" alt="cloud"/>

          <h3>Cloudy</h3>
        </div>
        <div className="temperture">
          <h1>34°C</h1>
        </div>
      </div>

     {/* bottom description*/}
        <Descriptions />

    </div>
    )
   }
   </div>
    </div>
  );
}
    

export default App;
