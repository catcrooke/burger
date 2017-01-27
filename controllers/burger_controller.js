                                                                                                                                   // require express
                                                                                                                                   var express = require("express");

                                                                                                                                   // middleware passes
                                                                                                                                   var router = express.Router();

                                                                                                                                   // Import the model (cat.js) to use its database functions and set it equal to a variable
                                                                                                                                   var burger = require("./models/burger.js")(app);

                                                                                                                                   // ROUTERs- the code below points to the server with route files which are a map of how to respond
                                                                                                                                   // when users visit/request data from URLS

                                                                                                                                   // get requests are used to read a representation of a resource
                                                                                                                                   router.get("/", function(req, res) {
                                                                                                                                       cat.all(function(data) {
                                                                                                                                           var hbsObject = {
                                                                                                                                               burger: data
                                                                                                                                           };
                                                                                                                                           console.log(hbsObject);
                                                                                                                                           res.render("index", hbsObject);
                                                                                                                                       });
                                                                                                                                   });

                                                                                                                                   // post is used to create new resources, or in this example, create a new burger
                                                                                                                                   router.post("/", function(req, res) {
                                                                                                                                       burger.create([
                                                                                                                                           "burger_name", "devoured", "date"
                                                                                                                                       ], [
                                                                                                                                           req.body.burger_name, req.body.devoured, req.body.date
                                                                                                                                       ], function() {
                                                                                                                                           res.redirect("/");
                                                                                                                                       });
                                                                                                                                   });

                                                                                                                                   // put is used to update resources, in this instance, whether a burger has been devoured or not
                                                                                                                                   router.put("/:id", function(req, res) {
                                                                                                                                       var condition = "id = " + req.params.id;

                                                                                                                                       console.log("condition", condition);

                                                                                                                                       burger.update({
                                                                                                                                           devoured: req.body.devoured
                                                                                                                                       }, condition, function() {
                                                                                                                                           res.redirect("/");
                                                                                                                                       });
                                                                                                                                   });

                                                                                                                                   // Export routes for server.js to use.
                                                                                                                                   module.exports = router;
