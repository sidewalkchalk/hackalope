const LocalStrategy = require('passport-local');
const users = require('../../db/controllers/user.js');

module.exports = (passport) => {
  passport.use('login', new LocalStrategy({
    passReqToCallback: true
  },
  (req, username, password, done) => {
    users.findUserByUsername(username)
      .then((user) => {
        if (!user) {
          return done(null, false);
        }
        return user.comparePassword(password)
          .then((match) => {
            if (match) {
              done(null, user);
            } else {
              done(null, false);
            }
          });
      })
      .catch((err) => {
        done(err);
      });
  }
  ));
};
