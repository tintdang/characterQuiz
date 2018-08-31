var express = require('express')
var bodyParser = require('body-parser')
var app = express();
var path = require('path')

//Set up port for heroku
var PORT = process.env.PORT || 8080;

//Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

//grab the characters json file
var characters = require('./app/data/characters.js')
// console.log(characters)

//main html route index
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

app.get("/images/saber.jpeg", function(req, res){
    res.sendFile(path.join(__dirname, "/app/assets/images/saber.jpeg"))
})

app.post("/result", function(req, res){
    var response = req.body
    console.log(response)
    for(var i = 0; i < characters.length; i++){
        console.log(characters[i].scores[0])
    }
    // for(var i = 0; i < response.score.length; i++){
    //     // run the comparisions
    //     console.log(response.score[i])

    // }
    res.send(req.body)

})


//main json routes

//listener
app.listen(PORT, function () {
    console.log(`Listening on port: ${PORT}`)
})
