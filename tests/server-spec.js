var request = require('supertest')
var app = require('../server/server.js');
var express = require('express');
var chai = require('chai'), expect = chai.expect, should = chai.should();

var userController = require('../db/controllers/user.js');
var resourceController = require('../db/controllers/resource.js');
var userController = require('../db/controllers/user.js');
var voteController = require('../db/controllers/vote.js');

// empty database before each round of testing
// describe('', function (done) {
//   request(app)
//     .get('auth/logout')
//     .end(function (err, res) {
//       resourceController.deleteResourceByTitle('Code101').exec();
//     })
// });

// describe('Users', function (done) {
//
//   it ('should add a new user to the database', function () {
//     var user = {
//       name: 'Nathan Turinski',
//       username: 'nathan',
//       password: 'nathan',
//       admin: true,
//
//     }
//     console.log(user);
//     request(app)
//       .post('auth/signup')
//       .send(user)
//       .expect(201)
//       .end(done);
//   })
//
//   it ('should find a user in the database', function () {
//
//   })
// });

describe('Resources', function() {

  it('should run mocha/chai server tests', function() {
    expect(true).to.equal(true);
  });

  it('should add a resource to the database', function (done) {
    var sampleData = {
      title: 'Code101',
      description: 'Groovy',
      url: 'http://www.code101.com',
      tags: ['closures', 'arrays'],
      language: 'JavaScript',
      rating: 0
    };

    request(app)
      .post('/submit')
      .send(sampleData)
      .expect(201)
      .end(done)

  })

})
