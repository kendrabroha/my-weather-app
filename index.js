function showTemperature(response) {
  let temperatureElement = document.querySelector("#current-temperature");
  let cityElement = document.querySelector("#city-display");
  let dateElement = document.querySelector("#date");

  let temperature = Math.round(response.data.temperature.current);
  temperatureElement.innerHTML = temperature;
  cityElement.innerHTML = response.data.city;
  let now = new Date(response.data.time * 1000);
  dateElement.innerHTML = formatDate(now);
}

function searchCity(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#city-input");
  let city = searchInputElement.value;

  let apiKey = "502o24faae288d40b32418t251a27f9b";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(showTemperature);
}
function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDate = days[day];
  return `${formattedDate} ${hours}:${minutes}`;
}

document.querySelector("#city-search").addEventListener("submit", searchCity);
