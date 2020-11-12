// $( "form" ).submit(function(event) {
//   event.preventDefault();

//   axios.post('http://localhost:5000/quotes')
//   .then(function (response) {
//     quote = response.data
//     $('#text').html(quote)
//   })

// });

const form = document.querySelector("submit-form");
//form.addEventListener('submit', handleFormSubmit)

function handleFormSubmit(e){
  e.preventDefault();
  const form = e.target;
  const button = document.getElementById("button").addEventListener("click", getRandomQuote)
}

// fetch('http://localhost:5000/quotes')
// .then(function (response) {
//   quote = response.data
//   $('#text').html(quote)
// })
  

function getRandomQuote () {
    let randomNum = Math.floor(Math.random () * quote.length)
    return quotes[randomNum]
  } 

