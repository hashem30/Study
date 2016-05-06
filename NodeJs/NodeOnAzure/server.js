var http = require('http');

function onRequest(request, response) {
  console.log("A user made a request" + request.url);
  response.writeHead(200, {"Context-Type": "text/plain"});
  response.write("Here is your response");
  response.end();
}

http.createServer(onRequest).listen(8080);
console.log("The server is running at 80...");
