var express = require('express');
var router = express.Router();
var path = require('path');

// serve static index.html page
router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../../client/index.html'))
});

// handle search request from homepage
router.post('/', function (req, res) {
  // do something
})

module.exports = router;
