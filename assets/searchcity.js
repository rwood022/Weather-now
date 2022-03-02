var search = document.querySelector("search-input");
var renderSearch = document.getElementById("btnSearch");
var today = moment().format("MM/DD/YYYY");
console.log("hello");
console.log(renderSearch);

    var APIkey = "f908e2482b3256d6ec8a552a28745317";

    function fetchWeather (city) {
        fetch (
         `https://api.openweathermap.org/data/2.5/weather?q=` + city + `&units=imperial&appid=` + APIkey
        )
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            display(data);
            fetchUVI(data.coord.lat, data.coord.lon)
        });
    }

    function fetchFive (fiveDayArray, city) {
        fetch (
            `"https://api.openweathermap.org/data/2.5/forecast?q="`+ city + `&units=imperial&appid=`+ APIkey
        )
        .then((response) => response.json())
        .then((data) => {
            console.log("fetchFive", data);
            // display(data);
        });
        console.log(fiveDayArray);
        for (var i = 0; i < 5; i++) {
            console.log(fiveDayArray[i]);
            // var cardContainer = document.createElement("div");
            // cardContainer.classList.add("five");

            // document.querySelector(".five-day").appendchild(cardContainer);
            // cardContainer.innerHTML = 

            document.querySelector("#day1").innerHTML =
            `<div id="day1">Day </div>
            <div class="temp">${fiveDayArray[i].temp.day} F</div>
            <img src="http://openweathermap.org/img/w/${fiveDayArray[i].weather[0].icon}.png" alt="" class="icon" />
            <div class="humidity">${fiveDayArray[i].humidity} %</div>
            <div class="windSpeed">${fiveDayArray[i].wind_speed} mph</div>`
        }
    }

    function fetchUVI (lat, lon) {
        fetch (
            `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=imperial&appid=` + APIkey
        )
        .then((response) => response.json())
        .then((data) => {
            console.log("fetch uvi", data);
            // display(data);
            var currentUVI = data.current.uvi;
            document.querySelector(".uvIndex").innerHTML = "UV index: " + currentUVI;
            fetchFive(data.daily);
        })
    }


   function display (data){
        var { name } = data;
        var { icon, description } = data.weather[0];
        console.log(data.weather[0]);
        var { temp, humidity } = data.main;
        var { speed }= data.wind;
        var { lat, lon } = data.coord;
        console.log(icon, description, lat, lon);
        document.querySelector(".town").innerHTML = "Weather in " + name +  " ("+ today +") " ; 
        document.querySelector(".temp").innerHTML = temp + "F";
        document.querySelector(".icon").src = `http://openweathermap.org/img/w/` + data.weather[0].icon + `.png`;
        document.querySelector(".description").innerHTML = data.weather[0].description;
        document.querySelector(".humidity").innerHTML = "Humidity: " + humidity + "%";
        document.querySelector(".windSpeed").innerHTML = "Wind Speed:" + speed + "mph";
      
    }
function searchCity() {
    console.log("click");
        fetchWeather(document.querySelector("#search-input").value);
        // fetchUVI(document.querySelector("#search-input").value);
    }


renderSearch.addEventListener("click", function(e){
    e.preventDefault()
   searchCity()
});



