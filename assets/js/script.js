function initPage() {
    const inputEl = document.getElementById("city-input");
    const searchEl = document.getElementById("search-button");
    const nameEl = document.getElementById("city-name");
    const currentPicEl = document.getElementById("current-pic");
    const currentTempEl = document.getElementById("temperature");
    const currentHumidityEl = document.getElementById("humidity");4
    const currentWindEl = document.getElementById("wind-speed");
    const currentUVEl = document.getElementById("UV-index");

    const APIKey = "c9a9ed03a355403f4cb9a36e931c0b4a";
//  When search button is clicked, read the city name typed by the user
    searchEl.addEventListener("click",function() {
        const searchTerm = inputEl.value;
//  Using saved city name, execute a current condition get request from open weather map api
        let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + searchTerm + "&appid=" + APIKey;
        axios.get(queryURL)
        .then(function(response){
            console.log(response);
//  Parse response to display current conditions
            nameEl.innerHTML = response.data.name;
            let weatherPic = response.data.weather[0].icon;
            currentPicEl.setAttribute("src","https://openweathermap.org/img/wn/" + weatherPic + "@2x.png");
            currentPicEl.setAttribute("alt",response.data.weather[0].description);
            currentTempEl.innerHTML = "Temperature: " + k2f(response.data.main.temp) + " &#176F";
            currentHumidityEl.innerHTML = "Humidity: " + response.data.main.humidity + "%";
            currentWindEl.innerHTML = "Wind Speed: " + response.data.wind.speed + " MPH";
            let lat = response.data.coord.lat;
            let lon = response.data.coord.lon;
            let UVQueryURL = "https://api.openweathermap.org/data/2.5/uvi/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + APIKey + "&cnt=1";
            axios.get(UVQueryURL)
            .then(function(response){
                let UVIndex = document.createElement("span");
                UVIndex.setAttribute("class","badge badge-danger");
                UVIndex.innerHTML = response.data[0].value;
                currentUVEl.innerHTML = "UV Index: ";
                currentUVEl.append(UVIndex);
            });
        });
    })

    function k2f(K) {
        return Math.floor((K - 273.15) *1.8 +32);
    }


//  Using saved city name, execute a 5-day forecast get request from open weather map api
//  Parse response to display forecast for next 5 days underneath current conditions
//  Save user's search requests and display them underneath search form
//  When page loads, automatically generate current conditions and 5-day forecast for the last city the user searched for

}
initPage();