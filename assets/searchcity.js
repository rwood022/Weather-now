var APIkey = "f908e2482b3256d6ec8a552a28745317";

// on local HTML
var searchCity = document.querySelector("#search-city");
var searchInputVal = document.querySelector("#search-input");
var currentDayCard = document.querySelector("#current-day");
var fiveDayCards = document.querySelector("#fiveDay");


dayjs.extend(window.dayjs_plugin_utc);
dayjs.extend(window.dayjs_plugin_timezone);

function renderCurrentData (city, weather, timezone) {
  var date = dayjs().tz(timezone).format("M/D/YYYY");

    var tempFar = weather.temp;
    var windMph = weather.wind_speed;
    var humidity = weather.humdity;
    var uvi = weather.uvi; 
    var icon = `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`;
    var iconDescript =  weather.weather[0].description || weather[0].main;
}
//lat and long values to fecth the weather
function fetchWeather(location) {
    var { lat } = location;
    var { lon } = location;
    var city = location.name;
    var units = metric;
    var lang = en;
    var apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${APIkey}`;
    console.log(location);

    fetch(apiUrl)
        .then(function (resp) {
        return resp.json();
         })
    
        .then(function (data) {
        if (!data[0]) {
            alert("Location not found")
        } else {
            appendToHistory(search);
            displayWeather(data[0]);
        } 
        })
        .catch(console.err);

    displayWeather(function (resp) {
        console.log(resp);
        var today = document.querySelector("#current-day");
})
    




function fetchCoordinates(search) {
    var apiUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=5&appid=${APIkey}`;
    

    fetch(apiUrl)
        .then(function (res){
        return res.json();
    })
    .then(function (data){
        if (!data[0]) {
            alert("invalid");
        } else {
            fetchWeather(data[0]);
        }
    })
    .catch(function (err) {
        console.error(err);
    });
}


function handleSearchFormSubmit(event) {
    event.preventDefault();
    var search = searchInputVal.value.trim();
    fetchCoordinates(search);
    searchInputVal.value = "";


    if (!searchInputVal.value) {
        console.error("You need to type the name of a city!");
        return;
    }
}

searchCity.addEventListener("submit", handleSearchFormSubmit);

}
