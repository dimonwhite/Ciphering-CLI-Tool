const getKeyName = (argumentKey) => {
    switch(argumentKey) {
        case '-c':
        case '--config':
            return 'config';
        case '-i':
        case '--input':
            return 'input';
        case '-o':
        case '--output':
            return 'output';
    }
}

const getArgs = () => {
    const args = {};
    const argv = process.argv.slice(2);

    for (let i = 0; i < argv.length; i += 2) {
        const keyName = getKeyName(argv[i]);
        if (args[keyName]) {
            console.error('Arguments are duplicated');
            process.exit(3);
        }
        args[keyName] = argv[i + 1];
    }
    return args;
}

module.exports = getArgs;
