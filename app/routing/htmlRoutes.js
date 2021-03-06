var express = require("express");

var router = express.Router();
var path = require('path')

//main html route index
router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"))
});

router.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"))
})

// Catches any other routes and sends it over to the homepage
router.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"))
});

//Grabs my image file --don't need it due to express static functions-- 

// router.get("/images/001fgo.jpg", function (req, res) {
//     res.sendFile(path.join(__dirname, "../public/assets/images/001fgo.jpg"))
// })

// //Gets the image files
// router.get("/images/:imageName", function(req, res){

//     res.sendFile(path.join(__dirname, "../public/assets/images/" + req.params.imageName))
// })

module.exports = router