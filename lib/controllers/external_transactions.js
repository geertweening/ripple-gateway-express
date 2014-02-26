var adapter = new require('../adapter.js');

module.exports = (function(){
  function index(req, res) {
    adapter.getExternalTransactions(req.body, function(err, transactions) {
      if (err) {
        res.send(500, { error: err });
      } else {
        res.send({ external_transactions: transactions });
      }
    });
  }

  function create(req, res) {
    adapter.createExternalTransaction(req.body, function(err, transaction){
      if (err) {
        res.send(500, { error: err });
      } else {
        res.send({ external_transaction: transaction });
      }
    });
  };

  function show(req, res){
    adapter.getExternalTransaction(req.body, function(err, transaction) {
      if (err) {
        res.send(500, { error: err });
      } else {
        res.send({ external_transaction: transaction });
      }
    });
  }

  function update(req, res){
    adapter.updateExternalTransaction(req.body, function(err, transaction) {
      if (err) {
        res.send(500, { error: err });
      } else {
        res.send({ external_transaction: transaction });
      }
    });
  }

  function destroy(req, res){
    adapter.deleteExternalTransaction(req.body, function(err, transaction) {
      if (err) {
        res.send(500, { error: err });
      } else {
        res.send({ external_transaction: transaction });
      }
    });
  }

  return {
		index: index,
    create: create,
    show: show,
    update: update,
    delete: destroy
	}
})();
