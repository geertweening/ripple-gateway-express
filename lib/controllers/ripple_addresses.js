var adapter = require('../adapter.js');

module.exports = (function(){
  function show(req, res) {
    if (req.params.tag) {
      var where = { address: req.params.account, tag: req.params.tag }; 
    } else {
      var where = { address: req.params.account, tag: null }; 
    }
    RippleAddress.find({ where: where }).complete(function(err, address){
      if (err) {
        res.send(500, { error: err });
      } else {
        if (!user.admin) { address.secret = null };
        res.send({ ripple_address: address });
      }
    });
  };

  function create(req, res) {
    req.assert('address', 'Invalid address').notNull();
    req.assert('type', 'Invalid type. "type" must be in the set { hot cold hosted independent }').isIn(['hot', 'cold', 'hosted', 'independent']);

    if (errors = req.validationErrors()) {
      res.send(500, { error: errors });
    }

    if (!req.user.admin) {
      req.assert('user_id', 'Invalid user_id').isInt();
      userId = req.body.user_id;
    } else {
      userId = req.user.id;
    }

    RippleAddress.create({
      user_id: userId,
      address: req.body.address,
      type: req.body.type,
      tag: req.body.tag
    }).complete(function(err, address){
      if (err) {
        res.send(500, { error: err });
      } else {
        res.send({ ripple_address: address });
      }
    });
	}

  function index(req,res) {
    if (req.user.admin) {
      RippleAddress.findAll().complete(function(err, addresses) {
        if (err) {
          res.send(500, { error: err });
        } else {
          res.send({ ripple_addresses: addresses });
        }
      });
    } else {
      RippleAddress.findAll({ where: { user_id: req.user.id }})
        .complete(function(err, addresses) {
          if (err) {
            res.send(500, { error: err });
          } else {
            res.send({ ripple_addresses: addresses });
          }
      });
    }
  }

  function update(req, res){
    res.send(req.body);
  }

  function destroy(req, res){
    res.send(req.body);
  }

  return {
		create: create,
		index: index,
    show: show,
    update: update,
    delete: destroy
  }
})();
