var login = require('./login.js');
var signup = require('./signup.js');
var users = require('../../db/controllers/user.js');

module.exports = function (passport) {
  passport.serializeUser(function (user, done) {
    done(null, user._id)
  });

  passport.deserializeUser(function (id, done) {
    users.findUserById(id)
      .then(function (user) {
        done(null, user);
      })
      .catch(function (err) {
        done(err, null);
      });
  });
  passport.serializeUser(function(user, done) {
  done(null, user);
  });

  passport.deserializeUser(function(obj, done) {
    users.findUserByUsername(username)
      .then(function (user) {
        done(null, user);
      })
      .catch(function (err) {
        done(err, null);
      });
  });

  login(passport);
  signup(passport);
};
