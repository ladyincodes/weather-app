let apiKey = "7746bdeabca928cfedcad71e52fd9d66";
let apiEndPoint = `https://api.openweathermap.org/data/2.5/weather?`;
let units = "metric";
let city = "London";
let celsiusTempreture = null;

// update city name's field info
function updateCurrentCityTitleField(cityName) {
  let currentCityField = document.querySelector("#city-title");
  currentCityField.innerHTML = cityName;
}

// update tempreture's field info
function updateTempretureField(tempreture) {
  let tempretureField = document.querySelector("#current-tempreture");
  tempretureField.innerHTML = tempreture;
}

// updates weather description fields info
function updateDescriptionField(weatherDescription) {
  let descriptionField = document.querySelector("#weather-description");
  descriptionField.innerHTML = weatherDescription;
}

// update wind speed field information
function updateWindField(windSpeed) {
  let windSpeedField = document.querySelector("#wind");
  windSpeedField.innerHTML = `${windSpeed}%`;
}

// get city's information from openweathermap.org
function searchCityInfo(response) {
  let cityName = response.data.name;
  updateCurrentCityTitleField(cityName);

  celsiusTempreture = Math.round(response.data.main.temp);
  updateTempretureField(celsiusTempreture);

  let weatherDescription = response.data.weather[0].main;
  updateDescriptionField(weatherDescription);

  let windSpeed = Math.round(response.data.wind.speed);
  updateWindField(windSpeed);
}

// retrive data by API call
function getData() {
  let apiUrl = `${apiEndPoint}q=${city}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(searchCityInfo).catch(canNotFindCity);
}

function canNotFindCity() {
  alert("Please check the spell of your desired city and try again!");
}

// loads the page by a default city
function updateDataOnLoad() {
  // tempreture unit on load is Celsius by default
  disableCelsiusTempreture();
  getData();
}

// updates current date and time on loading page
function updateDate() {
  // Current date
  let now = new Date();

  // setup current day of the week
  let weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let weekDay = weekDays[now.getDay()];

  // setup current hour and minute
  let minute = now.getMinutes();
  if (minute < 10) {
    minute = `0${minute}`;
  }

  let hour = now.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let currentTime = `${hour}:${minute}`;

  // update the current date and time using innerHTML
  let currentDate = document.querySelector("#current-date");
  currentDate.innerHTML = `${weekDay} ${currentTime}`;
}

// search for the entered city
function getCityFromInput(event) {
  event.preventDefault();
  let enteredCityName = document.querySelector("#entered-city-name");
  let cityTitle = document.querySelector("#city-title");

  let cityName = enteredCityName.value.trim();

  // check if the entered value isn't null
  if (cityName) {
    // update city variable
    city = cityName;
    getData();
  }
  // empty the search box
  enteredCityName.value = null;
}

// change current fahrenheit tempreture to celsius
function updateToCelsius(event) {
  event.preventDefault();
  disableCelsiusTempreture();

  // update temreture from F to C
  let currentTempratureElement = document.querySelector("#current-tempreture");
  currentTempratureElement.innerHTML = celsiusTempreture;
}

// disable Celsius tempreture link when it's showing the Celsius unit
function disableCelsiusTempreture() {
  // added selected class and disabled celsius href
  let celsiusLink = document.querySelector("#celsius");
  celsiusLink.classList.add("selected_tempreture");
  document.getElementById("celsius").removeAttribute("href");

  celsiusLink.removeEventListener("click", updateToCelsius);

  // removed selected class and enabled fahrenheit href
  let fahrenheitLink = document.querySelector("#fahrenheit");
  fahrenheitLink.classList.remove("selected_tempreture");
  fahrenheitLink.setAttribute("href", "#");

  fahrenheitLink.addEventListener("click", updateToFahrenheit);
}

// change current celsius tempreture to fahrenheit
function updateToFahrenheit(event) {
  event.preventDefault();
  disableFahrenheitTempreture();

  // update temreture
  let currentTempratureElement = document.querySelector("#current-tempreture");
  let fahrenheitTempreture = Math.round(celsiusTempreture * 1.8 + 32);
  currentTempratureElement.innerHTML = fahrenheitTempreture;
}

// disable Fahrenheit tempreture link when it's showing the in Fahrenheit unit
function disableFahrenheitTempreture() {
  // added selected class and disabled fahrenheit href
  let fahrenheitLink = document.querySelector("#fahrenheit");
  fahrenheitLink.classList.add("selected_tempreture");
  document.getElementById("fahrenheit").removeAttribute("href");

  fahrenheitLink.removeEventListener("click", updateToFahrenheit);

  // removed selected class and enabled celsius href
  let celsiusLink = document.querySelector("#celsius");
  celsiusLink.classList.remove("selected_tempreture");
  celsiusLink.setAttribute("href", "#");

  celsiusLink.addEventListener("click", updateToCelsius);
}

// retrive current position latitude and longitude
function getPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(searchCityInfo).catch(canNotFindCity);
  enableCurrentBtn();
}

// get current
function getCurrentLocation() {
  // disables current btn until fetching data
  disableCurrentBtn();
  navigator.geolocation.getCurrentPosition(getPosition);
}

// disables current btn and starts loading until fetching data
function disableCurrentBtn() {
  let currentButton = document.querySelector("#current-btn");
  currentButton.setAttribute("disabled", "");

  currentButton.innerHTML = `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Current`;
}

// enables current btn after fatched data
function enableCurrentBtn() {
  let currentButton = document.querySelector("#current-btn");
  currentButton.removeAttribute("disabled");

  currentButton.innerHTML = `Current`;
}

// update city name after pressing search
let searchForm = document.querySelector(".search-form");
searchForm.addEventListener("submit", getCityFromInput);

// get current location and update the weather
let currentButton = document.querySelector("#current-btn");
currentButton.addEventListener("click", getCurrentLocation);

// change tempreture to Fahrenheit
let fahrenheit = document.querySelector("#fahrenheit");
fahrenheit.addEventListener("click", updateToFahrenheit);

// change tempreture to Celsius
let celsius = document.querySelector("#celsius");
celsius.addEventListener("click", updateToCelsius);

// updates the current date and time on the page load
updateDate();

// updating data while loading the homepage
updateDataOnLoad();

// TODO - update icon image
// FIXME - remember to setAttribute for icon's alt

// TODO - update time according to the API's timestamp

// TODO - add next days forcast
// FIXME - change the colors of numeric elements according to theme
