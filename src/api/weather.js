export async function weatherApi(lat, lon) {
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=kr`
  )
    .then((res) => res.json())
    .then((data) => data);
}
