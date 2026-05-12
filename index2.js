

const API_KEY = "1aa3b3a2a30479c44d2b14e77bed9a07";
const BASE_URL ="http://api.openweathermap.org/data/2.5/weather?appid=" + API_KEY + "&units=metric&q=";
const axios=require("axios")
function getWeatherData(city, callback) {
    const url = BASE_URL + city;

    axios.get(url)
        .then((response) => callback(null, response.data))
        .catch((error) => callback(error, null));
}

function printWeather(city) {
    getWeatherData(city, (error, weatherData) => {
        if (error) {
            console.error("Error fetching data:", error);
            return;
        }
        const { temp, humidity } = weatherData.main;
        console.log({ temp, humidity });
    });
}

printWeather("Sousse");