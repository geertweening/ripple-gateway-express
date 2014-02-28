var assert = require('assert');
var sinon = require('sinon');
var adapter = require('../../lib/adapter.js');
var controllers = require('../../lib/controllers/index.js')(adapter);

describe("users controller", function(){
  before(function(){
    req = {
      body: {}  
    };
    res = {
      send: function(){}
    };
  });
  it("should create a user", function(fn) {
    adapter.createUser = sinon.spy();
    controllers.users.create(req, res);
    assert(adapter.createUser.called);
    fn();
  });
  it("should get a user", function(fn) {
    adapter.getUser = sinon.spy();
    controllers.users.show(req, res);
    assert(adapter.getUser.called);
    fn();
  });
  it("should update a user", function(fn) {
    adapter.updateUser = sinon.spy();
    controllers.users.update(req, res);
    assert(adapter.updateUser.called);
    fn();
  });
  it("should delete a user", function(fn) {
    adapter.deleteUser = sinon.spy();
    controllers.users.delete(req, res);
    assert(adapter.deleteUser.called);
    fn();
  });
});
