const request = require('supertest');
const app = require('../server/server.js');
const express = require('express');
let chai = require('chai'),
  expect = chai.expect,
  should = chai.should();


describe('Users', () => {
  it('should be able to log in a user', (done) => {
    request(app)
      .post('/auth/login')
      .send({
        username: 'jgranny',
        password: 'jgranny',
      })
      .expect(201)
      .end(done);
  });

  it('should be able to access a user\'s profile page', (done) => {
    request(app)
      .get('/profile')
      .expect(200)
      .end(done);
  });
});

  //
  // it ('should allow an authenticated user to submit a resource', function () {
  //
  //   request(app)
  //     .post('/submit')
  //     .send({
  //       title: 'Kansas',
  //       description: 'I heart Kansas',
  //       url: 'http://www.kansas.com',
  //       tags: ['Wichita', 'Topeka'],
  //       language: 'JavaScript',
  //       rating: 0,
  //     })
  //     .expect(201)
  //     .end(done);
  // })

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
