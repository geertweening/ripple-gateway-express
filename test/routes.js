var express = require('express'); var ExpressGateway = require('../lib/index');
var sinon = require('sinon');
var assert = require('assert');
var passport = require('../lib/passport.js');
var controllers = require('../lib/controllers/index.js');
var Adapter = require('ripple-gateway-data-sequelize-adapter');

describe('Ripple Gateway Express', function(){

  before(function(){
    app = express();
    adapter = new Adapter();
  });

  it('should inject express', function(){
    app = new ExpressGateway(app, passport, adapter);
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

    describe('external accounts', function(){
      it('GET /v1/external_accounts should call the external_accounts index action', function(){
        assert(app.get.calledWith('/api/v1/external_accounts'));
      });       
      it('GET /v1/external_accounts/:id should call the external_accounts show action', function(){
        assert(app.get.calledWith('/api/v1/external_accounts/:id'));
      });       
      it('POST /v1/external_accounts should call external_accounts create action', function(){
        assert(app.post.calledWith('/api/v1/external_accounts'));
      });       
      it('PUT /v1/external_accounts should call external_accounts update action', function(){
        assert(app.put.calledWith('/api/v1/external_accounts/:id'));
      });       
      it('DELETE /v1/external_accounts should call external_accounts delete action', function(){
        assert(app.delete.calledWith('/api/v1/external_accounts/:id'));
      });       
    });
    describe('external transactions', function(){
      it('GET /v1/external_transactions should call the external_transactions index action', function(){
        assert(app.get.calledWith('/api/v1/external_transactions')); 
      });       
      it('GET /v1/external_transactions/:id should call the external_transactions show action', function(){
        assert(app.get.calledWith('/api/v1/external_transactions/:id')); 
      });       
      it('POST /v1/external_transactions should call the external_transactions create action', function(){
        assert(app.post.calledWith('/api/v1/external_transactions'));
      });       
      it('PUT /v1/external_transactions/:id should call the external_transactions update action', function(){
        assert(app.put.calledWith('/api/v1/external_transactions/:id'));
      });       
      it('DELETE /v1/external_transactions should call the external_transactions delete action', function(){
        assert(app.delete.calledWith('/api/v1/external_transactions/:id'));
      });       
    });
    describe('users', function(){
      it('POST /v1/users should call the users create action', function(){
        assert(app.post.calledWith('/api/v1/users'));
      });       
      it('GET /v1/users should call the users index action', function(){
        assert(app.get.calledWith('/api/v1/users'));
      });       
      it('GET /v1/users/:id should call the users show action', function(){
        assert(app.get.calledWith('/api/v1/users/:id'));
      });       
      it('PUT /v1/users/:id should call the users update action', function(){
        assert(app.put.calledWith('/api/v1/users/:id'));
      });       
      it('DELETE /v1/users/:id should call the users update action', function(){
        assert(app.delete.calledWith('/api/v1/users/:id'));
      });       
    });
    describe('ripple addresses', function(){
      it('GET /v1/ripple_addresses should call ripple_addresses index action', function(){
        assert(app.get.calledWith('/api/v1/ripple_addresses'));
      });       
      it('GET /v1/ripple_addresses/:id should call ripple_addresses index action', function(){
        assert(app.get.calledWith('/api/v1/ripple_addresses/:id'));
      });       
      it('POST /v1/ripple_addresses should call ripple_addresses create action', function(){
        assert(app.post.calledWith('/api/v1/ripple_addresses'));
      });       
      it('PUT /v1/ripple_addresses/:id should call ripple_addresses index action', function(){
        assert(app.put.calledWith('/api/v1/ripple_addresses/:id'));
      });       
      it('DELETE /v1/ripple_addresses/:id should call ripple_addresses index action', function(){
        assert(app.delete.calledWith('/api/v1/ripple_addresses/:id'));
      });       
    });
    describe('ripple transactions', function(){
      it('GET /v1/ripple_transactions should call ripple_transactions index action', function(){
        assert(app.get.calledWith('/api/v1/ripple_transactions'));
      });       
      it('GET /v1/ripple_transactions/:id should call ripple_transactions show action', function(){
        assert(app.get.calledWith('/api/v1/ripple_transactions/:id'));
      });       
      it('POST /v1/ripple_transactions should call ripple_transactions create action', function(){
        assert(app.post.calledWith('/api/v1/ripple_transactions'));
      });       
      it('PUT /v1/ripple_transactions/:id should call ripple_transactions update action', function(){
        assert(app.put.calledWith('/api/v1/ripple_transactions/:id'));
      });       
      it('DELETE /v1/ripple_transactions/:id should call ripple_transactions delete action', function(){
        assert(app.delete.calledWith('/api/v1/ripple_transactions/:id'));
      });       
    });
    describe('balances', function(){
      it('GET /v1/balances should call balances index action', function(){
        assert(app.get.calledWith('/api/v1/balances'));
      });       
      it('GET /v1/balances/:id should call balances show action', function(){
        assert(app.get.calledWith('/api/v1/balances/:id'));
      });       
    });
    describe('settings', function(){
      it('GET /v1/settings should call settings index action', function(){
        assert(app.get.calledWith('/api/v1/settings'));
      });       
    });
  });
});
