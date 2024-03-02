import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faSmog,
  faSun,
  faSnowflake,
  faBolt,
  faCloudSun,
  faCloudMoon,
  faMoon,
  faCloudRain,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export default function Icon({
  sky,
  skyDescription,
  cityName,
  countryCode,
  momentOfDay,
}) {
  const [icon, setIcon] = useState();

  function handleIcons() {
    if (sky === ("Clouds" || "Few clouds")) {
      setIcon(
        <FontAwesomeIcon
          icon={faCloud}
          className="icon icon-cloud"
          style={{ color: "lightblue" }}
        />
      );
    } else if (
      (sky === "Clear" || sky === "Clear sky") &&
      momentOfDay === "day"
    ) {
      setIcon(
        <FontAwesomeIcon
          icon={faSun}
          className="icon icon-sun"
          style={{ color: "yellow" }}
        />
      );
    } else if (
      (sky === "Clear" || sky === "Clear sky") &&
      momentOfDay === "night"
    ) {
      setIcon(
        <FontAwesomeIcon
          icon={faMoon}
          className="icon icon-moon"
          style={{ color: "whitesmoke" }}
        />
      );
    } else if (sky === "Mist") {
      setIcon(
        <FontAwesomeIcon
          icon={faSmog}
          className="icon icon-smog"
          style={{ color: "lightgray" }}
        />
      );
    } else if (
      (sky === "Scattered clouds" || sky === "Broken clouds") &&
      momentOfDay === "day"
    ) {
      setIcon(
        <FontAwesomeIcon
          icon={faCloudSun}
          className="icon icon-cloud-sun"
          style={{ color: "lightgray" }}
        />
      );
    } else if (
      (sky === "Scattered clouds" || sky === "Broken clouds") &&
      momentOfDay === "night"
    ) {
      setIcon(
        <FontAwesomeIcon
          icon={faCloudMoon}
          className="icon icon-cloud-moon"
          style={{ color: "whitesmoke" }}
        />
      );
    } else if (sky === "Rain" || sky === "Shower rain") {
      setIcon(
        <FontAwesomeIcon
          icon={faCloudRain}
          className="icon icon-cloud-rain"
          style={{ color: "lightblue" }}
        />
      );
    } else if (sky === "Thunderstorm") {
      setIcon(
        <FontAwesomeIcon
          icon={faBolt}
          className="icon icon-bolt"
          style={{ color: "yellow" }}
        />
      );
    } else if (sky === "Snow") {
      setIcon(
        <FontAwesomeIcon
          icon={faSnowflake}
          className="icon icon-snowflake"
          style={{ color: "lightblue" }}
        />
      );
    }
  }

  useEffect(() => {
    handleIcons();
  }, [momentOfDay]);

  return (
    <div className="Icon">
      {<p className="weather-icon">{icon}</p>}

      <div className="description">
        <p
          className={
            momentOfDay === "day" ? "city-name-day" : "city-name-night"
          }
        >
          {cityName}, {countryCode}{" "}
        </p>
        <p className="sky-description"> "{skyDescription}"</p>
      </div>
    </div>
  );
}
