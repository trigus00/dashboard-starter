


let api_key = 'cd80ea31f0dcfaa9dffb1cd446d9a99b';
let search_weather = document.getElementById("btnW")

const temps = document.getElementById("temp");
const feel = document.getElementById("feel")
const high = document.getElementById("high")
const low = document.getElementById("low")
const location = document.getElementById("location")
let city = "Katy,Texas";
console.log(search_weather)

search_weather.addEventListener("click", (event) => {

    event.preventDefault()

    city = document.getElementById("searchW").value
    // console.log(city)
    
    test(city)
})

setInterval( async () => { await test(city)} ,2000)

async function test(city) {
      
    // console.log(search_weather.key)

    try {
        let weather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=imperial`)
        location.textContent = "You searched for: "+weather.data.name
        temps.textContent = Math.round(weather.data.main.temp)+"℉ \n"+ weather.data.weather[0].description
        feel.textContent = Math.round(weather.data.main.feels_like)
        high.textContent = Math.round(weather.data.main.temp_max)
        low.textContent =  Math.round(weather.data.main.temp_min)
        
        
    } catch (error) {
        alert("Invalid City,State, and or zip code")
       
    }
   
}