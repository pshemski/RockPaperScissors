$(document).ready(function() {
		var userName = prompt("What's your name?");
		$("#rock").click(function() {
			$("#your-choice").val('Rock');
		});
		$("#paper").click(function() {
			$("#your-choice").val('Paper');
		});
		$("#scissors").click(function() {
			$("#your-choice").val('Scissors');
		});
	})