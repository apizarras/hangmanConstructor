const Letter = require("./Letter");

function Word(word) {
    // this.letters = word.split("").map((char) => {
    //     return new letter(char);
    // });
    this.displayLetters = function() {
        const letterArray = [];
        for(i=0;i<word.length;i++){
            letterArray.push(new Letter(word[i]))
        }
    }
}

module.exports = Word;