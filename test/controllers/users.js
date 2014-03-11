var assert      = require('assert');
var sinon       = require('sinon');
var adapter     = require('../../lib/adapter.js');
var controllers = require('../../lib/controllers/index.js')(adapter);
var crypto      = require('crypto');

function rand() {
  return crypto.randomBytes(32).toString('hex');
}

describe("users controller", function(){
  before(function(){
    req = {
      name: rand(),
      password: rand(),
      body: {}
    };
    res = {
      send: function(){}
    };
  });
  it("should create a user", function(fn) {
    adapter.create = sinon.spy();
    controllers.users.create(req, res);
    assert(adapter.create.called);
    fn();
  });
  it("should get a user", function(fn) {
    adapter.read = sinon.spy();
    controllers.users.show(req, res);
    assert(adapter.read.called);
    fn();
  });
  it("should update a user", function(fn) {
    adapter.update = sinon.spy();
    controllers.users.update(req, res);
    assert(adapter.update.called);
    fn();
  });
  it("should delete a user", function(fn) {
    adapter.delete = sinon.spy();
    controllers.users.delete(req, res);
    assert(adapter.delete.called);
    fn();
  });
});
