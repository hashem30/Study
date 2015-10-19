var connect = require('connect');
var http = require('http');
var app = connect();

function profile(request, response) {
    console.log("User request profile");
}

function forum(request, response) {
    console.log("User request forum");
}

app.use('/profile', profile);
app.use('/forum', forum);
/*
function doFirst(request, response, next) {
    console.log("Bacon");
    //next();
}

function doSecond(request, response, next) {
    console.log("Tuna");
    next();
}

app.use(doFirst);
app.use(doSecond);
*/

http.createServer(app).listen(8888);
console.log('Server is running...');


/* 008
var http = require('http');
var fs = require('fs');
//404 response
function send404Response(response) {
    response.writeHead(404, {"Context-Type": "text/plain"});
    response.write("Error 404: Page not found");
    response.end();
}


// Handle a user request
function onRequest(request, response) {
    if (request.method == 'GET' && request.url == '/') {
        response.writeHead(200, {"Context-Type": "text/html"});
        fs.createReadStream('./index.html').pipe(response);
        //var content = fs.readFileSync("index.html").toString();
        //response.write(content);
        //response.end();
    }
    else {
        send404Response(response);
    }
}
http.createServer(onRequest).listen(8888);
console.log("Server now is running....");
*/

/* 007
var http = require('http');

function onRequest(request, response) {
    console.log("A user made a request:" + request.url);
    response.writeHead(200, {"Context-Type": "text/plain"});
    response.write("Here is some data");
    response.end();
}
http.createServer(onRequest).listen(8888);
console.log("Server now is running....");
 */