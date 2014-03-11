var assert = require('assert');
var sinon = require('sinon');
var adapter = require('../../lib/adapter.js');
var controllers = require('../../lib/controllers/index.js')(adapter);

adapter = adapter.externalAccounts;

describe("external accounts controller", function(){
  before(function(){
    req = {
      body: {},
      user: { admin: true }
    };
    res = {
      send: function(data){  }
    };
  });

  it("should create an external account", function(fn) {
    adapter.create = sinon.spy();
    req.body.userId = 1;
    req.body.name = 'someaccount';
    controllers.external_accounts.create(req, res);
    assert(adapter.create.called);
    fn();
  });
  it("should get an external account", function(fn) {
    adapter.read = sinon.spy();
    controllers.external_accounts.show(req, res);
    assert(adapter.read.called);
    fn();
  });
  it("should get many external accounts", function(fn) {
    adapter.readAll = sinon.spy();
    controllers.external_accounts.index(req, res);
    assert(adapter.readAll.called);
    fn();
  });
  it("should update an external account", function(fn) {
    adapter.update = sinon.spy();
    controllers.external_accounts.update(req, res);
    assert(adapter.update.called);
    fn();
  });
  it("should delete an external account", function(fn) {
    adapter.delete = sinon.spy();
    controllers.external_accounts.delete(req, res);
    assert(adapter.delete.called);
    fn();
  });
});
