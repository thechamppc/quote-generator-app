const apiURL = "https://api.quotable.io/random"
const quote = document.querySelector('#quote')
const author = document.querySelector('#author')
const btn =  document.querySelector('#generate')

btn.addEventListener('click', generateQuote)

function generateQuote(){
    fetch(apiURL).then(res =>{
    return res.json()
}).then(data => {
    quote.innerHTML = `"${data.content}"`
    author.innerHTML = `- ${data.author}`
}).catch(err => {
    console.log("Error Message: ", err)
})
}


