var Adapter = require(process.env.GATEWAY_DATA_ADAPTER || 'ripple-gateway-data-sequelize-adapter');

module.exports = Adapter;

