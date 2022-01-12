// var APIkey = f908e2482b3256d6ec8a552a28745317;
// var city
// function searchApi()
// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

var searchCity = document.querySelector("#search-city");

function handleSearchFormSubmit(event) {
    event.preventDefault();

    var searchInputVal = document.querySelector("#search-input").value;

    if (!searchInputVal) {
        console.error("You need to type the name of a US city!");
        return;
    }

    var queryString ="./"
}

searchCity.addEventListener("submit", handleSearchFormSubmit);

    
