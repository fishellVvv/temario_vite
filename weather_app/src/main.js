import "./style.css";

const API_KEY = import.meta.env.VITE_API_KEY;

const getWeather = async (location) => {
  const res = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}&aqi=no`
  );
  const data = await res.json();

  renderWeather(data);
};

const renderWeather = (data) => {
  document.querySelector("#result").innerHTML = `
    <h1>${data.location.name}, ${data.location.country}</h1>
    <h2>${data.current.temp_c}º</h2>
    <p>Fells like: ${data.current.feelslike_c}º</p>
    <img src="${data.current.condition.icon}" al="${data.current.condition.text}"/>
    <p>${data.current.condition.text}</p>
    <p>Humidity: ${data.current.humidity}%</p>
  `;
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#app").innerHTML = `
    <div>
      <input type="text" id="location" placeholder="City, Country"/>
      <button id="searchBtn">Search</button>
      <div id="result"></div>
    </div>
  `;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((pos) => {
      getWeather(`${pos.coords.latitude},${pos.coords.longitude}`);
    });
  }

  document.querySelector("#searchBtn").addEventListener("click", () => {
    const inputValue = document.querySelector("#location").value;
    getWeather(inputValue);
    document.querySelector("#location").value = "";
  });

  document.addEventListener("keypress", (ev) => {
    if (ev.key === "Enter") {
      const inputValue = document.querySelector("#location").value;
      getWeather(inputValue);
      document.querySelector("#location").value = "";
    }
  });
});
