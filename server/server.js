// DEPENDENCIES
var express = require('express');
var morgan = require ('morgan');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');
var path = require('path');
var mongoose = require('mongoose');
var methodOverride = require('method-override');
var cors = require('cors');

// ROUTES
var auth = require('./routes/auth.js');
var main = require('./routes/main.js');
var search = require('./routes/search.js');
var results = require('./routes/results.js');
var submit = require('./routes/submit.js');
var profile = require('./routes/profile.js');
var comments = require('./routes/comments.js');
var admin = require('./routes/admin.js');
var votes = require('./routes/votes.js');

// USE BLUEBIRD FOR PROMISES
mongoose.Promise = require('bluebird');

// START EXPRESS SERVER AND MONGODB
var app = express();
mongoose.connect('mongodb://localhost/hackalope');

// MIDDLEWARE
// TODO: implement passport
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('combined'));
app.use(methodOverride());
app.use(session({
  secret: 'hackalope-666',
  resave: false,
  saveUninitialized: false
  }
));
app.use(passport.initialize());
app.use(passport.session());
// app.use(cors());

// INITIALIZE SERIALIZE/DESERIALIZE FUNCTIONS
require('./passport/init.js')(passport);

// SERVE STATIC FILES
app.use('/public', express.static(path.join(__dirname, '/../client/')));
app.use('/bundle', express.static(path.join(__dirname, '/../dist')));

// app.use(function(req, res, next) {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
//   res.setHeader("Access-Control-Allow-Methods", "GET, PUT, POST");
//   res.setHeader("Access-Control-Expose-Headers", "Access-Control-Allow-Origin");
//   return next();
// });

// ROUTING
app.use('/auth', auth(passport));
app.use('/results', results);
app.use('/submit', submit);
app.use('/profile', profile);
app.use('/comments', comments);
app.use('/admin', admin);
app.use('/votes', votes);
app.use('/search', search);
app.use('/', main);

// CATCH 404 ERRORS
app.use(function (req, res, next) {
  var err = new Error ('Sorry--we couldn\'t find that!')
  err.status = 404;
  next (err);
});

// LISTEN
var port = process.env.port || 1337; // also in serverConfig
app.listen(port, function () {
  console.log('Lucifer is listening on port: ' + port + '. Build like hell, minions!');
});

module.exports = app;
