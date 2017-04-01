var LocalStragegy = require('passport-local');
var users = require('../../db/controllers/user.js');

var login = function (passport) {
  passport.use(new LocalStrategy({
    passReqToCallback: true;
  },

  function (req, username, password, done) {
    users.findUserByUsername(username)
      .then(function (user) {
        if (!user) {
          return done(null, false);
        }
        return user.comparePassword (password)
          .then(function (match) {
            if (match) {
              done(null, user);
            } else {
              done(null, false);
            }
          });
      })
      .catch(function (err) {
        console.log('Error signing up!')
        done(err);
      });
  }
  ));
};

module.exports = login;
