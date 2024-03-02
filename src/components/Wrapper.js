import SearchBar from "./SearchBar";
import Icon from "./Icon";
import Info from "./Info";
import ErrorMessage from "./ErrorMessage";
import WeatherMessage from "./WeatherMessage";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import DateTime from "./DateTime";

export default function Wrapper() {
  const [cityName, setCityName] = useState("Bucharest");
  const [countryCode, setCountryCode] = useState("RO");
  const [loading, setLoading] = useState(false);
  const [sky, setSky] = useState("");
  const [skyDescription, setSkyDescription] = useState("");
  const [temp, setTemp] = useState(0);
  const [windSpeed, setWindSpeed] = useState(0);
  const [minTemp, setMinTemp] = useState(0);
  const [maxTemp, setMaxTemp] = useState(0);
  const [feelsLike, setFeelsLike] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const [timezone, setTimezone] = useState();
  const [momentOfDay, setMomentOfDay] = useState("");

  function nameProvider(name) {
    setCityName(name);
  }

  async function fetchData() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=b3fa989ef13c5d36b959d542856ffdd3&units=metric`
      );
      const data = await response.json();

      setLoading(false);
      setSky(data.weather[0].main);
      setSkyDescription(data.weather[0].description);
      setTemp(data.main.temp);
      setWindSpeed(data.wind.speed);
      setMinTemp(data.main.temp_min);
      setMaxTemp(data.main.temp_max);
      setFeelsLike(data.main.feels_like);
      setCountryCode(data.sys.country);
      setTimezone(data.timezone / 3600);
    } catch (error) {
      console.error(error);
      setErrorMessage(error);
      setLoading(false);
    }
  }

  function handlePartOfDay(moment) {
    setMomentOfDay(moment);
  }

  useEffect(() => {
    fetchData();
    setErrorMessage("");
    handlePartOfDay();
  }, [cityName]);

  return (
    <div className="Wrapper">
      <SearchBar nameProvider={nameProvider} />

      {loading ? (
        <>
          <h2>Loading, please wait... </h2>
          <FontAwesomeIcon
            icon={faSpinner}
            style={{ color: "lightblue", fontSize: "40px" }}
          />
        </>
      ) : (
        <>
          {errorMessage ? (
            <ErrorMessage />
          ) : (
            <>
              <div className="icon-container">
                <Icon
                  sky={sky}
                  skyDescription={skyDescription}
                  loading={loading}
                  cityName={cityName}
                  countryCode={countryCode}
                  errorMessage={errorMessage}
                  momentOfDay={momentOfDay}
                />
                <DateTime
                  timezone={timezone}
                  cityName={cityName}
                  handlePartOfDay={handlePartOfDay}
                />
              </div>
              <Info
                loading={loading}
                temp={temp}
                windSpeed={windSpeed}
                maxTemp={maxTemp}
                minTemp={minTemp}
                feelsLike={feelsLike}
                errorMessage={errorMessage}
              />

              <WeatherMessage
                momentOfDay={momentOfDay}
                sky={sky}
                cityName={cityName}
              />
            </>
          )}
        </>
      )}
    </div>
  );
}
