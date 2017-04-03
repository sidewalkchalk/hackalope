var express = require('express');
var router = express.Router();

// handle login request
router.post('/login', function (req, res, next) {

})

// handle new user signup
router.post('/signup', function (req, res, next) {
  passport.authenticate('signup')
});

// handle logout
router.post('/logout', function (req, res, next) {
  req.logout();
  res.sendStatus(200);

});

module.exports = router;
