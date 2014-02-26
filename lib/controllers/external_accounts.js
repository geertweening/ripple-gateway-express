var adapter = require('../adapter.js');

module.exports = (function(){
  
	function index(req, res){
    var userId = req.user.admin ? req.body.user_id : req.user.id;
    ExternalAccount.findAll({ where: { user_id: userId }}).complete(function(err, externalAccounts) {
      if (err) {
        res.send(500, { error: err });
      } else {
        res.send({ external_accounts: externalAccounts || [] });
      }
    }); 
	}

  function create(req, res) { 
    var userId = req.user.admin ? req.body.user_id : req.user.id;
    ExternalAccount.create({
      name: req.body.name,
      user_id: userId
    }).complete(function(err, externalAccount) {
      if (err) {
        res.send(500, { error: err });
      } else {
        res.send({ external_account: externalAccount });
      }
    });
  }
  
  function show(req, res){
    res.send(req.body);
  }

  function update(req, res){
    res.send(req.body);
  }

  function destroy(req, res){
    res.send(req.body);
  }

  return {
		index: index,
    create: create,
    show: show,
    update: update,
    delete: destroy
	}
})();
