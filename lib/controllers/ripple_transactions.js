var adapter = require('../adapter.js');

module.exports = (function(){
  function index(req, res) {
    adapter.getRippleTransactions(req.body, function(err, ripple_transactions){
      if (err) {
        res.send(500, { error: err });
      } else {
        res.send({ ripple_transactions: (payments || []) });
      }
    });
  } 
  
  function create(req, res){
    adapter.createRippleTransaction (req.body, function(err, ripple_transaction) {
      if (err) {
        res.send(500, { error: err });
      } else {
        res.send({ ripple_transaction: ripple_transaction });
      }
    });
  }

  function show(req, res) {
    adapter.getRippleTransaction (req.body, function(err, ripple_transaction) {
      if (err) {
        res.send(500, { error: err });
      } else {
        res.send({ ripple_transaction: ripple_transaction });
      }
    });
  }

	function update(req, res) {
    adapter.updateRippleTransaction (req.body, function(err, ripple_transaction){
      if (err) {
        res.send(500, { error: err });
      } else {
        res.send({ ripple_transaction: ripple_transaction });
      }
    });
  }

  function destroy(req, res) {
    adapter.deleteRippleTransaction (req.body, function(err, ripple_transactions){
      if (err) {
        res.send(500, { error: err });
      } else {
        res.send({ ripple_transactions: (payments || []) });
      }
    });
  }

  return {
    update: update,
    create: create,
		index: index,
    show: show,
    delete: destroy,
	}
})();
