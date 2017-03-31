var assert = require('assert');
var chai = require('chai'), expect = chai.expect, should = chai.should();
var server = require('../server/server.js');
var request = require('request');
var chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('Server', function() {

  it('should run mocha/chai server tests', function() {
    expect(true).to.equal(true);
  })

})
