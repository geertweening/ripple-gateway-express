var express = require('express');
var expressValidator = require('express-validator');

module.exports = { add: function (app, passport) {
  app.use(function(req,res,next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next();
  });

  app.use(function(req, res, next){
    console.log('%s %s', req.method, req.url);
    if (req.body) { console.log('%s', req.body); };
    next();
  });

  app.use(express.json());
  app.use(express.urlencoded());
  app.use(expressValidator());
  app.use(express.cookieParser());
  app.use(express.methodOverride());
  app.use(express.static(__dirname + '/../../public'));
  app.use(passport.initialize());
  app.use(function(err, req, res, next) {
    res.send(500, { error: err });
  });

  if (passport) {
    app.use(passport.initialize());
  };
}
}
