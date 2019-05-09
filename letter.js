//does the guessed letter exist in the word?
function Letter(char) {
    this.char = char;
    this.guess = false;

    this.getLetter = function() {
        if(this.guess) {
            return this.char;
        } else {
            return "_";
        }
    };

    this.guessLetter = function(userGuess) {
        if(this.char === userGuess) {
            this.guess = true;
        }
    };
};


//make this file available for other .js files
module.exports = Letter;