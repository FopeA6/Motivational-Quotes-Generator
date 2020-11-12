$( "form" ).submit(function( event ) {
  event.preventDefault();

  axios.post('http://localhost:5000/quotes')
  .then(function (response) {
    quote = response.data
    $('#text').html(quote)
  })

});

// fetch.get('http://localhost:3000/quotes')
// .then(function (response) {
//   quote = response.data
//   $('#text').html(quote)
// })
// resp => resp.json()).then(console.log)