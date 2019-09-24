var path = require("path");
var friendsData = require("../data/friends")

module.exports = function(app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    })

    app.post("/api/friends", function(req, res){
        friendsData.push(req.body);
        res.json(true);

        var newFriend = req.body;
        var friendAnswer = newFriend.scores;
        var matchName = '';
        var matchPic = '';
        var totalDifference = 1000;

        for (let i = 0; i < friendsData.length; i++) {
            var diff = 0;
            for (let j = 0; j < friendAnswer.length; j++) {
                diff += Math.abs(friends[i].scores[j] - userResponses[j]);
            }
            if (diff < totalDifference) {
                totalDifference = diff;
                matchName = friendsData[i].name;
                matchPic = friendsData[i].photo;
            }
        };

        friendsData.push(newFriend);
        res.json({status: 'OK', matchName: matchName, matchPic: matchPic});
    })
};