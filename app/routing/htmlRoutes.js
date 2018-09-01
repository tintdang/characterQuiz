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

//Grabs my image file
router.get("/images/001fgo.jpg", function (req, res) {
    res.sendFile(path.join(__dirname, "../assets/images/001fgo.jpg"))
})

router.get("/images/saber.jpeg", function (req, res) {
    res.sendFile(path.join(__dirname, "../assets/images/saber.jpeg"))
})

router.get("/images/Mordred.png", function (req, res) {
    res.sendFile(path.join(__dirname, "../assets/images/Mordred.png"))
})

module.exports = router