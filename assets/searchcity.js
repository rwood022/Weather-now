var rootUrl = "https://api.openweathermap.org";
var APIkey = f908e2482b3256d6ec8a552a28745317;


var searchCity = document.querySelector("#search-city");

function handleSearchFormSubmit(event) {
    event.preventDefault();

    var searchInputVal = document.querySelector("#search-input").value;

    if (!searchInputVal) {
        console.error("You need to type the name of a US city!");
        return;
    }

    var queryString ="./search-results.html?q=" + searchInputVal;
}

searchCity.addEventListener("submit", handleSearchFormSubmit);

    
