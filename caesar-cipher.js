const { pipeline } = require('stream');
const {readStream,writeStream,transformStream}= require('./streams');

pipeline(
    readStream,
    transformStream,
    writeStream,
    ((err) => {
        if (err) {
            console.log(err.message)
        }
    })
);


