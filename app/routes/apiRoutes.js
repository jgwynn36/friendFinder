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

        let matchName = '';
        let matchImage = "";
        const totalDiff = 1000;

        for (let i = 0; i < friends.length; i++) {
            let diff = 0;
            for (let j = 0; j < userResponses.length; j++) {
                diff += Math.abs(friends[i].scores[j] - userResponses[j]);
            }
            if (diff < totalDiff) {
                totalDiff = diff;
                matchName = friends[i].name;
                matchImage = friends[i].photo;
            }
        }
        friends.push(userInput);

        res.json({
            status: "Ok",
            matchName: matchName,
            matchImage: matchImage
        });
    });
};