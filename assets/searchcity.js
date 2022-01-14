var APIkey = "f908e2482b3256d6ec8a552a28745317";
var previousViews = [];

// on local HTML
var searchCity = document.querySelector("search-city");
var searchInputVal = document.querySelector("search-input");
var currentDayCard = document.querySelector("current-day");
var fiveDayCards = document.querySelector("#iveDay");
var previousViewsContainer = document.querySelector("search-list");

dayjs.extend(window.dayjs_plugin_utc);
dayjs.extend(window.dayjs_plugin_timezone);


var app = {
    init: function() {
        document.getElementById("#btnSearch");
        document.addEventListener("click", fetchWeather);
        document.getElementById("#btnSearch");
        document.addEventListener("click", fetchCoordinates);
    },

    function: fetchWeather(location) {
        var { lat } = location;
        var { lon } = location;
        var city = location.name;
        var units = metric;
        var lang = en;
        var apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${APIkey}`;
        console.log(location);
    
        fetch(apiUrl)
            .then(function (response) {
            return response.json();
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
    
        displayWeather(function (response) {
            console.log(response);
            var today = document.querySelector("#current-day");
    });
        
    


// search history
    function previousViews() {
        previousViewsContainer.innerHTML = "";

        for (var i = previousViews.length - 1; i >= 0; i--) {
            var button = document.createElement("button");
            button.setAttribute("type", "button");
            button.setAttribute( "aria-controls", "current day forecast");
            button.classList.add("search-list", "search-list");
            button.setAttribute("get-data", previousViews[i]);
            button.textContent = previousViews[i];
            previousViewsContainer.append(button);
            console.log("get-data");
        }
    }

    function renderCurrentData (city, weather, timezone) {  console.log(city, weather, timezone);

    var date = dayjs().tz(timezone).format("M/D/YYYY");

        var tempFar = weather.temp;
        var windMph = weather.wind_speed;
        var humidityWea = weather.humdity;
        var uvi = weather.uvi; 
        var icon = `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`;
        var iconDescript =  weather.weather[0].description || weather[0].main;

        var box = document.createElement("div");
        var boxBody = document.createElement("div");
        var date = document.createElement("h1");
        var iconPic = document.createElement("img");
        var temp = document.createElement("li");
        var wind = document.createElement("li");
        var humid = document.createElement("li");
        var uvIndex = document.createElement("li");



    }
//lat and long values to fetch the weather




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

        var searchInputVal = document.querySelector("#search-input").value;

    
        searchInputVal.value = "";
        console(searchInputVal.value);


        if (!searchInputVal.value) {
            console.error("You need to type the name of a city!");
            return;
        }

        fetchCoordinates(search);
    }

    searchCity.addEventListener("submit", handleSearchFormSubmit);


};

previousViews();
