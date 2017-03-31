var express = require('express');
var app = express();
var port = process.env.port || 8000;

app.listen(port, function () {
  console.log('Lucifer is listening on port: ' + port + ' Build like hell!');
});
