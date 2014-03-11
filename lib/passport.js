var passport = require('passport');
var BasicStrategy = require("passport-http").BasicStrategy;

passport.use(new BasicStrategy(
  function(username, password, done) {
    return done(null, {succes:'true'});
  }
));

module.exports = passport;
