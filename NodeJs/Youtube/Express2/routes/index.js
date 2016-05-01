var express = require('express');
var router = express.Router();
var vd = require('../videodata.json');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', name: 'Johnny', videodata: vd});
});

module.exports = router;
