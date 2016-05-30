var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config')
var colds = require('./colds');

var http = require('http');
var express = require('express');
var app = express();
var port = 3000
var server = http.createServer(app);
var io = require('socket.io').listen(server);
io.sockets.on('connection', function(socket) {
  socket.on('timeupdate', function(data) {
    colds.getWhiteBoardData(data.second, function(wbdata) {
      //console.log('wb'+data.second);
      socket.emit('drawline', {
        wbdata:wbdata
      });
    });

   colds.getImageData(data.second, function(imagedata) {
      //console.log('ss'+data.second);
      socket.emit('draw', {
        streamlist:imagedata
      });
    });
  });
});

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

/*app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html')
})*/

var staticPath = __dirname;
app.use(express.static(staticPath));

server.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})

function tick () {
  var now = new Date().toUTCString();
  io.sockets.send(now);
}
setInterval(tick, 1000);
