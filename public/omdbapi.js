console.log('hello from omdbapi.js');

var test = 'sup foo';

function search(title, callback) {
  $.get(`http://www.omdbapi.com/?t=${title}&y=&plot=short&r=json`)
  .then( res => {
    callback(res)
  })
}

function find(imdbID, callback) {
  $.get(`http://www.omdbapi.com/?i=${imdbID}&y=&plot=short&r=json`)
  .then( res => {
    callback(res);
  })
}

const OMDB = {
  search: search,
  find: find
}

// function search(title, callback) {
//   $.ajax({
//     url: `http://www.omdbapi.com/?t=${title}&y=&plot=short&r=json`,
//     method: 'GET',
//   })
//   .then( res => {
//     callback(res)
//   })
// }

