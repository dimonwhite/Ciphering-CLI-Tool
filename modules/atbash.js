const alphabet = require('./constants');

const reverseAlphabet = [...alphabet].reverse();

module.exports = (input) => {
    return input.split('').reduce((acc, char) => {
        let lowerCase = false;
        if (char === char.toLowerCase()) {
            lowerCase = true;
        }
        const index = alphabet.indexOf(char.toUpperCase());
        if (index < 0) {
            return acc + char;
        }

        const resultChar = lowerCase && reverseAlphabet[index] ? reverseAlphabet[index].toLowerCase() : reverseAlphabet[index];
        return acc + resultChar;
    }, '');
};