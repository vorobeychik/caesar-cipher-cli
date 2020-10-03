let readline = require('readline');
let caesar = require('./caesar');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.on('line', (input) => {
    console.log(`decode: ${caesar.decode(input,3)}`);
    console.log(`encode: ${caesar.encode(caesar.decode(input,3),3)}`);
});