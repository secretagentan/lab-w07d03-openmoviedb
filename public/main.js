console.log('hello from main.js');
// console.log(test);

const $btn = $('button');
const $input = $('#query');
const $results = $('#results');
const $details = $('#details');
const $movie = $('.movie');
$input.focus();

$btn.on('click', (evt) => {
  var inputVal = $input.val();
  OMDB.search(inputVal, function(data) {
    // console.log(data);
    let title = data.Title;
    let imdb = data.imdbID;
    var text = `<a class="movie" data-id="${imdb}" href="#">${title}</a>`
    $results.append(text);
  })
})

$(document).on('click', '.movie', (evt) => {
  evt.preventDefault();
  // console.log('link clicked');
  var $link = $(evt.target);
  var id = $link.data().id;
  console.log(id);
  OMDB.find(id, function(results) {
    // console.log(results);
    // console.log(results.Title);
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
