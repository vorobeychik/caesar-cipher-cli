const minimist = require('minimist')
const argv = minimist(process.argv.slice(2),{
    alias:{
        a:'action',
        s:'shift',
        i:'input',
        o:'output',
    }
});


const action = argv['action'];
const shift = argv['shift'];
const input = argv['input'];
const output = argv['output'];

if(!(action && shift && input && output)){
    process.stderr.write('Вы должны ввести все обязательные аргументы');
    process.exit(1);
}else if(shift){

}
module.exports =  {
    action,
    shift,
    input,
    output
};
