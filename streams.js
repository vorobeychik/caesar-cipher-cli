const fs = require('fs')
const path = require('path')
const Stream = require('stream')
const {decode,encode} = require('./caesar')
const {action,shift,input,output } = require('./checkArgs')

const cypher =  action === 'encode' ? encode : decode;

if(input !== true){

    fs.access( input, fs.constants.F_OK, (err) => {
      if (err)
         process.stderr.write('File is not defined')
         process.exit(2);
    });
     fs.access( input, fs.constants.R_OK, (err) => {
          if (err)
             process.stderr.write('Cant read the file')
             process.exit(3);
        });
}

if(output !== true){
     fs.access(  output, fs.constants.F_OK , (err) => {
          if (err)
             process.stderr.write('File is not defined')
             process.exit(4);
        });
     fs.access( output, fs.constants.W_OK, (err) => {
          if (err)
             process.stderr.write('Cant write the file')
             process.exit(5);
          });
}

const readStream = input === true ?  process.stdin : fs.createReadStream(path.resolve(__dirname,input),'utf8')
const writeStream =  output === true  ? process.stdout : fs.createWriteStream(path.resolve(__dirname,output))






const transformStream = new Stream.Transform({
    transform(chunk,encoding,callback){
        const transformed = cypher(chunk.toString(), shift)

        callback(null,transformed)
    }
})





module.exports = {
   readStream,
   writeStream,
   transformStream
}