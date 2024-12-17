const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const apiKey = "ac67821df582bf8c49b3b98f861d177b";
 
const inp = document.querySelector(".search input");
const btn = document.querySelector(".search button");
const icon = document.querySelector(".weather-icon");


async function check(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds"){
        icon.src = "images/clouds.png";
    }
    else if(data.weather[0].main == "Haze" || data.weather[0].main == "Smoke"){
        icon.src = "images/haze.png";
    }
    else if(data.weather[0].main == "Clear"){
        icon.src = "images/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        icon.src = "images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        icon.src = "images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        icon.src = "images/mist.png";
    }
    else if(data.weather[0].main == "Snow"){
        icon.src = "images/snow.png";
    }

    document.querySelector(".weather").style.display = "block"; 

    console.log(data);
    
}

btn.addEventListener("click", () => {
    check(inp.value);
});