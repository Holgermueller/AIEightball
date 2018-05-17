//require MySQL connection
const connection = require('/Users/holgermueller/Desktop/Eat_a_burger/config/connection.js');
//console.log(connection);

//create helper funcitons for SQL syntax
//i have 2 values to enter: burger_name and devoured
function printQuestionMarks(num) {
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
};

//helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    let arr = [];
    for ( let key in ob) {
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}

//create three methods to execute MySQL commands:
let orm = {
    //selectAll()
    all: function(tableInput, cb) {
        const queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    //insertOne()
    create: function(table, cols, vals, cb) {
        const queryString = "INSERT INTO " + table;
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";
        console.log(queryString);
        connection.query(queryString, vals(function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        }));
    }
}






//updateOne()


//export ORM
module.exports = orm;