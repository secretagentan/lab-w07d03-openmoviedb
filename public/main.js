console.log('hello from main.js');
console.log(test);

const $btn = $('button');
const $input = $('#query');
const $results = $('#results');
const $details = $('#details');
const $movie = $('.movie');
$input.focus();

$btn.on('click', (evt) => {
  var inputVal = $input.val();
  OMDB.search(inputVal, function(data) {
    console.log(data);
    let title = data.Title;
    let imdb = data.imdbID;
    var text = `<a class="movie" data-id="${imdb}" href="#">${title}</a>`
    $results.append(text);
  })
})

$(document).on('click', '.movie', (evt) => {
  evt.preventDefault();
  console.log('link clicked');
  // let id = $(this).attr('data-id');
  var $link = $(evt.target);
  var id = $link.data().id;
  console.log(id);
  OMDB.find(id, function(results) {
    console.log(results);
    console.log(results.Title);
    let title = results.Title;
    let plot = results.Plot;
    let poster = `<img src="${results.Poster}">`;
    let html = `<ul>
                  <li>${title}</li>
                  <li>${plot}</li>
                  <li>${poster}</li>
                </ul>`;
    $details.append(html);
  })
})

// const $root = document.querySelector('#root');
// $root.innerHTML = render('An', ['mimi', 'schmimi', 'peapod']);
// function render(name, friends) {
//   const list = friends.map( (p) => {
//     return `<li>${p}</li>`;
//   }).join('');
//   return (`<h1>Hello there</h1>
//     <p>Nice to meet you, ${name}.</p>
//     <p>These are my friends:</p>
//     <ul>
//       ${list}
//     </ul>
//     <a href="http://www.google.com">Check this out</a>
//   `);
// }

// const request = require('request');

// function get(cb, base='USD') {
//   return new Promise( (resolve, reject) => {
//     const url = `http://api.fixer.io/latest?base=${base}`;
//     request(url, (error, response, body) => {
//       if (!error && response.statusCode === 200) {
//         const data = JSON.parse(body);
//         resolve(data);
//       } else {
//         reject(error, response);
//       }
//     });
//   })
// }
