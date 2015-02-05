
	// Keeping track of who's turn it is
	// A function is a bit of code that is going to do one particular thing
	// A variable is a way for a computer to keep track of information
	function startGame(){
		for (var i=1; i<=9; i=i+1){
			clearBox(i);
		}
		document.turn = "X";
		if (Math.random()<0.5) {
			document.turn = "O";
		}
		document.winner = null;
	// This uses the "setMessage" function below in order to update the message with the contents from this function
		setMessage(document.turn + " gets to start.");
	}
	// ============================================================
	// Create a function to set the message
	// this will communicate wit the message id in the div and reference the location 
	function setMessage(msg) {
		document.getElementById("message").innerText = msg;
	}

// ============================================================	
	// Use nextMove function in order to click squares, referencing the div with onlick below in the td element
	function nextMove(square){
		if (document.winner != null) {
			setMessage(document.winner + " already won the game");
		}
		else if (square.innerText =="") {
			square.innerText = document.turn;
			switchTurn();
		} else {
			setMessage("That square is taken!")
		}
	}
// ============================================================
	// This function will be used to switch the turn of the user
	function switchTurn(){
		if (checkForWinner(document.turn)){
			setMessage("Congratulations " + document.turn +"! IronMan wins!");
			document.winner = document.turn;
		} else if (document.turn == "X") {
			document.turn = "O";
			setMessage("It's " + document.turn + "'s turn");
		} else {
			document.turn = "X";
			setMessage("It's " + document.turn + "'s turn");
		}
	
	}
// ============================================================
	function checkForWinner(move) {
		var result = false;
		if (checkRow(1,2,3, move) || 
			checkRow(4,5,6, move) || 
			checkRow(7,8,9, move) ||
			checkRow(1,4,7, move) ||
			checkRow(2,5,8, move) ||
			checkRow(3,6,9, move) ||
			checkRow(1,5,9, move) ||
			checkRow(3,5,7, move)) {

			result = true;
		}
		return result;
	}
// ============================================================	

	function checkRow(a,b,c, move) {
		var result = false;
		if (getBox(a) ==move && getBox(b) ==move && getBox(c) == move){
		result = true;
		}
		return result;
	}
// ============================================================

	function getBox(number) {
		return document.getElementById("s" + number).innerText;
	}
// ============================================================
	function clearBox(number) {
		document.getElementById("s" + number).innerText = "";
}





