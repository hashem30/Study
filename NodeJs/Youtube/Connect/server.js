var connect = require('connect');
var http = require('http');

var app = connect();

/*
function doFirst(request, response, next) {
  console.log("bacon");
  next();
}

function doSecond(request, response, next) {
  console.log("Tuna");
}

app.use(doFirst);
app.use(doSecond);
*/

function profile(request, response) {
  console.log('User request profile!');
}
function form(request, response) {
  console.log('User request form!');
}
app.use('/profile', profile);
app.use('/form', form);

http.createServer(app).listen(8888);
console.log("The server is running...");
