const express = require('express');
const router = express.Router();

// handle login request
module.exports = function (passport) {
  router.get('/', (req, res, next) => {
    res.json(req.user.username);
  });

  router.post('/login', passport.authenticate('login'),
    (req, res, next) => {
      // pass user information to client
      const userData = { name: req.user.name,
        username: req.user.username,
        password: '',
        admin: req.user.admin,
        _id: req.user._id,
        favorites: req.user.favorites };
      res.status(201).send(userData);
    });

  // handle new user signup
  router.post('/signup', passport.authenticate('signup'),
    (req, res, next) => {
      // pass user information to client
      const userData = { name: req.user.name,
        username: req.user.username,
        password: '',
        admin: req.user.admin,
        _id: req.user._id,
        favorites: req.user.favorites };
      res.status(201).send(userData);
    });

  router.get('/github',
    passport.authenticate('github', { scope: ['user:email'] }),
    (req, res) => {
    // The request will be redirected to GitHub for authentication, so this
    // function will not be called.
    });

  router.get('/github/callback',
    passport.authenticate('github', { failureRedirect: '/login' }),
    (req, res) => {
      console.log(req.user);
      res.status(201).redirect('/');
    });

  // handle logout
  router.post('/logout', (req, res, next) => {
    req.logout();
    res.sendStatus(200);
  });

  return router;
};
