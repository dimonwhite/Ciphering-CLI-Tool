const { Transform } = require("stream");
const cipher = require('./caesar');
const atbash = require('./atbash');

const transformCaesar = (isDecode, isLast) => new Transform({
    transform(chunk, encoding, callback) {
        let result = cipher(chunk.toString(), isDecode ? 1 : -1);
        this.push(`${result}${isLast ? '\n' : ''}`);
        callback();
    }
});

const transformRot8 = (isDecode, isLast) => new Transform({
    transform(chunk, encoding, callback) {
        let result = cipher(chunk.toString(), isDecode ? 8 : -8);
        this.push(`${result}${isLast ? '\n' : ''}`);
        callback();
    }
});

const transformAtbash = (isLast) => new Transform({
    transform(chunk, encoding, callback) {
        let result = atbash(chunk.toString());
        this.push(`${result}${isLast ? '\n' : ''}`);
        callback();
    }
});

module.exports = { transformCaesar, transformRot8, transformAtbash };
