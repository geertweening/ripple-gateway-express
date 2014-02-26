var assert = require('assert');
var sinon = require('sinon');
var adapter = require('../../lib/adapter.js');
var controllers = require('../../lib/controllers/index.js');

describe("ripple transactions controller", function(){
  before(function(){
    req = {
      body: {}  
    };
    res = {
      send: function(){}
    };
  });
  it("should create a ripple transaction", function(fn) {
    adapter.createRippleTransaction = sinon.spy();
    controllers.ripple_transactions.create(req, res);
    assert(adapter.createRippleTransaction.called);
    fn();
  });
  it("should get a ripple transaction", function(fn) {
    adapter.getRippleTransaction = sinon.spy();
    controllers.ripple_transactions.show(req, res);
    assert(adapter.getRippleTransaction.called);
    fn();
  });
  it("should get many ripple transactions", function(fn) {
    adapter.getRippleTransactions = sinon.spy();
    controllers.ripple_transactions.index(req, res);
    assert(adapter.getRippleTransactions.called);
    fn();
  });
  it("should update a ripple transaction", function(fn) {
    adapter.updateRippleTransaction = sinon.spy();
    controllers.ripple_transactions.update(req, res);
    assert(adapter.updateRippleTransaction.called);
    fn();
  });
  it("should delete a ripple transaction", function(fn) {
    adapter.deleteRippleTransaction = sinon.spy();
    controllers.ripple_transactions.delete(req, res);
    assert(adapter.deleteRippleTransaction.called);
    fn();
  });
});
