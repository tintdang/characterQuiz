var express = require('express')
var bodyParser = require('body-parser')
var app = express();


//inport routes
var apiRoutes = require("./app/routing/apiRoutes")
var htmlRoutes = require("./app/routing/htmlRoutes")

//Set up port for heroku
var PORT = process.env.PORT || 8080;

app.use(express.static("public"));

//Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Import Routes
app.use(apiRoutes)
app.use(htmlRoutes)

//listener
app.listen(PORT, function () {
    console.log(`Listening on port: ${PORT}`)
})
