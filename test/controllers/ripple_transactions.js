var assert = require('assert');
var sinon = require('sinon');
var adapter = require('../../lib/adapter.js');
var controllers = require('../../lib/controllers/index.js')(adapter);

describe("ripple transactions controller", function(){

  adapter = adapter.rippleTransactions;

  before(function(){
    req = {
      body: {}  
    };
    res = {
      send: function(){}
    };
  });
  it("should create a ripple transaction", function(fn) {
    adapter.create = sinon.spy();
    controllers.ripple_transactions.create(req, res);
    assert(adapter.create.called);
    fn();
  });
  it("should get a ripple transaction", function(fn) {
    adapter.read = sinon.spy();
    controllers.ripple_transactions.show(req, res);
    assert(adapter.read.called);
    fn();
  });
  it("should get many ripple transactions", function(fn) {
    adapter.readAll = sinon.spy();
    controllers.ripple_transactions.index(req, res);
    assert(adapter.readAll.called);
    fn();
  });
  it("should update a ripple transaction", function(fn) {
    adapter.update = sinon.spy();
    controllers.ripple_transactions.update(req, res);
    assert(adapter.update.called);
    fn();
  });
  it("should delete a ripple transaction", function(fn) {
    adapter.delete = sinon.spy();
    controllers.ripple_transactions.delete(req, res);
    assert(adapter.delete.called);
    fn();
  });
});
