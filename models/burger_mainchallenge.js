// how you manipulate the data goes into model

var connection = require("./config/connection.js");

// create a model that represents our burger table/model
// update a burger
// delete a burger
// get some burger database
var burger = {
    getAllBurgers: function() { /* how to get all burgers ?? */ },
    addBurger: function() { /* how to add a burger */ },
    devourBurger: function() { /* how to devour a burger*/ }
};

module.exports = burger;
