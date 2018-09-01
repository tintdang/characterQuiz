var express = require("express");

var router = express.Router();

var characters = require('../data/characters.js')

router.post("/api/characters", function (req, res) {
    var response = req.body
    var characterScore = []
    var totalScores = []

    console.log(`The req body is: ${JSON.stringify(response)}`)

    for (var i = 0; i < characters.length; i++) {
        console.log(`${characters[i].name}'s scores are: `)
        for (var j = 0; j < characters[0].scores.length; j++) {
            console.log(`${characters[i].scores[j]} Minus user's scores are ${response.score[j]}`)
            var total = Math.abs(characters[i].scores[j] - parseInt(response.score[j]))
            console.log(total)
            characterScore.push(total)
            // subtract 
            console.log(`response is a string: ${typeof (response.score[j])}`)
        }
        console.log(characterScore)
        // sum all values in the array
        var sum = characterScore.reduce(function (add, currentValue) {
            return add + currentValue;
        })
        console.log(`sum of ${characters[i].name} is ${sum}`)

        //push to total score array
        totalScores.push(sum)
        //clear for next character's use
        characterScore = []
    }
    console.log(`This is the total scores: ${totalScores}`)
    // Find the lowest score with the index
    //Return the index with lowest score
    function getLowestIndex(array) {
        var low = array[0];
        var lowIndex = 0;

        for (i = 1; i < array.length; i++) { // start with index 1, because you need to
            // check against the last known smallest value
            if (array[i] < low) {
                low = array[i];
                lowIndex = i;
            } //IF ANY REASON THEY HAVE THE SAME SCORE JUST COIN FLIP IT AND MOVE ON
            else if (array[i] === low) {
                //if true, let the next array index be the lowest
                if (coinFlip()) {
                    low = array[i];
                    lowIndex = i;

                    function coinFlip() {
                        return (Math.floor(Math.random() * 2) == 0);
                    }
                } else {
                    // else keep the old array index
                    continue
                }
            }

        }
        console.log(low)
        return lowIndex;
    }

    var selectedChar = getLowestIndex(totalScores)

    // send character data to client

    console.log(`You are this index: ${selectedChar} which is ${characters[selectedChar].name}`)

    //Add the user's name into the object
    var data = characters[selectedChar];
    data.userName = response.name

    console.log(`Sending over ${JSON.stringify(data)}`)
    res.send(data)

})

module.exports = router