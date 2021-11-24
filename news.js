
async function news(counter = 0) {

//   console.log([parent_ele])
const next = document.getElementById("next")
const previous = document.getElementById("previous")
const title = document.getElementById("title");
const url = document.getElementById("url");
const image = document.getElementById("image");
const description = document.getElementById("description");
const anchor = document.createElement('a');
const parent_ele= document.getElementById("news");
anchor.innerText = 'Click for the article';

    try {
        let api_key = '6c2b5a98f136433ea8e8ac5cce8ddb11';
        let news = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${api_key}`)
        
        let array_articles = news.data.articles
        
        title.textContent = array_articles[counter].title;
        image.src = array_articles[counter].urlToImage;
        description.textContent = array_articles[counter].description
        anchor.href = array_articles[counter].url + "\n"
        parent_ele.insertBefore(anchor,parent_ele.children[5])
        anchor.setAttribute("target", "_blank");
        
        
       

        next.addEventListener('click', (event) => {
            event.preventDefault();
            // console.log("here") 
            counter = counter + 1;
            // let array_articles = news.data.articles
            title.textContent = array_articles[counter].title;
            image.src = array_articles[counter].urlToImage;
            description.textContent = array_articles[counter].description
            anchor.href = array_articles[counter].url + "\n"
        })

        previous.addEventListener('click', (event) => {
            event.preventDefault();
            counter = counter - 1;
            // let array_articles = news.data.articles
            title.textContent = array_articles[counter].title;
            image.src = array_articles[counter].urlToImage;
            description.textContent = array_articles[counter].description
            anchor.href= (array_articles[counter].url) + "\n"
        })

    }
    catch (error) {
        console.log(error)
    }

 
}
news()
