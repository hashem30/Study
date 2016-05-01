
require('./server');
/* 007 008
require('./server');
*/

/* 006 -> common knowledge
console.log(__dirname);
console.log(__filename);
setInterval(function(){
    console.log('beef');
}, 2000);
*/

/* 006
var path = require('path');
var websiteHome = "Desktop/Johnny/node/index.html"
console.log(path.normalize(websiteHome));
console.log(path.dirname(websiteHome));
console.log(path.basename(websiteHome));
console.log(path.extname(websiteHome));
*/

/* 005
var fs = require('fs'); //core module, without ./
fs.writeFileSync("corn.txt",  "Corn is good, corn is life22");
console.log(fs.readFileSync("corn.txt").toString());
*/

/* 003 004
require('./emily');
require('./bucky');
*/

/* 002
var movies = require('./movies');  // same folder with app.js, no extension
movies.avatar();
movies.chappie();
console.log(movies.favMovie);*/