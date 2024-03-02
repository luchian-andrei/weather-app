import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWind,
  faTemperatureArrowDown,
  faTemperatureArrowUp,
  faTemperatureFull,
} from "@fortawesome/free-solid-svg-icons";

export default function Info({
  loading,
  temp,
  windSpeed,
  maxTemp,
  minTemp,
  feelsLike,
}) {
  return (
    <div className="Info">
      <div className="first-row">
        <div className="card" id="temperature">
          <span>Temp.</span>
          <p>
            {" "}
            <FontAwesomeIcon
              icon={faTemperatureFull}
              style={{ color: "red" }}
            />
          </p>

          <p>{Math.round(temp)} °C </p>
        </div>
        <div className="card " id="wind-speed">
          {" "}
          <span>Wind </span>
          <p>
            <FontAwesomeIcon icon={faWind} style={{ color: "gray" }} />
          </p>
          <p>{Math.round(windSpeed)} km/h </p>
        </div>
      </div>
      <div className="second-row">
        <div className="card">
          <p>{Math.round(feelsLike)} °C</p>
          <span>Feels like </span>
        </div>
      </div>
      <div className="third-row">
        <div className="card">
          <p>{Math.round(maxTemp)} °C</p>
          <p>
            {" "}
            <FontAwesomeIcon
              icon={faTemperatureArrowUp}
              style={{ color: "orangered" }}
            />
          </p>
          <span>Max. temp</span>
        </div>
        <div className="card ">
          <p>{Math.round(minTemp)} °C</p>
          <p>
            {" "}
            <FontAwesomeIcon
              icon={faTemperatureArrowDown}
              style={{ color: "blue" }}
            />
          </p>
          <span>Min. temp</span>
        </div>
      </div>
    </div>
  );
}
