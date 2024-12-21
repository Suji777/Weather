const apiKey = "b67cd83942fe974a8d3d067101ec9073";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + `q=${city}&appid=${apiKey}`);
    const data = await response.json();

    if (response.ok) {
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        // Update weather icon
        const weather = data.weather[0].main;
        if (weather === "Clouds") weatherIcon.src = "images/clouds.png";
        else if (weather === "Clear") weatherIcon.src = "images/clear.png";
        else if (weather === "Rain") weatherIcon.src = "images/rain.png";
        else if (weather === "Mist") weatherIcon.src = "images/mist.png";

        // Display weather card
        document.querySelector(".weather").classList.remove("d-none");
    } else {
        alert("City not found!");
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
