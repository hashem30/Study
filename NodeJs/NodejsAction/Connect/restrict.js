function authenticateWithDatabase(user, pass, check) {
  if (user=='johnny' && pass=='123') {
    console.log('Authentication passed.')
    return check();
  } else {
    return check(new Error('Invalid user or password'));
  }
}
function restrict(req, res, next) {
  console.log('restrict is called...')
  var authorization = req.headers.authorization;

  if (!authorization) return next(new Error('Unauthorized'));
  var parts = authorization.split(' ')
  var scheme = parts[0]
  var auth = new Buffer(parts[1], 'base64').toString().split(':')
  var user = auth[0]
  var pass = auth[1];
  console.log('user='+user);
  console.log('password='+pass);
  authenticateWithDatabase(user, pass, function (err) {
    if (err) return next(err);
    console.log(err);
    next();
    console.log('next is called');
  });
}
module.exports=restrict
