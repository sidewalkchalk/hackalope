// DEPENDENCIES
var express = require('express');
var app = express();
var morgan = require ('morgan');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport  require('passport')
var path = require('path');

// ROUTES
var auth = require('./routes/auth.js');
var main = require('./routes/main.js');
var results = require('./routes/results.js');
var submit = require('./routes/submit.js');

// MIDDLEWARE
// TODO: implement passport
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(morgan('combined'));

// ROUTING
app.use('/', main);
app.use('/auth', auth);
app.use('/results', results);
app.use('/submit', submit);


// SERVER IS LISTENING
var port = process.env.port || 8000; // also in serverConfig
app.listen(port, function () {
  console.log('Lucifer is listening on port: ' + port + '. Build like hell!');
});

