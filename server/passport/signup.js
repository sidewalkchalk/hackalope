const LocalStrategy = require('passport-local');
const users = require('../../db/controllers/user.js');

module.exports = function (passport) {
  passport.use('signup', new LocalStrategy({
    passReqToCallback: true,
  },
  (req, username, password, done) => {
    process.nextTick(() => {
      // new users cannot be administrators
      req.body.admin = false;

      users.findUserByUsername(username)
        .then((user) => {
          if (user) {
            return done(null, false);
          }
          return users.insertUser(req.body);
        })
        .then((newUser) => {
          done(null, newUser);
        })
        .catch((err) => {
          console.log('Error signing up!');
          done(err);
        });
    });
  }));
};
