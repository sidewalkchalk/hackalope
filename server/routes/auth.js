var express = require('express');
var router = express.Router();

// handle login request
router.post('/login', passport.authenticate('login'),
  function (req, res, next) {
    console.log(user);
    res.sendStatus(201);
});

// handle new user signup
router.post('/signup', passport.authenticate('signup'),
  function (req, res, next){
    console.log(user);
    res.sendStatus(201);
});

// handle logout
router.post('/logout', function (req, res, next) {
  req.logout();
  res.sendStatus(200);
});

module.exports = router;
