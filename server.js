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

app.use(express.static("public"));

//bodyparser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//leave space for other code

//test mysql request


//test data


//test get request
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.get("/", function (req, res) {
    connection.query('SELECT * FROM burgers', function (err, result) {
        if (err) throw err;
        res.render("index");
        for (let i = 0; i < result.length; i++) {
            console.log(result[i].burger_name);
            let name = result[i].burger_name;
            return name
        }    
    })
});

//end remove

//start server
app.listen(PORT, function () {
    console.log("Server listening on: http://localhost: " + PORT);
});