var assert = require('assert');
var sinon = require('sinon');
var adapter = require('../../lib/adapter.js');
var controllers = require('../../lib/controllers/index.js');

describe("external transactions controller", function(){
  before(function(){
    req = {
      body: {}  
    };
    res = {
      send: function(){}
    };
  });
  it("should create an external transaction", function(fn) {
    adapter.createExternalTransaction = sinon.spy();
    controllers.external_transactions.create(req, res);
    assert(adapter.createExternalTransaction.called);
    fn();
  });
  it("should get an external transaction", function(fn) {
    adapter.getExternalTransaction = sinon.spy();
    controllers.external_transactions.show(req, res);
    assert(adapter.getExternalTransaction.called);
    fn();
  });
  it("should get many external transactions", function(fn) {
    adapter.getExternalTransactions = sinon.spy();
    controllers.external_transactions.index(req, res);
    assert(adapter.getExternalTransactions.called);
    fn();
  });
  it("should update an external transaction", function(fn) {
    adapter.updateExternalTransaction = sinon.spy();
    controllers.external_transactions.update(req, res);
    assert(adapter.updateExternalTransaction.called);
    fn();
  });
  it("should delete an external transaction", function(fn) {
    adapter.deleteExternalTransaction = sinon.spy();
    controllers.external_transactions.delete(req, res);
    assert(adapter.deleteExternalTransaction.called);
    fn();
  });
});
