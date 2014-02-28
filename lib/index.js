var middleware = require('./middleware.js');
var routes = require('./routes.js');
var passport = require('./passport.js');

function gateway_express (app, passport, adapter) {
  if (!app) { throw new Error('express app must be provided in initializer') };
  middleware.add(app, passport);
  routes.bind(app, passport, adapter);
  return app;
}

module.exports = gateway_express;
