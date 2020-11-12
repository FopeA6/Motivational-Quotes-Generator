// $( "form" ).submit(function(event) {
//   event.preventDefault();

//   axios.post('http://localhost:5000/quotes')
//   .then(function (response) {
//     quote = response.data
//     $('#text').html(quote)
//   })

// });

const form = document.querySelector("#submit-form");
form.addEventListener('submit', handleFormSubmit)

function handleFormSubmit(e){
  e.preventDefault();
  
  fetch('http://localhost:5000/random/quotes')
  .then(r => r.text ()) 
  .then(quote =>  
   $('#text').html(quote))
}

  

function getRandomQuote () {
    let randomNum = Math.floor(Math.random () * quote.length)
    return quotes[randomNum]
  } 

