// Run this script upon deployment to seed the database
// with administrator accounts
const UserModel = require('./db/models/user.js');
const mongoose = require('mongoose');
const Promise = require('bluebird');

mongoose.connect('mongodb://localhost/hackalope');

// Create as many accounts as needed
const admin1 = new UserModel({
  name: 'Lucifer',
  username: 'star',
  password: 'ofthemorning',
  admin: true
});

// const admin2 = new UserModel({
//   name: 'Belial',
//   username: 'behemoth',
//   password: 'beelzebub',
//   admin: true
// });

// add additional users to promise arrays
Promise.all([admin1.save()])
  .then( (done) => {
    console.log(done);
    mongoose.connection.close();
  })
  .catch( (err) => {
    console.error(err);
  });
