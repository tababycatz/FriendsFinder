$('modal-trigger').leanModal();

$("#submit").on("click", function (event) {
		if ( $('#name').val() == null || $('#photo').val() == null ) {
			alert("Oops! You're missing something, please fill out the form.");
			return false;
		};

		for (var i = 0; i < 10; i++) {
			if ( $("input:radio[name=question"+i+"]:checked").val() == null ) {
				alert("Please fill out all questions!");
				return false;
			};
		};
    
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

    $.post("/api/friends", newFriend, function (data) {
        
        $("#friend-match-name").text(data.matchName);
        $("#friend-match-pic").attr("src", data.matchPic);
        
        $("#results").modal("toggle");
        
    });  
});  

// Storing our current URL in a variable.
var currentURL = window.location.origin;

// Making an AJAX post request. The server calculates the match and sends back the info in the data object.
$.post(currentURL + '/api/survey', person).done(function(data){

    // Opens our modal.
    $('#modal1').openModal();

    // Populate out modal with information about the match.
    $('#modalArea').empty()
    var picture = '<img class="circle" src="'+data.image+'"">';
    $('#modalArea').append("<h5>" + data.name + " !</h5>")
    $('#modalArea').append(picture)

});