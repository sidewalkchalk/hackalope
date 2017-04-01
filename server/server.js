
var express = require('express');
var app = express();
var port = process.env.port || 8000
app.listen(port, function () {
  console.log('Satan is listening')
});