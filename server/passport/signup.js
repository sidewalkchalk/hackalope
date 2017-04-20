var LocalStrategy = require('passport-local');
var users = require('../../db/controllers/user.js');

module.exports = function (passport) {
  passport.use('signup', new LocalStrategy({
    passReqToCallback: true
  },
  function (req, username, password, done) {
    process.nextTick(function () {
      // new users cannot be administrators
      req.body.admin = false;

      users.findUserByUsername(username)
        .then(function (user) {
          if (user) {
            return done(null, false);
          }
          return users.insertUser(req.body)
        })
        .then (function (newUser) {
          done(null, newUser);
        })
        .catch (function (err) {
          console.log('Error signing up!');
          done(err);
        })
    });
  }));
};
