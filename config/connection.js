const mysql = require('mysql');

//connect to mysql

//add if else to deploy on heroku
const connection;
if (process.env.JAWSDB_URL) {
    //Heroku deployment
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        port: 3306,
        host: 'localhost',
        user: 'root',
        password: 'Kafka#678',
        database: 'burgers_db'
    });
};

connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

//export connaction to ORM
module.exports = connection;
