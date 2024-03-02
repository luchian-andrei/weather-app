import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

export default function DateTime({ timezone, handlePartOfDay }) {
  let newDate = new Date();
  let utc = newDate.getUTCHours();
  let minutes = newDate.getMinutes();

  const [momentOfDay, setMomentOfDay] = useState("");
  const [shortLocalTime, setShortLocalTime] = useState();

  function getLocalTime() {
    let localTime = utc + timezone;

    if (localTime > 24) {
      setShortLocalTime(localTime - 24);
    } else {
      setShortLocalTime(localTime);
    }
  }

  function handleMomentOfDay() {
    let dayHours = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

    if (dayHours.indexOf(shortLocalTime) === -1) {
      setMomentOfDay("night");
    } else {
      setMomentOfDay("day");
    }
  }

  useEffect(() => {
    handleMomentOfDay();
    handlePartOfDay(momentOfDay);
  }, [getLocalTime]);

  useEffect(() => {
    getLocalTime();
  }, [timezone]);

  return (
    <div className="DateTime">
      <FontAwesomeIcon className="clock-icon" icon={faClock} />
      <h2>
        {shortLocalTime < 10 ? `0${shortLocalTime}` : shortLocalTime} :{" "}
        {minutes < 10 ? `0${minutes}` : minutes}{" "}
      </h2>
      <h3>{momentOfDay} </h3>
    </div>
  );
}
