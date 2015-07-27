var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var unless = require('express-unless');

var secretJWT = "secret";

var authenRequest = function(req, res, next) {
  var authorization = req.headers.authorization;
  if(authorization) {
      var token = authorization.split(' ')[1];
      console.log(token);
      if(token) {
        jwt.verify(token, secretJWT, function(err, decoded) {
          if(err)
            next(err);
          next();
        });
      }
  } else {
    next(new Error("Error"));
  }
}

authenRequest.unless = unless;

router.use(authenRequest.unless({ path: ['/getTokenAndUpdateNotifi', '/'] }));



router.post('/getTokenAndUpdateNotifi', function(req, res, next) {
  var bodyRequest = req.body;
  if(bodyRequest) {
  	var UUID = bodyRequest.UUID;
  	var tokenNotification = bodyRequest.tokenNotification;
  	var authorization = req.headers.authorization;
  	if(UUID) {
      console.log('1');
  		var token = jwt.sign({UUID: UUID}, secretJWT);
  		res.json({token: token});
  	} else if(authorization) {
      console.log('2');
      var token = authorization.split(' ')[1];
      console.log(token);
      if(token) {
    		jwt.verify(token, secretJWT, function(err, decoded) {
  			  if(err)
  			  	next(err);
  			  res.json(decoded);
  			});
      } else {
      res.json({result: 'Error'});
      }
  	} else {
      console.log('3');
  		res.json({result: 'Error'});
  	}
  }
});

router.post('/getTokenAndUpdateNotifi1', function(req, res, next) {
  res.json({result: '1'});
});


module.exports = router;
