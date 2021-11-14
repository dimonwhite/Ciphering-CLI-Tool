const alphabet = require('./constants');

module.exports = (input, stepCount) => {
    const step = stepCount % 26;
    return input.split('').reduce((acc, char) => {
        let lowerCase = false;
        if (char === char.toLowerCase()) {
            lowerCase = true;
        }
        const index = alphabet.indexOf(char.toUpperCase());
        if (index < 0) {
            return acc + char;
        }

        let resultIndex = index + step;
        if (resultIndex > alphabet.length - 1) {
            resultIndex -= alphabet.length;
        }
        if (resultIndex < 0) {
            resultIndex += alphabet.length;
        }
        const resultChar = lowerCase && alphabet[resultIndex] ? alphabet[resultIndex].toLowerCase() : alphabet[resultIndex];
        return acc + resultChar;
    }, '');
};