//require dependencies
const express = require('express');
const bodyparser = require('body-parser');
const exphb = require('express-handlebars');
//remove later
const mysql = require('mysql');
const connection = require('./config/connection.js');

//create port
const PORT = process.env.PORT || 8080;
const app = express();

//leave space for other code




//start server
app.listen(PORT,function() {
    console.log("Server listening on: http://localhost: " + PORT);
});