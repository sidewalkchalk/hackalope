var express = require('express');
var router = express.Router();

// serve user submission?
// TODO: is this necessary? maybe, to handle auth
// or, maybe handle auth client-side
router.get('/', function (req, res) {

});
// handles user's submitted resources
router.post('/', function (req, res) {
  // query db for results
})

module.exports = router;
