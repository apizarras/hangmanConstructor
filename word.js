const Letter = require("./Letter");

function Word(word) {
    console.log(`word has run`);
    this.displayLetters = function() {
        const letterArray = [];
        for(i=0;i<word.length;i++){
            letterArray.push(new Letter(word[i]));
        };
    };
};

module.exports = Word;