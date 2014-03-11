
module.exports = function(adapter) {

  adapter = adapter.externalAccounts;

	function index(req, res){
    var userId = req.user.admin ? req.body.user_id : req.user.id;
    adapter.readAll({ user_id: userId }, function(err, external_accounts){
      if (err) {
        res.send(500, { error: err });
      } else {
        res.send({ external_accounts: external_accounts || [] });
      }
    });
	}

  function create(req, res) { 
    var userId = req.user.admin ? req.body.user_id : req.user.id;
    
    var opts = {
      name: req.body.name,
      user_id: userId
    }
    adapter.create(opts, function(err, external_account){;
      if (err) {
        res.send(500, { error: err });
      } else {
        res.send({ external_account: external_account });
      }
    });
  }
  
  function show(req, res){
    adapter.read(req.body, function(err, external_account){
      if (err) {
        res.send(500, { error: err });
      } else {
        res.send({ external_account: external_account });
      }
    });
  }

  function update(req, res){
    adapter.update(req.body, function(err, external_account){
      if (err) {
        res.send(500, { error: err });
      } else {
        res.send({ external_account: external_account });
      }
    });
  }

  function destroy(req, res){
    adapter.delete(req.body, function(err, external_account){
      if (err) {
        res.send(500, { error: err });
      } else {
        res.send({ external_account: external_account });
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
