// Method One
// $( "form" ).submit(function(event) {
//   event.preventDefault();

//   axios.get('http://localhost:5000/quotes')
//   .then(function (response) {
//     quote = response.data
//     $('#text').html(quote)
//   })

// });

// Method Two

// const form = document.querySelector("#submit-form");
// form.addEventListener('submit', handleFormSubmit)

// function handleFormSubmit(e){
//   e.preventDefault();
  
//   fetch('http://localhost:5000/random/quotes')
//   .then(r => r.text ()) 
//   .then(quote =>  
//    $('#text').html(quote))
// }

// Method Three

const form = document.querySelector("#submit-form");
form.addEventListener('submit', handleFormSubmit)

async function handleFormSubmit(e){
e.preventDefault(); 

const r = await fetch('http://localhost:5000/random/quotes')
   const quote = await r.text ()
   const textBody = document.getElementById("text")
   textBody.textContent = quote
}

// All 3 methods work.