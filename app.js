document.body.addEventListener('keydown', createLetters);
var alphabet =["a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"];
var emptystring="";
var supriseWords =["lambs","jerry"];
var array =[];
var wordToGuess = "";
function startGame(){
	var randomizedNumber = Math.floor(Math.random() * (2-0) +0)
	;
	console.log(randomizedNumber);
	console.log(supriseWords[randomizedNumber]);
	wordToGuess = supriseWords[randomizedNumber]
	document.getElementById('letters-container').innerHTML = alphabet;
	for (var i = 0; i < wordToGuess.length; i++) {
	document.getElementById('word-container').innerHTML += "_";
	}
}
function createLetters(e){
	console.log(e.key);
	for (var i = 0; i<alphabet.lenght;  i++) { 
		if(alphabet=== e.key){
			checkForWord(alphabet[i]);
		console.log('they match')
		}
	}
}



startGame();
createLetters();
function checkForWord(letters){
	for (var i = 0; i < wordToGuess.length; i++){
		if (wordToGuess[1] === letter) {
			chnageInnerHTML[i] = letter;
			doccument.getElementById('word-container').innerHTML = chnageInnerHTML;
			console.log ("This letter is in the word");
		}
	}
}