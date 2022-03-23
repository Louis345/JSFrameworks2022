import { useState } from "react";

const TemperatureDisplay = ( {temp}) => {
  const [isFahrenheit, setIsFahrenheit] = useState(true);
  const changeTemp = () => setIsFahrenheit(false); // !isFahrenheit
  const changeTemp2 = () => setIsFahrenheit(true);

  const convertFahrenheitToCelsius = () => {
    return Math.round(((temp - 32) *.5556)* 100) / 100;
  };

  return <div>
    {isFahrenheit ? 'The temperature is ' + (temp + '°F') :'The temperature is ' + convertFahrenheitToCelsius(temp) + '°C' } <br></br>
    <button onClick={changeTemp2}>Fahrenheit</button>
    <button onClick={changeTemp}>Celsius</button>
  </div>
};

export default TemperatureDisplay;
