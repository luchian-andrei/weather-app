import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faSmog,
  faSun,
  faUmbrella,
  faSnowflake,
  faCloudRain,
  faCloudSun,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export default function Icon({ sky, skyDescription }) {
  const [funMessage, setFunMessage] = useState("");
  const [icon, setIcon] = useState();
  // <FontAwesomeIcon
  //   icon={faSun}
  //   style={{ color: "yellow", fontSize: "100px" }}
  // />

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
    }
  }

  useEffect(() => {
    handleIcons();
  }, [sky]);

  return (
    <div className="Icon">
      {icon}
      <p>{sky} </p>
      <p>{skyDescription} </p>
    </div>
  );
}
