var LocalStrategy = require('passport-local');
var GitHubStrategy = require('passport-github2');

var users = require('../../db/controllers/user.js');

module.exports = function (passport) {
  passport.use('login', new LocalStrategy({
    passReqToCallback: true
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

  passport.use(new GitHubStrategy({
    clientID: "e71066ab5f16e9b0f7d1",
    clientSecret: "6793f3f23fbe27582cfcb12f18e092cb3996d5ea",
    callbackURL: "http://127.0.0.1:1337/auth/github/callback",
  },

  function(accessToken, refreshToken, profile, done) {
    // asynchronous verification, for effect...
    process.nextTick(function () {

      // To keep the example simple, the user's GitHub profile is returned to
      // represent the logged-in user.  In a typical application, you would want
      // to associate the GitHub account with a user record in your database,
      // and return that user instead.
      return done(null, profile);
    });
  }


  ));
};
