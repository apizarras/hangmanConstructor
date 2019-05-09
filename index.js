const inquirer = require("inquirer");
const Word = require("./Word");
const Deserts = require("./Deserts");
let numMisses = 0;
let randomWord;
let wins = 0;
let losses = 0;
let guesses = 10;

init();
//initialize game function (reset the variables and set randomWord)
function init() {
    let numMisses = 0;
    let wins = 0;
    let losses = 0;
    let guesses = 10;
    nextWord();
    console.log("\nWelcome to the hangman game themed around deserts!\n");
    console.log(`You have ${guesses} guesses left.`);
    Word();
};

//randomWord will equal nextWord();
function nextWord() {
    let randomWord = Deserts[Math.floor(Math.random()*Deserts.length)];
    console.log("this is the new desert word: "+ randomWord);
};
//prompt user for their guess, include logic for remaining guesses
inquirer.prompt([
    {
        type: "input",
        message: "Type a letter to make a guess.",
        name: "guess",
    }
]).then(function(letterGuessed) {
    guesses--;
    console.log(`You have ${guesses} left`);
    // if(letterGuessed)
    
    })
        //account for reduction in number of guesses

//.then .displayLetters

//constructor function will pass in randomWord