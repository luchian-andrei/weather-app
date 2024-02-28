import SearchBar from "./SearchBar";
import Icon from "./Icon";
import RandomMessage from "./RandomMessage";
import Info from "./Info";
import { useState, useEffect } from "react";

export default function Wrapper() {
  const [cityName, setCityName] = useState("New York");
  const [loading, setLoading] = useState(false);
  const [sky, setSky] = useState("");
  const [skyDescription, setSkyDescription] = useState("");
  const [temp, setTemp] = useState(0);
  const [windSpeed, setWindSpeed] = useState(0);
  const [minTemp, setMinTemp] = useState(0);
  const [maxTemp, setMaxTemp] = useState(0);
  const [feelsLike, setFeelsLike] = useState(0);

  function nameProvider(name) {
    setCityName(name);
  }

  async function fetchData() {
    setLoading(true);
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=b3fa989ef13c5d36b959d542856ffdd3&units=metric`
    );
    const data = await response.json();
    console.log(data);
    setLoading(false);
    setSky(data.weather[0].main);
    setSkyDescription(data.weather[0].description);
    setTemp(data.main.temp);
    setWindSpeed(data.wind.speed);
    setMinTemp(data.main.temp_min);
    setMaxTemp(data.main.temp_max);
    setFeelsLike(data.main.feels_like);
  }

  console.log("sky is " + sky);
  console.log("description " + skyDescription);

  useEffect(() => {
    fetchData();
  }, [cityName]);

  return (
    <div className="Wrapper">
      <SearchBar nameProvider={nameProvider} />
      <Icon sky={sky} skyDescription={skyDescription} loading={loading} />
      <RandomMessage loading={loading} />
      <Info
        loading={loading}
        temp={temp}
        windSpeed={windSpeed}
        maxTemp={maxTemp}
        minTemp={minTemp}
        feelsLike={feelsLike}
      />
    </div>
  );
}
