//imports:
//1-express
const express = require('express');
//create router
const router = express.Router();
//2-burger.js models
const burger = require('../models/burger.js');

//create routes for MySQL logic
//GET request route
router.get("/", function (req, res) {
    burger.all(function (data) {
        const hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);  
    });
});

//POST request route



//export router
module.exports = router;