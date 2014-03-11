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
      body: {
        name: rand(),
        password: rand()
      }
    };
    res = {
      send: function(){}
    };
  });
  it("should create a user", function(fn) {
    adapter.users.create = sinon.spy();
    controllers.users.create(req, res);
    assert(adapter.users.create.called);
    fn();
  });
  it("should get a user", function(fn) {
    adapter.users.read = sinon.spy();
    controllers.users.read(req, res);
    assert(adapter.users.read.called);
    fn();
  });
  it("should update a user", function(fn) {
    adapter.users.update = sinon.spy();

    req.params = {};
    req.params.id = rand();
    
    controllers.users.update(req, res);
    assert(adapter.users.update.called);
    fn();
  });
  it("should delete a user", function(fn) {
    adapter.users.delete = sinon.spy();
    controllers.users.delete(req, res);
    assert(adapter.users.delete.called);
    fn();
  });
});
