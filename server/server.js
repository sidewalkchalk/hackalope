// DEPENDENCIES
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

// ROUTES
const auth = require('./routes/auth.js');
const main = require('./routes/main.js');
const search = require('./routes/search.js');
const results = require('./routes/results.js');
const submit = require('./routes/submit.js');
const profile = require('./routes/profile.js');
const comments = require('./routes/comments.js');
const admin = require('./routes/admin.js');
const votes = require('./routes/votes.js');

// USE BLUEBIRD FOR PROMISES
mongoose.Promise = require('bluebird');

// START EXPRESS SERVER AND MONGODB
const app = express();
mongoose.connect('mongodb://localhost/hackalope');

// MIDDLEWARE
// TODO: implement passport
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('combined'));
app.use(methodOverride());
app.use(session({
  secret: 'hackalope-666',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// INITIALIZE SERIALIZE/DESERIALIZE FUNCTIONS
require('./passport/init.js')(passport);

// SERVE STATIC FILES
app.use('/public', express.static(path.join(__dirname, '/../client/')));
app.use('/bundle', express.static(path.join(__dirname, '/../dist')));

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
app.use((req, res, next) => {
  const err = new Error('Sorry--we couldn\'t find that!');
  err.status = 404;
  next(err);
});

// LISTEN
const port = process.env.port || 1337; // also in serverConfig
app.listen(port, () => {
  console.log(`Lucifer is listening on port: ${port}. Build like hell, minions!`);
});

module.exports = app;
