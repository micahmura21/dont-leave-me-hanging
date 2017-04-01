document.body.addEventListener('keydown', createLetters);

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var word = ["dog", "cat"];
var wordToGuess = "";
var aboutToGuess = "";
var changeInnerHTML = [];

function startGame(){
	for (var i = 0; i < letters.length; i++){
		document.getElementById('letters-container').innerHTML += letters[i];
	}
	var randomize = Math.floor(Math.random() * word.length);
	wordToGuess = word[randomize];
	for (var i = 0; i < wordToGuess.length; i++){
		document.getElementById('word-container').innerHTML += "-";
	}
	changeInnerHTML.push(document.getElementById('word-container').innerHTML);
}
startGame();

function createLetters(e){
	console.log(e.key);
	var index = 0;
	for (var i = 0; i < letters.length; i++){
		if (letters[i] === e.key){
			checkForWord(letters[i]);
			document.getElementById('checked-letters').innerHTML += letters[i];
			index = i;
			letters.splice(index, 1);
			document.getElementById('letters-container').innerHTML = letters;
		}
	}	
}

function checkForWord(letter){
	console.log(letter);
	console.log(wordToGuess);
	for (var i = 0; i < wordToGuess.length; i++){
		if (wordToGuess[i] === letter){
			changeInnerHTML[i] = letter;
			document.getElementById('word-container').innerHTML = changeInnerHTML;
		}
	}
}
