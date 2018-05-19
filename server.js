//require dependencies
const express = require('express');
const bodyparser = require('body-parser');
const exphbs = require('express-handlebars');

//remove later
const mysql = require('mysql');
const connection = require('./config/connection.js');

//create port
const PORT = process.env.PORT || 8080;
const app = express();

//leave space for other code

//test mysql request
// connection.query('SELECT * FROM burgers', function(err, res) {
//     if (err) throw err;
//     console.log(res);
// })

//test data
let burgers = [
    {
        burger: "cheeseburger"
    },
    {
        burger: "California Burger"
    },
    {
        burger: "bacon cheeseburger"
    }
];

//test get request
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


    app.get("/", function (req, res) {
      res.render("index", {index: burgers});
    });

//end remove

//start server
app.listen(PORT, function () {
    console.log("Server listening on: http://localhost: " + PORT);
});