$("#submitBtn").on("click", function() {
    event.preventDefault();

        var newFriend = {
        name: $("#name").val(),
        photo: $("#photo").val(),
        scores: [
            $("#q1").val(),
            $("#q2").val(),
            $("#q3").val(),
            $("#q4").val(),
            $("#q5").val(),
            $("#q6").val(),
            $("#q7").val(),
            $("#q8").val(),
            $("#q9").val(),
            $("#q10").val()
                ]
    };

$.post("/api/friends", newFriend, function(data) {
  
           
            $("#matchName").text(data.name);
            $("#matchPic").attr("src", data.photo);
  
            $("#myModal").modal("toggle");
    
});
});
