import axios from "axios";
import { useState } from "react";

export function WeatherApp(){


    const [city, setCity] = useState('')
    const [weatherData, setWeatherData] = useState({main:{temp:0}, weather:[{description:null}]});

    let APIKEY = "1318ca6725c69160d346c41fc0612596";
    let URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric`;

    function handleCityChange(e){
        setCity(e.target.value);
    }

    function handleSearchClick(){
        axios.get(URL)
        .then(response=>{
             setWeatherData(response.data);
        })
    }

    return(
        <div className="container-fluid d-flex justify-content-center align-items-center" style={{height:'100vh'}}>
            <div className="bg-warning p-5 rounded rounded-4 w-50 text-white">
                 
                 <div className="input-group">
                     <input type="text" onChange={handleCityChange} className="form-control" placeholder="Your city name" />
                     <button onClick={handleSearchClick} className="btn bi bi-search btn-light"></button>
                 </div>

                 <h1 className="bi mt-5 bi-geo-alt"> {city} </h1>

                 <div className="fs-1 fw-bold">
                     {weatherData.main.temp}&deg; C
                     <div className="mt-3">
                        [{weatherData.weather[0].description}]
                     </div>
                 </div>
            </div>
        </div>
    )
}