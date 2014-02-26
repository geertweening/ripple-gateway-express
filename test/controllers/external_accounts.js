var assert = require('assert');
var sinon = require('sinon');
var adapter = require('../../lib/adapter.js');
var controllers = require('../../lib/controllers/index.js');

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
    adapter.createExternalAccount = sinon.spy();
    req.body.userId = 1;
    req.body.name = 'someaccount';
    controllers.external_accounts.create(req, res);
    assert(adapter.createExternalAccount.called);
    fn();
  });
  it("should get an external account", function(fn) {
    adapter.getExternalAccount = sinon.spy();
    controllers.external_accounts.show(req, res);
    assert(adapter.getExternalAccount.called);
    fn();
  });
  it("should get many external accounts", function(fn) {
    adapter.getExternalAccounts = sinon.spy();
    controllers.external_accounts.index(req, res);
    assert(adapter.getExternalAccounts.called);
    fn();
  });
  it("should update an external account", function(fn) {
    adapter.updateExternalAccounts = sinon.spy();
    controllers.external_accounts.update(req, res);
    assert(adapter.updateExternalAccount.called);
    fn();
  });
  it("should delete an external account", function(fn) {
    adapter.deleteExternalAccount = sinon.spy();
    controllers.external_accounts.delete(req, res);
    assert(adapter.deleteExternalAccount.called);
    fn();
  });
});
