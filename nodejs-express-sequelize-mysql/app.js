const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");

// import the router file
const tutorialRoutes = require('./app/routes/tutorial.routes');

// init the express app
const app = express();

var corsOptions = {
    origin: "http://localhost:8080"
};

app.use(cors());

app.use(express.json());

// use the routes
app.use('/api/tutorials', tutorialRoutes);

module.exports = app;