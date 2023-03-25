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

// updates the current date and time on the page load
updateDate();
