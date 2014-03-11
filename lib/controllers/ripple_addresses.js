
module.exports = function(adapter){

  adapter = adapter.rippleAddresses;

  function show(req, res) {
    adapter.read(req.body, function(err, address) {
      if (err) {
        res.send(500, { error: err });
      } else {
        if (!user.admin) { address.secret = null };
        res.send({ ripple_address: address });
      }
    });
  };

  function create(req, res) {
    adapter.create(req.body, function(err, address){
      if (err) {
        res.send(500, { error: err });
      } else {
        res.send({ ripple_address: address });
      }
    });
	}

  function index(req,res) {
    adapter.reaAlld(req.body, function(err, addresses){
      if (err) {
        res.send(500, { error: err });
      } else {
        res.send({ ripple_addresses: addresses });
      }
    });
  }

  function update(req, res){
    adapter.update(req.body, function(err, addresses){
      if (err) {
        res.send(500, { error: err });
      } else {
        res.send({ ripple_addresses: addresses });
      }
    });
  }

  function destroy(req, res){
    adapter.delete(req.body, function(err, addresses){
      if (err) {
        res.send(500, { error: err });
      } else {
        res.send({ ripple_addresses: addresses });
      }
    });
  }

  return {
		create: create,
		index: index,
    show: show,
    update: update,
    delete: destroy
  }
};

