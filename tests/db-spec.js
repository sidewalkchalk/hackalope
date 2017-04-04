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
            var contributor = new UserModel({
              name: 'Jonathan Livingston Granstaff',
              username: 'jgranny',
              password: 'jgranny',
              admin: false
            });

            var superUser = new UserModel({
              name: 'Satan',
              username: 'satan',
              password: 'satan',
              admin: true
            });

            var sampleResource = new ResourceModel({
              title: 'Code101',
              description: 'Groovy',
              url: 'http://www.code101.com',
              tags: ['closures', 'arrays'],
              language: 'JavaScript',
              rating: 0,
              user: '58e2e49c328d2fb328c6e899'
            });

            var sampleVote = new VoteModel({
              vote: 1,
              user: '58e2e49c328d2fb328c6e899',
              resource: '58e2e731e65991b3ca06df12'
            });

            Promise.all([contributor.save(),
                         superUser.save(),
                         sampleResource.save(),
                         sampleVote.save()])
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

  it ('should be able to add and find a user in the database', (done) => {
    UserModel.findOne({username: 'satan'}, function (err, user) {
      expect(user.username).to.equal('satan');
      done();
    });
  });

  it ('should be able to add a resource to the database and find it', (done) => {
    ResourceModel.findOne({title: 'Code101'}, function (err, resource) {
      console.log(resource);
      expect(resource.title).to.equal('Code101');
      done();
    })
  });

  it ('should be able to add a user\'s vote to the database and find it', (done) => {
    VoteModel.findOne({user: '58e2e49c328d2fb328c6e899'}, function (err, vote) {
      expect(vote.vote).to.equal(1);
      done();
    });
  });

});
