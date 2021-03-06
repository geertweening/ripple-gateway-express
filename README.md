## Ripple Gateway Express Interface

Designed to plug into the node Express web framework on the front end and interface
with a Ripple Gateway Data Adapter to perform Gateway API calls.

The Ripple Gateway Express module is a drop-in replacement for the express node 
module, to which has been added http routes mapped to Ripple Gateway API calls.

Authentication is provided

### Installation

    npm install ripple-gateway-express

### Usage

    var express = require('express');
    var ExpressGateway = require('ripple-gateway-express');
    var TestAdapter = require('ripple-gateway-data').TestAdapter;

    var gatewayApi = new TestAdapter();

    // bind the express server routes to the Gateway API backend
    gatewayExpress = new ExpressGateway(express(), gatewayApi);

    http.createServer(gatewayExpress);
  
### Authentication

By default http basic authentication is provided, but this will be abstracted
using an interface adapter pattern in the future.

Include the `Authorization` header in an HTTP request, with the value being
a Base64 encoding of the username joined to the password with a colon.

    Authorization Base64(username:password)

