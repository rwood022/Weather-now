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
    
            // 5- day forecast
            document.querySelector("#day1").innerHTML =
            `<div id="date1">${moment().add(1, 'days').format("MM/DD/YYYY")}</div>
            <div class="temp">${fiveDayArray[i].temp.day} F</div>
            <img src="http://openweathermap.org/img/w/${fiveDayArray[i].weather[0].icon}.png" alt="" class="icon" />
            <div class="humidity">${fiveDayArray[i].humidity} %</div>
            <div class="windSpeed">${fiveDayArray[i].wind_speed} mph</div>`


            document.querySelector("#day2").innerHTML =
            `<div id="day2">${moment().add(2, 'days').format("MM/DD/YYYY")}</div>
            <div class="temp">${fiveDayArray[1].temp.day} F</div>
            <img src="http://openweathermap.org/img/w/${fiveDayArray[1].weather[0].icon}.png" alt="" class="icon" />
            <div class="humidity">${fiveDayArray[1].humidity} %</div>
            <div class="windSpeed">${fiveDayArray[1].wind_speed} mph</div>`

            document.querySelector("#day3").innerHTML =
            `<div id="day3">${moment().add(3, 'days').format("MM/DD/YYYY")}</div>
            <div class="temp">${fiveDayArray[2].temp.day} F</div>
            <img src="http://openweathermap.org/img/w/${fiveDayArray[2].weather[0].icon}.png" alt="" class="icon" />
            <div class="humidity">${fiveDayArray[2].humidity} %</div>
            <div class="windSpeed">${fiveDayArray[2].wind_speed} mph</div>`

            document.querySelector("#day4").innerHTML =
            `<div id="day4">${moment().add(4, 'days').format("MM/DD/YYYY")}</div>
            <div class="temp">${fiveDayArray[3].temp.day} F</div>
            <img src="http://openweathermap.org/img/w/${fiveDayArray[3].weather[0].icon}.png" alt="" class="icon" />
            <div class="humidity">${fiveDayArray[3].humidity} %</div>
            <div class="windSpeed">${fiveDayArray[3].wind_speed} mph</div>`

            document.querySelector("#day5").innerHTML =
            `<div id="day5">${moment().add(5, 'days').format("MM/DD/YYYY")}</div>
            <div class="temp">${fiveDayArray[4].temp.day} F</div>
            <img src="http://openweathermap.org/img/w/${fiveDayArray[4].weather[0].icon}.png" alt="" class="icon" />
            <div class="humidity">${fiveDayArray[4].humidity} %</div>
            <div class="windSpeed">${fiveDayArray[4].wind_speed} mph</div>`
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
        
    }


renderSearch.addEventListener("click", function(e){
    e.preventDefault()
   searchCity()
});



