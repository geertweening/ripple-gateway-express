
module.exports = function(adapter) {
  function index(req, res) {
    adapter.getUsers(req.body, function(err, users){
      if (err) {
        res.send(500, { error: err });
      } else {
        res.send({ users: users || [] });
      }  
    });
  }

  function show(req, res) {
    adapter.getUser (req.body, function(err, user){
      if (err) {
        res.send(500, { error: err });
      } else {
        res.send({ user: user });
      }  
    });
  }

  function create(req, res) {
    adapter.createUser(req.body, function(err, user){
      if (err) {
        res.send(500, { error: err });
      } else {
        res.send({ user: user });
      }  
    });
  }
  
  function update(req, res) {
    adapter.updateUser(req.body, function(err, user){
      if (err) {
        res.send(500, { error: err });
      } else {
        res.send({ user: user });
      }  
    });
  }

  function destroy(req, res) {
    adapter.deleteUser(req.body, function(err, user){
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

