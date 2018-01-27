$(document).ready(function()
{
	// Before you can make any part of our site work, you need to create an array of strings, each one related to a topic that interests you. 
	// Save it to a variable called topics.

	//Check if it's one of the 32
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

	    console.log(nflTeam);
	    var queryURL = "https://api.giphy.com/v1/gifs/search?q=nfl " + nflTeam + "&limit=10&api_key=wFYHRlJCFydymeonsPlddPn1IDy4ruFe";
	    $.ajax({
			url: queryURL,
			method: 'GET'
	    }).then(function(response) {
	     	console.log(response);
			
			$("#nflImages").html("");
			$.each(response.data, function(index, item){
				var img = $('<div>Rating: ' + item.rating + '</div><br/><img src="' + item.images.original.url + '" />');
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
	    // if (nflTeam === a value in the array)
	   	if (teamsLower.indexOf(nflTeam.toLowerCase()) > -1){
	   	    //Show error already has that team
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
// make it so you can click to move and click to stop

// q

// var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5");
// xhr.done(function(data) { console.log("success got data", data); });

//pass input value and return 10 images

//switch the protocol in the query URL from http to https
// or the app may not work properly when deployed to Github Pages.

//});


// Your app should take the topics in this array and create buttons in your HTML.

// Try using a loop that appends a button for each string in the array.

// When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.
// When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.

// Under every gif, display its rating (PG, G, so on).

// This data is provided by the GIPHY API.
// Only once you get images displaying with button presses should you move on to the next step.


// Add a form to your page takes the value from a user input box and adds it into your topics array. Then make a function call that takes each topic in the array remakes the buttons on the page.
// Deploy your assignment to Github Pages.
// Rejoice! You just made something really cool.





// Minimum Requirements

// Attempt to complete homework assignment as described in instructions. If unable to complete certain portions, please pseudocode these portions to describe what remains to be completed.




// Create a README.md

// Add a README.md to your repository describing the project. Here are some resources for creating your README.md. Here are some resources to help you along the way:


// About READMEs
// Mastering Markdown
