
module.exports = function(adapter) {

  adapter = adapter.users;

  function index(req, res) {
    adapter.read(req.query, function(err, users){
      if (err) {
        res.send(500, { error: err });
      } else {
        res.send({ users: users || [] });
      }  
    });
  }

  function show(req, res, some) {
    selectOpts = req.query;

    // if there's no selection options, assume the user wants to look
    // at their own user info
    if ((!req.selectOpts || req.selectOpts == {}) && req.user) {
      selectOpts = {name: req.user.name};
    }

    adapter.readAll(selectOpts, function(err, user){
      if (err) {
        res.send(500, { error: err });
      } else {
        res.send({ user: user });
      }  
    });
  }

  function create(req, res) {
    adapter.create(req.body, function(err, user){
      if (err) {
        res.send(500, { error: err });
      } else {
        res.send({ user: user });
      }  
    });
  }
  
  function update(req, res) {
    adapter.update({id: req.params.id}, req.body, function(err, user){
      if (err) {
        res.send(500, { error: err });
      } else {
        res.send({ user: user });
      }  
    });
  }

  function destroy(req, res) {
    adapter.delete(req.body, function(err, user){
      if (err) {
        res.send(500, { error: err });
      } else {
        res.send({ user: user });
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

