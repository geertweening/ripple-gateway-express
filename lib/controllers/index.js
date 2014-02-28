var requireAll = require('require-all');

var controllers = requireAll({
  dirname: __dirname,
  filter: /(.+)\.js(on)?$/
})

// Inject the adapter into all the controllers

function initialize(adapter) {
  var initialized_controllers = {}
  var keys = Object.keys(controllers);
  for (var i=0; i<keys.length; i++){
    var key = keys[i];
    var controller = controllers[key];
    if (typeof controller == 'function') {
      initialized_controllers[key] = controller(adapter);
    }
  };
  return initialized_controllers;
}

module.exports = initialize;
