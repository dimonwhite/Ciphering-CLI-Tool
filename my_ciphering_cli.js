const getArgs = require('./tools');
const { transformCaesar, transformRot8, transformAtbash } = require('./modules/ciphers');
const { createReadStream, createWriteStream, readFileSync } = require('fs');

if (process.argv.length % 2 === 1) {
    console.error('Not all arguments contain values');
    process.exit(1);
}

const args = getArgs();
const config = args.config;

if (!config || !/^((([CR][10]-)|(A-)){0,})+(([CR][10])|(A))$/g.test(config)) {
    console.error('Config is not correct or is missing');
    process.exit(2);
}

if (args.output) {
    try {
        readFileSync(args.output);
    } catch (err) {
        console.error('Output file does not exist');
        process.exit(6);
    }
}

const readStream = args.input ? createReadStream(args.input) : process.stdin;
const writeStream = args.output ? createWriteStream(args.output, { flags: 'a' }) : process.stdout;

readStream.on('error', () => {
    console.error('Error reading file');
    process.exit(4);
});

writeStream.on('error', () => {
    console.error('File write error');
    process.exit(5);
});

let resultStream = readStream;

config.split('-').forEach((command, index, array) => {
    switch (command[0]) {
        case 'C':
            resultStream = resultStream.pipe(transformCaesar(command[1] === '1', index === array.length - 1));
            break;
        case 'R':
            resultStream = resultStream.pipe(transformRot8(command[1] === '1', index === array.length - 1));
            break;
        case 'A':
            resultStream = resultStream.pipe(transformAtbash(index === array.length - 1));
            break;
    }
});

resultStream.pipe(writeStream);