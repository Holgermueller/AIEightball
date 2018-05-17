//require dependencies
require('dotenv').config();
const express = require('express');
const bodyparser = require('body-parser');
const mysql = require('mysql');
const exphb = require('express-handlebars');

//create port
const PORT = process.env.PORT || 8080;
const app = express();

//leave space for other code

//connect to mysql
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Kafka#678',
  database : 'burgers_db'
});
 
connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('connected as id ' + connection.threadId);
  });


//start server
app.listen(PORT,function() {
    console.log("Server listening on: http://localhost: " + PORT);
});