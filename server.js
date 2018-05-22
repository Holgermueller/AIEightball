//require dependencies
const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

//remove later
const mysql = require('mysql');
const connection = require('./config/connection.js');

//create port
const PORT = process.env.PORT || 8080;
const app = express();

//use public folder
app.use(express.static("public"));

//use bodyparser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//routes
const routes = require("./controllers/burgers_controllers.js")
app.use(routes);

app.engine("handlebars", exphbs({ defaultLayout: "main" }));

app.set("view engine", "handlebars");

//start server
app.listen(PORT, function () {
    console.log("Server listening on: http://localhost: " + PORT);
});