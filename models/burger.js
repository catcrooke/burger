module.exports = function(app) {
    require("./config/connection.js")(app);
};

// Also inside burger.js, create the code that will call the ORM or query functions using burger
// specific input for the ORM or query functions.

// set a variable newBurger equal to an empty array that will hold the burgers added on click
var newBurger = [];

// function to add a burger to the newBurger array

// var addBurger = function() {
// 	
// 	connection.query("INSERT INTO burgers SET ? WHERE ?"
// };
