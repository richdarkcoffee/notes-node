console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

var argv = yargs.argv;
var command = process.argv[2];

// Here we're comparing the output of process and yargs
console.log('Process:',process.argv);
console.log('Yargs:',argv);



if(command === 'add') {
// We removed the console.log and called a function in notes called addNote
    notes.addNote(argv.title,argv.body);
} else if (command === 'list') {
    console.log('Listing notes.');
} else if (command === 'read') {
    console.log('Reading note.');
} else if (command === 'remove') {
    console.log('Removing note.');
}
else {
    console.log('Command not recognized.')
}

console.log('Command: ', command);