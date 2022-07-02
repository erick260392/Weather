import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';

const Weather = () => {


    const [weather,setweather]=useState({})
    const [degrees,setdegrees] = useState (0)
    const [isKelvin ,setisKelvin] = useState (true)


useEffect(()=>{

  function success(pos) {
    var crd = pos.coords;
  
    console.log('Your current position is:');
    console.log('Latitude : ' + crd.latitude);
    console.log('Longitude: ' + crd.longitude);
    console.log('More or less ' + crd.accuracy + ' meters.');
    
          axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=1f836b84d5a703c7209e8db3eb790224`)
          .then(res=> { setweather(res.data)
                setdegrees(res.data.main.temp) }
          )
  };
  
  function error(err) {
    console.warn('ERROR(' + err.code + '): ' + err.message);
  };
  
  navigator.geolocation.getCurrentPosition(success, error);
 

},[])

console.log(weather)
console.log(degrees);

const Convert = ()=>{
  if (isKelvin === true) {

    setdegrees(Math.floor(degrees - 273.1) )
    setisKelvin(false)

      }else{ 
        setdegrees (degrees + 273.1)
        setisKelvin(true)
      }
}
  
      return (
        
<div className='Weather'>



<h1>Wheater App</h1>
<h2> <i class="fa-solid fa-location-dot"></i> {weather.name}, {weather.sys?.country} </h2> 

<div className='weather_img'>
<img src={`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`} alt="" />


<h2>{degrees} {isKelvin ? "Kelvin" : "° Centrigrates"  } </h2>
<h2> "{weather.weather?.[0].description}"</h2>


 <div className="data">
 
<i class="fa-solid fa-wind"></i><b>Wind Speed:</b><h2>  {weather.wind?.speed} m/s </h2>
<i class="fa-solid fa-cloud"></i><b>Clouds:</b><h2>  {weather.clouds?.all} %</h2>
<i class="fa-solid fa-temperature-high"></i><b>Pressure:</b><h2> {weather.main?.pressure} mb </h2>
  
  </div> 


<button onClick={Convert} > CONVERT TO CENTIGRADE </button>

</div>

   
        </div>
    );
};

export default Weather;