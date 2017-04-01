var LocalStragegy = require('passport-local');
var users = require('../../db/controllers/user.js');

var signUp = function (passport) {
  passport.use(new LocalStrategy({
    passReqToCallback: true;
  },
  function (req, username, password, done) {
    process.nextTick(function () {

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

module.exports = signUp;
