var expect = require('chai').expect;
var UserModel = require('../db/models/user.js');
var ResourceModel = require('../db/models/resource.js');
var CommentModel = require('../db/models/comment.js');
var VoteModel = require('../db/models/vote.js');
var mongoose = require('mongoose');
var Promise = require('bluebird')

// set Bluebird as default promise library
mongoose.Promise = Promise;

describe('MongoDB tests', function (done) {

  beforeEach(function (done) {
    mongoose.connect('mongodb://localhost/hackalope');

    var users = mongoose.connection.collections.users;
    var resources = mongoose.connection.collections.resources;
    var comments = mongoose.connection.collections.comments;
    var votes = mongoose.connection.collections.votes;

    users.drop( () => {
      resources.drop( () => {
        comments.drop( () => {
          votes.drop( () => {
            var contributor = new User({
              name: 'Nathan',
              username: 'nathan',
              password: 'nathan',
              admin: true
            });

            var superUser = new User({
              name: 'Satan',
              username: 'satan',
              password: 'satan',
              admin: true
            });

            Promise.all([contributor.save(), superUser.save()])
            .then( () => done())
            .catch( (err) => console.error(err));
          });
        });
      });
    });
  });

  afterEach(done => {
    mongoose.connection.close(done);
  });
});
