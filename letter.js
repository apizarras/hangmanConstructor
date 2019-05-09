//does the guessed letter exists in the word?
function Letter(char) {
    this.char = char;
    /[a-z]/i.test(char) ? this.visible = false : this.visible = true;
    console.log("is this letter visible: "+char.visible)
};


//make this file available for other .js files
module.exports = Letter;