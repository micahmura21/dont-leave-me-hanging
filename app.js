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
startGame();