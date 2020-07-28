//storing references of elements in variables
let temperature = document.getElementById("Temp");
let description = document.getElementById("Desc");
let location1 = document.getElementById("loc");
let button1 = document.getElementById("CurrentWeather");
let notification = document.querySelector("notif");
let weather = {};
weather.temperature = {
    unit: "celsius"
}
//adding weather as onclick function on button element
button1.onclick = Weather;

function Weather() {
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(Position, Error);
    } else {
        notification.innerHTML = "Geolocation is not supported by your browser";
    }

    // setting user location
    function Position(position) {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        Weather1(latitude, longitude);
    }

    // showing error if geolocation service is not working
    function Error(error) {
        notification.innerHTML = `${error.message}`;
    }

    // fetching weather details from api
    function Weather1(latitude, longitude) {
        let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=09ca21f95fe2e882270a487a604359d5`;

        fetch(api)
            .then(function (response) {
                let Values = response.json();
                return Values;
            })
            .then(function (Values) {
                weather.temperature.value = Math.floor(Values.main.temp - 273);
                weather.description = Values.weather[0].description;
                weather.city = Values.name;
                weather.country = Values.sys.country;
            })
            .then(function () {
                displayWeather();
            });
    }

    // display weather details
    function displayWeather() {
        temperature.innerHTML = `Current temperature is ${weather.temperature.value}°<span>C</span>`;
        description.innerHTML = `Conditions: ${weather.description}`;
        location1.innerHTML = `Current Location: ${weather.city}, ${weather.country}`;
    }
}