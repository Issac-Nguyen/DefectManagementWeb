var express = require('express');
var router = express.Router();
var apn = require('../controller/notification.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/sendNotification', function(req, res, next) {
  apn.sendNotification('986a40d6bebe9f0358478e3dbc7e13693be8b86f370bd5428b303c9dbd3fea1d', function(){res.end('success')});
});

router.all('/uploadDefect', function(req, res, next) {
	console.log(JSON.stringify(req.body));
	res.json({result: 'success'});
})

module.exports = router;
