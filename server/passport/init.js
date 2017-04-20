const login = require('./login.js');
const signup = require('./signup.js');
const users = require('../../db/controllers/user.js');
const github = require('./github.js');

module.exports = (passport) => {
  passport.serializeUser((user, done) => {
    done(null, user._id);
  });

  passport.deserializeUser((id, done) => {
    users.findUserById(id)
      .then((user) => {
        done(null, user);
      })
      .catch((err) => {
        done(err, null);
      });
  });

  login(passport);
  signup(passport);
  github(passport);
};
