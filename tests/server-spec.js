var request = require('supertest')
var app = require('../server/server.js');
var express = require('express');
var chai = require('chai'), expect = chai.expect, should = chai.should();
var mongoose = require('mongoose');
var userController = require('../db/controllers/user.js');
var resourceController = require('../db/controllers/resource.js');
var userController = require('../db/controllers/user.js');
var voteController = require('../db/controllers/vote.js');
// set Bluebird as default promise library
var Promise = require('bluebird');
mongoose.Promise = Promise;

//empty database before each round of testing
// describe('', function (done) {
//   request(app)
//     .get('auth/logout')
//     .end(function (err, res) {
//         // clear all tables from the database
//         mongoose.connect('mongodb://localhost/hackalope');
//
//         var users = mongoose.connection.collections.users;
//         var resources = mongoose.connection.collections.resources;
//         var comments = mongoose.connection.collections.comments;
//         var votes = mongoose.connection.collections.votes;
//         // clear all tables
//         users.drop(() => {
//           resources.drop(() => {
//             comments.drop(() => {
//               votes.drop(() => {
//               });
//             });
//           });
//         });
//
//       mongoose.connection.close(done());
//
//     })
// });

describe('Users', function (done) {

  it ('should be able to log in a user', function () {
    request(app)
      .post('auth/login')
      .send({
        username: 'jgranny',
        password: 'jgranny'})
      .expect(201)
      .end(done);
  });

  it ('should be able to access a user\'s profile page', function () {

    request(app)
      .get('/profile')
      .expect(200)
      .end(done);
  });

  it ('should allow an authenticated user to submit a resource', function () {

    request(app)
      .post('/submit')
      .send({
        title: 'Kansas',
        description: 'I heart Kansas',
        url: 'http://www.kansas.com',
        tags: ['Topeka', 'Wichita'],
        language: 'JavaScript',
        rating: 0,
      })
      .expect(201)
      .end(done);
  })
});

// describe('Resources', function() {
//
//   it('should run mocha/chai server tests', function() {
//     expect(true).to.equal(true);
//   });
//
//   it('should add a resource to the database', function (done) {
//     var sampleData = {
//       title: 'Code101',
//       description: 'Groovy',
//       url: 'http://www.code101.com',
//       tags: ['closures', 'arrays'],
//       language: 'JavaScript',
//       rating: 0
//     };
//
//     request(app)
//       .post('/submit')
//       .send(sampleData)
//       .expect(201)
//       .end(done)
//
//   })
//
// })
