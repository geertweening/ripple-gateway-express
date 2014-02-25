module.exports =  {
  bind: function(app, passport) {
    app.get('/v1/external_transactions', 
      passport.authenticate('basic', { session: false }),
      function(req, res){
        res.send(200);    
      });
    app.post('/v1/external_transactions', function(req, res){
      res.send(200);    
    });
    app.put('/v1/external_transactions', function(req, res){
      res.send(200);    
    });
    app.delete('/v1/external_transactions', function(req, res){
      res.send(200);    
    });

    app.get('/v1/external_accounts', function(req, res){
      res.send(200);    
    });
    app.post('/v1/external_accounts', function(req, res){
      res.send(200);    
    });
    app.put('/v1/external_accounts', function(req, res){
      res.send(200);    
    });
    app.delete('/v1/external_accounts', function(req, res){
      res.send(200);    
    });

    app.get('/v1/users', function(req, res){
      res.send(200);    
    });
    app.post('/v1/users', function(req, res){
      res.send(200);    
    });
    app.put('/v1/users', function(req, res){
      res.send(200);    
    });
    app.delete('/v1/users', function(req, res){
      res.send(200);    
    });

    app.get('/v1/ripple_addresses', function(req, res){
      res.send(200);    
    });
    app.post('/v1/ripple_addresses', function(req, res){
      res.send(200);    
    });
    app.put('/v1/ripple_addresses', function(req, res){
      res.send(200);    
    });
    app.delete('/v1/ripple_addresses', function(req, res){
      res.send(200);    
    });

    app.get('/v1/ripple_transactions', function(req, res){
      res.send(200);    
    });
    app.post('/v1/ripple_transactions', function(req, res){
      res.send(200);    
    });
    app.put('/v1/ripple_transactions', function(req, res){
      res.send(200);    
    });
    app.delete('/v1/ripple_transactions', function(req, res){
      res.send(200);    
    });
  }
};

