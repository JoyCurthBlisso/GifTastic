$(document).ready(function()
{

	var nflTeams = ["Patriots", "Titans", "Eagles", "Broncos", "Saints", "Redskins", "Dolphins", "Giants", "Raiders", "Cardinals"];

	function renderButtons() {

		$("#nfl-view").empty();

		for (var i = 0; i < nflTeams.length; i++) {

			var nflTeamButton = $("<button>");
			nflTeamButton.addClass("nflTeamButton");
			nflTeamButton.attr("data-name", nflTeams[i]);
			nflTeamButton.text(nflTeams[i]);
			$("#nfl-view").append(nflTeamButton);

		}
	}

	function renderImages(nflTeam) {

	    var queryURL = "https://api.giphy.com/v1/gifs/search?q=nfl " + nflTeam + "&limit=10&api_key=wFYHRlJCFydymeonsPlddPn1IDy4ruFe";
	    $.ajax({
			url: queryURL,
			method: 'GET'
	    }).then(function(response) {
			
			$("#nflImages").html("");
			$.each(response.data, function(index, item){
				var img = $('<div>Rating: ' + item.rating + '</div><br/> <img src="' + item.images.original_still.url + '" data-animate="' + item.images.original.url + '" data-state="still"/>');
				img.addClass("gif");
				console.log(img);
				
				$("#nflImages").append(img);

			});
	  	});
	}

  	$("#add-nfl").on("click", function(event) {
	    event.preventDefault();
	    var nflTeam = $("#nfl-input").val().trim();

	    var teamsLower = nflTeams.map(function(item, index){
	    	return item.toLowerCase();
	    });

	   	if (teamsLower.indexOf(nflTeam.toLowerCase()) > -1){
	 
			alert("Enter another NFL team!");
		} else {
			nflTeams.push(nflTeam);
		    renderButtons();
		    renderImages(nflTeam);
		}

    });


  	$(document).on('click', ".nflTeamButton", function (event) {
  		event.preventDefault();
		 renderImages($(this).attr("data-name"));
		
    });


	renderButtons();
});

	  $(document).on("click", ".gif", function(img) {

      var state = $(this).attr("data-state");

      console.log(state);
      console.log(img);
     
      if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }
    });

