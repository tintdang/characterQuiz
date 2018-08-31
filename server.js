var express = require('express')
var bodyParser = require('body-parser')
var app = express();
var path = require('path')

//Set up port for heroku
var PORT = process.env.PORT || 8080;

//Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

//main route index
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/app/public/home.html"))
});

app.get("/survey", function(req, res){
    res.sendFile(path.join(__dirname, "/app/public/survey.html"))
})

//Grabs my image file
app.get("/images/001fgo.jpg", function(req, res){
    res.sendFile(path.join(__dirname, "/app/assets/images/001fgo.jpg"))
})

app.post("/result", function(req, res){
    console.log(req.body)
    res.send(req.body)

})



app.listen(PORT, function () {
    console.log(`Listening on port: ${PORT}`)
})