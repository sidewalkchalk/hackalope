var express = require('express');
var router = express.Router();

// handle login request
module.exports = function (passport) {

  router.get('/', function(req, res, next) {
    res.json(req.user.username);
  });

  router.post('/login', passport.authenticate('login'),
    function (req, res, next) {
      // pass user information to client
      var userData = {name: req.user.name,
        username: req.user.username,
        password: '',
        admin: req.user.admin,
        _id: req.user._id,
        favorites: req.user.favorites};
     res.status(201).send(userData);
  });

  // handle new user signup
  router.post('/signup', passport.authenticate('signup'),
    function (req, res, next){
      // pass user information to client
      var userData = {name: req.user.name,
        username: req.user.username,
        password: '',
        admin: req.user.admin,
        _id: req.user._id,
        favorites: req.user.favorites};
     res.status(201).send(userData);
  });

  router.get('/github',
    passport.authenticate('github', { scope: [ 'user:email' ] }),
    function(req, res){
    // The request will be redirected to GitHub for authentication, so this
    // function will not be called.
  });

  router.get('/github/callback',
    passport.authenticate('github', { failureRedirect: '/login' }),
    function(req, res) {

    res.status(201).send(req.user);
  });

  // handle logout
  router.post('/logout', function (req, res, next) {
    req.logout();
    res.sendStatus(200);
  });

  return router;
};
