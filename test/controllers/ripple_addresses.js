var assert = require('assert');
var sinon = require('sinon');
var adapter = require('../../lib/adapter.js');
var controllers = require('../../lib/controllers/index.js')(adapter);

describe("ripple addresss controller", function(){

  adapter = adapter.rippleAddresses;

  before(function(){
    req = {
      body: {}  
    };
    res = {
      send: function(){}
    };
  });
  it("should create a ripple address", function(fn) {
    adapter.create = sinon.spy();
    controllers.ripple_addresses.create(req, res);
    assert(adapter.create.called);
    fn();
  });
  it("should get a ripple address", function(fn) {
    adapter.read = sinon.spy();
    controllers.ripple_addresses.show(req, res);
    assert(adapter.read.called);
    fn();
  });
  it.skip("should get many ripple addresss", function(fn) {
    adapter.readAll = sinon.spy();
    controllers.ripple_addresses.index(req, res);
    assert(adapter.readAll.called);
    fn();
  });
  it("should update a ripple address", function(fn) {
    adapter.update = sinon.spy();
    controllers.ripple_addresses.update(req, res);
    assert(adapter.update.called);
    fn();
  });
  it("should delete a ripple address", function(fn) {
    adapter.delete = sinon.spy();
    controllers.ripple_addresses.delete(req, res);
    assert(adapter.delete.called);
    fn();
  });
});
