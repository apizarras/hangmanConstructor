//does the guessed letter exists in the word?
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

    // /[a-z]/i.test(char) ? this.visible = false : this.visible = true;
    // console.log("is this letter visible: "+char.visible)
};


//make this file available for other .js files
module.exports = Letter;