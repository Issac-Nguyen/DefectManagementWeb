var express = require('express');
var router = express.Router();
var apn = require('../controller/notification.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/sendNotification', function(req, res, next) {
  apn.sendNotification(function(){res.end('success')});
});

router.post('/uploadDefect', function(req, res, next) {
	console.log(JSON.stringify(req.body));
	res.end('success');
})

module.exports = router;
