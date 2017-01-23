// Inside the burgers_controller.js file, import the following:
// Express
var express = require("express");

var app = express();

// import burgers.js
require("./models/burger.js")(app);



// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

// Create the router for the app, and export the router at the end of the file.
module.exports = function(app) {
    require("./config/connection.js")(app);
};
