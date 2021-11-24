// const axios = require('axios');

// Inspirational Quotes 

// -------------------------Start Quote Function -------------------------------

    let but = document.getElementById("btn");
    but.addEventListener("click", () => {
        // console.log("hi")
        // DOM elements
       
        const quote = document.getElementById("quote");
        const cite = document.querySelector("blockquote cite");

        // -------------------------Start Quote Function -------------------------------
        async function updateQuote() { 
           
            try {
                const api = await axios.get("https://api.quotable.io/random");
                
                quote.textContent = api.data.content;
                cite.textContent = api.data.author

                console.log(api.data.content)
                console.log(api.data.author)

            } catch (error) {
                console.error(error);
            }
        }

        // call updateQuote once when page loads
        updateQuote();


    })

 // -------------------------End Quote Function -------------------------------

