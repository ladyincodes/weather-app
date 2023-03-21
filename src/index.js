let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  oslo: {
    temp: -5,
    humidity: 20,
  },
};

function checkCity(city) {
  for (let prop in weather) {
    if (prop === city) {
      return true;
    }
  }
}

function printInfo(city) {
  let temprature = weather[city].temp;
  let celsius = Math.round(temprature);
  let fahrenheit = Math.round(celsius * 1.8 + 32);
  let cityName = city.charAt(0).toUpperCase() + city.slice(1);

  alert(
    `It is currently ${celsius}°C (${fahrenheit}°F) in ${cityName} with a humidity of ${weather[city].humidity}%`
  );
}

let city = prompt("Enter a city:").trim().toLowerCase();

if (checkCity(city)) {
  printInfo(city);
} else {
  alert(
    "Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+sydney"
  );
}
