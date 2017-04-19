const expect = require('chai').expect;
const UserModel = require('../db/models/user.js');
const ResourceModel = require('../db/models/resource.js');
const CommentModel = require('../db/models/comment.js');
const VoteModel = require('../db/models/vote.js');
const mongoose = require('mongoose');
const Promise = require('bluebird');

// set Bluebird as default promise library
mongoose.Promise = Promise;

// TODO: refactor all mocha tests to use ES6

describe('MongoDB tests', (done) => {
  beforeEach((done) => {
    mongoose.connect('mongodb://localhost/hackalope');

    const users = mongoose.connection.collections.users;
    const resources = mongoose.connection.collections.resources;
    const comments = mongoose.connection.collections.comments;
    const votes = mongoose.connection.collections.votes;
    // clear all tables
    users.drop(() => {
      resources.drop(() => {
        comments.drop(() => {
          votes.drop(() => {
            // repopulate tables
            const contributor = new UserModel({
              name: 'Jonathan Livingston Granstaff',
              username: 'jgranny',
              password: 'jgranny',
              admin: false,
            });

            const superUser = new UserModel({
              name: 'Satan',
              username: 'satan',
              password: 'satan',
              admin: true,
            });

            const sampleResource = new ResourceModel({
              title: 'Code101',
              description: 'Groovy',
              url: 'http://www.code101.com',
              tags: ['closures', 'arrays'],
              language: 'JavaScript',
              rating: 0,
              user: '58e2e49c328d2fb328c6e899',
            });

            const sampleVote = new VoteModel({
              vote: 1,
              user: '58e2e49c328d2fb328c6e899',
              resource: '58e2e731e65991b3ca06df12',
            });

            const sampleComment1 = new CommentModel({
              body: 'OMG I can code now lol!',
              user: '58e2e49c328d2fb328c6e899',
              resource: '58e2e731e65991b3ca06df12',
            });

            const sampleComment2 = new CommentModel({
              body: 'Bummer! Someone should feel bad about this!',
              user: '58e2e49c328d2fb328c6e899',
              resource: '58e3c2171d3913be8c7ae72c',
            });

            Promise.all([contributor.save(),
              superUser.save(),
              sampleResource.save(),
              sampleVote.save(),
              sampleComment1.save(),
              sampleComment2.save()])
            .then(() => done())
            .catch(err => console.error(err));
          });
        });
      });
    });
  });

  afterEach((done) => {
    mongoose.connection.close(done());
  });

  it('should add and find a user in the database', (done) => {
    UserModel.findOne({ username: 'satan' }, (err, user) => {
      expect(user.username).to.equal('satan');
      done();
    });
  });

  it('should add a resource to the database and find it', (done) => {
    ResourceModel.findOne({ title: 'Code101' }, (err, resource) => {
      expect(resource.title).to.equal('Code101');
      done();
    });
  });

  it('should add a user\'s vote to the database and find it', (done) => {
    VoteModel.findOne({ user: '58e2e49c328d2fb328c6e899' }, (err, vote) => {
      expect(vote.vote).to.equal(1);
      done();
    });
  });

  it('should add comments and find all comments by a user', (done) => {
    CommentModel.find({ user: '58e2e49c328d2fb328c6e899' }, (err, comments) => {
      expect(comments.length).to.equal(2);
      done();
    });
  });

  it('should find all comments for a given resource', (done) => {
    CommentModel.find({ resource: '58e3c2171d3913be8c7ae72c' }, (err, comments) => {
      expect(comments.length).to.equal(1);
      done();
    });
  });
});
