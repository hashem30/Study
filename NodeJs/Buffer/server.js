var http = require('http');
var path = require('path');
var express = require('express');
var colds = require('./colds');

var app = express();
var server = http.createServer(app);
var io = require('socket.io').listen(server);
io.sockets.on('connection', function(socket) {
  socket.on('timeupdate', function(data) {
    colds.getImageData(data.second, function(imagedata) {
      console.log(data.second);
      //console.log(imagedata);
      socket.emit('draw', {
        streamlist:imagedata
      });
    });
  });
});

var staticPath = __dirname;
app.use(express.static(staticPath));

server.listen(8080, function() {
  console.log('Server is listening at http://localhost:8080');
});

function tick () {
  var now = new Date().toUTCString();
  io.sockets.send(now);
}
setInterval(tick, 1000);