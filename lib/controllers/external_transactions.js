module.exports = function(adapter){

  adapter = adapter.externalTransactions;

  function index(req, res) {
    adapter.readAll(req.body, function(err, transactions) {
      if (err) {
        res.send(500, { error: err });
      } else {
        res.send({ external_transactions: transactions });
      }
    });
  }

  function create(req, res) {
    adapter.create(req.body, function(err, transaction){
      if (err) {
        res.send(500, { error: err });
      } else {
        res.send({ external_transaction: transaction });
      }
    });
  };

  function show(req, res){
    adapter.read(req.body, function(err, transaction) {
      if (err) {
        res.send(500, { error: err });
      } else {
        res.send({ external_transaction: transaction });
      }
    });
  }

  function update(req, res){
    adapter.update(req.body, function(err, transaction) {
      if (err) {
        res.send(500, { error: err });
      } else {
        res.send({ external_transaction: transaction });
      }
    });
  }

  function destroy(req, res){
    adapter.delete(req.body, function(err, transaction) {
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
};
