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
          style={{ color: "lightblue", fontSize: "100px" }}
        />
      );
    } else if (
      (sky === "Clear" || sky === "Clear sky") &&
      momentOfDay === "day"
    ) {
      setIcon(
        <FontAwesomeIcon
          icon={faSun}
          style={{ color: "yellow", fontSize: "100px" }}
        />
      );
    } else if (
      (sky === "Clear" || sky === "Clear sky") &&
      momentOfDay === "night"
    ) {
      setIcon(
        <FontAwesomeIcon
          icon={faMoon}
          style={{ color: "whitesmoke", fontSize: "100px" }}
        />
      );
    } else if (sky === "Mist") {
      setIcon(
        <FontAwesomeIcon
          icon={faSmog}
          style={{ color: "lightgray", fontSize: "100px" }}
        />
      );
    } else if (
      (sky === "Scattered clouds" || sky === "Broken clouds") &&
      momentOfDay === "day"
    ) {
      setIcon(
        <FontAwesomeIcon
          icon={faCloudSun}
          style={{ color: "lightgray", fontSize: "100px" }}
        />
      );
    } else if (
      (sky === "Scattered clouds" || sky === "Broken clouds") &&
      momentOfDay === "night"
    ) {
      setIcon(
        <FontAwesomeIcon
          icon={faCloudMoon}
          style={{ color: "whitesmoke", fontSize: "100px" }}
        />
      );
    } else if (sky === "Rain" || sky === "Shower rain") {
      setIcon(
        <FontAwesomeIcon
          icon={faCloudRain}
          style={{ color: "lightblue", fontSize: "100px" }}
        />
      );
    } else if (sky === "Thunderstorm") {
      setIcon(
        <FontAwesomeIcon
          icon={faBolt}
          style={{ color: "yellow", fontSize: "100px" }}
        />
      );
    } else if (sky === "Snow") {
      setIcon(
        <FontAwesomeIcon
          icon={faSnowflake}
          style={{ color: "lightblue", fontSize: "100px" }}
        />
      );
    }
  }

  console.log("sky is " + sky);

  useEffect(() => {
    handleIcons();
  }, [momentOfDay]);

  return (
    <div className="Icon">
      {<p className="weather-icon">{icon}</p>}

      <div className="description">
        {momentOfDay === "day " ? (
          <p
            style={{
              color: "yellow",
              fontWeight: "bold",
              textTransform: "capitalize",
            }}
          >
            {cityName}, {countryCode}{" "}
          </p>
        ) : (
          <p
            style={{
              color: "whitesmoke",
              fontWeight: "bold",
              textTransform: "capitalize",
            }}
          >
            {cityName}, {countryCode}{" "}
          </p>
        )}{" "}
        " {skyDescription}"
      </div>
    </div>
  );
}
