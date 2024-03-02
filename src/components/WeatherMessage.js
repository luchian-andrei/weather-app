import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFaceFlushed,
  faFaceLaughBeam,
  faFaceLaughWink,
} from "@fortawesome/free-regular-svg-icons";
import { useEffect, useState } from "react";
import {
  faCarSide,
  faSleigh,
  faUmbrella,
} from "@fortawesome/free-solid-svg-icons";

export default function WeatherMessage({ sky, momentOfDay, cityName }) {
  const [message, setMessage] = useState("");
  const [messageIcon, setMessageIcon] = useState();

  function handleMessage() {
    if (sky === ("Clouds" || "Few clouds")) {
      setMessage("Maybe you will need this: ");
      setMessageIcon(
        <FontAwesomeIcon
          icon={faUmbrella}
          style={{ color: "purple", fontSize: "30px" }}
        />
      );
    } else if (
      (sky === "Clear" || sky === "Clear sky") &&
      momentOfDay === "day"
    ) {
      setMessage("Go out and enjoy your day ! ");
      setMessageIcon(
        <FontAwesomeIcon
          icon={faFaceLaughBeam}
          style={{ color: "yellow", fontSize: "30px" }}
        />
      );
    } else if (
      (sky === "Clear" || sky === "Clear sky") &&
      momentOfDay === "night"
    ) {
      setMessage("Go out and enjoy your night ! ");
      setMessageIcon(
        <FontAwesomeIcon
          icon={faFaceLaughBeam}
          style={{ color: "whitesmoke", fontSize: "30px" }}
        />
      );
    } else if (sky === "Mist") {
      setMessage("Don`t forget to turn off the lights");
      setMessageIcon(
        <FontAwesomeIcon
          icon={faCarSide}
          style={{ color: "blue", fontSize: "30px" }}
        />
      );
    } else if (
      (sky === "Scattered clouds" || sky === "Broken clouds") &&
      momentOfDay === "day"
    ) {
      setMessage("Don`t let this to disturb your day ");
      setMessageIcon(
        <FontAwesomeIcon
          icon={faFaceLaughWink}
          style={{ color: "orange", fontSize: "30px" }}
        />
      );
    } else if (
      (sky === "Scattered clouds" || sky === "Broken clouds") &&
      momentOfDay === "night"
    ) {
      setMessage("Don`t let this to disturb your night ");
      setMessageIcon(
        <FontAwesomeIcon
          icon={faFaceLaughWink}
          style={{ color: "whitesmoke", fontSize: "30px" }}
        />
      );
    } else if (sky === "Rain" || sky === "Shower rain") {
      setMessage("You will definitely need this: ");
      setMessageIcon(
        <FontAwesomeIcon
          icon={faUmbrella}
          style={{ color: "purple", fontSize: "30px" }}
        />
      );
    } else if (sky === "Thunderstorm") {
      setMessage("Thor is coming in town ");
      setMessageIcon(
        <FontAwesomeIcon
          icon={faFaceFlushed}
          style={{ color: "orange", fontSize: "30px" }}
        />
      );
    } else if (sky === "Snow") {
      setMessage("HO ! HO ! HO ! ");
      setMessageIcon(
        <FontAwesomeIcon
          icon={faSleigh}
          style={{ color: "red", fontSize: "30px" }}
        />
      );
    }
  }

  useEffect(() => {
    handleMessage();
  }, [momentOfDay]);

  return (
    <div className="WeatherMessage">
      {<h2>{message} </h2>}
      {messageIcon}
    </div>
  );
}
