function admin(req, res, next) {
  console.log('admin is called...')
  console.log(req.url)
  switch (req.url) {
    case '/':
      res.end('try /users');
      break;
    case '/users':
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(['tobi', 'loki', 'jane']));
      break;
    default:
      res.end('try /users');
  }
}
module.exports=admin
