var express = require('express');
var ExpressGateway = require('../lib/index');
var sinon = require('sinon');
var assert = require('assert');
var passport = require('../lib/passport.js');
var controllers = require('../lib/controllers/index.js');
var Adapter = require('ripple-gateway-data-sequelize-adapter');

describe('Ripple Gateway Express', function(){

  before(function(fn){
    app = express();
    adapter = new Adapter();
    fn();
  });

  it('should inject express', function(fn){
    app = new ExpressGateway(app, passport, adapter);
    fn();
  });

  describe('mapping URL routes to Gateway API calls', function() {
    beforeEach(function(){
      app = express(); 
      app.get = sinon.spy();
      app.post = sinon.spy();
      app.put = sinon.spy();
      app.delete = sinon.spy();
      new ExpressGateway(app, passport, adapter);
    });

    it('GET /v1/external_transactions should call the external_transactions index action', function(fn){
      assert(app.get.calledWith(['/v1/external_transactions', controllers.external_transactions.index])); 
      fn();
    });       

    it('POST /v1/external_transactions should call the external_transactions create action', function(fn){
      assert(app.post.calledWith('/v1/external_transactions'));
      fn();
    });       

    it('GET /v1/external_accounts should call the external_accounts index action', function(fn){
      assert(app.get.calledWith('v1/external_accounts'));
      fn();
    });       

    it('should create an external account', function(fn){
      assert(app.post.calledWith('/api/v1/external_accounts'));
      fn();
    });       

    it('should get users', function(fn){
      assert(app.post.calledWith('/api/v1/users'));
      fn();
    });       

    it('should create a user', function(fn){
      assert(app.post.calledWith('/api/v1/users'));
      fn();
    });       

    it('should get ripple addresses', function(fn){
      assert(app.get.calledWith('/api/v1/ripple_addresses'));
      fn();
    });       

    it('should create a ripple address', function(fn){
      assert(app.post.calledWith('/api/v1/ripple_addresses'));
      fn();
    });       

    it.skip('should get ripple transactions', function(fn){
      sinon.spy(app);
      sinon.spy(adapter.getRippleTransactions);
      
      expect(app.get).toBeCalledWith('/api/v1/ripple_addresses');
      expect(adapter.createRippleAddress).toBeCalled();
    });       

    it.skip('should create a ripple transaction', function(fn){
      sinon.spy(app);
      sinon.spy(adapter.createRippleTransaction);
      
      expect(app.post).toBeCalledWith('/api/v1/ripple_transactions');
      expect(adapter.createRippleTransaction).toBeCalled();
    });       

    it.skip('should get balances', function(fn){
      sinon.spy(app);
      sinon.spy(adapter.getBalances);
      
      expect(app.post).toBeCalledWith('/api/v1/balances');
      expect(adapter.getBalances).toBeCalled();
    });       

  });
});
