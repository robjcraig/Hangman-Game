// VARIABLES


var words = ['robber','cowboy','outlaw','western','justice'];

var answerWord = words[Math.floor(Math.random() * words.length)];

var correctGuesses = 0;

var incorrectGuesses = 7;

var remainingLetters = answerWord.length;

var guess = [];

// FUNCTIONS


 for (var i = 0; i < words.length; i++) {

    guess[i] = " _ ";

  }

  var remainingLetters = words.length;

document.onkeyup = function(event) {


    var letterInput = event.key;
    
    guess.push(letterInput);
    
    document.getElementById("underline1").innerHTML = "Your Current Guess: " + letterInput;
    
    document.getElementById("underline2").innerHTML = "Remaining Guesses: " + incorrectGuesses;

    document.getElementById("guesses").innerHTML = guess;




function resetButton () {
    location.reload();
}


        
    			if  (letterInput.includes(answerWord) === false) {
        			incorrectGuesses = incorrectGuesses - 1;
        			} 

                else if (letterInput.includes(answerWord) === true) {
    
    		    for (j = 0; j < answerWord.length; j++) {
            
            	if (answerWord[j] === letterInput) {
                words[j] = letterInput;
                remainingLetters = remainingLetters - 1;
                
                
                if  (remainingLetters === 0) {
                    document.getElementById("underline3").innerHTML = "Congrats, You Win! Play Again!";
                    correctGuesses = correctGuesses + 1; 
                    document.getElementById("underline4").innerHTML = "Wins: " + incorrectGuesses;
                }

                // else if(incorrectGuesses <= 0) {
                    // document.getElementById("sorryPrompt").innerHTML = "Sorry! Try Again!";
                }
            }
        }
    }




// var word = "";
// var numberOfInputs = 0;
// var totalIncorrectInputs = 0;

// // add a function that generates a value from the answerKey

// function chooseWord() {


// }

// function answerKey() {
// 	// numberOfInputs = Math.floor(Math.random()*words.length
// 	word = words[numberOfInputs];
// }

// function guessLetter() {
// 	var correctKeys = 0;
// 	var displayGuess = userInputGuess.getElementById("userInputGuess");
// 	var footer 
// } 


// var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]



// for (var i = alphabet.length [i] = 0; i <= alphabet.length; i++) {

// console.log(words[2]);

// }

// // // give JavaScript a function to execute when onkeyup event fires.

// document.onkeyup = function(event) {
// 		userInputGuess.textContent = event.key;
// 		var userInputGuess = document.getElementById(this.userInputGuess);
// 	}

// var userInputGuess = prompt("Press a letter to guess.")

// console.log(userInputGuess);

// var wordBank = [
// ["R", "O", "B", "B", "E", "R"],
//   ["C","O","W","B","O","Y"],
//   ["O","U","T","L","A","W"],
//   ["G","U","I","L","T","Y"],
 
// ]
// var random = Math.floor((Math.random()*(wordBank.length-1))); 

// var answerWord = wordBank[random]; // the word to guess will be chosen from the array above
// var answerWordKey = (answerWord.length);
// var inputGuess = 0;

// // every letter in the word is symbolized by an underscore in the guessfield
// for (var i = 0; i < answerWordKey.length; i++){
// 	answerWordKey[i] = "_ ";
// }

// // prints the guessfield
// function printAnswerWordKey(){
// 	for (var i = 0; i < ratewort.length; i++){
// 	var guessed = document.getElementById("Guessed");
// 	var guessedKey = document.createTextNode(answerWordKey[i]);
// 	guessed.appendChild(guessedKey);
// 	}
// }

// //checks if the the letter provided by the user matches one or more of the letters in the word
// var letterCheck = function(){
// 	var a = document.letterchecker; 
// 	var d = a.elements["ratezeichen"]; 
// 	var zeichen = b.value; // the letter provided by the user
// 	zeichen = zeichen.toUpperCase();
// 	for (var i = 0; i < lsgwort.length; i++){
// 		if(lsgwort[i] === zeichen){
// 			ratewort[i] = zeichen + " ";
// 			var treffer = true;
// 		}
// 	b.value = "";
// 	}
	
// 	//deletes the guessfield and replaces it with the new one
// 	var ratefeld = document.getElementById("ratefeld");
// 	ratefeld.innerHTML=""; 
// 	printRatewort();
	
// 	// if a guessed letter is not in the word, the letter will be put on the "wrong letters"-list and hangman grows
// 	if(!treffer){
// 		var gerateneBuchstaben = document.getElementById("gerateneBuchstaben");
// 		var buchstabe = document.createTextNode(" " + zeichen);
// 		gerateneBuchstaben.appendChild(buchstabe); 
// 		fehler++;
// 		var hangman = document.getElementById("hangman");
//     hangman.src = "http://www.writteninpencil.de/Projekte/Hangman/hangman" + fehler + ".png";
// 	}
	
// 	//checks if all letters have been found
// 	var fertig = true;
// 	for (var i = 0; i < ratewort.length; i++){
// 		if(ratewort[i] === "_ "){
// 			fertig = false;
// 		}
// 	}
// 	if(fertig){
// 		window.alert("You win!");
// 	}
	
// 	//once you got six wrong letters, you lose
// 	if(fehler === 6){
// 		window.alert("Uh...I guess you're dead now.");
// 	}
// }

// function init(){
// 	printRatewort();
// }

// window.onload = init;