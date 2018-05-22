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
        console.log(hbsObject.burgers[0].burger_name);
        res.render("index", hbsObject);
    });
});

//POST request route
router.post("/api/burgers", function (req, res) {
    burger.create([
        "burger_name", "devoured"
    ], [
            req.body.burger_name, req.body.devoured
        ], function (result) {
            res.json({ id: result.indertId })
        });
});

//export router
module.exports = router;