//import orm.js
const orm = require("./config/orm.js");

//create code to call the ORM functions using "burger-specific" input from ORM file
let burger = {
    all: function(cb) {
        orm.all("burgers", function(res){
            cb(res);
        });
    },
    create: function(cols, vals, cb) {
        orm.create("burgers", cols, vals, function(res) {
            cb(res);
        });
    },
    update: function(objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function(res){
            cb(res);
        });
    }
};

//export burger.js file
module.exports = burger;