const letter = require("./Letter");

function Word(word) {
    this.letters = word.split("").map((char) => {
        return new letter(char);
    });
}

module.exports = Word;