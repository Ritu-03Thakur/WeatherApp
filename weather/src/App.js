import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import Description from "./components/Description";
import { getFormatedWeatherData } from "./weatherService";
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import "./App.css";

function App() {
  const [city, setCity] = useState("Paris");
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState("metric");

  useEffect(() => {
    const fetchData = async () => {
      const data = await getFormatedWeatherData(city, units);
      setWeather(data);
    };
    fetchData();
  }, [units, city]);

  const handleUnitsClick = (e) => {
    const button = e.currentTarget;
    const currentUnit = button.innerText.slice(1);

    const isCelsius = currentUnit === "C";
    button.innerText = isCelsius ? "Convert ° F" : "Convert ° C";

    setUnits(isCelsius ? "metric" : "imperial");
  };

  const enterKeyPressed = (e) => {
    if (e.keyCode === 13) {
      setCity(e.currentTarget.value);
      e.currentTarget.blur();
    }
  };

  return (
    <div className="app">
      <Card sx={{boxShadow : 3 }} style={{backgroundColor : "#cbc6c6"  , display : "flex" , justifyContent : "center" , alignItems : "center"}} >
        <div className="overlay">
          <CardContent>

          {weather && (
            <div className="container">
              <h1> Weather App </h1>
              <div className="section-input">
                <input
                  onKeyDown={enterKeyPressed}
                  type="text"
                  name="city"
                  placeholder="Enter City ..."
                  />
                <Button variant="contained" onClick={(e) => handleUnitsClick(e)}
                style={{backgroundColor : "rgb(23 113 141)"  }}>Convert ° F</Button>
               
              </div>

               <Card sx={{boxShadow : 2 }} style={{backgroundColor : "c"  }}>
                <CardContent>

              <div className=" section-temperature">
                <div className="icons">
                  <h3>{`${weather.name} , ${weather.country}`}</h3>
                  <img src={weather.iconURL} alt="" />
                  <h4>{weather.description} </h4>
                </div>
                <div className="temperature">{`${weather.temp.toFixed()} °${
                  units === "metric" ? "C" : "F"
                }`}</div>
              </div>
                </CardContent>
               </Card>

              <Description weather={weather} units={units} />
            </div>
          )}
          </CardContent>
        </div>
      </Card>
    </div>
  );
}

export default App;
