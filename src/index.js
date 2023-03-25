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

  // setup current date of the month
  let dayOfMonth = now.getDate();

  // setup current month
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[now.getMonth()];

  // setup current hour and minute
  let currentTime = `${now.getHours()}:${now.getMinutes()}`;

  // update the current date and time using innerHTML
  let currentDate = document.querySelector("#current-date");
  currentDate.innerHTML = `${weekDay} ${dayOfMonth} ${month}, ${currentTime}`;
}

// search for the entered city
function searchCity(event) {
  event.preventDefault();
  let enteredCityName = document.querySelector("#entered-city-name");
  let cityTitle = document.querySelector("#city-title");

  // check if the entered value isn't null
  if (enteredCityName.value) {
    // change the first char of the city name to uppercase
    let formattedCityTitle =
      enteredCityName.value.charAt(0).toUpperCase() +
      enteredCityName.value.slice(1);

    // update city title
    cityTitle.innerHTML = formattedCityTitle;

    // empty the search box
    enteredCityName.value = null;
  }
}

// updates the current date and time on the page load
updateDate();

// update city name after pressing search
let searchForm = document.querySelector(".search-form");
searchForm.addEventListener("submit", searchCity);
