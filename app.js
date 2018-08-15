console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

var argv = yargs.argv;
var command = process.argv[2];
// Here we're using process.argv to return the first item passed from the command line
// console.log('Command from process:', command);
// Alternatively, we can use yargs to get the same information
command = argv._[0];

// Here we're displaying both the command and yargs information
// console.log('Command from yargs:', command);
// console.log('Yargs:', argv);


if(command === 'add') {
// We removed the console.log and called a function in notes called addNote
    var note = notes.addNote(argv.title,argv.body);
    if (note === undefined){
        console.log(`A note with the title: "${argv.title}" exists.`);
    } else {
        console.log(`Note titled ${note.title} has been added.`)
    }
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    notes.getNote(argv.title);
} else if (command === 'remove') {
    var title = notes.removeNote(argv.title);
    if (title === undefined){
        console.log(`A note with the title: "${title}" does not exist.`);
    } else {
        console.log(`Note titled ${title} has been removed.`)
    }
}
else {
    console.log('Command not recognized.')
}

// console.log('Command: ', command);