console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs')
    .command('add', 'Add a note.')
    .command('list', 'List a note.')
    .command('read', 'Read a note.')
    .command('remove', 'Remove a note.')
    .usage('Usage: $0 <command> where command=add,list,read,remove')
    .help('help').alias('help', 'h')
    .version('version','1.0.1').alias('version','V')
    .option({
         title: {
            alias: 't',
            description: "Title of the note.",
            requiresArg: true,
            required: false
        },
        body: {
            alias: 'l',
            description: "Body of the note.",
            requiresArg: true,
            required: false
        }
    });
    //     read: {
    //         alias: 'r',
    //         description: "--title=\"\" --body=\"\"",
    //         requiresArg: true,
    //         required: false
    //     },
    //     remove:{
    //         alias: 'rm',
    //         description: "--title=\"\" --body=\"\"",
    //         requiresArg: true,
    //         required: false
    //     }});
const notes = require('./notes.js');



var argv = yargs.argv;

var command = process.argv[2];
// Here we're using process.argv to return the first item passed from the command line
// console.log('Command from process:', command);
// Alternatively, we can use yargs to get the same information
// command = argv._[0];

console.log(command);

if(command === 'add') {
// We removed the console.log and called a function in notes called addNote
    var note = notes.addNote(argv.title,argv.body);
    if (note === undefined){
        console.log(`A note with the title "${argv.title}" already exists.`);
    } else {
        console.log(`The following note has been added:`);
        notes.logNote(note);        
    }
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    var note = notes.getNote(argv.title);
    if (note === undefined){
        console.log(`A note with the title "${argv.title}" does not exist.`);
    } else {
        console.log(`The note you requested to read:`);
        notes.logNote(note);
    }
} else if (command === 'remove') {
    var title = notes.removeNote(argv.title);
    var message = title ? `Note titled "${argv.title}" has been removed.` : `A note with the title "${argv.title}" does not exist.` ;
    console.log(message);
}
else {
    console.log('Command not recognized.')
}

// console.log('Command: ', command);