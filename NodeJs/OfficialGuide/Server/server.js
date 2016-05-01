var http = require('http');

http.createServer(function(request, response) {
  console.log("A user made a request " + request.url);
  request.on('error', function(err) {
    console.error(err);
    response.statusCode = 400;
    response.end();
  });
  response.on('error', function(err) {
    console.error(err);
  });
  if (request.method === 'GET' && request.url === '/echo') {

    var body = [];
    request.on('data', function(chunk) {
      console.log(chunk);
      body.push(chunk);
    }).on('end', function() {
      body = Buffer.concat(body).toString();
      console.log(body);
      response.end(body);
    })
  } else {
    response.statusCode = 404;
    response.write("Error 404: Page not found!");
    response.end();
  }
}).listen(8080);
console.log("The server is running...");
