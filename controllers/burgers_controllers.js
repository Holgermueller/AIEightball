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
        let hbsObject = {
            burgers: data
        };
        //console.log(hbsObject.burgers[0].burger_name);
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
            res.json({ burger_id: result.insertId })
        });
});

//PUT request route
router.put("/api/burgers/:burger_id", function(req, res){
    let condition = "burger_id = " + req.params.burger_id;

    console.log("condition", condition);

    burger.update({
        devoured: req.body.devoured
    }, condition, function(result){
        if (result.changedRows == 0){
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

//DELETE route
router.delete("/api/burgers/:burger_id", function(req, res) {
    let condition = "id = " + req.params.burger_id;
    burger.delete(condition, function(result){
        if (result.affectedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

//export router
module.exports = router;