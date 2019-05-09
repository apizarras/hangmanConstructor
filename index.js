const inquirer = require("inquirer");
const Word = require("./Word");
const Deserts = require("./Deserts");
numMisses = 0;
let randomWord;

//initialize game function (reset the variables and set randomWord)
//prompt user for their guess, include logic for remaining guesses
//.then .displayLetters
//randomWord will equal nextWord();
//constructor function will pass in randomWord


//randomly choose a word from the desert array
nextWord();

function nextWord() {
    this.missesRemaining = numMisses;
    var newDesert = Deserts[Math.floor(Math.random()*Deserts.length)];
    //turn word into an array of letters
    this.currentDesert = new Word(newDesert);
    console.log("this is current desert: "+currentDesert);
    console.log(newDesert);
    console.log("\nDesert to guess is " + this.currentDesert.toString()+"\n");
};

// this.guess = function() {
//     return 
    inquirer.prompt([
        {
            type: "input",
            message: "Type a letter to make a guess.",
            name: "guess",
        }
    ]).then(function(letter) {
        var correctGuess = thisObject.currentTeam.guessLetter(letter.choice);
        if(correctGuess) {
            console.log("\nCORRECT!\n");
        } else {
            console.log("\nINCORRECT!\n");
            //account for reduction in number of guesses
        }
    })
// }
