const express = require('express');

const tutorials = require("../controllers/tutorial.controller.js");

var router = require("express").Router();

router.get("/welcome", (req, res) => {
    res.json({ message: "Welcome to Angular application." });
});

//create new tutorial
router.post("/", tutorials.create);

//Retrieve all Tutorials
router.get("/", tutorials.findAll);

//Retrieve all published Tutorials
router.get("/published", tutorials.findAllPublished);

//Retrieve a single Tutorial with id
router.get("/:id", tutorials.findOne);

//Update a Tutorial with id
router.put("/:id", tutorials.update);

//Delete a Tutorial with id
router.delete("/:id", tutorials.delete);

//Create a new Tutorial
router.delete("/", tutorials.deleteAll);

//app.use('/api/tutorials', router);

module.exports = router;