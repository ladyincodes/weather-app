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
function searchCity(event) {
  event.preventDefault();
  let enteredCityName = document.querySelector("#entered-city-name");
  let cityTitle = document.querySelector("#city-title");

  let cityName = enteredCityName.value.trim();

  // check if the entered value isn't null
  if (cityName) {
    // change the first char of the city name to uppercase
    let formattedCityTitle =
      cityName.charAt(0).toUpperCase() + cityName.slice(1);

    // update city title
    cityTitle.innerHTML = formattedCityTitle;
  }
  // empty the search box
  enteredCityName.value = null;
}

// update the selecte city tempreture
function updateTempreture() {
  disableCelsiusTempreture();
}

// change current fahrenheit tempreture to celsius
function updateToCelsius(event) {
  event.preventDefault();
  disableCelsiusTempreture();

  // update temreture from F to C
  let currentTempreture = document.querySelector("#current-tempreture");
  let tempreture = Number(currentTempreture.innerHTML);
  let celsiusTempreture = Math.round((tempreture - 32) / 1.8);
  currentTempreture.innerHTML = celsiusTempreture;
}

// disable Celsius tempreture link when it's showing the Celsius unit
function disableCelsiusTempreture() {
  // added selected class and disabled celsius href
  let celsiusLink = document.querySelector("#celsius");
  celsiusLink.classList.add("selected_tempreture");
  document.getElementById("celsius").removeAttribute("href");

  // removed selected class and enabled fahrenheit href
  let fahrenheitLink = document.querySelector("#fahrenheit");
  fahrenheitLink.classList.remove("selected_tempreture");
  fahrenheitLink.setAttribute("href", "#");
}

// change current celsius tempreture to fahrenheit
function updateToFahrenheit(event) {
  event.preventDefault();

  disableFahrenheitTempreture();

  // update temreture
  let currentTempreture = document.querySelector("#current-tempreture");
  let tempreture = Number(currentTempreture.innerHTML);
  let fahrenheitTempreture = Math.round(tempreture * 1.8 + 32);
  currentTempreture.innerHTML = fahrenheitTempreture;
}

// disable Fahrenheit tempreture link when it's showing the in Fahrenheit unit
function disableFahrenheitTempreture() {
  // added selected class and disabled fahrenheit href
  let fahrenheitLink = document.querySelector("#fahrenheit");
  fahrenheitLink.classList.add("selected_tempreture");
  document.getElementById("fahrenheit").removeAttribute("href");

  // removed selected class and enabled celsius href
  let celsiusLink = document.querySelector("#celsius");
  celsiusLink.classList.remove("selected_tempreture");
  celsiusLink.setAttribute("href", "#");
}

// update city name after pressing search
let searchForm = document.querySelector(".search-form");
searchForm.addEventListener("submit", searchCity);

// change tempreture to Fahrenheit
let fahrenheit = document.querySelector("#fahrenheit");
fahrenheit.addEventListener("click", updateToFahrenheit);

// change tempreture to Celsius
let celsius = document.querySelector("#celsius");
celsius.addEventListener("click", updateToCelsius);

// updates the current date and time on the page load
updateDate();

// updates the tempreture
updateTempreture();
