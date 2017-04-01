var express = require('express');
var router = express.Router();
var path = require('path');

// serve static index.html page
router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../../client/index.html'))
})

module.exports = router;
