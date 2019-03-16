const path = require("path");
const friends = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        let userInput = req.body;
        console.log("The user Input: " + userInput);

        let userScore = userInput.scores;
        console.log("Score " + userScore);

    });

};