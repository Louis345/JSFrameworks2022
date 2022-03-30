import { useState } from "react";
import "./Temperature.css";

import TemperatureDisplay from "../TemperatureDisplay/TemperatureDisplay";
import TemperatureScale from "../TemperatureScale/TemperatureScale";

const CURRENT_TEMPERATURE_CELSIUS = 35;

function Temperature() {
  const [scale, setScale] = useState("F");
  const temperature =
    scale === "F"
      ? CURRENT_TEMPERATURE_CELSIUS * 1.8 + 32
      : CURRENT_TEMPERATURE_CELSIUS;

  return (
    <div className="Temperature flex-inline text-center">
      <div className="card card-body">
        <div className="mb-3">
          {/* Pass props to <TemperatureDisplay /> */}
          <TemperatureDisplay temperature={temperature} scale={scale} />
        </div>
        {/* Pass props to <TemperatureScale /> */}
        <TemperatureScale setScale={setScale}/>
      </div>
    </div>
  );
}

export default Temperature;
