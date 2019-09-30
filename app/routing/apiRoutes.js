var path = require("path");
var friendsData = require("../data/friends");
// console.log(friendsData);

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
        var friendDifference = 0;

        for (let i = 0; i < friendsData.length; i++) {
            totalDifference = 0;
            for (let j = 0; j < friendAnswer.length; j++) {
                diff += Math.abs(parseInt(newFriend[i].scores[j]) - parseInt(friendAnswer[j]));
            }
            if (friendDifference <= friendMatch.totalDifference) {
                totalDifference = diff;
                friendMatch.matchName = friendsData[i].name;
                friendMatch.matchPic = friendsData[i].photo;
                friendMatch.totalDifference = friendDifference;
            }
        };

        friendsData.push(newFriend);
        res.json({friendMatch});
    })
    // console.log(req.body);
};