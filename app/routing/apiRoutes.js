var path = require("path");
var friendsData = require("../data/friends");
console.log(friendsData);

module.exports = function(app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    })

    app.post("/api/friends", function(req, res){
        
        var friendMatch = {
            matchName: "",
            matchPic: "",
            totalDifference: 1000

        }
        
        var newFriend = req.body;
        var friendAnswer = newFriend.scores;

        for (let i = 0; i < friendsData.length; i++) {
            var diff = 0;
            for (let j = 0; j < friendAnswer.length; j++) {
                diff += Math.abs(newFriend[i].scores[j] - friendAnswer[j]);
            }
            if (diff < totalDifference) {
                totalDifference = diff;
                matchName = friendsData[i].name;
                matchPic = friendsData[i].photo;
            }
        };

        friendsData.push(newFriend);
        res.json({friendMatch});
    })
};