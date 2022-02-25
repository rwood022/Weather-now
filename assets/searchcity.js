var search = document.querySelector("search-input");
var renderSearch = document.getElementById("btnSearch");
console.log("hello");
console.log(renderSearch);

    var APIkey = "f908e2482b3256d6ec8a552a28745317";

    function fetchWeather (city) {
        fetch (
         `https://api.openweathermap.org/data/2.5/weather?q=` + city + `&units=metric&appid=` + APIkey
        )
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            display(data);
        });
    }


   function display (data){
        var { name } = data;
        // var { forecast } = data.weather[0];
        var { temp, humidity } = data.main;
        var { speed }= data.wind;
        // console.log(town,forecast,temp,humidity,windSpeed);
        document.querySelector(".town").innerHTML = "Weather in " + name;
        // document.querySelector(".forecast").innerHTML = "Currently: " + forecast;
        document.querySelector(".temp").innerHTML = temp + "F";
        document.querySelector(".humidity").innerHTML = "Humidity: " + humidity + "%";
        document.querySelector(".windSpeed").innerHTML = "Wind Speed:" + speed + "mph";
    }
function searchCity() {
    console.log("click");
        fetchWeather(document.querySelector("#search-input").value);
    }


renderSearch.addEventListener("click", function(e){
    e.preventDefault()
   searchCity()
});



// var previousViews = [];

// // on local HTML
// var searchCity = document.querySelector("search-city");
// var searchInputVal = document.querySelector("search-input");
// var currentDayCard = document.querySelector("current-day");
// // var fiveDayCards = document.querySelector("#iveDay");
// var previousViewsContainer = document.querySelector("search-list");

// dayjs.extend(window.dayjs_plugin_utc);
// dayjs.extend(window.dayjs_plugin_timezone);


// var app = {
//     init: function() {
//         document.getElementById("#btnSearch");
//         document.addEventListener("click", fetchWeather);
//         document.getElementById("#btnSearch");
//         document.addEventListener("click", fetchCoordinates);
//     };

//     function fetchWeather(location) {
//         var { lat } = location;
//         var { lon } = location;
//         var city = location.name;
//         var units = metric;
//         var lang = en;
//         var apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&units=metric&appid=${APIkey}`;
//         console.log(location);

    


//         fetch(apiUrl)
//             .then(function (response) {
//             return response.json();
//              })

        
//             .then(function (data) {
//             if (!data[0]) {
//                 alert("Location not found")
//             } else {
//                 appendToHistory(search);
//                 displayWeather(data[0]);
//             }
//             .catch(function (err) {
//                 console.error(err);
//             });
       
            
    
// //         displayWeather(function (response) {
// //             console.log(response);
// //             var today = document.querySelector("#current-day");

// //         });        
        
    
        
        
    

// // search history
// //     function previousViews() {
// //         previousViewsContainer.innerHTML = "";

// //         for (var i = previousViews.length - 1; i >= 0; i--) {
// //             var button = document.createElement("button");
// //             button.setAttribute("type", "button");
// //             button.setAttribute( "aria-controls", "current day forecast");
// //             button.classList.add("search-list", "search-list");
// //             button.setAttribute("get-data", previousViews[i]);
// //             button.textContent = previousViews[i];
// //             previousViewsContainer.append(button);
// //             console.log("get-data");
// //         }
// //     }

// //     function renderCurrentData (city, weather, timezone) {  console.log(city, weather, timezone);

// //     var date = dayjs().tz(timezone).format("M/D/YYYY");

// //         var tempFar = weather.temp;
// //         var windMph = weather.wind_speed;
// //         var humidityWea = weather.humdity;
// //         var uvi = weather.uvi; 
// //         var icon = `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`;
// //         var iconDescript =  weather.weather[0].description || weather[0].main;

// //         var box = document.createElement("div");
// //         var boxBody = document.createElement("div");
// //         var date = document.createElement("h1");
// //         var iconPic = document.createElement("img");
// //         var temp = document.createElement("li");
// //         var wind = document.createElement("li");
// //         var humid = document.createElement("li");
// //         var uvIndex = document.createElement("li");

//         box.setAttribute("class", "box");
//         boxBody.setAttribute("class", "box-body");
//         box.append(boxBody);

//         date.setAttribute("class", "h1");
//         temp.setAttribute("class", "box-text");
//         wind.setAttribute("class", "box-text");
//         humidity.setAttribute("class", "box-text");

//         date.textContent = `${city} (${date})`;
//         iconPic.setAttribute("src", icon);
//         icon.setAttribute("alt", iconDescript);
//         iconPic.setAttribute("class", "iconPic");
//         date.append(iconPic);
//         temp.textContent =`Temp: ${tempFar}F`;
//         wind.textContent = `Wind: ${windSpeed}MPH`;
//         humidityWea.textContent = `Humiditiy: ${humidity}%`;
//         boxBody.append(date, temp, wind, humidityWea);
//         uvIndex.textContent = "UV Index: ";
//         uviBadge.classList.add("btn");

//         if (uvi < 3) {
//             uviBadge.classList.add("btn-success");
//         } else if (uvi < 7) {
//             uviBadge.classList.add("btn-warning");
//         } else {
//             uviBade.classList.add("btn-danger");
//         }
//         uviBadge.textContent = uvi;
//         uviIndex.append(uviBadge);
//         boxBody.append(uvIndex);

//     }
// //lat and long values to fetch the weather

//     function fetchCoordinates(search) {
//         var apiUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=5&appid=${APIkey}`;
    

//         fetch(apiUrl)
//         .then(function (res){
//         return res.json();
//         })
//         .then(function (data){
//         if (!data[0]) {
//             alert("invalid");
//         } else {
//             fetchWeather(data[0]);
//         }
//         })
//         .catch(function (err) {
//         console.error(err);
//          });
//     }


//     function handleSearchFormSubmit(event) {
//         event.preventDefault();

//         var searchInputVal = document.querySelector("#search-input").value;

    
//         searchInputVal.value = "";
//         console(searchInputVal.value);


//         if (!searchInputVal.value) {
//             console.error("You need to type the name of a city!");
//             return;
//         }
//         fetchCoordinates(search);
//     }
    
// };

// function handlepreviousSearch(event) {
//     if(!event.target.matches(".search-list")) {
//         return;
//     }

//     var button = event.target;
//     var searchCity = button.getAttribut("get-data");
//     fetchCoordinates(searchCity);
// }

// previousViews();
// searchCity.addEventListener("submit", handleSearchFormSubmit);

