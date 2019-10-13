$("#submitBtn").on("click", function() {
    
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


    $.post('/api/friends', newFriend).done(function(data) {
        $('#myModal').openModal();
        $('#modalBody').append("<h5>" + data.name)
        $('#modalBody').append(data.photo);
        
    });  

    console.log(newFriend)
});


