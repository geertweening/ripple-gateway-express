
module.exports = function(adapter){

  adapter = adapter.rippleTransactions;

  function index(req, res) {
    adapter.readAll(req.body, function(err, ripple_transactions){
      if (err) {
        res.send(500, { error: err });
      } else {
        res.send({ ripple_transactions: (payments || []) });
      }
    });
  } 
  
  function create(req, res){
    adapter.create (req.body, function(err, ripple_transaction) {
      if (err) {
        res.send(500, { error: err });
      } else {
        res.send({ ripple_transaction: ripple_transaction });
      }
    });
  }

  function show(req, res) {
    adapter.read (req.body, function(err, ripple_transaction) {
      if (err) {
        res.send(500, { error: err });
      } else {
        res.send({ ripple_transaction: ripple_transaction });
      }
    });
  }

	function update(req, res) {
    adapter.update(req.body, function(err, ripple_transaction){
      if (err) {
        res.send(500, { error: err });
      } else {
        res.send({ ripple_transaction: ripple_transaction });
      }
    });
  }

  function destroy(req, res) {
    adapter.delete (req.body, function(err, ripple_transactions){
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
};

