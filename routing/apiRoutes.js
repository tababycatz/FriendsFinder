var friendsData = require("../data/friends");

module.exports = function(app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    })

    app.post("/api/friends", function(req, res){
        
        var friendMatch = {
            name: "",
            pic: "",
            totalDifference: 1000

        }
        
        var newInput = req.body;
        var friendAnswer = newInput.scores;
        var friendDifference = 0;

        for (let i = 0; i < friendsData.length; i++) {
            friendDifference = 0;
            for (let j = 0; j < friendAnswer.length; j++) {
                friendDifference += Math.abs(parseInt(friendAnswer[j]) - parseInt(friendsData[i].scores[j]));
            }
            if (friendDifference <= friendMatch.friendDifference) {
                
                friendMatch.name = friendsData[i].name;
                friendMatch.pic = friendsData[i].photo;
                
            }
        };

        friendsData.push(newInput);
        res.json({friendMatch});
    })
};