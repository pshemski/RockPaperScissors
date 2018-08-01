$(document).ready(function() {
		var userName = prompt("What's your name?", "Player");
		var rockPaperScissors = ['Rock', 'Paper', 'Scissors'];
		var yourScore = 0;
		var computersScore = 0;
	
		$("#your-score").val(yourScore);
		$("#computers-score").val(computersScore);
	
		var computersChoice = function() {
			var compChoice = rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)];
			$("#computers-choice").val(compChoice);
		}
		
		var checkIfWinner = function() {
			if (yourScore > 2 || computersScore > 2) {
				$('.images').hide();
				if (yourScore > 2) {
					$('#winner-div').append("<h2>The Winner Is: " + userName  + "</h2>");
					$('#winner-div').append("<input type='button'  class='btn btn-primary' value='Play Again' onClick='window.location.reload()'>");
				} else {
					$('#winner-div').append("<h2>The Winner Is: Computer</h2>");
					$('#winner-div').append("<input type='button' class='btn btn-primary' value='Play Again' onClick='window.location.reload()'>");
				}
			}
		}
		
		var updateYourScore = function() {
			yourScore ++;
			$("#your-score").val(yourScore);
		}
		
		var updateComputersScore = function() {
			computersScore ++;
			$("#computers-score").val(computersScore);
		}
	
		$("#rock").click(function() {
			$("#your-choice").val('Rock');
			computersChoice();
			if ($("#computers-choice").val() == 'Paper') {
				$("#round-winner").val('Computer')
				updateComputersScore();
			} else if ($("#computers-choice").val() == 'Scissors') {
				$("#round-winner").val(userName);
				updateYourScore();
			} else {
				$("#round-winner").val('Draw');
			}
			checkIfWinner();
		});
		$("#paper").click(function() {
			$("#your-choice").val('Paper');
			computersChoice();
			if ($("#computers-choice").val() == 'Scissors') {
				$("#round-winner").val('Computer')
				updateComputersScore();
			} else if ($("#computers-choice").val() == 'Rock') {
				$("#round-winner").val(userName);
				updateYourScore();
			} else {
				$("#round-winner").val('Draw');
			}
			checkIfWinner();
		});
		$("#scissors").click(function() {
			$("#your-choice").val('Scissors');
			computersChoice();
			if ($("#computers-choice").val() == 'Rock') {
				$("#round-winner").val('Computer')
				updateComputersScore();
			} else if ($("#computers-choice").val() == 'Paper') {
				$("#round-winner").val(userName);
				updateYourScore();
			} else {
				$("#round-winner").val('Draw');
			}
			checkIfWinner();
		});
	})