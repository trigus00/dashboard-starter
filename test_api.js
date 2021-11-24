
// const prompt = require('prompt-sync')()
const axios = require('axios');

// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

// ------------------------------------ Start Weather API from OpenWeather ---------------------------------------------------
let api_key = 'cd80ea31f0dcfaa9dffb1cd446d9a99b';
// let city = 'houston'


async function test (city,state) {
    
    let weather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${state}&appid=${api_key}&units=imperial`)
    // console.log(weather.data)
    console.log(weather.data)
} 
test('portland','oregon')

// ------------------------------------ End Weather API from OpenWeather ---------------------------------------------------


// ------------------------------------ Start Quote API from Luke Peavey ---------------------------------------------------

// async function inspiration() {
    
//     const quote =  await axios.get(`https://api.quotable.io/random`);
//     console.log(quote.data.content)

// }

// inspiration()

// ------------------------------------ End Quote API from Luke Peavey ---------------------------------------------------

// ------------------------------------ Start Crypto API from CoinRanking ---------------------------------------------------

// some coins to test 

// api_key = '61f8cd3f-b2bc-4323-bd40-a2cd0d1e0201'
// let search = cardano
// async function crypto(){

 
//     // let search = bitcoin
//     let coin = await axios.get(``);

//     console.log(coin.data[coins])
// }

// crypto()

// ------------------------------------ End Crypto API from CoinRanking ---------------------------------------------------


// ------------------------------------ Start News API from NewsAPI -------------------------------------------------------



// async function news(){
//     let api_key = '6c2b5a98f136433ea8e8ac5cce8ddb11';
//     let news = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${api_key}`)
    
//     let length = news.data.totalResults
   
//     let array_articles = news.data["articles"]
    
//     console.log(array_articles)
// }

// news()

// ------------------------------------ End News API from NewsAPI --------------------------------------------------------



// async function word(){

//     try {
//         let web = await axios.get(`https://asli-fun-fact-api.herokuapp.com/`)
//         console.log(web.data.data.fact)

        
//     } catch (error) {
//         console.log(error)
        
//     }

// }
    
// word()