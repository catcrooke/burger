// require express
var express = require("express");

// middleware passes
var router = express.Router();

// Import the model (burger.js) to use its database functions and set it equal to a variable
var burgers = require("../models/burger.js");

// ROUTERs- the code below points to the server with route files which are a map of how to respond
// when users visit/request data from URLS
router.use('/', function(req, res, next) {
    console.log(req.url);
    next();
});
// put is used to update resources, in this instance, whether a burger has been devoured or not
router.get("/update", function(req, res, next) {
    var params = req.params;
    console.log(params);
    next();
    // console.log("condition");
    // console.log(req.body);
    // burgers.update([
    //     "burger_name", "devoured"
    // ], [
    //     req.body.burger_name,
    //     req.body.devoured
    // ], condition, function() {
    //     res.redirect("/");
    // });
});
// get requests are used to read a representation of a resource
router.get("/", function(req, res) {
    burgers.all(function(data) {
        var hbsObject = {
            burger: data
        };
        // console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

// post is used to create new resources, or in this example, create a new burger
router.post("/", function(req, res) {
    console.log(req.body);
    burgers.create([

        "burger_name", "devoured"
    ], [
        req.body.burger_name, false
    ], function() {
        res.redirect("/");
    });
});


// Export routes for server.js to use.
module.exports = router;
