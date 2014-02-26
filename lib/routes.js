var ctrls = require('./controllers/index.js');

module.exports = (function(){
  function configure(app, passport) {
    //  Unauthenticated Resources

    function auth () {
      return passport.authenticate('basic', {session: false});
    }

    app.get('/api/v1/settings', ctrls['settings'].index);

    // Users //
    app.post('/api/v1/users', auth(), ctrls['users'].create);
    app.get('/api/v1/users', auth(), ctrls['users'].index);
    app.get('/api/v1/users/:user_id', auth(), ctrls['users'].show);

    // External Accounts

    app.get('/api/v1/external_accounts', auth(), ctrls['external_accounts'].index);
    app.post('/api/v1/external_accounts', auth(), ctrls['external_accounts'].create);
    app.get('/api/v1/external_accounts/:id', auth(), ctrls['external_accounts'].show);
    app.put('/api/v1/external_accounts/:id', auth(), ctrls['external_accounts'].update);
    app.delete('/api/v1/external_accounts/:id', auth(), ctrls['external_accounts'].delete);

    // External Transactions
    app.get('/api/v1/external_transactions', auth(), ctrls['external_transactions'].index);
    app.post('/api/v1/external_transactions', auth(), ctrls['external_transactions'].create);
    app.post('/api/v1/deposits', auth(), ctrls['deposits'].create);
    app.get('/api/v1/deposits', auth(), ctrls['deposits'].index);
    app.post('/api/v1/withdrawals', auth(), ctrls['withdrawals'].create);
    app.get('/api/v1/withdrawals/pending', auth(), ctrls['withdrawals'].pending);
    app.post('/api/v1/withdrawals/:id/clear', auth(), ctrls['withdrawals'].create);

    // Balances
    app.get('/api/v1/balances', 
      passport.authenticate('basic', { session: false }),
      ctrls['balances'].index);

    app.get('/api/v1/ripple_addresses', 
      passport.authenticate('basic', { session: false }),
      ctrls['ripple_addresses'].index);

    app.get('/api/v1/ripple_addresses/:account', 
      passport.authenticate('basic', { session: false }),
      ctrls['ripple_addresses'].show);

    app.get('/api/v1/ripple_addresses/:account/tag/:tag', 
      passport.authenticate('basic', { session: false }),
      ctrls['ripple_addresses'].show);

    app.post('/api/v1/ripple_addresses', 
      passport.authenticate('basic', { session: false }),
      ctrls['ripple_addresses'].create);

    app.get('/api/v1/ripple_transactions', 
      passport.authenticate('basic', { session: false }),
      ctrls['ripple_transactions'].index);

    app.post('/api/v1/ripple_transactions',
      passport.authenticate('basic', { session: false }),
      ctrls['ripple_transactions'].create);

    app.get('/api/v1/ripple_transactions/pending',
      passport.authenticate('basic', { session: false }),
      ctrls['ripple_transactions'].create);

    /////////////////////////
  }

  return { bind: configure }
})()
