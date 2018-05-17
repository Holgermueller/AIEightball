const mysql = require('mysql');

//connect to mysql
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Kafka#678',
    database: 'burgers_db'
});

connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + connection.threadId);
});

//export connaction to ORM
module.exports = connection;