/* 004 */
var movies = require("./movies");

var buckyMovies = movies();
buckyMovies.favMovie = "The laptop";
console.log("Bucky's favorite movie is:" + buckyMovies.favMovie);

/* 003
var movies = require("./movies");
//movies.favMovie = "The laptop";
console.log("Bucky's favorite movie is:" + movies.favMovie);
*/