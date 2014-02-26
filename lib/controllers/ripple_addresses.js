var adapter = require('../adapter.js');

module.exports = (function(){
  function show(req, res) {
    adapter.getRippleAddress(req.body, function(err, address) {
      if (err) {
        res.send(500, { error: err });
      } else {
        if (!user.admin) { address.secret = null };
        res.send({ ripple_address: address });
      }
    });
  };

  function create(req, res) {
    adapter.createRippleAddress(req.body, function(err, address){
      if (err) {
        res.send(500, { error: err });
      } else {
        res.send({ ripple_address: address });
      }
    });
	}

  function index(req,res) {
    adapter.getRippleAddresses(req.body, function(err, addresses){
      if (err) {
        res.send(500, { error: err });
      } else {
        res.send({ ripple_addresses: addresses });
      }
    });
  }

  function update(req, res){
    adapter.updateRippleAddress(req.body, function(err, addresses){
      if (err) {
        res.send(500, { error: err });
      } else {
        res.send({ ripple_addresses: addresses });
      }
    });
  }

  function destroy(req, res){
    adapter.deleteRippleAddress(req.body, function(err, addresses){
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
})();
