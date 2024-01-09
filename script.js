const apiKey = "70000c2d032c87b3fb55ed8153b98d5e";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

    async function checkWeather(city){
        const response = await fetch(apiUrl + `&q=${city}` + `&appid=${apiKey}`);

        if(response.status != 200){
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
        }else{
            var data = await response.json();

document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

if(data.weather[0].main == "Clouds"){ 
    document.querySelector(".weatherIcon").src = "images/clouds.png";

}else if(data.weather[0].main == "Clear"){ 
    document.querySelector(".weatherIcon").src = "images/clear.png";

}else if(data.weather[0].main == "Rain"){ 
    document.querySelector(".weatherIcon").src = "images/rain.png";

}else if(data.weather[0].main == "Drizzle"){ 
    document.querySelector(".weatherIcon").src = "images/drizzle.png";

}else if(data.weather[0].main == "Mist"){ 
    document.querySelector(".weatherIcon").src = "images/mist.png";

}
document.querySelector(".weather").style.display = "block";
document.querySelector(".error").style.display = "none";
        }
    }
searchBtn.addEventListener("click", ()=>{
    document.querySelector(".weather").style.display = "none";
    document.querySelector(".error").style.display = "none";
    document.querySelector(".weatherIcon").src ="";
    checkWeather(searchBox.value);
    })