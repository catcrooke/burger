var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exprhbs = require('express-handlebars');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));



// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require("./models/burger.js")(app);


// "Add" a new tool to our tool box. This says that "handlebars"
// is a new tool that we can use and sets the name of the
// main layout
app.engine('handlebars', exprhbs({ defaultLayout: 'main' }));

// "choose" the tool from the tool box 
app.set('view engine', 'handlebars');

// Define a "route" that will be able to take requests

// app.get('/', function (req, res) {
// 	res.render('', {appointments: appointmentsList});
// });

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
