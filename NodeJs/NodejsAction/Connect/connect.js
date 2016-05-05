var connect = require('connect');
var restrict = require('./restrict');
var admin = require('./admin');

function logger(req, res, next) {
  console.log('%s %s', req.method, req.url);
  next();
}

function hello(req, res) {
  console.log('hello world');
  res.setHeader('Content-Type', 'text/plain');
  res.end('hello world');
}

var app = connect();
app.use(logger);
app.use('/admin', restrict)
app.use('/admin', admin)
app.use(hello);
app.listen(3000);
