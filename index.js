let time = new Date();
let currentTime = document.querySelector("#current-time");
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
currentTime.innerHTML = `${
  days[time.getDay()]
} ${time.getHours()}:${time.getMinutes()}`;

function search(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${city.value}`;
}

let searchButton = document.querySelector("form");
searchButton.addEventListener("submit", search);
