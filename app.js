
const apiKey = "&appid=13b8a273be94dca2ab17bb8abfd4c6ea&units=metric"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q="

//&appid=
const searchBox = document.querySelector(".search input")
const searchButton = document.querySelector(".search button")
const weatherIcon = document.querySelector(".Weather-icon")

//search city 


async function checkweather(city){
    const response = await fetch(apiUrl + city + apiKey)

    if(response.status == 404){
        document.querySelector(".error").style.display = "block"
        document.querySelector(".Weather").style.display = "none"
    }
    else{
        
    var data = await response.json()

    //innerHTML will update the data of city in file
    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C"
    document.querySelector(".humidity").innerHTML = data.main.humidity
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h"

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "C:/Users/ashri/OneDrive/Desktop/JS PRACTICE/Weather App/clouds.png"
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "C:/Users/ashri/OneDrive/Desktop/JS PRACTICE/Weather App/Rainy (2).png"
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "C:/Users/ashri/OneDrive/Desktop/JS PRACTICE/Weather App/clear.png"
    }
    else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "C:/Users/ashri/OneDrive/Desktop/JS PRACTICE/Weather App/snow.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "C:/Users/ashri/OneDrive/Desktop/JS PRACTICE/Weather App/drizzle.png"
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "C:/Users/ashri/OneDrive/Desktop/JS PRACTICE/Weather App/mist.png"
    }
    else if(data.weather[0].main == "Haze"){
        weatherIcon.src = "C:/Users/ashri/OneDrive/Desktop/JS PRACTICE/Weather App/haze.png"
    }

    document.querySelector(".Weather").style.display = "block"
    document.querySelector(".error").style.display = "none"

    }
}

// // the city in the box is value and is passed through the function called weather..

searchButton.addEventListener("click",()=>{
    checkweather(searchBox.value)
})

checkweather()