var request = require('supertest')
var app = require('../server/server.js');
var express = require('express');
var chai = require('chai'), expect = chai.expect, should = chai.should();

var userController = require('../db/controllers/user.js');
var resourceController = require('../db/controllers/resource.js');
var userController = require('../db/controllers/user.js');
var voteController = require('../db/controllers/vote.js');

// empty database before each round of testing
describe('', function (done) {
  request(app)
    .get('auth/logout')
    .end(function (err, res) {
      resourceController.deleteResourceByTitle({title: Test}).exec();
      done();
    })
});

describe('Resources', function() {

  it('should run mocha/chai server tests', function() {
    expect(true).to.equal(true);
  });

  it('should add a resource to the database', function () {
    request(app)
      .post()

  })

})
