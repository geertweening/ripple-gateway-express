var assert = require('assert');
var sinon = require('sinon');
var adapter = require('../../lib/adapter.js');
var controllers = require('../../lib/controllers/index.js');

describe("ripple addresss controller", function(){
  before(function(){
    req = {
      body: {}  
    };
    res = {
      send: function(){}
    };
  });
  it("should create a ripple address", function(fn) {
    adapter.createRippleAddress = sinon.spy();
    controllers.ripple_addresses.create(req, res);
    assert(adapter.createRippleAddress.called);
    fn();
  });
  it("should get a ripple address", function(fn) {
    adapter.getRippleAddress = sinon.spy();
    controllers.ripple_addresses.show(req, res);
    assert(adapter.getRippleAddress.called);
    fn();
  });
  it("should get many ripple addresss", function(fn) {
    adapter.getRippleAddresses = sinon.spy();
    controllers.ripple_addresses.index(req, res);
    assert(adapter.getRippleAddresses.called);
    fn();
  });
  it("should update a ripple address", function(fn) {
    adapter.updateRippleAddress = sinon.spy();
    controllers.ripple_addresses.update(req, res);
    assert(adapter.updateRippleAddress.called);
    fn();
  });
  it("should delete a ripple address", function(fn) {
    adapter.deleteRippleAddress = sinon.spy();
    controllers.ripple_addresses.delete(req, res);
    assert(adapter.deleteRippleAddress.called);
    fn();
  });
});
