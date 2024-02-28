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
      <p>{Math.round(temp)} °C </p>
      <p>{Math.round(windSpeed)} km/h </p>
      <p>{Math.round(maxTemp)} °C</p>
      <p>{Math.round(minTemp)} °C</p>
      <p>{Math.round(feelsLike)} °C</p>
    </div>
  );
}
