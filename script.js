var wins = 0;
var losses = 0;
var guessLeft = 9;
var guessSoFar = [];
var computerChoices = ["a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"];
var computerGuess = '';

function computerSelectRandomLetter() {
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

function updateScores() {
    document.querySelector("wins").innerHTML = wins;
    document.querySelector("losses").innerHTML = losses;
    document.querySelector("guessLeft").innerHTML = guessLeft;
    document.querySelector("guessSoFar").innerHTML = guessSoFar;
}

function resetScore() {
    guessLeft = 9;
    guessSoFar = [];
}

computerSelectRandomLetter();
updateScores();
console.log(computerGuess);

document.onKeyUp = function (event) {
    guessLeft--;
    var userGuess = event.key.toLowerCase();
    guessSoFar.push(userGuess);
    updateScores();

    if (userGuess === computerGuess) {
        wins++;
        updateScores();
        resetScore();
        computerSelectRandomLetter();

    }

    if (guessLeft === 0) {
        losses++;
        updateScores();
        resetScore();
        computerSelectRandomLetter();
    }    
}


