// DEPENDENCIES
var express = require('express');
var morgan = require ('morgan');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');
var path = require('path');
var mongoose = require('mongoose');
var passportInit = require('./passport/init.js')

// ROUTES
var auth = require('./routes/auth.js');
var main = require('./routes/main.js');
var results = require('./routes/results.js');
var submit = require('./routes/submit.js');

// USE BLUEBIRD FOR PROMISES
mongoose.Promise = require('bluebird');

// START EXPRESS SERVER AND MONGODB
var app = express();
mongoose.connect('mongodb://localhost/hackalope');

// MIDDLEWARE
// TODO: implement passport
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(morgan('combined'));
app.use(express.session({secret: 'hackalope-666'}));
app.use(passport.initialize());
app.use(passport.session());

// INITIALIZE SERIALIZE/DESERIALIZE FUNCTIONS
passportInit(passport);

// SERVE STATIC FILES
app.use('/public', express.static(path.join(__dirname, '/../client/')))

// ROUTING
app.use('/auth', auth);
app.use('/results', results);
app.use('/submit', submit);
app.use('/', main);

// CATCH 404
app.use(function (req, res, next) {
  var err = new Error ('Sorry--we couldn\'t find that!')
  err.status = 404;
  next (err);
});

// LISTEN
var port = process.env.port || 6666; // also in serverConfig
app.listen(port, function () {
  console.log('Lucifer is listening on port: ' + port + '. Build like hell!');
});
