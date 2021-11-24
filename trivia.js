
let fact = document.getElementById('btnF')
fact.addEventListener('click',(event)=>{
    event.preventDefault()
   

async function word(){
    let fact = document.getElementById('fact')

    try {
        let web = await axios.get(`https://asli-fun-fact-api.herokuapp.com/`)
        // console.log(web.data.data.fact)
        fact.textContent = (web.data.data.fact)

        
    } catch (error) {
        console.log(error)
        
    }

}
    word()
})