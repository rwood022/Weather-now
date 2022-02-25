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

    function fetchUVI (uvi) {
        fetch (
            `https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid=` + APIkey
        )
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            display(data);
        })
    }


   function display (data){
        var { name } = data;
        // var { current } = current.uvi;
        var { temp, humidity } = data.main;
        var { speed }= data.wind;
        document.querySelector(".town").innerHTML = "Weather in " + name;
        document.querySelector(".temp").innerHTML = temp + "F";
        document.querySelector(".humidity").innerHTML = "Humidity: " + humidity + "%";
        document.querySelector(".windSpeed").innerHTML = "Wind Speed:" + speed + "mph";
        // document.querySelector(".uvIndex").innerHTML = "Current UV Index:" + current;
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



