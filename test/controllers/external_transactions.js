var assert = require('assert');
var sinon = require('sinon');
var adapter = require('../../lib/adapter.js');
var controllers = require('../../lib/controllers/index.js')(adapter);

describe("external transactions controller", function(){

  adapter = adapter.externalTransactions;

  before(function(){
    req = {
      body: {}  
    };
    res = {
      send: function(){}
    };
  });
  it("should create an external transaction", function(fn) {
    adapter.create = sinon.spy();
    controllers.external_transactions.create(req, res);
    assert(adapter.create.called);
    fn();
  });
  it("should get an external transaction", function(fn) {
    adapter.read = sinon.spy();
    controllers.external_transactions.show(req, res);
    assert(adapter.read.called);
    fn();
  });
  it("should get many external transactions", function(fn) {
    adapter.readAll = sinon.spy();
    controllers.external_transactions.index(req, res);
    assert(adapter.readAll.called);
    fn();
  });
  it("should update an external transaction", function(fn) {
    adapter.update = sinon.spy();
    controllers.external_transactions.update(req, res);
    assert(adapter.update.called);
    fn();
  });
  it("should delete an external transaction", function(fn) {
    adapter.delete = sinon.spy();
    controllers.external_transactions.delete(req, res);
    assert(adapter.delete.called);
    fn();
  });
});
