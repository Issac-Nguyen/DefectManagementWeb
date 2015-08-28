var express = require('express');
var router = express.Router();

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

router.post('/getTokenAndUpdateNotifi1', function(req, res, next) {
  res.json({result: '1'});
});


module.exports = router;
