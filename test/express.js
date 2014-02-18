var express = require('express');
var ExpressGateway = require('ripple-gateway-express');
var sinon = require('sinon');
var assert = require('assert');
var TestAdapter = require("ripple-gateway-data").TestAdapter;

describe('Ripple Gateway Express', function(){

  before(function(done){
    app = express();
    adapter = new TestAdapter();
  });

  it('should inject express', function(){
    gatewayExpress = new ExpressGateway(app);
  });

  it('should throw an error if initialized without an app', function(){
    // Should throw an error
    gatewayExpress = new ExpressGateway();
    assert.raises('NoExpressApp', new ExpressGateway());
  });

  describe('mapping URL routes to Gateway API calls', function() {

    it('should get external transactions', function(done){
      sinon.spy(app);
      sinon.spy(adapter.getExternalTransactions);
      
      expect(app.get).toBeCalledWith('/api/v1/external_transactions');
      expect(adapter.getExternalTransactions).toBeCalled();
    });       

    it('should create an external transaction', function(done){
      sinon.spy(app);
      sinon.spy(adapter.getExternalTransactions);
      
      expect(app.post).toBeCalledWith('/api/v1/external_transactions');
      expect(adapter.createExternalTransaction).toBeCalled();
    });       

    it('should get external accounts', function(done){
      sinon.spy(app);
      sinon.spy(adapter.getExternalAccounts);
      
      expect(app.get).toBeCalledWith('/api/v1/external_accounts');
      expect(adapter.getExternalAccounts).toBeCalled();
    });       

    it('should create an external account', function(done){
      sinon.spy(app);
      sinon.spy(adapter.createExternalAccount);
      
      expect(app.post).toBeCalledWith('/api/v1/external_accounts');
      expect(adapter.createExternalAccount).toBeCalled();
    });       

    it('should get users', function(done){
      sinon.spy(app);
      sinon.spy(adapter.getUsers);
      
      expect(app.get).toBeCalledWith('/api/v1/users');
      expect(adapter.createExternalTransaction).toBeCalled();
    });       

    it('should create a user', function(done){
      sinon.spy(app);
      sinon.spy(adapter.createUser);
      
      expect(app.post).toBeCalledWith('/api/v1/users');
      expect(adapter.createUser).toBeCalled();
    });       

    it('should get ripple addresses', function(done){
      sinon.spy(app);
      sinon.spy(adapter.getRippleAddresses);
      
      expect(app.get).toBeCalledWith('/api/v1/ripple_addresses');
      expect(adapter.getRippleAddresses).toBeCalled();
    });       

    it('should create a ripple address', function(done){
      sinon.spy(app);
      sinon.spy(adapter.createRippleAddress);
      
      expect(app.post).toBeCalledWith('/api/v1/ripple_addresses');
      expect(adapter.createRippleAddress).toBeCalled();
    });       

    it('should get ripple transactions', function(done){
      sinon.spy(app);
      sinon.spy(adapter.getRippleTransactions);
      
      expect(app.get).toBeCalledWith('/api/v1/ripple_addresses');
      expect(adapter.createRippleAddress).toBeCalled();
    });       

    it('should create a ripple transaction', function(done){
      sinon.spy(app);
      sinon.spy(adapter.createRippleTransaction);
      
      expect(app.post).toBeCalledWith('/api/v1/ripple_transactions');
      expect(adapter.createRippleTransaction).toBeCalled();
    });       

    it('should get balances', function(done){
      sinon.spy(app);
      sinon.spy(adapter.getBalances);
      
      expect(app.post).toBeCalledWith('/api/v1/balances');
      expect(adapter.getBalances).toBeCalled();
    });       

  });
});
