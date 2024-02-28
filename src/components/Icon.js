import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faSmog,
  faSun,
  faUmbrella,
  faSnowflake,
  faBolt,
  faCloudSun,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export default function Icon({ sky, skyDescription, cityName }) {
  const [icon, setIcon] = useState();

  console.log(cityName);

  function handleIcons() {
    if (sky === "Clouds") {
      setIcon(
        <FontAwesomeIcon
          icon={faCloud}
          style={{ color: "lightblue", fontSize: "100px" }}
        />
      );
    } else if (sky === "Clear sky") {
      setIcon(
        <FontAwesomeIcon
          icon={faSun}
          style={{ color: "orangered", fontSize: "100px" }}
        />
      );
    } else if (sky === "Mist") {
      setIcon(
        <FontAwesomeIcon
          icon={faSmog}
          style={{ color: "lightgray", fontSize: "100px" }}
        />
      );
    } else if (sky === "Few clouds" || "Scattered clouds" || "Broken clouds") {
      setIcon(
        <FontAwesomeIcon
          icon={faCloudSun}
          style={{ color: "lightgray", fontSize: "100px" }}
        />
      );
    } else if (sky === "Rain" || "Shower rain") {
      setIcon(
        <FontAwesomeIcon
          icon={faUmbrella}
          style={{ color: "purple", fontSize: "100px" }}
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

  useEffect(() => {
    handleIcons();
  }, [sky]);

  return (
    <div className="Icon">
      {<p className="weather-icon">{icon}</p>}

      <p className="description">
        {<p style={{ color: "yellow", fontWeight: "bold" }}>{cityName} </p>} "{" "}
        {skyDescription}"{" "}
      </p>
    </div>
  );
}
