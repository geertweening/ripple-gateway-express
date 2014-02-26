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
    app.get('/api/v1/users/:id', auth(), ctrls['users'].show);
    app.put('/api/v1/users/:id', auth(), ctrls['users'].update);
    app.delete('/api/v1/users/:id', auth(), ctrls['users'].delete);

    // External Accounts
    app.get('/api/v1/external_accounts', auth(), ctrls['external_accounts'].index);
    app.post('/api/v1/external_accounts', auth(), ctrls['external_accounts'].create);
    app.get('/api/v1/external_accounts/:id', auth(), ctrls['external_accounts'].show);
    app.put('/api/v1/external_accounts/:id', auth(), ctrls['external_accounts'].update);
    app.delete('/api/v1/external_accounts/:id', auth(), ctrls['external_accounts'].delete);

    // External Transactions
    app.get('/api/v1/external_transactions', auth(), ctrls['external_transactions'].index);
    app.post('/api/v1/external_transactions', auth(), ctrls['external_transactions'].create);
    app.get('/api/v1/external_transactions/:id', auth(), ctrls['external_transactions'].show);
    app.put('/api/v1/external_transactions/:id', auth(), ctrls['external_transactions'].update);
    app.delete('/api/v1/external_transactions/:id', auth(), ctrls['external_transactions'].delete);

    app.post('/api/v1/deposits', auth(), ctrls['deposits'].create);
    app.get('/api/v1/deposits', auth(), ctrls['deposits'].index);
    app.post('/api/v1/withdrawals', auth(), ctrls['withdrawals'].create);
    app.get('/api/v1/withdrawals/pending', auth(), ctrls['withdrawals'].pending);
    app.post('/api/v1/withdrawals/:id/clear', auth(), ctrls['withdrawals'].create);

    // Balances
    app.get('/api/v1/balances', ctrls['balances'].index);
    app.get('/api/v1/balances/:id', ctrls['balances'].show);

    // Ripple Addresses
    app.post('/api/v1/ripple_addresses', auth(), ctrls['ripple_addresses'].create);
    app.get('/api/v1/ripple_addresses', auth(), ctrls['ripple_addresses'].index);
    app.get('/api/v1/ripple_addresses/:id', auth(), ctrls['ripple_addresses'].show);
    app.put('/api/v1/ripple_addresses/:id', auth(), ctrls['ripple_addresses'].update);
    app.delete('/api/v1/ripple_addresses/:id', auth(), ctrls['ripple_addresses'].delete);

    app.get('/api/v1/ripple_addresses/:account', auth(), ctrls['ripple_addresses'].show);
    app.get('/api/v1/ripple_addresses/:account/tag/:tag', auth(), ctrls['ripple_addresses'].show);

    // Ripple Transactions
    app.get('/api/v1/ripple_transactions', auth(), ctrls['ripple_transactions'].index);
    app.post('/api/v1/ripple_transactions', auth(), ctrls['ripple_transactions'].create);
    app.get('/api/v1/ripple_transactions/:id', auth(), ctrls['ripple_transactions'].show);
    app.put('/api/v1/ripple_transactions/:id', auth(), ctrls['ripple_transactions'].update);
    app.delete('/api/v1/ripple_transactions/:id', auth(), ctrls['ripple_transactions'].delete);

    app.get('/api/v1/ripple_transactions/pending', auth(), ctrls['ripple_transactions'].create);

  }

  return { bind: configure }
})()
