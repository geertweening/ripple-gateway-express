
module.exports = function(adapter){
  function index(req, res) {
    /*
    req.user.balances(function(err, balances) {
      if (err) {
        res.send(500, { error: err });
      } else {
        res.send({ balances: balances });
      }
    });
    */
  } 

  function show(req, res) {
    res.send(req.body);
  };

  return {
    index: index,
    show: show
  }
};
