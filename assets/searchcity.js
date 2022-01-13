var rootUrl = "https://api.openweathermap.org";
var APIkey = "f908e2482b3256d6ec8a552a28745317";

// on local HTML
var searchCity = document.querySelector("#search-city");
var searchInputVal = document.querySelector("#search-input");
var currentDayCard = document.querySelector("#current-day");
var fiveDayCards = document.querySelector("#fiveDay");


function renderCurrentData (city, weather, timezone) {
  var date = dayjs().tz(timezone).format("M/D/YYYY");

    var tempFar = weather.temp;
    var windMph = weather.wind_speed;
    var humidity = weather.humdity;
    var uvi = weather.uvi; 
    var icon = `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`;
    var iconDescript =  weather.weather[0].description || weather[0].main;
}

function fetch(searchCity) {
    var apiUrl = `${rootUrl}`
}




function handleSearchFormSubmit(event) {
    event.preventDefault();
    var search = searchInputVal.value.trim();

    var searchInputVal = document.querySelector("#search-input").value;

    if (!searchInputVal) {
        console.error("You need to type the name of a city!");
        return;
    }

    var queryString ="./search-results.html?q=" + searchInputVal;
}

searchCity.addEventListener("submit", handleSearchFormSubmit);


